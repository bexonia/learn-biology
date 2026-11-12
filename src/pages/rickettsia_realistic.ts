// @ts-nocheck
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { runBiologyApp, BASE, BACKBONE, MRNA, buildPdbSurfaceGeo, makeProteinBumpTexture, makeMolBatch, makeSculptedMesh } from '../index.js';

runBiologyApp(20261112, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  // Nanoscale 3D coordinate system: 1 unit = 50 nm (NM = 0.02 units/nm).
  // Cutaway Rickettsia prowazekii rod (~0.35 x 1.10 um -> diameter 7.0 u, length 22.0 u)
  // in eukaryotic cytosol beside a cristae-bearing host mitochondrion and curved host membrane.
  const { rand, rr, randDir } = random, { UP, resample, waveNormalMap } = geometry, { col } = batch;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
  const NM = 0.02, H = 7.50, R_SLIME = 3.74, R_OM = 3.50, R_PG = 3.28, R_IM = 3.04, RC = 2.96;
  const XM0 = -1.8, XM1 = 12.6, YM = 8.45, R_MITO = 3.46, R_MITO_IM = 3.20;
  let placed = 0;

  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.96;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.localClippingEnabled = true;
  document.body.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const g = c.getContext('2d'), gr = g.createRadialGradient(290, 210, 0, 256, 256, 390);
    gr.addColorStop(0, '#192438'); gr.addColorStop(0.54, '#0b101d'); gr.addColorStop(1, '#03050a');
    g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

  const VIEWS = [
    ['cytosol', V(15.5, 9.8, 46.5), V(-3.6, 1.9, 0)],
    ['envelope', V(7.2, 5.1, 9.4), V(3.1, 2.85, -0.1)],
    ['comet', V(-8.4, 3.6, 16.8), V(-15.8, -0.35, -0.2)],
    ['mito_link', V(14.2, 6.8, 18.4), V(5.1, 4.5, -0.2)],
  ];
  let view = 0, curView = 'cytosol';

  const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.1, 420);
  camera.position.copy(VIEWS[0][1]);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(VIEWS[0][2]); controls.enableDamping = true;
  controls.minDistance = 0.6; controls.maxDistance = 105; controls.panSpeed = 0.5; controls.zoomSpeed = 0.5;

  scene.add(new THREE.HemisphereLight('#e4eeff', '#261d34', 0.52));
  const key = new THREE.DirectionalLight('#fff2e2', 2.95); key.position.set(16, 27, 21); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -26, right: 20, top: 18, bottom: -14, near: 1, far: 95 });
  key.shadow.bias = -0.0005; key.shadow.normalBias = 0.03;
  const rim = new THREE.DirectionalLight('#9bc4ff', 1.48); rim.position.set(-22, 8, -17);
  const lamp = new THREE.PointLight('#ffba96', 14, 34, 2); lamp.position.set(5.6, 4.2, 6.4);
  scene.add(key, rim, lamp);

  const cell = new THREE.Group(), caps = new THREE.Group(); scene.add(cell); cell.add(caps);
  const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)], CUT = CUT_LOCAL.map(p => p.clone());
  let cutOn = true;
  const updateCut = () => CUT.forEach((p, i) => { p.copy(CUT_LOCAL[i]); if (!cutOn) p.constant = 1e4; p.applyMatrix4(cell.matrixWorld); });
  const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };
  const phys = o => new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.8, ...CLIP, ...o });
  const nmap = waveNormalMap(256, 26, 2.7), bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };
  const protBump = makeProteinBumpTexture(256);

  const PARTS = [
    ['slime', 'Microcapsular polysaccharide slime layer', '#9ef2dc'],
    ['om', 'Gram-negative outer membrane & LPS', '#58d6a6'],
    ['omp', 'Surface passenger adhesins (OmpA / OmpB)', '#36b59c'],
    ['pg', 'Thin periplasmic peptidoglycan layer', '#ebd06e'],
    ['im', 'Inner cytoplasmic membrane', '#f5a693'],
    ['tlc1', 'Tlc1 ATP/ADP translocase', '#58c4ff'],
    ['etc', 'Alphaproteobacterial respiratory chain (ETC)', '#ff7668'],
    ['atps', 'Rotary F1Fo ATP synthase', '#ffd24c'],
    ['t4ss', 'Rvh Type IV Secretion System (T4SS)', '#ff94d2'],
    ['pld', 'Membrane phospholipase D (Pld)', '#b996ff'],
    ['dna', 'Reductive 1.11 Mbp circular dsDNA genome', '#4a86ff'],
    ['rnap', 'Bacterial RNA polymerase', '#6ce0c6'],
    ['ribosome', '70S bacterial ribosomes', '#ce82df'],
    ['sca2', 'Polar Sca2 formin-like actin polymerase', '#ff5e8e'],
    ['comet', 'F-actin filament tail', '#ff9f5a'],
    ['g_actin', 'G-actin monomer pool', '#ffc67a'],
    ['host_mito', 'Adjacent host mitochondrion (evolutionary cousin)', '#e06d53'],
    ['host_mem', 'Host plasma membrane protrusion', '#8e9bff'],
  ];

  const INFO = {
    slime: ['Hydrated microcapsular polysaccharide glycocalyx (~12 nm outer coat)', 'Stabilizes macromolecular hydration and surrounds outer-membrane adhesins in host cytosol'],
    om: ['Asymmetric Gram-negative outer lipid bilayer with outer-leaflet lipopolysaccharide (LPS)', 'Forms the outer permeability barrier homologous to the outer mitochondrial membrane'],
    omp: ['Autotransporter 12/16-stranded beta-barrel anchors with beta-helical passenger columns (OmpA/OmpB)', 'Mediate host surface recognition and outer-envelope mechanical stiffness'],
    pg: ['Cross-linked NAG–NAM glycan strands bridged by short periplasmic tetrapeptides', 'Maintains the 0.35 x 1.1 um rod geometry across the periplasmic space'],
    im: ['Cardiolipin- and phosphatidylethanolamine-rich inner cytoplasmic phospholipid bilayer', 'Maintains transmembrane proton-motive force and embeds Tlc1, ETC, and F1Fo complexes'],
    tlc1: ['12-transmembrane alpha-helical MFS nucleotide antiporter barrel (~55 kDa)', 'Imports host cytosolic ATP in obligate 1:1 antiport exchange for bacterial ADP'],
    etc: ['Inner-membrane Complex I, III, and IV proton-pumping oxidoreductase supercomplexes', 'Generates transmembrane proton gradient directly homologous to mitochondrial cristae respirasomes'],
    atps: ['Membrane Fo c-ring proton turbine coupled via gamma/epsilon rotor to hexameric alpha3-beta3 F1 head', 'Synthesizes ATP from H+ flux; evolutionary twin of mitochondrial cristae F1Fo dimers'],
    t4ss: ['Trans-envelope Rvh nanomachine spanning inner membrane, peptidoglycan, and outer-membrane pore', 'Translocates macromolecular substrates across all three envelope layers via hexameric ATPases'],
    pld: ['Symmetric bilobed phospholipase D homodimer with paired HKD catalytic pockets', 'Hydrolyzes phospholipid headgroups to remodel vacuolar and cortical host membranes'],
    dna: ['Supercoiled 1.11 Mbp circular B-form dsDNA chromosome (~71% A+T) in plectonemic loops', 'Streamlined alphaproteobacterial genome retaining core replication, translation, and OXPHOS genes'],
    rnap: ['Multi-subunit alpha2-beta-beta\'-omega core RNA polymerase holoenzyme', 'Transcribes genomic operons into nascent mRNA strands for coupled bacterial translation'],
    ribosome: ['2.5 MDa 70S ribonucleoprotein particles (50S + 30S subunits)', 'Synthesize bacterial polypeptides; phylogenetically sister to mitochondrial mitoribosomes'],
    sca2: ['Polar autotransporter passenger ring with crescent formin-like actin-nucleating helices', 'Processively nucleates and elongates unbranched barbed-end F-actin bundles at the bacterial pole'],
    comet: ['Twisted parallel bundle of right-handed double-helical F-actin protofilaments (37 nm half-pitch)', 'Converts barbed-end actin polymerization free energy into directional cytosolic propulsion'],
    g_actin: ['42 kDa four-subdomain globular ATP-bound actin monomers in eukaryotic cytosol', 'Recruited to the polar Sca2 polymerase ring for barbed-end filament elongation'],
    host_mito: ['Double-membrane organelle (~0.35 um wide) with invaginated inner-membrane cristae folds', 'Endosymbiotic alphaproteobacterial cousin exporting cytosolic ATP imported via Rickettsia Tlc1'],
    host_mem: ['Curved eukaryotic plasma membrane phospholipid bilayer enclosing the cytosolic protrusion', 'Cortical mechanical boundary deformed by F-actin propulsion and contacted by phospholipase dimers'],
  };

  const REG = {}, shells = [], impMats = [], LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  const reg = (k, m) => { const r = REG[k] ??= { mats: [], imp: [] }; (m.isShaderMaterial ? r.imp : r.mats).push(m); return m; };
  const protMat = (k, clip = true, extra = {}) => reg(k, phys({ vertexColors: true, roughness: 0.42, metalness: 0.02, clearcoat: 0.24, clearcoatRoughness: 0.36, sheen: 0.36, sheenColor: '#fff5f7', normalMap: protBump, normalScale: new THREE.Vector2(0.34, 0.34), side: THREE.DoubleSide, clippingPlanes: clip ? CUT : null, clipIntersection: true, ...extra }));
  const sculpt = (k, parent = cell, clip = true, extra = {}) => makeSculptedMesh(protMat(k, clip, extra), parent);
  const molBatch = (k, geo, parent = cell, clip = true, extra = {}) => makeMolBatch(geo, protMat(k, clip, extra), parent);
  function shellMat(k, solid, gel, tint, o = {}) {
    const m = reg(k, phys({ color: solid, roughness: 0.16, clearcoat: 0.6, clearcoatRoughness: 0.2, sheen: 0.6, sheenColor: o.sheen ?? '#ffffff', ior: 1.34, thickness: o.thickness ?? 0.65, attenuationColor: tint, attenuationDistance: o.atten ?? 1.2, ...o.extra }));
    m.userData.cols = { solid: new THREE.Color(solid), gel: new THREE.Color(gel) }; shells.push(m); return m;
  }
  const applyLook = () => {
    const gel = organelleLook === 'gel', see = organelleLook === 'see-through';
    shells.forEach(m => { m.transmission = gel ? 1 : 0; m.transparent = see; m.opacity = see ? 0.46 : 1; m.depthWrite = !see; m.side = gel ? THREE.FrontSide : THREE.DoubleSide; m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid); m.needsUpdate = true; });
  };

  function makeImpShader(k, clip, vertexShader, fragmentShader, extra = {}) {
    const m = new THREE.ShaderMaterial({ uniforms: { uScale: { value: 1 }, uLight: { value: V(0.4, 0.6, 0.7).normalize() }, uHi: { value: 0 }, uDim: { value: 1 } }, vertexShader, fragmentShader, clipping: clip, clippingPlanes: clip ? CUT : null, clipIntersection: true, ...extra });
    impMats.push(m); return reg(k, m);
  }
  const impostorMat = (k, clip = true) => makeImpShader(k, clip,
    `attribute float size; attribute vec3 icol; uniform float uScale; varying vec3 vCol;
#include <clipping_planes_pars_vertex>
void main() { vCol = icol; vec4 mvPosition = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * uScale / max(.01, -mvPosition.z); gl_Position = projectionMatrix * mvPosition;
#include <clipping_planes_vertex>
}`,
    `uniform vec3 uLight; uniform float uHi, uDim; varying vec3 vCol;
#include <clipping_planes_pars_fragment>
void main() {
#include <clipping_planes_fragment>
  vec2 q = gl_PointCoord * 2. - 1.; q.y = -q.y; float r2 = dot(q, q); if (r2 > 1.) discard;
  vec3 n = vec3(q, sqrt(max(0., 1. - r2))), h = normalize(uLight + vec3(0., 0., 1.));
  vec3 c = vCol * (.26 + .95 * max(dot(n, uLight), 0.)) + pow(max(dot(n, h), 0.), 30.) * .22 + vCol * pow(max(0., 1. - n.z), 3.) * .3;
  gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi), uDim); }`);
  const stickMat = (k, clip = true) => makeImpShader(k, clip,
    `attribute vec2 corner; attribute vec3 aA, aB, aC1, aC2; attribute float aR; uniform float uScale; varying vec3 vC1, vC2, vSide; varying vec2 vUV;
#include <clipping_planes_pars_vertex>
void main() {
  vec3 a = (modelViewMatrix * vec4(aA, 1.)).xyz, b = (modelViewMatrix * vec4(aB, 1.)).xyz, d = b - a, m = (a + b) * .5, side = cross(d, m);
  if (dot(side, side) < 1e-16) side = cross(d, vec3(0., 1., 0.));
  side = normalize(side); vec4 mvPosition = vec4(mix(a, b, corner.x) + side * max(aR, .6 * -m.z / uScale) * corner.y, 1.);
  vC1 = aC1; vC2 = aC2; vSide = side; vUV = corner; gl_Position = projectionMatrix * mvPosition;
#include <clipping_planes_vertex>
}`,
    `uniform vec3 uLight; uniform float uHi, uDim; varying vec3 vC1, vC2, vSide; varying vec2 vUV;
#include <clipping_planes_pars_fragment>
void main() {
#include <clipping_planes_fragment>
  float u = vUV.y; vec3 n = normalize(vSide * u + vec3(0., 0., sqrt(max(0., 1. - u * u)))), h = normalize(uLight + vec3(0., 0., 1.));
  vec3 col = vUV.x < .5 ? vC1 : vC2, c = col * (.26 + .95 * max(dot(n, uLight), 0.)) + pow(max(dot(n, h), 0.), 30.) * .22;
  gl_FragColor = vec4(mix(c, c * 1.7 + .12, uHi), uDim); }`, { side: THREE.DoubleSide });

  const shade = (mesh, cast = true, receive = true) => { mesh.castShadow = cast; mesh.receiveShadow = receive; return mesh; };
  const grown = a => { const b = new Float32Array(a.length * 2); b.set(a); return b; };
  function balls(k, parent = cell, clip = true) {
    let n = 0, cap = 1 << 14, pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 14, A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap), C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
    return {
      stick(a, b, r, c1, c2) {
        if (m === scap) { scap *= 2; A = grown(A); B = grown(B); R = grown(R); C1 = grown(C1); C2 = grown(C2); }
        const i = m * 3; A[i] = a.x; A[i + 1] = a.y; A[i + 2] = a.z; B[i] = b.x; B[i + 1] = b.y; B[i + 2] = b.z;
        C1[i] = c1.r; C1[i + 1] = c1.g; C1[i + 2] = c1.b; C2[i] = c2.r; C2[i + 1] = c2.g; C2[i + 2] = c2.b; R[m++] = r;
      },
      add(p, s, c) {
        if (n === cap) { cap *= 2; pos = grown(pos); sz = grown(sz); cl = grown(cl); }
        const i = n * 3; pos[i] = p.x; pos[i + 1] = p.y; pos[i + 2] = p.z; cl[i] = c.r; cl[i + 1] = c.g; cl[i + 2] = c.b; sz[n++] = s;
      },
      done() {
        if (n) {
          const g = new THREE.BufferGeometry();
          [['position', pos, 3], ['size', sz, 1], ['icol', cl, 3]].forEach(([nm, arr, d]) => g.setAttribute(nm, new THREE.BufferAttribute(arr.slice(0, n * d), d)));
          const pts = new THREE.Points(g, impostorMat(k, clip)); pts.frustumCulled = false; parent.add(pts);
        }
        if (m) {
          const sg = new THREE.InstancedBufferGeometry(); sg.setIndex([0, 1, 2, 2, 1, 3]);
          sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
          sg.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 0, 1, 1, 1]), 2));
          [['aA', A, 3], ['aB', B, 3], ['aR', R, 1], ['aC1', C1, 3], ['aC2', C2, 3]].forEach(([nm, arr, d]) => sg.setAttribute(nm, new THREE.InstancedBufferAttribute(arr.slice(0, m * d), d)));
          sg.instanceCount = m; const rods = new THREE.Mesh(sg, stickMat(k, clip)); rods.frustumCulled = false; parent.add(rods);
        }
        return n + m;
      },
    };
  }

  // Procedural multi-bead coarse-grained molecular surface templates [xNm, yNm, zNm, rNm, grp]
  function synthGeo(beads, palette, scale = 1, maxDim = 30) {
    const cnt = beads.length, xyz = new Int16Array(cnt * 3), kind = new Uint8Array(cnt), rad = new Uint8Array(cnt);
    beads.forEach(([x, y, z, r, grp = 0], i) => { xyz[i * 3] = Math.round(x * 100); xyz[i * 3 + 1] = Math.round(y * 100); xyz[i * 3 + 2] = Math.round(z * 100); rad[i] = Math.min(255, Math.max(5, Math.round(r / 0.062))); kind[i] = grp << 2; });
    return buildPdbSurfaceGeo({ n: cnt, xyz, kind, rad }, { nm: NM, scale, maxDim, iso: 0.42, colorFn: grp => col(palette[grp % palette.length]) });
  }

  function makeProteinTemplates() {
    const ompB = [], tlcB = [], etcB = [], atpsB = [], t4B = [], scaB = [];
    for (let k = 0; k < 8; k++) { const a = (k / 8) * 6.2832; ompB.push([Math.cos(a) * 2.1, -1.2, Math.sin(a) * 2.1, 1.35, 0], [Math.cos(a) * 2.1, 1.4, Math.sin(a) * 2.1, 1.35, 0]); }
    for (let s = 0; s < 8; s++) { const y = 3.2 + s * 2.4, w = 0.7 * Math.sin(s * 0.9); ompB.push([w, y, 0.3 * Math.cos(s), 1.65, 1], [-w * 0.5, y + 1.1, -0.3 * Math.sin(s), 1.55, 1]); }
    ompB.push([0, 22.8, 0, 2.35, 2], [1.1, 24.0, 0.4, 1.85, 2]);
    for (let k = 0; k < 12; k++) { const a = (k / 12) * 6.2832, tilt = k % 2 ? 0.1 : -0.1, g = k < 6 ? 0 : 1; tlcB.push([Math.cos(a) * 3.1, -3.2, Math.sin(a) * 3.1, 1.45, g], [Math.cos(a + tilt) * 2.55, 0, Math.sin(a + tilt) * 2.55, 1.4, g], [Math.cos(a) * 3.15, 3.2, Math.sin(a) * 3.15, 1.45, g]); }
    for (let i = -3; i <= 3; i++) etcB.push([i * 2.3, 0, 0.6 * Math.sin(i), 2.15, 0], [i * 2.2, -1.8, -0.5 * Math.cos(i), 1.95, 0]);
    for (let j = 1; j <= 4; j++) etcB.push([-6.2 + j * 0.4, -2.5 - j * 2.35, 0.5, 2.25, 1]);
    etcB.push([5.6, -3.6, 1.8, 2.3, 2], [6.4, 0.8, -1.6, 2.1, 2]);
    for (let k = 0; k < 8; k++) { const a = (k / 8) * 6.2832; atpsB.push([Math.cos(a) * 2.8, 0, Math.sin(a) * 2.8, 1.45, 0]); }
    atpsB.push([4.3, -0.4, 0, 1.9, 1], [4.5, -5.2, 0, 1.35, 1], [4.1, -10.2, 0, 1.35, 1], [2.4, -14.8, 0, 1.45, 1], [0, -4.8, 0, 1.45, 1], [0, -9.2, 0, 1.45, 1], [0, -17.2, 0, 1.85, 2]);
    for (let k = 0; k < 6; k++) { const a = (k / 6) * 6.2832; atpsB.push([Math.cos(a) * 3.5, -14.8, Math.sin(a) * 3.5, 2.25, k % 2 ? 2 : 3]); }
    for (let k = 0; k < 6; k++) { const a = (k / 6) * 6.2832; t4B.push([Math.cos(a) * 4.4, -4.6, Math.sin(a) * 4.4, 2.1, 0], [Math.cos(a) * 3.6, 0.4, Math.sin(a) * 3.6, 1.9, 1]); }
    for (let y = 4.5; y <= 17.5; y += 3.2) for (let k = 0; k < 6; k++) { const a = (k / 6) * 6.2832; t4B.push([Math.cos(a) * 2.5, y, Math.sin(a) * 2.5, 1.55, 1]); }
    for (let k = 0; k < 10; k++) { const a = (k / 10) * 6.2832; t4B.push([Math.cos(a) * 4.8, 22.5, Math.sin(a) * 4.8, 1.95, 2], [Math.cos(a) * 3.2, 26.8, Math.sin(a) * 3.2, 1.55, 2]); }
    for (let k = 0; k < 9; k++) { const a = -2.35 + (k / 8) * 4.7; scaB.push([0, Math.cos(a) * 5.6, Math.sin(a) * 5.6, 2.25, k % 2]); }
    scaB.push([3.8, 0, 0, 2.5, 2], [6.8, 0, 0, 2.2, 2]);
    return {
      omp: synthGeo(ompB, ['#2ea38c', '#45c9ae', '#8bf2dc'], 1.15, 30), tlc1: synthGeo(tlcB, ['#47b8ff', '#8ae0ff'], 1.48, 28),
      etc: synthGeo(etcB, ['#ff6e60', '#ff9b85', '#ffd08a'], 1.25, 30), atps: synthGeo(atpsB, ['#f3a93b', '#ffe28a', '#ffd24c', '#ffba42'], 1.28, 32),
      t4ss: synthGeo(t4B, ['#ff7bc6', '#ffaee0', '#ffd1ee'], 1.0, 34), sca2: synthGeo(scaB, ['#ff5488', '#ff88ad', '#38b69a'], 1.2, 28),
      pld: synthGeo([[-2.8, 1.2, 0, 2.4, 0], [-1.4, 3.2, 1.1, 1.95, 0], [-1.4, 3.0, -1.1, 1.95, 1], [2.8, 1.2, 0, 2.4, 0], [1.4, 3.2, -1.1, 1.95, 0], [1.4, 3.0, 1.1, 1.95, 1]], ['#af87ff', '#d6bfff'], 1.45, 26),
      rnap: synthGeo([[-3.2, 0, 1.6, 3.1, 0], [3.2, 0, 1.6, 3.1, 1], [0, -2.8, -1.8, 3.3, 0], [-2.4, 3.2, -1.2, 2.5, 1], [2.4, 3.0, -1.2, 2.4, 2], [0, 4.4, 1.8, 2.2, 2]], ['#52d1b8', '#7eedd6', '#b8fff0'], 1.28, 28),
      ribo: synthGeo([[0, 2.4, -1.2, 4.8, 0], [-4.2, 3.2, -0.8, 3.5, 0], [4.4, 3.0, -0.8, 3.5, 0], [0, 6.4, -1.4, 3.1, 0], [-6.8, 4.8, 0.4, 2.3, 1], [6.6, 5.2, 0.2, 2.2, 1], [0, -3.4, 2.2, 3.9, 2], [-3.4, -3.8, 2.0, 3.0, 2], [3.2, -3.2, 2.4, 2.9, 2], [0.6, -6.2, 2.6, 2.7, 2]], ['#c16fd6', '#e09ef0', '#9f7ae8'], 1.05, 30),
      gActin: synthGeo([[-1.3, -1.1, 0, 1.55, 0], [1.3, -1.1, 0, 1.65, 0], [-1.4, 1.3, 0.3, 1.4, 1], [1.4, 1.2, -0.3, 1.45, 1], [0, 0, 0, 1.15, 2]], ['#ffc270', '#ffdf9e', '#58c4ff'], 1.65, 22),
    };
  }

  const onAxis = p => V(Math.max(-H, Math.min(H, p.x)), 0, 0), inWedge = q => q.x > 0.02 && q.z > 0.02;
  const rodGeo = (r, cap = 52, rad = 128) => new THREE.CapsuleGeometry(r, 2 * H, cap, rad).rotateZ(Math.PI / 2);
  function sampleRodSurface(r, avoidPole = false) {
    for (let t = 0; t < 40; t++) {
      let n, c;
      if (rand() < H / (H + r)) { const th = rr(0, 6.2832); n = V(0, Math.cos(th), Math.sin(th)); c = V(rr(-H, H), 0, 0); }
      else { const sgn = rand() < 0.5 ? -1 : 1; n = randDir(); if (n.x * sgn < 0) n.x = -n.x; c = V(sgn * H, 0, 0); }
      const p = c.clone().addScaledVector(n, r);
      if (!avoidPole || p.x >= -(H + r * 0.55)) return { p, n, c };
    }
    return { p: V(0, r, 0), n: V(0, 1, 0), c: V(0, 0, 0) };
  }
  function outlineCapsule(axis, x1, yC, r, t) {
    if (axis === 'x') { const a = t * Math.PI; return V(0.003, yC + r * Math.cos(a), r * Math.sin(a)); }
    const s = t * (2 * x1 + Math.PI * r);
    if (s < x1) return V(s, yC + r, 0.003);
    if (s < x1 + Math.PI * r) { const a = (s - x1) / r; return V(x1 + r * Math.sin(a), yC + r * Math.cos(a), 0.003); }
    return V(x1 - (s - x1 - Math.PI * r), yC - r, 0.003);
  }
  function addCapBands(k, x1, yC, bands, n = 260) {
    const pos = [], cl = [], nor = [], idx = [], c = new THREE.Color(); let base = 0;
    for (const axis of ['x', 'z']) {
      const nrm = axis === 'x' ? V(1, 0, 0) : V(0, 0, 1);
      bands.forEach(([r0, r1, hex]) => {
        c.set(hex);
        for (let i = 0; i <= n; i++) for (const r of [r0, r1]) { const p = outlineCapsule(axis, x1, yC, r, i / n); pos.push(p.x, p.y, p.z); cl.push(c.r, c.g, c.b); nor.push(nrm.x, nrm.y, nrm.z); }
        for (let i = 0; i < n; i++) { const a = base + i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
        base += (n + 1) * 2;
      });
    }
    const g = new THREE.BufferGeometry();
    [['position', pos], ['color', cl], ['normal', nor]].forEach(([nm, arr]) => g.setAttribute(nm, new THREE.Float32BufferAttribute(arr, 3)));
    g.setIndex(idx); caps.add(new THREE.Mesh(g, reg(k, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.02, side: THREE.DoubleSide }))));
  }
  function pgAlphaTexture() {
    const s = 256, cv = document.createElement('canvas'); cv.width = cv.height = s;
    const g = cv.getContext('2d'); g.fillStyle = '#000'; g.fillRect(0, 0, s, s); g.strokeStyle = '#fff'; g.lineWidth = 3.2;
    for (let x = 0; x < s; x += 16) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, s); g.stroke(); }
    g.lineWidth = 2.0; for (let y = 0; y < s; y += 22) { g.beginPath(); g.moveTo(0, y); g.lineTo(s, y); g.stroke(); }
    const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(18, 9); return t;
  }

  const SITES = { omp: [], tlc1: [], etc: [], atps: [], mitoAtps: [], mitoEtc: [], t4ss: [], pld: [], dna: [], rnap: [], ribosome: [], sca2: [], comet: [], g_actin: [], host_mem: [] };

  function buildBacterialEnvelope(T) {
    cell.add(shade(new THREE.Mesh(rodGeo(R_SLIME), shellMat('slime', '#7adfc6', '#bbfaee', '#54cca8', { thickness: 0.42, atten: 1.7, sheen: '#dcfff6', extra: { normalMap: bump(14, 6), normalScale: new THREE.Vector2(0.22, 0.22) } })), false, false));
    const slimeFib = sculpt('slime', cell, true);
    for (let i = 0; i < 190; i++) { const { p, n } = sampleRodSurface(R_SLIME - 0.03, true); slimeFib.tube([p, p.clone().addScaledVector(n, 0.11).addScaledVector(randDir(), 0.05), p.clone().addScaledVector(n, 0.22).addScaledVector(randDir(), 0.08)], 0.016, 0.007, col('#9ef2dc'), col('#dcfff6'), 6, true); }
    slimeFib.done();

    cell.add(shade(new THREE.Mesh(rodGeo(R_OM), shellMat('om', '#4ec698', '#8ef0c8', '#33a87b', { thickness: 0.52, atten: 1.25, sheen: '#98ffd8', extra: { normalMap: bump(18, 8), normalScale: new THREE.Vector2(0.28, 0.28), iridescence: 0.26, iridescenceIOR: 1.3 } })), false, false));
    cell.add(new THREE.Mesh(rodGeo(R_OM - 0.05, 40, 108), reg('om', phys({ color: '#2d6854', roughness: 0.78, side: THREE.BackSide }))));
    const lps = sculpt('om', cell, true);
    for (let i = 0; i < 240; i++) { const { p, n } = sampleRodSurface(R_OM, true); lps.stick(p, p.clone().addScaledVector(n, rr(0.12, 0.20)).addScaledVector(randDir(), 0.04), 0.015, col('#58d6a6'), col('#b4ffe0')); }
    lps.done();

    cell.add(new THREE.Mesh(rodGeo(R_PG, 44, 120), reg('pg', phys({ color: '#ebd06e', emissive: '#6a4e10', emissiveIntensity: 0.22, roughness: 0.52, alphaMap: pgAlphaTexture(), alphaTest: 0.45, side: THREE.DoubleSide }))));
    const pgS = sculpt('pg', cell, true);
    for (let x = -H + 0.5; x <= H - 0.5; x += 0.95) pgS.ring(V(x, 0, 0), V(1, 0, 0), R_PG, 0.018, col('#f4dc82'), 44, 6);
    pgS.done();

    cell.add(shade(new THREE.Mesh(rodGeo(R_IM), shellMat('im', '#e89480', '#ffc4b5', '#cf6e58', { thickness: 0.48, atten: 1.1, sheen: '#ffe2d8', extra: { normalMap: bump(16, 7), normalScale: new THREE.Vector2(0.26, 0.26) } })), true, true));
    cell.add(new THREE.Mesh(rodGeo(RC, 40, 108), reg('im', phys({ color: '#583f56', roughness: 0.84, side: THREE.BackSide }))));
    addCapBands('slime', H, 0, [[R_OM + 0.02, R_SLIME, '#9ef2dc']]);
    addCapBands('om', H, 0, [[R_OM - 0.02, R_OM + 0.02, '#58d6a6'], [R_OM - 0.06, R_OM - 0.02, '#ffe4ad'], [R_OM - 0.09, R_OM - 0.06, '#48b88c']]);
    addCapBands('pg', H, 0, [[R_PG - 0.025, R_PG + 0.025, '#ebd06e']]);
    addCapBands('im', H, 0, [[R_IM - 0.02, R_IM + 0.02, '#f5a693'], [R_IM - 0.06, R_IM - 0.02, '#ffe4ad'], [RC, R_IM - 0.06, '#e28875']]);

    const qUp = new THREE.Quaternion(), qSpin = new THREE.Quaternion();
    const orient = (n, spin = rr(0, 6.283)) => qUp.setFromUnitVectors(UP, n).clone().multiply(qSpin.setFromAxisAngle(UP, spin));
    const placeOnRod = (b, fixed, total, rad, avoidPole, onSite, scaleFn = () => 1) => {
      for (let i = 0; i < total; i++) {
        const s = i < fixed.length ? (() => { const [x, ny, nz] = fixed[i], n = (x < -H ? V(-0.58, ny, nz) : V(0, ny, nz)).normalize(); return { p: V(Math.max(-H, x), 0, 0).addScaledVector(n, rad), n }; })() : sampleRodSurface(rad, avoidPole);
        b.add(s.p, orient(s.n), scaleFn()); placed++; if (!inWedge(s.p)) onSite(s.p, s.n);
      }
    };

    const ompBatch = molBatch('omp', T.omp, cell, true);
    placeOnRod(ompBatch, [[2.4, 0.96, -0.28], [4.1, 0.92, -0.39], [-4.5, 0.82, 0.57]], 72, R_OM, true, (p, n) => SITES.omp.push(p.clone().addScaledVector(n, 0.26)), () => rr(0.92, 1.12));
    ompBatch.done();

    const tlcBatch = molBatch('tlc1', T.tlc1, cell, true), cutTlc = [[2.1, 0.98, -0.20], [4.6, 0.96, -0.28], [6.4, 0.94, -0.34], [-0.22, 0.72, 0.69]];
    for (let i = 0; i < 14; i++) { const th = rr(-1.4, -0.15); cutTlc.push([rr(-1.5, 7.2), Math.cos(th), Math.sin(th)]); }
    placeOnRod(tlcBatch, cutTlc, 40, R_IM - 0.03, true, (p, n) => SITES.tlc1.push({ p: p.clone(), n: n.clone() }));
    tlcBatch.done();

    const t4Batch = molBatch('t4ss', T.t4ss, cell, true);
    placeOnRod(t4Batch, [[3.35, 0.985, -0.17], [5.85, 0.97, -0.24], [-0.18, 0.35, 0.935], [-8.8, -0.25, 0.55]], 16, R_IM - 0.02, true, (p, n) => SITES.t4ss.push(p.clone().addScaledVector(n, 0.24)));
    t4Batch.done();

    const pldBatch = molBatch('pld', T.pld, cell, true);
    placeOnRod(pldBatch, [[1.55, 0.97, -0.24], [-9.6, 0.35, 0.52]], 14, R_OM + 0.02, false, p => SITES.pld.push(p.clone()));
    return { pldBatch, orient, placeOnRod };
  }

  function buildMitochondrionAndBioenergetics(T, orient, placeOnRod) {
    const mitoGeo = new THREE.CapsuleGeometry(R_MITO, XM1 - XM0, 48, 112).rotateZ(Math.PI / 2); mitoGeo.translate((XM0 + XM1) * 0.5, YM, 0);
    cell.add(shade(new THREE.Mesh(mitoGeo, shellMat('host_mito', '#d9644b', '#ff9d86', '#b8422c', { thickness: 0.55, atten: 1.25, sheen: '#ffd6cc', extra: { normalMap: bump(16, 7), normalScale: new THREE.Vector2(0.28, 0.28) } })), true, true));
    const mitoImGeo = new THREE.CapsuleGeometry(R_MITO_IM, XM1 - XM0, 40, 96).rotateZ(Math.PI / 2); mitoImGeo.translate((XM0 + XM1) * 0.5, YM, 0);
    cell.add(new THREE.Mesh(mitoImGeo, reg('host_mito', phys({ color: '#7a342c', roughness: 0.72, side: THREE.BackSide }))));
    addCapBands('host_mito', XM1, YM, [[R_MITO - 0.04, R_MITO, '#e06d53'], [R_MITO_IM - 0.04, R_MITO_IM + 0.02, '#ffae96']], 220);

    const mitoSculpt = sculpt('host_mito', cell, true), mitoBeads = balls('host_mito', cell, true);
    const etcBatch = molBatch('etc', T.etc, cell, true), atpsBatch = molBatch('atps', T.atps, cell, true);
    [-0.6, 1.25, 3.1, 4.95, 6.8, 8.65, 10.5].forEach((xc, idx) => {
      const rTip = 1.05 + (idx % 2) * 0.28, halfW = 0.14;
      for (const side of [-1, 1]) for (let r = 1.25; r <= R_MITO_IM - 0.08; r += 0.36) {
        const arcPts = []; for (let k = 0; k <= 18; k++) { const a = Math.PI * 0.52 + (k / 18) * Math.PI * 1.42; arcPts.push(V(xc + side * halfW, YM + Math.cos(a) * r, Math.sin(a) * r)); }
        mitoSculpt.tube(arcPts, 0.055, 0.055, col('#e67a60'), col('#ffb099'), 8, true);
      }
      const rimPts = []; for (let k = 0; k <= 20; k++) { const a = Math.PI * 0.54 + (k / 20) * Math.PI * 1.38; rimPts.push(V(xc, YM + Math.cos(a) * rTip, Math.sin(a) * rTip)); }
      mitoSculpt.tube(rimPts, 0.145, 0.145, col('#f28b70'), col('#ffc4ae'), 10, true);
      for (const a of [2.15, 2.85, 3.65, 4.35]) {
        const radialOut = V(0, Math.cos(a), Math.sin(a)), rimPos = V(xc, YM, 0).addScaledVector(radialOut, rTip - 0.05);
        atpsBatch.add(rimPos, orient(radialOut), 0.95); placed++; if (!inWedge(rimPos)) SITES.mitoAtps.push(rimPos.clone().addScaledVector(radialOut, -0.25));
      }
      for (const a of [2.45, 3.35, 4.10]) {
        const flankPos = V(xc + (idx % 2 ? halfW : -halfW), YM + Math.cos(a) * 2.05, Math.sin(a) * 2.05);
        etcBatch.add(flankPos, orient(V(idx % 2 ? 1 : -1, 0.18 * Math.cos(a), 0.18 * Math.sin(a)).normalize()), 0.92); placed++; if (!inWedge(flankPos)) SITES.mitoEtc.push(flankPos.clone());
      }
    });
    for (let i = 0; i < 28; i++) { batch.clump(mitoBeads, V(rr(0.4, 10.8), YM + rr(-0.75, 0.75), rr(-1.45, -0.25)), 0.16, 7, ['#ffcab8', '#f59880', '#ffdcd0'], 0.055, 0.085); placed++; }
    mitoSculpt.done(); mitoBeads.done();

    placeOnRod(etcBatch, [[2.75, 0.975, -0.22], [5.25, 0.96, -0.28], [-0.20, 0.52, 0.85]], 34, R_IM - 0.03, true, (p, n) => SITES.etc.push({ p: p.clone(), n: n.clone() }));
    etcBatch.done();
    placeOnRod(atpsBatch, [[1.35, 0.98, -0.19], [3.95, 0.97, -0.24], [6.85, 0.95, -0.31], [-0.22, -0.45, 0.89]], 28, R_IM - 0.03, true, (p, n) => SITES.atps.push({ p: p.clone(), cyto: p.clone().addScaledVector(n, -0.28), n: n.clone() }));
    atpsBatch.done();
  }

  function buildNucleoidAndTranslation(T) {
    const dnaBalls = balls('dna', cell, true), rnapBalls = balls('rnap', cell, true);
    const rnapBatch = molBatch('rnap', T.rnap, cell, true), riboBatch = molBatch('ribosome', T.ribo, cell, true), qRot = new THREE.Quaternion();
    for (let loop = 0; loop < 24; loop++) {
      const cx = -6.2 + (loop / 23) * 12.4, ang0 = loop * 1.92, rLoop = rr(0.75, 1.75), ctrl = [];
      for (let k = 0; k <= 10; k++) {
        const u = k / 10, tw = u * 6.2832, env = 0.45 + 0.55 * Math.sin(u * Math.PI);
        ctrl.push(V(cx + Math.sin(tw) * rr(0.55, 1.05), THREE.MathUtils.clamp(Math.cos(ang0 + u * 2.1) * rLoop * env + 0.22 * Math.sin(tw * 2), -2.05, 2.05), THREE.MathUtils.clamp(Math.sin(ang0 + u * 2.1) * rLoop * env + 0.22 * Math.cos(tw * 2), -2.05, 2.05)));
      }
      const ax = resample(new THREE.CatmullRomCurve3(ctrl, true, 'centripetal').getPoints(90), 0.026);
      dna.emitDNA(dnaBalls, ax, { nm: 0.042 });
      const mid = ax[Math.floor(ax.length * 0.45)]; if (mid && !inWedge(mid)) SITES.dna.push(mid.clone());
      if (loop % 2 === 1 && SITES.rnap.length < 14) {
        const at = ax[Math.floor(ax.length * 0.35)].clone(), outDir = at.clone().sub(onAxis(at));
        if (outDir.lengthSq() < 1e-4) outDir.set(0, 1, -0.5); outDir.normalize();
        qRot.setFromUnitVectors(UP, outDir); rnapBatch.add(at, qRot, 1.0); placed++; if (!inWedge(at)) SITES.rnap.push(at.clone());
        const mrnaPts = [];
        for (let s = 0; s <= 22; s++) {
          const f = s / 22, mp = at.clone().addScaledVector(outDir, 0.16 + f * 0.78).add(V(0.14 * Math.sin(f * 7 + loop), 0.11 * Math.cos(f * 5), -0.08 * f));
          if (mp.distanceTo(onAxis(mp)) < RC - 0.28) mrnaPts.push(mp);
        }
        if (mrnaPts.length > 5) {
          rna.rnaAlong(rnapBalls, mrnaPts, MRNA, 0.038);
          for (const frac of [0.42, 0.82]) {
            const rp = mrnaPts[Math.min(mrnaPts.length - 1, Math.floor(mrnaPts.length * frac))];
            qRot.setFromUnitVectors(UP, randDir()); riboBatch.add(rp, qRot, 0.96); placed++; if (!inWedge(rp)) SITES.ribosome.push(rp.clone());
          }
        }
      }
    }
    dnaBalls.done(); rnapBalls.done(); rnapBatch.done();
    for (let tries = 0, count = 0; tries < 900 && count < 145; tries++) {
      const onCyl = rand() < 0.78, c = onCyl ? V(rr(-H + 0.3, H - 0.3), 0, 0) : V((rand() < 0.5 ? -1 : 1) * H, 0, 0), d = randDir();
      if (!onCyl && c.x * d.x < 0) d.x = -d.x;
      const p = c.clone().addScaledVector(d, rr(1.55, RC - 0.34));
      qRot.setFromUnitVectors(UP, randDir()); riboBatch.add(p, qRot, rr(0.92, 1.06)); placed++; count++;
      if (!inWedge(p) && SITES.ribosome.length < 80) SITES.ribosome.push(p.clone());
    }
    riboBatch.done();
  }

  function buildCometAndHostMembrane(T, pldBatch, orient) {
    const poleX = -(H + R_OM), scaBatch = molBatch('sca2', T.sca2, cell, false), scaSculpt = sculpt('sca2', cell, false), qPole = new THREE.Quaternion();
    scaSculpt.ring(V(poleX - 0.06, 0, 0), V(1, 0, 0), 1.08, 0.085, col('#ff5e8e'), 40, 8);
    const filamentRoots = [];
    for (let i = 0; i < 14; i++) {
      const ringR = i < 4 ? 0.42 : 1.08, a = i < 4 ? (i / 4) * 6.2832 : ((i - 4) / 10) * 6.2832 + 0.25;
      const pos = V(-H, 0, 0).addScaledVector(V(-1, Math.cos(a) * ringR * 0.26, Math.sin(a) * ringR * 0.26).normalize(), R_OM + 0.06);
      qPole.setFromAxisAngle(V(1, 0, 0), a); scaBatch.add(pos, qPole, 1.0); placed++; SITES.sca2.push(pos.clone()); filamentRoots.push({ pos, a, ringR });
    }
    scaBatch.done(); scaSculpt.done();

    const cometSculpt = sculpt('comet', cell, false);
    filamentRoots.forEach(({ pos, a, ringR }, idx) => {
      const len = rr(11.4, 12.6), steps = 54, strandA = [], strandB = [], axisPts = [];
      for (let s = 0; s <= steps; s++) {
        const u = s / steps, bundleTwist = a + u * 1.65, spread = (ringR + u * 0.85) * (1 - 0.18 * Math.sin(u * Math.PI));
        const cx = pos.x - 0.18 - u * len, cy = Math.cos(bundleTwist) * spread - 0.55 * (Math.max(0, u) ** 1.6), cz = Math.sin(bundleTwist) * spread - 0.25 * (Math.max(0, u) ** 1.5);
        axisPts.push(V(cx, cy, cz));
        const protoAng = u * (len / 0.74) * Math.PI + idx * 0.7, offY = Math.cos(protoAng) * 0.068, offZ = Math.sin(protoAng) * 0.068;
        strandA.push(V(cx, cy + offY, cz + offZ)); strandB.push(V(cx, cy - offY, cz - offZ));
      }
      cometSculpt.tube(strandA, 0.056, 0.042, col('#ffb36b'), col('#ff8547'), 7, true);
      cometSculpt.tube(strandB, 0.056, 0.042, col('#ff9f5a'), col('#ffd599'), 7, true);
      placed++; SITES.comet.push(axisPts[Math.floor(steps * 0.48)].clone());
    });
    cometSculpt.done();

    const gActBatch = molBatch('g_actin', T.gActin, cell, false), qRand = new THREE.Quaternion();
    for (let i = 0; i < 96; i++) {
      const nearPole = i < 68, x = nearPole ? rr(-18.5, -9.4) : rr(-23.0, 9.0), rad = nearPole ? rr(1.35, 4.6) : rr(4.3, 6.8), a = rr(0, 6.2832);
      const p = V(x, Math.cos(a) * rad - 0.3, Math.sin(a) * rad);
      if (p.distanceTo(V(THREE.MathUtils.clamp(p.x, XM0, XM1), YM, 0)) < R_MITO + 0.5) continue;
      qRand.setFromUnitVectors(UP, randDir()); gActBatch.add(p, qRand, rr(0.9, 1.15)); placed++; if (nearPole) SITES.g_actin.push(p.clone());
    }
    gActBatch.done();

    const R_DISC = 8.8, THICK = 0.14, segP = 40, segR = 64, mPos = [], mUv = [], mIdx = [];
    const surfMid = (rho, phi) => V(-24.25 + 4.6 * (Math.max(0, rho) ** 2.0) + 0.28 * Math.sin(phi * 3) * (Math.max(0, rho) ** 1.5), Math.cos(phi) * rho * R_DISC - 0.65, Math.sin(phi) * rho * R_DISC - 0.85);
    const surfNorm = (rho, phi) => { const e = 0.015, p0 = surfMid(rho, phi), n = surfMid(Math.min(1, rho + e), phi).sub(p0).cross(surfMid(Math.max(0.02, rho), phi + e).sub(p0)); return n.lengthSq() > 1e-10 ? n.normalize() : V(1, 0, 0); };
    for (let i = 0; i <= segP; i++) {
      const s = i / segP; let rho, sideSign, edgeR = 0;
      if (s <= 0.45) { rho = s / 0.45; sideSign = 1; }
      else if (s <= 0.55) { const a = ((s - 0.45) / 0.10) * Math.PI; rho = 1; sideSign = Math.cos(a); edgeR = Math.sin(a); }
      else { rho = (1 - s) / 0.45; sideSign = -1; }
      for (let j = 0; j <= segR; j++) {
        const phi = (j / segR) * 6.2832, p = surfMid(rho, phi).addScaledVector(surfNorm(rho, phi), sideSign * THICK).addScaledVector(V(0, Math.cos(phi), Math.sin(phi)), edgeR * THICK);
        mPos.push(p.x, p.y, p.z); mUv.push(rho * Math.cos(phi) * 0.5 + 0.5, rho * Math.sin(phi) * 0.5 + 0.5);
      }
    }
    for (let i = 0; i < segP; i++) for (let j = 0; j < segR; j++) { const a = i * (segR + 1) + j, b = a + 1, c = a + segR + 1, d = c + 1; mIdx.push(a, b, c, b, d, c); }
    const hostMemGeo = new THREE.BufferGeometry();
    hostMemGeo.setAttribute('position', new THREE.Float32BufferAttribute(mPos, 3)); hostMemGeo.setAttribute('uv', new THREE.Float32BufferAttribute(mUv, 2));
    hostMemGeo.setIndex(mIdx); hostMemGeo.computeVertexNormals();
    cell.add(shade(new THREE.Mesh(hostMemGeo, shellMat('host_mem', '#7988f2', '#b3beff', '#5866d6', { thickness: 0.52, atten: 1.5, sheen: '#dce2ff', extra: { normalMap: bump(10, 10), normalScale: new THREE.Vector2(0.26, 0.26) } })), false, true));

    const hmSculpt = sculpt('host_mem', cell, false), rimLoop = [];
    for (let j = 0; j <= 56; j++) rimLoop.push(surfMid(0.96, (j / 56) * 6.2832));
    hmSculpt.tube(rimLoop, 0.11, 0.11, col('#9aa6ff'), col('#c5cdff'), 8, false); hmSculpt.done();
    for (let k = 0; k < 10; k++) {
      const rho = rr(0.18, 0.78), phi = rr(0, 6.2832), mp = surfMid(rho, phi), mn = surfNorm(rho, phi), dock = mp.clone().addScaledVector(mn, THICK + 0.05);
      pldBatch.add(dock, orient(mn), 1.05); placed++; SITES.host_mem.push(mp.clone()); SITES.pld.push(dock.clone());
    }
    pldBatch.done();
  }

  const MOL = {
    atp: ['Host ATP (imported via Tlc1)', '#58c4ff', 'hex', 0.25],
    adp: ['Spent ADP (exported via Tlc1)', '#ffb36b', 'hex', 0.22],
    actin: ['ATP-G-actin (polymerized at Sca2)', '#ffd17a', 'blob', 0.24],
    hplus: ['Protons H+ (ETC & F1Fo gradient)', '#ff6b8b', 'dot', 0.19],
  };
  function glyph(g, kind, x, y, s, hex) {
    const c = x + s / 2, m = y + s / 2, r = s * 0.38;
    g.save(); g.fillStyle = hex; g.strokeStyle = '#101522'; g.lineWidth = s * 0.08; g.lineJoin = g.lineCap = 'round';
    const dot = (px, py, rad) => { g.beginPath(); g.arc(px, py, rad, 0, 6.283); g.fill(); g.stroke(); };
    if (kind === 'hex') { g.beginPath(); for (let k = 0; k < 6; k++) { const a = k * 1.0472 - 0.5236; g[k ? 'lineTo' : 'moveTo'](c + Math.cos(a) * r, m + Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke(); }
    else if (kind === 'blob') { dot(c - r * 0.32, m + r * 0.18, r * 0.5); dot(c + r * 0.34, m + r * 0.16, r * 0.46); dot(c, m - r * 0.26, r * 0.52); }
    else { dot(c, m, r * 0.72); g.lineWidth = s * 0.09; g.beginPath(); g.moveTo(c - r * 0.3, m); g.lineTo(c + r * 0.3, m); g.moveTo(c, m - r * 0.3); g.lineTo(c, m + r * 0.3); g.stroke(); }
    g.restore();
  }
  const ATLAS = (() => {
    const keys = Object.keys(MOL), S = 64, c = document.createElement('canvas'); c.width = S * keys.length; c.height = S;
    const g = c.getContext('2d'); keys.forEach((k, i) => glyph(g, MOL[k][2], i * S + 4, 4, S - 8, MOL[k][1]));
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    return { tex: t, n: keys.length, idx: Object.fromEntries(keys.map((k, i) => [k, i])) };
  })();

  const FLOW_MAX = 340, fPos = new Float32Array(FLOW_MAX * 3), fSize = new Float32Array(FLOW_MAX), fCol = new Float32Array(FLOW_MAX * 3), fKind = new Float32Array(FLOW_MAX), fFade = new Float32Array(FLOW_MAX);
  const flowGeo = new THREE.BufferGeometry();
  [['position', fPos, 3], ['size', fSize, 1], ['icol', fCol, 3], ['kind', fKind, 1], ['fade', fFade, 1]].forEach(([nm, arr, d]) => flowGeo.setAttribute(nm, new THREE.BufferAttribute(arr, d)));
  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uTex: { value: ATLAS.tex }, uN: { value: ATLAS.n }, uBoost: { value: 1 } },
    vertexShader: `attribute float size, kind, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vKind, vFade;
      void main() { vCol = icol; vKind = kind; vFade = fade; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = clamp(size * uBoost * uScale / max(.1, -mv.z), 0., 54.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D uTex; uniform float uN; varying vec3 vCol; varying float vKind, vFade;
      void main() { vec4 t = texture2D(uTex, vec2((gl_PointCoord.x + vKind) / uN, 1. - gl_PointCoord.y)); if (t.a < .08) discard; gl_FragColor = vec4(t.rgb, t.a * vFade); }`,
    transparent: true, depthWrite: false,
  });
  impMats.push(flowMat);
  const flowPts = new THREE.Points(flowGeo, flowMat); flowPts.frustumCulled = false; flowPts.renderOrder = 3; cell.add(flowPts);

  const live = [], free = []; for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  let flowsOn = true, flowSpeed = 1, fClock = 0, molHi = null;
  function emitFlow(type, pts, tags, dur = 3.0) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop(), curve = new THREE.CatmullRomCurve3(pts), c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b; fKind[i] = ATLAS.idx[type];
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.04 });
  }
  const pickSite = arr => arr[Math.floor(rand() * arr.length)];
  const STREAM_TIMERS = [
    { rate: 2.2, acc: 0.4, go: () => { if (!SITES.mitoAtps.length || !SITES.tlc1.length || !SITES.ribosome.length) return; const mA = pickSite(SITES.mitoAtps), tl = pickSite(SITES.tlc1), rb = pickSite(SITES.ribosome); emitFlow('atp', [mA.clone(), mA.clone().lerp(tl.p, 0.5).add(V(rr(-0.6, 0.6), 0, rr(-0.6, 0))), tl.p.clone().addScaledVector(tl.n, 0.6), tl.p.clone(), rb.clone()], ['host_mito', 'atps', 'tlc1', 'im', 'ribosome', 'rnap'], 3.2); } },
    { rate: 1.9, acc: 0.7, go: () => { if (!SITES.mitoAtps.length || !SITES.tlc1.length || !SITES.ribosome.length) return; const rb = pickSite(SITES.ribosome), tl = pickSite(SITES.tlc1), mA = pickSite(SITES.mitoAtps); emitFlow('adp', [rb.clone(), tl.p.clone(), tl.p.clone().addScaledVector(tl.n, 0.75), mA.clone()], ['ribosome', 'tlc1', 'im', 'host_mito'], 3.1); } },
    { rate: 2.6, acc: 0.5, go: () => { if (!SITES.g_actin.length || !SITES.sca2.length || !SITES.comet.length) return; const ga = pickSite(SITES.g_actin), sc = pickSite(SITES.sca2), cm = pickSite(SITES.comet); emitFlow('actin', [ga.clone(), sc.clone(), cm.clone(), V(-23.2, cm.y * 1.15 - 0.35, cm.z * 1.15)], ['g_actin', 'sca2', 'comet', 'host_mem'], 3.4); } },
    { rate: 2.4, acc: 0.2, go: () => {
      if (rand() < 0.62 && SITES.etc.length && SITES.atps.length) { const e = pickSite(SITES.etc), a = pickSite(SITES.atps); emitFlow('hplus', [e.p.clone().addScaledVector(e.n, -0.22), e.p.clone().addScaledVector(e.n, 0.22), a.p.clone().addScaledVector(a.n, 0.22), a.cyto.clone()], ['etc', 'atps', 'im', 'pg'], 2.4); }
      else if (SITES.mitoEtc.length && SITES.mitoAtps.length) { const me = pickSite(SITES.mitoEtc), ma = pickSite(SITES.mitoAtps); emitFlow('hplus', [me.clone(), me.clone().lerp(ma, 0.5), ma.clone()], ['etc', 'atps', 'host_mito'], 2.2); }
    } },
  ];
  function updateFlows(dt) {
    fClock += dt; if (dt > 0) STREAM_TIMERS.forEach(s => { s.acc += dt * s.rate; while (s.acc >= 1) { s.acc--; s.go(); } });
    const w = fClock, q = V(), anyHi = molHi || hi;
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k], base = MOL[p.type][3] * 2.35;
      if ((p.t += dt / p.dur) >= 1) { live[k] = live[live.length - 1]; live.pop(); free.push(p.i); fSize[p.i] = 0; continue; }
      p.curve.getPointAt(p.t, q); const a = p.wob * Math.sin(Math.PI * p.t);
      q.x += a * Math.sin(w * 5.1 + p.ph); q.y += a * Math.cos(w * 4.3 + p.ph); q.z += a * Math.sin(w * 4.7 + p.ph * 1.7);
      const s = base * Math.min(1, p.t / 0.1, (1 - p.t) / 0.1), lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z; fSize[p.i] = s * (anyHi ? (lit ? 1.45 : 0.55) : 1); fFade[p.i] = anyHi && !lit ? 0.25 : 1;
    }
    flowGeo.attributes.position.needsUpdate = flowGeo.attributes.size.needsUpdate = flowGeo.attributes.fade.needsUpdate = true;
  }

  const composer = new EffectComposer(renderer), bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.26, 0.55, 0.86);
  const lens = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(innerWidth, innerHeight) }, uTime: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
      float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() { vec2 d = vUv - .5; float r2 = dot(d, d); vec2 o = d * r2 * .01;
        vec3 c = vec3(texture2D(tDiffuse, vUv + o).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - o).b);
        c *= mix(1., .52, smoothstep(.1, .64, r2 * 2.)); c += (h(vUv * uRes + fract(uTime) * 91.7) - .5) * .026; gl_FragColor = vec4(c, 1.); }`,
  });
  composer.addPass(new RenderPass(scene, camera)); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(lens);
  function resize() {
    renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); bloom.resolution.set(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); lens.uniforms.uRes.value.set(innerWidth, innerHeight);
    const s = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan((camera.fov * Math.PI) / 360));
    impMats.forEach(m => { m.uniforms.uScale.value = s; }); controls.maxDistance = 105 * Math.max(1, 1.45 / camera.aspect);
  }
  addEventListener('resize', resize);

  let hi = null;
  const legend = document.getElementById('legend'), tipBox = document.getElementById('tip');
  const TIP0 = 'Rickettsia prowazekii shares inner-membrane ETC and rotary F1Fo ATP synthase homology with adjacent eukaryotic mitochondria, importing host ATP via Tlc1 and polymerizing polar F-actin tails via Sca2.';
  tipBox.textContent = TIP0;
  PARTS.forEach(([k, name, hex]) => {
    const it = document.createElement('div'), sw = document.createElement('span'), t = document.createElement('span');
    it.className = 'it'; sw.className = 'sw'; sw.style.background = hex; t.textContent = name;
    it.append(sw, t); legend.append(it); it.onmouseenter = () => setHi(k); it.onmouseleave = () => setHi(null);
  });
  const keyLegend = document.createElement('div'); keyLegend.className = 'key';
  keyLegend.innerHTML = `<div class="row">DNA/RNA ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div><div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>1.11 Mbp dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>mRNA</div>`;
  legend.append(keyLegend);
  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div'), cv = document.createElement('canvas'), t = document.createElement('span');
    it.className = 'mol'; cv.width = cv.height = 44; glyph(cv.getContext('2d'), g, 3, 3, 38, colour); t.textContent = name;
    it.append(cv, t); document.getElementById('mols').append(it); it.onmouseenter = () => { molHi = k; }; it.onmouseleave = () => { molHi = null; };
  });

  function setHi(k) {
    if (hi && REG[hi]) {
      REG[hi].mats.forEach(m => { if (m.userData.e0) { m.emissive.copy(m.userData.e0); m.emissiveIntensity = m.userData.i0; } });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) REG[hi].mats.forEach(m => { m.userData.e0 ??= m.emissive.clone(); m.userData.i0 ??= m.emissiveIntensity; });
    const inf = hi && INFO[hi]; tipBox.replaceChildren();
    if (!inf) tipBox.textContent = TIP0;
    else { const b = document.createElement('b'); b.textContent = PARTS.find(p => p[0] === hi)[1]; tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Role: ${inf[1]}`); }
  }
  const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)[2]);

  let motion = true, sway = 0, last = performance.now();
  document.getElementById('view').onclick = e => { view = (view + 1) % VIEWS.length; const [name, p, t] = VIEWS[view]; curView = name; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone())); e.target.textContent = `View: ${name}`; };
  document.getElementById('look').onclick = e => { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); e.target.textContent = `Envelope: ${organelleLook}`; };
  document.getElementById('cut').onclick = e => { cutOn = !cutOn; caps.visible = cutOn; e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; };
  document.getElementById('flow').onclick = e => { flowsOn = !flowsOn; flowPts.visible = flowsOn; e.target.textContent = `Metabolism: ${flowsOn ? 'on' : 'off'}`; };
  const speed = document.getElementById('speed'), spd = document.getElementById('spd');
  speed.oninput = () => { flowSpeed = 2 ** +speed.value; spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`; };
  speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
  document.getElementById('motion').onclick = e => { motion = !motion; e.target.textContent = motion ? 'Pause' : 'Play'; };
  document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'rickettsia-prowazekii-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

  const held = new Set(), fwd = V(), side = V(), step = V(), aim = new THREE.Spherical(), raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
  addEventListener('keydown', e => { const k = e.key.toLowerCase(); if (k.length === 1 && 'wasd'.includes(k) && !e.target.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k); });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase())); addEventListener('blur', () => held.clear());
  controls.enableRotate = false; let lookFrom = null, downAt = null;
  renderer.domElement.addEventListener('pointerdown', e => { if (e.button === 0) { lookFrom = [e.clientX, e.clientY]; downAt = [e.clientX, e.clientY]; renderer.domElement.setPointerCapture(e.pointerId); } });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!lookFrom) return;
    const dx = e.clientX - lookFrom[0], dy = e.clientY - lookFrom[1]; lookFrom = [e.clientX, e.clientY];
    if (tour.on) { tour.yaw = Math.min(0.44, Math.max(-0.44, tour.yaw - dx * 0.002)); tour.pitch = Math.min(0.44, Math.max(-0.44, tour.pitch + dy * 0.002)); return; }
    aim.setFromVector3(controls.target.clone().sub(camera.position));
    aim.theta -= dx * 0.002; aim.phi = Math.min(Math.PI - 0.05, Math.max(0.05, aim.phi + dy * 0.002));
    controls.target.copy(camera.position).add(V().setFromSpherical(aim));
  });
  renderer.domElement.addEventListener('pointerup', e => {
    if (EMBED && downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) < 5) {
      ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); raycaster.setFromCamera(ndc, camera);
      const matMap = matToKeyMap(), found = raycaster.intersectObjects(cell.children, true).find(h => h.object !== flowPts && matMap.has(h.object.material));
      if (found) toExplorer({ type: 'pick', key: matMap.get(found.object.material) });
    }
    lookFrom = null; downAt = null;
  });
  renderer.domElement.addEventListener('pointercancel', () => { lookFrom = null; downAt = null; });
  function freeMove(dt) {
    if (!held.size || tour.on) return;
    camera.getWorldDirection(fwd); side.crossVectors(fwd, camera.up).normalize();
    step.set(0, 0, 0).addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s'))).addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (step.lengthSq() > 1e-6) { step.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * 0.5)); camera.position.add(step); controls.target.add(step); }
  }

  const POINTS = {}, FOCUS = {};
  function pointsOf(vName) {
    if (POINTS[vName]) return POINTS[vName];
    const tlc0 = SITES.tlc1[0]?.p ?? V(2.1, 2.95, -0.60), etc0 = SITES.etc[0]?.p ?? V(2.75, 2.93, -0.66), atps0 = SITES.atps[0]?.cyto ?? V(1.35, 2.68, -0.52);
    let P = {};
    if (vName === 'cytosol') P = { slime: V(-4.2, R_SLIME, 0.2), om: V(1.8, R_OM - 0.02, -0.05), omp: SITES.omp[0] ?? V(2.4, R_OM + 0.25, -0.95), pg: V(2.6, R_PG, -0.04), im: V(0.9, R_IM - 0.03, -0.04), tlc1: tlc0, etc: etc0, atps: atps0, t4ss: SITES.t4ss[0] ?? V(3.35, 3.22, -0.55), pld: SITES.pld[0] ?? V(1.55, 3.42, -0.84), dna: SITES.dna[10] ?? V(1.2, 0.2, -0.8), rnap: SITES.rnap[6] ?? V(0.6, 0.9, -0.9), ribosome: SITES.ribosome[4] ?? V(3.2, -1.6, -1.1), sca2: SITES.sca2[0] ?? V(-11.05, 0.42, 0), comet: SITES.comet[0] ?? V(-16.8, -0.25, 0.15), g_actin: SITES.g_actin[0] ?? V(-13.4, 2.3, 0.8), host_mito: V(5.2, YM + 1.2, -1.5), host_mem: V(-23.9, -0.6, -0.8) };
    if (vName === 'envelope') P = { slime: V(2.2, R_SLIME - 0.04, -0.04), om: V(2.9, R_OM - 0.03, -0.04), omp: SITES.omp[0] ?? V(2.4, R_OM + 0.25, -0.95), pg: V(3.6, R_PG, -0.04), im: V(1.8, R_IM - 0.03, -0.04), tlc1: tlc0, etc: etc0, atps: SITES.atps[1]?.cyto ?? V(3.95, 2.66, -0.68), t4ss: SITES.t4ss[0] ?? V(3.35, 3.22, -0.55), pld: SITES.pld[0] ?? V(1.55, 3.42, -0.84), dna: SITES.dna[12] ?? V(2.6, 1.3, -0.8), rnap: SITES.rnap[7] ?? V(2.9, 1.5, -0.9), ribosome: SITES.ribosome[6] ?? V(3.4, 1.9, -0.7) };
    if (vName === 'comet') P = { sca2: SITES.sca2[0] ?? V(-11.05, 0.42, 0), comet: SITES.comet[0] ?? V(-16.8, -0.25, 0.15), g_actin: SITES.g_actin[0] ?? V(-13.4, 2.3, 0.8), host_mem: V(-23.9, -0.6, -0.8), slime: V(-9.2, R_SLIME * 0.88, 1.2), om: V(-9.6, R_OM * 0.84, 1.1), omp: SITES.omp[2] ?? V(-8.5, 2.8, 2.1), pg: V(-9.0, R_PG * 0.8, 0.9), im: V(-8.8, R_IM * 0.78, 0.8), pld: SITES.pld[15] ?? V(-23.6, 1.2, -0.5), t4ss: SITES.t4ss[3] ?? V(-8.8, -0.8, 1.8) };
    if (vName === 'mito_link') P = { host_mito: V(5.1, YM + 1.1, -1.4), tlc1: SITES.tlc1[1]?.p ?? V(4.6, 2.90, -0.84), etc: SITES.etc[1]?.p ?? V(5.25, 2.88, -0.84), atps: SITES.atps[1]?.cyto ?? V(3.95, 2.66, -0.68), im: V(4.4, R_IM - 0.03, -0.04), pg: V(5.0, R_PG, -0.04), om: V(5.6, R_OM - 0.03, -0.04), slime: V(6.2, R_SLIME - 0.04, -0.04), omp: SITES.omp[1] ?? V(4.1, 3.45, -1.35), t4ss: SITES.t4ss[1] ?? V(5.85, 3.18, -0.76), dna: SITES.dna[14] ?? V(4.2, 0.8, -0.8), rnap: SITES.rnap[8] ?? V(4.8, 1.2, -0.9), ribosome: SITES.ribosome[8] ?? V(5.4, 1.6, -0.9) };
    return POINTS[vName] = P;
  }
  function focusOf(k) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('cytosol'), d0 = V(0.55, 0.24, 0.80).normalize(), dComet = V(0.38, 0.22, 0.90).normalize();
    const AT = { slime: [P.slime, 3.4, d0], om: [P.om, 2.6, d0], omp: [P.omp, 2.2, d0], pg: [P.pg, 2.4, d0], im: [P.im, 2.5, d0], tlc1: [P.tlc1, 2.1, d0], etc: [P.etc, 2.2, d0], atps: [P.atps, 2.1, d0], t4ss: [P.t4ss, 2.2, d0], pld: [P.pld, 2.2, d0], dna: [P.dna, 3.2, d0], rnap: [P.rnap, 2.2, d0], ribosome: [P.ribosome, 2.2, d0], sca2: [P.sca2, 2.6, dComet], comet: [P.comet, 4.4, dComet], g_actin: [P.g_actin, 3.0, dComet], host_mito: [P.host_mito, 4.8, d0], host_mem: [P.host_mem, 4.8, dComet] };
    if (!AT[k]) return FOCUS[k] = null;
    const [c, r, dir] = AT[k]; return FOCUS[k] = { c: c.clone(), r, dir: dir.clone() };
  }

  const tour = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = x => x * x * x * (x * (x * 6 - 15) + 10);
  function poseOf(m) {
    if (m.view) { const v = VIEWS.find(x => x[0] === m.view); return v && { p: v[1].clone(), t: v[2].clone() }; }
    if (m.part) { const f = focusOf(m.part); return f && { p: f.c.clone().addScaledVector(f.dir, (m.dist ?? 1) * f.r / Math.sin((camera.fov * Math.PI) / 360)), t: f.c.clone() }; }
    return m.pos ? { p: V(...m.pos), t: V(...(m.target ?? [0, 0, 0])) } : null;
  }
  function flyTo(m) {
    const to = poseOf(m); if (!to) return false;
    if (m.view) { const idx = VIEWS.findIndex(x => x[0] === m.view); if (idx >= 0) { view = idx; curView = m.view; } }
    cell.updateMatrixWorld();
    tour.from = { p: cell.worldToLocal(camera.position.clone()), t: cell.worldToLocal(controls.target.clone()) }; tour.to = to;
    Object.assign(tour, { on: true, t: m.dur > 0 ? 0 : 1, dur: m.dur || 1, seq: m.seq ?? 0, orbit: m.orbit ?? 0, sent: false });
    controls.enabled = false; held.clear(); return true;
  }
  const freeCamera = () => { tour.on = false; tour.yaw = tour.pitch = 0; controls.enabled = true; };
  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(-2, 1.5, 0);
  function tourFrame(dt) {
    if (!tour.on) return;
    const { from, to } = tour;
    if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
    else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, (tour.orbit * Math.PI) / 180 * dt).add(to.t);
    const e = smoother(tour.t);
    ft.lerpVectors(from.t, to.t, e); qa.copy(from.p).sub(C0); qb.copy(to.p).sub(C0);
    const ra = Math.max(0.05, qa.length()), rb = Math.max(0.05, qb.length()); qa.normalize(); qb.normalize();
    const ang = Math.acos(Math.min(1, Math.max(-1, qa.dot(qb))));
    if (ang < 1e-3 || ang > 3.1) fp.lerpVectors(qa, qb, e).normalize();
    else fp.copy(qa).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(qb, Math.sin(e * ang)).divideScalar(Math.sin(ang));
    fp.multiplyScalar((Math.max(0.05, ra) ** (1 - e)) * (Math.max(0.05, rb) ** e) * (1 + Math.min(0.45, ang * 0.25) * Math.sin(Math.PI * e))).add(C0);
    if (!lookFrom) { const k = Math.exp(-dt / 0.2); tour.yaw *= k; tour.pitch *= k; }
    look.copy(ft).sub(fp);
    if (tour.yaw || tour.pitch) { right.crossVectors(look, UP).normalize(); look.applyAxisAngle(UP, tour.yaw).applyAxisAngle(right, -tour.pitch); }
    camera.position.copy(fp); cell.localToWorld(camera.position); controls.target.copy(fp).add(look); cell.localToWorld(controls.target); camera.lookAt(controls.target);
    if (tour.t >= 1 && !tour.sent) { tour.sent = true; if (EMBED) toExplorer({ type: 'arrived', seq: tour.seq }); }
  }

  const KIN = { om: ['omp', 'slime'], im: ['tlc1', 'etc', 'atps', 't4ss'], sca2: ['comet', 'g_actin'], host_mito: ['etc', 'atps'] };
  const saved = new Map(), hidden = [];
  let ghostArgs = null, OBJS = null, MAT_KEY = null;
  const matToKeyMap = () => { if (!MAT_KEY) { MAT_KEY = new Map(); Object.entries(REG).forEach(([k, r]) => [...r.mats, ...r.imp].forEach(m => { if (!MAT_KEY.has(m)) MAT_KEY.set(m, k); })); } return MAT_KEY; };
  const objsOf = () => { const of = matToKeyMap(), out = {}; cell.traverse(o => { const k = o.material && of.get(o.material); if (k) (out[k] ??= []).push(o); }); return out; };
  function ghost(keep = null, amount = 0.1, hide = false) {
    saved.forEach((v, m) => { Object.assign(m, v); if (m.uniforms?.uDim) m.uniforms.uDim.value = 1; m.needsUpdate = true; }); saved.clear();
    hidden.forEach(o => { o.visible = true; }); hidden.length = 0;
    ghostArgs = keep ? [keep, amount, hide] : null; if (!keep) return;
    const K = new Set(keep.flatMap(k => [k, ...(KIN[k] ?? [])]));
    Object.entries(REG).forEach(([k, r]) => {
      if (K.has(k)) return;
      if (hide) { (OBJS ??= objsOf())[k]?.forEach(o => { if (o.visible) { o.visible = false; hidden.push(o); } }); return; }
      r.mats.forEach(m => { if (!saved.has(m)) { saved.set(m, { transparent: m.transparent, opacity: m.opacity, depthWrite: m.depthWrite, ...('transmission' in m && { transmission: m.transmission }) }); m.transparent = true; m.opacity = Math.min(m.opacity, amount); m.depthWrite = false; if ('transmission' in m) m.transmission = 0; m.needsUpdate = true; } });
      r.imp.forEach(m => { if (!saved.has(m)) { saved.set(m, { transparent: m.transparent, depthWrite: m.depthWrite }); if (m.uniforms?.uDim) m.uniforms.uDim.value = amount * 0.5; m.transparent = true; m.depthWrite = false; m.needsUpdate = true; } });
    });
  }
  let blinkT0 = null, blinkN = 3;
  const blink = (k, n = 3) => { setHi(k); if (hi) { blinkT0 = performance.now(); blinkN = n; } };
  const hiLevel = now => { if (blinkT0 === null) return 0.55 + 0.45 * Math.sin(now / 180); const t = (now - blinkT0) / 1000; return t < blinkN / 1.5 ? 0.5 - 0.5 * Math.cos(t * 3 * Math.PI) : 0.3 + 0.06 * Math.sin(now / 400); };
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
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (motion) { sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 4) / 18)); cell.rotation.y = 0.09 * Math.sin(sway * 0.11); }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.65, Math.min(1.65, camera.position.distanceTo(controls.target) / 18));
    cell.updateMatrixWorld(); updateCut();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) { const k = hiLevel(now), c = hiCol(hi); REG[hi].mats.forEach(m => { m.emissive.copy(c); m.emissiveIntensity = 0.25 + 0.75 * k; }); REG[hi].imp.forEach(m => { m.uniforms.uHi.value = k; }); }
    lens.uniforms.uTime.value = now / 1000; freeMove(dt); controls.update(); tourFrame(dt); composer.render();
    if (EMBED) embedFrame();
  }

  function build() {
    const T = makeProteinTemplates(), { pldBatch, orient, placeOnRod } = buildBacterialEnvelope(T);
    buildMitochondrionAndBioenergetics(T, orient, placeOnRod); buildNucleoidAndTranslation(T); buildCometAndHostMembrane(T, pldBatch, orient);
    for (let s = 0; s < 120; s++) updateFlows(0.05);
  }
  setTimeout(() => { build(); applyLook(); resize(); renderer.setAnimationLoop(frame); document.getElementById('busy').style.display = 'none'; }, 30);

  const EMBED = document.documentElement.classList.contains('embed'), toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts = [], tagSeq = 0, sentReady = false, sendTagsAlias = false;
  const scr = V(), say = () => toExplorer({ type: 'state', view: curView, motion, look: organelleLook, cut: cutOn, flow: flowsOn });
  function embedFrame() {
    if (!sentReady) {
      sentReady = true;
      const mols = Object.entries(MOL).map(([k, [name, colour, g]]) => { const cv = document.createElement('canvas'); cv.width = cv.height = 44; glyph(cv.getContext('2d'), g, 3, 3, 38, colour); return [k, name, cv.toDataURL()]; });
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]) });
    }
    const w = innerWidth, h = innerHeight, pts = tagPts.map(p => { if (!p) return null; scr.copy(p); cell.localToWorld(scr); scr.project(camera); return [(scr.x * 0.5 + 0.5) * w, (-scr.y * 0.5 + 0.5) * h, scr.z < 1]; });
    toExplorer({ type: 'pts', seq: tagSeq, pts }); if (sendTagsAlias) toExplorer({ type: 'tags', seq: tagSeq, tags: pts, pts });
  }

  if (EMBED) {
    addEventListener('message', e => {
      const m = e.data; if (!m || m.to !== 'realistic-cell') return;
      if (m.cmd === 'view') {
        const v = VIEWS.findIndex(x => x[0] === m.view); if (v < 0) return;
        freeCamera(); view = v; curView = VIEWS[v][0]; const [, p, t] = VIEWS[v];
        camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone()));
        const P = pointsOf(m.view); tagPts = (m.points ?? m.tags ?? []).map(k => P[k] ?? null); tagSeq = m.seq;
      }
      if (m.cmd === 'track' || m.cmd === 'tags') {
        tagPts = (m.points ?? m.tags ?? []).map(x => { const [v, k] = Array.isArray(x) ? x : [m.view ?? 'cytosol', x]; return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k]) ?? null; }); tagSeq = m.seq;
        if (m.cmd === 'tags') { sendTagsAlias = true; embedFrame(); }
      }
      if (m.cmd === 'fly' && !flyTo(m)) toExplorer({ type: 'arrived', seq: m.seq ?? 0, missed: true });
      if (m.cmd === 'free') freeCamera();
      if (m.cmd === 'blink') { if (m.key) blink(m.key, m.n ?? 3); else setHi(null); }
      if (m.cmd === 'ghost') ghost(m.keep ?? null, m.amount ?? 0.1, !!m.hide);
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

  window.__cell = {
    renderer, composer, camera, controls, scene, cell, REG, shells, setHi, V, focusOf, flyTo, freeCamera, ghost, blink, setState, tour,
    get placed() { return placed; }, get curView() { return curView; }, setLook: k => { organelleLook = k; applyLook(); },
    get sites() { return SITES; }, get flows() { return live; }, get views() { return VIEWS; },
    pointsOf, setMol: k => { molHi = k; }, step: (dt = 0.05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); },
  };
});
