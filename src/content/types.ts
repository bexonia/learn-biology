export type ExplanationMode = 'simple' | 'story' | 'blueprint' | 'scientific';

export const EXPLANATION_MODES: readonly ExplanationMode[] = [
  'simple',
  'story',
  'blueprint',
  'scientific'
] as const;

/**
 * Three audience-tailored Guided Tour content personas:
 * - `pop`: Pop-Culture & Storyteller (`simple` & `story` modes; anime, cartoon & movie analogies)
 * - `blueprint`: Systems Engineer (`blueprint` mode; I/O ports, rotary turbines, buses, state machines)
 * - `scientific`: Molecular Biologist (`scientific` mode; quantitative nm/µm, stoichiometry, Δp, PDB IDs)
 */
export type TourPersona = 'pop' | 'blueprint' | 'scientific';

export const TOUR_PERSONAS: readonly TourPersona[] = ['pop', 'blueprint', 'scientific'] as const;

export const MODE_TO_TOUR_PERSONA: Readonly<Record<ExplanationMode, TourPersona>> = {
  simple: 'pop',
  story: 'pop',
  blueprint: 'blueprint',
  scientific: 'scientific'
};

export function isValidTourPersona(val: unknown): val is TourPersona {
  return val === 'pop' || val === 'blueprint' || val === 'scientific';
}

export function resolveTourPersona(mode: ExplanationMode): TourPersona {
  return MODE_TO_TOUR_PERSONA[mode];
}

/**
 * Three Public-Domain (CC0 / LibriVox) English narrator voices:
 * - `v1`: Voice 1 — Molecular Biologist preset (`scientific` mode)
 * - `v2`: Voice 2 — Systems Engineer preset (`blueprint` mode)
 * - `v3`: Voice 3 — Pop-Culture Guide preset (`simple` & `story` modes)
 */
export type EnglishVoiceId = 'v1' | 'v2' | 'v3';

export type VoicePreference = 'auto' | EnglishVoiceId;

export const ENGLISH_VOICE_IDS: readonly EnglishVoiceId[] = ['v1', 'v2', 'v3'] as const;

export const VOICE_PREFERENCES: readonly VoicePreference[] = ['auto', 'v1', 'v2', 'v3'] as const;

export const PRESET_VOICE_BY_MODE: Readonly<Record<ExplanationMode, EnglishVoiceId>> = {
  simple: 'v3',
  story: 'v3',
  blueprint: 'v2',
  scientific: 'v1'
};

export const DEFAULT_MODE_BY_ENGLISH_VOICE: Readonly<Record<EnglishVoiceId, ExplanationMode>> = {
  v1: 'scientific',
  v2: 'blueprint',
  v3: 'story'
};

export function isValidEnglishVoiceId(val: unknown): val is EnglishVoiceId {
  return val === 'v1' || val === 'v2' || val === 'v3';
}

export function isValidVoicePreference(val: unknown): val is VoicePreference {
  return val === 'auto' || isValidEnglishVoiceId(val);
}

export function resolveEnglishVoice(mode: ExplanationMode, pref: VoicePreference): EnglishVoiceId {
  return pref === 'auto' ? PRESET_VOICE_BY_MODE[mode] : pref;
}

/**
 * Two Public-Domain (CC0) Spanish narrator voices:
 * - `latam`: Latinoamérica — Guía Pop & Historia (Common Voice CC0; preset for `simple` & `story`)
 * - `spain`: España — Ingeniero & Científico (Common Voice CC0; preset for `blueprint` & `scientific`)
 */
export type SpanishVoiceId = 'latam' | 'spain';

export type SpanishVoicePreference = 'auto' | SpanishVoiceId;

export const SPANISH_VOICE_IDS: readonly SpanishVoiceId[] = ['latam', 'spain'] as const;

export const SPANISH_VOICE_PREFERENCES: readonly SpanishVoicePreference[] = [
  'auto',
  'latam',
  'spain'
] as const;

export const PRESET_SPANISH_VOICE_BY_MODE: Readonly<Record<ExplanationMode, SpanishVoiceId>> = {
  simple: 'latam',
  story: 'latam',
  blueprint: 'spain',
  scientific: 'spain'
};

export const DEFAULT_MODE_BY_SPANISH_VOICE: Readonly<Record<SpanishVoiceId, ExplanationMode>> = {
  latam: 'story',
  spain: 'scientific'
};

export function isValidSpanishVoiceId(val: unknown): val is SpanishVoiceId {
  return val === 'latam' || val === 'spain';
}

export function isValidSpanishVoicePreference(val: unknown): val is SpanishVoicePreference {
  return val === 'auto' || isValidSpanishVoiceId(val);
}

export function resolveSpanishVoice(
  mode: ExplanationMode,
  pref: SpanishVoicePreference
): SpanishVoiceId {
  return pref === 'auto' ? PRESET_SPANISH_VOICE_BY_MODE[mode] : pref;
}

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
