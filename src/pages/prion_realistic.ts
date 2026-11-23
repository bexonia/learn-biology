// @ts-nocheck
import * as THREE from 'three';
import { PDB_SUBVIRAL } from '../molecules/pdb_subviral.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  sweepGeo,
  atS,
  instanced,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  col,
} from '../index.js';

runBiologyApp(20261123, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // Molecular cinema scale: 1 unit ≈ 2.27 nm (NM = 0.44 units/nm; 10 Å = 0.44 u, 4.8 Å cross-β pitch ≈ 0.21–0.24 u).
  // Balanced horizontal layout cleanly framed between #legend (left) and #flows (right):
  //   - Left: Neuronal lipid raft (RAFT_C) with GPI-anchored soluble PrP^C (1QLX, PRPC_HERO) + 2 companions
  //   - Center-left arc: Live animated PrP^C -> PrP^Sc templated conversion cascade onto template_dock
  //   - Center-right hero: Towering twisted PrP^Sc PIRIBS amyloid fibril (7LNA + 7TD6, FIB_C)
  //   - Upper-right: Cleaving infectious fragmentation seed (7TD6 5-rung block, FRAG_C)
  //   - Lower-right: Circular 4.8 Å amide H-bond & Cys179-Cys214 S-S atomic magnifier inset (ATOM_C)
  const NM = 0.44;
  const PRPC_SCALE = 1.24;
  const FIB_SCALE = 0.88;
  const RUNG_DY = 0.235; // Crisp readable 4.8 Å axial rung step along vertical Y axis
  const TWIST_PER_RUNG = -0.062; // Graceful physiological left-handed amyloid helical ribbon twist (~-3.5°/rung)

  const RAFT_C = V(-4.95, -2.15, 0.28);
  const PRPC_HERO = V(-4.85, 0.58, 0.42);
  const FIB_C = V(1.10, -0.30, -0.18);
  const FIB_TOP_Y = FIB_C.y + 3.62;
  const DOCK_POS = V(FIB_C.x, FIB_TOP_Y + 0.14, FIB_C.z);
  const FRAG_C = V(5.25, 2.25, 0.58);
  const ATOM_C = V(5.20, -2.65, 1.48);

  const VIEWS = [
    ['overview', V(0.35, 1.45, 34.8), V(0.15, -0.25, 0.0)],
    ['prpc_raft', V(-4.35, 0.78, 13.4), V(-4.90, -0.32, 0.35)],
    ['conversion', V(0.20, 3.05, 17.6), V(0.40, 2.15, 0.18)],
    ['piribs', V(2.75, 0.12, 11.6), V(1.42, -0.22, -0.05)],
    ['atoms', V(4.10, -2.12, 9.55), V(5.20, -2.65, 1.48)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'conversion' | 'cross_beta';
  const MODE_ORDER: readonly ModeKey[] = ['conversion', 'cross_beta'];
  const MODE_LABEL: Record<ModeKey, string> = {
    conversion: 'Mode: Live Conversion',
    cross_beta: 'Mode: 4.8 Å Cross-β Cryo-EM',
  };
  let mode: ModeKey = 'conversion';

  // Cinema dark-field WebGL2 microscopy stage
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 520,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#1a2340',
    bgMid: '#091020',
    bgOuter: '#020409',
    keyColor: '#fff3e2',
    keyIntensity: 3.15,
    rimColor: '#80ccff',
    rimIntensity: 1.85,
    lampColor: '#ff96a8',
    lampIntensity: 18,
    lampPos: [0.8, 1.6, 5.4],
    bloomStrength: 0.30,
    bloomRadius: 0.52,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 240,
    bokehColor: '#86c6ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated secondary microscopy lamps illuminating the cyan PrP^C raft and golden-crimson PIRIBS core
  const raftLamp = new THREE.PointLight('#6ceeff', 13.5, 22, 2);
  raftLamp.position.set(RAFT_C.x + 1.2, RAFT_C.y + 3.4, RAFT_C.z + 3.8);
  const fibrilLamp = new THREE.PointLight('#ffb074', 11.0, 20, 2);
  fibrilLamp.position.set(FIB_C.x + 3.2, FIB_C.y + 0.6, FIB_C.z + 4.4);
  scene.add(raftLamp, fibrilLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Organized scene groups for cutaway elements and mode-responsive overlays
  const cutExtras = new THREE.Group();
  const crossBetaGuides = new THREE.Group();
  const conversionCascadeGroup = new THREE.Group();
  crossBetaGuides.visible = false;
  cell.add(cutExtras, crossBetaGuides, conversionCascadeGroup);

  // Front cutaway plane slicing open the fibril outer hydration envelope to reveal PIRIBS rungs & steric zippers
  studio.CUT_LOCAL[0].set(V(0, 0, -1), FIB_C.z + 0.45);
  studio.CUT_LOCAL[1].set(V(-1, 0, 0), FIB_C.x + 0.25);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  // Dedicated raft edge cutaway plane exposing the cholesterol-sphingolipid bilayer front slice
  const RAFT_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), RAFT_C.z + 1.15)];
  const RAFT_CUT = RAFT_CUT_LOCAL.map(p => p.clone());
  const RAFT_CLIP = { clippingPlanes: RAFT_CUT, clipIntersection: false, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    RAFT_CUT.forEach((p, i) => {
      p.copy(RAFT_CUT_LOCAL[i]);
      if (!cutOn) p.constant = 1e4;
      p.applyMatrix4(cell.matrixWorld);
    });
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.9);
  const bump = (rx = 8, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // Exact 14 PARTS & REG keys required by Phase 13C contract
  const PARTS = [
    ['lipid_raft', 'Neuronal lipid raft (cholesterol + sphingolipid)', '#5ee6d8'],
    ['gpi_anchor', 'C-terminal GPI glycolipid membrane anchor', '#ffba5a'],
    ['prpc', 'Healthy soluble PrPᶜ monomer (NMR PDB 1QLX)', '#56d8ff'],
    ['helices_h123', 'Native α-helices H1, H2, H3 (~42% α-helical)', '#3cf0d0'],
    ['beta_ribbon', 'Short native β1–β2 ribbon (~3% β-sheet)', '#66a8ff'],
    ['nglycans', 'Branching N-linked glycan trees (Asn181 / 197)', '#ffd454'],
    ['disulfide', 'Conserved Cys179–Cys214 disulfide bridge (S–S)', '#fff04d'],
    ['prpsc_fibril', 'Pathogenic PrPˢᶜ amyloid fibril (PDB 7LNA · 7TD6)', '#e84862'],
    ['piribs_core', 'PIRIBS parallel in-register β-sheet core', '#ff5a78'],
    ['beta_rungs', 'Stacked 4.8 Å cross-β rungs & H-bond ladder', '#ff9c42'],
    ['steric_zipper', 'Dry interdigitating steric-zipper side chains', '#ffcb57'],
    ['template_dock', 'Active fibril-tip conversion template & dock', '#ff64a8'],
    ['fragmentation', 'Fibril fragmentation & infectious seed release', '#ff7c4c'],
    ['amide_atoms', '4.8 Å Amide H-bond & S–S atomic inset (0 P)', '#7ce8ff'],
  ];

  const INFO = {
    lipid_raft: ['Cholesterol- and sphingolipid-enriched microdomain on the outer neuronal plasma membrane', 'Concentrates GPI-anchored PrPᶜ monomers on the cell surface where conversion encounters occur'],
    gpi_anchor: ['Glycosylphosphatidylinositol glycolipid tether linking Ser230 of PrPᶜ to the outer lipid leaflet', 'Anchors soluble PrPᶜ to neuronal rafts while leaving the globular domain free to tilt and interact'],
    prpc: ['Native ~208-aa mammalian prion glycoprotein (PDB 1QLX, residues 125–228 + flexible N-tail; 0 DNA/RNA)', 'Soluble, protease-sensitive cellular isoform whose α-helical fold undergoes misfolding upon contact with PrPˢᶜ'],
    helices_h123: ['Three packed amphipathic α-helices (H1 144–154, H2 173–194, H3 200–226) comprising ~42% of native PrPᶜ', 'Unwind completely during templated conversion to refold into flat extended cross-β amyloid strands'],
    beta_ribbon: ['Compact two-stranded antiparallel β-sheet (β1 128–131 & β2 161–164) making up only ~3% of PrPᶜ', 'Provides an exposed hydrogen-bonding edge thought to initiate docking with incoming PrPˢᶜ templates'],
    nglycans: ['Two bulky biantennary sialylated N-linked oligosaccharide chains attached at Asn181 and Asn197', 'Project outward from both PrPᶜ and PrPˢᶜ fibrils, shaping steric accessibility and prion strain barriers'],
    disulfide: ['Single covalent sulfur–sulfur bridge linking Cys179 and Cys214 across the C-terminal lobe', 'Remains completely intact during conversion, locking the C-terminal β-arch hairpin inside PrPˢᶜ'],
    prpsc_fibril: ['Twisted ~13 nm protease-resistant amyloid protofilament resolved by cryo-EM (PDB 7LNA hamster, 7TD6 mouse)', 'Propagates infectious conformation solely through protein shape with zero DNA, zero RNA, and zero genes'],
    piribs_core: ['Parallel in-register intermolecular β-sheet architecture stacking identical residues directly atop one another', 'Transforms soluble PrPᶜ into a continuous double-arch amyloid core (>43% β-sheet) resistant to denaturation'],
    beta_rungs: ['Planar polypeptide rungs stacked perpendicular to the fibril axis at the exact 4.8 Å (0.48 nm) cross-β repeat', 'Every backbone amide forms dense vertical N–H···O=C hydrogen bonds locking successive monomers together'],
    steric_zipper: ['Tightly interdigitating hydrophobic side-chain teeth meshing across opposing β-sheets with zero trapped water', 'Excludes water and blocks host proteases (Proteinase K) from cleaving the compact amyloid spine'],
    template_dock: ['Exposed uppermost PIRIBS β-rung presenting unsatisfied backbone hydrogen-bond donors and acceptors', 'Captures healthy PrPᶜ monomers and forces them to refold into an exact copy of the misfolded rung'],
    fragmentation: ['Mechanical shear cleaving an elongated PrPˢᶜ fibril into fresh multi-rung infectious protofilament seeds', 'Doubles the number of active template ends each break, driving exponential amplification without a genome'],
    amide_atoms: ['CPK atomic contrast of 4.8 Å inter-rung N–H···O=C H-bonds and the Cys179–Cys214 S–S bridge (C, H, N, O, S)', 'Demonstrates protein-only chemistry: zero Phosphorus (0 P), zero nucleotides, and pure conformational catalysis'],
  };

  const REG = {};
  const reg = (k, m) => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    (m.isShaderMaterial ? r.imp : r.mats).push(m);
    return m;
  };
  const phys = (o, clipObj = {}) => new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.84, ...clipObj, ...o });
  const protMat = (k, clip = false, extra = {}, clipPlanes = CUT) => {
    const m = phys(
      {
        vertexColors: true,
        roughness: 0.36,
        metalness: 0.04,
        clearcoat: 0.34,
        clearcoatRoughness: 0.28,
        sheen: 0.38,
        sheenColor: '#fff6fa',
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
  const sculpt = (k, parent = cell, clip = false, extra = {}, clipPlanes = CUT) =>
    makeSculptedMesh(protMat(k, clip, extra, clipPlanes), parent);
  const molBatch = (k, geo, parent = cell, clip = false, extra = {}, clipPlanes = CUT) =>
    makeMolBatch(geo, protMat(k, clip, extra, clipPlanes), parent);

  const shells = [];
  const LOOKS = ['gel', 'see-through', 'solid'];
  let organelleLook = 'gel';
  let placed = 0;

  function cinemaShellMat(k, solidHex, gelHex, clipObj, opts = {}) {
    const m = makeCinemaMembraneMat(clipObj, opts.normalMap ?? bump(10, 10), {
      color: gelHex,
      attenuationColor: opts.attenCol ?? solidHex,
      attenuationDistance: opts.attenDist ?? 4.2,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.28,
      iridescence: opts.iridescence ?? 0.50,
      thickness: opts.thickness ?? 0.50,
      roughness: opts.roughness ?? 0.13,
      sheenColor: opts.sheenColor ?? '#e6f8ff',
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
      const isCrossBetaGhost = mode === 'cross_beta' && m === modeRefs.fibrilShell;
      m.transmission = isCrossBetaGhost ? 0 : gel ? 1 : 0;
      m.transparent = isCrossBetaGhost || see;
      m.opacity = isCrossBetaGhost ? 0.14 : see ? 0.38 : 1;
      m.depthWrite = !(isCrossBetaGhost || see);
      m.side = gel && !isCrossBetaGhost ? THREE.FrontSide : THREE.DoubleSide;
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
    let n = 0, cap = 1 << 12;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 11;
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

  const ortho = (n: THREE.Vector3) => {
    const u = n.clone().normalize();
    const ref = Math.abs(u.y) < 0.85 ? V(0, 1, 0) : V(1, 0, 0);
    return across(ref, u).normalize();
  };
  const qOut = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };

  // Site anchors & animated conversion entities
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));

  const modeRefs: {
    fibrilShell?: THREE.MeshPhysicalMaterial;
    piribsMat?: THREE.MeshPhysicalMaterial;
    rungMat?: THREE.MeshPhysicalMaterial;
    zipperMat?: THREE.MeshPhysicalMaterial;
    dockMat?: THREE.MeshPhysicalMaterial;
    dockRingMat?: THREE.MeshPhysicalMaterial;
    fibrilSurfMat?: THREE.MeshPhysicalMaterial;
    fibrilHumanMat?: THREE.MeshPhysicalMaterial;
  } = {};

  interface MorphCarrier {
    phase: number;
    root: THREE.Group;
    alphaMesh: THREE.Mesh;
    alphaMat: THREE.MeshPhysicalMaterial;
    betaMesh: THREE.Mesh;
    betaMat: THREE.MeshPhysicalMaterial;
    lastU: number;
  }
  const morphCarriers: MorphCarrier[] = [];
  let fragGroup: THREE.Group | null = null;
  let prpcHeroGroup: THREE.Group | null = null;
  let dockHaloMesh: THREE.Mesh | null = null;
  let conversionCurve: THREE.CatmullRomCurve3 | null = null;
  let animClock = 0;

  // -------------------------------------------------------------------------
  // Decode ALL 3 Real RCSB Structures from PDB_SUBVIRAL & Build Cryo-EM Surfaces
  //   1. PDB_SUBVIRAL.prpc         (1QLX — Human soluble PrP^C NMR, 104 res 125-228)
  //   2. PDB_SUBVIRAL.prpsc_fibril (7LNA — Hamster 263K PrP^Sc cryo-EM fibril, 3 rungs)
  //   3. PDB_SUBVIRAL.prpsc_human  (7TD6 — Mammalian aRML PrP^Sc cryo-EM fibril, 5 rungs)
  // -------------------------------------------------------------------------
  function extractBackbone(m, chainIdx = 0, scale = 1, rotateZtoY = false) {
    const k = 0.01 * NM * scale;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < m.n; i++) {
      const kd = m.kind[i];
      if ((kd >> 2) !== chainIdx || (kd & 3) !== 0) continue;
      const x = m.xyz[i * 3] * k;
      const y = m.xyz[i * 3 + 1] * k;
      const z = m.xyz[i * 3 + 2] * k;
      // RotateX(-PI/2): (x, y, z) -> (x, z, -y) so PDB fibril axis +Z aligns with vertical +Y
      pts.push(rotateZtoY ? V(x, z, -y) : V(x, y, z));
    }
    return pts;
  }

  function buildPdbTemplates() {
    const mPrpc = pdb.getModel(PDB_SUBVIRAL, 'prpc');
    const m7lna = pdb.getModel(PDB_SUBVIRAL, 'prpsc_fibril');
    const m7td6 = pdb.getModel(PDB_SUBVIRAL, 'prpsc_human');

    // 1. Native soluble PrP^C (NMR PDB 1QLX) colored by real secondary structure indices:
    //    beta1(3..6), H1(19..29), beta2(36..39), H2(48..69), H3(75..101), Cys179(54), Cys214(89)
    const bbIdxByRaw = new Int32Array(mPrpc.n).fill(-1);
    let bbCount = 0;
    for (let i = 0; i < mPrpc.n; i++) {
      if ((mPrpc.kind[i] & 3) === 0) bbIdxByRaw[i] = bbCount++;
      else bbIdxByRaw[i] = Math.max(0, bbCount - 1);
    }

    const cPrpcLoop = col('#4ec6f2');
    const cPrpcHelix = col('#32f0d4');
    const cPrpcBeta = col('#5d9eff');
    const cPrpcCys = col('#fff04d');

    const geoPrpc = buildPdbSurfaceGeo(mPrpc, {
      nm: NM,
      scale: PRPC_SCALE,
      maxDim: 34,
      sigmaAng: 3.1,
      iso: 0.37,
      aoStrength: 0.52,
      colorFn: (_grp, part, idx) => {
        const b = bbIdxByRaw[idx] ?? 0;
        if (Math.abs(b - 54) <= 1 || Math.abs(b - 89) <= 1) return cPrpcCys;
        if ((b >= 19 && b <= 29) || (b >= 48 && b <= 69) || (b >= 75 && b <= 101)) {
          return part === 1 ? cPrpcHelix.clone().offsetHSL(0.01, 0, 0.05) : cPrpcHelix;
        }
        if ((b >= 3 && b <= 6) || (b >= 36 && b <= 39)) return cPrpcBeta;
        return part === 1 ? cPrpcLoop.clone().offsetHSL(0, 0, 0.06) : cPrpcLoop;
      },
    });

    // 2. Pathogenic PrP^Sc 263K Cryo-EM 3-rung block (PDB 7LNA) — Z fibril axis rotated to +Y!
    const cNarch = col('#e03b58');
    const cCarch = col('#ff6d54');
    const cZipZone = col('#f2a644');
    const geo7lna = buildPdbSurfaceGeo(m7lna, {
      nm: NM,
      scale: FIB_SCALE,
      maxDim: 44,
      sigmaAng: 2.55,
      iso: 0.41,
      aoStrength: 0.68,
      colorFn: (grp, part, idx) => {
        const localIdx = idx % 252;
        if (localIdx > 148) return part === 1 ? cCarch.clone().offsetHSL(0.01, 0, 0.05) : cCarch;
        if (localIdx > 72 && localIdx < 120) return cZipZone;
        const tint = grp === 1 ? 0.06 : grp === 2 ? -0.06 : 0;
        return cNarch.clone().offsetHSL(tint * 0.4, 0, tint);
      },
    });
    geo7lna.rotateX(-Math.PI / 2);
    // Slight axial stretch (1.16x) so 4.8 Å cross-β grooves catch crisp cinema specular highlights
    geo7lna.scale(1, 1.16, 1);

    // 2b. Single-rung 7LNA (chain 0 only) for active template_dock tip & live morphing conversion monomers!
    const geo7lnaRung = buildPdbSurfaceGeo(m7lna, {
      nm: NM,
      scale: FIB_SCALE,
      maxDim: 38,
      sigmaAng: 2.65,
      iso: 0.40,
      aoStrength: 0.56,
      filter: grp => grp === 0,
      colorFn: (_grp, part, idx) => {
        if (idx > 148) return part === 1 ? col('#ff85a8') : col('#ff588c');
        return part === 1 ? col('#ffad75') : col('#ff6c62');
      },
    });
    geo7lnaRung.rotateX(-Math.PI / 2);

    // 3. Pathogenic PrP^Sc Mammalian aRML Cryo-EM 5-rung block (PDB 7TD6) — sharp 4.8 Å striated lamellae!
    const cTdN = col('#d93860');
    const cTdC = col('#ff7858');
    const cTdMid = col('#ffac52');
    const geo7td6 = buildPdbSurfaceGeo(m7td6, {
      nm: NM,
      scale: FIB_SCALE * 0.98,
      maxDim: 46,
      sigmaAng: 2.35,
      iso: 0.43,
      aoStrength: 0.70,
      colorFn: (grp, part, idx) => {
        const localIdx = idx % 180;
        const rungStripe = grp % 2 === 0 ? 0.06 : -0.06;
        if (localIdx > 105) return (part === 1 ? cTdC.clone().offsetHSL(0.01, 0, 0.04) : cTdC.clone()).offsetHSL(0, 0, rungStripe);
        if (localIdx > 48 && localIdx < 88) return cTdMid.clone().offsetHSL(0, 0, rungStripe);
        return cTdN.clone().offsetHSL(0, 0, rungStripe);
      },
    });
    geo7td6.rotateX(-Math.PI / 2);
    geo7td6.scale(1, 1.16, 1);

    const prpcBB = extractBackbone(mPrpc, 0, PRPC_SCALE, false);
    const lnaBB0 = extractBackbone(m7lna, 0, FIB_SCALE, true);
    const td6BB0 = extractBackbone(m7td6, 0, FIB_SCALE * 0.98, true);

    return { geoPrpc, geo7lna, geo7lnaRung, geo7td6, prpcBB, lnaBB0, td6BB0 };
  }

  // -------------------------------------------------------------------------
  // 1. Neuronal Lipid Raft (Wet-Gel Bilayer Microdomain + Cholesterol + Sphingolipids)
  // -------------------------------------------------------------------------
  function buildNeuronalLipidRaft() {
    const grp = new THREE.Group();
    grp.position.copy(RAFT_C);
    // Tilt gently toward viewer so both the shimmering top raft surface & front bilayer slice read clearly
    grp.rotation.set(0.22, 0.20, -0.05);
    cell.add(grp);

    const RX = 2.48;
    const RZ = 1.88;
    const BILAYER_H = 0.44; // ~1 nm visual thickness emphasizing sphingolipid + cholesterol microdomain
    const domeY = (x: number, z: number) => {
      const r2 = (x * x) / (RX * RX) + (z * z) / (RZ * RZ);
      const undul = 0.065 * Math.sin(x * 1.45 + z * 1.1) + 0.04 * Math.cos(x * 0.9 - z * 1.6);
      return -0.22 * r2 + undul;
    };

    // Sculpt smooth elliptical undulating disc leaflet (wet-gel Cinema PBR shells!)
    function makeLeafletGeo(yOff: number, radScale = 1.0) {
      const g = new THREE.CylinderGeometry(1, 1, 0.085, 64, 1, false);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
        const r = Math.hypot(vx, vz);
        const ang = Math.atan2(vz, vx);
        // Subtle organic raft edge ripple
        const edgeMod = 1 + 0.045 * Math.sin(ang * 5 + 0.4) + 0.025 * Math.cos(ang * 3 - 0.8);
        const x = vx * RX * radScale * edgeMod;
        const z = vz * RZ * radScale * edgeMod;
        const taper = r > 0.86 ? (1 - r) / 0.14 : 1;
        const y = vy * Math.max(0.45, taper) + yOff + domeY(x, z);
        p.setXYZ(i, x, y, z);
      }
      g.computeVertexNormals();
      return g;
    }

    // Outer extracellular raft leaflet (translucent wet-gel turquoise-jade shell!)
    const raftOuterMat = cinemaShellMat('lipid_raft', '#2eb8b0', '#b8fff6', RAFT_CLIP, {
      attenCol: '#249496',
      attenDist: 3.4,
      sssColor: '#72ffe8',
      sssIntensity: 0.34,
      iridescence: 0.56,
      thickness: 0.52,
      roughness: 0.12,
      sheenColor: '#d4fff8',
      normalMap: bump(10, 8),
      normalScale: 0.28,
    });
    grp.add(shade(new THREE.Mesh(makeLeafletGeo(+BILAYER_H * 0.5, 1.0), raftOuterMat), true, true));

    // Inner cytosolic raft leaflet (translucent wet-gel sea-blue shell!)
    const raftInnerMat = cinemaShellMat('lipid_raft', '#266ea8', '#a6dcff', RAFT_CLIP, {
      attenCol: '#1c5385',
      attenDist: 3.2,
      sssColor: '#66c8ff',
      sssIntensity: 0.26,
      iridescence: 0.44,
      thickness: 0.44,
      roughness: 0.14,
      sheenColor: '#cceeff',
      normalMap: bump(10, 8),
      normalScale: 0.24,
    });
    grp.add(shade(new THREE.Mesh(makeLeafletGeo(-BILAYER_H * 0.5, 0.985), raftInnerMat), false, true));

    // Hydrophobic acyl-chain interior cushion visible through the wet gel & front cut edge
    const coreGeo = makeLeafletGeo(0, 0.96);
    coreGeo.scale(1, 3.6, 1);
    const coreMat = reg(
      'lipid_raft',
      applyBacklitSSS(
        phys(
          {
            color: '#1b354d',
            roughness: 0.58,
            clearcoat: 0.20,
            side: THREE.DoubleSide,
          },
          RAFT_CLIP
        ),
        '#56d8e8',
        0.18,
        2.5
      )
    );
    grp.add(new THREE.Mesh(coreGeo, coreMat));

    // Dense instanced phospholipid/sphingomyelin headgroups, acyl tails & golden cholesterol wedges
    const S_RAFT = sculpt('lipid_raft', grp, false, {
      emissive: '#0e4a52',
      emissiveIntensity: 0.22,
      roughness: 0.28,
      clearcoat: 0.48,
    });
    const cSphingo = col('#52f2de');
    const cHead2 = col('#58b8ff');
    const cTail = col('#7c9ec2');
    const cChol = col('#ffd96b');

    // Perimeter + front cross-section bilayer lipids so the two leaflets & hydrophobic core read unmistakably
    const N_RING = 46;
    for (let i = 0; i < N_RING; i++) {
      const a = (i / N_RING) * Math.PI * 2;
      const edgeMod = 1 + 0.045 * Math.sin(a * 5 + 0.4) + 0.025 * Math.cos(a * 3 - 0.8);
      const lx = Math.cos(a) * RX * 0.93 * edgeMod;
      const lz = Math.sin(a) * RZ * 0.93 * edgeMod;
      const dy = domeY(lx, lz);
      const top = V(lx, dy + BILAYER_H * 0.54, lz);
      const bot = V(lx, dy - BILAYER_H * 0.54, lz);
      const mid = V(lx, dy, lz);
      const isChol = i % 4 === 0;
      S_RAFT.add(top, isChol ? 0.13 : 0.16, isChol ? cChol : i % 2 === 0 ? cSphingo : cHead2);
      S_RAFT.add(bot, 0.15, i % 2 === 0 ? cHead2 : cSphingo);
      S_RAFT.stick(top.clone().add(V(0, -0.05, 0)), mid.clone().add(V(0, 0.03, 0)), isChol ? 0.038 : 0.022, isChol ? cChol : cTail, cTail);
      S_RAFT.stick(bot.clone().add(V(0, 0.05, 0)), mid.clone().add(V(0, -0.03, 0)), 0.022, cTail, cTail);
      placed += 2;
    }

    // Interior sphingolipid-cholesterol microdomain dome mosaic on the top leaflet
    for (let ring = 1; ring <= 4; ring++) {
      const fr = ring / 4.8;
      const cnt = ring * 8;
      for (let j = 0; j < cnt; j++) {
        const a = (j / cnt) * Math.PI * 2 + ring * 0.42;
        const lx = Math.cos(a) * RX * fr;
        const lz = Math.sin(a) * RZ * fr;
        const dy = domeY(lx, lz);
        const isChol = (ring + j) % 3 === 0;
        const pTop = V(lx, dy + BILAYER_H * 0.56, lz);
        S_RAFT.add(pTop, isChol ? 0.125 : 0.15, isChol ? cChol : (ring + j) % 2 === 0 ? cSphingo : cHead2);
        if (ring === 3 && j % 6 === 0) {
          const wp = pTop.clone().applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(grp.rotation)).add(RAFT_C);
          SITES.lipid_raft.push(wp);
        }
        placed++;
      }
    }

    // Explicit front cross-section cutaway cap lipids revealed when cutOn is active
    const S_CAP = sculpt('lipid_raft', cutExtras, false, {
      emissive: '#145862',
      emissiveIntensity: 0.28,
      roughness: 0.26,
    });
    const raftM = new THREE.Matrix4().compose(RAFT_C, new THREE.Quaternion().setFromEuler(grp.rotation), V(1, 1, 1));
    for (let ix = -8; ix <= 8; ix++) {
      const lx = ix * 0.22;
      const lz = 1.10;
      if ((lx * lx) / (RX * RX) + (lz * lz) / (RZ * RZ) > 0.94) continue;
      const dy = domeY(lx, lz);
      const pTop = V(lx, dy + BILAYER_H * 0.52, lz).applyMatrix4(raftM);
      const pMid = V(lx, dy, lz).applyMatrix4(raftM);
      const pBot = V(lx, dy - BILAYER_H * 0.52, lz).applyMatrix4(raftM);
      const isChol = Math.abs(ix) % 3 === 1;
      S_CAP.add(pTop, 0.14, isChol ? cChol : cSphingo);
      S_CAP.add(pBot, 0.14, cHead2);
      S_CAP.stick(pTop, pMid, isChol ? 0.036 : 0.020, isChol ? cChol : cTail, cTail);
      S_CAP.stick(pBot, pMid, 0.020, cTail, cTail);
    }

    S_RAFT.done();
    S_CAP.done();
    SITES.lipid_raft.push(RAFT_C.clone().add(V(0, 0.35, 0.4)));
    return { raftGroup: grp, raftM, domeY, BILAYER_H };
  }

  // -------------------------------------------------------------------------
  // 2. Native Soluble PrP^C (NMR 1QLX) + H1/H2/H3 Helices + β1–β2 Ribbon +
  //    N-Glycan Trees + Conserved Cys179–Cys214 Disulfide + GPI Anchors
  // -------------------------------------------------------------------------
  function buildNativePrpcAndRaftComplex(T, raftInfo) {
    // Orient 1QLX so its C-terminus (bb[103]) points cleanly downward toward the GPI anchor on the lipid raft!
    const cTermDir = T.prpcBB[103].clone().normalize();
    const qBase = new THREE.Quaternion().setFromUnitVectors(cTermDir, V(0, -1, 0));
    const qSpin = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), 0.72);
    const Q_PRPC = qSpin.multiply(qBase);

    // Helper: place one complete GPI-anchored PrP^C unit (hero = full structural highlights; companions = clean raft crowd)
    function mountPrpcUnit(worldPos: THREE.Vector3, raftLocalXZ: [number, number], scaleMult: number, twistY: number, isHero: boolean) {
      const unitGrp = new THREE.Group();
      unitGrp.position.copy(worldPos);
      const qUnit = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twistY).multiply(Q_PRPC);
      unitGrp.quaternion.copy(qUnit);
      unitGrp.scale.setScalar(scaleMult);
      cell.add(unitGrp);
      if (isHero) prpcHeroGroup = unitGrp;

      // 2A. Real NMR PDB 1QLX Cryo-EM/Solvent Surface ('prpc')
      const prpcMat = protMat('prpc', false, {
        roughness: 0.30,
        clearcoat: 0.46,
        sheen: 0.42,
        sheenColor: '#c2f8ff',
        emissive: '#0a4864',
        emissiveIntensity: 0.24,
        transparent: isHero,
        opacity: isHero ? 0.66 : 1.0,
        depthWrite: !isHero,
      });
      const prpcMesh = shade(new THREE.Mesh(T.geoPrpc, prpcMat), true, true);
      unitGrp.add(prpcMesh);
      placed += 12;

      // Subtle refractive wet-gel hydration aura shell around Hero PrP^C (adds to shells!)
      if (isHero) {
        const auraGeo = T.geoPrpc.clone();
        auraGeo.scale(1.07, 1.07, 1.07);
        const auraMat = cinemaShellMat('prpc', '#36bce6', '#cbf8ff', {}, {
          attenCol: '#2498c8',
          attenDist: 3.6,
          sssColor: '#76efff',
          sssIntensity: 0.30,
          iridescence: 0.42,
          thickness: 0.36,
          roughness: 0.14,
          normalScale: 0.16,
        });
        unitGrp.add(new THREE.Mesh(auraGeo, auraMat));
      }

      // Flexible disordered N-terminal octapeptide-repeat tail (residues 23–124) waving from 1QLX N-term (bb[0])
      const S_NTAIL = sculpt('prpc', unitGrp, false, {
        emissive: '#0c526e',
        emissiveIntensity: 0.26,
        roughness: 0.32,
      });
      const nStart = T.prpcBB[0].clone();
      const nOut = nStart.clone().normalize();
      const nU = ortho(nOut);
      const nV = nOut.clone().cross(nU).normalize();
      const tailPts: THREE.Vector3[] = [];
      for (let s = 0; s <= 14; s++) {
        const f = s / 14;
        tailPts.push(
          nStart
            .clone()
            .addScaledVector(nOut, f * 1.15)
            .addScaledVector(nU, 0.26 * Math.sin(f * Math.PI * 2.4 + twistY))
            .addScaledVector(nV, 0.22 * Math.cos(f * Math.PI * 1.9 + twistY))
        );
      }
      S_NTAIL.tube(tailPts, 0.052, 0.036, col('#6ee4ff'), col('#9cf2ff'), 8, true);
      S_NTAIL.done();

      // 2B. Three Native α-Helices H1 (144–154), H2 (173–194), H3 (200–226) traced directly from 1QLX! ('helices_h123')
      const S_HEL = sculpt('helices_h123', unitGrp, false, {
        emissive: '#0b6e60',
        emissiveIntensity: isHero ? 0.44 : 0.28,
        roughness: 0.24,
        clearcoat: 0.62,
      });
      const helixRanges: Array<[number, number, string, string]> = [
        [19, 29, '#2ef5d8', '#78ffee'], // H1
        [48, 69, '#1ee0c4', '#6cf7e6'], // H2
        [75, 101, '#26e8ff', '#8af4ff'], // H3
      ];
      helixRanges.forEach(([i0, i1, cA, cB]) => {
        const rawPts = T.prpcBB.slice(i0, i1 + 1);
        const curve = new THREE.CatmullRomCurve3(rawPts);
        const smoothPts = curve.getPoints((i1 - i0) * 3);
        S_HEL.tube(smoothPts, isHero ? 0.115 : 0.09, isHero ? 0.115 : 0.09, col(cA), col(cB), 10, true);
        // Sculpted helical turns accenting the coiled α-helix periodicity
        for (let k = 0; k < rawPts.length; k += 2) {
          S_HEL.add(rawPts[k], isHero ? 0.21 : 0.16, col(cB));
          placed++;
        }
        if (isHero) {
          const midLocal = rawPts[Math.floor(rawPts.length / 2)].clone();
          SITES.helices_h123.push(midLocal.multiplyScalar(scaleMult).applyQuaternion(qUnit).add(worldPos));
        }
      });
      S_HEL.done();

      // 2C. Short Antiparallel β1–β2 Ribbon (β1 128–131 & β2 161–164) traced directly from 1QLX! ('beta_ribbon')
      const S_BETA = sculpt('beta_ribbon', unitGrp, false, {
        emissive: '#1e4ea8',
        emissiveIntensity: isHero ? 0.56 : 0.34,
        roughness: 0.24,
        clearcoat: 0.64,
      });
      const b1Pts = T.prpcBB.slice(3, 7);
      const b2Pts = T.prpcBB.slice(36, 40);
      S_BETA.tube(b1Pts, 0.088, 0.072, col('#5aa4ff'), col('#9ecaff'), 8, true);
      S_BETA.tube(b2Pts, 0.088, 0.072, col('#4b8cff'), col('#8cc0ff'), 8, true);
      // Cross-strand antiparallel β-sheet H-bonds joining β1 and β2
      for (let k = 0; k < Math.min(b1Pts.length, b2Pts.length); k++) {
        const a = b1Pts[k];
        const b = b2Pts[b2Pts.length - 1 - k];
        S_BETA.stick(a, b, 0.022, col('#a8d8ff'), col('#eef7ff'));
      }
      if (isHero) {
        const bMid = b1Pts[1].clone().lerp(b2Pts[2], 0.5);
        SITES.beta_ribbon.push(bMid.multiplyScalar(scaleMult).applyQuaternion(qUnit).add(worldPos));
      }
      S_BETA.done();

      // 2D. Conserved Cys179–Cys214 Disulfide Bridge (S–S) at EXACT 1QLX coordinates! ('disulfide')
      const S_SS = sculpt('disulfide', unitGrp, false, {
        emissive: '#bfa400',
        emissiveIntensity: 0.78,
        roughness: 0.20,
        metalness: 0.14,
        clearcoat: 0.72,
      });
      const pCys179 = T.prpcBB[54].clone();
      const pCys214 = T.prpcBB[89].clone();
      const s1 = pCys179.clone().lerp(pCys214, 0.34);
      const s2 = pCys179.clone().lerp(pCys214, 0.66);
      S_SS.stick(pCys179, s1, 0.044, col('#d8cf78'), col('#fff04d'));
      S_SS.stick(s1, s2, 0.068, col('#fff45c'), col('#ffe02b')); // Radiant S–S covalent bond!
      S_SS.stick(s2, pCys214, 0.044, col('#fff04d'), col('#d8cf78'));
      S_SS.add(s1, isHero ? 0.27 : 0.18, col('#fff552'));
      S_SS.add(s2, isHero ? 0.27 : 0.18, col('#fff552'));
      S_SS.done();
      placed += 2;
      if (isHero) {
        const ssMid = s1.clone().lerp(s2, 0.5);
        SITES.disulfide.push(ssMid.multiplyScalar(scaleMult).applyQuaternion(qUnit).add(worldPos));
      }

      // 2E. Two Branching Biantennary N-Linked Glycan Trees at EXACT 1QLX Asn181 (bb[56]) & Asn197 (bb[72])! ('nglycans')
      const S_GLY = sculpt('nglycans', unitGrp, false, {
        emissive: '#805606',
        emissiveIntensity: 0.34,
        roughness: 0.26,
        clearcoat: 0.56,
      });
      const cGlc = col('#ffc642');
      const cMan = col('#ffe06e');
      const cSia = col('#ff9848');
      [56, 72].forEach((asnIdx, gi) => {
        const anchor = T.prpcBB[asnIdx].clone();
        const outDir = anchor.clone().normalize();
        const u = ortho(outDir);
        const v = outDir.clone().cross(u).normalize();
        const stem1 = anchor.clone().addScaledVector(outDir, 0.28);
        const stem2 = stem1.clone().addScaledVector(outDir, 0.28).addScaledVector(u, 0.08 * (gi === 0 ? 1 : -1));
        S_GLY.stick(anchor, stem1, 0.036, cGlc, cGlc);
        S_GLY.stick(stem1, stem2, 0.034, cGlc, cMan);
        S_GLY.add(stem1, 0.16, cGlc);
        S_GLY.add(stem2, 0.17, cMan);
        // Biantennary branches ending in charged sialic-acid caps
        for (const sign of [-1, 1]) {
          const br1 = stem2.clone().addScaledVector(outDir, 0.30).addScaledVector(u, sign * 0.26).addScaledVector(v, sign * 0.10);
          const br2 = br1.clone().addScaledVector(outDir, 0.26).addScaledVector(u, sign * 0.16).addScaledVector(v, -sign * 0.14);
          const tip = br2.clone().addScaledVector(outDir, 0.20).addScaledVector(u, sign * 0.12);
          S_GLY.stick(stem2, br1, 0.028, cMan, cMan);
          S_GLY.stick(br1, br2, 0.026, cMan, cGlc);
          S_GLY.stick(br2, tip, 0.024, cGlc, cSia);
          S_GLY.add(br1, 0.15, cMan);
          S_GLY.add(br2, 0.14, cGlc);
          S_GLY.add(tip, 0.17, cSia);
          placed += 3;
          if (isHero && sign === 1) {
            SITES.nglycans.push(br2.clone().multiplyScalar(scaleMult).applyQuaternion(qUnit).add(worldPos));
          }
        }
      });
      S_GLY.done();

      // 2F. C-terminal GPI Glycolipid Membrane Anchor tethering Ser230 (1QLX C-term) straight into the lipid raft! ('gpi_anchor')
      const S_GPI = sculpt('gpi_anchor', cell, false, {
        emissive: '#784608',
        emissiveIntensity: 0.34,
        roughness: 0.28,
        clearcoat: 0.54,
      });
      const cTermWorld = T.prpcBB[103].clone().multiplyScalar(scaleMult).applyQuaternion(qUnit).add(worldPos);
      const [rx, rz] = raftLocalXZ;
      const ry = raftInfo.domeY(rx, rz);
      const raftTopWorld = V(rx, ry + raftInfo.BILAYER_H * 0.54, rz).applyMatrix4(raftInfo.raftM);
      const raftMidWorld = V(rx, ry + 0.04, rz).applyMatrix4(raftInfo.raftM);

      const gpiMid1 = cTermWorld.clone().lerp(raftTopWorld, 0.34).add(V(0.09 * Math.cos(twistY), 0, 0.07 * Math.sin(twistY)));
      const gpiMid2 = cTermWorld.clone().lerp(raftTopWorld, 0.68).add(V(-0.07 * Math.cos(twistY), 0, -0.06 * Math.sin(twistY)));
      const gpiCurve = new THREE.CatmullRomCurve3([cTermWorld, gpiMid1, gpiMid2, raftTopWorld]);
      const gpiPts = gpiCurve.getPoints(14);
      S_GPI.tube(gpiPts, 0.042 * scaleMult, 0.048 * scaleMult, col('#ffd470'), col('#ff9f42'), 8, true);
      // Ethanolamine + 3 mannose + glucosamine glycolipid beads along GPI core
      [0.18, 0.40, 0.62, 0.84].forEach((f, idx) => {
        const bp = gpiCurve.getPointAt(f);
        S_GPI.add(bp, (idx === 0 ? 0.14 : 0.17) * scaleMult, idx === 0 ? col('#ffec88') : col('#ffb64d'));
        placed++;
      });
      // Twin diacylglycerol lipid tails plunging into the outer leaflet hydrophobic core!
      const tailA = raftMidWorld.clone().add(V(-0.09, -0.06, 0.04));
      const tailB = raftMidWorld.clone().add(V(0.09, -0.06, -0.04));
      S_GPI.stick(raftTopWorld, tailA, 0.028 * scaleMult, col('#ffad48'), col('#ffd88a'));
      S_GPI.stick(raftTopWorld, tailB, 0.028 * scaleMult, col('#ffad48'), col('#ffd88a'));
      S_GPI.ring(raftTopWorld, V(0, 1, 0), 0.16 * scaleMult, 0.032 * scaleMult, col('#ffc864'), 18, 7);
      S_GPI.done();

      SITES.prpc.push(worldPos.clone());
      SITES.gpi_anchor.push(gpiCurve.getPointAt(0.55));
    }

    // Mount Hero PrP^C front-center on the neuronal raft + 2 flanking GPI-anchored PrP^C neighbors!
    mountPrpcUnit(PRPC_HERO, [0.05, 0.15], 1.0, 0.0, true);
    mountPrpcUnit(RAFT_C.clone().add(V(-1.42, 2.25, -0.58)), [-1.32, -0.55], 0.72, 1.35, false);
    mountPrpcUnit(RAFT_C.clone().add(V(1.48, 2.15, -0.52)), [1.38, -0.48], 0.70, -1.15, false);
  }

  // -------------------------------------------------------------------------
  // 3. Towering Twisted PrP^Sc Amyloid Fibril (PDB 7LNA + 7TD6),
  //    Exposed PIRIBS Core, 4.8 Å Beta Rungs, Dry Steric Zippers,
  //    Active Template Dock & Cleaving Fragmentation Seed
  // -------------------------------------------------------------------------
  function buildPrpscFibrilAssembly(T) {
    const fibGrp = new THREE.Group();
    fibGrp.position.copy(FIB_C);
    cell.add(fibGrp);

    // 3A. Real Cryo-EM PDB 7LNA (3-rung blocks, lower/mid fibril) & PDB 7TD6 (5-rung blocks, upper fibril)
    const mat7lna = protMat('prpsc_fibril', false, {
      roughness: 0.34,
      clearcoat: 0.42,
      sheen: 0.40,
      sheenColor: '#ffc8d4',
      emissive: '#6e1024',
      emissiveIntensity: 0.24,
    });
    const mat7td6 = protMat('prpsc_fibril', false, {
      roughness: 0.33,
      clearcoat: 0.44,
      sheen: 0.42,
      sheenColor: '#ffd4c8',
      emissive: '#6e1628',
      emissiveIntensity: 0.24,
    });
    modeRefs.fibrilSurfMat = mat7lna;
    modeRefs.fibrilHumanMat = mat7td6;

    const I_7LNA = makeMolBatch(T.geo7lna, mat7lna, fibGrp);
    const I_7TD6 = makeMolBatch(T.geo7td6, mat7td6, fibGrp);

    // Lower intact 7LNA stacked cryo-EM blocks (y = -3.45 .. -1.65)
    for (let blk = 0; blk < 3; blk++) {
      const y = -3.28 + blk * (RUNG_DY * 3.05);
      const twist = (blk * 3 - 14) * TWIST_PER_RUNG;
      const q = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist);
      I_7LNA.add(V(0, y, 0), q, 1.0);
      SITES.prpsc_fibril.push(FIB_C.clone().add(V(0.4, y, 0.9)));
      placed += 6;
    }

    // Rear cryo-EM structural cradle behind the central cutaway window (clipped by CUT planes so front reveals PIRIBS!)
    const matRear7lna = protMat('prpsc_fibril', true, {
      roughness: 0.36,
      clearcoat: 0.36,
      emissive: '#580c1c',
      emissiveIntensity: 0.20,
    });
    const I_REAR = makeMolBatch(T.geo7lna, matRear7lna, fibGrp);
    for (let blk = 0; blk < 4; blk++) {
      const y = -1.20 + blk * (RUNG_DY * 3.0);
      const twist = ((blk + 3) * 3 - 14) * TWIST_PER_RUNG;
      const q = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist);
      I_REAR.add(V(0, y, 0), q, 1.0);
      placed += 4;
    }

    // Upper intact 7TD6 (5-rung blocks, PDB 7TD6 mouse/mammalian aRML PrP^Sc!) right up to template_dock
    for (let blk = 0; blk < 2; blk++) {
      const y = 1.98 + blk * (RUNG_DY * 4.75);
      const twist = (8 + blk * 5) * TWIST_PER_RUNG;
      const q = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist);
      I_7TD6.add(V(0, y, 0), q, 1.0);
      SITES.prpsc_fibril.push(FIB_C.clone().add(V(-0.5, y, 0.85)));
      placed += 10;
    }
    I_7LNA.done();
    I_REAR.done();
    I_7TD6.done();

    // Wet-gel refractive outer cryo-EM hydration density sheath hugging the twisted fibril ('prpsc_fibril' in shells!)
    const fibCurve = new THREE.CatmullRomCurve3([
      V(0, -3.72, 0),
      V(0.08, -1.85, 0.04),
      V(0.0, 0.0, 0.0),
      V(-0.07, 1.85, -0.04),
      V(0, 3.60, 0),
    ]);
    const fibShellGeo = sweepGeo(fibCurve, t => 2.18 + 0.14 * Math.sin(t * Math.PI * 5.0), 64, 36);
    const fibShellMat = cinemaShellMat('prpsc_fibril', '#c42e4d', '#ffc4d4', CLIP, {
      attenCol: '#991b3a',
      attenDist: 4.6,
      sssColor: '#ff7092',
      sssIntensity: 0.30,
      iridescence: 0.44,
      thickness: 0.56,
      roughness: 0.16,
      sheenColor: '#ffdce6',
      normalMap: bump(10, 18),
      normalScale: 0.22,
    });
    modeRefs.fibrilShell = fibShellMat;
    fibGrp.add(new THREE.Mesh(fibShellGeo, fibShellMat));

    // 3B. Exposed Central PIRIBS Core ('piribs_core'), Stacked 4.8 Å Cross-β Rungs ('beta_rungs'),
    //     Dry Steric-Zipper Teeth ('steric_zipper'), Vertical Disulfide Seam ('disulfide') & Fibril N-Glycans ('nglycans')
    const S_PIRIBS = sculpt('piribs_core', fibGrp, false, {
      emissive: '#8f1834',
      emissiveIntensity: 0.34,
      roughness: 0.26,
      clearcoat: 0.54,
    });
    modeRefs.piribsMat = REG.piribs_core.mats[REG.piribs_core.mats.length - 1];

    const S_RUNGS = sculpt('beta_rungs', fibGrp, false, {
      emissive: '#944808',
      emissiveIntensity: 0.36,
      roughness: 0.24,
      clearcoat: 0.58,
    });
    modeRefs.rungMat = REG.beta_rungs.mats[REG.beta_rungs.mats.length - 1];

    const S_ZIP = sculpt('steric_zipper', fibGrp, false, {
      emissive: '#8f5f06',
      emissiveIntensity: 0.44,
      roughness: 0.22,
      clearcoat: 0.64,
    });
    modeRefs.zipperMat = REG.steric_zipper.mats[REG.steric_zipper.mats.length - 1];

    const S_FIB_SS = sculpt('disulfide', fibGrp, false, {
      emissive: '#bfa400',
      emissiveIntensity: 0.72,
      roughness: 0.20,
      clearcoat: 0.70,
    });

    const S_FIB_GLY = sculpt('nglycans', fibGrp, false, {
      emissive: '#784e06',
      emissiveIntensity: 0.30,
      roughness: 0.28,
      clearcoat: 0.50,
    });

    // Subsample the exact 7LNA chain-0 double-arch contour (every 2nd Cα -> 65 clean points per rung!)
    const contour7lna: THREE.Vector3[] = [];
    for (let i = 0; i < T.lnaBB0.length; i += 2) {
      const p = T.lnaBB0[i];
      // Flatten Y slightly per single planar PIRIBS rung so the 4.8 Å horizontal stacking is razor-crisp!
      contour7lna.push(V(p.x, p.y * 0.22, p.z));
    }

    const cPiribsA = col('#ff4a70');
    const cPiribsB = col('#ff7864');
    const cRungA = col('#ff9838');
    const cRungB = col('#ffd166');
    const cHbond = col('#a8f4ff');
    const cZipA = col('#ffd454');
    const cZipB = col('#ff9e3d');

    // Measured close-contact steric-zipper pairs inside 7LNA chain 0 (in subsampled contour indices):
    //   raw (19,38) -> (9, 19); raw (5,47) -> (3, 23); raw (84,116) -> (42, 58)
    //   and conserved Cys179-Cys214 disulfide arch: raw (76,120) -> (38, 60)!
    const ZIP_PAIRS: ReadonlyArray<readonly [number, number]> = [
      [3, 23],
      [6, 21],
      [9, 19],
      [12, 17],
      [42, 58],
      [45, 55],
    ];

    const N_WINDOW_RUNGS = 14;
    const prevRungPts: THREE.Vector3[] = [];
    for (let r = 0; r < N_WINDOW_RUNGS; r++) {
      const yR = -1.48 + r * RUNG_DY;
      const twist = (r - 6) * TWIST_PER_RUNG;
      const cs = Math.cos(twist), sn = Math.sin(twist);
      const rotPt = (v: THREE.Vector3) => V(v.x * cs - v.z * sn, yR + v.y, v.x * sn + v.z * cs);

      const rungPts = contour7lna.map(rotPt);

      // Alternating crisp PIRIBS core ribbons vs glowing 4.8 Å cross-β rung accents!
      const isHighlightRung = r % 2 === 1;
      if (isHighlightRung) {
        S_RUNGS.tube(rungPts.slice(0, 34), 0.056, 0.056, cRungA, cRungB, 7, true);
        S_RUNGS.tube(rungPts.slice(33), 0.056, 0.056, cRungB, cRungA, 7, true);
      } else {
        S_PIRIBS.tube(rungPts.slice(0, 34), 0.062, 0.062, cPiribsA, cPiribsB, 7, true);
        S_PIRIBS.tube(rungPts.slice(33), 0.062, 0.062, cPiribsB, cPiribsA, 7, true);
      }
      placed += 4;

      // Vertical inter-rung backbone N–H···O=C hydrogen-bond ladder connecting rung r-1 to rung r!
      if (prevRungPts.length === rungPts.length) {
        for (let k = 2; k < rungPts.length; k += 5) {
          S_RUNGS.stick(prevRungPts[k], rungPts[k], 0.015, cHbond, cRungB);
        }
        // In-register vertical spine rails accentuating PIRIBS parallel residue alignment
        for (const regIdx of [5, 18, 32, 46, 59]) {
          S_PIRIBS.stick(prevRungPts[regIdx], rungPts[regIdx], 0.020, cPiribsA, cPiribsB);
        }
      }

      // Dry interdigitating steric-zipper side-chain teeth meshing across opposing β-sheets!
      ZIP_PAIRS.forEach(([ia, ib], zi) => {
        const pa = rungPts[ia];
        const pb = rungPts[ib];
        const mid = pa.clone().lerp(pb, 0.5);
        const dir = pb.clone().sub(pa).normalize();
        const toothA = pa.clone().lerp(mid, 0.72);
        const toothB = pb.clone().lerp(mid, 0.72);
        const altShift = (r % 2 === 0 ? 1 : -1) * 0.032;
        toothA.y += altShift;
        toothB.y -= altShift;
        S_ZIP.stick(pa, toothA, 0.026, cZipA, cZipB);
        S_ZIP.stick(pb, toothB, 0.026, cZipB, cZipA);
        S_ZIP.add(toothA, 0.115, cZipA);
        S_ZIP.add(toothB, 0.115, cZipB);
        placed++;
        if (r === 6 && zi < 3) {
          SITES.steric_zipper.push(mid.clone().add(FIB_C));
        }
      });

      // Conserved Cys179–Cys214 disulfide seam running vertically up the C-terminal arch!
      const pD1 = rungPts[38];
      const pD2 = rungPts[60];
      const sA = pD1.clone().lerp(pD2, 0.35);
      const sB = pD1.clone().lerp(pD2, 0.65);
      S_FIB_SS.stick(pD1, pD2, 0.032, col('#fff458'), col('#ffe028'));
      S_FIB_SS.add(sA, 0.125, col('#fff552'));
      S_FIB_SS.add(sB, 0.125, col('#fff552'));
      if (r === 7) SITES.disulfide.push(sA.clone().lerp(sB, 0.5).add(FIB_C));

      // Outward-projecting N-glycan chains flanking the exterior of the fibril on every 4th rung
      if (r % 4 === 1) {
        for (const gIdx of [30, 52]) {
          const anchor = rungPts[gIdx];
          const out = V(anchor.x, 0, anchor.z).normalize();
          const b1 = anchor.clone().addScaledVector(out, 0.34).add(V(0, 0.08, 0));
          const b2 = b1.clone().addScaledVector(out, 0.28).add(V(0, -0.06, 0.12));
          const b3 = b1.clone().addScaledVector(out, 0.26).add(V(0, 0.14, -0.10));
          S_FIB_GLY.stick(anchor, b1, 0.024, col('#ffc848'), col('#ffe06e'));
          S_FIB_GLY.stick(b1, b2, 0.020, col('#ffe06e'), col('#ff9848'));
          S_FIB_GLY.stick(b1, b3, 0.020, col('#ffe06e'), col('#ff9848'));
          S_FIB_GLY.add(b1, 0.12, col('#ffc848'));
          S_FIB_GLY.add(b2, 0.13, col('#ff9848'));
          S_FIB_GLY.add(b3, 0.13, col('#ff9848'));
          placed += 2;
        }
      }

      if (r === 4 || r === 8 || r === 11) {
        SITES.piribs_core.push(rungPts[16].clone().add(FIB_C));
        SITES.beta_rungs.push(rungPts[48].clone().add(FIB_C));
      }

      prevRungPts.length = 0;
      rungPts.forEach(p => prevRungPts.push(p));
    }

    S_PIRIBS.done();
    S_RUNGS.done();
    S_ZIP.done();
    S_FIB_SS.done();
    S_FIB_GLY.done();

    // 3C. Cross-β Mode 4.8 Å Structural Inspection Caliper & Register Guides (visible in cross_beta mode!)
    const S_GUIDE = sculpt('beta_rungs', crossBetaGuides, false, {
      emissive: '#ffaa28',
      emissiveIntensity: 0.78,
      roughness: 0.20,
    });
    const calX = FIB_C.x + 2.02;
    const calZ = FIB_C.z + 0.78;
    const calY0 = FIB_C.y - 0.82;
    const calY1 = calY0 + RUNG_DY * 4;
    S_GUIDE.stick(V(calX, calY0, calZ), V(calX, calY1, calZ), 0.024, col('#ffd466'), col('#ffd466'));
    for (let k = 0; k <= 4; k++) {
      const yk = calY0 + k * RUNG_DY;
      S_GUIDE.stick(V(calX - 0.24, yk, calZ), V(calX + 0.07, yk, calZ), 0.020, col('#ffe28a'), col('#ff9838'));
    }
    S_GUIDE.done();

    // Crisp 4.8 Å cryo-EM badge beside caliper cleanly below #flows (shown only in cross_beta mode)
    const calCv = document.createElement('canvas');
    calCv.width = 256;
    calCv.height = 96;
    const cg = calCv.getContext('2d');
    cg.clearRect(0, 0, 256, 96);
    cg.font = '700 32px system-ui, -apple-system, sans-serif';
    cg.textAlign = 'left';
    cg.fillStyle = '#ffd872';
    cg.fillText('4.8 Å / rung', 10, 40);
    cg.font = '600 22px system-ui, -apple-system, sans-serif';
    cg.fillStyle = '#b4f4ff';
    cg.fillText('Cross-β PIRIBS', 10, 74);
    const calTex = new THREE.CanvasTexture(calCv);
    calTex.colorSpace = THREE.SRGBColorSpace;
    const calLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.36, 0.51),
      reg(
        'beta_rungs',
        new THREE.MeshStandardMaterial({
          map: calTex,
          emissive: '#ffffff',
          emissiveMap: calTex,
          emissiveIntensity: 0.80,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    calLbl.position.set(calX + 0.78, (calY0 + calY1) * 0.5 - 0.05, calZ);
    crossBetaGuides.add(calLbl);

    // 3D. Active Fibril-Tip Conversion Template ('template_dock')
    const dockGrp = new THREE.Group();
    dockGrp.position.copy(DOCK_POS);
    cell.add(dockGrp);

    const dockMat = protMat('template_dock', false, {
      emissive: '#c82068',
      emissiveIntensity: 0.52,
      roughness: 0.24,
      clearcoat: 0.64,
      sheen: 0.50,
      sheenColor: '#ffcce2',
    });
    modeRefs.dockMat = dockMat;
    const dockTipMesh = shade(new THREE.Mesh(T.geo7lnaRung, dockMat), true, true);
    dockTipMesh.rotation.y = 14 * TWIST_PER_RUNG;
    dockGrp.add(dockTipMesh);

    // Translucent wet-gel glowing conversion energy aura around template_dock (adds to shells!)
    const dockAuraMat = cinemaShellMat('template_dock', '#e64288', '#ffc4e2', {}, {
      attenCol: '#c4226a',
      attenDist: 3.0,
      sssColor: '#ff7ec0',
      sssIntensity: 0.42,
      iridescence: 0.62,
      thickness: 0.40,
      roughness: 0.14,
      normalScale: 0.18,
    });
    const dockHalo = new THREE.Mesh(new THREE.TorusGeometry(1.92, 0.12, 16, 52), dockAuraMat);
    dockHalo.rotation.x = Math.PI / 2;
    dockHalo.position.y = 0.08;
    dockGrp.add(dockHalo);
    dockHaloMesh = dockHalo;

    // Unsatisfied upward-pointing amide H-bond receptor pins awaiting incoming PrP^C monomers
    const S_DOCK = sculpt('template_dock', dockGrp, false, {
      emissive: '#ff4294',
      emissiveIntensity: 0.72,
      roughness: 0.22,
    });
    modeRefs.dockRingMat = REG.template_dock.mats[REG.template_dock.mats.length - 1];
    for (let k = 0; k < contour7lna.length; k += 4) {
      const p = contour7lna[k].clone().applyAxisAngle(V(0, 1, 0), 14 * TWIST_PER_RUNG);
      const top = p.clone().add(V(0, 0.24, 0));
      S_DOCK.stick(p, top, 0.022, col('#ff72b8'), col('#b4f8ff'));
      S_DOCK.add(top, 0.11, col('#ffd0eb'));
      placed++;
    }
    S_DOCK.done();
    SITES.template_dock.push(DOCK_POS.clone(), DOCK_POS.clone().add(V(-0.6, 0.25, 0.5)));

    // 3E. Live Animated PrP^C -> PrP^Sc Templated Conversion Cascade (3 Phased Morphing Monomers!)
    conversionCurve = new THREE.CatmullRomCurve3([
      PRPC_HERO.clone().add(V(0.55, 0.95, 0.15)),
      V(-2.85, 2.85, 0.72),
      V(-0.95, 4.18, 0.48),
      DOCK_POS.clone().add(V(-0.12, 0.42, 0.06)),
      DOCK_POS.clone().add(V(0.0, 0.16, 0.0)),
    ]);

    // Subtle luminous trajectory guide ribbon along the conversion arc
    const B_ARC = balls('template_dock', conversionCascadeGroup, false);
    const arcPts = conversionCurve.getPoints(36);
    for (let i = 1; i < arcPts.length - 1; i += 2) {
      const f = i / (arcPts.length - 1);
      const c = col('#48e8ff').lerp(col('#ff5a98'), f);
      B_ARC.add(arcPts[i], 0.075 + 0.03 * Math.sin(f * Math.PI), c);
    }
    B_ARC.done();

    for (let k = 0; k < 3; k++) {
      const mRoot = new THREE.Group();
      conversionCascadeGroup.add(mRoot);

      const alphaMat = protMat('prpc', false, {
        emissive: '#1488a8',
        emissiveIntensity: 0.34,
        roughness: 0.28,
        clearcoat: 0.52,
        transparent: true,
        opacity: 1,
      });
      const alphaMesh = new THREE.Mesh(T.geoPrpc, alphaMat);
      mRoot.add(alphaMesh);

      const betaMat = protMat('template_dock', false, {
        emissive: '#c42466',
        emissiveIntensity: 0.46,
        roughness: 0.26,
        clearcoat: 0.56,
        transparent: true,
        opacity: 0,
      });
      const betaMesh = new THREE.Mesh(T.geo7lnaRung, betaMat);
      mRoot.add(betaMesh);

      morphCarriers.push({
        phase: k / 3,
        root: mRoot,
        alphaMesh,
        alphaMat,
        betaMesh,
        betaMat,
        lastU: k / 3,
      });
      placed += 4;
    }

    // 3F. Cleaving Fragmentation Infectious Seed ('fragmentation' — real 5-rung PDB 7TD6 block shearing away!)
    fragGroup = new THREE.Group();
    fragGroup.position.copy(FRAG_C);
    fragGroup.rotation.set(0.18, -0.35, -0.34);
    cell.add(fragGroup);

    const fragMat = protMat('fragmentation', false, {
      roughness: 0.30,
      clearcoat: 0.48,
      sheen: 0.44,
      sheenColor: '#ffd4bc',
      emissive: '#94280e',
      emissiveIntensity: 0.34,
    });
    const fragMesh = shade(new THREE.Mesh(T.geo7td6, fragMat), true, true);
    fragMesh.scale.setScalar(0.74);
    fragGroup.add(fragMesh);
    placed += 12;

    // Newly exposed active templating faces on BOTH ends of the cleaved infectious seed + fracture shear ring!
    const S_FRAG = sculpt('fragmentation', fragGroup, false, {
      emissive: '#d64818',
      emissiveIntensity: 0.56,
      roughness: 0.24,
    });
    S_FRAG.ring(V(0, -0.78, 0), V(0, 1, 0), 1.38, 0.055, col('#ff8a4c'), 36, 8);
    S_FRAG.ring(V(0, +0.78, 0), V(0, 1, 0), 1.34, 0.048, col('#ff5c8a'), 36, 8);
    // Glowing shear-fracture sparks between parent fibril & detached seed
    const shearCurve = new THREE.CatmullRomCurve3([
      V(-1.75, -0.55, -0.15),
      V(-1.15, -0.40, 0.10),
      V(-0.62, -0.25, 0.02),
    ]);
    for (let s = 0; s <= 6; s++) {
      const sp = shearCurve.getPointAt(s / 6);
      S_FRAG.add(sp, 0.12 - s * 0.008, s % 2 === 0 ? col('#ff9852') : col('#ffd67a'));
    }
    S_FRAG.done();
    SITES.fragmentation.push(FRAG_C.clone(), FRAG_C.clone().add(V(-0.6, 0.4, 0.3)));
  }

  // -------------------------------------------------------------------------
  // 4. Crisp Circular Magnified Atomic Inset ('amide_atoms')
  //    Left: 4.8 Å Inter-Rung Backbone N–H···O=C Hydrogen-Bond Ladder
  //    Right: Conserved Cys179–Cys214 Disulfide Bridge (–CH₂–S–S–CH₂–)
  //    Elements: C, H, N, O, S ONLY — ZERO Phosphorus (0 P), ZERO DNA, ZERO RNA!
  //    Every label placed generously inside R_RING with ZERO edge clipping!
  // -------------------------------------------------------------------------
  function buildAtomicAmideInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    grp.rotation.set(0.06, -0.14, 0);
    cell.add(grp);

    const R_RING = 1.66;

    const ringMat = reg(
      'amide_atoms',
      phys(
        {
          color: '#7ce8ff',
          emissive: '#125c78',
          emissiveIntensity: 0.42,
          roughness: 0.20,
          metalness: 0.24,
          clearcoat: 0.72,
        },
        {}
      )
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.038, 14, 64), ringMat));

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 56),
      reg(
        'amide_atoms',
        phys(
          {
            color: '#0a1326',
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
    glassDisc.position.z = -0.14;
    grp.add(glassDisc);

    const S_AT = sculpt('amide_atoms', grp, false, { roughness: 0.22, clearcoat: 0.62 });
    // Pure protein CPK palette (ZERO Phosphorus!)
    const cC = col('#94a2b8'); // Carbon — slate silver
    const cH = col('#f0f6ff'); // Hydrogen — pearl white
    const cN = col('#4c96ff'); // Nitrogen — cobalt blue
    const cO = col('#ff5264'); // Oxygen — crimson red
    const cS = col('#ffe842'); // Sulfur — radiant yellow
    const cHb = col('#7cf8ff'); // Hydrogen bond dash — electric cyan
    const cBond = col('#cbd8eb');

    // Crisp vertical center divider strictly inside ring
    S_AT.stick(V(0.06, -0.84, -0.05), V(0.06, 0.72, -0.05), 0.012, col('#6a82a4'), col('#6a82a4'));

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.025) => S_AT.stick(a, b, r, c1, c2);
    const hbondDashed = (a: THREE.Vector3, b: THREE.Vector3) => {
      const segs = 4;
      for (let i = 0; i < segs; i++) {
        const t0 = i / segs + 0.05;
        const t1 = (i + 0.56) / segs;
        S_AT.stick(a.clone().lerp(b, t0), a.clone().lerp(b, t1), 0.019, cHb, cHb);
      }
    };

    // LEFT HALF: Two Stacked Cross-β Polypeptide Strands (Rung n+1 top, Rung n bottom = 4.8 Å!)
    // Showing repeating N–Cα–C(=O)–N–Cα–C(=O) backbone locked by 3 parallel vertical N–H···O=C H-bonds!
    const xs = [-1.18, -0.94, -0.70, -0.46, -0.22];
    const yTop = 0.34;
    const yBot = -0.34;
    const drawStrand = (yBase: number, isTop: boolean) => {
      const nodes: Array<{ p: THREE.Vector3; el: 'N' | 'Ca' | 'C' }> = [
        { p: V(xs[0], yBase + (isTop ? 0.05 : -0.05), 0.06), el: 'N' },
        { p: V(xs[1], yBase + (isTop ? 0.14 : -0.14), 0.08), el: 'Ca' },
        { p: V(xs[2], yBase + (isTop ? 0.03 : -0.03), 0.06), el: 'C' },
        { p: V(xs[3], yBase + (isTop ? 0.12 : -0.12), 0.08), el: 'N' },
        { p: V(xs[4], yBase + (isTop ? 0.02 : -0.02), 0.06), el: 'C' },
      ];
      for (let i = 0; i < nodes.length; i++) {
        const cur = nodes[i];
        const cc = cur.el === 'N' ? cN : cC;
        atom(cur.p, cur.el === 'N' ? 0.074 : 0.068, cc);
        if (i > 0) {
          const prev = nodes[i - 1];
          const cp = prev.el === 'N' ? cN : cC;
          bond(prev.p, cur.p, cp, cc, 0.026);
        }
      }
      return nodes;
    };

    const topS = drawStrand(yTop, true);
    const botS = drawStrand(yBot, false);

    // Three vertical inter-rung N–H···O=C hydrogen-bond bridges locking Rung n+1 to Rung n!
    // Column 0 (x=-1.18): Top N-H pointing down to Bottom O=C
    const h0 = topS[0].p.clone().add(V(0, -0.18, 0.02));
    const o0 = botS[0].p.clone().add(V(0, +0.20, 0.02));
    atom(h0, 0.046, cH);
    atom(o0, 0.072, cO);
    bond(topS[0].p, h0, cN, cH, 0.020);
    bond(botS[0].p, o0, cC, cO, 0.024);
    hbondDashed(h0, o0);

    // Column 2 (x=-0.70): Top C=O pointing down to Bottom H-N
    const o2 = topS[2].p.clone().add(V(0, -0.20, 0.02));
    const h2 = botS[2].p.clone().add(V(0, +0.18, 0.02));
    atom(o2, 0.072, cO);
    atom(h2, 0.046, cH);
    bond(topS[2].p, o2, cC, cO, 0.024);
    bond(botS[2].p, h2, cN, cH, 0.020);
    hbondDashed(o2, h2);

    // Column 3 (x=-0.46): Top N-H pointing down to Bottom O=C
    const h3 = topS[3].p.clone().add(V(0, -0.20, 0.02));
    const o3 = botS[3].p.clone().add(V(0, +0.22, 0.02));
    atom(h3, 0.046, cH);
    atom(o3, 0.072, cO);
    bond(topS[3].p, h3, cN, cH, 0.020);
    bond(botS[3].p, o3, cC, cO, 0.024);
    hbondDashed(h3, o3);

    // Side-chain β-carbon stubs projecting outward from Cα
    const rTop = topS[1].p.clone().add(V(0, 0.21, 0.03));
    const rBot = botS[1].p.clone().add(V(0, -0.21, 0.03));
    atom(rTop, 0.056, cC);
    atom(rBot, 0.056, cC);
    bond(topS[1].p, rTop, cC, cC, 0.022);
    bond(botS[1].p, rBot, cC, cC, 0.022);

    // RIGHT HALF: Conserved Cys179–Cys214 Covalent Disulfide Bridge (–CH₂–S–S–CH₂–)
    const pS1 = V(0.56, 0.02, 0.11);
    const pS2 = V(0.92, 0.02, 0.11);
    const pCb1 = V(0.38, 0.30, 0.08);
    const pCa1 = V(0.32, 0.56, 0.06);
    const pN1 = V(0.56, 0.64, 0.06);
    const pCb2 = V(1.10, -0.26, 0.08);
    const pCa2 = V(1.06, -0.54, 0.06);
    const pO2 = V(0.80, -0.62, 0.08);

    atom(pS1, 0.118, cS); // Prominent golden Sulfur (Cys179)!
    atom(pS2, 0.118, cS); // Prominent golden Sulfur (Cys214)!
    atom(pCb1, 0.070, cC);
    atom(pCa1, 0.070, cC);
    atom(pN1, 0.072, cN);
    atom(pCb2, 0.070, cC);
    atom(pCa2, 0.070, cC);
    atom(pO2, 0.072, cO);

    // Methylene H atoms on Cys179 / Cys214 Cβ
    const hCb1 = V(0.24, 0.24, 0.14);
    const hCb2 = V(1.24, -0.20, 0.14);
    atom(hCb1, 0.044, cH);
    atom(hCb2, 0.044, cH);

    // Radiant thick covalent S–S disulfide bond!
    bond(pS1, pS2, cS, cS, 0.042);
    bond(pCb1, pS1, cC, cS, 0.028);
    bond(pCa1, pCb1, cC, cC, 0.026);
    bond(pCa1, pN1, cC, cN, 0.024);
    bond(pCb1, hCb1, cC, cH, 0.018);
    bond(pS2, pCb2, cS, cC, 0.028);
    bond(pCb2, pCa2, cC, cC, 0.026);
    bond(pCa2, pO2, cC, cO, 0.024);
    bond(pCb2, hCb2, cC, cH, 0.018);

    S_AT.done();

    // Top caption plaque centered GENEROUSLY inside ring (y=+0.98, width 1.88x0.36 -> max corner r=1.48 << 1.64!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 104;
    const tg = topCv.getContext('2d');
    tg.clearRect(0, 0, 512, 104);
    tg.font = '700 24px system-ui, -apple-system, sans-serif';
    tg.textAlign = 'center';
    tg.fillStyle = '#7ceeff';
    tg.fillText('4.8 Å H-BONDS', 142, 38);
    tg.font = '600 18px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#d4f4ff';
    tg.fillText('N–H···O=C Rungs', 142, 70);
    tg.font = '700 24px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffe852';
    tg.fillText('Cys179–Cys214', 370, 38);
    tg.font = '600 18px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffdf9e';
    tg.fillText('S–S · 0 DNA/RNA', 370, 70);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.88, 0.38),
      reg(
        'amide_atoms',
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

    // Bottom CPK atomic legend strip cleanly centered inside lower chord (y=-1.12, width 1.56 -> corner r=1.45 << 1.64!)
    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 72;
    const bg = botCv.getContext('2d');
    bg.clearRect(0, 0, 512, 72);
    const atomsLegend = [
      ['C', '#94a2b8'],
      ['H', '#f0f6ff'],
      ['N', '#4c96ff'],
      ['O', '#ff5264'],
      ['S', '#ffe842'],
    ];
    bg.font = '700 24px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 56 + idx * 72;
      bg.beginPath();
      bg.arc(bx, 36, 11, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#eef4ff';
      bg.fillText(sym, bx + 16, 37);
    });
    bg.font = '700 20px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#ff98b0';
    bg.fillText('0 P', 426, 37);
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.56, 0.22),
      reg(
        'amide_atoms',
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
    botLbl.position.set(0, -1.12, 0.14);
    grp.add(botLbl);

    SITES.amide_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // Live Opaque-Discard 4x4 MOL Flows (Visible Through Wet Gel!)
  // Exact 6 species: prpc_monomer, hbond_pulse, seed_frag, protease_deflect, glycan_shield, water_expel
  // -------------------------------------------------------------------------
  const MOL = {
    prpc_monomer: ['Soluble PrPᶜ monomers', '#56e2ff', 0, 0.28],
    hbond_pulse: ['4.8 Å Amide H-bond zips', '#ff7eb8', 1, 0.27],
    seed_frag: ['Infectious PrPˢᶜ seeds', '#ff7446', 2, 0.28],
    protease_deflect: ['Proteinase K (deflected)', '#c488ff', 3, 0.27],
    glycan_shield: ['N-Glycan sialic chains', '#ffd454', 4, 0.26],
    water_expel: ['Expelled steric H₂O', '#7ce0ff', 5, 0.25],
  };

  function glyph(g, k, x, y, s, fill = '#ffffff') {
    const P = (u, v) => [x + u * s, y + v * s];
    const ink = '#0e131c';
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
      case 0: // prpc_monomer: compact 3-helix globular bundle
        drawBalls([[0.36, 0.38, 0.17], [0.64, 0.38, 0.17], [0.50, 0.65, 0.18]]);
        break;
      case 1: // hbond_pulse: paired cross-β rungs joined by dashed amide H-bond
        drawPoly([[0.18, 0.30], [0.82, 0.30]], false, 0.12);
        drawPoly([[0.18, 0.70], [0.82, 0.70]], false, 0.12);
        drawBalls([[0.36, 0.50, 0.08], [0.64, 0.50, 0.08]]);
        break;
      case 2: // seed_frag: 3 stacked slanted cross-β amyloid seed bars
        drawPoly([[0.22, 0.26], [0.76, 0.22]], false, 0.11);
        drawPoly([[0.24, 0.50], [0.78, 0.46]], false, 0.11);
        drawPoly([[0.26, 0.74], [0.80, 0.70]], false, 0.11);
        break;
      case 3: // protease_deflect: notched Pac-Man-like enzyme lobe bouncing off fibril
        drawPoly([[0.78, 0.34], [0.50, 0.50], [0.78, 0.66], [0.56, 0.80], [0.24, 0.66], [0.24, 0.34], [0.56, 0.20]], true, 0.09);
        drawBalls([[0.46, 0.50, 0.20]]);
        break;
      case 4: // glycan_shield: biantennary Y-shaped sugar tree
        drawPoly([[0.50, 0.82], [0.50, 0.52], [0.26, 0.26]], false, 0.09);
        drawPoly([[0.50, 0.52], [0.74, 0.26]], false, 0.09);
        drawBalls([[0.26, 0.24, 0.12], [0.74, 0.24, 0.12], [0.50, 0.76, 0.11]]);
        break;
      case 5: // water_expel: bent H2O oxygen + two hydrogens
        drawBalls([[0.50, 0.42, 0.19], [0.28, 0.68, 0.11], [0.72, 0.68, 0.11]]);
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
        gl_FragColor = vec4(vCol * t.r * 1.25 * vFade, 1.);
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

  function splash(at: THREE.Vector3, hex: string, s = 0.38) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.62, s, c: col(hex) });
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
    // 1. Soluble PrP^C monomers lifting off neuronal lipid raft and docking onto template_dock
    {
      rate: 2.3,
      acc: 0.5,
      go: () => {
        const mult = mode === 'conversion' ? 2 : 1;
        for (let k = 0; k < mult; k++) {
          const src = pickSite('prpc', PRPC_HERO).add(V(rr(-0.7, 0.7), rr(0.2, 0.8), rr(-0.4, 0.4)));
          const mid = V(rr(-2.6, -1.2), rr(2.4, 3.8), rr(0.1, 0.9));
          const dst = DOCK_POS.clone().add(V(rr(-0.5, 0.5), 0.18, rr(-0.4, 0.4)));
          emitFlow('prpc_monomer', [src, mid, dst], ['prpc', 'lipid_raft', 'gpi_anchor', 'helices_h123', 'template_dock'], 2.8, () =>
            splash(dst, '#ff64a8', 0.42)
          );
        }
      },
    },
    // 2. 4.8 Å Amide H-bond pulses racing vertically along the PIRIBS cross-β rung ladder
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const mult = mode === 'cross_beta' ? 2 : 1;
        for (let k = 0; k < mult; k++) {
          const ang = rr(-1.1, 1.1);
          const rad = rr(0.75, 1.55);
          const top = FIB_C.clone().add(V(Math.sin(ang) * rad, 3.2, Math.cos(ang) * rad * 0.7));
          const mid = FIB_C.clone().add(V(Math.sin(ang + 0.3) * rad, 0.1, Math.cos(ang + 0.3) * rad * 0.7));
          const bot = FIB_C.clone().add(V(Math.sin(ang + 0.6) * rad, -2.9, Math.cos(ang + 0.6) * rad * 0.7));
          emitFlow('hbond_pulse', [top, mid, bot], ['beta_rungs', 'piribs_core', 'prpsc_fibril', 'amide_atoms'], 2.5, () =>
            splash(mid, '#ff7eb8', 0.32)
          );
        }
      },
    },
    // 3. Infectious PrP^Sc fragmentation seeds shearing off and dispersing to nucleate new fibrils
    {
      rate: 1.9,
      acc: 0.4,
      go: () => {
        const src = FIB_C.clone().add(V(1.1, rr(1.2, 2.4), 0.35));
        const mid = FRAG_C.clone().add(V(rr(-0.4, 0.4), rr(-0.3, 0.3), rr(-0.2, 0.3)));
        const dst = FRAG_C.clone().add(V(rr(0.9, 1.7), rr(0.7, 1.5), rr(-0.5, 0.7)));
        emitFlow('seed_frag', [src, mid, dst], ['fragmentation', 'prpsc_fibril', 'template_dock'], 2.7, () =>
          splash(mid, '#ff7446', 0.38)
        );
      },
    },
    // 4. Proteinase K host enzymes approaching the tight cross-β steric-zipper core and deflecting harmlessly!
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const hit = pickSite('prpsc_fibril', FIB_C.clone().add(V(1.6, 0.2, 1.1))).add(V(0.45, 0, 0.45));
        const src = hit.clone().add(V(rr(1.2, 2.2), rr(-0.8, 0.9), rr(0.9, 1.8)));
        const bounce = hit.clone().add(V(rr(1.3, 2.3), rr(0.7, 1.5), rr(0.8, 1.7)));
        emitFlow('protease_deflect', [src, hit, bounce], ['prpsc_fibril', 'steric_zipper', 'piribs_core'], 2.4, () =>
          splash(hit, '#c488ff', 0.36)
        );
      },
    },
    // 5. N-Glycan sialic-acid steric shield sweeping around Asn181/Asn197 trees on PrP^C & PrP^Sc
    {
      rate: 1.8,
      acc: 0.3,
      go: () => {
        const ctr = rand() < 0.55 ? pickSite('nglycans', PRPC_HERO.clone().add(V(-0.6, 0.7, 0.4))) : FIB_C.clone().add(V(-1.7, rr(-1.4, 1.6), 0.7));
        const a = rr(0, Math.PI * 2);
        const p0 = ctr.clone().add(V(Math.cos(a) * 0.75, -0.35, Math.sin(a) * 0.65));
        const p1 = ctr.clone().add(V(Math.cos(a + 1.4) * 0.85, 0.15, Math.sin(a + 1.4) * 0.75));
        const p2 = ctr.clone().add(V(Math.cos(a + 2.8) * 0.75, 0.45, Math.sin(a + 2.8) * 0.65));
        emitFlow('glycan_shield', [p0, p1, p2], ['nglycans', 'prpc', 'prpsc_fibril'], 2.6);
      },
    },
    // 6. Hydration H2O molecules expelled outward from the dry interdigitating steric-zipper core!
    {
      rate: 2.2,
      acc: 0.5,
      go: () => {
        const src = pickSite('steric_zipper', FIB_C.clone().add(V(0.2, 0.0, 0.4)));
        const outDir = V(rr(-1.2, 1.4), rr(-0.7, 0.9), rr(0.8, 1.6)).normalize();
        const mid = src.clone().addScaledVector(outDir, 1.15);
        const dst = src.clone().addScaledVector(outDir, 2.35);
        emitFlow('water_expel', [src, mid, dst], ['steric_zipper', 'piribs_core', 'beta_rungs', 'disulfide'], 2.3);
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
      q.x += a * Math.sin(w * 5.1 + p.ph);
      q.y += a * Math.cos(w * 4.3 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.7 + p.ph * 1.9);
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

  // Update live templated PrP^C -> PrP^Sc morphing cascade & gentle fragmentation seed drift
  function updateConversionAnimation(dt: number) {
    animClock += dt * (mode === 'conversion' ? 1.0 : 0.28);
    if (conversionCurve) {
      const rate = 0.14;
      morphCarriers.forEach((mc, idx) => {
        const u = (animClock * rate + mc.phase) % 1;
        if (u < mc.lastU && mode === 'conversion' && flowsOn) {
          splash(DOCK_POS.clone().add(V(0, 0.2, 0)), '#ff64a8', 0.54);
        }
        mc.lastU = u;

        const pos = conversionCurve.getPointAt(u);
        mc.root.position.copy(pos);

        // Smooth conformational refolding blend: 0..0.46 native cyan α-helical PrP^C -> 0.46..0.84 morph -> 0.84..1.0 locked flat cross-β rung!
        const morph = Math.max(0, Math.min(1, (u - 0.44) / 0.42));
        const smoothM = morph * morph * (3 - 2 * morph);
        const fadeEdge = Math.min(1, u / 0.10, (1 - u) / 0.08);
        const modeVis = mode === 'conversion' ? 1.0 : 0.26;

        // Native α-helical 1QLX shrinks & flattens vertically as it unwinds
        const aScale = (0.64 - 0.34 * smoothM) * (0.85 + 0.15 * fadeEdge);
        mc.alphaMesh.scale.set(aScale * (1 + 0.35 * smoothM), aScale * (1 - 0.55 * smoothM), aScale * (1 + 0.25 * smoothM));
        mc.alphaMesh.rotation.set(animClock * 0.5 + idx * 1.4, animClock * 0.8 + idx, 0.3 * Math.sin(animClock + idx));
        mc.alphaMat.opacity = (1 - smoothM) * fadeEdge * modeVis;
        mc.alphaMesh.visible = mc.alphaMat.opacity > 0.03;

        // Emerging cross-β PIRIBS rung flattens into alignment with the fibril axis!
        const bScale = (0.45 + 0.55 * smoothM) * (0.88 + 0.12 * fadeEdge);
        mc.betaMesh.scale.set(bScale, bScale * (1.25 - 0.25 * smoothM), bScale);
        const tilt = (1 - smoothM) * 0.55;
        mc.betaMesh.rotation.set(tilt, 14 * TWIST_PER_RUNG + (1 - smoothM) * 0.65, -tilt * 0.6);
        mc.betaMat.opacity = smoothM * fadeEdge * modeVis;
        mc.betaMesh.visible = mc.betaMat.opacity > 0.03;
      });
    }

    // Gentle living float on Hero PrP^C & pulsing active dock halo + seed fragmentation recoil
    if (prpcHeroGroup) {
      prpcHeroGroup.position.y = PRPC_HERO.y + 0.06 * Math.sin(animClock * 1.3);
    }
    if (dockHaloMesh) {
      const pulse = 1 + 0.055 * Math.sin(animClock * 3.1);
      dockHaloMesh.scale.set(pulse, pulse, 1);
    }
    if (fragGroup) {
      const drift = 0.14 * Math.sin(animClock * 1.15);
      fragGroup.position.set(FRAG_C.x + drift * 0.8, FRAG_C.y + drift * 0.45, FRAG_C.z + drift * 0.25);
      fragGroup.rotation.y = -0.35 + 0.08 * Math.sin(animClock * 0.9);
    }
  }

  // -------------------------------------------------------------------------
  // Live 2-Mode Toggle (#modeBtn): 'conversion' | 'cross_beta'
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;

    const isCrossBeta = mode === 'cross_beta';
    crossBetaGuides.visible = isCrossBeta;

    // High-contrast cryo-EM PIRIBS cross-β structural inspection vs vibrant live conversion cascade!
    if (modeRefs.piribsMat) {
      modeRefs.piribsMat.emissiveIntensity = isCrossBeta ? 0.56 : 0.34;
    }
    if (modeRefs.rungMat) {
      modeRefs.rungMat.emissiveIntensity = isCrossBeta ? 0.62 : 0.36;
    }
    if (modeRefs.zipperMat) {
      modeRefs.zipperMat.emissiveIntensity = isCrossBeta ? 0.68 : 0.44;
    }
    if (modeRefs.dockMat) {
      modeRefs.dockMat.emissiveIntensity = isCrossBeta ? 0.30 : 0.54;
    }
    if (modeRefs.fibrilSurfMat) {
      modeRefs.fibrilSurfMat.transparent = isCrossBeta;
      modeRefs.fibrilSurfMat.opacity = isCrossBeta ? 0.44 : 1.0;
      modeRefs.fibrilSurfMat.depthWrite = !isCrossBeta;
      modeRefs.fibrilSurfMat.needsUpdate = true;
    }
    if (modeRefs.fibrilHumanMat) {
      modeRefs.fibrilHumanMat.transparent = isCrossBeta;
      modeRefs.fibrilHumanMat.opacity = isCrossBeta ? 0.48 : 1.0;
      modeRefs.fibrilHumanMat.depthWrite = !isCrossBeta;
      modeRefs.fibrilHumanMat.needsUpdate = true;
    }

    applyLook();
    lamp.color.set(isCrossBeta ? '#ffd28c' : '#ff96a8');
    fibrilLamp.intensity = isCrossBeta ? 19.5 : 11.0;
    raftLamp.intensity = isCrossBeta ? 9.5 : 13.5;

    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.toggle('cross_beta', isCrossBeta);
    }
    if (subEl) {
      subEl.textContent = isCrossBeta
        ? '4.8 Å Cross-β PIRIBS cryo-EM inspection · parallel in-register β-rungs, dry steric zippers & conserved Cys179–Cys214 disulfide arch'
        : 'Cryo-EM dark-field molecular stage · Zero DNA & zero RNA · NMR PrPᶜ (1QLX) refolding into 4.8 Å PIRIBS cross-β rungs (7LNA · 7TD6)';
    }
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => {
      setMode();
      const targetView = mode === 'cross_beta' ? 'piribs' : 'conversion';
      const vi = VIEWS.findIndex(x => x[0] === targetView);
      if (vi >= 0) {
        view = vi;
        curView = targetView;
        const [, p, t] = VIEWS[vi];
        camera.position.copy(cell.localToWorld(p.clone()));
        controls.target.copy(cell.localToWorld(t.clone()));
        const vb = document.getElementById('view');
        if (vb) vb.textContent = `View: ${curView}`;
      }
    };
  }

  // -------------------------------------------------------------------------
  // Resize, HUD Legend (Protein-Only Key: C H N O S · 0 DNA / 0 RNA), Flows & Highlights
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
  const CPK = [
    ['C', '#94a2b8'],
    ['H', '#f0f6ff'],
    ['N', '#4c96ff'],
    ['O', '#ff5264'],
    ['S', '#ffe842'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}<span class="zero-tag">0 DNA · 0 RNA</span></div>` +
    `<div class="row"><span class="bar" style="background:#3cf0d0"></span>α-Helix PrPᶜ <span class="bar" style="background:#ff5a78;margin-left:6px"></span>4.8 Å Cross-β PrPˢᶜ</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Prion Amyloid Fibril (PrPᶜ → PrPˢᶜ): infectious misfolded protein with zero DNA and zero RNA. Watch soluble α-helical PrPᶜ (1QLX) detach from the neuronal lipid raft, dock onto the cross-β PIRIBS fibril tip (7LNA · 7TD6), and lock into 4.8 Å amyloid rungs.';
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
        if (m.userData.e0) m.emissive.copy(m.userData.e0);
        if (m.userData.i0 !== undefined) m.emissiveIntensity = m.userData.i0;
      });
      REG[hi].imp.forEach(m => { m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) {
      REG[hi].mats.forEach(m => {
        m.userData.e0 ??= m.emissive.clone();
        m.userData.i0 ??= m.emissiveIntensity;
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
    if (name === 'piribs') setMode('cross_beta', true);
    else if (name === 'overview' || name === 'conversion') setMode('conversion', true);
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
    cutExtras.visible = cutOn;
    e.target.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow').onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = fxPts.visible = flowsOn;
    e.target.textContent = `Conversion: ${flowsOn ? 'on' : 'off'}`;
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
    a.download = `prion-${mode}-realistic.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.15, -0.25, 0.0])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      if (m.view === 'piribs') setMode('cross_beta', true);
      else if (m.view === 'conversion') setMode('conversion', true);
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.15, -0.25, 0.0);
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

  // Exact tag coordinates for all 14 parts across all 5 views
  const POINTS = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      lipid_raft: SITES.lipid_raft[0] ?? RAFT_C.clone().add(V(0, 0.3, 0.4)),
      gpi_anchor: SITES.gpi_anchor[0] ?? V(-4.95, -0.75, 0.42),
      prpc: SITES.prpc[0] ?? PRPC_HERO.clone(),
      helices_h123: SITES.helices_h123[1] ?? PRPC_HERO.clone().add(V(-0.35, 0.35, 0.42)),
      beta_ribbon: SITES.beta_ribbon[0] ?? PRPC_HERO.clone().add(V(0.42, 0.15, 0.55)),
      nglycans: SITES.nglycans[0] ?? PRPC_HERO.clone().add(V(-0.85, 0.85, 0.35)),
      disulfide: SITES.disulfide[0] ?? PRPC_HERO.clone().add(V(0.22, -0.10, 0.22)),
      prpsc_fibril: SITES.prpsc_fibril[1] ?? FIB_C.clone().add(V(-0.8, -1.8, 0.9)),
      piribs_core: SITES.piribs_core[1] ?? FIB_C.clone().add(V(-0.2, 0.2, 0.85)),
      beta_rungs: SITES.beta_rungs[1] ?? FIB_C.clone().add(V(0.6, 0.5, 0.85)),
      steric_zipper: SITES.steric_zipper[0] ?? FIB_C.clone().add(V(0.35, -0.2, 0.65)),
      template_dock: SITES.template_dock[0] ?? DOCK_POS.clone(),
      fragmentation: SITES.fragmentation[0] ?? FRAG_C.clone(),
      amide_atoms: ATOM_C.clone(),
    };
    let P = { ...base };
    if (vName === 'prpc_raft') {
      P = {
        ...base,
        disulfide: SITES.disulfide[0] ?? PRPC_HERO.clone().add(V(0.2, -0.1, 0.2)),
      };
    } else if (vName === 'conversion') {
      P = {
        ...base,
        template_dock: DOCK_POS.clone(),
        fragmentation: FRAG_C.clone(),
        prpc: PRPC_HERO.clone().add(V(1.6, 2.2, 0.3)),
      };
    } else if (vName === 'piribs') {
      P = {
        ...base,
        disulfide: SITES.disulfide[1] ?? FIB_C.clone().add(V(-0.1, 0.15, 0.85)),
        piribs_core: SITES.piribs_core[1] ?? FIB_C.clone().add(V(-0.2, 0.2, 0.85)),
        beta_rungs: SITES.beta_rungs[1] ?? FIB_C.clone().add(V(0.6, 0.5, 0.85)),
        steric_zipper: SITES.steric_zipper[0] ?? FIB_C.clone().add(V(0.35, -0.2, 0.65)),
      };
    } else if (vName === 'atoms') {
      P = {
        ...base,
        amide_atoms: ATOM_C.clone(),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      lipid_raft: 2.9, gpi_anchor: 1.9, prpc: 2.4, helices_h123: 2.1, beta_ribbon: 1.9,
      nglycans: 2.1, disulfide: 1.9, prpsc_fibril: 3.8, piribs_core: 2.6, beta_rungs: 2.4,
      steric_zipper: 2.2, template_dock: 2.6, fragmentation: 2.5, amide_atoms: 2.1,
    };
    const DIRS = {
      lipid_raft: V(0.18, 0.30, 0.94).normalize(),
      prpc: V(0.14, 0.16, 0.97).normalize(),
      piribs_core: V(0.24, 0.08, 0.96).normalize(),
      beta_rungs: V(0.26, 0.10, 0.96).normalize(),
      steric_zipper: V(0.24, 0.06, 0.97).normalize(),
      template_dock: V(-0.14, 0.24, 0.96).normalize(),
      fragmentation: V(0.18, 0.16, 0.97).normalize(),
      amide_atoms: V(-0.14, 0.07, 0.98).normalize(),
    };
    const dir = DIRS[k] ?? V(0.16, 0.16, 0.97).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.4, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    lipid_raft: ['gpi_anchor', 'prpc'],
    prpc: ['helices_h123', 'beta_ribbon', 'nglycans', 'disulfide', 'gpi_anchor'],
    helices_h123: ['prpc', 'beta_ribbon', 'disulfide'],
    beta_ribbon: ['prpc', 'helices_h123'],
    prpsc_fibril: ['piribs_core', 'beta_rungs', 'steric_zipper', 'template_dock', 'disulfide'],
    piribs_core: ['beta_rungs', 'steric_zipper', 'disulfide'],
    beta_rungs: ['piribs_core', 'steric_zipper'],
    steric_zipper: ['piribs_core', 'beta_rungs'],
    template_dock: ['prpsc_fibril', 'prpc', 'piribs_core'],
    fragmentation: ['prpsc_fibril', 'template_dock'],
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
      cutExtras.visible = cutOn;
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
  // Main Animation Loop (Gentle Sway + Live Conversion Morph + Opaque-Discard Flows)
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3.5) / 20));
      cell.rotation.y = 0.075 * Math.sin(sway * 0.12);
      updateConversionAnimation(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
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
        m.emissive.copy(c);
        m.emissiveIntensity = 0.28 + 0.78 * k;
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
    const raftInfo = buildNeuronalLipidRaft();
    buildNativePrpcAndRaftComplex(T, raftInfo);
    buildPrpscFibrilAssembly(T);
    buildAtomicAmideInset();
    updateConversionAnimation(0.01);
    // Warm up live streams so all 6 species are active on frame 1
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('conversion', true);
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
        if (name === 'piribs') setMode('cross_beta', true);
        else if (name === 'overview' || name === 'conversion') setMode('conversion', true);
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
    step: (dt = 0.05, n = 1) => {
      for (let i = 0; i < n; i++) {
        updateConversionAnimation(dt);
        updateFlows(dt);
      }
    },
    shot: () => {
      cell.updateMatrixWorld();
      updateAllCuts();
      composer.render();
      return renderer.domElement.toDataURL('image/png');
    },
  };
});
