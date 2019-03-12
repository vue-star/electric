<template>
    <div>
        <Row>
            <Col>
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
                columns1: [
                     {
                        title: '断路器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'breakerType',
                                align: 'center',
                                 width: 60
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
                                 width: 60
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
                                 width: 60
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
                                 width: 86
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
                        data.breakerManufacturer = row.breakerListDto[i].productManufacturer;
                        data.breakerProductionCode = row.breakerListDto[i].productionCode;
                        data.breakerRatedCurrent = row.breakerListDto[i].ratedCurrent;
                        data.breakerType = row.breakerListDto[i].productType;
                    }else{
                        data.breakerManufacturer = '';
                        data.breakerProductionCode = '';
                        data.breakerRatedCurrent = '';
                        data.breakerType = '';
                    };
                    if(i<b){
                        data.capacitorCapacity = row.capacitorListDto[i].capacitorCapacity;
                        data.capacitorManufacturer = row.capacitorListDto[i].productManufacturer;
                        data.capacitorProductionCode = row.capacitorListDto[i].productionCode;
                        data.capacitorType = row.capacitorListDto[i].productType;
                    }else{
                        data.capacitorCapacity = '';
                        data.capacitorManufacturer = '';
                        data.capacitorProductionCode = '';
                        data.capacitorType = '';
                    };
                    if(i<c){
                        data.isolationSwitchManufacturer = row.isolationSwitchListDto[i].productManufacturer;
                        data.isolationSwitchProductionCode = row.isolationSwitchListDto[i].productionCode;
                        data.isolationSwitchType = row.isolationSwitchListDto[i].productType;
                        data.isolationSwitchRatedCurrent = row.isolationSwitchListDto[i].ratedCurrent;
                    }else{
                        data.isolationSwitchManufacturer = '';
                        data.isolationSwitchProductionCode = '';
                        data.isolationSwitchType = '';
                        data.isolationSwitchRatedCurrent = '';
                    };
                    if(i<d){
                        data.lineName = row.outCableListDto[i].cableName;
                        data.outCableManufacturer = row.outCableListDto[i].productManufacturer;
                        data.outCableType = row.outCableListDto[i].productType;
                        data.outCableLength = row.outCableListDto[i].cableLength;
                    }else{
                        data.lineName = '';
                        data.outCableManufacturer = '';
                        data.outCableType = '';
                        data.outCableLength = '';
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
