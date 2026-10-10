export type ScenarioType = 'cell' | 'motor' | 'ribosome' | 'atp_synthase' | 'complex_i' | 'secyeg' | 'bam' | 'lpt';

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
