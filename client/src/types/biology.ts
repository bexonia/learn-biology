export type ScenarioType =
  | 'cell'
  | 'motor'
  | 'ribosome'
  | 'atp_synthase'
  | 'complex_i'
  | 'secyeg'
  | 'bam'
  | 'lpt'
  | 'rnap'
  | 'pol_iii'
  | 'gyrase'
  | 'ftsz'
  | 'mreb'
  | 'expressome'
  | 'envelopes'
  | 'motility_modes'
  | 'microcompartment'
  | 'chemosensory_mcp'
  | 'pili_fimbriae'
  | 'nucleoid'
  | 'chaperones'
  | 'rna_degradosome'
  | 'metabolic_hubs'
  | 'periplasmic_transport'
  | 'efflux_pump'
  | 'secretion_systems'
  | 'crispr_defense'
  | 'storage_and_spores'
  | 'atomic_chemistry';

export type RoadmapScenarioId =
  | 'expressome'
  | 'envelopes'
  | 'motility_modes'
  | 'microcompartment'
  | 'chemosensory_mcp'
  | 'pili_fimbriae'
  | 'nucleoid'
  | 'chaperones'
  | 'rna_degradosome'
  | 'metabolic_hubs'
  | 'periplasmic_transport'
  | 'efflux_pump'
  | 'secretion_systems'
  | 'crispr_defense'
  | 'storage_and_spores'
  | 'atomic_chemistry';

export interface ProteinItem {
  name: string;
  tag: string;
  desc: string;
}

export interface OrganelleData {
  zone: string;
  title: string;
  scientific: string;
  phonetic: string;
  subtitle: string;
  color: string;
  colorName: string;
  scale: string;
  abundance: string;
  composition: string;
  description: string;
  proteins: ProteinItem[];
  camPos?: any;
  camTarget?: any;
  hasDrilldown?: boolean;
}

export interface MotorComponentData {
  name: string;
  dimensions?: string;
  proteins?: string;
  pdb?: string;
  role?: string;
  badge?: string;
}

export interface RibosomeComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
}

export interface ATPSynthaseComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  state?: 'open' | 'loose' | 'tight' | 'translocating';
}

export interface ComplexIComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  cofactors?: string;
  redoxPotential?: string;
  state?: 'oxidized' | 'reduced' | 'coupled_pumping';
}

export interface SecYEGComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  atpConsumption?: string;
  translocationRate?: string;
  state?: 'docked' | 'piston_inserted' | 'gate_parted' | 'processive';
}

export interface BAMComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  energySource?: string;
  turnoverRate?: string;
  state?: 'handover' | 'gating' | 'seam_unzipped' | 'hairpin_inserted' | 'barrel_released';
}

export interface LptComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  energySource?: string;
  transportRate?: string;
  state?: 'extraction' | 'periplasmic_handover' | 'jellyroll_slide' | 'om_gating' | 'leaflet_deposition';
}

export interface RNAPComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  catalyticTriad?: string;
  transcriptionRate?: string;
  state?: 'promoter_binding' | 'bubble_melting' | 'abortive_initiation' | 'processive_elongation' | 'expressome_coupled';
}

export interface PolIIIComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  catalyticPalm?: string;
  replicationSpeed?: string;
  state?: 'helicase_unwinding' | 'clamp_loading' | 'leading_synthesis' | 'lagging_trombone' | 'proofreading_editing' | 'processive_duplication';
}

export interface GyraseComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  catalyticTyrosine?: string;
  supercoilingRate?: string;
  state?: 'wrapping' | 't_capture' | 'cleavage' | 'strand_passage' | 'religation_exit';
}

export interface FtsZComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  gtpTurnover?: string;
  treadmillingSpeed?: string;
  state?: 'midcell_positioning' | 'gtp_polymerization' | 'membrane_tethering' | 'treadmilling_synthase' | 'constriction_scission';
}

export interface MreBComponentData {
  name: string;
  badge?: string;
  dims?: string;
  proteins?: string;
  pdb?: string;
  desc?: string;
  role?: string;
  stoichiometry?: string;
  atpTurnover?: string;
  filamentVelocity?: string;
  state?: 'rail_overview' | 'atp_polymerization' | 'membrane_insertion' | 'rodz_coupling' | 'roda_pbp2_propulsion' | 'lateral_wall_synthesis';
}

export interface TourStatus {
  active: boolean;
  playing: boolean;
  stepIndex: number;
  key: string;
  totalSteps: number;
  phase: 'idle' | 'narrating' | 'cooldown' | 'reading';
  cooldownRemaining: number;
  ttsEnabled: boolean;
}
