import { Layer } from "effect";
import { type TourDefinition, type TourShape, TourService, makeTourLayer } from "./tourService.js";
import { adenovirusTour } from "./adenovirus.js";
import { archaeaTour } from "./archaea.js";
import { bacteriophageTour } from "./bacteriophage.js";
import { bacterium_cellTour } from "./bacterium_cell.js";
import { BIOENERGETICS_TOUR } from "./bioenergetics.js";
import { biology_introTour } from "./biology_intro.js";
import { cell_divisionTour } from "./cell_division.js";
import { CENTRAL_DOGMA_TOUR } from "./central_dogma.js";
import { chlamydiaTour } from "./chlamydia.js";
import { coronavirusTour } from "./coronavirus.js";
import { eukaryotic_cellTour } from "./eukaryotic_cell.js";
import { fungal_cellTour } from "./fungal_cell.js";
import { gram_positiveTour } from "./gram_positive.js";
import { hivTour } from "./hiv.js";
import { MEMBRANE_TRANSPORT_TOUR } from "./membrane_transport.js";
import { mimivirusTour } from "./mimivirus.js";
import { mycoplasmaTour } from "./mycoplasma.js";
import { parameciumTour } from "./paramecium.js";
import { plant_cellTour } from "./plant_cell.js";
import { plasmodiumTour } from "./plasmodium.js";
import { prionTour } from "./prion.js";
import { rickettsiaTour } from "./rickettsia.js";
import { scale_biomoleculesTour } from "./scale_biomolecules.js";
import { tmvTour } from "./tmv.js";
import { viroidTour } from "./viroid.js";
import { virusesTour } from "./viruses.js";

export const ALL_TOURS: Record<string, TourDefinition> = {
  biology_intro: biology_introTour,
  scale_biomolecules: scale_biomoleculesTour,
  adenovirus: adenovirusTour,
  archaea: archaeaTour,
  bacteriophage: bacteriophageTour,
  bacterium: bacterium_cellTour,
  bioenergetics: BIOENERGETICS_TOUR,
  cell_division: cell_divisionTour,
  central_dogma: CENTRAL_DOGMA_TOUR,
  chlamydia: chlamydiaTour,
  coronavirus: coronavirusTour,
  eukaryotic: eukaryotic_cellTour,
  fungal: fungal_cellTour,
  gram_positive: gram_positiveTour,
  hiv: hivTour,
  membrane_transport: MEMBRANE_TRANSPORT_TOUR,
  mimivirus: mimivirusTour,
  mycoplasma: mycoplasmaTour,
  paramecium: parameciumTour,
  plant: plant_cellTour,
  plasmodium: plasmodiumTour,
  prion: prionTour,
  rickettsia: rickettsiaTour,
  tmv: tmvTour,
  viroid: viroidTour,
  viruses: virusesTour,
};

export const TourLive: Layer.Layer<TourService> = makeTourLayer(ALL_TOURS);
export {
  TourService,
  type TourShape,
  type TourDefinition,
  scale_biomoleculesTour,
  archaeaTour,
  gram_positiveTour,
  parameciumTour,
  plasmodiumTour,
  mimivirusTour,
  viroidTour,
  prionTour,
  cell_divisionTour,
  CENTRAL_DOGMA_TOUR,
  BIOENERGETICS_TOUR,
  MEMBRANE_TRANSPORT_TOUR,
  mycoplasmaTour,
  chlamydiaTour,
  rickettsiaTour,
};
export * from "./tour_personas.js";
