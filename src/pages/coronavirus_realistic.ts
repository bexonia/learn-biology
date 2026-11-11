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

runBiologyApp(20261105, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
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
  gr.addColorStop(0, '#241834'); gr.addColorStop(.52, '#0e0918'); gr.addColorStop(1, '#030206'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, .1, 400); camera.position.set(21.5, 3.0, 24.5);
const controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, .35, 0); controls.enableDamping = true; controls.minDistance = .5; controls.maxDistance = 95; controls.panSpeed = .5; controls.zoomSpeed = .5;
scene.add(new THREE.HemisphereLight('#ffe8ef', '#1d2236', .52));
const key = new THREE.DirectionalLight('#fff2e2', 2.9); key.position.set(15, 25, 19); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 85 }); key.shadow.bias = -.0005; key.shadow.normalBias = .03;
const rim = new THREE.DirectionalLight('#9cc2ff', 1.45); rim.position.set(-17, 9, -15);
const lamp = new THREE.PointLight('#ffb0a8', 9.5, 26, 2); lamp.position.set(4.6, 2.2, 5.2);
scene.add(key, rim, lamp);
const cell = new THREE.Group(); scene.add(cell);

const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)], CUT = CUT_LOCAL.map(p => p.clone());
let cutOn = true;
function updateCut() { CUT.forEach((p, i) => { p.copy(CUT_LOCAL[i]); if (!cutOn) p.constant = 1e4; p.applyMatrix4(cell.matrixWorld); }); }
const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };
const phys = o => new THREE.MeshPhysicalMaterial({ envMapIntensity: .8, ...CLIP, ...o });
const nmap = waveNormalMap(), bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };

const PARTS = [
  ['spike', 'Spike (S) glycoprotein trimer (6VXX)', '#ff6b8b'],
  ['membrane', 'Viral lipid bilayer envelope', '#f3a683'],
  ['mprot', 'Membrane (M) glycoprotein lattice', '#f7d794'],
  ['echan', 'Envelope (E) viroporin channel (5X29)', '#78e08f'],
  ['ncap', 'Nucleocapsid (N) RNP oligomers (6VYO)', '#63cdda'],
  ['rna', '(+)ssRNA viral genome (29.9 kb)', '#ffb35c'],
  ['ace2', 'Host ACE2 receptor (1R42)', '#7fe0ff'],
  ['hostmem', 'Host respiratory cell membrane', '#a29bfe'],
  ['rdrp', 'Viral RdRp replicase (nsp12–7–8, 6M71)', '#cf6a87'],
];

