export type ScenarioType = 'cell' | 'motor' | 'ribosome';

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
