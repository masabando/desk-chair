import { init } from "@masabando/easy-three";
const { load, camera, create, animate, controls, scene, color } = init();

controls.connect()
camera.position.set(-1.5, 1.5, 1.5)
create.ambientLight()
create.directionalLight({
  position: [-3, 6, 4],
  intensity: 1,
  shadow: {
    mapSize: { width: 2048, height: 2048 },
    camera: { left: -3, right: 3, top: 3, bottom: -3, near: 0.5, far: 20 },
    bias: -0.0001,
  },
})

// 遠くの床を背景と同じ色に溶かして、境界のないグレーにする。
scene.background = color(0xd8d8d8)
create.fog({ color: 0xd8d8d8, near: 5, far: 18 })
create.plane({
  size: [200, 200],
  rotation: [-Math.PI / 2, 0, 0],
  position: [0, -0.005, 0],
  castShadow: false,
  receiveShadow: true,
  option: {
    color: 0xb8b8b8,
    roughness: 1,
    metalness: 0,
  },
})

load.gltf("model/desk.glb", {
  position: [0, 0, 0.3],
  rotation: [0, Math.PI, 0]
})
load.gltf("model/chair.glb", {
  position: [0, 0, -0.3]
})

animate(({ delta, time, frameCount }) => {

})
