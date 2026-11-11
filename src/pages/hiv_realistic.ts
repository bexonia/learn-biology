// @ts-nocheck
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Effect } from 'effect';
import { runBiologyApp } from '../index.js';

runBiologyApp(20261106, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');
  const UP = geometry.UP;
const rand = random.rand;
const rr = (a, b) => a + (b - a) * rand();
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const randDir = () => { const u = rr(-1, 1), t = rr(0, Math.PI * 2), s = Math.sqrt(1 - u * u); return V(s * Math.cos(t), u, s * Math.sin(t)); };
const across = geometry.across;

function waveNormalMap(size = 256, waves = 24, strength = 2.6) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d'), img = g.createImageData(size, size), h = new Float32Array(size * size);
  const W = Array.from({ length: waves }, () => ({ fx: Math.round(rr(-10, 10)), fy: Math.round(rr(-10, 10)), ph: rr(0, 6.283), a: rr(.3, 1) }));
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) { let s = 0; for (const w of W) s += w.a * Math.sin((w.fx * x + w.fy * y) / size * 6.2832 + w.ph); h[y * size + x] = s; }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = h[y * size + (x + 1) % size] - h[y * size + (x - 1 + size) % size], dy = h[((y + 1) % size) * size + x] - h[((y - 1 + size) % size) * size + x];
    const n = V(-dx * strength / waves, -dy * strength / waves, 1).normalize(), i = (y * size + x) * 4;
    img.data[i] = (n.x * .5 + .5) * 255; img.data[i + 1] = (n.y * .5 + .5) * 255; img.data[i + 2] = (n.z * .5 + .5) * 255; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .96;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.localClippingEnabled = true;
document.body.prepend(renderer.domElement);
const scene = new THREE.Scene();
scene.background = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d'), gr = g.createRadialGradient(290, 210, 0, 256, 256, 380);
  gr.addColorStop(0, '#2a1829'); gr.addColorStop(.52, '#110914'); gr.addColorStop(1, '#040206'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, .1, 400); camera.position.set(23.0, 2.6, 26.0);
const controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, .15, 0); controls.enableDamping = true; controls.minDistance = .5; controls.maxDistance = 95; controls.panSpeed = .5; controls.zoomSpeed = .5;
scene.add(new THREE.HemisphereLight('#ffe4f2', '#1c2438', .52));
const key = new THREE.DirectionalLight('#fff2e0', 2.9); key.position.set(15, 25, 19); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 85 }); key.shadow.bias = -.0005; key.shadow.normalBias = .03;
const rim = new THREE.DirectionalLight('#9cc2ff', 1.45); rim.position.set(-17, 9, -15);
const lamp = new THREE.PointLight('#ffb0be', 9.5, 26, 2); lamp.position.set(4.8, 2.1, 5.4);
scene.add(key, rim, lamp);
const cell = new THREE.Group(); scene.add(cell);

const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)], CUT = CUT_LOCAL.map(p => p.clone());
let cutOn = true;
function updateCut() { CUT.forEach((p, i) => { p.copy(CUT_LOCAL[i]); if (!cutOn) p.constant = 1e4; p.applyMatrix4(cell.matrixWorld); }); }
const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };
const phys = o => new THREE.MeshPhysicalMaterial({ envMapIntensity: .8, ...CLIP, ...o });
const nmap = waveNormalMap(), bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };

const PARTS = [
  ['env', 'Env (gp120/gp41) trimer spikes (4TVP)', '#ff6b8b'],
  ['membrane', 'Host-derived lipid bilayer envelope', '#f3a683'],
  ['ma', 'Matrix (MA, p17) protein shell (1HIW)', '#7fe0ff'],
  ['capsid', 'Fullerene cone CA (p24) hexamers (3H4E)', '#5aa9e6'],
  ['pentamer', 'Capsid CA (p24) vertex pentamers (3P05)', '#c77dff'],
  ['rna', 'Diploid (+)ssRNA genome & NC (p7)', '#ffb35c'],
  ['rt', 'Reverse Transcriptase (p66/p51, 1RTD)', '#4ecdc4'],
  ['int', 'Integrase (IN, p32, 1EX4)', '#ffd24f'],
  ['cd4', 'Host T-cell CD4/CCR5 & proviral DNA', '#a29bfe'],
];

const INFO = {
  env: ['gp120 receptor head + gp41 fusion stalk trimer (PDB 4TVP)', 'Binds CD4 and CCR5/CXCR4 coreceptor to fuse with host T-cell'],
  membrane: ['Cholesterol- & sphingolipid-rich host plasma membrane', 'Cloaks the virion and anchors Env gp41 transmembrane tails'],
  ma: ['Myristoylated p17 Matrix trimers (PDB 1HIW)', 'Lines inner envelope leaflet and recruits Env during budding'],
  capsid: ['~216 CA (p24) hexamers in fullerene cone (PDB 3H4E)', 'Shields viral RNA & RT from cytosolic sensors until nuclear import'],
  pentamer: ['12 CA (p24) pentamers (5 narrow + 7 wide, PDB 3P05)', 'Introduces 5-fold declinations that close the fullerene cone'],
  rna: ['Two copies of 9.7 kb (+)ssRNA coated with NC (p7)', 'Dimeric RNA template allowing recombination during RT synthesis'],
  rt: ['p66/p51 heterodimer polymerase + RNase H (PDB 1RTD)', 'Transcribes viral (+)ssRNA into double-stranded proviral DNA'],
  int: ['Tetrameric viral Integrase enzyme (PDB 1EX4)', 'Splices reverse-transcribed viral dsDNA into host chromosomes'],
  cd4: ['Host CD4+ T-cell membrane, receptors & proviral dsDNA', 'Target immune cell where viral cDNA is reverse-transcribed'],
};

const REG = {};
const reg = (key, m) => { const r = REG[key] ??= { mats: [], imp: [] }; (m.isShaderMaterial ? r.imp : r.mats).push(m); return m; };
const shells = [], LOOKS = ['gel', 'see-through', 'solid'];
let organelleLook = 'gel';
function shellMat(key, solid, gel, tint, o = {}) {
  const m = reg(key, phys({ color: solid, roughness: .16, clearcoat: .6, clearcoatRoughness: .2, sheen: .6, sheenColor: o.sheen ?? '#ffffff', ior: 1.35, thickness: o.thickness ?? .8, attenuationColor: tint, attenuationDistance: o.atten ?? 1.1, ...o.extra }));
  m.userData.cols = { solid: new THREE.Color(solid), gel: new THREE.Color(gel) }; shells.push(m); return m;
}
function applyLook() {
  const gel = organelleLook === 'gel', see = organelleLook === 'see-through';
  shells.forEach(m => {
    m.transmission = gel ? 1 : 0; m.transparent = see; m.opacity = see ? .46 : 1; m.depthWrite = !see;
    m.side = gel ? THREE.FrontSide : THREE.DoubleSide; m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid); m.needsUpdate = true;
  });
}

const impMats = [];
function impostorMat(key, clip = true) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uLight: { value: V(.4, .6, .7).normalize() }, uHi: { value: 0 }, uDim: { value: 1 } },
    vertexShader: `attribute float size; attribute vec3 icol; uniform float uScale; varying vec3 vCol;
      #include <clipping_planes_pars_vertex>
      void main() { vCol = icol; vec4 mvPosition = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * uScale / max(.01, -mvPosition.z); gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }`,
    fragmentShader: `uniform vec3 uLight; uniform float uHi, uDim; varying vec3 vCol;
      #include <clipping_planes_pars_fragment>
      void main() {
        #include <clipping_planes_fragment>
        vec2 q = gl_PointCoord * 2. - 1.; q.y = -q.y; float r2 = dot(q, q); if (r2 > 1.) discard;
        vec3 n = vec3(q, sqrt(1. - r2)); float d = max(dot(n, uLight), 0.); vec3 h = normalize(uLight + vec3(0., 0., 1.));
        vec3 c = vCol * (.26 + .95 * d) + pow(max(dot(n, h), 0.), 30.) * .22 + vCol * pow(1. - n.z, 3.) * .3;
        gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi), uDim);
      }`,
    clipping: clip, clippingPlanes: clip ? CUT : null, clipIntersection: true,
  });
  impMats.push(m); return reg(key, m);
}
function stickMat(key, clip = true) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uLight: { value: V(.4, .6, .7).normalize() }, uHi: { value: 0 }, uDim: { value: 1 } },
    vertexShader: `attribute vec2 corner; attribute vec3 aA, aB, aC1, aC2; attribute float aR; uniform float uScale; varying vec3 vC1, vC2, vSide; varying vec2 vUV;
      #include <clipping_planes_pars_vertex>
      void main() {
        vec3 a = (modelViewMatrix * vec4(aA, 1.)).xyz, b = (modelViewMatrix * vec4(aB, 1.)).xyz, d = b - a, m = (a + b) * .5, side = cross(d, m);
        if (dot(side, side) < 1e-16) side = cross(d, vec3(0., 1., 0.));
        side = normalize(side);
        float r = max(aR, .6 * -m.z / uScale);
        vec4 mvPosition = vec4(mix(a, b, corner.x) + side * r * corner.y, 1.);
        vC1 = aC1; vC2 = aC2; vSide = side; vUV = corner;
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }`,
    fragmentShader: `uniform vec3 uLight; uniform float uHi, uDim; varying vec3 vC1, vC2, vSide; varying vec2 vUV;
      #include <clipping_planes_pars_fragment>
      void main() {
        #include <clipping_planes_fragment>
        float u = vUV.y; vec3 n = normalize(vSide * u + vec3(0., 0., sqrt(max(0., 1. - u * u)))), h = normalize(uLight + vec3(0., 0., 1.));
        vec3 col = vUV.x < .5 ? vC1 : vC2, c = col * (.26 + .95 * max(dot(n, uLight), 0.)) + pow(max(dot(n, h), 0.), 30.) * .22;
        gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi), uDim);
      }`,
    clipping: clip, clippingPlanes: clip ? CUT : null, clipIntersection: true, side: THREE.DoubleSide,
  });
  impMats.push(m); return reg(key, m);
}

const shade = (mesh, cast = true, receive = true) => { mesh.castShadow = cast; mesh.receiveShadow = receive; return mesh; };
const BASE = { A: '#ff5a5a', T: '#ffd24a', G: '#3ddc84', C: '#ff9a3c', U: '#ff7ad9' }, PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
const BACKBONE = ['#3d7bff', '#9b5cff'], MRNA = '#ffb35c';
const COLS = new Map(), col = h => { let c = COLS.get(h); if (!c) COLS.set(h, c = new THREE.Color(h)); return c; };

const grown = a => { const b = new Float32Array(a.length * 2); b.set(a); return b; };
function balls(key, parent = cell, clip = true) {
  let n = 0, cap = 1 << 14, pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
  let m = 0, scap = 1 << 13, A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap), C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
  return {
    stick(a, b, r, c1, c2) {
      if (m === scap) { scap *= 2; A = grown(A); B = grown(B); R = grown(R); C1 = grown(C1); C2 = grown(C2); }
      const i = m * 3; A[i] = a.x; A[i + 1] = a.y; A[i + 2] = a.z; B[i] = b.x; B[i + 1] = b.y; B[i + 2] = b.z; C1[i] = c1.r; C1[i + 1] = c1.g; C1[i + 2] = c1.b; C2[i] = c2.r; C2[i + 1] = c2.g; C2[i + 2] = c2.b; R[m++] = r;
    },
    add(p, s, c) {
      if (n === cap) { cap *= 2; const a = new Float32Array(cap * 3), b = new Float32Array(cap), d = new Float32Array(cap * 3); a.set(pos); b.set(sz); d.set(cl); pos = a; sz = b; cl = d; }
      const i = n * 3; pos[i] = p.x; pos[i + 1] = p.y; pos[i + 2] = p.z; cl[i] = c.r; cl[i + 1] = c.g; cl[i + 2] = c.b; sz[n++] = s;
    },
    done() {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos.slice(0, n * 3), 3)); g.setAttribute('size', new THREE.BufferAttribute(sz.slice(0, n), 1)); g.setAttribute('icol', new THREE.BufferAttribute(cl.slice(0, n * 3), 3));
      if (n) { const pts = new THREE.Points(g, impostorMat(key, clip)); pts.frustumCulled = false; parent.add(pts); }
      if (m) {
        const sg = new THREE.InstancedBufferGeometry(); sg.setIndex([0, 1, 2, 2, 1, 3]);
        sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3)); sg.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 0, 1, 1, 1]), 2));
        [['aA', A, 3], ['aB', B, 3], ['aR', R, 1], ['aC1', C1, 3], ['aC2', C2, 3]].forEach(([nm, arr, k]) => sg.setAttribute(nm, new THREE.InstancedBufferAttribute(arr.slice(0, m * k), k)));
        sg.instanceCount = m; const rods = new THREE.Mesh(sg, stickMat(key, clip)); rods.frustumCulled = false; parent.add(rods);
      }
      return n + m;
    },
  };
}

const NM = .1;
const BP = .34 * NM, TWIST = 2 * Math.PI / 10.5, GROOVE = 140 * Math.PI / 180;
const STRAND_R = .16 * NM, ROD_R = .09 * NM, JOINT = .34 * NM, SILVER = '#d4d9e2';
const resample = geometry.resample;
function emitDNA(S, ax) { dna.emitDNA(S, ax, { nm: NM, radius: 0.95 * NM }); }
function rnaAlong(S, ax, bb = MRNA) { rna.rnaAlong(S, ax, bb, NM); }

