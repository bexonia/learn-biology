import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 13C: Mammalian Prion PrPc -> PrPsc Amyloid Fibril (real-prion), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const prionTour: TourDefinition = {
  title: 'Prion (PrPc to PrPsc Amyloid Fibril): a guided tour',
  root: 'real-prion',
  page: 'prion_realistic.html',
  view: 'overview',
  summary: 'Explore protein-only infectious inheritance with zero DNA or RNA: GPI-anchored alpha-helical PrPc on a neuronal lipid raft, templated docking, 4.8 A cross-beta PIRIBS amyloid rungs, steric zippers and amide H-bond atoms.',
  views: {
    overview: 'real-prion',
    focus: 'real-prion',
    prpc_raft: 'real-prion-prpc',
    conversion: 'real-prion-piribs',
    piribs: 'real-prion-zipper',
    atoms: 'atom-s',
  },
  chapters: [
    { id: 'ch0', title: 'Infection With Zero DNA or RNA', steps: [
      { id: 'pri-intro', title: 'PrPc to PrPsc: infectious shape with zero genes', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['prpc', 'prpsc_fibril', 'lipid_raft', 'template_dock'], cues: [
        { id: 'pri.ch0.s0.01', text: 'Meet the mammalian prion, an infectious agent made purely of misfolded protein with zero genes.' },
        { id: 'pri.ch0.s0.02', text: 'Unlike viruses or viroids, [[PrPsc fibrils|prpsc_fibril]] carry zero DNA and zero RNA nucleotides.' },
        { id: 'pri.ch0.s0.03', text: 'Information propagates purely by shape, converting healthy [[PrPc|prpc]] into [[PrPsc|prpsc_fibril]].' },
      ] },
      { id: 'pri-same-sequence', title: 'Identical 208-aa sequence, two opposite folds', camera: { part: 'prpc', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'prpc',
        ghost: ['prpc', 'prpsc_fibril', 'helices_h123'], tags: ['prpc', 'prpsc_fibril', 'helices_h123', 'piribs_core'], cues: [
        { id: 'pri.ch0.s1.01', text: 'Both harmless [[PrPc|prpc]] and lethal [[PrPsc|prpsc_fibril]] share the exact same 208-residue sequence.' },
        { id: 'pri.ch0.s1.02', text: 'Encoded by the host PRNP gene, mature residues 23 to 230 adopt two radically different 3D folds.' },
        { id: 'pri.ch0.s1.03', text: 'Soluble [[alpha-helices|helices_h123]] flip into an insoluble [[cross-beta core|piribs_core]] without mutation.' },
      ] },
    ] },
    { id: 'ch1', title: 'Healthy Alpha-Helical PrPc on the Neuronal Raft', steps: [
      { id: 'pri-raft-gpi', title: 'Neuronal lipid raft & C-terminal GPI anchor', camera: { view: 'prpc_raft', dur: 2.4, orbit: 2 }, blink: 'lipid_raft', ghost: false,
        tags: ['lipid_raft', 'gpi_anchor', 'prpc'], cues: [
        { id: 'pri.ch1.s0.01', text: 'On healthy brain neurons, cholesterol-rich [[lipid rafts|lipid_raft]] host native [[PrPc|prpc]] monomers.' },
        { id: 'pri.ch1.s0.02', text: 'A C-terminal [[GPI anchor|gpi_anchor]] tethers [[PrPc|prpc]] to the outer leaflet of the [[lipid raft|lipid_raft]].' },
        { id: 'pri.ch1.s0.03', text: 'Normal [[PrPc|prpc]] stays monomeric, soluble and easily recycled by cellular proteases.' },
      ] },
      { id: 'pri-helices-beta', title: 'Native H1-H3 alpha-helices & short beta-ribbon', camera: { part: 'helices_h123', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'helices_h123',
        ghost: ['helices_h123', 'beta_ribbon', 'prpc'], tags: ['helices_h123', 'beta_ribbon', 'prpc'], cues: [
        { id: 'pri.ch1.s1.01', text: 'Solution NMR reveals [[PrPc|prpc]] built around three compact [[alpha-helices H1-H3|helices_h123]].' },
        { id: 'pri.ch1.s1.02', text: 'Flanking those [[helices|helices_h123]] sits a short two-strand [[beta-ribbon|beta_ribbon]] of six residues.' },
        { id: 'pri.ch1.s1.03', text: 'Its flexible N-terminal tail binds copper ions while the folded C-terminal globe stays stable.' },
      ] },
      { id: 'pri-glycans-disulfide', title: 'N-glycan shield & conserved Cys179-Cys214 disulfide', camera: { part: 'disulfide', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'disulfide',
        ghost: ['disulfide', 'nglycans', 'prpc', 'helices_h123'], tags: ['disulfide', 'nglycans', 'prpc'], cues: [
        { id: 'pri.ch1.s2.01', text: 'Two branching [[N-glycan trees|nglycans]] shield the outer surface of native [[PrPc|prpc]].' },
        { id: 'pri.ch1.s2.02', text: 'Inside, one covalent [[Cys179-Cys214 disulfide|disulfide]] bridges helices H2 and H3.' },
        { id: 'pri.ch1.s2.03', text: 'Remarkably, this sulfur [[disulfide bond|disulfide]] remains unbroken even after conversion to PrPsc.' },
      ] },
    ] },
    { id: 'ch2', title: 'Templated Refolding & Cross-Beta PIRIBS Amyloid', steps: [
      { id: 'pri-conversion', title: 'Templated docking & conformational refolding', camera: { view: 'conversion', dur: 2.4, orbit: 2 }, blink: 'template_dock', flow: true, ghost: false,
        tags: ['template_dock', 'prpc', 'prpsc_fibril', 'beta_rungs'], cues: [
        { id: 'pri.ch2.s0.01', text: 'Conversion begins when soluble [[PrPc|prpc]] encounters the exposed [[template tip|template_dock]] of a seed.' },
        { id: 'pri.ch2.s0.02', text: 'Docked onto [[template tip|template_dock]], [[PrPc|prpc]] unwinds and refolds onto [[PrPsc|prpsc_fibril]] rungs.' },
        { id: 'pri.ch2.s0.03', text: 'Each refolded subunit becomes the next [[template tip|template_dock]], adding a fresh [[beta rung|beta_rungs]].' },
      ] },
      { id: 'pri-piribs', title: 'Cryo-EM PIRIBS architecture & 4.8 A beta rungs', camera: { view: 'piribs', dur: 2.4, orbit: 2 }, blink: 'piribs_core', flow: true, ghost: false,
        tags: ['piribs_core', 'beta_rungs', 'prpsc_fibril', 'disulfide'], cues: [
        { id: 'pri.ch2.s1.01', text: 'Near-atomic cryo-EM maps the 13 nm [[PrPsc fibril|prpsc_fibril]] as a parallel [[PIRIBS core|piribs_core]].' },
        { id: 'pri.ch2.s1.02', text: 'Identical residues stack directly in register along [[cross-beta rungs|beta_rungs]] spaced 4.8 A apart.' },
        { id: 'pri.ch2.s1.03', text: 'Every monomer flattens into a serpentine arch around the intact [[Cys179-Cys214 disulfide|disulfide]].' },
      ] },
      { id: 'pri-zipper', title: 'Dry steric zippers & extreme protease resistance', camera: { part: 'steric_zipper', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'steric_zipper', flow: true,
        ghost: ['steric_zipper', 'piribs_core', 'beta_rungs', 'nglycans'], tags: ['steric_zipper', 'piribs_core', 'beta_rungs', 'nglycans'], cues: [
        { id: 'pri.ch2.s2.01', text: 'Between facing beta sheets, side chains interdigitate into a water-free [[steric zipper|steric_zipper]].' },
        { id: 'pri.ch2.s2.02', text: 'Dry [[steric zippers|steric_zipper]] and outward [[N-glycans|nglycans]] lock the [[PIRIBS core|piribs_core]] rigid.' },
        { id: 'pri.ch2.s2.03', text: 'This ultra-stable amyloid resists boiling, UV light, alcohol and cellular protease cleavage.' },
      ] },
    ] },
    { id: 'ch3', title: 'Seed Fragmentation, Amide Atoms & Edge-of-Life Finale', steps: [
      { id: 'pri-fragmentation', title: 'Fibril fragmentation & exponential seed spread', camera: { part: 'fragmentation', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'fragmentation', flow: true,
        ghost: ['fragmentation', 'template_dock', 'prpsc_fibril'], tags: ['fragmentation', 'template_dock', 'prpsc_fibril'], cues: [
        { id: 'pri.ch3.s0.01', text: 'Shear forces cause [[fibril fragmentation|fragmentation]], snapping one [[PrPsc|prpsc_fibril]] into two seeds.' },
        { id: 'pri.ch3.s0.02', text: 'Each broken [[fragment|fragmentation]] creates fresh [[template tips|template_dock]], multiplying conversion rate.' },
        { id: 'pri.ch3.s0.03', text: 'This protein-only chain reaction drives CJD, scrapie and BSE without a single viral gene.' },
      ] },
      { id: 'pri-atoms', title: 'Atomic 4.8 A amide H-bond ladder & sulfur bridge', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'amide_atoms', flow: true, ghost: false,
        tags: ['amide_atoms', 'beta_rungs', 'disulfide'], cues: [
        { id: 'pri.ch3.s1.01', text: 'Zoom to 0.1 nm atomic scale on [[amide atoms|amide_atoms]]: backbone N-H bonds grip O=C every 4.8 A.' },
        { id: 'pri.ch3.s1.02', text: 'Hundreds of parallel [[amide H-bonds|amide_atoms]] reinforce each [[beta rung|beta_rungs]] axially.' },
        { id: 'pri.ch3.s1.03', text: 'Only C, H, N, O and [[disulfide sulfur|disulfide]] atoms appear here: zero phosphorus and zero genes.' },
      ] },
      { id: 'pri-finale', title: 'Bottom of the autonomy ladder & onward to Cell Division', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['prpc', 'prpsc_fibril', 'piribs_core', 'steric_zipper', 'amide_atoms'], cues: [
        { id: 'pri.ch3.s2.01', text: 'From 750 nm Mimivirus to 359-nt PSTVd to zero-gene [[PrPsc|prpsc_fibril]], life\'s pillars fall to zero.' },
        { id: 'pri.ch3.s2.02', text: 'No membrane, no genome, no ribosomes and no ATP: [[prions|prpsc_fibril]] prove shape alone can infect.' },
        { id: 'pri.ch3.s2.03', text: 'Inspect any molecular tag now, or move ahead to Cell Division to see living genomes replicate.' },
      ] },
    ] },
  ],
  details: {},
};
