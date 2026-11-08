// @ts-nocheck
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { Effect } from 'effect';
import { runBiologyApp } from '../index.js';

runBiologyApp(7, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');
  const UP = geometry.UP;
// ---------------------------------------------------------------------
// Helpers: seeded random, value noise, small vector shortcuts
// ---------------------------------------------------------------------
const { rand, rr, randDir, noise } = random;
const { V, instanced } = geometry;
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: o.rough ?? .55, metalness: o.metal ?? 0, side: o.side ?? THREE.FrontSide, transparent: o.opacity != null, opacity: o.opacity ?? 1, depthWrite: o.opacity == null, clippingPlanes: o.clip ?? null, map: o.map ?? null });
const M4 = (p, s) => new THREE.Matrix4().compose(p, new THREE.Quaternion(), typeof s === 'number' ? V(s, s, s) : s);
function coil(c, d, loops, r, len, jit = .03) {
  const u = (Math.abs(d.y) < .9 ? V(0, 1, 0) : V(1, 0, 0)).cross(d).normalize(), w = d.clone().cross(u), n = loops * 26, pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, a = t * loops * Math.PI * 2, rj = r * (1 + .25 * Math.sin(a * .37 + loops));
    pts.push(c.clone().addScaledVector(d, (t - .5) * len).addScaledVector(u, Math.cos(a) * rj).addScaledVector(w, Math.sin(a) * rj).add(V(rr(-jit, jit), rr(-jit, jit), rr(-jit, jit))));
  }
  return new THREE.CatmullRomCurve3(pts);
}
// a 20-sided canvas texture of alternating bands, used along the flagella
const stripeTex = (() => {
  const c = document.createElement('canvas'); c.width = 64; c.height = 8; const g = c.getContext('2d');
  g.fillStyle = '#c9ab72'; g.fillRect(0, 0, 64, 8); g.fillStyle = '#7d6440'; g.fillRect(0, 0, 22, 8); g.fillStyle = '#e2cc95'; g.fillRect(34, 0, 10, 8);
  const t = new THREE.CanvasTexture(c); t.wrapS = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const GRAIN = ['#a8784a', '#c49a62', '#8e6a44', '#d8bb86', '#b07a46', '#efe2c4', '#b48a58', '#9c8a74', '#c8a46e'].map(c => new THREE.Color(c));

// ---------------------------------------------------------------------
// The bacterium: a capsule along x, cut open on the side facing the viewer
// ---------------------------------------------------------------------
const L = 6.2, CZ = .55;                     // straight length of the rod; height of the cut plane (local z)
const R = { out: 1.95, wall: 1.62, gap: 1.43, mem: 1.39, inner: 1.25 };
const UM = 4;                                // world units per micrometre (cell ≈ 2.5 µm long)

function capsule(r, segs = 120) {
  let g = new THREE.CapsuleGeometry(r, L, 32, segs); g.rotateZ(-Math.PI / 2);
  g.deleteAttribute('uv'); g.deleteAttribute('normal'); g = mergeVertices(g); g.computeVertexNormals(); return g;
}
// push vertices out along the rod's surface normal to make a pebbly, bubbly coat
function pebble(g, amp, f) {
  const p = g.attributes.position, v = V(), a = V();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i); a.set(THREE.MathUtils.clamp(v.x, -L / 2, L / 2), 0, 0);
    const n = v.clone().sub(a).normalize(), b = 1 - Math.abs(noise(v.x * f, v.y * f, v.z * f) * 2 - 1), fine = noise(v.x * f * 2.6 + 9, v.y * f * 2.6, v.z * f * 2.6);
    v.addScaledVector(n, amp * (b * .8 + fine * .35 - .5)); p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals(); return g;
}
// flat stadium-shaped ring where a layer is sliced by the cut plane
function stadiumRing(ro, ri) {
  const ho = Math.sqrt(ro * ro - CZ * CZ), hi = Math.sqrt(ri * ri - CZ * CZ), s = new THREE.Shape(), h = new THREE.Path();
  s.moveTo(-L / 2, -ho); s.lineTo(L / 2, -ho); s.absarc(L / 2, 0, ho, -Math.PI / 2, Math.PI / 2, false); s.lineTo(-L / 2, ho); s.absarc(-L / 2, 0, ho, Math.PI / 2, Math.PI * 1.5, false);
  h.moveTo(-L / 2, -hi); h.absarc(-L / 2, 0, hi, Math.PI * 1.5, Math.PI / 2, true); h.lineTo(L / 2, hi); h.absarc(L / 2, 0, hi, Math.PI / 2, -Math.PI / 2, true); h.lineTo(-L / 2, -hi);
  s.holes.push(h); const g = new THREE.ShapeGeometry(s, 64); g.translate(0, 0, CZ + .002); return g;
}
const inside = (p, r) => Math.hypot(p.y, p.z, Math.max(0, Math.abs(p.x) - L / 2)) < r;

function buildCell(clip) {
  const g = new THREE.Group(), an = {};
  // pebbly outer coat (outer membrane / capsule) and the layers beneath it
  const coat = new THREE.Mesh(pebble(capsule(R.out, 200), .24, 3.4), new THREE.MeshPhysicalMaterial({ color: '#c2cba4', roughness: .42, clearcoat: .7, clearcoatRoughness: .3, sheen: .8, sheenColor: '#f2f6dc', transparent: true, opacity: .66, side: THREE.DoubleSide, clippingPlanes: clip, depthWrite: false }));
  coat.castShadow = true; coat.renderOrder = 2; g.add(coat);
  g.add(new THREE.Mesh(capsule(R.wall), std('#5b6c3e', { clip, side: THREE.DoubleSide })));
  g.add(new THREE.Mesh(capsule(R.mem), std('#c99f48', { clip, rough: .4 })));
  g.add(new THREE.Mesh(capsule(R.inner), std('#e4d3ae', { clip, side: THREE.BackSide, rough: .8 })));
  [[R.out - .04, R.wall, '#c3cba3', .9], [R.wall, R.gap, '#55663a', .6], [R.gap, R.mem, '#e6dfba', .5], [R.mem, R.inner, '#c99a3e', .35]].forEach(([a, b, c, ro]) => g.add(new THREE.Mesh(stadiumRing(a, b), std(c, { rough: ro, side: THREE.DoubleSide }))));
  // a bright highlight line along the membrane band, as in the illustration
  const hl = new THREE.Mesh(stadiumRing(R.mem - .035, R.mem - .065), std('#f3d98c', { rough: .25 })); hl.position.z = .001; g.add(hl);

  // cytoplasm: dense granules (ribosomes, inclusions)
  const ms = [], cs = [], big = [], bc = [];
  for (let n = 0; n < 9000 && ms.length < 5200;) {
    const p = V(rr(-L / 2 - 1.2, L / 2 + 1.2), rr(-1.2, 1.2), rr(-1.2, CZ - .015)); n++;
    if (!inside(p, R.inner - .04)) continue;
    ms.push(M4(p, rr(.022, .045))); cs.push(GRAIN[Math.floor(rand() * GRAIN.length)]);
  }
  for (let n = 0; n < 6000 && big.length < 520;) {
    const p = V(rr(-L / 2 - 1.2, L / 2 + 1.2), rr(-1.2, 1.2), rr(-1.1, CZ - .05)); n++;
    if (!inside(p, R.inner - .08)) continue;
    big.push(M4(p, rr(.05, .085))); bc.push(GRAIN[Math.floor(rand() * GRAIN.length)]);
  }
  const sph = new THREE.SphereGeometry(1, 10, 8), grainMat = new THREE.MeshStandardMaterial({ color: '#fff', roughness: .35, clippingPlanes: clip });
  g.add(instanced(sph, grainMat, ms, cs), instanced(new THREE.SphereGeometry(1, 16, 12), grainMat, big, bc));
  an.ribosomes = big.map(m => V().setFromMatrixPosition(m)).filter(p => p.x > .9 && p.x < 1.7 && p.y < -.25 && p.y > -.8).sort((a, b) => b.z - a.z)[0] ?? V(1.2, -.5, CZ - .1);

  // nucleoid: one long chromosome, drawn as tangled purple coils
  const nm = new THREE.MeshPhysicalMaterial({ color: '#7860ab', roughness: .32, clearcoat: .6, clippingPlanes: clip });
  let np = null;
  for (let s = 0; s < 30; s++) {
    const c = V(rr(-2.1, 2.1), rr(-.4, .4), CZ - rr(.38, .62)), d = V(1, rr(-.5, .5), rr(-.4, .4)).normalize(), loops = 3 + Math.floor(rand() * 4), r = rr(.2, .32);
    const cv = coil(c, d, loops, r, loops * rr(.13, .2));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(cv, loops * 40, .034, 6), nm));
    const q = cv.getPoint(.5); if (q.x > .6 && q.x < 1.6 && (!np || q.z > np.z)) np = q;
  }
  an.nucleoid = np ?? V(1, 0, CZ - .2);

  // plasmids: small rings of extra DNA
  const pm = new THREE.MeshPhysicalMaterial({ color: '#3f86ba', roughness: .3, clearcoat: .7, clippingPlanes: clip }), plas = [];
  [[-2.2, .85], [-1.3, -.95], [.4, -.95], [2.5, .9], [1.9, -.35], [-2.9, -.2], [3.3, -.6]].forEach(([x, y]) => {
    const t = new THREE.Mesh(new THREE.TorusGeometry(rr(.17, .22), .04, 10, 44), pm);
    t.position.set(x, y, CZ - rr(.12, .2)); t.rotation.set(rr(-.5, .5), rr(-.5, .5), 0); g.add(t); plas.push(t.position.clone());
  });
  an.plasmid = plas[2];
  an.membrane = V(1.8, Math.sqrt((R.mem - .06) ** 2 - CZ * CZ), CZ);

  // pili / fimbriae: fine curly hairs all over the surface
  const hairMat = std('#ccb07a', { rough: .5 });
  for (let i = 0; i < 520; i++) {
    let base, n;
    if (rand() < .78) { const th = rr(0, Math.PI * 2); n = V(0, Math.cos(th), Math.sin(th)); base = V(rr(-L / 2, L / 2), 0, 0).addScaledVector(n, R.out - .05); }
    else { const s = rand() < .5 ? -1 : 1; n = randDir(); n.x = Math.abs(n.x) * s; base = V(s * L / 2, 0, 0).addScaledVector(n, R.out - .05); }
    if (base.z > CZ - .12) continue;
    const len = rr(.7, 1.5), side = randDir().cross(n).normalize(), ph = rr(0, 6), pts = [];
    for (let k = 0; k <= 14; k++) { const t = k / 14; pts.push(base.clone().addScaledVector(n, t * len).addScaledVector(side, Math.sin(t * 7 + ph) * .1 * t)); }
    const h = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 22, rr(.016, .024), 4), hairMat); h.castShadow = true; g.add(h);
  }

  // flagella: two basal bodies at one pole, three long banded filaments
  const knobMat = std('#a88f4a', { rough: .35, metal: .25 }), knobs = [V(-L / 2 - 1.55, .62, 1.0), V(-L / 2 - 1.72, -.18, 1.02)];
  knobs.forEach(k => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(.27, 32, 24), knobMat); s.position.copy(k); s.castShadow = true; g.add(s);
    const col = new THREE.Mesh(new THREE.TorusGeometry(.2, .055, 12, 32), std('#7a6834', { rough: .4 })); col.position.copy(k).add(V(-.12, 0, .05)); col.rotation.y = Math.PI / 2; g.add(col);
  });
  let fp = null;
  [[0, -.18, 11.5, .0], [0, -.42, 12.5, 1.7], [1, -.62, 12, 3.1]].forEach(([ki, tilt, len, ph]) => {
    const k = knobs[ki], d = V(-1, tilt, -.08).normalize(), u = V(-d.y, d.x, 0).normalize(), w = d.clone().cross(u), pts = [];
    for (let i = 0; i <= 260; i++) { const s = i / 260 * len, a = Math.min(1, s / 1.4) * .5; pts.push(k.clone().addScaledVector(d, s + .2).addScaledVector(u, Math.sin(s * 1.15 + ph) * a).addScaledVector(w, Math.cos(s * 1.15 + ph) * a * .3)); }
    const tex = stripeTex.clone(); tex.needsUpdate = true; tex.repeat.set(len * 2.4, 1);
    const f = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 520, .075, 8), new THREE.MeshStandardMaterial({ map: tex, roughness: .5 }));
    f.castShadow = true; g.add(f); if (ki === 1) fp = pts[62];
  });
  an.flagellum = fp;
  an.wall = V(1.7, -1.88, .38);
  return { group: g, an };
}

