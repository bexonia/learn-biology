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
import {
  runBiologyApp,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
} from '../index.js';

runBiologyApp(20261107, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');
  const UP = geometry.UP;
const rand = random.rand;
const rr = (a, b) => a + (b - a) * rand();
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const randDir = () => { const u = rr(-1, 1), t = rr(0, Math.PI * 2), s = Math.sqrt(1 - u * u); return V(s * Math.cos(t), u, s * Math.sin(t)); };
const across = geometry.across;

function waveNormalMap(size = 256, waves = 24, strength = 2.4) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d'), img = g.createImageData(size, size), h = new Float32Array(size * size);
  const W = Array.from({ length: waves }, () => ({ fx: Math.round(rr(-10, 10)), fy: Math.round(rr(-10, 10)), ph: rr(0, 6.283), a: rr(.3, 1) }));
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) { let s = 0; for (const w of W) s += w.a * Math.sin((w.fx * x + w.fy * y) / size * 6.2832 + w.ph); h[y * size + x] = s; }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = h[y * size + (x + 1) % size] - h[y * size + (x - 1 + size) % size], dy = h[((y + 1) % size) * size + x] - h[((y - 1 + size) % size + x)];
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
  gr.addColorStop(0, '#13243a'); gr.addColorStop(.52, '#070f1d'); gr.addColorStop(1, '#020409'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, .1, 400); camera.position.set(24.5, 2.5, 27.5);
const controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, .2, 0); controls.enableDamping = true; controls.minDistance = .5; controls.maxDistance = 95; controls.panSpeed = .5; controls.zoomSpeed = .5;
scene.add(new THREE.HemisphereLight('#dff3ff', '#1b2838', .54));
const key = new THREE.DirectionalLight('#fff5e4', 2.95); key.position.set(15, 25, 19); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 85 }); key.shadow.bias = -.0005; key.shadow.normalBias = .03;
const rim = new THREE.DirectionalLight('#7cc6ff', 1.48); rim.position.set(-16, 9, -14);
const lamp = new THREE.PointLight('#7dd3fc', 9.5, 26, 2); lamp.position.set(4.6, 2.3, 5.0);
scene.add(key, rim, lamp);
const cell = new THREE.Group(); scene.add(cell);

const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)], CUT = CUT_LOCAL.map(p => p.clone());
let cutOn = true;
function updateCut() { CUT.forEach((p, i) => { p.copy(CUT_LOCAL[i]); if (!cutOn) p.constant = 1e4; p.applyMatrix4(cell.matrixWorld); }); }
const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };
const phys = o => new THREE.MeshPhysicalMaterial({ envMapIntensity: .8, ...CLIP, ...o });
const nmap = waveNormalMap(), bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };
const protBump = makeProteinBumpTexture(256);
function protMat(key, clip = true, extra = {}) {
  return reg(key, phys({
    vertexColors: true, roughness: .40, metalness: .02,
    clearcoat: .26, clearcoatRoughness: .34, sheen: .36, sheenColor: '#f0f9ff',
    normalMap: protBump, normalScale: new THREE.Vector2(.34, .34),
    side: THREE.DoubleSide, clippingPlanes: clip ? CUT : null, clipIntersection: true,
    ...extra,
  }));
}
const sculpt = (key, parent = cell, clip = true, extra = {}) => makeSculptedMesh(protMat(key, clip, extra), parent);
const molBatch = (key, geo, parent = cell, clip = true, extra = {}) => makeMolBatch(geo, protMat(key, clip, extra), parent);

const PARTS = [
  ['hexon', 'Hexon major coat trimer (II, 1P30)', '#38bdf8'],
  ['penton', 'Penton base pentamer (III, 1X9T)', '#fb923c'],
  ['fiber', 'Projecting fiber shaft & knob (IV, 1QIU)', '#facc15'],
  ['cement', 'Minor cement proteins (IIIa, VI, VIII, IX)', '#c084fc'],
  ['dna', 'Linear dsDNA genome (36 kbp)', '#f43f5e'],
  ['core', 'Histone-like core proteins (VII, V, TP, AVP)', '#34d399'],
  ['car', 'Host CAR & αvβ5 integrin receptors', '#22d3ee'],
  ['host', 'Host epithelial plasma membrane', '#94a3b8'],
];