const PDB = {"env":{"pdb":"4TVP","full":{"n":1737,"xyz":"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GwB0//r/OwBr/+j/OgBg/8T/PgA7/73/XwAy/6z/XgAo/4f/XgAC/4b/dQAD/2j/jQAh/2v/oAAs/0z/xQA2/0v/0gBF/yr/+ABE/yb/AQFk/xT/HQFZ//3+OQFy//T+LQGI/xH/RQGX/yr/NQGr/0b/RgG7/2T/OAGx/4f/PQHC/6n/MwGv/8j/PgHM/97/KQHl/8r/CgHP/8X/6ADd/8//1wC8/9P/6AC5//T/3ADa/wEAuQDR//b/ugCu/wUAxwC8/yYAqwDW/ykAkwC6/yEAnQCi/zwAngC//1UAegDK/0wAcQCl/00AfACk/3EAZgDB/3sARgC1/2oASQCU/3sASwCk/50ALwC9/5kAEQCm/6EAJgCU/7wAIwCW/+IANAC0//EARwCt/xEBRADQ/x8BOwDF/0MBWQCt/0UBcQDH/1MBZgC//3YBgQC6/5EBjgCW/48BlwCD/68BrgBq/54BxABO/6sB2wAy/54BzAAV/4sByAD0/p4B6gDi/poBCQHY/q4BJwHx/q0BRAH4/qMBSwEc/6kBVwEe/4QBNAEX/3cBLQE8/3oBBwE1/3sB/wA+/1cB2wA0/10BxgBJ/3QBpgA//4YBkwBf/4cBcwBl/5sBXgCE/5YBPACV/5cBJQCU/3kBBACj/2wB6f+J/2cByv+M/1EBuf+i/2sBx//E/3MBx/+9/5gB2f+g/6kB/f+Z/50BDgB4/5YBLQBq/6gBOwBU/4wBXwBK/4QBcwBG/2QBlgA8/1kBrABV/0cB0ABT/zsB6wBp/0sB7gB7/yoByQCE/ywBygCT/08B3gCt/2IB3wC1/4cB1gDX/5YB3QDm/7gBvwCl/wMCwwCL/+cBzgCQ/8MBtwCl/64BugCm/4gBqQC0/2oBpgCu/0QBxQC6/zIBsADN/xkBmgDg/zEBswD9/zMBuQD9/w0BmAD5//sAdgDp//sAcQDD//YAWQCt/+IAVgCH/+MAWgB0/8MAOwBg/7oAPgA6/74AKgA1/54ARgBC/4cAaAAz/4IAiwBB/3sAkwAl/2IApQA0/0QAkwAp/yQAoAAu/wAAlgBQ//H/mQBX/8z/ngB8/8P/jgCG/6L/jgCl/4z/bgC1/33/ZgC4/1f/fwDM/0P/mgDB/1v/sQCj/17/ywCT/3X/7ACJ/2f//wBr/3b/JAFl/3X/LAFB/27/UgE+/3D/YQEn/4r/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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM"},"red":{"n":100,"xyz":"CQCBAEsAVf7G/kUABgC4AeT/KgEm/ycA9/7A/4cBQf+K/+QB5QBYAKT+vP9/ACv+lP4r/9j/UwDmAC8AUgA4/3YAl/70/z8BFAAWAQD/jP8q/9X+Rv9L/+n/HP/w/6//ff8WAjcAiwC2ACcBLf+V/yMBq//O/6T/ZP9x/2H/Q/+qANP+YwB9AbgAUf8FAI4BGwHb/5z+qwAVACn+jf56/0sAJv+J/9n+gwD9/ioB+v+T/4QBEgDzADcBVgDQ/6T/YwC2/1EAcv+LAS4An/57/44BUwCM/1D+lf/j/zsBZ/8iAIT+sv98AAkBsv+6AAX/qAA6AS8BPf5A/40ATf+/AFf+5v68/kAAlACx/9T+VQDkAI3/ov+f/zH+TAAfAK/+CAJi/zcAdv/5/8kA/P55/yQAUgA5//f/tQCJ/4IBBv8dAB4BDQBnAMX/9v4u/2z/qv8PAZz+jQHe/nUAAgDSAKUBn/8J/1z+qP9HAHABBwEH/4ABBv8f/6QAz//IAHj/mwGr/y8Ao//8/+j+SwDqAWkAUgFp/4H/yv8HAez/xf8PAaMAyv+qAagAKQB5ANYAjQCgAOn/DQBs/6X+6QBm//z+t/52/9UAHQB8/woByQDP/1j/CQC8/yb/Kf8nAEEAAgGq//D/nQCWAG0AEQBKAET/yf9YAXT/eAD5/z8BWAF//6kAUwAmAcQA+f+dAL/+pACs/84AYP+I/5EBQwCKAGv+tP7e/74A/QAD/8kAQwBwAH4BhP5s/ikAFABgAUQARwBjAZABjf/K/0YAmgBE/5X/nf+F//IA","kind":"BAAECAAADAwABAgADAwAAAQEAAwADAQADAgADAgIBAwIBAAMAAwEBAQADAAMBAwMCAAACAgADAAMCAQMAAgABAgMBAgEBAQEBAwMAAgIDAAIBAwEBAgEDAgADAAIBAAEBAAIAA==","rad":"JSoqMCMXMCgpJSgjKi4oLzEpJSopJikfLCwpMSwmJyooKiMmHyomIycsKy0sKCkpMycnLDEmJi0pLikwJiksJiwtKi8sKSwqKCwrKigpJy0uIyssLi8mKSsjJiYxJykpJiYpKA=="}},"ma":{"pdb":"1HIW","full":{"n":338,"xyz":"tQBz/0sA2wB1/0kA9ABY/0wADwFf/2YAKAFq/0wADgF//zsACgGO/14ALwGU/2AALQGn/z8ADgG6/0sAHQHG/2sAOgHY/1kAIwHs/0IAHgEQAEwA/QAgAE4ACQFAADsAJgFCACMAQQFOADsAMAFHAFsAOwE2AHsAGgEkAIAAFgEBAHEA+gDq/2kA8QDT/4YA2gC1/4wAwADN/5oAvADc/3cAsQC7/2kAmAC0/4YAiQDX/4AAhwDS/1oAdgCx/2AAXADA/3gAWADe/2IATwDH/0QAOAC0/1sAJwDV/2MAIgDf/z8AFAC7/zoAMgCv/yUAQQCM/ysAYQCR/0AAbQBu/zcAdQB9/xUAkwCP/yYApgBv/yUArwBs/wAAuwCE/+X/mwB+/9H/hQCE/+//lwCl//X/lQCu/9D/bwCo/9L/agC9//H/fgDa/+L/ZwDY/8T/SADa/9n/VwD4/+z/aAAJAM//SQAcAMP/QgArAOX/ZgA5AOf/XgBbANf/RABnAPD/UwBRAAoAWgBbAC4AfQBVADsAcAA3AE8AaAAmAC4AiAAxABwAmwAkADsAiQADADcAjwABABEAtAAJABUAuQDv/zEAqwDV/xkAwQDi//3/4ADc/xIA0wC5/xwAzgCx//f/8QC6/+7//ACl/wwA6ACG/wAA9ACO/93/GQGP/+j/HAGz/9v/NgHF/+//KwHm//3/OwH+/xYAGwERAB8A9QATABYA+wArAPj/EwETAOj/9wD5/+3/3gAOANr/9gAXAL7/AQHz/7r/3ADp/7f/1AAFAJ7/8gD//4f/5wDa/4r/xADj/3z/0AD7/2L/5wDf/1T/zADF/1L/sgDe/0T/ywDk/yf/zwC+/yH/qAC//yD/qADa/wX/xQDG//T+tQCj//f+lgC1/+v+ogC7/8f+qACW/8D+GgDtADgABwAOATYAEQAyAToA+P9IAUwA4P9XATMA4v81ASIA1/8pAUQAvf9FAUgAq/83ASkArv8TATcAnf8cAVcAfP8oAUgAeP8KATEAW//zADsAXv/NAEAAPv/JAC0AM//VAAsAHf/tAB8AIP/nAEUAKf/9AGMAS//tAG4AbP/3AF4AkP/uAFkApf/uAHkAy//xAHwAxf/OAIwAvf++AGoA3v/GAFoA8P+3AHgA2f+YAHQA4P+XAE8ABgCYAFcABAB8AHEA7/9nAFoACABpAD4AJQBeAFQADQBDAGEACwA5ADwAMQA9ADkAKwBZACEAQAB5ACMALwCVADcARACxACoAMACrAAoAEgC/ABgAKQDeABUAJwDgAPD/DADeANX/HwDEAMD/JQCzAOH/AACwAOn//P+nAMT/EwCKAMj/AgB+AOj/4P+AANn/7P9sALv/+/9SANP/2/9QAOb/wv9SAMn/wf8tAMH/uv8hAOX/nP83AOj/fv8kANr/hf8GAO//k/8fAAkAif8kAC0Aef9DADwAnP9NAEoArP9JACgAkf9dABcAkv93ADIAuP95AC4As/99AAgAmv+ZAAsArf+wACIAzP+tAAwAtP+1AO//q//VAAIA0P/cAAwA2P/ZAOj/vv/zANz/xv8MAfj/6/8GAe//4v8KAcv/0P8sAdH/s/8ZAcH/mv8iAdz/ev8SAeT/X/8SAQAAX//uAAsAcP/MAAQAV//DAOj/Yv/hANX/h//ZANr/f/+2AM7/a//CAK//iP/aAKr/oP+8AKf/h/+mAJP/g//EAHz/qP/OAHr/sf+qAHX/mv+qAFf/rP/JAEn/y/+yAEz/u/+WADn/q/+qAB7/y/+9ABj/4/+fABz/3/+MAPv+KP+m/0IAFv+E/z4A8f59/0IA5v5f/1cA4/5I/zoABP9U/ywAEv9P/1AABf8r/1AAFv8m/y4ANP84/z4AOP8k/14ANv8F/0kAVf8N/zQAeP8A/z0Amf8S/z0Aq//1/i0Anv/a/hUAmf+5/igAm//P/kYAiv/Q/mgAiP/1/nIAbv8L/2AAaP8w/14AXP8//34ATf9h/4YAcP9q/5MAfP9r/28AZP+G/2IAbf+c/4AAkv+Y/3wAj/+h/1cAev+//18AlP/L/3kAsP/D/2AAof/Y/0UAnf/4/1oAwv/z/2MAy//v/z4Atf8QADoAnf/7/yYAd/8AACoAav/i/z4AR//p/zEAU//b/xAAU/+4/yAALf+3/x8AK/+3//r/Nv+g/93/Qv++/8r/VP/P/+f/ZP+t//D/bf+r/8z/ff/O/8z/kP/H/+z/n/+n/93/qv+3/7z/u//R/9H/zP+4/+n/1v+g/83/9v+y/8H/AwCx/+X//P+N/+r/HAB+/9v/MgCR//T/FwCU/w4AGgCH/zIABABr/0AA7v+G/08A5v+U/ywA5P9x/x0Ayv9p/zgAuP+J/zIAtv+C/w0Aqf9e/xMAjf9n/ysAgv+B/xIAhv9o//b/bf9S/wgAV/9v/xIAU/94/+3/Sf9V/+P/L/9V////If93//T/IP9o/9H/Dv9J/9z/Lf81/8//Lv8S/9//U/8Q/+n/Wv/0/gIAe/8D/w8Ak/8h/woApP8Q/+z/hP8R/9f/fv81/+L/n/9A/9X/nv8u/7P/fP9A/6//jP9h/7b/p/9V/53/jf9M/4T/e/9u/4T/m/+D/4f/p/92/2b/hf92/1T/hP+c/1n/qv+g/1T/p/+P/zL/h/+i/yr/kv/G/zH/tP/C/x//rv+t/wD/iv+y//r+i//V/wj/","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg="},"red":{"n":45,"xyz":"+f+cANr/BwG8//v/wP8CAeX/mv+v/yb/CwF2/1IAHwDQ/0kAQP/E/xcAhQCn/+L/ov9IAAcAi//2/jMAmwDC/3oAmP/X/1QA1QDo/2//IwEoAEoAkAB5/y0Azv+lABP/fP/GALj/SgDI/1YAxv8iAUgA0QCL//L/pf+//9f/sf+zAFn/hwDS/1oAKwCV/xsALwBXAC8AoACt/9H+k/9b/5X/TP8v/+n/ZgCr/10Anf90/xYALf9O/1YATf/qADIA0gDM/4kAuwDG/w//HQHO/1QA8P+s/9H/fgA1ADYA3v+jAGEAqADz/xsARv+Q/+X/WAASANj/6P95/zYAKQDEABsADACG/+L/9QAKAN7/","kind":"BAAECAAACAAECAAIAAAABAQABAAIBAAIBAAICAAICAQAAAAIAAQACAAIBAgA","rad":"JSAkIh8XHx8pJhcnICQcGiIXJxwdHRAcIxcjIxcdKSYaHR0XHCMdICAcHxQg"}},"cahex":{"pdb":"3H4E","full":{"n":1260,"xyz":"6v9m/3wA9P9l/6AACwCC/6oAGQCR/8oABwCx/9UAEwDO/+sACQC+/wwBHgCg/wIBAQCJ//sA/v9y/90A3v99/8wAy/91/6wAzP+O/5AAuf+O/28Azf+F/1AA0/+l/z0AyP+w/xoA7f+2/xIA9/+T/xsA2v+D/wgA4f+X/+j/BwCS/+r/AwBs/+v/6f9r/8////+B/7n/HgBs/8D/DABN/7P//v9f/5X/IQBt/4v/OQBR/5X/JAAy/5T/OQAX/6b/XAAl/6H/cgAa/7//cwA9/87/TQA8/9P/UgAl//L/aAA9/wcATQBX//7/MQBB/woAQgA5/ysASQBe/zIAJgBq/ykAGABQ/0AALQBZ/14AGABT/30A/P9E/2kA4P8v/3gA1f8P/2UAt/8k/1sAzv8//00A4f8l/zoAwv8X/yoAt/86/yEA2P9A/w4A1v8f//v/sf8j//P/s/9G/+X/yP84/8j/sv82/6n/xv8j/5D/3v8G/5T/w//v/qH/1//R/pb/8//c/q7/2f/m/sn/y//D/sf/7f+y/sr/8//I/uj/0/+7/vj/3/+X/vT/AQCf/gMA8P+w/iEA2f+R/iYA9/96/iYACQCP/kAA6P+R/lUA5f9r/lUACQBn/l4AAwB//nsA5f9r/ocA+v9L/oUAFABb/pwA/P9u/rMA3P9b/rkAwf9u/ssAtP9i/u0AkP9b/vMAf/9r/hEBeP+O/h8BkP+r/h4BnP+4/kABkv/c/kkBrP/1/j4BuP/d/iMBtf/Z/v0Aqv+6/usAx/+q/tgAyf+1/rMAw/+b/pgA0/+f/nYAtf+w/mgAtf/H/oYA2P/T/n0Azf/Y/lgAsP/u/mUAlv/X/lYAhv/L/ncAkv/l/o8AhP8I/5cAmP8o/5gAk/8p/70Ao/8G/8AAwP8P/6oAxv8u/74Aw/8a/94A3v8C/9IA9v8c/8YA9f8y/+UA8/8W//8ADwAQ/xcBIAD9/goBFAAF/+cACwDs/swAFgD+/q0A+//x/pYAAQAO/30AJgAF/3oAHwDg/ncABgDl/lwAHQD+/koAOADi/kkAIADK/jgAFQDl/h8AOQDt/hcAQADI/hEAJADH/vj/LwDn/uj/UgDZ/uP/RQC7/tD/MgDT/rn/UADp/rP/ZQDK/qj/SQC9/pL/RADf/oH/aQDi/nn/aADq/lP/jADe/kr/pADC/lL/xgDO/l7/1gC5/kP/xwDQ/if/2QDw/jX/9gD3/h7/CQEX/xj/AAEp//j+HgEw/+H+GgFW/+b+CAFU/wf/GwFl/yT/JgFN/z//EQFf/1r/8QBb/0f/+AA2/0P/AAEx/2j/3wBD/3D/zAAr/1v/3wAO/2n/1wAV/47/tAAi/4j/rQAA/3j/vwDs/pL/rAD+/q3/igD2/p7/kwDQ/pn/mwDK/r7/hQDl/sz/pQDv/t7/xAAE/9v/2wDq/uv/GgHA/sr/NgGx/rX/HwGj/pv/EAHF/pP/MwHU/pT/PgG8/nn/HgHB/mX/IQHn/mb/RAHn/lf/PAHL/j//HwHf/jD/MQEA/yz/OQEM/wn/WwEE//n+cAEj/wP/ZAEi/yf/ZgH9/ir/jAH9/iT/kwEb/zv/fgEL/1f/jwHp/lP/rwH9/lb/pgEK/3n/pgHm/oP/jwHV/p3/gwHm/r3/ewEH/63/YQEe/73/RAEr/6f/UwFO/6z/dAFD/53/ZAEz/4D/TgFR/3j/awFq/3v/fgFT/2P/ZAFT/0f/WgF4/0n/VgGF/yX/gwCg/4AAiQCn/6UAfADJ/68AdwDg/8wAUgDj/9AAQAABAN8AQQD0/wMBZwDz//8AagDN//0AfwC6/+MAaQCh/88AZwCM/68AUQCa/5QARwCM/3IAWQCZ/1QAQACv/0IAMQCs/x8APgDP/xgAYgDF/yAAYQCk/w0AVAC2/+7/bADT/+//igC9//D/fgCm/9T/dgDF/77/mADV/8X/qQC2/7j/kwC0/5n/mADZ/5H/vADg/5r/zAC+/5n/7gDC/6r/9QDn/6b/CQHz/8X/6wAFANX/2ADk/9r/7wDc//f/5gD6/w0AwgDy/wUAxgDO/w8A1gDY/zAAugDw/zgAnQDY/y4ArQC+/0UArwDU/2MAqgC+/4IAqgCe/24ArQB7/3sAwgBi/2cAoQBU/10AlQB2/1AAtgB5/z0AsQBX/ywAjQBh/yMAmQCB/xEAtABu//7/ngBQ//X/gQBl/+j/mABw/8v/jgBe/6z/qQBm/5L/zgBs/5X/1ABI/6H/+QBK/5f//QBn/7D/5wBW/8r//QA3/8b/HQFM/8r/DgFb/+n/CQE5//j/LQEw//T/OAFQ/wQAIQFK/yIAMAEn/yUAVAE0/yUASgFN/0EAOAEy/1UAVwEb/1MAbgE4/10AVwE//3oAWQEb/4UAfwEc/4QAgAE7/5oAaAEp/7IAbgEE/7kA/gAL/08BDgEe/zIB/gAm/xABBgEU/+8AFwEq/9YADQEr/7EAHwEW/5cAJAEo/3YABQEW/2cA8QAh/4YA+ABG/34A7gA//1kAzQAx/2UA0wAP/1YA1gD7/nYAxQAS/48AoAAY/5YAjgA6/5kAjAA0/74AsQAw/8EAuABO/6sAogBj/8EAtQBS/94A2ABd/9MAzQCB/8gAuwCJ/+kA0gB3/wEB5wCK/xsBAAGQ/w0B8QCN/+oAAQF6/80A9QCP/7AA8ABz/5cA2gCI/4EA9QCj/34AEQGK/3oA/wB3/18A9gCY/00AGwGh/0wAIwGA/zoABwGG/yEAEwGp/xoANgGd/xQAKAGF//v/EgGf/+v/MAG3/+f/QwGc/9P/JQGY/7z/IgG+/7f/RwG//67/QwGi/5X/JAGv/4T/NAHR/37/MwHY/1j/VQHq/1X/dwHs/2b/fgEPAHT/mwEQAFv/gwERAD3/cQEwAEj/fQFNADP/bAFuACv/XAFwAAj/aAGMAPL+RgGcAPL+OwGNABT/NAGmAC//SwGjAE7/LgGcAGX/IgF+AFH/RQFxAFH/SgF1AHb/KAFkAHz/NAFGAGj/VgFHAHr/RwFFAJ3/KwEuAJT/RQEVAIf/XQEbAKT/QQEVAL3/OAH0/63/XQHp/7T/pAE2AOv/vwFDANP/rgEyALX/mQFRALX/rAFyALL/xwFhAJ3/sQFQAIT/lAFoAH7/qwGEAHL/wAFtAF3/ogFgAEn/kwGCAEL/kwGPAB//sAGlABP/oQHIABr/lAG/AD3/tAGrAEb/ygHKAEL/sgHhAFX/sAHHAHH/1QHBAHX/1wHnAHb/wQHqAJX/3QHXAKX/2QG9AMD/vgG/ANz/owHLAMX/fwHDAND/aAGwALj/UwHQALf/cAHkAKv/eQHLAJH/VQHKAIP/UgHvAIL/cwHxAG//aQHZAFP/RQHkAE7/lwBFAIUAkQBOAKkAbABSALIAWABTANIASAAyAOEAKwAuAPkAQQAvABgBSwBSAAwBbwBHAAQBgQBQAOQAhwAvANQAmAAjALQAgwAXAJgAjQAHAHcAiwAdAFgAbAASAEUAagADACEAUgAfABkAbAA6ACMAiAAoABEAdAAlAPH/ZgBIAPH/iQBYAPP/mABCANj/egBKAMH/fABwAMf/oQBvALz/mABaAJ7/fABxAJP/hwCUAJ3/rQCRAJ3/uQCxAK7/nADJAKn/mgDgAMj/ewDQANf/jgCvANz/nwC/APr/fwDHAA8AdQCjAAcAlgCUABMAkwCoADMAcACbADoAdwB3ADAAlAB4AEgAgACFAGYAjwB2AIYArABmAHMAzABYAIIA7QBeAHAA6gA5AGYAxwA/AFcA1QBdAEUA8QBJADUA2AAuACsAwwBIABgA4QBWAAYA8QA0AP7/0QAmAO//1AA/ANP/4QAtALT/6ABHAJr/9gBrAJ7/FwFfAKv/KAF/AKL/DwGRALn/EwF2ANT/OAF7ANP/NgGhANb/HwGcAPP/OQGFAAUAUwGhAAEAOwG7ABAANAGkAC0AWgGgADMAXgHFADMAQwHKAE0AUQGtAGIAcwG9AGMAZQHfAGsAUgHPAIgAcgG/AJUAgwHhAJMAaAHwAKkAZwHTAMEAiwHKAMoAkwGuAOMAPwFsAF8BQQGDAEEBMQF3ACABRwF1AAEBPgGOAOUAPAGGAMAAWAGLAKcATwGWAIMAUAFzAHYAOgFnAJMAHwF/AIkAIQFzAGUAHQFPAHIAPgFEAGQATwE9AIUAMgE5AJwAGgEcAKMA9AAdAKMA9gAYAMkADAE3AM0A9gBMALUA2ABCAMkA6wBLAOkA8gBvAN4A0AB1AM8AvABqAO4A1AB3AAgByQCTACAB0QCrABMB0gCcAPAA7QChANYA2QCfALYA8wCOAKAA1wCFAIgAzACqAIQA8AC2AIIA+ACdAGcA2AClAFQA4wDKAFQABAHBAEMA8wCrACoA2wDGACAA+ADeABwABwHGAAIA5gDAAPL/4QDmAO7/AgHpANz/+ADNAMT/1gDcAL3/5wD9ALT/AAHsAJ3/5gDXAIv/0AD0AIP/zADzAF3/xgAYAVf/0gA6AWL/tQBRAWz/wQBoAVD/twBPATX/kwBNAUD/fQBhASf/WABeASD/UABMAf/+PABhAeb+HwBIAen+JwA8AQ3/DQBEASj/GgBcAUP/FABCAV//KgAoAU3/RQBCAUr/QwBNAW7/RQAoAXj/ZQAkAWX/cgBEAXP/bQA7AZj/dwAWAZX/mAAiAYX/nQA9AaD/lwAjAbv/sQALAa7/zAAnAav/xQAvAc//xgBVAc//xQBpAfD/pQB8Afb/tQCdAev/wgCNAcv/oQB8AcX/kACeAcf/qACwAbD/pgCTAZf/gACWAZr/fwC8AZf/mQC+AXv/jwCeAWj/awCSAWv/WACuAVn/dgC1AUP/dwCSATX/UgCNAS//RgCKAQz/OQCpAfn+FACnAQD/FwCgASX/NAC5ASn/HgDWAR7/AQDNATT/GADIAVL/KgDpAU7/BgD3AU3//v/qAXD/GQACAnz/MwD8AZj/LADpAbn/FwDOAan/FQCtAbv/HQCNAan/+f+CAaz/7f+iAZv/BgCdAX//+/95AXn/1v+BAXn/3f+dAWD/7v+GAUb/2P9nAUj/EwCoAIQACACpAKgA8f+MALAA3f96AMkA7v9YAM8A4P84AN4A5v9BAAIB0/9hAP4A8f94APwA+P+UAOMAGgCQANQAMACaALYAMwCBAJoARQCBAHkAMwCKAFkALQBpAEcAOwBeACUAFwBXABoADAB7ACMAKgCKABIAIwB3APL//f98APH/AQCiAPP/HACjANj/CACNAMH/6P+hAMb/+v/BALr/CgCuAJ3/6P+gAJH/z/+7AJn/4//bAJr/zf/1AKr/q//nAKP/lP/yAMH/k//PAND/uP/RANf/sf/nAPX/m//QAAkAtv+1AAIA0v/LAA8Avv/TAC8AuP+uADYA2/+jAC4A6P++AEYA0/+zAGQA5f+7AIQAAgDLAHEAHADgAIEAKAAAAW8ARwDrAGYAMgDQAFcAHwDqAEMAPwD4ADQASwDVACwAKwDOABgALQDvAAUAUgDsAP7/UQDJAPD/PADWANP/VADYALX/QQDrAJr/KAAIAZz/QwAfAar/LwA9AaD/EwAyAbb/KwAoAdL/OQBLAdD/FwBcAdH/EABGAe//LwBSAQEAIwB2Afz/AABvAQoAEABfASgAJgB9AS8ABwCUAS0A9P9+AUcAEwB+AV0AFwCjAVwA8v+nAWMA9v+PAYEAEwCjAY8A/v/DAYsA4v+0AaAA+v+pAbsAGADAAcMALwBPAVsBJQBiATsBKgBNARsBOgBfAf4AIgBjAeEAKgBaAb0AMwB1AaMAJgBxAYAARgBgAXQARABIAZEAIgA8AYYAMAA4AWMATAAiAXEAZwA6AWMAdABGAYUAaAArAZwAdQAJAaQAYgDoAKUAZgDpAMoAVQALAc0AOgABAbQAMwDiAMoAMwD4AOkAFwAQAdwAAwD0AM0AAgDeAOwA///6AAYB4P/8ABsBz/8OAQ0B3/8IAesA6f8iAdIA4/8QAbIA//8dAZwA+v8AAYUA1f8IAX8A3P8tAX0A9/8oAWMA4f8QAU8Axv8rAU4A3/9DAT0A6/8pASUAx/8gARoAwP9FARUA3v9GAf3/1P8mAez/sP8zAeb/v/9RAdT/0/86Ab7/tf8kAbb/of9DAaz/vf9PAZX/w/8tAYX/n/8qAXz/oP8nAVb/fv81AU7/Z/9RAVn/Rf9FAWT/N/9cAUj/Rv9GAS3/NP8mATj/F/8gAR//BP8AARf/Dv/vAPf+8v7qAN7++f7FAOD+Bv/EAAT/8f6zAB//5f7JADv/9/62AFb/Gf+6AET/Ev/fAEH/Cf/jAGb/KP/QAG//Pv/pAFz/Kv8FAWv/MP/8AI//U//wAIr/W/8SAXz/SP8lAZf/Wf8SAbL/fP8aAaT/cv8/AaP/b/9AAcn/1v5QAYb/7v5TAWn/6v4tAWX/yP4uAVb/0v5MAUD/7v44AS//2/4YASn/1P4NAQb/sv4WAfb+nv73AP3+qP71ACL/pv4bASf/gf4bASD/ef78ADb/jf4LAVL/ff4uAVL/Xf4aAVL/ZP4JAXT/ZP4uAX//ef48AZv/hP4pAbr/jP4JAaj/pf7xALj/w/7mAKP/tP7CAKb/k/7OAJf/pv7gAHv/u/7BAHL/nv6pAHL/jP7BAFv/p/7DAED/sP6dAED/ff9mAH4Ad/9eAKIAhP87AKwAjf8nAMsAsP8pANsAwf8QAPMAtP8gABMBkv8ZAAQBiv89AP4Ae/9MAN4Alf9jAM4Amf94AK8AsP9rAJQAuv97AHIAqP9wAFMAwf9aAEAA0P9gAB0Aw/89ABQAn/9GAB0Aof9nAAsAr/9XAOz/lv85AOz/eP9QAOz/hf9oANH/jf9KALv/a/85AMD/Wv9ZALT/cf9dAJb/bP85AIz/R/8xAJX/OP9UAJT/Ff9PAKT/D/8rAJ7/+v4eALz/Fv8KAM3/Kf8rANP/Ev8yAPD/Gv8TAAYAP/8bAP7/PP8/AAoAKv8zACkARv8bADEAY/8zACkAVP9MAEAAUP81AF4AVf9JAH4AV/9qAGoAU/+MAHoAP/+mAGcAYv+1AF4Abf+UAE8ATf+RADsAUv+0ACwAdf+qACMAav+LABAAT/+fAP3/Zf+9APX/gv+oAOj/bP+eAMv/d/+yAKz/Xf+rAJL/N/+mAJT/Mv/JAKH/Df/IAJf/CP+qAK7/Hf+6AMn/CP/ZAMb/5/7GAMn/9v60AOf//f7VAPj/2P7fAPP/zP6+AAIA4/7EACAA1f7nACUAsf7aACQAuf7AAD8Ay/7ZAFUArf7xAFMAlv7UAFsArP7LAHkAqv7vAIYAhP7vAIIAgv7PAJgAmf7eALIADv/yAO4A8/7gANoA9v7dALQA5P7xAJoA3/7jAHYA//70AGkAEf/nAIgACv/DAH0AFf/KAFkANf/YAGcAMP/7AFkALv8NAXoAPv/1AJIAYv/uAJsAc//MAJsAdf/QAMEAT//VAMQASf+4AKwAX/+hAMEATv+qAOIALP+fANUANv9/AMUASf9yAOMAMf9/AP4AHf9mABQBBf9jAAYBE/9tAOQAAv+FAMwADf92AKsAEP+VAJUAJv+AAH0AC/9lAHkA7/6AAHYAAv+TAFsAC/9zAEoA5v5rAEcA3v6MADYA+/6IAB4A7/5lABUAzP5zAA8A2/6LAPb/8f5wAOX/0/5aAOH/wf52AM7/3/56ALf/4f5VALH/vf5TAKb/wf5yAI//4P5lAH//0P5DAHf/0f4+AFL/tf4lAEr/kf4dAFL/i/76/1//cP73/0P/i/73/yj/nf7Y/zX/lP67/x//p/6a/xr/uv6Y//n+sf57/+L+1P5s/+f+2v58/wn/3/5j/yb/xf5m/0L/3/5v/1z/7f6M/0j/yf6Z/0T/wf6W/2n/4f6o/3H/1v7F/1v/tP7E/2r/vv7H/47/2/7e/4f/wv72/3f/qP7x/5P/wv75/63/zP4aAJ3/qf4mAJj/oP4hAL3/w/4mAMv/uv4FAN3/u/7f/9r/mf7a/+v/hv7a/8r/ev62/8X/VP66/8n/OP6q/7X/Of7G/5r/Xv7B/5L/WP6b/5T/Pf6e/3n/U/62/2T/cf6f/2X/X/6B/1f/TP6W/z//a/6l/y//fv6E/yz/hP53/wn/bP5d//r+fv49/wP/hP5H/yj/Yv5Y/yv/T/43/yX/Zv4i/z3/Yv48/1j/PP4+/1b/Pf4Y/1j/Tv4Z/3r/L/4q/4f/Lv5E/6L/RP5G/8H/ZP48/6//hf5H/77/nv5a/6j/tf49/6z/m/4l/53/lP49/4H/uP5A/3j/v/4b/3n/of4W/2L/rf4u/0b/0v4k/0b/aP/G/3wAbf++/6EAkv+5/6kAqv+1/8UAvv/U/84A4P/T/+AAz//T/wIBwP+y//gAnf/C//cAg/+7/9sAeP/b/8wAZv/o/60Ae//2/5EAcf8GAHAAdP/w/1EAk//7/z4Alv8LABsArv/u/xMAlP/T/xwAeP/l/woAjf/p/+r/nP/G/+r/ef+3/+v/av/N/9D/iP/F/7n/hv+f/7//Yv+f/7P/av+1/5X/h/+e/4v/fP97/5T/V/9+/5X/S/9d/6X/aP9G/5//af8v/73/if8//83/df9f/9P/ZP9P//H/g/9H/wYAjf9r//7/bP95/woAbv9k/yoAkf9y/zEAif+X/ygAbP+W/0AAf/+I/14AcP+W/30AVP+m/2kANP+z/3kAE/+t/2YAFf/S/10AOP/N/04ALP+u/zsAD//D/ysAKP/e/yIAPf/F/w8AIP+2//3/EP/Y//X/MP/n/+b/Lv/P/8r/Iv/h/6v/Gv/G/5H/Dv+j/5X/7P6v/6L/3P6O/5j/9P58/6//8P6W/8r/yv6R/8f/zP5s/8r/4/5x/+n/yP6G//r/r/5q//X/x/5Q/wQAzf5n/yIAqP5r/ycAo/5F/ycAvv5A/0EAsP5c/1cAjv5M/1YAnf4q/18Ar/47/3sAjv5K/4gAfv4o/4YAmf4Z/5wAnf42/7MAe/5E/74AhP5l/88Acv5g//AAXP59//wAY/6M/x4Bev6o/ykBn/6n/yUBsv6a/0QByv60/1UB6/6x/0MB3/6c/yUB1f6m/wMBtv6f/+4Auf5//9sAwf6E/7UAp/5//5sAsf50/3gAsP6X/2sAxf6i/4kA4f6L/34A3v6Y/1oA4/67/2cAwf7G/1oAr/7N/3sAzf7R/5MA5P7u/5sACv/t/5oACP/x/8AA8/7S/8QACf+//6wAJ//I/8AAFP/A/98ADf+c/9MAMP+W/8UAQ/+i/+QAK/+U//4ANf95/xYBLv9g/wkBLf9v/+YAEv9q/80AJ/9r/60ADf98/5YAKf+G/34ANP9i/3oAEf9V/3cACP9u/1wAKP9m/0oAHv9C/0kA/f5L/zgADv9i/x8AJ/9H/xYAC/8u/xAA+/5G//j/Hf9N/+f/I/8o/+L/Av8k/9D/DP9B/7n/Lv8x/7L/Hv8Q/6j/Bf8i/5H/H/84/4D/Nf8a/3n/Nv8W/1P/QP/y/kz/Nv/P/lf/Uf+5/mP/R/+f/kn/Uv+3/i3/dv+4/jj/jP+h/iL/sf+i/hv/uv+x/vr+z/+b/uP+7f+y/ub+4//C/gf//P+7/iT/7/+m/kD/9P/C/lr/4P/b/kb/w//B/kT/xP+6/mn/w//f/nD/o//j/lz/lf/E/mz/mf/Q/o//kf/1/oj/cP/p/nr/af/Q/pb/b//r/q//Vv8E/5//PP/p/pv/O//g/sD/SP8B/83/YP/s/t//gv/b/t3/d/+7/u//b/+o/s//if+M/sv/c/9t/tH/df9M/r7/Xf9Z/qP/cv93/pn/kf9h/pz/g/9J/oL/d/9m/mz/mP93/mz/qv9Y/l3/jP9R/kf/jf9z/jb/s/90/jD/wP9z/g3/yv9R/v7+7/9S/gX/6/9c/ir/zf9G/jD/4f8n/in//v8y/j7/5/87/lv/0/8a/ln/9v8K/lz///8a/n3/4f8G/or/yP8S/qX/0v8o/sP/6v8//rD/8P9h/r//6f9//qj/DwCH/qv/FwBk/p3//v9o/oH/DACK/nb/MAB//nf/JgBi/mH/FQB2/kb/LwCS/kT/","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI"},"red":{"n":90,"xyz":"3f/BAMP/6ABd//EAEv8AAUT/uf+G/s0AWQDV/pn/Vv/S/+X/NAEO/xH/CQAfAfoAvP/I/lX//P+R/9AAiP40/4v/iwBKAEUA7P+Z/h4AfAAL/8X/if+uACMAw/9NABYA4//p/rD/FAGwAAMAKwHH/oP/iv6T/yIB+v5PAMX/CAAS//wAFf+N//kA6gDh//L/YQDBAAAA4f9M/1YATP9J/6T/2/+H/hr/mP7/AGX/p//h/ngAtABjALn/nP+8/iABrP6B/8gAaQB4/yIAowCSAbj/Yf9vAK3/OgFO/00A4f6l/4j/kQC9/8D/Hv9n/3QAvP9aAWj/5/7K/2sArQFZAJn/TgFh/53/gv9j/pD/VQELAH//p/8vAdL/kgH5/nD/k/43/4kAJgDj/jQAGf/X/7oA3P8N/7gAmgHQAI7/q/6V/xr/Z/+f/1kAY/8xAF0A6f+LAK8A5/6rABAA4/7fAIAAQAAKAY0ARwB7ASL/+gBqAOoAXwGQADX/PAGYAIoA2wBH/5v/Gf9C/wAAEwDZAXD/3v9n/+H/V/6w/4P//f9KAVAANf+aAL4AwwAWAYz/9v9G/oH/vwDg/lf/rf/9/+kAmACn/5AAGgBiAdb/0QAx/4cArf4AALD/v/5RAGv/9P9s/oYAJQFc/zH/xP6H/28AwP5i/woAZAAhAN8ASAArAX7/DACaAZQAaP/g/rP/YP49/zH/S//N/kr/","kind":"AAQAAAAIAAAIAAQIAAAEBAAIAAgEAAgEAAAICAAACAAIBAgEBAQECAAIBAAIBAAACAAIAAQECAQABAQACAgECAQICAAEAAQICAAIBAAEBAQAAAgICAgACAQI","rad":"KCkyHSIrJCggJSgwICgoJiMuIx8lHCQqKygnKS8jKSIcLCYnLyglICQgJCYkKicjICQfJCwnJygqKywrKywrMSciJSwlJy0qKiIpJyQqJSAiIx0iKiYkJiIf"}},"capent":{"pdb":"3P05","full":{"n":1033,"xyz":"9P+ZAJ4A5/+aAMEADwCRAM8AGQB4ALUALQCBAJYAGgB8AHUAGgBYAG0AKQBIAE4ACgA1AEQA9v9WAEYAEABpADEAEwBOABcA7v9KABMA6f9wABEABABzAPb/9v9WAOL/0/9jAOP/2/+HANj/8P95ALv/1/9gAK7/t/90ALP/xf+XAKr/qv+uALn/i/+aALX/c/+lAND/eP+GAOb/m/+TAO7/jP+qAAcAe/+SACAAmv99ABsAsP+aACYAmv+fAEUAm/97AE8AwP95AEoAxv+YAF8As/+SAIAAxP+kAJwA3/+yAIUA9v/OAJAA/v/qAHgAIADZAHMAEAC4AGkA+v/LAFEAGADbAEEAKQC5ADwACQCtACsACQDLABQALwDKAA0AMACmAAMAFwCpAOf/KQClAMb/HQC2AKf////MAKb/FQDqAK///P8CAZ//4//1ALn/+//1ANb/AwAZAc3/3/8kAc3/2v8SAe7/9v8mAfz/5v9GAfH/xf88AQEA2P80ASEA6P9XAR8Axv9oARoAtv9WATgA1P9dAU8A0v+CAUcArf+BAU0As/9wAW8Ay/+LAXkAsf+mAXEAmP+VAYkAsP+NAaUAzv+lAagA5P+fAcYA0f+oAeYA6f/AAfYA+v+7ARgBDACeASkBCQB4ASgBAgBnAUoBFQBHAVQBBwAmAUgB+P87AS0BCgBDAQwBCABcAfAA6/9fAdgA8P9PAbYA8f9mAZcA5/9bAXQACQBOAWsACwA7AY0A7P8oAYIA+/8gAWAAGQAUAXMAMwAqAWIAPABBAYAANAAoAZwARgALAasAOQDoALAAOwDuANUAJQANAdMADAD7ALwACQDfANUABgD5APAA6P8KAeAA1v/qANUA2f/aAPgA1P/5AA0Bs//7ACEBnv8JARIBsP/+APEAuf8VAdQAtf/8ALcAzv8JAZ4Azv/nAI0Aqf/qAIcAq/8OAXwAyP8IAWMAtP/pAFcAlf//AE4ArP8WAToAuv/5ACgAmP/qACEAjf8MARQAqv8LAfv/pP/nAPH/f//wAOn/iv8LAdH/o//0AL//if/YAL3/cf/wAKz/jP/8AJT/mP/aAIr/c//SAIL/Zv/yAHL/Sf/kAFv/J//vAGf/Df/WAHH/+f7nAFT/Ef/cADr/EP+4AEX/+/6mACv/+/6BACL/EP95AAP//P5pAOb+Dv9IAOv+F/9MABD/Cv8yACj/8f5BAEH/B/83AF7/Jf9JAFH/Ef9oAEz/Av9lAG//Jf9jAH3/MP+DAGz/EP+UAHj/Ff+MAJz/Ov+RAJz/NP+0AI3/Gv+8AKj/Mv+xAMP/Tv/GALb/OP/mALn/Mf/eAN7/DP/hANb/9f7lAPX/3v7GAPr/wf7cAO7/0/7lAM7/3f7BAMj/uf62AM3/rf7SALX/x/7HAJv/vf6jAJ7/mP6rAJr/nf7CAH3/vf6+AGr/xP6XAGn/qP6KAFP/qf6rAED/zf6nADT/y/6CACv/z/54AAf/rv50APP+rP5OAPb+sv5OABz/nf5uACD/gP5cABD/g/48ACX/hv5TAET/Zv5nAD3/Uv5GADr/Xf48AF3/SP5YAGv/T/5tAIr/Xf5fAKv/dv5JAJj/lf5BAK3/uP5FAJ7/uv4fAKD/m/4bAIv/pv41AHL/yf4lAG7/uf4CAGr/of4PAE//vv4eADr/2P4CADv/Zv8mAJ8AXv8bAMEAcv8GANYAdP/9//sAkv8LAA8Bqf/2/yUBkf///0IBdP/v/y4BYv8PACUBVf8ZAAIBav81APIAdP8/ANAAkP8/ALcAjP9VAJgAjf9BAHcAsf82AHEAxf8/AFIAzf8bAEsAqf8RAEsAn/8vADQAuv8qABsAtP8FABgAjv8LABQAlf8mAPn/rf8QAOb/lf/y/+f/d/8FANr/jP8UAL7/m//0/7L/fv/c/7b/Yv/0/6z/Q//i/7n/Tf++/7j/Ov+q/9L/WP+n/+n/V//M//D/O//F/wkATP+u/yIAav/F/x4AVP/j/ygASP/P/0YAav/F/1IAeP/p/04AWv/4/2EAW//l/4IATf/8/50ASP8ZAIYANP84AI8AHf9HAHUAN/9iAHEAUv9IAGkAOv83AFAANP9ZAD8AWv9fADwAXP89ACsAQP9FABIATf9pAAwAcP9eAAMAZ/9HAOf/cf9XAMb/Xf9TAKb/P/88AKX/Kv9aAK3/C/9KAJ3/Dv8tALb/Fv9FANP/9/5YAMr/4f44AMn/8P4uAOr/5f5PAPj/wv5JAOv/wP4nAPz/zP43ABwAsf5RABkAlv42ABQAov4iADMApP5BAEkAgP5KAD8Adv4mAEYAh/4oAGkAc/5HAHIAUv43AGkAWv4aAIEAaf4vAJ4AW/5SAJ4Ax/55AAQBsP58AOYApP5gAM8Atv5eAK0Aof5lAI4Aqv5UAGwAwv5wAGIA0/5vAIQA3P5LAHwA6f5TAFoA/v5tAGwA8f6LAFgA3f6dAHQA8f6QAJIAE/+ZAKIAMP+CAKkAKP+IAM4ABP99AMsADv9eALYAJ/9UANEADf9YAOwA9f5AANwAEP8mANMAH/8kAPYA//4oAAkB9P4JAB8B4v75/w8B8v4GAO8A3/4UANEA9/4JALUA8P4kAJsAEP8ZAIsAAv/2/4UA4f4DAHkA8f4bAGAACP///1YA6v7p/0sA2/4FADYA/f4KACUAAP/k/x8A3v7j/xEA6P7///j/CP/u/+//9f7O/+f/4P7g/87//v7w/77/Ef/P/7z/8/7A/6v/8P7c/5L/Ff/e/4r/G/+5/4P/JP+1/13/E/+U/2D/7v6I/2b/2f5q/2//yf5n/0z/6/5h/zz///5F/0z/Cv8q/zT/LP8d/yr/Ov8q/wn/Qf8P/+/+Zv8W//H+Zv8j/xb/ff8S/y//Z/8B/0r/ef8V/2X/cf83/1X/TP8t/1P/TP8i/3f/W/9D/4H/P/9X/2//Jf9A/33/L/9F/6H/N/9q/5z/FP9v/4//BP9c/6z/F/9x/8X/Dv+S/7T/6f6I/6//6f6C/9X/2f5g/9D/yv5R//D/3f4y//3/wP4d//D/wv4s/83/6P4o/83/5f4D/9f/y/7+/rz/4f4O/6L///75/qz/6/7Y/qv/2v7g/or/6P77/nX/C//4/nj/Cv/Y/mT/6v7h/lH/+v4A/0L/HP/x/jn/Jf/u/hT/Hf/M/gX/Qf+9/gf/RP/G/iz/IP++/jP/Jf+b/ib/Rf+W/jv/Mv+j/ln/Ff+L/lb/Lf9u/lT/PP94/nb/Gf9v/oP/C/+B/qH/Hv+L/sD/Ov+a/qv/Tv+1/r3/Vf/V/qr/ev/K/qz/cv+p/pr/Xf+8/oD/eP/V/nj/kv+6/nb/fP+m/l7/eP/E/kb/m//T/kT/s/96/6EAvv9x/8MA4/99/8MA+/+E/+EA//+p/+sAIAC6//MAGwCv/xcBGgCK/wwB9P+G/xIB2/93//kAwv+Q/+sAo/+R/9IAqf+r/7cAkv+t/5kApP+m/3kAuf/F/3AAtf/a/1AA2v/W/0gA1/+w/0kAt/+x/zMAxf/I/xkA5f+1/xYA0f+U/xMAuv+h//n/1v+w/+T/6/+Q/+b/zv96/9v/xv+R/77/6f+U/7D/9v9x/7X/1/9e/63/3v88/7z/AwA6/7f/EQAi/9P/HwA+/+j/+/9J//D/+/8t/woAFwA4/yIACgBb/x0A5/9Q/ygA9/8//0cACwBd/1AA7v90/0wA1/9e/2EA6/9Z/4IA0v9V/54AtP9Z/4gAkf9Q/5QAev8//3wAaf9g/3gAif9x/20Aj/9U/1UAbf9Z/0UAdP9+/0EAlP91/y4Agf9d/xgAZP9z/xEAev+R/wcAi/9//+r/f/+O/8n/e/94/6r/h/9U/6r/ZP9J/7P/af8m/6T/hv8h/73/c/8y/9n/WP8Z/9L/b//7/tL/fv8H//P/W/8J/wEAVf/k/vb/dv/Z/gYAa//r/iYASv/Z/iUAW/+3/iAAcv+8/j4AVv/J/lUAQv+q/k4AYf+V/lQAZv+m/nUAQv+e/n8ASP95/ngAZv95/o8AWP+O/qsAMv+M/q4APv///hMBL//q/vYAQ//W/t0AR//m/rsAN//V/p0ARv/Y/nkAMv/3/nEAPf8H/5MAYf8D/4cAWv8S/2UASv8v/3gAJ/8t/2kAE/8h/4gAKf8v/6IALv9R/7MAT/9l/7YAS/9f/9wASP86/9kAZv86/8EAe/9N/9oAbv83//UAev8X/+QAnP8m/9kApf80//wAl/8Y/xABsP8D/yQBt//r/hQBr//+/vQAmv/y/tgAq/8D/7sAjv8J/6MAov8k/5EAvv8M/4oAp//w/oAAlP8G/2gAtv8S/1sAwf/v/lIAoP/q/j4Apv8K/ysAy/8B/yQAv//g/hcAqP/x/v//w/8K//X/2//t/uz/wf/e/tX/u////sT/4f8G/8D/5f/k/rD/yP/q/pj/0v8N/47/9f8C/4T/7v/j/nL/DQDe/lv/IQDA/mX/RQDD/nD/TACr/lL/PwDF/jn/VgDg/kX/cgDi/iz/igD+/iT/gAAR/wX/mgAT/+n+oQA3/+/+lgA5/xP/sABF/yz/uQAp/0X/rgA+/2P/iwBD/1X/iAAe/0//lQAW/3P/ewAu/4D/XgAc/27/bAD6/nn/bAAD/57/TAAW/53/OwD4/o3/SgDh/qf/PgD3/sP/GwD5/rX/GADT/rX/IgDR/tr/PQC5/tL/TACm/vD/cACv/vf/egCN/un/ZwCT/sn/dgC2/sb/mQCo/sr/kgCM/rD/hQCm/pf/owC8/pz/uwCf/pj/qQCR/nr/kgCp/mj/pQDK/mv/wwDC/lX/rwCp/kD/lgDD/jX/rgDf/i7/sgDq/gn/zwDZ/vb+6AD1/vr+5AD4/h//3wDS/iP/AgHO/hT/EgHn/ir/AgHX/kj/DgG0/kD/MQHC/j//LgHP/mL/JwGr/m7/EgGf/ov/EAGx/q3/DQHS/pz//ADs/rP/4AAB/6T/9wAf/6f/EgEO/5L/+AAE/3j/6gAn/3X/DAE2/3P/FQEe/1f/9wAn/0L/9gBN/0X/ZQCI/58AcQCO/8MAcACz/84AcwDD//EAVADR/wEBcwCy/x8BdgCb/wABVQCR//AASgB+/9AANQCO/7YAKgB7/5cANgCK/3cAIQCp/3AADQCt/08AHADP/0gAPwC//0kANACh/zMAIwC2/xgAPwDP/xYAWACy/xMARQCg//j/QADA/+X/ZQDK/+f/cgCo/9v/WgCm/73/YADK/7H/hgDM/7f/jgCo/6z/sACk/7z/vgDG/7j/2QDK/9T/wwDg/+r/rQDC//H/xwC3/wsAxwDU/yMAoQDV/x8AoACw/ykAtAC4/0gAnwDV/1IAfwDB/00AjACk/2IAmACz/4MAkwCa/54AhQB//4cAgwBb/5EAiwBA/3gAZgA7/3QAYQBg/2sAfgBd/1IAbwA//0EATgBR/z0AYQBt/ywAcgBU/xUAUwBA/w0APQBe/wQAVABp/+j/QwBk/8b/VwBd/6f/fABb/6j/ewA2/7D/nQAv/6D/qwBJ/7r/lgA7/9f/owAZ/87/yAAk/87/wgA2/+//tQAV//z/1QAE//H/6gAf/wIA1gAa/yIA3AD0/h8AAgH4/hsABAEQ/zoA7wD5/lAABgHb/kgAJAHy/k8AFQH7/nAAEAHX/noANQHQ/nIAQAHr/ooAJgHl/qYAHAHA/qcAsQDp/goBwADX/uwA2wDl/tQAzgDw/rIA2ADd/pMA3QDu/nEAuQDn/mgArAD0/okAuwAW/4EAqwAW/14AiwAQ/3EAgQDv/l8AhgDW/nsAfwDu/pgAYAD8/qkAWAAh/64AWwAZ/9QAfgAL/9EAiAAo/7sAfABA/9UAjQAr//EArwAt/98ArABS/9cAowBd//sAuQBE/w0B1gBT/yIB7gBT/xEB2QBU//IA3QA+/9MA0gBY/7kAxABA/58AsQBc/44A0gBw/4kA5ABR/34AyQBH/2UAyQBr/1oA7gBr/1AA6QBK/zwAzQBa/ykA4QB6/yMA/QBl/xYA5QBV//3/1gB3//T/+QCF/+z//wBo/9T/3gBu/8L/4wCU/7//BQGN/6//9gB0/5f/2ACK/43/8gCl/4f/EAGS/3j/IAGs/2H/QgG2/27/SgHa/3f/ZQHX/1z/SwHS/0H/NwHx/0v/OwEJAC//JgEnACb/EAEgAAf/FwE4AOr+9QBIAO7+8ABBABT/7ABfACv/CQFiAEP/8gBfAGH/5AA+AFb/BwEwAFH/EgE8AHP/8wArAIL//QAJAHL/IQEPAH3/GQETAKL//QD6/6L/FgHg/5T/MAHp/6//FgHl/8r/CwHD/73/LgG4/8D/LQHG/+P/TAHa/9z/XQHo//z/XQEOAP3/ggEOAPT/fAH4/9X/XwEPAMv/dQEuAM7/kQEdALr/eAETAJ//agE2AJ3/jAFGAJv/mAEtAIH/fQEcAG3/YAE2AGz/bwFQAFT/ggE1AEL/YgEjADf/TgFCAC7/RAFHAAn/XQFcAPX+SQF9APf+RQF7ABz/ZwFsACL/dQGLABD/YQGkACT/bAGRAET/kQGTADz/jwG5ADj/gAG8AFz/oQGxAGn/qAGcAIn/lgGhAKr/dAGkAJj/VwGaAK7/PAGCAKH/JAGgAKL/OwG1AIv/QAGXAHT/GwGRAHH/EwG1AGv/LQG4AFD/HgGbAD3/+QCiAD7/kgBBAKEAjwBPAMMAlAAmANMAfwAUALkAkAAEAJwAhQASAHoAYgAFAHMAWQDx/1QAPAAIAEwAVQAlAEsAbgATADYAVgAGABwARgAoABcAaAA4ABQAdAAeAPv/VAAhAOf/VQBHAOb/eQBJANv/cwAwAMD/VABAALD/XQBlALT/ggBiAKv/kACDALj/cgCaALX/dAC3AM7/WQCoAOX/cACLAO7/ggCiAAYAZQCrAB4AWwCHABsAfgB8ACYAewCUAEQAWQCIAE8AZABkAEwAgwBpAGAAdwB7AIAAjQBxAJ0ApABcAIcAxgBQAJMA4wBQAHoA3gAqAHcAuQAuAG0AxABJAFQA3QAxAEQAwgAVAEIArQAuAC4AygA3ABcA1QATABIAsgAHAAgArQAfAOv/rwAKAMv/vQAZAKv/yQA8AKn/7AAyALP/+wBQAKL/5gBmALr/7QBPANj/EgFTAND/EQF5AM3//QB5AO7/GQFmAP7/MwGAAPH/HwGcAAEAHQGJACEAQwGFAB8ASAGqABkAMgG0ADYAQgGbAE4AZQGpAEYAVwHMAEsASQHCAG0AawG0AHgAfAHVAG8AZAHoAIUAYwHPAKMAhAG8AKYAVAFuAO8ATgGKANYAQAF/ALQAVgGEAJUARwGKAHIARgFlAGoANQFeAIwAGQF0AIIAFQFjAGAAEwFDAHQAMAEyAGMASQExAIEAMAExAJ0AGgEYAK4A9AAZALMA+wAcANgAEwE6ANUA+QBLAL4A3wBGANgA+ABTAPIA/gB0AN8A2gB6ANYAzAB1APoA6QCGAAwB4QCmAB4B5wC9AA0B4QCnAO4A+ACkANAA3QCeALYA8QCIAJ4A0AB9AI4AxwChAIUA6gCqAHoA7QCMAGMAygCVAFYA1QC4AEsA8gCqADgA2wCRACcAwgCtAB8A3wDBABEA5wClAPn/wwCeAPD/vwDDAOb/3QDBAM//zwChAL7/rACwALv/vADOAKn/0AC4AJH/tACgAIn/nQC+AID/tgDTAG3/nwDpAFb/oQAOAV//ggAhAWn/iwA2AUr/hgAaATL/YwATAT//SwAiASb/JgAaAR//IgAEAQH/DAATAeb+8f/5AOz++v/yABH/3v/4ACv/6P8UAUL/5f/9AGH//v/kAFP/FwAAAUz/EgAOAW//GQDrAH3/OgDpAGr/QwAMAXT/PwAHAZn/TQDkAJn/bADyAIj/bwAOAaL/bAD1AL7/hwDfAK//oAD8AK3/mwAGAdL/lQAqAcf/lwBEAeP/dQBTAez/gQBzAdv/igBhAbv/aABOAbz/VgBvAcD/agB/AaP/YgBhAY3/PgBiAZX/PACIAY7/TwCFAW7/UgBkAV7/MQBVAWX/HQBtAVD/PAB1ATv/QABRAS//HABJASn/EQBCAQX/BABhAfL+3v9aAff+4v9UARz/+/9wASD/4v+IARD/xv99ASf/3v+AAUX/6P+kAT3/w/+uATv/v/+iAV//1/+8AWz/7v+7AYv/5P+rAaz/1f+NAZv/1f9uAbD/4f9NAaL/vP9BAaX/sP9fAZD/y/9ZAXb/xP80AXL/n/86AW//pf9UAVT/uf88AT//pP8cAUL/","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEA=="},"red":{"n":75,"xyz":"pADU/+L/hP49AF4AKwFBADH/KwAUAaAACf9lAAH/Y/5SAFD/yQBl/zMAz//6AOYApP+a/yUAzv+SAbgAtP63AJX/dQEUAL//dQBYAMX/Cv++ADj/jv/3/hMAsP54AB7/YQBzAG4As/9TAEAAOf8XAGYADgBP/yoA1v81AQAAWAGhAGf/7/+yAIwAFAA0/7r/2f9eAWUAUf9IANz/ZgDf/mH/lgDsAJD/7/4zAOQAcP/X/9L/hgDI/5kA7P5F/7j/ef8TAPwAGf+3/l//GQHH/5P/oP4vAIj/tf+GAM//qf/+AEsAsv9M/8gAu/9IAXj/yQBdAGYAPwCo/zYA8gCIAOz/IwFPAKEAuQBN/9UAtgAV/yP/VP8e/60ASf8s/07/Uf+m/ngAAP/TANT/CgHg/mn/BABjAR7/JQHg/oAAWAGyAGQAdgCr/r//+f42AET/5v4KAP7/7wD//jQA9/51AI0AYQBmAaX/MACnAA4ABgBkASoBHP94AJH/SgAgADUAuwAz/8f/mAAC/58A2f+kAWv/5gCHAOwAHf/kAGL/Cv+2/4r/lv/X/pH/FQAEATX/gv/pALH/EgDtAKr/NgCe/+8A","kind":"DAQMAAAADAAIAAAMEAAIABAABAgADAAIAAQIEAQEDAQEBAwAAAAIEBAMEBAMCAgECAAIEAwQCAAEDAQQAAAAEAwMEBAABAQQAAAM","rad":"LCcuIxwfKCUwIiAmJBcsIyQqLCUiLCcpJCMpKygpJSslLSwjJiItIyknLCkoKi4sJSMpJB8nJx8pICgmJyIjJScsICQaIikoJCMn"}},"rt":{"pdb":"1RTD","full":{"n":1012,"xyz":"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","kind":"CgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA=="},"red":{"n":85,"xyz":"BQEUABMAbv9EAJX/fAC6/roAbgCdAB4AP//I/xoALQCH/vX/UQGr/iAAqv91Abf/GgD4APL/5wBx/k7/cQBtAK8AqwACAf/+1v+U/yv/af+kADn/zQAlAZz/uv/N/p8AlAD6/43/tABZ/vv/qP+wACsAz/+b/9kAdwHX/u7//v/a/hcBzwBv/q7/gQBtASkA3v88ANwAlgD9/jD/bP8qAWr/KABNAYz/awAb/2n/NwAB/5MA8/82/83/Z/8V/8n/AgHq/mX/FwDLAaf/W/8f/1f/IQCBAHMASACv/qL/4P9OAOr/hABc/8wAfgCi/iMAPwCIAXkAYv/HAWL/PgB3/zwAUAEAAGwA4v8EAHwATgA9/yEBSAACAXIAxQAc/8T/yP+uAWH/qQDo//gA6/9VAVEAfv/LAd//iP7A/yv/KAGC/rD/CQHl/mIAnACHAaz/s/+X/6j/cADx/vX/XwAhAIoA5AC+/o3/mQAJAS4A4P90/1EALAHy/sH/+P9MAef/lQCr/oT/bv9U/z8ABwDV/jgAWwDKAfX/Gv8XADf/LACyACb/0f+/AK0AWv4DAKP/9gBIAKcA8/+5ATAAR/9/ACIAIgCVAPgAIQDK/wsB4ADA/5wARwBz/l8Au/5FAIn/fQF7/rL/R/+a/yv/xf6F/5X/EACE/sEABwFu/hwA","kind":"AAQAAAQAAAQAAAAKBAQAAAoAAAAAAAAAAAAEAAAABAQAAAQAAAQAAAAEAAAAAAAABAAABAQAAAAEAAAAAAQAAAAEAAAECgAEAAAEAAAAAAQABAQAAA==","rad":"Jy4kIywdHSMlHCAdJi0rIx0gJicaKR0jJRoxICIkKycaJCwgHyonICAkICkoJCQnIykgJCgcJSkrIiMdICkdIholIiUpHSMlKSQuICknIC4gKi8iHQ=="}},"int":{"pdb":"1EX4","full":{"n":416,"xyz":"4/+bAP3/BACJAPb/8/9nAP3/3v9rAN7/9f96AMT//f9nAKT/EQBxAIb/CABhAGX/IABgAEf/IwBOACX/RABDABj/TgAwAPj+ZAASAPb+cgD+/9n+UAD//8j+MgANANr+JgAgAPn+HwAXAB3/DAAnADr/IAAuAFr/DgA5AHr/JABEAJf/GgBLALv/MABpAMH/MwBkAOb/QABAAOb/TgA7AMP/NQAeAL7/MwAbAJj/GQAJAIT/HgAGAF7/CQD0/0T/DgDw/x//8f8DAA//7P/8/+r+6P8fAN3+8P9AAO7+y/9KAO/+tf9YAAr/oP85AAf/uf8hABb/xP88AC7/ov9CAD7/oP8cAEL/w/8WAFH/uv8zAGn/mf8iAHH/qv8DAH7/xv8WAJD/q/8nAKT/mP8IAK3/tv/3/7z/xv8VAMz/uP82ANr/vf9QAL//tv91AMf/zP+LALH/3P+FAI//+v+XAID/+/+RAFv/GACbAEP///+vAC3/AACZAA//4P+XAPn+3P90AAj/1f9+ACz/xf+fACL/qv+OAA7/hf+SABb/ev9vABz/l/9uADT/jP+KAEz/af97AEf/df9dAFv/h/9wAHf/Zv9/AIH/Vv9dAIP/cP9WAJ7/ff90ALH/nf9/AKH/qv+jAKD/w/+yAIj/3P/PAIv/8//mAHf/EwDcAGb/OADjAGz/igDIAIj/fwC5AKr/XACtAKH/YwCpAHz/egCKAHz/ZQB7AJj/UgBpAHz/awBrAF//iQBgAHP/cABDAHf/aQA+AFL/jgA2AEv/jwAkAG3/dAAOAGD/hgALAD//qAADAE7/lgDm/1//gADa/0H/oADW/y3/rwC9/0b/kQCm/0X/iQCq/yD/nACM/xX/iQB5/y//ZQCE/yb/UwB3/wf/QgCZ/wH/RgC9/wz/KwC+/yb/OgCg/zn/WwCz/zv/SgDT/0X/NgDE/2H/VQCw/2z/ZADT/3D/RgDh/4L/SgDE/5r/cADJ/53/bwDu/6T/UgDs/73/YgDP/9L/hQDe/87/jwDq//H/pwAGAPz/wgDy/w4AwwDT/yMAsgDW/0UAoAD4/0cAmQAKACYAdQAFABkAaQD+//b/UAAQAOH/NQD1/+X/OQD4/woAPAAeAA0AGwAgAPv/CAAKABIAFwAbADAAEAA+ACIA7P80ABgA5v8gADkA8/86AFIA2v9SAEEAvP87AEIAwv85AGgAzf9dAG4AuP92AFsAlf91AGsAp/95AIwAv/+UAIIAov+mAHMAkv+pAJUAsP+1AKcAt//QAI0Akv/bAI0Akf/gALMAs//vALYAq/8KAZwAl/8YAboAr/8uAc4Aqv80AfMAtf9NAQ4Btv9EATIBw/9QAVQBzv80AWsBuP8yAYoBxv9FAagB1/9eAZEByv93AXcB5P97AVwB1/9wAToB6f9UASkB4f9NAQUB2f9DAeoA2P8fAfMAyf8GAdsAqP/2AOMApP/RAOgAg//MAPkAZv/iAAMBTv/aAB8BM//tADIBSf/xAFEBbP/xAEQBg//xACYBov/cAB0BvP/uAAoB4P/oAP4A9P8HAQQBFwD+APsAJQDfAAsBCADfACQB5f/SACMB0f/nADsBrv/hAEgBoP8DAUwBfv8NAVwBZv8eAUQBZv8/AVgBjP9CAVMBjP88AS4Bgv9PAQ8Bf/86Ae8Ag/9OAc8Aaf9NAbQAfv9DAZYAEAAf/xgACQA4/zQAEQBc/ywA+/97/zIA/P+C/w0A4v9o/wUAzP9s/+b/sf9W/9X/sv9X/6//lP9L/5z/g/9M/3n/YP9Y/3b/S/9Z/1b/NP9y/0f/Lv+C/yT/PP9i/xT/XP9u/yX/cP9l/0T/e/99/2D/mv9z/3T/kv98/5j/q/+D/7T/oP+J/9j/tf+S//b/p/97/xEArv+N/zEApf+u/yAAhv+n/wsAlv+8//H/kv+x/83/ov+3/6v/k/+n/4v/mf+o/2b/iv+Z/0b/pP+A/zj/oP92/xP/rf9T/xP/p/9C/zT/yP8w/y3/5P8r/0b/9v9J/zj/2/9l/zz/1/9b/2D//f9c/2X/AAB//1b/5P+K/27/+/9//4r/GgCS/37/BwCz/4D/9v+s/6L/FgCe/7H/KQC9/6f/DwDU/7b/AwDC/9b/FwCq/+v/DACH/9//HgBs//L/BQBP/+3/5v9I/9j/yv8u/9b/vP8e/7f/nP8L/6z/r//w/pn/p/8B/3j/wP/4/lz/yv8c/1v/1P8Z/4D/5P/4/of/9v/5/mb/HAD//mb/FgAd/1D/DQAw/3D/KQAf/4X/QgAz/3D/NwBV/33/LgBJ/6D/UgA+/6L/XwBf/5X/SwBz/6//TwBb/8v/KgBT/8z/KQAx/93/DQAc/8//av9T/wAAdP9d/9z/U/9M/9T/Pv9l/+j/Uf+C/9j/TP91/7T/J/95/7f/LP+c/8b/Qf+k/6j/I/+f/5H/C/+v/6n/Hf/P/6D/Kv/J/3z/Bv/J/2//+f7n/4L/FP/8/3D/E//q/07///4IAEL/G/8hAEj/Of8SADX/Rv8EABT/Vf/h/xb/Tv/I/zL/cf/M/z7/af/w/0n/Sf/j/1r/X//K/2z/d//k/3n/Xf/9/4L/TP/h/5b/bP/b/6j/cv8AALD/T////77/Vf/h/9X/d//s/+L/bf8QAOz/TP8AAPj/Tv8GAB0APv/w/zgAI/8IAEQALf8iAF4AOP8YAIEAXv8XAH0AXf///18Adv8DAEMAdf/5/x4Aif/c/w8An//2////qP8BACIAqf/g/zUAwv/S/xsA2f/w/x8A1v/u/0UA3P/J/0YA+//L/zAACADq/0EACQDX/2EAGAC4/1EANQDO/0QAOQDa/2gAOAC3/3YAUwCr/14AZwDK/2YAaQDB/4sAcACc/4EAjwCk/2wAlwC9/4cAmQCg/6AAqgCG/4oAxACh/4EAzACl/6YAzAB//6sA6QB//5IAAAGK/68ACAFs/8QAEAFs/+kAJAFX/wEBHwFe/yYBIgFQ/0kBHwFa/24BOwFa/4cBYAFa/30BXAE1/4cBQAEt/28BQAEi/0oBOQE1/ysBGgEp/xkBDQEu//UADQE7/9oA7ABK/+YA2gBk/9EA2wCJ/9sAuQCZ/+IAwAC7//EA3gDP//0A2wDs/xYB3gD4/zoB/gDl/0AB7wDE/zgB6ACt/xsByACa/xYBzAB5/wQBtgBc//sAygA9/wMBsQAm//MAkAAo/wUBnQA//yABnwBl/x8BvgBs/zQBywCN/0AB8QCO/0UBCQGp/1EBHAG3/zMBPAGq/0IBLwGG/0QBKQGH/x4BOwGH//0AKwGQ/9wANgGH/7kAJwGO/5YAHQFt/4YA","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ="},"red":{"n":55,"xyz":"qf8rAdYAhv96AJf/zv9VAWQBSf8KAFMA8P99AOr/tv8/AAX/r/84/7n/tP8QAK//YP/mACYBPf+K/73/QAAXAOn/CgCo/6T/iACj/yz/FgBFAFD/tP8tAEj/bP9v/0b/AABZ/x8A7P8eAOf+YgDZ/6X/ov8SAHj/2f9Q/0H/pf+S//D/IwAOAH7/UwBb/6z/5P+TABf/RAC2/zf/hv+2/3r/Nf/3/0D/AwD4/yb/av9T/wAAE//E/4z/gf8tAUMBowDy/x0AYgAFAN3+HQBeALD/JAAo/23/j/+BACb/7v8nAEAAZ/9nAGL/vv8G/3X/+v+3AHP/EQBP/93/pf+nAIgAMgBP/47/cwCy/3cAcACQAIX/t//g/yUAV/9a/97/X//0/8H/hgAbAFn/3f/mABUBvv9hAMT//P/6/nH//QB3/w8BNQAlAAD/","kind":"AAAABAAABAAABAAEAAAABAQAAAAEBAAEAAAEBAAEBAAAAAAEAAAABAAEAAQEAAQEBAAAAAQEAA==","rad":"KB0jIBwaHRwfHCIjIh0cJh0XIBQiIhcaHSAfIxcQHR8gFx0aHCUXHCIfIxQnIiQXIiAkGhc7HA=="}}};
const _models = {};
const decodeModel = pdb.decodeModel;
function model(name, full = true) {
  const k = name + (full ? ':f' : ':r');
  if (_models[k]) return _models[k];
  const s = PDB[name]; return _models[k] = decodeModel((full && s.full) ? s.full : s.red);
}
function placeMol(S, name, pos, quat, colFn, full = true, scale = 1) {
  const m = model(name, full), v = V(), kScale = .01 * NM * scale;
  for (let i = 0; i < m.n; i++) {
    const kd = m.kind[i], grp = kd >> 2, part = kd & 3;
    v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2]).multiplyScalar(kScale).applyQuaternion(quat).add(pos);
    const r = m.rad ? (m.rad[i] * .25 * .18 * NM * scale) : (.84 * NM * scale);
    S.add(v, r, colFn(grp, part, i));
  }
}
const qOut = (n, twist = 0) => {
  const q = new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), n.clone().normalize());
  if (twist) q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), twist));
  return q;
};

