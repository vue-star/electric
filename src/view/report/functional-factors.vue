<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">监测点选择：
                <Select v-model="electricityMeterInfoId" @on-change='selectedChange' class='operate' style="width:200px">
                    <OptionGroup  v-for="items in customerList" :value="items.customerId" :key="items.customerId" :label="items.customerName">
                        <Option v-for="item in items.meterInfosDtoList" :value="item.id" :key="item.id">{{ item.equipmentName }}</Option>
                    </OptionGroup>
                </Select>
            </div>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="daterange" :value="dateTime" placeholder="请选择时间" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
        </div>
        <Row style="margin-top: 20px;">
            <Card shadow>
                <factors-chart style="height: 700px;" :value="barData" text="功能因素" />
            </Card>
        </Row>
    </div>

</template>
<script>
    import FactorsChart from './components/factors-chart.vue'
    import { getGetAllCustomer, getCapacityData } from '@/api/demandCurve'
    import { formatData, addDate } from '@/libs/tools'
    export default {
        name: 'functional_factors',
        components: {
            FactorsChart
        },
        data() {
            return {
                electricityMeterInfoId: 0,
                showList: true,
                dateTime: [addDate(new Date(), -7), addDate(new Date(), 0)],
                lineText: '',
                xAxisData: [],
                seriesData: [],
                customerList: [],
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
        methods: {
            init() {
                // this.getCustomerList();
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
                this.customerList.forEach(element => {
                    element.meterInfosDtoList.forEach(item => {
                        if (item.id == val) {
                            this.lineText = element.customerName + item.equipmentName
                        }
                    })
                })
                // this.getCapacityData();
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
                // this.getCapacityData();
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
