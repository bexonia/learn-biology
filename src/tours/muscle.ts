import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 17B: Skeletal Muscle Fiber & Sarcomere (real-muscle), played by cell_explorer.html.
// Every cue stays <= 107 plain characters and 100% pure ASCII for clean TTS synthesis.
export const MUSCLE_TOUR: TourDefinition = {
  title: 'Skeletal Muscle Fiber & Sarcomere: a guided tour',
  root: 'real-muscle',
  page: 'muscle_realistic.html',
  view: 'overview',
  summary: 'Explore how identical 6.4 Gbp human DNA builds a multinucleated skeletal myofiber via H3K27ac chromatin: sarcolemma and T-tubule excitation, sarcoplasmic reticulum RyR1 Ca2+ release, 2.2 um to 1.6 um sarcomere bands and titin springs, troponin-tropomyosin (6KN8) switching, Myosin-II (2MYS) ATP cross-bridge strokes, SERCA1a (1SU4) relaxation and atomic Ca2+/ATP chemistry.',
  views: {
    overview: 'real-muscle',
    triad_sr: 'real-muscle-serca',
    sarcomere: 'real-muscle-sarcomere',
    crossbridge: 'real-muscle-myosin',
    atoms: 'real-spec-atoms',
  },
  chapters: [
    { id: 'ch0', title: 'Same 6.4 Gbp DNA, Built to Pull', steps: [
      { id: 'mus-overview-fiber', title: 'Multinucleated myofiber & contractile packing', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['sarcolemma', 'peripheral_nuclei', 'myofibril', 'sr_network'], cues: [
        { id: 'mus.ch0.s0.01', text: 'A skeletal muscle fiber holds the same 6.4 Gbp DNA as a neuron, yet packs [[myofibrils|myofibril]] built to pull.' },
        { id: 'mus.ch0.s0.02', text: 'Hundreds of embryonic myoblasts fuse into one giant cell wrapped by an excitable [[sarcolemma|sarcolemma]].' },
        { id: 'mus.ch0.s0.03', text: 'Contractile [[myofibrils|myofibril]] fill the core, pushing flat [[peripheral nuclei|peripheral_nuclei]] under the membrane.' },
      ] },
      { id: 'mus-epigenetic-nuclei', title: 'Peripheral nuclei: H3K27ac MYH1/ACTA1 euchromatin', camera: { part: 'peripheral_nuclei', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'peripheral_nuclei', flow: true,
        ghost: ['peripheral_nuclei', 'sarcolemma', 'myosin_thick', 'actin_thin'], tags: ['peripheral_nuclei', 'sarcolemma', 'myosin_thick', 'actin_thin'], cues: [
        { id: 'mus.ch0.s1.01', text: 'Inside each [[peripheral nucleus|peripheral_nuclei]], H3K27ac chromatin opens muscle genes MYH1, ACTA1 and TNNT3.' },
        { id: 'mus.ch0.s1.02', text: 'At the same time, dense H3K27me3 heterochromatin in [[these nuclei|peripheral_nuclei]] silences neuronal SYT1 and blood HBB.' },
        { id: 'mus.ch0.s1.03', text: 'Multiple [[peripheral nuclei|peripheral_nuclei]] share mRNA delivery along a fiber that can span centimeters.' },
      ] },
    ] },
    { id: 'ch1', title: 'T-Tubules, Sarcoplasmic Reticulum & 2.2 um Sarcomere', steps: [
      { id: 'mus-ttubule-sr', title: 'Sarcolemma wave diving down T-tubules to the SR', camera: { view: 'triad_sr', dur: 2.4, orbit: 2 }, blink: 't_tubule', flow: true, ghost: false,
        tags: ['sarcolemma', 't_tubule', 'sr_network', 'myofibril'], cues: [
        { id: 'mus.ch1.s0.01', text: 'When a motor neuron fires acetylcholine, depolarization sweeps across the muscle [[sarcolemma|sarcolemma]].' },
        { id: 'mus.ch1.s0.02', text: 'Transverse [[T-tubules|t_tubule]] dive straight inward so the electrical pulse reaches every deep [[myofibril|myofibril]].' },
        { id: 'mus.ch1.s0.03', text: 'Each [[T-tubule|t_tubule]] is flanked by sleeves of [[sarcoplasmic reticulum|sr_network]] packed with stored Ca2+ ions.' },
      ] },
      { id: 'mus-sarcomere-bands', title: 'Single 2.2 um sarcomere: Z-disc, I-band, A-band & M-line', camera: { view: 'sarcomere', dur: 2.4, orbit: 2 }, blink: 'z_disc', flow: true, ghost: false,
        tags: ['myofibril', 'z_disc', 'i_band', 'a_band', 'm_line'], cues: [
        { id: 'mus.ch1.s1.01', text: 'Zoom to a single 2.2 um sarcomere inside a [[myofibril|myofibril]], spanning from [[Z-disc|z_disc]] to Z-disc.' },
        { id: 'mus.ch1.s1.02', text: 'The pale [[I-band|i_band]] holds thin filaments anchored to the [[Z-disc|z_disc]], creating striped bands under light.' },
        { id: 'mus.ch1.s1.03', text: 'The dark [[A-band|a_band]] spans thick myosin filaments centered symmetrically on the structural [[M-line|m_line]].' },
      ] },
      { id: 'mus-hzone-titin', title: 'Central H-zone & giant elastic titin springs', camera: { part: 'titin_spring', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'titin_spring', flow: true,
        ghost: ['h_zone', 'm_line', 'titin_spring', 'z_disc', 'myosin_thick'], tags: ['h_zone', 'm_line', 'titin_spring', 'z_disc', 'myosin_thick'], cues: [
        { id: 'mus.ch1.s2.01', text: 'At the center of the A-band lies the lighter [[H-zone|h_zone]], where relaxed actin does not yet reach the [[M-line|m_line]].' },
        { id: 'mus.ch1.s2.02', text: 'Giant coiled [[titin springs|titin_spring]] tether every thick filament from the [[M-line|m_line]] out to the [[Z-disc|z_disc]].' },
        { id: 'mus.ch1.s2.03', text: 'Elastic [[titin|titin_spring]] centers the myosin lattice and stores passive tension that aids smooth recoil.' },
      ] },
    ] },
    { id: 'ch2', title: 'The Ca2+ Switch: RyR1, Troponin & Tropomyosin (6KN8)', steps: [
      { id: 'mus-ryr1-calcium', title: 'Triad excitation-contraction & RyR1 Ca2+ flood', camera: { part: 'ryr1_channel', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ryr1_channel', flow: true,
        ghost: ['t_tubule', 'ryr1_channel', 'sr_network'], tags: ['t_tubule', 'ryr1_channel', 'sr_network'], cues: [
        { id: 'mus.ch2.s0.01', text: 'At the triad, voltage sensors in the [[T-tubule|t_tubule]] physically couple to giant [[RyR1 channels|ryr1_channel]].' },
        { id: 'mus.ch2.s0.02', text: 'Depolarization flips [[RyR1|ryr1_channel]] wide open, releasing a rapid emerald surge of Ca2+ from the [[SR|sr_network]].' },
        { id: 'mus.ch2.s0.03', text: 'Cytosolic Ca2+ jumps over a hundredfold within milliseconds, reaching every filament in the sarcomere.' },
      ] },
      { id: 'mus-troponin-tropomyosin', title: 'Troponin-tropomyosin (6KN8) Ca2+ regulatory switch', camera: { view: 'crossbridge', dur: 2.4, orbit: 2 }, blink: 'troponin_tropo', flow: true, ghost: false,
        tags: ['troponin_tropo', 'actin_thin', 'ryr1_channel'], cues: [
        { id: 'mus.ch2.s1.01', text: 'At low resting Ca2+, [[tropomyosin|troponin_tropo]] cables physically mask myosin-binding sites along [[actin|actin_thin]].' },
        { id: 'mus.ch2.s1.02', text: 'Ca2+ binds troponin in [[troponin-tropomyosin|troponin_tropo]], rotating the tropomyosin cable off [[actin|actin_thin]] tracks.' },
        { id: 'mus.ch2.s1.03', text: 'With [[troponin-tropomyosin|troponin_tropo]] shifted into the groove, active binding pockets stand open on [[actin|actin_thin]].' },
      ] },
      { id: 'mus-actin-ready', title: 'Exposed F-actin tracks facing primed myosin heads', camera: { part: 'actin_thin', dist: 1.18, dur: 2.2, orbit: 2 }, blink: 'actin_thin', flow: true,
        ghost: ['actin_thin', 'troponin_tropo', 'myosin_head', 'myosin_thick'], tags: ['actin_thin', 'troponin_tropo', 'myosin_head', 'myosin_thick'], cues: [
        { id: 'mus.ch2.s2.01', text: 'Helical [[F-actin filaments|actin_thin]] display regularly spaced binding pockets pointing toward the sarcomere center.' },
        { id: 'mus.ch2.s2.02', text: 'Across the gap, energized [[myosin heads|myosin_head]] loaded with ADP and Pi wait poised on [[thick filaments|myosin_thick]].' },
        { id: 'mus.ch2.s2.03', text: 'Once [[troponin-tropomyosin|troponin_tropo]] clears [[actin|actin_thin]], cross-bridge docking begins immediately.' },
      ] },
    ] },
    { id: 'ch3', title: 'Myosin-II (2MYS) Power Stroke & Sliding Filaments', steps: [
      { id: 'mus-myosin-stroke', title: 'Myosin-II S1 lever-arm power stroke & ATP detachment', camera: { part: 'myosin_head', dist: 1.18, dur: 2.2, orbit: 2 }, blink: 'myosin_head', flow: true,
        ghost: ['myosin_head', 'actin_thin', 'myosin_thick'], tags: ['myosin_head', 'actin_thin', 'myosin_thick'], cues: [
        { id: 'mus.ch3.s0.01', text: 'Each [[Myosin-II head|myosin_head]] binds exposed [[actin|actin_thin]] and releases phosphate to lock firmly onto the track.' },
        { id: 'mus.ch3.s0.02', text: 'Its lever arm swings roughly 10 nm during the power stroke, pulling [[actin|actin_thin]] inward as ADP leaves [[myosin|myosin_head]].' },
        { id: 'mus.ch3.s0.03', text: 'A fresh ATP molecule must bind [[Myosin-II|myosin_head]] to break the rigor grip and detach it from [[actin|actin_thin]].' },
      ] },
      { id: 'mus-crossbridge-cycle', title: 'ATP re-cocking & asynchronous bipolar pulling', camera: { part: 'myosin_thick', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'myosin_thick', flow: true,
        ghost: ['myosin_thick', 'myosin_head', 'actin_thin'], tags: ['myosin_thick', 'myosin_head', 'actin_thin'], cues: [
        { id: 'mus.ch3.s1.01', text: 'Hydrolyzing ATP to ADP plus Pi re-cocks each [[myosin head|myosin_head]] on the bipolar [[thick filament|myosin_thick]].' },
        { id: 'mus.ch3.s1.02', text: 'Asynchronous [[myosin heads|myosin_head]] cycle across [[thick filaments|myosin_thick]] so [[actin|actin_thin]] advances smoothly.' },
        { id: 'mus.ch3.s1.03', text: 'Because [[myosin thick filaments|myosin_thick]] are bipolar, both halves pull opposite actin sets toward center.' },
      ] },
      { id: 'mus-sliding-geometry', title: 'Sliding filament geometry: 2.2 um -> 1.6 um shortening', camera: { view: 'sarcomere', dur: 2.4, orbit: 2 }, blink: 'h_zone', flow: true, ghost: false,
        tags: ['z_disc', 'i_band', 'a_band', 'h_zone', 'titin_spring'], cues: [
        { id: 'mus.ch3.s2.01', text: 'Neither filament shrinks in length; sliding pulls both [[Z-discs|z_disc]] inward from 2.2 um down to 1.6 um.' },
        { id: 'mus.ch3.s2.02', text: 'During shortening, the pale [[I-band|i_band]] and central [[H-zone|h_zone]] visibly narrow while [[titin|titin_spring]] compresses.' },
        { id: 'mus.ch3.s2.03', text: 'Throughout the entire contraction, the dark [[A-band|a_band]] remains constant because thick myosin never shortens.' },
      ] },
    ] },
    { id: 'ch4', title: 'SERCA1a (1SU4) Relaxation, Atomic Ca2+/ATP & Immune Handoff', steps: [
      { id: 'mus-serca-relaxation', title: 'SERCA1a (1SU4) ATP-driven Ca2+ reuptake & relaxation', camera: { part: 'serca1a_pump', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'serca1a_pump', flow: true,
        ghost: ['serca1a_pump', 'sr_network', 'troponin_tropo', 'titin_spring'], tags: ['serca1a_pump', 'sr_network', 'troponin_tropo', 'titin_spring'], cues: [
        { id: 'mus.ch4.s0.01', text: 'When motor pulses stop, dense [[SERCA1a pumps|serca1a_pump]] on the [[SR|sr_network]] drive muscle relaxation.' },
        { id: 'mus.ch4.s0.02', text: 'Burning one ATP per cycle, [[SERCA1a|serca1a_pump]] actively pumps two Ca2+ ions back into the [[SR lumen|sr_network]].' },
        { id: 'mus.ch4.s0.03', text: 'As Ca2+ leaves [[troponin-tropomyosin|troponin_tropo]], tropomyosin re-blocks actin and [[titin|titin_spring]] restores 2.2 um.' },
      ] },
      { id: 'mus-atomic-lens', title: 'Atomic EF-hand Ca2+ cage & Mg2+-ATP cleavage', camera: { view: 'atoms', dur: 2.4, orbit: 2 }, blink: 'muscle_atoms', flow: true, ghost: false,
        tags: ['muscle_atoms', 'troponin_tropo', 'myosin_head', 'serca1a_pump'], cues: [
        { id: 'mus.ch4.s1.01', text: 'Zoom to 0.1-0.5 nm in the [[atomic lens|muscle_atoms]] revealing Ca2+ chelation beside Mg2+-ATP hydrolysis.' },
        { id: 'mus.ch4.s1.02', text: 'Inside [[muscle atoms|muscle_atoms]], a green Ca2+ ion locks into six oxygen atoms of troponin\'s EF-hand cage.' },
        { id: 'mus.ch4.s1.03', text: 'Next to it in [[muscle atoms|muscle_atoms]], Mg2+-ATP cleaves into ADP plus Pi to power myosin and SERCA1a.' },
      ] },
      { id: 'mus-recap-handoff', title: 'Live contraction states & handoff to Immune Defense', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['sarcolemma', 'ryr1_channel', 'myosin_head', 'serca1a_pump', 'z_disc'], cues: [
        { id: 'mus.ch4.s2.01', text: '[[Sarcolemma|sarcolemma]] waves, [[RyR1|ryr1_channel]] Ca2+, [[myosin|myosin_head]] strokes and [[SERCA1a|serca1a_pump]] turn ATP to force.' },
        { id: 'mus.ch4.s2.02', text: 'Cycle Ca2+ Trigger, Relaxed 2.2 um and Contracted 1.6 um modes to watch [[Z-discs|z_disc]] slide live.' },
        { id: 'mus.ch4.s2.03', text: 'Continue next to Immune Defense to see macrophages, antibodies and T-cells guard these specialized tissues.' },
      ] },
    ] },
  ],
  details: {},
};

export const muscleTour: TourDefinition = MUSCLE_TOUR;