const caps = new THREE.Group(); cell.add(caps);
const SITES = { env: [], membrane: [], ma: [], capsid: [], pentamer: [], rna: [], rt: [], int: [], cd4: [] };
const Y_VIR = 2.45, R_ENV = 5.05;

// Pleomorphic cryo-ET raft envelope shape: subtle organic undulation + mild equatorial fullness
function envWave(d) {
  return 1
    + .028 * Math.sin(d.x * 3.3 + d.y * 2.6 - .4) * Math.cos(d.z * 3.0 + .7)
    + .019 * Math.sin(d.y * 4.9 - d.z * 3.6 + 1.2)
    + .012 * Math.cos(d.x * 6.1 + d.z * 5.4 - .5);
}
function envR(dir, dep = 0) {
  const d = dir.clone().normalize();
  const base = R_ENV * (1 - .025 * d.y * d.y) * envWave(d);
  return Math.max(.5, base - dep);
}
function envPt(dir, dep = 0) {
  const d = dir.clone().normalize();
  return d.multiplyScalar(envR(d, dep)).add(V(0, Y_VIR, 0));
}
function makeEnvGeo(dep = 0, segU = 84, segV = 64) {
  const g = new THREE.SphereGeometry(1, segU, segV), p = g.attributes.position, v = V();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).normalize();
    const q = envPt(v, dep);
    p.setXYZ(i, q.x, q.y, q.z);
  }
  g.computeVertexNormals();
  return g;
}
function capStripFromOutline(key, axis, outlineFn, layers, n = 160) {
  const pos = [], colArr = [], nor = [], idx = [], c = new THREE.Color();
  const off = axis === 'x' ? V(-.003, 0, 0) : V(0, 0, -.003), nrm = axis === 'x' ? V(1, 0, 0) : V(0, 0, 1);
  let base = 0;
  layers.forEach(([d0, d1, hex]) => {
    c.set(hex);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      for (const d of [d0, d1]) {
        const p = outlineFn(axis, d, t).add(off);
        pos.push(p.x, p.y, p.z); colArr.push(c.r, c.g, c.b); nor.push(nrm.x, nrm.y, nrm.z);
      }
    }
    for (let i = 0; i < n; i++) { const a = base + i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    base += (n + 1) * 2;
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colArr, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return new THREE.Mesh(g, reg(key, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .4, metalness: .04, side: THREE.DoubleSide })));
}