// ---------------------------------------------------------------------
// Scene, lighting, shadow on the paper
// ---------------------------------------------------------------------
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.localClippingEnabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.VSMShadowMap;
stage.prepend(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(26, 1, .1, 200);
scene.add(new THREE.HemisphereLight('#fffaf0', '#b9a98a', 1.25));
const sun = new THREE.DirectionalLight('#fff3e0', 2.4); sun.position.set(-7, 9, 14); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 60 }); sun.shadow.radius = 14; sun.shadow.blurSamples = 20; sun.shadow.bias = -.0005;
scene.add(sun);
const fill = new THREE.DirectionalLight('#e8f0ff', .5); fill.position.set(8, -4, 6); scene.add(fill);
const paper = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.ShadowMaterial({ color: '#5a4630', opacity: .14 })); paper.position.z = -3.4; paper.receiveShadow = true; scene.add(paper);

const holder = new THREE.Group(); holder.rotation.order = 'ZYX'; holder.rotation.set(-.5, .05, .6); scene.add(holder); holder.updateMatrixWorld(true);
// cut plane: keep local z < CZ (planes are in world space; the cell itself never moves)
const clip = [new THREE.Plane(V(0, 0, -1), CZ).applyMatrix4(holder.matrixWorld)];
const cell = buildCell(clip); holder.add(cell.group); holder.updateMatrixWorld(true);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.enablePan = false; controls.minDistance = 10; controls.maxDistance = 60;

