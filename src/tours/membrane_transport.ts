import type { TourDefinition } from "./tourService.js";

// Guided tour of Phase 16B: Membrane Transport & Osmosis Lab (real-membrane-transport), played by cell_explorer.html.
// Every cue stays <= 106 plain characters and 100% pure ASCII for clean TTS synthesis.
export const MEMBRANE_TRANSPORT_TOUR: TourDefinition = {
  title: 'Membrane Transport & Osmosis Lab: a guided tour',
  root: 'real-membrane-transport',
  page: 'membrane_transport_realistic.html',
  view: 'overview',
  summary: 'Explore whole-cell tonicity comparing an animal cell and walled plant cell across hypotonic, isotonic and hypertonic states, then zoom into the 5 nm bilayer: simple gas diffusion, AQP1 aquaporins, GLUT1 glucose uniporter, Na+/K+-ATPase pump, clathrin/SNARE vesicles and atomic ions.',
  views: {
    overview: 'real-membrane-transport',
    tonicity: 'real-membrane-transport',
    bilayer_passive: 'real-mem-aqp1',
    active_pump: 'real-mem-nak',
    vesicular_atoms: 'real-mem-vesicle',
  },
  chapters: [
    { id: 'ch0', title: 'Whole-Cell Tonicity: Animal vs. Plant Cell', steps: [
      { id: 'mem-intro-overview', title: 'Selective barriers from whole cells to 5 nm', camera: { view: 'overview', dur: 2.4, orbit: 3 }, flow: true, ghost: false,
        tags: ['animal_cell', 'plant_cell', 'bilayer', 'aquaporin', 'nak_pump'], cues: [
        { id: 'mem.ch0.s0.01', text: 'Every cell survives by controlling what crosses its selective 5 nm [[phospholipid bilayer|bilayer]].' },
        { id: 'mem.ch0.s0.02', text: 'Above sit a wall-less [[animal cell|animal_cell]] and a walled [[plant cell|plant_cell]] facing live osmosis.' },
        { id: 'mem.ch0.s0.03', text: 'Below, the same [[bilayer|bilayer]] reveals passive diffusion, channels, active pumps and bulk vesicles.' },
      ] },
      { id: 'mem-tonicity-hypo-iso', title: 'Hypotonic (lysis vs turgid) & isotonic balance', camera: { view: 'tonicity', dur: 2.4, orbit: 2 }, blink: 'animal_cell', flow: true, ghost: false,
        tags: ['animal_cell', 'plant_cell', 'cell_wall', 'vacuole', 'water_flow'], cues: [
        { id: 'mem.ch0.s1.01', text: 'In hypotonic fluid with lower external solute, net [[water flow|water_flow]] rushes into both cells.' },
        { id: 'mem.ch0.s1.02', text: 'With no wall, the [[animal cell|animal_cell]] swells past its elastic limit toward osmotic lysis.' },
        { id: 'mem.ch0.s1.03', text: 'The [[plant cell|plant_cell]] fills its [[vacuole|vacuole]] against its rigid [[cell wall|cell_wall]] to stay turgid.' },
      ] },
      { id: 'mem-tonicity-hyper', title: 'Isotonic balance & hypertonic crenation vs plasmolysis', camera: { part: 'vacuole', dist: 1.25, dur: 2.2, orbit: 2 }, blink: 'vacuole', flow: true,
        ghost: ['vacuole', 'cell_wall', 'plant_cell', 'animal_cell'], tags: ['vacuole', 'cell_wall', 'plant_cell', 'animal_cell'], cues: [
        { id: 'mem.ch0.s2.01', text: 'In isotonic fluid, equal water exchange keeps the [[animal cell|animal_cell]] stable and the [[plant cell|plant_cell]] flaccid.' },
        { id: 'mem.ch0.s2.02', text: 'In hypertonic salty fluid, water exits and shrivels the [[animal cell|animal_cell]] into spiked crenation.' },
        { id: 'mem.ch0.s2.03', text: 'Meanwhile, the plant [[vacuole|vacuole]] shrinks and pulls the membrane off its [[cell wall|cell_wall]] in plasmolysis.' },
      ] },
    ] },
    { id: 'ch1', title: 'The 5 nm Bilayer: Simple Diffusion & Aquaporins', steps: [
      { id: 'mem-bilayer-structure', title: 'Hydrophobic fatty-acyl barrier of the 5 nm bilayer', camera: { view: 'bilayer_passive', dur: 2.4, orbit: 2 }, blink: 'bilayer', flow: true, ghost: false,
        tags: ['bilayer', 'simple_diff', 'aquaporin', 'water_flow'], cues: [
        { id: 'mem.ch1.s0.01', text: 'Zoom straight into the 5 nm [[phospholipid bilayer|bilayer]], a fluid double sheet of POPC lipids.' },
        { id: 'mem.ch1.s0.02', text: 'Polar phosphate heads face water outside and inside, while hydrophobic fatty tails fill the 3 nm core.' },
        { id: 'mem.ch1.s0.03', text: 'That oily core inside the [[bilayer|bilayer]] blocks charged ions and polar sugars from leaking freely.' },
      ] },
      { id: 'mem-simple-diffusion', title: 'Passive simple diffusion of nonpolar O2 & CO2', camera: { part: 'simple_diff', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'simple_diff', flow: true,
        ghost: ['simple_diff', 'bilayer'], tags: ['simple_diff', 'bilayer'], cues: [
        { id: 'mem.ch1.s1.01', text: 'Small nonpolar gases O2 and CO2 slip directly between lipid tails via passive [[simple diffusion|simple_diff]].' },
        { id: 'mem.ch1.s1.02', text: '[[Simple diffusion|simple_diff]] runs down concentration gradients across the [[bilayer|bilayer]] at zero ATP cost.' },
        { id: 'mem.ch1.s1.03', text: 'Unassisted gas exchange supplies O2 to mitochondria and clears CO2 from active tissues.' },
      ] },
      { id: 'mem-aquaporin-osmosis', title: 'Aquaporin AQP1 (1J4N) & single-file water osmosis', camera: { part: 'aquaporin', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'aquaporin', flow: true,
        ghost: ['aquaporin', 'water_flow', 'bilayer'], tags: ['aquaporin', 'water_flow', 'bilayer'], cues: [
        { id: 'mem.ch1.s2.01', text: 'Polar H2O crosses slowly alone, so tetrameric [[aquaporins|aquaporin]] open narrow hourglass water pores.' },
        { id: 'mem.ch1.s2.02', text: 'Net [[water flow|water_flow]] diffuses passively through [[aquaporins|aquaporin]] toward denser solute concentration.' },
        { id: 'mem.ch1.s2.03', text: 'Central NPA motifs in [[AQP1|aquaporin]] flip each H2O dipole single-file while excluding H+ ions.' },
      ] },
    ] },
    { id: 'ch2', title: 'Facilitated Diffusion: GLUT1 Glucose Uniporter', steps: [
      { id: 'mem-glut1-selectivity', title: 'Why polar D-glucose requires GLUT1 (4PYP)', camera: { part: 'glut1', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'glut1', flow: true,
        ghost: ['glut1', 'bilayer'], tags: ['glut1', 'bilayer'], cues: [
        { id: 'mem.ch2.s0.01', text: 'Six-carbon D-glucose is polar and bulky, so the hydrophobic [[bilayer|bilayer]] blocks its passive entry.' },
        { id: 'mem.ch2.s0.02', text: 'Embedded [[GLUT1|glut1]] carrier proteins selectively bind extracellular glucose for facilitated diffusion.' },
        { id: 'mem.ch2.s0.03', text: 'Because glucose moves down its concentration gradient, [[GLUT1|glut1]] spends zero cellular ATP.' },
      ] },
      { id: 'mem-glut1-rocker', title: 'Alternating-access rocker switch mechanism', camera: { part: 'glut1', dist: 1.15, dur: 2.2, orbit: 2 }, blink: 'glut1', flow: true,
        ghost: ['glut1', 'bilayer'], tags: ['glut1', 'bilayer'], cues: [
        { id: 'mem.ch2.s1.01', text: '[[GLUT1|glut1]] rocks through outward-open, occluded and inward-open shapes to release glucose inside.' },
        { id: 'mem.ch2.s1.02', text: 'This alternating-access switch never opens a continuous hole across the [[bilayer|bilayer]] that leaks ions.' },
        { id: 'mem.ch2.s1.03', text: 'Once inside cytosol, rapid glucose phosphorylation keeps gradient flow running through [[GLUT1|glut1]].' },
      ] },
    ] },
    { id: 'ch3', title: 'Primary Active Transport: The 3 Na+ / 2 K+ Pump', steps: [
      { id: 'mem-nak-pump', title: 'Na+/K+-ATPase (3WGU) uphill ion stoichiometry', camera: { view: 'active_pump', dur: 2.4, orbit: 2 }, blink: 'nak_pump', flow: true, ghost: false,
        tags: ['nak_pump', 'atp_hydrolysis', 'membrane_voltage'], cues: [
        { id: 'mem.ch3.s0.01', text: 'Splitting one [[ATP|atp_hydrolysis]], the [[sodium-potassium pump|nak_pump]] exports three Na+ and imports two K+.' },
        { id: 'mem.ch3.s0.02', text: 'Both ions move uphill against steep gradients, so [[Na+/K+-ATPase|nak_pump]] executes primary active transport.' },
        { id: 'mem.ch3.s0.03', text: 'Each cleavage flash at [[ATP hydrolysis|atp_hydrolysis]] powers one full pumping cycle of 3 Na+ out, 2 K+ in.' },
      ] },
      { id: 'mem-nak-mechanism', title: 'E1~P / E2~P conformational shift vs passive carriers', camera: { part: 'atp_hydrolysis', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'atp_hydrolysis', flow: true,
        ghost: ['atp_hydrolysis', 'nak_pump', 'glut1'], tags: ['atp_hydrolysis', 'nak_pump', 'glut1'], cues: [
        { id: 'mem.ch3.s1.01', text: 'Three cytosolic Na+ ions bind the [[pump|nak_pump]], triggering [[ATP phosphorylation|atp_hydrolysis]] into E1-P.' },
        { id: 'mem.ch3.s1.02', text: 'Unlike passive [[GLUT1|glut1]] moving down gradients, [[Na+/K+-ATPase|nak_pump]] burns energy to push ions uphill.' },
        { id: 'mem.ch3.s1.03', text: 'Switching to E2-P releases 3 Na+ outside and binds 2 K+, then dephosphorylation resets the [[pump|nak_pump]].' },
      ] },
      { id: 'mem-resting-voltage', title: 'Resting -70 mV membrane voltage & osmotic defense', camera: { part: 'membrane_voltage', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'membrane_voltage', flow: true,
        ghost: ['membrane_voltage', 'nak_pump', 'animal_cell'], tags: ['membrane_voltage', 'nak_pump', 'animal_cell'], cues: [
        { id: 'mem.ch3.s2.01', text: 'Exporting 3 Na+ for every 2 K+ leaves net negative charge inside, driving [[membrane voltage|membrane_voltage]].' },
        { id: 'mem.ch3.s2.02', text: 'Paired with K+ leak channels, the [[pump|nak_pump]] holds resting [[voltage|membrane_voltage]] near -70 mV.' },
        { id: 'mem.ch3.s2.03', text: 'Continuous Na+ export also lowers internal osmolarity so wall-less [[animal cells|animal_cell]] do not burst.' },
      ] },
    ] },
    { id: 'ch4', title: 'Bulk Vesicles, Atomic Ions & Differentiated Cells', steps: [
      { id: 'mem-clathrin-snare', title: 'Clathrin (1XI4) endocytosis & SNARE (1SFC) exocytosis', camera: { view: 'vesicular_atoms', dur: 2.4, orbit: 2 }, blink: 'clathrin_pit', flow: true, ghost: false,
        tags: ['clathrin_pit', 'snare_fusion', 'vesicle_cargo', 'bilayer'], cues: [
        { id: 'mem.ch4.s0.01', text: 'Proteins and large [[vesicle cargo|vesicle_cargo]] are far too big for channels, requiring bulk membrane traffic.' },
        { id: 'mem.ch4.s0.02', text: 'In endocytosis, triskelion [[clathrin pits|clathrin_pit]] curve the membrane inward until dynamin pinches a vesicle.' },
        { id: 'mem.ch4.s0.03', text: 'In exocytosis, four-helix [[SNARE bundles|snare_fusion]] zipper membranes together to release [[cargo|vesicle_cargo]] outside.' },
      ] },
      { id: 'mem-ion-atoms', title: 'Atomic Na+ vs K+ radii, H2O dipole & POPC heads', camera: { part: 'ion_atoms', dist: 1.2, dur: 2.2, orbit: 2 }, blink: 'ion_atoms', flow: true,
        ghost: ['ion_atoms', 'aquaporin', 'nak_pump'], tags: ['ion_atoms', 'aquaporin', 'nak_pump'], cues: [
        { id: 'mem.ch4.s1.01', text: 'Zoom to 0.1 nm atomic scale in the [[ion lens|ion_atoms]] comparing Na+, K+, H2O and POPC heads.' },
        { id: 'mem.ch4.s1.02', text: 'Inside [[ion atoms|ion_atoms]], naked Na+ measures 0.102 nm while K+ spans 0.138 nm, enabling pump sorting.' },
        { id: 'mem.ch4.s1.03', text: 'Bent 104.5 deg H2O dipoles and C, H, N, O, P lipid heads in [[ion atoms|ion_atoms]] dictate membrane selectivity.' },
      ] },
      { id: 'mem-recap-handoff', title: 'Tonicity toggle check & handoff to Human Cells', camera: { view: 'overview', dur: 2.5, orbit: 3 }, flow: true, ghost: false,
        tags: ['animal_cell', 'plant_cell', 'aquaporin', 'glut1', 'nak_pump', 'membrane_voltage'], cues: [
        { id: 'mem.ch4.s2.01', text: 'From [[animal|animal_cell]] and [[plant|plant_cell]] tonicity to [[AQP1|aquaporin]] and [[GLUT1|glut1]], gradients guide passive flow.' },
        { id: 'mem.ch4.s2.02', text: 'Test Hypotonic, Isotonic and Hypertonic modes, then watch [[Na+/K+-ATPase|nak_pump]] sustain [[voltage|membrane_voltage]].' },
        { id: 'mem.ch4.s2.03', text: 'Continue next to Specialized Human Cells to see neurons and muscles harness these ion gradients.' },
      ] },
    ] },
  ],
  details: {},
};

export const membrane_transportTour: TourDefinition = MEMBRANE_TRANSPORT_TOUR;
