import { useState, useEffect, useRef, useCallback } from 'react';
import type { ScenarioType, MotorComponentData, RibosomeComponentData, ATPSynthaseComponentData, ComplexIComponentData, SecYEGComponentData, BAMComponentData, LptComponentData, TourStatus } from './types/biology';
import { CellViewerScene, CELL_ANATOMY_DATA, CELL_TOUR_STOPS } from './core/cellViewer';
import { FlagellarMotorScene } from './core/flagellarMotor';
import { RibosomeScene, RIBOSOME_COMPONENTS_META, RIBOSOME_TOUR_STOPS } from './core/ribosomeTranslation';
import { ATPSynthaseScene, ATP_SYNTHASE_COMPONENTS_META, ATP_SYNTHASE_TOUR_STOPS } from './core/atpSynthase';
import { ComplexIScene, COMPLEX_I_COMPONENTS_META, COMPLEX_I_TOUR_STOPS } from './core/complexITransport';
import { SecYEGScene, SECYEG_COMPONENTS_META, SECYEG_EXPLANATION_STAGES } from './core/secYEGTransport';
import { BAMComplexScene, BAM_COMPONENTS_META, BAM_EXPLANATION_STAGES } from './core/bamComplexTransport';
import { LptBridgeScene, LPT_COMPONENTS_META, LPT_EXPLANATION_STAGES } from './core/lptBridgeTransport';
import voiceService from './core/voiceService';

// UI Components
import { ScaleNavigator } from './components/Header/ScaleNavigator';
import { CellToolbar } from './components/Toolbar/CellToolbar';
import { CellScaleCard } from './components/HUD/CellScaleCard';
import { MicrocompartmentCard } from './components/HUD/MicrocompartmentCard';
import { CellLabels } from './components/Viewport/CellLabels';
import { CellInspectorDrawer } from './components/Inspector/CellInspectorDrawer';

// Motor Components
import { MotorHeaderOverlay } from './components/Motor/MotorHeaderOverlay';
import { MotorHUDCard } from './components/Motor/MotorHUDCard';
import { MotorPartsChips } from './components/Motor/MotorPartsChips';
import { MotorInspectorDrawer } from './components/Motor/MotorInspectorDrawer';
import { BlueprintModal } from './components/Modals/BlueprintModal';
import { TourBar } from './components/Tour/TourBar';

// Ribosome Components
import { RibosomeHeaderOverlay } from './components/Ribosome/RibosomeHeaderOverlay';
import { RibosomeHUDCard } from './components/Ribosome/RibosomeHUDCard';
import { RibosomeInspectorDrawer } from './components/Ribosome/RibosomeInspectorDrawer';

// ATP Synthase Components
import { ATPSynthaseHeaderOverlay } from './components/ATPSynthase/ATPSynthaseHeaderOverlay';
import { ATPSynthaseHUDCard } from './components/ATPSynthase/ATPSynthaseHUDCard';
import { ATPSynthaseInspectorDrawer } from './components/ATPSynthase/ATPSynthaseInspectorDrawer';

// Complex I Components
import { ComplexIHeaderOverlay } from './components/ComplexI/ComplexIHeaderOverlay';
import { ComplexIHUDCard } from './components/ComplexI/ComplexIHUDCard';
import { ComplexIInspectorDrawer } from './components/ComplexI/ComplexIInspectorDrawer';

// SecYEG Components
import { SecYEGHeaderOverlay } from './components/SecYEG/SecYEGHeaderOverlay';
import { SecYEGHUDCard } from './components/SecYEG/SecYEGHUDCard';
import { SecYEGInspectorDrawer } from './components/SecYEG/SecYEGInspectorDrawer';

// BAM Components
import { BAMHeaderOverlay } from './components/BAM/BAMHeaderOverlay';
import { BAMHUDCard } from './components/BAM/BAMHUDCard';
import { BAMInspectorDrawer } from './components/BAM/BAMInspectorDrawer';

// Lpt Components
import { LptHeaderOverlay } from './components/Lpt/LptHeaderOverlay';
import { LptHUDCard } from './components/Lpt/LptHUDCard';
import { LptInspectorDrawer } from './components/Lpt/LptInspectorDrawer';

// Live Viewport Subtitles
import { LiveSubtitles } from './components/Viewport/LiveSubtitles';

const DEFAULT_MOTOR_META: MotorComponentData = {
  name: 'Cryo-EM Flagellar Basal Body (Molecular Nodes)',
  proteins: 'Orange: C-ring (FliG/M/N); Jade & Lime: MS-ring inner/outer (FliF); Gold: Axial Rod; Terracotta: P-ring (FlgI); Blue: L-ring (FlgH); Violet: Hook (FlgE)',
  dimensions: 'Diameter: ~25–45 nm, Height: ~51 nm (Basal Body + Hook)',
  pdb: '7CGO, 6YKM, 6S3L, 3HJL',
  role: 'Authentic macromolecular structure generated with Molecular Nodes in Blender with distinct color segmentation: Orange for the bottom C-ring switch, two distinct contrasting greens for the inner collar and outer rim of the FliF MS-ring, Golden Yellow for the internal drive shaft rod, Terracotta for the P-ring bushing, Blue for the L-ring bushing, and Violet for the universal hook.',
  badge: 'ROTOR & BASAL BODY (7CGO)'
};

const MOTOR_TOUR_STOPS = [
  'molecular_7cgo',
  'c_ring',
  'ms_ring',
  'molecular_6ykm',
  'rod',
  'p_ring',
  'l_ring',
  'hook',
  'filament',
  'filament_cap'
];

export const MOTOR_EXPLANATION_STAGES = [
  {
    step: 1,
    id: 'molecular_7cgo',
    title: '1. Nanomotor Overview & Envelope Architecture',
    shortLabel: '1. Macro Overview',
    badge: '45nm',
    col: '#0077B6',
    desc: 'Nature\'s 45 nm rotary motor; spins filament at 1,000 RPM for swimming',
    speech: 'Step one: Nanomotor Overview and Biological Role. The bacterial flagellar motor is nature\'s forty-five-nanometer rotary turbine, spanning both inner and outer membranes of Escherichia coli. It converts transmembrane proton gradients into mechanical torque, spinning helical propeller filaments at up to one thousand revolutions per minute to drive bacterial chemotaxis and directional swimming.'
  },
  {
    step: 2,
    id: 'molecular_6ykm',
    title: '2. Proton Motive Force Influx',
    shortLabel: '2. Proton Influx',
    badge: 'MotAB',
    col: '#FF4D00',
    desc: 'Periplasmic H⁺ enters MotA/B stator channels',
    speech: 'Step two: Proton Influx. Protons in the periplasm—driven across the inner membrane by the electrical potential of the proton-motive force—flow through the dual aqueous channels of the MotA-MotB stators, protonating Aspartate-32.'
  },
  {
    step: 3,
    id: 'c_ring',
    title: '3. Electrostatic Gear Engagement',
    shortLabel: '3. C-Ring Drive',
    badge: 'FliG',
    col: '#E2A824',
    desc: 'MotA loops push FliG; C-ring switch spins',
    speech: 'Step three: Electrostatic Torque. The cytoplasmic loops of MotA engage the charged residues of the FliG switch protein on the C-ring rim, transferring rotational torque like an electrostatic gear to spin the forty-five-nanometer rotor wheel.'
  },
  {
    step: 4,
    id: 'rod',
    title: '4. Axial Drive Shaft & Bushings',
    shortLabel: '4. Drive Shaft',
    badge: 'ROD',
    col: '#06D6A0',
    desc: 'Torque passes through murein & outer membrane',
    speech: 'Step four: Drive Shaft and Bushings. Rotational torque is transmitted up through the straight axial rod. The rod spins smoothly within molecular sleeve bearings—the P-ring in the peptidoglycan wall and the L-ring in the outer membrane—preventing membrane tearing.'
  },
  {
    step: 5,
    id: 'hook',
    title: '5. Universal Hook Joint & Torque Bend',
    shortLabel: '5. Universal Hook',
    badge: 'FlgE',
    col: '#7209B7',
    desc: 'FlgE flexes to bend rotation around 90° angle',
    speech: 'Step five: Universal Hook Joint. The flexible fifty-five-nanometer hook acts as a biological universal joint. Composed of FlgE subunits that compress and stretch, it transmits rotational torque around a ninety-degree bend to the off-axis propeller.'
  },
  {
    step: 6,
    id: 'filament',
    title: '6. Archimedean Screw Propulsion',
    shortLabel: '6. Propulsion',
    badge: 'FliC',
    col: '#0077B6',
    desc: 'Helical filament spins at 1,000 RPM pushing medium',
    speech: 'Step six: Archimedean Screw Propulsion. The fifteen-micrometer helical filament spins at up to one thousand revolutions per minute. Acting as an Archimedean screw, it generates forward thrust that drives the bacterium through water at thirty cell lengths per second.'
  }
];

export const RIBOSOME_EXPLANATION_STAGES = [
  {
    step: 1,
    id: 'ribosome_70s',
    title: '1. Ribozyme Factory Overview & Translation Role',
    shortLabel: '1. Macro Overview',
    badge: '2.5MDa',
    col: '#2A9D8F',
    desc: 'Nature\'s 2.5 MDa ribonucleoprotein engine translating mRNA into proteins',
    speech: 'Step one: Ribosome Overview and Translation Role. The bacterial 70S ribosome is nature\'s universal 2.5-megadalton catalytic ribozyme factory. Composed of the small 30S decoding subunit and the large 50S catalytic subunit, it translates genetic messenger RNA transcripts into functional protein enzymes at twenty amino acids per second.'
  },
  {
    step: 2,
    id: 'trna_a_site',
    title: '2. A-Site Codon Recognition',
    shortLabel: '2. Codon Docking',
    badge: 'A-SITE',
    col: '#E9C46A',
    desc: 'Ternary complex enters; A1492/A1493 flip out',
    speech: 'Step two: Codon Recognition. A ternary complex of Elongation Factor Tu, GTP, and aminoacyl-tRNA docks into the ribosomal A-site. Bases Adenine 1492 and 1493 of the 16S rRNA flip out of helix 44 to verify codon-anticodon complementarity.'
  },
  {
    step: 3,
    id: 'subunit_30s',
    title: '3. Proofreading & Accommodation',
    shortLabel: '3. Accommodation',
    badge: 'EF-Tu',
    col: '#00F5D4',
    desc: 'EF-Tu hydrolyzes GTP; aminoacyl stem swings into PTC',
    speech: 'Step three: Proofreading and Accommodation. Correct base-pairing activates the GTPase center of Elongation Factor Tu. Upon GTP hydrolysis, EF-Tu releases the tRNA, allowing its amino acid stem to swing seventy angstroms into the peptidyl transferase cavity.'
  },
  {
    step: 4,
    id: 'ptc_core',
    title: '4. Peptidyl Transferase Catalysis',
    shortLabel: '4. Peptide Bond',
    badge: 'PTC',
    col: '#FFB703',
    desc: 'α-amino nucleophile attacks ester; peptide bond forms',
    speech: 'Step four: Peptidyl Transfer Catalysis. Deep within the 23S ribosomal RNA catalytic core, the alpha-amino nucleophile of the A-site amino acid attacks the ester carbonyl of the P-site peptidyl-tRNA, condensing a new peptide bond without any protein enzyme involvement.'
  },
  {
    step: 5,
    id: 'trna_p_site',
    title: '5. EF-G Power Stroke Translocation',
    shortLabel: '5. Translocation',
    badge: 'EF-G',
    col: '#7209B7',
    desc: '30S ratchets against 50S; mRNA advances 1 triplet',
    speech: 'Step five: EF-G Translocation Stroke. Elongation Factor G binds with GTP and ratchets the 30S subunit against the 50S. Hydrolysis drives Domain IV forward like a mechanical piston, shifting mRNA and both transfer RNAs by exactly one codon triplet.'
  },
  {
    step: 6,
    id: 'ribosome_70s',
    title: '6. E-Site Discharge & Continuous Polysome',
    shortLabel: '6. Steady Translation',
    badge: '70S',
    col: '#9E2A5B',
    desc: 'Empty tRNA expelled; continuous synthesis at 20 aa/s',
    speech: 'Step six: Deacylated tRNA Discharge and Polysome Assembly. The empty tRNA is expelled through the E-site exit door. The ribosome continues processive translation, lengthening the growing polypeptide chain at twenty amino acids per second along continuous polysome arrays.'
  }
];

export const ATP_EXPLANATION_STAGES = [
  {
    step: 1,
    id: 'atp_synthase_holoenzyme',
    title: '1. Holoenzyme Architecture & Bioenergetic Role',
    shortLabel: '1. Macro Overview',
    badge: 'F₁F₀',
    col: '#2A9D8F',
    desc: 'Nature\'s 10 nm rotary dynamo converting proton flux into ATP',
    speech: 'Step one: Holoenzyme Architecture and Bioenergetic Role. The F-one F-zero ATP synthase is the fundamental bioenergetic dynamo of life. Embedded across the bacterial cytoplasmic membrane, it converts the electrochemical proton gradient into mechanical rotation to synthesize over ninety percent of the cell\'s ATP.'
  },
  {
    step: 2,
    id: 'proton_flux',
    title: '2. Proton Motive Force Influx',
    shortLabel: '2. Proton Influx',
    badge: 'H⁺',
    col: '#FF4D00',
    desc: 'Periplasmic H⁺ enters stator half-channel',
    speech: 'Step two: Proton Influx. Protons in the periplasm—pumped across the inner membrane by upstream respiration complexes like Complex I and Cytochrome bo₃—flow down their electrochemical gradient into the stator half-channel, driven by the proton-motive force.'
  },
  {
    step: 3,
    id: 'central_rotor',
    title: '3. Turbine Rotation & Drive Shaft',
    shortLabel: '3. Turbine Drive',
    badge: 'γε',
    col: '#06D6A0',
    desc: 'Asp61 neutralizes; c-ring & central γε shaft rotate',
    speech: 'Step three: Turbine and Drive Shaft. Each proton neutralizes Aspartate-61 on the c-ring, allowing the turbine to turn within the hydrophobic bilayer. This directly spins the eccentric emerald-green central shaft.'
  },
  {
    step: 4,
    id: 'adp_pi_substrates',
    title: '4. Substrate Docking in Catalytic Head',
    shortLabel: '4. Substrates',
    badge: 'ADP',
    col: '#F28482',
    desc: 'Asymmetric camshaft traps ADP + Pᵢ in β pocket',
    speech: 'Step four: Substrate Capture. ADP and inorganic phosphate—recycled from cellular work done by ribosomes and flagellar motors—enter the F1 head. As the central shaft turns, it deforms the beta subunit into the Loose conformation, trapping these substrates in the active cleft.'
  },
  {
    step: 5,
    id: 'atp_product',
    title: '5. Catalytic Condensation & Energy Release',
    shortLabel: '5. ATP Synthesis',
    badge: 'ATP',
    col: '#FFE066',
    desc: 'Tight compression forms ATP; Open releases fuel',
    speech: 'Step five: ATP Condensation and Release. Mechanical compression forces the pocket into the Tight state, condensing ADP and phosphate into high-energy ATP. The pocket then springs Open, ejecting ATP directly into the cytoplasm to fuel protein synthesis and cellular metabolism.'
  },
  {
    step: 6,
    id: 'atp_synthase_holoenzyme',
    title: '6. Continuous Rotary Dynamo',
    shortLabel: '6. Rotary Dynamo',
    badge: '360°',
    col: '#2A9D8F',
    desc: 'Holoenzyme operates at continuous steady-state',
    speech: 'Step six: Continuous Rotary Dynamo. The catalytic cycle is established. The holoenzyme operates continuously at steady-state, translocating ten protons to produce three ATP molecules with ninety percent thermodynamic efficiency for every complete revolution.'
  }
];