// ---------------------------------------------------------------------
// Labels with straight black leader lines, like the printed figure
// ---------------------------------------------------------------------
const LABELS = [['membrane', 'plasma membrane'], ['nucleoid', 'nucleoid'], ['ribosomes', 'ribosomes'], ['plasmid', 'plasmid'], ['wall', 'cell wall'], ['flagellum', 'flagellum']];
const NS = 'http://www.w3.org/2000/svg', svg = document.getElementById('lines'), labelsEl = document.getElementById('labels');
const L_EL = LABELS.map(([k, text]) => { const el = document.createElement('div'); el.className = 'lbl'; el.textContent = text; labelsEl.append(el); const ln = document.createElementNS(NS, 'line'); svg.append(ln); return { k, el, ln, w: 0 }; });
const tmp = V();
// points on the outer coat, projected each frame to find the cell's outline on screen
const RIM = []; for (let i = 0; i < 240; i++) { const th = i / 240 * Math.PI * 2 * 7, x = (i / 239 - .5) * (L + 2 * R.out); const r = Math.sqrt(Math.max(0, R.out ** 2 - Math.max(0, Math.abs(x) - L / 2) ** 2)); RIM.push(V(x, r * Math.cos(th), r * Math.sin(th))); }
function layout() {
  const w = stage.clientWidth, h = stage.clientHeight, proj = v => { tmp.copy(v); holder.localToWorld(tmp); tmp.project(camera); return { x: (tmp.x * .5 + .5) * w, y: (-tmp.y * .5 + .5) * h, ok: tmp.z < 1 }; };
  const rim = RIM.map(proj), edgeAt = y => Math.max(...rim.filter(q => Math.abs(q.y - y) < 60).map(q => q.x), -1e9);
  const pts = L_EL.map(l => ({ l, ...proj(cell.an[l.k]) })), gap = w < 720 ? 24 : 40, m = w < 720 ? 14 : 34;
  const col = pts.filter(p => p.l.k !== 'flagellum' && p.l.k !== 'wall').sort((a, b) => a.y - b.y);
  const colX = Math.max(...col.map(p => edgeAt(p.y))) + m;
  const put = (p, lx, ly) => {
    const L = p.l; if (!L.w) L.w = L.el.offsetWidth;
    const x = Math.min(lx, w - 12 - L.w); L.el.style.display = p.ok ? 'block' : 'none'; L.ln.style.display = p.ok ? '' : 'none';
    L.el.style.transform = `translate(${x}px, ${ly - L.el.offsetHeight / 2}px)`;
    L.ln.setAttribute('x1', p.x); L.ln.setAttribute('y1', p.y); L.ln.setAttribute('x2', x - 8); L.ln.setAttribute('y2', ly);
  };
  const ys = col.map(p => p.y); for (let i = 1; i < ys.length; i++) ys[i] = Math.max(ys[i], ys[i - 1] + gap);
  col.forEach((p, i) => put(p, colX, ys[i]));
  const wall = pts.find(p => p.l.k === 'wall'), wy = Math.max(wall.y + gap * .6, ys.at(-1) + gap); put(wall, edgeAt(wy) + m * .8, wy);
  const fl = pts.find(p => p.l.k === 'flagellum'); put(fl, fl.x + (w < 720 ? 40 : 90), fl.y);
}

