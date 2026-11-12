import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Stage 3 (`real-mycoplasma`, `real-chlamydia`, `real-rickettsia`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 129 of 135 cues (>95%) match base `cue.text` / `ES_TOURS_PHRASES[cue.text]` verbatim in `pop`.
 * - Exactly 2 cues per tour (6 total: `myco.ch4.s0.02`, `myco.ch4.s1.02`, `chla.ch1.s0.02`,
 *   `chla.ch3.s0.02`, `rick.ch3.s1.02`, `rick.ch4.s1.02`) use grounded everyday mental models
 *   for complex biological mechanisms.
 */
export const PERSONAS_PARASITIC_CELLS: TourPersonaMap = {
  "real-mycoplasma": {
    "myco.ch0.s0.01": {
      "en": {
        "pop": "Meet Mycoplasma genitalium, the smallest known self-replicating cell on Earth.",
        "blueprint": "System node Mycoplasma genitalium: the smallest self-replicating cellular chassis known.",
        "scientific": "Mycoplasma genitalium (class Mollicutes) is the smallest known self-replicating bacterium."
      },
      "es": {
        "pop": "Conoce a Mycoplasma genitalium, la célula autorreplicante más pequeña conocida.",
        "blueprint": "Nodo Mycoplasma genitalium: el chasis celular autorreplicante más compacto conocido.",
        "scientific": "Mycoplasma genitalium (clase Mollicutes) es la bacteria autorreplicante más pequeña descrita."
      }
    },
    "myco.ch0.s0.02": {
      "en": {
        "pop": "Its flask-shaped body spans just 300 by 600 nm, smaller than some giant viruses.",
        "blueprint": "Its piriform hull measures just 300 by 600 nm, undercutting several giant virus capsids.",
        "scientific": "This ~300 x 600 nm piriform cell (~0.03 fL) is physically smaller than Mimivirus virions."
      },
      "es": {
        "pop": "Su cuerpo en forma de matraz mide solo 300 por 600 nm, menor que algunos virus gigantes.",
        "blueprint": "Su casco piriforme mide apenas 300 por 600 nm, menor que varias cápsides de virus gigantes.",
        "scientific": "Esta célula piriforme de ~300 x 600 nm (~0,03 fL) ocupa menos volumen que un Mimivirus."
      }
    },
    "myco.ch0.s0.03": {
      "en": {
        "pop": "Yet a [[lipid membrane|membrane]], [[DNA|dna]] and [[70S ribosomes|ribosome]] prove it is truly alive.",
        "blueprint": "Onboard [[bilayer hull|membrane]], [[dsDNA repo|dna]] and [[70S compilers|ribosome]] make it an autonomous cell.",
        "scientific": "A [[plasma membrane|membrane]], circular [[dsDNA|dna]] and [[70S ribosomes|ribosome]] confirm cellular autonomy."
      },
      "es": {
        "pop": "Aun así, [[membrana lipídica|membrane]], [[ADN|dna]] y [[ribosomas 70S|ribosome]] prueban que está viva.",
        "blueprint": "Su [[casco lipídico|membrane]], [[ADNbc|dna]] y [[compiladores 70S|ribosome]] definen un nodo celular vivo.",
        "scientific": "Una [[membrana plasmática|membrane]], [[ADNbc|dna]] y [[ribosomas 70S|ribosome]] confirman vida celular."
      }
    },
    "myco.ch0.s1.01": {
      "en": {
        "pop": "Unlike E. coli, Mycoplasma wears zero peptidoglycan cell wall outside its [[membrane|membrane]].",
        "blueprint": "Unlike E. coli, zero external murein armor surrounds its single [[phospholipid hull|membrane]].",
        "scientific": "Reductive loss of mur operons leaves zero peptidoglycan sacculus beyond its [[bilayer|membrane]]."
      },
      "es": {
        "pop": "A diferencia de E. coli, carece por completo de pared de peptidoglicano sobre su [[membrana|membrane]].",
        "blueprint": "Frente a E. coli, opera sin blindaje externo de mureína sobre su [[casco lipídico|membrane]].",
        "scientific": "La pérdida de operones mur elimina todo sáculo de peptidoglicano sobre su [[bicapa|membrane]]."
      }
    },
    "myco.ch0.s1.02": {
      "en": {
        "pop": "To keep this naked bilayer from tearing, it packs [[host cholesterol|sterol]] between lipids.",
        "blueprint": "To stabilize the unbraced hull against shear, it embeds scavenged [[host sterols|sterol]].",
        "scientific": "Exogenous [[cholesterol|sterol]] (~35-50 mol% of total lipid) intercalates between acyl chains."
      },
      "es": {
        "pop": "Para evitar que esta bicapa desnuda se rasgue, inserta [[colesterol del huésped|sterol]] entre lípidos.",
        "blueprint": "Para estabilizar el casco sin pared frente al corte, incrusta [[esteroles del huésped|sterol]].",
        "scientific": "El [[colesterol|sterol]] exógeno (~35-50 mol% lipídico) se intercala entre las cadenas acilo."
      }
    },
    "myco.ch0.s1.03": {
      "en": {
        "pop": "Planar [[sterol rings|sterol]] stiffen the fluid membrane and curb osmotic leaks.",
        "blueprint": "Rigid [[sterol inserts|sterol]] damp bilayer flex and clamp passive ion leakage.",
        "scientific": "Tetracyclic [[sterol cores|sterol]] order phospholipid acyl tails and lower water permeability."
      },
      "es": {
        "pop": "Los [[anillos planos de esterol|sterol]] dan rigidez a la membrana fluida y frenan fugas osmóticas.",
        "blueprint": "Los [[insertos rígidos de esterol|sterol]] amortiguan la flexión y sellan fugas pasivas.",
        "scientific": "Los [[núcleos tetracíclicos de esterol|sterol]] ordenan colas acilo y reducen fugas osmóticas."
      }
    },
    "myco.ch0.s2.01": {
      "en": {
        "pop": "Anchored in the outer leaflet sit dense [[surface lipoproteins|lipo]] facing the airway.",
        "blueprint": "Diacylglycerol anchors mount a dense array of [[surface lipoproteins|lipo]] on the outer hull.",
        "scientific": "N-terminally lipidated [[Mgmt lipoproteins|lipo]] form a dense glycocalyx-facing brush."
      },
      "es": {
        "pop": "Ancladas en la cara externa se alzan densas [[lipoproteínas de superficie|lipo]] hacia la vía aérea.",
        "blueprint": "Anclajes lipídicos fijan una matriz densa de [[lipoproteínas externas|lipo]] sobre el casco.",
        "scientific": "[[Lipoproteínas aciladas|lipo]] N-terminales forman un denso cepillo expuesto al epitelio."
      }
    },
    "myco.ch0.s2.02": {
      "en": {
        "pop": "Mycoplasma shuffles these [[lipoprotein coats|lipo]] to evade host antibodies.",
        "blueprint": "Recombinational switching rotates [[lipoprotein signatures|lipo]] to defeat antibody locks.",
        "scientific": "Homologous MgPa/lipoprotein gene recombination varies [[surface epitopes|lipo]] antigenically."
      },
      "es": {
        "pop": "Mycoplasma alterna estas [[cubiertas de lipoproteínas|lipo]] para esquivar los anticuerpos.",
        "blueprint": "La conmutación por recombinación rota [[firmas lipoproteicas|lipo]] frente a anticuerpos.",
        "scientific": "La recombinación génica homóloga varía antigénicamente los [[epítopos lipoproteicos|lipo]]."
      }
    },
    "myco.ch0.s2.03": {
      "en": {
        "pop": "Without a rigid wall, the pliable [[bilayer|membrane]] squeezes through 220 nm filters.",
        "blueprint": "Zero rigid framing lets the deformable [[bilayer hull|membrane]] extrude through 220 nm pores.",
        "scientific": "Pleomorphic [[membrane|membrane]] compliance permits passage across 0.22 um sterilizing filters."
      },
      "es": {
        "pop": "Sin pared rígida, su [[bicapa flexible|membrane]] logra colarse por filtros de 220 nm.",
        "blueprint": "Sin bastidor rígido, el [[casco deformable|membrane]] atraviesa poros de filtro de 220 nm.",
        "scientific": "La plasticidad pleomórfica de su [[membrana|membrane]] le permite cruzar filtros de 0,22 um."
      }
    },
    "myco.ch1.s0.01": {
      "en": {
        "pop": "At the narrow neck juts a polarized crown of [[Nap adhesin complexes|nap]].",
        "blueprint": "The anterior neck mounts a high-density docking array of [[Nap adhesin units|nap]].",
        "scientific": "Cryo-ET resolves a polar array of extracellular [[Nap adhesin complexes|nap]] (PDB 6RUT)."
      },
      "es": {
        "pop": "En el cuello estrecho sobresale una corona polarizada de [[complejos adhesina Nap|nap]].",
        "blueprint": "El cuello anterior monta una matriz polar de acoplamiento con [[unidades Nap|nap]].",
        "scientific": "La crio-ET revela una corona polar de [[complejos adhesina Nap|nap]] (PDB 6RUT)."
      }
    },
    "myco.ch1.s0.02": {
      "en": {
        "pop": "Each four-part [[Nap spike|nap]] pairs two P140 stalks with two P110 receptor heads.",
        "blueprint": "Each heterotetrameric [[Nap clamp|nap]] couples two P140 load stalks to two P110 heads.",
        "scientific": "Each ~520 kDa [[Nap heterotetramer|nap]] assembles two P140 (MgpB) and two P110 (MgpC) subunits."
      },
      "es": {
        "pop": "Cada [[espícula Nap|nap]] tetramérica une dos tallos P140 con dos cabezas receptoras P110.",
        "blueprint": "Cada [[mordaza heterotetramérica Nap|nap]] une dos soportes P140 con dos cabezas P110.",
        "scientific": "Cada [[heterotetrámero Nap|nap]] (~520 kDa) reúne dos subunidades P140 y dos P110."
      }
    },
    "myco.ch1.s0.03": {
      "en": {
        "pop": "Crowding [[Nap complexes|nap]] at one tip turns the flask neck into a sticky nose.",
        "blueprint": "Concentrating [[Nap latches|nap]] at one pole establishes a directional traction nose.",
        "scientific": "Polar clustering of [[Nap complexes|nap]] aligns cytoadherence with the gliding axis."
      },
      "es": {
        "pop": "Agrupar [[complejos Nap|nap]] en un polo convierte el cuello del matraz en una proa adhesiva.",
        "blueprint": "Concentrar [[enganches Nap|nap]] en un polo define una proa direccional de tracción.",
        "scientific": "El agrupamiento polar de [[complejos Nap|nap]] alinea la citoadherencia al eje motor."
      }
    },
    "myco.ch1.s1.01": {
      "en": {
        "pop": "The P110 pocket clasps [[sialylated sugar chains|sialo]] on human airway cells.",
        "blueprint": "The P110 binding cleft locks onto [[sialylated glycan pins|sialo]] on airway epithelium.",
        "scientific": "P110 globular domains coordinate alpha-2,3/alpha-2,6 [[sialylated oligosaccharides|sialo]]."
      },
      "es": {
        "pop": "El bolsillo de P110 sujeta [[cadenas de azúcares sialilados|sialo]] del epitelio humano.",
        "blueprint": "La hendidura P110 se acopla a [[glicanos sialilados|sialo]] de la superficie epitelial.",
        "scientific": "El dominio globular P110 coordina [[oligosacáridos sialilados|sialo]] alfa-2,3 y alfa-2,6."
      }
    },
    "myco.ch1.s1.02": {
      "en": {
        "pop": "Catch-and-release cycles on [[sialic acid receptors|sialo]] keep the cell tethered.",
        "blueprint": "Alternating engagement across multiple [[sialylated anchors|sialo]] prevents detachment.",
        "scientific": "Multivalent avidity across [[sialoglycoprotein receptors|sialo]] sustains shear-resistant grip."
      },
      "es": {
        "pop": "Ciclos de agarre y suelta sobre [[receptores de ácido siálico|sialo]] mantienen fija la célula.",
        "blueprint": "El enganche alternante sobre múltiples [[anclajes sialilados|sialo]] evita el desprendimiento.",
        "scientific": "La avidez multivalente sobre [[sialoglicoproteínas|sialo]] sostiene adherencia bajo flujo."
      }
    },
    "myco.ch1.s1.03": {
      "en": {
        "pop": "When ATP cleavage resets [[Nap|nap]], the clamp lets go to step forward.",
        "blueprint": "Conformational reset opens the [[Nap jaw|nap]], releasing grip for the next forward step.",
        "scientific": "Open-to-closed transitions between P140 and P110 cycle [[Nap|nap]] receptor affinity (PDB 6RYO)."
      },
      "es": {
        "pop": "Cuando la hidrólisis de ATP reajusta [[Nap|nap]], la pinza se suelta para dar otro paso.",
        "blueprint": "El reajuste conformacional abre la [[mordaza Nap|nap]] para avanzar al siguiente anclaje.",
        "scientific": "Transiciones abierto-cerrado entre P140 y P110 modulan la afinidad de [[Nap|nap]] (PDB 6RYO)."
      }
    },
    "myco.ch1.s2.01": {
      "en": {
        "pop": "Below stretches a beating [[human epithelial cilium|cilium]] meant to sweep mucus clear.",
        "blueprint": "Beneath lies a motile [[host airway cilium|cilium]] driving mucociliary clearance.",
        "scientific": "A 9+2 axonemal [[respiratory epithelial cilium|cilium]] (~250 nm wide) beats at ~12-15 Hz."
      },
      "es": {
        "pop": "Debajo se extiende un [[cilio epitelial humano|cilium]] batiente que barre el moco respiratorio.",
        "blueprint": "Debajo opera un [[cilio móvil del huésped|cilium]] dedicado al barrido mucociliar.",
        "scientific": "Un [[cilio epitelial respiratorio|cilium]] 9+2 (~250 nm) bate a ~12-15 Hz impulsando moco."
      }
    },
    "myco.ch1.s2.02": {
      "en": {
        "pop": "By locking [[Nap adhesins|nap]] onto [[ciliary sugars|sialo]], Mycoplasma resists clearance.",
        "blueprint": "Coupling [[Nap clamps|nap]] to [[ciliary glycans|sialo]] defeats mucociliary shear forces.",
        "scientific": "High-avidity [[Nap|nap]] docking onto [[sialylated ciliary glycans|sialo]] blocks mucociliary wash."
      },
      "es": {
        "pop": "Al fijar [[adhesinas Nap|nap]] a los [[azúcares ciliares|sialo]], Mycoplasma evita ser arrastrado.",
        "blueprint": "Acoplar [[mordazas Nap|nap]] a [[glicanos ciliares|sialo]] neutraliza el arrastre mucociliar.",
        "scientific": "La unión de [[Nap|nap]] a [[glicanos ciliares sialilados|sialo]] resiste el barrido epitelial."
      }
    },
    "myco.ch1.s2.03": {
      "en": {
        "pop": "It glides down the [[cilium shaft|cilium]] to colonize the warm mucosal surface.",
        "blueprint": "Polarized traction guides the chassis down the [[cilium rail|cilium]] to the apical base.",
        "scientific": "Processive gliding descends the [[ciliary membrane|cilium]] toward periciliary host epithelium."
      },
      "es": {
        "pop": "Se desliza por el [[eje del cilio|cilium]] hasta colonizar la cálida superficie mucosa.",
        "blueprint": "La tracción polar conduce el chasis por el [[riel ciliar|cilium]] hasta la base apical.",
        "scientific": "El deslizamiento procesivo desciende por la [[membrana ciliar|cilium]] al epitelio periciliar."
      }
    },
    "myco.ch2.s0.01": {
      "en": {
        "pop": "Inside the neck sits an internal skeleton capped by a dense [[terminal button|button]].",
        "blueprint": "Inside the neck mounts a rigid internal frame nose-capped by a [[terminal button|button]].",
        "scientific": "Cryo-ET of the attachment organelle reveals an anterior electron-dense [[terminal button|button]]."
      },
      "es": {
        "pop": "Dentro del cuello se aloja un esqueleto interno rematado por un [[botón terminal|button]] denso.",
        "blueprint": "Dentro del cuello se monta un bastidor interno coronado por el [[botón terminal|button]].",
        "scientific": "La crio-ET del orgánulo terminal muestra un [[botón terminal|button]] electrodenso anterior."
      }
    },
    "myco.ch2.s0.02": {
      "en": {
        "pop": "HMW1, HMW2 and P65 proteins lock the [[terminal button|button]] beneath the tip membrane.",
        "blueprint": "Scaffolds HMW1, HMW2 and P65 bolt the [[terminal button|button]] to the anterior tip.",
        "scientific": "Coiled-coil HMW1/HMW2/P65 cytadherence proteins anchor the [[terminal button|button]] apically."
      },
      "es": {
        "pop": "Las proteínas HMW1, HMW2 y P65 fijan el [[botón terminal|button]] bajo la membrana apical.",
        "blueprint": "Los andamios HMW1, HMW2 y P65 empernan el [[botón terminal|button]] al polo anterior.",
        "scientific": "Proteínas HMW1/HMW2/P65 en hélice superenrollada anclan el [[botón terminal|button]]."
      }
    },
    "myco.ch2.s0.03": {
      "en": {
        "pop": "Behind it runs a segmented [[cytoskeletal rod|rod]] that braces the wall-less neck.",
        "blueprint": "Aft of the cap extends a segmented [[compression rod|rod]] stiffening the neck.",
        "scientific": "Paired HMW2 coiled-coil plates stack into a ~250 nm segmented [[electron-dense rod|rod]]."
      },
      "es": {
        "pop": "Detrás corre un [[bastón citoesquelético|rod]] segmentado que sostiene el cuello sin pared.",
        "blueprint": "Detrás se extiende una [[barra segmentada de carga|rod]] que rigidiza el cuello.",
        "scientific": "Placas emparejadas de HMW2 forman un [[bastón electrodenso|rod]] segmentado de ~250 nm."
      }
    },
    "myco.ch2.s1.01": {
      "en": {
        "pop": "The back end of the [[core rod|rod]] seats into a saucer-like [[bowl wheel complex|wheel]].",
        "blueprint": "The proximal [[core strut|rod]] sockets into a concave [[basal wheel hub|wheel]].",
        "scientific": "Posteriorly, the [[segmented rod|rod]] terminates in a ~40 nm [[bowl/wheel complex|wheel]]."
      },
      "es": {
        "pop": "La base del [[bastón central|rod]] encaja en un [[complejo rueda en cuenco|wheel]] cóncavo.",
        "blueprint": "El extremo proximal del [[puntal central|rod]] asienta en un [[buje basal en cuenco|wheel]].",
        "scientific": "En su base, el [[bastón segmentado|rod]] encaja en un [[complejo rueda/cuenco|wheel]] (~40 nm)."
      }
    },
    "myco.ch2.s1.02": {
      "en": {
        "pop": "This [[basal wheel|wheel]] transmits pulling forces into the rest of the cytoplasm.",
        "blueprint": "This [[basal thrust plate|wheel]] distributes axial traction across the cell body.",
        "scientific": "P200 and TopJ linkers at the [[bowl complex|wheel]] couple core tension to the cell body."
      },
      "es": {
        "pop": "Esta [[rueda basal|wheel]] transmite las fuerzas de tracción al resto del citoplasma.",
        "blueprint": "Esta [[placa de empuje basal|wheel]] reparte la tracción axial al cuerpo celular.",
        "scientific": "Proteínas P200 y TopJ en el [[complejo en cuenco|wheel]] acoplan la tensión al soma."
      }
    },
    "myco.ch2.s1.03": {
      "en": {
        "pop": "Before cell division, the entire [[rod|rod]] and [[wheel|wheel]] duplicate for the daughter.",
        "blueprint": "Pre-fission assembly clones a second [[rod|rod]] and [[wheel|wheel]] module for the new pole.",
        "scientific": "De novo assembly of a nascent [[core rod|rod]] and [[bowl complex|wheel]] precedes cytokinesis."
      },
      "es": {
        "pop": "Antes de dividirse, todo el [[bastón|rod]] y la [[rueda|wheel]] se duplican para la célula hija.",
        "blueprint": "Antes de la fisión se ensambla otro módulo de [[bastón|rod]] y [[rueda|wheel]] para el polo hijo.",
        "scientific": "La biogénesis de novo de otro [[bastón|rod]] y [[cuenco basal|wheel]] precede a la citocinesis."
      }
    },
    "myco.ch2.s2.01": {
      "en": {
        "pop": "With zero flagella, Mycoplasma crawls using [[gliding motor complexes|gliding]] at the neck.",
        "blueprint": "Lacking rotary propellers, linear [[gliding actuators|gliding]] drive surface crawling.",
        "scientific": "Flagella-free Mollicutes translocate via neck-localized [[ATPase gliding motors|gliding]]."
      },
      "es": {
        "pop": "Sin flagelos, Mycoplasma repta usando [[complejos motores de deslizamiento|gliding]] en el cuello.",
        "blueprint": "Sin hélices rotatorias, [[actuadores lineales|gliding]] impulsan el avance sobre superficies.",
        "scientific": "Carente de flagelos, se desplaza mediante [[motores ATPasa de deslizamiento|gliding]] apicales."
      }
    },
    "myco.ch2.s2.02": {
      "en": {
        "pop": "ATP-burning [[gliding motors|gliding]] pull against the [[internal rod|rod]] to tug [[Nap feet|nap]].",
        "blueprint": "ATP-driven [[motor linkages|gliding]] brace on the [[core rod|rod]] to lever [[Nap latches|nap]].",
        "scientific": "ATP hydrolysis in [[gliding transducing complexes|gliding]] levers the [[rod|rod]] against [[Nap|nap]]."
      },
      "es": {
        "pop": "Los [[motores de deslizamiento|gliding]] queman ATP sobre el [[bastón|rod]] y tiran de [[Nap|nap]].",
        "blueprint": "[[Actuadores con ATP|gliding]] se apoyan en el [[bastón|rod]] para accionar [[mordazas Nap|nap]].",
        "scientific": "La hidrólisis de ATP en [[complejos motores|gliding]] acopla el [[bastón|rod]] con [[Nap|nap]]."
      }
    },
    "myco.ch2.s2.03": {
      "en": {
        "pop": "Inchworm strokes drag the cell across [[airway cilia|cilium]] at ~100 nm per second.",
        "blueprint": "Cyclic linear strokes haul the hull along [[ciliary surfaces|cilium]] at ~100 nm/s.",
        "scientific": "Conformational power strokes propel M. genitalium over [[epithelial cilia|cilium]] at ~0.1 um/s."
      },
      "es": {
        "pop": "Pasos rítmicos arrastran la célula sobre los [[cilios respiratorios|cilium]] a ~100 nm por segundo.",
        "blueprint": "Ciclos lineales arrastran el casco sobre [[superficies ciliares|cilium]] a ~100 nm/s.",
        "scientific": "Golpes conformacionales desplazan M. genitalium sobre [[cilios epiteliales|cilium]] a ~0,1 um/s."
      }
    },
    "myco.ch3.s0.01": {
      "en": {
        "pop": "Coiled in the center is a 580,076 bp [[circular dsDNA chromosome|dna]] with ~482 genes.",
        "blueprint": "Mounted centrally is a 580,076 bp [[circular dsDNA repository|dna]] encoding ~482 parts.",
        "scientific": "The 580,076 bp [[circular dsDNA genome|dna]] (~32% GC) encodes ~482 proteins and 43 RNAs."
      },
      "es": {
        "pop": "En el centro se enrolla un [[cromosoma circular de ADNbc|dna]] de 580.076 pb y ~482 genes.",
        "blueprint": "En el centro opera un [[repositorio circular de ADNbc|dna]] de 580.076 pb con ~482 piezas.",
        "scientific": "El [[genoma circular de ADNbc|dna]] (580.076 pb, ~32% GC) codifica ~482 proteínas y 43 ARN."
      }
    },
    "myco.ch3.s0.02": {
      "en": {
        "pop": "That is eight times smaller than E. coli, near the bare minimum for cellular life.",
        "blueprint": "Code size is one-eighth of E. coli, inspiring the JCVI-syn3.0 minimal-cell kernel.",
        "scientific": "Transposon mutagenesis shows ~380-400 of its 482 ORFs are essential, guiding JCVI-syn3.0."
      },
      "es": {
        "pop": "Es ocho veces menor que el de E. coli, rozando el mínimo absoluto de la vida celular.",
        "blueprint": "Su código es ocho veces menor que E. coli e inspiró el kernel mínimo JCVI-syn3.0.",
        "scientific": "La mutagénesis por transposones cifra en ~380-400 sus genes esenciales (base de JCVI-syn3.0)."
      }
    },
    "myco.ch3.s0.03": {
      "en": {
        "pop": "Architectural [[HU proteins|hu]] bend the [[supercoiled DNA|dna]] into compact loops.",
        "blueprint": "Dimeric [[HU clamps|hu]] route the [[supercoiled dsDNA|dna]] into space-saving loops.",
        "scientific": "Nucleoid-associated [[HU homodimers|hu]] and DNA gyrase compact the [[chromosome|dna]]."
      },
      "es": {
        "pop": "Las [[proteínas arquitectónicas HU|hu]] doblan el [[ADN superenrollado|dna]] en bucles compactos.",
        "blueprint": "Abrazaderas diméricas [[HU|hu]] pliegan el [[ADNbc superenrollado|dna]] en bucles densos.",
        "scientific": "Homodímeros asociados al nucleoide [[HU|hu]] y ADN girasa compactan el [[cromosoma|dna]]."
      }
    },
    "myco.ch3.s1.01": {
      "en": {
        "pop": "A minimal [[replisome fork|fork]] unwinds and duplicates the [[chromosome|dna]] before fission.",
        "blueprint": "A stripped-down [[replisome unit|fork]] duplicates the [[dsDNA loop|dna]] from oriC.",
        "scientific": "Bidirectional [[replisomes|fork]] (DnaE/PolC/DnaB) replicate the [[580 kbp genome|dna]] from oriC."
      },
      "es": {
        "pop": "Una [[horquilla replisómica|fork]] mínima desenrolla y duplica el [[cromosoma|dna]] antes de dividir.",
        "blueprint": "Una [[unidad replisómica|fork]] compacta duplica el [[bucle de ADNbc|dna]] desde oriC.",
        "scientific": "[[Replisomas|fork]] bidireccionales (DnaE/PolC/DnaB) copian el [[genoma de 580 kpb|dna]]."
      }
    },
    "myco.ch3.s1.02": {
      "en": {
        "pop": "Nearby, bacterial [[RNA polymerase|rnap]] transcribes essential genes into [[mRNA|mrna]].",
        "blueprint": "Single-sigma [[RNAP readers|rnap]] stream core operons into nascent [[mRNA transcripts|mrna]].",
        "scientific": "Core alpha2-beta-beta'-omega [[RNAP|rnap]] with one housekeeping sigma70 synthesizes [[mRNA|mrna]]."
      },
      "es": {
        "pop": "Cerca, la [[ARN polimerasa|rnap]] bacteriana transcribe genes esenciales en [[ARNm|mrna]].",
        "blueprint": "Lectores [[ARN pol|rnap]] con un único factor sigma emiten operones en [[ARNm|mrna]].",
        "scientific": "La [[ARN polimerasa|rnap]] bacteriana con un solo factor sigma70 sintetiza el [[ARNm|mrna]]."
      }
    },
    "myco.ch3.s1.03": {
      "en": {
        "pop": "Even with 482 genes, over 100 are spent just maintaining [[DNA|dna]] and [[RNA|mrna]].",
        "blueprint": "Over 25% of total gene budget goes solely to [[genome|dna]] fidelity and [[RNA|mrna]] handling.",
        "scientific": "Roughly ~150 conserved genes are dedicated to [[DNA|dna]] replication, repair and [[RNA|mrna]] expression."
      },
      "es": {
        "pop": "Aun con solo 482 genes, más de 100 se dedican a mantener el [[ADN|dna]] y el [[ARN|mrna]].",
        "blueprint": "Más del 25% del presupuesto génico sostiene la integridad del [[ADN|dna]] y el [[ARN|mrna]].",
        "scientific": "Unos ~150 genes conservados se destinan a replicar [[ADN|dna]] y procesar [[ARN|mrna]]."
      }
    },
    "myco.ch3.s2.01": {
      "en": {
        "pop": "About 150 bacterial [[70S ribosomes|ribosome]] pack the tiny cytosol to translate [[mRNA|mrna]].",
        "blueprint": "Roughly 150 [[70S ribosome compilers|ribosome]] fill the hull, translating [[mRNA|mrna]] streams.",
        "scientific": "Cryo-ET counts ~140-180 [[70S ribosomes|ribosome]] (30S + 50S) co-translating [[mRNAs|mrna]]."
      },
      "es": {
        "pop": "Unos 150 [[ribosomas 70S|ribosome]] bacterianos llenan el citosol para traducir el [[ARNm|mrna]].",
        "blueprint": "Unos 150 [[compiladores 70S|ribosome]] ocupan el casco traduciendo flujos de [[ARNm|mrna]].",
        "scientific": "La crio-ET contabiliza ~140-180 [[ribosomas 70S|ribosome]] traduciendo [[ARNm|mrna]] naciente."
      }
    },
    "myco.ch3.s2.02": {
      "en": {
        "pop": "Owning [[70S ribosomes|ribosome]] separates Mycoplasma sharply from ribosome-free viruses.",
        "blueprint": "Self-contained [[70S compilers|ribosome]] draw the hard architectural boundary above viruses.",
        "scientific": "Autonomous [[70S translation|ribosome]] (using UGA as Trp) distinguishes Mollicutes from virions."
      },
      "es": {
        "pop": "Poseer [[ribosomas 70S|ribosome]] separa con nitidez a Mycoplasma de los virus sin ribosomas.",
        "blueprint": "Sus [[compiladores 70S|ribosome]] propios trazan la frontera dura frente a los virus.",
        "scientific": "La [[traducción 70S|ribosome]] autónoma (UGA = Trp) distingue a Mollicutes de todo virión."
      }
    },
    "myco.ch3.s2.03": {
      "en": {
        "pop": "Macrolides and tetracyclines cure infection by jamming these [[70S ribosomes|ribosome]].",
        "blueprint": "Macrolide and tetracycline inhibitors stall the [[70S peptide exit tunnel|ribosome]].",
        "scientific": "Azithromycin (50S 23S rRNA) and doxycycline (30S A-site) inhibit its [[70S ribosomes|ribosome]]."
      },
      "es": {
        "pop": "Macrólidos y tetraciclinas curan la infección bloqueando estos [[ribosomas 70S|ribosome]].",
        "blueprint": "Macrólidos y tetraciclinas bloquean el túnel y puerto A de los [[compiladores 70S|ribosome]].",
        "scientific": "Azitromicina (ARNr 23S) y doxiciclina (sitio A 30S) inhiben sus [[ribosomas 70S|ribosome]]."
      }
    },
    "myco.ch4.s0.01": {
      "en": {
        "pop": "Evolution deleted pathways for making amino acids, fatty acids and nucleotides de novo.",
        "blueprint": "Reductive optimization stripped out de novo amino-acid, lipid and nucleotide factories.",
        "scientific": "Genome reduction eliminated de novo synthesis of amino acids, fatty acids, purines and sterols."
      },
      "es": {
        "pop": "La evolución borró las vías para fabricar aminoácidos, ácidos grasos y nucleótidos de novo.",
        "blueprint": "La reducción del sistema eliminó las fábricas de aminoácidos, lípidos y nucleótidos.",
        "scientific": "La evolución reductiva suprimió la biosíntesis de novo de aminoácidos, purinas y lípidos."
      }
    },
    "myco.ch4.s0.02": {
      "en": {
        "pop": "Living in a stocked host kitchen, its [[ABC importers|import]] grab ready-made parts instead of cooking.",
        "blueprint": "Transmembrane [[ABC import ports|import]] pull pre-built nucleosides, peptides and lipids inside.",
        "scientific": "ATP-binding cassette [[permeases|import]] and salvage kinases import host nucleosides and lipids."
      },
      "es": {
        "pop": "Como en una cocina ya surtida, sus [[importadores ABC|import]] toman piezas listas sin cocinarlas.",
        "blueprint": "Puertos transmembrana [[ABC|import]] ingresan nucleósidos, péptidos y lípidos prefabricados.",
        "scientific": "[[Permeasas ABC|import]] y quinasas de rescate importan nucleósidos y lípidos del huésped."
      }
    },
    "myco.ch4.s0.03": {
      "en": {
        "pop": "That dependency keeps its [[genome|dna]] tiny while restricting life to warm host tissues.",
        "blueprint": "Outsourcing precursor synthesis shrinks the [[codebase|dna]] at the cost of host lock-in.",
        "scientific": "Auxotrophic reliance permits a minimal [[580 kbp genome|dna]] only on mucosal host surfaces."
      },
      "es": {
        "pop": "Esa dependencia mantiene diminuto su [[genoma|dna]], pero lo ata a tejidos cálidos del huésped.",
        "blueprint": "Externalizar precursores encoge el [[código fuente|dna]] a cambio de dependencia del huésped.",
        "scientific": "La auxotrofía extrema permite un [[genoma de 580 kpb|dna]] solo sobre mucosas humanas."
      }
    },
    "myco.ch4.s1.01": {
      "en": {
        "pop": "Lacking a TCA cycle or respiratory chain, cytosolic [[glycolytic enzymes|glycolysis]] mint its ATP.",
        "blueprint": "With zero TCA or cytochromes, ATP generation runs on cytosolic [[glycolysis|glycolysis]].",
        "scientific": "Lacking cytochromes and quinones, substrate-level [[glycolysis|glycolysis]] and AckA generate ATP."
      },
      "es": {
        "pop": "Sin ciclo de Krebs ni cadena respiratoria, las [[enzimas glucolíticas|glycolysis]] generan su ATP.",
        "blueprint": "Sin ciclo TCA ni citocromos, el suministro de ATP depende de la [[glucólisis|glycolysis]] local.",
        "scientific": "Sin quinonas ni citocromos, la [[glucólisis|glycolysis]] y acetato quinasa generan su ATP."
      }
    },
    "myco.ch4.s1.02": {
      "en": {
        "pop": "Penicillin is a wrecking crew for brick walls, so a tent-like [[wall-less membrane|membrane]] shrugs it off.",
        "blueprint": "Beta-lactams target PBP wall cross-linkers, a subsystem absent from this [[naked hull|membrane]].",
        "scientific": "Lacking penicillin-binding proteins and murein, [[wall-less Mollicutes|membrane]] are beta-lactam immune."
      },
      "es": {
        "pop": "La penicilina derriba muros de ladrillo, pero resbala ante una [[membrana tipo tienda|membrane]] sin pared.",
        "blueprint": "Los betalactámicos atacan enlaces PBP de pared, módulo ausente en este [[casco desnudo|membrane]].",
        "scientific": "Al carecer de PBP y mureína, la [[membrana de Mollicutes|membrane]] es inmune a betalactámicos."
      }
    },
    "myco.ch4.s1.03": {
      "en": {
        "pop": "Clinicians therefore skip beta-lactams and target [[70S ribosomes|ribosome]] or DNA gyrase.",
        "blueprint": "Effective antimicrobials must target active subsystems: [[70S compilers|ribosome]] or topoisomerases.",
        "scientific": "Clinical therapy uses macrolides, tetracyclines ([[70S|ribosome]]) or fluoroquinolones (GyrA/ParC)."
      },
      "es": {
        "pop": "Por eso en clínica se evitan betalactámicos y se atacan [[ribosomas 70S|ribosome]] o ADN girasa.",
        "blueprint": "Los fármacos eficaces apuntan a módulos presentes: [[compiladores 70S|ribosome]] o topoisomerasas.",
        "scientific": "El tratamiento emplea macrólidos, tetraciclinas ([[70S|ribosome]]) o fluoroquinolonas (GyrA/ParC)."
      }
    },
    "myco.ch4.s2.01": {
      "en": {
        "pop": "Watch [[ABC importers|import]], [[glycolysis|glycolysis]], [[70S ribosomes|ribosome]] and [[Nap gliding|nap]] run as one.",
        "blueprint": "Live telemetry: [[ABC ports|import]] feed [[glycolysis|glycolysis]], [[70S build|ribosome]] and [[Nap traction|nap]].",
        "scientific": "Coupled flux links [[salvage uptake|import]], [[glycolytic ATP|glycolysis]], [[70S translation|ribosome]] and [[Nap|nap]]."
      },
      "es": {
        "pop": "Observa actuar juntos [[importadores ABC|import]], [[glucólisis|glycolysis]], [[ribosomas 70S|ribosome]] y [[Nap|nap]].",
        "blueprint": "Flujo integrado: [[puertos ABC|import]] nutren [[glucólisis|glycolysis]], [[70S|ribosome]] y [[tracción Nap|nap]].",
        "scientific": "El flujo acopla [[captación ABC|import]], [[ATP glucolítico|glycolysis]], [[traducción 70S|ribosome]] y [[Nap|nap]]."
      }
    },
    "myco.ch4.s2.02": {
      "en": {
        "pop": "Four hundred eighty-two genes suffice to enclose, copy, translate and power a living cell.",
        "blueprint": "Just 482 gene modules sustain hull integrity, replication, translation and local ATP.",
        "scientific": "With ~482 protein-coding genes, M. genitalium exemplifies minimal self-replicating cellular life."
      },
      "es": {
        "pop": "Cuatrocientos ochenta y dos genes bastan para encerrar, copiar, traducir y dar energía.",
        "blueprint": "Apenas 482 módulos génicos sostienen casco, replicación, traducción y ATP propio.",
        "scientific": "Con ~482 genes codificantes, M. genitalium encarna la vida celular autorreplicante mínima."
      }
    },
    "myco.ch4.s2.03": {
      "en": {
        "pop": "Explore any tag now, or continue to Chlamydia to see full intracellular ATP theft.",
        "blueprint": "Inspect any component tag, or advance to Chlamydia to examine direct host ATP import.",
        "scientific": "Select any molecular tag, or proceed to Chlamydia trachomatis to study Npt1 energy parasitism."
      },
      "es": {
        "pop": "Explora cualquier etiqueta o avanza a Chlamydia para ver el robo intracelular de ATP.",
        "blueprint": "Inspecciona cualquier componente o avanza a Chlamydia para analizar la importación de ATP.",
        "scientific": "Selecciona cualquier etiqueta o pasa a Chlamydia trachomatis para estudiar la translocasa Npt1."
      }
    }
  },
  "real-chlamydia": {
    "chla.ch0.s0.01": {
      "en": {
        "pop": "Meet Chlamydia trachomatis, an obligate intracellular bacterium inside a human cell.",
        "blueprint": "System node Chlamydia trachomatis: an obligate intracellular bacterium hosted in epithelium.",
        "scientific": "Chlamydia trachomatis (phylum Chlamydiota) is an obligate intracellular mucosal pathogen."
      },
      "es": {
        "pop": "Conoce a Chlamydia trachomatis, bacteria intracelular obligada dentro de una célula humana.",
        "blueprint": "Nodo Chlamydia trachomatis: una bacteria intracelular obligada dentro del epitelio humano.",
        "scientific": "Chlamydia trachomatis (filo Chlamydiota) es un patógeno bacteriano intracelular obligado."
      }
    },
    "chla.ch0.s0.02": {
      "en": {
        "pop": "Rather than floating free in [[host cytosol|host_cyto]], it builds a membrane-bound [[inclusion|inclusion]].",
        "blueprint": "Instead of running exposed in [[host cytosol|host_cyto]], it partitions a walled [[inclusion bay|inclusion]].",
        "scientific": "Isolated from bulk [[host cytosol|host_cyto]], it replicates inside a parasitophorous [[inclusion|inclusion]]."
      },
      "es": {
        "pop": "En vez de flotar libre en el [[citosol huésped|host_cyto]], crea una [[inclusión|inclusion]] con membrana.",
        "blueprint": "En vez de operar suelta en el [[citosol huésped|host_cyto]], aísla una [[bahía de inclusión|inclusion]].",
        "scientific": "Separada del [[citosol huésped|host_cyto]], se replica dentro de una vacuola de [[inclusión|inclusion]]."
      }
    },
    "chla.ch0.s0.03": {
      "en": {
        "pop": "Inside this private sac, Chlamydia alternates between two specialized cellular forms.",
        "blueprint": "Inside this isolated bay, the system cycles between two distinct hardware states.",
        "scientific": "Within the lumen, C. trachomatis executes a developmental biphasic cycle (EB <-> RB)."
      },
      "es": {
        "pop": "Dentro de este saco privado, Chlamydia alterna entre dos formas celulares especializadas.",
        "blueprint": "Dentro de esta cámara aislada, el sistema alterna entre dos estados operativos distintos.",
        "scientific": "En el lumen vacuolar, C. trachomatis ejecuta un ciclo de desarrollo bifásico (EB <-> RB)."
      }
    },
    "chla.ch0.s1.01": {
      "en": {
        "pop": "Normally a swallowed microbe is destroyed when acidic host lysosomes fuse with its sac.",
        "blueprint": "Default host defense routes endocytic vacuoles straight into hydrolytic lysosome shredders.",
        "scientific": "Canonical endolysosomal maturation acidifies phagosomes via V-ATPases and Rab7 recruitment."
      },
      "es": {
        "pop": "Normalmente un microbio ingerido se destruye cuando los lisosomas ácidos se unen a su saco.",
        "blueprint": "La defensa estándar dirige toda vacuola endocítica hacia lisosomas hidrolíticos destructores.",
        "scientific": "La maduración endolisosomal canónica acidifica el fagosoma mediante V-ATPasas y Rab7."
      }
    },
    "chla.ch0.s1.02": {
      "en": {
        "pop": "Chlamydia studs the [[inclusion membrane|inclusion]] with bacterial [[Inc effector proteins|inc]].",
        "blueprint": "Chlamydia reprograms the [[inclusion perimeter|inclusion]] by inserting transmembrane [[Inc adapters|inc]].",
        "scientific": "Into the [[inclusion bilayer|inclusion]], T3SS embeds >50 bilobed hydrophobic [[Inc effectors|inc]]."
      },
      "es": {
        "pop": "Chlamydia tapiza la [[membrana de inclusión|inclusion]] con [[proteínas efectoras Inc|inc]].",
        "blueprint": "Chlamydia reprograma el [[perímetro de inclusión|inclusion]] insertando [[adaptadores Inc|inc]].",
        "scientific": "En la [[bicapa de inclusión|inclusion]], el T3SS inserta >50 [[efectores Inc|inc]] bilobulados."
      }
    },
    "chla.ch0.s1.03": {
      "en": {
        "pop": "Hairpin [[Inc proteins|inc]] disguise the vacuole and block lysosomal fusion completely.",
        "blueprint": "Cytosolic-facing [[Inc coils|inc]] spoof host SNARE tags to veto lysosomal docking.",
        "scientific": "SNARE-mimetic [[IncA/IncE domains|inc]] bind host Rabs and VAMPs, preventing phagolysosome fusion."
      },
      "es": {
        "pop": "Las [[proteínas Inc|inc]] en horquilla camuflan la vacuola e impiden la fusión lisosomal.",
        "blueprint": "Dominios citosólicos [[Inc|inc]] imitan etiquetas SNARE para vetar el acople lisosomal.",
        "scientific": "Dominios tipo SNARE de [[IncA/IncE|inc]] captan proteínas Rab e impiden la fusión lisosomal."
      }
    },
    "chla.ch0.s2.01": {
      "en": {
        "pop": "As bacteria multiply, the [[inclusion sac|inclusion]] must expand tenfold without bursting.",
        "blueprint": "Exponential division demands tenfold surface expansion of the [[inclusion hull|inclusion]].",
        "scientific": "Logarithmic RB replication expands [[inclusion|inclusion]] volume from ~1 fL to >100 fL."
      },
      "es": {
        "pop": "Al multiplicarse las bacterias, el [[saco de inclusión|inclusion]] crece diez veces sin estallar.",
        "blueprint": "La división exponencial exige multiplicar por diez el área de la [[inclusión|inclusion]].",
        "scientific": "La replicación exponencial expande el volumen de la [[inclusión|inclusion]] de ~1 fL a >100 fL."
      }
    },
    "chla.ch0.s2.02": {
      "en": {
        "pop": "[[Inc adaptors|inc]] reroute [[Golgi sphingolipid vesicles|golgi_lip]] from the [[host cytosol|host_cyto]].",
        "blueprint": "[[Inc routers|inc]] hijack [[trans-Golgi lipid packets|golgi_lip]] crossing the [[host cytosol|host_cyto]].",
        "scientific": "[[IncD/CERT tethers|inc]] intercept [[exocytic sphingomyelin vesicles|golgi_lip]] in [[host cytosol|host_cyto]]."
      },
      "es": {
        "pop": "[[Adaptadores Inc|inc]] desvían [[vesículas del Golgi|golgi_lip]] desde el [[citosol huésped|host_cyto]].",
        "blueprint": "[[Enrutadores Inc|inc]] desvían [[paquetes lipídicos del Golgi|golgi_lip]] del [[citosol|host_cyto]].",
        "scientific": "[[Complejos IncD/CERT|inc]] captan [[vesículas de esfingomielina|golgi_lip]] en el [[citosol|host_cyto]]."
      }
    },
    "chla.ch0.s2.03": {
      "en": {
        "pop": "Fusing [[Golgi lipids|golgi_lip]] feeds both the [[inclusion wall|inclusion]] and bacterial membranes.",
        "blueprint": "Delivered [[Golgi lipids|golgi_lip]] supply membrane stock to the [[inclusion|inclusion]] and daughters.",
        "scientific": "Host [[sphingolipids and cholesterol|golgi_lip]] enlarge the [[inclusion|inclusion]] and RB bilayers."
      },
      "es": {
        "pop": "La fusión de [[lípidos del Golgi|golgi_lip]] nutre la [[inclusión|inclusion]] y las membranas bacterianas.",
        "blueprint": "Los [[lípidos del Golgi|golgi_lip]] abastecen de bicapa a la [[inclusión|inclusion]] y a las células hijas.",
        "scientific": "[[Esfingolípidos y colesterol|golgi_lip]] amplían la [[inclusión|inclusion]] y las bicapas bacterianas."
      }
    },
    "chla.ch1.s0.01": {
      "en": {
        "pop": "Infection begins with the 300 nm [[Elementary Body|eb_om]], Chlamydia's extracellular form.",
        "blueprint": "Transmission launches as a 300 nm [[Elementary Body capsule|eb_om]] built for transit.",
        "scientific": "Extracellular transmission relies on the ~300 nm infectious [[Elementary Body (EB)|eb_om]]."
      },
      "es": {
        "pop": "La infección inicia con el [[cuerpo elemental|eb_om]] de 300 nm, su forma extracelular.",
        "blueprint": "La transmisión arranca con la [[cápsula EB|eb_om]] de 300 nm optimizada para el tránsito.",
        "scientific": "El contagio extracelular depende del [[cuerpo elemental (EB)|eb_om]] infeccioso de ~300 nm."
      }
    },
    "chla.ch1.s0.02": {
      "en": {
        "pop": "It splits jobs in two: an armored [[EB courier van|eb_om]] outside and an indoor [[RB workshop|rb_om]] inside.",
        "blueprint": "Dual-mode architecture separates hardened [[EB transit|eb_om]] from high-throughput [[RB build|rb_om]].",
        "scientific": "Biphasic specialization uncouples osmotically resistant [[EB dispersal|eb_om]] from [[RB division|rb_om]]."
      },
      "es": {
        "pop": "Divide tareas en dos: un [[furgón blindado EB|eb_om]] por fuera y un [[taller interior RB|rb_om]] por dentro.",
        "blueprint": "Su arquitectura dual separa el [[modo blindado EB|eb_om]] del [[modo productivo RB|rb_om]].",
        "scientific": "La especialización bifásica desacopla la [[dispersión del EB|eb_om]] de la [[replicación del RB|rb_om]]."
      }
    },
    "chla.ch1.s0.03": {
      "en": {
        "pop": "Disulfide bonds cross-link [[MOMP porins|momp]] and OmcB into a rigid spore-like shell.",
        "blueprint": "Covalent S-S welds lock [[MOMP barrels|momp]] with Cys-rich OmcA/OmcB into outer armor.",
        "scientific": "Periplasmic OmcA/OmcB and [[MOMP|momp]] form a disulfide-crosslinked outer-membrane complex."
      },
      "es": {
        "pop": "Puentes disulfuro entrelazan [[porinas MOMP|momp]] y OmcB en una coraza tipo espora.",
        "blueprint": "Soldaduras disulfuro fijan [[barriles MOMP|momp]] con OmcA/OmcB en un blindaje rígido.",
        "scientific": "OmcA/OmcB periplásmicas y [[MOMP|momp]] crean una red externa reticulada por disulfuros."
      }
    },
    "chla.ch1.s1.01": {
      "en": {
        "pop": "Inside the [[EB shell|eb_om]], histone-like Hc1 clamps the [[1.04 Mbp DNA|eb_dna]] into a tight core.",
        "blueprint": "Inside the [[EB hull|eb_om]], Hc1/Hc2 clamps compress the [[1.04 Mbp genome|eb_dna]] into cold storage.",
        "scientific": "Within the [[EB|eb_om]], histone H1-like Hc1/Hc2 condense the [[1,042,519 bp dsDNA|eb_dna]] core."
      },
      "es": {
        "pop": "Dentro de la [[cubierta del EB|eb_om]], Hc1 comprime el [[ADN de 1,04 Mpb|eb_dna]] en un núcleo denso.",
        "blueprint": "Dentro del [[casco EB|eb_om]], mordazas Hc1/Hc2 comprimen el [[genoma de 1,04 Mpb|eb_dna]].",
        "scientific": "En el [[EB|eb_om]], las proteínas tipo histona Hc1/Hc2 condensan el [[ADNbc de 1,04 Mpb|eb_dna]]."
      }
    },
    "chla.ch1.s1.02": {
      "en": {
        "pop": "Locked in that crystal-dense state, [[EB chromatin|eb_dna]] pauses transcription outside hosts.",
        "blueprint": "Crystalline packing puts the [[EB source loop|eb_dna]] into low-power transcriptional standby.",
        "scientific": "Cholesteric liquid-crystalline [[nucleoid compaction|eb_dna]] silences bulk transcription."
      },
      "es": {
        "pop": "En ese estado cristalino denso, la [[cromatina del EB|eb_dna]] pausa toda transcripción fuera.",
        "blueprint": "El empaquetado cristalino deja el [[código del EB|eb_dna]] en reposo transcripcional.",
        "scientific": "La compactación líquido-cristalina del [[nucleoide EB|eb_dna]] silencia la transcripción."
      }
    },
    "chla.ch1.s1.03": {
      "en": {
        "pop": "Trimeric [[MOMP beta-barrels|momp]] stay disulfide-sealed until entry reduces their bonds.",
        "blueprint": "Oxidized [[MOMP porin gates|momp]] remain throttled shut until intracellular reduction opens them.",
        "scientific": "Oxidized Cys residues gate trimeric 40 kDa [[MOMP porins|momp]] until host entry reduces S-S bonds."
      },
      "es": {
        "pop": "Los [[barriles beta MOMP|momp]] triméricos siguen sellados hasta que la entrada los reduce.",
        "blueprint": "Las [[compuertas porina MOMP|momp]] oxidadas siguen cerradas hasta reducirse al entrar.",
        "scientific": "Cisteínas oxidadas cierran las [[porinas MOMP|momp]] de 40 kDa hasta su reducción interna."
      }
    },
    "chla.ch1.s2.01": {
      "en": {
        "pop": "One pole of the [[Elementary Body|eb_om]] bristles with [[Type III Secretion needles|t3ss]].",
        "blueprint": "One hemisphere of the [[EB hull|eb_om]] mounts pre-loaded [[T3SS injectisome needles|t3ss]].",
        "scientific": "Cryo-ET of the [[EB pole|eb_om]] resolves a polarized patch of ~10-20 [[T3SS injectisomes|t3ss]]."
      },
      "es": {
        "pop": "Un polo del [[cuerpo elemental|eb_om]] se eriza con [[agujas de secreción tipo III|t3ss]].",
        "blueprint": "Un hemisferio del [[casco EB|eb_om]] monta [[inyectisomas T3SS|t3ss]] precargados.",
        "scientific": "La crio-ET del [[polo del EB|eb_om]] resuelve un parche polar de ~10-20 [[inyectisomas T3SS|t3ss]]."
      }
    },
    "chla.ch1.s2.02": {
      "en": {
        "pop": "On contact, hollow [[T3SS syringes|t3ss]] fire [[TarP effectors|tarP]] into [[host cytosol|host_cyto]].",
        "blueprint": "Membrane contact triggers [[T3SS injectors|t3ss]] to translocate [[TarP payloads|tarP]] into [[cytosol|host_cyto]].",
        "scientific": "CopB/CopD translocons tip [[T3SS needles|t3ss]] to inject [[TarP|tarP]] into [[host cytoplasm|host_cyto]]."
      },
      "es": {
        "pop": "Al contacto, las [[jeringas T3SS|t3ss]] inyectan [[efectores TarP|tarP]] al [[citosol huésped|host_cyto]].",
        "blueprint": "El contacto dispara [[inyectores T3SS|t3ss]] que envían [[cargas TarP|tarP]] al [[citosol|host_cyto]].",
        "scientific": "Translocones CopB/CopD en las [[agujas T3SS|t3ss]] inyectan [[TarP|tarP]] al [[citosol|host_cyto]]."
      }
    },
    "chla.ch1.s2.03": {
      "en": {
        "pop": "Injected [[TarP|tarP]] bundles host actin to pull the bacterium into its new [[inclusion|inclusion]].",
        "blueprint": "Translocated [[TarP|tarP]] recruits host actin cables to engulf the cell into an [[inclusion|inclusion]].",
        "scientific": "WH2-domain [[TarP|tarP]] and Arp2/3 nucleate cortical F-actin, forming the nascent [[inclusion|inclusion]]."
      },
      "es": {
        "pop": "[[TarP|tarP]] agrupa actina del huésped para engullir la bacteria en su nueva [[inclusión|inclusion]].",
        "blueprint": "[[TarP|tarP]] recluta cables de actina para internalizar la bacteria en su [[inclusión|inclusion]].",
        "scientific": "Dominios WH2 de [[TarP|tarP]] y Arp2/3 nuclean actina F, creando la [[inclusión|inclusion]] naciente."
      }
    },
    "chla.ch2.s0.01": {
      "en": {
        "pop": "Within hours inside the [[inclusion|inclusion]], disulfide cross-links break and the cell swells.",
        "blueprint": "Inside the [[inclusion bay|inclusion]], disulfide locks release and the hull expands threefold.",
        "scientific": "Within 2-6 h inside the [[inclusion|inclusion]], OmcB/MOMP disulfide reduction triggers swelling."
      },
      "es": {
        "pop": "En pocas horas dentro de la [[inclusión|inclusion]], se rompen los disulfuros y la célula se hincha.",
        "blueprint": "Dentro de la [[bahía de inclusión|inclusion]], ceden los cierres disulfuro y el casco se expande.",
        "scientific": "Tras 2-6 h en la [[inclusión|inclusion]], la reducción de disulfuros inicia la descondensación."
      }
    },
    "chla.ch2.s0.02": {
      "en": {
        "pop": "It becomes a 1,000 nm [[Reticulate Body|rb_om]] bounded by outer and [[inner membranes|rb_im]].",
        "blueprint": "The chassis transitions into a 1,000 nm [[Reticulate Body|rb_om]] with dual [[bilayer walls|rb_im]].",
        "scientific": "Differentiation yields an osmotically fragile ~0.8-1.0 um [[RB|rb_om]] with an [[inner membrane|rb_im]]."
      },
      "es": {
        "pop": "Se transforma en un [[cuerpo reticulado|rb_om]] de 1.000 nm con [[membrana interna|rb_im]] y externa.",
        "blueprint": "El chasis pasa al modo [[cuerpo reticulado|rb_om]] de 1.000 nm con [[doble bicapa|rb_im]].",
        "scientific": "Surge un [[cuerpo reticulado (RB)|rb_om]] (~0,8-1,0 um) con [[membrana interna|rb_im]] activa."
      }
    },
    "chla.ch2.s0.03": {
      "en": {
        "pop": "Hc1 releases the [[relaxed chromosome|rb_dna]] so genes switch on at full speed.",
        "blueprint": "IspE-made MEP ejects Hc1 clamps, unlocking the [[RB genome|rb_dna]] for full read/write.",
        "scientific": "IspE-synthesized MEP dissociates Hc1 from [[RB dsDNA|rb_dna]], restoring euchromatic transcription."
      },
      "es": {
        "pop": "Hc1 suelta el [[cromosoma relajado|rb_dna]] para activar los genes a máxima velocidad.",
        "blueprint": "El metabolito MEP libera las mordazas Hc1 y abre el [[genoma RB|rb_dna]] a lectura total.",
        "scientific": "El metabolito MEP disocia Hc1 del [[ADNbc del RB|rb_dna]], reactivando la transcripción."
      }
    },
    "chla.ch2.s1.01": {
      "en": {
        "pop": "Instead of a full peptidoglycan wall, Chlamydia builds only a transient [[septal ring|septum]].",
        "blueprint": "Solving the Chlamydial anomaly: murein is restricted to a temporary [[division ring|septum]].",
        "scientific": "Resolving the Chlamydial anomaly, D-Ala-D-Ala labeling proved murein forms only a [[septal ring|septum]]."
      },
      "es": {
        "pop": "En lugar de pared completa, Chlamydia solo ensambla un [[anillo septal|septum]] transitorio.",
        "blueprint": "Anomalía clamidial resuelta: limita el peptidoglicano a un [[aro de fisión|septum]] temporal.",
        "scientific": "Marcaje con D-Ala-D-Ala demostró que su mureína forma solo un [[anillo septal|septum]] efímero."
      }
    },
    "chla.ch2.s1.02": {
      "en": {
        "pop": "This narrow [[peptidoglycan belt|septum]] forms solely at the division plane between membranes.",
        "blueprint": "PBP2 and PBP3 synthesize this narrow [[murein collar|septum]] exclusively at the pinch plane.",
        "scientific": "Periplasmic PBP2/PBP3 transpeptidases cross-link a transient [[peptidoglycan hoop|septum]]."
      },
      "es": {
        "pop": "Este estrecho [[cinturón de peptidoglicano|septum]] surge solo en el plano de división celular.",
        "blueprint": "PBP2 y PBP3 sintetizan este estrecho [[collar de mureína|septum]] solo en el plano de corte.",
        "scientific": "Transpeptidasas periplásmicas PBP2/PBP3 reticulan un [[aro de peptidoglicano|septum]] septal."
      }
    },
    "chla.ch2.s1.03": {
      "en": {
        "pop": "Once two daughter [[Reticulate Bodies|rb_om]] pinch apart, enzymes dismantle the [[ring|septum]].",
        "blueprint": "After daughter [[RB hulls|rb_om]] separate, amidase enzymes recycle the [[septal collar|septum]].",
        "scientific": "Post-scission of [[RB daughters|rb_om]], AmiA amidase cleaves the [[peptidoglycan ring|septum]] to hide PAMPs."
      },
      "es": {
        "pop": "Cuando dos [[cuerpos reticulados|rb_om]] hijos se separan, enzimas desmontan el [[anillo|septum]].",
        "blueprint": "Al separarse los [[cascos hijos RB|rb_om]], amidasas reciclan el [[collar septal|septum]].",
        "scientific": "Tras escindir los [[RB hijos|rb_om]], la amidasa AmiA degrada el [[anillo septal|septum]] para evadir NOD1."
      }
    },
    "chla.ch2.s2.01": {
      "en": {
        "pop": "Lacking FtsZ, Chlamydia steers division with [[MreB filaments|mreb]] under the [[inner membrane|rb_im]].",
        "blueprint": "With zero FtsZ, actin-like [[MreB rails|mreb]] beneath the [[inner hull|rb_im]] guide constriction.",
        "scientific": "Lacking ftsZ, RodZ-tethered [[MreB protofilaments|mreb]] on the [[inner membrane|rb_im]] drive division."
      },
      "es": {
        "pop": "Sin FtsZ, dirige su fisión con [[filamentos MreB|mreb]] bajo la [[membrana interna|rb_im]].",
        "blueprint": "Carente de FtsZ, [[rieles MreB|mreb]] bajo la [[bicapa interna|rb_im]] dirigen la constricción.",
        "scientific": "Sin gen ftsZ, [[protofilamentos MreB|mreb]] unidos a RodZ en la [[membrana interna|rb_im]] guían el corte."
      }
    },
    "chla.ch2.s2.02": {
      "en": {
        "pop": "Polymerizing [[MreB arcs|mreb]] position the [[septal synthesis complex|septum]] around the waist.",
        "blueprint": "ATP-polymerized [[MreB tracks|mreb]] align the [[murein synthases|septum]] along the division neck.",
        "scientific": "Curved [[MreB polymers|mreb]] scaffold FtsK, PBP2 and PBP3 to constrict the [[septal ring|septum]]."
      },
      "es": {
        "pop": "Los [[arcos de MreB|mreb]] posicionan el [[complejo del anillo septal|septum]] en la cintura.",
        "blueprint": "Pistas polimerizadas de [[MreB|mreb]] alinean las [[sintasas septales|septum]] en el cuello.",
        "scientific": "Polímeros curvos de [[MreB|mreb]] reclutan FtsK, PBP2 y PBP3 sobre el [[anillo septal|septum]]."
      }
    },
    "chla.ch2.s2.03": {
      "en": {
        "pop": "Every two to three hours, [[MreB-driven fission|mreb]] doubles the [[RB population|rb_om]].",
        "blueprint": "Every 2-3 hours, [[MreB constriction|mreb]] doubles active [[RB nodes|rb_om]] inside the bay.",
        "scientific": "Polarized budding/fission via [[MreB|mreb]] yields ~8-10 doublings (~500-1,000 [[RBs|rb_om]])."
      },
      "es": {
        "pop": "Cada dos o tres horas, la [[fisión guiada por MreB|mreb]] duplica la [[población de RB|rb_om]].",
        "blueprint": "Cada 2-3 horas, la [[constricción por MreB|mreb]] duplica los [[nodos RB|rb_om]] activos.",
        "scientific": "La fisión mediada por [[MreB|mreb]] logra ~8-10 duplicaciones (~500-1.000 [[RB|rb_om]])."
      }
    },
    "chla.ch3.s0.01": {
      "en": {
        "pop": "Why was Chlamydia long mistaken for an energy-less virus? Look at [[Npt1|npt1]] in its membrane.",
        "blueprint": "Why was Chlamydia misclassified as a virus? Inspect the [[Npt1 power tap|npt1]] in its hull.",
        "scientific": "Moulder's 1960s 'energy parasite' hypothesis centers on inner-membrane [[Npt1Ct|npt1]]."
      },
      "es": {
        "pop": "¿Por qué se confundió a Chlamydia con un virus sin energía? Mira [[Npt1|npt1]] en su membrana.",
        "blueprint": "¿Por qué se creyó que era un virus? Inspecciona la [[toma eléctrica Npt1|npt1]] en su casco.",
        "scientific": "La hipótesis clásica de «parásito energético» se explica por la translocasa [[Npt1Ct|npt1]]."
      }
    },
    "chla.ch3.s0.02": {
      "en": {
        "pop": "[[Npt1 antiporters|npt1]] act like a battery counter, trading spent ADP out for fresh host ATP in.",
        "blueprint": "Twelve-helix [[Npt1 antiporters|npt1]] run 1:1 counter-exchange: host ATP in, spent ADP out.",
        "scientific": "Rocker-switch [[Npt1 ATP/ADP translocases|npt1]] catalyze electroneutral ATP4- / ADP3- + Pi antiport."
      },
      "es": {
        "pop": "Los [[antiporters Npt1|npt1]] cambian pilas gastadas de ADP por pilas de ATP recién cargadas.",
        "blueprint": "Los [[antiporters Npt1|npt1]] de 12 hélices operan intercambio 1:1: entra ATP, sale ADP.",
        "scientific": "Las [[translocasas Npt1|npt1]] catalizan antiporte 1:1 de ATP citosólico por ADP + Pi bacteriano."
      }
    },
    "chla.ch3.s0.03": {
      "en": {
        "pop": "Porous [[inclusion pores|inclusion]] let host ATP diffuse in so [[Npt1|npt1]] can tap it.",
        "blueprint": "Small-solute permeability across the [[inclusion wall|inclusion]] feeds host ATP to [[Npt1|npt1]].",
        "scientific": "Passive diffusion of <520 Da metabolites across the [[inclusion|inclusion]] supplies ATP to [[Npt1|npt1]]."
      },
      "es": {
        "pop": "Poros en la [[membrana de inclusión|inclusion]] dejan pasar ATP para que [[Npt1|npt1]] lo capte.",
        "blueprint": "La permeabilidad de la [[pared de inclusión|inclusion]] entrega ATP del huésped a [[Npt1|npt1]].",
        "scientific": "El paso de solutos (<520 Da) por la [[inclusión|inclusion]] abastece de ATP a [[Npt1|npt1]]."
      }
    },
    "chla.ch3.s1.01": {
      "en": {
        "pop": "Beside [[Npt1|npt1]] sits a second transporter, [[Npt2|npt2]], in the [[RB inner membrane|rb_im]].",
        "blueprint": "Paired with [[Npt1|npt1]] is a second nucleotide port, [[Npt2|npt2]], in the [[RB inner hull|rb_im]].",
        "scientific": "Alongside [[Npt1Ct|npt1]], paralogous [[Npt2Ct|npt2]] spans the [[RB inner membrane|rb_im]]."
      },
      "es": {
        "pop": "Junto a [[Npt1|npt1]] opera un segundo transportador, [[Npt2|npt2]], en la [[membrana interna|rb_im]].",
        "blueprint": "En paralelo a [[Npt1|npt1]] opera el puerto [[Npt2|npt2]] en la [[bicapa interna del RB|rb_im]].",
        "scientific": "Junto a [[Npt1Ct|npt1]], el parálogo [[Npt2Ct|npt2]] atraviesa la [[membrana interna del RB|rb_im]]."
      }
    },
    "chla.ch3.s1.02": {
      "en": {
        "pop": "Coupled to protons, [[Npt2|npt2]] imports host GTP, CTP and UTP intact for RNA synthesis.",
        "blueprint": "Proton-coupled [[Npt2 symporters|npt2]] pull intact GTP, CTP and UTP in for RNA builds.",
        "scientific": "H+-coupled [[Npt2Ct symport|npt2]] imports host GTP, UTP, CTP and ATP for net NTP pool growth."
      },
      "es": {
        "pop": "Acoplado a protones, [[Npt2|npt2]] importa GTP, CTP y UTP intactos para sintetizar ARN.",
        "blueprint": "[[Simportadores Npt2|npt2]] acoplados a H+ ingresan GTP, CTP y UTP listos para transcribir.",
        "scientific": "El [[simporte H+/NTP de Npt2Ct|npt2]] importa GTP, UTP, CTP y ATP expandiendo el acervo."
      }
    },
    "chla.ch3.s1.03": {
      "en": {
        "pop": "Together [[Npt1|npt1]] and [[Npt2|npt2]] spare Chlamydia from making purines or pyrimidines.",
        "blueprint": "Pairing [[Npt1 power swap|npt1]] with [[Npt2 NTP intake|npt2]] deletes de novo base synthesis.",
        "scientific": "Complementary [[Npt1|npt1]] antiport and [[Npt2|npt2]] symport compensate purine/pyrimidine auxotrophy."
      },
      "es": {
        "pop": "Juntos, [[Npt1|npt1]] y [[Npt2|npt2]] ahorran a Chlamydia fabricar purinas o pirimidinas.",
        "blueprint": "Combinar [[Npt1|npt1]] con [[Npt2|npt2]] permite suprimir toda síntesis de bases de novo.",
        "scientific": "El par [[Npt1|npt1]] y [[Npt2|npt2]] suple su auxotrofía para purinas y pirimidinas."
      }
    },
    "chla.ch3.s2.01": {
      "en": {
        "pop": "Floating in the [[inclusion lumen|inclusion]] are branched [[glycogen granules|glycogen]] stained by iodine.",
        "blueprint": "Stockpiled inside the [[inclusion lumen|inclusion]] sit high-density [[glycogen reserves|glycogen]].",
        "scientific": "Inside the C. trachomatis [[inclusion|inclusion]] accumulate lumenal [[alpha-1,4/1,6 glycogen polymers|glycogen]]."
      },
      "es": {
        "pop": "En el [[lumen de la inclusión|inclusion]] flotan [[gránulos de glucógeno|glycogen]] teñibles con yodo.",
        "blueprint": "En el [[lumen de la inclusión|inclusion]] se almacenan [[reservas densas de glucógeno|glycogen]].",
        "scientific": "Dentro de la [[inclusión|inclusion]] de C. trachomatis se acumula [[glucógeno alfa-1,4/1,6|glycogen]] luminal."
      }
    },
    "chla.ch3.s2.02": {
      "en": {
        "pop": "Chlamydia still keeps glycolytic enzymes and converts imported glucose-6-P into [[glycogen|glycogen]].",
        "blueprint": "UhpC imports host glucose-6-P, feeding local glycolysis and GlgA [[glycogen buffers|glycogen]].",
        "scientific": "UhpC-imported glucose-6-phosphate fuels Embden-Meyerhof-Parnas enzymes and [[glycogen|glycogen]] synthesis."
      },
      "es": {
        "pop": "Chlamydia conserva enzimas glucolíticas y convierte glucosa-6-P importada en [[glucógeno|glycogen]].",
        "blueprint": "UhpC importa glucosa-6-P hacia la glucólisis local y el [[almacén de glucógeno|glycogen]].",
        "scientific": "La glucosa-6-fosfato captada vía UhpC nutre la glucólisis y la síntesis de [[glucógeno|glycogen]]."
      }
    },
    "chla.ch3.s2.03": {
      "en": {
        "pop": "Late in the cycle, stored [[glycogen|glycogen]] fuels re-condensation when host ATP drops.",
        "blueprint": "During late-stage host depletion, [[glycogen capacitors|glycogen]] power EB repackaging.",
        "scientific": "GlgP phosphorolysis of lumenal [[glycogen|glycogen]] supplies ATP as RBs redifferentiate into EBs."
      },
      "es": {
        "pop": "Al final del ciclo, el [[glucógeno|glycogen]] acumulado impulsa la recondensación celular.",
        "blueprint": "Al caer el ATP huésped en fase tardía, la [[reserva de glucógeno|glycogen]] sostiene el cierre.",
        "scientific": "La fosforólisis del [[glucógeno|glycogen]] aporta energía durante la conversión final RB -> EB."
      }
    },
    "chla.ch4.s0.01": {
      "en": {
        "pop": "Inside the [[Reticulate Body|rb_om]], ~895 genes sit on a circular [[1.04 Mbp dsDNA genome|rb_dna]].",
        "blueprint": "Each [[RB node|rb_om]] houses ~895 gene modules on a [[1.04 Mbp circular dsDNA loop|rb_dna]].",
        "scientific": "The [[RB|rb_om]] maintains a [[1,042,519 bp circular chromosome|rb_dna]] (~41% GC, ~895 ORFs)."
      },
      "es": {
        "pop": "Dentro del [[cuerpo reticulado|rb_om]], ~895 genes residen en el [[ADNbc de 1,04 Mpb|rb_dna]].",
        "blueprint": "Cada [[nodo RB|rb_om]] aloja ~895 módulos en un [[bucle de ADNbc de 1,04 Mpb|rb_dna]].",
        "scientific": "El [[RB|rb_om]] porta un [[cromosoma circular de 1.042.519 pb|rb_dna]] (~41% GC, ~895 ORF)."
      }
    },
    "chla.ch4.s0.02": {
      "en": {
        "pop": "Bacterial [[RNA polymerase|rnap]] reads early, mid and late gene cascades into [[mRNA|mrna]].",
        "blueprint": "Three sigma-factor timers step [[RNAP readers|rnap]] through staged [[mRNA|mrna]] cascades.",
        "scientific": "Sigma66, sigma54 and sigma28 program [[RNAP|rnap]] across temporal [[mRNA|mrna]] regulons."
      },
      "es": {
        "pop": "La [[ARN polimerasa|rnap]] bacteriana transcribe cascadas génicas en [[ARNm|mrna]].",
        "blueprint": "Tres factores sigma escalonan a la [[ARN pol|rnap]] en cascadas temporales de [[ARNm|mrna]].",
        "scientific": "Los factores sigma66, sigma54 y sigma28 guían la [[ARN polimerasa|rnap]] para emitir [[ARNm|mrna]]."
      }
    },
    "chla.ch4.s0.03": {
      "en": {
        "pop": "Late genes switch on Hc1 and OmcB to convert dividing [[RBs|rb_om]] back into [[EBs|eb_om]].",
        "blueprint": "EUO derepression triggers Hc1 and OmcB expression, converting [[RB units|rb_om]] into [[EBs|eb_om]].",
        "scientific": "Relief of EUO repression activates late hctA/omcB operons, driving [[RB|rb_om]]-to-[[EB|eb_om]] transition."
      },
      "es": {
        "pop": "Los genes tardíos activan Hc1 y OmcB para reconvertir [[RB|rb_om]] en nuevos [[EB|eb_om]].",
        "blueprint": "Al ceder el represor EUO se expresan Hc1 y OmcB, convirtiendo [[RB|rb_om]] en [[EB|eb_om]].",
        "scientific": "La caída del represor EUO activa hctA/omcB e impulsa la transición [[RB|rb_om]] -> [[EB|eb_om]]."
      }
    },
    "chla.ch4.s1.01": {
      "en": {
        "pop": "Hundreds of bacterial [[70S ribosomes|ribosome]] translate [[chlamydial mRNA|mrna]] into proteins.",
        "blueprint": "Dense banks of onboard [[70S compilers|ribosome]] translate [[chlamydial mRNA|mrna]] locally.",
        "scientific": "Abundant prokaryotic [[70S polysomes|ribosome]] translate nascent [[chlamydial mRNA|mrna]] in the RB."
      },
      "es": {
        "pop": "Cientos de [[ribosomas 70S|ribosome]] bacterianos traducen el [[ARNm clamidial|mrna]] en proteínas.",
        "blueprint": "Bancos densos de [[compiladores 70S|ribosome]] traducen localmente el [[ARNm clamidial|mrna]].",
        "scientific": "Polisomas procariotas de [[ribosomas 70S|ribosome]] traducen el [[ARNm clamidial|mrna]] en el RB."
      }
    },
    "chla.ch4.s1.02": {
      "en": {
        "pop": "Stolen host ATP powers Chlamydia's own [[70S ribosomes|ribosome]] rather than host 80S ones.",
        "blueprint": "Imported host ATP powers Chlamydia's own [[70S compilers|ribosome]], never host 80S units.",
        "scientific": "Host NTPs energize endogenous [[70S translation|ribosome]], proving C. trachomatis is a true cell."
      },
      "es": {
        "pop": "El ATP robado alimenta sus propios [[ribosomas 70S|ribosome]] y no los 80S del huésped.",
        "blueprint": "El ATP importado mueve sus propios [[compiladores 70S|ribosome]], jamás los 80S del huésped.",
        "scientific": "Los NTP importados impulsan [[traducción 70S|ribosome]] propia, definiéndola como célula real."
      }
    },
    "chla.ch4.s1.03": {
      "en": {
        "pop": "Azithromycin and doxycycline cure Chlamydia by halting these [[70S ribosomes|ribosome]].",
        "blueprint": "First-line macrolides and tetracyclines shut down these bacterial [[70S compilers|ribosome]].",
        "scientific": "Clinical clearance relies on azithromycin (50S) or doxycycline (30S) targeting [[70S ribosomes|ribosome]]."
      },
      "es": {
        "pop": "Azitromicina y doxiciclina curan la infección frenando estos [[ribosomas 70S|ribosome]].",
        "blueprint": "Macrólidos y tetraciclinas de primera línea detienen estos [[compiladores 70S|ribosome]].",
        "scientific": "La terapia clínica con azitromicina o doxiciclina inhibe sus [[ribosomas 70S|ribosome]]."
      }
    },
    "chla.ch4.s2.01": {
      "en": {
        "pop": "After ~48 hours, hundreds of [[Reticulate Bodies|rb_om]] condense back into armored [[EBs|eb_om]].",
        "blueprint": "At ~48 hours, asynchronous condensation converts [[RB factories|rb_om]] into armored [[EBs|eb_om]].",
        "scientific": "By 48-72 h post-infection, ~500-1,000 [[RBs|rb_om]] redifferentiate into disulfide-locked [[EBs|eb_om]]."
      },
      "es": {
        "pop": "Tras ~48 horas, cientos de [[cuerpos reticulados|rb_om]] se condensan en [[EB blindados|eb_om]].",
        "blueprint": "A las ~48 horas, las [[unidades RB|rb_om]] se reempaquetan en [[cápsulas EB|eb_om]] blindadas.",
        "scientific": "A las 48-72 h postinfección, ~500-1.000 [[RB|rb_om]] se rediferencian en [[EB|eb_om]] infecciosos."
      }
    },
    "chla.ch4.s2.02": {
      "en": {
        "pop": "The mature [[inclusion|inclusion]] extrudes or lyses to release infectious [[EBs|eb_om]] to neighbors.",
        "blueprint": "Exit executes via whole-[[inclusion|inclusion]] extrusion or host lysis, deploying [[EB units|eb_om]].",
        "scientific": "Actomyosin-driven [[inclusion|inclusion]] extrusion or protease lysis releases [[EBs|eb_om]] extracellularly."
      },
      "es": {
        "pop": "La [[inclusión|inclusion]] madura se extruye o lisa liberando [[EB infecciosos|eb_om]] a células vecinas.",
        "blueprint": "La salida ocurre por extrusión de la [[inclusión|inclusion]] o lisis, desplegando [[unidades EB|eb_om]].",
        "scientific": "La extrusión actomiosínica de la [[inclusión|inclusion]] o la lisis celular libera [[EB|eb_om]]."
      }
    },
    "chla.ch4.s2.03": {
      "en": {
        "pop": "Explore any tag up close, or continue to Rickettsia to meet Mitochondria's living cousin.",
        "blueprint": "Inspect any subsystem tag, or advance to Rickettsia to compare cytosolic respiration.",
        "scientific": "Select any molecular tag, or proceed to Rickettsia prowazekii and mitochondrial endosymbiosis."
      },
      "es": {
        "pop": "Explora cualquier etiqueta o sigue a Rickettsia, pariente vivo de las mitocondrias.",
        "blueprint": "Inspecciona cualquier módulo o avanza a Rickettsia para comparar la respiración citosólica.",
        "scientific": "Selecciona cualquier etiqueta o pasa a Rickettsia prowazekii y la endosimbiosis mitocondrial."
      }
    }
  },
  "real-rickettsia": {
    "rick.ch0.s0.01": {
      "en": {
        "pop": "Meet Rickettsia prowazekii, the alphaproteobacterium behind epidemic typhus.",
        "blueprint": "System node Rickettsia prowazekii: a cytosolic alphaproteobacterium causing epidemic typhus.",
        "scientific": "Rickettsia prowazekii (order Rickettsiales) is the louse-borne agent of epidemic typhus."
      },
      "es": {
        "pop": "Conoce a Rickettsia prowazekii, la alfaproteobacteria causante del tifus epidémico.",
        "blueprint": "Nodo Rickettsia prowazekii: una alfaproteobacteria citosólica causante del tifus epidémico.",
        "scientific": "Rickettsia prowazekii (orden Rickettsiales) es el agente bacteriano del tifus epidémico."
      }
    },
    "rick.ch0.s0.02": {
      "en": {
        "pop": "Unlike Chlamydia inside a sac, Rickettsia swims naked right in the eukaryotic cytosol.",
        "blueprint": "Unlike vacuole-housed Chlamydia, Rickettsia operates unshielded inside host cytoplasm.",
        "scientific": "Unlike intravacuolar Chlamydia, Rickettsia replicates directly within host nucleocytosol."
      },
      "es": {
        "pop": "A diferencia de Chlamydia en su saco, Rickettsia vive libre en pleno citosol eucariota.",
        "blueprint": "Frente a Chlamydia en su vacuola, Rickettsia opera directamente expuesta en el citosol.",
        "scientific": "A diferencia de Chlamydia intravacuolar, Rickettsia replica libre en el citosol eucariota."
      }
    },
    "rick.ch0.s0.03": {
      "en": {
        "pop": "Beside it sits a [[host mitochondrion|host_mito]], its distant evolutionary cousin.",
        "blueprint": "Adjacent sits a [[host mitochondrion|host_mito]], sharing the same ancestral power-plant design.",
        "scientific": "Nearby lies a [[host mitochondrion|host_mito]], sharing deep alphaproteobacterial ancestry."
      },
      "es": {
        "pop": "A su lado reposa una [[mitocondria del huésped|host_mito]], su prima evolutiva lejana.",
        "blueprint": "Al lado opera una [[mitocondria del huésped|host_mito]], heredera del mismo diseño ancestral.",
        "scientific": "Junto a ella yace una [[mitocondria del huésped|host_mito]], de ancestro alfaproteobacteriano."
      }
    },
    "rick.ch0.s1.01": {
      "en": {
        "pop": "After entering across the [[host membrane|host_mem]], it refuses to stay trapped in a vacuole.",
        "blueprint": "Immediately after crossing the [[host perimeter|host_mem]], it aborts vacuolar containment.",
        "scientific": "Following induced phagocytosis across the [[host membrane|host_mem]], it lyses the nascent vacuole."
      },
      "es": {
        "pop": "Tras cruzar la [[membrana del huésped|host_mem]], rehúsa quedar atrapada en una vacuola.",
        "blueprint": "Apenas cruza el [[perímetro del huésped|host_mem]], aborta el confinamiento vacuolar.",
        "scientific": "Tras la fagocitosis inducida por la [[membrana del huésped|host_mem]], rompe la vacuola naciente."
      }
    },
    "rick.ch0.s1.02": {
      "en": {
        "pop": "Secreted [[phospholipase D (Pld) and TlyC|pld]] chew open the phagosome lipid bilayer.",
        "blueprint": "Membrane-cutting [[Pld and TlyC enzymes|pld]] breach the phagosomal bilayer wall.",
        "scientific": "Secreted [[phospholipase D (Pld) and hemolysin TlyC|pld]] hydrolyze phagosomal phospholipids."
      },
      "es": {
        "pop": "La [[fosfolipasa D (Pld) y TlyC|pld]] secretadas perforan la bicapa lipídica del fagosoma.",
        "blueprint": "Las enzimas de corte [[Pld y TlyC|pld]] abren brecha en la bicapa del fagosoma.",
        "scientific": "La [[fosfolipasa D (Pld) y hemolisina TlyC|pld]] hidrolizan los fosfolípidos fagosómicos."
      }
    },
    "rick.ch0.s1.03": {
      "en": {
        "pop": "Within minutes [[Pld lysis|pld]] frees the rod into nutrient-rich cytoplasm before lysosomes arrive.",
        "blueprint": "Rapid [[Pld breach|pld]] releases the chassis into cytosol ahead of lysosomal fusion.",
        "scientific": "Fast [[Pld-mediated escape|pld]] (<15 min) pre-empts Rab7/LAMP1 phagolysosomal acidification."
      },
      "es": {
        "pop": "En minutos, la [[lisis por Pld|pld]] libera al bacilo al citoplasma antes de llegar lisosomas.",
        "blueprint": "La rápida [[ruptura por Pld|pld]] libera el chasis al citosol antes del arribo lisosomal.",
        "scientific": "El rápido [[escape vía Pld|pld]] (<15 min) evita la acidificación fagolisosomal Rab7/LAMP1."
      }
    },
    "rick.ch0.s2.01": {
      "en": {
        "pop": "Coating the exterior is a hydrated [[microcapsular slime layer|slime]] that masks surface antigens.",
        "blueprint": "An outer [[polysaccharide slime cloak|slime]] dampens host innate sensor recognition.",
        "scientific": "An electron-lucent [[microcapsular slime layer|slime]] shields outer-membrane PAMPs."
      },
      "es": {
        "pop": "Recubriendo el exterior hay una [[capa mucosa microcapsular|slime]] que oculta antígenos.",
        "blueprint": "Un [[manto mucoso externo|slime]] amortigua la detección por sensores innatos del huésped.",
        "scientific": "Una [[capa microcapsular mucoide|slime]] apantalla los PAMP de la membrana externa."
      }
    },
    "rick.ch0.s2.02": {
      "en": {
        "pop": "Beneath the [[slime|slime]], [[OmpA and OmpB autotransporters|omp]] tile a crystalline S-layer.",
        "blueprint": "Under the [[slime|slime]], beta-helical [[OmpA/OmpB arrays|omp]] form a crystalline armor lattice.",
        "scientific": "Beneath the [[slime|slime]], Sca5/[[OmpB and OmpA passenger domains|omp]] assemble a tetragonal S-layer."
      },
      "es": {
        "pop": "Bajo el [[manto mucoso|slime]], [[autotransportadores OmpA y OmpB|omp]] forman una capa S.",
        "blueprint": "Bajo el [[manto|slime]], matrices [[OmpA/OmpB|omp]] ensamblan una red cristalina protectora.",
        "scientific": "Bajo la [[capa mucosa|slime]], dominios [[OmpB y OmpA|omp]] tejen una capa S tetragonal."
      }
    },
    "rick.ch0.s2.03": {
      "en": {
        "pop": "[[OmpB|omp]] binds host Ku70 to trigger uptake, then shields the [[outer membrane|om]] inside.",
        "blueprint": "[[OmpB|omp]] engages host Ku70 for entry and blocks ubiquitylation on the [[outer hull|om]].",
        "scientific": "Methylated [[OmpB|omp]] binds host Ku70 for invasion and masks [[outer membrane|om]] from autophagy."
      },
      "es": {
        "pop": "[[OmpB|omp]] se une a Ku70 para inducir la entrada y luego blinda la [[membrana externa|om]].",
        "blueprint": "[[OmpB|omp]] acopla Ku70 al entrar y bloquea la ubiquitinación del [[casco externo|om]].",
        "scientific": "[[OmpB|omp]] metilada une Ku70 al invadir y protege la [[membrana externa|om]] de autofagia."
      }
    },
    "rick.ch1.s0.01": {
      "en": {
        "pop": "Cut open, Rickettsia shows a true Gram-negative [[outer membrane|om]] and [[inner membrane|im]].",
        "blueprint": "Cross-section reveals a dual-wall Gram-negative [[outer hull|om]] and [[inner hull|im]].",
        "scientific": "Ultrastructure shows a lipopolysaccharide [[outer membrane|om]] and phospholipid [[inner membrane|im]]."
      },
      "es": {
        "pop": "En corte, Rickettsia muestra [[membrana externa|om]] y [[membrana interna|im]] gramnegativas.",
        "blueprint": "El corte expone un doble casco gramnegativo con [[pared externa|om]] y [[pared interna|im]].",
        "scientific": "La ultraestructura revela [[membrana externa|om]] con LPS y [[membrana interna|im]] fosfolipídica."
      }
    },
    "rick.ch1.s0.02": {
      "en": {
        "pop": "Between them lies a thin [[peptidoglycan mesh|pg]] that holds its 1.1 um rod shape.",
        "blueprint": "Periplasmic [[peptidoglycan framing|pg]] maintains the 0.35 by 1.1 um coccobacillus geometry.",
        "scientific": "A periplasmic meso-DAP [[peptidoglycan sacculus|pg]] maintains its ~0.35 x 1.1 um rod morphology."
      },
      "es": {
        "pop": "Entre ambas yace una fina [[malla de peptidoglicano|pg]] que sostiene su bastón de 1,1 um.",
        "blueprint": "Un bastidor periplásmico de [[peptidoglicano|pg]] fija la geometría de 0,35 por 1,1 um.",
        "scientific": "Un sáculo periplásmico de [[peptidoglicano|pg]] sostiene su morfología cocobacilar (~0,35 x 1,1 um)."
      }
    },
    "rick.ch1.s0.03": {
      "en": {
        "pop": "Spanning both bilayers is the VirB/VirD4 [[Type IV Secretion System|t4ss]].",
        "blueprint": "Bridging both envelope hulls is the multi-ring [[Rvh Type IV Secretion conduit|t4ss]].",
        "scientific": "Trans-envelope VirB/VirD4 subunits assemble the [[Rickettsiales vir homolog (Rvh) T4SS|t4ss]]."
      },
      "es": {
        "pop": "Atravesando ambas bicapas se alza el [[sistema de secreción tipo IV|t4ss]] VirB/VirD4.",
        "blueprint": "Uniendo ambas paredes opera el conducto multianillo [[Rvh T4SS|t4ss]].",
        "scientific": "Subunidades VirB/VirD4 ensamblan a través de la envoltura el [[complejo Rvh T4SS|t4ss]]."
      }
    },
    "rick.ch1.s1.01": {
      "en": {
        "pop": "The [[Rvh T4SS machine|t4ss]] forms a gated protein conduit across the entire cell envelope.",
        "blueprint": "The [[Rvh T4SS bus|t4ss]] establishes a direct protein export channel into host cytosol.",
        "scientific": "Duplicated VirB6/VirB8/VirB9 subunits build an atypical pilus-less [[Rvh T4SS core|t4ss]]."
      },
      "es": {
        "pop": "La [[maquinaria Rvh T4SS|t4ss]] forma un conducto proteico a través de toda la envoltura.",
        "blueprint": "El [[bus Rvh T4SS|t4ss]] abre un canal directo de exportación proteica hacia el citosol.",
        "scientific": "Subunidades VirB6/VirB8/VirB9 duplicadas forman el núcleo sin pilus del [[Rvh T4SS|t4ss]]."
      }
    },
    "rick.ch1.s1.02": {
      "en": {
        "pop": "Powered by VirD4 ATPases at the [[inner membrane|im]], [[T4SS|t4ss]] exports stealth effectors.",
        "blueprint": "Hexameric VirD4 coupling motors at the [[inner hull|im]] pump effectors through [[T4SS|t4ss]].",
        "scientific": "Inner-membrane VirB4/VirB11/VirD4 ATPases at the [[IM|im]] energize [[Rvh T4SS|t4ss]] translocation."
      },
      "es": {
        "pop": "Impulsado por ATPasas VirD4 en la [[membrana interna|im]], el [[T4SS|t4ss]] exporta efectores.",
        "blueprint": "Motores hexaméricos VirD4 en la [[bicapa interna|im]] bombean efectores por el [[T4SS|t4ss]].",
        "scientific": "ATPasas VirB4/VirB11/VirD4 en la [[membrana interna|im]] impulsan el transporte [[T4SS|t4ss]]."
      }
    },
    "rick.ch1.s1.03": {
      "en": {
        "pop": "Those signals suppress host apoptosis so the infected cell stays alive as an incubator.",
        "blueprint": "Secreted effectors activate host NF-kappaB survival pathways to preserve the host chassis.",
        "scientific": "Ankyrin-repeat effectors activate host NF-kappaB, blocking cytochrome c apoptotic release."
      },
      "es": {
        "pop": "Esas señales frenan la apoptosis del huésped para mantener viva la célula incubadora.",
        "blueprint": "Los efectores activan rutas de supervivencia NF-kappaB para preservar el chasis huésped.",
        "scientific": "Efectores con repeticiones de anquirina activan NF-kappaB e inhiben la apoptosis celular."
      }
    },
    "rick.ch1.s2.01": {
      "en": {
        "pop": "In the cytosol coils a [[1.11 Mbp circular dsDNA genome|dna]] with ~834 protein-coding genes.",
        "blueprint": "Mounted in the core is a [[1.11 Mbp circular dsDNA repo|dna]] with ~834 active gene modules.",
        "scientific": "Andersson et al. (1998) sequenced its [[1,111,523 bp dsDNA genome|dna]] (~29% GC, 834 ORFs)."
      },
      "es": {
        "pop": "En el citosol se pliega un [[genoma circular de 1,11 Mpb|dna]] con ~834 genes codificantes.",
        "blueprint": "En el núcleo opera un [[repositorio circular de 1,11 Mpb|dna]] con ~834 módulos activos.",
        "scientific": "Andersson et al. (1998) secuenciaron su [[genoma de 1.111.523 pb|dna]] (~29% GC, 834 ORF)."
      }
    },
    "rick.ch1.s2.02": {
      "en": {
        "pop": "Nearly a quarter of the [[chromosome|dna]] is non-coding pseudogene wreckage caught mid-decay.",
        "blueprint": "Roughly 24% of the [[genome address space|dna]] consists of deprecated pseudogene fragments.",
        "scientific": "Unusually, ~24% of the [[chromosome|dna]] comprises neutral non-coding DNA and eroding pseudogenes."
      },
      "es": {
        "pop": "Casi un cuarto del [[cromosoma|dna]] son pseudogenes inactivos en plena reducción evolutiva.",
        "blueprint": "Cerca del 24% del [[espacio del genoma|dna]] son fragmentos obsoletos de pseudogenes.",
        "scientific": "Un notable ~24% del [[cromosoma|dna]] corresponde a ADN no codificante y pseudogenes en erosión."
      }
    },
    "rick.ch1.s2.03": {
      "en": {
        "pop": "[[RNA polymerase|rnap]] and [[70S ribosomes|ribosome]] build its proteome; doxycycline blocks [[70S|ribosome]].",
        "blueprint": "Onboard [[RNAP|rnap]] and [[70S compilers|ribosome]] build proteins; doxycycline halts [[70S|ribosome]].",
        "scientific": "Endogenous [[RNAP|rnap]] and [[70S ribosomes|ribosome]] drive expression; tetracyclines stall [[30S/70S|ribosome]]."
      },
      "es": {
        "pop": "[[ARN polimerasa|rnap]] y [[ribosomas 70S|ribosome]] crean proteínas; la doxiciclina frena [[70S|ribosome]].",
        "blueprint": "Su [[ARN pol|rnap]] y [[compiladores 70S|ribosome]] crean el proteoma; doxiciclina para [[70S|ribosome]].",
        "scientific": "[[ARN polimerasa|rnap]] y [[ribosomas 70S|ribosome]] propios traducen genes; tetraciclinas frenan [[70S|ribosome]]."
      }
    },
    "rick.ch2.s0.01": {
      "en": {
        "pop": "While host ATP is plentiful, Rickettsia runs twelve-helix [[Tlc1 translocases|tlc1]] in its [[inner membrane|im]].",
        "blueprint": "During high host-ATP phases, [[Tlc1 power ports|tlc1]] operate across the [[inner hull|im]].",
        "scientific": "Early in infection, 12-TM [[Tlc1 ATP/ADP translocases|tlc1]] span the [[inner membrane|im]]."
      },
      "es": {
        "pop": "Cuando abunda ATP huésped, usa [[translocasas Tlc1|tlc1]] en su [[membrana interna|im]].",
        "blueprint": "Con alto ATP citosólico, activa puertos [[Tlc1|tlc1]] a través de su [[bicapa interna|im]].",
        "scientific": "Al inicio de la infección, [[translocasas Tlc1|tlc1]] de 12 hélices operan en la [[membrana interna|im]]."
      }
    },
    "rick.ch2.s0.02": {
      "en": {
        "pop": "Like Chlamydia's Npt1, [[Tlc1|tlc1]] imports cytosolic host ATP one-for-one for spent bacterial ADP.",
        "blueprint": "Homologous to Npt1, [[Tlc1 antiporters|tlc1]] swap spent ADP out for charged host ATP in.",
        "scientific": "Obligate [[Tlc1 antiport|tlc1]] (Km ~100 uM) exchanges host cytosolic ATP for bacterial ADP."
      },
      "es": {
        "pop": "Como Npt1 en Chlamydia, [[Tlc1|tlc1]] importa ATP citosólico uno a uno por ADP bacteriano.",
        "blueprint": "Homólogo a Npt1, el [[antiporter Tlc1|tlc1]] cambia un ADP gastado por un ATP del huésped.",
        "scientific": "El [[antiporte obligatorio Tlc1|tlc1]] (Km ~100 uM) intercambia ATP citosólico por ADP."
      }
    },
    "rick.ch2.s0.03": {
      "en": {
        "pop": "Having eliminated glycolysis, Rickettsia relies on [[Tlc1|tlc1]] and imported glutamate or pyruvate.",
        "blueprint": "With Embden-Meyerhof glycolysis deleted, power relies on [[Tlc1|tlc1]] plus pyruvate/glutamate.",
        "scientific": "Lacking glycolytic hexokinase/PFK, R. prowazekii combines [[Tlc1|tlc1]] with TCA dicarboxylates."
      },
      "es": {
        "pop": "Tras perder la glucólisis, depende de [[Tlc1|tlc1]] y de glutamato o piruvato importados.",
        "blueprint": "Eliminada la glucólisis, su energía depende de [[Tlc1|tlc1]] más piruvato y glutamato.",
        "scientific": "Sin hexoquinasa ni PFK glucolíticas, combina [[Tlc1|tlc1]] con sustratos del ciclo de Krebs."
      }
    },
    "rick.ch2.s1.01": {
      "en": {
        "pop": "Unlike Chlamydia, Rickettsia kept a complete TCA cycle and [[electron transport chain|etc]].",
        "blueprint": "Unlike Chlamydia, Rickettsia retains a full TCA loop and [[respiratory proton bus|etc]].",
        "scientific": "Unlike Chlamydia, R. prowazekii encodes an intact Krebs cycle and aerobic [[respiratory chain|etc]]."
      },
      "es": {
        "pop": "A diferencia de Chlamydia, conservó el ciclo de Krebs y la [[cadena respiratoria|etc]].",
        "blueprint": "Frente a Chlamydia, conserva el ciclo TCA completo y el [[bus respiratorio|etc]].",
        "scientific": "A diferencia de Chlamydia, codifica un ciclo de Krebs íntegro y [[cadena respiratoria|etc]] aerobia."
      }
    },
    "rick.ch2.s1.02": {
      "en": {
        "pop": "As crowded bacteria drain host ATP, [[Complexes I, III and IV|etc]] oxidize NADH with oxygen.",
        "blueprint": "When host ATP drops, [[Complexes I, III and IV|etc]] switch to local NADH oxidation.",
        "scientific": "NADH dehydrogenase, bc1 and aa3 oxidase in [[ETC Complexes I/III/IV|etc]] reduce O2 to H2O."
      },
      "es": {
        "pop": "Al agotarse el ATP huésped, los [[complejos I, III y IV|etc]] oxidan NADH con oxígeno.",
        "blueprint": "Al caer el ATP externo, los [[complejos I, III y IV|etc]] oxidan NADH localmente.",
        "scientific": "NADH deshidrogenasa, citocromo bc1 y oxidasa aa3 de [[ETC I/III/IV|etc]] reducen O2 a H2O."
      }
    },
    "rick.ch2.s1.03": {
      "en": {
        "pop": "The [[respiratory complexes|etc]] pump H+ across the [[inner membrane|im]] into the periplasm.",
        "blueprint": "Proton pumps along [[ETC|etc]] charge an electrochemical gradient across the [[inner hull|im]].",
        "scientific": "Vectorial H+ translocation by [[ETC|etc]] builds ~180 mV proton-motive force across the [[IM|im]]."
      },
      "es": {
        "pop": "Los [[complejos respiratorios|etc]] bombean H+ por la [[membrana interna|im]] hacia el periplasma.",
        "blueprint": "Las bombas de [[ETC|etc]] cargan un gradiente electroquímico sobre la [[bicapa interna|im]].",
        "scientific": "El bombeo vectorial de H+ por [[ETC|etc]] crea ~180 mV protón-motrices en la [[membrana interna|im]]."
      }
    },
    "rick.ch2.s2.01": {
      "en": {
        "pop": "Periplasmic protons rush back through rotary [[F1Fo ATP synthases|atps]] in the [[inner membrane|im]].",
        "blueprint": "Periplasmic H+ flux drives rotary [[F1Fo turbine generators|atps]] in the [[inner hull|im]].",
        "scientific": "Chemiosmotic H+ return through Fo drives rotary [[F1Fo ATP synthases|atps]] in the [[IM|im]]."
      },
      "es": {
        "pop": "Los protones regresan por las [[ATP sintasas F1Fo|atps]] rotatorias de la [[membrana interna|im]].",
        "blueprint": "El retorno de H+ acciona [[turbinas generadoras F1Fo|atps]] en la [[bicapa interna|im]].",
        "scientific": "El retorno quimiosmótico de H+ impulsa las [[ATP sintasas F1Fo|atps]] de la [[membrana interna|im]]."
      }
    },
    "rick.ch2.s2.02": {
      "en": {
        "pop": "Spinning the c-ring drives [[F1Fo catalytic heads|atps]] to mint Rickettsia's own ATP.",
        "blueprint": "Gamma-shaft torque cycles [[F1Fo alpha3-beta3 heads|atps]] to mint autonomous ATP.",
        "scientific": "Each 360-degree gamma rotation in [[F1Fo|atps]] phosphorylates three ADP + Pi into endogenous ATP."
      },
      "es": {
        "pop": "El giro del anillo c impulsa las [[cabezas F1Fo|atps]] para acuñar el propio ATP bacteriano.",
        "blueprint": "El par del eje gamma cicla las [[cabezas F1Fo|atps]] para generar ATP autónomo.",
        "scientific": "Cada giro de 360 grados en [[F1Fo|atps]] fosforila tres moléculas de ADP + Pi en ATP propio."
      }
    },
    "rick.ch2.s2.03": {
      "en": {
        "pop": "This dual strategy steals ATP via [[Tlc1|tlc1]] early and breathes via [[ETC|etc]] and [[F1Fo|atps]] late.",
        "blueprint": "Hybrid power bus: grid import via [[Tlc1|tlc1]] early, onboard [[ETC|etc]]-[[F1Fo|atps]] generation late.",
        "scientific": "Biphasic bioenergetics shifts from [[Tlc1|tlc1]] ATP import to [[ETC|etc]]/[[F1Fo|atps]] oxidative phosphorylation."
      },
      "es": {
        "pop": "Esta vía dual roba ATP vía [[Tlc1|tlc1]] al inicio y respira con [[ETC|etc]] y [[F1Fo|atps]] después.",
        "blueprint": "Bus híbrido: importa de la red vía [[Tlc1|tlc1]] al inicio y genera con [[ETC|etc]]-[[F1Fo|atps]] al final.",
        "scientific": "Su bioenergética pasa del antiporte [[Tlc1|tlc1]] a la fosforilación oxidativa [[ETC|etc]]/[[F1Fo|atps]]."
      }
    },
    "rick.ch3.s0.01": {
      "en": {
        "pop": "At the rear pole of the [[outer membrane|om]] sits the autotransporter [[Sca2|sca2]].",
        "blueprint": "Mounted at the aft pole of the [[outer hull|om]] is the autotransporter nozzle [[Sca2|sca2]].",
        "scientific": "Polarly localized in the [[outer membrane|om]] sits the ~150 kDa autotransporter [[Sca2|sca2]]."
      },
      "es": {
        "pop": "En el polo posterior de la [[membrana externa|om]] se sitúa el autotransportador [[Sca2|sca2]].",
        "blueprint": "En la popa del [[casco externo|om]] se monta la tobera autotransportadora [[Sca2|sca2]].",
        "scientific": "En el polo de la [[membrana externa|om]] se localiza el autotransportador [[Sca2|sca2]] (~150 kDa)."
      }
    },
    "rick.ch3.s0.02": {
      "en": {
        "pop": "[[Sca2|sca2]] mimics eukaryotic formin proteins, grabbing profilin-bound [[host G-actin|g_actin]].",
        "blueprint": "[[Sca2|sca2]] emulates host formin hardware, recruiting profilin-loaded [[G-actin monomers|g_actin]].",
        "scientific": "Crescentic FH2-like domains and Pro-rich motifs on [[Sca2|sca2]] bind profilin-[[ATP-G-actin|g_actin]]."
      },
      "es": {
        "pop": "[[Sca2|sca2]] imita a las forminas eucariotas y capta [[actina G del huésped|g_actin]].",
        "blueprint": "[[Sca2|sca2]] emula forminas del huésped reclutando [[monómeros de actina G|g_actin]] con profilina.",
        "scientific": "Dominios tipo FH2 y ricos en prolina de [[Sca2|sca2]] captan complejos profilina-[[actina G|g_actin]]."
      }
    },
    "rick.ch3.s0.03": {
      "en": {
        "pop": "Unlike branched Arp2/3 networks, [[Sca2|sca2]] nucleates long unbranched [[F-actin bundles|comet]].",
        "blueprint": "Bypassing host Arp2/3, [[Sca2|sca2]] extrudes parallel unbranched [[F-actin thrust rods|comet]].",
        "scientific": "Independent of host Arp2/3, [[Sca2|sca2]] elongates linear parallel [[F-actin filaments|comet]]."
      },
      "es": {
        "pop": "A diferencia de Arp2/3, [[Sca2|sca2]] nuclea largos [[haces lineales de actina F|comet]].",
        "blueprint": "Sin usar Arp2/3, [[Sca2|sca2]] extruye [[barras paralelas de actina F|comet]] sin ramificar.",
        "scientific": "Independiente de Arp2/3, [[Sca2|sca2]] elonga [[filamentos paralelos de actina F|comet]]."
      }
    },
    "rick.ch3.s1.01": {
      "en": {
        "pop": "Fresh [[G-actin monomers|g_actin]] lock onto barbed ends right against polar [[Sca2|sca2]].",
        "blueprint": "ATP-bound [[G-actin subunits|g_actin]] step-insert at barbed ends held by [[Sca2|sca2]].",
        "scientific": "Processive barbed-end addition of [[ATP-G-actin|g_actin]] at [[Sca2|sca2]] generates Brownian-ratchet force."
      },
      "es": {
        "pop": "Nuevos [[monómeros de actina G|g_actin]] se suman al extremo barbado junto a [[Sca2|sca2]].",
        "blueprint": "Subunidades de [[actina G-ATP|g_actin]] se insertan en el extremo barbado fijado por [[Sca2|sca2]].",
        "scientific": "La adición procesiva de [[actina G-ATP|g_actin]] en [[Sca2|sca2]] genera empuje de trinquete."
      }
    },
    "rick.ch3.s1.02": {
      "en": {
        "pop": "Stacking host bricks into a [[jet-propulsion tail|comet]], Rickettsia rockets across the room.",
        "blueprint": "Polymerization thrust from the [[F-actin tail|comet]] drives the hull at ~15 um/min.",
        "scientific": "Cross-linked [[F-actin comet tails|comet]] propel Rickettsia through cytosol at ~10-20 um/min."
      },
      "es": {
        "pop": "Apilando ladrillos del huésped como [[chorro propulsor|comet]], Rickettsia cruza la sala como cohete.",
        "blueprint": "El empuje de polimerización de la [[cola de actina F|comet]] mueve el casco a ~15 um/min.",
        "scientific": "Las [[colas cometa de actina F|comet]] impulsan a Rickettsia por el citosol a ~10-20 um/min."
      }
    },
    "rick.ch3.s1.03": {
      "en": {
        "pop": "Older filaments depolymerize behind the [[comet tail|comet]], recycling [[G-actin|g_actin]] to the pool.",
        "blueprint": "Host cofilin disassembles the trailing [[wake|comet]], returning [[G-actin monomers|g_actin]] for reuse.",
        "scientific": "Pointed-end ADF/cofilin severing turns over the distal [[comet tail|comet]] into free [[G-actin|g_actin]]."
      },
      "es": {
        "pop": "Detrás de la [[cola cometa|comet]] la red se desmonta, reciclando [[actina G|g_actin]] libre.",
        "blueprint": "La cofilina desmonta la [[estela distal|comet]], devolviendo [[monómeros de actina G|g_actin]].",
        "scientific": "El corte por ADF/cofilina recicla el extremo distal de la [[cola|comet]] en [[actina G|g_actin]]."
      }
    },
    "rick.ch3.s2.01": {
      "en": {
        "pop": "Driven by its [[actin comet|comet]], the bacterium rams the [[host plasma membrane|host_mem]].",
        "blueprint": "Axial [[comet thrust|comet]] drives the nose directly into the [[host perimeter membrane|host_mem]].",
        "scientific": "Sustained [[F-actin propulsion|comet]] deforms the [[lateral host plasma membrane|host_mem]] at junctions."
      },
      "es": {
        "pop": "Impulsada por su [[cola de actina|comet]], la bacteria embiste la [[membrana plasmática|host_mem]].",
        "blueprint": "El [[empuje de actina|comet]] proyecta la proa contra la [[membrana perimetral|host_mem]].",
        "scientific": "La [[propulsión de actina F|comet]] deforma la [[membrana plasmática lateral|host_mem]] celular."
      }
    },
    "rick.ch3.s2.02": {
      "en": {
        "pop": "It pushes a finger-like protrusion of [[host membrane|host_mem]] deep into the adjacent cell.",
        "blueprint": "It invaginates a double-membrane tunnel of [[host bilayer|host_mem]] into the neighboring cell.",
        "scientific": "Engulfment of the [[plasma-membrane filopodium|host_mem]] forms a two-membrane vacuole next door."
      },
      "es": {
        "pop": "Empuja una prolongación de [[membrana del huésped|host_mem]] dentro de la célula vecina.",
        "blueprint": "Invagina un túnel de doble [[bicapa del huésped|host_mem]] hacia el interior de la célula contigua.",
        "scientific": "La endocitosis del [[filopodio membranoso|host_mem]] crea una vacuola doble en la célula vecina."
      }
    },
    "rick.ch3.s2.03": {
      "en": {
        "pop": "[[Pld phospholipases|pld]] dissolve both membranes, spreading stealthily past blood antibodies.",
        "blueprint": "[[Pld cutters|pld]] breach both bilayers, achieving cell-to-cell transfer with zero extracellular exposure.",
        "scientific": "[[Pld/TlyC lysis|pld]] ruptures the double vacuole, enabling direct spread immune to serum IgG."
      },
      "es": {
        "pop": "Las [[fosfolipasas Pld|pld]] abren ambas membranas, propagándose sin tocar anticuerpos.",
        "blueprint": "Las [[enzimas Pld|pld]] rompen ambas bicapas logrando salto directo sin exposición externa.",
        "scientific": "La [[lisis por Pld/TlyC|pld]] abre la doble vacuola y evade los anticuerpos séricos IgG."
      }
    },
    "rick.ch4.s0.01": {
      "en": {
        "pop": "Look side by side at Rickettsia and the eukaryotic [[host mitochondrion|host_mito]] beside it.",
        "blueprint": "Compare the Rickettsia chassis directly against the adjacent [[host mitochondrion|host_mito]].",
        "scientific": "Compare R. prowazekii directly with the adjacent eukaryotic [[mitochondrion|host_mito]]."
      },
      "es": {
        "pop": "Observa lado a lado a Rickettsia y a la [[mitocondria del huésped|host_mito]] junto a ella.",
        "blueprint": "Compara el chasis de Rickettsia frente a la [[mitocondria del huésped|host_mito]] contigua.",
        "scientific": "Compara directamente R. prowazekii con la [[mitocondria eucariota|host_mito]] adyacente."
      }
    },
    "rick.ch4.s0.02": {
      "en": {
        "pop": "Both carry double membranes, circular [[dsDNA|dna]], [[70S-type ribosomes|ribosome]] and [[F1Fo synthases|atps]].",
        "blueprint": "Both share dual bilayers, circular [[dsDNA|dna]], [[bacterial ribosomes|ribosome]] and [[F1Fo turbines|atps]].",
        "scientific": "Both retain cardiolipin-rich inner membranes, [[dsDNA|dna]], [[ribosomes|ribosome]] and [[F1Fo ATPases|atps]]."
      },
      "es": {
        "pop": "Ambas tienen doble membrana, [[ADNbc|dna]] circular, [[ribosomas 70S|ribosome]] y [[sintasas F1Fo|atps]].",
        "blueprint": "Ambas comparten doble bicapa, [[ADNbc|dna]], [[ribosomas bacterianos|ribosome]] y [[turbinas F1Fo|atps]].",
        "scientific": "Ambas conservan cardiolipina interna, [[ADNbc|dna]], [[ribosomas|ribosome]] y [[ATPasas F1Fo|atps]]."
      }
    },
    "rick.ch4.s0.03": {
      "en": {
        "pop": "Phylogenomics places Rickettsiales near the alphaproteobacterial root of [[mitochondria|host_mito]].",
        "blueprint": "Comparative genomics links Rickettsia's respiratory code directly to [[mitochondria|host_mito]].",
        "scientific": "16S rRNA and respiratory phylogenies group Rickettsiales sister/close to proto-[[mitochondria|host_mito]]."
      },
      "es": {
        "pop": "La filogenómica sitúa a Rickettsiales cerca de la raíz evolutiva de las [[mitocondrias|host_mito]].",
        "blueprint": "La genómica comparada enlaza su código respiratorio con el de las [[mitocondrias|host_mito]].",
        "scientific": "Filogenias de ARNr 16S y complejos ETC vinculan Rickettsiales con las proto-[[mitocondrias|host_mito]]."
      }
    },
    "rick.ch4.s1.01": {
      "en": {
        "pop": "Notice the opposite direction of ATP flow between [[Tlc1|tlc1]] and [[mitochondrial cristae|host_mito]].",
        "blueprint": "Contrast polarity: [[Tlc1|tlc1]] pulls host ATP inward while [[mitochondria|host_mito]] push ATP outward.",
        "scientific": "Non-homologous [[Tlc1|tlc1]] imports ATP, whereas [[mitochondrial cristae|host_mito]] export matrix ATP."
      },
      "es": {
        "pop": "Fíjate en el flujo opuesto de ATP entre [[Tlc1|tlc1]] y las [[crestas mitocondriales|host_mito]].",
        "blueprint": "Polaridad inversa: [[Tlc1|tlc1]] absorbe ATP mientras la [[mitocondria|host_mito]] lo exporta.",
        "scientific": "[[Tlc1|tlc1]] importa ATP citosólico, mientras las [[crestas mitocondriales|host_mito]] exportan ATP."
      }
    },
    "rick.ch4.s1.02": {
      "en": {
        "pop": "Two billion years ago, an ancient cousin moved in as a permanent power-plant [[roommate|host_mito]].",
        "blueprint": "Roughly 2 Ga ago, an engulfed alphaproteobacterium became the integrated [[mitochondrial grid|host_mito]].",
        "scientific": "During eukaryogenesis (~1.8-2.0 Ga), an alphaproteobacterial endosymbiont became [[mitochondria|host_mito]]."
      },
      "es": {
        "pop": "Hace dos mil millones de años, una prima se mudó dentro como [[compañera energética|host_mito]] fija.",
        "blueprint": "Hace ~2.000 Ma, un endosimbionte quedó integrado como [[central mitocondrial|host_mito]] fija.",
        "scientific": "Durante la eucariogénesis (~1,8-2,0 Ga), un simbionte evolucionó en [[mitocondrias|host_mito]]."
      }
    },
    "rick.ch4.s1.03": {
      "en": {
        "pop": "Instead of [[Tlc1|tlc1]] pulling ATP in, [[mitochondria|host_mito]] installed ANT carriers to export ATP out.",
        "blueprint": "Replacing inward [[Tlc1|tlc1]] taps with host-derived ANT ports turned [[mitochondria|host_mito]] into suppliers.",
        "scientific": "Replacing [[Tlc1|tlc1]] with eukaryotic MCF-family AAC/ANT inverted [[mitochondrial|host_mito]] ATP flux."
      },
      "es": {
        "pop": "En vez de absorber ATP con [[Tlc1|tlc1]], las [[mitocondrias|host_mito]] usan ANT para exportarlo.",
        "blueprint": "Cambiar tomas [[Tlc1|tlc1]] por puertos ANT convirtió a las [[mitocondrias|host_mito]] en proveedoras.",
        "scientific": "Sustituir [[Tlc1|tlc1]] por transportadores AAC/ANT invirtió el flujo de ATP [[mitocondrial|host_mito]]."
      }
    },
    "rick.ch4.s2.01": {
      "en": {
        "pop": "Across Mycoplasma, Chlamydia and Rickettsia, every parasite kept [[DNA|dna]] and [[70S ribosomes|ribosome]].",
        "blueprint": "Every Stage 3 parasite retains a lipid hull, [[dsDNA code|dna]] and onboard [[70S compilers|ribosome]].",
        "scientific": "All three obligate parasites conserve plasma membranes, [[dsDNA|dna]] and [[70S translation|ribosome]]."
      },
      "es": {
        "pop": "En Mycoplasma, Chlamydia y Rickettsia, todas conservaron [[ADN|dna]] y [[ribosomas 70S|ribosome]].",
        "blueprint": "Todo parásito de Etapa 3 retiene casco lipídico, [[código ADNbc|dna]] y [[compiladores 70S|ribosome]].",
        "scientific": "Las tres bacterias parásitas preservan membrana, [[ADNbc|dna]] y [[traducción 70S|ribosome]] propia."
      }
    },
    "rick.ch4.s2.02": {
      "en": {
        "pop": "Next in Stage 4, viruses strip away membranes, cytoplasm and [[ribosomes|ribosome]] altogether.",
        "blueprint": "In Stage 4, virions delete cytosol, ATP buses and [[ribosome compilers|ribosome]] completely.",
        "scientific": "Crossing into Stage 4, acellular virions lack cytoplasm, metabolism and [[ribosomes|ribosome]]."
      },
      "es": {
        "pop": "En la Etapa 4, los virus pierden por completo membranas, citoplasma y [[ribosomas|ribosome]].",
        "blueprint": "En la Etapa 4, los viriones eliminan citosol, buses de ATP y [[compiladores ribosómicos|ribosome]].",
        "scientific": "Al pasar a la Etapa 4, los viriones acelulares carecen de metabolismo y de [[ribosomas|ribosome]]."
      }
    },
    "rick.ch4.s2.03": {
      "en": {
        "pop": "Explore any 3D structure now, or advance to Stage 4 to cross into the acellular virosphere.",
        "blueprint": "Inspect any 3D component now, or step into Stage 4 to analyze pure viral payloads.",
        "scientific": "Examine any molecular structure, or advance to Stage 4 to survey viral capsid architectures."
      },
      "es": {
        "pop": "Explora cualquier estructura 3D o avanza a la Etapa 4 hacia la virosfera acelular.",
        "blueprint": "Inspecciona cualquier módulo 3D o pasa a la Etapa 4 para analizar cargas virales.",
        "scientific": "Examina cualquier estructura molecular o avanza a la Etapa 4 hacia las arquitecturas virales."
      }
    }
  }
};
