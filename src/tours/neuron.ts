import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 17A: Multipolar Neuron & Chemical Synapse (real-neuron), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const NEURON_TOUR: TourDefinition = {
  title: 'Multipolar Neuron & Chemical Synapse: a guided tour',
  root: 'real-neuron',
  page: 'neuron_realistic.html',
  view: 'overview',
  summary: 'Explore how identical 6.4 Gbp human DNA builds an excitable multipolar neuron via H3K27ac euchromatin: dendritic summation, axon hillock ignition, saltatory conduction across myelin and Nodes of Ranvier (Nav1.7, Kv1.2, Na+/K+ reset), microtubule transport, Ca2+-triggered SNARE vesicle fusion, 20 nm cleft diffusion to AMPA/nAChR receptors and atomic neurotransmitter chemistry.',
  views: {
    overview: 'real-neuron',
    soma_epigenetics: 'real-epigenetics',
    node_ranvier: 'real-neuron-node',
    synapse: 'real-neuron-synapse',
    atoms: 'real-spec-atoms',
  },
  chapters: [
    { id: 'ch0', title: 'Same 6.4 Gbp DNA, Wired for Speed', steps: [
      { id: 'neu-overview-identity', title: 'Multipolar neuron architecture & shared genome', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['dendrites', 'soma', 'myelin_sheath', 'terminal_bouton'], cues: [
        { id: 'neu.ch0.s0.01', text: 'This neuron carries the same 6.4 Gbp DNA as every human cell, sculpted from [[dendrites|dendrites]] to [[bouton|terminal_bouton]].' },
        { id: 'neu.ch0.s0.02', text: 'Signals enter branching [[dendrites|dendrites]], sum in the [[soma|soma]], and race along a myelinated axon.' },
        { id: 'neu.ch0.s0.03', text: 'Differential gene regulation inside the [[soma|soma]] builds ion channels and synapses without altering DNA.' },
      ] },
      { id: 'neu-soma-epigenetics', title: 'H3K27ac euchromatin vs H3K27me3 silencing (1AOI)', camera: { view: 'soma_epigenetics', dur: 2.4, orbit: 2 }, blink: 'nucleus_h3k27ac', flow: true, ghost: false,
        tags: ['nucleus_h3k27ac', 'soma', 'nav17', 'synaptic_vesicle'], cues: [
        { id: 'neu.ch0.s1.01', text: 'Zoom into the [[soma nucleus|nucleus_h3k27ac]], where histone marks control which parts of the 6.4 Gbp genome open.' },
        { id: 'neu.ch0.s1.02', text: 'Active H3K27ac tags loosen [[euchromatin|nucleus_h3k27ac]] to express neuronal SCN9A sodium channels and SYT1.' },
        { id: 'neu.ch0.s1.03', text: 'Meanwhile, compact H3K27me3 chromatin in the [[nucleus|nucleus_h3k27ac]] silences muscle MYH1 and blood HBB.' },
      ] },
    ] },
    { id: 'ch1', title: 'Dendrites, Axon Hillock & Action Potential Ignition', steps: [
      { id: 'neu-dendrites-input', title: 'Spiny dendrites receiving graded synaptic inputs', camera: { part: 'dendrites', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'dendrites', flow: true,
        ghost: ['dendrites', 'soma', 'ampa_receptor'], tags: ['dendrites', 'soma', 'ampa_receptor'], cues: [
        { id: 'neu.ch1.s0.01', text: 'Branching [[dendrites|dendrites]] bristle with tiny spines that receive chemical signals from upstream neurons.' },
        { id: 'neu.ch1.s0.02', text: 'Ion entry across [[dendritic|dendrites]] membranes creates brief graded voltages that spread toward the [[soma|soma]].' },
        { id: 'neu.ch1.s0.03', text: 'Excitatory inputs push voltage upward while inhibitory inputs pull the [[dendrites|dendrites]] further negative.' },
      ] },
      { id: 'neu-soma-integration', title: 'Soma spatiotemporal summation & organelle biosynthesis', camera: { part: 'soma', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'soma', flow: true,
        ghost: ['soma', 'dendrites', 'axon_hillock', 'nucleus_h3k27ac'], tags: ['soma', 'dendrites', 'axon_hillock', 'nucleus_h3k27ac'], cues: [
        { id: 'neu.ch1.s1.01', text: 'The [[soma|soma]] sums thousands of overlapping synaptic currents arriving across space and milliseconds.' },
        { id: 'neu.ch1.s1.02', text: 'Its rough ER and Golgi pack channels and enzymes inside the [[cell body|soma]] for long-range axon export.' },
        { id: 'neu.ch1.s1.03', text: 'All integrated voltage shifts funnel from the [[soma|soma]] into the narrow cone of the [[axon hillock|axon_hillock]].' },
      ] },
      { id: 'neu-hillock-ignition', title: 'Axon hillock -55 mV threshold & +40 mV spike', camera: { part: 'axon_hillock', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'axon_hillock', flow: true,
        ghost: ['axon_hillock', 'nav17', 'soma', 'myelin_sheath'], tags: ['axon_hillock', 'nav17', 'soma', 'myelin_sheath'], cues: [
        { id: 'neu.ch1.s2.01', text: 'At rest near -70 mV, the [[axon hillock|axon_hillock]] packs a dense cluster of voltage-gated sodium channels.' },
        { id: 'neu.ch1.s2.02', text: 'If summed inputs cross -55 mV at the [[axon hillock|axon_hillock]], sodium gates snap open in positive feedback.' },
        { id: 'neu.ch1.s2.03', text: 'Voltage spikes to +40 mV, launching an all-or-none action potential down the [[axon|myelin_sheath]].' },
      ] },
    ] },
    { id: 'ch2', title: 'Myelin Sheaths & Saltatory Nodes of Ranvier', steps: [
      { id: 'neu-myelin-saltatory', title: 'Myelin insulation & 120 m/s saltatory conduction', camera: { part: 'myelin_sheath', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'myelin_sheath', flow: true,
        ghost: ['myelin_sheath', 'node_ranvier', 'axon_hillock'], tags: ['myelin_sheath', 'node_ranvier', 'axon_hillock'], cues: [
        { id: 'neu.ch2.s0.01', text: 'Multilayer lipid [[myelin sheaths|myelin_sheath]] wrap the axon tightly, cutting ion leak and membrane capacitance.' },
        { id: 'neu.ch2.s0.02', text: '[[Myelin sheaths|myelin_sheath]] speed conduction to 120 m/s as impulses regenerate only at [[Nodes of Ranvier|node_ranvier]].' },
        { id: 'neu.ch2.s0.03', text: 'This saltatory hopping saves vast ATP because ion exchange occurs only at tiny bare [[nodes|node_ranvier]].' },
      ] },
      { id: 'neu-node-nav-kv', title: 'Node of Ranvier: Nav1.7 (6J8I) & Kv1.2 (2R9R)', camera: { view: 'node_ranvier', dur: 2.4, orbit: 2 }, blink: 'nav17', flow: true, ghost: false,
        tags: ['node_ranvier', 'nav17', 'kv12', 'nak_reset'], cues: [
        { id: 'neu.ch2.s1.01', text: 'Zoom to an exposed [[Node of Ranvier|node_ranvier]] where dense [[Nav1.7|nav17]] channels renew the voltage spike.' },
        { id: 'neu.ch2.s1.02', text: 'Voltage opens [[Nav1.7|nav17]] pores to rush Na+ inward to +40 mV before fast inactivation seals the channel.' },
        { id: 'neu.ch2.s1.03', text: 'Adjacent [[Kv1.2|kv12]] channels then open so K+ rushes outward, repolarizing the [[node|node_ranvier]] toward -70 mV.' },
      ] },
      { id: 'neu-nak-and-mt', title: 'Na+/K+ reset (3WGU) & axonal microtubule rail', camera: { part: 'nak_reset', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'nak_reset', flow: true,
        ghost: ['nak_reset', 'axon_mt', 'node_ranvier', 'synaptic_vesicle'], tags: ['nak_reset', 'axon_mt', 'node_ranvier', 'synaptic_vesicle'], cues: [
        { id: 'neu.ch2.s2.01', text: 'Flanking [[Na+/K+ pumps|nak_reset]] burn ATP to export 3 Na+ and import 2 K+, resetting resting -70 mV gradients.' },
        { id: 'neu.ch2.s2.02', text: 'Deep inside the axon, parallel [[microtubule tracks|axon_mt]] form polarized highways running to the terminal.' },
        { id: 'neu.ch2.s2.03', text: 'Kinesin motors walk along [[axon microtubules|axon_mt]] carrying mitochondria and [[vesicles|synaptic_vesicle]] outward.' },
      ] },
    ] },
    { id: 'ch3', title: 'Presynaptic Ca2+ Surge & SNARE (1SFC) Vesicle Fusion', steps: [
      { id: 'neu-terminal-cav', title: 'Terminal bouton depolarization & Cav Ca2+ influx', camera: { view: 'synapse', dur: 2.4, orbit: 2 }, blink: 'cav_channel', flow: true, ghost: false,
        tags: ['terminal_bouton', 'cav_channel', 'synaptic_vesicle', 'synaptic_cleft'], cues: [
        { id: 'neu.ch3.s0.01', text: 'The electrical spike reaches the flared [[terminal bouton|terminal_bouton]] facing a 20 nm chemical synapse.' },
        { id: 'neu.ch3.s0.02', text: 'Depolarization pops open voltage-gated [[Ca2+ channels|cav_channel]] clustered right beside the active zone.' },
        { id: 'neu.ch3.s0.03', text: 'Driven by a 10,000-fold gradient, Ca2+ surges through [[Cav pores|cav_channel]] into the [[bouton|terminal_bouton]].' },
      ] },
      { id: 'neu-snare-fusion', title: 'Synaptotagmin Ca2+ trigger & SNARE (1SFC) zippering', camera: { part: 'snare_zipper', dist: 1.18, dur: 2.2, orbit: 2 }, blink: 'snare_zipper', flow: true,
        ghost: ['snare_zipper', 'synaptic_vesicle', 'cav_channel', 'terminal_bouton'], tags: ['snare_zipper', 'synaptic_vesicle', 'cav_channel', 'terminal_bouton'], cues: [
        { id: 'neu.ch3.s1.01', text: 'Local Ca2+ binds synaptotagmin on docked [[synaptic vesicles|synaptic_vesicle]], releasing the fusion clamp.' },
        { id: 'neu.ch3.s1.02', text: 'Four-helix [[SNARE complexes|snare_zipper]] coil tightly, pulling [[vesicle|synaptic_vesicle]] and terminal bilayers to fuse.' },
        { id: 'neu.ch3.s1.03', text: 'Within half a millisecond, [[SNARE|snare_zipper]] force opens a lipid fusion pore straight to the outside.' },
      ] },
      { id: 'neu-vesicle-release', title: 'Quantal neurotransmitter burst & vesicle recycling', camera: { part: 'synaptic_vesicle', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'synaptic_vesicle', flow: true,
        ghost: ['synaptic_vesicle', 'synaptic_cleft', 'snare_zipper', 'terminal_bouton'], tags: ['synaptic_vesicle', 'synaptic_cleft', 'snare_zipper', 'terminal_bouton'], cues: [
        { id: 'neu.ch3.s2.01', text: 'Each fusing [[synaptic vesicle|synaptic_vesicle]] empties thousands of neurotransmitter molecules into the [[cleft|synaptic_cleft]].' },
        { id: 'neu.ch3.s2.02', text: 'Glutamate excites central circuits while acetylcholine fires motor junctions across the [[synaptic cleft|synaptic_cleft]].' },
        { id: 'neu.ch3.s2.03', text: 'NSF then unwinds spent [[SNAREs|snare_zipper]] so endocytosis can refill fresh [[vesicles|synaptic_vesicle]] for rapid bursts.' },
      ] },
    ] },
    { id: 'ch4', title: 'Crossing the 20 nm Cleft, Atomic Ions & Muscle Handoff', steps: [
      { id: 'neu-postsynaptic-receptors', title: 'AMPA (3KG2) & nAChR (2BG9) ligand-gated channels', camera: { part: 'ampa_receptor', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ampa_receptor', flow: true,
        ghost: ['synaptic_cleft', 'ampa_receptor', 'nachr_receptor'], tags: ['synaptic_cleft', 'ampa_receptor', 'nachr_receptor'], cues: [
        { id: 'neu.ch4.s0.01', text: 'Neurotransmitters cross the 20 nm [[synaptic cleft|synaptic_cleft]] by diffusion in mere tens of microseconds.' },
        { id: 'neu.ch4.s0.02', text: 'Glutamate binds [[AMPA receptors|ampa_receptor]] while acetylcholine opens [[nAChR channels|nachr_receptor]] on the target.' },
        { id: 'neu.ch4.s0.03', text: 'Both [[AMPA|ampa_receptor]] and [[nAChR|nachr_receptor]] admit Na+, turning the chemical pulse back into voltage.' },
      ] },
      { id: 'neu-atomic-lens', title: 'Atomic glutamate, ACh, Na+/K+/Ca2+ & H3K27ac mark', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'neuro_atoms', flow: true, ghost: false,
        tags: ['neuro_atoms', 'nucleus_h3k27ac', 'ampa_receptor', 'nachr_receptor'], cues: [
        { id: 'neu.ch4.s1.01', text: 'Zoom to 0.1-0.5 nm in the [[atomic lens|neuro_atoms]] showing neurotransmitters, ions and epigenetic marks.' },
        { id: 'neu.ch4.s1.02', text: 'In [[neuro atoms|neuro_atoms]], glutamate (C5H9NO4) and acetylcholine sit beside Na+, K+ and triggering Ca2+ ions.' },
        { id: 'neu.ch4.s1.03', text: 'A tiny -COCH3 acetyl group in [[neuro atoms|neuro_atoms]] marks H3K27ac histones that unlock neuronal identity.' },
      ] },
      { id: 'neu-recap-handoff', title: 'Live firing states & handoff to Skeletal Muscle', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['nucleus_h3k27ac', 'node_ranvier', 'snare_zipper', 'nachr_receptor', 'terminal_bouton'], cues: [
        { id: 'neu.ch4.s2.01', text: 'From [[H3K27ac chromatin|nucleus_h3k27ac]] to [[Ranvier nodes|node_ranvier]] and [[SNAREs|snare_zipper]], structure drives speed.' },
        { id: 'neu.ch4.s2.02', text: 'Toggle Action Potential, Resting and Synaptic Fire modes to watch [[bouton|terminal_bouton]] firing live.' },
        { id: 'neu.ch4.s2.03', text: 'Follow acetylcholine across [[nAChR|nachr_receptor]] into the Skeletal Muscle Fiber to see force generation.' },
      ] },
    ] },
  ],
  details: {},
};

export const neuronTour: TourDefinition = NEURON_TOUR;
