// The guided tour of the realistic SARS-CoV-2 coronavirus, played by cell_explorer.html (see docs/tutorial_mode_spec.md).
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
window.TOURS = window.TOURS || {};
window.TOURS.coronavirus = {
  title: 'SARS-CoV-2 Coronavirus: a guided tour',
  root: 'real-coronavirus',
  page: 'coronavirus_realistic.html',
  view: 'virion',
  summary: 'From the crown of Spike trimers and lipid envelope to the 30 kb RNA core, ACE2 receptor docking and the RdRp replicase machine. About six minutes.',
  views: { virion: 'real-coronavirus', focus: 'real-coronavirus', spike: 'real-cov-spike', rnp: 'real-cov-rnp', replication: 'real-cov-replication' },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'A crowned RNA virus', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'cov.ch0.intro.01', text: 'This is SARS-CoV-2, the betacoronavirus that causes COVID-19.' },
        { id: 'cov.ch0.intro.02', text: 'With its spikes it measures about 120 nanometres across.', say: 'With its spikes it measures about one hundred and twenty nanometres across.' },
        { id: 'cov.ch0.intro.03', text: 'We have cut open the virion and the human airway cell membrane below.' },
        { id: 'cov.ch0.intro.04', text: 'Every protein is built from real cryo-EM and crystal structures.' },
        { id: 'cov.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'The viral envelope', steps: [
      { id: 'spike', title: 'Spike (S) glycoprotein', camera: { part: 'spike', dist: 1.2 }, blink: 'spike', ghost: ['spike', 'membrane'], tags: ['virion:spike'], detail: 'cov-spike-real', cues: [
        { id: 'cov.ch1.spike.01', text: 'Club-shaped [[Spike (S) trimers|spike]] give the coronavirus its crown.' },
        { id: 'cov.ch1.spike.02', text: 'Each trimer has an S1 head that finds host receptors and an S2 fusion stalk.' },
        { id: 'cov.ch1.spike.03', text: 'A flexible hinge lets the spike sway as it scans the host cell surface.' },
      ] },
      { id: 'membrane', title: 'Lipid bilayer envelope', camera: { part: 'membrane', dist: 1.25 }, blink: 'membrane', ghost: ['membrane', 'mprot', 'spike'], tags: ['virion:membrane'], detail: 'phospholipid', cues: [
        { id: 'cov.ch1.mem.01', text: 'The outer shell is a [[lipid bilayer envelope|membrane]] stolen from the host.' },
        { id: 'cov.ch1.mem.02', text: 'Soap and alcohol dissolve this fatty layer, which disarms the virus.' },
      ] },
      { id: 'mprot', title: 'Membrane (M) protein lattice', camera: { part: 'mprot', dist: 1.25 }, blink: 'mprot', ghost: ['mprot', 'membrane'], tags: ['virion:mprot'], detail: 'protein', cues: [
        { id: 'cov.ch1.mprot.01', text: 'Thousands of [[Membrane (M) dimers|mprot]] tile the lipid bilayer.' },
        { id: 'cov.ch1.mprot.02', text: 'They curve the envelope into a sphere and anchor the RNA core inside.' },
      ] },
      { id: 'echan', title: 'Envelope (E) viroporin', camera: { part: 'echan', dist: 1.35 }, blink: 'echan', ghost: ['echan', 'membrane', 'mprot'], tags: ['virion:echan'], detail: 'cov-e-real', cues: [
        { id: 'cov.ch1.echan.01', text: 'Five α-helices bundle into the [[Envelope (E) viroporin|echan]] channel.' },
        { id: 'cov.ch1.echan.02', text: 'It leaks ions across host membranes to help new virions bud out.' },
      ] },
    ] },
    { id: 'ch2', title: 'The ribonucleoprotein core', steps: [
      { id: 'ncap', title: 'Nucleocapsid (N) oligomers', camera: { view: 'rnp' }, blink: 'ncap', ghost: false, tags: ['rnp:ncap', 'rnp:mprot'], detail: 'cov-n-real', cues: [
        { id: 'cov.ch2.ncap.01', text: 'Inside, 40 [[Nucleocapsid (N) oligomers|ncap]] pack the lumen like beads.' },
        { id: 'cov.ch2.ncap.02', text: 'Positively charged grooves on N grip the negatively charged RNA.' },
      ] },
      { id: 'rna', title: '29.9 kb (+)ssRNA genome', camera: { view: 'rnp' }, blink: 'rna', ghost: false, tags: ['rnp:rna', 'rnp:ncap'], detail: 'rna', cues: [
        { id: 'cov.ch2.rna.01', text: 'Wound through those beads is a 29,903-base [[(+)ssRNA genome|rna]].', say: 'Wound through those beads is a twenty-nine thousand nine hundred and three base positive single-stranded R N A genome.' },
        { id: 'cov.ch2.rna.02', text: 'It is one of the largest genomes of any RNA virus.' },
        { id: 'cov.ch2.rna.03', text: 'With a 5′ cap and 3′ poly-A tail, host ribosomes read it like host mRNA.' },
      ] },
    ] },
    { id: 'ch3', title: 'Docking & replication', steps: [
      { id: 'ace2', title: 'Docking onto host ACE2', camera: { view: 'spike' }, blink: 'ace2', ghost: false, tags: ['spike:spike', 'spike:ace2', 'spike:hostmem'], detail: 'ace2-real',
        links: [['spike:spike', 'spike:ace2', 'RBD grips α1 helix', 'spike'], ['spike:ace2', 'spike:hostmem', 'membrane fusion', 'ace2']], cues: [
        { id: 'cov.ch3.ace2.01', text: 'Below, a [[Spike RBD|spike]] flips up to clasp human [[ACE2|ace2]].' },
        { id: 'cov.ch3.ace2.02', text: 'Host protease TMPRSS2 then cuts the spike to unleash its fusion peptide.' },
        { id: 'cov.ch3.ace2.03', text: 'The viral and [[host membranes|hostmem]] fuse, releasing the RNA inside.' },
      ] },
      { id: 'rdrp', title: 'RdRp replicase complex', camera: { view: 'replication' }, blink: 'rdrp', ghost: false, tags: ['replication:rdrp', 'replication:rna'], detail: 'cov-rdrp-real', cues: [
        { id: 'cov.ch3.rdrp.01', text: 'In the cytoplasm, the virus builds its [[RdRp polymerase|rdrp]].' },
        { id: 'cov.ch3.rdrp.02', text: 'Catalytic subunit nsp12 is braced by nsp7 and two nsp8 sliding poles.' },
        { id: 'cov.ch3.rdrp.03', text: 'It copies the full [[viral genome|rna]] and makes subgenomic mRNAs.' },
      ] },
    ] },
    { id: 'ch4', title: 'Life cycle in motion', steps: [
      { id: 'flows', title: 'Molecules in motion', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, cues: [
        { id: 'cov.ch4.flows.01', text: 'Watch the signals and RNA strands move between virion and host.' },
      ] },
      { id: 'ace2sig', title: 'Entry & RNA release', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'ace2sig', cues: [
        { id: 'cov.ch4.sig.01', text: 'Binding at [[ACE2|ace2]] triggers [[Spike|spike]] fusion and uncoating.', blink: 'ace2' },
        { id: 'cov.ch4.sig.02', text: 'Released [[(+)ssRNA|rna]] travels straight to the [[RdRp replicase|rdrp]].', blink: 'rdrp' },
      ] },
      { id: 'sgrna', title: 'Subgenomic mRNA & N protein', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'sgrna', cues: [
        { id: 'cov.ch4.sg.01', text: '[[RdRp|rdrp]] transcribes nested subgenomic mRNAs for structural proteins.', blink: 'rdrp' },
        { id: 'cov.ch4.sg.02', text: 'New [[N oligomers|ncap]] and [[M dimers|mprot]] package fresh virions.', blink: 'ncap' },
      ] },
    ] },
    { id: 'ch5', title: 'Recap', steps: [
      { id: 'rollcall', title: 'Every part', camera: { view: 'virion', orbit: 6 }, ghost: false, cues: [
        { id: 'cov.ch5.roll.01', text: 'Spike (S) glycoprotein trimer', blink: 'spike', dur: 1.6 },
        { id: 'cov.ch5.roll.02', text: 'Viral lipid bilayer envelope', blink: 'membrane', dur: 1.6 },
        { id: 'cov.ch5.roll.03', text: 'Membrane (M) dimer lattice', blink: 'mprot', dur: 1.6 },
        { id: 'cov.ch5.roll.04', text: 'Envelope (E) viroporin pentamer', blink: 'echan', dur: 1.6 },
        { id: 'cov.ch5.roll.05', text: 'Nucleocapsid (N) RNP oligomers', blink: 'ncap', dur: 1.6 },
        { id: 'cov.ch5.roll.06', text: '29.9 kb (+)ssRNA genome', blink: 'rna', dur: 1.6 },
        { id: 'cov.ch5.roll.07', text: 'Host ACE2 receptor dimer', blink: 'ace2', dur: 1.6 },
        { id: 'cov.ch5.roll.08', text: 'Host respiratory cell membrane', blink: 'hostmem', dur: 1.6 },
        { id: 'cov.ch5.roll.09', text: 'RdRp replicase (nsp12–nsp7–nsp8)', blink: 'rdrp', dur: 1.6 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'cov.ch5.exp.01', text: 'Now explore SARS-CoV-2 on your own.' },
        { id: 'cov.ch5.exp.02', text: 'Click any tag to inspect its atomic structure from the Protein Data Bank.' },
      ] },
    ] },
  ],
  details: {
    'real-cov-spike': { cues: [
      { id: 'cov.det.rspk.01', text: 'One Spike RBD flips up to grip the N-terminal α1 helix of human ACE2.', blink: 'spike' },
      { id: 'cov.det.rspk.02', text: 'Protease cleavage at S2′ frees the fusion peptide to merge both bilayers.', blink: 'ace2' },
    ] },
    'real-cov-rnp': { cues: [
      { id: 'cov.det.rrnp.01', text: 'Forty Nucleocapsid (N) oligomers wrap the 29.9 kb (+)ssRNA into a coil.', blink: 'ncap' },
      { id: 'cov.det.rrnp.02', text: 'C-terminal tails of M dimers tether the RNP complex to the envelope.', blink: 'rna' },
    ] },
    'real-cov-replication': { cues: [
      { id: 'cov.det.rrep.01', text: 'The RdRp holoenzyme (PDB 6M71) pairs catalytic nsp12 with nsp7 and 2×nsp8.', blink: 'rdrp' },
      { id: 'cov.det.rrep.02', text: 'Two α-helical nsp8 poles act as sliding clamps along the 30 kb RNA.', blink: 'rna' },
    ] },
    'coronavirus': { cues: [
      { id: 'cov.det.sch.01', text: 'Isolated cutaway of SARS-CoV-2: lipid bilayer, M dimers and E channels.' },
      { id: 'cov.det.sch.02', text: 'Club-shaped Spike trimers crown the surface; N oligomers coil the RNA.' },
    ] },
    'cov-spike-real': { cues: [
      { id: 'cov.det.spk.01', text: 'Cryo-EM structure of the prefusion SARS-CoV-2 Spike homotrimer (PDB 6VXX).' },
      { id: 'cov.det.spk.02', text: 'Top S1 domains recognise ACE2; the lower S2 stalk drives membrane fusion.' },
    ] },
    'cov-e-real': { cues: [
      { id: 'cov.det.e.01', text: 'Solid-state NMR structure of the pentameric Envelope viroporin (PDB 5X29).' },
      { id: 'cov.det.e.02', text: 'Five transmembrane α-helices form a cation pore across host membranes.' },
    ] },
    'cov-n-real': { cues: [
      { id: 'cov.det.n.01', text: 'Crystal structure of the Nucleocapsid RNA-binding oligomer (PDB 6VYO).' },
      { id: 'cov.det.n.02', text: 'Basic β-hairpin fingers clasp the viral (+)ssRNA into helical RNP beads.' },
    ] },
    'cov-rdrp-real': { cues: [
      { id: 'cov.det.rdrp.01', text: 'Cryo-EM structure of the RdRp replicase complex (nsp12–7–8, PDB 6M71).' },
      { id: 'cov.det.rdrp.02', text: 'nsp12 copies the RNA while two nsp8 sliding poles prevent early drop-off.' },
    ] },
    'ace2-real': { cues: [
      { id: 'cov.det.ace2.01', text: 'Crystal structure of the human ACE2 metallopeptidase ectodomain (PDB 1R42).' },
      { id: 'cov.det.ace2.02', text: 'Its top α1 helix is the exact ridge gripped by the SARS-CoV-2 Spike RBD.' },
    ] },
  },
};
