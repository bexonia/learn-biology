import { Layer } from "effect";
import { type TourDefinition, type TourShape, TourService, makeTourLayer } from "./tourService.js";
import { adenovirusTour } from "./adenovirus.js";
import { archaeaTour } from "./archaea.js";
import { bacteriophageTour } from "./bacteriophage.js";
import { bacterium_cellTour } from "./bacterium_cell.js";
import { biology_introTour } from "./biology_intro.js";
import { chlamydiaTour } from "./chlamydia.js";
import { coronavirusTour } from "./coronavirus.js";
import { eukaryotic_cellTour } from "./eukaryotic_cell.js";
import { fungal_cellTour } from "./fungal_cell.js";
import { gram_positiveTour } from "./gram_positive.js";
import { hivTour } from "./hiv.js";
import { mycoplasmaTour } from "./mycoplasma.js";
import { parameciumTour } from "./paramecium.js";
import { plant_cellTour } from "./plant_cell.js";
import { plasmodiumTour } from "./plasmodium.js";
import { rickettsiaTour } from "./rickettsia.js";
import { scale_biomoleculesTour } from "./scale_biomolecules.js";
import { tmvTour } from "./tmv.js";
import { virusesTour } from "./viruses.js";

export const ALL_TOURS: Record<string, TourDefinition> = {
  biology_intro: biology_introTour,
  scale_biomolecules: scale_biomoleculesTour,
  adenovirus: adenovirusTour,
  archaea: archaeaTour,
  bacteriophage: bacteriophageTour,
  bacterium: bacterium_cellTour,
  chlamydia: chlamydiaTour,
  coronavirus: coronavirusTour,
  eukaryotic: eukaryotic_cellTour,
  fungal: fungal_cellTour,
  gram_positive: gram_positiveTour,
  hiv: hivTour,
  mycoplasma: mycoplasmaTour,
  paramecium: parameciumTour,
  plant: plant_cellTour,
  plasmodium: plasmodiumTour,
  rickettsia: rickettsiaTour,
  tmv: tmvTour,
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
  mycoplasmaTour,
  chlamydiaTour,
  rickettsiaTour,
};
export * from "./tour_personas.js";
