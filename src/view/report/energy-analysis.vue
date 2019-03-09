<template>
    <div class="couplet-card">
        <Tabs active-key="key1" type="card" style="height: 100%">
            <Tab-pane label="日报" key="key1">
                <yasu-com1 :ele-data="com1Data"></yasu-com1>
            </Tab-pane>
            <Tab-pane label="月报" key="key2">
                <yasu-com2 :ele-data="com2Data"></yasu-com2>
            </Tab-pane>
            <Tab-pane label="年报" key="key3">
                <yasu-com3 :ele-data="com3Data"></yasu-com3>
            </Tab-pane>
        </Tabs>
    </div>
</template>

<script type="text/ecmascript-6">
    import yasuCom1 from './day-report.vue'
    import yasuCom2 from './month-report.vue'
    import yasuCom3 from './year-report.vue'
    export default {
        name:'yasuScada',
        components: {
            yasuCom1,
            yasuCom2,
            yasuCom3
        },
        // props: {
        //     eleData: Array
        // },
        data() {
            return {
                com1Data:{},
                com2Data:{},
                com3Data:{},
            }
        },
        // watch: {
        //     eleData () {
        //         this.init()
        //     }
        // },
        methods: {
            init() {
                // const data=this.eleData
                // data.forEach(element => {
                //     switch (element.electricityMeterInfoId) {
                //         case 3:
                //             this.com1Data=element
                //             break;
                //         case 4:
                //             this.com2Data=element
                //             break;
                //         case 5:
                //             this.com3Data=element
                //             break;
                    
                //         default:
                //             break;
                //     }
                // });
            }
        },
        mounted() {
            this.init()
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
