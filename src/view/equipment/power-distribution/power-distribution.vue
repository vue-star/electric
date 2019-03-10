<template>
    <div class="couplet-card">
        <div class="portlet-title" v-show='!showLog'>
            <Icon type="person-stalker"></Icon>
            <span class='title_text'>{{titleText}}</span>
        </div>

        <!--配电室信息列表-->
        <div v-show='showList' class='query-wrap'>

            <div class="operate-wrap">
                <operate class='operate' :deleteStatus='isSelect && deleteBtn' :edit='isSelect && editBtn' :addStatus='addBtn'
                    :data='data' @refreshHandler='refreshHandler' @deleteHandler='deleteHandler' @addHandler='addHandler'
                    @editHandler='editHandler'></operate>
            </div>
            <div class="search-wrap">
                <search class='search-component' @query='query' :removeInputFlag='removeInputFlag' :placeholderValue='placeholderValue'>
                </search>
            </div>
        </div>
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
        <distribution-form v-if='add' :isEdit='isEdit' :editData='data' @save='save' @back='back'>
        </distribution-form>
        <distribution-detail v-if='add' :isEdits='isEdits' :powerDistributionRoomId='powerDistributionRoomId' @back='back'>
        </distribution-detail>
    </div>
</template>
<script>
    import search from '@/view/components/search/search.vue'
    import operate from '@/view/components/button-group/index.vue'
    import distributionForm from './distribution-form.vue'
    import distributionDetail from './distribution-detail.vue'
    import expandPowerRow from './power-expend.vue'
    import { getPowerDistributionList, delPowerDistribution } from '@/api/powerDistribution'
    export default {
        name: 'power_distribution',
        data() {
            return {
                columns1: [{
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandPowerRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '序号',
                        key: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '配电室编号',
                        key: 'distributionRoomNumber',
                        align: 'center'

                    },
                    {
                        title: '配电室名称',
                        key: 'distributionRoomName',
                        align: 'center'
                    },
                    {
                        title: '表计户号',
                        key: 'meterNumber',
                        align: 'center'
                    },
                    {
                        title: '组织名称',
                        key: 'organizationUnitName',
                        align: 'center'
                    }
                ],
                listData: [],
                data: {},
                total: 1,
                page: 1,
                showList: true, // 显示列表
                showLog: false,
                isSelect: false,
                add: false,
                titleText: '配电室信息列表',
                modelTitle: '',
                iconType: 'person',
                placeholderValue: '请输入配电室名称',
                isLoading: false,
                isGroup: false,
                isEdit: false, // 点击编辑切换
                isEdits: false, // 点击编辑切换
                queryParam: {
                    'maxResultCount': 10,
                    'filter': '',
                    'pageNumber': 0,
                    'skipCount': 0
                },
                removeInputFlag: 0,
                addBtn: true, // 新增按钮权限
                deleteBtn: false, // 删除按钮权限
                editBtn: false,
                isAddPowerDistribution: false,
                formValidate: {},
                ruleValidate: {
                    distributionRoomNumber: [{
                        required: true,
                        message: '请输入电力设施名称',
                        trigger: 'blur'
                    }],
                    distributionRoomName: [{
                        required: true,
                        message: '请输入进线电源',
                        trigger: 'blur'
                    }]
                },
                saving: false,
                powerDistributionRoomId: ''
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
                    getPowerDistributionList(this.organizationUnitId,this.queryParam).then(
                        res => {
                            const data = res.data.result
                            this.isLoading = false
                            this.isSelect = false
                            this.listData = data.items
                            let size = this.queryParam.skipCount + 1
                            this.listData.forEach(element => {
                                element.index = size++
                            })
                            this.total = data.totalCount
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
            query(data) {
                this.queryParam.pageNumber = 0
                this.queryParam.skipCount = 0
                this.queryParam.filter = data.filter
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
            },
            // 刷新页面
            refreshHandler() {
                this.queryParam.filter = ''
                this.isSelect = false
                this.getListData()
            },
            deleteHandler(data) {
                return new Promise((resolve, reject) => {
                    delPowerDistribution(data.id).then(res => {
                        this.$Message.success('删除电力设施成功')
                        this.isSelect = false
                        this.getListData()
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            addHandler() {
                this.add = true
                this.isEdit = false
                this.showList = false
                this.titleText = '新增配电室'
            },
            // 编辑
            editHandler(index) {
                this.add = true
                this.isEdit = true
                this.isEdits = true
                this.showList = false
                this.titleText = '编辑配电室'
                this.powerDistributionRoomId = this.data.id
            },
            back() {
                this.add = false
                this.showLog = false
                this.showList = true
                this.isEdit = false
                this.isEdits = false
                this.powerDistributionRoomId = ''
                this.isSelect = false
                this.getListData()
                this.titleText = '配电室信息列表'
            },
            save(powerDistributionRoomId) {
                this.powerDistributionRoomId = powerDistributionRoomId
            }
        },
        components: {
            search,
            operate,
            distributionForm,
            distributionDetail
        },
        mounted() {
            this.init()
        }
    }

</script>
<style lang='less'>
    @import "../../components/search/searchAndOperate.less";

    .control-group {
        height: 55px;

        .error_text {
            color: red;
            padding-left: 10px;
        }
    }

    .dec {
        display: inline-block;
        vertical-align: middle;
        width: 90px;
        text-align: right;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        margin-right: 10px;
    }

</style>