const INFO = {
  hexon: ['240 homotrimers of polypeptide II (720 subunits, PDB 1P30)', 'Tiles the 20 facets & 30 edges of the 90 nm pseudo-T=25 icosahedron'],
  penton: ['12 homopentamers at the 5-fold vertices (PDB 1X9T)', 'Displays RGD loops that bind host αvβ5 integrins to trigger endocytosis'],
  fiber: ['12 homotrimeric β-spiral shafts + C-terminal knobs (PDB 1QIU)', 'Projecting vertex antennae that dock onto host CAR receptors'],
  cement: ['Outer triskelions (IX) + inner staples (IIIa, VIII) + lytic VI', 'Stabilizes hexon groups-of-nine and lyses the endosome upon entry'],
  dna: ['36,000 bp linear double-stranded DNA duplex', 'Capped at both 5′ ends by Terminal Protein (TP) for strand-displacement replication'],
  core: ['~800 copies of arginine-rich Protein VII + Protein V + AVP protease', 'Condenses viral dsDNA into ~200 nucleosome-like "adenosomes"'],
  car: ['Immunoglobulin-like CAR D1/D2 + αvβ5 integrin heterodimers', 'Two-step attachment (CAR) and internalization (integrin) receptor complex'],
  host: ['Apical respiratory epithelial phospholipid bilayer', 'Invaginates into clathrin-coated pits and early endosomes'],
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
const BASE = { A: '#ff5a5a', T: '#ffd24a', G: '#3ddc84', C: '#ff9a3c' };
const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
const BACKBONE = ['#f43f5e', '#fb7185'];
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
const STRAND_R = .16 * NM, ROD_R = .09 * NM, JOINT = .34 * NM, GROOVE = 2.35, SILVER = '#d4d9e2';
function emitDNA(S, ax, r = 0.92 * NM, twist = 0.52) { dna.emitDNA(S, ax, { nm: NM, radius: r, twist, groove: GROOVE, deterministicBases: true }); }

const PDB = {"hexon":{"pdb":"1P30","full":{"n":2673,"xyz":"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YwEbAcMATwEkAeIAYQE9AfkAZQEzAR0BQwExAS4BLwEdAUgBIwH6AD8BEAHvAF4B8ADdAFQB/ADZADAB6AC8ACAB+wC1AAAB/gC8ANsA6AC2AL0A8AC/AJkA6QC+AHMA8wDQAFMA3QDpAEAA4AD5AB4A4wAfASAAywAjAQMAsAAQARcAtQAjATgApgBGAToAtwBgAU8AogBlAW8ApACBAYgAngCbAW0AeQCeAWQAgQCYAT8AnQCGASwAowCXAQoAuQB7Af3/oQBeAQUAlgBRAeL/igAvAe3/aAAgAff/bgD7AP7/cQDqACAAhgD7ADoAmADgAE4AogD5AGgAfgD/AHEAagDgAGYAggDEAG0AhgC3AEkAqwCwAE8AvQCcADQA4gCiADUA7ACOAFMAAAF2AD0AGQGRADQAKgGRAFcATAGBAFoAWAGGAH4AVQGdAJwAcAGmALUAZgG2ANYAgAHIAOwAfQHbAA0BlgH1ABYBqgHuAPYAuwHPAAQBogG4ABUBkQGgAP0AbQGWAAQBYQF9AAwBhQFxAAwBjAFVACUBlAE+AAkBbwE2AAUBawE1AN8AfgEeAMYAjQE+ALgAjwFQANsAmAFzAM8AeQF6ALoAVgFuAK8AWgFeAI0AOAFdAHwAQwFJAF0AYgE6AE4AbQE1ACoAeAERACEAmwEVADEAigEOAFIAbwH2/0oAdwHi/2kAaAH9/38ARwEAAG0AJgHu/3MAAgHn/2gADwHg/0UAFgEEADsAMQEfAEEAJgEpAGQAPwEhAIAAOAELAJ4APwEoALUAJgE/AKUACwEkAKIADwEdAMcADQFBANIA7gBJAL0A3AApAMkA5AAyAO4A2wBXAOoAugBPANkArwAvAOwAyQAmAAYB0AAHAPEA9AD7/+4AAwHt/w0B7QDO/w4B6QDG/+kA3QDX/8oAuQDS/78AnQDl/64AjwD//8cAagD+/9EAVAAQALkARwAqANIAawA1ANgAdQA0ALQAYgBTAKgAYgBlAIcAgAB6AI4AkwBeAJ8AtABOAJUArAAqAI0AiwAxAHsAngBGAGIAvgAyAGAAwwAkADwA4wAQADUA6gAKABAAAgH4//n/BwHy/9T/IgHm/7z/MAH4/53/SwHw/4P/bgHy/5D/fAELAHb/nwECAID/ngHb/4D/hgHT/2T/nAHP/0X/gQHZ/yv/dQH4/z7/aQEVACj/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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI"},"red":{"n":120,"xyz":"fADhAPn+RwCY/nMBtwAkAL8Ajf4VADIBqgBEAL/+WQEN/5EAIABGAET/lv/PAOn9LgHlADAA5v4FAc0A+wD0/9T9iv5T/wIBPgGp/5wBUgHEAEX+1f9Q/7L/lwDXAI4BWwE3ACkBBwHo/joAr/9nAd0AFgB5AJ7+O/9VAPP/dwHbAN8AMAEnAAX/rP7M/+7/ZgGR/6gAfv9v/5QBsP8sAa3/pP/MAAH/IQCy/0z/7v5n/7QBc/60ACgBOgCCAKgAYQHl/4X/MP/s/6UB8gCG/2n+Kv8Q/47/2wD9/qb/8f+YAVAB1AAiAHoBuQDl/gsB1/4TAF3/rAAUALP/6f4e/xEAxP/X/7/+IP9a//kAAgAX/zsARgAO/1j/pv6aADEA3f7w/sMACv+OAE8Bz/81/+L+jQB7AXIAbP93AHH+kv9tAIv/pgAU/9r+3P6G/z4AxwC0///+R/83AU//HwBB/vYA2v7f/8H+mQD3/zf+zgCpAG0A1f9I/0/+PP+0/5f+ef4s/20AvAAMAfIAwv/MADQA/v8EAXL+zP9a/8YADwDnAHL/xwDD/0UASv/3/pEBQgDIAAkAUwDk/7/+Vf9//xr/8P/tAK4Baf++/i8BLgAtAZQATv+CAJoAZQEz/zsBgABg/wIAif7E/50Aof+a/ssARwA5ATkBPADM/rYATf/T/uP+HwHaAFQBCAFOAEH+fgBS/6QAZ//6/ksA9//3/k4BS/95/yD+Wf8VAUgAegA8Abn/Vf/P/38AZv81AAr/uf5WAJ0Auv4M/1gBNwGD/wkA5v7GADj+XP8sAaX+3P+s/j/+aABr/5n+6ACH/4L/h/8o/9H95P4DAAYB4v6j/1kBqABP/5cBuACNAIX/SQEqAGYA9P+cAU4AEQGh/xMBTf+w/8H/VP8kAWgB9v99/lcApv+fAPwAWwCZ/iQARP8R/3H+ZQHf/53+zP4XAJsB","kind":"BAAECAQACAAECAgIAAAAAAAABAAIBAQIAAQICAAICAQEBAAAAAQIAAgECAQIAAAICAgABAQIAAgACAAICAQICAgEBAQABAAIBAgIAAgECAAACAAEAAgEAAAAAAgIBAgICAgABAQIAAAECAgIBAQEAAgEAAgACAAE","rad":"MCwvIC4uLDUxLi4oLyIwLC8sMS4vLiwvKykuMi4mLikqJSwyLDAsMS4uKS4sKS0xKTEwKjMwKSkvKComKi8vLSYvLDEuLC4pMyswNCktMDAxLSkuKTAwMjAzLSguMTIrKSotLDIuKS4tJiY0LjEwLDIvKSwsKyok"}},"penton":{"pdb":"1X9T","full":{"n":2250,"xyz":"jgCt/xf+jgCs/z7+owCP/0n+twCL/2n+1gB2/2X+7wBm/33+EAFU/3b+AgEz/2n+3wAu/3X+vgAv/2P+tQBT/1r+mQBj/2/+gAB8/2L+bgCa/27+eQCb/5L+hwCK/6/+mQCS/9D+vACa/9r+wgCa/wD/2ACx/xP/3wCh/zX/+gCj/0//9QCB/2H/AwFp/0f/HAFS/1j/NgFT/zz/OgF4/zX/OwGC/1r/WQFr/17/bAF6/0D/XgGb/zT/UgGy/1D/ZQGu/3D/cQHQ/3j/TgHc/27/LQHe/3//BwHd/3f/CAH//2f/JAH7/0//KQHY/0P/LgHD/yT/GAGm/xr/FwGP//3+9wCR/+n+AQFw/9j+7wBY/+/+/QA6/93+CgEf//T+KQEX/9/+QwEx/9j+WQFB//L+TQFj//z+ZAF8/+v+ZgFj/87+QQFr/8/+SwGP/83+VgGH/6n+NAF8/57+FwGU/5b+8gCV/5P+6gCl/3H+yQC2/2v+wgC1/0b+1QDR/zb+uwDd/x7+pQDr/zr+qQADAFf+oQDx/3b+lgD7/5n+kADp/7n+eQDs/9f+jQDv//b+fQDm/xf/kwDj/zX/kwDX/1n/pgDt/3H/qgDn/5b/vgD6/6//wQD8/9X/0AAeANv/0AAtAP//uwBKAAoA2gBaABYA+wBTAAUAGgFkAPj/FgFgANP/9ABwANL//wCNAOj/6QCGAAYAAwF+ACAAEwGhACQABwHEACsAGAHkADUADAH4AFMAGwEUAWcAHgEPAYwALwEgAaoAUgEVAbAAXgEpAc4ATwE+AeoAagFTAfwAcQFtARYBhwGGAQUBmwGnAQgBjQGuASoBaAG0ASIBYQGmAf8ATAGGAfgAXQF3AdoARwFgAcUAWAFNAagAQwE7AY8ATgEmAXIAQAEQAVUARAHrAFcAOAHNAEMAKQGwAFcAJAGOAEgACwFzAE4ADwFNAE8AAQFAAC4A4AAtAC0AygA5AEsAqQA+ADoAiQBOAEYAhwBzAEcAggB5AGsAoABkAHQAtAB2AFoArACWAGsAuACIAIwA2AB8AHwA3gCfAHAA1wCvAJIA7gCVAKEACgGeAIkABwHDAJQADAG2ALcAJwGdALAAOwG7AKQANAHQAMIAQQGyANUAYgG0AMMAZQHaAMIASQHtANIASwHnAPgAcQHlAPgAcgEJAe0AWAEaAQIBNgEYAfAAGwEKAQYB/gD0APsA6AATAQIB+AAiAeIA+AAFAckA8gAUAacA3QABAY4AxADmAJUAqwDWAH4AiQDSAI4AZwDMAIEATQDgAJUAOgAAAZUASgAUAbEALAArAbIADgAWAbkACQAhAd0AEQBFAdUA+f9gAeMA9/+BAdAA9v+UAfAADQCCAQgBKAB/Ae0ALgBcAfoAJgA3AfQADgA1ARIBDwAPARUBMwATASIBPQD5AAgBQQD6AOMAJADkANkANgDDANEAJgC6AK8AOAC2AI4ALQDLAHAASgDOAFgAcADOAFkAgADvAF8AogD7AGoAqAARAYgAxQAoAYsA1wA9AaUA5gBfAZ8ABAFeAYgAAAE6AXsA7QAoAWAA7QALAUYA9wAFASIA6wDqAAoA/AD2AOv/CwHTAOf/7wC9APX/zgCuAO3/xQCsABIAtQDNAAwAmgC8APj/lgCkABYAjQDAAC0AdQDMABQAgwDvAA8AjAD6AOv/lgAaAdn/egAqAcX/lgAuAav/qAANAan/wgATAY7/0wAuAaL/7QAXAbH/8QAiAdX/2wAWAfL/5gAqAREAzgAxASwA3QBJAUcAzwBTAWkAzQB2AVoAtQBpAUAAnABbAVgAkAB+AV8AbwCDAXIAZwBiAYQAfQBbAaEAbwBAAbcAWgBSAdEAYABKAfYATwA1AQ8BNwBBASoBRAA7AU0BJwAjAVMBMwAeAXcBNgBCAYEBFQBNAXEBAQAxAYIBEQAxAaUBDQBXAaMB5/9UAaIB9P+oAYUB//+GAXgBIwB9AXEBHQByAU0BNgCKAT0BTgBxAUsBXgBfAS4BbwA/AToBlQBIATcBpAAlATwBmAADAUUBogDlAFsByADhAFkByAAGAVMBzgANAS4BxwAxASEBrQA2AQYBwgBSAfkApwBtAfwArwCMAegArACjAQYBnwCjASoBfgCxARsBdACgAfoAXgCCAfkAcgB1AdoAkQBfAdwArwBiAcUApgBAAbYAmgBFAZIAhQAqAYAAggAmAVsAXgAYAVwAVAA4AW8AZABQAVYAUwA+AToALgBCAUUAMQBaAWIASQB0AVQARwCPAToAOwB9ARoASgCXAQMAbQCZARIAcAB8ASoAfABaASEAWwBPAREAZwBnAfb/ggBQAej/fQAtAff/YQAVAfT/UAD/AA8ATQDdAP//RQC5AAYAYgCmABQAawCIAP7/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","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFBQUFBQUFBQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUFBQUFBQUFBQUCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFBQUFBQUFBQUDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwUFBQUFBQUFBQUEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAUFBQUFBQUFBQU"},"red":{"n":100,"xyz":"R/8kAW7/wf5ZAOgAcgCG/goB8AD3ABIAYQDfAPf/ZABC/z7/ZAAgABgAff+Q/uUAHADvANcAFAH2/40ASgCSAOL+ZQFkAfQABwBiAMsAcv9s/4P/J//7/noBXQBkAToAJv9FAID/xgCBAA0B1P90/wAAGwBCAX0BdwCLAFz+nf+SAGj+vAAFARoB5f99/mwA5wBuABwAX/8aAcL+xQA2AXwABf/NAfcA5v4U/yUAdP8w//8AeP93AcoA/ABg/77+vAAJAWH/X/90AMAAT/+vAAUAMgGj/13/5v8NAc7+nQDy/vAApQDX/3f+yAAG/18BSAFvAG0Bzf96AVEBpP+BAD7/UwG9/xMBzQB+/68Ajf99/2X+cP8TAAIA2gEf//cA0v/W/sH+k/8Y/2QAKf/OAFH/9/4nAEgA1P7QAEMAKv7G/+4AtQAYAFb/B/9pAO7+fgD5/8YAdQEOADQAxv7I/8T+CQDI/l7/v/5W/3oASgCRAI//GQANAUj/6gDg/+b/PP81AVsAz/6W/2D/1f7vAPUAcABs//L/HQB9/7oAcwCsAIAADAE1APL+pP/p/54APP8HAIL+qP/i/gMAWQE3AAUBKwBb/4P+xv8QAV8A3P91ACgA+P6s//v/QQEg/9IAiQB0AeoAKQBcAQ8B+/7U/xUBSv80//f+z/4i/w0BRwDS/n0Afv/G/wr/MAHeAKAAAgFL/xIAvP/4/fcAvv59AGcB4QDgAMP+awFs/20AvP/tAB8BS//xAB0BPv+S/4wAx//zAOj/iP7P/3kAcQDJ/hIAAgDX/hoB","kind":"CAQMAAAQAAwAEAQABAwIAAgADAAECAAMAAgABAgIBAAEBAQABAwADBAUCBAQDAgQEAwICAQIAAgQEAwQCAQEEAQMBBAMAAAIDAwQEAQECBAAAAgMCAwMABAMBAQQFAQIBAgMDA==","rad":"KCwpJyw7Li4pLjEpLDMmKy8pMCMxNCovLi4sJSgxLjcvLiwwLSw1LikdMC4uMSwlNSsoLi4uNS4tLDEyLiwtLTAwLDIxKzAuLy0vMywrLiwoKS8wLy4sLywlKzEsJCcpKS0uKQ=="}},"fiber":{"pdb":"1QIU","full":{"n":792,"xyz":"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zv/y/6j/vf/U/7b/uv+v/6v/n/+c/5n/m/+A/7L/vv9z/7P/1P+I/8r/+f+A/8//AACg/+P/7/+P/wAA+f9w/xIA4P9j/ywAzf9J/0AArP9W/zEAl/9v/0QAhP9T/1cAmv81/1wAjf8U/2kAof8F/4UAw/8G/3UA3P8L/5AA6//4/q4A9f8I/88A9f/q/uYA4f/P/tMA2f/M/q4Av//k/p8AuP/0/sEAuv8X/7MArf8t/5YAyv9C/4wAxP9h/3YA4P9z/2QA3/+J/0UAAACV/zYA+/+x/xwAGQC8/wgAHgDh/wYAPwDj//X/XQDj/wwARQDb/ykAKwDC/zIACwDO/0QA/P+z/1oA3/+r/3EA3P+O/4kAw/99/6AAwv9c/7MApf9I/8EAp/8n/9UAi/8O/80Ak//x/uQAk//+/gcBn/8Y/yABw/8k/yUBy/8N/0IBx//w/ioB3//+/hAB+/8L/ycBBgD4/kYBIQAL/1oBIAAi/zsBDwBE/zwBEwBJ/xcBCAA+//UAHwA7/9YAFgA4/7IANAA0/5oAOQA1/3QAWAAn/2QAYAAt/z8AegAe/ygAkAAz/xEAcwA4//n/WgBE/xMASAAj/xQAOQAZ/zUATAD9/kYAPgDf/lgATADq/nkAMwAH/30AFAAK/5MA//8R/3QA8v/3/lwA///7/jkA3//1/iUAz/8X/ycA7v8t/ykA7/87/wYA6f9Z//D/x/9q//D/rP9g/9j/jP90/+D/hP9r/wQAlv9K/wAAuP8+//T/yP8x/9T/v/8N/83/5P8H/8X/AAAK/+H/FwAo/93/PAAh/9X/SwBC/93/QgBf//X/ZABs//7/VgCP//j/QACK/xcAXQB+/y4AbQCT/0kAjACk/zwArACS/0gAwQCx/0sAqADD/2EAoACj/3UAvgCL/3MAvQBm/30AygBi/6EAxwBS/8MAyQB0/9QAqgCI/9kAsQCo/8YAlwDD/84AkwDN/6oAiACq/6EAaQCu/7cASgDC/7gAPQDC/9wAHADR/+gAAwDO/wQB4/+9//kAw/+y/wsBs/+P/wwBkP+S//8Alv+3//wAkf+5/yIBpv/V/zEBqf/B/1EBuf+k/z8B2v+z/zAB8/+e/x0BEwCl/wsBFQCb/+cAOACW/9kAPACR/7QAXgCE/6gAbQCH/4YAiABt/34AoABv/5sAlQBY/7cAdwBM/6QAjAA6/4sAjQAU/4sAsAAE/40ApgDg/pMAugDH/n4AqQDE/lsAkADg/mMApgD//mIAkAAd/1gAnAA8/0QAfwBT/00AaQBQ/2wATwBj/4AAPgBb/6EAJABq/7cAJgBn/90ADABy//cAFwBz/xsBBwB9/z0BCgB5/2IBCwBU/20B7P9I/34B1f9g/2sBuf9Y/1EBvP8y/1cBl/8u/1EBlv9H/zQBk/8//w8Bsf9M//sAo/9l/+IAtv+D/9UAq/+k/8UAt/+r/6IA2v+5/6MA6//O/4gAEQDQ/4EAKgDV/2UATQDK/1wAaADP/0IAZQC1/yYAggCg/xkAfACt//b/","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI"},"red":{"n":65,"xyz":"SACQ/1P/HP9eAGoAuwB5AKgAgQAu/4IABABKAMX+hP+QAOL/OAA8AFb+Hf+eAMEAGQBcACYAq//1/zz/vf8bAHn/bQDI/+MAM/++/54Amv8zAEX+i/+GAEcAKADBAIkAmQDz/+D/TgAQAK//Vf9SAEwBXv+sAIUA1//l/+H9vwBIAAgAmv9IAOv/yv+9/6n+a/+qACoBEv8FAEoAzf8Q/6cARQDL/y0A8/9IAKX/BQC3/5f/wP/H/5z/mgD0AGoAyv9wANL+vv71/3gA1f8qABf/PADu/7z+ef8hAN0AdgB6AET+nwCs/1QANP8OAP7/FwDF/1f+2/+KAMIA+P/J/xT/fAD9/9j+NgDK/07/PQAk/xMAev+i/0IA5f8TAHgAd//9/1j/2P8r/zYBnf+j/8UA1AAiAJwAY/+9AMoALgCC/y3+5v+f/xsBLABhAFT/yv/Y/9P+r//y/xUA4v+B/0QA//9IAA4BtwBEADUBwf9S/+L/KQA0ANX9ewCvAAsAOAAcACb/","kind":"BAAECAQABAAECAAEAAAABAQEAAAABAAAAAAICAAICAQAAAAIAAQIAAgACAQECAAACAgIBAAICAAAAAgABAgIBAQ=","rad":"GiMpMCAmJh0sHBwxJy4kLCQgJB0nKR0fJSIvKSAfHSYdHxwgJiUkIyQnHB0dKiYmFy0oKh0mKSAgIyYqMCkuJB8="}}};
const _models = {};
const decodeModel = pdb.decodeModel;
function model(name, full = true) {
  const k = name + (full ? ':f' : ':r');
  if (_models[k]) return _models[k];
  const s = PDB[name]; return _models[k] = decodeModel((full && s.full) ? s.full : s.red);
}
function placeMol(S, name, pos, quat, colFn, full = true, scale = 1, step = 1, radBoost = 1) {
  const m = model(name, full), v = V(), kScale = .01 * NM * scale;
  for (let i = 0; i < m.n; i += step) {
    const kd = m.kind[i], grp = kd >> 2, part = kd & 3;
    v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2]).multiplyScalar(kScale).applyQuaternion(quat).add(pos);
    const r = (m.rad ? (m.rad[i] * .25 * .18 * NM * scale) : (.84 * NM * scale)) * radBoost;
    S.add(v, r, colFn(grp, part, i));
  }
}
const qOut = (n, twist = 0) => {
  const q = new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), n.clone().normalize());
  if (twist) q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), twist));
  return q;
};

