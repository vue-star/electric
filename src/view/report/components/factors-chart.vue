<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'FactorsChart',
        props: {
            value: Array,
            text: String,
            subtext: String
        },
        watch: {
            value() {
                this.echartsData()
            }
        },
        methods: {
            echartsData() {
                this.$nextTick(() => {
                    let xAxisData = this.value.map(_ => _.creationTime)
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
                        xAxis: {
                            type: 'category',
                            boundaryGap : false,
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: seriesData,
                            type: 'line'
                        }]
                    }
                    let dom = echarts.init(this.$refs.dom, 'tdTheme')
                    dom.setOption(option)
                })
            }
        },
        mounted() {
            this.echartsData()
        }
    }

</script>

<style lang="less">
    .charts {
        //
    }

</style>
