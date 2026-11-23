import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 13A: Giant Virus Acanthamoeba polyphaga Mimivirus (real-mimivirus), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const mimivirusTour: TourDefinition = {
  title: 'Mimivirus (750 nm Giant Virus): a guided tour',
  root: 'real-mimivirus',
  page: 'mimivirus_realistic.html',
  view: 'overview',
  summary: 'Explore a 750 nm giant virus wider than living Mycoplasma: 125 nm glycosylated fibers, 500 nm double-jelly-roll capsid, 5-fold stargate portal, 1.18 Mbp genomic fiber, viral TyrRS and cytoplasmic viral factory.',
  views: {
    overview: 'real-mimivirus',
    focus: 'real-mimivirus',
    stargate: 'real-mimi-stargate',
    genome: 'real-mimi-fiber',
    factory: 'real-mimivirus',
    atoms: 'real-mimi-tyrrs',
  },
  chapters: [
    { id: 'ch0', title: 'A Giant Virus Larger Than a Living Cell', steps: [
      { id: 'mimi-intro', title: 'Acanthamoeba polyphaga Mimivirus at 750 nm', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['fibers', 'capsid', 'stargate', 'myco_ref', 'viral_factory'], cues: [
        { id: 'mimi.ch0.s0.01', text: 'Meet Acanthamoeba polyphaga Mimivirus, a 750 nm giant virus first mistaken for a bacterium.' },
        { id: 'mimi.ch0.s0.02', text: 'Its [[fiber canopy|fibers]], [[capsid|capsid]] and [[stargate|stargate]] dwarf every canonical virus.' },
        { id: 'mimi.ch0.s0.03', text: 'Cut open its shell to test whether huge size and 1,000 genes cross the boundary into life.' },
      ] },
      { id: 'mimi-myco-compare', title: 'True-scale comparison vs. living Mycoplasma', camera: { part: 'myco_ref', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'myco_ref',
        ghost: ['myco_ref', 'fibers', 'capsid'], tags: ['myco_ref', 'fibers', 'capsid', 'host_ribo'], cues: [
        { id: 'mimi.ch0.s1.01', text: 'Beside the virion sits a true-scale 300 nm [[Mycoplasma cell|myco_ref]], the smallest living cell.' },
        { id: 'mimi.ch0.s1.02', text: 'Mimivirus is over twice as wide as [[Mycoplasma|myco_ref]] and carries double its 482 genes.' },
        { id: 'mimi.ch0.s1.03', text: 'Yet [[Mycoplasma|myco_ref]] owns 70S ribosomes and ATP pathways, while Mimivirus has zero.' },
      ] },
    ] },
    { id: 'ch1', title: '125 nm Fiber Canopy, Capsid & Inner Bilayer', steps: [
      { id: 'mimi-fibers', title: 'Glycosylated 125 nm surface fiber coat', camera: { part: 'fibers', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'fibers',
        ghost: ['fibers', 'capsid', 'amoeba_mem'], tags: ['fibers', 'capsid', 'amoeba_mem'], cues: [
        { id: 'mimi.ch1.s0.01', text: 'A dense 125 nm coat of glycosylated [[surface fibers|fibers]] bristles from every [[capsid|capsid]] face.' },
        { id: 'mimi.ch1.s0.02', text: 'Cross-linked sugars on these [[fibers|fibers]] mimic bacteria so [[amoeba membranes|amoeba_mem]] engulf it.' },
        { id: 'mimi.ch1.s0.03', text: 'That bacterial disguise even retains Gram stain dye, fooling microbiologists for a decade.' },
      ] },
      { id: 'mimi-capsid', title: '500 nm pseudo-icosahedral double-jelly-roll capsid', camera: { part: 'capsid', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'capsid',
        ghost: ['capsid', 'fibers', 'inner_mem'], tags: ['capsid', 'fibers', 'inner_mem'], cues: [
        { id: 'mimi.ch1.s1.01', text: 'Under the [[fiber canopy|fibers]] lies a 500 nm pseudo-icosahedral protein [[capsid|capsid]].' },
        { id: 'mimi.ch1.s1.02', text: 'Double-jelly-roll major capsid trimers tile each facet of the [[capsid|capsid]] into rigid armor.' },
        { id: 'mimi.ch1.s1.03', text: 'Twenty triangular faces shield the giant genome from pond water, desiccation and predators.' },
      ] },
      { id: 'mimi-inner-mem', title: 'Internal lipid bilayer beneath the protein shell', camera: { part: 'inner_mem', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'inner_mem',
        ghost: ['inner_mem', 'capsid', 'genomic_fiber'], tags: ['inner_mem', 'capsid', 'genomic_fiber'], cues: [
        { id: 'mimi.ch1.s2.01', text: 'Lining the interior of the [[capsid|capsid]] sits a continuous viral [[inner lipid bilayer|inner_mem]].' },
        { id: 'mimi.ch1.s2.02', text: 'Unlike enveloped coronaviruses, Mimivirus hides this [[inner membrane|inner_mem]] inside protein armor.' },
        { id: 'mimi.ch1.s2.03', text: 'This sealed [[lipid sac|inner_mem]] protects the [[genomic fiber|genomic_fiber]] until entry triggers fusion.' },
      ] },
    ] },
    { id: 'ch2', title: 'Opening the 5-Fold Stargate Portal', steps: [
      { id: 'mimi-stargate', title: 'Five-pointed stargate vertex portal', camera: { view: 'stargate', dur: 2.4, orbit: 2 }, blink: 'stargate', flow: true, ghost: false,
        tags: ['stargate', 'capsid', 'phagosome', 'amoeba_mem'], cues: [
        { id: 'mimi.ch2.s0.01', text: 'One unique vertex breaks symmetry with a five-pointed star seam called the [[stargate|stargate]].' },
        { id: 'mimi.ch2.s0.02', text: 'Inside an acidic [[phagosome|phagosome]], low pH triggers all five [[stargate|stargate]] petals to unzip.' },
        { id: 'mimi.ch2.s0.03', text: 'Wide open, the [[stargate|stargate]] clears a huge aperture straight through the rigid [[capsid|capsid]].' },
      ] },
      { id: 'mimi-phagosome-fusion', title: 'Phagosome membrane fusion & core injection', camera: { part: 'phagosome', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'phagosome', flow: true,
        ghost: ['phagosome', 'amoeba_mem', 'inner_mem', 'stargate'], tags: ['phagosome', 'amoeba_mem', 'inner_mem', 'stargate', 'genomic_fiber'], cues: [
        { id: 'mimi.ch2.s1.01', text: 'After the [[amoeba membrane|amoeba_mem]] swallows the virion, an acidic [[phagosome|phagosome]] encloses it.' },
        { id: 'mimi.ch2.s1.02', text: 'Through the open [[stargate|stargate]], the [[inner membrane|inner_mem]] fuses with the [[phagosome|phagosome]] wall.' },
        { id: 'mimi.ch2.s1.03', text: 'That fusion bridge injects the entire [[genomic fiber|genomic_fiber]] directly into amoeba cytosol.' },
      ] },
    ] },
    { id: 'ch3', title: '1.18 Mbp Genomic Fiber & Translation Enzymes', steps: [
      { id: 'mimi-genomic-fiber', title: '30 nm helical genomic fiber & 1.18 Mbp dsDNA', camera: { view: 'genome', dur: 2.4, orbit: 2 }, blink: 'genomic_fiber', flow: true, ghost: false,
        tags: ['genomic_fiber', 'dsdna', 'inner_mem'], cues: [
        { id: 'mimi.ch3.s0.01', text: 'Inside the [[inner membrane|inner_mem]] coils a 30 nm helical [[genomic fiber|genomic_fiber]] protein shell.' },
        { id: 'mimi.ch3.s0.02', text: 'This cryo-EM tube packages 1.18 Mbp of linear [[dsDNA|dsdna]] encoding roughly 1,000 viral genes.' },
        { id: 'mimi.ch3.s0.03', text: 'Unwinding the [[genomic fiber|genomic_fiber]] exposes [[viral dsDNA|dsdna]] right inside host cytoplasm.' },
      ] },
      { id: 'mimi-rnap-capping', title: 'Packaged viral RNA polymerase & capping enzymes', camera: { part: 'viral_rnap', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'viral_rnap', flow: true,
        ghost: ['viral_rnap', 'capping_enz', 'dsdna'], tags: ['viral_rnap', 'capping_enz', 'dsdna'], cues: [
        { id: 'mimi.ch3.s1.01', text: 'Mimivirus never enters the amoeba nucleus, because it packs its own [[RNA polymerase|viral_rnap]].' },
        { id: 'mimi.ch3.s1.02', text: 'Early transcription launches immediately on [[dsDNA|dsdna]] via packaged [[viral RNAP|viral_rnap]].' },
        { id: 'mimi.ch3.s1.03', text: 'Viral [[mRNA capping enzymes|capping_enz]] add 5-prime caps so host translation accepts viral transcripts.' },
      ] },
      { id: 'mimi-tyrrs', title: 'Viral TyrRS synthetase & the missing ribosome pillar', camera: { part: 'tyrrs', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'tyrrs', flow: true,
        ghost: ['tyrrs', 'dsdna', 'host_ribo'], tags: ['tyrrs', 'dsdna', 'host_ribo'], cues: [
        { id: 'mimi.ch3.s2.01', text: 'Shockingly, its [[dsDNA|dsdna]] even encodes aminoacyl-tRNA synthetases such as viral [[TyrRS|tyrrs]].' },
        { id: 'mimi.ch3.s2.02', text: 'Even with [[viral TyrRS|tyrrs]] charging tRNAs, Mimivirus still relies wholly on [[host ribosomes|host_ribo]].' },
        { id: 'mimi.ch3.s2.03', text: 'It carries zero ribosomal RNA and zero ribosomal proteins, failing life\'s translation pillar.' },
      ] },
    ] },
    { id: 'ch4', title: 'Cytoplasmic Viral Factory, Atoms & Edge-of-Life Recap', steps: [
      { id: 'mimi-factory', title: 'Giant viral factory fueled by stolen 80S & ATP', camera: { view: 'factory', dur: 2.4, orbit: 2 }, blink: 'viral_factory', flow: true, ghost: false,
        tags: ['viral_factory', 'host_ribo', 'atp_pool', 'capsid', 'amoeba_mem'], cues: [
        { id: 'mimi.ch4.s0.01', text: 'Within hours, early proteins erect a giant cytoplasmic [[viral factory|viral_factory]] rivaling a nucleus.' },
        { id: 'mimi.ch4.s0.02', text: 'Host [[80S ribosomes|host_ribo]] and amoeba [[ATP pools|atp_pool]] ring this [[factory|viral_factory]] to build progeny.' },
        { id: 'mimi.ch4.s0.03', text: 'With zero ATP synthases and zero ribosomes of its own, Mimivirus remains a non-living giant.' },
      ] },
      { id: 'mimi-atoms-recap', title: 'Atomic dsDNA bonds & the size-vs-life lesson', camera: { view: 'atoms', dur: 2.5, orbit: 3 }, blink: 'dna_atoms', flow: true, ghost: false,
        tags: ['dna_atoms', 'dsdna', 'fibers', 'stargate', 'myco_ref'], cues: [
        { id: 'mimi.ch4.s1.01', text: 'Zoom to 0.1 nm atomic scale on [[dsDNA atoms|dna_atoms]]: C, H, N, O and phosphodiester P.' },
        { id: 'mimi.ch4.s1.02', text: 'Hydrogen bonds pair A-T and G-C inside [[dsDNA atoms|dna_atoms]], storing 1.18 Mbp of viral code.' },
        { id: 'mimi.ch4.s1.03', text: 'Bigger than [[Mycoplasma|myco_ref]] yet non-living, Mimivirus leads next to naked RNA viroids.' },
      ] },
    ] },
  ],
  details: {},
};
