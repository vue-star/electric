<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(navi, i) in naviCardData" :key="`navi-${i}`" class="navi-div">
        <navi-card shadow :color="navi.color" :title="navi.title" style="box-shadow:5px 5px 5px #708194" :icon="navi.icon" :icon-size="14">
          <count-to :end="navi.count" count-class="count-style"/>
          <p style="color: #2d8cf0; margin-left: 20px">数量</p>
        </navi-card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
          <statistics-bar style="height: 300px;" :value="barData" text="高压信息统计图"/>
        </Card>
    </Row>
  </div>
</template>

<script>
import { NaviCard } from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, StatisticsBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'american_box_transformer',
  components: {
    NaviCard,
    CountTo,
    ChartPie,
    StatisticsBar,
    Example
  },
  data () {
    return {
      naviCardData: [
          { title: '负荷开关', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '电流互感器', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '电压互感器', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '高压熔断器', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '电缆', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '变压', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '低压', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '隔离开关', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '断路器', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '出线电缆', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' },
          { title: '电容器', icon: 'md-pulse', count: 0.0, color: '#2d8cf0' }
        ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        客户1: 225,
        客户2: 132,
        客户3: 153,
        客户4: 133,
        客户5: 453,
        客户6: 153,
        客户7: 353,
        客户8: 183,
        客户9: 123,
        客户10: 166,
        客户11: 199,
        客户12: 133,
        客户13: 243,
        客户14: 333,
        客户15: 223,
        客户16: 193,
        客户17: 122,
        客户18: 163,
        客户19: 133
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 35px;
  color: #2d8cf0;
  margin-left: 20px;
}
.navi-div {
        width: 13%;
        height: 120px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin: 10px;
    }
</style>