export const COMPLEX_I_EXPLANATION_STAGES = [
  {
    step: 1,
    id: 'complex_i_holoenzyme',
    title: '1. Holoenzyme Architecture & Respiration Role',
    shortLabel: '1. Macro Overview',
    badge: '530kDa',
    col: '#1F77B4',
    desc: '530 kDa L-shaped engine coupling redox energy to 4 H⁺ pumping',
    speech: 'Step one: Holoenzyme Architecture and Respiration Role. Respiratory Complex I is the massive five-hundred-thirty-kilodalton L-shaped entry engine of cellular aerobic respiration. Spanning the inner cytoplasmic membrane of Escherichia coli, it couples the oxidation of cytosolic NADH to the reduction of membrane-soluble ubiquinone, driving the translocation of four protons into the periplasm to generate the proton-motive force.'
  },
  {
    step: 2,
    id: 'nadh_substrate',
    title: '2. NADH Docking & Flavin Hydride Transfer',
    shortLabel: '2. Hydride Transfer',
    badge: 'NADH',
    col: '#00F5D4',
    desc: 'NADH transfers :H⁻ to FMN in NuoF active pocket',
    speech: 'Step two: NADH Docking and Flavin Hydride Transfer. High-energy NADH from glycolysis and the citric acid cycle binds stereospecifically in the NuoF catalytic pocket at the tip of the hydrophilic arm. NADH transfers a two-electron hydride ion directly to the isoalloxazine ring of flavin mononucleotide, forming fully reduced FMNH2.'
  },
  {
    step: 3,
    id: 'fes_clusters',
    title: '3. Quantum Electron Tunneling (8 Fe-S Wire)',
    shortLabel: '3. 8 Fe-S Tunneling',
    badge: 'Fe-S',
    col: '#FFB703',
    desc: 'Electrons hop down 90 Å relay across 8 Fe-S clusters in <100 µs',
    speech: 'Step three: Quantum Electron Tunneling along the 8 Fe-S Wire. The two electrons split and hop sequentially through an unbroken chain of eight iron-sulfur clusters spanning ninety angstroms. With inter-cluster distances well below fourteen angstroms, electrons tunnel quantum-mechanically in less than one hundred microseconds down to terminal cluster N2.'
  },
  {
    step: 4,
    id: 'ubiquinone_pocket',
    title: '4. Ubiquinone Reduction at NuoB/CD Cleft',
    shortLabel: '4. Q8 Reduction',
    badge: 'Q₈',
    col: '#FFE066',
    desc: 'Q reduced to QH₂ at cluster N2; triggers electrostatic wave',
    speech: 'Step four: Ubiquinone Reduction at the Catalytic Cleft. Ubiquinone enters a narrow hydrophobic cavity at the junction of the hydrophilic and membrane arms. Two electrons from cluster N2 reduce the quinone ring to ubiquinol, releasing seventy-nine kilojoules per mole of free energy and generating a powerful electrostatic displacement wave.'
  },
  {
    step: 5,
    id: 'lateral_piston_nuol',
    title: '5. Lateral Piston Stroke & 4 H⁺ Pumping',
    shortLabel: '5. Lateral Piston',
    badge: '4 H⁺',
    col: '#E76F51',
    desc: 'NuoL ~110 Å lateral helix drives antiporters NuoN, NuoM, NuoL',
    speech: 'Step five: Lateral Piston Stroke and Proton Pumping. Conformational strain propagates along the membrane arm through NuoL\'s one-hundred-ten-angstrom horizontal lateral helix. This physical piston couples with broken transmembrane helices in subunits NuoN, NuoM, and NuoL, coordinating the translocation of four protons across the lipid bilayer into the periplasmic space.'
  },
  {
    step: 6,
    id: 'complex_i_holoenzyme',
    title: '6. Ubiquinol Release & Steady-State Respiration',
    shortLabel: '6. Steady Respiration',
    badge: 'QH₂',
    col: '#06D6A0',
    desc: 'QH₂ diffuses to Cytochrome bo₃; continuous 200 e⁻/s flux',
    speech: 'Step six: Ubiquinol Release and Steady-State Respiration. Reduced ubiquinol diffuses out into the lipid bilayer toward downstream Cytochrome bo3 oxidase. Complex I resets to its oxidized ground state, sustaining continuous respiratory electron transport at two hundred electrons per second to power bacterial bioenergetics.'
  }
];

export const SECYEG_TOUR_STOPS = [
  'secyeg_holoenzyme',
  'seca_motor',
  'secy_pore',
  'lateral_gate',
  'sece_clamp',
  'secg_escort',
  'translocating_peptide'
];

export const BAM_TOUR_STOPS = [
  'bam_holoenzyme',
  'bama_barrel',
  'lateral_seam',
  'bama_potra',
  'bamb_scaffold',
  'bamc_lipoprotein',
  'bamd_clamp',
  'bame_clip',
  'client_omp'
];

export const LPT_TOUR_STOPS = [
  'lpt_holoenzyme',
  'lptb_dimer',
  'lptfg_permease',
  'lptc_coupler',
  'lpta_bridge',
  'lptd_barrel',
  'lpte_plug',
  'bound_lps'
];

