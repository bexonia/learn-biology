import type { TourDefinition } from "./tourService.js";

// Guided tour of Stage 3.1: Mycoplasma genitalium (real-mycoplasma), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const mycoplasmaTour: TourDefinition = {
  title: 'Mycoplasma genitalium: a guided tour',
  root: 'real-mycoplasma',
  page: 'mycoplasma_realistic.html',
  view: 'cell',
  summary: 'Explore the smallest self-replicating cell: a wall-less cholesterol membrane, polarized Nap adhesin, internal gliding rod, 580 kbp DNA and 70S ribosomes.',
  views: {
    cell: 'real-mycoplasma',
    focus: 'real-mycoplasma',
    nap: 'real-myco-nap',
    rod: 'real-myco-rod',
    nucleoid: 'real-myco-nucleoid',
  },
  chapters: [
    { id: 'ch0', title: 'Minimal living cell & wall-less membrane', steps: [
      { id: 'myco-intro', title: 'Smallest self-replicating cell', camera: { view: 'cell', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['membrane', 'nap', 'dna', 'ribosome'], cues: [
        { id: 'myco.ch0.s0.01', text: 'Meet Mycoplasma genitalium, the smallest known self-replicating cell on Earth.' },
        { id: 'myco.ch0.s0.02', text: 'Its flask-shaped body spans just 300 by 600 nm, smaller than some giant viruses.' },
        { id: 'myco.ch0.s0.03', text: 'Yet a [[lipid membrane|membrane]], [[DNA|dna]] and [[70S ribosomes|ribosome]] prove it is truly alive.' },
      ] },
      { id: 'myco-membrane', title: 'Single cholesterol-stiffened bilayer', camera: { part: 'sterol', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'sterol',
        ghost: ['membrane', 'sterol'], tags: ['membrane', 'sterol'], cues: [
        { id: 'myco.ch0.s1.01', text: 'Unlike E. coli, Mycoplasma wears zero peptidoglycan cell wall outside its [[membrane|membrane]].' },
        { id: 'myco.ch0.s1.02', text: 'To keep this naked bilayer from tearing, it packs [[host cholesterol|sterol]] between lipids.' },
        { id: 'myco.ch0.s1.03', text: 'Planar [[sterol rings|sterol]] stiffen the fluid membrane and curb osmotic leaks.' },
      ] },
      { id: 'myco-lipo', title: 'Surface lipoproteins & immune decoy', camera: { part: 'lipo', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'lipo',
        ghost: ['lipo', 'membrane'], tags: ['lipo', 'membrane'], cues: [
        { id: 'myco.ch0.s2.01', text: 'Anchored in the outer leaflet sit dense [[surface lipoproteins|lipo]] facing the airway.' },
        { id: 'myco.ch0.s2.02', text: 'Mycoplasma shuffles these [[lipoprotein coats|lipo]] to evade host antibodies.' },
        { id: 'myco.ch0.s2.03', text: 'Without a rigid wall, the pliable [[bilayer|membrane]] squeezes through 220 nm filters.' },
      ] },
    ] },
    { id: 'ch1', title: 'Polarized Nap adhesin & cilium grip', steps: [
      { id: 'myco-nap', title: 'P140/P110 Nap adhesin crown', camera: { view: 'nap', dur: 2.4, orbit: 2 }, blink: 'nap', ghost: false,
        tags: ['nap', 'sialo', 'membrane'], cues: [
        { id: 'myco.ch1.s0.01', text: 'At the narrow neck juts a polarized crown of [[Nap adhesin complexes|nap]].' },
        { id: 'myco.ch1.s0.02', text: 'Each four-part [[Nap spike|nap]] pairs two P140 stalks with two P110 receptor heads.' },
        { id: 'myco.ch1.s0.03', text: 'Crowding [[Nap complexes|nap]] at one tip turns the flask neck into a sticky nose.' },
      ] },
      { id: 'myco-sialo', title: 'Clasping sialylated oligosaccharides', camera: { part: 'sialo', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'sialo',
        ghost: ['nap', 'sialo', 'cilium'], tags: ['nap', 'sialo'], cues: [
        { id: 'myco.ch1.s1.01', text: 'The P110 pocket clasps [[sialylated sugar chains|sialo]] on human airway cells.' },
        { id: 'myco.ch1.s1.02', text: 'Catch-and-release cycles on [[sialic acid receptors|sialo]] keep the cell tethered.' },
        { id: 'myco.ch1.s1.03', text: 'When ATP cleavage resets [[Nap|nap]], the clamp lets go to step forward.' },
      ] },
      { id: 'myco-cilium', title: 'Riding the human airway cilium', camera: { part: 'cilium', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'cilium',
        ghost: ['cilium', 'sialo', 'nap'], tags: ['cilium', 'sialo', 'nap'], cues: [
        { id: 'myco.ch1.s2.01', text: 'Below stretches a beating [[human epithelial cilium|cilium]] meant to sweep mucus clear.' },
        { id: 'myco.ch1.s2.02', text: 'By locking [[Nap adhesins|nap]] onto [[ciliary sugars|sialo]], Mycoplasma resists clearance.' },
        { id: 'myco.ch1.s2.03', text: 'It glides down the [[cilium shaft|cilium]] to colonize the warm mucosal surface.' },
      ] },
    ] },
    { id: 'ch2', title: 'Internal cytoskeletal rod & gliding', steps: [
      { id: 'myco-button', title: 'Terminal button & segmented core rod', camera: { view: 'rod', dur: 2.4, orbit: 2 }, blink: 'rod', ghost: false,
        tags: ['button', 'rod', 'wheel'], cues: [
        { id: 'myco.ch2.s0.01', text: 'Inside the neck sits an internal skeleton capped by a dense [[terminal button|button]].' },
        { id: 'myco.ch2.s0.02', text: 'HMW1, HMW2 and P65 proteins lock the [[terminal button|button]] beneath the tip membrane.' },
        { id: 'myco.ch2.s0.03', text: 'Behind it runs a segmented [[cytoskeletal rod|rod]] that braces the wall-less neck.' },
      ] },
      { id: 'myco-wheel', title: 'Basal bowl wheel complex', camera: { part: 'wheel', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'wheel',
        ghost: ['button', 'rod', 'wheel'], tags: ['rod', 'wheel'], cues: [
        { id: 'myco.ch2.s1.01', text: 'The back end of the [[core rod|rod]] seats into a saucer-like [[bowl wheel complex|wheel]].' },
        { id: 'myco.ch2.s1.02', text: 'This [[basal wheel|wheel]] transmits pulling forces into the rest of the cytoplasm.' },
        { id: 'myco.ch2.s1.03', text: 'Before cell division, the entire [[rod|rod]] and [[wheel|wheel]] duplicate for the daughter.' },
      ] },
      { id: 'myco-gliding', title: 'ATP-driven inchworm gliding', camera: { part: 'gliding', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'gliding', flow: true,
        ghost: ['gliding', 'rod', 'nap', 'sialo'], tags: ['gliding', 'rod', 'nap'], cues: [
        { id: 'myco.ch2.s2.01', text: 'With zero flagella, Mycoplasma crawls using [[gliding motor complexes|gliding]] at the neck.' },
        { id: 'myco.ch2.s2.02', text: 'ATP-burning [[gliding motors|gliding]] pull against the [[internal rod|rod]] to tug [[Nap feet|nap]].' },
        { id: 'myco.ch2.s2.03', text: 'Inchworm strokes drag the cell across [[airway cilia|cilium]] at ~100 nm per second.' },
      ] },
    ] },
    { id: 'ch3', title: '580 kbp minimal genome & 70S ribosomes', steps: [
      { id: 'myco-dna', title: '580 kbp circular dsDNA & HU bending', camera: { view: 'nucleoid', dur: 2.4, orbit: 2 }, blink: 'dna', ghost: false,
        tags: ['dna', 'hu', 'fork'], cues: [
        { id: 'myco.ch3.s0.01', text: 'Coiled in the center is a 580,076 bp [[circular dsDNA chromosome|dna]] with ~482 genes.' },
        { id: 'myco.ch3.s0.02', text: 'That is eight times smaller than E. coli, near the bare minimum for cellular life.' },
        { id: 'myco.ch3.s0.03', text: 'Architectural [[HU proteins|hu]] bend the [[supercoiled DNA|dna]] into compact loops.' },
      ] },
      { id: 'myco-fork', title: 'Replication fork & RNA polymerase', camera: { part: 'fork', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'fork',
        ghost: ['dna', 'fork', 'rnap', 'mrna'], tags: ['fork', 'rnap', 'mrna'], cues: [
        { id: 'myco.ch3.s1.01', text: 'A minimal [[replisome fork|fork]] unwinds and duplicates the [[chromosome|dna]] before fission.' },
        { id: 'myco.ch3.s1.02', text: 'Nearby, bacterial [[RNA polymerase|rnap]] transcribes essential genes into [[mRNA|mrna]].' },
        { id: 'myco.ch3.s1.03', text: 'Even with 482 genes, over 100 are spent just maintaining [[DNA|dna]] and [[RNA|mrna]].' },
      ] },
      { id: 'myco-ribosome', title: 'Coupled translation on 70S ribosomes', camera: { part: 'ribosome', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ribosome', flow: true,
        ghost: ['ribosome', 'mrna', 'rnap'], tags: ['ribosome', 'mrna'], cues: [
        { id: 'myco.ch3.s2.01', text: 'About 150 bacterial [[70S ribosomes|ribosome]] pack the tiny cytosol to translate [[mRNA|mrna]].' },
        { id: 'myco.ch3.s2.02', text: 'Owning [[70S ribosomes|ribosome]] separates Mycoplasma sharply from ribosome-free viruses.' },
        { id: 'myco.ch3.s2.03', text: 'Macrolides and tetracyclines cure infection by jamming these [[70S ribosomes|ribosome]].' },
      ] },
    ] },
    { id: 'ch4', title: 'Metabolic scavenging & beta-lactam immunity', steps: [
      { id: 'myco-import', title: 'Scavenging host building blocks', camera: { part: 'import', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'import', flow: true,
        ghost: ['import', 'membrane', 'sterol'], tags: ['import', 'membrane'], cues: [
        { id: 'myco.ch4.s0.01', text: 'Evolution deleted pathways for making amino acids, fatty acids and nucleotides de novo.' },
        { id: 'myco.ch4.s0.02', text: 'Membrane [[ABC importers|import]] scavenge ready-made nucleosides and lipids from the host.' },
        { id: 'myco.ch4.s0.03', text: 'That dependency keeps its [[genome|dna]] tiny while restricting life to warm host tissues.' },
      ] },
      { id: 'myco-glycolysis', title: 'Glycolysis & why penicillin fails', camera: { part: 'glycolysis', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'glycolysis', flow: true,
        ghost: ['glycolysis', 'membrane', 'import'], tags: ['glycolysis', 'membrane'], cues: [
        { id: 'myco.ch4.s1.01', text: 'Lacking a TCA cycle or respiratory chain, cytosolic [[glycolytic enzymes|glycolysis]] mint its ATP.' },
        { id: 'myco.ch4.s1.02', text: 'Penicillin blocks peptidoglycan cross-linking, leaving wall-less [[Mycoplasma|membrane]] unharmed.' },
        { id: 'myco.ch4.s1.03', text: 'Clinicians therefore skip beta-lactams and target [[70S ribosomes|ribosome]] or DNA gyrase.' },
      ] },
      { id: 'myco-finale', title: 'Minimal cell in motion', camera: { view: 'cell', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['membrane', 'nap', 'rod', 'dna', 'ribosome', 'glycolysis'], cues: [
        { id: 'myco.ch4.s2.01', text: 'Watch [[ABC importers|import]], [[glycolysis|glycolysis]], [[70S ribosomes|ribosome]] and [[Nap gliding|nap]] run as one.' },
        { id: 'myco.ch4.s2.02', text: 'Four hundred eighty-two genes suffice to enclose, copy, translate and power a living cell.' },
        { id: 'myco.ch4.s2.03', text: 'Explore any tag now, or continue to Chlamydia to see full intracellular ATP theft.' },
      ] },
    ] },
  ],
  details: {},
};