// Fullerene cone profile for the HIV-1 CA capsid (y from -1.55 narrow tip to +5.75 wide dome)
const Y_C0 = -1.55, Y_C1 = 5.75;
function coneRadius(t) {
  if (t < .08) return .72 * Math.sqrt(Math.max(0, t / .08));
  if (t > .75) { const u = (t - .75) / .25; return 2.22 * Math.sqrt(Math.max(0, 1 - u * u)); }
  const s = (t - .08) / .67;
  return .72 + (2.22 - .72) * (s * (.88 + .12 * s));
}
function coneGeometry(inset = 0) {
  const pts = [], N = 72;
  for (let i = 0; i <= N; i++) {
    const t = i / N, y = Y_C0 + t * (Y_C1 - Y_C0);
    const yShift = t < .04 ? inset * .65 : t > .96 ? -inset * .65 : 0;
    pts.push(new THREE.Vector2(Math.max(.02, coneRadius(t) - inset), y + yShift));
  }
  return new THREE.LatheGeometry(pts, 64);
}

// Curved apical dome of a human CD4+ helper T-cell below the docking virion
const R_HOST = 23.0, Y_HOST_APEX = -3.40, R_PATCH = 10.6;
function hostSurfY(x, z) {
  const r2 = x * x + z * z;
  const dome = Y_HOST_APEX - (R_HOST - Math.sqrt(Math.max(1, R_HOST * R_HOST - r2)));
  const undul = .065 * Math.sin(x * .74 + .3) * Math.cos(z * .71 - .4) + .035 * Math.sin((x + z) * 1.3);
  return dome + undul;
}
function hostNormal(x, z) {
  const e = .08;
  return V(hostSurfY(x - e, z) - hostSurfY(x + e, z), 2 * e, hostSurfY(x, z - e) - hostSurfY(x, z + e)).normalize();
}

