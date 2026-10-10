const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader.js');

// Mock browser environment for GLTFLoader in Node
global.THREE = THREE;
global.window = global;
global.self = global;

const filePath = path.join(__dirname, 'public', 'prokaryote_cell.glb');
const buffer = fs.readFileSync(filePath);
const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

const loader = new GLTFLoader();
loader.parse(arrayBuffer, '', (gltf) => {
  console.log('=== GLTF MESHES ===');
  const meshes = {};
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      const box = new THREE.Box3().setFromObject(child);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      console.log(`\nMesh: ${child.name}`);
      console.log(`  Center: (${center.x.toFixed(3)}, ${center.y.toFixed(3)}, ${center.z.toFixed(3)})`);
      console.log(`  Min:    (${box.min.x.toFixed(3)}, ${box.min.y.toFixed(3)}, ${box.min.z.toFixed(3)})`);
      console.log(`  Max:    (${box.max.x.toFixed(3)}, ${box.max.y.toFixed(3)}, ${box.max.z.toFixed(3)})`);
      console.log(`  Size:   (${size.x.toFixed(3)}, ${size.y.toFixed(3)}, ${size.z.toFixed(3)})`);

      // Sample first 5 vertex positions
      const pos = child.geometry.attributes.position;
      if (pos) {
        console.log(`  Vertex count: ${pos.count}`);
        const p0 = new THREE.Vector3(pos.getX(0), pos.getY(0), pos.getZ(0)).applyMatrix4(child.matrixWorld);
        console.log(`  Sample vertex 0: (${p0.x.toFixed(3)}, ${p0.y.toFixed(3)}, ${p0.z.toFixed(3)})`);
      }
    }
  });
}, (err) => {
  console.error('Error parsing GLTF:', err);
});
