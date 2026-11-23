// @ts-nocheck
import * as THREE from 'three';
import { PDB_PROTISTS } from '../molecules/pdb_protists.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  capStrip,
  sweepGeo,
  shellGeo,
  blobGeo,
  cylM,
  atS,
  instanced,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  BASE,
  BACKBONE,
  MRNA,
  col,
} from '../index.js';

runBiologyApp(20261123, ({ random, geometry, dna, rna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, randDir, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // Scene coordinates:
  // - Human biconcave Red Blood Cell (~7.5 um) centered at R0 = (-2.85, -0.15, -1.25)
  // - Invading Plasmodium falciparum merozoite (~1.5 um, magnified for organelle clarity)
  //   centered at M0 = (+2.55, +0.08, +0.95), driving apical-end-first horizontally into the RBC
  // - Floating circular Fe3+-protoporphyrin IX heme & Fe-O hemozoin dimer atomic inset at FE0
  const NM = 0.01;
  const R0 = V(-2.85, -0.15, -1.25);
  const M0 = V(2.55, 0.08, 0.95);
  const FE0 = V(-5.15, -4.15, 4.15);

  // Orthonormal merozoite body frame:
  // AX = apical pole direction (nearly horizontal -X into RBC so full pear profile reads cleanly!)
  // AY = dorsal (+Y), AZ = AX x AY (back; -AZ faces viewer)
  const AX = V(-0.97, -0.04, -0.24).normalize();
  const AY = V(0, 1, 0).addScaledVector(AX, -AX.y).normalize();
  const AZ = AX.clone().cross(AY).normalize();
  const mPos = (a: number, y: number, b: number) =>
    M0.clone().addScaledVector(AX, a).addScaledVector(AY, y).addScaledVector(AZ, b);

  // Organelle centers inside the cutaway merozoite (verified pairwise non-overlapping)
  const AP0 = mPos(0.10, 0.90, 0.14);   // 4-membrane apicoplast (upper-mid cutaway bay)
  const DV0 = mPos(-0.06, -0.84, 0.06); // Acidic digestive vacuole + hemozoin stack (lower-mid bay)
  const NU0 = mPos(-1.38, 0.06, 0.18);  // True eukaryotic nucleus (14 linear chromosomes, posterior)

  // Exact 6 camera views required by Phase 12B contract
  const VIEWS = [
    ['overview', V(3.8, 5.2, 28.8), V(-0.45, -0.45, 0.15)],
    ['invasion', mPos(1.75, 0.05, 0.0).add(V(1.65, 1.05, 7.65)), mPos(1.75, 0.02, 0.0)],
    ['core', mPos(-0.75, 0.05, 0.10).add(V(2.55, 1.45, 7.85)), mPos(-0.75, 0.05, 0.10)],
    ['apicoplast', V(AP0.x + 1.95, AP0.y + 1.02, AP0.z + 3.75), AP0.clone()],
    ['hemozoin', V(DV0.x + 1.95, DV0.y + 0.42, DV0.z + 3.75), DV0.clone()],
    ['atoms', V(FE0.x + 1.65, FE0.y + 0.60, FE0.z + 6.15), FE0.clone()],
  ];
  let view = 0;
  let curView = 'overview';

  // Cinema dark-field WebGL2 microscopy stage (balanced exposure & crisp bloom so wet-gel never washes out!)
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 520,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#1e1026',
    bgMid: '#0a0714',
    bgOuter: '#020206',
    keyColor: '#ffefe0',
    keyIntensity: 2.35,
    rimColor: '#5ec8ff',
    rimIntensity: 1.45,
    lampColor: '#ff9c78',
    lampIntensity: 10.5,
    lampPos: [2.8, 2.2, 6.2],
    bloomStrength: 0.16,
    bloomRadius: 0.44,
    bloomThreshold: 0.92,
    exposure: 0.88,
    bokehCount: 230,
    bokehColor: '#ff708c',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key } = studio;

  // Subtle balanced accent fills for the merozoite cutaway & crimson RBC interior
  const meroLamp = new THREE.PointLight('#64dcff', 4.0, 16, 2);
  meroLamp.position.set(M0.x + 1.6, M0.y + 1.2, M0.z + 3.6);
  const rbcLamp = new THREE.PointLight('#ff3b52', 6.0, 22, 2);
  rbcLamp.position.set(R0.x + 2.4, R0.y + 1.2, R0.z + 4.8);
  scene.add(meroLamp, rbcLamp);

  const cell = new THREE.Group();
  const caps = new THREE.Group();
  scene.add(cell);
  cell.add(caps);

  // Synchronized multi-compartment cutaway planes:
  // 1) RBC standard front-right 90-deg cutaway around R0
  studio.CUT_LOCAL[0].set(V(-1, 0, 0), R0.x);
  studio.CUT_LOCAL[1].set(V(0, 0, -1), R0.z);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  // 2) Merozoite + PVM clean 118-deg front-facing cutaway (angA=18 deg to angB=136 deg)
  //    exposing the FULL side-profile interior from pointed apical nose to posterior nucleus!
  const ANG_A = (18 * Math.PI) / 180;
  const ANG_B = (136 * Math.PI) / 180;
  const RAY_A = V(Math.cos(ANG_A), 0, Math.sin(ANG_A)).normalize();
  const RAY_B = V(Math.cos(ANG_B), 0, Math.sin(ANG_B)).normalize();
  const NORM_A = V(Math.sin(ANG_A), 0, -Math.cos(ANG_A)).normalize();
  const NORM_B = V(-Math.sin(ANG_B), 0, Math.cos(ANG_B)).normalize();

  const MERO_CUT_LOCAL = [
    new THREE.Plane().setFromNormalAndCoplanarPoint(NORM_A, M0),
    new THREE.Plane().setFromNormalAndCoplanarPoint(NORM_B, M0),
  ];
  const MERO_CUT = MERO_CUT_LOCAL.map(p => p.clone());
  const MERO_CLIP = { clippingPlanes: MERO_CUT, clipIntersection: true, clipShadows: true };

  // 3) Synchronized front-right 90-deg local cutaways for Nucleus, 4-Membrane Apicoplast, and Digestive Vacuole
  const makeLocalCut = (center: THREE.Vector3) => {
    const local = [new THREE.Plane(V(-1, 0, 0), center.x), new THREE.Plane(V(0, 0, -1), center.z)];
    const world = local.map(p => p.clone());
    return {
      local,
      world,
      clip: { clippingPlanes: world, clipIntersection: true, clipShadows: true },
    };
  };
  const NU_CUT_SET = makeLocalCut(NU0);
  const AP_CUT_SET = makeLocalCut(AP0);
  const DV_CUT_SET = makeLocalCut(DV0);
  const ALL_EXTRA_CUTS = [
    { local: MERO_CUT_LOCAL, world: MERO_CUT },
    NU_CUT_SET,
    AP_CUT_SET,
    DV_CUT_SET,
  ];

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    ALL_EXTRA_CUTS.forEach(({ local, world }) => {
      world.forEach((p, i) => {
        p.copy(local[i]);
        if (!cutOn) p.constant = 1e4;
        p.applyMatrix4(cell.matrixWorld);
      });
    });
  }

  // Generalized multi-band cross-section strip for any angled vertical cutaway half-plane through `center`
  function capStripRay(
    center: THREE.Vector3,
    rFn: (d: THREE.Vector3) => number,
    ray: THREE.Vector3,
    faceNormal: THREE.Vector3,
    thick: number,
    layers: ReadonlyArray<readonly [number, number, string]>,
    n = 180,
    dirFilter?: (d: THREE.Vector3) => boolean
  ): THREE.BufferGeometry {
    const pos: number[] = [];
    const cols: number[] = [];
    const nor: number[] = [];
    const idx: number[] = [];
    const c = new THREE.Color();
    const nrm = faceNormal.clone().normalize();
    const off = nrm.clone().multiplyScalar(0.005);
    const dirAt = (t: number) => {
      const a = t * Math.PI;
      const sa = Math.sin(a);
      return V(ray.x * sa, Math.cos(a), ray.z * sa).normalize();
    };
    let base = 0;
    layers.forEach(([f0, f1, hex]) => {
      c.set(hex);
      const valid: boolean[] = [];
      for (let i = 0; i <= n; i++) {
        const d = dirAt(i / n);
        const ok = !dirFilter || dirFilter(d);
        valid.push(ok);
        const R = rFn(d);
        for (const f of [f0, f1]) {
          const p = center.clone().addScaledVector(d, R - f * thick).add(off);
          pos.push(p.x, p.y, p.z);
          cols.push(c.r, c.g, c.b);
          nor.push(nrm.x, nrm.y, nrm.z);
        }
      }
      for (let i = 0; i < n; i++) {
        if (!valid[i] || !valid[i + 1]) continue;
        const a = base + i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
      base += (n + 1) * 2;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setIndex(idx);
    return g;
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.9);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // Exact 20 partKeys required by Phase 12B contract & guided tour
  const PARTS = [
    ['rbc', 'Human red blood cell (biconcave erythrocyte)', '#e8485a'],
    ['pvm', 'Parasitophorous vacuole membrane (PVM)', '#5ee8ff'],
    ['imc', 'Inner membrane complex (alveolar IMC sacs)', '#a982ff'],
    ['apical_complex', 'Apical polar rings & invasion apex', '#ffd25c'],
    ['rhoptries', 'Twin tear-drop rhoptries (RON2 & lipids)', '#e64d94'],
    ['micronemes', 'Cigar-shaped micronemes (AMA1 & PfRH5)', '#5ce6c8'],
    ['moving_junction', 'AMA1–RON2 moving junction ring (PDB 3SRI)', '#ff73c6'],
    ['pfrh5', 'PfRH5–Basigin docking bridge (PDB 4U0Q)', '#78ff9e'],
    ['glideosome', 'PfMyoA–MTIP glideosome motor (PDB 6YCX)', '#ffcf4d'],
    ['actin', 'Sub-pellicular PfActI actin tracks (PDB 4CBU)', '#4ef2a8'],
    ['nucleus', 'Eukaryotic nucleus (14 linear chromosomes)', '#8875ff'],
    ['ribosome_80s', 'Cytosolic 80S eukaryotic ribosomes', '#ffcb80'],
    ['mito', 'Single branched tubular mitochondrion (6 kb)', '#ff8c5a'],
    ['apicoplast', '4-membrane apicoplast stroma & 70S ribosomes', '#52f2a8'],
    ['apicoplast_membranes', '4 concentric secondary-endosymbiosis membranes', '#6ceaff'],
    ['apicoplast_dna', 'Circular 35 kb apicoplast dsDNA genome', '#ffe066'],
    ['digestive_vacuole', 'Acidic digestive vacuole (pH ~5.2)', '#c978ff'],
    ['hemoglobin', 'Human hemoglobin tetramers (PDB 1GZX)', '#ff5464'],
    ['hemozoin', 'Stacked hemozoin (β-hematin) biocrystals', '#b37a52'],
    ['iron_atom', 'Atomic Fe³⁺–heme & Fe–O hemozoin dimer inset', '#ff9e42'],
  ];

  const INFO = {
    rbc: ['Anucleate ~7.5 µm biconcave human erythrocyte membrane braced by a spectrin-actin cortex', 'Transports oxygen via densely packed hemoglobin — invaded and remodeled by Plasmodium merozoites'],
    pvm: ['Host-derived glowing parasitophorous vacuole membrane sealing the parasite inside the RBC', 'Shields the eukaryotic parasite from host cytoplasm while exporting host-remodeling effector proteins'],
    imc: ['Flattened double-membrane alveolar sacs beneath the merozoite plasma membrane (Alveolata hallmark)', 'Anchors the sub-pellicular glideosome motor and stiffens the invasive merozoite pellicle'],
    apical_complex: ['Concentric apical polar rings and sub-pellicular microtubule ribs crowning the invasion nose', 'Organizes targeted rhoptry and microneme secretion directly onto the erythrocyte entry site'],
    rhoptries: ['Paired club-shaped secretory organelles tapering into necks threaded into the apical polar ring', 'Injects RON2 into the RBC membrane and releases lipids that build the nascent parasitophorous vacuole'],
    micronemes: ['Compact cigar-shaped calcium-triggered secretory organelles clustered around the rhoptry necks', 'Discharges PfRH5 and AMA1 surface adhesins onto the merozoite apex during host recognition'],
    moving_junction: ['Tight ring of parasite AMA1 bound to rhoptry-injected RON2 (PDB 3SRI) cinching the invasion collar', 'Acts as a self-laid molecular anchor ring sliding backward as the merozoite pulls inside the RBC'],
    pfrh5: ['Kite-shaped Plasmodium PfRH5 ligand docked tightly onto human RBC Basigin/CD147 (PDB 4U0Q)', 'Executes the essential species-specific recognition step triggering Ca2+ influx and junction assembly'],
    glideosome: ['Sub-pellicular PfMyoA–MTIP–ELC myosin motor complex (PDB 6YCX) anchored to the IMC via GAP45', 'Hydrolyzes ATP to pull short actin filaments rearward, driving the merozoite forward through the junction'],
    actin: ['Short dynamic Plasmodium PfActI microfilaments (PDB 4CBU) lying between plasma membrane and IMC', 'Transmits PfMyoA motor force to surface adhesins without using cilia or flagella'],
    nucleus: ['True eukaryotic double-membrane nuclear envelope with pores housing 23.3 Mbp across 14 linear chromosomes', 'Directs eukaryotic transcription and splicing — distinguishing Plasmodium from bacterial parasites'],
    ribosome_80s: ['Large cytosolic eukaryotic 80S ribosomes (60S + 40S subunits) distributed in polysome clusters', 'Translates parasite proteins and resists prokaryotic-targeted beta-lactam and macrolide antibiotics'],
    mito: ['Single continuous branched tubular mitochondrion carrying a minimal 6 kb genome', 'Maintains inner-membrane potential for pyrimidine biosynthesis and cooperates with the apicoplast'],
    apicoplast: ['Non-photosynthetic relict chloroplast stroma holding bacterial-type 70S ribosomes and metabolic enzymes', 'Synthesizes essential isoprenoids (IPP via MEP/DOXP), fatty acids (FAS-II), and heme precursors'],
    apicoplast_membranes: ['Four distinct concentric lipid bilayers wrapping the apicoplast stroma in cross-section', 'Structural proof of secondary endosymbiosis: an ancestral protist engulfed a photosynthetic red alga'],
    apicoplast_dna: ['Compact 35 kb circular dsDNA plastid genome encoding core bacterial-like 70S ribosomal components', 'Explains delayed-death killing by doxycycline, which stalls apicoplast translation without hitting host 80S'],
    digestive_vacuole: ['Acidic lysosome-like compartment (pH ~5.2) fed via cytostomal uptake of host RBC hemoglobin', 'Cleaves globin chains into free amino acids using plasmepsin and falcipain proteases'],
    hemoglobin: ['Human alpha2-beta2 oxy-hemoglobin tetramers carrying four iron-protoporphyrin IX heme groups (PDB 1GZX)', 'Endocytosed by the parasite as its primary amino acid supply, releasing reactive toxic free heme'],
    hemozoin: ['Insoluble dark rectangular biocrystals of stacked beta-hematin iron-propionate heme dimers', 'Neutralizes toxic free heme inside the digestive vacuole; primary target of chloroquine antimalarials'],
    iron_atom: ['Atomic view of central Fe3+ coordinated by four porphyrin nitrogens and linked via reciprocal Fe–O propionate bonds', 'Shows at single-atom scale how toxic reactive Fe3+-heme locks into inert crystalline hemozoin dimers'],
  };

  const REG = {};
  const reg = (k, m) => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    (m.isShaderMaterial ? r.imp : r.mats).push(m);
    return m;
  };
  const phys = (o, clipObj = CLIP) => new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.84, ...clipObj, ...o });
  const protMat = (k, clip = true, extra = {}, clipPlanes = MERO_CUT) => {
    const m = phys(
      {
        vertexColors: true,
        roughness: 0.38,
        metalness: 0.04,
        clearcoat: 0.30,
        clearcoatRoughness: 0.30,
        sheen: 0.36,
        sheenColor: '#fff4fa',
        normalMap: protBump,
        normalScale: new THREE.Vector2(0.36, 0.36),
        side: THREE.DoubleSide,
        clippingPlanes: clip ? clipPlanes : null,
        clipIntersection: true,
        ...extra,
      },
      {}
    );
    return reg(k, m);
  };
  const sculpt = (k, parent = cell, clip = false, extra = {}, clipPlanes = MERO_CUT) =>
    makeSculptedMesh(protMat(k, clip, extra, clipPlanes), parent);
  const molBatch = (k, geo, parent = cell, clip = false, extra = {}, clipPlanes = MERO_CUT) =>
    makeMolBatch(geo, protMat(k, clip, extra, clipPlanes), parent);

  const shells = [];
  const LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  let placed = 0;

  function cinemaShellMat(k, solidHex, gelHex, clipObj, opts = {}) {
    const m = makeCinemaMembraneMat(clipObj, opts.normalMap ?? bump(12, 10), {
      color: gelHex,
      attenuationColor: opts.attenCol ?? solidHex,
      attenuationDistance: opts.attenDist ?? 4.6,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.28,
      iridescence: opts.iridescence ?? 0.54,
      thickness: opts.thickness ?? 0.50,
      roughness: opts.roughness ?? 0.12,
      sheenColor: opts.sheenColor ?? '#ffe6f8',
      normalScale: opts.normalScale ?? 0.24,
    });
    m.userData.cols = { solid: new THREE.Color(solidHex), gel: new THREE.Color(gelHex) };
    shells.push(m);
    return reg(k, m);
  }

  function applyLook() {
    const gel = organelleLook === 'gel';
    const see = organelleLook === 'see-through';
    shells.forEach(m => {
      m.transmission = gel ? 1 : 0;
      m.transparent = see;
      m.opacity = see ? 0.40 : 1;
      m.depthWrite = !see;
      m.side = gel ? THREE.FrontSide : THREE.DoubleSide;
      m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid);
      m.needsUpdate = true;
    });
  }

  const impMats = [];
  const shade = (mesh, cast = true, receive = true) => {
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  };
  const grown = a => {
    const b = new Float32Array(a.length * 2);
    b.set(a);
    return b;
  };

  function balls(k, parent = cell, clip = false, cutPlanes = CUT) {
    let n = 0, cap = 1 << 13;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 12;
    let A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap);
    let C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
    return {
      stick(a, b, r, c1, c2) {
        if (m === scap) {
          scap *= 2;
          A = grown(A); B = grown(B); R = grown(R); C1 = grown(C1); C2 = grown(C2);
        }
        const i = m * 3;
        A[i] = a.x; A[i + 1] = a.y; A[i + 2] = a.z;
        B[i] = b.x; B[i + 1] = b.y; B[i + 2] = b.z;
        C1[i] = c1.r; C1[i + 1] = c1.g; C1[i + 2] = c1.b;
        C2[i] = c2.r; C2[i + 1] = c2.g; C2[i + 2] = c2.b;
        R[m++] = r;
      },
      add(p, s, c) {
        if (n === cap) {
          cap *= 2;
          pos = grown(pos); sz = grown(sz); cl = grown(cl);
        }
        const i = n * 3;
        pos[i] = p.x; pos[i + 1] = p.y; pos[i + 2] = p.z;
        cl[i] = c.r; cl[i + 1] = c.g; cl[i + 2] = c.b;
        sz[n++] = s;
      },
      done() {
        if (n) {
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.BufferAttribute(pos.slice(0, n * 3), 3));
          g.setAttribute('size', new THREE.BufferAttribute(sz.slice(0, n), 1));
          g.setAttribute('icol', new THREE.BufferAttribute(cl.slice(0, n * 3), 3));
          const mat = makeCinemaImpostorMat(cutPlanes, clip);
          impMats.push(mat);
          reg(k, mat);
          const pts = new THREE.Points(g, mat);
          pts.frustumCulled = false;
          parent.add(pts);
        }
        if (m) {
          const sg = new THREE.InstancedBufferGeometry();
          sg.setIndex([0, 1, 2, 2, 1, 3]);
          sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
          sg.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 0, 1, 1, 1]), 2));
          [['aA', A, 3], ['aB', B, 3], ['aR', R, 1], ['aC1', C1, 3], ['aC2', C2, 3]].forEach(([nm, arr, d]) =>
            sg.setAttribute(nm, new THREE.InstancedBufferAttribute(arr.slice(0, m * d), d))
          );
          sg.instanceCount = m;
          const mat = makeCinemaStickMat(cutPlanes, clip);
          impMats.push(mat);
          reg(k, mat);
          const rods = new THREE.Mesh(sg, mat);
          rods.frustumCulled = false;
          parent.add(rods);
        }
        return n + m;
      },
    };
  }

  // Synthetic cryo-EM Gaussian surface builder (for sculpted 80S cytosolic & 70S plastid ribosomes)
  function synthGeo(beads, colors, maxDim = 26, scale = 1, nm = 0.022) {
    const n = beads.length;
    const xyz = new Int16Array(n * 3);
    const kind = new Uint8Array(n);
    const rad = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const [x, y, z, r = 1.6, grp = 0] = beads[i];
      xyz[i * 3] = Math.round(x * 100);
      xyz[i * 3 + 1] = Math.round(y * 100);
      xyz[i * 3 + 2] = Math.round(z * 100);
      kind[i] = grp << 2;
      rad[i] = Math.max(5, Math.min(255, Math.round(r / 0.062)));
    }
    const cols = colors.map(col);
    return buildPdbSurfaceGeo({ n, xyz, kind, rad }, { nm, scale, maxDim, colorFn: g => cols[g % cols.length] });
  }

  const ortho = (n: THREE.Vector3) => {
    const u = n.clone().normalize();
    const ref = Math.abs(u.y) < 0.85 ? V(0, 1, 0) : V(1, 0, 0);
    return across(ref, u).normalize();
  };
  const qOut = (n, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };
  const qFromZ = (n, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), twist)) : q;
  };

  // Site anchors & animated sub-pellicular motor registries
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));
  const glideosomeActors: Array<{ obj: THREE.Object3D; basePos: THREE.Vector3; axis: THREE.Vector3; baseQuat: THREE.Quaternion; phase: number }> = [];
  let junctionHaloGroup: THREE.Group | null = null;
  let ironSparkGroup: THREE.Group | null = null;

  // -------------------------------------------------------------------------
  // Parametric Organic Shell Fields: Biconcave Human RBC & Pear-Shaped Merozoite
  // -------------------------------------------------------------------------
  // Star-shaped biconcave erythrocyte radius function around R0 (plump rim, sunken central dimples)
  const rbcR = (d: THREE.Vector3) => {
    const ay = Math.abs(d.y);
    const s2 = Math.max(0, 1 - ay * ay);
    const aEq = 6.65;
    const bEff = 2.95 - 1.72 * Math.pow(ay, 1.52);
    const base = 1 / Math.sqrt(s2 / (aEq * aEq) + (ay * ay) / (bEff * bEff));
    const n = fbm(d.x * 1.9 + 4.1, d.y * 1.9 - 2.7, d.z * 1.9 + 6.3, 3);
    return base * (1 + 0.018 * (n - 0.5) * 2);
  };
  const inRbcWedge = (p: THREE.Vector3) => p.x > R0.x + 0.04 && p.z > R0.z + 0.04;

  // Pear-shaped Plasmodium falciparum merozoite radius function around M0 (unmistakable elongated apical pear!)
  const meroR = (d: THREE.Vector3) => {
    const u = d.dot(AX); // +1 apical tip, -1 posterior pole
    const w2 = Math.max(0, 1 - u * u);
    const Leff = u >= 0 ? 3.16 : 2.52;
    const taper = 1 - 0.36 * Math.pow(Math.max(0, u), 1.32);
    // Subtle waist cinch right at the AMA1-RON2 moving junction (u ~ +0.26)
    const cinch = 1 - 0.060 * Math.exp(-Math.pow((u - 0.25) / 0.14, 2));
    const Rrad = 1.94 * taper * cinch;
    const base = 1 / Math.sqrt((u * u) / (Leff * Leff) + w2 / (Rrad * Rrad));
    const n = fbm(d.x * 2.4 - 5.2, d.y * 2.4 + 3.8, d.z * 2.4 - 1.9, 3);
    return base * (1 + 0.015 * (n - 0.5) * 2);
  };
  const meroSurf = (d: THREE.Vector3, offset = 0) => {
    const u = d.clone().normalize();
    const r = meroR(u) + offset;
    return { p: M0.clone().addScaledVector(u, r), n: u, r };
  };
  const inMeroWedge = (p: THREE.Vector3) => {
    const rel = p.clone().sub(M0);
    return rel.dot(NORM_A) < -0.02 && rel.dot(NORM_B) < -0.02;
  };

  // Glowing cyan-iridescent PVM wrapping the invading merozoite with a slight vacuolar lumen clearance
  const pvmR = (d: THREE.Vector3) => {
    const u = d.dot(AX);
    const flare = u < 0.22 ? 0.08 * Math.exp(-Math.pow((u - 0.12) / 0.24, 2)) : 0;
    return meroR(d) + 0.30 + flare;
  };

  // -------------------------------------------------------------------------
  // Build ALL 5 Real RCSB PDB Cryo-EM / Crystal Surface Templates from PDB_PROTISTS
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // 1. Human oxy-hemoglobin tetramer WITH HEME groups (PDB 1GZX, 4 chains, part===3 = HEM cofactor!)
    const geoHemoglobin = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'hemoglobin'), {
      nm: NM,
      scale: 5.5,
      maxDim: 26,
      sigmaAng: 3.9,
      iso: 0.38,
      aoStrength: 0.62,
      colorFn: (grp, part) =>
        part === 3 ? col('#ffa324') : grp % 2 === 0 ? col('#a8182b') : col('#db3549'),
    });

    // 2. PfMyoA-MTIP-ELC Glideosome motor complex (PDB 6YCX, 4 chains)
    const glideCols = ['#f2b224', '#2ec9eb', '#e8548c', '#38d99c'].map(col);
    const geoGlideosome = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'glideosome'), {
      nm: NM,
      scale: 4.5,
      maxDim: 30,
      sigmaAng: 4.8,
      iso: 0.36,
      aoStrength: 0.62,
      colorFn: grp => glideCols[grp % glideCols.length],
    });

    // 3. AMA1-RON2 Moving Junction complex (PDB 3SRI, chain 0 = AMA1 cyan, chain 1 = RON2 hot magenta)
    const geoAma1Ron2 = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'ama1_ron2'), {
      nm: NM,
      scale: 5.8,
      maxDim: 26,
      sigmaAng: 3.8,
      iso: 0.38,
      aoStrength: 0.58,
      colorFn: grp => (grp === 0 ? col('#2cd4f5') : col('#e83b98')),
    });

    // 4. PfRH5-Basigin erythrocyte docking bridge (PDB 4U0Q, 4 chains: PfRH5 emerald-gold + Basigin crimson-rose)
    const rh5Cols = ['#3de378', '#e6395a', '#f2be35', '#f26b88'].map(col);
    const geoPfRh5 = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'pfrh5_basigin'), {
      nm: NM,
      scale: 4.9,
      maxDim: 28,
      sigmaAng: 4.4,
      iso: 0.37,
      aoStrength: 0.60,
      colorFn: grp => rh5Cols[grp % rh5Cols.length],
    });

    // 5. Plasmodium PfActI actin protomer dimer (PDB 4CBU, 2 chains)
    const actCols = [col('#26cf84'), col('#6ef2b4')];
    const geoPfAct1 = buildPdbSurfaceGeo(pdb.getModel(PDB_PROTISTS, 'pfact1'), {
      nm: NM,
      scale: 4.4,
      maxDim: 24,
      sigmaAng: 3.7,
      iso: 0.39,
      aoStrength: 0.56,
      colorFn: grp => actCols[grp & 1],
    });

    // Sculpted bilobed eukaryotic 80S cytosolic ribosome (60S warm amber-gold crown + 40S ivory-rose head)
    const geoRibo80 = synthGeo(
      [
        [0, -1.7, 0, 2.9, 0],
        [-2.8, -1.0, 0.7, 2.2, 0],
        [2.9, -0.9, -0.6, 2.1, 0],
        [0.1, -3.2, -0.8, 2.2, 2],
        [3.7, 1.0, -0.4, 1.4, 2],
        [-3.4, 0.7, -0.5, 1.4, 2],
        [0.4, 2.4, 0.9, 2.3, 1],
        [-2.0, 2.6, 0.6, 1.9, 1],
        [2.2, 2.0, 1.1, 1.7, 1],
        [-0.2, 0.6, -0.9, 1.5, 2],
      ],
      ['#ffbf66', '#ffe8bd', '#e37e90'],
      28,
      0.72,
      0.022
    );

    // Smaller bacterial-type 70S plastid ribosome residing inside the 4-membrane apicoplast
    const geoRibo70Plastid = synthGeo(
      [
        [0, -1.4, 0, 2.4, 0],
        [-2.2, -0.8, 0.5, 1.7, 0],
        [2.3, -0.7, -0.5, 1.6, 0],
        [0.3, 1.9, 0.7, 1.8, 1],
        [-1.6, 2.0, 0.4, 1.4, 1],
        [1.7, 1.6, 0.8, 1.3, 1],
      ],
      ['#5cf2b8', '#d4ffeb'],
      22,
      0.42,
      0.020
    );

    return {
      geoHemoglobin,
      geoGlideosome,
      geoAma1Ron2,
      geoPfRh5,
      geoPfAct1,
      geoRibo80,
      geoRibo70Plastid,
    };
  }

  // -------------------------------------------------------------------------
  // 1. Cutaway Biconcave Human Red Blood Cell (RBC) + Real PDB 1GZX Hemoglobin Pool
  // -------------------------------------------------------------------------
  function buildRbcAndHemoglobin(T) {
    // Lush translucent ruby-crimson wet-gel erythrocyte membrane
    const rbcOuterMat = cinemaShellMat('rbc', '#9e1326', '#eb5c6e', CLIP, {
      attenCol: '#7a0a1a',
      attenDist: 3.2,
      sssColor: '#e8334c',
      sssIntensity: 0.24,
      iridescence: 0.24,
      thickness: 0.62,
      roughness: 0.11,
      sheenColor: '#ff9ea8',
      normalMap: bump(14, 10),
      normalScale: 0.24,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(R0, rbcR, 152), rbcOuterMat), true, true));

    // Warm deep-crimson inner cortical spectrin face so the biconcave bowl reads with cinema depth
    const rbcInnerMat = reg(
      'rbc',
      applyBacklitSSS(
        phys({
          color: '#3b0913',
          roughness: 0.72,
          clearcoat: 0.16,
          normalMap: bump(12, 9),
          normalScale: new THREE.Vector2(0.24, 0.24),
          side: THREE.BackSide,
        }),
        '#d9364e',
        0.16,
        2.5
      )
    );
    cell.add(new THREE.Mesh(shellGeo(R0, d => rbcR(d) - 0.16, 108), rbcInnerMat));

    // Crisp red-blood-cell lipid bilayer + sub-membrane spectrin cutaway cap strip
    const RBC_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.26, '#eb6577'],  // Outer phosphatidylcholine leaflet
      [0.26, 0.54, '#3d0914'], // Hydrophobic core
      [0.54, 0.78, '#d9455a'], // Inner phosphatidylserine leaflet
      [0.78, 1.0, '#962c3f'],  // Spectrin-ankyrin cortical meshwork
    ];
    const rbcCapMat = reg(
      'rbc',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.36,
        metalness: 0.04,
        emissive: '#2b050c',
        emissiveIntensity: 0.16,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(R0, rbcR, ax, 0.16, RBC_LAYERS, 220), rbcCapMat));
    }

    // Subtle hexagonal spectrin cortical mesh struts lining the exposed inner RBC rim + Basigin surface receptors
    const S_RBC = sculpt('rbc', cell, true, { roughness: 0.42, emissive: '#400b16', emissiveIntensity: 0.18 }, CUT);
    const cSpec = col('#d96678');
    for (let ring = 0; ring < 3; ring++) {
      const yOff = -1.25 + ring * 1.25;
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k <= 36; k++) {
        const th = (k / 36) * Math.PI * 2;
        const d = V(Math.cos(th), yOff * 0.26, Math.sin(th)).normalize();
        const r = rbcR(d) - 0.22;
        const pt = R0.clone().addScaledVector(d, r);
        if (!inRbcWedge(pt)) {
          pts.push(pt);
          if (k % 6 === 0 && SITES.rbc.length < 28) SITES.rbc.push(R0.clone().addScaledVector(d, r + 0.24));
        }
      }
      if (pts.length >= 4) S_RBC.tube(pts, 0.026, 0.026, cSpec, col('#ff9aa6'), 6, false);
    }
    S_RBC.done();

    // Real PDB 1GZX Human Hemoglobin Tetramers densely shimmering throughout the cutaway crimson RBC cytosol!
    const I_HB = molBatch('hemoglobin', T.geoHemoglobin, cell, false, {
      emissive: '#380710',
      emissiveIntensity: 0.12,
      roughness: 0.34,
      clearcoat: 0.42,
    });

    const hbSpots: THREE.Vector3[] = [];
    let hbCount = 0;
    for (let guard = 0; hbCount < 118 && guard < 2400; guard++) {
      const d = randDir();
      const maxR = rbcR(d) - 0.48;
      const frac = 0.22 + 0.74 * Math.cbrt(rand());
      const p = R0.clone().addScaledVector(d, maxR * frac);
      // Keep hemoglobin neatly inside the intact RBC cavity (and slightly exposed near the cutaway face!)
      if (p.x > R0.x + 0.15 && p.z > R0.z + 0.15) continue;
      // Avoid intruding directly into the merozoite's PVM volume
      if (p.distanceTo(M0) < 3.25) continue;
      if (hbSpots.some(h => h.distanceToSquared(p) < 0.44)) continue;
      I_HB.add(p, qOut(randDir(), rr(0, 6.28)), rr(0.88, 1.08));
      hbSpots.push(p);
      hbCount++;
      placed++;
      if (SITES.hemoglobin.length < 34 && (p.x > R0.x - 2.6 || p.z > R0.z - 2.4)) {
        SITES.hemoglobin.push(p.clone());
      }
    }

    // Extra showcase hemoglobin tetramers poised right along the apical invasion & cytostome feeding zone!
    const feedHb = [
      mPos(2.75, -0.65, -0.75),
      mPos(2.35, -1.05, -0.55),
      mPos(1.85, -1.25, -0.35),
      mPos(1.30, -1.32, -0.18),
      mPos(0.75, -1.25, -0.04),
    ];
    feedHb.forEach((p, idx) => {
      I_HB.add(p, qOut(randDir(), idx * 1.1), 0.96);
      SITES.hemoglobin.push(p.clone());
      placed++;
    });

    // Endocytosed hemoglobin tetramers entering the acidic digestive vacuole (upper-left lumen of DV0)
    const dvHb = [
      DV0.clone().add(V(-0.34, 0.30, 0.06)),
      DV0.clone().add(V(-0.18, 0.42, -0.14)),
      DV0.clone().add(V(-0.42, 0.08, -0.18)),
      DV0.clone().add(V(-0.14, 0.24, -0.32)),
      DV0.clone().add(V(-0.28, -0.06, -0.36)),
      DV0.clone().add(V(0.06, 0.36, -0.18)),
    ];
    dvHb.forEach((p, idx) => {
      I_HB.add(p, qOut(randDir(), idx * 1.3), 0.72);
      SITES.hemoglobin.push(p.clone());
      placed++;
    });

    I_HB.done();
  }

  // -------------------------------------------------------------------------
  // 2. Merozoite Pellicle: Glowing Cyan PVM + Plasma Membrane + Alveolar IMC
  // -------------------------------------------------------------------------
  function buildPvmAndMerozoitePellicle() {
    // Glowing cyan-iridescent Parasitophorous Vacuole Membrane (PVM) enveloping the invading parasite
    const pvmMat = cinemaShellMat('pvm', '#0e85a6', '#56d2ed', MERO_CLIP, {
      attenCol: '#0a6582',
      attenDist: 2.8,
      sssColor: '#36d6f5',
      sssIntensity: 0.20,
      iridescence: 0.56,
      thickness: 0.38,
      roughness: 0.11,
      sheenColor: '#9cf2ff',
      normalMap: bump(12, 9),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(M0, pvmR, 128), pvmMat), true, true));

    // Crisp cyan glowing PVM cutaway rim caps along RAY_A and RAY_B
    const PVM_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.35, '#5ce6ff'],
      [0.35, 0.68, '#0c4357'],
      [0.68, 1.0, '#32bfe0'],
    ];
    const pvmCapMat = reg(
      'pvm',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.34,
        emissive: '#083342',
        emissiveIntensity: 0.18,
        side: THREE.DoubleSide,
      })
    );
    caps.add(new THREE.Mesh(capStripRay(M0, pvmR, RAY_A, NORM_A.clone().negate(), 0.085, PVM_LAYERS, 160), pvmCapMat));
    caps.add(new THREE.Mesh(capStripRay(M0, pvmR, RAY_B, NORM_B.clone().negate(), 0.085, PVM_LAYERS, 160), pvmCapMat));

    // Translucent host-to-PVM remodeling tether flares & exported PTEX translocon pores on PVM
    const S_PVM = sculpt('pvm', cell, false, {
      emissive: '#0d4c5e',
      emissiveIntensity: 0.18,
      roughness: 0.32,
      clearcoat: 0.45,
    });
    const pvmDirs = [
      V(-0.62, 0.65, 0.44), V(-0.48, -0.68, 0.54), V(0.18, 0.86, -0.46),
      V(0.24, -0.84, -0.48), V(-0.88, 0.36, -0.30), V(-0.86, -0.34, -0.38),
      V(0.76, 0.55, -0.34), V(0.78, -0.52, -0.34),
    ];
    pvmDirs.forEach(raw => {
      const d = raw.clone().normalize();
      const p = M0.clone().addScaledVector(d, pvmR(d) + 0.02);
      if (inMeroWedge(p)) return;
      S_PVM.ring(p, d, 0.14, 0.042, col('#4cdcf2'), 18, 8);
      S_PVM.add(p.clone().addScaledVector(d, 0.04), 0.10, col('#a8f4ff'));
      SITES.pvm.push(p.clone());
      placed++;
    });
    // Record prominent front-cutaway PVM rim anchors for tags & camera focus
    for (let k = 1; k < 6; k++) {
      const a = (k / 6) * Math.PI;
      const dA = V(RAY_A.x * Math.sin(a), Math.cos(a), RAY_A.z * Math.sin(a)).normalize();
      const dB = V(RAY_B.x * Math.sin(a), Math.cos(a), RAY_B.z * Math.sin(a)).normalize();
      SITES.pvm.push(M0.clone().addScaledVector(dA, pvmR(dA)), M0.clone().addScaledVector(dB, pvmR(dB)));
    }
    S_PVM.done();

    // Parasite Plasma Membrane + Sub-Pellicular Alveolar Inner Membrane Complex (IMC)
    const pmMat = cinemaShellMat('imc', '#53359e', '#a88ce8', MERO_CLIP, {
      attenCol: '#422685',
      attenDist: 2.8,
      sssColor: '#9c78eb',
      sssIntensity: 0.18,
      iridescence: 0.44,
      thickness: 0.34,
      roughness: 0.14,
      sheenColor: '#d4bdff',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(M0, meroR, 136), pmMat), true, true));

    // Inner alveolar IMC face (deep indigo-violet lining so bright internal organelles pop cleanly!)
    const imcInnerMat = reg(
      'imc',
      applyBacklitSSS(
        phys(
          {
            color: '#1e1238',
            roughness: 0.68,
            clearcoat: 0.18,
            normalMap: bump(12, 10),
            normalScale: new THREE.Vector2(0.24, 0.24),
            side: THREE.BackSide,
          },
          MERO_CLIP
        ),
        '#7d58cc',
        0.14,
        2.6
      )
    );
    cell.add(new THREE.Mesh(shellGeo(M0, d => meroR(d) - 0.24, 108), imcInnerMat));

    // Multi-band Pellicle + Alveolar IMC cutaway cross-section strip!
    // Clearly shows: outer plasma membrane | supra-alveolar glideosome space | double-membrane IMC alveoli
    const IMC_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.16, '#c8a6ff'],  // Parasite plasma membrane
      [0.16, 0.44, '#140e26'], // Supra-alveolar glideosome space (hosts PfMyoA + PfActI!)
      [0.44, 0.62, '#9166eb'], // Outer IMC alveolar membrane
      [0.62, 0.80, '#2e1a54'], // Alveolar sac lumen
      [0.80, 1.0, '#b38aff'],  // Inner IMC alveolar membrane + sub-pellicular network
    ];
    const imcCapMat = reg(
      'imc',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.36,
        metalness: 0.05,
        emissive: '#1a0c38',
        emissiveIntensity: 0.16,
        side: THREE.DoubleSide,
      })
    );
    caps.add(new THREE.Mesh(capStripRay(M0, meroR, RAY_A, NORM_A.clone().negate(), 0.24, IMC_LAYERS, 180), imcCapMat));
    caps.add(new THREE.Mesh(capStripRay(M0, meroR, RAY_B, NORM_B.clone().negate(), 0.24, IMC_LAYERS, 180), imcCapMat));

    // Sculpted quilted IMC alveolar suture ribs lining the interior pellicle wall
    const S_IMC = sculpt('imc', cell, true, { roughness: 0.36, emissive: '#351b6b', emissiveIntensity: 0.24 }, MERO_CUT);
    for (let k = 0; k < 12; k++) {
      const phi = (k / 12) * Math.PI * 2;
      const pts: THREE.Vector3[] = [];
      for (let s = 0; s <= 18; s++) {
        const u = -0.82 + (s / 18) * 1.58;
        const w = Math.sqrt(Math.max(0.02, 1 - u * u));
        const d = AX.clone().multiplyScalar(u).addScaledVector(AY, w * Math.cos(phi)).addScaledVector(AZ, w * Math.sin(phi)).normalize();
        const pt = M0.clone().addScaledVector(d, meroR(d) - 0.21);
        pts.push(pt);
        if (s === 9 && !inMeroWedge(pt)) SITES.imc.push(pt.clone());
      }
      S_IMC.tube(pts, 0.026, 0.024, col('#b68cff'), col('#e3ccff'), 6, true);
    }
    // Also record cutaway edge IMC sites so hovering 'imc' highlights cleanly in every view
    for (const ray of [RAY_A, RAY_B]) {
      const d = V(ray.x * 0.86, 0.51, ray.z * 0.86).normalize();
      SITES.imc.push(M0.clone().addScaledVector(d, meroR(d) - 0.12));
    }
    S_IMC.done();
  }

  // -------------------------------------------------------------------------
  // 3. Apical Complex, Rhoptries, Micronemes, PfRH5 (4U0Q), AMA1-RON2 (3SRI),
  //    Sub-Pellicular PfActI Actin (4CBU) & Animated PfMyoA-MTIP Glideosome (6YCX)
  // -------------------------------------------------------------------------
  function buildInvasionMachinery(T) {
    // A. Apical Complex: 3 concentric golden polar rings + apical collar + radiating sub-pellicular microtubule ribs
    const S_API = sculpt('apical_complex', cell, false, {
      emissive: '#5e3c06',
      emissiveIntensity: 0.22,
      roughness: 0.28,
      metalness: 0.14,
      clearcoat: 0.54,
    });
    const ringSpecs: Array<[number, number, number, string]> = [
      [2.94, 0.40, 0.068, '#ffcf42'],
      [2.68, 0.64, 0.072, '#f2a929'],
      [2.38, 0.88, 0.062, '#ffd466'],
    ];
    ringSpecs.forEach(([aPos, majR, tubR, hex]) => {
      const ctr = mPos(aPos, 0, 0);
      S_API.ring(ctr, AX, majR, tubR, col(hex), 36, 10);
      SITES.apical_complex.push(ctr.clone());
    });
    // 14 sub-pellicular microtubule struts radiating cleanly back from the apical polar ring
    const cRib1 = col('#ffe066'), cRib2 = col('#997dff');
    for (let k = 0; k < 14; k++) {
      const ph = (k / 14) * Math.PI * 2;
      const pts: THREE.Vector3[] = [];
      for (let s = 0; s <= 10; s++) {
        const t = s / 10;
        const u = 0.94 - t * 0.85;
        const w = Math.sqrt(Math.max(0.02, 1 - u * u));
        const d = AX.clone().multiplyScalar(u).addScaledVector(AY, w * Math.cos(ph)).addScaledVector(AZ, w * Math.sin(ph)).normalize();
        const pt = M0.clone().addScaledVector(d, meroR(d) - 0.26);
        if (s > 2 && inMeroWedge(pt)) break;
        pts.push(pt);
      }
      if (pts.length >= 3) S_API.tube(pts, 0.032, 0.024, cRib1, cRib2, 6, true);
    }
    S_API.done();
    placed += 14;

    // B. Twin Tear-Drop Rhoptries (crimson-violet secretory bulbs tapering into slender apical necks)
    const rhopMat = reg(
      'rhoptries',
      applyBacklitSSS(
        phys(
          {
            color: '#d93d86',
            emissive: '#5c0e38',
            emissiveIntensity: 0.24,
            roughness: 0.24,
            clearcoat: 0.62,
            clearcoatRoughness: 0.18,
            sheen: 0.55,
            sheenColor: '#ffc2e0',
            normalMap: bump(6, 8),
            normalScale: new THREE.Vector2(0.22, 0.22),
          },
          {}
        ),
        '#ff6bb8',
        0.34,
        2.3
      )
    );
    const rhopCurves = [
      new THREE.CatmullRomCurve3([
        mPos(1.12, 0.40, 0.18),
        mPos(1.52, 0.34, 0.14),
        mPos(2.04, 0.20, 0.09),
        mPos(2.54, 0.10, 0.04),
        mPos(2.90, 0.05, 0.02),
      ]),
      new THREE.CatmullRomCurve3([
        mPos(1.10, -0.34, -0.14),
        mPos(1.50, -0.28, -0.10),
        mPos(2.02, -0.18, -0.06),
        mPos(2.52, -0.09, -0.03),
        mPos(2.90, -0.05, -0.02),
      ]),
    ];
    rhopCurves.forEach((cv, idx) => {
      const rFn = (t: number) => {
        // Plump tear-drop bulb around t=0.14 tapering smoothly into a sleek rhoptry duct neck
        const bulb = 0.40 * Math.exp(-Math.pow((t - 0.16) / 0.26, 2));
        const neck = 0.085 * (1 - 0.35 * t);
        const cap0 = t < 0.08 ? Math.sqrt(Math.max(0.04, t / 0.08)) : 1;
        const cap1 = t > 0.94 ? Math.sqrt(Math.max(0.05, (1 - t) / 0.06)) : 1;
        return (bulb + neck) * cap0 * cap1;
      };
      const mesh = shade(new THREE.Mesh(sweepGeo(cv, rFn, 56, 22), rhopMat), true, true);
      cell.add(mesh);
      // Rounded posterior bulb cap
      const bulbTip = new THREE.Mesh(blobGeo(0.22, fbm, 41 + idx * 13, 0.05, 2.2, 3), rhopMat);
      bulbTip.position.copy(cv.getPointAt(0.04));
      cell.add(bulbTip);
      SITES.rhoptries.push(cv.getPointAt(0.18), cv.getPointAt(0.55));
      placed += 2;
    });

    // C. Cigar-Shaped Micronemes (16 emerald-cyan secretory capsules clustered around the rhoptry necks)
    const microGeo = new THREE.CapsuleGeometry(0.072, 0.30, 8, 14);
    const microMat = reg(
      'micronemes',
      applyBacklitSSS(
        phys(
          {
            color: '#4de3c4',
            emissive: '#0c5c52',
            emissiveIntensity: 0.28,
            roughness: 0.25,
            clearcoat: 0.56,
            sheen: 0.45,
            sheenColor: '#c2fff2',
          },
          {}
        ),
        '#78ffea',
        0.30,
        2.4
      )
    );
    const microMs: THREE.Matrix4[] = [];
    const microCols: THREE.Color[] = [];
    for (let i = 0; i < 16; i++) {
      const ring = i < 9 ? 0 : 1;
      const a = (i / (ring === 0 ? 9 : 7)) * Math.PI * 2 + ring * 0.42;
      const aPos = ring === 0 ? rr(1.62, 2.18) : rr(1.22, 1.65);
      const rad = ring === 0 ? rr(0.44, 0.68) : rr(0.66, 0.88);
      const p = mPos(aPos, Math.cos(a) * rad, Math.sin(a) * rad);
      const aimDir = mPos(2.74, 0, 0).sub(p).normalize();
      microMs.push(atS(p, V(1, rr(0.88, 1.18), 1), qOut(aimDir)));
      microCols.push(col(i % 2 === 0 ? '#5cf0d0' : '#85ffe6'));
      if (SITES.micronemes.length < 14) SITES.micronemes.push(p.clone());
      placed++;
    }
    cell.add(shade(instanced(microGeo, microMat, microMs, microCols), true, true));

    // D. Real PDB 4U0Q PfRH5–Basigin Docking Bridges right at the apical invasion tip!
    const I_RH5 = molBatch('pfrh5', T.geoPfRh5, cell, false, {
      emissive: '#166e38',
      emissiveIntensity: 0.24,
      roughness: 0.30,
      clearcoat: 0.48,
    });
    const S_RH5 = sculpt('pfrh5', cell, false, { emissive: '#166e38', emissiveIntensity: 0.28 });
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2 + 0.2;
      const u = k < 4 ? 0.985 : 0.935;
      const w = Math.sqrt(Math.max(0.01, 1 - u * u));
      const d = AX.clone().multiplyScalar(u).addScaledVector(AY, w * Math.cos(a)).addScaledVector(AZ, w * Math.sin(a)).normalize();
      const pDock = M0.clone().addScaledVector(d, meroR(d) + 0.16);
      I_RH5.add(pDock, qOut(d, a), rr(0.92, 1.08));
      // Host Basigin transmembrane anchor stalk spanning into the RBC / PVM interface
      S_RH5.stick(pDock.clone().addScaledVector(d, 0.08), pDock.clone().addScaledVector(d, 0.34), 0.036, col('#78ff9e'), col('#ff5978'));
      SITES.pfrh5.push(pDock.clone());
      placed++;
    }
    I_RH5.done();
    S_RH5.done();

    // E. Glowing Ring-Shaped AMA1–RON2 Moving Junction (PDB 3SRI) cinching the invasion waist!
    junctionHaloGroup = new THREE.Group();
    const mjCenter = mPos(0.72, 0, 0);
    junctionHaloGroup.position.copy(mjCenter);
    junctionHaloGroup.quaternion.copy(qFromZ(AX)); // local +Z = AX, ring lies in local XY!
    cell.add(junctionHaloGroup);

    const mjMat = protMat('moving_junction', false, {
      emissive: '#6e144e',
      emissiveIntensity: 0.18,
      roughness: 0.30,
      clearcoat: 0.52,
    });
    const I_MJ = makeMolBatch(T.geoAma1Ron2, mjMat, junctionHaloGroup);
    const S_MJ = sculpt('moving_junction', junctionHaloGroup, false, {
      emissive: '#7a1554',
      emissiveIntensity: 0.22,
      roughness: 0.28,
      clearcoat: 0.50,
    });
    const MJ_R = 1.90;
    // Continuous glowing magenta-cyan zipper ring uniting all 24 real PDB 3SRI AMA1–RON2 complexes
    S_MJ.ring(V(0, 0, 0), V(0, 0, 1), MJ_R, 0.054, col('#e84da8'), 64, 12);
    S_MJ.ring(V(0, 0, 0.09), V(0, 0, 1), MJ_R + 0.10, 0.034, col('#38d2f2'), 64, 8);
    const N_MJ = 24;
    for (let k = 0; k < N_MJ; k++) {
      const a = (k / N_MJ) * Math.PI * 2;
      const radial = V(Math.cos(a), Math.sin(a), 0);
      const localP = radial.clone().multiplyScalar(MJ_R + 0.04);
      I_MJ.add(localP, qOut(radial, a * 0.5), 1.05);
      placed++;
      if (k % 2 === 0) {
        const worldP = localP.clone().applyQuaternion(junctionHaloGroup.quaternion).add(mjCenter);
        SITES.moving_junction.push(worldP);
      }
    }
    I_MJ.done();
    S_MJ.done();

    // F. Sub-Pellicular PfActI Actin Filaments (PDB 4CBU) & PfMyoA–MTIP Glideosome Motors (PDB 6YCX)
    const I_ACT = molBatch('actin', T.geoPfAct1, cell, false, {
      emissive: '#116944',
      emissiveIntensity: 0.24,
      roughness: 0.32,
      clearcoat: 0.44,
    });
    const S_ACT = sculpt('actin', cell, false, {
      emissive: '#12704a',
      emissiveIntensity: 0.28,
      roughness: 0.30,
    });
    const glideMat = protMat('glideosome', false, {
      emissive: '#754e08',
      emissiveIntensity: 0.28,
      roughness: 0.28,
      clearcoat: 0.52,
    });
    const I_GLIDE_STATIC = makeMolBatch(T.geoGlideosome, glideMat, cell);
    const S_GLIDE_TETHER = sculpt('glideosome', cell, false, { emissive: '#6e4708', emissiveIntensity: 0.26 });

    // 8 longitudinal sub-pellicular tracks strictly in the intact supra-alveolar space (r = meroR - 0.11)
    // (Respecting the front cutaway window so tracks & stepping glideosome motors frame the upper/lower cutaway rims
    // without obstructing the 4-membrane apicoplast or digestive vacuole!)
    const trackPhis = [-2.60, -1.95, -1.25, -0.35, 0.35, 1.15, 1.90, 2.55];
    trackPhis.forEach((phi, ti) => {
      const pts: THREE.Vector3[] = [];
      for (let s = 0; s <= 18; s++) {
        const u = 0.80 - (s / 18) * 1.44; // anterior (+0.80) rearward to (-0.64)
        const w = Math.sqrt(Math.max(0.02, 1 - u * u));
        const d = AX.clone().multiplyScalar(u).addScaledVector(AY, w * Math.cos(phi)).addScaledVector(AZ, w * Math.sin(phi)).normalize();
        const pt = M0.clone().addScaledVector(d, meroR(d) - 0.11);
        pts.push(pt);
      }
      // Always honor the cutaway window so nothing floats across open cutaway space
      const keepPts = pts.filter(p => !inMeroWedge(p));
      if (keepPts.length < 4) return;
      const isHeroRim = ti === 3 || ti === 4 || ti === 0 || ti === 7;
      S_ACT.tube(keepPts, 0.044, 0.040, col('#4ef2a8'), col('#a8ffd8'), 8, true);

      // Tile real PDB 4CBU PfActI dimers along each track
      for (let k = 1; k < keepPts.length - 1; k += 2) {
        const pA = keepPts[k];
        const tan = keepPts[Math.min(keepPts.length - 1, k + 1)].clone().sub(keepPts[Math.max(0, k - 1)]).normalize();
        I_ACT.add(pA, qFromZ(tan, k * 0.65), 0.72);
        placed++;
        if (SITES.actin.length < 24 && (isHeroRim || k % 4 === 1)) SITES.actin.push(pA.clone());
      }

      // Dock real PDB 6YCX PfMyoA–MTIP glideosome motors right onto the actin tracks!
      for (let mIdx = 2; mIdx < keepPts.length - 2; mIdx += 5) {
        const pTrack = keepPts[mIdx];
        const outN = pTrack.clone().sub(M0).normalize();
        const tan = keepPts[mIdx + 1].clone().sub(keepPts[mIdx - 1]).normalize();
        const pMotor = pTrack.clone().addScaledVector(outN, -0.08);
        const qMotor = qOut(outN, ti * 0.7 + mIdx * 0.4);
        // GAP45 tether anchoring motor tail to IMC alveolar sac
        S_GLIDE_TETHER.stick(pMotor, pMotor.clone().addScaledVector(outN, -0.18), 0.030, col('#ffcf4d'), col('#b991ff'));

        if (isHeroRim && glideosomeActors.length < 9) {
          // Animated stepping hero PfMyoA–MTIP motors visibly rocking along the upper/lower cutaway rims!
          const mMesh = shade(new THREE.Mesh(T.geoGlideosome, glideMat), true, true);
          mMesh.position.copy(pMotor);
          mMesh.quaternion.copy(qMotor);
          mMesh.scale.setScalar(0.86);
          cell.add(mMesh);
          glideosomeActors.push({
            obj: mMesh,
            basePos: pMotor.clone(),
            axis: tan.clone(),
            baseQuat: qMotor.clone(),
            phase: glideosomeActors.length * 1.15,
          });
        } else {
          I_GLIDE_STATIC.add(pMotor, qMotor, 0.82);
        }
        SITES.glideosome.push(pMotor.clone());
        placed++;
      }
    });

    I_ACT.done();
    S_ACT.done();
    I_GLIDE_STATIC.done();
    S_GLIDE_TETHER.done();
  }

  // -------------------------------------------------------------------------
  // 4. True Eukaryotic Core: Cutaway Nucleus (14 Linear Chromosomes + Pores),
  //    80S Cytosolic Ribosomes, & Single Branched Tubular Mitochondrion
  // -------------------------------------------------------------------------
  function buildEukaryoticCore(T) {
    // A. Cutaway Eukaryotic Nucleus with double nuclear envelope, pores & 14 linear chromosomes
    const nuR = (d: THREE.Vector3) => 0.74 * (1 + 0.03 * (fbm(d.x * 3.1 + 9.2, d.y * 3.1, d.z * 3.1 - 4.4, 3) - 0.5) * 2);
    const nuOuterMat = cinemaShellMat('nucleus', '#6c58d9', '#dfd6ff', NU_CUT_SET.clip, {
      attenCol: '#5942c4',
      attenDist: 2.2,
      sssColor: '#a694ff',
      sssIntensity: 0.34,
      iridescence: 0.48,
      thickness: 0.34,
      roughness: 0.13,
      sheenColor: '#ede8ff',
      normalMap: bump(8, 8),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(NU0, nuR, 84), nuOuterMat), true, true));

    // Double nuclear envelope cutaway cap strip
    const NU_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.30, '#c2b5ff'],  // Outer nuclear membrane
      [0.30, 0.62, '#2d1f66'], // Perinuclear lumen
      [0.62, 1.0, '#9682ff'],  // Inner nuclear membrane + lamina
    ];
    const nuCapMat = reg('nucleus', new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.34, side: THREE.DoubleSide }));
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(NU0, nuR, ax, 0.085, NU_LAYERS, 110), nuCapMat));
    }

    // Nuclear Pore Complexes (24 octagonal rosettes on the intact outer envelope) + glowing nucleolus
    const S_NU = sculpt('nucleus', cell, false, { emissive: '#382280', emissiveIntensity: 0.26, roughness: 0.30 });
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < 34; i++) {
      const y = 1 - ((i + 0.5) / 34) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * golden;
      const d = V(Math.cos(th) * rad, y, Math.sin(th) * rad).normalize();
      const p = NU0.clone().addScaledVector(d, nuR(d) + 0.015);
      if (p.x > NU0.x + 0.04 && p.z > NU0.z + 0.04) continue;
      S_NU.ring(p, d, 0.072, 0.024, col('#ffd480'), 14, 6);
      placed++;
    }
    // Luminous nucleolus tucked in the upper-back nuclear cavity
    S_NU.add(NU0.clone().add(V(-0.22, 0.16, -0.20)), 0.30, col('#d98cff'));
    S_NU.done();

    // 14 distinct linear chromosomes (Plasmodium falciparum karyotype = 14 chromosomes, 23.3 Mbp!)
    const B_NU_DNA = balls('nucleus', cell, false);
    const chrPalette = ['#6caeff', '#9d82ff', '#5ee8ff', '#c98aff', '#75bfff', '#a894ff', '#6ef5d8'];
    for (let cIdx = 0; cIdx < 14; cIdx++) {
      const yBase = -0.44 + (cIdx / 13) * 0.88;
      const ang0 = cIdx * 1.18;
      const ctrl: THREE.Vector3[] = [];
      for (let k = 0; k <= 6; k++) {
        const t = k / 6;
        const a = ang0 + t * 2.25;
        const r = Math.min(0.52, Math.sqrt(Math.max(0.04, 0.56 * 0.56 - yBase * yBase)) * (0.45 + 0.45 * Math.sin(t * Math.PI)));
        let lx = Math.cos(a) * r;
        let lz = Math.sin(a) * r;
        if (lx > 0.22 && lz > 0.22) lx = -lx * 0.6;
        ctrl.push(NU0.clone().add(V(lx, yBase + Math.sin(t * Math.PI * 2 + cIdx) * 0.08, lz)));
      }
      const pts = new THREE.CatmullRomCurve3(ctrl).getSpacedPoints(28);
      if (cIdx < 6) {
        dna.emitDNA(B_NU_DNA, pts, { nm: 0.017 });
      } else {
        const cCol = col(chrPalette[cIdx % chrPalette.length]);
        for (let k = 0; k < pts.length - 1; k++) {
          B_NU_DNA.stick(pts[k], pts[k + 1], 0.015, cCol, cCol);
          if (k % 3 === 0) B_NU_DNA.add(pts[k], 0.036, cCol);
        }
      }
      if (cIdx % 3 === 0) SITES.nucleus.push(pts[14].clone());
    }
    B_NU_DNA.done();
    SITES.nucleus.push(NU0.clone());

    // B. Single Continuous Branched Tubular Mitochondrion (6 kb genome, juxtaposed with the apicoplast!)
    const mitoMat = reg(
      'mito',
      applyBacklitSSS(
        phys(
          {
            color: '#f2784b',
            emissive: '#6e240e',
            emissiveIntensity: 0.24,
            roughness: 0.24,
            clearcoat: 0.56,
            clearcoatRoughness: 0.20,
            sheen: 0.48,
            sheenColor: '#ffd4be',
            normalMap: bump(8, 5),
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          {}
        ),
        '#ff9e6b',
        0.34,
        2.3
      )
    );
    const mitoMainCurve = new THREE.CatmullRomCurve3([
      mPos(0.68, 0.26, 0.88),
      mPos(-0.08, 0.22, 1.04),
      mPos(-0.74, -0.32, 0.94),
      mPos(-1.14, -0.84, 0.50),
      mPos(-1.66, -0.66, -0.14),
    ]);
    const mitoBranchCurve = new THREE.CatmullRomCurve3([
      mPos(-0.08, 0.22, 1.04),
      mPos(-0.10, 0.72, 0.96),
      mPos(0.24, 1.18, 0.80),
      mPos(0.56, 1.05, 0.56),
    ]);
    [mitoMainCurve, mitoBranchCurve].forEach((cv, idx) => {
      const rFn = (t: number) => {
        const endCap = t < 0.06 ? Math.sqrt(Math.max(0.08, t / 0.06)) : t > 0.94 ? Math.sqrt(Math.max(0.08, (1 - t) / 0.06)) : 1;
        return (idx === 0 ? 0.195 : 0.155) * (1 + 0.08 * Math.sin(t * Math.PI * 6)) * endCap;
      };
      cell.add(shade(new THREE.Mesh(sweepGeo(cv, rFn, 56, 20), mitoMat), true, true));
      SITES.mito.push(cv.getPointAt(0.28), cv.getPointAt(0.68));
    });
    // Internal tubular cristae rings & tiny glowing 6 kb mtDNA loop accenting the mitochondrion exterior/interior
    const S_MITO = sculpt('mito', cell, false, { emissive: '#8f3412', emissiveIntensity: 0.34, roughness: 0.28 });
    for (let k = 1; k <= 10; k++) {
      const t = k / 11;
      const p = mitoMainCurve.getPointAt(t);
      const tan = mitoMainCurve.getTangentAt(t);
      S_MITO.ring(p, tan, 0.202, 0.026, col('#ffc085'), 20, 6);
    }
    S_MITO.done();
    placed += 10;

    // C. Cytosolic Eukaryotic 80S Ribosomes (~58 clusters packed across the exposed cytoplasm!)
    const I_R80 = molBatch('ribosome_80s', T.geoRibo80, cell, false, {
      emissive: '#59340e',
      emissiveIntensity: 0.16,
    });
    const riboSpots: THREE.Vector3[] = [];
    let rCount = 0;
    for (let guard = 0; rCount < 58 && guard < 1800; guard++) {
      const d = randDir();
      const maxR = meroR(d) - 0.34;
      const p = M0.clone().addScaledVector(d, maxR * (0.28 + 0.68 * Math.cbrt(rand())));
      // Keep out of front-right cutaway wedge so they sit cleanly inside the opened merozoite cavity
      if (inMeroWedge(p)) continue;
      // Avoid major organelles (apicoplast, digestive vacuole, nucleus, apical rhoptry zone)
      if (p.distanceTo(AP0) < 0.88) continue;
      if (p.distanceTo(DV0) < 0.92) continue;
      if (p.distanceTo(NU0) < 0.90) continue;
      const aProj = p.clone().sub(M0).dot(AX);
      if (aProj > 1.25) continue;
      if (riboSpots.some(r => r.distanceToSquared(p) < 0.14)) continue;
      I_R80.add(p, qOut(randDir(), rCount * 0.9), rr(0.88, 1.08));
      riboSpots.push(p);
      rCount++;
      placed++;
      if (SITES.ribosome_80s.length < 28) SITES.ribosome_80s.push(p.clone());
    }
    I_R80.done();
  }

  // -------------------------------------------------------------------------
  // 5. HERO Cutaway 4-Membrane Apicoplast (Secondary Endosymbiosis Proof!)
  //    4 Distinct Concentric Membranes + 35 kb Circular dsDNA + 70S Ribosomes
  // -------------------------------------------------------------------------
  function buildFourMembraneApicoplast(T) {
    // 4 distinctly colored concentric membranes proving secondary endosymbiosis of a red alga!
    const layerSpecs: Array<{ r: number; solid: string; gel: string; sss: string; hex: string }> = [
      { r: 0.74, solid: '#14a2c7', gel: '#7ce2f7', sss: '#45d4f5', hex: '#45d4f5' }, // 1. Outermost host phagosomal membrane
      { r: 0.64, solid: '#6747d6', gel: '#b8a3f7', sss: '#8c6eff', hex: '#8c6eff' }, // 2. Periplastid (red-algal plasma) membrane
      { r: 0.54, solid: '#18b873', gel: '#7ff0bd', sss: '#3be398', hex: '#3be398' }, // 3. Outer plastid membrane
      { r: 0.44, solid: '#d4981e', gel: '#f7d87c', sss: '#f2c144', hex: '#f2c144' }, // 4. Innermost plastid membrane
    ];

    layerSpecs.forEach((sp, idx) => {
      const rFn = (d: THREE.Vector3) =>
        sp.r * (1 + 0.022 * (fbm(d.x * 3.4 + idx * 3.1, d.y * 3.4, d.z * 3.4 - idx * 2.2, 3) - 0.5) * 2);
      const mat = cinemaShellMat('apicoplast_membranes', sp.solid, sp.gel, AP_CUT_SET.clip, {
        attenCol: sp.solid,
        attenDist: 1.7,
        sssColor: sp.sss,
        sssIntensity: 0.18,
        iridescence: 0.45 - idx * 0.06,
        thickness: 0.15,
        roughness: 0.12,
        sheenColor: sp.gel,
        normalMap: bump(6, 6),
        normalScale: 0.18,
      });
      cell.add(shade(new THREE.Mesh(shellGeo(AP0, rFn, 64), mat), idx === 0, true));
    });

    // Razor-sharp 4-MEMBRANE CONCENTRIC RAINBOW CUTAWAY CAP STRIP (with dark intermembrane gaps so all 4 rings pop!)
    const FOUR_MEM_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.00, 0.16, '#38d8fa'], // Membrane 1 (cyan)
      [0.16, 0.28, '#0b101c'], // Intermembrane gap 1-2
      [0.28, 0.44, '#8d6eff'], // Membrane 2 (violet)
      [0.44, 0.56, '#0e0c1f'], // Periplastid space (former algal cytosol)
      [0.56, 0.72, '#34e092'], // Membrane 3 (emerald)
      [0.72, 0.84, '#0a1c14'], // Intermembrane gap 3-4
      [0.84, 1.00, '#f5c63d'], // Membrane 4 (solar gold)
    ];
    const apCapMat = reg(
      'apicoplast_membranes',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.34,
        metalness: 0.06,
        emissive: '#102029',
        emissiveIntensity: 0.18,
        side: THREE.DoubleSide,
      })
    );
    const apOuterR = (d: THREE.Vector3) =>
      0.74 * (1 + 0.022 * (fbm(d.x * 3.4, d.y * 3.4, d.z * 3.4, 3) - 0.5) * 2);
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(AP0, apOuterR, ax, 0.32, FOUR_MEM_LAYERS, 140), apCapMat));
    }

    // Record crisp sites right on the 4-membrane concentric cutaway rim
    SITES.apicoplast_membranes.push(
      AP0.clone().add(V(0.05, 0.52, 0.42)),
      AP0.clone().add(V(0.45, 0.48, 0.05)),
      AP0.clone().add(V(0.05, -0.52, 0.42))
    );

    // Apicoplast inner stroma bowl + bacterial-type 70S plastid ribosomes ('apicoplast')
    const stromaMat = reg(
      'apicoplast',
      applyBacklitSSS(
        phys(
          {
            color: '#194a3c',
            emissive: '#0d3b2e',
            emissiveIntensity: 0.28,
            roughness: 0.52,
            clearcoat: 0.25,
            side: THREE.BackSide,
          },
          AP_CUT_SET.clip
        ),
        '#52f2a8',
        0.30,
        2.2
      )
    );
    cell.add(new THREE.Mesh(shellGeo(AP0, () => 0.41, 48), stromaMat));

    const I_R70 = molBatch('apicoplast', T.geoRibo70Plastid, cell, false, {
      emissive: '#146949',
      emissiveIntensity: 0.26,
    });
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2;
      const r = 0.20 + (k % 3) * 0.05;
      const p = AP0.clone().add(V(Math.cos(a) * r * 0.85, Math.sin(a * 1.5) * 0.18, Math.sin(a) * r * 0.85 - 0.06));
      I_R70.add(p, qOut(randDir(), k), 1.0);
      placed++;
    }
    I_R70.done();
    SITES.apicoplast.push(AP0.clone().add(V(-0.10, -0.05, -0.08)));

    // 35 kb Circular Apicoplast dsDNA Genome ('apicoplast_dna') glowing inside the 4th membrane!
    const B_AP_DNA = balls('apicoplast_dna', cell, false);
    const dnaLoop: THREE.Vector3[] = [];
    for (let k = 0; k <= 44; k++) {
      const a = (k / 44) * Math.PI * 2;
      const rad = 0.27 + 0.045 * Math.sin(a * 3);
      dnaLoop.push(
        AP0.clone().add(
          V(
            Math.cos(a) * rad * 0.92,
            Math.sin(a) * rad * 0.88,
            Math.sin(a * 2) * 0.11 - 0.04
          )
        )
      );
    }
    dna.emitDNA(B_AP_DNA, dnaLoop, { nm: 0.016 });
    B_AP_DNA.done();
    // Subtle sculpted solar-gold backbone highlight thread so the 35 kb ring pops even from overview
    const S_AP_DNA = sculpt('apicoplast_dna', cell, false, {
      emissive: '#a87d0c',
      emissiveIntensity: 0.42,
      roughness: 0.24,
    });
    S_AP_DNA.tube(dnaLoop, 0.018, 0.018, col('#ffe066'), col('#fff4a8'), 8, false);
    S_AP_DNA.done();
    SITES.apicoplast_dna.push(AP0.clone().add(V(0.06, 0.04, 0.06)), dnaLoop[11].clone());
  }

  // -------------------------------------------------------------------------
  // 6. Acidic Digestive Vacuole + Cytostome Neck + Stacked Hemozoin Biocrystals
  // -------------------------------------------------------------------------
  function buildDigestiveVacuoleAndHemozoin() {
    const dvR = (d: THREE.Vector3) =>
      0.78 * (1 + 0.032 * (fbm(d.x * 2.9 - 6.4, d.y * 2.9 + 5.1, d.z * 2.9 + 1.8, 3) - 0.5) * 2);

    // Acidic translucent amber-purple wet-gel vacuole membrane
    const dvMat = cinemaShellMat('digestive_vacuole', '#7a2eb8', '#ca8ef2', DV_CUT_SET.clip, {
      attenCol: '#5d1c94',
      attenDist: 2.1,
      sssColor: '#c96eff',
      sssIntensity: 0.20,
      iridescence: 0.46,
      thickness: 0.34,
      roughness: 0.13,
      sheenColor: '#ebb5ff',
      normalMap: bump(8, 8),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(DV0, dvR, 76), dvMat), true, true));

    // Warm acidic amber-violet inner lumen wall
    const dvInnerMat = reg(
      'digestive_vacuole',
      applyBacklitSSS(
        phys(
          {
            color: '#2e0f38',
            emissive: '#1f0826',
            emissiveIntensity: 0.16,
            roughness: 0.58,
            clearcoat: 0.22,
            side: THREE.BackSide,
          },
          DV_CUT_SET.clip
        ),
        '#e88038',
        0.18,
        2.5
      )
    );
    cell.add(new THREE.Mesh(shellGeo(DV0, d => dvR(d) - 0.08, 56), dvInnerMat));

    // Crisp bilayer cutaway cap strip on the digestive vacuole
    const DV_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.32, '#c978f2'],
      [0.32, 0.66, '#300d40'],
      [0.66, 1.0, '#e89042'],
    ];
    const dvCapMat = reg(
      'digestive_vacuole',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.34,
        emissive: '#260a30',
        emissiveIntensity: 0.18,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(DV0, dvR, ax, 0.085, DV_LAYERS, 110), dvCapMat));
    }

    // Cytostome endocytic feeding conduit + V-ATPase proton pumps acidifying the digestive vacuole
    const S_DV = sculpt('digestive_vacuole', cell, false, {
      emissive: '#591e6e',
      emissiveIntensity: 0.30,
      roughness: 0.30,
      clearcoat: 0.45,
    });
    const feedCurve = new THREE.CatmullRomCurve3([
      mPos(1.05, -1.28, -0.15),
      mPos(0.56, -1.16, -0.04),
      DV0.clone().add(V(-0.56, -0.16, -0.12)),
    ]);
    S_DV.tube(feedCurve.getSpacedPoints(16), 0.16, 0.11, col('#ff6e82'), col('#d482ff'), 12, true);
    // Acidifying V-ATPase proton pumps studded on the vacuole outer rim
    const pumpDirs = [V(-0.7, 0.55, -0.45), V(-0.65, -0.6, 0.45), V(0.5, -0.75, -0.42), V(-0.2, 0.82, -0.52)];
    pumpDirs.forEach(raw => {
      const d = raw.clone().normalize();
      const p = DV0.clone().addScaledVector(d, dvR(d) + 0.04);
      S_DV.lobe(p, 0.08, 0.11, 0.08, col('#ffb85c'), qOut(d));
    });
    S_DV.done();
    SITES.digestive_vacuole.push(DV0.clone().add(V(-0.42, -0.32, 0.35)), DV0.clone().add(V(0.35, -0.45, -0.25)));

    // Sharp Dark Shimmering Rectangular Hemozoin (beta-hematin) Biocrystal Stack ('hemozoin')!
    const hzGeo = new THREE.BoxGeometry(0.11, 0.44, 0.085);
    const hzMat = reg(
      'hemozoin',
      phys(
        {
          color: '#24110b',
          emissive: '#1c0a05',
          emissiveIntensity: 0.16,
          roughness: 0.14,
          metalness: 0.56,
          clearcoat: 0.95,
          clearcoatRoughness: 0.06,
          iridescence: 0.68,
          iridescenceIOR: 1.50,
          sheen: 0.45,
          sheenColor: '#d98842',
        },
        {}
      )
    );
    // Subtle dark-bronze facet edge highlight so the dark biocrystals gleam with crystalline sharpness
    const hzRimGeo = new THREE.BoxGeometry(0.115, 0.445, 0.090);
    const hzRimMat = reg(
      'hemozoin',
      new THREE.MeshBasicMaterial({ color: '#d98842', wireframe: true, transparent: true, opacity: 0.16 })
    );

    const hzMs: THREE.Matrix4[] = [];
    const hzCols: THREE.Color[] = [];
    const hzBase = DV0.clone().add(V(0.06, -0.10, 0.04));
    const crystalOffsets: Array<[number, number, number, number, number, number, number]> = [
      [0.00, 0.00, 0.00, 0.14, 0.30, -0.28, 1.15],
      [0.14, 0.04, 0.08, 0.18, 0.52, -0.18, 1.05],
      [-0.13, -0.04, 0.10, 0.10, -0.25, -0.36, 1.08],
      [0.08, -0.14, -0.10, -0.16, 0.42, -0.22, 0.98],
      [-0.08, 0.12, -0.14, 0.24, 0.15, -0.44, 1.02],
      [0.22, -0.08, -0.02, 0.06, 0.75, -0.12, 0.92],
      [-0.22, 0.02, -0.06, 0.28, -0.48, -0.30, 0.96],
      [0.02, 0.18, 0.14, -0.10, 0.22, -0.48, 0.86],
      [0.18, 0.14, -0.14, 0.22, 0.62, -0.26, 0.88],
      [-0.16, -0.16, -0.12, -0.22, -0.35, -0.20, 0.90],
      [0.06, -0.22, 0.14, -0.14, 0.18, -0.32, 0.84],
      [-0.02, 0.04, 0.22, 0.08, 0.08, -0.18, 0.88],
      [0.24, -0.18, 0.10, -0.08, 0.84, -0.24, 0.78],
      [-0.24, -0.10, 0.12, 0.16, -0.58, -0.38, 0.80],
      [0.12, 0.22, 0.02, 0.30, 0.35, -0.16, 0.76],
      [-0.10, -0.24, 0.04, -0.26, -0.12, -0.42, 0.82],
    ];
    crystalOffsets.forEach(([ox, oy, oz, rx, ry, rz, sc], idx) => {
      const p = hzBase.clone().add(V(ox, oy, oz));
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz));
      hzMs.push(atS(p, V(sc, sc * rr(0.92, 1.15), sc), q));
      hzCols.push(col(idx % 3 === 0 ? '#59301e' : idx % 3 === 1 ? '#452318' : '#6e3d26'));
      if (idx < 6) SITES.hemozoin.push(p.clone());
      placed++;
    });
    cell.add(shade(instanced(hzGeo, hzMat, hzMs, hzCols), true, true));
    cell.add(instanced(hzRimGeo, hzRimMat, hzMs));
  }

  // -------------------------------------------------------------------------
  // 7. Crisp Floating Circular Atomic Inset ('iron_atom'):
  //    Fe3+-Protoporphyrin IX Heme Ring + Reciprocal Fe-O Propionate Hemozoin Dimer
  //    (Text strictly centered inside the circular ring with generous margin — ZERO clipping!)
  // -------------------------------------------------------------------------
  function buildAtomicIronHemeInset() {
    const grp = new THREE.Group();
    grp.position.copy(FE0);
    grp.rotation.set(0.10, 0.28, 0);
    cell.add(grp);

    const R_RING = 1.68;
    const ringMat = reg(
      'iron_atom',
      phys(
        {
          color: '#ffb052',
          emissive: '#753808',
          emissiveIntensity: 0.36,
          roughness: 0.22,
          metalness: 0.26,
          clearcoat: 0.68,
        },
        {}
      )
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.038, 16, 64), ringMat));

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 56),
      reg(
        'iron_atom',
        phys(
          {
            color: '#110d1e',
            roughness: 0.16,
            transparent: true,
            opacity: 0.56,
            depthWrite: false,
            side: THREE.DoubleSide,
          },
          {}
        )
      )
    );
    glassDisc.position.z = -0.16;
    grp.add(glassDisc);

    // Atomic ball-and-stick builder inside the circular magnifier (high-contrast CPK palette!)
    const S_AT = sculpt('iron_atom', grp, false, { roughness: 0.30, clearcoat: 0.42, sheen: 0.2 });
    const cFe = col('#f07d1a');
    const cN = col('#2b7bff');
    const cC = col('#5b687d');
    const cO = col('#e82c42');
    const cH = col('#d8e4f5');
    const cCoord = col('#f5b832');
    const cBond = col('#8c99ad');

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => S_AT.add(p, r * 2, c);
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.024) => S_AT.stick(a, b, r, c1, c2);

    // Helper to build a planar Fe3+-Protoporphyrin IX tetrapyrrole ring at center `C` with scale `sc` and tilt
    const emitPorphyrinRing = (center: THREE.Vector3, sc: number, rotZ: number, zOff: number) => {
      const toPt = (x: number, y: number, z = 0) => {
        const cs = Math.cos(rotZ), sn = Math.sin(rotZ);
        return center.clone().add(V((x * cs - y * sn) * sc, (x * sn + y * cs) * sc, z * sc + zOff));
      };
      const feP = toPt(0, 0, 0.02);
      atom(feP, 0.145 * sc, cFe);

      const nPts: THREE.Vector3[] = [];
      const methinePts: THREE.Vector3[] = [];
      for (let q = 0; q < 4; q++) {
        const th = (q * Math.PI) / 2 + Math.PI / 4;
        const cT = Math.cos(th), sT = Math.sin(th);
        const tX = -sT, tY = cT;

        // Coordinating pyrrole Nitrogen (N)
        const nP = toPt(cT * 0.34, sT * 0.34, 0.01);
        nPts.push(nP);
        atom(nP, 0.088 * sc, cN);
        bond(feP, nP, cCoord, cN, 0.026 * sc);

        // 4 Carbon atoms forming the 5-membered pyrrole ring around N
        const cA1 = toPt(cT * 0.48 + tX * 0.17, sT * 0.48 + tY * 0.17, 0);
        const cA2 = toPt(cT * 0.48 - tX * 0.17, sT * 0.48 - tY * 0.17, 0);
        const cB1 = toPt(cT * 0.72 + tX * 0.13, sT * 0.72 + tY * 0.13, 0);
        const cB2 = toPt(cT * 0.72 - tX * 0.13, sT * 0.72 - tY * 0.13, 0);
        [cA1, cA2, cB1, cB2].forEach(cp => atom(cp, 0.068 * sc, cC));
        bond(nP, cA1, cN, cC, 0.021 * sc);
        bond(nP, cA2, cN, cC, 0.021 * sc);
        bond(cA1, cB1, cC, cC, 0.021 * sc);
        bond(cA2, cB2, cC, cC, 0.021 * sc);
        bond(cB1, cB2, cC, cC, 0.021 * sc);

        // Outer substituent methyl/vinyl carbon + tiny hydrogen
        const subP = toPt(cT * 0.92 + tX * 0.14, sT * 0.92 + tY * 0.14, 0.02);
        const hP = toPt(cT * 1.06 + tX * 0.16, sT * 1.06 + tY * 0.16, 0.04);
        atom(subP, 0.056 * sc, cC);
        atom(hP, 0.036 * sc, cH);
        bond(cB1, subP, cC, cC, 0.017 * sc);
        bond(subP, hP, cC, cH, 0.013 * sc);

        // Methine bridge (=CH-) linking adjacent pyrroles
        const mTh = th + Math.PI / 4;
        const mP = toPt(Math.cos(mTh) * 0.60, Math.sin(mTh) * 0.60, 0);
        methinePts.push(mP);
        atom(mP, 0.064 * sc, cC);
        const mH = toPt(Math.cos(mTh) * 0.76, Math.sin(mTh) * 0.76, 0.02);
        atom(mH, 0.034 * sc, cH);
        bond(mP, mH, cC, cH, 0.012 * sc);
        bond(cA1, mP, cC, cC, 0.020 * sc);
      }
      // Close the opposite alpha-carbon links to methine bridges
      for (let q = 0; q < 4; q++) {
        const th = (q * Math.PI) / 2 + Math.PI / 4;
        const cT = Math.cos(th), sT = Math.sin(th);
        const tX = -sT, tY = cT;
        const cA2 = toPt(cT * 0.48 - tX * 0.17, sT * 0.48 - tY * 0.17, 0);
        bond(cA2, methinePts[(q + 3) % 4], cC, cC, 0.020 * sc);
      }
      return { feP, toPt };
    };

    // Primary hero Fe3+-Protoporphyrin IX heme ring (left-center)
    const heme1 = emitPorphyrinRing(V(-0.42, 0.06, 0.05), 0.86, 0.0, 0.0);
    // Companion stacked heme ring (right-lower) forming the authentic beta-hematin (hemozoin) Fe–O dimer!
    const heme2 = emitPorphyrinRing(V(0.56, -0.26, -0.02), 0.66, 0.24, 0.0);

    // Reciprocal Propionate (-CH2-CH2-COO-) arms creating the signature Fe–O coordination bonds of hemozoin!
    const p1a = V(0.18, 0.34, 0.08);
    const p1b = V(0.42, 0.26, 0.10);
    const o1Coord = V(0.56, 0.04, 0.08); // Coordinating propionate O -> lower Fe3+!
    const o1Free = V(0.68, 0.36, 0.12);
    atom(p1a, 0.056, cC);
    atom(p1b, 0.058, cC);
    atom(o1Coord, 0.084, cO);
    atom(o1Free, 0.066, cO);
    bond(heme1.toPt(0.72, 0.32, 0), p1a, cC, cC, 0.020);
    bond(p1a, p1b, cC, cC, 0.020);
    bond(p1b, o1Free, cC, cO, 0.020);
    bond(p1b, o1Coord, cC, cO, 0.024);
    bond(o1Coord, heme2.feP, cO, cCoord, 0.032); // Highlighted Fe–O hemozoin dimer bond #1!

    // Reciprocal lower propionate arm reaching up to coordinate upper Fe3+!
    const p2a = V(0.14, -0.46, 0.08);
    const p2b = V(-0.12, -0.40, 0.10);
    const o2Coord = V(-0.34, -0.20, 0.12); // Coordinating propionate O -> upper Fe3+!
    const o2Free = V(-0.24, -0.60, 0.10);
    atom(p2a, 0.056, cC);
    atom(p2b, 0.058, cC);
    atom(o2Coord, 0.084, cO);
    atom(o2Free, 0.066, cO);
    bond(heme2.toPt(-0.68, -0.26, 0), p2a, cC, cC, 0.020);
    bond(p2a, p2b, cC, cC, 0.020);
    bond(p2b, o2Free, cC, cO, 0.020);
    bond(p2b, o2Coord, cC, cO, 0.024);
    bond(o2Coord, heme1.feP, cO, cCoord, 0.032); // Highlighted Fe–O hemozoin dimer bond #2!

    S_AT.done();

    // Subtle animated glowing Fe3+ halo rings around both iron centers
    ironSparkGroup = new THREE.Group();
    grp.add(ironSparkGroup);
    const sparkMat = reg(
      'iron_atom',
      new THREE.MeshBasicMaterial({ color: '#ffcf66', transparent: true, opacity: 0.42, side: THREE.DoubleSide })
    );
    const halo1 = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.19, 32), sparkMat);
    halo1.position.copy(heme1.feP).add(V(0, 0, 0.04));
    const halo2 = new THREE.Mesh(new THREE.RingGeometry(0.11, 0.145, 32), sparkMat);
    halo2.position.copy(heme2.feP).add(V(0, 0, 0.04));
    ironSparkGroup.add(halo1, halo2);

    // Crisp TOP caption plaque strictly centered inside upper circular arc (width 1.66 << chord 2.22 -> ZERO clipping!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 112;
    const tg = topCv.getContext('2d');
    tg.clearRect(0, 0, 512, 112);
    tg.textAlign = 'center';
    tg.font = '700 32px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffc966';
    tg.fillText('Fe³⁺ HEME & HEMOZOIN', 256, 44);
    tg.font = '600 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffe5bf';
    tg.fillText('Protoporphyrin IX · Fe–O Dimer', 256, 82);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLabel = new THREE.Mesh(
      new THREE.PlaneGeometry(1.66, 0.36),
      reg(
        'iron_atom',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.78,
          transparent: true,
          roughness: 0.35,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLabel.position.set(0, 1.06, 0.14);
    grp.add(topLabel);

    // Crisp BOTTOM element legend plaque strictly centered inside lower arc (width 1.56 << chord 2.18 -> ZERO clipping!)
    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 80;
    const bg = botCv.getContext('2d');
    bg.clearRect(0, 0, 512, 80);
    bg.textAlign = 'center';
    bg.font = '700 24px system-ui, -apple-system, sans-serif';
    const chips: Array<[string, string, number]> = [
      ['Fe', '#ff9938', 112],
      ['N', '#529eff', 184],
      ['O', '#ff4f62', 256],
      ['C', '#a8b6cc', 328],
      ['H', '#eef5ff', 400],
    ];
    chips.forEach(([sym, hx, cx]) => {
      bg.beginPath();
      bg.arc(cx - 18, 40, 11, 0, Math.PI * 2);
      bg.fillStyle = hx;
      bg.fill();
      bg.fillStyle = '#eef2fa';
      bg.fillText(sym, cx + 10, 48);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLabel = new THREE.Mesh(
      new THREE.PlaneGeometry(1.56, 0.25),
      reg(
        'iron_atom',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.76,
          transparent: true,
          roughness: 0.35,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLabel.position.set(0, -1.16, 0.14);
    grp.add(botLabel);

    SITES.iron_atom.push(FE0.clone());
    placed += 6;
  }

  // -------------------------------------------------------------------------
  // Live Parasite Flows: Shaded Opaque-Discard 4x4 Glyphs (Visible Through Wet Gel!)
  // Exact 6 MOL keys: hb, heme, hemozoin_flow, atp, ipp, effectors
  // -------------------------------------------------------------------------
  const MOL = {
    hb: ['Hemoglobin (RBC → vacuole)', '#ff5468', 0, 0.27],
    heme: ['Toxic free Fe³⁺-heme', '#ff8e3c', 1, 0.25],
    hemozoin_flow: ['Hemozoin biocrystal growth', '#d48cff', 2, 0.26],
    atp: ['ATP (glideosome & core)', '#fff066', 3, 0.27],
    ipp: ['Apicoplast IPP (isoprenoids)', '#52f2a8', 4, 0.24],
    effectors: ['Secreted adhesins & effectors', '#66ecff', 5, 0.25],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0e131c';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.04, ...P(0.5, 0.5), s * 0.62);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.52).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const drawBalls = list => {
      g.strokeStyle = ink;
      g.lineWidth = s * 0.10;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawLine = (pts, w) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      g.lineWidth = (w + 0.10) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // Hemoglobin tetramer (4-lobed alpha2-beta2 cluster)
        drawBalls([[0.36, 0.36, 0.18], [0.64, 0.36, 0.18], [0.36, 0.64, 0.18], [0.64, 0.64, 0.18]]);
        break;
      case 1: // Free Fe3+-Heme (planar diamond porphyrin ring + bright central Fe dot)
        drawLine([[0.5, 0.18], [0.82, 0.5], [0.5, 0.82], [0.18, 0.5], [0.5, 0.18]], 0.10);
        drawBalls([[0.5, 0.5, 0.14]]);
        break;
      case 2: // Hemozoin crystal brick (sharp stacked prism)
        g.beginPath();
        g.moveTo(...P(0.28, 0.22)); g.lineTo(...P(0.72, 0.16));
        g.lineTo(...P(0.72, 0.78)); g.lineTo(...P(0.28, 0.84)); g.closePath();
        g.lineWidth = s * 0.11; g.strokeStyle = ink; g.stroke();
        g.fillStyle = gr; g.fill();
        drawLine([[0.34, 0.50], [0.66, 0.46]], 0.06);
        break;
      case 3: // ATP (adenosine + 3 glowing phosphates)
        drawBalls([[0.62, 0.5, 0.09], [0.76, 0.5, 0.09], [0.90, 0.5, 0.08], [0.32, 0.5, 0.23]]);
        break;
      case 4: // IPP isoprenoid (branched 5-carbon chain + pyrophosphate)
        drawLine([[0.18, 0.62], [0.40, 0.40], [0.62, 0.58], [0.82, 0.44]], 0.10);
        drawLine([[0.40, 0.40], [0.40, 0.18]], 0.09);
        drawBalls([[0.82, 0.44, 0.13]]);
        break;
      case 5: // Secreted adhesins & effectors (globular tripartite payload)
        drawBalls([[0.50, 0.32, 0.17], [0.34, 0.64, 0.17], [0.66, 0.64, 0.17]]);
        break;
    }
    g.restore();
  }

  const ATLAS = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d');
    for (let k = 0; k < 6; k++) glyph(g, k, (k % 4) * 128 + 10, Math.floor(k / 4) * 128 + 10, 108, '#ffffff');
    return new THREE.CanvasTexture(c);
  })();

  // Opaque alpha-discard 4x4 flow shader (renders cleanly through wet-gel transmission!)
  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: { value: 1 }, uAtlas: { value: ATLAS } },
    vertexShader: `attribute float size, glyph, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vCol = icol; vG = glyph; vFade = fade;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mvPosition.z), 0., 56.);
        gl_Position = projectionMatrix * mvPosition;
      }`,
    fragmentShader: `uniform sampler2D uAtlas; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vec2 c = vec2(mod(vG, 4.), floor(vG / 4. + .01));
        vec4 t = texture2D(uAtlas, vec2((c.x + gl_PointCoord.x) / 4., 1. - (c.y + gl_PointCoord.y) / 4.));
        if (t.a < .5) discard;
        gl_FragColor = vec4(vCol * t.r * 1.24 * vFade, 1.);
      }`,
  });
  impMats.push(flowMat);

  const FLOW_MAX = 640;
  const fPos = new Float32Array(FLOW_MAX * 3);
  const fSize = new Float32Array(FLOW_MAX);
  const fCol = new Float32Array(FLOW_MAX * 3);
  const fGly = new Float32Array(FLOW_MAX);
  const fFade = new Float32Array(FLOW_MAX).fill(1);
  const flowGeo = new THREE.BufferGeometry();
  [['position', fPos, 3], ['size', fSize, 1], ['icol', fCol, 3], ['glyph', fGly, 1], ['fade', fFade, 1]].forEach(([nm, arr, d]) =>
    flowGeo.setAttribute(nm, new THREE.BufferAttribute(arr, d).setUsage(THREE.DynamicDrawUsage))
  );
  const flowPts = new THREE.Points(flowGeo, flowMat);
  flowPts.frustumCulled = false;
  cell.add(flowPts);

  // Subtle additive reaction splash rings
  const FXTEX = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 62);
    [[0, 0], [0.58, 0.14], [0.80, 1], [1, 0]].forEach(([o, a]) => gr.addColorStop(o, `rgba(255,255,255,${a})`));
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();
  const fxMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: flowMat.uniforms.uBoost, uTex: { value: FXTEX } },
    vertexShader: `attribute float size, alpha; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vA;
      void main() { vCol = icol; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mv.z), 0., 68.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D uTex; varying vec3 vCol; varying float vA;
      void main() { float a = texture2D(uTex, gl_PointCoord).a * vA; if (a < .01) discard; gl_FragColor = vec4(vCol, a); }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  impMats.push(fxMat);
  const FX_MAX = 180;
  const xPos = new Float32Array(FX_MAX * 3), xSize = new Float32Array(FX_MAX), xCol = new Float32Array(FX_MAX * 3), xA = new Float32Array(FX_MAX);
  const fxGeo = new THREE.BufferGeometry();
  [['position', xPos, 3], ['size', xSize, 1], ['icol', xCol, 3], ['alpha', xA, 1]].forEach(([nm, arr, d]) =>
    fxGeo.setAttribute(nm, new THREE.BufferAttribute(arr, d).setUsage(THREE.DynamicDrawUsage))
  );
  const fxPts = new THREE.Points(fxGeo, fxMat);
  fxPts.frustumCulled = false;
  cell.add(fxPts);

  const live = [];
  const free = [];
  for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  const fx = [];
  const fxFree = [];
  for (let i = FX_MAX - 1; i >= 0; i--) fxFree.push(i);

  const FLOW_COUNTS = Object.fromEntries(Object.keys(MOL).map(k => [k, 0]));
  let flowsOn = true;
  let flowSpeed = 1;
  let fClock = 0;
  let molHi = null;
  let hi = null;

  function splash(at: THREE.Vector3, hex: string, s = 0.34) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.58, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 3.0, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop();
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.048, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. Endocytosed Human Hemoglobin (hb) -> Toxic Free Heme (heme) -> Hemozoin Biocrystals (hemozoin_flow)
    {
      rate: 2.9,
      acc: 0.5,
      go: () => {
        const src = pickSite('hemoglobin', R0.clone().add(V(2.2, -0.4, 0.8)));
        const neck = mPos(0.95, -1.24, -0.10);
        const dvEntry = DV0.clone().add(V(-0.34, 0.22, -0.08));
        emitFlow('hb', [src, neck, dvEntry], ['rbc', 'hemoglobin', 'digestive_vacuole'], 2.8, () => {
          splash(dvEntry, '#ff8e3c', 0.32);
          const hzTarget = pickSite('hemozoin', DV0.clone().add(V(0.06, -0.10, 0.04)));
          const midHeme = dvEntry.clone().lerp(hzTarget, 0.5).add(V(rr(-0.14, 0.14), rr(-0.12, 0.12), rr(-0.12, 0.12)));
          emitFlow('heme', [dvEntry, midHeme, hzTarget], ['digestive_vacuole', 'hemozoin', 'iron_atom'], 1.9, () => {
            splash(hzTarget, '#d48cff', 0.34);
            const hzOut = hzTarget.clone().add(V(rr(-0.16, 0.16), rr(-0.14, 0.18), rr(-0.10, 0.16)));
            emitFlow('hemozoin_flow', [hzTarget, hzOut], ['hemozoin', 'digestive_vacuole', 'iron_atom'], 1.5);
          });
        });
      },
    },
    // 2. Direct local toxic heme -> hemozoin biocrystal nucleation inside the digestive vacuole
    {
      rate: 1.9,
      acc: 0.4,
      go: () => {
        const src = DV0.clone().add(V(rr(-0.38, -0.05), rr(0.05, 0.38), rr(-0.28, 0.16)));
        const dst = pickSite('hemozoin', DV0.clone().add(V(0.06, -0.10, 0.04)));
        emitFlow('heme', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.10, 0.08)), dst], ['digestive_vacuole', 'hemozoin', 'iron_atom'], 1.7, () => {
          emitFlow('hemozoin_flow', [dst, dst.clone().add(V(0.08, -0.12, 0.08))], ['hemozoin', 'digestive_vacuole'], 1.4);
        });
      },
    },
    // 3. Glycolytic & Mitochondrial ATP fueling the PfMyoA-MTIP Glideosome, Nucleus & 80S Ribosomes
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        const src = rand() < 0.5 ? pickSite('mito', mPos(-0.2, 0.1, 0.9)) : mPos(rr(-0.6, 0.4), rr(-0.4, 0.4), rr(-0.3, 0.4));
        const dstKey = rand() < 0.58 ? 'glideosome' : rand() < 0.5 ? 'ribosome_80s' : 'nucleus';
        const dst = pickSite(dstKey, mPos(0.5, 0.8, 0.6));
        const mid = src.clone().lerp(dst, 0.5).add(V(0, 0.22, 0.14));
        emitFlow('atp', [src, mid, dst], ['mito', 'glideosome', 'actin', 'imc', dstKey], 2.5, () => {
          if (dstKey === 'glideosome') splash(dst, '#fff066', 0.34);
        });
      },
    },
    // 4. Apicoplast IPP (Isoprenoid precursor via MEP/DOXP) exported across all 4 membranes into parasite cytosol!
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const src = pickSite('apicoplast_dna', AP0.clone());
        const rim = AP0.clone().add(V(rr(-0.35, 0.45), rr(-0.55, 0.35), rr(-0.35, 0.45)));
        const dstKey = rand() < 0.5 ? 'imc' : rand() < 0.5 ? 'mito' : 'ribosome_80s';
        const dst = pickSite(dstKey, mPos(-0.4, 0.4, 0.6));
        emitFlow('ipp', [src, rim, dst], ['apicoplast', 'apicoplast_membranes', 'apicoplast_dna', dstKey], 2.7, () => {
          splash(rim, '#52f2a8', 0.28);
        });
      },
    },
    // 5. Rhoptry & Microneme Adhesins + Host-Remodeling Effectors discharged through Apical Complex & PVM
    {
      rate: 2.7,
      acc: 0.4,
      go: () => {
        const fromRhop = rand() < 0.5;
        const src = fromRhop ? pickSite('rhoptries', mPos(1.3, 0.3, 0.1)) : pickSite('micronemes', mPos(1.7, -0.2, 0.2));
        const apex = pickSite('apical_complex', mPos(2.65, 0, 0));
        const roll = rand();
        const dst =
          roll < 0.38
            ? pickSite('pfrh5', mPos(2.85, 0.1, 0))
            : roll < 0.72
              ? pickSite('moving_junction', mPos(0.62, 1.85, 0))
              : pickSite('pvm', mPos(0.2, 1.9, -0.5));
        emitFlow('effectors', [src, apex, dst], ['rhoptries', 'micronemes', 'apical_complex', 'pfrh5', 'moving_junction', 'pvm'], 2.6, () => {
          splash(dst, '#66ecff', 0.34);
        });
      },
    },
  ];

  function updateFlows(dt: number) {
    fClock += dt;
    if (dt > 0) {
      STREAM_TIMERS.forEach(s => {
        s.acc += dt * s.rate;
        while (s.acc >= 1) {
          s.acc--;
          s.go();
        }
      });
    }
    const w = fClock;
    const q = V();
    const anyHi = molHi || hi;
    for (let k = live.length - 1; k >= 0; k--) {
      const p = live[k];
      const base = MOL[p.type][3] * 1.32;
      p.t += dt / p.dur;
      if (p.t >= 1) {
        p.onDone?.();
        live[k] = live[live.length - 1];
        live.pop();
        free.push(p.i);
        fSize[p.i] = 0;
        continue;
      }
      p.curve.getPointAt(p.t, q);
      const a = p.wob * Math.sin(Math.PI * p.t);
      q.x += a * Math.sin(w * 5.2 + p.ph);
      q.y += a * Math.cos(w * 4.4 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.8 + p.ph * 1.9);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.48 : 0.52) : 1);
      fFade[p.i] = anyHi && !lit ? 0.28 : 1;
    }
    for (let k = fx.length - 1; k >= 0; k--) {
      const f = fx[k];
      f.t += dt;
      const u = f.t / f.life;
      if (u >= 1) {
        fx[k] = fx[fx.length - 1];
        fx.pop();
        fxFree.push(f.i);
        xA[f.i] = xSize[f.i] = 0;
        continue;
      }
      xPos[f.i * 3] = f.at.x; xPos[f.i * 3 + 1] = f.at.y; xPos[f.i * 3 + 2] = f.at.z;
      xCol[f.i * 3] = f.c.r; xCol[f.i * 3 + 1] = f.c.g; xCol[f.i * 3 + 2] = f.c.b;
      xSize[f.i] = f.s * (0.35 + 1.25 * (1 - (1 - u) ** 3));
      xA[f.i] = (1 - u) ** 1.5;
    }
    flowGeo.attributes.position.needsUpdate = flowGeo.attributes.size.needsUpdate = flowGeo.attributes.fade.needsUpdate = true;
    fxGeo.attributes.position.needsUpdate = fxGeo.attributes.size.needsUpdate = fxGeo.attributes.icol.needsUpdate = fxGeo.attributes.alpha.needsUpdate = true;
  }

  // -------------------------------------------------------------------------
  // Resize, HUD Legend, Flows Key & Highlight System
  // -------------------------------------------------------------------------
  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    bloom.resolution.set(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    lens.uniforms.uRes.value.set(innerWidth, innerHeight);
    const s = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan((camera.fov * Math.PI) / 360));
    impMats.forEach(m => { if (m.uniforms.uScale) m.uniforms.uScale.value = s; });
  }
  addEventListener('resize', resize);

  const legend = document.getElementById('legend');
  PARTS.forEach(([k, name, hex]) => {
    const it = document.createElement('div');
    it.className = 'it';
    const sw = document.createElement('span');
    sw.className = 'sw';
    sw.style.background = hex;
    const t = document.createElement('span');
    t.textContent = name;
    it.append(sw, t);
    legend.append(it);
    it.onmouseenter = () => setHi(k);
    it.onmouseleave = () => setHi(null);
  });
  const keyEl = document.createElement('div');
  keyEl.className = 'key';
  keyEl.innerHTML =
    `<div class="row">Bases ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>RNA · 4-Membrane Plastid</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Plasmodium falciparum Merozoite & Erythrocyte: a eukaryotic intracellular parasite invades a human red blood cell via PfRH5–Basigin, the AMA1–RON2 moving junction, and the PfMyoA glideosome, packing a 4-membrane relict chloroplast (apicoplast) and crystallizing toxic hemoglobin heme into hemozoin.';
  tipBox.textContent = TIP0;

  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div');
    it.className = 'mol';
    const cv = document.createElement('canvas');
    cv.width = cv.height = 44;
    glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
    const t = document.createElement('span');
    t.textContent = name;
    it.append(cv, t);
    document.getElementById('mols').append(it);
    it.onmouseenter = () => { molHi = k; };
    it.onmouseleave = () => { molHi = null; };
  });

  function showInfo(k) {
    const inf = k && INFO[k];
    tipBox.replaceChildren();
    if (!inf) {
      tipBox.textContent = TIP0;
      return;
    }
    const b = document.createElement('b');
    b.textContent = PARTS.find(p => p[0] === k)?.[1] ?? k;
    tipBox.append(b, document.createElement('br'), `Structure: ${inf[0]}`, document.createElement('br'), `Role: ${inf[1]}`);
  }

  function setHi(k) {
    if (hi && REG[hi]) {
      REG[hi].mats.forEach(m => {
        if (m.userData.e0 && m.emissive) m.emissive.copy(m.userData.e0);
        if (m.userData.i0 !== undefined && 'emissiveIntensity' in m) m.emissiveIntensity = m.userData.i0;
      });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) {
      REG[hi].mats.forEach(m => {
        if (m.emissive) m.userData.e0 ??= m.emissive.clone();
        if ('emissiveIntensity' in m) m.userData.i0 ??= m.emissiveIntensity;
      });
    }
    showInfo(hi);
  }
  const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#6ceaff');

  // -------------------------------------------------------------------------
  // Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
  // -------------------------------------------------------------------------
  let motion = true;
  let sway = 0;
  let animClock = 0;
  let last = performance.now();

  document.getElementById('view').onclick = e => {
    view = (view + 1) % VIEWS.length;
    const [name, p, t] = VIEWS[view];
    curView = name;
    camera.position.copy(cell.localToWorld(p.clone()));
    controls.target.copy(cell.localToWorld(t.clone()));
    e.target.textContent = `View: ${name}`;
  };
  document.getElementById('look').onclick = e => {
    organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length];
    applyLook();
    e.target.textContent = `Membrane: ${organelleLook}`;
  };
  document.getElementById('cut').onclick = e => {
    cutOn = !cutOn;
    caps.visible = cutOn;
    e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow').onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = fxPts.visible = flowsOn;
    e.target.textContent = `Metabolism: ${flowsOn ? 'on' : 'off'}`;
  };
  const speed = document.getElementById('speed');
  const spd = document.getElementById('spd');
  speed.oninput = () => {
    flowSpeed = 2 ** +speed.value;
    spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`;
  };
  speed.ondblclick = () => { speed.value = 0; speed.oninput(); };
  document.getElementById('motion').onclick = e => {
    motion = !motion;
    e.target.textContent = motion ? 'Pause' : 'Play';
  };
  document.getElementById('snap').onclick = () => {
    composer.render();
    const a = document.createElement('a');
    a.download = 'plasmodium-falciparum-realistic.png';
    a.href = renderer.domElement.toDataURL('image/png');
    a.click();
  };

  const held = new Set();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !e.target.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k);
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), step = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  controls.enableRotate = false;
  let lookFrom = null;
  let downAt = null;
  renderer.domElement.addEventListener('pointerdown', e => {
    if (e.button === 0) {
      lookFrom = [e.clientX, e.clientY];
      downAt = [e.clientX, e.clientY];
      renderer.domElement.setPointerCapture(e.pointerId);
    }
  });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!lookFrom) return;
    const dx = e.clientX - lookFrom[0], dy = e.clientY - lookFrom[1];
    lookFrom = [e.clientX, e.clientY];
    if (tour.on) {
      tour.yaw = Math.min(0.44, Math.max(-0.44, tour.yaw - dx * 0.002));
      tour.pitch = Math.min(0.44, Math.max(-0.44, tour.pitch + dy * 0.002));
      return;
    }
    aim.setFromVector3(controls.target.clone().sub(camera.position));
    aim.theta -= dx * 0.002;
    aim.phi = Math.min(Math.PI - 0.05, Math.max(0.05, aim.phi + dy * 0.002));
    controls.target.copy(camera.position).add(V().setFromSpherical(aim));
  });
  for (const ev of ['pointerup', 'pointercancel']) {
    renderer.domElement.addEventListener(ev, e => {
      if (ev === 'pointerup' && downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) < 4) {
        ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
        ray.setFromCamera(ndc, camera);
        const map = OBJS_BY_MAT();
        const hit = ray
          .intersectObjects(cell.children, true)
          .find(h => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has(h.object.material));
        if (hit) {
          const k = map.get(hit.object.material);
          setHi(k);
          if (EMBED) toExplorer({ type: 'pick', key: k });
        }
      }
      lookFrom = downAt = null;
    });
  }

  function freeMove(dt: number) {
    if (!held.size || tour.on) return;
    camera.getWorldDirection(fwd);
    side.crossVectors(fwd, camera.up).normalize();
    step
      .set(0, 0, 0)
      .addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s')))
      .addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (step.lengthSq() < 1e-6) return;
    step.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * 0.5));
    camera.position.add(step);
    controls.target.add(step);
  }

  const tour = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = x => x * x * x * (x * (x * 6 - 15) + 10);

  function poseOf(m) {
    if (m.view) {
      const v = VIEWS.find(x => x[0] === m.view);
      return v && { p: v[1].clone(), t: v[2].clone() };
    }
    const partKey = m.part || m.focus;
    if (partKey) {
      const f = focusOf(partKey);
      return f && {
        p: f.c.clone().addScaledVector(f.dir, ((m.dist ?? 1) * f.r) / Math.sin((camera.fov * Math.PI) / 360)),
        t: f.c.clone(),
      };
    }
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [-0.35, -0.35, 0.25])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
    }
    cell.updateMatrixWorld();
    tour.from = {
      p: cell.worldToLocal(camera.position.clone()),
      t: cell.worldToLocal(controls.target.clone()),
    };
    tour.to = to;
    Object.assign(tour, { on: true, t: m.dur > 0 ? 0 : 1, dur: m.dur || 1, seq: m.seq ?? 0, orbit: m.orbit ?? 0, sent: false });
    controls.enabled = false;
    held.clear();
    return true;
  }

  function freeCamera() {
    tour.on = false;
    tour.yaw = tour.pitch = 0;
    controls.enabled = true;
  }

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.0, 0.0, 0.2);
  function tourFrame(dt: number) {
    if (!tour.on) return;
    const { from, to } = tour;
    if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
    else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, ((tour.orbit * Math.PI) / 180) * dt).add(to.t);
    const e = smoother(tour.t);
    ft.lerpVectors(from.t, to.t, e);
    qa.copy(from.p).sub(C0);
    qb.copy(to.p).sub(C0);
    const ra = Math.max(0.05, qa.length()), rb = Math.max(0.05, qb.length());
    qa.normalize();
    qb.normalize();
    const ang = Math.acos(Math.min(1, Math.max(-1, qa.dot(qb))));
    if (ang < 1e-3 || ang > 3.1) fp.lerpVectors(qa, qb, e).normalize();
    else fp.copy(qa).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(qb, Math.sin(e * ang)).divideScalar(Math.sin(ang));
    fp.multiplyScalar(Math.pow(ra, 1 - e) * Math.pow(rb, e) * (1 + Math.min(0.45, ang * 0.28) * Math.sin(Math.PI * e))).add(C0);
    if (!lookFrom) {
      const k = Math.exp(-dt / 0.2);
      tour.yaw *= k;
      tour.pitch *= k;
    }
    look.copy(ft).sub(fp);
    if (tour.yaw || tour.pitch) {
      right.crossVectors(look, UP).normalize();
      look.applyAxisAngle(UP, tour.yaw).applyAxisAngle(right, -tour.pitch);
    }
    camera.position.copy(fp);
    cell.localToWorld(camera.position);
    controls.target.copy(fp).add(look);
    cell.localToWorld(controls.target);
    camera.lookAt(controls.target);
    if (tour.t >= 1 && !tour.sent) {
      tour.sent = true;
      if (EMBED) toExplorer({ type: 'arrived', seq: tour.seq });
    }
  }

  // Exact tag anchor coordinates for all 20 parts across all 6 views
  const POINTS = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      rbc: SITES.rbc[2] ?? R0.clone().add(V(-4.2, 1.8, 2.2)),
      pvm: SITES.pvm[2] ?? M0.clone().add(V(-0.8, 2.1, 0.8)),
      imc: SITES.imc[0] ?? M0.clone().add(V(1.6, 1.3, 0.8)),
      apical_complex: SITES.apical_complex[0] ?? mPos(2.68, 0, 0),
      rhoptries: SITES.rhoptries[0] ?? mPos(1.32, 0.36, 0.16),
      micronemes: SITES.micronemes[0] ?? mPos(1.90, -0.45, 0.35),
      moving_junction: SITES.moving_junction[2] ?? mPos(0.62, 1.98, 0),
      pfrh5: SITES.pfrh5[0] ?? mPos(2.96, 0.12, 0),
      glideosome: SITES.glideosome[1] ?? mPos(0.95, 1.35, -0.55),
      actin: SITES.actin[2] ?? mPos(0.85, 1.25, -0.70),
      nucleus: SITES.nucleus[0] ?? NU0.clone(),
      ribosome_80s: SITES.ribosome_80s[1] ?? mPos(-0.75, 0.82, -0.25),
      mito: SITES.mito[1] ?? mPos(-0.74, -0.32, 0.94),
      apicoplast: SITES.apicoplast[0] ?? AP0.clone(),
      apicoplast_membranes: SITES.apicoplast_membranes[0] ?? AP0.clone().add(V(0.05, 0.52, 0.42)),
      apicoplast_dna: SITES.apicoplast_dna[0] ?? AP0.clone().add(V(0.06, 0.04, 0.06)),
      digestive_vacuole: SITES.digestive_vacuole[0] ?? DV0.clone().add(V(-0.42, -0.32, 0.35)),
      hemoglobin: SITES.hemoglobin[2] ?? R0.clone().add(V(-1.6, 0.5, 1.4)),
      hemozoin: SITES.hemozoin[0] ?? DV0.clone().add(V(0.06, -0.10, 0.04)),
      iron_atom: FE0.clone(),
    };
    let P = { ...base };
    if (vName === 'invasion') {
      P = {
        ...base,
        apical_complex: SITES.apical_complex[0] ?? mPos(2.68, 0, 0),
        pfrh5: SITES.pfrh5[1] ?? mPos(2.92, -0.15, 0.15),
        rhoptries: SITES.rhoptries[0] ?? mPos(1.35, 0.36, 0.16),
        micronemes: SITES.micronemes[2] ?? mPos(1.88, -0.46, 0.22),
        moving_junction: SITES.moving_junction[1] ?? mPos(0.62, 1.65, 1.10),
        glideosome: SITES.glideosome[0] ?? mPos(1.05, 1.25, -0.50),
        actin: SITES.actin[1] ?? mPos(0.95, 1.20, -0.65),
      };
    } else if (vName === 'core') {
      P = {
        ...base,
        nucleus: NU0.clone(),
        ribosome_80s: SITES.ribosome_80s[2] ?? mPos(-0.65, 0.72, -0.25),
        mito: SITES.mito[0] ?? mPos(-0.08, 0.22, 1.04),
        imc: SITES.imc[SITES.imc.length - 1] ?? M0.clone().add(V(1.75, 1.05, 0.45)),
      };
    } else if (vName === 'apicoplast') {
      P = {
        ...base,
        apicoplast: AP0.clone().add(V(-0.14, -0.06, -0.08)),
        apicoplast_membranes: SITES.apicoplast_membranes[0] ?? AP0.clone().add(V(0.05, 0.52, 0.42)),
        apicoplast_dna: SITES.apicoplast_dna[0] ?? AP0.clone().add(V(0.06, 0.04, 0.06)),
      };
    } else if (vName === 'hemozoin') {
      P = {
        ...base,
        digestive_vacuole: SITES.digestive_vacuole[0] ?? DV0.clone().add(V(-0.42, -0.32, 0.35)),
        hemoglobin: SITES.hemoglobin[SITES.hemoglobin.length - 1] ?? DV0.clone().add(V(-0.28, 0.30, -0.10)),
        hemozoin: SITES.hemozoin[0] ?? DV0.clone().add(V(0.06, -0.10, 0.04)),
      };
    } else if (vName === 'atoms') {
      P = { ...base, iron_atom: FE0.clone() };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      rbc: 5.4, pvm: 3.4, imc: 3.1, apical_complex: 2.0, rhoptries: 2.1,
      micronemes: 1.9, moving_junction: 2.6, pfrh5: 1.8, glideosome: 2.0, actin: 2.0,
      nucleus: 1.9, ribosome_80s: 2.2, mito: 2.2, apicoplast: 1.45, apicoplast_membranes: 1.50,
      apicoplast_dna: 1.25, digestive_vacuole: 1.60, hemoglobin: 3.2, hemozoin: 1.35, iron_atom: 2.15,
    };
    const DIRS = {
      rbc: V(0.32, 0.38, 0.87).normalize(),
      apicoplast: V(0.48, 0.25, 0.84).normalize(),
      apicoplast_membranes: V(0.48, 0.25, 0.84).normalize(),
      apicoplast_dna: V(0.48, 0.25, 0.84).normalize(),
      digestive_vacuole: V(0.48, 0.14, 0.86).normalize(),
      hemozoin: V(0.48, 0.14, 0.86).normalize(),
      iron_atom: V(0.26, 0.10, 0.96).normalize(),
    };
    const dir = DIRS[k] ?? V(0.42, 0.24, 0.87).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.4, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    rbc: ['hemoglobin', 'pvm'],
    apical_complex: ['rhoptries', 'micronemes', 'pfrh5'],
    moving_junction: ['pfrh5', 'glideosome', 'actin', 'pvm'],
    glideosome: ['actin', 'imc', 'moving_junction'],
    apicoplast: ['apicoplast_membranes', 'apicoplast_dna'],
    apicoplast_membranes: ['apicoplast', 'apicoplast_dna'],
    digestive_vacuole: ['hemoglobin', 'hemozoin', 'iron_atom'],
    hemozoin: ['digestive_vacuole', 'iron_atom'],
    nucleus: ['ribosome_80s', 'mito'],
  };
  const saved = new Map();
  const hidden = [];
  let ghostArgs = null;
  let OBJS = null;
  let matMap = null;

  function OBJS_BY_MAT() {
    if (!matMap) {
      matMap = new Map();
      Object.entries(REG).forEach(([k, r]) => {
        [...r.mats, ...r.imp].forEach(m => { if (!matMap.has(m)) matMap.set(m, k); });
      });
    }
    return matMap;
  }
  function objsOf() {
    const of = OBJS_BY_MAT();
    const out = {};
    cell.traverse(o => {
      const k = o.material && of.get(o.material);
      if (k) (out[k] ??= []).push(o);
    });
    return out;
  }
  function ghost(keep = null, amount = 0.1, hide = false) {
    saved.forEach((v, m) => {
      Object.assign(m, v);
      if (m.uniforms?.uDim) m.uniforms.uDim.value = 1;
      m.needsUpdate = true;
    });
    saved.clear();
    hidden.forEach(o => { o.visible = true; });
    hidden.length = 0;
    ghostArgs = keep ? [keep, amount, hide] : null;
    if (!keep) return;
    const K = new Set(keep.flatMap(k => [k, ...(KIN[k] ?? [])]));
    Object.entries(REG).forEach(([k, r]) => {
      if (K.has(k)) return;
      if (hide) {
        (OBJS ??= objsOf())[k]?.forEach(o => { if (o.visible) { o.visible = false; hidden.push(o); } });
        return;
      }
      r.mats.forEach(m => {
        if (saved.has(m)) return;
        saved.set(m, {
          transparent: m.transparent,
          opacity: m.opacity,
          depthWrite: m.depthWrite,
          ...('transmission' in m && { transmission: m.transmission }),
        });
        m.transparent = true;
        m.opacity = Math.min(m.opacity, amount);
        m.depthWrite = false;
        if ('transmission' in m) m.transmission = 0;
        m.needsUpdate = true;
      });
      r.imp.forEach(m => {
        if (saved.has(m)) return;
        saved.set(m, { transparent: m.transparent, depthWrite: m.depthWrite });
        if (m.uniforms?.uDim) m.uniforms.uDim.value = amount * 0.5;
        m.transparent = true;
        m.depthWrite = false;
        m.needsUpdate = true;
      });
    });
  }

  let blinkT0 = null;
  let blinkN = 3;
  function blink(k, n = 3) {
    setHi(k);
    if (hi) { blinkT0 = performance.now(); blinkN = n; }
  }
  const hiLevel = now => {
    if (blinkT0 === null) return 0.55 + 0.45 * Math.sin(now / 180);
    const t = (now - blinkT0) / 1000;
    return t < blinkN / 1.5 ? 0.5 - 0.5 * Math.cos(t * 3 * Math.PI) : 0.3 + 0.06 * Math.sin(now / 400);
  };

  function setState(m) {
    const g = ghostArgs;
    if (g) ghost(null);
    if (m.look) {
      const normalized = LOOKS.includes(m.look) ? m.look : m.look === 'glass' || m.look === 'xray' ? 'see-through' : 'gel';
      if (normalized !== organelleLook) {
        organelleLook = normalized;
        applyLook();
        const lb = document.getElementById('look');
        if (lb) lb.textContent = `Membrane: ${organelleLook}`;
      }
    }
    if (m.cut !== undefined && m.cut !== cutOn) {
      cutOn = m.cut;
      caps.visible = cutOn;
      const cb = document.getElementById('cut');
      if (cb) cb.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
    }
    if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow').click();
    if (m.motion !== undefined) {
      motion = m.motion;
      const mb = document.getElementById('motion');
      if (mb) mb.textContent = motion ? 'Pause' : 'Play';
    }
    if (g) ghost(...g);
  }

  // -------------------------------------------------------------------------
  // Main Animation Loop (Sway + Stepping PfMyoA Glideosome + Moving Junction Pulse + Flows)
  // -------------------------------------------------------------------------
  const tmpQ = new THREE.Quaternion();
  const lightView = V();

  function stepActors(dt: number) {
    animClock += dt;
    // Animated PfMyoA-MTIP glideosome ATPase power-stroke stepping along sub-pellicular PfActI tracks
    glideosomeActors.forEach(a => {
      const stroke = Math.sin(animClock * 3.4 + a.phase);
      a.obj.position.copy(a.basePos).addScaledVector(a.axis, stroke * 0.075);
      tmpQ.setFromAxisAngle(V(0, 1, 0), stroke * 0.22);
      a.obj.quaternion.copy(a.baseQuat).multiply(tmpQ);
    });
    // Subtle peristaltic glide pulse on the AMA1-RON2 moving junction ring
    if (junctionHaloGroup) {
      const mjShift = Math.sin(animClock * 1.6) * 0.08;
      junctionHaloGroup.position.copy(mPos(0.72 + mjShift, 0, 0));
      const sc = 1 + 0.015 * Math.sin(animClock * 3.2);
      junctionHaloGroup.scale.set(sc, sc, 1);
    }
    // Gentle Fe3+ redox shimmer on the circular atomic inset halos
    if (ironSparkGroup) {
      const sp = 1 + 0.08 * Math.sin(animClock * 3.6);
      ironSparkGroup.children.forEach((h, i) => {
        h.scale.setScalar(i === 0 ? sp : 2 - sp);
      });
    }
  }

  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3.5) / 18));
      cell.rotation.y = 0.090 * Math.sin(sway * 0.11);
      stepActors(dt * Math.max(0.35, Math.min(2.4, flowSpeed)));
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.4, camera.position.distanceTo(controls.target) / 13.5));
    cell.updateMatrixWorld();
    updateAllCuts();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) {
      const k = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach(m => {
        if (m.emissive) {
          m.emissive.copy(c);
          m.emissiveIntensity = 0.28 + 0.78 * k;
        }
      });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = k; });
    }
    lens.uniforms.uTime.value = now / 1000;
    freeMove(dt);
    controls.update();
    tourFrame(dt);
    composer.render();
    if (EMBED) embedFrame();
  }

  function build() {
    const T = buildPdbTemplates();
    buildRbcAndHemoglobin(T);
    buildPvmAndMerozoitePellicle();
    buildInvasionMachinery(T);
    buildEukaryoticCore(T);
    buildFourMembraneApicoplast(T);
    buildDigestiveVacuoleAndHemozoin();
    buildAtomicIronHemeInset();
    // Warm up all 6 parasite molecular flow pathways so every species is visibly flowing on frame 1
    for (let s = 0; s < 160; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // Explorer postMessage Protocol & window.__cell Debug Contract
  // -------------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = m => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts = [];
  let tagSeq = 0;
  let sentReady = false;
  let sendTagsAlias = false;
  const scr = V();

  const say = () =>
    toExplorer({
      type: 'state',
      view: curView,
      motion,
      look: organelleLook,
      cut: cutOn,
      flow: flowsOn,
    });

  function embedFrame() {
    if (!sentReady) {
      sentReady = true;
      const mols = Object.entries(MOL).map(([k, [name, colour, g]]) => {
        const cv = document.createElement('canvas');
        cv.width = cv.height = 44;
        glyph(cv.getContext('2d'), g, 3, 3, 38, colour);
        return [k, name, cv.toDataURL()];
      });
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]) });
    }
    const w = innerWidth, h = innerHeight;
    const pts = tagPts.map(p => {
      if (!p) return null;
      scr.copy(p);
      cell.localToWorld(scr);
      scr.project(camera);
      return [(scr.x * 0.5 + 0.5) * w, (-scr.y * 0.5 + 0.5) * h, scr.z < 1];
    });
    toExplorer({ type: 'pts', seq: tagSeq, pts });
    if (sendTagsAlias) toExplorer({ type: 'tags', seq: tagSeq, tags: pts, pts });
  }

  if (EMBED) {
    addEventListener('message', e => {
      const m = e.data;
      if (!m || m.to !== 'realistic-cell') return;
      if (m.cmd === 'view') {
        const v = VIEWS.findIndex(x => x[0] === m.view);
        if (v < 0) return;
        freeCamera();
        view = v;
        const [name, p, t] = VIEWS[v];
        curView = name;
        camera.position.copy(cell.localToWorld(p.clone()));
        controls.target.copy(cell.localToWorld(t.clone()));
        const vb = document.getElementById('view');
        if (vb) vb.textContent = `View: ${name}`;
        const P = pointsOf(m.view);
        tagPts = (m.points ?? m.tags ?? []).map(k => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'track' || m.cmd === 'tags') {
        const list = m.points ?? m.tags ?? [];
        tagPts = list.map(x => {
          const [v, k] = Array.isArray(x) ? x : [m.view ?? 'overview', x];
          return (v === 'focus' ? focusOf(k)?.c : pointsOf(v)[k] ?? focusOf(k)?.c) ?? null;
        });
        tagSeq = m.seq;
        if (m.cmd === 'tags') {
          sendTagsAlias = true;
          embedFrame();
        }
      }
      if (m.cmd === 'fly' && !flyTo(m)) toExplorer({ type: 'arrived', seq: m.seq ?? 0, missed: true });
      if (m.cmd === 'free') freeCamera();
      if (m.cmd === 'blink') {
        if (m.key) blink(m.key, m.n ?? 3);
        else setHi(null);
      }
      if (m.cmd === 'ghost') ghost(m.keep || m.keys || null, m.amount ?? 0.1, !!m.hide);
      if (m.cmd === 'set' || m.cmd === 'state') setState(m);
      if (m.cmd === 'hi') {
        blinkT0 = null;
        setHi(m.key);
      }
      if (m.cmd === 'mol') molHi = m.key;
      if (m.cmd === 'motion') document.getElementById('motion').click();
      if (m.cmd === 'look') document.getElementById('look').click();
      if (m.cmd === 'cut') document.getElementById('cut').click();
      if (m.cmd === 'flow') document.getElementById('flow').click();
      if (m.cmd === 'speed') {
        speed.value = m.v;
        speed.oninput();
      }
      if (m.cmd === 'key') m.down ? held.add(m.key) : held.delete(m.key);
      if (m.cmd === 'snap') {
        composer.render();
        toExplorer({ type: 'snap', url: renderer.domElement.toDataURL('image/png') });
      }
      say();
    });
    addEventListener('keydown', e => {
      if (e.key === 'Escape') toExplorer({ type: 'key', key: 'Escape' });
      else if (
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        (/^(Arrow(Left|Right)|Page(Up|Down)| |Enter)$/.test(e.key) || /^[cnemr1-9]$/i.test(e.key))
      ) {
        if (e.key === ' ') e.preventDefault();
        toExplorer({ type: 'key', key: e.key, shift: e.shiftKey });
      }
    });
  }

  window.__cell = {
    renderer,
    composer,
    camera,
    controls,
    scene,
    cell,
    REG,
    shells,
    get placed() { return placed; },
    get curView() { return curView; },
    setHi,
    V,
    focusOf,
    flyTo,
    freeCamera,
    ghost,
    blink,
    setState,
    tour,
    setLook: k => {
      organelleLook = LOOKS.includes(k) ? k : k === 'glass' || k === 'xray' ? 'see-through' : 'gel';
      applyLook();
    },
    get sites() { return SITES; },
    get flows() { return live; },
    get procs() { return FLOW_COUNTS; },
    get views() { return VIEWS; },
    pointsOf,
    setMol: k => { molHi = k; },
    step: (dt = 0.05, n = 1) => {
      for (let i = 0; i < n; i++) {
        stepActors(dt);
        updateFlows(dt);
      }
    },
    shot: () => { composer.render(); return renderer.domElement.toDataURL('image/png'); },
  };
});