// ---------------------------------------------------------------------
// Inset: a bacterial microcompartment (polyhedral protein shell, cut open)
// ---------------------------------------------------------------------
const insetBox = document.getElementById('insetView');
const ir = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
ir.setPixelRatio(Math.min(devicePixelRatio, 2)); ir.toneMapping = THREE.ACESFilmicToneMapping; ir.shadowMap.enabled = true; ir.shadowMap.type = THREE.VSMShadowMap;
insetBox.append(ir.domElement);
const iscene = new THREE.Scene(); iscene.background = new THREE.Color('#e7dcc6');
const icam = new THREE.PerspectiveCamera(30, 2, .1, 50); icam.position.set(0, 5.6, 4.9); icam.lookAt(0, -.4, 0);
iscene.add(new THREE.HemisphereLight('#fffaf0', '#b9a98a', 1.3));
const isun = new THREE.DirectionalLight('#fff3e0', 2.2); isun.position.set(-3, 6, 3); isun.castShadow = true; isun.shadow.mapSize.set(1024, 1024); isun.shadow.radius = 8; Object.assign(isun.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5 }); iscene.add(isun);
function buildInset() {
  const g = new THREE.Group(), floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), std('#e6d7b8', { rough: .9 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -.9; floor.receiveShadow = true; g.add(floor);
  const ms = [], cs = [];
  for (let i = 0; i < 1500; i++) { const p = V(rr(-4.5, 4.5), -.9, rr(-2.6, 2.6)); if (Math.hypot(p.x, p.z) < 1.55) continue; const s = rand() < .15 ? rr(.06, .1) : rr(.025, .05); p.y += s * .6; ms.push(M4(p, s)); cs.push(GRAIN[Math.floor(rand() * GRAIN.length)]); }
  const gm = instanced(new THREE.SphereGeometry(1, 14, 10), new THREE.MeshStandardMaterial({ color: '#fff', roughness: .3 }), ms, cs); gm.castShadow = true; g.add(gm);
  // shell: twelve pentagonal protein panels from a dodecahedron, with pores; the top panel is left out
  const dg = new THREE.DodecahedronGeometry(1, 0), dp = dg.attributes.position, verts = [];
  for (let i = 0; i < dp.count; i++) { const v = V().fromBufferAttribute(dp, i); if (!verts.some(u => u.distanceTo(v) < 1e-4)) verts.push(v); }
  const ico = new THREE.IcosahedronGeometry(1, 0).attributes.position, faces = [];
  for (let i = 0; i < ico.count; i++) { const v = V().fromBufferAttribute(ico, i).normalize(); if (!faces.some(u => u.distanceTo(v) < 1e-4)) faces.push(v); }
  const shell = new THREE.Group(), pmat = new THREE.MeshPhysicalMaterial({ color: '#a3b48c', roughness: .55, clearcoat: .3, side: THREE.DoubleSide }), poreMat = std('#4f5e3d', { rough: .8 });
  const up = V(0, .78, .62).normalize(), open = faces.reduce((a, b) => (b.dot(up) > a.dot(up) ? b : a));
  faces.forEach(n => {
    if (n === open) return;
    const ring = verts.map(v => [v, v.dot(n)]).sort((a, b) => b[1] - a[1]).slice(0, 5).map(x => x[0]);
    const c = ring.reduce((a, b) => a.clone().add(b), V()).multiplyScalar(.2), u = ring[0].clone().sub(c).normalize(), w = n.clone().cross(u);
    ring.sort((a, b) => Math.atan2(a.clone().sub(c).dot(w), a.clone().sub(c).dot(u)) - Math.atan2(b.clone().sub(c).dot(w), b.clone().sub(c).dot(u)));
    const outer = ring.map(v => c.clone().lerp(v, .93)), innr = outer.map(v => v.clone().multiplyScalar(.86)), pos = [];
    const tri = (a, b, d) => pos.push(a.x, a.y, a.z, b.x, b.y, b.z, d.x, d.y, d.z);
    for (let k = 1; k < 4; k++) { tri(outer[0], outer[k], outer[k + 1]); tri(innr[0], innr[k + 1], innr[k]); }
    for (let k = 0; k < 5; k++) { const k2 = (k + 1) % 5; tri(outer[k], innr[k], outer[k2]); tri(outer[k2], innr[k], innr[k2]); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, pmat); m.castShadow = true; shell.add(m);
    // a frame bevel and a few pores on each panel
    shell.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(outer, true, 'catmullrom', 0), 40, .025, 5, true), std('#8a9b74', { rough: .5 })));
    for (let k = 0; k < 3; k++) { const pc = c.clone().lerp(outer[k * 2 % 5], .45).addScaledVector(n, .012), d = new THREE.Mesh(new THREE.CircleGeometry(.055, 16), poreMat); d.position.copy(pc); d.lookAt(pc.clone().add(n)); shell.add(d); }
  });
  const em = new THREE.MeshPhysicalMaterial({ color: '#6c5ca6', roughness: .25, clearcoat: .8 });
  for (let i = 0; i < 16; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(rr(.17, .22), 24, 18), em); s.position.copy(randDir().multiplyScalar(rr(0, .45))); shell.add(s); }
  shell.scale.setScalar(1.45); shell.position.y = -.9 + .8 * 1.45; shell.rotation.y = .3; g.add(shell);
  const nm = new THREE.MeshPhysicalMaterial({ color: '#7860ab', roughness: .32, clearcoat: .6 });
  for (let s = 0; s < 10; s++) { const cv = coil(V(rr(2.6, 4.2), -.75 + rr(0, .25), rr(-2.4, -1.2)), V(1, rr(-.3, .3), rr(-.5, .5)).normalize(), 3 + Math.floor(rand() * 3), rr(.18, .28), rr(.5, .9)); g.add(new THREE.Mesh(new THREE.TubeGeometry(cv, 120, .03, 6), nm)); }
  const pl = new THREE.Mesh(new THREE.TorusGeometry(.26, .05, 10, 44), new THREE.MeshPhysicalMaterial({ color: '#3f86ba', roughness: .3, clearcoat: .7 })); pl.position.set(2.5, -.82, 1.2); pl.rotation.x = -Math.PI / 2 + .3; g.add(pl);
  return g;
}
iscene.add(buildInset());

