import type { TourDefinition } from "./tourService.js";

// The guided tour of the realistic animal cell, played by cell_explorer.html (see docs/tutorial_mode_spec.md and docs/cell_explorer_manual.md §12).
// A plain script rather than JSON, so that it also loads when the page is opened from a file. Writers edit only this file.
//
// chapters → steps → cues. Each step:
//   title     what the tour bar and the chapter menu call it
//   camera    { view: 'cell' | 'nucleus' | 'nucleolus' | 'DNA' } (the page's preset views), or { part, dist } (the page frames the part),
//             or { pos, target } (cell space); dur (seconds at 1×) and orbit (degrees a second) are optional
//   look, cut, flow, motion    the page's switches, set outright for the step (defaults: 'gel', true, false, true)
//   blink     the part (a key of the animal page's PARTS) that blinks three times and then glows
//   ghost     the parts kept while everything else fades (default: just the blinked part); false fades nothing
//   tags      tags to show: 'view:point', where the view is cell, nucleus, nucleolus or DNA (the explorer's realistic levels), or
//             focus (the centre of the part the camera frames). Their text and their child come from the explorer's node for that view
//   links     arrows: [from, to, label, colour part], with points written like tags; arrow k appears with cue k
//   follow    a molecule symbol (the page's MOL) to follow: only its symbols stay bright
//   detail    the explorer node opened by "More detail", by the step's tag or by its blinked keyword
//   cues      { id, text, say?, dur?, blink? }. The id is permanent: recorded narration is filed under it. [[label|part]] colours a
//             part's name and links it; [[label]] uses the step's blinked part. say is a version written for speaking.
//             A cue's own blink lights that part while the cue shows.
// Each cue must fit two lines of 42 characters (the explorer checks and warns in the console).
export const eukaryotic_cellTour: TourDefinition = {
  title: 'The animal cell: a guided tour',
  root: 'real-cell',
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'An animal cell', camera: { view: 'cell', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'ch0.intro.01', text: 'This is an animal cell, like the ones that make up your body.' },
        { id: 'ch0.intro.02', text: 'Real ones are about 10 to 30 micrometres across: about fifty fit in a millimetre.', say: 'Real ones are about ten to thirty micrometres across: about fifty would fit in a millimetre.' },
        { id: 'ch0.intro.03', text: 'We have cut a wedge out of it, so you can see inside.' },
        { id: 'ch0.intro.04', text: 'Shapes follow real biology, but small things are drawn larger so you can see them.' },
        { id: 'ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'The outside', steps: [
      { id: 'membrane', title: 'Plasma membrane', camera: { part: 'membrane', dist: 1.3 }, blink: 'membrane', ghost: false, tags: ['focus:membrane'], detail: 'plasma-membrane', cues: [
        { id: 'ch1.membrane.01', text: 'The cell\'s boundary is the [[plasma membrane]].' },
        { id: 'ch1.membrane.02', text: 'It is a double layer of fat-like molecules, only about 5 nanometres thick.', say: 'It is a double layer of fat-like molecules, only about five nanometres thick.' },
        { id: 'ch1.membrane.03', text: 'Proteins set in it decide what comes in and what goes out.' },
      ] },
      { id: 'villi', title: 'Microvilli', camera: { part: 'villi' }, blink: 'villi', ghost: ['villi', 'membrane'], tags: ['focus:villi'], detail: 'microvillus', cues: [
        { id: 'ch1.villi.01', text: 'These small fingers are [[microvilli]].' },
        { id: 'ch1.villi.02', text: 'They multiply the surface, which helps cells that absorb, like those lining the gut.' },
        { id: 'ch1.villi.03', text: 'Each is held up by a bundle of [[actin|actin]] filaments.' },
      ] },
      { id: 'cilium', title: 'Primary cilium', camera: { part: 'cilium' }, blink: 'cilium', ghost: ['cilium', 'membrane'], tags: ['focus:cilium'], detail: 'cilium', cues: [
        { id: 'ch1.cilium.01', text: 'This single antenna is the [[primary cilium]].' },
        { id: 'ch1.cilium.02', text: 'Most of our cells have one. It does not beat: it senses signals from outside.' },
        { id: 'ch1.cilium.03', text: 'It grows from a centriole, which we will meet soon.' },
      ] },
    ] },
    { id: 'ch2', title: 'The cytoskeleton', steps: [
      { id: 'cytosol', title: 'Cytosol', camera: { part: 'cytosol', dist: 1.5 }, blink: 'cytosol', ghost: false, tags: ['focus:cytosol'], detail: 'cytosol', cues: [
        { id: 'ch2.cytosol.01', text: 'Inside, the cell is not empty water.' },
        { id: 'ch2.cytosol.02', text: 'The [[cytosol]] is crowded with proteins and ribosomes, like a thick gel.' },
      ] },
      { id: 'actin', title: 'Actin cortex', camera: { part: 'actin' }, blink: 'actin', ghost: ['actin', 'membrane'], tags: ['focus:actin'], detail: 'actin-filament', cues: [
        { id: 'ch2.actin.01', text: 'Just under the membrane lies the [[actin cortex]], a mesh of thin filaments.' },
        { id: 'ch2.actin.02', text: 'It gives the surface its shape and lets it move.' },
      ] },
      { id: 'mt', title: 'Microtubules', camera: { part: 'mt' }, blink: 'mt', ghost: ['mt', 'centro'], tags: ['cell:mt'], detail: 'microtubule', cues: [
        { id: 'ch2.mt.01', text: '[[Microtubules]] are hollow tubes that spread out from near the nucleus.' },
        { id: 'ch2.mt.02', text: 'They are rails: motor proteins carry vesicles along them.' },
        { id: 'ch2.mt.03', text: 'They keep growing and shrinking. Watch their tips.' },
      ] },
      { id: 'centro', title: 'Centrosome', camera: { part: 'centro' }, blink: 'centro', ghost: ['centro', 'mt'], tags: ['focus:centro'], detail: 'centrosome', cues: [
        { id: 'ch2.centro.01', text: 'They grow from the [[centrosome]]: two centrioles at right angles.' },
        { id: 'ch2.centro.02', text: 'Before a cell divides, it copies its centrosome.' },
        { id: 'ch2.centro.03', text: 'The two organise the spindle that separates the chromosomes.' },
      ] },
      { id: 'if', title: 'Intermediate filaments', camera: { part: 'if' }, blink: 'if', ghost: ['if', 'nucleus'], tags: ['focus:if'], detail: 'intermediate-filament', cues: [
        { id: 'ch2.if.01', text: '[[Intermediate filaments]] are tough ropes.' },
        { id: 'ch2.if.02', text: 'They spread the strain when the cell is stretched or squeezed.' },
      ] },
    ] },
    { id: 'ch3', title: 'The nucleus', steps: [
      { id: 'nucleus', title: 'Nucleus', camera: { part: 'nucleus', dist: 1.15 }, blink: 'nucleus', tags: ['focus:nucleus'], detail: 'real-nucleus', cues: [
        { id: 'ch3.nucleus.01', text: 'The largest organelle is the [[nucleus]].' },
        { id: 'ch3.nucleus.02', text: 'It holds the cell\'s DNA: in a human cell, about two metres of it.' },
        { id: 'ch3.nucleus.03', text: 'Its envelope is two membranes, one inside the other.' },
      ] },
      { id: 'pores', title: 'Nuclear pores', camera: { view: 'nucleus' }, blink: 'nucleus', ghost: false, tags: ['nucleus:pore', 'nucleus:export'], detail: 'nuclear-pore', cues: [
        { id: 'ch3.pores.01', text: 'Thousands of pores cross the envelope. This model shows about 900.', say: 'Thousands of pores cross the envelope. This model shows about nine hundred.' },
        { id: 'ch3.pores.02', text: 'They let molecules in and out, and check what passes.' },
      ] },
      { id: 'chromatin', title: 'Chromatin', camera: { view: 'nucleus' }, blink: 'chromatin', ghost: false, tags: ['nucleus:chromatin'], detail: 'chromosome', cues: [
        { id: 'ch3.chromatin.01', text: 'The DNA is wound on histone proteins, like thread on spools.' },
        { id: 'ch3.chromatin.02', text: 'Each spool is a nucleosome.' },
        { id: 'ch3.chromatin.03', text: 'Each of the 46 chromosomes keeps to its own region, its territory.', say: 'Each of the forty-six chromosomes keeps to its own region, its territory.' },
      ] },
      { id: 'nucleolus', title: 'Nucleolus', camera: { view: 'nucleolus' }, blink: 'nucleolus', ghost: false, tags: ['nucleolus:tree', 'nucleolus:gc'], detail: 'real-nucleolus', cues: [
        { id: 'ch3.nucleolus.01', text: 'The dense body is the [[nucleolus]].' },
        { id: 'ch3.nucleolus.02', text: 'Here the cell reads the genes for ribosomal RNA, and starts building ribosomes.' },
      ] },
      { id: 'gene', title: 'A gene being read', camera: { view: 'DNA', dur: 3 }, blink: 'mrna', ghost: false, tags: ['DNA:pol2', 'DNA:nascent', 'DNA:dna'], detail: 'pol-ii', cues: [
        { id: 'ch3.gene.01', text: 'Up close, an enzyme, [[RNA polymerase II]], is reading a gene.', say: 'Up close, an enzyme, RNA polymerase two, is reading a gene.' },
        { id: 'ch3.gene.02', text: 'It copies the DNA into messenger RNA: a working copy of one instruction.' },
        { id: 'ch3.gene.03', text: 'The mRNA leaves through a pore, to be read in the cytoplasm.' },
      ] },
    ] },
    { id: 'ch4', title: 'Making proteins', steps: [
      { id: 'ribosome', title: 'Ribosomes', camera: { part: 'ribosome', dur: 3 }, blink: 'ribosome', tags: ['focus:ribo'], detail: 'ribosome', cues: [
        { id: 'ch4.ribosome.01', text: '[[Ribosomes]] read mRNA and join amino acids into proteins.' },
        { id: 'ch4.ribosome.02', text: 'Some float free in the cytosol; others sit on membranes.' },
      ] },
      { id: 'rer', title: 'Rough ER', camera: { part: 'rer' }, blink: 'rer', ghost: ['rer', 'nucleus', 'ribosome'], tags: ['cell:rer'], detail: 'rough-er', cues: [
        { id: 'ch4.rer.01', text: 'Many sit on the [[rough ER]]: flattened sheets wrapped around the nucleus.' },
        { id: 'ch4.rer.02', text: 'Its ribosomes make proteins for membranes and for export.' },
      ] },
      { id: 'golgi', title: 'Golgi apparatus', camera: { part: 'golgi' }, blink: 'golgi', ghost: ['golgi', 'vesicle'], tags: ['focus:golgi'], detail: 'golgi', cues: [
        { id: 'ch4.golgi.01', text: 'The [[Golgi apparatus]] receives those proteins.' },
        { id: 'ch4.golgi.02', text: 'It finishes them, adding and trimming sugar chains.' },
        { id: 'ch4.golgi.03', text: 'Then it sorts them by where they must go.' },
      ] },
      { id: 'vesicle', title: 'Vesicles', camera: { part: 'vesicle', dist: 1.7 }, blink: 'vesicle', ghost: ['vesicle', 'golgi', 'rer', 'membrane'], detail: 'vesicle',
        links: [['cell:rer', 'focus:golgi', 'new proteins', 'rer'], ['focus:golgi', 'cell:membrane', 'to the surface', 'golgi']], cues: [
        { id: 'ch4.vesicle.01', text: 'Proteins from the ER travel in [[vesicles]], small membrane bubbles.' },
        { id: 'ch4.vesicle.02', text: 'Vesicles leave the Golgi, many riding along microtubules.' },
        { id: 'ch4.vesicle.03', text: 'Some fuse with the membrane and release their cargo outside the cell.' },
      ] },
      { id: 'ser', title: 'Smooth ER', camera: { part: 'ser' }, blink: 'ser', tags: ['focus:ser'], detail: 'smooth-er', cues: [
        { id: 'ch4.ser.01', text: 'The [[smooth ER]] is a network of tubes without ribosomes.' },
        { id: 'ch4.ser.02', text: 'It makes lipids and stores calcium.' },
      ] },
    ] },
    { id: 'ch5', title: 'Energy and recycling', steps: [
      { id: 'mito', title: 'Mitochondria', camera: { part: 'mito' }, blink: 'mito', tags: ['focus:mito'], detail: 'mitochondrion', cues: [
        { id: 'ch5.mito.01', text: '[[Mitochondria]] are the cell\'s power plants.' },
        { id: 'ch5.mito.02', text: 'They use oxygen to break down sugars and fats, and make ATP.' },
        { id: 'ch5.mito.03', text: 'ATP is the cell\'s energy currency: almost every job spends it.' },
        { id: 'ch5.mito.04', text: 'Their inner membrane folds into cristae, to hold more ATP-making machines.' },
        { id: 'ch5.mito.05', text: 'They even have their own DNA: a trace of their past as free-living bacteria.' },
      ] },
      { id: 'lyso', title: 'Lysosomes', camera: { part: 'lyso' }, blink: 'lyso', tags: ['focus:lyso'], detail: 'lysosome', cues: [
        { id: 'ch5.lyso.01', text: '[[Lysosomes]] are acidic sacs of digestive enzymes.' },
        { id: 'ch5.lyso.02', text: 'They break down worn-out parts, and what the cell takes in.' },
      ] },
      { id: 'endo', title: 'Endosomes', camera: { part: 'endo' }, blink: 'vesicle', ghost: ['vesicle', 'lyso'], tags: ['focus:endo'], detail: 'vesicle', cues: [
        { id: 'ch5.endo.01', text: '[[Endosomes|vesicle]] sort what the cell takes in from outside.' },
        { id: 'ch5.endo.02', text: 'Some goes back to the membrane; the rest goes to lysosomes.' },
      ] },
      { id: 'perox', title: 'Peroxisomes', camera: { part: 'perox' }, blink: 'perox', tags: ['focus:perox'], detail: 'peroxisome', cues: [
        { id: 'ch5.perox.01', text: '[[Peroxisomes]] break down very long fatty acids.' },
        { id: 'ch5.perox.02', text: 'They also destroy hydrogen peroxide, a harmful by-product.' },
      ] },
      { id: 'lipid', title: 'Lipid droplets', camera: { part: 'lipid' }, blink: 'lipid', tags: ['focus:lipid'], detail: 'lipid-droplet', cues: [
        { id: 'ch5.lipid.01', text: '[[Lipid droplets]] store fat, wrapped in a single layer of lipids.' },
        { id: 'ch5.lipid.02', text: 'When the cell needs energy, the fat goes to the mitochondria.' },
      ] },
    ] },
    { id: 'ch6', title: 'Working together', steps: [
      { id: 'flows', title: 'Molecules on the move', camera: { view: 'cell', orbit: 2 }, flow: true, ghost: false, cues: [
        { id: 'ch6.flows.01', text: 'None of these parts work alone.' },
        { id: 'ch6.flows.02', text: 'Watch the molecules travel: each organelle lights up as it makes its product.' },
      ] },
      { id: 'glucose', title: 'Glucose and ATP', camera: { view: 'cell', orbit: 2 }, flow: true, ghost: false, follow: 'glucose', cues: [
        { id: 'ch6.glucose.01', text: 'Glucose comes in through the membrane.' },
        { id: 'ch6.glucose.02', text: 'In the cytosol each glucose splits into two pyruvates, and makes a little ATP.' },
        { id: 'ch6.glucose.03', text: 'Mitochondria burn the pyruvate with oxygen.', blink: 'mito' },
      ] },
      { id: 'atp', title: 'ATP', camera: { view: 'cell', orbit: 2 }, flow: true, ghost: false, follow: 'atp', cues: [
        { id: 'ch6.atp.01', text: 'The ATP they make goes wherever energy is needed.', blink: 'mito' },
        { id: 'ch6.atp.02', text: 'Pumps in the membrane, motors, ribosomes: all of them spend it.' },
      ] },
      { id: 'mrna', title: 'From gene to protein', camera: { view: 'cell', orbit: 2 }, flow: true, ghost: false, follow: 'mrna', cues: [
        { id: 'ch6.mrna.01', text: 'mRNA copied from genes leaves the nucleus through its pores.', blink: 'nucleus' },
        { id: 'ch6.mrna.02', text: 'On the rough ER, ribosomes read it and build a protein.', blink: 'rer' },
      ] },
      { id: 'secretion', title: 'Out of the cell', camera: { view: 'cell', orbit: 2 }, flow: true, ghost: false, follow: 'vesicle', cues: [
        { id: 'ch6.secretion.01', text: 'Vesicles carry the new protein to the Golgi.', blink: 'golgi' },
        { id: 'ch6.secretion.02', text: 'From there, some go to the surface and release it outside the cell.', blink: 'membrane' },
      ] },
    ] },
    { id: 'ch7', title: 'Recap', steps: [
      { id: 'rollcall', title: 'Every part', camera: { view: 'cell', orbit: 6 }, ghost: false, cues: [
        { id: 'ch7.rollcall.01', text: 'Plasma membrane', blink: 'membrane', dur: 1.6 },
        { id: 'ch7.rollcall.02', text: 'Nucleus', blink: 'nucleus', dur: 1.6 },
        { id: 'ch7.rollcall.03', text: 'Rough ER', blink: 'rer', dur: 1.6 },
        { id: 'ch7.rollcall.04', text: 'Ribosomes', blink: 'ribosome', dur: 1.6 },
        { id: 'ch7.rollcall.05', text: 'Golgi apparatus', blink: 'golgi', dur: 1.6 },
        { id: 'ch7.rollcall.06', text: 'Vesicles and endosomes', blink: 'vesicle', dur: 1.6 },
        { id: 'ch7.rollcall.07', text: 'Smooth ER', blink: 'ser', dur: 1.6 },
        { id: 'ch7.rollcall.08', text: 'Mitochondria', blink: 'mito', dur: 1.6 },
        { id: 'ch7.rollcall.09', text: 'Lysosomes', blink: 'lyso', dur: 1.6 },
        { id: 'ch7.rollcall.10', text: 'Peroxisomes', blink: 'perox', dur: 1.6 },
        { id: 'ch7.rollcall.11', text: 'Lipid droplets', blink: 'lipid', dur: 1.6 },
        { id: 'ch7.rollcall.12', text: 'Centrosome and microtubules', blink: 'mt', dur: 1.6 },
        { id: 'ch7.rollcall.13', text: 'Actin cortex', blink: 'actin', dur: 1.6 },
        { id: 'ch7.rollcall.14', text: 'Intermediate filaments', blink: 'if', dur: 1.6 },
        { id: 'ch7.rollcall.15', text: 'Primary cilium', blink: 'cilium', dur: 1.6 },
        { id: 'ch7.rollcall.16', text: 'Microvilli', blink: 'villi', dur: 1.6 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'cell', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'ch7.explore.01', text: 'Now explore on your own.' },
        { id: 'ch7.explore.02', text: 'Click any tag to go deeper, down to molecules and atoms.' },
      ] },
    ] },
  ],
  // optional short scripts for "More detail" levels; a level without one shows its description, a sentence at a time
  details: {},
};
