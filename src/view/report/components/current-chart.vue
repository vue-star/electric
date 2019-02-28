<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'CurrentChart',
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
                    let currentA = this.value.map(_ => _.aPhaseCurrent)
                    let currentB = this.value.map(_ => _.bPhaseCurrent)
                    let currentC = this.value.map(_ => _.cPhaseCurrent)
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
                            data: ['A相电流', 'B相电流', 'C相电流']
                        },
                        xAxis: {
                            type: 'category',
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value',
                            name: '电流',
                            axisLabel: {
                                formatter: function (value) {
                                    var texts = []
                                    texts.push(value + ' A')
                                    return texts
                                }
                            }
                        },
                        series: [
                            {
                                name: 'A相电流',
                                type: 'line',
                                stack: '总量',
                                data: currentA
                            },
                            {
                                name: 'B相电流',
                                type: 'line',
                                stack: '总量',
                                data: currentB
                            },
                            {
                                name: 'C相电流',
                                type: 'line',
                                stack: '总量',
                                data: currentC
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
