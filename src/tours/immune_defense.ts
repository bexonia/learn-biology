import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 18A: Immune Defense Battleground (real-immune), played by cell_explorer.html.
// Every cue stays <= 110 plain characters and 100% pure ASCII for clean TTS synthesis.
export const IMMUNE_DEFENSE_TOUR: TourDefinition = {
  title: 'Immune Defense Battleground: a guided tour',
  root: 'real-immune',
  page: 'immune_defense_realistic.html',
  view: 'overview',
  summary: 'Explore a 30 um mucosal immune battleground uniting innate and adaptive defense: macrophage actin phagocytosis, acidic NOX2 ROS bursts and MHC-II (1DLH), Y-shaped IgG (1IGT) neutralizing SARS-CoV-2 Spike RBD (7BZ5) vs ACE2 (6M0J), cytotoxic CD8+ T-cell TCR-pMHC-I (1AO7) surveillance, perforin (3NSJ) pores, granzyme B (1IAU) apoptosis and atomic epitopes.',
  views: {
    overview: 'real-immune',
    phagocytosis: 'real-imm-phagolysosome',
    igg_neutralize: 'real-imm-rbd-block',
    cd8_synapse: 'real-imm-tcr-mhci',
    atoms: 'real-pharm-atoms',
  },
  chapters: [
    { id: 'ch0', title: 'The 30 um Tissue Battleground: Self vs Non-Self', steps: [
      { id: 'imm-battleground-overview', title: 'Three immune arms across a 30 um tissue niche', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['macrophage', 'ecoli_target', 'igg_antibody', 'virion_target', 'cd8_tcell'], cues: [
        { id: 'imm.ch0.s0.01', text: 'Welcome to a 30 um mucosal tissue battleground where human immunity separates self from non-self.' },
        { id: 'imm.ch0.s0.02', text: 'On the left, a patrolling [[macrophage|macrophage]] tracks an invading [[E. coli bacterium|ecoli_target]].' },
        { id: 'imm.ch0.s0.03', text: 'Center [[IgG antibodies|igg_antibody]] swarm a [[virion|virion_target]], while right sits a [[CD8+ T-cell|cd8_tcell]].' },
      ] },
      { id: 'imm-three-arms', title: 'Innate speed paired with adaptive precision', camera: { part: 'macrophage', dist: 1.3, dur: 2.2, orbit: 2 }, blink: 'macrophage', flow: true,
        ghost: ['macrophage', 'lysosome_ros', 'igg_antibody', 'cd8_tcell'], tags: ['macrophage', 'lysosome_ros', 'igg_antibody', 'cd8_tcell'], cues: [
        { id: 'imm.ch0.s1.01', text: 'Innate [[macrophages|macrophage]] strike within minutes using [[lysosomal enzymes|lysosome_ros]] against common microbes.' },
        { id: 'imm.ch0.s1.02', text: 'Adaptive B-cells secrete tailored [[IgG antibodies|igg_antibody]] that neutralize pathogens in fluid outside cells.' },
        { id: 'imm.ch0.s1.03', text: 'Cytotoxic [[CD8+ T-cells|cd8_tcell]] eliminate infected host cells hiding viruses beyond antibody reach.' },
      ] },
    ] },
    { id: 'ch1', title: 'Innate Immunity: Macrophage Phagocytosis, ROS Burst & MHC-II (1DLH)', steps: [
      { id: 'imm-actin-phagocytosis', title: 'Actin pseudopods engulfing E. coli into a phagosome', camera: { view: 'phagocytosis', dur: 2.4, orbit: 2 }, blink: 'actin_pseudopod', flow: true, ghost: false,
        tags: ['macrophage', 'actin_pseudopod', 'ecoli_target', 'phagosome'], cues: [
        { id: 'imm.ch1.s0.01', text: 'Zoom to the 15 um [[macrophage|macrophage]] detecting surface LPS on a 2 um [[E. coli|ecoli_target]] rod.' },
        { id: 'imm.ch1.s0.02', text: 'Branching [[actin pseudopods|actin_pseudopod]] reach around [[E. coli|ecoli_target]] to pull it inward.' },
        { id: 'imm.ch1.s0.03', text: 'The membrane lips fuse tightly, trapping [[E. coli|ecoli_target]] inside a sealed [[phagosome|phagosome]].' },
      ] },
      { id: 'imm-lysosome-ros', title: 'Acidic phagolysosome & NOX2 reactive oxygen burst', camera: { part: 'lysosome_ros', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'lysosome_ros', flow: true,
        ghost: ['lysosome_ros', 'phagosome', 'ecoli_target'], tags: ['lysosome_ros', 'phagosome', 'ecoli_target'], cues: [
        { id: 'imm.ch1.s1.01', text: 'Acidic [[lysosomes|lysosome_ros]] fuse with the [[phagosome|phagosome]] as V-ATPase pumps drop pH to 4.5.' },
        { id: 'imm.ch1.s1.02', text: 'Inside [[lysosome ROS|lysosome_ros]] chambers, NOX2 sparks superoxide, H2O2 and bleach to shred bacterial membranes.' },
        { id: 'imm.ch1.s1.03', text: 'Lysozyme and cathepsins cleave [[E. coli|ecoli_target]] inside the [[phagosome|phagosome]] into short peptides.' },
      ] },
      { id: 'imm-mhcii-bridge', title: 'MHC-II (1DLH) antigen display bridging to CD4+ T-cells', camera: { part: 'mhcii_display', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'mhcii_display', flow: true,
        ghost: ['mhcii_display', 'macrophage', 'phagosome'], tags: ['mhcii_display', 'macrophage', 'phagosome'], cues: [
        { id: 'imm.ch1.s2.01', text: 'Bacterial fragments from the [[phagosome|phagosome]] load into the open groove of [[MHC-II|mhcii_display]].' },
        { id: 'imm.ch1.s2.02', text: 'Vesicles export loaded [[MHC-II|mhcii_display]] onto the [[macrophage|macrophage]] plasma membrane.' },
        { id: 'imm.ch1.s2.03', text: 'Displaying microbial peptides on [[MHC-II|mhcii_display]] activates CD4+ helper T-cells to rally adaptive defense.' },
      ] },
    ] },
    { id: 'ch2', title: 'Humoral Immunity: IgG (1IGT) Neutralizing SARS-CoV-2 Spike RBD (7BZ5) vs ACE2 (6M0J)', steps: [
      { id: 'imm-igg-architecture', title: 'Y-shaped IgG (1IGT): variable Fab arms & Fc stem', camera: { view: 'igg_neutralize', dur: 2.4, orbit: 2 }, blink: 'igg_antibody', flow: true, ghost: false,
        tags: ['igg_antibody', 'fab_arms', 'fc_stem', 'virion_target'], cues: [
        { id: 'imm.ch2.s0.01', text: 'Fly to the center where 14 nm Y-shaped [[IgG antibodies|igg_antibody]] surround a [[SARS-CoV-2 virion|virion_target]].' },
        { id: 'imm.ch2.s0.02', text: 'Two flexible [[Fab arms|fab_arms]] form hypervariable tips shaped to grip one exact viral surface epitope.' },
        { id: 'imm.ch2.s0.03', text: 'The constant [[Fc stem|fc_stem]] anchors the base of each [[IgG|igg_antibody]] and signals downstream immune cells.' },
      ] },
      { id: 'imm-rbd-neutralization', title: 'Fab clamping SARS-CoV-2 Spike RBD (7BZ5) vs ACE2 (6M0J)', camera: { part: 'spike_rbd', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'spike_rbd', flow: true,
        ghost: ['fab_arms', 'spike_rbd', 'ace2_blocked'], tags: ['fab_arms', 'spike_rbd', 'ace2_blocked'], cues: [
        { id: 'imm.ch2.s1.01', text: 'To enter lung cells, the viral [[Spike RBD|spike_rbd]] must dock flush onto host [[ACE2|ace2_blocked]].' },
        { id: 'imm.ch2.s1.02', text: 'IgG [[Fab arms|fab_arms]] bind viral [[Spike RBDs|spike_rbd]], blocking attachment to host [[ACE2|ace2_blocked]].' },
        { id: 'imm.ch2.s1.03', text: 'Sterically crowded by [[Fab arms|fab_arms]], the coated [[Spike RBD|spike_rbd]] bounces off [[ACE2|ace2_blocked]] harmlessly.' },
      ] },
      { id: 'imm-fc-opsonization', title: 'Fc opsonization tagging neutralized virions for clearance', camera: { part: 'fc_stem', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'fc_stem', flow: true,
        ghost: ['fc_stem', 'virion_target', 'macrophage', 'ace2_blocked'], tags: ['fc_stem', 'virion_target', 'macrophage', 'ace2_blocked'], cues: [
        { id: 'imm.ch2.s2.01', text: 'With [[ACE2|ace2_blocked]] protected, dense antibody coats bristle outward via every [[Fc stem|fc_stem]].' },
        { id: 'imm.ch2.s2.02', text: 'Surface Fc receptors on a [[macrophage|macrophage]] latch onto each [[Fc stem|fc_stem]] in opsonization.' },
        { id: 'imm.ch2.s2.03', text: 'Tagged [[virions|virion_target]] are rapidly engulfed and digested before they can infect nearby cells.' },
      ] },
    ] },
    { id: 'ch3', title: 'Cellular Immunity: CD8+ T-Cell TCR-pMHC-I (1AO7) Surveillance', steps: [
      { id: 'imm-mhci-surveillance', title: 'Patrolling CD8+ T-cells inspecting surface MHC-I', camera: { view: 'cd8_synapse', dur: 2.4, orbit: 2 }, blink: 'cd8_tcell', flow: true, ghost: false,
        tags: ['cd8_tcell', 'tcr_mhci', 'viral_peptide'], cues: [
        { id: 'imm.ch3.s0.01', text: 'Once a virus replicates inside a human cell, secreted antibodies can no longer reach it.' },
        { id: 'imm.ch3.s0.02', text: 'Surface [[MHC-I|tcr_mhci]] displays internal [[protein snippets|viral_peptide]] to patrolling [[CD8+ T-cells|cd8_tcell]].' },
        { id: 'imm.ch3.s0.03', text: 'Every nucleated body cell continuously samples its own cytosol onto [[MHC-I|tcr_mhci]] for inspection.' },
      ] },
      { id: 'imm-tcr-pmhci', title: 'Immunological synapse & TCR-pMHC-I (1AO7) recognition', camera: { part: 'tcr_mhci', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'tcr_mhci', flow: true,
        ghost: ['tcr_mhci', 'viral_peptide', 'cd8_tcell'], tags: ['tcr_mhci', 'viral_peptide', 'cd8_tcell'], cues: [
        { id: 'imm.ch3.s1.01', text: 'Proteasomes chop intracellular viral proteins into 9-mer [[viral peptides|viral_peptide]] for ER loading.' },
        { id: 'imm.ch3.s1.02', text: 'Across the 15 nm synapse, the [[TCR-pMHC-I|tcr_mhci]] complex grips the [[viral peptide|viral_peptide]] directly.' },
        { id: 'imm.ch3.s1.03', text: 'The CD8 co-receptor stabilizes [[TCR-pMHC-I|tcr_mhci]] binding, confirming a true match for the [[T-cell|cd8_tcell]].' },
      ] },
      { id: 'imm-self-vs-infected', title: 'Spared healthy self vs triggered cytotoxic synapse', camera: { part: 'viral_peptide', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'viral_peptide', flow: true,
        ghost: ['viral_peptide', 'tcr_mhci', 'cd8_tcell'], tags: ['viral_peptide', 'tcr_mhci', 'cd8_tcell'], cues: [
        { id: 'imm.ch3.s2.01', text: 'Healthy cells present normal self peptides on [[MHC-I|tcr_mhci]], so [[CD8+ T-cells|cd8_tcell]] move on untouched.' },
        { id: 'imm.ch3.s2.02', text: 'Recognizing a foreign [[viral peptide|viral_peptide]] triggers a sharp Ca2+ surge inside the [[CD8+ T-cell|cd8_tcell]].' },
        { id: 'imm.ch3.s2.03', text: 'Activated via [[TCR-pMHC-I|tcr_mhci]], the T-cell aims cytotoxic granules squarely across the synapse cleft.' },
      ] },
    ] },
    { id: 'ch4', title: 'Perforin (3NSJ) Pores, Granzyme B (1IAU) Apoptosis, Atomic Epitopes & Handoff to Pharmacology', steps: [
      { id: 'imm-perforin-granzyme', title: 'Perforin (3NSJ) pores & Granzyme B (1IAU) apoptosis', camera: { part: 'perforin_pore', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'perforin_pore', flow: true,
        ghost: ['perforin_pore', 'granzyme_b', 'cd8_tcell'], tags: ['perforin_pore', 'granzyme_b', 'cd8_tcell'], cues: [
        { id: 'imm.ch4.s0.01', text: 'Extracellular Ca2+ drives [[perforin|perforin_pore]] rings to punch 18 nm pores into the infected membrane.' },
        { id: 'imm.ch4.s0.02', text: 'Serine protease [[Granzyme B|granzyme_b]] pours through each [[perforin pore|perforin_pore]] into target cytosol.' },
        { id: 'imm.ch4.s0.03', text: '[[Granzyme B|granzyme_b]] activates caspases for clean apoptosis, stopping viral assembly before progeny burst out.' },
      ] },
      { id: 'imm-atomic-epitopes', title: 'Atomic 0.1-0.5 nm CDR3 H-bonds & IgG disulfide hinges', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'immune_atoms', flow: true, ghost: false,
        tags: ['immune_atoms', 'igg_antibody', 'fab_arms'], cues: [
        { id: 'imm.ch4.s1.01', text: 'Zoom to 0.1 to 0.5 nm in the [[immune atoms|immune_atoms]] lens to see exact molecular recognition.' },
        { id: 'imm.ch4.s1.02', text: 'Across [[immune atoms|immune_atoms]], C, H, N and O hydrogen bonds lock [[Fab|fab_arms]] loops onto viral epitopes.' },
        { id: 'imm.ch4.s1.03', text: 'Covalent sulfur Cys-S-S-Cys bridges inside [[immune atoms|immune_atoms]] hold each [[IgG|igg_antibody]] hinge together.' },
      ] },
      { id: 'imm-recap-handoff', title: 'Three-arm recap & handoff to Pharmacology Lab', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['macrophage', 'igg_antibody', 'cd8_tcell', 'perforin_pore'], cues: [
        { id: 'imm.ch4.s2.01', text: '[[Macrophages|macrophage]], [[IgG antibodies|igg_antibody]] and [[CD8+ T-cells|cd8_tcell]] defend tissue from 30 um down to atoms.' },
        { id: 'imm.ch4.s2.02', text: 'Toggle Innate, Humoral and Cellular modes to spotlight engulfment, RBD block and [[perforin|perforin_pore]] lysis.' },
        { id: 'imm.ch4.s2.03', text: 'Continue to the Pharmacology & Vaccine Lab to see how antibiotics, antivirals and mRNA vaccines aid immunity.' },
      ] },
    ] },
  ],
  details: {},
};

export const immune_defenseTour: TourDefinition = IMMUNE_DEFENSE_TOUR;
