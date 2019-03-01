// <template >
//     <div id="clock" class="couplet-card">
//     </div>
// </template>

// <script type="text/ecmascript-6">
// import * as Three from 'three'
//     var camera, scene, renderer
//     var mesh
//     var texture
//     var canvas
//     export default {
//         name: 'threejs1',
//         components: {
//         },
//         props: {},
//         data() {
//             return {
//             }
//         },
//         watch: {},
//         methods: {
//             init() {
//                 camera = new Three.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1e10 );
//                 camera.position.z = 0.2;
//                 controls = new Three.TrackballControls( camera );

//                 controls.rotateSpeed = 5.0;
//                 controls.zoomSpeed = 5;
//                 controls.panSpeed = 2;

//                 controls.noZoom = false;
//                 controls.noPan = false;

//                 controls.staticMoving = true;
//                 controls.dynamicDampingFactor = 0.3;

//                 scene = new Three.Scene();
//                 scene.add( camera );

//                 // light
//                 var dirLight = new Three.DirectionalLight( 0xffffff );
//                 dirLight.position.set( 200, 200, 1000 ).normalize();

//                 camera.add( dirLight );
//                 camera.add( dirLight.target );
//         // A begin
//                 var material = new Three.MeshLambertMaterial( { color:0xffffff, side: THREE.DoubleSide } );
//                 var loader = new Three.VTKLoader();
//                 loader.addEventListener( 'load', function ( event ) {
//                     var geometry = event.content;
//                     var mesh = new Three.Mesh( geometry, material );
//                     mesh.position.setY( - 0.09 );
//                     scene.add( mesh );
//                 } );
//                 loader.load( "./vtk/bunny.vtk" );
//         // A end
//                 // renderer
//                 renderer = new Three.WebGLRenderer( { antialias: false } );
//                 renderer.setClearColorHex( 0x000000, 1 );
//                 renderer.setSize( window.innerWidth, window.innerHeight );
//                 container = document.createElement( 'div' );
//                 document.body.appendChild( container );
//                 container.appendChild( renderer.domElement );

//                 stats = new Stats();
//                 stats.domElement.style.position = 'absolute';
//                 stats.domElement.style.top = '0px';
//                 container.appendChild( stats.domElement );
//                 //
//                 window.addEventListener( 'resize', onWindowResize, false );
//             },
//             onWindowResize() {
//                 camera.aspect = window.innerWidth / window.innerHeight;
//                 camera.updateProjectionMatrix();
//                 renderer.setSize( window.innerWidth, window.innerHeight );
//                 controls.handleResize();
//             },
//             animate() {
//                 requestAnimationFrame( animate );
//                 controls.update();
//                 renderer.render( scene, camera );
//                 stats.update();
//             }
//         },
//         mounted() {
//             this.init()
//             this.animate()
//         }
//     }

// </script>

// <style lang='less'>

// </style>