const caps = new THREE.Group(); cell.add(caps);
const SITES = { hexon: [], penton: [], fiber: [], cement: [], dna: [], core: [], car: [], host: [] };
const Y_VIR = 2.30, R_CAP = 4.35, FIBER_LEN = 2.05;

const BASE_ICO = (() => {
  const g = new THREE.IcosahedronGeometry(1, 0), p = g.attributes.position;
  let top = V(0, -2, 0);
  for (let i = 0; i < p.count; i++) if (p.getY(i) > top.y) top.set(p.getX(i), p.getY(i), p.getZ(i));
  // Align top 5-fold vertex with +Y, and rotate around Y slightly so cutaway slices cleanly across facets without splitting an edge awkwardly
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(top.normalize(), V(0, 1, 0)));
  g.rotateY(.28);
  return g;
})();

const V12 = [], FACES20 = [], FACE_NORMALS = [];
{
  const p = BASE_ICO.attributes.position, seen = new Map();
  for (let i = 0; i < p.count; i += 3) {
    const tri = [0, 1, 2].map(k => {
      const v = V(p.getX(i + k), p.getY(i + k), p.getZ(i + k)).normalize();
      const key = `${Math.round(v.x * 100)}_${Math.round(v.y * 100)}_${Math.round(v.z * 100)}`;
      if (!seen.has(key)) { seen.set(key, V12.length); V12.push(v); }
      return V12[seen.get(key)];
    });
    FACES20.push(tri);
    FACE_NORMALS.push(V().addVectors(tri[0], tri[1]).add(tri[2]).normalize());
  }
}

