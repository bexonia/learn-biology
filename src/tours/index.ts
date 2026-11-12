import { Layer } from "effect";
import { type TourDefinition, type TourShape, TourService, makeTourLayer } from "./tourService.js";
import { adenovirusTour } from "./adenovirus.js";
import { bacteriophageTour } from "./bacteriophage.js";
import { bacterium_cellTour } from "./bacterium_cell.js";
import { biology_introTour } from "./biology_intro.js";
import { coronavirusTour } from "./coronavirus.js";
import { eukaryotic_cellTour } from "./eukaryotic_cell.js";
import { fungal_cellTour } from "./fungal_cell.js";
import { hivTour } from "./hiv.js";
import { plant_cellTour } from "./plant_cell.js";
import { tmvTour } from "./tmv.js";
import { virusesTour } from "./viruses.js";

export const ALL_TOURS: Record<string, TourDefinition> = {
  biology_intro: biology_introTour,
  adenovirus: adenovirusTour,
  bacteriophage: bacteriophageTour,
  bacterium: bacterium_cellTour,
  coronavirus: coronavirusTour,
  eukaryotic: eukaryotic_cellTour,
  fungal: fungal_cellTour,
  hiv: hivTour,
  plant: plant_cellTour,
  tmv: tmvTour,
  viruses: virusesTour,
};

export const TourLive: Layer.Layer<TourService> = makeTourLayer(ALL_TOURS);
export { TourService, type TourShape, type TourDefinition };
export * from "./tour_personas.js";
