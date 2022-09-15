import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function init(model: HTMLDivElement) {
	const scene: THREE.Scene = new THREE.Scene();
	const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio)	

	const rect = model.getBoundingClientRect()
	
	renderer.setSize(rect.width, rect.height, true)

	const handleResize = () => {
		const rect = model.getBoundingClientRect()

		renderer.setSize(rect.width, rect.height)
	}
	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	model.addEventListener('resize', handleResize, false)

	model.appendChild(renderer.domElement);

	// renderer.toneMapping = THREE.NoToneMapping
	renderer.shadowMap.enabled = true

	scene.background = new THREE.Color(0x000000);

	// plane
	const plane_geometry = new THREE.PlaneGeometry(1000, 1000);
	const plane_material = new THREE.MeshStandardMaterial({ color: 0x000000 });

	const plane = new THREE.Mesh(plane_geometry, plane_material);

	plane.rotation.x = -Math.PI / 2;
	plane.position.y = -3.3;
	plane.receiveShadow = true;

	scene.add(plane);

	// camera
	const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
		75,
		innerWidth / innerHeight,
		0.1,
		1000
	);

	camera.position.z = 20.0;
	camera.position.y = 10.0;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	// ambient light
	const ambient_light: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);

	scene.add(ambient_light)


	const spotlight = new THREE.SpotLight(0xffffff, 5, undefined, 120)
	spotlight.castShadow = true
	spotlight.position.set(0, 20, 0)

	spotlight.shadow.mapSize.width = 1024 * 2
	spotlight.shadow.mapSize.height = 1024 * 2

	spotlight.shadow.camera.near = 0.1;
	spotlight.shadow.camera.far = 200;

	scene.add(spotlight)

	function animate() {
		requestAnimationFrame(animate);

		scene.rotateY(0.001)

		renderer.render(scene, camera);
	}

	const loader: GLTFLoader = new GLTFLoader();

	loader.load(
		'3d_model/formula1_car_model.glb',
		(gltf) => {
			const model = gltf.scene;

			// add the car model
			scene.add(model);
			scene.rotateY(-90)

			model.traverse( function (object: any) {
				if (object.isMesh) object.castShadow = true
			} )

			// animate the model
			animate();
		},
		undefined,
		(error) => {
			console.log(error);
		}
	);

	return () => {
		model.removeChild(renderer.domElement)

		model.removeEventListener('resize', handleResize, false)
	}
}

export { init };
