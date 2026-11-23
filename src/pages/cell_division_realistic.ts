// @ts-nocheck
import * as THREE from 'three';
import { PDB_DIVISION } from '../molecules/pdb_division.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  BASE,
  BACKBONE,
  col,
} from '../index.js';

runBiologyApp(20261123, ({ random, geometry, dna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Coordinate Layout (Framed cleanly between #legend, #flows & #phaseBar!)
  //   C0     = (0.00, +0.90, 0.00)  Hero Dividing Cell Centerpiece
  //   SAT_UL = (-6.35, +4.40, 0.35) Upper-Left Companion (E. coli in Mit/Mei; Eukaryote in Fission)
  //   INS0   = (+6.40, -3.15, 1.85) Lower-Right Permanent Molecular Division & Crossing-Over Inset
  // -------------------------------------------------------------------------
  const NM = 0.01;
  const C0 = V(0.0, 0.95, 0.0);
  const SAT_UL = V(-7.05, 4.45, 0.35);
  const INS0 = V(7.15, -2.95, 1.85);

  // Exact 6 required VIEWS names
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.35, 2.20, 36.8), V(0.0, 0.30, 0.0)],
    ['fission', V(0.65, 2.35, 19.6), V(0.0, 0.55, 0.0)],
    ['mitosis_spindle', V(1.35, 1.85, 14.8), V(0.0, 0.95, 0.0)],
    ['checkpoint', V(1.65, 1.75, 8.60), V(0.0, 1.35, 0.10)],
    ['meiosis_crossover', V(1.55, 1.55, 11.4), V(0.0, 0.95, 0.10)],
    ['molecular_inset', V(6.75, -2.85, 12.6), V(7.15, -3.15, 1.85)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'mitosis' | 'meiosis' | 'fission';
  const MODE_ORDER: readonly ModeKey[] = ['mitosis', 'meiosis', 'fission'];
  const MODE_LABEL: Record<ModeKey, string> = {
    mitosis: 'Mode: Mitosis (2n → 2×2n)',
    meiosis: 'Mode: Meiosis (2n → 4×1n)',
    fission: 'Mode: Binary Fission (E. coli)',
  };
  let mode: ModeKey = 'mitosis';
  let phase = 0.48; // Opens on dramatic Mitosis Metaphase bipolar spindle!
  let autoScrub = false;

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#182848',
    bgMid: '#0a1224',
    bgOuter: '#02040a',
    keyColor: '#fff4e6',
    keyIntensity: 3.10,
    rimColor: '#7ed0ff',
    rimIntensity: 1.85,
    lampColor: '#7cf4ff',
    lampIntensity: 18,
    lampPos: [0.4, 2.2, 6.2],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 240,
    bokehColor: '#7ecbff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated secondary fill lights for upper-left bacterial companion & lower-right molecular inset
  const satLamp = new THREE.PointLight('#5effd8', 11, 20, 2);
  satLamp.position.set(SAT_UL.x + 1.5, SAT_UL.y + 1.6, SAT_UL.z + 4.2);
  const insetLamp = new THREE.PointLight('#ffdca8', 12, 18, 2);
  insetLamp.position.set(INS0.x - 1.2, INS0.y + 1.4, INS0.z + 4.4);
  const spindleGlow = new THREE.PointLight('#ffe0a8', 12, 18, 2);
  spindleGlow.position.set(C0.x, C0.y - 0.6, C0.z + 4.6);
  scene.add(satLamp, insetLamp, spindleGlow);

  const cell = new THREE.Group();
  scene.add(cell);

  const eukGroup = new THREE.Group();
  const fissionGroup = new THREE.Group();
  const insetGroup = new THREE.Group();
  cell.add(eukGroup, fissionGroup, insetGroup);

  let cutOn = true;
  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.8);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // -------------------------------------------------------------------------
  // Exact 20 PARTS & INFO Registry (Non-Negotiable Phase 14 Contract)
  // -------------------------------------------------------------------------
  const PARTS: Array<[string, string, string]> = [
    ['cell_cortex', 'Dividing cell cortex & wet-gel membrane', '#8cd4ff'],
    ['nuclear_env', 'Nuclear envelope (dissolving / reforming lamina)', '#9c82ff'],
    ['centrosome', 'Centrosomes & γ-TuRC spindle poles', '#ffd466'],
    ['spindle_mt', 'Bipolar mitotic / meiotic spindle microtubules', '#3ef2d6'],
    ['kinesin5', 'Kinesin-5 (Eg5) sliding motor (PDB 1II6)', '#ff9b42'],
    ['sister_chromatids', 'Sister chromatids (maternal coral · paternal cyan)', '#ff8c66'],
    ['condensin', 'Condensin SMC compaction rings (PDB 6YVU)', '#c880ff'],
    ['cohesin', 'Cohesin SMC sister-tethering rings (PDB 6WG3)', '#ffd24d'],
    ['kinetochore', 'Kinetochore & dynein coupler (PDB 3VKH)', '#ff5992'],
    ['separase', 'Separase kleisin-cleavage protease (PDB 7NJ1)', '#70ff72'],
    ['contractile_ring', 'Actin–myosin II cleavage furrow ring', '#ff6470'],
    ['bivalent', 'Meiotic homologous bivalent tetrad', '#ffaa70'],
    ['synaptonemal', 'Synaptonemal complex ladder (SYCP3 · PDB 4CPC)', '#b4ff7d'],
    ['spo11', 'Spo11 DNA double-strand break enzyme (PDB 2Q2E)', '#ff6157'],
    ['rad51', 'Rad51 / Dmc1 strand-invasion filament (PDB 5H1B)', '#44ffd0'],
    ['chiasma', 'Recombinant chiasma crossover arms', '#6ce4ff'],
    ['holliday', '4-way Holliday DNA recombination junction', '#f79cff'],
    ['ftsz_ring', 'Bacterial FtsZ GTPase Z-ring (PDB 6UNX)', '#45ecff'],
    ['par_segregation', 'Bacterial FtsK / ParABS partition motor (PDB 2IUU)', '#ffc954'],
    ['dna_basepair', 'Atomic Watson–Crick base pairs (A=T / G≡C · Mg²⁺)', '#7cb4ff'],
  ];

  const INFO: Record<string, [string, string]> = {
    cell_cortex: ['Refractive wet-gel plasma membrane backed by cortical F-actin mesh', 'Elongates across anaphase and pinches inward along cleavage furrows to isolate daughter cells'],
    nuclear_env: ['Double lipid membrane lined by nuclear lamin mesh and pore complexes', 'Phosphorylated to disassemble in prophase so spindle fibers reach chromosomes, then reforms in telophase'],
    centrosome: ['Orthogonal 9-triplet centriole pair embedded in γ-TuRC pericentriolar matrix', 'Duplicates before division and migrates to opposite poles to anchor and focus the bipolar spindle'],
    spindle_mt: ['Dynamic α/β-tubulin polymers (kinetochore, interpolar, and astral fibers)', 'Captures sister kinetochores under bipolar tension and depolymerizes to haul chromatids poleward'],
    kinesin5: ['Bipolar homotetrameric Eg5 kinesin motor (PDB 1II6) bridging antiparallel fibers', 'Walks toward microtubule plus-ends using ATP to push overlapping spindle poles apart'],
    sister_chromatids: ['Identical replicated dsDNA copies (maternal coral-gold, paternal sapphire-cyan)', 'Compacted 10,000-fold into sturdy transport rods so genomes partition cleanly without tangling'],
    condensin: ['SMC2/SMC4 kleisin ATPase loop-extrusion rings (PDB 6YVU)', 'Reels loose chromatin into tight helical arrays along each chromatid core during prophase'],
    cohesin: ['SMC1/SMC3/SCC1 topological clamp rings (PDB 6WG3) encircling paired sisters', 'Holds sister chromatids locked together until every pair passes the spindle tension checkpoint'],
    kinetochore: ['Trilaminar centromeric plaque coupled to Ndc80 and cytoplasmic dynein (PDB 3VKH)', 'Senses balanced bipolar microtubule tension to satisfy the Spindle Assembly Checkpoint (SAC)'],
    separase: ['Cysteine endopeptidase unleashed after APC/C degrades securin (PDB 7NJ1)', 'Cleaves the SCC1 subunit of cohesin rings in unison to trigger synchronous anaphase separation'],
    contractile_ring: ['Equatorial belt of antiparallel F-actin and non-muscle myosin II motors', 'Constricts like a drawstring during cytokinesis, pinching the cortex into two (or four) daughters'],
    bivalent: ['Paired maternal + paternal homologous chromosomes (4 chromatids = tetrad)', 'Aligns homologs together in Meiosis I for genetic crossing-over and independent assortment'],
    synaptonemal: ['Zipper-like protein scaffold built from SYCP3 lateral bars (PDB 4CPC) & SYCP1 rungs', 'Holds homologous chromosomes in precise register along their entire length during Prophase I'],
    spo11: ['Topoisomerase VI-family dimeric endonuclease (PDB 2Q2E)', 'Introduces programmed DNA double-strand breaks that initiate meiotic homologous recombination'],
    rad51: ['Helical RecA-family nucleoprotein recombinase filament (PDB 5H1B)', 'Coats resected single-stranded DNA to invade the matching homolog duplex and search for homology'],
    chiasma: ['Physical X-shaped crossover bridge where maternal & paternal chromatids swap arms', 'Creates chimeric recombinant chromosomes and holds bivalents together until Anaphase I'],
    holliday: ['Four-way cruciform branched DNA intermediate formed during reciprocal strand exchange', 'Branch-migrates and resolves to produce stable swapped maternal/paternal chromosome segments'],
    ftsz_ring: ['Polymerized GTPase FtsZ protofilaments (PDB 6UNX), bacterial ancestor of tubulin', 'Treadmills around the E. coli mid-cell plane to guide inward septal wall constriction'],
    par_segregation: ['Hexameric FtsK DNA translocase ring (PDB 2IUU) & ParB–parS origin clamps', 'Actively partitions replicated bacterial oriC/ter circular chromosomes away from the closing septum'],
    dna_basepair: ['Atomic Watson–Crick A=T (2 H-bonds) & G≡C (3 H-bonds) duplex with catalytic Mg²⁺', 'Encodes hereditary fidelity across division and breaks/rejoins cleanly during recombination'],
  };

  const REG: Record<string, { mats: THREE.Material[]; imp: THREE.ShaderMaterial[] }> = {};
  const reg = <T extends THREE.Material>(k: string, m: T): T => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    if ((m as THREE.ShaderMaterial).isShaderMaterial) r.imp.push(m as unknown as THREE.ShaderMaterial);
    else r.mats.push(m);
    return m;
  };
  const phys = (o: THREE.MeshPhysicalMaterialParameters) =>
    new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.82, ...o });
  const protMat = (k: string, extra: THREE.MeshPhysicalMaterialParameters = {}) =>
    reg(
      k,
      phys({
        vertexColors: true,
        roughness: 0.34,
        metalness: 0.05,
        clearcoat: 0.36,
        clearcoatRoughness: 0.28,
        sheen: 0.38,
        sheenColor: '#fff6fa',
        normalMap: protBump,
        normalScale: new THREE.Vector2(0.32, 0.32),
        side: THREE.DoubleSide,
        ...extra,
      })
    );
  const sculpt = (k: string, parent: THREE.Object3D = cell, extra: THREE.MeshPhysicalMaterialParameters = {}) =>
    makeSculptedMesh(protMat(k, extra), parent);
  const molBatch = (
    k: string,
    geo: THREE.BufferGeometry,
    parent: THREE.Object3D = cell,
    extra: THREE.MeshPhysicalMaterialParameters = {}
  ) => makeMolBatch(geo, protMat(k, extra), parent);

  const shells: THREE.MeshPhysicalMaterial[] = [];
  const LOOKS = ['gel', 'see-through', 'solid'] as const;
  let organelleLook: (typeof LOOKS)[number] = 'gel';
  let placed = 0;

  function cinemaShellMat(
    k: string,
    solidHex: string,
    gelHex: string,
    opts: Record<string, unknown> = {}
  ): THREE.MeshPhysicalMaterial {
    const m = makeCinemaMembraneMat({}, (opts.normalMap as THREE.Texture) ?? bump(10, 8), {
      color: gelHex,
      attenuationColor: (opts.attenCol as string) ?? solidHex,
      attenuationDistance: (opts.attenDist as number) ?? 4.8,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.28,
      iridescence: (opts.iridescence as number) ?? 0.48,
      thickness: (opts.thickness as number) ?? 0.48,
      roughness: (opts.roughness as number) ?? 0.13,
      sheenColor: (opts.sheenColor as string) ?? '#ffe4f8',
      normalScale: (opts.normalScale as number) ?? 0.22,
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
      m.opacity = see ? 0.36 : 1;
      m.depthWrite = !see;
      m.side = THREE.DoubleSide;
      m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid);
      m.needsUpdate = true;
    });
  }

  const impMats: THREE.ShaderMaterial[] = [];
  const grown = (a: Float32Array) => {
    const b = new Float32Array(a.length * 2);
    b.set(a);
    return b;
  };
  function balls(k: string, parent: THREE.Object3D = cell) {
    let n = 0, cap = 1 << 12;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 11;
    let A = new Float32Array(scap * 3), B = new Float32Array(scap * 3), R = new Float32Array(scap);
    let C1 = new Float32Array(scap * 3), C2 = new Float32Array(scap * 3);
    return {
      stick(a: THREE.Vector3, b: THREE.Vector3, r: number, c1: THREE.Color, c2: THREE.Color) {
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
      add(p: THREE.Vector3, s: number, c: THREE.Color) {
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
          const mat = makeCinemaImpostorMat([], false);
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
            sg.setAttribute(nm as string, new THREE.InstancedBufferAttribute((arr as Float32Array).slice(0, m * (d as number)), d as number))
          );
          sg.instanceCount = m;
          const mat = makeCinemaStickMat([], false);
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

  const qFromZ = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), twist)) : q;
  };
  const qFromY = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };
  const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
  const smoothstep = (e0: number, e1: number, x: number) => {
    const t = clamp01((x - e0) / Math.max(1e-5, e1 - e0));
    return t * t * (3 - 2 * t);
  };
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const SITES: Record<string, THREE.Vector3[]> = Object.fromEntries(PARTS.map(p => [p[0], []]));
  const cutOpenMeshes: THREE.Object3D[] = [];
  const cutClosedMeshes: THREE.Object3D[] = [];

  // -------------------------------------------------------------------------
  // Build ALL 10 Real RCSB PDB Cryo-EM / Crystal Surface Geometries
  //   ftsz_ring 6UNX, ftsk_motor 2IUU, cohesin 6WG3, condensin 6YVU,
  //   kinetochore 3VKH, separase 7NJ1, kinesin5 1II6, spo11_top6 2Q2E,
  //   rad51_dmc1 5H1B, sycp3 4CPC
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    const geoFtsz = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'ftsz_ring'), {
      nm: NM,
      scale: 7.4,
      maxDim: 24,
      sigmaAng: 4.0,
      iso: 0.39,
      aoStrength: 0.54,
      colorFn: (_, part) => (part === 1 ? col('#8ef7ff') : col('#35e3ff')),
    });
    const ftskCols = [col('#ffd24d'), col('#ffaa3b'), col('#ffe682'), col('#f59333'), col('#ffcf5c'), col('#ff9842')];
    const geoFtsk = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'ftsk_motor'), {
      nm: NM,
      scale: 7.5,
      maxDim: 26,
      sigmaAng: 4.8,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? ftskCols[grp % 6].clone().offsetHSL(0.01, 0, 0.08) : ftskCols[grp % 6]),
    });
    const cohCols = [col('#ffd047'), col('#ffad33'), col('#ffe882'), col('#f08a2b')];
    const geoCohesin = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'cohesin'), {
      nm: NM,
      scale: 4.3,
      maxDim: 26,
      sigmaAng: 5.4,
      iso: 0.35,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? cohCols[grp & 3].clone().offsetHSL(0.01, 0, 0.07) : cohCols[grp & 3]),
    });
    const condCols = [col('#c77dff'), col('#a45cff'), col('#e3adff'), col('#8f6bff')];
    const geoCondensin = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'condensin'), {
      nm: NM,
      scale: 2.35,
      maxDim: 26,
      sigmaAng: 6.2,
      iso: 0.34,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? condCols[grp & 3].clone().offsetHSL(0.01, 0, 0.07) : condCols[grp & 3]),
    });
    const kinCols = [col('#ff4d8c'), col('#ff8ab5')];
    const geoKinetochore = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'kinetochore'), {
      nm: NM,
      scale: 2.75,
      maxDim: 26,
      sigmaAng: 6.0,
      iso: 0.35,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? kinCols[grp & 1].clone().offsetHSL(0.01, 0, 0.08) : kinCols[grp & 1]),
    });
    const sepCols = [col('#6eff70'), col('#ff8454')];
    const geoSeparase = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'separase'), {
      nm: NM,
      scale: 4.1,
      maxDim: 24,
      sigmaAng: 4.8,
      iso: 0.36,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? sepCols[grp & 1].clone().offsetHSL(0.01, 0, 0.07) : sepCols[grp & 1]),
    });
    const k5Cols = [col('#ff9438'), col('#ffc75c')];
    const geoKinesin5 = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'kinesin5'), {
      nm: NM,
      scale: 5.2,
      maxDim: 24,
      sigmaAng: 4.3,
      iso: 0.37,
      aoStrength: 0.54,
      colorFn: (grp, part) => (part === 1 ? k5Cols[grp & 1].clone().offsetHSL(0.01, 0, 0.08) : k5Cols[grp & 1]),
    });
    const spoCols = [col('#ff5a54'), col('#ff9873')];
    const geoSpo11 = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'spo11_top6'), {
      nm: NM,
      scale: 4.8,
      maxDim: 24,
      sigmaAng: 4.6,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? spoCols[grp & 1].clone().offsetHSL(0.01, 0, 0.08) : spoCols[grp & 1]),
    });
    const radCols = [col('#3affc8'), col('#6bffe2'), col('#3cd8ff'), col('#80ffcf')];
    const geoRad51 = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'rad51_dmc1'), {
      nm: NM,
      scale: 5.6,
      maxDim: 24,
      sigmaAng: 4.4,
      iso: 0.37,
      aoStrength: 0.54,
      colorFn: (grp, part) => (part === 1 ? radCols[grp & 3].clone().offsetHSL(0.01, 0, 0.07) : radCols[grp & 3]),
    });
    const sycCols = [col('#a6ff7d'), col('#ffe778'), col('#7affc0'), col('#d4ff8f')];
    const geoSycp3 = buildPdbSurfaceGeo(pdb.getModel(PDB_DIVISION, 'sycp3'), {
      nm: NM,
      scale: 3.9,
      maxDim: 24,
      sigmaAng: 5.0,
      iso: 0.36,
      aoStrength: 0.54,
      colorFn: (grp, part) => (part === 1 ? sycCols[grp & 3].clone().offsetHSL(0.01, 0, 0.07) : sycCols[grp & 3]),
    });
    return {
      geoFtsz,
      geoFtsk,
      geoCohesin,
      geoCondensin,
      geoKinetochore,
      geoSeparase,
      geoKinesin5,
      geoSpo11,
      geoRad51,
      geoSycp3,
    };
  }

  // -------------------------------------------------------------------------
  // Parametric Deformable Cutaway Shell Builder (Zero Clipping Glitches!)
  // Builds an axis-aligned peanut/dividing-cell shell with open front face
  // (phi in [cutLo, cutHi] omitted when open) + optional closed front lid.
  // -------------------------------------------------------------------------
  function makeDeformableShell(
    axis: 'x' | 'y',
    uSegs: number,
    vSegs: number,
    phiStart: number,
    phiSpan: number
  ) {
    const g = new THREE.BufferGeometry();
    const nVerts = (uSegs + 1) * (vSegs + 1);
    const pos = new Float32Array(nVerts * 3);
    const uv = new Float32Array(nVerts * 2);
    const idx: number[] = [];
    for (let iu = 0; iu <= uSegs; iu++) {
      for (let iv = 0; iv <= vSegs; iv++) {
        const k = iu * (vSegs + 1) + iv;
        uv[k * 2] = iu / uSegs;
        uv[k * 2 + 1] = iv / vSegs;
      }
    }
    for (let iu = 0; iu < uSegs; iu++) {
      for (let iv = 0; iv < vSegs; iv++) {
        const a = iu * (vSegs + 1) + iv;
        const b = a + 1;
        const c = a + (vSegs + 1);
        const d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);

    function update(halfLen: number, rBase: number, pinch: number, waistSpread = 0.28) {
      const p = g.attributes.position as THREE.BufferAttribute;
      for (let iu = 0; iu <= uSegs; iu++) {
        const s = (iu / uSegs) * 2 - 1; // -1 .. +1
        const theta = s * (Math.PI * 0.5); // -pi/2 .. +pi/2
        const ax = Math.sin(theta) * halfLen;
        const cosT = Math.cos(theta);
        // Smooth hourglass cleavage furrow at s=0
        const furrow = 1 - pinch * Math.exp(-(s * s) / (waistSpread * waistSpread));
        const r = Math.max(0.02, rBase * cosT * furrow);
        for (let iv = 0; iv <= vSegs; iv++) {
          const phi = phiStart + (iv / vSegs) * phiSpan;
          const k = iu * (vSegs + 1) + iv;
          if (axis === 'x') {
            p.setXYZ(k, ax, r * Math.sin(phi), r * Math.cos(phi));
          } else {
            p.setXYZ(k, r * Math.sin(phi), ax, r * Math.cos(phi));
          }
        }
      }
      p.needsUpdate = true;
      g.computeVertexNormals();
    }
    return { geo: g, update };
  }

  // Rim ribbon tracing the front cutaway edge of a deformable shell so membrane thickness gleams!
  function makeCutawayRim(
    axis: 'x' | 'y',
    uSegs: number,
    phiEdge: number,
    thick = 0.16
  ) {
    const g = new THREE.BufferGeometry();
    const nVerts = (uSegs + 1) * 2;
    const pos = new Float32Array(nVerts * 3);
    const idx: number[] = [];
    for (let iu = 0; iu < uSegs; iu++) {
      const a = iu * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(idx);
    function update(halfLen: number, rBase: number, pinch: number, waistSpread = 0.28) {
      const p = g.attributes.position as THREE.BufferAttribute;
      const sp = Math.sin(phiEdge);
      const cp = Math.cos(phiEdge);
      for (let iu = 0; iu <= uSegs; iu++) {
        const s = (iu / uSegs) * 2 - 1;
        const theta = s * (Math.PI * 0.5);
        const ax = Math.sin(theta) * halfLen;
        const cosT = Math.cos(theta);
        const furrow = 1 - pinch * Math.exp(-(s * s) / (waistSpread * waistSpread));
        const rOut = Math.max(0.04, rBase * cosT * furrow);
        const rIn = Math.max(0.01, rOut - thick * cosT);
        const k = iu * 2;
        if (axis === 'x') {
          p.setXYZ(k, ax, rOut * sp, rOut * cp);
          p.setXYZ(k + 1, ax, rIn * sp, rIn * cp);
        } else {
          p.setXYZ(k, rOut * sp, ax, rOut * cp);
          p.setXYZ(k + 1, rIn * sp, ax, rIn * cp);
        }
      }
      p.needsUpdate = true;
      g.computeVertexNormals();
    }
    return { geo: g, update };
  }

  // -------------------------------------------------------------------------
  // Dynamic References Updated Smoothly on Every Phase Scrub / Mode Switch
  // -------------------------------------------------------------------------
  interface ChromatidRig {
    id: string;
    chrIdx: number;   // 0=M1, 1=P1, 2=M2, 3=P2
    sisterIdx: number; // 0=left/a, 1=right/b
    isMaternal: boolean;
    isRecomb: boolean; // swaps distal tip color during Meiosis crossing-over
    len: number;
    root: THREE.Group;
    upperArm: THREE.Group;
    lowerArm: THREE.Group;
    tipMesh: THREE.Mesh;
    tipMat: THREE.MeshPhysicalMaterial;
    kinetochoreMesh: THREE.Mesh;
    condensinMeshes: THREE.Mesh[];
    baseHex: string;
    swapHex: string;
    emissiveBase: string;
    emissiveSwap: string;
  }

  interface CohesinRig {
    chrIdx: number;
    mesh: THREE.Mesh;
    ringHalo: THREE.Mesh;
  }

  interface DynamicSpindleLine {
    mesh: THREE.Mesh;
    updateEndpoints: (a: THREE.Vector3, b: THREE.Vector3, bendY?: number, bendZ?: number, rad?: number) => void;
  }

  const dyn: {
    // Eukaryotic Cortex & Furrows
    cortexMainOpen?: ReturnType<typeof makeDeformableShell>;
    cortexMainClosed?: ReturnType<typeof makeDeformableShell>;
    cortexMainRimA?: ReturnType<typeof makeCutawayRim>;
    cortexMainRimB?: ReturnType<typeof makeCutawayRim>;
    cortexMainGroup?: THREE.Group;
    cortexM2Group?: THREE.Group;
    cortexM2LeftOpen?: ReturnType<typeof makeDeformableShell>;
    cortexM2LeftClosed?: ReturnType<typeof makeDeformableShell>;
    cortexM2RightOpen?: ReturnType<typeof makeDeformableShell>;
    cortexM2RightClosed?: ReturnType<typeof makeDeformableShell>;
    cortexM2Rims?: Array<ReturnType<typeof makeCutawayRim>>;
    // Contractile rings
    ringMain?: THREE.Group;
    ringM2Left?: THREE.Group;
    ringM2Right?: THREE.Group;
    // Nuclear envelopes
    nucCenter?: THREE.Group;
    nucCenterMat?: THREE.MeshPhysicalMaterial;
    nucFragments?: THREE.Group;
    nucMitL?: THREE.Group;
    nucMitR?: THREE.Group;
    nucMitMat?: THREE.MeshPhysicalMaterial;
    nucGametes?: THREE.Group[];
    nucGamMat?: THREE.MeshPhysicalMaterial;
    // Centrosomes
    centL?: THREE.Group;
    centR?: THREE.Group;
    centM2?: THREE.Group[]; // 4 poles for Meiosis II (TL, BL, TR, BR)
    // Dynamic Spindle MTs & Kinesin-5
    kFibers?: DynamicSpindleLine[];
    interpolarMts?: DynamicSpindleLine[];
    m2Fibers?: DynamicSpindleLine[];
    kinesin5Meshes?: THREE.Mesh[];
    // Chromosomes & Machinery
    chromatids?: ChromatidRig[];
    cohesins?: CohesinRig[];
    separases?: THREE.Mesh[];
    // Meiosis I Bivalent / Synaptonemal / Spo11 / Rad51 / Chiasma
    meiosisRecombGroup?: THREE.Group;
    synapUpper?: THREE.Group;
    synapLower?: THREE.Group;
    chiasmaUpper?: THREE.Group;
    chiasmaLower?: THREE.Group;
    spo11Nodes?: THREE.Mesh[];
    rad51Nodes?: THREE.Mesh[];
    bivalentHalos?: THREE.Mesh[];
    // Prokaryotic Fission
    ecoliOuterOpen?: ReturnType<typeof makeDeformableShell>;
    ecoliOuterClosed?: ReturnType<typeof makeDeformableShell>;
    ecoliInnerOpen?: ReturnType<typeof makeDeformableShell>;
    ecoliRimA?: ReturnType<typeof makeCutawayRim>;
    ecoliRimB?: ReturnType<typeof makeCutawayRim>;
    ftszRingGroup?: THREE.Group;
    ftszMonomers?: Array<{ mesh: THREE.Mesh; ang: number; zOff: number }>;
    ftszHalo?: THREE.Mesh;
    ecoliDnaL?: THREE.Group;
    ecoliDnaR?: THREE.Group;
    ecoliThetaBridge?: THREE.Mesh;
    parMotorCenter?: THREE.Group;
    parPolarL?: THREE.Group;
    parPolarR?: THREE.Group;
    // Live animated rotors
    rotors?: Array<{ obj: THREE.Object3D; axis: 'x' | 'y' | 'z'; speed: number }>;
  } = { rotors: [] };

  // Dynamic curved spindle tube helper (fast vertex update, zero GC churn!)
  function makeDynamicSpindleTube(
    mat: THREE.Material,
    parent: THREE.Object3D,
    segs = 18,
    radSegs = 6
  ): DynamicSpindleLine {
    const nVerts = (segs + 1) * (radSegs + 1);
    const pos = new Float32Array(nVerts * 3);
    const idx: number[] = [];
    for (let i = 0; i < segs; i++) {
      for (let j = 0; j < radSegs; j++) {
        const a = i * (radSegs + 1) + j;
        const b = a + 1;
        const c = a + (radSegs + 1);
        const d = c + 1;
        idx.push(a, b, c, b, d, c);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(idx);
    const mesh = new THREE.Mesh(g, mat);
    mesh.frustumCulled = false;
    parent.add(mesh);

    const p0 = V(), p1 = V(), p2 = V(), pt = V(), tang = V(), uAx = V(), vAx = V();
    function updateEndpoints(a: THREE.Vector3, b: THREE.Vector3, bendY = 0, bendZ = 0, rad = 0.036) {
      p0.copy(a);
      p2.copy(b);
      p1.copy(a).lerp(b, 0.5);
      p1.y += bendY;
      p1.z += bendZ;

      const pa = g.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const u = 1 - t;
        // Quadratic Bezier point & tangent
        pt.set(
          u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
          u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
          u * u * p0.z + 2 * u * t * p1.z + t * t * p2.z
        );
        tang.set(
          2 * u * (p1.x - p0.x) + 2 * t * (p2.x - p1.x),
          2 * u * (p1.y - p0.y) + 2 * t * (p2.y - p1.y),
          2 * u * (p1.z - p0.z) + 2 * t * (p2.z - p1.z)
        );
        if (tang.lengthSq() < 1e-10) tang.set(1, 0, 0);
        else tang.normalize();
        if (Math.abs(tang.y) < 0.9) uAx.set(0, 1, 0).cross(tang).normalize();
        else uAx.set(1, 0, 0).cross(tang).normalize();
        vAx.crossVectors(tang, uAx).normalize();
        const r = rad * (0.78 + 0.28 * Math.sin(Math.PI * t));
        for (let j = 0; j <= radSegs; j++) {
          const ang = (j / radSegs) * Math.PI * 2;
          const ca = Math.cos(ang) * r;
          const sa = Math.sin(ang) * r;
          const vi = i * (radSegs + 1) + j;
          pa.setXYZ(vi, pt.x + uAx.x * ca + vAx.x * sa, pt.y + uAx.y * ca + vAx.y * sa, pt.z + uAx.z * ca + vAx.z * sa);
        }
      }
      pa.needsUpdate = true;
      g.computeVertexNormals();
    }
    return { mesh, updateEndpoints };
  }

  // -------------------------------------------------------------------------
  // 1. Build Eukaryotic Dividing Cell Apparatus (Mitosis + Meiosis)
  // -------------------------------------------------------------------------
  function buildEukaryoticCell(T: ReturnType<typeof buildPdbTemplates>) {
    // 1A. Translucent wet-gel Cell Cortex (Primary Horizontal + Meiosis II Dual Vertical)
    const cortexMat = cinemaShellMat('cell_cortex', '#4e8bc9', '#d2ecff', {
      attenCol: '#244e88',
      attenDist: 5.4,
      sssColor: '#7ee6ff',
      sssIntensity: 0.30,
      iridescence: 0.56,
      thickness: 0.52,
      roughness: 0.11,
      sheenColor: '#d4f6ff',
      normalScale: 0.24,
    });
    const rimMat = reg(
      'cell_cortex',
      new THREE.MeshStandardMaterial({
        color: '#8ee4ff',
        emissive: '#1e5b88',
        emissiveIntensity: 0.45,
        roughness: 0.32,
        metalness: 0.08,
        side: THREE.DoubleSide,
      })
    );

    // Cutaway omits front facing window phi in (-0.42*PI .. +0.42*PI) around +Z so the glowing spindle shines unobstructed!
    const PHI_OPEN_START = 0.40 * Math.PI;
    const PHI_OPEN_SPAN = 1.20 * Math.PI; // back + sides + top/bottom wrap!
    const PHI_LID_START = -0.40 * Math.PI;
    const PHI_LID_SPAN = 0.80 * Math.PI;

    const cortexMainGroup = new THREE.Group();
    eukGroup.add(cortexMainGroup);
    dyn.cortexMainGroup = cortexMainGroup;

    const cOpen = makeDeformableShell('x', 44, 34, PHI_OPEN_START, PHI_OPEN_SPAN);
    const cClosed = makeDeformableShell('x', 32, 24, PHI_LID_START, PHI_LID_SPAN);
    const rimA = makeCutawayRim('x', 44, PHI_OPEN_START, 0.17);
    const rimB = makeCutawayRim('x', 44, PHI_OPEN_START + PHI_OPEN_SPAN, 0.17);
    dyn.cortexMainOpen = cOpen;
    dyn.cortexMainClosed = cClosed;
    dyn.cortexMainRimA = rimA;
    dyn.cortexMainRimB = rimB;

    const mOpen = new THREE.Mesh(cOpen.geo, cortexMat);
    const mClosed = new THREE.Mesh(cClosed.geo, cortexMat);
    const mRimA = new THREE.Mesh(rimA.geo, rimMat);
    const mRimB = new THREE.Mesh(rimB.geo, rimMat);
    mClosed.visible = !cutOn;
    cutOpenMeshes.push(mRimA, mRimB);
    cutClosedMeshes.push(mClosed);
    cortexMainGroup.add(mOpen, mClosed, mRimA, mRimB);

    // Secondary Meiosis II dual-vertical pinching cortex shells (Left @ x=-3.10, Right @ x=+3.10)
    const cortexM2Group = new THREE.Group();
    cortexM2Group.visible = false;
    eukGroup.add(cortexM2Group);
    dyn.cortexM2Group = cortexM2Group;

    const m2LOpen = makeDeformableShell('y', 36, 28, PHI_OPEN_START, PHI_OPEN_SPAN);
    const m2LClosed = makeDeformableShell('y', 24, 20, PHI_LID_START, PHI_LID_SPAN);
    const m2ROpen = makeDeformableShell('y', 36, 28, PHI_OPEN_START, PHI_OPEN_SPAN);
    const m2RClosed = makeDeformableShell('y', 24, 20, PHI_LID_START, PHI_LID_SPAN);
    const m2RimLA = makeCutawayRim('y', 36, PHI_OPEN_START, 0.13);
    const m2RimLB = makeCutawayRim('y', 36, PHI_OPEN_START + PHI_OPEN_SPAN, 0.13);
    const m2RimRA = makeCutawayRim('y', 36, PHI_OPEN_START, 0.13);
    const m2RimRB = makeCutawayRim('y', 36, PHI_OPEN_START + PHI_OPEN_SPAN, 0.13);
    dyn.cortexM2LeftOpen = m2LOpen;
    dyn.cortexM2LeftClosed = m2LClosed;
    dyn.cortexM2RightOpen = m2ROpen;
    dyn.cortexM2RightClosed = m2RClosed;
    dyn.cortexM2Rims = [m2RimLA, m2RimLB, m2RimRA, m2RimRB];

    const grpL = new THREE.Group();
    grpL.position.set(-3.10, 0, 0);
    const meshLOpen = new THREE.Mesh(m2LOpen.geo, cortexMat);
    const meshLClosed = new THREE.Mesh(m2LClosed.geo, cortexMat);
    const meshLRimA = new THREE.Mesh(m2RimLA.geo, rimMat);
    const meshLRimB = new THREE.Mesh(m2RimLB.geo, rimMat);
    meshLClosed.visible = !cutOn;
    grpL.add(meshLOpen, meshLClosed, meshLRimA, meshLRimB);

    const grpR = new THREE.Group();
    grpR.position.set(+3.10, 0, 0);
    const meshROpen = new THREE.Mesh(m2ROpen.geo, cortexMat);
    const meshRClosed = new THREE.Mesh(m2RClosed.geo, cortexMat);
    const meshRRimA = new THREE.Mesh(m2RimRA.geo, rimMat);
    const meshRRimB = new THREE.Mesh(m2RimRB.geo, rimMat);
    meshRClosed.visible = !cutOn;
    grpR.add(meshROpen, meshRClosed, meshRRimA, meshRRimB);

    cutOpenMeshes.push(meshLRimA, meshLRimB, meshRRimA, meshRRimB);
    cutClosedMeshes.push(meshLClosed, meshRClosed);
    cortexM2Group.add(grpL, grpR);
    placed += 12;

    // 1B. Actin–Myosin II Contractile Rings (Cutaway C-Arc + Closing Front Arc for zero spindle occlusion!)
    const buildContractileRing = (axis: 'x' | 'y', baseR: number) => {
      const grp = new THREE.Group();
      const matCfg = {
        emissive: '#94142c',
        emissiveIntensity: 0.48,
        roughness: 0.26,
        clearcoat: 0.52,
      };
      const cActin1 = col('#ff5468');
      const cActin2 = col('#ff8c98');
      const cMyo = col('#ffd45c');

      const emitArc = (parent: THREE.Group, a0: number, a1: number, segs: number, myoN: number) => {
        const S_CR = sculpt('contractile_ring', parent, matCfg);
        const ptsC: THREE.Vector3[] = [];
        const ptsL: THREE.Vector3[] = [];
        const ptsR: THREE.Vector3[] = [];
        for (let i = 0; i <= segs; i++) {
          const a = lerp(a0, a1, i / segs);
          const s = Math.sin(a), c = Math.cos(a);
          if (axis === 'x') {
            ptsC.push(V(0, s * baseR, c * baseR));
            ptsL.push(V(-0.11, s * (baseR - 0.03), c * (baseR - 0.03)));
            ptsR.push(V(+0.11, s * (baseR - 0.03), c * (baseR - 0.03)));
          } else {
            ptsC.push(V(s * baseR, 0, c * baseR));
            ptsL.push(V(s * (baseR - 0.03), -0.10, c * (baseR - 0.03)));
            ptsR.push(V(s * (baseR - 0.03), +0.10, c * (baseR - 0.03)));
          }
        }
        S_CR.tube(ptsC, 0.088, 0.088, cActin1, cActin1, 8, true);
        S_CR.tube(ptsL, 0.052, 0.052, cActin2, cActin2, 6, true);
        S_CR.tube(ptsR, 0.052, 0.052, cActin2, cActin2, 6, true);
        for (let i = 0; i < myoN; i++) {
          const a = lerp(a0 + 0.08, a1 - 0.08, (i + 0.5) / myoN);
          const s = Math.sin(a), c = Math.cos(a);
          const p = axis === 'x'
            ? V(0, s * (baseR - 0.06), c * (baseR - 0.06))
            : V(s * (baseR - 0.06), 0, c * (baseR - 0.06));
          S_CR.add(p, 0.22, cMyo);
          placed++;
        }
        S_CR.done();
      };

      // Open back/top/bottom cutaway C-arc matching the cell cortex cutaway window!
      const backArc = new THREE.Group();
      emitArc(backArc, PHI_OPEN_START, PHI_OPEN_START + PHI_OPEN_SPAN, 34, 15);
      grp.add(backArc);

      // Front closing arc (shown when cutaway is closed, or during tight final cytokinesis neck!)
      const frontArc = new THREE.Group();
      emitArc(frontArc, PHI_LID_START, PHI_LID_START + PHI_LID_SPAN, 20, 8);
      frontArc.visible = !cutOn;
      cutClosedMeshes.push(frontArc);
      grp.add(frontArc);
      grp.userData.baseR = baseR;
      grp.userData.frontArc = frontArc;
      return grp;
    };
    dyn.ringMain = buildContractileRing('x', 3.6);
    eukGroup.add(dyn.ringMain);
    dyn.ringM2Left = buildContractileRing('y', 2.4);
    dyn.ringM2Left.position.set(-3.10, 0, 0);
    dyn.ringM2Left.visible = false;
    dyn.ringM2Right = buildContractileRing('y', 2.4);
    dyn.ringM2Right.position.set(+3.10, 0, 0);
    dyn.ringM2Right.visible = false;
    eukGroup.add(dyn.ringM2Left, dyn.ringM2Right);

    // 1C. Nuclear Envelopes (Dissolving Center + Reforming Daughter / Gamete Envelopes + Lamina Vesicles)
    const makeNuclearShell = (rad: number, mat: THREE.MeshPhysicalMaterial, poreCount = 18) => {
      const grp = new THREE.Group();
      // Open-front nuclear bowl so interior chromatin glows clearly
      const g = new THREE.SphereGeometry(rad, 32, 24, 0.35 * Math.PI, 1.30 * Math.PI);
      grp.add(new THREE.Mesh(g, mat));
      const S_NPC = sculpt('nuclear_env', grp, {
        emissive: '#4d2ea8',
        emissiveIntensity: 0.45,
        roughness: 0.30,
      });
      const cPore = col('#c6b0ff');
      for (let i = 0; i < poreCount; i++) {
        const phi = 0.42 * Math.PI + ((i * 0.6180339887) % 1) * 1.16 * Math.PI;
        const th = Math.acos(1 - 2 * ((i + 0.5) / poreCount));
        const nrm = V(Math.sin(th) * Math.sin(phi), Math.cos(th), Math.sin(th) * Math.cos(phi)).normalize();
        S_NPC.ring(nrm.clone().multiplyScalar(rad * 1.01), nrm, rad * 0.085, rad * 0.024, cPore, 12, 6);
        placed++;
      }
      S_NPC.done();
      return grp;
    };

    dyn.nucCenterMat = reg(
      'nuclear_env',
      applyBacklitSSS(
        phys({
          color: '#7f62f2',
          emissive: '#2c1c75',
          emissiveIntensity: 0.36,
          roughness: 0.24,
          clearcoat: 0.52,
          transparent: true,
          opacity: 0.44,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
        '#b89eff',
        0.35,
        2.6
      )
    );
    dyn.nucCenter = makeNuclearShell(2.35, dyn.nucCenterMat, 20);
    eukGroup.add(dyn.nucCenter);

    // Dispersed phosphorylated nuclear lamina vesicles hovering inside cortex during Metaphase/Anaphase!
    dyn.nucFragments = new THREE.Group();
    const S_NF = sculpt('nuclear_env', dyn.nucFragments, {
      emissive: '#482ca6',
      emissiveIntensity: 0.46,
      roughness: 0.30,
      transparent: true,
      opacity: 0.72,
    });
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const rx = 3.55 * Math.cos(a);
      const ry = 3.05 * Math.sin(a);
      const rz = -1.25 - 0.85 * Math.sin(a * 2.0);
      S_NF.lobe(V(rx, ry, rz), 0.26, 0.14, 0.18, col(i % 2 === 0 ? '#a88eff' : '#8064e8'), qFromZ(V(rx, ry, rz).normalize()));
      placed++;
    }
    S_NF.done();
    eukGroup.add(dyn.nucFragments);

    // Reforming daughter nuclear envelopes (Mitosis / Meiosis I)
    dyn.nucMitMat = dyn.nucCenterMat.clone();
    reg('nuclear_env', dyn.nucMitMat);
    dyn.nucMitL = makeNuclearShell(1.80, dyn.nucMitMat, 14);
    dyn.nucMitR = makeNuclearShell(1.80, dyn.nucMitMat, 14);
    eukGroup.add(dyn.nucMitL, dyn.nucMitR);

    // 4 Haploid Gamete Nuclear Envelopes (Meiosis II)
    dyn.nucGamMat = dyn.nucCenterMat.clone();
    reg('nuclear_env', dyn.nucGamMat);
    dyn.nucGametes = [
      V(-3.10, +2.05, 0),
      V(-3.10, -2.05, 0),
      V(+3.10, +2.05, 0),
      V(+3.10, -2.05, 0),
    ].map(pos => {
      const ng = makeNuclearShell(1.22, dyn.nucGamMat, 10);
      ng.position.copy(pos);
      ng.visible = false;
      eukGroup.add(ng);
      return ng;
    });

    // 1D. Centrosome Asters (Orthogonal 9-Triplet Centrioles + γ-TuRC Halo + Astral Rays)
    const makeCentrosome = (scale = 1.0) => {
      const grp = new THREE.Group();
      const S_C = sculpt('centrosome', grp, {
        emissive: '#945d0c',
        emissiveIntensity: 0.56,
        roughness: 0.26,
        clearcoat: 0.54,
      });
      const cGold = col('#ffd966');
      const cAmber = col('#ffaa38');
      const cRay = col('#62ffe6');
      // Mother centriole (9 microtubule triplets arranged in a cylinder along Y)
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2;
        const rx = Math.cos(a) * 0.16 * scale;
        const rz = Math.sin(a) * 0.16 * scale;
        S_C.stick(V(rx, -0.24 * scale, rz), V(rx, 0.24 * scale, rz), 0.032 * scale, cGold, cAmber);
      }
      // Daughter centriole (orthogonal along X)
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2;
        const ry = Math.cos(a) * 0.14 * scale;
        const rz = Math.sin(a) * 0.14 * scale;
        S_C.stick(V(0.14 * scale, ry, rz), V(0.56 * scale, ry, rz), 0.028 * scale, cAmber, cGold);
      }
      // Radiating astral microtubule spikes
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const dir = V(Math.cos(a) * 0.65, Math.sin(a), Math.sin(a * 2) * 0.42).normalize();
        S_C.stick(dir.clone().multiplyScalar(0.24 * scale), dir.clone().multiplyScalar(1.08 * scale), 0.018 * scale, cGold, cRay);
      }
      S_C.done();
      // Glowing pericentriolar γ-TuRC matrix aura
      const aura = new THREE.Mesh(
        new THREE.SphereGeometry(0.46 * scale, 20, 16),
        reg(
          'centrosome',
          phys({
            color: '#ffe27a',
            emissive: '#ffaa28',
            emissiveIntensity: 0.72,
            transparent: true,
            opacity: 0.34,
            depthWrite: false,
          })
        )
      );
      grp.add(aura);
      placed += 18;
      return grp;
    };

    dyn.centL = makeCentrosome(1.0);
    dyn.centR = makeCentrosome(1.0);
    dyn.centR.rotation.y = Math.PI;
    eukGroup.add(dyn.centL, dyn.centR);
    dyn.rotors.push({ obj: dyn.centL, axis: 'x', speed: 0.45 }, { obj: dyn.centR, axis: 'x', speed: -0.45 });

    dyn.centM2 = [0, 1, 2, 3].map(() => {
      const c = makeCentrosome(0.68);
      c.visible = false;
      eukGroup.add(c);
      return c;
    });

    // 1E. Dynamic Bipolar Spindle Microtubules (`spindle_mt`) + Real PDB Kinesin-5 (`1II6`)
    const mtMat = reg(
      'spindle_mt',
      applyBacklitSSS(
        phys({
          color: '#3cf2d8',
          emissive: '#0e7874',
          emissiveIntensity: 0.56,
          roughness: 0.24,
          clearcoat: 0.52,
          transparent: true,
          opacity: 0.90,
        }),
        '#7efeff',
        0.34,
        2.4
      )
    );
    const interpolarMat = reg(
      'spindle_mt',
      phys({
        color: '#52d6ff',
        emissive: '#105c85',
        emissiveIntensity: 0.42,
        roughness: 0.26,
        transparent: true,
        opacity: 0.68,
      })
    );
    // 8 Kinetochore k-fibers (one per chromatid!)
    dyn.kFibers = Array.from({ length: 8 }, () => makeDynamicSpindleTube(mtMat, eukGroup, 14, 6));
    // 14 Interpolar arched spindle fibers sweeping pole-to-pole
    dyn.interpolarMts = Array.from({ length: 14 }, () => makeDynamicSpindleTube(interpolarMat, eukGroup, 18, 6));
    // 16 Meiosis II vertical spindle fibers (8 left daughter + 8 right daughter)
    dyn.m2Fibers = Array.from({ length: 16 }, () => {
      const f = makeDynamicSpindleTube(mtMat, eukGroup, 12, 5);
      f.mesh.visible = false;
      return f;
    });
    placed += 38;

    // 12 Real PDB Kinesin-5 (Eg5 · PDB 1II6) antiparallel sliding motors bridging the spindle midzone!
    const k5Mat = protMat('kinesin5', {
      emissive: '#8f3f08',
      emissiveIntensity: 0.44,
      roughness: 0.26,
      clearcoat: 0.52,
    });
    dyn.kinesin5Meshes = Array.from({ length: 12 }, (_, idx) => {
      const m = new THREE.Mesh(T.geoKinesin5, k5Mat);
      m.scale.setScalar(0.88);
      m.rotation.set(idx * 0.5, idx * 0.7, Math.PI * 0.5);
      eukGroup.add(m);
      placed++;
      return m;
    });

    // 1F. 8 Articulated Chromatid Rigs (`2n = 4` = M1, P1, M2, P2 × 2 sisters)
    //     Each chromatid carries:
    //       - Helical chromatin arms (proximal + swappable recombinant distal tip for Meiosis chiasmata!)
    //       - Real PDB Condensin (6YVU) compaction loops along its arms
    //       - Real PDB Kinetochore (3VKH) outer centromere plaque
    const condMat = protMat('condensin', {
      emissive: '#581ea8',
      emissiveIntensity: 0.42,
      roughness: 0.26,
      clearcoat: 0.50,
    });
    const kinMat = protMat('kinetochore', {
      emissive: '#8a143e',
      emissiveIntensity: 0.52,
      roughness: 0.24,
      clearcoat: 0.54,
    });
    const cohMat = protMat('cohesin', {
      emissive: '#8a5508',
      emissiveIntensity: 0.48,
      roughness: 0.24,
      clearcoat: 0.54,
    });
    const sepMat = protMat('separase', {
      emissive: '#1e8526',
      emissiveIntensity: 0.52,
      roughness: 0.24,
      clearcoat: 0.54,
    });

    // Helper: sculpted coiled chromatid half-arm tube geometry
    const makeChromatidArmGeo = (len: number, rad: number, yStart: number, dirY: number, phaseOff = 0) => {
      const pts: THREE.Vector3[] = [];
      const steps = 18;
      for (let i = 0; i <= steps; i++) {
        const f = i / steps;
        const y = yStart + dirY * f * len;
        const coilR = rad * 0.34 * Math.sin(Math.PI * Math.min(1, f * 1.15));
        const a = f * Math.PI * 5.2 + phaseOff;
        pts.push(V(Math.cos(a) * coilR, y, Math.sin(a) * coilR));
      }
      const cv = new THREE.CatmullRomCurve3(pts);
      const geo = new THREE.TubeGeometry(cv, 28, rad, 10, false);
      // Cap ends with smooth spherical scale
      return geo;
    };

    const chrSpecs = [
      // chrIdx 0: Maternal Pair 1 (Large)
      { chrIdx: 0, isMaternal: true, len: 1.05, baseHex: '#ff7d57', swapHex: '#46bcff', emBase: '#7a250e', emSwap: '#0e4d82' },
      // chrIdx 1: Paternal Pair 1 (Large)
      { chrIdx: 1, isMaternal: false, len: 1.05, baseHex: '#46bcff', swapHex: '#ff7d57', emBase: '#0e4d82', emSwap: '#7a250e' },
      // chrIdx 2: Maternal Pair 2 (Medium)
      { chrIdx: 2, isMaternal: true, len: 0.78, baseHex: '#ffae4f', swapHex: '#48e6ff', emBase: '#78440a', emSwap: '#0c637a' },
      // chrIdx 3: Paternal Pair 2 (Medium)
      { chrIdx: 3, isMaternal: false, len: 0.78, baseHex: '#48e6ff', swapHex: '#ffae4f', emBase: '#0c637a', emSwap: '#78440a' },
    ];

    dyn.chromatids = [];
    for (const sp of chrSpecs) {
      for (let sisterIdx = 0; sisterIdx < 2; sisterIdx++) {
        // Inner non-sister chromatids (M1b=sister 1, P1a=sister 0, M2b=sister 1, P2a=sister 0) swap distal tips in Meiosis!
        const isRecomb = (sp.isMaternal && sisterIdx === 1) || (!sp.isMaternal && sisterIdx === 0);
        const root = new THREE.Group();
        eukGroup.add(root);

        const armMat = reg(
          'sister_chromatids',
          applyBacklitSSS(
            phys({
              color: sp.baseHex,
              emissive: sp.emBase,
              emissiveIntensity: 0.44,
              roughness: 0.30,
              clearcoat: 0.46,
              sheen: 0.40,
              sheenColor: '#fff0e6',
              normalMap: protBump,
              normalScale: new THREE.Vector2(0.28, 0.28),
            }),
            sp.baseHex,
            0.26,
            2.4
          )
        );
        // Distal lower-arm tip material (color swaps smoothly during Meiosis Prophase I crossing-over!)
        const tipMat = reg(
          'sister_chromatids',
          applyBacklitSSS(
            phys({
              color: sp.baseHex,
              emissive: sp.emBase,
              emissiveIntensity: 0.46,
              roughness: 0.28,
              clearcoat: 0.50,
              sheen: 0.44,
              sheenColor: '#ffffff',
              normalMap: protBump,
              normalScale: new THREE.Vector2(0.28, 0.28),
            }),
            sp.baseHex,
            0.30,
            2.4
          )
        );

        const armR = 0.145;
        const upperArm = new THREE.Group();
        const lowerArm = new THREE.Group();
        root.add(upperArm, lowerArm);

        // Upper p-arm + rounded telomere cap
        const pLen = sp.len * 0.72;
        const pMesh = new THREE.Mesh(makeChromatidArmGeo(pLen, armR, 0.06, +1, sisterIdx * 2.1), armMat);
        const pCap = new THREE.Mesh(new THREE.SphereGeometry(armR * 1.04, 14, 12), armMat);
        pCap.position.set(0, 0.06 + pLen, 0);
        upperArm.add(pMesh, pCap);

        // Lower q-arm split into proximal half + distal swappable recombinant tip!
        const qProxLen = sp.len * 0.48;
        const qDistLen = sp.len * 0.46;
        const qProxMesh = new THREE.Mesh(makeChromatidArmGeo(qProxLen, armR, -0.06, -1, sisterIdx * 1.7 + 1.0), armMat);
        const tipMesh = new THREE.Mesh(makeChromatidArmGeo(qDistLen, armR * 0.98, -0.06 - qProxLen, -1, sisterIdx * 1.7 + 3.4), tipMat);
        const qCap = new THREE.Mesh(new THREE.SphereGeometry(armR * 1.02, 14, 12), tipMat);
        qCap.position.set(0, -0.06 - qProxLen - qDistLen, 0);
        lowerArm.add(qProxMesh, tipMesh, qCap);

        // Pinched centromere core bead
        const centBead = new THREE.Mesh(
          new THREE.SphereGeometry(0.125, 14, 12),
          reg('sister_chromatids', phys({ color: '#fff2cc', emissive: '#a87c24', emissiveIntensity: 0.42, roughness: 0.28 }))
        );
        root.add(centBead);

        // Real PDB Condensin (6YVU) compaction rings wrapped onto upper & lower chromatid arms!
        const cTop = new THREE.Mesh(T.geoCondensin, condMat);
        cTop.scale.setScalar(0.46);
        cTop.position.set(0, 0.06 + pLen * 0.56, 0.04);
        cTop.rotation.set(0.3, sisterIdx * Math.PI, Math.PI * 0.5);
        upperArm.add(cTop);

        const cBot = new THREE.Mesh(T.geoCondensin, condMat);
        cBot.scale.setScalar(0.46);
        cBot.position.set(0, -0.06 - qProxLen * 0.65, 0.04);
        cBot.rotation.set(-0.3, sisterIdx * Math.PI + 0.6, Math.PI * 0.5);
        lowerArm.add(cBot);

        // Real PDB Kinetochore / Dynein Coupler (3VKH) seated on outer side of centromere!
        const kinMesh = new THREE.Mesh(T.geoKinetochore, kinMat);
        kinMesh.scale.setScalar(0.48);
        kinMesh.position.set(sisterIdx === 0 ? -0.22 : +0.22, 0, 0.05);
        kinMesh.rotation.set(0, sisterIdx === 0 ? -Math.PI * 0.5 : Math.PI * 0.5, 0);
        root.add(kinMesh);

        placed += 8;
        dyn.chromatids.push({
          id: `${sp.isMaternal ? 'M' : 'P'}${Math.floor(sp.chrIdx / 2) + 1}${sisterIdx === 0 ? 'a' : 'b'}`,
          chrIdx: sp.chrIdx,
          sisterIdx,
          isMaternal: sp.isMaternal,
          isRecomb,
          len: sp.len,
          root,
          upperArm,
          lowerArm,
          tipMesh,
          tipMat,
          kinetochoreMesh: kinMesh,
          condensinMeshes: [cTop, cBot],
          baseHex: sp.baseHex,
          swapHex: sp.swapHex,
          emissiveBase: sp.emBase,
          emissiveSwap: sp.emSwap,
        });
      }
    }

    // 1G. Real PDB Cohesin Rings (6WG3) clamping sister pairs + Real PDB Separase (7NJ1) proteases!
    const cohRingMat = reg(
      'cohesin',
      phys({ color: '#ffd859', emissive: '#a86b0c', emissiveIntensity: 0.62, roughness: 0.24, clearcoat: 0.60 })
    );
    dyn.cohesins = [0, 1, 2, 3].map(chrIdx => {
      const m = new THREE.Mesh(T.geoCohesin, cohMat);
      m.scale.setScalar(0.62);
      const ringHalo = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.036, 10, 28), cohRingMat);
      ringHalo.rotation.x = Math.PI * 0.5;
      m.add(ringHalo);
      eukGroup.add(m);
      placed += 2;
      return { chrIdx, mesh: m, ringHalo };
    });

    dyn.separases = [0, 1, 2, 3].map(idx => {
      const m = new THREE.Mesh(T.geoSeparase, sepMat);
      m.scale.setScalar(0.68);
      m.rotation.set(0.3, idx * 0.8, 0.4);
      eukGroup.add(m);
      placed++;
      return m;
    });

    // 1H. Meiosis I Homologous Bivalent / Synaptonemal Complex (SYCP3 4CPC) / Spo11 (2Q2E) / Rad51 (5H1B) / Chiasma
    const meiosisRecombGroup = new THREE.Group();
    eukGroup.add(meiosisRecombGroup);
    dyn.meiosisRecombGroup = meiosisRecombGroup;

    const sycpMat = protMat('synaptonemal', {
      emissive: '#3e8a1e',
      emissiveIntensity: 0.46,
      roughness: 0.26,
      clearcoat: 0.50,
    });
    const spoMat = protMat('spo11', {
      emissive: '#8f1a14',
      emissiveIntensity: 0.52,
      roughness: 0.24,
      clearcoat: 0.52,
    });
    const radMat = protMat('rad51', {
      emissive: '#0e8568',
      emissiveIntensity: 0.54,
      roughness: 0.24,
      clearcoat: 0.52,
    });

    const buildSynaptonemalLadder = (yCenter: number, halfH: number) => {
      const grp = new THREE.Group();
      grp.position.set(0, yCenter, 0);
      // Real PDB SYCP3 (4CPC) lateral axial elements flanking left & right homologs
      for (const sx of [-0.54, +0.54]) {
        for (const sy of [-halfH * 0.45, +halfH * 0.45]) {
          const strut = new THREE.Mesh(T.geoSycp3, sycpMat);
          strut.scale.setScalar(0.66);
          strut.position.set(sx, sy, 0.08);
          strut.rotation.set(Math.PI * 0.5, 0, 0);
          grp.add(strut);
          placed++;
        }
      }
      // Sculpted SYCP1 transverse filament zipper rungs bridging the homolog axes!
      const S_SYN = sculpt('synaptonemal', grp, {
        emissive: '#4d9c1f',
        emissiveIntensity: 0.52,
        roughness: 0.26,
      });
      const cRung = col('#c6ff82');
      const cCenter = col('#ffe970');
      const nRungs = 9;
      for (let i = 0; i < nRungs; i++) {
        const y = lerp(-halfH, +halfH, i / (nRungs - 1));
        S_SYN.stick(V(-0.54, y, 0.06), V(+0.54, y, 0.06), 0.028, cRung, cRung);
        S_SYN.add(V(0, y, 0.08), 0.095, cCenter);
      }
      S_SYN.done();
      meiosisRecombGroup.add(grp);
      return grp;
    };

    dyn.synapUpper = buildSynaptonemalLadder(+1.18, 0.92);
    dyn.synapLower = buildSynaptonemalLadder(-1.18, 0.72);

    // Physical glowing X-shaped Chiasma arm-crossover bridge + Bivalent tetrad aura + Spo11 (2Q2E) & Rad51 (5H1B) nodules!
    const buildChiasmaBridge = (yCenter: number, matColHex: string, patColHex: string) => {
      const grp = new THREE.Group();
      grp.position.set(0, yCenter, 0.12);
      const S_CH = sculpt('chiasma', grp, {
        emissive: '#1e6e8f',
        emissiveIntensity: 0.58,
        roughness: 0.22,
        clearcoat: 0.58,
      });
      const cM = col(matColHex);
      const cP = col(patColHex);
      // Crossing maternal-to-paternal & paternal-to-maternal chiasma strands forming a radiant X!
      S_CH.tube([V(-0.48, 0.28, 0.04), V(-0.14, 0.06, 0.14), V(0.14, -0.06, 0.14), V(0.48, -0.28, 0.04)], 0.068, 0.068, cM, cP, 8, true);
      S_CH.tube([V(0.48, 0.28, -0.02), V(0.14, 0.06, -0.08), V(-0.14, -0.06, -0.08), V(-0.48, -0.28, -0.02)], 0.068, 0.068, cP, cM, 8, true);
      // Glowing chiasma crossover knot ring
      S_CH.ring(V(0, 0, 0.03), V(0, 0, 1), 0.22, 0.034, col('#ffffff'), 24, 6);
      S_CH.done();
      meiosisRecombGroup.add(grp);
      placed += 4;
      return grp;
    };

    dyn.chiasmaUpper = buildChiasmaBridge(+0.62, '#ff7d57', '#46bcff');
    dyn.chiasmaLower = buildChiasmaBridge(-1.58, '#ffae4f', '#48e6ff');

    // Translucent Bivalent tetrad framing capsule halos wrapping the paired homologous chromosomes
    const bivMat = reg(
      'bivalent',
      phys({
        color: '#ffb470',
        emissive: '#7a3e12',
        emissiveIntensity: 0.34,
        roughness: 0.25,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
      })
    );
    dyn.bivalentHalos = [
      { y: +1.18, r: 0.96, h: 1.05 },
      { y: -1.18, r: 0.86, h: 0.72 },
    ].map(spec => {
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(spec.r, spec.h, 12, 24), bivMat);
      m.position.set(0, spec.y, 0);
      meiosisRecombGroup.add(m);
      placed++;
      return m;
    });

    // Real PDB Spo11 (2Q2E) & Rad51 (5H1B) recombination nodule complexes docked directly at the chiasmata!
    dyn.spo11Nodes = [V(-0.34, +0.68, 0.34), V(+0.34, -1.52, 0.34)].map((p, idx) => {
      const m = new THREE.Mesh(T.geoSpo11, spoMat);
      m.scale.setScalar(0.68);
      m.position.copy(p);
      m.rotation.set(0.2, idx * 1.4, 0.3);
      meiosisRecombGroup.add(m);
      placed++;
      return m;
    });
    dyn.rad51Nodes = [V(+0.34, +0.58, 0.36), V(-0.34, -1.62, 0.36)].map((p, idx) => {
      const m = new THREE.Mesh(T.geoRad51, radMat);
      m.scale.setScalar(0.76);
      m.position.copy(p);
      m.rotation.set(-0.2, idx * 1.2 + 0.5, 0.4);
      meiosisRecombGroup.add(m);
      placed++;
      return m;
    });
  }

  // -------------------------------------------------------------------------
  // 2. Build Prokaryotic Binary Fission Companion / Hero E. coli Stage
  //    Uses real PDB FtsZ (6UNX) Z-Ring & FtsK / ParABS (2IUU) Motor!
  // -------------------------------------------------------------------------
  function buildBinaryFissionEcoli(T: ReturnType<typeof buildPdbTemplates>) {
    // 2A. Deformable Cutaway E. coli Rod (Outer Jade Envelope + Warm Inner Cytoplasm + Cutaway Rims)
    const ecOuterMat = cinemaShellMat('ftsz_ring', '#289c78', '#a8ffdf', {
      attenCol: '#14664e',
      attenDist: 4.0,
      sssColor: '#56ffc6',
      sssIntensity: 0.28,
      iridescence: 0.44,
      thickness: 0.40,
      roughness: 0.14,
      sheenColor: '#b8ffea',
    });
    const ecInnerMat = reg(
      'ftsz_ring',
      phys({
        color: '#20384e',
        emissive: '#0c2438',
        emissiveIntensity: 0.32,
        roughness: 0.42,
        side: THREE.BackSide,
      })
    );
    const ecRimMat = reg(
      'ftsz_ring',
      new THREE.MeshStandardMaterial({
        color: '#ffd86b',
        emissive: '#78500a',
        emissiveIntensity: 0.46,
        roughness: 0.30,
        side: THREE.DoubleSide,
      })
    );

    const PHI_OPEN_START = 0.38 * Math.PI;
    const PHI_OPEN_SPAN = 1.24 * Math.PI;
    const PHI_LID_START = -0.38 * Math.PI;
    const PHI_LID_SPAN = 0.76 * Math.PI;

    const oOpen = makeDeformableShell('x', 42, 30, PHI_OPEN_START, PHI_OPEN_SPAN);
    const oClosed = makeDeformableShell('x', 28, 22, PHI_LID_START, PHI_LID_SPAN);
    const iOpen = makeDeformableShell('x', 36, 26, PHI_OPEN_START, PHI_OPEN_SPAN);
    const rA = makeCutawayRim('x', 42, PHI_OPEN_START, 0.16);
    const rB = makeCutawayRim('x', 42, PHI_OPEN_START + PHI_OPEN_SPAN, 0.16);

    dyn.ecoliOuterOpen = oOpen;
    dyn.ecoliOuterClosed = oClosed;
    dyn.ecoliInnerOpen = iOpen;
    dyn.ecoliRimA = rA;
    dyn.ecoliRimB = rB;

    const moOpen = new THREE.Mesh(oOpen.geo, ecOuterMat);
    const moClosed = new THREE.Mesh(oClosed.geo, ecOuterMat);
    const miOpen = new THREE.Mesh(iOpen.geo, ecInnerMat);
    const mrA = new THREE.Mesh(rA.geo, ecRimMat);
    const mrB = new THREE.Mesh(rB.geo, ecRimMat);
    moClosed.visible = !cutOn;
    cutOpenMeshes.push(mrA, mrB);
    cutClosedMeshes.push(moClosed);
    fissionGroup.add(moOpen, moClosed, miOpen, mrA, mrB);

    // 2B. Real PDB FtsZ GTPase Z-Ring (6UNX) — 24 Real Cryo-EM Monomers + Luminous Constriction Ring!
    const ftszRingGroup = new THREE.Group();
    fissionGroup.add(ftszRingGroup);
    dyn.ftszRingGroup = ftszRingGroup;
    dyn.rotors.push({ obj: ftszRingGroup, axis: 'x', speed: 0.75 });

    const ftszMat = protMat('ftsz_ring', {
      emissive: '#0e7894',
      emissiveIntensity: 0.56,
      roughness: 0.22,
      clearcoat: 0.58,
    });
    dyn.ftszMonomers = [];
    const N_Z = 24;
    for (let i = 0; i < N_Z; i++) {
      const ang = (i / N_Z) * Math.PI * 2;
      const zOff = i % 2 === 0 ? -0.11 : +0.11;
      const m = new THREE.Mesh(T.geoFtsz, ftszMat);
      m.scale.setScalar(0.84);
      ftszRingGroup.add(m);
      dyn.ftszMonomers.push({ mesh: m, ang, zOff });
      placed++;
    }
    const ftszHalo = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.062, 12, 48),
      reg(
        'ftsz_ring',
        phys({
          color: '#52f6ff',
          emissive: '#14b4db',
          emissiveIntensity: 0.84,
          roughness: 0.18,
          clearcoat: 0.70,
        })
      )
    );
    ftszHalo.rotation.y = Math.PI * 0.5;
    ftszRingGroup.add(ftszHalo);
    dyn.ftszHalo = ftszHalo;

    // 2C. Replicating Circular E. coli Chromosomes (`oriC` → `ter`) + ParABS/FtsK (`2IUU`) Segregation Motors!
    const buildCircularNucleoid = (tintHex: string, emHex: string) => {
      const grp = new THREE.Group();
      const B_DNA = balls('par_segregation', grp);
      const ctrl: THREE.Vector3[] = [];
      const N = 26;
      for (let i = 0; i <= N; i++) {
        const a = (i / N) * Math.PI * 2;
        const r = 0.72 + 0.18 * Math.sin(a * 3.0);
        ctrl.push(V(Math.cos(a) * r * 1.18, Math.sin(a) * r * 0.86, 0.24 * Math.sin(a * 2.0)));
      }
      const cv = new THREE.CatmullRomCurve3(ctrl, true);
      const pts = cv.getSpacedPoints(120);
      dna.emitDNA(B_DNA, pts, { nm: 0.068, deterministicBases: true });
      B_DNA.done();

      // Smooth outer supercoiled luminous ribbon accent so the circular genome reads unmistakably from overview!
      const ribMat = reg(
        'par_segregation',
        phys({
          color: tintHex,
          emissive: emHex,
          emissiveIntensity: 0.42,
          roughness: 0.28,
          transparent: true,
          opacity: 0.72,
        })
      );
      grp.add(new THREE.Mesh(new THREE.TubeGeometry(cv, 72, 0.068, 8, true), ribMat));
      placed += 8;
      return grp;
    };

    dyn.ecoliDnaL = buildCircularNucleoid('#54c4ff', '#0e5894');
    dyn.ecoliDnaR = buildCircularNucleoid('#ffd266', '#8a520c');
    fissionGroup.add(dyn.ecoliDnaL, dyn.ecoliDnaR);

    // Replication theta-bridge linking nascent circular chromosomes before terminus decatenation
    dyn.ecoliThetaBridge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.055, 2.0, 10),
      reg('par_segregation', phys({ color: '#7ef2ff', emissive: '#1e88a8', emissiveIntensity: 0.56, roughness: 0.26 }))
    );
    dyn.ecoliThetaBridge.rotation.z = Math.PI * 0.5;
    fissionGroup.add(dyn.ecoliThetaBridge);

    // Real PDB FtsK Hexameric DNA Translocase Motor (2IUU) seated right in the closing septum pore + polar ParB-parS clamps!
    const ftskMat = protMat('par_segregation', {
      emissive: '#8f5208',
      emissiveIntensity: 0.46,
      roughness: 0.24,
      clearcoat: 0.56,
    });
    const parMotorCenter = new THREE.Group();
    const ftskMesh = new THREE.Mesh(T.geoFtsk, ftskMat);
    ftskMesh.scale.setScalar(0.76);
    ftskMesh.rotation.y = Math.PI * 0.5;
    parMotorCenter.add(ftskMesh);
    fissionGroup.add(parMotorCenter);
    dyn.parMotorCenter = parMotorCenter;
    dyn.rotors.push({ obj: parMotorCenter, axis: 'x', speed: -1.15 });

    const makePolarParClamp = () => {
      const grp = new THREE.Group();
      const clamp = new THREE.Mesh(T.geoFtsk, ftskMat);
      clamp.scale.setScalar(0.46);
      clamp.rotation.y = Math.PI * 0.5;
      grp.add(clamp);
      // Glowing oriC parS polar anchor bead
      const ori = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 12),
        reg('par_segregation', phys({ color: '#ffe878', emissive: '#ffaa22', emissiveIntensity: 0.72, roughness: 0.20 }))
      );
      grp.add(ori);
      placed += 4;
      return grp;
    };
    dyn.parPolarL = makePolarParClamp();
    dyn.parPolarR = makePolarParClamp();
    fissionGroup.add(dyn.parPolarL, dyn.parPolarR);

    // Subtle floating badge below the companion E. coli rod
    const ecCv = document.createElement('canvas');
    ecCv.width = 512;
    ecCv.height = 76;
    const eg = ecCv.getContext('2d')!;
    eg.clearRect(0, 0, 512, 76);
    eg.font = '700 24px system-ui, -apple-system, sans-serif';
    eg.textAlign = 'center';
    eg.fillStyle = '#56ffe0';
    eg.fillText('E. COLI BINARY FISSION', 256, 30);
    eg.font = '600 18px system-ui, -apple-system, sans-serif';
    eg.fillStyle = '#d4f2ff';
    eg.fillText('FtsZ Z-Ring (6UNX) · FtsK / ParABS (2IUU)', 256, 60);
    const ecTex = new THREE.CanvasTexture(ecCv);
    ecTex.colorSpace = THREE.SRGBColorSpace;
    const ecBadge = new THREE.Mesh(
      new THREE.PlaneGeometry(3.85, 0.57),
      reg(
        'ftsz_ring',
        new THREE.MeshStandardMaterial({
          map: ecTex,
          emissive: '#ffffff',
          emissiveMap: ecTex,
          emissiveIntensity: 0.72,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    ecBadge.position.set(0, -2.26, 0.8);
    fissionGroup.add(ecBadge);
    placed += 4;
  }

  // -------------------------------------------------------------------------
  // 3. Build Always-Visible Circular Molecular Division & Crossing-Over Inset
  //    Showcases real PDB condensin (6YVU), cohesin (6WG3), separase (7NJ1),
  //    kinetochore (3VKH), 4-way Holliday junction (rad51 5H1B + spo11 2Q2E +
  //    sycp3 4CPC + chiasma/bivalent), & atomic DNA base pairs (A=T / G≡C · Mg²⁺)!
  //    ZERO edge clipping — every element & plaque strictly within r <= 1.88 < 2.22!
  // -------------------------------------------------------------------------
  function buildMolecularInset(T: ReturnType<typeof buildPdbTemplates>) {
    insetGroup.position.copy(INS0);
    insetGroup.rotation.set(0.05, -0.14, 0);

    const R_RING = 2.22;

    // Outer metallic-glow optical magnifier rim + translucent dark-navy glass disc
    const ringMat = reg(
      'holliday',
      phys({
        color: '#80e6ff',
        emissive: '#1e6e94',
        emissiveIntensity: 0.48,
        roughness: 0.20,
        metalness: 0.26,
        clearcoat: 0.72,
      })
    );
    insetGroup.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.044, 16, 72), ringMat));

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 64),
      reg(
        'dna_basepair',
        phys({
          color: '#091224',
          roughness: 0.16,
          transparent: true,
          opacity: 0.62,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.18;
    insetGroup.add(glassDisc);

    // Subtle crisp quadrant hairlines strictly inside the circle
    const S_DIV = sculpt('dna_basepair', insetGroup, { roughness: 0.34, emissive: '#223859', emissiveIntensity: 0.35 });
    S_DIV.stick(V(0, -0.10, -0.06), V(0, 1.18, -0.06), 0.012, col('#6a86ad'), col('#6a86ad'));
    S_DIV.stick(V(-1.72, -0.10, -0.06), V(+1.72, -0.10, -0.06), 0.012, col('#6a86ad'), col('#6a86ad'));
    S_DIV.done();

    // --- UPPER-LEFT QUADRANT: SMC Checkpoint Nanomachines (Condensin 6YVU, Cohesin 6WG3, Separase 7NJ1, Kinetochore 3VKH) ---
    const I_COND = molBatch('condensin', T.geoCondensin, insetGroup, { emissive: '#581ea8', emissiveIntensity: 0.44 });
    I_COND.add(V(-1.12, 0.78, 0.12), qFromZ(V(0.3, 0.2, 0.9), 0.4), 0.50);
    I_COND.done();

    const I_COH = molBatch('cohesin', T.geoCohesin, insetGroup, { emissive: '#8f580a', emissiveIntensity: 0.48 });
    I_COH.add(V(-0.46, 0.78, 0.14), qFromZ(V(-0.2, 0.1, 0.96), 0.2), 0.56);
    I_COH.done();

    const I_SEP = molBatch('separase', T.geoSeparase, insetGroup, { emissive: '#1e8526', emissiveIntensity: 0.52 });
    I_SEP.add(V(-0.44, 0.26, 0.18), qFromZ(V(0.2, -0.3, 0.92), 0.8), 0.56);
    I_SEP.done();

    const I_KIN = molBatch('kinetochore', T.geoKinetochore, insetGroup, { emissive: '#8a143e', emissiveIntensity: 0.52 });
    I_KIN.add(V(-1.16, 0.24, 0.14), qFromZ(V(-0.1, 0.2, 0.95), 0.3), 0.50);
    I_KIN.done();

    // Mini green MT stub gripped by the inset Kinetochore + sister DNA duplex loop through Condensin & Cohesin
    const S_IN_MT = sculpt('spindle_mt', insetGroup, { emissive: '#127a72', emissiveIntensity: 0.48, roughness: 0.24 });
    S_IN_MT.stick(V(-1.68, 0.24, 0.14), V(-1.26, 0.24, 0.14), 0.044, col('#44f7dc'), col('#7afff0'));
    S_IN_MT.done();

    const S_IN_DNA = sculpt('sister_chromatids', insetGroup, { emissive: '#6e2812', emissiveIntensity: 0.40, roughness: 0.26 });
    S_IN_DNA.tube([V(-1.38, 0.94, 0.08), V(-1.05, 1.06, 0.14), V(-0.68, 0.82, 0.14), V(-0.26, 0.74, 0.12)], 0.032, 0.032, col('#ff8c66'), col('#ffd266'), 6, true);
    S_IN_DNA.tube([V(-1.32, 0.62, 0.06), V(-0.92, 0.54, 0.12), V(-0.52, 0.68, 0.12), V(-0.24, 0.62, 0.10)], 0.032, 0.032, col('#ff7854'), col('#ffb866'), 6, true);
    S_IN_DNA.done();
    placed += 14;

    // --- UPPER-RIGHT QUADRANT: 4-Way Recombinant Holliday DNA Junction + Rad51 (5H1B) + Spo11 (2Q2E) + SYCP3 (4CPC) ---
    const S_HJ = sculpt('holliday', insetGroup, {
      emissive: '#661e7a',
      emissiveIntensity: 0.44,
      roughness: 0.22,
      clearcoat: 0.58,
    });
    const hjCenter = V(0.84, 0.56, 0.14);
    const cMat1 = col('#ff8459');
    const cMat2 = col('#ffc466');
    const cPat1 = col('#3cb8ff');
    const cPat2 = col('#7ef5ff');

    // Four cruciform dsDNA arms meeting at a crisp glowing 4-way branch-migration cross!
    const armDirs = [
      { dir: V(-1, 0.68, 0).normalize(), cA: cMat1, cB: cMat2 }, // Top-Left (Maternal)
      { dir: V(1, 0.68, 0).normalize(), cA: cPat1, cB: cPat2 },  // Top-Right (Paternal)
      { dir: V(-1, -0.68, 0).normalize(), cA: cMat1, cB: cPat2 }, // Bottom-Left (Recombinant heteroduplex!)
      { dir: V(1, -0.68, 0).normalize(), cA: cPat1, cB: cMat2 },  // Bottom-Right (Recombinant heteroduplex!)
    ];
    armDirs.forEach(({ dir, cA, cB }, ai) => {
      const perp = V(-dir.y, dir.x, 0).normalize();
      const sA: THREE.Vector3[] = [];
      const sB: THREE.Vector3[] = [];
      for (let k = 0; k <= 10; k++) {
        const f = k / 10;
        const dist = 0.12 + f * 0.66;
        const tw = f * Math.PI * 2.4 + ai * 0.8;
        const offP = Math.cos(tw) * 0.068;
        const offZ = Math.sin(tw) * 0.068;
        const base = hjCenter.clone().addScaledVector(dir, dist);
        const pA = base.clone().addScaledVector(perp, offP).add(V(0, 0, offZ));
        const pB = base.clone().addScaledVector(perp, -offP).add(V(0, 0, -offZ));
        sA.push(pA);
        sB.push(pB);
        if (k > 0 && k < 10 && k % 2 === 0) {
          S_HJ.stick(pA, pB, 0.015, cA, cB);
        }
      }
      S_HJ.tube(sA, 0.026, 0.024, cA, cA, 6, true);
      S_HJ.tube(sB, 0.026, 0.024, cB, cB, 6, true);
    });
    // Central four-way crossover core ring (phosphodiester exchange center)
    S_HJ.ring(hjCenter, V(0, 0, 1), 0.16, 0.030, col('#f7a6ff'), 24, 6);
    S_HJ.done();

    // Real PDB Rad51 (5H1B), Spo11 (2Q2E), and SYCP3 (4CPC) seated around the Holliday junction!
    const I_RAD = molBatch('rad51', T.geoRad51, insetGroup, { emissive: '#0e8568', emissiveIntensity: 0.50 });
    I_RAD.add(V(0.56, 0.86, 0.22), qFromZ(V(0.4, 0.3, 0.86), 0.5), 0.52);
    I_RAD.done();

    const I_SPO = molBatch('spo11', T.geoSpo11, insetGroup, { emissive: '#8f1a14', emissiveIntensity: 0.50 });
    I_SPO.add(V(1.16, 0.84, 0.22), qFromZ(V(-0.3, 0.2, 0.92), 0.3), 0.46);
    I_SPO.done();

    const I_SYC = molBatch('synaptonemal', T.geoSycp3, insetGroup, { emissive: '#3e8a1e', emissiveIntensity: 0.46 });
    I_SYC.add(V(1.48, 0.44, 0.14), qFromY(V(0.1, 0.98, 0.1), 0.2), 0.56);
    I_SYC.done();

    // Mini Chiasma & Bivalent visual anchor accents inside the inset so every key is ALWAYS inspectable in any mode!
    const S_IN_CH = sculpt('chiasma', insetGroup, { emissive: '#1e6e8f', emissiveIntensity: 0.55, roughness: 0.22 });
    S_IN_CH.add(hjCenter.clone().add(V(0, 0, 0.06)), 0.15, col('#ffffff'));
    S_IN_CH.done();

    const S_IN_BIV = sculpt('bivalent', insetGroup, { emissive: '#7a3e12', emissiveIntensity: 0.42, roughness: 0.26 });
    S_IN_BIV.ring(hjCenter.clone().add(V(0, 0, -0.04)), V(0, 0, 1), 0.56, 0.018, col('#ffb470'), 32, 6);
    S_IN_BIV.done();
    placed += 18;

    // --- LOWER HALF: Atomic Watson–Crick Base Pairs (A=T Left, G≡C Right) + Phosphodiester Backbone + Catalytic Mg²⁺ ---
    const S_BP = sculpt('dna_basepair', insetGroup, { roughness: 0.22, clearcoat: 0.62 });
    const cC = col('#909eb5');
    const cH = col('#eef6ff');
    const cN = col('#4d94ff');
    const cO = col('#ff5464');
    const cP = col('#b87cff');
    const cMg = col('#4dffb8');
    const cHb = col('#7ef6ff');
    const cBond = col('#cbd6ea');

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => S_BP.add(p, r * 2, c);
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.023) => S_BP.stick(a, b, r, c1, c2);
    const makePolyRing = (cx: number, cy: number, cz: number, rad: number, sides: number, rot = 0) => {
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k < sides; k++) {
        const a = rot + (k / sides) * Math.PI * 2;
        pts.push(V(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, cz));
      }
      return pts;
    };
    const drawBasePair = (xOff: number, yOff: number, hBonds: 2 | 3) => {
      // Left phosphate-deoxyribose anchor
      const pL = V(xOff - 0.66, yOff + 0.14, 0.14);
      const oL = V(xOff - 0.56, yOff - 0.02, 0.12);
      atom(pL, 0.088, cP);
      atom(oL, 0.062, cO);
      bond(pL, oL, cP, cO, 0.024);
      // Purine double ring (6-ring + 5-ring) on left
      const pur6 = makePolyRing(xOff - 0.24, yOff, 0.12, 0.16, 6, 0);
      for (let k = 0; k < 6; k++) {
        const cK = k === 0 || k === 2 ? cN : cC;
        atom(pur6[k], 0.052, cK);
        bond(pur6[k], pur6[(k + 1) % 6], cK, cC, 0.019);
      }
      bond(oL, pur6[3], cO, cC, 0.021);
      // Pyrimidine 6-ring on right
      const pyr6 = makePolyRing(xOff + 0.26, yOff, 0.12, 0.15, 6, Math.PI / 6);
      for (let k = 0; k < 6; k++) {
        const cK = k === 1 || k === 4 ? cN : cC;
        atom(pyr6[k], 0.052, cK);
        bond(pyr6[k], pyr6[(k + 1) % 6], cK, cC, 0.019);
      }
      // Right phosphate-deoxyribose anchor
      const oR = V(xOff + 0.54, yOff + 0.02, 0.12);
      const pR = V(xOff + 0.66, yOff - 0.14, 0.14);
      atom(oR, 0.062, cO);
      atom(pR, 0.088, cP);
      bond(pyr6[0], oR, cC, cO, 0.021);
      bond(oR, pR, cO, cP, 0.024);

      // Luminous dashed Watson–Crick hydrogen bonds (2 for A=T, 3 for G≡C)!
      const ys = hBonds === 2 ? [yOff + 0.08, yOff - 0.08] : [yOff + 0.11, yOff, yOff - 0.11];
      ys.forEach(hy => {
        const aPt = V(xOff - 0.06, hy, 0.13);
        const bPt = V(xOff + 0.08, hy, 0.13);
        atom(aPt.clone().lerp(bPt, 0.5), 0.036, cH);
        bond(aPt, bPt, cHb, cHb, 0.018);
      });
    };

    drawBasePair(-0.82, -0.66, 2); // A=T (2 H-bonds)
    drawBasePair(+0.82, -0.66, 3); // G≡C (3 H-bonds)

    // Central glowing divalent catalytic Mg²⁺ ion coordinated between the phosphate backbones!
    const pMg = V(0.0, -0.66, 0.18);
    atom(pMg, 0.128, cMg);
    bond(pMg, V(-0.16, -0.78, 0.14), cMg, cO, 0.022);
    bond(pMg, V(+0.16, -0.54, 0.14), cMg, cO, 0.022);
    atom(V(-0.16, -0.78, 0.14), 0.056, cO);
    atom(V(+0.16, -0.54, 0.14), 0.056, cO);
    S_BP.done();
    placed += 24;

    // --- ZERO-CLIPPING INTERNAL PLAQUES (strictly within r <= 1.85 << 2.22!) ---
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 92;
    const tg = topCv.getContext('2d')!;
    tg.clearRect(0, 0, 512, 92);
    tg.font = '700 22px system-ui, -apple-system, sans-serif';
    tg.textAlign = 'center';
    tg.fillStyle = '#ffd46b';
    tg.fillText('SMC CHECKPOINT', 142, 34);
    tg.font = '600 16px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#dce8ff';
    tg.fillText('6YVU · 6WG3 · 7NJ1 · 3VKH', 142, 62);
    tg.font = '700 22px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#7effdc';
    tg.fillText('HOLLIDAY JUNCTION', 370, 34);
    tg.font = '600 16px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#dce8ff';
    tg.fillText('Rad51 5H1B · Spo11 2Q2E', 370, 62);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(2.26, 0.40),
      reg(
        'holliday',
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
    topLbl.position.set(0, 1.44, 0.16);
    insetGroup.add(topLbl);

    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 84;
    const bg = botCv.getContext('2d')!;
    bg.clearRect(0, 0, 512, 84);
    bg.font = '700 20px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'center';
    bg.fillStyle = '#92d8ff';
    bg.fillText('A=T (2 H-Bonds)  ·  Mg²⁺  ·  G≡C (3 H-Bonds)', 256, 26);
    const atomsLegend: Array<[string, string]> = [
      ['C', '#909eb5'],
      ['H', '#eef6ff'],
      ['N', '#4d94ff'],
      ['O', '#ff5464'],
      ['P', '#b87cff'],
      ['Mg²⁺', '#4dffb8'],
    ];
    bg.font = '700 19px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 46 + idx * 72;
      bg.beginPath();
      bg.arc(bx, 60, 8.5, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#e8f0ff';
      bg.fillText(sym, bx + 13, 61);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(2.14, 0.35),
      reg(
        'dna_basepair',
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
    botLbl.position.set(0, -1.42, 0.16);
    insetGroup.add(botLbl);
  }

  // -------------------------------------------------------------------------
  // Dynamic Timeline & Mode Kinematics Engine (`applyTimelineState`)
  // Smoothly updates ALL geometry, chromosome positions, spindle MTs, cohesin
  // cleavage, recombinant chiasmata colors, cytokinesis furrows, FtsZ Z-ring,
  // and HUD phase readout for any `(mode, phase ∈ [0, 1])`!
  // -------------------------------------------------------------------------
  const stageMeta = (m: ModeKey, t: number): { label: string; ploidy: string; badge: string } => {
    if (m === 'mitosis') {
      if (t < 0.16) return { label: 'Interphase (G₂)', ploidy: '2n = 4 (8 chromatids)', badge: 'Mitosis · 2n → 2×2n' };
      if (t < 0.36) return { label: 'Prophase / Prometaphase', ploidy: '2n = 4 (condensing)', badge: 'Mitosis · 2n → 2×2n' };
      if (t < 0.55) return { label: 'Metaphase (SAC Checkpoint)', ploidy: '2n = 4 (8 chromatids)', badge: 'Mitosis · 2n → 2×2n' };
      if (t < 0.74) return { label: 'Anaphase (Cohesin Cleaved)', ploidy: '2×(2n = 4) separating', badge: 'Mitosis · 2n → 2×2n' };
      if (t < 0.88) return { label: 'Telophase (Nuclei Reforming)', ploidy: '2 × 2n = 4 daughters', badge: 'Mitosis · 2n → 2×2n' };
      return { label: 'Cytokinesis (Clonal Split)', ploidy: '2 identical 2n = 4 cells', badge: 'Mitosis · 2n → 2×2n' };
    }
    if (m === 'meiosis') {
      if (t < 0.30) return { label: 'Prophase I (Synapsis & Crossing-Over)', ploidy: '2n = 4 (2 bivalents)', badge: 'Meiosis · 2n → 4×1n' };
      if (t < 0.45) return { label: 'Metaphase I (Independent Assortment)', ploidy: '2n = 4 (recombinant)', badge: 'Meiosis · 2n → 4×1n' };
      if (t < 0.60) return { label: 'Anaphase I → Telophase I', ploidy: '2 × 1n = 2 dyads', badge: 'Meiosis · 2n → 4×1n' };
      if (t < 0.77) return { label: 'Metaphase II (Dual Spindles)', ploidy: '2 × 1n = 2 (4 chromatids)', badge: 'Meiosis · 2n → 4×1n' };
      if (t < 0.89) return { label: 'Anaphase II (Centromeres Split)', ploidy: '4 × 1n = 2 separating', badge: 'Meiosis · 2n → 4×1n' };
      return { label: 'Telophase II / 4 Unique Gametes', ploidy: '4 unique 1n = 2 gametes', badge: 'Meiosis · 2n → 4×1n' };
    }
    // Binary Fission
    if (t < 0.22) return { label: 'oriC Initiation (Theta Fork)', ploidy: '1n circular (4.6 Mbp)', badge: 'Binary Fission · E. coli' };
    if (t < 0.48) return { label: 'DNA Replication & ParABS Partition', ploidy: '2× oriC migrating', badge: 'Binary Fission · E. coli' };
    if (t < 0.72) return { label: 'FtsZ Z-Ring Mid-Cell Assembly', ploidy: '2× 1n circular nucleoids', badge: 'Binary Fission · E. coli' };
    if (t < 0.88) return { label: 'Septal Peptidoglycan Constriction', ploidy: 'FtsK resolving ter', badge: 'Binary Fission · E. coli' };
    return { label: 'Cytokinesis (2 Clonal Rods)', ploidy: '2 identical 1n E. coli', badge: 'Binary Fission · E. coli' };
  };

  const TICKS_BY_MODE: Record<ModeKey, Array<[string, number]>> = {
    mitosis: [
      ['Interphase', 0.06],
      ['Prophase', 0.26],
      ['Metaphase', 0.48],
      ['Anaphase', 0.65],
      ['Telophase', 0.82],
      ['Cytokinesis', 0.96],
    ],
    meiosis: [
      ['Cross-Over', 0.20],
      ['Meta I', 0.38],
      ['Ana I', 0.52],
      ['Meta II', 0.70],
      ['Ana II', 0.84],
      ['4×1n Gametes', 0.96],
    ],
    fission: [
      ['oriC Init', 0.08],
      ['Replicate', 0.30],
      ['ParABS', 0.50],
      ['FtsZ Ring', 0.68],
      ['Septation', 0.84],
      ['2× Clones', 0.96],
    ],
  };

  // Update the Prokaryotic Binary Fission *E. coli* kinematics for timeline parameter tf in [0, 1]
  function updateEcoliKinematics(tf: number) {
    const elong = smoothstep(0.05, 0.85, tf);
    const pinch = smoothstep(0.45, 0.97, tf) * 0.92;
    const halfLen = lerp(2.25, 4.15, elong);
    const rOuter = lerp(1.78, 1.62, elong);

    dyn.ecoliOuterOpen?.update(halfLen, rOuter, pinch, 0.24);
    dyn.ecoliOuterClosed?.update(halfLen, rOuter, pinch, 0.24);
    dyn.ecoliInnerOpen?.update(halfLen - 0.14, rOuter - 0.14, pinch, 0.24);
    dyn.ecoliRimA?.update(halfLen, rOuter, pinch, 0.24);
    dyn.ecoliRimB?.update(halfLen, rOuter, pinch, 0.24);

    // Waist radius right at x=0 drives the constricting FtsZ Z-ring (6UNX)!
    const waistR = Math.max(0.28, (rOuter - 0.18) * (1 - pinch));
    const zAppear = smoothstep(0.14, 0.50, tf);
    const fullClosedZ = tf > 0.48;
    if (dyn.ftszRingGroup && dyn.ftszMonomers && dyn.ftszHalo) {
      dyn.ftszRingGroup.scale.setScalar(1.0);
      dyn.ftszMonomers.forEach(({ mesh, ang, zOff }) => {
        const rrRing = Math.max(0.26, waistR - 0.05);
        mesh.position.set(zOff, Math.sin(ang) * rrRing, Math.cos(ang) * rrRing);
        mesh.rotation.set(ang, 0, Math.PI * 0.5);
        // During early oriC replication, nucleate FtsZ along back/top/bottom arcs so FtsK & theta DNA stay crystal clear!
        const frontArc = Math.cos(ang) > 0.35;
        mesh.visible = fullClosedZ || !frontArc;
        mesh.scale.setScalar(lerp(0.56, 0.88, zAppear) * Math.max(0.52, Math.min(1.0, rrRing / 1.15)));
      });
      dyn.ftszHalo.visible = tf > 0.42;
      dyn.ftszHalo.scale.set(waistR, waistR, 1);
    }

    // Replicating circular chromosomes separate symmetrically via ParABS/FtsK!
    const sep = smoothstep(0.12, 0.86, tf);
    const dnaX = lerp(0.18, halfLen * 0.52, sep);
    if (dyn.ecoliDnaL && dyn.ecoliDnaR) {
      dyn.ecoliDnaL.position.set(-dnaX, 0, 0);
      dyn.ecoliDnaR.position.set(+dnaX, 0, 0);
      const sDna = lerp(0.76, 0.94, smoothstep(0.0, 0.40, tf));
      dyn.ecoliDnaL.scale.setScalar(sDna);
      dyn.ecoliDnaR.scale.setScalar(sDna);
    }
    if (dyn.ecoliThetaBridge) {
      const bridgeVis = tf < 0.78;
      dyn.ecoliThetaBridge.visible = bridgeVis;
      dyn.ecoliThetaBridge.scale.set(1, Math.max(0.2, dnaX * 0.9), 1);
    }
    if (dyn.parMotorCenter) {
      const motorScale = lerp(0.55, 1.05, smoothstep(0.25, 0.65, tf)) * lerp(1.0, 0.45, smoothstep(0.86, 1.0, tf));
      dyn.parMotorCenter.scale.setScalar(motorScale);
    }
    if (dyn.parPolarL && dyn.parPolarR) {
      const polX = lerp(0.85, halfLen * 0.78, sep);
      dyn.parPolarL.position.set(-polX, 0.12, 0.15);
      dyn.parPolarR.position.set(+polX, -0.12, 0.15);
    }
  }

  function updateEukaryoticKinematics(m: 'mitosis' | 'meiosis', t: number) {
    const isMei = m === 'meiosis';
    const isM2 = isMei && t > 0.60;

    // 1. Cell Cortex & Contractile Rings
    if (!isM2) {
      dyn.cortexMainGroup.visible = true;
      dyn.cortexM2Group.visible = false;
      dyn.ringM2Left.visible = false;
      dyn.ringM2Right.visible = false;

      const elong = isMei ? smoothstep(0.25, 0.56, t) : smoothstep(0.45, 0.88, t);
      const pinch = isMei ? smoothstep(0.46, 0.60, t) * 0.88 : smoothstep(0.70, 0.97, t) * 0.91;
      const halfLen = lerp(4.55, 6.20, elong);
      const rBase = lerp(4.15, 3.85, elong);
      dyn.cortexMainOpen.update(halfLen, rBase, pinch, 0.27);
      dyn.cortexMainClosed.update(halfLen, rBase, pinch, 0.27);
      dyn.cortexMainRimA.update(halfLen, rBase, pinch, 0.27);
      dyn.cortexMainRimB.update(halfLen, rBase, pinch, 0.27);

      const waistR = Math.max(0.36, rBase * (1 - pinch));
      dyn.ringMain.visible = true;
      const ringScaleY = (waistR * 0.96) / (dyn.ringMain.userData.baseR || 3.6);
      const ringScaleX = lerp(0.85, 1.35, smoothstep(0.55, 0.95, pinch));
      dyn.ringMain.scale.set(ringScaleX, ringScaleY, ringScaleY);
      if (dyn.ringMain.userData.frontArc) {
        dyn.ringMain.userData.frontArc.visible = !cutOn || waistR < 0.78;
      }
    } else {
      // Meiosis II: 2 daughter cells vertically elongate and pinch into 4 separate haploid gametes!
      dyn.cortexMainGroup.visible = false;
      dyn.cortexM2Group.visible = true;
      dyn.ringMain.visible = false;
      dyn.ringM2Left.visible = true;
      dyn.ringM2Right.visible = true;

      const t2 = clamp01((t - 0.60) / 0.40);
      const elong2 = smoothstep(0.05, 0.72, t2);
      const pinch2 = smoothstep(0.48, 0.96, t2) * 0.90;
      const halfY = lerp(2.85, 4.18, elong2);
      const r2 = lerp(2.75, 2.38, elong2);

      dyn.cortexM2LeftOpen.update(halfY, r2, pinch2, 0.26);
      dyn.cortexM2LeftClosed.update(halfY, r2, pinch2, 0.26);
      dyn.cortexM2RightOpen.update(halfY, r2, pinch2, 0.26);
      dyn.cortexM2RightClosed.update(halfY, r2, pinch2, 0.26);
      dyn.cortexM2Rims.forEach(r => r.update(halfY, r2, pinch2, 0.26));

      const w2 = Math.max(0.28, r2 * (1 - pinch2));
      const s2 = (w2 * 0.96) / (dyn.ringM2Left.userData.baseR || 2.4);
      const sy2 = lerp(0.80, 1.30, smoothstep(0.50, 0.95, pinch2));
      dyn.ringM2Left.scale.set(s2, sy2, s2);
      dyn.ringM2Right.scale.set(s2, sy2, s2);
      if (dyn.ringM2Left.userData.frontArc) dyn.ringM2Left.userData.frontArc.visible = !cutOn || w2 < 0.62;
      if (dyn.ringM2Right.userData.frontArc) dyn.ringM2Right.userData.frontArc.visible = !cutOn || w2 < 0.62;
    }

    // 2. Nuclear Envelope Dissolve & Reform
    const centerDissolve = isMei ? smoothstep(0.08, 0.22, t) : smoothstep(0.14, 0.30, t);
    const centerVis = 1 - centerDissolve;
    dyn.nucCenter.visible = centerVis > 0.04;
    dyn.nucCenter.scale.setScalar(lerp(1.0, 1.18, centerDissolve));
    dyn.nucCenterMat.opacity = 0.46 * centerVis;

    // Mitosis / Meiosis I daughter nuclei
    const reform1 = isMei
      ? smoothstep(0.52, 0.59, t) * (1 - smoothstep(0.60, 0.66, t))
      : smoothstep(0.75, 0.94, t);
    // Dispersed phosphorylated nuclear lamina vesicles only hover inside the open undivided cell before daughter nuclei reform!
    dyn.nucFragments.visible = !isM2 && centerDissolve > 0.15 && reform1 < 0.22;
    dyn.nucFragments.scale.setScalar(lerp(0.82, 1.00, centerDissolve));
    const showMitNuc = reform1 > 0.03;
    dyn.nucMitL.visible = showMitNuc;
    dyn.nucMitR.visible = showMitNuc;
    if (showMitNuc) {
      const nx = lerp(2.65, 3.15, reform1);
      dyn.nucMitL.position.set(-nx, 0, 0);
      dyn.nucMitR.position.set(+nx, 0, 0);
      dyn.nucMitL.scale.setScalar(lerp(0.35, 1.0, reform1));
      dyn.nucMitR.scale.setScalar(lerp(0.35, 1.0, reform1));
      dyn.nucMitMat.opacity = 0.45 * reform1;
    }

    // Meiosis II 4 haploid gamete nuclear envelopes
    const reform4 = isMei ? smoothstep(0.84, 0.97, t) : 0;
    dyn.nucGametes.forEach(ng => {
      ng.visible = reform4 > 0.03;
      if (ng.visible) ng.scale.setScalar(lerp(0.32, 1.0, reform4));
    });
    dyn.nucGamMat.opacity = 0.48 * reform4;

    // 3. Centrosomes & Spindle Pole Positions
    const poleSep = isMei ? smoothstep(0.05, 0.40, t) : smoothstep(0.05, 0.38, t);
    const anaPoleStretch = isMei ? smoothstep(0.45, 0.58, t) : smoothstep(0.55, 0.86, t);
    const poleX = lerp(1.15, 3.65, poleSep) + lerp(0, 1.05, anaPoleStretch);
    const poleY = lerp(2.25, 0, poleSep);
    const poleL = V(-poleX, poleY, 0);
    const poleR = V(+poleX, poleY, 0);

    dyn.centL.visible = !isM2;
    dyn.centR.visible = !isM2;
    dyn.centL.position.copy(poleL);
    dyn.centR.position.copy(poleR);

    // Meiosis II 4 Centrosomes (2 vertical spindles!)
    const t2 = isM2 ? clamp01((t - 0.60) / 0.40) : 0;
    const m2PoleY = lerp(1.45, 3.05, smoothstep(0.02, 0.85, t2));
    const m2Poles = [
      V(-3.10, +m2PoleY, 0), // 0: Top-Left
      V(-3.10, -m2PoleY, 0), // 1: Bottom-Left
      V(+3.10, +m2PoleY, 0), // 2: Top-Right
      V(+3.10, -m2PoleY, 0), // 3: Bottom-Right
    ];
    dyn.centM2.forEach((c, idx) => {
      c.visible = isM2;
      c.position.copy(m2Poles[idx]);
    });

    // 4. Chromosomes (8 Chromatids), Cohesin, Separase & Recombinant Color Swapping!
    const condense = smoothstep(0.02, 0.30, t);
    const armScaleY = lerp(1.22, 1.0, condense);
    const armScaleXZ = lerp(0.76, 1.0, condense);
    const recombMix = isMei ? smoothstep(0.14, 0.28, t) : 0;

    // Show Meiosis I recombination apparatus (bivalents, synaptonemal ladder, Spo11, Rad51, chiasmata)
    const synVis = isMei && t <= 0.46;
    dyn.meiosisRecombGroup.visible = synVis;
    if (synVis) {
      const synAppear = smoothstep(0.04, 0.16, t) * (1 - smoothstep(0.30, 0.44, t));
      const chAppear = smoothstep(0.12, 0.24, t) * (1 - smoothstep(0.42, 0.46, t));
      dyn.synapUpper.visible = synAppear > 0.04;
      dyn.synapLower.visible = synAppear > 0.04;
      dyn.synapUpper.scale.set(lerp(1.4, 1.0, synAppear), 1, 1);
      dyn.synapLower.scale.set(lerp(1.4, 1.0, synAppear), 1, 1);
      dyn.chiasmaUpper.visible = chAppear > 0.04;
      dyn.chiasmaLower.visible = chAppear > 0.04;
      dyn.chiasmaUpper.scale.setScalar(lerp(0.4, 1.05, chAppear));
      dyn.chiasmaLower.scale.setScalar(lerp(0.4, 1.05, chAppear));
      dyn.spo11Nodes.forEach(n => { n.visible = t < 0.34; n.scale.setScalar(0.68 * smoothstep(0.04, 0.14, t)); });
      dyn.rad51Nodes.forEach(n => { n.visible = t > 0.08 && t < 0.42; n.scale.setScalar(0.76 * smoothstep(0.08, 0.20, t)); });
      dyn.bivalentHalos.forEach(h => { h.visible = true; });
    }

    const mitRowsY = [+1.88, +0.64, -0.64, -1.88];
    const anaMit = smoothstep(0.54, 0.80, t);
    const anaMei1 = smoothstep(0.45, 0.59, t);
    const anaMei2 = isM2 ? smoothstep(0.40, 0.86, t2) : 0;

    // Track live centromere positions for attaching dynamic k-fibers, cohesin, and separase!
    const chrCenters: THREE.Vector3[] = [V(), V(), V(), V()];
    const kinAttachPts: THREE.Vector3[] = [];
    const kinPoleTargets: THREE.Vector3[] = [];

    const cTmpBase = new THREE.Color();
    const cTmpSwap = new THREE.Color();
    const eTmpBase = new THREE.Color();
    const eTmpSwap = new THREE.Color();

    dyn.chromatids.forEach((ch, idx) => {
      // Update recombinant distal tip color smoothly in Meiosis!
      cTmpBase.set(ch.baseHex);
      cTmpSwap.set(ch.isRecomb ? ch.swapHex : ch.baseHex);
      eTmpBase.set(ch.emissiveBase);
      eTmpSwap.set(ch.isRecomb ? ch.emissiveSwap : ch.emissiveBase);
      ch.tipMat.color.copy(cTmpBase).lerp(cTmpSwap, recombMix);
      ch.tipMat.emissive.copy(eTmpBase).lerp(eTmpSwap, recombMix);

      // Condensin compaction pulse along chromatid arms
      ch.upperArm.scale.set(armScaleXZ, armScaleY, armScaleXZ);
      ch.lowerArm.scale.set(armScaleXZ, armScaleY, armScaleXZ);
      ch.condensinMeshes.forEach(cm => cm.scale.setScalar(lerp(0.32, 0.50, condense)));

      const sSign = ch.sisterIdx === 0 ? -1 : +1;

      if (!isMei) {
        // --- MITOSIS KINEMATICS (2n=4 -> 2 identical 2n=4 daughters) ---
        const rowY = mitRowsY[ch.chrIdx];
        const align = smoothstep(0.20, 0.44, t);
        // Prophase scattered position -> Metaphase equator (x=0) -> Anaphase poleward pull (x=±3.05)
        const scatterX = (ch.chrIdx % 2 === 0 ? -0.95 : +0.95) * (1 - align);
        const scatterY = rowY + (ch.chrIdx === 0 ? -0.4 : ch.chrIdx === 3 ? 0.4 : 0) * (1 - align);
        const scatterZ = (ch.chrIdx % 2 === 0 ? 0.35 : -0.35) * (1 - align);

        const sisterGap = lerp(0.17, 3.05, anaMit);
        const px = scatterX + sSign * sisterGap;
        const py = lerp(scatterY, rowY * 0.62, anaMit);
        const pz = scatterZ + (ch.chrIdx % 2 === 0 ? 0.14 : -0.14) * (1 - anaMit * 0.5);

        ch.root.position.set(px, py, pz);
        ch.root.rotation.set(0, 0, (1 - align) * (ch.chrIdx - 1.5) * 0.25);

        // Iconic X-shape in Metaphase -> trailing V-chevron arms during Anaphase poleward haul!
        const xSpread = 0.22 * (1 - anaMit) + 0.52 * anaMit;
        ch.upperArm.rotation.z = sSign * xSpread;
        ch.lowerArm.rotation.z = -sSign * xSpread;

        ch.kinetochoreMesh.position.set(sSign * 0.22, 0, 0.05);
        ch.kinetochoreMesh.rotation.set(0, sSign < 0 ? -Math.PI * 0.5 : Math.PI * 0.5, 0);

        if (ch.sisterIdx === 0) chrCenters[ch.chrIdx].set(scatterX, py, pz);
        kinAttachPts[idx] = V(px + sSign * 0.24, py, pz);
        kinPoleTargets[idx] = sSign < 0 ? poleL : poleR;
      } else if (!isM2) {
        // --- MEIOSIS I KINEMATICS (Homologous Bivalents -> Recombinant Homologs Separate!) ---
        // Pair 1 (M1 chrIdx=0, P1 chrIdx=1) at top (+1.18); Pair 2 (M2 chrIdx=2, P2 chrIdx=3) at bottom (-1.18)
        // Independent Assortment: Pair 1 has Maternal Left / Paternal Right; Pair 2 has Paternal Left / Maternal Right!
        const isPair1 = ch.chrIdx < 2;
        const pairY = isPair1 ? +1.18 : -1.18;
        const homologSide =
          ch.chrIdx === 0 ? -1 : // M1 goes Left
          ch.chrIdx === 1 ? +1 : // P1 goes Right
          ch.chrIdx === 3 ? -1 : // P2 goes Left (Independent assortment!)
          +1;                    // M2 goes Right

        const synapClose = smoothstep(0.06, 0.20, t);
        const homDist = lerp(1.15, 0.56, synapClose) + lerp(0, 2.55, anaMei1);
        const px = homologSide * homDist + sSign * 0.16;
        const py = lerp(pairY, pairY * 0.72, anaMei1);
        const pz = isPair1 ? 0.06 : -0.06;

        ch.root.position.set(px, py, pz);
        ch.root.rotation.set(0, 0, 0);
        // Inner non-sister arms tilt toward each other across the chiasma in Prophase I / Metaphase I!
        const chTilt = ch.isRecomb ? (1 - anaMei1) * 0.34 : 0.16;
        ch.upperArm.rotation.z = sSign * 0.18;
        ch.lowerArm.rotation.z = ch.isRecomb ? -homologSide * chTilt : -sSign * (0.18 + 0.30 * anaMei1);

        // Co-oriented sister kinetochores BOTH face their homolog's pole in Meiosis I!
        ch.kinetochoreMesh.position.set(homologSide * 0.22, 0, 0.05);
        ch.kinetochoreMesh.rotation.set(0, homologSide < 0 ? -Math.PI * 0.5 : Math.PI * 0.5, 0);

        if (ch.sisterIdx === 0) chrCenters[ch.chrIdx].set(homologSide * homDist, py, pz);
        kinAttachPts[idx] = V(px + homologSide * 0.20, py, pz);
        kinPoleTargets[idx] = homologSide < 0 ? poleL : poleR;
      } else {
        // --- MEIOSIS II KINEMATICS (Dual Vertical Spindles -> 4 Unique Haploid 1n=2 Gametes!) ---
        // Left cell (-3.10) holds M1 (chrIdx=0) & P2 (chrIdx=3); Right cell (+3.10) holds P1 (chrIdx=1) & M2 (chrIdx=2)
        const inLeftCell = ch.chrIdx === 0 || ch.chrIdx === 3;
        const cellX = inLeftCell ? -3.10 : +3.10;
        const slotX = ch.chrIdx === 0 || ch.chrIdx === 1 ? -0.56 : +0.56;
        // Sister 0 pulls UP (+Y), Sister 1 pulls DOWN (-Y) inside each daughter cell!
        const yDir = ch.sisterIdx === 0 ? +1 : -1;
        const sisterSepY = lerp(0.16, 2.05, anaMei2);
        const px = cellX + slotX * lerp(1.0, 0.72, anaMei2);
        const py = yDir * sisterSepY;
        const pz = (ch.chrIdx % 2 === 0 ? 0.10 : -0.10);

        ch.root.position.set(px, py, pz);
        // Rotated 90° so chromatids align horizontally on the Metaphase II plate & pull vertically!
        ch.root.rotation.set(0, 0, Math.PI * 0.5);
        const vBend = 0.18 + 0.36 * anaMei2;
        ch.upperArm.rotation.z = -yDir * vBend;
        ch.lowerArm.rotation.z = yDir * vBend;

        ch.kinetochoreMesh.position.set(0, yDir * 0.20, 0.06);
        ch.kinetochoreMesh.rotation.set(0, 0, yDir > 0 ? 0 : Math.PI);

        if (ch.sisterIdx === 0) chrCenters[ch.chrIdx].set(cellX + slotX, 0, pz);
        kinAttachPts[idx] = V(px, py + yDir * 0.20, pz);
        const poleIdx = inLeftCell ? (yDir > 0 ? 0 : 1) : (yDir > 0 ? 2 : 3);
        kinPoleTargets[idx] = m2Poles[poleIdx];
      }
    });

    // 5. Cohesin Rings (`6WG3`) & Separase (`7NJ1`) Cleavage Choreography!
    const cleaveProgress = !isMei
      ? smoothstep(0.52, 0.64, t)
      : !isM2
        ? smoothstep(0.44, 0.54, t) * 0.45 // Meiosis I: arm cohesin cleaved, centromeric cohesin protected!
        : smoothstep(0.75, 0.86, t);       // Meiosis II: centromeric cohesin cleaved!

    dyn.cohesins.forEach((coh, i) => {
      const c = chrCenters[i];
      if (!isMei && cleaveProgress > 0.05) {
        // Snapped cohesin rings drift outward and open visibly!
        coh.mesh.position.set(c.x + (i % 2 === 0 ? -0.45 : +0.45) * cleaveProgress, c.y + 0.35 * cleaveProgress, c.z + 0.65 * cleaveProgress);
        coh.mesh.scale.setScalar(0.62 * lerp(1.0, 0.58, cleaveProgress));
        coh.mesh.rotation.set(cleaveProgress * 1.6, i * 0.9, cleaveProgress * 2.1);
      } else if (isM2 && cleaveProgress > 0.05) {
        coh.mesh.position.set(c.x, c.y + (i % 2 === 0 ? 0.32 : -0.32) * cleaveProgress, c.z + 0.55 * cleaveProgress);
        coh.mesh.scale.setScalar(0.48 * lerp(1.0, 0.52, cleaveProgress));
        coh.mesh.rotation.set(cleaveProgress * 1.4, i, cleaveProgress * 1.8);
      } else {
        coh.mesh.position.set(c.x, c.y, c.z + 0.04);
        coh.mesh.scale.setScalar(isM2 ? 0.48 : 0.62);
        coh.mesh.rotation.set(0, 0, isM2 ? Math.PI * 0.5 : 0);
      }
    });

    // Separase (`7NJ1`) darts right onto the cohesin rings right at cleavage onset!
    const sepStrike = !isMei
      ? Math.sin(Math.PI * smoothstep(0.44, 0.68, t))
      : !isM2
        ? Math.sin(Math.PI * smoothstep(0.38, 0.56, t))
        : Math.sin(Math.PI * smoothstep(0.68, 0.90, t));
    dyn.separases.forEach((sep, i) => {
      const c = chrCenters[i];
      const standbyOff = V(i % 2 === 0 ? -0.95 : +0.95, i < 2 ? 0.42 : -0.42, 0.78);
      sep.position.copy(c).addScaledVector(standbyOff, lerp(1.0, 0.24, sepStrike));
      sep.scale.setScalar(lerp(0.56, 0.78, sepStrike));
    });

    // 6. Dynamic Spindle Microtubules (`spindle_mt`) & Kinesin-5 (`1II6`)!
    const spindleAlpha = !isM2
      ? smoothstep(0.08, 0.28, t) * (1 - smoothstep(0.84, 0.96, t))
      : smoothstep(0.60, 0.68, t) * (1 - smoothstep(0.90, 0.98, t));

    // Kinetochore k-fibers
    dyn.kFibers.forEach((kf, idx) => {
      const show = !isM2 && spindleAlpha > 0.04;
      kf.mesh.visible = show;
      if (show) {
        const a = kinPoleTargets[idx];
        const b = kinAttachPts[idx];
        kf.updateEndpoints(a, b, (b.y - a.y) * 0.14, 0.08 * (idx % 2 === 0 ? 1 : -1), 0.042 * spindleAlpha);
      }
    });

    // Interpolar pole-to-pole arched microtubules + Kinesin-5 (1II6) cross-linkers
    dyn.interpolarMts.forEach((im, idx) => {
      const show = !isM2 && spindleAlpha > 0.04;
      im.mesh.visible = show;
      if (show) {
        const ang = (idx / dyn.interpolarMts.length) * Math.PI * 2;
        const archR = 1.95 + (idx % 3) * 0.52;
        im.updateEndpoints(poleL, poleR, Math.sin(ang) * archR, Math.cos(ang) * archR * 0.68 - 0.18, 0.032 * spindleAlpha);
      }
    });

    // Meiosis II vertical spindle fibers
    dyn.m2Fibers.forEach((mf, idx) => {
      const show = isM2 && spindleAlpha > 0.04;
      mf.mesh.visible = show;
      if (show) {
        if (idx < 8) {
          // Kinetochore fibers for the 8 chromatids
          const a = kinPoleTargets[idx];
          const b = kinAttachPts[idx];
          mf.updateEndpoints(a, b, 0, 0.06, 0.034 * spindleAlpha);
        } else {
          // Interpolar arcs inside Left & Right Meiosis II cells
          const j = idx - 8;
          const isL = j < 4;
          const a = isL ? m2Poles[0] : m2Poles[2];
          const b = isL ? m2Poles[1] : m2Poles[3];
          const s = (j % 4) - 1.5;
          mf.updateEndpoints(a, b, 0, Math.cos(s) * 0.55, 0.026 * spindleAlpha);
        }
      }
    });

    // Kinesin-5 (`1II6`) sliding motors docked along the antiparallel spindle midzone
    dyn.kinesin5Meshes.forEach((km, idx) => {
      const show = spindleAlpha > 0.05;
      km.visible = show;
      if (show) {
        if (!isM2) {
          const ang = (idx / dyn.kinesin5Meshes.length) * Math.PI * 2;
          const r = 1.65 + (idx % 2) * 0.48;
          km.position.set(((idx % 3) - 1) * 0.34, Math.sin(ang) * r, Math.cos(ang) * r * 0.62 - 0.12);
          km.rotation.set(0, 0, Math.PI * 0.5);
          km.scale.setScalar(0.82 * spindleAlpha);
        } else {
          const isL = idx < 6;
          const j = idx % 6;
          const ang = (j / 6) * Math.PI * 2;
          km.position.set((isL ? -3.10 : +3.10) + Math.cos(ang) * 1.05, ((j % 2) - 0.5) * 0.28, Math.sin(ang) * 0.72);
          km.rotation.set(0, 0, 0);
          km.scale.setScalar(0.62 * spindleAlpha);
        }
      }
    });
  }

  function refreshSites() {
    // Clear and populate dynamic world-local SITES for EVERY SINGLE ONE of the 20 parts!
    // Guarantee non-empty SITES in ALL 3 modes!
    Object.keys(SITES).forEach(k => { SITES[k].length = 0; });

    eukGroup.updateMatrix();
    fissionGroup.updateMatrix();
    insetGroup.updateMatrix();

    const toCell = (grp: THREE.Group, p: THREE.Vector3) => p.clone().applyMatrix4(grp.matrix);

    // Eukaryotic structures (hero at C0 in mitosis/meiosis; compact companion at SAT_UL in fission)
    SITES.cell_cortex.push(toCell(eukGroup, V(0, 3.6, 0.8)), toCell(eukGroup, V(-3.8, 2.2, 0.6)), toCell(eukGroup, V(3.8, -2.0, 0.6)));
    SITES.nuclear_env.push(toCell(eukGroup, V(-2.4, 2.2, -0.8)), toCell(eukGroup, V(2.4, -2.0, -0.8)));
    SITES.centrosome.push(toCell(eukGroup, dyn.centL.position), toCell(eukGroup, dyn.centR.position));
    SITES.spindle_mt.push(toCell(eukGroup, V(-1.8, 1.35, 0.25)), toCell(eukGroup, V(+1.8, -1.25, 0.25)));
    SITES.kinesin5.push(
      toCell(eukGroup, dyn.kinesin5Meshes[1]?.position ?? V(0, 1.7, 0.4)),
      toCell(eukGroup, dyn.kinesin5Meshes[7]?.position ?? V(0, -1.7, 0.4))
    );
    dyn.chromatids.forEach(ch => SITES.sister_chromatids.push(toCell(eukGroup, ch.root.position)));
    SITES.condensin.push(
      toCell(eukGroup, dyn.chromatids[0].root.position.clone().add(V(0, 0.55, 0.1))),
      toCell(insetGroup, V(-1.12, 0.78, 0.12))
    );
    SITES.cohesin.push(
      toCell(eukGroup, dyn.cohesins[0].mesh.position),
      toCell(eukGroup, dyn.cohesins[2].mesh.position),
      toCell(insetGroup, V(-0.46, 0.78, 0.14))
    );
    SITES.kinetochore.push(
      toCell(eukGroup, dyn.chromatids[0].root.position.clone().add(V(-0.22, 0, 0.1))),
      toCell(eukGroup, dyn.chromatids[1].root.position.clone().add(V(+0.22, 0, 0.1))),
      toCell(insetGroup, V(-1.16, 0.24, 0.14))
    );
    SITES.separase.push(
      toCell(eukGroup, dyn.separases[0].position),
      toCell(insetGroup, V(-0.44, 0.26, 0.18))
    );
    SITES.contractile_ring.push(
      toCell(eukGroup, V(0, 3.35, 0.4)),
      toCell(eukGroup, V(0, -3.35, 0.4))
    );

    // Meiosis recombination sites (hero in Meiosis I + ALWAYS live in Molecular Inset!)
    if (mode === 'meiosis' && phase <= 0.46) {
      SITES.bivalent.push(toCell(eukGroup, V(0, 1.18, 0.2)), toCell(eukGroup, V(0, -1.18, 0.2)));
      SITES.synaptonemal.push(toCell(eukGroup, V(0, 1.18, 0.12)), toCell(eukGroup, V(0, -1.18, 0.12)));
      SITES.spo11.push(toCell(eukGroup, V(-0.34, 0.68, 0.34)), toCell(insetGroup, V(1.16, 0.84, 0.22)));
      SITES.rad51.push(toCell(eukGroup, V(+0.34, 0.58, 0.36)), toCell(insetGroup, V(0.56, 0.86, 0.22)));
      SITES.chiasma.push(toCell(eukGroup, V(0, 0.62, 0.22)), toCell(eukGroup, V(0, -1.58, 0.22)));
    } else {
      SITES.bivalent.push(toCell(insetGroup, V(0.84, 0.56, 0.16)));
      SITES.synaptonemal.push(toCell(insetGroup, V(1.48, 0.44, 0.16)));
      SITES.spo11.push(toCell(insetGroup, V(1.16, 0.84, 0.22)));
      SITES.rad51.push(toCell(insetGroup, V(0.56, 0.86, 0.22)));
      SITES.chiasma.push(toCell(insetGroup, V(0.84, 0.56, 0.20)));
    }

    // Permanent Molecular Inset sites (Holliday junction + Atomic Base Pairs)
    SITES.holliday.push(toCell(insetGroup, V(0.84, 0.56, 0.18)));
    SITES.dna_basepair.push(toCell(insetGroup, V(0.0, -0.66, 0.18)), toCell(insetGroup, V(-0.82, -0.66, 0.16)), toCell(insetGroup, V(+0.82, -0.66, 0.16)));

    // Prokaryotic Binary Fission E. coli sites (hero in fission mode; upper-left companion in mitosis/meiosis!)
    SITES.ftsz_ring.push(toCell(fissionGroup, V(0, 1.05, 0.55)), toCell(fissionGroup, V(0, -1.05, 0.55)));
    SITES.par_segregation.push(
      toCell(fissionGroup, V(0, 0, 0.2)),
      toCell(fissionGroup, dyn.parPolarL.position),
      toCell(fissionGroup, dyn.parPolarR.position)
    );
  }

  // DOM HUD controls for Timeline & Mode
  const modeBtn = document.getElementById('modeBtn') as HTMLButtonElement | null;
  const subEl = document.getElementById('sub');
  const phaseSlider = document.getElementById('phaseSlider') as HTMLInputElement | null;
  const phaseReadout = document.getElementById('phaseReadout');
  const phaseBadge = document.getElementById('phaseBadge');
  const phaseDot = document.getElementById('phaseDot');
  const phaseTicksEl = document.getElementById('phaseTicks');
  const scrubBtn = document.getElementById('scrubBtn') as HTMLButtonElement | null;

  function renderPhaseTicks() {
    if (!phaseTicksEl) return;
    phaseTicksEl.replaceChildren();
    const ticks = TICKS_BY_MODE[mode];
    ticks.forEach(([lbl, val]) => {
      const sp = document.createElement('span');
      sp.textContent = lbl;
      sp.dataset.t = String(val);
      sp.onclick = () => {
        autoScrub = false;
        if (scrubBtn) { scrubBtn.textContent = 'Auto-Play: off'; scrubBtn.classList.remove('on'); }
        setPhase(val);
      };
      phaseTicksEl.appendChild(sp);
    });
  }

  function applyTimelineState() {
    // Position Hero vs Upper-Left Companion based on active mode!
    if (mode === 'fission') {
      fissionGroup.position.copy(C0);
      fissionGroup.scale.setScalar(1.16);
      eukGroup.position.copy(SAT_UL);
      eukGroup.scale.setScalar(0.29);
      updateEcoliKinematics(phase);
      updateEukaryoticKinematics('mitosis', 0.48); // Companion holds classic Metaphase silhouette!
    } else {
      eukGroup.position.copy(C0);
      eukGroup.scale.setScalar(1.0);
      fissionGroup.position.copy(SAT_UL);
      fissionGroup.scale.setScalar(0.37);
      updateEukaryoticKinematics(mode, phase);
      updateEcoliKinematics(0.68); // Upper-left E. coli companion shows active FtsZ Z-ring cinching!
    }

    refreshSites();

    // Update glassmorphic Phase Bar Readout & active tick highlight
    const meta = stageMeta(mode, phase);
    if (phaseReadout) phaseReadout.textContent = `${meta.label} · ${meta.ploidy}`;
    if (phaseBadge) {
      phaseBadge.textContent = meta.badge;
      phaseBadge.classList.remove('meiosis', 'fission');
      if (mode !== 'mitosis') phaseBadge.classList.add(mode);
    }
    if (phaseDot) {
      phaseDot.style.background = mode === 'meiosis' ? '#d496ff' : mode === 'fission' ? '#54f2c2' : '#7ee8ff';
    }
    if (phaseSlider && Math.abs(parseFloat(phaseSlider.value) - phase) > 0.002) {
      phaseSlider.value = phase.toFixed(3);
    }
    if (phaseTicksEl) {
      const spans = Array.from(phaseTicksEl.children) as HTMLElement[];
      let bestIdx = 0, bestDiff = 9;
      spans.forEach((sp, i) => {
        const d = Math.abs(parseFloat(sp.dataset.t ?? '0') - phase);
        if (d < bestDiff) { bestDiff = d; bestIdx = i; }
      });
      spans.forEach((sp, i) => sp.classList.toggle('on', i === bestIdx));
    }
  }

  function setPhase(nextPhase: number, silent = false) {
    phase = clamp01(Number.isFinite(nextPhase) ? nextPhase : 0.48);
    applyTimelineState();
    if (!silent && EMBED) say();
  }

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;
    renderPhaseTicks();
    applyTimelineState();

    // Studio atmosphere tint per division mechanism
    lamp.color.set(mode === 'meiosis' ? '#d8a6ff' : mode === 'fission' ? '#62ffd8' : '#7cf4ff');
    spindleGlow.color.set(mode === 'meiosis' ? '#ffb88c' : mode === 'fission' ? '#70ffe2' : '#ffe0a8');

    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.remove('meiosis', 'fission');
      if (mode !== 'mitosis') modeBtn.classList.add(mode);
    }
    if (subEl) {
      subEl.textContent =
        mode === 'meiosis'
          ? 'Meiosis (2n → 4×1n) · SYCP3 synapsis (4CPC), Spo11/Rad51 crossing-over chiasmata & 4 genetically unique haploid gametes'
          : mode === 'fission'
            ? 'Prokaryotic Binary Fission (E. coli) · oriC theta replication, FtsK/ParABS segregation (2IUU) & FtsZ Z-ring constriction (6UNX)'
            : 'Mitosis (2n → 2×2n) · bipolar spindle (Eg5 1II6), condensin/cohesin SMC rings, kinetochore checkpoint & separase cleavage';
    }
    if (!silent && EMBED) say();
  }

  if (phaseSlider) {
    phaseSlider.oninput = () => {
      autoScrub = false;
      if (scrubBtn) { scrubBtn.textContent = 'Auto-Play: off'; scrubBtn.classList.remove('on'); }
      setPhase(parseFloat(phaseSlider.value));
    };
  }
  if (scrubBtn) {
    scrubBtn.onclick = () => {
      autoScrub = !autoScrub;
      scrubBtn.textContent = `Auto-Play: ${autoScrub ? 'on' : 'off'}`;
      scrubBtn.classList.toggle('on', autoScrub);
    };
  }
  if (modeBtn) {
    modeBtn.onclick = () => {
      setMode();
      // Place timeline at the signature wow-frame of each mode when clicking #modeBtn interactively!
      if (mode === 'mitosis') setPhase(0.48);
      else if (mode === 'meiosis') setPhase(0.24);
      else setPhase(0.66);
    };
  }

  // -------------------------------------------------------------------------
  // 4. Live Opaque-Discard 4x4 MOL Flows (Exact 6 Species!)
  //    gtp, atp, tubulin_flow, cohesin_cleave, recomb_pulse, mg_ions
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    gtp: ['GTP (FtsZ Z-ring & tubulin energy)', '#45ecff', 0, 0.27],
    atp: ['ATP (Kinesin-5 / Myosin II / FtsK)', '#ffe85c', 1, 0.27],
    tubulin_flow: ['α/β-Tubulin dimers (spindle flux)', '#4affd4', 2, 0.27],
    cohesin_cleave: ['Cleaved cohesin / securin pulse', '#ff8c52', 3, 0.27],
    recomb_pulse: ['Recombination repair pulse (Rad51)', '#e48cff', 4, 0.27],
    mg_ions: ['Catalytic Mg²⁺ ions (DNA / ATPase)', '#5effa8', 5, 0.25],
  };

  function glyph(g: CanvasRenderingContext2D, k: number, x: number, y: number, s: number, fill = '#ffffff') {
    const P = (u: number, v: number): [number, number] => [x + u * s, y + v * s];
    const ink = '#0c121c';
    const gr = g.createRadialGradient(...P(0.38, 0.32), s * 0.04, ...P(0.5, 0.5), s * 0.62);
    gr.addColorStop(0, fill);
    gr.addColorStop(1, new THREE.Color(fill).multiplyScalar(0.50).getStyle());
    g.save();
    g.lineJoin = g.lineCap = 'round';
    const drawBalls = (list: Array<[number, number, number]>) => {
      g.strokeStyle = ink;
      g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawPoly = (pts: Array<[number, number]>, close = true, w = 0.10) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      if (close) g.closePath();
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // GTP: guanine ring + 3 phosphate beads
        drawPoly([[0.18, 0.34], [0.42, 0.24], [0.54, 0.50], [0.42, 0.76], [0.18, 0.66]], true, 0.09);
        drawBalls([[0.64, 0.50, 0.09], [0.78, 0.50, 0.09], [0.90, 0.50, 0.08]]);
        break;
      case 1: // ATP: adenosine lobe + 3 glowing phosphates
        drawBalls([[0.32, 0.50, 0.22], [0.62, 0.50, 0.09], [0.76, 0.50, 0.09], [0.90, 0.50, 0.08]]);
        break;
      case 2: // α/β-Tubulin heterodimer
        drawBalls([[0.34, 0.50, 0.22], [0.66, 0.50, 0.22]]);
        break;
      case 3: // Cleaved cohesin / securin ring opening
        drawPoly([[0.22, 0.36], [0.40, 0.22], [0.66, 0.24], [0.80, 0.44]], false, 0.11);
        drawPoly([[0.22, 0.64], [0.40, 0.78], [0.66, 0.76], [0.80, 0.56]], false, 0.11);
        break;
      case 4: // Recombination X-strand pulse
        drawPoly([[0.22, 0.24], [0.78, 0.76]], false, 0.12);
        drawPoly([[0.78, 0.24], [0.22, 0.76]], false, 0.12);
        break;
      case 5: // Catalytic Mg2+ hexacoordinate ion
        drawBalls([[0.50, 0.50, 0.22], [0.50, 0.18, 0.09], [0.50, 0.82, 0.09], [0.18, 0.50, 0.09], [0.82, 0.50, 0.09]]);
        break;
    }
    g.restore();
  }

  const ATLAS = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d')!;
    for (let k = 0; k < 6; k++) glyph(g, k, (k % 4) * 128 + 10, Math.floor(k / 4) * 128 + 10, 108, '#ffffff');
    return new THREE.CanvasTexture(c);
  })();

  const flowMat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uBoost: { value: 1 }, uAtlas: { value: ATLAS } },
    vertexShader: `attribute float size, glyph, fade; attribute vec3 icol; uniform float uScale, uBoost; varying vec3 vCol; varying float vG, vFade;
      void main() {
        vCol = icol; vG = glyph; vFade = fade;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mvPosition.z), 0., 54.);
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
    flowGeo.setAttribute(nm as string, new THREE.BufferAttribute(arr as Float32Array, d as number).setUsage(THREE.DynamicDrawUsage))
  );
  const flowPts = new THREE.Points(flowGeo, flowMat);
  flowPts.frustumCulled = false;
  cell.add(flowPts);

  const FXTEX = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
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
    fxGeo.setAttribute(nm as string, new THREE.BufferAttribute(arr as Float32Array, d as number).setUsage(THREE.DynamicDrawUsage))
  );
  const fxPts = new THREE.Points(fxGeo, fxMat);
  fxPts.frustumCulled = false;
  cell.add(fxPts);

  const live: Array<{ i: number; type: string; curve: THREE.CatmullRomCurve3; tags: string[]; t: number; dur: number; ph: number; wob: number; onDone?: () => void }> = [];
  const free: number[] = [];
  for (let i = FLOW_MAX - 1; i >= 0; i--) free.push(i);
  const fx: Array<{ i: number; at: THREE.Vector3; t: number; life: number; s: number; c: THREE.Color }> = [];
  const fxFree: number[] = [];
  for (let i = FX_MAX - 1; i >= 0; i--) fxFree.push(i);

  const FLOW_COUNTS: Record<string, number> = Object.fromEntries(Object.keys(MOL).map(k => [k, 0]));
  let flowsOn = true;
  let flowSpeed = 1;
  let fClock = 0;
  let molHi: string | null = null;
  let hi: string | null = null;

  function splash(at: THREE.Vector3, hex: string, s = 0.36) {
    const i = fxFree.pop();
    if (i === undefined) return;
    fx.push({ i, at: at.clone(), t: 0, life: 0.62, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 2.8, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop()!;
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.06, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. GTP powering FtsZ Z-ring treadmilling & centrosome microtubule nucleation
    {
      rate: 2.3,
      acc: 0.5,
      go: () => {
        const toZ = mode === 'fission' ? rand() < 0.72 : rand() < 0.48;
        const dst = toZ ? pickSite('ftsz_ring', SAT_UL) : pickSite('centrosome', C0);
        const src = dst.clone().add(V(rr(-1.4, 1.4), rr(-1.4, 1.4), rr(0.6, 1.6)));
        emitFlow('gtp', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.25, 0.2)), dst], ['ftsz_ring', 'centrosome', 'spindle_mt'], 2.4, () =>
          splash(dst, '#45ecff', 0.36)
        );
      },
    },
    // 2. ATP fueling Kinesin-5 sliding, FtsK/ParABS motors, Condensin/Cohesin, and Contractile Ring Myosin II
    {
      rate: 2.4,
      acc: 0.4,
      go: () => {
        const r = rand();
        const k = r < 0.34 ? 'kinesin5' : r < 0.62 ? 'contractile_ring' : r < 0.82 ? 'par_segregation' : 'condensin';
        const dst = pickSite(k, C0);
        const src = dst.clone().add(V(rr(-1.8, 1.8), rr(-1.6, 1.6), rr(0.4, 1.4)));
        emitFlow('atp', [src, src.clone().lerp(dst, 0.5).add(V(0.15, 0.22, 0.12)), dst], [k, 'cohesin', 'cell_cortex'], 2.5, () =>
          splash(dst, '#ffe85c', 0.36)
        );
      },
    },
    // 3. α/β-Tubulin dimers streaming between centrosomes, kinetochores & spindle midzone
    {
      rate: 2.2,
      acc: 0.4,
      go: () => {
        const src = pickSite('centrosome', C0.clone().add(V(-3.4, 0, 0)));
        const dst = rand() < 0.6 ? pickSite('kinetochore', C0) : pickSite('spindle_mt', C0);
        emitFlow('tubulin_flow', [src, src.clone().lerp(dst, 0.5).add(V(0, rr(-0.6, 0.6), 0.35)), dst], ['spindle_mt', 'centrosome', 'kinetochore'], 2.5);
      },
    },
    // 4. Cohesin cleavage / APC/C securin pulse erupting from separase -> cohesin rings
    {
      rate: 2.0,
      acc: 0.5,
      go: () => {
        const src = pickSite('separase', C0);
        const dst = pickSite('cohesin', C0);
        const out = dst.clone().add(V(rr(-1.3, 1.3), rr(-1.1, 1.1), rr(0.5, 1.3)));
        emitFlow('cohesin_cleave', [src, dst, out], ['separase', 'cohesin', 'sister_chromatids', 'kinetochore'], 2.4, () =>
          splash(dst, '#ff8c52', 0.38)
        );
      },
    },
    // 5. Recombination repair pulse flowing across Spo11 -> Rad51 -> Chiasma / Holliday junction
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const src = pickSite('spo11', INS0);
        const mid = pickSite('rad51', INS0);
        const dst = rand() < 0.55 ? pickSite('chiasma', INS0) : pickSite('holliday', INS0);
        emitFlow('recomb_pulse', [src, mid, dst], ['spo11', 'rad51', 'chiasma', 'holliday', 'bivalent', 'synaptonemal'], 2.6, () =>
          splash(dst, '#e48cff', 0.36)
        );
      },
    },
    // 6. Catalytic Mg2+ ions coordinating atomic DNA base pairs, Spo11 & SMC ATPases
    {
      rate: 1.9,
      acc: 0.3,
      go: () => {
        const dst = rand() < 0.55 ? pickSite('dna_basepair', INS0) : pickSite('condensin', C0);
        const src = dst.clone().add(V(rr(-1.4, 1.4), rr(-1.2, 1.2), rr(0.6, 1.4)));
        emitFlow('mg_ions', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.2, 0.2)), dst], ['dna_basepair', 'holliday', 'condensin', 'spo11'], 2.5, () =>
          splash(dst, '#5effa8', 0.32)
        );
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
      q.x += a * Math.sin(w * 5.0 + p.ph);
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
  if (legend) {
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
      `<div class="row">Bases ${'ATGC'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>` +
      `<div class="row"><span class="bar" style="background:#ff8459"></span>Maternal <span class="bar" style="background:#46bcff;margin-left:6px"></span>Paternal <span class="bar" style="background:${BACKBONE[0]};margin-left:6px"></span>dsDNA</div>`;
    legend.append(keyEl);
  }

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Scrub the timeline slider below to animate every division stage live — switch between Mitosis (2n → 2×2n), Meiosis (2n → 4×1n with visible crossing-over), and E. coli Binary Fission (FtsZ Z-ring).';
  if (tipBox) tipBox.textContent = TIP0;

  const molsEl = document.getElementById('mols');
  if (molsEl) {
    Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
      const it = document.createElement('div');
      it.className = 'mol';
      const cv = document.createElement('canvas');
      cv.width = cv.height = 44;
      glyph(cv.getContext('2d')!, g, 3, 3, 38, colour);
      const t = document.createElement('span');
      t.textContent = name;
      it.append(cv, t);
      molsEl.append(it);
      it.onmouseenter = () => { molHi = k; };
      it.onmouseleave = () => { molHi = null; };
    });
  }

  function showInfo(k: string | null) {
    if (!tipBox) return;
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

  function setHi(k: string | null) {
    if (hi && REG[hi]) {
      REG[hi].mats.forEach((m: any) => {
        if (m.userData.e0 && m.emissive) m.emissive.copy(m.userData.e0);
        if (m.userData.i0 !== undefined && 'emissiveIntensity' in m) m.emissiveIntensity = m.userData.i0;
      });
      REG[hi].imp.forEach(m => { if (m.uniforms.uHi) m.uniforms.uHi.value = 0; });
    }
    hi = k && REG[k] ? k : null;
    if (hi) {
      REG[hi].mats.forEach((m: any) => {
        if (m.emissive) m.userData.e0 ??= m.emissive.clone();
        if ('emissiveIntensity' in m) m.userData.i0 ??= m.emissiveIntensity;
      });
    }
    showInfo(hi);
  }
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#7ee8ff');

  // -------------------------------------------------------------------------
  // Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
  // -------------------------------------------------------------------------
  let motion = true;
  let sway = 0;
  let last = performance.now();

  const applyViewModeSync = (name: string) => {
    if (name === 'fission') {
      setMode('fission', true);
      setPhase(0.68, true);
    } else if (name === 'mitosis_spindle') {
      setMode('mitosis', true);
      setPhase(0.48, true);
    } else if (name === 'checkpoint') {
      setMode('mitosis', true);
      setPhase(0.51, true);
    } else if (name === 'meiosis_crossover') {
      setMode('meiosis', true);
      setPhase(0.24, true);
    }
  };

  const viewBtn = document.getElementById('view');
  if (viewBtn) {
    viewBtn.onclick = e => {
      view = (view + 1) % VIEWS.length;
      const [name, p, t] = VIEWS[view];
      curView = name;
      applyViewModeSync(name);
      camera.position.copy(cell.localToWorld(p.clone()));
      controls.target.copy(cell.localToWorld(t.clone()));
      (e.target as HTMLElement).textContent = `View: ${name}`;
    };
  }
  const lookBtn = document.getElementById('look');
  if (lookBtn) {
    lookBtn.onclick = e => {
      organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length];
      applyLook();
      (e.target as HTMLElement).textContent = `Membrane: ${organelleLook}`;
    };
  }
  const cutBtn = document.getElementById('cut');
  if (cutBtn) {
    cutBtn.onclick = e => {
      cutOn = !cutOn;
      cutOpenMeshes.forEach(o => { o.visible = cutOn; });
      cutClosedMeshes.forEach(o => { o.visible = !cutOn; });
      (e.target as HTMLElement).textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
    };
  }
  const flowBtn = document.getElementById('flow');
  if (flowBtn) {
    flowBtn.onclick = e => {
      flowsOn = !flowsOn;
      flowPts.visible = fxPts.visible = flowsOn;
      (e.target as HTMLElement).textContent = `Metabolism: ${flowsOn ? 'on' : 'off'}`;
    };
  }
  const speed = document.getElementById('speed') as HTMLInputElement | null;
  const spd = document.getElementById('spd');
  if (speed && spd) {
    speed.oninput = () => {
      flowSpeed = 2 ** +speed.value;
      spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`;
    };
    speed.ondblclick = () => { speed.value = '0'; speed.oninput!(new Event('input')); };
  }
  const motionBtn = document.getElementById('motion');
  if (motionBtn) {
    motionBtn.onclick = e => {
      motion = !motion;
      (e.target as HTMLElement).textContent = motion ? 'Pause' : 'Play';
    };
  }
  const snapBtn = document.getElementById('snap');
  if (snapBtn) {
    snapBtn.onclick = () => {
      composer.render();
      const a = document.createElement('a');
      a.download = `cell-division-${mode}-t${Math.round(phase * 100)}.png`;
      a.href = renderer.domElement.toDataURL('image/png');
      a.click();
    };
  }

  const held = new Set<string>();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !(e.target as HTMLElement)?.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) held.add(k);
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), stepVec = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  controls.enableRotate = false;
  let lookFrom: [number, number] | null = null;
  let downAt: [number, number] | null = null;
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
          .find((h: any) => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has(h.object.material));
        if (hit) {
          const k = map.get((hit.object as any).material)!;
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
    stepVec
      .set(0, 0, 0)
      .addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s')))
      .addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (stepVec.lengthSq() < 1e-6) return;
    stepVec.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * 0.5));
    camera.position.add(stepVec);
    controls.target.add(stepVec);
  }

  const tour = { on: false, from: null as any, to: null as any, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
  const smoother = (x: number) => x * x * x * (x * (x * 6 - 15) + 10);

  function poseOf(m: any) {
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0, 0.4, 0])) };
    return null;
  }

  function flyTo(m: any) {
    if (m.mode) setMode(m.mode, true);
    if (m.phase !== undefined) setPhase(m.phase, true);
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      applyViewModeSync(m.view);
    }
    const to = poseOf(m);
    if (!to) return false;
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C_PIV = V(0.0, 0.4, 0.0);
  function tourFrame(dt: number) {
    if (!tour.on) return;
    const { from, to } = tour;
    if (tour.t < 1) tour.t = Math.min(1, tour.t + dt / tour.dur);
    else if (tour.orbit) to.p.sub(to.t).applyAxisAngle(UP, ((tour.orbit * Math.PI) / 180) * dt).add(to.t);
    const e = smoother(tour.t);
    ft.lerpVectors(from.t, to.t, e);
    qa.copy(from.p).sub(C_PIV);
    qb.copy(to.p).sub(C_PIV);
    const ra = Math.max(0.05, qa.length()), rb = Math.max(0.05, qb.length());
    qa.normalize();
    qb.normalize();
    const ang = Math.acos(Math.min(1, Math.max(-1, qa.dot(qb))));
    if (ang < 1e-3 || ang > 3.1) fp.lerpVectors(qa, qb, e).normalize();
    else fp.copy(qa).multiplyScalar(Math.sin((1 - e) * ang)).addScaledVector(qb, Math.sin(e * ang)).divideScalar(Math.sin(ang));
    fp.multiplyScalar(Math.pow(ra, 1 - e) * Math.pow(rb, e) * (1 + Math.min(0.45, ang * 0.28) * Math.sin(Math.PI * e))).add(C_PIV);
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

  // Exact dynamic tag coordinates for ALL 20 parts across ALL 6 views & ALL 3 modes!
  function pointsOf(vName: string): Record<string, THREE.Vector3> {
    const first = (k: string, fb: THREE.Vector3) => (SITES[k]?.[0] ?? fb).clone();
    const base: Record<string, THREE.Vector3> = {
      cell_cortex: first('cell_cortex', C0.clone().add(V(0, 3.6, 0.8))),
      nuclear_env: first('nuclear_env', C0.clone().add(V(-2.4, 2.2, -0.6))),
      centrosome: first('centrosome', C0.clone().add(V(-3.6, 0, 0))),
      spindle_mt: first('spindle_mt', C0.clone().add(V(-1.8, 1.35, 0.25))),
      kinesin5: first('kinesin5', C0.clone().add(V(0, 1.75, 0.35))),
      sister_chromatids: first('sister_chromatids', C0.clone().add(V(-0.2, 1.85, 0.15))),
      condensin: first('condensin', C0.clone().add(V(-0.2, 2.35, 0.2))),
      cohesin: first('cohesin', C0.clone().add(V(0, 1.85, 0.2))),
      kinetochore: first('kinetochore', C0.clone().add(V(-0.4, 1.85, 0.2))),
      separase: first('separase', C0.clone().add(V(-0.9, 2.1, 0.7))),
      contractile_ring: first('contractile_ring', C0.clone().add(V(0, -3.4, 0.4))),
      bivalent: first('bivalent', INS0.clone().add(V(0.84, 0.56, 0.18))),
      synaptonemal: first('synaptonemal', INS0.clone().add(V(1.48, 0.44, 0.18))),
      spo11: first('spo11', INS0.clone().add(V(1.16, 0.84, 0.24))),
      rad51: first('rad51', INS0.clone().add(V(0.56, 0.86, 0.24))),
      chiasma: first('chiasma', INS0.clone().add(V(0.84, 0.56, 0.22))),
      holliday: first('holliday', INS0.clone().add(V(0.84, 0.56, 0.20))),
      ftsz_ring: first('ftsz_ring', SAT_UL.clone().add(V(0, 0.55, 0.35))),
      par_segregation: first('par_segregation', SAT_UL.clone()),
      dna_basepair: first('dna_basepair', INS0.clone().add(V(0, -0.66, 0.20))),
    };
    if (vName === 'molecular_inset') {
      base.condensin = INS0.clone().add(V(-1.12, 0.78, 0.16));
      base.cohesin = INS0.clone().add(V(-0.46, 0.78, 0.18));
      base.separase = INS0.clone().add(V(-0.44, 0.26, 0.22));
      base.kinetochore = INS0.clone().add(V(-1.16, 0.24, 0.18));
      base.holliday = INS0.clone().add(V(0.84, 0.56, 0.20));
      base.rad51 = INS0.clone().add(V(0.56, 0.86, 0.24));
      base.spo11 = INS0.clone().add(V(1.16, 0.84, 0.24));
      base.dna_basepair = INS0.clone().add(V(0, -0.66, 0.20));
    }
    return base;
  }

  function focusOf(k: string) {
    const P = pointsOf(curView);
    const RAD: Record<string, number> = {
      cell_cortex: 5.0, nuclear_env: 3.6, centrosome: 2.3, spindle_mt: 3.8, kinesin5: 2.4,
      sister_chromatids: 2.8, condensin: 2.1, cohesin: 2.0, kinetochore: 2.0, separase: 2.1,
      contractile_ring: 4.2, bivalent: 2.6, synaptonemal: 2.4, spo11: 2.0, rad51: 2.0,
      chiasma: 2.2, holliday: 2.2, ftsz_ring: 3.0, par_segregation: 2.8, dna_basepair: 2.2,
    };
    const isInsetPart = k === 'holliday' || k === 'dna_basepair';
    const dir = isInsetPart ? V(-0.12, 0.08, 0.98).normalize() : V(0.18, 0.16, 0.97).normalize();
    return P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.6, dir } : null;
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    spindle_mt: ['centrosome', 'kinesin5', 'kinetochore'],
    sister_chromatids: ['condensin', 'cohesin', 'kinetochore', 'separase'],
    cohesin: ['separase', 'sister_chromatids', 'kinetochore'],
    bivalent: ['synaptonemal', 'spo11', 'rad51', 'chiasma', 'sister_chromatids'],
    holliday: ['rad51', 'spo11', 'chiasma', 'dna_basepair'],
    ftsz_ring: ['par_segregation'],
    contractile_ring: ['cell_cortex'],
  };
  const saved = new Map<any, any>();
  const hidden: THREE.Object3D[] = [];
  let ghostArgs: [string[], number, boolean] | null = null;
  let OBJS: Record<string, THREE.Object3D[]> | null = null;
  let matMap: Map<THREE.Material, string> | null = null;

  function OBJS_BY_MAT() {
    if (!matMap) {
      matMap = new Map();
      Object.entries(REG).forEach(([k, r]) => {
        [...r.mats, ...r.imp].forEach(m => { if (!matMap!.has(m)) matMap!.set(m, k); });
      });
    }
    return matMap;
  }
  function objsOf() {
    const of = OBJS_BY_MAT();
    const out: Record<string, THREE.Object3D[]> = {};
    cell.traverse((o: any) => {
      const k = o.material && of.get(o.material);
      if (k) (out[k] ??= []).push(o);
    });
    return out;
  }
  function ghost(keep: string[] | null = null, amount = 0.1, hide = false) {
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
      r.mats.forEach((m: any) => {
        if (saved.has(m)) return;
        saved.set(m, {
          transparent: m.transparent,
          opacity: m.opacity,
          depthWrite: m.depthWrite,
          ...('transmission' in m && { transmission: m.transmission }),
        });
        m.transparent = true;
        m.opacity = Math.min(m.opacity ?? 1, amount);
        m.depthWrite = false;
        if ('transmission' in m) m.transmission = 0;
        m.needsUpdate = true;
      });
      r.imp.forEach((m: any) => {
        if (saved.has(m)) return;
        saved.set(m, { transparent: m.transparent, depthWrite: m.depthWrite });
        if (m.uniforms?.uDim) m.uniforms.uDim.value = amount * 0.5;
        m.transparent = true;
        m.depthWrite = false;
        m.needsUpdate = true;
      });
    });
  }

  let blinkT0: number | null = null;
  let blinkN = 3;
  function blink(k: string | null, n = 3) {
    setHi(k);
    if (hi) { blinkT0 = performance.now(); blinkN = n; }
  }
  const hiLevel = (now: number) => {
    if (blinkT0 === null) return 0.55 + 0.45 * Math.sin(now / 180);
    const t = (now - blinkT0) / 1000;
    return t < blinkN / 1.5 ? 0.5 - 0.5 * Math.cos(t * 3 * Math.PI) : 0.3 + 0.06 * Math.sin(now / 400);
  };

  function setState(m: any) {
    const g = ghostArgs;
    if (g) ghost(null);
    if (m.mode) setMode(m.mode, true);
    if (m.phase !== undefined) setPhase(Number(m.phase), true);
    if (m.look) {
      const normalized = LOOKS.includes(m.look) ? m.look : m.look === 'glass' || m.look === 'xray' ? 'see-through' : 'gel';
      if (normalized !== organelleLook) {
        organelleLook = normalized;
        applyLook();
        if (lookBtn) lookBtn.textContent = `Membrane: ${organelleLook}`;
      }
    }
    if (m.cut !== undefined && m.cut !== cutOn) {
      cutOn = m.cut;
      cutOpenMeshes.forEach(o => { o.visible = cutOn; });
      cutClosedMeshes.forEach(o => { o.visible = !cutOn; });
      if (cutBtn) cutBtn.textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
    }
    if (m.flow !== undefined && m.flow !== flowsOn && flowBtn) flowBtn.click();
    if (m.motion !== undefined) {
      motion = m.motion;
      if (motionBtn) motionBtn.textContent = motion ? 'Pause' : 'Play';
    }
    if (g) ghost(...g);
  }

  // -------------------------------------------------------------------------
  // Main Animation Loop (Gentle Sway + Rotating FtsZ/FtsK/Centrosomes + Live Flows)
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3.5) / 20));
      cell.rotation.y = 0.075 * Math.sin(sway * 0.12);
      const spinDt = dt * Math.max(0.35, Math.min(2.6, flowSpeed));
      dyn.rotors?.forEach(r => { r.obj.rotation[r.axis] += spinDt * r.speed; });
      if (autoScrub) {
        setPhase((phase + dt * 0.075 * Math.max(0.4, Math.min(2.5, flowSpeed))) % 1.0, true);
      }
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.4, camera.position.distanceTo(controls.target) / 14.0));
    cell.updateMatrixWorld();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) {
      const k = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach((m: any) => {
        if (m.emissive) m.emissive.copy(c);
        if ('emissiveIntensity' in m) m.emissiveIntensity = 0.28 + 0.78 * k;
      });
      REG[hi].imp.forEach(m => { if (m.uniforms.uHi) m.uniforms.uHi.value = k; });
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
    buildEukaryoticCell(T);
    buildBinaryFissionEcoli(T);
    buildMolecularInset(T);
    setMode('mitosis', true);
    setPhase(0.48, true);
    // Warm up live particle streams so all 6 molecular species shine on frame 1!
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    cell.updateMatrixWorld();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // Explorer postMessage Protocol & window.__cell Debug Contract
  // -------------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = (m: Record<string, unknown>) => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
  let tagPts: Array<THREE.Vector3 | null> = [];
  let tagSeq = 0;
  let sentReady = false;
  let sendTagsAlias = false;
  const scr = V();

  const say = () =>
    toExplorer({
      type: 'state',
      view: curView,
      mode,
      phase,
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
        glyph(cv.getContext('2d')!, g, 3, 3, 38, colour);
        return [k, name, cv.toDataURL()];
      });
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]), mode, phase });
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
        applyViewModeSync(name);
        camera.position.copy(cell.localToWorld(p.clone()));
        controls.target.copy(cell.localToWorld(t.clone()));
        if (viewBtn) viewBtn.textContent = `View: ${name}`;
        const P = pointsOf(m.view);
        tagPts = (m.points ?? m.tags ?? []).map((k: string) => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'mode') setMode(m.mode, true);
      if (m.cmd === 'phase') setPhase(Number(m.phase), true);
      if (m.cmd === 'track' || m.cmd === 'tags') {
        const list = m.points ?? m.tags ?? [];
        tagPts = list.map((x: any) => {
          const [v, k] = Array.isArray(x) ? x : [m.view ?? curView, x];
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
      if (m.cmd === 'motion' && motionBtn) motionBtn.click();
      if (m.cmd === 'look' && lookBtn) lookBtn.click();
      if (m.cmd === 'cut' && cutBtn) cutBtn.click();
      if (m.cmd === 'flow' && flowBtn) flowBtn.click();
      if (m.cmd === 'speed' && speed) {
        speed.value = String(m.v);
        speed.oninput!(new Event('input'));
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

  (window as any).__cell = {
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
    get phase() { return phase; },
    setMode,
    setPhase,
    setHi,
    V,
    focusOf,
    flyTo,
    freeCamera,
    ghost,
    blink,
    setState,
    tour,
    setLook: (k: string) => {
      organelleLook = LOOKS.includes(k as any) ? (k as any) : k === 'glass' || k === 'xray' ? 'see-through' : 'gel';
      applyLook();
    },
    get sites() { return SITES; },
    get flows() { return live; },
    get procs() { return FLOW_COUNTS; },
    get views() { return VIEWS; },
    pointsOf,
    setMol: (k: string | null) => { molHi = k; },
    step: (dt = 0.05, n = 1) => { for (let i = 0; i < n; i++) updateFlows(dt); },
    shot: () => {
      cell.updateMatrixWorld();
      composer.render();
      return renderer.domElement.toDataURL('image/png');
    },
  };
});
