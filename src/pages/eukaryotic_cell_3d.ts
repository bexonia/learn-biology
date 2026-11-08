// @ts-nocheck
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Effect } from 'effect';
import { runBiologyApp } from '../index.js';

runBiologyApp(1337, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');
  const UP = geometry.UP;
// ---------- palettes (role -> color)
const PALETTES = {
  'Classic X-ray':  { mem: '#a9c8ff', nuc: '#ff6f7a', er: '#ff7f8c', golgi: '#c07cff', mito: '#ffe066', lyso: '#9dff7a', vac: '#7fc4ff', cent: '#d9a441', dots: '#ffb3c0' },
  'Cryo ice blue':  { mem: '#bdf3ff', nuc: '#4fd8ff', er: '#7ee6ff', golgi: '#a6f0ff', mito: '#38c6e6', lyso: '#9fe9ff', vac: '#5aa9ff', cent: '#ffffff', dots: '#c4f6ff' },
  'Amber glass':    { mem: '#ffd9a0', nuc: '#ff9d3d', er: '#ffb866', golgi: '#ffe08a', mito: '#ffcf4a', lyso: '#fff1c2', vac: '#e8a05a', cent: '#ffffff', dots: '#ffd9a0' },
  'Iridescent':     { mem: '#d9c2ff', nuc: '#ff7ad6', er: '#6fd6ef', golgi: '#b9a4ff', mito: '#fff29d', lyso: '#a4ffd0', vac: '#ffc19d', cent: '#ffffff', dots: '#ffffff' },
  'Emerald jade':   { mem: '#b6ffd9', nuc: '#1fe08a', er: '#5affb0', golgi: '#9affc8', mito: '#e5ff6b', lyso: '#ffffff', vac: '#3fd6c9', cent: '#e5ff6b', dots: '#b6ffd9' },
  'Ruby crimson':   { mem: '#ffc2c2', nuc: '#ff3b4d', er: '#ff6b7d', golgi: '#ff9bb0', mito: '#ff9d4d', lyso: '#ffe0b0', vac: '#d0486b', cent: '#ffffff', dots: '#ffc2c2' },
  'Aurora':         { mem: '#a8f0d6', nuc: '#3fe0a8', er: '#4fb8e0', golgi: '#c79bff', mito: '#8cff9e', lyso: '#ff9de8', vac: '#6b8cff', cent: '#ffffff', dots: '#c9ffe9' },
  'Hologram':       { mem: '#6fd8ef', nuc: '#e83fc4', er: '#2fb4d6', golgi: '#ff4fd8', mito: '#4de1ff', lyso: '#ff9de8', vac: '#4de1ff', cent: '#ffffff', dots: '#7df0ff' },
  'Deep ocean':     { mem: '#7fffe8', nuc: '#ff7a3d', er: '#ff9f5a', golgi: '#3dffd0', mito: '#ffd23d', lyso: '#7fffe8', vac: '#3d9bff', cent: '#ffffff', dots: '#7fffe8' },
};

// ---------- seeded random + value noise (from shared Effect RandomService)
const { rand, rr, noise, fbm } = random;
function displace(geo, amp, freq, off = 0, oct = 4) {
  const p = geo.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = fbm(v.x * freq + off, v.y * freq + off * 1.7, v.z * freq - off, oct);
    v.multiplyScalar(1 + amp * (n - .5) * 2);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// ---------- renderer / scene
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, .1, 200);
camera.position.set(0, 0, 32);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = .35;
controls.minDistance = 8;
controls.maxDistance = 60;

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .28, .3, .55);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------- x-ray fresnel material, registered by role so palettes can swap colors
const mats = {};
const VERT = `
  varying vec3 vN; varying vec3 vV;
  void main() {
    vec3 p = position; vec3 n = normal;
    #ifdef USE_INSTANCING
      p = (instanceMatrix * vec4(p, 1.)).xyz; n = mat3(instanceMatrix) * n;
    #endif
    vec4 mv = modelViewMatrix * vec4(p, 1.);
    vN = normalize(normalMatrix * n); vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`;
