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
            value: Array,
            text: String,
            subtext: String
        },
        watch: {
            value() {
                this.loadLine()
            }
        },
        methods: {
            loadLine() {
                this.$nextTick(() => {
                    let xAxisData = this.value.map(_ => _.creationTime)
                    let voltageAB = this.value.map(_ => _.uabVoltage)
                    let voltageBC = this.value.map(_ => _.ubcVoltage)
                    let voltageCA = this.value.map(_ => _.ucaVoltage)
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
                            boundaryGap : false,
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value',
                            name: '电压',
                            axisLabel: {
                                formatter: function (value) {
                                    var texts = []
                                    texts.push(value + ' V')
                                    return texts
                                }
                            }
                        },
                        series: [
                            {
                                name: 'AB线电压',
                                type: 'line',
                                color: '#FF8C00',
                                data: voltageAB
                            },
                            {
                                name: 'BC线电压',
                                type: 'line',
                                color: '#76EE00',
                                data: voltageBC
                            },
                            {
                                name: 'CA线电压',
                                type: 'line',
                                color: 'red',
                                data: voltageCA
                            }
                        ]
                    }
                    let dom = echarts.init(this.$refs.dom, 'tdTheme')
                    dom.setOption(option)
                })
            }
        },
        mounted() {
            this.loadLine()
        }
    }

</script>

<style lang="less">
    .charts {
        //
    }

</style>
