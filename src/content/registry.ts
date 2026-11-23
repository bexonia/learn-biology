import type {
  BilingualNodeLens,
  BilingualPartLens,
  ExplanationMode,
  NodeLensEntry,
  NodeLensMap,
  PagePartLensMap,
  PartLensEntry
} from './types.js';

export const NODE_LENS_REGISTRY: Record<string, BilingualNodeLens> = {};
export const PART_LENS_REGISTRY: Record<string, Record<string, BilingualPartLens>> = {};

export const STANDALONE_PAGE_PART_KEYS: Record<string, readonly string[]> = {
  'adenovirus_realistic.html': ['hexon', 'penton', 'fiber', 'cement', 'dna', 'core', 'car', 'host'],
  'animal_cell_realistic.html': [
    'membrane', 'nucleus', 'chromatin', 'mrna', 'nucleolus', 'rrna', 'nucleoplasm',
    'rer', 'ribosome', 'ser', 'golgi', 'mito', 'lyso', 'perox', 'vesicle', 'lipid',
    'centro', 'mt', 'actin', 'if', 'cilium', 'villi', 'cytosol'
  ],
  'archaea_realistic.html': [
    'slayer', 'tetraether', 'tentacle', 'escrt', 'extremophile_shell', 'archaellum',
    'arli', 'bacteriorhodopsin', 'a_atps', 'dna', 'histone', 'rnap', 'mrna',
    'ribosome', 'lokiactin', 'symbiont', 'synapse', 'h2_flow', 'atp_export', 'ether_bond'
  ],
  'bacteriophage_realistic.html': [
    'capsid', 'soc', 'vertex', 'dna', 'core', 'portal', 'collar', 'sheath', 'tube',
    'baseplate', 'stf', 'needle', 'ltf', 'om', 'porin', 'pg', 'im', 'rnap', 'ribosome'
  ],
  'bioenergetics_realistic.html': [
    'chloroplast_hull', 'thylakoid', 'psii', 'cyt_b6f', 'psi', 'cf1cf0', 'rubisco',
    'glycolysis', 'mito_hull', 'krebs_cycle', 'complex_i', 'complex_ii', 'complex_iii',
    'complex_iv', 'f1f0_atps', 'proton_grad', 'energy_carriers', 'cofactor_atoms'
  ],
  'cell_division_realistic.html': [
    'cell_cortex', 'nuclear_env', 'centrosome', 'spindle_mt', 'kinesin5',
    'sister_chromatids', 'condensin', 'cohesin', 'kinetochore', 'separase',
    'contractile_ring', 'bivalent', 'synaptonemal', 'spo11', 'rad51',
    'chiasma', 'holliday', 'ftsz_ring', 'par_segregation', 'dna_basepair'
  ],
  'central_dogma_realistic.html': [
    'chromatin', 'helicase', 'pol_delta', 'rna_pol2', 'pre_mrna', 'spliceosome',
    'intron_lariat', 'exon_junction', 'npc', 'mature_mrna', 'ribosome_80s', 'trna_ape',
    'polypeptide', 'polysome', 'hsp70', 'tric_groel', 'hb_wildtype', 'hb_sickle_fiber',
    'acrb_pocket', 'codon_atoms'
  ],
  'chlamydia_realistic.html': [
    'inclusion', 'inc', 'golgi_lip', 'host_cyto', 'eb_om', 'momp', 'eb_dna', 't3ss',
    'tarP', 'rb_om', 'rb_im', 'septum', 'mreb', 'npt1', 'npt2', 'rb_dna', 'rnap',
    'mrna', 'ribosome', 'glycogen'
  ],
  'coronavirus_realistic.html': [
    'spike', 'membrane', 'mprot', 'echan', 'ncap', 'rna', 'ace2', 'hostmem', 'rdrp'
  ],
  'fungal_cell_realistic.html': [
    'wall', 'scar', 'membrane', 'pma1', 'bud', 'septin', 'vacuole', 'nucleus', 'spb',
    'chromatin', 'mrna', 'nucleolus', 'rrna', 'nucleoplasm', 'er', 'erg11', 'golgi',
    'mito', 'perox', 'lipid', 'vesicle', 'actin', 'ribosome', 'ferm', 'cytosol'
  ],
  'gram_positive_realistic.html': [
    'pg_wall', 'teichoic', 'pm', 'ecoli_strip', 'pbp', 'sortase', 'septum', 'spoiiie',
    'forespore', 'dna', 'ribosome', 'exosporium', 'coat', 'cortex', 'germ_wall',
    'spore_im', 'core', 'ca_dpa', 'sasp_dna', 'crosslink'
  ],
  'hiv_realistic.html': [
    'env', 'membrane', 'ma', 'capsid', 'pentamer', 'rna', 'rt', 'int', 'cd4'
  ],
  'immune_defense_realistic.html': [
    'macrophage', 'actin_pseudopod', 'ecoli_target', 'phagosome', 'lysosome_ros',
    'mhcii_display', 'igg_antibody', 'fab_arms', 'fc_stem', 'spike_rbd',
    'ace2_blocked', 'virion_target', 'cd8_tcell', 'tcr_mhci', 'viral_peptide',
    'perforin_pore', 'granzyme_b', 'immune_atoms'
  ],
  'membrane_transport_realistic.html': [
    'animal_cell', 'plant_cell', 'cell_wall', 'vacuole', 'bilayer', 'simple_diff',
    'aquaporin', 'water_flow', 'glut1', 'nak_pump', 'atp_hydrolysis', 'membrane_voltage',
    'clathrin_pit', 'snare_fusion', 'vesicle_cargo', 'ion_atoms'
  ],
  'mimivirus_realistic.html': [
    'fibers', 'capsid', 'stargate', 'inner_mem', 'genomic_fiber', 'dsdna', 'tyrrs',
    'viral_rnap', 'capping_enz', 'phagosome', 'amoeba_mem', 'viral_factory',
    'host_ribo', 'myco_ref', 'atp_pool', 'dna_atoms'
  ],
  'muscle_realistic.html': [
    'sarcolemma', 'peripheral_nuclei', 't_tubule', 'sr_network', 'ryr1_channel',
    'serca1a_pump', 'myofibril', 'z_disc', 'i_band', 'a_band', 'h_zone', 'm_line',
    'titin_spring', 'myosin_thick', 'myosin_head', 'actin_thin', 'troponin_tropo',
    'muscle_atoms'
  ],
  'mycoplasma_realistic.html': [
    'membrane', 'sterol', 'lipo', 'nap', 'sialo', 'cilium', 'button', 'rod', 'wheel',
    'gliding', 'dna', 'hu', 'fork', 'rnap', 'mrna', 'ribosome', 'import', 'glycolysis'
  ],
  'neuron_realistic.html': [
    'dendrites', 'soma', 'nucleus_h3k27ac', 'axon_hillock', 'myelin_sheath',
    'node_ranvier', 'nav17', 'kv12', 'nak_reset', 'axon_mt', 'terminal_bouton',
    'cav_channel', 'synaptic_vesicle', 'snare_zipper', 'synaptic_cleft',
    'ampa_receptor', 'nachr_receptor', 'neuro_atoms'
  ],
  'paramecium_realistic.html': [
    'pellicle', 'cilia', 'kinetosome', 'trichocyst', 'oral_groove', 'cytostome',
    'food_vacuole', 'cytoproct', 'contractile_vacuole', 'collecting_canals', 'vatpase',
    'macronucleus', 'micronucleus', 'mito', 'ribosome_80s', 'axoneme', 'dynein', 'tubulin'
  ],
  'pharmacology_lab.html': [
    'bench_ecoli', 'bench_myco', 'bench_chlam', 'bench_virus', 'bench_human',
    'pg_wall', 'pbp_penicillin', 'ribo_70s', 'macrolide_tunnel', 'tetra_asite',
    'ribo_80s_safe', 'rdrp_remdesivir', 'hiv_rt_azt', 'mrna_lnp',
    'endosome_escape', 'vaccine_mrna', 'intact_nucleus', 'drug_atoms'
  ],
  'plant_cell_realistic.html': [
    'wall', 'membrane', 'pd', 'vacuole', 'strand', 'nucleus', 'chromatin', 'mrna',
    'nucleolus', 'rrna', 'nucleoplasm', 'chloro', 'thyl', 'starch', 'psii', 'psi',
    'b6f', 'catp', 'rubisco', 'mito', 'perox', 'golgi', 'vesicle', 'er', 'ribosome',
    'mt', 'actin', 'csc', 'cytosol'
  ],
  'plasmodium_realistic.html': [
    'rbc', 'pvm', 'imc', 'apical_complex', 'rhoptries', 'micronemes', 'moving_junction',
    'pfrh5', 'glideosome', 'actin', 'nucleus', 'ribosome_80s', 'mito', 'apicoplast',
    'apicoplast_membranes', 'apicoplast_dna', 'digestive_vacuole', 'hemoglobin',
    'hemozoin', 'iron_atom'
  ],
  'prion_realistic.html': [
    'lipid_raft', 'gpi_anchor', 'prpc', 'helices_h123', 'beta_ribbon', 'nglycans',
    'disulfide', 'prpsc_fibril', 'piribs_core', 'beta_rungs', 'steric_zipper',
    'template_dock', 'fragmentation', 'amide_atoms'
  ],
  'prokaryote_cell_realistic.html': [
    'om', 'porin', 'pump', 'pg', 'im', 'etc', 'atps', 'transport', 'flag', 'pili',
    'chemo', 'mreb', 'dna', 'hu', 'fork', 'rnap', 'mrna', 'ribosome', 'trna', 'cyto', 'glycogen'
  ],
  'rickettsia_realistic.html': [
    'slime', 'om', 'omp', 'pg', 'im', 'tlc1', 'etc', 'atps', 't4ss', 'pld', 'dna',
    'rnap', 'ribosome', 'sca2', 'comet', 'g_actin', 'host_mito', 'host_mem'
  ],
  'scale_explorer.html': [
    'plant_100um', 'animal_20um', 'yeast_5um', 'ecoli_2um', 'myco_300nm',
    'virus_100nm', 'ribo_25nm', 'enzyme_10nm', 'dna_2nm', 'monomer_1nm', 'atom_01nm'
  ],
  'tmv_realistic.html': ['coat', 'disc', 'rna', 'channel', 'ribo', 'mp'],
  'viroid_realistic.html': [
    'tl_domain', 'p_domain', 'c_domain', 'v_domain', 'tr_domain', 'loop_e',
    'ccr_hairpin', 'wobble_gu', 'pol2', 'tfiiia', 'minus_rna', 'plus_rna',
    'ligase', 'rna_atoms'
  ]
};

export function registerNodeLenses(map: NodeLensMap): void {
  for (const [id, entry] of Object.entries(map)) {
    NODE_LENS_REGISTRY[id] = entry;
  }
}

export function registerPartLenses(map: PagePartLensMap): void {
  for (const [page, parts] of Object.entries(map)) {
    const target = (PART_LENS_REGISTRY[page] ??= {});
    for (const [partKey, entry] of Object.entries(parts)) {
      target[partKey] = entry;
    }
  }
}

export function getNodeLensEntry(
  nodeId: string,
  locale: string
): NodeLensEntry | null {
  const rec = NODE_LENS_REGISTRY[nodeId];
  if (!rec) return null;
  return locale === 'es' ? rec.es : rec.en;
}

export function getNodeLensText(
  nodeId: string,
  locale: string,
  mode: ExplanationMode,
  fallback: string
): string {
  const entry = getNodeLensEntry(nodeId, locale);
  if (!entry) return fallback;
  return entry[mode] || entry.story || fallback;
}

export function getPartLensEntry(
  page: string,
  partKey: string,
  locale: string
): PartLensEntry | null {
  const rec = PART_LENS_REGISTRY[page]?.[partKey];
  if (!rec) return null;
  return locale === 'es' ? rec.es : rec.en;
}
