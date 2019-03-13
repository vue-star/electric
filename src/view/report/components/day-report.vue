<template>
    <div>
        <div v-show='showList' class='query-wrap'>
            <div class="operate-wrap" style="margin-left: 20px">时间选择：
                <DatePicker class='operate' type="date" :value="dateTime" placeholder="Select date" @on-change='dateChange'
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
                columns1: [],
                listData: [],
                showList: true,
                isLoading: false,
                dateTime: addDate(new Date(), 0),
                total: 1,
                electricityBelongType: 0, // 所属类别 Day=0, Month=1, Year=2
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
                                                colItem.title = (index-1)+'点'
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
                this.dateTime = val
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