function App() {
  // Scenario state
  const [scenario, setScenario] = useState<ScenarioType>('cell');

  // Whole Cell scene state
  const [selectedOrganelleKey, setSelectedOrganelleKey] = useState<string>('overview');
  const [isCellInspectorOpen, setIsCellInspectorOpen] = useState<boolean>(false);
  const [wasmStatus, setWasmStatus] = useState<string>('WebAssembly Engine: Active');
  const [selectedVoice, setSelectedVoice] = useState<string>('af_heart');
  const [isCellNarrating, setIsCellNarrating] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false);
  const [showCellLabels, setShowCellLabels] = useState<boolean>(true);

  // Cell Guided Tour State
  const [tourStatus, setTourStatus] = useState<TourStatus>({
    active: false,
    playing: false,
    stepIndex: 0,
    key: 'overview',
    totalSteps: 9,
    phase: 'idle',
    cooldownRemaining: 3,
    ttsEnabled: true
  });

  // Motor scene state
  const [motorRepMode, setMotorRepMode] = useState<'molecular' | 'schematic'>('molecular');
  const [isMembraneVisible, setIsMembraneVisible] = useState<boolean>(true);
  const [isMotorLabelsVisible, setIsMotorLabelsVisible] = useState<boolean>(true);
  const [cameraMode, setCameraMode] = useState<'freelook' | 'orbit'>('freelook');
  const [motorDirection, setMotorDirection] = useState<'CCW' | 'CW'>('CCW');
  const [isMotorPaused, setIsMotorPaused] = useState<boolean>(false);
  const [motorExplodedProgress, setMotorExplodedProgress] = useState<number>(0);
  const [motorSpeed, setMotorSpeed] = useState<number>(100);
  const [activeMotorPart, setActiveMotorPart] = useState<string>('molecular_7cgo');
  const [motorComponentMeta, setMotorComponentMeta] = useState<MotorComponentData>(DEFAULT_MOTOR_META);
  const [isMotorNarrating, setIsMotorNarrating] = useState<boolean>(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState<boolean>(false);
  const [isMotorAutoRotating, setIsMotorAutoRotating] = useState<boolean>(false);

  // Motor Guided Tour State
  const [isMotorTourActive, setIsMotorTourActive] = useState<boolean>(false);
  const [isMotorTourPlaying, setIsMotorTourPlaying] = useState<boolean>(false);
  const [motorTourStep, setMotorTourStep] = useState<number>(0);
  const [motorTourPhase, setMotorTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');
  const [motorStoryStep, setMotorStoryStep] = useState<number>(0);

  // Ribosome scene state
  const [activeRibosomePart, setActiveRibosomePart] = useState<string>('ribosome_70s');
  const [ribosomeComponentMeta, setRibosomeComponentMeta] = useState<RibosomeComponentData>(RIBOSOME_COMPONENTS_META['ribosome_70s']);
  const [isRibosomePaused, setIsRibosomePaused] = useState<boolean>(false);
  const [ribosomeSpeed, setRibosomeSpeed] = useState<number>(1.0);
  const [ribosomeExplodedProgress, setRibosomeExplodedProgress] = useState<number>(0);
  const [ribosomeFilter, setRibosomeFilter] = useState<string>('all');
  const [isRibosomeNarrating, setIsRibosomeNarrating] = useState<boolean>(false);
  const [isRibosomeAutoRotating, setIsRibosomeAutoRotating] = useState<boolean>(false);
  const [mrnaCycleProgress, setMrnaCycleProgress] = useState<number>(0);
  const [isRibosomeLabelsVisible, setIsRibosomeLabelsVisible] = useState<boolean>(true);

  // Ribosome Guided Tour State
  const [isRibosomeTourActive, setIsRibosomeTourActive] = useState<boolean>(false);
  const [isRibosomeTourPlaying, setIsRibosomeTourPlaying] = useState<boolean>(false);
  const [ribosomeTourStep, setRibosomeTourStep] = useState<number>(0);
  const [ribosomeTourPhase, setRibosomeTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');
  const [ribosomeStoryStep, setRibosomeStoryStep] = useState<number>(0);

  // ATP Synthase scene state
  const [activeATPPart, setActiveATPPart] = useState<string>('atp_synthase_holoenzyme');
  const [atpComponentMeta, setATPComponentMeta] = useState<ATPSynthaseComponentData>(ATP_SYNTHASE_COMPONENTS_META['atp_synthase_holoenzyme']);
  const [isATPPaused, setIsATPPaused] = useState<boolean>(false);
  const [atpPMFVoltage, setATPMFVoltage] = useState<number>(-140);
  const [atpMode, setATPMode] = useState<'synthesis' | 'hydrolysis'>('synthesis');
  const [atpExplodedProgress, setATPExplodedProgress] = useState<number>(0);
  const [atpFilter, setATPFilter] = useState<string>('all');
  const [atpBoyerState, setATPBoyerState] = useState<'open' | 'loose' | 'tight'>('tight');
  const [isATPLabelsVisible, setIsATPLabelsVisible] = useState<boolean>(true);
  const [isATPNarrating, setIsATPNarrating] = useState<boolean>(false);
  const [isATPAutoRotating, setIsATPAutoRotating] = useState<boolean>(false);
  const [atpStoryStep, setAtpStoryStep] = useState<number>(0);

  // ATP Synthase Guided Tour State
  const [isATPTourActive, setIsATPTourActive] = useState<boolean>(false);
  const [isATPTourPlaying, setIsATPTourPlaying] = useState<boolean>(false);
  const [atpTourStep, setATPTourStep] = useState<number>(0);
  const [atpTourPhase, setATPTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Complex I scene state
  const [activeComplexIPart, setActiveComplexIPart] = useState<string>('complex_i_holoenzyme');
  const [complexIComponentMeta, setComplexIComponentMeta] = useState<ComplexIComponentData>(COMPLEX_I_COMPONENTS_META['complex_i_holoenzyme']);
  const [isComplexIPaused, setIsComplexIPaused] = useState<boolean>(false);
  const [complexINADH, setComplexINADH] = useState<number>(80);
  const [isRotenoneInhibited, setIsRotenoneInhibited] = useState<boolean>(false);
  const [complexIExplodedProgress, setComplexIExplodedProgress] = useState<number>(0);
  const [complexIFilter, setComplexIFilter] = useState<string>('all');
  const [isComplexILabelsVisible, setIsComplexILabelsVisible] = useState<boolean>(true);
  const [isComplexINarrating, setIsComplexINarrating] = useState<boolean>(false);
  const [isComplexIAutoRotating, setIsComplexIAutoRotating] = useState<boolean>(false);
  const [complexIStoryStep, setComplexIStoryStep] = useState<number>(0);

  // Complex I Guided Tour State
  const [isComplexITourActive, setIsComplexITourActive] = useState<boolean>(false);
  const [isComplexITourPlaying, setIsComplexITourPlaying] = useState<boolean>(false);
  const [complexITourStep, setComplexITourStep] = useState<number>(0);
  const [complexITourPhase, setComplexITourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // SecYEG scene state
  const [activeSecYEGPart, setActiveSecYEGPart] = useState<string>('secyeg_holoenzyme');
  const [secYEGComponentMeta, setSecYEGComponentMeta] = useState<SecYEGComponentData>(SECYEG_COMPONENTS_META['secyeg_holoenzyme']);
  const [isSecYEGPaused, setIsSecYEGPaused] = useState<boolean>(false);
  const [secYEGAtpRate, setSecYEGAtpRate] = useState<number>(1.0);
  const [isAzideInhibited, setIsAzideInhibited] = useState<boolean>(false);
  const [secYEGLateralGate, setSecYEGLateralGate] = useState<number>(0);
  const [secYEGExplodedProgress, setSecYEGExplodedProgress] = useState<number>(0);
  const [isSecYEGLabelsVisible, setIsSecYEGLabelsVisible] = useState<boolean>(true);
  const [isSecYEGNarrating, setIsSecYEGNarrating] = useState<boolean>(false);
  const [isSecYEGAutoRotating, setIsSecYEGAutoRotating] = useState<boolean>(false);
  const [secYEGStoryStep, setSecYEGStoryStep] = useState<number>(0);

  // SecYEG Guided Tour State
  const [isSecYEGTourActive, setIsSecYEGTourActive] = useState<boolean>(false);
  const [isSecYEGTourPlaying, setIsSecYEGTourPlaying] = useState<boolean>(false);
  const [secYEGTourStep, setSecYEGTourStep] = useState<number>(0);
  const [secYEGTourPhase, setSecYEGTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // BAM scene state
  const [activeBAMPart, setActiveBAMPart] = useState<string>('bam_holoenzyme');
  const [bamComponentMeta, setBamComponentMeta] = useState<BAMComponentData>(BAM_COMPONENTS_META['bam_holoenzyme']);
  const [isBAMPaused, setIsBAMPaused] = useState<boolean>(false);
  const [bamInsertionSpeed, setBamInsertionSpeed] = useState<number>(1.0);
  const [bamLateralSeam, setBamLateralSeam] = useState<number>(0);
  const [bamExplodedProgress, setBamExplodedProgress] = useState<number>(0);
  const [isBAMLabelsVisible, setIsBAMLabelsVisible] = useState<boolean>(true);
  const [isBAMNarrating, setIsBAMNarrating] = useState<boolean>(false);
  const [isBAMAutoRotating, setIsBAMAutoRotating] = useState<boolean>(false);
  const [bamStoryStep, setBamStoryStep] = useState<number>(0);

  // BAM Guided Tour State
  const [isBAMTourActive, setIsBAMTourActive] = useState<boolean>(false);
  const [isBAMTourPlaying, setIsBAMTourPlaying] = useState<boolean>(false);
  const [bamTourStep, setBamTourStep] = useState<number>(0);
  const [bamTourPhase, setBamTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Lpt scene state
  const [activeLptPart, setActiveLptPart] = useState<string>('lpt_holoenzyme');
  const [lptComponentMeta, setLptComponentMeta] = useState<LptComponentData>(LPT_COMPONENTS_META['lpt_holoenzyme']);
  const [isLptPaused, setIsLptPaused] = useState<boolean>(false);
  const [isLptAtpActive, setIsLptAtpActive] = useState<boolean>(true);
  const [lptExportSpeed, setLptExportSpeed] = useState<number>(1.0);
  const [lptExplodedProgress, setLptExplodedProgress] = useState<number>(0);
  const [isLptLabelsVisible, setIsLptLabelsVisible] = useState<boolean>(true);
  const [isLptNarrating, setIsLptNarrating] = useState<boolean>(false);
  const [isLptAutoRotating, setIsLptAutoRotating] = useState<boolean>(false);
  const [lptStoryStep, setLptStoryStep] = useState<number>(0);

  // Lpt Guided Tour State
  const [isLptTourActive, setIsLptTourActive] = useState<boolean>(false);
  const [isLptTourPlaying, setIsLptTourPlaying] = useState<boolean>(false);
  const [lptTourStep, setLptTourStep] = useState<number>(0);
  const [lptTourPhase, setLptTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Live Subtitles State (closed captions for AI narrator with 0.5s pre-display)
  const [subtitleState, setSubtitleState] = useState<{
    visible: boolean;
    text: string;
    badge: string;
    speaker: string;
  }>({
    visible: false,
    text: '',
    badge: 'AI NARRATOR',
    speaker: 'Kokoro Neural TTS'
  });

  const showSubtitles = (text: string, badge?: string, speaker?: string) => {
    setSubtitleState({
      visible: true,
      text,
      badge: badge || 'AI NARRATOR',
      speaker: speaker || 'Kokoro Neural TTS'
    });
  };

  const hideSubtitles = () => {
    setSubtitleState(prev => ({ ...prev, visible: false }));
  };

  // Refs for 3D containers and instances
  const cellContainerRef = useRef<HTMLDivElement>(null);
  const motorContainerRef = useRef<HTMLDivElement>(null);
  const ribosomeContainerRef = useRef<HTMLDivElement>(null);
  const atpContainerRef = useRef<HTMLDivElement>(null);
  const complexIContainerRef = useRef<HTMLDivElement>(null);
  const secYEGContainerRef = useRef<HTMLDivElement>(null);
  const bamContainerRef = useRef<HTMLDivElement>(null);
  const lptContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);
  const motorSceneRef = useRef<FlagellarMotorScene | null>(null);
  const ribosomeSceneRef = useRef<RibosomeScene | null>(null);
  const atpSceneRef = useRef<ATPSynthaseScene | null>(null);
  const complexISceneRef = useRef<ComplexIScene | null>(null);
  const secYEGSceneRef = useRef<SecYEGScene | null>(null);
  const bamSceneRef = useRef<BAMComplexScene | null>(null);
  const lptSceneRef = useRef<LptBridgeScene | null>(null);

  // --------------------------------------------------------------------------
  // 1. Initialize Cell Viewer Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!cellContainerRef.current) return;

    let isDisposed = false;
    const container = cellContainerRef.current;

    // Clean any orphaned canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const cellViewer = new CellViewerScene(container, {
      voiceService,
      onSelectOrganelle: (key: string) => {
        setSelectedOrganelleKey(key);
        setIsCellInspectorOpen(true);
      },
      onTourStepChange: (status: TourStatus) => {
        setTourStatus(status);
        if (status.active) {
          setSelectedOrganelleKey(status.key);
        }
      },
      onWasmStatus: (status: string) => {
        setWasmStatus(status);
      }
    });

    cellViewer.init().then(() => {
      if (isDisposed) {
        cellViewer.dispose();
        return;
      }
      cellSceneRef.current = cellViewer;
      (window as any).__cellViewer = cellViewer;
      cellViewer.start();
    });

    return () => {
      isDisposed = true;
      cellViewer.dispose();
      cellSceneRef.current = null;
    };
  }, []);

  // --------------------------------------------------------------------------
  // 2. Initialize / Sync Flagellar Motor Scene when scenario === 'motor'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!motorContainerRef.current) return;
    if (scenario !== 'motor') return;

    if (!motorSceneRef.current) {
      const motorScene = new FlagellarMotorScene(motorContainerRef.current, {
        voiceService,
        onSelectComponent: (key: string, meta: any) => {
          setActiveMotorPart(key);
          if (meta) {
            setMotorComponentMeta({
              name: meta.name || key,
              dimensions: meta.dimensions || '',
              proteins: meta.proteins || '',
              pdb: meta.pdb || '',
              role: meta.role || '',
              badge: (meta.name || key).toUpperCase()
            });
          }
        }
      });

      motorScene.init();
      motorSceneRef.current = motorScene;
      motorScene.start();
      motorScene.setRepresentationMode('molecular');
      motorScene.resetCamera();
    } else {
      motorSceneRef.current.start();
      motorSceneRef.current.handleResize();
      motorSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
        motorSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3. Initialize / Sync Ribosome Scene when scenario === 'ribosome'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!ribosomeContainerRef.current) return;
    if (scenario !== 'ribosome') return;

    if (!ribosomeSceneRef.current) {
      const ribo = new RibosomeScene(ribosomeContainerRef.current, {
        voiceService,
        onSelectComponent: (key: string, meta: RibosomeComponentData) => {
          setActiveRibosomePart(key);
          if (meta) {
            setRibosomeComponentMeta(meta);
          }
        },
        onMRNACycleUpdate: (progress: number) => {
          setMrnaCycleProgress(progress);
        }
      });

      ribo.init();
      ribosomeSceneRef.current = ribo;
      (window as any).ribosomeScene = ribo;
      ribo.start();
      ribo.resetCamera();
    } else {
      (window as any).ribosomeScene = ribosomeSceneRef.current;
      ribosomeSceneRef.current.start();
      ribosomeSceneRef.current.handleResize();
      ribosomeSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.dispose();
        ribosomeSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3b. Initialize / Sync ATP Synthase Scene when scenario === 'atp_synthase'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!atpContainerRef.current) return;
    if (scenario !== 'atp_synthase') return;

    if (!atpSceneRef.current) {
      const atp = new ATPSynthaseScene(atpContainerRef.current, {
        voiceService,
        onSelectComponent: (meta: ATPSynthaseComponentData, key: string) => {
          setActiveATPPart(key);
          if (meta) {
            setATPComponentMeta(meta);
          }
        },
        onBoyerStateUpdate: (state: 'open' | 'loose' | 'tight') => {
          setATPBoyerState(state);
        }
      });

      atp.init();
      atpSceneRef.current = atp;
      (window as any).atpScene = atp;
      atp.start();
      atp.resetCamera();
    } else {
      (window as any).atpScene = atpSceneRef.current;
      atpSceneRef.current.start();
      atpSceneRef.current.handleResize();
      atpSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (atpSceneRef.current) {
        atpSceneRef.current.dispose();
        atpSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3c. Initialize / Sync Complex I Scene when scenario === 'complex_i'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!complexIContainerRef.current) return;
    if (scenario !== 'complex_i') return;

    if (!complexISceneRef.current) {
      const c1 = new ComplexIScene(complexIContainerRef.current, {
        onSelectComponent: (key: string, meta: ComplexIComponentData) => {
          setActiveComplexIPart(key);
          if (meta) {
            setComplexIComponentMeta(meta);
          }
        },
        onTourStepChange: (step: number) => {
          setComplexITourStep(step);
        }
      });

      c1.init();
      complexISceneRef.current = c1;
      (window as any).complexIScene = c1;
      c1.start();
      c1.resetCamera();
    } else {
      (window as any).complexIScene = complexISceneRef.current;
      complexISceneRef.current.start();
      complexISceneRef.current.handleResize();
      complexISceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (complexISceneRef.current) {
        complexISceneRef.current.destroy();
        complexISceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3e. Initialize / Sync SecYEG Scene when scenario === 'secyeg'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!secYEGContainerRef.current) return;
    if (scenario !== 'secyeg') return;

    if (!secYEGSceneRef.current) {
      const s1 = new SecYEGScene(secYEGContainerRef.current, {
        onSelectComponent: (meta: SecYEGComponentData) => {
          if (meta) {
            setSecYEGComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'SECYEG TRANSLOCON', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setSecYEGStoryStep(stage);
        }
      });

      secYEGSceneRef.current = s1;
      (window as any).secYEGScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).secYEGScene = secYEGSceneRef.current;
      secYEGSceneRef.current.start();
      secYEGSceneRef.current.handleResize();
      secYEGSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.destroy();
        secYEGSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3f. Initialize / Sync BAM Scene when scenario === 'bam'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!bamContainerRef.current) return;
    if (scenario !== 'bam') return;

    if (!bamSceneRef.current) {
      const s1 = new BAMComplexScene(bamContainerRef.current, {
        onSelectComponent: (meta: BAMComponentData) => {
          if (meta) {
            setBamComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'BAM COMPLEX', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setBamStoryStep(stage);
        }
      });

      bamSceneRef.current = s1;
      (window as any).bamScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).bamScene = bamSceneRef.current;
      bamSceneRef.current.start();
      bamSceneRef.current.handleResize();
      bamSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
        bamSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3g. Initialize / Sync Lpt Bridge Scene when scenario === 'lpt'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!lptContainerRef.current) return;
    if (scenario !== 'lpt') return;

    if (!lptSceneRef.current) {
      const s1 = new LptBridgeScene(lptContainerRef.current, {
        onSelectComponent: (meta: LptComponentData) => {
          if (meta) {
            setLptComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'LPT BRIDGE', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setLptStoryStep(stage);
        }
      });

      lptSceneRef.current = s1;
      (window as any).lptScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).lptScene = lptSceneRef.current;
      lptSceneRef.current.start();
      lptSceneRef.current.handleResize();
      lptSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
        lptSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 4. Autoplay Whole Cell Overview Narration
  // --------------------------------------------------------------------------
  useEffect(() => {
    let triggered = false;
    const triggerIntro = () => {
      if (triggered) return;
      triggered = true;
      const data = CELL_ANATOMY_DATA['overview'];
      let narrative = `${data.title}. `;
      if (data.scientific) narrative += `Scientific designation: ${data.scientific}. `;
      if (data.subtitle) narrative += `${data.subtitle}. `;
      narrative += data.description;

      setIsCellNarrating(true);
      showSubtitles(narrative, 'WHOLE CELL OVERVIEW', 'Kokoro Neural TTS');
      voiceService.playText(narrative, {
        voice: selectedVoice,
        onEnd: () => {
          setIsCellNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsCellNarrating(false);
          hideSubtitles();
        }
      });
      window.removeEventListener('pointerdown', triggerIntro);
      window.removeEventListener('keydown', triggerIntro);
    };

    const timer = setTimeout(() => {
      triggerIntro();
    }, 1200);

    window.addEventListener('pointerdown', triggerIntro, { once: true });
    window.addEventListener('keydown', triggerIntro, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', triggerIntro);
      window.removeEventListener('keydown', triggerIntro);
    };
  }, [selectedVoice]);

  // --------------------------------------------------------------------------
  // 5. Scenario Switching
  // --------------------------------------------------------------------------
  const handleSelectScenario = useCallback((nextScenario: ScenarioType) => {
    setScenario(nextScenario);
    voiceService.stop();
    hideSubtitles();
    setIsCellNarrating(false);
    setIsMotorNarrating(false);
    setIsRibosomeNarrating(false);
    setIsATPNarrating(false);
    setIsComplexINarrating(false);
    setIsSecYEGNarrating(false);
    setIsBAMNarrating(false);
    setIsLptNarrating(false);

    setMotorStoryStep(0);
    setRibosomeStoryStep(0);
    setAtpStoryStep(0);
    setComplexIStoryStep(0);
    setSecYEGStoryStep(0);
    setBamStoryStep(0);
    setLptStoryStep(0);

    setIsMotorTourActive(false);
    setIsMotorTourPlaying(false);
    setIsRibosomeTourActive(false);
    setIsRibosomeTourPlaying(false);
    setIsATPTourActive(false);
    setIsATPTourPlaying(false);
    setIsComplexITourActive(false);
    setIsComplexITourPlaying(false);
    setIsSecYEGTourActive(false);
    setIsSecYEGTourPlaying(false);
    setIsBAMTourActive(false);
    setIsBAMTourPlaying(false);
    setIsLptTourActive(false);
    setIsLptTourPlaying(false);

    if (motorSceneRef.current) {
      motorSceneRef.current.setExplanationStep(0);
    }
    if (ribosomeSceneRef.current) {
      ribosomeSceneRef.current.setExplanationStep(0);
    }
    if (atpSceneRef.current) {
      atpSceneRef.current.setExplanationStep(0);
    }
    if (complexISceneRef.current) {
      complexISceneRef.current.setExplanationStep(0);
    }
    if (secYEGSceneRef.current) {
      secYEGSceneRef.current.setExplanationStep(0);
    }
    if (bamSceneRef.current) {
      bamSceneRef.current.setExplanationStep(0);
    }
    if (lptSceneRef.current) {
      lptSceneRef.current.setExplanationStep(0);
    }

    if (nextScenario === 'motor') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
    } else if (nextScenario === 'ribosome') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
    } else if (nextScenario === 'atp_synthase') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
    } else if (nextScenario === 'complex_i') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.start();
        complexISceneRef.current.handleResize();
        complexISceneRef.current.resetCamera();
      }
    } else if (nextScenario === 'secyeg') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.start();
        secYEGSceneRef.current.handleResize();
        secYEGSceneRef.current.resetCamera();
      }
    } else if (nextScenario === 'bam') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.start();
        bamSceneRef.current.handleResize();
        bamSceneRef.current.resetCamera();
      }
    } else if (nextScenario === 'lpt') {
      if (cellSceneRef.current) {
        cellSceneRef.current.stop();
        if (tourStatus.active) cellSceneRef.current.exitTour();
      }
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.start();
        lptSceneRef.current.handleResize();
        lptSceneRef.current.resetCamera();
      }
    } else {
      if (motorSceneRef.current) {
        motorSceneRef.current.stop();
      }
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.stop();
      }
      if (atpSceneRef.current) {
        atpSceneRef.current.stop();
      }
      if (complexISceneRef.current) {
        complexISceneRef.current.stop();
      }
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.dispose();
      }
      if (bamSceneRef.current) {
        bamSceneRef.current.dispose();
      }
      if (lptSceneRef.current) {
        lptSceneRef.current.dispose();
      }
      if (cellSceneRef.current) {
        cellSceneRef.current.start();
        cellSceneRef.current.handleResize();
        cellSceneRef.current.updateLandmarksAndLeaders();
      }
    }
  }, [tourStatus.active]);

  // --------------------------------------------------------------------------
  // 6. Voice Service Sync
  // --------------------------------------------------------------------------
  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
    if (voiceService && voiceService.setVoice) {
      voiceService.setVoice(voice);
    }
  };

  const handleCellNarrate = () => {
    if (voiceService.isBusy()) {
      voiceService.stop();
      setIsCellNarrating(false);
      hideSubtitles();
    } else {
      const data = CELL_ANATOMY_DATA[selectedOrganelleKey] || CELL_ANATOMY_DATA['overview'];
      let narrative = `${data.title}. `;
      if (data.scientific) narrative += `Scientific designation: ${data.scientific}. `;
      if (data.subtitle) narrative += `${data.subtitle}. `;
      narrative += data.description;

      setIsCellNarrating(true);
      showSubtitles(narrative, data.title || 'CELLULAR ANATOMY', 'Kokoro Neural TTS');
      voiceService.playText(narrative, {
        voice: selectedVoice,
        onEnd: () => {
          setIsCellNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsCellNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const playMotorStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > MOTOR_EXPLANATION_STAGES.length) {
      setMotorStoryStep(0);
      setIsMotorNarrating(false);
      setIsMotorTourActive(false);
      setIsMotorTourPlaying(false);
      hideSubtitles();
      if (motorSceneRef.current) {
        motorSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = MOTOR_EXPLANATION_STAGES[stepNumber - 1];
    setMotorStoryStep(stepNumber);
    setActiveMotorPart(stage.id);

    if (motorSceneRef.current) {
      motorSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.speech, `STAGE ${stage.step} OF ${MOTOR_EXPLANATION_STAGES.length}: ${stage.shortLabel}`, 'Kokoro Neural TTS');
    setIsMotorNarrating(true);

    voiceService.playText(stage.speech, {
      voice: selectedVoice,
      onEnd: () => {
        setTimeout(() => {
          if (stepNumber < MOTOR_EXPLANATION_STAGES.length) {
            playMotorStoryStep(stepNumber + 1);
          } else {
            setMotorStoryStep(0);
            setIsMotorNarrating(false);
            setIsMotorTourActive(false);
            setIsMotorTourPlaying(false);
            hideSubtitles();
            if (motorSceneRef.current) {
              motorSceneRef.current.setExplanationStep(0);
            }
          }
        }, 800);
      },
      onError: () => {
        setMotorStoryStep(0);
        setIsMotorNarrating(false);
        setIsMotorTourActive(false);
        setIsMotorTourPlaying(false);
        hideSubtitles();
        if (motorSceneRef.current) {
          motorSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopMotorStoryTrace = () => {
    voiceService.stop();
    setIsMotorNarrating(false);
    setMotorStoryStep(0);
    setIsMotorTourActive(false);
    setIsMotorTourPlaying(false);
    hideSubtitles();
    if (motorSceneRef.current) {
      motorSceneRef.current.setExplanationStep(0);
    }
  };

  const handleMotorNarrate = () => {
    if (voiceService.isBusy() || motorStoryStep > 0) {
      stopMotorStoryTrace();
    } else {
      if (!activeMotorPart || activeMotorPart === 'molecular_7cgo') {
        playMotorStoryStep(1);
      } else if (motorComponentMeta) {
        const speech = `${motorComponentMeta.name}. ${motorComponentMeta.role || ''}`;
        setIsMotorNarrating(true);
        showSubtitles(speech, motorComponentMeta.badge || 'FLAGELLAR MOTOR', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsMotorNarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsMotorNarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const playRibosomeStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > RIBOSOME_EXPLANATION_STAGES.length) {
      setRibosomeStoryStep(0);
      setIsRibosomeNarrating(false);
      setIsRibosomeTourActive(false);
      setIsRibosomeTourPlaying(false);
      hideSubtitles();
      if (ribosomeSceneRef.current) {
        ribosomeSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = RIBOSOME_EXPLANATION_STAGES[stepNumber - 1];
    setRibosomeStoryStep(stepNumber);
    setActiveRibosomePart(stage.id);
    const meta = RIBOSOME_COMPONENTS_META[stage.id];
    if (meta) {
      setRibosomeComponentMeta(meta);
    }

    if (ribosomeSceneRef.current) {
      ribosomeSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.speech, `STAGE ${stage.step} OF ${RIBOSOME_EXPLANATION_STAGES.length}: ${stage.shortLabel}`, 'Kokoro Neural TTS');
    setIsRibosomeNarrating(true);

    voiceService.playText(stage.speech, {
      voice: selectedVoice,
      onEnd: () => {
        setTimeout(() => {
          if (stepNumber < RIBOSOME_EXPLANATION_STAGES.length) {
            playRibosomeStoryStep(stepNumber + 1);
          } else {
            setRibosomeStoryStep(0);
            setIsRibosomeNarrating(false);
            setIsRibosomeTourActive(false);
            setIsRibosomeTourPlaying(false);
            hideSubtitles();
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setExplanationStep(0);
            }
          }
        }, 800);
      },
      onError: () => {
        setRibosomeStoryStep(0);
        setIsRibosomeNarrating(false);
        setIsRibosomeTourActive(false);
        setIsRibosomeTourPlaying(false);
        hideSubtitles();
        if (ribosomeSceneRef.current) {
          ribosomeSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopRibosomeStoryTrace = () => {
    voiceService.stop();
    setIsRibosomeNarrating(false);
    setRibosomeStoryStep(0);
    setIsRibosomeTourActive(false);
    setIsRibosomeTourPlaying(false);
    hideSubtitles();
    if (ribosomeSceneRef.current) {
      ribosomeSceneRef.current.setExplanationStep(0);
    }
  };

  const handleRibosomeNarrate = () => {
    if (voiceService.isBusy() || ribosomeStoryStep > 0) {
      stopRibosomeStoryTrace();
    } else {
      if (!activeRibosomePart || activeRibosomePart === 'ribosome_70s' || activeRibosomePart === 'polysome_complex') {
        playRibosomeStoryStep(1);
      } else if (ribosomeComponentMeta) {
        const speech = `${ribosomeComponentMeta.name}. ${ribosomeComponentMeta.desc || ''}`;
        setIsRibosomeNarrating(true);
        showSubtitles(speech, ribosomeComponentMeta.badge || '70S RIBOSOME', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsRibosomeNarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsRibosomeNarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const playATPStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > ATP_EXPLANATION_STAGES.length) {
      // Completed explanation! Holoenzyme continues running at full steady-state
      setAtpStoryStep(0);
      setIsATPNarrating(false);
      setIsATPTourActive(false);
      setIsATPTourPlaying(false);
      hideSubtitles();
      if (atpSceneRef.current) {
        atpSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = ATP_EXPLANATION_STAGES[stepNumber - 1];
    setAtpStoryStep(stepNumber);
    setActiveATPPart(stage.id);
    const meta = ATP_SYNTHASE_COMPONENTS_META[stage.id] || ATP_SYNTHASE_COMPONENTS_META['atp_synthase_holoenzyme'];
    if (meta) {
      setATPComponentMeta(meta);
    }

    if (atpSceneRef.current) {
      atpSceneRef.current.setExplanationStep(stepNumber);
    }

    // Immediately present closed captions ~0.5s before Kokoro synthesizes & starts audio
    showSubtitles(stage.speech, `STAGE ${stage.step} OF ${ATP_EXPLANATION_STAGES.length}: ${stage.shortLabel}`, 'Kokoro Neural TTS');

    setIsATPNarrating(true);
    voiceService.playText(stage.speech, {
      voice: selectedVoice,
      onEnd: () => {
        // Pedagogical pause so user observes the biological event
        setTimeout(() => {
          if (stepNumber < ATP_EXPLANATION_STAGES.length) {
            playATPStoryStep(stepNumber + 1);
          } else {
            // Final stage complete! Holoenzyme continues running at full steady-state
            setAtpStoryStep(0);
            setIsATPNarrating(false);
            setIsATPTourActive(false);
            setIsATPTourPlaying(false);
            hideSubtitles();
            if (atpSceneRef.current) {
              atpSceneRef.current.setExplanationStep(0);
            }
          }
        }, 750);
      },
      onError: () => {
        setAtpStoryStep(0);
        setIsATPNarrating(false);
        setIsATPTourActive(false);
        setIsATPTourPlaying(false);
        hideSubtitles();
        if (atpSceneRef.current) {
          atpSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopATPStoryTrace = () => {
    voiceService.stop();
    setIsATPNarrating(false);
    setAtpStoryStep(0);
    setIsATPTourActive(false);
    setIsATPTourPlaying(false);
    hideSubtitles();
    if (atpSceneRef.current) {
      atpSceneRef.current.setExplanationStep(0);
    }
  };

  const handleATPNarrate = () => {
    if (voiceService.isBusy() || atpStoryStep > 0) {
      stopATPStoryTrace();
    } else {
      if (!activeATPPart || activeATPPart === 'atp_synthase_holoenzyme') {
        playATPStoryStep(1);
      } else if (atpComponentMeta) {
        const speech = `${atpComponentMeta.name}. ${atpComponentMeta.desc || ''}`;
        setIsATPNarrating(true);
        showSubtitles(speech, atpComponentMeta.badge || 'ATP SYNTHASE', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsATPNarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsATPNarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const playComplexIStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > COMPLEX_I_EXPLANATION_STAGES.length) {
      setComplexIStoryStep(0);
      setIsComplexINarrating(false);
      setIsComplexITourActive(false);
      setIsComplexITourPlaying(false);
      hideSubtitles();
      if (complexISceneRef.current) {
        complexISceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = COMPLEX_I_EXPLANATION_STAGES[stepNumber - 1];
    setComplexIStoryStep(stepNumber);
    setActiveComplexIPart(stage.id);
    const meta = COMPLEX_I_COMPONENTS_META[stage.id] || COMPLEX_I_COMPONENTS_META['complex_i_holoenzyme'];
    if (meta) {
      setComplexIComponentMeta(meta);
    }

    if (complexISceneRef.current) {
      complexISceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.speech, `STAGE ${stage.step} OF ${COMPLEX_I_EXPLANATION_STAGES.length}: ${stage.shortLabel}`, 'Kokoro Neural TTS');

    setIsComplexINarrating(true);
    voiceService.playText(stage.speech, {
      voice: selectedVoice,
      onEnd: () => {
        setTimeout(() => {
          if (stepNumber < COMPLEX_I_EXPLANATION_STAGES.length) {
            playComplexIStoryStep(stepNumber + 1);
          } else {
            setComplexIStoryStep(0);
            setIsComplexINarrating(false);
            setIsComplexITourActive(false);
            setIsComplexITourPlaying(false);
            hideSubtitles();
            if (complexISceneRef.current) {
              complexISceneRef.current.setExplanationStep(0);
            }
          }
        }, 750);
      },
      onError: () => {
        setComplexIStoryStep(0);
        setIsComplexINarrating(false);
        setIsComplexITourActive(false);
        setIsComplexITourPlaying(false);
        hideSubtitles();
        if (complexISceneRef.current) {
          complexISceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopComplexIStoryTrace = () => {
    voiceService.stop();
    setIsComplexINarrating(false);
    setComplexIStoryStep(0);
    setIsComplexITourActive(false);
    setIsComplexITourPlaying(false);
    setComplexITourPhase('idle');
    hideSubtitles();
    if (complexISceneRef.current) {
      complexISceneRef.current.setExplanationStep(0);
    }
  };

  const handleComplexINarrate = () => {
    if (voiceService.isBusy() || complexIStoryStep > 0) {
      stopComplexIStoryTrace();
    } else {
      if (!activeComplexIPart || activeComplexIPart === 'complex_i_holoenzyme') {
        playComplexIStoryStep(1);
      } else if (complexIComponentMeta) {
        const speech = `${complexIComponentMeta.name}. ${complexIComponentMeta.desc || ''}`;
        setIsComplexINarrating(true);
        showSubtitles(speech, complexIComponentMeta.badge || 'COMPLEX I', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsComplexINarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsComplexINarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const handleToggleComplexIAutoRotate = () => {
    if (complexISceneRef.current) {
      const active = complexISceneRef.current.toggleAutoRotate();
      setIsComplexIAutoRotating(active);
    }
  };

  const handleToggleComplexILabels = () => {
    setIsComplexILabelsVisible(prev => !prev);
  };

  const handleToggleComplexITour = () => {
    if (isComplexITourActive || complexIStoryStep > 0) {
      stopComplexIStoryTrace();
    } else {
      setIsComplexITourActive(true);
      playComplexIStoryStep(1);
    }
  };

  const goToComplexITourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(COMPLEX_I_TOUR_STOPS.length - 1, stepIndex));
    setComplexITourStep(safeIndex);
    const partKey = COMPLEX_I_TOUR_STOPS[safeIndex];
    setActiveComplexIPart(partKey);
    const meta = COMPLEX_I_COMPONENTS_META[partKey];
    if (meta) {
      setComplexIComponentMeta(meta);
      if (complexISceneRef.current) {
        complexISceneRef.current.focusComponent(partKey);
      }
      setComplexITourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6e. SecYEG Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playSecYEGStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > SECYEG_EXPLANATION_STAGES.length) {
      setSecYEGStoryStep(0);
      setIsSecYEGNarrating(false);
      setIsSecYEGTourActive(false);
      setIsSecYEGTourPlaying(false);
      setSecYEGLateralGate(0.0);
      hideSubtitles();
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = SECYEG_EXPLANATION_STAGES[stepNumber - 1];
    setSecYEGStoryStep(stepNumber);
    setActiveSecYEGPart(stage.id);
    const meta = SECYEG_COMPONENTS_META[stage.id] || SECYEG_COMPONENTS_META['secyeg_holoenzyme'];
    if (meta) {
      setSecYEGComponentMeta(meta);
    }

    if (stage.id === 'lateral_gate_partition') {
      setSecYEGLateralGate(0.9);
    } else {
      setSecYEGLateralGate(0.0);
    }

    if (secYEGSceneRef.current) {
      secYEGSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${SECYEG_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');

    setIsSecYEGNarrating(true);
    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setTimeout(() => {
          if (stepNumber < SECYEG_EXPLANATION_STAGES.length) {
            playSecYEGStoryStep(stepNumber + 1);
          } else {
            setSecYEGStoryStep(0);
            setIsSecYEGNarrating(false);
            setIsSecYEGTourActive(false);
            setIsSecYEGTourPlaying(false);
            hideSubtitles();
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.setExplanationStep(0);
            }
          }
        }, 750);
      },
      onError: () => {
        setSecYEGStoryStep(0);
        setIsSecYEGNarrating(false);
        setIsSecYEGTourActive(false);
        setIsSecYEGTourPlaying(false);
        hideSubtitles();
        if (secYEGSceneRef.current) {
          secYEGSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopSecYEGStoryTrace = () => {
    voiceService.stop();
    setIsSecYEGNarrating(false);
    setSecYEGStoryStep(0);
    setIsSecYEGTourActive(false);
    setIsSecYEGTourPlaying(false);
    setSecYEGTourPhase('idle');
    hideSubtitles();
    if (secYEGSceneRef.current) {
      secYEGSceneRef.current.setExplanationStep(0);
    }
  };

  const handleSecYEGNarrate = () => {
    if (voiceService.isBusy() || secYEGStoryStep > 0) {
      stopSecYEGStoryTrace();
    } else {
      if (!activeSecYEGPart || activeSecYEGPart === 'secyeg_holoenzyme') {
        playSecYEGStoryStep(1);
      } else if (secYEGComponentMeta) {
        const speech = `${secYEGComponentMeta.name}. ${secYEGComponentMeta.desc || ''}`;
        setIsSecYEGNarrating(true);
        showSubtitles(speech, secYEGComponentMeta.badge || 'SECYEG', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsSecYEGNarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsSecYEGNarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const handleToggleSecYEGAutoRotate = () => {
    if (secYEGSceneRef.current) {
      const active = secYEGSceneRef.current.toggleAutoRotate();
      setIsSecYEGAutoRotating(active);
    }
  };

  const handleToggleSecYEGLabels = () => {
    setIsSecYEGLabelsVisible(prev => !prev);
  };

  const handleToggleSecYEGTour = () => {
    if (isSecYEGTourActive || secYEGStoryStep > 0) {
      stopSecYEGStoryTrace();
    } else {
      setIsSecYEGTourActive(true);
      playSecYEGStoryStep(1);
    }
  };

  const goToSecYEGTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(SECYEG_TOUR_STOPS.length - 1, stepIndex));
    setSecYEGTourStep(safeIndex);
    const partKey = SECYEG_TOUR_STOPS[safeIndex];
    setActiveSecYEGPart(partKey);
    const meta = SECYEG_COMPONENTS_META[partKey];
    if (meta) {
      setSecYEGComponentMeta(meta);
      if (secYEGSceneRef.current) {
        secYEGSceneRef.current.focusComponent(partKey);
      }
      setSecYEGTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6f. BAM Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playBAMStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > BAM_EXPLANATION_STAGES.length) {
      setBamStoryStep(0);
      setIsBAMNarrating(false);
      setIsBAMTourActive(false);
      setIsBAMTourPlaying(false);
      hideSubtitles();
      if (bamSceneRef.current) {
        bamSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = BAM_EXPLANATION_STAGES[stepNumber - 1];
    setBamStoryStep(stepNumber);
    setActiveBAMPart(stage.id);
    const meta = BAM_COMPONENTS_META[stage.id] || BAM_COMPONENTS_META['bam_holoenzyme'];
    if (meta) {
      setBamComponentMeta(meta);
    }

    if (bamSceneRef.current) {
      bamSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${BAM_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');

    setIsBAMNarrating(true);
    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setTimeout(() => {
          if (stepNumber < BAM_EXPLANATION_STAGES.length) {
            playBAMStoryStep(stepNumber + 1);
          } else {
            setBamStoryStep(0);
            setIsBAMNarrating(false);
            setIsBAMTourActive(false);
            setIsBAMTourPlaying(false);
            hideSubtitles();
            if (bamSceneRef.current) {
              bamSceneRef.current.setExplanationStep(0);
            }
          }
        }, 750);
      },
      onError: () => {
        setBamStoryStep(0);
        setIsBAMNarrating(false);
        setIsBAMTourActive(false);
        setIsBAMTourPlaying(false);
        hideSubtitles();
        if (bamSceneRef.current) {
          bamSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopBAMStoryTrace = () => {
    voiceService.stop();
    setIsBAMNarrating(false);
    setBamStoryStep(0);
    setIsBAMTourActive(false);
    setIsBAMTourPlaying(false);
    setBamTourPhase('idle');
    hideSubtitles();
    if (bamSceneRef.current) {
      bamSceneRef.current.setExplanationStep(0);
    }
  };

  const handleBAMNarrate = () => {
    if (voiceService.isBusy() || bamStoryStep > 0) {
      stopBAMStoryTrace();
    } else {
      if (!activeBAMPart || activeBAMPart === 'bam_holoenzyme') {
        playBAMStoryStep(1);
      } else if (bamComponentMeta) {
        const speech = `${bamComponentMeta.name}. ${bamComponentMeta.desc || ''}`;
        setIsBAMNarrating(true);
        showSubtitles(speech, bamComponentMeta.badge || 'BAM COMPLEX', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsBAMNarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsBAMNarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const handleToggleBAMAutoRotate = () => {
    if (bamSceneRef.current) {
      const active = bamSceneRef.current.toggleAutoRotate();
      setIsBAMAutoRotating(active);
    }
  };

  const handleToggleBAMLabels = () => {
    setIsBAMLabelsVisible(prev => !prev);
  };

  const handleToggleBAMTour = () => {
    if (isBAMTourActive || bamStoryStep > 0) {
      stopBAMStoryTrace();
    } else {
      setIsBAMTourActive(true);
      playBAMStoryStep(1);
    }
  };

  const goToBAMTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(BAM_TOUR_STOPS.length - 1, stepIndex));
    setBamTourStep(safeIndex);
    const partKey = BAM_TOUR_STOPS[safeIndex];
    setActiveBAMPart(partKey);
    const meta = BAM_COMPONENTS_META[partKey];
    if (meta) {
      setBamComponentMeta(meta);
      if (bamSceneRef.current) {
        bamSceneRef.current.focusComponent(partKey);
      }
      setBamTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6g. Lpt Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playLptStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > LPT_EXPLANATION_STAGES.length) {
      setLptStoryStep(0);
      setIsLptNarrating(false);
      setIsLptTourActive(false);
      setIsLptTourPlaying(false);
      hideSubtitles();
      if (lptSceneRef.current) {
        lptSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = LPT_EXPLANATION_STAGES[stepNumber - 1];
    setLptStoryStep(stepNumber);
    setActiveLptPart(stage.id);
    const meta = LPT_COMPONENTS_META[stage.id] || LPT_COMPONENTS_META['lpt_holoenzyme'];
    if (meta) {
      setLptComponentMeta(meta);
    }

    if (lptSceneRef.current) {
      lptSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${LPT_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');

    setIsLptNarrating(true);
    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setTimeout(() => {
          if (stepNumber < LPT_EXPLANATION_STAGES.length) {
            playLptStoryStep(stepNumber + 1);
          } else {
            setLptStoryStep(0);
            setIsLptNarrating(false);
            setIsLptTourActive(false);
            setIsLptTourPlaying(false);
            hideSubtitles();
            if (lptSceneRef.current) {
              lptSceneRef.current.setExplanationStep(0);
            }
          }
        }, 750);
      },
      onError: () => {
        setLptStoryStep(0);
        setIsLptNarrating(false);
        setIsLptTourActive(false);
        setIsLptTourPlaying(false);
        hideSubtitles();
        if (lptSceneRef.current) {
          lptSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopLptStoryTrace = () => {
    voiceService.stop();
    setIsLptNarrating(false);
    setLptStoryStep(0);
    setIsLptTourActive(false);
    setIsLptTourPlaying(false);
    setLptTourPhase('idle');
    hideSubtitles();
    if (lptSceneRef.current) {
      lptSceneRef.current.setExplanationStep(0);
    }
  };

  const handleLptNarrate = () => {
    if (voiceService.isBusy() || lptStoryStep > 0) {
      stopLptStoryTrace();
    } else {
      if (!activeLptPart || activeLptPart === 'lpt_holoenzyme') {
        playLptStoryStep(1);
      } else if (lptComponentMeta) {
        const speech = `${lptComponentMeta.name}. ${lptComponentMeta.desc || ''}`;
        setIsLptNarrating(true);
        showSubtitles(speech, lptComponentMeta.badge || 'LPT BRIDGE', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsLptNarrating(false);
            hideSubtitles();
          },
          onError: () => {
            setIsLptNarrating(false);
            hideSubtitles();
          }
        });
      }
    }
  };

  const handleToggleLptAutoRotate = () => {
    if (lptSceneRef.current) {
      const active = lptSceneRef.current.toggleAutoRotate();
      setIsLptAutoRotating(active);
    }
  };

  const handleToggleLptLabels = () => {
    setIsLptLabelsVisible(prev => !prev);
  };

  const handleToggleLptTour = () => {
    if (isLptTourActive || lptStoryStep > 0) {
      stopLptStoryTrace();
    } else {
      setIsLptTourActive(true);
      playLptStoryStep(1);
    }
  };

  const goToLptTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(LPT_TOUR_STOPS.length - 1, stepIndex));
    setLptTourStep(safeIndex);
    const partKey = LPT_TOUR_STOPS[safeIndex];
    setActiveLptPart(partKey);
    const meta = LPT_COMPONENTS_META[partKey];
    if (meta) {
      setLptComponentMeta(meta);
      if (lptSceneRef.current) {
        lptSceneRef.current.focusComponent(partKey);
      }
      setLptTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 7. Top Toolbar Actions (Unified for Cell, Motor, Ribosome, ATP Synthase, Complex I, SecYEG, BAM, & Lpt)
  // --------------------------------------------------------------------------
  const handleResetCamera = () => {
    if (scenario === 'cell' && cellSceneRef.current) {
      cellSceneRef.current.resetCamera();
    } else if (scenario === 'motor' && motorSceneRef.current) {
      motorSceneRef.current.resetCamera();
    } else if (scenario === 'ribosome' && ribosomeSceneRef.current) {
      ribosomeSceneRef.current.resetCamera();
    } else if (scenario === 'atp_synthase' && atpSceneRef.current) {
      atpSceneRef.current.resetCamera();
    } else if (scenario === 'complex_i' && complexISceneRef.current) {
      complexISceneRef.current.resetCamera();
    } else if (scenario === 'secyeg' && secYEGSceneRef.current) {
      secYEGSceneRef.current.resetCamera();
    } else if (scenario === 'bam' && bamSceneRef.current) {
      bamSceneRef.current.resetCamera();
    } else if (scenario === 'lpt' && lptSceneRef.current) {
      lptSceneRef.current.resetCamera();
    }
  };

  const handleToggleAutoRotate = () => {
    if (cellSceneRef.current) {
      const active = cellSceneRef.current.toggleAutoRotate();
      setIsAutoRotating(active);
    }
  };

  const handleToggleMotorAutoRotate = () => {
    if (motorSceneRef.current) {
      const active = motorSceneRef.current.toggleAutoRotate();
      setIsMotorAutoRotating(active);
    }
  };

  const handleToggleRibosomeAutoRotate = () => {
    if (ribosomeSceneRef.current) {
      const active = ribosomeSceneRef.current.toggleAutoRotate();
      setIsRibosomeAutoRotating(active);
    }
  };

  const handleToggleATPAutoRotate = () => {
    if (atpSceneRef.current) {
      const active = atpSceneRef.current.toggleAutoRotate();
      setIsATPAutoRotating(active);
    }
  };

  const handleToggleLabels = () => {
    if (cellSceneRef.current) {
      const shown = cellSceneRef.current.toggleLabels();
      setShowCellLabels(shown);
    }
  };

  const handleToggleATPLabels = () => {
    if (atpSceneRef.current) {
      const vis = atpSceneRef.current.toggleLabels();
      setIsATPLabelsVisible(vis);
    }
  };

  const handleToggleTour = () => {
    if (cellSceneRef.current) {
      cellSceneRef.current.toggleTourPlay();
    }
  };

  // --------------------------------------------------------------------------
  // 8. Motor Guided Tour Controller
  // --------------------------------------------------------------------------
  const goToMotorTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(MOTOR_TOUR_STOPS.length - 1, stepIndex));
    setMotorTourStep(safeIndex);
    const partKey = MOTOR_TOUR_STOPS[safeIndex];
    handleSelectMotorPart(partKey);

    setTimeout(() => {
      if (motorSceneRef.current) {
        const item = motorSceneRef.current.componentMeshes[partKey];
        const meta = item ? item.meta : null;
        if (meta) {
          const speech = `${meta.name}. ${meta.role || ''}`;
          setMotorTourPhase('narrating');
          setIsMotorNarrating(true);
          showSubtitles(speech, meta.badge || 'FLAGELLAR MOTOR', 'Kokoro Neural TTS');
          voiceService.playText(speech, {
            voice: selectedVoice,
            onEnd: () => {
              setIsMotorNarrating(false);
              setMotorTourPhase('cooldown');
              hideSubtitles();
            },
            onError: () => {
              setIsMotorNarrating(false);
              setMotorTourPhase('cooldown');
              hideSubtitles();
            }
          });
        }
      }
    }, 400);
  };

  const handleToggleMotorTour = () => {
    if (isMotorTourActive) {
      setIsMotorTourActive(false);
      setIsMotorTourPlaying(false);
      voiceService.stop();
      setIsMotorNarrating(false);
      setMotorTourPhase('idle');
      hideSubtitles();
    } else {
      setIsMotorTourActive(true);
      setIsMotorTourPlaying(true);
      goToMotorTourStep(0);
    }
  };

  useEffect(() => {
    if (!isMotorTourActive || !isMotorTourPlaying || motorTourPhase !== 'cooldown') return;
    const timer = setTimeout(() => {
      if (motorTourStep < MOTOR_TOUR_STOPS.length - 1) {
        goToMotorTourStep(motorTourStep + 1);
      } else {
        setIsMotorTourActive(false);
        setIsMotorTourPlaying(false);
        setMotorTourPhase('idle');
        hideSubtitles();
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isMotorTourActive, isMotorTourPlaying, motorTourPhase, motorTourStep]);

  // --------------------------------------------------------------------------
  // 9. Ribosome Guided Tour Controller
  // --------------------------------------------------------------------------
  const goToRibosomeTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(RIBOSOME_TOUR_STOPS.length - 1, stepIndex));
    setRibosomeTourStep(safeIndex);
    const partKey = RIBOSOME_TOUR_STOPS[safeIndex];
    setActiveRibosomePart(partKey);
    const meta = RIBOSOME_COMPONENTS_META[partKey];
    if (meta) {
      setRibosomeComponentMeta(meta);
    }
    if (ribosomeSceneRef.current) {
      ribosomeSceneRef.current.selectComponent(partKey);
      ribosomeSceneRef.current.focusComponent(partKey);
    }

    setTimeout(() => {
      if (meta) {
        const speech = `${meta.name}. ${meta.desc || ''}`;
        setRibosomeTourPhase('narrating');
        setIsRibosomeNarrating(true);
        showSubtitles(speech, meta.badge || '70S RIBOSOME', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsRibosomeNarrating(false);
            setRibosomeTourPhase('cooldown');
            hideSubtitles();
          },
          onError: () => {
            setIsRibosomeNarrating(false);
            setRibosomeTourPhase('cooldown');
            hideSubtitles();
          }
        });
      }
    }, 400);
  };

  const handleToggleRibosomeTour = () => {
    if (isRibosomeTourActive) {
      setIsRibosomeTourActive(false);
      setIsRibosomeTourPlaying(false);
      voiceService.stop();
      setIsRibosomeNarrating(false);
      setRibosomeTourPhase('idle');
      hideSubtitles();
    } else {
      setIsRibosomeTourActive(true);
      setIsRibosomeTourPlaying(true);
      goToRibosomeTourStep(0);
    }
  };

  useEffect(() => {
    if (!isRibosomeTourActive || !isRibosomeTourPlaying || ribosomeTourPhase !== 'cooldown') return;
    const timer = setTimeout(() => {
      if (ribosomeTourStep < RIBOSOME_TOUR_STOPS.length - 1) {
        goToRibosomeTourStep(ribosomeTourStep + 1);
      } else {
        setIsRibosomeTourActive(false);
        setIsRibosomeTourPlaying(false);
        setRibosomeTourPhase('idle');
        hideSubtitles();
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isRibosomeTourActive, isRibosomeTourPlaying, ribosomeTourPhase, ribosomeTourStep]);

  // --------------------------------------------------------------------------
  // 9b. ATP Synthase Guided Tour Controller
  // --------------------------------------------------------------------------
  const goToATPTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(ATP_SYNTHASE_TOUR_STOPS.length - 1, stepIndex));
    setATPTourStep(safeIndex);
    const partKey = ATP_SYNTHASE_TOUR_STOPS[safeIndex];
    setActiveATPPart(partKey);
    const meta = ATP_SYNTHASE_COMPONENTS_META[partKey];
    if (meta) {
      setATPComponentMeta(meta);
    }
    if (atpSceneRef.current) {
      atpSceneRef.current.selectComponent(partKey);
      atpSceneRef.current.focusComponent(partKey);
    }

    setTimeout(() => {
      if (meta) {
        const speech = `${meta.name}. ${meta.desc || ''}`;
        setATPTourPhase('narrating');
        setIsATPNarrating(true);
        showSubtitles(speech, meta.badge || 'ATP SYNTHASE', 'Kokoro Neural TTS');
        voiceService.playText(speech, {
          voice: selectedVoice,
          onEnd: () => {
            setIsATPNarrating(false);
            setATPTourPhase('cooldown');
            hideSubtitles();
          },
          onError: () => {
            setIsATPNarrating(false);
            setATPTourPhase('cooldown');
            hideSubtitles();
          }
        });
      }
    }, 400);
  };

  const handleToggleATPTour = () => {
    if (atpStoryStep > 0 || isATPNarrating) {
      stopATPStoryTrace();
    } else {
      setIsATPTourActive(true);
      setIsATPTourPlaying(true);
      playATPStoryStep(1);
    }
  };

  useEffect(() => {
    if (!isATPTourActive || !isATPTourPlaying || atpTourPhase !== 'cooldown') return;
    const timer = setTimeout(() => {
      if (atpTourStep < ATP_SYNTHASE_TOUR_STOPS.length - 1) {
        goToATPTourStep(atpTourStep + 1);
      } else {
        setIsATPTourActive(false);
        setIsATPTourPlaying(false);
        setATPTourPhase('idle');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isATPTourActive, isATPTourPlaying, atpTourPhase, atpTourStep]);

  const handleOrganelleClick = (key: string) => {
    setSelectedOrganelleKey(key);
    setIsCellInspectorOpen(true);
    if (cellSceneRef.current) {
      cellSceneRef.current.selectOrganelle(key);
    }
  };

  const handleFocusOrganelle = () => {
    const data = CELL_ANATOMY_DATA[selectedOrganelleKey];
    if (data && cellSceneRef.current) {
      cellSceneRef.current.flyCameraTo(data.camPos, data.camTarget);
    }
  };

  // --------------------------------------------------------------------------
  // 10. Motor Controls HUD Handlers
  // --------------------------------------------------------------------------
  const handleSetMotorRepMode = (mode: 'molecular' | 'schematic') => {
    setMotorRepMode(mode);
    if (motorSceneRef.current) {
      motorSceneRef.current.setRepresentationMode(mode);
    }
  };

  const handleToggleMembrane = () => {
    if (motorSceneRef.current) {
      const vis = motorSceneRef.current.toggleMembranes();
      setIsMembraneVisible(vis);
    }
  };

  const handleToggleMotorLabels = () => {
    if (motorSceneRef.current) {
      const vis = motorSceneRef.current.toggleLabels();
      setIsMotorLabelsVisible(vis);
    }
  };

  const handleToggleRibosomeLabels = () => {
    if (ribosomeSceneRef.current) {
      const vis = ribosomeSceneRef.current.toggleLabels();
      setIsRibosomeLabelsVisible(vis);
    }
  };

  const handleToggleCameraMode = () => {
    if (motorSceneRef.current) {
      const mode = motorSceneRef.current.toggleCameraMode();
      setCameraMode(mode);
    }
  };

  const handleSetMotorDirection = (dir: 'CCW' | 'CW') => {
    setMotorDirection(dir);
    if (motorSceneRef.current) {
      motorSceneRef.current.setDirection(dir);
    }
  };

  const handleToggleMotorPause = () => {
    if (motorSceneRef.current) {
      motorSceneRef.current.isPaused = !motorSceneRef.current.isPaused;
      setIsMotorPaused(motorSceneRef.current.isPaused);
    }
  };

  const handleExplodedChange = (val: number) => {
    setMotorExplodedProgress(val);
    if (motorSceneRef.current) {
      motorSceneRef.current.setExplodedProgress(val / 100);
    }
  };

  const handleSpeedChange = (val: number) => {
    setMotorSpeed(val);
    if (motorSceneRef.current) {
      motorSceneRef.current.setSpeed(val / 100);
    }
  };

  const handleSelectMotorPart = (partId: string) => {
    setActiveMotorPart(partId);
    if (motorSceneRef.current) {
      if (partId === 'molecular_7cgo' || partId === 'molecular_6ykm') {
        motorSceneRef.current.setRepresentationMode('molecular');
        setMotorRepMode('molecular');
      }
      motorSceneRef.current.selectComponent(partId);
    }
  };

  const activeOrganelleData = CELL_ANATOMY_DATA[selectedOrganelleKey] || null;
  const currentTourStepKey = CELL_TOUR_STOPS[tourStatus.stepIndex];
  const currentTourStepTitle = CELL_ANATOMY_DATA[currentTourStepKey]?.title || 'Prokaryote Overview';

  const isDrawerOpen =
    (isCellInspectorOpen && scenario === 'cell') ||
    scenario === 'motor' ||
    scenario === 'ribosome' ||
    scenario === 'atp_synthase' ||
    scenario === 'complex_i' ||
    scenario === 'secyeg' ||
    scenario === 'bam' ||
    scenario === 'lpt';

  return (
    <div id="app-container" className={isDrawerOpen ? 'drawer-open' : ''}>
      {/* 1. Header with Scale Navigator */}
      <ScaleNavigator scenario={scenario} onSelectScenario={handleSelectScenario} />

      {/* 2. Unified Top Toolbar Persistent Across All Scenarios */}
      <CellToolbar
        wasmStatus={
          scenario === 'cell'
            ? wasmStatus
            : scenario === 'motor'
            ? 'Cryo-EM 7CGO • PDB 6YKM: Active'
            : scenario === 'ribosome'
            ? 'Cryo-EM 7K00 • Expressome 6X9Q: Active'
            : scenario === 'atp_synthase'
            ? 'Cryo-EM 6OQR / 6RKW • Rotary F1F0: Active'
            : scenario === 'complex_i'
            ? 'Cryo-EM 7Z7V (2.29 Å) • Turnover State: Active'
            : scenario === 'secyeg'
            ? 'Cryo-EM 3J46 / 5EUL • Translocon: Active'
            : scenario === 'bam'
            ? 'PDB 5D0O (2.90 Å) • Outer Membrane Insertase: Active'
            : 'Cryo-EM 9P7P (3.40 Å) • Lpt Trans-Envelope Bridge: Active'
        }
        selectedVoice={selectedVoice}
        onVoiceChange={handleVoiceChange}
        isNarrating={
          scenario === 'cell'
            ? isCellNarrating
            : scenario === 'motor'
            ? isMotorNarrating
            : scenario === 'ribosome'
            ? isRibosomeNarrating
            : scenario === 'atp_synthase'
            ? isATPNarrating
            : scenario === 'complex_i'
            ? isComplexINarrating
            : scenario === 'secyeg'
            ? isSecYEGNarrating
            : scenario === 'bam'
            ? isBAMNarrating
            : isLptNarrating
        }
        onNarrateClick={
          scenario === 'cell'
            ? handleCellNarrate
            : scenario === 'motor'
            ? handleMotorNarrate
            : scenario === 'ribosome'
            ? handleRibosomeNarrate
            : scenario === 'atp_synthase'
            ? handleATPNarrate
            : scenario === 'complex_i'
            ? handleComplexINarrate
            : scenario === 'secyeg'
            ? handleSecYEGNarrate
            : scenario === 'bam'
            ? handleBAMNarrate
            : handleLptNarrate
        }
        onResetCamera={handleResetCamera}
        isAutoRotating={
          scenario === 'cell'
            ? isAutoRotating
            : scenario === 'motor'
            ? isMotorAutoRotating
            : scenario === 'ribosome'
            ? isRibosomeAutoRotating
            : scenario === 'atp_synthase'
            ? isATPAutoRotating
            : scenario === 'complex_i'
            ? isComplexIAutoRotating
            : scenario === 'secyeg'
            ? isSecYEGAutoRotating
            : scenario === 'bam'
            ? isBAMAutoRotating
            : isLptAutoRotating
        }
        onToggleAutoRotate={
          scenario === 'cell'
            ? handleToggleAutoRotate
            : scenario === 'motor'
            ? handleToggleMotorAutoRotate
            : scenario === 'ribosome'
            ? handleToggleRibosomeAutoRotate
            : scenario === 'atp_synthase'
            ? handleToggleATPAutoRotate
            : scenario === 'complex_i'
            ? handleToggleComplexIAutoRotate
            : scenario === 'secyeg'
            ? handleToggleSecYEGAutoRotate
            : scenario === 'bam'
            ? handleToggleBAMAutoRotate
            : handleToggleLptAutoRotate
        }
        showLabels={
          scenario === 'cell'
            ? showCellLabels
            : scenario === 'motor'
            ? isMotorLabelsVisible
            : scenario === 'ribosome'
            ? isRibosomeLabelsVisible
            : scenario === 'atp_synthase'
            ? isATPLabelsVisible
            : scenario === 'complex_i'
            ? isComplexILabelsVisible
            : scenario === 'secyeg'
            ? isSecYEGLabelsVisible
            : scenario === 'bam'
            ? isBAMLabelsVisible
            : isLptLabelsVisible
        }
        onToggleLabels={
          scenario === 'cell'
            ? handleToggleLabels
            : scenario === 'motor'
            ? handleToggleMotorLabels
            : scenario === 'ribosome'
            ? handleToggleRibosomeLabels
            : scenario === 'atp_synthase'
            ? handleToggleATPLabels
            : scenario === 'complex_i'
            ? handleToggleComplexILabels
            : scenario === 'secyeg'
            ? handleToggleSecYEGLabels
            : scenario === 'bam'
            ? handleToggleBAMLabels
            : handleToggleLptLabels
        }
        isTourActive={
          scenario === 'cell'
            ? tourStatus.active
            : scenario === 'motor'
            ? isMotorTourActive
            : scenario === 'ribosome'
            ? isRibosomeTourActive
            : scenario === 'atp_synthase'
            ? isATPTourActive
            : scenario === 'complex_i'
            ? isComplexITourActive
            : scenario === 'secyeg'
            ? (isSecYEGTourActive || secYEGStoryStep > 0)
            : scenario === 'bam'
            ? (isBAMTourActive || bamStoryStep > 0)
            : (isLptTourActive || lptStoryStep > 0)
        }
        onToggleTour={
          scenario === 'cell'
            ? handleToggleTour
            : scenario === 'motor'
            ? handleToggleMotorTour
            : scenario === 'ribosome'
            ? handleToggleRibosomeTour
            : scenario === 'atp_synthase'
            ? handleToggleATPTour
            : scenario === 'complex_i'
            ? handleToggleComplexITour
            : scenario === 'secyeg'
            ? handleToggleSecYEGTour
            : scenario === 'bam'
            ? handleToggleBAMTour
            : handleToggleLptTour
        }
      />

      {/* 3. Whole Cell Scenario Layer */}
      <div style={{ display: scenario === 'cell' ? 'contents' : 'none' }}>
        <div id="canvas-wrapper">
          <div ref={cellContainerRef} style={{ width: '100%', height: '100%' }} />
          <svg id="leader-lines-svg"></svg>
          <CellLabels
            activeTarget={selectedOrganelleKey}
            onSelectOrganelle={handleOrganelleClick}
          />
        </div>

        <CellScaleCard />
        <MicrocompartmentCard />

        <CellInspectorDrawer
          isOpen={isCellInspectorOpen}
          data={activeOrganelleData}
          onClose={() => setIsCellInspectorOpen(false)}
          onFocus={handleFocusOrganelle}
          onDrillDown={() => {
            if (selectedOrganelleKey === 'ribosomes') {
              handleSelectScenario('ribosome');
            } else {
              handleSelectScenario('motor');
            }
          }}
          isNarrating={isCellNarrating}
          onNarrate={handleCellNarrate}
        />

        <TourBar
          status={tourStatus}
          stepTitle={currentTourStepTitle}
          onPrev={() => cellSceneRef.current?.prevTourStep()}
          onTogglePlay={() => cellSceneRef.current?.toggleTourPlay()}
          onNext={() => cellSceneRef.current?.nextTourStep()}
          onToggleVoice={() => {
            const nextVoice = !tourStatus.ttsEnabled;
            cellSceneRef.current?.setTourVoice(nextVoice);
          }}
          onExit={() => cellSceneRef.current?.exitTour()}
        />
      </div>

      {/* 4. Flagellar Motor Scenario Layer */}
      <div
        id="motor-container"
        className={scenario === 'motor' ? '' : 'hidden'}
        style={{ display: scenario === 'motor' ? 'block' : 'none' }}
      >
        <MotorHeaderOverlay onBackToCell={() => handleSelectScenario('cell')} />

        <div
          ref={motorContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="motor-svg-overlay"></svg>
        <div id="motor-labels-container"></div>

        <div className="motor-hud-overlay">
          <MotorHUDCard
            repMode={motorRepMode}
            onSetRepMode={handleSetMotorRepMode}
            isMembraneVisible={isMembraneVisible}
            onToggleMembrane={handleToggleMembrane}
            isLabelsVisible={isMotorLabelsVisible}
            onToggleLabels={handleToggleMotorLabels}
            cameraMode={cameraMode}
            onToggleCameraMode={handleToggleCameraMode}
            direction={motorDirection}
            onSetDirection={handleSetMotorDirection}
            isPaused={isMotorPaused}
            onTogglePause={handleToggleMotorPause}
            explodedProgress={motorExplodedProgress}
            onExplodedChange={handleExplodedChange}
            speed={motorSpeed}
            onSpeedChange={handleSpeedChange}
            onOpenBlueprint={() => setIsBlueprintOpen(true)}
          />

          <MotorPartsChips
            activePart={activeMotorPart}
            onSelectPart={handleSelectMotorPart}
          />
        </div>

        <MotorInspectorDrawer
          data={motorComponentMeta}
          isNarrating={isMotorNarrating}
          storyStep={motorStoryStep}
          onSelectStoryStep={(s) => playMotorStoryStep(s)}
          onStartStoryTrace={() => playMotorStoryStep(1)}
          onStopStoryTrace={stopMotorStoryTrace}
          onNarrate={handleMotorNarrate}
        />

        {(isMotorTourActive || motorStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isMotorTourPlaying || isMotorNarrating,
              stepIndex: motorStoryStep > 0 ? motorStoryStep - 1 : motorTourStep,
              key: motorStoryStep > 0 ? MOTOR_EXPLANATION_STAGES[motorStoryStep - 1]?.id : MOTOR_TOUR_STOPS[motorTourStep],
              totalSteps: motorStoryStep > 0 ? MOTOR_EXPLANATION_STAGES.length : MOTOR_TOUR_STOPS.length,
              phase: motorTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={motorStoryStep > 0 ? MOTOR_EXPLANATION_STAGES[motorStoryStep - 1]?.title : (motorComponentMeta?.name || 'Basal Body Component')}
            onPrev={() => {
              if (motorStoryStep > 0) {
                playMotorStoryStep(Math.max(1, motorStoryStep - 1));
              } else {
                goToMotorTourStep(motorTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (motorStoryStep > 0) {
                if (isMotorNarrating) {
                  voiceService.stop();
                  setIsMotorNarrating(false);
                } else {
                  playMotorStoryStep(motorStoryStep);
                }
              } else {
                setIsMotorTourPlaying(!isMotorTourPlaying);
              }
            }}
            onNext={() => {
              if (motorStoryStep > 0) {
                playMotorStoryStep(Math.min(MOTOR_EXPLANATION_STAGES.length, motorStoryStep + 1));
              } else {
                goToMotorTourStep(motorTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={() => {
              if (motorStoryStep > 0) {
                stopMotorStoryTrace();
              } else {
                setIsMotorTourActive(false);
                setIsMotorTourPlaying(false);
                voiceService.stop();
                setIsMotorNarrating(false);
                setMotorTourPhase('idle');
              }
            }}
          />
        )}

        <BlueprintModal
          isOpen={isBlueprintOpen}
          onClose={() => setIsBlueprintOpen(false)}
        />
      </div>

      {/* 5. 70S Ribosome Translation Factory Scenario Layer */}
      <div
        id="ribosome-container"
        className={scenario === 'ribosome' ? '' : 'hidden'}
        style={{ display: scenario === 'ribosome' ? 'block' : 'none' }}
      >
        <RibosomeHeaderOverlay />

        <div
          ref={ribosomeContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="ribosome-svg-overlay"></svg>
        <div id="ribosome-labels-container"></div>

        <RibosomeHUDCard
          isLabelsVisible={isRibosomeLabelsVisible}
          onToggleLabels={handleToggleRibosomeLabels}
          isPaused={isRibosomePaused}
          onTogglePause={() => {
            if (ribosomeSceneRef.current) {
              const paused = ribosomeSceneRef.current.togglePause();
              setIsRibosomePaused(paused);
            }
          }}
          translationSpeed={ribosomeSpeed}
          onChangeSpeed={(spd) => {
            setRibosomeSpeed(spd);
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setTranslationSpeed(spd);
            }
          }}
          explodedProgress={ribosomeExplodedProgress}
          onChangeExploded={(exp) => {
            setRibosomeExplodedProgress(exp);
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setExplodedProgress(exp);
            }
          }}
          activeFilter={ribosomeFilter}
          onSelectFilter={(f) => {
            setRibosomeFilter(f);
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.setSubunitFilter(f);
            }
          }}
          onStepCodon={() => {
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.stepCodon();
            }
          }}
          mrnaCycleProgress={mrnaCycleProgress}
          onResetMRNACycle={() => {
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.resetMRNACycle();
            }
          }}
          onFocusComponent={(key) => {
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.focusComponent(key);
              ribosomeSceneRef.current.selectComponent(key);
            }
          }}
        />

        <RibosomeInspectorDrawer
          data={ribosomeComponentMeta}
          activeKey={activeRibosomePart}
          isNarrating={isRibosomeNarrating}
          storyStep={ribosomeStoryStep}
          onSelectStoryStep={(s) => playRibosomeStoryStep(s)}
          onStartStoryTrace={() => playRibosomeStoryStep(1)}
          onStopStoryTrace={stopRibosomeStoryTrace}
          onNarrate={handleRibosomeNarrate}
          onFocus={() => {
            if (ribosomeSceneRef.current && activeRibosomePart) {
              ribosomeSceneRef.current.focusComponent(activeRibosomePart);
            }
          }}
          onSelectPart={(key: string) => {
            if (ribosomeSceneRef.current) {
              ribosomeSceneRef.current.selectComponent(key);
              ribosomeSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isRibosomeTourActive || ribosomeStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isRibosomeTourPlaying || isRibosomeNarrating,
              stepIndex: ribosomeStoryStep > 0 ? ribosomeStoryStep - 1 : ribosomeTourStep,
              key: ribosomeStoryStep > 0 ? RIBOSOME_EXPLANATION_STAGES[ribosomeStoryStep - 1]?.id : RIBOSOME_TOUR_STOPS[ribosomeTourStep],
              totalSteps: ribosomeStoryStep > 0 ? RIBOSOME_EXPLANATION_STAGES.length : RIBOSOME_TOUR_STOPS.length,
              phase: ribosomeTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={ribosomeStoryStep > 0 ? RIBOSOME_EXPLANATION_STAGES[ribosomeStoryStep - 1]?.title : (ribosomeComponentMeta?.name || 'Ribosome Translation Component')}
            onPrev={() => {
              if (ribosomeStoryStep > 0) {
                playRibosomeStoryStep(Math.max(1, ribosomeStoryStep - 1));
              } else {
                goToRibosomeTourStep(ribosomeTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (ribosomeStoryStep > 0) {
                if (isRibosomeNarrating) {
                  voiceService.stop();
                  setIsRibosomeNarrating(false);
                } else {
                  playRibosomeStoryStep(ribosomeStoryStep);
                }
              } else {
                setIsRibosomeTourPlaying(!isRibosomeTourPlaying);
              }
            }}
            onNext={() => {
              if (ribosomeStoryStep > 0) {
                playRibosomeStoryStep(Math.min(RIBOSOME_EXPLANATION_STAGES.length, ribosomeStoryStep + 1));
              } else {
                goToRibosomeTourStep(ribosomeTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={() => {
              if (ribosomeStoryStep > 0) {
                stopRibosomeStoryTrace();
              } else {
                setIsRibosomeTourActive(false);
                setIsRibosomeTourPlaying(false);
                voiceService.stop();
                setIsRibosomeNarrating(false);
                setRibosomeTourPhase('idle');
              }
            }}
          />
        )}
      </div>

      {/* 6. Bacterial F1F0-ATP Synthase Rotary Dynamo Scenario Layer */}
      <div
        id="atp-synthase-container"
        className={scenario === 'atp_synthase' ? '' : 'hidden'}
        style={{ display: scenario === 'atp_synthase' ? 'block' : 'none' }}
      >
        <ATPSynthaseHeaderOverlay />

        <div
          ref={atpContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="atp-svg-overlay"></svg>
        <div id="atp-labels-container"></div>

        <ATPSynthaseHUDCard
          isLabelsVisible={isATPLabelsVisible}
          onToggleLabels={handleToggleATPLabels}
          isPaused={isATPPaused}
          onTogglePause={() => {
            if (atpSceneRef.current) {
              const paused = atpSceneRef.current.togglePause();
              setIsATPPaused(paused);
            }
          }}
          pmfVoltage={atpPMFVoltage}
          onChangePMF={(v) => {
            setATPMFVoltage(v);
            if (atpSceneRef.current) {
              atpSceneRef.current.setPMFVoltage(v);
            }
          }}
          mode={atpMode}
          onToggleMode={(m) => {
            setATPMode(m);
            if (atpSceneRef.current) {
              atpSceneRef.current.setMode(m);
            }
          }}
          explodedProgress={atpExplodedProgress}
          onChangeExploded={(exp) => {
            setATPExplodedProgress(exp);
            if (atpSceneRef.current) {
              atpSceneRef.current.setExplodedProgress(exp);
            }
          }}
          activeFilter={atpFilter}
          onSelectFilter={(f) => {
            setATPFilter(f);
            if (atpSceneRef.current) {
              atpSceneRef.current.setSubunitFilter(f);
            }
          }}
          boyerState={atpBoyerState}
          onSelectBoyerState={(st) => {
            setATPBoyerState(st);
            if (atpSceneRef.current) {
              atpSceneRef.current.setBoyerState(st);
            }
          }}
          onFocusComponent={(key) => {
            if (atpSceneRef.current) {
              atpSceneRef.current.focusComponent(key);
              atpSceneRef.current.selectComponent(key);
            }
          }}
        />

        <ATPSynthaseInspectorDrawer
          data={atpComponentMeta}
          activeKey={activeATPPart}
          isNarrating={isATPNarrating}
          storyStep={atpStoryStep}
          onSelectStoryStep={(s) => playATPStoryStep(s)}
          onStartStoryTrace={() => playATPStoryStep(1)}
          onStopStoryTrace={stopATPStoryTrace}
          onNarrate={handleATPNarrate}
          onFocus={() => {
            if (atpSceneRef.current && activeATPPart) {
              atpSceneRef.current.focusComponent(activeATPPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (atpSceneRef.current) {
              atpSceneRef.current.selectComponent(key);
              atpSceneRef.current.focusComponent(key);
            }
          }}
          boyerState={atpBoyerState}
          onSelectBoyerState={(st) => {
            setATPBoyerState(st);
            if (atpSceneRef.current) {
              atpSceneRef.current.setBoyerState(st);
            }
          }}
        />

        {(isATPTourActive || atpStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isATPTourPlaying || isATPNarrating,
              stepIndex: atpStoryStep > 0 ? atpStoryStep - 1 : atpTourStep,
              key: atpStoryStep > 0 ? ATP_EXPLANATION_STAGES[atpStoryStep - 1]?.id : ATP_SYNTHASE_TOUR_STOPS[atpTourStep],
              totalSteps: atpStoryStep > 0 ? ATP_EXPLANATION_STAGES.length : ATP_SYNTHASE_TOUR_STOPS.length,
              phase: atpTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={atpStoryStep > 0 ? ATP_EXPLANATION_STAGES[atpStoryStep - 1]?.title : (atpComponentMeta?.name || 'ATP Synthase Component')}
            onPrev={() => {
              if (atpStoryStep > 0) {
                playATPStoryStep(Math.max(1, atpStoryStep - 1));
              } else {
                goToATPTourStep(atpTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (atpStoryStep > 0) {
                if (isATPNarrating) {
                  voiceService.stop();
                  setIsATPNarrating(false);
                } else {
                  playATPStoryStep(atpStoryStep);
                }
              } else {
                setIsATPTourPlaying(!isATPTourPlaying);
              }
            }}
            onNext={() => {
              if (atpStoryStep > 0) {
                playATPStoryStep(Math.min(ATP_EXPLANATION_STAGES.length, atpStoryStep + 1));
              } else {
                goToATPTourStep(atpTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopATPStoryTrace}
          />
        )}
      </div>

      {/* 7. Respiratory Complex I (NADH:Ubiquinone Oxidoreductase) Scenario Layer */}
      <div
        id="complex-i-container"
        className={scenario === 'complex_i' ? '' : 'hidden'}
        style={{ display: scenario === 'complex_i' ? 'block' : 'none' }}
      >
        <ComplexIHeaderOverlay />

        <div
          ref={complexIContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="complex-i-svg-overlay"></svg>
        <div id="complex-i-labels-container"></div>

        <ComplexIHUDCard
          isLabelsVisible={isComplexILabelsVisible}
          onToggleLabels={handleToggleComplexILabels}
          isPaused={isComplexIPaused}
          onTogglePause={() => {
            if (complexISceneRef.current) {
              const paused = complexISceneRef.current.togglePause();
              setIsComplexIPaused(paused);
            }
          }}
          nadhSaturation={complexINADH}
          onChangeNADH={(v) => {
            setComplexINADH(v);
            if (complexISceneRef.current) {
              complexISceneRef.current.setNADHConcentration(v);
            }
          }}
          isRotenoneInhibited={isRotenoneInhibited}
          onToggleRotenone={() => {
            const nextInh = !isRotenoneInhibited;
            setIsRotenoneInhibited(nextInh);
            if (complexISceneRef.current) {
              complexISceneRef.current.setRotenoneInhibition(nextInh);
            }
          }}
          explodedProgress={complexIExplodedProgress}
          onChangeExploded={(exp) => {
            setComplexIExplodedProgress(exp);
            if (complexISceneRef.current) {
              complexISceneRef.current.setExplodedProgress(exp);
            }
          }}
          activeFilter={complexIFilter}
          onSelectFilter={(f) => {
            setComplexIFilter(f);
            if (complexISceneRef.current) {
              complexISceneRef.current.setSubunitFilter(f);
            }
          }}
          onFocusComponent={(key) => {
            if (complexISceneRef.current) {
              complexISceneRef.current.focusComponent(key);
              complexISceneRef.current.selectComponent(key);
            }
          }}
        />

        <ComplexIInspectorDrawer
          data={complexIComponentMeta}
          activeKey={activeComplexIPart}
          isNarrating={isComplexINarrating}
          storyStep={complexIStoryStep}
          onSelectStoryStep={(s) => playComplexIStoryStep(s)}
          onStartStoryTrace={() => playComplexIStoryStep(1)}
          onStopStoryTrace={stopComplexIStoryTrace}
          onNarrate={handleComplexINarrate}
          onFocus={() => {
            if (complexISceneRef.current && activeComplexIPart) {
              complexISceneRef.current.focusComponent(activeComplexIPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (complexISceneRef.current) {
              complexISceneRef.current.selectComponent(key);
              complexISceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isComplexITourActive || complexIStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isComplexITourPlaying || isComplexINarrating,
              stepIndex: complexIStoryStep > 0 ? complexIStoryStep - 1 : complexITourStep,
              key: complexIStoryStep > 0 ? COMPLEX_I_EXPLANATION_STAGES[complexIStoryStep - 1]?.id : COMPLEX_I_TOUR_STOPS[complexITourStep],
              totalSteps: complexIStoryStep > 0 ? COMPLEX_I_EXPLANATION_STAGES.length : COMPLEX_I_TOUR_STOPS.length,
              phase: complexITourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={complexIStoryStep > 0 ? COMPLEX_I_EXPLANATION_STAGES[complexIStoryStep - 1]?.title : (complexIComponentMeta?.name || 'Complex I Component')}
            onPrev={() => {
              if (complexIStoryStep > 0) {
                playComplexIStoryStep(Math.max(1, complexIStoryStep - 1));
              } else {
                goToComplexITourStep(complexITourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (complexIStoryStep > 0) {
                if (isComplexINarrating) {
                  voiceService.stop();
                  setIsComplexINarrating(false);
                } else {
                  playComplexIStoryStep(complexIStoryStep);
                }
              } else {
                setIsComplexITourPlaying(!isComplexITourPlaying);
              }
            }}
            onNext={() => {
              if (complexIStoryStep > 0) {
                playComplexIStoryStep(Math.min(COMPLEX_I_EXPLANATION_STAGES.length, complexIStoryStep + 1));
              } else {
                goToComplexITourStep(complexITourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopComplexIStoryTrace}
          />
        )}
      </div>

      {/* 8. SecYEG Translocon & SecA Motor Scenario Layer */}
      <div
        id="secyeg-container"
        className={scenario === 'secyeg' ? '' : 'hidden'}
        style={{ display: scenario === 'secyeg' ? 'block' : 'none' }}
      >
        <SecYEGHeaderOverlay />

        <div
          ref={secYEGContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="secyeg-svg-overlay"></svg>
        <div id="secyeg-labels-container"></div>

        <SecYEGHUDCard
          isPaused={isSecYEGPaused}
          onTogglePause={() => {
            if (secYEGSceneRef.current) {
              const paused = secYEGSceneRef.current.togglePause();
              setIsSecYEGPaused(paused);
            }
          }}
          atpRate={secYEGAtpRate}
          onChangeAtpRate={(rate) => {
            setSecYEGAtpRate(rate);
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.setAtpRate(rate);
            }
          }}
          isAzideInhibited={isAzideInhibited}
          onToggleAzide={() => {
            const nextInh = !isAzideInhibited;
            setIsAzideInhibited(nextInh);
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.setAzideInhibition(nextInh);
            }
          }}
          lateralGateOpening={secYEGLateralGate}
          onChangeLateralGate={(gate) => {
            setSecYEGLateralGate(gate);
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.setLateralGateOpening(gate);
            }
          }}
          explodedProgress={secYEGExplodedProgress}
          onChangeExploded={(exp) => {
            setSecYEGExplodedProgress(exp);
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.setExplodedProgress(exp);
            }
          }}
          isLabelsVisible={isSecYEGLabelsVisible}
          onToggleLabels={handleToggleSecYEGLabels}
          onFocusComponent={(key) => {
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.focusComponent(key);
              secYEGSceneRef.current.selectComponent(key);
            }
          }}
        />

        <SecYEGInspectorDrawer
          data={secYEGComponentMeta}
          activeKey={activeSecYEGPart}
          isNarrating={isSecYEGNarrating}
          storyStep={secYEGStoryStep}
          onSelectStoryStep={(s) => playSecYEGStoryStep(s)}
          onStartStoryTrace={() => playSecYEGStoryStep(1)}
          onStopStoryTrace={stopSecYEGStoryTrace}
          onNarrate={handleSecYEGNarrate}
          onFocus={() => {
            if (secYEGSceneRef.current && activeSecYEGPart) {
              secYEGSceneRef.current.focusComponent(activeSecYEGPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (secYEGSceneRef.current) {
              secYEGSceneRef.current.selectComponent(key);
              secYEGSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isSecYEGTourActive || secYEGStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isSecYEGTourPlaying || isSecYEGNarrating,
              stepIndex: secYEGStoryStep > 0 ? secYEGStoryStep - 1 : secYEGTourStep,
              key: secYEGStoryStep > 0 ? SECYEG_EXPLANATION_STAGES[secYEGStoryStep - 1]?.id : SECYEG_TOUR_STOPS[secYEGTourStep],
              totalSteps: secYEGStoryStep > 0 ? SECYEG_EXPLANATION_STAGES.length : SECYEG_TOUR_STOPS.length,
              phase: secYEGTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={secYEGStoryStep > 0 ? SECYEG_EXPLANATION_STAGES[secYEGStoryStep - 1]?.title : (secYEGComponentMeta?.name || 'SecYEG Component')}
            onPrev={() => {
              if (secYEGStoryStep > 0) {
                playSecYEGStoryStep(Math.max(1, secYEGStoryStep - 1));
              } else {
                goToSecYEGTourStep(secYEGTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (secYEGStoryStep > 0) {
                if (isSecYEGNarrating) {
                  voiceService.stop();
                  setIsSecYEGNarrating(false);
                } else {
                  playSecYEGStoryStep(secYEGStoryStep);
                }
              } else {
                setIsSecYEGTourPlaying(!isSecYEGTourPlaying);
              }
            }}
            onNext={() => {
              if (secYEGStoryStep > 0) {
                playSecYEGStoryStep(Math.min(SECYEG_EXPLANATION_STAGES.length, secYEGStoryStep + 1));
              } else {
                goToSecYEGTourStep(secYEGTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopSecYEGStoryTrace}
          />
        )}
      </div>

      {/* 9. BAM Complex Outer Membrane Protein Insertase Scenario Layer */}
      <div
        id="bam-container"
        className={scenario === 'bam' ? '' : 'hidden'}
        style={{ display: scenario === 'bam' ? 'block' : 'none' }}
      >
        <BAMHeaderOverlay />

        <div
          ref={bamContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="bam-svg-overlay"></svg>
        <div id="bam-labels-container"></div>

        <BAMHUDCard
          isPaused={isBAMPaused}
          onTogglePause={() => {
            if (bamSceneRef.current) {
              const paused = bamSceneRef.current.togglePause();
              setIsBAMPaused(paused);
            }
          }}
          insertionSpeed={bamInsertionSpeed}
          onChangeInsertionSpeed={(speed) => {
            setBamInsertionSpeed(speed);
            if (bamSceneRef.current) {
              bamSceneRef.current.setInsertionSpeed(speed);
            }
          }}
          lateralSeamOpening={bamLateralSeam}
          onChangeLateralSeam={(seam) => {
            setBamLateralSeam(seam);
            if (bamSceneRef.current) {
              bamSceneRef.current.setLateralSeamOpening(seam);
            }
          }}
          explodedProgress={bamExplodedProgress}
          onChangeExploded={(exp) => {
            setBamExplodedProgress(exp);
            if (bamSceneRef.current) {
              bamSceneRef.current.setExplodedProgress(exp);
            }
          }}
          isLabelsVisible={isBAMLabelsVisible}
          onToggleLabels={handleToggleBAMLabels}
          onFocusComponent={(key) => {
            if (bamSceneRef.current) {
              bamSceneRef.current.focusComponent(key);
              bamSceneRef.current.selectComponent(key);
            }
          }}
        />

        <BAMInspectorDrawer
          data={bamComponentMeta}
          activeKey={activeBAMPart}
          isNarrating={isBAMNarrating}
          storyStep={bamStoryStep}
          onSelectStoryStep={(s) => playBAMStoryStep(s)}
          onStartStoryTrace={() => playBAMStoryStep(1)}
          onStopStoryTrace={stopBAMStoryTrace}
          onNarrate={handleBAMNarrate}
          onFocus={() => {
            if (bamSceneRef.current && activeBAMPart) {
              bamSceneRef.current.focusComponent(activeBAMPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (bamSceneRef.current) {
              bamSceneRef.current.selectComponent(key);
              bamSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isBAMTourActive || bamStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isBAMTourPlaying || isBAMNarrating,
              stepIndex: bamStoryStep > 0 ? bamStoryStep - 1 : bamTourStep,
              key: bamStoryStep > 0 ? BAM_EXPLANATION_STAGES[bamStoryStep - 1]?.id : BAM_TOUR_STOPS[bamTourStep],
              totalSteps: bamStoryStep > 0 ? BAM_EXPLANATION_STAGES.length : BAM_TOUR_STOPS.length,
              phase: bamTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={bamStoryStep > 0 ? BAM_EXPLANATION_STAGES[bamStoryStep - 1]?.title : (bamComponentMeta?.name || 'BAM Component')}
            onPrev={() => {
              if (bamStoryStep > 0) {
                playBAMStoryStep(Math.max(1, bamStoryStep - 1));
              } else {
                goToBAMTourStep(bamTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (bamStoryStep > 0) {
                if (isBAMNarrating) {
                  voiceService.stop();
                  setIsBAMNarrating(false);
                } else {
                  playBAMStoryStep(bamStoryStep);
                }
              } else {
                setIsBAMTourPlaying(!isBAMTourPlaying);
              }
            }}
            onNext={() => {
              if (bamStoryStep > 0) {
                playBAMStoryStep(Math.min(BAM_EXPLANATION_STAGES.length, bamStoryStep + 1));
              } else {
                goToBAMTourStep(bamTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopBAMStoryTrace}
          />
        )}
      </div>

      {/* 10. LptA-G LPS Trans-Envelope Export Bridge Scenario Layer */}
      <div
        id="lpt-container"
        className={scenario === 'lpt' ? '' : 'hidden'}
        style={{ display: scenario === 'lpt' ? 'block' : 'none' }}
      >
        <LptHeaderOverlay />

        <div
          ref={lptContainerRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <svg id="lpt-svg-overlay"></svg>
        <div id="lpt-labels-container"></div>

        <LptHUDCard
          isPaused={isLptPaused}
          onTogglePause={() => {
            if (lptSceneRef.current) {
              const paused = lptSceneRef.current.togglePause();
              setIsLptPaused(paused);
            }
          }}
          isAtpActive={isLptAtpActive}
          onToggleAtp={() => {
            if (lptSceneRef.current) {
              const active = lptSceneRef.current.toggleAtpActive();
              setIsLptAtpActive(active);
            }
          }}
          exportSpeed={lptExportSpeed}
          onChangeExportSpeed={(speed) => {
            setLptExportSpeed(speed);
            if (lptSceneRef.current) {
              lptSceneRef.current.setExportSpeed(speed);
            }
          }}
          explodedProgress={lptExplodedProgress}
          onChangeExploded={(exp) => {
            setLptExplodedProgress(exp);
            if (lptSceneRef.current) {
              lptSceneRef.current.setExplodedProgress(exp);
            }
          }}
          isLabelsVisible={isLptLabelsVisible}
          onToggleLabels={handleToggleLptLabels}
          onFocusComponent={(key) => {
            if (lptSceneRef.current) {
              lptSceneRef.current.focusComponent(key);
              lptSceneRef.current.selectComponent(key);
            }
          }}
        />

        <LptInspectorDrawer
          data={lptComponentMeta}
          activeKey={activeLptPart}
          isNarrating={isLptNarrating}
          storyStep={lptStoryStep}
          onSelectStoryStep={(s) => playLptStoryStep(s)}
          onStartStoryTrace={() => playLptStoryStep(1)}
          onStopStoryTrace={stopLptStoryTrace}
          onNarrate={handleLptNarrate}
          onFocus={() => {
            if (lptSceneRef.current && activeLptPart) {
              lptSceneRef.current.focusComponent(activeLptPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (lptSceneRef.current) {
              lptSceneRef.current.selectComponent(key);
              lptSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isLptTourActive || lptStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isLptTourPlaying || isLptNarrating,
              stepIndex: lptStoryStep > 0 ? lptStoryStep - 1 : lptTourStep,
              key: lptStoryStep > 0 ? LPT_EXPLANATION_STAGES[lptStoryStep - 1]?.id : LPT_TOUR_STOPS[lptTourStep],
              totalSteps: lptStoryStep > 0 ? LPT_EXPLANATION_STAGES.length : LPT_TOUR_STOPS.length,
              phase: lptTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={lptStoryStep > 0 ? LPT_EXPLANATION_STAGES[lptStoryStep - 1]?.title : (lptComponentMeta?.name || 'Lpt Component')}
            onPrev={() => {
              if (lptStoryStep > 0) {
                playLptStoryStep(Math.max(1, lptStoryStep - 1));
              } else {
                goToLptTourStep(lptTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (lptStoryStep > 0) {
                if (isLptNarrating) {
                  voiceService.stop();
                  setIsLptNarrating(false);
                } else {
                  playLptStoryStep(lptStoryStep);
                }
              } else {
                setIsLptTourPlaying(!isLptTourPlaying);
              }
            }}
            onNext={() => {
              if (lptStoryStep > 0) {
                playLptStoryStep(Math.min(LPT_EXPLANATION_STAGES.length, lptStoryStep + 1));
              } else {
                goToLptTourStep(lptTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopLptStoryTrace}
          />
        )}
      </div>

      {/* Global Live Subtitles Banner (Closed Captions) */}
      <LiveSubtitles
        visible={subtitleState.visible}
        text={subtitleState.text}
        badge={subtitleState.badge}
        speaker={subtitleState.speaker}
        hasTourBar={isLptTourActive || lptStoryStep > 0 || isBAMTourActive || bamStoryStep > 0 || isSecYEGTourActive || secYEGStoryStep > 0 || isComplexITourActive || complexIStoryStep > 0 || isATPTourActive || atpStoryStep > 0 || isMotorTourActive || motorStoryStep > 0 || isRibosomeTourActive || ribosomeStoryStep > 0 || tourStatus.active}
        onClose={hideSubtitles}
      />
    </div>
  );
}

export default App;
