import type { TourDefinition } from "./tourService.js";

// Guided tour of Stage 3.2: Chlamydia trachomatis (real-chlamydia), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const chlamydiaTour: TourDefinition = {
  title: 'Chlamydia trachomatis: a guided tour',
  root: 'real-chlamydia',
  page: 'chlamydia_realistic.html',
  view: 'inclusion',
  summary: 'Inside a shielded epithelial inclusion vacuole: compare the armored Elementary Body, T3SS needle, dividing Reticulate Body and Npt1 ATP theft.',
  views: {
    inclusion: 'real-chlamydia',
    focus: 'real-chlamydia',
    eb: 'real-chlam-eb',
    rb: 'real-chlam-rb',
    npt1: 'real-chlam-npt1',
  },
  chapters: [
    { id: 'ch0', title: 'Inside the inclusion vacuole shield', steps: [
      { id: 'chla-intro', title: 'An obligate intracellular bacterium', camera: { view: 'inclusion', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['inclusion', 'eb_om', 'rb_om', 'npt1'], cues: [
        { id: 'chla.ch0.s0.01', text: 'Meet Chlamydia trachomatis, an obligate intracellular bacterium inside a human cell.' },
        { id: 'chla.ch0.s0.02', text: 'Rather than floating free in [[host cytosol|host_cyto]], it builds a membrane-bound [[inclusion|inclusion]].' },
        { id: 'chla.ch0.s0.03', text: 'Inside this private sac, Chlamydia alternates between two specialized cellular forms.' },
      ] },
      { id: 'chla-inc', title: 'Inc proteins & lysosome evasion', camera: { part: 'inc', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'inc',
        ghost: ['inclusion', 'inc', 'host_cyto'], tags: ['inclusion', 'inc'], cues: [
        { id: 'chla.ch0.s1.01', text: 'Normally a swallowed microbe is destroyed when acidic host lysosomes fuse with its sac.' },
        { id: 'chla.ch0.s1.02', text: 'Chlamydia studs the [[inclusion membrane|inclusion]] with bacterial [[Inc effector proteins|inc]].' },
        { id: 'chla.ch0.s1.03', text: 'Hairpin [[Inc proteins|inc]] disguise the vacuole and block lysosomal fusion completely.' },
      ] },
      { id: 'chla-golgi', title: 'Intercepting Golgi lipid vesicles', camera: { part: 'golgi_lip', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'golgi_lip', flow: true,
        ghost: ['golgi_lip', 'inclusion', 'inc'], tags: ['golgi_lip', 'inclusion'], cues: [
        { id: 'chla.ch0.s2.01', text: 'As bacteria multiply, the [[inclusion sac|inclusion]] must expand tenfold without bursting.' },
        { id: 'chla.ch0.s2.02', text: '[[Inc adaptors|inc]] reroute [[Golgi sphingolipid vesicles|golgi_lip]] from the [[host cytosol|host_cyto]].' },
        { id: 'chla.ch0.s2.03', text: 'Fusing [[Golgi lipids|golgi_lip]] feeds both the [[inclusion wall|inclusion]] and bacterial membranes.' },
      ] },
    ] },
    { id: 'ch1', title: 'The armored Elementary Body & T3SS strike', steps: [
      { id: 'chla-eb', title: 'Disulfide-armored Elementary Body (EB)', camera: { view: 'eb', dur: 2.4, orbit: 2 }, blink: 'eb_om', ghost: false,
        tags: ['eb_om', 'momp', 'eb_dna', 't3ss'], cues: [
        { id: 'chla.ch1.s0.01', text: 'Infection begins with the 300 nm [[Elementary Body|eb_om]], Chlamydia\'s extracellular form.' },
        { id: 'chla.ch1.s0.02', text: 'Chlamydia splits life in two: a tough [[Elementary Body|eb_om]] for transit and a [[Reticulate Body|rb_om]] to grow.' },
        { id: 'chla.ch1.s0.03', text: 'Disulfide bonds cross-link [[MOMP porins|momp]] and OmcB into a rigid spore-like shell.' },
      ] },
      { id: 'chla-eb-dna', title: 'Hc1-condensed nucleoid & MOMP trimers', camera: { part: 'eb_dna', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'eb_dna',
        ghost: ['eb_om', 'momp', 'eb_dna'], tags: ['eb_dna', 'momp'], cues: [
        { id: 'chla.ch1.s1.01', text: 'Inside the [[EB shell|eb_om]], histone-like Hc1 clamps the [[1.04 Mbp DNA|eb_dna]] into a tight core.' },
        { id: 'chla.ch1.s1.02', text: 'Locked in that crystal-dense state, [[EB chromatin|eb_dna]] pauses transcription outside hosts.' },
        { id: 'chla.ch1.s1.03', text: 'Trimeric [[MOMP beta-barrels|momp]] stay disulfide-sealed until entry reduces their bonds.' },
      ] },
      { id: 'chla-t3ss', title: 'Type III Secretion needle & TarP', camera: { part: 't3ss', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 't3ss', flow: true,
        ghost: ['t3ss', 'tarP', 'eb_om', 'inclusion'], tags: ['t3ss', 'tarP'], cues: [
        { id: 'chla.ch1.s2.01', text: 'One pole of the [[Elementary Body|eb_om]] bristles with [[Type III Secretion needles|t3ss]].' },
        { id: 'chla.ch1.s2.02', text: 'On contact, hollow [[T3SS syringes|t3ss]] fire [[TarP effectors|tarP]] into [[host cytosol|host_cyto]].' },
        { id: 'chla.ch1.s2.03', text: 'Injected [[TarP|tarP]] bundles host actin to pull the bacterium into its new [[inclusion|inclusion]].' },
      ] },
    ] },
    { id: 'ch2', title: 'Differentiating into the Reticulate Body', steps: [
      { id: 'chla-rb', title: 'Swelling into the Reticulate Body (RB)', camera: { view: 'rb', dur: 2.4, orbit: 2 }, blink: 'rb_om', ghost: false,
        tags: ['rb_om', 'rb_im', 'rb_dna', 'ribosome'], cues: [
        { id: 'chla.ch2.s0.01', text: 'Within hours inside the [[inclusion|inclusion]], disulfide cross-links break and the cell swells.' },
        { id: 'chla.ch2.s0.02', text: 'It becomes a 1,000 nm [[Reticulate Body|rb_om]] bounded by outer and [[inner membranes|rb_im]].' },
        { id: 'chla.ch2.s0.03', text: 'Hc1 releases the [[relaxed chromosome|rb_dna]] so genes switch on at full speed.' },
      ] },
      { id: 'chla-septum', title: 'The Chlamydial anomaly: septal ring', camera: { part: 'septum', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'septum',
        ghost: ['rb_om', 'rb_im', 'septum', 'mreb'], tags: ['septum', 'mreb'], cues: [
        { id: 'chla.ch2.s1.01', text: 'Instead of a full peptidoglycan wall, Chlamydia builds only a transient [[septal ring|septum]].' },
        { id: 'chla.ch2.s1.02', text: 'This narrow [[peptidoglycan belt|septum]] forms solely at the division plane between membranes.' },
        { id: 'chla.ch2.s1.03', text: 'Once two daughter [[Reticulate Bodies|rb_om]] pinch apart, enzymes dismantle the [[ring|septum]].' },
      ] },
      { id: 'chla-mreb', title: 'MreB-guided binary fission', camera: { part: 'mreb', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'mreb',
        ghost: ['mreb', 'septum', 'rb_im'], tags: ['mreb', 'septum', 'rb_im'], cues: [
        { id: 'chla.ch2.s2.01', text: 'Lacking FtsZ, Chlamydia steers division with [[MreB filaments|mreb]] under the [[inner membrane|rb_im]].' },
        { id: 'chla.ch2.s2.02', text: 'Polymerizing [[MreB arcs|mreb]] position the [[septal synthesis complex|septum]] around the waist.' },
        { id: 'chla.ch2.s2.03', text: 'Every two to three hours, [[MreB-driven fission|mreb]] doubles the [[RB population|rb_om]].' },
      ] },
    ] },
    { id: 'ch3', title: 'Energy parasitism: Npt1 & Npt2 antiporters', steps: [
      { id: 'chla-npt1', title: 'Npt1 ATP/ADP translocase swap', camera: { view: 'npt1', dur: 2.4, orbit: 2 }, blink: 'npt1', ghost: false, flow: true,
        tags: ['npt1', 'npt2', 'rb_im', 'inclusion'], cues: [
        { id: 'chla.ch3.s0.01', text: 'Why was Chlamydia long mistaken for an energy-less virus? Look at [[Npt1|npt1]] in its membrane.' },
        { id: 'chla.ch3.s0.02', text: '[[Npt1 antiporters|npt1]] import one host ATP molecule in strict exchange for one spent bacterial ADP.' },
        { id: 'chla.ch3.s0.03', text: 'Porous [[inclusion pores|inclusion]] let host ATP diffuse in so [[Npt1|npt1]] can tap it.' },
      ] },
      { id: 'chla-npt2', title: 'Npt2 ribonucleotide symporter', camera: { part: 'npt2', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'npt2', flow: true,
        ghost: ['npt2', 'npt1', 'rb_im'], tags: ['npt2', 'npt1'], cues: [
        { id: 'chla.ch3.s1.01', text: 'Beside [[Npt1|npt1]] sits a second transporter, [[Npt2|npt2]], in the [[RB inner membrane|rb_im]].' },
        { id: 'chla.ch3.s1.02', text: 'Coupled to protons, [[Npt2|npt2]] imports host GTP, CTP and UTP intact for RNA synthesis.' },
        { id: 'chla.ch3.s1.03', text: 'Together [[Npt1|npt1]] and [[Npt2|npt2]] spare Chlamydia from making purines or pyrimidines.' },
      ] },
      { id: 'chla-glycogen', title: 'Inclusion glycogen & backup glycolysis', camera: { part: 'glycogen', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'glycogen',
        ghost: ['glycogen', 'inclusion', 'rb_om'], tags: ['glycogen', 'inclusion'], cues: [
        { id: 'chla.ch3.s2.01', text: 'Floating in the [[inclusion lumen|inclusion]] are branched [[glycogen granules|glycogen]] stained by iodine.' },
        { id: 'chla.ch3.s2.02', text: 'Chlamydia still keeps glycolytic enzymes and converts imported glucose-6-P into [[glycogen|glycogen]].' },
        { id: 'chla.ch3.s2.03', text: 'Late in the cycle, stored [[glycogen|glycogen]] fuels re-condensation when host ATP drops.' },
      ] },
    ] },
    { id: 'ch4', title: 'True cellular machinery & re-condensation', steps: [
      { id: 'chla-transcription', title: '1.04 Mbp dsDNA & RNA polymerase', camera: { part: 'rnap', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'rnap',
        ghost: ['rb_dna', 'rnap', 'mrna'], tags: ['rb_dna', 'rnap', 'mrna'], cues: [
        { id: 'chla.ch4.s0.01', text: 'Inside the [[Reticulate Body|rb_om]], ~895 genes sit on a circular [[1.04 Mbp dsDNA genome|rb_dna]].' },
        { id: 'chla.ch4.s0.02', text: 'Bacterial [[RNA polymerase|rnap]] reads early, mid and late gene cascades into [[mRNA|mrna]].' },
        { id: 'chla.ch4.s0.03', text: 'Late genes switch on Hc1 and OmcB to convert dividing [[RBs|rb_om]] back into [[EBs|eb_om]].' },
      ] },
      { id: 'chla-ribosome', title: '70S ribosomes: proof of a true cell', camera: { part: 'ribosome', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ribosome', flow: true,
        ghost: ['ribosome', 'mrna', 'rb_dna'], tags: ['ribosome', 'mrna'], cues: [
        { id: 'chla.ch4.s1.01', text: 'Hundreds of bacterial [[70S ribosomes|ribosome]] translate [[chlamydial mRNA|mrna]] into proteins.' },
        { id: 'chla.ch4.s1.02', text: 'Stolen host ATP powers Chlamydia\'s own [[70S ribosomes|ribosome]] rather than host 80S ones.' },
        { id: 'chla.ch4.s1.03', text: 'Azithromycin and doxycycline cure Chlamydia by halting these [[70S ribosomes|ribosome]].' },
      ] },
      { id: 'chla-finale', title: 'Re-condensation & inclusion exit', camera: { view: 'inclusion', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['inclusion', 'eb_om', 'rb_om', 'npt1', 't3ss', 'ribosome'], cues: [
        { id: 'chla.ch4.s2.01', text: 'After ~48 hours, hundreds of [[Reticulate Bodies|rb_om]] condense back into armored [[EBs|eb_om]].' },
        { id: 'chla.ch4.s2.02', text: 'The mature [[inclusion|inclusion]] extrudes or lyses to release infectious [[EBs|eb_om]] to neighbors.' },
        { id: 'chla.ch4.s2.03', text: 'Explore any tag up close, or continue to Rickettsia to meet Mitochondria\'s living cousin.' },
      ] },
    ] },
  ],
  details: {},
};
