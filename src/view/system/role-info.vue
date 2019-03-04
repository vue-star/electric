<template>
    <div>
        <Row :gutter="20">
            <i-col span="24">
                <Card title="您好！此功能尚未开发，敬请期待！" shadow>
                    <img class="qq-group-img" :src="qqFans" alt="">
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import qqFans from '@/assets/images/qq-fance1.jpg'
    export default {
        name: 'join_page',
        data() {
            return {
                qqFans
            }
        }
    }

</script>

<style>
    .qq-group-img {
        display: block;
        margin: 0 auto;
        width: 800px;
    }

    .qq-group-intro {
        padding: 20px;
        font-size: 16px;
    }

</style>
