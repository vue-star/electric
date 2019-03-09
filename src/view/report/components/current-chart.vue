<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import { on, off } from '@/libs/tools'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'CurrentChart',
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
                            data: ['a相电流', 'b相电流', 'c相电流']
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
                                    htmlStr += seriesName + ': ' + value + 'A'

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
                                name: 'a相电流',
                                type: 'line',
                                color: '#FF8C00',
                                data: currentA
                            },
                            {
                                name: 'b相电流',
                                type: 'line',
                                color: '#76EE00',
                                data: currentB
                            },
                            {
                                name: 'c相电流',
                                type: 'line',
                                color: 'red',
                                data: currentC
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
