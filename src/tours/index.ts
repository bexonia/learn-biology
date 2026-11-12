import { Layer } from "effect";
import { type TourDefinition, type TourShape, TourService, makeTourLayer } from "./tourService.js";
import { adenovirusTour } from "./adenovirus.js";
import { bacteriophageTour } from "./bacteriophage.js";
import { bacterium_cellTour } from "./bacterium_cell.js";
import { biology_introTour } from "./biology_intro.js";
import { chlamydiaTour } from "./chlamydia.js";
import { coronavirusTour } from "./coronavirus.js";
import { eukaryotic_cellTour } from "./eukaryotic_cell.js";
import { fungal_cellTour } from "./fungal_cell.js";
import { hivTour } from "./hiv.js";
import { mycoplasmaTour } from "./mycoplasma.js";
import { plant_cellTour } from "./plant_cell.js";
import { rickettsiaTour } from "./rickettsia.js";
import { tmvTour } from "./tmv.js";
import { virusesTour } from "./viruses.js";

export const ALL_TOURS: Record<string, TourDefinition> = {
  biology_intro: biology_introTour,
  adenovirus: adenovirusTour,
  bacteriophage: bacteriophageTour,
  bacterium: bacterium_cellTour,
  chlamydia: chlamydiaTour,
  coronavirus: coronavirusTour,
  eukaryotic: eukaryotic_cellTour,
  fungal: fungal_cellTour,
  hiv: hivTour,
  mycoplasma: mycoplasmaTour,
  plant: plant_cellTour,
  rickettsia: rickettsiaTour,
  tmv: tmvTour,
  viruses: virusesTour,
};

export const TourLive: Layer.Layer<TourService> = makeTourLayer(ALL_TOURS);
export {
  TourService,
  type TourShape,
  type TourDefinition,
  mycoplasmaTour,
  chlamydiaTour,
  rickettsiaTour,
};
export * from "./tour_personas.js";
