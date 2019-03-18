<template>
    <div>
        <Row>
            <Col>
                <div class='table-wrap'>
                    <tables ref="tables" editable border v-model="tableData" :columns="isEdit ? columns : columns1"
                        @on-delete="handleDelete" @on-save-edit="saveEdit" />
                    <Spin :fix='true' v-show='isLoading'>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Tables from '_c/tables'
    import { delHighVoltageItems, getHighById, updataHighVoltageItems } from '@/api/highVoltageInformation'
    export default {
        components: {
            Tables
        },
        props: {
            row: Object,
            isEdit: Boolean
        },
        data() {
            return {
                columns: [{
                        title: '负荷开关',
                        key: 'loadSwitch',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'loadSwitchType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'loadSwitchManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'loadSwitchProductionCode',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '额定电流',
                                key: 'loadSwitchRatedCurrent',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'loadSwitchId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete'],
                            }
                        ]
                    },
                    {
                        title: '断路器',
                        key: 'breaker',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'breakerType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'breakerManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'breakerProductionCode',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '额定电流',
                                key: 'breakerRatedCurrent',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'breakerId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }

                        ]
                    },
                    {
                        title: '隔离开关',
                        key: 'isolationSwitch',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'isolationSwitchType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'isolationSwitchManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'isolationSwitchProductionCode',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '额定电流',
                                key: 'isolationSwitchRatedCurrent',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'isolationSwitchId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }
                        ]
                    },
                    {
                        title: '电流互感器',
                        key: 'currentTransformer',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'currentTransformerType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'currentTransformerManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'currentTransformerProductionCode',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '变比',
                                key: 'currentTransformerRatio',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'currentTransformerId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }
                        ]
                    },
                    {
                        title: '电压互感器',
                        key: 'voltageTransformer',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'voltageTransformerType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'voltageTransformerManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'voltageTransformerProductionCode',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '变比',
                                key: 'voltageTransformerRatio',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'voltageTransformerId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }

                        ]
                    },
                    {
                        title: '高压熔断器',
                        key: 'highVoltageFuse',
                        align: 'center',
                        children: [{
                                title: '产品型号',
                                key: 'highVoltageFuseType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂商',
                                key: 'highVoltageFuseManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '额定电流',
                                key: 'highVoltageFuseCurrent',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'highVoltageFuseId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }
                        ]
                    },
                    {
                        title: '电缆',
                        key: 'cable',
                        align: 'center',
                        children: [{
                                title: '电缆名称',
                                key: 'cableName',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '电缆型号',
                                key: 'cableType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'cableManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '电缆长度',
                                key: 'cableLength',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'cableId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }
                        ]
                    }
                ],
                columns1: [{
                        title: '负荷开关',
                        id: 'loadSwitchId',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'loadSwitchType',
                                align: 'center',
                                width: 63
                            },
                            {
                                title: '生产厂家',
                                key: 'loadSwitchManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'loadSwitchProductionCode',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '额定电流',
                                key: 'loadSwitchRatedCurrent',
                                align: 'center',
                                width: 86
                            }
                        ]
                    },
                    {
                        title: '断路器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'breakerType',
                                align: 'center',
                                width: 63
                            },
                            {
                                title: '生产厂家',
                                key: 'breakerManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'breakerProductionCode',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '额定电流',
                                key: 'breakerRatedCurrent',
                                align: 'center',
                                width: 86
                            }
                        ]
                    },
                    {
                        title: '隔离开关',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'isolationSwitchType',
                                align: 'center',
                                width: 63
                            },
                            {
                                title: '生产编号',
                                key: 'isolationSwitchProductionCode',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '生产厂家',
                                key: 'isolationSwitchManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '额定电流',
                                key: 'isolationSwitchRatedCurrent',
                                align: 'center',
                                width: 86
                            }
                        ]
                    },
                    {
                        title: '电流互感器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'currentTransformerType',
                                align: 'center',
                                width: 63
                            },
                            {
                                title: '生产厂家',
                                key: 'currentTransformerManufacturer',
                                align: 'center',
                                width: 120
                            },
                            {
                                title: '生产编号',
                                key: 'currentTransformerProductionCode',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '变比',
                                key: 'currentTransformerRatio',
                                align: 'center',
                                width: 63
                            }
                        ]
                    },
                    {
                        title: '电压互感器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'voltageTransformerType',
                                align: 'center',
                                width: 63
                            },
                            {
                                title: '生产厂家',
                                key: 'voltageTransformerManufacturer',
                                align: 'center',
                                width: 120
                            },
                            {
                                title: '生产编号',
                                key: 'voltageTransformerProductionCode',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '变比',
                                key: 'voltageTransformerRatio',
                                align: 'center',
                                width: 63
                            }
                        ]
                    },
                    {
                        title: '高压熔断器',
                        align: 'center',
                        children: [{
                                title: '产品型号',
                                key: 'highVoltageFuseType',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '生产厂商',
                                key: 'highVoltageFuseManufacturer',
                                align: 'center',
                                width: 120
                            },
                            {
                                title: '额定电流',
                                key: 'highVoltageFuseCurrent',
                                align: 'center',
                                width: 86
                            }
                        ]
                    },
                    {
                        title: '电缆',
                        align: 'center',
                        children: [{
                                title: '电缆名称',
                                key: 'cableName',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '电缆型号',
                                key: 'cableType',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '生产厂家',
                                key: 'cableManufacturer',
                                align: 'center',
                                width: 120
                            },
                            {
                                title: '电缆长度',
                                key: 'cableLength',
                                align: 'center',
                                width: 86
                            }
                        ]
                    }
                ],
                isLoading: false,
                tableData: [],
                listData: []
            }
        },
        methods: {
            initTable() {
                const row = this.listData;
                const a = row.loadSwitchListDto.length
                const b = row.currentTransformerListDto.length
                const c = row.voltageTransformerListDto.length
                const d = row.highVoltageFuseListDto.length
                const e = row.cableListDto.length
                const f = row.breakerListDto.length
                const g = row.isolationSwitchListDto.length
                var arr = [a, b, c, d, e, f, g]
                const max = Math.max.apply(null, arr);
                for (let i = 0; i < max; i++) {
                    let data = {};
                    if (i < a) {
                        data.loadSwitchId = row.loadSwitchListDto[i].id;
                        data.loadSwitchType = row.loadSwitchListDto[i].productType;
                        data.loadSwitchProductionCode = row.loadSwitchListDto[i].productionCode;
                        data.loadSwitchManufacturer = row.loadSwitchListDto[i].productManufacturer;
                        data.loadSwitchRatedCurrent = row.loadSwitchListDto[i].ratedCurrent;
                    } else {
                        data.loadSwitchId = 0;
                        data.loadSwitchType = '';
                        data.loadSwitchProductionCode = '';
                        data.loadSwitchManufacturer = '';
                        data.loadSwitchRatedCurrent = '';
                    };
                    if (i < b) {
                        data.currentTransformerId = row.currentTransformerListDto[i].id;
                        data.currentTransformerType = row.currentTransformerListDto[i].productType;
                        data.currentTransformerProductionCode = row.currentTransformerListDto[i].productionCode;
                        data.currentTransformerManufacturer = row.currentTransformerListDto[i].productManufacturer;
                        data.currentTransformerRatio = row.currentTransformerListDto[i].ratio;
                    } else {
                        data.currentTransformerId = 0;
                        data.currentTransformerType = '';
                        data.currentTransformerProductionCode = '';
                        data.currentTransformerManufacturer = '';
                        data.currentTransformerRatio = '';
                    };
                    if (i < c) {
                        data.voltageTransformerId = row.voltageTransformerListDto[i].id;
                        data.voltageTransformerType = row.voltageTransformerListDto[i].productType;
                        data.voltageTransformerProductionCode = row.voltageTransformerListDto[i].productionCode;
                        data.voltageTransformerManufacturer = row.voltageTransformerListDto[i].productManufacturer;
                        data.voltageTransformerRatio = row.voltageTransformerListDto[i].ratio;
                    } else {
                        data.voltageTransformerId = 0;
                        data.voltageTransformerType = '';
                        data.voltageTransformerProductionCode = '';
                        data.voltageTransformerManufacturer = '';
                        data.voltageTransformerRatio = '';
                    };
                    if (i < d) {
                        data.highVoltageFuseId = row.highVoltageFuseListDto[i].id;
                        data.highVoltageFuseType = row.highVoltageFuseListDto[i].productType;
                        data.highVoltageFuseManufacturer = row.highVoltageFuseListDto[i].productManufacturer;
                        data.highVoltageFuseCurrent = row.highVoltageFuseListDto[i].ratedCurrent;
                    } else {
                        data.highVoltageFuseId = 0;
                        data.highVoltageFuseType = '';
                        data.highVoltageFuseManufacturer = '';
                        data.highVoltageFuseCurrent = '';
                    };
                    if (i < e) {
                        data.cableId = row.cableListDto[i].id;
                        data.cableName = row.cableListDto[i].cableName;
                        data.cableType = row.cableListDto[i].productType;
                        data.cableLength = row.cableListDto[i].cableLength;
                        data.cableManufacturer = row.cableListDto[i].productManufacturer;
                    } else {
                        data.cableId = 0;
                        data.cableName = '';
                        data.cableType = '';
                        data.cableLength = '';
                        data.cableManufacturer = '';
                    };
                    if (i < f) {
                        data.breakerId = row.breakerListDto[i].id;
                        data.breakerManufacturer = row.breakerListDto[i].productManufacturer;
                        data.breakerProductionCode = row.breakerListDto[i].productionCode;
                        data.breakerRatedCurrent = row.breakerListDto[i].ratedCurrent;
                        data.breakerType = row.breakerListDto[i].productType;
                    } else {
                        data.breakerId = 0;
                        data.breakerManufacturer = '';
                        data.breakerProductionCode = '';
                        data.breakerRatedCurrent = '';
                        data.breakerType = '';
                    };
                    if (i < g) {
                        data.isolationSwitchId = row.isolationSwitchListDto[i].id;
                        data.isolationSwitchManufacturer = row.isolationSwitchListDto[i].productManufacturer;
                        data.isolationSwitchProductionCode = row.isolationSwitchListDto[i].productionCode;
                        data.isolationSwitchType = row.isolationSwitchListDto[i].productType;
                        data.isolationSwitchRatedCurrent = row.isolationSwitchListDto[i].ratedCurrent;
                    } else {
                        data.isolationSwitchId = 0;
                        data.isolationSwitchManufacturer = '';
                        data.isolationSwitchProductionCode = '';
                        data.isolationSwitchType = '';
                        data.isolationSwitchRatedCurrent = '';
                    };
                    this.tableData.push(data);
                }
            },
            // 根据高压id获取高压组件信息
            getItemsByHighId() {
                return new Promise((resolve, reject) => {
                    getHighById(this.row.id).then(
                            res => {
                                this.listData = res.data.result
                                this.initTable()
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('处理错误！')
                            reject(error)
                        })
                })
            },
            // 删除高压组件
            handleDelete(params) {
                const index = params.index
                const colId = params.column.id
                const highVoltageItemId = this.tableData[index][colId]
                return new Promise((resolve, reject) => {
                    delHighVoltageItems(highVoltageItemId).then(
                            res => {
                                this.$Message.success('删除成功！')
                                // 删除成功,页面删除点击的那行，此时要取消选中行，隐藏修改和删除按钮
                                this.clearDelData(index, colId)
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('处理错误！')
                            reject(error)
                        })
                })
            },
            // 清理删除成功后的数据缓存
            clearDelData(index, colId) {
                switch (colId) {
                    case 'loadSwitchId':
                        this.tableData[index].loadSwitchId = 0
                        this.tableData[index].loadSwitchType = ''
                        this.tableData[index].loadSwitchProductionCode = ''
                        this.tableData[index].loadSwitchManufacturer = ''
                        this.tableData[index].loadSwitchRatedCurrent = ''
                        break;
                    case 'currentTransformerId':
                        this.tableData[index].currentTransformerId = 0
                        this.tableData[index].currentTransformerType = '';
                        this.tableData[index].currentTransformerProductionCode = ''
                        this.tableData[index].currentTransformerManufacturer = ''
                        this.tableData[index].currentTransformerRatio = ''
                        break;
                    case 'voltageTransformerId':
                        this.tableData[index].voltageTransformerId = 0
                        this.tableData[index].voltageTransformerType = ''
                        this.tableData[index].voltageTransformerProductionCode = ''
                        this.tableData[index].voltageTransformerManufacturer = ''
                        this.tableData[index].voltageTransformerRatio = ''
                        break;
                    case 'highVoltageFuseId':
                        this.tableData[index].highVoltageFuseId = 0
                        this.tableData[index].highVoltageFuseType = ''
                        this.tableData[index].highVoltageFuseManufacturer = ''
                        this.tableData[index].highVoltageFuseCurrent = ''
                        break;
                    case 'cableId':
                        this.tableData[index].cableId = 0
                        this.tableData[index].cableName = ''
                        this.tableData[index].cableType = ''
                        this.tableData[index].cableLength = ''
                        this.tableData[index].cableManufacturer = ''
                        break;
                    case 'breakerId':
                        this.tableData[index].breakerId = 0
                        this.tableData[index].breakerManufacturer = ''
                        this.tableData[index].breakerProductionCode = ''
                        this.tableData[index].breakerRatedCurrent = ''
                        this.tableData[index].breakerType = ''
                        break;
                    case 'isolationSwitchId':
                        this.tableData[index].isolationSwitchId = 0
                        this.tableData[index].isolationSwitchManufacturer = ''
                        this.tableData[index].isolationSwitchProductionCode = ''
                        this.tableData[index].isolationSwitchType = ''
                        this.tableData[index].isolationSwitchRatedCurrent = ''
                        break;

                    default:
                        break;
                }
            },
            // 编辑表格信息
            saveEdit(params) {
                this.columns.forEach(ele => {
                    ele.children.forEach(item => {
                        if (item.key === params.column.key) {
                            params.row[item.key] = params.value
                            this.formatEditData(ele.key, params.row)
                        }
                    })
                })
            },
            // 编辑数据整理
            formatEditData(colItemKey, row) {
                const data = {
                    voltageInformationId: this.row.id,
                    voltageType: 1
                }
                switch (colItemKey) {
                    case 'loadSwitch':
                        data.id = row.loadSwitchId
                        data.productType = row.loadSwitchType
                        data.productionCode = row.loadSwitchProductionCode
                        data.productManufacturer = row.loadSwitchManufacturer
                        data.ratedCurrent = row.loadSwitchRatedCurrent
                        data.powerEquipmentComponentType = 1
                        break;
                    case 'currentTransformer':
                        data.id = row.currentTransformerId
                        data.productType = row.currentTransformerType
                        data.productionCode = row.currentTransformerProductionCode
                        data.productManufacturer = row.currentTransformerManufacturer
                        data.ratio = row.currentTransformerRatio
                        data.powerEquipmentComponentType = 2
                        break;
                    case 'voltageTransformer':
                        data.id = row.voltageTransformerId
                        data.productType = row.voltageTransformerType
                        data.productionCode = row.voltageTransformerProductionCode
                        data.productManufacturer = row.voltageTransformerManufacturer
                        data.ratio = row.voltageTransformerRatio
                        data.powerEquipmentComponentType = 3
                        break;
                    case 'highVoltageFuse':
                        data.id = row.highVoltageFuseId
                        data.productType = row.highVoltageFuseType
                        data.productManufacturer = row.highVoltageFuseManufacturer
                        data.ratedCurrent = row.highVoltageFuseCurrent
                        data.powerEquipmentComponentType = 4
                        break;
                    case 'cable':
                        data.id = row.cableId
                        data.cableName = row.cableName
                        data.productType = row.cableType
                        data.cableLength = row.cableLength
                        data.productManufacturer = row.cableManufacturer
                        data.powerEquipmentComponentType = 5
                        break;
                    case 'breaker':
                        data.id = row.breakerId
                        data.productType = row.breakerType
                        data.productionCode = row.breakerProductionCode
                        data.productManufacturer = row.breakerManufacturer
                        data.ratedCurrent = row.breakerRatedCurrent
                        data.powerEquipmentComponentType = 6
                        break;
                    case 'isolationSwitch':
                        data.id = row.isolationSwitchId
                        data.productType = row.isolationSwitchType
                        data.productionCode = row.isolationSwitchProductionCode
                        data.productManufacturer = row.isolationSwitchManufacturer
                        data.ratedCurrent = row.isolationSwitchRatedCurrent
                        data.powerEquipmentComponentType = 8
                        break;

                    default:
                        break;
                }
                this.updataHighItem(data)
            },
            updataHighItem(formValidate) {
                return new Promise((resolve, reject) => {
                    updataHighVoltageItems(formValidate).then(
                        res => {
                            this.$Message.success('修改成功')
                            resolve()
                        },
                        error => {
                            this.$Message.error(error.error.message)
                            resolve()
                        }).catch(err => {
                        reject(err)
                    })
                })
            }
        },
        mounted() {
            this.getItemsByHighId()
        }
    };
</script>

<style>
    .ivu-table-cell {
        padding-left: 0px;
        padding-right: 0px;
    }
    .ivu-poptip-confirm .ivu-poptip-body .ivu-icon{
        left: 20px;
    }
</style>
