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

runBiologyApp(20261108, ({ random, geometry, batch, dna, rna, pdb, ribosome, tours }) => {
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
    const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d'), gr = g.createRadialGradient(280, 210, 0, 256, 256, 390);
    gr.addColorStop(0, '#182438'); gr.addColorStop(.54, '#09101d'); gr.addColorStop(1, '#03050a'); g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;

  const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, .1, 420);
  camera.position.set(24.5, 2.2, 27.5);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, -1.1, 0); controls.enableDamping = true; controls.minDistance = .6; controls.maxDistance = 110; controls.panSpeed = .5; controls.zoomSpeed = .5;

  scene.add(new THREE.HemisphereLight('#e4f0ff', '#1b2034', .54));
  const key = new THREE.DirectionalLight('#fff2e0', 2.95); key.position.set(16, 26, 20); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 95 }); key.shadow.bias = -.0005; key.shadow.normalBias = .03;
  const rim = new THREE.DirectionalLight('#90c4ff', 1.45); rim.position.set(-18, 8, -16);
  const lamp = new THREE.PointLight('#ffc39e', 11.5, 30, 2); lamp.position.set(4.8, .6, 5.2);
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
    ['membrane', 'Cholesterol-stiffened single lipid bilayer (no cell wall)', '#f3a683'],
    ['sterol', 'Scavenged host cholesterol stiffening the bilayer', '#ffd15c'],
    ['lipo', 'Phase-variable MgPa / MgpB surface lipoproteins', '#ff8fb1'],
    ['nap', 'P140 / P110 Nap heterodimer crown (PDB 6RUT)', '#ff6b8b'],
    ['sialo', 'Host sialylated glycoprotein receptors', '#7fe0ff'],
    ['cilium', 'Host airway epithelial cilium (9+2 axoneme)', '#a29bfe'],
    ['button', 'Distal terminal button (HMW3 / P65 cap)', '#ff9f43'],
    ['rod', 'Segmented electron-dense HMW1 / HMW2 core rod', '#f7d794'],
    ['wheel', 'Basal bowl / wheel complex', '#e17055'],
    ['gliding', 'Gliding motility lever motor', '#55efc4'],
    ['dna', '580,076 bp circular dsDNA chromosome (~482 genes)', '#54a0ff'],
    ['hu', 'Nucleoid-associated HU & topoisomerase', '#81ecec'],
    ['fork', 'Minimal DNA Pol III replisome', '#fd79a8'],
    ['rnap', 'Bacterial RNA polymerase', '#e056fd'],
    ['mrna', 'Nascent mRNA transcripts', '#ffb35c'],
    ['ribosome', '70S bacterial ribosomes (~150 copies)', '#ffeaa7'],
    ['import', 'ABC nucleoside & lipid scavenger importers', '#74b9ff'],
    ['glycolysis', 'Cytosolic glycolytic enzymes (sole ATP source)', '#78e08f'],
  ];

  const INFO = {
    membrane: ['Scavenged host phospholipids & fatty acids', 'Encloses the wall-less cell in a single trilaminar bilayer'],
    sterol: ['Unesterified cholesterol from host cilia membranes', 'Stiffens the single bilayer against osmotic lysis without peptidoglycan'],
    lipo: ['Diacylglycerol-anchored MgpB / MgpC ectodomains', 'Antigenic variation decoys that evade host mucosal antibodies'],
    nap: ['Heterodimeric P140 / P110 crown complex (PDB 6RUT)', 'Binds sialylated host oligosaccharides in an ATP-regulated catch-and-release cycle'],
    sialo: ['Neu5Ac-α2,3 / α2,6-galactose mucosal glycans', 'High-affinity epithelial attachment tracks gripped by Nap and Gli349'],
    cilium: ['Human respiratory cilium with 9+2 microtubule axoneme', 'Mucosal surface colonized by gliding M. genitalium'],
    button: ['Electron-dense HMW3 & P65 distal arch inside the tip', 'Anchors the anterior pole of the terminal organelle to the neck membrane'],
    rod: ['Segmented HMW1 / HMW2 coiled-coil plates (~250 nm)', 'Internal bacterial endoskeleton maintaining piriform flask polarity'],
    wheel: ['Proximal P41 / P200 / TopJ bowl complex', 'Couples the cytoskeletal rod to gliding strokes and chromosome segregation'],
    gliding: ['Gli123 scaffold, Gli521 gear crank & Gli349 foot lever', 'Converts glycolytic ATP hydrolysis into ~0.1 µm/s surface gliding'],
    dna: ['580,076 bp circular dsDNA chromosome (~482 genes)', 'Smallest known self-replicating cellular genome; template for JCVI-syn3.0'],
    hu: ['Homodimeric HU architectural DNA-bending protein', 'Compacts and stabilizes supercoiled minimal chromosome loops'],
    fork: ['DnaB helicase + minimal DNA Pol III holoenzyme', 'Duplicates the 580 kbp circular chromosome prior to cell division'],
    rnap: ['Multi-subunit α2ββ′σ RNA polymerase holoenzyme', 'Transcribes polycistronic minimal operons into mRNA, rRNA and tRNA'],
    mrna: ['Uncapped nascent bacterial mRNA transcripts', 'Co-transcriptionally translated by 70S ribosomes'],
    ribosome: ['~150 bacterial 70S ribosomes (50S + 30S subunits)', 'Synthesizes all ~482 cellular proteins — proving cellular autonomy'],
    import: ['ATP-binding cassette (ABC) nucleoside & lipid salvagers', 'Imports ready-made bases, amino acids and lipids in place of de novo synthesis'],
    glycolysis: ['Cytosolic Embden–Meyerhof–Parnas enzyme tetramers', 'Ferments imported glucose to lactate/acetate as the sole ATP source'],
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
    const m = reg(k, phys({ color: solid, roughness: .18, clearcoat: .58, clearcoatRoughness: .22, sheen: .55, sheenColor: o.sheen ?? '#ffffff', ior: 1.35, thickness: o.thickness ?? .7, attenuationColor: tint, attenuationDistance: o.atten ?? 1.2, ...o.extra }));
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

  // Coarse-grained synthetic cryo-EM surface generator (1 unit = 40 nm -> NM = 0.025)
  const NM = .025, DNA_NM = .068;
  function synthGeo(beads, colors, maxDim = 32, scale = 1) {
    const n = beads.length, xyz = new Int16Array(n * 3), kind = new Uint8Array(n), rad = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const [x, y, z, r = 1.6, grp = 0] = beads[i];
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

  // Piriform flask geometry (~308 nm belly diameter x ~530 nm flask height, 1 unit = 40 nm)
  const Y_BOT = -6.8, Y_TOP = 6.4, H_CELL = Y_TOP - Y_BOT;
  function piriformBaseR(u) {
    const uc = Math.max(0, Math.min(1, u));
    const tipCap = Math.sqrt(Math.max(0, 1 - Math.pow(Math.max(0, 1 - uc / .085), 2)));
    if (uc <= .68) {
      const s = .5 - .5 * Math.cos(Math.PI * Math.max(0, Math.min(1, (uc - .20) / .48)));
      return (1.16 + 2.69 * Math.pow(Math.max(0, s), 1.35)) * tipCap;
    }
    return 3.85 * Math.sqrt(Math.max(0, 1 - Math.pow(Math.max(0, (uc - .68) / .32), 2)));
  }
  function piriformSurf(u, phi, dep = 0) {
    const uc = Math.max(0, Math.min(1, u)), ca = Math.cos(phi), sa = Math.sin(phi);
    const undul = 1 + .018 * Math.sin(uc * 11.2 + phi * 3) * Math.sin(Math.PI * uc);
    const r = piriformBaseR(uc) * undul, y = Y_BOT + uc * H_CELL;
    const du = .0025, u0 = Math.max(0, uc - du), u1 = Math.min(1, uc + du);
    const dr = piriformBaseR(u1) - piriformBaseR(u0), dy = (u1 - u0) * H_CELL;
    const inv = 1 / Math.max(1e-6, Math.hypot(dy, dr)), nrm = V(dy * inv * ca, -dr * inv, dy * inv * sa).normalize();
    return { p: V(r * ca - nrm.x * dep, y - nrm.y * dep, r * sa - nrm.z * dep), n: nrm, r };
  }
  function makePiriformGeo(dep = 0, segU = 92, segPhi = 72) {
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= segU; j++) {
      const u = j / segU;
      for (let i = 0; i <= segPhi; i++) {
        const { p } = piriformSurf(u, (i / segPhi) * Math.PI * 2, dep);
        pos.push(p.x, p.y, p.z); uv.push((i / segPhi) * 4, u * 5);
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
  function capStripFromOutline(k, axis, outlineFn, layers, n = 160) {
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

  // Host airway cilium curve passing directly beneath the terminal attachment tip
  const CIL_R = 2.05;
  const cilCurve = new THREE.CatmullRomCurve3([V(-11.2, -10.25, -4.6), V(-5.2, -9.55, -2.1), V(-.35, -9.28, -.18), V(4.2, -9.75, 1.8)]);

  function buildMembraneSterolsAndImporters() {
    const memMat = shellMat('membrane', '#c96f56', '#f7b495', '#7d3422', {
      atten: 1.45, thickness: .45, sheen: '#ffdcc8',
      extra: { clearcoat: .40, clearcoatRoughness: .26, envMapIntensity: .56, normalMap: bump(16, 20), normalScale: new THREE.Vector2(.32, .32) },
    });
    cell.add(shade(new THREE.Mesh(makePiriformGeo(0), memMat), true, true));
    cell.add(new THREE.Mesh(makePiriformGeo(.24, 72, 56), reg('membrane', phys({
      color: '#4b211a', roughness: .76, normalMap: bump(14, 18), normalScale: new THREE.Vector2(.2, .2), side: THREE.BackSide,
    }))));

    const memOutline = (axis, dep, t) => piriformSurf(t, axis === 'x' ? Math.PI * .5 : 0, dep).p;
    const MEM_LAYERS = [[0, .055, '#f6a281'], [.055, .125, '#ffe39f'], [.125, .190, '#f3ca7c'], [.190, .245, '#e38467']];
    for (const ax of ['x', 'z']) caps.add(capStripFromOutline('membrane', ax, memOutline, MEM_LAYERS, 180));

    // Cut-face molecular phospholipids + intercalated yellow sterol four-ring cores
    const B_MEM = balls('membrane', caps, false), B_STER = balls('sterol', caps, false), S_STER = sculpt('sterol', cell, true);
    const cHO = col('#f6a586'), cHI = col('#e8886b'), cT1 = col('#ffe6aa'), cT2 = col('#f4cc7b'), cSt = col('#ffd15c'), cStOH = col('#fff0a6');
    for (const ax of ['x', 'z']) {
      const phi0 = ax === 'x' ? Math.PI * .5 : 0;
      for (let row = 0; row < 3; row++) {
        const dPhi = (ax === 'x' ? 1 : -1) * (.012 + row * .026);
        for (let i = 2; i < 165; i++) {
          const u = i / 166, sO = piriformSurf(u, phi0 + dPhi, .02), sM = piriformSurf(u, phi0 + dPhi, .12), sI = piriformSurf(u, phi0 + dPhi, .22);
          const tang = across(UP, sO.n).multiplyScalar(.014);
          B_MEM.add(sO.p, 1.9 * NM, cHO); B_MEM.stick(sO.p.clone().add(tang), sM.p.clone().add(tang), .22 * NM, cT1, cT2);
          B_MEM.add(sI.p, 1.8 * NM, cHI); B_MEM.stick(sI.p.clone().sub(tang), sM.p.clone().sub(tang), .22 * NM, cT2, cT1);
          if (i % 3 === 1 && row < 2) {
            const sC = piriformSurf(u, phi0 + dPhi, rr(.06, .18));
            B_STER.add(sC.p, 2.3 * NM, cSt); B_STER.stick(sO.p.clone().lerp(sC.p, .55), sI.p.clone().lerp(sC.p, .55), .34 * NM, cStOH, cSt);
            if (row === 0 && i % 15 === 1) SITES.sterol.push(sC.p.clone());
          }
        }
      }
    }
    for (let i = 0; i < 240; i++) {
      const u = .08 + .86 * ((i + .5) / 240), phi = (i * 2.3999632) % (Math.PI * 2), { p, n } = piriformSurf(u, phi, .11);
      if (p.x > 0 && p.z > 0) continue;
      S_STER.lobe(p, .055, .095, .035, i % 2 ? cSt : cStOH, qOut(n, i));
      if (i % 8 === 0 && SITES.membrane.length < 40) SITES.membrane.push(p.clone());
    }
    B_MEM.done(); B_STER.done(); S_STER.done();

    // Surface phase-variable MgPa / MgpB lipoproteins (diacylglycerol lipid anchor + bilobed ectodomain)
    const geoLipo = synthGeo([[0, 1.8, 0, 1.7, 0], [-1.1, 3.8, .4, 1.9, 0], [1.2, 4.1, -.3, 1.8, 1], [0, 6.2, .2, 1.7, 1]], ['#ff8fb1', '#ffb8d0'], 24, 1.15);
    const I_LIPO = molBatch('lipo', geoLipo, cell, true);
    for (let i = 0; i < 68; i++) {
      const u = .16 + .78 * ((i + .5) / 68), phi = i * 2.3999632 + .4, { p, n } = piriformSurf(u, phi, -.02);
      if (p.x > .05 && p.z > .05) continue;
      I_LIPO.add(p, qOut(n, i * .9), rr(.9, 1.12)); placed++;
      if (SITES.lipo.length < 30) SITES.lipo.push(p.clone().addScaledVector(n, .16));
    }
    I_LIPO.done();

    // Transmembrane ABC nucleoside, amino-acid & lipid scavenger importers
    const geoImp = synthGeo([[-1.5, -2.2, 0, 1.8, 0], [1.5, -2.2, 0, 1.8, 0], [-1.2, 1.0, 0, 1.9, 1], [1.2, 1.0, 0, 1.9, 1], [0, 3.8, 0, 2.1, 2]], ['#54a0ff', '#74b9ff', '#a8daff'], 28, 1.25);
    const I_IMP = molBatch('import', geoImp, cell, true);
    for (let i = 0; i < 34; i++) {
      const u = .26 + .64 * ((i + .5) / 34), phi = i * 2.3999632 + 1.2, { p, n } = piriformSurf(u, phi, .12);
      if (p.x > .05 && p.z > .05) continue;
      I_IMP.add(p, qOut(n, i * 1.3), 1); placed++; SITES.import.push(p.clone());
    }
    I_IMP.done();
  }

  function buildNapCiliumAndTerminalOrganelle() {
    // Polarized P140 / P110 Nap adhesin heterodimer crowns (PDB 6RUT four-fold crown dimer-of-dimers)
    const geoNap = synthGeo([
      [-2.2, 1.4, -1.8, 1.7, 0], [2.2, 1.4, 1.8, 1.7, 0], [-1.8, 1.4, 2.2, 1.7, 1], [1.8, 1.4, -2.2, 1.7, 1],
      [-2.8, 5.2, -2.2, 2.3, 0], [2.8, 5.2, 2.2, 2.3, 0], [-2.2, 5.0, 2.6, 2.1, 1], [2.2, 5.0, -2.6, 2.1, 1], [0, 7.6, 0, 2.2, 0],
    ], ['#ff6b8b', '#ff9eb5'], 30, 1.35);
    const I_NAP = molBatch('nap', geoNap, cell, false);
    for (let ring = 0; ring < 5; ring++) {
      const u = .012 + ring * .042, count = ring === 0 ? 5 : 9;
      for (let k = 0; k < count; k++) {
        const phi = (k / count) * Math.PI * 2 + ring * .35, { p, n } = piriformSurf(u, phi, -.01);
        if (u > .06 && p.x > .15 && p.z > .15) continue;
        I_NAP.add(p, qOut(n, k * .8), ring === 0 ? 1.08 : .96); placed++;
        SITES.nap.push(p.clone().addScaledVector(n, .25));
      }
    }
    I_NAP.done();

    // Host respiratory epithelial cilium (ciliary membrane + textbook 9+2 microtubule axoneme)
    const cilFrames = geometry.ptFrames(cilCurve, 64), cilGeo = geometry.sweepGeo(cilCurve, () => CIL_R, 64, 32);
    const cilMat = shellMat('cilium', '#6859dc', '#a99eff', '#433598', {
      atten: 1.7, thickness: .55, sheen: '#dfd9ff',
      extra: { roughness: .28, clearcoat: .30, envMapIntensity: .46, normalMap: bump(18, 8), normalScale: new THREE.Vector2(.3, .3), clippingPlanes: null },
    });
    cell.add(shade(new THREE.Mesh(cilGeo, cilMat), false, true));

    const S_CIL = sculpt('cilium', cell, false);
    const cMtA = col('#d8d2ff'), cMtB = col('#9b8ff2'), cSpoke = col('#7c6ee6'), cDyn = col('#ff9ff3');
    const cEnd = cilCurve.getPointAt(1), nEnd = cilCurve.getTangentAt(1);
    S_CIL.ring(cEnd, nEnd, CIL_R - .06, .08, cMtB, 42, 10);

    const sampleAx = (offN, offB, extraLen = .45) => {
      const pts = [];
      for (let i = 0; i <= 28; i++) pts.push(cilCurve.getPointAt(i / 28).addScaledVector(cilFrames.N[i * 2], offN).addScaledVector(cilFrames.B[i * 2], offB));
      pts.push(pts[pts.length - 1].clone().addScaledVector(nEnd, extraLen));
      return pts;
    };
    const rAx = CIL_R * .66;
    for (let d = 0; d < 9; d++) {
      const a = (d / 9) * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a), ta = -sa, tb = ca;
      S_CIL.tube(sampleAx(ca * rAx - ta * .09, sa * rAx - tb * .09), .11, .11, cMtA, cMtA, 8, true);
      S_CIL.tube(sampleAx(ca * rAx + ta * .10, sa * rAx + tb * .10), .10, .10, cMtB, cMtB, 8, true);
      for (let sp = 3; sp <= 27; sp += 4) {
        const fi = sp * 2, c = cilCurve.getPointAt(sp / 28);
        const pOuter = c.clone().addScaledVector(cilFrames.N[fi], ca * rAx).addScaledVector(cilFrames.B[fi], sa * rAx);
        const pHub = c.clone().addScaledVector(cilFrames.N[fi], ca * .26).addScaledVector(cilFrames.B[fi], sa * .26);
        S_CIL.stick(pOuter, pHub, .028, cSpoke, cMtA);
        S_CIL.stick(pOuter, pOuter.clone().addScaledVector(cilFrames.N[fi], ta * .24).addScaledVector(cilFrames.B[fi], tb * .24), .034, cDyn, cDyn);
      }
    }
    S_CIL.tube(sampleAx(-.20, 0, .52), .115, .115, cMtA, cMtA, 8, true);
    S_CIL.tube(sampleAx(.20, 0, .52), .115, .115, cMtA, cMtA, 8, true);
    SITES.cilium.push(cEnd.clone(), V(-.35, -8.2, -.15));
    S_CIL.done();

    // Branched sialylated oligosaccharide receptors (Neu5Ac-Gal-GlcNAc) on the cilium gripped by Nap & Gli349
    const S_SIA = sculpt('sialo', cell, false), B_SIA = balls('sialo', cell, false);
    const cSia1 = col('#7fe0ff'), cSia2 = col('#38d9a9'), cNeu5Ac = col('#ff7ad9');
    for (let i = 0; i < 44; i++) {
      const t = .30 + .46 * ((i + .5) / 44), ang = (i - 22) * .11 + rr(-.35, .35);
      const upDir = V(0, 1, 0).applyAxisAngle(cilCurve.getTangentAt(t), ang).normalize();
      const base = cilCurve.getPointAt(t).addScaledVector(upDir, CIL_R - .03);
      const mid = base.clone().addScaledVector(upDir, .26).add(V(rr(-.05, .05), 0, rr(-.05, .05)));
      const tip1 = mid.clone().addScaledVector(upDir, .24).add(V(.09, .04, -.06));
      const tip2 = mid.clone().addScaledVector(upDir, .22).add(V(-.09, .03, .07));
      S_SIA.tube([base, mid, tip1], .028, .020, cSia2, cSia1, 6, true);
      S_SIA.stick(mid, tip2, .018, cSia1, cNeu5Ac);
      B_SIA.add(tip1, 2.4 * NM, cNeu5Ac); B_SIA.add(tip2, 2.2 * NM, cSia1);
      if (Math.abs(t - .56) < .12) SITES.sialo.push(tip1.clone());
    }
    S_SIA.done(); B_SIA.done();

    // Internal Terminal Organelle: Distal Button (HMW3/P65) + Segmented Rod (HMW1/HMW2) + Basal Wheel + Gliding Levers
    const S_BTN = sculpt('button', cell, false), S_ROD = sculpt('rod', cell, false), S_WHL = sculpt('wheel', cell, false), S_GLI = sculpt('gliding', cell, false);
    const cBtn1 = col('#ff9f43'), cBtn2 = col('#ffc078'), cRod1 = col('#f7d794'), cRod2 = col('#f3a683'), cWhl1 = col('#e17055'), cWhl2 = col('#fab1a0'), cGli1 = col('#55efc4'), cGli2 = col('#00cec9');
    S_BTN.lobe(V(-.04, -6.08, -.04), .52, .34, .52, cBtn1);
    S_BTN.lobe(V(-.04, -5.66, -.04), .64, .22, .64, cBtn2);
    S_BTN.ring(V(-.04, -5.88, -.04), UP, .48, .085, cBtn1, 28, 8);
    for (let k = 0; k < 6; k++) { const a = .7 + k * .85; S_BTN.stick(V(-.04, -6.18, -.04), V(Math.cos(a) * .58, -6.48, Math.sin(a) * .58), .035, cBtn2, cBtn1); }
    placed += 2; SITES.button.push(V(-.06, -5.92, -.06));

    for (let s = 0; s < 15; s++) {
      const y = -5.32 + s * .265, w = .42 + .14 * (s / 14);
      S_ROD.lobe(V(-.04, y, -.04), w, .078, w, s % 2 ? cRod1 : cRod2); placed++;
      if (s % 3 === 1) SITES.rod.push(V(-.04, y, -.04));
    }
    S_ROD.tube([V(-.22, -5.45, -.04), V(-.26, -3.4, -.04), V(-.32, -1.45, -.04)], .065, .082, cRod1, cRod2, 8, true);
    S_ROD.tube([V(-.04, -5.45, -.22), V(-.04, -3.4, -.26), V(-.04, -1.45, -.32)], .065, .082, cRod2, cRod1, 8, true);

    S_WHL.ring(V(-.05, -1.22, -.05), UP, .84, .11, cWhl1, 34, 10);
    S_WHL.ring(V(-.05, -.95, -.05), UP, 1.06, .085, cWhl2, 36, 10);
    S_WHL.lobe(V(-.05, -1.32, -.05), .55, .18, .55, cWhl1);
    for (let k = 0; k < 8; k++) { const a = k * .7854; S_WHL.stick(V(-.05, -1.30, -.05), V(-.05 + Math.cos(a) * 1.04, -.95, -.05 + Math.sin(a) * 1.04), .042, cWhl1, cWhl2); }
    placed += 3; SITES.wheel.push(V(-.15, -1.08, -.15));

    for (let g = 0; g < 12; g++) {
      const u = .065 + (g % 6) * .042, phi = (g < 6 ? Math.PI * .72 : Math.PI * 1.38) + (g % 3) * .28;
      const { p, n } = piriformSurf(u, phi, .04), pIn = V(-.04, p.y + .1, -.04).lerp(p, .52);
      const elbow = p.clone().addScaledVector(n, .42).add(V(0, -.28, 0)), foot = elbow.clone().add(V(n.x * .25, -.68, n.z * .25));
      S_GLI.lobe(pIn, .12, .10, .12, cGli2); S_GLI.tube([pIn, p, elbow, foot], .042, .028, cGli2, cGli1, 8, true); S_GLI.lobe(foot, .095, .065, .12, cGli1);
      placed++; SITES.gliding.push(elbow.clone());
    }
    S_BTN.done(); S_ROD.done(); S_WHL.done(); S_GLI.done();
  }

  function buildNucleoidRibosomesAndMetabolism() {
    // 580,076 bp minimal circular dsDNA chromosome compacted into plectonemic supercoils tethered to basal wheel
    const B_DNA = balls('dna', cell, false), B_RNA = balls('mrna', cell, false);
    const geoHu = synthGeo([[-1.1, 0, 0, 1.4, 0], [1.1, 0, 0, 1.4, 1], [0, 1.3, 0, 1.3, 0]], ['#81ecec', '#00cec9'], 20, 1.25);
    const I_HU = molBatch('hu', geoHu, cell, false);
    for (let L = 0; L < 11; L++) {
      const yBase = -.45 + (L / 10) * 5.2, a0 = L * 1.85 + .65, maxR = Math.max(.8, piriformBaseR((yBase - Y_BOT) / H_CELL) - .75), ctrl = [];
      for (let k = 0; k <= 10; k++) {
        const t = k / 10, ang = a0 + Math.sin(t * Math.PI) * 1.25 + k * .18;
        let rx = Math.cos(ang) * maxR * (.28 + .66 * Math.sin(t * Math.PI)), rz = Math.sin(ang) * maxR * (.28 + .66 * Math.sin(t * Math.PI));
        if (rx > -.12 && rz > -.12) rx = -Math.abs(rx) - .22;
        ctrl.push(V(rx, yBase + Math.sin(t * Math.PI * 2) * .42 + (L === 0 && k === 0 ? -.42 : 0), rz));
      }
      const pts = new THREE.CatmullRomCurve3(ctrl).getSpacedPoints(130);
      dna.emitDNA(B_DNA, pts, { nm: DNA_NM }); SITES.dna.push(pts[60].clone());
      for (let h = 22; h < pts.length - 20; h += 36) { I_HU.add(pts[h], qOut(randDir(), h), 1); placed++; if (SITES.hu.length < 24) SITES.hu.push(pts[h].clone()); }
    }
    I_HU.done();

    // Active minimal DNA Pol III replisome fork (DnaB helicase ring + twin Pol III cores + beta sliding clamps)
    const forkPos = V(-.95, 1.65, -1.05), S_FORK = sculpt('fork', cell, false);
    const geoFork = synthGeo([[-2.2, 1.2, 0, 2.2, 0], [2.2, 1.2, 0, 2.2, 0], [0, -1.8, 0, 2.4, 1], [0, .4, 1.8, 1.8, 2]], ['#fd79a8', '#ff9ff3', '#fab1a0'], 28, 1.45);
    const I_FORK = molBatch('fork', geoFork, cell, false);
    I_FORK.add(forkPos, qOut(V(.3, 1, .2).normalize(), .6), 1);
    S_FORK.ring(forkPos.clone().add(V(0, -.28, 0)), V(.2, 1, .15).normalize(), .22, .065, col('#ff6b8b'), 24, 8);
    dna.emitDNA(B_DNA, new THREE.CatmullRomCurve3([forkPos.clone().add(V(-.55, -.45, -.3)), forkPos, forkPos.clone().add(V(.35, .52, -.45))]).getSpacedPoints(38), { nm: DNA_NM });
    placed += 2; SITES.fork.push(forkPos.clone());
    I_FORK.done(); S_FORK.done();

    // Bacterial RNA polymerases transcribing nascent mRNA into coupled 70S polysomes
    const geoRnap = synthGeo([[-1.8, 0, 0, 2.3, 0], [1.8, .4, 0, 2.2, 1], [0, 2.0, 1.2, 1.9, 2], [0, -1.8, -.6, 1.8, 0]], ['#e056fd', '#be2edd', '#f368e0'], 28, 1.35);
    const I_RNAP = molBatch('rnap', geoRnap, cell, false);
    const rnapSpots = [V(-1.45, 2.85, -.65), V(-.65, 3.65, -1.55), V(-1.75, .95, -.85), V(-.55, .35, -1.65), V(-1.35, 4.35, -.95), V(-2.15, 2.15, -1.25)];
    const polyRibos = [];
    rnapSpots.forEach((rp, idx) => {
      I_RNAP.add(rp, qOut(V(.2, 1, -.3).normalize(), idx * 1.1), 1); placed++; SITES.rnap.push(rp.clone());
      const mPts = [];
      for (let k = 0; k < 34; k++) {
        const q = rp.clone().add(V(-.045 * k + .08 * Math.sin(k * .35 + idx), .032 * k + .06 * Math.cos(k * .4), -.04 * k));
        mPts.push(q); if (k === 12 || k === 23 || k === 32) polyRibos.push(q.clone());
      }
      rna.rnaAlong(B_RNA, mPts, MRNA, DNA_NM); SITES.mrna.push(mPts[18].clone());
    });
    I_RNAP.done(); B_DNA.done(); B_RNA.done();

    // ~150 bacterial 70S ribosomes (50S large subunit + 30S small subunit cryo-EM surface)
    const geoRibo70 = synthGeo([
      [0, -1.4, 0, 3.3, 0], [-2.8, -.6, .8, 2.2, 0], [2.9, -.4, -.6, 2.1, 0], [0, -3.2, -1.2, 2.4, 0],
      [.4, 2.4, 1.1, 2.6, 1], [-2.1, 2.6, .8, 2.0, 1], [2.2, 2.1, 1.3, 1.9, 1], [0, .5, -.8, 2.0, 2],
    ], ['#ffeaa7', '#fdcb6e', '#fab1a0'], 32, 1.22);
    const I_RIBO = molBatch('ribosome', geoRibo70, cell, true);
    let riboCount = 0;
    polyRibos.forEach((p, i) => { I_RIBO.add(p, qOut(randDir(), i * .9), 1); riboCount++; placed++; if (SITES.ribosome.length < 40) SITES.ribosome.push(p.clone()); });
    for (let guard = 0; riboCount < 152 && guard < 1200; guard++) {
      const u = rr(.24, .90), r = Math.max(.4, piriformBaseR(u) - .58) * Math.sqrt(rr(.18, 1)), phi = rr(0, Math.PI * 2);
      const p = V(Math.cos(phi) * r, Y_BOT + u * H_CELL, Math.sin(phi) * r);
      if (p.x > -.15 && p.z > -.15) continue;
      I_RIBO.add(p, qOut(randDir(), riboCount * .7), rr(.94, 1.06)); riboCount++; placed++;
      if (SITES.ribosome.length < 45) SITES.ribosome.push(p.clone());
    }
    I_RIBO.done();

    // Cytosolic glycolytic enzyme homotetramers (sole endogenous ATP generator in M. genitalium)
    const geoGly = synthGeo([[-1.8, -1.8, 0, 2.0, 0], [1.8, -1.8, 0, 2.0, 1], [-1.8, 1.8, 0, 2.0, 1], [1.8, 1.8, 0, 2.0, 0], [0, 0, 1.2, 1.7, 2]], ['#78e08f', '#38ada9', '#b8e994'], 26, 1.28);
    const I_GLY = molBatch('glycolysis', geoGly, cell, true);
    for (let i = 0; i < 28; i++) {
      const u = .22 + .68 * ((i + .5) / 28), phi = i * 2.3999632 + .75, r = Math.max(.45, piriformBaseR(u) - .68) * rr(.45, .92);
      const p = V(Math.cos(phi) * r, Y_BOT + u * H_CELL, Math.sin(phi) * r);
      if (p.x > -.12 && p.z > -.12) continue;
      I_GLY.add(p, qOut(randDir(), i * 1.2), 1); placed++; SITES.glycolysis.push(p.clone());
    }
    I_GLY.done();
  }

  const MOL = {
    glc: ['Glucose import', '#78e08f', 'hex', .22],
    atp: ['Glycolytic ATP', '#ffd15c', 'blob', .22],
    ntp: ['Salvaged nucleosides', '#74b9ff', 'hex', .21],
    sterol_in: ['Scavenged cholesterol', '#ffb35c', 'wave', .22],
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
  let flowsOn = true, flowSpeed = 1, fClock = 0, molHi = null, hi = null;
  function emitFlow(type, pts, tags, dur = 3.0) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop(), curve = new THREE.CatmullRomCurve3(pts), c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b; fKind[i] = ATLAS.idx[type];
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: .04 });
  }
  const pickSite = (k, fb) => SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();
  const STREAM_TIMERS = [
    { rate: 1.7, acc: .3, go: () => { const imp = pickSite('import', V(-2.4, 2.2, -1.6)), gly = pickSite('glycolysis', V(-1.4, 1.8, -1.2)); emitFlow('glc', [imp.clone().multiplyScalar(1.22), imp, gly], ['import', 'membrane', 'glycolysis'], 2.8); } },
    { rate: 2.2, acc: .6, go: () => { const gly = pickSite('glycolysis', V(-1.5, 2.0, -1.1)), dstK = rand() < .48 ? 'gliding' : rand() < .5 ? 'ribosome' : 'rnap', dst = pickSite(dstK, V(-.3, -3.5, -.3)); emitFlow('atp', [gly, gly.clone().lerp(dst, .5).add(V(-.2, 0, -.2)), dst], ['glycolysis', dstK, 'rod'], 3.1); } },
    { rate: 1.5, acc: .4, go: () => { const imp = pickSite('import', V(-2.2, 3.0, -1.4)), dst = rand() < .5 ? pickSite('rnap', V(-1.2, 2.5, -.9)) : pickSite('fork', V(-.95, 1.65, -1.05)); emitFlow('ntp', [imp.clone().multiplyScalar(1.2), imp, dst], ['import', 'rnap', 'fork', 'dna'], 2.9); } },
    { rate: 1.3, acc: .2, go: () => { emitFlow('sterol_in', [pickSite('sialo', V(-.3, -7.2, -.2)), pickSite('nap', V(-.5, -6.2, -.5)), pickSite('sterol', V(-1.8, -.5, -.1))], ['cilium', 'sialo', 'nap', 'sterol', 'membrane'], 3.4); } },
  ];
  function updateFlows(dt) {
    fClock += dt;
    if (dt > 0) STREAM_TIMERS.forEach(s => { s.acc += dt * s.rate; while (s.acc >= 1) { s.acc--; s.go(); } });
    const w = fClock, q = V(), anyHi = molHi || hi;
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k], base = MOL[p.type][3] * 2.3;
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
    controls.maxDistance = 95 * Math.max(1, 1.45 / camera.aspect);
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
    + `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>mRNA</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip'), TIP0 = 'Smallest self-replicating cell (580 kbp, ~482 genes): no cell wall, cholesterol-stiffened bilayer, P140/P110 Nap adhesin crown gripping a human airway cilium, ~150 70S ribosomes, and glycolytic ATP.';
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
    ['cell', V(24.5, 2.2, 27.5), V(0, -1.1, 0)],
    ['nap', V(8.4, -5.6, 9.4), V(-.25, -7.0, -.25)],
    ['rod', V(9.4, -2.5, 10.4), V(-.15, -3.7, -.15)],
    ['nucleoid', V(10.8, 3.0, 11.8), V(-.65, 2.2, -.65)],
  ];
  let view = 0, curView = 'cell', motion = true, sway = 0, last = performance.now();

  document.getElementById('view').onclick = e => { view = (view + 1) % VIEWS.length; const [name, p, t] = VIEWS[view]; curView = name; camera.position.copy(cell.localToWorld(p.clone())); controls.target.copy(cell.localToWorld(t.clone())); e.target.textContent = `View: ${name}`; };
  document.getElementById('look').onclick = e => { organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length]; applyLook(); e.target.textContent = `Membrane: ${organelleLook}`; };
  document.getElementById('cut').onclick = e => { cutOn = !cutOn; caps.visible = cutOn; e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway'; };
  document.getElementById('flow').onclick = e => { flowsOn = !flowsOn; flowPts.visible = flowsOn; e.target.textContent = `Metabolism: ${flowsOn ? 'on' : 'off'}`; };
  const speed = document.getElementById('speed'), spd = document.getElementById('spd');
  speed.oninput = () => { flowSpeed = 2 ** +speed.value; spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`; };
  speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
  document.getElementById('motion').onclick = e => { motion = !motion; e.target.textContent = motion ? 'Pause' : 'Play'; };
  document.getElementById('snap').onclick = () => { composer.render(); const a = document.createElement('a'); a.download = 'mycoplasma-genitalium-realistic.png'; a.href = renderer.domElement.toDataURL('image/png'); a.click(); };

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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0, -1, 0])) };
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
  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0, -.8, 0);
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
      membrane: V(-3.65, 2.35, -.15), sterol: SITES.sterol[2] ?? V(-2.85, 1.05, -.08), lipo: SITES.lipo[4] ?? V(-3.75, 3.25, -1.1),
      nap: SITES.nap[2] ?? V(-.65, -6.35, -.45), sialo: SITES.sialo[2] ?? V(-.35, -7.05, -.22), cilium: V(2.4, -9.55, 1.05),
      button: SITES.button[0] ?? V(-.06, -5.92, -.06), rod: SITES.rod[2] ?? V(-.06, -3.55, -.06), wheel: SITES.wheel[0] ?? V(-.18, -1.08, -.18),
      gliding: SITES.gliding[1] ?? V(-.95, -4.85, -.55), dna: SITES.dna[3] ?? V(-1.35, 1.85, -.95), hu: SITES.hu[2] ?? V(-1.15, 2.55, -1.15),
      fork: SITES.fork[0] ?? V(-.95, 1.65, -1.05), rnap: SITES.rnap[0] ?? V(-1.45, 2.85, -.65), mrna: SITES.mrna[0] ?? V(-1.85, 3.25, -1.05),
      ribosome: SITES.ribosome[1] ?? V(-2.25, 3.55, -1.25), import: SITES.import[2] ?? V(-3.25, 1.55, -1.65), glycolysis: SITES.glycolysis[2] ?? V(-1.85, .85, -1.45),
    };
    let P = { ...base };
    if (vName === 'nap') P = { ...base, membrane: V(-.95, -5.85, -.35), nap: SITES.nap[0] ?? V(-.45, -6.55, -.35), sialo: SITES.sialo[1] ?? V(-.25, -7.12, -.18), cilium: V(-.35, -8.35, -.18), lipo: SITES.lipo[0] ?? V(-1.25, -4.65, -.55) };
    if (vName === 'rod') P = { ...base, button: V(-.06, -5.92, -.06), rod: V(-.06, -3.45, -.06), wheel: V(-.18, -1.08, -.18), gliding: SITES.gliding[0] ?? V(-.88, -5.05, -.48) };
    if (vName === 'nucleoid') P = { ...base, dna: SITES.dna[4] ?? V(-1.25, 2.25, -.95), fork: V(-.95, 1.65, -1.05), rnap: V(-1.45, 2.85, -.65), ribosome: SITES.ribosome[0] ?? V(-1.95, 3.15, -1.15), glycolysis: SITES.glycolysis[4] ?? V(-1.65, 1.25, -1.55) };
    return POINTS[vName] = P;
  }

  const FOCUS = {};
  function focusOf(k) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('cell'), d0 = V(.64, .18, .74).normalize();
    const RAD = { membrane: 4.2, sterol: 2.6, lipo: 2.6, nap: 2.2, sialo: 2.1, cilium: 3.4, button: 1.9, rod: 2.7, wheel: 2.1, gliding: 2.3, dna: 3.1, hu: 2.1, fork: 2.0, rnap: 2.1, mrna: 2.2, ribosome: 2.4, import: 2.4, glycolysis: 2.3 };
    return FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.5, dir: d0.clone() } : null;
  }

  const KIN = { membrane: ['sterol', 'lipo', 'import'], rod: ['button', 'wheel', 'gliding'], dna: ['hu', 'fork', 'rnap', 'mrna'] };
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
    if (m.look && m.look !== organelleLook) { organelleLook = m.look; applyLook(); document.getElementById('look').textContent = `Membrane: ${organelleLook}`; }
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
    flowMat.uniforms.uBoost.value = Math.max(.65, Math.min(1.6, camera.position.distanceTo(controls.target) / 16));
    cell.updateMatrixWorld(); updateCut();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) { const k = hiLevel(now), c = hiCol(hi); REG[hi].mats.forEach(m => { m.emissive.copy(c); m.emissiveIntensity = .25 + .75 * k; }); REG[hi].imp.forEach(m => { m.uniforms.uHi.value = k; }); }
    lens.uniforms.uTime.value = now / 1000; freeMove(dt); controls.update(); tourFrame(dt); composer.render();
    if (EMBED) embedFrame();
  }

  function build() { buildMembraneSterolsAndImporters(); buildNapCiliumAndTerminalOrganelle(); buildNucleoidRibosomesAndMetabolism(); for (let s = 0; s < 120; s++) updateFlows(.05); }
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
      if (m.cmd === 'track' || m.cmd === 'tags') { const list = m.points ?? m.tags ?? []; tagPts = list.map(x => { const [v, k] = Array.isArray(x) ? x : [m.view ?? 'cell', x]; return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k] ?? focusOf(k)?.c) ?? null; }); tagSeq = m.seq; }
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