// Exact ray-distance from origin to thesharply faceted icosahedral shell along unit direction `d`
const ICO_INRADIUS = FACE_NORMALS[0].dot(FACES20[0][0]); // ~0.794654
function icoRadiusAt(dir, round = .06) {
  const d = dir.clone().normalize();
  let maxDot = 0;
  for (let i = 0; i < 20; i++) {
    const dn = d.dot(FACE_NORMALS[i]);
    if (dn > maxDot) maxDot = dn;
  }
  const rFlat = ICO_INRADIUS / Math.max(.2, maxDot);
  return (rFlat * (1 - round) + round) * R_CAP;
}
function icoPt(dir, dep = 0) {
  const d = dir.clone().normalize();
  return d.multiplyScalar(Math.max(.3, icoRadiusAt(d) - dep)).add(V(0, Y_VIR, 0));
}
function makeFacetedShellGeo(dep = 0, detail = 4) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  // Orient identically to BASE_ICO
  const p0 = g.attributes.position, v = V();
  for (let i = 0; i < p0.count; i++) {
    v.fromBufferAttribute(p0, i).normalize();
    const q = icoPt(v, dep);
    p0.setXYZ(i, q.x, q.y, q.z);
  }
  g.computeVertexNormals();
  return g;
}
function capStripFromOutline(key, axis, outlineFn, layers, n = 180) {
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
  return new THREE.Mesh(g, reg(key, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .38, metalness: .05, side: THREE.DoubleSide })));
}

// Curved apical respiratory epithelial membrane dome with a central invaginating clathrin-coated endocytic pit
const R_HOST = 25.0, Y_HOST_BASE = -4.15, R_PATCH = 10.4;
function hostSurfY(x, z) {
  const r2 = x * x + z * z;
  const dome = Y_HOST_BASE - (R_HOST - Math.sqrt(Math.max(1, R_HOST * R_HOST - r2)));
  // Smooth central clathrin-coated pit invagination directly under the docking virion
  const pit = -1.18 * Math.exp(-r2 / (2.55 * 2.55));
  const rim = .14 * Math.exp(-((Math.sqrt(r2) - 3.35) ** 2) / (.95 * .95));
  const undul = .045 * Math.sin(x * .75 + .3) * Math.cos(z * .72 - .4);
  return dome + pit + rim + undul;
}
function hostNormal(x, z) {
  const e = .08;
  return V(hostSurfY(x - e, z) - hostSurfY(x + e, z), 2 * e, hostSurfY(x, z - e) - hostSurfY(x, z + e)).normalize();
}

