<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">选择检测点：
                <Select v-model="electricityMeterInfoId" @on-change='selectedChange' class='operate' style="width:200px">
                    <Option v-for="item in electricityList" :value="item.id" :key="item.id">{{ item.alias }}</Option>
                </Select>
            </div>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="date" :value="dateTime" placeholder="Select date" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
        </div>
        <Row style="margin-top: 20px;">
            <Card shadow>
                <voltage-chart style="height: 500px;" :value="barData" :date-time="dateTime" text='电压分析' />
            </Card>
        </Row>
    </div>

</template>
<script>
    import VoltageChart from './components/voltage-chart.vue'
    import { getVoltageAnalysis, getElectricityDropdownList } from '@/api/voltageAnalysis'
    import { formatData, addDate } from '@/libs/tools'
    import {
        getDragList,
        getDataList
    } from '@/api/data'
    export default {
        name: 'voltage_analysis',
        components: {
            VoltageChart
        },
        data() {
            return {
                electricityMeterInfoId: 0,
                showList: true,
                dateTime: addDate(new Date(), 0),
                customerId: '',
                textTitle: '',
                electricityList: [],
                itemList: [],
                xAxisData: [],
                seriesData: [],
                customerList: [],
                barData: []
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
                this.getSelectData()
            },
            getSelectData() {
                return new Promise((resolve, reject) => {
                    getElectricityDropdownList(this.organizationUnitId).then(res => {
                        const data = res.data.result
                        this.electricityList = data
                        this.electricityMeterInfoId = data.length === 0 ? 0 : data[0].id
                        this.textTitle = data.length === 0 ? 0 : data[0].alias
                        this.getCapacityData()
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            selectedChange(val) {
                this.getCapacityData()
                this.electricityMeterInfoId = val
                this.electricityList.forEach(element => {
                    if (element.id === val) {
                        this.textTitle = element.alias
                    }
                })
            },
            getCapacityData() {
                return new Promise((resolve, reject) => {
                    getVoltageAnalysis(this.dateTime, this.dateTime, this.electricityMeterInfoId).then(res => {
                        const data = res.data.result
                        this.barData = data
                        this.barData.forEach(element => {
                            element.creationTime = formatData(element.creationTime, 'onlyHour')
                        })
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            dateChange(val) {
                this.dateTime = val
                this.getCapacityData()
            }
        },
        mounted() {
            this.init()
        }
    }

</script>
<style>
    @import "../components/search/searchAndOperate.less";

    .card-area {
        background-color: white;
        margin-top: 5px;
        border: 1px solid;
    }

    .top-area {
        background-color: rgb(221, 226, 226);
        padding: 5px;
    }

    .top-style {
        height: 5px;
        background-color: darkcyan;
    }

</style>
