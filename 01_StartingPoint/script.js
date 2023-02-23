import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Generate blue cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
const mesh = new THREE.Mesh( geometry, material);
scene.add(mesh);

// Size
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 30;
// camera.position.x = 2;
// camera.position.y = 4;
camera.position.set(3, 2, 5);
//console.log(camera)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl');
//console.log(canvas)
const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();