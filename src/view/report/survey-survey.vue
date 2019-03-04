<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">选择检测点：
                <Select v-model="electricityMeterInfoId" @on-change='selectedChange' class='operate' style="width:200px">
                    <Option v-for="item in electricityList" :value="item.id" :key="item.id">{{ item.alias }}</Option>
                </Select>
            </div>
        </div>
        

        <Row :gutter="20">
            <i-col :xs="12" :md="8" :lg="4" v-for="(navi, i) in naviCardData" :key="`navi-${i}`" class="navi-div">
                <navi-card shadow :color="navi.color" :title="navi.title" :icon="navi.icon" :icon-size="14">
                    <Icon v-if="i==5 && navi.count<100" class="count-style-navi" type="md-arrow-round-down" color="#9A66E4" />
                    <Icon v-if="i==5 && navi.count>=100" class="count-style-navi" type="md-arrow-round-up" color="#9A66E4" />
                    <Icon v-if="i==2 && navi.count<100" class="count-style-navi" type="md-arrow-round-down" color="#9A66E4" />
                    <Icon v-if="i==2 && navi.count>=100" class="count-style-navi" type="md-arrow-round-up" color="red" />
                    <p :style="{color:navi.color}" class="count-style-navi">{{navi.count}}</p>
                </navi-card>
            </i-col>
        </Row>
        <Row :gutter="20" style="margin-top: 20px;">
            <i-col span="24">
                <div>
                    <Card shadow>
                        <survey-chart style="height: 300px;" :xAxisData="xAxisData" :seriesData="seriesData" :text="lineText" />
                    </Card>
                </div>
            </i-col>
        </Row>
        <Row :gutter="20" style="margin-top: 20px;">
            <i-col span="24">
                <Card shadow style="float:right;width: 90%;">
                    <trend-chart style="height: 350px" :xAxisData="statisticXData" :seriesData="statisticSData" :text="lineText" />
                </Card>
                <div class="btn-div"><Button class='operate-navi' type="primary">
                        <p style="fontSize:32px" @click="hourClick()">48</p>
                        <p>过去48时</p>
                    </Button></div>
                <div class="btn-div"><Button class='operate-navi' type="primary">
                        <p style="fontSize:32px" @click="dayClick()">31</p>
                        <p>过去31天</p>
                    </Button></div>
                <div class="btn-div"><Button class='operate-navi' type="primary">
                        <p style="fontSize:32px" @click="monthClick()">12</p>
                        <p>过去12月</p>
                    </Button>
                </div>
            </i-col>
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
            TrendChart
        },
        data() {
            return {
                electricityMeterInfoId: 0,
                electricityList: [],
                showList: true,
                lineText: '',
                naviCardData: [{
                        title: '当日用电',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#2d8cf0'
                    },
                    {
                        title: '昨日同期',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#19be6b'
                    },
                    {
                        title: '趋势',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#ff9900'
                    },
                    {
                        title: '当月用电',
                        icon: 'md-pulse',
                        count: 0.0,
                        color: '#ed3f14'
                    },
                    {
                        title: '上月同期',
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
                lineData: {}
            }
        },
        computed: {
            organizationUnitId () {
                return this.$store.state.user.organizationId
            }
        },
        watch: {
            organizationUnitId () {
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
                        this.electricityMeterInfoId = data[0].id
                        this.lineText = data[0].name
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
                        this.naviCardData[3].count = data.thisMonthElectricityValue.toFixed(2)
                        this.naviCardData[4].count = data.lastMonthElectricityValue.toFixed(2)
                        this.naviCardData[5].count = ((data.monthTend) * 100).toFixed(2)
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
                            capacity.push(element.power / 1000)
                            hour.push(element.belogHour)
                        })
                        this.seriesData = capacity
                        this.xAxisData = hour
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
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
        }
    }

</script>

<style lang="less">
    @import "../components/search/searchAndOperate.less";

    .count-style-navi {
        font-size: 30px;
        float: right;
        margin-top: 15px;
        margin-right: 10px
    }

    .navi-div {
        width: 13%;
        height: 120px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin: 10px;
    }

    .btn-div {
        width: 8%;
        margin: 1%;
        float: left;
    }

</style>
