import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 11 (`real-gram-positive` / `gram_positiveTour`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 43 of 45 cues (95.6%, > 95%) match base `cue.text` verbatim in `en.pop` with direct,
 *   clear, distraction-free biological prose.
 * - Exactly 2 cues (`gp.ch1.s1.02` and `gp.ch3.s2.02`) use grounded everyday mental
 *   models for conceptually complex physicochemical mechanisms:
 *   1. `gp.ch1.s1.02` - Ethanol shrinking the thick dehydrated peptidoglycan wall like a
 *      tightened net trapping crystal-violet-iodine complexes, while E. coli leaks them.
 *   2. `gp.ch3.s2.02` - Vitrified Ca-DPA and SASP sleeves locking the dehydrated spore core
 *      like a biological time-capsule vault against boiling heat and UV damage.
 */
export const PERSONAS_GRAM_POSITIVE: TourPersonaMap = {
  "real-gram-positive": {
    "gp.ch0.s0.01": {
      "en": {
        "pop": "Meet Bacillus subtilis, a 3.5 um Gram-positive rod built on a single-membrane blueprint.",
        "blueprint": "System node Bacillus subtilis: a 3.5 um monoderm bacterial chassis with external murein armor.",
        "scientific": "Bacillus subtilis is a ~3.5 x 0.8 um monoderm Gram-positive bacillus of phylum Bacillota."
      },
      "es": {
        "pop": "Conoce a Bacillus subtilis, un bacilo Gram positivo de 3,5 um con diseño de una sola membrana.",
        "blueprint": "Nodo Bacillus subtilis: un chasis bacteriano monodermo de 3,5 um con blindaje externo de mureína.",
        "scientific": "Bacillus subtilis es un bacilo Gram positivo monodermo de ~3,5 x 0,8 um del filo Bacillota."
      }
    },
    "gp.ch0.s0.02": {
      "en": {
        "pop": "Inside its cutaway cytoplasm sit a 4.22 Mbp [[DNA nucleoid|dna]], [[70S ribosomes|ribosome]] and no nucleus.",
        "blueprint": "The open hull houses a 4.22 Mbp [[dsDNA chromosome|dna]] and [[70S compilers|ribosome]] without a nuclear wall.",
        "scientific": "The cytosol packs a 4.22 Mbp circular [[dsDNA nucleoid|dna]] (~4,100 genes) and [[70S ribosomes|ribosome]] (3J9W)."
      },
      "es": {
        "pop": "En su citoplasma abierto hay un [[nucleoide de ADN|dna]] de 4,22 Mpb, [[ribosomas 70S|ribosome]] y sin núcleo.",
        "blueprint": "El casco abierto aloja un [[cromosoma ADNbc|dna]] de 4,22 Mpb y [[compiladores 70S|ribosome]] sin núcleo.",
        "scientific": "El citosol aloja un [[nucleoide ADNbc|dna]] de 4,22 Mpb (~4100 genes) y [[ribosomas 70S|ribosome]] (PDB 3J9W)."
      }
    },
    "gp.ch0.s0.03": {
      "en": {
        "pop": "Its thick [[peptidoglycan wall|pg_wall]] and single [[plasma membrane|pm]] differ sharply from [[E. coli|ecoli_strip]].",
        "blueprint": "Its heavy [[murein shell|pg_wall]] over one [[lipid bilayer|pm]] diverges sharply from [[E. coli|ecoli_strip]].",
        "scientific": "A 20-80 nm [[peptidoglycan wall|pg_wall]] over one [[bilayer|pm]] contrasts with diderm [[E. coli|ecoli_strip]]."
      },
      "es": {
        "pop": "Su gruesa [[pared de peptidoglicano|pg_wall]] y única [[membrana|pm]] difieren mucho de [[E. coli|ecoli_strip]].",
        "blueprint": "Su pesado [[casco de mureína|pg_wall]] sobre una [[bicapa|pm]] contrasta fuerte con [[E. coli|ecoli_strip]].",
        "scientific": "Una [[pared de peptidoglicano|pg_wall]] (20-80 nm) sobre una [[bicapa|pm]] difiere de [[E. coli|ecoli_strip]]."
      }
    },
    "gp.ch0.s1.01": {
      "en": {
        "pop": "Beside the cut edge stands a true-scale Gram-negative [[E. coli envelope strip|ecoli_strip]].",
        "blueprint": "Mounted beside the section is a 1:1 scale reference [[E. coli envelope strip|ecoli_strip]].",
        "scientific": "Adjacent at true scale (1 unit = 100 nm) sits a Gram-negative [[E. coli envelope|ecoli_strip]]."
      },
      "es": {
        "pop": "Junto al borde abierto se muestra a escala real una [[franja de E. coli|ecoli_strip]] Gram negativa.",
        "blueprint": "Alineada al corte aparece una [[franja de referencia de E. coli|ecoli_strip]] a escala 1:1.",
        "scientific": "A escala real (1 unidad = 100 nm) se compara una [[envoltura de E. coli|ecoli_strip]] Gram negativa."
      }
    },
    "gp.ch0.s1.02": {
      "en": {
        "pop": "Gram-negative [[E. coli|ecoli_strip]] is diderm: two lipid membranes enclosing a thin 3 nm wall.",
        "blueprint": "The diderm [[E. coli stack|ecoli_strip]] pairs outer LPS and inner bilayers around a 3 nm core.",
        "scientific": "Diderm [[E. coli|ecoli_strip]] sandwiches 1-3 PG layers (~3 nm) between an OmpF (2OMF) OM and IM."
      },
      "es": {
        "pop": "[[E. coli|ecoli_strip]] Gram negativa es diderma: dos membranas lipídicas rodean una pared de 3 nm.",
        "blueprint": "La pila diderma de [[E. coli|ecoli_strip]] encierra una lámina de 3 nm entre LPS externo y bicapa interna.",
        "scientific": "[[E. coli|ecoli_strip]] diderma intercala 1-3 capas de PG (~3 nm) entre membrana externa OmpF (2OMF) e interna."
      }
    },
    "gp.ch0.s1.03": {
      "en": {
        "pop": "Gram-positive bacteria are monoderm: one [[plasma membrane|pm]] beneath a 20 to 80 nm [[wall|pg_wall]].",
        "blueprint": "Monoderm architecture uses one [[inner bilayer|pm]] backed by a 20-80 nm [[load-bearing wall|pg_wall]].",
        "scientific": "Monoderm Gram-positives pair a single 7 nm [[plasma membrane|pm]] with a 20-80 nm [[PG wall|pg_wall]]."
      },
      "es": {
        "pop": "Las Gram positivas son monodermas: una [[membrana plasmática|pm]] bajo una [[pared|pg_wall]] de 20 a 80 nm.",
        "blueprint": "El diseño monodermo usa una sola [[bicapa interna|pm]] respaldada por una [[pared|pg_wall]] de 20-80 nm.",
        "scientific": "Las Gram positivas monodermas unen una [[membrana|pm]] de 7 nm con una [[pared de PG|pg_wall]] de 20-80 nm."
      }
    },
    "gp.ch0.s2.01": {
      "en": {
        "pop": "Without an outer LPS membrane, the single [[plasma membrane|pm]] endures about 20 atm turgor.",
        "blueprint": "Lacking an outer LPS shield, this sole [[plasma membrane|pm]] operates under ~20 atm internal load.",
        "scientific": "With no outer membrane, the 7 nm [[plasma membrane|pm]] sustains ~20 atm cytoplasmic turgor."
      },
      "es": {
        "pop": "Sin membrana externa de LPS, la única [[membrana plasmática|pm]] soporta unas 20 atm de turgencia.",
        "blueprint": "Sin escudo externo de LPS, esta única [[membrana|pm]] trabaja bajo ~20 atm de carga interna.",
        "scientific": "Sin membrana externa, la [[membrana plasmática|pm]] de 7 nm soporta ~20 atm de presión de turgencia."
      }
    },
    "gp.ch0.s2.02": {
      "en": {
        "pop": "Fifteen to forty cross-linked layers of [[peptidoglycan|pg_wall]] contain that osmotic pressure.",
        "blueprint": "Stacked across 15-40 strata, this [[murein pressure vessel|pg_wall]] prevents osmotic rupture.",
        "scientific": "15-40 cross-linked [[peptidoglycan|pg_wall]] strata resist ~20 atm turgor (vs. 2-5 atm in E. coli)."
      },
      "es": {
        "pop": "De quince a cuarenta capas enlazadas de [[peptidoglicano|pg_wall]] contienen esa presión osmótica.",
        "blueprint": "Apilado en 15-40 estratos, este [[recipiente de mureína|pg_wall]] evita la ruptura osmótica.",
        "scientific": "Entre 15 y 40 capas de [[peptidoglicano|pg_wall]] resisten ~20 atm de turgencia (2-5 atm en E. coli)."
      }
    },
    "gp.ch0.s2.03": {
      "en": {
        "pop": "Anionic [[teichoic acids|teichoic]] thread through the wall, binding magnesium and calcium ions.",
        "blueprint": "Phosphate-rich [[teichoic tie-rods|teichoic]] span the wall to scavenge Mg2+ and Ca2+ ions.",
        "scientific": "Polyanionic [[teichoic acids|teichoic]] (WTA/LTA) chelate divalent Mg2+ and Ca2+ across the cell surface."
      },
      "es": {
        "pop": "[[Ácidos teicoicos|teichoic]] aniónicos cruzan la pared y captan iones de magnesio y calcio.",
        "blueprint": "[[Tirantes teicoicos|teichoic]] ricos en fosfato cruzan la pared y capturan iones Mg2+ y Ca2+.",
        "scientific": "Los [[ácidos teicoicos|teichoic]] polianiónicos (WTA/LTA) quelan cationes Mg2+ y Ca2+ en la superficie."
      }
    },
    "gp.ch1.s0.01": {
      "en": {
        "pop": "Zoom to the wall section where [[peptidoglycan strata|pg_wall]] measure ten times thicker than [[E. coli|ecoli_strip]].",
        "blueprint": "Cross-section telemetry: [[murein armor|pg_wall]] runs over tenfold deeper than [[E. coli|ecoli_strip]].",
        "scientific": "At the cutaway edge, ~40 nm [[peptidoglycan|pg_wall]] dwarfs the ~3 nm layer in [[E. coli|ecoli_strip]]."
      },
      "es": {
        "pop": "Acércate al corte donde el [[peptidoglicano|pg_wall]] mide diez veces más grosor que en [[E. coli|ecoli_strip]].",
        "blueprint": "Telemetría de sección: el [[blindaje de mureína|pg_wall]] supera en diez veces al de [[E. coli|ecoli_strip]].",
        "scientific": "En el corte, el [[peptidoglicano|pg_wall]] (~40 nm) supera ampliamente los ~3 nm de [[E. coli|ecoli_strip]]."
      }
    },
    "gp.ch1.s0.02": {
      "en": {
        "pop": "Wall [[teichoic acids|teichoic]] bind NAM sugars, while lipoteichoic chains anchor in the [[plasma membrane|pm]].",
        "blueprint": "WTA [[polymers|teichoic]] bolt to NAM glycans; LTA strands plug straight into the [[bilayer|pm]].",
        "scientific": "TagF (3L7I) builds C6-NAM [[WTA|teichoic]]; LtaS (2W5Q) anchors glycerol-P LTA in the [[membrane|pm]]."
      },
      "es": {
        "pop": "Los [[ácidos teicoicos|teichoic]] parietales se unen a NAM y los lipoteicoicos se anclan en la [[membrana|pm]].",
        "blueprint": "Los [[polímeros WTA|teichoic]] se fijan a NAM y las hebras LTA se insertan directo en la [[bicapa|pm]].",
        "scientific": "TagF (3L7I) une [[WTA|teichoic]] a NAM C6; LtaS (2W5Q) ancla LTA de glicerol-P en la [[membrana|pm]]."
      }
    },
    "gp.ch1.s0.03": {
      "en": {
        "pop": "These negatively charged [[teichoic chains|teichoic]] guide division enzymes and stabilize surface cations.",
        "blueprint": "These anionic [[teichoic rails|teichoic]] route autolysins, balance surface pH and hold cation buffers.",
        "scientific": "Anionic [[WTA/LTA polyols|teichoic]] position autolysins, buffer protons and resist cationic peptides."
      },
      "es": {
        "pop": "Estas [[cadenas teicoicas|teichoic]] negativas guían enzimas de división y estabilizan cationes.",
        "blueprint": "Estos [[rieles teicoicos|teichoic]] dirigen autolisinas, regulan el pH superficial y retienen cationes.",
        "scientific": "Los [[polioles WTA/LTA|teichoic]] posicionan autolisinas, amortiguan protones y frenan péptidos catiónicos."
      }
    },
    "gp.ch1.s1.01": {
      "en": {
        "pop": "In the Gram stain, crystal violet and iodine enter both cells and form large CV-I dye complexes.",
        "blueprint": "Gram protocol step 1: crystal violet plus iodine precipitate bulky ~1.4 nm CV-I particles inside.",
        "scientific": "Crystal violet and Gram's iodine permeate both envelopes, precipitating ~1.2-1.5 nm CV-I complexes."
      },
      "es": {
        "pop": "En la tinción de Gram, el cristal violeta y el yodo entran en ambas células y forman complejos CV-I.",
        "blueprint": "Protocolo Gram paso 1: cristal violeta y yodo precipitan partículas CV-I de ~1,4 nm en el interior.",
        "scientific": "Cristal violeta y yodo difunden en ambas envolturas precipitando complejos CV-I de ~1,2-1,5 nm."
      }
    },
    "gp.ch1.s1.02": {
      "en": {
        "pop": "Alcohol shrinks this [[thick wall|pg_wall]] like a tight net trapping violet dye, while [[E. coli|ecoli_strip]] leaks it.",
        "blueprint": "Ethanol contracts the [[40 nm pore matrix|pg_wall]] trapping CV-I complexes; [[E. coli strips|ecoli_strip]] flush clear.",
        "scientific": "Ethanol dehydrates [[peptidoglycan|pg_wall]] (pores ~1-2 nm) retaining CV-I; LPS loss in [[E. coli|ecoli_strip]] elutes it."
      },
      "es": {
        "pop": "El alcohol encoge esta [[gruesa pared|pg_wall]] como una red atrapando el tinte violeta; [[E. coli|ecoli_strip]] lo pierde.",
        "blueprint": "El etanol contrae la [[matriz de 40 nm|pg_wall]] reteniendo CV-I; la [[tira de E. coli|ecoli_strip]] se lava clara.",
        "scientific": "El etanol deshidrata el [[peptidoglicano|pg_wall]] reteniendo CV-I; perder LPS en [[E. coli|ecoli_strip]] eluye el tinte."
      }
    },
    "gp.ch1.s1.03": {
      "en": {
        "pop": "Safranin counterstain colors [[E. coli|ecoli_strip]] pink, while [[Gram-positive walls|pg_wall]] remain deep purple.",
        "blueprint": "Safranin readout: decolorized [[E. coli strips|ecoli_strip]] turn pink while [[thick murein|pg_wall]] stays violet.",
        "scientific": "Safranin counterstains decolorized [[E. coli|ecoli_strip]] pink while [[Gram-positive PG|pg_wall]] stays purple."
      },
      "es": {
        "pop": "La safranina tiñe de rosa a [[E. coli|ecoli_strip]], mientras las [[paredes Gram positivas|pg_wall]] siguen violetas.",
        "blueprint": "Lectura con safranina: [[E. coli|ecoli_strip]] decolorada vira a rosa; la [[mureína gruesa|pg_wall]] queda violeta.",
        "scientific": "La safranina contratiñe de rosa a [[E. coli|ecoli_strip]] mientras el [[PG Gram positivo|pg_wall]] queda púrpura."
      }
    },
    "gp.ch1.s2.01": {
      "en": {
        "pop": "With no outer LPS barrier, penicillin diffuses through [[peptidoglycan|pg_wall]] directly to exposed [[PBPs|pbp]].",
        "blueprint": "No outer LPS gate exists: beta-lactams pass porous [[murein|pg_wall]] directly to outer-leaflet [[PBPs|pbp]].",
        "scientific": "Without an LPS barrier, beta-lactams and lysozyme traverse porous [[PG|pg_wall]] directly to [[PBPs|pbp]]."
      },
      "es": {
        "pop": "Sin barrera externa de LPS, la penicilina cruza el [[peptidoglicano|pg_wall]] directa hacia las [[PBP|pbp]].",
        "blueprint": "Sin compuerta LPS, los betalactámicos cruzan la [[mureína|pg_wall]] porosa directo a las [[PBP|pbp]] expuestas.",
        "scientific": "Sin barrera LPS, betalactámicos y lisozima cruzan el [[PG|pg_wall]] poroso directamente hacia las [[PBP|pbp]]."
      }
    },
    "gp.ch1.s2.02": {
      "en": {
        "pop": "Beta-lactams mimic D-Ala-D-Ala and block [[PBP transpeptidases|pbp]], halting new wall cross-links.",
        "blueprint": "Beta-lactam rings covalently lock [[PBP builders|pbp]], halting wall repair under 20 atm turgor.",
        "scientific": "Beta-lactams acylate the catalytic Ser of [[PBP3|pbp]] (7BN9/2J9P), arresting transpeptidation."
      },
      "es": {
        "pop": "Los betalactámicos imitan D-Ala-D-Ala y bloquean las [[transpeptidasas PBP|pbp]], frenando enlaces.",
        "blueprint": "Los anillos betalactámicos traban las [[PBP constructoras|pbp]], deteniendo la reparación a 20 atm.",
        "scientific": "Los betalactámicos acilan la Ser catalítica de [[PBP3|pbp]] (7BN9/2J9P), inhibiendo la transpeptidación."
      }
    },
    "gp.ch1.s2.03": {
      "en": {
        "pop": "Beside them, [[Sortase A|sortase]] cleaves LPXTG motifs to link surface proteins onto [[peptidoglycan|pg_wall]].",
        "blueprint": "Membrane-anchored [[Sortase A|sortase]] cuts LPXTG tags and welds adhesins onto the [[wall mesh|pg_wall]].",
        "scientific": "[[Sortase A|sortase]] (PDB 2KID) cleaves LPXTG motifs and transpeptidates surface proteins to [[PG|pg_wall]]."
      },
      "es": {
        "pop": "A su lado, la [[sortasa A|sortase]] corta motivos LPXTG para unir proteínas de superficie al [[peptidoglicano|pg_wall]].",
        "blueprint": "La [[sortasa A|sortase]] anclada en membrana corta etiquetas LPXTG y fija adhesinas a la [[malla|pg_wall]].",
        "scientific": "La [[sortasa A|sortase]] (PDB 2KID) escinde motivos LPXTG y une proteínas de superficie al [[PG|pg_wall]]."
      }
    },
    "gp.ch2.s0.01": {
      "en": {
        "pop": "When nutrients run dry, Spo0A switches Bacillus subtilis from normal division to sporulation.",
        "blueprint": "Nutrient exhaustion trips the Spo0A state switch, pivoting from fission to endospore assembly.",
        "scientific": "Starvation triggers KinA-Spo0F-Spo0B phosphorylation of Spo0A~P, initiating Stage 0 sporulation."
      },
      "es": {
        "pop": "Cuando faltan nutrientes, Spo0A cambia a Bacillus subtilis de división normal a esporulación.",
        "blueprint": "La falta de nutrientes activa el interruptor Spo0A, pasando de fisión a ensamblaje de endospora.",
        "scientific": "La inanición fosforila Spo0A~P vía KinA-Spo0F-Spo0B, iniciando la fase 0 de esporulación."
      }
    },
    "gp.ch2.s0.02": {
      "en": {
        "pop": "An asymmetric [[FtsZ septum|septum]] forms near one pole, isolating a small [[forespore|forespore]] compartment.",
        "blueprint": "Polar [[FtsZ ring|septum]] constriction partitions the hull into a mother bay and small [[forespore|forespore]].",
        "scientific": "Polar [[FtsZ|septum]] (PDB 2VXY) polymerization builds a Stage II septum around the [[forespore|forespore]]."
      },
      "es": {
        "pop": "Un [[septo FtsZ|septum]] asimétrico se forma cerca de un polo y aísla una pequeña [[preespora|forespore]].",
        "blueprint": "La constricción polar del [[anillo FtsZ|septum]] divide el casco en célula madre y [[preespora|forespore]].",
        "scientific": "La polimerización polar de [[FtsZ|septum]] (PDB 2VXY) forma un septo fase II para la [[preespora|forespore]]."
      }
    },
    "gp.ch2.s0.03": {
      "en": {
        "pop": "Sporulation is not reproduction: one vegetative cell converts into one dormant survival spore.",
        "blueprint": "Net headcount stays 1-to-1: one active rod reconfigures into one armored dormancy module.",
        "scientific": "Unlike fungal sporogenesis, bacterial sporulation is non-reproductive: 1 rod yields 1 endospore."
      },
      "es": {
        "pop": "Esporular no es reproducirse: una célula vegetativa se convierte en una sola espora latente.",
        "blueprint": "El recuento sigue 1 a 1: un bacilo activo se reconfigura en un único módulo blindado latente.",
        "scientific": "A diferencia de los hongos, la esporulación bacteriana no multiplica: 1 célula da 1 endospora."
      }
    },
    "gp.ch2.s1.01": {
      "en": {
        "pop": "As the polar [[septum|septum]] closes, only thirty percent of the copied [[chromosome|dna]] sits inside.",
        "blueprint": "At [[septum|septum]] closure, roughly 30% of the replicated [[genome|dna]] lies inside the polar bay.",
        "scientific": "Upon asymmetric [[septum|septum]] completion, only the oriC-proximal ~30% of [[dsDNA|dna]] is trapped inside."
      },
      "es": {
        "pop": "Al cerrarse el [[septo|septum]] polar, solo el treinta por ciento del [[cromosoma|dna]] copiado queda dentro.",
        "blueprint": "Al sellarse el [[septo|septum]], cerca del 30% del [[genoma|dna]] replicado reside en la cámara polar.",
        "scientific": "Al cerrarse el [[septo|septum]], solo el ~30% proximal a oriC del [[ADNbc|dna]] queda atrapado dentro."
      }
    },
    "gp.ch2.s1.02": {
      "en": {
        "pop": "A hexameric [[SpoIIIE translocase|spoiiie]] uses ATP to pump the remaining [[DNA|dna]] into the [[forespore|forespore]].",
        "blueprint": "An ATP-powered [[SpoIIIE motor|spoiiie]] reels the remaining 70% of [[dsDNA|dna]] into the [[forespore|forespore]].",
        "scientific": "Hexameric [[SpoIIIE|spoiiie]] (FtsK family, 2IUU) pumps ~3 Mbp [[dsDNA|dna]] into the [[forespore|forespore]] via ATP."
      },
      "es": {
        "pop": "Una [[translocasa SpoIIIE|spoiiie]] hexamérica usa ATP para bombear el [[ADN|dna]] restante a la [[preespora|forespore]].",
        "blueprint": "Un [[motor SpoIIIE|spoiiie]] impulsado por ATP enrolla el 70% restante de [[ADNbc|dna]] en la [[preespora|forespore]].",
        "scientific": "El hexámero [[SpoIIIE|spoiiie]] (familia FtsK, 2IUU) bombea ~3 Mpb de [[ADNbc|dna]] a la [[preespora|forespore]]."
      }
    },
    "gp.ch2.s1.03": {
      "en": {
        "pop": "Separate sigma factors then activate distinct mother-cell and [[forespore|forespore]] genetic programs.",
        "blueprint": "Compartment-locked sigma switches split transcription between mother cell and [[forespore|forespore]].",
        "scientific": "Sequential sigma-F/sigma-G in the [[forespore|forespore]] and sigma-E/sigma-K in the mother drive maturation."
      },
      "es": {
        "pop": "Factores sigma separados activan luego programas genéticos distintos en madre y [[preespora|forespore]].",
        "blueprint": "Interruptores sigma aislados dividen la transcripción entre la célula madre y la [[preespora|forespore]].",
        "scientific": "Los factores sigma-F/G en la [[preespora|forespore]] y sigma-E/K en la madre coordinan la maduración."
      }
    },
    "gp.ch2.s2.01": {
      "en": {
        "pop": "Mother-cell membranes migrate around the [[forespore|forespore]], enclosing it inside two lipid bilayers.",
        "blueprint": "Engulfment wraps the [[forespore|forespore]] in a second outer bilayer, detaching it inside the mother.",
        "scientific": "Stage III engulfment migrates mother membranes around the [[forespore|forespore]], forming dual bilayers."
      },
      "es": {
        "pop": "Las membranas de la madre rodean la [[preespora|forespore]] y la encierran dentro de dos bicapas.",
        "blueprint": "El englobamiento envuelve la [[preespora|forespore]] en una segunda bicapa libre dentro de la madre.",
        "scientific": "El englobamiento fase III rodea la [[preespora|forespore]] con membranas maternas formando doble bicapa."
      }
    },
    "gp.ch2.s2.02": {
      "en": {
        "pop": "SpoIIIAH-SpoIIQ channels feed the [[forespore|forespore]] while [[70S ribosomes|ribosome]] synthesize protective proteins.",
        "blueprint": "SpoIIIAH-SpoIIQ ports supply the [[forespore|forespore]] while [[70S compilers|ribosome]] output shield proteins.",
        "scientific": "SpoIIIAH-SpoIIQ channels (PDB 3UZ0) nourish the [[forespore|forespore]] as [[70S ribosomes|ribosome]] build coat."
      },
      "es": {
        "pop": "Canales SpoIIIAH-SpoIIQ nutren la [[preespora|forespore]] mientras los [[ribosomas 70S|ribosome]] fabrican defensas.",
        "blueprint": "Puertos SpoIIIAH-SpoIIQ abastecen la [[preespora|forespore]] mientras [[compiladores 70S|ribosome]] crean blindaje.",
        "scientific": "Canales SpoIIIAH-SpoIIQ (PDB 3UZ0) nutren la [[preespora|forespore]] mientras [[ribosomas 70S|ribosome]] crean cubierta."
      }
    },
    "gp.ch2.s2.03": {
      "en": {
        "pop": "Once cortex and coat assembly finish around the [[forespore|forespore]], the mother cell lyses to release it.",
        "blueprint": "After cortex and coat layers cure on the [[forespore|forespore]], programmed mother lysis ejects the unit.",
        "scientific": "Following Stage IV-V cortex and coat deposition on the [[forespore|forespore]], mother-cell lysis frees it."
      },
      "es": {
        "pop": "Cuando terminan corteza y cubierta en la [[preespora|forespore]], la célula madre se lisa para liberarla.",
        "blueprint": "Al sellarse corteza y cubierta en la [[preespora|forespore]], la lisis programada materna expulsa la espora.",
        "scientific": "Tras depositar corteza y cubierta (fases IV-V) en la [[preespora|forespore]], la lisis materna la libera."
      }
    },
    "gp.ch3.s0.01": {
      "en": {
        "pop": "Inspect the liberated 1.0 um dormant endospore, built from concentric layers around a dry center.",
        "blueprint": "Target shift: inspect the free 1.0 um dormancy vault engineered with concentric armor shells.",
        "scientific": "The mature ~1.0 x 0.7 um refractile endospore nests concentric barriers around a dehydrated core."
      },
      "es": {
        "pop": "Observa la endospora latente libre de 1,0 um, armada en capas concéntricas sobre un centro seco.",
        "blueprint": "Cambio de objetivo: inspecciona la bóveda latente de 1,0 um con carcasas blindadas concéntricas.",
        "scientific": "La endospora madura refráctil (~1,0 x 0,7 um) anida barreras concéntricas en torno a un núcleo seco."
      }
    },
    "gp.ch3.s0.02": {
      "en": {
        "pop": "An outer glycoprotein [[exosporium|exosporium]] drapes over a 50 to 100 nm cross-linked [[spore coat|coat]].",
        "blueprint": "An outer glycoprotein [[exosporium veil|exosporium]] shrouds a 50-100 nm cross-linked [[protein coat|coat]].",
        "scientific": "A glycoprotein [[exosporium|exosporium]] surrounds the 50-100 nm cysteine-cross-linked [[spore coat|coat]]."
      },
      "es": {
        "pop": "Un [[exosporio|exosporium]] glucoproteico cubre una [[cubierta esporal|coat]] reticulada de 50 a 100 nm.",
        "blueprint": "Un [[velo exospórico|exosporium]] glucoproteico envuelve una [[cubierta proteica|coat]] reticulada de 50-100 nm.",
        "scientific": "Un [[exosporio|exosporium]] glucoproteico rodea la [[cubierta esporal|coat]] (50-100 nm) rica en cisteínas."
      }
    },
    "gp.ch3.s0.03": {
      "en": {
        "pop": "Over seventy proteins including CotA pack this [[spore coat|coat]] to block lysozyme and disinfectants.",
        "blueprint": "Over 70 interlocked proteins such as CotA seal this [[coat armor|coat]] against oxidants and enzymes.",
        "scientific": "Over 70 proteins including CotA laccase (PDB 1GSK) and CotE fortify the [[coat|coat]] against lysozyme."
      },
      "es": {
        "pop": "Más de setenta proteínas como CotA sellan esta [[cubierta esporal|coat]] frente a lisozima y químicos.",
        "blueprint": "Más de 70 proteínas trabadas como CotA blindan esta [[cubierta|coat]] ante oxidantes y enzimas.",
        "scientific": "Más de 70 proteínas, incluidas CotA (PDB 1GSK) y CotE, refuerzan la [[cubierta|coat]] ante lisozima."
      }
    },
    "gp.ch3.s1.01": {
      "en": {
        "pop": "Beneath the [[coat|coat]] sits a thick peptidoglycan [[cortex|cortex]] modified with muramic-delta-lactam.",
        "blueprint": "Under the [[coat|coat]] lies a 50-100 nm modified [[cortex shell|cortex]] marked by muramic-delta-lactam.",
        "scientific": "Inside the [[coat|coat]] sits a 50-100 nm [[peptidoglycan cortex|cortex]] bearing muramic-delta-lactam rings."
      },
      "es": {
        "pop": "Bajo la [[cubierta|coat]] hay una gruesa [[corteza|cortex]] de peptidoglicano con murámico-delta-lactama.",
        "blueprint": "Debajo de la [[cubierta|coat]] yace una [[corteza|cortex]] de 50-100 nm con marcas de murámico-delta-lactama.",
        "scientific": "Bajo la [[cubierta|coat]] se ubica una [[corteza de PG|cortex]] (50-100 nm) con anillos murámico-delta-lactama."
      }
    },
    "gp.ch3.s1.02": {
      "en": {
        "pop": "Loosely cross-linked [[cortex|cortex]] layers keep the core dry above the thin [[germ cell wall|germ_wall]].",
        "blueprint": "Low-crosslink [[cortex|cortex]] geometry sustains core dehydration above the dormant [[germ wall|germ_wall]].",
        "scientific": "Low-crosslink [[cortex|cortex]] (~3% peptides) maintains core dehydration over the thin [[germ wall|germ_wall]]."
      },
      "es": {
        "pop": "Una [[corteza|cortex]] poco reticulada mantiene seco el núcleo sobre la fina [[pared germinal|germ_wall]].",
        "blueprint": "La [[corteza|cortex]] de baja reticulación sostiene la deshidratación sobre la [[pared germinal|germ_wall]].",
        "scientific": "La [[corteza|cortex]] poco entrecruzada (~3%) mantiene la deshidratación sobre la [[pared germinal|germ_wall]]."
      }
    },
    "gp.ch3.s1.03": {
      "en": {
        "pop": "Inside lies a compressed [[inner spore membrane|spore_im]] holding GerA receptors and SleB lytic enzymes.",
        "blueprint": "A low-mobility [[inner membrane|spore_im]] seals the core and mounts GerA triggers plus SleB enzymes.",
        "scientific": "The compressed [[inner spore membrane|spore_im]] limits permeability and hosts GerA, SpoVA and SleB (4FET)."
      },
      "es": {
        "pop": "Adentro hay una [[membrana interna|spore_im]] comprimida con receptores GerA y enzimas líticas SleB.",
        "blueprint": "Una [[membrana interna|spore_im]] rígida sella el núcleo y monta sensores GerA junto a enzimas SleB.",
        "scientific": "La [[membrana interna|spore_im]] comprimida frena permeabilidad y porta GerA, SpoVA y SleB (PDB 4FET)."
      }
    },
    "gp.ch3.s2.01": {
      "en": {
        "pop": "Enter the dehydrated [[spore core|core]], where water content drops from eighty to about thirty percent.",
        "blueprint": "Core interior: free water falls from 80% to ~30%, freezing enzymes inside the [[core bay|core]].",
        "scientific": "Inside the dehydrated [[core|core]], water falls to ~25-45% wet weight, arresting thermal denaturation."
      },
      "es": {
        "pop": "Entra al [[núcleo esporal|core]] deshidratado, donde el agua cae del ochenta a cerca del treinta por ciento.",
        "blueprint": "Interior del núcleo: el agua cae del 80% al ~30%, inmovilizando enzimas en el [[núcleo|core]].",
        "scientific": "En el [[núcleo|core]] deshidratado el agua baja a ~25-45%, impidiendo la desnaturalización térmica."
      }
    },
    "gp.ch3.s2.02": {
      "en": {
        "pop": "Packed with [[Ca-DPA|ca_dpa]] and [[SASP sleeves|sasp_dna]], the dry [[core|core]] locks life inside a time-capsule vault.",
        "blueprint": "Vitrified [[Ca-DPA gel|ca_dpa]] and [[SASP-armored DNA|sasp_dna]] immobilize the [[core|core]] against heat and UV stress.",
        "scientific": "1:1 [[Ca2+-dipicolinate|ca_dpa]] (~10-15% dry mass) and [[SASPs (2Z3X)|sasp_dna]] stabilize the dehydrated [[core|core]]."
      },
      "es": {
        "pop": "Lleno de [[Ca-DPA|ca_dpa]] y [[fundas SASP|sasp_dna]], el [[núcleo|core]] seco actúa como una cápsula del tiempo.",
        "blueprint": "El gel [[Ca-DPA|ca_dpa]] vitrificado y el [[ADN con SASP|sasp_dna]] inmovilizan el [[núcleo|core]] ante calor y UV.",
        "scientific": "[[Ca2+-dipicolinato|ca_dpa]] 1:1 (10-15% peso seco) y [[SASP (2Z3X)|sasp_dna]] estabilizan el [[núcleo|core]] seco."
      }
    },
    "gp.ch3.s2.03": {
      "en": {
        "pop": "Alpha/beta [[SASPs|sasp_dna]] lock DNA in A-form until nutrients trigger [[inner membrane|spore_im]] GerA sensors.",
        "blueprint": "[[SASP sheaths|sasp_dna]] hold DNA in UV-safe A-form until amino acids trip [[inner membrane|spore_im]] GerA.",
        "scientific": "Alpha/beta [[SASPs|sasp_dna]] enforce A-form dsDNA (blocking thymine dimers) until [[membrane|spore_im]] GerA fires."
      },
      "es": {
        "pop": "Las [[SASP|sasp_dna]] alfa/beta fijan el ADN en forma A hasta que nutrientes activan GerA en la [[membrana|spore_im]].",
        "blueprint": "Las [[vainas SASP|sasp_dna]] fijan el ADN en forma A hasta que aminoácidos disparan GerA en la [[membrana|spore_im]].",
        "scientific": "Las [[SASP|sasp_dna]] alfa/beta fijan ADNbc en forma A sin dímeros de timina hasta activar [[GerA|spore_im]]."
      }
    },
    "gp.ch4.s0.01": {
      "en": {
        "pop": "Zoom to the molecular [[cross-link inset|crosslink]] showing alternating NAG and NAM sugar chains.",
        "blueprint": "Molecular zoom: inspect the [[cross-link assembly|crosslink]] built on alternating NAG-NAM glycan rails.",
        "scientific": "At 1-3 nm resolution, the [[inset|crosslink]] resolves beta-1,4-linked NAG-NAM disaccharide glycan chains."
      },
      "es": {
        "pop": "Acércate al [[detalle molecular|crosslink]] que muestra cadenas alternas de azúcares NAG y NAM.",
        "blueprint": "Zoom molecular: analiza el [[ensamble de enlace|crosslink]] sobre rieles glucídicos alternos NAG-NAM.",
        "scientific": "A 1-3 nm, el [[detalle|crosslink]] resuelve cadenas glucídicas NAG-NAM unidas por enlaces beta-1,4."
      }
    },
    "gp.ch4.s0.02": {
      "en": {
        "pop": "[[PBP transpeptidases|pbp]] bridge stem peptides at D-Ala-D-Ala, forging a covalent [[wall cross-link|crosslink]].",
        "blueprint": "[[PBP actuators|pbp]] cleave terminal D-Ala to weld stem peptides into a rigid [[murein cross-link|crosslink]].",
        "scientific": "[[PBPs|pbp]] (7BN9) cleave D-Ala-D-Ala, forming direct mDAP or Gly5 [[peptide cross-links|crosslink]]."
      },
      "es": {
        "pop": "Las [[transpeptidasas PBP|pbp]] unen péptidos en D-Ala-D-Ala formando un [[enlace covalente|crosslink]] parietal.",
        "blueprint": "Los [[actuadores PBP|pbp]] cortan D-Ala terminal y sueldan los péptidos en un [[enlace rígido|crosslink]].",
        "scientific": "Las [[PBP|pbp]] (7BN9) escinden D-Ala-D-Ala y forman [[enlaces peptídicos|crosslink]] mDAP o Gly5."
      }
    },
    "gp.ch4.s0.03": {
      "en": {
        "pop": "Phosphodiester [[teichoic chains|teichoic]] attach to NAM C6, reinforcing the [[peptidoglycan wall|pg_wall]].",
        "blueprint": "Phosphodiester [[teichoic struts|teichoic]] bolt onto NAM C6 sites, stiffening the [[wall matrix|pg_wall]].",
        "scientific": "Glycerol/ribitol-P [[teichoic polymers|teichoic]] bind NAM C6, stabilizing the [[peptidoglycan|pg_wall]] mesh."
      },
      "es": {
        "pop": "Las [[cadenas teicoicas|teichoic]] fosfodiéster se unen al C6 de NAM y refuerzan la [[pared|pg_wall]].",
        "blueprint": "[[Puntales teicoicos|teichoic]] fosfodiéster se anclan en NAM C6 y rigidizan la [[matriz parietal|pg_wall]].",
        "scientific": "[[Polímeros teicoicos|teichoic]] de glicerol/ribitol-P en NAM C6 estabilizan la malla de [[peptidoglicano|pg_wall]]."
      }
    },
    "gp.ch4.s1.01": {
      "en": {
        "pop": "At 0.1 nm atomic scale, C, H, N and O atoms build every glycan ring, [[cross-link|crosslink]] and DPA ring.",
        "blueprint": "Down at 0.1 nm, C, H, N and O atoms construct every sugar rail, [[peptide weld|crosslink]] and DPA ligand.",
        "scientific": "At 0.1-0.3 nm, C, H, N and O atoms form NAG-NAM rings, [[peptide cross-links|crosslink]] and dipicolinate."
      },
      "es": {
        "pop": "A escala atómica de 0,1 nm, átomos de C, H, N y O forman cada azúcar, [[enlace|crosslink]] y anillo DPA.",
        "blueprint": "A 0,1 nm, los átomos C, H, N y O edifican cada riel glucídico, [[soldadura peptídica|crosslink]] y DPA.",
        "scientific": "A 0,1-0,3 nm, C, H, N y O componen anillos NAG-NAM, [[enlaces peptídicos|crosslink]] y dipicolinato."
      }
    },
    "gp.ch4.s1.02": {
      "en": {
        "pop": "Phosphorus atoms anchor [[teichoic acids|teichoic]] and [[A-form DNA|sasp_dna]] backbones across both states.",
        "blueprint": "Phosphorus hubs form the anionic backbone of [[teichoic rods|teichoic]] and [[SASP-bound DNA|sasp_dna]].",
        "scientific": "Phosphorus (vdW 1.8 A) forms phosphodiester links in [[WTA/LTA|teichoic]] and [[A-form dsDNA|sasp_dna]]."
      },
      "es": {
        "pop": "Los átomos de fósforo sostienen el esqueleto de [[ácidos teicoicos|teichoic]] y [[ADN forma A|sasp_dna]].",
        "blueprint": "Nodos de fósforo vertebran la carga aniónica de [[varillas teicoicas|teichoic]] y [[ADN con SASP|sasp_dna]].",
        "scientific": "El fósforo (vdW 1,8 A) forma enlaces fosfodiéster en [[WTA/LTA|teichoic]] y [[ADNbc forma A|sasp_dna]]."
      }
    },
    "gp.ch4.s1.03": {
      "en": {
        "pop": "Each divalent calcium ion chelates pyridine-2,6-dicarboxylate into a 1:1 [[Ca-DPA complex|ca_dpa]].",
        "blueprint": "One divalent Ca2+ ion bridges pyridine-2,6-dicarboxylate ligands into a rigid [[Ca-DPA unit|ca_dpa]].",
        "scientific": "Ionic Ca2+ (1.0 A radius) coordinates pyridine-2,6-dicarboxylate in a 1:1 [[Ca-DPA chelate|ca_dpa]]."
      },
      "es": {
        "pop": "Cada ion calcio divalente quela piridina-2,6-dicarboxilato en un [[complejo Ca-DPA|ca_dpa]] 1:1.",
        "blueprint": "Un ion Ca2+ divalente enlaza ligandos piridina-2,6-dicarboxilato en una [[unidad Ca-DPA|ca_dpa]].",
        "scientific": "El Ca2+ iónico (radio 1,0 A) coordina piridina-2,6-dicarboxilato en un [[quelato Ca-DPA|ca_dpa]] 1:1."
      }
    },
    "gp.ch4.s2.01": {
      "en": {
        "pop": "One [[plasma membrane|pm]] and thick [[peptidoglycan|pg_wall]] explain Gram-positive staining and drug access.",
        "blueprint": "Recap: one [[bilayer|pm]] plus heavy [[murein armor|pg_wall]] govern both Gram staining and beta-lactam entry.",
        "scientific": "Monoderm [[membrane|pm]] topology plus 20-80 nm [[PG|pg_wall]] explain Gram retention and PBP accessibility."
      },
      "es": {
        "pop": "Una [[membrana|pm]] y grueso [[peptidoglicano|pg_wall]] explican la tinción de Gram y el acceso antibiótico.",
        "blueprint": "Resumen: una [[bicapa|pm]] y [[mureína gruesa|pg_wall]] dictan tanto la tinción Gram como el acceso fármaco.",
        "scientific": "La topología monoderma ([[membrana|pm]] + [[PG|pg_wall]] 20-80 nm) explica retención Gram y acceso a PBP."
      }
    },
    "gp.ch4.s2.02": {
      "en": {
        "pop": "Under starvation, [[sporulation|forespore]] builds a [[coat|coat]], [[cortex|cortex]] and vitrified [[Ca-DPA core|ca_dpa]].",
        "blueprint": "Under stress, [[forespore assembly|forespore]] seals a [[coat|coat]], [[cortex|cortex]] and dry [[Ca-DPA vault|ca_dpa]].",
        "scientific": "Starvation shifts [[forespore|forespore]] maturation into [[coat|coat]], [[cortex|cortex]] and [[Ca-DPA|ca_dpa]] stasis."
      },
      "es": {
        "pop": "Ante inanición, la [[esporulación|forespore]] arma [[cubierta|coat]], [[corteza|cortex]] y [[núcleo Ca-DPA|ca_dpa]].",
        "blueprint": "Bajo estrés, el [[ensamble preesporal|forespore]] sella [[cubierta|coat]], [[corteza|cortex]] y [[Ca-DPA|ca_dpa]].",
        "scientific": "La inanición madura la [[preespora|forespore]] con [[cubierta|coat]], [[corteza|cortex]] y estasis [[Ca-DPA|ca_dpa]]."
      }
    },
    "gp.ch4.s2.03": {
      "en": {
        "pop": "Explore any molecular tag now, or continue forward to inspect complex eukaryotic cells.",
        "blueprint": "Inspect any structure tag now, or advance to examine compartmentalized eukaryotic cells.",
        "scientific": "Select any molecular tag to drill deeper, or proceed next into complex eukaryotic cells."
      },
      "es": {
        "pop": "Explora ahora cualquier etiqueta molecular o avanza para conocer células eucariotas complejas.",
        "blueprint": "Inspecciona cualquier etiqueta estructural o avanza para estudiar células eucariotas compartimentadas.",
        "scientific": "Selecciona cualquier etiqueta molecular o continúa el curso hacia las células eucariotas complejas."
      }
    }
  }
};
