// The guided tour of the realistic fungal cell (budding yeast, Saccharomyces cerevisiae), played by cell_explorer.html.
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
window.TOURS = window.TOURS || {};
window.TOURS.fungal = {
  title: 'The fungal cell (budding yeast): a guided tour',
  root: 'real-fungal',
  page: 'fungal_cell_realistic.html',
  view: 'cell',
  summary: 'From the chitin and glucan cell wall, bud scars and septin collar to closed mitosis with the spindle pole body and alcoholic fermentation. About eight minutes.',
  views: {
    cell: 'real-fungal',
    focus: 'real-fungal',
    nucleus: 'real-fungal-nucleus',
    nucleolus: 'real-fungal-nucleolus',
    DNA: 'real-fungal-dna',
    bud: 'real-fungal-bud',
    wall: 'real-fungal-wall',
  },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'A budding yeast cell', camera: { view: 'cell', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'fn.ch0.intro.01', text: 'This is budding yeast, Saccharomyces cerevisiae: a single-celled fungus.' },
        { id: 'fn.ch0.intro.02', text: 'Fungi are their own eukaryotic kingdom, closer to animals than to plants.' },
        { id: 'fn.ch0.intro.03', text: 'Like plants they wear a tough wall; like animals they eat organic food.' },
        { id: 'fn.ch0.intro.04', text: 'This mother cell is growing a daughter bud at its top pole.' },
        { id: 'fn.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'Cell wall & ergosterol membrane', steps: [
      { id: 'wall', title: 'Three-layered fungal wall', camera: { part: 'wall', dist: 1.25 }, blink: 'wall', ghost: false, tags: ['cell:wall', 'cell:scar'], detail: 'fungal-wall', cues: [
        { id: 'fn.ch1.wall.01', text: 'Outside sits the [[fungal cell wall|wall]], about 150 nanometres thick.' },
        { id: 'fn.ch1.wall.02', text: 'Unlike plant walls, it has no cellulose at all.' },
        { id: 'fn.ch1.wall.03', text: 'It combines a [[chitin|wall]] base, a β-glucan mesh, and a mannoprotein coat.' },
      ] },
      { id: 'scar', title: 'Chitinous bud scars', camera: { part: 'scar', dist: 1.3 }, blink: 'scar', ghost: ['scar', 'wall'], tags: ['cell:scar', 'cell:wall'], detail: 'bud-scar', cues: [
        { id: 'fn.ch1.scar.01', text: 'Each crater-like ring on the mother wall is a [[chitinous bud scar|scar]].' },
        { id: 'fn.ch1.scar.02', text: 'Every daughter that pinches off leaves one permanent chitin ring behind.' },
        { id: 'fn.ch1.scar.03', text: 'Counting these scars tells you exactly how many times the cell has divided.' },
      ] },
      { id: 'membrane', title: 'Ergosterol plasma membrane', camera: { part: 'membrane', dist: 1.25 }, blink: 'membrane', ghost: ['membrane', 'pma1'], tags: ['cell:membrane', 'cell:pma1'], detail: 'ergosterol', cues: [
        { id: 'fn.ch1.membrane.01', text: 'Inside the wall lies the [[plasma membrane|membrane]], stiffened by ergosterol.' },
        { id: 'fn.ch1.membrane.02', text: 'Ergosterol is the fungal version of animal cholesterol.' },
        { id: 'fn.ch1.membrane.03', text: 'Antifungal drugs target ergosterol because human membranes do not use it.' },
      ] },
      { id: 'pma1', title: 'Pma1 proton pump', camera: { part: 'pma1', dist: 1.3 }, blink: 'pma1', ghost: ['pma1', 'membrane'], tags: ['cell:pma1'], detail: 'pma1-real', cues: [
        { id: 'fn.ch1.pma1.01', text: 'Studding the membrane is [[Pma1|pma1]], the master fungal proton pump.' },
        { id: 'fn.ch1.pma1.02', text: 'It burns ATP to pump protons out, powering sugar and amino-acid uptake.' },
      ] },
      { id: 'wallpatch', title: 'Wall & cortex at true scale', camera: { view: 'wall', dur: 2.8 }, blink: 'wall', ghost: false,
        tags: ['wall:manno', 'wall:glucan', 'wall:chitin', 'wall:exg1', 'wall:pma1', 'wall:septin'], detail: 'real-fungal-wall', cues: [
        { id: 'fn.ch1.patch.01', text: 'At true molecular scale, the wall\'s three layers stand out clearly.' },
        { id: 'fn.ch1.patch.02', text: '[[Exg1 glucanases|wall]] remodel β-glucan above [[chitin microfibrils|wall]].' },
        { id: 'fn.ch1.patch.03', text: 'In the membrane below sit [[Pma1 pumps|pma1]] and [[septin rods|septin]].' },
      ] },
    ] },
    { id: 'ch2', title: 'Asymmetric division by budding', steps: [
      { id: 'bud', title: 'Emerging daughter bud', camera: { view: 'bud', dur: 2.6 }, blink: 'bud', ghost: false,
        tags: ['bud:polarisome', 'bud:budwall', 'bud:septin', 'bud:actin'], detail: 'real-fungal-bud', cues: [
        { id: 'fn.ch2.bud.01', text: 'Instead of splitting in the middle, yeast divides by [[budding|bud]].' },
        { id: 'fn.ch2.bud.02', text: 'At the bud tip, the [[polarisome|bud]] focuses new wall growth outward.' },
      ] },
      { id: 'septin', title: 'Septin hourglass collar', camera: { view: 'bud' }, blink: 'septin', ghost: false,
        tags: ['bud:septin', 'bud:myoring', 'bud:scar'], detail: 'septin-real', cues: [
        { id: 'fn.ch2.septin.01', text: 'Guarding the mother–bud neck is a collar of [[septin filaments|septin]].' },
        { id: 'fn.ch2.septin.02', text: 'Septins bind GTP and assemble into an hourglass fence around the neck.' },
        { id: 'fn.ch2.septin.03', text: 'They anchor the [[actomyosin ring|septin]] that pinches the bud free.' },
      ] },
      { id: 'actin', title: 'Polarised actin cables', camera: { part: 'actin', dist: 1.3 }, blink: 'actin', ghost: ['actin', 'vesicle', 'bud', 'septin'],
        tags: ['cell:actin', 'cell:vesicle'], detail: 'actin-filament',
        links: [['cell:golgi', 'cell:bud', 'vesicle traffic', 'vesicle']], cues: [
        { id: 'fn.ch2.actin.01', text: 'Long [[actin cables|actin]] run from the bud tip down into the mother cell.' },
        { id: 'fn.ch2.actin.02', text: 'Myosin-V motors walk along them, hauling [[secretory vesicles|vesicle]] into the bud.' },
      ] },
    ] },
    { id: 'ch3', title: 'Closed mitosis & the nucleus', steps: [
      { id: 'nucleus', title: 'Nucleus & closed mitosis', camera: { part: 'nucleus', dist: 1.2 }, blink: 'nucleus', ghost: ['nucleus', 'spb'],
        tags: ['cell:nucleus', 'cell:spb'], detail: 'real-fungal-nucleus', cues: [
        { id: 'fn.ch3.nucleus.01', text: 'The [[yeast nucleus|nucleus]] has a surprise: its envelope never dissolves.' },
        { id: 'fn.ch3.nucleus.02', text: 'Fungi perform closed mitosis, dividing chromosomes inside an intact membrane.' },
      ] },
      { id: 'spb', title: 'Spindle pole body (SPB)', camera: { view: 'nucleus', dur: 2.6 }, blink: 'spb', ghost: false,
        tags: ['nucleus:spb', 'nucleus:env', 'nucleus:chromatin'], detail: 'spindle-pole-body', cues: [
        { id: 'fn.ch3.spb.01', text: 'Set right into the nuclear envelope is the [[spindle pole body|spb]].' },
        { id: 'fn.ch3.spb.02', text: 'Fungi have no centrioles: this three-plaque grommet takes their place.' },
        { id: 'fn.ch3.spb.03', text: 'It grows spindle microtubules inside and astral microtubules outside.' },
      ] },
      { id: 'chromatin', title: 'Rabl chromosomes & pores', camera: { view: 'nucleus' }, blink: 'chromatin', ghost: false,
        tags: ['nucleus:chromatin', 'nucleus:pore', 'nucleus:export'], detail: 'chromosome', cues: [
        { id: 'fn.ch3.chrom.01', text: 'Sixteen compact [[yeast chromosomes|chromatin]] tether their centromeres to the SPB.' },
        { id: 'fn.ch3.chrom.02', text: 'Finished [[mRNAs|mrna]] exit through nuclear pores into the cytoplasm.' },
      ] },
      { id: 'nucleolus', title: 'Crescent nucleolus', camera: { view: 'nucleolus', dur: 2.5 }, blink: 'nucleolus', ghost: false,
        tags: ['nucleolus:fc', 'nucleolus:tree', 'nucleolus:gc'], detail: 'real-fungal-nucleolus', cues: [
        { id: 'fn.ch3.nucl.01', text: 'Opposite the SPB, a single crescent [[nucleolus|nucleolus]] hugs the envelope.' },
        { id: 'fn.ch3.nucl.02', text: 'Here chromosome XII\'s rDNA repeats build new [[ribosomal subunits|rrna]].' },
      ] },
      { id: 'gene', title: 'Yeast Pol II reading a gene', camera: { view: 'DNA', dur: 2.8 }, blink: 'mrna', ghost: false,
        tags: ['DNA:pol2', 'DNA:nascent', 'DNA:dna', 'DNA:nuc'], detail: 'pol-ii', cues: [
        { id: 'fn.ch3.gene.01', text: 'Here [[RNA polymerase II|mrna]] reads a yeast gene between nucleosomes.' },
        { id: 'fn.ch3.gene.02', text: 'The famous crystal structure of Pol II (PDB 1I50) came from this very yeast.' },
      ] },
    ] },
    { id: 'ch4', title: 'Vacuole, ER & dispersed Golgi', steps: [
      { id: 'vacuole', title: 'Acidic vacuole & polyphosphate', camera: { part: 'vacuole', dist: 1.2 }, blink: 'vacuole', ghost: ['vacuole'],
        tags: ['cell:vacuole'], detail: 'central-vacuole', cues: [
        { id: 'fn.ch4.vac.01', text: 'Beside the nucleus swells the acidic [[fungal vacuole|vacuole]].' },
        { id: 'fn.ch4.vac.02', text: 'It acts as the yeast lysosome and stockpiles chains of polyphosphate.' },
      ] },
      { id: 'er', title: 'ER & Erg11 (azole target)', camera: { part: 'erg11', dist: 1.35 }, blink: 'erg11', ghost: ['er', 'erg11', 'lipid', 'nucleus'],
        tags: ['cell:er', 'cell:erg11', 'cell:lipid'], detail: 'erg11-real',
        links: [['cell:erg11', 'cell:membrane', 'ergosterol', 'erg11']], cues: [
        { id: 'fn.ch4.er.01', text: 'The [[endoplasmic reticulum|er]] wraps the nucleus and lines the cell cortex.' },
        { id: 'fn.ch4.er.02', text: 'Anchored in it is [[Erg11|erg11]], the cytochrome P450 that makes ergosterol.' },
        { id: 'fn.ch4.er.03', text: 'Azole antifungal medicines cure infections by blocking Erg11\'s heme iron.' },
      ] },
      { id: 'golgi', title: 'Dispersed Golgi cisternae', camera: { part: 'golgi', dist: 1.4 }, blink: 'golgi', ghost: ['golgi', 'vesicle', 'er'],
        tags: ['cell:golgi', 'cell:vesicle'], detail: 'golgi', cues: [
        { id: 'fn.ch4.golgi.01', text: 'Unlike animal cells, budding yeast does not stack its [[Golgi|golgi]].' },
        { id: 'fn.ch4.golgi.02', text: 'Single cisternae float through the cytosol, maturing from cis to trans.' },
      ] },
    ] },
    { id: 'ch5', title: 'Fermentation & respiration', steps: [
      { id: 'ferm', title: 'Alcoholic fermentation (Pdc1 & Adh1)', camera: { part: 'ferm', dist: 1.35 }, blink: 'ferm', ghost: ['ferm', 'cytosol'],
        tags: ['cell:ferm', 'cell:cytosol'], detail: 'pdc1-real',
        links: [['cell:cytosol', 'cell:ferm', 'pyruvate', 'cytosol']], cues: [
        { id: 'fn.ch5.ferm.01', text: 'When sugar is plentiful, yeast ferments glucose into ethanol and CO₂.' },
        { id: 'fn.ch5.ferm.02', text: '[[Pyruvate decarboxylase (Pdc1)|ferm]] splits pyruvate, releasing CO₂ gas.' },
        { id: 'fn.ch5.ferm.03', text: '[[Alcohol dehydrogenase (Adh1)|ferm]] then reduces acetaldehyde to ethanol.' },
      ] },
      { id: 'mito', title: 'Tubular mitochondria & peroxisomes', camera: { part: 'mito', dist: 1.25 }, blink: 'mito', ghost: ['mito', 'perox', 'lipid'],
        tags: ['cell:mito', 'cell:perox', 'cell:lipid'], detail: 'mitochondrion', cues: [
        { id: 'fn.ch5.mito.01', text: 'Branched [[tubular mitochondria|mito]] also burn pyruvate with oxygen for ATP.' },
        { id: 'fn.ch5.mito.02', text: 'Nearby, [[peroxisomes|perox]] oxidise fatty acids from [[lipid droplets|lipid]].' },
      ] },
      { id: 'finale', title: 'The living yeast cell', camera: { view: 'cell', orbit: 3, dur: 2.8 }, flow: true, ghost: false,
        tags: ['cell:wall', 'cell:bud', 'cell:septin', 'cell:nucleus', 'cell:vacuole', 'cell:ferm'], cues: [
        { id: 'fn.ch5.fin.01', text: 'Now watch all pathways run together: fermentation, respiration and budding.' },
        { id: 'fn.ch5.fin.02', text: 'Click any tag or keyword to dive into the 3D molecular structures.' },
      ] },
    ] },
  ],
  details: {
    'real-fungal-wall': { cues: [
      { id: 'fn.det.rwall.01', text: 'The yeast cell wall and cortex at true scale: 1 scene unit is 100 nanometres.' },
      { id: 'fn.det.rwall.02', text: 'Chitin fibrils, β-glucan chains and mannoproteins form a three-layer shield.' },
      { id: 'fn.det.rwall.03', text: 'Beneath the membrane sit Pma1 proton pumps, septin rods, Erg11, Pdc1 and Adh1.' },
    ] },
    'real-fungal-bud': { cues: [
      { id: 'fn.det.rbud.01', text: 'The mother–bud neck is ringed by an hourglass collar of septin filaments.' },
      { id: 'fn.det.rbud.02', text: 'Polarised actin cables guide secretory vesicles to expand the daughter bud.' },
      { id: 'fn.det.rbud.03', text: 'After mitosis, the actomyosin ring contracts and leaves a chitin bud scar.' },
    ] },
    'real-fungal-nucleus': { cues: [
      { id: 'fn.det.rnuc.01', text: 'Yeast undergoes closed mitosis: its nuclear envelope stays intact.' },
      { id: 'fn.det.rnuc.02', text: 'The spindle pole body (SPB) in the envelope nucleates spindle microtubules.' },
      { id: 'fn.det.rnuc.03', text: 'Sixteen chromosomes tether to the SPB, opposite the crescent nucleolus.' },
    ] },
    'real-fungal-nucleolus': { cues: [
      { id: 'fn.det.rnucl.01', text: 'A single crescent-shaped nucleolus caps one side of the yeast nucleus.' },
      { id: 'fn.det.rnucl.02', text: 'RNA polymerase I reads tandem rDNA repeats on chromosome XII into rRNA.' },
    ] },
    'real-fungal-dna': { cues: [
      { id: 'fn.det.rdna.01', text: 'Yeast RNA polymerase II (PDB 1I50) unwinds DNA to transcribe a gene.' },
      { id: 'fn.det.rdna.02', text: 'As the nascent mRNA emerges, proteins coat it for export through a pore.' },
    ] },
    'fungal-wall': { cues: [
      { id: 'fn.det.wall.01', text: 'Three layers: inner chitin fibrils, middle β-glucan mesh, outer mannoproteins.' },
      { id: 'fn.det.wall.02', text: 'Fks1 synthases spin β-1,3-glucan chains; echinocandin drugs block them.' },
    ] },
    'chitin-fibril': { cues: [
      { id: 'fn.det.chitin.01', text: 'Chitin is a β-1,4 chain of N-acetylglucosamine sugars flipped 180° each step.' },
      { id: 'fn.det.chitin.02', text: 'Hydrogen bonds between N-acetyl groups lock chains into tough α-chitin rods.' },
    ] },
    'bud-scar': { cues: [
      { id: 'fn.det.scar.01', text: 'A raised chitin ring left on the mother cell each time a daughter buds off.' },
      { id: 'fn.det.scar.02', text: 'Calcofluor White stains these chitin craters bright blue under UV light.' },
    ] },
    'spindle-pole-body': { cues: [
      { id: 'fn.det.spb.01', text: 'Three stacked protein plaques embedded right inside the nuclear envelope.' },
      { id: 'fn.det.spb.02', text: 'It nucleates intranuclear spindle microtubules and cytoplasmic astral ones.' },
    ] },
    'ergosterol': { cues: [
      { id: 'fn.det.erg.01', text: 'Fungal membranes use ergosterol instead of animal cholesterol.' },
      { id: 'fn.det.erg.02', text: 'Its conjugated B-ring double bonds turn into vitamin D₂ under UV light.' },
      { id: 'fn.det.erg.03', text: 'Amphotericin B and azole antifungals target ergosterol to kill fungal cells.' },
    ] },
    'pma1-real': { cues: [
      { id: 'fn.det.pma1.01', text: 'Pma1 (PDB 3B8C) is the P-type H⁺-ATPase proton pump of fungal membranes.' },
      { id: 'fn.det.pma1.02', text: 'Ten transmembrane helices pump protons out to power nutrient uptake.' },
    ] },
    'septin-real': { cues: [
      { id: 'fn.det.sep.01', text: 'A hexameric rod of GTP-binding septin proteins (PDB 2QAG).' },
      { id: 'fn.det.sep.02', text: 'Rods join end-to-end into filaments that form the bud-neck hourglass collar.' },
    ] },
    'erg11-real': { cues: [
      { id: 'fn.det.erg11.01', text: 'Yeast Erg11 (PDB 4LXJ) is a cytochrome P450 anchored in the ER membrane.' },
      { id: 'fn.det.erg11.02', text: 'Its heme iron demethylates lanosterol; fluconazole locks into this active site.' },
    ] },
    'exg1-real': { cues: [
      { id: 'fn.det.exg1.01', text: 'Exo-β-1,3-glucanase Exg1 (PDB 1EQC) folds into an eight-stranded TIM barrel.' },
      { id: 'fn.det.exg1.02', text: 'It clips β-1,3-glucan chains so the cell wall can expand at the bud tip.' },
    ] },
    'pdc1-real': { cues: [
      { id: 'fn.det.pdc1.01', text: 'Yeast Pyruvate Decarboxylase Pdc1 (PDB 1PYD) is a 240-kilodalton homotetramer.' },
      { id: 'fn.det.pdc1.02', text: 'Using vitamin B₁ (thiamine diphosphate), it splits pyruvate into CO₂ gas.' },
    ] },
    'adh1-real': { cues: [
      { id: 'fn.det.adh1.01', text: 'Yeast Alcohol Dehydrogenase Adh1 (PDB 4W6Z) is a zinc-containing tetramer.' },
      { id: 'fn.det.adh1.02', text: 'It reduces acetaldehyde to ethanol and regenerates NAD⁺ for glycolysis.' },
    ] },
  },
};
