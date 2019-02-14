<template>
    <div>
        <Row>
            <Col span="25" offset="1">
            <div class='table-wrap'>
                <i-table stripe border highlight-row :columns="columns1" :data="listData">
                </i-table>

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
    export default {
        props: {
            row: Object
        },
        data() {
            let self = this;
            return {
                columns1: [{
                        title: '序号',
                        key: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '断路器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'breakerType',
                                align: 'center',
                            },
                            {
                                title: '生产编号',
                                key: 'breakerProductionCode',
                                align: 'center',
                            },
                            {
                                title: '额定电流',
                                key: 'breakerRatedCurrent',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'breakerManufacturer',
                                align: 'center',
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
                            },
                            {
                                title: '生产编号',
                                key: 'capacitorProductionCode',
                                align: 'center',
                            },
                            {
                                title: '电容容量',
                                key: 'capacitorCapacity',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'capacitorManufacturer',
                                align: 'center',
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
                            },
                            {
                                title: '生产编号',
                                key: 'isolationSwitchProductionCode',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'isolationSwitchManufacturer',
                                align: 'center',
                            },
                            {
                                title: '备注',
                                key: 'remark',
                                align: 'center',
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
                            },
                            {
                                title: '电缆型号',
                                key: 'outCableType',
                                align: 'center',
                            },
                            {
                                title: '电缆厂家',
                                key: 'outCableManufacturer',
                                align: 'center',
                            }
                        ]
                    },
                ],
                isLoading: false,
                listData: []
            }
        },
        methods: {
            init() {
                const row = this.row;
                const a=row.breakerListDto.length
                const b=row.capacitorListDto.length
                const c=row.isolationSwitchListDto.length
                const d=row.outCableListDto.length
                var arr=[a,b,c,d]
                const max = Math.max.apply(null,arr);
                for(let i=0;i<max;i++){
                    let data = {};
                    if(i<a){
                        data.breakerManufacturer = row.breakerListDto[i].breakerManufacturer;
                        data.breakerProductionCode = row.breakerListDto[i].breakerProductionCode;
                        data.breakerRatedCurrent = row.breakerListDto[i].breakerRatedCurrent;
                        data.breakerType = row.breakerListDto[i].breakerType;
                    }else{
                        data.breakerManufacturer = '';
                        data.breakerProductionCode = '';
                        data.breakerRatedCurrent = '';
                        data.breakerType = '';
                    };
                    if(i<b){
                        data.capacitorCapacity = row.capacitorListDto[i].capacitorCapacity;
                        data.capacitorManufacturer = row.capacitorListDto[i].capacitorManufacturer;
                        data.capacitorProductionCode = row.capacitorListDto[i].capacitorProductionCode;
                        data.capacitorType = row.capacitorListDto[i].capacitorType;
                    }else{
                        data.capacitorCapacity = '';
                        data.capacitorManufacturer = '';
                        data.capacitorProductionCode = '';
                        data.capacitorType = '';
                    };
                    if(i<c){
                        data.isolationSwitchManufacturer = row.isolationSwitchListDto[i].isolationSwitchManufacturer;
                        data.isolationSwitchProductionCode = row.isolationSwitchListDto[i].isolationSwitchProductionCode;
                        data.isolationSwitchType = row.isolationSwitchListDto[i].isolationSwitchType;
                        data.remark = row.isolationSwitchListDto[i].remark;
                    }else{
                        data.isolationSwitchManufacturer = '';
                        data.isolationSwitchProductionCode = '';
                        data.isolationSwitchType = '';
                        data.remark = '';
                    };
                    if(i<d){
                        data.lineName = row.outCableListDto[i].lineName;
                        data.outCableManufacturer = row.outCableListDto[i].outCableManufacturer;
                        data.outCableType = row.outCableListDto[i].outCableType;
                    }else{
                        data.lineName = '';
                        data.outCableManufacturer = '';
                        data.outCableType = '';
                    };
                    this.listData.push(data);
                }
            }
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
