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
            value: Object,
            text: String,
            subtext: String
        },
        mounted() {
            this.$nextTick(() => {
                let xAxisData = Object.keys(this.value)
                let seriesData = Object.values(this.value)
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
                        // {
                        // data: seriesData,
                        // type: 'line'
                        // },
                        {
                            name: '电压故障',
                            type: 'bar',
                            stack: '客户1',
                            data: [120, 132, 101, 134, 90]
                        },
                        {
                            name: '电流故障',
                            type: 'bar',
                            stack: '客户2',
                            data: [220, 182, 191, 234, 290]
                        },
                        {
                            name: '采集故障',
                            type: 'bar',
                            stack: '客户3',
                            data: [220, 182, 191, 234, 290]
                        },
                        {
                            name: '网络故障',
                            type: 'bar',
                            stack: '客户4',
                            data: [220, 182, 191, 234, 290]
                        },
                        {
                            name: '功能因素',
                            type: 'bar',
                            stack: '客户5',
                            data: [201, 154, 190, 330, 410]
                        }
                    ]
                }
                let dom = echarts.init(this.$refs.dom, 'tdTheme')
                dom.setOption(option)
            })
        }
    }

</script>

<style lang="less">
    .charts {
        //
    }

</style>
