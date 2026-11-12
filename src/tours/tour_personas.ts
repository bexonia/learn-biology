import {
  MODE_TO_TOUR_PERSONA,
  type ExplanationMode,
  type TourPersona
} from '../content/types.js';
import { EUKARYOTE_TOUR_PERSONAS } from './personas_eukaryote.js';
import { INTRO_TOUR_PERSONAS } from './personas_intro.js';
import { PROKARYOTE_PHAGE_TOUR_PERSONAS } from './personas_prokaryote_phage.js';
import { VIRUS_TOUR_PERSONAS } from './personas_viruses.js';

export interface PersonaCueTriplet {
  /** Everyday newcomer script (active in `simple` & `story` modes; sparse analogies on complex mechanisms only) */
  readonly pop: string;
  /** Systems-engineering script: I/O ports, rotary turbines, buses, state machines (active in `blueprint` mode) */
  readonly blueprint: string;
  /** High-density quantitative molecular biology script: nm/µm, stoichiometry, Δp, PDB IDs (active in `scientific` mode) */
  readonly scientific: string;
}

export interface BilingualCuePersonas {
  readonly en: PersonaCueTriplet;
  readonly es: PersonaCueTriplet;
}

/** Map of tourRoot -> cueId -> BilingualCuePersonas */
export type TourPersonaMap = Record<string, Record<string, BilingualCuePersonas>>;

export const TOUR_PERSONA_REGISTRY: TourPersonaMap = {
  ...INTRO_TOUR_PERSONAS,
  ...EUKARYOTE_TOUR_PERSONAS,
  ...PROKARYOTE_PHAGE_TOUR_PERSONAS,
  ...VIRUS_TOUR_PERSONAS
};

export function getTourPersonaEntry(
  tourRoot: string | null | undefined,
  cueId: string | null | undefined
): BilingualCuePersonas | null {
  if (!tourRoot || !cueId) return null;
  return TOUR_PERSONA_REGISTRY[tourRoot]?.[cueId] ?? null;
}

export function getTourPersonaCueText(
  tourRoot: string | null | undefined,
  cueId: string | null | undefined,
  locale: string,
  personaOrMode: TourPersona | ExplanationMode,
  fallback: string
): string {
  const entry = getTourPersonaEntry(tourRoot, cueId);
  if (!entry) return fallback;
  const persona: TourPersona =
    personaOrMode === 'pop' || personaOrMode === 'blueprint' || personaOrMode === 'scientific'
      ? personaOrMode
      : MODE_TO_TOUR_PERSONA[personaOrMode];
  const langKey = locale.trim().toLowerCase().startsWith('es') ? 'es' : 'en';
  return entry[langKey][persona] || fallback;
}

export {
  INTRO_TOUR_PERSONAS,
  EUKARYOTE_TOUR_PERSONAS,
  PROKARYOTE_PHAGE_TOUR_PERSONAS,
  VIRUS_TOUR_PERSONAS
};
