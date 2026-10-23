import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import type { ScenarioType, MotorComponentData, RibosomeComponentData, ATPSynthaseComponentData, ComplexIComponentData, SecYEGComponentData, BAMComponentData, LptComponentData, RNAPComponentData, PolIIIComponentData, GyraseComponentData, FtsZComponentData, MreBComponentData, TourStatus } from './types/biology';
import { CellViewerScene, CELL_ANATOMY_DATA, CELL_TOUR_STOPS } from './core/cellViewer';
import { FlagellarMotorScene } from './core/flagellarMotor';
import { RibosomeScene, RIBOSOME_COMPONENTS_META, RIBOSOME_TOUR_STOPS } from './core/ribosomeTranslation';
import { ATPSynthaseScene, ATP_SYNTHASE_COMPONENTS_META, ATP_SYNTHASE_TOUR_STOPS } from './core/atpSynthase';
import { ComplexIScene, COMPLEX_I_COMPONENTS_META, COMPLEX_I_TOUR_STOPS } from './core/complexITransport';
import { SecYEGScene, SECYEG_COMPONENTS_META, SECYEG_EXPLANATION_STAGES } from './core/secYEGTransport';
import { BAMComplexScene, BAM_COMPONENTS_META, BAM_EXPLANATION_STAGES } from './core/bamComplexTransport';
import { LptBridgeScene, LPT_COMPONENTS_META, LPT_EXPLANATION_STAGES } from './core/lptBridgeTransport';
import { RNAPScene, RNAP_COMPONENTS_META, RNAP_EXPLANATION_STAGES } from './core/rnapTranscription';
import { PolIIIReplisomeScene, POL_III_COMPONENTS_META, POL_III_EXPLANATION_STAGES } from './core/polIIIReplication';
import { DNAGyraseScene, GYRASE_COMPONENTS_META, GYRASE_EXPLANATION_STAGES } from './core/gyraseSupercoiling';
import { FtsZDivisomeScene, FTSZ_COMPONENTS_META, FTSZ_EXPLANATION_STAGES } from './core/ftszDivisome';
import { MreBCytoskeletonScene, MREB_COMPONENTS_META, MREB_EXPLANATION_STAGES } from './core/mrebCytoskeleton';
import voiceService from './core/voiceService';

// Macromolecular 3D models for background pre-caching
const PRELOAD_MODELS = [
  '/models/7K00_assembled_pieces.glb', // 70S Ribosome
  '/models/6RKW_assembled_pieces.glb', // F1F0 ATP Synthase
  '/models/7Z7V_assembled_pieces.glb', // Complex I
  '/models/3J46_assembled_pieces.glb', // SecYEG Translocon
  '/models/5D0O_assembled_pieces.glb', // BAM Complex
  '/models/9P7P_assembled_pieces.glb', // Lpt Bridge
  '/models/6C9Y_assembled_pieces.glb', // RNA Polymerase
  '/models/5FKV_assembled_pieces.glb', // DNA Polymerase III Replisome
  '/models/1AB4_assembled_pieces.glb', // DNA Gyrase Topoisomerase II
  '/models/1FSZ_assembled_pieces.glb', // Divisome FtsZ Z-Ring
  '/models/1JCG_assembled_pieces.glb', // MreB Actin Helical Rails
  '/models/7CGO_flagellar_motor.glb'   // Flagellar Motor
];

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

// RNAP Components
import { RNAPHeaderOverlay } from './components/RNAP/RNAPHeaderOverlay';
import { RNAPHUDCard } from './components/RNAP/RNAPHUDCard';
import { RNAPInspectorDrawer } from './components/RNAP/RNAPInspectorDrawer';

// Pol III Components
import { PolIIIHeaderOverlay } from './components/PolIII/PolIIIHeaderOverlay';
import { PolIIIHUDCard } from './components/PolIII/PolIIIHUDCard';
import { PolIIIInspectorDrawer } from './components/PolIII/PolIIIInspectorDrawer';

// Gyrase Components
import { GyraseHeaderOverlay } from './components/Gyrase/GyraseHeaderOverlay';
import { GyraseHUDCard } from './components/Gyrase/GyraseHUDCard';
import { GyraseInspectorDrawer } from './components/Gyrase/GyraseInspectorDrawer';

// FtsZ Components
import { FtsZHeaderOverlay } from './components/FtsZ/FtsZHeaderOverlay';
import { FtsZHUDCard } from './components/FtsZ/FtsZHUDCard';
import { FtsZInspectorDrawer } from './components/FtsZ/FtsZInspectorDrawer';

// MreB Components
import { MreBHeaderOverlay } from './components/MreB/MreBHeaderOverlay';
import { MreBHUDCard } from './components/MreB/MreBHUDCard';
import { MreBInspectorDrawer } from './components/MreB/MreBInspectorDrawer';

import { RoadmapScenarioOverlay, type RoadmapScenarioOverlayHandle } from './components/Roadmap/RoadmapScenarioOverlay';

import { isRoadmapScenario, ROADMAP_SCENARIOS_CONFIG } from './core/roadmapScenariosConfig';

export const MREB_TOUR_STOPS = [
  'mreb_protofilaments',
  'mreb_atp_pockets',
  'mreb_membrane_anchor',
  'mreb_inner_membrane',
  'mreb_rodz_adaptor',
  'mreb_roda_glycosylase',
  'mreb_pbp2_transpeptidase',
  'mreb_a22_pocket'
];

export const FTSZ_TOUR_STOPS = [
  'ftsz_protofilaments',
  'ftsz_ftsa_anchor',
  'ftsz_zipa_anchor',
  'ftsz_inner_membrane',
  'ftsz_gtp_pockets',
  'ftsz_septal_wall',
  'ftsz_ftswi_synthase',
  'ftsz_mincde_barrier'
];

export const GYRASE_TOUR_STOPS = [
  'gyrase_holoenzyme',
  'gyrase_gyra_dimer',
  'gyrase_gyrb_dimer',
  'gyrase_g_segment',
  'gyrase_t_segment',
  'gyrase_tyr122_active',
  'gyrase_cipro_pocket',
  'gyrase_atp_sites',
  'gyrase_ctd_pinwheels'
];

export const POL_III_TOUR_STOPS = [
  'pol_iii_holoenzyme',
  'pol_iii_alpha',
  'pol_iii_beta_clamp',
  'pol_iii_epsilon',
  'pol_iii_tau',
  'pol_iii_dnab_helicase',
  'pol_iii_dna_duplex',
  'pol_iii_parental_fork',
  'pol_iii_active_palm'
];

// Live Viewport Subtitles
import { LiveSubtitles } from './components/Viewport/LiveSubtitles';

