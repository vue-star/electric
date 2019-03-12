<template>
    <div class="couplet-card">
        <Tabs active-key="key1" type="card" style="height: 100%">
            <Tab-pane label="日报" key="key1">
                <day-report></day-report>
            </Tab-pane>
            <Tab-pane label="月报" key="key2">
                <month-report></month-report>
            </Tab-pane>
            <Tab-pane label="年报" key="key3">
                <year-report></year-report>
            </Tab-pane>
        </Tabs>
    </div>
</template>

<script type="text/ecmascript-6">
    import dayReport from './components/day-report.vue'
    import monthReport from './components/month-report.vue'
    import yearReport from './components/year-report.vue'
    import { getEnergyList } from '@/api/energyAnalysis'
    export default {
        name:'energy_analysis',
        components: {
            dayReport,
            monthReport,
            yearReport
        },
        data() {
            return {
            }
        },
        methods: {},
        mounted() {}
    }

</script>

<style lang='less'>
</style>
