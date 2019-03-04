<template>
    <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: 'MonChart',
        props: {
            value: Array,
            text: String,
            subtext: Number
        },
        watch: {
            value() {
                this.echartsData()
            }
        },
        methods:{
            echartsData(){
                this.$nextTick(() => {
                    let xAxisData = this.value.map(_ => _.belongs)
                    let seriesData = this.value.map(_ => _.electricity)
                    let option = {
                        title: {
                            text: this.text,
                            subtext: this.subtext,
                            subtextStyle: {
                                fontSize: 30,
                                color: '#000'
                            },
                            x: '50'
                        },
                        grid: [{
                            x: 10,
                            x2: 10,
                            y: 100,
                            y2: 10
                        }],
                        xAxis: {
                            type: 'category',
                            data: xAxisData,
                            show: false,
                            splitLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'value',
                            show: false,
                            splitLine: {
                                show: false
                            }
                        },
                        series: [{
                            data: seriesData,
                            areaStyle: {},
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
