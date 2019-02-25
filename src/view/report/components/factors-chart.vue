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
                    let xAxisData = this.value.map(_ => _.time)
                    let seriesData = this.value.map(_ => _.value)
                    let option = {
                        title: {
                            text: this.text,
                            subtext: this.subtext,
                            x: 'center'
                        },
                        dataZoom: [{
                            type: 'inside',
                            throttle: 50
                        }],
                        xAxis: {
                            type: 'category',
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value',
                            name: '数量'
                        },
                        series: [{
                            data: seriesData,
                            type: 'bar'
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
