import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 11: Gram-Positive Bacteria & Armored Endospores (real-gram-positive), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const gram_positiveTour: TourDefinition = {
  title: 'Gram-Positive Bacterium & Endospore (Bacillus subtilis): a guided tour',
  root: 'real-gram-positive',
  page: 'gram_positive_realistic.html',
  view: 'overview',
  summary: 'Explore Bacillus subtilis vs. E. coli: thick peptidoglycan, teichoic acids, Gram stain retention, exposed PBPs, asymmetric sporulation, concentric endospore armor, Ca-DPA, SASP-bound DNA and atomic cross-links.',
  views: {
    overview: 'real-gram-positive',
    focus: 'real-gram-positive',
    wall_compare: 'real-gp-wall',
    sporulation: 'real-gp-sporulation',
    endospore: 'real-gp-endospore',
    core: 'real-gp-core',
    molecules: 'real-gp-crosslink',
  },
  chapters: [
    { id: 'ch0', title: 'Two Bacterial Blueprints', steps: [
      { id: 'gp-intro', title: 'Bacillus subtilis: a Gram-positive rod', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['pg_wall', 'pm', 'ecoli_strip', 'dna', 'ribosome'], cues: [
        { id: 'gp.ch0.s0.01', text: 'Meet Bacillus subtilis, a 3.5 um Gram-positive rod built on a single-membrane blueprint.' },
        { id: 'gp.ch0.s0.02', text: 'Inside its cutaway cytoplasm sit a 4.22 Mbp [[DNA nucleoid|dna]], [[70S ribosomes|ribosome]] and no nucleus.' },
        { id: 'gp.ch0.s0.03', text: 'Its thick [[peptidoglycan wall|pg_wall]] and single [[plasma membrane|pm]] differ sharply from [[E. coli|ecoli_strip]].' },
      ] },
      { id: 'gp-monoderm', title: 'Monoderm vs. diderm envelope comparison', camera: { part: 'ecoli_strip', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'ecoli_strip',
        ghost: ['pg_wall', 'pm', 'ecoli_strip'], tags: ['pg_wall', 'pm', 'ecoli_strip'], cues: [
        { id: 'gp.ch0.s1.01', text: 'Beside the cut edge stands a true-scale Gram-negative [[E. coli envelope strip|ecoli_strip]].' },
        { id: 'gp.ch0.s1.02', text: 'Gram-negative [[E. coli|ecoli_strip]] is diderm: two lipid membranes enclosing a thin 3 nm wall.' },
        { id: 'gp.ch0.s1.03', text: 'Gram-positive bacteria are monoderm: one [[plasma membrane|pm]] beneath a 20 to 80 nm [[wall|pg_wall]].' },
      ] },
      { id: 'gp-turgor', title: 'High turgor pressure & surface polymers', camera: { part: 'pm', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'pm',
        ghost: ['pm', 'pg_wall', 'teichoic'], tags: ['pm', 'pg_wall', 'teichoic'], cues: [
        { id: 'gp.ch0.s2.01', text: 'Without an outer LPS membrane, the single [[plasma membrane|pm]] endures about 20 atm turgor.' },
        { id: 'gp.ch0.s2.02', text: 'Fifteen to forty cross-linked layers of [[peptidoglycan|pg_wall]] contain that osmotic pressure.' },
        { id: 'gp.ch0.s2.03', text: 'Anionic [[teichoic acids|teichoic]] thread through the wall, binding magnesium and calcium ions.' },
      ] },
    ] },
    { id: 'ch1', title: 'Thick Peptidoglycan, Teichoic Acids & Gram Stain', steps: [
      { id: 'gp-wall-teichoic', title: 'Multilayered peptidoglycan & teichoic acids', camera: { view: 'wall_compare', dur: 2.4, orbit: 2 }, blink: 'pg_wall', ghost: false,
        tags: ['pg_wall', 'teichoic', 'pm', 'ecoli_strip'], cues: [
        { id: 'gp.ch1.s0.01', text: 'Zoom to the wall section where [[peptidoglycan strata|pg_wall]] measure ten times thicker than [[E. coli|ecoli_strip]].' },
        { id: 'gp.ch1.s0.02', text: 'Wall [[teichoic acids|teichoic]] bind NAM sugars, while lipoteichoic chains anchor in the [[plasma membrane|pm]].' },
        { id: 'gp.ch1.s0.03', text: 'These negatively charged [[teichoic chains|teichoic]] guide division enzymes and stabilize surface cations.' },
      ] },
      { id: 'gp-gram-stain', title: 'Physical basis of the Gram stain', camera: { part: 'pg_wall', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'pg_wall', flow: true,
        ghost: ['pg_wall', 'ecoli_strip', 'pm'], tags: ['pg_wall', 'ecoli_strip'], cues: [
        { id: 'gp.ch1.s1.01', text: 'In the Gram stain, crystal violet and iodine enter both cells and form large CV-I dye complexes.' },
        { id: 'gp.ch1.s1.02', text: 'Ethanol dehydrates the [[thick peptidoglycan|pg_wall]] trapping CV-I dye, while [[E. coli|ecoli_strip]] flushes clear.' },
        { id: 'gp.ch1.s1.03', text: 'Safranin counterstain colors [[E. coli|ecoli_strip]] pink, while [[Gram-positive walls|pg_wall]] remain deep purple.' },
      ] },
      { id: 'gp-pbp-sortase', title: 'Exposed PBPs, beta-lactams & Sortase A', camera: { part: 'pbp', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'pbp', flow: true,
        ghost: ['pbp', 'sortase', 'pg_wall', 'pm'], tags: ['pbp', 'sortase', 'pg_wall'], cues: [
        { id: 'gp.ch1.s2.01', text: 'With no outer LPS barrier, penicillin diffuses through [[peptidoglycan|pg_wall]] directly to exposed [[PBPs|pbp]].' },
        { id: 'gp.ch1.s2.02', text: 'Beta-lactams mimic D-Ala-D-Ala and block [[PBP transpeptidases|pbp]], halting new wall cross-links.' },
        { id: 'gp.ch1.s2.03', text: 'Beside them, [[Sortase A|sortase]] cleaves LPXTG motifs to link surface proteins onto [[peptidoglycan|pg_wall]].' },
      ] },
    ] },
    { id: 'ch2', title: 'Starvation Switch & Asymmetric Sporulation', steps: [
      { id: 'gp-septum', title: 'Starvation switch & polar FtsZ septum', camera: { view: 'sporulation', dur: 2.4, orbit: 2 }, blink: 'septum', ghost: false,
        tags: ['septum', 'spoiiie', 'forespore', 'dna'], cues: [
        { id: 'gp.ch2.s0.01', text: 'When nutrients run dry, Spo0A switches Bacillus subtilis from normal division to sporulation.' },
        { id: 'gp.ch2.s0.02', text: 'An asymmetric [[FtsZ septum|septum]] forms near one pole, isolating a small [[forespore|forespore]] compartment.' },
        { id: 'gp.ch2.s0.03', text: 'Sporulation is not reproduction: one vegetative cell converts into one dormant survival spore.' },
      ] },
      { id: 'gp-spoiiie', title: 'SpoIIIE ATPase DNA translocation', camera: { part: 'spoiiie', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'spoiiie', flow: true,
        ghost: ['spoiiie', 'septum', 'dna', 'forespore'], tags: ['spoiiie', 'dna', 'septum', 'forespore'], cues: [
        { id: 'gp.ch2.s1.01', text: 'As the polar [[septum|septum]] closes, only thirty percent of the copied [[chromosome|dna]] sits inside.' },
        { id: 'gp.ch2.s1.02', text: 'A hexameric [[SpoIIIE translocase|spoiiie]] uses ATP to pump the remaining [[DNA|dna]] into the [[forespore|forespore]].' },
        { id: 'gp.ch2.s1.03', text: 'Separate sigma factors then activate distinct mother-cell and [[forespore|forespore]] genetic programs.' },
      ] },
      { id: 'gp-engulfment', title: 'Forespore engulfment & mother lysis', camera: { part: 'forespore', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'forespore', flow: true,
        ghost: ['forespore', 'ribosome', 'dna', 'pm'], tags: ['forespore', 'ribosome', 'dna'], cues: [
        { id: 'gp.ch2.s2.01', text: 'Mother-cell membranes migrate around the [[forespore|forespore]], enclosing it inside two lipid bilayers.' },
        { id: 'gp.ch2.s2.02', text: 'SpoIIIAH-SpoIIQ channels feed the [[forespore|forespore]] while [[70S ribosomes|ribosome]] synthesize protective proteins.' },
        { id: 'gp.ch2.s2.03', text: 'Once cortex and coat assembly finish around the [[forespore|forespore]], the mother cell lyses to release it.' },
      ] },
    ] },
    { id: 'ch3', title: 'Armored Dormant Endospore & Dehydrated Core', steps: [
      { id: 'gp-exosporium-coat', title: 'Exosporium veil & cross-linked spore coat', camera: { view: 'endospore', dur: 2.4, orbit: 2 }, blink: 'coat', ghost: false,
        tags: ['exosporium', 'coat', 'cortex', 'germ_wall', 'spore_im'], cues: [
        { id: 'gp.ch3.s0.01', text: 'Inspect the liberated 1.0 um dormant endospore, built from concentric layers around a dry center.' },
        { id: 'gp.ch3.s0.02', text: 'An outer glycoprotein [[exosporium|exosporium]] drapes over a 50 to 100 nm cross-linked [[spore coat|coat]].' },
        { id: 'gp.ch3.s0.03', text: 'Over seventy proteins including CotA pack this [[spore coat|coat]] to block lysozyme and disinfectants.' },
      ] },
      { id: 'gp-cortex-germ', title: 'Peptidoglycan cortex, germ wall & inner membrane', camera: { part: 'cortex', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'cortex',
        ghost: ['cortex', 'germ_wall', 'spore_im', 'coat'], tags: ['cortex', 'germ_wall', 'spore_im'], cues: [
        { id: 'gp.ch3.s1.01', text: 'Beneath the [[coat|coat]] sits a thick peptidoglycan [[cortex|cortex]] modified with muramic-delta-lactam.' },
        { id: 'gp.ch3.s1.02', text: 'Loosely cross-linked [[cortex|cortex]] layers keep the core dry above the thin [[germ cell wall|germ_wall]].' },
        { id: 'gp.ch3.s1.03', text: 'Inside lies a compressed [[inner spore membrane|spore_im]] holding GerA receptors and SleB lytic enzymes.' },
      ] },
      { id: 'gp-core-cadpa', title: 'Dehydrated core: Ca-DPA & SASP-locked DNA', camera: { view: 'core', dur: 2.4, orbit: 2 }, blink: 'core', flow: true, ghost: false,
        tags: ['core', 'ca_dpa', 'sasp_dna', 'spore_im'], cues: [
        { id: 'gp.ch3.s2.01', text: 'Enter the dehydrated [[spore core|core]], where water content drops from eighty to about thirty percent.' },
        { id: 'gp.ch3.s2.02', text: 'Chelated [[Ca-DPA|ca_dpa]] and [[SASP-bound DNA|sasp_dna]] vitrify the [[core|core]] against boiling heat and UV damage.' },
        { id: 'gp.ch3.s2.03', text: 'Alpha/beta [[SASPs|sasp_dna]] lock DNA in A-form until nutrients trigger [[inner membrane|spore_im]] GerA sensors.' },
      ] },
    ] },
    { id: 'ch4', title: 'Cross-Links, Atoms (C, H, N, O, P, Ca) & Survival Recap', steps: [
      { id: 'gp-crosslink', title: 'NAG-NAM glycan & peptide cross-links', camera: { view: 'molecules', dur: 2.4, orbit: 2 }, blink: 'crosslink', ghost: false,
        tags: ['crosslink', 'pg_wall', 'pbp', 'teichoic'], cues: [
        { id: 'gp.ch4.s0.01', text: 'Zoom to the molecular [[cross-link inset|crosslink]] showing alternating NAG and NAM sugar chains.' },
        { id: 'gp.ch4.s0.02', text: '[[PBP transpeptidases|pbp]] bridge stem peptides at D-Ala-D-Ala, forging a covalent [[wall cross-link|crosslink]].' },
        { id: 'gp.ch4.s0.03', text: 'Phosphodiester [[teichoic chains|teichoic]] attach to NAM C6, reinforcing the [[peptidoglycan wall|pg_wall]].' },
      ] },
      { id: 'gp-atoms', title: 'Constituent atoms: C, H, N, O, P and Ca', camera: { part: 'ca_dpa', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'ca_dpa',
        ghost: ['ca_dpa', 'crosslink', 'sasp_dna', 'teichoic'], tags: ['ca_dpa', 'crosslink', 'sasp_dna', 'teichoic'], cues: [
        { id: 'gp.ch4.s1.01', text: 'At 0.1 nm atomic scale, C, H, N and O atoms build every glycan ring, [[cross-link|crosslink]] and DPA ring.' },
        { id: 'gp.ch4.s1.02', text: 'Phosphorus atoms anchor [[teichoic acids|teichoic]] and [[A-form DNA|sasp_dna]] backbones across both states.' },
        { id: 'gp.ch4.s1.03', text: 'Each divalent calcium ion chelates pyridine-2,6-dicarboxylate into a 1:1 [[Ca-DPA complex|ca_dpa]].' },
      ] },
      { id: 'gp-finale', title: 'Gram-positive armor & survival recap', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['pg_wall', 'pm', 'ecoli_strip', 'forespore', 'coat', 'cortex', 'ca_dpa', 'sasp_dna'], cues: [
        { id: 'gp.ch4.s2.01', text: 'One [[plasma membrane|pm]] and thick [[peptidoglycan|pg_wall]] explain Gram-positive staining and drug access.' },
        { id: 'gp.ch4.s2.02', text: 'Under starvation, [[sporulation|forespore]] builds a [[coat|coat]], [[cortex|cortex]] and vitrified [[Ca-DPA core|ca_dpa]].' },
        { id: 'gp.ch4.s2.03', text: 'Explore any molecular tag now, or continue forward to inspect complex eukaryotic cells.' },
      ] },
    ] },
  ],
  details: {},
};