function buildCapsidAndFibers() {
  // Sharply faceted icosahedral inner capsid floor + dark inner wall backing + polygonal cutaway cross-section strips
  const capMat = shellMat('hexon', '#1f6aa8', '#68c5ff', '#0f3b66', {
    atten: 1.35, thickness: .52, sheen: '#bce8ff',
    extra: { clearcoat: .48, envMapIntensity: .62, flatShading: false },
  });
  cell.add(shade(new THREE.Mesh(makeFacetedShellGeo(.30, 4), capMat), true, true));
  cell.add(new THREE.Mesh(makeFacetedShellGeo(.54, 4), reg('hexon', phys({
    color: '#0e2847', roughness: .74, side: THREE.BackSide,
  }))));

  const icoOutline = (axis, dep, t) => {
    const a = (t - .5) * Math.PI, ca = Math.cos(a), sa = Math.sin(a);
    const dir = axis === 'x' ? V(0, sa, ca) : V(ca, sa, 0);
    return icoPt(dir, dep);
  };
  const HEX_RING = [
    [.06, .32, '#38bdf8'],  // outer Hexon beta-barrel tower rim
    [.32, .44, '#0284c7'],  // Hexon pedestal base
  ];
  const CEM_RING = [[.44, .55, '#c084fc']]; // inner IIIa / VIII / VI cement floor
  for (const ax of ['x', 'z']) {
    caps.add(capStripFromOutline('hexon', ax, icoOutline, HEX_RING, 200));
    caps.add(capStripFromOutline('cement', ax, icoOutline, CEM_RING, 200));
  }

  const S_PEN = sculpt('penton'), S_FIB = sculpt('fiber'), S_CEM = sculpt('cement');
  const hexGON = [col('#38bdf8'), col('#0ea5e9'), col('#60cdfc')];   // Group-of-Nine facet hexons
  const tintPeri = col('#d8f8ff');                                    // Subtle lighter peripentonal tint
  const penPal = [col('#fb923c'), col('#f97316'), col('#fdba74'), col('#ea580c'), col('#fed7aa'), col('#f43f5e')];
  const fibPal = [col('#facc15'), col('#eab308'), col('#fef08a')];
  const cIX = col('#c084fc'), cIX2 = col('#d8b4fe'), cIIIa = col('#a855f7'), cVIII = col('#9333ea'), cVI = col('#e879f9');

  const geoPenton = buildPdbSurfaceGeo(model('penton', true), {
    nm: NM, scale: 1.0, maxDim: 40, sigmaAng: 3.1, aoStrength: .56, colorFn: g => penPal[g % penPal.length],
  });
  const geoFiberKnob = buildPdbSurfaceGeo(model('fiber', true), {
    nm: NM, scale: 1.12, maxDim: 38, sigmaAng: 3.1, aoStrength: .54, colorFn: g => fibPal[g % 3],
  });
  const geoHexon = buildPdbSurfaceGeo(model('hexon', true), {
    nm: NM, scale: .94, maxDim: 32, sigmaAng: 3.1, aoStrength: .58, colorFn: g => hexGON[g % 3],
  });
  const I_PEN = molBatch('penton', geoPenton);
  const I_KNOB = molBatch('fiber', geoFiberKnob);
  const I_HEX = molBatch('hexon', geoHexon);

  // 12 Penton Base homopentamers (PDB 1X9T cryo-EM surface) + 5 RGD integrin-binding loops + 12 triple-beta-spiral 3D Fiber shafts & PDB 1QIU knobs
  V12.forEach((vDir, idx) => {
    const n = vDir.clone().normalize();
    const penPos = n.clone().multiplyScalar(R_CAP * .965).add(V(0, Y_VIR, 0));
    I_PEN.add(penPos, qOut(n, idx * .6), 1);
    if (!(penPos.x > 0 && penPos.z > 0)) SITES.penton.push(penPos.clone());

    const t1 = across(V(1, .2, -.3), n), t2 = n.clone().cross(t1).normalize();
    // 5 protruding flexible RGD loops on the Penton crown + 5 inner Protein IIIa vertex staples underneath
    for (let k = 0; k < 5; k++) {
      const a = k * Math.PI * 2 / 5 + idx * .6;
      const rgdTip = penPos.clone().addScaledVector(n, .26).addScaledVector(t1, Math.cos(a) * .30).addScaledVector(t2, Math.sin(a) * .30);
      const rgdBase = penPos.clone().addScaledVector(n, .08).addScaledVector(t1, Math.cos(a) * .24).addScaledVector(t2, Math.sin(a) * .24);
      S_PEN.tube([rgdBase, rgdTip], .022, .028, penPal[0], penPal[5], 8, true);
      S_PEN.lobe(rgdTip, .048, .048, .048, penPal[5]);

      const p3a = n.clone().multiplyScalar(R_CAP * .83).add(V(0, Y_VIR, 0)).addScaledVector(t1, Math.cos(a) * .52).addScaledVector(t2, Math.sin(a) * .52);
      const p3aIn = n.clone().multiplyScalar(R_CAP * .80).add(V(0, Y_VIR, 0)).addScaledVector(t1, Math.cos(a + .35) * .30).addScaledVector(t2, Math.sin(a + .35) * .30);
      S_CEM.tube([p3a, p3aIn], .032, .028, cIIIa, cVIII, 8, true);
      S_CEM.lobe(p3a, .068, .068, .055, cIIIa);
    }

    // Continuous homotrimeric triple-beta-spiral 3D Fiber shaft + cryo-EM PDB 1QIU knob
    const shaftStart = n.clone().multiplyScalar(R_CAP + .16).add(V(0, Y_VIR, 0));
    const shaftEnd = n.clone().multiplyScalar(R_CAP + FIBER_LEN).add(V(0, Y_VIR, 0));
    const steps = 28;
    for (let c = 0; c < 3; c++) {
      const strandPts = [];
      for (let s = 0; s <= steps; s++) {
        const f = s / steps, p = shaftStart.clone().lerp(shaftEnd, f);
        if (vDir.y < -.85) p.x -= Math.sin(f * Math.PI) * .18;
        const ang = f * Math.PI * 9 + c * Math.PI * 2 / 3;
        const rad = (.068 + .014 * Math.sin(f * Math.PI * 7)) * (1 - .12 * f);
        strandPts.push(p.clone().addScaledVector(t1, Math.cos(ang) * rad).addScaledVector(t2, Math.sin(ang) * rad));
      }
      S_FIB.tube(strandPts, .036, .030, fibPal[c], fibPal[(c + 1) % 3], 8, true);
    }
    const knobPos = shaftEnd.clone().addScaledVector(n, .20);
    I_KNOB.add(knobPos, qOut(n, idx * 1.1), 1);
    if (!(knobPos.x > 0 && knobPos.z > 0)) SITES.fiber.push(knobPos.clone());
  });

  // All 240 Hexon homotrimers (PDB 1P30 cryo-EM 3-tower trimers) tiling the 20 flat triangular facets & 30 edges
  const SUB = 5, seenH = new Set();
  FACES20.forEach(([A, B, C], fIdx) => {
    const fNorm = FACE_NORMALS[fIdx];
    const e1 = B.clone().sub(A).normalize(), e2 = fNorm.clone().cross(e1).normalize();
    for (let u = 0; u <= SUB; u++) {
      for (let v = 0; v <= SUB - u; v++) {
        const w = SUB - u - v;
        if ((u === 0 && v === 0) || (u === SUB && v === 0) || (u === 0 && v === SUB)) continue;
        const pUnit = V().addScaledVector(A, u / SUB).addScaledVector(B, v / SUB).addScaledVector(C, w / SUB);
        const key = `${Math.round(pUnit.x * 100)}_${Math.round(pUnit.y * 100)}_${Math.round(pUnit.z * 100)}`;
        if (seenH.has(key)) continue;
        seenH.add(key);

        const pSph = pUnit.clone().normalize();
        const pFacet = pUnit.clone().lerp(pSph, .06);
        const hPos = pFacet.clone().multiplyScalar(R_CAP).add(V(0, Y_VIR, 0));
        const isEdge = u === 0 || v === 0 || w === 0;
        const isPeripentonal = (u === SUB - 1 && (v === 1 || w === 1)) || (v === SUB - 1 && (u === 1 || w === 1)) || (w === SUB - 1 && (u === 1 || v === 1));
        const hNorm = isEdge ? fNorm.clone().lerp(pSph, .45).normalize() : fNorm.clone().lerp(pSph, .10).normalize();
        I_HEX.add(hPos, qOut(hNorm, u * 1.0472 + v * 2.0944 + fIdx * .5236), 1, isPeripentonal ? tintPeri : undefined);
        if (hPos.x < 0 && hPos.z < 0) SITES.hexon.push(hPos.clone());

        // Inner capsid cement: Protein VIII triangular edge clasps + lytic Protein VI copies tucked inside each hexon cavity
        const pIn = pFacet.clone().multiplyScalar(R_CAP * .86).add(V(0, Y_VIR, 0));
        S_CEM.lobe(pIn, .062, .062, .052, isEdge ? cVIII : cVI);
        S_CEM.stick(pIn, pFacet.clone().multiplyScalar(R_CAP * .91).add(V(0, Y_VIR, 0)), .014, cVI, cVIII);
      }
    }

    // 4 trimeric Protein IX triskelion coiled-coil cement staples lacing the Group-of-Nine valleys on each facet!
    const triskelions = [
      [1 / 3, 1 / 3, 1 / 3, 0],
      [.52, .24, .24, 1.05],
      [.24, .52, .24, 1.05],
      [.24, .24, .52, 1.05],
    ];
    triskelions.forEach(([bu, bv, bw, rot]) => {
      const pU = V().addScaledVector(A, bu).addScaledVector(B, bv).addScaledVector(C, bw);
      const pCenter = pU.clone().lerp(pU.clone().normalize(), .06).multiplyScalar(R_CAP * .985).add(V(0, Y_VIR, 0));
      S_CEM.lobe(pCenter, .062, .062, .052, cIX);
      for (let arm = 0; arm < 3; arm++) {
        const a = rot + arm * 2.0944;
        const armTip = pCenter.clone().addScaledVector(e1, Math.cos(a) * .34).addScaledVector(e2, Math.sin(a) * .34);
        S_CEM.tube([pCenter, armTip], .024, .020, cIX, cIX2, 8, true);
        S_CEM.lobe(armTip, .048, .048, .042, cIX2);
      }
      if (pCenter.x < 0 && pCenter.z < 0) SITES.cement.push(pCenter.clone());
    });
  });

  I_HEX.done(); I_PEN.done(); S_PEN.done(); I_KNOB.done(); S_FIB.done(); S_CEM.done();
}

