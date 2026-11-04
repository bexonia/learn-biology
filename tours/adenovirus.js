// The guided tour of the realistic Human Adenovirus, played by cell_explorer.html (see docs/tutorial_mode_spec.md).
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
window.TOURS = window.TOURS || {};
window.TOURS.adenovirus = {
  title: 'Human Adenovirus: a guided tour',
  root: 'real-adenovirus',
  page: 'adenovirus_realistic.html',
  view: 'virion',
  summary: 'From the 240 Hexon trimers and 12 Fiber-crowned Penton vertices to the 36 kbp adenosome DNA core and CAR/integrin cell entry. About six minutes.',
  views: { virion: 'real-adenovirus', focus: 'real-adenovirus', vertex: 'real-adv-vertex', core: 'real-adv-core', entry: 'real-adv-entry' },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'A crystal-like icosahedron', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'adv.ch0.intro.01', text: 'This is Human Adenovirus, a non-enveloped double-stranded DNA virus.' },
        { id: 'adv.ch0.intro.02', text: 'Its 20-faced icosahedral shell is 90 nanometres across, plus 30 nm fibers.', say: 'Its twenty-faced icosahedral shell is ninety nanometres across, plus thirty-nanometre fibers.' },
        { id: 'adv.ch0.intro.03', text: 'Having no lipid membrane, it relies on a precision protein armour.' },
        { id: 'adv.ch0.intro.04', text: 'We have cut open one corner to show the genome and cement proteins.' },
        { id: 'adv.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'The icosahedral capsid', steps: [
      { id: 'hexon', title: 'Hexon major coat (II)', camera: { part: 'hexon', dist: 1.25 }, blink: 'hexon', ghost: ['hexon', 'cement'], tags: ['virion:hexon'], detail: 'adv-hexon-real', cues: [
        { id: 'adv.ch1.hex.01', text: 'Each of the 20 triangular facets is tiled by 12 [[Hexon trimers|hexon]].' },
        { id: 'adv.ch1.hex.02', text: 'Though built of three subunits, each Hexon has a six-sided base.' },
        { id: 'adv.ch1.hex.03', text: 'All 240 Hexon trimers lock into a pseudo-T=25 crystalline shell.' },
      ] },
      { id: 'cement', title: 'Minor cement proteins', camera: { part: 'cement', dist: 1.25 }, blink: 'cement', ghost: ['cement', 'hexon'], tags: ['virion:cement'], detail: 'protein', cues: [
        { id: 'adv.ch1.cem.01', text: 'Four [[cement proteins (IIIa, VI, VIII, IX)|cement]] staple the facets.' },
        { id: 'adv.ch1.cem.02', text: 'Inside, protein VI waits to rupture the host endosome membrane.' },
      ] },
      { id: 'penton', title: 'Penton base vertices (III)', camera: { view: 'vertex' }, blink: 'penton', ghost: false, tags: ['vertex:penton', 'vertex:hexon', 'vertex:cement'], detail: 'adv-penton-real', cues: [
        { id: 'adv.ch1.pent.01', text: 'At each of the 12 corners sits a five-fold [[Penton base|penton]].' },
        { id: 'adv.ch1.pent.02', text: 'Flexible RGD loops on its turret grab host αv integrins during entry.' },
      ] },
      { id: 'fiber', title: 'Projecting fiber & knob (IV)', camera: { view: 'vertex' }, blink: 'fiber', ghost: false, tags: ['vertex:fiber', 'vertex:penton'], detail: 'adv-fiber-real', cues: [
        { id: 'adv.ch1.fib.01', text: 'Jutting 30 nanometres from each Penton is a trimeric [[Fiber antenna|fiber]].' },
        { id: 'adv.ch1.fib.02', text: 'Its triple β-spiral shaft ends in a knob that searches for host receptors.' },
      ] },
    ] },
    { id: 'ch2', title: 'The adenosome DNA core', steps: [
      { id: 'dna', title: '36 kbp linear dsDNA', camera: { view: 'core' }, blink: 'dna', ghost: false, tags: ['core:dna', 'core:hexon'], detail: 'dna', cues: [
        { id: 'adv.ch2.dna.01', text: 'Inside coils 36 kilobase pairs of [[linear double-stranded DNA|dna]].' },
        { id: 'adv.ch2.dna.02', text: 'Engineered adenoviruses use this roomy capsid as a vaccine vector.' },
      ] },
      { id: 'core', title: 'Core protein VII & TP', camera: { view: 'core' }, blink: 'core', ghost: false, tags: ['core:core', 'core:cement'], detail: 'real-adv-core', cues: [
        { id: 'adv.ch2.core.01', text: 'About 800 copies of [[core protein VII|core]] wrap the DNA like histones.' },
        { id: 'adv.ch2.core.02', text: 'They condense the genome into 200 chromatin-like adenosome beads.' },
        { id: 'adv.ch2.core.03', text: 'Terminal Protein caps both 5′ DNA ends to prime replication.' },
      ] },
    ] },
    { id: 'ch3', title: 'Two-step cell entry', steps: [
      { id: 'entry', title: 'CAR & αvβ5 integrin docking', camera: { view: 'entry' }, blink: 'car', ghost: false, tags: ['entry:fiber', 'entry:penton', 'entry:car', 'entry:host'], detail: 'real-adv-entry',
        links: [['entry:fiber', 'entry:car', '1. CAR attachment', 'fiber'], ['entry:penton', 'entry:host', '2. Integrin & protein VI lysis', 'penton']], cues: [
        { id: 'adv.ch3.ent.01', text: 'First, the distal [[Fiber knob|fiber]] docks onto host [[CAR receptors|car]].' },
        { id: 'adv.ch3.ent.02', text: 'Next, the [[Penton base|penton]] bends down to engage αvβ5 integrins.' },
        { id: 'adv.ch3.ent.03', text: 'The vertex pops off, releasing [[protein VI|cement]] to lyse the [[membrane|host]].' },
      ] },
    ] },
    { id: 'ch4', title: 'Entry & uncoating in motion', steps: [
      { id: 'flows', title: 'Stepwise uncoating', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, cues: [
        { id: 'adv.ch4.flows.01', text: 'Watch how mechanical cues dismantle the capsid step by step.' },
      ] },
      { id: 'carsig', title: 'CAR & integrin signals', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'carsig', cues: [
        { id: 'adv.ch4.car.01', text: '[[CAR receptors|car]] tether the [[Fiber knob|fiber]] at the cell surface.', blink: 'fiber' },
        { id: 'adv.ch4.car.02', text: 'Integrin pull loosens the [[Penton vertex|penton]].', blink: 'penton' },
      ] },
      { id: 'pvi', title: 'Protein VI & DNA delivery', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'pvi', cues: [
        { id: 'adv.ch4.pvi.01', text: 'Released [[cement protein VI|cement]] perforates the host membrane.', blink: 'cement' },
        { id: 'adv.ch4.pvi.02', text: 'The [[36 kbp dsDNA|dna]] travels to the nuclear pore for transcription.', blink: 'dna' },
      ] },
    ] },
    { id: 'ch5', title: 'Recap', steps: [
      { id: 'rollcall', title: 'Every part', camera: { view: 'virion', orbit: 6 }, ghost: false, cues: [
        { id: 'adv.ch5.roll.01', text: '240 Hexon (II) major coat trimers', blink: 'hexon', dur: 1.6 },
        { id: 'adv.ch5.roll.02', text: '12 Penton base (III) pentamers', blink: 'penton', dur: 1.6 },
        { id: 'adv.ch5.roll.03', text: '12 projecting Fiber (IV) trimers', blink: 'fiber', dur: 1.6 },
        { id: 'adv.ch5.roll.04', text: 'Minor cement proteins (IIIa, VI, VIII, IX)', blink: 'cement', dur: 1.6 },
        { id: 'adv.ch5.roll.05', text: '36 kbp linear dsDNA genome', blink: 'dna', dur: 1.6 },
        { id: 'adv.ch5.roll.06', text: 'Core protein VII adenosomes & TP', blink: 'core', dur: 1.6 },
        { id: 'adv.ch5.roll.07', text: 'Host CAR & αvβ5 integrin receptors', blink: 'car', dur: 1.6 },
        { id: 'adv.ch5.roll.08', text: 'Host epithelial plasma membrane', blink: 'host', dur: 1.6 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'adv.ch5.exp.01', text: 'Now explore Human Adenovirus on your own.' },
        { id: 'adv.ch5.exp.02', text: 'Click any tag to inspect its crystal structures down to single atoms.' },
      ] },
    ] },
  ],
  details: {
    'real-adv-vertex': { cues: [
      { id: 'adv.det.rver.01', text: 'Five Penton base subunits seal each of the 12 icosahedral vertices.', blink: 'penton' },
      { id: 'adv.det.rver.02', text: 'A trimeric Fiber shaft and CAR-binding knob project 30 nm outward.', blink: 'fiber' },
    ] },
    'real-adv-core': { cues: [
      { id: 'adv.det.rcor.01', text: '36 kbp of linear dsDNA wraps around 800 copies of core protein VII.', blink: 'dna' },
      { id: 'adv.det.rcor.02', text: 'Protein V bridges the core to the Hexon wall; TP caps both 5′ ends.', blink: 'core' },
    ] },
    'real-adv-entry': { cues: [
      { id: 'adv.det.rent.01', text: 'The Fiber knob binds CAR first; Penton RGD loops then bind αv integrins.', blink: 'car' },
      { id: 'adv.det.rent.02', text: 'Vertex shedding releases lytic protein VI to breach the endosome.', blink: 'penton' },
    ] },
    'adenovirus': { cues: [
      { id: 'adv.det.sch.01', text: 'Isolated cutaway of Human Adenovirus: 20 facets of 240 Hexon trimers.' },
      { id: 'adv.det.sch.02', text: 'Twelve Penton vertices carry long Fiber shafts; dsDNA coils inside.' },
    ] },
    'adv-hexon-real': { cues: [
      { id: 'adv.det.hex.01', text: 'Crystal structure of the Ad5 Hexon major coat homotrimer (PDB 1P30).' },
      { id: 'adv.det.hex.02', text: 'Double-jelly-roll bases form a pseudo-hexagon topped by three towers.' },
    ] },
    'adv-penton-real': { cues: [
      { id: 'adv.det.pent.01', text: 'Crystal structure of the Penton base homopentamer + Fiber tail (PDB 1X9T).' },
      { id: 'adv.det.pent.02', text: 'Five subunits close the vertex and display integrin-binding RGD loops.' },
    ] },
    'adv-fiber-real': { cues: [
      { id: 'adv.det.fib.01', text: 'Crystal structure of the distal Fiber shaft and Knob trimer (PDB 1QIU).' },
      { id: 'adv.det.fib.02', text: 'A triple β-spiral shaft supports the C-terminal CAR-binding head.' },
    ] },
  },
};
