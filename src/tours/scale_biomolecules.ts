import type { TourDefinition } from "./tourService.js";

// Guided tour of Stage 0.2: Powers-of-10 True Scale Explorer & The Four Biomolecules (scale-explorer).
// Every base cue stays <= 110 plain characters and 100% pure ASCII for deterministic TTS synthesis.
export const scale_biomoleculesTour: TourDefinition = {
  title: 'Powers of 10: true scale explorer & four biomolecules',
  root: 'scale-explorer',
  page: 'scale_explorer.html',
  view: 'overview',
  summary: 'Travel six powers of ten from a 100 um plant cell to 0.1 nm atoms, then meet the four biomolecule families that build every living cell and virus.',
  views: {
    overview: 'scale-explorer',
    cells: 'scale-explorer',
    microbes: 'scale-explorer',
    viruses: 'scale-explorer',
    molecules: 'scale-explorer',
    atoms: 'scale-explorer',
  },
  chapters: [
    { id: 'ch0', title: 'Scale from Whole Cell to Microbe', steps: [
      { id: 'scale-overview', title: 'Six orders of magnitude of life', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['plant_100um', 'animal_20um', 'ecoli_2um', 'virus_100nm', 'dna_2nm', 'atom_01nm'], cues: [
        { id: 'scale.ch0.s0.01', text: 'From a 100 um [[plant cell|plant_100um]] to a 0.1 nm [[atom|atom_01nm]], life spans six powers of ten.' },
        { id: 'scale.ch0.s0.02', text: 'Standalone scenes fill one screen, hiding that cells can be 1,000 times wider than [[viruses|virus_100nm]].' },
        { id: 'scale.ch0.s0.03', text: 'This logarithmic gallery aligns eleven true-size stops from whole cells down to [[atoms|atom_01nm]].' },
      ] },
      { id: 'scale-cells', title: 'Plant cell (100 um) & animal cell (20 um)', camera: { view: 'cells', dur: 2.2, orbit: 2 }, blink: 'plant_100um',
        ghost: ['plant_100um', 'animal_20um'], tags: ['plant_100um', 'animal_20um'], cues: [
        { id: 'scale.ch0.s1.01', text: 'At 100 um, a [[plant leaf cell|plant_100um]] or human oocyte sits right at the limit of the naked eye.' },
        { id: 'scale.ch0.s1.02', text: 'A cellulose wall, central vacuole and green chloroplasts fill the [[plant cell|plant_100um]] interior.' },
        { id: 'scale.ch0.s1.03', text: 'Beside it, a 20 um [[animal cell|animal_20um]] is five times narrower and over 100 times smaller in volume.' },
      ] },
      { id: 'scale-yeast-ecoli', title: 'Budding yeast (5 um) & E. coli (2 um)', camera: { part: 'yeast_5um', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'yeast_5um',
        ghost: ['yeast_5um', 'ecoli_2um'], tags: ['yeast_5um', 'ecoli_2um'], cues: [
        { id: 'scale.ch0.s2.01', text: 'Stepping down to 5 um brings [[budding yeast|yeast_5um]], matching the width of an animal nucleus.' },
        { id: 'scale.ch0.s2.02', text: 'A single 2 um [[E. coli bacterium|ecoli_2um]] is smaller than one mitochondrion inside a eukaryote.' },
        { id: 'scale.ch0.s2.03', text: 'Yet that compact [[bacterial rod|ecoli_2um]] still runs a 4.6 Mbp genome, ribosomes and ATP synthase.' },
      ] },
      { id: 'scale-mycoplasma', title: 'Mycoplasma (300 nm) & the optical limit', camera: { view: 'microbes', dur: 2.2, orbit: 2 }, blink: 'myco_300nm',
        ghost: ['ecoli_2um', 'myco_300nm'], tags: ['ecoli_2um', 'myco_300nm'], cues: [
        { id: 'scale.ch0.s3.01', text: 'At 300 nm wide, wall-less [[Mycoplasma genitalium|myco_300nm]] marks the lower edge of cellular life.' },
        { id: 'scale.ch0.s3.02', text: 'Just below [[Mycoplasma|myco_300nm]], visible light hits its ~200 nm diffraction barrier.' },
        { id: 'scale.ch0.s3.03', text: 'Past that optical limit, biologists rely on electron beams and X-ray beams to resolve structure.' },
      ] },
    ] },
    { id: 'ch1', title: 'Viruses to Molecular Machines', steps: [
      { id: 'scale-viruses', title: 'Viruses (100 nm) & billion-fold leaps', camera: { view: 'viruses', dur: 2.2, orbit: 2 }, blink: 'virus_100nm',
        ghost: ['virus_100nm', 'myco_300nm'], tags: ['virus_100nm', 'myco_300nm'], cues: [
        { id: 'scale.ch1.s0.01', text: 'At 100 nm sit enveloped [[SARS-CoV-2 and HIV-1 virions|virus_100nm]]: genetic payloads with zero ribosomes.' },
        { id: 'scale.ch1.s0.02', text: 'A 100 um [[plant cell|plant_100um]] is 1,000 times wider and one billion times bulkier than a 100 nm [[virus|virus_100nm]].' },
        { id: 'scale.ch1.s0.03', text: 'Because [[virions|virus_100nm]] lack cytoplasm and enzymes, every copy depends on hijacking a host cell.' },
      ] },
      { id: 'scale-ribosome', title: 'Ribosomes (25 nm): protein builders', camera: { part: 'ribo_25nm', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ribo_25nm', flow: true,
        ghost: ['ribo_25nm', 'virus_100nm'], tags: ['ribo_25nm', 'enzyme_10nm'], cues: [
        { id: 'scale.ch1.s1.01', text: 'At 25 nm sits the [[ribosome|ribo_25nm]], the RNA-protein complex that translates mRNA into polypeptides.' },
        { id: 'scale.ch1.s1.02', text: 'A 70S bacterial [[ribosome|ribo_25nm]] spans ~21 to 25 nm, while eukaryotic 80S reaches ~30 nm.' },
        { id: 'scale.ch1.s1.03', text: 'Tens of thousands of [[ribosomes|ribo_25nm]] operate together inside a single growing bacterium.' },
      ] },
      { id: 'scale-enzymes-dna', title: 'Enzymes (10 nm) & DNA double helix (2 nm)', camera: { view: 'molecules', dur: 2.2, orbit: 2 }, blink: 'enzyme_10nm', flow: true,
        ghost: ['enzyme_10nm', 'dna_2nm'], tags: ['enzyme_10nm', 'dna_2nm'], cues: [
        { id: 'scale.ch1.s2.01', text: 'At 10 nm operate folded [[protein complexes|enzyme_10nm]] such as rotary ATP synthase and RuBisCO.' },
        { id: 'scale.ch1.s2.02', text: 'Proton flow turns the [[ATP synthase|enzyme_10nm]] rotor to join phosphate onto ADP at every cycle.' },
        { id: 'scale.ch1.s2.03', text: 'Five times thinner at 2 nm runs the [[B-DNA double helix|dna_2nm]], 50,000 times narrower than a cell.' },
      ] },
    ] },
    { id: 'ch2', title: 'The Four Biomolecules of Life', steps: [
      { id: 'bio-lipids', title: '1. Lipids: self-assembling bilayers', camera: { part: 'animal_20um', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'animal_20um',
        ghost: ['animal_20um', 'monomer_1nm'], tags: ['animal_20um', 'monomer_1nm'], cues: [
        { id: 'scale.ch2.s0.01', text: 'Every cell and virus on Earth is built from four biomolecule families, starting with lipids.' },
        { id: 'scale.ch2.s0.02', text: 'Polar [[phospholipid|monomer_1nm]] heads face water while nonpolar tails pack inward to seal the [[bilayer|animal_20um]].' },
        { id: 'scale.ch2.s0.03', text: 'This non-covalent [[5 nm membrane|animal_20um]] encloses cells and organelles while remaining fluid.' },
      ] },
      { id: 'bio-carbs', title: '2. Carbohydrates: fuel & plant walls', camera: { part: 'plant_100um', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'plant_100um',
        ghost: ['plant_100um', 'monomer_1nm'], tags: ['plant_100um', 'monomer_1nm'], cues: [
        { id: 'scale.ch2.s1.01', text: 'Carbohydrates join 0.9 nm [[glucose rings|monomer_1nm]] built from carbon, hydrogen and oxygen.' },
        { id: 'scale.ch2.s1.02', text: 'Coiled alpha-linked glucose stores rapid energy as starch, ready for glycolysis to generate ATP.' },
        { id: 'scale.ch2.s1.03', text: 'Flipping that bond into flat beta chains forms rigid cellulose fibers in [[plant cell walls|plant_100um]].' },
      ] },
      { id: 'bio-proteins', title: '3. Proteins: folded molecular machines', camera: { part: 'enzyme_10nm', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'enzyme_10nm', flow: true,
        ghost: ['enzyme_10nm', 'ribo_25nm', 'monomer_1nm'], tags: ['enzyme_10nm', 'ribo_25nm', 'monomer_1nm'], cues: [
        { id: 'scale.ch2.s2.01', text: 'Proteins link twenty [[amino acids|monomer_1nm]] through planar peptide bonds inside the [[ribosome|ribo_25nm]].' },
        { id: 'scale.ch2.s2.02', text: 'Backbone hydrogen bonds fold chains into alpha helices and pleated beta sheets with exact shapes.' },
        { id: 'scale.ch2.s2.03', text: 'Those folds turn chains into [[catalytic enzymes|enzyme_10nm]], membrane transporters and cell fibers.' },
      ] },
      { id: 'bio-nucleic', title: '4. Nucleic acids: DNA & RNA code', camera: { part: 'dna_2nm', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'dna_2nm',
        ghost: ['dna_2nm', 'monomer_1nm', 'ribo_25nm'], tags: ['dna_2nm', 'monomer_1nm'], cues: [
        { id: 'scale.ch2.s3.01', text: 'Nucleic acids join [[nucleotides|monomer_1nm]] into directional chains that store and carry genetic code.' },
        { id: 'scale.ch2.s3.02', text: 'In [[B-DNA|dna_2nm]], two antiparallel strands pair A with T and G with C across a 2 nm double helix.' },
        { id: 'scale.ch2.s3.03', text: 'RNA adds one hydroxyl oxygen per sugar, folding into messengers and active [[ribosomes|ribo_25nm]].' },
      ] },
    ] },
    { id: 'ch3', title: 'Monomers to Atoms', steps: [
      { id: 'scale-monomers', title: 'Universal monomers (0.5 to 1 nm)', camera: { part: 'monomer_1nm', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'monomer_1nm',
        ghost: ['monomer_1nm', 'atom_01nm'], tags: ['monomer_1nm', 'atom_01nm'], cues: [
        { id: 'scale.ch3.s0.01', text: 'Zoom to 0.5 to 1 nm and all four macromolecules break into compact [[monomer units|monomer_1nm]].' },
        { id: 'scale.ch3.s0.02', text: 'Glucose, phospholipids, amino acids and [[nucleotides|monomer_1nm]] measure five to ten angstroms across.' },
        { id: 'scale.ch3.s0.03', text: 'Reactive hydroxyl, amino, carboxyl and phosphate groups let [[monomers|monomer_1nm]] link into polymers.' },
      ] },
      { id: 'scale-atoms', title: 'Six shared biogenic atoms (0.1 to 0.3 nm)', camera: { view: 'atoms', dur: 2.2, orbit: 2 }, blink: 'atom_01nm',
        ghost: ['atom_01nm', 'monomer_1nm'], tags: ['atom_01nm', 'monomer_1nm'], cues: [
        { id: 'scale.ch3.s1.01', text: 'At 0.1 to 0.3 nm, every [[biomolecule|monomer_1nm]] reduces to six core [[biogenic atoms|atom_01nm]].' },
        { id: 'scale.ch3.s1.02', text: '[[Carbon, hydrogen, oxygen and nitrogen|atom_01nm]] form covalent skeletons from glucose to proteins.' },
        { id: 'scale.ch3.s1.03', text: '[[Phosphorus and magnesium|atom_01nm]] bridge DNA backbones, lipid heads and high-energy ATP bonds.' },
      ] },
      { id: 'scale-finale', title: 'From atoms to living cells', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['plant_100um', 'animal_20um', 'yeast_5um', 'ecoli_2um', 'myco_300nm', 'virus_100nm', 'ribo_25nm', 'enzyme_10nm', 'dna_2nm', 'monomer_1nm', 'atom_01nm'], cues: [
        { id: 'scale.ch3.s2.01', text: 'Across six powers of ten, the same [[atoms|atom_01nm]] build [[monomers|monomer_1nm]], [[enzymes|enzyme_10nm]] and [[cells|plant_100um]].' },
        { id: 'scale.ch3.s2.02', text: 'Toggle 1:1 pair comparison or drag the scale slider to inspect adjacent stops at true size.' },
        { id: 'scale.ch3.s2.03', text: 'Explore the Four Biomolecules stage next, or dive straight into E. coli to see them in action.' },
      ] },
    ] },
  ],
  details: {},
};