function buildEnvelopeAndMatrix() {
  // Cholesterol- & sphingomyelin-enriched host-derived lipid raft envelope + dark inner leaflet backing
  const envMat = shellMat('membrane', '#b5566b', '#f8a3b8', '#682334', {
    atten: 1.38, thickness: .50, sheen: '#ffd2df',
    extra: { clearcoat: .42, clearcoatRoughness: .26, envMapIntensity: .56, normalMap: bump(15, 15), normalScale: new THREE.Vector2(.30, .30) },
  });
  cell.add(shade(new THREE.Mesh(makeEnvGeo(0), envMat), true, true));
  cell.add(new THREE.Mesh(makeEnvGeo(.36, 64, 48), reg('membrane', phys({
    color: '#431823', roughness: .76, normalMap: bump(14, 14), normalScale: new THREE.Vector2(.2, .2), side: THREE.BackSide,
  }))));

  // Crisp multi-layer cross-section rims along x = 0 (z >= 0) and z = 0 (x >= 0)
  const envOutline = (axis, dep, t) => {
    const a = (t - .5) * Math.PI, ca = Math.cos(a), sa = Math.sin(a);
    const dir = axis === 'x' ? V(0, sa, ca) : V(ca, sa, 0);
    return envPt(dir, dep);
  };
  const ENV_LAYERS = [
    [0, .078, '#f5a080'],     // outer sphingolipid / phospholipid headgroups
    [.078, .185, '#ffe5a3'],  // outer cholesterol-stiffened acyl leaflet
    [.185, .292, '#f2cc80'],  // inner cholesterol-stiffened acyl leaflet
    [.292, .365, '#e6886c'],  // inner phosphatidylserine/PIP2 headgroups
  ];
  const MA_LAYER = [[.365, .54, '#66d4f7']]; // myristoylated p17 Matrix (MA) sub-membrane rim
  for (const ax of ['x', 'z']) {
    caps.add(capStripFromOutline('membrane', ax, envOutline, ENV_LAYERS, 180));
    caps.add(capStripFromOutline('ma', ax, envOutline, MA_LAYER, 180));
  }

  // Dense molecular phospholipids & abundant raft cholesterol along the cut faces
  const B_CUT_MEM = balls('membrane', caps, false);
  const cHeadOut = col('#f6a687'), cHeadIn = col('#e8896d'), cTail1 = col('#ffe7ab'), cTail2 = col('#f4cd7c'), cChol = col('#ffd24f');
  for (const ax of ['x', 'z']) {
    for (let row = 0; row < 5; row++) {
      const behind = .016 + row * .044;
      const steps = 190;
      for (let i = 0; i <= steps; i++) {
        const a = (i / steps - .5) * Math.PI + rr(-.005, .005);
        const ca = Math.cos(a), sa = Math.sin(a), r = Math.max(.08, ca * R_ENV);
        const backAng = Math.asin(Math.min(.95, behind / r));
        const dir = ax === 'x'
          ? V(-Math.sin(backAng) * ca, sa, Math.cos(backAng) * ca)
          : V(Math.cos(backAng) * ca, sa, -Math.sin(backAng) * ca);
        dir.normalize();
        const pO = envPt(dir, .026), pMidO = envPt(dir, .168), pMidI = envPt(dir, .206), pI = envPt(dir, .344);
        const tang = across(randDir(), dir).multiplyScalar(.018);
        B_CUT_MEM.add(pO, .78 * NM, cHeadOut);
        B_CUT_MEM.stick(pO.clone().add(tang), pMidO.clone().add(tang), .085 * NM, cTail1, cTail2);
        B_CUT_MEM.stick(pO.clone().sub(tang), pMidO.clone().sub(tang), .085 * NM, cTail2, cTail1);
        B_CUT_MEM.add(pI, .74 * NM, cHeadIn);
        B_CUT_MEM.stick(pI.clone().add(tang), pMidI.clone().add(tang), .085 * NM, cTail2, cTail1);
        B_CUT_MEM.stick(pI.clone().sub(tang), pMidI.clone().sub(tang), .085 * NM, cTail1, cTail2);
        // HIV-1 envelope is ~45 mol% cholesterol (raft-derived)
        if (i % 3 === 1 && row < 4) B_CUT_MEM.add(envPt(dir, rr(.10, .27)), .64 * NM, cChol);
      }
    }
  }
  B_CUT_MEM.done();

  const B_MEM = balls('membrane', cell, true), B_MA = balls('ma', cell, true), B_ENV = balls('env', cell, true);
  const maCols = [col('#7fe0ff'), col('#48dbfb'), col('#a8eeff')], cMyr = col('#ffe39f');

  // Subtle surface GM3 ganglioside / raft glycolipid microdomains (360° GPU-clipped)
  const N_RAFT = 420;
  for (let i = 0; i < N_RAFT; i++) {
    const y = 1 - 2 * (i + .5) / N_RAFT, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = i * 2.3999632;
    const n = V(Math.cos(phi) * r, y, Math.sin(phi) * r);
    const pOut = envPt(n, .02);
    B_MEM.add(pOut, .56 * NM, cHeadOut);
    if (SITES.membrane.length < 65 && !(pOut.x > 0 && pOut.z > 0)) SITES.membrane.push(pOut);
  }

  // 136 trimeric myristoylated p17 Matrix (MA) units (PDB 1HIW) lining the inner envelope leaflet + N-myristoyl anchors
  const N_MA = 136;
  for (let k = 0; k < N_MA; k++) {
    const y = 1 - 2 * (k + .5) / N_MA, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = k * 2.3999632 + .2;
    const n = V(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize();
    const p = envPt(n, .58);
    placeMol(B_MA, 'ma', p, qOut(n, k * .9), g => maCols[g % 3], true, .96);
    const e1 = across(V(0, 1, .2), n), e2 = n.clone().cross(e1).normalize();
    for (let s = 0; s < 3; s++) {
      const a = k * .9 + s * 2.0944, off = e1.clone().multiplyScalar(Math.cos(a) * .08).addScaledVector(e2, Math.sin(a) * .08);
      B_MA.stick(envPt(n, .26).add(off), envPt(n, .50).add(off), .09 * NM, cMyr, maCols[s]);
    }
    if (!(p.x > 0 && p.z > 0)) SITES.ma.push(p);
  }

  // Authentic sparse cryo-ET distribution: 16 Env gp120/gp41 trimer spikes (PDB 4TVP),
  // each anchored via a coiled-coil gp41 MPER/TM stalk and cloaked in a dense N-linked oligomannose glycan shield
  const envCols = [col('#ff6b8b'), col('#ff8fa3'), col('#ffa8b8'), col('#ffd24f')];
  const gp41Cols = [col('#e84a72'), col('#ff7597'), col('#d63b62')];
  const glyCols = [col('#ffd9e8'), col('#ffc2dc'), col('#fff0f6')];
  const m4tvp = model('env', true);

  function addEnvTrimer(nSurf, tiltDir, twist, scale = 1.06) {
    const pTM = envPt(nSurf, .28);
    const pMPER = envPt(nSurf, -.03);
    const stalkLen = .38 * scale;
    const pHeadCenter = pMPER.clone().addScaledVector(tiltDir, stalkLen + .42 * scale);

    // Trimeric gp41 MPER + transmembrane coiled-coil stalk + cytoplasmic tail stub contacting MA
    const e1 = across(V(0, 1, .3), tiltDir), e2 = tiltDir.clone().cross(e1).normalize();
    const pCyto = envPt(nSurf, .54);
    for (let s = 0; s < 3; s++) {
      const a0 = twist + s * 2.0944;
      const off0 = e1.clone().multiplyScalar(Math.cos(a0) * .05).addScaledVector(e2, Math.sin(a0) * .05);
      B_ENV.stick(pCyto.clone().add(off0), pTM.clone().add(off0), .10 * NM, gp41Cols[s], gp41Cols[(s + 1) % 3]);
      let prev = pTM.clone().add(off0);
      for (let j = 1; j <= 5; j++) {
        const f = j / 5, a = a0 + f * .8;
        const base = f < .4 ? pTM.clone().lerp(pMPER, f / .4) : pMPER.clone().addScaledVector(tiltDir, (f - .4) / .6 * stalkLen);
        const cur = base.addScaledVector(e1, Math.cos(a) * .058).addScaledVector(e2, Math.sin(a) * .058);
        B_ENV.stick(prev, cur, .125 * NM, gp41Cols[s], gp41Cols[(s + 1) % 3]);
        B_ENV.add(cur, .70 * NM, gp41Cols[s]);
        prev = cur;
      }
    }

    // PDB 4TVP gp120/gp41 ectodomain trimer + dense oligomannose glycan shield (~85 glycans/trimer in vivo)
    const q = qOut(tiltDir, twist);
    placeMol(B_ENV, 'env', pHeadCenter, q, g => envCols[g % 4], true, scale);
    const v = V(), kScale = .01 * NM * scale;
    for (let i = 14; i < m4tvp.n; i += 22) {
      v.set(m4tvp.xyz[i * 3], m4tvp.xyz[i * 3 + 1], m4tvp.xyz[i * 3 + 2]).multiplyScalar(kScale);
      if (Math.hypot(v.x, v.y) < .24) continue;
      const outDir = V(v.x, v.y, v.z * .35).normalize().applyQuaternion(q);
      const gRoot = v.clone().applyQuaternion(q).add(pHeadCenter);
      const g1 = gRoot.clone().addScaledVector(outDir, .068);
      const g2 = g1.clone().addScaledVector(outDir, .058).add(randDir().multiplyScalar(.032));
      const g3 = g1.clone().addScaledVector(outDir, .042).add(randDir().multiplyScalar(.042));
      B_ENV.add(g1, .68 * NM, glyCols[i % 3]);
      B_ENV.add(g2, .56 * NM, glyCols[(i + 1) % 3]);
      B_ENV.add(g3, .50 * NM, glyCols[(i + 2) % 3]);
    }
    if (!(pHeadCenter.x > 0 && pHeadCenter.z > 0)) SITES.env.push(pHeadCenter);
    return pHeadCenter;
  }

  // 2 bottom Env trimers docked onto host CD4 + CCR5 co-receptor complexes at the T-cell fusion synapse
  const dockEnv = [
    [V(-.22, -.96, -.08).normalize(), V(-1.18, -2.55, -.38)],
    [V(.05, -.95, -.26).normalize(), V(.20, -2.55, -1.35)],
  ];
  dockEnv.forEach(([n, recTop], idx) => {
    const pMPER = envPt(n, -.03);
    addEnvTrimer(n, recTop.clone().sub(pMPER).normalize(), idx * 1.5 + .3, 1.07);
  });

  // 14 additional sparsely spaced Env trimers across the virion (total = 16 Env trimers)
  const envDirs = [];
  // Seed two prominent trimers near the left/upper cutaway silhouette so tour tags frame them cleanly
  [V(-.74, .64, .18).normalize(), V(-.24, .88, -.38).normalize(), V(.22, .72, -.65).normalize()].forEach(d => envDirs.push(d));
  for (let tries = 0; tries < 2000 && envDirs.length < 14; tries++) {
    const u = rr(-.82, .98), t = rr(0, Math.PI * 2), s = Math.sqrt(Math.max(0, 1 - u * u));
    const cand = V(s * Math.cos(t), u, s * Math.sin(t));
    if (cand.y < -.82) continue;
    if (envDirs.some(d => d.angleTo(cand) < .68)) continue;
    envDirs.push(cand);
  }
  envDirs.forEach((n, k) => {
    const swayAxis = across(randDir(), n);
    const tilt = n.clone().applyAxisAngle(swayAxis, rr(.05, .18)).normalize();
    addEnvTrimer(n, tilt, k * 1.37 + .4, 1.06);
  });

  B_MEM.done(); B_MA.done(); B_ENV.done();
}

function buildFullereneConeAndCore() {
  // Translucent fullerene cone CA backing shell + inner dark wall + crisp cutaway cross-section strip
  const coneMat = shellMat('capsid', '#3a7bd5', '#7fc4ff', '#1e4b8a', {
    atten: 1.3, thickness: .46, sheen: '#a8dcff',
    extra: { clearcoat: .45, envMapIntensity: .62, iridescence: .32, iridescenceIOR: 1.32 },
  });
  cell.add(shade(new THREE.Mesh(coneGeometry(.14), coneMat), true, true));
  cell.add(new THREE.Mesh(coneGeometry(.24), reg('capsid', phys({ color: '#17345c', roughness: .72, side: THREE.BackSide }))));

  const coneOutline = (axis, dep, t) => {
    const y = Y_C0 + t * (Y_C1 - Y_C0), r = Math.max(0, coneRadius(t) - dep);
    return axis === 'x' ? V(0, y, r) : V(r, y, 0);
  };
  const CONE_LAYERS = [
    [.03, .13, '#64b5f6'],  // outer CA N-terminal domain (NTD) β-hairpin / helix ring
    [.13, .23, '#3b7dd8'],  // inner CA C-terminal domain (CTD) dimerization belt
  ];
  for (const ax of ['x', 'z']) caps.add(capStripFromOutline('capsid', ax, coneOutline, CONE_LAYERS, 140));

  // Tile 100% of the fullerene cone surface around all 360 deg with PDB 3H4E CA hexamers and 12 PDB 3P05 CA pentamers
  const B_CA = balls('capsid', cell, true), B_PENT = balls('pentamer', cell, true);
  const caCols = [col('#5aa9e6'), col('#4895ef'), col('#72ddf7')];
  const pentCols = ['#c77dff', '#b565f5', '#d699ff', '#a34ee8', '#e0b3ff'].map(col);

  // Exactly 12 CA pentamers: 5 around the narrow bottom tip (t = 0.09) + 7 around the wide top dome shoulder (t = 0.80)
  const pentSites = [];
  for (let k = 0; k < 5; k++) {
    const a = k * 2 * Math.PI / 5 + .38, t = .09, y = Y_C0 + t * (Y_C1 - Y_C0), r = coneRadius(t);
    pentSites.push(V(r * Math.cos(a), y, r * Math.sin(a)));
  }
  for (let k = 0; k < 7; k++) {
    const a = k * 2 * Math.PI / 7 + .48, t = .80, y = Y_C0 + t * (Y_C1 - Y_C0), r = coneRadius(t);
    pentSites.push(V(r * Math.cos(a), y, r * Math.sin(a)));
  }
  pentSites.forEach((p, idx) => {
    const n = V(p.x, (p.y - Y_VIR) * .35, p.z).normalize();
    placeMol(B_PENT, 'capent', p, qOut(n, idx * .6), g => pentCols[g % 5], true, .94);
    if (!(p.x > 0 && p.z > 0)) SITES.pentamer.push(p);
  });

  // Tight honeycomb tiling of PDB 3H4E CA hexamers across the entire fullerene cone
  const RINGS = 17;
  for (let ring = 0; ring <= RINGS; ring++) {
    const t = .035 + (ring / RINGS) * .93;
    const y = Y_C0 + t * (Y_C1 - Y_C0), r = coneRadius(t);
    const count = Math.max(5, Math.round(2 * Math.PI * r / .62));
    for (let k = 0; k < count; k++) {
      const a = (k + (ring & 1) * .5) * (2 * Math.PI / count);
      const p = V(r * Math.cos(a), y, r * Math.sin(a));
      if (pentSites.some(q => q.distanceToSquared(p) < .39 * .39)) continue;
      const n = V(p.x, (p.y - Y_VIR) * .32, p.z).normalize();
      placeMol(B_CA, 'cahex', p, qOut(n, a), g => caCols[g % 3], true, .90);
      if (!(p.x > 0 && p.z > 0)) SITES.capsid.push(p);
    }
  }
  B_CA.done(); B_PENT.done();

  // Diploid 2 x 9.7 kb (+)ssRNA genome linked at the 5' Dimer Initiation Site (DIS) kissing loop,
  // coated densely with NCp7 zinc-knuckle chaperones + structured TAR/RRE RNA hairpins
  const B_RNA = balls('rna', cell, true), B_RT = balls('rt', cell, false), B_IN = balls('int', cell, false);
  const cNc = col('#ffe394'), cZn = col('#9be7ff');
  for (let strand = 0; strand < 2; strand++) {
    const pts = [];
    for (let i = 0; i <= 210; i++) {
      const t = i / 210, y = (Y_C0 + .42) + t * (Y_C1 - Y_C0 - 1.05);
      // Strands converge at top DIS kissing-loop dimer junction (t > 0.86)
      const kiss = t > .84 ? Math.max(.08, 1 - (t - .84) / .16 * .85) : 1;
      const r = coneRadius(t) * (.50 + .06 * Math.sin(t * 25 + strand)) * kiss;
      const a = t * Math.PI * 15 + strand * Math.PI;
      const p = V(r * Math.cos(a) - .10, y, r * Math.sin(a) - .10);
      pts.push(p);
      if (i % 4 === 0) {
        B_RNA.add(p, .86 * NM, cNc);
        if (i % 12 === 0) B_RNA.add(p.clone().add(V(.035, .02, -.02)), .46 * NM, cZn);
      }
    }
    rnaAlong(B_RNA, pts, MRNA);
    SITES.rna.push(pts[105]);
  }
  // Structured 5' TAR / RRE stem-loop hairpins inside the wide dome of the cone
  [
    [V(-.42, 4.55, -.38), V(-1, .3, -.4)],
    [V(-.58, 3.35, -.25), V(-.4, -.2, -1)],
    [V(-.28, 2.05, -.52), V(-.8, .4, -.5)],
  ].forEach(([p, dir]) => rna.rnaFold(B_RNA, p, dir.normalize(), 1.0, { nm: NM }));
  B_RNA.done();

  // Reverse Transcriptase (p66/p51 heterodimer, PDB 1RTD) & tetrameric Integrase (PDB 1EX4)
  const rtCols = [col('#4ecdc4'), col('#38b2a8'), col('#ffd24f')];
  const rtSpots = [V(-.46, 2.85, -.38), V(-.54, 1.15, -.34), V(-.36, 4.15, -.44), V(-.65, -4.85, -.42)];
  rtSpots.forEach((p, idx) => {
    placeMol(B_RT, 'rt', p, qOut(V(.3, 1, .2), idx * 1.4), g => rtCols[g % 3], true, 1.06);
    SITES.rt.push(p);
  });

  const inCols = [col('#ffd24f'), col('#ffae52')];
  const inSpots = [V(-.32, 1.95, -.48), V(-.40, 3.55, -.30), V(-1.65, -5.75, -.58)];
  inSpots.forEach((p, idx) => {
    placeMol(B_IN, 'int', p, qOut(V(.5, 1, -.3), idx * 1.7), g => inCols[g % 2], true, 1.16);
    SITES.int.push(p);
  });
  B_RT.done(); B_IN.done();
}

function buildHostTCellAndProvirus() {
  // Curved apical dome of a human CD4+ helper T-cell + immunological-synapse microvilli + host chromatin
  const makeHostDomeGeo = (dep = 0, segR = 64, segA = 96) => {
    const pos = [], nor = [], idx = [];
    for (let ir = 0; ir <= segR; ir++) {
      const r = (ir / segR) * R_PATCH;
      for (let ia = 0; ia <= segA; ia++) {
        const a = (ia / segA) * Math.PI * 2, x = r * Math.cos(a), z = r * Math.sin(a);
        const n = hostNormal(x, z), y = hostSurfY(x, z);
        pos.push(x - n.x * dep, y - n.y * dep, z - n.z * dep);
        nor.push(n.x, n.y, n.z);
      }
    }
    for (let ir = 0; ir < segR; ir++) {
      for (let ia = 0; ia < segA; ia++) {
        const a = ir * (segA + 1) + ia, b = a + segA + 1;
        idx.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setIndex(idx);
    return g;
  };

  const hostMat = shellMat('cd4', '#5c4bc4', '#a29bfe', '#2d206b', {
    atten: 1.7, thickness: .55, sheen: '#dcd6ff',
    extra: { roughness: .38, clearcoat: .18, clearcoatRoughness: .35, envMapIntensity: .34, normalMap: bump(18, 18), normalScale: new THREE.Vector2(.26, .26) },
  });
  cell.add(shade(new THREE.Mesh(makeHostDomeGeo(0), hostMat), false, true));
  cell.add(new THREE.Mesh(makeHostDomeGeo(.42, 48, 72), reg('cd4', phys({
    color: '#251b54', roughness: .82, envMapIntensity: .24, side: THREE.BackSide,
  }))));

  // Multi-layer cutaway rim for the sliced CD4+ T-cell plasma membrane
  const hostOutline = (axis, dep, t) => {
    const r = t * R_PATCH, x = axis === 'x' ? 0 : r, z = axis === 'x' ? r : 0;
    const n = hostNormal(x, z);
    return V(x - n.x * dep, hostSurfY(x, z) - n.y * dep, z - n.z * dep);
  };
  const HOST_LAYERS = [
    [0, .085, '#b6aeff'],
    [.085, .21, '#ebe7ff'],
    [.21, .335, '#d5ceff'],
    [.335, .42, '#8b7ef0'],
  ];
  for (const ax of ['x', 'z']) caps.add(capStripFromOutline('cd4', ax, hostOutline, HOST_LAYERS, 130));

  // Cut-edge molecular phospholipids along the sliced T-cell membrane
  const B_CUT_HOST = balls('cd4', caps, false);
  const cHH = col('#b5adff'), cHT1 = col('#eeebff'), cHT2 = col('#d1caff'), cHChol = col('#ffd56b');
  for (const ax of ['x', 'z']) {
    for (let row = 0; row < 4; row++) {
      const behind = .02 + row * .048;
      for (let i = 1; i <= 135; i++) {
        const r = (i / 135) * (R_PATCH - .15) + rr(-.02, .02);
        const x = ax === 'x' ? -behind : r, z = ax === 'x' ? r : -behind;
        const n = hostNormal(x, z), p0 = V(x, hostSurfY(x, z), z);
        const pO = p0.clone().addScaledVector(n, -.03), pMO = p0.clone().addScaledVector(n, -.19);
        const pMI = p0.clone().addScaledVector(n, -.23), pI = p0.clone().addScaledVector(n, -.39);
        B_CUT_HOST.add(pO, .78 * NM, cHH);
        B_CUT_HOST.stick(pO, pMO, .085 * NM, cHT1, cHT2);
        B_CUT_HOST.add(pI, .74 * NM, cHH);
        B_CUT_HOST.stick(pI, pMI, .085 * NM, cHT2, cHT1);
        if (i % 6 === 0 && row < 2) B_CUT_HOST.add(p0.clone().addScaledVector(n, -.16), .60 * NM, cHChol);
      }
    }
  }
  B_CUT_HOST.done();

  // T-cell surface CD4 (4-Ig-domain rod) + CCR5 (7-TM GPCR barrel) co-receptors, microvilli, cortical actin & proviral integration
  const B_CD4 = balls('cd4', cell, true), B_DNA = balls('cd4', cell, false);
  const cd4Cols = [col('#ff9ff3'), col('#f368e0'), col('#ffc8f9')];
  const ccr5Cols = [col('#7bed9f'), col('#2ed573')];
  const cAct1 = col('#7c6ee6'), cAct2 = col('#5d4ec7'), cHist = col('#ff9f7f'), cHist2 = col('#ffbe98');

  function addCd4Ccr5(x, z, twist = 0) {
    const y0 = hostSurfY(x, z), n = hostNormal(x, z);
    const e1 = across(V(1, 0, 0), n), e2 = n.clone().cross(e1).normalize();
    const pMem = V(x, y0, z);
    // 4-domain immunoglobulin CD4 ectodomain rod (D4 -> D3 -> D2 -> D1) + TM helix
    const pCyto = pMem.clone().addScaledVector(n, -.46);
    B_CD4.stick(pCyto, pMem, .11 * NM, cd4Cols[1], cd4Cols[0]);
    let prev = pMem;
    for (let d = 1; d <= 4; d++) {
      const bend = .04 * Math.sin(d * .9 + twist);
      const dom = pMem.clone().addScaledVector(n, d * .215).addScaledVector(e1, bend);
      B_CD4.stick(prev, dom, .13 * NM, cd4Cols[0], cd4Cols[2]);
      // Globular Ig-like beta-sandwich domain cluster
      B_CD4.add(dom, 1.15 * NM, cd4Cols[d % 3]);
      for (let b = 0; b < 5; b++) {
        const a = twist + d + b * 1.2566;
        B_CD4.add(dom.clone().addScaledVector(e1, Math.cos(a) * .065).addScaledVector(e2, Math.sin(a) * .065), .68 * NM, cd4Cols[(d + b) % 3]);
      }
      prev = dom;
    }
    // Adjacent 7-transmembrane CCR5 chemokine co-receptor barrel embedded in the T-cell bilayer
    const ccrCenter = pMem.clone().addScaledVector(e1, Math.cos(twist) * .34).addScaledVector(e2, Math.sin(twist) * .34);
    for (let tm = 0; tm < 7; tm++) {
      const a = twist + tm * (2 * Math.PI / 7);
      const off = e1.clone().multiplyScalar(Math.cos(a) * .115).addScaledVector(e2, Math.sin(a) * .115);
      const top = ccrCenter.clone().add(off).addScaledVector(n, .10);
      const bot = ccrCenter.clone().add(off).addScaledVector(n, -.38);
      B_CD4.stick(bot, top, .105 * NM, ccr5Cols[tm % 2], ccr5Cols[(tm + 1) % 2]);
      B_CD4.add(top, .66 * NM, ccr5Cols[tm % 2]);
    }
    if (!(x > 0 && z > 0)) SITES.cd4.push(prev.clone());
  }

  // Two primary CD4 + CCR5 complexes engaged by thevirion's bottom Env trimers + 16 surrounding T-cell receptors
  addCd4Ccr5(-1.18, -.38, .4);
  addCd4Ccr5(.20, -1.35, 1.9);
  for (let k = 0; k < 16; k++) {
    const r = 1.95 + (k / 16) * 6.8, a = k * 2.3999632 + .7;
    addCd4Ccr5(r * Math.cos(a), r * Math.sin(a), a);
  }

  // 360-deg T-cell raft phospholipid headgroups & CD43/CD45 glycocalyx brush
  const cGly1 = col('#c8c0ff'), cGly2 = col('#ffb8f0');
  for (let i = 0; i < 1650; i++) {
    const f = (i + .5) / 1650, r = Math.sqrt(f) * (R_PATCH - .35), a = i * 2.3999632;
    const x = r * Math.cos(a), z = r * Math.sin(a), n = hostNormal(x, z), p0 = V(x, hostSurfY(x, z), z);
    B_CD4.add(p0, .74 * NM, cHH);
    if (i % 5 === 0 && r > 1.8) {
      const pTop = p0.clone().addScaledVector(n, .20).add(V(rr(-.04, .04), 0, rr(-.04, .04)));
      B_CD4.stick(p0, pTop, .065 * NM, cGly1, cGly2);
      B_CD4.add(pTop, .54 * NM, cGly2);
    }
  }

  // Organic scanning T-cell microvilli (molecular phospholipid/glycocalyx-coated actin filopodia) around the synapse rim
  for (let m = 0; m < 22; m++) {
    const r = rr(4.6, 9.5), a = m * 2.3999632 + .35;
    const x = r * Math.cos(a), z = r * Math.sin(a);
    const n = hostNormal(x, z), p0 = V(x, hostSurfY(x, z) - .18, z);
    const sway = across(randDir(), n), len = rr(.95, 1.65), mvR = .125;
    const p1 = p0.clone().addScaledVector(n, len * .55).addScaledVector(sway, .14);
    const p2 = p0.clone().addScaledVector(n, len).addScaledVector(sway, .28);
    const curve = new THREE.CatmullRomCurve3([p0, p1, p2]);
    const mvFrames = curve.computeFrenetFrames(16, false);
    for (let s = 2; s <= 16; s++) {
      const t = s / 16, pt = curve.getPoint(t), rad = mvR * (t > .85 ? Math.sqrt(Math.max(.08, 1 - ((t - .85) / .15) ** 2)) : 1);
      B_CD4.add(pt, .55 * NM, s & 1 ? cAct1 : cAct2);
      if (s > 2) B_CD4.stick(curve.getPoint((s - 1) / 16), pt, .09 * NM, cAct1, cAct2);
      for (let k = 0; k < 6; k++) {
        const th = k * (Math.PI / 3) + s * .5;
        const sp = pt.clone().addScaledVector(mvFrames.normals[s], Math.cos(th) * rad).addScaledVector(mvFrames.binormals[s], Math.sin(th) * rad);
        B_CD4.add(sp, .66 * NM, k % 3 === 0 ? cGly1 : cHH);
      }
    }
  }

  // Sub-membrane T-cell cortical F-actin filaments
  for (let f = 0; f < 28; f++) {
    const r0 = rr(.8, 8.8), a0 = rr(0, 6.283), dir = a0 + rr(1.0, 2.2), len = rr(2.2, 4.4);
    let prev = null;
    for (let s = 0; s <= 12; s++) {
      const u = (s - 6) / 6 * (len * .5);
      const x = r0 * Math.cos(a0) + Math.cos(dir) * u, z = r0 * Math.sin(a0) + Math.sin(dir) * u;
      if (x * x + z * z > (R_PATCH - .35) ** 2) continue;
      const cur = V(x, hostSurfY(x, z) - .54 - .05 * Math.sin(s * .9 + f), z);
      if (prev) B_CD4.stick(prev, cur, .085 * NM, cAct1, cAct2);
      prev = cur;
    }
  }
  B_CD4.done();

  // Reverse-transcribed viral cDNA strand descending from cytoplasmic RT (SITES.rt[3]) to the Integrase intasome (SITES.int[2]),
  // splicing directly into nucleosome-studded host T-cell chromosomal B-DNA
  const viralDnaPath = [
    V(-.52, -3.95, -.34),
    V(-.65, -4.85, -.42),
    V(-1.12, -5.42, -.52),
    V(-1.65, -5.75, -.58),
  ];
  emitDNA(B_DNA, resample(new THREE.CatmullRomCurve3(viralDnaPath).getPoints(110), BP));

  const hostChromatinPath = [
    V(.55, -6.18, -1.85),
    V(-.55, -5.96, -1.18),
    V(-1.65, -5.75, -.58),
    V(-2.95, -6.02, -.82),
    V(-4.35, -6.28, -.45),
    V(-5.65, -6.05, .28),
  ];
  emitDNA(B_DNA, resample(new THREE.CatmullRomCurve3(hostChromatinPath).getPoints(200), BP));

  // Octameric histone nucleosome cores flanking the proviral integration site
  [V(-.55, -5.96, -1.18), V(-2.95, -6.02, -.82), V(-4.35, -6.28, -.45)].forEach((np, idx) => {
    for (let h = 0; h < 8; h++) {
      const a = (h % 4) * 1.5708 + idx * .5, layer = h < 4 ? -.09 : .09;
      B_DNA.add(np.clone().add(V(Math.cos(a) * .18, layer, Math.sin(a) * .18)), 1.05 * NM, h < 4 ? cHist : cHist2);
    }
  });
  B_DNA.done();
}

const MOL = {
  cd4sig: ['CD4/CCR5 fusion trigger', '#ff9ff3', 'hex', .22],
  vrna: ['Viral (+)ssRNA template', '#ffb35c', 'wave', .23],
  cdna: ['Reverse-transcribed cDNA', '#3d7bff', 'ring', .24],
  int: ['Integrase–DNA intasome', '#ffd24f', 'blob', .22],
};

function glyph(g, kind, x, y, s, hex) {
  const c = x + s / 2, m = y + s / 2, r = s * .38;
  g.save(); g.fillStyle = hex; g.strokeStyle = '#101522'; g.lineWidth = s * .08; g.lineJoin = g.lineCap = 'round';
  const dot = (px, py, rad) => { g.beginPath(); g.arc(px, py, rad, 0, 6.283); g.fill(); g.stroke(); };
  if (kind === 'ring') { g.beginPath(); g.arc(c, m, r, 0, 6.283); g.fill(); g.stroke(); g.fillStyle = '#101522'; g.beginPath(); g.arc(c, m, r * .42, 0, 6.283); g.fill(); }
  else if (kind === 'hex') { g.beginPath(); for (let k = 0; k < 6; k++) { const a = k * 1.0472 - .5236; g[k ? 'lineTo' : 'moveTo'](c + Math.cos(a) * r, m + Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke(); }
  else if (kind === 'blob') { dot(c - r * .32, m + r * .18, r * .5); dot(c + r * .34, m + r * .16, r * .46); dot(c, m - r * .26, r * .52); }
  else if (kind === 'wave') {
    g.beginPath(); for (let k = 0; k <= 24; k++) { const t = k / 24, px = c - r + 2 * r * t, py = m + Math.sin(t * 9.42) * r * .42; g[k ? 'lineTo' : 'moveTo'](px, py); }
    g.strokeStyle = '#101522'; g.lineWidth = s * .24; g.stroke(); g.strokeStyle = hex; g.lineWidth = s * .13; g.stroke();
  }
  g.restore();
}

const ATLAS = (() => {
  const keys = Object.keys(MOL), S = 64, c = document.createElement('canvas'); c.width = S * keys.length; c.height = S;
  const g = c.getContext('2d'); keys.forEach((k, i) => glyph(g, MOL[k][2], i * S + 4, 4, S - 8, MOL[k][1]));
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return { tex: t, n: keys.length, idx: Object.fromEntries(keys.map((k, i) => [k, i])) };
})();

const FLOW_MAX = 320;
const fPos = new Float32Array(FLOW_MAX * 3), fSize = new Float32Array(FLOW_MAX), fCol = new Float32Array(FLOW_MAX * 3), fKind = new Float32Array(FLOW_MAX), fFade = new Float32Array(FLOW_MAX);
const flowGeo = new THREE.BufferGeometry();
flowGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3)); flowGeo.setAttribute('size', new THREE.BufferAttribute(fSize, 1));
flowGeo.setAttribute('icol', new THREE.BufferAttribute(fCol, 3)); flowGeo.setAttribute('kind', new THREE.BufferAttribute(fKind, 1)); flowGeo.setAttribute('fade', new THREE.BufferAttribute(fFade, 1));
const flowMat = new THREE.ShaderMaterial({
  uniforms: { uScale: { value: 1 }, uTex: { value: ATLAS.tex }, uN: { value: ATLAS.n }, uBoost: { value: 1 } },
  vertexShader: `attribute float size, kind, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vKind, vFade;
    void main() { vCol = icol; vKind = kind; vFade = fade; vec4 mv = modelViewMatrix * vec4(position, 1.);
      gl_PointSize = clamp(size * uBoost * uScale / max(.1, -mv.z), 0., 54.); gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `uniform sampler2D uTex; uniform float uN; varying vec3 vCol; varying float vKind, vFade;
    void main() { vec4 t = texture2D(uTex, vec2((gl_PointCoord.x + vKind) / uN, 1. - gl_PointCoord.y));
      if (t.a < .08) discard; gl_FragColor = vec4(t.rgb, t.a * vFade); }`,
  transparent: true, depthWrite: false,
});
impMats.push(flowMat);
const flowPts = new THREE.Points(flowGeo, flowMat); flowPts.frustumCulled = false; flowPts.renderOrder = 3; cell.add(flowPts);

const live = [], free = [];
for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
let flowsOn = true, flowSpeed = 1, fClock = 0, molHi = null;

function emitFlow(type, pts, tags, dur = 3.0) {
  if (!free.length || pts.length < 2) return;
  const i = free.pop(), curve = new THREE.CatmullRomCurve3(pts), c = col(MOL[type][1]);
  fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b; fKind[i] = ATLAS.idx[type];
  live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: .035 });
}

const STREAM_TIMERS = [
  { rate: 1.3, acc: .2, go: () => {
    emitFlow('cd4sig', [V(-1.18, -2.55, -.38), V(-1.18, -3.45, -.38), V(-.82, -4.15, -.40)], ['env', 'cd4', 'membrane'], 2.4);
  }},
  { rate: 1.7, acc: .6, go: () => {
    emitFlow('vrna', [V(-.40, 3.8, -.40), V(-.50, 1.3, -.35), V(-.50, -1.5, -.32), V(-.65, -4.85, -.42)], ['rna', 'rt', 'capsid'], 3.2);
  }},
  { rate: 1.6, acc: .5, go: () => {
    emitFlow('cdna', [V(-.54, 1.15, -.34), V(-.52, -2.2, -.34), V(-.65, -4.85, -.42), V(-1.65, -5.75, -.58)], ['rt', 'int', 'cd4'], 3.1);
  }},
  { rate: 1.4, acc: .4, go: () => {
    emitFlow('int', [V(-1.65, -5.75, -.58), V(-2.95, -6.02, -.82), V(-4.35, -6.28, -.45)], ['int', 'cd4'], 2.7);
  }},
];

function updateFlows(dt) {
  fClock += dt;
  if (dt > 0) STREAM_TIMERS.forEach(s => { s.acc += dt * s.rate; while (s.acc >= 1) { s.acc--; s.go(); } });
  const w = fClock, q = V(), anyHi = molHi || hi;
  for (let k = live.length - 1; k >= 0; k--) {
    const p = live[k], base = MOL[p.type][3] * 2.2;
    p.t += dt / p.dur;
    if (p.t >= 1) { live[k] = live[live.length - 1]; live.pop(); free.push(p.i); fSize[p.i] = 0; continue; }
    p.curve.getPointAt(p.t, q);
    const a = p.wob * Math.sin(Math.PI * p.t);
    q.x += a * Math.sin(w * 5.1 + p.ph); q.y += a * Math.cos(w * 4.3 + p.ph); q.z += a * Math.sin(w * 4.7 + p.ph * 1.7);
    const s = base * Math.min(1, p.t / .1, (1 - p.t) / .1);
    fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
    const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
    fSize[p.i] = s * (anyHi ? (lit ? 1.45 : .55) : 1);
    fFade[p.i] = anyHi && !lit ? .25 : 1;
  }
  flowGeo.attributes.position.needsUpdate = flowGeo.attributes.size.needsUpdate = flowGeo.attributes.fade.needsUpdate = true;
}

const composer = new EffectComposer(renderer);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .28, .55, .86);
const lens = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(innerWidth, innerHeight) }, uTime: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - .5; float r2 = dot(d, d); vec2 o = d * r2 * .01;
      vec3 c = vec3(texture2D(tDiffuse, vUv + o).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - o).b);
      c *= mix(1., .5, smoothstep(.1, .62, r2 * 2.));
      c += (h(vUv * uRes + fract(uTime) * 91.7) - .5) * .03;
      gl_FragColor = vec4(c, 1.);
    }`,
});
composer.addPass(new RenderPass(scene, camera)); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(lens);

function resize() {
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); bloom.resolution.set(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); lens.uniforms.uRes.value.set(innerWidth, innerHeight);
  const s = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan(camera.fov * Math.PI / 360));
  impMats.forEach(m => { m.uniforms.uScale.value = s; });
  const fit = Math.max(1, 1.45 / camera.aspect); controls.maxDistance = 85 * fit;
}
addEventListener('resize', resize);

let hi = null;
const legend = document.getElementById('legend');
PARTS.forEach(([k, name, hex]) => {
  const it = document.createElement('div'); it.className = 'it'; const sw = document.createElement('span'); sw.className = 'sw'; sw.style.background = hex; const t = document.createElement('span'); t.textContent = name;
  it.append(sw, t); legend.append(it);
  it.onmouseenter = () => setHi(k); it.onmouseleave = () => setHi(null);
});
{
  const k = document.createElement('div'); k.className = 'key';
  k.innerHTML = `<div class="row">Bases ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>`
    + `<div class="row"><span class="bar" style="background:${MRNA}"></span>(+)ssRNA <span class="bar" style="background:${BACKBONE[0]};margin-left:6px"></span><span class="bar" style="background:${BACKBONE[1]}"></span>Proviral dsDNA</div>`;
  legend.append(k);
}

const tipBox = document.getElementById('tip'), TIP0 = 'HIV-1 Env trimers (PDB 4TVP) fuse with CD4+ T-cells; inside the fullerene cone capsid (PDB 3H4E/3P05), Reverse Transcriptase (PDB 1RTD) copies viral RNA into dsDNA for Integrase (PDB 1EX4).';
tipBox.textContent = TIP0;
Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
  const it = document.createElement('div'); it.className = 'mol'; const cv = document.createElement('canvas'); cv.width = cv.height = 44; glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
  const t = document.createElement('span'); t.textContent = name; it.append(cv, t); document.getElementById('mols').append(it);
  it.onmouseenter = () => { molHi = k; }; it.onmouseleave = () => { molHi = null; };
});