function buildCoreAndGenome() {
  const sDna = balls('dna'), S_CORE = sculpt('core');
  const cVII = col('#34d399'), cVII2 = col('#10b981'), cV = col('#059669'), cTP = col('#fbbf24'), cAVP = col('#6ee7b7');

  // Smooth continuous 3D chromatin-like "adenosome" dsDNA core coiled through outer & inner core domains
  const ctrl = [];
  const N_CTRL = 115;
  for (let i = 0; i <= N_CTRL; i++) {
    const f = i / N_CTRL;
    const shell = f < .68 ? 2.55 - .55 * (f / .68) : 1.85 - .95 * ((f - .68) / .32);
    const phi = f * Math.PI * 22.5;
    const u = Math.cos(f * Math.PI * 5.0) * .84;
    const r = shell * Math.sqrt(Math.max(.08, 1 - u * u));
    const wob = .14 * Math.sin(i * 1.9);
    ctrl.push(V((r + wob) * Math.cos(phi), Y_VIR + shell * u, (r + wob) * Math.sin(phi)));
  }
  const dnaCurve = new THREE.CatmullRomCurve3(ctrl);
  const pts = geometry.resample(dnaCurve.getPoints(900), .34 * NM);
  emitDNA(sDna, pts, .90 * NM, .58);
  SITES.dna.push(V(-1.45, Y_VIR + .55, -1.15));

  // Sculpted 3D 5'-end Terminal Protein (TP, 55 kDa) replication primers capping both ends of the linear 36 kbp duplex
  [pts[0], pts[pts.length - 1]].forEach(ep => {
    S_CORE.lobe(ep, .16, .13, .16, cTP);
    S_CORE.lobe(ep.clone().add(V(.09, .06, -.05)), .11, .09, .11, cTP);
  });

  // ~135 sculpted nucleosome-like Protein VII "adenosome" oligomers condensing the viral dsDNA + AVP proteases
  for (let i = 10; i < pts.length - 10; i += 14) {
    const c = pts[i], t = pts[i + 1].clone().sub(pts[i - 1]).normalize();
    const qAd = qOut(t, i * .2);
    const isAVP = i % 84 === 0;
    S_CORE.lobe(c, .16, .16, .10, isAVP ? cAVP : (i % 28 === 0 ? cVII : cVII2), qAd);
    if (i % 70 === 0 && c.x < 0 && c.z < 0) SITES.core.push(c.clone());
  }

  // Protein V bridging tethers linking outer adenosomes to the inner icosahedral capsid wall
  for (let i = 0; i < 64; i++) {
    const y = 1 - 2 * (i + .5) / 64, r = Math.sqrt(Math.max(0, 1 - y * y)), phi = i * 2.3999632;
    const d = V(Math.cos(phi) * r, y, Math.sin(phi) * r);
    const pWall = icoPt(d, .58), pCore = d.clone().multiplyScalar(2.68).add(V(0, Y_VIR, 0));
    S_CORE.tube([pCore, pWall], .018, .016, cVII2, cV, 6, true);
    S_CORE.lobe(pCore.clone().lerp(pWall, .55), .058, .058, .058, cV);
  }
  sDna.done(); S_CORE.done();
}

