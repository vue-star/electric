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
                        title: '负荷开关（断路器）',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'loadSwitchType',
                                align: 'center',
                            },
                            {
                                title: '生产编号',
                                key: 'loadSwitchProductionCode',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'loadSwitchManufacturer',
                                align: 'center',
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
                            },
                            {
                                title: '生产编号',
                                key: 'currentTransformerProductionCode',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'currentTransformerManufacturer',
                                align: 'center',
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
                            },
                            {
                                title: '生产编号',
                                key: 'voltageTransformerProductionCode',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'voltageTransformerManufacturer',
                                align: 'center',
                            }
                        ]
                    },
                    {
                        title: '高压熔断器',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'highVoltageFuseType',
                                align: 'center',
                            },
                            {
                                title: '厂家',
                                key: 'highVoltageFuseManufacturer',
                                align: 'center',
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
                            },
                            {
                                title: '电缆型号',
                                key: 'cableType',
                                align: 'center',
                            },
                            {
                                title: '电缆长度',
                                key: 'cableLength',
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
                const a=row.loadSwitchListDto.length
                const b=row.currentTransformerListDto.length
                const c=row.voltageTransformerListDto.length
                const d=row.highVoltageFuseListDto.length
                const e=row.cableListDto.length
                var arr=[a,b,c,d,e]
                const max = Math.max.apply(null,arr);
                for(let i=0;i<max;i++){
                    let data = {};
                    if(i<a){
                        data.loadSwitchType = row.loadSwitchListDto[i].loadSwitchType;
                        data.loadSwitchProductionCode = row.loadSwitchListDto[i].loadSwitchProductionCode;
                        data.loadSwitchManufacturer = row.loadSwitchListDto[i].loadSwitchManufacturer;
                    }else{
                        data.loadSwitchType = '';
                        data.loadSwitchProductionCode = '';
                        data.loadSwitchManufacturer = '';
                    };
                    if(i<b){
                        data.currentTransformerType = row.currentTransformerListDto[i].currentTransformerType;
                        data.currentTransformerProductionCode = row.currentTransformerListDto[i].currentTransformerProductionCode;
                        data.currentTransformerManufacturer = row.currentTransformerListDto[i].currentTransformerManufacturer;
                    }else{
                        data.currentTransformerType = '';
                        data.currentTransformerProductionCode = '';
                        data.currentTransformerManufacturer = '';
                    };
                    if(i<c){
                        data.voltageTransformerType = row.voltageTransformerListDto[i].voltageTransformerType;
                        data.voltageTransformerProductionCode = row.voltageTransformerListDto[i].voltageTransformerProductionCode;
                        data.voltageTransformerManufacturer = row.voltageTransformerListDto[i].voltageTransformerManufacturer;
                    }else{
                        data.voltageTransformerType = '';
                        data.voltageTransformerProductionCode = '';
                        data.voltageTransformerManufacturer = '';
                    };
                    if(i<d){
                        data.highVoltageFuseType = row.highVoltageFuseListDto[i].highVoltageFuseType;
                        data.highVoltageFuseManufacturer = row.highVoltageFuseListDto[i].highVoltageFuseManufacturer;
                    }else{
                        data.highVoltageFuseType = '';
                        data.highVoltageFuseManufacturer = '';
                    };
                    if(i<e){
                        data.cableName = row.cableListDto[i].cableName;
                        data.cableType = row.cableListDto[i].cableType;
                        data.cableLength = row.cableListDto[i].cableLength;
                    }else{
                        data.cableName = '';
                        data.cableType = '';
                        data.cableLength = '';
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