const FRAG = `
  uniform vec3 uColor; uniform float uPow; uniform float uInt; uniform float uBase;
  varying vec3 vN; varying vec3 vV;
  void main() {
    vec3 n = vN / max(length(vN), 1e-4);
    float f = pow(clamp(1. - abs(dot(n, normalize(vV))), 0., 1.), uPow);
    gl_FragColor = vec4(clamp(uColor * (f * uInt + uBase), 0., 1.), 1.);
  }`;
function xray(role, int = 1, pow = 2.2, base = .02) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color() }, uPow: { value: pow }, uInt: { value: int }, uBase: { value: base } },
    vertexShader: VERT, fragmentShader: FRAG,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
  (mats[role] ||= []).push(m);
  return m;
}
const spriteTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
function dotsMat(role, size, opacity) {
  const m = new THREE.PointsMaterial({ size, map: spriteTex, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  (mats[role] ||= []).push(m);
  return m;
}
const tube = (pts, r, mat, seg = 6) =>
  new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 6, r, seg, false), mat);
const randDir = () => new THREE.Vector3(rr(-1, 1), rr(-1, 1), rr(-1, 1)).normalize();

const cell = new THREE.Group();
scene.add(cell);
const R = 10;
const NUC = new THREE.Vector3(.3, -.2, 0);

// ---------- plasma membrane: wrinkled glass shell + faint outer halo
cell.add(new THREE.Mesh(displace(new THREE.SphereGeometry(R, 192, 128), .045, .32, 3.1, 5), xray('mem', .8, 2.8, .003)));
cell.add(new THREE.Mesh(displace(new THREE.SphereGeometry(R * .985, 160, 110), .06, .55, 9.4, 5), xray('mem', .16, 1.8, .0)));
cell.add(new THREE.Mesh(displace(new THREE.SphereGeometry(R * 1.02, 96, 64), .03, .25, 21, 3), xray('mem', .25, 4, .0)));

// ---------- cytoskeleton fibers hugging the cortex
const fibMat = xray('mem', .9, 1.2, .05);
for (let i = 0; i < 70; i++) {
  let d = randDir(), pts = [];
  const axis = randDir().cross(d).normalize();
  const span = rr(.4, 1.1);
  for (let k = 0; k < 10; k++) {
    const q = d.clone().applyAxisAngle(axis, (k / 9 - .5) * span);
    q.add(randDir().multiplyScalar(.05)).normalize();
    pts.push(q.multiplyScalar(R * rr(.9, .975)));
  }
  cell.add(tube(pts, rr(.012, .03), fibMat, 4));
}

// ---------- nucleus: envelope, pores, chromatin, nucleolus
const nuc = new THREE.Group(); nuc.position.copy(NUC); cell.add(nuc);
const NR = 3.3;
nuc.add(new THREE.Mesh(displace(new THREE.SphereGeometry(NR, 128, 96), .03, .9, 5.5), xray('nuc', 1.3, 2.2, .02)));
nuc.add(new THREE.Mesh(displace(new THREE.SphereGeometry(NR * .95, 96, 64), .03, 1.1, 7.7), xray('nuc', .6, 1.4, .01)));
{
  const pores = new THREE.InstancedMesh(new THREE.TorusGeometry(.09, .03, 6, 12), xray('nuc', 1.4, 1, .15), 420);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), z = new THREE.Vector3(0, 0, 1);
  for (let i = 0; i < pores.count; i++) {
    const d = randDir();
    q.setFromUnitVectors(z, d);
    m.compose(d.clone().multiplyScalar(NR * 1.005), q, new THREE.Vector3(1, 1, 1));
    pores.setMatrixAt(i, m);
  }
  nuc.add(pores);
}
const chromMat = xray('nuc', .7, 1, .07);
for (let i = 0; i < 55; i++) {
  let p = randDir().multiplyScalar(rr(.5, NR * .8)), dir = randDir(), pts = [];
  for (let k = 0; k < 26; k++) {
    pts.push(p.clone());
    dir.add(randDir().multiplyScalar(.7)).normalize();
    p.add(dir.clone().multiplyScalar(.28));
    if (p.length() > NR * .88) p.multiplyScalar(.85);
  }
  nuc.add(tube(pts, .018, chromMat, 4));
}
// radial filaments converging on the nucleolus, like the reference
for (let i = 0; i < 46; i++) {
  const d = randDir(), pts = [];
  for (let k = 0; k <= 6; k++) pts.push(d.clone().multiplyScalar(.9 + k / 6 * (NR * .9 - .9)).add(randDir().multiplyScalar(.08)));
  nuc.add(tube(pts, .012, chromMat, 3));
}
nuc.add(new THREE.Mesh(displace(new THREE.SphereGeometry(.95, 64, 48), .12, 2.2, 1.3), xray('nuc', 1.6, 1.6, .12)));
nuc.add(new THREE.Mesh(new THREE.SphereGeometry(.45, 32, 24), xray('nuc', 1.2, 1.2, .2)));

