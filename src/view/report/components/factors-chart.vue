<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import { on, off, formatData } from '@/libs/tools'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'FactorsChart',
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
                this.echartsData()
            }
        },
        methods: {
            resize () {
                this.dom.resize()
            },
            echartsData() {
                this.$nextTick(() => {
                    let dateTime=this.dateTime
                    let xAxisData = this.value.map(_ => _.creationTime )
                    let seriesData = this.value.map(_ => _.totalPhasePowerFactor)
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
                        visualMap: {
                            show:false,
                            top: 10,
                            right: 10,
                            pieces: [{
                                gt: 0,
                                lte: 0.9,
                                color: '#ffde33'
                            }, {
                                gt: 0.9,
                                lte: 1,
                                color: '#1E90FF'
                            }],
                            outOfRange: {
                                color: '#1E90FF'
                            }
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
                                    var value = param.value// y轴值
                                    var color = param.color// 图例颜色

                                    if (i === 0) {
                                    htmlStr += dateTime + ' ' + xName + '<br/>'// x轴的名称
                                    }
                                    htmlStr += '<div>'
                                    // 为了保证和原来的效果一样，这里自己实现了一个点的效果
                                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>'

                                    // 圆点后面显示的文本
                                    htmlStr += '因数值：' + value

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
                            max: 1,
                            min: 0.7
                        },
                        series: [{
                            data: seriesData,
                            type: 'line'
                        }]
                    }
                    this.dom = echarts.init(this.$refs.dom, 'tdTheme')
                    this.dom.setOption(option, true)
                    on(window, 'resize', this.resize)
                })
            }
        },
        mounted() {
            this.echartsData()
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
