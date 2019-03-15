<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="year" :value="dateTime" placeholder="Select date" @on-change='dateChange'
                    style="width: 200px">
                </DatePicker>
            </div>
            <div class="export-div">
                <Button class="export-btn" type="info" size="large" @click="exportData">
                    导出表格
                </Button>
            </div>
        </div>
        <div class="list" v-show='showList'>
            <div class='table-wrap'>
                <i-table stripe highlight-row :columns="columns1" :data="listData" ref="table">
                </i-table>
                <Spin :fix='true' v-show='isLoading'>
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </div>
            <!-- <Page class='page-wrap' show-elevator show-total :total="total" :current="queryParam.pageNumber+1"
                @on-change='pageChange'>
            </Page> -->
        </div>
    </div>

</template>
<script>
    import { formatData, addDate } from '@/libs/tools'
    import { getEnergyDataList } from '@/api/energyAnalysis'
    import Mock from 'mockjs'
    export default {
        name: 'day_report',
        components: {
        },
        data() {
            return {
                columns1: [
                    {
                        title: '设备名称',
                        key: 'name',
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '1月',
                        key: 1,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '2月',
                        key: 2,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '3月',
                        key: 3,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '4月',
                        key: 4,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '5月',
                        key: 5,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '6月',
                        key: 6,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '7月',
                        key: 7,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '8月',
                        key: 8,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '9月',
                        key: 9,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '10月',
                        key: 10,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '11月',
                        key: 11,
                        fixed: 'left',
                        align: 'center'
                    },
                    {
                        title: '12月',
                        key: 12,
                        fixed: 'left',
                        align: 'center'
                    },
                ],
                listData: [],
                showList: true,
                isLoading: false,
                dateTime: addDate(new Date(), 0),
                total: 1,
                electricityBelongType: 2, // 所属类别 Day=0, Month=1, Year=2
                queryParam: {
                    'maxResultCount': 10,
                    'filter': '',
                    'pageNumber': 0,
                    'skipCount': 0
                }
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
                this.getListData()
            },
            
            getListData() {
                return new Promise((resolve, reject) => {
                    getEnergyDataList( this.organizationUnitId,this.electricityBelongType, this.dateTime).then(
                        res => {
                            const data = res.data.result
                            this.isLoading = false
                            let colList=[
                                {
                                    title: '设备名称',
                                    key: 'name',
                                    width: 85,
                                    fixed: 'left',
                                    align: 'center'
                                }
                            ]
                            let list=[]
                            if(data !== null){
                                data.forEach((element,i) => {
                                    let listItem={
                                        name:''
                                    }
                                    element.forEach((item,index)=>{
                                        let colItem={
                                            width:80,
                                            align:'center'
                                        }
                                        if(index===0){
                                            listItem.name=item
                                        }else{
                                            this.$set(listItem,(index-1),parseFloat(item))
                                            if(i===0){
                                                colItem.title = (index)+'月'
                                                colItem.key = index-1
                                                colList.push(colItem)
                                            }
                                        }
                                    })
                                    list.push(listItem)
                                });
                                this.listData = list
                                this.columns1=colList
                            }else{
                                this.listData=[]
                            }
                            resolve()
                        },
                        error => {
                            this.$Message.error(error.error.message)
                            resolve()
                        }).catch(err => {
                        reject(err)
                    })
                })
            },
            dateChange(val) {
                this.dateTime = val + '-01-01'
                this.getListData()
            },
            pageChange(data) {
                this.queryParam.pageNumber = data - 1
                this.queryParam.skipCount = (data - 1) * this.queryParam.maxResultCount
                this.getListData()
            },
            exportData () {
                this.$refs.table.exportCsv({
                    filename: 'dayReport',
                    original: false
                });
            }     
        },
        mounted() {
            this.init()
        }
    }

</script>
<style lang="less">
    @import "../../components/search/searchAndOperate.less";

    .infor-div {
        width: 23%;
        height: 150px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin: 10px;
    }

    .table-wrap {
        position: relative;
        overflow: hidden;
    }

    .count-style {
        font-size: 35px;
        color: #2d8cf0;
        margin-left: 20px;
    }
    .export-div{
        float: right;
        height: 50px;

        .export-btn{
            margin: 10px;
        }
    }

</style>
