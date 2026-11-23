import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 13 (`real-mimivirus`, `real-viroid`, `real-prion`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - `real-mimivirus`: 34 of 36 cues match base `cue.text` verbatim in `en.pop` with direct,
 *   distraction-free biological prose. Exactly 2 cues use purposeful everyday mental models:
 *   1. `mimi.ch1.s0.02` - Glycosylated 125 nm fiber canopy acting like a Trojan meal mimicking bacteria.
 *   2. `mimi.ch3.s2.02` - Viral TyrRS as a crate of spare tools lacking a ribosome factory floor.
 * - `real-viroid`: 28 of 30 cues match base `cue.text` verbatim in `en.pop`.
 *   Exactly 2 cues use purposeful everyday mental models:
 *   1. `vir.ch1.s2.02` - Self-paired stems & G-U wobbles folding like tight origami armor against RNases.
 *   2. `vir.ch2.s0.02` - Naked PSTVd RNA acting like raw executable text with no envelope tricking Pol II.
 * - `real-prion`: 31 of 33 cues match base `cue.text` verbatim in `en.pop`.
 *   Exactly 2 cues use purposeful everyday mental models:
 *   1. `pri.ch2.s0.02` - PrPc docking on PrPsc in a domino crystallization cascade without DNA.
 *   2. `pri.ch3.s0.01` - Fibril fragmentation like snapping a chalk stick in half to double growing tips.
 */
export const PERSONAS_EDGE_OF_LIFE: TourPersonaMap = {
  "real-mimivirus": {
    "mimi.ch0.s0.01": {
      "en": {
        "pop": "Meet Acanthamoeba polyphaga Mimivirus, a 750 nm giant virus first mistaken for a bacterium.",
        "blueprint": "System node Mimivirus: a 750 nm giant viral payload chassis initially misclassified as bacterial.",
        "scientific": "Acanthamoeba polyphaga mimivirus (Mimiviridae, NCLDV) is a ~750 nm nucleocytoplasmic giant virus."
      },
      "es": {
        "pop": "Conoce a Acanthamoeba polyphaga Mimivirus, un virus gigante de 750 nm confundido con bacteria.",
        "blueprint": "Nodo Mimivirus: un chasis viral gigante de 750 nm clasificado al inicio como bacteria.",
        "scientific": "Acanthamoeba polyphaga mimivirus (Mimiviridae, NCLDV) es un virus gigante de ~750 nm."
      }
    },
    "mimi.ch0.s0.02": {
      "en": {
        "pop": "Its [[fiber canopy|fibers]], [[capsid|capsid]] and [[stargate|stargate]] dwarf every canonical virus.",
        "blueprint": "Its [[fiber array|fibers]], [[icosahedral hull|capsid]] and [[stargate port|stargate]] scale far beyond viruses.",
        "scientific": "Its 125 nm [[fibers|fibers]], 500 nm [[capsid|capsid]] and 5-fold [[stargate|stargate]] dwarf ~100 nm virions."
      },
      "es": {
        "pop": "Su [[dosel de fibras|fibers]], [[cápside|capsid]] y [[stargate|stargate]] eclipsan a todo virus clásico.",
        "blueprint": "Su [[matriz fibrosa|fibers]], [[casco icosaédrico|capsid]] y [[puerto stargate|stargate]] superan todo virus.",
        "scientific": "Sus [[fibras|fibers]] (125 nm), [[cápside|capsid]] (500 nm) y [[stargate|stargate]] eclipsan viriones de ~100 nm."
      }
    },
    "mimi.ch0.s0.03": {
      "en": {
        "pop": "Cut open its shell to test whether huge size and 1,000 genes cross the boundary into life.",
        "blueprint": "Inspect the cutaway core to audit whether massive size and 1,000 genes satisfy autonomy.",
        "scientific": "Sectioning the virion tests whether 750 nm scale and ~1,000 ORFs confer cellular autonomy."
      },
      "es": {
        "pop": "Abre su cubierta para probar si un gran tamaño y 1.000 genes cruzan la frontera de la vida.",
        "blueprint": "Inspecciona el corte interno para auditar si gran volumen y 1.000 genes logran autonomía.",
        "scientific": "El corte del virión evalúa si 750 nm de diámetro y ~1.000 ORFs bastan para ser una célula."
      }
    },
    "mimi.ch0.s1.01": {
      "en": {
        "pop": "Beside the virion sits a true-scale 300 nm [[Mycoplasma cell|myco_ref]], the smallest living cell.",
        "blueprint": "Mounted at 1:1 scale beside the hull is [[Mycoplasma|myco_ref]], the smallest living reference unit.",
        "scientific": "At true scale (1:1) sits ~300 nm [[Mycoplasma genitalium|myco_ref]], the minimal autonomous bacterium."
      },
      "es": {
        "pop": "Junto al virión hay una [[célula Mycoplasma|myco_ref]] a escala real de 300 nm, la célula más pequeña.",
        "blueprint": "Montada a escala 1:1 junto al casco aparece [[Mycoplasma|myco_ref]], la unidad viva mínima.",
        "scientific": "A escala 1:1 figura [[Mycoplasma genitalium|myco_ref]] (~300 nm), la bacteria autónoma mínima."
      }
    },
    "mimi.ch0.s1.02": {
      "en": {
        "pop": "Mimivirus is over twice as wide as [[Mycoplasma|myco_ref]] and carries double its 482 genes.",
        "blueprint": "Mimivirus spans >2x the diameter of [[Mycoplasma|myco_ref]] with twice its 482-gene software load.",
        "scientific": "Mimivirus (750 nm; 1.18 Mbp) exceeds [[Mycoplasma|myco_ref]] (300 nm; 580 kbp, ~482 genes) twofold."
      },
      "es": {
        "pop": "Mimivirus duplica el ancho de [[Mycoplasma|myco_ref]] y lleva el doble de sus 482 genes.",
        "blueprint": "Mimivirus mide más del doble que [[Mycoplasma|myco_ref]] y duplica su carga de 482 genes.",
        "scientific": "Mimivirus (750 nm; 1,18 Mpb) duplica a [[Mycoplasma|myco_ref]] (300 nm; 580 kpb, ~482 genes)."
      }
    },
    "mimi.ch0.s1.03": {
      "en": {
        "pop": "Yet [[Mycoplasma|myco_ref]] owns 70S ribosomes and ATP pathways, while Mimivirus has zero.",
        "blueprint": "Yet [[Mycoplasma|myco_ref]] ships onboard 70S compilers and glycolysis ATP; Mimivirus ships zero.",
        "scientific": "Still, [[Mycoplasma|myco_ref]] retains ~150 70S ribosomes and glycolytic ATP; Mimivirus has 0 of both."
      },
      "es": {
        "pop": "Aun así, [[Mycoplasma|myco_ref]] posee ribosomas 70S y vías de ATP, mientras Mimivirus tiene cero.",
        "blueprint": "Pero [[Mycoplasma|myco_ref]] integra compiladores 70S y ATP glucolítico; Mimivirus tiene cero.",
        "scientific": "Sin embargo, [[Mycoplasma|myco_ref]] conserva ribosomas 70S y ATP glucolítico; Mimivirus posee 0."
      }
    },
    "mimi.ch1.s0.01": {
      "en": {
        "pop": "A dense 125 nm coat of glycosylated [[surface fibers|fibers]] bristles from every [[capsid|capsid]] face.",
        "blueprint": "A 125 nm glycosylated [[fiber brush|fibers]] projects radially off every [[capsid|capsid]] panel.",
        "scientific": "Cross-linked 125 nm glycosylated [[fibrils|fibers]] coat all faces of the 500 nm [[capsid|capsid]]."
      },
      "es": {
        "pop": "Una densa capa de [[fibras superficiales|fibers]] de 125 nm eriza cada cara de la [[cápside|capsid]].",
        "blueprint": "Un cepillo glicosilado de [[fibras|fibers]] de 125 nm sobresale de cada panel de la [[cápside|capsid]].",
        "scientific": "Un dosel de [[fibrillas|fibers]] glicosiladas de 125 nm cubre cada cara de la [[cápside|capsid]] de 500 nm."
      }
    },
    "mimi.ch1.s0.02": {
      "en": {
        "pop": "Like a Trojan meal, sugar-coated [[fibers|fibers]] mimic bacteria so [[amoeba membranes|amoeba_mem]] swallow it.",
        "blueprint": "Glycan-rich [[surface fibers|fibers]] spoof bacterial signatures to trigger [[amoeba|amoeba_mem]] uptake.",
        "scientific": "Peptidoglycan-like glycans on [[fibers|fibers]] trigger phagocytosis by [[Acanthamoeba|amoeba_mem]]."
      },
      "es": {
        "pop": "Como comida troyana, sus [[fibras|fibers]] imitan bacterias para que la [[membrana ameboide|amoeba_mem]] lo trague.",
        "blueprint": "Las [[fibras|fibers]] ricas en glicanos simulan bacterias y activan la captura por la [[ameba|amoeba_mem]].",
        "scientific": "Glicanos tipo peptidoglicano en las [[fibras|fibers]] inducen fagocitosis por [[Acanthamoeba|amoeba_mem]]."
      }
    },
    "mimi.ch1.s0.03": {
      "en": {
        "pop": "That bacterial disguise even retains Gram stain dye, fooling microbiologists for a decade.",
        "blueprint": "This outer glycan mimicry traps Gram stain complexes, masking the virion as a coccus for years.",
        "scientific": "Glycan dye retention yields false Gram-positive staining, explaining its name 'mimicking microbe'."
      },
      "es": {
        "pop": "Ese disfraz bacteriano incluso retiene la tinción de Gram, engañando a la ciencia una década.",
        "blueprint": "Este camuflaje glicánico atrapa el colorante de Gram y ocultó al virión como coco por años.",
        "scientific": "La retención de tinción Gram positiva dio origen a su nombre Mimivirus ('microbio imitador')."
      }
    },
    "mimi.ch1.s1.01": {
      "en": {
        "pop": "Under the [[fiber canopy|fibers]] lies a 500 nm pseudo-icosahedral protein [[capsid|capsid]].",
        "blueprint": "Beneath the [[fiber array|fibers]] sits a 500 nm pseudo-icosahedral structural [[protein shell|capsid]].",
        "scientific": "Subjacent to the [[fibers|fibers]] lies a 500 nm pseudo-icosahedral (T~1,179) [[capsid|capsid]]."
      },
      "es": {
        "pop": "Bajo el [[dosel fibroso|fibers]] descansa una [[cápside|capsid]] proteica pseudoicosaédrica de 500 nm.",
        "blueprint": "Debajo de la [[matriz fibrosa|fibers]] se aloja un [[casco proteico|capsid]] pseudoicosaédrico de 500 nm.",
        "scientific": "Bajo las [[fibras|fibers]] yace una [[cápside|capsid]] pseudoicosaédrica de 500 nm (T~1179)."
      }
    },
    "mimi.ch1.s1.02": {
      "en": {
        "pop": "Double-jelly-roll major capsid trimers tile each facet of the [[capsid|capsid]] into rigid armor.",
        "blueprint": "Hexagonal arrays of double-jelly-roll trimers lock every [[capsid|capsid]] plate into stiff armor.",
        "scientific": "Double-jelly-roll MCP trimers (homolog PDB 5J7O) tile the 20 facets of the [[capsid|capsid]] shell."
      },
      "es": {
        "pop": "Trímeros de doble rollo de gelatina cubren cada faceta de la [[cápside|capsid]] con coraza rígida.",
        "blueprint": "Matrices hexagonales de trímeros bloquean cada placa de la [[cápside|capsid]] en blindaje firme.",
        "scientific": "Trímeros MCP de doble jelly-roll (homólogo PDB 5J7O) teselan las 20 caras de la [[cápside|capsid]]."
      }
    },
    "mimi.ch1.s1.03": {
      "en": {
        "pop": "Twenty triangular faces shield the giant genome from pond water, desiccation and predators.",
        "blueprint": "This 20-panel geodesic vault resists shear, drying and digestive enzymes in freshwater habitats.",
        "scientific": "The ~7 nm thick protein lattice protects the nucleocapsid against osmotic shock and proteolysis."
      },
      "es": {
        "pop": "Veinte caras triangulares protegen al genoma gigante del agua, la desecación y depredadores.",
        "blueprint": "Esta bóveda geodésica de 20 paneles resiste cizalla, sequía y enzimas en agua dulce.",
        "scientific": "Esta red proteica de ~7 nm protege la nucleocápside frente a choque osmótico y proteólisis."
      }
    },
    "mimi.ch1.s2.01": {
      "en": {
        "pop": "Lining the interior of the [[capsid|capsid]] sits a continuous viral [[inner lipid bilayer|inner_mem]].",
        "blueprint": "Bonded directly inside the [[capsid|capsid]] is a pressurized internal [[lipid liner|inner_mem]].",
        "scientific": "Directly lining the [[capsid|capsid]] interior is an ~4 nm viral [[inner lipid bilayer|inner_mem]]."
      },
      "es": {
        "pop": "Tapizando el interior de la [[cápside|capsid]] hay una [[bicapa lipídica interna|inner_mem]] continua.",
        "blueprint": "Adosado dentro de la [[cápside|capsid]] va un [[revestimiento lipídico|inner_mem]] interno sellado.",
        "scientific": "Recubriendo el interior de la [[cápside|capsid]] yace una [[bicapa lipídica interna|inner_mem]] de ~4 nm."
      }
    },
    "mimi.ch1.s2.02": {
      "en": {
        "pop": "Unlike enveloped coronaviruses, Mimivirus hides this [[inner membrane|inner_mem]] inside protein armor.",
        "blueprint": "Inverting coronavirus layout, Mimivirus shields its [[lipid membrane|inner_mem]] beneath the hull.",
        "scientific": "Unlike enveloped viruses, NCLDVs enclose their [[inner membrane|inner_mem]] inside the MCP capsid."
      },
      "es": {
        "pop": "Al revés que los coronavirus, Mimivirus oculta su [[membrana interna|inner_mem]] bajo coraza proteica.",
        "blueprint": "Invirtiendo el diseño del coronavirus, oculta su [[membrana|inner_mem]] debajo del casco rígido.",
        "scientific": "A diferencia de virus envueltos, los NCLDV alojan la [[membrana interna|inner_mem]] bajo la cápside."
      }
    },
    "mimi.ch1.s2.03": {
      "en": {
        "pop": "This sealed [[lipid sac|inner_mem]] protects the [[genomic fiber|genomic_fiber]] until entry triggers fusion.",
        "blueprint": "This sealed [[bilayer sac|inner_mem]] isolates the [[genomic fiber|genomic_fiber]] until docking fires fusion.",
        "scientific": "The [[inner bilayer|inner_mem]] encapsulates the [[genomic fiber|genomic_fiber]] prior to phagosomal fusion."
      },
      "es": {
        "pop": "Este [[saco lipídico|inner_mem]] sellado protege la [[fibra genómica|genomic_fiber]] hasta la fusión.",
        "blueprint": "Este [[saco sellado|inner_mem]] aísla la [[fibra genómica|genomic_fiber]] hasta activar la fusión.",
        "scientific": "La [[bicapa interna|inner_mem]] encapsula la [[fibra genómica|genomic_fiber]] hasta la fusión fagosómica."
      }
    },
    "mimi.ch2.s0.01": {
      "en": {
        "pop": "One unique vertex breaks symmetry with a five-pointed star seam called the [[stargate|stargate]].",
        "blueprint": "One dedicated 5-fold vertex breaks symmetry to house the star-seamed [[stargate hatch|stargate]].",
        "scientific": "A single 5-fold vertex forms a starfish-shaped protein seal known as the [[stargate|stargate]]."
      },
      "es": {
        "pop": "Un vértice único rompe la simetría con una costura en estrella llamada [[stargate|stargate]].",
        "blueprint": "Un vértice quíntuple único rompe la simetría para alojar la [[escotilla stargate|stargate]].",
        "scientific": "Un vértice único de simetría 5 forma un sello estrellado denominado [[stargate|stargate]]."
      }
    },
    "mimi.ch2.s0.02": {
      "en": {
        "pop": "Inside an acidic [[phagosome|phagosome]], low pH triggers all five [[stargate|stargate]] petals to unzip.",
        "blueprint": "Acidic [[phagosome|phagosome]] input flips the 5-fold lock, unzipping all five [[stargate|stargate]] leaves.",
        "scientific": "Acidification inside the host [[phagosome|phagosome]] (~pH 5) unzips the five [[stargate|stargate]] seams."
      },
      "es": {
        "pop": "Dentro de un [[fagosoma|phagosome]] ácido, el pH bajo abre los cinco pétalos del [[stargate|stargate]].",
        "blueprint": "La señal ácida del [[fagosoma|phagosome]] destraba el cierre y abre cinco hojas del [[stargate|stargate]].",
        "scientific": "La acidificación en el [[fagosoma|phagosome]] (~pH 5) desensambla las cinco suturas del [[stargate|stargate]]."
      }
    },
    "mimi.ch2.s0.03": {
      "en": {
        "pop": "Wide open, the [[stargate|stargate]] clears a huge aperture straight through the rigid [[capsid|capsid]].",
        "blueprint": "Fully deployed, the [[stargate|stargate]] opens a wide unloading bay across the rigid [[capsid|capsid]].",
        "scientific": "Petal retraction widens the [[stargate|stargate]] portal into a ~250 nm breach in the [[capsid|capsid]]."
      },
      "es": {
        "pop": "Bien abierto, el [[stargate|stargate]] despeja un enorme portal a través de la rígida [[cápside|capsid]].",
        "blueprint": "Desplegado por completo, el [[stargate|stargate]] abre una bahía ancha en la [[cápside|capsid]].",
        "scientific": "La retracción de pétalos abre el [[stargate|stargate]] en una brecha de ~250 nm en la [[cápside|capsid]]."
      }
    },
    "mimi.ch2.s1.01": {
      "en": {
        "pop": "After the [[amoeba membrane|amoeba_mem]] swallows the virion, an acidic [[phagosome|phagosome]] encloses it.",
        "blueprint": "Host [[amoeba membrane|amoeba_mem]] endocytosis seals the giant virion inside a [[phagosome|phagosome]] bay.",
        "scientific": "Phagocytic uptake by [[Acanthamoeba|amoeba_mem]] traps the virion inside a maturing [[phagosome|phagosome]]."
      },
      "es": {
        "pop": "Tras engullirlo la [[membrana ameboide|amoeba_mem]], un [[fagosoma|phagosome]] ácido encierra al virión.",
        "blueprint": "La endocitosis de la [[membrana ameboide|amoeba_mem]] confina al virión en un [[fagosoma|phagosome]].",
        "scientific": "La fagocitosis por [[Acanthamoeba|amoeba_mem]] encierra al virión en un [[fagosoma|phagosome]] ácido."
      }
    },
    "mimi.ch2.s1.02": {
      "en": {
        "pop": "Through the open [[stargate|stargate]], the [[inner membrane|inner_mem]] fuses with the [[phagosome|phagosome]] wall.",
        "blueprint": "Via the open [[stargate|stargate]], the [[inner bilayer|inner_mem]] splices directly into the [[phagosome|phagosome]].",
        "scientific": "Protruding via the [[stargate|stargate]], the [[inner membrane|inner_mem]] fuses with the [[phagosome|phagosome]]."
      },
      "es": {
        "pop": "Por el [[stargate|stargate]] abierto, la [[membrana interna|inner_mem]] se fusiona con el [[fagosoma|phagosome]].",
        "blueprint": "Por el [[stargate|stargate]] abierto, la [[bicapa interna|inner_mem]] se empalma al [[fagosoma|phagosome]].",
        "scientific": "Al protuir por el [[stargate|stargate]], la [[membrana interna|inner_mem]] se fusiona al [[fagosoma|phagosome]]."
      }
    },
    "mimi.ch2.s1.03": {
      "en": {
        "pop": "That fusion bridge injects the entire [[genomic fiber|genomic_fiber]] directly into amoeba cytosol.",
        "blueprint": "This direct membrane conduit discharges the entire [[genomic fiber|genomic_fiber]] payload into cytosol.",
        "scientific": "The continuous fusion channel delivers the [[genomic fiber|genomic_fiber]] directly to host cytoplasm."
      },
      "es": {
        "pop": "Ese puente de fusión inyecta toda la [[fibra genómica|genomic_fiber]] directa al citosol ameboide.",
        "blueprint": "Ese conducto de membrana descarga toda la carga de [[fibra genómica|genomic_fiber]] al citosol.",
        "scientific": "El canal de fusión continuo transfiere la [[fibra genómica|genomic_fiber]] al citoplasma huésped."
      }
    },
    "mimi.ch3.s0.01": {
      "en": {
        "pop": "Inside the [[inner membrane|inner_mem]] coils a 30 nm helical [[genomic fiber|genomic_fiber]] protein shell.",
        "blueprint": "Coiled within the [[inner bilayer|inner_mem]] sits a 30 nm helical [[genomic fiber|genomic_fiber]] conduit.",
        "scientific": "Inside the [[inner membrane|inner_mem]] winds a 30 nm helical [[genomic fiber|genomic_fiber]] (PDB 7YX3)."
      },
      "es": {
        "pop": "Dentro de la [[membrana interna|inner_mem]] se enrolla una [[fibra genómica|genomic_fiber]] helicoidal de 30 nm.",
        "blueprint": "Enrollado bajo la [[bicapa interna|inner_mem]] corre un tubo helicoidal de [[fibra genómica|genomic_fiber]].",
        "scientific": "Bajo la [[membrana interna|inner_mem]] se enrolla la [[fibra genómica|genomic_fiber]] de 30 nm (PDB 7YX3)."
      }
    },
    "mimi.ch3.s0.02": {
      "en": {
        "pop": "This cryo-EM tube packages 1.18 Mbp of linear [[dsDNA|dsdna]] encoding roughly 1,000 viral genes.",
        "blueprint": "This tubular protein sheath stores 1.18 Mbp of linear [[dsDNA|dsdna]] encoding ~1,000 instructions.",
        "scientific": "GMC-oxidoreductase subunits wrap 1,181,549 bp of linear [[dsDNA|dsdna]] (~979-1,018 predicted ORFs)."
      },
      "es": {
        "pop": "Este tubo de crio-ME empaqueta 1,18 Mpb de [[ADNbc|dsdna]] lineal con unos 1.000 genes virales.",
        "blueprint": "Esta vaina tubular almacena 1,18 Mpb de [[ADNbc|dsdna]] lineal con ~1.000 instrucciones virales.",
        "scientific": "Subunidades GMC envuelven 1.181.549 pb de [[ADNbc|dsdna]] lineal (~979-1.018 ORFs predichos)."
      }
    },
    "mimi.ch3.s0.03": {
      "en": {
        "pop": "Unwinding the [[genomic fiber|genomic_fiber]] exposes [[viral dsDNA|dsdna]] right inside host cytoplasm.",
        "blueprint": "Progressive uncoiling of the [[genomic fiber|genomic_fiber]] mounts [[viral dsDNA|dsdna]] for cytosol readout.",
        "scientific": "Disassembly of the [[genomic fiber|genomic_fiber]] releases transcription-ready [[dsDNA|dsdna]] in cytosol."
      },
      "es": {
        "pop": "Desenrollar la [[fibra genómica|genomic_fiber]] expone el [[ADNbc viral|dsdna]] en el citoplasma huésped.",
        "blueprint": "El desenrollado de la [[fibra genómica|genomic_fiber]] monta el [[ADNbc viral|dsdna]] para lectura citosólica.",
        "scientific": "El desensamblaje de la [[fibra genómica|genomic_fiber]] libera [[ADNbc|dsdna]] transcribible en citosol."
      }
    },
    "mimi.ch3.s1.01": {
      "en": {
        "pop": "Mimivirus never enters the amoeba nucleus, because it packs its own [[RNA polymerase|viral_rnap]].",
        "blueprint": "Bypassing the host nucleus, the virion ships a preloaded [[RNA polymerase|viral_rnap]] engine.",
        "scientific": "Replication stays strictly cytoplasmic because the core packages viral [[RNA polymerase|viral_rnap]]."
      },
      "es": {
        "pop": "Mimivirus nunca entra al núcleo ameboide porque empaca su propia [[ARN polimerasa|viral_rnap]].",
        "blueprint": "Saltando el núcleo huésped, el virión trae precargado un motor [[ARN polimerasa|viral_rnap]].",
        "scientific": "La replicación es citoplasmática porque el núcleo viral porta su [[ARN polimerasa|viral_rnap]]."
      }
    },
    "mimi.ch3.s1.02": {
      "en": {
        "pop": "Early transcription launches immediately on [[dsDNA|dsdna]] via packaged [[viral RNAP|viral_rnap]].",
        "blueprint": "Immediate early routines boot straight off [[dsDNA|dsdna]] via preloaded [[viral RNAP|viral_rnap]].",
        "scientific": "Wait-free early transcription initiates on [[dsDNA|dsdna]] via packaged multi-subunit [[RNAP|viral_rnap]]."
      },
      "es": {
        "pop": "La transcripción temprana arranca al instante sobre el [[ADNbc|dsdna]] vía su [[ARN pol|viral_rnap]].",
        "blueprint": "Las rutinas tempranas arrancan directo del [[ADNbc|dsdna]] vía su [[ARN polimerasa|viral_rnap]] precargada.",
        "scientific": "La transcripción temprana inicia sin demora en el [[ADNbc|dsdna]] por la [[RNAP viral|viral_rnap]]."
      }
    },
    "mimi.ch3.s1.03": {
      "en": {
        "pop": "Viral [[mRNA capping enzymes|capping_enz]] add 5-prime caps so host translation accepts viral transcripts.",
        "blueprint": "Packaged [[capping modules|capping_enz]] stamp 5-prime headers so host ribosomes execute viral mRNA.",
        "scientific": "Bifunctional viral [[mRNA capping enzymes|capping_enz]] install 5'-m7G caps for eukaryotic translation."
      },
      "es": {
        "pop": "Las [[enzimas de caperuza|capping_enz]] virales ponen topes 5' para que el huésped traduzca su ARNm.",
        "blueprint": "Los [[módulos de caperuza|capping_enz]] sellan cabeceras 5' aceptadas por ribosomas huésped.",
        "scientific": "Las [[enzimas capping|capping_enz]] virales añaden casquetes 5'-m7G para traducción eucariota."
      }
    },
    "mimi.ch3.s2.01": {
      "en": {
        "pop": "Shockingly, its [[dsDNA|dsdna]] even encodes aminoacyl-tRNA synthetases such as viral [[TyrRS|tyrrs]].",
        "blueprint": "Unusually, its [[dsDNA|dsdna]] includes translation helpers like tyrosyl-tRNA charger [[TyrRS|tyrrs]].",
        "scientific": "Its [[dsDNA|dsdna]] encodes four aminoacyl-tRNA synthetases, notably homodimeric [[TyrRS|tyrrs]] (2J5B)."
      },
      "es": {
        "pop": "Sorprendentemente, su [[ADNbc|dsdna]] codifica aminoacil-ARNt sintetasas como [[TyrRS|tyrrs]].",
        "blueprint": "De forma inusual, su [[ADNbc|dsdna]] incluye auxiliares de traducción como la [[TyrRS|tyrrs]].",
        "scientific": "Su [[ADNbc|dsdna]] codifica cuatro aminoacil-ARNt sintetasas, como [[TyrRS|tyrrs]] (PDB 2J5B)."
      }
    },
    "mimi.ch3.s2.02": {
      "en": {
        "pop": "Like a crate of spare tools without a factory floor, [[TyrRS|tyrrs]] still needs [[host ribosomes|host_ribo]].",
        "blueprint": "Although [[TyrRS|tyrrs]] charges tyrosine-tRNA, synthesis still stalls without [[host 80S|host_ribo]].",
        "scientific": "Even though viral [[TyrRS|tyrrs]] aminoacylates tRNA-Tyr, polypeptide synthesis requires [[80S|host_ribo]]."
      },
      "es": {
        "pop": "Como caja de herramientas sin fábrica, [[TyrRS|tyrrs]] sigue dependiendo de los [[ribosomas huésped|host_ribo]].",
        "blueprint": "Aunque [[TyrRS|tyrrs]] carga ARNt-tirosina, la síntesis se frena sin los [[80S huésped|host_ribo]].",
        "scientific": "Pese a que [[TyrRS|tyrrs]] aminoacila ARNt-Tyr, la síntesis proteica exige [[ribosomas 80S|host_ribo]]."
      }
    },
    "mimi.ch3.s2.03": {
      "en": {
        "pop": "It carries zero ribosomal RNA and zero ribosomal proteins, failing life's translation pillar.",
        "blueprint": "With zero rRNA genes and zero ribosomal hardware, it fails the autonomous translation check.",
        "scientific": "Encoding 0 rRNAs and 0 ribosomal subunit proteins, Mimivirus fails the ribosomal autonomy pillar."
      },
      "es": {
        "pop": "Lleva cero ARN ribosómico y cero proteínas ribosómicas, fallando el pilar de la traducción.",
        "blueprint": "Con cero genes de ARNr y cero hardware ribosómico, reprueba el requisito de traducción.",
        "scientific": "Con 0 ARNr y 0 proteínas ribosómicas, Mimivirus incumple el pilar de autonomía ribosómica."
      }
    },
    "mimi.ch4.s0.01": {
      "en": {
        "pop": "Within hours, early proteins erect a giant cytoplasmic [[viral factory|viral_factory]] rivaling a nucleus.",
        "blueprint": "Hours post-entry, viral effectors build a nucleus-sized cytoplasmic [[assembly hub|viral_factory]].",
        "scientific": "By ~4 h post-infection, a ~5 um cytoplasmic [[viral factory|viral_factory]] replicates and packs virions."
      },
      "es": {
        "pop": "En pocas horas, proteínas tempranas alzan una [[fábrica viral|viral_factory]] del tamaño de un núcleo.",
        "blueprint": "Horas tras entrar, efectores virales arman una [[central de montaje|viral_factory]] citoplasmática.",
        "scientific": "A ~4 h posinfección, una [[fábrica viral|viral_factory]] de ~5 um replica y ensambla viriones."
      }
    },
    "mimi.ch4.s0.02": {
      "en": {
        "pop": "Host [[80S ribosomes|host_ribo]] and amoeba [[ATP pools|atp_pool]] ring this [[factory|viral_factory]] to build progeny.",
        "blueprint": "Hijacked [[80S compilers|host_ribo]] and host [[ATP power|atp_pool]] encircle the [[hub|viral_factory]] to mint virions.",
        "scientific": "Recruited host [[80S ribosomes|host_ribo]] and mitochondrial [[ATP|atp_pool]] fuel [[factory|viral_factory]] assembly."
      },
      "es": {
        "pop": "[[Ribosomas 80S|host_ribo]] y [[reservas de ATP|atp_pool]] ameboides rodean la [[fábrica|viral_factory]] viral.",
        "blueprint": "[[Compiladores 80S|host_ribo]] y [[energía ATP|atp_pool]] huésped cercan la [[central|viral_factory]] para producir prole.",
        "scientific": "[[Ribosomas 80S|host_ribo]] reclutados y [[ATP|atp_pool]] huésped alimentan la [[fábrica viral|viral_factory]]."
      }
    },
    "mimi.ch4.s0.03": {
      "en": {
        "pop": "With zero ATP synthases and zero ribosomes of its own, Mimivirus remains a non-living giant.",
        "blueprint": "Outsourcing both power generation and protein compilation keeps Mimivirus outside cellular life.",
        "scientific": "Lacking both F-ATP synthase and ribosomes (0/2 metabolic-translation pillars), it is non-living."
      },
      "es": {
        "pop": "Con cero ATP sintasas y cero ribosomas propios, Mimivirus sigue siendo un gigante no vivo.",
        "blueprint": "Subcontratar energía y compilación proteica mantiene a Mimivirus fuera de la vida celular.",
        "scientific": "Sin F-ATP sintasa ni ribosomas propios (0/2 pilares metabólicos y de traducción), no está vivo."
      }
    },
    "mimi.ch4.s1.01": {
      "en": {
        "pop": "Zoom to 0.1 nm atomic scale on [[dsDNA atoms|dna_atoms]]: C, H, N, O and phosphodiester P.",
        "blueprint": "Descend to 0.1 nm hardware level on [[dsDNA atoms|dna_atoms]]: C, H, N, O and phosphate P.",
        "scientific": "At 0.1 nm atomic resolution, [[dsDNA|dna_atoms]] resolves C, H, N, O bases and phosphodiester P."
      },
      "es": {
        "pop": "Acércate a escala atómica de 0,1 nm en [[átomos de ADNbc|dna_atoms]]: C, H, N, O y fósforo P.",
        "blueprint": "Desciende al nivel atómico de 0,1 nm en [[átomos ADNbc|dna_atoms]]: C, H, N, O y fosfato P.",
        "scientific": "A resolución atómica (0,1 nm), el [[ADNbc|dna_atoms]] muestra bases de C, H, N, O y fosfodiéster P."
      }
    },
    "mimi.ch4.s1.02": {
      "en": {
        "pop": "Hydrogen bonds pair A-T and G-C inside [[dsDNA atoms|dna_atoms]], storing 1.18 Mbp of viral code.",
        "blueprint": "Watson-Crick H-bond latches lock A-T and G-C across [[dsDNA atoms|dna_atoms]] across 1.18 Mbp.",
        "scientific": "Two A=T and three G-C hydrogen bonds stabilize [[B-DNA base pairs|dna_atoms]] across 1.18 Mbp."
      },
      "es": {
        "pop": "Puentes de hidrógeno unen A-T y G-C en [[átomos de ADNbc|dna_atoms]], guardando 1,18 Mpb virales.",
        "blueprint": "Cierres de hidrógeno fijan A-T y G-C en [[átomos ADNbc|dna_atoms]] a lo largo de 1,18 Mpb.",
        "scientific": "Dos puentes A=T y tres G-C estabilizan los [[pares de ADN-B|dna_atoms]] en sus 1,18 Mpb."
      }
    },
    "mimi.ch4.s1.03": {
      "en": {
        "pop": "Bigger than [[Mycoplasma|myco_ref]] yet non-living, Mimivirus leads next to naked RNA viroids.",
        "blueprint": "Larger than [[Mycoplasma|myco_ref]] yet dependent on hosts, Mimivirus transitions next to viroids.",
        "scientific": "Exceeding [[Mycoplasma|myco_ref]] in size yet acellular, Mimivirus bridges downward to naked viroids."
      },
      "es": {
        "pop": "Más grande que [[Mycoplasma|myco_ref]] pero no vivo, Mimivirus da paso ahora a los viroides desnudos.",
        "blueprint": "Mayor que [[Mycoplasma|myco_ref]] pero dependiente, Mimivirus abre paso a los viroides de ARN.",
        "scientific": "Mayor que [[Mycoplasma|myco_ref]] pero acelular, Mimivirus enlaza hacia abajo con los viroides."
      }
    }
  },
  "real-viroid": {
    "vir.ch0.s0.01": {
      "en": {
        "pop": "Meet Potato Spindle Tuber Viroid, or PSTVd: 359 nucleotides of naked circular single-stranded RNA.",
        "blueprint": "System node PSTVd: a bare 359-nucleotide circular ssRNA script stripped of all hardware.",
        "scientific": "Potato spindle tuber viroid (PSTVd, Pospiviroidae) is a 359-nt covalently closed circular ssRNA."
      },
      "es": {
        "pop": "Conoce al Viroide del Tubérculo Ahusado de la Papa (PSTVd): 359 nucleótidos de ARN circular desnudo.",
        "blueprint": "Nodo PSTVd: un código circular desnudo de ARNmc de 359 nucleótidos sin ningún soporte físico.",
        "scientific": "El viroide PSTVd (Pospiviroidae) es un ARN monocatenario circular cerrado de 359 nucleótidos."
      }
    },
    "vir.ch0.s0.02": {
      "en": {
        "pop": "Unlike Mimivirus or SARS-CoV-2, PSTVd wears zero protein capsid and zero lipid envelope.",
        "blueprint": "Below standard viruses, PSTVd deploys with zero protective protein hull and zero lipid skin.",
        "scientific": "Unlike virions such as Mimivirus or SARS-CoV-2, PSTVd possesses 0 capsid proteins and 0 envelope."
      },
      "es": {
        "pop": "A diferencia de Mimivirus o SARS-CoV-2, PSTVd tiene cero cápside proteica y cero envoltura lipídica.",
        "blueprint": "Por debajo de los virus, PSTVd opera sin casco proteico protector ni membrana lipídica externa.",
        "scientific": "Frente a viriones como Mimivirus o SARS-CoV-2, PSTVd carece por completo de cápside y envoltura."
      }
    },
    "vir.ch0.s0.03": {
      "en": {
        "pop": "It carries zero protein-coding genes, proving infectious code needs neither a coat nor ORFs.",
        "blueprint": "Containing zero protein-coding subroutines, its bare fold alone executes host takeover.",
        "scientific": "Encoding 0 open reading frames (0 proteins), PSTVd functions exclusively as non-coding structural RNA."
      },
      "es": {
        "pop": "No lleva genes que codifiquen proteínas, probando que el código infeccioso no precisa cápside.",
        "blueprint": "Sin ninguna subrutina codificante de proteínas, su solo plegamiento ejecuta la infección.",
        "scientific": "Con 0 marcos de lectura abiertos (0 proteínas), PSTVd actúa solo como ARN estructural no codificante."
      }
    },
    "vir.ch0.s1.01": {
      "en": {
        "pop": "Intramolecular base pairing collapses the ring into a stiff 50 by 2 nm rod across five domains.",
        "blueprint": "Internal base-pair locking folds the circular ribbon into a rigid 50 x 2 nm five-zone chassis.",
        "scientific": "Extensive intramolecular pairing folds the 359-nt circle into a ~50 x 2 nm rod with five domains."
      },
      "es": {
        "pop": "El emparejamiento interno pliega el anillo en una varilla rígida de 50 por 2 nm en cinco dominios.",
        "blueprint": "El cierre interno de bases pliega el lazo circular en un bastidor rígido de 50 x 2 nm y cinco zonas.",
        "scientific": "El apareamiento intramolecular pliega el círculo de 359 nt en una varilla (~50 x 2 nm) de 5 dominios."
      }
    },
    "vir.ch0.s1.02": {
      "en": {
        "pop": "Left to right run [[TL|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]] and [[TR|tr_domain]].",
        "blueprint": "Five modular zones span left to right: [[TL|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]], [[TR|tr_domain]].",
        "scientific": "Its secondary map spans [[T_L|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]] and [[T_R|tr_domain]]."
      },
      "es": {
        "pop": "De izquierda a derecha van [[TL|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]] y [[TR|tr_domain]].",
        "blueprint": "Cinco zonas modulares se alinean: [[TL|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]] y [[TR|tr_domain]].",
        "scientific": "Su mapa secundario abarca [[T_L|tl_domain]], [[P|p_domain]], [[C|c_domain]], [[V|v_domain]] y [[T_R|tr_domain]]."
      }
    },
    "vir.ch0.s1.03": {
      "en": {
        "pop": "Paired helical stems alternate with bulged loops, stabilizing this bare RNA inside plant nuclei.",
        "blueprint": "Alternating A-form stems and calibrated bulges stabilize the unshielded RNA inside plant nuclei.",
        "scientific": "Short Watson-Crick helices punctuated by 27 internal loops stabilize PSTVd within host nucleoplasm."
      },
      "es": {
        "pop": "Tallos helicoidales alternan con bucles abultados, estabilizando este ARN desnudo en el núcleo.",
        "blueprint": "Tallos en forma A y bucles calibrados estabilizan el código desprotegido en núcleos vegetales.",
        "scientific": "Hélices cortas de Watson-Crick alternadas con 27 bucles internos estabilizan a PSTVd en el núcleo."
      }
    },
    "vir.ch1.s0.01": {
      "en": {
        "pop": "The [[Terminal Left domain|tl_domain]] initiates replication, while [[P domain|p_domain]] drives symptoms.",
        "blueprint": "The [[TL port|tl_domain]] initializes copying cycles, whereas the [[P module|p_domain]] triggers pathology.",
        "scientific": "Replication initiates near [[T_L|tl_domain]], while [[Pathogenicity domain P|p_domain]] modulates virulence."
      },
      "es": {
        "pop": "El [[dominio Terminal Izquierdo|tl_domain]] inicia la copia y el [[dominio P|p_domain]] causa síntomas.",
        "blueprint": "El [[puerto TL|tl_domain]] arranca la replicación y el [[módulo P|p_domain]] dispara la patología.",
        "scientific": "La replicación inicia cerca de [[T_L|tl_domain]], mientras el [[dominio P|p_domain]] modula la virulencia."
      }
    },
    "vir.ch1.s0.02": {
      "en": {
        "pop": "Processing of [[P domain|p_domain]] into small RNAs silences host plant genes, stunting tubers.",
        "blueprint": "Dicer cleavage of [[P domain|p_domain]] spawns small RNAs that jam host gene expression and growth.",
        "scientific": "Host DCL cleavage of [[P domain|p_domain]] generates vd-sRNAs that guide RNAi silencing of host mRNAs."
      },
      "es": {
        "pop": "El corte del [[dominio P|p_domain]] en ARN pequeños silencia genes vegetales y deforma tubérculos.",
        "blueprint": "El procesamiento Dicer del [[dominio P|p_domain]] genera ARN cortos que bloquean genes huésped.",
        "scientific": "El corte por DCL del [[dominio P|p_domain]] produce vd-sRNA que silencian ARNm vegetales vía ARNi."
      }
    },
    "vir.ch1.s0.03": {
      "en": {
        "pop": "Across the right half, [[V domain|v_domain]] tolerates mutation and [[TR|tr_domain]] steers cell exit.",
        "blueprint": "On the right, [[V zone|v_domain]] absorbs sequence drift while [[TR port|tr_domain]] routes export.",
        "scientific": "Rightward, [[Variable domain V|v_domain]] diverges rapidly while [[T_R|tr_domain]] directs phloem traffic."
      },
      "es": {
        "pop": "En la mitad derecha, el [[dominio V|v_domain]] tolera mutaciones y [[TR|tr_domain]] guía la salida.",
        "blueprint": "A la derecha, la [[zona V|v_domain]] absorbe deriva de secuencia y el [[puerto TR|tr_domain]] dirige salida.",
        "scientific": "Hacia la derecha, el [[dominio V|v_domain]] varía más y [[T_R|tr_domain]] dirige el tráfico por floema."
      }
    },
    "vir.ch1.s1.01": {
      "en": {
        "pop": "At rod center sits the [[Central Conserved Region|c_domain]], shared across Pospiviroidae viroids.",
        "blueprint": "At rod midpoint sits the [[Central Conserved core|c_domain]], the invariant hub of nuclear viroids.",
        "scientific": "Mid-rod lies the [[Central Conserved Region|c_domain]] (CCR), invariant across genus Pospiviroid."
      },
      "es": {
        "pop": "Al centro de la varilla está la [[Región Central Conservada|c_domain]], común en Pospiviroidae.",
        "blueprint": "En el eje medio se ubica el [[núcleo Central Conservado|c_domain]], centro fijo de viroides nucleares.",
        "scientific": "En el centro yace la [[Región Central Conservada|c_domain]] (CCR), invariable en Pospiviroid."
      }
    },
    "vir.ch1.s1.02": {
      "en": {
        "pop": "Embedded here is [[Loop E|loop_e]], a rigid non-canonical base-triple motif docking host factors.",
        "blueprint": "Nested inside is [[Loop E|loop_e]], a rigid 3D docking socket recruiting host transcription gear.",
        "scientific": "Within CCR sits [[Loop E|loop_e]] (motif template 1S72), a non-canonical water-spine docking motif."
      },
      "es": {
        "pop": "Incrustado allí está [[Loop E|loop_e]], un motivo rígido no canónico que acopla factores huésped.",
        "blueprint": "Integrado en el centro va [[Loop E|loop_e]], un zócalo 3D rígido que recluta equipo huésped.",
        "scientific": "En la CCR se halla [[Loop E|loop_e]] (plantilla PDB 1S72), motivo no canónico de unión a factores."
      }
    },
    "vir.ch1.s1.03": {
      "en": {
        "pop": "Adjacent sequences refold into the [[CCR hairpin|ccr_hairpin]] required to cleave progeny rings.",
        "blueprint": "Neighboring strands switch into the [[CCR hairpin|ccr_hairpin]] trigger for progeny snipping.",
        "scientific": "Metastable hairpin I refolds into the [[CCR cleavage motif|ccr_hairpin]] during (+)RNA processing."
      },
      "es": {
        "pop": "Secuencias vecinas se pliegan en la [[horquilla CCR|ccr_hairpin]] clave para cortar anillos hijos.",
        "blueprint": "Hebras vecinas conmutan a la [[horquilla CCR|ccr_hairpin]] que activa el corte de copias hijas.",
        "scientific": "La horquilla metaestable I forma el [[motivo CCR|ccr_hairpin]] para escindir copias (+)ARN."
      }
    },
    "vir.ch1.s2.01": {
      "en": {
        "pop": "Alongside standard A-U and G-C rungs sit golden [[G-U wobble pairs|wobble_gu]] shaping stem twist.",
        "blueprint": "Alongside Watson-Crick rungs, golden [[G-U wobbles|wobble_gu]] calibrate local helix curvature.",
        "scientific": "Non-canonical [[G-U wobble pairs|wobble_gu]] pair alongside A-U and G-C rungs to tune minor-groove geometry."
      },
      "es": {
        "pop": "Junto a peldaños A-U y G-C hay [[pares tambaleantes G-U|wobble_gu]] que ajustan el giro del tallo.",
        "blueprint": "Junto a enlaces Watson-Crick, los [[pares G-U|wobble_gu]] calibran la curvatura local de la hélice.",
        "scientific": "Los [[pares wobble G-U|wobble_gu]] alternan con A-U y G-C modulando la geometría del surco menor."
      }
    },
    "vir.ch1.s2.02": {
      "en": {
        "pop": "Tight pairing and [[G-U wobbles|wobble_gu]] fold [[Loop E|loop_e]] stems like origami armor against RNases.",
        "blueprint": "Compact stems and [[G-U wobbles|wobble_gu]] harden [[Loop E|loop_e]] segments against nuclease degradation.",
        "scientific": "High GC content, [[G-U wobbles|wobble_gu]] and [[Loop E|loop_e]] stacking confer plant RNase resistance."
      },
      "es": {
        "pop": "El emparejamiento y [[pares G-U|wobble_gu]] pliegan [[Loop E|loop_e]] como armadura origami ante RNasas.",
        "blueprint": "Tallos compactos y [[pares G-U|wobble_gu]] blindan segmentos de [[Loop E|loop_e]] frente a nucleasas.",
        "scientific": "Alto contenido GC, [[pares G-U|wobble_gu]] y apilamiento en [[Loop E|loop_e]] resisten RNasas vegetales."
      }
    },
    "vir.ch1.s2.03": {
      "en": {
        "pop": "Every structural bulge acts as a physical recognition address replacing protein-encoded signals.",
        "blueprint": "Each calibrated bulge encodes an address tag in 3D geometry instead of translated protein keys.",
        "scientific": "3D RNA motifs replace protein-coding signals to mediate nuclear import, replication and transport."
      },
      "es": {
        "pop": "Cada bucle estructural sirve de dirección física que sustituye a las señales de proteínas.",
        "blueprint": "Cada protuberancia calibrada cifra una dirección 3D en lugar de llaves proteicas traducidas.",
        "scientific": "Motivos 3D de ARN sustituyen señales proteicas para importación nuclear, copia y transporte."
      }
    },
    "vir.ch2.s0.01": {
      "en": {
        "pop": "Inside the plant nucleus, PSTVd hijacks host 12-subunit [[RNA Polymerase II|pol2]] for copying.",
        "blueprint": "Inside the nucleus, the bare rod hijacks the host 12-subunit [[RNA Pol II|pol2]] compiler engine.",
        "scientific": "Within nucleoplasm, PSTVd recruits host 12-subunit [[RNA Polymerase II|pol2]] (PDB 1WCM) as replicase."
      },
      "es": {
        "pop": "En el núcleo vegetal, PSTVd secuestra la [[ARN Polimerasa II|pol2]] huésped de 12 subunidades.",
        "blueprint": "En el núcleo, la varilla secuestra el motor compilador [[ARN Pol II|pol2]] de 12 subunidades.",
        "scientific": "En el nucleoplasma, PSTVd recluta a [[ARN Polimerasa II|pol2]] huésped (PDB 1WCM) como replicasa."
      }
    },
    "vir.ch2.s0.02": {
      "en": {
        "pop": "Via [[TFIIIA-7ZF|tfiiia]], bare executable text with no envelope tricks [[RNA Pol II|pol2]] to copy it.",
        "blueprint": "Adapter [[TFIIIA-7ZF|tfiiia]] remaps the naked RNA input onto DNA-reading [[RNA Pol II|pol2]].",
        "scientific": "Splicing variant [[TFIIIA-7ZF|tfiiia]] bridges PSTVd onto DNA-dependent [[RNA Pol II|pol2]] catalysis."
      },
      "es": {
        "pop": "Vía [[TFIIIA-7ZF|tfiiia]], texto ejecutable sin sobre engaña a la [[ARN Pol II|pol2]] para copiarse.",
        "blueprint": "El adaptador [[TFIIIA-7ZF|tfiiia]] redirige el ARN desnudo hacia la [[ARN Pol II|pol2]] lectora de ADN.",
        "scientific": "La variante [[TFIIIA-7ZF|tfiiia]] enlaza PSTVd al sitio catalítico de [[ARN Pol II|pol2]] ADN-dependiente."
      }
    },
    "vir.ch2.s0.03": {
      "en": {
        "pop": "With zero viral polymerase of its own, PSTVd turns a host DNA copier into an RNA replicase.",
        "blueprint": "Shipping zero polymerase hardware, the script reprograms a native DNA reader into an RNA copier.",
        "scientific": "Encoding 0 RdRp enzymes, PSTVd redirects host DNA-dependent Pol II to RNA-templated synthesis."
      },
      "es": {
        "pop": "Sin polimerasa viral propia, PSTVd convierte una copiadora de ADN huésped en replicasa de ARN.",
        "blueprint": "Sin hardware polimerasa propio, reprograma un lector nativo de ADN en copiadora de ARN.",
        "scientific": "Con 0 enzimas RdRp, PSTVd redirige la Pol II ADN-dependiente hacia síntesis guiada por ARN."
      }
    },
    "vir.ch2.s1.01": {
      "en": {
        "pop": "Running asymmetric rolling-circle copying, [[Pol II|pol2]] spools a long [[minus RNA|minus_rna]] chain.",
        "blueprint": "In asymmetric rolling-circle mode, [[Pol II|pol2]] extrudes a continuous [[minus RNA|minus_rna]] tape.",
        "scientific": "Asymmetric rolling-circle transcription by [[Pol II|pol2]] yields oligomeric [[(-)ssRNA|minus_rna]]."
      },
      "es": {
        "pop": "En copia asimétrica de círculo rodante, [[Pol II|pol2]] devana una larga cadena de [[ARN menos|minus_rna]].",
        "blueprint": "En modo círculo rodante asimétrico, [[Pol II|pol2]] extruye una cinta continua de [[ARN menos|minus_rna]].",
        "scientific": "La transcripción asimétrica rodante por [[Pol II|pol2]] genera [[ARNmc(-)|minus_rna]] oligomérico."
      }
    },
    "vir.ch2.s1.02": {
      "en": {
        "pop": "Each lap around the 359-nt ring extends the multimeric [[minus-strand concatemer|minus_rna]] unbroken.",
        "blueprint": "Repeated laps around the 359-nt loop output linked unit repeats on one [[minus ribbon|minus_rna]].",
        "scientific": "Processive laps around the circular 359-nt template elongate linear [[(-) concatamers|minus_rna]]."
      },
      "es": {
        "pop": "Cada vuelta al anillo de 359 nt alarga sin cortes el [[concatémero menos|minus_rna]] multimérico.",
        "blueprint": "Vueltas repetidas al bucle de 359 nt emiten copias unidas en una sola [[cinta menos|minus_rna]].",
        "scientific": "Vueltas procesivas al molde circular de 359 nt alargan [[concatémeros (-)|minus_rna]] lineales."
      }
    },
    "vir.ch2.s1.03": {
      "en": {
        "pop": "[[Pol II|pol2]] then transcribes that [[minus strand|minus_rna]] into multimeric [[plus RNA|plus_rna]].",
        "blueprint": "Next, [[Pol II|pol2]] reads the [[minus template|minus_rna]] to output multimeric [[plus RNA|plus_rna]].",
        "scientific": "[[RNA Pol II|pol2]] then uses [[(-) concatamers|minus_rna]] directly to transcribe multimeric [[(+)RNA|plus_rna]]."
      },
      "es": {
        "pop": "Luego [[Pol II|pol2]] transcribe esa [[hebra menos|minus_rna]] en copias multiméricas de [[ARN más|plus_rna]].",
        "blueprint": "Luego [[Pol II|pol2]] lee el [[molde menos|minus_rna]] para emitir cadenas largas de [[ARN más|plus_rna]].",
        "scientific": "[[ARN Pol II|pol2]] usa los [[concatémeros (-)|minus_rna]] para transcribir [[(+)ARN|plus_rna]] multimérico."
      }
    },
    "vir.ch2.s2.01": {
      "en": {
        "pop": "Host RNase III recognizes the [[CCR hairpin|ccr_hairpin]] and snips [[plus RNA|plus_rna]] into 359-nt units.",
        "blueprint": "Host RNase III detects the [[CCR hairpin|ccr_hairpin]] cut mark and slices [[plus RNA|plus_rna]] monomers.",
        "scientific": "An RNase III-like endonuclease cleaves [[CCR hairpins|ccr_hairpin]] in [[(+) concatamers|plus_rna]] to 359 nt."
      },
      "es": {
        "pop": "La RNasa III huésped reconoce la [[horquilla CCR|ccr_hairpin]] y corta el [[ARN más|plus_rna]] en 359 nt.",
        "blueprint": "La RNasa III detecta la marca de la [[horquilla CCR|ccr_hairpin]] y corta monómeros de [[ARN más|plus_rna]].",
        "scientific": "Una endonucleasa tipo RNasa III corta [[horquillas CCR|ccr_hairpin]] en [[(+)ARN|plus_rna]] a 359 nt."
      }
    },
    "vir.ch2.s2.02": {
      "en": {
        "pop": "Then plant [[DNA ligase 1|ligase]] seals each linear [[plus RNA|plus_rna]] guided by [[Loop E|loop_e]].",
        "blueprint": "Host [[DNA ligase 1|ligase]] then welds each [[plus monomer|plus_rna]] closed using [[Loop E|loop_e]] alignment.",
        "scientific": "Host nuclear [[DNA ligase 1|ligase]] circularizes unit-length [[(+)RNA|plus_rna]] aligned by [[Loop E|loop_e]]."
      },
      "es": {
        "pop": "Luego la [[ADN ligasa 1|ligase]] vegetal sella cada [[ARN más|plus_rna]] lineal guiada por [[Loop E|loop_e]].",
        "blueprint": "La [[ADN ligasa 1|ligase]] huésped suelda cada [[monómero más|plus_rna]] alineado por [[Loop E|loop_e]].",
        "scientific": "La [[ADN ligasa 1|ligase]] nuclear circulariza monómeros [[(+)ARN|plus_rna]] alineados por [[Loop E|loop_e]]."
      }
    },
    "vir.ch2.s2.03": {
      "en": {
        "pop": "Fresh naked circles exit through plasmodesmata to infect neighboring plant cells systemically.",
        "blueprint": "Finished bare RNA rings traffic through plasmodesmata channels into adjacent plant cells.",
        "scientific": "Mature 359-nt circular progeny traverse plasmodesmata and phloem for systemic plant infection."
      },
      "es": {
        "pop": "Los nuevos círculos desnudos salen por plasmodesmos e infectan de forma sistémica a la planta.",
        "blueprint": "Los anillos de ARN terminados viajan por canales plasmodésmicos hacia células vecinas.",
        "scientific": "La progenie circular de 359 nt cruza plasmodesmos y floema causando infección sistémica."
      }
    },
    "vir.ch3.s0.01": {
      "en": {
        "pop": "Zoom to 0.1 nm atomic resolution on [[RNA atoms|rna_atoms]]: only C, H, N, O and phosphorus P.",
        "blueprint": "Zoom to 0.1 nm atomic hardware on [[RNA atoms|rna_atoms]]: strictly C, H, N, O and backbone P.",
        "scientific": "At 0.1 nm atomic scale, [[PSTVd RNA|rna_atoms]] contains solely C, H, N, O and phosphodiester P."
      },
      "es": {
        "pop": "Acércate a 0,1 nm en los [[átomos de ARN|rna_atoms]]: únicamente C, H, N, O y fósforo P.",
        "blueprint": "Haz zoom a 0,1 nm en los [[átomos de ARN|rna_atoms]]: estrictamente C, H, N, O y fósforo P.",
        "scientific": "A escala atómica de 0,1 nm, el [[ARN de PSTVd|rna_atoms]] consta solo de C, H, N, O y fósforo P."
      }
    },
    "vir.ch3.s0.02": {
      "en": {
        "pop": "Each ribose 2-prime OH in [[RNA atoms|rna_atoms]] drives A-form geometry and [[G-U wobble|wobble_gu]] pairs.",
        "blueprint": "Ribose 2-prime OH groups in [[RNA atoms|rna_atoms]] enforce A-form stems and [[G-U wobbles|wobble_gu]].",
        "scientific": "The ribose 2'-OH in [[RNA|rna_atoms]] locks C3'-endo A-form geometry and stabilizes [[G-U pairs|wobble_gu]]."
      },
      "es": {
        "pop": "Cada grupo 2'-OH en [[átomos de ARN|rna_atoms]] dicta la forma A y los [[pares G-U|wobble_gu]].",
        "blueprint": "Los grupos 2'-OH ribosa en [[átomos de ARN|rna_atoms]] imponen tallos A y [[pares G-U|wobble_gu]].",
        "scientific": "El 2'-OH de la ribosa en el [[ARN|rna_atoms]] fija la forma A C3'-endo y los [[pares G-U|wobble_gu]]."
      }
    },
    "vir.ch3.s0.03": {
      "en": {
        "pop": "Not a single amino-acid sulfur atom belongs to PSTVd itself; host enzymes do every reaction.",
        "blueprint": "Zero protein sulfur atoms reside in PSTVd itself; every catalytic step runs on host machinery.",
        "scientific": "Zero polypeptide or sulfur atoms belong to PSTVd; host Pol II, RNase and ligase run all chemistry."
      },
      "es": {
        "pop": "Ni un solo átomo de azufre proteico pertenece a PSTVd; las enzimas huésped hacen cada reacción.",
        "blueprint": "Cero átomos de azufre proteico pertenecen a PSTVd; toda catálisis corre en equipo huésped.",
        "scientific": "PSTVd carece de polipéptidos y azufre; Pol II, RNasa y ligasa vegetales catalizan todo."
      }
    },
    "vir.ch3.s1.01": {
      "en": {
        "pop": "Five RNA domains, [[Loop E|loop_e]], host [[Pol II|pol2]] and [[ligase|ligase]] sustain a coatless replicator.",
        "blueprint": "Five folded RNA zones, [[Loop E|loop_e]], hijacked [[Pol II|pol2]] and [[ligase|ligase]] close the loop.",
        "scientific": "Five domains, [[Loop E|loop_e]], nuclear [[Pol II|pol2]] and [[DNA ligase 1|ligase]] propagate naked PSTVd."
      },
      "es": {
        "pop": "Cinco dominios, [[Loop E|loop_e]], [[Pol II|pol2]] y [[ligasa|ligase]] sostienen un replicador sin capa.",
        "blueprint": "Cinco zonas de ARN, [[Loop E|loop_e]], [[Pol II|pol2]] y [[ligasa|ligase]] cierran el ciclo sin cápside.",
        "scientific": "Cinco dominios, [[Loop E|loop_e]], [[Pol II|pol2]] y [[ADN ligasa 1|ligase]] propagan el ARN desnudo."
      }
    },
    "vir.ch3.s1.02": {
      "en": {
        "pop": "With zero capsid, zero genes for proteins, zero ribosomes and zero ATP, PSTVd is pure RNA code.",
        "blueprint": "Zero hull, zero protein genes, zero compilers and zero power leave PSTVd as bare executable RNA.",
        "scientific": "With 0 capsid, 0 ORFs, 0 ribosomes and 0 ATP synthesis, PSTVd represents pure subviral RNA code."
      },
      "es": {
        "pop": "Con cero cápside, cero genes de proteínas, cero ribosomas y cero ATP, PSTVd es puro código ARN.",
        "blueprint": "Sin casco, sin genes proteicos, sin ribosomas ni energía, PSTVd es código ARN ejecutable puro.",
        "scientific": "Con 0 cápside, 0 ORFs, 0 ribosomas y 0 ATP, PSTVd representa código subviral puro de ARN."
      }
    },
    "vir.ch3.s1.03": {
      "en": {
        "pop": "Inspect any domain tag now, or continue to Prions to see infectious shape with zero genes.",
        "blueprint": "Inspect any domain node now, or step down to Prions for code-free protein propagation.",
        "scientific": "Inspect any RNA motif now, or advance to Prions to examine nucleic-acid-free amyloid infectivity."
      },
      "es": {
        "pop": "Explora cualquier dominio ahora o sigue a los Priones para ver forma infecciosa sin genes.",
        "blueprint": "Inspecciona cualquier módulo o baja a los Priones para ver propagación proteica sin código.",
        "scientific": "Inspecciona cualquier motivo de ARN o avanza a los Priones para ver infectividad sin genes."
      }
    }
  },
  "real-prion": {
    "pri.ch0.s0.01": {
      "en": {
        "pop": "Meet the mammalian prion, an infectious agent made purely of misfolded protein with zero genes.",
        "blueprint": "System node Prion: a protein-only infectious conformer propagating with zero nucleic-acid code.",
        "scientific": "Mammalian prions are proteinaceous infectious particles lacking DNA, RNA or any genetic genome."
      },
      "es": {
        "pop": "Conoce al prión mamífero, un agente infeccioso hecho solo de proteína mal plegada y cero genes.",
        "blueprint": "Nodo Prión: un confórmero proteico infeccioso que se propaga con cero código nucleico.",
        "scientific": "Los priones mamíferos son partículas proteicas infecciosas carentes de ADN, ARN o genoma."
      }
    },
    "pri.ch0.s0.02": {
      "en": {
        "pop": "Unlike viruses or viroids, [[PrPsc fibrils|prpsc_fibril]] carry zero DNA and zero RNA nucleotides.",
        "blueprint": "Below even viroids, [[PrPsc fibrils|prpsc_fibril]] transmit state with zero DNA or RNA bytes.",
        "scientific": "Unlike viruses or viroids, infectious [[PrPsc amyloid|prpsc_fibril]] contains 0 DNA and 0 RNA bases."
      },
      "es": {
        "pop": "A diferencia de virus o viroides, las [[fibrillas PrPsc|prpsc_fibril]] llevan cero ADN y cero ARN.",
        "blueprint": "Bajo los viroides, las [[fibrillas PrPsc|prpsc_fibril]] propagan estado con cero bytes de ADN o ARN.",
        "scientific": "Frente a virus o viroides, el [[amiloide PrPsc|prpsc_fibril]] contiene 0 nucleótidos de ADN o ARN."
      }
    },
    "pri.ch0.s0.03": {
      "en": {
        "pop": "Information propagates purely by shape, converting healthy [[PrPc|prpc]] into [[PrPsc|prpsc_fibril]].",
        "blueprint": "3D geometry alone carries the signal, flipping healthy [[PrPc|prpc]] into [[PrPsc|prpsc_fibril]] stacks.",
        "scientific": "Conformational templating alone converts cellular [[PrPc|prpc]] into pathogenic [[PrPsc|prpsc_fibril]]."
      },
      "es": {
        "pop": "La información viaja solo por la forma, convirtiendo [[PrPc|prpc]] sana en [[PrPsc|prpsc_fibril]].",
        "blueprint": "Solo la geometría 3D transmite la señal, plegando [[PrPc|prpc]] en pilas de [[PrPsc|prpsc_fibril]].",
        "scientific": "El moldeado conformacional convierte la [[PrPc|prpc]] celular en [[PrPsc|prpsc_fibril]] patógena."
      }
    },
    "pri.ch0.s1.01": {
      "en": {
        "pop": "Both harmless [[PrPc|prpc]] and lethal [[PrPsc|prpsc_fibril]] share the exact same 208-residue sequence.",
        "blueprint": "Benign [[PrPc|prpc]] and toxic [[PrPsc|prpsc_fibril]] run identical 208-amino-acid primary sequences.",
        "scientific": "Soluble [[PrPc|prpc]] and fibrillar [[PrPsc|prpsc_fibril]] share identical ~208-aa sequence (23-230)."
      },
      "es": {
        "pop": "La [[PrPc|prpc]] sana y la letal [[PrPsc|prpsc_fibril]] comparten la misma secuencia de 208 residuos.",
        "blueprint": "La [[PrPc|prpc]] benigna y la tóxica [[PrPsc|prpsc_fibril]] usan la misma cadena de 208 aminoácidos.",
        "scientific": "[[PrPc|prpc]] soluble y [[PrPsc|prpsc_fibril]] fibrilar comparten idéntica secuencia (~208 aa, 23-230)."
      }
    },
    "pri.ch0.s1.02": {
      "en": {
        "pop": "Encoded by the host PRNP gene, mature residues 23 to 230 adopt two radically different 3D folds.",
        "blueprint": "Translated from host PRNP, the same ~23 kDa polypeptide switches between two structural states.",
        "scientific": "Host PRNP encodes mature residues 23-230 (~23 kDa), which populate two distinct free-energy minima."
      },
      "es": {
        "pop": "Codificada por el gen PRNP, la proteína madura (23-230) adopta dos pliegues 3D opuestos.",
        "blueprint": "Traducida del gen huésped PRNP, la misma cadena de ~23 kDa alterna entre dos estados 3D.",
        "scientific": "El gen PRNP codifica los residuos 23-230 (~23 kDa), capaces de poblar dos mínimos conformacionales."
      }
    },
    "pri.ch0.s1.03": {
      "en": {
        "pop": "Soluble [[alpha-helices|helices_h123]] flip into an insoluble [[cross-beta core|piribs_core]] without mutation.",
        "blueprint": "Native [[alpha-helices|helices_h123]] recompile into a locked [[cross-beta core|piribs_core]] with zero DNA edit.",
        "scientific": "Three native [[alpha-helices|helices_h123]] refold into a [[PIRIBS cross-beta core|piribs_core]] post-translationally."
      },
      "es": {
        "pop": "[[Hélices alfa|helices_h123]] solubles giran a un [[núcleo beta cruzado|piribs_core]] insoluble sin mutar.",
        "blueprint": "Las [[hélices alfa|helices_h123]] se recompilan en un [[núcleo beta|piribs_core]] rígido sin editar ADN.",
        "scientific": "Tres [[hélices alfa|helices_h123]] se repliegan postraduccionalmente en el [[núcleo PIRIBS|piribs_core]]."
      }
    },
    "pri.ch1.s0.01": {
      "en": {
        "pop": "On healthy brain neurons, cholesterol-rich [[lipid rafts|lipid_raft]] host native [[PrPc|prpc]] monomers.",
        "blueprint": "Across healthy neuronal surfaces, ordered [[lipid rafts|lipid_raft]] stage soluble [[PrPc|prpc]] units.",
        "scientific": "Cholesterol-sphingolipid [[lipid rafts|lipid_raft]] localize monomeric cellular [[PrPc|prpc]] on neurons."
      },
      "es": {
        "pop": "En neuronas sanas, [[balsas lipídicas|lipid_raft]] ricas en colesterol alojan monómeros de [[PrPc|prpc]].",
        "blueprint": "En superficies neuronales sanas, [[balsas lipídicas|lipid_raft]] posicionan unidades de [[PrPc|prpc]].",
        "scientific": "Las [[balsas lipídicas|lipid_raft]] de colesterol localizan la [[PrPc|prpc]] monomérica en neuronas."
      }
    },
    "pri.ch1.s0.02": {
      "en": {
        "pop": "A C-terminal [[GPI anchor|gpi_anchor]] tethers [[PrPc|prpc]] to the outer leaflet of the [[lipid raft|lipid_raft]].",
        "blueprint": "A C-terminal [[GPI tether|gpi_anchor]] bolts [[PrPc|prpc]] onto the outer [[lipid raft|lipid_raft]] deck.",
        "scientific": "Glycosylphosphatidylinositol [[GPI anchor|gpi_anchor]] links [[PrPc|prpc]] C-terminus to [[rafts|lipid_raft]]."
      },
      "es": {
        "pop": "Un [[ancla GPI|gpi_anchor]] C-terminal amarra [[PrPc|prpc]] a la cara externa de la [[balsa lipídica|lipid_raft]].",
        "blueprint": "Un [[amarre GPI|gpi_anchor]] C-terminal fija [[PrPc|prpc]] sobre la cubierta de la [[balsa lipídica|lipid_raft]].",
        "scientific": "Un [[ancla GPI|gpi_anchor]] une el extremo C de [[PrPc|prpc]] a la hoja externa de [[balsas|lipid_raft]]."
      }
    },
    "pri.ch1.s0.03": {
      "en": {
        "pop": "Normal [[PrPc|prpc]] stays monomeric, soluble and easily recycled by cellular proteases.",
        "blueprint": "In healthy operation, [[PrPc|prpc]] remains monomeric, water-soluble and cleared by proteases.",
        "scientific": "Native [[PrPc|prpc]] is monomeric (~4 x 3 nm), detergent-soluble and fully Proteinase K-sensitive."
      },
      "es": {
        "pop": "La [[PrPc|prpc]] normal permanece monomérica, soluble y fácil de reciclar por proteasas celulares.",
        "blueprint": "En operación sana, [[PrPc|prpc]] sigue siendo monomérica, hidrosoluble y degradable por proteasas.",
        "scientific": "La [[PrPc|prpc]] nativa (~4 x 3 nm) es monomérica, soluble y sensible a la Proteinasa K."
      }
    },
    "pri.ch1.s1.01": {
      "en": {
        "pop": "Solution NMR reveals [[PrPc|prpc]] built around three compact [[alpha-helices H1-H3|helices_h123]].",
        "blueprint": "Structural NMR resolves [[PrPc|prpc]] as a globular core of three bundled [[alpha-helices|helices_h123]].",
        "scientific": "Human NMR structure [[PrPc|prpc]] (PDB 1QLX) folds around three [[alpha-helices H1-H3|helices_h123]]."
      },
      "es": {
        "pop": "La RMN revela a [[PrPc|prpc]] construida en torno a tres compactas [[hélices alfa H1-H3|helices_h123]].",
        "blueprint": "La RMN estructural muestra a [[PrPc|prpc]] como un haz globular de tres [[hélices alfa|helices_h123]].",
        "scientific": "La estructura RMN de [[PrPc|prpc]] (PDB 1QLX) se pliega en tres [[hélices alfa H1-H3|helices_h123]]."
      }
    },
    "pri.ch1.s1.02": {
      "en": {
        "pop": "Flanking those [[helices|helices_h123]] sits a short two-strand [[beta-ribbon|beta_ribbon]] of six residues.",
        "blueprint": "Mounted beside [[H1-H3|helices_h123]] sits a brief antiparallel [[beta1-beta2 ribbon|beta_ribbon]].",
        "scientific": "Packed against [[H1-H3|helices_h123]] lies a short antiparallel [[beta1-beta2 sheet|beta_ribbon]] (~3% beta)."
      },
      "es": {
        "pop": "Junto a esas [[hélices|helices_h123]] hay una corta [[cinta beta|beta_ribbon]] de dos hebras y seis residuos.",
        "blueprint": "Acoplada junto a [[H1-H3|helices_h123]] aparece una breve [[cinta beta1-beta2|beta_ribbon]] antiparalela.",
        "scientific": "Adosada a [[H1-H3|helices_h123]] yace una corta [[lámina beta1-beta2|beta_ribbon]] antiparalela (~3% beta)."
      }
    },
    "pri.ch1.s1.03": {
      "en": {
        "pop": "Its flexible N-terminal tail binds copper ions while the folded C-terminal globe stays stable.",
        "blueprint": "Its disordered N-terminal octarepeat arm binds Cu2+ ions while the C-terminal dome stays folded.",
        "scientific": "Disordered residues 23-124 carry Cu2+-binding octarepeats upstream of globular residues 125-230."
      },
      "es": {
        "pop": "Su cola N-terminal flexible enlaza iones cobre mientras el globo C-terminal queda estable.",
        "blueprint": "Su brazo N-terminal flexible captura iones Cu2+ mientras la cúpula C-terminal queda plegada.",
        "scientific": "Los residuos 23-124 contienen octarrepeticiones ligadoras de Cu2+ antes del dominio 125-230."
      }
    },
    "pri.ch1.s2.01": {
      "en": {
        "pop": "Two branching [[N-glycan trees|nglycans]] shield the outer surface of native [[PrPc|prpc]].",
        "blueprint": "Dual branched [[N-glycan arrays|nglycans]] decorate and buffer the exterior of [[PrPc|prpc]].",
        "scientific": "Two complex [[N-linked glycans|nglycans]] attach at Asn181 and Asn197 on native [[PrPc|prpc]]."
      },
      "es": {
        "pop": "Dos [[árboles de N-glicanos|nglycans]] ramificados cubren la superficie externa de [[PrPc|prpc]].",
        "blueprint": "Dos [[matrices de N-glicanos|nglycans]] ramificados revisten y amortiguan el exterior de [[PrPc|prpc]].",
        "scientific": "Dos [[N-glicanos complejos|nglycans]] se unen en Asn181 y Asn197 de la [[PrPc|prpc]] nativa."
      }
    },
    "pri.ch1.s2.02": {
      "en": {
        "pop": "Inside, one covalent [[Cys179-Cys214 disulfide|disulfide]] bridges helices H2 and H3.",
        "blueprint": "Internally, one covalent [[Cys179-Cys214 bolt|disulfide]] pins helices H2 and H3 together.",
        "scientific": "One intramolecular [[Cys179-Cys214 disulfide|disulfide]] (S-S) covalently tethers helices H2 and H3."
      },
      "es": {
        "pop": "Dentro, un puente covalente [[disulfuro Cys179-Cys214|disulfide]] enlaza las hélices H2 y H3.",
        "blueprint": "Por dentro, un [[perno covalente Cys179-Cys214|disulfide]] sujeta entre sí las hélices H2 y H3.",
        "scientific": "Un puente [[disulfuro Cys179-Cys214|disulfide]] (S-S) une covalentemente las hélices H2 y H3."
      }
    },
    "pri.ch1.s2.03": {
      "en": {
        "pop": "Remarkably, this sulfur [[disulfide bond|disulfide]] remains unbroken even after conversion to PrPsc.",
        "blueprint": "Crucially, this covalent [[S-S lock|disulfide]] survives intact across the entire PrPsc conversion.",
        "scientific": "This conserved [[Cys179-Cys214 disulfide|disulfide]] stays covalently intact throughout PrPsc refolding."
      },
      "es": {
        "pop": "Sorprendentemente, este [[enlace disulfuro|disulfide]] sigue intacto tras convertirse en PrPsc.",
        "blueprint": "De forma crucial, este [[cierre S-S|disulfide]] sobrevive intacto a toda la conversión en PrPsc.",
        "scientific": "Este puente [[disulfuro Cys179-Cys214|disulfide]] permanece intacto durante el repliegue a PrPsc."
      }
    },
    "pri.ch2.s0.01": {
      "en": {
        "pop": "Conversion begins when soluble [[PrPc|prpc]] encounters the exposed [[template tip|template_dock]] of a seed.",
        "blueprint": "Takeover starts when free [[PrPc|prpc]] engages the active [[docking face|template_dock]] of a seed.",
        "scientific": "Templated seeding initiates when [[PrPc|prpc]] docks onto the exposed [[fibril tip|template_dock]]."
      },
      "es": {
        "pop": "La conversión inicia cuando [[PrPc|prpc]] soluble choca con la [[punta plantilla|template_dock]] activa.",
        "blueprint": "La captura inicia cuando [[PrPc|prpc]] libre encaja en la [[cara de acoplamiento|template_dock]].",
        "scientific": "El sembrado conformacional inicia al acoplarse [[PrPc|prpc]] al [[extremo fibrilar|template_dock]]."
      }
    },
    "pri.ch2.s0.02": {
      "en": {
        "pop": "At the [[template tip|template_dock]], each [[PrPc|prpc]] snaps onto [[PrPsc|prpsc_fibril]] in a domino cascade.",
        "blueprint": "On the [[docking tip|template_dock]], [[PrPc|prpc]] unfolds and locks onto [[PrPsc|prpsc_fibril]] beta strata.",
        "scientific": "At the [[template interface|template_dock]], [[PrPc|prpc]] refolds into [[PrPsc|prpsc_fibril]] cross-beta rungs."
      },
      "es": {
        "pop": "En la [[punta plantilla|template_dock]], cada [[PrPc|prpc]] cae sobre [[PrPsc|prpsc_fibril]] como un dominó.",
        "blueprint": "En la [[cara activa|template_dock]], [[PrPc|prpc]] se despliega y bloquea sobre [[PrPsc|prpsc_fibril]].",
        "scientific": "En la [[interfaz plantilla|template_dock]], [[PrPc|prpc]] se repliega en láminas [[PrPsc|prpsc_fibril]]."
      }
    },
    "pri.ch2.s0.03": {
      "en": {
        "pop": "Each refolded subunit becomes the next [[template tip|template_dock]], adding a fresh [[beta rung|beta_rungs]].",
        "blueprint": "Every newly converted layer exposes the next [[template dock|template_dock]] as a new [[rung|beta_rungs]].",
        "scientific": "Each incorporated chain regenerates the [[template surface|template_dock]], extending [[beta rungs|beta_rungs]]."
      },
      "es": {
        "pop": "Cada subunidad plegada forma la nueva [[punta plantilla|template_dock]], sumando un [[peldaño beta|beta_rungs]].",
        "blueprint": "Cada capa recién convertida expone la nueva [[cara activa|template_dock]] en otro [[peldaño|beta_rungs]].",
        "scientific": "Cada cadena incorporada regenera la [[superficie plantilla|template_dock]] alargando [[peldaños|beta_rungs]]."
      }
    },
    "pri.ch2.s1.01": {
      "en": {
        "pop": "Near-atomic cryo-EM maps the 13 nm [[PrPsc fibril|prpsc_fibril]] as a parallel [[PIRIBS core|piribs_core]].",
        "blueprint": "Cryo-EM blueprints resolve the 13 nm [[PrPsc stack|prpsc_fibril]] as a rigid [[PIRIBS rail|piribs_core]].",
        "scientific": "Cryo-EM (PDB 7LNA, 7TD6) resolves ~13 nm [[PrPsc fibrils|prpsc_fibril]] as a [[PIRIBS core|piribs_core]]."
      },
      "es": {
        "pop": "La crio-ME mapea la [[fibrilla PrPsc|prpsc_fibril]] de 13 nm como un [[núcleo PIRIBS|piribs_core]] paralelo.",
        "blueprint": "Los planos de crio-ME resuelven la [[pila PrPsc|prpsc_fibril]] de 13 nm como un [[riel PIRIBS|piribs_core]].",
        "scientific": "La crio-ME (PDB 7LNA, 7TD6) resuelve [[PrPsc|prpsc_fibril]] (~13 nm) como un [[núcleo PIRIBS|piribs_core]]."
      }
    },
    "pri.ch2.s1.02": {
      "en": {
        "pop": "Identical residues stack directly in register along [[cross-beta rungs|beta_rungs]] spaced 4.8 A apart.",
        "blueprint": "Matching residues align vertically in register across [[beta rungs|beta_rungs]] at 4.8 A pitch.",
        "scientific": "Parallel in-register intermolecular [[beta-sheet rungs|beta_rungs]] repeat every 4.8 A (0.48 nm)."
      },
      "es": {
        "pop": "Residuos idénticos se apilan en registro en [[peldaños beta cruzados|beta_rungs]] cada 4,8 A.",
        "blueprint": "Residuos iguales se alinean en registro vertical en [[peldaños beta|beta_rungs]] con paso de 4,8 A.",
        "scientific": "Las [[láminas beta paralelas|beta_rungs]] en registro repiten su paso axial cada 4,8 A (0,48 nm)."
      }
    },
    "pri.ch2.s1.03": {
      "en": {
        "pop": "Every monomer flattens into a serpentine arch around the intact [[Cys179-Cys214 disulfide|disulfide]].",
        "blueprint": "Each chain folds flat into a single-rung serpentine arch enclosing its [[S-S bridge|disulfide]].",
        "scientific": "Each ~4.8 A planar rung traces a serpentine beta-arch straddling the intact [[disulfide|disulfide]]."
      },
      "es": {
        "pop": "Cada monómero se aplana en arco serpentino en torno al [[disulfuro Cys179-Cys214|disulfide]] intacto.",
        "blueprint": "Cada cadena se aplana en un arco serpentino plano que rodea su [[puente S-S|disulfide]].",
        "scientific": "Cada peldaño plano de ~4,8 A forma un arco beta serpentino en torno al [[disulfuro|disulfide]] intacto."
      }
    },
    "pri.ch2.s2.01": {
      "en": {
        "pop": "Between facing beta sheets, side chains interdigitate into a water-free [[steric zipper|steric_zipper]].",
        "blueprint": "Mating side chains interlock tightly across facing sheets into a dry [[steric zipper|steric_zipper]].",
        "scientific": "Complementary side chains exclude water between beta arches, sealing a dry [[steric zipper|steric_zipper]]."
      },
      "es": {
        "pop": "Entre láminas beta opuestas, las cadenas laterales encajan en una [[cremallera estérica|steric_zipper]] seca.",
        "blueprint": "Las cadenas laterales encajan sin agua entre láminas formando una [[cremallera estérica|steric_zipper]].",
        "scientific": "Cadenas complementarias excluyen agua entre arcos beta formando una [[cremallera estérica|steric_zipper]]."
      }
    },
    "pri.ch2.s2.02": {
      "en": {
        "pop": "Dry [[steric zippers|steric_zipper]] and outward [[N-glycans|nglycans]] lock the [[PIRIBS core|piribs_core]] rigid.",
        "blueprint": "Internal [[zippers|steric_zipper]] and external [[N-glycans|nglycans]] armor the [[PIRIBS core|piribs_core]].",
        "scientific": "Dry [[steric zippers|steric_zipper]] plus peripheral [[N-glycans|nglycans]] stabilize [[PIRIBS|piribs_core]]."
      },
      "es": {
        "pop": "[[Cremalleras estéricas|steric_zipper]] secas y [[N-glicanos|nglycans]] externos blindan el [[núcleo PIRIBS|piribs_core]].",
        "blueprint": "[[Cremalleras secas|steric_zipper]] internas y [[N-glicanos|nglycans]] blindan el [[núcleo PIRIBS|piribs_core]].",
        "scientific": "[[Cremalleras secas|steric_zipper]] y [[N-glicanos|nglycans]] periféricos estabilizan el [[núcleo PIRIBS|piribs_core]]."
      }
    },
    "pri.ch2.s2.03": {
      "en": {
        "pop": "This ultra-stable amyloid resists boiling, UV light, alcohol and cellular protease cleavage.",
        "blueprint": "This dehydrated cross-beta crystal shrugs off heat, UV radiation, ethanol and proteolytic enzymes.",
        "scientific": "Dry cross-beta packing confers extreme resistance to boiling, UV, nucleases and Proteinase K."
      },
      "es": {
        "pop": "Este amiloide ultraestable resiste ebullición, luz UV, alcohol y el corte de proteasas celulares.",
        "blueprint": "Este cristal beta deshidratado resiste calor, radiación UV, etanol y enzimas proteolíticas.",
        "scientific": "El empaquetado cross-beta seco confiere alta resistencia a calor, UV, nucleasas y Proteinasa K."
      }
    },
    "pri.ch3.s0.01": {
      "en": {
        "pop": "Like snapping a chalk stick in half, [[fragmentation|fragmentation]] splits one [[PrPsc|prpsc_fibril]] into two.",
        "blueprint": "Mechanical shear triggers [[fragmentation|fragmentation]], cleaving one [[PrPsc rail|prpsc_fibril]] into two.",
        "scientific": "Fibril [[fragmentation|fragmentation]] breaks elongated [[PrPsc amyloids|prpsc_fibril]] into smaller seeds."
      },
      "es": {
        "pop": "Como partir una tiza por la mitad, la [[fragmentación|fragmentation]] duplica cada [[PrPsc|prpsc_fibril]].",
        "blueprint": "La cizalla mecánica provoca [[fragmentación|fragmentation]], dividiendo una [[pila PrPsc|prpsc_fibril]] en dos.",
        "scientific": "La [[fragmentación|fragmentation]] escinde [[amiloides PrPsc|prpsc_fibril]] largos en nuevas semillas."
      }
    },
    "pri.ch3.s0.02": {
      "en": {
        "pop": "Each broken [[fragment|fragmentation]] creates fresh [[template tips|template_dock]], multiplying conversion rate.",
        "blueprint": "Every severed [[seed|fragmentation]] doubles active [[docking ports|template_dock]], driving exponential growth.",
        "scientific": "Each [[fragment|fragmentation]] doubles reactive [[fibril ends|template_dock]], fueling exponential kinetics."
      },
      "es": {
        "pop": "Cada [[fragmento|fragmentation]] roto abre nuevas [[puntas plantilla|template_dock]] y acelera la conversión.",
        "blueprint": "Cada [[semilla|fragmentation]] rota duplica los [[puertos activos|template_dock]] con crecimiento exponencial.",
        "scientific": "Cada [[fragmento|fragmentation]] duplica los [[extremos reactivos|template_dock]] acelerando la cinética."
      }
    },
    "pri.ch3.s0.03": {
      "en": {
        "pop": "This protein-only chain reaction drives CJD, scrapie and BSE without a single viral gene.",
        "blueprint": "This autocatalytic folding cascade powers CJD, scrapie and BSE with zero nucleic-acid genome.",
        "scientific": "Protein-only seeding underlies fatal prionopathies (CJD, scrapie, BSE, CWD) without any genome."
      },
      "es": {
        "pop": "Esta reacción proteica impulsa CJD, scrapie y vacas locas sin un solo gen viral.",
        "blueprint": "Esta cascada autocatalítica de plegado origina CJD, scrapie y EEB con cero genoma nucleico.",
        "scientific": "El sembrado solo proteico causa prionopatías letales (ECJ, scrapie, EEB, CWD) sin genoma."
      }
    },
    "pri.ch3.s1.01": {
      "en": {
        "pop": "Zoom to 0.1 nm atomic scale on [[amide atoms|amide_atoms]]: backbone N-H bonds grip O=C every 4.8 A.",
        "blueprint": "Inspect 0.1 nm hardware on [[amide atoms|amide_atoms]]: N-H latches lock O=C carbonyls every 4.8 A.",
        "scientific": "At 0.1 nm scale, [[amide atoms|amide_atoms]] form axial backbone N-H...O=C H-bonds spaced 4.8 A apart."
      },
      "es": {
        "pop": "Acércate a 0,1 nm en [[átomos amida|amide_atoms]]: enlaces N-H sujetan O=C cada 4,8 A.",
        "blueprint": "Inspecciona el nivel de 0,1 nm en [[átomos amida|amide_atoms]]: cierres N-H fijan O=C cada 4,8 A.",
        "scientific": "A 0,1 nm, los [[átomos amida|amide_atoms]] enlazan N-H...O=C axiales espaciados exactamente 4,8 A."
      }
    },
    "pri.ch3.s1.02": {
      "en": {
        "pop": "Hundreds of parallel [[amide H-bonds|amide_atoms]] reinforce each [[beta rung|beta_rungs]] axially.",
        "blueprint": "Cooperative arrays of [[amide H-bonds|amide_atoms]] rivet every stacked [[beta rung|beta_rungs]] tight.",
        "scientific": "Dense cooperative [[backbone H-bonds|amide_atoms]] lock adjacent [[cross-beta rungs|beta_rungs]] along the axis."
      },
      "es": {
        "pop": "Cientos de [[puentes de hidrógeno amida|amide_atoms]] refuerzan axialmente cada [[peldaño beta|beta_rungs]].",
        "blueprint": "Matrices de [[enlaces H amida|amide_atoms]] remachan con fuerza cada [[peldaño beta|beta_rungs]] apilado.",
        "scientific": "Redes cooperativas de [[enlaces H|amide_atoms]] fijan axialmente los [[peldaños cross-beta|beta_rungs]]."
      }
    },
    "pri.ch3.s1.03": {
      "en": {
        "pop": "Only C, H, N, O and [[disulfide sulfur|disulfide]] atoms appear here: zero phosphorus and zero genes.",
        "blueprint": "Elemental audit yields C, H, N, O plus [[sulfur S|disulfide]]: zero phosphorus P and zero genes.",
        "scientific": "Only C, H, N, O and [[Cys-Cys sulfur S|disulfide]] exist in PrPsc: 0 nucleic-acid P atoms."
      },
      "es": {
        "pop": "Aquí solo hay C, H, N, O y [[azufre disulfuro|disulfide]]: cero fósforo y cero genes.",
        "blueprint": "La auditoría elemental da C, H, N, O y [[azufre S|disulfide]]: cero fósforo P y cero genes.",
        "scientific": "En PrPsc solo hay C, H, N, O y [[azufre S de Cys-Cys|disulfide]]: 0 átomos de fósforo nucleico."
      }
    },
    "pri.ch3.s2.01": {
      "en": {
        "pop": "From 750 nm Mimivirus to 359-nt PSTVd to zero-gene [[PrPsc|prpsc_fibril]], life's pillars fall to zero.",
        "blueprint": "Stepping from Mimivirus to PSTVd to [[PrPsc|prpsc_fibril]], all four autonomy pillars reach zero.",
        "scientific": "Descending from Mimivirus (1.18 Mbp) to PSTVd (359 nt) to [[PrPsc|prpsc_fibril]] hits 0/4 life pillars."
      },
      "es": {
        "pop": "De Mimivirus a PSTVd y a [[PrPsc|prpsc_fibril]] sin genes, los pilares de la vida bajan a cero.",
        "blueprint": "Bajando de Mimivirus a PSTVd y [[PrPsc|prpsc_fibril]], los cuatro pilares de autonomía caen a cero.",
        "scientific": "Descendiendo de Mimivirus a PSTVd y [[PrPsc|prpsc_fibril]], la autonomía llega a 0/4 pilares."
      }
    },
    "pri.ch3.s2.02": {
      "en": {
        "pop": "No membrane, no genome, no ribosomes and no ATP: [[prions|prpsc_fibril]] prove shape alone can infect.",
        "blueprint": "Zero boundary, zero code, zero compilers and zero ATP: [[prions|prpsc_fibril]] transmit pure shape.",
        "scientific": "Lacking membrane, genome, ribosomes and ATP, [[prions|prpsc_fibril]] prove conformational heredity."
      },
      "es": {
        "pop": "Sin membrana, genoma, ribosomas ni ATP: los [[priones|prpsc_fibril]] prueban que la forma infecta.",
        "blueprint": "Cero frontera, código, ribosomas ni ATP: los [[priones|prpsc_fibril]] transmiten pura geometría.",
        "scientific": "Sin membrana, genoma, ribosomas ni ATP, los [[priones|prpsc_fibril]] demuestran herencia de forma."
      }
    },
    "pri.ch3.s2.03": {
      "en": {
        "pop": "Inspect any molecular tag now, or move ahead to Cell Division to see living genomes replicate.",
        "blueprint": "Inspect any fibril component now, or advance to Cell Division to trace living genome duplication.",
        "scientific": "Explore any structural tag now, or continue to Cell Division to study autonomous genome segregation."
      },
      "es": {
        "pop": "Explora cualquier etiqueta molecular o avanza a División Celular para ver replicar genomas vivos.",
        "blueprint": "Inspecciona cualquier módulo o avanza a División Celular para ver cómo se duplican genomas vivos.",
        "scientific": "Explora cualquier etiqueta estructural o continúa a División Celular y segregación genómica."
      }
    }
  }
};