// ---------- rough ER: wrinkled concentric cisternae around the nucleus + tangled tubules
for (let i = 0; i < 6; i++) {
  const r = NR + .45 + i * .38;
  const g = displace(new THREE.SphereGeometry(r, 160, 120), .05 + i * .006, 1.05 + i * .08, 30 + i * 4.3, 5);
  const mesh = new THREE.Mesh(g, xray('er', .26 - i * .02, 1.5, .002));
  mesh.position.copy(NUC);
  cell.add(mesh);
}
const erTubMat = xray('er', 1.0, 1.1, .08);
for (let i = 0; i < 16; i++) {
  let p = new THREE.Vector3(rr(-3.5, 2.5), rr(-7.8, -5.6), rr(-2.5, 3.5)), dir = randDir(), pts = [];
  for (let k = 0; k < 22; k++) {
    pts.push(p.clone());
    dir.add(randDir().multiplyScalar(.9)).normalize();
    p.add(dir.clone().multiplyScalar(.35));
  }
  cell.add(tube(pts, rr(.06, .11), erTubMat, 6));
}

// ---------- ribosomes + cytoplasmic granules
function cloud(n, sampler, mat) {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) sampler().toArray(a, i * 3);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(a, 3));
  cell.add(new THREE.Points(g, mat));
}
cloud(2600, () => randDir().multiplyScalar(NR + rr(.5, 2.8)).add(NUC), dotsMat('dots', .07, .22));
cloud(3500, () => {
  let v; do { v = randDir().multiplyScalar(R * Math.cbrt(rand()) * .96); } while (v.distanceTo(NUC) < NR + 2.6);
  return v;
}, dotsMat('dots', .06, .16));

// ---------- placement helper for organelles in the cytoplasm
const placed = [];
function spot(r, minR = 6.4, maxR = 8.4) {
  for (let t = 0; t < 500; t++) {
    const v = randDir().multiplyScalar(rr(minR, maxR));
    if (v.distanceTo(NUC) < NR + 2.6 + r) continue;
    if (placed.some(o => o.p.distanceTo(v) < o.r + r + .25)) continue;
    placed.push({ p: v, r });
    return v;
  }
  return randDir().multiplyScalar(minR);
}

