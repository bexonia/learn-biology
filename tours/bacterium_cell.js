// The guided tour of the realistic bacterium (Escherichia coli), played by cell_explorer.html.
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
window.TOURS = window.TOURS || {};
window.TOURS.bacterium = {
  title: 'The bacterium (E. coli): a guided tour',
  root: 'real-bacterium',
  page: 'prokaryote_cell_realistic.html',
  view: 'cell',
  summary: 'From the three-layered Gram-negative envelope, rotary flagellar motor and chemoreceptor nose to the supercoiled nucleoid, replication fork and coupled translation. About eight minutes.',
  views: {
    cell: 'real-bacterium',
    focus: 'real-bacterium',
    envelope: 'real-envelope',
    motor: 'real-motor',
    pole: 'real-pole',
    nucleoid: 'real-nucleoid',
    gene: 'real-gene',
    fork: 'real-fork',
  },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'Escherichia coli at true scale', camera: { view: 'cell', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'ec.ch0.intro.01', text: 'This is Escherichia coli, a rod-shaped bacterium that lives in your gut.' },
        { id: 'ec.ch0.intro.02', text: 'Everything here is drawn at one true scale: 1 scene unit is 100 nanometres.' },
        { id: 'ec.ch0.intro.03', text: 'As a prokaryote, it has no nucleus and no membrane-bound organelles.' },
        { id: 'ec.ch0.intro.04', text: 'Yet its 4.6-million-base-pair chromosome and machines are finely ordered.' },
        { id: 'ec.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'The Gram-negative envelope', steps: [
      { id: 'envelope', title: 'Three-layered cell envelope', camera: { view: 'envelope', dur: 2.6 }, blink: 'om', ghost: false,
        tags: ['envelope:lps', 'envelope:porin', 'envelope:pg', 'envelope:im'], detail: 'real-envelope', cues: [
        { id: 'ec.ch1.env.01', text: 'E. coli is a Gram-negative bacterium with a three-layer armour.' },
        { id: 'ec.ch1.env.02', text: 'Outside is the [[outer membrane|om]], coated in [[LPS sugar chains|om]].' },
        { id: 'ec.ch1.env.03', text: 'Trimeric [[OmpF porins|porin]] punch water-filled holes for small nutrients.' },
      ] },
      { id: 'pg_pump', title: 'Peptidoglycan & AcrAB–TolC pump', camera: { view: 'envelope' }, blink: 'pump', ghost: false,
        tags: ['envelope:pg', 'envelope:lpp', 'envelope:pump', 'envelope:bam'], detail: 'acrab-tolc', cues: [
        { id: 'ec.ch1.pump.01', text: 'In the periplasm sits a mesh of [[peptidoglycan|pg]] tied down by Lpp.' },
        { id: 'ec.ch1.pump.02', text: 'Spanning all three layers is the [[AcrAB–TolC efflux pump|pump]].' },
        { id: 'ec.ch1.pump.03', text: 'Powered by protons, it ejects antibiotics straight out of the cell.' },
      ] },
      { id: 'etc_atps', title: 'Respiration & ATP synthase', camera: { view: 'envelope' }, blink: 'atps', ghost: false,
        tags: ['envelope:im', 'envelope:etc', 'envelope:atps', 'envelope:transport'], detail: 'atp-synthase-ecoli',
        links: [['envelope:etc', 'envelope:atps', 'protons (H⁺)', 'etc']], cues: [
        { id: 'ec.ch1.atps.01', text: 'With no mitochondria, E. coli makes its energy in the [[inner membrane|im]].' },
        { id: 'ec.ch1.atps.02', text: 'The [[respiratory chain (Complex I)|etc]] pumps protons out into the periplasm.' },
        { id: 'ec.ch1.atps.03', text: 'Protons flowing back in spin [[ATP synthase|atps]] to make ATP.' },
      ] },
    ] },
    { id: 'ch2', title: 'Swimming & chemotaxis', steps: [
      { id: 'motor', title: 'Rotary flagellar motor', camera: { view: 'motor', dur: 2.6 }, blink: 'flag', ghost: false,
        tags: ['motor:cring', 'motor:stator', 'motor:ms', 'motor:pring', 'motor:lring', 'motor:hook'], detail: 'real-motor', cues: [
        { id: 'ec.ch2.mot.01', text: 'Each [[flagellum|flag]] is spun by a 45-nanometre rotary motor in the wall.' },
        { id: 'ec.ch2.mot.02', text: 'Protons flowing through [[MotA/MotB stators|flag]] spin the rotor 100 times/s.' },
        { id: 'ec.ch2.mot.03', text: 'When the [[C ring|flag]] reverses spin, the bundle flies apart and tumbles.' },
      ] },
      { id: 'pole', title: 'Chemoreceptor array (the cell\'s nose)', camera: { view: 'pole', dur: 2.6 }, blink: 'chemo', ghost: false,
        tags: ['pole:mcp', 'pole:chea', 'pole:peri', 'pole:im'], detail: 'real-pole', cues: [
        { id: 'ec.ch2.pole.01', text: 'At one pole, thousands of [[chemoreceptors|chemo]] pack into a honeycomb.' },
        { id: 'ec.ch2.pole.02', text: 'They taste sugars and amino acids in the periplasm.' },
        { id: 'ec.ch2.pole.03', text: 'Inside, [[CheA kinases|chemo]] signal the flagellar motors when to tumble.' },
      ] },
      { id: 'pili', title: 'Pili (fimbriae)', camera: { part: 'pili', dist: 1.25 }, blink: 'pili', ghost: ['pili', 'om'],
        tags: ['cell:pili'], detail: 'pilus', cues: [
        { id: 'ec.ch2.pili.01', text: 'Sticking out all round the cell are hair-like [[pili|pili]].' },
        { id: 'ec.ch2.pili.02', text: 'Their sticky tips grip host surfaces so the bacterium is not washed away.' },
      ] },
    ] },
    { id: 'ch3', title: 'The nucleoid & replication fork', steps: [
      { id: 'nucleoid', title: 'Supercoiled nucleoid', camera: { view: 'nucleoid', dur: 2.6 }, blink: 'dna', ghost: false,
        tags: ['nucleoid:dna', 'nucleoid:hu', 'nucleoid:gyr', 'nucleoid:fis'], detail: 'real-nucleoid', cues: [
        { id: 'ec.ch3.nuc.01', text: 'In the middle sits the [[nucleoid|dna]]: 4.6 million base pairs of circular DNA.' },
        { id: 'ec.ch3.nuc.02', text: 'Stretched out it is 1.6 millimetres long, 800 times the length of the cell.' },
        { id: 'ec.ch3.nuc.03', text: '[[DNA gyrase|hu]] twists it into plectonemes, and [[HU proteins|hu]] bend it.' },
      ] },
      { id: 'fork', title: 'Replication fork (replisome)', camera: { view: 'fork', dur: 2.8 }, blink: 'fork', ghost: false,
        tags: ['fork:parent', 'fork:dnab', 'fork:polL', 'fork:polG', 'fork:okazaki', 'fork:ssb'], detail: 'real-fork', cues: [
        { id: 'ec.ch3.fork.01', text: 'Here a [[replication fork|fork]] is copying the chromosome at 1,000 bases/s.' },
        { id: 'ec.ch3.fork.02', text: '[[DnaB helicase|fork]] unwinds the parent helix while [[Pol III|fork]] copies both strands.' },
        { id: 'ec.ch3.fork.03', text: 'The lagging strand loops out in [[Okazaki fragments|dna]], guarded by SSB.' },
      ] },
    ] },
    { id: 'ch4', title: 'Coupled transcription & translation', steps: [
      { id: 'gene', title: 'A gene read & translated at once', camera: { view: 'gene', dur: 2.8 }, blink: 'mrna', ghost: false,
        tags: ['gene:rnap', 'gene:mrna', 'gene:ribosome', 'gene:peptide', 'gene:dna'], detail: 'real-gene', cues: [
        { id: 'ec.ch4.gene.01', text: 'With no nuclear membrane, transcription and translation happen together.' },
        { id: 'ec.ch4.gene.02', text: '[[RNA polymerase|rnap]] copies DNA into [[mRNA|mrna]].' },
        { id: 'ec.ch4.gene.03', text: '[[70S ribosomes|ribosome]] jump onto the mRNA before it is even finished.' },
      ] },
      { id: 'cyto', title: 'Ribosomes, GroEL & glycogen', camera: { view: 'nucleoid' }, blink: 'cyto', ghost: false,
        tags: ['nucleoid:ribosome', 'nucleoid:cyto', 'cell:glycogen'], detail: 'groel', cues: [
        { id: 'ec.ch4.cyto.01', text: 'Barrel-shaped [[GroEL–GroES chaperonins|cyto]] help new proteins fold.' },
        { id: 'ec.ch4.cyto.02', text: 'At the poles, [[glycogen granules|glycogen]] store glucose for lean times.' },
      ] },
      { id: 'finale', title: 'The living bacterium', camera: { view: 'cell', orbit: 3, dur: 2.8 }, flow: true, ghost: false,
        tags: ['cell:om', 'cell:atps', 'cell:flag', 'cell:chemo', 'cell:dna', 'cell:ribosome'], cues: [
        { id: 'ec.ch4.fin.01', text: 'Proton power, DNA replication and protein synthesis all run at once.' },
        { id: 'ec.ch4.fin.02', text: 'Click any tag or keyword to inspect the real PDB structures up close.' },
      ] },
    ] },
  ],
  details: {
    'real-envelope': { cues: [
      { id: 'ec.det.env.01', text: 'The Gram-negative envelope: outer LPS membrane, peptidoglycan, inner membrane.' },
      { id: 'ec.det.env.02', text: 'OmpF porins let small molecules in; AcrAB–TolC pumps antibiotics out.' },
    ] },
    'real-motor': { cues: [
      { id: 'ec.det.mot.01', text: 'A 45-nanometre proton-driven rotary motor spanning all three envelope layers.' },
      { id: 'ec.det.mot.02', text: 'MotA/MotB stators turn the MS and C rings up to 100 revolutions a second.' },
    ] },
    'real-pole': { cues: [
      { id: 'ec.det.pole.01', text: 'Thousands of chemoreceptor trimers-of-dimers form a hexagonal sensory array.' },
      { id: 'ec.det.pole.02', text: 'CheA kinase phosphorylation controls whether the flagella run or tumble.' },
    ] },
    'real-nucleoid': { cues: [
      { id: 'ec.det.nuc.01', text: 'The 4.6-megabase circular chromosome folded into supercoiled plectoneme loops.' },
      { id: 'ec.det.nuc.02', text: 'HU, Fis and DNA gyrase compact the DNA without eukaryotic histones.' },
    ] },
    'real-gene': { cues: [
      { id: 'ec.det.gene.01', text: 'Coupled transcription–translation at true scale (1 bead per residue).' },
      { id: 'ec.det.gene.02', text: 'A train of 70S ribosomes translates the nascent mRNA right behind RNAP.' },
    ] },
    'real-fork': { cues: [
      { id: 'ec.det.fork.01', text: 'The E. coli replisome: DnaB helicase, DnaG primase, and two Pol III cores.' },
      { id: 'ec.det.fork.02', text: 'The leading strand is copied continuously; the lagging strand in fragments.' },
    ] },
    'ribosome-ecoli': { cues: [
      { id: 'ec.det.ribo.01', text: 'Real E. coli 70S ribosome (PDB 4YBB): 30S small and 50S large subunits.' },
      { id: 'ec.det.ribo.02', text: 'Many clinical antibiotics bind this bacterial ribosome while sparing ours.' },
    ] },
    'rnap-ecoli': { cues: [
      { id: 'ec.det.rnap.01', text: 'Bacterial RNA polymerase holoenzyme (PDB 4YG2) with σ70 initiation factor.' },
    ] },
    'groel': { cues: [
      { id: 'ec.det.groel.01', text: 'GroEL–GroES chaperonin cage (PDB 1AON): two 7-membered rings plus a lid.' },
      { id: 'ec.det.groel.02', text: 'Gives misfolded proteins a private ATP-timed chamber in which to fold.' },
    ] },
    'hu-protein': { cues: [
      { id: 'ec.det.hu.01', text: 'Nucleoid-associated protein HU (PDB 1MUL): two β-arms bend the DNA helix.' },
    ] },
    'chemoreceptor': { cues: [
      { id: 'ec.det.mcp.01', text: 'Methyl-accepting chemotaxis protein (PDB 1QU7): a long four-helix coiled coil.' },
    ] },
    'atp-synthase-ecoli': { cues: [
      { id: 'ec.det.atps.01', text: 'E. coli F₁F₀ ATP synthase (PDB 6OQR): protons spin the c-ring and γ stalk.' },
    ] },
    'complex-i-ecoli': { cues: [
      { id: 'ec.det.nuo.01', text: 'Respiratory Complex I (NADH dehydrogenase, PDB 7NYR): 13 subunits in an L.' },
      { id: 'ec.det.nuo.02', text: 'Transfers electrons from NADH to quinone and pumps four protons out.' },
    ] },
    'acrab-tolc': { cues: [
      { id: 'ec.det.pump.01', text: 'Tripartite multidrug efflux pump AcrAB–TolC (PDB 5O66), 33 nanometres tall.' },
      { id: 'ec.det.pump.02', text: 'Uses the proton gradient to expel antibiotics across both membranes.' },
    ] },
    'dnab-helicase': { cues: [
      { id: 'ec.det.dnab.01', text: 'Replicative helicase DnaB (PDB 6QEL): a hexameric ring that unwinds DNA.' },
    ] },
    'pol3-ecoli': { cues: [
      { id: 'ec.det.pol3.01', text: 'DNA polymerase III core + β sliding clamp (PDB 5FKV) copying DNA.' },
    ] },
    'gyrase': { cues: [
      { id: 'ec.det.gyr.01', text: 'DNA gyrase (PDB 6RKW): introduces negative supercoils; target of ciprofloxacin.' },
    ] },
  },
};
