import type { TourDefinition } from "./tourService.js";

// The guided tour of the realistic HIV-1 retrovirus, played by cell_explorer.html (see docs/tutorial_mode_spec.md).
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
export const hivTour: TourDefinition = {
  title: 'HIV-1 Retrovirus: a guided tour',
  root: 'real-hiv',
  page: 'hiv_realistic.html',
  view: 'virion',
  summary: 'From the sparse Env spikes and p17 Matrix shell into the fullerene cone capsid, diploid RNA, Reverse Transcriptase and Integrase. About six minutes.',
  views: { virion: 'real-hiv', focus: 'real-hiv', cone: 'real-hiv-cone', rt: 'real-hiv-rt', entry: 'real-hiv-entry' },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'A human retrovirus', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'hiv.ch0.intro.01', text: 'This is HIV-1, the human immunodeficiency retrovirus.' },
        { id: 'hiv.ch0.intro.02', text: 'The spherical virion is about 120 nanometres across.', say: 'The spherical virion is about one hundred and twenty nanometres across.' },
        { id: 'hiv.ch0.intro.03', text: 'Unlike most viruses, it copies its RNA backwards into DNA and splices it in.' },
        { id: 'hiv.ch0.intro.04', text: 'We have cut open the envelope and its cone-shaped capsid.' },
        { id: 'hiv.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'Envelope & matrix', steps: [
      { id: 'env', title: 'Env gp120/gp41 spikes', camera: { part: 'env', dist: 1.25 }, blink: 'env', ghost: ['env', 'membrane'], tags: ['virion:env'], detail: 'hiv-env-real', cues: [
        { id: 'hiv.ch1.env.01', text: 'Only about 14 to 16 [[Env gp120/gp41 spikes|env]] stud the whole virion.' },
        { id: 'hiv.ch1.env.02', text: 'This sparse spacing stops human antibodies from grabbing two spikes at once.' },
        { id: 'hiv.ch1.env.03', text: 'A dense coat of host sugars shields the protein surface underneath.' },
      ] },
      { id: 'membrane', title: 'Lipid bilayer envelope', camera: { part: 'membrane', dist: 1.25 }, blink: 'membrane', ghost: ['membrane', 'ma', 'env'], tags: ['virion:membrane'], detail: 'phospholipid', cues: [
        { id: 'hiv.ch1.mem.01', text: 'The [[lipid bilayer|membrane]] buds from a host T-cell membrane raft.' },
        { id: 'hiv.ch1.mem.02', text: 'It is rich in cholesterol and sphingolipids that stiffen the shell.' },
      ] },
      { id: 'ma', title: 'p17 Matrix (MA) shell', camera: { part: 'ma', dist: 1.25 }, blink: 'ma', ghost: ['ma', 'membrane'], tags: ['virion:ma'], detail: 'hiv-ma-real', cues: [
        { id: 'hiv.ch1.ma.01', text: 'Lining the inner leaflet is a lattice of [[p17 Matrix (MA) trimers|ma]].' },
        { id: 'hiv.ch1.ma.02', text: 'Fatty myristoyl tails anchor MA to the membrane and recruit Env spikes.' },
      ] },
    ] },
    { id: 'ch2', title: 'The fullerene cone capsid', steps: [
      { id: 'capsid', title: 'p24 Capsid (CA) hexamers', camera: { view: 'cone' }, blink: 'capsid', ghost: false, tags: ['cone:capsid', 'cone:ma'], detail: 'hiv-ca-hex-real', cues: [
        { id: 'hiv.ch2.cap.01', text: 'At the centre sits the iconic [[fullerene cone capsid|capsid]].' },
        { id: 'hiv.ch2.cap.02', text: 'About 216 hexamers of p24 CA protein tile its curved walls.' },
        { id: 'hiv.ch2.cap.03', text: 'A charged pore in each hexamer sucks in dNTPs while hiding the genome.' },
      ] },
      { id: 'pentamer', title: '12 p24 CA pentamers', camera: { view: 'cone' }, blink: 'pentamer', ghost: false, tags: ['cone:pentamer', 'cone:capsid'], detail: 'hiv-ca-pent-real', cues: [
        { id: 'hiv.ch2.pent.01', text: 'By Euler\'s geometry, any closed hexagonal shell needs 12 pentagons.' },
        { id: 'hiv.ch2.pent.02', text: 'HIV-1 puts 5 [[CA pentamers|pentamer]] at the narrow tip and 7 at the wide cap.' },
        { id: 'hiv.ch2.pent.03', text: 'That 5-to-7 split gives the capsid its pear-shaped cone.' },
      ] },
    ] },
    { id: 'ch3', title: 'Genome & viral enzymes', steps: [
      { id: 'rna', title: 'Diploid (+)ssRNA genome', camera: { view: 'rt' }, blink: 'rna', ghost: false, tags: ['rt:rna', 'rt:capsid'], detail: 'rna', cues: [
        { id: 'hiv.ch3.rna.01', text: 'Inside the cone ride two copies of the 9.7-kilobase [[(+)ssRNA genome|rna]].' },
        { id: 'hiv.ch3.rna.02', text: 'Carrying two RNA strands lets the enzyme jump between them if one is nicked.' },
      ] },
      { id: 'rt', title: 'Reverse Transcriptase (RT)', camera: { view: 'rt' }, blink: 'rt', ghost: false, tags: ['rt:rt', 'rt:rna'], detail: 'hiv-rt-real', cues: [
        { id: 'hiv.ch3.rt.01', text: '[[Reverse Transcriptase (RT)|rt]] copies viral RNA into double-stranded DNA.' },
        { id: 'hiv.ch3.rt.02', text: 'Its RNase H domain chews up the original RNA template as it goes.' },
        { id: 'hiv.ch3.rt.03', text: 'Because RT has no proofreading, HIV mutates rapidly.' },
      ] },
      { id: 'int', title: 'Integrase (IN)', camera: { view: 'rt' }, blink: 'int', ghost: false, tags: ['rt:int', 'rt:rt'], detail: 'hiv-in-real', cues: [
        { id: 'hiv.ch3.int.01', text: '[[Integrase (IN)|int]] grabs the ends of the newly made viral DNA.' },
        { id: 'hiv.ch3.int.02', text: 'Inside the nucleus, it splices that DNA permanently into a host chromosome.' },
      ] },
      { id: 'entry', title: 'CD4/CCR5 fusion & provirus', camera: { view: 'entry' }, blink: 'cd4', ghost: false, tags: ['entry:env', 'entry:cd4', 'entry:int'], detail: 'real-hiv-entry',
        links: [['entry:env', 'entry:cd4', 'CD4 & CCR5 docking', 'env'], ['entry:rt', 'entry:cd4', 'proviral DNA integration', 'int']], cues: [
        { id: 'hiv.ch3.entry.01', text: 'Below, [[Env gp120|env]] binds [[CD4 and CCR5 receptors|cd4]] on a T-cell.' },
        { id: 'hiv.ch3.entry.02', text: 'gp41 snaps into a six-helix bundle to fuse viral and host membranes.' },
        { id: 'hiv.ch3.entry.03', text: 'Once integrated as a [[provirus|cd4]], the host cell makes new HIV.' },
      ] },
    ] },
    { id: 'ch4', title: 'Retroviral cycle in motion', steps: [
      { id: 'flows', title: 'From RNA to provirus', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, cues: [
        { id: 'hiv.ch4.flows.01', text: 'Follow the retroviral pathway from receptor docking to integration.' },
      ] },
      { id: 'cd4sig', title: 'Coreceptor trigger', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'cd4sig', cues: [
        { id: 'hiv.ch4.sig.01', text: '[[Env|env]] binding at [[CD4/CCR5|cd4]] sends the fusion signal inward.', blink: 'env' },
        { id: 'hiv.ch4.sig.02', text: 'The [[fullerene cone|capsid]] enters and imports dNTPs through its pores.', blink: 'capsid' },
      ] },
      { id: 'cdna', title: 'Reverse transcription & splicing', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'cdna', cues: [
        { id: 'hiv.ch4.cdna.01', text: '[[Reverse Transcriptase|rt]] turns viral RNA into linear cDNA.', blink: 'rt' },
        { id: 'hiv.ch4.cdna.02', text: '[[Integrase|int]] carries the cDNA into the host [[T-cell genome|cd4]].', blink: 'int' },
      ] },
    ] },
    { id: 'ch5', title: 'Recap', steps: [
      { id: 'rollcall', title: 'Every part', camera: { view: 'virion', orbit: 6 }, ghost: false, cues: [
        { id: 'hiv.ch5.roll.01', text: 'Env gp120/gp41 spike trimer', blink: 'env', dur: 1.6 },
        { id: 'hiv.ch5.roll.02', text: 'Cholesterol-rich lipid envelope', blink: 'membrane', dur: 1.6 },
        { id: 'hiv.ch5.roll.03', text: 'p17 Matrix (MA) trimer shell', blink: 'ma', dur: 1.6 },
        { id: 'hiv.ch5.roll.04', text: 'p24 Capsid (CA) hexamer cone', blink: 'capsid', dur: 1.6 },
        { id: 'hiv.ch5.roll.05', text: '12 p24 CA vertex pentamers', blink: 'pentamer', dur: 1.6 },
        { id: 'hiv.ch5.roll.06', text: 'Diploid 9.7 kb (+)ssRNA genome', blink: 'rna', dur: 1.6 },
        { id: 'hiv.ch5.roll.07', text: 'Reverse Transcriptase (p66/p51)', blink: 'rt', dur: 1.6 },
        { id: 'hiv.ch5.roll.08', text: 'Integrase (IN) tetramer', blink: 'int', dur: 1.6 },
        { id: 'hiv.ch5.roll.09', text: 'Host CD4/CCR5 & proviral DNA', blink: 'cd4', dur: 1.6 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'hiv.ch5.exp.01', text: 'Now explore HIV-1 on your own.' },
        { id: 'hiv.ch5.exp.02', text: 'Click any tag to inspect its atomic coordinates from the PDB.' },
      ] },
    ] },
  ],
  details: {
    'real-hiv-cone': { cues: [
      { id: 'hiv.det.rcone.01', text: 'About 216 p24 CA hexamers and 12 pentamers build the fullerene cone.', blink: 'capsid' },
      { id: 'hiv.det.rcone.02', text: 'Five pentamers sit at the narrow tip and seven crown the wide cap.', blink: 'pentamer' },
      { id: 'hiv.det.rcone.03', text: 'Electropositive pores in each hexamer pull dNTPs inside for DNA synthesis.', blink: 'rt' },
    ] },
    'real-hiv-rt': { cues: [
      { id: 'hiv.det.rrt.01', text: 'Reverse Transcriptase (PDB 1RTD) converts (+)ssRNA into dsDNA.', blink: 'rt' },
      { id: 'hiv.det.rrt.02', text: 'Integrase (PDB 1EX4) then trims the DNA ends to splice into host DNA.', blink: 'int' },
    ] },
    'real-hiv-entry': { cues: [
      { id: 'hiv.det.rent.01', text: 'Env gp120 (PDB 4TVP) binds CD4 and shifts to grip coreceptor CCR5.', blink: 'env' },
      { id: 'hiv.det.rent.02', text: 'gp41 refolds to fuse the membranes while RT and IN build the provirus.', blink: 'cd4' },
    ] },
    'hiv': { cues: [
      { id: 'hiv.det.sch.01', text: 'Isolated cutaway of HIV-1: lipid bilayer, p17 Matrix and sparse Env spikes.' },
      { id: 'hiv.det.sch.02', text: 'Inside sits the fullerene cone holding two RNA strands, RT and Integrase.' },
    ] },
    'hiv-env-real': { cues: [
      { id: 'hiv.det.env.01', text: 'Crystal structure of the prefusion HIV-1 Env gp120/gp41 trimer (PDB 4TVP).' },
      { id: 'hiv.det.env.02', text: 'Three gp120 heads bind CD4/CCR5; three gp41 stalks fuse the membranes.' },
    ] },
    'hiv-ma-real': { cues: [
      { id: 'hiv.det.ma.01', text: 'Crystal structure of the trimeric p17 Matrix protein (PDB 1HIW).' },
      { id: 'hiv.det.ma.02', text: 'Basic patches and myristoyl groups anchor the matrix under the envelope.' },
    ] },
    'hiv-ca-hex-real': { cues: [
      { id: 'hiv.det.hex.01', text: 'Crystal structure of the planar p24 Capsid hexamer ring (PDB 3H4E).' },
      { id: 'hiv.det.hex.02', text: 'Six N-terminal domains form a central β-hairpin pore that imports dNTPs.' },
    ] },
    'hiv-ca-pent-real': { cues: [
      { id: 'hiv.det.pent.01', text: 'Crystal structure of the five-fold p24 Capsid vertex pentamer (PDB 3P05).' },
      { id: 'hiv.det.pent.02', text: 'Twelve pentamers curve the hexagonal sheet into a closed fullerene cone.' },
    ] },
    'hiv-rt-real': { cues: [
      { id: 'hiv.det.rt.01', text: 'Crystal structure of HIV-1 Reverse Transcriptase with DNA (PDB 1RTD).' },
      { id: 'hiv.det.rt.02', text: 'Subunit p66 holds the polymerase and RNase H; p51 braces the cleft.' },
    ] },
    'hiv-in-real': { cues: [
      { id: 'hiv.det.in.01', text: 'Crystal structure of HIV-1 Integrase catalytic and DNA domains (PDB 1EX4).' },
      { id: 'hiv.det.in.02', text: 'Its DDE active site cuts and joins viral DNA into a host chromosome.' },
    ] },
  },
};
