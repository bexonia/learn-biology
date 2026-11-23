import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Stage 0.2 (`scale-explorer` / `scale_biomoleculesTour`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 40 of 42 cues (95.2%) match base `cue.text` directly in `en.pop` with direct,
 *   distraction-free explanations in both EN and ES.
 * - Exactly 2 cues (`scale.ch1.s0.02` and `scale.ch2.s0.02`) use grounded everyday
 *   mental models for counterintuitive concepts:
 *   1. `scale.ch1.s0.02`: 6 orders of magnitude (100 um plant cell vs 100 nm virus:
 *      1,000x width / billion-fold volume, like a city block to a single pebble).
 *   2. `scale.ch2.s0.02`: amphipathic phospholipid self-assembly (water-loving heads
 *      facing out and water-fearing tails tucking inward like raincoats shielding a dry core).
 */
export const PERSONAS_SCALE_BIOMOLECULES: TourPersonaMap = {
  "scale-explorer": {
    "scale.ch0.s0.01": {
      "en": {
        "pop": "From a 100 um [[plant cell|plant_100um]] to a 0.1 nm [[atom|atom_01nm]], life spans six powers of ten.",
        "blueprint": "Traverse six logarithmic decades from a 100 um [[plant chassis|plant_100um]] down to a 0.1 nm [[atom|atom_01nm]].",
        "scientific": "Cellular architecture spans 10^-4 m in a [[plant cell|plant_100um]] to 10^-10 m in a [[hydrogen atom|atom_01nm]]."
      },
      "es": {
        "pop": "De una [[célula vegetal|plant_100um]] de 100 µm a un [[átomo|atom_01nm]] de 0,1 nm, la vida abarca seis potencias.",
        "blueprint": "Recorre seis décadas logarítmicas desde un [[chasis vegetal|plant_100um]] de 100 µm hasta un [[átomo|atom_01nm]].",
        "scientific": "La arquitectura biológica va de 10⁻⁴ m en la [[célula vegetal|plant_100um]] a 10⁻¹⁰ m en el [[átomo|atom_01nm]]."
      }
    },
    "scale.ch0.s0.02": {
      "en": {
        "pop": "Standalone scenes fill one screen, hiding that cells can be 1,000 times wider than [[viruses|virus_100nm]].",
        "blueprint": "Auto-framed single views hide real ratios, masking 1,000x linear gaps over [[viral payloads|virus_100nm]].",
        "scientific": "Local unit scaling obscures true morphometrics, hiding three decades between cells and [[virions|virus_100nm]]."
      },
      "es": {
        "pop": "Las escenas aisladas llenan la pantalla y ocultan que una célula es 1.000 veces más ancha que un [[virus|virus_100nm]].",
        "blueprint": "Las vistas aisladas ocultan proporciones reales de hasta 1.000 veces frente a [[cargas virales|virus_100nm]].",
        "scientific": "El reescalado local oculta tres órdenes de magnitud reales entre células eucariotas y [[viriones|virus_100nm]]."
      }
    },
    "scale.ch0.s0.03": {
      "en": {
        "pop": "This logarithmic gallery aligns eleven true-size stops from whole cells down to [[atoms|atom_01nm]].",
        "blueprint": "This logarithmic rail indexes eleven calibrated tiers from macro hulls down to [[atomic nodes|atom_01nm]].",
        "scientific": "This continuous log-10 rail maps eleven calibrated specimens from 100 um down to [[1 A atoms|atom_01nm]]."
      },
      "es": {
        "pop": "Esta galería logarítmica alinea once paradas a tamaño real, desde células enteras hasta [[átomos|atom_01nm]].",
        "blueprint": "Este riel logarítmico ordena once niveles calibrados desde cascos celulares hasta [[nodos atómicos|atom_01nm]].",
        "scientific": "Este riel logarítmico continuo ordena once especímenes calibrados desde 100 µm hasta [[átomos de 1 Å|atom_01nm]]."
      }
    },
    "scale.ch0.s1.01": {
      "en": {
        "pop": "At 100 um, a [[plant leaf cell|plant_100um]] or human oocyte sits right at the limit of the naked eye.",
        "blueprint": "Tier one at 100 um: a [[plant leaf hull|plant_100um]] or human oocyte sits at unaided visual threshold.",
        "scientific": "At 100 um (10^-4 m), a [[mesophyll cell|plant_100um]] or oocyte approaches human naked-eye resolution."
      },
      "es": {
        "pop": "A 100 µm, una [[célula vegetal|plant_100um]] o un ovocito humano están justo en el límite del ojo desnudo.",
        "blueprint": "Nivel uno a 100 µm: un [[casco vegetal|plant_100um]] u ovocito marca el umbral visual sin óptica.",
        "scientific": "A 100 µm (10⁻⁴ m), una [[célula del mesófilo|plant_100um]] u ovocito roza el límite de resolución ocular."
      }
    },
    "scale.ch0.s1.02": {
      "en": {
        "pop": "A cellulose wall, central vacuole and green chloroplasts fill the [[plant cell|plant_100um]] interior.",
        "blueprint": "A rigid cellulose frame, pressurized vacuole and solar chloroplasts fill the [[plant chassis|plant_100um]].",
        "scientific": "A cross-linked cellulose wall, central turgor vacuole and plastids fill the [[plant cell|plant_100um]]."
      },
      "es": {
        "pop": "Una pared de celulosa, la vacuola central y cloroplastos verdes llenan la [[célula vegetal|plant_100um]].",
        "blueprint": "Un bastidor rígido de celulosa, vacuola presurizada y módulos solares llenan el [[chasis vegetal|plant_100um]].",
        "scientific": "Pared celulósica, vacuola central de turgencia y cloroplastos ocupan la [[célula vegetal|plant_100um]]."
      }
    },
    "scale.ch0.s1.03": {
      "en": {
        "pop": "Beside it, a 20 um [[animal cell|animal_20um]] is five times narrower and over 100 times smaller in volume.",
        "blueprint": "Next at 20 um, an [[animal chassis|animal_20um]] cuts diameter 5-fold and internal volume over 100-fold.",
        "scientific": "A somatic 20 um [[animal cell|animal_20um]] has one-fifth the diameter and ~125-fold smaller volume."
      },
      "es": {
        "pop": "Junto a ella, una [[célula animal|animal_20um]] de 20 µm es cinco veces más estrecha y cien veces menor en volumen.",
        "blueprint": "A 20 µm, el [[chasis animal|animal_20um]] reduce 5 veces el diámetro y más de 100 veces el volumen.",
        "scientific": "Una [[célula animal|animal_20um]] somática de 20 µm tiene un quinto de diámetro y ~125 veces menos volumen."
      }
    },
    "scale.ch0.s2.01": {
      "en": {
        "pop": "Stepping down to 5 um brings [[budding yeast|yeast_5um]], matching the width of an animal nucleus.",
        "blueprint": "At 5 um, [[budding yeast|yeast_5um]] packs a full eukaryotic suite into the span of one animal nucleus.",
        "scientific": "At 5 um, [[S. cerevisiae|yeast_5um]] matches the ~5-6 um diameter of a mammalian nuclear envelope."
      },
      "es": {
        "pop": "Al bajar a 5 µm aparece la [[levadura en gemación|yeast_5um]], del mismo ancho que un núcleo animal.",
        "blueprint": "A 5 µm, la [[levadura|yeast_5um]] aloja toda la arquitectura eucariota en el ancho de un núcleo animal.",
        "scientific": "A 5 µm, [[S. cerevisiae|yeast_5um]] iguala el diámetro de ~5-6 µm de un núcleo somático de mamífero."
      }
    },
    "scale.ch0.s2.02": {
      "en": {
        "pop": "A single 2 um [[E. coli bacterium|ecoli_2um]] is smaller than one mitochondrion inside a eukaryote.",
        "blueprint": "At 2 um, an [[E. coli node|ecoli_2um]] fits inside the footprint of a single eukaryotic mitochondrion.",
        "scientific": "A ~1 x 2 um [[Escherichia coli|ecoli_2um]] rod (~1 fL) is comparable in size to a single mitochondrion."
      },
      "es": {
        "pop": "Una bacteria [[E. coli|ecoli_2um]] de 2 µm es más pequeña que una sola mitocondria de una célula eucariota.",
        "blueprint": "A 2 µm, un nodo [[E. coli|ecoli_2um]] cabe dentro de la huella física de una mitocondria eucariota.",
        "scientific": "Un bacilo de [[E. coli|ecoli_2um]] de ~1 × 2 µm (~1 fL) equivale al tamaño de una sola mitocondria."
      }
    },
    "scale.ch0.s2.03": {
      "en": {
        "pop": "Yet that compact [[bacterial rod|ecoli_2um]] still runs a 4.6 Mbp genome, ribosomes and ATP synthase.",
        "blueprint": "That compact [[prokaryotic hull|ecoli_2um]] integrates a 4.6 Mbp codebase, 70S compilers and ATP turbines.",
        "scientific": "This [[Gram-negative rod|ecoli_2um]] still houses a 4.6 Mbp nucleoid, 70S ribosomes and F1F0 ATP synthases."
      },
      "es": {
        "pop": "Aun así, ese pequeño [[bacilo bacteriano|ecoli_2um]] opera un genoma de 4,6 Mpb, ribosomas y ATP sintasa.",
        "blueprint": "Ese compacto [[casco procariota|ecoli_2um]] integra 4,6 Mpb de código, compiladores 70S y turbinas de ATP.",
        "scientific": "Este [[bacilo Gram negativo|ecoli_2um]] aloja un nucleoide de 4,6 Mpb, ribosomas 70S y ATP sintasas F₁F₀."
      }
    },
    "scale.ch0.s3.01": {
      "en": {
        "pop": "At 300 nm wide, wall-less [[Mycoplasma genitalium|myco_300nm]] marks the lower edge of cellular life.",
        "blueprint": "At 300 nm, wall-less [[Mycoplasma genitalium|myco_300nm]] defines the minimal autonomous cellular footprint.",
        "scientific": "At ~300 x 600 nm (~0.03 fL), [[Mycoplasma genitalium|myco_300nm]] nears the lower limit of cellular volume."
      },
      "es": {
        "pop": "Con 300 nm de ancho, [[Mycoplasma genitalium|myco_300nm]] sin pared marca el límite inferior de la vida celular.",
        "blueprint": "A 300 nm, [[Mycoplasma genitalium|myco_300nm]] sin pared fija la huella mínima de un nodo celular autónomo.",
        "scientific": "Con ~300 × 600 nm (~0,03 fL), [[Mycoplasma genitalium|myco_300nm]] marca el límite inferior de vida celular."
      }
    },
    "scale.ch0.s3.02": {
      "en": {
        "pop": "Just below [[Mycoplasma|myco_300nm]], visible light hits its ~200 nm diffraction barrier.",
        "blueprint": "Right beneath [[Mycoplasma|myco_300nm]], optical microscopes hit the ~200 nm wavelength resolution floor.",
        "scientific": "Below [[Mycoplasma|myco_300nm]], visible optics hit Abbe's ~200 nm diffraction limit (lambda / 2 NA)."
      },
      "es": {
        "pop": "Justo debajo de [[Mycoplasma|myco_300nm]], la luz visible alcanza su barrera de difracción de ~200 nm.",
        "blueprint": "Debajo de [[Mycoplasma|myco_300nm]], la óptica convencional choca con el piso de resolución de ~200 nm.",
        "scientific": "Bajo [[Mycoplasma|myco_300nm]], la microscopía óptica alcanza el límite de difracción de Abbe (~200 nm)."
      }
    },
    "scale.ch0.s3.03": {
      "en": {
        "pop": "Past that optical limit, biologists rely on electron beams and X-ray beams to resolve structure.",
        "blueprint": "Below 200 nm, cryo-EM electron beams and X-ray diffraction replace optical lenses for imaging.",
        "scientific": "Sub-200 nm structural resolution requires cryo-electron microscopy and X-ray crystallography."
      },
      "es": {
        "pop": "Tras ese límite óptico, la biología usa haces de electrones y rayos X para ver cada estructura.",
        "blueprint": "Por debajo de 200 nm, la crio-EM y la difracción de rayos X sustituyen a las lentes ópticas.",
        "scientific": "Resolver estructuras menores de 200 nm exige criomicroscopía electrónica y cristalografía de rayos X."
      }
    },
    "scale.ch1.s0.01": {
      "en": {
        "pop": "At 100 nm sit enveloped [[SARS-CoV-2 and HIV-1 virions|virus_100nm]]: genetic payloads with zero ribosomes.",
        "blueprint": "At 100 nm sit [[SARS-CoV-2 and HIV-1 payloads|virus_100nm]]: packaged nucleic acid with zero ribosomes.",
        "scientific": "At ~100-120 nm, enveloped [[SARS-CoV-2 and HIV-1 virions|virus_100nm]] carry RNA genomes without ribosomes."
      },
      "es": {
        "pop": "A 100 nm están los [[viriones SARS-CoV-2 y VIH-1|virus_100nm]]: cargas genéticas sin ribosomas propios.",
        "blueprint": "A 100 nm operan [[cargas SARS-CoV-2 y VIH-1|virus_100nm]]: código empaquetado sin compiladores propios.",
        "scientific": "A ~100-120 nm, los [[viriones envueltos SARS-CoV-2 y VIH-1|virus_100nm]] portan ARN sin ribosomas."
      }
    },
    "scale.ch1.s0.02": {
      "en": {
        "pop": "A [[plant cell|plant_100um]] versus a [[virus|virus_100nm]] is a city block to a pebble: 1,000 times wider, billion-fold volume.",
        "blueprint": "A 100 um [[plant hull|plant_100um]] outscales a 100 nm [[virion|virus_100nm]] 1,000x linearly and 10^9x in volume.",
        "scientific": "Three decades separate a 100 um [[plant cell|plant_100um]] from a 100 nm [[virion|virus_100nm]]: 10^3 width, 10^9 volume."
      },
      "es": {
        "pop": "Una [[célula vegetal|plant_100um]] ante un [[virus|virus_100nm]] es una manzana urbana ante un guijarro: mil millones mayor.",
        "blueprint": "Una [[célula vegetal|plant_100um]] de 100 µm supera al [[virión|virus_100nm]] 1.000 veces en ancho y 10⁹ en volumen.",
        "scientific": "Tres órdenes separan la [[célula vegetal|plant_100um]] de 100 µm del [[virión|virus_100nm]] de 100 nm (10⁹ en volumen)."
      }
    },
    "scale.ch1.s0.03": {
      "en": {
        "pop": "Because [[virions|virus_100nm]] lack cytoplasm and enzymes, every copy depends on hijacking a host cell.",
        "blueprint": "Zero cytosol and zero local ATP mean [[virions|virus_100nm]] stay inert until hijacking a host runtime.",
        "scientific": "Lacking translation and bioenergetics, [[virions|virus_100nm]] are obligate intracellular parasites."
      },
      "es": {
        "pop": "Como los [[viriones|virus_100nm]] carecen de citoplasma y enzimas, cada copia depende de secuestrar una célula.",
        "blueprint": "Sin citosol ni ATP propio, los [[viriones|virus_100nm]] siguen inertes hasta tomar el control de un huésped.",
        "scientific": "Al carecer de traducción y bioenergética, los [[viriones|virus_100nm]] son parásitos celulares obligados."
      }
    },
    "scale.ch1.s1.01": {
      "en": {
        "pop": "At 25 nm sits the [[ribosome|ribo_25nm]], the RNA-protein complex that translates mRNA into polypeptides.",
        "blueprint": "At 25 nm runs the [[ribosome compiler|ribo_25nm]], converting mRNA instruction streams into protein chains.",
        "scientific": "At 25 nm, the ribonucleoprotein [[ribosome|ribo_25nm]] catalyzes peptidyl transfer along coded mRNA."
      },
      "es": {
        "pop": "A 25 nm está el [[ribosoma|ribo_25nm]], el complejo de ARN y proteínas que traduce ARNm en polipéptidos.",
        "blueprint": "A 25 nm opera el [[compilador ribosómico|ribo_25nm]], transformando flujos de ARNm en cadenas proteicas.",
        "scientific": "A 25 nm, el [[ribosoma|ribo_25nm]] ribonucleoproteico cataliza la formación de enlaces peptídicos."
      }
    },
    "scale.ch1.s1.02": {
      "en": {
        "pop": "A 70S bacterial [[ribosome|ribo_25nm]] spans ~21 to 25 nm, while eukaryotic 80S reaches ~30 nm.",
        "blueprint": "Bacterial 70S [[ribosomes|ribo_25nm]] measure 21 to 25 nm; heavier eukaryotic 80S units span up to 30 nm.",
        "scientific": "Prokaryotic 70S [[ribosomes|ribo_25nm]] (PDB 4YBB, ~2.5 MDa) span ~21-25 nm; eukaryotic 80S (~4.3 MDa) ~30 nm."
      },
      "es": {
        "pop": "Un [[ribosoma|ribo_25nm]] bacteriano 70S mide de 21 a 25 nm, mientras el eucariota 80S alcanza unos 30 nm.",
        "blueprint": "Los [[ribosomas|ribo_25nm]] bacterianos 70S miden 21-25 nm; las unidades eucariotas 80S llegan a 30 nm.",
        "scientific": "El [[ribosoma|ribo_25nm]] 70S (PDB 4YBB, ~2,5 MDa) mide ~21-25 nm; el eucariota 80S (~4,3 MDa), ~30 nm."
      }
    },
    "scale.ch1.s1.03": {
      "en": {
        "pop": "Tens of thousands of [[ribosomes|ribo_25nm]] operate together inside a single growing bacterium.",
        "blueprint": "Up to 70,000 parallel [[ribosome units|ribo_25nm]] populate one rapidly dividing bacterial cytosol.",
        "scientific": "A fast-dividing E. coli cytosol packs ~50,000-70,000 active [[70S ribosomes|ribo_25nm]] simultaneously."
      },
      "es": {
        "pop": "Decenas de miles de [[ribosomas|ribo_25nm]] trabajan a la vez dentro de una sola bacteria en crecimiento.",
        "blueprint": "Hasta 70.000 [[unidades ribosómicas|ribo_25nm]] operan en paralelo en un citosol bacteriano en división.",
        "scientific": "Un citosol de E. coli en crecimiento rápido aloja ~50.000-70.000 [[ribosomas 70S|ribo_25nm]] activos."
      }
    },
    "scale.ch1.s2.01": {
      "en": {
        "pop": "At 10 nm operate folded [[protein complexes|enzyme_10nm]] such as rotary ATP synthase and RuBisCO.",
        "blueprint": "At 10 nm stand multi-subunit [[protein machines|enzyme_10nm]] including rotary ATP synthase and RuBisCO.",
        "scientific": "At ~10 nm operate oligomeric [[enzymes|enzyme_10nm]] like F1F0 ATP synthase (PDB 6OQR) and RuBisCO (1RCX)."
      },
      "es": {
        "pop": "A 10 nm actúan [[complejos proteicos|enzyme_10nm]] plegados como la ATP sintasa rotatoria y RuBisCO.",
        "blueprint": "A 10 nm operan [[máquinas proteicas|enzyme_10nm]] multisubunidad como la turbina ATP sintasa y RuBisCO.",
        "scientific": "A ~10 nm actúan [[enzimas oligoméricas|enzyme_10nm]] como ATP sintasa F₁F₀ (PDB 6OQR) y RuBisCO (1RCX)."
      }
    },
    "scale.ch1.s2.02": {
      "en": {
        "pop": "Proton flow turns the [[ATP synthase|enzyme_10nm]] rotor to join phosphate onto ADP at every cycle.",
        "blueprint": "Transmembrane proton current spins the [[ATP synthase|enzyme_10nm]] shaft, synthesizing three ATP per turn.",
        "scientific": "Proton-motive force rotates the [[F1F0 ATP synthase|enzyme_10nm]] c-ring, coupling torque to ADP phosphorylation."
      },
      "es": {
        "pop": "El flujo de protones hace girar el rotor de la [[ATP sintasa|enzyme_10nm]] para unir fosfato al ADP.",
        "blueprint": "Una corriente de protones gira el eje de la [[ATP sintasa|enzyme_10nm]], generando tres ATP por vuelta.",
        "scientific": "La fuerza protón-motriz gira el anillo c de la [[ATP sintasa F₁F₀|enzyme_10nm]] y fosforila ADP a ATP."
      }
    },
    "scale.ch1.s2.03": {
      "en": {
        "pop": "Five times thinner at 2 nm runs the [[B-DNA double helix|dna_2nm]], 50,000 times narrower than a cell.",
        "blueprint": "Five times narrower at 2 nm lies the [[B-DNA data duplex|dna_2nm]], 50,000x thinner than a plant hull.",
        "scientific": "At 2.0 nm wide (3.4 nm pitch, PDB 1BNA), [[B-DNA|dna_2nm]] is 50,000-fold thinner than a 100 um cell."
      },
      "es": {
        "pop": "Cinco veces más fina, a 2 nm, corre la [[doble hélice de ADN-B|dna_2nm]], 50.000 veces más estrecha que una célula.",
        "blueprint": "Cinco veces menor, a 2 nm, corre el [[dúplex ADN-B|dna_2nm]], 50.000 veces más fino que el casco vegetal.",
        "scientific": "Con 2,0 nm de ancho (paso de 3,4 nm, PDB 1BNA), el [[ADN-B|dna_2nm]] es 50.000 veces más fino que la célula."
      }
    },
    "scale.ch2.s0.01": {
      "en": {
        "pop": "Every cell and virus on Earth is built from four biomolecule families, starting with lipids.",
        "blueprint": "All cellular hardware and viral shells compile from just four chemical classes, starting with lipids.",
        "scientific": "Every known organism and virion assembles from four macromolecular classes, beginning with lipids."
      },
      "es": {
        "pop": "Toda célula y virus de la Tierra se forma con cuatro familias de biomoléculas, empezando por lípidos.",
        "blueprint": "Todo hardware celular y viral se construye con solo cuatro clases químicas, empezando por los lípidos.",
        "scientific": "Todo organismo y virión se ensambla con cuatro clases macromoleculares, empezando por los lípidos."
      }
    },
    "scale.ch2.s0.02": {
      "en": {
        "pop": "Water-loving [[phospholipid|monomer_1nm]] heads face out while tails tuck inside like raincoats shielding a dry [[core|animal_20um]].",
        "blueprint": "Amphipathic [[phospholipids|monomer_1nm]] self-align polar heads outward and acyl tails inward to close a [[bilayer|animal_20um]].",
        "scientific": "The hydrophobic effect drives [[phospholipid|monomer_1nm]] acyl chains inward, closing an amphipathic [[bilayer|animal_20um]]."
      },
      "es": {
        "pop": "Las cabezas del [[fosfolípido|monomer_1nm]] miran al agua y sus colas se ocultan como impermeables en un [[núcleo|animal_20um]] seco.",
        "blueprint": "Los [[fosfolípidos|monomer_1nm]] anfipáticos orientan cabezas polares afuera y colas adentro, cerrando la [[bicapa|animal_20um]].",
        "scientific": "El efecto hidrofóbico entierra las colas del [[fosfolípido|monomer_1nm]] y sella una [[bicapa|animal_20um]] anfipática."
      }
    },
    "scale.ch2.s0.03": {
      "en": {
        "pop": "This non-covalent [[5 nm membrane|animal_20um]] encloses cells and organelles while remaining fluid.",
        "blueprint": "Zero covalent cross-links hold this [[5 nm lipid barrier|animal_20um]], allowing self-sealing lateral fluidity.",
        "scientific": "Non-covalent van der Waals packing holds the ~5-8 nm [[bilayer|animal_20um]] fluid while blocking polar ions."
      },
      "es": {
        "pop": "Esta [[membrana de 5 nm|animal_20um]] no covalente encierra células y orgánulos mientras conserva su fluidez.",
        "blueprint": "Sin enlaces covalentes entre lípidos, esta [[barrera de 5 nm|animal_20um]] sella fugas y permite flujo lateral.",
        "scientific": "Interacciones no covalentes mantienen fluida la [[bicapa de 5-8 nm|animal_20um]] y bloquean iones polares."
      }
    },
    "scale.ch2.s1.01": {
      "en": {
        "pop": "Carbohydrates join 0.9 nm [[glucose rings|monomer_1nm]] built from carbon, hydrogen and oxygen.",
        "blueprint": "Class two, carbohydrates, polymerize 0.9 nm [[glucose rings|monomer_1nm]] built strictly from C, H and O.",
        "scientific": "Carbohydrates polymerize 0.9 nm D-[[glucose|monomer_1nm]] pyranose rings (C6H12O6) in a 1:2:1 C:H:O ratio."
      },
      "es": {
        "pop": "Los carbohidratos unen [[anillos de glucosa|monomer_1nm]] de 0,9 nm hechos de carbono, hidrógeno y oxígeno.",
        "blueprint": "Clase dos: los carbohidratos polimerizan [[anillos de glucosa|monomer_1nm]] de 0,9 nm hechos solo de C, H y O.",
        "scientific": "Los carbohidratos polimerizan piranosas de D-[[glucosa|monomer_1nm]] (0,9 nm, C₆H₁₂O₆) en razón 1:2:1."
      }
    },
    "scale.ch2.s1.02": {
      "en": {
        "pop": "Coiled alpha-linked glucose stores rapid energy as starch, ready for glycolysis to generate ATP.",
        "blueprint": "Helical alpha-1,4 starch coils pack compact glucose fuel reserves for rapid glycolytic ATP output.",
        "scientific": "Alpha-1,4 and alpha-1,6 glycosidic linkages coil glucose into accessible amylose and amylopectin."
      },
      "es": {
        "pop": "La glucosa en espiral con enlace alfa guarda energía en almidón, lista para generar ATP por glucólisis.",
        "blueprint": "Las espirales de almidón alfa-1,4 almacenan combustible compacto para rápida extracción de ATP.",
        "scientific": "Los enlaces glucosídicos α-1,4 y α-1,6 enrollan la glucosa en amilosa y amilopectina digeribles."
      }
    },
    "scale.ch2.s1.03": {
      "en": {
        "pop": "Flipping that bond into flat beta chains forms rigid cellulose fibers in [[plant cell walls|plant_100um]].",
        "blueprint": "Inverting one glycosidic angle locks straight beta-1,4 cellulose struts inside [[plant walls|plant_100um]].",
        "scientific": "Beta-1,4 C1-O-C4 linkages align H-bonded cellulose microfibrils reinforcing [[plant walls|plant_100um]]."
      },
      "es": {
        "pop": "Invertir ese enlace en cadenas beta planas forma fibras rígidas de celulosa en [[paredes vegetales|plant_100um]].",
        "blueprint": "Invertir un ángulo glucosídico crea vigas rectas de celulosa beta-1,4 en las [[paredes vegetales|plant_100um]].",
        "scientific": "Los enlaces β-1,4 C1-O-C4 alinean microfibrillas de celulosa que refuerzan las [[paredes vegetales|plant_100um]]."
      }
    },
    "scale.ch2.s2.01": {
      "en": {
        "pop": "Proteins link twenty [[amino acids|monomer_1nm]] through planar peptide bonds inside the [[ribosome|ribo_25nm]].",
        "blueprint": "Class three, proteins, chain twenty [[amino acid|monomer_1nm]] parts via peptide welds inside the [[ribosome|ribo_25nm]].",
        "scientific": "Proteins condense twenty L-[[amino acids|monomer_1nm]] via planar CO-NH amide bonds in the [[ribosome|ribo_25nm]]."
      },
      "es": {
        "pop": "Las proteínas unen veinte [[aminoácidos|monomer_1nm]] por enlaces peptídicos planos dentro del [[ribosoma|ribo_25nm]].",
        "blueprint": "Clase tres: proteínas ensamblan veinte [[aminoácidos|monomer_1nm]] mediante enlaces peptídicos en el [[ribosoma|ribo_25nm]].",
        "scientific": "Las proteínas condensan veinte L-[[aminoácidos|monomer_1nm]] por enlaces amida CO-NH en el [[ribosoma|ribo_25nm]]."
      }
    },
    "scale.ch2.s2.02": {
      "en": {
        "pop": "Backbone hydrogen bonds fold chains into alpha helices and pleated beta sheets with exact shapes.",
        "blueprint": "Regular backbone hydrogen bonds lock polypeptides into 1.2 nm alpha helices and pleated beta sheets.",
        "scientific": "Backbone i->i+4 H-bonds fold polypeptides into 1.2 nm alpha-helices (3.6 res/turn) and beta-sheets."
      },
      "es": {
        "pop": "Los puentes de hidrógeno del esqueleto pliegan las cadenas en hélices alfa y láminas beta exactas.",
        "blueprint": "Puentes de hidrógeno regulares bloquean polipéptidos en hélices alfa de 1,2 nm y láminas beta.",
        "scientific": "Enlaces de hidrógeno i→i+4 pliegan polipéptidos en hélices α (1,2 nm, 3,6 res/vuelta) y láminas β."
      }
    },
    "scale.ch2.s2.03": {
      "en": {
        "pop": "Those folds turn chains into [[catalytic enzymes|enzyme_10nm]], membrane transporters and cell fibers.",
        "blueprint": "Tertiary folding converts linear code into [[catalytic actuators|enzyme_10nm]], gates and structural beams.",
        "scientific": "Side-chain R-group packing stabilizes globular [[enzymes|enzyme_10nm]] (e.g. PDB 1UBQ, 1RCX) and motors."
      },
      "es": {
        "pop": "Esos pliegues convierten cadenas en [[enzimas catalíticas|enzyme_10nm]], transportadores y fibras celulares.",
        "blueprint": "El plegamiento terciario convierte código lineal en [[actuadores catalíticos|enzyme_10nm]], compuertas y vigas.",
        "scientific": "El empaquetado de grupos R estabiliza [[enzimas globulares|enzyme_10nm]] (PDB 1UBQ, 1RCX) y motores."
      }
    },
    "scale.ch2.s3.01": {
      "en": {
        "pop": "Nucleic acids join [[nucleotides|monomer_1nm]] into directional chains that store and carry genetic code.",
        "blueprint": "Class four, nucleic acids, wire [[nucleotide|monomer_1nm]] units along a directional 5'-to-3' information bus.",
        "scientific": "Nucleic acids polymerize [[nucleotides|monomer_1nm]] via 3'-5' phosphodiester bonds into directional strands."
      },
      "es": {
        "pop": "Los ácidos nucleicos unen [[nucleótidos|monomer_1nm]] en cadenas direccionales que guardan el código genético.",
        "blueprint": "Clase cuatro: los ácidos nucleicos cablean [[nucleótidos|monomer_1nm]] en un bus direccional de 5′ a 3′.",
        "scientific": "Los ácidos nucleicos polimerizan [[nucleótidos|monomer_1nm]] mediante enlaces fosfodiéster 3′-5′ direccionales."
      }
    },
    "scale.ch2.s3.02": {
      "en": {
        "pop": "In [[B-DNA|dna_2nm]], two antiparallel strands pair A with T and G with C across a 2 nm double helix.",
        "blueprint": "In [[B-DNA|dna_2nm]], two antiparallel tracks pair A-T and G-C across a 2 nm redundant storage duplex.",
        "scientific": "Antiparallel [[B-DNA|dna_2nm]] (2.0 nm, 3.4 A/bp) pairs A=T and G=C bases via stacked hydrogen bonds."
      },
      "es": {
        "pop": "En el [[ADN-B|dna_2nm]], dos hebras antiparalelas emparejan A con T y G con C en una hélice de 2 nm.",
        "blueprint": "En el [[ADN-B|dna_2nm]], dos pistas antiparalelas emparejan A-T y G-C en un dúplex redundante de 2 nm.",
        "scientific": "El [[ADN-B|dna_2nm]] antiparalelo (2,0 nm, 3,4 Å/pb) aparea bases A=T y G≡C por puentes de hidrógeno."
      }
    },
    "scale.ch2.s3.03": {
      "en": {
        "pop": "RNA adds one hydroxyl oxygen per sugar, folding into messengers and active [[ribosomes|ribo_25nm]].",
        "blueprint": "RNA keeps a 2'-OH sugar handle, enabling flexible folding into mRNA, tRNA and [[ribosome|ribo_25nm]] cores.",
        "scientific": "Ribose 2'-OH lets single-stranded RNA fold into tRNA (PDB 1EHZ) and catalytic [[rRNA|ribo_25nm]] cores."
      },
      "es": {
        "pop": "El ARN añade un oxígeno hidroxilo en cada azúcar y se pliega en mensajeros y [[ribosomas|ribo_25nm]] activos.",
        "blueprint": "El ARN retiene un grupo 2′-OH, logrando plegarse en ARNm, ARNt y núcleos activos del [[ribosoma|ribo_25nm]].",
        "scientific": "El grupo 2′-OH permite al ARN plegarse en ARNt (PDB 1EHZ) y centros catalíticos del [[ARNr|ribo_25nm]]."
      }
    },
    "scale.ch3.s0.01": {
      "en": {
        "pop": "Zoom to 0.5 to 1 nm and all four macromolecules break into compact [[monomer units|monomer_1nm]].",
        "blueprint": "At 0.5 to 1 nm, every large macromolecule decomposes into standardized [[monomer modules|monomer_1nm]].",
        "scientific": "At 0.5-1.0 nm (5-10 A), all four polymer classes resolve into low-mass [[monomers|monomer_1nm]]."
      },
      "es": {
        "pop": "Al bajar a 0,5 o 1 nm, las cuatro macromoléculas se descomponen en pequeños [[monómeros|monomer_1nm]].",
        "blueprint": "Entre 0,5 y 1 nm, cada macromolécula se descompone en [[módulos monoméricos|monomer_1nm]] estandarizados.",
        "scientific": "Entre 0,5 y 1,0 nm (5-10 Å), las cuatro clases se resuelven en [[monómeros|monomer_1nm]] de baja masa."
      }
    },
    "scale.ch3.s0.02": {
      "en": {
        "pop": "Glucose, phospholipids, amino acids and [[nucleotides|monomer_1nm]] measure five to ten angstroms across.",
        "blueprint": "Glucose (9 A), amino acids (5 A), lipid heads (8 A) and [[nucleotides|monomer_1nm]] (10 A) share one scale.",
        "scientific": "Glucose (~0.9 nm), amino acids (~0.5 nm), lipid heads (~0.8 nm) and [[nucleotides|monomer_1nm]] (~1.0 nm) converge."
      },
      "es": {
        "pop": "Glucosa, fosfolípidos, aminoácidos y [[nucleótidos|monomer_1nm]] miden entre cinco y diez ángstroms de ancho.",
        "blueprint": "Glucosa (9 Å), aminoácidos (5 Å), cabezas lipídicas (8 Å) y [[nucleótidos|monomer_1nm]] (10 Å) comparten escala.",
        "scientific": "Glucosa (~0,9 nm), aminoácidos (~0,5 nm), cabezas (~0,8 nm) y [[nucleótidos|monomer_1nm]] (~1,0 nm) convergen."
      }
    },
    "scale.ch3.s0.03": {
      "en": {
        "pop": "Reactive hydroxyl, amino, carboxyl and phosphate groups let [[monomers|monomer_1nm]] link into polymers.",
        "blueprint": "Standard -OH, -NH2, -COOH and -PO4 connectors allow [[monomers|monomer_1nm]] to chain via dehydration.",
        "scientific": "Condensation of hydroxyl, amine, carboxyl and phosphate groups polymerizes [[monomers|monomer_1nm]]."
      },
      "es": {
        "pop": "Grupos hidroxilo, amino, carboxilo y fosfato permiten que los [[monómeros|monomer_1nm]] se unan en polímeros.",
        "blueprint": "Conectores -OH, -NH₂, -COOH y -PO₄ enlazan [[monómeros|monomer_1nm]] en cadenas mediante deshidratación.",
        "scientific": "La condensación de grupos hidroxilo, amino, carboxilo y fosfato polimeriza los [[monómeros|monomer_1nm]]."
      }
    },
    "scale.ch3.s1.01": {
      "en": {
        "pop": "At 0.1 to 0.3 nm, every [[biomolecule|monomer_1nm]] reduces to six core [[biogenic atoms|atom_01nm]].",
        "blueprint": "At 1 to 3 angstroms, every [[monomer|monomer_1nm]] resolves to six shared [[atomic primitives|atom_01nm]].",
        "scientific": "At 0.1-0.3 nm (1-3 A), every [[biomolecule|monomer_1nm]] reduces to six universal [[atoms|atom_01nm]]: C, H, N, O, P, Mg."
      },
      "es": {
        "pop": "A 0,1 o 0,3 nm, toda [[biomolécula|monomer_1nm]] se reduce a los mismos seis [[átomos biogénicos|atom_01nm]].",
        "blueprint": "De 1 a 3 ángstroms, cada [[monómero|monomer_1nm]] se reduce a seis [[primitivas atómicas|atom_01nm]] compartidas.",
        "scientific": "De 0,1 a 0,3 nm (1-3 Å), toda [[biomolécula|monomer_1nm]] converge en seis [[átomos|atom_01nm]]: C, H, N, O, P y Mg."
      }
    },
    "scale.ch3.s1.02": {
      "en": {
        "pop": "[[Carbon, hydrogen, oxygen and nitrogen|atom_01nm]] form covalent skeletons from glucose to proteins.",
        "blueprint": "[[C, H, O and N atoms|atom_01nm]] build stable covalent frames across lipids, sugars, proteins and bases.",
        "scientific": "Tetravalent [[carbon with H, O and N|atom_01nm]] (1.0-1.5 A radii) builds 1.2-1.54 A covalent bonds."
      },
      "es": {
        "pop": "[[Carbono, hidrógeno, oxígeno y nitrógeno|atom_01nm]] forman esqueletos covalentes desde glucosa hasta proteínas.",
        "blueprint": "Los [[átomos C, H, O y N|atom_01nm]] construyen armazones covalentes en lípidos, azúcares, proteínas y bases.",
        "scientific": "El [[carbono tetravalente con H, O y N|atom_01nm]] (radios 1,0-1,5 Å) forma enlaces covalentes de 1,2-1,54 Å."
      }
    },
    "scale.ch3.s1.03": {
      "en": {
        "pop": "[[Phosphorus and magnesium|atom_01nm]] bridge DNA backbones, lipid heads and high-energy ATP bonds.",
        "blueprint": "[[Phosphorus and magnesium|atom_01nm]] anchor lipid heads, DNA rails and Mg-ATP power transactions.",
        "scientific": "[[Phosphorus (2.0 A) and Mg2+ ions|atom_01nm]] stabilize phosphodiester backbones, lipid heads and ATP."
      },
      "es": {
        "pop": "[[Fósforo y magnesio|atom_01nm]] enlazan el esqueleto del ADN, cabezas lipídicas y los enlaces energéticos del ATP.",
        "blueprint": "[[Fósforo y magnesio|atom_01nm]] anclan cabezas lipídicas, rieles de ADN y transferencias energéticas Mg-ATP.",
        "scientific": "El [[fósforo (2,0 Å) y los iones Mg²⁺|atom_01nm]] estabilizan enlaces fosfodiéster, fosfolípidos y ATP."
      }
    },
    "scale.ch3.s2.01": {
      "en": {
        "pop": "Across six powers of ten, the same [[atoms|atom_01nm]] build [[monomers|monomer_1nm]], [[enzymes|enzyme_10nm]] and [[cells|plant_100um]].",
        "blueprint": "One continuous stack links [[atoms|atom_01nm]] to [[monomers|monomer_1nm]], [[protein motors|enzyme_10nm]] and [[cells|plant_100um]].",
        "scientific": "Six decades unite [[biogenic atoms|atom_01nm]], [[monomers|monomer_1nm]], [[10 nm enzymes|enzyme_10nm]] and [[100 um cells|plant_100um]]."
      },
      "es": {
        "pop": "A lo largo de seis potencias, los mismos [[átomos|atom_01nm]] forman [[monómeros|monomer_1nm]], [[enzimas|enzyme_10nm]] y [[células|plant_100um]].",
        "blueprint": "Una sola pila conecta [[átomos|atom_01nm]], [[monómeros|monomer_1nm]], [[motores proteicos|enzyme_10nm]] y [[células|plant_100um]].",
        "scientific": "Seis décadas enlazan [[átomos|atom_01nm]], [[monómeros|monomer_1nm]], [[enzimas de 10 nm|enzyme_10nm]] y [[células de 100 µm|plant_100um]]."
      }
    },
    "scale.ch3.s2.02": {
      "en": {
        "pop": "Toggle 1:1 pair comparison or drag the scale slider to inspect adjacent stops at true size.",
        "blueprint": "Enable 1:1 Pair Comparator or scrub the logarithmic rail to measure any adjacent size jump directly.",
        "scientific": "Use the 1:1 pair comparator or logarithmic slider to verify relative dimensions across every stop."
      },
      "es": {
        "pop": "Activa la comparación 1:1 o arrastra la barra de escala para ver paradas contiguas a tamaño real.",
        "blueprint": "Activa el comparador 1:1 o desliza el riel logarítmico para medir cada salto de escala al instante.",
        "scientific": "Usa el comparador 1:1 o el deslizador logarítmico para contrastar dimensiones reales entre paradas."
      }
    },
    "scale.ch3.s2.03": {
      "en": {
        "pop": "Explore the Four Biomolecules stage next, or dive straight into E. coli to see them in action.",
        "blueprint": "Advance to the Four Biomolecules workbench next, or inspect E. coli to watch all four classes run.",
        "scientific": "Proceed to the Four Biomolecules stage, or open Escherichia coli to observe them in cellular context."
      },
      "es": {
        "pop": "Explora ahora las Cuatro Biomoléculas o entra directo a E. coli para verlas trabajar juntas.",
        "blueprint": "Avanza a la mesa de Cuatro Biomoléculas o abre E. coli para ver las cuatro clases en operación.",
        "scientific": "Pasa al escenario de Cuatro Biomoléculas o abre Escherichia coli para observarlas in vivo."
      }
    }
  }
};
