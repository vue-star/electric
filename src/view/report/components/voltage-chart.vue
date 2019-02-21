<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'VoltageChart',
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
                        data: ['AB线电压', 'BC线电压', 'CA线电压']
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
                            name: 'AB线电压',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: 'BC线电压',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: 'CA线电压',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410, 232, 201, 154, 190, 330, 410, 232, 201, 154, 190, 330, 410]
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
