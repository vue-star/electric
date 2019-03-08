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
            subtext: String
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
