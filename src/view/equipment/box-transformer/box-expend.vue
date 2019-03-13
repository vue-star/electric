<template>
    <div>
        <Row>
            <Col>
                <div class="list">
                    <Row>
                        <Col>
                            <div class="portlet-title">
                                <Icon type="person-stalker"></Icon>
                                <span class='title_text'>高压设备信息</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class='table-wrap'>
                                <i-table stripe highlight-row :columns="columns1" :data="listData">
                                </i-table>

                                <Spin :fix='true' v-show='isLoading'>
                                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                                    <div>Loading</div>
                                </Spin>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="list">
                    <Row>
                        <Col>
                            <div class="portlet-title">
                                <Icon type="person-stalker"></Icon>
                                <span class='title_text'>低压设备信息</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div class='table-wrap'>
                            <i-table stripe highlight-row :columns="columns2" :data="listData2">
                            </i-table>

                            <Spin :fix='true' v-show='isLoading'>
                                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                                <div>Loading</div>
                            </Spin>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div class="list">
                    <Row>
                        <Col>
                            <div class="portlet-title">
                                <Icon type="person-stalker"></Icon>
                                <span class='title_text'>变压设备信息</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div class='table-wrap'>
                            <i-table stripe highlight-row :columns="columns3" :data="listData3">
                            </i-table>

                            <Spin :fix='true' v-show='isLoading'>
                                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                                <div>Loading</div>
                            </Spin>
                        </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import expandHighRow from './high-expend.vue'
    import expandLowRow from './low-expend.vue'
    import { getHighVoltageInformationList } from '@/api/highVoltageInformation'
    import { getLowVoltageInformationList } from '@/api/lowVoltageInformation'
    import { getTransInformationList } from '@/api/transInformation'
    import { formatData } from '@/libs/tools'
    export default {
        props: {
            row: Object
        },
        data() {
            let self = this;
            return {
                columns1: [{
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandHighRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '设备名称',
                        key: 'deviceName',
                        align: 'center'
                    },
                    {
                        title: '设备编号',
                        key: 'deviceNumber',
                        align: 'center'
                    },
                    {
                        title: '设备型号',
                        key: 'productType',
                        align: 'center'
                    },
                    {
                        title: '生产厂商',
                        key: 'manufacturer',
                        align: 'center'
                    },
                    {
                        title: '生产编号',
                        key: 'productionCode',
                        align: 'center'
                    },
                    {
                        title: '生产日期',
                        key: 'manufactureDate',
                        align: 'center'
                    },
                    // {
                    //     title: '设备功能',
                    //     key: 'deviceFunction',
                    //     align: 'center'
                    // },
                ],
                columns2: [{
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandLowRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '生产厂商',
                        key: 'manufacturer',
                        align: 'center'

                    },
                     {
                        title: '设备名称',
                        key: 'deviceFunction',
                        align: 'center'
                    },
                    {
                        title: '设备功能',
                        key: 'productionCode',
                        align: 'center'
                    },
                    {
                        title: '产品型号',
                        key: 'productType',
                        align: 'center'
                    },
                    {
                        title: '设备编号',
                        key: 'deviceName',
                        align: 'center'
                    },
                    {
                        title: '出厂日期',
                        key: 'manufactureDate',
                        align: 'center'
                    }
                ],
                columns3: [{
                        title: '序号',
                        key: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '生产厂商',
                        key: 'capacitorManufacturer',
                        align: 'center'

                    },
                    {
                        title: '设备名称',
                        key: 'deviceName',
                        align: 'center'
                    },
                    {
                        title: '设备容量 kVA',
                        key: 'deviceCapaticy',
                        align: 'center'
                    },
                    {
                        title: '设备型号',
                        key: 'deviceType',
                        align: 'center'
                    },
                     {
                        title: '联结组标',
                        key: 'connectionSymbol',
                        align: 'center'
                    },
                     {
                        title: '阻抗',
                        key: 'impedance',
                        align: 'center'
                    },
                    
                     {
                        title: '出厂编号',
                        key: 'productionCode',
                        align: 'center'
                    },
                    {
                        title: '出厂日期',
                        key: 'manufactureDate',
                        align: 'center'
                    }
                ],
                listData: [],
                listData2: [],
                listData3: [],
                queryParam: {
                    'maxResultCount': 50,
                    'filter': '',
                    'pageNumber': 0,
                    'skipCount': 0
                },
                type: 2,
                isLoading: false
            }
        },
        methods: {
            init() {
                this.getListData()
            },
            // 根据详细信息
            getListData() {
                this.isLoading = true
                this.getHighVoltageInfoData()
                this.getLowVoltageInfoData()
                this.getTransInfoData()
            },
            // 获取高压信息
            getHighVoltageInfoData() {
                return new Promise((resolve, reject) => {
                    getHighVoltageInformationList(this.row.id, this.queryParam, this.type).then(
                            res => {
                                this.isLoading = false
                                this.listData = res.data.result.items
                                this.listData.forEach((element) => {
                                    // 格式化时间
                                    element.manufactureDate = formatData(element.manufactureDate, 'day')
                                })
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('服务器错误')
                            reject(error)
                        })
                })
            },
            // 获取低压信息
            getLowVoltageInfoData() {
                return new Promise((resolve, reject) => {
                    getLowVoltageInformationList(this.row.id, this.queryParam, this.type).then(
                            res => {
                                this.isLoading = false
                                this.listData2 = res.data.result.items
                                this.listData2.forEach((element) => {
                                    // 格式化时间
                                    element.manufactureDate = formatData(element.manufactureDate, 'day')
                                })
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('服务器错误')
                            reject(error)
                        })
                })
            },
            // 获取变压信息
            getTransInfoData() {
                return new Promise((resolve, reject) => {
                    getTransInformationList(this.row.id, this.queryParam, this.type).then(
                            res => {
                                this.isLoading = false
                                this.listData3 = res.data.result.items
                                let size = this.queryParam.skipCount + 1
                                this.listData3.forEach((element) => {
                                    element.index = size++
                                    // 格式化时间
                                    element.manufactureDate = formatData(element.manufactureDate, 'day')
                                })
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('服务器错误')
                            reject(error)
                        })
                })
            },
        },
        mounted() {
            this.init();
        },
    };

</script>

<style scoped>
    .expand-row {
        margin-bottom: 16px;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    }

    .expand-key {
        display: inline-block;
        font-weight: bold;
        width: 100px;
        text-align: center;
    }

</style>