const INFO = {
  spike: ['Homotrimer of S1 (RBD) + S2 fusion stalk (PDB 6VXX)', 'Binds host ACE2 receptor and fuses viral & host membranes'],
  membrane: ['Host-ER/Golgi-derived phospholipid bilayer', 'Encloses the vRNP core and anchors S, M and E proteins'],
  mprot: ['Most abundant dimeric triple-spanning membrane protein', 'Shapes envelope curvature and binds internal N–RNA complex'],
  echan: ['Pentameric viroporin cation channel (PDB 5X29)', 'Alters host secretory pathway pH and drives virion budding'],
  ncap: ['Helical N-protein oligomers (PDB 6VYO)', 'Packages and shields the 29.9 kb (+)ssRNA genome into RNP beads'],
  rna: ['29,903 nt capped & polyadenylated (+)ssRNA', 'Serves directly as mRNA for ORF1ab and template for RdRp'],
  ace2: ['Host zinc metallopeptidase ectodomain (PDB 1R42)', 'Entry receptor bound with high affinity by the Spike RBD'],
  hostmem: ['Host epithelial plasma membrane bilayer', 'Target membrane where TMPRSS2 primes Spike for fusion'],
  rdrp: ['nsp12 polymerase + nsp7/nsp8 cofactors (PDB 6M71)', 'Synthesizes full-length (-)RNA and nested subgenomic mRNAs'],
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
const BASE = { A: '#ff5a5a', T: '#ffd24a', G: '#3ddc84', C: '#ff9a3c', U: '#ff7ad9' };
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
const STRAND_R = .16 * NM, ROD_R = .09 * NM, JOINT = .34 * NM, SILVER = '#d4d9e2';
function rnaAlong(S, ax, bb = MRNA) { rna.rnaAlong(S, ax, bb, NM); }

const PDB = {"spike":{"pdb":"6VXX","full":{"n":2916,"xyz":"h/6mAakAov6RAZcAvP6ZAX0A1P6HAWUA9/6AAXQABf99AVAAKf90AVMAMP+DAXYAPP9vAZQAXv9iAYgAe/9lAZ8An/9YAaAAnf81Aa4Av/81Ab4A3/9KAcMA8/88AaUA/v9SAYkA9P9FAWcA9f9WAUUA7P9PASEA2f8wASsAt/8hAS0AtP8QAU8AmP/4AFoAjv/6AH4Acf/wAJQAZv8HAbAASf8aAb4AQf8zAaIAIf9GAZoAEf8zAX0AEP9HAV0A7/5YAVQA4P5NAXUAxv5hAYkA0v54AaUAuv6IAb0AuP6uAbgAs/7DAdcArP7pAdgAtv4GAu8Anv4iAuUAgP41AvQAo/7ZARABu/7FAScBq/6jAS0BvP6EATkBxv5uARwB0v5JARwB9/5FARcB9P4iAQkBFv8WAfwAJP84AfUAGP9aAeoAH/9xAc4AGP+UAdcAGP+0AcMADf/XAccACv/4AbUAE/8YAsUAEv8+AsEAFf9IAuYAJP8qAvgAA/8fAgkBDP/7AQ0BJv/5ASgBJv/WATYBHP+yATsBEf+aAVYBF/90AVQBC/9ZAWwB7f5DAXQB1/5YAYsB6P56AYsB2/6CAa4B+P6AAccB8f5bAcwBDf9QAbQBLP9eAaUBJf90AYcBPv+EAW8BOv+pAWwBSv++AVABRf/kAVEBVf//ATsBUP8iAksBYf8/AjgBhf8yAjQBhv8WAk4Bfv/yAUcBdP/gAWYBcf+6AWoBZP+pAYoBV/+GAZIBRv+NAbQBJf9/AcEBFv+gAbgB9f6tAcMB5f64AaMBxv7OAaEBpP7AAZcBq/7RAXYB0f7ZAXMB3P75AWIB9f4VAmQB6v45AmYB/P5VAlMBVP9zAekBZ/+DAcsBgf9uAbgBjf+HAZ4BkP+tAZgBoP/BAXwBn//mAXMBrv/3AVQBBP8qApUAKv8xApMAOv8UAqYANf/vAaMAQ//aAcAAQv+0AbsASv+bAdcATP92AdwARv9nAf4ATP9CAQQBU/8rASIBav8OAR4Bc//5AD0Bbv8XAVQBgP8wAT4Bbf9PATIBe/9YARABdf96AQIBe/+EAd4Acv+mAc8Adf++AbMAbf/jAbAAZ//zAY4AWP8UAoEANv8SAnAAHf8oAl8A+/4WAmQA3/4aAn0Axf4BAnQA1/7fAXgA9/7MAXkADv/VAVsAFf+5AUIAOf+vAT0AVf+bAUwAbf+iAWkAf/+KAX8Agf+OAaUAof+LAbgAov99AdwAqf+WAfgAof+GARkBoP9kASkBkv9jAU0Blv9DAWIBdv9KAXUBaf8mAXkBRf8zAXgBKP8fAWoBF/84AVIB9f4wAUQB5v5TAUIB8/52ATsB5v6aATsB8/67AS0B+P7dAT0B6/7+AS4B8/4iAjYB0/42AjsBz/5cAjoB4/4NAtcA1f7rAcoA5/7LAdEA5v6oAcQA6f6GAdQA8v5nAcAA/f5EAcsAG/8wAcEAHP8NAbQAOP/zAK4AOv/5AIkAV//zAHMAZP8RAWEAff8WAUUAkP82AU4Ao/9KATQAwv9bAUAA0f92ASkA9v9/ASUA9f+TAUYA5v92AVoAxP+HAVsApf9yAVcAlP+DAToAef9pATIAav9JAT4AU/8rATQAOf8dAUsAPP/4AEEAF//wAEsAB/8PATwA/f7+ABsACf/kAAEAH//9APD/Mf8GARAANf/hABcARv/eAPX/Xf/7APz/aP/sAB4Abf/JAA4AhP/XAPP/lf/vAAwAjv8MAfX/eP8rAfH/df8kAcz/ZP8FAb7/a//6AJv/T//uAIT/Rv/KAIv/Nv+xAKP/Rv+rAMX/QP+SAOD/P/+nAAAALf+UABsAF/93ACUA8v53ACwA5v5kAEoAw/5hAFgAxP5nAH0AsP5TAJcAk/5kAKgAkf5RAMkAov40ANsAlP4RAOAAnv7+//8Alf7a/wMBnP7B/x8Bif6i/ywBbf6w/0MBe/6f/2MBeP6u/4UBjP6W/5oBq/6l/6sBzf6T/6oB2P6E/8wB+f6X/88B8/6b//QB9P51//gBGP92/+oBJ/+W//kBFv+V/xwCGf9u/yACH/9h/0MCPv9O/zgCVP9O/xkCZP8v/wsCif8n/wsCnf8v/+wBpv8L/+YBgP8E/+QBcf8k/9gBTP8n/9IBPP8v/7ABGf89/7IBBP9B/5MB8P5h/48B1P5f/3YBsP5p/24Bsv6K/4ABuf6w/4AB3f64/4kB4f7b/5gBB//g/5gBBP8EAKUBAP/3/8gBIf/j/8cBNP/+/7UBKP8cAMoBLP8JAOsBSv8WAP8BT//1/xECZf/m//YBi//p//cBjf/k/9IBdf/h/7QBi//b/5YBfP/S/3QBkP/B/1gBcv+6/0IBXP/Y/z8BWv/5/1EBRv/3/3IBLv8TAGgBJP8CAEgBF//k/1sB9v70/18B7v71/zoBAf/W/y8B8/6z/zYB/v6P/zgB9f5r/y8BAv9h/1IBFf9w/28BKf9b/4cBNv9l/6kBVv9U/7QBWP9Y/9oBdf9R//EBjv9e/wsCs/9o/wQCzv97/xYCz/+g/w8C8P+i//wB4v+I/+QBxf+d/9cB3P+q/7wB4P+H/64Bu/+C/6UBvf+R/4IBwv+G/14B5v+G/1QB8/+B/3gBCABl/4UBEwBa/6cBDQBA/8IB6P9I/8QB4f9R/58B8/8y/5QB7P8Z/7AByf8e/78Btf83/6sBuv8+/4YBqP9W/3ABp/9W/0oBvv9w/zsBoP96/yYBi/99/0UBbf+T/0MBYf+i/2MBaf+z/4QBfP+p/6QBbf+3/8MBff+z/+UBfP/B/wkCjf+4/ykCff+i/0MClP+r/18Cdv+z/3UCY/+T/2wCeP91/2ICl/98/3YCmP9v/5sCuf9R/5cCov9G/3oCsf8n/2sClP8c/1YCov8r/zYCuP8U/yECyv8a/wAC3f8D/+gBu/8J/2EBo/8o/2QBh/8j/3wBlv8C/4gBi//2/qwBqP/g/rkBlP/O/tUBMQCx/hUCDgDA/gwCBQDc/vMB6//m/gwC8P8F/yIC2v8b/zcC2P89/0gC0/9H/20Cwf9o/2kCw/9//4cCtv+j/4oC2f+v/5MC6v+i/3MC3v/L/0EC8P+0/ycC7P+X/z8Cx/+c/0YCrP+G/zUCmf+U/xcCeP+J/wkCev+J/+QBXv+E/8sBZv+B/6cBSv+J/48BTf92/28BN/+E/1MBLv9x/zMBJ/+K/xgBJP9y//sAB/98/+QA7P5k//EAy/5p/wUB0v5+/yMBxv51/0YB2P6O/1wB0P6z/1IB1P7V/2IBuv7s/3MBsP79/1MBjP4BAEgBgf73/yYBbv4MAA0BVP4EAPIAYf74/9EAWv4MALEAW/77/48AY/4IAG0AdP4oAHoAmf4xAH8Aof4rAKQAvv4oALwAuv4FAMoAx/7y/+gAv/7N/+oAzf68/wkB6/7V/wkB8P7S/+MA7v7z/9MA7P4DALAA1/4YAJkAv/4MAH8AnP4FAHQAi/7o/4YAcv7V/3AAX/60/3EAcf6X/2IAbv50/1UAj/5o/2MAiv5I/3UAof5J/5MApP4p/6UAmP4p/8kAvP4r/9cAxv5I/8AAxP5s/8wA1/6B/7MA3v5+/44A/f6K/3wACP+X/1oAKf+S/0gAOP+w/1kAL/+h/3sAFv+8/4AA8/60/40A2/6p/3IAvf6i/4cAs/6e/6sAmv6M/8AAhv6j/9YAjf6Z//oAav6f/wcBVv6S/+oAZ/53/9cAZP6E/7MAgP6L/5oAh/6u/48Anf63/3EAtf7T/3UAuv7p/1YA0/4GAFwAwv4oAFcAxP43ADMA5f5GACoA+v5PAAsAFP9mAP3/C/+KAPb/GP+bANf/Fv+/AM3/Ef/HAKn/Hf/qAKL/J/8BAYX/R/8SAY//Q/8tAan/Uf9GAY//Lv9BAX7/Ff86AZn/Ef8xAb7/8v4cAbf/9v73AL3/4/7WALn/5v66ANL/6P6VAMr/4P58AOX/8f5dANn/3v49ANf/wP5IAOv/m/5NAOP/iv5vAOP/ef5mAAUAkf5mACMAo/6FABUAf/7RAK7/if6sALb/lP6TAJz/mP5vAKT/tP5eAJD/xv49AJT/4/5QAKH/z/5cAL//t/54AMf/wP6ZALb/s/64AMX/tf7cALf/u/7SAJP/nv7XAHr/lv64AGX/mP7BAEH/iv6rACT/pP65AAv/xf6mAAn/5v64AAf/C/+vAAf/Fv+jACn/Jf++AED/Jf+0AGX/Hv+PAGb/B/+BAID/BP9dAHb/7P5EAGb/6f5ZAEb/4v55AFj/+P6YAFb/8v68AGT/+/7fAFj/9P4EAV7/3v4SAUP/vf4mATz/sf5QAV3/zP41AWH/yf4XAXf/1/70AHz/xv7aAGX/x/61AGP/wv6gAEP/yv6AADL/6f6HAB7/6/6GAPn+Av9tAOj+Bf+DAMn+7/6NAKz+2/5zAJr+5/5vAHb+2/5TAF/+8f5JAEL+4f5JACD+6/4mABj+4f4UAPn98P74/+T9+/4PAMf9BP8xANf9Jv89AOL9L/9eAPL9Uf9rAOb9Yf+KAPT9Zv+mANv9ev+9APL9j/+7ABL+nP/OAC/+vf/MAEL+t//OAGf+z//PAIP+x//AAKX+2f/BAMb+4P+jANv+7/+oAP3+AACMABD/EgCMADL/NgB/ADH/RACFAFP/OwCOAHf/TgCiAJH/bACQAJ7/ZQCSAMP/fACEAN3/dAB+AAEAjAB6AB0AeQBgADIAjgBlAFEAiwCLAFEAZgCJAEoAXgByAGcAeQB8AIAAhACfAHYAowCoAIkAnACPAKUAtQB2ALEAnQBlAMkAgwBgAK0AnQBVAJQAqQA5AKsAhQAtAK4AgQAvAIgAngAYAIMAigD8/5QAdQD7/3QAkwDv/2AAkQD3/zsAbgAFADwAfQAoADkAmAAiAB4AgwAMAAcAbAArAAMAigBAAPr/kgAlAOD/bwAkANH/bgBKAM3/kABKAL3/hAAwAKT/aABGAJr/fgBlAJf/lgBRAID/ewBFAGj/bgBoAGT/jgBwAFH/iwBQAD7/ZwBaADT/cwB8ACf/kABtABX/fABSAAP/YgBrAPf+eQCHAOv+mwB5AOT+kQBlAMb+qAB3AK7+zQBwAKz+1QCTAJ/+yQC2AKX+uwDCAIT+swDmAHz+nwD3AGH+sAANAUf+sAA0AUr+mQA0ASv+dgAnATP+bQAbARD+VQAAARr+PAACAf79JgAcAQ7+IwAJAS7+KQAhAUz+OgAPAWr+RgAvAXv+LwApAZj+PAAGAaD+YQAMAZn+eAAcAbT+eABBAbn+nQBOAbn+lABuAcz+iwBbAez+ogBTAQr/mAAvAQP/kwAmAd/+bwAaAeH+VAAeAcb+NwA2Acr+HwAZAdH+NgAKAer+NwAqAf7+EQApAf/+EgAGAQ7/KwAQASj/FwAuATL/9/8ZATn/BAD9AE7/DgAIAXL/XQDhABMAdADdADEAZgC7ADsAfgCmACcAawCsAAcAfwC4AOn/ewC5AMT/lgCuAKz/mwC/AIr/lgCrAGr/tQChAFb/qACxADf/oQDWADz/hQDoACn/nwD1ABL/rADTAAn/iQDGAAP/gwDkAOz+owDaANn+lgC3ANT+dADCAMj+hQDaALH+mgC+AKL+fACoAJ7+aQDEAI7+hQDPAHf+igCrAG3+ZQCmAGb+YwDFAFH+gwDCADz+iACcADn+ZgCMAD/+aQBqAE7+iwBiAEH+nABwAGD+igBXAHX+lgA5AGH+uQBFAFn+yABkAEv+tACEAEj+rwCGACP+pACoABf+hACqAAP+bwDIAPf9UwDNAA/+OADMAPT9RgCqAOn9RgCdAAz+IgCmAA7+GwCTAO79KAB0AP79EwB7AB3+9P99AAb+/P9dAPP9/v9NABX+2v9VABz+zf9JAPr9zP9rAOn93/9uAMn9/P+HAMr97/+dAK/91P+oAMf97v+4AN39AADKAMH94P/XALH90//jANL99P/sAOL96v8QAen9yv8FAfn92//rAA7+9v8DARr+3P8dASL+xv8EATb+5f/4AEn+8P8bAVH+zf8kAV3+yv8EAXL+6v8NAYX+3P8wAYz+vv8fAZv+1P8KAbL+4v8qAcD+wf85Acb+tP8aAdj+0/8WAe7+1f87Aff+sP88AQP/p/8aARD/uP8SATH/qP/vADH/vP/nABL/2f/cACf/xP/LAEL/1/+qAD3/+P+6AEj/6f/RAGL/2P+zAHL/+f+hAHf/BwC/AIj/6f/CAJ7/6f+dAKj/DQCfALP/CADAAMX/6/+xANj///+SAOH/GgCnAPD/AwC+AAIA8f+gABEAEgCRABwAHQCxAC0A/P+3AD8A/v+UAE4AGwChAGMAAQC1AHcA7v+VAIEA8v+GAKQA6/9iAJsA4v9cAMAAAABvAM0A/f+MAOYACwCjAMsAEwCjAKYAMwC3AK4AUACgALUAYwC6AMgARgDAAOAARQCcAOkAagCbAO8AawC7AAMBUACvABoBVACJACABcQB0AC0BfABZABQBaAA8ACQBSABPABsBVABkAP4AXABFAOoAOAA6AOwAKwBaAN8ARgBbAMQAPgA4ALgAGgBDALIAJwBfAJwAQABJAIoAJgAvAIEADwBKAHQAKgBdAGAAOgA9AFMAFwAyAEgAEgBUADgAMQBRACMAKAAuABgABwA6AAwAFwBXAPn/MQBBAOn/GAAnAN7/AwBCAM7/IQBQALz/KwAuAK//CAAoAKH/BgBLAJP/KQBHAIT/HQAoAHL/AQA9AGL/GgBXAFf/MQA8AEr/FQAuADX/DgBRACf/MwBWACD/NAA1AA7/FwBAAPn+JgBhAPL+RwBRAOf+MwA5ANH+IgBWAMH+QgBpALz+UABMAKj+MABCAJb+IgBlAJH+PgB/AI/+WgBqAIH+QwBXAGn+HwBYAFz+AwBFAG7+7P8tAF3+3f8mAH/+uv81AIL+tv9RAJv+2P9KAKn+5P9sAJ3+w/+AAJ7+ov97AIz+pf97AGb+v/9tAE/+4f9zAF7++v+HAEr+FQCTAGL+GgCfAIb+LwC4AJj+OgC1AL3+OgDTANX+RwDRAPj+MgDZABf/OADZAD3/PQC0AEb/LgCpACT/LACqAP/+EwC5AOj+DQCsAMX+///AAKn+8P+mAJL+6v+xAG7+z/+cAF7+vP+aAD3+l/+cAEH+ff+YACX+af+4ACT+Tv+3AAr+PP+aAPn9Jf+QAN39Df9zANf9Gf9dALn9Cv8+AKv9Iv8hAKz9Kv/+/6D9Q//j/6r9TP/d/4b9Rv/m/2L9Pv/Q/0T9T//Y/yL9UP+6/wr9Qf+i/yP9Yf+m/zf9X/+z/1v9df/S/2H9fv/c/4X9kf/8/4/9tf/3/5f9sf8UAK/9k/8oALj9bv8hALH9Vv8kAJT9Pv9BAJf9Iv9PAIT9Ff9zAIL99P5mAHP9//5lAE/9JP9aAE79Ov9CAGD9XP9MAG39dv89AIL9hP9QAJ/9mv9OAL79h/9FAN39kf9iAPP9jf9/ANv9df+FAL79if+HAJ79dv91AIL9if9lAGb9f/9UAEf9ff8uAEz9mf8fADf9rf///zb9yf8QAEj9sv8YAGb9of/2/2n9qv/R/2f9l/+z/1v9jf+V/279cf99/2b9Uv+I/1T9MP+Z/1f9HP96/2P9Lv95/4X9L/+b/5X9EP+n/6f9B//L/579Hv/M/4D9E//n/2f9F//t/0H9L/8JADT9TP8MAB39cP8KACX9h/8fABD9pv8QAAH9wf8rAPv80v8VAOH8tP8TAMr8t/83ALv83P80ALf82P8WAKH8t/8jAJL8yP9DAIX8T//n/akAVP8I/pcAQP8c/n0AQ/85/mUAOP9a/nQANP9o/lAAKf+M/lMAGf+K/nYAJf+f/pQAHv/D/ogADv/b/p8ABv8A/6AAJ/8Q/64AFf8t/74A8/4+/8MA9f5W/6UA3P5V/4kA7P5T/2cA3f5M/0UA6P5H/yEADP9H/ysAK/8x/y0AOv82/08AXf8q/1oAYP8g/34AeP8M/5QAaf/4/rAAaP/U/r4AVv/B/qIAVf+c/poAbv+Y/n0AXf+M/l0AXv9o/lQAcP9g/nUAbP8//okAUv8//qUAUP8h/r0AMP8N/rgAIP/+/dcAAv/l/dgA5P7f/e8A2P68/eUA1/6Z/fQAFf/m/RABGv8E/icBQP8H/i0BUf8m/jkBYP85/hwBev9W/hwBa/94/hcBi/+H/gkBhf+q/vwAYP+l/vUASP+K/uoAMf+E/s4AFv9t/tcA+/5d/sMA4f5C/scAx/4v/rUApv4m/sUAhv4T/sEAfP4R/uYAjv4s/vgAqP4V/gkBw/4w/g0BuP5H/igB1v5Y/jYB+v5h/jsBFP9k/lYBMv98/lQBUP9//mwBcv9w/nQBa/9T/osBRf9R/osBRP9B/q4BOP9b/scBW/9o/swBV/+F/rQBOv+Z/qUBK/+J/ocBEf+W/m8B8/6A/mwB2f6D/lABuv5t/lEBm/5t/jsBgP5X/ksBXv5X/jgBV/58/jQBbv6L/k4Bkv6W/kcBp/6X/mYByf6n/moB3v6l/ooBA/+r/pIBBf+Z/rQBIv+D/sEBDP9l/rgBEv9C/sMBEP8v/qMBDf8J/qEBKv/z/ZcBF//w/XYB/v4N/nMB3f4G/mIBuP4O/mQBnv7z/WYBff70/VMBFP+x/ukB/f66/ssBA//c/rgB5/7Z/p4Bxf7J/pgBq/7M/nwBjP65/nMBdf6+/lQBnv4R/pUAhf4u/pMAlv5L/qYAuf5Z/qMAxP5v/sAA5f6B/rsA9/6V/tcAFv+p/twAJv+s/v4AQ//D/gQBVP/U/iIBYv/3/h4Bb/8J/z0BV//2/lQBOP/5/j4BKP/Z/jIBGf/h/hAB/v7L/gIB8v7L/t4A2v6y/s8Aw/6o/rMAp/6P/rAAnf6C/o4Ah/5l/oEAmv5I/nAAlP4n/l8As/4T/mQAvv75/X0A4v7v/XQA9v4P/ngA9v41/nkA4/5E/lsA+P5X/kIA7v58/j0A8v6e/kwA3/6v/mkA7P7L/n8A5/7K/qUA2v7o/rgA5f7w/twAzP7q/vgA3f7r/hkB/P77/ikBBP/v/k0BHv8D/2IBJ//k/nUBTf/q/nkBU//F/ngBc/+2/moBZv+b/lIBfv+B/kQBZ/9i/kIBQ/9b/jsBKv8//jsBB/85/i0B5/4s/j0B0f4R/i4Brf4G/jYBrP7h/TsBjv7K/ToByP4C/tcA7P4I/soA//4n/tEAHv84/sQAOv9L/tQAUf9j/sAAaf99/ssAa/+i/sEAif+0/rQAkv/Z/q4Ai//Y/okAgv/0/nMAYf/x/mEAUf8E/0UALP8E/04AEf8K/zQA8v4d/0AA1P4c/ykAuf43/yUAqP4t/0YAyf4u/1oAy/4I/1sA7f74/lcA5/7h/joAC//X/jIAL//Z/j4AU//V/jQAbf/F/ksAjP/a/kEApf++/ksAkv+h/jwApf+g/hsAtv+4/gEAlf+//vD/hf/K/hAAo//g/hcAnf/w/vX/eP/1/vz/gP8G/x4Am/8c/w4AhP8p//P/Z/8s/wwAUP8X//X/Qf/1/vH/Sf/2/sz/bP/2/r7/c/8C/5v/iv/w/oT/rv/6/ov/zP/5/qP/yP8J/8X/4f8R/+D/0P8G/wAA6v///hsADQD6/iUAIADa/iwANgDa/koASgC9/lgARQC7/n0AYAC0/pcAYACS/qgAcgCZ/skAggC3/tsApwC8/uAAsgDP/v8A1wDZ/gMB6ADr/h8BDAHq/iwBDwHM/kMBFwHg/mMBCwHV/oUBFgHz/poB+gAG/6sB+AAs/6oB/wA+/8wB3wBR/88B3gBJ//QB/gBd//gB7AB8/+oByQB5//kB0gBr/xwC8QCB/yAC+wCM/0MC+wCx/zgC8ADE/xkCAwHh/wsC9wAFAAsC5wASAOwBAgEtAOYBGgEQAOQBBgHy/9gBFgHR/9IBFwG//7ABHQGa/7IBJAGF/5MBEgFk/48BIgFN/3YBKwEp/24BDQEa/4AB6QAN/4AB0AAn/4kBsAAb/5gBmAA4/5gBewAk/6UBiAAn/8gBiQBN/8cBZwBQ/7UBVAA3/8oBYgBE/+sBSABY//8BYgBs/xECZACH//YBTgCm//cBUgCq/9IBYACX/7QBWwCt/5YBagCk/3QBbwC+/1gBhACp/0IBdQCG/z8BWQB0/1EBZQBj/3IBWABB/2gBbABA/0gBjQBF/1sBkAAf/18BkwAY/zoBpAA4/y8ByQA+/zYB4wBa/zgBBgFj/y8BCQFz/1IB8gB8/28B+gCZ/4cB6wCf/6kB6gDD/7QB5QDC/9oB3QDf//EBxQDv/wsCqwAJAAQCjAAYABYCawAFAA8CWQAhAPwBdwAjAOQBcwD//9cBXAAMALwBeQAhAK4BjwADAKUBgQD9/4IBiAAHAF4BdgAnAFQBdQA0AHgBggBVAIUBhgBjAKcBnwBrAMIBqwBHAMQBpgA9AJ8BuQBcAJQB0wBiALAB3wBBAL8B0wAjAKsBywAlAIYBvwAIAHABwAAIAEoBngAPADsBpADw/yYBrADc/0UBpwC3/0MBoQCl/2MBjgCk/4QBjQC6/6QBiQCl/8MBhAC1/+UBeQCt/wkCeADB/ykCkwC9/0MCgADN/18CiACv/3UCrQCv/2wCvQDQ/2ICpgDn/3YCsQDv/5sCuwAaAJcC0AAMAHoC5AAoAGsC+wAUAFYC5wAaADYC8QA4ACEC4wBEAAAC7ABgAOgB+ABAAGEB6gAbAGQB/AAGAHwBEQEjAIgBIAEgAKwBJQFDALkBPwE8ANUBCgHSABUCDgGtAAwC+wCXAPMB/wB6AAwC4gBwACIC2gBSADcC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rQEAAFMAtwHz/3YAnwHy/5QAhAHb/4gAdwHB/58AWwGo/6AAPQG8/64ALAGe/74ALgF4/8MAGAFt/6UAJgFZ/4kAIAFo/2cALgFe/0UALAFp/yEAGgGJ/ysAHgGv/y0AEgG6/08ACwHe/1oAEgHm/34AFwEEAJQAMQEBALAAUAESAL4AagEMAKIAigEeAJoAgQE1AH0AkwEtAF0AswFAAFQAsAFTAHUAzwFgAIkA3AFKAKUA9wFXAL0AGAJGALgALgI/ANcAUQIyANgAZgIbAO8AigIiAOUAqQIzAPQASAJCABABKwI2ACcBFgJWAC0B8gFWADkB2gFZABwBtAFhABwBngFDABcBgQFXAAkBZQFAAPwAfAEjAPUAnwEcAOoAsAELAM4A0gH//9cA7QHv/8MAEQLn/8cALwLZ/7UARwLB/8UAaAKv/8EAbwKo/+YATgKq//gAVQLM/wkBMQLW/w0BIgLA/ygBBALS/zYB6gHt/zsB2wECAFYBtwEQAFQBpQEoAGwBoQFNAHQBvgFWAIsB0wE1AIsB4QE9AK4B0QElAMcBtAE9AMwBnQErALQBmQEIAKUBsAEDAIcBsQHm/28B0wHX/2wB3QG//1ABAAKw/1EBEAKU/zsBMQKI/0sBQQJq/zgBJAJS/zQBDAJf/04B8QF4/0cB5gGK/2YBxgGf/2oBvgGy/4oBpgHP/5IBtAHa/7QBuQH+/8EB3gH7/7gB+QERAMMBCwIZAKMBLQIpAKEBMgJNAJcBPQI+AHYBMQIaAHMBSAIBAGIBUwLd/2QBeALU/2YBiAK3/1MBmAHb/+kBmwHD/8sBfAG3/7gBjAGg/54BqwGL/5gBtQFz/3wB1QFh/3MB3AFL/1QBXQLF/5UAUQKh/5MAMAKh/6YAEgK4/6MA+QG3/8AA2QHK/7sAvwHQ/9cAngHh/9wAlAHt//4AcQH7/wQBWgEBACIBNAH7/x4BHgH9/z0BOwHz/1QBRwHW/z4BawHY/zIBbAHH/xABjQG7/wIBkwGx/94AtAGo/88AyAGZ/7MA7AGN/7AA/QGL/44AIQKH/4EAMAKm/3AAUAKx/18AUQLW/2QAYwLt/30AWgIRAHQANAISAHgAEwL//3kADwLn/1sA9AHv/0IA2QHV/z0AuQHH/0wAtAGu/2kAlgGr/38AmQGn/6UAhQGN/7gAeQGT/9wAiwGA//gAggGP/xkBZAGi/ykBagGu/00BTAG6/2IBYgHS/3UBSgHw/3kBZwEIAHgBZAErAGoBggEuAFIBjQFPAEQBswFKAEIBywEuADsB8AEnADsBBgIMAC0BIQL2/z0BRALx/y4BXwLY/zYBgALq/zsBpALa/zoBVQLx/9cAPwINAMoAGgIOANEA/AEgAMQA3QEvANQAvgE3AMAAmgE+AMsAegEuAMEAWwE/ALQANwE0AK4AOwEvAIkAJwEZAHMAOwH+/2EAMgHm/0UARAHG/04ATAGs/zQATAGI/0AAWwFu/ykAUQFJ/yUAYwE//0YAUQFb/1oAcQFw/1sAbgGV/1cAhQGc/zoAfAHA/zIAaAHe/z4AWgEAADQAWgEeAEsAOQEuAEEARQFSAEsAZwFQADwAXgFhABsAQQFkAAEATAFEAPD/SgEwABAAKAE/ABcAHQEyAPX/KwEQAPz/GAEOAB4A+AAbAA4A+AAAAPP/BQHl/wwAIQHc//X/RwHh//H/QgHn/8z/MAEFAL7/IwEEAJv/JgEiAIT/DAE8AIv//gBWAKP/8QBLAMX/3wBdAOD/8QBUAAAA6gBtABsA3ACPACUA7wCvACwA5ADCAEoA8wDiAFgA9wDfAH0A8AD6AJcADQEKAagA/gAWAckA3AAVAdsAxQAzAeAArwAzAf8AlABNAQMBewBTAR8BagBzASwBhACFAUMBbgCBAWMBfQB8AYUBXgB3AZoBXABVAasBOwBBAaoBKAA+AcwBKAAYAc8BLwAcAfQBDgAtAfgB/f8OAeoBEQDxAPkBGAABARwC9f8RASAC5/8TAUMCx/8BATgCvP/uABkCmf/wAAsCgP/UAAsCff+/AOwBWf/JAOYBZf/tAOQBif/qANgBnv8JAdIBrf8SAbAByv8qAbIB2P86AZMB/v87AY8BCwBUAXYBJQBvAW4BQQBcAYABXgBDAYABVAAgAYkBbwALAZgBYQDoAJgBgQDYAKUBeADiAMgBVwDQAMcBZQCyALUBhACtAMoBcQCzAOsBbgCTAP8BTwCfABECNwCTAPYBJwBxAPcBIQByANIBKwCIALQBGgB4AJYBGwCJAHQBAQCBAFgBCgCeAEIBLwCjAD8BTQCTAFEBVgCmAHIBegCsAGgBcAC+AEgBXADYAFsBewDtAF8BfwDzADoBWwDyAC8BRAAPATYBHwAYATgBBQAyAS8B9v8sAVIB+f8TAW8B3f8MAYcB3//8AKkBwP/pALQBw//mANoBrv/QAPEBrP+0AAsCo/+PAAQCpf9uABYCxv9aAA8Ct/89APwBp/9WAOQByP9kANcBx/9KALwBp/9YAK4Btv96AKUBwv9xAIIBtv9zAF4Bo/9TAFQBmP9LAHgBdf9HAIUBZ/9CAKcBVP9UAMIBbf9xAMQBeP9yAJ8BVP9zAJQBQv+FALABWP+hAL8BeP+mAKsBe/+eAIYBmf+hAHABmf+iAEoBpP+BADsBvP+WACYByf+nAEUB6/+1AEMB//+5AGMBCQCpAIQB9v+eAKQBCgCkAMMB//+XAOUBCwCSAAkC+/+IACkC8P+hAEMC7P+IAF8CAgCeAHUC8P++AGwCy/+7AGICwv+dAHYCtv+iAJsCjP+VAJcCjv+uAHoCa/+xAGsCcf/QAFYCdv+8ADYCV/+1ACECVP+iAAACNv+dAOgBTf+3AGEBc/+9AGQBff/YAHwBWf/bAIgBVP/qAKwBM//cALkBLf/2ANUBxf59ABUC4/6UAAwCAP+OAPMBFv+gAAwCLv+LACICTf+UADcCa/+EAEgCdv+EAG0Cm/+DAGkCr/91AIcC1f9vAIoCzf9LAJMCuv9CAHMC4v84AEECxv80ACcCr/9GAD8Cxv9jAEYCwP+FADUC1f+PABcC3f+xAAkC3P+wAOQB5v/KAMsB3//FAKcB9P/ZAI8B4v/gAG8B+f/sAFMB7f/9ADMBBwD3ABgB8/8GAfsACgAaAeQAAwA9AfEAGABXAQUBJwBGASMBJQBVAUYBMgA5AVwBVQAuAVIBcAAaAWIBkgAkAXMBpQAlAVMBuwBCAUgBuABQASYB0wBWAQ0B2QBwAfIAyQBsAdEA3QBnAbEAzgBvAY8A1gBhAW0A6ABDAXoA3gAeAX8A1QAaAaQAxAADAbwAqAAYAcoAkAAWAegAdAAwAeoAXwAsAQkBZQAGAQkBYAACAeMAfgD0ANMAjADuALAAqQD1AJkAqwAQAX8AtgAyAXQApgBPAYYAoQBuAXAAjwCPAXEAbACOAWIAUACiAVUANQCLAWMAHACgAXUAEgCMAZMA8/+ZAaUA+v+jAckA6v+DAdcA/v9sAcAAHgBcAcwAJgBBAbMAIAA8AY4AHAAbAXwAIQALAVoADADxAEgAHwDVAFkAFgDlAHsAOwDtAIAARQAPAY0A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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI"},"red":{"n":120,"xyz":"lQD+/1MCRQBbAMz/AP8kAC/+pwB3/8n9Hv/tAY8AWv/5/ysBNQD5AOMB2/+a/yQC6f+e/kX/h/9vAdEAk/4WAM8AfwH3/+cAbwAMAdf+8/4HAicBk/+W/1UCdf/s/5IAkf+7//r9gv+1/80B3f5A/70AQv9n/n0Bg//VAP4BPf93/zD/kv6e/4sAEP+RAA4C0P5zANr/iv8dAG/9rwAc/9b+PAA2/4L/MP9h/+8ByQBDAYcAEgDCAGcA5v7b/9H+/P5cAa4AN//r/2L9o/87AUgAg/9wAKQB8/5+AC//fv/x/jEAK/+F/+T9hwCLACsA4P8fAZABxP7sAHD/CQCTANsBkQDk/3YBvf99AFcCYAD8/27+8P/UAEf+xP4oAGoAOwB2AZkA9f+8AGMB3gCa/xL/AwC6AEP/UwAM/2b+QP9j/0sBXQCaACIBw//9/usBXv8WAVsBgP67/yEBBwBn/3AASABYACH/MQKp/zwBBQCz/9H/AAHQANX/aP/8/97/yABqAOUBQwBw/2b9hP8LADH/MwC1/tr/+QBD/4QByf4S/icBof+KAOz9pgCDAJT9Pf+G/qkAxP9W/3oBaQBHAWwB1ACl//0BPgEZADEA9AEwAFsBHgEf/5kA7v+S/3/+k//P/rD/pgCWAIn+4f7N/zQBO//1ANb/XAGV/18A3/8SAe/+zQBA/xUB/gCsAEH/GQL6/54ASf93/4H+Kv+WAYUBdQC6/3gAXwBf/8MBvP9lABIBLgAmARIBBwENAKkBkQDJ/ocAgwDYABn+5wDM/iQBWAFaAI//mwHj/5IBwADtAGsA6/80//X9Jf/+/88BuP9F/2kCw/5C/pUAAAAAAML8JwCiAGD9kgCg/8//6f7B/mABxv6M/4kBogAfAOn9SQB5/wIB5ACe/17+sgA4AekAOQCV/xX/jP89AIf+9f4t/0IArv9WAE8AXwBTAKEA","kind":"BAAECAAECAAEAAAIAAAABAQAAAQIBAAIAAAICAAIAAQAAAAIAAQEAAgACAQICAAACAgIAAgAAAAAAAgACAgIBAQEBAQEBAAIBAAIBAgIBAQEAAAACAAECAgEAAgECAgEBAAECAgIBAAABAAICAQACAgICAgEBAQA","rad":"MjQ2MzEqKCMzLig0MTMlNispLDMrMSsfMS4yLSokLDM2MjApMDApKSMqJy8wMjUqMCUxLjQpKyorIzIwLjExNCs6MzItMzEuOiwsKzMwMS0uMSg1MCwsMToxODEqJCgrMTApMzAmMCIkMDA3KDEoLiwuKDEzKy4u"}},"echan":{"pdb":"5X29","full":{"n":290,"xyz":"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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA="},"red":{"n":45,"xyz":"Sv+QAPv/dADk/+D/xP9qAJH/CQCR/87/iQBJ/8f/fv9x/4P/7wCl//b/l//z/00AAQCN/2D/k//h/5H/owC+APT/vP+j/2MA0wBo/9j/Q/94//T/L/9PAJz/agBh/4L/l/8qANoA8ACW/8r/GwAa/+n/D//W/6X/FABx/2f/xP9z/94ATAAlAMIA+P9bAGMAPgBw/17/hf9yAFT/FACb/4z/OQDWAD0AGACd/ysAQQAo//z/RADA/4gAVgCWAJv/SQA5AB0Aq/8e/63/SwDL/wgB1P/tAND/UgAT/yAApgAFAHT/5AAMAEsA3QBSAMz/sv9MAAcA6QDW/xQA8v8M/7D/UABL/4P/ZAAz/zYA","kind":"CAQMAAAQAAwAEAQQAAwMAAgAEAwAEAQIAAwABAAQAAgIEAAIEAQABAwAEAAQ","rad":"IyIgHRwgFCQUJyAgFyAfFCcUFx8UHyAiEB8UHx0UIycjGh8kFCQcHyAaGhcU"}},"ncap":{"pdb":"6VYO","full":{"n":499,"xyz":"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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=="},"red":{"n":60,"xyz":"OwAPANcAoP9ZAHv/GADA/oL/HAB//xoBoP/1AH4A0/+F/8P/FwAR/8//WgDJ/yP/2f+QACEAfQCO/qgAAgCC/70ANADVAFv/0f8JAAb/u//FAEX/xP8bAef/RgCp/wYAk//6/ob/ZgDQ/j4AIwCf/1kAqf81/7sA2v8c/2L/yv/S/gYAdwC6/pAAKACHAMUAGAAb/7YAmf9W/zv/oQBp/xD/CgD1ACwALABp/0X/h/8b/9v/HQAMAcsAhQCNAPsAwf9g/x//fwAtAan/hQAkAV7/zP8BAP0A0v/L/1z/YP9R/8T/sv9J/6L/+P/JAMYAJwCWAPv+UAAW/1D/kP+m/6QABADi/i3/1f8kAJcAIQBd/67/PQAZAdr/vP81/00APgCqAHIAGwA2AEz/VgBTAB8A/f9A/wb/JQD9/ikAPAB7AJv/DgBBAX8AZQCy/7X/VABU/8EAjwCc/nUApP+fAM8Aef/GACgA","kind":"BAwABAgAAAwIAAQMDAwIBAAABAQAAAAIBAAMCAAACAQACAgEAAAACAwABAAEAAgECAwIAAAMCAAEAAgI","rad":"JCcdICQdIiIjECMjJyomIB0cJSMdJBcdIhwfJCMaICIaHBwlHxcaIicdKRoiHx8iIyQlFx8oHR0fFyMg"}},"rdrp":{"pdb":"6M71","full":{"n":1085,"xyz":"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TwDu/pAAYQDY/qgAWQDL/ssAeQDP/uAAfwDz/tUAWwD7/t4AYADq/gABgAD+/gcBbwAf//0AUgAU/xMBZwAP/zIBeAAw/yoBVgBB/ykBSwAw/0kBagA8/1oBXwBg/1gBPwBU/2gBTQBB/4YBbABX/4sBVAB0/5ABRwB2/7MBJwCG/78BGABz/6EBAABV/6QBCQA9/78BGAAb/7YBHAAH/9cB9v8D/9oB7v/3/rYBoP9i/3sBtP9L/5EBp/8s/34BvP83/2AB3P8u/3EBzP8N/34Bw/8C/1sB5v8O/04B9v/3/mgB3v/b/l4B6v/f/joBDgDg/kcBCgDA/loB+v+x/jsBGQC6/icBLwCm/kABUQCw/jUBcQCr/koBfQDP/kkBWwDf/lABUgDG/mwBdQDM/nsBcADy/noBTQDw/okBWQDX/qQBdQDw/q0BXwAO/64BRgD7/sMBWwAB/+MBaQAj/9sBiAAY/8gBgQAw/6sBmABD/5MBmgBp/5EBogBw/2wBlQBh/0wBpQA//0UBvwBD/ykBwQAu/woByQBW/4gBvAA6/58BtwA//8UBuAAm/+IB4f6eAOsAAv+NAOIABv+nAMUACf/BAOAAIv+rAPMAOP+nANQANv/MAMwAQv/UAO8AXf+6AO4Aav/HAMwAav/qANoAfP/gAPkAl//NAOUAm//qAM0An/8DAeoAuP/tAPwAzP/sANwAx/8RAdYA0/8eAfcA9f8NAfMAAAAZAdAAAQA/AcsAIgBPAdIAPABmAcIASgBKAa4AKQBAAZ0AIgBjAZIARgBpAYgAQwBLAXIAIQBSAWMAJgB3AVsAQwBwAUMALwBdASoAHgBnAQkA/P9uARcAAQBgAToA/v87AS8AGgAjATgAHAD9ADYAEADpAFQALwDTAFkARADyAGMALgAAAYAAOQDlAJkAXADkAIgAagAHAY4AUAAWAaYATAD7AMEAXgD+AOIAYgDZAOwAcAC7ANkAaQCWAOAAhAB/ANIAewBaANEAnQBIANMAmgAiAMwAvgAZANIA3gAnAOIA7gAwAMAA0QBHALcA1QBWANoA+gBeANQA9gBuALIA1gCAALsA0QCIAOAA9QCLAO0A+QCcAA4B6ADLAPQA3ADAANIA0QDVALQAsQDNAKEAmwDgAIgAtwD6AIcAswADAawAwwD6AM4AtADgAOUAxADPAAMBugCrAAsBpQCoACsBiwCTADwBlAByACwBeQBYADABeQAzACYBXQAdABkBTwAZADwBTgA+AEQBagA+AF0BgQBcAGEBogBPAFMBvQBmAGAB1wBwAEUB8QBeAFoB3QA9AFUB3wBAAC8BAQEzACcBEQEYABEBFQH9/ysB9AAEAD0B3wAHAB4B0ADj/x4BxQDo/0IBrAADADkBjQD8/yQBkgAMAAIBhQAhAPEAjABCAAQBeQBiAP8AjQCCAAMBegCiAAoBjgDBAAIBhgDmAAcBjgD/AOsArAAWAfMA","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg="},"red":{"n":90,"xyz":"EQC6/5r+N/8xAZQAQ//u/nwAAAGZ/8X/dwA6AOP+VQABAYr/of/+/pn/xQAHANX/0wBOANAAH/8UAGoAcwCV/2X/2/86AM/+VACP//8A8/4s/+T/fACAAID+3f9Q/4gAbwAaAEX/yv8///YA6wDAAK7/KQB/AKL/Cv+VALMADwEsAOL+f/+6/ikAmQDA/+b/cv9cAKIAFwH7/4j/kv9ZAYgAn/+bAAoA0/7m/lYAjP8JAQIAzv+0AFX/sP8ZAAwA2/+5/oAAWwD4AAwABQDI/7oAJv/E/qv/2QDoAN7/WADLACD/0gBwAGL/df/6/xf/fgDCALMADwCj/0kBBgC4/z3/YADw/qUBBQAd/8ABEABa/6b/KgBPANAADv+JABgAj/+0/tcAuv8gAHIAgwDlAHb+CwByAFIAqQAwADIBFADuAEEAo/92/8z/UABn/4sBY/+8AKf/pADB/9T+sADHAPoATQAdAGIAJv/G/7T/Yv/LAHgAHQBcAUwAPgD1/soA1QDC/1L/AAFBAD7+8P81ADn/Uf9a/3D/yv+j//j+MwAjAb0AzP8Y/2kB6QCrAF/+kAB+AKH/nP9Q/yP/nwA6/7IBrgDDAN3+zQCPACT/rv8SAKD/fgAu/ysBK/9WAJ//Hv8v/+QA//9J//r+/ACTAMH+OgDA/kcBLADs/9D/GACuANEA6v/ZAL3/1f/kAH8AwAA5AJf/k//oAOUA","kind":"AAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEAAgEAAAAAAAAAAgIAAQAAAgAAAAIBAAAAAAACAgAAAAIAAAABAAAAAAIAAAAAAAI","rad":"LhosHyggJxwnICImJSkjJyUrHSgnKCkiJyAmJiYjJyUlJSkkIiMaKSUjKCAdJiMsIyMnKDAkJSIjJCklJyMlKiAsIycdJSQgICgiHx0pJSkqHyMjKiAkIx8l"}},"ace2":{"pdb":"1R42","full":{"n":597,"xyz":"mwFgAJQAgQFGAJ8AbQEyAIUATwFDAJYAWAFoAJQAZQFjAHEARQFRAGkANAFvAHcASAGFAGAAQQFuAEIAHAFwAEoAHQGWAE4ALQGZACsAEgGBAB0A9ACUACoA/wC1ABsACQGmAPr/6gCPAPn/0gCqAAMA3QC/AOX/3gCjAMv/vQCWANb/rgC5ANP/uwC9AK//rgCbAKb/jACiALf/hwDDAKb/jwCzAIT/dQCYAIr/XACyAJX/YQDFAHT/WgCmAGD/OwCcAHT/LAC/AHL/NwDGAE7/PQCmADv/VwCyACH/cwCgAA7/jwC0AB3/fgCzAD//gACNAD7/pACRADT/rACpAFH/mwCRAGn/qwBwAF7/zQCAAF//yACRAIH/vABwAI3/2gBcAID/8QB1AJH/3wBtALL/4gBHAK3/BwFJAKX/DAFfAMT/+QBGANn/DwEqAMz/MAE6ANL/JQFEAPT/GQEhAPz/OQERAPH/TAErAAUAOQEmACYAQwEBACcAZAEOADUAVAEUAFcAUAHz/2sAKwHw/3QANQHe/5QAUAH4/54AMgEQAJ8AIAEbAL8ACQE5ALgA6gAmAKwA3gBFAJoA/gBEAIUA+wAfAIAA2AAjAHEA5QA8AFcABQEoAFEA7wAJAE8A2AAXADQA9gAiAB8ADQEDAB8A8gDt/xEAAAHd//D/4QDM/+P/5ADC/77/BgHR/7v/EQGz/8//CwGf/6//JAGa/5L/HgGy/3X/EAGW/1//9wCN/3r/7ACx/4L/6AC2/13/0gCX/1n/vgCg/3j/twDD/2v/rQC1/0n/lQCd/1r/hgC4/3D/gQDP/1H/cwCz/z3/WgCo/1f/UADM/1z/SgDT/zf/NgCz/y//IAC9/03/GgDg/0H/GADY/x3/CgC1/xv/5/+x/wz/zP+X/wb/tv+W/+f+kv+M/+L+jf9o/9b+cv9z/77+iP+Q/7L+rv+N/7L+sP+z/6v+nv++/8r+uf+9/+T+uv/L/wf/1f/V/x//0v/P/0T/zf/1/0n/s//+/z//n//j/y//pP/E/0P/ov/Z/2L/g//q/1b/c//I/1H/fv+4/3H/cP/W/4T/T//a/3L/Q/+7/1//KP+k/23/Lf+J/1P/PP9q/2H/S/9f/z//Wf+B/zX/av+F/1j/d/9i/1X/hf9p/zL/mP+H/z7/pf93/1//sv9X/03/v/9p/y7/1P+C/0P/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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE"},"red":{"n":65,"xyz":"RACzAPb/JABg/1//QP/GANj/6gBdAJ7/7gAxAHwANAASAMUAlQBj/5T/XQCcAGMAXv/W/oX/EQFCAM//av9XAH0AdP96/1oAfQCoAD3/5gCR/+z/ZwAp//T/U//v/ykALQEMAKgAdP9g/6v/AAGn/4D/r//U/6AAEgC6/xcAMgEoAAIAKv9z/wgAx//W/zP/9f7i//H/SwEBAFAAef/s/u//If+0AE8AygCvAO//CP9U/6z/nwCaAIv/Tv/W/4UAVP+W/1n/0//fAGMAqv+0/xMAwf9r/z//FgB8ALUAov+W/9D+CP9B/1AAvP+4AM3/9v4wAD8AdACk/2gAOAC+/33/jv8U/4z/ngDf/8QA5f9rADIAmQC1/1z/9f8FAGsAcAFOAJQADP+U/3QAQAFsAF8A9P94/4IAqv93AMUAdwBFAGYAFgBg/+7/BgC6AFD/HAAD/5j/uP8w//L/8gCMADUAJQAJAfb/q/+m/63/oACC/xgAY//J/8D/9QADACAASP8c/wEA","kind":"BAAAAAAEAAQEAAQAAAAEBAAAAAQEAAAAAAAEBAAAAAQAAAQABAAEAAQABAQABAAEAAQAAAQEBAAEBAAAAAAAAAA=","rad":"JCUnHB8lIiQXGiUgIiQiHxwcIh8gHB8lIBwaJyIiJR0kJyIiICMdLSYkJx0jJx8mHB0dIiolICckJCAiHCAgHR8="}}};
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
    const r = m.rad ? (m.rad[i] * .25 * .18 * NM * scale) : (.82 * NM * scale);
    S.add(v, r, colFn(grp, part, i));
  }
}
const qOut = (n, twist = 0) => {
  const q = new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), n.clone().normalize());
  if (twist) q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), twist));
  return q;
};

