import type { TourDefinition } from "./tourService.js";

// Guided tour of Stage 3.3: Rickettsia prowazekii (real-rickettsia), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const rickettsiaTour: TourDefinition = {
  title: 'Rickettsia prowazekii: a guided tour',
  root: 'real-rickettsia',
  page: 'rickettsia_realistic.html',
  view: 'cytosol',
  summary: 'Free in the host cytosol: follow phagosome escape, Tlc1 ATP theft, own respiratory chain, Sca2 actin comet propulsion and the origin of Mitochondria.',
  views: {
    cytosol: 'real-rickettsia',
    focus: 'real-rickettsia',
    envelope: 'real-rick-envelope',
    comet: 'real-rick-comet',
    mito_link: 'real-rick-mito',
  },
  chapters: [
    { id: 'ch0', title: 'Phagosome escape & naked cytosolic life', steps: [
      { id: 'rick-intro', title: 'Living naked in the host cytosol', camera: { view: 'cytosol', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['om', 'tlc1', 'comet', 'host_mito'], cues: [
        { id: 'rick.ch0.s0.01', text: 'Meet Rickettsia prowazekii, the alphaproteobacterium behind epidemic typhus.' },
        { id: 'rick.ch0.s0.02', text: 'Unlike Chlamydia inside a sac, Rickettsia swims naked right in the eukaryotic cytosol.' },
        { id: 'rick.ch0.s0.03', text: 'Beside it sits a [[host mitochondrion|host_mito]], its distant evolutionary cousin.' },
      ] },
      { id: 'rick-pld', title: 'Pld & TlyC phagosome breakout', camera: { part: 'pld', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'pld',
        ghost: ['pld', 'om', 'host_mem'], tags: ['pld', 'host_mem'], cues: [
        { id: 'rick.ch0.s1.01', text: 'After entering across the [[host membrane|host_mem]], it refuses to stay trapped in a vacuole.' },
        { id: 'rick.ch0.s1.02', text: 'Secreted [[phospholipase D (Pld) and TlyC|pld]] chew open the phagosome lipid bilayer.' },
        { id: 'rick.ch0.s1.03', text: 'Within minutes [[Pld lysis|pld]] frees the rod into nutrient-rich cytoplasm before lysosomes arrive.' },
      ] },
      { id: 'rick-slime', title: 'Microcapsular slime & OmpB S-layer', camera: { part: 'slime', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'slime',
        ghost: ['slime', 'om', 'omp'], tags: ['slime', 'omp', 'om'], cues: [
        { id: 'rick.ch0.s2.01', text: 'Coating the exterior is a hydrated [[microcapsular slime layer|slime]] that masks surface antigens.' },
        { id: 'rick.ch0.s2.02', text: 'Beneath the [[slime|slime]], [[OmpA and OmpB autotransporters|omp]] tile a crystalline S-layer.' },
        { id: 'rick.ch0.s2.03', text: '[[OmpB|omp]] binds host Ku70 to trigger uptake, then shields the [[outer membrane|om]] inside.' },
      ] },
    ] },
    { id: 'ch1', title: 'Envelope, T4SS & 1.11 Mbp reductive genome', steps: [
      { id: 'rick-envelope', title: 'Gram-negative envelope & peptidoglycan', camera: { view: 'envelope', dur: 2.4, orbit: 2 }, blink: 'pg', ghost: false,
        tags: ['om', 'pg', 'im', 't4ss'], cues: [
        { id: 'rick.ch1.s0.01', text: 'Cut open, Rickettsia shows a true Gram-negative [[outer membrane|om]] and [[inner membrane|im]].' },
        { id: 'rick.ch1.s0.02', text: 'Between them lies a thin [[peptidoglycan mesh|pg]] that holds its 1.1 um rod shape.' },
        { id: 'rick.ch1.s0.03', text: 'Spanning both bilayers is the VirB/VirD4 [[Type IV Secretion System|t4ss]].' },
      ] },
      { id: 'rick-t4ss', title: 'Rvh Type IV Secretion channel', camera: { part: 't4ss', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 't4ss', flow: true,
        ghost: ['t4ss', 'om', 'im', 'pg'], tags: ['t4ss', 'om', 'im'], cues: [
        { id: 'rick.ch1.s1.01', text: 'The [[Rvh T4SS machine|t4ss]] forms a gated protein conduit across the entire cell envelope.' },
        { id: 'rick.ch1.s1.02', text: 'Powered by VirD4 ATPases at the [[inner membrane|im]], [[T4SS|t4ss]] exports stealth effectors.' },
        { id: 'rick.ch1.s1.03', text: 'Those signals suppress host apoptosis so the infected cell stays alive as an incubator.' },
      ] },
      { id: 'rick-genome', title: '1.11 Mbp DNA, RNAP & 70S ribosomes', camera: { part: 'dna', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'dna', flow: true,
        ghost: ['dna', 'rnap', 'ribosome'], tags: ['dna', 'rnap', 'ribosome'], cues: [
        { id: 'rick.ch1.s2.01', text: 'In the cytosol coils a [[1.11 Mbp circular dsDNA genome|dna]] with ~834 protein-coding genes.' },
        { id: 'rick.ch1.s2.02', text: 'Nearly a quarter of the [[chromosome|dna]] is non-coding pseudogene wreckage caught mid-decay.' },
        { id: 'rick.ch1.s2.03', text: '[[RNA polymerase|rnap]] and [[70S ribosomes|ribosome]] build its proteome; doxycycline blocks [[70S|ribosome]].' },
      ] },
    ] },
    { id: 'ch2', title: 'Dual energy strategy: Tlc1 & own respiration', steps: [
      { id: 'rick-tlc1', title: 'Early phase: Tlc1 ATP/ADP theft', camera: { part: 'tlc1', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'tlc1', flow: true,
        ghost: ['tlc1', 'im', 'om'], tags: ['tlc1', 'im'], cues: [
        { id: 'rick.ch2.s0.01', text: 'While host ATP is plentiful, Rickettsia runs twelve-helix [[Tlc1 translocases|tlc1]] in its [[inner membrane|im]].' },
        { id: 'rick.ch2.s0.02', text: 'Like Chlamydia\'s Npt1, [[Tlc1|tlc1]] imports cytosolic host ATP one-for-one for spent bacterial ADP.' },
        { id: 'rick.ch2.s0.03', text: 'Having eliminated glycolysis, Rickettsia relies on [[Tlc1|tlc1]] and imported glutamate or pyruvate.' },
      ] },
      { id: 'rick-etc', title: 'Late phase: own respiratory chain (ETC)', camera: { part: 'etc', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'etc', flow: true,
        ghost: ['etc', 'atps', 'im'], tags: ['etc', 'im'], cues: [
        { id: 'rick.ch2.s1.01', text: 'Unlike Chlamydia, Rickettsia kept a complete TCA cycle and [[electron transport chain|etc]].' },
        { id: 'rick.ch2.s1.02', text: 'As crowded bacteria drain host ATP, [[Complexes I, III and IV|etc]] oxidize NADH with oxygen.' },
        { id: 'rick.ch2.s1.03', text: 'The [[respiratory complexes|etc]] pump H+ across the [[inner membrane|im]] into the periplasm.' },
      ] },
      { id: 'rick-atps', title: 'F1Fo ATP synthase rotary turbine', camera: { part: 'atps', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'atps', flow: true,
        ghost: ['atps', 'etc', 'im'], tags: ['atps', 'etc', 'im'], cues: [
        { id: 'rick.ch2.s2.01', text: 'Periplasmic protons rush back through rotary [[F1Fo ATP synthases|atps]] in the [[inner membrane|im]].' },
        { id: 'rick.ch2.s2.02', text: 'Spinning the c-ring drives [[F1Fo catalytic heads|atps]] to mint Rickettsia\'s own ATP.' },
        { id: 'rick.ch2.s2.03', text: 'This dual strategy steals ATP via [[Tlc1|tlc1]] early and breathes via [[ETC|etc]] and [[F1Fo|atps]] late.' },
      ] },
    ] },
    { id: 'ch3', title: 'Polar Sca2 actin comet & cell-to-cell spread', steps: [
      { id: 'rick-sca2', title: 'Polar Sca2 formin mimic', camera: { view: 'comet', dur: 2.4, orbit: 2 }, blink: 'sca2', ghost: false, flow: true,
        tags: ['sca2', 'g_actin', 'comet', 'om'], cues: [
        { id: 'rick.ch3.s0.01', text: 'At the rear pole of the [[outer membrane|om]] sits the autotransporter [[Sca2|sca2]].' },
        { id: 'rick.ch3.s0.02', text: '[[Sca2|sca2]] mimics eukaryotic formin proteins, grabbing profilin-bound [[host G-actin|g_actin]].' },
        { id: 'rick.ch3.s0.03', text: 'Unlike branched Arp2/3 networks, [[Sca2|sca2]] nucleates long unbranched [[F-actin bundles|comet]].' },
      ] },
      { id: 'rick-comet', title: 'Actin comet tail propulsion', camera: { part: 'comet', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'comet', flow: true,
        ghost: ['sca2', 'g_actin', 'comet'], tags: ['comet', 'g_actin', 'sca2'], cues: [
        { id: 'rick.ch3.s1.01', text: 'Fresh [[G-actin monomers|g_actin]] lock onto barbed ends right against polar [[Sca2|sca2]].' },
        { id: 'rick.ch3.s1.02', text: 'Polymerizing [[actin filaments|comet]] push Rickettsia through the cytosol at ~15 um per minute.' },
        { id: 'rick.ch3.s1.03', text: 'Older filaments depolymerize behind the [[comet tail|comet]], recycling [[G-actin|g_actin]] to the pool.' },
      ] },
      { id: 'rick-spread', title: 'Punching into the neighbor cell', camera: { part: 'host_mem', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'host_mem',
        ghost: ['host_mem', 'comet', 'pld', 'om'], tags: ['host_mem', 'comet', 'pld'], cues: [
        { id: 'rick.ch3.s2.01', text: 'Driven by its [[actin comet|comet]], the bacterium rams the [[host plasma membrane|host_mem]].' },
        { id: 'rick.ch3.s2.02', text: 'It pushes a finger-like protrusion of [[host membrane|host_mem]] deep into the adjacent cell.' },
        { id: 'rick.ch3.s2.03', text: '[[Pld phospholipases|pld]] dissolve both membranes, spreading stealthily past blood antibodies.' },
      ] },
    ] },
    { id: 'ch4', title: 'Living cousin of Mitochondria', steps: [
      { id: 'rick-mito-compare', title: 'Side-by-side with a host mitochondrion', camera: { view: 'mito_link', dur: 2.4, orbit: 2 }, blink: 'host_mito', ghost: false,
        tags: ['host_mito', 'etc', 'atps', 'dna'], cues: [
        { id: 'rick.ch4.s0.01', text: 'Look side by side at Rickettsia and the eukaryotic [[host mitochondrion|host_mito]] beside it.' },
        { id: 'rick.ch4.s0.02', text: 'Both carry double membranes, circular [[dsDNA|dna]], [[70S-type ribosomes|ribosome]] and [[F1Fo synthases|atps]].' },
        { id: 'rick.ch4.s0.03', text: 'Phylogenomics places Rickettsiales near the alphaproteobacterial root of [[mitochondria|host_mito]].' },
      ] },
      { id: 'rick-endosymbiosis', title: 'From ATP thief to cellular power plant', camera: { part: 'host_mito', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'host_mito', flow: true,
        ghost: ['host_mito', 'tlc1', 'atps', 'etc'], tags: ['host_mito', 'tlc1', 'atps'], cues: [
        { id: 'rick.ch4.s1.01', text: 'Notice the opposite direction of ATP flow between [[Tlc1|tlc1]] and [[mitochondrial cristae|host_mito]].' },
        { id: 'rick.ch4.s1.02', text: 'Around two billion years ago, an engulfed alphaproteobacterium evolved into [[mitochondria|host_mito]].' },
        { id: 'rick.ch4.s1.03', text: 'Instead of [[Tlc1|tlc1]] pulling ATP in, [[mitochondria|host_mito]] installed ANT carriers to export ATP out.' },
      ] },
      { id: 'rick-finale', title: 'Bridging cells and viruses', camera: { view: 'cytosol', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['om', 'tlc1', 'atps', 'comet', 'ribosome', 'host_mito'], cues: [
        { id: 'rick.ch4.s2.01', text: 'Across Mycoplasma, Chlamydia and Rickettsia, every parasite kept [[DNA|dna]] and [[70S ribosomes|ribosome]].' },
        { id: 'rick.ch4.s2.02', text: 'Next in Stage 4, viruses strip away membranes, cytoplasm and [[ribosomes|ribosome]] altogether.' },
        { id: 'rick.ch4.s2.03', text: 'Explore any 3D structure now, or advance to Stage 4 to cross into the acellular virosphere.' },
      ] },
    ] },
  ],
  details: {},
};