function showInfo(k) {
  const inf = k && INFO[k]; tipBox.replaceChildren();
  if (!inf) { tipBox.textContent = TIP0; return; }
  const b = document.createElement('b'); b.textContent = PARTS.find(p => p[0] === k)[1];
  tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Role: ${inf[1]}`);
}
function setHi(k) {
  if (hi && REG[hi]) { REG[hi].mats.forEach(m => { m.emissive.copy(m.userData.e0); m.emissiveIntensity = m.userData.i0; }); REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; }); }
  hi = k && REG[k] ? k : null;
  if (hi) REG[hi].mats.forEach(m => { m.userData.e0 ??= m.emissive.clone(); m.userData.i0 ??= m.emissiveIntensity; });
  showInfo(hi);
}
const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)[2]);

const VIEWS = [
  ['virion', V(23.0, 2.6, 26.0), V(0, .15, 0)],
  ['cone', V(8.6, 3.1, 9.6), V(-.25, 2.15, -.25)],
  ['rt', V(6.2, 2.3, 6.8), V(-.42, 2.15, -.42)],
  ['entry', V(8.6, -3.0, 9.6), V(-1.1, -4.55, -.48)],
];
let view = 0, motion = true, sway = 0, last = performance.now();

document.getElementById('view').onclick = e => { view = (view + 1) % VIEWS.length; const [name, p, t] = VIEWS[view]; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone())); e.target.textContent = `View: ${name}`; };
document.getElementById('look').onclick = e => { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); e.target.textContent = `Capsid: ${organelleLook}`; };
document.getElementById('cut').onclick = e => { cutOn = !cutOn; caps.visible = cutOn; e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; };
document.getElementById('flow').onclick = e => { flowsOn = !flowsOn; flowPts.visible = flowsOn; e.target.textContent = `Infection: ${flowsOn ? 'on' : 'off'}`; };
const speed = document.getElementById('speed'), spd = document.getElementById('spd');
speed.oninput = () => { flowSpeed = 2 ** +speed.value; spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`; };
speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
document.getElementById('motion').onclick = e => { motion = !motion; e.target.textContent = motion ? 'Pause' : 'Play'; };
document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'hiv-1-retrovirus-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

