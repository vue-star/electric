<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">选择检测点：
                <Select v-model="electricityMeterInfoId" @on-change='selectedChange' class='operate' style="width:200px">
                    <Option v-for="item in electricityList" :value="item.id" :key="item.id">{{ item.alias }}</Option>
                </Select>
            </div>
        </div>
        <Row :gutter="20" style="margin-right:0px">
            <i-col :xs="24" :md="18" :lg="12" style="padding:0px">
                <div class="card-area">
                    <!-- <div class="top-style"></div> -->
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>日环比</p>
                    </div>
                    <div :xs="12" :md="8" :lg="4" v-for="(navi, i) in naviCardData" :key="`navi-${i}`" class="navi-div">
                        <navi-card shadow :color="navi.color" :title="navi.title" :icon="navi.icon" :icon-size="14">
                            <Icon v-if="i==2 && navi.count<100" class="count-style-navi" style="margin-top:20px" type="md-arrow-round-down"
                                color="#9A66E4" size="30" />
                            <Icon v-if="i==2 && navi.count>=100" class="count-style-navi" style="margin-top:20px" type="md-arrow-round-up"
                                color="red" size="30" />
                            <p :style="{color:navi.color}" class="count-style-navi">{{navi.count}}</p>
                        </navi-card>
                    </div>
                </div>
            </i-col>

            <i-col :xs="24" :md="18" :lg="12" style="padding-left:12px;padding-right:0px">
                <div class="card-area">
                    <!-- <div class="top-style"></div> -->
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>月环比</p>
                    </div>
                    <div :xs="12" :md="8" :lg="4" v-for="(navi, i) in naviCardData1" :key="`navi-${i}`" class="navi-div">
                        <navi-card shadow :color="navi.color" :title="navi.title" :icon="navi.icon" :icon-size="14">
                            <Icon v-if="i==2 && navi.count<100" class="count-style-navi" style="margin-top:20px" type="md-arrow-round-down"
                                color="#9A66E4" size="30" />
                            <Icon v-if="i==2 && navi.count>=100" class="count-style-navi" style="margin-top:20px" type="md-arrow-round-up"
                                color="red" size="30" />
                            <p :style="{color:navi.color}" class="count-style-navi">{{navi.count}}</p>
                        </navi-card>
                    </div>
                </div>
            </i-col>
        </Row>
        <Row :gutter="20" style="margin-top: 20px;">
            <div class="card-area">
                <!-- <div class="top-style"></div> -->
                <div class="top-area">
                    <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                    <p>日负荷曲线</p>
                </div>
                <i-col span="24">
                    <Card shadow class="load-card">
                        <survey-chart style="height: 340px;" :xAxisData="xAxisData" :seriesData="seriesData" :average="average" :text="lineText" />
                    </Card>
                    <div class="card-div">
                        <card class='operate-navi' type="primary">
                            <!-- <count-to :end="8" count-class="count-style" /> -->
                            <p class="card-p">{{ max }}</p>
                            <p>最高负荷</p>
                        </card>
                    </div>
                    <div class="card-div">
                        <card class='operate-navi' type="primary">
                            <!-- <count-to :end="8" count-class="count-style" /> -->
                            <p class="card-p">{{ min }}</p>
                            <p>最低负荷</p>
                        </card>
                    </div>
                    <div class="card-div">
                        <card class='operate-navi' type="primary">
                            <!-- <count-to :end="8" count-class="count-style" /> -->
                            <p class="card-p">{{ average }}</p>
                            <p>平均负荷</p>
                        </card>
                    </div>
                </i-col>
            </div>
        </Row>
        <Row :gutter="20" style="margin-top: 20px;">
            <div class="card-area">
                <!-- <div class="top-style"></div> -->
                <div class="top-area">
                    <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                    <p>用电统计</p>
                </div>
                <i-col span="24">
                    <Card shadow class="trend-card" style="">
                        <trend-chart style="height: 315px;margin-right:10px" :xAxisData="statisticXData" :unit="unit" :seriesData="statisticSData"
                            :text="lineText" />
                    </Card>
                    <div class="btn-div">
                        <Button class='operate-navi' type="primary">
                            <p style="fontSize:35px" @click="hourClick()">48</p>
                            <p>过去48时</p>
                        </Button></div>
                    <div class="btn-div">
                        <Button class='operate-navi' type="primary">
                            <p style="fontSize:35px" @click="dayClick()">31</p>
                            <p>过去31天</p>
                        </Button></div>
                    <div class="btn-div">
                        <Button class='operate-navi' type="primary">
                            <p style="fontSize:35px" @click="monthClick()">12</p>
                            <p>过去12月</p>
                        </Button>
                    </div>
                </i-col>
            </div>
        </Row>
    </div>
