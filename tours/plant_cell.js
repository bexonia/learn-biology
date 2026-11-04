// The guided tour of the realistic plant cell (leaf mesophyll cell), played by cell_explorer.html.
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
window.TOURS = window.TOURS || {};
window.TOURS.plant = {
  title: 'The plant cell: a guided tour',
  root: 'real-plant',
  page: 'plant_cell_realistic.html',
  view: 'cell',
  summary: 'From the cellulose cell wall, plasmodesmata and giant central vacuole to chloroplasts, true-scale thylakoid grana and photosynthesis. About eight minutes.',
  views: {
    cell: 'real-plant',
    focus: 'real-plant',
    nucleus: 'real-plant-nucleus',
    nucleolus: 'real-plant-nucleolus',
    DNA: 'real-plant-dna',
    chloroplast: 'real-chloroplast',
    thylakoid: 'real-thylakoid',
    wall: 'real-wall',
  },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'A leaf mesophyll cell', camera: { view: 'cell', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'pl.ch0.intro.01', text: 'This is a plant cell from the green inside of a leaf: a mesophyll cell.' },
        { id: 'pl.ch0.intro.02', text: 'It has three things animal cells never have: a cellulose wall, chloroplasts,' },
        { id: 'pl.ch0.intro.03', text: 'and a giant central vacuole that fills most of the cell\'s volume.' },
        { id: 'pl.ch0.intro.04', text: 'Two patches — a granum and a piece of the wall — are built at true size.' },
        { id: 'pl.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'Cell wall & plasmodesmata', steps: [
      { id: 'wall', title: 'Cellulose cell wall', camera: { part: 'wall', dist: 1.25 }, blink: 'wall', ghost: false, tags: ['cell:wall', 'cell:membrane'], detail: 'cell-wall', cues: [
        { id: 'pl.ch1.wall.01', text: 'Around the outside is a tough box: the [[cellulose cell wall|wall]].' },
        { id: 'pl.ch1.wall.02', text: 'Layers of cellulose cables sit in a gel of hemicellulose and pectin.' },
        { id: 'pl.ch1.wall.03', text: 'It holds the cell\'s shape and stops water pressure from bursting it.' },
      ] },
      { id: 'wallpatch', title: 'The wall at true molecular scale', camera: { view: 'wall', dur: 2.8 }, blink: 'csc', ghost: false,
        tags: ['wall:fibre', 'wall:csc', 'wall:aha', 'wall:pip', 'wall:mt'], detail: 'real-wall', cues: [
        { id: 'pl.ch1.patch.01', text: 'Up close at true size, [[cellulose microfibrils|wall]] cross in layers.' },
        { id: 'pl.ch1.patch.02', text: 'Six-lobed [[cellulose synthase rosettes|csc]] spin 18 chains into each cable.' },
        { id: 'pl.ch1.patch.03', text: '[[Cortical microtubules|mt]] just inside the membrane guide their path.' },
      ] },
      { id: 'pd', title: 'Plasmodesmata tunnels', camera: { part: 'pd', dist: 1.3 }, blink: 'pd', ghost: ['pd', 'wall', 'membrane', 'er'], tags: ['cell:pd'], detail: 'plasmodesma', cues: [
        { id: 'pl.ch1.pd.01', text: 'A rigid wall could isolate each cell, so plants bore [[plasmodesmata|pd]].' },
        { id: 'pl.ch1.pd.02', text: 'Each tunnel is lined by plasma membrane with a thin ER tube down the middle.' },
        { id: 'pl.ch1.pd.03', text: 'Water, sugars and signalling molecules pass straight to neighbour cells.' },
      ] },
    ] },
    { id: 'ch2', title: 'Central vacuole & streaming', steps: [
      { id: 'vacuole', title: 'Central vacuole (tonoplast)', camera: { part: 'vacuole', dist: 1.15 }, blink: 'vacuole', ghost: ['vacuole', 'strand'], tags: ['cell:vacuole', 'cell:strand'], detail: 'central-vacuole', cues: [
        { id: 'pl.ch2.vac.01', text: 'The huge water-filled sac in the middle is the [[central vacuole|vacuole]].' },
        { id: 'pl.ch2.vac.02', text: 'Water pushes outward against the wall, creating turgor pressure.' },
        { id: 'pl.ch2.vac.03', text: 'That pressure keeps leaves crisp and stems upright; wilting is its loss.' },
      ] },
      { id: 'actin', title: 'Transvacuolar strands & actin', camera: { part: 'actin', dist: 1.3 }, blink: 'actin', ghost: ['actin', 'strand', 'vacuole', 'golgi'], tags: ['cell:actin', 'cell:strand', 'cell:mt'], detail: 'actin-filament', cues: [
        { id: 'pl.ch2.actin.01', text: 'Thin [[transvacuolar strands|strand]] of cytoplasm bridge the vacuole.' },
        { id: 'pl.ch2.actin.02', text: 'Inside them run [[actin cables|actin]] that drive cytoplasmic streaming.' },
      ] },
    ] },
    { id: 'ch3', title: 'Chloroplasts & photosynthesis', steps: [
      { id: 'chloro', title: 'Chloroplasts', camera: { view: 'chloroplast', dur: 2.6 }, blink: 'chloro', ghost: false,
        tags: ['chloroplast:outer', 'chloroplast:inner', 'chloroplast:granum', 'chloroplast:starch', 'chloroplast:stroma'], detail: 'real-chloroplast', cues: [
        { id: 'pl.ch3.chl.01', text: 'Pressed against the sunlit wall lie the green [[chloroplasts|chloro]].' },
        { id: 'pl.ch3.chl.02', text: 'Like mitochondria, they descend from ancient bacteria and keep their own DNA.' },
        { id: 'pl.ch3.chl.03', text: 'Inside their double envelope, thylakoid discs stack into [[grana|thyl]].' },
      ] },
      { id: 'thyl', title: 'A granum at true molecular scale', camera: { view: 'thylakoid', dur: 2.8 }, blink: 'psii', ghost: false,
        tags: ['thylakoid:psii', 'thylakoid:lhcii', 'thylakoid:b6f', 'thylakoid:psi', 'thylakoid:catp'], detail: 'real-thylakoid', cues: [
        { id: 'pl.ch3.thyl.01', text: 'This granum is built at true size from real crystal structures.' },
        { id: 'pl.ch3.thyl.02', text: 'Flat pressed membranes pack [[Photosystem II|psii]] and [[LHCII antennae|psii]].' },
        { id: 'pl.ch3.thyl.03', text: 'Light splits water here, releasing the oxygen we breathe.' },
      ] },
      { id: 'psi_catp', title: 'Photosystem I & ATP synthase', camera: { view: 'thylakoid' }, blink: 'catp', ghost: false,
        tags: ['thylakoid:psi', 'thylakoid:catp', 'thylakoid:b6f', 'thylakoid:lumen'], detail: 'catp-real',
        links: [['thylakoid:psii', 'thylakoid:b6f', 'electrons', 'psii'], ['thylakoid:b6f', 'thylakoid:psi', 'plastocyanin', 'psi']], cues: [
        { id: 'pl.ch3.catp.01', text: '[[Cytochrome b6f|b6f]] hands electrons on to [[Photosystem I|psi]] to make NADPH.' },
        { id: 'pl.ch3.catp.02', text: 'Protons pumped into the narrow lumen spin [[ATP synthase|catp]] on the rims.' },
      ] },
      { id: 'rubisco', title: 'RuBisCO & starch grains', camera: { view: 'thylakoid' }, blink: 'rubisco', ghost: false,
        tags: ['thylakoid:rubisco', 'thylakoid:ribo', 'chloroplast:starch'], detail: 'rubisco-real', cues: [
        { id: 'pl.ch3.rub.01', text: 'Packing the stroma around the stacks is [[RuBisCO|rubisco]].' },
        { id: 'pl.ch3.rub.02', text: 'Using the ATP and NADPH, it fixes CO₂ from the air into sugar.' },
        { id: 'pl.ch3.rub.03', text: 'Surplus sugar is stored right inside the chloroplast as [[starch grains|starch]].' },
      ] },
    ] },
    { id: 'ch4', title: 'Mitochondria, peroxisomes & ER', steps: [
      { id: 'mito', title: 'Mitochondria & peroxisomes', camera: { part: 'mito', dist: 1.3 }, blink: 'mito', ghost: ['mito', 'perox', 'chloro'],
        tags: ['cell:mito', 'cell:perox'], detail: 'mitochondrion',
        links: [['cell:chloro', 'cell:mito', 'sugar', 'chloro']], cues: [
        { id: 'pl.ch4.mito.01', text: 'Plants need [[mitochondria|mito]] too, especially at night and in roots.' },
        { id: 'pl.ch4.mito.02', text: 'Beside them, [[peroxisomes|perox]] recycle by-products of photorespiration.' },
      ] },
      { id: 'golgi', title: 'Cortical ER & mobile Golgi stacks', camera: { part: 'golgi', dist: 1.35 }, blink: 'golgi', ghost: ['golgi', 'er', 'vesicle'],
        tags: ['cell:golgi', 'cell:er', 'cell:vesicle'], detail: 'golgi', cues: [
        { id: 'pl.ch4.golgi.01', text: 'A lacework of [[cortical ER|er]] hugs the plasma membrane.' },
        { id: 'pl.ch4.golgi.02', text: 'Dozens of [[Golgi stacks|golgi]] ride along the ER, making pectin and hemicellulose.' },
      ] },
    ] },
    { id: 'ch5', title: 'The plant nucleus', steps: [
      { id: 'nucleus', title: 'Nucleus & chromocenters', camera: { view: 'nucleus', dur: 2.6 }, blink: 'nucleus', ghost: false,
        tags: ['nucleus:env', 'nucleus:pore', 'nucleus:chromatin', 'nucleus:cc', 'nucleus:nucleolus'], detail: 'real-plant-nucleus', cues: [
        { id: 'pl.ch5.nuc.01', text: 'The [[plant nucleus|nucleus]] holds ten chromosomes (as in Arabidopsis).' },
        { id: 'pl.ch5.nuc.02', text: 'Dense [[chromocenters|chromatin]] knot the centromere repeats near the edge.' },
      ] },
      { id: 'nucleolus', title: 'Nucleolus & gene transcription', camera: { view: 'DNA', dur: 2.6 }, blink: 'mrna', ghost: false,
        tags: ['DNA:pol2', 'DNA:nascent', 'DNA:dna', 'DNA:nuc'], detail: 'real-plant-dna', cues: [
        { id: 'pl.ch5.dna.01', text: 'Inside a chromosome loop, [[RNA polymerase II|mrna]] copies a plant gene.' },
        { id: 'pl.ch5.dna.02', text: 'The mRNA travels out through a nuclear pore to the [[ribosomes|ribosome]].' },
      ] },
      { id: 'finale', title: 'Sunlight powering the cell', camera: { view: 'cell', orbit: 3, dur: 2.8 }, flow: true, ghost: false,
        tags: ['cell:wall', 'cell:vacuole', 'cell:chloro', 'cell:mito', 'cell:nucleus', 'cell:pd'], cues: [
        { id: 'pl.ch5.fin.01', text: 'Watch light drive the chloroplasts, feeding the whole cell and its neighbours.' },
        { id: 'pl.ch5.fin.02', text: 'Click any tag or keyword to explore the 3D molecular structures.' },
      ] },
    ] },
  ],
  details: {
    'real-wall': { cues: [
      { id: 'pl.det.rwall.01', text: 'The primary plant cell wall at true size: 250 nanometres thick.' },
      { id: 'pl.det.rwall.02', text: 'Cellulose synthase rosettes spin 3.6-nanometre microfibrils into the wall.' },
      { id: 'pl.det.rwall.03', text: 'AHA2 proton pumps acidify the wall so it can loosen and expand.' },
    ] },
    'real-chloroplast': { cues: [
      { id: 'pl.det.rchl.01', text: 'Inside a double envelope, thylakoid membranes stack into about 40 grana.' },
      { id: 'pl.det.rchl.02', text: 'Stroma lamellae link the stacks, surrounded by RuBisCO and starch grains.' },
    ] },
    'real-thylakoid': { cues: [
      { id: 'pl.det.rthyl.01', text: 'Twelve stacked thylakoid discs at true scale, with 9-nanometre lumens.' },
      { id: 'pl.det.rthyl.02', text: 'PSII and LHCII pack the tight pressed zones; PSI and ATP synthase sit outside.' },
    ] },
    'real-plant-nucleus': { cues: [
      { id: 'pl.det.rnuc.01', text: 'Ten chromosomes fold into territories around dark centromere chromocenters.' },
      { id: 'pl.det.rnuc.02', text: 'Finished mRNAs leave through nuclear pores to be translated in the cytosol.' },
    ] },
    'real-plant-nucleolus': { cues: [
      { id: 'pl.det.rnucl.01', text: 'Rows of RNA polymerase I read rDNA loops into "Christmas tree" transcripts.' },
      { id: 'pl.det.rnucl.02', text: 'Ribosomal proteins join the rRNA to build 40S and 60S subunits.' },
    ] },
    'real-plant-dna': { cues: [
      { id: 'pl.det.rdna.01', text: 'Nucleosomes clear so RNA polymerase II can unwind and copy a plant gene.' },
    ] },
    'psii-real': { cues: [
      { id: 'pl.det.psii.01', text: 'Spinach PSII–LHCII supercomplex (PDB 3JCU) with 206 green chlorophylls.' },
      { id: 'pl.det.psii.02', text: 'The oxygen-evolving complex on the lumen side splits water into O₂ and H⁺.' },
    ] },
    'lhcii-real': { cues: [
      { id: 'pl.det.lhcii.01', text: 'LHCII trimer (PDB 1RWT): the most abundant membrane protein on Earth.' },
      { id: 'pl.det.lhcii.02', text: 'Each subunit holds 14 chlorophylls that funnel sunlight to the reaction centre.' },
    ] },
    'b6f-real': { cues: [
      { id: 'pl.det.b6f.01', text: 'Cytochrome b6f dimer (PDB 6RQF): relays electrons and pumps protons.' },
    ] },
    'psi-real': { cues: [
      { id: 'pl.det.psi.01', text: 'Pea PSI–LHCI supercomplex (PDB 4XK8) with 155 chlorophylls.' },
      { id: 'pl.det.psi.02', text: 'Uses a second photon to hand high-energy electrons to ferredoxin for NADPH.' },
    ] },
    'catp-real': { cues: [
      { id: 'pl.det.catp.01', text: 'Spinach chloroplast ATP synthase (PDB 6FKF): a 14-subunit c-ring rotor.' },
      { id: 'pl.det.catp.02', text: 'Protons rushing out of the thylakoid lumen spin the stalk to make ATP.' },
    ] },
    'rubisco-real': { cues: [
      { id: 'pl.det.rub.01', text: 'Spinach RuBisCO (PDB 1RCX): eight large and eight small subunits.' },
      { id: 'pl.det.rub.02', text: 'Fixes carbon dioxide from the air into sugar in the Calvin cycle.' },
    ] },
    'cesa-real': { cues: [
      { id: 'pl.det.cesa.01', text: 'Six CESA8 trimers (PDB 6WLB) arranged into a 18-chain rosette.' },
      { id: 'pl.det.cesa.02', text: 'Uses cytoplasmic UDP-glucose to extrude a crystalline cellulose microfibril.' },
    ] },
    'aha-real': { cues: [
      { id: 'pl.det.aha.01', text: 'Arabidopsis H⁺-ATPase AHA2 (PDB 5KSD): pumps protons into the cell wall.' },
    ] },
    'pip-real': { cues: [
      { id: 'pl.det.pip.01', text: 'Spinach aquaporin SoPIP2;1 (PDB 1Z98): four single-file water channels.' },
    ] },
  },
};