const caps = new THREE.Group(); cell.add(caps);
const SITES = { spike: [], membrane: [], mprot: [], echan: [], ncap: [], rna: [], ace2: [], hostmem: [], rdrp: [] };
const Y_VIR = 2.95, R_ENV = 4.35;

// Pleomorphic cryo-ET envelope shape: mild oblate compression + smooth 3D organic undulation
function envWave(d) {
  return 1
    + .032 * Math.sin(d.x * 3.1 + d.y * 2.4 - .5) * Math.cos(d.z * 2.9 + .8)
    + .021 * Math.sin(d.y * 5.2 - d.z * 3.7 + 1.1)
    + .014 * Math.cos(d.x * 6.3 + d.z * 5.8 - .4);
}
function envR(dir, dep = 0) {
  const d = dir.clone().normalize();
  const base = R_ENV * (1 - .035 * d.y * d.y) * envWave(d);
  return Math.max(.4, base - dep);
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

// Curved apical dome of a human airway epithelial cell below the docking virion
const R_HOST = 24.0, Y_HOST_APEX = -3.45, R_PATCH = 10.6;
function hostSurfY(x, z) {
  const r2 = x * x + z * z;
  const dome = Y_HOST_APEX - (R_HOST - Math.sqrt(Math.max(1, R_HOST * R_HOST - r2)));
  const undul = .075 * Math.sin(x * .72 + .4) * Math.cos(z * .68 - .3) + .04 * Math.sin((x - z) * 1.35);
  return dome + undul;
}
function hostNormal(x, z) {
  const e = .08;
  return V(hostSurfY(x - e, z) - hostSurfY(x + e, z), 2 * e, hostSurfY(x, z - e) - hostSurfY(x, z + e)).normalize();
}

function buildEnvelopeAndSpikes() {
  // Pleomorphic host-ER/ERGIC-derived viral lipid bilayer shell + dark inner leaflet backing
  const envMat = shellMat('membrane', '#c96d59', '#f6b397', '#7f3224', {
    atten: 1.35, thickness: .48, sheen: '#ffd9c7',
    extra: { clearcoat: .38, clearcoatRoughness: .28, envMapIntensity: .55, normalMap: bump(16, 16), normalScale: new THREE.Vector2(.32, .32) },
  });
  cell.add(shade(new THREE.Mesh(makeEnvGeo(0), envMat), true, true));
  cell.add(new THREE.Mesh(makeEnvGeo(.36, 64, 48), reg('membrane', phys({
    color: '#4e221d', roughness: .76, normalMap: bump(14, 14), normalScale: new THREE.Vector2(.2, .2), side: THREE.BackSide,
  }))));

  // Multi-layered cross-section rim along x = 0 (z >= 0) and z = 0 (x >= 0)
  const envOutline = (axis, dep, t) => {
    const a = (t - .5) * Math.PI, ca = Math.cos(a), sa = Math.sin(a);
    const dir = axis === 'x' ? V(0, sa, ca) : V(ca, sa, 0);
    return envPt(dir, dep);
  };
  const ENV_LAYERS = [
    [0, .075, '#f59f7e'],     // outer phospholipid polar headgroups
    [.075, .185, '#ffe3a1'],  // outer acyl chains + cholesterol
    [.185, .295, '#f2cc82'],  // inner acyl chains + cholesterol
    [.295, .365, '#e5866a'],  // inner phospholipid headgroups
  ];
  const M_LAYER = [[.365, .455, '#e8c476']]; // sub-membrane M endodomain matrix rim
  for (const ax of ['x', 'z']) {
    caps.add(capStripFromOutline('membrane', ax, envOutline, ENV_LAYERS, 180));
    caps.add(capStripFromOutline('mprot', ax, envOutline, M_LAYER, 180));
  }

  // Individual phospholipids & cholesterol packed cleanly along the cut faces (like bacterium_cell / animal_cell)
  const B_CUT_MEM = balls('membrane', caps, false);
  const cHeadOut = col('#f6a586'), cHeadIn = col('#e88b6e'), cTail1 = col('#ffe6a8'), cTail2 = col('#f5ce7e'), cChol = col('#ffd15c');
  for (const ax of ['x', 'z']) {
    for (let row = 0; row < 5; row++) {
      const behind = .016 + row * .042;
      const steps = 175;
      for (let i = 0; i <= steps; i++) {
        const a = (i / steps - .5) * Math.PI + rr(-.006, .006);
        const ca = Math.cos(a), sa = Math.sin(a), r = Math.max(.08, ca * R_ENV);
        const backAng = Math.asin(Math.min(.95, behind / r));
        const dir = ax === 'x'
          ? V(-Math.sin(backAng) * ca, sa, Math.cos(backAng) * ca)
          : V(Math.cos(backAng) * ca, sa, -Math.sin(backAng) * ca);
        dir.normalize();
        const pO = envPt(dir, .025), pMidO = envPt(dir, .165), pMidI = envPt(dir, .205), pI = envPt(dir, .345);
        const tang = across(randDir(), dir).multiplyScalar(.018);
        B_CUT_MEM.add(pO, .78 * NM, cHeadOut);
        B_CUT_MEM.stick(pO.clone().add(tang), pMidO.clone().add(tang), .085 * NM, cTail1, cTail2);
        B_CUT_MEM.stick(pO.clone().sub(tang), pMidO.clone().sub(tang), .085 * NM, cTail2, cTail1);
        B_CUT_MEM.add(pI, .74 * NM, cHeadIn);
        B_CUT_MEM.stick(pI.clone().add(tang), pMidI.clone().add(tang), .085 * NM, cTail2, cTail1);
        B_CUT_MEM.stick(pI.clone().sub(tang), pMidI.clone().sub(tang), .085 * NM, cTail1, cTail2);
        if (i % 5 === 2 && row < 3) B_CUT_MEM.add(envPt(dir, rr(.11, .26)), .62 * NM, cChol);
      }
    }
  }
  B_CUT_MEM.done();

  // Subtle surface raft glycolipids + dense internal Membrane (M) glycoprotein dimer lattice
  const B_MEM = balls('membrane', cell, true), B_M = balls('mprot', cell, true), B_ECH = balls('echan', cell, true), B_SPK = balls('spike', cell, true);
  const cM = [col('#f7d794'), col('#eab965'), col('#fce4b3')];
  const N_M = 1350;
  for (let i = 0; i < N_M; i++) {
    const y = 1 - 2 * (i + .5) / N_M, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = i * 2.3999632 + .18 * Math.sin(i * .37);
    const n = V(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize();
    const t1 = across(V(0, 1, 0), n).multiplyScalar(.042);
    // Dimeric M transmembrane bundle + globular C-terminal endodomain arch beneath inner leaflet
    const pTM1 = envPt(n, .22).add(t1), pTM2 = envPt(n, .22).sub(t1);
    const pEndo = envPt(n, .41);
    B_M.add(pEndo, .95 * NM, cM[i % 3]);
    B_M.stick(pTM1, pEndo, .11 * NM, cM[0], cM[1]);
    B_M.stick(pTM2, pEndo, .11 * NM, cM[1], cM[2]);
    if (i % 4 === 0) {
      const pRaft = envPt(n, .02);
      B_MEM.add(pRaft, .56 * NM, cHeadOut);
      if (SITES.membrane.length < 70 && !(pRaft.x > 0 && pRaft.z > 0)) SITES.membrane.push(pRaft);
    }
    if (SITES.mprot.length < 80 && !(pEndo.x > 0 && pEndo.z > 0)) SITES.mprot.push(pEndo);
  }

  // 16 pentameric Envelope (E) viroporin ion channels (PDB 5X29), including two right on the cut faces
  const eCols = ['#78e08f', '#58c97e', '#82ccdd', '#b8e994', '#38ada9'].map(col);
  const eDirs = [
    V(-.03, .62, .78).normalize(), V(.74, .48, -.03).normalize(),
    ...Array.from({ length: 14 }, (_, k) => {
      const y = .86 - 1.72 * (k + .5) / 14, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = k * 2.3999632 + 1.05;
      return V(Math.cos(phi) * r, y, Math.sin(phi) * r);
    }),
  ];
  eDirs.forEach((n, k) => {
    const p = envPt(n, .19);
    placeMol(B_ECH, 'echan', p, qOut(n, k * .7), g => eCols[g % 5], true, 1.08);
    if (!(p.x > 0 && p.z > 0)) SITES.echan.push(p);
  });

  // 38 club-shaped Spike (S) glycoprotein homotrimers (PDB 6VXX) with flexible hinged S2 coiled-coil stalks + N-linked glycan shields
  const spkCols = [col('#ff6b8b'), col('#ff8da6'), col('#ffa9bc')];
  const stalkCols = [col('#e55378'), col('#f27392'), col('#d9466b')];
  const glyCols = [col('#ffd6e6'), col('#ffc2d9'), col('#ffeaf2')];
  const m6vxx = model('spike', true);

  function addSpikeTrimer(nSurf, tiltDir, twist, scale = 1.02) {
    const pBase = envPt(nSurf, .22);          // transmembrane domain in viral bilayer
    const pNeck = envPt(nSurf, -.03);         // juxtamembrane hinge
    const stalkLen = .82 * scale;             // ~8 nm HR2 coiled-coil S2 stalk
    const pHeadBase = pNeck.clone().addScaledVector(tiltDir, stalkLen);
    const pHeadCenter = pHeadBase.clone().addScaledVector(tiltDir, .62 * scale);

    // Trimeric coiled-coil HR2 stalk + transmembrane anchor + stalk glycans
    const e1 = across(V(0, 1, .3), tiltDir), e2 = tiltDir.clone().cross(e1).normalize();
    for (let s = 0; s < 3; s++) {
      const a0 = twist + s * 2.0944;
      let prev = pBase.clone().addScaledVector(e1, Math.cos(a0) * .055).addScaledVector(e2, Math.sin(a0) * .055);
      const segs = 9;
      for (let j = 1; j <= segs; j++) {
        const f = j / segs, a = a0 + f * 1.15, rad = (.055 + .022 * Math.sin(f * Math.PI)) * scale;
        const basePt = f < .24 ? pBase.clone().lerp(pNeck, f / .24) : pNeck.clone().addScaledVector(tiltDir, (f - .24) / .76 * stalkLen);
        const cur = basePt.clone().addScaledVector(e1, Math.cos(a) * rad).addScaledVector(e2, Math.sin(a) * rad);
        B_SPK.stick(prev, cur, .12 * NM, stalkCols[s], stalkCols[(s + 1) % 3]);
        B_SPK.add(cur, .68 * NM, stalkCols[s]);
        if (j === 4 || j === 7) {
          const gOut = cur.clone().addScaledVector(e1, Math.cos(a) * .08).addScaledVector(e2, Math.sin(a) * .08);
          B_SPK.add(gOut, .58 * NM, glyCols[(s + j) % 3]);
          B_SPK.add(gOut.clone().add(randDir().multiplyScalar(.045)), .48 * NM, glyCols[s]);
        }
        prev = cur;
      }
    }

    // Full 2,916-residue prefusion S1/S2 ectodomain head (PDB 6VXX) + N-linked oligomannose/complex glycan tufts
    const q = qOut(tiltDir, twist);
    placeMol(B_SPK, 'spike', pHeadCenter, q, g => spkCols[g % 3], true, scale);
    const v = V(), kScale = .01 * NM * scale;
    for (let i = 28; i < m6vxx.n; i += 44) {
      v.set(m6vxx.xyz[i * 3], m6vxx.xyz[i * 3 + 1], m6vxx.xyz[i * 3 + 2]).multiplyScalar(kScale);
      const radialXY = Math.hypot(v.x, v.y);
      if (radialXY < .32) continue;
      const outLocal = V(v.x, v.y, v.z * .25).normalize();
      const gRoot = v.clone().applyQuaternion(q).add(pHeadCenter);
      const gDir = outLocal.applyQuaternion(q);
      const g1 = gRoot.clone().addScaledVector(gDir, .065);
      const g2 = g1.clone().addScaledVector(gDir, .055).add(randDir().multiplyScalar(.03));
      B_SPK.add(g1, .62 * NM, glyCols[i % 3]);
      B_SPK.add(g2, .52 * NM, glyCols[(i + 1) % 3]);
    }
    if (!(pHeadCenter.x > 0 && pHeadCenter.z > 0)) SITES.spike.push(pHeadCenter);
    return pHeadCenter;
  }

  // Two bottom Spike trimers actively engaging human ACE2 receptors at the docking cleft
  const dockTargets = [
    [V(-.28, -.94, -.10).normalize(), V(-1.25, -2.55, -.42)],
    [V(.06, -.94, -.31).normalize(), V(.22, -2.55, -1.42)],
  ];
  dockTargets.forEach(([n, aceTop], idx) => {
    const pNeck = envPt(n, -.03);
    const tilt = aceTop.clone().sub(pNeck).normalize();
    addSpikeTrimer(n, tilt, idx * 1.7 + .4, 1.03);
  });

  // 36 additional Spike trimers distributed organically with natural cryo-ET hinge sway (6-22 deg)
  const spkDirs = [];
  for (let tries = 0; tries < 2400 && spkDirs.length < 36; tries++) {
    const u = rr(-.88, .99), t = rr(0, Math.PI * 2), s = Math.sqrt(Math.max(0, 1 - u * u));
    const cand = V(s * Math.cos(t), u, s * Math.sin(t));
    if (cand.y < -.86) continue; // leave bottom contact zone clean for docked spikes
    if (spkDirs.some(d => d.angleTo(cand) < .43)) continue;
    spkDirs.push(cand);
  }
  spkDirs.forEach((n, k) => {
    const swayAxis = across(randDir(), n);
    const tiltAng = rr(.08, .34); // natural 5-20 deg S2 hinge flexion
    const tilt = n.clone().applyAxisAngle(swayAxis, tiltAng).normalize();
    addSpikeTrimer(n, tilt, rr(0, 6.283), rr(.98, 1.05));
  });

  B_MEM.done(); B_M.done(); B_ECH.done(); B_SPK.done();
}

function buildRnpAndGenome() {
  // Authentic cryo-ET "eggs-in-a-nest" vRNP packing: 38 cylindrical N-protein oligomers (PDB 6VYO)
  // arranged in a sub-membrane shell + inner core, threaded by hairpin-rich 29.9 kb (+)ssRNA
  const B_N = balls('ncap', cell, true), B_RNA = balls('rna', cell, true), B_RNA_INJ = balls('rna', cell, false);
  const nCols = ['#63cdda', '#3dc1d3', '#82e0e8', '#48b3c7'].map(col);

  const rnpCenters = [];
  // Outer sub-membrane shell of 28 vRNPs tethered to M-protein endodomains
  for (let k = 0; k < 28; k++) {
    const y = 1 - 2 * (k + .5) / 28, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = k * 2.3999632 + .4;
    const dir = V(Math.cos(phi) * r, y, Math.sin(phi) * r);
    const rad = envR(dir, 1.28) * rr(.93, 1.04);
    rnpCenters.push({ p: dir.clone().multiplyScalar(rad).add(V(0, Y_VIR, 0)), dir });
  }
  // Inner core cluster of 12 vRNPs filling the virion lumen
  for (let k = 0; k < 12; k++) {
    const y = 1 - 2 * (k + .5) / 12, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = k * 2.3999632 + 1.3;
    const dir = V(Math.cos(phi) * r, y, Math.sin(phi) * r);
    rnpCenters.push({ p: dir.clone().multiplyScalar(1.38 * rr(.88, 1.12)).add(V(0, Y_VIR, 0)), dir });
  }

  // Order vRNPs into a smooth 3D tour so the 29.9 kb (+)ssRNA winds continuously from bead to bead
  const ordered = [rnpCenters[0]];
  const used = new Set([0]);
  while (ordered.length < rnpCenters.length) {
    const last = ordered[ordered.length - 1].p;
    let best = -1, bestD = 1e9;
    for (let i = 0; i < rnpCenters.length; i++) {
      if (used.has(i)) continue;
      const d = last.distanceTo(rnpCenters[i].p);
      if (d < bestD) { bestD = d; best = i; }
    }
    used.add(best); ordered.push(rnpCenters[best]);
  }

  const guide = [];
  ordered.forEach((o, k) => {
    const axis = o.dir.clone().add(randDir().multiplyScalar(.35)).normalize();
    placeMol(B_N, 'ncap', o.p, qOut(axis, k * .9), g => nCols[g % 4], true, 1.12);
    // Helical RNA wrap around each N-oligomer barrel before bridging to the next bead
    const e1 = across(V(0, 1, 0), axis), e2 = axis.clone().cross(e1).normalize();
    for (let s = 0; s < 7; s++) {
      const a = s * 1.15 + k, h = (s - 3) * .065;
      guide.push(o.p.clone().addScaledVector(axis, h).addScaledVector(e1, Math.cos(a) * .34).addScaledVector(e2, Math.sin(a) * .34));
    }
    if (!(o.p.x > 0 && o.p.z > 0)) { SITES.ncap.push(o.p); SITES.rna.push(o.p); }
  });
  const denseRna = new THREE.CatmullRomCurve3(guide).getPoints(780);
  rnaAlong(B_RNA, denseRna, MRNA);

  // Secondary-structure 5'/3' UTR & frameshift RNA stem-loop hairpins in the lumen
  for (let h = 0; h < 10; h++) {
    const base = ordered[(h * 4) % ordered.length].p;
    rna.rnaFold(B_RNA, base.clone().add(randDir().multiplyScalar(.28)), randDir(), 26, MRNA, { nm: NM, hairpin: .45 });
  }
  B_N.done(); B_RNA.done();

  // Uncoating (+)ssRNA strand threading through the fusion neck into the airway cytoplasm toward the DMV RdRp complex
  const injPath = [
    V(-.45, .55, -.35), V(-.48, -.85, -.38), V(-.52, -2.25, -.42), V(-.58, -3.55, -.46),
    V(-.88, -4.55, -.68), V(-1.38, -5.28, -.92), V(-1.85, -5.75, -1.18),
  ];
  rnaAlong(B_RNA_INJ, new THREE.CatmullRomCurve3(injPath).getPoints(175), MRNA);
  B_RNA_INJ.done();
}

function buildHostAndReplication() {
  // Curved human respiratory epithelial apical plasma membrane dome + microvilli + cutaway cross-section
  function makeHostDomeGeo(dep = 0, radSeg = 96, ringSeg = 44) {
    const pos = [], idx = [];
    for (let j = 0; j <= ringSeg; j++) {
      const r = (j / ringSeg) * R_PATCH;
      for (let i = 0; i <= radSeg; i++) {
        const a = (i / radSeg) * Math.PI * 2, x = r * Math.cos(a), z = r * Math.sin(a);
        const n = hostNormal(x, z);
        const p = V(x, hostSurfY(x, z), z).addScaledVector(n, -dep);
        pos.push(p.x, p.y, p.z);
      }
    }
    for (let j = 0; j < ringSeg; j++) {
      for (let i = 0; i < radSeg; i++) {
        const a = j * (radSeg + 1) + i, b = a + radSeg + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx); g.computeVertexNormals();
    return g;
  }

  const hostMat = shellMat('hostmem', '#6c5ce7', '#a89eff', '#483a9e', {
    atten: 1.5, thickness: .52, sheen: '#dcd6ff',
    extra: { roughness: .38, clearcoat: .18, clearcoatRoughness: .35, envMapIntensity: .34, normalMap: bump(20, 20), normalScale: new THREE.Vector2(.28, .28) },
  });
  cell.add(shade(new THREE.Mesh(makeHostDomeGeo(0), hostMat), false, true));
  cell.add(new THREE.Mesh(makeHostDomeGeo(.36, 72, 32), reg('hostmem', phys({
    color: '#342b6e', roughness: .82, envMapIntensity: .25, side: THREE.BackSide,
  }))));

  // Host plasma-membrane cutaway rim on x = 0 (z >= 0) and z = 0 (x >= 0)
  const hostOutline = (axis, dep, t) => {
    const r = t * R_PATCH, x = axis === 'x' ? 0 : r, z = axis === 'x' ? r : 0;
    const n = hostNormal(x, z);
    return V(x, hostSurfY(x, z), z).addScaledVector(n, -dep);
  };
  const HOST_LAYERS = [
    [0, .08, '#b5adff'],     // apical glycocalyx & outer headgroups
    [.08, .20, '#e8dff5'],   // outer acyl chains + raft sphingolipids
    [.20, .31, '#d2c6eb'],   // inner acyl chains
    [.31, .38, '#9184f0'],   // inner cytoplasmic headgroups
  ];
  for (const ax of ['x', 'z']) caps.add(capStripFromOutline('hostmem', ax, hostOutline, HOST_LAYERS, 140));

  // Cut-edge molecular phospholipids along the curved airway plasma membrane cut faces
  const B_CUT_HM = balls('hostmem', caps, false);
  const cHOut = col('#b2a9ff'), cHIn = col('#8c7ef0'), cHT1 = col('#ede7fa'), cHT2 = col('#cfc4eb');
  for (const ax of ['x', 'z']) {
    for (let row = 0; row < 4; row++) {
      const behind = .018 + row * .045;
      for (let i = 1; i <= 150; i++) {
        const r = (i / 150) * (R_PATCH - .15);
        const x = ax === 'x' ? -behind : r, z = ax === 'x' ? r : -behind;
        const n = hostNormal(x, z), base = V(x, hostSurfY(x, z), z);
        const pO = base.clone().addScaledVector(n, -.025), pM = base.clone().addScaledVector(n, -.19), pI = base.clone().addScaledVector(n, -.35);
        const tang = (ax === 'x' ? V(0, 0, 1) : V(1, 0, 0)).multiplyScalar(.016);
        B_CUT_HM.add(pO, .76 * NM, cHOut);
        B_CUT_HM.stick(pO.clone().add(tang), pM.clone().add(tang), .08 * NM, cHT1, cHT2);
        B_CUT_HM.stick(pO.clone().sub(tang), pM.clone().sub(tang), .08 * NM, cHT2, cHT1);
        B_CUT_HM.add(pI, .72 * NM, cHIn);
        B_CUT_HM.stick(pI.clone().add(tang), pM.clone().add(tang), .08 * NM, cHT2, cHT1);
      }
    }
  }
  B_CUT_HM.done();

  const B_HM = balls('hostmem', cell, true), B_ACE2 = balls('ace2', cell, false), B_RDRP = balls('rdrp', cell, false);

  // Curved airway epithelial microvilli & sub-membrane cortical F-actin filaments
  const cActin = [col('#8578e6'), col('#9c90f5')];
  for (let f = 0; f < 26; f++) {
    const a0 = rr(0, Math.PI * 2), r0 = rr(.8, R_PATCH - 1.2), a1 = a0 + rr(-.7, .7), r1 = rr(.8, R_PATCH - 1.2);
    const steps = 32;
    let prev = null;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps, x = THREE.MathUtils.lerp(r0 * Math.cos(a0), r1 * Math.cos(a1), t), z = THREE.MathUtils.lerp(r0 * Math.sin(a0), r1 * Math.sin(a1), t);
      const q = V(x, hostSurfY(x, z) - rr(.46, .62), z);
      B_HM.add(q, .56 * NM, cActin[s & 1]);
      if (prev) B_HM.stick(prev, q, .09 * NM, cActin[0], cActin[1]);
      prev = q;
      if (s === 16 && !(q.x > 0 && q.z > 0) && SITES.hostmem.length < 50) SITES.hostmem.push(q.clone().add(V(0, .45, 0)));
    }
  }
  // 360-deg apical epithelial phospholipid headgroups & mucosal glycocalyx brush
  const cGlyco1 = col('#c4bcff'), cGlyco2 = col('#9fe8df');
  for (let i = 0; i < 1650; i++) {
    const f = (i + .5) / 1650, r = Math.sqrt(f) * (R_PATCH - .35), a = i * 2.3999632;
    const x = r * Math.cos(a), z = r * Math.sin(a), n = hostNormal(x, z), p0 = V(x, hostSurfY(x, z), z);
    B_HM.add(p0, .74 * NM, cHOut);
    if (i % 4 === 0 && r > 1.7) {
      const p1 = p0.clone().addScaledVector(n, .10), p2 = p0.clone().addScaledVector(n, .21).add(V(rr(-.04, .04), 0, rr(-.04, .04)));
      B_HM.stick(p0, p2, .065 * NM, cGlyco1, cGlyco2);
      B_HM.add(p1, .56 * NM, cGlyco1); B_HM.add(p2, .52 * NM, cGlyco2);
    }
  }

  // Organic curved airway microvilli (slender membrane fingerlets coated in phospholipids/glycocalyx with bundled F-actin cores)
  for (let m = 0; m < 18; m++) {
    const a = m * 2.3999632 + .4, r = rr(5.2, 9.5);
    const x = r * Math.cos(a), z = r * Math.sin(a);
    const n = hostNormal(x, z), root = V(x, hostSurfY(x, z), z);
    const mvH = rr(1.05, 1.85), mvR = .145;
    const sway = across(randDir(), n);
    const mvCurve = new THREE.CatmullRomCurve3([
      root.clone().addScaledVector(n, -.28),
      root.clone().addScaledVector(n, mvH * .52).addScaledVector(sway, .14),
      root.clone().addScaledVector(n, mvH).addScaledVector(sway, .26),
    ]);
    const mvFrames = mvCurve.computeFrenetFrames(18, false);
    for (let s = 2; s <= 18; s++) {
      const t = s / 18, pt = mvCurve.getPoint(t), rad = mvR * (t > .86 ? Math.sqrt(Math.max(.08, 1 - ((t - .86) / .14) ** 2)) : 1);
      // Bundled F-actin core filaments
      B_HM.add(pt, .58 * NM, cActin[s & 1]);
      if (s > 2) B_HM.stick(mvCurve.getPoint((s - 1) / 18), pt, .10 * NM, cActin[0], cActin[1]);
      // Surrounding phospholipid + glycocalyx sheath beads
      for (let k = 0; k < 7; k++) {
        const th = k * (Math.PI * 2 / 7) + s * .45;
        const surfP = pt.clone().addScaledVector(mvFrames.normals[s], Math.cos(th) * rad).addScaledVector(mvFrames.binormals[s], Math.sin(th) * rad);
        B_HM.add(surfP, .68 * NM, k % 3 === 0 ? cGlyco1 : cHOut);
      }
    }
  }

  // Full-length homodimeric human ACE2 receptors (PDB 1R42 peptidase ectodomain + collectrin neck + TM helices) + TMPRSS2 protease
  const aceCols = [col('#7fe0ff'), col('#48dbfb'), col('#a8ecff')];
  const tmprssCols = [col('#b8a8ff'), col('#d1c4ff')];
  const aceCoords = [
    [-1.25, -.42, true], [.22, -1.42, true], [-3.55, -.75, false], [-.75, -3.65, false], [-2.75, -2.55, false], [-4.8, -2.8, false],
  ];
  aceCoords.forEach(([ax, az, docked], idx) => {
    const surf = V(ax, hostSurfY(ax, az), az), n = hostNormal(ax, az);
    const e1 = across(V(1, 0, .3), n);
    const headPos = surf.clone().addScaledVector(n, .72);
    // Dimeric collectrin-like neck & transmembrane stalks anchoring ACE2 into the epithelial bilayer
    for (const sideSgn of [-1, 1]) {
      const tmBot = surf.clone().addScaledVector(n, -.36).addScaledVector(e1, sideSgn * .11);
      const neckMid = surf.clone().addScaledVector(n, .26).addScaledVector(e1, sideSgn * .09);
      const headBase = surf.clone().addScaledVector(n, .52).addScaledVector(e1, sideSgn * .12);
      B_ACE2.stick(tmBot, neckMid, .13 * NM, aceCols[1], aceCols[0]);
      B_ACE2.stick(neckMid, headBase, .15 * NM, aceCols[0], aceCols[2]);
      B_ACE2.add(neckMid, .85 * NM, aceCols[2]);
    }
    placeMol(B_ACE2, 'ace2', headPos, qOut(n, idx * 1.15), g => aceCols[g % 2], true, 1.08);
    SITES.ace2.push(headPos);

    // Adjacent TMPRSS2 transmembrane serine protease priming S2' at the docked receptors
    if (docked) {
      const pTmp = surf.clone().addScaledVector(e1, .48).addScaledVector(n, .28);
      B_ACE2.stick(surf.clone().addScaledVector(e1, .48).addScaledVector(n, -.34), pTmp, .12 * NM, tmprssCols[0], tmprssCols[1]);
      for (let b = 0; b < 18; b++) B_ACE2.add(pTmp.clone().add(randDir().multiplyScalar(.16)), .72 * NM, tmprssCols[b & 1]);
    }
  });

  // ER-derived Double-Membrane Vesicle (DMV) replication organelle in the host airway cytoplasm
  // housing viral dsRNA + RdRp holoenzymes (nsp12-nsp7-2xnsp8, PDB 6M71) + surrounding host ribosomes
  const dmvCenter = V(-2.05, -6.05, -1.55), R_DMV_OUT = 1.38, R_DMV_IN = 1.14;
  const dmvGroup = new THREE.Group(); cell.add(dmvGroup);
  const dmvCutPlane = new THREE.Plane(V(.68, .22, .70).normalize(), 0);
  dmvCutPlane.constant = -dmvCutPlane.normal.dot(dmvCenter) + .12;
  const dmvMatOut = reg('hostmem', new THREE.MeshPhysicalMaterial({
    color: '#7c6cf0', roughness: .35, transparent: true, opacity: .52, side: THREE.DoubleSide,
    clippingPlanes: [dmvCutPlane],
  }));
  const dmvMatIn = reg('hostmem', new THREE.MeshPhysicalMaterial({
    color: '#5748b8', roughness: .55, transparent: true, opacity: .68, side: THREE.DoubleSide,
    clippingPlanes: [dmvCutPlane],
  }));
  dmvGroup.add(new THREE.Mesh(new THREE.SphereGeometry(R_DMV_OUT, 40, 32).translate(dmvCenter.x, dmvCenter.y, dmvCenter.z), dmvMatOut));
  dmvGroup.add(new THREE.Mesh(new THREE.SphereGeometry(R_DMV_IN, 36, 28).translate(dmvCenter.x, dmvCenter.y, dmvCenter.z), dmvMatIn));

  // Molecular lipid rim on the sliced DMV double membrane + hexameric nsp3 crown pore at the DMV apex
  const dmvN = dmvCutPlane.normal.clone(), dmvU = across(V(0, 1, 0), dmvN), dmvV = dmvN.clone().cross(dmvU).normalize();
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    for (const rrD of [R_DMV_OUT, R_DMV_IN]) {
      const p = dmvCenter.clone().addScaledVector(dmvU, Math.cos(a) * rrD).addScaledVector(dmvV, Math.sin(a) * rrD);
      B_HM.add(p, .62 * NM, cHOut);
    }
  }
  const poreTop = dmvCenter.clone().add(V(.22, R_DMV_OUT - .06, .18));
  for (let k = 0; k < 6; k++) {
    const a = k * 1.0472;
    B_RDRP.add(poreTop.clone().add(V(Math.cos(a) * .22, .08, Math.sin(a) * .22)), .95 * NM, col('#e77f9c'));
  }

  // RdRp replicase-transcriptase holoenzymes (PDB 6M71) inside & beside the DMV synthesizing nested subgenomic mRNAs
  const rdrpCols = [col('#cf6a87'), col('#f8a5c2'), col('#f78fb3'), col('#e66767')];
  const rdrpSpots = [
    dmvCenter.clone().add(V(.22, .42, .20)),
    dmvCenter.clone().add(V(-.38, -.18, .32)),
    dmvCenter.clone().add(V(.36, -.42, -.24)),
    V(-3.65, -5.65, -.95),
  ];
  rdrpSpots.forEach((p, idx) => {
    placeMol(B_RDRP, 'rdrp', p, qOut(V(.35, 1, .25).normalize(), idx * 1.4), g => rdrpCols[g % 4], true, 1.12);
    SITES.rdrp.push(p);
    const sgPts = [];
    for (let k = 0; k < 30; k++) {
      sgPts.push(p.clone().add(V(-.075 * k + .04 * Math.sin(k * .5), -.03 * Math.cos(k * .6) + .018 * k, -.055 * k)));
    }
    rnaAlong(B_RDRP, sgPts, '#78e08f');
  });

  // Host cytosolic ribosomes translating newly exported viral subgenomic mRNAs around the DMV
  const riboSpots = [V(-4.1, -5.85, -1.55), V(-3.35, -6.35, -2.55), V(-1.05, -5.65, -3.15)];
  const cRibo60 = col('#9b8cf2'), cRibo40 = col('#c4baff');
  riboSpots.forEach(rp => {
    for (let b = 0; b < 42; b++) B_HM.add(rp.clone().add(randDir().multiplyScalar(.24)), .78 * NM, cRibo60);
    for (let b = 0; b < 26; b++) B_HM.add(rp.clone().add(V(.18, .16, .08)).add(randDir().multiplyScalar(.17)), .68 * NM, cRibo40);
  });

  B_HM.done(); B_ACE2.done(); B_RDRP.done();
}

const MOL = {
  ace2sig: ['ACE2–Spike docking', '#7fe0ff', 'hex', .22],
  vrna: ['Genomic (+)ssRNA', '#ffb35c', 'wave', .24],
  sgrna: ['Subgenomic mRNA', '#78e08f', 'wave', .22],
  nprot: ['New N & S proteins', '#ff6b8b', 'blob', .22],
};

function glyph(g, kind, x, y, s, hex) {
  const c = x + s / 2, m = y + s / 2, r = s * .38;
  g.save(); g.fillStyle = hex; g.strokeStyle = '#101522'; g.lineWidth = s * .08; g.lineJoin = g.lineCap = 'round';
  const dot = (px, py, rad) => { g.beginPath(); g.arc(px, py, rad, 0, 6.283); g.fill(); g.stroke(); };
  if (kind === 'hex') { g.beginPath(); for (let k = 0; k < 6; k++) { const a = k * 1.0472 - .5236; g[k ? 'lineTo' : 'moveTo'](c + Math.cos(a) * r, m + Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke(); }
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
  { rate: 1.4, acc: .3, go: () => {
    const ace = SITES.ace2[Math.floor(rand() * SITES.ace2.length)];
    emitFlow('ace2sig', [ace.clone().add(V(0, 1.2, 0)), ace.clone(), ace.clone().add(V(0, -.7, 0))], ['spike', 'ace2', 'hostmem'], 2.4);
  }},
  { rate: 1.8, acc: .7, go: () => {
    const rdrp = SITES.rdrp[Math.floor(rand() * SITES.rdrp.length)];
    emitFlow('vrna', [V(-.5, 3.2, -.5), V(-.2, .2, -.2), V(-.2, -2.5, -.2), V(-.3, -4.2, -.2), rdrp.clone()], ['ncap', 'rna', 'rdrp'], 3.5);
  }},
  { rate: 1.6, acc: .5, go: () => {
    const rdrp = SITES.rdrp[Math.floor(rand() * SITES.rdrp.length)];
    emitFlow('sgrna', [rdrp.clone(), rdrp.clone().add(V(rr(-2.2, -.5), rr(-.8, -.2), rr(-2.2, -.5)))], ['rdrp', 'rna'], 2.6);
  }},
  { rate: 1.3, acc: .2, go: () => {
    const rdrp = SITES.rdrp[Math.floor(rand() * SITES.rdrp.length)], spk = SITES.spike[Math.floor(rand() * SITES.spike.length)];
    emitFlow('nprot', [rdrp.clone().add(V(-1.0, -.4, -1.0)), V(-2.5, -1.5, -1.5), spk.clone()], ['rdrp', 'spike', 'ncap'], 3.2);
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
  k.innerHTML = `<div class="row">RNA bases ${'AUGC'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>`
    + `<div class="row"><span class="bar" style="background:${MRNA}"></span>(+)ssRNA genome <span class="bar" style="background:#78e08f;margin-left:6px"></span>sgmRNA</div>`;
  legend.append(k);
}

const tipBox = document.getElementById('tip'), TIP0 = 'SARS-CoV-2 Spike trimers (PDB 6VXX) bind host ACE2 receptors (PDB 1R42) to deliver the 29.9 kb (+)ssRNA–nucleocapsid (PDB 6VYO) genome, replicated by RdRp (PDB 6M71).';
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
  ['virion', V(21.5, 3.0, 24.5), V(0, .35, 0)],
  ['spike', V(8.2, -1.4, 9.2), V(-.75, -2.35, -.55)],
  ['rnp', V(8.2, 3.8, 9.2), V(-.4, 2.95, -.4)],
  ['replication', V(8.2, -4.2, 9.2), V(-1.85, -5.75, -1.25)],
];
let view = 0, motion = true, sway = 0, last = performance.now();

document.getElementById('view').onclick = e => { view = (view + 1) % VIEWS.length; const [name, p, t] = VIEWS[view]; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone())); e.target.textContent = `View: ${name}`; };
document.getElementById('look').onclick = e => { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); e.target.textContent = `Envelope: ${organelleLook}`; };
document.getElementById('cut').onclick = e => { cutOn = !cutOn; caps.visible = cutOn; e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; };
document.getElementById('flow').onclick = e => { flowsOn = !flowsOn; flowPts.visible = flowsOn; e.target.textContent = `Infection: ${flowsOn ? 'on' : 'off'}`; };
const speed = document.getElementById('speed'), spd = document.getElementById('spd');
speed.oninput = () => { flowSpeed = 2 ** +speed.value; spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`; };
speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
document.getElementById('motion').onclick = e => { motion = !motion; e.target.textContent = motion ? 'Pause' : 'Play'; };
document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'sars-cov-2-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

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
const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0, .5, 0);
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
    spike: [P.spike, 2.8], membrane: [P.membrane, 3.4], mprot: [P.mprot, 2.8],
    echan: [P.echan, 2.4], ncap: [P.ncap, 2.8], rna: [P.rna, 2.6],
    ace2: [P.ace2, 2.4], hostmem: [P.hostmem, 3.2], rdrp: [P.rdrp, 2.2],
  };
  if (!AT[key]) return FOCUS[key] = null;
  const [c, r] = AT[key];
  return FOCUS[key] = { c: c.clone(), r, dir: d0.clone() };
}
const KIN = { membrane: ['mprot', 'echan', 'spike'], ncap: ['rna'] };
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
  buildEnvelopeAndSpikes();
  buildRnpAndGenome();
  buildHostAndReplication();
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
    spike: SITES.spike[2] ?? V(-4.4, 6.2, 1.4), membrane: V(-4.2, 3.1, -.25), mprot: V(-3.6, 4.6, -.9),
    echan: SITES.echan[0] ?? V(-.05, 5.5, 3.2), ncap: SITES.ncap[2] ?? V(-1.6, 3.5, -1.2), rna: SITES.rna[4] ?? V(-.9, 2.4, -1.5),
    ace2: SITES.ace2[0] ?? V(-1.25, -2.75, -.42), hostmem: V(-4.2, -3.9, -.6), rdrp: SITES.rdrp[0] ?? V(-1.85, -5.65, -1.35),
  };
  if (vName === 'spike') P = {
    spike: SITES.spike[0] ?? V(-1.2, -1.85, -.42), ace2: SITES.ace2[0] ?? V(-1.25, -2.75, -.42), membrane: V(-2.7, -.75, -.4),
    mprot: V(-2.1, -.45, -1.1), echan: SITES.echan[1] ?? V(3.0, 4.8, -.1), hostmem: V(-3.1, -3.75, -.5),
  };
  if (vName === 'rnp') P = {
    ncap: SITES.ncap[2] ?? V(-1.5, 3.6, -1.1), rna: SITES.rna[4] ?? V(-.8, 2.7, -1.4), membrane: V(-4.2, 3.1, -.25),
    mprot: V(-3.7, 4.4, -.8), spike: SITES.spike[2] ?? V(-4.6, 5.6, 1.2),
  };
  if (vName === 'replication') P = {
    rdrp: SITES.rdrp[0] ?? V(-1.85, -5.65, -1.35), rna: V(-1.45, -5.3, -.95), ace2: SITES.ace2[0] ?? V(-1.25, -2.75, -.42), hostmem: V(-3.1, -3.8, -.6),
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
