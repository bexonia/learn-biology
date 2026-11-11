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
  'bacteriophage_realistic.html': [
    'capsid', 'soc', 'vertex', 'dna', 'core', 'portal', 'collar', 'sheath', 'tube',
    'baseplate', 'stf', 'needle', 'ltf', 'om', 'porin', 'pg', 'im', 'rnap', 'ribosome'
  ],
  'coronavirus_realistic.html': [
    'spike', 'membrane', 'mprot', 'echan', 'ncap', 'rna', 'ace2', 'hostmem', 'rdrp'
  ],
  'fungal_cell_realistic.html': [
    'wall', 'scar', 'membrane', 'pma1', 'bud', 'septin', 'vacuole', 'nucleus', 'spb',
    'chromatin', 'mrna', 'nucleolus', 'rrna', 'nucleoplasm', 'er', 'erg11', 'golgi',
    'mito', 'perox', 'lipid', 'vesicle', 'actin', 'ribosome', 'ferm', 'cytosol'
  ],
  'hiv_realistic.html': [
    'env', 'membrane', 'ma', 'capsid', 'pentamer', 'rna', 'rt', 'int', 'cd4'
  ],
  'plant_cell_realistic.html': [
    'wall', 'membrane', 'pd', 'vacuole', 'strand', 'nucleus', 'chromatin', 'mrna',
    'nucleolus', 'rrna', 'nucleoplasm', 'chloro', 'thyl', 'starch', 'psii', 'psi',
    'b6f', 'catp', 'rubisco', 'mito', 'perox', 'golgi', 'vesicle', 'er', 'ribosome',
    'mt', 'actin', 'csc', 'cytosol'
  ],
  'prokaryote_cell_realistic.html': [
    'om', 'porin', 'pump', 'pg', 'im', 'etc', 'atps', 'transport', 'flag', 'pili',
    'chemo', 'mreb', 'dna', 'hu', 'fork', 'rnap', 'mrna', 'ribosome', 'trna', 'cyto', 'glycogen'
  ],
  'tmv_realistic.html': ['coat', 'disc', 'rna', 'channel', 'ribo', 'mp']
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
