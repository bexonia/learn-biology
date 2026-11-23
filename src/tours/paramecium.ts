import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 12A: Free-Living Protist Paramecium caudatum (real-paramecium), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const parameciumTour: TourDefinition = {
  title: 'Paramecium caudatum: a guided tour',
  root: 'real-paramecium',
  page: 'paramecium_realistic.html',
  view: 'overview',
  summary: 'Explore an autonomous 200 um freshwater ciliate predator: alveolar pellicle, metachronal 9+2 cilia powered by axonemal dynein, star contractile vacuoles, food vacuole cyclosis and dual nuclei.',
  views: {
    overview: 'real-paramecium',
    focus: 'real-paramecium',
    cilia: 'real-para-cilia',
    osmosis: 'real-para-contractile',
    feeding: 'real-para-feeding',
    nuclei: 'real-para-nuclei',
    axoneme: 'real-para-axoneme',
  },
  chapters: [
    { id: 'ch0', title: 'A Single-Celled Freshwater Predator', steps: [
      { id: 'para-intro', title: 'Paramecium caudatum: an autonomous predator', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['pellicle', 'cilia', 'oral_groove', 'contractile_vacuole', 'macronucleus'], cues: [
        { id: 'para.ch0.s0.01', text: 'Meet Paramecium caudatum, a 200 um freshwater eukaryote that hunts as one complete cell.' },
        { id: 'para.ch0.s0.02', text: 'With zero organs or nerves, this slipper-shaped ciliate swims, feeds, digests and divides.' },
        { id: 'para.ch0.s0.03', text: 'Its [[pellicle|pellicle]], [[beating cilia|cilia]] and [[oral groove|oral_groove]] run life at cell scale.' },
      ] },
      { id: 'para-pellicle', title: 'Alveolar pellicle: armored flexible cortex', camera: { part: 'pellicle', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'pellicle',
        ghost: ['pellicle', 'cilia', 'kinetosome'], tags: ['pellicle', 'cilia', 'kinetosome'], cues: [
        { id: 'para.ch0.s1.01', text: 'Rather than a rigid plant wall, Paramecium wears a sculpted, flexible [[pellicle|pellicle]].' },
        { id: 'para.ch0.s1.02', text: 'Beneath the plasma membrane, flattened [[pellicle alveoli|pellicle]] form hexagonal armor plates.' },
        { id: 'para.ch0.s1.03', text: 'Those cortical sacs define Supergroup Alveolata, linking Paramecium to malaria parasites.' },
      ] },
      { id: 'para-trichocyst', title: 'Defensive trichocyst harpoons in the cortex', camera: { part: 'trichocyst', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'trichocyst',
        ghost: ['trichocyst', 'pellicle', 'kinetosome'], tags: ['trichocyst', 'pellicle', 'kinetosome'], cues: [
        { id: 'para.ch0.s2.01', text: 'Docked beneath the [[pellicle|pellicle]] between ciliary rows sit spindle-shaped [[trichocysts|trichocyst]].' },
        { id: 'para.ch0.s2.02', text: 'When a predator strikes, calcium triggers [[trichocysts|trichocyst]] to fire in milliseconds.' },
        { id: 'para.ch0.s2.03', text: 'Each discharged [[trichocyst|trichocyst]] stretches eightfold into a stiff shaft that pushes foes away.' },
      ] },
    ] },
    { id: 'ch1', title: 'Metachronal Cilia & the 9+2 Axoneme Motor', steps: [
      { id: 'para-cilia', title: 'Metachronal ciliary waves & kinetosomes', camera: { view: 'cilia', dur: 2.4, orbit: 2 }, blink: 'cilia', flow: true, ghost: false,
        tags: ['cilia', 'kinetosome', 'pellicle'], cues: [
        { id: 'para.ch1.s0.01', text: 'Over a thousand [[motile cilia|cilia]] carpet the [[pellicle|pellicle]], each about 10 um long.' },
        { id: 'para.ch1.s0.02', text: 'Every cilium roots in a basal [[kinetosome|kinetosome]] wired along longitudinal cortical tracks.' },
        { id: 'para.ch1.s0.03', text: 'Coordinated [[cilia|cilia]] beat in traveling metachronal waves and reverse stroke on obstacle contact.' },
      ] },
      { id: 'para-axoneme', title: 'Magnified 9+2 axoneme microtubule scaffold', camera: { view: 'axoneme', dur: 2.4, orbit: 2 }, blink: 'axoneme', flow: true, ghost: false,
        tags: ['axoneme', 'tubulin', 'dynein'], cues: [
        { id: 'para.ch1.s1.01', text: 'Zoom into the 250 nm magnified inset to inspect the classic eukaryotic [[9+2 axoneme|axoneme]].' },
        { id: 'para.ch1.s1.02', text: 'Nine outer microtubule doublets ring a central pair inside this cylindrical [[axoneme|axoneme]].' },
        { id: 'para.ch1.s1.03', text: 'Every doublet wall is built from repeating alpha and beta [[tubulin dimers|tubulin]].' },
      ] },
      { id: 'para-dynein', title: 'Axonemal dynein arms & ATP bending', camera: { part: 'dynein', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'dynein', flow: true,
        ghost: ['dynein', 'tubulin', 'axoneme'], tags: ['dynein', 'tubulin', 'axoneme'], cues: [
        { id: 'para.ch1.s2.01', text: 'Bridging neighboring [[tubulin doublets|tubulin]] are giant [[axonemal dynein arms|dynein]].' },
        { id: 'para.ch1.s2.02', text: 'Each [[dynein motor|dynein]] splits ATP built from C, H, N, O and P atoms to step along [[tubulin|tubulin]].' },
        { id: 'para.ch1.s2.03', text: 'Because [[axoneme|axoneme]] cross-links resist free sliding, [[dynein|dynein]] force bends the cilium.' },
      ] },
    ] },
    { id: 'ch2', title: 'Osmoregulation: Star Contractile Vacuoles', steps: [
      { id: 'para-osmosis', title: 'Hypotonic freshwater influx & osmotic risk', camera: { view: 'osmosis', dur: 2.4, orbit: 2 }, blink: 'contractile_vacuole', flow: true, ghost: false,
        tags: ['contractile_vacuole', 'collecting_canals', 'vatpase', 'pellicle'], cues: [
        { id: 'para.ch2.s0.01', text: 'Pond water is far fresher than cytosol, so water constantly floods inward across the [[pellicle|pellicle]].' },
        { id: 'para.ch2.s0.02', text: 'With no rigid cell wall, Paramecium would swell and burst within minutes without water pumping.' },
        { id: 'para.ch2.s0.03', text: 'Two star-shaped [[contractile vacuoles|contractile_vacuole]], front and rear, solve that osmotic threat.' },
      ] },
      { id: 'para-canals', title: 'Radiating collecting canals & rhythmic systole', camera: { part: 'collecting_canals', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'collecting_canals', flow: true,
        ghost: ['collecting_canals', 'contractile_vacuole', 'vatpase'], tags: ['collecting_canals', 'contractile_vacuole', 'vatpase'], cues: [
        { id: 'para.ch2.s1.01', text: 'Six to eight radial [[collecting canals|collecting_canals]] gather excess cytosolic water during diastole.' },
        { id: 'para.ch2.s1.02', text: 'Fluid drains from radial [[collecting canals|collecting_canals]] into the central [[vacuole|contractile_vacuole]] for expulsion.' },
        { id: 'para.ch2.s1.03', text: 'Every few seconds, systole contracts the [[vacuole|contractile_vacuole]] and jets water out a surface pore.' },
      ] },
      { id: 'para-vatpase', title: 'V-ATPase proton pumps driving water loading', camera: { part: 'vatpase', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'vatpase', flow: true,
        ghost: ['vatpase', 'collecting_canals', 'contractile_vacuole'], tags: ['vatpase', 'collecting_canals', 'contractile_vacuole'], cues: [
        { id: 'para.ch2.s2.01', text: 'Studding the spongiome tubules around [[collecting canals|collecting_canals]] are rotary [[V-ATPases|vatpase]].' },
        { id: 'para.ch2.s2.02', text: 'Burning ATP, [[V-ATPase pumps|vatpase]] drive H+ gradients that exchange ions into the [[canals|collecting_canals]].' },
        { id: 'para.ch2.s2.03', text: 'Water follows those concentrated ions through aquaporins until the [[vacuole|contractile_vacuole]] pulses.' },
      ] },
    ] },
    { id: 'ch3', title: 'Oral Groove & Food Vacuole Cyclosis', steps: [
      { id: 'para-oral-groove', title: 'Ciliated oral groove & cytostome funnel', camera: { view: 'feeding', dur: 2.4, orbit: 2 }, blink: 'oral_groove', flow: true, ghost: false,
        tags: ['oral_groove', 'cytostome', 'food_vacuole', 'cilia'], cues: [
        { id: 'para.ch3.s0.01', text: 'A deep ciliated [[oral groove|oral_groove]] sweeps down one side of the swimming cell toward its midline.' },
        { id: 'para.ch3.s0.02', text: 'Specialized [[cilia|cilia]] inside the [[oral groove|oral_groove]] funnel suspended bacteria into the [[cytostome|cytostome]].' },
        { id: 'para.ch3.s0.03', text: 'At the base of the [[cytostome|cytostome]] cytopharynx, incoming prey pinches off inside fresh membrane.' },
      ] },
      { id: 'para-food-vacuole', title: 'Phagocytic food vacuoles & acidic digestion', camera: { part: 'food_vacuole', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'food_vacuole', flow: true,
        ghost: ['food_vacuole', 'cytostome', 'oral_groove'], tags: ['food_vacuole', 'cytostome', 'cytoproct'], cues: [
        { id: 'para.ch3.s1.01', text: 'Each budding [[food vacuole|food_vacuole]] breaks away from the [[cytostome|cytostome]] and joins cytoplasmic flow.' },
        { id: 'para.ch3.s1.02', text: 'Along its cyclosis loop, the [[food vacuole|food_vacuole]] fuses with lysosomes and shifts from green to acid amber.' },
        { id: 'para.ch3.s1.03', text: 'Acid hydrolases digest the bacteria, then digested amino acids and sugars cross into the cytosol.' },
      ] },
      { id: 'para-cytoproct', title: 'Exocytosis at the posterior cytoproct', camera: { part: 'cytoproct', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'cytoproct', flow: true,
        ghost: ['cytoproct', 'food_vacuole', 'pellicle'], tags: ['cytoproct', 'food_vacuole', 'cytostome'], cues: [
        { id: 'para.ch3.s2.01', text: 'Once nutrients are absorbed, the spent [[food vacuole|food_vacuole]] reaches the posterior [[cytoproct|cytoproct]].' },
        { id: 'para.ch3.s2.02', text: 'The [[cytoproct|cytoproct]] is a dedicated cell-anus docking site where vacuole membrane fuses outward.' },
        { id: 'para.ch3.s2.03', text: 'Indigestible debris exits cleanly while membrane discs recycle along tracks back to the [[cytostome|cytostome]].' },
      ] },
    ] },
    { id: 'ch4', title: 'Dual Nuclei, Metabolism & Autonomous Recap', steps: [
      { id: 'para-nuclei', title: 'Nuclear dimorphism: macronucleus & micronucleus', camera: { view: 'nuclei', dur: 2.4, orbit: 2 }, blink: 'macronucleus', flow: true, ghost: false,
        tags: ['macronucleus', 'micronucleus', 'ribosome_80s', 'mito'], cues: [
        { id: 'para.ch4.s0.01', text: 'Unlike animal or plant cells, Paramecium splits its genome across a [[macronucleus|macronucleus]] and [[micronucleus|micronucleus]].' },
        { id: 'para.ch4.s0.02', text: 'The polyploid [[macronucleus|macronucleus]] drives daily gene activity while the [[micronucleus|micronucleus]] stores germline DNA.' },
        { id: 'para.ch4.s0.03', text: 'During sexual conjugation, two cells swap haploid [[micronucleus|micronucleus]] copies and rebuild a fresh [[macronucleus|macronucleus]].' },
      ] },
      { id: 'para-mito-ribo', title: '80S ribosomes & mitochondrial ATP supply', camera: { part: 'mito', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'mito', flow: true,
        ghost: ['mito', 'ribosome_80s', 'macronucleus'], tags: ['mito', 'ribosome_80s', 'macronucleus', 'dynein', 'vatpase'], cues: [
        { id: 'para.ch4.s1.01', text: 'Dense clouds of eukaryotic [[80S ribosomes|ribosome_80s]] translate continuous mRNA streaming from the [[macronucleus|macronucleus]].' },
        { id: 'para.ch4.s1.02', text: 'Tubular [[mitochondria|mito]] burn food-derived fuel with O2 to supply steady cytosolic ATP.' },
        { id: 'para.ch4.s1.03', text: 'That mitochondrial ATP directly fuels every [[dynein|dynein]] stroke and [[V-ATPase|vatpase]] osmotic pump.' },
      ] },
      { id: 'para-finale', title: 'Complete autonomy inside a single eukaryote', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['pellicle', 'cilia', 'oral_groove', 'food_vacuole', 'contractile_vacuole', 'macronucleus', 'dynein'], cues: [
        { id: 'para.ch4.s2.01', text: 'Together, [[9+2 cilia|cilia]], [[contractile vacuoles|contractile_vacuole]] and [[food vacuoles|food_vacuole]] run a whole hunter.' },
        { id: 'para.ch4.s2.02', text: 'From a 200 um [[pellicle|pellicle]] down to ATP atoms on [[dynein|dynein]], one cell handles every task of life.' },
        { id: 'para.ch4.s2.03', text: 'Inspect any tag up close, or continue to Plasmodium to meet an alveolate cousin turned parasite.' },
      ] },
    ] },
  ],
  details: {},
};
