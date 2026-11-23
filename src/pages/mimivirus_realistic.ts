// @ts-nocheck
import * as THREE from 'three';
import { PDB_SUBVIRAL } from '../molecules/pdb_subviral.js';
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

runBiologyApp(20261113, ({ random, geometry, dna, rna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, randDir, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // Nanoscale coordinate system: 1 unit = 100 nm (NM = 0.01 units/nm).
  // Hero Mimivirus centered at V0 = (-0.85, 1.05, 0.0):
  //   500 nm pseudo-icosahedral double-jelly-roll capsid (R_CAP = 2.50 u),
  //   125 nm glycosylated surface fiber canopy (R_FIB = 3.75 u -> 750 nm total diameter),
  //   bald 5-fold golden stargate portal oriented toward the right-front phagosome.
  // Left-bottom comparator: true-scale 300 nm Mycoplasma genitalium at MYCO0 = (-6.25, -1.60, 0.55).
  // Right flank: cutaway Acanthamoeba phagosome at PHAGO0 = (2.25, 0.72, 0.62),
  //   host plasma membrane at AMOEBA0 = (5.05, 0.62, -0.35),
  //   cytoplasmic viral factory at VF0 = (5.45, 0.58, -0.18).
  // Lower-center foreground: circular magnified dsDNA atomic inset at M0 = (-0.70, -4.85, 2.55).
  const NM = 0.01;
  const V0 = V(-0.85, 1.05, 0.0);
  const R_CAP = 2.50;      // 250 nm capsid radius (500 nm diameter)
  const CAP_THICK = 0.22;  // 22 nm thick double-jelly-roll capsid + minor shell wall
  const R_MEM = 2.08;      // Internal 5 nm viral lipid bilayer radius (clean 20 nm clearance from capsid)
  const MEM_THICK = 0.11;
  const R_FIB = 3.75;      // 375 nm total radius (750 nm overall with 125 nm fiber canopy)

  const SG_DIR = V(0.89, -0.07, 0.45).normalize(); // Exact 5-fold stargate portal axis pointing into phagosome

  const MYCO0 = V(-6.25, -1.60, 0.55);
  const PHAGO0 = V(2.25, 0.72, 0.62);
  const AMOEBA0 = V(5.05, 0.62, -0.35);
  const VF0 = V(5.45, 0.58, -0.18);
  const M0 = V(-0.70, -4.85, 2.55);

  // Exact 5 required VIEWS (generously framed inside the clear viewport between #legend, #flows, #hud & #tools)
  const VIEWS = [
    ['overview', V(1.15, 2.85, 39.8), V(0.55, -0.58, 0.0)],
    ['stargate', V(5.05, 2.35, 13.15), V(1.62, 0.78, 0.72)],
    ['genome', V(-5.15, 2.15, 9.25), V(-1.25, 0.98, 0.12)],
    ['factory', V(7.35, 2.55, 13.65), V(5.05, 0.62, -0.15)],
    ['atoms', V(-0.70, -4.62, 10.65), V(-0.70, -4.85, 2.55)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'intact' | 'stargate_open';
  const MODE_ORDER: readonly ModeKey[] = ['intact', 'stargate_open'];
  const MODE_LABEL: Record<ModeKey, string> = {
    intact: 'Mode: Intact Virion',
    stargate_open: 'Mode: Stargate Open',
  };
  let mode: ModeKey = 'intact';
  let modeOpen = 0;       // Smoothly interpolated stargate opening progress [0..1]
  let targetOpen = 0;

  // Cinema dark-field WebGL2 microscopy stage
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#152542',
    bgMid: '#081020',
    bgOuter: '#020409',
    keyColor: '#fff4e6',
    keyIntensity: 3.15,
    rimColor: '#78d2ff',
    rimIntensity: 1.85,
    lampColor: '#ffc988',
    lampIntensity: 22,
    lampPos: [-2.6, 2.1, 4.8],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 260,
    bokehColor: '#76c8ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated secondary microscopy cavity lamps for the Stargate/Phagosome, Viral Factory & Mycoplasma comparator
  const factoryLamp = new THREE.PointLight('#c68cff', 14.5, 22, 2);
  factoryLamp.position.set(VF0.x + 1.4, VF0.y + 1.8, VF0.z + 3.8);
  const stargateLamp = new THREE.PointLight('#ffda75', 10.5, 16, 2);
  stargateLamp.position.set(PHAGO0.x + 0.6, PHAGO0.y + 1.1, PHAGO0.z + 3.2);
  const mycoLamp = new THREE.PointLight('#ffbd92', 9.5, 16, 2);
  mycoLamp.position.set(MYCO0.x + 0.6, MYCO0.y + 1.4, MYCO0.z + 3.6);
  scene.add(factoryLamp, stargateLamp, mycoLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Organized scene sub-groups for cutaway caps and animated stargate entry choreography
  const mimiCaps = new THREE.Group();
  const hostCaps = new THREE.Group();
  const stargateRoot = new THREE.Group();
  const fusionPouchGroup = new THREE.Group();
  const injectStreamGroup = new THREE.Group();
  cell.add(mimiCaps, hostCaps, stargateRoot, fusionPouchGroup, injectStreamGroup);

  // 1) Mimivirus cutaway planes: opens front-left 90-degree wedge (x < V0.x + 0.08 && z > V0.z - 0.08)
  //    leaving the right-front 5-fold stargate vertex 100% intact while cleanly revealing the interior core!
  const MIMI_CUT_X = V0.x + 0.08;
  const MIMI_CUT_Z = V0.z - 0.08;
  studio.CUT_LOCAL[0].set(V(1, 0, 0), -MIMI_CUT_X);
  studio.CUT_LOCAL[1].set(V(0, 0, -1), MIMI_CUT_Z);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  // 2) Amoeba & Phagosome cutaway plane: slices front hemisphere cleanly at z = AMOEBA0.z + 0.20 (single plane)
  const HOST_CUT_Z = AMOEBA0.z + 0.35;
  const HOST_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), HOST_CUT_Z)];
  const HOST_CUT = HOST_CUT_LOCAL.map(p => p.clone());
  const HOST_CLIP = { clippingPlanes: HOST_CUT, clipIntersection: false, clipShadows: true };

  // 3) Phagosome cutaway plane: slices front half at z = PHAGO0.z + 0.28 so the golden stargate gleams inside
  const PHAGO_CUT_Z = PHAGO0.z + 0.28;
  const PHAGO_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), PHAGO_CUT_Z)];
  const PHAGO_CUT = PHAGO_CUT_LOCAL.map(p => p.clone());
  const PHAGO_CLIP = { clippingPlanes: PHAGO_CUT, clipIntersection: false, clipShadows: true };

  // 4) Mycoplasma front cutaway wedge: opens right-front quadrant to reveal live 70S ribosomes inside 300 nm cell!
  const MYCO_CUT_LOCAL = [
    new THREE.Plane(V(-1, 0, 0), MYCO0.x),
    new THREE.Plane(V(0, 0, -1), MYCO0.z),
  ];
  const MYCO_CUT = MYCO_CUT_LOCAL.map(p => p.clone());
  const MYCO_CLIP = { clippingPlanes: MYCO_CUT, clipIntersection: true, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    const applyGroup = (localArr: THREE.Plane[], worldArr: THREE.Plane[]) => {
      worldArr.forEach((p, i) => {
        p.copy(localArr[i]);
        if (!cutOn) p.constant = 1e4;
        p.applyMatrix4(cell.matrixWorld);
      });
    };
    applyGroup(HOST_CUT_LOCAL, HOST_CUT);
    applyGroup(PHAGO_CUT_LOCAL, PHAGO_CUT);
    applyGroup(MYCO_CUT_LOCAL, MYCO_CUT);
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.8);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // Exact 16 partKeys required by Phase 13A contract & Guided Tour
  const PARTS = [
    ['fibers', '125 nm glycosylated fiber canopy (750 nm total)', '#5ce8ff'],
    ['capsid', '500 nm pseudo-icosahedral MCP capsid (PDB 5J7O)', '#4fa8ff'],
    ['stargate', '5-fold star-shaped stargate vertex portal', '#ffd24c'],
    ['inner_mem', 'Internal viral lipid bilayer (5 nm)', '#ff8e72'],
    ['genomic_fiber', '30 nm helical genomic fiber (PDB 7YX3)', '#b580ff'],
    ['dsdna', '1.18 Mbp linear dsDNA genome (~1,000 genes)', '#58a6ff'],
    ['tyrrs', 'Viral tyrosyl-tRNA synthetase (TyrRS · PDB 2J5B)', '#ff6eb4'],
    ['viral_rnap', 'Viral DNA-dependent RNA polymerase', '#4ee8b8'],
    ['capping_enz', 'Viral mRNA capping enzyme', '#ffa84d'],
    ['phagosome', 'Acidic Acanthamoeba phagosome (pH ~5)', '#66f0c8'],
    ['amoeba_mem', 'Cutaway Acanthamoeba plasma membrane', '#8caeff'],
    ['viral_factory', 'Cytoplasmic viral factory assembly hub', '#c77dff'],
    ['host_ribo', 'Stolen host 80S ribosomes (0 viral ribosomes)', '#f29ee8'],
    ['myco_ref', '300 nm Mycoplasma comparator (Alive)', '#ff9c6e'],
    ['atp_pool', 'Host cytoplasmic ATP pool (0 viral ATP)', '#ffe866'],
    ['dna_atoms', 'dsDNA A–T / G–C & PO₄⁻ atomic inset', '#72e0ff'],
  ];

  const INFO = {
    fibers: ['Dense 125 nm cross-linked glycosylated collagen-like surface fibrils covering 19 of 20 capsid zones', 'Expands diameter to 750 nm and mimics bacterial polysaccharides so Acanthamoeba phagocytoses the virion'],
    capsid: ['500 nm pseudo-icosahedral shell tiled with double-jelly-roll major capsid protein trimers (PDB 5J7O)', 'Armors the internal bilayer and 1.18 Mbp core against environmental drying, UV, and phagosomal digestion'],
    stargate: ['Unique 5-fold star-shaped vertex seam lacking surface fibers and sealed by 5 hinged triangular petals', 'Unzips cleanly inside acidic phagosomes (pH ~5) so the inner viral bilayer fuses and ejects the genomic core'],
    inner_mem: ['Internal 5 nm phospholipid bilayer lining the pseudo-icosahedral capsid interior', 'Protrudes through the opened stargate to fuse with the Acanthamoeba phagosome membrane for core delivery'],
    genomic_fiber: ['30 nm wide helical nucleoprotein sheath built from GMC-oxidoreductase shell subunits (PDB 7YX3)', 'Packages the massive 1.18 Mbp dsDNA genome into a protected 5-start/6-start hollow protein helix'],
    dsdna: ['1,181,549 bp linear double-stranded DNA genome encoding ~1,000 proteins (double Mycoplasma’s genome)', 'Carries transcription, DNA repair, capping, and tRNA-charging genes—yet encodes zero ribosomal subunits'],
    tyrrs: ['Viral tyrosyl-tRNA synthetase homodimer (PDB 2J5B) encoded directly by Mimivirus', 'Charges tRNA molecules with tyrosine to accelerate translation, yet still depends entirely on host ribosomes'],
    viral_rnap: ['Multi-subunit viral DNA-dependent RNA polymerase packaged inside the virion core', 'Launches immediate cytoplasmic transcription of early viral genes without entering the amoeba nucleus'],
    capping_enz: ['Bifunctional viral mRNA capping enzyme (triphosphatase / guanylyltransferase / methyltransferase)', 'Adds eukaryotic 5′ m7G caps to viral transcripts so stolen amoeba 80S ribosomes translate them rapidly'],
    phagosome: ['Acidified Acanthamoeba phagocytic vacuole (pH ~5) studded with proton-pumping V-ATPases', 'Engulfs the 750 nm Mimivirus as apparent bacterial prey, inadvertently triggering stargate opening'],
    amoeba_mem: ['Cutaway eukaryotic Acanthamoeba castellanii / polyphaga phospholipid bilayer with lobose pseudopods', 'Encloses the host cytoplasm, mitochondria, 80S ribosomes, and ATP supply hijacked by the giant virus'],
    viral_factory: ['Giant perinuclear cytoplasmic viral factory constructed after core release into amoeba cytoplasm', 'Replicates the 1.18 Mbp genome and assembles hundreds of new 500 nm icosahedral procapsids and fibers'],
    host_ribo: ['Eukaryotic 80S amoeba ribosomes (60S + 40S) recruited in dense polysome rosettes around the factory', 'Mimivirus encodes zero ribosomes—every viral capsid trimer and enzyme must be built by stolen host ribosomes'],
    myco_ref: ['True-scale 300 nm Mycoplasma genitalium (580 kbp, ~150 own 70S ribosomes, own glycolysis ATP)', 'Proves size does not define life: 300 nm Mycoplasma is alive, while 750 nm Mimivirus fails ribosome & ATP pillars'],
    atp_pool: ['Host amoeba ATP molecules generated by amoeba mitochondria and glycolysis in the cytoplasm', 'Mimivirus has zero ATP-synthesizing enzymes; stolen host ATP powers DNA copying, capping, and assembly'],
    dna_atoms: ['Magnified CPK atomic structure of dsDNA Watson–Crick A=T (2 H-bonds), G≡C (3 H-bonds), and phosphodiester P', 'Resolves C, H, N, O, and P atoms inside the 1.18 Mbp Mimivirus genome helix at 0.1–0.3 nm scale'],
  };

  const REG = {};
  const reg = (k, m) => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    (m.isShaderMaterial ? r.imp : r.mats).push(m);
    return m;
  };
  const phys = (o, clipObj = CLIP) => new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.82, ...clipObj, ...o });
  const protMat = (k, clip = true, extra = {}, clipPlanes = CUT) => {
    const m = phys(
      {
        vertexColors: true,
        roughness: 0.36,
        metalness: 0.05,
        clearcoat: 0.34,
        clearcoatRoughness: 0.28,
        sheen: 0.38,
        sheenColor: '#f5f8ff',
        normalMap: protBump,
        normalScale: new THREE.Vector2(0.36, 0.36),
        side: THREE.DoubleSide,
        clippingPlanes: clip ? clipPlanes : null,
        clipIntersection: clipPlanes.length > 1,
        ...extra,
      },
      {}
    );
    return reg(k, m);
  };
  const sculpt = (k, parent = cell, clip = true, extra = {}, clipPlanes = CUT) =>
    makeSculptedMesh(protMat(k, clip, extra, clipPlanes), parent);
  const molBatch = (k, geo, parent = cell, clip = true, extra = {}, clipPlanes = CUT) =>
    makeMolBatch(geo, protMat(k, clip, extra, clipPlanes), parent);

  const shells = [];
  const LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  let placed = 0;

  function cinemaShellMat(k, solidHex, gelHex, clipObj, opts = {}) {
    const m = makeCinemaMembraneMat(clipObj, opts.normalMap ?? bump(12, 10), {
      color: gelHex,
      attenuationColor: opts.attenCol ?? solidHex,
      attenuationDistance: opts.attenDist ?? 4.4,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.28,
      iridescence: opts.iridescence ?? 0.54,
      thickness: opts.thickness ?? 0.50,
      roughness: opts.roughness ?? 0.12,
      sheenColor: opts.sheenColor ?? '#e6f6ff',
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

  function balls(k, parent = cell, clip = true, cutPlanes = CUT) {
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

  // Synthetic cryo-EM Gaussian molecular surface builder (for eukaryotic 80S ribosomes, viral RNAP, capping enzyme)
  function synthGeo(beads, colors, maxDim = 28, scale = 1, nm = 0.022) {
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

  // Non-mutating orientation helpers
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

  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));

  // Animated stargate petal hinges & dynamic opening references
  const stargatePetals: Array<{
    pivot: THREE.Group;
    hingeAxis: THREE.Vector3;
    openSign: number;
    maxAngle: number;
  }> = [];
  const modeRefs: {
    stargateGlow?: THREE.MeshPhysicalMaterial;
    factoryCore?: THREE.MeshPhysicalMaterial;
    phagoGlow?: THREE.MeshPhysicalMaterial;
  } = {};

  // -------------------------------------------------------------------------
  // Exact Regular Icosahedron Geometry Oriented with Vertex #0 = SG_DIR (5-Fold Stargate!)
  // -------------------------------------------------------------------------
  const qIco = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), SG_DIR);
  const icoVerts: THREE.Vector3[] = (() => {
    const verts: THREE.Vector3[] = [];
    const s5 = 1 / Math.sqrt(5);
    const c5 = 2 / Math.sqrt(5);
    verts.push(V(0, 1, 0)); // Vertex 0 -> exact 5-fold stargate apex!
    for (let i = 0; i < 5; i++) {
      const a = (i * Math.PI * 2) / 5 + 0.18;
      verts.push(V(c5 * Math.cos(a), s5, c5 * Math.sin(a)));
    }
    for (let i = 0; i < 5; i++) {
      const a = ((i + 0.5) * Math.PI * 2) / 5 + 0.18;
      verts.push(V(c5 * Math.cos(a), -s5, c5 * Math.sin(a)));
    }
    verts.push(V(0, -1, 0)); // Vertex 11 -> antipodal vertex
    return verts.map(v => v.applyQuaternion(qIco).normalize());
  })();

  // 20 oriented equilateral faces (first 5 are the 5 stargate petals around vertex 0!)
  const icoFaces: Array<[number, number, number]> = [
    // 5 Stargate cap triangles (indices 0..4)
    [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 5], [0, 5, 1],
    // 10 Equatorial belt triangles (indices 5..14)
    [1, 6, 2], [2, 7, 3], [3, 8, 4], [4, 9, 5], [5, 10, 1],
    [6, 7, 2], [7, 8, 3], [8, 9, 4], [9, 10, 5], [10, 6, 1],
    // 5 Antipodal cap triangles (indices 15..19)
    [11, 7, 6], [11, 8, 7], [11, 9, 8], [11, 10, 9], [11, 6, 10],
  ];

  // Ensure outward triangle winding for all 20 icosahedral faces
  const icoFaceNormals: THREE.Vector3[] = icoFaces.map(f => {
    const a = icoVerts[f[0]], b = icoVerts[f[1]], c = icoVerts[f[2]];
    const n = b.clone().sub(a).cross(c.clone().sub(a)).normalize();
    const ctr = a.clone().add(b).add(c);
    if (n.dot(ctr) < 0) {
      const tmp = f[1]; f[1] = f[2]; f[2] = tmp;
      n.negate();
    }
    return n;
  });

  // Exact pseudo-icosahedral radial field (82% crisp icosahedral facets + 18% gentle cryo-EM rounding)
  const ICO_INRADIUS = Math.sqrt((5 + 2 * Math.sqrt(5)) / 15); // ~0.79465 for unit circumradius
  function pseudoIcoScale(dir: THREE.Vector3): number {
    let maxDot = 0.5;
    for (let i = 0; i < 20; i++) {
      const dp = dir.dot(icoFaceNormals[i]);
      if (dp > maxDot) maxDot = dp;
    }
    const facetR = ICO_INRADIUS / maxDot; // in [0.795 .. 1.0]
    const normFacet = facetR / 0.895;     // mean ~1.0
    return 0.82 * normFacet + 0.18 * 1.0;
  }
  const capsidR = (d: THREE.Vector3) => R_CAP * pseudoIcoScale(d);
  const innerMemR = (d: THREE.Vector3) => R_MEM * (0.65 * pseudoIcoScale(d) + 0.35);

  const inMimiCut = (p: THREE.Vector3) => p.x < MIMI_CUT_X - 0.02 && p.z > MIMI_CUT_Z + 0.02;
  // Exact icosahedron face test: true whenever direction d belongs to (or hugs the margin of) the 5 stargate petals (faces 0..4)!
  function inStargateFace(d: THREE.Vector3, margin = 0.028): boolean {
    let bestSg = -2;
    let bestOther = -2;
    for (let i = 0; i < 5; i++) {
      const dp = d.dot(icoFaceNormals[i]);
      if (dp > bestSg) bestSg = dp;
    }
    for (let i = 5; i < 20; i++) {
      const dp = d.dot(icoFaceNormals[i]);
      if (dp > bestOther) bestOther = dp;
    }
    return bestSg + margin >= bestOther;
  }
  const inStargateCone = (d: THREE.Vector3, cosLim = Math.cos((32 * Math.PI) / 180)) =>
    d.dot(SG_DIR) > cosLim || inStargateFace(d, 0.025);

  // Custom multi-band cutaway rim strip for front-left Mimivirus cutaway (x = MIMI_CUT_X, z >= MIMI_CUT_Z & z = MIMI_CUT_Z, x <= MIMI_CUT_X)
  function mimiCapStrip(
    rFn: (d: THREE.Vector3) => number,
    axis: 'x' | 'z',
    thick: number,
    layers: ReadonlyArray<readonly [number, number, string]>,
    n = 180
  ): THREE.BufferGeometry {
    const pos: number[] = [];
    const cols: number[] = [];
    const nor: number[] = [];
    const idx: number[] = [];
    const c = new THREE.Color();
    const off = axis === 'x' ? V(-0.005, 0, 0) : V(0, 0, 0.005);
    const nrm = off.clone().normalize();
    const center = V(MIMI_CUT_X, V0.y, MIMI_CUT_Z);
    const dirAt = (t: number) => {
      const a = t * Math.PI;
      // axis 'x': x=MIMI_CUT_X, z >= MIMI_CUT_Z (from top +Y -> front +Z -> bottom -Y)
      // axis 'z': z=MIMI_CUT_Z, x <= MIMI_CUT_X (from top +Y -> left -X -> bottom -Y)
      return axis === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(-Math.sin(a), Math.cos(a), 0);
    };
    let base = 0;
    layers.forEach(([f0, f1, hex]) => {
      c.set(hex);
      for (let i = 0; i <= n; i++) {
        const d = dirAt(i / n);
        const R = rFn(d);
        for (const f of [f0, f1]) {
          const p = center.clone().addScaledVector(d, R - f * thick).add(off);
          pos.push(p.x, p.y, p.z);
          cols.push(c.r, c.g, c.b);
          nor.push(nrm.x, nrm.y, nrm.z);
        }
      }
      for (let i = 0; i < n; i++) {
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

  // Build subdivided pseudo-icosahedral shell from selected face indices (excludes 5 stargate faces for true openable aperture!)
  function buildPseudoIcoFacesGeo(faceIndices: number[], baseR: number, subdiv = 9): THREE.BufferGeometry {
    const pos: number[] = [];
    const uv: number[] = [];
    const idx: number[] = [];
    const tmp = V();
    let vBase = 0;
    for (const fi of faceIndices) {
      const [ia, ib, ic] = icoFaces[fi];
      const A = icoVerts[ia], B = icoVerts[ib], C = icoVerts[ic];
      const rowStarts: number[] = [];
      for (let i = 0; i <= subdiv; i++) {
        rowStarts.push(vBase);
        const count = subdiv - i + 1;
        for (let j = 0; j < count; j++) {
          const u = i / subdiv;
          const v = j / subdiv;
          const w = 1 - u - v;
          tmp.set(0, 0, 0).addScaledVector(A, w).addScaledVector(B, u).addScaledVector(C, v).normalize();
          const r = baseR * pseudoIcoScale(tmp);
          pos.push(V0.x + tmp.x * r, V0.y + tmp.y * r, V0.z + tmp.z * r);
          uv.push(u, v);
          vBase++;
        }
      }
      for (let i = 0; i < subdiv; i++) {
        const r0 = rowStarts[i];
        const r1 = rowStarts[i + 1];
        const len = subdiv - i;
        for (let j = 0; j < len; j++) {
          idx.push(r0 + j, r1 + j, r0 + j + 1);
          if (j < len - 1) idx.push(r0 + j + 1, r1 + j, r1 + j + 1);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  // -------------------------------------------------------------------------
  // Build ALL 3 Real RCSB PDB Cryo-EM / Crystal Surface Templates from PDB_SUBVIRAL
  //   1. mimi_mcp  (PDB 5J7O, 3 chains) — Double-jelly-roll Major Capsid Protein trimer
  //   2. mimi_aars (PDB 2J5B, 2 chains) — Mimivirus Tyrosyl-tRNA Synthetase homodimer
  //   3. mimi_rnap (PDB 7YX3, 2 chains) — Mimivirus 30 nm Helical Genomic Fiber subunit
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // 1. Real PDB 5J7O — NCLDV Double-Jelly-Roll Major Capsid Protein Trimer (3 chains)
    const mcpCols = [col('#459eff'), col('#6cc4ff'), col('#3280e8')];
    const geoMcp = buildPdbSurfaceGeo(pdb.getModel(PDB_SUBVIRAL, 'mimi_mcp'), {
      nm: NM,
      scale: 4.5, // ~0.42 u wide cryo-EM trimer capsomer reading cleanly across 500 nm facets
      maxDim: 28,
      sigmaAng: 4.3,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? mcpCols[grp % 3].clone().offsetHSL(0.01, 0, 0.08) : mcpCols[grp % 3]),
    });

    // 2. Real PDB 2J5B — Mimivirus Tyrosyl-tRNA Synthetase (TyrRS, 2 chains)
    const aarsCols = [col('#ff5ca8'), col('#ff9ed0')];
    const geoTyrRS = buildPdbSurfaceGeo(pdb.getModel(PDB_SUBVIRAL, 'mimi_aars'), {
      nm: NM,
      scale: 6.4,
      maxDim: 28,
      sigmaAng: 4.1,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? aarsCols[grp & 1].clone().offsetHSL(0.01, 0, 0.08) : aarsCols[grp & 1]),
    });

    // 3. Real PDB 7YX3 — Mimivirus 30 nm Helical Genomic Fiber Shell Subunit (2 chains)
    const gfCols = [col('#a66eff'), col('#d4b0ff')];
    const geoGenomicSub = buildPdbSurfaceGeo(pdb.getModel(PDB_SUBVIRAL, 'mimi_rnap'), {
      nm: NM,
      scale: 5.0,
      maxDim: 28,
      sigmaAng: 4.2,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? gfCols[grp & 1].clone().offsetHSL(0.01, 0, 0.07) : gfCols[grp & 1]),
    });

    // Sculpted multi-subunit Viral DNA-dependent RNA Polymerase (emerald crab-claw clamp)
    const geoViralRnap = synthGeo(
      [
        [0, 0, 0, 2.5, 0],
        [-2.4, 1.4, 0.5, 1.9, 0],
        [2.5, 1.3, -0.4, 1.9, 1],
        [-1.9, -1.7, 0.7, 1.8, 1],
        [2.1, -1.6, -0.6, 1.8, 0],
        [0.1, 2.6, 0.9, 1.5, 2],
        [-0.3, -2.5, -0.7, 1.6, 2],
        [3.2, 0.1, 0.8, 1.3, 1],
      ],
      ['#2edba6', '#72ffd4', '#40b8c9'],
      26,
      1.15,
      0.022
    );

    // Sculpted bifunctional Viral mRNA Capping Enzyme (amber-gold bilobed triphosphatase/GTase)
    const geoCapping = synthGeo(
      [
        [-1.5, 0.4, 0, 2.0, 0],
        [1.6, -0.3, 0.2, 1.9, 1],
        [0.0, 1.6, -0.5, 1.5, 2],
        [-0.4, -1.4, 0.6, 1.4, 0],
        [2.4, 1.0, -0.3, 1.3, 1],
      ],
      ['#ff9838', '#ffc966', '#ff7043'],
      24,
      1.05,
      0.020
    );

    // High-resolution eukaryotic 80S Host Amoeba Ribosome (60S large crown + 40S small subunit)
    const geoRibo80 = synthGeo(
      [
        [0, -1.8, 0, 3.0, 0],
        [-2.9, -1.1, 0.8, 2.2, 0],
        [3.1, -0.9, -0.6, 2.1, 0],
        [0.2, -3.4, -0.9, 2.1, 2],
        [4.0, 1.1, -0.5, 1.45, 2],
        [-3.6, 0.7, -0.5, 1.45, 2],
        [0.5, 2.5, 1.0, 2.35, 1],
        [-2.1, 2.7, 0.6, 1.9, 1],
        [2.3, 2.1, 1.2, 1.75, 1],
        [-0.2, 0.65, -0.9, 1.55, 2],
      ],
      ['#e080e8', '#ffd0ff', '#ff88b8'],
      28,
      1.12,
      0.024
    );

    // Miniature 70S Mycoplasma Ribosome (for true-scale living cell comparator!)
    const geoRibo70 = synthGeo(
      [
        [0, -1.4, 0, 2.2, 0],
        [-2.2, -0.8, 0.5, 1.6, 0],
        [2.2, -0.7, -0.4, 1.6, 0],
        [0.3, 1.9, 0.7, 1.7, 1],
        [-1.5, 2.0, 0.4, 1.4, 1],
      ],
      ['#ffcf78', '#ffeeb8'],
      20,
      0.84,
      0.018
    );

    return { geoMcp, geoTyrRS, geoGenomicSub, geoViralRnap, geoCapping, geoRibo80, geoRibo70 };
  }

  // -------------------------------------------------------------------------
  // 1. Hero 750 nm Mimivirus: Pseudo-Icosahedral Capsid (5J7O), 125 nm Fibers,
  //    Hinged 5-Fold Golden Stargate Portal & Internal Viral Lipid Bilayer
  // -------------------------------------------------------------------------
  function buildMimivirusVirion(T) {
    // 1A. Main 15-facet Pseudo-Icosahedral Capsid Shell (leaves the 5 stargate faces truly openable!)
    const nonStargateFaces = Array.from({ length: 15 }, (_, i) => i + 5);
    const capsidOuterMat = cinemaShellMat('capsid', '#2e72c8', '#a6dcff', CLIP, {
      attenCol: '#245cb5',
      attenDist: 4.2,
      sssColor: '#5ec8ff',
      sssIntensity: 0.34,
      iridescence: 0.62,
      thickness: 0.54,
      roughness: 0.14,
      sheenColor: '#dcf4ff',
      normalMap: bump(14, 12),
      normalScale: 0.24,
    });
    const capsidOuterGeo = buildPseudoIcoFacesGeo(nonStargateFaces, R_CAP, 9);
    cell.add(shade(new THREE.Mesh(capsidOuterGeo, capsidOuterMat), true, true));

    // Inner dark-cobalt structural capsid backing so the faceted architecture pops sharply inside the cutaway
    const capsidBackMat = reg(
      'capsid',
      applyBacklitSSS(
        phys({
          color: '#1b3868',
          roughness: 0.52,
          metalness: 0.10,
          clearcoat: 0.26,
          side: THREE.BackSide,
          normalMap: protBump,
          normalScale: new THREE.Vector2(0.28, 0.28),
        }),
        '#4ea8ff',
        0.24,
        2.5
      )
    );
    cell.add(new THREE.Mesh(buildPseudoIcoFacesGeo(nonStargateFaces, R_CAP - CAP_THICK, 8), capsidBackMat));

    // Multi-layer cutaway rim capStrip along both Mimivirus cutaway planes (capsid wall + minor cement layer)
    const CAP_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.00, 0.26, '#8ae0ff'], // Outer glycosylated anchor lamina
      [0.26, 0.78, '#3888e8'], // Double-jelly-roll MCP trimer core (5J7O)
      [0.78, 1.00, '#72b8ff'], // Inner minor capsid cement proteins
    ];
    const capRimMat = reg(
      'capsid',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        metalness: 0.12,
        emissive: '#123e75',
        emissiveIntensity: 0.40,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      mimiCaps.add(new THREE.Mesh(mimiCapStrip(capsidR, ax, CAP_THICK, CAP_LAYERS, 180), capRimMat));
    }

    // Tile ~215 real PDB 5J7O (mimi_mcp) double-jelly-roll trimers across all 15 non-stargate capsid facets!
    const I_MCP = molBatch('capsid', T.geoMcp, cell, false, {
      emissive: '#103b72',
      emissiveIntensity: 0.24,
      roughness: 0.30,
      clearcoat: 0.52,
    });
    const pTmp = V();
    for (const fi of nonStargateFaces) {
      const [ia, ib, ic] = icoFaces[fi];
      const A = icoVerts[ia], B = icoVerts[ib], C = icoVerts[ic];
      const N_GRID = 5;
      for (let i = 0; i <= N_GRID; i++) {
        for (let j = 0; j <= N_GRID - i; j++) {
          // Skip exact shared edges/vertices lightly to avoid dense double-stacking
          if ((i === 0 && j === 0) || (i === N_GRID && j === 0) || (i === 0 && j === N_GRID)) continue;
          const u = (i + 0.33) / (N_GRID + 0.99);
          const v = (j + 0.33) / (N_GRID + 0.99);
          const w = 1 - u - v;
          if (w < 0.04) continue;
          pTmp.set(0, 0, 0).addScaledVector(A, w).addScaledVector(B, u).addScaledVector(C, v).normalize();
          const r = capsidR(pTmp) + 0.02;
          const pos = V0.clone().addScaledVector(pTmp, r);
          if (inMimiCut(pos)) continue;
          I_MCP.add(pos, qOut(pTmp, (fi * 1.1 + i * 0.7 + j * 0.5) % 6.283), rr(0.86, 1.02));
          placed++;
          if ((i + j) % 3 === 0 && SITES.capsid.length < 34) SITES.capsid.push(pos.clone());
        }
      }
    }
    // Also seat crisp 5J7O capsomers right along the cutaway rim edge for cryo-EM cross-section detail!
    for (let k = 2; k <= 18; k += 2) {
      const a = (k / 20) * Math.PI;
      const dX = V(0, Math.cos(a), Math.sin(a));
      const pX = V(MIMI_CUT_X + 0.08, V0.y, MIMI_CUT_Z).addScaledVector(dX, capsidR(dX) - 0.04);
      if (!inStargateCone(dX, 0.88)) {
        I_MCP.add(pX, qOut(dX, k * 0.6), 0.94);
        SITES.capsid.push(pX.clone());
        placed++;
      }
      const dZ = V(-Math.sin(a), Math.cos(a), 0);
      const pZ = V(MIMI_CUT_X, V0.y, MIMI_CUT_Z - 0.08).addScaledVector(dZ, capsidR(dZ) - 0.04);
      I_MCP.add(pZ, qOut(dZ, k * 0.8), 0.94);
      placed++;
    }
    I_MCP.done();

    // 1B. Dense Iridescent 125 nm Glycosylated Surface Fiber Canopy (fibers -> 750 nm total!)
    //     Covers every intact capsid surface EXCEPT the bald 5-fold stargate portal!
    const S_FIB = sculpt('fibers', cell, false, {
      emissive: '#0c5c75',
      emissiveIntensity: 0.30,
      roughness: 0.24,
      clearcoat: 0.62,
      sheen: 0.52,
      sheenColor: '#d0ffff',
    });
    const cFibRoot = col('#26a8e8');
    const cFibMid = col('#5ce8ff');
    const cFibTip = col('#b8ffff');
    const cGlycan = col('#78ffe6');

    const N_FIBERS = 440;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N_FIBERS; i++) {
      const y = 1 - ((i + 0.5) / N_FIBERS) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * golden;
      const d = V(Math.cos(th) * rad, y, Math.sin(th) * rad).normalize();
      if (inStargateFace(d, 0.045)) continue; // Famous bald 5-fold stargate vertex — zero fibers poking through golden petals!
      const r0 = capsidR(d);
      const p0 = V0.clone().addScaledVector(d, r0 - 0.02);
      if (inMimiCut(p0)) continue;
      // Skip fibers whose tips would protrude awkwardly into the open cutaway cavity face
      const pMidChk = V0.clone().addScaledVector(d, r0 + 0.55);
      if (inMimiCut(pMidChk)) continue;

      const u = ortho(d);
      const v = d.clone().cross(u).normalize();
      const fibLen = rr(1.14, 1.32); // True ~125 nm (1.25 u) canopy thickness!
      const sw1 = rr(-0.11, 0.11);
      const sw2 = rr(-0.11, 0.11);
      const pts = [
        p0,
        p0.clone().addScaledVector(d, fibLen * 0.34).addScaledVector(u, sw1 * 0.45).addScaledVector(v, sw2 * 0.45),
        p0.clone().addScaledVector(d, fibLen * 0.72).addScaledVector(u, sw1 * 0.92).addScaledVector(v, sw2 * 0.85),
        p0.clone().addScaledVector(d, fibLen).addScaledVector(u, sw1 * 0.55).addScaledVector(v, sw2 * 0.65),
      ];
      S_FIB.tube(pts, 0.025, 0.014, cFibRoot, cFibMid, 5, true);
      // Terminal glycosylated globular cap + secondary sugar bead
      S_FIB.add(pts[3], 0.092, i % 3 === 0 ? cGlycan : cFibTip);
      if (i % 2 === 0) S_FIB.add(pts[2].clone().addScaledVector(u, 0.045), 0.056, cFibMid);
      if (i % 10 === 0 && SITES.fibers.length < 30) SITES.fibers.push(pts[3].clone());
    }
    S_FIB.done();

    // 1C. Dramatic 5-Fold Star-Shaped Stargate Vertex Portal (5 Hinged Golden Triangular Petals!)
    stargateRoot.position.copy(V0);
    const petalPlateMat = reg(
      'stargate',
      applyBacklitSSS(
        phys(
          {
            color: '#e6a82e',
            emissive: '#6e4206',
            emissiveIntensity: 0.36,
            roughness: 0.24,
            metalness: 0.28,
            clearcoat: 0.68,
            clearcoatRoughness: 0.18,
            sheen: 0.55,
            sheenColor: '#fff2b8',
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.32, 0.32),
            side: THREE.DoubleSide,
          },
          {}
        ),
        '#ffe070',
        0.38,
        2.3
      )
    );
    const seamRidgeMat = reg(
      'stargate',
      phys(
        {
          color: '#ffe478',
          emissive: '#a86a08',
          emissiveIntensity: 0.56,
          roughness: 0.18,
          metalness: 0.34,
          clearcoat: 0.78,
        },
        {}
      )
    );
    modeRefs.stargateGlow = seamRidgeMat;

    // Sculpted circular gold-sapphire basal pentagonal frame rim hugging the 5 stargate hinge edges
    const S_SG_RING = sculpt('stargate', stargateRoot, false, {
      emissive: '#784808',
      emissiveIntensity: 0.36,
      roughness: 0.24,
      clearcoat: 0.64,
    });
    const cGoldRim = col('#ffd45a');
    const cGoldDeep = col('#d9881c');
    const vApex = icoVerts[0].clone().multiplyScalar(capsidR(icoVerts[0]));
    const ringPts: THREE.Vector3[] = [];
    for (let i = 0; i < 5; i++) {
      const vi = icoVerts[i + 1].clone().multiplyScalar(capsidR(icoVerts[i + 1]));
      ringPts.push(vi);
    }
    for (let i = 0; i < 5; i++) {
      const a = ringPts[i];
      const b = ringPts[(i + 1) % 5];
      S_SG_RING.stick(a, b, 0.082, cGoldRim, cGoldDeep);
      S_SG_RING.add(a, 0.20, cGoldRim);
    }
    S_SG_RING.done();

    // Build all 5 independently hinged triangular stargate petals (faces 0..4 around vertex 0)
    for (let fi = 0; fi < 5; fi++) {
      const [ia, ib, ic] = icoFaces[fi];
      // Identify the apex (index 0) and the two base hinge vertices
      const baseIds = [ia, ib, ic].filter(x => x !== 0);
      const u1 = icoVerts[baseIds[0]].clone().multiplyScalar(capsidR(icoVerts[baseIds[0]]));
      const u2 = icoVerts[baseIds[1]].clone().multiplyScalar(capsidR(icoVerts[baseIds[1]]));
      const hingeMid = u1.clone().add(u2).multiplyScalar(0.5);
      const hingeAxis = u2.clone().sub(u1).normalize();

      // Determine exact outward swing sign via right-hand rule: cross(hingeAxis, vApex - hingeMid) dot hingeMid > 0 => +angle opens outward
      const toApex = vApex.clone().sub(hingeMid);
      const crossDir = hingeAxis.clone().cross(toApex);
      const openSign = crossDir.dot(hingeMid) >= 0 ? 1 : -1;

      const pivot = new THREE.Group();
      pivot.position.copy(hingeMid);
      stargateRoot.add(pivot);

      // Build thick sculpted triangular petal shell in pivot-local coordinates
      const subdiv = 5;
      const pPos: number[] = [];
      const pIdx: number[] = [];
      const localA = icoVerts[0], localB = icoVerts[baseIds[0]], localC = icoVerts[baseIds[1]];
      const rowsOut: number[] = [];
      const rowsIn: number[] = [];
      let vc = 0;
      const emitSide = (rOff: number, store: number[]) => {
        for (let i = 0; i <= subdiv; i++) {
          store.push(vc);
          const cnt = subdiv - i + 1;
          for (let j = 0; j < cnt; j++) {
            const u = i / subdiv;
            const v = j / subdiv;
            const w = 1 - u - v;
            const d = V().addScaledVector(localA, w).addScaledVector(localB, u).addScaledVector(localC, v).normalize();
            // Slight outward star-crest elevation right along the 5 radial seams (u=0 or v=0)!
            const seamLift = (u < 0.01 || v < 0.01) ? 0.065 * w : 0;
            const pt = d.multiplyScalar(capsidR(d) + rOff + seamLift).sub(hingeMid);
            pPos.push(pt.x, pt.y, pt.z);
            vc++;
          }
        }
      };
      emitSide(0.03, rowsOut);
      emitSide(-0.16, rowsIn);
      const triFlip = openSign < 0;
      for (let i = 0; i < subdiv; i++) {
        const len = subdiv - i;
        for (let j = 0; j < len; j++) {
          const a = rowsOut[i] + j, b = rowsOut[i + 1] + j, c = rowsOut[i] + j + 1;
          if (triFlip) pIdx.push(a, c, b); else pIdx.push(a, b, c);
          if (j < len - 1) {
            const d = rowsOut[i + 1] + j + 1;
            if (triFlip) pIdx.push(c, d, b); else pIdx.push(c, b, d);
          }
          const ai = rowsIn[i] + j, bi = rowsIn[i + 1] + j, ci = rowsIn[i] + j + 1;
          if (triFlip) pIdx.push(ai, bi, ci); else pIdx.push(ai, ci, bi);
          if (j < len - 1) {
            const di = rowsIn[i + 1] + j + 1;
            if (triFlip) pIdx.push(ci, bi, di); else pIdx.push(ci, di, bi);
          }
        }
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
      pGeo.setIndex(pIdx);
      pGeo.computeVertexNormals();
      pivot.add(shade(new THREE.Mesh(pGeo, petalPlateMat), true, true));

      // Raised glowing golden starfish zipper ridges along both radial arms of every petal!
      const pApexLocal = vApex.clone().sub(hingeMid);
      const pU1Local = u1.clone().sub(hingeMid);
      const pU2Local = u2.clone().sub(hingeMid);
      const addRidge = (a: THREE.Vector3, b: THREE.Vector3, r: number) => {
        const len = a.distanceTo(b);
        const mid = a.clone().add(b).multiplyScalar(0.5);
        const dir = b.clone().sub(a).normalize();
        const outDir = mid.clone().add(hingeMid).normalize();
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.78, r, len, 10), seamRidgeMat);
        cyl.position.copy(mid).addScaledVector(outDir, 0.055);
        cyl.quaternion.setFromUnitVectors(UP, dir);
        pivot.add(cyl);
      };
      addRidge(pApexLocal, pU1Local, 0.068);
      addRidge(pApexLocal, pU2Local, 0.068);
      // Central golden rib running from hinge midpoint to apex
      addRidge(V(0, 0, 0), pApexLocal, 0.048);

      // Add 3 real PDB 5J7O capsomers bonded onto each petal exterior so even the stargate has cryo-EM grain!
      const P_MCP = molBatch('stargate', T.geoMcp, pivot, false, {
        emissive: '#784808',
        emissiveIntensity: 0.26,
        roughness: 0.26,
        clearcoat: 0.58,
      });
      [[0.46, 0.27], [0.24, 0.52], [0.24, 0.24]].forEach(([bu, bv], k) => {
        const bw = 1 - bu - bv;
        const d = V().addScaledVector(localA, bw).addScaledVector(localB, bu).addScaledVector(localC, bv).normalize();
        const locPos = d.clone().multiplyScalar(capsidR(d) + 0.06).sub(hingeMid);
        P_MCP.add(locPos, qOut(d, k * 1.4), 0.78);
        placed++;
      });
      P_MCP.done();

      stargatePetals.push({ pivot, hingeAxis, openSign, maxAngle: (58 * Math.PI) / 180 });

      const petalWorld = V0.clone().add(hingeMid.clone().lerp(vApex, 0.55));
      SITES.stargate.push(petalWorld);
    }
    SITES.stargate.push(V0.clone().add(vApex));

    // 1D. Internal 5 nm Viral Phospholipid Bilayer (inner_mem) + Cutaway Cap + Dynamic Fusion Pouch
    const innerMemMat = cinemaShellMat('inner_mem', '#e06b52', '#ffc9b8', CLIP, {
      attenCol: '#c7523a',
      attenDist: 3.2,
      sssColor: '#ff9678',
      sssIntensity: 0.32,
      iridescence: 0.42,
      thickness: 0.38,
      roughness: 0.13,
      sheenColor: '#ffe0d4',
      normalMap: bump(14, 10),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(V0, innerMemR, 104), innerMemMat), false, true));

    // Warm dark-plum interior cavity lining inside the inner membrane so interior molecules pop with high contrast
    const coreLiningMat = reg(
      'inner_mem',
      applyBacklitSSS(
        phys({
          color: '#251530',
          roughness: 0.72,
          clearcoat: 0.14,
          side: THREE.BackSide,
          normalMap: bump(10, 8),
          normalScale: new THREE.Vector2(0.18, 0.18),
        }),
        '#b86cff',
        0.16,
        2.6
      )
    );
    cell.add(new THREE.Mesh(shellGeo(V0, d => innerMemR(d) - MEM_THICK, 84), coreLiningMat));

    // Dual-leaflet phospholipid bilayer cutaway cap strip along both Mimivirus cutaway planes
    const MEM_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.00, 0.28, '#ffc2ad'], // Outer lipid headgroups
      [0.28, 0.72, '#d45238'], // Hydrophobic acyl tail core
      [0.72, 1.00, '#ffc2ad'], // Inner lipid headgroups
    ];
    const memCapMat = reg(
      'inner_mem',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.30,
        emissive: '#6e2214',
        emissiveIntensity: 0.38,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      mimiCaps.add(new THREE.Mesh(mimiCapStrip(innerMemR, ax, MEM_THICK, MEM_LAYERS, 160), memCapMat));
    }
    for (let k = 0; k < 10; k++) {
      const a = 0.25 + (k / 10) * 2.5;
      SITES.inner_mem.push(V(MIMI_CUT_X + 0.05, V0.y + Math.cos(a) * R_MEM, MIMI_CUT_Z + Math.sin(a) * R_MEM));
    }

    // Dynamic Uncoating Lipid Fusion Pouch (protrudes out of open stargate to fuse with Acanthamoeba phagosome!)
    fusionPouchGroup.position.copy(V0).addScaledVector(SG_DIR, R_MEM - 0.12);
    fusionPouchGroup.quaternion.setFromUnitVectors(V(0, 1, 0), SG_DIR);
    const pouchMat = reg(
      'inner_mem',
      applyBacklitSSS(
        phys(
          {
            color: '#ff8a6b',
            emissive: '#802c18',
            emissiveIntensity: 0.40,
            roughness: 0.24,
            clearcoat: 0.56,
            transparent: true,
            opacity: 0.84,
            side: THREE.DoubleSide,
            normalMap: bump(8, 8),
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          {}
        ),
        '#ffb89c',
        0.38,
        2.4
      )
    );
    const pouchCurve = new THREE.CatmullRomCurve3([
      V(0, 0.0, 0),
      V(0, 0.65, 0),
      V(0, 1.35, 0),
      V(0, 1.95, 0),
    ]);
    const pouchGeo = sweepGeo(pouchCurve, t => 0.72 * (1 - 0.44 * Math.sin(t * Math.PI * 0.85)) + 0.24 * Math.pow(t, 3), 28, 22);
    fusionPouchGroup.add(new THREE.Mesh(pouchGeo, pouchMat));
    // Glowing fusion pore ring kissing the phagosome wall
    const fusionCollar = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.075, 12, 32), pouchMat);
    fusionCollar.rotation.x = Math.PI / 2;
    fusionCollar.position.y = 1.95;
    fusionPouchGroup.add(fusionCollar);
    fusionPouchGroup.visible = false;
  }

  // -------------------------------------------------------------------------
  // 2. Interior Mimivirus Core:
  //    30 nm Helical Genomic Fiber (PDB 7YX3), 1.18 Mbp Linear dsDNA,
  //    Viral TyrRS (PDB 2J5B), Viral RNAP, Capping Enzyme & Dynamic Injection Stream
  // -------------------------------------------------------------------------
  function buildMimivirusCore(T) {
    // 2A. 30 nm Helical Nucleoprotein Genomic Fiber (PDB 7YX3) coiled inside the cutaway core!
    const corePts: THREE.Vector3[] = [];
    const N_CTRL = 22;
    for (let k = 0; k <= N_CTRL; k++) {
      const t = k / N_CTRL;
      const turns = 2.6;
      const ang = t * Math.PI * 2 * turns + 0.5;
      const rad = 0.52 + 0.88 * Math.sin(t * Math.PI * 0.92 + 0.12);
      const cx = V0.x + 0.15 + Math.cos(ang) * rad * 0.88;
      const cy = V0.y + (t - 0.5) * 2.55 + Math.sin(ang * 2) * 0.16;
      const cz = V0.z - 0.18 + Math.sin(ang) * rad * 0.82;
      const p = V(cx, cy, cz);
      // Keep core nicely inside inner lipid bilayer (r <= 1.62)
      const off = p.clone().sub(V0);
      if (off.length() > R_MEM - 0.44) off.setLength(R_MEM - 0.44);
      corePts.push(V0.clone().add(off));
    }
    const coreCurve = new THREE.CatmullRomCurve3(corePts);

    // Translucent violet helical sheath spine guiding the 30 nm fiber (0.30 u diameter -> r = 0.15 u)
    const gfSheathMat = reg(
      'genomic_fiber',
      applyBacklitSSS(
        phys(
          {
            color: '#9e62f5',
            emissive: '#3e187a',
            emissiveIntensity: 0.34,
            roughness: 0.28,
            clearcoat: 0.52,
            transparent: true,
            opacity: 0.56,
            depthWrite: false,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.28, 0.28),
          },
          {}
        ),
        '#d2a6ff',
        0.34,
        2.5
      )
    );
    cell.add(new THREE.Mesh(sweepGeo(coreCurve, () => 0.16, 110, 14), gfSheathMat));

    // Tile 62 real PDB 7YX3 (mimi_rnap) helical protein shell subunits spiraling around the 30 nm genomic fiber!
    const I_GF = molBatch('genomic_fiber', T.geoGenomicSub, cell, false, {
      emissive: '#421a78',
      emissiveIntensity: 0.26,
      roughness: 0.30,
      clearcoat: 0.50,
    });
    const N_GF = 62;
    for (let i = 0; i < N_GF; i++) {
      const t = (i + 0.5) / N_GF;
      const c = coreCurve.getPointAt(t);
      const tan = coreCurve.getTangentAt(t).normalize();
      const u = ortho(tan);
      const v = tan.clone().cross(u).normalize();
      const ph = i * 1.18; // 5-start helical wrap around the 30 nm lumen
      const pos = c.clone().addScaledVector(u, Math.cos(ph) * 0.14).addScaledVector(v, Math.sin(ph) * 0.14);
      const radDir = pos.clone().sub(c).normalize();
      I_GF.add(pos, qOut(radDir, ph), 0.72);
      placed++;
      if (i % 4 === 0 && SITES.genomic_fiber.length < 22) SITES.genomic_fiber.push(pos.clone());
    }
    I_GF.done();

    // 2B. 1.18 Mbp Linear dsDNA Double Helix coiled through the 30 nm genomic fiber + exposed cutaway loops!
    const B_DNA = balls('dsdna', cell, false);
    const DNA_NM = 0.056;
    // Main duplex threaded along the genomic fiber lumen
    dna.emitDNA(B_DNA, coreCurve.getSpacedPoints(180), { nm: DNA_NM });
    SITES.dsdna.push(coreCurve.getPointAt(0.28), coreCurve.getPointAt(0.55), coreCurve.getPointAt(0.76));

    // 3 exposed supercoiled loops of 1.18 Mbp dsDNA arching cleanly into the front-left cutaway window!
    for (let L = 0; L < 3; L++) {
      const loopCtrl: THREE.Vector3[] = [];
      for (let k = 0; k <= 8; k++) {
        const f = k / 8;
        const a = L * 2.1 + f * Math.PI * 1.85;
        const r = 0.72 + 0.65 * Math.sin(f * Math.PI);
        const p = V(
          V0.x - 0.35 + Math.cos(a) * r * 0.72,
          V0.y + (L - 1) * 0.72 + Math.sin(a) * r * 0.56,
          V0.z + 0.38 + Math.sin(f * Math.PI) * 0.62 - L * 0.16
        );
        const off = p.clone().sub(V0);
        if (off.length() > R_MEM - 0.32) off.setLength(R_MEM - 0.32);
        loopCtrl.push(V0.clone().add(off));
      }
      const cv = new THREE.CatmullRomCurve3(loopCtrl);
      dna.emitDNA(B_DNA, cv.getSpacedPoints(64), { nm: DNA_NM * 1.08 });
      SITES.dsdna.push(cv.getPointAt(0.5));
    }
    B_DNA.done();

    // 2C. Viral Tyrosyl-tRNA Synthetase (tyrrs, Real PDB 2J5B mimi_aars!)
    const I_TYRRS = molBatch('tyrrs', T.geoTyrRS, cell, false, {
      emissive: '#781446',
      emissiveIntensity: 0.28,
      roughness: 0.28,
      clearcoat: 0.56,
    });
    const S_TRNA = sculpt('tyrrs', cell, false, {
      emissive: '#781e54',
      emissiveIntensity: 0.32,
      roughness: 0.30,
    });
    const cTrnaA = col('#ffa6d8'), cTrnaB = col('#ffe088');
    // 10 showcase PDB 2J5B TyrRS dimers inside the cutaway Mimivirus core + 5 operating around the viral factory!
    const tyrrsCoreSpots = [
      V0.clone().add(V(-0.88, 0.82, 0.76)),
      V0.clone().add(V(-0.42, -0.88, 0.92)),
      V0.clone().add(V(-1.12, -0.18, 0.65)),
      V0.clone().add(V(-0.22, 1.18, 0.52)),
      V0.clone().add(V(-0.78, -0.62, -0.45)),
      V0.clone().add(V(0.28, 0.65, -0.85)),
      V0.clone().add(V(-0.18, -0.15, 0.95)),
      V0.clone().add(V(-1.05, 0.36, -0.22)),
      V0.clone().add(V(0.45, -0.92, -0.35)),
      V0.clone().add(V(-0.55, 0.15, 0.25)),
    ];
    const tyrrsFactorySpots = [
      VF0.clone().add(V(-1.15, 1.05, 1.10)),
      VF0.clone().add(V(-0.85, -1.25, 1.05)),
      VF0.clone().add(V(0.95, 1.25, 0.92)),
      VF0.clone().add(V(1.25, -0.95, 0.85)),
      VF0.clone().add(V(-0.15, 0.95, 1.38)),
    ];
    [...tyrrsCoreSpots, ...tyrrsFactorySpots].forEach((pos, idx) => {
      const q = qOut(randDir(), idx * 0.9);
      I_TYRRS.add(pos, q, idx < 3 ? 1.12 : 0.96);
      placed++;
      SITES.tyrrs.push(pos.clone());
      // Dock a sculpted L-shaped tRNA molecule onto key showcase TyrRS dimers!
      if (idx % 3 === 0) {
        const d = V(0.32, 0.16, 0.22).normalize();
        const u = ortho(d);
        const pts = [
          pos.clone().addScaledVector(d, 0.24),
          pos.clone().addScaledVector(d, 0.42).addScaledVector(u, 0.14),
          pos.clone().addScaledVector(d, 0.48).addScaledVector(u, 0.34),
        ];
        S_TRNA.tube(pts, 0.032, 0.022, cTrnaA, cTrnaB, 6, true);
        S_TRNA.add(pts[2], 0.095, cTrnaB); // Charged tyrosine amino acid tip!
      }
    });
    I_TYRRS.done();
    S_TRNA.done();

    // 2D. Viral DNA-Dependent RNA Polymerase (viral_rnap) & mRNA Capping Enzyme (capping_enz)
    const I_RNAP = molBatch('viral_rnap', T.geoViralRnap, cell, false, {
      emissive: '#0c684c',
      emissiveIntensity: 0.28,
      roughness: 0.28,
      clearcoat: 0.54,
    });
    const I_CAP = molBatch('capping_enz', T.geoCapping, cell, false, {
      emissive: '#783c08',
      emissiveIntensity: 0.30,
      roughness: 0.28,
      clearcoat: 0.54,
    });
    const B_NASCENT = balls('viral_rnap', cell, false);

    // Pair viral_rnap + capping_enz right along the dsDNA inside the core AND inside the viral factory!
    const rnapAnchors = [
      V0.clone().add(V(-0.98, 0.48, 0.58)),
      V0.clone().add(V(-0.32, -0.52, 0.78)),
      V0.clone().add(V(-0.68, -1.08, 0.42)),
      V0.clone().add(V(-0.55, 1.05, 0.32)),
      V0.clone().add(V(0.15, 0.32, 0.72)),
      V0.clone().add(V(-0.95, -0.35, -0.55)),
      VF0.clone().add(V(-0.75, 0.45, 0.88)),
      VF0.clone().add(V(0.45, -0.65, 1.05)),
      VF0.clone().add(V(-0.25, -0.82, 0.78)),
      VF0.clone().add(V(0.72, 0.58, 0.75)),
      VF0.clone().add(V(-1.05, -0.15, 0.65)),
      VF0.clone().add(V(0.15, 0.85, 0.62)),
    ];
    rnapAnchors.forEach((p, idx) => {
      const q = qOut(randDir(), idx * 0.7);
      I_RNAP.add(p, q, idx < 3 ? 1.08 : 0.96);
      placed++;
      SITES.viral_rnap.push(p.clone());

      // Adjacent mRNA capping enzyme adding the 5' m7G cap right at the RNAP exit channel!
      const capOff = V(0.28 * (idx % 2 === 0 ? 1 : -1), 0.22, 0.18);
      const capPos = p.clone().add(capOff);
      I_CAP.add(capPos, qOut(capOff, idx * 1.1), 1.04);
      placed++;
      SITES.capping_enz.push(capPos.clone());

      // Nascent capped mRNA tail trailing from RNAP past the capping enzyme
      if (idx % 2 === 0) {
        const mPts: THREE.Vector3[] = [];
        for (let s = 0; s < 14; s++) {
          const f = s / 13;
          mPts.push(
            p.clone()
              .lerp(capPos, Math.min(1, f * 1.5))
              .add(V(f * 0.28, Math.sin(f * 5 + idx) * 0.10, f * 0.22))
          );
        }
        rna.rnaAlong(B_NASCENT, mPts, MRNA, 0.044);
      }
    });
    I_RNAP.done();
    I_CAP.done();
    B_NASCENT.done();

    // 2E. Dynamic Genomic-Core Injection Stream (animated cleanly out of the open 5-fold stargate into the viral factory!)
    const startInject = V0.clone().addScaledVector(SG_DIR, R_MEM - 0.15);
    const exitStargate = V0.clone().addScaledVector(SG_DIR, R_CAP + 0.55);
    const midPhago = PHAGO0.clone().add(V(0.75, 0.05, 0.18));
    const entryFactory = VF0.clone().add(V(-1.05, 0.08, 0.45));
    const injectCurve = new THREE.CatmullRomCurve3([
      startInject,
      exitStargate,
      midPhago,
      midPhago.clone().lerp(entryFactory, 0.55).add(V(0, 0.26, 0.18)),
      entryFactory,
    ]);
    // Put origin of injectStreamGroup at startInject so scaling along the curve unfolds smoothly from the stargate!
    injectStreamGroup.position.copy(startInject);
    const localInjectPts = injectCurve.getPoints(36).map(p => p.clone().sub(startInject));
    const localInjectCurve = new THREE.CatmullRomCurve3(localInjectPts);

    const injectSheathMat = reg(
      'genomic_fiber',
      applyBacklitSSS(
        phys(
          {
            color: '#c288ff',
            emissive: '#6828cc',
            emissiveIntensity: 0.56,
            roughness: 0.24,
            clearcoat: 0.58,
            transparent: true,
            opacity: 0.72,
          },
          {}
        ),
        '#e6c8ff',
        0.46,
        2.3
      )
    );
    injectStreamGroup.add(new THREE.Mesh(sweepGeo(localInjectCurve, t => 0.17 * (1 - 0.22 * t), 64, 14), injectSheathMat));

    const I_INJ_GF = molBatch('genomic_fiber', T.geoGenomicSub, injectStreamGroup, false, {
      emissive: '#5820ad',
      emissiveIntensity: 0.36,
      roughness: 0.26,
      clearcoat: 0.54,
    });
    for (let k = 0; k < 24; k++) {
      const t = (k + 0.5) / 24;
      const c = localInjectCurve.getPointAt(t);
      const tan = localInjectCurve.getTangentAt(t).normalize();
      const u = ortho(tan);
      const v = tan.clone().cross(u).normalize();
      const ph = k * 1.25;
      const p = c.clone().addScaledVector(u, Math.cos(ph) * 0.15).addScaledVector(v, Math.sin(ph) * 0.15);
      I_INJ_GF.add(p, qOut(p.clone().sub(c).normalize(), ph), 0.72);
      placed++;
    }
    I_INJ_GF.done();

    const B_INJ_DNA = balls('dsdna', injectStreamGroup, false);
    dna.emitDNA(B_INJ_DNA, localInjectCurve.getSpacedPoints(92), { nm: 0.056 });
    B_INJ_DNA.done();
    injectStreamGroup.visible = false;
  }

  // -------------------------------------------------------------------------
  // 3. True-Scale 300 nm Mycoplasma genitalium Comparator (myco_ref)
  //    Proves visually: 300 nm Mycoplasma IS ALIVE (own 70S ribosomes + ATP)
  //    while 750 nm Mimivirus is 2.5x wider yet owns ZERO ribosomes!
  // -------------------------------------------------------------------------
  function buildMycoplasmaComparator(T) {
    // True-scale 300 nm (R = 1.48 u) piriform flask silhouette tilted gently toward the Mimivirus
    const mycoR = (d: THREE.Vector3) => {
      // Flask body (~300 nm wide) with classic downward-left terminal attachment organelle prow
      const prow = Math.max(0, d.dot(V(-0.35, -0.92, 0.18).normalize()));
      const n = fbm(d.x * 2.5 + 7.1, d.y * 2.5 - 3.2, d.z * 2.5 + 1.4, 3);
      return (1.42 + 0.58 * Math.pow(prow, 2.8)) * (1 + 0.03 * (n - 0.5) * 2);
    };

    const mycoShellMat = cinemaShellMat('myco_ref', '#d4744e', '#ffd4bd', MYCO_CLIP, {
      attenCol: '#bd5c38',
      attenDist: 3.4,
      sssColor: '#ffaa80',
      sssIntensity: 0.34,
      iridescence: 0.42,
      thickness: 0.44,
      roughness: 0.13,
      sheenColor: '#ffe8d8',
      normalMap: bump(10, 8),
      normalScale: 0.22,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(MYCO0, mycoR, 88), mycoShellMat), true, true));

    // Crisp single cholesterol-rich phospholipid bilayer capStrip along Mycoplasma's front-right cutaway
    const mycoCapMat = reg(
      'myco_ref',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.30,
        emissive: '#6e2e16',
        emissiveIntensity: 0.36,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      hostCaps.add(
        new THREE.Mesh(
          capStrip(MYCO0, mycoR, ax, 0.09, [[0, 0.35, '#ffd4bc'], [0.35, 0.65, '#c85b36'], [0.65, 1, '#ffd4bc']], 120),
          mycoCapMat
        )
      );
    }

    // Internal circular 580 kbp dsDNA + 18 living 70S bacterial ribosomes inside Mycoplasma!
    const B_MYCO_DNA = balls('myco_ref', cell, false);
    const mDnaPts: THREE.Vector3[] = [];
    for (let k = 0; k <= 24; k++) {
      const a = (k / 24) * Math.PI * 2;
      mDnaPts.push(MYCO0.clone().add(V(Math.cos(a) * 0.68, Math.sin(a) * 0.62 + 0.18, Math.sin(a * 2) * 0.32 - 0.15)));
    }
    dna.emitDNA(B_MYCO_DNA, new THREE.CatmullRomCurve3(mDnaPts, true).getSpacedPoints(64), { nm: 0.036 });
    B_MYCO_DNA.done();

    const I_MYCO_RIBO = molBatch('myco_ref', T.geoRibo70, cell, false, {
      emissive: '#a86e18',
      emissiveIntensity: 0.44,
      roughness: 0.26,
      clearcoat: 0.52,
    });
    for (let k = 0; k < 22; k++) {
      const d = randDir();
      const r = rr(0.24, 0.98);
      const p = MYCO0.clone().addScaledVector(d, r);
      I_MYCO_RIBO.add(p, qOut(randDir(), k * 0.8), rr(0.96, 1.16));
      placed++;
    }
    I_MYCO_RIBO.done();

    // Subtle glowing scale bracket + crystal-clear floating comparison plaque beneath Mycoplasma
    const S_SCALE = sculpt('myco_ref', cell, false, {
      emissive: '#804624',
      emissiveIntensity: 0.34,
      roughness: 0.26,
    });
    const cBar = col('#ffb58a');
    const barY = MYCO0.y - 2.15;
    S_SCALE.stick(V(MYCO0.x - 1.48, barY, MYCO0.z + 0.4), V(MYCO0.x + 1.48, barY, MYCO0.z + 0.4), 0.022, cBar, cBar);
    S_SCALE.stick(V(MYCO0.x - 1.48, barY - 0.16, MYCO0.z + 0.4), V(MYCO0.x - 1.48, barY + 0.16, MYCO0.z + 0.4), 0.022, cBar, cBar);
    S_SCALE.stick(V(MYCO0.x + 1.48, barY - 0.16, MYCO0.z + 0.4), V(MYCO0.x + 1.48, barY + 0.16, MYCO0.z + 0.4), 0.022, cBar, cBar);
    S_SCALE.done();

    // High-contrast crisp 3D comparison plaque cleanly framed below Mycoplasma (zero overlap!)
    const plCv = document.createElement('canvas');
    plCv.width = 768;
    plCv.height = 148;
    const pg = plCv.getContext('2d');
    pg.clearRect(0, 0, 768, 148);
    // Subtle rounded dark glass pill for razor-sharp dark-field legibility
    pg.fillStyle = 'rgba(8, 14, 28, 0.78)';
    pg.strokeStyle = 'rgba(255, 176, 130, 0.62)';
    pg.lineWidth = 4;
    pg.beginPath();
    pg.roundRect(14, 12, 740, 124, 22);
    pg.fill();
    pg.stroke();
    pg.textAlign = 'center';
    pg.font = '700 32px system-ui, -apple-system, sans-serif';
    pg.fillStyle = '#ffbe94';
    pg.fillText('300 nm Mycoplasma (Alive)', 384, 62);
    pg.font = '700 30px system-ui, -apple-system, sans-serif';
    pg.fillStyle = '#82f0ff';
    pg.fillText('vs 750 nm Mimivirus (0 Ribosomes)', 384, 110);

    const plTex = new THREE.CanvasTexture(plCv);
    plTex.colorSpace = THREE.SRGBColorSpace;
    const plaque = new THREE.Mesh(
      new THREE.PlaneGeometry(4.45, 0.86),
      reg(
        'myco_ref',
        new THREE.MeshStandardMaterial({
          map: plTex,
          emissive: '#ffffff',
          emissiveMap: plTex,
          emissiveIntensity: 0.74,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    plaque.position.set(MYCO0.x + 0.25, MYCO0.y - 2.88, MYCO0.z + 0.65);
    plaque.rotation.y = 0.14;
    cell.add(plaque);

    SITES.myco_ref.push(MYCO0.clone(), MYCO0.clone().add(V(0.4, 0.5, 0.6)), MYCO0.clone().add(V(-0.3, -0.8, 0.4)));
  }

  // -------------------------------------------------------------------------
  // 4. Cutaway Acanthamoeba Host Membrane (amoeba_mem), Acidic Phagosome (phagosome),
  //    Cytoplasmic Viral Factory (viral_factory), Host 80S Ribosomes (host_ribo) & ATP Pool (atp_pool)
  // -------------------------------------------------------------------------
  function buildAcanthamoebaAndFactory(T) {
    // 4A. Sweeping Cutaway Acanthamoeba Host Plasma Membrane (amoeba_mem) with lobose pseudopods
    const amoebaR = (d: THREE.Vector3) => {
      const sx = d.x / 3.80, sy = d.y / 3.95, sz = d.z / 3.35;
      const base = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
      // Organic lobose pseudopod ruffles on the outer right cortex + gentle phagocytic indentation on the left!
      const n = fbm(d.x * 2.1 + 3.7, d.y * 2.1 - 5.1, d.z * 2.1 + 1.9, 3);
      const pseudo = d.x > 0.2 ? 0.26 * Math.sin(d.y * 4.5 + d.z * 2.8) * Math.max(0, d.x) : 0;
      const cupIndent = d.x < -0.55 ? -0.35 * Math.pow((-d.x - 0.55) / 0.45, 1.4) : 0;
      return base * (1 + 0.045 * (n - 0.5) * 2) + pseudo + cupIndent;
    };
    const amoebaOuterMat = cinemaShellMat('amoeba_mem', '#426ec4', '#b8d8ff', HOST_CLIP, {
      attenCol: '#2e58b0',
      attenDist: 5.4,
      sssColor: '#7ebeff',
      sssIntensity: 0.30,
      iridescence: 0.48,
      thickness: 0.56,
      roughness: 0.14,
      sheenColor: '#e0f0ff',
      normalMap: bump(14, 10),
      normalScale: 0.26,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(AMOEBA0, amoebaR, 112), amoebaOuterMat), true, true));

    // Warm dark-indigo amoeba cytoplasm inner backdrop so the glowing violet viral factory & 80S ribosomes pop!
    const amoebaCytoMat = reg(
      'amoeba_mem',
      applyBacklitSSS(
        phys(
          {
            color: '#131d36',
            roughness: 0.72,
            clearcoat: 0.14,
            side: THREE.BackSide,
            normalMap: bump(12, 10),
            normalScale: new THREE.Vector2(0.20, 0.20),
          },
          HOST_CLIP
        ),
        '#629eff',
        0.16,
        2.6
      )
    );
    cell.add(new THREE.Mesh(shellGeo(AMOEBA0, d => amoebaR(d) - 0.16, 92), amoebaCytoMat));

    // Full 360-degree cutaway bilayer rim ring tracing the open front slice (z = HOST_CUT_Z) of amoeba_mem!
    const buildFrontSliceRim = (
      center: THREE.Vector3,
      rFn: (d: THREE.Vector3) => number,
      cutZ: number,
      thick: number,
      layers: ReadonlyArray<readonly [number, number, string]>,
      mat: THREE.Material,
      n = 180
    ) => {
      const dz = cutZ - center.z;
      const pos: number[] = [];
      const cols: number[] = [];
      const nor: number[] = [];
      const idx: number[] = [];
      const c = new THREE.Color();
      let base = 0;
      layers.forEach(([f0, f1, hex]) => {
        c.set(hex);
        for (let i = 0; i <= n; i++) {
          const a = (i / n) * Math.PI * 2;
          const d2 = V(Math.cos(a), Math.sin(a), 0);
          // Solve radial distance on the slice plane z = cutZ
          let rEst = rFn(d2);
          for (let it = 0; it < 2; it++) {
            const radPlane = Math.sqrt(Math.max(0.15, rEst * rEst - dz * dz));
            const dir3 = V(Math.cos(a) * radPlane, Math.sin(a) * radPlane, dz).normalize();
            rEst = rFn(dir3);
          }
          const rPlane = Math.sqrt(Math.max(0.15, rEst * rEst - dz * dz));
          for (const f of [f0, f1]) {
            const rp = Math.max(0.1, rPlane - f * thick);
            pos.push(center.x + Math.cos(a) * rp, center.y + Math.sin(a) * rp, cutZ + 0.008);
            cols.push(c.r, c.g, c.b);
            nor.push(0, 0, 1);
          }
        }
        for (let i = 0; i < n; i++) {
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
      const mesh = new THREE.Mesh(g, mat);
      hostCaps.add(mesh);
      return mesh;
    };

    const amoebaRimMat = reg(
      'amoeba_mem',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        emissive: '#1e428a',
        emissiveIntensity: 0.42,
        side: THREE.DoubleSide,
      })
    );
    buildFrontSliceRim(
      AMOEBA0,
      amoebaR,
      HOST_CUT_Z,
      0.16,
      [[0, 0.30, '#b8dcff'], [0.30, 0.70, '#4a78d8'], [0.70, 1.0, '#b8dcff']],
      amoebaRimMat
    );
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const d = V(Math.cos(a), Math.sin(a), 0).normalize();
      SITES.amoeba_mem.push(AMOEBA0.clone().addScaledVector(d, amoebaR(d) * 0.96));
    }

    // 4B. Acidic Acanthamoeba Phagosome Vacuole (phagosome, pH ~5) cradling the right-front Stargate!
    const phagoR = (d: THREE.Vector3) => {
      const sx = d.x / 2.08, sy = d.y / 2.28, sz = d.z / 2.05;
      const base = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
      const n = fbm(d.x * 2.6 + 11.4, d.y * 2.6 - 2.9, d.z * 2.6 + 6.3, 3);
      return base * (1 + 0.036 * (n - 0.5) * 2);
    };
    const phagoMat = cinemaShellMat('phagosome', '#28b896', '#9effe2', PHAGO_CLIP, {
      attenCol: '#1e9a7c',
      attenDist: 4.8,
      sssColor: '#5effd0',
      sssIntensity: 0.36,
      iridescence: 0.58,
      thickness: 0.40,
      roughness: 0.11,
      sheenColor: '#d4fff2',
      normalMap: bump(12, 10),
      normalScale: 0.24,
    });
    modeRefs.phagoGlow = phagoMat;
    cell.add(shade(new THREE.Mesh(shellGeo(PHAGO0, phagoR, 92), phagoMat), false, true));

    const phagoRimMat = reg(
      'phagosome',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.26,
        emissive: '#147a5e',
        emissiveIntensity: 0.46,
        side: THREE.DoubleSide,
      })
    );
    buildFrontSliceRim(
      PHAGO0,
      phagoR,
      PHAGO_CUT_Z,
      0.11,
      [[0, 0.35, '#9effe2'], [0.35, 0.70, '#28b896'], [0.70, 1.0, '#9effe2']],
      phagoRimMat,
      140
    );

    // 18 V-ATPase proton pump complexes embedded around the phagosome rim (acidifying lumen to pH ~5!)
    const S_VATP = sculpt('phagosome', cell, false, {
      emissive: '#14785c',
      emissiveIntensity: 0.32,
      roughness: 0.28,
      clearcoat: 0.54,
    });
    const cVatpA = col('#62f5c8'), cVatpB = col('#ffe066');
    for (let k = 0; k < 18; k++) {
      const a = (k / 18) * Math.PI * 2;
      const d = V(Math.cos(a), Math.sin(a), -0.15).normalize();
      const r = phagoR(d);
      const pBase = PHAGO0.clone().addScaledVector(d, r);
      const pTip = pBase.clone().addScaledVector(d, 0.24);
      S_VATP.stick(pBase.clone().addScaledVector(d, -0.10), pTip, 0.042, cVatpA, cVatpB);
      S_VATP.add(pTip, 0.145, cVatpA);
      S_VATP.add(pBase.clone().addScaledVector(d, -0.12), 0.088, cVatpB); // Proton release knob inside lumen!
      placed++;
      if (k % 2 === 0) SITES.phagosome.push(pBase.clone());
    }
    S_VATP.done();

    // 4C. Bioluminescent Cytoplasmic Viral Factory (viral_factory) + Nascent Progeny Procapsids!
    const vfMat = cinemaShellMat('viral_factory', '#9244e6', '#e4c2ff', {}, {
      attenCol: '#7b2ed4',
      attenDist: 3.4,
      sssColor: '#d48cff',
      sssIntensity: 0.42,
      iridescence: 0.62,
      thickness: 0.55,
      roughness: 0.14,
      sheenColor: '#f5dcff',
      normalMap: bump(10, 10),
      normalScale: 0.26,
    });
    modeRefs.factoryCore = vfMat;
    const vfCore = shade(new THREE.Mesh(blobGeo(1.62, fbm, 61, 0.09, 2.2, 4), vfMat), false, true);
    vfCore.position.copy(VF0);
    cell.add(vfCore);

    // Dense replicating viral dsDNA arcs swirling inside the viral factory core
    const B_VF_DNA = balls('viral_factory', cell, false);
    for (let L = 0; L < 4; L++) {
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k <= 10; k++) {
        const t = k / 10;
        const a = L * 1.55 + t * Math.PI * 2.1;
        const rad = 0.45 + 0.72 * Math.sin(t * Math.PI);
        pts.push(VF0.clone().add(V(Math.cos(a) * rad, Math.sin(a) * rad * 0.92, Math.cos(a * 1.5 + L) * 0.55)));
      }
      dna.emitDNA(B_VF_DNA, new THREE.CatmullRomCurve3(pts).getSpacedPoints(56), { nm: 0.044 });
    }
    B_VF_DNA.done();

    // 3 Nascent Assembling Mimivirus Procapsid Domes budding from the viral factory periphery (tiled with real 5J7O!)
    const I_PROCAP = molBatch('viral_factory', T.geoMcp, cell, false, {
      emissive: '#4e2096',
      emissiveIntensity: 0.30,
      roughness: 0.28,
      clearcoat: 0.54,
    });
    const procapsidSpecs = [
      { pos: VF0.clone().add(V(1.42, 1.38, -0.25)), dir: V(0.7, 0.65, 0.3).normalize(), r: 0.72 },
      { pos: VF0.clone().add(V(1.65, -1.18, -0.15)), dir: V(0.75, -0.58, 0.3).normalize(), r: 0.68 },
      { pos: VF0.clone().add(V(-0.35, 1.88, -0.35)), dir: V(-0.15, 0.92, 0.35).normalize(), r: 0.64 },
    ];
    procapsidSpecs.forEach((sp, si) => {
      const domeMat = reg(
        'viral_factory',
        phys(
          {
            color: '#6b9eff',
            emissive: '#28367a',
            emissiveIntensity: 0.38,
            roughness: 0.30,
            clearcoat: 0.46,
            side: THREE.DoubleSide,
          },
          {}
        )
      );
      const domeGeo = new THREE.IcosahedronGeometry(sp.r, 1);
      const dome = new THREE.Mesh(domeGeo, domeMat);
      dome.position.copy(sp.pos);
      dome.scale.set(1, 0.88, 0.92);
      cell.add(dome);
      SITES.viral_factory.push(sp.pos.clone());
      // Tile 14 real PDB 5J7O trimers onto each assembling procapsid!
      for (let k = 0; k < 14; k++) {
        const y = 1 - ((k + 0.5) / 14) * 2;
        const rad = Math.sqrt(Math.max(0, 1 - y * y));
        const th = k * 2.39996 + si;
        const d = V(Math.cos(th) * rad, y, Math.sin(th) * rad).normalize();
        I_PROCAP.add(sp.pos.clone().addScaledVector(d, sp.r * 0.96), qOut(d, k), 0.52);
        placed++;
      }
    });
    I_PROCAP.done();
    SITES.viral_factory.push(VF0.clone());

    // Compact clean badge at the top of the viral factory highlighting the zero-ribosome host hijack
    const vfCv = document.createElement('canvas');
    vfCv.width = 640;
    vfCv.height = 112;
    const vg = vfCv.getContext('2d');
    vg.clearRect(0, 0, 640, 112);
    vg.fillStyle = 'rgba(18, 10, 36, 0.78)';
    vg.strokeStyle = 'rgba(212, 148, 255, 0.62)';
    vg.lineWidth = 3.5;
    vg.beginPath();
    vg.roundRect(12, 10, 616, 92, 18);
    vg.fill();
    vg.stroke();
    vg.textAlign = 'center';
    vg.font = '700 28px system-ui, -apple-system, sans-serif';
    vg.fillStyle = '#e8c4ff';
    vg.fillText('CYTOPLASMIC VIRAL FACTORY', 320, 48);
    vg.font = '600 23px system-ui, -apple-system, sans-serif';
    vg.fillStyle = '#ffd4f8';
    vg.fillText('Stolen Host 80S Ribosomes · Viral: 0', 320, 84);
    const vfTex = new THREE.CanvasTexture(vfCv);
    vfTex.colorSpace = THREE.SRGBColorSpace;
    const vfPlaque = new THREE.Mesh(
      new THREE.PlaneGeometry(3.85, 0.68),
      reg(
        'viral_factory',
        new THREE.MeshStandardMaterial({
          map: vfTex,
          emissive: '#ffffff',
          emissiveMap: vfTex,
          emissiveIntensity: 0.72,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    vfPlaque.position.set(VF0.x - 0.15, AMOEBA0.y - 3.68, AMOEBA0.z + 1.05);
    vfPlaque.rotation.y = -0.14;
    cell.add(vfPlaque);

    // 4D. Stolen Host Eukaryotic 80S Ribosomes (host_ribo) in Active Polysome Rosettes!
    const I_HRIBO = molBatch('host_ribo', T.geoRibo80, cell, false, {
      emissive: '#6a1e75',
      emissiveIntensity: 0.24,
      roughness: 0.30,
      clearcoat: 0.48,
    });
    const B_POLY_MRNA = balls('host_ribo', cell, false);
    const rosetteCenters = [
      VF0.clone().add(V(-1.75, 1.45, 0.35)),
      VF0.clone().add(V(-1.55, -1.65, 0.25)),
      VF0.clone().add(V(0.55, -2.18, 0.15)),
      VF0.clone().add(V(2.05, 0.25, -0.35)),
      VF0.clone().add(V(0.65, 2.15, -0.25)),
      VF0.clone().add(V(-0.35, -1.55, 0.75)),
    ];
    rosetteCenters.forEach((rc, ri) => {
      const mPts: THREE.Vector3[] = [];
      const nR = 7;
      for (let k = 0; k < nR; k++) {
        const a = (k / nR) * Math.PI * 1.85 + ri * 0.6;
        const p = rc.clone().add(V(Math.cos(a) * 0.56, Math.sin(a) * 0.52, Math.sin(a * 2) * 0.20));
        // Keep safely inside the amoeba membrane
        if (p.distanceTo(AMOEBA0) > 3.25) p.sub(AMOEBA0).setLength(3.25).add(AMOEBA0);
        I_HRIBO.add(p, qOut(randDir(), k * 0.9), rr(0.88, 1.06));
        placed++;
        mPts.push(p.clone());
        if (k % 2 === 0 && SITES.host_ribo.length < 28) SITES.host_ribo.push(p.clone());
      }
      rna.rnaAlong(B_POLY_MRNA, new THREE.CatmullRomCurve3(mPts).getSpacedPoints(26), MRNA, 0.036);
    });
    I_HRIBO.done();
    B_POLY_MRNA.done();

    // 4E. Host Cytoplasmic ATP Pool (atp_pool) + Amoeba Mitochondrion Energy Source
    const S_ATP = sculpt('atp_pool', cell, false, {
      emissive: '#946808',
      emissiveIntensity: 0.44,
      roughness: 0.22,
      clearcoat: 0.62,
    });
    const cAtpGold = col('#ffe85e'), cAtpPhos = col('#ffaa28'), cMitoWall = col('#e88a3a');

    // Cutaway amoeba mitochondrion tucked in the lower-right amoeba cortex (generating the host ATP!)
    const mitoC = AMOEBA0.clone().add(V(2.12, -1.95, -0.95));
    const mitoPts = [
      mitoC.clone().add(V(-0.62, -0.35, 0)),
      mitoC.clone().add(V(0, 0, 0.12)),
      mitoC.clone().add(V(0.65, 0.42, -0.05)),
    ];
    S_ATP.tube(mitoPts, 0.36, 0.32, cMitoWall, cAtpPhos, 14, true);
    SITES.atp_pool.push(mitoC.clone());

    // 36 luminous golden host ATP molecular triads scattered across the amoeba cytoplasm feeding the viral factory!
    for (let k = 0; k < 36; k++) {
      const a = (k / 36) * Math.PI * 2;
      const rad = rr(1.75, 2.95);
      const p = VF0.clone().add(V(Math.cos(a) * rad * 0.92, Math.sin(a) * rad * 0.96, rr(-0.85, 0.55)));
      if (p.x < PHAGO0.x + 1.0) p.x = PHAGO0.x + 1.15 + rr(0, 1.4);
      if (p.distanceTo(AMOEBA0) > 3.25) p.sub(AMOEBA0).setLength(3.25).add(AMOEBA0);
      const d = randDir();
      S_ATP.add(p, 0.15, cAtpGold); // Adenosine ring core
      S_ATP.add(p.clone().addScaledVector(d, 0.10), 0.088, cAtpPhos); // α-P
      S_ATP.add(p.clone().addScaledVector(d, 0.18), 0.088, cAtpGold); // β-P
      S_ATP.add(p.clone().addScaledVector(d, 0.26), 0.095, cAtpGold); // γ-P high-energy bond!
      placed++;
      if (k % 3 === 0 && SITES.atp_pool.length < 18) SITES.atp_pool.push(p.clone());
    }
    S_ATP.done();
  }

  // -------------------------------------------------------------------------
  // 5. Circular Magnified dsDNA Atomic Inset (dna_atoms at M0)
  //    A=T (2 H-bonds), G≡C (3 H-bonds), Deoxyribose Pentoses & Phosphodiester P
  //    (ALL text generously centered inside the ring — ZERO clipping!)
  // -------------------------------------------------------------------------
  function buildDnaAtomicInset() {
    const grp = new THREE.Group();
    grp.position.copy(M0);
    grp.rotation.set(-0.04, 0.03, 0.0);
    cell.add(grp);

    const R_RING = 1.64;
    const ringMat = reg(
      'dna_atoms',
      phys(
        {
          color: '#6ee4ff',
          emissive: '#146285',
          emissiveIntensity: 0.42,
          roughness: 0.20,
          metalness: 0.28,
          clearcoat: 0.72,
        },
        {}
      )
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.040, 14, 64), ringMat));

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 56),
      reg(
        'dna_atoms',
        phys(
          {
            color: '#0a1428',
            roughness: 0.16,
            transparent: true,
            opacity: 0.62,
            depthWrite: false,
            side: THREE.DoubleSide,
          },
          {}
        )
      )
    );
    glassDisc.position.z = -0.15;
    grp.add(glassDisc);

    const S_AT = sculpt('dna_atoms', grp, false, { roughness: 0.22, clearcoat: 0.60 });
    // Standard CPK element palette: C slate-silver, H pearl, N cobalt, O crimson, P violet, H-bond glowing aqua
    const cC = col('#94a2ba');
    const cH = col('#f0f7ff');
    const cN = col('#4c94ff');
    const cO = col('#ff5464');
    const cP = col('#be82ff');
    const cBond = col('#cedaf0');
    const cHBond = col('#62f7ff');

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => S_AT.add(p, r * 2, c);
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.024) => S_AT.stick(a, b, r, c1, c2);
    const hBond = (a: THREE.Vector3, b: THREE.Vector3) => {
      for (let k = 0; k < 3; k++) {
        const p0 = a.clone().lerp(b, (k + 0.16) / 3);
        const p1 = a.clone().lerp(b, (k + 0.74) / 3);
        S_AT.stick(p0, p1, 0.014, cHBond, cHBond);
      }
    };
    const makePoly = (cx: number, cy: number, cz: number, rad: number, sides: number, rot = 0) => {
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k < sides; k++) {
        const a = rot + (k / sides) * Math.PI * 2;
        pts.push(V(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, cz + (k % 2 === 0 ? 0.02 : -0.02)));
      }
      return pts;
    };

    // Left & right sugar-phosphate backbones (prominent glowing violet Phosphodiester P + oxygens + deoxyribose pentoses!)
    const drawPhosphodiester = (xP: number, yP: number, xSug: number, yTopSug: number, yBotSug: number) => {
      const pP = V(xP, yP, 0.10);
      const oTop = V(xP + (xSug - xP) * 0.45, yP + 0.24, 0.08);
      const oBot = V(xP + (xSug - xP) * 0.45, yP - 0.24, 0.08);
      const oOut1 = V(xP + (xP < 0 ? -0.17 : 0.17), yP + 0.08, 0.14);
      const oOut2 = V(xP + (xP < 0 ? -0.15 : 0.15), yP - 0.10, 0.16);
      atom(pP, 0.105, cP); // Radiant Phosphodiester P!
      atom(oTop, 0.068, cO);
      atom(oBot, 0.068, cO);
      atom(oOut1, 0.064, cO);
      atom(oOut2, 0.064, cO);
      bond(pP, oTop, cP, cO, 0.026);
      bond(pP, oBot, cP, cO, 0.026);
      bond(pP, oOut1, cP, cO, 0.022);
      bond(pP, oOut2, cP, cO, 0.022);

      // Upper & lower deoxyribose pentoses
      for (const [ys, oLink] of [[yTopSug, oTop], [yBotSug, oBot]] as const) {
        const pent = makePoly(xSug, ys, 0.06, 0.15, 5, Math.PI / 2);
        for (let k = 0; k < 5; k++) {
          const isO = k === 0;
          atom(pent[k], isO ? 0.056 : 0.050, isO ? cO : cC);
          bond(pent[k], pent[(k + 1) % 5], isO ? cO : cC, (k + 1) % 5 === 0 ? cO : cC, 0.020);
        }
        bond(oLink, pent[xP < 0 ? 1 : 4], cO, cC, 0.022);
      }
    };
    drawPhosphodiester(-1.12, 0.02, -0.86, 0.42, -0.38);
    drawPhosphodiester(1.12, 0.02, 0.86, 0.42, -0.38);

    // UPPER RUNG (y ≈ +0.42): Adenine (purine 5+6 ring) === Thymine (pyrimidine 6 ring) with 2 Hydrogen Bonds!
    const a5 = makePoly(-0.46, 0.42, 0.06, 0.14, 5, 0.1);
    const a6 = makePoly(-0.22, 0.42, 0.06, 0.18, 6, 0);
    for (let k = 0; k < 5; k++) {
      const cA = (k === 1 || k === 3) ? cN : cC;
      atom(a5[k], 0.050, cA);
      bond(a5[k], a5[(k + 1) % 5], cA, cC, 0.020);
    }
    for (let k = 0; k < 6; k++) {
      const cA = (k === 0 || k === 2) ? cN : cC;
      atom(a6[k], 0.056, cA);
      bond(a6[k], a6[(k + 1) % 6], cA, ((k + 1) % 6 === 0 || (k + 1) % 6 === 2) ? cN : cC, 0.021);
    }
    bond(V(-0.72, 0.42, 0.06), a5[2], cC, cN, 0.022);
    const aNH2 = V(-0.08, 0.62, 0.08);
    atom(aNH2, 0.062, cN);
    bond(a6[1], aNH2, cC, cN, 0.022);

    const t6 = makePoly(0.42, 0.42, 0.06, 0.18, 6, Math.PI / 6);
    for (let k = 0; k < 6; k++) {
      const cT = (k === 2 || k === 4) ? cN : cC;
      atom(t6[k], 0.056, cT);
      bond(t6[k], t6[(k + 1) % 6], cT, ((k + 1) % 6 === 2 || (k + 1) % 6 === 4) ? cN : cC, 0.021);
    }
    bond(V(0.72, 0.42, 0.06), t6[0], cC, cN, 0.022);
    const tO4 = V(0.28, 0.62, 0.08);
    atom(tO4, 0.062, cO);
    bond(t6[1], tO4, cC, cO, 0.022);
    // 2 gleaming Watson–Crick A=T Hydrogen Bonds (+ bridging H atoms)!
    const hAT1 = aNH2.clone().lerp(tO4, 0.42);
    const hAT2 = a6[0].clone().lerp(t6[3], 0.50);
    atom(hAT1, 0.040, cH);
    atom(hAT2, 0.040, cH);
    hBond(aNH2, tO4);
    hBond(a6[0], t6[3]);

    // LOWER RUNG (y ≈ -0.38): Guanine (purine 5+6 ring) ≡ Cytosine (pyrimidine 6 ring) with 3 Hydrogen Bonds!
    const g5 = makePoly(-0.46, -0.38, 0.06, 0.14, 5, 0.1);
    const g6 = makePoly(-0.22, -0.38, 0.06, 0.18, 6, 0);
    for (let k = 0; k < 5; k++) {
      const cG = (k === 1 || k === 3) ? cN : cC;
      atom(g5[k], 0.050, cG);
      bond(g5[k], g5[(k + 1) % 5], cG, cC, 0.020);
    }
    for (let k = 0; k < 6; k++) {
      const cG = (k === 0 || k === 4) ? cN : cC;
      atom(g6[k], 0.056, cG);
      bond(g6[k], g6[(k + 1) % 6], cG, ((k + 1) % 6 === 0 || (k + 1) % 6 === 4) ? cN : cC, 0.021);
    }
    bond(V(-0.72, -0.38, 0.06), g5[2], cC, cN, 0.022);
    const gO6 = V(-0.08, -0.18, 0.08);
    const gN2 = V(-0.08, -0.58, 0.08);
    atom(gO6, 0.062, cO);
    atom(gN2, 0.062, cN);
    bond(g6[1], gO6, cC, cO, 0.022);
    bond(g6[5], gN2, cC, cN, 0.022);

    const c6 = makePoly(0.42, -0.38, 0.06, 0.18, 6, Math.PI / 6);
    for (let k = 0; k < 6; k++) {
      const cCy = (k === 2 || k === 4) ? cN : cC;
      atom(c6[k], 0.056, cCy);
      bond(c6[k], c6[(k + 1) % 6], cCy, ((k + 1) % 6 === 2 || (k + 1) % 6 === 4) ? cN : cC, 0.021);
    }
    bond(V(0.72, -0.38, 0.06), c6[0], cC, cN, 0.022);
    const cN4 = V(0.28, -0.18, 0.08);
    const cO2 = V(0.28, -0.58, 0.08);
    atom(cN4, 0.062, cN);
    atom(cO2, 0.062, cO);
    bond(c6[1], cN4, cC, cN, 0.022);
    bond(c6[5], cO2, cC, cO, 0.022);

    // 3 gleaming Watson–Crick G≡C Hydrogen Bonds (+ bridging H atoms)!
    atom(gO6.clone().lerp(cN4, 0.58), 0.040, cH);
    atom(g6[0].clone().lerp(c6[3], 0.45), 0.040, cH);
    atom(gN2.clone().lerp(cO2, 0.42), 0.040, cH);
    hBond(gO6, cN4);
    hBond(g6[0], c6[3]);
    hBond(gN2, cO2);

    S_AT.done();

    // Top caption plaque GENEROUSLY centered inside the ring (y = +0.98, width 1.88 -> inked radius <= 1.32 << 1.64!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 104;
    const tg = topCv.getContext('2d');
    tg.clearRect(0, 0, 512, 104);
    tg.textAlign = 'center';
    tg.font = '700 28px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#7ef0ff';
    tg.fillText('1.18 Mbp dsDNA ATOMS', 256, 40);
    tg.font = '600 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#e0f0ff';
    tg.fillText('A=T (2 H) · G≡C (3 H) · PO₄⁻', 256, 78);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.88, 0.38),
      reg(
        'dna_atoms',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.78,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 0.98, 0.14);
    grp.add(topLbl);

    // Bottom CPK atomic legend strip comfortably inside lower circle chord (y = -1.08, width 1.56 -> corners r = 1.44 << 1.64!)
    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 72;
    const bg = botCv.getContext('2d');
    bg.clearRect(0, 0, 512, 72);
    const atomsLegend = [
      ['C', '#94a2ba'],
      ['H', '#f0f7ff'],
      ['N', '#4c94ff'],
      ['O', '#ff5464'],
      ['P', '#be82ff'],
    ];
    bg.font = '700 25px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 66 + idx * 86;
      bg.beginPath();
      bg.arc(bx, 36, 11, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#ecf4ff';
      bg.fillText(sym, bx + 17, 37);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.56, 0.22),
      reg(
        'dna_atoms',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.78,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -1.08, 0.14);
    grp.add(botLbl);

    SITES.dna_atoms.push(M0.clone());
    placed += 8;
  }

  // -------------------------------------------------------------------------
  // Live Opaque-Discard 4x4 MOL Flows (Visible Through Refractive Wet Gel!)
  // Exact 6 species: dntps, mrna, atp, aa_trna, capsomers, fibers_flow
  // -------------------------------------------------------------------------
  const MOL = {
    dntps: ['dNTPs (1.18 Mbp DNA bricks)', '#5ce8ff', 0, 0.27],
    mrna: ['Capped viral mRNA transcripts', MRNA, 1, 0.27],
    atp: ['Host amoeba ATP (0 viral ATP)', '#ffe866', 2, 0.27],
    aa_trna: ['Charged Tyr-tRNA (via TyrRS)', '#ff6eb4', 3, 0.27],
    capsomers: ['MCP trimer capsomers (5J7O)', '#4fa8ff', 4, 0.27],
    fibers_flow: ['Glycosylated 125 nm fibers', '#78ffd6', 5, 0.27],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0c121e';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.04, ...P(0.5, 0.5), s * 0.62);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.50).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const drawBalls = list => {
      g.strokeStyle = ink;
      g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawPoly = (pts, close = true, w = 0.10) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      if (close) g.closePath();
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // dNTPs: pentose + base + 3 phosphate beads
        drawPoly([[0.18, 0.50], [0.34, 0.32], [0.52, 0.42], [0.46, 0.66], [0.24, 0.66]], true, 0.09);
        drawBalls([[0.64, 0.50, 0.09], [0.78, 0.50, 0.09], [0.90, 0.50, 0.08]]);
        break;
      case 1: // Capped mRNA: sinuous transcript ribbon with glowing 5' cap bead
        drawPoly(Array.from({ length: 16 }, (_, i) => [0.20 + i * 0.046, 0.5 + 0.18 * Math.sin(i * 0.82)]), false, 0.10);
        drawBalls([[0.18, 0.50, 0.13]]);
        break;
      case 2: // Host ATP: adenosine ring + 3 glowing phosphates
        drawBalls([[0.62, 0.50, 0.09], [0.76, 0.50, 0.09], [0.90, 0.50, 0.08], [0.30, 0.50, 0.22]]);
        break;
      case 3: // Charged Tyr-tRNA: classic L-shaped cloverleaf + tyrosine ball
        drawPoly([[0.28, 0.24], [0.28, 0.72], [0.76, 0.72]], false, 0.12);
        drawBalls([[0.76, 0.72, 0.14], [0.28, 0.24, 0.11]]);
        break;
      case 4: // MCP Capsomer Trimer: iconic 3-fold double-jelly-roll triangle
        drawBalls([[0.50, 0.24, 0.18], [0.27, 0.66, 0.18], [0.73, 0.66, 0.18]]);
        break;
      case 5: // Glycosylated 125 nm fiber chain: stalk + branched sugar knob
        drawPoly([[0.20, 0.78], [0.46, 0.52], [0.72, 0.28]], false, 0.10);
        drawBalls([[0.74, 0.26, 0.16], [0.56, 0.24, 0.09], [0.78, 0.46, 0.09]]);
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

  // Additive reaction splash rings
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

  function splash(at: THREE.Vector3, hex: string, s = 0.36) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.60, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 3.0, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop();
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.055, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. dNTPs: host amoeba nucleotide precursors flooding into the viral factory & 1.18 Mbp replicating genome
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const src = pickSite('amoeba_mem', AMOEBA0.clone().add(V(2.8, 1.5, 0.2)));
        const dst = rand() < 0.72 ? pickSite('viral_factory', VF0.clone()) : pickSite('dsdna', V0.clone());
        emitFlow('dntps', [src, src.clone().lerp(dst, 0.5).add(V(0, rr(-0.4, 0.5), 0.3)), dst], ['viral_factory', 'dsdna', 'dna_atoms'], 2.7, () =>
          splash(dst, '#5ce8ff', 0.34)
        );
      },
    },
    // 2. Capped viral mRNA: viral_rnap + capping_enz -> stolen host 80S ribosomes!
    {
      rate: 2.3,
      acc: 0.4,
      go: () => {
        const mult = mode === 'stargate_open' ? 2 : 1;
        for (let k = 0; k < mult; k++) {
          const src = rand() < 0.55 ? pickSite('capping_enz', VF0.clone()) : pickSite('viral_rnap', V0.clone());
          const dst = pickSite('host_ribo', VF0.clone().add(V(-1.4, 1.2, 0.4)));
          const mid = src.clone().lerp(dst, 0.5).add(V(0, 0.35, 0.35));
          emitFlow('mrna', [src, mid, dst], ['viral_rnap', 'capping_enz', 'host_ribo', 'viral_factory'], 2.8, () =>
            splash(dst, MRNA, 0.34)
          );
        }
      },
    },
    // 3. Host amoeba ATP (0 viral ATP!): atp_pool -> viral_factory, host_ribo, tyrrs & phagosome V-ATPases
    {
      rate: 2.5,
      acc: 0.5,
      go: () => {
        const src = pickSite('atp_pool', AMOEBA0.clone().add(V(2.0, -1.8, -0.4)));
        const r = rand();
        const dstKey = r < 0.38 ? 'viral_factory' : r < 0.68 ? 'host_ribo' : r < 0.86 ? 'tyrrs' : 'phagosome';
        const dst = pickSite(dstKey, VF0.clone());
        emitFlow('atp', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.32, 0.24)), dst], ['atp_pool', dstKey], 2.5, () =>
          splash(dst, '#ffe866', 0.36)
        );
      },
    },
    // 4. Charged Tyr-tRNA: viral TyrRS (2J5B) -> stolen host 80S ribosomes!
    {
      rate: 2.0,
      acc: 0.4,
      go: () => {
        const src = pickSite('tyrrs', VF0.clone().add(V(-0.9, 0.8, 0.9)));
        const dst = pickSite('host_ribo', VF0.clone().add(V(-1.4, -1.2, 0.4)));
        emitFlow('aa_trna', [src, src.clone().lerp(dst, 0.5).add(V(0.18, 0.24, 0.25)), dst], ['tyrrs', 'host_ribo'], 2.6, () =>
          splash(dst, '#ff6eb4', 0.34)
        );
      },
    },
    // 5. MCP Capsomer Trimers (5J7O): stolen host 80S ribosomes -> nascent procapsids in viral_factory!
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const src = pickSite('host_ribo', VF0.clone().add(V(0.6, 2.0, 0.1)));
        const dst = pickSite('viral_factory', VF0.clone().add(V(1.4, 1.3, -0.2)));
        emitFlow('capsomers', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.22, 0.22)), dst], ['host_ribo', 'viral_factory', 'capsid'], 2.7, () =>
          splash(dst, '#4fa8ff', 0.36)
        );
      },
    },
    // 6. Glycosylated 125 nm Fibers: viral_factory -> maturing progeny procapsids & Mimivirus fiber canopy
    {
      rate: 1.9,
      acc: 0.3,
      go: () => {
        if (rand() < 0.65) {
          const src = pickSite('viral_factory', VF0.clone());
          const dst = VF0.clone().add(V(rr(1.1, 1.8), rr(-1.5, 1.5), rr(-0.4, 0.4)));
          emitFlow('fibers_flow', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.28, 0.22)), dst], ['viral_factory', 'fibers'], 2.6, () =>
            splash(dst, '#78ffd6', 0.34)
          );
        } else {
          const dst = pickSite('fibers', V0.clone().add(V(-1.8, 2.8, 1.2)));
          const src = dst.clone().add(V(rr(-0.6, 0.6), rr(0.6, 1.2), rr(0.5, 1.2)));
          emitFlow('fibers_flow', [src, src.clone().lerp(dst, 0.5), dst], ['fibers', 'capsid'], 2.4);
        }
      },
    },
  ];

  // Smoothly animate the 5 hinged golden stargate petals, fusion pouch, and genomic injection stream
  function applyStargateOpening(u: number) {
    const e = u * u * (3 - 2 * u); // smoothstep [0..1]
    stargatePetals.forEach(p => {
      p.pivot.quaternion.setFromAxisAngle(p.hingeAxis, p.openSign * p.maxAngle * e);
    });
    if (modeRefs.stargateGlow) {
      modeRefs.stargateGlow.emissiveIntensity = 0.56 + 0.68 * e;
    }
    if (modeRefs.factoryCore) {
      modeRefs.factoryCore.emissiveIntensity = 0.24 + 0.52 * e;
    }
    stargateLamp.intensity = 10.5 + 16.0 * e;
    factoryLamp.intensity = 14.5 + 10.0 * e;

    // Internal lipid fusion pouch extends smoothly out of the opening star-shaped vertex!
    fusionPouchGroup.visible = e > 0.03;
    if (fusionPouchGroup.visible) {
      const ps = Math.max(0.05, Math.min(1, (e - 0.03) / 0.65));
      fusionPouchGroup.scale.set(0.75 + 0.25 * ps, ps, 0.75 + 0.25 * ps);
    }

    // Helical 30 nm genomic fiber + dsDNA streams across the phagosome into the cytoplasmic viral factory!
    injectStreamGroup.visible = e > 0.14;
    if (injectStreamGroup.visible) {
      const is = Math.max(0.04, Math.min(1, (e - 0.14) / 0.86));
      injectStreamGroup.scale.set(is, is, is);
    }
  }

  function updateFlows(dt: number) {
    // Advance smooth stargate opening choreography deterministically during both frame() and step()
    if (dt > 0 && Math.abs(modeOpen - targetOpen) > 1e-4) {
      const k = 1 - Math.exp(-dt * 4.5);
      modeOpen += (targetOpen - modeOpen) * k;
      if (Math.abs(modeOpen - targetOpen) < 0.002) modeOpen = targetOpen;
      applyStargateOpening(modeOpen);
    }

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
      const base = MOL[p.type][3] * 1.35;
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
  // Interactive #modeBtn Toggle: 'intact' <-> 'stargate_open'
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;
    targetOpen = mode === 'stargate_open' ? 1 : 0;

    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.toggle('stargate_open', mode === 'stargate_open');
    }
    if (subEl) {
      subEl.textContent =
        mode === 'stargate_open'
          ? 'Stargate Open · 5-fold golden petals unzip in acidic Acanthamoeba phagosome (pH ~5) and inject the 30 nm genomic fiber into the viral factory'
          : 'Cryo-EM dark-field cutaway · 500 nm capsid + 125 nm fibers vs. 300 nm Mycoplasma · 1.18 Mbp dsDNA · 0 viral ribosomes (1 unit = 100 nm)';
    }
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => {
      setMode();
      // Gently frame the stargate portal when opening, or return to overview if desired
      if (mode === 'stargate_open' && curView === 'overview') {
        const vi = VIEWS.findIndex(x => x[0] === 'stargate');
        if (vi >= 0) {
          view = vi;
          curView = 'stargate';
          const [, p, t] = VIEWS[vi];
          camera.position.copy(cell.localToWorld(p.clone()));
          controls.target.copy(cell.localToWorld(t.clone()));
          const vb = document.getElementById('view');
          if (vb) vb.textContent = `View: ${curView}`;
        }
      }
    };
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
    `<div class="row"><span class="bar" style="background:${BACKBONE[0]}"></span><span class="bar" style="background:${BACKBONE[1]}"></span>dsDNA <span class="bar" style="background:${MRNA};margin-left:6px"></span>mRNA</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Giant Virus Mimivirus (750 nm) vs. living Mycoplasma (300 nm): toggle Stargate Open to unzip the 5-fold portal inside the acidic Acanthamoeba phagosome and stream the 1.18 Mbp core into the viral factory.';
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
  const hiCol = k => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#7ee8ff');

  // -------------------------------------------------------------------------
  // Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
  // -------------------------------------------------------------------------
  let motion = true;
  let sway = 0;
  let last = performance.now();

  document.getElementById('view').onclick = e => {
    view = (view + 1) % VIEWS.length;
    const [name, p, t] = VIEWS[view];
    curView = name;
    if (name === 'stargate') setMode('stargate_open', true);
    else if (name === 'overview') setMode('intact', true);
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
    mimiCaps.visible = cutOn;
    hostCaps.visible = cutOn;
    e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow').onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = fxPts.visible = flowsOn;
    e.target.textContent = `Flows: ${flowsOn ? 'on' : 'off'}`;
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
    a.download = `mimivirus-${mode}-realistic.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.15, -0.55, 0.0])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      if (m.view === 'stargate') setMode('stargate_open', true);
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.15, -0.40, 0.0);
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

  // Exact tag coordinates for all 16 parts across all 5 views
  const POINTS = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      fibers: SITES.fibers[3] ?? V0.clone().add(V(-1.6, 3.2, 0.8)),
      capsid: SITES.capsid[3] ?? V0.clone().add(V(0.3, 2.3, 1.0)),
      stargate: SITES.stargate[5] ?? V0.clone().addScaledVector(SG_DIR, R_CAP),
      inner_mem: SITES.inner_mem[2] ?? V(MIMI_CUT_X + 0.05, V0.y + 1.4, MIMI_CUT_Z + 1.4),
      genomic_fiber: SITES.genomic_fiber[8] ?? V0.clone().add(V(-0.35, 0.55, 0.45)),
      dsdna: SITES.dsdna[2] ?? V0.clone().add(V(-0.55, -0.25, 0.65)),
      tyrrs: SITES.tyrrs[0] ?? V0.clone().add(V(-0.88, 0.82, 0.76)),
      viral_rnap: SITES.viral_rnap[0] ?? V0.clone().add(V(-0.98, 0.48, 0.58)),
      capping_enz: SITES.capping_enz[0] ?? V0.clone().add(V(-0.70, 0.70, 0.76)),
      phagosome: SITES.phagosome[2] ?? PHAGO0.clone().add(V(0.6, 1.85, 0.2)),
      amoeba_mem: SITES.amoeba_mem[1] ?? AMOEBA0.clone().add(V(2.6, 2.8, 0.1)),
      viral_factory: SITES.viral_factory[SITES.viral_factory.length - 1] ?? VF0.clone(),
      host_ribo: SITES.host_ribo[1] ?? VF0.clone().add(V(-1.75, 1.45, 0.35)),
      myco_ref: SITES.myco_ref[0] ?? MYCO0.clone(),
      atp_pool: SITES.atp_pool[0] ?? AMOEBA0.clone().add(V(2.12, -1.95, -0.95)),
      dna_atoms: M0.clone(),
    };
    let P = { ...base };
    if (vName === 'stargate') {
      P = {
        ...base,
        stargate: SITES.stargate[5] ?? V0.clone().addScaledVector(SG_DIR, R_CAP),
        phagosome: SITES.phagosome[0] ?? PHAGO0.clone().add(V(1.6, 0.6, 0.1)),
        inner_mem: V0.clone().addScaledVector(SG_DIR, R_MEM + 0.4),
        capsid: SITES.capsid[2] ?? V0.clone().add(V(0.9, 1.9, 1.1)),
        fibers: SITES.fibers[2] ?? V0.clone().add(V(0.2, 3.1, 1.5)),
      };
    } else if (vName === 'genome') {
      P = {
        ...base,
        genomic_fiber: SITES.genomic_fiber[5] ?? V0.clone().add(V(-0.4, 0.5, 0.4)),
        dsdna: SITES.dsdna[3] ?? V0.clone().add(V(-0.6, -0.2, 0.6)),
        tyrrs: SITES.tyrrs[0] ?? V0.clone().add(V(-0.88, 0.82, 0.76)),
        viral_rnap: SITES.viral_rnap[0] ?? V0.clone().add(V(-0.98, 0.48, 0.58)),
        capping_enz: SITES.capping_enz[0] ?? V0.clone().add(V(-0.70, 0.70, 0.76)),
        inner_mem: SITES.inner_mem[2] ?? V(MIMI_CUT_X + 0.05, V0.y + 1.4, MIMI_CUT_Z + 1.4),
      };
    } else if (vName === 'factory') {
      P = {
        ...base,
        viral_factory: VF0.clone(),
        host_ribo: SITES.host_ribo[0] ?? VF0.clone().add(V(-1.75, 1.45, 0.35)),
        atp_pool: SITES.atp_pool[0] ?? AMOEBA0.clone().add(V(2.12, -1.95, -0.95)),
        amoeba_mem: SITES.amoeba_mem[2] ?? AMOEBA0.clone().add(V(3.2, 1.6, 0.0)),
        phagosome: SITES.phagosome[1] ?? PHAGO0.clone().add(V(1.4, 1.3, 0.1)),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        dna_atoms: M0.clone(),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      fibers: 4.1, capsid: 3.3, stargate: 2.3, inner_mem: 2.6,
      genomic_fiber: 2.2, dsdna: 2.2, tyrrs: 1.9, viral_rnap: 1.9, capping_enz: 1.9,
      phagosome: 2.7, amoeba_mem: 4.2, viral_factory: 2.9, host_ribo: 2.3,
      myco_ref: 2.6, atp_pool: 2.3, dna_atoms: 2.2,
    };
    const DIRS = {
      stargate: V(0.38, 0.16, 0.91).normalize(),
      genomic_fiber: V(-0.46, 0.18, 0.87).normalize(),
      dsdna: V(-0.46, 0.18, 0.87).normalize(),
      tyrrs: V(-0.48, 0.18, 0.86).normalize(),
      viral_rnap: V(-0.48, 0.18, 0.86).normalize(),
      capping_enz: V(-0.48, 0.18, 0.86).normalize(),
      viral_factory: V(0.24, 0.18, 0.95).normalize(),
      host_ribo: V(0.24, 0.18, 0.95).normalize(),
      atp_pool: V(0.24, 0.16, 0.96).normalize(),
      myco_ref: V(-0.18, 0.14, 0.97).normalize(),
      dna_atoms: V(0.0, 0.04, 1.0).normalize(),
    };
    const dir = DIRS[k] ?? V(0.18, 0.18, 0.97).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.5, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    fibers: ['capsid'],
    capsid: ['fibers', 'stargate', 'inner_mem'],
    stargate: ['capsid', 'inner_mem', 'phagosome'],
    genomic_fiber: ['dsdna', 'viral_rnap', 'tyrrs'],
    dsdna: ['genomic_fiber', 'viral_rnap', 'capping_enz'],
    viral_rnap: ['capping_enz', 'dsdna'],
    viral_factory: ['host_ribo', 'atp_pool', 'amoeba_mem'],
    host_ribo: ['viral_factory', 'tyrrs', 'atp_pool'],
    phagosome: ['stargate', 'amoeba_mem'],
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
    if (m.mode) setMode(m.mode, true);
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
      mimiCaps.visible = cutOn;
      hostCaps.visible = cutOn;
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
  // Main Animation Loop (Gentle Sway + Smooth Stargate Petal Choreography + Live MOL Flows)
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3.5) / 20));
      cell.rotation.y = 0.075 * Math.sin(sway * 0.11);
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    else if (Math.abs(modeOpen - targetOpen) > 1e-4) {
      const k = 1 - Math.exp(-dt * 4.5);
      modeOpen += (targetOpen - modeOpen) * k;
      if (Math.abs(modeOpen - targetOpen) < 0.002) modeOpen = targetOpen;
      applyStargateOpening(modeOpen);
    }
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.4, camera.position.distanceTo(controls.target) / 14.0));
    cell.updateMatrixWorld();
    updateAllCuts();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) {
      const k = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach(m => {
        if (m.emissive) m.emissive.copy(c);
        if ('emissiveIntensity' in m) m.emissiveIntensity = 0.28 + 0.78 * k;
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
    buildMimivirusVirion(T);
    buildMimivirusCore(T);
    buildMycoplasmaComparator(T);
    buildAcanthamoebaAndFactory(T);
    buildDnaAtomicInset();
    applyStargateOpening(0);
    // Warm up live streams so all 6 molecular species shine on frame 1
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('intact', true);
    cell.updateMatrixWorld();
    updateAllCuts();
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
      mode,
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
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]), mode });
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
        if (name === 'stargate') setMode('stargate_open', true);
        else if (name === 'overview') setMode('intact', true);
        camera.position.copy(cell.localToWorld(p.clone()));
        controls.target.copy(cell.localToWorld(t.clone()));
        const vb = document.getElementById('view');
        if (vb) vb.textContent = `View: ${name}`;
        const P = pointsOf(m.view);
        tagPts = (m.points ?? m.tags ?? []).map(k => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'mode') setMode(m.mode, true);
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
    get mode() { return mode; },
    setMode,
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
    step: (dt = 0.05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); },
    shot: () => {
      cell.updateMatrixWorld();
      updateAllCuts();
      composer.render();
      return renderer.domElement.toDataURL('image/png');
    },
  };
});