function buildHostEntry() {
  // Curved respiratory epithelial plasma membrane invaginating into a polygonal clathrin-coated endocytic pit
  const makeHostPitGeo = (dep = 0, segR = 72, segA = 96) => {
    const pos = [], nor = [], uv = [], idx = [];
    for (let ir = 0; ir <= segR; ir++) {
      const r = (ir / segR) * R_PATCH;
      for (let ia = 0; ia <= segA; ia++) {
        const a = (ia / segA) * Math.PI * 2, x = r * Math.cos(a), z = r * Math.sin(a);
        const n = hostNormal(x, z), y = hostSurfY(x, z);
        pos.push(x - n.x * dep, y - n.y * dep, z - n.z * dep);
        nor.push(n.x, n.y, n.z);
        uv.push(x * .22 + .5, z * .22 + .5);
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
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    return g;
  };

  const hostMat = shellMat('host', '#6c5bb8', '#a99bf5', '#36296e', {
    atten: 1.5, thickness: .50, sheen: '#e9d5ff',
    extra: { clearcoat: .26, roughness: .32, envMapIntensity: .42, normalMap: bump(18, 18), normalScale: new THREE.Vector2(.36, .36) },
  });
  cell.add(shade(new THREE.Mesh(makeHostPitGeo(0), hostMat), false, true));
  cell.add(new THREE.Mesh(makeHostPitGeo(.40, 56, 72), reg('host', phys({
    color: '#2d225c', roughness: .76, normalMap: bump(16, 16), normalScale: new THREE.Vector2(.22, .22), side: THREE.BackSide,
  }))));

  // Multi-layered cross-section rim along x = 0 and z = 0 showing the invaginating pit profile!
  const hostOutline = (axis, dep, t) => {
    const r = t * R_PATCH, x = axis === 'x' ? 0 : r, z = axis === 'x' ? r : 0;
    const n = hostNormal(x, z);
    return V(x - n.x * dep, hostSurfY(x, z) - n.y * dep, z - n.z * dep);
  };
  const HOST_LAYERS = [
    [0, .08, '#a99bf5'],
    [.08, .20, '#ede7ff'],
    [.20, .32, '#d2c6f7'],
    [.32, .40, '#7c6cc4'],
  ];
  for (const ax of ['x', 'z']) caps.add(capStripFromOutline('host', ax, hostOutline, HOST_LAYERS, 150));

  // Dense cut-edge molecular phospholipids along the sliced invaginating epithelial membrane
  const B_CUT_HOST = balls('host', caps, false);
  const cHH = col('#b8abfa'), cHT1 = col('#ede7ff'), cHT2 = col('#d5cbff'), cHChol = col('#fde68a');
  for (const ax of ['x', 'z']) {
    for (let row = 0; row < 4; row++) {
      const behind = .02 + row * .048;
      for (let i = 0; i <= 145; i++) {
        const r = (i / 145) * (R_PATCH - .12);
        const x = ax === 'x' ? -behind : r, z = ax === 'x' ? r : -behind;
        const n = hostNormal(x, z), p0 = V(x, hostSurfY(x, z), z);
        const pO = p0.clone().addScaledVector(n, -.03), pMO = p0.clone().addScaledVector(n, -.18);
        const pMI = p0.clone().addScaledVector(n, -.22), pI = p0.clone().addScaledVector(n, -.37);
        B_CUT_HOST.add(pO, .78 * NM, cHH);
        B_CUT_HOST.stick(pO, pMO, .085 * NM, cHT1, cHT2);
        B_CUT_HOST.add(pI, .74 * NM, cHH);
        B_CUT_HOST.stick(pI, pMI, .085 * NM, cHT2, cHT1);
        if (i % 6 === 0 && row < 2) B_CUT_HOST.add(p0.clone().addScaledVector(n, -.15), .60 * NM, cHChol);
      }
    }
  }
  B_CUT_HOST.done();

  const S_CAR = sculpt('car'), S_HOST = sculpt('host'), S_LYTIC = sculpt('cement');
  const cClath1 = col('#ff9f43'), cClath2 = col('#ffd166'), cAP2 = col('#38bdf8'), cAct = col('#94a3b8');
  const cSurfH2 = col('#b9adfa'), cHSPG = col('#d8b4fe');

  // Delicate heparan-sulfate proteoglycan (HSPG) co-receptor brush chains & peripheral epithelial microvilli
  for (let i = 0; i < 200; i++) {
    const r = 1.9 + Math.sqrt((i + .5) / 200) * (R_PATCH - 2.3), a = i * 2.39996;
    const x = r * Math.cos(a), z = r * Math.sin(a), n = hostNormal(x, z);
    const p0 = V(x, hostSurfY(x, z), z);
    const sway = across(randDir(), n);
    S_HOST.tube([
      p0.clone().addScaledVector(n, -.03),
      p0.clone().addScaledVector(n, .12).addScaledVector(sway, .03),
      p0.clone().addScaledVector(n, .25).addScaledVector(sway, .06),
    ], .016, .009, cSurfH2, cHSPG, 6, true);
  }
  for (let m = 0; m < 18; m++) {
    const r = rr(5.2, 9.6), a = m * 2.39996 + .5;
    const x = r * Math.cos(a), z = r * Math.sin(a), n = hostNormal(x, z);
    const root = V(x, hostSurfY(x, z) - .16, z), sway = across(randDir(), n), len = rr(.95, 1.65);
    const mvPts = new THREE.CatmullRomCurve3([
      root,
      root.clone().addScaledVector(n, len * .52).addScaledVector(sway, .14),
      root.clone().addScaledVector(n, len).addScaledVector(sway, .26),
    ]).getPoints(14);
    S_HOST.tube(mvPts, .14, .11, cHH, cHSPG, 14, true);
  }

  // Sculpted 3D cytoplasmic polygonal Clathrin triskelion basket + AP2 adaptor complexes coating the underside of the pit
  const pitRings = [0, .85, 1.70, 2.55, 3.40];
  const ringNodes = pitRings.map((r, ri) => {
    const cnt = ri === 0 ? 1 : ri * 6;
    const arr = [];
    for (let k = 0; k < cnt; k++) {
      const a = (k / cnt) * Math.PI * 2 + (ri & 1) * (Math.PI / cnt);
      const x = r * Math.cos(a), z = r * Math.sin(a), n = hostNormal(x, z);
      const p = V(x, hostSurfY(x, z), z).addScaledVector(n, -.64);
      const pAdapt = V(x, hostSurfY(x, z), z).addScaledVector(n, -.41);
      S_HOST.tube([pAdapt, p], .028, .034, cAP2, cClath1, 8, true);
      S_HOST.lobe(pAdapt, .058, .058, .058, cAP2);
      S_HOST.lobe(p, .082, .082, .082, cClath1);
      arr.push(p);
    }
    return arr;
  });
  for (let ri = 1; ri < ringNodes.length; ri++) {
    const cur = ringNodes[ri], prev = ringNodes[ri - 1];
    for (let k = 0; k < cur.length; k++) {
      S_HOST.tube([cur[k], cur[(k + 1) % cur.length]], .040, .040, cClath1, cClath2, 8, true);
      const pj = Math.floor((k / cur.length) * prev.length);
      S_HOST.tube([cur[k], prev[pj]], .040, .040, cClath1, cClath2, 8, true);
    }
  }
  // Surrounding sub-membrane cortical actin 3D filaments outside the pit
  for (let f = 0; f < 22; f++) {
    const r0 = rr(3.6, 9.2), a0 = rr(0, 6.283), dir = a0 + 1.57, len = rr(2.2, 4.0);
    const actPts = [];
    for (let s = 0; s <= 10; s++) {
      const u = (s - 5) / 5 * (len * .5);
      const x = r0 * Math.cos(a0) + Math.cos(dir) * u, z = r0 * Math.sin(a0) + Math.sin(dir) * u;
      if (x * x + z * z > (R_PATCH - .3) ** 2) continue;
      actPts.push(V(x, hostSurfY(x, z) - .56, z));
    }
    if (actPts.length >= 2) S_HOST.tube(actPts, .030, .028, cAct, cClath2, 8, true);
  }
  SITES.host.push(V(-2.6, hostSurfY(-2.6, -.9), -.9));

  // 3 sculpted CAR (Coxsackievirus & Adenovirus Receptor) D1-D2 Ig-domain stalks tethering the bottom Fiber knob
  const cCarD1 = col('#22d3ee'), cCarD2 = col('#06b6d4'), cIntA = col('#38bdf8'), cIntB = col('#6ee7b7');
  const knobBot = V(-.05, Y_VIR - R_CAP - FIBER_LEN - .18, 0);
  [[-.34, -.14], [.32, -.22], [-.14, -.38]].forEach(([dx, dz]) => {
    const fx = dx * 2.5, fz = dz * 2.5, fy = hostSurfY(fx, fz), fn = hostNormal(fx, fz);
    const foot = V(fx, fy, fz);
    const mid = foot.clone().lerp(knobBot, .48).add(V(dx * .35, 0, dz * .35));
    const tip = knobBot.clone().add(V(dx * .55, -.05, dz * .55));
    const carPts = new THREE.CatmullRomCurve3([foot.clone().addScaledVector(fn, -.40), foot, mid, tip]).getPoints(14);
    S_CAR.tube(carPts, .028, .032, cCarD2, cCarD1, 8, true);
    S_CAR.lobe(carPts[6], .082, .095, .082, cCarD2);
    S_CAR.lobe(carPts[11], .088, .102, .088, cCarD1);
    if (!(fx > 0 && fz > 0)) SITES.car.push(mid.clone());
  });

  // 5 sculpted heterodimeric alpha-v-beta-5 integrins rising from the clathrin-pit shoulder to engage viral RGD loops
  for (let k = 0; k < 5; k++) {
    const a = k * Math.PI * 2 / 5 + .38;
    const rFoot = 2.05;
    const ax = Math.cos(a - .09) * rFoot, az = Math.sin(a - .09) * rFoot;
    const bx = Math.cos(a + .09) * rFoot, bz = Math.sin(a + .09) * rFoot;
    const footA = V(ax, hostSurfY(ax, az), az), footB = V(bx, hostSurfY(bx, bz), bz);
    const kneeA = V(Math.cos(a - .07) * 1.55, footA.y + 1.15, Math.sin(a - .07) * 1.55);
    const kneeB = V(Math.cos(a + .07) * 1.55, footB.y + 1.15, Math.sin(a + .07) * 1.55);
    const head = V(Math.cos(a) * .92, Y_VIR - R_CAP + .12, Math.sin(a) * .92);

    S_CAR.tube([footA.clone().add(V(0, -.38, 0)), footA, kneeA, head], .028, .034, cIntA, cCarD1, 8, true);
    S_CAR.tube([footB.clone().add(V(0, -.38, 0)), footB, kneeB, head], .028, .034, cIntB, cCarD1, 8, true);
    S_CAR.lobe(kneeA, .062, .062, .062, cIntA);
    S_CAR.lobe(kneeB, .062, .062, .062, cIntB);
    S_CAR.lobe(head, .095, .082, .095, cIntA);
    S_CAR.lobe(head.clone().add(V(.08, -.04, -.05)), .082, .072, .082, cIntB);
  }

  // Sculpted amphipathic lytic Protein VI alpha-helical cylinders inserting into the endocytic pit bilayer
  const cVI = col('#e879f9'), cVI2 = col('#f0abfc');
  for (let m = 0; m < 8; m++) {
    const a = 1.9 + m * .42, r = 1.2 + (m % 3) * .65;
    const x = Math.cos(a) * r, z = Math.sin(a) * r, y = hostSurfY(x, z), n = hostNormal(x, z);
    const pTop = V(x, y, z).addScaledVector(n, .24), pBot = V(x, y, z).addScaledVector(n, -.24);
    S_LYTIC.tube([pBot, pTop], .038, .042, cVI, cVI2, 10, true);
  }

  S_CAR.done(); S_HOST.done(); S_LYTIC.done();
}

const MOL = {
  carsig:  ['CAR–Fiber attachment signal',  '#facc15', 'star', .14],
  rgdsig:  ['RGD–Integrin endocytosis cue', '#22d3ee', 'ring', .14],
  pvi:     ['Lytic Protein VI release',     '#e879f9', 'hex',  .15],
  vdna:    ['Uncoating dsDNA + Protein VII','#f43f5e', 'wave', .16],
};

function glyph(g, kind, x, y, s, hex) {
  const c = x + s / 2, m = y + s / 2, r = s * .34;
  g.save(); g.translate(.5, .5);
  const stroke = () => { g.strokeStyle = '#101522'; g.lineWidth = s * .18; g.stroke(); g.strokeStyle = hex; g.lineWidth = s * .1; g.stroke(); };
  const fill = () => { g.fillStyle = hex; g.strokeStyle = '#101522'; g.lineWidth = s * .1; g.fill(); g.stroke(); };
  g.lineCap = g.lineJoin = 'round';
  if (kind === 'ring') { g.beginPath(); g.arc(c, m, r * .88, 0, Math.PI * 2); stroke(); }
  else if (kind === 'hex') { g.beginPath(); for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3 - Math.PI / 6; g[k ? 'lineTo' : 'moveTo'](c + Math.cos(a) * r, m + Math.sin(a) * r); } g.closePath(); fill(); }
  else if (kind === 'star') { g.beginPath(); for (let k = 0; k < 10; k++) { const a = k * Math.PI / 5 - Math.PI / 2, R = k % 2 ? r * .44 : r * 1.04; g[k ? 'lineTo' : 'moveTo'](c + Math.cos(a) * R, m + Math.sin(a) * R); } g.closePath(); fill(); }
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
  { rate: 1.5, acc: .3, go: () => {
    emitFlow('carsig', [V(0, Y_VIR - R_CAP - FIBER_LEN - .2, 0), V(-.15, Y_VIR - R_CAP - 1.0, -.15), V(0, Y_VIR - R_CAP, 0)], ['fiber', 'car', 'penton'], 2.4);
  }},
  { rate: 1.6, acc: .6, go: () => {
    const a = rr(0, Math.PI * 2);
    emitFlow('rgdsig', [V(Math.cos(a) * .6, Y_VIR - R_CAP, Math.sin(a) * .6), V(Math.cos(a) * 1.35, -3.2, Math.sin(a) * 1.35), V(Math.cos(a) * 1.95, -4.8, Math.sin(a) * 1.95)], ['penton', 'car', 'host'], 2.8);
  }},
  { rate: 1.5, acc: .4, go: () => {
    const a = rr(Math.PI * .55, Math.PI * 1.85);
    emitFlow('pvi', [V(Math.cos(a) * 1.1, Y_VIR - 3.4, Math.sin(a) * 1.1), V(Math.cos(a) * 1.7, -4.1, Math.sin(a) * 1.7), V(Math.cos(a) * 2.3, -4.9, Math.sin(a) * 2.3)], ['cement', 'penton', 'host'], 2.7);
  }},
  { rate: 1.4, acc: .2, go: () => {
    emitFlow('vdna', [V(-.5, Y_VIR + .8, -.5), V(-.2, Y_VIR - 1.4, -.2), V(-.1, Y_VIR - R_CAP - .4, -.1), V(-.3, -4.9, -.3)], ['dna', 'core', 'penton'], 3.4);
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
  k.innerHTML = `<div class="row">DNA bases ${'ATGC'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>`
    + `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span>dsDNA strand 1 <span class="bar" style="background:${BACKBONE[1]};margin-left:6px"></span>strand 2</div>`;
  legend.append(k);
}

const tipBox = document.getElementById('tip'), TIP0 = 'Human Adenovirus tiles its 90 nm non-enveloped capsid with 240 Hexon trimers (PDB 1P30), 12 Penton bases (PDB 1X9T) and 12 projecting Fiber knobs (PDB 1QIU) that bind host CAR.';
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
  ['virion', V(24.5, 2.5, 27.5), V(0, .2, 0)],
  ['vertex', V(7.4, 9.4, 8.4), V(0, 6.9, 0)],
  ['core',   V(7.6, 3.0, 8.6), V(-.4, 2.3, -.4)],
  ['entry',  V(8.8, -2.2, 9.8), V(0, -3.9, 0)],
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
document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'adenovirus-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

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
    hexon: [P.hexon, 3.2], penton: [P.penton, 2.2], fiber: [P.fiber, 2.6], cement: [P.cement, 2.8],
    dna: [P.dna, 2.6], core: [P.core, 2.4], car: [P.car, 2.4], host: [P.host, 3.2],
  };
  if (!AT[key]) return FOCUS[key] = null;
  const [c, r] = AT[key];
  return FOCUS[key] = { c: c.clone(), r, dir: d0.clone() };
}
const KIN = { hexon: ['cement', 'penton', 'fiber'], dna: ['core'] };
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
  buildCapsidAndFibers();
  buildCoreAndGenome();
  buildHostEntry();
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
    hexon: SITES.hexon[0] ?? V(-3.5, 3.6, -1.2), penton: V(0, Y_VIR + R_CAP * .965, 0), fiber: V(0, Y_VIR + R_CAP + FIBER_LEN + .2, 0),
    cement: SITES.cement[0] ?? V(-3.1, 2.4, -1.5), dna: V(-1.45, Y_VIR + .55, -1.15), core: SITES.core[0] ?? V(-.8, Y_VIR - .3, -.8),
    car: SITES.car[0] ?? V(-.4, -3.6, -.4), host: SITES.host[0] ?? V(-2.6, -4.6, -.9),
  };
  if (vName === 'vertex') P = {
    penton: V(0, Y_VIR + R_CAP * .965, 0), fiber: V(0, Y_VIR + R_CAP + FIBER_LEN + .2, 0), hexon: V(-1.6, Y_VIR + 3.6, -1.1),
    cement: V(-1.1, Y_VIR + 3.3, -.7),
  };
  if (vName === 'core') P = {
    dna: V(-1.45, Y_VIR + .55, -1.15), core: SITES.core[0] ?? V(-.8, Y_VIR - .3, -.8), hexon: SITES.hexon[0] ?? V(-3.5, 3.2, -1.2),
    cement: SITES.cement[0] ?? V(-3.1, 2.4, -1.4),
  };
  if (vName === 'entry') P = {
    fiber: V(0, Y_VIR - R_CAP - FIBER_LEN - .2, 0), penton: V(0, Y_VIR - R_CAP * .965, 0), car: SITES.car[0] ?? V(-.4, -3.6, -.4),
    host: SITES.host[0] ?? V(-2.6, -4.6, -.9),
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