const held = new Set();
addEventListener('keydown', e => { const k = e.key.toLowerCase(); if (k.length === 1 && 'wasd'.includes(k) && !e.target.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k); });
addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
addEventListener('blur', () => held.clear());
const fwd = V(), side = V(), step = V();
controls.enableRotate = false;
let lookFrom = null;
const aim = new THREE.Spherical();
renderer.domElement.addEventListener('pointerdown', e => { if (e.button === 0) { lookFrom = [e.clientX, e.clientY]; renderer.domElement.setPointerCapture(e.pointerId); } });
renderer.domElement.addEventListener('pointermove', e => {
  if (!lookFrom) return;
  const dx = e.clientX - lookFrom[0], dy = e.clientY - lookFrom[1]; lookFrom = [e.clientX, e.clientY];
  if (tour.on) { tour.yaw = Math.min(.44, Math.max(-.44, tour.yaw - dx * .002)); tour.pitch = Math.min(.44, Math.max(-.44, tour.pitch + dy * .002)); return; }
  aim.setFromVector3(controls.target.clone().sub(camera.position));
  aim.theta -= dx * .002; aim.phi = Math.min(Math.PI - .05, Math.max(.05, aim.phi + dy * .002));
  controls.target.copy(camera.position).add(V().setFromSpherical(aim));
});
for (const ev of ['pointerup', 'pointercancel']) renderer.domElement.addEventListener(ev, () => { lookFrom = null; });
function freeMove(dt) {
  if (!held.size || tour.on) return;
  camera.getWorldDirection(fwd); side.crossVectors(fwd, camera.up).normalize();
  step.set(0, 0, 0).addScaledVector(fwd, held.has('w') - held.has('s')).addScaledVector(side, held.has('d') - held.has('a'));
  if (step.lengthSq() < 1e-6) return;
  step.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * .5));
  camera.position.add(step); controls.target.add(step);
}

