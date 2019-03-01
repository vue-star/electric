<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="daterange" :value="dateTime" placeholder="请选择时间" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
        </div>
        <Row :gutter="20">
            <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" class="infor-div">
                <infor-card :color="infor.color" :icon="infor.icon" :icon-size="42" :icon-color="infor.iconColor">
                    <p style="color: #000; padding-bottom: 20px;">{{ infor.title }}</p>
                    <p style="color: #2d8cf0;font-size: 35px;">{{ infor.count }}</p>
                </infor-card>
            </i-col>
        </Row>
        <Row :gutter="20">
            <i-col :xs="12" :md="8" :lg="4" class="power-div">
                <Card shadow style="box-shadow:5px 5px 5px #708194">
                    <day-chart style="height: 200px;" :value="barData" text="本日电量" subtext="1888"/>
                </Card>
            </i-col>
            <i-col :xs="12" :md="8" :lg="4" class="power-div">
                <Card shadow style="box-shadow:5px 5px 5px #708194">
                    <mon-chart style="height: 200px;" :value="barData" text="本月电量" subtext="1888"/>
                </Card>
            </i-col>
            <i-col :xs="12" :md="8" :lg="4" class="power-div">
                <Card shadow style="box-shadow:5px 5px 5px #708194">
                    <year-chart style="height: 200px;" :value="barData" text="本年电量" subtext="1888"/>
                </Card>
            </i-col>
        </Row>
        <Row style="margin-top: 20px;">
            <Card shadow>
                <user-chart style="height: 300px;" :value="barData" text="居民用电统计图" />
            </Card>
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
    import { getUsePowerSummary } from '@/api/energyProfile'
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
                dateTime: [addDate(new Date(), -7), addDate(new Date(), 0)],
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
                        title: '运行容量',
                        icon: 'md-calculator',
                        count: '1000KVA',
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    },
                    {
                        title: '计量点数',
                        icon: 'md-eye-off',
                        count: '30',
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    }
                ],
                pieData: [{
                        value: 335,
                        name: '直接访问'
                    },
                    {
                        value: 310,
                        name: '邮件营销'
                    },
                    {
                        value: 234,
                        name: '联盟广告'
                    },
                    {
                        value: 135,
                        name: '视频广告'
                    },
                    {
                        value: 1548,
                        name: '搜索引擎'
                    }
                ],
                barData: {
                    '10.00': 225,
                    '10.30': 132,
                    '11.00': 153,
                    '11.30': 133,
                    '12.00': 453,
                    '12.30': 153,
                    '13.00': 353,
                    '13.30': 183,
                    '14.00': 123,
                    '14.30': 166,
                    '15.00': 199,
                    '15.30': 133,
                    '16.00': 243,
                    '16.30': 333,
                    '17.00': 223,
                    '17.30': 193,
                    '18.00': 122,
                    '18.30': 163,
                    '19.00': 133
                }
            }
        },
        computed: {
            organizationUnitId () {
                return this.$store.state.user.organizationId
            }
        },
        methods:{
            init() {
                this.getUsePowerData()
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
        },
        mounted() {
            this.init()
        }
    }

</script>

<style lang="less">
    .count-style {
        font-size: 35px;
        color: #2d8cf0;
        margin-left: 20px;
    }

    .infor-div {
        width: 23%;
        height: 150px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin: 10px;
    }
    .power-div {
        width: 30%;
        height: 240px;
        padding-left: 10px;
        margin: 20px;
    }

</style>
