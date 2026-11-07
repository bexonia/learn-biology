// The guided tour of the realistic bacteriophage T4, played by cell_explorer.html (see docs/tutorial_mode_spec.md).
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
window.TOURS = window.TOURS || {};
window.TOURS.bacteriophage = {
  title: 'Bacteriophage T4: a guided tour',
  root: 'real-phage',
  page: 'bacteriophage_realistic.html',
  view: 'phage',
  summary: 'From the DNA-packed head and spring-loaded tail down to the needle puncturing E. coli and hijacking its ribosomes. About seven minutes.',
  views: { phage: 'real-phage', focus: 'real-phage', capsid: 'real-phage-capsid', tail: 'real-phage-tail', baseplate: 'real-phage-baseplate' },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'A bacterial predator', camera: { view: 'phage', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 't4.ch0.intro.01', text: 'This is bacteriophage T4, a virus that hunts Escherichia coli bacteria.' },
        { id: 't4.ch0.intro.02', text: 'It stands about 200 nanometres tall: a lunar-lander syringe built of protein.', say: 'It stands about two hundred nanometres tall: a lunar-lander syringe built of protein.' },
        { id: 't4.ch0.intro.03', text: 'We have cut open its head, tail and the bacterial envelope below.' },
        { id: 't4.ch0.intro.04', text: 'Every major part is drawn from real atomic coordinates at one scale.' },
        { id: 't4.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'The capsid head', steps: [
      { id: 'capsid', title: 'Prolate icosahedral shell', camera: { part: 'capsid', dist: 1.25 }, blink: 'capsid', ghost: ['capsid', 'soc', 'vertex'], tags: ['phage:capsid'], detail: 'real-phage-capsid', cues: [
        { id: 't4.ch1.capsid.01', text: 'The elongated head is the [[capsid|capsid]], 115 by 85 nanometres across.', say: 'The elongated head is the capsid, one hundred and fifteen by eighty-five nanometres across.' },
        { id: 't4.ch1.capsid.02', text: 'Its wall is tiled by 155 hexamers of major capsid protein gp23*.' },
        { id: 't4.ch1.capsid.03', text: 'It withstands 500 atmospheres of internal DNA pressure without bursting.' },
      ] },
      { id: 'soc', title: 'Soc clamps & Hoc spikes', camera: { view: 'capsid' }, blink: 'soc', ghost: false, tags: ['capsid:capsid', 'capsid:soc', 'capsid:hoc'], detail: 'gp23-real', cues: [
        { id: 't4.ch1.soc.01', text: 'Up close, [[Soc clamp trimers|soc]] strap neighbouring gp23* hexamers together.' },
        { id: 't4.ch1.soc.02', text: 'They lock the shell against extreme pH and osmotic shock.' },
        { id: 't4.ch1.soc.03', text: 'A single [[Hoc spike|soc]] sticks out from the centre of each hexamer.' },
      ] },
      { id: 'vertex', title: 'Pentameric vertices', camera: { part: 'vertex', dist: 1.3 }, blink: 'vertex', ghost: ['vertex', 'capsid'], tags: ['phage:vertex'], detail: 'gp24-real', cues: [
        { id: 't4.ch1.vertex.01', text: 'Flat hexagons alone cannot close a sphere or a prolate dome.' },
        { id: 't4.ch1.vertex.02', text: 'Eleven corners are sealed by five-fold [[gp24* pentamers|vertex]].' },
      ] },
      { id: 'dna', title: 'Pressurised dsDNA spool', camera: { view: 'capsid' }, blink: 'dna', ghost: false, tags: ['capsid:dnaOut', 'capsid:dnaIn'], detail: 'dna', cues: [
        { id: 't4.ch1.dna.01', text: 'Inside coils 169 kilobase pairs of [[double-stranded DNA|dna]].', say: 'Inside coils one hundred and sixty-nine kilobase pairs of double-stranded D N A.' },
        { id: 't4.ch1.dna.02', text: 'Stretched out it is 57 micrometres long, 280 times the virion\'s height.' },
        { id: 't4.ch1.dna.03', text: 'Modified cytosines protect this genome from bacterial restriction enzymes.' },
      ] },
      { id: 'core', title: 'Internal core & IPI* proteins', camera: { part: 'core', dist: 1.35 }, blink: 'core', ghost: ['core', 'dna', 'portal'], tags: ['capsid:core'], detail: 'real-phage-capsid', cues: [
        { id: 't4.ch1.core.01', text: 'At the centre of the DNA spool sits the [[internal protein core|core]].' },
        { id: 't4.ch1.core.02', text: 'Its IPI* defense proteins shoot into the host right alongside the DNA.' },
      ] },
      { id: 'portal', title: 'Portal dodecamer (gp20)', camera: { part: 'portal', dist: 1.3 }, blink: 'portal', ghost: ['portal', 'capsid', 'collar'], tags: ['phage:portal'], detail: 'gp20-real', cues: [
        { id: 't4.ch1.portal.01', text: 'The twelfth vertex at the base holds the 12-subunit [[gp20 portal|portal]].' },
        { id: 't4.ch1.portal.02', text: 'During assembly, an ATP motor docks here to pump the genome inside.' },
        { id: 't4.ch1.portal.03', text: 'Once full, it acts as a one-way valve into the tail.' },
      ] },
    ] },
    { id: 'ch2', title: 'The contractile tail', steps: [
      { id: 'collar', title: 'Collar & fibritin whiskers', camera: { part: 'collar', dist: 1.3 }, blink: 'collar', ghost: ['collar', 'portal', 'sheath'], tags: ['phage:collar'], detail: 'real-phage-tail', cues: [
        { id: 't4.ch2.collar.01', text: 'Below the portal sit the neck rings and the [[collar with six whiskers|collar]].' },
        { id: 't4.ch2.collar.02', text: 'Built of fibritin (gpWac), the whiskers fold the long tail fibers inward.' },
        { id: 't4.ch2.collar.03', text: 'When conditions favour infection, they release the fibers to search.' },
      ] },
      { id: 'sheath', title: 'Contractile sheath (gp18)', camera: { view: 'tail' }, blink: 'sheath', ghost: false, tags: ['tail:sheathTop', 'tail:sheathMid', 'tail:whisker'], detail: 'gp18-real', cues: [
        { id: 't4.ch2.sheath.01', text: 'The outer [[contractile sheath|sheath]] stacks 24 rings of six gp18 proteins.' },
        { id: 't4.ch2.sheath.02', text: 'It is cocked like a loaded spring during virus assembly.' },
        { id: 't4.ch2.sheath.03', text: 'When triggered, its rings slide and twist, shrinking the sheath by half.' },
      ] },
      { id: 'tube', title: 'Inner tail tube (gp19)', camera: { view: 'tail' }, blink: 'tube', ghost: false, tags: ['tail:tube', 'tail:dna', 'tail:portal'], detail: 'gp19-real', cues: [
        { id: 't4.ch2.tube.01', text: 'Inside the sheath runs the rigid [[gp19 inner tail tube|tube]].' },
        { id: 't4.ch2.tube.02', text: 'Sheath contraction drives this 9-nanometre cylinder through the cell wall.' },
        { id: 't4.ch2.tube.03', text: 'Its smooth 4-nanometre bore is the barrel through which [[DNA|dna]] fires.' },
      ] },
    ] },
    { id: 'ch3', title: 'Baseplate & fibers', steps: [
      { id: 'ltf', title: 'Long tail fibers (gp34–gp37)', camera: { part: 'ltf', dist: 1.15 }, blink: 'ltf', ghost: ['ltf', 'baseplate', 'porin', 'om'], tags: ['phage:ltf', 'phage:porin'], detail: 'phage-fiber', cues: [
        { id: 't4.ch3.ltf.01', text: 'Six hinged [[long tail fibers|ltf]] span 145 nanometres as sensor legs.' },
        { id: 't4.ch3.ltf.02', text: 'They walk across the bacterium until their gp37 tips find [[OmpF porins|porin]].' },
        { id: 't4.ch3.ltf.03', text: 'Binding sends a mechanical tug straight up to the baseplate.' },
      ] },
      { id: 'baseplate', title: 'Hexagonal baseplate', camera: { view: 'baseplate' }, blink: 'baseplate', ghost: false, tags: ['baseplate:wedge', 'baseplate:ltfTip', 'baseplate:porin'], detail: 'real-phage-baseplate', cues: [
        { id: 't4.ch3.baseplate.01', text: 'The [[hexagonal baseplate|baseplate]] is the nerve centre of the phage.' },
        { id: 't4.ch3.baseplate.02', text: 'Pulling on the fibers flips its six wedges from a dome into a flat star.' },
        { id: 't4.ch3.baseplate.03', text: 'That conformational snap unleashes the contractile sheath above.' },
      ] },
      { id: 'stf', title: 'Short tail fibers (gp12)', camera: { view: 'baseplate' }, blink: 'stf', ghost: false, tags: ['baseplate:stf', 'baseplate:lps'], detail: 'gp12-real', cues: [
        { id: 't4.ch3.stf.01', text: 'As the baseplate opens, six [[short tail fibers (gp12)|stf]] unfold.' },
        { id: 't4.ch3.stf.02', text: 'Their zinc-braced heads clamp irreversibly onto host [[LPS sugars|om]].' },
        { id: 't4.ch3.stf.03', text: 'Now the phage is bolted down against the recoil of puncture.' },
      ] },
      { id: 'needle', title: 'Puncturing needle & lysozyme', camera: { view: 'baseplate' }, blink: 'needle', ghost: false, tags: ['baseplate:hub', 'baseplate:needle', 'baseplate:lyso'], detail: 'gp5-real',
        links: [['baseplate:ltfTip', 'baseplate:wedge', 'trigger signal', 'ltf'], ['baseplate:needle', 'baseplate:pg', 'wall breach', 'needle']], cues: [
        { id: 't4.ch3.needle.01', text: 'At the centre sits the [[gp27–gp5 puncturing needle|needle]], sharp as a lance.' },
        { id: 't4.ch3.needle.02', text: 'Its triple β-helix tip pierces the outer membrane.' },
        { id: 't4.ch3.needle.03', text: 'Three T4 lysozyme blades then chew a hole through the [[peptidoglycan|pg]].' },
      ] },
    ] },
    { id: 'ch4', title: 'Host invasion', steps: [
      { id: 'envelope', title: 'Host E. coli envelope', camera: { part: 'om', dist: 1.2 }, blink: 'om', ghost: ['om', 'porin', 'pg', 'im', 'needle', 'tube'], tags: ['phage:om', 'phage:pg', 'phage:im'], detail: 'real-envelope', cues: [
        { id: 't4.ch4.envelope.01', text: 'E. coli defends itself with a three-layered cell envelope.' },
        { id: 't4.ch4.envelope.02', text: 'Outside is the [[LPS outer membrane|om]] studded with [[OmpF porins|porin]].' },
        { id: 't4.ch4.envelope.03', text: 'Beneath lie the [[peptidoglycan wall|pg]] and the [[inner membrane|im]].' },
      ] },
      { id: 'rnap', title: 'Hijacked RNA polymerase', camera: { part: 'rnap', dist: 1.35 }, blink: 'rnap', ghost: ['rnap', 'dna', 'im', 'ribosome'], tags: ['phage:inject', 'phage:rnap'], detail: 'rnap-ecoli', cues: [
        { id: 't4.ch4.rnap.01', text: 'Once the tube reaches the inner membrane, [[viral DNA|dna]] jets into the cell.' },
        { id: 't4.ch4.rnap.02', text: 'Within seconds it hijacks host [[RNA polymerase|rnap]] to read early phage genes.' },
      ] },
      { id: 'ribosome', title: 'Host 70S ribosomes', camera: { part: 'ribosome', dist: 1.35 }, blink: 'ribosome', ghost: ['ribosome', 'rnap', 'im'], tags: ['phage:ribosome'], detail: 'ribosome-ecoli', cues: [
        { id: 't4.ch4.ribosome.01', text: 'Host [[70S ribosomes|ribosome]] translate that viral mRNA into phage proteins.' },
        { id: 't4.ch4.ribosome.02', text: 'In 25 minutes at 37 °C, the cell bursts, releasing over 100 new phages.', say: 'In twenty-five minutes at thirty-seven degrees Celsius, the cell bursts, releasing over a hundred new phages.' },
      ] },
    ] },
    { id: 'ch5', title: 'Infection in motion', steps: [
      { id: 'flows', title: 'Cascade of infection', camera: { view: 'phage', orbit: 2 }, flow: true, ghost: false, cues: [
        { id: 't4.ch5.flows.01', text: 'Watch the whole infection cascade unfold in real time.' },
        { id: 't4.ch5.flows.02', text: 'Each molecular signal triggers the next step from tip to cytoplasm.' },
      ] },
      { id: 'signal', title: 'Trigger & wall lysis', camera: { view: 'baseplate', orbit: 2 }, flow: true, ghost: false, follow: 'signal', cues: [
        { id: 't4.ch5.signal.01', text: 'Porin binding sends a trigger wave from the [[long fibers|ltf]] to the [[baseplate|baseplate]].', blink: 'ltf' },
        { id: 't4.ch5.signal.02', text: 'The [[lysozyme needle|needle]] digests peptidoglycan, releasing muropeptides.', blink: 'needle' },
      ] },
      { id: 'vdna', title: 'Genome & IPI* injection', camera: { view: 'phage', orbit: 2 }, flow: true, ghost: false, follow: 'vdna', cues: [
        { id: 't4.ch5.vdna.01', text: 'Capsid pressure drives [[viral dsDNA|dna]] down the [[portal|portal]] and [[tail tube|tube]].', blink: 'tube' },
        { id: 't4.ch5.vdna.02', text: 'The genome streams into the cytoplasm to reach [[RNA polymerase|rnap]].', blink: 'rnap' },
      ] },
      { id: 'capsomere', title: 'Building new virions', camera: { view: 'phage', orbit: 2 }, flow: true, ghost: false, follow: 'capsomere', cues: [
        { id: 't4.ch5.cap.01', text: 'Hijacked [[ribosomes|ribosome]] turn phage mRNA into new gp23* capsomeres.', blink: 'ribosome' },
        { id: 't4.ch5.cap.02', text: 'They self-assemble into fresh [[prolate heads|capsid]] ready for DNA packaging.', blink: 'capsid' },
      ] },
    ] },
    { id: 'ch6', title: 'Recap', steps: [
      { id: 'rollcall', title: 'Every part', camera: { view: 'phage', orbit: 6 }, ghost: false, cues: [
        { id: 't4.ch6.roll.01', text: 'Prolate gp23* capsid', blink: 'capsid', dur: 1.6 },
        { id: 't4.ch6.roll.02', text: 'Soc clamps & Hoc spikes', blink: 'soc', dur: 1.6 },
        { id: 't4.ch6.roll.03', text: 'gp24* vertex pentamers', blink: 'vertex', dur: 1.6 },
        { id: 't4.ch6.roll.04', text: '169 kbp dsDNA spool', blink: 'dna', dur: 1.6 },
        { id: 't4.ch6.roll.05', text: 'Internal protein core (IPI*)', blink: 'core', dur: 1.6 },
        { id: 't4.ch6.roll.06', text: 'gp20 portal dodecamer', blink: 'portal', dur: 1.6 },
        { id: 't4.ch6.roll.07', text: 'Collar & fibritin whiskers', blink: 'collar', dur: 1.6 },
        { id: 't4.ch6.roll.08', text: 'gp18 contractile sheath', blink: 'sheath', dur: 1.6 },
        { id: 't4.ch6.roll.09', text: 'gp19 inner tail tube', blink: 'tube', dur: 1.6 },
        { id: 't4.ch6.roll.10', text: 'Hexagonal baseplate', blink: 'baseplate', dur: 1.6 },
        { id: 't4.ch6.roll.11', text: 'gp12 short tail fibers', blink: 'stf', dur: 1.6 },
        { id: 't4.ch6.roll.12', text: 'gp27–gp5 needle & lysozyme', blink: 'needle', dur: 1.6 },
        { id: 't4.ch6.roll.13', text: 'gp34–gp37 long tail fibers', blink: 'ltf', dur: 1.6 },
        { id: 't4.ch6.roll.14', text: 'Host outer membrane & OmpF porins', blink: 'porin', dur: 1.6 },
        { id: 't4.ch6.roll.15', text: 'Host peptidoglycan & inner membrane', blink: 'pg', dur: 1.6 },
        { id: 't4.ch6.roll.16', text: 'Hijacked RNA polymerase & ribosomes', blink: 'ribosome', dur: 1.6 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'phage', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 't4.ch6.exp.01', text: 'Now explore phage T4 on your own.' },
        { id: 't4.ch6.exp.02', text: 'Click any tag to inspect its real PDB structure down to individual atoms.' },
      ] },
    ] },
  ],
  details: {
    'real-phage-capsid': { cues: [
      { id: 't4.det.rcap.01', text: 'The prolate head holds 169 kbp of dsDNA at ~500 atmospheres of pressure.', blink: 'dna' },
      { id: 't4.det.rcap.02', text: '155 hexamers of gp23* form the facets, reinforced by 810 Soc clamp trimers.', blink: 'capsid' },
      { id: 't4.det.rcap.03', text: 'Eleven vertices carry gp24* pentamers; the twelfth holds the gp20 portal.', blink: 'portal' },
    ] },
    'real-phage-tail': { cues: [
      { id: 't4.det.rtail.01', text: 'Twenty-four rings of gp18 sheath surround 24 rings of the gp19 inner tube.', blink: 'sheath' },
      { id: 't4.det.rtail.02', text: 'At the top, the collar bears six fibritin whiskers (gpWac).', blink: 'collar' },
      { id: 't4.det.rtail.03', text: 'Sheath contraction drives the rigid inner tube through the host envelope.', blink: 'tube' },
    ] },
    'real-phage-baseplate': { cues: [
      { id: 't4.det.rbase.01', text: 'Six outer wedges surround the central gp27–gp5 cell-puncturing needle.', blink: 'baseplate' },
      { id: 't4.det.rbase.02', text: 'When long tail fibers bind OmpF porins, six gp12 short fibers lock to LPS.', blink: 'stf' },
      { id: 't4.det.rbase.03', text: 'Three T4 lysozyme domains digest the peptidoglycan wall for DNA entry.', blink: 'needle' },
    ] },
    'bacteriophage': { cues: [
      { id: 't4.det.sch.01', text: 'Isolated 3D schematic of Bacteriophage T4 and its four sub-assemblies.' },
      { id: 't4.det.sch.02', text: 'At top sits the cutaway prolate capsid packed with coaxially spooled dsDNA.' },
      { id: 't4.det.sch.03', text: 'Below are the contractile tail, hexagonal baseplate and six long fibers.' },
    ] },
    'phage-capsid': { cues: [
      { id: 't4.det.pcap.01', text: 'The elongated T4 head: gp23* hexamers, Soc clamps and central Hoc spikes.' },
      { id: 't4.det.pcap.02', text: 'Five-fold gp24* pentamers close the corners; gp20 forms the bottom portal.' },
      { id: 't4.det.pcap.03', text: 'Inside, 169 kbp of dsDNA coils around the internal protein core.' },
    ] },
    'phage-tail': { cues: [
      { id: 't4.det.ptail.01', text: 'Cutaway of the 92.5 nm contractile tail and neck.' },
      { id: 't4.det.ptail.02', text: 'The green gp18 outer sheath contracts to drive the gold gp19 tube downward.' },
      { id: 't4.det.ptail.03', text: 'Viral DNA shoots down the 4 nm central channel into the bacterium.' },
    ] },
    'phage-baseplate': { cues: [
      { id: 't4.det.pbase.01', text: 'Six outer wedges form a hexagonal dome around the gp27–gp5 hub.' },
      { id: 't4.det.pbase.02', text: 'Three green T4 lysozyme domains surround the red β-helix puncturing needle.' },
      { id: 't4.det.pbase.03', text: 'Six gp12 short tail fibers extend below to anchor onto bacterial LPS.' },
    ] },
    'phage-fiber': { cues: [
      { id: 't4.det.pfib.01', text: 'One 145 nm long tail fiber: proximal gp34 rod, gp35 knee and distal rod.' },
      { id: 't4.det.pfib.02', text: 'The iron-braced gp37 needle tip docks onto host OmpF porin and LPS.' },
    ] },
    'gp23-real': { cues: [
      { id: 't4.det.gp23.01', text: 'Cryo-EM structure of the T4 major capsid hexamer (PDB 5VF3).' },
      { id: 't4.det.gp23.02', text: 'Six gp23* subunits (blue) are ringed by Soc clamps (green) and a Hoc spike.' },
    ] },
    'gp24-real': { cues: [
      { id: 't4.det.gp24.01', text: 'Cryo-EM structure of the five-fold capsid vertex pentamer (gp24*, PDB 5VF3).' },
      { id: 't4.det.gp24.02', text: 'Five gp24* subunits introduce the curvature needed to close the head.' },
    ] },
    'gp20-real': { cues: [
      { id: 't4.det.gp20.01', text: 'Cryo-EM structure of the 12-subunit gp20 portal dodecamer (PDB 3JA7).' },
      { id: 't4.det.gp20.02', text: 'DNA is pumped in and fired out through its 3.5 nm central channel.' },
    ] },
    'gp18-real': { cues: [
      { id: 't4.det.gp18.01', text: 'Cryo-EM structure of the gp18 contractile sheath and gp15 neck ring (3J2M).' },
      { id: 't4.det.gp18.02', text: 'Twenty-four hexameric gp18 rings stack to form the spring-loaded sheath.' },
    ] },
    'gp19-real': { cues: [
      { id: 't4.det.gp19.01', text: 'Cryo-EM structure of three stacked gp19 inner tail tube rings (PDB 5W5F).' },
      { id: 't4.det.gp19.02', text: 'Six subunits per ring form a smooth 4 nm β-barrel conduit for viral DNA.' },
    ] },
    'gp5-real': { cues: [
      { id: 't4.det.gp5.01', text: 'Crystal structure of the gp27–gp5 cell-puncturing needle (PDB 1K28).' },
      { id: 't4.det.gp5.02', text: 'The cup-shaped gp27 hub tops a rigid triple-β-helix needle and 3 lysozymes.' },
    ] },
    'gp37-real': { cues: [
      { id: 't4.det.gp37.01', text: 'Crystal structure of the gp37 long tail fiber needle tip (PDB 2XGF).' },
      { id: 't4.det.gp37.02', text: 'Three interwoven chains braced by 7 iron ions recognise E. coli OmpF porins.' },
    ] },
    'gp12-real': { cues: [
      { id: 't4.det.gp12.01', text: 'Crystal structure of the gp12 short tail fiber trimer tip (PDB 1OCY).' },
      { id: 't4.det.gp12.02', text: 'Its zinc-binding head clamps irreversibly onto the host LPS inner core.' },
    ] },
  },
};