// ---------- Golgi apparatus: stacked, bent cisternae with budding vesicles
{
  const golgi = new THREE.Group();
  for (let i = 0; i < 7; i++) {
    const g = new THREE.SphereGeometry(1, 72, 24);
    const p = g.attributes.position;
    const sx = 2.5 - Math.abs(i - 3) * .22, sz = 1.25 - Math.abs(i - 3) * .08;
    for (let k = 0; k < p.count; k++) {
      let x = p.getX(k) * sx, y = p.getY(k) * .16, z = p.getZ(k) * sz;
      y += .22 * x * x + i * .36;
      const w = fbm(x * 1.2 + i, z * 1.2, i * 2.1, 3);
      p.setXYZ(k, x * (1 + (w - .5) * .25), y + (w - .5) * .12, z * (1 + (w - .5) * .3));
    }
    g.computeVertexNormals();
    golgi.add(new THREE.Mesh(g, xray('golgi', .5, 2.2, .004)));
  }
  const vesMat = xray('golgi', 1.2, 1.4, .08);
  for (let i = 0; i < 26; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(rr(.1, .2), 16, 12), vesMat);
    const side = rand() < .5 ? -1 : 1;
    const x = side * rr(2.3, 3.1);
    s.position.set(x, .22 * x * x + rr(0, 2.4), rr(-1, 1));
    golgi.add(s);
  }
  const pos = spot(3.4, 6.4, 6.8);
  golgi.position.copy(pos);
  golgi.lookAt(NUC); golgi.rotateX(Math.PI / 2);
  cell.add(golgi);
}

// ---------- mitochondria: double membrane capsule with folded cristae
function mito() {
  const g = new THREE.Group();
  const len = rr(1.3, 2.4), r = rr(.45, .62);
  g.add(new THREE.Mesh(displace(new THREE.CapsuleGeometry(r, len, 12, 32), .04, 1.6, rand() * 50, 3), xray('mito', .95, 2.2, .015)));
  g.add(new THREE.Mesh(new THREE.CapsuleGeometry(r * .86, len * .95, 10, 28), xray('mito', .45, 1.6, .01)));
  const crMat = xray('mito', .9, 1, .1);
  for (let s = 0; s < 3; s++) {
    const pts = [], n = 34, ph = rand() * 6;
    for (let k = 0; k <= n; k++) {
      const y = (k / n - .5) * (len + r * .8);
      const env = Math.sqrt(Math.max(0, 1 - (2 * y / (len + r * 1.6)) ** 2));
      pts.push(new THREE.Vector3(Math.sin(k * 1.35 + ph) * r * .72 * env, y, (s - 1) * r * .38 + Math.cos(k * .7 + ph) * .05));
    }
    g.add(tube(pts, .022, crMat, 4));
  }
  g.position.copy(spot(len / 2 + r));
  g.rotation.set(rr(0, 6.3), rr(0, 6.3), rr(0, 6.3));
  cell.add(g);
}
for (let i = 0; i < 11; i++) mito();

// ---------- lysosomes / peroxisomes
for (let i = 0; i < 12; i++) {
  const r = rr(.38, .62), g = new THREE.Group();
  g.add(new THREE.Mesh(displace(new THREE.SphereGeometry(r, 48, 32), .05, 2.5, rand() * 40, 3), xray('lyso', 1.4, 2, .04)));
  g.add(new THREE.Mesh(displace(new THREE.SphereGeometry(r * .55, 32, 24), .12, 4, rand() * 40, 3), xray('lyso', .9, 1.3, .1)));
  g.position.copy(spot(r));
  cell.add(g);
}

// ---------- vacuoles / transport vesicles
for (let i = 0; i < 5; i++) {
  const m = new THREE.Mesh(displace(new THREE.SphereGeometry(1, 64, 40), .04, 1.4, rand() * 40, 3), xray('vac', 1.3, 2.4, .02));
  m.scale.set(rr(.5, .65), rr(1.3, 1.8), rr(.5, .65));
  m.position.copy(spot(1.6));
  m.rotation.set(rr(0, 3), rr(0, 3), rr(0, 3));
  cell.add(m);
}
for (let i = 0; i < 30; i++) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(rr(.12, .26), 20, 14), xray('vac', 1.1, 1.6, .05));
  m.position.copy(randDir().multiplyScalar(rr(6.2, 9)));
  cell.add(m);
}

