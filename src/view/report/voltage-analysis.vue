<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">监测点选择：
                <Select v-model="customerId" @on-change='selectedChange' class='operate' style="width:200px">
                    <Option v-for="item in itemList" :value="item.name" :key="item.name">{{ item.name }}</Option>
                </Select>
            </div>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="daterange" :value="dateTime" placeholder="Select date" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
        </div>
        <Row style="margin-top: 20px;">
            <Card shadow>
                <voltage-chart style="height: 700px;" :value="barData" :text="textTitle+'电压分析'" />
            </Card>
        </Row>
    </div>

</template>
<script>
    import VoltageChart from './components/voltage-chart.vue'
    import { getEchartData } from '@/api/currentAnalysis'
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
                dateTime: [addDate(new Date(), -7), addDate(new Date(), 0)],
                lineText: '',
                customerId: '',
                textTitle: '',
                itemList: [],
                xAxisData: [],
                seriesData: [],
                customerList: [],
                barData: []
            }
        },
        methods: {
            init() {
                this.getSelectData();
                this.getBarData()
            },
            getSelectData() {
                return new Promise((resolve, reject) => {
                    getDragList().then(res => {
                        const data = res.data
                        this.itemList = data
                        this.customerId = this.itemList[0].name
                        this.textTitle = this.itemList[0].name
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getBarData() {
                return new Promise((resolve, reject) => {
                    getEchartData().then(res => {
                        const data = res.data
                        this.barData = data
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getCustomerList() {
                return new Promise((resolve, reject) => {
                    getGetAllCustomer().then(res => {
                        const data = res.data.result
                        this.customerList = data
                        this.electricityMeterInfoId = data[0].meterInfosDtoList[0].id
                        this.lineText = data[0].customerName + data[0].meterInfosDtoList[0].equipmentName
                        this.getCapacityData()
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            selectedChange(val) {
                this.getBarData()
                this.textTitle = val
            },
            getCapacityData() {
                return new Promise((resolve, reject) => {
                    getCapacityData(this.electricityMeterInfoId, this.dateTime, 30, 0).then(res => {
                        const data = res.data.result
                        var capacity = []
                        var hour = []
                        data.items.forEach(element => {
                            let date = formatData(this.dateTime, 'day') + ' ' + element.hour + '时'
                            capacity.push(element.capacity / 1000)
                            hour.push(date)
                        })
                        this.seriesData = capacity
                        this.xAxisData = hour
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            dateChange(val) {
                this.dateTime = val
                this.getBarData()
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
