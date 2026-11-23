import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 12B: Eukaryotic Intracellular Parasite Plasmodium falciparum (real-plasmodium), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const plasmodiumTour: TourDefinition = {
  title: 'Plasmodium falciparum: a guided tour',
  root: 'real-plasmodium',
  page: 'plasmodium_realistic.html',
  view: 'overview',
  summary: 'Explore a eukaryotic malaria parasite invading a human red blood cell: apical complex, AMA1-RON2 moving junction, PfMyoA glideosome, 14-chromosome nucleus, 4-membrane apicoplast and hemozoin biocrystals.',
  views: {
    overview: 'real-plasmodium',
    focus: 'real-plasmodium',
    invasion: 'real-plas-apical',
    core: 'real-plasmodium',
    apicoplast: 'real-plas-apicoplast',
    hemozoin: 'real-plas-digestive',
    atoms: 'real-plas-heme',
  },
  chapters: [
    { id: 'ch0', title: 'A Eukaryote Inside a Human Red Blood Cell', steps: [
      { id: 'plas-intro', title: 'Plasmodium falciparum invading an erythrocyte', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['rbc', 'pvm', 'apical_complex', 'nucleus', 'apicoplast', 'digestive_vacuole'], cues: [
        { id: 'plas.ch0.s0.01', text: 'Meet Plasmodium falciparum, the malaria parasite invading a 7.5 um human [[red blood cell|rbc]].' },
        { id: 'plas.ch0.s0.02', text: 'Unlike bacterial Chlamydia or viruses, this 1.5 um merozoite is a full eukaryotic cell.' },
        { id: 'plas.ch0.s0.03', text: 'Cut open the crimson [[erythrocyte|rbc]] to trace its [[parasitophorous vacuole|pvm]] and [[nucleus|nucleus]].' },
      ] },
      { id: 'plas-pvm', title: 'The parasitophorous vacuole shield (PVM)', camera: { part: 'pvm', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'pvm',
        ghost: ['pvm', 'rbc', 'imc'], tags: ['pvm', 'rbc', 'imc'], cues: [
        { id: 'plas.ch0.s1.01', text: 'Inside the [[red blood cell|rbc]], the parasite lives enclosed in a [[parasitophorous vacuole|pvm]].' },
        { id: 'plas.ch0.s1.02', text: 'Like Chlamydia\'s bacterial inclusion, this [[PVM barrier|pvm]] hides the invader from host defenses.' },
        { id: 'plas.ch0.s1.03', text: 'Because mature human [[red blood cells|rbc]] lack nuclei and MHC, this shelter hides it from T cells.' },
      ] },
      { id: 'plas-imc', title: 'Inner Membrane Complex: alveolate heritage', camera: { part: 'imc', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'imc',
        ghost: ['imc', 'pvm', 'glideosome'], tags: ['imc', 'glideosome', 'actin'], cues: [
        { id: 'plas.ch0.s2.01', text: 'Beneath the parasite plasma membrane sits a quilted [[Inner Membrane Complex|imc]], or IMC.' },
        { id: 'plas.ch0.s2.02', text: 'Those flattened [[IMC sacs|imc]] share direct ancestry with the cortical alveoli of Paramecium.' },
        { id: 'plas.ch0.s2.03', text: 'Instead of anchoring cilia, the [[IMC|imc]] frames the sub-pellicular track for the [[glideosome|glideosome]].' },
      ] },
    ] },
    { id: 'ch1', title: 'Apical Complex & Glideosome Invasion', steps: [
      { id: 'plas-apical', title: 'Polar rings, micronemes & PfRH5 docking', camera: { view: 'invasion', dur: 2.4, orbit: 2 }, blink: 'apical_complex', flow: true, ghost: false,
        tags: ['apical_complex', 'micronemes', 'pfrh5', 'rhoptries', 'rbc'], cues: [
        { id: 'plas.ch1.s0.01', text: 'At the nose sits the [[apical complex|apical_complex]], a polar assembly defining phylum Apicomplexa.' },
        { id: 'plas.ch1.s0.02', text: 'Cigar-shaped [[micronemes|micronemes]] discharge [[PfRH5 adhesins|pfrh5]] toward the [[red blood cell|rbc]].' },
        { id: 'plas.ch1.s0.03', text: 'Essential [[PfRH5|pfrh5]] locks onto human Basigin receptors, committing the merozoite to invade.' },
      ] },
      { id: 'plas-junction', title: 'Rhoptries & the AMA1-RON2 moving junction', camera: { part: 'moving_junction', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'moving_junction', flow: true,
        ghost: ['moving_junction', 'rhoptries', 'glideosome', 'rbc'], tags: ['moving_junction', 'rhoptries', 'glideosome', 'rbc'], cues: [
        { id: 'plas.ch1.s1.01', text: 'Next, twin tear-drop [[rhoptries|rhoptries]] inject RON2 protein straight into the [[RBC membrane|rbc]].' },
        { id: 'plas.ch1.s1.02', text: 'Bound to the [[moving junction|moving_junction]], the [[glideosome|glideosome]] pulls the merozoite into the [[red blood cell|rbc]].' },
        { id: 'plas.ch1.s1.03', text: 'Parasite AMA1 clamps onto host-embedded RON2, sealing a tight [[moving junction|moving_junction]] ring.' },
      ] },
      { id: 'plas-glideosome', title: 'PfMyoA-MTIP glideosome walking on PfActI', camera: { part: 'glideosome', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'glideosome', flow: true,
        ghost: ['glideosome', 'actin', 'imc', 'moving_junction'], tags: ['glideosome', 'actin', 'imc'], cues: [
        { id: 'plas.ch1.s2.01', text: 'Between the plasma membrane and [[IMC|imc]] runs the ATP-powered [[PfMyoA-MTIP glideosome|glideosome]].' },
        { id: 'plas.ch1.s2.02', text: 'Myosin heads in the [[glideosome|glideosome]] step backward along short [[PfActI actin tracks|actin]].' },
        { id: 'plas.ch1.s2.03', text: 'Linked to external adhesins, [[actin|actin]] and [[glideosome|glideosome]] pull the cell inward in 20 seconds.' },
      ] },
      { id: 'plas-pvm-seal', title: 'Rhoptry lipids & parasitophorous vacuole closure', camera: { part: 'rhoptries', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'rhoptries', flow: true,
        ghost: ['rhoptries', 'micronemes', 'pvm', 'rbc'], tags: ['rhoptries', 'pvm', 'moving_junction'], cues: [
        { id: 'plas.ch1.s3.01', text: 'As the [[moving junction|moving_junction]] slides rearward, [[rhoptries|rhoptries]] pour lipids into the entry pocket.' },
        { id: 'plas.ch1.s3.02', text: 'Those secretions expand the host membrane inward to form the new [[parasitophorous vacuole|pvm]].' },
        { id: 'plas.ch1.s3.03', text: 'Once the rear closes, the parasite sits sealed inside its [[PVM|pvm]] ready to feed and remodel.' },
      ] },
    ] },
    { id: 'ch2', title: 'True Eukaryotic Core: Nucleus, 80S & Mitochondrion', steps: [
      { id: 'plas-nucleus', title: 'Membrane-bound nucleus & 14 linear chromosomes', camera: { view: 'core', dur: 2.4, orbit: 2 }, blink: 'nucleus', ghost: false,
        tags: ['nucleus', 'ribosome_80s', 'mito', 'pvm'], cues: [
        { id: 'plas.ch2.s0.01', text: 'Inside the merozoite sits a true [[nucleus|nucleus]] enclosed by a porous double nuclear envelope.' },
        { id: 'plas.ch2.s0.02', text: 'Its [[nucleus|nucleus]] holds 23.3 Mbp across 14 linear chromosomes encoding about 5,300 genes.' },
        { id: 'plas.ch2.s0.03', text: 'That nuclear genome dwarfs Chlamydia\'s 1.04 Mbp bacterial chromosome over twentyfold.' },
      ] },
      { id: 'plas-ribosome', title: 'Cytosolic 80S ribosomes & host RBC remodeling', camera: { part: 'ribosome_80s', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ribosome_80s', flow: true,
        ghost: ['ribosome_80s', 'nucleus', 'pvm', 'rbc'], tags: ['ribosome_80s', 'nucleus', 'pvm', 'rbc'], cues: [
        { id: 'plas.ch2.s1.01', text: 'Surrounding the [[nucleus|nucleus]], eukaryotic [[80S ribosomes|ribosome_80s]] translate parasite mRNA.' },
        { id: 'plas.ch2.s1.02', text: 'Because it runs [[80S ribosomes|ribosome_80s]] and builds zero peptidoglycan, penicillin cannot kill it.' },
        { id: 'plas.ch2.s1.03', text: 'Exported proteins cross the [[PVM|pvm]] via PTEX translocons to stiffen and remodel the [[RBC|rbc]].' },
      ] },
      { id: 'plas-mito', title: 'Single branched mitochondrion & 6 kb genome', camera: { part: 'mito', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'mito', flow: true,
        ghost: ['mito', 'nucleus', 'apicoplast'], tags: ['mito', 'apicoplast', 'nucleus'], cues: [
        { id: 'plas.ch2.s2.01', text: 'One branched tubular [[mitochondrion|mito]] snakes through the cytosol beside the [[nucleus|nucleus]].' },
        { id: 'plas.ch2.s2.02', text: 'Its 6 kb [[mitochondrial genome|mito]] is the smallest known, encoding just three respiratory proteins.' },
        { id: 'plas.ch2.s2.03', text: 'Blood-stage ATP comes mostly from glycolysis, while [[mitochondria|mito]] sustain pyrimidine synthesis.' },
      ] },
    ] },
    { id: 'ch3', title: 'The 4-Membrane Apicoplast: Relict Red Alga', steps: [
      { id: 'plas-apicoplast', title: 'Four-membrane plastid from secondary endosymbiosis', camera: { view: 'apicoplast', dur: 2.4, orbit: 2 }, blink: 'apicoplast_membranes', ghost: false,
        tags: ['apicoplast', 'apicoplast_membranes', 'apicoplast_dna', 'mito'], cues: [
        { id: 'plas.ch3.s0.01', text: 'Beside the [[mitochondrion|mito]] lies a surprise: the [[apicoplast|apicoplast]], a relict chloroplast.' },
        { id: 'plas.ch3.s0.02', text: 'Four [[concentric membranes|apicoplast_membranes]] wrap the [[apicoplast|apicoplast]] from ancient secondary endosymbiosis.' },
        { id: 'plas.ch3.s0.03', text: 'Those four [[apicoplast bilayers|apicoplast_membranes]] record a protist engulfing a photosynthetic red alga.' },
      ] },
      { id: 'plas-apicoplast-dna', title: '35 kb circular DNA & bacterial 70S ribosomes', camera: { part: 'apicoplast_dna', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'apicoplast_dna', flow: true,
        ghost: ['apicoplast_dna', 'apicoplast', 'apicoplast_membranes'], tags: ['apicoplast_dna', 'apicoplast', 'apicoplast_membranes'], cues: [
        { id: 'plas.ch3.s1.01', text: 'Inside the [[apicoplast|apicoplast]] coils a 35 kb circular [[apicoplast DNA|apicoplast_dna]] genome.' },
        { id: 'plas.ch3.s1.02', text: 'Its [[circular genome|apicoplast_dna]] encodes bacterial-type 70S ribosomes distinct from cytosolic [[80S|ribosome_80s]].' },
        { id: 'plas.ch3.s1.03', text: 'All photosynthesis genes vanished long ago, yet the [[apicoplast|apicoplast]] remains indispensable.' },
      ] },
      { id: 'plas-delayed-death', title: 'Isoprenoid synthesis & delayed-death antibiotics', camera: { part: 'apicoplast', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'apicoplast', flow: true,
        ghost: ['apicoplast', 'apicoplast_dna', 'mito'], tags: ['apicoplast', 'apicoplast_dna', 'mito'], cues: [
        { id: 'plas.ch3.s2.01', text: 'In human blood, the [[apicoplast|apicoplast]] synthesizes essential IPP isoprenoids via the MEP pathway.' },
        { id: 'plas.ch3.s2.02', text: 'Antibiotics like doxycycline block its bacterial 70S ribosomes and halt [[apicoplast|apicoplast]] division.' },
        { id: 'plas.ch3.s2.03', text: 'Daughter merozoites inherit no [[apicoplast|apicoplast]] and die next cycle, causing delayed death.' },
      ] },
    ] },
    { id: 'ch4', title: 'Hemoglobin Digestion, Hemozoin & Atomic Iron', steps: [
      { id: 'plas-digestive', title: 'Hemoglobin uptake into the digestive vacuole', camera: { view: 'hemozoin', dur: 2.4, orbit: 2 }, blink: 'digestive_vacuole', flow: true, ghost: false,
        tags: ['digestive_vacuole', 'hemoglobin', 'hemozoin', 'rbc'], cues: [
        { id: 'plas.ch4.s0.01', text: 'To fuel rapid growth, the parasite gulps host [[hemoglobin|hemoglobin]] from the [[red blood cell|rbc]].' },
        { id: 'plas.ch4.s0.02', text: 'Inside the acidic [[digestive vacuole|digestive_vacuole]], proteases cleave [[hemoglobin|hemoglobin]] into amino acids.' },
        { id: 'plas.ch4.s0.03', text: 'Breaking down [[hemoglobin|hemoglobin]] dumps toxic free heme into the [[digestive vacuole|digestive_vacuole]] lumen.' },
      ] },
      { id: 'plas-hemozoin', title: 'Hemozoin biocrystals & antimalarial targets', camera: { part: 'hemozoin', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'hemozoin', flow: true,
        ghost: ['hemozoin', 'digestive_vacuole', 'hemoglobin'], tags: ['hemozoin', 'digestive_vacuole', 'iron_atom'], cues: [
        { id: 'plas.ch4.s1.01', text: 'Free iron-heme generates reactive radicals that would shred the [[digestive vacuole|digestive_vacuole]] membrane.' },
        { id: 'plas.ch4.s1.02', text: 'Plasmodium detoxifies free heme by stacking dimers into insoluble dark [[hemozoin crystals|hemozoin]].' },
        { id: 'plas.ch4.s1.03', text: 'Chloroquine blocks [[hemozoin|hemozoin]] crystal growth so toxic free heme kills the parasite instead.' },
      ] },
      { id: 'plas-atoms-finale', title: 'Atomic Fe coordination & Stage 2 vs Stage 3 recap', camera: { view: 'atoms', dur: 2.5, orbit: 3 }, blink: 'iron_atom', flow: true, ghost: false,
        tags: ['iron_atom', 'hemozoin', 'apicoplast', 'apical_complex', 'ribosome_80s'], cues: [
        { id: 'plas.ch4.s2.01', text: 'Zoom to 0.1 nm atomic scale where a central [[Fe3+ iron atom|iron_atom]] anchors each heme ring.' },
        { id: 'plas.ch4.s2.02', text: 'Each [[iron atom|iron_atom]] bonds an adjacent propionate oxygen, locking C, H, N and O into [[hemozoin|hemozoin]].' },
        { id: 'plas.ch4.s2.03', text: 'Explore any tag now, or continue to Stage 3 to contrast eukaryotic Plasmodium with bacterial parasites.' },
      ] },
    ] },
  ],
  details: {},
};
