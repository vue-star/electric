<template>
    <div class="operate-wrap" style="margin-left: 5px">
        <Select v-model="organizationId" @on-change='selectedChange' placeholder="请选择客户" class='operate' style="width:200px">
            <Option v-for="item in organizationList" :value="item.id" :key="item.id">{{ item.displayName }}</Option>
        </Select>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'
    import { getOrganization } from '@/api/user'
    export default {
        name: 'Organization',
        props: {
            // userAvator: {
            //     type: String,
            //     default: ''
            // }
        },
        data() {
            return {
            }
        },
        computed: {
            organizationList () {
                return this.$store.state.user.organizationList
            },
            organizationId () {
                return this.$store.state.user.organizationId
            }
        },
        methods: {
            ...mapActions([
                'getOrganizationInfo'
            ]),
            ...mapMutations([
                'setOrganizationId'
            ]),
            
            selectedChange(val){
                this.setOrganizationId(val)
            },
        },
        mounted() {
            //
        }
    }

</script>
