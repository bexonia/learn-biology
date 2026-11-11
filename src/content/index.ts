import { registerNodeLenses, registerPartLenses } from './registry.js';
import { ANIMAL_NODE_LENSES, ANIMAL_PART_LENSES } from './lenses_animal.js';
import { PLANT_FUNGAL_NODE_LENSES, PLANT_FUNGAL_PART_LENSES } from './lenses_plant_fungal.js';
import { PROKARYOTE_NODE_LENSES, PROKARYOTE_PART_LENSES } from './lenses_prokaryote.js';
import {
  PHAGE_DNA_VIRUS_NODE_LENSES,
  PHAGE_DNA_VIRUS_PART_LENSES
} from './lenses_phage_dna_viruses.js';
import {
  ENVELOPED_VIRUS_NODE_LENSES,
  ENVELOPED_VIRUS_PART_LENSES
} from './lenses_enveloped_viruses.js';

registerNodeLenses(ANIMAL_NODE_LENSES);
registerNodeLenses(PLANT_FUNGAL_NODE_LENSES);
registerNodeLenses(PROKARYOTE_NODE_LENSES);
registerNodeLenses(PHAGE_DNA_VIRUS_NODE_LENSES);
registerNodeLenses(ENVELOPED_VIRUS_NODE_LENSES);

registerPartLenses(ANIMAL_PART_LENSES);
registerPartLenses(PLANT_FUNGAL_PART_LENSES);
registerPartLenses(PROKARYOTE_PART_LENSES);
registerPartLenses(PHAGE_DNA_VIRUS_PART_LENSES);
registerPartLenses(ENVELOPED_VIRUS_PART_LENSES);

export * from './types.js';
export * from './parser.js';
export * from './registry.js';
export {
  ANIMAL_NODE_LENSES,
  ANIMAL_PART_LENSES,
  PLANT_FUNGAL_NODE_LENSES,
  PLANT_FUNGAL_PART_LENSES,
  PROKARYOTE_NODE_LENSES,
  PROKARYOTE_PART_LENSES,
  PHAGE_DNA_VIRUS_NODE_LENSES,
  PHAGE_DNA_VIRUS_PART_LENSES,
  ENVELOPED_VIRUS_NODE_LENSES,
  ENVELOPED_VIRUS_PART_LENSES
};
