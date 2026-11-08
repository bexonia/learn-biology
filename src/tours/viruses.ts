import type { TourDefinition } from "./tourService.js";
import { bacteriophageTour } from "./bacteriophage.js";
import { coronavirusTour } from "./coronavirus.js";
import { hivTour } from "./hiv.js";
import { adenovirusTour } from "./adenovirus.js";
import { tmvTour } from "./tmv.js";

// The guided tour of the Main Types of Viruses comparative gallery, played by cell_explorer.html.
// Every cue fits two lines of 42 characters (plain text <= 84 characters).
export const virusesTour: TourDefinition = {
  title: 'Main types of viruses: a guided tour',
  root: 'viruses',
  page: null,
  view: 'viruses',
  summary: 'Compare the five major architectures of the virosphere side by side: head–tail phage, enveloped coronavirus, conical retrovirus, naked icosahedron and helical rod.',
  parts: [
    ['bacteriophage', 'Bacteriophage T4', '#6bc8ff'],
    ['coronavirus', 'SARS-CoV-2 Coronavirus', '#ff5a7a'],
    ['hiv', 'HIV-1 Retrovirus', '#ffd26a'],
    ['adenovirus', 'Human Adenovirus', '#58a6ff'],
    ['tmv', 'Tobacco Mosaic Virus', '#68d86b'],
  ],
  chapters: [
    { id: 'ch0', title: 'Welcome', steps: [
      { id: 'intro', title: 'The five viral architectures', camera: { view: 'viruses', orbit: 3 }, ghost: false, cues: [
        { id: 'vir.ch0.intro.01', text: 'Viruses are not cells: each is a genome wrapped in a protective coat.' },
        { id: 'vir.ch0.intro.02', text: 'Across nature, almost every virus uses one of these five architectures.' },
        { id: 'vir.ch0.intro.03', text: 'Click any virus tag at any time to open its full molecular scene.' },
      ] },
    ] },
    { id: 'ch1', title: 'Complex & enveloped viruses', steps: [
      { id: 'phage', title: '1. Complex head–tail (Phage T4)', camera: { part: 'bacteriophage', dist: 1.35 }, blink: 'bacteriophage', ghost: ['bacteriophage'], tags: ['bacteriophage'], detail: 'bacteriophage', cues: [
        { id: 'vir.ch1.phage.01', text: '[[Bacteriophage T4|bacteriophage]] combines an icosahedral head with a tail.' },
        { id: 'vir.ch1.phage.02', text: 'Its spring-loaded sheath and needle inject 169 kbp of dsDNA into E. coli.' },
      ] },
      { id: 'cov', title: '2. Enveloped (+)ssRNA (SARS-CoV-2)', camera: { part: 'coronavirus', dist: 1.35 }, blink: 'coronavirus', ghost: ['coronavirus'], tags: ['coronavirus'], detail: 'coronavirus', cues: [
        { id: 'vir.ch1.cov.01', text: '[[SARS-CoV-2|coronavirus]] wraps its 30 kb (+)ssRNA in a host lipid bilayer.' },
        { id: 'vir.ch1.cov.02', text: 'Club-shaped Spike trimers crown the envelope and bind human ACE2.' },
      ] },
      { id: 'hiv', title: '3. Retrovirus cone (HIV-1)', camera: { part: 'hiv', dist: 1.35 }, blink: 'hiv', ghost: ['hiv'], tags: ['hiv'], detail: 'hiv', cues: [
        { id: 'vir.ch1.hiv.01', text: '[[HIV-1|hiv]] hides a fullerene cone capsid inside a lipid envelope.' },
        { id: 'vir.ch1.hiv.02', text: 'Reverse Transcriptase and Integrase splice its RNA genome into host DNA.' },
      ] },
    ] },
    { id: 'ch2', title: 'Naked icosahedral & helical viruses', steps: [
      { id: 'adv', title: '4. Naked icosahedron (Adenovirus)', camera: { part: 'adenovirus', dist: 1.35 }, blink: 'adenovirus', ghost: ['adenovirus'], tags: ['adenovirus'], detail: 'adenovirus', cues: [
        { id: 'vir.ch2.adv.01', text: '[[Human Adenovirus|adenovirus]] has no lipid membrane at all.' },
        { id: 'vir.ch2.adv.02', text: '240 Hexon trimers tile 20 facets, with long CAR-binding fibers at 12 corners.' },
      ] },
      { id: 'tmv', title: '5. Helical rod (TMV)', camera: { part: 'tmv', dist: 1.35 }, blink: 'tmv', ghost: ['tmv'], tags: ['tmv'], detail: 'tmv', cues: [
        { id: 'vir.ch2.tmv.01', text: '[[Tobacco Mosaic Virus|tmv]] is a rigid helical cylinder 300 nm long.' },
        { id: 'vir.ch2.tmv.02', text: '2,130 identical coat subunits wind around a 6.4 kb (+)ssRNA strand.' },
      ] },
    ] },
    { id: 'ch3', title: 'Recap', steps: [
      { id: 'rollcall', title: 'All five classes', camera: { view: 'viruses', orbit: 5 }, ghost: false, cues: [
        { id: 'vir.ch3.roll.01', text: 'Complex myovirus: Bacteriophage T4', blink: 'bacteriophage', dur: 1.7 },
        { id: 'vir.ch3.roll.02', text: 'Enveloped (+)ssRNA: SARS-CoV-2', blink: 'coronavirus', dur: 1.7 },
        { id: 'vir.ch3.roll.03', text: 'Enveloped retrovirus: HIV-1', blink: 'hiv', dur: 1.7 },
        { id: 'vir.ch3.roll.04', text: 'Naked icosahedron: Human Adenovirus', blink: 'adenovirus', dur: 1.7 },
        { id: 'vir.ch3.roll.05', text: 'Helical plant rod: Tobacco Mosaic Virus', blink: 'tmv', dur: 1.7 },
      ] },
      { id: 'explore', title: 'Your turn', camera: { view: 'viruses', orbit: 3 }, ghost: false, cues: [
        { id: 'vir.ch3.exp.01', text: 'Now click any virus to explore its realistic molecular scene or 3D parts.' },
      ] },
    ] },
  ],
  details: Object.assign(
    {},
    bacteriophageTour.details ?? {},
    coronavirusTour.details ?? {},
    hivTour.details ?? {},
    adenovirusTour.details ?? {},
    tmvTour.details ?? {}
  ),
};
