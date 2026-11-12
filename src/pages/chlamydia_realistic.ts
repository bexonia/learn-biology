// @ts-nocheck
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  runBiologyApp, buildPdbSurfaceGeo, makeProteinBumpTexture, makeMolBatch, makeSculptedMesh,
  BASE, BACKBONE, MRNA, col,
} from '../index.js';

runBiologyApp(20261109, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');
  const UP = geometry.UP, rand = random.rand, across = geometry.across;
  const rr = (a, b) => a + (b - a) * rand();
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
  const randDir = () => { const u = rr(-1, 1), t = rr(0, Math.PI * 2), s = Math.sqrt(Math.max(0, 1 - u * u)); return V(s * Math.cos(t), u, s * Math.sin(t)); };

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
    const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d'), gr = g.createRadialGradient(285, 215, 0, 256, 256, 390);
    gr.addColorStop(0, '#201936'); gr.addColorStop(.54, '#0c091a'); gr.addColorStop(1, '#030208'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;

  const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, .1, 460);
  camera.position.set(27.5, 4.2, 30.5);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, -.2, 0); controls.enableDamping = true; controls.minDistance = .6; controls.maxDistance = 120; controls.panSpeed = .5; controls.zoomSpeed = .5;

  scene.add(new THREE.HemisphereLight('#f2e6ff', '#1b2035', .54));
  const key = new THREE.DirectionalLight('#fff2e0', 2.95); key.position.set(18, 28, 22); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, near: 1, far: 105 }); key.shadow.bias = -.0005; key.shadow.normalBias = .03;
  const rim = new THREE.DirectionalLight('#8ec5ff', 1.45); rim.position.set(-20, 9, -18);
  const lamp = new THREE.PointLight('#ffc0a2', 12.5, 34, 2); lamp.position.set(5.4, 1.4, 5.8);
  scene.add(key, rim, lamp);

  const cell = new THREE.Group(); scene.add(cell);
  const CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), 0), new THREE.Plane(V(0, 0, -1), 0)], CUT = CUT_LOCAL.map(p => p.clone());
  let cutOn = true;
  function updateCut() { CUT.forEach((p, i) => { p.copy(CUT_LOCAL[i]); if (!cutOn) p.constant = 1e4; p.applyMatrix4(cell.matrixWorld); }); }
  const CLIP = { clippingPlanes: CUT, clipIntersection: true, clipShadows: true };
  const phys = o => new THREE.MeshPhysicalMaterial({ envMapIntensity: .8, ...CLIP, ...o });
  const nmap = waveNormalMap(), bump = (rx, ry) => { const t = nmap.clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };
  const protBump = makeProteinBumpTexture(256);

  const PARTS = [
    ['inclusion', 'Host-derived chlamydial inclusion vacuole membrane', '#a29bfe'],
    ['inc', 'Inc transmembrane shield proteins', '#ff9ff3'],
    ['golgi_lip', 'Intercepted host Golgi sphingomyelin vesicles', '#fd9644'],
    ['host_cyto', 'Host epithelial cytosol & mitochondrion', '#cf6a87'],
    ['eb_om', 'Disulfide-crosslinked OmcB / OmcA outer armor', '#38ada9'],
    ['momp', 'Major Outer Membrane Protein (MOMP) beta-barrels', '#78e08f'],
    ['eb_dna', 'Hc1 / Hc2 histone-condensed dsDNA nucleoid', '#60a3bc'],
    ['t3ss', 'Type III Secretion System (T3SS) injectisome needles', '#ff6b8b'],
    ['tarP', 'Injected TARP & Inc effectors remodeling host actin', '#f8a5c2'],
    ['rb_om', 'Reticulate Body outer membrane', '#f3a683'],
    ['rb_im', 'Reticulate Body inner plasma membrane', '#f7d794'],
    ['septum', 'Transient septal peptidoglycan ring (chlamydial anomaly)', '#ffd15c'],
    ['mreb', 'MreB actin-like division scaffold', '#ff7675'],
    ['npt1', 'Npt1 ATP/ADP translocase (ATP thief)', '#feca57'],
    ['npt2', 'Npt2 proton-coupled GTP / CTP / UTP importer', '#54a0ff'],
    ['rb_dna', 'Relaxed 1.04 Mbp dsDNA chromosome', '#48dbfb'],
    ['rnap', 'Chlamydial RNA polymerase', '#e056fd'],
    ['mrna', 'Chlamydial mRNA transcripts', '#ffb35c'],
    ['ribosome', '70S bacterial ribosomes & polysomes', '#ffeaa7'],
    ['glycogen', 'Intraluminal inclusion glycogen granules', '#b8e994'],
  ];

  const INFO = {
    inclusion: ['Host-derived pathogen-modified vacuole bilayer', 'Shields replicating Chlamydia from host endolysosomal destruction'],
    inc: ['Bi-lobed hydrophobic hairpin + cytosolic coiled-coil proteins', 'Blocks lysosomal fusion and tethers host ER, Golgi & mitochondria'],
    golgi_lip: ['Exocytic trans-Golgi sphingomyelin & cholesterol vesicles', 'Rerouted into the inclusion to feed bacterial membrane expansion'],
    host_cyto: ['Host epithelial F-actin cage, Golgi stack & mitochondria', 'Supplies ready-made ATP, ribonucleotides and lipids to the inclusion'],
    eb_om: ['Disulfide-crosslinked OmcB / OmcA cysteine-rich spore coat', 'Gives 300 nm Elementary Bodies extracellular osmotic & mechanical armor'],
    momp: ['Trimeric Major Outer Membrane Protein (OmpA) β-barrels', 'Structural porin & adhesin comprising ~60% of outer membrane mass'],
    eb_dna: ['1.04 Mbp dsDNA condensed by Hc1 / Hc2 histone homologs', 'Silences transcription in quiescent extracellular Elementary Bodies'],
    t3ss: ['Polarized needle-and-syringe injectisome complexes', 'Fires TARP & Inc effectors across host plasma and inclusion membranes'],
    tarP: ['Translocated Actin-Recruiting Phosphoprotein & F-actin bundles', 'Nucleates host cortical actin to drive EB invasion and vacuole support'],
    rb_om: ['Reduced, flexible Gram-negative outer membrane (~900 nm RB)', 'Expands as disulfides reduce so nutrients diffuse across MOMP porins'],
    rb_im: ['Cytoplasmic phospholipid bilayer of dividing Reticulate Bodies', 'Houses Npt1 and Npt2 nucleotide antiporters/importers'],
    septum: ['Transient ring-only peptidoglycan at the fission furrow', 'Resolves the chlamydial anomaly: division ring without a full cell wall'],
    mreb: ['Curved actin-like MreB protofilament patches', 'Substitutes for missing FtsZ to direct binary-fission constriction'],
    npt1: ['12-TMH obligate ATP / ADP antiporter (1 ATP in : 1 ADP+Pi out)', 'Steals charged host mitochondrial ATP directly across the membrane'],
    npt2: ['Proton-coupled GTP, CTP & UTP symporter', 'Imports ribonucleotides required for chlamydial RNA synthesis'],
    rb_dna: ['Decondensed 1.04 Mbp circular dsDNA chromosome (~895 genes)', 'Actively replicated and transcribed inside dividing Reticulate Bodies'],
    rnap: ['Multi-subunit α2ββ′σ66 chlamydial RNA polymerase', 'Transcribes early, mid-cycle RB growth and late Hc1/OmcB genes'],
    mrna: ['Nascent polycistronic chlamydial mRNA transcripts', 'Translated immediately on 70S bacterial polysomes'],
    ribosome: ['Bacterial 70S ribosomes (50S + 30S subunits)', 'Proves Chlamydia builds its own proteins despite stealing host ATP'],
    glycogen: ['Branched α-1,4 / α-1,6 glucan polysaccharide rosettes', 'Energy-rich luminal & cytoplasmic carbohydrate reserve'],
  };

  const REG = {};
  const reg = (k, m) => { const r = REG[k] ??= { mats: [], imp: [] }; (m.isShaderMaterial ? r.imp : r.mats).push(m); return m; };
  const protMat = (k, clip = true, extra = {}) => reg(k, phys({
    vertexColors: true, roughness: .42, metalness: .02, clearcoat: .24, clearcoatRoughness: .36, sheen: .34, sheenColor: '#fff5f7',
    normalMap: protBump, normalScale: new THREE.Vector2(.34, .34), side: THREE.DoubleSide, clippingPlanes: clip ? CUT : null, clipIntersection: true, ...extra,
  }));
  const sculpt = (k, parent = cell, clip = true, extra = {}) => makeSculptedMesh(protMat(k, clip, extra), parent);
  const molBatch = (k, geo, parent = cell, clip = true, extra = {}) => makeMolBatch(geo, protMat(k, clip, extra), parent);

  const shells = [], LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel', placed = 0;
  function shellMat(k, solid, gel, tint, o = {}) {
    const m = reg(k, phys({ color: solid, roughness: .18, clearcoat: .58, clearcoatRoughness: .22, sheen: .55, sheenColor: o.sheen ?? '#ffffff', ior: 1.35, thickness: o.thickness ?? .7, attenuationColor: tint, attenuationDistance: o.atten ?? 1.3, ...o.extra }));
    m.userData.cols = { solid: new THREE.Color(solid), gel: new THREE.Color(gel) }; shells.push(m); return m;
  }
  function applyLook() {
    const gel = organelleLook === 'gel', see = organelleLook === 'see-through';
    shells.forEach(m => {
      m.transmission = gel ? 1 : 0; m.transparent = see; m.opacity = see ? .44 : 1; m.depthWrite = !see;
      m.side = gel ? THREE.FrontSide : THREE.DoubleSide; m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid); m.needsUpdate = true;
    });
  }

  const impMats = [];
  function impostorMat(k, clip = true) {
    const m = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 1 }, uLight: { value: V(.4, .6, .7).normalize() }, uHi: { value: 0 }, uDim: { value: 1 } },
      vertexShader: `attribute float size; attribute vec3 icol; uniform float uScale; varying vec3 vCol;
        #include <clipping_planes_pars_vertex>
        void main(){ vCol=icol; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_PointSize=size*uScale/max(.01,-mvPosition.z); gl_Position=projectionMatrix*mvPosition;
          #include <clipping_planes_vertex>
        }`,
      fragmentShader: `uniform vec3 uLight; uniform float uHi,uDim; varying vec3 vCol;
        #include <clipping_planes_pars_fragment>
        void main(){
          #include <clipping_planes_fragment>
          vec2 q=gl_PointCoord*2.-1.; q.y=-q.y; float r2=dot(q,q); if(r2>1.) discard;
          vec3 n=vec3(q,sqrt(max(0.,1.-r2))), h=normalize(uLight+vec3(0.,0.,1.));
          vec3 c=vCol*(.26+.95*max(dot(n,uLight),0.))+pow(max(dot(n,h),0.),30.)*.22+vCol*pow(1.-n.z,3.)*.3;
          gl_FragColor=vec4(mix(c,c*1.7+.12,uHi),uDim);
        }`,
      clipping: clip, clippingPlanes: clip ? CUT : null, clipIntersection: true,
    });
    impMats.push(m); return reg(k, m);
  }
  function stickMat(k, clip = true) {
    const m = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 1 }, uLight: { value: V(.4, .6, .7).normalize() }, uHi: { value: 0 }, uDim: { value: 1 } },
      vertexShader: `attribute vec2 corner; attribute vec3 aA,aB,aC1,aC2; attribute float aR; uniform float uScale; varying vec3 vC1,vC2,vSide; varying vec2 vUV;
        #include <clipping_planes_pars_vertex>
        void main(){
          vec3 a=(modelViewMatrix*vec4(aA,1.)).xyz, b=(modelViewMatrix*vec4(aB,1.)).xyz, d=b-a, m=(a+b)*.5, side=cross(d,m);
          if(dot(side,side)<1e-16) side=cross(d,vec3(0.,1.,0.)); side=normalize(side);
          vec4 mvPosition=vec4(mix(a,b,corner.x)+side*max(aR,.6*-m.z/uScale)*corner.y,1.);
          vC1=aC1; vC2=aC2; vSide=side; vUV=corner; gl_Position=projectionMatrix*mvPosition;
          #include <clipping_planes_vertex>
        }`,
      fragmentShader: `uniform vec3 uLight; uniform float uHi,uDim; varying vec3 vC1,vC2,vSide; varying vec2 vUV;
        #include <clipping_planes_pars_fragment>
        void main(){
          #include <clipping_planes_fragment>
          float u=vUV.y; vec3 n=normalize(vSide*u+vec3(0.,0.,sqrt(max(0.,1.-u*u)))), h=normalize(uLight+vec3(0.,0.,1.));
          vec3 col=vUV.x<.5?vC1:vC2, c=col*(.26+.95*max(dot(n,uLight),0.))+pow(max(dot(n,h),0.),30.)*.22;
          gl_FragColor=vec4(mix(c,c*1.7+.12,uHi),uDim);
        }`,
      clipping: clip, clippingPlanes: clip ? CUT : null, clipIntersection: true, side: THREE.DoubleSide,
    });
    impMats.push(m); return reg(k, m);
  }

  const shade = (mesh, cast = true, receive = true) => { mesh.castShadow = cast; mesh.receiveShadow = receive; return mesh; };
  const grown = a => { const b = new Float32Array(a.length * 2); b.set(a); return b; };
  function balls(k, parent = cell, clip = true) {
    let n = 0, cap = 1 << 13, pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 12, A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap), C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
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
          g.setAttribute('position', new THREE.BufferAttribute(pos.slice(0, n * 3), 3)); g.setAttribute('size', new THREE.BufferAttribute(sz.slice(0, n), 1)); g.setAttribute('icol', new THREE.BufferAttribute(cl.slice(0, n * 3), 3));
          const pts = new THREE.Points(g, impostorMat(k, clip)); pts.frustumCulled = false; parent.add(pts);
        }
        if (m) {
          const sg = new THREE.InstancedBufferGeometry(); sg.setIndex([0, 1, 2, 2, 1, 3]);
          sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3)); sg.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 0, 1, 1, 1]), 2));
          [['aA', A, 3], ['aB', B, 3], ['aR', R, 1], ['aC1', C1, 3], ['aC2', C2, 3]].forEach(([nm, arr, d]) => sg.setAttribute(nm, new THREE.InstancedBufferAttribute(arr.slice(0, m * d), d)));
          sg.instanceCount = m; const rods = new THREE.Mesh(sg, stickMat(k, clip)); rods.frustumCulled = false; parent.add(rods);
        }
        return n + m;
      },
    };
  }

  // Coarse-grained synthetic cryo-EM surface generator (1 unit = 100 nm -> NM = 0.018 for crisp visibility)
  const NM = .018, DNA_NM = .056;
  function synthGeo(beads, colors, maxDim = 30, scale = 1) {
    const n = beads.length, xyz = new Int16Array(n * 3), kind = new Uint8Array(n), rad = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const [x, y, z, r = 1.8, grp = 0] = beads[i];
      xyz[i * 3] = Math.round(x * 100); xyz[i * 3 + 1] = Math.round(y * 100); xyz[i * 3 + 2] = Math.round(z * 100);
      kind[i] = (grp << 2); rad[i] = Math.max(5, Math.min(255, Math.round(r / .062)));
    }
    const cols = colors.map(col);
    return buildPdbSurfaceGeo({ n, xyz, kind, rad }, { nm: NM, scale, maxDim, colorFn: g => cols[g % cols.length] });
  }
  const qOut = (n, twist = 0) => {
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), n.clone().normalize());
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };

  const caps = new THREE.Group(); cell.add(caps);
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));

  // Inclusion vacuole (~1.50 um diameter, R_INC = 7.5), Hero Cutaway EB (~300 nm, R_EB = 1.50 at y = 4.35),
  // and Hero Cutaway Dividing RB (~900 nm dumbbell centered at y = -1.75)
  const R_INC = 7.5, Y_EB1 = 4.35, R_EB = 1.50, Y_RB_MID = -1.75, H_RB_HALF = 3.85;
  function incR(dir, dep = 0) {
    const d = dir.clone().normalize();
    const w = 1 + .028 * Math.sin(d.x * 3.4 + d.y * 2.7) * Math.cos(d.z * 3.1 - .5) + .016 * Math.sin(d.y * 5.4 + .8);
    return Math.max(.5, R_INC * w - dep);
  }
  const incPt = (dir, dep = 0) => { const d = dir.clone().normalize(); return d.multiplyScalar(incR(d, dep)); };
  const eb1Pt = (dir, dep = 0) => { const d = dir.clone().normalize(); return d.multiplyScalar(Math.max(.2, R_EB - dep)).add(V(0, Y_EB1, 0)); };
  function rbProfile(theta) {
    const pinch = 1 - .45 * Math.exp(-Math.pow((theta - Math.PI * .5) / .38, 2));
    return { r: 3.15 * Math.sin(theta) * pinch, y: Y_RB_MID - H_RB_HALF * Math.cos(theta) };
  }
  function rbSurf(u, phi, dep = 0) {
    const th = Math.max(.001, Math.min(Math.PI - .001, u * Math.PI)), ca = Math.cos(phi), sa = Math.sin(phi);
    const cur = rbProfile(th), p0 = rbProfile(Math.max(0, th - .004)), p1 = rbProfile(Math.min(Math.PI, th + .004));
    const dr = p1.r - p0.r, dy = p1.y - p0.y, inv = 1 / Math.max(1e-6, Math.hypot(dy, dr));
    const nrm = V(dy * inv * ca, -dr * inv, dy * inv * sa).normalize();
    return { p: V(cur.r * ca - nrm.x * dep, cur.y - nrm.y * dep, cur.r * sa - nrm.z * dep), n: nrm };
  }
  function makeSphereFnGeo(ptFn, dep = 0, segU = 76, segV = 58) {
    const g = new THREE.SphereGeometry(1, segU, segV), p = g.attributes.position, v = V();
    for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i).normalize(); const q = ptFn(v, dep); p.setXYZ(i, q.x, q.y, q.z); }
    g.computeVertexNormals(); return g;
  }
  function makeRbGeo(dep = 0, segU = 84, segPhi = 64) {
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= segU; j++) {
      const u = j / segU;
      for (let i = 0; i <= segPhi; i++) {
        const { p } = rbSurf(u, (i / segPhi) * Math.PI * 2, dep);
        pos.push(p.x, p.y, p.z); uv.push((i / segPhi) * 4, u * 4);
      }
    }
    for (let j = 0; j < segU; j++) for (let i = 0; i < segPhi; i++) {
      const a = j * (segPhi + 1) + i, b = a + segPhi + 1; idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals(); return g;
  }
  function capStripFromOutline(k, axis, outlineFn, layers, n = 150) {
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
    return new THREE.Mesh(g, reg(k, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .38, metalness: .04, side: THREE.DoubleSide })));
  }

  function buildInclusionAndHost() {
    const incMat = shellMat('inclusion', '#7062e0', '#b4acff', '#423699', {
      atten: 1.7, thickness: .52, sheen: '#e5e0ff',
      extra: { clearcoat: .38, clearcoatRoughness: .28, envMapIntensity: .52, normalMap: bump(18, 18), normalScale: new THREE.Vector2(.30, .30) },
    });
    cell.add(shade(new THREE.Mesh(makeSphereFnGeo(incPt, 0), incMat), true, true));
    cell.add(new THREE.Mesh(makeSphereFnGeo(incPt, .28, 60, 46), reg('inclusion', phys({
      color: '#322970', roughness: .78, normalMap: bump(16, 16), normalScale: new THREE.Vector2(.2, .2), side: THREE.BackSide,
    }))));

    const incOutline = (axis, dep, t) => { const a = (t - .5) * Math.PI, ca = Math.cos(a), sa = Math.sin(a); return incPt(axis === 'x' ? V(0, sa, ca) : V(ca, sa, 0), dep); };
    for (const ax of ['x', 'z']) caps.add(capStripFromOutline('inclusion', ax, incOutline, [[0, .065, '#beb7ff'], [.065, .155, '#ede8ff'], [.155, .230, '#d5cdf8'], [.230, .285, '#968af0']], 170));
    SITES.inclusion.push(V(-7.4, 1.2, -.3), V(-.3, 1.8, 7.4), V(-5.2, -2.1, 4.9));

    // Helical bi-lobed Inc shield proteins (IncA / IncD / IncG) studding the inclusion vacuole membrane
    const geoInc = synthGeo([[-1.4, -1.8, 0, 1.7, 0], [1.4, -1.8, 0, 1.7, 0], [-1.8, 2.2, .4, 1.9, 1], [1.8, 2.2, -.4, 1.9, 1], [0, 4.8, 0, 2.0, 0]], ['#ff9ff3', '#f368e0'], 26, 1.45);
    const I_INC = molBatch('inc', geoInc, cell, true);
    for (let i = 0; i < 64; i++) {
      const y = 1 - 2 * ((i + .5) / 64), r = Math.sqrt(Math.max(0, 1 - y * y)), phi = i * 2.3999632;
      const d = V(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize(), p = incPt(d, .04);
      if (p.x > .1 && p.z > .1) continue;
      I_INC.add(p, qOut(d, i * .8), 1); placed++;
      if (SITES.inc.length < 30) SITES.inc.push(p.clone().addScaledVector(d, .28));
    }
    I_INC.done();

    // Surrounding host cytoplasm: trans-Golgi cisterna stack + 2 recruited host mitochondria + cytoskeletal cage
    const S_HOST = sculpt('host_cyto', cell, false);
    const cGolgi1 = col('#cf6a87'), cGolgi2 = col('#e68aa3'), cMitoO = col('#d96b78'), cMitoI = col('#ffad94'), cAct = col('#8c7ae6');
    const golgiCenter = V(-7.9, 4.7, -5.2), gDir = golgiCenter.clone().negate().normalize();
    for (let c = 0; c < 4; c++) {
      const gc = golgiCenter.clone().addScaledVector(gDir, c * .52), u1 = across(UP, gDir), u2 = gDir.clone().cross(u1).normalize(), cPts = [];
      for (let k = -6; k <= 6; k++) { const s = k / 6; cPts.push(gc.clone().addScaledVector(u2, s * 2.15).addScaledVector(gDir, -.38 * s * s)); }
      S_HOST.tube(cPts, .17, .17, c % 2 ? cGolgi1 : cGolgi2, cGolgi2, 10, true);
    }

    [[V(-6.35, -2.45, 6.25), V(.58, .35, .73).normalize()], [V(-6.25, -2.15, -6.35), V(.65, .28, -.70).normalize()]].forEach(([mc, mAx]) => {
      S_HOST.tube([mc.clone().addScaledVector(mAx, -1.35), mc, mc.clone().addScaledVector(mAx, 1.35)], .92, .88, cMitoO, cGolgi1, 14, true);
      for (let cr = -3; cr <= 3; cr++) S_HOST.lobe(mc.clone().addScaledVector(mAx, cr * .36), .68, .10, .68, cMitoI, qOut(mAx, cr * .4));
      SITES.host_cyto.push(mc.clone());
    });
    SITES.host_cyto.push(golgiCenter.clone());

    for (let f = 0; f < 16; f++) {
      const phi0 = .55 * Math.PI + (f / 15) * 1.35 * Math.PI, fPts = [];
      for (let k = 0; k <= 14; k++) {
        const th = .18 * Math.PI + (k / 14) * .64 * Math.PI, ph = phi0 + .28 * Math.sin(k * .45);
        fPts.push(incPt(V(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)), -.42));
      }
      S_HOST.tube(fPts, .052, .052, cAct, cGolgi2, 7, true);
    }
    S_HOST.done();

    // Intercepted host Golgi sphingomyelin & cholesterol vesicles trafficking & fusing into the inclusion
    const S_GLIP = sculpt('golgi_lip', cell, false), cLip1 = col('#fd9644'), cLip2 = col('#fed330');
    [V(-6.9, 4.1, -4.5), V(-6.1, 3.6, -3.9), V(-5.45, 3.25, -3.45), V(-6.8, 2.2, -4.9), V(-5.1, 4.8, -3.8), V(-3.8, 6.5, -2.6), V(-2.2, 6.2, 4.4), V(-6.4, .4, 4.2)].forEach((vp, i) => {
      const r = i === 2 ? .32 : rr(.28, .42);
      S_GLIP.lobe(vp, r, r * .94, r, i % 2 ? cLip1 : cLip2); S_GLIP.ring(vp, vp.clone().normalize(), r * 1.02, .045, cLip2, 18, 6);
      SITES.golgi_lip.push(vp.clone());
    });
    S_GLIP.done();
  }

  function buildElementaryBodies() {
    // Hero Cutaway EB #1 (centered on y = 4.35 so CUT cleanly exposes its condensed Hc1/Hc2 nucleoid!) + 2 intact luminal EBs
    const ebMat = shellMat('eb_om', '#218c74', '#55efc4', '#135446', {
      atten: 1.2, thickness: .36, sheen: '#b8ffea',
      extra: { roughness: .22, clearcoat: .48, normalMap: bump(10, 10), normalScale: new THREE.Vector2(.28, .28) },
    });
    cell.add(shade(new THREE.Mesh(makeSphereFnGeo(eb1Pt, 0, 52, 40), ebMat), true, true));
    cell.add(new THREE.Mesh(makeSphereFnGeo(eb1Pt, .18, 44, 34), reg('eb_om', phys({ color: '#144d43', roughness: .7, side: THREE.BackSide }))));

    const ebOutline = (axis, dep, t) => { const a = (t - .5) * Math.PI, ca = Math.cos(a), sa = Math.sin(a); return eb1Pt(axis === 'x' ? V(0, sa, ca) : V(ca, sa, 0), dep); };
    for (const ax of ['x', 'z']) caps.add(capStripFromOutline('eb_om', ax, ebOutline, [[0, .06, '#58e6c8'], [.06, .13, '#ffeaa7'], [.13, .19, '#38ada9']], 84));

    const intactEbs = [V(-3.35, 4.25, 4.15), V(-4.75, 2.05, -3.35)];
    intactEbs.forEach(ec => {
      const g = new THREE.SphereGeometry(1.38, 36, 28); g.translate(ec.x, ec.y, ec.z);
      cell.add(shade(new THREE.Mesh(g, reg('eb_om', phys({ color: '#38ada9', roughness: .28, clearcoat: .42, clippingPlanes: null }))), true, true));
      SITES.eb_om.push(ec.clone().add(V(0, 1.38, 0)));
    });
    SITES.eb_om.unshift(V(-1.35, Y_EB1 + .35, -.25));

    // Trimeric MOMP beta-barrel porins studding EB outer membranes
    const geoMomp = synthGeo([[-1.5, 0, -.9, 1.8, 0], [1.5, 0, -.9, 1.8, 1], [0, 0, 1.7, 1.8, 2], [0, 1.4, 0, 1.5, 0]], ['#78e08f', '#38ada9', '#b8e994'], 24, 1.15);
    const I_MOMP = molBatch('momp', geoMomp, cell, true);
    for (let i = 0; i < 42; i++) {
      const y = 1 - 2 * ((i + .5) / 42), r = Math.sqrt(Math.max(0, 1 - y * y)), phi = i * 2.3999632;
      const d = V(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize(), p = eb1Pt(d, .02);
      if (p.x > .05 && p.z > .05) continue;
      I_MOMP.add(p, qOut(d, i), 1); placed++;
      if (SITES.momp.length < 20) SITES.momp.push(p.clone());
    }
    intactEbs.forEach(ec => {
      for (let i = 0; i < 22; i++) {
        const y = 1 - 2 * ((i + .5) / 22), r = Math.sqrt(Math.max(0, 1 - y * y)), phi = i * 2.3999632 + .5, d = V(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize();
        I_MOMP.add(ec.clone().addScaledVector(d, 1.36), qOut(d, i), .95); placed++;
      }
    });
    I_MOMP.done();

    // Hc1 / Hc2 histone-condensed toroidal dsDNA nucleoid inside Hero Cutaway EB #1
    const B_EBDNA = balls('eb_dna', cell, false), S_EBDNA = sculpt('eb_dna', cell, false), cHc1 = col('#60a3bc'), cHc2 = col('#82ccdd');
    for (let ring = 0; ring < 4; ring++) {
      const yOff = Y_EB1 - .55 + ring * .36, rTor = .78 - Math.abs(ring - 1.5) * .12, ctrl = [];
      for (let k = 0; k <= 16; k++) { const a = .55 * Math.PI + (k / 16) * 1.42 * Math.PI; ctrl.push(V(Math.cos(a) * rTor, yOff + .12 * Math.sin(k * 1.3), Math.sin(a) * rTor)); }
      const pts = new THREE.CatmullRomCurve3(ctrl).getSpacedPoints(85);
      dna.emitDNA(B_EBDNA, pts, { nm: DNA_NM * .92 });
      for (let h = 8; h < pts.length; h += 14) { S_EBDNA.lobe(pts[h], .14, .11, .14, h % 2 ? cHc1 : cHc2); placed++; }
    }
    SITES.eb_dna.push(V(-.55, Y_EB1, -.55));
    B_EBDNA.done(); S_EBDNA.done();

    // Polarized Type III Secretion System (T3SS) injectisome needles piercing the inclusion + injected TARP actin bundles
    const S_T3 = sculpt('t3ss', cell, false), S_TARP = sculpt('tarP', cell, false);
    const cT3Base = col('#ff6b8b'), cT3Needle = col('#ff9eb5'), cTarp1 = col('#f8a5c2'), cTarp2 = col('#ffd1dc');
    const fireT3Cluster = (ebCenter, ebRad, outDir) => {
      const u1 = across(UP, outDir), u2 = outDir.clone().cross(u1).normalize();
      for (let k = 0; k < 5; k++) {
        const a = k * 1.2566, off = u1.clone().multiplyScalar(Math.cos(a) * .38).addScaledVector(u2, Math.sin(a) * .38);
        const base = ebCenter.clone().addScaledVector(outDir, ebRad - .12).add(off.clone().multiplyScalar(.55));
        const tip = incPt(base.clone().addScaledVector(outDir, 1.8).normalize(), -.35).add(off.clone().multiplyScalar(.3));
        S_T3.ring(base, outDir, .13, .042, cT3Base, 16, 6); S_T3.ring(tip.clone().addScaledVector(outDir, -.28), outDir, .11, .038, cT3Base, 16, 6);
        S_T3.tube([base, tip], .038, .026, cT3Base, cT3Needle, 8, true); placed++;
        SITES.t3ss.push(base.clone().lerp(tip, .55));
        const actEnd1 = tip.clone().addScaledVector(outDir, 1.35).addScaledVector(u1, (k - 2) * .45);
        const actEnd2 = actEnd1.clone().addScaledVector(outDir, .75).addScaledVector(u2, .55 * Math.cos(k));
        S_TARP.lobe(tip.clone().addScaledVector(outDir, .14), .12, .09, .12, cTarp1);
        S_TARP.tube([tip, actEnd1, actEnd2], .042, .024, cTarp1, cTarp2, 7, true);
        SITES.tarP.push(actEnd1.clone());
      }
    };
    fireT3Cluster(V(-.18, Y_EB1, -.18), R_EB, V(-.18, 1, -.18).normalize());
    fireT3Cluster(intactEbs[0], 1.38, intactEbs[0].clone().normalize());
    S_T3.done(); S_TARP.done();
  }

  function buildReticulateBodiesAndEnergyTheft() {
    // Hero Dividing RB #1 (~900 nm bilobed dumbbell): Outer Membrane (rb_om) + Inner Membrane (rb_im)
    const rbomMat = shellMat('rb_om', '#c96f55', '#f6b192', '#7a3322', { atten: 1.4, thickness: .42, sheen: '#ffd9c7', extra: { clearcoat: .36, normalMap: bump(14, 16), normalScale: new THREE.Vector2(.28, .28) } });
    const rbimMat = shellMat('rb_im', '#cfa04c', '#fae09e', '#7d5a1c', { atten: 1.3, thickness: .36, sheen: '#fff0c4', extra: { clearcoat: .30, normalMap: bump(12, 14), normalScale: new THREE.Vector2(.24, .24) } });
    cell.add(shade(new THREE.Mesh(makeRbGeo(0), rbomMat), true, true));
    cell.add(shade(new THREE.Mesh(makeRbGeo(.22, 72, 54), rbimMat), false, true));

    const rbOutline = (axis, dep, t) => rbSurf(t, axis === 'x' ? Math.PI * .5 : 0, dep).p;
    for (const ax of ['x', 'z']) {
      caps.add(capStripFromOutline('rb_om', ax, rbOutline, [[0, .09, '#f3a683'], [.09, .17, '#ffd9b8']], 140));
      caps.add(capStripFromOutline('rb_im', ax, rbOutline, [[.17, .26, '#f7d794'], [.26, .33, '#e6b460']], 140));
    }

    // Peripheral RB #2 pressed directly against the inclusion wall opposite the recruited host mitochondrion
    const rb2C = V(-3.85, -1.95, 3.65), R_RB2 = 1.92;
    const gRb2Om = new THREE.SphereGeometry(R_RB2, 42, 32); gRb2Om.translate(rb2C.x, rb2C.y, rb2C.z);
    const gRb2Im = new THREE.SphereGeometry(R_RB2 - .18, 36, 28); gRb2Im.translate(rb2C.x, rb2C.y, rb2C.z);
    cell.add(shade(new THREE.Mesh(gRb2Om, rbomMat), true, true)); cell.add(new THREE.Mesh(gRb2Im, rbimMat));
    SITES.rb_om.push(V(-2.45, -.15, -.15), rb2C.clone().add(V(0, R_RB2, 0)));
    SITES.rb_im.push(V(-2.22, -.65, -.15), rb2C.clone().add(V(0, R_RB2 - .2, 0)));

    // Transient Septal Peptidoglycan Ring ("chlamydial anomaly") + MreB actin-like scaffold at binary-fission furrow
    const S_SEP = sculpt('septum', cell, true), S_MREB = sculpt('mreb', cell, true), rWaist = rbProfile(Math.PI * .5).r;
    S_SEP.ring(V(0, Y_RB_MID, 0), UP, rWaist - .11, .095, col('#ffd15c'), 48, 10);
    S_SEP.ring(V(0, Y_RB_MID + .16, 0), UP, rWaist - .09, .055, col('#ffeaa7'), 44, 8);
    S_SEP.ring(V(0, Y_RB_MID - .16, 0), UP, rWaist - .09, .055, col('#ffeaa7'), 44, 8);
    SITES.septum.push(V(-(rWaist - .1), Y_RB_MID, -.15), V(-.15, Y_RB_MID, -(rWaist - .1)));

    const cMreb1 = col('#ff7675'), cMreb2 = col('#fab1a0');
    for (let arc = 0; arc < 6; arc++) {
      const yOff = Y_RB_MID + (arc - 2.5) * .13, mPts = [], aStart = .52 * Math.PI + (arc % 2) * .18;
      for (let k = 0; k <= 20; k++) { const a = aStart + (k / 20) * 1.38 * Math.PI, rM = rWaist - .31; mPts.push(V(Math.cos(a) * rM, yOff + .05 * Math.sin(k * .8), Math.sin(a) * rM)); }
      S_MREB.tube(mPts, .048, .048, arc % 2 ? cMreb1 : cMreb2, cMreb1, 8, true); placed++;
    }
    SITES.mreb.push(V(-(rWaist - .32), Y_RB_MID, -.22));
    S_SEP.done(); S_MREB.done();

    // Npt1 ATP/ADP translocase antiporters & Npt2 proton-coupled NTP importers
    const geoNpt1 = synthGeo([[-1.4, 0, 0, 2.0, 0], [1.4, 0, 0, 2.0, 1], [0, 1.8, .6, 1.6, 0], [0, -1.8, -.6, 1.6, 1]], ['#feca57', '#ff9f43'], 24, 1.32);
    const geoNpt2 = synthGeo([[-1.3, 0, 0, 1.9, 0], [1.3, 0, 0, 1.9, 1], [0, 1.6, 0, 1.6, 0]], ['#54a0ff', '#00d2d3'], 24, 1.25);
    const I_NPT1 = molBatch('npt1', geoNpt1, cell, true), I_NPT2 = molBatch('npt2', geoNpt2, cell, true);
    for (let i = 0; i < 34; i++) {
      const u = .14 + .72 * ((i + .5) / 34), phi = i * 2.3999632 + .4, { p, n } = rbSurf(u, phi, .11);
      if (p.x > .05 && p.z > .05) continue;
      if (i % 3 === 2) { I_NPT2.add(p, qOut(n, i), 1); SITES.npt2.push(p.clone()); }
      else { I_NPT1.add(p, qOut(n, i), 1); SITES.npt1.push(p.clone()); }
      placed++;
    }
    for (let i = 0; i < 18; i++) {
      const y = -.65 + 1.3 * ((i + .5) / 18), phi = 1.65 + (i % 6) * .28, r = Math.sqrt(Math.max(0, 1 - y * y));
      const d = V(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize(), p = rb2C.clone().addScaledVector(d, R_RB2 - .08);
      if (i % 3 === 0) { I_NPT2.add(p, qOut(d, i), 1.08); SITES.npt2.unshift(p.clone()); }
      else { I_NPT1.add(p, qOut(d, i), 1.12); SITES.npt1.unshift(p.clone()); }
      placed++;
    }
    I_NPT1.done(); I_NPT2.done();

    // Relaxed 1.04 Mbp RB circular dsDNA + RNAP + mRNA + 70S Ribosomes + Glycogen rosettes
    const B_RBDNA = balls('rb_dna', cell, false), B_MRNA = balls('mrna', cell, false);
    for (let L = 0; L < 9; L++) {
      const y0 = -4.55 + (L / 8) * 5.65, a0 = L * 1.7 + .8, ctrl = [];
      for (let k = 0; k <= 10; k++) {
        const t = k / 10, yk = y0 + Math.sin(t * Math.PI * 2) * .48;
        const uRb = Math.max(.08, Math.min(.92, (yk - (Y_RB_MID - H_RB_HALF)) / (2 * H_RB_HALF))), rLim = Math.max(.45, rbProfile(uRb * Math.PI).r - .62);
        let rx = Math.cos(a0 + t * 2.4) * rLim * (.32 + .58 * Math.sin(t * Math.PI)), rz = Math.sin(a0 + t * 2.4) * rLim * (.32 + .58 * Math.sin(t * Math.PI));
        if (rx > -.12 && rz > -.12) rx = -Math.abs(rx) - .2;
        ctrl.push(V(rx, yk, rz));
      }
      const pts = new THREE.CatmullRomCurve3(ctrl).getSpacedPoints(105);
      dna.emitDNA(B_RBDNA, pts, { nm: DNA_NM }); SITES.rb_dna.push(pts[50].clone());
    }

    const geoRnap = synthGeo([[-1.8, 0, 0, 2.3, 0], [1.8, .4, 0, 2.2, 1], [0, 2.0, 1.1, 1.9, 2]], ['#e056fd', '#be2edd', '#f368e0'], 26, 1.32);
    const I_RNAP = molBatch('rnap', geoRnap, cell, false), polyRibos = [];
    [V(-1.15, .35, -.85), V(-.75, .95, -1.35), V(-1.35, -3.15, -.75), V(-.65, -3.85, -1.25), V(-1.05, -1.65, -.85), V(-3.65, -1.85, 3.25)].forEach((rp, idx) => {
      I_RNAP.add(rp, qOut(V(.2, 1, -.3).normalize(), idx * 1.2), 1); placed++; SITES.rnap.push(rp.clone());
      const mPts = [];
      for (let k = 0; k < 28; k++) { const q = rp.clone().add(V(-.042 * k + .07 * Math.sin(k * .4 + idx), .03 * k, -.035 * k)); mPts.push(q); if (k === 10 || k === 20) polyRibos.push(q.clone()); }
      rna.rnaAlong(B_MRNA, mPts, MRNA, DNA_NM); SITES.mrna.push(mPts[14].clone());
    });
    I_RNAP.done(); B_RBDNA.done(); B_MRNA.done();

    const geoRibo = synthGeo([[0, -1.3, 0, 3.1, 0], [-2.5, -.5, .7, 2.1, 0], [2.6, -.4, -.6, 2.0, 0], [.4, 2.2, 1.0, 2.5, 1], [-1.9, 2.3, .7, 1.9, 1], [0, .4, -.8, 1.9, 2]], ['#ffeaa7', '#fdcb6e', '#fab1a0'], 28, 1.18);
    const I_RIBO = molBatch('ribosome', geoRibo, cell, true);
    polyRibos.forEach((p, i) => { I_RIBO.add(p, qOut(randDir(), i), 1); placed++; SITES.ribosome.push(p.clone()); });
    for (let i = 0; i < 120; i++) {
      const u = rr(.12, .88), r = Math.max(.35, rbProfile(u * Math.PI).r - .52) * Math.sqrt(rr(.15, 1)), phi = rr(0, Math.PI * 2);
      const p = V(Math.cos(phi) * r, rbProfile(u * Math.PI).y, Math.sin(phi) * r);
      if (p.x > -.15 && p.z > -.15) continue;
      I_RIBO.add(p, qOut(randDir(), i * .8), rr(.92, 1.06)); placed++;
      if (SITES.ribosome.length < 40) SITES.ribosome.push(p.clone());
    }
    for (let i = 0; i < 28; i++) { I_RIBO.add(rb2C.clone().addScaledVector(randDir(), rr(.3, R_RB2 - .45)), qOut(randDir(), i), .96); placed++; }
    I_RIBO.done();

    const S_GLYC = sculpt('glycogen', cell, false), cGly1 = col('#b8e994'), cGly2 = col('#78e08f');
    [V(-3.4, 1.35, -3.1), V(-2.7, -4.9, -2.6), V(-4.9, .55, 1.4), V(2.1, 1.75, -3.7), V(-1.8, 2.45, -4.4), V(-1.55, -2.95, -1.35), V(-1.45, .15, -1.45)].forEach((gc, idx) => {
      S_GLYC.lobe(gc, .20, .20, .20, cGly1);
      for (let b = 0; b < 14; b++) {
        const y = 1 - 2 * ((b + .5) / 14), r = Math.sqrt(Math.max(0, 1 - y * y)), phi = b * 2.3999632 + idx;
        S_GLYC.lobe(gc.clone().addScaledVector(V(Math.cos(phi) * r, y, Math.sin(phi) * r), .24), .11, .11, .11, b % 2 ? cGly1 : cGly2);
      }
      SITES.glycogen.push(gc.clone());
    });
    S_GLYC.done();
  }

  const MOL = {
    atp: ['Host ATP stolen inward', '#ffd15c', 'blob', .24],
    adp: ['Spent ADP + Pi exported', '#ff7675', 'hex', .21],
    ntp: ['GTP / CTP / UTP import', '#54a0ff', 'hex', .22],
    lipid: ['Golgi sphingomyelin', '#fd9644', 'wave', .23],
  };
  function glyph(g, kind, x, y, s, hex) {
    const c = x + s / 2, m = y + s / 2, r = s * .38;
    g.save(); g.fillStyle = hex; g.strokeStyle = '#101522'; g.lineWidth = s * .08; g.lineJoin = g.lineCap = 'round';
    const dot = (px, py, rad) => { g.beginPath(); g.arc(px, py, rad, 0, 6.283); g.fill(); g.stroke(); };
    if (kind === 'hex') { g.beginPath(); for (let k = 0; k < 6; k++) { const a = k * 1.0472 - .5236; g[k ? 'lineTo' : 'moveTo'](c + Math.cos(a) * r, m + Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke(); }
    else if (kind === 'blob') { dot(c - r * .32, m + r * .18, r * .5); dot(c + r * .34, m + r * .16, r * .46); dot(c, m - r * .26, r * .52); }
    else if (kind === 'wave') {
      g.beginPath(); for (let k = 0; k <= 24; k++) { const t = k / 24; g[k ? 'lineTo' : 'moveTo'](c - r + 2 * r * t, m + Math.sin(t * 9.42) * r * .42); }
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

  const FLOW_MAX = 340;
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
  let flowsOn = true, flowSpeed = 1, fClock = 0, molHi = null, hi = null;
  function emitFlow(type, pts, tags, dur = 3.2) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop(), curve = new THREE.CatmullRomCurve3(pts), c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b; fKind[i] = ATLAS.idx[type];
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: .045 });
  }
  const pickSite = (k, fb) => SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();
  const STREAM_TIMERS = [
    { rate: 2.2, acc: .3, go: () => { const mito = SITES.host_cyto[Math.floor(rand() * 2)]?.clone() ?? V(-6.3, -2.3, 6.2), npt = pickSite('npt1', V(-3.2, -1.9, 2.4)), dst = pickSite('ribosome', V(-1.2, -1.5, -.9)); emitFlow('atp', [mito, mito.clone().lerp(npt, .48), npt, dst], ['host_cyto', 'inclusion', 'npt1', 'rb_im', 'ribosome'], 3.2); } },
    { rate: 1.9, acc: .7, go: () => { const src = pickSite('ribosome', V(-1.3, -2.0, -1.0)), npt = pickSite('npt1', V(-3.2, -1.9, 2.4)), mito = SITES.host_cyto[Math.floor(rand() * 2)]?.clone() ?? V(-6.3, -2.3, -6.3); emitFlow('adp', [src, npt, mito], ['ribosome', 'npt1', 'inclusion', 'host_cyto'], 3.0); } },
    { rate: 1.5, acc: .4, go: () => { const npt2 = pickSite('npt2', V(-2.2, -.8, -1.2)), rnap = pickSite('rnap', V(-1.1, .3, -.8)); emitFlow('ntp', [npt2.clone().multiplyScalar(1.45), npt2, rnap], ['host_cyto', 'npt2', 'rnap', 'rb_dna', 'mrna'], 3.0); } },
    { rate: 1.4, acc: .2, go: () => { emitFlow('lipid', [V(-7.8, 4.6, -5.1), SITES.golgi_lip[1]?.clone() ?? V(-6.1, 3.6, -3.9), pickSite('rb_om', V(-2.4, -.2, -.2))], ['host_cyto', 'golgi_lip', 'inclusion', 'inc', 'rb_om'], 3.5); } },
  ];
  function updateFlows(dt) {
    fClock += dt;
    if (dt > 0) STREAM_TIMERS.forEach(s => { s.acc += dt * s.rate; while (s.acc >= 1) { s.acc--; s.go(); } });
    const w = fClock, q = V(), anyHi = molHi || hi;
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k], base = MOL[p.type][3] * 2.35;
      p.t += dt / p.dur;
      if (p.t >= 1) { live[k] = live[live.length - 1]; live.pop(); free.push(p.i); fSize[p.i] = 0; continue; }
      p.curve.getPointAt(p.t, q);
      const a = p.wob * Math.sin(Math.PI * p.t);
      q.x += a * Math.sin(w * 5.1 + p.ph); q.y += a * Math.cos(w * 4.3 + p.ph); q.z += a * Math.sin(w * 4.7 + p.ph * 1.7);
      const s = base * Math.min(1, p.t / .1, (1 - p.t) / .1), lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = s * (anyHi ? (lit ? 1.45 : .55) : 1); fFade[p.i] = anyHi && !lit ? .25 : 1;
    }
    flowGeo.attributes.position.needsUpdate = flowGeo.attributes.size.needsUpdate = flowGeo.attributes.fade.needsUpdate = true;
  }

  const composer = new EffectComposer(renderer);
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .26, .52, .86);
  const lens = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(innerWidth, innerHeight) }, uTime: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; varying vec2 vUv;
      float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 d = vUv - .5; float r2 = dot(d, d); vec2 o = d * r2 * .01;
        vec3 c = vec3(texture2D(tDiffuse, vUv + o).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - o).b);
        c *= mix(1., .52, smoothstep(.1, .62, r2 * 2.)); c += (h(vUv * uRes + fract(uTime) * 91.7) - .5) * .03;
        gl_FragColor = vec4(c, 1.);
      }`,
  });
  composer.addPass(new RenderPass(scene, camera)); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(lens);

  function resize() {
    renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); bloom.resolution.set(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); lens.uniforms.uRes.value.set(innerWidth, innerHeight);
    const s = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan(camera.fov * Math.PI / 360));
    impMats.forEach(m => { m.uniforms.uScale.value = s; });
    controls.maxDistance = 105 * Math.max(1, 1.45 / camera.aspect);
  }
  addEventListener('resize', resize);

  const legend = document.getElementById('legend');
  PARTS.forEach(([k, name, hex]) => {
    const it = document.createElement('div'); it.className = 'it'; const sw = document.createElement('span'); sw.className = 'sw'; sw.style.background = hex;
    const t = document.createElement('span'); t.textContent = name; it.append(sw, t); legend.append(it);
    it.onmouseenter = () => setHi(k); it.onmouseleave = () => setHi(null);
  });
  const keyEl = document.createElement('div'); keyEl.className = 'key';
  keyEl.innerHTML = `<div class="row">DNA / RNA ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>`
    + `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>1.04 Mbp dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>mRNA</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip'), TIP0 = 'Inside its Inc-shielded inclusion vacuole, 300 nm Elementary Bodies (EBs) with T3SS needles differentiate into 900 nm Reticulate Bodies (RBs) that divide via MreB septal rings and steal host ATP through Npt1 antiporters.';
  tipBox.textContent = TIP0;
  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div'); it.className = 'mol'; const cv = document.createElement('canvas'); cv.width = cv.height = 44; glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
    const t = document.createElement('span'); t.textContent = name; it.append(cv, t); document.getElementById('mols').append(it);
    it.onmouseenter = () => { molHi = k; }; it.onmouseleave = () => { molHi = null; };
  });

  function showInfo(k) {
    const inf = k && INFO[k]; tipBox.replaceChildren();
    if (!inf) { tipBox.textContent = TIP0; return; }
    const b = document.createElement('b'); b.textContent = PARTS.find(p => p[0] === k)?.[1] ?? k;
    tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Role: ${inf[1]}`);
  }
  function setHi(k) {
    if (hi && REG[hi]) { REG[hi].mats.forEach(m => { m.emissive.copy(m.userData.e0); m.emissiveIntensity = m.userData.i0; }); REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; }); }
    hi = k && REG[k] ? k : null;
    if (hi) REG[hi].mats.forEach(m => { m.userData.e0 ??= m.emissive.clone(); m.userData.i0 ??= m.emissiveIntensity; });
    showInfo(hi);
  }
  const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#9fd8ff');

  const VIEWS = [
    ['inclusion', V(27.5, 4.2, 30.5), V(0, -.2, 0)],
    ['eb', V(8.8, 6.2, 9.8), V(-.2, 4.55, -.2)],
    ['rb', V(11.6, -.8, 12.6), V(-.4, -1.75, -.4)],
    ['npt1', V(8.5, -1.6, 13.8), V(-4.35, -2.05, 4.15)],
  ];
  let view = 0, curView = 'inclusion', motion = true, sway = 0, last = performance.now();

  document.getElementById('view').onclick = e => { view = (view + 1) % VIEWS.length; const [name, p, t] = VIEWS[view]; curView = name; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone())); e.target.textContent = `View: ${name}`; };
  document.getElementById('look').onclick = e => { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); e.target.textContent = `Inclusion: ${organelleLook}`; };
  document.getElementById('cut').onclick = e => { cutOn = !cutOn; caps.visible = cutOn; e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; };
  document.getElementById('flow').onclick = e => { flowsOn = !flowsOn; flowPts.visible = flowsOn; e.target.textContent = `Metabolism: ${flowsOn ? 'on' : 'off'}`; };
  const speed = document.getElementById('speed'), spd = document.getElementById('spd');
  speed.oninput = () => { flowSpeed = 2 ** +speed.value; spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`; };
  speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
  document.getElementById('motion').onclick = e => { motion = !motion; e.target.textContent = motion ? 'Pause' : 'Play'; };
  document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'chlamydia-trachomatis-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

  const held = new Set();
  addEventListener('keydown', e => { const k = e.key.toLowerCase(); if (k.length === 1 && 'wasd'.includes(k) && !e.target.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k); });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());
  const fwd = V(), side = V(), step = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  controls.enableRotate = false;
  let lookFrom = null, downAt = null;
  renderer.domElement.addEventListener('pointerdown', e => { if (e.button === 0) { lookFrom = [e.clientX, e.clientY]; downAt = [e.clientX, e.clientY]; renderer.domElement.setPointerCapture(e.pointerId); } });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!lookFrom) return;
    const dx = e.clientX - lookFrom[0], dy = e.clientY - lookFrom[1]; lookFrom = [e.clientX, e.clientY];
    if (tour.on) { tour.yaw = Math.min(.44, Math.max(-.44, tour.yaw - dx * .002)); tour.pitch = Math.min(.44, Math.max(-.44, tour.pitch + dy * .002)); return; }
    aim.setFromVector3(controls.target.clone().sub(camera.position));
    aim.theta -= dx * .002; aim.phi = Math.min(Math.PI - .05, Math.max(.05, aim.phi + dy * .002));
    controls.target.copy(camera.position).add(V().setFromSpherical(aim));
  });
  for (const ev of ['pointerup', 'pointercancel']) renderer.domElement.addEventListener(ev, e => {
    if (ev === 'pointerup' && downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) < 4) {
      ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
      const map = OBJS_BY_MAT(), hit = ray.intersectObjects(cell.children, true).find(h => h.object.visible && h.object !== flowPts && map.has(h.object.material));
      if (hit) { const k = map.get(hit.object.material); setHi(k); if (EMBED) toExplorer({ type: 'pick', key: k }); }
    }
    lookFrom = downAt = null;
  });
  function freeMove(dt) {
    if (!held.size || tour.on) return;
    camera.getWorldDirection(fwd); side.crossVectors(fwd, camera.up).normalize();
    step.set(0, 0, 0).addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s'))).addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (step.lengthSq() < 1e-6) return;
    step.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * .5));
    camera.position.add(step); controls.target.add(step);
  }

  const tour = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = x => x * x * x * (x * (x * 6 - 15) + 10);
  function poseOf(m) {
    if (m.view) { const v = VIEWS.find(x => x[0] === m.view); return v && { p: v[1].clone(), t: v[2].clone() }; }
    const partKey = m.part || m.focus;
    if (partKey) { const f = focusOf(partKey); return f && { p: f.c.clone().addScaledVector(f.dir, (m.dist ?? 1) * f.r / Math.sin(camera.fov * Math.PI / 360)), t: f.c.clone() }; }
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0, 0, 0])) };
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
  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0, 0, 0);
  function tourFrame(dt) {
    if (!tour.on) return;
    const { from, to } = tour;
    if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
    else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, tour.orbit * Math.PI / 180 * dt).add(to.t);
    const e = smoother(tour.t); ft.lerpVectors(from.t, to.t, e);
    qa.copy(from.p).sub(C0); qb.copy(to.p).sub(C0); const ra = Math.max(.05, qa.length()), rb = Math.max(.05, qb.length()); qa.normalize(); qb.normalize();
    const ang = Math.acos(Math.min(1, Math.max(-1, qa.dot(qb))));
    if (ang < 1e-3 || ang > 3.1) fp.lerpVectors(qa, qb, e).normalize();
    else fp.copy(qa).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(qb, Math.sin(e * ang)).divideScalar(Math.sin(ang));
    fp.multiplyScalar(Math.pow(Math.max(.05, ra), 1 - e) * Math.pow(Math.max(.05, rb), e) * (1 + Math.min(.5, ang * .3) * Math.sin(Math.PI * e))).add(C0);
    if (!lookFrom) { const k = Math.exp(-dt / .2); tour.yaw *= k; tour.pitch *= k; }
    look.copy(ft).sub(fp);
    if (tour.yaw || tour.pitch) { right.crossVectors(look, UP).normalize(); look.applyAxisAngle(UP, tour.yaw).applyAxisAngle(right, -tour.pitch); }
    camera.position.copy(fp); cell.localToWorld(camera.position); controls.target.copy(fp).add(look); cell.localToWorld(controls.target); camera.lookAt(controls.target);
    if (tour.t >= 1 && !tour.sent) { tour.sent = true; if (EMBED) toExplorer({ type: 'arrived', seq: tour.seq }); }
  }

  const POINTS = {};
  function pointsOf(vName) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      inclusion: V(-7.35, 1.15, -.25), inc: SITES.inc[4] ?? V(-6.8, 3.2, -2.5), golgi_lip: SITES.golgi_lip[1] ?? V(-6.1, 3.6, -3.9),
      host_cyto: SITES.host_cyto[0] ?? V(-6.35, -2.45, 6.25), eb_om: V(-1.38, Y_EB1 + .3, -.2), momp: SITES.momp[2] ?? V(-1.1, Y_EB1 + .85, -.6),
      eb_dna: SITES.eb_dna[0] ?? V(-.55, Y_EB1, -.55), t3ss: SITES.t3ss[0] ?? V(-.25, 6.55, -.25), tarP: SITES.tarP[0] ?? V(-.35, 8.25, -.35),
      rb_om: V(-2.45, -.15, -.15), rb_im: V(-2.22, -.65, -.15), septum: SITES.septum[0] ?? V(-1.65, Y_RB_MID, -.15),
      mreb: SITES.mreb[0] ?? V(-1.42, Y_RB_MID, -.22), npt1: SITES.npt1[0] ?? V(-3.15, -1.85, 2.55), npt2: SITES.npt2[0] ?? V(-2.95, -2.25, 2.85),
      rb_dna: SITES.rb_dna[4] ?? V(-1.15, -.45, -.95), rnap: SITES.rnap[0] ?? V(-1.15, .35, -.85), mrna: SITES.mrna[0] ?? V(-1.55, .65, -1.15),
      ribosome: SITES.ribosome[0] ?? V(-1.65, -2.55, -1.15), glycogen: SITES.glycogen[0] ?? V(-3.4, 1.35, -3.1),
    };
    let P = { ...base };
    if (vName === 'eb') P = { ...base, eb_om: V(-1.38, Y_EB1 + .2, -.18), momp: SITES.momp[1] ?? V(-1.15, Y_EB1 + .75, -.55), eb_dna: V(-.52, Y_EB1, -.52), t3ss: SITES.t3ss[0] ?? V(-.25, 6.55, -.25), tarP: SITES.tarP[0] ?? V(-.35, 8.25, -.35) };
    if (vName === 'rb') P = { ...base, rb_om: V(-2.45, -.15, -.15), rb_im: V(-2.22, -.65, -.15), septum: V(-1.65, Y_RB_MID, -.15), mreb: V(-1.42, Y_RB_MID, -.22), rb_dna: SITES.rb_dna[3] ?? V(-1.15, -.45, -.95), ribosome: SITES.ribosome[1] ?? V(-1.55, -2.75, -1.05) };
    if (vName === 'npt1') P = { ...base, npt1: SITES.npt1[0] ?? V(-3.25, -1.85, 2.65), npt2: SITES.npt2[0] ?? V(-3.05, -2.25, 2.95), rb_om: V(-3.55, -1.15, 5.25), rb_im: V(-3.45, -1.65, 5.32), inclusion: V(-5.15, -2.05, 4.95), host_cyto: V(-6.35, -2.45, 6.25) };
    return POINTS[vName] = P;
  }

  const FOCUS = {};
  function focusOf(k) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('inclusion'), d0 = V(.64, .20, .74).normalize();
    const RAD = { inclusion: 5.2, inc: 2.8, golgi_lip: 2.6, host_cyto: 3.6, eb_om: 2.4, momp: 2.1, eb_dna: 2.0, t3ss: 2.4, tarP: 2.5, rb_om: 3.6, rb_im: 3.4, septum: 2.5, mreb: 2.4, npt1: 2.4, npt2: 2.4, rb_dna: 3.0, rnap: 2.2, mrna: 2.2, ribosome: 2.6, glycogen: 2.3 };
    return FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.6, dir: d0.clone() } : null;
  }

  const KIN = { inclusion: ['inc', 'golgi_lip'], eb_om: ['momp', 'eb_dna', 't3ss', 'tarP'], rb_om: ['rb_im', 'septum', 'mreb', 'npt1', 'npt2'], rb_dna: ['rnap', 'mrna', 'ribosome'] };
  const saved = new Map(), hidden = [];
  let ghostArgs = null, OBJS = null, matMap = null;
  function OBJS_BY_MAT() {
    if (!matMap) { matMap = new Map(); Object.entries(REG).forEach(([k, r]) => [...r.mats, ...r.imp].forEach(m => { if (!matMap.has(m)) matMap.set(m, k); })); }
    return matMap;
  }
  function objsOf() { const of = OBJS_BY_MAT(), out = {}; cell.traverse(o => { const k = o.material && of.get(o.material); if (k) (out[k] ??= []).push(o); }); return out; }
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
    if (m.look && m.look !== organelleLook) { organelleLook = m.look; applyLook(); document.getElementById('look').textContent = `Inclusion: ${organelleLook}`; }
    if (m.cut !== undefined && m.cut !== cutOn) { cutOn = m.cut; caps.visible = cutOn; document.getElementById('cut').textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; }
    if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow').click();
    if (m.motion !== undefined) { motion = m.motion; document.getElementById('motion').textContent = motion ? 'Pause' : 'Play'; }
    if (g) ghost(...g);
  }

  const lightView = V();
  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (motion) { sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3) / 15)); cell.rotation.y = .10 * Math.sin(sway * .12); }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(.65, Math.min(1.6, camera.position.distanceTo(controls.target) / 18));
    cell.updateMatrixWorld(); updateCut();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) { const k = hiLevel(now), c = hiCol(hi); REG[hi].mats.forEach(m => { m.emissive.copy(c); m.emissiveIntensity = .25 + .75 * k; }); REG[hi].imp.forEach(m => { m.uniforms.uHi.value = k; }); }
    lens.uniforms.uTime.value = now / 1000; freeMove(dt); controls.update(); tourFrame(dt); composer.render();
    if (EMBED) embedFrame();
  }

  function build() { buildInclusionAndHost(); buildElementaryBodies(); buildReticulateBodiesAndEnergyTheft(); for (let s = 0; s < 120; s++) updateFlows(.05); }
  setTimeout(() => { build(); applyLook(); resize(); renderer.setAnimationLoop(frame); document.getElementById('busy').style.display = 'none'; }, 30);

  const EMBED = document.documentElement.classList.contains('embed'), toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts = [], tagSeq = 0, sentReady = false;
  const scr = V();
  function embedFrame() {
    if (!sentReady) {
      sentReady = true;
      const mols = Object.entries(MOL).map(([k, [name, colour, g]]) => { const cv = document.createElement('canvas'); cv.width = cv.height = 44; glyph(cv.getContext('2d'), g, 3, 3, 38, colour); return [k, name, cv.toDataURL()]; });
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS });
    }
    const w = innerWidth, h = innerHeight;
    toExplorer({ type: 'pts', seq: tagSeq, pts: tagPts.map(p => { if (!p) return null; scr.copy(p); cell.localToWorld(scr); scr.project(camera); return [(scr.x * .5 + .5) * w, (-scr.y * .5 + .5) * h, scr.z < 1]; }) });
  }
  const say = () => toExplorer({ type: 'state', motion, look: organelleLook, cut: cutOn, flow: flowsOn });
  if (EMBED) {
    addEventListener('message', e => {
      const m = e.data; if (!m || m.to !== 'realistic-cell') return;
      if (m.cmd === 'view') {
        const v = VIEWS.findIndex(x => x[0] === m.view); if (v < 0) return;
        freeCamera(); view = v; const [name, p, t] = VIEWS[v]; curView = name;
        camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone()));
        document.getElementById('view').textContent = `View: ${name}`;
        const P = pointsOf(m.view); tagPts = (m.points || []).map(k => P[k] ?? null); tagSeq = m.seq;
      }
      if (m.cmd === 'track' || m.cmd === 'tags') { const list = m.points ?? m.tags ?? []; tagPts = list.map(x => { const [v, k] = Array.isArray(x) ? x : [m.view ?? 'inclusion', x]; return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k] ?? focusOf(k)?.c) ?? null; }); tagSeq = m.seq; }
      if (m.cmd === 'fly' && !flyTo(m)) toExplorer({ type: 'arrived', seq: m.seq ?? 0, missed: true });
      if (m.cmd === 'free') freeCamera();
      if (m.cmd === 'blink') { if (m.key) blink(m.key, m.n ?? 3); else setHi(null); }
      if (m.cmd === 'ghost') ghost(m.keep || m.keys || null, m.amount ?? .1, !!m.hide);
      if (m.cmd === 'set' || m.cmd === 'state') setState(m);
      if (m.cmd === 'hi') { blinkT0 = null; setHi(m.key); }
      if (m.cmd === 'mol') molHi = m.key;
      if (m.cmd === 'motion') document.getElementById('motion').click();
      if (m.cmd === 'look') document.getElementById('look').click();
      if (m.cmd === 'cut') document.getElementById('cut').click();
      if (m.cmd === 'flow') document.getElementById('flow').click();
      if (m.cmd === 'speed') { speed.value = m.v; speed.oninput(); }
      if (m.cmd === 'key') m.down ? held.add(m.key) : held.delete(m.key);
      if (m.cmd === 'snap') { composer.render(); toExplorer({ type: 'snap', url: renderer.domElement.toDataURL('image/png') }); }
      say();
    });
    addEventListener('keydown', e => {
      if (e.key === 'Escape') toExplorer({ type: 'key', key: 'Escape' });
      else if (!e.metaKey && !e.ctrlKey && !e.altKey && (/^(Arrow(Left|Right)|Page(Up|Down)| |Enter)$/.test(e.key) || /^[cnemr1-9]$/i.test(e.key))) { if (e.key === ' ') e.preventDefault(); toExplorer({ type: 'key', key: e.key, shift: e.shiftKey }); }
    });
  }
  window.__cell = { renderer, composer, camera, controls, scene, cell, REG, shells, get placed() { return placed; }, get curView() { return curView; }, setHi, V, focusOf, flyTo, freeCamera, ghost, blink, setState, tour, setLook: k => { organelleLook = k; applyLook(); }, get sites() { return SITES; }, get flows() { return live; }, get views() { return VIEWS; }, pointsOf, setMol: k => { molHi = k; }, step: (dt = .05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); } };
});
