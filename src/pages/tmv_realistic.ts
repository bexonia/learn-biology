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

runBiologyApp(20261108, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
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
  gr.addColorStop(0, '#122b1e'); gr.addColorStop(.52, '#07140d'); gr.addColorStop(1, '#020604'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, .1, 400); camera.position.set(11.5, 2.8, 13.5);
const controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, -.2, 0); controls.enableDamping = true; controls.minDistance = .5; controls.maxDistance = 85; controls.panSpeed = .5; controls.zoomSpeed = .5;
scene.add(new THREE.HemisphereLight('#dfffee', '#192b22', .5));
const key = new THREE.DirectionalLight('#fff8e6', 3.0); key.position.set(14, 24, 18); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 75 }); key.shadow.bias = -.0005; key.shadow.normalBias = .03;
const rim = new THREE.DirectionalLight('#6ee7b7', 1.5); rim.position.set(-16, 8, -14);
const lamp = new THREE.PointLight('#fde047', 14, 28, 2); lamp.position.set(3.2, 2.5, 3.2);
scene.add(key, rim, lamp);
const cell = new THREE.Group(); scene.add(cell);

const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)], CUT = CUT_LOCAL.map(p => p.clone());
let cutOn = true;
function updateCut() { CUT.forEach((p, i) => { p.copy(CUT_LOCAL[i]); if (!cutOn) p.constant = 1e4; p.applyMatrix4(cell.matrixWorld); }); }
const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };
const phys = o => new THREE.MeshPhysicalMaterial({ envMapIntensity: .8, ...CLIP, ...o });
const nmap = waveNormalMap(), bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };

const PARTS = [
  ['coat', 'Coat protein helical subunits (17.5 kDa, 2TMV)', '#34d399'],
  ['disc', '20S proto-helix lock-washer assembly discs', '#a3e635'],
  ['rna', 'Helical (+)ssRNA genome (6.4 kb) & OAS loop', '#facc15'],
  ['channel', 'Central 4 nm lumen & Caspar carboxylates', '#22d3ee'],
  ['ribo', 'Host plant 80S ribosome ("striposome") & replicase', '#fb7185'],
  ['mp', '30 kDa Movement Protein & plasmodesma gate', '#c084fc'],
];

const INFO = {
  coat: ['2,130 identical four-α-helix bundle subunits (16⅓ per turn, PDB 2TMV)', 'Forms the rigid 18 × 300 nm right-handed helical cylinder (2.3 nm axial pitch)'],
  disc: ['34-subunit two-layer cylindrical discs / lock-washer intermediates', 'Nucleates on the Origin-of-Assembly (OAS) RNA hairpin to grow the rod'],
  rna: ['6,395 nt capped (+)ssRNA wound coaxially at 4.0 nm radius (PDB 2TMV)', 'Binds 3 nucleotides per coat subunit and threads a travelling loop up the lumen'],
  channel: ['4.0 nm wide hollow central channel lined by Glu95/97/106 & Asp109', 'Ca²⁺/H⁺ switch locks the virion outside and triggers uncoating inside the cytosol'],
  ribo: ['Host plant 80S ribosome + nascent 126/183 kDa replicase', 'Co-translationally strips coat subunits from the 5′ cap end upon entry'],
  mp: ['30 kDa TMV Movement Protein ring at plant cell-wall plasmodesmata', 'Dilates plasmodesmata pores from 2 nm to >9 nm for cell-to-cell viral spread'],
};

