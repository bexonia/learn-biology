// @ts-nocheck
import * as THREE from 'three';
import { PDB_GRAM_POSITIVE } from '../molecules/pdb_gram_positive.js';
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

runBiologyApp(20261111, ({ random, geometry, dna, rna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, randDir, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // Nanoscale coordinate system: 1 unit = 100 nm (NM = 0.01 units/nm).
  // Cutaway Bacillus subtilis rod centered at B0 = (-3.2, 0.55, -0.25) with 42 nm multilayered PG wall,
  // adjacent true-scale Gram-negative E. coli comparator strip at EC0 = (-4.8, -4.65, 1.85),
  // liberated cutaway Armored Dormant Endospore at SP0 = (+9.35, 0.55, -0.15),
  // and floating atomic magnifier inset at M0 = (+2.65, -4.75, 2.85).
  const NM = 0.01;
  const B0 = V(-3.2, 0.55, -0.25);
  const ROD_H = 4.20;
  const ROD_R = 3.55;
  const PG_THICK = 0.42; // 42 nm thick Gram-positive peptidoglycan wall
  const PM_OUT = 0.44;   // 2 nm periplasmic boundary gap
  const PM_IN = 0.52;    // 8 nm single monoderm plasma membrane bilayer
  const ROD_CYTO_R = ROD_R - PM_IN;
  const CUT_X = B0.x - 1.20; // -4.40: opens front-right 2/3 of the rod
  const CUT_Z = B0.z;        // -0.25

  const EC0 = V(-4.8, -4.65, 1.85);
  const SP0 = V(9.35, 0.55, -0.15);
  const M0 = V(2.65, -4.75, 2.85);
  const SEPTUM_X = B0.x + 4.05; // +0.85: polar asymmetric FtsZ division plane
  const FORE_C = V(B0.x + 5.85, B0.y, B0.z - 0.35); // (+2.65, 0.55, -0.60) engulfed forespore

  const VIEWS = [
    ['overview', V(3.0, 5.8, 40.5), V(1.6, -0.5, -0.2)],
    ['wall_compare', V(-1.4, -2.05, 12.6), V(-4.55, -2.95, 1.85)],
    ['sporulation', V(5.2, 2.35, 10.6), V(1.75, 0.55, -0.35)],
    ['endospore', V(14.8, 3.6, 12.2), V(9.35, 0.55, -0.15)],
    ['core', V(12.2, 1.85, 5.9), V(9.25, 0.50, -0.30)],
    ['molecules', V(1.55, -4.15, 10.45), V(2.65, -4.75, 2.85)],
  ];
  let view = 0;
  let curView = 'overview';

  type ModeKey = 'vegetative' | 'gram_stain' | 'beta_lactam' | 'endospore';
  const MODE_ORDER: readonly ModeKey[] = ['vegetative', 'gram_stain', 'beta_lactam', 'endospore'];
  const MODE_LABEL: Record<ModeKey, string> = {
    vegetative: 'Mode: Vegetative + Wall',
    gram_stain: 'Mode: Gram Stain (CV–I)',
    beta_lactam: 'Mode: β-Lactam Attack',
    endospore: 'Mode: Armored Endospore',
  };
  let mode: ModeKey = 'vegetative';

  // Cinema dark-field WebGL2 microscopy stage
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#1b2844',
    bgMid: '#0a1222',
    bgOuter: '#020409',
    keyColor: '#fff4e4',
    keyIntensity: 3.15,
    rimColor: '#88cbff',
    rimIntensity: 1.75,
    lampColor: '#ffbe82',
    lampIntensity: 20,
    lampPos: [-0.8, 2.4, 5.6],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 260,
    bokehColor: '#84c5ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Dedicated secondary studio cavity lamps for the endospore cutaway and E. coli wall comparator
  const sporeLamp = new THREE.PointLight('#6effd8', 11.5, 22, 2);
  sporeLamp.position.set(SP0.x + 2.8, SP0.y + 1.5, SP0.z + 3.6);
  const compareLamp = new THREE.PointLight('#ffd89c', 8.5, 18, 2);
  compareLamp.position.set(-3.2, -3.4, 5.2);
  scene.add(sporeLamp, compareLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Organized scene sub-groups for cutaway caps and interactive mode overlays
  const caps = new THREE.Group();
  const sporeCaps = new THREE.Group();
  const gramStainOverlayGroup = new THREE.Group();
  const betaLactamOverlayGroup = new THREE.Group();
  const endosporeHighlightGroup = new THREE.Group();
  gramStainOverlayGroup.visible = false;
  betaLactamOverlayGroup.visible = false;
  endosporeHighlightGroup.visible = false;
  cell.add(caps, sporeCaps, gramStainOverlayGroup, betaLactamOverlayGroup, endosporeHighlightGroup);

  // Synchronized 90-degree front-right cutaways: one for Bacillus subtilis rod, one for Dormant Endospore
  studio.CUT_LOCAL[0].set(V(-1, 0, 0), CUT_X);
  studio.CUT_LOCAL[1].set(V(0, 0, -1), CUT_Z);
  const CUT = studio.CUT;
  const CLIP = studio.CLIP;

  const SPORE_CUT_LOCAL = [
    new THREE.Plane(V(-1, 0, 0), SP0.x),
    new THREE.Plane(V(0, 0, -1), SP0.z),
  ];
  const SPORE_CUT = SPORE_CUT_LOCAL.map(p => p.clone());
  const SPORE_CLIP = { clippingPlanes: SPORE_CUT, clipIntersection: true, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    SPORE_CUT.forEach((p, i) => {
      p.copy(SPORE_CUT_LOCAL[i]);
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

  // Exact 20 partKeys required by Phase 11 contract & Guided Tour
  const PARTS = [
    ['pg_wall', 'Thick 40 nm peptidoglycan wall (15–40 layers)', '#f2b84b'],
    ['teichoic', 'Teichoic acids (WTA / LTA · LtaS PDB 2W5Q)', '#4ee8d0'],
    ['pm', 'Single monoderm plasma membrane (7 nm)', '#ff9b86'],
    ['ecoli_strip', 'Gram-negative E. coli wall strip (LPS + 3 nm PG)', '#5fd4a0'],
    ['pbp', 'Penicillin-binding proteins (PBP3 · PDB 7BN9)', '#ff6e96'],
    ['sortase', 'Sortase A wall-anchoring enzyme (PDB 2KID)', '#ff9e4a'],
    ['septum', 'Asymmetric polar FtsZ septum (PDB 2VXY)', '#6be0ff'],
    ['spoiiie', 'SpoIIIE hexameric DNA translocase pump', '#ffd954'],
    ['forespore', 'Engulfed forespore & SpoIIIAH–Q (PDB 3UZ0)', '#b888ff'],
    ['dna', 'Supercoiled 4.22 Mbp circular dsDNA nucleoid', '#4c94ff'],
    ['ribosome', '70S bacterial ribosomes (50S + 30S)', '#e298f5'],
    ['exosporium', 'Translucent paracrystalline exosporium halo', '#8ef0ff'],
    ['coat', 'Cross-linked protein spore coat (CotA · PDB 1GSK)', '#e09b4c'],
    ['cortex', 'Thick modified peptidoglycan cortex', '#5ae0b8'],
    ['germ_wall', 'Inner primordial germ cell wall', '#ffd466'],
    ['spore_im', 'Compressed inner spore membrane (SleB · PDB 4FET)', '#ff7fa8'],
    ['core', 'Dehydrated vitrified spore core (~30% water)', '#4c7dff'],
    ['ca_dpa', 'Ca²⁺–dipicolinic acid (Ca-DPA) core gel stacks', '#4cffc8'],
    ['sasp_dna', 'α/β-SASP–locked A-form DNA (PDB 2Z3X)', '#66d4ff'],
    ['crosslink', 'NAG–NAM cross-link & Ca-DPA atomic inset', '#ffba66'],
  ];

  const INFO = {
    pg_wall: ['Multilayered 40 nm murein wall of 15–40 cross-linked NAG–NAM glycan sheets', 'Resists ~20 atm internal turgor and shrinks in ethanol to trap crystal-violet–iodine during Gram staining'],
    teichoic: ['Anionic ribitol/glycerol-phosphate WTA & LTA chains built by LtaS (PDB 2W5Q)', 'Binds Mg²⁺/Ca²⁺ cations, shapes wall charge, and tethers the thick murein mesh to the plasma membrane'],
    pm: ['Single 7 nm phospholipid bilayer (monoderm topology — no outer LPS membrane)', 'Houses respiration, ATP synthesis, lipid II export, and directly exposed outer-leaflet wall enzymes'],
    ecoli_strip: ['True-scale Gram-negative diderm slab: outer LPS bilayer + OmpF porins + 3 nm PG + inner membrane', 'Contrasts 10× thinner peptidoglycan that loses crystal violet once ethanol dissolves the outer LPS membrane'],
    pbp: ['Exposed outer-leaflet PBP3 transpeptidases (PDB 7BN9) cross-linking D-Ala–D-Ala stem peptides', 'Unshielded by an outer membrane, leaving active sites directly accessible to β-lactam antibiotics like penicillin'],
    sortase: ['Membrane-anchored Sortase A cysteine transpeptidase (PDB 2KID) bound to LPXTG substrate', 'Cleaves surface proteins at the LPXTG motif and covalently stitches them into the growing peptidoglycan wall'],
    septum: ['Asymmetric polar Z-ring built from polymerized FtsZ GTPase monomers (PDB 2VXY)', 'Divides the starving mother cell unequally into a large mother compartment and a compact polar forespore'],
    spoiiie: ['Hexameric FtsK-family ATP-driven DNA motor ring seated inside the closing septum pore', 'Pumps the remaining ~70% of the replicated 4.22 Mbp chromosome across the septum into the forespore'],
    forespore: ['Double-membrane engulfed forespore linked to mother cytoplasm via SpoIIIAH–SpoIIQ channels (PDB 3UZ0)', 'Receives nutrients, dipicolinate precursors, and coat proteins while maturing into an armored survival vault'],
    dna: ['Circular 4.22 Mbp supercoiled B-form dsDNA chromosome encoding ~4,100 genes', 'Directs vegetative wall growth and triggers the Spo0A starvation cascade toward asymmetric sporulation'],
    ribosome: ['Active 70S bacterial ribosomes (50S + 30S subunits) translating coupled mRNA polysomes', 'Synthesizes peptidoglycan enzymes, sporulation regulators, and spore coat proteins before dormancy'],
    exosporium: ['Paracrystalline outer glycoprotein veil fringed with BclA hair-like nap filaments', 'Provides the outermost hydrophobic, chemical, and adhesion shield around liberated Bacillus spores'],
    coat: ['50–100 nm cysteine-cross-linked multilayer protein armor studded with CotA laccase (PDB 1GSK)', 'Blocks lysozyme, bleach, solvents, and UV pigments from reaching the underlying peptidoglycan cortex'],
    cortex: ['Thick 50–100 nm low-crosslink peptidoglycan layer enriched in muramic-δ-lactam residues', 'Maintains core dehydration mechanically until specific germination lytic enzymes rapidly hydrolyze it'],
    germ_wall: ['Thin primordial peptidoglycan sheet tucked beneath the cortex with standard vegetative chemistry', 'Survives cortex lysis during germination to immediately become the new growing cell wall'],
    spore_im: ['Highly compressed low-permeability lipid bilayer housing GerA germinant receptors and SleB (PDB 4FET)', 'Blocks water and DNA-damaging chemicals during dormancy, then triggers SleB cortex lysis upon nutrient sensing'],
    core: ['Dehydrated glass-like cytoplasmic vault reduced to ~25–45% water content with zero active metabolism', 'Preserves enzymes, ribosomes, and genome against boiling, desiccation, vacuum, and centuries of dormancy'],
    ca_dpa: ['1:1 Ca²⁺–dipicolinic acid (pyridine-2,6-dicarboxylate) chelates comprising 10–15% of spore dry mass', 'Replaces free core water and vitrifies the spore cytoplasm into a heat- and desiccation-resistant solid gel'],
    sasp_dna: ['Small acid-soluble α/β-SASP protein sleeves (PDB 2Z3X) coating the spore chromosome', 'Forces B-form DNA into compact A-form geometry, preventing heat depurination and UV thymine dimers'],
    crosslink: ['Atomic CPK contrast of NAG–NAM + D-Ala–D-Ala cross-link vs. Ca²⁺–dipicolinate chelate (C, H, N, O, P, Ca²⁺)', 'Reveals the β-lactam cleavage bond in peptidoglycan alongside the divalent Ca²⁺ chelation pocket of dormancy'],
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
        roughness: 0.38,
        metalness: 0.04,
        clearcoat: 0.30,
        clearcoatRoughness: 0.30,
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
      attenuationDistance: opts.attenDist ?? 4.4,
      sssColor: opts.sssColor ?? gelHex,
      sssIntensity: opts.sssIntensity ?? 0.28,
      iridescence: opts.iridescence ?? 0.50,
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

  // Synthetic cryo-EM Gaussian surface builder (for bilobed 70S bacterial ribosomes)
  function synthGeo(beads, colors, maxDim = 28, scale = 1, nm = 0.024) {
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

  // Safe non-mutating orientation helpers
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

  // Site anchors & animated rotors (SpoIIIE DNA pump + FtsZ polar pulse)
  const SITES = Object.fromEntries(PARTS.map(p => [p[0], []]));
  const spoiiieRotors: Array<{ grp: THREE.Object3D; speed: number }> = [];

  // Mode-sensitive materials registry so Gram Stain / β-Lactam / Endospore modes shift PBR color cleanly
  const modeRefs: {
    pgShell?: THREE.MeshPhysicalMaterial;
    pgCap?: THREE.MeshStandardMaterial;
    pgMeshMat?: THREE.MeshPhysicalMaterial;
    ecoliOm?: THREE.MeshPhysicalMaterial;
    ecoliCap?: THREE.MeshStandardMaterial;
    caDpaMat?: THREE.MeshPhysicalMaterial;
  } = {};

  // -------------------------------------------------------------------------
  // Rod & Endospore Mathematical Surfaces
  // -------------------------------------------------------------------------
  const rodOnAxis = (p: THREE.Vector3) =>
    V(Math.max(B0.x - ROD_H, Math.min(B0.x + ROD_H, p.x)), B0.y, B0.z);
  const rodAxisDist = (p: THREE.Vector3) => p.distanceTo(rodOnAxis(p));
  const inRodWedge = (p: THREE.Vector3) => p.x > CUT_X + 0.02 && p.z > CUT_Z + 0.02;

  // Rod outline on the two cutaway planes ('x' at x=CUT_X, z>=CUT_Z; 'z' at z=CUT_Z, x>=CUT_X around right pole)
  function rodOutline(axis: 'x' | 'z', dep: number, t: number) {
    const r = ROD_R - dep;
    if (axis === 'x') {
      const a = t * Math.PI;
      return V(CUT_X, B0.y + r * Math.cos(a), B0.z + r * Math.sin(a));
    }
    const rightX = B0.x + ROD_H;
    const straight = rightX - CUT_X;
    const total = 2 * straight + Math.PI * r;
    const s = t * total;
    if (s < straight) return V(CUT_X + s, B0.y + r, CUT_Z);
    if (s < straight + Math.PI * r) {
      const a = (s - straight) / r;
      return V(rightX + r * Math.sin(a), B0.y + r * Math.cos(a), CUT_Z);
    }
    return V(rightX - (s - straight - Math.PI * r), B0.y - r, CUT_Z);
  }

  function rodCapStrip(
    axis: 'x' | 'z',
    layers: ReadonlyArray<readonly [number, number, string]>,
    n = 360,
    eps = 0.004
  ) {
    const pos: number[] = [];
    const cols: number[] = [];
    const nor: number[] = [];
    const idx: number[] = [];
    const c = new THREE.Color();
    const off = axis === 'x' ? V(eps, 0, 0) : V(0, 0, eps);
    const nrm = off.clone().normalize();
    let base = 0;
    layers.forEach(([d0, d1, hex]) => {
      c.set(hex);
      for (let i = 0; i <= n; i++) {
        for (const d of [d0, d1]) {
          const p = rodOutline(axis, d, i / n).add(off);
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

  function makeRodGeo(r: number, capSeg = 48, radSeg = 128) {
    const g = new THREE.CapsuleGeometry(r, 2 * ROD_H, capSeg, radSeg);
    g.rotateZ(Math.PI / 2);
    g.translate(B0.x, B0.y, B0.z);
    return g;
  }

  // Smooth organic ovoid radius field for the Liberated Armored Dormant Endospore (SP0)
  const sporeBaseR = (d: THREE.Vector3) => {
    const sx = d.x / 3.45, sy = d.y / 2.68, sz = d.z / 2.68;
    const base = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
    const n = fbm(d.x * 2.4 + 4.1, d.y * 2.4 - 6.3, d.z * 2.4 + 2.7, 3);
    return base * (1 + 0.022 * (n - 0.5) * 2);
  };
  const sporeSurf = (d: THREE.Vector3, offset = 0) => {
    const u = d.clone().normalize();
    const r = sporeBaseR(u) + offset;
    return { p: SP0.clone().addScaledVector(u, r), n: u, r };
  };
  const inSporeWedge = (p: THREE.Vector3) => p.x > SP0.x + 0.02 && p.z > SP0.z + 0.02;

  // -------------------------------------------------------------------------
  // Build ALL 8 Real RCSB PDB Cryo-EM / Crystal Surface Templates
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    // 1. PBP3 (PDB 7BN9, 2 chains) — Penicillin-binding transpeptidase
    const pbpCols = [col('#ff6e96'), col('#ff9cb8')];
    const geoPbp3 = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'pbp3'), {
      nm: NM,
      scale: 3.4,
      maxDim: 30,
      sigmaAng: 4.5,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? pbpCols[grp & 1].clone().offsetHSL(0.01, 0, 0.07) : pbpCols[grp & 1]),
    });

    // 2. Sortase A (PDB 2KID, 2 chains: grp 0 enzyme, grp 1 LPXTG peptide substrate!)
    const geoSortase = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'sortase_a'), {
      nm: NM,
      scale: 6.2,
      maxDim: 26,
      sigmaAng: 3.8,
      iso: 0.39,
      aoStrength: 0.54,
      colorFn: (grp, part) => (grp === 1 ? col('#ffe870') : part === 1 ? col('#ffb266') : col('#f28538')),
    });

    // 3. LtaS (PDB 2W5Q, 1 chain) — Lipoteichoic acid synthase
    const geoLtas = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'ltas'), {
      nm: NM,
      scale: 5.4,
      maxDim: 28,
      sigmaAng: 4.2,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: (_grp, part) => (part === 1 ? col('#94fff0') : col('#42dec8')),
    });

    // 4. FtsZ (PDB 2VXY, 1 chain) — Asymmetric polar septum GTPase polymer
    const geoFtsz = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'ftsz'), {
      nm: NM,
      scale: 5.6,
      maxDim: 26,
      sigmaAng: 4.0,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: (_grp, part) => (part === 1 ? col('#aaf0ff') : col('#54d4ff')),
    });

    // 5. SpoIIIAH–SpoIIQ (PDB 3UZ0, 4 chains) — Forespore engulfment feeding channel
    const spoCols = ['#b888ff', '#6ce6ff', '#d6a6ff', '#48c8f5'].map(col);
    const geoSpoiiiahQ = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'spoiiiah_q'), {
      nm: NM,
      scale: 3.7,
      maxDim: 30,
      sigmaAng: 4.3,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: grp => spoCols[grp % spoCols.length],
    });

    // 6. CotA (PDB 1GSK, 1 chain) — Spore coat outer laccase armor
    const geoCota = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'cota'), {
      nm: NM,
      scale: 5.0,
      maxDim: 28,
      sigmaAng: 4.4,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (_grp, part) => (part === 1 ? col('#ffc87a') : col('#d98c3c')),
    });

    // 7. SleB (PDB 4FET, 2 chains) — Cortex-lytic germination enzyme on inner spore membrane
    const slebCols = [col('#ff7fa8'), col('#ffb58a')];
    const geoSleb = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'sleb'), {
      nm: NM,
      scale: 5.0,
      maxDim: 26,
      sigmaAng: 4.0,
      iso: 0.38,
      aoStrength: 0.54,
      colorFn: grp => slebCols[grp & 1],
    });

    // 8. α/β-SASP–DNA (PDB 2Z3X, chains 0,1 = A-form DNA part>=2; chains 2,3,4 = SASP protein sleeves)
    const saspCols = [col('#56b8ff'), col('#9ce0ff'), col('#4296f5')];
    const geoSaspDna = buildPdbSurfaceGeo(pdb.getModel(PDB_GRAM_POSITIVE, 'sasp_dna'), {
      nm: NM,
      scale: 6.2,
      maxDim: 30,
      sigmaAng: 3.9,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) =>
        part >= 2 ? (grp === 0 ? col('#ff78c4') : col('#9c70ff')) : saspCols[(grp - 2 + 6) % 3],
    });

    // High-resolution bilobed 70S bacterial ribosome (50S crown + 30S head/beak cleft)
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
      ['#d684f0', '#f5c2ff', '#ff94b2'],
      28,
      1.04,
      0.023
    );

    return { geoPbp3, geoSortase, geoLtas, geoFtsz, geoSpoiiiahQ, geoCota, geoSleb, geoSaspDna, geoRibo70 };
  }

  // -------------------------------------------------------------------------
  // 1. Bacillus subtilis Rod Envelope: 42 nm Multilayered PG Wall, WTA/LTA & Single Plasma Membrane
  // -------------------------------------------------------------------------
  function buildBacillusEnvelope(T) {
    // Translucent refractive golden-amber outer 42 nm peptidoglycan shell
    const pgOuterMat = cinemaShellMat('pg_wall', '#d69732', '#ffe9b8', CLIP, {
      attenCol: '#c48120',
      attenDist: 4.8,
      sssColor: '#ffca66',
      sssIntensity: 0.34,
      iridescence: 0.48,
      thickness: 0.62,
      roughness: 0.14,
      sheenColor: '#fff0c4',
      normalMap: bump(16, 10),
      normalScale: 0.28,
    });
    modeRefs.pgShell = pgOuterMat;
    cell.add(shade(new THREE.Mesh(makeRodGeo(ROD_R), pgOuterMat), true, true));

    // Inner single monoderm plasma membrane (7 nm bilayer)
    const pmOuterMat = cinemaShellMat('pm', '#d96e5e', '#ffd4c7', CLIP, {
      attenCol: '#c4584c',
      attenDist: 3.4,
      sssColor: '#ff9680',
      sssIntensity: 0.28,
      iridescence: 0.34,
      thickness: 0.38,
      roughness: 0.13,
      sheenColor: '#ffe0d4',
      normalMap: bump(14, 9),
      normalScale: 0.22,
    });
    cell.add(new THREE.Mesh(makeRodGeo(ROD_R - PM_OUT, 42, 112), pmOuterMat));

    // Warm backlit cytoplasmic inner lining inside the opened quarter-wedge
    const cytoInnerMat = reg(
      'pm',
      applyBacklitSSS(
        phys({
          color: '#2e1c2b',
          roughness: 0.72,
          clearcoat: 0.16,
          normalMap: bump(12, 9),
          normalScale: new THREE.Vector2(0.20, 0.20),
          side: THREE.BackSide,
        }),
        '#ff9b78',
        0.18,
        2.4
      )
    );
    cell.add(new THREE.Mesh(makeRodGeo(ROD_CYTO_R, 38, 96), cytoInnerMat));

    // Multi-band laminated 42 nm peptidoglycan cutaway capStrip (6 rich alternating murein strata!)
    const PG_CAP_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.00, 0.06, '#fff0b3'],
      [0.06, 0.13, '#e09d30'],
      [0.13, 0.20, '#ffd878'],
      [0.20, 0.28, '#cf8824'],
      [0.28, 0.35, '#ffda7d'],
      [0.35, 0.42, '#e3a136'],
    ];
    const pgCapMat = reg(
      'pg_wall',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.30,
        metalness: 0.07,
        emissive: '#593608',
        emissiveIntensity: 0.34,
        side: THREE.DoubleSide,
      })
    );
    modeRefs.pgCap = pgCapMat;

    // Single plasma membrane bilayer capStrip cleanly separated inside the PG wall (0.44..0.52)
    const PM_CAP_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.44, 0.465, '#ffaa94'],
      [0.465, 0.495, '#592334'],
      [0.495, 0.52, '#ff9880'],
    ];
    const pmCapMat = reg(
      'pm',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.34,
        metalness: 0.05,
        emissive: '#4d191e',
        emissiveIntensity: 0.26,
        side: THREE.DoubleSide,
      })
    );

    for (const ax of ['x', 'z'] as const) {
      caps.add(new THREE.Mesh(rodCapStrip(ax, PG_CAP_LAYERS, 320, 0.005), pgCapMat));
      caps.add(new THREE.Mesh(rodCapStrip(ax, PM_CAP_LAYERS, 320, 0.006), pmCapMat));
    }

    // Explicit sculpted NAG–NAM glycan fibers & peptide cross-links woven across the cut PG wall strata
    const S_PG = sculpt('pg_wall', caps, false, {
      emissive: '#5e3908',
      emissiveIntensity: 0.22,
      roughness: 0.34,
    });
    modeRefs.pgMeshMat = REG.pg_wall.mats[REG.pg_wall.mats.length - 1];
    const cNag = col('#ffe38a'), cNam = col('#e89e2e'), cPep = col('#fff4c4');
    // Transverse cross-section glycan rings & radial peptide rungs along the x=CUT_X cut face
    for (let layer = 0; layer < 4; layer++) {
      const dep = 0.06 + layer * 0.105;
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 40; i++) {
        pts.push(rodOutline('x', dep, i / 40).add(V(0.022, 0, 0)));
      }
      S_PG.tube(pts, 0.017, 0.017, layer % 2 === 0 ? cNag : cNam, cNag, 6, false);
      if (layer === 1) SITES.pg_wall.push(pts[10].clone(), pts[28].clone(), pts[35].clone());
    }
    // Cross-linking rungs bridging adjacent PG layers on x & z cutaway faces
    for (let i = 3; i < 40; i += 3) {
      const pOut = rodOutline('x', 0.05, i / 40).add(V(0.024, 0, 0));
      const pIn = rodOutline('x', 0.39, i / 40).add(V(0.024, 0, 0));
      S_PG.stick(pOut, pIn, 0.009, cPep, cNam);
      if (i % 6 === 3) SITES.pg_wall.push(pOut.clone().lerp(pIn, 0.5));
    }
    for (let i = 4; i < 72; i += 4) {
      const pOut = rodOutline('z', 0.05, i / 72).add(V(0, 0, 0.024));
      const pIn = rodOutline('z', 0.39, i / 72).add(V(0, 0, 0.024));
      S_PG.stick(pOut, pIn, 0.009, cPep, cNam);
      if (i % 12 === 4) SITES.pg_wall.push(pOut.clone().lerp(pIn, 0.5));
      if (i % 14 === 4) SITES.pm.push(rodOutline('z', 0.48, i / 72).add(V(0, 0, 0.024)));
    }
    S_PG.done();

    // Gram Stain Mode trapped purple CV–I crystal clusters embedded inside the 42 nm dehydrated wall!
    const S_CVI_TRAP = sculpt('pg_wall', gramStainOverlayGroup, false, {
      emissive: '#6e1cff',
      emissiveIntensity: 0.72,
      roughness: 0.22,
      clearcoat: 0.70,
    });
    const cCvi1 = col('#b86eff'), cCvi2 = col('#7d2bff');
    for (let i = 2; i < 38; i += 2) {
      for (let d = 0.08; d <= 0.36; d += 0.14) {
        const p = rodOutline('x', d, i / 40).add(V(0.042, 0, 0));
        S_CVI_TRAP.add(p, 0.11, (i % 4 === 0) ? cCvi1 : cCvi2);
      }
    }
    for (let i = 3; i < 68; i += 3) {
      for (let d = 0.10; d <= 0.34; d += 0.14) {
        const p = rodOutline('z', d, i / 72).add(V(0, 0, 0.042));
        S_CVI_TRAP.add(p, 0.105, (i % 2 === 0) ? cCvi1 : cCvi2);
      }
    }
    S_CVI_TRAP.done();

    // Dense Wall Teichoic Acid (WTA) & Lipoteichoic Acid (LTA) anionic polyol chains + PDB LtaS (2W5Q)
    const S_TEICH = sculpt('teichoic', cell, false, {
      emissive: '#126e62',
      emissiveIntensity: 0.28,
      roughness: 0.30,
      clearcoat: 0.42,
    });
    const I_LTAS = molBatch('teichoic', T.geoLtas, cell, false, {
      emissive: '#105c52',
      emissiveIntensity: 0.22,
    });
    const cWta = col('#4ee8d0'), cLta = col('#82fff0'), cPhos = col('#b894ff');

    const emitTeichoicFilament = (basePos: THREE.Vector3, normal: THREE.Vector3, isLta: boolean, len: number, seedIdx: number) => {
      const u = ortho(normal);
      const v = normal.clone().cross(u).normalize();
      const pts: THREE.Vector3[] = [];
      const steps = 6;
      for (let s = 0; s <= steps; s++) {
        const f = s / steps;
        const wob = 0.075 * Math.sin(f * Math.PI * 2.2 + seedIdx * 1.3);
        const wob2 = 0.065 * Math.cos(f * Math.PI * 1.8 + seedIdx * 2.1);
        pts.push(
          basePos
            .clone()
            .addScaledVector(normal, f * len)
            .addScaledVector(u, wob)
            .addScaledVector(v, wob2)
        );
      }
      S_TEICH.tube(pts, 0.024, 0.016, isLta ? cLta : cWta, cWta, 6, true);
      // Phosphodiester anionic bead nodes along the polyol backbone
      S_TEICH.add(pts[3], 0.070, cPhos);
      S_TEICH.add(pts[6], 0.082, isLta ? cLta : cWta);
      placed++;
    };

    // Place WTA/LTA brush across the intact exterior rod surface & along both cut faces
    let teichCount = 0;
    for (let ring = 0; ring < 14; ring++) {
      const x = B0.x - ROD_H - 2.3 + ring * 0.94;
      const clampedX = Math.max(B0.x - ROD_H, Math.min(B0.x + ROD_H, x));
      const dx = x - clampedX;
      const ringR = Math.sqrt(Math.max(0.2, ROD_R * ROD_R - dx * dx));
      const nAround = ring === 0 || ring === 13 ? 8 : 14;
      for (let j = 0; j < nAround; j++) {
        const ang = (j / nAround) * Math.PI * 2 + ring * 0.37;
        const pOut = V(x, B0.y + Math.cos(ang) * ringR, B0.z + Math.sin(ang) * ringR);
        if (inRodWedge(pOut)) continue;
        const nrm = pOut.clone().sub(V(clampedX, B0.y, B0.z)).normalize();
        const isLta = (ring + j) % 3 === 0;
        const startDep = isLta ? PM_OUT : 0.14;
        const pBase = pOut.clone().addScaledVector(nrm, -startDep);
        emitTeichoicFilament(pBase, nrm, isLta, startDep + rr(0.32, 0.56), teichCount++);
        if (isLta && teichCount % 2 === 0 && SITES.teichoic.length < 30) {
          SITES.teichoic.push(pOut.clone().addScaledVector(nrm, 0.25));
        }
      }
    }

    // Showcase LTA + real PDB LtaS (2W5Q) synthases lined prominently along the cutaway wall faces (especially bottom-left wall_compare zone!)
    for (let i = 4; i <= 36; i += 4) {
      const t = i / 40;
      const pPm = rodOutline('x', PM_OUT, t).add(V(0.04, 0, 0));
      const pOut = rodOutline('x', 0.0, t).add(V(0.04, 0, 0));
      const nrm = pOut.clone().sub(pPm).normalize();
      I_LTAS.add(pPm.clone().addScaledVector(nrm, 0.05), qOut(nrm, i * 0.7), 0.98);
      placed++;
      emitTeichoicFilament(pPm, nrm, true, 0.88, 500 + i);
      SITES.teichoic.push(pOut.clone().addScaledVector(nrm, 0.30));
    }
    for (let i = 6; i <= 66; i += 6) {
      const t = i / 72;
      const pPm = rodOutline('z', PM_OUT, t).add(V(0, 0, 0.04));
      const pOut = rodOutline('z', 0.0, t).add(V(0, 0, 0.04));
      const nrm = pOut.clone().sub(pPm).normalize();
      I_LTAS.add(pPm.clone().addScaledVector(nrm, 0.05), qOut(nrm, i * 0.6), 0.96);
      placed++;
      emitTeichoicFilament(pPm, nrm, true, 0.84, 700 + i);
    }

    // Exposed outer-leaflet PBP3 transpeptidases (PDB 7BN9) & Sortase A (PDB 2KID) right on the single PM!
    const I_PBP = molBatch('pbp', T.geoPbp3, cell, false, {
      emissive: '#781434',
      emissiveIntensity: 0.24,
      roughness: 0.32,
      clearcoat: 0.44,
    });
    const I_SRT = molBatch('sortase', T.geoSortase, cell, false, {
      emissive: '#7a3c0c',
      emissiveIntensity: 0.24,
      roughness: 0.32,
      clearcoat: 0.44,
    });
    const S_BLAC = sculpt('pbp', betaLactamOverlayGroup, false, {
      emissive: '#ff1e4d',
      emissiveIntensity: 0.85,
      roughness: 0.20,
    });

    // Place PBP3 + Sortase A along the transverse cutaway face (x=CUT_X) & longitudinal wall face (z=CUT_Z)
    const pbpAnchors: Array<{ p: THREE.Vector3; n: THREE.Vector3 }> = [];
    for (let i = 5; i <= 37; i += 4) {
      const t = i / 40;
      const pPm = rodOutline('x', PM_OUT - 0.04, t).add(V(0.08, 0, 0));
      const nrm = rodOutline('x', 0, t).sub(rodOutline('x', PM_OUT, t)).normalize();
      if (i % 8 === 5) {
        const pos = pPm.clone().addScaledVector(nrm, 0.14);
        I_PBP.add(pos, qOut(nrm, i * 0.5), 1.04);
        pbpAnchors.push({ p: pos, n: nrm });
        SITES.pbp.push(pos.clone());
        placed++;
      } else {
        const pos = pPm.clone().addScaledVector(nrm, 0.10);
        I_SRT.add(pos, qOut(nrm, i * 0.8), 1.05);
        SITES.sortase.push(pos.clone());
        placed++;
      }
    }
    for (let i = 5; i <= 68; i += 5) {
      const t = i / 72;
      const pPm = rodOutline('z', PM_OUT - 0.04, t).add(V(0, 0, 0.08));
      const nrm = rodOutline('z', 0, t).sub(rodOutline('z', PM_OUT, t)).normalize();
      if (i % 2 === 1) {
        const pos = pPm.clone().addScaledVector(nrm, 0.14);
        I_PBP.add(pos, qOut(nrm, i * 0.9), 1.02);
        pbpAnchors.push({ p: pos, n: nrm });
        SITES.pbp.push(pos.clone());
        placed++;
      } else {
        const pos = pPm.clone().addScaledVector(nrm, 0.10);
        I_SRT.add(pos, qOut(nrm, i * 0.7), 1.04);
        SITES.sortase.push(pos.clone());
        placed++;
      }
    }
    // Also place showcase PBPs & Sortase A on the outer intact lower-front wall right above E. coli strip
    for (let k = 0; k < 6; k++) {
      const x = -6.6 + k * 0.42;
      const ang = Math.PI * (0.68 + (k % 2) * 0.12);
      const nrm = V(0, Math.cos(ang), Math.sin(ang)).normalize();
      const pos = V(x, B0.y, B0.z).addScaledVector(nrm, ROD_R - PM_OUT + 0.16);
      if (k % 2 === 0) {
        I_PBP.add(pos, qOut(nrm, k), 1.06);
        pbpAnchors.push({ p: pos, n: nrm });
        SITES.pbp.push(pos.clone());
      } else {
        I_SRT.add(pos, qOut(nrm, k + 1), 1.06);
        SITES.sortase.push(pos.clone());
      }
      placed++;
    }

    // β-Lactam Attack Mode overlay: glowing crimson penicillin-G rings covalently jammed into PBP3 active clefts!
    pbpAnchors.forEach(({ p, n }) => {
      const dock = p.clone().addScaledVector(n, 0.16);
      S_BLAC.ring(dock, n, 0.12, 0.036, col('#ff3b6b'), 16, 8);
      S_BLAC.add(dock.clone().addScaledVector(n, 0.08), 0.14, col('#ff8aa6'));
    });

    S_TEICH.done();
    I_LTAS.done();
    I_PBP.done();
    I_SRT.done();
    S_BLAC.done();
  }

  // -------------------------------------------------------------------------
  // 2. True-Scale Gram-Negative E. coli Wall Comparator Strip (EC0)
  //    Outer LPS Bilayer (7 nm) + OmpF Porins + Thin 3.5 nm PG + Inner Membrane (7 nm)
  // -------------------------------------------------------------------------
  function buildEcoliComparatorStrip() {
    const grp = new THREE.Group();
    grp.position.copy(EC0);
    // Gentle tilt toward the viewer so the cross-section cut face & outer LPS face both shine clearly!
    grp.rotation.set(0.18, 0.16, 0.03);
    cell.add(grp);

    const W = 5.4;  // 540 nm wide slab
    const D = 2.4;  // 240 nm deep slab
    // Exact true-scale vertical depths below top outer LPS surface (1 u = 100 nm):
    //   Outer membrane (LPS + bilayer): y in [+0.16, +0.09] (7 nm)
    //   Outer periplasm:                y in [+0.09, +0.02] (7 nm)
    //   Thin peptidoglycan sheet:       y in [+0.02, -0.015] (3.5 nm — 12x thinner than B. subtilis!)
    //   Inner periplasm:                y in [-0.015, -0.09] (7.5 nm)
    //   Inner plasma membrane:          y in [-0.09, -0.16] (7 nm)

    // Subtle organic arch along X so the comparator slab reads like an authentic excised bacterial wall slice
    const archY = (x: number) => -0.028 * x * x;

    function buildCurvedLayer(yTop: number, yBot: number, mat: THREE.Material, segX = 28, segZ = 10) {
      const g = new THREE.BoxGeometry(W, yTop - yBot, D, segX, 1, segZ);
      const p = g.attributes.position;
      const yMid = (yTop + yBot) * 0.5;
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        const wave = 0.018 * Math.sin(x * 1.4 + z * 1.1);
        p.setXYZ(i, x, y + yMid + archY(x) + wave, z);
      }
      g.computeVertexNormals();
      const mesh = shade(new THREE.Mesh(g, mat), true, true);
      grp.add(mesh);
      return mesh;
    }

    // Outer LPS membrane bilayer (deep sculptural jade-emerald; shifts to dissolved safranin-pink in Gram Stain mode!)
    const omMat = reg(
      'ecoli_strip',
      applyBacklitSSS(
        phys(
          {
            color: '#2fa878',
            roughness: 0.36,
            metalness: 0.04,
            clearcoat: 0.36,
            clearcoatRoughness: 0.26,
            sheen: 0.35,
            sheenColor: '#8effcc',
            envMapIntensity: 0.52,
            normalMap: bump(10, 6),
            normalScale: new THREE.Vector2(0.28, 0.28),
          },
          {}
        ),
        '#42d99e',
        0.18,
        2.8
      )
    );
    modeRefs.ecoliOm = omMat;
    buildCurvedLayer(0.16, 0.09, omMat);

    // Rich dark-indigo periplasmic cavity between OM and IM so the razor-thin 3.5 nm PG wire gleams with contrast
    const periMat = reg(
      'ecoli_strip',
      phys(
        {
          color: '#18122e',
          roughness: 0.62,
          transparent: true,
          opacity: 0.76,
          depthWrite: false,
        },
        {}
      )
    );
    buildCurvedLayer(0.088, -0.088, periMat, 16, 6);

    // Razor-thin 3.5 nm Gram-negative peptidoglycan monolayer (gleaming bright gold so the 10x ratio screams!)
    const thinPgMat = reg(
      'ecoli_strip',
      new THREE.MeshStandardMaterial({
        color: '#ffe070',
        emissive: '#946c10',
        emissiveIntensity: 0.48,
        roughness: 0.30,
        metalness: 0.08,
      })
    );
    modeRefs.ecoliCap = thinPgMat;
    buildCurvedLayer(0.018, -0.018, thinPgMat);

    // Inner plasma membrane bilayer (warm coral-rose)
    const imMat = reg(
      'ecoli_strip',
      applyBacklitSSS(
        phys(
          {
            color: '#ff9680',
            roughness: 0.28,
            clearcoat: 0.48,
            sheen: 0.40,
            sheenColor: '#ffdcd4',
            normalMap: bump(10, 6),
            normalScale: new THREE.Vector2(0.20, 0.20),
          },
          {}
        ),
        '#ff9e85',
        0.22,
        2.6
      )
    );
    buildCurvedLayer(-0.09, -0.16, imMat);

    // OmpF trimer beta-barrel porins + bristling LPS O-antigen polysaccharides + Braun Lpp tethers!
    const S_EC = sculpt('ecoli_strip', grp, false, {
      emissive: '#145940',
      emissiveIntensity: 0.22,
      roughness: 0.30,
      clearcoat: 0.48,
    });
    const cPorin = col('#3ec79e'), cLps = col('#8effc8'), cLpp = col('#ffd478');

    // 7 OmpF trimer porins embedded across the outer LPS membrane
    const porinSpots = [
      [-1.95, 0.42], [-1.05, -0.35], [-0.15, 0.55], [0.85, -0.25], [1.75, 0.48], [-1.45, 0.72], [1.25, 0.75],
    ];
    porinSpots.forEach(([px, pz]) => {
      const py = 0.145 + archY(px);
      for (let k = 0; k < 3; k++) {
        const a = (k / 3) * Math.PI * 2;
        const ctr = V(px + Math.cos(a) * 0.085, py, pz + Math.sin(a) * 0.085);
        S_EC.ring(ctr, V(0, 1, 0), 0.068, 0.032, cPorin, 16, 7);
      }
      placed += 3;
    });

    // Bristling short LPS O-antigen filaments across the outer leaflet
    for (let ix = 0; ix < 15; ix++) {
      for (let iz = 0; iz < 5; iz++) {
        const lx = -2.45 + ix * 0.35 + rr(-0.06, 0.06);
        const lz = -0.95 + iz * 0.48 + rr(-0.08, 0.08);
        const ly = 0.16 + archY(lx);
        const pts = [
          V(lx, ly, lz),
          V(lx + rr(-0.04, 0.04), ly + 0.11, lz + rr(-0.04, 0.04)),
          V(lx + rr(-0.05, 0.05), ly + 0.22, lz + rr(-0.05, 0.05)),
        ];
        S_EC.tube(pts, 0.015, 0.010, cLps, cPorin, 5, true);
      }
    }

    // Braun's Lpp lipoprotein tethers stapling the outer membrane to the wafer-thin 3.5 nm PG sheet along the front face!
    for (let ix = 0; ix < 10; ix++) {
      const lx = -2.25 + ix * 0.50;
      const ay = archY(lx);
      S_EC.stick(V(lx, ay + 0.09, D * 0.505), V(lx, ay + 0.015, D * 0.505), 0.014, cLpp, cPorin);
    }
    S_EC.done();

    // Subtle floating badge plaque beneath the E. coli strip so the 10x wall ratio reads instantaneously
    const lblCv = document.createElement('canvas');
    lblCv.width = 512;
    lblCv.height = 88;
    const lg = lblCv.getContext('2d');
    lg.clearRect(0, 0, 512, 88);
    lg.font = '700 26px system-ui, -apple-system, sans-serif';
    lg.textAlign = 'center';
    lg.fillStyle = '#7dffbe';
    lg.fillText('E. COLI STRIP (GRAM-NEGATIVE)', 256, 36);
    lg.font = '600 21px system-ui, -apple-system, sans-serif';
    lg.fillStyle = '#d4e8ff';
    lg.fillText('Outer LPS + OmpF · 3 nm PG · Inner PM', 256, 70);
    const lblTex = new THREE.CanvasTexture(lblCv);
    lblTex.colorSpace = THREE.SRGBColorSpace;
    const lblMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.85, 0.66),
      reg(
        'ecoli_strip',
        new THREE.MeshStandardMaterial({
          map: lblTex,
          emissive: '#ffffff',
          emissiveMap: lblTex,
          emissiveIntensity: 0.68,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    lblMesh.position.set(0, -0.78, D * 0.52);
    grp.add(lblMesh);

    // Record world-ish local sites along the E. coli strip
    [-1.6, 0, 1.6].forEach(ox => {
      SITES.ecoli_strip.push(EC0.clone().add(V(ox, archY(ox) + 0.05, 0.4)));
    });
  }

  // -------------------------------------------------------------------------
  // 3. Asymmetric Sporulation Apparatus (FtsZ 2VXY Septum, SpoIIIE DNA Motor,
  //    Engulfed Forespore + SpoIIIAH-SpoIIQ 3UZ0 Channels) & Vegetative Core (DNA + 70S Ribosomes)
  // -------------------------------------------------------------------------
  function buildSporulationAndNucleoid(T) {
    // 3A. Asymmetric Polar FtsZ Septum (PDB 2VXY) constricting at x = SEPTUM_X (+0.85)
    const I_FTSZ = molBatch('septum', T.geoFtsz, cell, false, {
      emissive: '#0e6080',
      emissiveIntensity: 0.28,
      roughness: 0.30,
      clearcoat: 0.48,
    });
    const S_SEPT = sculpt('septum', cell, false, {
      emissive: '#145875',
      emissiveIntensity: 0.24,
      roughness: 0.34,
    });

    // Inward-growing septal membrane/peptidoglycan diaphragm (full 360° ring clipped seamlessly by rod CUT planes!)
    const septDiscGeo = new THREE.RingGeometry(0.62, ROD_CYTO_R + 0.04, 56, 4);
    septDiscGeo.rotateY(Math.PI / 2);
    const septDiscMat = reg(
      'septum',
      applyBacklitSSS(
        phys(
          {
            color: '#5ec8e8',
            emissive: '#184a66',
            emissiveIntensity: 0.28,
            roughness: 0.32,
            transparent: true,
            opacity: 0.48,
            side: THREE.DoubleSide,
            depthWrite: false,
          },
          CLIP
        ),
        '#7ef0ff',
        0.28,
        2.5
      )
    );
    const septDisc = new THREE.Mesh(septDiscGeo, septDiscMat);
    septDisc.position.set(SEPTUM_X, B0.y, B0.z);
    cell.add(septDisc);

    // 26 real PDB 2VXY FtsZ GTPase monomers forming a double-protofilament constricting Z-ring!
    const ftszR = ROD_CYTO_R - 0.14;
    const N_FTSZ = 26;
    for (let i = 0; i < N_FTSZ; i++) {
      const a = (i / N_FTSZ) * Math.PI * 2;
      const py = B0.y + Math.cos(a) * ftszR;
      const pz = B0.z + Math.sin(a) * ftszR;
      // Leave front-right quarter slightly open on the outermost rim so interior SpoIIIE stays crystal clear
      if (pz > B0.z + 0.7 && py > B0.y - 0.8 && py < B0.y + 0.8) continue;
      const p = V(SEPTUM_X + (i % 2 === 0 ? -0.08 : 0.08), py, pz);
      const tan = V(0, -Math.sin(a), Math.cos(a)).normalize();
      I_FTSZ.add(p, qFromZ(tan, a), 1.0);
      placed++;
      if (i % 4 === 0) SITES.septum.push(p.clone());
    }
    // Inner leading-edge FtsZ constriction ring hugging the septum lip
    S_SEPT.ring(V(SEPTUM_X, B0.y, B0.z), V(1, 0, 0), 0.78, 0.095, col('#6be0ff'), 36, 10);
    S_SEPT.ring(V(SEPTUM_X, B0.y, B0.z), V(1, 0, 0), ftszR, 0.075, col('#42b8e8'), 44, 8);
    SITES.septum.push(V(SEPTUM_X, B0.y + 1.5, B0.z - 1.2));
    I_FTSZ.done();
    S_SEPT.done();

    // 3B. Hexameric SpoIIIE ATP-Driven DNA Translocase Motor seated in the septum pore
    const spoGroup = new THREE.Group();
    spoGroup.position.set(SEPTUM_X, B0.y, B0.z - 0.15);
    cell.add(spoGroup);

    const spoMat = reg(
      'spoiiie',
      applyBacklitSSS(
        phys(
          {
            color: '#ffd954',
            emissive: '#805208',
            emissiveIntensity: 0.34,
            roughness: 0.28,
            metalness: 0.12,
            clearcoat: 0.56,
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.28, 0.28),
          },
          {}
        ),
        '#ffe880',
        0.34,
        2.4
      )
    );
    const spoSubMat = reg(
      'spoiiie',
      phys({ color: '#ff9f40', emissive: '#6e3206', emissiveIntensity: 0.28, roughness: 0.34, clearcoat: 0.45 }, {})
    );

    const rotorGrp = new THREE.Group();
    spoGroup.add(rotorGrp);
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      const lobe = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), k % 2 === 0 ? spoMat : spoSubMat);
      lobe.scale.set(1.45, 0.92, 0.92);
      lobe.position.set(0, Math.cos(a) * 0.44, Math.sin(a) * 0.44);
      rotorGrp.add(lobe);
      // ATP catalytic pocket bead on mother-cell side of each SpoIIIE motor subunit
      const atpPocket = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 8), spoMat);
      atpPocket.position.set(-0.24, Math.cos(a + 0.25) * 0.36, Math.sin(a + 0.25) * 0.36);
      rotorGrp.add(atpPocket);
      placed++;
    }
    const poreCollar = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.085, 12, 32), spoSubMat);
    poreCollar.rotation.y = Math.PI / 2;
    spoGroup.add(poreCollar);
    spoiiieRotors.push({ grp: rotorGrp, speed: 2.6 });
    SITES.spoiiie.push(spoGroup.position.clone(), spoGroup.position.clone().add(V(0, 0.35, 0.35)));

    // 3C. Engulfed Forespore Double-Membrane & Real PDB SpoIIIAH–SpoIIQ (3UZ0) Feeding Channels
    const foreMat = cinemaShellMat('forespore', '#9a66e8', '#e6d4ff', {}, {
      attenCol: '#7b48d4',
      attenDist: 2.6,
      sssColor: '#cfa6ff',
      sssIntensity: 0.34,
      iridescence: 0.58,
      thickness: 0.42,
      roughness: 0.13,
      sheenColor: '#f5e0ff',
      normalMap: bump(10, 8),
      normalScale: 0.24,
    });
    const foreOuter = shade(new THREE.Mesh(blobGeo(1.0, fbm, 41, 0.035, 2.2, 4), foreMat), true, true);
    foreOuter.scale.set(1.30, 1.48, 1.18);
    foreOuter.position.copy(FORE_C);
    cell.add(foreOuter);

    // Inner engulfed forespore membrane shell (clearly visible inside the translucent wet-gel outer forespore!)
    const foreInnerMat = reg(
      'forespore',
      phys(
        {
          color: '#7246c2',
          emissive: '#351870',
          emissiveIntensity: 0.32,
          roughness: 0.36,
          transparent: true,
          opacity: 0.42,
          depthWrite: false,
        },
        {}
      )
    );
    const foreInner = new THREE.Mesh(blobGeo(1.0, fbm, 47, 0.03, 2.2, 3), foreInnerMat);
    foreInner.scale.set(1.08, 1.24, 0.96);
    foreInner.position.copy(FORE_C);
    cell.add(foreInner);

    // 14 real PDB 3UZ0 SpoIIIAH–SpoIIQ trans-membrane feeding channels bridging mother cell <-> forespore
    const I_SPOQ = molBatch('forespore', T.geoSpoiiiahQ, cell, false, {
      emissive: '#401e7a',
      emissiveIntensity: 0.24,
      roughness: 0.32,
      clearcoat: 0.46,
    });
    for (let k = 0; k < 14; k++) {
      const phi = (k / 14) * Math.PI * 2;
      const elev = (k % 3 - 1) * 0.45;
      const d = V(Math.cos(phi) * Math.cos(elev) * 0.85 - 0.15, Math.sin(elev) * 0.9, Math.sin(phi) * Math.cos(elev) * 0.85).normalize();
      const pos = FORE_C.clone().add(V(d.x * 1.26, d.y * 1.42, d.z * 1.14));
      I_SPOQ.add(pos, qFromZ(d, k * 0.6), 1.0);
      placed++;
      if (k % 2 === 0) SITES.forespore.push(pos.clone());
    }
    SITES.forespore.push(FORE_C.clone());
    I_SPOQ.done();

    // 3D. Supercoiled 4.22 Mbp Circular dsDNA Nucleoid + Translocating Chromosomal Arm through SpoIIIE + 70S Ribosomes
    const B_DNA = balls('dna', cell, false);
    const B_MRNA = balls('dna', cell, false); // keep subtle nascent mRNA tether linked to active nucleoid
    const I_RIBO = molBatch('ribosome', T.geoRibo70, cell, false, {
      emissive: '#421652',
      emissiveIntensity: 0.16,
    });

    const DNA_NM = 0.052;
    const dnaSpots: THREE.Vector3[] = [];
    // 6 supercoiled mother-cell chromosome loops filling the cutaway cytoplasm (x in [-6.8, +0.3])
    for (let L = 0; L < 6; L++) {
      const cx = -5.4 + L * 1.05;
      const ctrl: THREE.Vector3[] = [];
      for (let k = 0; k <= 10; k++) {
        const t = k / 10;
        const ang = L * 1.2 + t * Math.PI * 2.15;
        const rad = 1.15 + 0.92 * Math.sin(t * Math.PI);
        let lx = cx + Math.sin(t * Math.PI * 2 + L) * 0.85;
        const ly = B0.y + Math.cos(ang) * rad * 0.88;
        let lz = B0.z + Math.sin(ang) * rad * 0.78 - 0.38;
        if (lx > CUT_X + 0.15 && lz > CUT_Z - 0.08) lz = CUT_Z - 0.35 - Math.abs(lz - CUT_Z) * 0.45;
        // Clamp strictly inside cytoplasmic rod radius
        const ax = rodOnAxis(V(lx, ly, lz));
        const off = V(lx, ly, lz).sub(ax);
        if (off.length() > ROD_CYTO_R - 0.42) off.setLength(ROD_CYTO_R - 0.42);
        const p = ax.add(off);
        if (p.x > SEPTUM_X - 0.55) p.x = SEPTUM_X - 0.55;
        ctrl.push(p);
      }
      const cv = new THREE.CatmullRomCurve3(ctrl);
      const pts = cv.getSpacedPoints(104);
      dna.emitDNA(B_DNA, pts, { nm: DNA_NM });
      SITES.dna.push(pts[52].clone());
      dnaSpots.push(pts[30].clone(), pts[72].clone());
    }

    // Active translocating chromosome strand threading straight through the SpoIIIE hexameric pore into the forespore!
    const transCurve = new THREE.CatmullRomCurve3([
      V(-0.85, B0.y + 0.65, B0.z - 0.65),
      V(0.05, B0.y + 0.22, B0.z - 0.32),
      V(SEPTUM_X, B0.y, B0.z - 0.15), // exact center of SpoIIIE pump!
      V(SEPTUM_X + 0.75, B0.y - 0.18, B0.z - 0.32),
      FORE_C.clone().add(V(-0.25, 0.45, -0.35)),
      FORE_C.clone().add(V(0.45, -0.25, -0.45)),
      FORE_C.clone().add(V(0.15, -0.65, -0.15)),
      FORE_C.clone().add(V(-0.45, -0.15, -0.20)),
    ]);
    dna.emitDNA(B_DNA, transCurve.getSpacedPoints(96), { nm: DNA_NM * 1.08 });
    SITES.dna.push(transCurve.getPointAt(0.5));

    // A few nascent mRNA ribbons emerging into mother-cell cytoplasm
    for (let m = 0; m < 3; m++) {
      const start = dnaSpots[m * 2] ?? V(-3.2, B0.y + 0.5, B0.z - 0.6);
      const mPts: THREE.Vector3[] = [];
      for (let k = 0; k < 20; k++) {
        mPts.push(
          start
            .clone()
            .add(V(-0.25 + k * 0.055 * (m === 1 ? -1 : 1), Math.sin(k * 0.45 + m) * 0.16, -0.12 - k * 0.04))
        );
      }
      rna.rnaAlong(B_MRNA, mPts, MRNA, 0.052);
    }

    // ~72 sculpted 70S bacterial ribosomes distributed through mother-cell cutaway cytoplasm
    let riboCount = 0;
    for (let guard = 0; riboCount < 64 && guard < 1100; guard++) {
      const rx = rr(B0.x - ROD_H - 1.5, SEPTUM_X - 0.45);
      const ang = rr(0, Math.PI * 2);
      const rad = rr(0.55, ROD_CYTO_R - 0.45);
      const p = V(rx, B0.y + Math.cos(ang) * rad, B0.z + Math.sin(ang) * rad);
      if (rodAxisDist(p) > ROD_CYTO_R - 0.42) continue;
      if (p.x > CUT_X - 0.15 && p.z > CUT_Z - 0.18) continue;
      I_RIBO.add(p, qOut(randDir(), riboCount * 0.75), rr(0.86, 1.04));
      riboCount++;
      placed++;
      if (SITES.ribosome.length < 32) SITES.ribosome.push(p.clone());
    }
    // 10 dormant ribosomes tucked inside the engulfed forespore
    for (let k = 0; k < 10; k++) {
      const d = randDir();
      const p = FORE_C.clone().add(V(d.x * 0.72, d.y * 0.78, d.z * 0.62));
      I_RIBO.add(p, qOut(randDir(), k), 0.85);
      placed++;
    }

    B_DNA.done();
    B_MRNA.done();
    I_RIBO.done();
  }

  // -------------------------------------------------------------------------
  // 4. Liberated Cutaway Armored Dormant Endospore (SP0)
  //    7 Disjoint Concentric Layers (ZERO z-fighting!):
  //    exosporium -> coat (CotA 1GSK) -> cortex -> germ_wall -> spore_im (SleB 4FET) -> core (Ca-DPA + SASP-DNA 2Z3X)
  // -------------------------------------------------------------------------
  function buildDormantEndospore(T) {
    // Layer 1: Iridescent Translucent Paracrystalline Exosporium Halo (r = R + 0.34, cap thick 0.06 -> [R+0.34, R+0.28])
    const exoMat = cinemaShellMat('exosporium', '#4cb8d4', '#bfefff', SPORE_CLIP, {
      attenCol: '#38a6c8',
      attenDist: 5.8,
      sssColor: '#8ef0ff',
      sssIntensity: 0.30,
      iridescence: 0.72,
      thickness: 0.24,
      roughness: 0.09,
      sheenColor: '#dcfaff',
      normalMap: bump(14, 10),
      normalScale: 0.18,
    });
    cell.add(shade(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) + 0.34, 112), exoMat), false, true));

    const exoCapMat = reg(
      'exosporium',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.26,
        emissive: '#1e6e85',
        emissiveIntensity: 0.38,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      sporeCaps.add(
        new THREE.Mesh(
          capStrip(SP0, d => sporeBaseR(d) + 0.34, ax, 0.06, [[0, 1, '#9ef4ff']], 160),
          exoCapMat
        )
      );
    }

    // Fine BclA hair-like glycoprotein nap radiating outward from the exosporium
    const S_EXO = sculpt('exosporium', cell, true, {
      emissive: '#1a6880',
      emissiveIntensity: 0.26,
      roughness: 0.32,
    }, SPORE_CUT);
    const cNapA = col('#8ef0ff'), cNapB = col('#d8fbff');
    const N_NAP = 140;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N_NAP; i++) {
      const y = 1 - ((i + 0.5) / N_NAP) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * golden;
      const d = V(Math.cos(th) * rad, y, Math.sin(th) * rad).normalize();
      const { p, n } = sporeSurf(d, 0.34);
      if (inSporeWedge(p)) continue;
      const tip = p.clone().addScaledVector(n, rr(0.22, 0.34));
      S_EXO.tube([p, p.clone().lerp(tip, 0.5).add(ortho(n).multiplyScalar(0.04)), tip], 0.015, 0.008, cNapA, cNapB, 5, true);
      if (i % 12 === 0 && SITES.exosporium.length < 18) SITES.exosporium.push(tip.clone());
    }
    S_EXO.done();

    // Layer 2: Cross-Linked Protein Spore Coat (r in [R+0.10, R-0.20]) + Real PDB CotA (1GSK) Armor!
    const coatShellMat = reg(
      'coat',
      applyBacklitSSS(
        phys(
          {
            color: '#b86d26',
            roughness: 0.36,
            metalness: 0.16,
            clearcoat: 0.54,
            clearcoatRoughness: 0.22,
            sheen: 0.48,
            sheenColor: '#ffd494',
            normalMap: protBump,
            normalScale: new THREE.Vector2(0.36, 0.36),
          },
          SPORE_CLIP
        ),
        '#ff9e4a',
        0.26,
        2.5
      )
    );
    cell.add(shade(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) + 0.10, 108), coatShellMat), true, true));

    const COAT_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.00, 0.30, '#ffc470'], // Outer electron-dense crust
      [0.30, 0.72, '#c97828'], // Disulfide-cross-linked mid-coat lamellae
      [0.72, 1.00, '#f0a652'], // Inner coat boundary
    ];
    const coatCapMat = reg(
      'coat',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.30,
        metalness: 0.14,
        emissive: '#5c2d08',
        emissiveIntensity: 0.32,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      sporeCaps.add(
        new THREE.Mesh(
          capStrip(SP0, d => sporeBaseR(d) + 0.10, ax, 0.30, COAT_LAYERS, 160),
          coatCapMat
        )
      );
    }

    // Tile ~98 real PDB 1GSK CotA laccase coat proteins over the outer spore coat & cut edge!
    const I_COTA = molBatch('coat', T.geoCota, cell, false, {
      emissive: '#613308',
      emissiveIntensity: 0.22,
      roughness: 0.32,
      clearcoat: 0.50,
    });
    const N_COTA = 132;
    for (let i = 0; i < N_COTA; i++) {
      const y = 1 - ((i + 0.5) / N_COTA) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * golden + 0.4;
      const d = V(Math.cos(th) * rad, y, Math.sin(th) * rad).normalize();
      const { p, n } = sporeSurf(d, 0.12);
      if (inSporeWedge(p)) continue;
      I_COTA.add(p, qOut(n, i * 0.8), rr(0.88, 1.06));
      placed++;
      if (i % 6 === 0 && SITES.coat.length < 24) SITES.coat.push(p.clone().addScaledVector(n, 0.12));
    }
    I_COTA.done();

    // Layer 3: Thick Modified Peptidoglycan Cortex (r in [R-0.24, R-0.66], clean 0.04 u gap from Coat!)
    const cortexOuterMat = reg(
      'cortex',
      applyBacklitSSS(
        phys(
          {
            color: '#46c7a2',
            roughness: 0.34,
            clearcoat: 0.42,
            sheen: 0.44,
            sheenColor: '#b8ffea',
            normalMap: bump(12, 8),
            normalScale: new THREE.Vector2(0.24, 0.24),
          },
          SPORE_CLIP
        ),
        '#6effd4',
        0.26,
        2.6
      )
    );
    cell.add(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) - 0.24, 96), cortexOuterMat));

    const CORTEX_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.00, 0.08, '#90ffd8'], // Outer forespore membrane remnant
      [0.08, 0.38, '#46cc9f'], // Loose muramic-δ-lactam cortex outer band
      [0.38, 0.68, '#72e8c0'], // Mid-cortex glycan zone
      [0.68, 1.00, '#38b58d'], // Deep cortex hydration-control zone
    ];
    const cortexCapMat = reg(
      'cortex',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.30,
        emissive: '#0e523e',
        emissiveIntensity: 0.34,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      sporeCaps.add(
        new THREE.Mesh(
          capStrip(SP0, d => sporeBaseR(d) - 0.24, ax, 0.42, CORTEX_LAYERS, 160),
          cortexCapMat
        )
      );
    }
    // Delicate muramic-δ-lactam glycan mesh arcs on the cortex cutaway faces
    const S_CTX = sculpt('cortex', sporeCaps, false, { emissive: '#105c46', emissiveIntensity: 0.24 });
    for (const ax of ['x', 'z'] as const) {
      const off = ax === 'x' ? V(0.024, 0, 0) : V(0, 0, 0.024);
      for (let i = 3; i < 30; i += 3) {
        const a = (i / 32) * Math.PI;
        const d = ax === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(Math.sin(a), Math.cos(a), 0);
        const R = sporeBaseR(d);
        const pO = SP0.clone().addScaledVector(d, R - 0.28).add(off);
        const pI = SP0.clone().addScaledVector(d, R - 0.62).add(off);
        S_CTX.stick(pO, pI, 0.011, col('#9effe0'), col('#42c49c'));
        if (i % 6 === 3) SITES.cortex.push(pO.clone().lerp(pI, 0.5));
      }
    }
    S_CTX.done();

    // Layer 4: Primordial Germ Cell Wall (r in [R-0.70, R-0.84], clean 0.04 u gap from Cortex!)
    const germShellMat = reg(
      'germ_wall',
      phys(
        {
          color: '#ffd25e',
          emissive: '#6e4c0a',
          emissiveIntensity: 0.28,
          roughness: 0.32,
          clearcoat: 0.45,
        },
        SPORE_CLIP
      )
    );
    cell.add(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) - 0.70, 84), germShellMat));

    const GERM_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.5, '#ffe896'],
      [0.5, 1.0, '#f2b838'],
    ];
    const germCapMat = reg(
      'germ_wall',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.28,
        emissive: '#6e4a08',
        emissiveIntensity: 0.36,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      sporeCaps.add(
        new THREE.Mesh(
          capStrip(SP0, d => sporeBaseR(d) - 0.70, ax, 0.14, GERM_LAYERS, 150),
          germCapMat
        )
      );
      for (let i = 4; i < 24; i += 6) {
        const a = (i / 28) * Math.PI;
        const d = ax === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(Math.sin(a), Math.cos(a), 0);
        SITES.germ_wall.push(SP0.clone().addScaledVector(d, sporeBaseR(d) - 0.77));
      }
    }

    // Layer 5: Compressed Inner Spore Membrane (r in [R-0.88, R-0.98]) + PDB SleB (4FET) + GerA Receptors!
    const sporeImMat = cinemaShellMat('spore_im', '#d95880', '#ffc7da', SPORE_CLIP, {
      attenCol: '#c4426b',
      attenDist: 3.0,
      sssColor: '#ff82ab',
      sssIntensity: 0.32,
      iridescence: 0.44,
      thickness: 0.34,
      roughness: 0.13,
      sheenColor: '#ffe0ec',
      normalMap: bump(10, 8),
      normalScale: 0.20,
    });
    cell.add(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) - 0.88, 84), sporeImMat));

    const SPORE_IM_LAYERS: ReadonlyArray<readonly [number, number, string]> = [
      [0.0, 0.32, '#ff9ebb'],
      [0.32, 0.68, '#5e1a36'],
      [0.68, 1.0, '#ff80aa'],
    ];
    const sporeImCapMat = reg(
      'spore_im',
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.32,
        emissive: '#59142c',
        emissiveIntensity: 0.34,
        side: THREE.DoubleSide,
      })
    );
    for (const ax of ['x', 'z'] as const) {
      sporeCaps.add(
        new THREE.Mesh(
          capStrip(SP0, d => sporeBaseR(d) - 0.88, ax, 0.10, SPORE_IM_LAYERS, 140),
          sporeImCapMat
        )
      );
    }

    // Real PDB 4FET SleB cortex-lytic enzymes + sculpted GerA nutrient germinant receptors on spore_im!
    const I_SLEB = molBatch('spore_im', T.geoSleb, cell, false, {
      emissive: '#78183c',
      emissiveIntensity: 0.26,
      roughness: 0.30,
      clearcoat: 0.48,
    });
    const S_GERA = sculpt('spore_im', cell, false, {
      emissive: '#6e1c42',
      emissiveIntensity: 0.28,
      roughness: 0.28,
    });
    for (let i = 0; i < 16; i++) {
      const ax = i < 8 ? 'x' : 'z';
      const idx = i % 8;
      const a = ((idx + 1) / 9) * Math.PI;
      const d = ax === 'x' ? V(0, Math.cos(a), Math.sin(a)) : V(Math.sin(a), Math.cos(a), 0);
      const R = sporeBaseR(d);
      const pIm = SP0.clone().addScaledVector(d, R - 0.88).add(ax === 'x' ? V(0.05, 0, 0) : V(0, 0, 0.05));
      if (idx % 2 === 0) {
        I_SLEB.add(pIm.clone().addScaledVector(d, 0.08), qOut(d, i * 0.9), 0.96);
        SITES.spore_im.push(pIm.clone());
        placed++;
      } else {
        // GerA heterotrimeric nutrient germinant sensor embedded in spore_im
        S_GERA.lobe(pIm, 0.11, 0.15, 0.11, col('#ff6ca0'), qOut(d));
        S_GERA.add(pIm.clone().addScaledVector(d, 0.12), 0.10, col('#ffd166'));
        SITES.spore_im.push(pIm.clone());
        placed++;
      }
    }
    I_SLEB.done();
    S_GERA.done();

    // Layer 6: Dehydrated Vitrified Core Cavity (r <= R - 1.04)
    const coreBackMat = reg(
      'core',
      applyBacklitSSS(
        phys(
          {
            color: '#182c5c',
            emissive: '#0c224f',
            emissiveIntensity: 0.34,
            roughness: 0.46,
            clearcoat: 0.36,
            normalMap: bump(10, 8),
            normalScale: new THREE.Vector2(0.18, 0.18),
            side: THREE.BackSide,
          },
          SPORE_CLIP
        ),
        '#4c8eff',
        0.28,
        2.4
      )
    );
    cell.add(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) - 1.04, 72), coreBackMat));

    // Translucent refractive glass-gel core veil showing the low-water vitrified phase
    const coreGelMat = cinemaShellMat('core', '#2852a8', '#8ab8ff', SPORE_CLIP, {
      attenCol: '#244a9c',
      attenDist: 2.2,
      sssColor: '#52b8ff',
      sssIntensity: 0.34,
      iridescence: 0.40,
      thickness: 0.60,
      roughness: 0.10,
      sheenColor: '#b8dcff',
      normalMap: bump(8, 8),
      normalScale: 0.14,
    });
    cell.add(new THREE.Mesh(shellGeo(SP0, d => sporeBaseR(d) - 1.07, 64), coreGelMat));
    SITES.core.push(SP0.clone(), SP0.clone().add(V(0.35, 0.25, 0.25)), SP0.clone().add(V(-0.5, -0.3, -0.3)));

    // Layer 7A: Crystalline Glowing Ca²⁺–Dipicolinate (Ca-DPA) Core Stacks packed throughout the dehydrated core!
    const S_CADPA = sculpt('ca_dpa', cell, false, {
      emissive: '#14854a',
      emissiveIntensity: 0.44,
      roughness: 0.22,
      metalness: 0.08,
      clearcoat: 0.65,
    });
    modeRefs.caDpaMat = REG.ca_dpa.mats[REG.ca_dpa.mats.length - 1];
    const cCa = col('#8aff6e'), cDpa = col('#2ee89a'), cOxy = col('#d4ff8a');

    // Emit 48 stacked Ca-DPA chelate crystals (planar pyridine ring + central luminous Ca2+ sphere!) inside the core
    const caSpots: THREE.Vector3[] = [];
    for (let k = 0; k < 48; k++) {
      const u = rr(-0.85, 0.85);
      const th = rr(0, Math.PI * 2);
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const d = V(s * Math.cos(th), u, s * Math.sin(th)).normalize();
      const maxR = (sporeBaseR(d) - 1.24) * rr(0.28, 0.90);
      const p = SP0.clone().addScaledVector(d, maxR);
      // Keep the front-right cut interior lushly visible without poking outside the core boundary
      if (p.x > SP0.x + 0.55 && p.z > SP0.z + 0.55) continue;
      const axN = randDir();
      S_CADPA.ring(p, axN, 0.145, 0.036, cDpa, 6, 6); // 6-membered pyridine-2,6-dicarboxylate chelate ring
      S_CADPA.add(p, 0.14, cCa); // Central divalent Ca²⁺ ion!
      S_CADPA.add(p.clone().addScaledVector(axN, 0.09), 0.075, cOxy);
      caSpots.push(p.clone());
      placed++;
      if (SITES.ca_dpa.length < 24) SITES.ca_dpa.push(p.clone());
    }
    S_CADPA.done();

    // Extra glowing vitrified core highlight aura visible in Endospore mode
    const S_SPORE_HI = sculpt('ca_dpa', endosporeHighlightGroup, false, {
      emissive: '#38ffbe',
      emissiveIntensity: 0.85,
      roughness: 0.18,
    });
    caSpots.slice(0, 18).forEach(p => S_SPORE_HI.add(p, 0.17, col('#80ffd8')));
    S_SPORE_HI.done();

    // Layer 7B: α/β-SASP–Locked A-Form DNA (Real PDB 2Z3X!) winding cleanly through the dehydrated core!
    const B_ADNA = balls('sasp_dna', cell, false);
    const I_SASP = molBatch('sasp_dna', T.geoSaspDna, cell, false, {
      emissive: '#145e78',
      emissiveIntensity: 0.30,
      roughness: 0.28,
      clearcoat: 0.50,
    });

    // 3 compact A-form supercoiled toroidal DNA arcs packed with real PDB 2Z3X SASP-DNA complexes
    for (let L = 0; L < 3; L++) {
      const yOff = (L - 1) * 0.62;
      const ctrl: THREE.Vector3[] = [];
      for (let k = 0; k <= 12; k++) {
        const t = k / 12;
        const a = t * Math.PI * 2 + L * 1.1;
        const rx = 1.48 - Math.abs(yOff) * 0.45;
        const rz = 1.10 - Math.abs(yOff) * 0.32;
        let lx = Math.cos(a) * rx;
        let lz = Math.sin(a) * rz;
        if (lx > 0.35 && lz > 0.35) {
          lx *= 0.45;
          lz *= 0.45;
        }
        ctrl.push(V(SP0.x + lx, SP0.y + yOff + Math.sin(a * 2) * 0.22, SP0.z + lz));
      }
      const cv = new THREE.CatmullRomCurve3(ctrl);
      const pts = cv.getSpacedPoints(84);
      // Compact A-form double helix (slightly wider radius, shorter rise)
      dna.emitDNA(B_ADNA, pts, { nm: 0.056 });
      for (let s = 8; s < pts.length - 6; s += 11) {
        const p = pts[s];
        const tan = pts[Math.min(pts.length - 1, s + 1)].clone().sub(pts[Math.max(0, s - 1)]).normalize();
        I_SASP.add(p, qFromZ(tan, s * 0.55), rr(0.95, 1.12));
        placed++;
        if (SITES.sasp_dna.length < 22) SITES.sasp_dna.push(p.clone());
      }
    }
    B_ADNA.done();
    I_SASP.done();
  }

  // -------------------------------------------------------------------------
  // 5. Floating Circular Atomic Magnifier Inset ('crosslink')
  //    Left: NAG–NAM + D-Ala–D-Ala Cross-Link (+ Teichoic P) | Right: Ca²⁺–Dipicolinate Chelate
  //    Text placed generously inside the torus ring with ZERO edge clipping!
  // -------------------------------------------------------------------------
  function buildAtomicCrosslinkInset() {
    const grp = new THREE.Group();
    grp.position.copy(M0);
    grp.rotation.set(0.08, -0.14, 0);
    cell.add(grp);

    const R_RING = 1.84;

    const ringMat = reg(
      'crosslink',
      phys(
        {
          color: '#ffbe66',
          emissive: '#753f0a',
          emissiveIntensity: 0.36,
          roughness: 0.22,
          metalness: 0.24,
          clearcoat: 0.68,
        },
        {}
      )
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.040, 14, 64), ringMat));

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 56),
      reg(
        'crosslink',
        phys(
          {
            color: '#0c1426',
            roughness: 0.16,
            transparent: true,
            opacity: 0.54,
            depthWrite: false,
            side: THREE.DoubleSide,
          },
          {}
        )
      )
    );
    glassDisc.position.z = -0.15;
    grp.add(glassDisc);

    const S_AT = sculpt('crosslink', grp, false, { roughness: 0.24, clearcoat: 0.58 });
    // Standard CPK element palette: C slate-silver, H pearl, N cobalt, O crimson, P violet, Ca²⁺ emerald-mint
    const cC = col('#909cb2');
    const cH = col('#eef5ff');
    const cN = col('#4d94ff');
    const cO = col('#ff5464');
    const cP = col('#b87cff');
    const cCa = col('#4cffb8');
    const cGold = col('#ffd15c');
    const cBond = col('#cdd8ea');

    // Vertical divider strictly inside ring
    S_AT.stick(V(0, -1.04, -0.05), V(0, 0.88, -0.05), 0.013, col('#6a7d9e'), col('#6a7d9e'));

    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.028) => S_AT.stick(a, b, r, c1, c2);
    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => S_AT.add(p, r * 2, c);

    // Helper: draw an explicit 6-membered pyranose / pyridine ring in XY plane
    const makeRing = (cx: number, cy: number, cz: number, rad: number, rot = 0) => {
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k < 6; k++) {
        const a = rot + (k / 6) * Math.PI * 2;
        pts.push(V(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, cz + (k % 2 === 0 ? 0.025 : -0.025)));
      }
      return pts;
    };

    // LEFT HALF: NAG–NAM β-1,4 Disaccharide + Glowing D-Ala–D-Ala Transpeptidation Cross-Link + Teichoic Phosphate (P)
    const nag = makeRing(-1.20, 0.36, 0.06, 0.23, 0.2);
    const nam = makeRing(-0.44, 0.26, 0.06, 0.23, -0.1);
    const betaO = V(-0.82, 0.32, 0.09); // β-1,4 glycosidic oxygen (lysozyme cleavage site!)
    for (let k = 0; k < 6; k++) {
      const cA = k === 0 ? cO : cC;
      atom(nag[k], k === 0 ? 0.066 : 0.062, cA);
      bond(nag[k], nag[(k + 1) % 6], cA, (k + 1) % 6 === 0 ? cO : cC, 0.023);
      const cB = k === 0 ? cO : cC;
      atom(nam[k], k === 0 ? 0.066 : 0.062, cB);
      bond(nam[k], nam[(k + 1) % 6], cB, (k + 1) % 6 === 0 ? cO : cC, 0.023);
    }
    atom(betaO, 0.074, cO);
    bond(nag[5], betaO, cC, cO, 0.026);
    bond(betaO, nam[3], cO, cC, 0.026);

    // Teichoic phosphodiester (P) linked to NAM C6!
    const pTeich = V(-0.44, 0.72, 0.10);
    const oTeich = V(-0.46, 0.54, 0.08);
    atom(oTeich, 0.068, cO);
    atom(pTeich, 0.095, cP);
    bond(nam[1], oTeich, cC, cO, 0.024);
    bond(oTeich, pTeich, cO, cP, 0.026);
    atom(V(-0.62, 0.78, 0.12), 0.056, cO);
    bond(pTeich, V(-0.62, 0.78, 0.12), cP, cO, 0.020);

    // Stem peptide + highlighted D-Ala–D-Ala transpeptidation cross-link (PBP3 / β-lactam target!)
    const pStem1 = V(-0.56, -0.14, 0.08);
    const pStem2 = V(-0.92, -0.34, 0.10);
    const pAlaN = V(-0.64, -0.58, 0.12);
    const pAlaC = V(-0.34, -0.76, 0.12);
    const pAlaO = V(-0.22, -0.56, 0.15);
    const pCross = V(-0.88, -0.82, 0.10);
    const pH = V(-0.76, -0.44, 0.18);

    atom(pStem1, 0.072, cN);
    atom(pStem2, 0.075, cC);
    atom(pAlaN, 0.084, cN);
    atom(pAlaC, 0.090, cGold); // D-Ala–D-Ala scissile carbonyl C!
    atom(pAlaO, 0.072, cO);
    atom(pCross, 0.078, cN);
    atom(pH, 0.048, cH);

    bond(nam[4], pStem1, cC, cN, 0.026);
    bond(pStem1, pStem2, cN, cC, 0.028);
    bond(pStem2, pAlaN, cC, cN, 0.032);
    bond(pAlaN, pAlaC, cGold, cGold, 0.040); // Glowing highlighted D-Ala–D-Ala β-lactam target bond!
    bond(pAlaC, pAlaO, cGold, cO, 0.024);
    bond(pAlaN, pCross, cN, cN, 0.028);
    bond(pAlaN, pH, cN, cH, 0.018);

    // RIGHT HALF: Ca²⁺–Dipicolinate (Pyridine-2,6-Dicarboxylate) Atomic Chelate Pocket!
    const pyr = makeRing(0.84, 0.18, 0.06, 0.34, Math.PI / 6);
    // Ring index 4 sits at the bottom (-y) = Pyridine Nitrogen pointing directly into the Ca2+ pocket!
    for (let k = 0; k < 6; k++) {
      const isN = k === 4;
      const cK = isN ? cN : cC;
      atom(pyr[k], isN ? 0.092 : 0.075, cK);
      const next = (k + 1) % 6;
      bond(pyr[k], pyr[next], cK, next === 4 ? cN : cC, 0.028);
    }
    // 2,6-dicarboxylate arms flanking the pyridine N (at k=3 left-bottom & k=5 right-bottom)
    const cCarbL = V(0.36, -0.18, 0.08);
    const oCarbL1 = V(0.46, -0.48, 0.11); // Chelate O coordinating Ca²⁺
    const oCarbL2 = V(0.18, -0.10, 0.08);
    const cCarbR = V(1.32, -0.18, 0.08);
    const oCarbR1 = V(1.22, -0.48, 0.11); // Chelate O coordinating Ca²⁺
    const oCarbR2 = V(1.50, -0.10, 0.08);
    const pCa = V(0.84, -0.56, 0.13);     // Central divalent Ca²⁺ ion!

    atom(cCarbL, 0.076, cC);
    atom(oCarbL1, 0.086, cO);
    atom(oCarbL2, 0.074, cO);
    atom(cCarbR, 0.076, cC);
    atom(oCarbR1, 0.086, cO);
    atom(oCarbR2, 0.074, cO);
    atom(pCa, 0.145, cCa); // Radiant divalent Ca²⁺ chelated center!
    // Outer pyridine H atoms
    atom(V(0.84, 0.68, 0.08), 0.048, cH);
    bond(pyr[1], V(0.84, 0.68, 0.08), cC, cH, 0.018);

    bond(pyr[3], cCarbL, cC, cC, 0.028);
    bond(cCarbL, oCarbL1, cC, cO, 0.028);
    bond(cCarbL, oCarbL2, cC, cO, 0.024);
    bond(pyr[5], cCarbR, cC, cC, 0.028);
    bond(cCarbR, oCarbR1, cC, cO, 0.028);
    bond(cCarbR, oCarbR2, cC, cO, 0.024);

    // Three luminous tridentate coordination bonds clamping divalent Ca²⁺!
    bond(pyr[4], pCa, cN, cCa, 0.032);
    bond(oCarbL1, pCa, cO, cCa, 0.032);
    bond(oCarbR1, pCa, cO, cCa, 0.032);

    // Secondary lower dipicolinate O-bridge hinting at 1:1 Ca-DPA stacking
    const oLowL = V(0.62, -0.86, 0.10);
    const oLowR = V(1.06, -0.86, 0.10);
    atom(oLowL, 0.070, cO);
    atom(oLowR, 0.070, cO);
    bond(pCa, oLowL, cCa, cO, 0.022);
    bond(pCa, oLowR, cCa, cO, 0.022);

    S_AT.done();

    // Top caption plaque placed GENEROUSLY inside the circle (y = +1.08, plane 2.16×0.44, inked text radius <= 1.48 << 1.84!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 104;
    const tg = topCv.getContext('2d');
    tg.clearRect(0, 0, 512, 104);
    tg.font = '700 24px system-ui, -apple-system, sans-serif';
    tg.textAlign = 'center';
    tg.fillStyle = '#ffd46b';
    tg.fillText('NAG–NAM WALL', 152, 38);
    tg.font = '600 18px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ffeab8';
    tg.fillText('D-Ala–D-Ala · P', 152, 70);
    tg.font = '700 24px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#52ffbe';
    tg.fillText('Ca²⁺–DPA CORE', 360, 38);
    tg.font = '600 18px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#c4ffea';
    tg.fillText('Tridentate Chelate', 360, 70);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(2.14, 0.43),
      reg(
        'crosslink',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.74,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 1.08, 0.14);
    grp.add(topLbl);

    // Bottom CPK atomic legend strip comfortably inside the lower circle chord (y = -1.24, width 1.76 -> corners r = 1.62 << 1.84!)
    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 72;
    const bg = botCv.getContext('2d');
    bg.clearRect(0, 0, 512, 72);
    const atomsLegend = [
      ['C', '#909cb2'],
      ['H', '#eef5ff'],
      ['N', '#4d94ff'],
      ['O', '#ff5464'],
      ['P', '#b87cff'],
      ['Ca²⁺', '#4cffb8'],
    ];
    bg.font = '700 22px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 42 + idx * 74;
      bg.beginPath();
      bg.arc(bx, 36, 10, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#e8f0ff';
      bg.fillText(sym, bx + 15, 37);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.76, 0.25),
      reg(
        'crosslink',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.76,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -1.24, 0.14);
    grp.add(botLbl);

    SITES.crosslink.push(M0.clone());
    placed += 8;
  }

  // -------------------------------------------------------------------------
  // Live Opaque-Discard 4x4 MOL Flows (Visible Through Wet Gel!)
  // Exact 6 species: cvi, penicillin, lipid2, cadpa, atp, mrna
  // -------------------------------------------------------------------------
  const MOL = {
    cvi: ['CV–I (Crystal Violet–Iodine)', '#b266ff', 0, 0.27],
    penicillin: ['β-Lactam (Penicillin G)', '#ff5e7e', 1, 0.27],
    lipid2: ['Lipid II (NAG–NAM wall brick)', '#ffd257', 2, 0.26],
    cadpa: ['Ca²⁺–Dipicolinate (Ca-DPA)', '#4cffc8', 3, 0.27],
    atp: ['ATP (SpoIIIE / wall energy)', '#fff06a', 4, 0.26],
    mrna: ['Nascent mRNA transcripts', MRNA, 5, 0.27],
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
      case 0: // CV–I: bulky triaryl dye + iodine complex
        drawBalls([[0.50, 0.27, 0.17], [0.30, 0.64, 0.17], [0.70, 0.64, 0.17], [0.50, 0.50, 0.18]]);
        break;
      case 1: // Penicillin G: fused 4-membered β-lactam square + 5-membered thiazolidine ring
        drawPoly([[0.22, 0.36], [0.46, 0.36], [0.46, 0.64], [0.22, 0.64]], true, 0.11);
        drawPoly([[0.46, 0.36], [0.74, 0.28], [0.84, 0.50], [0.72, 0.72], [0.46, 0.64]], true, 0.10);
        break;
      case 2: // Lipid II: paired NAG–NAM disaccharide hexes + peptide tail
        drawPoly([[0.18, 0.50], [0.34, 0.36], [0.50, 0.50], [0.34, 0.64]], true, 0.10);
        drawBalls([[0.64, 0.50, 0.15], [0.84, 0.50, 0.10]]);
        break;
      case 3: // Ca-DPA: tridentate pyridine chelate holding Ca²⁺ core
        drawPoly([[0.32, 0.24], [0.68, 0.24], [0.80, 0.54], [0.50, 0.78], [0.20, 0.54]], true, 0.09);
        drawBalls([[0.50, 0.52, 0.19]]);
        break;
      case 4: // ATP: adenosine + 3 glowing phosphates
        drawBalls([[0.62, 0.50, 0.09], [0.76, 0.50, 0.09], [0.90, 0.50, 0.08], [0.32, 0.50, 0.23]]);
        break;
      case 5: // mRNA: sinuous single-stranded transcript ribbon
        drawPoly(Array.from({ length: 17 }, (_, i) => [0.12 + i * 0.0475, 0.5 + 0.18 * Math.sin(i * 0.78)]), false, 0.11);
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
    // 1. CV–I (Crystal Violet–Iodine): trapped in thick Gram-positive PG wall vs. washed straight out of E. coli strip!
    {
      rate: 2.3,
      acc: 0.5,
      go: () => {
        const mult = mode === 'gram_stain' ? 3 : 1;
        for (let k = 0; k < mult; k++) {
          if (rand() < 0.60) {
            const dst = pickSite('pg_wall', V(-4.4, -2.5, 1.8));
            const src = dst.clone().add(V(rr(-0.6, 0.8), rr(-1.4, 1.4), rr(1.2, 2.4)));
            emitFlow('cvi', [src, src.clone().lerp(dst, 0.55).add(V(0, 0.18, 0.15)), dst], ['pg_wall', 'teichoic'], 2.5, () =>
              splash(dst, '#b266ff', 0.36)
            );
          } else {
            // Washing straight through dissolved LPS & thin 3 nm PG of E. coli comparator strip!
            const mid = pickSite('ecoli_strip', EC0.clone());
            const src = mid.clone().add(V(rr(-0.6, 0.6), 1.3, 1.0));
            const exit = mid.clone().add(V(rr(-0.8, 0.8), -1.3, 1.3));
            emitFlow('cvi', [src, mid, exit], ['ecoli_strip'], 2.2);
          }
        }
      },
    },
    // 2. Penicillin G (β-Lactam): unimpeded access to exposed Gram-positive PBP3 active sites vs. blocked by E. coli LPS
    {
      rate: 2.0,
      acc: 0.4,
      go: () => {
        const mult = mode === 'beta_lactam' ? 3 : 1;
        for (let k = 0; k < mult; k++) {
          if (rand() < 0.72) {
            const dst = pickSite('pbp', V(-4.35, -2.2, 2.1));
            const src = dst.clone().add(V(rr(-0.4, 1.0), rr(-1.2, 1.0), rr(1.4, 2.6)));
            emitFlow('penicillin', [src, src.clone().lerp(dst, 0.5).add(V(0.15, 0.12, 0.1)), dst], ['pbp', 'pg_wall', 'crosslink'], 2.4, () =>
              splash(dst, '#ff5e7e', 0.42)
            );
          } else {
            // Deflecting off E. coli outer LPS barrier
            const hit = pickSite('ecoli_strip', EC0.clone()).add(V(0, 0.25, 0));
            const src = hit.clone().add(V(-0.9, 1.1, 1.4));
            const bounce = hit.clone().add(V(1.1, 0.9, 1.6));
            emitFlow('penicillin', [src, hit, bounce], ['ecoli_strip', 'pbp'], 2.3);
          }
        }
      },
    },
    // 3. Lipid II (NAG–NAM–pentapeptide wall precursor): flipped across single PM -> cross-linked by PBP3 & Sortase A
    {
      rate: 2.2,
      acc: 0.4,
      go: () => {
        const src = V(rr(-4.2, 0.2), B0.y + rr(-1.8, 1.8), B0.z - rr(0.4, 1.6));
        const pmPt = pickSite('pm', V(-2.2, -2.4, -0.2));
        const dst = rand() < 0.65 ? pickSite('pbp', V(-3.8, -2.6, 0.6)) : pickSite('sortase', V(-3.2, 3.2, -0.2));
        emitFlow('lipid2', [src, pmPt, dst], ['pm', 'pg_wall', 'pbp', 'sortase', 'crosslink'], 2.8, () =>
          splash(dst, '#ffd257', 0.34)
        );
      },
    },
    // 4. Ca²⁺–Dipicolinate (Ca-DPA): mother cell -> SpoIIIAH–SpoIIQ forespore + vitrified endospore core packing
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const mult = mode === 'endospore' ? 2 : 1;
        for (let k = 0; k < mult; k++) {
          if (rand() < 0.45) {
            const src = V(rr(-1.2, 0.4), B0.y + rr(-1.4, 1.4), B0.z - rr(0.4, 1.4));
            const ch = pickSite('forespore', FORE_C.clone().add(V(-1.1, 0.2, 0)));
            emitFlow('cadpa', [src, ch, FORE_C.clone()], ['forespore', 'ca_dpa', 'core'], 2.7, () =>
              splash(FORE_C, '#4cffc8', 0.36)
            );
          } else {
            const dst = pickSite('ca_dpa', SP0.clone());
            const src = pickSite('spore_im', SP0.clone().add(V(0, 1.4, 0.8)));
            emitFlow('cadpa', [src, src.clone().lerp(dst, 0.5).add(V(0.18, 0.12, 0.14)), dst], ['ca_dpa', 'core', 'spore_im', 'sasp_dna'], 2.6, () =>
              splash(dst, '#4cffc8', 0.34)
            );
          }
        }
      },
    },
    // 5. Cytoplasmic ATP fueling SpoIIIE DNA translocase pump, FtsZ septum, and LtaS wall synthesis
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const src = V(rr(-4.0, -0.5), B0.y + rr(-1.6, 1.6), B0.z - rr(0.4, 1.5));
        const r = rand();
        const dstKey = r < 0.48 ? 'spoiiie' : r < 0.78 ? 'septum' : 'teichoic';
        const dst = pickSite(dstKey, V(SEPTUM_X, B0.y, B0.z - 0.15));
        emitFlow('atp', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.28, 0.12)), dst], ['atp', dstKey, 'pm'], 2.5, () =>
          splash(dst, '#fff06a', 0.38)
        );
      },
    },
    // 6. Nascent mRNA transcripts streaming from supercoiled 4.22 Mbp nucleoid to 70S bacterial ribosomes
    {
      rate: 1.8,
      acc: 0.3,
      go: () => {
        const src = pickSite('dna', V(-2.8, B0.y, B0.z - 0.8));
        const dst = pickSite('ribosome', V(-3.8, B0.y + 1.2, B0.z - 1.0));
        emitFlow('mrna', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.22, -0.1)), dst], ['dna', 'ribosome', 'mrna'], 2.6);
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
  // 4-Mode Interactive Assay Switcher:
  //   'vegetative' -> 'gram_stain' -> 'beta_lactam' -> 'endospore'
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');

  function setMode(nextMode?: ModeKey, silent = false) {
    const target: ModeKey =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;

    const isGram = mode === 'gram_stain';
    const isBlac = mode === 'beta_lactam';
    const isSpore = mode === 'endospore';

    gramStainOverlayGroup.visible = isGram && cutOn;
    betaLactamOverlayGroup.visible = isBlac;
    endosporeHighlightGroup.visible = isSpore;

    // Live material transformation for Gram Stain assay (violet thick Gram+ wall vs pink safranin E. coli strip!)
    if (modeRefs.pgShell) {
      modeRefs.pgShell.userData.cols.solid.set(isGram ? '#7a35d9' : '#d69732');
      modeRefs.pgShell.userData.cols.gel.set(isGram ? '#d4b3ff' : '#ffe9b8');
      modeRefs.pgShell.attenuationColor.set(isGram ? '#6b28d4' : '#c48120');
      modeRefs.pgShell.color.copy(organelleLook === 'gel' ? modeRefs.pgShell.userData.cols.gel : modeRefs.pgShell.userData.cols.solid);
    }
    if (modeRefs.pgCap) {
      modeRefs.pgCap.color.set(isGram ? '#a86eff' : '#ffffff');
      modeRefs.pgCap.emissive.set(isGram ? '#5918b5' : '#593608');
      modeRefs.pgCap.emissiveIntensity = isGram ? 0.62 : 0.34;
    }
    if (modeRefs.ecoliOm) {
      modeRefs.ecoliOm.color.set(isGram ? '#ff709a' : '#2fa878');
      modeRefs.ecoliOm.emissive.set(isGram ? '#661430' : '#000000');
      modeRefs.ecoliOm.emissiveIntensity = isGram ? 0.42 : 0.0;
    }
    if (modeRefs.ecoliCap) {
      modeRefs.ecoliCap.color.set(isGram ? '#ff8cb0' : '#ffe070');
      modeRefs.ecoliCap.emissive.set(isGram ? '#8a1c42' : '#946c10');
    }
    if (modeRefs.caDpaMat) {
      modeRefs.caDpaMat.emissiveIntensity = isSpore ? 0.78 : 0.42;
    }

    sporeLamp.intensity = isSpore ? 24 : 11.5;
    lamp.color.set(isGram ? '#d4a6ff' : isBlac ? '#ff9ea8' : '#ffbe82');

    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.remove('gram_stain', 'beta_lactam', 'endospore');
      if (mode !== 'vegetative') modeBtn.classList.add(mode);
    }
    if (subEl) {
      subEl.textContent =
        isGram
          ? 'Gram Stain assay · ethanol dehydrates the 40 nm wall trapping purple CV–I while E. coli loses LPS and stains safranin-pink'
          : isBlac
            ? 'β-Lactam attack · penicillin G reaches exposed Gram-positive PBP3 (PDB 7BN9) directly while E. coli LPS shields its wall'
            : isSpore
              ? 'Armored Endospore mode · CotA coat (1GSK), thick cortex, SleB (4FET), vitrified Ca-DPA gel & SASP-locked A-form DNA (2Z3X)'
              : 'Cryo-EM dark-field cutaway · 40 nm monoderm wall vs. E. coli 3 nm strip + concentric dormant endospore (1 unit = 100 nm)';
    }
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => {
      setMode();
      const targetView =
        mode === 'gram_stain' || mode === 'beta_lactam'
          ? 'wall_compare'
          : mode === 'endospore'
            ? 'endospore'
            : 'overview';
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
  const TIP0 = 'Gram-Positive Bacillus subtilis & Armored Endospore: compare the thick 40 nm peptidoglycan monoderm wall directly against E. coli’s thin 3 nm diderm strip, inspect polar sporulation, and explore the vitrified Ca-DPA endospore core.';
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
    if (name === 'endospore' || name === 'core') setMode('endospore', true);
    else if (name === 'overview') setMode('vegetative', true);
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
    sporeCaps.visible = cutOn;
    gramStainOverlayGroup.visible = cutOn && mode === 'gram_stain';
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
    a.download = `gram-positive-${mode}-realistic.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.8, -0.5, -0.2])) };
    return null;
  }

  function flyTo(m) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) { view = idx; curView = m.view; }
      if (m.view === 'endospore' || m.view === 'core') setMode('endospore', true);
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C0 = V(0.8, -0.2, -0.2);
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
      pg_wall: SITES.pg_wall[2] ?? V(-4.35, -2.55, 1.85),
      teichoic: SITES.teichoic[4] ?? V(-4.45, -2.65, 2.35),
      pm: SITES.pm[1] ?? V(-2.25, -2.45, -0.22),
      ecoli_strip: SITES.ecoli_strip[1] ?? EC0.clone(),
      pbp: SITES.pbp[2] ?? V(-4.32, -2.15, 2.25),
      sortase: SITES.sortase[2] ?? V(-4.32, 2.85, 2.05),
      septum: SITES.septum[1] ?? V(SEPTUM_X, B0.y + 1.85, B0.z - 1.15),
      spoiiie: SITES.spoiiie[0] ?? V(SEPTUM_X, B0.y, B0.z - 0.15),
      forespore: SITES.forespore[0] ?? FORE_C.clone(),
      dna: SITES.dna[2] ?? V(-2.85, B0.y + 0.15, B0.z - 0.85),
      ribosome: SITES.ribosome[3] ?? V(-3.85, B0.y + 1.45, B0.z - 1.05),
      exosporium: SITES.exosporium[2] ?? SP0.clone().add(V(-2.2, 2.3, 1.5)),
      coat: SITES.coat[3] ?? SP0.clone().add(V(-1.4, 2.1, 1.6)),
      cortex: SITES.cortex[2] ?? SP0.clone().add(V(0.05, 1.65, 1.45)),
      germ_wall: SITES.germ_wall[1] ?? SP0.clone().add(V(0.05, 1.42, 1.25)),
      spore_im: SITES.spore_im[1] ?? SP0.clone().add(V(0.05, 1.24, 1.12)),
      core: SITES.core[0] ?? SP0.clone(),
      ca_dpa: SITES.ca_dpa[2] ?? SP0.clone().add(V(0.38, 0.35, 0.25)),
      sasp_dna: SITES.sasp_dna[2] ?? SP0.clone().add(V(-0.35, -0.25, 0.35)),
      crosslink: M0.clone(),
    };
    let P = { ...base };
    if (vName === 'wall_compare') {
      P = {
        ...base,
        pg_wall: SITES.pg_wall[2] ?? V(-4.35, -2.55, 1.85),
        teichoic: SITES.teichoic[2] ?? V(-4.45, -2.65, 2.35),
        pm: SITES.pm[0] ?? V(-3.6, -2.45, -0.22),
        ecoli_strip: SITES.ecoli_strip[1] ?? EC0.clone(),
        pbp: SITES.pbp[1] ?? V(-4.32, -2.2, 2.15),
        sortase: SITES.sortase[1] ?? V(-4.32, -1.6, 2.5),
      };
    } else if (vName === 'sporulation') {
      P = {
        ...base,
        septum: SITES.septum[0] ?? V(SEPTUM_X, B0.y + 1.8, B0.z - 1.1),
        spoiiie: SITES.spoiiie[0] ?? V(SEPTUM_X, B0.y, B0.z - 0.15),
        forespore: SITES.forespore[0] ?? FORE_C.clone(),
        dna: SITES.dna[SITES.dna.length - 1] ?? V(SEPTUM_X - 0.5, B0.y + 0.2, B0.z - 0.3),
        ribosome: SITES.ribosome[0] ?? V(-0.6, B0.y + 1.2, B0.z - 1.1),
      };
    } else if (vName === 'endospore') {
      P = {
        ...base,
        exosporium: SITES.exosporium[1] ?? SP0.clone().add(V(-1.9, 2.4, 1.6)),
        coat: SITES.coat[2] ?? SP0.clone().add(V(-1.2, 2.1, 1.5)),
        cortex: SITES.cortex[1] ?? SP0.clone().add(V(0.08, 1.65, 1.45)),
        germ_wall: SITES.germ_wall[1] ?? SP0.clone().add(V(0.08, 1.42, 1.25)),
        spore_im: SITES.spore_im[1] ?? SP0.clone().add(V(0.08, 1.24, 1.10)),
        core: SITES.core[0] ?? SP0.clone(),
      };
    } else if (vName === 'core') {
      P = {
        ...base,
        core: SITES.core[0] ?? SP0.clone(),
        ca_dpa: SITES.ca_dpa[1] ?? SP0.clone().add(V(0.35, 0.35, 0.25)),
        sasp_dna: SITES.sasp_dna[1] ?? SP0.clone().add(V(-0.35, -0.25, 0.35)),
        spore_im: SITES.spore_im[2] ?? SP0.clone().add(V(0.08, 1.24, 1.10)),
      };
    } else if (vName === 'molecules') {
      P = {
        ...base,
        crosslink: M0.clone(),
      };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD = {
      pg_wall: 3.4, teichoic: 2.6, pm: 3.0, ecoli_strip: 3.2, pbp: 2.2, sortase: 2.1,
      septum: 3.2, spoiiie: 2.2, forespore: 2.8, dna: 3.2, ribosome: 2.4,
      exosporium: 4.0, coat: 3.6, cortex: 3.0, germ_wall: 2.7, spore_im: 2.5,
      core: 2.4, ca_dpa: 2.1, sasp_dna: 2.1, crosslink: 2.4,
    };
    const DIRS = {
      ecoli_strip: V(0.28, 0.24, 0.93).normalize(),
      exosporium: V(0.45, 0.28, 0.85).normalize(),
      coat: V(0.45, 0.28, 0.85).normalize(),
      cortex: V(0.44, 0.24, 0.86).normalize(),
      germ_wall: V(0.44, 0.24, 0.86).normalize(),
      spore_im: V(0.42, 0.24, 0.87).normalize(),
      core: V(0.42, 0.22, 0.88).normalize(),
      ca_dpa: V(0.42, 0.22, 0.88).normalize(),
      sasp_dna: V(0.42, 0.22, 0.88).normalize(),
      crosslink: V(-0.14, 0.08, 0.98).normalize(),
    };
    const dir = DIRS[k] ?? V(0.32, 0.22, 0.92).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.6, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN = {
    pg_wall: ['teichoic', 'pm', 'pbp', 'sortase'],
    ecoli_strip: ['pg_wall'],
    septum: ['spoiiie', 'forespore', 'dna'],
    forespore: ['septum', 'spoiiie'],
    coat: ['exosporium', 'cortex'],
    cortex: ['germ_wall', 'spore_im', 'coat'],
    core: ['ca_dpa', 'sasp_dna', 'spore_im'],
    ca_dpa: ['core', 'sasp_dna'],
    sasp_dna: ['core', 'ca_dpa'],
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
      sporeCaps.visible = cutOn;
      gramStainOverlayGroup.visible = cutOn && mode === 'gram_stain';
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
  // Main Animation Loop (Gentle Sway + Rotating SpoIIIE Motor + Live Opaque-Discard Flows)
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 3.5) / 20));
      cell.rotation.y = 0.085 * Math.sin(sway * 0.11);
      const spinDt = dt * Math.max(0.35, Math.min(2.6, flowSpeed));
      spoiiieRotors.forEach(r => { r.grp.rotation.x += spinDt * r.speed; });
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.4, camera.position.distanceTo(controls.target) / 14.0));
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
    buildBacillusEnvelope(T);
    buildEcoliComparatorStrip();
    buildSporulationAndNucleoid(T);
    buildDormantEndospore(T);
    buildAtomicCrosslinkInset();
    // Warm up live streams so all 6 species are visible on frame 1
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('vegetative', true);
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
        if (name === 'endospore' || name === 'core') setMode('endospore', true);
        else if (name === 'overview') setMode('vegetative', true);
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
