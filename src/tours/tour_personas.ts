import {
  MODE_TO_TOUR_PERSONA,
  type ExplanationMode,
  type TourPersona
} from '../content/types.js';
import { EUKARYOTE_TOUR_PERSONAS } from './personas_eukaryote.js';
import { INTRO_TOUR_PERSONAS } from './personas_intro.js';
import { PERSONAS_ARCHAEA } from './personas_archaea.js';
import { PERSONAS_BIOENERGETICS } from './personas_bioenergetics.js';
import { PERSONAS_CELL_DIVISION } from './personas_cell_division.js';
import { PERSONAS_CENTRAL_DOGMA } from './personas_central_dogma.js';
import { PERSONAS_EDGE_OF_LIFE } from './personas_edge_of_life.js';
import { PERSONAS_GRAM_POSITIVE } from './personas_gram_positive.js';
import { PERSONAS_IMMUNE_MEDICINE } from './personas_immune_medicine.js';
import { PERSONAS_PARASITIC_CELLS } from './personas_parasitic_cells.js';
import { PERSONAS_PROTISTS } from './personas_protists.js';
import { PERSONAS_SCALE_BIOMOLECULES } from './personas_scale_biomolecules.js';
import { PERSONAS_SPECIALIZED_CELLS } from './personas_specialized_cells.js';
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
  ...PERSONAS_SCALE_BIOMOLECULES,
  ...PERSONAS_ARCHAEA,
  ...PERSONAS_GRAM_POSITIVE,
  ...PERSONAS_PROTISTS,
  ...PERSONAS_EDGE_OF_LIFE,
  ...PERSONAS_CELL_DIVISION,
  ...PERSONAS_CENTRAL_DOGMA,
  ...PERSONAS_BIOENERGETICS,
  ...PERSONAS_SPECIALIZED_CELLS,
  ...PERSONAS_IMMUNE_MEDICINE,
  ...EUKARYOTE_TOUR_PERSONAS,
  ...PROKARYOTE_PHAGE_TOUR_PERSONAS,
  ...PERSONAS_PARASITIC_CELLS,
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
  PERSONAS_SCALE_BIOMOLECULES,
  PERSONAS_ARCHAEA,
  PERSONAS_GRAM_POSITIVE,
  PERSONAS_PROTISTS,
  PERSONAS_EDGE_OF_LIFE,
  PERSONAS_CELL_DIVISION,
  PERSONAS_CENTRAL_DOGMA,
  PERSONAS_BIOENERGETICS,
  PERSONAS_SPECIALIZED_CELLS,
  PERSONAS_IMMUNE_MEDICINE,
  EUKARYOTE_TOUR_PERSONAS,
  PROKARYOTE_PHAGE_TOUR_PERSONAS,
  PERSONAS_PARASITIC_CELLS,
  VIRUS_TOUR_PERSONAS
};
