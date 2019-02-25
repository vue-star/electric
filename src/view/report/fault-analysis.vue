<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">电表选择：
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
                <fault-chart style="height: 300px;" :value="barData" :text="textTitle+'故障类型统计'" />
            </Card>
        </Row>
        <div class="list" v-show='showList'>
            <div class='table-wrap'>
                <i-table stripe highlight-row :columns="columns1" :data="listData" @on-row-click='selectItem'>
                </i-table>
                <Spin :fix='true' v-show='isLoading'>
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </div>
            <Page class='page-wrap' show-elevator show-total :total="total" :current="queryParam.pageNumber+1"
                @on-change='pageChange'>
            </Page>
        </div>
    </div>

</template>
<script>
    import FaultChart from './components/fault-chart.vue'
    import {
        getFaultList
    } from '@/api/faultReport'
    import {
        getGetAllCustomer,
        getCapacityData
    } from '@/api/demandCurve'
    import {
        formatData,
        addDate
    } from '@/libs/tools'
    import {
        getDragList,
        getDataList
    } from '@/api/data'
    export default {
        name: 'fault_analysis',
        components: {
            FaultChart
        },
        data() {
            return {
                columns1: [{
                        title: '序号',
                        key: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '设备名称',
                        key: 'name',
                        align: 'center'

                    },
                    {
                        title: '故障类型',
                        key: 'faultType',
                        align: 'center'
                    },
                    {
                        title: '故障描述',
                        key: 'faultDescribe',
                        align: 'center'
                    },
                    {
                        title: '报警号码',
                        key: 'alarmNumber',
                        align: 'center'
                    },
                    {
                        title: '故障内容',
                        key: 'faultContent',
                        align: 'center'
                    },
                    {
                        title: '是否报警',
                        key: 'isAlarm',
                        align: 'center'
                    },
                    {
                        title: '故障时间',
                        key: 'faultTime',
                        align: 'center'
                    }
                ],
                listData: [],
                electricityMeterInfoId: 0,
                showList: true,
                isLoading: false,
                dateTime: [addDate(new Date(), -7), addDate(new Date(), 0)],
                lineText: '',
                customerId: '',
                textTitle: '',
                total: 1,
                xAxisData: [],
                seriesData: [],
                customerList: [],
                itemList: [],
                queryParam: {
                    'maxResultCount': 10,
                    'filter': '',
                    'pageNumber': 0,
                    'skipCount': 0
                },
                barData: {
                    电压故障: 225,
                    电流故障: 132,
                    采集故障: 153,
                    网络故障: 133,
                    功能因素: 453
                }
            }
        },
        methods: {
            init() {
                // this.getCustomerList();
                this.getListData()
                this.getSelectData()
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
            getListData() {
                return new Promise((resolve, reject) => {
                    getFaultList(this.queryParam).then(res => {
                        const data = res.data
                        this.listData = data
                        let size = this.queryParam.skipCount + 1
                        this.listData.forEach(element => {
                            element.index = size++
                            // element.creationTime=formatData(element.creationTime,"day");
                        })
                        this.total = data.length
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getEleData() {
                return new Promise((resolve, reject) => {
                    getDataList().then(res => {
                        const data = res.data
                        this.barData = data[0]
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
                this.getEleData()
                this.getListData()
                this.textTitle = val
            },
            getCapacityData() {
                return new Promise((resolve, reject) => {
                    getCapacityData(this.electricityMeterInfoId, this.dateTime, 30, 0).then(res => {
                        const data = res.data.result
                        var capacity = []
                        var hour = []
                        data.items.forEach(element => {
                            let date = formatData(this.dateTime, 'day') + ' ' + element.hour +
                                '时'
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
                this.getEleData()
                this.getListData()
            },
            selectItem(data, index) {
                this.deleteBtn = true
                this.editBtn = true
                this.data = data
                this.selectIndex = index
                this.isSelect = true
            },
            pageChange(data) {
                this.queryParam.pageNumber = data - 1
                this.queryParam.skipCount = (data - 1) * this.queryParam.maxResultCount
                this.getListData()
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
