<template>
    <div>
        <Row :gutter="20">
            <i-col span="24">
                <div class="card-area">
                    <div class="top-style"></div>
                    <div class="top-area">
                        <Icon type="md-trending-up" size="20" style="float:left" color="#436EEE" />
                        <p>数据实时指标</p>
                    </div>
                    <div v-for="(infor, i) in inforCardData" :key="`infor-${i}`" class="info-div" style="height: 120px;">
                        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="42" :icon-color="infor.iconColor">
                            <count-to :end="infor.count" count-class="count-style"/>
                            <p style="color:#fff">{{ infor.title }}</p>
                        </infor-card>
                    </div>
                </div>

            </i-col>
        </Row>

        <Row style="margin-top: 20px;">
            <div class="card-area">
                <div class="top-style"></div>
                <div class="top-area">
                    <Icon type="md-book" size="20" style="float:left" color="#436EEE" />
                    <p>设备定位</p>
                </div>
                <div>
                    <Card shadow>
                        <home-map :om="giveOutData"/>
                    </Card>
                </div>
            </div>

        </Row>
    </div>
</template>

<script>
    import { InforCard } from '_c/info-card'
    import CountTo from '_c/count-to'
    import { ChartPie, ChartBar } from '_c/charts'
    import HomeMap from './home-map.vue'
    import { getData } from '@/api/home'
    export default {
        name: 'home',
        components: {
            InforCard,
            CountTo,
            HomeMap
        },
        data() {
            return {
                inforCardData: [{
                        title: '已接入客户数',
                        icon: 'md-person-add',
                        iconColor: '#fff',
                        count: 0,
                        color: '#2d8cf0'
                    },
                    {
                        title: '已接入设备数',
                        icon: 'md-locate',
                        count: 0,
                        iconColor: '#fff',
                        color: '#19be6b'
                    },
                    {
                        title: '使用电量数',
                        icon: 'md-calculator',
                        count: 0,
                        iconColor: '#fff',
                        color: '#ff9900'
                    },
                    {
                        title: '离线设备数',
                        icon: 'md-eye-off',
                        count: 0,
                        iconColor: '#fff',
                        color: '#ed3f14'
                    },
                    {
                        title: '故障设备数',
                        icon: 'md-medkit',
                        count: 0,
                        iconColor: '#fff',
                        color: '#E46CBB'
                    }
                ],
                giveOutData: {
                    height: 600,
                    longitude: 120.427232,
                    latitude: 27.514563
                }
            }
        },
        methods: {
            init() {
                this.getStatisticalData()
            },
            getStatisticalData() {
                return new Promise((resolve, reject) => {
                    getData().then(res => {
                        const data = res.data.result
                        this.inforCardData.forEach((element, index) => {
                            switch (index) {
                                case 0:
                                    element.count = data.numberofAccessCustomers
                                    break
                                case 1:
                                    element.count = data.numberofAccessDevices
                                    break
                                case 2:
                                    element.count = data.numberofElectricityUsed
                                    break
                                case 3:
                                    element.count = data.numberofOfflineDevices
                                    break
                                case 4:
                                    element.count = data.numberofFaultyDevices
                                    break
                            }
                        })
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            }

        },
        mounted() {
            this.init()
        }
    }

</script>

<style lang="less">
    .count-style {
        font-size: 50px;
        color: aliceblue
    }

    .info-div {
        float: left;
        margin: 6px;
        width: 18%;
    }

    .card-area {
        float: left;
        width: 100%;
        background-color: white;
        margin-top: 5px;
        border: 1px solid;

        .ivu-card-body {
            padding: 0px;
        }

        ;

        .top-area {
            background-color: rgb(221, 226, 226);
            padding: 5px;
        }

        .top-style {
            height: 5px;
            background-color: darkcyan;
        }
    }

</style>
