<template id="child-Outmap">
    <div class="box">
        <div class="map-example" @change="fullscreenChange" :fullscreen.sync="fullscreen" ref="fullscreen">
            <div id="allmap" class="map-container"></div>
            <Icon @click.native="toggleFullScreen" :type="fullscreen ? 'md-contract' : 'md-expand'" class="btn btn-default btn-map-fullscreen"
                :size="23"></Icon>
        </div>
    </div>
</template>

<script>
    import fullscreen from 'vue-fullscreen'
    import Vue from 'vue'
    Vue.use(fullscreen)
    let map = null
    export default {
        data() {
            return {
                fullscreen: false,
                style: {
                    width: '100%',
                    height: this.om.height + 'px'
                }
            }
        },
        props: {
            om: Object,
            customerData: Array,
        },
        watch: {
            customerData() {
                this.feathData()
            }
        },
        mounted() {
            this.feathData()
        },
        methods: {
            toggleFullScreen() {
                this.$fullscreen.toggle(this.$el.querySelector('.map-example'), {
                    wrap: false,
                    callback: this.fullscreenChange
                })
            },
            fullscreenChange(fullscreen) {
                this.fullscreen = fullscreen
                map.checkResize()
                map.setMapStyle({
                    style: fullscreen ? 'bluish' : 'normal'
                })
            },
            feathData() {
                var _this = this
                map = new BMap.Map('allmap') // 创建Map实例
                map.centerAndZoom(new BMap.Point(_this.om.longitude, _this.om.latitude), 12)
                var opts = {
                    width: 250, // 信息窗口宽度
                    height: 110, // 信息窗口高度
                    title: '详细信息', // 信息窗口标题
                    enableMessage: true // 设置允许信息窗发送短息
                }
                var localSearch = new BMap.LocalSearch(map)
                localSearch.enableAutoViewport();
                map.clearOverlays()

                var n=0
                localSearch.setSearchCompleteCallback(function (searchResult) {
                    var poi = searchResult.getPoi(0)
                    map.centerAndZoom(poi.point, 13)
                    var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)) // 创建标注，为要查询的地方对应的经纬度
                    var content = '公司名称：' + _this.customerData[n].companyName + '<br/>法人：' + _this.customerData[n].contactPerson + '<br/>地址：' + _this.customerData[n].address
                    map.addOverlay(marker) // 将标注添加到地图中
                    addClickHandler(content, marker)
                    n++
                });

                for (var i = 0; i < _this.customerData.length; i++) {
                    localSearch.search(_this.customerData[i].address)
                }

                function addClickHandler(content, marker) {
                    marker.addEventListener('mouseover', function (e) {
                        openInfo(content, e)
                    })
                }

                function openInfo(content, e) {
                    var p = e.target
                    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
                    var infoWindow = new BMap.InfoWindow(content, opts) // 创建信息窗口对象
                    map.openInfoWindow(infoWindow, point) // 开启信息窗口
                }
                // 添加地图类型控件
                map.addControl(new BMap.MapTypeControl({
                    mapTypes: [
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]
                }))
                map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
            }
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .map-example {
        position: relative;
        height: 600px;

        .map-container {
            height: 100%
        }

        .btn-map-fullscreen {
            position: absolute;
            right: 10px;
            top: 40px;
            width: 36px;
            height: 36px;
            padding: 0;
            font-size: 36px;
            line-height: 36px;
            text-align: center;
            outline: none
        }

        .ivu-icon .ivu-icon-md-expand {
            vertical-align: text-top;
            line-height: 1
        }

        &.fullscreen {
            width: 100%;
            height: 100%
        }
    }

</style>
