// @ts-nocheck
import * as THREE from 'three';
import { PDB_CENTRAL_DOGMA } from '../molecules/pdb_central_dogma.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  sweepGeo,
  shellGeo,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeMolBatch,
  makeSculptedMesh,
  BASE,
  BACKBONE,
  MRNA,
  HISTONE,
  col,
} from '../index.js';

runBiologyApp(20261125, ({ random, geometry, dna, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Continuous Nucleus -> 8-fold NPC -> Cytosol -> Mutation Bench Corridor
  // Cleanly framed between #legend (left) & #flows (right), #hud (top) & #tools (bottom)
  //   NUC0   = (-4.75, +1.55,  0.00)  Cutaway Nucleus (Stages A, B & C)
  //   REP0   = (-6.15, +2.75,  0.52)  Stage A: Euchromatin Fork (6QEL Helicase + 6TNY Pol delta)
  //   TX0    = (-5.55, +0.15,  0.65)  Stage B: RNA Pol II (1I50) + pre-mRNA 5' cap & poly-A
  //   SPL0   = (-2.85, +1.55,  0.62)  Stage C: Megadalton Spliceosome (5YZG) + lariat + exons
  //   NPC0   = (-0.70, +1.45,  0.35)  8-fold Nuclear Pore Complex transmembrane portal
  //   RIBO0  = (+2.20, +2.20,  0.55)  Stage D: Hero 80S Ribosome (4UG0) + A/P/E tRNAs (1EHZ)
  //   FOLD0  = (+4.95, +3.35,  0.25)  Stage E1: Hsp70 (2KHO) + TRiC/CCT folding barrel (6NR8)
  //   BENCH0 = (+5.75, -0.35,  0.35)  Stage E2: Live Mutation Bench (2HHB HbA / 2HBS HbS / 5O66 AcrB)
  //   ATOM0  = (-0.25, -4.15,  2.35)  Circular 0.1-0.5 nm Optical Atomic Codon H-Bond Inset
  // -------------------------------------------------------------------------
  const NM = 0.01;
  const NUC0 = V(-4.75, 1.55, 0.0);
  const REP0 = V(-6.15, 2.75, 0.52);
  const TX0 = V(-5.55, 0.15, 0.65);
  const SPL0 = V(-2.85, 1.55, 0.62);
  const NPC0 = V(-0.70, 1.45, 0.35);
  const RIBO0 = V(2.20, 2.20, 0.55);
  const FOLD0 = V(4.95, 3.35, 0.25);
  const BENCH0 = V(5.75, -0.35, 0.35);
  const ATOM0 = V(-0.25, -4.15, 2.35);

  // Exact 6 required VIEWS ([name, pos, target])
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.35, 1.65, 39.2), V(0.10, -0.30, 0.0)],
    ['replisome', V(-5.45, 1.85, 12.95), V(-5.65, 1.45, 0.55)],
    ['spliceosome', V(-2.55, 2.05, 10.95), V(-2.80, 1.72, 0.62)],
    ['translation', V(1.65, 2.15, 12.15), V(1.55, 1.85, 0.50)],
    ['mutation_bench', V(5.60, 1.05, 17.85), V(5.60, 0.02, 0.35)],
    ['atoms', V(-0.25, -4.15, 11.45), V(-0.25, -4.15, 2.35)],
  ];
  let view = 0;
  let curView = 'overview';

  type SpliceKey = 'isoform_a' | 'isoform_b';
  type MutationKey = 'hba_wt' | 'hbs_mut' | 'acrb_sel';
  const SPLICE_ORDER: readonly SpliceKey[] = ['isoform_a', 'isoform_b'];
  const MUT_ORDER: readonly MutationKey[] = ['hba_wt', 'hbs_mut', 'acrb_sel'];

  const SPLICE_LABEL: Record<SpliceKey, string> = {
    isoform_a: 'Splice: Isoform A (E1+E2+E3)',
    isoform_b: 'Splice: Isoform B (Exon 2 Skip)',
  };
  const MUT_LABEL: Record<MutationKey, string> = {
    hba_wt: 'Wild-Type HbA · GAG → Glu6',
    hbs_mut: 'Sickle HbS · GTG → Val6 Fiber',
    acrb_sel: 'Adaptive AcrB · GAC → Asp288 Efflux',
  };

  let splice: SpliceKey = 'isoform_a';
  let mutation: MutationKey = 'hba_wt';

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#172644',
    bgMid: '#091022',
    bgOuter: '#02040a',
    keyColor: '#fff4e6',
    keyIntensity: 3.15,
    rimColor: '#7ad4ff',
    rimIntensity: 1.9,
    lampColor: '#a896ff',
    lampIntensity: 18,
    lampPos: [-4.6, 2.0, 5.2],
    bloomStrength: 0.30,
    bloomRadius: 0.54,
    bloomThreshold: 0.84,
    exposure: 0.98,
    bokehCount: 240,
    bokehColor: '#7ecbff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key } = studio;

  // Dedicated microscopy stage lamps for Nuclear Pore/Translation, Folding/Mutation Bench & Atomic Lens
  const transLamp = new THREE.PointLight('#7cecff', 14.5, 22, 2);
  transLamp.position.set(RIBO0.x - 0.3, RIBO0.y + 1.8, 4.4);
  const benchLamp = new THREE.PointLight('#ffc78e', 16.0, 24, 2);
  benchLamp.position.set(BENCH0.x + 0.5, BENCH0.y + 2.4, 4.8);
  const atomLamp = new THREE.PointLight('#9cf4ff', 9.0, 18, 2);
  atomLamp.position.set(ATOM0.x - 2.6, ATOM0.y + 2.8, ATOM0.z + 5.2);
  scene.add(transLamp, benchLamp, atomLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  // Organized sub-groups for cutaway shells, interactive splicing & live point-mutation bench
  const cutOpenGroup = new THREE.Group();
  const cutClosedGroup = new THREE.Group();
  const spliceIsoAGroup = new THREE.Group();
  const spliceIsoBGroup = new THREE.Group();
  const polyIsoAGroup = new THREE.Group();
  const polyIsoBGroup = new THREE.Group();
  const hbaBenchGroup = new THREE.Group();
  const hbsFiberGroup = new THREE.Group();
  const acrbBenchGroup = new THREE.Group();
  const atomWtGroup = new THREE.Group();
  const atomHbsGroup = new THREE.Group();
  const atomAcrbGroup = new THREE.Group();
  cell.add(
    cutOpenGroup,
    cutClosedGroup,
    spliceIsoAGroup,
    spliceIsoBGroup,
    polyIsoAGroup,
    polyIsoBGroup,
    hbaBenchGroup,
    hbsFiberGroup,
    acrbBenchGroup
  );

  // Cutaway plane for nuclear envelope: slices front hemisphere cleanly at z = NUC0.z + 0.28
  const NUC_CUT_Z = NUC0.z + 0.28;
  const NUC_CUT_LOCAL = [new THREE.Plane(V(0, 0, -1), NUC_CUT_Z)];
  const NUC_CUT = NUC_CUT_LOCAL.map(p => p.clone());
  const NUC_CLIP = { clippingPlanes: NUC_CUT, clipIntersection: false, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    NUC_CUT.forEach((p, i) => {
      p.copy(NUC_CUT_LOCAL[i]);
      if (!cutOn) p.constant = 1e4;
      p.applyMatrix4(cell.matrixWorld);
    });
    cutOpenGroup.visible = cutOn;
    cutClosedGroup.visible = !cutOn;
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.8);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // -------------------------------------------------------------------------
  // Exact 20 Required REG Parts & Pedagogical Tooltips
  // -------------------------------------------------------------------------
  const PARTS: Array<[string, string, string]> = [
    ['chromatin', 'Euchromatin & nuclear envelope', '#8c9eff'],
    ['helicase', 'Replicative helicase (PDB 6QEL)', '#3de8ff'],
    ['pol_delta', 'DNA Pol δ + PCNA clamp (PDB 6TNY)', '#40e89c'],
    ['rna_pol2', 'RNA Polymerase II (PDB 1I50)', '#688cff'],
    ['pre_mrna', 'Pre-mRNA · 5′ m⁷G cap & poly-A', '#ffd166'],
    ['spliceosome', 'Spliceosome C complex (PDB 5YZG)', '#c978ff'],
    ['intron_lariat', 'Excised 2′–5′ intron lariat loop', '#9d82d6'],
    ['exon_junction', 'Ligated exons (Isoform A / B)', '#40f0d8'],
    ['npc', '8-fold Nuclear Pore Complex (NPC)', '#ffad5c'],
    ['mature_mrna', 'Exported mature spliced mRNA', '#ff9e44'],
    ['ribosome_80s', 'Hero 80S Ribosome (PDB 4UG0)', '#f082dc'],
    ['trna_ape', 'A / P / E site tRNAs (PDB 1EHZ)', '#5cf5d8'],
    ['polypeptide', 'Nascent extruding polypeptide', '#ff8866'],
    ['polysome', 'Cytosolic 80S polysome arc', '#c48cff'],
    ['hsp70', 'Hsp70 chaperone clamp (PDB 2KHO)', '#7eff8a'],
    ['tric_groel', 'TRiC / CCT barrel (PDB 6NR8)', '#5eb4ff'],
    ['hb_wildtype', 'Wild-type HbA · Glu6 (PDB 2HHB)', '#ff6c6c'],
    ['hb_sickle_fiber', 'Sickle HbS · Val6 fiber (PDB 2HBS)', '#ff9b42'],
    ['acrb_pocket', 'AcrB efflux pocket (PDB 5O66)', '#4effb8'],
    ['codon_atoms', 'Atomic codon H-bonds (0.1–0.5 nm)', '#78e6ff'],
  ];

  const INFO: Record<string, [string, string]> = {
    chromatin: ['Open euchromatin dsDNA wrapped on histone octamers inside a cutaway double nuclear envelope', 'Unspools active gene loci (like human HBB β-globin) so replisomes and RNA Pol II access template strands'],
    helicase: ['Hexameric replicative DNA helicase ring (PDB 6QEL) hydrolyzing ATP at the fork vertex', 'Unzips complementary Watson–Crick hydrogen bonds to expose single-stranded leading and lagging templates'],
    pol_delta: ['Processive DNA Polymerase δ tethered to its PCNA sliding clamp (PDB 6TNY)', 'Synthesizes complementary 5′→3′ DNA and pauses to excise mismatched bases via its 3′→5′ exonuclease site'],
    rna_pol2: ['Twelve-subunit eukaryotic RNA Polymerase II crab-claw complex (PDB 1I50)', 'Opens a ~14 bp transcription bubble and polymerizes complementary 5′→3′ pre-mRNA from the template strand'],
    pre_mrna: ['Nascent primary HBB transcript carrying exons, introns, inverted 5′ m⁷G cap, and 3′ poly-A tail', 'Protects transcript ends from exonucleases and recruits nuclear splicing and export licensing complexes'],
    spliceosome: ['Megadalton U1/U2/U4/U5/U6 snRNP catalytic C complex ribozyme (PDB 5YZG)', 'Recognizes GU/branch-A/AG splice motifs and catalyzes two Mg²⁺ transesterification cuts to stitch exons'],
    intron_lariat: ['Covalently closed 2′–5′ phosphodiester intron lariat loop cleaved from pre-mRNA', 'Removes non-coding intronic sequence (plus cassette Exon 2 in Isoform B) for rapid nuclear recycling'],
    exon_junction: ['Ligated coding exons (Exon 1 coral, Exon 2 turquoise, Exon 3 rose) marked by EJC beads', 'Toggle Isoform A (E1+E2+E3) vs Isoform B (E1+E3) to generate two distinct proteins from one gene'],
    npc: ['Monumental 120 nm 8-fold rotational Nuclear Pore Complex lined with FG-repeat hydrogel', 'Selectively gates export of capped, spliced, polyadenylated mRNPs from nucleoplasm into cytosol'],
    mature_mrna: ['Spliced, capped, polyadenylated mRNA threading through the NPC into the cytosolic translation lane', 'Carries sequential 3-letter codons (such as HBB codon 6: GAG or mutated GUG) to cytosolic ribosomes'],
    ribosome_80s: ['Eukaryotic 80S ribosome (60S peptidyl-transferase crown + 40S decoding head, PDB 4UG0)', 'Decodes mRNA codons in 3-base steps and forges peptide bonds to extrude nascent protein chains'],
    trna_ape: ['76-nt L-shaped aminoacyl-tRNA adaptors (PDB 1EHZ) ratcheting across A → P → E sites', 'Matches 3-base anticodons to mRNA codons to insert the exact amino acid encoded by each triplet'],
    polypeptide: ['Growing nascent β-globin amino acid chain emerging from the 60S ribosomal exit tunnel', 'Carries exon-encoded domains (shortened in Isoform B) straight into Hsp70 and TRiC chaperonin folding'],
    polysome: ['Curved cytosolic polysome arc of multiple 80S ribosomes reading one mature mRNA simultaneously', 'Multiplies protein output per transcript while shielding mRNA from premature cytosolic decay'],
    hsp70: ['ATP-regulated Hsp70 molecular chaperone clamp (PDB 2KHO) hovering at the ribosome exit', 'Shields exposed hydrophobic amino acid patches on nascent chains to prevent toxic misfolding'],
    tric_groel: ['Double-ring 8-fold eukaryotic TRiC/CCT chaperonin barrel (PDB 6NR8) with ATP-gated iris', 'Encloses unfolded polypeptides inside a hydrophilic folding cage until they snap into native 3D shape'],
    hb_wildtype: ['Soluble α₂β₂ adult hemoglobin A tetramers (PDB 2HHB) carrying hydrophilic Glu6 (GAG)', 'Negatively charged glutamate keeps deoxygenated HbA well separated inside smooth red blood cells'],
    hb_sickle_fiber: ['Polymerized deoxy-HbS fibers (PDB 2HBS) triggered by a single A→T mutation (GTG → Val6)', 'Exposed hydrophobic Val6 docks into adjacent β-chain pockets, driving rigid fibers & malaria balancing selection'],
    acrb_pocket: ['Trimeric E. coli AcrB multidrug efflux transporter (PDB 5O66) with Gly288→Asp288 distal pocket', 'Adaptive single-base substitution (GGC→GAC) remodels the cavity to pump out fluoroquinolones under selection'],
    codon_atoms: ['Magnified 0.1–0.5 nm CPK atomic base-pair duplex (C, H, N, O, P, Mg²⁺) at the live mutation site', 'Shows how one nucleotide flip alters donor/acceptor H-bonds, codon identity, protein fold, and survival'],
  };

  // -------------------------------------------------------------------------
  // Material Registry, Cinema PBR Protein Helper & Wet-Gel Backlit Membranes
  // -------------------------------------------------------------------------
  const REG: Record<string, { mats: THREE.Material[]; imp: THREE.ShaderMaterial[] }> = {};
  const reg = <T extends THREE.Material>(k: string, m: T): T => {
    const r = (REG[k] ??= { mats: [], imp: [] });
    if ((m as THREE.ShaderMaterial).isShaderMaterial) r.imp.push(m as unknown as THREE.ShaderMaterial);
    else r.mats.push(m);
    return m;
  };
  const phys = (o: THREE.MeshPhysicalMaterialParameters, clipObj: Record<string, unknown> = {}) =>
    new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.84, ...clipObj, ...o });

  /** Cinema PBR cryo-EM protein material with subunit bump, clearcoat, sheen & subtle backlit SSS. */
  function makeCinemaProteinMat(
    k: string,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sssHex = '#9ecbff',
    sssInt = 0.18
  ): THREE.MeshPhysicalMaterial {
    const m = phys({
      vertexColors: true,
      roughness: 0.34,
      metalness: 0.05,
      clearcoat: 0.38,
      clearcoatRoughness: 0.26,
      sheen: 0.36,
      sheenColor: '#f6f8ff',
      normalMap: protBump,
      normalScale: new THREE.Vector2(0.32, 0.32),
      side: THREE.DoubleSide,
      ...extra,
    });
    applyBacklitSSS(m, sssHex, sssInt, 2.8);
    return reg(k, m);
  }

  const sculpt = (
    k: string,
    parent: THREE.Object3D = cell,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sssHex = '#9ecbff'
  ) => makeSculptedMesh(makeCinemaProteinMat(k, extra, sssHex, 0.15), parent);

  const molBatch = (
    k: string,
    geo: THREE.BufferGeometry,
    parent: THREE.Object3D = cell,
    extra: THREE.MeshPhysicalMaterialParameters = {},
    sssHex = '#9ecbff'
  ) => makeMolBatch(geo, makeCinemaProteinMat(k, extra, sssHex, 0.20), parent);

  const shells: THREE.MeshPhysicalMaterial[] = [];
  const LOOKS = ['gel', 'see-through', 'solid'] as const;
  let organelleLook: (typeof LOOKS)[number] = 'gel';
  let placed = 0;

  function cinemaShellMat(
    k: string,
    solidHex: string,
    gelHex: string,
    clipObj: Record<string, unknown>,
    opts: Record<string, unknown> = {}
  ): THREE.MeshPhysicalMaterial {
    const m = makeCinemaMembraneMat(clipObj, (opts.normalMap as THREE.Texture) ?? bump(12, 10), {
      color: gelHex,
      attenuationColor: (opts.attenCol as string) ?? solidHex,
      attenuationDistance: (opts.attenDist as number) ?? 4.8,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.30,
      iridescence: (opts.iridescence as number) ?? 0.56,
      thickness: (opts.thickness as number) ?? 0.52,
      roughness: (opts.roughness as number) ?? 0.12,
      sheenColor: (opts.sheenColor as string) ?? '#e2f4ff',
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
      m.opacity = see ? 0.34 : 1;
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

  const qFromY = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), twist)) : q;
  };
  const qFromX = (n: THREE.Vector3, twist = 0) => {
    const u = n.clone().normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(1, 0, 0), u);
    return twist ? q.multiply(new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), twist)) : q;
  };

  const SITES: Record<string, THREE.Vector3[]> = Object.fromEntries(PARTS.map(p => [p[0], []]));

  // Live animated handles updated every frame
  const anim = {
    proofPulseMesh: null as THREE.Mesh | null,
    proofPulseMat: null as THREE.MeshStandardMaterial | null,
    helicaseHero: null as THREE.Object3D | null,
    riboHeroGroup: null as THREE.Group | null,
    trnaA: null as THREE.Object3D | null,
    trnaP: null as THREE.Object3D | null,
    trnaE: null as THREE.Object3D | null,
    tricLidGroup: null as THREE.Group | null,
    val6GlowMats: [] as THREE.MeshStandardMaterial[],
    acrbPocketMat: null as THREE.MeshStandardMaterial | null,
    acrbDrugs: [] as Array<{ mesh: THREE.Mesh; t0: number; lane: number }>,
    benchPlaqueMat: null as THREE.MeshStandardMaterial | null,
    benchPlaqueTex: null as THREE.CanvasTexture | null,
    benchPlaqueCv: null as HTMLCanvasElement | null,
    atomTopTex: null as THREE.CanvasTexture | null,
    atomTopCv: null as HTMLCanvasElement | null,
    lariatIsoAGroup: null as THREE.Group | null,
    lariatIsoBGroup: null as THREE.Group | null,
  };

  // -------------------------------------------------------------------------
  // Build ALL 11 Real RCSB PDB Cryo-EM / Crystal Surface Geometries
  //   helicase (6QEL), pol_delta (6TNY), rna_pol2 (1I50), spliceosome (5YZG),
  //   ribo_80s (4UG0), trna (1EHZ), hsp70 (2KHO), tric (6NR8),
  //   hba (2HHB), hbs (2HBS), acrb (5O66)
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    const pal = (hexes: string[]) => hexes.map(col);

    // 1. Replicative Helicase hexamer (PDB 6QEL, 6 chains)
    const helCols = pal(['#28e5ff', '#5cf2ff', '#1ac4eb', '#75f7ff', '#2cd4f5', '#4ae3ff']);
    const geoHelicase = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'helicase'), {
      nm: NM,
      scale: 11.2,
      maxDim: 26,
      sigmaAng: 4.8,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? helCols[grp % 6].clone().offsetHSL(0.01, 0, 0.08) : helCols[grp % 6]),
    });

    // 2. DNA Pol delta + PCNA sliding clamp (PDB 6TNY, 4 chains)
    const polCols = pal(['#2ce898', '#ffd24d', '#58f7ba', '#ffad44']);
    const geoPolDelta = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'pol_delta'), {
      nm: NM,
      scale: 10.6,
      maxDim: 26,
      sigmaAng: 4.8,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? polCols[grp & 3].clone().offsetHSL(0.01, 0, 0.08) : polCols[grp & 3]),
    });

    // 3. Eukaryotic RNA Polymerase II (PDB 1I50, 6 chains)
    const rnapCols = pal(['#5b84ff', '#87a8ff', '#4b6cf0', '#70c4ff', '#9c86ff', '#6598ff']);
    const geoRnaPol2 = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'rna_pol2'), {
      nm: NM,
      scale: 11.4,
      maxDim: 28,
      sigmaAng: 5.0,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? rnapCols[grp % 6].clone().offsetHSL(0.01, 0, 0.07) : rnapCols[grp % 6]),
    });

    // 4. Human Spliceosome Catalytic C Complex (PDB 5YZG, 8 chains)
    const splCols = pal(['#c470ff', '#e49cff', '#8e62f5', '#ff7ec6', '#67d8ff', '#ffd068', '#a874ff', '#d68cff']);
    const geoSpliceosome = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'spliceosome'), {
      nm: NM,
      scale: 8.4,
      maxDim: 30,
      sigmaAng: 7.4,
      iso: 0.35,
      aoStrength: 0.60,
      colorFn: (grp, part) => (part >= 2 ? col('#ffe070') : splCols[grp & 7]),
    });

    // 5. Human 80S Ribosome (PDB 4UG0, 8 chains: 60S rose-magenta + 40S sky-cyan)
    const riboCols = pal(['#e66fd4', '#ff96ec', '#c95ee0', '#f588c4', '#5cd6ff', '#8ae8ff', '#62b8ff', '#a8d8ff']);
    const geoRibo80s = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'ribo_80s'), {
      nm: NM,
      scale: 9.0,
      maxDim: 30,
      sigmaAng: 7.2,
      iso: 0.35,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part >= 2 ? riboCols[grp & 7].clone().offsetHSL(0.02, 0.05, 0.08) : riboCols[grp & 7]),
    });

    // 6. L-shaped Aminoacyl-tRNA (PDB 1EHZ, 1 RNA chain)
    const geoTrna = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'trna'), {
      nm: NM,
      scale: 13.8,
      maxDim: 22,
      sigmaAng: 3.9,
      iso: 0.37,
      aoStrength: 0.52,
      colorFn: (_, part) => (part === 3 ? col('#b4fff2') : col('#40f2d0')),
    });

    // 7. Hsp70 Molecular Chaperone (PDB 2KHO)
    const geoHsp70 = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'hsp70'), {
      nm: NM,
      scale: 9.2,
      maxDim: 24,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.54,
      colorFn: (_, part) => (part === 1 ? col('#b4ff9e') : col('#5ef278')),
    });

    // 8. Eukaryotic TRiC / CCT Chaperonin Barrel (PDB 6NR8, 8 chains)
    const tricCols = pal(['#48a8ff', '#74ccff', '#5c8cff', '#90d8ff', '#ffd166', '#66b8ff', '#5298f5', '#82e2ff']);
    const geoTric = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'tric'), {
      nm: NM,
      scale: 12.2,
      maxDim: 28,
      sigmaAng: 4.9,
      iso: 0.36,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 1 ? tricCols[grp & 7].clone().offsetHSL(0.01, 0, 0.07) : tricCols[grp & 7]),
    });

    // 9. Wild-Type Human Hemoglobin HbA (PDB 2HHB, 4 chains: alpha ruby, beta warm coral-gold)
    const hbaCols = pal(['#ff5a6c', '#ff926b', '#f04860', '#ffa67c']);
    const geoHba = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'hba'), {
      nm: NM,
      scale: 12.6,
      maxDim: 24,
      sigmaAng: 3.6,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 3 ? col('#ffe066') : hbaCols[grp & 3]),
    });

    // 10. Sickle-Cell Hemoglobin HbS Fiber Assembly Unit (PDB 2HBS, 8 chains)
    const hbsCols = pal(['#ff8c38', '#ff5442', '#ffad44', '#e84848', '#ff9a3c', '#ff6446', '#ffba58', '#f05548']);
    const geoHbs = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'hbs'), {
      nm: NM,
      scale: 10.4,
      maxDim: 26,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part === 3 ? col('#fff06e') : hbsCols[grp & 7]),
    });

    // 11. Bacterial AcrB Multidrug Efflux Pump Trimer (PDB 5O66, 3 chains: Loose, Tight, Open)
    const acrbCols = pal(['#32f2ad', '#48d6ff', '#a2ff6b']);
    const geoAcrb = buildPdbSurfaceGeo(pdb.getModel(PDB_CENTRAL_DOGMA, 'acrb'), {
      nm: NM,
      scale: 12.6,
      maxDim: 26,
      sigmaAng: 4.2,
      iso: 0.37,
      aoStrength: 0.56,
      colorFn: (grp, part) => (part === 1 ? acrbCols[grp % 3].clone().offsetHSL(0.01, 0, 0.08) : acrbCols[grp % 3]),
    });

    return {
      geoHelicase,
      geoPolDelta,
      geoRnaPol2,
      geoSpliceosome,
      geoRibo80s,
      geoTrna,
      geoHsp70,
      geoTric,
      geoHba,
      geoHbs,
      geoAcrb,
    };
  }

  // -------------------------------------------------------------------------
  // 1. Cutaway Double Nuclear Envelope + Euchromatin + Stage A (Replisome) & Stage B (RNA Pol II)
  // -------------------------------------------------------------------------
  function buildNucleusAndStagesAB(T) {
    const NUC_RX = 3.95, NUC_RY = 3.90, NUC_RZ = 3.35;
    const nucR = (d: THREE.Vector3, shrink = 1.0) => {
      const n = 1 + 0.025 * Math.sin(d.x * 5 + d.y * 4) * Math.cos(d.z * 5);
      const ax = d.x / NUC_RX, ay = d.y / NUC_RY, az = d.z / NUC_RZ;
      return (shrink * n) / Math.sqrt(ax * ax + ay * ay + az * az);
    };

    // Shell 1: Outer Nuclear Membrane (wet-gel backlit Cinema PBR cutaway!)
    const outerNucMat = cinemaShellMat('chromatin', '#3b529c', '#9ec2ff', NUC_CLIP, {
      attenCol: '#2b3e82',
      attenDist: 4.6,
      sssColor: '#76aaff',
      sssIntensity: 0.34,
      iridescence: 0.62,
      thickness: 0.56,
      roughness: 0.13,
      sheenColor: '#d8e8ff',
      normalMap: bump(14, 10),
      normalScale: 0.24,
    });
    const outerNucGeo = shellGeo(NUC0, d => nucR(d, 1.0), 96);
    const outerNucMesh = new THREE.Mesh(outerNucGeo, outerNucMat);
    outerNucMesh.receiveShadow = true;
    cell.add(outerNucMesh);

    // Shell 2: Inner Nuclear Membrane + Lamina lining (wet-gel backlit Cinema PBR cutaway!)
    const innerNucMat = cinemaShellMat('chromatin', '#544296', '#b89eff', NUC_CLIP, {
      attenCol: '#3c2e78',
      attenDist: 4.0,
      sssColor: '#a682ff',
      sssIntensity: 0.30,
      iridescence: 0.52,
      thickness: 0.44,
      roughness: 0.16,
      sheenColor: '#ecd8ff',
      normalMap: bump(16, 12),
      normalScale: 0.22,
    });
    const innerNucMesh = new THREE.Mesh(shellGeo(NUC0, d => nucR(d, 0.935), 88), innerNucMat);
    cell.add(innerNucMesh);

    // Crisp bilayer cutaway cross-section ring at z = NUC_CUT_Z (visible when cutOn === true)
    const rimPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 72; i++) {
      const a = (i / 72) * Math.PI * 2;
      const dx = Math.cos(a) * NUC_RX * 0.965;
      const dy = Math.sin(a) * NUC_RY * 0.965;
      // Leave clean aperture arc around the right-hand NPC gateway!
      if (dx > 3.1 && Math.abs(dy + 0.1) < 1.15) continue;
      rimPts.push(V(NUC0.x + dx, NUC0.y + dy, NUC_CUT_Z));
    }
    const S_RIM = sculpt('chromatin', cutOpenGroup, { roughness: 0.26, clearcoat: 0.46, emissive: '#223878', emissiveIntensity: 0.32 }, '#8eb6ff');
    S_RIM.tube(rimPts.slice(0, 44), 0.11, 0.11, col('#7ca6ff'), col('#b496ff'), 10, true);
    if (rimPts.length > 46) S_RIM.tube(rimPts.slice(45), 0.11, 0.11, col('#b496ff'), col('#7ca6ff'), 10, true);
    S_RIM.done();

    // Euchromatin fibers + Histone Nucleosome Octamers spooling through the nuclear interior
    const B_DNA = balls('chromatin', cell);
    const S_CHR = sculpt('chromatin', cell, { roughness: 0.30, clearcoat: 0.42 }, '#a0b4ff');

    // Background euchromatin arcs wrapping histones and feeding into REP0 & TX0
    const chromatinLoops: THREE.Vector3[][] = [
      [
        V(-7.65, 3.35, -0.55),
        V(-7.35, 3.85, 0.05),
        V(-6.85, 3.55, 0.42),
        V(-6.45, 3.10, 0.50),
        REP0.clone().add(V(-0.35, 0.05, 0.0)),
      ],
      [
        V(-7.75, 1.55, -0.45),
        V(-7.25, 0.85, 0.12),
        V(-6.60, 0.25, 0.48),
        TX0.clone().add(V(-0.45, -0.10, 0.0)),
        TX0.clone().add(V(0.55, 0.12, 0.0)),
        V(-4.15, -0.45, 0.28),
        V(-3.45, -1.15, -0.20),
        V(-5.15, -1.65, -0.45),
      ],
      [
        V(-5.45, 4.35, -0.75),
        V(-4.10, 4.20, -0.45),
        V(-2.95, 3.55, -0.35),
        V(-2.45, 2.75, -0.55),
        V(-3.30, 0.20, -0.75),
      ],
    ];

    chromatinLoops.forEach((pts, li) => {
      const cv = new THREE.CatmullRomCurve3(pts);
      const ax = cv.getSpacedPoints(li === 1 ? 82 : 64);
      dna.emitDNA(B_DNA, ax, { nm: 0.115, radius: 0.105, deterministicBases: true });
      // Seat rose-gold / cyan histone octamer nucleosome beads along chromatin coils
      for (let k = 1; k <= 5; k++) {
        const p = cv.getPointAt(k / 6);
        const hCol = col(HISTONE[k % HISTONE.length][1]);
        S_CHR.lobe(p, 0.17, 0.13, 0.17, hCol, qFromY(V(rr(-0.5, 0.5), 1, rr(-0.5, 0.5))));
        if (SITES.chromatin.length < 18) SITES.chromatin.push(p.clone());
        placed++;
      }
    });

    // Stage A — Forked Leading & Lagging Template Strands unzipping right out of Helicase (6QEL)!
    const leadCurve = new THREE.CatmullRomCurve3([
      REP0.clone().add(V(0.05, 0.02, 0.02)),
      REP0.clone().add(V(0.68, 0.45, 0.14)),
      REP0.clone().add(V(1.42, 0.72, 0.16)),
      REP0.clone().add(V(2.15, 0.88, -0.05)),
    ]);
    const lagCurve = new THREE.CatmullRomCurve3([
      REP0.clone().add(V(0.05, -0.04, 0.02)),
      REP0.clone().add(V(0.62, -0.48, 0.15)),
      REP0.clone().add(V(1.38, -0.76, 0.12)),
      REP0.clone().add(V(2.05, -0.62, -0.10)),
    ]);
    dna.emitDNA(B_DNA, leadCurve.getSpacedPoints(38), { nm: 0.115, radius: 0.095, deterministicBases: true });
    dna.emitDNA(B_DNA, lagCurve.getSpacedPoints(38), { nm: 0.115, radius: 0.095, deterministicBases: true });
    B_DNA.done();
    S_CHR.done();

    // 1. REAL PDB 6QEL — Hexameric Replicative Helicase unzipping the fork!
    const helHeroMat = makeCinemaProteinMat('helicase', { emissive: '#0c4e68', emissiveIntensity: 0.24, roughness: 0.28, clearcoat: 0.52 }, '#5cf4ff', 0.26);
    const helHeroMesh = new THREE.Mesh(T.geoHelicase, helHeroMat);
    helHeroMesh.position.copy(REP0);
    helHeroMesh.quaternion.copy(qFromY(V(0.95, 0.15, 0.25), 0.35));
    helHeroMesh.scale.setScalar(1.06);
    helHeroMesh.castShadow = true;
    cell.add(helHeroMesh);
    anim.helicaseHero = helHeroMesh;
    SITES.helicase.push(REP0.clone());
    placed++;

    // Additional active replication-fork helicases deeper in the euchromatin field
    const I_HEL = molBatch('helicase', T.geoHelicase, cell, { emissive: '#0a445c', emissiveIntensity: 0.18 }, '#5cf4ff');
    const extraHelPos = [
      V(-6.95, 3.62, -0.25),
      V(-4.20, 3.95, -0.58),
      V(-6.75, 1.35, -0.72),
    ];
    extraHelPos.forEach((p, idx) => {
      I_HEL.add(p, qFromY(V(0.8, 0.4 - idx * 0.3, 0.35), idx * 1.1), 0.72);
      SITES.helicase.push(p.clone());
      placed++;
    });
    I_HEL.done();

    // 2. REAL PDB 6TNY — Processive DNA Pol delta + PCNA Sliding Clamp on leading & lagging strands!
    const I_POL = molBatch('pol_delta', T.geoPolDelta, cell, { emissive: '#0e4a34', emissiveIntensity: 0.22, roughness: 0.30, clearcoat: 0.48 }, '#5effbc');
    const polLeadPos = leadCurve.getPointAt(0.56).add(V(0.0, 0.12, 0.15));
    const polLagPos = lagCurve.getPointAt(0.52).add(V(0.0, -0.10, 0.18));
    I_POL.add(polLeadPos, qFromY(V(0.45, 0.82, 0.35), 0.4), 0.98);
    I_POL.add(polLagPos, qFromY(V(-0.35, -0.84, 0.40), 1.9), 0.88);
    [
      V(-6.55, 3.80, -0.45),
      V(-3.65, 3.65, -0.62),
      V(-6.20, 1.05, -0.75),
      V(-4.95, 4.15, -0.35),
    ].forEach((p, i) => {
      I_POL.add(p, qFromY(V(0.4, 0.9, 0.25), i * 1.3), 0.66);
      SITES.pol_delta.push(p.clone());
      placed++;
    });
    I_POL.done();
    SITES.pol_delta.unshift(polLeadPos.clone(), polLagPos.clone());
    placed += 2;

    // Animated 3'->5' Exonuclease Mismatch Proofreading Pulse right in Pol delta's catalytic palm!
    const proofMat = reg(
      'pol_delta',
      new THREE.MeshStandardMaterial({
        color: '#ff6644',
        emissive: '#ffaa33',
        emissiveIntensity: 1.25,
        roughness: 0.18,
      })
    );
    const proofMesh = new THREE.Mesh(new THREE.SphereGeometry(0.145, 18, 14), proofMat);
    proofMesh.position.copy(polLeadPos).add(V(-0.24, -0.16, 0.32));
    cell.add(proofMesh);
    anim.proofPulseMesh = proofMesh;
    anim.proofPulseMat = proofMat;

    // 3. REAL PDB 1I50 — Eukaryotic RNA Polymerase II opening the ~14 bp Transcription Bubble!
    const I_RNAP = molBatch('rna_pol2', T.geoRnaPol2, cell, { emissive: '#182b78', emissiveIntensity: 0.24, roughness: 0.30, clearcoat: 0.48 }, '#8cb4ff');
    I_RNAP.add(TX0, qFromY(V(0.25, 0.94, 0.22), -0.35), 1.08);
    SITES.rna_pol2.push(TX0.clone());
    placed++;
    [
      V(-4.15, -0.58, 0.25),
      V(-5.95, -1.25, -0.35),
      V(-3.50, -1.25, -0.18),
      V(-6.75, 0.65, -0.42),
      V(-4.45, 2.25, -0.82),
    ].forEach((p, idx) => {
      I_RNAP.add(p, qFromY(V(0.3, 0.9, 0.3), idx * 0.9), 0.70);
      SITES.rna_pol2.push(p.clone());
      placed++;
    });
    I_RNAP.done();

    // Glowing ~14 bp Transcription Bubble lens opening around RNA Pol II
    const S_BUB = sculpt('rna_pol2', cell, { emissive: '#2858c8', emissiveIntensity: 0.35, roughness: 0.24 }, '#88c8ff');
    const bubTop: THREE.Vector3[] = [];
    const bubBot: THREE.Vector3[] = [];
    for (let i = 0; i <= 14; i++) {
      const u = i / 14;
      const arch = Math.sin(u * Math.PI) * 0.38;
      bubTop.push(TX0.clone().add(V((u - 0.5) * 1.45, arch + 0.08, 0.42)));
      bubBot.push(TX0.clone().add(V((u - 0.5) * 1.45, -arch - 0.08, 0.42)));
    }
    S_BUB.tube(bubTop, 0.048, 0.048, col('#78d8ff'), col('#a8b8ff'), 8, true);
    S_BUB.tube(bubBot, 0.048, 0.048, col('#68a0ff'), col('#9ce8ff'), 8, true);
    S_BUB.done();

    // Stage B — Pre-mRNA emerging from RNA Pol II with inverted 5' m7G cap & 3' poly-A tail!
    const preMrnaCurve = new THREE.CatmullRomCurve3([
      TX0.clone().add(V(0.18, 0.22, 0.46)),
      V(-4.65, 0.72, 0.96),
      V(-3.95, 1.08, 1.02),
      SPL0.clone().add(V(-0.62, -0.18, 0.48)),
    ]);
    const S_PRE = sculpt('pre_mrna', cell, { roughness: 0.26, clearcoat: 0.48, emissive: '#54380a', emissiveIntensity: 0.22 }, '#ffd978');
    const prePts = preMrnaCurve.getSpacedPoints(38);
    // Color-coded nascent pre-mRNA segments: Exon 1 (coral), Intron 1 (violet), Exon 2 (turquoise), Intron 2 (violet)
    S_PRE.tube(prePts.slice(0, 12), 0.068, 0.068, col('#ff944d'), col('#ff944d'), 10, true);
    S_PRE.tube(prePts.slice(11, 21), 0.056, 0.056, col('#9b7ed8'), col('#9b7ed8'), 9, true);
    S_PRE.tube(prePts.slice(20, 30), 0.068, 0.068, col('#3ef2d6'), col('#3ef2d6'), 10, true);
    S_PRE.tube(prePts.slice(29), 0.056, 0.056, col('#9b7ed8'), col('#ff6ca8'), 9, true);
    // Radiant 5' m7G cap crown docked right near the emerging 5' tip!
    const capPos = preMrnaCurve.getPointAt(0.16).add(V(-0.14, 0.24, 0.20));
    S_PRE.add(capPos, 0.34, col('#ffe058'));
    S_PRE.stick(preMrnaCurve.getPointAt(0.16), capPos, 0.045, col('#ffbb44'), col('#ffe86e'));
    // Sparkling 3' poly-A tail chain trailing cleanly below RNA Pol II's exit
    const polyAPts: THREE.Vector3[] = [];
    for (let k = 0; k < 10; k++) {
      const p = TX0.clone().add(V(0.32 + k * 0.14, -0.42 - 0.16 * Math.sin(k * 0.7), 0.62 + 0.08 * Math.cos(k)));
      polyAPts.push(p);
      S_PRE.add(p, 0.135, col('#ffd55c'));
    }
    S_PRE.tube(polyAPts, 0.036, 0.036, col('#ffba42'), col('#ffe675'), 8, true);
    S_PRE.done();
    SITES.pre_mrna.push(capPos.clone(), preMrnaCurve.getPointAt(0.55), polyAPts[5].clone());
    placed += 12;
  }

  // -------------------------------------------------------------------------
  // 2. Stage C — Megadalton Spliceosome (5YZG), 2'-5' Intron Lariat & Live Alternative Splicing
  // -------------------------------------------------------------------------
  function buildSpliceosomeStage(T) {
    // REAL PDB 5YZG — Human Catalytic C Complex Spliceosome (hero + 3 nuclear speckle companions)
    const I_SPL = molBatch('spliceosome', T.geoSpliceosome, cell, { emissive: '#381268', emissiveIntensity: 0.24, roughness: 0.28, clearcoat: 0.50 }, '#df98ff');
    I_SPL.add(SPL0, qFromY(V(0.18, 0.96, 0.22), 0.55), 1.04);
    SITES.spliceosome.push(SPL0.clone());
    placed++;
    [
      V(-3.45, 3.05, -0.65),
      V(-2.75, -0.25, -0.60),
      V(-4.15, 2.55, -0.95),
    ].forEach((p, idx) => {
      I_SPL.add(p, qFromY(V(0.2, 0.9, 0.3), idx * 1.4), 0.56);
      SITES.spliceosome.push(p.clone());
      placed++;
    });
    I_SPL.done();

    // Two catalytic Mg2+ spheres gleaming inside the spliceosome active cleft!
    const S_SPL_MG = sculpt('spliceosome', cell, { emissive: '#38ff98', emissiveIntensity: 0.55, roughness: 0.18 }, '#70ffba');
    S_SPL_MG.add(SPL0.clone().add(V(0.05, 0.08, 0.78)), 0.16, col('#62ffa8'));
    S_SPL_MG.add(SPL0.clone().add(V(0.22, -0.04, 0.80)), 0.16, col('#62ffa8'));
    S_SPL_MG.done();

    // ---- ISOFORM A (Default): Intron-only 2'-5' lariat excised; Exons 1 + 2 + 3 retained! ----
    const lariatAGrp = new THREE.Group();
    spliceIsoAGroup.add(lariatAGrp);
    anim.lariatIsoAGroup = lariatAGrp;

    const S_LAR_A = sculpt('intron_lariat', lariatAGrp, { roughness: 0.26, clearcoat: 0.44, emissive: '#3a2268', emissiveIntensity: 0.26 }, '#c8a6ff');
    const larACtr = SPL0.clone().add(V(-0.08, 1.32, 0.62));
    const larAPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      larAPts.push(V(larACtr.x + Math.cos(a) * 0.56, larACtr.y + Math.sin(a) * 0.48, larACtr.z + Math.sin(a * 2) * 0.12));
    }
    S_LAR_A.tube(larAPts, 0.062, 0.062, col('#a084e2'), col('#bca2ff'), 10, false);
    // 2'-5' Branch-point Adenosine (A) glowing gold node + 3' lariat tail
    const bpA = larACtr.clone().add(V(0, -0.48, 0.04));
    S_LAR_A.add(bpA, 0.22, col('#ffdf58'));
    S_LAR_A.tube([bpA, bpA.clone().add(V(-0.34, -0.30, 0.14))], 0.052, 0.036, col('#ffdf58'), col('#9b7ed8'), 8, true);
    S_LAR_A.done();
    SITES.intron_lariat.push(larACtr.clone(), bpA.clone());
    placed += 4;

    // Ligated Exon Junction for Isoform A: Exon 1 (coral) -> Exon 2 (turquoise) -> Exon 3 (rose) + EJC beads
    const S_EX_A = sculpt('exon_junction', spliceIsoAGroup, { roughness: 0.22, clearcoat: 0.54, emissive: '#105450', emissiveIntensity: 0.30 }, '#6efce8');
    const exACurve = new THREE.CatmullRomCurve3([
      SPL0.clone().add(V(-0.35, -0.18, 0.88)),
      SPL0.clone().add(V(0.28, -0.08, 0.92)),
      SPL0.clone().add(V(0.96, -0.02, 0.72)),
      NPC0.clone().add(V(-0.55, 0.0, 0.08)),
    ]);
    const exAPts = exACurve.getSpacedPoints(36);
    S_EX_A.tube(exAPts.slice(0, 12), 0.095, 0.095, col('#ff8d4a'), col('#ff8d4a'), 12, true); // Exon 1
    S_EX_A.tube(exAPts.slice(11, 25), 0.098, 0.098, col('#3af2d8'), col('#3af2d8'), 12, true); // Exon 2 (included!)
    S_EX_A.tube(exAPts.slice(24), 0.095, 0.095, col('#ff62a8'), col('#ff62a8'), 12, true); // Exon 3
    // Two Exon Junction Complex (EJC) marker rings at E1|E2 and E2|E3 seams
    S_EX_A.add(exAPts[12].clone().add(V(0, 0.16, 0.08)), 0.22, col('#ffe66d'));
    S_EX_A.add(exAPts[24].clone().add(V(0, 0.16, 0.08)), 0.22, col('#ffe66d'));
    S_EX_A.done();
    SITES.exon_junction.push(exAPts[18].clone(), exAPts[12].clone(), exAPts[24].clone());
    placed += 6;

    // ---- ISOFORM B (Alternative Splicing — Exon 2 Skipped into Lariat; E1 fused directly to E3!) ----
    const lariatBGrp = new THREE.Group();
    spliceIsoBGroup.add(lariatBGrp);
    anim.lariatIsoBGroup = lariatBGrp;

    const S_LAR_B = sculpt('intron_lariat', lariatBGrp, { roughness: 0.24, clearcoat: 0.50, emissive: '#2e2466', emissiveIntensity: 0.34 }, '#74ffe8');
    const larBCtr = SPL0.clone().add(V(-0.04, 1.48, 0.66));
    const larBPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 36; i++) {
      const a = (i / 36) * Math.PI * 2;
      larBPts.push(V(larBCtr.x + Math.cos(a) * 0.80, larBCtr.y + Math.sin(a) * 0.66, larBCtr.z + Math.sin(a * 2) * 0.14));
    }
    // Lower intron flanks + TOP TURQUOISE SKIPPED EXON 2 ARC visibly trapped inside the excised lariat!
    S_LAR_B.tube(larBPts.slice(0, 8), 0.064, 0.064, col('#9b7ed8'), col('#3af2d8'), 10, false);
    S_LAR_B.tube(larBPts.slice(7, 17), 0.095, 0.095, col('#3af2d8'), col('#3af2d8'), 12, false); // Skipped Exon 2!
    S_LAR_B.tube(larBPts.slice(16), 0.064, 0.064, col('#3af2d8'), col('#9b7ed8'), 10, false);
    const bpB = larBCtr.clone().add(V(0, -0.66, 0.05));
    S_LAR_B.add(bpB, 0.25, col('#ffe259'));
    S_LAR_B.tube([bpB, bpB.clone().add(V(-0.38, -0.32, 0.16))], 0.056, 0.038, col('#ffe259'), col('#9b7ed8'), 8, true);
    S_LAR_B.done();

    // Compact Ligated Exon Junction for Isoform B: Exon 1 (coral) ligated directly onto Exon 3 (rose)!
    const S_EX_B = sculpt('exon_junction', spliceIsoBGroup, { roughness: 0.22, clearcoat: 0.56, emissive: '#5e2236', emissiveIntensity: 0.34 }, '#ffa0c8');
    const exBCurve = new THREE.CatmullRomCurve3([
      SPL0.clone().add(V(-0.22, -0.14, 0.88)),
      SPL0.clone().add(V(0.55, -0.05, 0.84)),
      NPC0.clone().add(V(-0.55, 0.0, 0.08)),
    ]);
    const exBPts = exBCurve.getSpacedPoints(26);
    S_EX_B.tube(exBPts.slice(0, 14), 0.096, 0.096, col('#ff8d4a'), col('#ff8d4a'), 12, true); // Exon 1
    S_EX_B.tube(exBPts.slice(13), 0.096, 0.096, col('#ff62a8'), col('#ff62a8'), 12, true); // Exon 3 (direct fusion!)
    S_EX_B.add(exBPts[13].clone().add(V(0, 0.18, 0.10)), 0.26, col('#ffdf5c')); // Single E1|E3 junction splice seam!
    S_EX_B.done();
    placed += 4;
  }

  // -------------------------------------------------------------------------
  // 3. 8-Fold Nuclear Pore Complex (NPC) Gateway + Wet-Gel Halo Shell #3
  // -------------------------------------------------------------------------
  function buildNuclearPoreComplex() {
    const S_NPC = sculpt('npc', cell, { roughness: 0.26, clearcoat: 0.52, emissive: '#4d2a08', emissiveIntensity: 0.26 }, '#ffc478');
    const poreR = 0.88;
    const axis = V(1, 0, 0);

    // Cytoplasmic outer ring (+X) & Nucleoplasmic inner ring (-X)
    S_NPC.ring(NPC0.clone().add(V(0.28, 0, 0)), axis, poreR, 0.135, col('#ffac52'), 40, 12);
    S_NPC.ring(NPC0.clone().add(V(-0.28, 0, 0)), axis, poreR, 0.135, col('#e68642'), 40, 12);

    // 8-fold symmetric spoke columns, cytoplasmic filaments (+X) & nuclear basket struts (-X)
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const cy = Math.cos(a), sy = Math.sin(a);
      const pIn = NPC0.clone().add(V(-0.30, cy * poreR, sy * poreR));
      const pOut = NPC0.clone().add(V(0.30, cy * poreR, sy * poreR));
      const pMid = NPC0.clone().add(V(0.0, cy * (poreR * 0.78), sy * (poreR * 0.78)));
      S_NPC.lobe(pMid, 0.24, 0.18, 0.18, col(k % 2 === 0 ? '#ffc46b' : '#ff9848'), qFromX(V(1, cy * 0.2, sy * 0.2)));
      S_NPC.stick(pIn, pOut, 0.085, col('#e88a46'), col('#ffc974'));
      // Cytoplasmic guide filament reaching into the cytosol
      const pFil = pOut.clone().add(V(0.62, cy * 0.28, sy * 0.28));
      S_NPC.tube([pOut, pOut.clone().lerp(pFil, 0.5).add(V(0, 0.08, 0.08)), pFil], 0.052, 0.026, col('#ffd07a'), col('#80e8ff'), 8, true);
      // Nuclear basket strut converging toward the spliceosome lane
      const pBask = NPC0.clone().add(V(-0.92, cy * (poreR * 0.52), sy * (poreR * 0.52)));
      S_NPC.stick(pIn, pBask, 0.042, col('#c986ff'), col('#ffaa58'));
      SITES.npc.push(pOut.clone());
      placed += 2;
    }
    S_NPC.ring(NPC0.clone().add(V(-0.92, 0, 0)), axis, poreR * 0.52, 0.048, col('#c986ff'), 28, 8);
    S_NPC.done();

    // Shell 3: Wet-gel backlit FG-repeat Nuclear Pore Hydrogel Halo!
    const npcHaloMat = cinemaShellMat('npc', '#ff9f44', '#ffe29c', {}, {
      attenCol: '#c46a1c',
      attenDist: 3.2,
      sssColor: '#ffd480',
      sssIntensity: 0.38,
      iridescence: 0.65,
      thickness: 0.42,
      roughness: 0.12,
      sheenColor: '#fff0cc',
      normalMap: bump(10, 8),
      normalScale: 0.20,
    });
    const npcHalo = new THREE.Mesh(new THREE.TorusGeometry(poreR * 0.72, 0.14, 18, 48), npcHaloMat);
    npcHalo.position.copy(NPC0);
    npcHalo.rotation.y = Math.PI / 2;
    cell.add(npcHalo);
    SITES.npc.unshift(NPC0.clone());
  }

  // -------------------------------------------------------------------------
  // 4. Stage D — Exported Mature mRNA, Polysome Arc, Hero 80S Ribosome (4UG0),
  //    Animated A/P/E tRNAs (1EHZ) & Nascent Extruding Polypeptide
  // -------------------------------------------------------------------------
  function buildTranslationStage(T) {
    // Mature spliced mRNA gliding from NPC center across the Hero 80S Ribosome & Polysome Arc!
    const mrnaCurve = new THREE.CatmullRomCurve3([
      NPC0.clone().add(V(-0.55, 0.0, 0.06)),
      NPC0.clone().add(V(0.10, 0.02, 0.12)),
      V(0.55, 1.55, 0.55),
      V(1.38, 1.88, 0.85),
      RIBO0.clone().add(V(0.0, -0.35, 0.72)),
      V(3.25, 1.72, 0.52),
      V(3.95, 0.88, 0.15),
      V(3.62, -0.25, -0.10),
      V(2.65, -0.82, 0.12),
      V(1.52, -0.52, 0.35),
    ]);

    const mrnaPts = mrnaCurve.getSpacedPoints(72);
    const S_MRNA = sculpt('mature_mrna', cell, { roughness: 0.24, clearcoat: 0.52, emissive: '#5e2e06', emissiveIntensity: 0.26 }, '#ffb866');
    S_MRNA.tube(mrnaPts.slice(0, 24), 0.078, 0.078, col('#ff9248'), col('#3cf2d6'), 10, true);
    S_MRNA.tube(mrnaPts.slice(23, 48), 0.078, 0.078, col('#3cf2d6'), col('#ff66a8'), 10, true);
    S_MRNA.tube(mrnaPts.slice(47), 0.074, 0.062, col('#ff66a8'), col('#ffd65c'), 10, true);
    // 5' m7G cap & eIF4E ring riding ahead + 3' poly-A tail PABP beads
    const pCap = mrnaCurve.getPointAt(0.09).add(V(0, 0.16, 0.14));
    S_MRNA.add(pCap, 0.24, col('#ffe45e'));
    for (let k = 0; k < 5; k++) {
      const pp = mrnaCurve.getPointAt(0.86 + k * 0.03);
      S_MRNA.add(pp.clone().add(V(0, -0.14, 0.12)), 0.17, col('#ffc857'));
    }
    // Visible 3-base codon ticks along the mRNA track approaching the hero 80S decoding center!
    for (let i = 10; i <= 54; i += 2) {
      const p = mrnaPts[i];
      const baseKey = 'GAUGAC'[i % 6];
      S_MRNA.stick(p, p.clone().add(V(0, 0.16, 0.10)), 0.028, col(BASE[baseKey]), col(BASE[baseKey]));
    }
    S_MRNA.done();
    for (const u of [0.18, 0.34, 0.52, 0.72, 0.88]) SITES.mature_mrna.push(mrnaCurve.getPointAt(u));
    placed += 14;

    // REAL PDB 4UG0 — Hero 80S Eukaryotic Ribosome (centered at RIBO0, gently ratcheting!)
    const riboHeroGrp = new THREE.Group();
    riboHeroGrp.position.copy(RIBO0);
    cell.add(riboHeroGrp);
    anim.riboHeroGroup = riboHeroGrp;

    const riboHeroMat = makeCinemaProteinMat('ribosome_80s', { emissive: '#441448', emissiveIntensity: 0.22, roughness: 0.28, clearcoat: 0.48 }, '#ff9ef0', 0.24);
    const riboHeroMesh = new THREE.Mesh(T.geoRibo80s, riboHeroMat);
    riboHeroMesh.quaternion.copy(qFromY(V(0.14, 0.98, 0.15), -0.45));
    riboHeroMesh.scale.setScalar(1.06);
    riboHeroMesh.castShadow = true;
    riboHeroGrp.add(riboHeroMesh);
    SITES.ribosome_80s.push(RIBO0.clone());
    placed++;

    // REAL PDB 1EHZ — Animated L-shaped tRNAs at A, P, and E decoding sites inside the Hero 80S Ribosome!
    const makeTrnaMesh = (hex: string, emHex: string, aaHex: string | null) => {
      const g = new THREE.Group();
      const mat = makeCinemaProteinMat('trna_ape', { color: hex, emissive: emHex, emissiveIntensity: 0.34, roughness: 0.24, clearcoat: 0.54 }, hex, 0.28);
      const m = new THREE.Mesh(T.geoTrna, mat);
      m.scale.setScalar(0.98);
      g.add(m);
      if (aaHex) {
        const aa = new THREE.Mesh(
          new THREE.SphereGeometry(0.145, 16, 12),
          reg('trna_ape', phys({ color: aaHex, emissive: aaHex, emissiveIntensity: 0.48, roughness: 0.20, clearcoat: 0.60 }))
        );
        aa.position.set(0.05, 0.46, 0.14);
        g.add(aa);
      }
      return g;
    };

    const trnaA = makeTrnaMesh('#44f5d8', '#0d544c', '#5cffb2');
    trnaA.position.set(0.46, -0.14, 0.88);
    trnaA.rotation.set(0.18, -0.25, -0.18);
    const trnaP = makeTrnaMesh('#ffd558', '#5e4208', '#ff9452');
    trnaP.position.set(-0.02, -0.06, 0.94);
    trnaP.rotation.set(0.12, 0.08, 0.04);
    const trnaE = makeTrnaMesh('#c892ff', '#3a1a66', null);
    trnaE.position.set(-0.54, -0.16, 0.84);
    trnaE.rotation.set(0.22, 0.38, 0.24);
    riboHeroGrp.add(trnaA, trnaP, trnaE);
    anim.trnaA = trnaA;
    anim.trnaP = trnaP;
    anim.trnaE = trnaE;
    SITES.trna_ape.push(
      RIBO0.clone().add(V(0.46, -0.14, 0.88)),
      RIBO0.clone().add(V(-0.02, -0.06, 0.94)),
      RIBO0.clone().add(V(-0.54, -0.16, 0.84))
    );
    placed += 3;

    // Additional cytosolic diffusing charged aa-tRNAs (PDB 1EHZ) approaching the hero ribosome & polysome!
    const I_TRNA = molBatch('trna_ape', T.geoTrna, cell, { emissive: '#0c4842', emissiveIntensity: 0.22 }, '#62ffe4');
    for (let i = 0; i < 24; i++) {
      const ang = (i / 24) * Math.PI * 2;
      const rad = 1.6 + (i % 4) * 0.75;
      const p = RIBO0.clone().add(V(Math.cos(ang) * rad * 1.15, Math.sin(ang) * rad * 0.78 - 0.3, rr(-0.85, 0.75)));
      if (p.x < 0.2) p.x = 0.45 + rand() * 3.8;
      I_TRNA.add(p, qFromY(V(rr(-1, 1), rr(-1, 1), rr(-1, 1)), rr(0, 6.28)), rr(0.56, 0.74));
      if (SITES.trna_ape.length < 14) SITES.trna_ape.push(p.clone());
      placed++;
    }
    I_TRNA.done();

    // Polysome Arc: 7 additional Real PDB 4UG0 80S ribosomes riding along the mature mRNA!
    const I_POLY = molBatch('polysome', T.geoRibo80s, cell, { emissive: '#341652', emissiveIntensity: 0.20, roughness: 0.30, clearcoat: 0.44 }, '#d89eff');
    const polyUs = [0.22, 0.54, 0.65, 0.74, 0.83, 0.91, 0.97];
    const S_POLY_PEP = sculpt('polypeptide', cell, { roughness: 0.24, clearcoat: 0.50, emissive: '#582010', emissiveIntensity: 0.24 }, '#ffaa82');
    polyUs.forEach((u, idx) => {
      const p = mrnaCurve.getPointAt(u).add(V(0, 0.12, -0.05));
      I_POLY.add(p, qFromY(V(0.15 * Math.sin(idx), 0.96, 0.22), idx * 0.85), 0.60);
      SITES.polysome.push(p.clone());
      SITES.ribosome_80s.push(p.clone());
      placed++;
      // Progressively longer nascent polypeptide chains sprouting from each ribosome along the polysome!
      const chainLen = 4 + idx * 2;
      const chainPts: THREE.Vector3[] = [];
      for (let b = 0; b < chainLen; b++) {
        const bp = p.clone().add(V(0.28 + b * 0.11, 0.42 + b * 0.09 + 0.08 * Math.sin(b * 1.4), 0.22 + 0.09 * Math.cos(b * 1.3)));
        chainPts.push(bp);
        S_POLY_PEP.add(bp, 0.125, col(b < 4 ? '#ff8c4e' : b < 8 ? '#3ef2d6' : '#ff68a8'));
      }
      S_POLY_PEP.tube(chainPts, 0.036, 0.036, col('#ff9860'), col('#ff70a8'), 7, true);
    });
    // Ambient background cytosolic 80S ribosomes for rich Goodsell crowding
    for (let k = 0; k < 7; k++) {
      const p = V(1.1 + k * 0.72, -1.75 + (k % 3) * 0.68, -1.15 - (k % 2) * 0.65);
      I_POLY.add(p, qFromY(V(rr(-0.4, 0.4), 1, rr(-0.4, 0.4)), k * 1.1), 0.50);
      placed++;
    }
    I_POLY.done();
    S_POLY_PEP.done();

    // Hero Nascent Polypeptide extruding from Hero 80S Exit Tunnel -> Hsp70 -> TRiC/CCT!
    // Isoform A (full length: Exon 1 coral + Exon 2 turquoise + Exon 3 rose)
    const pepACurve = new THREE.CatmullRomCurve3([
      RIBO0.clone().add(V(0.10, 0.62, 0.42)),
      RIBO0.clone().add(V(0.75, 1.15, 0.56)),
      V(3.55, 3.45, 0.45),
      V(4.25, 3.55, 0.36),
      FOLD0.clone().add(V(-0.12, 0.08, 0.22)),
    ]);
    const S_PEP_A = sculpt('polypeptide', polyIsoAGroup, { roughness: 0.22, clearcoat: 0.56, emissive: '#4e2412', emissiveIntensity: 0.28 }, '#ffa680');
    const pepAPts = pepACurve.getSpacedPoints(34);
    S_PEP_A.tube(pepAPts.slice(0, 12), 0.062, 0.062, col('#ff8d4a'), col('#ff8d4a'), 10, true);
    S_PEP_A.tube(pepAPts.slice(11, 24), 0.062, 0.062, col('#3cf2d6'), col('#3cf2d6'), 10, true);
    S_PEP_A.tube(pepAPts.slice(23), 0.062, 0.062, col('#ff66a8'), col('#ff66a8'), 10, true);
    pepAPts.forEach((p, idx) => {
      if (idx % 2 === 0) {
        const c = idx < 12 ? col('#ffa066') : idx < 24 ? col('#68ffe8') : col('#ff88be');
        S_PEP_A.add(p.clone().add(V(0, 0.08 * Math.sin(idx), 0.08 * Math.cos(idx))), 0.165, c);
      }
    });
    S_PEP_A.done();
    SITES.polypeptide.push(pepACurve.getPointAt(0.38), pepACurve.getPointAt(0.68), pepACurve.getPointAt(0.88));
    placed += 16;

    // Isoform B (visibly shorter compact polypeptide missing turquoise Exon 2!)
    const pepBCurve = new THREE.CatmullRomCurve3([
      RIBO0.clone().add(V(0.10, 0.62, 0.42)),
      RIBO0.clone().add(V(0.82, 1.02, 0.58)),
      V(3.68, 3.22, 0.46),
      FOLD0.clone().add(V(-0.32, 0.04, 0.26)),
    ]);
    const S_PEP_B = sculpt('polypeptide', polyIsoBGroup, { roughness: 0.22, clearcoat: 0.56, emissive: '#581a2e', emissiveIntensity: 0.30 }, '#ff94be');
    const pepBPts = pepBCurve.getSpacedPoints(22);
    S_PEP_B.tube(pepBPts.slice(0, 12), 0.066, 0.066, col('#ff8d4a'), col('#ff8d4a'), 10, true);
    S_PEP_B.tube(pepBPts.slice(11), 0.066, 0.066, col('#ff66a8'), col('#ff66a8'), 10, true);
    pepBPts.forEach((p, idx) => {
      if (idx % 2 === 0) {
        const c = idx < 12 ? col('#ffa066') : col('#ff88be');
        S_PEP_B.add(p.clone().add(V(0, 0.09 * Math.sin(idx), 0.09 * Math.cos(idx))), 0.175, c);
      }
    });
    S_PEP_B.done();
  }

  // -------------------------------------------------------------------------
  // 5. Stage E — Chaperonins (Hsp70 2KHO + TRiC/CCT 6NR8) & Live Mutation Bench
  //    (Wild-Type HbA 2HHB vs Sickle HbS Fiber 2HBS & Bacterial AcrB Efflux 5O66)
  // -------------------------------------------------------------------------
  function buildFoldingAndMutationBench(T) {
    // 5A. REAL PDB 2KHO — Hsp70 Molecular Chaperones shielding the nascent polypeptide!
    const I_HSP = molBatch('hsp70', T.geoHsp70, cell, { emissive: '#144c22', emissiveIntensity: 0.24, roughness: 0.28, clearcoat: 0.48 }, '#7eff9c');
    const heroHspPos = [
      V(3.45, 3.45, 0.62),
      V(4.12, 3.68, 0.48),
      V(3.85, 2.72, 0.44),
      V(4.45, 2.38, 0.25),
    ];
    heroHspPos.forEach((p, idx) => {
      I_HSP.add(p, qFromY(V(0.35 - idx * 0.2, 0.85, 0.35), idx * 0.9), 0.84);
      SITES.hsp70.push(p.clone());
      placed++;
    });
    // Additional cytosolic Hsp70 cohort patrolling the folding bay
    for (let i = 0; i < 16; i++) {
      const p = V(3.2 + (i % 5) * 1.15, 2.0 + Math.floor(i / 5) * 1.05, -0.85 - (i % 3) * 0.42);
      I_HSP.add(p, qFromY(V(rr(-1, 1), rr(-1, 1), rr(-1, 1)), rr(0, 6.28)), rr(0.54, 0.72));
      placed++;
    }
    I_HSP.done();

    // 5B. REAL PDB 6NR8 — Eukaryotic TRiC / CCT Chaperonin Barrel with animated ATP-gated Iris!
    const tricHeroMat = makeCinemaProteinMat('tric_groel', { emissive: '#123a6e', emissiveIntensity: 0.26, roughness: 0.26, clearcoat: 0.54 }, '#7ad4ff', 0.26);
    const tricHero = new THREE.Mesh(T.geoTric, tricHeroMat);
    tricHero.position.copy(FOLD0).add(V(0.68, 0.05, 0.15));
    tricHero.quaternion.copy(qFromY(V(0.12, 0.98, 0.16), 0.3));
    tricHero.scale.setScalar(1.06);
    tricHero.castShadow = true;
    cell.add(tricHero);
    SITES.tric_groel.push(tricHero.position.clone());
    placed++;

    // Animated ATP-gated TRiC apical iris crown ring + folding nascent subunit inside!
    const tricLid = new THREE.Group();
    tricLid.position.copy(tricHero.position).add(V(0, 0.68, 0.06));
    cell.add(tricLid);
    anim.tricLidGroup = tricLid;
    const S_LID = sculpt('tric_groel', tricLid, { emissive: '#543c08', emissiveIntensity: 0.40, roughness: 0.20, clearcoat: 0.62 }, '#ffe280');
    S_LID.ring(V(0, 0, 0), V(0, 1, 0), 0.58, 0.085, col('#ffd55c'), 32, 10);
    S_LID.add(V(0, -0.35, 0.02), 0.34, col('#ff7a84')); // Folding β-globin domain inside chamber
    S_LID.done();

    // Companion TRiC/GroEL folding barrels in background cytosol
    const I_TRIC = molBatch('tric_groel', T.geoTric, cell, { emissive: '#0e325c', emissiveIntensity: 0.20 }, '#7ad4ff');
    [
      V(6.85, 3.65, -0.45),
      V(5.85, 4.42, -0.78),
      V(7.45, 2.25, -0.68),
      V(4.65, 4.55, -0.82),
    ].forEach((p, idx) => {
      I_TRIC.add(p, qFromY(V(0.2, 0.95, 0.2), idx * 0.8), 0.72);
      SITES.tric_groel.push(p.clone());
      placed++;
    });
    I_TRIC.done();

    // -----------------------------------------------------------------------
    // 5C. LIVE POINT-MUTATION & SELECTION BENCH (Centered around BENCH0)
    //     1) Wild-Type Soluble HbA (2HHB · GAG -> Glu6)
    //     2) Polymerizing Sickle HbS Fiber (2HBS · GTG -> Val6)
    //     3) Bacterial AcrB Multidrug Efflux Pump (5O66 · GGC -> GAC -> Asp288)
    // -----------------------------------------------------------------------

    // Subtle dark-glass pedestal ring framing the Mutation Bench
    const benchRingMat = reg(
      'hb_wildtype',
      phys({ color: '#1b2b4a', emissive: '#284a82', emissiveIntensity: 0.35, roughness: 0.25, metalness: 0.30, clearcoat: 0.65 })
    );
    const benchRing = new THREE.Mesh(new THREE.TorusGeometry(2.65, 0.045, 12, 64), benchRingMat);
    benchRing.position.copy(BENCH0).add(V(0.15, -1.75, 0.0));
    benchRing.rotation.x = Math.PI / 2 - 0.14;
    cell.add(benchRing);

    // Dynamic Status Plaque cleanly anchored below the Mutation Bench pedestal
    const bpCv = document.createElement('canvas');
    bpCv.width = 640;
    bpCv.height = 104;
    const bpTex = new THREE.CanvasTexture(bpCv);
    bpTex.colorSpace = THREE.SRGBColorSpace;
    const bpMat = reg(
      'hb_wildtype',
      new THREE.MeshStandardMaterial({
        map: bpTex,
        emissive: '#ffffff',
        emissiveMap: bpTex,
        emissiveIntensity: 0.84,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    const bpMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.35, 0.70), bpMat);
    bpMesh.position.copy(BENCH0).add(V(0.15, -2.18, 1.48));
    cell.add(bpMesh);
    anim.benchPlaqueCv = bpCv;
    anim.benchPlaqueTex = bpTex;
    anim.benchPlaqueMat = bpMat;

    // 1) WILD-TYPE SOLUBLE HbA TETRAMERS (Real PDB 2HHB)
    hbaBenchGroup.position.copy(BENCH0).add(V(-1.15, 0.25, 0.35));
    const I_HBA = molBatch('hb_wildtype', T.geoHba, hbaBenchGroup, { emissive: '#58121e', emissiveIntensity: 0.24, roughness: 0.28, clearcoat: 0.52 }, '#ff8694');
    const hbaOffsets = [
      V(0.0, 0.15, 0.25),
      V(-0.98, 0.92, -0.15),
      V(0.88, 0.98, -0.25),
      V(-0.85, -0.78, 0.08),
      V(0.75, -0.82, -0.18),
      V(-0.10, 1.38, -0.52),
      V(0.18, -1.30, -0.45),
      V(-1.42, 0.08, -0.48),
      V(1.22, 0.06, -0.58),
      V(-0.42, 0.55, -0.82),
      V(0.55, -0.28, -0.88),
      V(-0.35, -0.42, -0.76),
    ];
    hbaOffsets.forEach((off, idx) => {
      const sc = idx === 0 ? 1.15 : rr(0.76, 0.94);
      I_HBA.add(off, qFromY(V(Math.sin(idx * 1.4), 0.9, Math.cos(idx * 1.1)), idx * 0.9), sc);
      if (SITES.hb_wildtype.length < 8) SITES.hb_wildtype.push(hbaBenchGroup.position.clone().add(off));
      placed++;
    });
    I_HBA.done();

    // Hydrophilic Glu6 (-COO-) blue-aqua hydration halo beads on the hero soluble HbA tetramer!
    const S_GLU = sculpt('hb_wildtype', hbaBenchGroup, { emissive: '#22a8ff', emissiveIntensity: 0.65, roughness: 0.18 }, '#70e2ff');
    S_GLU.add(V(0.42, 0.26, 0.56), 0.16, col('#68e4ff'));
    S_GLU.add(V(-0.40, 0.02, 0.54), 0.16, col('#68e4ff'));
    S_GLU.done();

    // Also scatter additional soluble HbA tetramers in the upper-right cytosolic lane for rich biological crowding
    const I_HBA_BG = molBatch('hb_wildtype', T.geoHba, cell, { emissive: '#44101a', emissiveIntensity: 0.18 }, '#ff8694');
    for (let i = 0; i < 14; i++) {
      const p = V(4.2 + (i % 5) * 0.95, 0.95 + Math.floor(i / 5) * 0.85, -1.35 - (i % 3) * 0.4);
      I_HBA_BG.add(p, qFromY(V(rr(-1, 1), rr(-1, 1), rr(-1, 1)), rr(0, 6.28)), rr(0.55, 0.70));
      placed++;
    }
    I_HBA_BG.done();

    // 2) POLYMERIZING SICKLE-CELL HbS HELICAL FIBER (Real PDB 2HBS!)
    hbsFiberGroup.position.copy(BENCH0).add(V(0.55, 0.12, 0.22));
    const I_HBS = molBatch('hb_sickle_fiber', T.geoHbs, hbsFiberGroup, { emissive: '#642408', emissiveIntensity: 0.28, roughness: 0.28, clearcoat: 0.50 }, '#ffae54');
    const val6Mat = reg(
      'hb_sickle_fiber',
      new THREE.MeshStandardMaterial({
        color: '#ffe047',
        emissive: '#ff8a1e',
        emissiveIntensity: 1.05,
        roughness: 0.18,
      })
    );
    anim.val6GlowMats.push(val6Mat);

    // Build a 3-strand twisted rigid HbS helical fiber (36 real 2HBS units!) with glowing Val6 hydrophobic docking contacts!
    const val6Geo = new THREE.SphereGeometry(0.115, 14, 10);
    for (let strand = 0; strand < 3; strand++) {
      const phi0 = (strand / 3) * Math.PI * 2;
      for (let k = 0; k < 12; k++) {
        const y = -1.65 + k * 0.31;
        const twist = phi0 + k * 0.38;
        const rad = 0.42;
        const p = V(Math.cos(twist) * rad, y, Math.sin(twist) * rad);
        I_HBS.add(p, qFromY(V(0, 1, 0), twist), 0.72);
        if (k % 3 === 1 && SITES.hb_sickle_fiber.length < 10) {
          SITES.hb_sickle_fiber.push(hbsFiberGroup.position.clone().add(p));
        }
        // Highlight exposed hydrophobic Val6 docking patches interlocking adjacent HbS tetramers!
        if (k % 2 === 0) {
          const vm = new THREE.Mesh(val6Geo, val6Mat);
          vm.position.set(Math.cos(twist + 0.35) * (rad + 0.24), y + 0.14, Math.sin(twist + 0.35) * (rad + 0.24));
          hbsFiberGroup.add(vm);
        }
        placed++;
      }
    }
    I_HBS.done();

    // 3) ADAPTIVE BACTERIAL AcrB MULTIDRUG EFFLUX POCKET (Real PDB 5O66 — Z is its 13.6 nm transmembrane axis!)
    acrbBenchGroup.position.copy(BENCH0).add(V(2.05, 0.08, 0.26));
    const qAcrbUpright = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    const acrbHeroMat = makeCinemaProteinMat('acrb_pocket', { emissive: '#0c4e38', emissiveIntensity: 0.28, roughness: 0.26, clearcoat: 0.56 }, '#62ffca', 0.28);
    const acrbHero = new THREE.Mesh(T.geoAcrb, acrbHeroMat);
    acrbHero.scale.setScalar(1.16);
    acrbHero.position.set(0.0, 0.12, 0.0);
    acrbHero.quaternion.copy(qAcrbUpright).premultiply(new THREE.Quaternion().setFromAxisAngle(UP, -0.35));
    acrbHero.castShadow = true;
    acrbBenchGroup.add(acrbHero);
    SITES.acrb_pocket.push(acrbBenchGroup.position.clone());
    placed++;

    // Companion upright AcrB trimers embedded along the mini bacterial inner-membrane curve
    const I_ACRB = molBatch('acrb_pocket', T.geoAcrb, acrbBenchGroup, { emissive: '#0a402e', emissiveIntensity: 0.22 }, '#62ffca');
    [
      V(-0.92, -0.08, -0.68),
      V(0.92, -0.10, -0.64),
      V(0.04, -0.14, -1.08),
    ].forEach((off, idx) => {
      const qInst = qAcrbUpright.clone().premultiply(new THREE.Quaternion().setFromAxisAngle(UP, idx * 1.1));
      I_ACRB.add(off, qInst, 0.78);
      SITES.acrb_pocket.push(acrbBenchGroup.position.clone().add(off));
      placed++;
    });
    I_ACRB.done();

    // Glowing distal binding pocket sphere (Gly288 -> Asp288 remodeling indicator seated in the periplasmic porter cleft!)
    const pocketMat = reg(
      'acrb_pocket',
      new THREE.MeshStandardMaterial({
        color: '#5effb8',
        emissive: '#38ffa0',
        emissiveIntensity: 0.95,
        roughness: 0.16,
        transparent: true,
        opacity: 0.84,
      })
    );
    const pocketSphere = new THREE.Mesh(new THREE.SphereGeometry(0.24, 20, 16), pocketMat);
    pocketSphere.position.set(0.16, 0.42, 0.44);
    acrbBenchGroup.add(pocketSphere);
    anim.acrbPocketMat = pocketMat;

    // Shell 4: Curved Bacterial Inner-Membrane Wet-Gel Bilayer Patch cradling AcrB's transmembrane helices!
    const bactMemMat = cinemaShellMat('acrb_pocket', '#1e7868', '#78ffe4', {}, {
      attenCol: '#14584c',
      attenDist: 3.4,
      sssColor: '#5effcf',
      sssIntensity: 0.34,
      iridescence: 0.58,
      thickness: 0.38,
      roughness: 0.13,
      sheenColor: '#d0fff2',
      normalMap: bump(10, 8),
      normalScale: 0.20,
    });
    const bactDisc = new THREE.Mesh(new THREE.CylinderGeometry(1.42, 1.48, 0.22, 36, 1, false), bactMemMat);
    bactDisc.position.set(0.0, -0.58, -0.28);
    acrbBenchGroup.add(bactDisc);

    // Live animated fluoroquinolone antibiotic spheres extruded upward through the AcrB efflux channel!
    const drugMat = reg(
      'acrb_pocket',
      new THREE.MeshStandardMaterial({
        color: '#ff64c8',
        emissive: '#ff42b0',
        emissiveIntensity: 0.90,
        roughness: 0.20,
      })
    );
    const drugGeo = new THREE.OctahedronGeometry(0.115, 1);
    for (let d = 0; d < 8; d++) {
      const dm = new THREE.Mesh(drugGeo, drugMat);
      acrbBenchGroup.add(dm);
      anim.acrbDrugs.push({ mesh: dm, t0: d / 8, lane: d % 3 });
      placed++;
    }
  }

  // -------------------------------------------------------------------------
  // 6. Centered Circular 0.1-0.5 nm Optical Atomic Codon Inset (`codon_atoms`)
  //    Zero label clipping · Live single-base mutation switch (GAG <-> GTG <-> GAC)
  //    Full CPK element spheres: C, H, N, O, P, Mg2+
  // -------------------------------------------------------------------------
  function buildAtomicCodonInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM0);
    cell.add(grp);
    grp.add(atomWtGroup, atomHbsGroup, atomAcrbGroup);

    const R_RING = 1.92;

    // Shell 5: Wet-gel backlit optical lens bezel halo around the atomic inset!
    const lensRimMat = cinemaShellMat('codon_atoms', '#3488e8', '#9ce8ff', {}, {
      attenCol: '#2466ba',
      attenDist: 3.4,
      sssColor: '#78e8ff',
      sssIntensity: 0.42,
      iridescence: 0.68,
      thickness: 0.42,
      roughness: 0.10,
      sheenColor: '#e2f8ff',
      normalMap: bump(12, 8),
      normalScale: 0.16,
    });
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.068, 18, 72), lensRimMat));

    // Matte dark-navy optical glass backing disc (zero specular glare behind CPK atoms & text!)
    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.04, 64),
      reg(
        'codon_atoms',
        new THREE.MeshBasicMaterial({
          color: '#071122',
          transparent: true,
          opacity: 0.82,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.18;
    grp.add(glassDisc);

    // CPK element colors: C slate-silver, H pearl, N cobalt, O crimson, P violet, Mg2+ emerald
    const cC = col('#98a6be');
    const cH = col('#f2f8ff');
    const cN = col('#4c96ff');
    const cO = col('#ff5264');
    const cP = col('#be82ff');
    const cMg = col('#52ff98');
    const cBond = col('#cddaf0');
    const cHBond = col('#62f8ff');
    const cMutHB = col('#ffd94d');

    const makePoly = (cx: number, cy: number, cz: number, rad: number, sides: number, rot = 0) => {
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k < sides; k++) {
        const a = rot + (k / sides) * Math.PI * 2;
        pts.push(V(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, cz + (k % 2 === 0 ? 0.018 : -0.018)));
      }
      return pts;
    };

    // Helper to build one complete 3-base-pair codon:anticodon CPK atomic duplex inside a target Group
    function buildCodonVariant(
      targetGrp: THREE.Group,
      pairs: ReadonlyArray<readonly [string, string, number, boolean]>
    ) {
      const S_AT = sculpt('codon_atoms', targetGrp, { roughness: 0.20, clearcoat: 0.62 }, '#98e8ff');
      const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => S_AT.add(p, r * 2, c);
      const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.022) => S_AT.stick(a, b, r, c1, c2);
      const hBond = (a: THREE.Vector3, b: THREE.Vector3, colH = cHBond) => {
        for (let k = 0; k < 3; k++) {
          const p0 = a.clone().lerp(b, (k + 0.16) / 3);
          const p1 = a.clone().lerp(b, (k + 0.74) / 3);
          S_AT.stick(p0, p1, 0.015, colH, colH);
        }
      };

      const yRows = [0.58, 0.0, -0.58];

      // Sugar-phosphate backbones on Left (mRNA 5'->3') & Right (tRNA anticodon 3'->5')
      for (const side of [-1, 1] as const) {
        const xP = side * 1.24;
        const xSug = side * 0.94;
        for (let r = 0; r < 3; r++) {
          const ys = yRows[r];
          // Ribose pentose ring
          const pent = makePoly(xSug, ys, 0.05, 0.135, 5, Math.PI / 2);
          for (let k = 0; k < 5; k++) {
            const isO = k === 0;
            atom(pent[k], isO ? 0.052 : 0.046, isO ? cO : cC);
            bond(pent[k], pent[(k + 1) % 5], isO ? cO : cC, (k + 1) % 5 === 0 ? cO : cC, 0.019);
          }
          // Phosphodiester P bridges between rungs
          if (r < 2) {
            const yP = (yRows[r] + yRows[r + 1]) * 0.5;
            const pP = V(xP, yP, 0.09);
            const oTop = V(xP + (xSug - xP) * 0.45, yP + 0.18, 0.07);
            const oBot = V(xP + (xSug - xP) * 0.45, yP - 0.18, 0.07);
            const oOut = V(xP + side * 0.16, yP, 0.14);
            atom(pP, 0.095, cP);
            atom(oTop, 0.060, cO);
            atom(oBot, 0.060, cO);
            atom(oOut, 0.058, cO);
            bond(pP, oTop, cP, cO, 0.024);
            bond(pP, oBot, cP, cO, 0.024);
            bond(pP, oOut, cP, cO, 0.020);
            bond(oTop, V(xSug, yRows[r] - 0.11, 0.05), cO, cC, 0.020);
            bond(oBot, V(xSug, yRows[r + 1] + 0.11, 0.05), cO, cC, 0.020);
          }
        }
      }

      // Two gleaming emerald catalytic Mg2+ ions stabilizing the phosphodiester geometry
      atom(V(-1.38, 0.0, 0.20), 0.088, cMg);
      atom(V(1.38, 0.0, 0.20), 0.088, cMg);

      // Draw each of the 3 codon:anticodon base pairs
      pairs.forEach(([bL, bR, nHB, isMut], rowIdx) => {
        const y = yRows[rowIdx];
        const leftPurine = bL === 'A' || bL === 'G';
        const hbColor = isMut ? cMutHB : cHBond;

        // Subtle glowing gold highlight pill behind the live mutated base pair (row 1)!
        if (isMut) {
          const mutHalo = new THREE.Mesh(
            new THREE.RingGeometry(0.24, 0.30, 32),
            reg(
              'codon_atoms',
              new THREE.MeshBasicMaterial({ color: '#ffd94d', transparent: true, opacity: 0.72, side: THREE.DoubleSide })
            )
          );
          mutHalo.scale.set(2.85, 0.92, 1);
          mutHalo.position.set(0, y, -0.06);
          targetGrp.add(mutHalo);
        }

        const drawBase = (base: string, side: -1 | 1, isPur: boolean) => {
          const cx6 = isPur ? side * 0.24 : side * 0.44;
          const r6 = makePoly(cx6, y, 0.06, 0.155, 6, side < 0 ? 0 : Math.PI / 6);
          for (let k = 0; k < 6; k++) {
            const isN = k === 0 || k === 3;
            atom(r6[k], 0.050, isN ? cN : cC);
            bond(r6[k], r6[(k + 1) % 6], isN ? cN : cC, ((k + 1) % 6 === 0 || (k + 1) % 6 === 3) ? cN : cC, 0.019);
          }
          if (isPur) {
            const cx5 = side * 0.48;
            const r5 = makePoly(cx5, y, 0.06, 0.125, 5, side < 0 ? 0.12 : Math.PI - 0.12);
            for (let k = 0; k < 5; k++) {
              const isN = k === 1 || k === 3;
              atom(r5[k], 0.045, isN ? cN : cC);
              bond(r5[k], r5[(k + 1) % 5], isN ? cN : cC, cC, 0.018);
            }
            bond(V(side * 0.80, y, 0.05), V(cx5 + side * 0.11, y, 0.06), cC, cN, 0.020);
          } else {
            bond(V(side * 0.80, y, 0.05), V(cx6 + side * 0.14, y, 0.06), cC, cN, 0.020);
          }
          // Exocyclic donor/acceptor atoms (O / NH2)
          const edgeX = isPur ? side * 0.09 : side * 0.28;
          const topCol = base === 'G' || base === 'U' || base === 'T' ? cO : cN;
          atom(V(edgeX, y + 0.15, 0.07), 0.055, topCol);
          bond(V(cx6, y + 0.10, 0.06), V(edgeX, y + 0.15, 0.07), cC, topCol, 0.019);
          if (nHB === 3) {
            const botCol = base === 'C' ? cO : cN;
            atom(V(edgeX, y - 0.15, 0.07), 0.055, botCol);
            bond(V(cx6, y - 0.10, 0.06), V(edgeX, y - 0.15, 0.07), cC, botCol, 0.019);
          }
          return edgeX;
        };

        const xL = drawBase(bL, -1, leftPurine);
        const xR = drawBase(bR, 1, !leftPurine);

        // Hydrogen bonds + bridging H atoms
        const hbYs = nHB === 3 ? [y + 0.15, y, y - 0.15] : [y + 0.15, y - 0.02];
        hbYs.forEach((hy, hiIdx) => {
          const pA = V(xL, hy, 0.07);
          const pB = V(xR, hy, 0.07);
          atom(pA.clone().lerp(pB, hiIdx % 2 === 0 ? 0.44 : 0.56), 0.036, cH);
          hBond(pA, pB, hbColor);
        });
      });

      S_AT.done();
    }

    // Build all 3 live mutation atomic duplexes (switched instantaneously by setMutation!)
    // 1. Wild-Type HbA: mRNA GAG <-> tRNA CUC (Codon 6 -> Glu6)
    buildCodonVariant(atomWtGroup, [
      ['G', 'C', 3, false],
      ['A', 'U', 2, true],
      ['G', 'C', 3, false],
    ]);
    // 2. Sickle HbS: mRNA GUG <-> tRNA CAC (Single A->U transversion! Codon 6 -> Val6)
    buildCodonVariant(atomHbsGroup, [
      ['G', 'C', 3, false],
      ['U', 'A', 2, true],
      ['G', 'C', 3, false],
    ]);
    // 3. Adaptive AcrB: mRNA GAC <-> tRNA CUG (Single G->A transition from GGC! Codon 288 -> Asp288)
    buildCodonVariant(atomAcrbGroup, [
      ['G', 'C', 3, false],
      ['A', 'U', 2, true],
      ['C', 'G', 3, false],
    ]);

    // Dynamic Top Caption Plaque comfortably centered INSIDE the circular bezel (y = +1.18, width 2.28 -> max corner r = 1.64 << 1.92!)
    const topCv = document.createElement('canvas');
    topCv.width = 560;
    topCv.height = 112;
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(2.26, 0.45),
      reg(
        'codon_atoms',
        new THREE.MeshStandardMaterial({
          map: topTex,
          emissive: '#ffffff',
          emissiveMap: topTex,
          emissiveIntensity: 0.84,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    topLbl.position.set(0, 1.18, 0.16);
    grp.add(topLbl);
    anim.atomTopCv = topCv;
    anim.atomTopTex = topTex;

    // Bottom CPK Atomic Legend comfortably inside lower circular chord (y = -1.26, width 1.98 -> max corner r = 1.60 << 1.92!)
    const botCv = document.createElement('canvas');
    botCv.width = 560;
    botCv.height = 72;
    const bg = botCv.getContext('2d')!;
    bg.clearRect(0, 0, 560, 72);
    const atomsLegend: Array<[string, string]> = [
      ['C', '#98a6be'],
      ['H', '#f2f8ff'],
      ['N', '#4c96ff'],
      ['O', '#ff5264'],
      ['P', '#be82ff'],
      ['Mg²⁺', '#52ff98'],
    ];
    bg.font = '700 22px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    atomsLegend.forEach(([sym, hex], idx) => {
      const bx = 36 + idx * 86;
      bg.beginPath();
      bg.arc(bx, 36, 10, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#ecf4ff';
      bg.fillText(sym, bx + 15, 37);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.98, 0.25),
      reg(
        'codon_atoms',
        new THREE.MeshStandardMaterial({
          map: botTex,
          emissive: '#ffffff',
          emissiveMap: botTex,
          emissiveIntensity: 0.82,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    botLbl.position.set(0, -1.26, 0.16);
    grp.add(botLbl);

    SITES.codon_atoms.push(ATOM0.clone());
    placed += 12;
  }

  // -------------------------------------------------------------------------
  // Dynamic 3D Plaque Redrawers (Atomic Lens Header + Mutation Bench Banner)
  // -------------------------------------------------------------------------
  function redrawDynamicPlaques() {
    if (anim.atomTopCv && anim.atomTopTex) {
      const g = anim.atomTopCv.getContext('2d')!;
      g.clearRect(0, 0, 560, 112);
      g.textAlign = 'center';
      let line1 = 'CODON 6: GAG ↔ CUC';
      let line2 = 'Wild-Type HbA · Glu6 (A=U · 2 H)';
      let c1 = '#7ef2ff';
      if (mutation === 'hbs_mut') {
        line1 = 'MUTATED CODON 6: GUG ↔ CAC';
        line2 = 'Sickle HbS · A→U Flip → Val6';
        c1 = '#ff9868';
      } else if (mutation === 'acrb_sel') {
        line1 = 'ADAPTIVE CODON 288: GAC ↔ CUG';
        line2 = 'AcrB Efflux · G→A Flip → Asp288';
        c1 = '#6effbd';
      }
      g.font = '700 28px system-ui, -apple-system, sans-serif';
      g.fillStyle = c1;
      g.fillText(line1, 280, 42);
      g.font = '600 22px system-ui, -apple-system, sans-serif';
      g.fillStyle = '#e8f3ff';
      g.fillText(line2, 280, 82);
      anim.atomTopTex.needsUpdate = true;
    }

    if (anim.benchPlaqueCv && anim.benchPlaqueTex) {
      const g = anim.benchPlaqueCv.getContext('2d')!;
      g.clearRect(0, 0, 640, 104);
      // Rounded glass badge
      g.fillStyle = 'rgba(8, 16, 32, 0.80)';
      g.strokeStyle =
        mutation === 'hbs_mut'
          ? 'rgba(255, 132, 92, 0.75)'
          : mutation === 'acrb_sel'
            ? 'rgba(88, 255, 178, 0.75)'
            : 'rgba(126, 232, 255, 0.65)';
      g.lineWidth = 3;
      g.beginPath();
      g.roundRect(8, 8, 624, 88, 16);
      g.fill();
      g.stroke();

      g.textAlign = 'center';
      let topTxt = 'WILD-TYPE HbA (2HHB) · GAG → Glu6';
      let subTxt = `Soluble hydrophilic tetramers · ${splice === 'isoform_a' ? 'Isoform A (E1+E2+E3)' : 'Isoform B (Exon 2 Skip)'}`;
      let topCol = '#88ecff';
      if (mutation === 'hbs_mut') {
        topTxt = 'SICKLE HbS FIBER (2HBS) · GTG → Val6';
        subTxt = 'Hydrophobic Val6 docks Phe85/Leu88 → Rigid Fibers & Malaria Resistance';
        topCol = '#ffad66';
      } else if (mutation === 'acrb_sel') {
        topTxt = 'ADAPTIVE AcrB PUMP (5O66) · GAC → Asp288';
        subTxt = 'Remodeled efflux pocket pumps fluoroquinolones → Directional Selection';
        topCol = '#6effc2';
      }
      g.font = '700 24px system-ui, -apple-system, sans-serif';
      g.fillStyle = topCol;
      g.fillText(topTxt, 320, 44);
      g.font = '500 17px system-ui, -apple-system, sans-serif';
      g.fillStyle = '#dde9fa';
      g.fillText(subTxt, 320, 76);
      anim.benchPlaqueTex.needsUpdate = true;
    }
  }

  // -------------------------------------------------------------------------
  // Live Opaque-Discard 4x4 MOL Flows (6 Required Species + Live #flows Counters)
  //   dntps, rntps, aa_trna, atp, gtp, drug_efflux
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    dntps: ['dNTPs (Replication & proofread)', '#45ecff', 0, 0.27],
    rntps: ['rNTPs (RNA Pol II transcription)', '#7c9cff', 1, 0.27],
    aa_trna: ['Charged aa-tRNA (A-site load)', '#5cf5d8', 2, 0.27],
    atp: ['ATP (Helicase, Hsp70 & TRiC)', '#ffe85c', 3, 0.27],
    gtp: ['GTP (80S ribosome ratchet)', '#ff94dc', 4, 0.27],
    drug_efflux: ['Fluoroquinolone (AcrB efflux)', '#6effb0', 5, 0.27],
  };

  function glyph(g: CanvasRenderingContext2D, k: number, x: number, y: number, s: number, fill = '#ffffff') {
    const P = (u: number, v: number): [number, number] => [x + u * s, y + v * s];
    const ink = '#0c121e';
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
      case 0: // dNTPs
        drawPoly([[0.18, 0.50], [0.34, 0.30], [0.52, 0.42], [0.46, 0.68], [0.24, 0.68]], true, 0.09);
        drawBalls([[0.64, 0.50, 0.09], [0.78, 0.50, 0.09], [0.90, 0.50, 0.08]]);
        break;
      case 1: // rNTPs (with 2'-OH bead)
        drawPoly([[0.18, 0.48], [0.36, 0.28], [0.54, 0.42], [0.46, 0.68], [0.22, 0.68]], true, 0.09);
        drawBalls([[0.36, 0.82, 0.09], [0.68, 0.48, 0.09], [0.84, 0.48, 0.09]]);
        break;
      case 2: // Charged aa-tRNA L-shape
        drawPoly([[0.28, 0.22], [0.28, 0.72], [0.76, 0.72]], false, 0.12);
        drawBalls([[0.76, 0.72, 0.14], [0.28, 0.22, 0.11]]);
        break;
      case 3: // ATP
        drawBalls([[0.30, 0.50, 0.21], [0.60, 0.50, 0.09], [0.75, 0.50, 0.09], [0.90, 0.50, 0.08]]);
        break;
      case 4: // GTP
        drawPoly([[0.18, 0.34], [0.42, 0.24], [0.54, 0.50], [0.42, 0.76], [0.18, 0.66]], true, 0.09);
        drawBalls([[0.65, 0.50, 0.09], [0.79, 0.50, 0.09], [0.91, 0.50, 0.08]]);
        break;
      case 5: // Fluoroquinolone drug efflux ring
        drawPoly([[0.22, 0.50], [0.36, 0.30], [0.64, 0.30], [0.78, 0.50], [0.64, 0.70], [0.36, 0.70]], true, 0.10);
        drawBalls([[0.50, 0.18, 0.10], [0.84, 0.32, 0.09]]);
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
  const molCountEls: Record<string, HTMLElement> = {};
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
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.055, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
    if (molCountEls[type]) molCountEls[type].textContent = String(FLOW_COUNTS[type]);
  }

  const pickSite = (k: string, fb: THREE.Vector3) =>
    SITES[k]?.length ? SITES[k][Math.floor(rand() * SITES[k].length)].clone() : fb.clone();

  const STREAM_TIMERS = [
    // 1. dNTPs flowing through NPC / nucleoplasm into Pol delta & replication fork
    {
      rate: 2.3,
      acc: 0.5,
      go: () => {
        const dst = pickSite('pol_delta', REP0);
        const src = rand() < 0.55 ? NPC0.clone().add(V(-0.3, rr(-0.4, 0.4), 0.3)) : dst.clone().add(V(rr(-1.4, 1.4), rr(-1.0, 1.2), 0.8));
        emitFlow('dntps', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.35, 0.3)), dst], ['helicase', 'pol_delta', 'chromatin', 'codon_atoms'], 2.6, () =>
          splash(dst, '#45ecff', 0.34)
        );
      },
    },
    // 2. rNTPs streaming into RNA Pol II transcription bubble & Spliceosome
    {
      rate: 2.3,
      acc: 0.4,
      go: () => {
        const dst = rand() < 0.72 ? pickSite('rna_pol2', TX0) : pickSite('spliceosome', SPL0);
        const src = dst.clone().add(V(rr(-1.5, 1.5), rr(-1.3, 1.1), rr(0.5, 1.2)));
        emitFlow('rntps', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.25, 0.25)), dst], ['rna_pol2', 'pre_mrna', 'spliceosome', 'intron_lariat', 'exon_junction'], 2.5, () =>
          splash(dst, '#7c9cff', 0.34)
        );
      },
    },
    // 3. Charged aa-tRNAs streaming into hero 80S Ribosome A-site & Polysome
    {
      rate: 2.4,
      acc: 0.5,
      go: () => {
        const dst = rand() < 0.55 ? RIBO0.clone().add(V(0.46, -0.14, 0.85)) : pickSite('polysome', RIBO0);
        const src = dst.clone().add(V(rr(-1.5, 1.8), rr(-1.4, 1.4), rr(0.4, 1.2)));
        emitFlow('aa_trna', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.28, 0.25)), dst], ['ribosome_80s', 'trna_ape', 'polysome', 'mature_mrna', 'polypeptide'], 2.6, () =>
          splash(dst, '#5cf5d8', 0.36)
        );
      },
    },
    // 4. ATP fueling Helicase, Spliceosome, Hsp70 & TRiC/CCT chaperonin folding
    {
      rate: 2.5,
      acc: 0.4,
      go: () => {
        const r = rand();
        const k = r < 0.28 ? 'tric_groel' : r < 0.56 ? 'hsp70' : r < 0.80 ? 'helicase' : 'spliceosome';
        const dst = pickSite(k, FOLD0);
        const src = dst.clone().add(V(rr(-1.6, 1.6), rr(-1.3, 1.5), rr(0.5, 1.3)));
        emitFlow('atp', [src, src.clone().lerp(dst, 0.5).add(V(0.15, 0.22, 0.2)), dst], [k, 'polypeptide', 'hb_wildtype'], 2.5, () =>
          splash(dst, '#ffe85c', 0.36)
        );
      },
    },
    // 5. GTP driving EF-Tu/EF-G 80S ribosome ratcheting & NPC Ran-GTP export
    {
      rate: 2.1,
      acc: 0.4,
      go: () => {
        const dst = rand() < 0.65 ? pickSite('ribosome_80s', RIBO0) : pickSite('npc', NPC0);
        const src = dst.clone().add(V(rr(-1.4, 1.6), rr(-1.2, 1.3), rr(0.5, 1.2)));
        emitFlow('gtp', [src, src.clone().lerp(dst, 0.5).add(V(0, 0.25, 0.2)), dst], ['ribosome_80s', 'trna_ape', 'npc', 'mature_mrna'], 2.5, () =>
          splash(dst, '#ff94dc', 0.34)
        );
      },
    },
    // 6. Fluoroquinolone antibiotic molecules actively pumped out by AcrB (accelerated in acrb_sel!)
    {
      rate: 2.0,
      acc: 0.5,
      go: () => {
        const mult = mutation === 'acrb_sel' ? 2 : 1;
        for (let m = 0; m < mult; m++) {
          const base = acrbBenchGroup.position;
          const src = base.clone().add(V(rr(-0.55, 0.55), -0.95, rr(0.05, 0.55)));
          const mid = base.clone().add(V(0.15, 0.25, 0.45));
          const dst = base.clone().add(V(rr(-0.45, 0.75), 1.85, rr(0.15, 0.65)));
          emitFlow('drug_efflux', [src, mid, dst], ['acrb_pocket', 'hb_sickle_fiber', 'hb_wildtype'], mutation === 'acrb_sel' ? 1.85 : 2.7, () =>
            splash(dst, '#6effb0', 0.38)
          );
        }
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
  // Interactive Controls: #spliceBtn (isoform_a <-> isoform_b) &
  //                       #mutBtn (hba_wt -> hbs_mut -> acrb_sel)
  // -------------------------------------------------------------------------
  const spliceBtn = document.getElementById('spliceBtn');
  const mutBtn = document.getElementById('mutBtn');
  const subEl = document.getElementById('sub');

  function refreshSubtitle() {
    if (!subEl) return;
    const spTxt = splice === 'isoform_a' ? 'Isoform A (Exons 1+2+3)' : 'Isoform B (Exon 2 Skipped in Lariat)';
    const muTxt = MUT_LABEL[mutation];
    subEl.textContent = `Cryo-EM dark-field corridor · Nucleus → 8-fold NPC → Cytosol · 11 real RCSB PDBs · ${spTxt} · ${muTxt}`;
  }

  function applySpliceVisuals() {
    const isA = splice === 'isoform_a';
    spliceIsoAGroup.visible = isA;
    spliceIsoBGroup.visible = !isA;
    polyIsoAGroup.visible = isA;
    polyIsoBGroup.visible = !isA;
    if (spliceBtn) {
      spliceBtn.textContent = SPLICE_LABEL[splice];
      spliceBtn.classList.toggle('isoform_b', !isA);
    }
    redrawDynamicPlaques();
    refreshSubtitle();
  }

  function applyMutationVisuals() {
    // Spotlight the selected evolutionary variant cleanly on the Mutation Bench while keeping all 3 visible for comparison!
    if (mutation === 'hba_wt') {
      hbaBenchGroup.position.copy(BENCH0).add(V(-0.35, 0.28, 0.65));
      hbaBenchGroup.scale.setScalar(1.14);
      hbsFiberGroup.position.copy(BENCH0).add(V(1.45, 0.05, -0.35));
      hbsFiberGroup.scale.set(0.74, 0.62, 0.74);
      acrbBenchGroup.position.copy(BENCH0).add(V(-1.72, -0.10, -0.55));
      acrbBenchGroup.scale.setScalar(0.76);
      benchLamp.color.set('#ffc894');
      benchLamp.intensity = 16.5;
    } else if (mutation === 'hbs_mut') {
      hbsFiberGroup.position.copy(BENCH0).add(V(0.15, 0.56, 0.72));
      hbsFiberGroup.scale.set(1.06, 1.02, 1.06);
      hbaBenchGroup.position.copy(BENCH0).add(V(-1.75, 0.12, -0.45));
      hbaBenchGroup.scale.setScalar(0.76);
      acrbBenchGroup.position.copy(BENCH0).add(V(2.05, -0.10, -0.55));
      acrbBenchGroup.scale.setScalar(0.74);
      benchLamp.color.set('#ff9e58');
      benchLamp.intensity = 20.5;
    } else {
      acrbBenchGroup.position.copy(BENCH0).add(V(0.15, 0.25, 0.76));
      acrbBenchGroup.scale.setScalar(1.22);
      hbaBenchGroup.position.copy(BENCH0).add(V(-1.75, 0.12, -0.45));
      hbaBenchGroup.scale.setScalar(0.74);
      hbsFiberGroup.position.copy(BENCH0).add(V(1.98, 0.05, -0.48));
      hbsFiberGroup.scale.set(0.72, 0.66, 0.72);
      benchLamp.color.set('#74ffc2');
      benchLamp.intensity = 19.5;
    }

    // Switch live Atomic Codon H-Bond Inset!
    atomWtGroup.visible = mutation === 'hba_wt';
    atomHbsGroup.visible = mutation === 'hbs_mut';
    atomAcrbGroup.visible = mutation === 'acrb_sel';

    // Update Val6 hydrophobic glow & AcrB remodeled pocket glow
    anim.val6GlowMats.forEach(m => {
      m.emissiveIntensity = mutation === 'hbs_mut' ? 1.65 : 0.55;
    });
    if (anim.acrbPocketMat) {
      anim.acrbPocketMat.emissiveIntensity = mutation === 'acrb_sel' ? 1.75 : 0.55;
      anim.acrbPocketMat.color.set(mutation === 'acrb_sel' ? '#6effbd' : '#42c49c');
    }

    if (mutBtn) {
      mutBtn.textContent = MUT_LABEL[mutation];
      mutBtn.classList.remove('hbs_mut', 'acrb_sel');
      if (mutation === 'hbs_mut') mutBtn.classList.add('hbs_mut');
      if (mutation === 'acrb_sel') mutBtn.classList.add('acrb_sel');
    }

    // Refresh SITES positions for the moved bench clusters so pick/focus/flows track smoothly
    SITES.hb_wildtype = [hbaBenchGroup.position.clone().add(V(0, 0.15, 0.25)), hbaBenchGroup.position.clone().add(V(-0.7, 0.6, 0))];
    SITES.hb_sickle_fiber = [hbsFiberGroup.position.clone(), hbsFiberGroup.position.clone().add(V(0, 0.75, 0.2)), hbsFiberGroup.position.clone().add(V(0, -0.75, 0.2))];
    SITES.acrb_pocket = [acrbBenchGroup.position.clone().add(V(0, 0.25, 0.2)), acrbBenchGroup.position.clone().add(V(0, -0.35, 0.1))];

    redrawDynamicPlaques();
    refreshSubtitle();
  }

  function setSplice(next?: SpliceKey, silent = false) {
    const target: SpliceKey =
      next && SPLICE_ORDER.includes(next)
        ? next
        : SPLICE_ORDER[(SPLICE_ORDER.indexOf(splice) + 1) % SPLICE_ORDER.length];
    splice = target;
    applySpliceVisuals();
    if (!silent && EMBED) say();
  }

  function setMutation(next?: MutationKey, silent = false) {
    const target: MutationKey =
      next && MUT_ORDER.includes(next)
        ? next
        : MUT_ORDER[(MUT_ORDER.indexOf(mutation) + 1) % MUT_ORDER.length];
    mutation = target;
    applyMutationVisuals();
    if (!silent && EMBED) say();
  }

  if (spliceBtn) {
    spliceBtn.onclick = () => {
      setSplice();
    };
  }
  if (mutBtn) {
    mutBtn.onclick = () => {
      setMutation();
    };
  }

  // -------------------------------------------------------------------------
  // Resize, HUD Legend (0-Overflow Compact Layout), Flows & Highlight System
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
      `<div class="row">Bases ${'ATGCU'.split('').map(b => `<span class="chip" style="background:${BASE[b]}">${b}</span>`).join('')}</div>` +
      `<div class="row"><span class="bar" style="background:#ff8d4a"></span>E1 <span class="bar" style="background:#3af2d8;margin-left:3px"></span>E2 <span class="bar" style="background:#ff62a8;margin-left:3px"></span>E3 <span class="bar" style="background:#9b7ed8;margin-left:3px"></span>Intron <span class="bar" style="background:${BACKBONE[0]};margin-left:3px"></span>DNA</div>`;
    legend.append(keyEl);
  }

  const tipBox = document.getElementById('tip');
  const TIP0 = 'Trace one eukaryotic gene from DNA Replication & RNA Pol II through Spliceosome Alternative Splicing (Isoform A/B), Nuclear Pore export, 80S Translation, and Live HbA → HbS / AcrB Point Mutations.';
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
      t.className = 'mn';
      t.textContent = name;
      const cnt = document.createElement('span');
      cnt.className = 'cnt';
      cnt.textContent = '0';
      molCountEls[k] = cnt;
      it.append(cv, t, cnt);
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
  let animClock = 0;
  let last = performance.now();

  const viewBtn = document.getElementById('view');
  if (viewBtn) {
    viewBtn.onclick = e => {
      view = (view + 1) % VIEWS.length;
      const [name, p, t] = VIEWS[view];
      curView = name;
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
      updateAllCuts();
      (e.target as HTMLElement).textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
    };
  }
  const flowBtn = document.getElementById('flow');
  if (flowBtn) {
    flowBtn.onclick = e => {
      flowsOn = !flowsOn;
      flowPts.visible = fxPts.visible = flowsOn;
      (e.target as HTMLElement).textContent = `Flows: ${flowsOn ? 'on' : 'off'}`;
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
      a.download = `central-dogma-${splice}-${mutation}.png`;
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
    if (m.pos) return { p: V(...m.pos), t: V(...(m.target ?? m.tgt ?? [0.1, -0.3, 0])) };
    return null;
  }

  function flyTo(m: any) {
    if (m.splice) setSplice(m.splice, true);
    if (m.mutation) setMutation(m.mutation, true);
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) {
        view = idx;
        curView = m.view;
        if (viewBtn) viewBtn.textContent = `View: ${m.view}`;
      }
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

  const fp = V(), ft = V(), qa = V(), qb = V(), look = V(), right = V(), C_PIV = V(0.1, -0.25, 0.0);
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

  // Exact dynamic tag coordinates for ALL 20 parts across ALL 6 views!
  function pointsOf(vName: string): Record<string, THREE.Vector3> {
    const first = (k: string, fb: THREE.Vector3) => (SITES[k]?.[0] ?? fb).clone();
    const base: Record<string, THREE.Vector3> = {
      chromatin: first('chromatin', NUC0.clone().add(V(-2.2, 1.8, 0.2))),
      helicase: first('helicase', REP0.clone()),
      pol_delta: first('pol_delta', REP0.clone().add(V(1.1, 0.55, 0.25))),
      rna_pol2: first('rna_pol2', TX0.clone()),
      pre_mrna: first('pre_mrna', V(-4.35, 0.92, 0.96)),
      spliceosome: first('spliceosome', SPL0.clone()),
      intron_lariat: first('intron_lariat', SPL0.clone().add(V(-0.08, 1.38, 0.64))),
      exon_junction: first('exon_junction', SPL0.clone().add(V(0.75, -0.05, 0.82))),
      npc: first('npc', NPC0.clone()),
      mature_mrna: first('mature_mrna', V(0.85, 1.72, 0.65)),
      ribosome_80s: first('ribosome_80s', RIBO0.clone()),
      trna_ape: first('trna_ape', RIBO0.clone().add(V(0.15, -0.10, 0.92))),
      polypeptide: first('polypeptide', V(3.45, 3.35, 0.48)),
      polysome: first('polysome', V(3.55, 0.45, 0.25)),
      hsp70: first('hsp70', V(3.75, 3.45, 0.55)),
      tric_groel: first('tric_groel', FOLD0.clone().add(V(0.68, 0.05, 0.15))),
      hb_wildtype: first('hb_wildtype', hbaBenchGroup.position.clone()),
      hb_sickle_fiber: first('hb_sickle_fiber', hbsFiberGroup.position.clone()),
      acrb_pocket: first('acrb_pocket', acrbBenchGroup.position.clone()),
      codon_atoms: ATOM0.clone(),
    };
    if (vName === 'replisome') {
      base.helicase = REP0.clone();
      base.pol_delta = SITES.pol_delta[0]?.clone() ?? REP0.clone().add(V(1.1, 0.55, 0.25));
      base.rna_pol2 = TX0.clone();
      base.pre_mrna = SITES.pre_mrna[0]?.clone() ?? V(-4.6, 0.7, 0.95);
    } else if (vName === 'spliceosome') {
      base.spliceosome = SPL0.clone();
      base.intron_lariat = SPL0.clone().add(V(-0.06, splice === 'isoform_b' ? 1.52 : 1.32, 0.66));
      base.exon_junction = SPL0.clone().add(V(0.55, -0.06, 0.85));
    } else if (vName === 'translation') {
      base.npc = NPC0.clone();
      base.ribosome_80s = RIBO0.clone();
      base.trna_ape = RIBO0.clone().add(V(0.10, -0.10, 0.92));
      base.polysome = SITES.polysome[2]?.clone() ?? V(3.55, 0.65, 0.22);
    } else if (vName === 'mutation_bench') {
      base.hsp70 = SITES.hsp70[0]?.clone() ?? V(3.65, 3.45, 0.58);
      base.tric_groel = SITES.tric_groel[0]?.clone() ?? FOLD0.clone().add(V(0.68, 0.05, 0.15));
      base.hb_wildtype = hbaBenchGroup.position.clone();
      base.hb_sickle_fiber = hbsFiberGroup.position.clone();
      base.acrb_pocket = acrbBenchGroup.position.clone();
    } else if (vName === 'atoms') {
      base.codon_atoms = ATOM0.clone();
    }
    return base;
  }

  function focusOf(k: string) {
    const P = pointsOf(curView);
    const RAD: Record<string, number> = {
      chromatin: 3.8, helicase: 2.0, pol_delta: 2.1, rna_pol2: 2.2, pre_mrna: 2.2,
      spliceosome: 2.5, intron_lariat: 2.0, exon_junction: 2.1, npc: 2.5, mature_mrna: 2.6,
      ribosome_80s: 2.5, trna_ape: 2.0, polypeptide: 2.3, polysome: 3.1, hsp70: 2.2,
      tric_groel: 2.4, hb_wildtype: 2.4, hb_sickle_fiber: 2.6, acrb_pocket: 2.5, codon_atoms: 2.2,
    };
    const dir = k === 'codon_atoms' ? V(0.0, 0.02, 1.0).normalize() : V(0.14, 0.14, 0.98).normalize();
    return P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.4, dir } : null;
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    chromatin: ['helicase', 'pol_delta', 'rna_pol2'],
    helicase: ['pol_delta', 'chromatin'],
    pol_delta: ['helicase', 'chromatin'],
    rna_pol2: ['pre_mrna', 'chromatin'],
    spliceosome: ['intron_lariat', 'exon_junction', 'pre_mrna'],
    npc: ['mature_mrna', 'exon_junction'],
    ribosome_80s: ['trna_ape', 'mature_mrna', 'polypeptide', 'polysome'],
    polysome: ['ribosome_80s', 'mature_mrna', 'polypeptide'],
    hsp70: ['tric_groel', 'polypeptide'],
    tric_groel: ['hsp70', 'polypeptide', 'hb_wildtype'],
    hb_wildtype: ['hb_sickle_fiber', 'codon_atoms'],
    hb_sickle_fiber: ['hb_wildtype', 'codon_atoms'],
    acrb_pocket: ['codon_atoms'],
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
    if (m.splice) setSplice(m.splice, true);
    if (m.mutation) setMutation(m.mutation, true);
    if (m.mode) {
      if (SPLICE_ORDER.includes(m.mode)) setSplice(m.mode, true);
      else if (MUT_ORDER.includes(m.mode)) setMutation(m.mode, true);
    }
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
      updateAllCuts();
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
  // Molecular Choreography Helper (used in both live frame() & headless step())
  // -------------------------------------------------------------------------
  function animateMachines(dt: number) {
    animClock += dt;
    const t = animClock;

    // 1. Helicase ring unzipping spin + Pol delta mismatch proofreading pulse
    if (anim.helicaseHero) anim.helicaseHero.rotation.x += dt * 0.55;
    if (anim.proofPulseMesh && anim.proofPulseMat) {
      const cyc = (t * 0.65) % 1.0;
      const pulse = Math.sin(cyc * Math.PI);
      anim.proofPulseMesh.scale.setScalar(0.75 + 0.65 * pulse);
      anim.proofPulseMat.emissiveIntensity = 0.55 + 1.55 * pulse;
      anim.proofPulseMat.color.set(cyc > 0.68 ? '#4effb2' : '#ff6644');
    }

    // 2. Spliceosome intron lariat gentle breathing
    const larGrp = splice === 'isoform_a' ? anim.lariatIsoAGroup : anim.lariatIsoBGroup;
    if (larGrp) {
      larGrp.position.y = 0.06 * Math.sin(t * 2.1);
    }

    // 3. Hero 80S Ribosome A -> P -> E tRNA ratcheting choreography
    if (anim.riboHeroGroup) {
      anim.riboHeroGroup.rotation.z = 0.032 * Math.sin(t * 1.9);
    }
    const ratch = Math.sin(t * 2.2) * 0.11;
    if (anim.trnaA) {
      anim.trnaA.position.x = 0.46 - ratch * 0.65;
      anim.trnaA.position.y = -0.14 + Math.max(0, Math.sin(t * 2.2)) * 0.08;
    }
    if (anim.trnaP) {
      anim.trnaP.position.x = -0.02 - ratch * 0.45;
      anim.trnaP.position.y = -0.06 + 0.04 * Math.cos(t * 2.2);
    }
    if (anim.trnaE) {
      anim.trnaE.position.x = -0.54 - Math.abs(ratch) * 0.55;
      anim.trnaE.position.y = -0.16 - Math.max(0, Math.sin(t * 2.2)) * 0.06;
    }

    // 4. TRiC / CCT ATP-gated apical iris breathing
    if (anim.tricLidGroup) {
      const iris = 0.92 + 0.14 * Math.sin(t * 1.8);
      anim.tricLidGroup.scale.set(iris, 1.0, iris);
      anim.tricLidGroup.rotation.y += dt * 0.42;
    }

    // 5. AcrB fluoroquinolone antibiotic extrusion stream
    const effluxSpeed = mutation === 'acrb_sel' ? 0.68 : 0.28;
    anim.acrbDrugs.forEach(d => {
      const u = (d.t0 + t * effluxSpeed) % 1.0;
      const laneAng = (d.lane / 3) * Math.PI * 2 + u * 2.4;
      const rad = 0.34 * (1 - u * 0.55) + 0.16 * u;
      d.mesh.position.set(Math.cos(laneAng) * rad, -0.78 + u * 2.15, Math.sin(laneAng) * rad + 0.24);
      const sc = Math.sin(u * Math.PI) * (mutation === 'acrb_sel' ? 1.18 : 0.72);
      d.mesh.scale.setScalar(Math.max(0.05, sc));
    });
  }

  // -------------------------------------------------------------------------
  // Main Animation Loop
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 4.0) / 22));
      cell.rotation.y = 0.055 * Math.sin(sway * 0.10);
      animateMachines(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
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
    buildNucleusAndStagesAB(T);
    buildSpliceosomeStage(T);
    buildNuclearPoreComplex();
    buildTranslationStage(T);
    buildFoldingAndMutationBench(T);
    buildAtomicCodonInset();
    applySpliceVisuals();
    applyMutationVisuals();
    animateMachines(0.2);
    // Warm up live streams so all 6 molecular species shine on frame 1!
    for (let s = 0; s < 140; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    cell.updateMatrixWorld();
    updateAllCuts();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // Explorer ?embed postMessage Protocol & window.__cell Debug Contract
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
      splice,
      mutation,
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
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]), splice, mutation });
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
        if (viewBtn) viewBtn.textContent = `View: ${name}`;
        const P = pointsOf(m.view);
        tagPts = (m.points ?? m.tags ?? []).map((k: string) => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'splice') setSplice(m.splice, true);
      if (m.cmd === 'mutation') setMutation(m.mutation, true);
      if (m.cmd === 'mode') {
        if (SPLICE_ORDER.includes(m.mode)) setSplice(m.mode, true);
        else if (MUT_ORDER.includes(m.mode)) setMutation(m.mode, true);
      }
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
    get splice() { return splice; },
    get mutation() { return mutation; },
    setSplice,
    setMutation,
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
    step: (dt = 0.05, n = 1) => {
      for (let i = 0; i < n; i++) {
        animateMachines(dt);
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