// ---------- centrosome: two orthogonal barrels of 9 microtubule triplets
{
  const cen = new THREE.Group();
  const geo = new THREE.CylinderGeometry(.045, .045, 1.3, 8, 1, true);
  const mat = xray('cent', 1.3, 1.2, .12);
  const barrel = () => {
    const im = new THREE.InstancedMesh(geo, mat, 27), m = new THREE.Matrix4();
    for (let t = 0; t < 9; t++) for (let j = 0; j < 3; j++) {
      const a = t / 9 * Math.PI * 2 + j * .09, rad = .34 + j * .05;
      m.makeRotationY(a + .5).setPosition(Math.cos(a) * rad, 0, Math.sin(a) * rad);
      im.setMatrixAt(t * 3 + j, m);
    }
    return im;
  };
  const b1 = barrel(), b2 = barrel();
  b2.rotation.z = Math.PI / 2; b2.position.set(.75, .45, 0);
  cen.add(b1, b2);
  cen.position.copy(spot(1.2, 4.9, 5.6));
  cen.rotation.set(.4, .8, .2);
  cell.add(cen);
}

// ---------- palettes UI
function setPalette(name) {
  const p = PALETTES[name];
  for (const role in mats) for (const m of mats[role]) (m.uniforms ? m.uniforms.uColor.value : m.color).set(p[role]);
}
const sel = document.getElementById('pal');
for (const k in PALETTES) sel.add(new Option(k, k));
sel.onchange = () => setPalette(sel.value);
setPalette(sel.value);
document.getElementById('rot').onclick = e => { controls.autoRotate = !controls.autoRotate; e.target.textContent = controls.autoRotate ? 'Pause' : 'Rotate'; };
document.getElementById('snap').onclick = () => {
  composer.render();
  const a = document.createElement('a');
  a.download = `eukaryotic-cell-${sel.value.toLowerCase().replace(/\s+/g, '-')}.png`;
  a.href = renderer.domElement.toDataURL('image/png');
  a.click();
};

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
});
renderer.setAnimationLoop(() => { controls.update(); composer.render(); });
// Batch export: renders every palette from a fixed angle, plus a 3x3 contact sheet,
// and POSTs each PNG to the local save server (only works when served from it).
window.renderAll = async (size = 1600) => {
  const was = controls.autoRotate, prevSel = sel.value;
  controls.autoRotate = false;
  renderer.setPixelRatio(1);
  renderer.setSize(size, size, false);
  composer.setSize(size, size);
  camera.aspect = 1; camera.updateProjectionMatrix();
  camera.position.set(4, 3, 35); controls.target.set(0, 0, 0); controls.update();
  const names = Object.keys(PALETTES), cols = 3, tile = 600;
  const sheet = document.createElement('canvas');
  sheet.width = tile * cols; sheet.height = tile * Math.ceil(names.length / cols) + 0;
  const sg = sheet.getContext('2d');
  sg.fillStyle = '#000'; sg.fillRect(0, 0, sheet.width, sheet.height);
  const post = (name, canvas) => new Promise(res => canvas.toBlob(b =>
    fetch(`/save?name=${encodeURIComponent(name)}`, { method: 'POST', body: b }).then(r => res(r.ok)), 'image/png'));
  const saved = [];
  for (let i = 0; i < names.length; i++) {
    setPalette(names[i]);
    composer.render();
    const slug = names[i].toLowerCase().replace(/\s+/g, '-');
    if (await post(`${String(i + 1).padStart(2, '0')}-${slug}.png`, renderer.domElement)) saved.push(slug);
    const x = (i % cols) * tile, y = Math.floor(i / cols) * tile;
    sg.drawImage(renderer.domElement, x, y, tile, tile);
    sg.font = '500 22px system-ui, sans-serif'; sg.fillStyle = 'rgba(255,255,255,.85)';
    sg.fillText(`${i + 1}  ${names[i]}`, x + 20, y + tile - 22);
  }
  if (await post('00-contact-sheet.png', sheet)) saved.push('contact-sheet');
  setPalette(prevSel);
  controls.autoRotate = was;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  dispatchEvent(new Event('resize'));
  return saved;
};
window.__ready = true;
});
