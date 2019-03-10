<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import { on, off } from '@/libs/tools'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'VoltageChart',
        props: {
            value: Array,
            text: String,
            subtext: String,
            dateTime: String
        },
        data () {
            return {
                dom: null
            }
        },
        watch: {
            value() {
                this.loadLine()
            }
        },
        methods: {
            resize () {
                this.dom.resize()
            },
            loadLine() {
                this.$nextTick(() => {
                    let dateTime=this.dateTime
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
                            data: ['ab线电压', 'bc线电压', 'ca线电压']
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            },
                            formatter: function (params, ticket, callback) {
                                var htmlStr = ''
                                for (var i = 0; i < params.length; i++) {
                                    var param = params[i]
                                    var xName = param.name// x轴的名称
                                    var seriesName = param.seriesName// 图例名称
                                    var value = param.value.toFixed(2)// y轴值
                                    var color = param.color// 图例颜色

                                    if (i === 0) {
                                    htmlStr += dateTime + ' ' + xName + '<br/>'// x轴的名称
                                    }
                                    htmlStr += '<div>'
                                    // 为了保证和原来的效果一样，这里自己实现了一个点的效果
                                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>'

                                    // 圆点后面显示的文本
                                    htmlStr += seriesName + ': ' + value + 'V'

                                    htmlStr += '</div>'
                                }
                                return htmlStr
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap : false,
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value',
                            name: '电压',
                            max: 500,
                            // min: 300,
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
                                name: 'ab线电压',
                                type: 'line',
                                color: '#FF8C00',
                                data: voltageAB
                            },
                            {
                                name: 'bc线电压',
                                type: 'line',
                                color: '#76EE00',
                                data: voltageBC
                            },
                            {
                                name: 'ca线电压',
                                type: 'line',
                                color: 'red',
                                data: voltageCA
                            }
                        ]
                    }
                    this.dom = echarts.init(this.$refs.dom, 'tdTheme')
                    this.dom.setOption(option, true)
                    on(window, 'resize', this.resize)
                })
            }
        },
        mounted() {
            this.loadLine()
        },
        beforeDestroy () {
            off(window, 'resize', this.resize)
        }
    }

</script>

<style lang="less">
    .charts {
        //
    }

</style>
