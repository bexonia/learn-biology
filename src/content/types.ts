export type ExplanationMode = 'simple' | 'story' | 'blueprint' | 'scientific';

export const EXPLANATION_MODES: readonly ExplanationMode[] = [
  'simple',
  'story',
  'blueprint',
  'scientific'
] as const;

export interface NodeLensEntry {
  /** 1-2 crisp everyday sentences (10-second intuition, zero heavy jargon; supports [[Label|nodeId]]) */
  readonly simple: string;
  /** Original, vivid, witty narrative story weaving origin, action inside, and downstream impact (supports [[Label|nodeId]]) */
  readonly story: string;
  /** Clean systems-circuit summary: Role · Arrives from · Inside · Delivers to (supports [[Label|nodeId]]) */
  readonly blueprint: string;
  /** High-precision quantitative biochemical & structural reference (dimensions, enzymes, stoichiometry, PDB IDs) */
  readonly scientific: string;
}

export interface BilingualNodeLens {
  readonly en: NodeLensEntry;
  readonly es: NodeLensEntry;
}

export interface PartFlowLink {
  /** Explorer node ID to navigate to on click (e.g. 'cytosol', 'ribosome', 'plasma-membrane') */
  readonly nodeId: string;
  /** Display label */
  readonly label: string;
  /** Optional short cargo tag (e.g. 'Pyruvate', 'ATP', 'O₂') */
  readonly cargo?: string;
}

export interface PartBlueprintLens {
  readonly role: string;
  readonly arrivesFrom: string;
  readonly inside: string;
  readonly deliversTo: string;
  readonly loop?: string;
}

export interface PartLensEntry {
  /** Evocative chapter subtitle (e.g. 'The Captive Furnace' / 'La fragua cautiva') */
  readonly subtitle: string;
  /** 1-2 sentence everyday intuition (supports [[Label|nodeId]]) */
  readonly simple: string;
  /** Flowing, connected narrative story weaving upstream arrival -> internal drama -> downstream consumer handoff (supports [[Label|nodeId]]) */
  readonly story: string;
  /** Structured systems-engineering I/O circuit (supports [[Label|nodeId]]) */
  readonly blueprint: PartBlueprintLens;
  /** Direct, dense biochemical/biophysical reference */
  readonly scientific: string;
  /** Interactive upstream supplier chips */
  readonly from?: readonly PartFlowLink[];
  /** Interactive downstream consumer chips */
  readonly to?: readonly PartFlowLink[];
}

export interface BilingualPartLens {
  readonly en: PartLensEntry;
  readonly es: PartLensEntry;
}

export type NodeLensMap = Record<string, BilingualNodeLens>;
export type PagePartLensMap = Record<string, Record<string, BilingualPartLens>>;
