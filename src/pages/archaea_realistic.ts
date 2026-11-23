// @ts-nocheck
import * as THREE from 'three';
import { PDB_ARCHAEA } from '../molecules/pdb_archaea.js';
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

runBiologyApp(20261110, ({ random, geometry, dna, rna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, randDir, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // Nanoscale coordinate system: 1 unit = 100 nm (NM = 0.01 units/nm).
  // Asgard Archaeon (Prometheoarchaeum-like, r ~ 4.4 u) centered at A0 = (-1.4, 0, 0),
  // cradling a cutaway Rickettsia-like alphaproteobacterium at S0 = (+4.6, 0.15, -0.35),
  // with a live Dual-Mode toggle into Extremophile (Sulfolobus / Halobacterium).
  const NM = 0.01;
  const A0 = V(-1.4, 0, 0);
  const S0 = V(4.65, 0.15, -0.35);
  const E0 = V(-4.75, -4.25, 4.35);
  const Y_UP = V(0, 1, 0);

  const VIEWS = [
    ['overview', V(4.6, 5.6, 28.6), V(0.35, 0.0, -0.35)],
    ['envelope', V(-2.2, 0.6, 15.2), V(-2.85, -1.25, 1.85)],
    ['archaellum', V(-12.2, 6.8, 10.6), V(-5.2, 1.95, -0.95)],
    ['genome', V(2.9, 2.3, 8.8), V(-1.65, 0.15, -0.35)],
    ['synapse', V(3.6, 2.5, 12.6), V(3.25, 0.12, -0.42)],
    ['extremophile', V(-11.8, 4.2, 14.2), V(-2.35, 0.45, -0.45)],
  ];
  let view = 0;
  let curView = 'overview';
  let mode: 'asgard' | 'extremophile' = 'asgard';

  // Cinema dark-field WebGL2 microscopy stage
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 520,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#1b2844',
    bgMid: '#0a1222',
    bgOuter: '#020409',
    keyColor: '#fff3e2',
    keyIntensity: 3.15,
    rimColor: '#88cbff',
    rimIntensity: 1.75,
    lampColor: '#ffbe8a',
    lampIntensity: 22,
    lampPos: [2.8, 2.2, 5.4],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 260,
    bokehColor: '#84c5ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;
  // Secondary subtle cool-violet fill inside the endosymbiotic cleft
  const cleftLamp = new THREE.PointLight('#7ce8ff', 10.5, 22, 2);
  cleftLamp.position.set(3.2, 1.4, 3.6);
  scene.add(cleftLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Separate scene layers for smooth live Dual-Mode switching (Asgard+Symbiont vs Extremophile)
  const caps = new THREE.Group();
  const asgardGroup = new THREE.Group();
  const asgardCaps = new THREE.Group();
  const extremophileExtraGroup = new THREE.Group();
  extremophileExtraGroup.visible = false;
  cell.add(caps, asgardGroup, extremophileExtraGroup);
  caps.add(asgardCaps);

  // Align studio's 90-degree front-right cutaway planes with Asgard center A0,
  // and create a synchronized local 90-degree cutaway for the bacterial symbiont at S0.
  studio.CUT_LOCAL[0].set(V(-1, 0, 0), A0.x);
  studio.CUT_LOCAL[1].set(V(0, 0, -1), A0.z);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  const SYMB_CUT_LOCAL = [new THREE.Plane(V(-1, 0, 0), S0.x), new THREE.Plane(V(0, 0, -1), S0.z)];
  const SYMB_CUT = SYMB_CUT_LOCAL.map(p => p.clone());
  const SYMB_CLIP = { clippingPlanes: SYMB_CUT, clipIntersection: true, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    SYMB_CUT.forEach((p, i) => {
      p.copy(SYMB_CUT_LOCAL[i]);
      if (!cutOn) p.constant = 1e4;
      p.applyMatrix4(cell.matrixWorld);
    });
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.9);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // Exact 20 partKeys required by STANDALONE_PAGE_PART_KEYS & guided tour
  const PARTS = [
    ['slayer', 'Hexagonal glycoprotein S-layer (SlaA/SlaB)', '#6fe6d8'],
    ['tetraether', 'Ether-linked tetraether lipid monolayer', '#f5b856'],
    ['tentacle', 'Asgard cytoplasmic tentacles (Prometheoarchaeum)', '#d9a4ff'],
    ['escrt', 'ESCRT-III membrane-scission spirals', '#ff80b5'],
    ['extremophile_shell', 'Thermoacidophile Sulfolobus S-layer armor', '#ff9a5a'],
    ['archaellum', 'ATP-driven rotary archaellum (ArlB · PDB 7OFQ)', '#78e8ff'],
    ['arli', 'Basal ArlI hexameric ATPase motor (PDB 4IHQ)', '#ffe066'],
    ['bacteriorhodopsin', 'Halobacterium bacteriorhodopsin (PDB 1C3W)', '#c96bff'],
    ['a_atps', 'Rotary A1A0 ATP synthase', '#ffd452'],
    ['dna', 'Supercoiled circular dsDNA chromosome', '#549cff'],
    ['histone', 'HMfB archaeal histone hypernucleosomes (PDB 5T5K)', '#ff789c'],
    ['rnap', '12-subunit archaeal RNA polymerase (PDB 2PMZ)', '#a97aff'],
    ['mrna', 'Nascent archaeal mRNA transcripts', '#ffb35c'],
    ['ribosome', '70S archaeal ribosomes (50S + 30S)', '#ffd98e'],
    ['lokiactin', 'Branching Lokiactin & profilin cables (PDB 5ZZB)', '#5cf2b8'],
    ['symbiont', 'Rickettsia-like alphaproteobacterial partner', '#ff7b6b'],
    ['synapse', 'Endosymbiotic syntrophic contact cleft', '#6ee6ff'],
    ['h2_flow', 'Host H2 / formate cross-feeding conduits', '#4ce6ff'],
    ['atp_export', 'Symbiont ATP export carriers (ANT-like)', '#ffea5c'],
    ['ether_bond', 'Atomic ether (C-O-C) vs. ester (C(=O)-O-C) inset', '#ffad66'],
  ];

  const INFO = {
    slayer: ['Paracrystalline hexagonal (p6) SlaA/SlaB glycoprotein lattice (~18 nm thick, 0 peptidoglycan)', 'Protects the cell against osmotic shock and β-lactam antibiotics without a bacterial cell wall'],
    tetraether: ['Continuous C40 biphytanyl ether-linked monolayer on sn-glycerol-1-phosphate (G1P)', 'Unites both faces into one covalent sheet that resists boiling acid up to 100 °C'],
    tentacle: ['Long translucent Asgard cytoplasmic protrusions braced by internal Lokiactin cables', 'Entangles and cradles syntrophic bacterial partners across the primordial microenvironment'],
    escrt: ['Conical helical ESCRT-III membrane-remodeling filaments wrapping tentacle necks and buds', 'Bends and pinches archaeal membranes — direct evolutionary ancestor of eukaryotic vesicle scission'],
    extremophile_shell: ['Reinforced thermoacidophile Sulfolobus crystalline S-layer carapace & thermal anchors', 'Shields acidophilic archaea at 80 °C and pH 2–3 when toggled into Extremophile mode'],
    archaellum: ['Solid ~12 nm right-handed ArlB helical filament (PDB 7OFQ, Type IV pilus relative)', 'Spins directly from cytoplasmic ATP hydrolysis rather than bacterial proton gradients'],
    arli: ['Cytoplasmic hexameric ArlI AAA+ ATPase ring (PDB 4IHQ) coupled to the ArlJ membrane platform', 'Hydrolyzes Mg2+-ATP into ADP + Pi to generate rotary torque for the archaellum'],
    bacteriorhodopsin: ['7-transmembrane retinal-binding proton-pump trimers (PDB 1C3W) in purple membrane lattices', 'Captures green sunlight to pump H+ ions outward across the Halobacterium membrane'],
    a_atps: ['Archaeal A1A0 rotary ATP synthase with twin peripheral stalks, A0 c-ring turbine & A1 crown', 'Channels returning H+ ions to rotate the central stalk and phosphorylate ADP into ATP'],
    dna: ['Circular supercoiled dsDNA genome (~1.5–4.4 Mbp) looping cleanly inside the cutaway cytoplasm', 'Encodes mosaic archaeal metabolism alongside eukaryotic-like genetic information machinery'],
    histone: ['Polymeric HMfB archaeal histone dimers wrapping dsDNA into a superhelix (PDB 5T5K)', 'Compacts archaeal DNA and forms the direct evolutionary ancestor of eukaryotic chromatin'],
    rnap: ['12-subunit eukaryotic-like archaeal RNA polymerase (PDB 2PMZ) recruited by TBP and TFB', 'Transcribes archaeal genes from TATA/BRE promoters into nascent mRNA strands'],
    mrna: ['Single-stranded nascent mRNA transcripts emerging from active 2PMZ polymerase clefts', 'Carries genetic instructions directly to coupled 70S archaeal polysomes'],
    ribosome: ['70S archaeal ribosomes (50S + 30S) with eukaryotic-like r-proteins and Met initiation', 'Translates nascent mRNA into structural proteins, enzymes, and metabolic complexes'],
    lokiactin: ['Branched F-actin-like Lokiactin cables regulated by Asgard LokiProfilin-2 (PDB 5ZZB)', 'Builds and extends the host tentacles that wrap around the alphaproteobacterial partner'],
    symbiont: ['Cutaway Rickettsia-like alphaproteobacterium with double bilayer and folded cristae-like inner membrane', 'Respires O2 using host H2/formate and evolved into the first eukaryotic mitochondrion'],
    synapse: ['Tight ~25 nm intercellular contact cleft bridged by adhesion glycoproteins between tentacle and partner', 'Stabilizes metabolic exchange during the Entangle -> Engulf -> Endogenize transition'],
    h2_flow: ['Asgard membrane hydrogenase / formate export pores and cross-cleft syntrophic channels', 'Exports fermentation H2 and formate from the Asgard host into the bacterial partner'],
    atp_export: ['Symbiont inner/outer-membrane ANT-like ADP/ATP antiporter barrels facing the contact cleft', 'Returns respiratory ATP across the synapse to energize the Asgard archaeal host'],
    ether_bond: ['High-clarity atomic contrast of archaeal G1P ether (C-O-C, branched phytanyl) vs. bacterial G3P ester (C(=O)-O-C)', 'Explains at the single-bond level why archaeal membranes resist extreme heat and acid hydrolysis'],
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
        roughness: 0.40,
        metalness: 0.03,
        clearcoat: 0.28,
        clearcoatRoughness: 0.32,
        sheen: 0.36,
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
      attenuationDistance: opts.attenDist ?? 4.6,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.26,
      iridescence: opts.iridescence ?? 0.52,
      thickness: opts.thickness ?? 0.52,
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
      m.opacity = see ? 0.42 : 1;
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

  // Synthetic cryo-EM Gaussian molecular surface helper (for sculpted 70S archaeal ribosomes & channels)
  function synthGeo(beads, colors, maxDim = 28, scale = 1, nm = 0.025) {
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

  // Safe non-mutating tangent/orientation helpers (never mutate shared UP!)
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

  // Site anchors & animated rotor registries
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));
  const archaellumRotors = [];
  const atpsRotors = [];

  // Organic radius fields for the Asgard Archaeon (A0) and Alphaproteobacterial Symbiont (S0)
  const archR = d => {
    const n = fbm(d.x * 2.1 + 7.3, d.y * 2.1 - 3.1, d.z * 2.1 + 5.7, 3);
    return 4.38 * (1 + 0.044 * (n - 0.5) * 2);
  };
  const archSurf = (d, offset = 0) => {
    const u = d.clone().normalize();
    const r = archR(u) + offset;
    return { p: A0.clone().addScaledVector(u, r), n: u, r };
  };
  const inArchWedge = p => p.x > A0.x + 0.02 && p.z > A0.z + 0.02;

  const symbR = d => {
    const sx = d.x / 1.88, sy = d.y / 2.62, sz = d.z / 1.88;
    const base = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
    const n = fbm(d.x * 2.6 - 11.4, d.y * 2.6 + 4.2, d.z * 2.6 - 8.1, 3);
    return base * (1 + 0.036 * (n - 0.5) * 2);
  };
  const symbSurf = (d, offset = 0) => {
    const u = d.clone().normalize();
    const r = symbR(u) + offset;
    return { p: S0.clone().addScaledVector(u, r), n: u, r };
  };
  const inSymbWedge = p => p.x > S0.x + 0.02 && p.z > S0.z + 0.02;

  // Build real RCSB PDB cryo-EM molecular surface templates from PDB_ARCHAEA
  function buildPdbTemplates() {
    const histCols = ['#ff789c', '#ff99b8', '#f5a66c', '#e66388', '#ffb38a', '#e882b5', '#549cff', '#8e7aff'].map(col);
    const geoHistone = buildPdbSurfaceGeo(pdb.getModel(PDB_ARCHAEA, 'histone_dna'), {
      nm: NM,
      scale: 4.5,
      maxDim: 32,
      sigmaAng: 4.6,
      iso: 0.36,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part >= 2 ? (grp === 6 ? col('#4f98ff') : col('#8d73ff')) : histCols[grp % 6]),
    });

    const rnapCols = ['#a97aff', '#845ef7', '#c79dff', '#6f85ff', '#d882ff', '#7460e6', '#b894ff', '#9c6bff'].map(col);
    const geoRnap = buildPdbSurfaceGeo(pdb.getModel(PDB_ARCHAEA, 'arch_rnap'), {
      nm: NM,
      scale: 3.7,
      maxDim: 32,
      sigmaAng: 5.0,
      iso: 0.36,
      aoStrength: 0.58,
      colorFn: grp => rnapCols[grp % rnapCols.length],
    });

    const lokiCols = [col('#5cf2b8'), col('#b8ffe4')];
    const geoLoki = buildPdbSurfaceGeo(pdb.getModel(PDB_ARCHAEA, 'lokiactin'), {
      nm: NM,
      scale: 4.3,
      maxDim: 26,
      sigmaAng: 3.6,
      iso: 0.40,
      aoStrength: 0.52,
      colorFn: grp => lokiCols[grp & 1],
    });

    const arliCols = ['#ffe066', '#ffba42', '#fff0a6'].map(col);
    const geoArli = buildPdbSurfaceGeo(pdb.getModel(PDB_ARCHAEA, 'arli_atpase'), {
      nm: NM,
      scale: 5.2,
      maxDim: 30,
      sigmaAng: 4.5,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: grp => arliCols[grp % arliCols.length],
    });

    const arlbCols = ['#78e8ff', '#48caf5', '#aef4ff', '#38b5e8', '#90ecff', '#62dcf8'].map(col);
    const geoArlb = buildPdbSurfaceGeo(pdb.getModel(PDB_ARCHAEA, 'arlb_filament'), {
      nm: NM,
      scale: 3.1,
      maxDim: 30,
      sigmaAng: 4.4,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: grp => arlbCols[grp % arlbCols.length],
    });

    const geoBr = buildPdbSurfaceGeo(pdb.getModel(PDB_ARCHAEA, 'bacteriorhodopsin'), {
      nm: NM,
      scale: 5.6,
      maxDim: 24,
      sigmaAng: 3.5,
      iso: 0.40,
      aoStrength: 0.52,
      colorFn: (_grp, part) => (part === 1 ? col('#e09cff') : col('#b954f5')),
    });

    // High-resolution cryo-EM 70S archaeal ribosome (sculpted bilobed 50S crown + 30S head/beak cleft)
    const geoRibo70 = synthGeo(
      [
        [0, -1.65, 0, 2.7, 0],
        [-2.7, -1.0, 0.7, 2.0, 0],
        [2.8, -0.8, -0.5, 1.9, 0],
        [0.1, -3.1, -0.9, 2.0, 2],
        [3.6, 1.1, -0.4, 1.3, 2],
        [-3.2, 0.6, -0.5, 1.3, 2],
        [0.4, 2.25, 0.9, 2.1, 1],
        [-1.9, 2.45, 0.6, 1.7, 1],
        [2.1, 1.95, 1.1, 1.55, 1],
        [-0.2, 0.55, -0.85, 1.45, 2],
      ],
      ['#f5b858', '#ffe4a6', '#d97c8a'],
      30,
      1.06,
      0.024
    );

    return { geoHistone, geoRnap, geoLoki, geoArli, geoArlb, geoBr, geoRibo70 };
  }

  // 1. Asgard Archaeon Envelope: Single-Sheet Tetraether Monolayer + Hexagonal Glycoprotein S-Layer + Extremophile Armor
  function buildArchaealEnvelope() {
    // Iridescent backlit wet-gel tetraether monolayer membrane
    const tetMat = cinemaShellMat('tetraether', '#d68f38', '#ffe7bd', CLIP, {
      attenCol: '#c77c26',
      attenDist: 4.5,
      sssColor: '#ffbe66',
      sssIntensity: 0.30,
      iridescence: 0.64,
      thickness: 0.48,
      roughness: 0.11,
      sheenColor: '#ffe3a8',
      normalMap: bump(14, 10),
      normalScale: 0.24,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(A0, archR, 144), tetMat), true, true));

    // Warm backlit inner cytoplasmic face so the opened quarter-wedge reads cleanly with depth
    const innerMat = reg(
      'tetraether',
      applyBacklitSSS(
        phys({
          color: '#341d2e',
          roughness: 0.72,
          clearcoat: 0.16,
          normalMap: bump(12, 9),
          normalScale: new THREE.Vector2(0.22, 0.22),
          side: THREE.BackSide,
        }),
        '#ff9d5c',
        0.16,
        2.4
      )
    );
    cell.add(new THREE.Mesh(shellGeo(A0, d => archR(d) - 0.15, 96), innerMat));

    // Crisp SINGLE-SHEET glowing gold-amber cutaway cap strip (NO bilayer mid-plane split!)
    const MONOLAYER_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.17, '#fff2b2'],
      [0.17, 0.83, '#f5a638'],
      [0.83, 1.0, '#ffe494'],
    ];
    const capMat = reg(
      'tetraether',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.32,
        metalness: 0.06,
        emissive: '#4d2a08',
        emissiveIntensity: 0.32,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(A0, archR, ax, 0.15, MONOLAYER_LAYERS, 220), capMat));
    }

    // Molecular C40 biphytanyl tetraether lipid bolts spanning continuously across the single monolayer cut face
    const B_TET = balls('tetraether', caps, false);
    const cHeadOut = col('#fff0a6'), cHeadIn = col('#ffda7a'), cSpanA = col('#f5a638'), cSpanB = col('#ffd166');
    for (const ax of ['x', 'z']) {
      for (let i = 4; i < 120; i++) {
        const a = (i / 124) * Math.PI;
        const d = ax === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(Math.sin(a), Math.cos(a), 0);
        const R = archR(d);
        const off = ax === 'x' ? V(0.014, 0, 0) : V(0, 0, 0.014);
        const pO = A0.clone().addScaledVector(d, R - 0.012).add(off);
        const pI = A0.clone().addScaledVector(d, R - 0.138).add(off);
        const tang = ortho(d).multiplyScalar(0.016);
        B_TET.add(pO, 0.042, cHeadOut);
        B_TET.add(pI, 0.040, cHeadIn);
        // Continuous single-sheet twin biphytanyl chains bolting outer & inner headgroups together
        B_TET.stick(pO.clone().add(tang), pI.clone().add(tang), 0.009, cSpanA, cSpanB);
        B_TET.stick(pO.clone().sub(tang), pI.clone().sub(tang), 0.009, cSpanB, cSpanA);
        if (i % 14 === 0) SITES.tetraether.push(pO.clone());
      }
    }
    B_TET.done();

    // Hexagonal crystalline glycoprotein S-layer (SlaA/SlaB p6 lattice) lying flush tangent outside the cutaway
    const hexShape = new THREE.Shape();
    const hexR = 0.285;
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      if (k === 0) hexShape.moveTo(Math.cos(a) * hexR, Math.sin(a) * hexR);
      else hexShape.lineTo(Math.cos(a) * hexR, Math.sin(a) * hexR);
    }
    hexShape.closePath();
    const pore = new THREE.Path();
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      if (k === 0) pore.moveTo(Math.cos(a) * 0.115, Math.sin(a) * 0.115);
      else pore.lineTo(Math.cos(a) * 0.115, Math.sin(a) * 0.115);
    }
    pore.closePath();
    hexShape.holes.push(pore);

    const tileGeo = new THREE.ExtrudeGeometry(hexShape, {
      depth: 0.068,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.016,
      bevelThickness: 0.016,
    });
    tileGeo.rotateX(-Math.PI / 2);
    tileGeo.translate(0, 0.11, 0);

    const stalkGeo = new THREE.CylinderGeometry(0.030, 0.044, 0.12, 7);
    stalkGeo.translate(0, 0.055, 0);

    const slayerMat = reg(
      'slayer',
      applyBacklitSSS(
        phys({
          color: '#6fe6d8',
          roughness: 0.30,
          metalness: 0.06,
          clearcoat: 0.50,
          clearcoatRoughness: 0.22,
          sheen: 0.48,
          sheenColor: '#c2fff6',
          normalMap: protBump,
          normalScale: new THREE.Vector2(0.24, 0.24),
        }),
        '#7efce8',
        0.24,
        2.5
      )
    );
    const stalkMat = reg(
      'slayer',
      phys({ color: '#4bc4b8', roughness: 0.44, clearcoat: 0.22 })
    );

    // Extremophile reinforced hexagonal carapace (Sulfolobus SlaA/SlaB thermal armor)
    const armorMat = reg(
      'extremophile_shell',
      applyBacklitSSS(
        phys({
          color: '#ff9a5a',
          roughness: 0.28,
          metalness: 0.12,
          clearcoat: 0.62,
          clearcoatRoughness: 0.18,
          sheen: 0.55,
          sheenColor: '#ffe0b2',
          normalMap: protBump,
          normalScale: new THREE.Vector2(0.30, 0.30),
        }),
        '#ffad5c',
        0.30,
        2.4
      )
    );
    const armorRimMat = reg(
      'extremophile_shell',
      phys({ color: '#ffcf80', roughness: 0.34, metalness: 0.16, clearcoat: 0.5 })
    );

    const slayerMs: THREE.Matrix4[] = [];
    const slayerCols: THREE.Color[] = [];
    const stalkMs: THREE.Matrix4[] = [];
    const armorBaseMs: THREE.Matrix4[] = [];
    const armorExtraMs: THREE.Matrix4[] = [];
    const armorExtraCols: THREE.Color[] = [];

    const brPatchDir = V(-0.84, 0.14, 0.52).normalize();
    const archMotorDir = V(-0.74, 0.52, -0.42).normalize();
    const extCrestDir = V(-0.56, 0.62, -0.55).normalize();

    const N_TILES = 450;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N_TILES; i++) {
      const y = 1 - ((i + 0.5) / N_TILES) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * golden;
      const d = V(Math.cos(th) * rad, y, Math.sin(th) * rad).normalize();
      const { p, n } = archSurf(d, 0.015);
      if (p.x > A0.x + 0.05 && p.z > A0.z + 0.05) continue;
      // Leave clean windows for the purple bacteriorhodopsin patch and archaellum motor exit
      if (d.dot(brPatchDir) > 0.85) continue;
      if (d.dot(archMotorDir) > 0.94) continue;

      const m = atS(p, V(1.0, 1.0, 1.0), qOut(n, i * 0.52));
      const isExtCrest = d.dot(extCrestDir) > 0.76;
      if (isExtCrest) {
        armorBaseMs.push(atS(p.clone().addScaledVector(n, 0.03), V(1.16, 1.42, 1.16), qOut(n, i * 0.52)));
        if (SITES.extremophile_shell.length < 20) SITES.extremophile_shell.push(p.clone().addScaledVector(n, 0.22));
      } else {
        slayerMs.push(m);
        slayerCols.push(col(i % 3 === 0 ? '#85f2e6' : i % 3 === 1 ? '#5fdcd0' : '#74e8dc'));
        stalkMs.push(atS(p, 1, qOut(n)));
        if (i % 10 === 0 && SITES.slayer.length < 36) SITES.slayer.push(p.clone().addScaledVector(n, 0.20));
      }
      // Full fortified Sulfolobus armor carapace revealed in Extremophile mode
      armorExtraMs.push(atS(p.clone().addScaledVector(n, 0.04), V(1.18, 1.46, 1.18), qOut(n, i * 0.52)));
      armorExtraCols.push(col(i % 2 === 0 ? '#ff9d5c' : '#ffb870'));
    }

    cell.add(shade(instanced(tileGeo, slayerMat, slayerMs, slayerCols), true, true));
    cell.add(instanced(stalkGeo, stalkMat, stalkMs));

    // Always-visible comparative Sulfolobus armor crest on dorsal-left shoulder (hugs the curved sphere cleanly!)
    if (armorBaseMs.length) {
      cell.add(shade(instanced(tileGeo, armorMat, armorBaseMs), true, true));
      placed += armorBaseMs.length;
    }

    // Expanded Sulfolobus volcanic-amber carapace toggled on in Extremophile mode
    if (armorExtraMs.length) {
      const extMesh = shade(instanced(tileGeo, armorMat, armorExtraMs, armorExtraCols), true, true);
      extremophileExtraGroup.add(extMesh);
      const extCap = new THREE.Mesh(
        capStrip(A0, d => archR(d) + 0.20, 'x', 0.11, [[0, 1, '#ffb566']], 140),
        armorRimMat
      );
      const extCapZ = new THREE.Mesh(
        capStrip(A0, d => archR(d) + 0.20, 'z', 0.11, [[0, 1, '#ffb566']], 140),
        armorRimMat
      );
      extremophileExtraGroup.add(extCap, extCapZ);
    }

    // Delicate S-layer cutaway rim strip on x & z cut arcs
    const SLAYER_CAP_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.55, '#8af5ea'],
      [0.55, 1.0, '#4ec7bc'],
    ];
    const sCapMat = reg('slayer', new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, side: THREE.DoubleSide }));
    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(capStrip(A0, d => archR(d) + 0.18, ax, 0.075, SLAYER_CAP_LAYERS, 180), sCapMat));
    }
    placed += slayerMs.length;
  }

  // 2. Asgard Cytoplasmic Tentacles + Internal Lokiactin/Profilin (PDB 5ZZB) + ESCRT-III Spirals
  function buildTentaclesLokiactinAndEscrt(T) {
    const tentMat = cinemaShellMat('tentacle', '#a26ae0', '#ecd6ff', {}, {
      attenCol: '#8b52d4',
      attenDist: 3.1,
      sssColor: '#dd9cff',
      sssIntensity: 0.32,
      iridescence: 0.58,
      thickness: 0.42,
      roughness: 0.13,
      sheenColor: '#ffd9ff',
      normalMap: bump(8, 4),
      normalScale: 0.22,
    });

    // Three graceful sweeping cytoplasmic tentacles emerging cleanly from the outer Asgard membrane around the symbiont
    const tentCurves = [
      // Tentacle 1: Upper cradling arm arching over the symbiont crown
      new THREE.CatmullRomCurve3([
        archSurf(V(0.66, 0.68, -0.32), -0.15).p,
        V(2.35, 3.22, -1.05),
        V(4.05, 3.18, -0.60),
        V(5.75, 2.48, -0.45),
        V(6.58, 1.28, -0.60),
      ]),
      // Tentacle 2: Lower embracing arm sweeping beneath the symbiont
      new THREE.CatmullRomCurve3([
        archSurf(V(0.68, -0.66, -0.32), -0.15).p,
        V(2.45, -3.08, -0.82),
        V(4.25, -2.95, -0.35),
        V(5.90, -2.12, -0.42),
        V(6.52, -0.98, -0.74),
      ]),
      // Tentacle 3: Mid-rear syntrophic contact arm hugging the dorsal cleft (starts cleanly at back outer membrane!)
      new THREE.CatmullRomCurve3([
        archSurf(V(0.74, 0.06, -0.67), -0.10).p,
        V(2.65, 0.25, -2.35),
        V(3.85, 0.22, -2.42),
        V(5.35, 0.25, -2.38),
        V(6.48, 0.12, -1.82),
      ]),
    ];

    const S_LOKI = sculpt('lokiactin', asgardGroup, false, {
      emissive: '#166b4c',
      emissiveIntensity: 0.26,
      roughness: 0.34,
    });
    const I_LOKI = molBatch('lokiactin', T.geoLoki, asgardGroup, false, {
      emissive: '#155c42',
      emissiveIntensity: 0.18,
    });
    const S_LOKI_CORE = sculpt('lokiactin', cell, false, {
      emissive: '#155c42',
      emissiveIntensity: 0.22,
    });
    const I_LOKI_CORE = molBatch('lokiactin', T.geoLoki, cell, false, {
      emissive: '#14543d',
      emissiveIntensity: 0.16,
    });

    const cAct1 = col('#5cf2b8'), cAct2 = col('#28d49b'), cActTip = col('#b8ffe6');

    tentCurves.forEach((cv, idx) => {
      const rFn = t => {
        const base = 0.64 * (1 - 0.44 * t) + 0.04 * Math.sin(t * Math.PI * 5 + idx);
        const cap = t > 0.92 ? Math.sqrt(Math.max(0.03, 1 - Math.pow((t - 0.92) / 0.08, 2))) : 1;
        return base * cap;
      };
      const mesh = shade(new THREE.Mesh(sweepGeo(cv, rFn, 68, 24), tentMat), true, true);
      asgardGroup.add(mesh);

      // Rounded tip dome
      const tipPos = cv.getPointAt(1);
      const tipCap = new THREE.Mesh(blobGeo(0.24, fbm, 31 + idx * 7, 0.06, 2.2, 3), tentMat);
      tipCap.position.copy(tipPos);
      asgardGroup.add(tipCap);

      SITES.tentacle.push(cv.getPointAt(0.35), cv.getPointAt(0.65));

      // Twin helical Lokiactin filament bundles running inside each translucent tentacle
      const N = 46;
      const fr = geometry.ptFrames(cv, N);
      const strandA: THREE.Vector3[] = [];
      const strandB: THREE.Vector3[] = [];
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const c = cv.getPointAt(t);
        const a = t * Math.PI * 9 + idx * 1.4;
        const rad = 0.12 * (1 - 0.38 * t);
        const o = fr.N[i].clone().multiplyScalar(Math.cos(a) * rad).addScaledVector(fr.B[i], Math.sin(a) * rad);
        strandA.push(c.clone().add(o));
        strandB.push(c.clone().sub(o));
        // Real PDB 5ZZB LokiProfilin-2 / actin complexes docked along the branching cables
        if (i >= 4 && i <= N - 4 && i % 5 === 0) {
          const pMol = c.clone().addScaledVector(o, 1.25);
          I_LOKI.add(pMol, qOut(fr.N[i], a), rr(0.72, 0.95));
          placed++;
          if (SITES.lokiactin.length < 28) SITES.lokiactin.push(pMol.clone());
        }
      }
      S_LOKI.tube(strandA, 0.056, 0.036, cAct1, cActTip, 8, true);
      S_LOKI.tube(strandB, 0.052, 0.032, cAct2, cAct1, 8, true);
    });

    // Cortical branching Lokiactin cytoskeleton inside the Asgard body cutaway (visible in both modes!)
    const cortexCurves = [
      new THREE.CatmullRomCurve3([V(-3.4, 2.3, -1.6), V(-2.2, 2.8, -0.9), V(-0.6, 2.9, -1.2), V(0.7, 2.95, -1.6)]),
      new THREE.CatmullRomCurve3([V(-3.6, -2.1, -1.4), V(-2.1, -2.7, -0.7), V(-0.4, -2.8, -0.9), V(0.85, -2.72, -1.3)]),
      new THREE.CatmullRomCurve3([V(-3.8, 0.4, -1.9), V(-2.6, 0.8, -2.4), V(-0.8, 0.5, -2.6), V(1.15, 0.25, -2.3)]),
    ];
    cortexCurves.forEach((cv, ci) => {
      const pts = cv.getSpacedPoints(32);
      S_LOKI_CORE.tube(pts, 0.055, 0.045, cAct2, cAct1, 8, true);
      for (let k = 5; k < pts.length - 4; k += 8) {
        I_LOKI_CORE.add(pts[k], qOut(randDir(), k + ci), 0.86);
        placed++;
        SITES.lokiactin.push(pts[k].clone());
      }
    });
    S_LOKI.done();
    I_LOKI.done();
    S_LOKI_CORE.done();
    I_LOKI_CORE.done();

    // ESCRT-III conical helical membrane-scission spirals at tentacle necks & a cortical budding neck
    const S_ESCRT = sculpt('escrt', cell, false, {
      emissive: '#8f1f52',
      emissiveIntensity: 0.30,
      roughness: 0.30,
      clearcoat: 0.45,
    });
    const cEsc1 = col('#ff6ca8'), cEsc2 = col('#ffb3d4');

    const emitEscrtSpiral = (origin: THREE.Vector3, axis: THREE.Vector3, r0: number, r1: number, height: number, turns: number) => {
      const nrm = axis.clone().normalize();
      const uAx = ortho(nrm);
      const vAx = nrm.clone().cross(uAx).normalize();
      const pts: THREE.Vector3[] = [];
      const steps = Math.round(turns * 28);
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const a = t * turns * Math.PI * 2;
        const r = r0 + (r1 - r0) * t;
        pts.push(
          origin
            .clone()
            .addScaledVector(nrm, (t - 0.5) * height)
            .addScaledVector(uAx, Math.cos(a) * r)
            .addScaledVector(vAx, Math.sin(a) * r)
        );
      }
      S_ESCRT.tube(pts, 0.052, 0.036, cEsc1, cEsc2, 8, true);
      SITES.escrt.push(origin.clone());
      placed += 3;
    };

    // Tentacle neck constriction collars (where Asgard remodels outgoing protrusions)
    emitEscrtSpiral(tentCurves[0].getPointAt(0.11), tentCurves[0].getTangentAt(0.11), 0.72, 0.56, 0.56, 3.6);
    emitEscrtSpiral(tentCurves[1].getPointAt(0.11), tentCurves[1].getTangentAt(0.11), 0.70, 0.54, 0.54, 3.6);
    // Showcase conical ESCRT-III scission vortex on a budding outer membrane vesicle (lower-bottom shoulder, clear of inset!)
    const budDir = V(0.18, -0.92, -0.35).normalize();
    const budNeck = archSurf(budDir, 0.06);
    emitEscrtSpiral(budNeck.p, budNeck.n, 0.60, 0.22, 0.52, 4.2);
    const budBleb = new THREE.Mesh(blobGeo(0.46, fbm, 88, 0.07, 2.2, 3), tentMat);
    budBleb.position.copy(budNeck.p).addScaledVector(budNeck.n, 0.48);
    cell.add(budBleb);

    S_ESCRT.done();
    return { tentCurves };
  }

  // 3. Spinning ATP-Driven Archaellum (ArlB PDB 7OFQ) & Basal ArlI Hexameric ATPase (PDB 4IHQ)
  function buildArchaellumAndArlI(T) {
    const arliMat = protMat('arli', false, {
      emissive: '#6e4c08',
      emissiveIntensity: 0.24,
      roughness: 0.34,
      clearcoat: 0.42,
    });
    const arlbMat = protMat('archaellum', false, {
      emissive: '#0c526e',
      emissiveIntensity: 0.24,
      roughness: 0.30,
      clearcoat: 0.48,
    });

    const S_ARLI = sculpt('arli', cell, false, { emissive: '#6e4c08', emissiveIntensity: 0.22 });
    const I_ARLI = makeMolBatch(T.geoArli, arliMat, cell);

    const addArchaellumUnit = (dirVec: THREE.Vector3, lengthSegs: number, ampMax: number) => {
      const n = dirVec.clone().normalize();
      const surf = archSurf(n, 0);
      const baseIn = surf.p.clone().addScaledVector(n, -0.44);
      const qAxis = qOut(n);

      // Hexameric ArlI ATPase motor (two opposing 3-chain PDB 4IHQ cryo-EM trimers = full 6-fold ring!)
      I_ARLI.add(baseIn, qOut(n, 0), 1.0);
      I_ARLI.add(baseIn, qOut(n, Math.PI), 1.0);
      placed += 2;
      SITES.arli.push(baseIn.clone());

      // Sculpted ArlJ transmembrane platform ring + ArlH regulatory collar + ATP catalytic pockets
      S_ARLI.ring(surf.p.clone().addScaledVector(n, -0.10), n, 0.48, 0.09, col('#ffbe42'), 28, 10);
      S_ARLI.ring(baseIn.clone().addScaledVector(n, -0.18), n, 0.38, 0.065, col('#ffe680'), 24, 8);
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2;
        const u = ortho(n);
        const v = n.clone().cross(u).normalize();
        const pAtp = baseIn.clone().addScaledVector(u, Math.cos(a) * 0.42).addScaledVector(v, Math.sin(a) * 0.42);
        S_ARLI.add(pAtp, 0.14, col('#fff066'));
      }

      // Spinning ArlB archaellum rotor group (local +Z = outward propulsion axis)
      const rotor = new THREE.Group();
      rotor.position.copy(surf.p).addScaledVector(n, 0.06);
      rotor.quaternion.copy(qFromZ(n));
      cell.add(rotor);

      // Build smooth right-handed helical curve of real PDB 7OFQ ArlB filament segments
      const segStep = 0.48;
      const helixPts: THREE.Vector3[] = [];
      const segBatch = makeMolBatch(T.geoArlb, arlbMat, rotor);
      for (let s = 0; s < lengthSegs; s++) {
        const z = 0.25 + s * segStep;
        const u = s / Math.max(1, lengthSegs - 1);
        const amp = ampMax * Math.min(1, u / 0.35);
        const ang = u * Math.PI * 3.8;
        const pt = V(Math.cos(ang) * amp, Math.sin(ang) * amp, z);
        helixPts.push(pt);
      }
      const hCurve = new THREE.CatmullRomCurve3(helixPts);
      for (let s = 0; s < lengthSegs; s++) {
        const t = s / Math.max(1, lengthSegs - 1);
        const pt = hCurve.getPointAt(t);
        const tan = hCurve.getTangentAt(t);
        segBatch.add(pt, qFromZ(tan, s * 0.72), 0.96 - 0.12 * t);
        placed++;
        if (s === 4 || s === Math.floor(lengthSegs * 0.65)) {
          SITES.archaellum.push(pt.clone().applyQuaternion(rotor.quaternion).add(rotor.position));
        }
      }
      segBatch.done();

      // Continuous glowing glacial-cyan inner braided core through all 7OFQ segments
      const S_CORE = sculpt('archaellum', rotor, false, { emissive: '#0c526e', emissiveIntensity: 0.30 });
      S_CORE.tube(hCurve.getSpacedPoints(lengthSegs * 3), 0.135, 0.085, col('#78e8ff'), col('#c0f7ff'), 10, true);
      S_CORE.done();

      archaellumRotors.push({ rotor, speed: 3.4 });
    };

    // Hero exterior spinning ATP-driven archaellum sweeping gracefully up-left inside the overview frame
    addArchaellumUnit(V(-0.74, 0.52, -0.42), 14, 0.50);
    // Secondary cutaway-proximal archaellum on upper-dorsal crown so ArlI ATP consumption is visible inside the cutaway!
    addArchaellumUnit(V(-0.22, 0.90, -0.36), 9, 0.30);

    I_ARLI.done();
    S_ARLI.done();
  }

  // 4. Bacteriorhodopsin Purple-Membrane Trimers (PDB 1C3W) & Spinning Rotary A1A0 ATP Synthases
  function buildBacteriorhodopsinAndA1A0(T) {
    const brMat = protMat('bacteriorhodopsin', false, {
      emissive: '#4d1478',
      emissiveIntensity: 0.24,
      roughness: 0.32,
      clearcoat: 0.44,
    });
    const brRetMat = reg(
      'bacteriorhodopsin',
      phys({ color: '#ff9442', emissive: '#ff6a1a', emissiveIntensity: 0.75, roughness: 0.22 }, {})
    );

    const baseBrBatch = makeMolBatch(T.geoBr, brMat, cell);
    const extBrBatch = makeMolBatch(T.geoBr, brMat, extremophileExtraGroup);
    const retBaseMs: THREE.Matrix4[] = [];
    const retExtMs: THREE.Matrix4[] = [];
    const retGeo = new THREE.SphereGeometry(0.055, 10, 8);

    const placeBrTrimer = (dir: THREE.Vector3, targetBatch, targetRetMs, recordSite: boolean) => {
      const { p, n } = archSurf(dir, 0.04);
      const u = ortho(n);
      const v = n.clone().cross(u).normalize();
      for (let k = 0; k < 3; k++) {
        const a = (k / 3) * Math.PI * 2 + 0.3;
        const pos = p.clone().addScaledVector(u, Math.cos(a) * 0.14).addScaledVector(v, Math.sin(a) * 0.14);
        targetBatch.add(pos, qFromZ(n, a), 1.0);
        targetRetMs.push(atS(pos.clone().addScaledVector(n, 0.04), 1));
        placed++;
      }
      if (recordSite) SITES.bacteriorhodopsin.push(p.clone().addScaledVector(n, 0.16));
    };

    // Base Halobacterium purple-membrane hexagonal patch on the left-front flank (always visible!)
    const brCenterDir = V(-0.84, 0.14, 0.52).normalize();
    const brU = ortho(brCenterDir);
    const brV = brCenterDir.clone().cross(brU).normalize();
    const hexRingsBase = [
      [0, 0],
      [1, 0], [-1, 0], [0.5, 0.866], [-0.5, 0.866], [0.5, -0.866], [-0.5, -0.866],
    ];
    hexRingsBase.forEach(([hx, hy]) => {
      const d = brCenterDir.clone().addScaledVector(brU, hx * 0.125).addScaledVector(brV, hy * 0.125).normalize();
      placeBrTrimer(d, baseBrBatch, retBaseMs, true);
    });
    baseBrBatch.done();
    cell.add(instanced(retGeo, brRetMat, retBaseMs));

    // Curved spherical-cap purple lipid membrane domain conforming smoothly to archR(d) (zero poking rim!)
    const buildCurvedPatch = (centerDir: THREE.Vector3, maxAng: number, rOff: number, segR = 14, segA = 32) => {
      const u = ortho(centerDir);
      const v = centerDir.clone().cross(u).normalize();
      const pos: number[] = [];
      const idx: number[] = [];
      for (let ri = 0; ri <= segR; ri++) {
        const th = (ri / segR) * maxAng;
        const cth = Math.cos(th), sth = Math.sin(th);
        for (let ai = 0; ai <= segA; ai++) {
          const ph = (ai / segA) * Math.PI * 2;
          const d = centerDir
            .clone()
            .multiplyScalar(cth)
            .addScaledVector(u, sth * Math.cos(ph))
            .addScaledVector(v, sth * Math.sin(ph))
            .normalize();
          const { p } = archSurf(d, rOff);
          pos.push(p.x, p.y, p.z);
        }
      }
      for (let ri = 0; ri < segR; ri++) {
        for (let ai = 0; ai < segA; ai++) {
          const a = ri * (segA + 1) + ai;
          const b = a + segA + 1;
          idx.push(a, a + 1, b, a + 1, b + 1, b);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    };

    const brPatchMat = reg(
      'bacteriorhodopsin',
      phys(
        {
          color: '#7828b5',
          emissive: '#3e0e6e',
          emissiveIntensity: 0.36,
          roughness: 0.32,
          clearcoat: 0.5,
          transparent: true,
          opacity: 0.68,
          side: THREE.DoubleSide,
        },
        CLIP
      )
    );
    cell.add(new THREE.Mesh(buildCurvedPatch(brCenterDir, 0.25, 0.032), brPatchMat));
    extremophileExtraGroup.add(new THREE.Mesh(buildCurvedPatch(brCenterDir, 0.39, 0.035), brPatchMat));

    // Extremophile Mode expanded purple-membrane crystalline domains (19 extra trimers!)
    const extRingCoords = [
      [2, 0], [-2, 0], [1.5, 0.866], [-1.5, 0.866], [1.5, -0.866], [-1.5, -0.866],
      [1, 1.732], [0, 1.732], [-1, 1.732], [1, -1.732], [0, -1.732], [-1, -1.732],
    ];
    extRingCoords.forEach(([hx, hy]) => {
      const d = brCenterDir.clone().addScaledVector(brU, hx * 0.125).addScaledVector(brV, hy * 0.125).normalize();
      if (!inArchWedge(archSurf(d, 0).p)) placeBrTrimer(d, extBrBatch, retExtMs, false);
    });
    // Second purple-membrane patch on lower-left flank in Extremophile mode
    const br2Dir = V(-0.68, -0.46, 0.56).normalize();
    const br2U = ortho(br2Dir);
    const br2V = br2Dir.clone().cross(br2U).normalize();
    hexRingsBase.forEach(([hx, hy]) => {
      const d = br2Dir.clone().addScaledVector(br2U, hx * 0.125).addScaledVector(br2V, hy * 0.125).normalize();
      if (!inArchWedge(archSurf(d, 0).p)) placeBrTrimer(d, extBrBatch, retExtMs, false);
    });
    extremophileExtraGroup.add(new THREE.Mesh(buildCurvedPatch(br2Dir, 0.24, 0.034), brPatchMat));
    extBrBatch.done();
    if (retExtMs.length) extremophileExtraGroup.add(instanced(retGeo, brRetMat, retExtMs));

    // Rotary A1A0 ATP Synthases (with hallmark archaeal TWIN peripheral stalks & spinning rotor!)
    const a1Mat = reg(
      'a_atps',
      phys({ color: '#ffd452', emissive: '#6e4a05', emissiveIntensity: 0.20, roughness: 0.32, clearcoat: 0.45 }, {})
    );
    const a0Mat = reg(
      'a_atps',
      phys({ color: '#f59c38', emissive: '#592c04', emissiveIntensity: 0.18, roughness: 0.36, clearcoat: 0.35 }, {})
    );
    const stalkMatA = reg(
      'a_atps',
      phys({ color: '#ffeaa0', roughness: 0.35, clearcoat: 0.3 }, {})
    );

    const addA1A0 = (dir: THREE.Vector3, parent: THREE.Object3D, recordSite: boolean) => {
      const { p, n } = archSurf(dir, -0.04);
      const inward = n.clone().negate();
      const unit = new THREE.Group();
      unit.position.copy(p);
      unit.quaternion.copy(qOut(inward)); // +Y points inward into cytoplasm
      parent.add(unit);

      // Stationary A1 hexameric catalytic crown (A3B3 alternating lobes)
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2;
        const lobe = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10), k % 2 === 0 ? a1Mat : a0Mat);
        lobe.scale.set(0.88, 1.32, 0.88);
        lobe.position.set(Math.cos(a) * 0.165, 0.50, Math.sin(a) * 0.165);
        unit.add(lobe);
      }
      // Twin archaeal peripheral EG stalks + membrane stator collar (archaeal signature!)
      for (const sideSign of [-1, 1]) {
        const st = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.032, 0.56, 8), stalkMatA);
        st.position.set(sideSign * 0.25, 0.28, 0);
        st.rotation.z = sideSign * 0.08;
        unit.add(st);
      }

      // Live spinning rotor sub-group (membrane A0 c-ring turbine + central DF shaft)
      const rotor = new THREE.Group();
      const cRing = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.22, 10), a0Mat);
      cRing.position.set(0, 0.0, 0);
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.44, 8), stalkMatA);
      shaft.position.set(0, 0.26, 0);
      // Small asymmetric marker fin on the c-ring so rotation reads visibly!
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.39, 0.06, 0.06), a1Mat);
      fin.position.set(0, 0.04, 0);
      rotor.add(cRing, shaft, fin);
      unit.add(rotor);
      atpsRotors.push({ rotor, speed: 4.2 + rand() * 1.4 });
      placed++;

      if (recordSite) SITES.a_atps.push(p.clone().addScaledVector(inward, 0.45));
    };

    // 6 always-visible A1A0 synthases flanking the purple patch & cutaway edge
    const a1a0BaseDirs = [
      V(-0.74, 0.44, 0.50),
      V(-0.76, -0.18, 0.62),
      V(-0.66, 0.54, 0.52),
      V(-0.22, 0.72, 0.66),
      V(-0.24, -0.68, 0.68),
      V(-0.92, 0.22, 0.30),
    ];
    a1a0BaseDirs.forEach(d => addA1A0(d, cell, true));

    // 8 additional A1A0 synthases energized in Extremophile mode
    const a1a0ExtDirs = [
      V(-0.94, -0.15, -0.28),
      V(-0.82, 0.48, -0.32),
      V(-0.80, -0.48, -0.36),
      V(-0.48, 0.76, 0.44),
      V(-0.48, -0.78, 0.40),
      V(-0.88, -0.32, 0.36),
      V(-0.56, 0.14, -0.82),
      V(-0.44, -0.52, -0.72),
    ];
    a1a0ExtDirs.forEach(d => addA1A0(d, extremophileExtraGroup, false));
  }

  // 5. Eukaryotic-Like Core: Circular dsDNA + HMfB Histones (5T5K) + 12-Subunit Archaeal RNAP (2PMZ) + mRNA + 70S Ribosomes
  function buildArchaealCore(T) {
    const B_DNA = balls('dna', cell, false);
    const B_RNA = balls('mrna', cell, false);
    const I_HIST = molBatch('histone', T.geoHistone, cell, false, {
      emissive: '#591632',
      emissiveIntensity: 0.16,
    });
    const I_RNAP = molBatch('rnap', T.geoRnap, cell, false, {
      emissive: '#341a6e',
      emissiveIntensity: 0.18,
    });
    const S_RNAP = sculpt('rnap', cell, false); // TBP/TFB initiation factors docked at TATA box!
    const I_RIBO = molBatch('ribosome', T.geoRibo70, cell, false);

    const DNA_NM = 0.056;
    const histSites: THREE.Vector3[] = [];
    const rnapAnchors: Array<{ pos: THREE.Vector3; tan: THREE.Vector3 }> = [];

    // 7 supercoiled circular dsDNA loops winding gracefully inside the backlit archaeon cutaway
    const LOOP_COUNT = 7;
    for (let L = 0; L < LOOP_COUNT; L++) {
      const yMid = -2.05 + (L / (LOOP_COUNT - 1)) * 4.1;
      const a0 = L * 1.45 + 0.55;
      const maxR = Math.max(1.35, Math.sqrt(Math.max(0.2, 3.35 * 3.35 - yMid * yMid)) * 0.88);
      const ctrl: THREE.Vector3[] = [];
      for (let k = 0; k <= 10; k++) {
        const t = k / 10;
        const ang = a0 + Math.sin(t * Math.PI) * 1.45 + k * 0.24;
        const rad = maxR * (0.28 + 0.68 * Math.sin(t * Math.PI));
        let lx = Math.cos(ang) * rad;
        let lz = Math.sin(ang) * rad;
        // Keep the DNA loops right inside the visible cutaway face (subtle pop near the cut!)
        if (lx > 0.22 && lz > 0.22) lx = -Math.abs(lx) * 0.72 - 0.18;
        ctrl.push(V(A0.x + lx, A0.y + yMid + Math.sin(t * Math.PI * 2 + L) * 0.42, A0.z + lz));
      }
      const cv = new THREE.CatmullRomCurve3(ctrl);
      const pts = cv.getSpacedPoints(128);
      dna.emitDNA(B_DNA, pts, { nm: DNA_NM });
      SITES.dna.push(pts[64].clone());

      // Place real PDB 5T5K HMfB archaeal histone hypernucleosomes along each loop
      for (let h = 22; h < pts.length - 18; h += 38) {
        const pH = pts[h];
        const tan = pts[Math.min(pts.length - 1, h + 1)].clone().sub(pts[Math.max(0, h - 1)]).normalize();
        I_HIST.add(pH, qFromZ(tan, h * 0.4), rr(0.92, 1.08));
        placed++;
        histSites.push(pH.clone());
        if (SITES.histone.length < 22) SITES.histone.push(pH.clone());
      }

      // Pick open promoter spots for 12-subunit archaeal RNA polymerases
      if (L >= 1 && L <= 5) {
        const idxR = 54 + (L % 2) * 18;
        const pR = pts[idxR].clone();
        const tanR = pts[idxR + 1].clone().sub(pts[idxR - 1]).normalize();
        rnapAnchors.push({ pos: pR, tan: tanR });
      }
    }

    // 5 real PDB 2PMZ 12-subunit archaeal RNA polymerases + TBP/TFB factors + nascent mRNA + coupled 70S polysomes
    const polyRiboSpots: THREE.Vector3[] = [];
    rnapAnchors.forEach(({ pos, tan }, idx) => {
      I_RNAP.add(pos, qOut(tan, idx * 1.15), 1.0);
      placed++;
      SITES.rnap.push(pos.clone());
      // TBP saddle + TFB bridge nodule perched at promoter entry
      S_RNAP.lobe(pos.clone().addScaledVector(tan, -0.34), 0.14, 0.10, 0.12, col('#ffd166'));
      S_RNAP.lobe(pos.clone().addScaledVector(tan, -0.22).add(V(0, 0.14, 0)), 0.11, 0.11, 0.11, col('#78e8ff'));

      // Extrude a sinuous amber nascent mRNA strand out of the RNAP active cleft
      const mPts: THREE.Vector3[] = [];
      const outDir = V(idx % 2 === 0 ? -0.55 : 0.35, 0.35 - idx * 0.14, -0.55).normalize();
      for (let k = 0; k < 34; k++) {
        const s = k * 0.068;
        const q = pos
          .clone()
          .addScaledVector(outDir, s)
          .add(V(Math.sin(k * 0.38 + idx) * 0.12, Math.cos(k * 0.34 + idx) * 0.11, Math.sin(k * 0.29) * 0.08));
        // Keep mRNA neatly inside the archaeal membrane
        const rel = q.clone().sub(A0);
        if (rel.length() > 3.75) q.copy(A0).addScaledVector(rel.normalize(), 3.75);
        mPts.push(q);
        if (k === 11 || k === 21 || k === 31) polyRiboSpots.push(q.clone());
      }
      rna.rnaAlong(B_RNA, mPts, MRNA, 0.058);
      SITES.mrna.push(mPts[17].clone());
    });

    // ~72 sculpted cryo-EM 70S archaeal ribosomes (polysomes + free cytosolic population)
    let riboCount = 0;
    polyRiboSpots.forEach((p, i) => {
      I_RIBO.add(p, qOut(randDir(), i * 0.8), 1.02);
      riboCount++;
      placed++;
      SITES.ribosome.push(p.clone());
    });
    for (let guard = 0; riboCount < 64 && guard < 900; guard++) {
      const d = randDir();
      const rad = rr(1.45, 3.55);
      const p = A0.clone().addScaledVector(d, rad);
      if (p.x > A0.x - 0.18 && p.z > A0.z - 0.18) continue;
      if (histSites.some(h => h.distanceToSquared(p) < 0.42)) continue;
      I_RIBO.add(p, qOut(randDir(), riboCount * 0.7), rr(0.86, 1.04));
      riboCount++;
      placed++;
      if (SITES.ribosome.length < 36) SITES.ribosome.push(p.clone());
    }

    B_DNA.done();
    B_RNA.done();
    I_HIST.done();
    I_RNAP.done();
    S_RNAP.done();
    I_RIBO.done();
  }

  // 6. Endosymbiotic Alphaproteobacterial Symbiont + Synapse + H2 & ATP Conduits
  function buildSymbiontAndSynapse() {
    // Cutaway Rickettsia-like alphaproteobacterium (double bilayer + folded cristae-like inner membrane)
    const symOuterMat = cinemaShellMat('symbiont', '#d9584a', '#ffd4c7', SYMB_CLIP, {
      attenCol: '#c44239',
      attenDist: 3.0,
      sssColor: '#ff7d66',
      sssIntensity: 0.34,
      iridescence: 0.38,
      thickness: 0.45,
      roughness: 0.13,
      sheenColor: '#ffded4',
      normalMap: bump(10, 12),
      normalScale: 0.24,
    });
    asgardGroup.add(shade(new THREE.Mesh(shellGeo(S0, symbR, 112), symOuterMat), true, true));

    // Inner alphaproteobacterial membrane (coral-amber interior lining)
    const symInnerMat = reg(
      'symbiont',
      applyBacklitSSS(
        phys(
          {
            color: '#6e2328',
            roughness: 0.56,
            clearcoat: 0.28,
            normalMap: bump(10, 10),
            normalScale: new THREE.Vector2(0.24, 0.24),
            side: THREE.BackSide,
          },
          SYMB_CLIP
        ),
        '#ff8866',
        0.24,
        2.5
      )
    );
    asgardGroup.add(new THREE.Mesh(shellGeo(S0, d => symbR(d) - 0.22, 84), symInnerMat));

    // Crisp 3-BAND BACTERIAL BILAYER + OUTER MEMBRANE cutaway cap strip
    // (visually contrasting against the Asgard archaeon's fused single-sheet gold monolayer!)
    const BILAYER_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.22, '#ff8d78'], // Outer membrane leaflet
      [0.22, 0.46, '#361520'], // Periplasmic space
      [0.46, 0.64, '#ffd080'], // Inner bilayer outer leaflet
      [0.64, 0.78, '#4a1d26'], // Hydrophobic bilayer mid-gap!
      [0.78, 1.0, '#ff9a76'], // Inner bilayer cytoplasmic leaflet
    ];
    const symCapMat = reg(
      'symbiont',
      new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.36, side: THREE.DoubleSide })
    );
    for (const ax of ['x', 'z'] as const) {
      asgardCaps.add(new THREE.Mesh(capStrip(S0, symbR, ax, 0.22, BILAYER_LAYERS, 160), symCapMat));
    }

    // Folded cristae-like inner membrane invaginations (curved smooth baffles foreshadowing mitochondria)
    const S_SYM = sculpt('symbiont', asgardGroup, false, {
      emissive: '#6e1d18',
      emissiveIntensity: 0.18,
    });
    const cCris1 = col('#ff8c70'), cCris2 = col('#ffc094'), cEtc = col('#ff665c'), cSymDna = col('#6caeff');
    for (let f = 0; f < 4; f++) {
      const fy = -1.22 + f * 0.80;
      const cv = new THREE.CatmullRomCurve3([
        V(S0.x - 1.32, S0.y + fy, S0.z - 0.30),
        V(S0.x - 0.62, S0.y + fy + 0.24, S0.z - 0.74),
        V(S0.x + 0.05, S0.y + fy + 0.04, S0.z - 0.86),
        V(S0.x - 0.52, S0.y + fy - 0.22, S0.z - 0.46),
        V(S0.x - 1.24, S0.y + fy - 0.14, S0.z - 0.16),
      ]);
      const pts = cv.getSpacedPoints(20);
      S_SYM.tube(pts, 0.135, 0.115, cCris1, cCris2, 10, true);
      S_SYM.add(pts[6].clone().add(V(0, 0.12, 0.14)), 0.13, cEtc);
      S_SYM.add(pts[11].clone().add(V(0, -0.10, 0.14)), 0.13, col('#ffd452'));
      SITES.symbiont.push(pts[8].clone());
    }
    // Miniature alphaproteobacterial circular DNA ring inside the symbiont matrix
    const symRing: THREE.Vector3[] = [];
    for (let k = 0; k < 24; k++) {
      const a = (k / 24) * Math.PI * 2;
      symRing.push(V(S0.x - 0.42 + Math.cos(a) * 0.56, S0.y + Math.sin(a) * 0.72, S0.z - 0.92 + Math.sin(a * 2) * 0.18));
    }
    S_SYM.tube([...symRing, symRing[0]], 0.042, 0.042, cSymDna, col('#8c78ff'), 6, false);
    SITES.symbiont.push(S0.clone().add(V(-0.35, 0.25, 0.45)));
    S_SYM.done();

    // Endosymbiotic Syntrophic Contact Cleft ('synapse'): intercellular tethers + luminous cleft cushion
    const S_SYN = sculpt('synapse', asgardGroup, false, {
      emissive: '#14627a',
      emissiveIntensity: 0.34,
      roughness: 0.28,
      clearcoat: 0.48,
    });
    const cSyn1 = col('#6ee6ff'), cSyn2 = col('#c29eff');
    const cleftCenters = [
      [V(2.55, 2.25, -0.82), V(3.38, 1.85, -0.58)],
      [V(2.65, 1.32, -0.95), V(3.05, 1.05, -0.55)],
      [V(2.55, 0.45, -1.25), V(2.92, 0.35, -0.68)],
      [V(2.58, -0.45, -1.15), V(2.96, -0.40, -0.62)],
      [V(2.72, -1.35, -0.88), V(3.18, -1.18, -0.52)],
      [V(2.68, -2.28, -0.68), V(3.48, -1.92, -0.48)],
      [V(3.85, 2.72, -0.58), V(4.25, 2.42, -0.42)],
      [V(4.05, -2.58, -0.36), V(4.35, -2.26, -0.38)],
    ];
    cleftCenters.forEach(([pA, pB], idx) => {
      const mid = pA.clone().lerp(pB, 0.5).add(V(0, Math.sin(idx) * 0.06, 0.08));
      S_SYN.tube([pA, mid, pB], 0.042, 0.042, cSyn2, cSyn1, 8, true);
      S_SYN.add(mid, 0.13, cSyn1);
      SITES.synapse.push(mid.clone());
      placed++;
    });
    // Translucent synaptic microenvironment glow cushion spanning the narrow cleft
    const synLens = new THREE.Mesh(
      new THREE.SphereGeometry(0.95, 24, 18),
      reg(
        'synapse',
        phys(
          {
            color: '#6ee6ff',
            emissive: '#228eb8',
            emissiveIntensity: 0.38,
            transparent: true,
            opacity: 0.16,
            depthWrite: false,
            roughness: 0.2,
          },
          {}
        )
      )
    );
    synLens.scale.set(0.45, 2.15, 0.95);
    synLens.position.set(2.82, 0.12, -0.52);
    asgardGroup.add(synLens);
    S_SYN.done();

    // Host H2 / Formate Cross-Feeding Conduits ('h2_flow'): hydrogenase pores at the Asgard cleft rim -> symbiont
    const S_H2 = sculpt('h2_flow', asgardGroup, false, {
      emissive: '#0c7a99',
      emissiveIntensity: 0.42,
      roughness: 0.26,
      clearcoat: 0.5,
    });
    const cH2a = col('#4ce6ff'), cH2b = col('#a8f7ff');
    const h2Routes = [
      [V(2.38, 1.52, -0.92), V(2.85, 1.35, -0.58), V(3.22, 1.08, -0.36)],
      [V(2.58, 0.52, -0.96), V(2.88, 0.44, -0.62), V(3.12, 0.34, -0.38)],
      [V(2.45, -0.76, -0.92), V(2.86, -0.68, -0.58), V(3.20, -0.56, -0.36)],
      [V(2.62, 2.38, -0.86), V(3.18, 2.08, -0.56), V(3.68, 1.65, -0.38)],
    ];
    h2Routes.forEach(pts => {
      const cv = new THREE.CatmullRomCurve3(pts);
      const nDir = pts[1].clone().sub(pts[0]).normalize();
      S_H2.ring(pts[0], nDir, 0.14, 0.044, cH2a, 18, 8);
      S_H2.tube(cv.getSpacedPoints(16), 0.032, 0.020, cH2a, cH2b, 8, true);
      SITES.h2_flow.push(cv.getPointAt(0.55));
      placed++;
    });
    S_H2.done();

    // Symbiont ATP Export Carriers ('atp_export'): ANT-like nucleotide translocases on symbiont cleft face -> Asgard
    const S_ATP = sculpt('atp_export', asgardGroup, false, {
      emissive: '#946c0a',
      emissiveIntensity: 0.42,
      roughness: 0.25,
      clearcoat: 0.52,
    });
    const cAtpA = col('#ffea5c'), cAtpB = col('#ffb838');
    const atpRoutes = [
      [V(3.22, 0.88, -0.22), V(2.86, 0.92, -0.05), V(2.48, 0.84, -0.28)],
      [V(3.12, -0.16, -0.20), V(2.82, -0.10, -0.02), V(2.50, -0.16, -0.26)],
      [V(3.24, -1.22, -0.22), V(2.88, -1.16, -0.05), V(2.45, -1.10, -0.30)],
      [V(3.58, -1.96, -0.32), V(3.10, -2.14, -0.15), V(2.62, -2.26, -0.45)],
    ];
    atpRoutes.forEach(pts => {
      const cv = new THREE.CatmullRomCurve3(pts);
      const nDir = pts[1].clone().sub(pts[0]).normalize();
      S_ATP.ring(pts[0], nDir, 0.155, 0.050, cAtpB, 18, 8);
      S_ATP.lobe(pts[0], 0.11, 0.11, 0.11, cAtpA);
      S_ATP.tube(cv.getSpacedPoints(16), 0.036, 0.022, cAtpA, cAtpB, 8, true);
      SITES.atp_export.push(cv.getPointAt(0.5));
      placed++;
    });
    S_ATP.done();
  }

  // 7. Atomic Ether (C-O-C on G1P + Branched Phytanyl) vs. Ester (C(=O)-O-C on G3P + Fatty Acyl) Inset
  function buildAtomicEtherInset() {
    const grp = new THREE.Group();
    grp.position.copy(E0);
    // Angle slightly toward the default overview camera so both bonds read crystal-clear!
    grp.rotation.set(0.14, 0.32, 0);
    cell.add(grp);

    // Translucent dark-glass scientific magnifier ring (never clipped!)
    const ringMat = reg(
      'ether_bond',
      phys(
        {
          color: '#ffba6e',
          emissive: '#6e3a0a',
          emissiveIntensity: 0.34,
          roughness: 0.24,
          metalness: 0.22,
          clearcoat: 0.65,
        },
        {}
      )
    );
    const lensRing = new THREE.Mesh(new THREE.TorusGeometry(1.52, 0.036, 14, 56), ringMat);
    grp.add(lensRing);

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(1.50, 48),
      reg(
        'ether_bond',
        phys(
          {
            color: '#0e1629',
            roughness: 0.18,
            transparent: true,
            opacity: 0.44,
            depthWrite: false,
            side: THREE.DoubleSide,
          },
          {}
        )
      )
    );
    glassDisc.position.z = -0.14;
    grp.add(glassDisc);

    // Subtle vertical divider between Ether (left, Archaea) and Ester (right, Bacteria/Eukarya)
    const S_EB = sculpt('ether_bond', grp, false, { roughness: 0.26, clearcoat: 0.55 });
    const cC = col('#8b96ab'), cO = col('#ff5460'), cOEther = col('#ffbe42'), cP = col('#b87cff'), cH = col('#e8f2ff'), cBond = col('#cbd6e8'), cMg = col('#52ff9a');

    S_EB.stick(V(0, -1.28, -0.05), V(0, 1.28, -0.05), 0.014, col('#6a7b99'), col('#6a7b99'));

    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.032) => S_EB.stick(a, b, r, c1, c2);
    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => S_EB.add(p, r * 2, c);

    // LEFT: Archaeal Ether Bond (G1P sn-glycerol-1-phosphate + glowing C-O-C ether + branched phytanyl tail)
    const eP = V(-1.02, 0.84, 0.08);
    const eOG = V(-0.82, 0.62, 0.06);
    const eC1 = V(-0.62, 0.46, 0.06);
    const eOE = V(-0.56, 0.12, 0.10); // Highlighted acid-proof ether oxygen!
    const eT1 = V(-0.66, -0.22, 0.08);
    const eT2 = V(-0.46, -0.50, 0.04);
    const eT3 = V(-0.70, -0.78, 0.08);
    const eT4 = V(-0.48, -1.06, 0.04);
    const eMe1 = V(-0.98, -0.18, 0.18); // Branched isoprenoid methyl group (-CH3)!
    const eMe2 = V(-1.02, -0.76, 0.18); // Branched isoprenoid methyl group (-CH3)!

    atom(eP, 0.13, cP);
    atom(eOG, 0.095, cO);
    atom(eC1, 0.105, cC);
    atom(eOE, 0.145, cOEther); // Glowing gold ether O (no fragile carbonyl!)
    atom(eT1, 0.105, cC);
    atom(eT2, 0.100, cC);
    atom(eT3, 0.105, cC);
    atom(eT4, 0.095, cC);
    atom(eMe1, 0.092, col('#ffd166'));
    atom(eMe2, 0.092, col('#ffd166'));
    atom(eC1.clone().add(V(-0.22, 0.08, 0.16)), 0.056, cH);

    bond(eP, eOG, cP, cO);
    bond(eOG, eC1, cO, cC);
    bond(eC1, eOE, cOEther, cOEther, 0.046);
    bond(eOE, eT1, cOEther, cOEther, 0.046);
    bond(eT1, eT2);
    bond(eT2, eT3);
    bond(eT3, eT4);
    bond(eT1, eMe1, cC, col('#ffd166'));
    bond(eT3, eMe2, cC, col('#ffd166'));

    // RIGHT: Bacterial / Eukaryotic Ester Bond (G3P + C(=O)-O-C with vulnerable double-bond carbonyl =O + straight acyl tail)
    const sP = V(1.02, 0.84, 0.08);
    const sOG = V(0.82, 0.62, 0.06);
    const sC3 = V(0.58, 0.46, 0.06);
    const sO = V(0.52, 0.14, 0.08);
    const sCarb = V(0.62, -0.18, 0.08);
    const sDblO = V(0.96, -0.16, 0.14); // Protruding carbonyl =O oxygen!
    const sA1 = V(0.46, -0.50, 0.04);
    const sA2 = V(0.68, -0.78, 0.08);
    const sA3 = V(0.48, -1.06, 0.04);

    atom(sP, 0.13, cP);
    atom(sOG, 0.095, cO);
    atom(sC3, 0.105, cC);
    atom(sO, 0.115, cO);
    atom(sCarb, 0.11, cC);
    atom(sDblO, 0.135, cO);
    atom(sA1, 0.098, cC);
    atom(sA2, 0.098, cC);
    atom(sA3, 0.095, cC);

    bond(sP, sOG, cP, cO);
    bond(sOG, sC3, cO, cC);
    bond(sC3, sO, cC, cO);
    bond(sO, sCarb, cO, cC);
    // Double bond C=O shown as twin parallel crimson-silver rods
    bond(sCarb.clone().add(V(0, 0.045, 0)), sDblO.clone().add(V(0, 0.045, 0)), cO, cO, 0.028);
    bond(sCarb.clone().add(V(0, -0.045, 0)), sDblO.clone().add(V(0, -0.045, 0)), cO, cO, 0.028);
    bond(sCarb, sA1);
    bond(sA1, sA2);
    bond(sA2, sA3);

    // Compact Mg2+-ATP spark tucked at the bottom center of the inset
    const mgP = V(0.0, -1.06, 0.18);
    const p1 = V(-0.18, -1.24, 0.12), p2 = V(0.0, -1.28, 0.14), p3 = V(0.18, -1.24, 0.12);
    atom(mgP, 0.075, cMg);
    atom(p1, 0.075, col('#ffea5c'));
    atom(p2, 0.075, col('#ffea5c'));
    atom(p3, 0.075, col('#ffea5c'));
    bond(p1, p2, col('#ffea5c'), col('#ffea5c'), 0.024);
    bond(p2, p3, col('#ffea5c'), col('#ffea5c'), 0.024);

    S_EB.done();

    // Crisp miniature caption plaque inside top rim contrasting Ether (C-O-C) vs Ester (C=O)
    const capCv = document.createElement('canvas');
    capCv.width = 512;
    capCv.height = 96;
    const cg = capCv.getContext('2d');
    cg.clearRect(0, 0, 512, 96);
    cg.font = '700 28px system-ui, -apple-system, sans-serif';
    cg.textAlign = 'center';
    cg.fillStyle = '#ffd26b';
    cg.fillText('ETHER (G1P)', 150, 38);
    cg.font = '600 20px system-ui, -apple-system, sans-serif';
    cg.fillStyle = '#ffeab8';
    cg.fillText('C-O-C · heat-proof', 150, 70);
    cg.font = '700 28px system-ui, -apple-system, sans-serif';
    cg.fillStyle = '#ff7d87';
    cg.fillText('ESTER (G3P)', 362, 38);
    cg.font = '600 20px system-ui, -apple-system, sans-serif';
    cg.fillStyle = '#ffd0d4';
    cg.fillText('C(=O)-O-C', 362, 70);
    const capTex = new THREE.CanvasTexture(capCv);
    capTex.colorSpace = THREE.SRGBColorSpace;
    const capLabel = new THREE.Mesh(
      new THREE.PlaneGeometry(1.74, 0.34),
      reg(
        'ether_bond',
        new THREE.MeshStandardMaterial({
          map: capTex,
          emissive: '#ffffff',
          emissiveMap: capTex,
          emissiveIntensity: 0.72,
          transparent: true,
          roughness: 0.4,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    capLabel.position.set(0, 1.02, 0.14);
    grp.add(capLabel);

    SITES.ether_bond.push(E0.clone());
    placed += 4;
  }

  // -------------------------------------------------------------------------
  // Live Metabolism Flows: Shaded Opaque-Discard 4x4 Glyphs (Visible Through Wet Gel!)
  // -------------------------------------------------------------------------
  const MOL = {
    h2: ['H₂ / Formate (host → symbiont)', '#4ce6ff', 0, 0.25],
    o2: ['Oxygen (O₂ → symbiont)', '#6cb8ff', 1, 0.23],
    atp: ['Charged ATP (energy export)', '#fff06a', 2, 0.28],
    adp: ['Spent ADP + Pᵢ', '#c2a648', 3, 0.23],
    hplus: ['Protons (H⁺ · 1C3W / A₁A₀)', '#66fff0', 4, 0.22],
    mrna: ['Nascent mRNA transcripts', MRNA, 5, 0.28],
    protein: ['New archaeal proteins', '#5cf2b8', 6, 0.25],
  };

  // Shaded, dark-outlined 4x4 glyph painter (white in GPU atlas tinted by vCol, colored in HUD legend)
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
      g.lineWidth = s * 0.11;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.stroke(); });
      g.fillStyle = gr;
      list.forEach(([u, v, r]) => { g.beginPath(); g.arc(...P(u, v), r * s, 0, Math.PI * 2); g.fill(); });
    };
    const drawLine = (pts, w) => {
      g.beginPath();
      pts.forEach(([u, v], i) => g[i ? 'lineTo' : 'moveTo'](...P(u, v)));
      g.lineWidth = (w + 0.11) * s; g.strokeStyle = ink; g.stroke();
      g.lineWidth = w * s; g.strokeStyle = gr; g.stroke();
    };
    switch (k) {
      case 0: // H2: sleek paired diatomic hydrogen spheres
        drawLine([[0.32, 0.5], [0.68, 0.5]], 0.12);
        drawBalls([[0.32, 0.5, 0.21], [0.68, 0.5, 0.21]]);
        break;
      case 1: // O2: diatomic oxygen
        drawBalls([[0.35, 0.5, 0.20], [0.65, 0.5, 0.20]]);
        break;
      case 2: // ATP: adenosine + 3 glowing phosphates
        drawBalls([[0.62, 0.5, 0.09], [0.76, 0.5, 0.09], [0.90, 0.5, 0.08], [0.32, 0.5, 0.23]]);
        break;
      case 3: // ADP: adenosine + 2 phosphates
        drawBalls([[0.63, 0.5, 0.09], [0.78, 0.5, 0.09], [0.35, 0.5, 0.22]]);
        break;
      case 4: // H+: glowing proton with crisp '+' symbol
        drawBalls([[0.5, 0.5, 0.29]]);
        g.beginPath();
        g.moveTo(...P(0.35, 0.5)); g.lineTo(...P(0.65, 0.5));
        g.moveTo(...P(0.5, 0.35)); g.lineTo(...P(0.5, 0.65));
        g.lineWidth = s * 0.08; g.strokeStyle = ink; g.stroke();
        break;
      case 5: // mRNA: sinuous transcript ribbon
        drawLine(Array.from({ length: 17 }, (_, i) => [0.12 + i * 0.0475, 0.5 + 0.18 * Math.sin(i * 0.78)]), 0.11);
        break;
      case 6: // New folded protein: globular 4-lobe domain
        drawBalls([[0.62, 0.4, 0.17], [0.58, 0.64, 0.18], [0.36, 0.64, 0.15], [0.4, 0.42, 0.20]]);
        break;
    }
    g.restore();
  }

  const ATLAS = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const g = c.getContext('2d');
    for (let k = 0; k < 7; k++) glyph(g, k, (k % 4) * 128 + 10, Math.floor(k / 4) * 128 + 10, 108, '#ffffff');
    return new THREE.CanvasTexture(c);
  })();

  // Opaque alpha-discard 4x4 flow shader (renders into Three.js transmission pass so glyphs shine right through wet gel!)
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
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.055, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. Asgard host fermentation H2 / formate flowing across the synapse into the alphaproteobacterial symbiont
    {
      rate: 2.8,
      acc: 0.4,
      go: () => {
        if (mode === 'extremophile') return;
        const src = V(rr(-2.1, -0.4), rr(-1.4, 1.4), rr(-1.4, 0.2));
        const cleft = pickSite('h2_flow', V(2.55, 0.35, -0.38));
        const dst = pickSite('symbiont', S0.clone().add(V(-0.4, 0.1, -0.4)));
        emitFlow('h2', [src, cleft, dst], ['h2_flow', 'synapse', 'symbiont', 'tentacle'], 2.9, () => splash(dst, '#4ce6ff', 0.34));
      },
    },
    // 2. Ambient O2 diffusing into the aerobic alphaproteobacterial symbiont ETC
    {
      rate: 2.2,
      acc: 0.5,
      go: () => {
        if (mode === 'extremophile') return;
        const dst = pickSite('symbiont', S0.clone().add(V(-0.3, 0.2, -0.4)));
        const src = S0.clone().add(V(rr(1.8, 3.6), rr(-2.0, 2.2), rr(1.2, 3.2)));
        emitFlow('o2', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.3, 0.2)), dst], ['symbiont', 'synapse'], 2.7);
      },
    },
    // 3. Symbiont respiratory ATP exported via ANT carriers back into the Asgard host + ADP return
    {
      rate: 2.8,
      acc: 0.6,
      go: () => {
        if (mode === 'extremophile') {
          // In Extremophile mode, A1A0 ATP synthases directly export golden ATP into cytoplasm & ArlI motor
          const src = pickSite('a_atps', V(-3.9, 1.2, 1.6));
          const dst = rand() < 0.5 ? pickSite('arli', V(-3.8, 2.4, -1.6)) : pickSite('ribosome', V(-2.2, 0.6, -1.2));
          emitFlow('atp', [src, src.clone().lerp(dst, 0.5).add(V(0.1, 0.25, 0)), dst], ['a_atps', 'arli', 'ribosome'], 2.8, () => {
            splash(dst, '#fff06a', 0.38);
            emitFlow('adp', [dst, src], ['arli', 'a_atps'], 2.8);
          });
          return;
        }
        const src = pickSite('symbiont', S0.clone().add(V(-0.5, -0.1, -0.3)));
        const cleft = pickSite('atp_export', V(2.45, -0.15, 0.22));
        const dstKey = rand() < 0.42 ? 'arli' : rand() < 0.5 ? 'lokiactin' : 'ribosome';
        const dst = pickSite(dstKey, V(-2.4, 0.9, -1.2));
        emitFlow('atp', [src, cleft, dst], ['atp_export', 'synapse', 'symbiont', dstKey], 3.1, () => {
          splash(dst, '#fff06a', 0.38);
          emitFlow('adp', [dst, cleft.clone().add(V(0, -0.25, -0.15)), src], ['atp_export', 'arli', 'symbiont'], 3.2);
        });
      },
    },
    // 4. Direct cytoplasmic ATP hydrolysis driving ArlI hexameric archaellum motor
    {
      rate: 1.7,
      acc: 0.3,
      go: () => {
        const motor = pickSite('arli', V(-3.7, 2.4, -1.7));
        const src = pickSite('a_atps', V(-4.2, 1.2, 1.5));
        emitFlow('atp', [src, src.clone().lerp(motor, 0.5).add(V(0.25, 0.3, -0.15)), motor], ['arli', 'archaellum', 'a_atps'], 2.4, () => {
          splash(motor, '#ffe066', 0.42);
          emitFlow('adp', [motor, src], ['arli', 'a_atps'], 2.5);
        });
      },
    },
    // 5. Light-driven H+ proton pumping across Halobacterium bacteriorhodopsin (1C3W) & return via A1A0 ATP synthase
    {
      rate: 3.1,
      acc: 0.5,
      go: () => {
        const br = pickSite('bacteriorhodopsin', V(-5.1, 0.6, 2.2));
        const outN = br.clone().sub(A0).normalize();
        const pIn = br.clone().addScaledVector(outN, -0.55);
        const pOut = br.clone().addScaledVector(outN, 1.35);
        const atps = pickSite('a_atps', V(-4.1, 1.6, 1.8));
        const boostMult = mode === 'extremophile' ? 2 : 1;
        for (let k = 0; k < boostMult; k++) {
          const jit = randDir().multiplyScalar(0.14);
          emitFlow('hplus', [pIn.clone().add(jit), br.clone().add(jit), pOut.clone().add(jit)], ['bacteriorhodopsin', 'tetraether', 'extremophile_shell'], 2.1, () => {
            splash(pOut, '#66fff0', 0.28);
            emitFlow('hplus', [pOut, atps.clone().addScaledVector(outN, 0.55), atps], ['a_atps', 'bacteriorhodopsin'], 2.3);
          });
        }
      },
    },
    // 6. Archaeal RNAP (2PMZ) -> nascent mRNA -> 70S ribosomes -> newly folded archaeal proteins
    {
      rate: 1.9,
      acc: 0.4,
      go: () => {
        const pol = pickSite('rnap', V(-1.9, 0.4, -0.8));
        const rib = pickSite('ribosome', V(-2.5, 1.2, -1.2));
        emitFlow('mrna', [pol, pol.clone().lerp(rib, 0.5).add(V(0, 0.22, 0.12)), rib], ['rnap', 'mrna', 'ribosome', 'dna', 'histone'], 2.6, () => {
          const dst = pickSite(rand() < 0.5 ? 'slayer' : 'lokiactin', V(-3.8, 1.6, -1.4));
          emitFlow('protein', [rib, rib.clone().lerp(dst, 0.5).add(V(-0.15, 0.15, 0)), dst], ['ribosome', 'protein', 'slayer', 'lokiactin'], 2.7);
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
  // Dual-Mode Switcher: Asgard + Symbiont <-> Extremophile (Sulfolobus / Halobacterium)
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: 'asgard' | 'extremophile', silent = false) {
    const target: 'asgard' | 'extremophile' = nextMode === 'extremophile' || nextMode === 'asgard'
      ? nextMode
      : mode === 'asgard' ? 'extremophile' : 'asgard';
    mode = target;
    const isExt = mode === 'extremophile';
    extremophileExtraGroup.visible = isExt;
    asgardGroup.visible = !isExt;
    asgardCaps.visible = !isExt && cutOn;
    cleftLamp.intensity = isExt ? 3.5 : 10.5;
    lamp.color.set(isExt ? '#ffd08f' : '#ffbe8a');

    if (modeBtn) {
      modeBtn.textContent = isExt ? 'Mode: Extremophile (Sulfolobus)' : 'Mode: Asgard + Symbiont';
      modeBtn.classList.toggle('extremophile', isExt);
    }
    if (subEl) {
      subEl.textContent = isExt
        ? 'Extremophile mode · Sulfolobus thermoacidophile S-layer armor + Halobacterium bacteriorhodopsin (1C3W) & A₁A₀ ATP synthases'
        : 'Cryo-EM dark-field cutaway · Asgard host + alphaproteobacterial partner · toggle Extremophile mode (1 unit = 100 nm)';
    }
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => {
      setMode();
      // Gently snap to the showcasing view when toggling manually in standalone mode
      const targetView = mode === 'extremophile' ? 'extremophile' : 'overview';
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
  const TIP0 = 'Domain Archaea & Endosymbiosis: Asgard host extends Lokiactin tentacles to trade fermentation H₂/formate for respiratory ATP from an alphaproteobacterial partner — or switch to Extremophile mode for Sulfolobus armor & Halobacterium bacteriorhodopsin.';
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
    if (name === 'extremophile') setMode('extremophile', true);
    else if (name === 'synapse' || name === 'overview') setMode('asgard', true);
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
    asgardCaps.visible = cutOn && mode === 'asgard';
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
    a.download = `archaea-${mode}-realistic.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.5, 0, -0.3])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      if (m.view === 'extremophile') setMode('extremophile', true);
      else if (m.view === 'synapse' || m.view === 'overview') setMode('asgard', true);
    }
    const fk = m.part || m.focus;
    if (fk === 'symbiont' || fk === 'synapse' || fk === 'tentacle' || fk === 'h2_flow' || fk === 'atp_export') {
      if (mode !== 'asgard') setMode('asgard', true);
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.5, 0, -0.2);
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

  // Exact tag coordinates for all 20 parts across all 6 views
  const POINTS = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base = {
      slayer: SITES.slayer[6] ?? V(-3.8, 2.2, 2.4),
      tetraether: SITES.tetraether[4] ?? V(-1.38, 2.85, 3.35),
      tentacle: SITES.tentacle[1] ?? V(3.85, 3.18, -0.60),
      escrt: SITES.escrt[2] ?? V(-3.48, -3.42, 1.75),
      extremophile_shell: SITES.extremophile_shell[3] ?? V(-3.85, 2.85, -2.35),
      archaellum: SITES.archaellum[0] ?? V(-5.85, 4.45, -3.25),
      arli: SITES.arli[0] ?? V(-3.85, 2.55, -1.80),
      bacteriorhodopsin: SITES.bacteriorhodopsin[0] ?? V(-5.15, 0.62, 2.30),
      a_atps: SITES.a_atps[0] ?? V(-4.35, 1.75, 1.98),
      dna: SITES.dna[3] ?? V(-1.85, 0.25, -0.45),
      histone: SITES.histone[4] ?? V(-2.25, 0.88, -0.62),
      rnap: SITES.rnap[1] ?? V(-1.55, -0.45, -0.35),
      mrna: SITES.mrna[1] ?? V(-2.35, -0.85, -0.68),
      ribosome: SITES.ribosome[2] ?? V(-2.85, 1.45, -0.88),
      lokiactin: SITES.lokiactin[4] ?? V(2.75, 3.15, -0.95),
      symbiont: SITES.symbiont[1] ?? V(4.45, 0.25, -0.15),
      synapse: SITES.synapse[2] ?? V(2.80, 0.38, -0.88),
      h2_flow: SITES.h2_flow[1] ?? V(2.48, 0.48, -0.42),
      atp_export: SITES.atp_export[1] ?? V(2.42, -0.14, 0.18),
      ether_bond: E0.clone(),
    };
    let P = { ...base };
    if (vName === 'envelope') {
      P = { ...base, slayer: SITES.slayer[2] ?? V(-3.2, 1.8, 3.1), tetraether: SITES.tetraether[2] ?? V(-1.38, 1.8, 4.05), ether_bond: E0.clone() };
    } else if (vName === 'archaellum') {
      P = { ...base, archaellum: SITES.archaellum[0] ?? V(-5.8, 4.4, -3.2), arli: SITES.arli[0] ?? V(-3.85, 2.55, -1.80), bacteriorhodopsin: SITES.bacteriorhodopsin[0] ?? V(-5.15, 0.62, 2.30), a_atps: SITES.a_atps[0] ?? V(-4.35, 1.75, 1.98) };
    } else if (vName === 'genome') {
      P = { ...base, dna: SITES.dna[2] ?? V(-1.8, 0.4, -0.3), histone: SITES.histone[3] ?? V(-2.1, 0.9, -0.4), rnap: SITES.rnap[0] ?? V(-1.4, -0.2, -0.2), mrna: SITES.mrna[0] ?? V(-2.1, -0.5, -0.5), ribosome: SITES.ribosome[0] ?? V(-2.7, 1.1, -0.6) };
    } else if (vName === 'synapse') {
      P = { ...base, tentacle: SITES.tentacle[0] ?? V(2.85, 3.15, -0.92), symbiont: SITES.symbiont[0] ?? V(4.2, 0.2, -0.2), synapse: SITES.synapse[2] ?? V(2.8, 0.35, -0.82), h2_flow: SITES.h2_flow[0] ?? V(2.45, 1.25, -0.45), atp_export: SITES.atp_export[1] ?? V(2.42, -0.14, 0.18) };
    } else if (vName === 'extremophile') {
      P = { ...base, extremophile_shell: SITES.extremophile_shell[2] ?? V(-4.2, 2.6, -1.8), bacteriorhodopsin: SITES.bacteriorhodopsin[0] ?? V(-5.15, 0.62, 2.30), a_atps: SITES.a_atps[0] ?? V(-4.35, 1.75, 1.98), tetraether: SITES.tetraether[3] ?? V(-1.38, 2.5, 3.6) };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      slayer: 3.6, tetraether: 3.2, tentacle: 3.8, escrt: 2.0, extremophile_shell: 4.2,
      archaellum: 3.8, arli: 2.3, bacteriorhodopsin: 2.5, a_atps: 2.3,
      dna: 3.2, histone: 2.1, rnap: 2.0, mrna: 2.1, ribosome: 2.3, lokiactin: 2.8,
      symbiont: 3.4, synapse: 2.6, h2_flow: 2.3, atp_export: 2.3, ether_bond: 2.2,
    };
    const DIRS = {
      archaellum: V(-0.62, 0.36, 0.68).normalize(),
      arli: V(-0.56, 0.34, 0.75).normalize(),
      bacteriorhodopsin: V(-0.72, 0.24, 0.65).normalize(),
      a_atps: V(-0.65, 0.26, 0.71).normalize(),
      extremophile_shell: V(-0.68, 0.32, 0.66).normalize(),
      ether_bond: V(0.28, 0.16, 0.95).normalize(),
    };
    const dir = DIRS[k] ?? V(0.38, 0.26, 0.89).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.6, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    tetraether: ['slayer', 'ether_bond'],
    archaellum: ['arli'],
    bacteriorhodopsin: ['a_atps', 'extremophile_shell'],
    dna: ['histone', 'rnap', 'mrna'],
    tentacle: ['lokiactin', 'escrt'],
    synapse: ['symbiont', 'h2_flow', 'atp_export', 'tentacle'],
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
      caps.visible = cutOn;
      asgardCaps.visible = cutOn && mode === 'asgard';
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
  // Main Animation Loop (Gentle Sway + Spinning Archaella & A1A0 Rotors + Live Flows)
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3.5) / 18));
      cell.rotation.y = 0.095 * Math.sin(sway * 0.11);
      const spinDt = dt * Math.max(0.35, Math.min(2.6, flowSpeed));
      archaellumRotors.forEach(r => { r.rotor.rotation.z -= spinDt * r.speed; });
      atpsRotors.forEach(r => { r.rotor.rotation.y += spinDt * r.speed; });
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
    buildArchaealEnvelope();
    buildTentaclesLokiactinAndEscrt(T);
    buildArchaellumAndArlI(T);
    buildBacteriorhodopsinAndA1A0(T);
    buildArchaealCore(T);
    buildSymbiontAndSynapse();
    buildAtomicEtherInset();
    // Warm up metabolism streams so every molecule species is visibly flowing on frame 1
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('asgard', true);
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
        if (name === 'extremophile') setMode('extremophile', true);
        else if (name === 'synapse' || name === 'overview') setMode('asgard', true);
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
    shot: () => { composer.render(); return renderer.domElement.toDataURL('image/png'); },
  };
});