</template>

<script>
    import {
        NaviCard
    } from '_c/info-card'
    import Example from './components/example.vue'
    import {
        formatData
    } from '@/libs/tools'
    import Map from './components/Map.vue'
    import CountTo from '_c/count-to'
    import SurveyChart from './components/survey-chart.vue'
    import TrendChart from './components/trend-chart.vue'
    import {
        getElectricityDropdownList,
        getPowerTrendList,
        getElectricityRingRatio,
        getUsePowerTrend
    } from '@/api/surveySurvey'
    export default {
        name: 'survey_survey',
        components: {
            NaviCard,
            SurveyChart,
            TrendChart,
            CountTo
        },
        data() {
            return {
                electricityMeterInfoId: 0,
                electricityList: [],
                showList: true,
                lineText: '',
                naviCardData: [{
                        title: '当日用电(kwh)',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#2d8cf0'
                    },
                    {
                        title: '昨日同期(kwh)',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#19be6b'
                    },
                    {
                        title: '趋势',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#ff9900'
                    }
                ],
                naviCardData1: [{
                        title: '当月用电(kwh)',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#ed3f14'
                    },
                    {
                        title: '上月同期(kwh)',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#E46CBB'
                    },
                    {
                        title: '趋势',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#9A66E4'
                    }
                ],
                xAxisData: [],
                seriesData: [],
                statisticXData: [],
                statisticSData: [],
                lineData: {},
                max:'',
                min:'',
                average:'',
                unit: 0 // X轴数据单位
            }
        },
        computed: {
            organizationUnitId() {
                return this.$store.state.user.organizationId
            }
        },
        watch: {
            organizationUnitId() {
                this.init()
            }
        },
        methods: {
            init() {
                this.getElectricityList()
            },
            getElectricityList() {
                return new Promise((resolve, reject) => {
                    getElectricityDropdownList(this.organizationUnitId).then(res => {
                        const data = res.data.result
                        this.electricityList = data
                        this.electricityMeterInfoId = data.length === 0 ? 0 : data[0].id
                        this.lineText = data.length === 0 ? '' : data[0].name
                        this.getElectricityRingRatio()
                        this.getCapacityData()
                        this.getDataStatistics()
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getDataStatistics() {
                return new Promise((resolve, reject) => {
                    getUsePowerTrend(this.electricityMeterInfoId).then(res => {
                        const data = res.data.result
                        this.lineData = data
                        let XData = []
                        let SData = []
                        data.hourStatistic.forEach(element => {
                            XData.push(element.belongsTo)
                            SData.push(((element.tendency) * 100).toFixed(2))
                        })
                        this.statisticXData = XData
                        this.statisticSData = SData
                        this.unit=1
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getElectricityRingRatio() {
                return new Promise((resolve, reject) => {
                    getElectricityRingRatio(this.electricityMeterInfoId).then(res => {
                        const data = res.data.result
                        this.naviCardData[0].count = data.todayElectricityValue.toFixed(2)
                        this.naviCardData[1].count = data.yesterdayElectricityValue.toFixed(2)
                        this.naviCardData[2].count = ((data.dayTend) * 100).toFixed(2)
                        this.naviCardData1[0].count = data.thisMonthElectricityValue.toFixed(2)
                        this.naviCardData1[1].count = data.lastMonthElectricityValue.toFixed(2)
                        this.naviCardData1[2].count = ((data.monthTend) * 100).toFixed(2)
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getCapacityData() {
                return new Promise((resolve, reject) => {
                    getPowerTrendList(this.electricityMeterInfoId).then(res => {
                        const data = res.data.result
                        var capacity = []
                        var hour = []
                        data.forEach(element => {
                            var val= (element.power.toFixed(2) / 1000)
                            capacity.push(val)
                            hour.push(element.belogHour + '点')
                        })
                        this.seriesData = capacity
                        this.xAxisData = hour

                        this.max = capacity.length===0 ? 0 : Math.max.apply(null,capacity).toFixed(2)
                        this.min = capacity.length===0 ? 0 : Math.min.apply(null,capacity).toFixed(2)
                        this.average = capacity.length===0 ? '0' : this.getAverage(capacity).toFixed(2)
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getAverage(array){
                var len = array.length;
                var sum = 0;
                for(var i = 0; i < len ; i++){
                    sum += array[i];
                }
                return sum/len;
            },
            hourClick() {
                let XData = []
                let SData = []
                this.lineData.hourStatistic.forEach(element => {
                    XData.push(element.belongsTo)
                    SData.push(((element.tendency) * 100).toFixed(2))
                })
                this.statisticXData = XData
                this.statisticSData = SData
                this.unit=1
            },
            dayClick() {
                let XData = []
                let SData = []
                this.lineData.dayStatistic.forEach(element => {
                    XData.push(element.belongsTo)
                    SData.push(((element.tendency) * 100).toFixed(2))
                })
                this.statisticXData = XData
                this.statisticSData = SData
                this.unit=2
            },
            monthClick() {
                let XData = []
                let SData = []
                this.lineData.monthStatistic.forEach(element => {
                    XData.push(element.belongsTo)
                    SData.push(((element.tendency) * 100).toFixed(2))
                })
                this.statisticXData = XData
                this.statisticSData = SData
                this.unit=3
            },
            selectedChange(val) {
                this.electricityList.forEach(element => {
                    this.lineText = element.name
                })
                this.electricityMeterInfoId = val
                this.getElectricityRingRatio()
                this.getCapacityData()
                this.getDataStatistics()
            }
        },
        mounted() {
            this.init()
            //         
        }
    }

</script>

<style lang="less">
    @import "../components/search/searchAndOperate.less";

    .count-style-navi {
        font-size: 25px;
        float: right;
        margin-top: 15px;
        margin-right: 10px;
    }

    .navi-div {
        width: 29%;
        min-width: 150px;
        height: 125px;
        padding-bottom: 10px;
        float: left;
        margin: 10px;
    }

    .btn-div {
        width: 100px;
        height: 100px;
        margin: 12px;
        float: left;
    }

    .card-div {
        width: 80px;
        height: 80px;
        float: left;
        color: white;
        margin-top: 25px;
        margin-left: 20px;
        text-align: center;
        .operate-navi{
            background: #2d8cf0;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }

    .card-area {
        float: left;
        width: 98.5%;
        min-width: 250px;
        background-color: #F2F2F2;
        margin-top: 5px;
        margin-left: 10px;
        //border: 1px solid;

        .ivu-card-body {
            padding: 0px;
        }

        ;

        .top-area {
            background-color: rgb(223, 230, 230);
            padding: 5px;
        }

        .top-style {
            height: 5px;
            background-color: darkcyan;
        }
    }

    .count-style {
        font-size: 25px;
        color: aliceblue
    }

    .load-card {
        float: left;
        width: 90%;
        margin-top: 12px;
    }

    .trend-card {
        float: right;
        width: 88%;
        margin-top: 12px;
    }
    .card-p{
        font-size: 20px
    }

</style>