// ---------------------------------------------------------------------
// Framing, resize, render loop
// ---------------------------------------------------------------------
const bar = document.getElementById('bar');
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight, a = w / h;
  renderer.setSize(w, h, false); camera.aspect = a; camera.updateProjectionMatrix(); svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const narrow = w < 720, d = narrow ? 44 * Math.max(1, 1 / a) : 33 * Math.max(1, 1.45 / a);
  controls.target.set(narrow ? 0 : 1.6, narrow ? .8 : -.2, 0);
  camera.position.copy(controls.target).add(V(0, 2.5, d)); controls.update();
  const iw = insetBox.clientWidth, ih = insetBox.clientHeight; ir.setSize(iw, ih, false); icam.aspect = iw / ih; icam.updateProjectionMatrix(); ir.render(iscene, icam);
  L_EL.forEach(l => { l.w = 0; });
}
new ResizeObserver(resize).observe(stage); resize();
document.fonts?.ready.then(() => { L_EL.forEach(l => { l.w = 0; }); ir.render(iscene, icam); });

renderer.setAnimationLoop(() => {
  controls.update(); renderer.render(scene, camera); layout();
  // live scale bar: 1 µm at the depth of the cell's centre
  const dist = camera.position.distanceTo(controls.target), ppu = stage.clientHeight / (2 * dist * Math.tan(camera.fov * Math.PI / 360));
  bar.style.width = `${Math.round(UM * ppu)}px`;
});
window.__pro = { renderer, ir, iscene, icam, camera, controls, scene, layout };
});
