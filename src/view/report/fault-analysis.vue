<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 5px">选择检测点：
                <Select v-model="electricityMeterInfoId" @on-change='selectedChange' class='operate' style="width:200px">
                    <Option v-for="item in electricityList" :value="item.id" :key="item.id">{{ item.alias }}</Option>
                </Select>
            </div>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="daterange" :value="dateTime" placeholder="Select date" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
        </div>
        <Row style="margin-top: 20px;">
            <div class="card-area">
                    <!-- <div class="top-style"></div> -->
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>日环比</p>
                    </div>
            <Card shadow>
                <fault-chart style="height: 300px;" :value="barData" :text="textTitle+'故障类型统计'" />
            </Card>
            </div>
        </Row>
        <div class="list" v-show='showList'>
            <div class='table-wrap'>
                <i-table stripe highlight-row :columns="columns1" :data="listData">
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
    import { getElectricityDropdownList, getFaultSummary, getFaultList } from '@/api/faultReport'
    import { getGetAllCustomer, getCapacityData } from '@/api/demandCurve'
    import { formatData, addDate } from '@/libs/tools'
    import { getDragList, getDataList } from '@/api/data'
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
                        title: '故障名称',
                        key: 'equipmentName',
                        align: 'center'
                    },
                    {
                        title: '故障类型',
                        key: 'faultType',
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
                    }
                ],
                listData: [],
                electricityMeterInfoId: 0,
                showList: true,
                isLoading: false,
                dateTime: [addDate(new Date(), -7), addDate(new Date(), 0)],
                customerId: '',
                textTitle: '',
                total: 1,
                electricityList: [],
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
                        this.electricityMeterInfoId = data[0].id
                        this.textTitle = data[0].alias
                        this.getCapacityData()
                        this.getListData()
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            getListData() {
                return new Promise((resolve, reject) => {
                    getFaultList(this.dateTime[0], this.dateTime[1], this.electricityMeterInfoId).then(res => {
                        const data = res.data.result
                        this.listData = data.items
                        let size = this.queryParam.skipCount + 1
                        this.listData.forEach(element => {
                            element.index = size++
                            if (element.isAlarm) {
                                element.isAlarm = '是'
                            } else {
                                element.isAlarm = '否'
                            }
                        })
                        this.total = data.totalCount
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            selectedChange(val) {
                this.getCapacityData()
                this.getListData()
                this.electricityMeterInfoId = val
                this.electricityList.forEach(element => {
                    if (element.id === val) {
                        this.textTitle = element.alias
                    }
                })
            },
            getCapacityData() {
                return new Promise((resolve, reject) => {
                    getFaultSummary(this.dateTime[0], this.dateTime[1], this.electricityMeterInfoId).then(res => {
                        const data = res.data.result
                        this.barData = data
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            dateChange(val) {
                this.dateTime = val
                this.getCapacityData()
                this.getListData()
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
        /* border: 1px solid; */
    }

    .top-area {
        background-color: rgb(221, 226, 226);
        padding: 5px;
        font-weight: bold;
    }

    .top-style {
        height: 5px;
        background-color: darkcyan;
    }

</style>
