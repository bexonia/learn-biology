import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 10: Domain Archaea & Endosymbiosis (real-archaea), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const archaeaTour: TourDefinition = {
  title: 'Archaeon (Asgard & Extremophiles): a guided tour',
  root: 'real-archaea',
  page: 'archaea_realistic.html',
  view: 'overview',
  summary: 'Explore the third domain of life: crystalline S-layer, C40 tetraether monolayer, ATP archaellum, bacteriorhodopsin, archaeal histones, Lokiactin and the endosymbiotic origin of mitochondria.',
  views: {
    overview: 'real-archaea',
    focus: 'real-archaea',
    envelope: 'real-arch-envelope',
    archaellum: 'real-arch-archaellum',
    genome: 'real-arch-histones',
    synapse: 'real-arch-synapse',
    extremophile: 'real-arch-bacteriorhodopsin',
  },
  chapters: [
    { id: 'ch0', title: 'The 3rd Domain of Life', steps: [
      { id: 'arch-intro', title: 'Asgard archaeon: the third domain', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['slayer', 'tentacle', 'symbiont', 'histone'], cues: [
        { id: 'arch.ch0.s0.01', text: 'Meet Domain Archaea, a third branch of cellular life wholly distinct from Bacteria.' },
        { id: 'arch.ch0.s0.02', text: 'This Prometheoarchaeum-like Asgard archaeon has a 550 nm body with no membrane nucleus.' },
        { id: 'arch.ch0.s0.03', text: 'Yet its [[S-layer|slayer]], [[tentacles|tentacle]] and [[histones|histone]] set it apart from E. coli.' },
      ] },
      { id: 'arch-tentacles', title: 'Branched Asgard cytoplasmic tentacles', camera: { part: 'tentacle', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'tentacle',
        ghost: ['tentacle', 'lokiactin', 'symbiont'], tags: ['tentacle', 'lokiactin', 'symbiont'], cues: [
        { id: 'arch.ch0.s1.01', text: 'Extending 1 to 3 um from the body are long branched [[cytoplasmic tentacles|tentacle]].' },
        { id: 'arch.ch0.s1.02', text: 'Internal [[Lokiactin cables|lokiactin]] brace each [[tentacle|tentacle]] as it reaches into sediment.' },
        { id: 'arch.ch0.s1.03', text: 'Those [[Asgard protrusions|tentacle]] wrap closely around a neighboring [[bacterial symbiont|symbiont]].' },
      ] },
      { id: 'arch-extremophiles', title: 'Extremophile cousins: Sulfolobus & Halobacterium', camera: { view: 'extremophile', dur: 2.4, orbit: 2 }, blink: 'extremophile_shell', ghost: false,
        tags: ['extremophile_shell', 'slayer', 'bacteriorhodopsin', 'a_atps'], cues: [
        { id: 'arch.ch0.s2.01', text: 'Beside Asgard lineages thrive extremophiles enclosed in a tough [[extremophile shell|extremophile_shell]].' },
        { id: 'arch.ch0.s2.02', text: 'Sulfolobus grows in 80 C pH 2 hot springs, while Halobacterium colors salt ponds purple.' },
        { id: 'arch.ch0.s2.03', text: 'From boiling vents to human guts, every archaeon shares unique envelope and core genes.' },
      ] },
    ] },
    { id: 'ch1', title: 'Envelope: S-Layer & Tetraether Monolayer', steps: [
      { id: 'arch-slayer', title: 'Hexagonal glycoprotein S-layer shell', camera: { view: 'envelope', dur: 2.4, orbit: 2 }, blink: 'slayer', ghost: false,
        tags: ['slayer', 'tetraether'], cues: [
        { id: 'arch.ch1.s0.01', text: 'Cut open the envelope to see its outer coat: a hexagonal [[glycoprotein S-layer|slayer]].' },
        { id: 'arch.ch1.s0.02', text: 'Interlocking SlaA and SlaB stalks form an 18 nm crystalline [[S-layer lattice|slayer]] with pores.' },
        { id: 'arch.ch1.s0.03', text: 'Because Archaea build zero peptidoglycan in this [[S-layer|slayer]], penicillin cannot harm them.' },
      ] },
      { id: 'arch-tetraether', title: 'Ether-linked C40 tetraether monolayer', camera: { part: 'tetraether', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'tetraether',
        ghost: ['tetraether', 'slayer', 'ether_bond'], tags: ['tetraether', 'slayer', 'ether_bond'], cues: [
        { id: 'arch.ch1.s1.01', text: 'Beneath the [[S-layer|slayer]] lies not a bacterial bilayer, but a continuous [[tetraether monolayer|tetraether]].' },
        { id: 'arch.ch1.s1.02', text: 'C40 [[tetraether lipids|tetraether]] span the full membrane as one monolayer stable in boiling acid.' },
        { id: 'arch.ch1.s1.03', text: 'Branched isoprenoid chains join by [[ether bonds|ether_bond]] to opposite-handed G1P glycerol heads.' },
      ] },
      { id: 'arch-barrier', title: 'Proton-tight barrier under extreme stress', camera: { part: 'slayer', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'tetraether',
        ghost: ['slayer', 'tetraether', 'extremophile_shell'], tags: ['slayer', 'tetraether', 'extremophile_shell'], cues: [
        { id: 'arch.ch1.s2.01', text: 'Methyl branches and cyclopentane rings pack the [[tetraether membrane|tetraether]] tight against protons.' },
        { id: 'arch.ch1.s2.02', text: 'Even in pH 2 acid, this [[ether monolayer|tetraether]] keeps the interior near neutral pH 6.5.' },
        { id: 'arch.ch1.s2.03', text: 'Paired with the porous [[S-layer|slayer]], the [[extremophile envelope|extremophile_shell]] resists heat and salt.' },
      ] },
    ] },
    { id: 'ch2', title: 'ATP Archaellum & Light-Driven Pumps', steps: [
      { id: 'arch-archaellum', title: 'Solid ArlB helical archaellum propeller', camera: { view: 'archaellum', dur: 2.4, orbit: 2 }, blink: 'archaellum', flow: true, ghost: false,
        tags: ['archaellum', 'arli', 'tetraether'], cues: [
        { id: 'arch.ch2.s0.01', text: 'To swim, Archaea spin a rotary [[archaellum|archaellum]] that evolved apart from bacterial flagella.' },
        { id: 'arch.ch2.s0.02', text: 'Rather than a hollow 20 nm tube, the [[archaellum|archaellum]] is a solid 12 nm ArlB protein helix.' },
        { id: 'arch.ch2.s0.03', text: 'Related to Type IV pili, its [[ArlB filament|archaellum]] adds new subunits at the base, not the tip.' },
      ] },
      { id: 'arch-arli', title: 'ArlI hexameric ATPase rotary motor', camera: { part: 'arli', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'arli', flow: true,
        ghost: ['arli', 'archaellum', 'tetraether'], tags: ['arli', 'archaellum'], cues: [
        { id: 'arch.ch2.s1.01', text: 'Bacterial flagella burn proton flow, but the [[archaellum|archaellum]] runs directly on Mg2+-ATP.' },
        { id: 'arch.ch2.s1.02', text: 'At the base, a cytoplasmic [[ArlI hexamer|arli]] hydrolyzes yellow ATP into ADP and phosphate.' },
        { id: 'arch.ch2.s1.03', text: 'Sequential strokes in [[ArlI|arli]] rotate the [[ArlB shaft|archaellum]] forward or backward to steer.' },
      ] },
      { id: 'arch-bacteriorhodopsin', title: 'Halobacterium bacteriorhodopsin proton pump', camera: { part: 'bacteriorhodopsin', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'bacteriorhodopsin', flow: true,
        ghost: ['bacteriorhodopsin', 'a_atps', 'extremophile_shell'], tags: ['bacteriorhodopsin', 'a_atps', 'extremophile_shell'], cues: [
        { id: 'arch.ch2.s2.01', text: 'Switch to Halobacterium purple membrane, tiled with light-driven [[bacteriorhodopsin|bacteriorhodopsin]].' },
        { id: 'arch.ch2.s2.02', text: 'Each seven-helix [[bacteriorhodopsin trimer|bacteriorhodopsin]] holds retinal that bends on green light.' },
        { id: 'arch.ch2.s2.03', text: 'With zero chlorophyll, [[bacteriorhodopsin|bacteriorhodopsin]] pumps protons directly across the membrane.' },
      ] },
      { id: 'arch-aatps', title: 'Rotary A1A0 ATP synthase turbine', camera: { part: 'a_atps', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'a_atps', flow: true,
        ghost: ['a_atps', 'bacteriorhodopsin', 'tetraether'], tags: ['a_atps', 'bacteriorhodopsin', 'tetraether'], cues: [
        { id: 'arch.ch2.s3.01', text: 'Protons pumped by [[bacteriorhodopsin|bacteriorhodopsin]] or respiration return via [[A1A0 ATP synthase|a_atps]].' },
        { id: 'arch.ch2.s3.02', text: 'Archaeal [[A1A0 ATP synthase|a_atps]] resembles eukaryotic vacuolar ATPases more than bacterial F1Fo.' },
        { id: 'arch.ch2.s3.03', text: 'Its spinning proteolipid ring turns proton flow into cytosolic ATP for growth and swimming.' },
      ] },
    ] },
    { id: 'ch3', title: 'Eukaryotic-Like Core: Histones, RNAP & ESPs', steps: [
      { id: 'arch-histones', title: 'Circular dsDNA on HMfB archaeal histones', camera: { view: 'genome', dur: 2.4, orbit: 2 }, blink: 'histone', ghost: false,
        tags: ['dna', 'histone', 'rnap', 'ribosome'], cues: [
        { id: 'arch.ch3.s0.01', text: 'Zoom inside the cytosol to see why Eukaryotes branch directly from within Domain Archaea.' },
        { id: 'arch.ch3.s0.02', text: 'Circular [[DNA|dna]] wraps around [[archaeal histones|histone]], the direct ancestor of our chromatin.' },
        { id: 'arch.ch3.s0.03', text: 'Unlike bacterial HU proteins, stacked [[HMfB dimers|histone]] coil [[DNA|dna]] into a long superhelix.' },
      ] },
      { id: 'arch-rnap', title: 'TBP/TFB & 12-subunit archaeal RNAP', camera: { part: 'rnap', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'rnap', flow: true,
        ghost: ['rnap', 'dna', 'mrna', 'histone'], tags: ['rnap', 'dna', 'mrna'], cues: [
        { id: 'arch.ch3.s1.01', text: 'To read genes, Archaea recruit a 12-subunit [[RNA polymerase|rnap]] homologous to eukaryotic Pol II.' },
        { id: 'arch.ch3.s1.02', text: 'Instead of bacterial sigma factors, TBP and TFB load [[archaeal RNAP|rnap]] onto TATA-box [[DNA|dna]].' },
        { id: 'arch.ch3.s1.03', text: 'The open [[RNAP clamp|rnap]] unwinds the double helix and extrudes a fresh [[mRNA transcript|mrna]].' },
      ] },
      { id: 'arch-ribosome', title: '70S archaeal ribosomes & translation', camera: { part: 'ribosome', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ribosome', flow: true,
        ghost: ['ribosome', 'mrna', 'rnap'], tags: ['ribosome', 'mrna'], cues: [
        { id: 'arch.ch3.s2.01', text: 'Translating that [[mRNA|mrna]] are compact 22 nm [[70S archaeal ribosomes|ribosome]] in the cytosol.' },
        { id: 'arch.ch3.s2.02', text: 'Though sized like bacterial 70S, these [[ribosomes|ribosome]] use eukaryotic proteins and Met starts.' },
        { id: 'arch.ch3.s2.03', text: 'That shared structure explains why bacterial drugs like streptomycin spare [[archaeal 70S|ribosome]].' },
      ] },
      { id: 'arch-esps', title: 'Asgard ESPs: Lokiactin & ESCRT-III rings', camera: { part: 'lokiactin', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'lokiactin',
        ghost: ['lokiactin', 'escrt', 'tentacle'], tags: ['lokiactin', 'escrt', 'tentacle'], cues: [
        { id: 'arch.ch3.s3.01', text: 'Asgard genomes add Eukaryotic Signature Proteins once thought unique to complex cells.' },
        { id: 'arch.ch3.s3.02', text: 'Profilin-guided [[Lokiactin filaments|lokiactin]] polymerize to shape and extend [[Asgard tentacles|tentacle]].' },
        { id: 'arch.ch3.s3.03', text: 'Spiral [[ESCRT-III rings|escrt]] pinch membranes from inside for cell division and vesicle scission.' },
      ] },
    ] },
    { id: 'ch4', title: 'Endosymbiotic Synapse & Atomic Foundations', steps: [
      { id: 'arch-symbiont', title: 'Asgard host meets alphaproteobacterium', camera: { view: 'synapse', dur: 2.4, orbit: 2 }, blink: 'symbiont', flow: true, ghost: false,
        tags: ['symbiont', 'synapse', 'tentacle', 'h2_flow', 'atp_export'], cues: [
        { id: 'arch.ch4.s0.01', text: 'Follow the [[tentacles|tentacle]] to a contact cleft holding a Rickettsia-like [[alphaproteobacterium|symbiont]].' },
        { id: 'arch.ch4.s0.02', text: 'This [[bacterial partner|symbiont]] carries two membranes, circular DNA and an O2 respiratory chain.' },
        { id: 'arch.ch4.s0.03', text: 'Close wrapping at the [[endosymbiotic synapse|synapse]] lets both domains trade metabolites directly.' },
      ] },
      { id: 'arch-synapse-flow', title: 'H2 syntrophy to mitochondrial ATP export', camera: { part: 'synapse', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'synapse', flow: true,
        ghost: ['synapse', 'symbiont', 'h2_flow', 'atp_export'], tags: ['synapse', 'h2_flow', 'atp_export', 'symbiont'], cues: [
        { id: 'arch.ch4.s1.01', text: 'Fermenting amino acids, the host releases [[H2 and formate|h2_flow]] that the [[symbiont|symbiont]] burns with O2.' },
        { id: 'arch.ch4.s1.02', text: 'Sustained [[syntrophy|synapse]] exchanging [[H2|h2_flow]] for bacterial [[ATP|atp_export]] gave rise to mitochondria.' },
        { id: 'arch.ch4.s1.03', text: 'Unlike parasitic Rickettsia stealing ATP via Tlc1, ANT carriers reversed [[ATP export|atp_export]] outward.' },
      ] },
      { id: 'arch-ether-bond', title: 'Atomic zoom: ether bond vs. ester bond', camera: { part: 'ether_bond', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'ether_bond',
        ghost: ['ether_bond', 'tetraether'], tags: ['ether_bond', 'tetraether'], cues: [
        { id: 'arch.ch4.s2.01', text: 'Zoom to the 0.1 nm atomic inset where an archaeal [[ether bond|ether_bond]] defines the whole domain.' },
        { id: 'arch.ch4.s2.02', text: 'Bacterial ester lipids expose a carbonyl oxygen that hot acid readily splits by hydrolysis.' },
        { id: 'arch.ch4.s2.03', text: 'Archaea replace it with a tough C-O-C [[ether link|ether_bond]] built from C, H, O, P and Mg2+ ions.' },
      ] },
      { id: 'arch-finale', title: 'Bridge from prokaryotes to eukaryotes', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['slayer', 'tetraether', 'archaellum', 'histone', 'lokiactin', 'symbiont', 'atp_export'], cues: [
        { id: 'arch.ch4.s3.01', text: 'Together, [[ether membranes|tetraether]], [[ATP archaella|archaellum]] and [[histones|histone]] define the third domain.' },
        { id: 'arch.ch4.s3.02', text: 'From [[Asgard Lokiactin|lokiactin]] and [[symbiotic ATP export|atp_export]] emerged the first complex eukaryotic cells.' },
        { id: 'arch.ch4.s3.03', text: 'Explore any molecular tag now, or continue to Yeast to enter Domain Eukarya.' },
      ] },
    ] },
  ],
  details: {},
};
