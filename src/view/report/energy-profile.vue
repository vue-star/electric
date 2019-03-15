<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="date" :value="dateTime" placeholder="请选择时间" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
        </div>
        <Row :gutter="20">
            <div class="card-area">
                    <!-- <div class="top-style"></div> -->
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>日环比</p>
                    </div>
            <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" class="infor-div">
                <infor-card :color="infor.color" :icon="infor.icon" :icon-size="42" :icon-color="infor.iconColor">
                    <p style="color: #000; padding-bottom: 20px;">{{ infor.title }}</p>
                    <p style="color: #2d8cf0;font-size: 35px;">{{ infor.count }}</p>
                </infor-card>
            </i-col>
            </div>
        </Row>
        <Row :gutter="20">
            <div class="card-area">
                    <!-- <div class="top-style"></div> -->
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>日环比</p>
                    </div>
            <i-col :xs="12" :md="8" :lg="4" class="power-div">
                <Card>
                    <day-chart style="height: 200px;" :value="dayData" text="本日电量" :subtext="dayTitle + 'kwh'"/>
                </Card>
            </i-col>
            <i-col :xs="12" :md="8" :lg="4" class="power-div">
                <Card>
                    <mon-chart style="height: 200px;" :value="monthData" text="本月电量" :subtext="monthTitle + 'kwh'"/>
                </Card>
            </i-col>
            <i-col :xs="12" :md="8" :lg="4" class="power-div">
                <Card>
                    <year-chart style="height: 200px;" :value="yearData" text="本年电量" :subtext="yearTitle + 'kwh'"/>
                </Card>
            </i-col>
            </div>
        </Row>
        <Row :gutter="20" >
            <div class="card-area">
                    <!-- <div class="top-style"></div> -->
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>配变日用电量趋势</p>
                    </div>
            <Card>
                <user-chart style="height: 300px;" :value="electricityData" :date-time="dateTime"/>
            </Card>
            </div>
        </Row>
    </div>
</template>

<script>
    import { InforCard } from '_c/info-card'
    import CountTo from '_c/count-to'
    import { ChartLine, StatisticsBar } from '_c/charts'
    import DayChart from './components/day-chart.vue'
    import MonChart from './components/mon-chart.vue'
    import YearChart from './components/year-chart.vue'
    import UserChart from './components/user-chart.vue'
    import { formatData, addDate } from '@/libs/tools'
    import { getUsePowerSummary, getPowerSummary, getElectricitySummary } from '@/api/energyProfile'
    export default {
        name: 'energy_profile',
        components: {
            InforCard,
            CountTo,
            ChartLine,
            StatisticsBar,
            DayChart,
            MonChart,
            YearChart,
            UserChart
        },
        data() {
            return {
                dateTime: addDate(new Date(),0) ,
                showList: true,

                inforCardData: [{
                        title: '计量方式',
                        icon: 'md-person-add',
                        count: '高供低记',
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    },
                    {
                        title: '用电类别',
                        icon: 'md-locate',
                        count: '民用电',
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    },
                    {
                        title: '运行总容量(KVA)',
                        icon: 'md-calculator',
                        count: '1000KVA',
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    },
                    {
                        title: '采集点数',
                        icon: 'md-eye-off',
                        count: '30',
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    }
                ],
                dayData: [],
                monthData: [],
                yearData: [],
                electricityData: {},
                dayTitle: 0,
                monthTitle: 0,
                yearTitle: ''
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
        methods:{
            init() {
                this.getUsePowerData()
                this.getPowerData()
                this.getElectricityData()
            },
            getUsePowerData() {
                return new Promise((resolve, reject) => {
                    getUsePowerSummary(this.organizationUnitId).then(res => {
                        const data = res.data.result
                        this.inforCardData[0].count = data.measurementType
                        this.inforCardData[1].count = data.electricityCategory
                        this.inforCardData[2].count = data.capacity
                        this.inforCardData[3].count = data.measurementPoints
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getPowerData() {
                return new Promise((resolve, reject) => {
                    getPowerSummary(this.organizationUnitId).then(res => {
                        const data = res.data.result
                        this.dayData=data.day.electricityConsumptionStatisticsDtoList
                        this.dayTitle=data.day.totalConsumption

                        this.monthData=data.month.electricityConsumptionStatisticsDtoList
                        this.monthTitle=data.month.totalConsumption

                        this.yearData=data.year.electricityConsumptionStatisticsDtoList
                        this.yearTitle=data.year.totalConsumption
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getElectricityData() {
                return new Promise((resolve, reject) => {
                    getElectricitySummary(this.organizationUnitId,this.dateTime,this.dateTime).then(res => {
                        const data = res.data.result
                        this.electricityData=data
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            dateChange(val){
                this.dateTime=val
                this.getElectricityData()
            }
        },
        mounted() {
            this.init()
        }
    }

</script>

<style lang="less">
    .infor-div {
        width: 23%;
        min-width: 250px;
        height: 150px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin: 10px;
    }
    .power-div {
        width: 30%;
        min-width: 250px;
        height: 240px;
        padding-left: 10px;
        margin: 20px;
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
            padding: 8px;
        }

        .top-style {
            height: 5px;
            background-color: darkcyan;
        }
    }

</style>