const REG = {};
const reg = (key, m) => { const r = REG[key] ??= { mats: [], imp: [] }; (m.isShaderMaterial ? r.imp : r.mats).push(m); return m; };
const shells = [], LOOKS = ['gel', 'see-through', 'solid'];
let organelleLook = 'gel';
function shellMat(key, solid, gel, tint, o = {}) {
  const m = reg(key, phys({ color: solid, roughness: .16, clearcoat: .6, clearcoatRoughness: .2, sheen: .6, sheenColor: o.sheen ?? '#ffffff', ior: 1.35, thickness: o.thickness ?? .6, attenuationColor: tint, attenuationDistance: o.atten ?? 1.1, ...o.extra }));
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
        gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi) * uDim, 1.);
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
        gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi) * uDim, 1.);
      }`,
    clipping: clip, clippingPlanes: clip ? CUT : null, clipIntersection: true, side: THREE.DoubleSide,
  });
  impMats.push(m); return reg(key, m);
}

const shade = (mesh, cast = true, receive = true) => { mesh.castShadow = cast; mesh.receiveShadow = receive; return mesh; };
const BASE = { A: '#ff5a5a', T: '#ffd24a', G: '#3ddc84', C: '#ff9a3c', U: '#ff7ad9' };
const MRNA = '#facc15';
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
const STRAND_R = .18 * NM, ROD_R = .1 * NM, JOINT = .32 * NM, SILVER = '#d4d9e2';
function rnaAlong(S, ax, bb = MRNA) { rna.rnaAlong(S, ax, bb, NM); }

const PDB = {"turn":{"pdb":"2TMV","full":{"n":2669,"xyz":"if7p/zD/j/6e/0P/h/5v/0H/Wv0n/rX/cP00/pj/eP0k/nb/nf0p/m7/nv0f/kr/wf0r/kD/4P0z/lX/4P1Y/kv/wv1c/mH/0f1h/oT/3v2C/nb/uf2L/nv/s/19/p7/z/2T/qv/1v2y/r//0/3F/p7/sv3X/qf/r/38/qv/kv0S/7T/jP0u/5r/h/1J/7P/oP0+/83/vP1A/7T/sf1g/6P/rv10/8P/z/1m/87/4P1w/63/1f2U/6z/2/2T/9H//f2G/8n/Cf6k/7X/Bv65/9T/Jf6t/+b/Sv6x/+T/YP6Z/9H/ff6p/+L/cv6Y/wIAg/52////ZP5s/xIASP55//z/V/5l/9//Vv5H//f/NP5I/wgAI/5R/+f/NP4y/9n/If4e//X/Av4z//D/CP4p/8z/Df4E/9X/8P39/u7/1/0R/9n/1/3u/sr/wf3U/tn/t/2w/tH/kv2u/sn/hv2S/rL/kP1v/r3/gv1N/rf/bP1I/tb/Y/1r/sv/Wf18/qn/XP2g/pz/R/25/q//KP3J/qH/JP3s/rD/Sf32/qr/Yf32/o3/hv3v/oz/p/38/n//v/3f/nT/5f3l/nj/8v3Q/lv/3P3k/kT/7v3j/iL/7P0J/yP/7v0T/0j/Bf73/lH/Jv4G/0T/Gv4p/07/G/4e/3L/P/4R/3X/S/4x/2T/PP4+/4T/Q/4k/57/af4l/5f/df5I/47/cf5P/7P/if4z/77/pv5K/7f/uP5p/6z/1v5o/8T/xP5r/+X/4v5y//v/5f6P/xQACP+D/x8AD/+h/zUAK/+t/0wAGv+4/20AEP/W/1kAD//J/zUALf+8/yEAQf/T/woATf/A/+v/Lf+s/+z/Gv+u/8v/N//C/73/Rv+n/6f/Of+J/7r/E/+E/7X/+P6W/6D/3v6x/6X/2P6u/3//xv6N/4X/tP6T/6b/nv6w/53/mf6d/33/iv6C/5T/bv6a/5r/Z/6j/3X/Yf5+/27/Tv58/47/NP6X/4j/Nf6L/2T/Lv5l/2T/E/5x/3z//v2D/2H/BP5s/0L/8f1U/1j/2f1w/2L/0/11/z3/zP1R/zr/uf1L/1v/pP1o/0//m/1V/y//j/05/0b/pv0h/zP/nf39/jv/kv0B/1//eP3l/l7/Vv3Z/mv/S/21/nH/Pf2y/k7/X/2+/kb/ev2r/lr/Z/2L/lH/Zf2U/iz/iv2d/jP/l/19/kX/gf1j/jT/ef1T/lb/VP1L/lv/Qv1G/nz/K/0q/on/Gv0r/qv/tf5b/zb/1v4X/0j/4f7p/kX/Q/5G/a3/Uv5b/ZH/YP5P/XD/gf5i/Wj/hv5a/UT/ov5y/Tv/u/6F/VH/rv6n/Uf/kP6f/V3/nP6p/YD/nP7N/XP/d/7H/Xf/df63/Zr/h/7W/aj/gv71/bz/eP4G/pz/U/4K/qT/Qv4r/qn/H/41/rH/D/5M/pj/AP5k/rH/G/5i/sz/Nf5v/rP/H/6J/qP/E/6Z/sP/OP6Y/s7/RP6o/q3/LP7G/qz/Mv7H/tL/V/7H/sv/V/7o/rf/S/76/tb/bP76/un/jf4M/+f/q/7+/tT/v/4X/+f/u/4C/wYA2P7q/gMAv/7V/hUAoP7X/v7/tv7K/uL/wP6t/vn/n/6i/gkAjf6k/uj/qP6O/tr/nv50/vb/ef58/vD/g/51/sz/lf5V/tX/ff5D/u3/X/5M/tj/bP4t/sj/Yf4L/tf/Zf7n/c3/RP7X/cX/RP65/a3/Wv6d/bj/Wv53/bH/R/5r/dD/Mf6I/cX/Iv6U/aP/GP63/Zf/+/3G/ar/2P3J/Zv/x/3o/ar/5v3//aX//P0I/on/If4Q/on/O/4p/nz/XP4X/nH/ff4r/nb/kv4d/lr/dv4o/kL/iP4v/iH/d/5R/iL/df5Z/kf/lf5I/lD/rv5j/kT/lv5//k7/m/50/nL/wf52/nb/v/6Y/mb/rP6e/oX/vf6I/p//3/6X/pn/3f68/pH/1/7B/rb/9/6v/sH/Cv/P/rv/Dv/z/rH/Kv/8/sn/GP/4/ur/Mf8K/wEAKf8l/xoATv8n/yYASP9F/zwAXv9Z/1QASv9d/3UANf92/2EAOf9q/z0AWv9q/ykAZf+H/xMAd/96//T/Yf9c//T/T/9X/9P/Y/90/8b/e/9i/6//ev9B/8H/Wf8u/7z/Ov81/6f/GP9E/6v/E/9A/4X/D/8b/4r/+/4Z/6z/3P4s/6L/3/4Y/4L/2/76/pj/uP4F/53/r/4M/3n/t/7n/nH/pf7e/pH/g/7t/or/iv7j/mb/kv69/mb/dP6+/n3/Wv7H/mP/aP61/kP/X/6X/lj/P/6o/mP/OP6r/j3/Pv6H/jr/L/55/lr/EP6N/k7/EP55/i7/D/5a/kT/Lf5M/jL/Mv4n/jj/Jv4n/lz/Gf4C/lv//v3q/Wb/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cgGOAEIAVQGGAFoAUgFoAHEAMQF0AIAAKwFVAJQAEAFJAKwAIwE6AMsAKQEdALMAKAEtAJEACQE9AIAA8QAqAGoA5ABBAE4ABQFSAE0AFQFSACsA9gBCAB4A5gBfAAwA9wB7ACAAHAF+ABgANAFtAP//TAFQAP//TwFWANn/ZAF1AOD/eQFrAP//jAFNAPD/jwFjANP/oQF7AOr/vQFhAOv/vwFbAMX/yAGAAMD/3gF9AN//9QFiANP/8QFyALH/+wGXALT/FwKHAMf/KAJ3AKr/IQKQAI3/OAKlAKP/TgKHAKn/UAKFAIP/WgKpAIP/cAKqAKL/ggKNAJH/iQKjAHL/mQK8AIr/ggLXAHz/jgL5AIb/nALxAKj/uAIMAaf/2wIVAbH/6gI3Abr/9QI9AZb/0AIzAZD/uQJFAaj/zQJlAaD/ywJfAXv/pwJZAYX/ngJ3AZr/swKRAYr/wAKdAav/5gKjAa7/+wKjAc3/FQO8Adr/KQO4Afr/cQGtAJT/VgHwAK//TwEfAbH/EgKtAi4A/gGcAhEA7gGrAvL/zAGbAu3/xAGnAsr/pgGRAsL/jQF+Atj/lwFcAsv/twFgAt7/rgFUAgAAqgExAvH/0AE1AvH/1gFBAhUAxAEiAiIAyQEBAjMAzgHzARAA8wHsARUAAgLKARUAJgK9ARkAMQKnAfz/QQKNARIAKQKNAS8ADAKEARgAHgJrAQMALAJXASEACAJZAS8A+QFNAQ8ADgIuAQkADAIqAS8A5wEsASsA4gEOARUA7wH4ADEA0AH4AEcArgHpAEcAkAH6ADgAfAHhAEsAhAHyAGsAaQENAW0AhQEeAX4AogEdAWQAigEtAUsAhAFIAWYApwFQAXQAtQFPAVEAmwFpAUgAqQF/AWQAzQF2AVoAwAGBATgAsQGhAUUAzQGvAVwA6AGmAUQA2wHHATgA6gHmAUgA6AEMAkMACQIbAjkACQI6AiQA9gFXAjMA+AF9Ai8ADgKFAk0AIQJoAj0ALAJeAhoAMgI8AgkAUAIqAhgAcQImAgYAgQIFAhAAYQLwAQwARwLrAfH/IgLlAfT/BQLQAej/5AHkAeL/wwHSAen/rQHjAdD/xQHaAbX/sAHXAZX/vwG0AZL/xAGnAbX/pgG5AcP/igGiAbf/oQGEAbz/oAGLAeH/ewGLAen/eAFrAdX/jgFhAfL/gQF2AQ8AXgFpAQsAXAFFAQAAZgE8ASQASAFPATQAMgExAS0AKwEOASAAEAEEAToAJgEEAVkADgHyAHEAFwHVAIcA8wDTAJYA+QCzAKkA5ACeAMEA+wCWAN8ADAF+AMcABQGNAKUA4gCSAJQA1AB3AH0AvwCIAGEA2AClAGEA5wCrAD8A0ACRADIAtwCmACAAvADGADQA3gDWAC0A+gDQABQAGwG/ABQAHQHGAO//JAHqAPb/OwHoABYAWAHUAAcAUwHrAOr/WwEHAQEAfgH5AAMAggH1AN3/fQEbAdn/kQEgAfj/sgEPAez/qQEdAcv/owFDAc7/wwE/AeL/2gE2AcT/ygFMAaj/1wFnAb7/9wFUAcX/+gFUAZ7/9gF5AZ//CQKCAb7/JQJtAa3/JAKFAY//KQKhAaj/CgKyAZr/CALXAaT/GALTAcf/JwL3Acf/RAIMAtL/RQIxAtv/TgI7Arf/MAIlArH/EwIsAsn/GgJRAsL/GgJMApz/+wE4AqX/5wFQArv/8QFyAqv/+AGBAs3/GQKUAtH/LAKcAvD/OwK8Av7/TgK/Ah8AHAElAaz/6QBZAcf/0QCCAcr/7wA4A1AA5AAiAzMAzwArAxQAtgAPAw0AqgAYA+r/lwD4AuL/hwDdAvf/nQDBAun/uQDRAv3/tQDCAh8AvgChAhAA4ACyAhEA4QC/AjUA2wCbAkEA7AB+AlEA9wBzAi8AHAF6AjQANgFhAjQAXAFiAjgAbwFSAhwAhwE/AjEAcQE3Ak4AWQEkAjYAdAETAiEAhwEFAj8AZgH5AU0AXAHpASsAfAHVASYAewHQAUsAVwHDAUcAXwGmATAAcwGXAUwAVgGKAWEAPAFvAWEAGgF1AVIAEAFVAWMAEQFoAYQA7gB2AYUAAQGRAZgAHAGaAX4AAQGiAWUA8QC4AYAADgHMAY8AHAHRAWwA+gDfAWMA/wD4AYAAIwH9AXYAFAEDAlQA+gAbAmIADgEyAnoAKwE0AmIAEwFPAlYAFQFxAmcABQGTAmIAHgGtAlkAEgHLAkQA9QDeAlMA6QACA1AA+gASA24AFwH+Al8AJQH5AjsAOAHdAisAWwHXAjoAewHgAigAlgHHAjIAgAGoAi4AagGaAhIASgGHAhQANwFoAgcAEgFuAgEA+QBRAgYA3gBaAu3/+QBaAtL/5wBRArL/AgE1Aq//CgErAtL/6AAwAuD/1wARAtP/+AD9Adj/9AADAv3/0QD1AQQA2wDXAfD/8gDUAQ0A3gDiASoAwgDJASUAzwCoARkA2gCjAT0AtwCoAU0ArgCEAUUAtQBhATgAoABOAVEAswBWAXEAowA7AYcAtgAjAZ0AlQAUAasApgD4AL4AmwDcANUAsgDcAPQAywDNANwAwADZALoAnwDRAKgAmwCzAJEAgwC7AHUAjgDfAHYAmgDsAFQAjwDLAEYAcADWADMAaQD1AEgAggARAUIAnwAWASoAxAATASoAwwAaAQUAvQA/AQ0A0gBFAS0A9AA9AR8A6ABRAQIA5ABtARoACgFuARwAEAFtAfb//QCNAfP/DgGZARIAMgGWAQcAJQGhAeX/EgHCAen/MQHJAf3/SQHLAeD/MgHZAcT/NAH3Adv/WQHxAeH/XQHyAbv/SgETArz/WQEiAtz/egEaAsv/cQEwAq7/awFMAsf/SAFQArj/OAFxAsP/SAFzAub/SQGaAuf/XAG4AvP/TgHaAv3/UwHoAtn/QAHIAtL/IgHEAun/GgHpAuP/HQHlAr3/CAHHAsX/7ADVAtv/6QD4Asz/6QAIA+//AQEmA/P/DwE0AxMAEAFXAyEAIQFgA0MAoAB0AcP/XQCQAd//NwCtAeL/rf9MA28ArP80A1EAlv81AzIAiP8SAyoAe/8WAwcAdf/yAv7/cP/SAhIAj//BAgUAo//aAhkApP/JAjsAuv+vAisA0//LAi0Azv/WAlEA1f+zAl0A8P+eAm0A/v+ZAksAHgCtAlEAQACfAlEAYgCuAlYAewCoAjkAmACfAk8AhgCOAmsAdwB0AlMAlwBvAj4ArQBpAlwAkwBRAmkAkAA/AkcAtQA4AkIAtgAyAmcAmQAaAmIArAACAksAwwD6AWcArQDkAXsAnwDBAXoAfgC5AWoAgACYAXsAegCpAZwAVACpAZ0AWwDJAbAAcgDcAZgAVQDZAX4APgDnAZkAUQAEAqkAXQAPAoYAOAAQAn0AMwAoApoAUwA7ApEAQwA7Am8AIQBHAnwAKwBjApUARgBxAn0AJQCBAnIAGgChAoMA//+6An4ADQDdAnYA9//0AmIA1f/7AnEAvP8YA24Axv8sA40A5/8lA30A9/8nA1oAFAATA0kANgAbA1kAUAAvA0gAcgAiA1MAagD9Ak0AXADpAjEARADKAjIAPwCoAiQAGgCgAh0A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","kind":"Dg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQODg4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQODg4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQODg4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQODg4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQODg4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ODgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ="},"red":{"n":130,"xyz":"egL2AAMAEQAj/V3/7ADKAWQAV/2a/kkAmf7f/uv/8P1U/l7/xv0SAl0AGv++/Un/iQFGAdf/LP5RALUApf4w/kr/FP+MAYEAFAFX/+r/ZP2L/oX/VP9j/uv/OQDlAYIAYQG0AgoA3/39/lH/xgEW/9//W/9p/ar/Qf0RAaEAvf8OAzkAd/6r/mL/zf4lAUoA2v8b/u7/vQE//oT/CP5A/ysAgv3Y/pUAdf8t/0EAXf1F/1wAdP61/6EAKAFiAj4AWP5e/sv/SwGe/sv/4P3c/sP/Kf4RATEALADC/X7/dgFEAO3/BgHhAt//+/9q/pj/l/3pAHAA1gDd/Uz/2f1+ATwA4AKbAfX/Zf+uAPkAqADO/q3/7P8E//b/vP2UAJkAdP1qAW8AHP/9/wMBQAFh/WL//gB6AG8ARv8v/n3/j/4RAbkADv+9/3oACP99AIcA3v5s/rv/5P2H/7UAcgIz/oj/2P7BAhYAnf7fARUAbQBpAmMAdgIzAAMAnf87An4ASgAtAvn/PQIYAvL/1wG2/+7/KwIM/2n/dwAY/0oACQM1/5X/3v7T/bT///zsAGEAfQKb/6z/Zv/sAIEANf+4AlEAlAKSAbD/9v8NAaMACQIjALr/q/12ACsAJv7e/Xv/oQCa/bD/Yf7OAY8AqwA5/sn/2gIVAcL/lwDi/GX/qf+jAVoA4ABjARcATf5v/YX/aP/z/Hj/fP5oAGAATv0lASgA5gGnABcATgLKAJL/3wHZAev/4/3S/zAAWv5bAkUAeP0rAJMAJgDaAiYAZf5v/3L/+/5G/Wb/GAN6ALH/8P40AoMAQv9//9H/af+7/o//GgJmAen/y/1l/4f/Hv2+/3wAggDrAJ0ABwP0/6v/lQC3AvD/8wF1AvH/lv6C/9j/oP7WAnAAUgH+ADEAvgGA/X//Af0QAFcA2gA2/WX/Zv8+AggA6f77/pH/EAG5/1oAjgITAIT/ZwAi/az/hALq/rz/+QARAzsAjgGdAU0AxP+j/Xj/PQHS/br/SACLAS8AJAEVAtj/Bf41AaYA","kind":"CAAEBAQABAgAAAQEAAAICAQAAAgICAQIAAgEBAgEBAQECAAIAAgEAAgECAgIBAAACAAECAgIBAgIBAgABAgEAAgABAAEAAgIBAQACAAEAAQEBAQIAAAEBAgACAgIAAQEAAgACAQAAAgAAAAEBAQAAAAABAAAAAQEBAAABAAABAgECA==","rad":"KyotKygqMSksLyUxMTQpKiYoNyYgMCctKzgrKikvMisoNiksLDEjLiYrKSYqLy8jIi4pNCopLCwmLDckLCwuKywoMy0uMikkMCoqKDApKS8oLDUoJDQuKikuIDMrLC4pKTArKjEqLCgtLikvKSUwLicuMSwiLyswJScwJywuKywwKQ=="}},"sub":{"pdb":"2TMV","full":{"n":157,"xyz":"fgDMAJP/hACBAKb/fABSAKT/T/8K/xgAZP8X//v/bP8H/9n/kf8M/9H/k/8C/63/tf8O/6P/1P8W/7j/1f87/67/tv8//8T/xv9E/+f/0/9l/9n/rv9u/97/qP9g/wEAxP92/w4Ay/+V/yIAyP+o/wEAp/+6/woApP/f/w4Ah//1/xcAgf8RAP3/fP8sABYAlP8hADAAsf8jABcApv9DAAYAov9XACYAxP9JADEA1P9TABAAyf93AA8A0P92ADQA8v9pACwA/v+GABgA+/+cADcAGgCQAEkAPwCUAEcAVQB8ADQAcgCLAEUAZgB7AGUAeABZAGIAWQBPAHUAPQBcAF8ASwBIAEIASwAqAFoAKQArAGsAGAA0AEoAKAAVADwAFgABAFgA9v8WAFMA/f8LAC8AAQDn/zgA5f/g/1EAzP/0/zwAzP/R/y0Atf+3/zwAq/+T/zQAhv+R/ywAe/91/xUAhf9S/yAAd/8v/xoAYf8r/zkAV/9O/y4ATv9f/wwAUf+D////PP+c/xIAHP+s/wQAGf/P/xMAPf/Z/w0AVf/Z//D/e//S/+//nP/e/+L/tP/C/9f/2v/I/9v/5/+z/77/0f/H/6f/4//G/4X/4P/s/4b/4v/1/6v/+v/a/7T/GwDp/6f/DwAMALH/EAABANX/NAD0/9j/PwAUAMf/MAAhAOf/OAAHAAEAXQAIAPr/aQArAPH/ZgAyABYAfgAWACEAmwAsABoArABMAA8AygBLACcAuABOAEgA1wBVAF4A2gByAHcA/QBmAIIAAwGEAJgAHwGQAK8ADwGbANAABQG5ALwAAwGsAJgAIQGfAIQANgG2AG0AQgGjAE4AIQGPAE8ADgGRAC4AKwGlACAAOwGKAAoALQFsAB0ACAFnABgA7QB5AAMA0wCTAAgAzQCRAOL/ugBwAOj/qAB2AAkAkgCTAAAAjQCAAOD/fwBlAPf/YgB9AP3/XACGANj/VQBhANH/QgBfAPH/KAB6AOv/KQBtAMf/IwBIAMf/CABUAN//8/9mAMT/+f9PAKX/5f83ALv/zv9TAMX/yP9YAKD/wP8zAJ3/rv8uAL7/mf9LALL/kP84AJL/hP8cAKn/mv8EAJb/kv/g/57/hv/k/8L/bf/I/8H/S/+8/87/P/+Y/9T/Mf+U/7H/VP+h/6n/b/+O/73/XP9u/7T/Wv93/4//fv9//5b/jP9g/6j/dv9G/5f/bf82/7n/SP8u/77/Nv8p/9//IP8N/+z/D/8O/w4A","kind":"BgYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},"red":{"n":30,"xyz":"OAAOAN//WgBfAFYADwGeAKgAzP9V/+D/uv/C//X/vf89AKz/o/83AB0AnQA5ACMArv9u/97/TQByAM3/BAAJAEkAnv8J/7b/hf/Z/8r/sgB/APf/5ABkAHIAx/+G/xgAX/9C/yMAgf8RAA4AKAGQADMAlv9Z/xAA1P9jACMAcf+D/xYAZf96/6b/Lf8U//z/Yv8g/9P/uv+0/zQAyv8w/7n/FACSADgA7P/X/6P/Of+7//j/","kind":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","rad":"ICAdFBwkGh0QJCIXHCAXFBoXIBQcFyAaGhcXGh8f"}}};
const _models = {};
const decodeModel = pdb.decodeModel;
function model(name, full = true) {
  const k = name + (full ? ':f' : ':r');
  if (_models[k]) return _models[k];
  const s = PDB[name]; return _models[k] = decodeModel((full && s.full) ? s.full : s.red);
}
function placeMol(S, name, pos, quat, colFn, full = true, scale = 1, skipRna = false) {
  const m = model(name, full), v = V(), kScale = .01 * NM * scale;
  for (let i = 0; i < m.n; i++) {
    const kd = m.kind[i], grp = kd >> 2, part = kd & 3;
    if (skipRna && (part === 2 || grp === 3)) continue;
    v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2]).multiplyScalar(kScale).applyQuaternion(quat).add(pos);
    const r = m.rad ? (m.rad[i] * .25 * .18 * NM * scale) : (.82 * NM * scale);
    S.add(v, r, colFn(grp, part, i));
  }
}

const caps = new THREE.Group(); cell.add(caps);
const SITES = { coat: [], disc: [], rna: [], channel: [], ribo: [], mp: [] };
const Y_BOT = -5.2, Y_TOP = 4.2, PITCH = .23;
const qZtoY = new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), -Math.PI * .5);

function buildHelicalRodAndDiscs() {
  const rodH = Y_TOP - Y_BOT, rodMid = (Y_TOP + Y_BOT) * .5;
  // Inset translucent gel cylinder (radius 0.53, strictly inside the 2TMV coat protein wall r=0.58..0.91)
  const coatMat = shellMat('coat', '#188a56', '#6ee7b7', '#0a482b', {
    atten: 1.2, thickness: .45, sheen: '#a7f3d0',
    extra: { clearcoat: .5, envMapIntensity: .65, normalMap: bump(10, 24), normalScale: new THREE.Vector2(.2, .2) },
  });
  const outerCyl = new THREE.CylinderGeometry(.53, .53, rodH, 48, 1, true); outerCyl.translate(0, rodMid, 0);
  cell.add(shade(new THREE.Mesh(outerCyl, coatMat), true, true));

  // Inner 4 nm aqueous lumen cylinder (radius 0.20 = 2.0 nm -> 4.0 nm diameter)
  const chanMat = shellMat('channel', '#0e7490', '#67e8f9', '#083344', { atten: 1.3, thickness: .3, sheen: '#cffafe' });
  const innerCyl = new THREE.CylinderGeometry(.20, .20, rodH, 36, 1, true); innerCyl.translate(0, rodMid, 0);
  cell.add(new THREE.Mesh(innerCyl, chanMat));

  const sCoat = balls('coat'), sDisc = balls('disc', cell, false), sChan = balls('channel');
  const coatPal = [col('#34d399'), col('#10b981'), col('#6ee7b7')];
  const discPal = [col('#a3e635'), col('#84cc16'), col('#bef264')];
  const cCa = col('#22d3ee'), cGlu = col('#38bdf8');

  const nTurns = Math.round(rodH / PITCH);
  for (let t = 0; t <= nTurns; t++) {
    const y = Y_BOT + t * PITCH, twist = t * (Math.PI * 2 / 3);
    const q = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist).multiply(qZtoY);
    const isFull = (t % 5 === 0) || t === nTurns || t === 0;
    placeMol(sCoat, 'turn', V(0, y, 0), q, g => coatPal[g % 3], isFull, 1.0, true);
    if (t % 8 === 0) SITES.coat.push(V(-.72, y, -.35));

    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI * .25 + twist;
      sChan.add(V(Math.cos(a) * .21, y, Math.sin(a) * .21), .85 * NM, (k + t) % 2 ? cCa : cGlu);
    }
    if (t === Math.floor(nTurns * .5)) SITES.channel.push(V(-.18, y, -.1));
  }

  // Top self-assembly zone: 20S two-layer proto-helix lock-washer discs + incoming 2TMV 'sub' wedges
  [Y_TOP + .68, Y_TOP + .92, Y_TOP + 1.75, Y_TOP + 1.99].forEach((yd, idx) => {
    const tilt = idx < 2 ? .08 : .15;
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(tilt, idx * .8, 0)).multiply(qZtoY);
    placeMol(sDisc, 'turn', V(0, yd, 0), q, g => discPal[g % 3], idx === 0, 1.02, true);
    SITES.disc.push(V(-.75, yd, -.35));
  });
  for (let k = 0; k < 6; k++) {
    const a = k * 1.05 + .4, r = 1.25 + (k % 2) * .35, y = Y_TOP + 1.25 + k * .22;
    const q = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), a).multiply(qZtoY);
    placeMol(sDisc, 'sub', V(Math.cos(a) * r, y, Math.sin(a) * r), q, () => discPal[0], true, 1.15, true);
  }

  sCoat.done(); sDisc.done(); sChan.done();
}

function buildHelicalRNA() {
  const sRna = balls('rna');
  const pts = [], nTurns = Math.round((Y_TOP - Y_BOT) / PITCH), steps = nTurns * 14;
  for (let i = 0; i <= steps; i++) {
    const f = i / steps, y = Y_BOT + f * (Y_TOP - Y_BOT), ang = f * nTurns * Math.PI * 2;
    pts.push(V(Math.cos(ang) * .40, y, Math.sin(ang) * .40));
  }
  for (let i = 1; i <= 40; i++) {
    const f = i / 40, y = Y_TOP + f * 2.4, r = .40 * (1 - f * .65) + .08 * Math.sin(f * Math.PI * 2);
    const ang = nTurns * Math.PI * 2 + f * Math.PI * 3.5;
    pts.push(V(Math.cos(ang) * r, y, Math.sin(ang) * r));
  }
  for (let i = 1; i <= 50; i++) {
    const f = i / 50, y = (Y_TOP + 2.4) - f * 5.0, ang = f * Math.PI * 6;
    pts.push(V(Math.cos(ang) * .11, y, Math.sin(ang) * .11));
  }
  rnaAlong(sRna, pts, MRNA);
  SITES.rna.push(V(-.38, .4, -.12));
  sRna.done();
}

function buildStriposomeAndMovement() {
  const sRibo = balls('ribo', cell, false), sMp = balls('mp', cell, false), sRna = balls('rna', cell, false);
  const tailPts = [];
  for (let i = 0; i <= 26; i++) {
    const f = i / 26;
    tailPts.push(V(-f * 1.35 + Math.sin(f * Math.PI * 2) * .16, Y_BOT - f * 1.85, -f * .75));
  }
  rnaAlong(sRna, tailPts, '#fde047'); sRna.done();

  const riboPos = V(-1.15, Y_BOT - 1.4, -.65);
  SITES.ribo.push(riboPos.clone());
  const c60S = col('#fb7185'), c40S = col('#fda4af'), cRep = col('#38bdf8');
  for (let i = 0; i < 160; i++) {
    const d = randDir().multiplyScalar(.55 * Math.cbrt(rand())); d.y += .22;
    sRibo.add(riboPos.clone().add(d), 1.45 * NM, c60S);
  }
  for (let i = 0; i < 110; i++) {
    const d = randDir().multiplyScalar(.45 * Math.cbrt(rand())); d.y -= .28; d.x += .18;
    sRibo.add(riboPos.clone().add(d), 1.35 * NM, c40S);
  }
  for (let i = 0; i < 45; i++) {
    const f = i / 45, p = riboPos.clone().add(V(-.55 - f * .7, .35 + Math.sin(f * 8) * .22, -.2 + Math.cos(f * 8) * .22));
    sRibo.add(p, 1.3 * NM, cRep);
  }

  const Y_PD = Y_BOT - 2.3;
  const pdGeo = new THREE.TorusGeometry(2.35, .28, 18, 48); pdGeo.rotateX(Math.PI * .5); pdGeo.translate(0, Y_PD, 0);
  const pdMat = shellMat('mp', '#7e22ce', '#c084fc', '#4c1d95', { atten: 1.3, thickness: .4, sheen: '#e9d5ff' });
  cell.add(shade(new THREE.Mesh(pdGeo, pdMat), true, true));

  const cMp = col('#c084fc'), cMp2 = col('#e879f9'), cWall = col('#4ade80');
  for (let k = 0; k < 36; k++) {
    const a = (k / 36) * Math.PI * 2, r = 1.95 + (k % 2) * .22;
    sMp.add(V(Math.cos(a) * r, Y_PD + Math.sin(a * 4) * .12, Math.sin(a) * r), 1.55 * NM, k % 2 ? cMp : cMp2);
    sMp.add(V(Math.cos(a) * 2.55, Y_PD + (rand() - .5) * .35, Math.sin(a) * 2.55), 1.4 * NM, cWall);
  }
  SITES.mp.push(V(-2.05, Y_PD, -.4));
  sRibo.done(); sMp.done();
}

const MOL = {
  oasloop: ['Travelling OAS RNA loop',       '#facc15', 'wave', .15],
  sub20s:  ['20S proto-helix disc subunits', '#a3e635', 'hex',  .15],
  caspar:  ['Ca²⁺ / H⁺ lumen switch ions',  '#22d3ee', 'ring', .13],
  rep126:  ['126/183 kDa viral replicase',   '#fb7185', 'star', .15],
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
  live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: .03 });
}

const STREAM_TIMERS = [
  { rate: 1.8, acc: .3, go: () => {
    emitFlow('oasloop', [V(0, Y_BOT + .5, 0), V(0, 0, 0), V(0, Y_TOP + .6, 0), V(-.35, Y_TOP + 2.1, -.2)], ['rna', 'channel', 'disc'], 3.2);
  }},
  { rate: 1.6, acc: .6, go: () => {
    const a = rr(Math.PI * .55, Math.PI * 1.95);
    emitFlow('sub20s', [V(Math.cos(a) * 1.8, Y_TOP + 2.2, Math.sin(a) * 1.8), V(Math.cos(a) * .9, Y_TOP + 1.1, Math.sin(a) * .9), V(Math.cos(a) * .72, Y_TOP + .2, Math.sin(a) * .72)], ['disc', 'coat'], 2.6);
  }},
  { rate: 1.5, acc: .4, go: () => {
    emitFlow('caspar', [V(-.12, Y_TOP, -.12), V(-.12, 0, -.12), V(-.12, Y_BOT, -.12)], ['channel', 'coat'], 2.8);
  }},
  { rate: 1.4, acc: .2, go: () => {
    const rb = SITES.ribo[0];
    emitFlow('rep126', [V(0, Y_BOT, 0), rb.clone(), rb.clone().add(V(-.8, -.7, -.4)), V(-1.8, Y_BOT - 2.3, -.4)], ['rna', 'ribo', 'mp'], 3.0);
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
    + `<div class="row"><span class="bar" style="background:${MRNA}"></span>(+)ssRNA helix <span class="bar" style="background:#fde047;margin-left:6px"></span>5′ cap tail</div>`;
  legend.append(k);
}

const tipBox = document.getElementById('tip'), TIP0 = 'Tobacco Mosaic Virus (PDB 2TMV) winds 2,130 identical coat protein subunits (16⅓ per turn) around a coaxial (+)ssRNA helix (r = 4 nm) and a 4 nm hollow central channel.';
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
  ['virion',   V(11.5, 2.8, 13.5), V(0, -.2, 0)],
  ['helix',    V(3.8, 1.4, 4.4),   V(-.2, .8, -.2)],
  ['channel',  V(3.2, 2.8, 3.6),   V(-.1, 1.2, -.1)],
  ['assembly', V(5.2, 6.2, 5.8),   V(0, 4.8, 0)],
];
let view = 0, motion = true, sway = 0, last = performance.now();

document.getElementById('view').onclick = e => { view = (view + 1) % VIEWS.length; const [name, p, t] = VIEWS[view]; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone())); e.target.textContent = `View: ${name}`; };
document.getElementById('look').onclick = e => { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); e.target.textContent = `Cylinder: ${organelleLook}`; };
document.getElementById('cut').onclick = e => { cutOn = !cutOn; caps.visible = cutOn; e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; };
document.getElementById('flow').onclick = e => { flowsOn = !flowsOn; flowPts.visible = flowsOn; e.target.textContent = `Assembly: ${flowsOn ? 'on' : 'off'}`; };
const speed = document.getElementById('speed'), spd = document.getElementById('spd');
speed.oninput = () => { flowSpeed = 2 ** +speed.value; spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`; };
speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
document.getElementById('motion').onclick = e => { motion = !motion; e.target.textContent = motion ? 'Pause' : 'Play'; };
document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'tmv-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

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
const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0, -.2, 0);
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
  const P = pointsOf('virion'), d0 = V(.65, .18, .73).normalize();
  const AT = {
    coat: [P.coat, 2.2], disc: [P.disc, 2.2], rna: [P.rna, 1.8],
    channel: [P.channel, 1.8], ribo: [P.ribo, 2.2], mp: [P.mp, 2.6],
  };
  if (!AT[key]) return FOCUS[key] = null;
  const [c, r] = AT[key];
  return FOCUS[key] = { c: c.clone(), r, dir: d0.clone() };
}
const KIN = { coat: ['rna', 'channel'], disc: ['rna'] };
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
  buildHelicalRodAndDiscs();
  buildHelicalRNA();
  buildStriposomeAndMovement();
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
    coat: V(-.72, 1.2, -.35), disc: V(-.75, Y_TOP + .9, -.35), rna: V(-.38, .4, -.12),
    channel: V(-.18, -.5, -.1), ribo: SITES.ribo[0], mp: SITES.mp[0],
  };
  if (vName === 'helix') P = {
    coat: V(-.72, 1.0, -.35), rna: V(-.38, .8, -.12), channel: V(-.18, .6, -.1),
  };
  if (vName === 'channel') P = {
    channel: V(-.18, 1.2, -.1), rna: V(-.38, 1.4, -.12), coat: V(-.72, 1.0, -.35),
  };
  if (vName === 'assembly') P = {
    disc: V(-.75, Y_TOP + .9, -.35), rna: V(-.25, Y_TOP + 1.8, -.12), coat: V(-.72, Y_TOP - .4, -.35),
    channel: V(-.18, Y_TOP - .2, -.1),
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
    if (['Escape', ' ', 'ArrowRight', 'ArrowLeft', 'PageDown', 'PageUp', 'Enter'].includes(e.key) || (e.key.length === 1 && 'cenm123456789'.includes(e.key.toLowerCase())))
      toExplorer({ type: 'key', key: e.key, shift: e.shiftKey });
  });
}
window.__cell = { renderer, composer, camera, controls, scene, cell, REG, shells, setHi, V, setLook: k => { organelleLook = k; applyLook(); }, get sites() { return SITES; }, get flows() { return live; }, get views() { return VIEWS; }, pointsOf, setMol: k => { molHi = k; }, step: (dt = .05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); }, flyTo, freeCamera, ghost, blink, setState, focusOf, tour };
});
