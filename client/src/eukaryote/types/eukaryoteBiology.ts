export type EukaryoteScenarioId =
  | 'eukaryotic_animal_cell'
  | 'kingdom_cell_comparison'
  | 'ecm_integrin_focal_adhesion'
  | 'plasma_membrane_lipid_raft'
  | 'ion_channels_na_k_pump'
  | 'gpcr_rtk_signaling'
  | 'clathrin_endocytosis_snare'
  | 'cell_junctions_plasmodesmata'
  | 'actin_myosin_sarcomere'
  | 'microtubules_centrosome_motors'
  | 'intermediate_filaments_lamins'
  | 'eukaryotic_cilium_axoneme'
  | 'rough_er_sec61_ost'
  | 'smooth_er_ca_pump_lipids'
  | 'golgi_coatomer_trafficking'
  | 'lysosome_v_atpase_autophagy'
  | 'peroxisome_catalase_beta_ox'
  | 'plant_vacuole_tonoplast'
  | 'mitochondrion_cristae_mtdna'
  | 'mitochondrial_respirasome_etc'
  | 'mitochondrial_atp_synthase_dimer'
  | 'mitochondrial_tim_tom_apoptosis'
  | 'chloroplast_thylakoid_cpdna'
  | 'photosystem_ii_i_z_scheme'
  | 'calvin_cycle_rubisco_16mer'
  | 'nucleus_envelope_nucleolus'
  | 'nuclear_pore_complex_npc'
  | 'chromatin_nucleosome_cohesin_rings'
  | 'eukaryotic_replisome_cmg_pcna'
  | 'pol_ii_mediator_preinitiation'
  | 'spliceosome_rna_lariat_rings'
  | 'eukaryotic_80s_ribosome_polyrna_loop'
  | 'risc_argonaute_dicer_rna_silencing'
  | 'chaperonin_tric_26s_proteasome'
  | 'mitotic_spindle_kinetochore_escrt'
  | 'eukaryotic_monomers_dna_rna_rings';

export interface EukaryotePieceConfig {
  meshName: string;
  name: string;
  badge: string;
  color: string;
  desc: string;
  dissocVector: [number, number, number];
}

export interface EukaryoteStageConfig {
  step: number;
  title: string;
  desc: string;
  spoken: string;
  color: string;
  targetPiece: string;
}

export interface EukaryoteResourceLink {
  title: string;
  url: string;
}

export interface EukaryoteScenarioConfig {
  num: string;
  id: EukaryoteScenarioId;
  folder: string;
  tier: string;
  title: string;
  subtitle: string;
  analogy?: string;
  scaleTag: string;
  glb: string;
  pdb: string;
  pronounce: string;
  sliderLabel: string;
  sliderUnit: string;
  sliderMin: number;
  sliderMax: number;
  sliderDefault: number;
  inhibitorBtn: [string, string];
  energyBtn: [string, string];
  upstream: string;
  coupling: string;
  downstream: string;
  kinetics: [string, string][];
  resources: EukaryoteResourceLink[];
  pieces: EukaryotePieceConfig[];
  stages: EukaryoteStageConfig[];
}