export const RNAP_TOUR_STOPS = [
  'rnap_holoenzyme',
  'rnap_sigma70',
  'rnap_dna_duplex',
  'rnap_beta',
  'rnap_betaprime',
  'rnap_active_mg',
  'rnap_rifampicin_pocket',
  'rnap_nascent_rna',
  'rnap_alpha_dimer',
  'rnap_omega'
];

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
  const [bamClientMode, setBamClientMode] = useState<'ompf' | 'bama'>('ompf');

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

  // RNAP Transcription Scenario State
  const [activeRnapPart, setActiveRnapPart] = useState<string>('rnap_holoenzyme');
  const [rnapComponentMeta, setRnapComponentMeta] = useState<RNAPComponentData>(RNAP_COMPONENTS_META['rnap_holoenzyme']);
  const [isRnapPaused, setIsRnapPaused] = useState<boolean>(false);
  const [isRnapRifampicinInhibited, setIsRnapRifampicinInhibited] = useState<boolean>(false);
  const [rnapTranscriptionRate, setRnapTranscriptionRate] = useState<number>(50.0);
  const [rnapExplodedProgress, setRnapExplodedProgress] = useState<number>(0);
  const [isRnapLabelsVisible, setIsRnapLabelsVisible] = useState<boolean>(true);
  const [isRnapNarrating, setIsRnapNarrating] = useState<boolean>(false);
  const [isRnapAutoRotating, setIsRnapAutoRotating] = useState<boolean>(false);
  const [rnapStoryStep, setRnapStoryStep] = useState<number>(0);

  // RNAP Guided Tour State
  const [isRnapTourActive, setIsRnapTourActive] = useState<boolean>(false);
  const [isRnapTourPlaying, setIsRnapTourPlaying] = useState<boolean>(false);
  const [rnapTourStep, setRnapTourStep] = useState<number>(0);
  const [rnapTourPhase, setRnapTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Pol III Replisome Scenario State
  const [activePolIIIPart, setActivePolIIIPart] = useState<string>('pol_iii_holoenzyme');
  const [polIIIComponentMeta, setPolIIIComponentMeta] = useState<PolIIIComponentData>(POL_III_COMPONENTS_META['pol_iii_holoenzyme']);
  const [isPolIIIPaused, setIsPolIIIPaused] = useState<boolean>(false);
  const [isPolIIIProofreadingActive, setIsPolIIIProofreadingActive] = useState<boolean>(true);
  const [polIIIReplicationSpeed, setPolIIIReplicationSpeed] = useState<number>(1000.0);
  const [polIIIExplodedProgress, setPolIIIExplodedProgress] = useState<number>(0);
  const [isPolIIILabelsVisible, setIsPolIIILabelsVisible] = useState<boolean>(true);
  const [isPolIIINarrating, setIsPolIIINarrating] = useState<boolean>(false);
  const [isPolIIIAutoRotating, setIsPolIIIAutoRotating] = useState<boolean>(false);
  const [polIIIStoryStep, setPolIIIStoryStep] = useState<number>(0);

  // Pol III Guided Tour State
  const [isPolIIITourActive, setIsPolIIITourActive] = useState<boolean>(false);
  const [isPolIIITourPlaying, setIsPolIIITourPlaying] = useState<boolean>(false);
  const [polIIITourStep, setPolIIITourStep] = useState<number>(0);
  const [polIIITourPhase, setPolIIITourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // DNA Gyrase Topoisomerase II Scenario State
  const [activeGyrasePart, setActiveGyrasePart] = useState<string>('gyrase_holoenzyme');
  const [gyraseComponentMeta, setGyraseComponentMeta] = useState<GyraseComponentData>(GYRASE_COMPONENTS_META['gyrase_holoenzyme']);
  const [isGyrasePaused, setIsGyrasePaused] = useState<boolean>(false);
  const [isGyraseCiproInhibited, setIsGyraseCiproInhibited] = useState<boolean>(false);
  const [isGyraseATPActive, setIsGyraseATPActive] = useState<boolean>(true);
  const [gyraseSupercoilingRate, setGyraseSupercoilingRate] = useState<number>(1.5);
  const [gyraseExplodedProgress, setGyraseExplodedProgress] = useState<number>(0);
  const [isGyraseLabelsVisible, setIsGyraseLabelsVisible] = useState<boolean>(true);
  const [isGyraseNarrating, setIsGyraseNarrating] = useState<boolean>(false);
  const [isGyraseAutoRotating, setIsGyraseAutoRotating] = useState<boolean>(false);
  const [gyraseStoryStep, setGyraseStoryStep] = useState<number>(0);

  // Gyrase Guided Tour State
  const [isGyraseTourActive, setIsGyraseTourActive] = useState<boolean>(false);
  const [isGyraseTourPlaying, setIsGyraseTourPlaying] = useState<boolean>(false);
  const [gyraseTourStep, setGyraseTourStep] = useState<number>(0);
  const [gyraseTourPhase, setGyraseTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // Divisome FtsZ Z-Ring Scenario State
  const [activeFtsZPart, setActiveFtsZPart] = useState<string>('ftsz_protofilaments');
  const [ftszComponentMeta, setFtsZComponentMeta] = useState<FtsZComponentData>(FTSZ_COMPONENTS_META['ftsz_protofilaments']);
  const [isFtsZPaused, setIsFtsZPaused] = useState<boolean>(false);
  const [isFtsZPC19Inhibited, setIsFtsZPC19Inhibited] = useState<boolean>(false);
  const [isFtsZGTPActive, setIsFtsZGTPActive] = useState<boolean>(true);
  const [ftszSeptumConstriction, setFtsZSeptumConstriction] = useState<number>(0.25);
  const [ftszTreadmillingSpeed, setFtsZTreadmillingSpeed] = useState<number>(28.0);
  const [ftszExplodedProgress, setFtsZExplodedProgress] = useState<number>(0);
  const [isFtsZLabelsVisible, setIsFtsZLabelsVisible] = useState<boolean>(true);
  const [isFtsZNarrating, setIsFtsZNarrating] = useState<boolean>(false);
  const [isFtsZAutoRotating, setIsFtsZAutoRotating] = useState<boolean>(false);
  const [ftszStoryStep, setFtsZStoryStep] = useState<number>(0);

  // FtsZ Guided Tour State
  const [isFtsZTourActive, setIsFtsZTourActive] = useState<boolean>(false);
  const [isFtsZTourPlaying, setIsFtsZTourPlaying] = useState<boolean>(false);
  const [ftszTourStep, setFtsZTourStep] = useState<number>(0);
  const [ftszTourPhase, setFtsZTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

  // MreB Actin Helical Rails Scenario State
  const [activeMreBPart, setActiveMreBPart] = useState<string>('mreb_protofilaments');
  const [mrebComponentMeta, setMreBComponentMeta] = useState<MreBComponentData>(MREB_COMPONENTS_META['mreb_protofilaments']);
  const [isMreBPaused, setIsMreBPaused] = useState<boolean>(false);
  const [isMreBA22Inhibited, setIsMreBA22Inhibited] = useState<boolean>(false);
  const [isMreBATPActive, setIsMreBATPActive] = useState<boolean>(true);
  const [mrebFilamentVelocity, setMreBFilamentVelocity] = useState<number>(25.0);
  const [mrebExplodedProgress, setMreBExplodedProgress] = useState<number>(0);
  const [isMreBLabelsVisible, setIsMreBLabelsVisible] = useState<boolean>(true);
  const [isMreBNarrating, setIsMreBNarrating] = useState<boolean>(false);
  const [isMreBAutoRotating, setIsMreBAutoRotating] = useState<boolean>(false);
  const [mrebStoryStep, setMreBStoryStep] = useState<number>(0);

  // MreB Guided Tour State
  const [isMreBTourActive, setIsMreBTourActive] = useState<boolean>(false);
  const [isMreBTourPlaying, setIsMreBTourPlaying] = useState<boolean>(false);
  const [mrebTourStep, setMreBTourStep] = useState<number>(0);
  const [mrebTourPhase, setMreBTourPhase] = useState<'narrating' | 'cooldown' | 'idle'>('idle');

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
  const rnapContainerRef = useRef<HTMLDivElement>(null);
  const polIIIContainerRef = useRef<HTMLDivElement>(null);
  const gyraseContainerRef = useRef<HTMLDivElement>(null);
  const ftszContainerRef = useRef<HTMLDivElement>(null);
  const mrebContainerRef = useRef<HTMLDivElement>(null);

  const cellSceneRef = useRef<CellViewerScene | null>(null);
  const motorSceneRef = useRef<FlagellarMotorScene | null>(null);
  const ribosomeSceneRef = useRef<RibosomeScene | null>(null);
  const atpSceneRef = useRef<ATPSynthaseScene | null>(null);
  const complexISceneRef = useRef<ComplexIScene | null>(null);
  const secYEGSceneRef = useRef<SecYEGScene | null>(null);
  const bamSceneRef = useRef<BAMComplexScene | null>(null);
  const lptSceneRef = useRef<LptBridgeScene | null>(null);
  const rnapSceneRef = useRef<RNAPScene | null>(null);
  const polIIISceneRef = useRef<PolIIIReplisomeScene | null>(null);
  const gyraseSceneRef = useRef<DNAGyraseScene | null>(null);
  const ftszSceneRef = useRef<FtsZDivisomeScene | null>(null);
  const mrebSceneRef = useRef<MreBCytoskeletonScene | null>(null);
  const roadmapOverlayRef = useRef<RoadmapScenarioOverlayHandle | null>(null);
  const [roadmapUiState, setRoadmapUiState] = useState({
    isNarrating: false,
    isTourActive: false,
    isAutoRotating: false,
    isLabelsVisible: true
  });

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
      },
      onShowSubtitles: (t: string, b?: string, s?: string) => {
        showSubtitles(t, b, s);
      },
      onHideSubtitles: () => {
        hideSubtitles();
      }
    });

    cellViewer.init().then(() => {
      if (isDisposed) {
        cellViewer.dispose();
        return;
      }
      cellSceneRef.current = cellViewer;
      (window as any).__cellViewer = cellViewer;
      (window as any).cellScene = cellViewer;
      cellViewer.start();
    });

    return () => {
      isDisposed = true;
      cellViewer.dispose();
      cellSceneRef.current = null;
    };
  }, []);

  // --------------------------------------------------------------------------
  // 1b. Intelligent Background Asset Preloader & Three.js In-Memory Cache
  // --------------------------------------------------------------------------
  useEffect(() => {
    // Enable Three.js internal file caching
    THREE.Cache.enabled = true;

    // Wait 2.0s after initial Whole Cell render, then sequentially warm cache for other models
    const timer = setTimeout(() => {
      let idx = 0;
      const preloadNext = () => {
        if (idx >= PRELOAD_MODELS.length) return;
        const modelUrl = PRELOAD_MODELS[idx++];
        fetch(modelUrl, { priority: 'low' })
          .then(() => {
            setTimeout(preloadNext, 250);
          })
          .catch(() => {
            setTimeout(preloadNext, 250);
          });
      };
      preloadNext();
    }, 2000);

    return () => clearTimeout(timer);
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
      (window as any).motorScene = motorScene;
      motorScene.start();
      motorScene.setRepresentationMode('molecular');
      motorScene.resetCamera();
    } else {
      (window as any).motorScene = motorSceneRef.current;
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
  // 3h. Initialize / Sync RNA Polymerase Scene when scenario === 'rnap'
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!rnapContainerRef.current) return;
    if (scenario !== 'rnap') return;

    if (!rnapSceneRef.current) {
      const s1 = new RNAPScene(rnapContainerRef.current, {
        onSelectComponent: (meta: RNAPComponentData) => {
          if (meta) {
            setRnapComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'RNA POLYMERASE', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setRnapStoryStep(stage);
        }
      });

      rnapSceneRef.current = s1;
      (window as any).rnapScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).rnapScene = rnapSceneRef.current;
      rnapSceneRef.current.start();
      rnapSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (rnapSceneRef.current) {
        rnapSceneRef.current.dispose();
        rnapSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3i. Initialize DNA Polymerase III Replisome Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!polIIIContainerRef.current) return;
    if (scenario !== 'pol_iii') return;

    if (!polIIISceneRef.current) {
      const s1 = new PolIIIReplisomeScene(polIIIContainerRef.current, {
        onSelectComponent: (meta: PolIIIComponentData) => {
          if (meta) {
            setPolIIIComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'DNA POLYMERASE III REPLISOME', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setPolIIIStoryStep(stage);
        }
      });

      polIIISceneRef.current = s1;
      (window as any).polIIIScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).polIIIScene = polIIISceneRef.current;
      polIIISceneRef.current.start();
      polIIISceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (polIIISceneRef.current) {
        polIIISceneRef.current.dispose();
        polIIISceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3j. Initialize DNA Gyrase Topoisomerase II Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!gyraseContainerRef.current) return;
    if (scenario !== 'gyrase') return;

    if (!gyraseSceneRef.current) {
      const s1 = new DNAGyraseScene(gyraseContainerRef.current, {
        onSelectComponent: (meta: GyraseComponentData) => {
          if (meta) {
            setGyraseComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'DNA GYRASE TOPOISOMERASE II', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setGyraseStoryStep(stage);
        }
      });

      gyraseSceneRef.current = s1;
      (window as any).gyraseScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).gyraseScene = gyraseSceneRef.current;
      gyraseSceneRef.current.start();
      gyraseSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.dispose();
        gyraseSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3k. Initialize Divisome FtsZ Z-Ring Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!ftszContainerRef.current) return;
    if (scenario !== 'ftsz') return;

    if (!ftszSceneRef.current) {
      const s1 = new FtsZDivisomeScene(ftszContainerRef.current, {
        onSelectComponent: (meta: FtsZComponentData) => {
          if (meta) {
            setFtsZComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'DIVISOME FTSZ Z-RING', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setFtsZStoryStep(stage);
        }
      });

      ftszSceneRef.current = s1;
      (window as any).ftszScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).ftszScene = ftszSceneRef.current;
      ftszSceneRef.current.start();
      ftszSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (ftszSceneRef.current) {
        ftszSceneRef.current.dispose();
        ftszSceneRef.current = null;
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 3l. Initialize MreB Actin Helical Rails Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!mrebContainerRef.current) return;
    if (scenario !== 'mreb') return;

    if (!mrebSceneRef.current) {
      const s1 = new MreBCytoskeletonScene(mrebContainerRef.current, {
        onSelectComponent: (meta: MreBComponentData) => {
          if (meta) {
            setMreBComponentMeta(meta);
          }
        },
        onCameraMove: () => {},
        onSubtitlesUpdate: (text: string, title?: string, _color?: string) => {
          showSubtitles(text, title || 'MREB ACTIN HELICAL RAILS', 'Kokoro Neural TTS');
        },
        onStageChange: (stage: number) => {
          setMreBStoryStep(stage);
        }
      });

      mrebSceneRef.current = s1;
      (window as any).mrebScene = s1;
      s1.start();
      s1.resetCamera();
    } else {
      (window as any).mrebScene = mrebSceneRef.current;
      mrebSceneRef.current.start();
      mrebSceneRef.current.resetCamera();
    }
  }, [scenario]);

  useEffect(() => {
    return () => {
      if (mrebSceneRef.current) {
        mrebSceneRef.current.dispose();
        mrebSceneRef.current = null;
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
      const narrative = data.narration || `${data.title}. ${data.subtitle}. ${data.description}`;

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

    // 1. Cleanly pause all non-target scene render loops (freeing GPU from drawing hidden frames)
    if (nextScenario !== 'cell' && cellSceneRef.current) {
      cellSceneRef.current.stop();
      if (tourStatus.active) cellSceneRef.current.exitTour();
    }
    if (nextScenario !== 'motor' && motorSceneRef.current) {
      motorSceneRef.current.stop();
    }
    if (nextScenario !== 'ribosome' && ribosomeSceneRef.current) {
      ribosomeSceneRef.current.stop();
    }
    if (nextScenario !== 'atp_synthase' && atpSceneRef.current) {
      atpSceneRef.current.stop();
    }
    if (nextScenario !== 'complex_i' && complexISceneRef.current) {
      complexISceneRef.current.stop();
    }
    if (nextScenario !== 'secyeg' && secYEGSceneRef.current) {
      secYEGSceneRef.current.stop();
    }
    if (nextScenario !== 'bam' && bamSceneRef.current) {
      bamSceneRef.current.stop();
    }
    if (nextScenario !== 'lpt' && lptSceneRef.current) {
      lptSceneRef.current.stop();
    }
    if (nextScenario !== 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.stop();
    }
    if (nextScenario !== 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.stop();
    }
    if (nextScenario !== 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.stop();
    }
    if (nextScenario !== 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.stop();
    }
    if (nextScenario !== 'mreb' && mrebSceneRef.current) {
      mrebSceneRef.current.stop();
    }

    // 2. Resume / activate target scenario (instant 0ms transition for cached models)
    if (nextScenario === 'cell' && cellSceneRef.current) {
      cellSceneRef.current.start();
      cellSceneRef.current.handleResize();
      cellSceneRef.current.updateLandmarksAndLeaders();
    } else if (nextScenario === 'motor' && motorSceneRef.current) {
      motorSceneRef.current.start();
      motorSceneRef.current.handleResize();
      motorSceneRef.current.resetCamera();
    } else if (nextScenario === 'ribosome' && ribosomeSceneRef.current) {
      ribosomeSceneRef.current.start();
      ribosomeSceneRef.current.handleResize();
      ribosomeSceneRef.current.resetCamera();
    } else if (nextScenario === 'atp_synthase' && atpSceneRef.current) {
      atpSceneRef.current.start();
      atpSceneRef.current.handleResize();
      atpSceneRef.current.resetCamera();
    } else if (nextScenario === 'complex_i' && complexISceneRef.current) {
      complexISceneRef.current.start();
      complexISceneRef.current.handleResize();
      complexISceneRef.current.resetCamera();
    } else if (nextScenario === 'secyeg' && secYEGSceneRef.current) {
      secYEGSceneRef.current.start();
      secYEGSceneRef.current.handleResize();
      secYEGSceneRef.current.resetCamera();
    } else if (nextScenario === 'bam' && bamSceneRef.current) {
      bamSceneRef.current.start();
      bamSceneRef.current.handleResize();
      bamSceneRef.current.resetCamera();
    } else if (nextScenario === 'lpt' && lptSceneRef.current) {
      lptSceneRef.current.start();
      lptSceneRef.current.handleResize();
      lptSceneRef.current.resetCamera();
    } else if (nextScenario === 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.start();
      rnapSceneRef.current.resetCamera();
    } else if (nextScenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.start();
      polIIISceneRef.current.resetCamera();
    } else if (nextScenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.start();
      gyraseSceneRef.current.resetCamera();
    } else if (nextScenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.start();
      ftszSceneRef.current.resetCamera();
    } else if (nextScenario === 'mreb' && mrebSceneRef.current) {
      mrebSceneRef.current.start();
      mrebSceneRef.current.resetCamera();
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
      const narrative = data.narration || `${data.title}. ${data.subtitle}. ${data.description}`;

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
  // 6h. RNA Polymerase Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playRnapStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > RNAP_EXPLANATION_STAGES.length) {
      setRnapStoryStep(0);
      setIsRnapNarrating(false);
      setIsRnapTourActive(false);
      setIsRnapTourPlaying(false);
      setRnapTourPhase('idle');
      if (rnapSceneRef.current) {
        rnapSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = RNAP_EXPLANATION_STAGES[stepNumber - 1];
    setRnapStoryStep(stepNumber);
    setActiveRnapPart(stage.id);
    const meta = RNAP_COMPONENTS_META[stage.id] || RNAP_COMPONENTS_META['rnap_holoenzyme'];
    if (meta) {
      setRnapComponentMeta(meta);
    }

    if (rnapSceneRef.current) {
      rnapSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${RNAP_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsRnapNarrating(true);
    setRnapTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsRnapNarrating(false);
        if (stepNumber < RNAP_EXPLANATION_STAGES.length) {
          setRnapTourPhase('cooldown');
          setTimeout(() => {
            playRnapStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setRnapStoryStep(0);
          setIsRnapNarrating(false);
          setIsRnapTourActive(false);
          setIsRnapTourPlaying(false);
          setRnapTourPhase('idle');
          hideSubtitles();
          if (rnapSceneRef.current) {
            rnapSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setRnapStoryStep(0);
        setIsRnapNarrating(false);
        setIsRnapTourActive(false);
        setIsRnapTourPlaying(false);
        setRnapTourPhase('idle');
        hideSubtitles();
        if (rnapSceneRef.current) {
          rnapSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopRnapStoryTrace = () => {
    voiceService.stop();
    setIsRnapNarrating(false);
    setRnapStoryStep(0);
    setIsRnapTourActive(false);
    setIsRnapTourPlaying(false);
    setRnapTourPhase('idle');
    hideSubtitles();
    if (rnapSceneRef.current) {
      rnapSceneRef.current.setExplanationStep(0);
    }
  };

  const handleRnapNarrate = () => {
    if (voiceService.isBusy() || rnapStoryStep > 0) {
      stopRnapStoryTrace();
      return;
    }
    if (!activeRnapPart || activeRnapPart === 'rnap_holoenzyme') {
      playRnapStoryStep(1);
    } else if (rnapComponentMeta) {
      const speech = `${rnapComponentMeta.name}. ${rnapComponentMeta.desc || ''}`;
      setIsRnapNarrating(true);
      showSubtitles(speech, rnapComponentMeta.badge || 'RNA POLYMERASE', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsRnapNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsRnapNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleRnapAutoRotate = () => {
    setIsRnapAutoRotating(prev => !prev);
  };

  const handleToggleRnapLabels = () => {
    setIsRnapLabelsVisible(prev => !prev);
  };

  const handleToggleRnapTour = () => {
    if (isRnapTourActive || rnapStoryStep > 0) {
      stopRnapStoryTrace();
    } else {
      setIsRnapTourActive(true);
      playRnapStoryStep(1);
    }
  };

  const goToRnapTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(RNAP_TOUR_STOPS.length - 1, stepIndex));
    setRnapTourStep(safeIndex);
    const partKey = RNAP_TOUR_STOPS[safeIndex];
    setActiveRnapPart(partKey);
    const meta = RNAP_COMPONENTS_META[partKey];
    if (meta) {
      setRnapComponentMeta(meta);
      if (rnapSceneRef.current) {
        rnapSceneRef.current.focusComponent(partKey);
      }
      setRnapTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6i. Pol III Replisome Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playPolIIIStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > POL_III_EXPLANATION_STAGES.length) {
      setPolIIIStoryStep(0);
      setIsPolIIINarrating(false);
      setIsPolIIITourActive(false);
      setIsPolIIITourPlaying(false);
      setPolIIITourPhase('idle');
      if (polIIISceneRef.current) {
        polIIISceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = POL_III_EXPLANATION_STAGES[stepNumber - 1];
    setPolIIIStoryStep(stepNumber);
    setActivePolIIIPart(stage.id);
    const meta = POL_III_COMPONENTS_META[stage.id] || POL_III_COMPONENTS_META['pol_iii_holoenzyme'];
    if (meta) {
      setPolIIIComponentMeta(meta);
    }

    if (polIIISceneRef.current) {
      polIIISceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${POL_III_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsPolIIINarrating(true);
    setPolIIITourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsPolIIINarrating(false);
        if (stepNumber < POL_III_EXPLANATION_STAGES.length) {
          setPolIIITourPhase('cooldown');
          setTimeout(() => {
            playPolIIIStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setPolIIIStoryStep(0);
          setIsPolIIINarrating(false);
          setIsPolIIITourActive(false);
          setIsPolIIITourPlaying(false);
          setPolIIITourPhase('idle');
          hideSubtitles();
          if (polIIISceneRef.current) {
            polIIISceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setPolIIIStoryStep(0);
        setIsPolIIINarrating(false);
        setIsPolIIITourActive(false);
        setIsPolIIITourPlaying(false);
        setPolIIITourPhase('idle');
        hideSubtitles();
        if (polIIISceneRef.current) {
          polIIISceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopPolIIIStoryTrace = () => {
    voiceService.stop();
    setIsPolIIINarrating(false);
    setPolIIIStoryStep(0);
    setIsPolIIITourActive(false);
    setIsPolIIITourPlaying(false);
    setPolIIITourPhase('idle');
    hideSubtitles();
    if (polIIISceneRef.current) {
      polIIISceneRef.current.setExplanationStep(0);
    }
  };

  const handlePolIIINarrate = () => {
    if (voiceService.isBusy() || polIIIStoryStep > 0) {
      stopPolIIIStoryTrace();
      return;
    }
    if (!activePolIIIPart || activePolIIIPart === 'pol_iii_holoenzyme') {
      playPolIIIStoryStep(1);
    } else if (polIIIComponentMeta) {
      const speech = `${polIIIComponentMeta.name}. ${polIIIComponentMeta.desc || ''}`;
      setIsPolIIINarrating(true);
      showSubtitles(speech, polIIIComponentMeta.badge || 'DNA POLYMERASE III', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsPolIIINarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsPolIIINarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleTogglePolIIIAutoRotate = () => {
    setIsPolIIIAutoRotating(prev => !prev);
  };

  const handleTogglePolIIILabels = () => {
    setIsPolIIILabelsVisible(prev => !prev);
  };

  const handleTogglePolIIITour = () => {
    if (isPolIIITourActive || polIIIStoryStep > 0) {
      stopPolIIIStoryTrace();
    } else {
      setIsPolIIITourActive(true);
      playPolIIIStoryStep(1);
    }
  };

  const goToPolIIITourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(POL_III_TOUR_STOPS.length - 1, stepIndex));
    setPolIIITourStep(safeIndex);
    const partKey = POL_III_TOUR_STOPS[safeIndex];
    setActivePolIIIPart(partKey);
    const meta = POL_III_COMPONENTS_META[partKey];
    if (meta) {
      setPolIIIComponentMeta(meta);
      if (polIIISceneRef.current) {
        polIIISceneRef.current.focusComponent(partKey);
      }
      setPolIIITourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6j. DNA Gyrase Topoisomerase II Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playGyraseStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > GYRASE_EXPLANATION_STAGES.length) {
      setGyraseStoryStep(0);
      setIsGyraseNarrating(false);
      setIsGyraseTourActive(false);
      setIsGyraseTourPlaying(false);
      setGyraseTourPhase('idle');
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = GYRASE_EXPLANATION_STAGES[stepNumber - 1];
    setGyraseStoryStep(stepNumber);
    setActiveGyrasePart(stage.id);
    const meta = GYRASE_COMPONENTS_META[stage.id] || GYRASE_COMPONENTS_META['gyrase_holoenzyme'];
    if (meta) {
      setGyraseComponentMeta(meta);
    }

    if (gyraseSceneRef.current) {
      gyraseSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${GYRASE_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsGyraseNarrating(true);
    setGyraseTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsGyraseNarrating(false);
        if (stepNumber < GYRASE_EXPLANATION_STAGES.length) {
          setGyraseTourPhase('cooldown');
          setTimeout(() => {
            playGyraseStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setGyraseStoryStep(0);
          setIsGyraseNarrating(false);
          setIsGyraseTourActive(false);
          setIsGyraseTourPlaying(false);
          setGyraseTourPhase('idle');
          hideSubtitles();
          if (gyraseSceneRef.current) {
            gyraseSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setGyraseStoryStep(0);
        setIsGyraseNarrating(false);
        setIsGyraseTourActive(false);
        setIsGyraseTourPlaying(false);
        setGyraseTourPhase('idle');
        hideSubtitles();
        if (gyraseSceneRef.current) {
          gyraseSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopGyraseStoryTrace = () => {
    voiceService.stop();
    setIsGyraseNarrating(false);
    setGyraseStoryStep(0);
    setIsGyraseTourActive(false);
    setIsGyraseTourPlaying(false);
    setGyraseTourPhase('idle');
    hideSubtitles();
    if (gyraseSceneRef.current) {
      gyraseSceneRef.current.setExplanationStep(0);
    }
  };

  const handleGyraseNarrate = () => {
    if (voiceService.isBusy() || gyraseStoryStep > 0) {
      stopGyraseStoryTrace();
      return;
    }
    if (!activeGyrasePart || activeGyrasePart === 'gyrase_holoenzyme') {
      playGyraseStoryStep(1);
    } else if (gyraseComponentMeta) {
      const speech = `${gyraseComponentMeta.name}. ${gyraseComponentMeta.desc || ''}`;
      setIsGyraseNarrating(true);
      showSubtitles(speech, gyraseComponentMeta.badge || 'DNA GYRASE', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsGyraseNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsGyraseNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleGyraseAutoRotate = () => {
    setIsGyraseAutoRotating(prev => !prev);
  };

  const handleToggleGyraseLabels = () => {
    setIsGyraseLabelsVisible(prev => !prev);
  };

  const handleToggleGyraseTour = () => {
    if (isGyraseTourActive || gyraseStoryStep > 0) {
      stopGyraseStoryTrace();
    } else {
      setIsGyraseTourActive(true);
      playGyraseStoryStep(1);
    }
  };

  const goToGyraseTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(GYRASE_TOUR_STOPS.length - 1, stepIndex));
    setGyraseTourStep(safeIndex);
    const partKey = GYRASE_TOUR_STOPS[safeIndex];
    setActiveGyrasePart(partKey);
    const meta = GYRASE_COMPONENTS_META[partKey];
    if (meta) {
      setGyraseComponentMeta(meta);
      if (gyraseSceneRef.current) {
        gyraseSceneRef.current.focusComponent(partKey);
      }
      setGyraseTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6k. Divisome FtsZ Z-Ring Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playFtsZStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > FTSZ_EXPLANATION_STAGES.length) {
      setFtsZStoryStep(0);
      setIsFtsZNarrating(false);
      setIsFtsZTourActive(false);
      setIsFtsZTourPlaying(false);
      setFtsZTourPhase('idle');
      if (ftszSceneRef.current) {
        ftszSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = FTSZ_EXPLANATION_STAGES[stepNumber - 1];
    setFtsZStoryStep(stepNumber);
    setActiveFtsZPart(stage.id);
    const meta = FTSZ_COMPONENTS_META[stage.id] || FTSZ_COMPONENTS_META['ftsz_protofilaments'];
    if (meta) {
      setFtsZComponentMeta(meta);
    }

    if (ftszSceneRef.current) {
      ftszSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${FTSZ_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsFtsZNarrating(true);
    setFtsZTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsFtsZNarrating(false);
        if (stepNumber < FTSZ_EXPLANATION_STAGES.length) {
          setFtsZTourPhase('cooldown');
          setTimeout(() => {
            playFtsZStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setFtsZStoryStep(0);
          setIsFtsZNarrating(false);
          setIsFtsZTourActive(false);
          setIsFtsZTourPlaying(false);
          setFtsZTourPhase('idle');
          hideSubtitles();
          if (ftszSceneRef.current) {
            ftszSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setFtsZStoryStep(0);
        setIsFtsZNarrating(false);
        setIsFtsZTourActive(false);
        setIsFtsZTourPlaying(false);
        setFtsZTourPhase('idle');
        hideSubtitles();
        if (ftszSceneRef.current) {
          ftszSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopFtsZStoryTrace = () => {
    voiceService.stop();
    setIsFtsZNarrating(false);
    setFtsZStoryStep(0);
    setIsFtsZTourActive(false);
    setIsFtsZTourPlaying(false);
    setFtsZTourPhase('idle');
    hideSubtitles();
    if (ftszSceneRef.current) {
      ftszSceneRef.current.setExplanationStep(0);
    }
  };

  const handleFtsZNarrate = () => {
    if (voiceService.isBusy() || ftszStoryStep > 0) {
      stopFtsZStoryTrace();
      return;
    }
    if (!activeFtsZPart || activeFtsZPart === 'ftsz_protofilaments') {
      playFtsZStoryStep(1);
    } else if (ftszComponentMeta) {
      const speech = `${ftszComponentMeta.name}. ${ftszComponentMeta.desc || ''}`;
      setIsFtsZNarrating(true);
      showSubtitles(speech, ftszComponentMeta.badge || 'DIVISOME FTSZ', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsFtsZNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsFtsZNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleFtsZAutoRotate = () => {
    setIsFtsZAutoRotating(prev => !prev);
  };

  const handleToggleFtsZLabels = () => {
    setIsFtsZLabelsVisible(prev => !prev);
  };

  const handleToggleFtsZTour = () => {
    if (isFtsZTourActive || ftszStoryStep > 0) {
      stopFtsZStoryTrace();
    } else {
      setIsFtsZTourActive(true);
      playFtsZStoryStep(1);
    }
  };

  const goToFtsZTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(FTSZ_TOUR_STOPS.length - 1, stepIndex));
    setFtsZTourStep(safeIndex);
    const partKey = FTSZ_TOUR_STOPS[safeIndex];
    setActiveFtsZPart(partKey);
    const meta = FTSZ_COMPONENTS_META[partKey];
    if (meta) {
      setFtsZComponentMeta(meta);
      if (ftszSceneRef.current) {
        ftszSceneRef.current.focusComponent(partKey);
      }
      setFtsZTourPhase('narrating');
    }
  };

  // --------------------------------------------------------------------------
  // 6l. MreB Actin Helical Rails Explanatory Trace & Story Controllers
  // --------------------------------------------------------------------------
  const playMreBStoryStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > MREB_EXPLANATION_STAGES.length) {
      setMreBStoryStep(0);
      setIsMreBNarrating(false);
      setIsMreBTourActive(false);
      setIsMreBTourPlaying(false);
      setMreBTourPhase('idle');
      if (mrebSceneRef.current) {
        mrebSceneRef.current.setExplanationStep(0);
      }
      return;
    }

    const stage = MREB_EXPLANATION_STAGES[stepNumber - 1];
    setMreBStoryStep(stepNumber);
    setActiveMreBPart(stage.id);
    const meta = MREB_COMPONENTS_META[stage.id] || MREB_COMPONENTS_META['mreb_protofilaments'];
    if (meta) {
      setMreBComponentMeta(meta);
    }

    if (mrebSceneRef.current) {
      mrebSceneRef.current.setExplanationStep(stepNumber);
    }

    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${MREB_EXPLANATION_STAGES.length}: ${stage.title}`, 'Kokoro Neural TTS');
    voiceService.stop();
    setIsMreBNarrating(true);
    setMreBTourPhase('narrating');

    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsMreBNarrating(false);
        if (stepNumber < MREB_EXPLANATION_STAGES.length) {
          setMreBTourPhase('cooldown');
          setTimeout(() => {
            playMreBStoryStep(stepNumber + 1);
          }, 850);
        } else {
          setMreBStoryStep(0);
          setIsMreBNarrating(false);
          setIsMreBTourActive(false);
          setIsMreBTourPlaying(false);
          setMreBTourPhase('idle');
          hideSubtitles();
          if (mrebSceneRef.current) {
            mrebSceneRef.current.setExplanationStep(0);
          }
        }
      },
      onError: () => {
        setMreBStoryStep(0);
        setIsMreBNarrating(false);
        setIsMreBTourActive(false);
        setIsMreBTourPlaying(false);
        setMreBTourPhase('idle');
        hideSubtitles();
        if (mrebSceneRef.current) {
          mrebSceneRef.current.setExplanationStep(0);
        }
      }
    });
  };

  const stopMreBStoryTrace = () => {
    voiceService.stop();
    setIsMreBNarrating(false);
    setMreBStoryStep(0);
    setIsMreBTourActive(false);
    setIsMreBTourPlaying(false);
    setMreBTourPhase('idle');
    hideSubtitles();
    if (mrebSceneRef.current) {
      mrebSceneRef.current.setExplanationStep(0);
    }
  };

  const handleMreBNarrate = () => {
    if (voiceService.isBusy() || mrebStoryStep > 0) {
      stopMreBStoryTrace();
      return;
    }
    if (!activeMreBPart || activeMreBPart === 'mreb_protofilaments') {
      playMreBStoryStep(1);
    } else if (mrebComponentMeta) {
      const speech = `${mrebComponentMeta.name}. ${mrebComponentMeta.desc || ''}`;
      setIsMreBNarrating(true);
      showSubtitles(speech, mrebComponentMeta.badge || 'MREB ACTIN RAILS', 'Kokoro Neural TTS');
      voiceService.playText(speech, {
        voice: selectedVoice,
        onEnd: () => {
          setIsMreBNarrating(false);
          hideSubtitles();
        },
        onError: () => {
          setIsMreBNarrating(false);
          hideSubtitles();
        }
      });
    }
  };

  const handleToggleMreBAutoRotate = () => {
    setIsMreBAutoRotating(prev => !prev);
  };

  const handleToggleMreBLabels = () => {
    setIsMreBLabelsVisible(prev => !prev);
  };

  const handleToggleMreBTour = () => {
    if (isMreBTourActive || mrebStoryStep > 0) {
      stopMreBStoryTrace();
    } else {
      setIsMreBTourActive(true);
      playMreBStoryStep(1);
    }
  };

  const goToMreBTourStep = (stepIndex: number) => {
    const safeIndex = Math.max(0, Math.min(MREB_TOUR_STOPS.length - 1, stepIndex));
    setMreBTourStep(safeIndex);
    const partKey = MREB_TOUR_STOPS[safeIndex];
    setActiveMreBPart(partKey);
    const meta = MREB_COMPONENTS_META[partKey];
    if (meta) {
      setMreBComponentMeta(meta);
      if (mrebSceneRef.current) {
        mrebSceneRef.current.focusComponent(partKey);
      }
      setMreBTourPhase('narrating');
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
    } else if (scenario === 'rnap' && rnapSceneRef.current) {
      rnapSceneRef.current.resetCamera();
    } else if (scenario === 'pol_iii' && polIIISceneRef.current) {
      polIIISceneRef.current.resetCamera();
    } else if (scenario === 'gyrase' && gyraseSceneRef.current) {
      gyraseSceneRef.current.resetCamera();
    } else if (scenario === 'ftsz' && ftszSceneRef.current) {
      ftszSceneRef.current.resetCamera();
    } else if (scenario === 'mreb' && mrebSceneRef.current) {
      mrebSceneRef.current.resetCamera();
    } else if (isRoadmapScenario(scenario) && roadmapOverlayRef.current) {
      roadmapOverlayRef.current.handleResetCamera();
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
    scenario === 'lpt' ||
    scenario === 'rnap' ||
    scenario === 'pol_iii' ||
    scenario === 'gyrase' ||
    scenario === 'ftsz' ||
    scenario === 'mreb' ||
    isRoadmapScenario(scenario);

  const isDarkCanvasScenario =
    scenario === 'rnap' ||
    scenario === 'pol_iii' ||
    scenario === 'gyrase' ||
    scenario === 'ftsz' ||
    scenario === 'mreb' ||
    isRoadmapScenario(scenario);

  return (
    <div
      id="app-container"
      className={`${isDrawerOpen ? 'drawer-open' : ''} ${isDarkCanvasScenario ? 'dark-canvas-scenario' : ''}`.trim()}
    >
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
            ? 'PDB 5D0O (2.90 Å) • BAM Insertase: Active'
            : scenario === 'lpt'
            ? 'Cryo-EM 9P7P (3.40 Å) • Lpt Bridge: Active'
            : scenario === 'rnap'
            ? 'Cryo-EM 6C9Y (3.80 Å) • RNAP: Active'
            : scenario === 'pol_iii'
            ? 'Cryo-EM 5FKV / 4ESV • Replisome: Active'
            : scenario === 'gyrase'
            ? 'Cryo-EM 6RKU / 1AB4 • DNA Gyrase: Active'
            : scenario === 'ftsz'
            ? 'PDB 1FSZ / 6PL5 • Divisome Z-Ring: Active'
            : scenario === 'mreb'
            ? 'PDB 1JCG / 6GBS • MreB Rod Complex: Active'
            : isRoadmapScenario(scenario)
            ? `PDB ${ROADMAP_SCENARIOS_CONFIG[scenario].pdb} • Active`
            : 'Cryo-EM 9P7P (3.40 Å) • Lpt Bridge: Active'
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
            : scenario === 'rnap' ? isRnapNarrating : scenario === 'pol_iii' ? isPolIIINarrating : scenario === 'gyrase' ? isGyraseNarrating : scenario === 'ftsz' ? isFtsZNarrating : scenario === 'mreb' ? isMreBNarrating : isRoadmapScenario(scenario) ? roadmapUiState.isNarrating : isLptNarrating
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
            : scenario === 'rnap' ? handleRnapNarrate : scenario === 'pol_iii' ? handlePolIIINarrate : scenario === 'gyrase' ? handleGyraseNarrate : scenario === 'ftsz' ? handleFtsZNarrate : scenario === 'mreb' ? handleMreBNarrate : isRoadmapScenario(scenario) ? () => roadmapOverlayRef.current?.handleNarrate() : handleLptNarrate
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
            : scenario === 'rnap' ? isRnapAutoRotating : scenario === 'pol_iii' ? isPolIIIAutoRotating : scenario === 'gyrase' ? isGyraseAutoRotating : scenario === 'ftsz' ? isFtsZAutoRotating : scenario === 'mreb' ? isMreBAutoRotating : isRoadmapScenario(scenario) ? roadmapUiState.isAutoRotating : isLptAutoRotating
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
            : scenario === 'rnap' ? handleToggleRnapAutoRotate : scenario === 'pol_iii' ? handleTogglePolIIIAutoRotate : scenario === 'gyrase' ? handleToggleGyraseAutoRotate : scenario === 'ftsz' ? handleToggleFtsZAutoRotate : scenario === 'mreb' ? handleToggleMreBAutoRotate : isRoadmapScenario(scenario) ? () => { roadmapOverlayRef.current?.handleToggleAutoRotate(); } : handleToggleLptAutoRotate
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
            : scenario === 'rnap' ? isRnapLabelsVisible : scenario === 'pol_iii' ? isPolIIILabelsVisible : scenario === 'gyrase' ? isGyraseLabelsVisible : scenario === 'ftsz' ? isFtsZLabelsVisible : scenario === 'mreb' ? isMreBLabelsVisible : isRoadmapScenario(scenario) ? roadmapUiState.isLabelsVisible : isLptLabelsVisible
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
            : scenario === 'rnap' ? handleToggleRnapLabels : scenario === 'pol_iii' ? handleTogglePolIIILabels : scenario === 'gyrase' ? handleToggleGyraseLabels : scenario === 'ftsz' ? handleToggleFtsZLabels : scenario === 'mreb' ? handleToggleMreBLabels : isRoadmapScenario(scenario) ? () => { roadmapOverlayRef.current?.handleToggleLabels(); } : handleToggleLptLabels
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
            : scenario === 'rnap' ? (isRnapTourActive || rnapStoryStep > 0) : scenario === 'pol_iii' ? (isPolIIITourActive || polIIIStoryStep > 0) : scenario === 'gyrase' ? (isGyraseTourActive || gyraseStoryStep > 0) : scenario === 'ftsz' ? (isFtsZTourActive || ftszStoryStep > 0) : scenario === 'mreb' ? (isMreBTourActive || mrebStoryStep > 0) : isRoadmapScenario(scenario) ? roadmapUiState.isTourActive : (isLptTourActive || lptStoryStep > 0)
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
            : scenario === 'rnap' ? handleToggleRnapTour : scenario === 'pol_iii' ? handleTogglePolIIITour : scenario === 'gyrase' ? handleToggleGyraseTour : scenario === 'ftsz' ? handleToggleFtsZTour : scenario === 'mreb' ? handleToggleMreBTour : isRoadmapScenario(scenario) ? () => roadmapOverlayRef.current?.handleToggleTour() : handleToggleLptTour
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
        <MicrocompartmentCard onSelectScenario={handleSelectScenario} />

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
          onSelectScenario={handleSelectScenario}
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
          clientMode={bamClientMode}
          onChangeClientMode={(mode) => {
            setBamClientMode(mode);
            if (bamSceneRef.current) {
              bamSceneRef.current.setClientMode(mode);
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

      {/* 11. RNA Polymerase Transcription Holoenzyme Scenario Layer */}
      <div
        id="rnap-container"
        className={scenario === 'rnap' ? '' : 'hidden'}
        style={{ display: scenario === 'rnap' ? 'block' : 'none' }}
      >
        <RNAPHeaderOverlay />
        <div
          id="rnap-viewport"
          className="canvas-container"
          ref={rnapContainerRef}
          tabIndex={0}
        />
        <svg id="rnap-svg-overlay"></svg>
        <div id="rnap-labels-container"></div>
        <RNAPHUDCard
          isPaused={isRnapPaused}
          onTogglePause={() => {
            setIsRnapPaused(prev => {
              const next = !prev;
              if (rnapSceneRef.current) rnapSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isRifampicinInhibited={isRnapRifampicinInhibited}
          onToggleRifampicin={() => {
            setIsRnapRifampicinInhibited(prev => {
              const next = !prev;
              if (rnapSceneRef.current) rnapSceneRef.current.setRifampicinInhibited(next);
              return next;
            });
          }}
          transcriptionRate={rnapTranscriptionRate}
          onChangeTranscriptionRate={(rate) => {
            setRnapTranscriptionRate(rate);
            if (rnapSceneRef.current) rnapSceneRef.current.setTranscriptionRate(rate);
          }}
          explodedProgress={rnapExplodedProgress}
          onChangeExploded={(exp) => {
            setRnapExplodedProgress(exp);
            if (rnapSceneRef.current) rnapSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isRnapLabelsVisible}
          onToggleLabels={handleToggleRnapLabels}
          onFocusComponent={(key) => {
            setActiveRnapPart(key);
            const meta = RNAP_COMPONENTS_META[key];
            if (meta) setRnapComponentMeta(meta);
            if (rnapSceneRef.current) {
              rnapSceneRef.current.focusComponent(key);
              rnapSceneRef.current.selectComponent(key);
            }
          }}
        />
        <RNAPInspectorDrawer
          data={rnapComponentMeta}
          activeKey={activeRnapPart}
          isNarrating={isRnapNarrating}
          storyStep={rnapStoryStep}
          onSelectStoryStep={(s) => playRnapStoryStep(s)}
          onStartStoryTrace={() => playRnapStoryStep(1)}
          onStopStoryTrace={stopRnapStoryTrace}
          onNarrate={handleRnapNarrate}
          onFocus={() => {
            if (rnapSceneRef.current && activeRnapPart) {
              rnapSceneRef.current.focusComponent(activeRnapPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (rnapSceneRef.current) {
              rnapSceneRef.current.selectComponent(key);
              rnapSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isRnapTourActive || rnapStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isRnapTourPlaying || isRnapNarrating,
              stepIndex: rnapStoryStep > 0 ? rnapStoryStep - 1 : rnapTourStep,
              key: rnapStoryStep > 0 ? RNAP_EXPLANATION_STAGES[rnapStoryStep - 1]?.id : RNAP_TOUR_STOPS[rnapTourStep],
              totalSteps: rnapStoryStep > 0 ? RNAP_EXPLANATION_STAGES.length : RNAP_TOUR_STOPS.length,
              phase: rnapTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={rnapStoryStep > 0 ? RNAP_EXPLANATION_STAGES[rnapStoryStep - 1]?.title : (rnapComponentMeta?.name || 'RNA Polymerase')}
            onPrev={() => {
              if (rnapStoryStep > 0) {
                playRnapStoryStep(Math.max(1, rnapStoryStep - 1));
              } else {
                goToRnapTourStep(rnapTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (rnapStoryStep > 0) {
                if (isRnapNarrating) {
                  voiceService.stop();
                  setIsRnapNarrating(false);
                } else {
                  playRnapStoryStep(rnapStoryStep);
                }
              } else {
                setIsRnapTourPlaying(!isRnapTourPlaying);
              }
            }}
            onNext={() => {
              if (rnapStoryStep > 0) {
                playRnapStoryStep(Math.min(RNAP_EXPLANATION_STAGES.length, rnapStoryStep + 1));
              } else {
                goToRnapTourStep(rnapTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopRnapStoryTrace}
          />
        )}
      </div>

      {/* 12. DNA Polymerase III Replisome Holoenzyme Scenario Layer */}
      <div
        id="pol-iii-container"
        className={scenario === 'pol_iii' ? '' : 'hidden'}
        style={{ display: scenario === 'pol_iii' ? 'block' : 'none' }}
      >
        <PolIIIHeaderOverlay />
        <div
          id="pol-iii-viewport"
          className="canvas-container"
          ref={polIIIContainerRef}
          tabIndex={0}
        />
        <svg id="pol-iii-svg-overlay"></svg>
        <div id="pol-iii-labels-container"></div>
        <PolIIIHUDCard
          isPaused={isPolIIIPaused}
          onTogglePause={() => {
            setIsPolIIIPaused(prev => {
              const next = !prev;
              if (polIIISceneRef.current) polIIISceneRef.current.setPaused(next);
              return next;
            });
          }}
          isProofreadingActive={isPolIIIProofreadingActive}
          onToggleProofreading={() => {
            setIsPolIIIProofreadingActive(prev => {
              const next = !prev;
              if (polIIISceneRef.current) polIIISceneRef.current.setProofreadingActive(next);
              return next;
            });
          }}
          replicationSpeed={polIIIReplicationSpeed}
          onChangeReplicationSpeed={(spd) => {
            setPolIIIReplicationSpeed(spd);
            if (polIIISceneRef.current) polIIISceneRef.current.setReplicationSpeed(spd);
          }}
          explodedProgress={polIIIExplodedProgress}
          onChangeExploded={(exp) => {
            setPolIIIExplodedProgress(exp);
            if (polIIISceneRef.current) polIIISceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isPolIIILabelsVisible}
          onToggleLabels={handleTogglePolIIILabels}
          onFocusComponent={(key) => {
            setActivePolIIIPart(key);
            const meta = POL_III_COMPONENTS_META[key];
            if (meta) setPolIIIComponentMeta(meta);
            if (polIIISceneRef.current) {
              polIIISceneRef.current.focusComponent(key);
              polIIISceneRef.current.selectComponent(key);
            }
          }}
        />
        <PolIIIInspectorDrawer
          data={polIIIComponentMeta}
          activeKey={activePolIIIPart}
          isNarrating={isPolIIINarrating}
          storyStep={polIIIStoryStep}
          onSelectStoryStep={(s) => playPolIIIStoryStep(s)}
          onStartStoryTrace={() => playPolIIIStoryStep(1)}
          onStopStoryTrace={stopPolIIIStoryTrace}
          onNarrate={handlePolIIINarrate}
          onFocus={() => {
            if (polIIISceneRef.current && activePolIIIPart) {
              polIIISceneRef.current.focusComponent(activePolIIIPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (polIIISceneRef.current) {
              polIIISceneRef.current.selectComponent(key);
              polIIISceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isPolIIITourActive || polIIIStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isPolIIITourPlaying || isPolIIINarrating,
              stepIndex: polIIIStoryStep > 0 ? polIIIStoryStep - 1 : polIIITourStep,
              key: polIIIStoryStep > 0 ? POL_III_EXPLANATION_STAGES[polIIIStoryStep - 1]?.id : POL_III_TOUR_STOPS[polIIITourStep],
              totalSteps: polIIIStoryStep > 0 ? POL_III_EXPLANATION_STAGES.length : POL_III_TOUR_STOPS.length,
              phase: polIIITourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={polIIIStoryStep > 0 ? POL_III_EXPLANATION_STAGES[polIIIStoryStep - 1]?.title : (polIIIComponentMeta?.name || 'DNA Polymerase III Replisome')}
            onPrev={() => {
              if (polIIIStoryStep > 0) {
                playPolIIIStoryStep(Math.max(1, polIIIStoryStep - 1));
              } else {
                goToPolIIITourStep(polIIITourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (polIIIStoryStep > 0) {
                if (isPolIIINarrating) {
                  voiceService.stop();
                  setIsPolIIINarrating(false);
                } else {
                  playPolIIIStoryStep(polIIIStoryStep);
                }
              } else {
                setIsPolIIITourPlaying(!isPolIIITourPlaying);
              }
            }}
            onNext={() => {
              if (polIIIStoryStep > 0) {
                playPolIIIStoryStep(Math.min(POL_III_EXPLANATION_STAGES.length, polIIIStoryStep + 1));
              } else {
                goToPolIIITourStep(polIIITourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopPolIIIStoryTrace}
          />
        )}
      </div>

      {/* 13. DNA Gyrase Topoisomerase II Scenario Layer */}
      <div
        id="gyrase-container"
        className={scenario === 'gyrase' ? '' : 'hidden'}
        style={{ display: scenario === 'gyrase' ? 'block' : 'none' }}
      >
        <GyraseHeaderOverlay />
        <div
          id="gyrase-viewport"
          className="canvas-container"
          ref={gyraseContainerRef}
          tabIndex={0}
        />
        <svg id="gyrase-svg-overlay"></svg>
        <div id="gyrase-labels-container"></div>
        <GyraseHUDCard
          isPaused={isGyrasePaused}
          onTogglePause={() => {
            setIsGyrasePaused(prev => {
              const next = !prev;
              if (gyraseSceneRef.current) gyraseSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isCiprofloxacinInhibited={isGyraseCiproInhibited}
          onToggleCiprofloxacin={() => {
            setIsGyraseCiproInhibited(prev => {
              const next = !prev;
              if (gyraseSceneRef.current) gyraseSceneRef.current.setCiprofloxacinInhibited(next);
              return next;
            });
          }}
          isATPHydrolysisActive={isGyraseATPActive}
          onToggleATP={() => {
            setIsGyraseATPActive(prev => {
              const next = !prev;
              if (gyraseSceneRef.current) gyraseSceneRef.current.setATPHydrolysisActive(next);
              return next;
            });
          }}
          supercoilingRate={gyraseSupercoilingRate}
          onChangeSupercoilingRate={(rate) => {
            setGyraseSupercoilingRate(rate);
            if (gyraseSceneRef.current) gyraseSceneRef.current.setSupercoilingRate(rate);
          }}
          explodedProgress={gyraseExplodedProgress}
          onChangeExploded={(exp) => {
            setGyraseExplodedProgress(exp);
            if (gyraseSceneRef.current) gyraseSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isGyraseLabelsVisible}
          onToggleLabels={handleToggleGyraseLabels}
          onFocusComponent={(key) => {
            setActiveGyrasePart(key);
            const meta = GYRASE_COMPONENTS_META[key];
            if (meta) setGyraseComponentMeta(meta);
            if (gyraseSceneRef.current) {
              gyraseSceneRef.current.focusComponent(key);
              gyraseSceneRef.current.selectComponent(key);
            }
          }}
        />
        <GyraseInspectorDrawer
          data={gyraseComponentMeta}
          activeKey={activeGyrasePart}
          isNarrating={isGyraseNarrating}
          storyStep={gyraseStoryStep}
          onSelectStoryStep={(s) => playGyraseStoryStep(s)}
          onStartStoryTrace={() => playGyraseStoryStep(1)}
          onStopStoryTrace={stopGyraseStoryTrace}
          onNarrate={handleGyraseNarrate}
          onFocus={() => {
            if (gyraseSceneRef.current && activeGyrasePart) {
              gyraseSceneRef.current.focusComponent(activeGyrasePart);
            }
          }}
          onSelectPart={(key: string) => {
            if (gyraseSceneRef.current) {
              gyraseSceneRef.current.selectComponent(key);
              gyraseSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isGyraseTourActive || gyraseStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isGyraseTourPlaying || isGyraseNarrating,
              stepIndex: gyraseStoryStep > 0 ? gyraseStoryStep - 1 : gyraseTourStep,
              key: gyraseStoryStep > 0 ? GYRASE_EXPLANATION_STAGES[gyraseStoryStep - 1]?.id : GYRASE_TOUR_STOPS[gyraseTourStep],
              totalSteps: gyraseStoryStep > 0 ? GYRASE_EXPLANATION_STAGES.length : GYRASE_TOUR_STOPS.length,
              phase: gyraseTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={gyraseStoryStep > 0 ? GYRASE_EXPLANATION_STAGES[gyraseStoryStep - 1]?.title : (gyraseComponentMeta?.name || 'DNA Gyrase Topoisomerase II')}
            onPrev={() => {
              if (gyraseStoryStep > 0) {
                playGyraseStoryStep(Math.max(1, gyraseStoryStep - 1));
              } else {
                goToGyraseTourStep(gyraseTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (gyraseStoryStep > 0) {
                if (isGyraseNarrating) {
                  voiceService.stop();
                  setIsGyraseNarrating(false);
                } else {
                  playGyraseStoryStep(gyraseStoryStep);
                }
              } else {
                setIsGyraseTourPlaying(!isGyraseTourPlaying);
              }
            }}
            onNext={() => {
              if (gyraseStoryStep > 0) {
                playGyraseStoryStep(Math.min(GYRASE_EXPLANATION_STAGES.length, gyraseStoryStep + 1));
              } else {
                goToGyraseTourStep(gyraseTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopGyraseStoryTrace}
          />
        )}
      </div>

      {/* 14. Divisome FtsZ Z-Ring Scenario Layer */}
      <div
        id="ftsz-container"
        className={scenario === 'ftsz' ? '' : 'hidden'}
        style={{ display: scenario === 'ftsz' ? 'block' : 'none' }}
      >
        <FtsZHeaderOverlay />
        <div
          id="ftsz-viewport"
          className="canvas-container"
          ref={ftszContainerRef}
          tabIndex={0}
        />
        <svg id="ftsz-svg-overlay"></svg>
        <div id="ftsz-labels-container"></div>
        <FtsZHUDCard
          isPaused={isFtsZPaused}
          onTogglePause={() => {
            setIsFtsZPaused(prev => {
              const next = !prev;
              if (ftszSceneRef.current) ftszSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isPC190723Inhibited={isFtsZPC19Inhibited}
          onTogglePC190723={() => {
            setIsFtsZPC19Inhibited(prev => {
              const next = !prev;
              if (ftszSceneRef.current) ftszSceneRef.current.setPC190723Inhibited(next);
              return next;
            });
          }}
          isGTPActive={isFtsZGTPActive}
          onToggleGTP={() => {
            setIsFtsZGTPActive(prev => {
              const next = !prev;
              if (ftszSceneRef.current) ftszSceneRef.current.setGTPActive(next);
              return next;
            });
          }}
          septumConstriction={ftszSeptumConstriction}
          onChangeConstriction={(val) => {
            setFtsZSeptumConstriction(val);
            if (ftszSceneRef.current) ftszSceneRef.current.setSeptumConstriction(val);
          }}
          treadmillingSpeed={ftszTreadmillingSpeed}
          onChangeTreadmillingSpeed={(val) => {
            setFtsZTreadmillingSpeed(val);
            if (ftszSceneRef.current) ftszSceneRef.current.setTreadmillingSpeed(val);
          }}
          explodedProgress={ftszExplodedProgress}
          onChangeExploded={(exp) => {
            setFtsZExplodedProgress(exp);
            if (ftszSceneRef.current) ftszSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isFtsZLabelsVisible}
          onToggleLabels={handleToggleFtsZLabels}
          onFocusComponent={(key) => {
            setActiveFtsZPart(key);
            const meta = FTSZ_COMPONENTS_META[key];
            if (meta) setFtsZComponentMeta(meta);
            if (ftszSceneRef.current) {
              ftszSceneRef.current.focusComponent(key);
              ftszSceneRef.current.selectComponent(key);
            }
          }}
        />
        <FtsZInspectorDrawer
          data={ftszComponentMeta}
          activeKey={activeFtsZPart}
          isNarrating={isFtsZNarrating}
          storyStep={ftszStoryStep}
          onSelectStoryStep={(s) => playFtsZStoryStep(s)}
          onStartStoryTrace={() => playFtsZStoryStep(1)}
          onStopStoryTrace={stopFtsZStoryTrace}
          onNarrate={handleFtsZNarrate}
          onFocus={() => {
            if (ftszSceneRef.current && activeFtsZPart) {
              ftszSceneRef.current.focusComponent(activeFtsZPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (ftszSceneRef.current) {
              ftszSceneRef.current.selectComponent(key);
              ftszSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isFtsZTourActive || ftszStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isFtsZTourPlaying || isFtsZNarrating,
              stepIndex: ftszStoryStep > 0 ? ftszStoryStep - 1 : ftszTourStep,
              key: ftszStoryStep > 0 ? FTSZ_EXPLANATION_STAGES[ftszStoryStep - 1]?.id : FTSZ_TOUR_STOPS[ftszTourStep],
              totalSteps: ftszStoryStep > 0 ? FTSZ_EXPLANATION_STAGES.length : FTSZ_TOUR_STOPS.length,
              phase: ftszTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={ftszStoryStep > 0 ? FTSZ_EXPLANATION_STAGES[ftszStoryStep - 1]?.title : (ftszComponentMeta?.name || 'Divisome FtsZ Z-Ring')}
            onPrev={() => {
              if (ftszStoryStep > 0) {
                playFtsZStoryStep(Math.max(1, ftszStoryStep - 1));
              } else {
                goToFtsZTourStep(ftszTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (ftszStoryStep > 0) {
                if (isFtsZNarrating) {
                  voiceService.stop();
                  setIsFtsZNarrating(false);
                } else {
                  playFtsZStoryStep(ftszStoryStep);
                }
              } else {
                setIsFtsZTourPlaying(!isFtsZTourPlaying);
              }
            }}
            onNext={() => {
              if (ftszStoryStep > 0) {
                playFtsZStoryStep(Math.min(FTSZ_EXPLANATION_STAGES.length, ftszStoryStep + 1));
              } else {
                goToFtsZTourStep(ftszTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopFtsZStoryTrace}
          />
        )}
      </div>

      {/* 15. MreB Actin Helical Rails Scenario Layer */}
      <div
        id="mreb-container"
        className={scenario === 'mreb' ? '' : 'hidden'}
        style={{ display: scenario === 'mreb' ? 'block' : 'none' }}
      >
        <MreBHeaderOverlay />
        <div
          id="mreb-viewport"
          className="canvas-container"
          ref={mrebContainerRef}
          tabIndex={0}
        />
        <svg id="mreb-svg-overlay"></svg>
        <div id="mreb-labels-container"></div>
        <MreBHUDCard
          isPaused={isMreBPaused}
          onTogglePause={() => {
            setIsMreBPaused(prev => {
              const next = !prev;
              if (mrebSceneRef.current) mrebSceneRef.current.setPaused(next);
              return next;
            });
          }}
          isA22Inhibited={isMreBA22Inhibited}
          onToggleA22={() => {
            setIsMreBA22Inhibited(prev => {
              const next = !prev;
              if (mrebSceneRef.current) mrebSceneRef.current.setA22Inhibited(next);
              return next;
            });
          }}
          isATPActive={isMreBATPActive}
          onToggleATP={() => {
            setIsMreBATPActive(prev => {
              const next = !prev;
              if (mrebSceneRef.current) mrebSceneRef.current.setATPActive(next);
              return next;
            });
          }}
          filamentVelocity={mrebFilamentVelocity}
          onChangeVelocity={(val) => {
            setMreBFilamentVelocity(val);
            if (mrebSceneRef.current) mrebSceneRef.current.setFilamentVelocity(val);
          }}
          explodedProgress={mrebExplodedProgress}
          onChangeExploded={(exp) => {
            setMreBExplodedProgress(exp);
            if (mrebSceneRef.current) mrebSceneRef.current.setExplodedProgress(exp);
          }}
          isLabelsVisible={isMreBLabelsVisible}
          onToggleLabels={handleToggleMreBLabels}
          onFocusComponent={(key) => {
            setActiveMreBPart(key);
            const meta = MREB_COMPONENTS_META[key];
            if (meta) setMreBComponentMeta(meta);
            if (mrebSceneRef.current) {
              mrebSceneRef.current.focusComponent(key);
              mrebSceneRef.current.selectComponent(key);
            }
          }}
        />
        <MreBInspectorDrawer
          data={mrebComponentMeta}
          activeKey={activeMreBPart}
          isNarrating={isMreBNarrating}
          storyStep={mrebStoryStep}
          onSelectStoryStep={(s) => playMreBStoryStep(s)}
          onStartStoryTrace={() => playMreBStoryStep(1)}
          onStopStoryTrace={stopMreBStoryTrace}
          onNarrate={handleMreBNarrate}
          onFocus={() => {
            if (mrebSceneRef.current && activeMreBPart) {
              mrebSceneRef.current.focusComponent(activeMreBPart);
            }
          }}
          onSelectPart={(key: string) => {
            if (mrebSceneRef.current) {
              mrebSceneRef.current.selectComponent(key);
              mrebSceneRef.current.focusComponent(key);
            }
          }}
        />

        {(isMreBTourActive || mrebStoryStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isMreBTourPlaying || isMreBNarrating,
              stepIndex: mrebStoryStep > 0 ? mrebStoryStep - 1 : mrebTourStep,
              key: mrebStoryStep > 0 ? MREB_EXPLANATION_STAGES[mrebStoryStep - 1]?.id : MREB_TOUR_STOPS[mrebTourStep],
              totalSteps: mrebStoryStep > 0 ? MREB_EXPLANATION_STAGES.length : MREB_TOUR_STOPS.length,
              phase: mrebTourPhase,
              cooldownRemaining: 2,
              ttsEnabled: true
            }}
            stepTitle={mrebStoryStep > 0 ? MREB_EXPLANATION_STAGES[mrebStoryStep - 1]?.title : (mrebComponentMeta?.name || 'MreB Actin Helical Rails')}
            onPrev={() => {
              if (mrebStoryStep > 0) {
                playMreBStoryStep(Math.max(1, mrebStoryStep - 1));
              } else {
                goToMreBTourStep(mrebTourStep - 1);
              }
            }}
            onTogglePlay={() => {
              if (mrebStoryStep > 0) {
                if (isMreBNarrating) {
                  voiceService.stop();
                  setIsMreBNarrating(false);
                } else {
                  playMreBStoryStep(mrebStoryStep);
                }
              } else {
                setIsMreBTourPlaying(!isMreBTourPlaying);
              }
            }}
            onNext={() => {
              if (mrebStoryStep > 0) {
                playMreBStoryStep(Math.min(MREB_EXPLANATION_STAGES.length, mrebStoryStep + 1));
              } else {
                goToMreBTourStep(mrebTourStep + 1);
              }
            }}
            onToggleVoice={() => {}}
            onExit={stopMreBStoryTrace}
          />
        )}
      </div>

      {/* 16-31. Roadmap Expansion Scenarios (Scenarios 14-29) */}

      <RoadmapScenarioOverlay
        ref={roadmapOverlayRef}
        scenarioId={isRoadmapScenario(scenario) ? scenario : 'expressome'}
        active={isRoadmapScenario(scenario)}
        selectedVoice={selectedVoice}
        onShowSubtitles={showSubtitles}
        onHideSubtitles={hideSubtitles}
        onSelectScenario={handleSelectScenario}
        onStateChange={setRoadmapUiState}
      />

      {/* Global Live Subtitles Banner (Closed Captions) */}
      <LiveSubtitles
        visible={subtitleState.visible}
        text={subtitleState.text}
        badge={subtitleState.badge}
        speaker={subtitleState.speaker}
        hasTourBar={roadmapUiState.isTourActive || isMreBTourActive || mrebStoryStep > 0 || isFtsZTourActive || ftszStoryStep > 0 || isGyraseTourActive || gyraseStoryStep > 0 || isPolIIITourActive || polIIIStoryStep > 0 || isRnapTourActive || rnapStoryStep > 0 || isLptTourActive || lptStoryStep > 0 || isBAMTourActive || bamStoryStep > 0 || isSecYEGTourActive || secYEGStoryStep > 0 || isComplexITourActive || complexIStoryStep > 0 || isATPTourActive || atpStoryStep > 0 || isMotorTourActive || motorStoryStep > 0 || isRibosomeTourActive || ribosomeStoryStep > 0 || tourStatus.active}
        onClose={hideSubtitles}
      />
    </div>
  );
}

export default App;
