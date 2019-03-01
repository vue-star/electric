<template >
    <div id="clock" class="couplet-card">
    </div>
</template>

<script type="text/ecmascript-6">
import { clock } from '@/assets/java-script/clock.js'
import * as Three from 'three'
    var camera, scene, renderer
    var mesh
    var texture
    var canvas
    export default {
        name: 'threejs',
        components: {
        },
        props: {},
        data() {
            return {
                isView: true,
                isViews: false
            }
        },
        watch: {},
        methods: {
            init() {
                renderer = new Three.WebGLRenderer()
                renderer.setSize(window.innerWidth, window.innerHeight)
                document.getElementById('clock').appendChild(renderer.domElement)
                //
                camera = new Three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
                camera.position.z = 400
                scene = new Three.Scene()

                var geometry = new Three.CubeGeometry(150, 150, 150)
                texture = new Three.Texture(canvas)
                var material = new Three.MeshBasicMaterial({ map: texture })
                texture.needsUpdate = true
                mesh = new Three.Mesh(geometry, material)
                scene.add(mesh)

                //
                window.addEventListener('resize', this.onWindowResize, false)
            },
            onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight
                camera.updateProjectionMatrix()
                renderer.setSize(window.innerWidth, window.innerHeight)
            },
            animate() {
                texture.needsUpdate = true
                mesh.rotation.y -= 0.01
                mesh.rotation.x -= 0.01
                requestAnimationFrame(this.animate)
                renderer.render(scene, camera)
            }
        },
        mounted() {
            canvas = clock()
            this.init()
            this.animate()
        }
    }

</script>

<style lang='less'>

</style>
