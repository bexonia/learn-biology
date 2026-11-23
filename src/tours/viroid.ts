import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 13B: Potato Spindle Tuber Viroid PSTVd (real-viroid), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const viroidTour: TourDefinition = {
  title: 'PSTVd Viroid (359-nt Naked Circular RNA): a guided tour',
  root: 'real-viroid',
  page: 'viroid_realistic.html',
  view: 'overview',
  summary: 'Explore a coatless 359-nt circular plant viroid: five self-paired RNA domains (TL, P, C, V, TR), Loop E motif, G-U wobble pairs, host plant RNA Pol II rolling-circle replication, DNA ligase 1 and RNA atoms.',
  views: {
    overview: 'real-viroid',
    focus: 'real-viroid',
    domains: 'real-viroid',
    loope: 'real-viroid-loope',
    rolling_circle: 'real-viroid-pol2',
    atoms: 'rna',
  },
  chapters: [
    { id: 'ch0', title: '359 Nucleotides, Zero Protein', steps: [
      { id: 'vir-intro', title: 'PSTVd: naked circular non-coding ssRNA', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['tl_domain', 'p_domain', 'c_domain', 'v_domain', 'tr_domain'], cues: [
        { id: 'vir.ch0.s0.01', text: 'Meet Potato Spindle Tuber Viroid, or PSTVd: 359 nucleotides of naked circular single-stranded RNA.' },
        { id: 'vir.ch0.s0.02', text: 'Unlike Mimivirus or SARS-CoV-2, PSTVd wears zero protein capsid and zero lipid envelope.' },
        { id: 'vir.ch0.s0.03', text: 'It carries zero protein-coding genes, proving infectious code needs neither a coat nor ORFs.' },
      ] },
      { id: 'vir-rod-fold', title: 'Self-paired 50 x 2 nm rod across five domains', camera: { view: 'domains', dur: 2.4, orbit: 2 }, blink: 'c_domain', ghost: false,
        tags: ['tl_domain', 'p_domain', 'c_domain', 'v_domain', 'tr_domain', 'wobble_gu'], cues: [
        { id: 'vir.ch0.s1.01', text: 'Intramolecular base pairing collapses the ring into a stiff 50 by 2 nm rod across five domains.' },
        { id: 'vir.ch0.s1.02', text: 'Left to right run [[TL|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]] and [[TR|tr_domain]].' },
        { id: 'vir.ch0.s1.03', text: 'Paired helical stems alternate with bulged loops, stabilizing this bare RNA inside plant nuclei.' },
      ] },
    ] },
    { id: 'ch1', title: 'Five Functional Domains, Loop E & Wobble Pairs', steps: [
      { id: 'vir-domains', title: 'Functional architecture of TL, P, V and TR domains', camera: { part: 'p_domain', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'p_domain',
        ghost: ['tl_domain', 'p_domain', 'v_domain', 'tr_domain'], tags: ['tl_domain', 'p_domain', 'v_domain', 'tr_domain'], cues: [
        { id: 'vir.ch1.s0.01', text: 'The [[Terminal Left domain|tl_domain]] initiates replication, while [[P domain|p_domain]] drives symptoms.' },
        { id: 'vir.ch1.s0.02', text: 'Processing of [[P domain|p_domain]] into small RNAs silences host plant genes, stunting tubers.' },
        { id: 'vir.ch1.s0.03', text: 'Across the right half, [[V domain|v_domain]] tolerates mutation and [[TR|tr_domain]] steers cell exit.' },
      ] },
      { id: 'vir-loope', title: 'Central Conserved Region, Loop E & CCR hairpin', camera: { view: 'loope', dur: 2.4, orbit: 2 }, blink: 'loop_e', flow: true, ghost: false,
        tags: ['c_domain', 'loop_e', 'ccr_hairpin'], cues: [
        { id: 'vir.ch1.s1.01', text: 'At rod center sits the [[Central Conserved Region|c_domain]], shared across Pospiviroidae viroids.' },
        { id: 'vir.ch1.s1.02', text: 'Embedded here is [[Loop E|loop_e]], a rigid non-canonical base-triple motif docking host factors.' },
        { id: 'vir.ch1.s1.03', text: 'Adjacent sequences refold into the [[CCR hairpin|ccr_hairpin]] required to cleave progeny rings.' },
      ] },
      { id: 'vir-wobble', title: 'G-U wobble pairs & structural RNase resistance', camera: { part: 'wobble_gu', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'wobble_gu',
        ghost: ['wobble_gu', 'loop_e', 'c_domain'], tags: ['wobble_gu', 'loop_e', 'c_domain'], cues: [
        { id: 'vir.ch1.s2.01', text: 'Alongside standard A-U and G-C rungs sit golden [[G-U wobble pairs|wobble_gu]] shaping stem twist.' },
        { id: 'vir.ch1.s2.02', text: 'Tight self-pairing and [[G-U wobbles|wobble_gu]] shield [[Loop E|loop_e]] stems from plant RNases.' },
        { id: 'vir.ch1.s2.03', text: 'Every structural bulge acts as a physical recognition address replacing protein-encoded signals.' },
      ] },
    ] },
    { id: 'ch2', title: 'Hijacking Plant RNA Pol II: Rolling-Circle Copying', steps: [
      { id: 'vir-pol2', title: 'TFIIIA-7ZF docking onto host nuclear RNA Pol II', camera: { view: 'rolling_circle', dur: 2.4, orbit: 2 }, blink: 'pol2', flow: true, ghost: false,
        tags: ['pol2', 'tfiiia', 'c_domain', 'tl_domain'], cues: [
        { id: 'vir.ch2.s0.01', text: 'Inside the plant nucleus, PSTVd hijacks host 12-subunit [[RNA Polymerase II|pol2]] for copying.' },
        { id: 'vir.ch2.s0.02', text: 'Host [[TFIIIA-7ZF|tfiiia]] bridges the naked RNA onto [[RNA Pol II|pol2]], which normally reads DNA.' },
        { id: 'vir.ch2.s0.03', text: 'With zero viral polymerase of its own, PSTVd turns a host DNA copier into an RNA replicase.' },
      ] },
      { id: 'vir-rolling', title: 'Asymmetric rolling-circle minus & plus concatemers', camera: { part: 'minus_rna', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'minus_rna', flow: true,
        ghost: ['minus_rna', 'plus_rna', 'pol2', 'tfiiia'], tags: ['minus_rna', 'plus_rna', 'pol2', 'tfiiia'], cues: [
        { id: 'vir.ch2.s1.01', text: 'Running asymmetric rolling-circle copying, [[Pol II|pol2]] spools a long [[minus RNA|minus_rna]] chain.' },
        { id: 'vir.ch2.s1.02', text: 'Each lap around the 359-nt ring extends the multimeric [[minus-strand concatemer|minus_rna]] unbroken.' },
        { id: 'vir.ch2.s1.03', text: '[[Pol II|pol2]] then transcribes that [[minus strand|minus_rna]] into multimeric [[plus RNA|plus_rna]].' },
      ] },
      { id: 'vir-ligase', title: 'CCR cleavage & circularization by DNA ligase 1', camera: { part: 'ligase', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ligase', flow: true,
        ghost: ['ligase', 'plus_rna', 'ccr_hairpin', 'loop_e'], tags: ['ligase', 'plus_rna', 'ccr_hairpin', 'loop_e'], cues: [
        { id: 'vir.ch2.s2.01', text: 'Host RNase III recognizes the [[CCR hairpin|ccr_hairpin]] and snips [[plus RNA|plus_rna]] into 359-nt units.' },
        { id: 'vir.ch2.s2.02', text: 'Then plant [[DNA ligase 1|ligase]] seals each linear [[plus RNA|plus_rna]] guided by [[Loop E|loop_e]].' },
        { id: 'vir.ch2.s2.03', text: 'Fresh naked circles exit through plasmodesmata to infect neighboring plant cells systemically.' },
      ] },
    ] },
    { id: 'ch3', title: 'Ribonucleotide Atoms & Edge-of-Life Recap', steps: [
      { id: 'vir-atoms', title: 'Atomic RNA 2-prime OH, phosphate P & G-U H-bonds', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'rna_atoms', flow: true, ghost: false,
        tags: ['rna_atoms', 'wobble_gu', 'loop_e'], cues: [
        { id: 'vir.ch3.s0.01', text: 'Zoom to 0.1 nm atomic resolution on [[RNA atoms|rna_atoms]]: only C, H, N, O and phosphorus P.' },
        { id: 'vir.ch3.s0.02', text: 'Each ribose 2-prime OH in [[RNA atoms|rna_atoms]] drives A-form geometry and [[G-U wobble|wobble_gu]] pairs.' },
        { id: 'vir.ch3.s0.03', text: 'Not a single amino-acid sulfur atom belongs to PSTVd itself; host enzymes do every reaction.' },
      ] },
      { id: 'vir-finale', title: 'Code without a coat: bridging onward to Prions', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['tl_domain', 'c_domain', 'loop_e', 'pol2', 'ligase', 'rna_atoms'], cues: [
        { id: 'vir.ch3.s1.01', text: 'Five RNA domains, [[Loop E|loop_e]], host [[Pol II|pol2]] and [[ligase|ligase]] sustain a coatless replicator.' },
        { id: 'vir.ch3.s1.02', text: 'With zero capsid, zero genes for proteins, zero ribosomes and zero ATP, PSTVd is pure RNA code.' },
        { id: 'vir.ch3.s1.03', text: 'Inspect any domain tag now, or continue to Prions to see infectious shape with zero genes.' },
      ] },
    ] },
  ],
  details: {},
};
