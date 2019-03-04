<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'StatisticsBar',
        props: {
            value: Object,
            text: String,
            subtext: String
        },
        watch: {
            value() {
                this.echartsData()
            }
        },
        methods:{
            echartsData(){
                this.$nextTick(() => {
                    let keysData = Object.values(this.value)
                    let xAxisData = keysData[0].map(_ => _.belongs)
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
                    let dom = echarts.init(this.$refs.dom, 'tdTheme')
                    dom.setOption(option)
                })
            }
        },
        mounted() {
            
        }
    }

</script>

<style lang="less">
    .charts {
        //
    }

</style>
