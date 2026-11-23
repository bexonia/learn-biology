import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 16A: Bioenergetics - Photosynthesis <-> Cellular Respiration Loop (real-bioenergetics), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const BIOENERGETICS_TOUR: TourDefinition = {
  title: 'Bioenergetics (Photosynthesis & Cellular Respiration): a guided tour',
  root: 'real-bioenergetics',
  page: 'bioenergetics_realistic.html',
  view: 'overview',
  summary: 'Trace one coupled Glucose + 6 O2 <-> 6 CO2 + 6 H2O loop across a cutaway chloroplast and mitochondrion: PSII water splitting, Cyt b6f, PSI, CF1CF0, RuBisCO Calvin cycle, glycolysis, Krebs cycle, Complexes I-IV, rotary F1F0 ATP synthase and atomic cofactors.',
  views: {
    overview: 'real-bioenergetics',
    light_reactions: 'real-bio-psii',
    calvin_stroma: 'real-bio-rubisco',
    krebs_matrix: 'real-bio-citrate',
    mito_etc: 'real-bio-atpsynth',
    atoms: 'real-bioenergetics',
  },
  chapters: [
    { id: 'ch0', title: 'One Planetary Loop: Chloroplast & Mitochondrion', steps: [
      { id: 'bio-loop-intro', title: 'Glucose + O2 <-> CO2 + H2O planetary exchange', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['chloroplast_hull', 'mito_hull', 'energy_carriers', 'glycolysis'], cues: [
        { id: 'bio.ch0.s0.01', text: 'Every breath links [[plant chloroplasts|chloroplast_hull]] and [[animal mitochondria|mito_hull]] in one loop.' },
        { id: 'bio.ch0.s0.02', text: 'The [[chloroplast|chloroplast_hull]] captures sunlight to build glucose and O2 from CO2 and water.' },
        { id: 'bio.ch0.s0.03', text: 'The [[mitochondrion|mito_hull]] oxidizes that glucose with O2 to charge [[ATP carriers|energy_carriers]].' },
      ] },
      { id: 'bio-mirror-membranes', title: 'Cutaway membranes as reversed redox mirrors', camera: { part: 'chloroplast_hull', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'chloroplast_hull',
        ghost: ['chloroplast_hull', 'thylakoid', 'mito_hull', 'proton_grad'], tags: ['chloroplast_hull', 'thylakoid', 'mito_hull', 'proton_grad'], cues: [
        { id: 'bio.ch0.s1.01', text: 'Inside the [[chloroplast|chloroplast_hull]], stacked [[thylakoid|thylakoid]] membranes harvest photons.' },
        { id: 'bio.ch0.s1.02', text: 'Inside the [[mitochondrion|mito_hull]], folded inner cristae release bond energy from food.' },
        { id: 'bio.ch0.s1.03', text: 'Both organelles convert electron flow into a transmembrane [[proton gradient|proton_grad]] to make ATP.' },
      ] },
    ] },
    { id: 'ch1', title: 'Light Reactions: PSII, Cyt b6f & PSI Z-Scheme', steps: [
      { id: 'bio-psii-photolysis', title: 'Photosystem II (3JCU) & water splitting', camera: { view: 'light_reactions', dur: 2.4, orbit: 2 }, blink: 'psii', flow: true, ghost: false,
        tags: ['thylakoid', 'psii', 'cyt_b6f', 'psi', 'proton_grad'], cues: [
        { id: 'bio.ch1.s0.01', text: 'Zoom to the 5 nm [[thylakoid bilayer|thylakoid]], where golden 680 nm photons strike [[PSII|psii]].' },
        { id: 'bio.ch1.s0.02', text: 'Excited chlorophyll in [[Photosystem II|psii]] splits two H2O molecules at its Mn4CaO5 cluster.' },
        { id: 'bio.ch1.s0.03', text: 'Water splitting at [[PSII|psii]] releases breathable O2 gas, four electrons and four luminal H+ ions.' },
      ] },
      { id: 'bio-cyt-b6f-pump', title: 'Plastoquinone shuttle & Cytochrome b6f (6RQF)', camera: { part: 'cyt_b6f', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'cyt_b6f', flow: true,
        ghost: ['cyt_b6f', 'psii', 'psi', 'proton_grad'], tags: ['cyt_b6f', 'psii', 'psi', 'proton_grad'], cues: [
        { id: 'bio.ch1.s1.01', text: 'Lipid-soluble plastoquinone carries electrons from [[PSII|psii]] straight to [[Cytochrome b6f|cyt_b6f]].' },
        { id: 'bio.ch1.s1.02', text: 'As electrons pass through [[Cyt b6f|cyt_b6f]], the complex pumps extra H+ into the [[proton gradient|proton_grad]].' },
        { id: 'bio.ch1.s1.03', text: 'Next, mobile luminal plastocyanin hands those lowered-energy electrons onward to [[PSI|psi]].' },
      ] },
      { id: 'bio-psi-nadph', title: 'Photosystem I (4XK8) & NADPH electron charging', camera: { part: 'psi', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'psi', flow: true,
        ghost: ['psi', 'energy_carriers', 'thylakoid'], tags: ['psi', 'energy_carriers', 'cf1cf0'], cues: [
        { id: 'bio.ch1.s2.01', text: 'A 700 nm photon re-excites electrons inside [[Photosystem I|psi]] to complete the linear Z-scheme.' },
        { id: 'bio.ch1.s2.02', text: '[[PSI|psi]] charges [[NADPH carriers|energy_carriers]] with high-energy electrons distinct from spent ATP.' },
        { id: 'bio.ch1.s2.03', text: 'Fresh [[NADPH|energy_carriers]] diffuses into the stroma to reduce CO2 during carbon fixation.' },
      ] },
    ] },
    { id: 'ch2', title: 'Thylakoid ATP, RuBisCO Calvin Cycle & Glycolysis', steps: [
      { id: 'bio-cf1cf0-synthase', title: 'Rotary CF1CF0 ATP synthase on the thylakoid', camera: { part: 'cf1cf0', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'cf1cf0', flow: true,
        ghost: ['cf1cf0', 'proton_grad', 'energy_carriers', 'thylakoid'], tags: ['cf1cf0', 'proton_grad', 'energy_carriers'], cues: [
        { id: 'bio.ch2.s0.01', text: 'Protons crowded in the lumen build a steep [[proton gradient|proton_grad]] across the thylakoid membrane.' },
        { id: 'bio.ch2.s0.02', text: 'Those H+ ions rush back to the stroma through rotary [[CF1CF0 ATP synthase|cf1cf0]], turning its ring.' },
        { id: 'bio.ch2.s0.03', text: 'Each rotation of [[CF1CF0|cf1cf0]] forges stromal [[ATP|energy_carriers]] needed to run the Calvin cycle.' },
      ] },
      { id: 'bio-calvin-rubisco', title: 'Stromal RuBisCO (1RCX) fixing CO2 into glucose', camera: { view: 'calvin_stroma', dur: 2.4, orbit: 2 }, blink: 'rubisco', flow: true, ghost: false,
        tags: ['rubisco', 'energy_carriers', 'chloroplast_hull', 'glycolysis'], cues: [
        { id: 'bio.ch2.s1.01', text: 'In the stroma, sixteen-subunit [[RuBisCO|rubisco]] captures CO2 onto five-carbon RuBP rings.' },
        { id: 'bio.ch2.s1.02', text: 'Spending 18 ATP and 12 NADPH from [[energy carriers|energy_carriers]], the cycle turns six CO2 into sugar.' },
        { id: 'bio.ch2.s1.03', text: 'Assembled glucose leaves the [[chloroplast|chloroplast_hull]] after [[RuBisCO|rubisco]] fixes airborne carbon.' },
      ] },
      { id: 'bio-cytosolic-glycolysis', title: 'Cytosolic glycolysis: glucose to 2 pyruvate', camera: { part: 'glycolysis', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'glycolysis', flow: true,
        ghost: ['glycolysis', 'energy_carriers', 'mito_hull'], tags: ['glycolysis', 'energy_carriers', 'mito_hull'], cues: [
        { id: 'bio.ch2.s2.01', text: 'In the cytosol, ten enzymes of [[glycolysis|glycolysis]] split one six-carbon glucose into two pyruvate.' },
        { id: 'bio.ch2.s2.02', text: '[[Glycolysis|glycolysis]] runs without oxygen, netting 2 ATP and 2 NADH [[carriers|energy_carriers]] fast.' },
        { id: 'bio.ch2.s2.03', text: 'When O2 is present, twin pyruvate molecules cross into the [[mitochondrion|mito_hull]] for full oxidation.' },
      ] },
    ] },
    { id: 'ch3', title: 'Krebs Matrix Cycle & Mitochondrial Complexes I-IV', steps: [
      { id: 'bio-krebs-matrix', title: 'Pyruvate oxidation & Krebs cycle (1CTS)', camera: { view: 'krebs_matrix', dur: 2.4, orbit: 2 }, blink: 'krebs_cycle', flow: true, ghost: false,
        tags: ['krebs_cycle', 'mito_hull', 'energy_carriers', 'chloroplast_hull'], cues: [
        { id: 'bio.ch3.s0.01', text: 'Inside the [[mitochondrial matrix|mito_hull]], pyruvate becomes acetyl-CoA and enters the [[Krebs cycle|krebs_cycle]].' },
        { id: 'bio.ch3.s0.02', text: 'Citrate synthase drives the [[Krebs cycle|krebs_cycle]], exhaling six CO2 back to [[chloroplasts|chloroplast_hull]].' },
        { id: 'bio.ch3.s0.03', text: 'Together with glycolysis, the [[Krebs cycle|krebs_cycle]] loads 10 NADH and 2 FADH2 [[carriers|energy_carriers]].' },
      ] },
      { id: 'bio-etc-complexes-1-3', title: 'Cristae Complexes I (5XTD), II (1ZOY) & III (1BGY)', camera: { view: 'mito_etc', dur: 2.4, orbit: 2 }, blink: 'complex_i', flow: true, ghost: false,
        tags: ['complex_i', 'complex_ii', 'complex_iii', 'proton_grad', 'energy_carriers'], cues: [
        { id: 'bio.ch3.s1.01', text: 'On inner cristae, [[Complex I|complex_i]] strips electrons from NADH and pumps four protons outward.' },
        { id: 'bio.ch3.s1.02', text: '[[Complex II|complex_ii]] accepts electrons from FADH2 without pumping H+, feeding the same ubiquinone pool.' },
        { id: 'bio.ch3.s1.03', text: '[[Complex III|complex_iii]] relays electrons to cytochrome c while pumping four more H+ into the [[gradient|proton_grad]].' },
      ] },
      { id: 'bio-etc-complex-4', title: 'Complex IV (1V54) & terminal O2 reduction', camera: { part: 'complex_iv', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'complex_iv', flow: true,
        ghost: ['complex_iv', 'complex_iii', 'proton_grad'], tags: ['complex_iv', 'complex_iii', 'proton_grad'], cues: [
        { id: 'bio.ch3.s2.01', text: 'Cytochrome c delivers electrons from [[Complex III|complex_iii]] to copper-heme [[Complex IV|complex_iv]].' },
        { id: 'bio.ch3.s2.02', text: '[[Complex IV|complex_iv]] pumps two H+ and unites electrons, protons and O2 to form clean H2O.' },
        { id: 'bio.ch3.s2.03', text: 'Remove O2 and [[Complex IV|complex_iv]] halts instantly, backing up the entire electron chain.' },
      ] },
    ] },
    { id: 'ch4', title: 'Chemiosmotic ATP Synthase, Cofactor Atoms & Recap', steps: [
      { id: 'bio-f1f0-chemiosmosis', title: 'Rotary F1F0 ATP synthase (5ARA) & 32 vs 2 ATP', camera: { part: 'f1f0_atps', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'f1f0_atps', flow: true,
        ghost: ['f1f0_atps', 'proton_grad', 'glycolysis'], tags: ['f1f0_atps', 'proton_grad', 'glycolysis', 'energy_carriers'], cues: [
        { id: 'bio.ch4.s0.01', text: 'Complexes I, III and IV pack a dense [[proton gradient|proton_grad]] inside the intermembrane space.' },
        { id: 'bio.ch4.s0.02', text: 'The [[proton gradient|proton_grad]] pushes H+ through [[F1F0 ATP synthase|f1f0_atps]], spinning its rotor to make ATP.' },
        { id: 'bio.ch4.s0.03', text: 'Aerobic [[F1F0 ATP synthase|f1f0_atps]] yields ~32 ATP per glucose versus just 2 ATP in anaerobic [[glycolysis|glycolysis]].' },
      ] },
      { id: 'bio-cofactor-atoms', title: 'Atomic Chlorophyll Mg2+ & ATP phosphate bonds', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'cofactor_atoms', flow: true, ghost: false,
        tags: ['cofactor_atoms', 'psii', 'f1f0_atps'], cues: [
        { id: 'bio.ch4.s1.01', text: 'Zoom to 0.1 nm atomic scale in the [[cofactor lens|cofactor_atoms]] showing Chlorophyll a and ATP.' },
        { id: 'bio.ch4.s1.02', text: 'In [[cofactor atoms|cofactor_atoms]], a central green Mg2+ atom sits inside four nitrogens to catch light.' },
        { id: 'bio.ch4.s1.03', text: 'Beside it, C, H, N, O and three P atoms in [[ATP|cofactor_atoms]] store energy in the gamma-phosphate bond.' },
      ] },
      { id: 'bio-recap-handoff', title: 'Live Sun/O2 modes & handoff to Membrane Transport', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['chloroplast_hull', 'mito_hull', 'proton_grad', 'f1f0_atps', 'energy_carriers'], cues: [
        { id: 'bio.ch4.s2.01', text: '[[Chloroplasts|chloroplast_hull]] and [[mitochondria|mito_hull]] run opposite carbon chemistry on shared rotary engines.' },
        { id: 'bio.ch4.s2.02', text: 'Toggle Sun and O2 modes to watch the [[proton gradient|proton_grad]] and [[ATP synthase|f1f0_atps]] respond live.' },
        { id: 'bio.ch4.s2.03', text: 'Continue next to the Membrane Transport Lab to see how cells spend ATP moving water, glucose and ions.' },
      ] },
    ] },
  ],
  details: {},
};

export const bioenergeticsTour: TourDefinition = BIOENERGETICS_TOUR;
