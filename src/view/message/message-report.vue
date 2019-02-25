<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">客户选择：
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
        <Row :gutter="20">
            <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" class="infor-div">
                <infor-card :color="infor.color" :icon="infor.icon" :icon-size="42" :icon-color="infor.iconColor">
                    <p style="color: #000; padding-bottom: 20px;">{{ infor.title }}</p>
                    <count-to :end="infor.count" count-class="count-style"/>
                </infor-card>
            </i-col>
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
    import { InforCard } from '_c/info-card'
    import CountTo from '_c/count-to'
    import { getMessageList } from '@/api/messageReport'
    import { formatData, addDate } from '@/libs/tools'
    import { getDragList, getDataList } from '@/api/data'
    import Mock from 'mockjs'
    
    export default {
        name: 'message_report',
        components: {
            InforCard,
            CountTo
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
                        title: '客户名称',
                        key: 'name',
                        align: 'center'

                    },
                    {
                        title: '故障类型',
                        key: 'faultType',
                        align: 'center'
                    },
                    {
                        title: '通知内容',
                        key: 'msgContent',
                        align: 'center'
                    },
                    {
                        title: '通知号码',
                        key: 'msgNumber',
                        align: 'center'
                    },
                    {
                        title: '发送状态',
                        key: 'sendState',
                        align: 'center'
                    },
                    {
                        title: '通知时间',
                        key: 'msgTime',
                        align: 'center'
                    }
                ],
                listData: [],
                electricityMeterInfoId: 0,
                showList: true,
                isLoading: false,
                dateTime: [addDate(new Date(), -7), addDate(new Date(), 0)],
                lineText: '',
                total: 1,
                queryParam: {
                    'maxResultCount': 10,
                    'filter': '',
                    'pageNumber': 0,
                    'skipCount': 0
                },
                xAxisData: [],
                seriesData: [],
                customerList: [],
                itemList: [],
                inforCardData: [{
                        title: '短信总量（条）',
                        icon: 'md-person-add',
                        count: 550,
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    },
                    {
                        title: '已用短信（条）',
                        icon: 'md-locate',
                        count: 450,
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    },
                    {
                        title: '剩余短信（条）',
                        icon: 'md-eye-off',
                        count: 300,
                        iconColor: '#2d8cf0',
                        color: '#fff'
                    }
                ]
            }
        },
        methods: {
            init() {
                // this.getCustomerList();
                this.getSelectData()
                this.getListData()
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
                    getMessageList(this.queryParam).then(res => {
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
            getCountData(){
                const Random = Mock.Random
                this.inforCardData.forEach(element=>{
                    element.count = Random.integer(100,1000)
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
                this.getListData()
                this.getCountData()
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
                this.getListData()
                this.getCountData()
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

    .infor-div {
        width: 23%;
        height: 150px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin: 10px;
    }

    .count-style {
        font-size: 35px;
        color: #2d8cf0;
        margin-left: 20px;
    }

</style>
