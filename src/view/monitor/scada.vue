<template>
    <div class="couplet-card">
        <div v-if="organizationUnitId=== 3" style="height: 100%">
            <dongfang-scada :ele-data="electricityList"></dongfang-scada>
        </div> 
        <div v-else-if="organizationUnitId=== 4" style="height: 100%">
            <yasu-scada :ele-data="electricityList"></yasu-scada>
        </div> 
    </div>
</template>

<script type="text/ecmascript-6">
    import dongfangScada from './components/dongfang-scada.vue'
    import yasuScada from './components/yasu-scada.vue'
    import {
        getCustomerList,
        addCustomer,
        delCustomer,
        updataCustomer,
        getEleHistoryData
    } from '@/api/scada'
    export default {
        name: 'scada',
        components: {
            dongfangScada,
            yasuScada
        },
        props: {},
        data() {
            return {
                electricityList: []
            }
        },
        computed: {
            organizationUnitId () {
                return this.$store.state.user.organizationId
            }
        },
        watch: {
            organizationUnitId () {
                this.init()
            }
        },
        methods: {
            init() {
                this.getScadaData()
            },
            getScadaData(){
                return new Promise((resolve, reject) => {
                    getEleHistoryData(this.organizationUnitId).then(res => {
                        const data = res.data.result
                        this.electricityList = data
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                })
            }
        },
        mounted() {
            this.init()
            if (this.timer) {
                clearInterval(this.timer)
            } else {
                this.timer = setInterval(() => {
                    this.init()
                }, 60000)
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style lang='less'>
    .couplet-card {
        height: 100%
    }

    .ivu-tabs-content-animated {
        height: 100%
    }

</style>
