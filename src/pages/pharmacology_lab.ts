// @ts-nocheck
import * as THREE from 'three';
import { PDB_IMMUNE_PHARMA } from '../molecules/pdb_immune_pharma.js';
import { PDB_CENTRAL_DOGMA } from '../molecules/pdb_central_dogma.js';
import {
  runBiologyApp,
  createCinemaStudio,
  makeCinemaMembraneMat,
  applyBacklitSSS,
  makeOrganicWaveNormalMap,
  shellGeo,
  blobGeo,
  makeCinemaImpostorMat,
  makeCinemaStickMat,
  buildPdbSurfaceGeo,
  makeProteinBumpTexture,
  makeSculptedMesh,
  col,
} from '../index.js';

runBiologyApp(20261123, ({ random, geometry, pdb }) => {
  if (/[?&]embed\b/.test(location.search)) document.documentElement.classList.add('embed');

  const { rand, rr, fbm } = random;
  const { UP, across } = geometry;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

  // -------------------------------------------------------------------------
  // Spatial Architecture & Multi-Scale Curriculum Capstone Framing
  //   Upper Tier (Y = +3.30): 5-Organism Drug x Target Selectivity Bench
  //     1. E. coli (-5.80)   2. Mycoplasma (-2.90)   3. Chlamydia (0.00)
  //     4. SARS-CoV-2 / HIV-1 (+2.90)   5. Human Epithelial Cell (+5.80)
  //   Lower Tier (Y = -2.05): 4 Real RCSB PDB Molecular Mechanism Stations + Optical Lens
  //     Station 1 (-5.45): Peptidoglycan Wall + PBP-Penicillin G (1PWC) vs Wall-less Strip
  //     Station 2 (-1.55): Bacterial 70S (50S 4V7U + 30S 1HNW) vs Human Cytosolic 80S (4UG0)
  //     Station 3 (+2.25): SARS-CoV-2 RdRp + Remdesivir (7BV2) & HIV-1 RT + AZT (3V4I)
  //     Station 4 (+5.85): 90 nm mRNA-LNP -> Endosome Escape -> Cytosolic 80S OUTSIDE Intact Nucleus
  //     Optical Inset (+5.85, -4.35): Circular drug_atoms lens (beta-lactam-Ser, AZT, m1Psi)
  // -------------------------------------------------------------------------
  const NM = 0.25;

  const BENCH_Y = 3.30;
  const BENCH_Z = 0.20;
  const ECOLI_C = V(-5.80, BENCH_Y, BENCH_Z);
  const MYCO_C = V(-2.90, BENCH_Y, BENCH_Z);
  const CHLAM_C = V(0.00, BENCH_Y, BENCH_Z);
  const VIRUS_C = V(2.90, BENCH_Y, BENCH_Z);
  const HUMAN_C = V(5.80, BENCH_Y, BENCH_Z);

  const DECK_Y = -2.05;
  const DECK_Z = 0.30;
  const S1_PBP = V(-5.55, DECK_Y + 0.15, DECK_Z);
  const S2_70S = V(-2.45, DECK_Y + 0.05, DECK_Z);
  const S2_80S = V(-0.40, DECK_Y + 0.05, DECK_Z);
  const S3_RDRP = V(1.72, DECK_Y + 0.72, DECK_Z);
  const S3_HIVRT = V(2.96, DECK_Y - 0.56, DECK_Z + 0.15);
  const S4_LNP = V(4.80, DECK_Y + 1.55, DECK_Z + 0.25);
  const S4_ENDO = V(5.88, DECK_Y + 1.05, DECK_Z + 0.18);
  const S4_MRNA = V(5.55, DECK_Y + 0.02, DECK_Z + 0.45);
  const S4_NUC = V(7.12, DECK_Y + 0.38, DECK_Z - 0.10);
  const ATOM_C = V(5.80, -4.52, 0.95);

  // Exact 5 required camera VIEWS (NON-NEGOTIABLE Phase 18B contract)
  const VIEWS: Array<[string, THREE.Vector3, THREE.Vector3]> = [
    ['overview', V(0.15, 0.18, 36.8), V(0.15, -0.42, 0.25)],
    ['beta_lactam', V(-5.15, -1.60, 11.4), V(-5.15, -2.08, 0.35)],
    ['ribosome_70s_80s', V(-1.45, -1.55, 12.2), V(-1.42, -2.05, 0.35)],
    ['antivirals', V(2.35, -1.60, 12.6), V(2.35, -2.05, 0.38)],
    ['mrna_vaccine', V(5.85, -2.15, 14.9), V(5.85, -2.38, 0.45)],
  ];
  let view = 0;
  let curView = 'overview';

  type DrugMode = 'penicillin' | 'macrolide_tetra' | 'antivirals' | 'mrna_lnp';
  const MODE_ORDER: readonly DrugMode[] = ['penicillin', 'macrolide_tetra', 'antivirals', 'mrna_lnp'];
  const MODE_LABEL: Record<DrugMode, string> = {
    penicillin: 'Drug: Penicillin G (β-Lactam)',
    macrolide_tetra: 'Drug: Macrolide / Tetracycline (70S)',
    antivirals: 'Drug: Remdesivir + AZT (Antivirals)',
    mrna_lnp: 'Drug: mRNA-LNP Vaccine (Spike)',
  };

  interface OutcomeSpec {
    readonly title: string;
    readonly sub: string;
    readonly hudSub: string;
    readonly rows: ReadonlyArray<{ readonly org: string; readonly badge: string; readonly cls: 'lysis' | 'halted' | 'spared' | 'primed' | 'none' }>;
  }
  const OUTCOMES: Record<DrugMode, OutcomeSpec> = {
    penicillin: {
      title: 'Penicillin G (β-Lactam)',
      sub: 'Covalently acylates PBP Ser62 · Blocks PG cross-links',
      hudSub: 'PENICILLIN G (β-Lactam) · E. coli osmotic LYSIS via PBP (1PWC) arrest · Wall-less Mycoplasma, Viruses & Human cells SPARED',
      rows: [
        { org: 'E. coli (Walled)', badge: 'LYSIS', cls: 'lysis' },
        { org: 'Mycoplasma', badge: 'NO WALL · SPARED', cls: 'spared' },
        { org: 'Chlamydia', badge: 'STALLED', cls: 'halted' },
        { org: 'SARS-CoV-2 / HIV', badge: 'NO TARGET', cls: 'none' },
        { org: 'Human Cell', badge: 'SPARED', cls: 'spared' },
      ],
    },
    macrolide_tetra: {
      title: 'Azithromycin & Tetracycline',
      sub: 'Plug bacterial 50S tunnel (4V7U) & 30S A-site (1HNW)',
      hudSub: 'MACROLIDE + TETRACYCLINE · All 3 bacteria (E. coli, Mycoplasma, Chlamydia) 70S HALTED · Viruses have 0 ribosomes · Human 80S SPARED',
      rows: [
        { org: 'E. coli (70S)', badge: '70S HALTED', cls: 'halted' },
        { org: 'Mycoplasma (70S)', badge: '70S HALTED', cls: 'halted' },
        { org: 'Chlamydia (70S)', badge: '70S HALTED', cls: 'halted' },
        { org: 'SARS-CoV-2 / HIV', badge: '0 RIBO · NONE', cls: 'none' },
        { org: 'Human Cell (80S)', badge: 'SPARED · ACTIVE', cls: 'spared' },
      ],
    },
    antivirals: {
      title: 'Remdesivir-TP + AZT-TP',
      sub: 'Stall viral RdRp at i+3 (7BV2) & HIV-1 RT at 3′-N₃ (3V4I)',
      hudSub: 'DIRECT-ACTING ANTIVIRALS · SARS-CoV-2 RdRp (7BV2) & HIV-1 RT (3V4I) POLYMERASE HALTED · Bacteria & Human cells SPARED',
      rows: [
        { org: 'E. coli', badge: 'NO TARGET', cls: 'none' },
        { org: 'Mycoplasma', badge: 'NO TARGET', cls: 'none' },
        { org: 'Chlamydia', badge: 'NO TARGET', cls: 'none' },
        { org: 'SARS-CoV-2 / HIV', badge: 'POLYMERASE HALTED', cls: 'lysis' },
        { org: 'Human Cell', badge: 'SPARED', cls: 'spared' },
      ],
    },
    mrna_lnp: {
      title: 'mRNA-LNP Vaccine (m¹Ψ Spike)',
      sub: 'Cytosolic 80S translation OUTSIDE intact nucleus',
      hudSub: 'mRNA-LNP VACCINE · 90 nm LNP escapes endosome → cytosolic 80S (4UG0) makes Spike OUTSIDE intact nuclear envelope · DNA UNTOUCHED',
      rows: [
        { org: 'E. coli', badge: 'UNAFFECTED', cls: 'none' },
        { org: 'Mycoplasma', badge: 'UNAFFECTED', cls: 'none' },
        { org: 'Chlamydia', badge: 'UNAFFECTED', cls: 'none' },
        { org: 'SARS-CoV-2', badge: 'NEUTRALIZED', cls: 'primed' },
        { org: 'Human Cell', badge: 'PRIMED · DNA SAFE', cls: 'spared' },
      ],
    },
  };

  let mode: DrugMode = 'penicillin';

  // -------------------------------------------------------------------------
  // Cinema Dark-Field WebGL2 Microscopy Studio
  // -------------------------------------------------------------------------
  const studio = createCinemaStudio({
    fov: 30,
    near: 0.08,
    far: 560,
    camPos: [VIEWS[0][1].x, VIEWS[0][1].y, VIEWS[0][1].z],
    target: [VIEWS[0][2].x, VIEWS[0][2].y, VIEWS[0][2].z],
    bgInner: '#14223b',
    bgMid: '#070e1d',
    bgOuter: '#020409',
    keyColor: '#fff4e8',
    keyIntensity: 2.9,
    rimColor: '#72ceff',
    rimIntensity: 1.75,
    lampColor: '#ffaa90',
    lampIntensity: 13.5,
    lampPos: [-4.5, 2.8, 7.0],
    bloomStrength: 0.22,
    bloomRadius: 0.45,
    bloomThreshold: 0.89,
    exposure: 0.95,
    bokehCount: 220,
    bokehColor: '#72c6ff',
    rand,
  });
  const { renderer, scene, camera, controls, composer, bloom, lens, key, lamp } = studio;

  // Station-focused microscopy accent lamps
  const s1Lamp = new THREE.PointLight('#ff8466', 9.5, 22, 2);
  s1Lamp.position.set(S1_PBP.x, S1_PBP.y + 1.8, 5.4);
  const s2Lamp = new THREE.PointLight('#4ce6ff', 10.5, 24, 2);
  s2Lamp.position.set(-1.45, DECK_Y + 1.5, 5.8);
  const s3Lamp = new THREE.PointLight('#b878ff', 10.5, 22, 2);
  s3Lamp.position.set(2.35, DECK_Y + 1.4, 5.6);
  const s4Lamp = new THREE.PointLight('#48f2b8', 11.0, 24, 2);
  s4Lamp.position.set(5.85, DECK_Y + 1.4, 5.8);
  const benchLamp = new THREE.PointLight('#94d4ff', 10.0, 28, 2);
  benchLamp.position.set(0.0, BENCH_Y + 1.8, 6.4);
  scene.add(s1Lamp, s2Lamp, s3Lamp, s4Lamp, benchLamp);

  const cell = new THREE.Group();
  scene.add(cell);

  const cutExtras = new THREE.Group();
  cell.add(cutExtras);

  // Per-organism front cutaway planes for clean anatomical interiors
  const makeCutPlanes = (c: THREE.Vector3, dx = 0.04, dz = 0.06) => [
    new THREE.Plane(V(-1, 0, 0), c.x + dx),
    new THREE.Plane(V(0, 0, -1), c.z + dz),
  ];
  const ECOLI_CUT_L = [new THREE.Plane(V(0, 0, -1), ECOLI_C.z + 0.16)];
  const MYCO_CUT_L = makeCutPlanes(MYCO_C, 0.02, 0.06);
  const CHLAM_CUT_L = makeCutPlanes(CHLAM_C, 0.02, 0.06);
  const VIRUS_CUT_L = [new THREE.Plane(V(0, 0, -1), VIRUS_C.z + 0.10)];
  const HUMAN_CUT_L = makeCutPlanes(HUMAN_C, 0.02, 0.06);
  const ENDO_CUT_L = [new THREE.Plane(V(0, 0, -1), S4_ENDO.z + 0.16)];

  const ECOLI_CUT = ECOLI_CUT_L.map(p => p.clone());
  const MYCO_CUT = MYCO_CUT_L.map(p => p.clone());
  const CHLAM_CUT = CHLAM_CUT_L.map(p => p.clone());
  const VIRUS_CUT = VIRUS_CUT_L.map(p => p.clone());
  const HUMAN_CUT = HUMAN_CUT_L.map(p => p.clone());
  const ENDO_CUT = ENDO_CUT_L.map(p => p.clone());

  const ECOLI_CLIP = { clippingPlanes: ECOLI_CUT, clipIntersection: false, clipShadows: true };
  const MYCO_CLIP = { clippingPlanes: MYCO_CUT, clipIntersection: true, clipShadows: true };
  const CHLAM_CLIP = { clippingPlanes: CHLAM_CUT, clipIntersection: true, clipShadows: true };
  const VIRUS_CLIP = { clippingPlanes: VIRUS_CUT, clipIntersection: false, clipShadows: true };
  const HUMAN_CLIP = { clippingPlanes: HUMAN_CUT, clipIntersection: true, clipShadows: true };
  const ENDO_CLIP = { clippingPlanes: ENDO_CUT, clipIntersection: false, clipShadows: true };

  let cutOn = true;
  function updateAllCuts() {
    studio.updateCut(cell, cutOn);
    const applySet = (local: THREE.Plane[], world: THREE.Plane[]) => {
      world.forEach((p, i) => {
        p.copy(local[i]);
        if (!cutOn) p.constant = 1e4;
        p.applyMatrix4(cell.matrixWorld);
      });
    };
    applySet(ECOLI_CUT_L, ECOLI_CUT);
    applySet(MYCO_CUT_L, MYCO_CUT);
    applySet(CHLAM_CUT_L, CHLAM_CUT);
    applySet(VIRUS_CUT_L, VIRUS_CUT);
    applySet(HUMAN_CUT_L, HUMAN_CUT);
    applySet(ENDO_CUT_L, ENDO_CUT);
  }

  const nmap = makeOrganicWaveNormalMap(rand, 256, 28, 2.7);
  const bump = (rx = 10, ry = 8) => {
    const t = nmap.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    return t;
  };
  const protBump = makeProteinBumpTexture(256);

  // -------------------------------------------------------------------------
  // Exact 18 PARTS & REG Keys (NON-NEGOTIABLE Phase 18B Contract)
  // -------------------------------------------------------------------------
  const PARTS: Array<[string, string, string]> = [
    ['bench_ecoli', 'E. coli (Gram− walled rod · 70S)', '#ff687c'],
    ['bench_myco', 'Mycoplasma (wall-less · 70S)', '#52d6ff'],
    ['bench_chlam', 'Chlamydia (intracellular · 70S)', '#ffba52'],
    ['bench_virus', 'SARS-CoV-2 & HIV-1 (0 wall/ribo)', '#d474ff'],
    ['bench_human', 'Human cell (80S · intact DNA)', '#42f0a8'],
    ['pg_wall', 'Peptidoglycan wall & osmotic lysis', '#f5b84c'],
    ['pbp_penicillin', 'PBP transpeptidase + Penicillin (1PWC)', '#ff5872'],
    ['ribo_70s', 'Bacterial 70S (50S 4V7U · 30S 1HNW)', '#3cd4ea'],
    ['macrolide_tunnel', 'Macrolide plugging 50S exit tunnel', '#ff54b0'],
    ['tetra_asite', 'Tetracycline blocking 30S A-site', '#ffc844'],
    ['ribo_80s_safe', 'Human cytosolic 80S (4UG0 · spared)', '#42f2a2'],
    ['rdrp_remdesivir', 'SARS-CoV-2 RdRp + Remdesivir (7BV2)', '#6898ff'],
    ['hiv_rt_azt', 'HIV-1 RT + 3′-N₃ AZT-TP (3V4I)', '#d668ff'],
    ['mrna_lnp', '90 nm ionizable mRNA-LNP carrier', '#52e4ff'],
    ['endosome_escape', 'Acidifying endosome fusion escape', '#ffbe64'],
    ['vaccine_mrna', 'm¹Ψ Spike mRNA on cytosolic 80S', '#48f8c4'],
    ['intact_nucleus', 'Intact nuclear envelope & host DNA', '#a66cff'],
    ['drug_atoms', 'Atomic inset (β-lactam · AZT · m¹Ψ)', '#8ee8ff'],
  ];

  const INFO: Record<string, [string, string]> = {
    bench_ecoli: [
      'Gram-negative rod wrapped in a rigid cross-linked peptidoglycan wall and bacterial 70S ribosomes',
      'Suffers osmotic lysis under Penicillin G and halts protein synthesis under macrolides/tetracyclines',
    ],
    bench_myco: [
      'Wall-less pleomorphic bacterium stabilized by a cholesterol-rich single plasma membrane and 70S ribosomes',
      'Naturally immune to Penicillin G (no peptidoglycan target) yet cleared by 70S-targeting macrolides and tetracyclines',
    ],
    bench_chlam: [
      'Obligate intracellular bacterium dividing as Reticulate Bodies inside a host inclusion vacuole',
      'Stalls into aberrant persistent bodies under β-lactams; cured by intracellularly penetrating macrolides and doxycycline',
    ],
    bench_virus: [
      'Acellular SARS-CoV-2 (+ssRNA) and HIV-1 (retrovirus) virions possessing zero cell wall and zero ribosomes',
      'Completely unaffected by antibiotics; stopped by viral polymerase inhibitors (Remdesivir, AZT) or vaccine antibodies',
    ],
    bench_human: [
      'Eukaryotic epithelial cell with wall-less membrane, cytosolic 80S ribosomes, and an intact nuclear envelope',
      'Spared by bacterial antibiotics and viral polymerase analogs; primed safely in the cytosol by mRNA-LNP vaccines',
    ],
    pg_wall: [
      'Cross-linked NAM–NAG glycan strands bridged by D-Ala–D-Ala peptide stems withstanding high turgor pressure',
      'When transpeptidation fails under β-lactams, weakened wall pores tear open and internal turgor bursts the bacterium',
    ],
    pbp_penicillin: [
      'Real RCSB PDB 1PWC bacterial Penicillin-Binding Protein (PBP) transpeptidase with catalytic Ser62 active cleft',
      'Penicillin G mimics D-Ala–D-Ala; its strained 4-membered β-lactam ring opens to form an irreversible covalent ester',
    ],
    ribo_70s: [
      'Complete bacterial 70S ribosome uniting real PDB 4V7U (50S large) and real PDB 1HNW (30S small) subunits',
      'Distinct bacterial 23S and 16S rRNA pockets create high-affinity antibiotic targets absent from human 80S ribosomes',
    ],
    macrolide_tunnel: [
      '14/15-membered macrolide lactone ring (Erythromycin/Azithromycin) wedged in the 50S exit tunnel near A2058',
      'Physically plugs the nascent peptide exit channel of bacterial 70S ribosomes to arrest protein elongation',
    ],
    tetra_asite: [
      'Rigid 4-ring Tetracycline scaffold chelated via Mg²⁺ in the bacterial 30S A-site decoding groove (16S rRNA)',
      'Sterically blocks incoming aminoacyl-tRNA from reading the mRNA codon, halting bacterial polypeptide growth',
    ],
    ribo_80s_safe: [
      'Real RCSB PDB 4UG0 human cytosolic 80S ribosome (60S + 40S) with larger eukaryotic expansion segments',
      'Divergent rRNA sequence (G vs A2058) prevents bacterial antibiotic binding while translating host and vaccine mRNAs',
    ],
    rdrp_remdesivir: [
      'Real RCSB PDB 7BV2 SARS-CoV-2 nsp12/nsp7/nsp8 RNA-dependent RNA polymerase with RNA template-primer duplex',
      'Incorporates Remdesivir-MP as an ATP mimic; three bases later (i+3) its 1′-CN group clashes with Ser861 to stall synthesis',
    ],
    hiv_rt_azt: [
      'Real RCSB PDB 3V4I HIV-1 Reverse Transcriptase p66/p51 heterodimer copying viral ssRNA into proviral cDNA',
      'Incorporates AZT-MP whose 3′-azido group lacks the 3′-OH nucleophile, causing immediate obligate chain termination',
    ],
    mrna_lnp: [
      '~90 nm spherical Lipid Nanoparticle combining ionizable lipids, DSPC, cholesterol, and PEG-lipids around mRNA',
      'Protects fragile Spike mRNA from extracellular RNases and delivers it smoothly into antigen-presenting cells',
    ],
    endosome_escape: [
      'Acidifying endosomal vesicle (pH ~5.8) protonating LNP ionizable amine lipids into positive charges',
      'Electrostatic pairing with anionic endosomal lipids triggers non-bilayer fusion, releasing intact mRNA into cytosol',
    ],
    vaccine_mrna: [
      'Single-stranded N1-methylpseudouridine (m¹Ψ) Spike mRNA with 5′-cap and poly(A) tail translated by cytosolic 80S',
      'Produces prefusion Spike antigens directly in the cytoplasm before natural RNases degrade the mRNA within days',
    ],
    intact_nucleus: [
      'Double-membrane nuclear envelope perforated by regulated Nuclear Pore Complexes shielding human chromosomal DNA',
      'Vaccine mRNA lacks nuclear import signals and stays strictly cytosolic — zero nuclear entry and zero DNA modification',
    ],
    drug_atoms: [
      'Atomic-resolution CPK comparison of the 1.35 Å β-lactam–Ser62 ester, 3′-OH-less AZT-MP, and m¹Ψ nucleoside',
      'Demonstrates how single covalent bonds and atomic functional groups govern selective toxicity and mRNA translation',
    ],
  };

  // -------------------------------------------------------------------------
  // Material Registry & Cinema PBR Helpers
  // -------------------------------------------------------------------------
  const REG: Record<string, { mats: THREE.Material[]; imp: THREE.ShaderMaterial[] }> = {};
  const reg = <T extends THREE.Material>(k: string | null, m: T): T => {
    if (!k) return m;
    const r = (REG[k] ??= { mats: [], imp: [] });
    if ((m as THREE.ShaderMaterial).isShaderMaterial) r.imp.push(m as unknown as THREE.ShaderMaterial);
    else r.mats.push(m);
    return m;
  };
  const phys = (o: THREE.MeshPhysicalMaterialParameters, clipObj = {}) =>
    new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.85, ...clipObj, ...o });

  function makeCinemaProteinMat(
    k: string,
    opts: {
      sssColor?: string;
      sssIntensity?: number;
      emissive?: string;
      emissiveIntensity?: number;
      roughness?: number;
      clearcoat?: number;
      sheenColor?: string;
      clipPlanes?: THREE.Plane[] | null;
      transparent?: boolean;
      opacity?: number;
      depthWrite?: boolean;
    } = {}
  ): THREE.MeshPhysicalMaterial {
    const m = phys({
      vertexColors: true,
      roughness: opts.roughness ?? 0.30,
      metalness: 0.05,
      clearcoat: opts.clearcoat ?? 0.46,
      clearcoatRoughness: 0.22,
      sheen: 0.44,
      sheenColor: new THREE.Color(opts.sheenColor ?? '#eef8ff'),
      normalMap: protBump,
      normalScale: new THREE.Vector2(0.34, 0.34),
      emissive: new THREE.Color(opts.emissive ?? '#08182a'),
      emissiveIntensity: opts.emissiveIntensity ?? 0.24,
      side: THREE.DoubleSide,
      clippingPlanes: opts.clipPlanes ?? null,
      clipIntersection: true,
      transparent: opts.transparent ?? false,
      opacity: opts.opacity ?? 1,
      depthWrite: opts.depthWrite ?? true,
    });
    applyBacklitSSS(m, opts.sssColor ?? '#8ce0ff', opts.sssIntensity ?? 0.26, 2.7);
    return reg(k, m);
  }

  const sculpt = (k: string, parent: THREE.Object3D = cell, opts: Parameters<typeof makeCinemaProteinMat>[1] = {}) =>
    makeSculptedMesh(makeCinemaProteinMat(k, opts), parent);

  const shells: THREE.MeshPhysicalMaterial[] = [];
  const LOOKS = ['gel', 'see-through', 'solid'] as const;
  let organelleLook: (typeof LOOKS)[number] = 'gel';
  let placed = 0;

  function cinemaShellMat(
    k: string | null,
    solidHex: string,
    gelHex: string,
    clipObj: Record<string, unknown>,
    opts: Record<string, unknown> = {}
  ): THREE.MeshPhysicalMaterial {
    const m = makeCinemaMembraneMat(clipObj, (opts.normalMap as THREE.Texture) ?? bump(10, 8), {
      color: gelHex,
      attenuationColor: (opts.attenCol as string) ?? solidHex,
      attenuationDistance: (opts.attenDist as number) ?? 4.2,
      sssColor: (opts.sssColor as string) ?? gelHex,
      sssIntensity: (opts.sssIntensity as number) ?? 0.30,
      iridescence: (opts.iridescence as number) ?? 0.50,
      thickness: (opts.thickness as number) ?? 0.45,
      roughness: (opts.roughness as number) ?? 0.12,
      sheenColor: (opts.sheenColor as string) ?? '#e4f8ff',
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
      m.opacity = see ? 0.38 : 1;
      m.depthWrite = !see;
      m.side = gel ? THREE.FrontSide : THREE.DoubleSide;
      m.color.copy(gel ? m.userData.cols.gel : m.userData.cols.solid);
      m.needsUpdate = true;
    });
  }

  const impMats: THREE.ShaderMaterial[] = [];
  const shade = <T extends THREE.Object3D>(mesh: T, cast = true, receive = true): T => {
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  };
  const grown = (a: Float32Array) => {
    const b = new Float32Array(a.length * 2);
    b.set(a);
    return b;
  };

  function balls(k: string, parent: THREE.Object3D = cell, clip = false, cutPlanes: THREE.Plane[] = []) {
    let n = 0, cap = 1 << 10;
    let pos = new Float32Array(cap * 3), sz = new Float32Array(cap), cl = new Float32Array(cap * 3);
    let m = 0, scap = 1 << 9;
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
            sg.setAttribute(nm as string, new THREE.InstancedBufferAttribute((arr as Float32Array).slice(0, m * (d as number)), d as number))
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

  const SITES: Record<string, THREE.Vector3[]> = Object.fromEntries(PARTS.map(p => [p[0], []]));
  let animClock = 0;

  // Dynamic visual handles across organisms and molecular stations
  interface BenchPlaque {
    cv: HTMLCanvasElement;
    tex: THREE.CanvasTexture;
    haloMat: THREE.MeshPhysicalMaterial;
  }
  const benchPlaques: Record<string, BenchPlaque> = {};
  let ecoliRoot: THREE.Group | null = null;
  let ecoliLysisFx: THREE.Group | null = null;
  let ecoliBodyMesh: THREE.Mesh | null = null;
  let mycoRoot: THREE.Group | null = null;
  let mycoShieldRing: THREE.Mesh | null = null;
  let chlamRoot: THREE.Group | null = null;
  let chlamRbGroup: THREE.Group | null = null;
  let virusRoot: THREE.Group | null = null;
  let virusArrestGroup: THREE.Group | null = null;
  let virusIggGroup: THREE.Group | null = null;
  let humanRoot: THREE.Group | null = null;
  let humanSpikePrimeGroup: THREE.Group | null = null;

  // Station animation handles
  let pgRuptureFx: THREE.Group | null = null;
  let pbpPenGlowRing: THREE.Mesh | null = null;
  let tetraRejectTrna: THREE.Group | null = null;
  let macrolidePlugGlow: THREE.Mesh | null = null;
  let ribo80sBouncers: THREE.Group[] = [];
  let ribo80sNascentChain: THREE.Group | null = null;
  let rdrpClashRing: THREE.Mesh | null = null;
  let hivAztBounce: THREE.Group | null = null;
  let lnpHeroGroup: THREE.Group | null = null;
  let endosomePulseRing: THREE.Mesh | null = null;
  let vaccineSpikeTrimers: THREE.Group[] = [];
  let nucleusShieldArc: THREE.Mesh | null = null;

  // Helper to paint ultra-crisp 3D status plaques (strictly sized so zero HUD overlap!)
  function paintPlaque(
    cv: HTMLCanvasElement,
    tex: THREE.CanvasTexture,
    line1: string,
    line2: string,
    accentHex: string,
    borderRgba: string
  ) {
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cv.width, cv.height);
    const r = 22, x = 8, y = 8, w = cv.width - 16, h = cv.height - 16;
    g.fillStyle = 'rgba(7, 13, 25, 0.88)';
    g.strokeStyle = borderRgba;
    g.lineWidth = 4;
    g.beginPath();
    g.moveTo(x + r, y);
    g.lineTo(x + w - r, y);
    g.quadraticCurveTo(x + w, y, x + w, y + r);
    g.lineTo(x + w, y + h - r);
    g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    g.lineTo(x + r, y + h);
    g.quadraticCurveTo(x, y + h, x, y + h - r);
    g.lineTo(x, y + r);
    g.quadraticCurveTo(x, y, x + r, y);
    g.closePath();
    g.fill();
    g.stroke();

    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = '700 32px system-ui, -apple-system, sans-serif';
    g.fillStyle = '#eef6ff';
    g.fillText(line1, cv.width * 0.5, 42);
    g.font = '800 26px system-ui, -apple-system, sans-serif';
    g.fillStyle = accentHex;
    g.fillText(line2, cv.width * 0.5, 84);
    tex.needsUpdate = true;
  }

  function makeStaticStationBanner(
    k: string,
    parent: THREE.Object3D,
    pos: THREE.Vector3,
    line1: string,
    line2: string,
    accentHex: string,
    width = 2.65,
    height = 0.52
  ) {
    const cv = document.createElement('canvas');
    cv.width = 512;
    cv.height = 104;
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    paintPlaque(cv, tex, line1, line2, accentHex, accentHex);
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      reg(
        k,
        new THREE.MeshStandardMaterial({
          map: tex,
          emissive: '#ffffff',
          emissiveMap: tex,
          emissiveIntensity: 0.78,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    mesh.position.copy(pos);
    parent.add(mesh);
    return mesh;
  }

  // -------------------------------------------------------------------------
  // 1. Decode & Build ALL 6 Real RCSB PDB Cryo-EM Surfaces (`buildPdbSurfaceGeo`)
  //    1. pbp_pen        (1PWC — PBP transpeptidase + covalent Penicillin G)
  //    2. ribo_macrolide (4V7U — Bacterial 50S subunit + macrolide tunnel)
  //    3. ribo_tetra     (1HNW — Bacterial 30S subunit + tetracycline A-site)
  //    4. ribo_80s       (4UG0 — Human cytosolic 80S ribosome from PDB_CENTRAL_DOGMA)
  //    5. rdrp_rdv       (7BV2 — SARS-CoV-2 RdRp nsp12/7/8 + Remdesivir-MP)
  //    6. hiv_rt_azt     (3V4I — HIV-1 Reverse Transcriptase p66/p51 + AZT-MP)
  // -------------------------------------------------------------------------
  function buildPdbTemplates() {
    const mPbp = pdb.getModel(PDB_IMMUNE_PHARMA, 'pbp_pen');
    const mMac = pdb.getModel(PDB_IMMUNE_PHARMA, 'ribo_macrolide');
    const mTet = pdb.getModel(PDB_IMMUNE_PHARMA, 'ribo_tetra');
    const mRibo80 = pdb.getModel(PDB_CENTRAL_DOGMA, 'ribo_80s');
    const mRdrp = pdb.getModel(PDB_IMMUNE_PHARMA, 'rdrp_rdv');
    const mHivRt = pdb.getModel(PDB_IMMUNE_PHARMA, 'hiv_rt_azt');

    // 1. Bacterial PBP Transpeptidase + Penicillin G (PDB 1PWC, span ~51 Å)
    const cPbpBody = col('#ff785c');
    const cPbpSide = col('#ffa478');
    const cPbpSite = col('#ffe256');
    const geoPbp = buildPdbSurfaceGeo(mPbp, {
      nm: NM,
      scale: 1.22,
      maxDim: 34,
      sigmaAng: 3.1,
      iso: 0.38,
      aoStrength: 0.56,
      colorFn: (_grp, part, idx) => {
        if (part === 3 || (idx > 60 && idx < 115)) return cPbpSite;
        return part === 1 ? cPbpSide : cPbpBody;
      },
    });
    geoPbp.center();

    // 2. Bacterial 50S Ribosomal Subunit (PDB 4V7U, span ~189 Å)
    const c50Rna = col('#2ab4dc');
    const c50RnaHi = col('#5ee6ff');
    const c50Prot = [col('#7090ff'), col('#8c80ff'), col('#60a8ff'), col('#9c8cff'), col('#6cc4ff')];
    const geo50s = buildPdbSurfaceGeo(mMac, {
      nm: NM,
      scale: 0.42,
      maxDim: 32,
      sigmaAng: 6.4,
      iso: 0.35,
      aoStrength: 0.58,
      colorFn: (grp, part) => {
        if (grp === 0) return part === 3 ? c50RnaHi : c50Rna;
        return c50Prot[(grp - 1) % c50Prot.length];
      },
    });
    geo50s.center();

    // 3. Bacterial 30S Ribosomal Subunit (PDB 1HNW, span ~182 Å)
    const c30Rna = col('#26cc9e');
    const c30RnaHi = col('#62f6c8');
    const c30Prot = [col('#ffc654'), col('#60dcff'), col('#4ee8d0'), col('#78c8ff'), col('#56e6b8')];
    const geo30s = buildPdbSurfaceGeo(mTet, {
      nm: NM,
      scale: 0.36,
      maxDim: 30,
      sigmaAng: 6.4,
      iso: 0.35,
      aoStrength: 0.56,
      colorFn: (grp, part) => {
        if (grp === 0) return part === 3 ? c30RnaHi : c30Rna;
        if (grp === 1) return col('#ffd848'); // Decoding cleft A-site target!
        return c30Prot[(grp - 2) % c30Prot.length];
      },
    });
    geo30s.center();

    // 4. Human Cytosolic 80S Ribosome (PDB 4UG0 from PDB_CENTRAL_DOGMA, span ~255 Å — visibly larger than 70S!)
    const c80Cols = [
      col('#2ee69e'), col('#4eeeff'), col('#5cf6c2'),
      col('#80b8ff'), col('#a888ff'), col('#64e8ff'), col('#92f6b8'), col('#b496ff'),
    ];
    const geo80s = buildPdbSurfaceGeo(mRibo80, {
      nm: NM,
      scale: 0.42,
      maxDim: 34,
      sigmaAng: 7.4,
      iso: 0.35,
      aoStrength: 0.58,
      colorFn: (grp, part) => (part >= 2 ? c80Cols[grp & 7] : c80Cols[grp & 7].clone().offsetHSL(0.02, 0.05, 0.07)),
    });
    geo80s.center();

    // 5. SARS-CoV-2 RdRp nsp12/nsp7/nsp8 + RNA/Remdesivir (PDB 7BV2, span ~92 Å)
    const cNsp12 = col('#4c84ff');
    const cNsp12Hi = col('#7aaeff');
    const cNsp8 = col('#38d8d6');
    const cNsp7 = col('#a874ff');
    const cRdvRna = col('#ff9e42');
    const geoRdrp = buildPdbSurfaceGeo(mRdrp, {
      nm: NM,
      scale: 0.88,
      maxDim: 34,
      sigmaAng: 3.6,
      iso: 0.37,
      aoStrength: 0.58,
      colorFn: (grp, part) => {
        if (grp === 1) return cNsp8;
        if (grp === 2) return cNsp7;
        if (grp === 3) return cRdvRna;
        return part === 1 ? cNsp12Hi : cNsp12;
      },
    });
    geoRdrp.center();

    // 6. HIV-1 Reverse Transcriptase p66/p51 heterodimer (PDB 3V4I, filter grp < 2 = single physiological p66/p51!)
    const cP66 = col('#c45eff');
    const cP66Hi = col('#e490ff');
    const cP51 = col('#6288ff');
    const cP51Hi = col('#8cb4ff');
    const geoHivRt = buildPdbSurfaceGeo(mHivRt, {
      nm: NM,
      scale: 0.90,
      maxDim: 34,
      sigmaAng: 4.1,
      iso: 0.37,
      aoStrength: 0.58,
      filter: grp => grp < 2,
      colorFn: (grp, part) => (grp === 0 ? (part === 1 ? cP66Hi : cP66) : (part === 1 ? cP51Hi : cP51)),
    });
    geoHivRt.center();

    return { geoPbp, geo50s, geo30s, geo80s, geoRdrp, geoHivRt };
  }

  // -------------------------------------------------------------------------
  // 2. UPPER TIER: 5-Organism Drug × Target Selectivity Bench
  //    bench_ecoli, bench_myco, bench_chlam, bench_virus, bench_human
  // -------------------------------------------------------------------------
  function buildSelectivityBench() {
    // Sleek dark-glass optical bench shelf connecting all 5 organisms
    const benchMat = phys({
      color: '#101d34',
      emissive: '#0c203c',
      emissiveIntensity: 0.35,
      roughness: 0.22,
      metalness: 0.35,
      clearcoat: 0.80,
      transparent: true,
      opacity: 0.52,
    });
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(14.8, 0.10, 2.2), benchMat);
    shelf.position.set(0, BENCH_Y - 1.24, BENCH_Z);
    cell.add(shelf);

    // Subtle glowing rail rim along front of selectivity bench
    const railMat = phys({
      color: '#5ec8ff',
      emissive: '#2ca4f0',
      emissiveIntensity: 0.55,
      roughness: 0.20,
    });
    const rail = new THREE.Mesh(new THREE.BoxGeometry(14.8, 0.03, 0.04), railMat);
    rail.position.set(0, BENCH_Y - 1.24, BENCH_Z + 1.11);
    cell.add(rail);

    // Helper: create live outcome pedestal halo + dynamic 3D plaque under each organism
    function attachBenchPedestal(key: string, center: THREE.Vector3, defaultLine1: string, defaultLine2: string) {
      const haloMat = reg(
        key,
        phys({
          color: '#6ce8ff',
          emissive: '#38c8ff',
          emissiveIntensity: 0.65,
          roughness: 0.20,
          transparent: true,
          opacity: 0.85,
        })
      );
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.96, 0.034, 12, 48), haloMat);
      halo.rotation.x = Math.PI * 0.5;
      halo.position.set(center.x, BENCH_Y - 1.16, center.z);
      cell.add(halo);

      const cv = document.createElement('canvas');
      cv.width = 480;
      cv.height = 112;
      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      paintPlaque(cv, tex, defaultLine1, defaultLine2, '#6ce8ff', 'rgba(108,232,255,0.72)');
      const plMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2.42, 0.56),
        reg(
          key,
          new THREE.MeshStandardMaterial({
            map: tex,
            emissive: '#ffffff',
            emissiveMap: tex,
            emissiveIntensity: 0.80,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
          })
        )
      );
      plMesh.position.set(center.x, BENCH_Y - 1.62, center.z + 0.55);
      cell.add(plMesh);
      benchPlaques[key] = { cv, tex, haloMat };
    }

    // --- 2A. bench_ecoli: Walled Gram-negative Rod (Shell #1) ---
    ecoliRoot = new THREE.Group();
    ecoliRoot.position.copy(ECOLI_C);
    cell.add(ecoliRoot);

    const ecoliMemMat = cinemaShellMat('bench_ecoli', '#d44862', '#ff98a8', ECOLI_CLIP, {
      attenCol: '#9a243c',
      attenDist: 3.2,
      sssColor: '#ff708c',
      sssIntensity: 0.36,
      iridescence: 0.52,
      thickness: 0.42,
      normalMap: bump(8, 6),
    });
    const ecoliCapsuleGeo = new THREE.CapsuleGeometry(0.56, 1.05, 18, 36);
    ecoliCapsuleGeo.rotateZ(Math.PI * 0.5);
    ecoliBodyMesh = shade(new THREE.Mesh(ecoliCapsuleGeo, ecoliMemMat));
    ecoliRoot.add(ecoliBodyMesh);

    // Rigid golden Peptidoglycan Wall jacket directly underneath outer membrane!
    const pgWallMat = reg(
      'bench_ecoli',
      applyBacklitSSS(
        phys({
          color: '#f2b846',
          emissive: '#4c2c06',
          emissiveIntensity: 0.34,
          roughness: 0.36,
          clearcoat: 0.40,
          side: THREE.DoubleSide,
        }, ECOLI_CLIP),
        '#ffca62',
        0.28,
        2.5
      )
    );
    const pgCapGeo = new THREE.CapsuleGeometry(0.50, 1.02, 14, 32);
    pgCapGeo.rotateZ(Math.PI * 0.5);
    ecoliRoot.add(new THREE.Mesh(pgCapGeo, pgWallMat));

    // Interior E. coli nucleoid, 70S ribosomes, and whipping polar flagella
    const S_EC = sculpt('bench_ecoli', ecoliRoot, {
      emissive: '#381624',
      emissiveIntensity: 0.30,
      sssColor: '#ff96aa',
    });
    // Coiled circular chromosome loop inside cytoplasm
    const dnaPts: THREE.Vector3[] = [];
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      dnaPts.push(V(Math.cos(a) * 0.52, Math.sin(a * 2) * 0.18, Math.sin(a) * 0.22 - 0.06));
    }
    S_EC.tube(dnaPts, 0.036, 0.036, col('#60d4ff'), col('#92f0ff'), 8, false);
    // Internal 70S ribosomes (16 beads)
    for (let i = 0; i < 16; i++) {
      S_EC.add(V(rr(-0.72, 0.72), rr(-0.28, 0.28), rr(-0.22, 0.14)), 0.095, col('#ffd258'));
      placed++;
    }
    // 3 wavy polar flagella trailing to the left
    for (let f = 0; f < 3; f++) {
      const fPts: THREE.Vector3[] = [];
      for (let s = 0; s <= 12; s++) {
        const u = s / 12;
        fPts.push(V(-1.02 - u * 0.75, (f - 1) * 0.14 + Math.sin(u * 9 + f * 2) * 0.11, -0.05 + Math.cos(u * 7 + f) * 0.08));
      }
      S_EC.tube(fPts, 0.022, 0.011, col('#ff9eb2'), col('#ff6c88'), 6, true);
      placed++;
    }
    S_EC.done();

    // Osmotic Lysis Breach & Bursting Plasma Droplets (active in penicillin mode!)
    ecoliLysisFx = new THREE.Group();
    ecoliRoot.add(ecoliLysisFx);
    const S_ECL = sculpt('bench_ecoli', ecoliLysisFx, {
      emissive: '#ff2850',
      emissiveIntensity: 0.90,
      roughness: 0.16,
      clearcoat: 0.80,
      sssColor: '#ff96ae',
    });
    const burstN = V(0.12, 0.82, 0.55).normalize();
    S_ECL.ring(burstN.clone().multiplyScalar(0.60), burstN, 0.30, 0.032, col('#ff4268'), 24, 8);
    S_ECL.ring(burstN.clone().multiplyScalar(0.74), burstN, 0.44, 0.020, col('#ffadbc'), 28, 8);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const d = 0.65 + (i % 3) * 0.22;
      const p = burstN.clone().multiplyScalar(d).add(V(Math.cos(a) * 0.32, Math.sin(a) * 0.22, Math.cos(a * 2) * 0.14));
      S_ECL.add(p, 0.08 + (i % 3) * 0.03, i % 2 === 0 ? col('#ff587a') : col('#ffe066'));
      placed++;
    }
    S_ECL.done();
    attachBenchPedestal('bench_ecoli', ECOLI_C, 'E. coli (Walled)', 'LYSIS');
    SITES.bench_ecoli.push(ECOLI_C.clone());

    // --- 2B. bench_myco: Wall-less Pleomorphic Mycoplasma (Shell #2) ---
    mycoRoot = new THREE.Group();
    mycoRoot.position.copy(MYCO_C);
    cell.add(mycoRoot);

    const mycoMemMat = cinemaShellMat('bench_myco', '#2898cc', '#88e4ff', MYCO_CLIP, {
      attenCol: '#1b6490',
      attenDist: 3.4,
      sssColor: '#66e0ff',
      sssIntensity: 0.34,
      iridescence: 0.56,
      thickness: 0.38,
      normalMap: bump(9, 7),
    });
    const gMyco = shellGeo(V(0, 0, 0), d => {
      const n = fbm(d.x * 2.5 + 3.1, d.y * 2.5 - 1.2, d.z * 2.5 + 0.7, 3);
      return 0.78 * (1 + 0.16 * (n - 0.5) * 2);
    }, 68);
    mycoRoot.add(shade(new THREE.Mesh(gMyco, mycoMemMat)));

    const S_MY = sculpt('bench_myco', mycoRoot, {
      emissive: '#10344c',
      emissiveIntensity: 0.30,
      sssColor: '#7ceaff',
    });
    // Tiny sterol dots + compact circular chromosome + 70S ribosomes (NO cell wall!)
    for (let i = 0; i < 14; i++) {
      const th = (i / 14) * Math.PI * 2;
      S_MY.add(V(Math.cos(th) * 0.42, Math.sin(th) * 0.36, rr(-0.20, 0.20)), 0.088, col('#ffd462'));
      placed++;
    }
    const myDna: THREE.Vector3[] = [];
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      myDna.push(V(Math.cos(a) * 0.30, Math.sin(a) * 0.26, Math.sin(a * 3) * 0.10 - 0.05));
    }
    S_MY.tube(myDna, 0.028, 0.028, col('#5cf2ff'), col('#80ffd4'), 6, false);
    S_MY.done();

    // Cyan wall-less immunity shield ring (glows when Penicillin G is selected!)
    mycoShieldRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.026, 10, 44),
      reg('bench_myco', phys({ color: '#58f2ff', emissive: '#34d8ff', emissiveIntensity: 0.80, transparent: true, opacity: 0.75 }))
    );
    mycoRoot.add(mycoShieldRing);
    attachBenchPedestal('bench_myco', MYCO_C, 'Mycoplasma', 'NO WALL · SPARED');
    SITES.bench_myco.push(MYCO_C.clone());

    // --- 2C. bench_chlam: Intracellular Chlamydia Inclusion Vacuole (Shell #3) ---
    chlamRoot = new THREE.Group();
    chlamRoot.position.copy(CHLAM_C);
    cell.add(chlamRoot);

    const chlamMemMat = cinemaShellMat('bench_chlam', '#c87c24', '#ffd080', CHLAM_CLIP, {
      attenCol: '#884e10',
      attenDist: 3.6,
      sssColor: '#ffbe58',
      sssIntensity: 0.34,
      iridescence: 0.48,
      thickness: 0.42,
      normalMap: bump(8, 8),
    });
    const gChlam = blobGeo(0.86, fbm, 41, 0.07, 2.2, 4);
    chlamRoot.add(shade(new THREE.Mesh(gChlam, chlamMemMat)));

    // Reticulate Bodies (RBs) & Elementary Bodies (EBs) inside the inclusion vacuole
    chlamRbGroup = new THREE.Group();
    chlamRoot.add(chlamRbGroup);
    const S_CH = sculpt('bench_chlam', chlamRbGroup, {
      emissive: '#3e2408',
      emissiveIntensity: 0.32,
      sssColor: '#ffd480',
    });
    const rbCoords = [
      V(-0.26, 0.22, -0.05), V(0.28, 0.16, 0.06), V(-0.14, -0.26, 0.10),
      V(0.26, -0.22, -0.10), V(0.02, 0.02, -0.22),
    ];
    rbCoords.forEach((p, idx) => {
      S_CH.lobe(p, 0.22, 0.18, 0.18, idx % 2 === 0 ? col('#ffaa38') : col('#ff7c4c'));
      // Tiny 70S ribosome speckles inside each intracellular RB
      S_CH.add(p.clone().add(V(0.08, 0.06, 0.14)), 0.055, col('#68f0ff'));
      placed++;
    });
    // Dense infectious Elementary Bodies (EBs)
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      S_CH.add(V(Math.cos(a) * 0.46, Math.sin(a) * 0.42, 0.14), 0.11, col('#ffe276'));
      placed++;
    }
    S_CH.done();
    attachBenchPedestal('bench_chlam', CHLAM_C, 'Chlamydia', 'STALLED');
    SITES.bench_chlam.push(CHLAM_C.clone());

    // --- 2D. bench_virus: Acellular SARS-CoV-2 & HIV-1 Virion Pair (Shell #4) ---
    virusRoot = new THREE.Group();
    virusRoot.position.copy(VIRUS_C);
    cell.add(virusRoot);

    const virEnvMat = cinemaShellMat('bench_virus', '#8e3cd4', '#d89eff', VIRUS_CLIP, {
      attenCol: '#581e8c',
      attenDist: 3.0,
      sssColor: '#c87eff',
      sssIntensity: 0.34,
      iridescence: 0.56,
      thickness: 0.36,
      normalMap: bump(10, 10),
    });
    // Upper-left SARS-CoV-2 envelope
    const covPos = V(-0.34, 0.22, 0.04);
    const covSphere = shade(new THREE.Mesh(new THREE.SphereGeometry(0.46, 36, 28), virEnvMat));
    covSphere.position.copy(covPos);
    virusRoot.add(covSphere);

    // Lower-right HIV-1 envelope
    const hivPos = V(0.42, -0.24, -0.02);
    const hivSphere = shade(new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), virEnvMat));
    hivSphere.position.copy(hivPos);
    virusRoot.add(hivSphere);

    const S_VIR = sculpt('bench_virus', virusRoot, {
      emissive: '#2c1044',
      emissiveIntensity: 0.34,
      sssColor: '#e09eff',
    });
    // SARS-CoV-2 trimeric Spike crown studs + internal helical +ssRNA
    for (let i = 0; i < 16; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 16);
      const th = Math.PI * (1 + Math.sqrt(5)) * i;
      const d = V(Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th));
      const base = covPos.clone().addScaledVector(d, 0.44);
      const tip = covPos.clone().addScaledVector(d, 0.64);
      S_VIR.stick(base, tip, 0.026, col('#ff5c7c'), col('#ff98aa'));
      S_VIR.add(tip, 0.11, col('#ff5478'));
      placed++;
    }
    const covRna: THREE.Vector3[] = [];
    for (let i = 0; i < 18; i++) {
      const u = i / 17;
      covRna.push(covPos.clone().add(V(Math.cos(u * 12) * 0.20, (u - 0.5) * 0.42, Math.sin(u * 12) * 0.18 - 0.05)));
    }
    S_VIR.tube(covRna, 0.028, 0.028, col('#ffd054'), col('#ff8444'), 6, true);

    // HIV-1 conical golden capsid core + twin RNA strands + Env gp120 knobs
    const conePts = [hivPos.clone().add(V(0, -0.22, -0.04)), hivPos.clone().add(V(0, 0.20, -0.04))];
    S_VIR.tube(conePts, 0.08, 0.18, col('#ffbc42'), col('#ffe276'), 10, true);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const d = V(Math.cos(a), Math.sin(a) * 0.7, 0.35).normalize();
      const base = hivPos.clone().addScaledVector(d, 0.40);
      const tip = hivPos.clone().addScaledVector(d, 0.53);
      S_VIR.stick(base, tip, 0.020, col('#78d8ff'), col('#b488ff'));
      S_VIR.add(tip, 0.085, col('#b47cff'));
      placed++;
    }
    S_VIR.done();

    // Antiviral Polymerase Arrest Halo (visible in antivirals mode!)
    virusArrestGroup = new THREE.Group();
    virusArrestGroup.visible = false;
    virusRoot.add(virusArrestGroup);
    const arrestMat = reg('bench_virus', phys({ color: '#ff4872', emissive: '#ff2858', emissiveIntensity: 0.92, transparent: true, opacity: 0.88 }));
    const aRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.96, 0.036, 12, 48), arrestMat);
    const aRing2 = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.022, 10, 40), arrestMat);
    aRing2.rotation.y = 0.5;
    virusArrestGroup.add(aRing1, aRing2);

    // Vaccine Neutralizing Y-Shaped IgG Antibodies docking onto SARS-CoV-2 Spikes (visible in mrna_lnp mode!)
    virusIggGroup = new THREE.Group();
    virusIggGroup.visible = false;
    virusRoot.add(virusIggGroup);
    const S_IGG = sculpt('bench_virus', virusIggGroup, {
      emissive: '#42d8ff',
      emissiveIntensity: 0.72,
      roughness: 0.20,
      clearcoat: 0.70,
    });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.3;
      const d = V(Math.cos(a), Math.sin(a), 0.30).normalize();
      const dock = covPos.clone().addScaledVector(d, 0.68);
      const stem = covPos.clone().addScaledVector(d, 0.96);
      const sideU = across(UP, d).normalize();
      S_IGG.stick(stem, dock, 0.024, col('#ffd854'), col('#60f2ff'));
      S_IGG.stick(dock, dock.clone().addScaledVector(sideU, 0.14).addScaledVector(d, -0.09), 0.022, col('#60f2ff'), col('#80ffd4'));
      S_IGG.stick(dock, dock.clone().addScaledVector(sideU, -0.14).addScaledVector(d, -0.09), 0.022, col('#60f2ff'), col('#80ffd4'));
      placed++;
    }
    S_IGG.done();
    attachBenchPedestal('bench_virus', VIRUS_C, 'SARS-CoV-2 / HIV', 'NO TARGET');
    SITES.bench_virus.push(VIRUS_C.clone());

    // --- 2E. bench_human: Human Epithelial Cell with Intact Nucleus & 80S Ribosomes (Shell #5) ---
    humanRoot = new THREE.Group();
    humanRoot.position.copy(HUMAN_C);
    cell.add(humanRoot);

    const humMemMat = cinemaShellMat('bench_human', '#22b878', '#86ffd0', HUMAN_CLIP, {
      attenCol: '#14784e',
      attenDist: 3.6,
      sssColor: '#56ffb8',
      sssIntensity: 0.34,
      iridescence: 0.54,
      thickness: 0.44,
      normalMap: bump(10, 8),
    });
    const gHum = shellGeo(V(0, 0, 0), d => {
      const ob = 1 - 0.06 * d.y * d.y;
      const n = fbm(d.x * 2.0 + 7.2, d.y * 2.0, d.z * 2.0 - 4.1, 3);
      return 0.90 * ob * (1 + 0.03 * (n - 0.5) * 2);
    }, 76);
    humanRoot.add(shade(new THREE.Mesh(gHum, humMemMat)));

    const S_HUM = sculpt('bench_human', humanRoot, {
      emissive: '#16343a',
      emissiveIntensity: 0.32,
      sssColor: '#88ffd4',
    });
    // Prominent Intact Glowing Purple Nucleus tucked neatly inside left-center!
    S_HUM.lobe(V(-0.18, 0.06, -0.14), 0.38, 0.35, 0.34, col('#8c4ee0'));
    S_HUM.add(V(-0.14, 0.12, 0.02), 0.15, col('#d29cff')); // Nucleolus
    // Healthy cytosolic 80S ribosomes & mitochondria OUTSIDE nucleus
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const rx = 0.48 + (i % 2) * 0.14;
      S_HUM.add(V(Math.cos(a) * rx + 0.08, Math.sin(a) * 0.44, rr(-0.12, 0.24)), 0.085, col('#48f8bc'));
      placed++;
    }
    S_HUM.lobe(V(0.42, -0.34, 0.16), 0.18, 0.09, 0.09, col('#ff9868'));
    S_HUM.lobe(V(0.38, 0.40, -0.06), 0.17, 0.08, 0.08, col('#ff9868'));
    S_HUM.done();

    // Surface MHC-I Spike Antigen Priming Pedestals (glow radiantly in mrna_lnp mode!)
    humanSpikePrimeGroup = new THREE.Group();
    humanSpikePrimeGroup.visible = false;
    humanRoot.add(humanSpikePrimeGroup);
    const S_PR = sculpt('bench_human', humanSpikePrimeGroup, {
      emissive: '#3cffb8',
      emissiveIntensity: 0.85,
      roughness: 0.18,
      clearcoat: 0.78,
    });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const d = V(Math.cos(a), Math.sin(a) * 0.85, 0.26).normalize();
      const b = d.clone().multiplyScalar(0.88);
      const t = d.clone().multiplyScalar(1.14);
      S_PR.stick(b, t, 0.026, col('#66e8ff'), col('#56ffb8'));
      S_PR.add(t, 0.12, col('#ffe056'));
      placed++;
    }
    S_PR.done();
    attachBenchPedestal('bench_human', HUMAN_C, 'Human Cell (80S)', 'SPARED');
    SITES.bench_human.push(HUMAN_C.clone());

    // Subtle vertical optical connector fibers linking upper bench organisms to their lower molecular stations!
    const linkPairs: Array<[THREE.Vector3, THREE.Vector3, string]> = [
      [ECOLI_C.clone().add(V(0, -1.92, 0)), S1_PBP.clone().add(V(-0.15, 1.50, 0)), '#ff748a'],
      [MYCO_C.clone().add(V(0, -1.92, 0)), S2_70S.clone().add(V(-0.20, 1.50, 0)), '#56e2ff'],
      [CHLAM_C.clone().add(V(0, -1.92, 0)), S2_70S.clone().add(V(0.45, 1.50, 0)), '#ffc258'],
      [VIRUS_C.clone().add(V(0, -1.92, 0)), S3_RDRP.clone().add(V(0.40, 0.95, 0)), '#c67cff'],
      [HUMAN_C.clone().add(V(0, -1.92, 0)), S4_ENDO.clone().add(V(0.0, 1.05, 0)), '#4ef2b0'],
    ];
    linkPairs.forEach(([a, b, hex]) => {
      const curve = new THREE.CatmullRomCurve3([a, a.clone().lerp(b, 0.5).add(V(0, 0, -0.35)), b]);
      const g = new THREE.TubeGeometry(curve, 18, 0.015, 6, false);
      const m = phys({ color: hex, emissive: hex, emissiveIntensity: 0.45, transparent: true, opacity: 0.34, depthWrite: false });
      cell.add(new THREE.Mesh(g, m));
    });
  }

  // -------------------------------------------------------------------------
  // 3. STATION 1 (`beta_lactam`): Peptidoglycan Wall (`pg_wall`) + PBP 1PWC (`pbp_penicillin`)
  // -------------------------------------------------------------------------
  function buildStation1BetaLactam(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    grp.position.set(S1_PBP.x, DECK_Y, DECK_Z);
    cell.add(grp);

    // --- 3A. pg_wall: Cross-linked NAM-NAG Peptidoglycan Mesh + Inner Plasma Membrane + Wall-less Contrast ---
    const S_PG = sculpt('pg_wall', grp, {
      emissive: '#3c2208',
      emissiveIntensity: 0.28,
      roughness: 0.28,
      clearcoat: 0.52,
      sssColor: '#ffd06c',
    });
    const cNam = col('#f5b842');
    const cNag = col('#ff8c4c');
    const cPep = col('#ff6078');
    const cMem = col('#38b6dc');

    // Inner bacterial plasma membrane phospholipid base beneath periplasm (Y = -1.35)
    for (let ix = -7; ix <= 4; ix++) {
      for (let iz = -2; iz <= 2; iz++) {
        const x = ix * 0.22;
        const z = iz * 0.24;
        S_PG.add(V(x, -1.18, z), 0.13, cMem);
        S_PG.stick(V(x, -1.18, z), V(x, -1.48, z), 0.022, col('#4cd4f0'), col('#226888'));
        placed++;
      }
    }

    // 3 stacked horizontal NAM-NAG glycan polymer chains in the periplasmic cell wall (Y = -0.35..+0.95)
    const rowsY = [-0.45, 0.22, 0.88];
    rowsY.forEach((ry, rIdx) => {
      for (let i = -7; i <= 4; i++) {
        // Leave central breach window around i = -1..0 where PBP 1PWC is stalled & wall splits!
        if (rIdx === 1 && (i === -1 || i === 0)) continue;
        const x = i * 0.26;
        const z = -0.18 + (rIdx % 2) * 0.16;
        const p = V(x, ry, z);
        S_PG.add(p, 0.17, i % 2 === 0 ? cNam : cNag);
        if (i < 4 && !(rIdx === 1 && i === -2)) {
          S_PG.stick(p, V((i + 1) * 0.26, ry, z), 0.032, cNam, cNag);
        }
        // Vertical D-Ala-D-Ala peptide cross-bridges between intact chains (broken near PBP cleft!)
        if (rIdx < 2 && i % 2 === 0 && Math.abs(i + 0.5) > 1.3) {
          S_PG.stick(p, V(x, rowsY[rIdx + 1], -0.18 + ((rIdx + 1) % 2) * 0.16), 0.026, cPep, col('#ffb068'));
        }
        placed++;
      }
    });

    // Right-side visual contrast mini-strip (X = +1.55): Wall-less Mycoplasma Membrane (0 PG Wall!)
    for (let ix = 0; ix < 4; ix++) {
      for (let iz = -1; iz <= 1; iz++) {
        const x = 1.38 + ix * 0.20;
        const z = iz * 0.22;
        S_PG.add(V(x, -1.12, z), 0.125, col('#52e8ff'));
        S_PG.stick(V(x, -1.12, z), V(x, -1.42, z), 0.020, col('#70f0ff'), col('#2288a8'));
        // Sterol cholesterol rings stiffening Mycoplasma membrane
        if (ix % 2 === 0 && iz === 0) S_PG.lobe(V(x, -1.27, z + 0.06), 0.05, 0.10, 0.05, col('#ffe066'));
        placed++;
      }
    }
    S_PG.done();

    // Dynamic Osmotic Rupture Breach Rays bursting outward through un-crosslinked PG gap!
    pgRuptureFx = new THREE.Group();
    grp.add(pgRuptureFx);
    const S_RUP = sculpt('pg_wall', pgRuptureFx, {
      emissive: '#ff365c',
      emissiveIntensity: 0.92,
      roughness: 0.16,
      clearcoat: 0.80,
    });
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const p0 = V(-0.15, 0.38, 0.42);
      const p1 = V(-0.15 + Math.cos(a) * 0.86, 0.38 + Math.sin(a) * 0.68, 0.58);
      S_RUP.stick(p0, p1, 0.022, col('#ff4268'), col('#ffe264'));
      S_RUP.add(p1, 0.095, col('#ff6888'));
      placed++;
    }
    S_RUP.done();
    SITES.pg_wall.push(V(S1_PBP.x - 0.85, DECK_Y + 0.30, DECK_Z + 0.20));

    // --- 3B. pbp_penicillin: Real RCSB PDB 1PWC Transpeptidase + Covalent Penicillin G ---
    const pbpMat = makeCinemaProteinMat('pbp_penicillin', {
      emissive: '#441222',
      emissiveIntensity: 0.28,
      sssColor: '#ff8ea2',
      sssIntensity: 0.30,
    });
    const heroPbp = shade(new THREE.Mesh(T.geoPbp, pbpMat));
    heroPbp.position.set(-0.15, 0.08, 0.06);
    heroPbp.rotation.set(0.16, -0.32, 0.06);
    grp.add(heroPbp);
    placed++;

    // Two flanking smaller PBP copies along the periplasmic wall for realistic macromolecular crowding
    [-1.42, 0.86].forEach((ox, idx) => {
      const m = shade(new THREE.Mesh(T.geoPbp, pbpMat));
      m.position.set(ox, -0.58 + idx * 0.12, -0.34);
      m.scale.setScalar(0.56);
      m.rotation.set(0.2, idx === 0 ? 0.6 : -0.8, 0.1);
      grp.add(m);
      placed++;
    });

    // Sculpted glowing Penicillin G (opened 4-membered β-lactam + thiazolidine ring covalently esterified to Ser62!)
    const S_PEN = sculpt('pbp_penicillin', grp, {
      emissive: '#ff285c',
      emissiveIntensity: 0.76,
      roughness: 0.16,
      clearcoat: 0.84,
      sssColor: '#ff96b6',
    });
    const cleft = V(-0.10, 0.14, 0.86);
    // Covalent Ser62—O—C(=O) ester lock visibly bridging from PBP active cleft to Penicillin G!
    S_PEN.stick(cleft.clone().add(V(0, 0.0, -0.26)), cleft, 0.038, col('#ffe658'), col('#ff4268'));
    S_PEN.add(cleft.clone().add(V(0, 0.0, -0.24)), 0.12, col('#ffe658')); // Ser62 Oγ
    // Bicyclic core (opened β-lactam + thiazolidine sulfur S in yellow + benzyl side chain)
    const bPts = [
      cleft,
      cleft.clone().add(V(0.20, 0.11, 0.06)),
      cleft.clone().add(V(0.36, -0.04, 0.08)),
      cleft.clone().add(V(0.18, -0.20, 0.06)),
      cleft,
    ];
    S_PEN.tube(bPts, 0.036, 0.036, col('#ff3c72'), col('#ff98b8'), 8, false);
    S_PEN.add(cleft.clone().add(V(0.36, -0.04, 0.08)), 0.135, col('#ffe248')); // Thiazolidine Sulfur (S)
    S_PEN.add(cleft.clone().add(V(-0.22, 0.16, 0.08)), 0.12, col('#ff5478')); // Phenyl R-group
    S_PEN.stick(cleft, cleft.clone().add(V(-0.22, 0.16, 0.08)), 0.028, col('#ff4c78'), col('#ffb2c6'));
    S_PEN.done();

    pbpPenGlowRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.46, 0.026, 12, 36),
      reg('pbp_penicillin', phys({ color: '#ff5278', emissive: '#ff2858', emissiveIntensity: 0.92, transparent: true, opacity: 0.85 }))
    );
    pbpPenGlowRing.position.copy(cleft).add(V(0.06, 0, 0.04));
    grp.add(pbpPenGlowRing);

    makeStaticStationBanner('pg_wall', grp, V(1.68, -0.68, 0.35), 'MYCOPLASMA', 'No PG Wall · Spared', '#62f0ff', 1.24, 0.34);
    makeStaticStationBanner('pbp_penicillin', grp, V(-0.15, -1.96, 0.45), '1. β-LACTAM · PBP (1PWC)', 'Penicillin G → Wall Lysis', '#ff7a92', 2.65, 0.52);
    SITES.pbp_penicillin.push(S1_PBP.clone().add(V(-0.10, 0.18, 0.45)));
  }

  // -------------------------------------------------------------------------
  // 4. STATION 2 (`ribosome_70s_80s`): Bacterial 70S (`4V7U`+`1HNW`) vs Human 80S (`4UG0`)
  // -------------------------------------------------------------------------
  function buildStation2Ribosomes(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    cell.add(grp);

    // --- 4A. ribo_70s: Complete Bacterial 70S Ribosome (50S 4V7U on top + 30S 1HNW underneath) ---
    const g70 = new THREE.Group();
    g70.position.copy(S2_70S);
    grp.add(g70);

    const ribo50Mat = makeCinemaProteinMat('ribo_70s', {
      emissive: '#0c2842',
      emissiveIntensity: 0.26,
      sssColor: '#66dcff',
      sssIntensity: 0.28,
    });
    const ribo30Mat = makeCinemaProteinMat('ribo_70s', {
      emissive: '#0c3430',
      emissiveIntensity: 0.26,
      sssColor: '#66ffd8',
      sssIntensity: 0.28,
    });
    const m50 = shade(new THREE.Mesh(T.geo50s, ribo50Mat));
    m50.position.set(0, 0.48, 0);
    m50.rotation.set(0.15, 0.30, 0.06);
    const m30 = shade(new THREE.Mesh(T.geo30s, ribo30Mat));
    m30.position.set(0.06, -0.58, 0.10);
    m30.rotation.set(-0.12, -0.22, -0.05);
    g70.add(m50, m30);
    placed += 2;

    // Bacterial mRNA strand threading horizontally through the 30S/50S decoding interface!
    const S_70M = sculpt('ribo_70s', g70, {
      emissive: '#382a0a',
      emissiveIntensity: 0.38,
      sssColor: '#ffe070',
    });
    const mrna70Pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 14; i++) {
      const u = i / 14;
      mrna70Pts.push(V(-1.08 + u * 2.16, -0.14 + Math.sin(u * 5.2) * 0.08, 0.66 + Math.cos(u * 3.1) * 0.08));
    }
    S_70M.tube(mrna70Pts, 0.036, 0.036, col('#ffd248'), col('#ffaa38'), 8, true);
    for (let i = 1; i < 14; i += 2) {
      const p = mrna70Pts[i];
      S_70M.stick(p, p.clone().add(V(0, 0.11, 0.03)), 0.018, col('#ffe676'), col('#60e8ff'));
      placed++;
    }
    S_70M.done();
    SITES.ribo_70s.push(S2_70S.clone());

    // --- 4B. macrolide_tunnel: 50S Exit Tunnel Plugged by Erythromycin/Azithromycin ---
    const S_MAC = sculpt('macrolide_tunnel', g70, {
      emissive: '#ff1e88',
      emissiveIntensity: 0.70,
      roughness: 0.18,
      clearcoat: 0.82,
      sssColor: '#ff90ce',
    });
    // Translucent tunnel chimney emerging upward through 50S core
    const tunnelTop = V(0.08, 1.38, 0.44);
    const tunnelPlug = V(0.08, 0.72, 0.56);
    const tunnelBot = V(0.05, 0.12, 0.52);
    // Stalled nascent bacterial peptide stopped abruptly against the macrolide ring!
    S_MAC.tube([tunnelBot, tunnelPlug.clone().add(V(0, -0.12, 0))], 0.042, 0.042, col('#ff9844'), col('#ffdc68'), 8, true);
    // Iconic 14-membered Erythromycin/Azithromycin macrocyclic lactone ring + desosamine/cladinose sugars!
    S_MAC.ring(tunnelPlug, V(0, 0.35, 0.94).normalize(), 0.24, 0.044, col('#ff42a6'), 24, 10);
    S_MAC.add(tunnelPlug.clone().add(V(0.24, 0.12, 0.06)), 0.12, col('#ff90d8'));
    S_MAC.add(tunnelPlug.clone().add(V(-0.22, -0.10, 0.08)), 0.11, col('#ffd068'));
    // Red X stop bar at top of exit tunnel showing blocked polypeptide extrusion
    S_MAC.stick(tunnelTop.clone().add(V(-0.14, -0.14, 0.08)), tunnelTop.clone().add(V(0.14, 0.14, 0.08)), 0.026, col('#ff4868'), col('#ff8098'));
    S_MAC.stick(tunnelTop.clone().add(V(-0.14, 0.14, 0.08)), tunnelTop.clone().add(V(0.14, -0.14, 0.08)), 0.026, col('#ff4868'), col('#ff8098'));
    placed += 6;
    S_MAC.done();

    macrolidePlugGlow = new THREE.Mesh(
      new THREE.TorusGeometry(0.32, 0.020, 10, 32),
      reg('macrolide_tunnel', phys({ color: '#ff52b8', emissive: '#ff2896', emissiveIntensity: 0.86, transparent: true, opacity: 0.80 }))
    );
    macrolidePlugGlow.position.copy(tunnelPlug).add(V(0, 0, 0.06));
    g70.add(macrolidePlugGlow);
    SITES.macrolide_tunnel.push(S2_70S.clone().add(tunnelPlug));

    // --- 4C. tetra_asite: Tetracycline 4-Ring Scaffold Blocking 30S A-Site + Bouncing tRNA ---
    const S_TET = sculpt('tetra_asite', g70, {
      emissive: '#c47a08',
      emissiveIntensity: 0.68,
      roughness: 0.18,
      clearcoat: 0.78,
      sssColor: '#ffe078',
    });
    const asite = V(0.36, -0.44, 0.74);
    // 4 fused linear aromatic rings (classic Tetracycline naphthacene core) + coordinating Mg2+ ion!
    for (let r = 0; r < 4; r++) {
      S_TET.ring(asite.clone().add(V((r - 1.5) * 0.14, 0, 0)), V(0, 0, 1), 0.082, 0.022, col('#ffbe38'), 12, 8);
      placed++;
    }
    S_TET.add(asite.clone().add(V(0, 0.13, 0.04)), 0.095, col('#56ff8c')); // Mg2+ bridge
    S_TET.done();

    // Animated incoming aminoacyl-tRNA visibly bouncing off the Tetracycline-blocked 30S A-site!
    tetraRejectTrna = new THREE.Group();
    tetraRejectTrna.position.copy(asite).add(V(0.38, -0.46, 0.16));
    g70.add(tetraRejectTrna);
    const S_TRNA = sculpt('tetra_asite', tetraRejectTrna, {
      emissive: '#185468',
      emissiveIntensity: 0.44,
      sssColor: '#7cf4ff',
    });
    // L-shaped tRNA silhouette
    S_TRNA.tube([V(0, 0.24, 0), V(0, 0, 0), V(0.24, 0, 0)], 0.044, 0.044, col('#4ce8ff'), col('#80ffd4'), 8, true);
    S_TRNA.add(V(0.28, 0, 0), 0.10, col('#ff9860')); // Amino acid cargo
    placed += 2;
    S_TRNA.done();
    SITES.tetra_asite.push(S2_70S.clone().add(asite));

    // --- 4D. ribo_80s_safe: Human Cytosolic 80S Ribosome (PDB 4UG0, Larger + Smoothly Translating!) ---
    const g80 = new THREE.Group();
    g80.position.copy(S2_80S);
    grp.add(g80);

    const ribo80Mat = makeCinemaProteinMat('ribo_80s_safe', {
      emissive: '#0e3c34',
      emissiveIntensity: 0.30,
      sssColor: '#66ffca',
      sssIntensity: 0.32,
    });
    const m80 = shade(new THREE.Mesh(T.geo80s, ribo80Mat));
    m80.rotation.set(0.14, -0.35, 0.04);
    g80.add(m80);
    placed++;

    // Active human mRNA ribbon + healthy emerald nascent polypeptide exiting unobstructed 60S tunnel!
    const S_80 = sculpt('ribo_80s_safe', g80, {
      emissive: '#146048',
      emissiveIntensity: 0.45,
      sssColor: '#80ffd4',
    });
    const mrna80Pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 14; i++) {
      const u = i / 14;
      mrna80Pts.push(V(-1.12 + u * 2.24, -0.16 + Math.sin(u * 4.5) * 0.07, 0.78));
    }
    S_80.tube(mrna80Pts, 0.036, 0.036, col('#68ffd0'), col('#50d8ff'), 8, true);
    S_80.done();

    ribo80sNascentChain = new THREE.Group();
    g80.add(ribo80sNascentChain);
    const S_NASC = sculpt('ribo_80s_safe', ribo80sNascentChain, {
      emissive: '#22c886',
      emissiveIntensity: 0.62,
      roughness: 0.22,
      clearcoat: 0.70,
    });
    const polyPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 12; i++) {
      const u = i / 12;
      polyPts.push(V(0.05 + Math.sin(u * 6.0) * 0.14, 0.68 + u * 0.92, 0.42 + Math.cos(u * 5.0) * 0.10));
    }
    S_NASC.tube(polyPts, 0.044, 0.036, col('#48ffaa'), col('#98ffe0'), 8, true);
    for (let i = 2; i <= 12; i += 2) {
      S_NASC.add(polyPts[i], 0.10, i % 4 === 0 ? col('#72ffd0') : col('#46f2ff'));
      placed++;
    }
    S_NASC.done();

    // Two stray bacterial antibiotics (1 macrolide, 1 tetracycline) visibly BOUNCING harmlessly off Human 80S!
    for (let b = 0; b < 2; b++) {
      const bGrp = new THREE.Group();
      bGrp.position.set(b === 0 ? -0.62 : 0.62, b === 0 ? 0.85 : -0.68, 0.90);
      g80.add(bGrp);
      const S_B = sculpt('ribo_80s_safe', bGrp, {
        emissive: b === 0 ? '#cc2a82' : '#c48618',
        emissiveIntensity: 0.55,
      });
      if (b === 0) S_B.ring(V(0, 0, 0), V(0, 0, 1), 0.14, 0.028, col('#ff58b4'), 16, 8);
      else S_B.lobe(V(0, 0, 0), 0.18, 0.07, 0.06, col('#ffc844'));
      S_B.done();
      ribo80sBouncers.push(bGrp);
      placed++;
    }

    makeStaticStationBanner('ribo_70s', grp, V(-1.42, DECK_Y - 1.90, DECK_Z + 0.45), '2. 70S HALTED vs 80S SPARED', '4V7U · 1HNW vs Human 4UG0', '#5ceeff', 2.85, 0.52);
    SITES.ribo_80s_safe.push(S2_80S.clone());
  }

  // -------------------------------------------------------------------------
  // 5. STATION 3 (`antivirals`): SARS-CoV-2 RdRp (`7BV2`) & HIV-1 RT (`3V4I`)
  // -------------------------------------------------------------------------
  function buildStation3Antivirals(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    cell.add(grp);

    // --- 5A. rdrp_remdesivir: SARS-CoV-2 RdRp (PDB 7BV2) stalled at i+3 by Remdesivir-TP ---
    const gRdrp = new THREE.Group();
    gRdrp.position.copy(S3_RDRP);
    grp.add(gRdrp);

    const rdrpMat = makeCinemaProteinMat('rdrp_remdesivir', {
      emissive: '#102454',
      emissiveIntensity: 0.28,
      sssColor: '#76b4ff',
      sssIntensity: 0.30,
    });
    const mRdrp = shade(new THREE.Mesh(T.geoRdrp, rdrpMat));
    mRdrp.rotation.set(0.22, -0.45, 0.10);
    gRdrp.add(mRdrp);
    placed++;

    // Viral dsRNA template/primer duplex threading active palm + glowing Remdesivir-MP 1'-CN clash at i+3!
    const S_RDV = sculpt('rdrp_remdesivir', gRdrp, {
      emissive: '#422014',
      emissiveIntensity: 0.44,
      roughness: 0.22,
      clearcoat: 0.68,
    });
    const tStrand: THREE.Vector3[] = [];
    const pStrand: THREE.Vector3[] = [];
    for (let i = 0; i <= 10; i++) {
      const u = i / 10;
      const x = -0.92 + u * 1.84;
      const ph = u * Math.PI * 2.2;
      tStrand.push(V(x, 0.18 + Math.sin(ph) * 0.14, 0.58 + Math.cos(ph) * 0.12));
      pStrand.push(V(x, -0.06 - Math.sin(ph) * 0.14, 0.58 - Math.cos(ph) * 0.12));
    }
    S_RDV.tube(tStrand, 0.030, 0.030, col('#52d8ff'), col('#80f2ff'), 8, true);
    S_RDV.tube(pStrand.slice(0, 8), 0.032, 0.032, col('#ffaa42'), col('#ff4e6a'), 8, true);
    for (let i = 1; i < 8; i++) {
      // Position i (index 4) is Remdesivir-MP; positions i+1, i+2, i+3 (indices 5,6,7) stall at Ser861!
      const isRdv = i === 4;
      const isStall = i === 7;
      S_RDV.stick(tStrand[i], pStrand[i], isRdv ? 0.028 : 0.018, isRdv ? col('#ff3c72') : col('#80e8ff'), isStall ? col('#ffe048') : col('#ffbc58'));
      if (isRdv) S_RDV.add(pStrand[i], 0.13, col('#ff3868')); // Remdesivir-MP with 1'-CN nitrile!
      if (isStall) S_RDV.add(pStrand[i], 0.14, col('#ffe64c')); // i+3 steric clash point against Ser861!
      placed++;
    }
    S_RDV.done();

    rdrpClashRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.024, 12, 32),
      reg('rdrp_remdesivir', phys({ color: '#ff5278', emissive: '#ff2454', emissiveIntensity: 0.92, transparent: true, opacity: 0.86 }))
    );
    rdrpClashRing.position.copy(pStrand[7]).add(V(0, 0.05, 0.08));
    gRdrp.add(rdrpClashRing);
    SITES.rdrp_remdesivir.push(S3_RDRP.clone());

    // --- 5B. hiv_rt_azt: HIV-1 Reverse Transcriptase (PDB 3V4I) halted at i+0 by 3'-OH-less AZT-TP ---
    const gHiv = new THREE.Group();
    gHiv.position.copy(S3_HIVRT);
    grp.add(gHiv);

    const hivRtMat = makeCinemaProteinMat('hiv_rt_azt', {
      emissive: '#2c124a',
      emissiveIntensity: 0.28,
      sssColor: '#d48cff',
      sssIntensity: 0.30,
    });
    const mHiv = shade(new THREE.Mesh(T.geoHivRt, hivRtMat));
    mHiv.rotation.set(-0.12, -0.35, -0.06);
    gHiv.add(mHiv);
    placed++;

    // Viral ssRNA template + nascent cDNA strand terminated immediately by 3'-azido AZT-MP!
    const S_AZT = sculpt('hiv_rt_azt', gHiv, {
      emissive: '#58124c',
      emissiveIntensity: 0.54,
      roughness: 0.18,
      clearcoat: 0.76,
    });
    const rnaH: THREE.Vector3[] = [];
    const dnaH: THREE.Vector3[] = [];
    for (let i = 0; i <= 9; i++) {
      const u = i / 9;
      const x = -0.84 + u * 1.68;
      const ph = u * Math.PI * 2.0;
      rnaH.push(V(x, 0.16 + Math.sin(ph) * 0.12, 0.82 + Math.cos(ph) * 0.08));
      dnaH.push(V(x, -0.08 - Math.sin(ph) * 0.12, 0.82 - Math.cos(ph) * 0.08));
    }
    S_AZT.tube(rnaH, 0.032, 0.032, col('#ffc852'), col('#ff8c58'), 8, true);
    S_AZT.tube(dnaH.slice(0, 6), 0.036, 0.036, col('#4ce8ff'), col('#e458ff'), 8, true);
    for (let i = 1; i < 6; i++) {
      S_AZT.stick(rnaH[i], dnaH[i], 0.020, col('#ffd268'), col('#60e8ff'));
      placed++;
    }
    // Obligate 3'-N3 Azido Terminator Cap (NO 3'-OH!) at dnaH[5]
    const aztTip = dnaH[5];
    S_AZT.add(aztTip, 0.16, col('#ff3c96'));
    // Linear N=N=N azido tail blocking the 3' elongation site
    S_AZT.stick(aztTip, aztTip.clone().add(V(0.28, -0.05, 0.06)), 0.032, col('#4c98ff'), col('#ff4288'));
    S_AZT.add(aztTip.clone().add(V(0.14, -0.02, 0.03)), 0.085, col('#4c98ff'));
    S_AZT.add(aztTip.clone().add(V(0.28, -0.05, 0.06)), 0.085, col('#4c98ff'));
    S_AZT.ring(aztTip, V(0, 0, 1), 0.25, 0.022, col('#ff4ca8'), 24, 8);
    S_AZT.done();

    // Animated incoming dNTP bouncing harmlessly off the 3'-OH-less AZT terminator!
    hivAztBounce = new THREE.Group();
    hivAztBounce.position.copy(aztTip).add(V(0.46, -0.08, 0.10));
    gHiv.add(hivAztBounce);
    const S_DNTP = sculpt('hiv_rt_azt', hivAztBounce, {
      emissive: '#22a0d4',
      emissiveIntensity: 0.65,
    });
    S_DNTP.add(V(0, 0, 0), 0.11, col('#5ceeff'));
    S_DNTP.add(V(0.12, 0.04, 0), 0.07, col('#ffa842'));
    S_DNTP.add(V(0.22, 0.02, 0), 0.07, col('#ffa842'));
    S_DNTP.done();
    placed += 3;

    makeStaticStationBanner('rdrp_remdesivir', grp, V(2.35, DECK_Y - 2.02, DECK_Z + 0.45), '3. VIRAL POLYMERASE ARREST', 'RdRp 7BV2 (i+3) · HIV RT 3V4I (AZT)', '#d290ff', 2.90, 0.52);
    SITES.hiv_rt_azt.push(S3_HIVRT.clone());
  }

  // -------------------------------------------------------------------------
  // 6. STATION 4 (`mrna_vaccine`): 90 nm mRNA-LNP -> Endosome Escape -> Cytosolic 80S OUTSIDE Intact Nucleus
  // -------------------------------------------------------------------------
  function buildStation4MrnaVaccine(T: ReturnType<typeof buildPdbTemplates>) {
    const grp = new THREE.Group();
    cell.add(grp);

    // --- 6A. mrna_lnp: ~90 nm Cutaway Ionizable Lipid Nanoparticle ---
    lnpHeroGroup = new THREE.Group();
    lnpHeroGroup.position.copy(S4_LNP);
    grp.add(lnpHeroGroup);

    const S_LNP = sculpt('mrna_lnp', lnpHeroGroup, {
      emissive: '#103c58',
      emissiveIntensity: 0.34,
      roughness: 0.22,
      clearcoat: 0.72,
      sssColor: '#76f0ff',
    });
    // Cutaway spherical shell of ionizable lipids (cyan-gold) + DSPC + cholesterol + PEG corona spikes
    for (let i = 0; i < 42; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 42);
      const th = Math.PI * (1 + Math.sqrt(5)) * i;
      const d = V(Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th));
      // Open front cutaway hemisphere so interior m1Psi mRNA cargo is clearly visible!
      if (d.z > 0.36 && d.x > -0.15) continue;
      const p = d.clone().multiplyScalar(0.56);
      const isPeg = i % 5 === 0;
      S_LNP.add(p, isPeg ? 0.11 : 0.135, isPeg ? col('#a0f8ff') : (i % 2 === 0 ? col('#44d8ff') : col('#ffc856')));
      if (isPeg) {
        S_LNP.stick(p, d.clone().multiplyScalar(0.76), 0.016, col('#88f4ff'), col('#d8fcff'));
      }
      placed++;
    }
    // Coiled m1Psi Spike mRNA condensed inside the LNP core!
    const lnpRna: THREE.Vector3[] = [];
    for (let i = 0; i <= 22; i++) {
      const u = i / 22;
      const r = 0.28 * (0.4 + 0.6 * Math.sin(u * Math.PI));
      lnpRna.push(V(Math.cos(u * 14) * r, (u - 0.5) * 0.56, Math.sin(u * 14) * r));
    }
    S_LNP.tube(lnpRna, 0.032, 0.032, col('#48ffb8'), col('#ffe066'), 8, true);
    S_LNP.done();
    SITES.mrna_lnp.push(S4_LNP.clone());

    // --- 6B. endosome_escape: Acidifying Endosome Vesicle (Shell #6!) + Low-pH Fusion Breach ---
    const gEndo = new THREE.Group();
    gEndo.position.copy(S4_ENDO);
    grp.add(gEndo);

    const endoMat = cinemaShellMat('endosome_escape', '#c88022', '#ffd884', ENDO_CLIP, {
      attenCol: '#8c5210',
      attenDist: 3.0,
      sssColor: '#ffc864',
      sssIntensity: 0.42,
      iridescence: 0.54,
      thickness: 0.38,
      normalMap: bump(8, 8),
    });
    const gEndoSphere = blobGeo(0.76, fbm, 88, 0.08, 2.4, 4);
    gEndo.add(shade(new THREE.Mesh(gEndoSphere, endoMat)));
    // Warm acidic interior cavity wall so endosome vesicle silhouette reads crisply against dark-field!
    const endoInnerMat = reg(
      'endosome_escape',
      applyBacklitSSS(
        phys({
          color: '#5a3008',
          emissive: '#381c04',
          emissiveIntensity: 0.45,
          roughness: 0.58,
          side: THREE.BackSide,
          transparent: true,
          opacity: 0.72,
        }, ENDO_CLIP),
        '#ffbc48',
        0.38,
        2.4
      )
    );
    gEndo.add(new THREE.Mesh(blobGeo(0.68, fbm, 88, 0.07, 2.4, 3), endoInnerMat));

    // Acidic H+ proton beads (pH ~5.8) protonating LNP lipids + fusion pore breach opening downward into cytosol!
    const S_EN = sculpt('endosome_escape', gEndo, {
      emissive: '#a85a10',
      emissiveIntensity: 0.58,
      roughness: 0.20,
      clearcoat: 0.72,
    });
    // Protonated ionizable lipid fusion collar at bottom breach of endosome
    S_EN.ring(V(-0.08, -0.68, 0.22), V(0.12, -0.95, 0.28).normalize(), 0.30, 0.044, col('#ffba42'), 24, 10);
    // H+ proton sparks inside acidic lumen
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      S_EN.add(V(Math.cos(a) * 0.38, Math.sin(a) * 0.32, rr(-0.18, 0.14)), 0.078, col('#ffe664'));
      placed++;
    }
    S_EN.done();

    endosomePulseRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.022, 10, 32),
      reg('endosome_escape', phys({ color: '#ffd468', emissive: '#ffaa28', emissiveIntensity: 0.88, transparent: true, opacity: 0.84 }))
    );
    endosomePulseRing.position.set(-0.08, -0.70, 0.24);
    endosomePulseRing.rotation.x = Math.PI * 0.45;
    gEndo.add(endosomePulseRing);
    SITES.endosome_escape.push(S4_ENDO.clone());

    // --- 6C. vaccine_mrna: m1Psi Spike mRNA Unspooling Directly onto Cytosolic 80S Ribosomes (4UG0) ---
    const gVac = new THREE.Group();
    grp.add(gVac);

    const S_VM = sculpt('vaccine_mrna', gVac, {
      emissive: '#147a5c',
      emissiveIntensity: 0.56,
      roughness: 0.20,
      clearcoat: 0.74,
      sssColor: '#76ffda',
    });
    // Continuous m1Psi-modified Spike mRNA ribbon streaming out of endosome breach across cytosolic 80S ribosomes!
    const vacRnaPts = [
      S4_ENDO.clone().add(V(-0.08, -0.32, 0.18)),
      S4_ENDO.clone().add(V(-0.14, -0.82, 0.34)),
      S4_MRNA.clone().add(V(-0.62, 0.02, 0.18)),
      S4_MRNA.clone().add(V(-0.10, -0.18, 0.26)),
      S4_MRNA.clone().add(V(0.46, -0.10, 0.22)),
      S4_MRNA.clone().add(V(0.84, -0.34, 0.16)),
    ];
    const vacCurve = new THREE.CatmullRomCurve3(vacRnaPts);
    const vacSamples = vacCurve.getPoints(36);
    S_VM.tube(vacSamples, 0.044, 0.044, col('#46ffb8'), col('#56e4ff'), 10, true);
    // Highlight m1Psi modified uridines as radiant golden-cyan beads along the mRNA + 5'-Cap!
    S_VM.add(vacSamples[0], 0.12, col('#ffe658')); // 5'-m7G Cap
    for (let i = 4; i < vacSamples.length; i += 4) {
      S_VM.add(vacSamples[i].clone().add(V(0, 0.09, 0.04)), 0.072, i % 8 === 0 ? col('#ffe056') : col('#72fff0'));
      placed++;
    }
    S_VM.done();

    // Two Cytosolic Human 80S Ribosomes (real PDB 4UG0!) actively translating Spike proteins OUTSIDE the nucleus!
    const vacRiboMat = makeCinemaProteinMat('vaccine_mrna', {
      emissive: '#10443c',
      emissiveIntensity: 0.34,
      sssColor: '#66ffd8',
      sssIntensity: 0.34,
    });
    const riboCoords = [
      S4_MRNA.clone().add(V(-0.44, -0.02, -0.02)),
      S4_MRNA.clone().add(V(0.32, -0.18, 0.02)),
    ];
    riboCoords.forEach((pos, idx) => {
      const m = shade(new THREE.Mesh(T.geo80s, vacRiboMat));
      m.position.copy(pos);
      m.scale.setScalar(0.56);
      m.rotation.set(0.18, idx === 0 ? -0.45 : 0.35, 0.06);
      gVac.add(m);
      placed++;

      // Freshly translated prefusion SARS-CoV-2 Spike glycoprotein trimers emerging into the cytosol!
      const spGrp = new THREE.Group();
      spGrp.position.copy(pos).add(V(0.02, 0.42, 0.25));
      gVac.add(spGrp);
      const S_SP = sculpt('vaccine_mrna', spGrp, {
        emissive: '#22c896',
        emissiveIntensity: 0.65,
        roughness: 0.18,
        clearcoat: 0.78,
      });
      S_SP.stick(V(0, -0.16, 0), V(0, 0.18, 0), 0.026, col('#48ffb8'), col('#78f4ff'));
      for (let t = 0; t < 3; t++) {
        const a = (t / 3) * Math.PI * 2;
        S_SP.lobe(V(Math.cos(a) * 0.09, 0.22, Math.sin(a) * 0.09), 0.075, 0.085, 0.075, col('#ffe264'));
      }
      S_SP.done();
      vaccineSpikeTrimers.push(spGrp);
      placed += 3;
    });
    SITES.vaccine_mrna.push(S4_MRNA.clone());

    // --- 6D. intact_nucleus: Glowing Intact Purple Nuclear Envelope (Shell #7!) + NPCs + Untouched Host DNA ---
    const gNuc = new THREE.Group();
    gNuc.position.copy(S4_NUC);
    grp.add(gNuc);

    const nucEnvMat = cinemaShellMat('intact_nucleus', '#6c34c8', '#c69cff', {}, {
      attenCol: '#481d92',
      attenDist: 3.4,
      sssColor: '#b478ff',
      sssIntensity: 0.40,
      iridescence: 0.58,
      thickness: 0.46,
      normalMap: bump(10, 10),
    });
    // Sculpted intact nuclear hemisphere/dome (zero cutaway breach — visibly intact protective barrier!)
    const gNucSphere = shellGeo(V(0, 0, 0), d => {
      const n = fbm(d.x * 2.4 + 1.5, d.y * 2.4, d.z * 2.4 + 4.2, 3);
      return 1.06 * (1 + 0.025 * (n - 0.5) * 2);
    }, 64);
    gNuc.add(shade(new THREE.Mesh(gNucSphere, nucEnvMat)));

    // Glowing octagonal Nuclear Pore Complexes (NPCs) + untouched double-helical Human Genomic DNA safely INSIDE!
    const S_NUC = sculpt('intact_nucleus', gNuc, {
      emissive: '#3e187a',
      emissiveIntensity: 0.44,
      roughness: 0.24,
      clearcoat: 0.65,
      sssColor: '#cca0ff',
    });
    // 10 NPC rings distributed on the visible left/front nuclear envelope
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 1.4 - 0.7;
      const elev = ((i % 3) - 1) * 0.46;
      const dir = V(-Math.cos(a) * Math.cos(elev), Math.sin(elev), Math.sin(a) * Math.cos(elev) + 0.52).normalize();
      S_NUC.ring(dir.clone().multiplyScalar(1.06), dir, 0.12, 0.026, col('#e0b0ff'), 8, 8);
      placed++;
    }
    // Untouched Human Genomic Double-Helix DNA glowing serenely inside the nucleus!
    const hA: THREE.Vector3[] = [];
    const hB: THREE.Vector3[] = [];
    for (let i = 0; i <= 18; i++) {
      const u = i / 18;
      const y = -0.62 + u * 1.24;
      const ph = u * Math.PI * 3.6;
      hA.push(V(Math.cos(ph) * 0.26, y, Math.sin(ph) * 0.26));
      hB.push(V(-Math.cos(ph) * 0.26, y, -Math.sin(ph) * 0.26));
    }
    S_NUC.tube(hA, 0.028, 0.028, col('#78e4ff'), col('#c098ff'), 8, true);
    S_NUC.tube(hB, 0.028, 0.028, col('#ff9ad8'), col('#b488ff'), 8, true);
    for (let i = 1; i < 18; i += 2) {
      S_NUC.stick(hA[i], hB[i], 0.016, col('#88f4ff'), col('#ffc0e8'));
      placed++;
    }
    S_NUC.done();

    // Luminous protective barrier arc between cytosolic mRNA translation zone and the intact nucleus!
    nucleusShieldArc = new THREE.Mesh(
      new THREE.TorusGeometry(1.18, 0.024, 10, 44, Math.PI * 0.92),
      reg('intact_nucleus', phys({ color: '#c48eff', emissive: '#9452ff', emissiveIntensity: 0.88, transparent: true, opacity: 0.82 }))
    );
    nucleusShieldArc.rotation.z = Math.PI * 0.54;
    nucleusShieldArc.position.set(0, 0, 0.14);
    gNuc.add(nucleusShieldArc);

    makeStaticStationBanner('intact_nucleus', grp, V(5.80, DECK_Y - 0.94, DECK_Z + 0.80), '4. CYTOSOLIC mRNA-LNP', '80S Translation · ZERO Nuclear Entry', '#66ffd8', 2.68, 0.44);
    SITES.intact_nucleus.push(S4_NUC.clone());
  }

  // -------------------------------------------------------------------------
  // 7. OPTICAL ATOMIC INSET (`drug_atoms`): β-Lactam–Ser62 Ester · AZT (3′-N₃) · m¹Ψ
  // -------------------------------------------------------------------------
  function buildAtomicDrugInset() {
    const grp = new THREE.Group();
    grp.position.copy(ATOM_C);
    cell.add(grp);

    const R_RING = 1.18;
    const ringMat = reg(
      'drug_atoms',
      phys({
        color: '#7ce8ff',
        emissive: '#125a7c',
        emissiveIntensity: 0.50,
        roughness: 0.18,
        metalness: 0.24,
        clearcoat: 0.76,
      })
    );
    grp.add(new THREE.Mesh(new THREE.TorusGeometry(R_RING, 0.034, 14, 64), ringMat));

    const glassDisc = new THREE.Mesh(
      new THREE.CircleGeometry(R_RING - 0.02, 56),
      reg(
        'drug_atoms',
        phys({
          color: '#071122',
          roughness: 0.18,
          transparent: true,
          opacity: 0.82,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
    );
    glassDisc.position.z = -0.10;
    grp.add(glassDisc);

    // Ball-and-stick CPK atomic geometry (using both sculpted meshes + impostor sticks/atoms!)
    const S_AT = sculpt('drug_atoms', grp, {
      emissive: '#102438',
      emissiveIntensity: 0.30,
      roughness: 0.18,
      clearcoat: 0.72,
    });
    const B_AT = balls('drug_atoms', grp, false);

    const cC = col('#94a4ba'); // Carbon
    const cH = col('#f0f8ff'); // Hydrogen
    const cN = col('#4c96ff'); // Nitrogen
    const cO = col('#ff5264'); // Oxygen
    const cS = col('#ffe048'); // Sulfur
    const cP = col('#ff9838'); // Phosphorus
    const cBond = col('#c8daf0');

    const atom = (p: THREE.Vector3, r: number, c: THREE.Color) => {
      S_AT.add(p, r * 2, c);
      B_AT.add(p, r * 0.4, c);
      placed++;
    };
    const bond = (a: THREE.Vector3, b: THREE.Vector3, c1 = cBond, c2 = cBond, r = 0.017) => S_AT.stick(a, b, r, c1, c2);

    // Subtle vertical dividers separating the 3 atomic pharmacophores cleanly inside R_RING = 1.28
    S_AT.stick(V(-0.37, -0.58, -0.04), V(-0.37, 0.56, -0.04), 0.008, col('#4a668c'), col('#4a668c'));
    S_AT.stick(V(0.37, -0.58, -0.04), V(0.37, 0.56, -0.04), 0.008, col('#4a668c'), col('#4a668c'));

    // PANEL 1 (Left): 1.35 Å β-Lactam—Ser62 Covalent Acyl-Ester
    const pSerO = V(-0.92, 0.12, 0.08);
    const pCcarb = V(-0.74, 0.12, 0.09);
    const pOcarb = V(-0.74, 0.30, 0.10);
    const pC2 = V(-0.56, 0.02, 0.08);
    const pN = V(-0.56, -0.18, 0.08);
    const pS = V(-0.76, -0.26, 0.08);
    const pC3 = V(-0.88, -0.12, 0.08);
    atom(pSerO, 0.068, cO); // Ser62 Oγ
    atom(pCcarb, 0.062, cC);
    atom(pOcarb, 0.064, cO);
    atom(pC2, 0.056, cC);
    atom(pN, 0.062, cN);
    atom(pS, 0.074, cS); // Thiazolidine S!
    atom(pC3, 0.056, cC);
    bond(pSerO, pCcarb, col('#ffe658'), col('#ff5878'), 0.024); // Highlighted 1.35 Å covalent ester lock!
    bond(pCcarb, pOcarb, cC, cO);
    bond(pCcarb, pC2, cC, cC);
    bond(pC2, pN, cC, cN);
    bond(pN, pS, cN, cS);
    bond(pS, pC3, cS, cC);
    bond(pC3, pC2, cC, cC);

    // PANEL 2 (Center): AZT (3'-N3 Azido — NO 3'-OH!)
    const aO4 = V(0.00, 0.24, 0.08);
    const aC1 = V(0.18, 0.10, 0.08);
    const aC2 = V(0.12, -0.10, 0.08);
    const aC3 = V(-0.12, -0.10, 0.08);
    const aC4 = V(-0.18, 0.10, 0.08);
    const aP = V(-0.24, 0.28, 0.08);
    // Linear 3'-azido N=N+=N- replacing 3'-OH!
    const aN1 = V(-0.12, -0.26, 0.10);
    const aN2 = V(0.02, -0.36, 0.10);
    const aN3 = V(0.16, -0.44, 0.10);
    atom(aO4, 0.058, cO);
    atom(aC1, 0.054, cC);
    atom(aC2, 0.054, cC);
    atom(aC3, 0.054, cC);
    atom(aC4, 0.054, cC);
    atom(aP, 0.066, cP);
    atom(aN1, 0.062, cN);
    atom(aN2, 0.062, cN);
    atom(aN3, 0.062, cN);
    bond(aO4, aC1, cO, cC);
    bond(aC1, aC2, cC, cC);
    bond(aC2, aC3, cC, cC);
    bond(aC3, aC4, cC, cC);
    bond(aC4, aO4, cC, cO);
    bond(aC4, aP, cC, cP);
    bond(aC3, aN1, cC, cN, 0.022);
    bond(aN1, aN2, cN, cN, 0.024);
    bond(aN2, aN3, cN, cN, 0.024);

    // PANEL 3 (Right): m1Psi (N1-Methylpseudouridine C-C glycosidic base + N1-CH3)
    const mC = V(0.72, 0.02, 0.08);
    const hexPts = Array.from({ length: 6 }, (_, i) => {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
      return mC.clone().add(V(Math.cos(a) * 0.20, Math.sin(a) * 0.20, 0));
    });
    const hexCols = [cN, cC, cN, cC, cC, cC];
    hexPts.forEach((pt, idx) => {
      atom(pt, idx === 0 || idx === 2 ? 0.062 : 0.054, hexCols[idx]);
      bond(pt, hexPts[(idx + 1) % 6], hexCols[idx], hexCols[(idx + 1) % 6]);
    });
    // Two carbonyl oxygens (=O) + signature N1-CH3 methyl cap!
    const mO1 = hexPts[1].clone().add(V(0, 0.16, 0.02));
    const mO2 = hexPts[3].clone().add(V(-0.14, -0.06, 0.02));
    const mMe = hexPts[0].clone().add(V(0.16, 0.08, 0.04)); // N1-Methyl badge!
    atom(mO1, 0.060, cO);
    atom(mO2, 0.060, cO);
    atom(mMe, 0.068, col('#56ffb8'));
    atom(mMe.clone().add(V(0.08, 0.06, 0.01)), 0.036, cH);
    bond(hexPts[1], mO1, cC, cO);
    bond(hexPts[3], mO2, cC, cO);
    bond(hexPts[0], mMe, cN, col('#56ffb8'), 0.024);

    S_AT.done();
    B_AT.done();

    // Crisp top & bottom labels centered generously inside R_RING = 1.18 (zero overlap or border clipping!)
    const topCv = document.createElement('canvas');
    topCv.width = 512;
    topCv.height = 96;
    const tg = topCv.getContext('2d')!;
    tg.textAlign = 'center';
    tg.font = '700 20px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#ff98b0';
    tg.fillText('β-Lactam 1.35Å', 96, 34);
    tg.fillStyle = '#d8a4ff';
    tg.fillText('AZT (3′-N₃)', 256, 34);
    tg.fillStyle = '#76ffd4';
    tg.fillText('m¹Ψ Cap', 416, 34);
    tg.font = '600 19px system-ui, -apple-system, sans-serif';
    tg.fillStyle = '#d4ebff';
    tg.fillText('Atomic Pharmacophores', 256, 70);
    const topTex = new THREE.CanvasTexture(topCv);
    topTex.colorSpace = THREE.SRGBColorSpace;
    const topLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.48, 0.28),
      reg('drug_atoms', new THREE.MeshStandardMaterial({ map: topTex, emissive: '#ffffff', emissiveMap: topTex, emissiveIntensity: 0.85, transparent: true, depthWrite: false, side: THREE.DoubleSide }))
    );
    topLbl.position.set(0, 0.72, 0.14);
    grp.add(topLbl);

    const botCv = document.createElement('canvas');
    botCv.width = 512;
    botCv.height = 96;
    const bg = botCv.getContext('2d')!;
    bg.textAlign = 'center';
    bg.font = '700 21px system-ui, -apple-system, sans-serif';
    bg.fillStyle = '#ffe070';
    bg.fillText('Ser62 Ester · No 3′-OH · TLR-Quiet m¹Ψ', 256, 28);
    const cpkRow = [
      ['C', '#94a4ba'], ['H', '#f0f8ff'], ['N', '#4c96ff'], ['O', '#ff5264'], ['P', '#ff9838'], ['S', '#ffe048'],
    ];
    bg.font = '700 21px system-ui, -apple-system, sans-serif';
    bg.textAlign = 'left';
    bg.textBaseline = 'middle';
    cpkRow.forEach(([sym, hex], idx) => {
      const bx = 46 + idx * 72;
      bg.beginPath();
      bg.arc(bx, 68, 10, 0, Math.PI * 2);
      bg.fillStyle = hex;
      bg.fill();
      bg.fillStyle = '#f2f8ff';
      bg.fillText(sym, bx + 14, 69);
    });
    const botTex = new THREE.CanvasTexture(botCv);
    botTex.colorSpace = THREE.SRGBColorSpace;
    const botLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.42, 0.26),
      reg('drug_atoms', new THREE.MeshStandardMaterial({ map: botTex, emissive: '#ffffff', emissiveMap: botTex, emissiveIntensity: 0.85, transparent: true, depthWrite: false, side: THREE.DoubleSide }))
    );
    botLbl.position.set(0, -0.74, 0.14);
    grp.add(botLbl);

    SITES.drug_atoms.push(ATOM_C.clone());
  }

  // -------------------------------------------------------------------------
  // 8. Live Opaque-Discard 4x4 Atlas MOL Flows (Exact 6 Species + Live Counters)
  //    penicillin_flux, macrolide_flux, rdv_azt_tp, lnp_particles, spike_antigen, rnase_clear
  // -------------------------------------------------------------------------
  const MOL: Record<string, [string, string, number, number]> = {
    penicillin_flux: ['Penicillin G (β-Lactam)', '#ff6284', 0, 0.26],
    macrolide_flux: ['Macrolide / Tetracycline', '#ffc24a', 1, 0.27],
    rdv_azt_tp: ['Remdesivir-TP / AZT-TP', '#cc7aff', 2, 0.26],
    lnp_particles: ['90 nm mRNA-LNP', '#52e6ff', 3, 0.29],
    spike_antigen: ['Spike Antigen (80S)', '#46f5a8', 4, 0.28],
    rnase_clear: ['Cytosolic RNase Decay', '#ff9868', 5, 0.24],
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
      case 0: // penicillin_flux: square β-lactam fused to 5-ring thiazolidine
        drawPoly([[0.22, 0.32], [0.50, 0.32], [0.50, 0.68], [0.22, 0.68]], true, 0.10);
        drawPoly([[0.50, 0.32], [0.78, 0.42], [0.78, 0.62], [0.50, 0.68]], true, 0.09);
        drawBalls([[0.76, 0.52, 0.11]]);
        break;
      case 1: // macrolide_flux: macrocyclic ring + sugar lobe
        g.lineWidth = s * 0.21; g.strokeStyle = ink;
        g.beginPath(); g.arc(...P(0.46, 0.50), s * 0.28, 0, Math.PI * 2); g.stroke();
        g.lineWidth = s * 0.11; g.strokeStyle = gr;
        g.beginPath(); g.arc(...P(0.46, 0.50), s * 0.28, 0, Math.PI * 2); g.stroke();
        drawBalls([[0.76, 0.34, 0.13]]);
        break;
      case 2: // rdv_azt_tp: pentose nucleoside + triphosphate tail
        drawPoly([[0.50, 0.22], [0.74, 0.42], [0.64, 0.72], [0.36, 0.72], [0.26, 0.42]], true, 0.09);
        drawBalls([[0.20, 0.26, 0.12], [0.50, 0.50, 0.10]]);
        break;
      case 3: // lnp_particles: 90 nm core-shell lipid nanoparticle
        drawBalls([[0.50, 0.50, 0.34]]);
        drawPoly([[0.32, 0.46], [0.50, 0.58], [0.68, 0.44]], false, 0.08);
        break;
      case 4: // spike_antigen: trimeric Spike Y-crown glycoprotein
        drawPoly([[0.50, 0.80], [0.50, 0.44]], false, 0.10);
        drawBalls([[0.32, 0.32, 0.15], [0.50, 0.24, 0.15], [0.68, 0.32, 0.15]]);
        break;
      case 5: // rnase_clear: cleaved short mRNA fragments
        drawPoly([[0.20, 0.38], [0.42, 0.30]], false, 0.09);
        drawPoly([[0.56, 0.54], [0.80, 0.44]], false, 0.09);
        drawBalls([[0.36, 0.68, 0.13], [0.68, 0.70, 0.11]]);
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
        gl_PointSize = clamp(size * uBoost * uScale / max(.05, -mv.z), 0., 64.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D uTex; varying vec3 vCol; varying float vA;
      void main() { float a = texture2D(uTex, gl_PointCoord).a * vA; if (a < .01) discard; gl_FragColor = vec4(vCol, a); }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  impMats.push(fxMat);
  const FX_MAX = 160;
  const xPos = new Float32Array(FX_MAX * 3), xSize = new Float32Array(FX_MAX), xCol = new Float32Array(FX_MAX * 3), xA = new Float32Array(FX_MAX);
  const fxGeo = new THREE.BufferGeometry();
  [['position', xPos, 3], ['size', xSize, 1], ['icol', xCol, 3], ['alpha', xA, 1]].forEach(([nm, arr, d]) =>
    fxGeo.setAttribute(nm as string, new THREE.BufferAttribute(arr as Float32Array, d as number).setUsage(THREE.DynamicDrawUsage))
  );
  const fxPts = new THREE.Points(fxGeo, fxMat);
  fxPts.frustumCulled = false;
  cell.add(fxPts);

  const live: Array<{
    i: number;
    type: string;
    curve: THREE.CatmullRomCurve3;
    tags: string[];
    t: number;
    dur: number;
    ph: number;
    wob: number;
    onDone?: () => void;
  }> = [];
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
    fx.push({ i, at: at.clone(), t: 0, life: 0.56, s, c: col(hex) });
  }

  function emitFlow(type: string, pts: THREE.Vector3[], tags: string[], dur = 2.5, onDone?: () => void) {
    if (!free.length || pts.length < 2) return;
    const i = free.pop()!;
    const curve = new THREE.CatmullRomCurve3(pts);
    const c = col(MOL[type][1]);
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fGly[i] = MOL[type][2];
    flowGeo.attributes.icol.needsUpdate = flowGeo.attributes.glyph.needsUpdate = true;
    live.push({ i, type, curve, tags, t: 0, dur, ph: rr(0, 6.283), wob: 0.045, onDone });
    FLOW_COUNTS[type] = (FLOW_COUNTS[type] ?? 0) + 1;
    const el = molCountEls[type];
    if (el) el.textContent = String(FLOW_COUNTS[type]);
  }

  const STREAM_TIMERS = [
    // 1. Penicillin G targeting E. coli PBP (1PWC) & bouncing harmlessly off Mycoplasma
    {
      rate: () => (mode === 'penicillin' ? 3.2 : 1.1),
      acc: 0.5,
      go: () => {
        const p0 = S1_PBP.clone().add(V(rr(-1.4, 0.8), 1.45, rr(0.2, 0.7)));
        const p1 = S1_PBP.clone().add(V(-0.12, 0.18, 0.76));
        emitFlow('penicillin_flux', [p0, p0.clone().lerp(p1, 0.5).add(V(0, 0.15, 0.2)), p1], ['pbp_penicillin', 'pg_wall', 'bench_ecoli'], 2.2, () => {
          if (mode === 'penicillin') splash(p1, '#ff5478', 0.36);
        });
        // Bench delivery to E. coli
        const b0 = ECOLI_C.clone().add(V(rr(-1.2, 1.2), 1.25, 0.4));
        emitFlow('penicillin_flux', [b0, ECOLI_C.clone().add(V(0, 0.35, 0.45))], ['bench_ecoli', 'pbp_penicillin'], 2.0);
      },
    },
    // 2. Macrolide / Tetracycline docking into bacterial 70S (4V7U & 1HNW) + all 3 bacterial bench organisms!
    {
      rate: () => (mode === 'macrolide_tetra' ? 3.4 : 1.0),
      acc: 0.4,
      go: () => {
        const toTunnel = rand() < 0.52;
        const tgt = toTunnel ? S2_70S.clone().add(V(0.08, 0.72, 0.56)) : S2_70S.clone().add(V(0.36, -0.44, 0.74));
        const p0 = S2_70S.clone().add(V(rr(-1.1, 1.1), toTunnel ? 1.55 : -1.45, 0.70));
        emitFlow('macrolide_flux', [p0, p0.clone().lerp(tgt, 0.5).add(V(0, 0, 0.25)), tgt], ['ribo_70s', toTunnel ? 'macrolide_tunnel' : 'tetra_asite', 'bench_myco', 'bench_chlam'], 2.3, () => {
          if (mode === 'macrolide_tetra') splash(tgt, '#ffc244', 0.32);
        });
        if (mode === 'macrolide_tetra') {
          const bTargets = [ECOLI_C, MYCO_C, CHLAM_C];
          const bt = bTargets[Math.floor(rand() * 3)];
          const b0 = bt.clone().add(V(rr(-0.9, 0.9), 1.25, 0.4));
          emitFlow('macrolide_flux', [b0, bt.clone().add(V(0, 0.28, 0.45))], ['bench_ecoli', 'bench_myco', 'bench_chlam', 'ribo_70s'], 2.1);
        }
      },
    },
    // 3. Remdesivir-TP & AZT-TP nucleoside analogs arresting SARS-CoV-2 RdRp & HIV-1 RT + Viral bench pair!
    {
      rate: () => (mode === 'antivirals' ? 3.4 : 1.0),
      acc: 0.4,
      go: () => {
        const toRdrp = rand() < 0.52;
        const tgt = toRdrp ? S3_RDRP.clone().add(V(0.15, -0.05, 0.62)) : S3_HIVRT.clone().add(V(0.10, -0.08, 0.85));
        const p0 = tgt.clone().add(V(rr(-0.95, 0.95), rr(0.75, 1.25), 0.55));
        emitFlow('rdv_azt_tp', [p0, p0.clone().lerp(tgt, 0.5).add(V(0, 0.12, 0.20)), tgt], [toRdrp ? 'rdrp_remdesivir' : 'hiv_rt_azt', 'bench_virus'], 2.2, () => {
          if (mode === 'antivirals') splash(tgt, '#d07aff', 0.36);
        });
        if (mode === 'antivirals') {
          const b0 = VIRUS_C.clone().add(V(rr(-0.9, 0.9), 1.25, 0.4));
          emitFlow('rdv_azt_tp', [b0, VIRUS_C.clone().add(V(0, 0.25, 0.45))], ['bench_virus', 'rdrp_remdesivir', 'hiv_rt_azt'], 2.0);
        }
      },
    },
    // 4. 90 nm mRNA-LNP entering acidifying endosome -> releasing Spike mRNA into cytosol
    {
      rate: () => (mode === 'mrna_lnp' ? 3.0 : 1.2),
      acc: 0.5,
      go: () => {
        const p0 = S4_LNP.clone().add(V(-0.85, 0.72, 0.45));
        const p1 = S4_LNP.clone();
        const p2 = S4_ENDO.clone().add(V(-0.08, -0.25, 0.28));
        emitFlow('lnp_particles', [p0, p1, p2], ['mrna_lnp', 'endosome_escape', 'bench_human'], 2.6, () => {
          if (mode === 'mrna_lnp') splash(p2, '#52e8ff', 0.36);
        });
      },
    },
    // 5. Cytosolic 80S Spike Antigen production rising toward Human Cell MHC-I surface (strictly OUTSIDE intact nucleus & clear of plaques!)
    {
      rate: () => (mode === 'mrna_lnp' ? 3.2 : 1.0),
      acc: 0.4,
      go: () => {
        const p0 = S4_MRNA.clone().add(V(rr(-0.4, 0.3), 0.28, 0.32));
        const p1 = S4_MRNA.clone().add(V(0.45, 1.55, 0.42));
        const p2 = HUMAN_C.clone().add(V(0.68, -0.35, 0.40));
        emitFlow('spike_antigen', [p0, p1, p2], ['vaccine_mrna', 'ribo_80s_safe', 'bench_human', 'intact_nucleus'], 2.8, () => {
          if (mode === 'mrna_lnp') splash(p2, '#48ffb8', 0.34);
        });
      },
    },
    // 6. Natural Cytosolic RNase Clearance of transient vaccine mRNA (zero nuclear entry & clear of Station 4 banner!)
    {
      rate: () => (mode === 'mrna_lnp' ? 2.4 : 0.9),
      acc: 0.3,
      go: () => {
        const p0 = S4_MRNA.clone().add(V(-0.78, -0.25, 0.34));
        const p1 = S4_MRNA.clone().add(V(-1.18, -0.58, 0.38));
        const p2 = S4_MRNA.clone().add(V(-1.42, -1.05, 0.35));
        emitFlow('rnase_clear', [p0, p1, p2], ['vaccine_mrna', 'intact_nucleus'], 2.5);
      },
    },
  ];

  function updateFlows(dt: number) {
    fClock += dt;
    if (dt > 0) {
      STREAM_TIMERS.forEach(s => {
        s.acc += dt * s.rate();
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
      q.y += a * Math.cos(w * 4.2 + p.ph * 1.3);
      q.z += a * Math.sin(w * 4.6 + p.ph * 1.7);
      const env = Math.min(1, p.t / 0.1, (1 - p.t) / 0.1);
      const lit = molHi ? p.type === molHi : hi ? p.tags.includes(hi) : true;
      fPos[p.i * 3] = q.x; fPos[p.i * 3 + 1] = q.y; fPos[p.i * 3 + 2] = q.z;
      fSize[p.i] = base * env * (anyHi ? (lit ? 1.48 : 0.48) : 1);
      fFade[p.i] = anyHi && !lit ? 0.26 : 1;
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
  // 9. Live Pharmacological Biomechanics & Organism Outcomes Animation
  // -------------------------------------------------------------------------
  function updateBiomechanics(dt: number) {
    animClock += dt;

    // 1. Upper Bench E. coli live osmotic bulge/rupture in penicillin mode!
    if (ecoliBodyMesh && ecoliLysisFx) {
      const isPen = mode === 'penicillin';
      const isMac = mode === 'macrolide_tetra';
      ecoliLysisFx.visible = isPen;
      const bulge = isPen ? 1.15 + 0.06 * Math.sin(animClock * 5.2) : isMac ? 0.94 : 1.0 + 0.015 * Math.sin(animClock * 2.0);
      ecoliBodyMesh.scale.set(isPen ? 1.05 : 1.0, bulge, bulge);
      if (isPen) ecoliLysisFx.scale.setScalar(1 + 0.05 * Math.sin(animClock * 5.8));
    }

    // 2. Mycoplasma shield pulse in penicillin mode vs dimmed halt in macrolide_tetra
    if (mycoShieldRing && mycoRoot) {
      mycoShieldRing.visible = mode === 'penicillin';
      if (mycoShieldRing.visible) mycoShieldRing.rotation.z = animClock * 0.8;
      mycoRoot.scale.setScalar(mode === 'macrolide_tetra' ? 0.92 : 1.0 + 0.02 * Math.sin(animClock * 2.2));
    }

    // 3. Chlamydia aberrant RB swelling in penicillin vs dimmed halt in macrolide_tetra
    if (chlamRbGroup) {
      const s = mode === 'penicillin' ? 1.14 + 0.03 * Math.sin(animClock * 2.4) : mode === 'macrolide_tetra' ? 0.84 : 1.0;
      chlamRbGroup.scale.setScalar(s);
    }

    // 4. Virus pair: arrest rings in antivirals, neutralizing IgG crown in mrna_lnp!
    if (virusArrestGroup && virusIggGroup) {
      virusArrestGroup.visible = mode === 'antivirals';
      virusIggGroup.visible = mode === 'mrna_lnp';
      if (virusArrestGroup.visible) {
        virusArrestGroup.rotation.z = animClock * 0.9;
        virusArrestGroup.scale.setScalar(1 + 0.04 * Math.sin(animClock * 4.5));
      }
      if (virusIggGroup.visible) {
        virusIggGroup.rotation.z = 0.08 * Math.sin(animClock * 2.1);
      }
    }

    // 5. Human cell: surface MHC-I Spike priming glow in mrna_lnp!
    if (humanSpikePrimeGroup) {
      humanSpikePrimeGroup.visible = mode === 'mrna_lnp';
      if (humanSpikePrimeGroup.visible) {
        humanSpikePrimeGroup.scale.setScalar(1 + 0.035 * Math.sin(animClock * 3.8));
      }
    }

    // 6. Station 1: Peptidoglycan rupture rays + PBP covalent lock pulse
    if (pgRuptureFx) {
      pgRuptureFx.visible = mode === 'penicillin';
      if (pgRuptureFx.visible) pgRuptureFx.scale.setScalar(1 + 0.06 * Math.sin(animClock * 5.0));
    }
    if (pbpPenGlowRing) {
      const s = mode === 'penicillin' ? 1.05 + 0.10 * Math.sin(animClock * 4.6) : 0.90;
      pbpPenGlowRing.scale.setScalar(s);
    }

    // 7. Station 2: Tetracycline bouncing tRNA, Macrolide tunnel pulse, & Human 80S smooth translation!
    if (tetraRejectTrna) {
      const bounce = Math.abs(Math.sin(animClock * 2.6));
      tetraRejectTrna.position.set(0.74 + bounce * 0.24, -0.90 - bounce * 0.14, 0.90);
      tetraRejectTrna.rotation.z = -0.35 - bounce * 0.28;
    }
    if (macrolidePlugGlow) {
      const s = mode === 'macrolide_tetra' ? 1.08 + 0.10 * Math.sin(animClock * 4.8) : 0.92;
      macrolidePlugGlow.scale.setScalar(s);
    }
    if (ribo80sNascentChain) {
      ribo80sNascentChain.position.y = 0.06 * Math.sin(animClock * 2.8);
    }
    ribo80sBouncers.forEach((b, idx) => {
      const u = Math.abs(Math.sin(animClock * 2.2 + idx * 1.4));
      b.position.x = (idx === 0 ? -0.62 : 0.62) + (idx === 0 ? -u * 0.22 : u * 0.22);
      b.rotation.z = animClock * (idx === 0 ? 1.1 : -1.3);
    });

    // 8. Station 3: RdRp i+3 Remdesivir steric clash pulse + HIV-1 RT AZT dNTP bounce!
    if (rdrpClashRing) {
      const s = mode === 'antivirals' ? 1.10 + 0.12 * Math.sin(animClock * 5.2) : 0.92;
      rdrpClashRing.scale.setScalar(s);
    }
    if (hivAztBounce) {
      const b = Math.abs(Math.sin(animClock * 2.8));
      hivAztBounce.position.x = 0.45 + b * 0.26;
      hivAztBounce.position.y = -0.14 - b * 0.10;
    }

    // 9. Station 4: LNP gentle tumble, endosome escape pulse, Spike trimers bobbing, intact nuclear shield glow!
    if (lnpHeroGroup) {
      lnpHeroGroup.rotation.y = animClock * 0.38;
      lnpHeroGroup.position.y = S4_LNP.y + 0.06 * Math.sin(animClock * 1.8);
    }
    if (endosomePulseRing) {
      const s = mode === 'mrna_lnp' ? 1.06 + 0.10 * Math.sin(animClock * 4.2) : 0.95;
      endosomePulseRing.scale.setScalar(s);
    }
    vaccineSpikeTrimers.forEach((sp, idx) => {
      sp.position.y = 0.42 + (idx === 0 ? S4_MRNA.y - 0.02 : S4_MRNA.y - 0.18) + 0.08 * Math.sin(animClock * 2.4 + idx * 1.5);
      sp.rotation.y = animClock * 0.9 + idx;
    });
    if (nucleusShieldArc) {
      const mat = nucleusShieldArc.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity = mode === 'mrna_lnp' ? 0.95 + 0.22 * Math.sin(animClock * 3.4) : 0.62;
    }
  }

  // -------------------------------------------------------------------------
  // 10. Live 4-Drug Mode Switcher (#modeBtn + Outcome Card + 3D Bench Plaques)
  // -------------------------------------------------------------------------
  const modeBtn = document.getElementById('modeBtn');
  const subEl = document.getElementById('sub');
  const outcomeCard = document.getElementById('outcomeCard');
  const drugTitleEl = document.getElementById('drugTitle');
  const drugSubEl = document.getElementById('drugSub');
  const outcomeRowsEl = document.getElementById('outcomeRows');

  const PLAQUE_DATA: Record<DrugMode, Record<string, [string, string, string, string]>> = {
    penicillin: {
      bench_ecoli: ['E. coli (Walled)', 'LYSIS', '#ff708c', 'rgba(255,94,126,0.92)'],
      bench_myco: ['Mycoplasma', 'NO WALL · SPARED', '#64f2ff', 'rgba(94,232,255,0.85)'],
      bench_chlam: ['Chlamydia', 'STALLED', '#ffc658', 'rgba(255,190,82,0.85)'],
      bench_virus: ['SARS-CoV-2 / HIV', 'NO TARGET', '#a8bcd8', 'rgba(148,170,204,0.68)'],
      bench_human: ['Human Cell (80S)', 'SPARED', '#58ffb8', 'rgba(72,242,166,0.85)'],
    },
    macrolide_tetra: {
      bench_ecoli: ['E. coli (70S)', '70S HALTED', '#ffc658', 'rgba(255,190,82,0.90)'],
      bench_myco: ['Mycoplasma (70S)', '70S HALTED', '#ffc658', 'rgba(255,190,82,0.90)'],
      bench_chlam: ['Chlamydia (70S)', '70S HALTED', '#ffc658', 'rgba(255,190,82,0.90)'],
      bench_virus: ['SARS-CoV-2 / HIV', '0 RIBO · NO TARGET', '#a8bcd8', 'rgba(148,170,204,0.68)'],
      bench_human: ['Human Cell (80S)', 'SPARED · ACTIVE', '#58ffb8', 'rgba(72,242,166,0.90)'],
    },
    antivirals: {
      bench_ecoli: ['E. coli', 'NO TARGET', '#a8bcd8', 'rgba(148,170,204,0.68)'],
      bench_myco: ['Mycoplasma', 'NO TARGET', '#a8bcd8', 'rgba(148,170,204,0.68)'],
      bench_chlam: ['Chlamydia', 'NO TARGET', '#a8bcd8', 'rgba(148,170,204,0.68)'],
      bench_virus: ['SARS-CoV-2 / HIV', 'POLYMERASE HALTED', '#ff7092', 'rgba(255,94,132,0.92)'],
      bench_human: ['Human Cell', 'SPARED', '#58ffb8', 'rgba(72,242,166,0.85)'],
    },
    mrna_lnp: {
      bench_ecoli: ['E. coli', 'UNAFFECTED', '#a8bcd8', 'rgba(148,170,204,0.65)'],
      bench_myco: ['Mycoplasma', 'UNAFFECTED', '#a8bcd8', 'rgba(148,170,204,0.65)'],
      bench_chlam: ['Chlamydia', 'UNAFFECTED', '#a8bcd8', 'rgba(148,170,204,0.65)'],
      bench_virus: ['SARS-CoV-2', 'NEUTRALIZED', '#68f2ff', 'rgba(102,238,255,0.92)'],
      bench_human: ['Human Cell', 'PRIMED · DNA SAFE', '#58ffb8', 'rgba(72,242,166,0.94)'],
    },
  };

  function setMode(nextMode?: DrugMode, silent = false) {
    const target: DrugMode =
      nextMode && MODE_ORDER.includes(nextMode)
        ? nextMode
        : MODE_ORDER[(MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length];
    mode = target;

    // 1. Update all 5 3D bench plaques + halo colors live!
    const pd = PLAQUE_DATA[mode];
    Object.entries(pd).forEach(([k, [l1, l2, acc, bord]]) => {
      const bp = benchPlaques[k];
      if (!bp) return;
      paintPlaque(bp.cv, bp.tex, l1, l2, acc, bord);
      bp.haloMat.color.set(acc);
      bp.haloMat.emissive.set(acc);
      bp.haloMat.emissiveIntensity = acc === '#a8bcd8' ? 0.24 : 0.84;
    });

    // 2. Spotlight accent lamps toward the active drug's primary molecular station!
    s1Lamp.intensity = mode === 'penicillin' ? 14.5 : 7.2;
    s2Lamp.intensity = mode === 'macrolide_tetra' ? 14.8 : 8.2;
    s3Lamp.intensity = mode === 'antivirals' ? 14.8 : 8.2;
    s4Lamp.intensity = mode === 'mrna_lnp' ? 15.2 : 8.8;
    lamp.color.set(
      mode === 'penicillin' ? '#ff8298' : mode === 'macrolide_tetra' ? '#ffd07a' : mode === 'antivirals' ? '#c894ff' : '#70ffd4'
    );

    // 2b. Immediately flush stale drug-class glyphs & burst-seed active drug streams so mode switches read crisply on frame 1!
    const primaryTypes: Record<DrugMode, string[]> = {
      penicillin: ['penicillin_flux'],
      macrolide_tetra: ['macrolide_flux'],
      antivirals: ['rdv_azt_tp'],
      mrna_lnp: ['lnp_particles', 'spike_antigen', 'rnase_clear'],
    };
    const keepSet = new Set(primaryTypes[mode]);
    for (let k = live.length - 1; k >= 0; k--) {
      if (!keepSet.has(live[k].type)) {
        free.push(live[k].i);
        fSize[live[k].i] = 0;
        live[k] = live[live.length - 1];
        live.pop();
      }
    }
    const seedIdx = mode === 'penicillin' ? [0] : mode === 'macrolide_tetra' ? [1] : mode === 'antivirals' ? [2] : [3, 4, 5];
    for (let rep = 0; rep < 5; rep++) {
      seedIdx.forEach(idx => STREAM_TIMERS[idx].go());
      updateFlows(0.18);
    }
    updateBiomechanics(0.01);

    // 3. Update live Drug x Organism Outcome Card inside #flows + #modeBtn + #sub
    const spec = OUTCOMES[mode];
    if (modeBtn) {
      modeBtn.textContent = MODE_LABEL[mode];
      modeBtn.classList.remove('macrolide_tetra', 'antivirals', 'mrna_lnp');
      if (mode !== 'penicillin') modeBtn.classList.add(mode);
    }
    if (outcomeCard) {
      outcomeCard.classList.remove('macrolide_tetra', 'antivirals', 'mrna_lnp');
      if (mode !== 'penicillin') outcomeCard.classList.add(mode);
    }
    if (drugTitleEl) drugTitleEl.textContent = spec.title;
    if (drugSubEl) drugSubEl.textContent = spec.sub;
    if (outcomeRowsEl) {
      outcomeRowsEl.replaceChildren();
      spec.rows.forEach(r => {
        const row = document.createElement('div');
        row.className = 'orow';
        const nm = document.createElement('span');
        nm.className = 'oname';
        nm.textContent = r.org;
        const bd = document.createElement('span');
        bd.className = `obadge ${r.cls}`;
        bd.textContent = r.badge;
        row.append(nm, bd);
        outcomeRowsEl.append(row);
      });
    }
    if (subEl) subEl.textContent = spec.hudSub;
    if (!silent && EMBED) say();
  }

  if (modeBtn) {
    modeBtn.onclick = () => setMode();
  }

  // -------------------------------------------------------------------------
  // 11. Resize, Zero-Overflow Legend, Flows Panel & Interactive Highlights
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

  const legend = document.getElementById('legend')!;
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
    ['C', '#94a4ba'], ['H', '#f0f8ff'], ['N', '#4c96ff'], ['O', '#ff5264'], ['P', '#ff9838'], ['S', '#ffe048'],
  ];
  keyEl.innerHTML =
    `<div class="row">Atoms ${CPK.map(([el, c]) => `<span class="chip" style="background:${c}">${el}</span>`).join('')}</div>` +
    `<div class="row"><span class="bar" style="background:#ff5e7e"></span>Lysis <span class="bar" style="background:#ffc24a;margin-left:3px"></span>Halted <span class="bar" style="background:#44f2a6;margin-left:3px"></span>Spared/Primed</div>`;
  legend.append(keyEl);

  const tipBox = document.getElementById('tip')!;
  const TIP0 = 'Cycle the 4 Drug classes to test selective toxicity across 5 organisms, then inspect all 6 RCSB PDB targets and cytosolic mRNA-LNP translation outside the intact nucleus.';
  tipBox.textContent = TIP0;

  Object.entries(MOL).forEach(([k, [name, colour, g]]) => {
    const it = document.createElement('div');
    it.className = 'mol';
    const cv = document.createElement('canvas');
    cv.width = cv.height = 44;
    glyph(cv.getContext('2d')!, g, 3, 3, 38, colour);
    const t = document.createElement('span');
    t.className = 'mname';
    t.textContent = name;
    const cnt = document.createElement('span');
    cnt.className = 'mcnt';
    cnt.textContent = '0';
    molCountEls[k] = cnt;
    it.append(cv, t, cnt);
    document.getElementById('mols')!.append(it);
    it.onmouseenter = () => { molHi = k; };
    it.onmouseleave = () => { molHi = null; };
  });

  function showInfo(k: string | null) {
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
      REG[hi].imp.forEach(m => { if (m.uniforms?.uHi) m.uniforms.uHi.value = 0; });
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
  const hiCol = (k: string) => new THREE.Color(PARTS.find(p => p[0] === k)?.[2] ?? '#6ce8ff');

  // -------------------------------------------------------------------------
  // 12. Interactive Controls, WASD Free-Look, Ray Picking & Guided Tour Camera
  // -------------------------------------------------------------------------
  let motion = true;
  let sway = 0;
  let last = performance.now();

  document.getElementById('view')!.onclick = e => {
    view = (view + 1) % VIEWS.length;
    const [name, p, t] = VIEWS[view];
    curView = name;
    camera.position.copy(cell.localToWorld(p.clone()));
    controls.target.copy(cell.localToWorld(t.clone()));
    (e.target as HTMLElement).textContent = `View: ${name}`;
  };
  document.getElementById('look')!.onclick = e => {
    organelleLook = LOOKS[(LOOKS.indexOf(organelleLook) + 1) % LOOKS.length];
    applyLook();
    (e.target as HTMLElement).textContent = `Membrane: ${organelleLook}`;
  };
  document.getElementById('cut')!.onclick = e => {
    cutOn = !cutOn;
    cutExtras.visible = cutOn;
    (e.target as HTMLElement).textContent = cutOn ? 'Close cutaway' : 'Open cutaway';
  };
  document.getElementById('flow')!.onclick = e => {
    flowsOn = !flowsOn;
    flowPts.visible = fxPts.visible = flowsOn;
    (e.target as HTMLElement).textContent = `Flows: ${flowsOn ? 'on' : 'off'}`;
  };
  const speed = document.getElementById('speed') as HTMLInputElement;
  const spd = document.getElementById('spd')!;
  speed.oninput = () => {
    flowSpeed = 2 ** +speed.value;
    spd.textContent = `${flowSpeed >= 1 ? +flowSpeed.toFixed(1) : +flowSpeed.toFixed(2)}×`;
  };
  speed.ondblclick = () => { speed.value = '0'; speed.oninput(new Event('input')); };
  document.getElementById('motion')!.onclick = e => {
    motion = !motion;
    (e.target as HTMLElement).textContent = motion ? 'Pause' : 'Play';
  };
  document.getElementById('snap')!.onclick = () => {
    composer.render();
    const a = document.createElement('a');
    a.download = `pharmacology-lab-${mode}.png`;
    a.href = renderer.domElement.toDataURL('image/png');
    a.click();
  };

  const held = new Set<string>();
  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k.length === 1 && 'wasd'.includes(k) && !(e.target as HTMLElement)?.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey) {
      held.add(k);
    }
  });
  addEventListener('keyup', e => held.delete(e.key.toLowerCase()));
  addEventListener('blur', () => held.clear());

  const fwd = V(), side = V(), mvStep = V(), aim = new THREE.Spherical(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
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
          .find(h => h.object.visible && h.object !== flowPts && h.object !== fxPts && map.has((h.object as any).material));
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
    mvStep
      .set(0, 0, 0)
      .addScaledVector(fwd, Number(held.has('w')) - Number(held.has('s')))
      .addScaledVector(side, Number(held.has('d')) - Number(held.has('a')));
    if (mvStep.lengthSq() < 1e-6) return;
    mvStep.normalize().multiplyScalar(dt * Math.max(1.5, camera.position.distanceTo(controls.target) * 0.5));
    camera.position.add(mvStep);
    controls.target.add(mvStep);
  }

  const tour: any = { on: false, from: null, to: null, t: 1, dur: 1, seq: 0, orbit: 0, yaw: 0, pitch: 0, sent: true };
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
    if (m.pos) return { p: V(...(m.pos as [number, number, number])), t: V(...((m.target ?? m.tgt ?? [0.15, -0.35, 0.25]) as [number, number, number])) };
    return null;
  }

  function flyTo(m: any) {
    const to = poseOf(m);
    if (!to) return false;
    if (m.view) {
      const idx = VIEWS.findIndex(x => x[0] === m.view);
      if (idx >= 0) {
        view = idx;
        curView = m.view;
        const vb = document.getElementById('view');
        if (vb) vb.textContent = `View: ${m.view}`;
      }
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
    if (tour.t >= 1) tourFrame(0);
    return true;
  }

  function freeCamera() {
    tour.on = false;
    tour.yaw = tour.pitch = 0;
    controls.enabled = true;
  }

  const fp = V(), ft = V(), qa = V(), qb = V(), lookV = V(), rightV = V(), C0 = V(0.15, -0.35, 0.25);
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
    lookV.copy(ft).sub(fp);
    if (tour.yaw || tour.pitch) {
      rightV.crossVectors(lookV, UP).normalize();
      lookV.applyAxisAngle(UP, tour.yaw).applyAxisAngle(rightV, -tour.pitch);
    }
    camera.position.copy(fp);
    cell.localToWorld(camera.position);
    controls.target.copy(fp).add(lookV);
    cell.localToWorld(controls.target);
    camera.lookAt(controls.target);
    if (tour.t >= 1 && !tour.sent) {
      tour.sent = true;
      if (EMBED) toExplorer({ type: 'arrived', seq: tour.seq });
    }
  }

  // Exact tag coordinates for ALL 18 parts across ALL 5 views
  const POINTS: Record<string, Record<string, THREE.Vector3>> = {};
  function pointsOf(vName: string) {
    if (POINTS[vName]) return POINTS[vName];
    const base: Record<string, THREE.Vector3> = {
      bench_ecoli: ECOLI_C.clone().add(V(0, 0.20, 0.55)),
      bench_myco: MYCO_C.clone().add(V(0, 0.15, 0.55)),
      bench_chlam: CHLAM_C.clone().add(V(0, 0.15, 0.55)),
      bench_virus: VIRUS_C.clone().add(V(0, 0.15, 0.55)),
      bench_human: HUMAN_C.clone().add(V(0, 0.15, 0.55)),
      pg_wall: V(S1_PBP.x - 1.05, DECK_Y + 0.25, DECK_Z + 0.30),
      pbp_penicillin: S1_PBP.clone().add(V(-0.10, 0.18, 0.58)),
      ribo_70s: S2_70S.clone().add(V(-0.35, 0.05, 0.52)),
      macrolide_tunnel: S2_70S.clone().add(V(0.08, 0.78, 0.58)),
      tetra_asite: S2_70S.clone().add(V(0.36, -0.44, 0.74)),
      ribo_80s_safe: S2_80S.clone().add(V(0.10, 0.10, 0.58)),
      rdrp_remdesivir: S3_RDRP.clone().add(V(0, 0.08, 0.60)),
      hiv_rt_azt: S3_HIVRT.clone().add(V(0, -0.05, 0.62)),
      mrna_lnp: S4_LNP.clone().add(V(0, 0.10, 0.45)),
      endosome_escape: S4_ENDO.clone().add(V(0, 0.05, 0.55)),
      vaccine_mrna: S4_MRNA.clone().add(V(-0.15, -0.08, 0.52)),
      intact_nucleus: S4_NUC.clone().add(V(0, 0.10, 0.62)),
      drug_atoms: ATOM_C.clone().add(V(0, 0, 0.16)),
    };
    let P = { ...base };
    if (vName === 'beta_lactam') {
      P = { ...base, pg_wall: V(S1_PBP.x - 1.10, DECK_Y + 0.35, DECK_Z + 0.35), pbp_penicillin: S1_PBP.clone().add(V(-0.08, 0.20, 0.65)) };
    } else if (vName === 'ribosome_70s_80s') {
      P = { ...base, macrolide_tunnel: S2_70S.clone().add(V(0.08, 0.85, 0.62)), tetra_asite: S2_70S.clone().add(V(0.42, -0.46, 0.78)) };
    } else if (vName === 'antivirals') {
      P = { ...base, rdrp_remdesivir: S3_RDRP.clone().add(V(0.05, 0.10, 0.66)), hiv_rt_azt: S3_HIVRT.clone().add(V(0.05, -0.05, 0.66)) };
    } else if (vName === 'mrna_vaccine') {
      P = { ...base, mrna_lnp: S4_LNP.clone().add(V(0, 0.08, 0.50)), endosome_escape: S4_ENDO.clone().add(V(0, 0.02, 0.60)), intact_nucleus: S4_NUC.clone().add(V(-0.10, 0.12, 0.68)) };
    }
    return (POINTS[vName] = P);
  }

  const FOCUS: Record<string, { c: THREE.Vector3; r: number; dir: THREE.Vector3 } | null> = {};
  function focusOf(k: string) {
    if (k in FOCUS) return FOCUS[k];
    const P = pointsOf('overview');
    const RAD: Record<string, number> = {
      bench_ecoli: 1.9,
      bench_myco: 1.8,
      bench_chlam: 1.8,
      bench_virus: 1.9,
      bench_human: 1.9,
      pg_wall: 2.3,
      pbp_penicillin: 2.0,
      ribo_70s: 2.2,
      macrolide_tunnel: 1.7,
      tetra_asite: 1.7,
      ribo_80s_safe: 2.3,
      rdrp_remdesivir: 2.1,
      hiv_rt_azt: 2.1,
      mrna_lnp: 1.7,
      endosome_escape: 1.9,
      vaccine_mrna: 2.1,
      intact_nucleus: 2.2,
      drug_atoms: 1.9,
    };
    const dir = V(0.05, 0.10, 0.99).normalize();
    return (FOCUS[k] = P[k] ? { c: P[k].clone(), r: RAD[k] ?? 2.0, dir: dir.clone() } : null);
  }

  // Ghost / Highlight / Blink / State
  const KIN: Record<string, string[]> = {
    bench_ecoli: ['pg_wall', 'pbp_penicillin'],
    bench_myco: ['ribo_70s', 'macrolide_tunnel', 'tetra_asite'],
    bench_chlam: ['ribo_70s', 'macrolide_tunnel', 'tetra_asite'],
    bench_virus: ['rdrp_remdesivir', 'hiv_rt_azt'],
    bench_human: ['ribo_80s_safe', 'mrna_lnp', 'vaccine_mrna', 'intact_nucleus'],
    pg_wall: ['pbp_penicillin', 'bench_ecoli'],
    pbp_penicillin: ['pg_wall', 'drug_atoms'],
    ribo_70s: ['macrolide_tunnel', 'tetra_asite', 'ribo_80s_safe'],
    macrolide_tunnel: ['ribo_70s'],
    tetra_asite: ['ribo_70s'],
    ribo_80s_safe: ['ribo_70s', 'vaccine_mrna'],
    rdrp_remdesivir: ['hiv_rt_azt', 'bench_virus'],
    hiv_rt_azt: ['rdrp_remdesivir', 'drug_atoms'],
    mrna_lnp: ['endosome_escape', 'vaccine_mrna'],
    endosome_escape: ['mrna_lnp', 'vaccine_mrna'],
    vaccine_mrna: ['endosome_escape', 'intact_nucleus', 'ribo_80s_safe'],
    intact_nucleus: ['vaccine_mrna', 'bench_human'],
    drug_atoms: ['pbp_penicillin', 'hiv_rt_azt', 'vaccine_mrna'],
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
        m.opacity = Math.min(m.opacity, amount);
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
  function blink(k: string, n = 3) {
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
    if (m.drug) setMode(m.drug, true);
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
    if (m.flow !== undefined && m.flow !== flowsOn) document.getElementById('flow')!.click();
    if (m.motion !== undefined) {
      motion = m.motion;
      const mb = document.getElementById('motion');
      if (mb) mb.textContent = motion ? 'Pause' : 'Play';
    }
    if (g) ghost(...g);
  }

  // -------------------------------------------------------------------------
  // 13. Main Animation Loop & Build Orchestration
  // -------------------------------------------------------------------------
  const lightView = V();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (motion) {
      sway += dt * Math.min(1, Math.max(0, (camera.position.distanceTo(controls.target) - 4.0) / 22));
      cell.rotation.y = 0.048 * Math.sin(sway * 0.11);
      updateBiomechanics(dt * Math.max(0.35, Math.min(2.6, flowSpeed)));
    }
    if (flowsOn) updateFlows(motion ? dt * flowSpeed : 0);
    flowMat.uniforms.uBoost.value = Math.max(0.75, Math.min(2.3, camera.position.distanceTo(controls.target) / 14.5));
    cell.updateMatrixWorld();
    updateAllCuts();
    lightView.copy(key.position).normalize().transformDirection(camera.matrixWorldInverse);
    impMats.forEach(m => { if (m.uniforms.uLight) m.uniforms.uLight.value.copy(lightView); });
    if (hi && REG[hi]) {
      const k = hiLevel(now);
      const c = hiCol(hi);
      REG[hi].mats.forEach((m: any) => {
        if (m.emissive) {
          m.emissive.copy(c);
          m.emissiveIntensity = 0.28 + 0.78 * k;
        }
      });
      REG[hi].imp.forEach(m => { if (m.uniforms?.uHi) m.uniforms.uHi.value = k; });
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
    buildSelectivityBench();
    buildStation1BetaLactam(T);
    buildStation2Ribosomes(T);
    buildStation3Antivirals(T);
    buildStation4MrnaVaccine(T);
    buildAtomicDrugInset();
    updateBiomechanics(0.02);
    // Warm up all 6 live flow species immediately on frame 1
    for (let s = 0; s < 110; s++) updateFlows(0.05);
  }

  setTimeout(() => {
    build();
    applyLook();
    setMode('penicillin', true);
    cell.updateMatrixWorld();
    updateAllCuts();
    resize();
    renderer.setAnimationLoop(frame);
    const busy = document.getElementById('busy');
    if (busy) busy.style.display = 'none';
  }, 30);

  // -------------------------------------------------------------------------
  // 14. Explorer postMessage Protocol & window.__cell Debug Contract
  // -------------------------------------------------------------------------
  const EMBED = document.documentElement.classList.contains('embed');
  const toExplorer = (m: any) => parent.postMessage({ from: 'realistic-cell', ...m }, '*');
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
      activeDrug: mode,
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
      toExplorer({ type: 'ready', mols, info: INFO, parts: PARTS, views: VIEWS.map(v => v[0]), mode, activeDrug: mode });
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
        tagPts = (m.points ?? m.tags ?? []).map((k: string) => P[k] ?? null);
        tagSeq = m.seq;
      }
      if (m.cmd === 'mode' || m.cmd === 'drug') setMode(m.mode ?? m.drug, true);
      if (m.cmd === 'track' || m.cmd === 'tags') {
        const list = m.points ?? m.tags ?? [];
        tagPts = list.map((x: any) => {
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
      if (m.cmd === 'motion') document.getElementById('motion')!.click();
      if (m.cmd === 'look') document.getElementById('look')!.click();
      if (m.cmd === 'cut') document.getElementById('cut')!.click();
      if (m.cmd === 'flow') document.getElementById('flow')!.click();
      if (m.cmd === 'speed') {
        speed.value = m.v;
        speed.oninput(new Event('input'));
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
    get activeDrug() { return mode; },
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
    setLook: (k: string) => {
      organelleLook = LOOKS.includes(k as any) ? (k as any) : k === 'glass' || k === 'xray' ? 'see-through' : 'gel';
      applyLook();
    },
    get sites() { return SITES; },
    get flows() { return live; },
    get procs() {
      return {
        ...FLOW_COUNTS,
        activeDrug: mode,
      };
    },
    get views() { return VIEWS; },
    pointsOf,
    setMol: (k: string | null) => { molHi = k; },
    step: (dt = 0.05, n = 1) => {
      for (let i = 0; i < n; i++) {
        updateBiomechanics(dt);
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
