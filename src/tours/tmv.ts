import type { TourDefinition } from "./tourService.js";

// The guided tour of the realistic Tobacco Mosaic Virus (TMV), played by cell_explorer.html (see docs/tutorial_mode_spec.md).
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
export const tmvTour: TourDefinition = {
  title: 'Tobacco Mosaic Virus: a guided tour',
  root: 'real-tmv',
  page: 'tmv_realistic.html',
  view: 'virion',
  summary: 'From the 16⅓-subunit helical coat and 20S self-assembling discs to the 4 nm Ca²⁺-switched lumen, striposomes and plasmodesmata. About six minutes.',
  views: { virion: 'real-tmv', focus: 'real-tmv', helix: 'real-tmv-helix', channel: 'real-tmv-channel', assembly: 'real-tmv-assembly' },
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'The first virus ever discovered', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'tmv.ch0.intro.01', text: 'This is Tobacco Mosaic Virus (TMV), the classic helical plant virus.' },
        { id: 'tmv.ch0.intro.02', text: 'A full rod is 300 nanometres long and 18 nanometres wide.', say: 'A full rod is three hundred nanometres long and eighteen nanometres wide.' },
        { id: 'tmv.ch0.intro.03', text: 'In 1898 Beijerinck used it to coin the word "virus".' },
        { id: 'tmv.ch0.intro.04', text: 'Rosalind Franklin mapped its hollow helical structure with X-rays.' },
        { id: 'tmv.ch0.intro.05', text: 'Press Space to pause, or Explore to look around on your own.' },
      ] },
    ] },
    { id: 'ch1', title: 'The helical protein rod', steps: [
      { id: 'coat', title: '16⅓ subunits per turn', camera: { view: 'helix' }, blink: 'coat', ghost: false, tags: ['helix:coat', 'helix:rna'], detail: 'tmv-sub-real', cues: [
        { id: 'tmv.ch1.coat.01', text: '2,130 identical [[Coat Protein subunits|coat]] build the entire rod.', say: 'Two thousand one hundred and thirty identical Coat Protein subunits build the entire rod.' },
        { id: 'tmv.ch1.coat.02', text: 'They wind in a right-handed helix of 16 and one-third subunits per turn.' },
        { id: 'tmv.ch1.coat.03', text: 'Each monomer is a four-α-helix bundle pointing radially outward.' },
      ] },
      { id: 'rna', title: 'Coiled (+)ssRNA genome', camera: { view: 'helix' }, blink: 'rna', ghost: false, tags: ['helix:rna', 'helix:coat'], detail: 'rna', cues: [
        { id: 'tmv.ch1.rna.01', text: 'Buried at 4 nanometres radius coils the 6.4-kb [[(+)ssRNA genome|rna]].' },
        { id: 'tmv.ch1.rna.02', text: 'Every coat subunit clasps exactly three RNA nucleotides in a basic groove.' },
        { id: 'tmv.ch1.rna.03', text: 'Shielded under 5 nanometres of protein, the RNA survives decades dry.' },
      ] },
      { id: 'channel', title: '4 nm channel & Caspar switch', camera: { view: 'channel' }, blink: 'channel', ghost: false, tags: ['channel:channel', 'channel:rna', 'channel:coat'], detail: 'real-tmv-channel', cues: [
        { id: 'tmv.ch1.chan.01', text: 'TMV is not solid: a 4-nanometre [[hollow channel|channel]] runs down its axis.' },
        { id: 'tmv.ch1.chan.02', text: 'Acidic Caspar carboxylates line this inner wall.' },
        { id: 'tmv.ch1.chan.03', text: 'Outside, Ca²⁺ locks them; inside the low-Ca²⁺ cell, they repel and uncoat.' },
      ] },
    ] },
    { id: 'ch2', title: 'Self-assembly & plant spread', steps: [
      { id: 'disc', title: '20S lock-washer assembly', camera: { view: 'assembly' }, blink: 'disc', ghost: false, tags: ['assembly:disc', 'assembly:rna', 'assembly:channel'], detail: 'tmv-turn-real',
        links: [['assembly:rna', 'assembly:disc', 'OAS hairpin nucleates disc', 'rna'], ['assembly:channel', 'assembly:disc', '5′ RNA pulled up lumen', 'disc']], cues: [
        { id: 'tmv.ch2.disc.01', text: 'Purified TMV protein and RNA build a live virus all by themselves.' },
        { id: 'tmv.ch2.disc.02', text: 'Two-layer [[20S protein discs|disc]] grab the OAS hairpin in the [[RNA|rna]].' },
        { id: 'tmv.ch2.disc.03', text: 'Each disc slips into a lock-washer and reels the RNA up the [[channel|channel]].' },
      ] },
      { id: 'ribo', title: 'Co-translational "striposome"', camera: { part: 'ribo', dist: 1.3 }, blink: 'ribo', ghost: ['ribo', 'rna', 'coat'], tags: ['virion:ribo'], detail: 'ribosome', cues: [
        { id: 'tmv.ch2.ribo.01', text: 'In the plant cytosol, the 5′ cap pops out of the loosened tip.' },
        { id: 'tmv.ch2.ribo.02', text: 'Host [[80S ribosomes|ribo]] pull the RNA out as they translate replicase.' },
      ] },
      { id: 'mp', title: '30 kDa Movement Protein', camera: { part: 'mp', dist: 1.3 }, blink: 'mp', ghost: ['mp', 'ribo', 'rna'], tags: ['virion:mp'], detail: 'plasmodesma', cues: [
        { id: 'tmv.ch2.mp.01', text: 'Plant cells are walled in, so TMV does not bud across membranes.' },
        { id: 'tmv.ch2.mp.02', text: 'Its [[30 kDa Movement Protein|mp]] widens plasmodesmata to pass RNA next door.' },
      ] },
    ] },
    { id: 'ch3', title: 'Self-assembly & uncoating in motion', steps: [
      { id: 'flows', title: 'Two-way molecular machine', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, cues: [
        { id: 'tmv.ch3.flows.01', text: 'Watch TMV assemble at the top and uncoat at the bottom.' },
      ] },
      { id: 'oasloop', title: 'Disc stacking at the top', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'oasloop', cues: [
        { id: 'tmv.ch3.oas.01', text: 'The OAS RNA loop threads through [[20S discs|disc]] at the growing tip.', blink: 'disc' },
        { id: 'tmv.ch3.oas.02', text: 'Each disc locks into the [[helical coat|coat]], extending the rod.', blink: 'coat' },
      ] },
      { id: 'caspar', title: 'Ca²⁺ release & cell-to-cell spread', camera: { view: 'virion', orbit: 2 }, flow: true, ghost: false, follow: 'caspar', cues: [
        { id: 'tmv.ch3.casp.01', text: 'Ca²⁺ loss in the [[4 nm channel|channel]] springs the bottom turn loose.', blink: 'channel' },
        { id: 'tmv.ch3.casp.02', text: '[[Ribosomes|ribo]] make replicase while [[Movement Protein|mp]] spreads the RNA.', blink: 'mp' },
      ] },
    ] },
    { id: 'ch4', title: 'Recap', steps: [
      { id: 'rollcall', title: 'Every part', camera: { view: 'virion', orbit: 6 }, ghost: false, cues: [
        { id: 'tmv.ch4.roll.01', text: 'Helical Coat Protein (16⅓ per turn)', blink: 'coat', dur: 1.6 },
        { id: 'tmv.ch4.roll.02', text: '20S lock-washer assembly discs', blink: 'disc', dur: 1.6 },
        { id: 'tmv.ch4.roll.03', text: '6.4 kb (+)ssRNA genome at r = 4 nm', blink: 'rna', dur: 1.6 },
        { id: 'tmv.ch4.roll.04', text: '4 nm channel & Caspar carboxylates', blink: 'channel', dur: 1.6 },
        { id: 'tmv.ch4.roll.05', text: 'Host 80S "striposome" ribosomes', blink: 'ribo', dur: 1.6 },
        { id: 'tmv.ch4.roll.06', text: '30 kDa Movement Protein & plasmodesma', blink: 'mp', dur: 1.6 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'virion', orbit: 3 }, flow: true, ghost: false, cues: [
        { id: 'tmv.ch4.exp.01', text: 'Now explore Tobacco Mosaic Virus on your own.' },
        { id: 'tmv.ch4.exp.02', text: 'Click any tag to inspect its 2.9 Å fiber diffraction structure.' },
      ] },
    ] },
  ],
  details: {
    'real-tmv-helix': { cues: [
      { id: 'tmv.det.rhel.01', text: '16⅓ four-helix-bundle subunits per turn form the 18 nm outer rod.', blink: 'coat' },
      { id: 'tmv.det.rhel.02', text: 'Three RNA nucleotides sit in each subunit\'s groove at 4 nm radius.', blink: 'rna' },
    ] },
    'real-tmv-channel': { cues: [
      { id: 'tmv.det.rchn.01', text: 'Acidic Caspar carboxylates line the 4.0 nm central channel.', blink: 'channel' },
      { id: 'tmv.det.rchn.02', text: 'Dropping Ca²⁺ inside the plant cytosol triggers electrostatic uncoating.', blink: 'rna' },
    ] },
    'real-tmv-assembly': { cues: [
      { id: 'tmv.det.rasm.01', text: 'Two-layer 20S discs recognise the OAS hairpin in the viral RNA.', blink: 'disc' },
      { id: 'tmv.det.rasm.02', text: 'They convert to helical lock-washers and pull the 5′ RNA up the bore.', blink: 'channel' },
    ] },
    'tmv': { cues: [
      { id: 'tmv.det.sch.01', text: 'Isolated cutaway of the TMV rod: 16⅓ coat subunits per helical turn.' },
      { id: 'tmv.det.sch.02', text: 'Single-stranded RNA coils at 4 nm radius around the 4 nm hollow bore.' },
    ] },
    'tmv-turn-real': { cues: [
      { id: 'tmv.det.turn.01', text: 'One full helical turn reconstructed from PDB 2TMV (17 subunits + 51 nt).' },
      { id: 'tmv.det.turn.02', text: 'Red RNA nucleotides nestle between green four-helix-bundle subunits.' },
    ] },
    'tmv-sub-real': { cues: [
      { id: 'tmv.det.sub.01', text: 'Single asymmetric unit of TMV (PDB 2TMV): one 158-aa Coat Protein.' },
      { id: 'tmv.det.sub.02', text: 'Its four α-helices (LS, RS, LR, RR) clasp three RNA bases (G–A–A).' },
    ] },
  },
};
