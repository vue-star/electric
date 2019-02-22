<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'FaultChart',
        props: {
            value: Array,
            text: String,
            subtext: String
        },
        watch: {
            value() {
                this.loadLine();
            }
        },
        methods:{
            loadLine(){
                this.$nextTick(() => {
                    // let legend = this.value.map(_ => _.name)
                    let xAxisData = this.value.map(_ => _.name)
                    let voltageData = this.value.map(_ => _.voltage)
                    let currentData = this.value.map(_ => _.current)
                    let intelnetData = this.value.map(_ => _.intelnet)
                    let collectionData = this.value.map(_ => _.collection)
                    let functionData = this.value.map(_ => _.function)
                    let option = {
                        title: {
                            text: this.text,
                            subtext: this.subtext,
                            x: 'left'
                        },
                        dataZoom: [{
                            type: 'inside',
                            throttle: 50
                        }],
                        legend: {
                            data: ['电压故障', '电流故障', '采集故障', '网络故障', '功能因素']
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                mark: { show: true },
                                dataView: { show: true, readOnly: false },
                                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                                restore: { show: true },
                                saveAsImage: { show: true }
                            }
                        },
                        xAxis: {
                            type: 'category',
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name: '电压故障',
                                type: 'bar',
                                stack: '客户1',
                                data: voltageData
                            },
                            {
                                name: '电流故障',
                                type: 'bar',
                                stack: '客户2',
                                data: currentData
                            },
                            {
                                name: '采集故障',
                                type: 'bar',
                                stack: '客户3',
                                data: collectionData
                            },
                            {
                                name: '网络故障',
                                type: 'bar',
                                stack: '客户4',
                                data: intelnetData
                            },
                            {
                                name: '功能因素',
                                type: 'bar',
                                stack: '客户5',
                                data: functionData
                            }
                        ]
                    }
                    let dom = echarts.init(this.$refs.dom, 'tdTheme')
                    dom.setOption(option)
                })
            }
        },
        mounted() {
            this.loadLine();
        }
    }

</script>

<style lang="less">
    .charts {
        //
    }

</style>
