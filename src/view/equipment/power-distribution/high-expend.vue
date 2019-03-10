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
                        title: '负荷开关',
                        align: 'center',
                        children: [{
                                title: '型号',
                                key: 'loadSwitchType',
                                align: 'center',
                            },
                            {
                                title: '生产厂家',
                                key: 'loadSwitchManufacturer',
                                align: 'center',
                            },
                            {
                                title: '生产编号',
                                key: 'loadSwitchProductionCode',
                                align: 'center',
                            },
                            {
                                title: '额定电流',
                                key: 'loadSwitChratedCurrent',
                                align: 'center',
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
                            },
                            {
                                title: '生产厂家',
                                key: 'breakerManufacturer',
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
                                title: '额定电流',
                                key: 'isolationSwitchRatedCurrent',
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
                                title: '生产厂家',
                                key: 'currentTransformerManufacturer',
                                align: 'center',
                            },
                            {
                                title: '生产编号',
                                key: 'currentTransformerProductionCode',
                                align: 'center',
                            },
                            {
                                title: '变比',
                                key: 'currentTransformerRatio',
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
                                title: '生产厂家',
                                key: 'voltageTransformerManufacturer',
                                align: 'center',
                            },
                            {
                                title: '生产编号',
                                key: 'voltageTransformerProductionCode',
                                align: 'center',
                            },
                            {
                                title: '变比',
                                key: 'voltageTransformerRatio',
                                align: 'center',
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
                            },
                            {
                                title: '生产厂商',
                                key: 'highVoltageFuseManufacturer',
                                align: 'center',
                            },
                            {
                                title: '额定电流',
                                key: 'highVoltageFuseCurrent',
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
                                title: '生产厂家',
                                key: 'cableManufacturer',
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
                const f=row.breakerListDto.length
                const g=row.isolationSwitchListDto.length
                var arr=[a,b,c,d,e,f,g]
                const max = Math.max.apply(null,arr);
                for(let i=0;i<max;i++){
                    let data = {};
                    if(i<a){
                        data.loadSwitchType = row.loadSwitchListDto[i].productType;
                        data.loadSwitchProductionCode = row.loadSwitchListDto[i].productionCode;
                        data.loadSwitchManufacturer = row.loadSwitchListDto[i].productManufacturer;
                        data.loadSwitChratedCurrent = row.loadSwitchListDto[i].ratedCurrent;
                    }else{
                        data.loadSwitchType = '';
                        data.loadSwitchProductionCode = '';
                        data.loadSwitchManufacturer = '';
                        data.loadSwitChratedCurrent = '';
                    };
                    if(i<b){
                        data.currentTransformerType = row.currentTransformerListDto[i].productType;
                        data.currentTransformerProductionCode = row.currentTransformerListDto[i].productionCode;
                        data.currentTransformerManufacturer = row.currentTransformerListDto[i].productManufacturer;
                        data.currentTransformerRatio = row.currentTransformerListDto[i].ratio;
                    }else{
                        data.currentTransformerType = '';
                        data.currentTransformerProductionCode = '';
                        data.currentTransformerManufacturer = '';
                        data.currentTransformerRatio = '';
                    };
                    if(i<c){
                        data.voltageTransformerType = row.voltageTransformerListDto[i].productType;
                        data.voltageTransformerProductionCode = row.voltageTransformerListDto[i].productionCode;
                        data.voltageTransformerManufacturer = row.voltageTransformerListDto[i].productManufacturer;
                        data.voltageTransformerRatio = row.voltageTransformerListDto[i].ratio;
                    }else{
                        data.voltageTransformerType = '';
                        data.voltageTransformerProductionCode = '';
                        data.voltageTransformerManufacturer = '';
                        data.voltageTransformerRatio = '';
                    };
                    if(i<d){
                        data.highVoltageFuseType = row.highVoltageFuseListDto[i].productType;
                        data.highVoltageFuseManufacturer = row.highVoltageFuseListDto[i].productManufacturer;
                        data.highVoltageFuseCurrent = row.highVoltageFuseListDto[i].ratedCurrent;
                    }else{
                        data.highVoltageFuseType = '';
                        data.highVoltageFuseManufacturer = '';
                        data.highVoltageFuseCurrent = '';
                    };
                    if(i<e){
                        data.cableName = row.cableListDto[i].cableName;
                        data.cableType = row.cableListDto[i].productType;
                        data.cableLength = row.cableListDto[i].cableLength;
                        data.cableManufacturer = row.cableListDto[i].productManufacturer;
                    }else{
                        data.cableName = '';
                        data.cableType = '';
                        data.cableLength = '';
                        data.cableManufacturer = '';
                    };
                    if(i<f){
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
                    if(i<g){
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
