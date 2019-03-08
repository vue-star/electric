<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import { on, off } from '@/libs/tools'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'FactorsChart',
        props: {
            value: Array,
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
        methods: {
            resize () {
                this.dom.resize()
            },
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
