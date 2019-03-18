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
    import { delLowVoltageItems, getLowById, updataLowVoltageItems } from '@/api/lowVoltageInformation'
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
                        title: '电容器',
                        key: 'capacitor',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'capacitorType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '生产厂家',
                                key: 'capacitorManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '生产编号',
                                key: 'capacitorProductionCode',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '电容容量',
                                key: 'capacitorCapacity',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'capacitorId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }
                        ]
                    },
                    {
                        title: '出线电缆',
                        key: 'outCable',
                        align: 'center',
                        children: [{
                                title: '电缆名称',
                                key: 'lineName',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '电缆厂商',
                                key: 'outCableManufacturer',
                                align: 'center',
                                width: 100
                            },
                            {
                                title: '电缆型号',
                                key: 'outCableType',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '电缆长度',
                                key: 'outCableLength',
                                align: 'center',
                                editable: true,
                                width: 100
                            },
                            {
                                title: '操作',
                                id: 'outCableId',
                                key: 'handle',
                                width: 90,
                                align: 'center',
                                options: ['delete']
                            }
                        ]
                    },
                ],
                columns1: [{
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
                                width: 120
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
                            },

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
                                width: 120
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
                        title: '电容器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'capacitorType',
                                align: 'center',
                                width: 63
                            },
                            {
                                title: '生产厂家',
                                key: 'capacitorManufacturer',
                                align: 'center',
                                width: 120
                            },
                            {
                                title: '生产编号',
                                key: 'capacitorProductionCode',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '电容容量',
                                key: 'capacitorCapacity',
                                align: 'center',
                                width: 86
                            }
                        ]
                    },
                    {
                        title: '出线电缆',
                        align: 'center',
                        children: [{
                                title: '电缆名称',
                                key: 'lineName',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '电缆型号',
                                key: 'outCableType',
                                align: 'center',
                                width: 86
                            },
                            {
                                title: '电缆厂商',
                                key: 'outCableManufacturer',
                                align: 'center',
                                width: 120
                            },
                            {
                                title: '电缆长度',
                                key: 'outCableLength',
                                align: 'center',
                                width: 86
                            }
                        ]
                    },
                ],
                isLoading: false,
                tableData: [],
                listData: []
            }
        },
        methods: {
            initTable() {
                const row = this.listData;
                const a = row.breakerListDto.length
                const b = row.capacitorListDto.length
                const c = row.isolationSwitchListDto.length
                const d = row.outCableListDto.length
                var arr = [a, b, c, d]
                const max = Math.max.apply(null, arr);
                for (let i = 0; i < max; i++) {
                    let data = {};
                    if (i < a) {
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
                    if (i < b) {
                        data.capacitorId = row.capacitorListDto[i].id;
                        data.capacitorCapacity = row.capacitorListDto[i].capacitorCapacity;
                        data.capacitorManufacturer = row.capacitorListDto[i].productManufacturer;
                        data.capacitorProductionCode = row.capacitorListDto[i].productionCode;
                        data.capacitorType = row.capacitorListDto[i].productType;
                    } else {
                        data.capacitorId = 0;
                        data.capacitorCapacity = '';
                        data.capacitorManufacturer = '';
                        data.capacitorProductionCode = '';
                        data.capacitorType = '';
                    };
                    if (i < c) {
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
                    if (i < d) {
                        data.outCableId = row.outCableListDto[i].id;
                        data.lineName = row.outCableListDto[i].cableName;
                        data.outCableManufacturer = row.outCableListDto[i].productManufacturer;
                        data.outCableType = row.outCableListDto[i].productType;
                        data.outCableLength = row.outCableListDto[i].cableLength;
                    } else {
                        data.outCableId = 0;
                        data.lineName = '';
                        data.outCableManufacturer = '';
                        data.outCableType = '';
                        data.outCableLength = '';
                    };
                    this.tableData.push(data);
                }
            },
            // 根据低压id获取组件信息
            getItemsByLowId() {
                return new Promise((resolve, reject) => {
                    getLowById(this.row.id).then(
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
                const lowVoltageItemId = this.tableData[index][colId]
                return new Promise((resolve, reject) => {
                    delLowVoltageItems(lowVoltageItemId).then(
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
                    case 'capacitorId':
                        this.tableData[index].capacitorId = 0;
                        this.tableData[index].capacitorCapacity = '';
                        this.tableData[index].capacitorManufacturer = '';
                        this.tableData[index].capacitorProductionCode = '';
                        this.tableData[index].capacitorType = '';
                        break;
                    case 'outCableId':
                        this.tableData[index].outCableId = 0;
                        this.tableData[index].lineName = '';
                        this.tableData[index].outCableManufacturer = '';
                        this.tableData[index].outCableType = '';
                        this.tableData[index].outCableLength = '';
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
                    voltageType: 2
                }
                switch (colItemKey) {
                    case 'capacitor':
                        data.id = row.capacitorId
                        data.productType = row.capacitorType
                        data.productionCode = row.capacitorProductionCode
                        data.productManufacturer = row.capacitorManufacturer
                        data.capacitorCapacity = row.capacitorCapacity
                        data.powerEquipmentComponentType = 7
                        break;
                    case 'outCable':
                        data.id = row.outCableId
                        data.cableName = row.lineName
                        data.productType = row.outCableType
                        data.cableLength = row.outCableLength
                        data.productManufacturer = row.outCableManufacturer
                        data.powerEquipmentComponentType = 9
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
                this.updataLowItem(data)
            },
            updataLowItem(formValidate) {
                return new Promise((resolve, reject) => {
                    updataLowVoltageItems(formValidate).then(
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
            this.getItemsByLowId();
        }
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
