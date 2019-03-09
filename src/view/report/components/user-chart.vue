<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import { on, off } from '@/libs/tools'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'StatisticsBar',
        props: {
            value: Object,
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
        methods:{
            resize () {
                this.dom.resize()
            },
            echartsData(){
                this.$nextTick(() => {
                    let keysData = Object.values(this.value)
                    let dateTime = this.dateTime
                    let xAxisData = keysData.length===0 ? [] : keysData[0].map(_ => _.belongs)
                    let legendData = Object.keys(this.value)
                    let seriesData = []
                    legendData.forEach((element,index)=>{
                        let seriesItem={}
                        seriesItem.name = element
                        seriesItem.type = 'line'
                        seriesItem.data = keysData[index].map(_ => _.electricity)
                        seriesData.push(seriesItem)
                    })
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
                            data: legendData
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
                                    htmlStr += dateTime + ' ' + xName + ':00<br/>'// x轴的名称
                                    }
                                    htmlStr += '<div>'
                                    // 为了保证和原来的效果一样，这里自己实现了一个点的效果
                                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>'

                                    // 圆点后面显示的文本
                                    htmlStr += seriesName + '：' + value + 'kwh'

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
                            axisLabel: {
                                formatter: function (value) {
                                    var texts = []
                                    texts.push(value + ' kwh')
                                    return texts
                                }
                            }
                        },
                        series: seriesData
                    }
                    this.dom = echarts.init(this.$refs.dom, 'tdTheme')
                    this.dom.setOption(option, true)
                    on(window, 'resize', this.resize)
                })
            }
        },
        mounted() {
            // this.echartsData()
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