// ---------------------------------------------------------------------
// The guided tour (driven by the Cell Explorer): camera flights, part framing, blink, and fading
// ---------------------------------------------------------------------
const tour = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
const smoother = x => x * x * x * (x * (x * 6 - 15) + 10);
function poseOf(m) {
  if (m.view) { const v = VIEWS.find(x => x[0] === m.view); return v && { p: v[1].clone(), t: v[2].clone() }; }
  if (m.part) { const f = focusOf(m.part); return f && { p: f.c.clone().addScaledVector(f.dir, (m.dist ?? 1) * f.r / Math.sin(camera.fov * Math.PI / 360)), t: f.c.clone() }; }
  if (m.pos) return { p: V(...m.pos), t: V(...m.target) };
  return null;
}
function flyTo(m) {
  const to = poseOf(m); if (!to) return false;
  cell.updateMatrixWorld();
  tour.from = { p: cell.worldToLocal(camera.position.clone()), t: cell.worldToLocal(controls.target.clone()) }; tour.to = to;
  Object.assign(tour, { on: true, t: m.dur > 0 ? 0 : 1, dur: m.dur || 1, seq: m.seq ?? 0, orbit: m.orbit ?? 0, sent: false });
  controls.enabled = false; held.clear(); return true;
}
function freeCamera() { tour.on = false; tour.yaw = tour.pitch = 0; controls.enabled = true; }
const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0, .6, 0);
function tourFrame(dt) {
  if (!tour.on) return;
  const { from, to } = tour;
  if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
  else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, tour.orbit * Math.PI / 180 * dt).add(to.t);
  const e = smoother(tour.t);
  ft.lerpVectors(from.t, to.t, e);
  qa.copy(from.p).sub(C0); qb.copy(to.p).sub(C0); const ra = Math.max(.05, qa.length()), rb = Math.max(.05, qb.length()); qa.normalize(); qb.normalize();
  const ang = Math.acos(Math.min(1, Math.max(-1, qa.dot(qb))));
  if (ang < 1e-3 || ang > 3.1) fp.lerpVectors(qa, qb, e).normalize(); else fp.copy(qa).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(qb, Math.sin(e * ang)).divideScalar(Math.sin(ang));
  fp.multiplyScalar(ra ** (1 - e) * rb ** e * (1 + Math.min(.5, ang * .3) * Math.sin(Math.PI * e))).add(C0);
  if (!lookFrom) { const k = Math.exp(-dt / .2); tour.yaw *= k; tour.pitch *= k; }
  look.copy(ft).sub(fp);
  if (tour.yaw || tour.pitch) { right.crossVectors(look, UP).normalize(); look.applyAxisAngle(UP, tour.yaw).applyAxisAngle(right, -tour.pitch); }
  camera.position.copy(fp); cell.localToWorld(camera.position); controls.target.copy(fp).add(look); cell.localToWorld(controls.target); camera.lookAt(controls.target);
  if (tour.t >= 1 && !tour.sent) { tour.sent = true; if (EMBED) toExplorer({ type: 'arrived', seq: tour.seq }); }
}
const FOCUS = {};
function focusOf(key) {
  if (key in FOCUS) return FOCUS[key];
  const P = pointsOf('virion'), d0 = V(.65, .20, .73).normalize();
  const AT = {
    env: [P.env, 2.8], membrane: [P.membrane, 3.6], ma: [P.ma, 3.2],
    capsid: [P.capsid, 3.0], pentamer: [P.pentamer, 2.4], rna: [P.rna, 2.2],
    rt: [P.rt, 1.8], int: [P.int, 1.8], cd4: [P.cd4, 2.8],
  };
  if (!AT[key]) return FOCUS[key] = null;
  const [c, r] = AT[key];
  return FOCUS[key] = { c: c.clone(), r, dir: d0.clone() };
}
const KIN = { membrane: ['ma', 'env'], capsid: ['pentamer', 'rna', 'rt', 'int'] };
const saved = new Map(), hidden = [];
let ghostArgs = null, OBJS = null;
function objsOf() {
  const of = new Map(), out = {};
  Object.entries(REG).forEach(([k, r]) => [...r.mats, ...r.imp].forEach(m => { if (!of.has(m)) of.set(m, k); }));
  cell.traverse(o => { const k = o.material && of.get(o.material); if (k) (out[k] ??= []).push(o); });
  return out;
}
function ghost(keep = null, amount = .1, hide = false) {
  saved.forEach((v, m) => { Object.assign(m, v); if (m.uniforms?.uDim) m.uniforms.uDim.value = 1; m.needsUpdate = true; }); saved.clear();
  hidden.forEach(o => { o.visible = true; }); hidden.length = 0;
  ghostArgs = keep ? [keep, amount, hide] : null; if (!keep) return;
  const K = new Set(keep.flatMap(k => [k, ...(KIN[k] ?? [])]));
  Object.entries(REG).forEach(([k, r]) => {
    if (K.has(k)) return;
    if (hide) { (OBJS ??= objsOf())[k]?.forEach(o => { if (o.visible) { o.visible = false; hidden.push(o); } }); return; }
    r.mats.forEach(m => { if (saved.has(m)) return; saved.set(m, { transparent: m.transparent, opacity: m.opacity, depthWrite: m.depthWrite, ...('transmission' in m && { transmission: m.transmission }) });
      m.transparent = true; m.opacity = Math.min(m.opacity, amount); m.depthWrite = false; if ('transmission' in m) m.transmission = 0; m.needsUpdate = true; });
    r.imp.forEach(m => { if (saved.has(m)) return; saved.set(m, { transparent: m.transparent, depthWrite: m.depthWrite }); if (m.uniforms?.uDim) m.uniforms.uDim.value = amount * .5; m.transparent = true; m.depthWrite = false; m.needsUpdate = true; });
  });
}
let blinkT0 = null, blinkN = 3;
function blink(k, n = 3) { setHi(k); if (hi) { blinkT0 = performance.now(); blinkN = n; } }
const hiLevel = now => { if (blinkT0 === null) return .55 + .45 * Math.sin(now / 180); const t = (now - blinkT0) / 1000; return t < blinkN / 1.5 ? .5 - .5 * Math.cos(t * 3 * Math.PI) : .3 + .06 * Math.sin(now / 400); };
function setState(m) {
  const g = ghostArgs; if (g) ghost(null);
  if (m.look && m.look !== organelleLook) { organelleLook = m.look; applyLook(); }
  if (m.cut !== undefined && m.cut !== cutOn) { cutOn = m.cut; caps.visible = cutOn; }
  if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow').click();
  if (m.motion !== undefined) motion = m.motion;
  if (g) ghost(...g);
}

const lightView = V();
function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  if (motion) {
    sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3) / 15));
    cell.rotation.y = .12 * Math.sin(sway * .12);
  }
  if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
  flowMat.uniforms.uBoost.value = Math.max(.65, Math.min(1.6, camera.position.distanceTo(controls.target) / 16));
  cell.updateMatrixWorld(); updateCut();
  lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
  impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
  if (hi && REG[hi]) {
    const k = hiLevel(now), c = hiCol(hi);
    REG[hi].mats.forEach(m => { m.emissive.copy(c); m.emissiveIntensity = .25 + .75 * k; });
    REG[hi].imp.forEach(m => { m.uniforms.uHi.value = k; });
  }
  lens.uniforms.uTime.value = now / 1000;
  freeMove(dt); controls.update(); tourFrame(dt); composer.render();
  if (EMBED) embedFrame();
}

function build() {
  buildEnvelopeAndMatrix();
  buildFullereneConeAndCore();
  buildHostTCellAndProvirus();
  for (let s = 0; s < 120; s++) updateFlows(.05);
}

setTimeout(() => {
  build(); applyLook(); resize(); renderer.setAnimationLoop(frame);
  document.getElementById('busy').style.display = 'none';
}, 30);

const EMBED = document.documentElement.classList.contains('embed');
const toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
const POINTS = {};
function pointsOf(vName) {
  if (POINTS[vName]) return POINTS[vName];
  let P = {};
  if (vName === 'virion') P = {
    env: SITES.env[2] ?? V(-4.2, 6.1, 1.0), membrane: V(0, 2.45, 4.9), ma: V(-4.1, 3.4, -.5),
    capsid: V(-1.7, 3.2, -.35), pentamer: SITES.pentamer[5] ?? V(-1.5, 4.35, -.8), rna: V(-.55, 2.4, -.45),
    rt: SITES.rt[0], int: SITES.int[0], cd4: SITES.cd4[0] ?? V(-1.18, -2.55, -.38),
  };
  if (vName === 'cone') P = {
    capsid: V(-1.7, 3.2, -.35), pentamer: SITES.pentamer[5] ?? V(-1.5, 4.35, -.8), rna: V(-.55, 2.4, -.45),
    rt: SITES.rt[0], int: SITES.int[0], ma: V(-4.1, 3.4, -.5),
  };
  if (vName === 'rt') P = {
    rt: SITES.rt[0], int: SITES.int[0], rna: V(-.55, 2.4, -.45), capsid: V(-1.6, 2.6, -.35),
  };
  if (vName === 'entry') P = {
    env: SITES.env[0] ?? V(-1.18, -2.55, -.38), cd4: SITES.cd4[0] ?? V(-1.18, -2.85, -.38), rt: SITES.rt[3], int: SITES.int[2],
  };
  return POINTS[vName] = P;
}

let tagPts = [], tagSeq = 0, sentReady = false;
const scr = V();
function embedFrame() {
  if (!sentReady) {
    sentReady = true;
    const mols = Object.entries(MOL).map(([k, [name, colour, g]]) => { const cv = document.createElement('canvas'); cv.width = cv.height = 44; glyph(cv.getContext('2d'), g, 3, 3, 38, colour); return [k, name, cv.toDataURL()]; });
    toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS });
  }
  const w = innerWidth, h = innerHeight;
  toExplorer({ type: 'pts', seq: tagSeq, pts: tagPts.map(p => {
    if (!p) return null;
    scr.copy(p); cell.localToWorld(scr); scr.project(camera);
    return [(scr.x * .5 + .5) * w, (-scr.y * .5 + .5) * h, scr.z < 1];
  }) });
}
const say = () => toExplorer({ type: 'state', motion, look: organelleLook, cut: cutOn, flow: flowsOn });
if (EMBED) {
  addEventListener('message', e => {
    const m = e.data; if (!m || m.to !== 'realistic-cell') return;
    if (m.cmd === 'view') {
      const v = VIEWS.findIndex(x => x[0] === m.view); if (v < 0) return;
      freeCamera(); view = v; const [, p, t] = VIEWS[v]; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone()));
      const P = pointsOf(m.view); tagPts = m.points.map(k => P[k] ?? null); tagSeq = m.seq;
    }
    if (m.cmd === 'track') { tagPts = m.points.map(x => { const [v, k] = Array.isArray(x) ? x : [m.view ?? 'virion', x]; return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k]) ?? null; }); tagSeq = m.seq; }
    if (m.cmd === 'fly' && !flyTo(m)) toExplorer({ type: 'arrived', seq: m.seq ?? 0, missed: true });
    if (m.cmd === 'free') freeCamera();
    if (m.cmd === 'blink') { if (m.key) blink(m.key, m.n ?? 3); else setHi(null); }
    if (m.cmd === 'ghost') ghost(m.keep ?? null, m.amount ?? .1, !!m.hide);
    if (m.cmd === 'set') setState(m);
    if (m.cmd === 'hi') setHi(m.key);
    if (m.cmd === 'mol') molHi = m.key;
    if (m.cmd === 'motion') motion = !motion;
    if (m.cmd === 'look') { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); }
    if (m.cmd === 'cut') { cutOn = !cutOn; caps.visible = cutOn; }
    if (m.cmd === 'flow') document.getElementById('flow').click();
    if (m.cmd === 'speed') { speed.value = m.v; speed.oninput(); }
    if (m.cmd === 'key') m.down ? held.add(m.key) : held.delete(m.key);
    if (m.cmd === 'snap') { composer.render(); toExplorer({ type: 'snap', url: renderer.domElement.toDataURL('image/png') }); }
    say();
  });
  addEventListener('keydown', e => {
    if (e.key === 'Escape') toExplorer({ type: 'key', key: 'Escape' });
    else if (!e.metaKey && !e.ctrlKey && !e.altKey && (/^(Arrow(Left|Right)|Page(Up|Down)| )$/.test(e.key) || /^[cnem1-9]$/i.test(e.key))) { if (e.key === ' ') e.preventDefault(); toExplorer({ type: 'key', key: e.key, shift: e.shiftKey }); }
  });
}
window.__cell = { renderer, composer, camera, controls, scene, cell, REG, shells, setHi, V, focusOf, flyTo, freeCamera, ghost, blink, setState, tour, setLook: k => { organelleLook = k; applyLook(); }, get sites() { return SITES; }, get flows() { return live; }, get views() { return VIEWS; }, pointsOf, setMol: k => { molHi = k; }, step: (dt = .05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); } };
});
