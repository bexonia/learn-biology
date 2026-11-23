import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 18 Capstone (`real-immune` & `real-pharmacology`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - `real-immune`: 40 of 42 cues (95.2%) match base `cue.text` verbatim in `en.pop` with
 *   direct, distraction-free biological prose. Exactly 2 cues use purposeful everyday mental models:
 *   1. `imm.ch2.s1.02` - IgG Fab arms capping viral Spike RBDs like fitted covers over key teeth to block ACE2.
 *   2. `imm.ch3.s0.02` - Surface MHC-I acting like an exterior status window displaying internal protein snippets.
 * - `real-pharmacology`: 40 of 42 cues (95.2%) match base `cue.text` verbatim in `en.pop`.
 *   Exactly 2 cues use purposeful everyday mental models:
 *   1. `pha.ch3.s1.02` - Nucleoside analogs stalling viral polymerases like a defective rail tie missing a clasp.
 *   2. `pha.ch4.s1.02` - Vaccine mRNA acting as a temporary practice blueprint for 80S ribosomes that dissolves.
 */
export const PERSONAS_IMMUNE_MEDICINE: TourPersonaMap = {
  "real-immune": {
    "imm.ch0.s0.01": {
      "en": {
        "pop": "Welcome to a 30 um mucosal tissue battleground where human immunity separates self from non-self.",
        "blueprint": "Entering a 30 um mucosal perimeter engineered to classify every surface as self or non-self.",
        "scientific": "This 30 um mucosal niche integrates innate and adaptive immune arms to discriminate self from non-self."
      },
      "es": {
        "pop": "Bienvenido a un campo tisular mucoso de 30 um donde la inmunidad separa lo propio de lo extraño.",
        "blueprint": "Entrando a un perímetro mucoso de 30 um diseñado para clasificar cada superficie como propia o ajena.",
        "scientific": "Este nicho mucoso de 30 um integra inmunidad innata y adaptativa para discriminar propio de no propio."
      }
    },
    "imm.ch0.s0.02": {
      "en": {
        "pop": "On the left, a patrolling [[macrophage|macrophage]] tracks an invading [[E. coli bacterium|ecoli_target]].",
        "blueprint": "Left sector: a mobile [[macrophage|macrophage]] sentinel locks onto an intruding [[E. coli|ecoli_target]] rod.",
        "scientific": "At left, a ~15 um [[macrophage|macrophage]] engages an extracellular 2 um [[E. coli|ecoli_target]] pathogen."
      },
      "es": {
        "pop": "A la izquierda, un [[macrófago|macrophage]] patrullero rastrea una bacteria [[E. coli|ecoli_target]] invasora.",
        "blueprint": "Sector izquierdo: un centinela [[macrófago|macrophage]] detecta e intercepta a un bacilo [[E. coli|ecoli_target]].",
        "scientific": "A la izquierda, un [[macrófago|macrophage]] (~15 um) intercepta un patógeno [[E. coli|ecoli_target]] de 2 um."
      }
    },
    "imm.ch0.s0.03": {
      "en": {
        "pop": "Center [[IgG antibodies|igg_antibody]] swarm a [[virion|virion_target]], while right sits a [[CD8+ T-cell|cd8_tcell]].",
        "blueprint": "Center [[IgG|igg_antibody]] units intercept a [[virion|virion_target]], while right stages a [[CD8+ T-cell|cd8_tcell]].",
        "scientific": "Center [[IgG|igg_antibody]] (1IGT) coats a [[SARS-CoV-2 virion|virion_target]]; right shows a ~8 um [[CD8+ T-cell|cd8_tcell]]."
      },
      "es": {
        "pop": "Al centro [[anticuerpos IgG|igg_antibody]] rodean un [[virión|virion_target]]; a la derecha espera un [[linfocito CD8+|cd8_tcell]].",
        "blueprint": "Al centro [[unidades IgG|igg_antibody]] cercan un [[virión|virion_target]]; a la derecha actúa un [[linfocito CD8+|cd8_tcell]].",
        "scientific": "Al centro [[IgG|igg_antibody]] (1IGT) rodea un [[virión SARS-CoV-2|virion_target]]; a la derecha está un [[CD8+|cd8_tcell]] (~8 um)."
      }
    },
    "imm.ch0.s1.01": {
      "en": {
        "pop": "Innate [[macrophages|macrophage]] strike within minutes using [[lysosomal enzymes|lysosome_ros]] against common microbes.",
        "blueprint": "First-response [[macrophages|macrophage]] deploy rapid [[lysosomal digesters|lysosome_ros]] against broad microbe motifs.",
        "scientific": "Innate [[macrophages|macrophage]] clear conserved PAMPs within minutes via acidic [[phagolysosomes|lysosome_ros]]."
      },
      "es": {
        "pop": "Los [[macrófagos|macrophage]] innatos atacan en minutos con [[enzimas lisosomales|lysosome_ros]] contra microbios comunes.",
        "blueprint": "Los [[macrófagos|macrophage]] de respuesta rápida activan [[digestores lisosomales|lysosome_ros]] ante patrones microbianos.",
        "scientific": "Los [[macrófagos|macrophage]] innatos eliminan PAMPs en minutos mediante [[fagolisosomas|lysosome_ros]] ácidos."
      }
    },
    "imm.ch0.s1.02": {
      "en": {
        "pop": "Adaptive B-cells secrete tailored [[IgG antibodies|igg_antibody]] that neutralize pathogens in fluid outside cells.",
        "blueprint": "Humoral B-cells export custom [[IgG blockers|igg_antibody]] to disable free pathogens across extracellular space.",
        "scientific": "Affinity-matured B-cells secrete soluble [[IgG|igg_antibody]] (150 kDa) to neutralize extracellular virions."
      },
      "es": {
        "pop": "Los linfocitos B secretan [[anticuerpos IgG|igg_antibody]] a medida que neutralizan patógenos fuera de las células.",
        "blueprint": "Las células B humorales emiten [[bloqueadores IgG|igg_antibody]] a medida para inactivar patógenos extracelulares.",
        "scientific": "Las células B maduras secretan [[IgG|igg_antibody]] soluble (150 kDa) que neutraliza viriones extracelulares."
      }
    },
    "imm.ch0.s1.03": {
      "en": {
        "pop": "Cytotoxic [[CD8+ T-cells|cd8_tcell]] eliminate infected host cells hiding viruses beyond antibody reach.",
        "blueprint": "Cellular [[CD8+ T-cells|cd8_tcell]] decommission compromised host cells shielding replicating viral payloads.",
        "scientific": "Cytotoxic [[CD8+ T-lymphocytes|cd8_tcell]] clear intracellular viral factories inaccessible to serum IgG."
      },
      "es": {
        "pop": "Los [[linfocitos T CD8+|cd8_tcell]] citotóxicos eliminan células infectadas que esconden virus de los anticuerpos.",
        "blueprint": "Los [[linfocitos CD8+|cd8_tcell]] desactivan células huésped comprometidas donde se replican virus ocultos.",
        "scientific": "Los [[linfocitos T CD8+|cd8_tcell]] citotóxicos erradican fábricas virales intracelulares fuera del alcance de IgG."
      }
    },
    "imm.ch1.s0.01": {
      "en": {
        "pop": "Zoom to the 15 um [[macrophage|macrophage]] detecting surface LPS on a 2 um [[E. coli|ecoli_target]] rod.",
        "blueprint": "Zoom to the 15 um [[macrophage|macrophage]] scanning outer-membrane LPS signatures on a 2 um [[E. coli|ecoli_target]].",
        "scientific": "TLR4 receptors on the 15 um [[macrophage|macrophage]] bind Gram-negative LPS on the 2 um [[E. coli|ecoli_target]] surface."
      },
      "es": {
        "pop": "Acércate al [[macrófago|macrophage]] de 15 um que detecta LPS superficial en un bacilo [[E. coli|ecoli_target]] de 2 um.",
        "blueprint": "Enfoque en el [[macrófago|macrophage]] de 15 um escaneando firmas LPS en la membrana de [[E. coli|ecoli_target]] (2 um).",
        "scientific": "Los receptores TLR4 del [[macrófago|macrophage]] (15 um) reconocen LPS en la membrana de [[E. coli|ecoli_target]] (2 um)."
      }
    },
    "imm.ch1.s0.02": {
      "en": {
        "pop": "Branching [[actin pseudopods|actin_pseudopod]] reach around [[E. coli|ecoli_target]] to pull it inward.",
        "blueprint": "Motorized [[actin pseudopods|actin_pseudopod]] extend around [[E. coli|ecoli_target]] to enclose the target cleanly.",
        "scientific": "Arp2/3-nucleated [[F-actin pseudopods|actin_pseudopod]] polymerize around [[E. coli|ecoli_target]] during phagocytosis."
      },
      "es": {
        "pop": "[[Pseudópodos de actina|actin_pseudopod]] ramificados rodean a [[E. coli|ecoli_target]] para arrastrarla hacia adentro.",
        "blueprint": "[[Pseudópodos de actina|actin_pseudopod]] motorizados envuelven a [[E. coli|ecoli_target]] para capturar el objetivo.",
        "scientific": "[[Pseudópodos de F-actina|actin_pseudopod]] nucleados por Arp2/3 rodean a [[E. coli|ecoli_target]] por fagocitosis."
      }
    },
    "imm.ch1.s0.03": {
      "en": {
        "pop": "The membrane lips fuse tightly, trapping [[E. coli|ecoli_target]] inside a sealed [[phagosome|phagosome]].",
        "blueprint": "Membrane edges zip shut, isolating [[E. coli|ecoli_target]] inside an internal containment [[phagosome|phagosome]].",
        "scientific": "Phagocytic cup closure seals [[E. coli|ecoli_target]] within a ~1-2 um nascent intracellular [[phagosome|phagosome]]."
      },
      "es": {
        "pop": "Los bordes de membrana se fusionan y atrapan a [[E. coli|ecoli_target]] dentro de un [[fagosoma|phagosome]] sellado.",
        "blueprint": "Los bordes membranales se cierran aislando a [[E. coli|ecoli_target]] en una cámara interna de [[fagosoma|phagosome]].",
        "scientific": "El cierre de la copa fagocítica encierra a [[E. coli|ecoli_target]] en un [[fagosoma|phagosome]] naciente de ~1-2 um."
      }
    },
    "imm.ch1.s1.01": {
      "en": {
        "pop": "Acidic [[lysosomes|lysosome_ros]] fuse with the [[phagosome|phagosome]] as V-ATPase pumps drop pH to 4.5.",
        "blueprint": "Acidic [[lysosome pods|lysosome_ros]] dock onto the [[phagosome|phagosome]], driving V-ATPase H+ pumping to pH 4.5.",
        "scientific": "[[Lysosomes|lysosome_ros]] fuse with the [[phagosome|phagosome]] while V-ATPase H+ pumps acidify the lumen to pH ~4.5."
      },
      "es": {
        "pop": "Los [[lisosomas|lysosome_ros]] ácidos se funden con el [[fagosoma|phagosome]] y bombas V-ATPasa bajan el pH a 4,5.",
        "blueprint": "Los [[módulos lisosomales|lysosome_ros]] se acoplan al [[fagosoma|phagosome]] bombeando H+ con V-ATPasa hasta pH 4,5.",
        "scientific": "Los [[lisosomas|lysosome_ros]] se fusionan al [[fagosoma|phagosome]] y la V-ATPasa acidifica el lumen a pH ~4,5."
      }
    },
    "imm.ch1.s1.02": {
      "en": {
        "pop": "Inside [[lysosome ROS|lysosome_ros]] chambers, NOX2 sparks superoxide, H2O2 and bleach to shred bacterial membranes.",
        "blueprint": "Inside [[ROS chambers|lysosome_ros]], NOX2 ignites superoxide, H2O2 and HOCl bursts that rupture microbial walls.",
        "scientific": "Within [[phagolysosomes|lysosome_ros]], NADPH oxidase NOX2 drives O2 -> O2- -> H2O2 -> HOCl oxidative bursts."
      },
      "es": {
        "pop": "En el [[lisosoma ROS|lysosome_ros]], NOX2 genera superóxido, H2O2 y lejía para destruir membranas bacterianas.",
        "blueprint": "En la cámara [[ROS lisosomal|lysosome_ros]], NOX2 dispara ráfagas de superóxido, H2O2 y HOCl contra la bacteria.",
        "scientific": "En el [[fagolisosoma|lysosome_ros]], la NADPH oxidasa NOX2 impulsa el estallido O2 -> O2- -> H2O2 -> HOCl."
      }
    },
    "imm.ch1.s1.03": {
      "en": {
        "pop": "Lysozyme and cathepsins cleave [[E. coli|ecoli_target]] inside the [[phagosome|phagosome]] into short peptides.",
        "blueprint": "Hydrolase cutters dismantle [[E. coli|ecoli_target]] inside the [[phagolysosome|phagosome]] into readable peptides.",
        "scientific": "Lysozyme and acid cathepsins proteolyze [[E. coli|ecoli_target]] inside the [[phagolysosome|phagosome]] into peptides."
      },
      "es": {
        "pop": "La lisozima y las catepsinas cortan a [[E. coli|ecoli_target]] dentro del [[fagosoma|phagosome]] en péptidos cortos.",
        "blueprint": "Las hidrolasas desarman a [[E. coli|ecoli_target]] dentro del [[fagolisosoma|phagosome]] en fragmentos legibles.",
        "scientific": "Lisozima y catepsinas ácidas proteolizan a [[E. coli|ecoli_target]] en el [[fagolisosoma|phagosome]] en péptidos."
      }
    },
    "imm.ch1.s2.01": {
      "en": {
        "pop": "Bacterial fragments from the [[phagosome|phagosome]] load into the open groove of [[MHC-II|mhcii_display]].",
        "blueprint": "Digested target snippets from the [[phagosome|phagosome]] slot into the open display cradle of [[MHC-II|mhcii_display]].",
        "scientific": "Exogenous 13-25-mer peptides from the [[phagolysosome|phagosome]] load into the [[MHC-II|mhcii_display]] (1DLH) groove."
      },
      "es": {
        "pop": "Fragmentos bacterianos del [[fagosoma|phagosome]] se cargan en el surco abierto del [[MHC-II|mhcii_display]].",
        "blueprint": "Los recortes del [[fagosoma|phagosome]] encajan en la ranura abierta de exhibición del módulo [[MHC-II|mhcii_display]].",
        "scientific": "Péptidos exógenos de 13-25 residuos del [[fagolisosoma|phagosome]] ocupan el surco de [[MHC-II|mhcii_display]] (1DLH)."
      }
    },
    "imm.ch1.s2.02": {
      "en": {
        "pop": "Vesicles export loaded [[MHC-II|mhcii_display]] onto the [[macrophage|macrophage]] plasma membrane.",
        "blueprint": "Transport vesicles mount each loaded [[MHC-II|mhcii_display]] beacon onto the [[macrophage|macrophage]] outer hull.",
        "scientific": "Endosomal vesicles traffic peptide-bound [[MHC-II|mhcii_display]] heterodimers to the [[macrophage|macrophage]] surface."
      },
      "es": {
        "pop": "Las vesículas exportan el [[MHC-II|mhcii_display]] cargado hacia la membrana externa del [[macrófago|macrophage]].",
        "blueprint": "Vesículas de entrega instalan cada baliza [[MHC-II|mhcii_display]] cargada en el casco del [[macrófago|macrophage]].",
        "scientific": "Vesículas endosomales exportan heterodímeros [[MHC-II|mhcii_display]] cargados a la membrana del [[macrófago|macrophage]]."
      }
    },
    "imm.ch1.s2.03": {
      "en": {
        "pop": "Displaying microbial peptides on [[MHC-II|mhcii_display]] activates CD4+ helper T-cells to rally adaptive defense.",
        "blueprint": "Broadcasting pathogen peptides on [[MHC-II|mhcii_display]] triggers CD4+ helper T-cells to coordinate adaptive arms.",
        "scientific": "Surface [[MHC-II|mhcii_display]] (PDB 1DLH) engages CD4+ helper TCRs, licensing B-cell IgG and CD8+ expansion."
      },
      "es": {
        "pop": "Mostrar péptidos microbianos en [[MHC-II|mhcii_display]] activa linfocitos T CD4+ que coordinan la defensa adaptativa.",
        "blueprint": "Emitir péptidos patógenos en [[MHC-II|mhcii_display]] activa células T CD4+ cooperadoras para escalar la defensa.",
        "scientific": "El [[MHC-II|mhcii_display]] (PDB 1DLH) acopla TCR CD4+, habilitando anticuerpos B y expansión de linfocitos CD8+."
      }
    },
    "imm.ch2.s0.01": {
      "en": {
        "pop": "Fly to the center where 14 nm Y-shaped [[IgG antibodies|igg_antibody]] surround a [[SARS-CoV-2 virion|virion_target]].",
        "blueprint": "Center stage: 14 nm Y-frame [[IgG interceptors|igg_antibody]] converge around a 100 nm [[SARS-CoV-2|virion_target]].",
        "scientific": "At center, 14 nm heterotetrameric [[IgG|igg_antibody]] (PDB 1IGT) swarms an enveloped [[SARS-CoV-2 virion|virion_target]]."
      },
      "es": {
        "pop": "Vuela al centro donde [[anticuerpos IgG|igg_antibody]] en Y de 14 nm rodean un [[virión SARS-CoV-2|virion_target]].",
        "blueprint": "Zona central: [[interceptores IgG|igg_antibody]] en Y de 14 nm convergen sobre un [[SARS-CoV-2|virion_target]] de 100 nm.",
        "scientific": "Al centro, [[IgG|igg_antibody]] heterotetramérica (14 nm, 1IGT) rodea un [[virión SARS-CoV-2|virion_target]] envuelto."
      }
    },
    "imm.ch2.s0.02": {
      "en": {
        "pop": "Two flexible [[Fab arms|fab_arms]] form hypervariable tips shaped to grip one exact viral surface epitope.",
        "blueprint": "Twin articulated [[Fab arms|fab_arms]] expose precision-milled tips tuned to one complementary viral epitope.",
        "scientific": "Paired [[Fab arms|fab_arms]] carry VH/VL CDR loops achieving nanomolar affinity for one specific viral epitope."
      },
      "es": {
        "pop": "Dos [[brazos Fab|fab_arms]] flexibles forman puntas hipervariables moldeadas para sujetar un epítopo viral exacto.",
        "blueprint": "Dos [[brazos Fab|fab_arms]] articulados exponen puntas de precisión calibradas para un epítopo viral concreto.",
        "scientific": "Los [[brazos Fab|fab_arms]] portan bucles CDR VH/VL con afinidad nanomolar por un epítopo viral específico."
      }
    },
    "imm.ch2.s0.03": {
      "en": {
        "pop": "The constant [[Fc stem|fc_stem]] anchors the base of each [[IgG|igg_antibody]] and signals downstream immune cells.",
        "blueprint": "The conserved [[Fc stem|fc_stem]] forms the signaling tail of every [[IgG|igg_antibody]] for phagocyte docking.",
        "scientific": "The homodimeric CH2-CH3 [[Fc stem|fc_stem]] of [[IgG|igg_antibody]] (1IGT) binds Fc-gamma receptors and C1q."
      },
      "es": {
        "pop": "El [[tallo Fc|fc_stem]] constante ancla la base de cada [[IgG|igg_antibody]] y alerta a las células inmunes vecinas.",
        "blueprint": "El [[tallo Fc|fc_stem]] conservado forma la cola de señalización de cada [[IgG|igg_antibody]] para receptores fagocíticos.",
        "scientific": "El [[tallo Fc|fc_stem]] homodimérico CH2-CH3 de [[IgG|igg_antibody]] (1IGT) activa receptores Fc-gamma y C1q."
      }
    },
    "imm.ch2.s1.01": {
      "en": {
        "pop": "To enter lung cells, the viral [[Spike RBD|spike_rbd]] must dock flush onto host [[ACE2|ace2_blocked]].",
        "blueprint": "Viral entry demands exact geometric docking between the [[Spike RBD|spike_rbd]] plug and host [[ACE2|ace2_blocked]].",
        "scientific": "Cell entry requires the up-conformation [[Spike RBD|spike_rbd]] to bind human [[ACE2|ace2_blocked]] (PDB 6M0J)."
      },
      "es": {
        "pop": "Para entrar en células pulmonares, el [[RBD de espícula|spike_rbd]] debe encajar en el receptor [[ACE2|ace2_blocked]].",
        "blueprint": "El ingreso viral exige un acoplamiento exacto entre el conector [[RBD|spike_rbd]] y el puerto [[ACE2|ace2_blocked]].",
        "scientific": "La entrada exige que el [[RBD de Spike|spike_rbd]] en estado abierto se una a [[ACE2|ace2_blocked]] humano (6M0J)."
      }
    },
    "imm.ch2.s1.02": {
      "en": {
        "pop": "IgG [[Fab arms|fab_arms]] cap viral [[Spike RBDs|spike_rbd]] like covers over key teeth, blocking host [[ACE2|ace2_blocked]].",
        "blueprint": "IgG [[Fab clamps|fab_arms]] seal the [[Spike RBD|spike_rbd]] interface so it cannot engage host [[ACE2|ace2_blocked]].",
        "scientific": "Neutralizing [[Fab|fab_arms]] (PDB 7BZ5) overlaps the [[Spike RBD|spike_rbd]] motif, competing out [[ACE2|ace2_blocked]] (6M0J)."
      },
      "es": {
        "pop": "Los [[brazos Fab|fab_arms]] cubren los [[RBD|spike_rbd]] como fundas sobre una llave e impiden abrir [[ACE2|ace2_blocked]].",
        "blueprint": "Las pinzas [[Fab|fab_arms]] sellan la interfaz del [[RBD|spike_rbd]] bloqueando el acople al puerto [[ACE2|ace2_blocked]].",
        "scientific": "El [[Fab|fab_arms]] neutralizante (7BZ5) solapa el motivo [[RBD|spike_rbd]] excluyendo a [[ACE2|ace2_blocked]] (6M0J)."
      }
    },
    "imm.ch2.s1.03": {
      "en": {
        "pop": "Sterically crowded by [[Fab arms|fab_arms]], the coated [[Spike RBD|spike_rbd]] bounces off [[ACE2|ace2_blocked]] harmlessly.",
        "blueprint": "With [[Fab arms|fab_arms]] occupying the docking footprint, [[Spike RBD|spike_rbd]] deflects off [[ACE2|ace2_blocked]] intact.",
        "scientific": "Steric clash from bound [[Fab arms|fab_arms]] prevents [[Spike RBD|spike_rbd]] engagement with [[ACE2|ace2_blocked]]."
      },
      "es": {
        "pop": "Bloqueado por los [[brazos Fab|fab_arms]], el [[RBD|spike_rbd]] cubierto rebota sin daño contra el [[ACE2|ace2_blocked]].",
        "blueprint": "Con los [[brazos Fab|fab_arms]] ocupando la huella de acople, el [[RBD|spike_rbd]] se desvía de [[ACE2|ace2_blocked]].",
        "scientific": "El impedimento estérico de los [[brazos Fab|fab_arms]] impide que el [[RBD|spike_rbd]] contacte con [[ACE2|ace2_blocked]]."
      }
    },
    "imm.ch2.s2.01": {
      "en": {
        "pop": "With [[ACE2|ace2_blocked]] protected, dense antibody coats bristle outward via every [[Fc stem|fc_stem]].",
        "blueprint": "While [[ACE2|ace2_blocked]] stays clear, the antibody shell points every [[Fc stem|fc_stem]] outward as a beacon.",
        "scientific": "With [[ACE2|ace2_blocked]] shielded, multivalent IgG arrays project every [[Fc stem|fc_stem]] radially outward."
      },
      "es": {
        "pop": "Con [[ACE2|ace2_blocked]] protegido, la capa de anticuerpos expone hacia afuera cada [[tallo Fc|fc_stem]].",
        "blueprint": "Mientras [[ACE2|ace2_blocked]] sigue libre, el recubrimiento proyecta cada [[tallo Fc|fc_stem]] como baliza externa.",
        "scientific": "Con [[ACE2|ace2_blocked]] protegido, los arreglos multivalentes de IgG exponen radialmente cada [[tallo Fc|fc_stem]]."
      }
    },
    "imm.ch2.s2.02": {
      "en": {
        "pop": "Surface Fc receptors on a [[macrophage|macrophage]] latch onto each [[Fc stem|fc_stem]] in opsonization.",
        "blueprint": "Fc-receptor ports on the [[macrophage|macrophage]] grip exposed [[Fc stems|fc_stem]] to trigger opsonized intake.",
        "scientific": "[[Macrophage|macrophage]] Fc-gamma receptors cross-link arrayed [[Fc stems|fc_stem]], accelerating opsonophagocytosis."
      },
      "es": {
        "pop": "Los receptores Fc de un [[macrófago|macrophage]] se enganchan a cada [[tallo Fc|fc_stem]] durante la opsonización.",
        "blueprint": "Los puertos Fc del [[macrófago|macrophage]] capturan los [[tallos Fc|fc_stem]] expuestos para iniciar la ingesta.",
        "scientific": "Los receptores Fc-gamma del [[macrófago|macrophage]] enlazan [[tallos Fc|fc_stem]] y aceleran la opsonofagocitosis."
      }
    },
    "imm.ch2.s2.03": {
      "en": {
        "pop": "Tagged [[virions|virion_target]] are rapidly engulfed and digested before they can infect nearby cells.",
        "blueprint": "Flagged [[virion payloads|virion_target]] route directly to lysosomal disposal before breaching neighbor cells.",
        "scientific": "Opsonized [[virions|virion_target]] undergo rapid FcR-mediated phagocytosis and endolysosomal degradation."
      },
      "es": {
        "pop": "Los [[viriones|virion_target]] marcados se engullen y digieren rápido antes de infectar células vecinas.",
        "blueprint": "Las [[cargas virales|virion_target]] etiquetadas pasan directo a destrucción lisosomal antes de invadir vecinos.",
        "scientific": "Los [[viriones|virion_target]] opsonizados sufren fagocitosis acelerada por FcR y degradación endolisosomal."
      }
    },
    "imm.ch3.s0.01": {
      "en": {
        "pop": "Once a virus replicates inside a human cell, secreted antibodies can no longer reach it.",
        "blueprint": "Once a viral hijack moves behind a host plasma membrane, extracellular antibodies lose physical access.",
        "scientific": "Intracellular viral replication occurs behind the host plasma membrane, shielded from extracellular IgG."
      },
      "es": {
        "pop": "Cuando un virus ya se replica dentro de una célula humana, los anticuerpos no pueden alcanzarlo.",
        "blueprint": "Si el secuestro viral cruza la membrana huésped, los anticuerpos externos pierden todo acceso físico.",
        "scientific": "La replicación viral intracelular queda protegida por la membrana plasmática frente a la IgG circulante."
      }
    },
    "imm.ch3.s0.02": {
      "en": {
        "pop": "Surface [[MHC-I|tcr_mhci]] acts like a status window showing internal [[snippets|viral_peptide]] to [[CD8+ T-cells|cd8_tcell]].",
        "blueprint": "Surface [[MHC-I|tcr_mhci]] exports cytosolic [[peptide telemetry|viral_peptide]] for patrolling [[CD8+ T-cells|cd8_tcell]].",
        "scientific": "Class I [[MHC-I|tcr_mhci]] presents endogenous cytosolic [[peptides|viral_peptide]] to patrolling [[CD8+ T-cells|cd8_tcell]]."
      },
      "es": {
        "pop": "El [[MHC-I|tcr_mhci]] es una ventana de estado que exhibe [[fragmentos|viral_peptide]] internos al [[linfocito CD8+|cd8_tcell]].",
        "blueprint": "El puerto [[MHC-I|tcr_mhci]] publica [[telemetría peptídica|viral_peptide]] citosólica para los [[linfocitos CD8+|cd8_tcell]].",
        "scientific": "El [[MHC-I|tcr_mhci]] de clase I presenta [[péptidos|viral_peptide]] citosólicos endógenos a [[linfocitos T CD8+|cd8_tcell]]."
      }
    },
    "imm.ch3.s0.03": {
      "en": {
        "pop": "Every nucleated body cell continuously samples its own cytosol onto [[MHC-I|tcr_mhci]] for inspection.",
        "blueprint": "All nucleated host cells run continuous internal protein sampling onto exterior [[MHC-I|tcr_mhci]] docks.",
        "scientific": "All nucleated human cells constitutively load proteasome-derived self or viral peptides onto [[MHC-I|tcr_mhci]]."
      },
      "es": {
        "pop": "Cada célula nucleada del cuerpo muestrea sin pausa su citosol sobre el [[MHC-I|tcr_mhci]] para inspección.",
        "blueprint": "Toda célula nucleada ejecuta un muestreo continuo de su citosol sobre los puertos externos [[MHC-I|tcr_mhci]].",
        "scientific": "Todas las células nucleadas cargan constitutivamente péptidos proteasomales en el [[MHC-I|tcr_mhci]]."
      }
    },
    "imm.ch3.s1.01": {
      "en": {
        "pop": "Proteasomes chop intracellular viral proteins into 9-mer [[viral peptides|viral_peptide]] for ER loading.",
        "blueprint": "Cytosolic proteasomes dice viral proteins into 9-residue [[peptides|viral_peptide]] and TAP-pump them into ER.",
        "scientific": "Immunoproteasomes generate 8-10-mer [[viral peptides|viral_peptide]] transported via TAP into the ER lumen."
      },
      "es": {
        "pop": "Los proteasomas cortan proteínas virales internas en [[péptidos virales|viral_peptide]] de 9 aminoácidos para el RE.",
        "blueprint": "Los proteasomas trocean proteínas virales en [[péptidos|viral_peptide]] de 9 residuos que TAP bombea al RE.",
        "scientific": "Los inmunoproteasomas generan [[péptidos virales|viral_peptide]] de 8-10 residuos transportados por TAP al RE."
      }
    },
    "imm.ch3.s1.02": {
      "en": {
        "pop": "Across the 15 nm synapse, the [[TCR-pMHC-I|tcr_mhci]] complex grips the [[viral peptide|viral_peptide]] directly.",
        "blueprint": "Spanning the 15 nm synapse gap, the [[TCR-pMHC-I|tcr_mhci]] interface reads the bound [[viral peptide|viral_peptide]].",
        "scientific": "Across the 15 nm cleft, the [[TCR-pMHC-I|tcr_mhci]] ternary complex (PDB 1AO7) docks onto the [[9-mer peptide|viral_peptide]]."
      },
      "es": {
        "pop": "Cruzando la sinapsis de 15 nm, el complejo [[TCR-pMHC-I|tcr_mhci]] sujeta directo el [[péptido viral|viral_peptide]].",
        "blueprint": "A través de la brecha de 15 nm, la interfaz [[TCR-pMHC-I|tcr_mhci]] autentica el [[péptido viral|viral_peptide]].",
        "scientific": "En la hendidura de 15 nm, el complejo [[TCR-pMHC-I|tcr_mhci]] (PDB 1AO7) acopla el [[péptido de 9 residuos|viral_peptide]]."
      }
    },
    "imm.ch3.s1.03": {
      "en": {
        "pop": "The CD8 co-receptor stabilizes [[TCR-pMHC-I|tcr_mhci]] binding, confirming a true match for the [[T-cell|cd8_tcell]].",
        "blueprint": "Co-receptor CD8 clamps the [[TCR-pMHC-I|tcr_mhci]] handshake and routes Lck kinases inside the [[T-cell|cd8_tcell]].",
        "scientific": "CD8 binding to MHC-I alpha-3 stabilizes [[TCR-pMHC-I|tcr_mhci]] (1AO7) and activates Lck in the [[CD8+ T-cell|cd8_tcell]]."
      },
      "es": {
        "pop": "El correceptor CD8 estabiliza la unión [[TCR-pMHC-I|tcr_mhci]] y confirma la alerta en el [[linfocito T|cd8_tcell]].",
        "blueprint": "El correceptor CD8 asegura el acople [[TCR-pMHC-I|tcr_mhci]] y dispara quinasas Lck en el [[linfocito T|cd8_tcell]].",
        "scientific": "CD8 en alfa-3 estabiliza [[TCR-pMHC-I|tcr_mhci]] (1AO7) y activa la quinasa Lck dentro del [[linfocito CD8+|cd8_tcell]]."
      }
    },
    "imm.ch3.s2.01": {
      "en": {
        "pop": "Healthy cells present normal self peptides on [[MHC-I|tcr_mhci]], so [[CD8+ T-cells|cd8_tcell]] move on untouched.",
        "blueprint": "Uninfected cells pass inspection with self peptides on [[MHC-I|tcr_mhci]], leaving [[CD8+ T-cells|cd8_tcell]] idle.",
        "scientific": "Central thymic tolerance ensures self-peptide [[MHC-I|tcr_mhci]] arrays do not activate [[CD8+ T-cells|cd8_tcell]]."
      },
      "es": {
        "pop": "Las células sanas muestran péptidos propios en [[MHC-I|tcr_mhci]], así el [[linfocito CD8+|cd8_tcell]] sigue sin dañarlas.",
        "blueprint": "Las células sanas superan la auditoría con péptidos propios en [[MHC-I|tcr_mhci]] y el [[CD8+|cd8_tcell]] se retira.",
        "scientific": "La tolerancia tímica impide que péptidos propios en [[MHC-I|tcr_mhci]] activen a los [[linfocitos CD8+|cd8_tcell]]."
      }
    },
    "imm.ch3.s2.02": {
      "en": {
        "pop": "Recognizing a foreign [[viral peptide|viral_peptide]] triggers a sharp Ca2+ surge inside the [[CD8+ T-cell|cd8_tcell]].",
        "blueprint": "Detecting a non-self [[viral peptide|viral_peptide]] trips an internal Ca2+ alarm across the [[CD8+ T-cell|cd8_tcell]].",
        "scientific": "Cognate [[viral peptide|viral_peptide]] recognition activates PLC-gamma and cytosolic Ca2+ flux in the [[T-cell|cd8_tcell]]."
      },
      "es": {
        "pop": "Detectar un [[péptido viral|viral_peptide]] extraño desata una oleada de Ca2+ dentro del [[linfocito CD8+|cd8_tcell]].",
        "blueprint": "Identificar un [[péptido viral|viral_peptide]] ajeno dispara una señal de Ca2+ en todo el [[linfocito CD8+|cd8_tcell]].",
        "scientific": "Reconocer el [[péptido viral|viral_peptide]] cognado activa PLC-gamma y flujo citosólico de Ca2+ en el [[CD8+|cd8_tcell]]."
      }
    },
    "imm.ch3.s2.03": {
      "en": {
        "pop": "Activated via [[TCR-pMHC-I|tcr_mhci]], the T-cell aims cytotoxic granules squarely across the synapse cleft.",
        "blueprint": "Locked by [[TCR-pMHC-I|tcr_mhci]], the microtubule hub aims lytic granules strictly into the sealed cleft.",
        "scientific": "Signaling from [[TCR-pMHC-I|tcr_mhci]] polarizes the MTOC and secretory lysosomes directly onto the synapse."
      },
      "es": {
        "pop": "Activado por [[TCR-pMHC-I|tcr_mhci]], el linfocito apunta sus gránulos citotóxicos directo hacia la sinapsis.",
        "blueprint": "Fijado por [[TCR-pMHC-I|tcr_mhci]], el eje de microtúbulos dirige gránulos líticos solo hacia la brecha sellada.",
        "scientific": "La señal de [[TCR-pMHC-I|tcr_mhci]] polariza el MTOC y los lisosomas secretores justo frente a la sinapsis."
      }
    },
    "imm.ch4.s0.01": {
      "en": {
        "pop": "Extracellular Ca2+ drives [[perforin|perforin_pore]] rings to punch 18 nm pores into the infected membrane.",
        "blueprint": "Synaptic Ca2+ assembles [[perforin|perforin_pore]] barrels that drill 18 nm access channels into the target cell.",
        "scientific": "Ca2+-bound [[perforin|perforin_pore]] (PDB 3NSJ) oligomerizes into ~16-20 nm beta-barrel pores in target bilayers."
      },
      "es": {
        "pop": "El Ca2+ extracelular ensambla anillos de [[perforina|perforin_pore]] que abren poros de 18 nm en la célula infectada.",
        "blueprint": "El Ca2+ sináptico ensambla cilindros de [[perforina|perforin_pore]] que abren canales de 18 nm en el objetivo.",
        "scientific": "La [[perforina|perforin_pore]] (PDB 3NSJ) activada por Ca2+ oligomeriza en poros beta-barril de ~16-20 nm."
      }
    },
    "imm.ch4.s0.02": {
      "en": {
        "pop": "Serine protease [[Granzyme B|granzyme_b]] pours through each [[perforin pore|perforin_pore]] into target cytosol.",
        "blueprint": "Protease payload [[Granzyme B|granzyme_b]] injects directly through the [[perforin port|perforin_pore]] into host cytosol.",
        "scientific": "Serine protease [[Granzyme B|granzyme_b]] (PDB 1IAU) diffuses through the [[perforin pore|perforin_pore]] into cytosol."
      },
      "es": {
        "pop": "La serina proteasa [[Granzima B|granzyme_b]] cruza cada [[poro de perforina|perforin_pore]] hacia el citosol infectado.",
        "blueprint": "La carga proteasa [[Granzima B|granzyme_b]] se inyecta por el [[puerto de perforina|perforin_pore]] al citosol diana.",
        "scientific": "La serina proteasa [[Granzima B|granzyme_b]] (PDB 1IAU) difunde por el [[poro de perforina|perforin_pore]] al citosol."
      }
    },
    "imm.ch4.s0.03": {
      "en": {
        "pop": "[[Granzyme B|granzyme_b]] activates caspases for clean apoptosis, stopping viral assembly before progeny burst out.",
        "blueprint": "[[Granzyme B|granzyme_b]] runs a clean caspase shutdown, terminating the viral factory without necrotic spill.",
        "scientific": "[[Granzyme B|granzyme_b]] (1IAU) cleaves Bid and pro-caspase-3, triggering apoptosis prior to viral lysis."
      },
      "es": {
        "pop": "La [[Granzima B|granzyme_b]] activa caspasas para una apoptosis limpia que detiene al virus antes de liberarse.",
        "blueprint": "La [[Granzima B|granzyme_b]] ejecuta un apagado limpio por caspasas, cerrando la fábrica viral sin derrame.",
        "scientific": "La [[Granzima B|granzyme_b]] (1IAU) escinde Bid y procaspasa-3 induciendo apoptosis antes de la lisis viral."
      }
    },
    "imm.ch4.s1.01": {
      "en": {
        "pop": "Zoom to 0.1 to 0.5 nm in the [[immune atoms|immune_atoms]] lens to see exact molecular recognition.",
        "blueprint": "Descend to 0.1-0.5 nm in the [[atomic lens|immune_atoms]] to inspect non-covalent binding hardware directly.",
        "scientific": "At 0.1-0.5 nm atomic scale, the [[immune inset|immune_atoms]] resolves CDR3 hydrogen bonds and hinge disulfides."
      },
      "es": {
        "pop": "Acércate a 0,1-0,5 nm en el lente de [[átomos inmunes|immune_atoms]] para ver el reconocimiento molecular exacto.",
        "blueprint": "Desciende a 0,1-0,5 nm en el [[visor atómico|immune_atoms]] para inspeccionar el hardware de enlace inmune.",
        "scientific": "A escala atómica (0,1-0,5 nm), el [[recuadro inmune|immune_atoms]] resuelve puentes H en CDR3 y disulfuros."
      }
    },
    "imm.ch4.s1.02": {
      "en": {
        "pop": "Across [[immune atoms|immune_atoms]], C, H, N and O hydrogen bonds lock [[Fab|fab_arms]] loops onto viral epitopes.",
        "blueprint": "In [[atomic contacts|immune_atoms]], exact C, H, N and O bond geometry locks [[Fab|fab_arms]] onto matching epitopes.",
        "scientific": "In [[immune atoms|immune_atoms]], polar C, H, N and O H-bonds (~2.8 A) anchor [[Fab|fab_arms]] CDR3 loops to RBD."
      },
      "es": {
        "pop": "En [[átomos inmunes|immune_atoms]], puentes de H entre C, H, N y O fijan los bucles [[Fab|fab_arms]] al epítopo viral.",
        "blueprint": "En los [[contactos atómicos|immune_atoms]], la geometría C, H, N y O bloquea los bucles [[Fab|fab_arms]] al epítopo.",
        "scientific": "En [[átomos inmunes|immune_atoms]], puentes de hidrógeno C, H, N y O (~2,8 A) anclan el [[Fab|fab_arms]] CDR3 al RBD."
      }
    },
    "imm.ch4.s1.03": {
      "en": {
        "pop": "Covalent sulfur Cys-S-S-Cys bridges inside [[immune atoms|immune_atoms]] hold each [[IgG|igg_antibody]] hinge together.",
        "blueprint": "Covalent sulfur Cys-S-S-Cys rivets inside [[immune atoms|immune_atoms]] reinforce every [[IgG|igg_antibody]] hinge.",
        "scientific": "Interchain covalent Cys-S-S-Cys (~2.05 A) disulfides in [[immune atoms|immune_atoms]] stabilize [[IgG|igg_antibody]]."
      },
      "es": {
        "pop": "Puentes covalentes Cys-S-S-Cys de azufre en [[átomos inmunes|immune_atoms]] unen la bisagra de cada [[IgG|igg_antibody]].",
        "blueprint": "Remaches covalentes de azufre Cys-S-S-Cys en [[átomos inmunes|immune_atoms]] refuerzan la bisagra [[IgG|igg_antibody]].",
        "scientific": "Puentes disulfuro Cys-S-S-Cys (~2,05 A) en [[átomos inmunes|immune_atoms]] estabilizan la bisagra [[IgG|igg_antibody]]."
      }
    },
    "imm.ch4.s2.01": {
      "en": {
        "pop": "[[Macrophages|macrophage]], [[IgG antibodies|igg_antibody]] and [[CD8+ T-cells|cd8_tcell]] defend tissue from 30 um down to atoms.",
        "blueprint": "Layered defense: [[macrophages|macrophage]], [[IgG|igg_antibody]] and [[CD8+ T-cells|cd8_tcell]] secure 30 um tissue to atoms.",
        "scientific": "Innate [[macrophages|macrophage]], humoral [[IgG|igg_antibody]] and cellular [[CD8+ T-cells|cd8_tcell]] span 30 um to 0.1 nm."
      },
      "es": {
        "pop": "[[Macrófagos|macrophage]], [[anticuerpos IgG|igg_antibody]] y [[linfocitos CD8+|cd8_tcell]] defienden el tejido hasta los átomos.",
        "blueprint": "Defensa en capas: [[macrófagos|macrophage]], [[IgG|igg_antibody]] y [[linfocitos CD8+|cd8_tcell]] cubren de 30 um a átomos.",
        "scientific": "[[Macrófagos|macrophage]] innatos, [[IgG|igg_antibody]] humoral y [[CD8+|cd8_tcell]] celular operan de 30 um a 0,1 nm."
      }
    },
    "imm.ch4.s2.02": {
      "en": {
        "pop": "Toggle Innate, Humoral and Cellular modes to spotlight engulfment, RBD block and [[perforin|perforin_pore]] lysis.",
        "blueprint": "Switch Innate, Humoral and Cellular presets to isolate capture, RBD lockout and [[perforin|perforin_pore]] firing.",
        "scientific": "Toggle Innate, Humoral and Cellular spotlights to inspect phagocytosis, RBD block and [[perforin|perforin_pore]]."
      },
      "es": {
        "pop": "Alterna los modos Innato, Humoral y Celular para ver fagocitosis, bloqueo RBD y lisis por [[perforina|perforin_pore]].",
        "blueprint": "Conmuta Innato, Humoral y Celular para aislar captura, bloqueo RBD y disparo de [[perforina|perforin_pore]].",
        "scientific": "Alterna modos Innato, Humoral y Celular para auditar fagocitosis, bloqueo RBD y [[perforina|perforin_pore]]."
      }
    },
    "imm.ch4.s2.03": {
      "en": {
        "pop": "Continue to the Pharmacology & Vaccine Lab to see how antibiotics, antivirals and mRNA vaccines aid immunity.",
        "blueprint": "Advance to the Pharmacology Lab to inspect how selective drugs and mRNA-LNP vaccines amplify host defense.",
        "scientific": "Proceed to the Pharmacology Lab to examine PBP inhibitors, 70S vs 80S drugs, antivirals and mRNA-LNP vaccines."
      },
      "es": {
        "pop": "Continúa al Laboratorio de Farmacología para ver cómo antibióticos, antivirales y vacunas ARNm ayudan.",
        "blueprint": "Avanza al Laboratorio de Farmacología para ver cómo fármacos selectivos y vacunas ARNm refuerzan defensas.",
        "scientific": "Sigue al Laboratorio de Farmacología para analizar PBP, ribosomas 70S/80S, antivirales y vacunas ARNm-LNP."
      }
    }
  },
  "real-pharmacology": {
    "pha.ch0.s0.01": {
      "en": {
        "pop": "Modern medicine rests on selective toxicity: halting pathogens while sparing [[human cells|bench_human]].",
        "blueprint": "Rational pharmacology runs on selective toxicity: disabling pathogen hardware while sparing [[host cells|bench_human]].",
        "scientific": "Selective toxicity exploits structural divergence between pathogens and eukaryotic [[human cells|bench_human]]."
      },
      "es": {
        "pop": "La medicina moderna busca toxicidad selectiva: frenar patógenos sin dañar las [[células humanas|bench_human]].",
        "blueprint": "La farmacología racional usa toxicidad selectiva: anular patógenos protegiendo [[células huésped|bench_human]].",
        "scientific": "La toxicidad selectiva explota divergencias estructurales entre patógenos y [[células humanas|bench_human]]."
      }
    },
    "pha.ch0.s0.02": {
      "en": {
        "pop": "Compare walled [[E. coli|bench_ecoli]], wall-less [[Mycoplasma|bench_myco]] and intracellular [[Chlamydia|bench_chlam]] up top.",
        "blueprint": "Upper assay: walled [[E. coli|bench_ecoli]], wall-less [[Mycoplasma|bench_myco]] and intracellular [[Chlamydia|bench_chlam]].",
        "scientific": "Top bench pairs walled [[E. coli|bench_ecoli]], wall-less [[Mycoplasma|bench_myco]] and obligate [[Chlamydia|bench_chlam]]."
      },
      "es": {
        "pop": "Arriba compara [[E. coli|bench_ecoli]] con pared, [[Mycoplasma|bench_myco]] sin pared y [[Chlamydia|bench_chlam]] intracelular.",
        "blueprint": "Ensayo superior: [[E. coli|bench_ecoli]] con muro, [[Mycoplasma|bench_myco]] sin muro y [[Chlamydia|bench_chlam]] interna.",
        "scientific": "El panel superior compara [[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] sin pared y [[Chlamydia|bench_chlam]] obligada."
      }
    },
    "pha.ch0.s0.03": {
      "en": {
        "pop": "Beside them sit acellular [[viruses|bench_virus]] and a nucleated [[human epithelial cell|bench_human]].",
        "blueprint": "Adjacent slots hold acellular [[viral particles|bench_virus]] beside a nucleated [[human cell|bench_human]] baseline.",
        "scientific": "Alongside stand acellular [[SARS-CoV-2/HIV-1|bench_virus]] virions and a nucleated [[human cell|bench_human]]."
      },
      "es": {
        "pop": "A su lado aparecen [[virus|bench_virus]] acelulares y una [[célula epitelial humana|bench_human]] con núcleo.",
        "blueprint": "Al lado se ubican [[partículas virales|bench_virus]] acelulares junto a una [[célula humana|bench_human]] de control.",
        "scientific": "Junto a ellos figuran viriones acelulares [[SARS-CoV-2/HIV-1|bench_virus]] y una [[célula humana|bench_human]]."
      }
    },
    "pha.ch0.s1.01": {
      "en": {
        "pop": "Antibiotics fail completely against [[viruses|bench_virus]] because viruses lack bacterial structures.",
        "blueprint": "Antibacterial drugs score zero effect on [[viruses|bench_virus]] because none of their hardware targets exist.",
        "scientific": "Antibiotics are inert against [[viruses|bench_virus]] because acellular virions lack prokaryotic drug targets."
      },
      "es": {
        "pop": "Los antibióticos fallan por completo contra los [[virus|bench_virus]] porque carecen de estructuras bacterianas.",
        "blueprint": "Los antibacterianos tienen efecto cero en [[virus|bench_virus]] porque no poseen ninguno de sus blancos moleculares.",
        "scientific": "Los antibióticos son inertes frente a [[virus|bench_virus]] pues los viriones carecen de dianas procariotas."
      }
    },
    "pha.ch0.s1.02": {
      "en": {
        "pop": "SARS-CoV-2 and HIV-1 carry zero [[peptidoglycan wall|pg_wall]] and zero bacterial [[70S ribosomes|ribo_70s]].",
        "blueprint": "Viral genomes pack zero [[peptidoglycan armor|pg_wall]] and zero prokaryotic [[70S ribosome|ribo_70s]] builders.",
        "scientific": "Neither SARS-CoV-2 nor HIV-1 encodes a [[peptidoglycan wall|pg_wall]] or bacterial [[70S ribosomes|ribo_70s]]."
      },
      "es": {
        "pop": "SARS-CoV-2 y VIH-1 tienen cero [[pared de peptidoglicano|pg_wall]] y cero [[ribosomas 70S|ribo_70s]] bacterianos.",
        "blueprint": "Los virus carecen de [[coraza de peptidoglicano|pg_wall]] y de ensambladores procariotas [[70S|ribo_70s]].",
        "scientific": "Ni SARS-CoV-2 ni VIH-1 poseen [[pared de peptidoglicano|pg_wall]] ni [[ribosomas 70S|ribo_70s]] bacterianos."
      }
    },
    "pha.ch0.s1.03": {
      "en": {
        "pop": "Below the bench, four molecular stations reveal how each drug class matches one exact target.",
        "blueprint": "Below the organism rack, four molecular benches map each therapeutic class to its exact binding site.",
        "scientific": "Below, four structural stations resolve active-site drug binding across PDB 1PWC, 4V7U, 1HNW, 7BV2 and 3V4I."
      },
      "es": {
        "pop": "Debajo del banco, cuatro estaciones moleculares muestran cómo cada fármaco encaja en un blanco exacto.",
        "blueprint": "Bajo el panel celular, cuatro estaciones moleculares trazan cada clase de fármaco a su sitio de unión.",
        "scientific": "Abajo, cuatro estaciones muestran sitios activos en PDB 1PWC, 4V7U, 1HNW, 7BV2, 3V4I y vacunas ARNm-LNP."
      }
    },
    "pha.ch1.s0.01": {
      "en": {
        "pop": "Zoom to Station 1, where [[E. coli|bench_ecoli]] depends on a cross-linked [[peptidoglycan wall|pg_wall]].",
        "blueprint": "Station 1 focus: pressurized [[E. coli|bench_ecoli]] relies on a woven [[peptidoglycan shell|pg_wall]] for integrity.",
        "scientific": "At Station 1, Gram-negative [[E. coli|bench_ecoli]] maintains turgor via its periplasmic [[peptidoglycan|pg_wall]]."
      },
      "es": {
        "pop": "Acércate a la Estación 1, donde [[E. coli|bench_ecoli]] depende de una [[pared de peptidoglicano|pg_wall]] entrelazada.",
        "blueprint": "Estación 1: [[E. coli|bench_ecoli]] presurizada depende de su malla de [[peptidoglicano|pg_wall]] para no estallar.",
        "scientific": "En la Estación 1, [[E. coli|bench_ecoli]] Gram-negativa sostiene su turgencia con [[peptidoglicano|pg_wall]]."
      }
    },
    "pha.ch1.s0.02": {
      "en": {
        "pop": "Penicillin slips through outer porins to reach [[PBP transpeptidases|pbp_penicillin]] building that mesh.",
        "blueprint": "Penicillin diffuses via outer OmpF porins to intercept [[PBP builders|pbp_penicillin]] inside the periplasm.",
        "scientific": "Penicillin G crosses OmpF/OmpC porins to bind periplasmic [[PBP transpeptidases|pbp_penicillin]] (PDB 1PWC)."
      },
      "es": {
        "pop": "La penicilina cruza las porinas externas para llegar a las [[transpeptidasas PBP|pbp_penicillin]] de la malla.",
        "blueprint": "La penicilina entra por porinas OmpF para interceptar los módulos [[PBP|pbp_penicillin]] en el periplasma.",
        "scientific": "La penicilina G cruza porinas OmpF/OmpC y alcanza las [[transpeptidasas PBP|pbp_penicillin]] (PDB 1PWC)."
      }
    },
    "pha.ch1.s0.03": {
      "en": {
        "pop": "Normally, [[PBP|pbp_penicillin]] stitches peptide stems across [[peptidoglycan|pg_wall]] to hold 2 to 5 atm pressure.",
        "blueprint": "Normally, [[PBP|pbp_penicillin]] welds peptide cross-links in [[peptidoglycan|pg_wall]] against 2-5 atm turgor.",
        "scientific": "Native [[PBP|pbp_penicillin]] cross-links D-Ala-D-Ala stems in [[peptidoglycan|pg_wall]] resisting ~2-5 atm turgor."
      },
      "es": {
        "pop": "Normalmente, [[PBP|pbp_penicillin]] cose enlaces peptídicos en el [[peptidoglicano|pg_wall]] frente a 2-5 atm.",
        "blueprint": "En operación normal, [[PBP|pbp_penicillin]] suelda puentes en el [[peptidoglicano|pg_wall]] ante 2-5 atm internas.",
        "scientific": "La [[PBP|pbp_penicillin]] nativa entrelaza tallos D-Ala-D-Ala del [[peptidoglicano|pg_wall]] resistiendo ~2-5 atm."
      }
    },
    "pha.ch1.s1.01": {
      "en": {
        "pop": "Penicillin mimics D-Ala-D-Ala, entering the active site of [[PBP|pbp_penicillin]] with a strained ring.",
        "blueprint": "Penicillin spoofs the D-Ala-D-Ala substrate, slipping its stressed ring into the [[PBP|pbp_penicillin]] pocket.",
        "scientific": "Penicillin G's 4-membered beta-lactam ring mimics D-Ala-D-Ala inside the [[PBP|pbp_penicillin]] (1PWC) cleft."
      },
      "es": {
        "pop": "La penicilina imita D-Ala-D-Ala y entra en el sitio activo de [[PBP|pbp_penicillin]] con su anillo tenso.",
        "blueprint": "La penicilina imita el sustrato D-Ala-D-Ala y mete su anillo tenso en la cavidad de [[PBP|pbp_penicillin]].",
        "scientific": "El anillo beta-lactámico de 4 miembros imita D-Ala-D-Ala en el sitio activo de [[PBP|pbp_penicillin]] (1PWC)."
      }
    },
    "pha.ch1.s1.02": {
      "en": {
        "pop": "The catalytic serine opens that beta-lactam ring, locking [[PBP|pbp_penicillin]] in a covalent ester bond.",
        "blueprint": "Attack by active-site serine snaps the ring open, permanently welding [[PBP|pbp_penicillin]] offline.",
        "scientific": "Catalytic Ser O-gamma acylates the beta-lactam carbonyl, trapping [[PBP|pbp_penicillin]] as a stable acyl-ester."
      },
      "es": {
        "pop": "La serina catalítica abre el anillo beta-lactámico y traba a [[PBP|pbp_penicillin]] con un enlace covalente.",
        "blueprint": "El ataque de la serina activa abre el anillo y suelda permanentemente fuera de línea a [[PBP|pbp_penicillin]].",
        "scientific": "El O-gamma de la serina acila el carbonilo beta-lactámico, bloqueando a [[PBP|pbp_penicillin]] en acil-éster."
      }
    },
    "pha.ch1.s1.03": {
      "en": {
        "pop": "Autolysins keep nicking the [[wall|pg_wall]] with no repair, causing [[E. coli|bench_ecoli]] to burst osmotically.",
        "blueprint": "Unopposed autolysins perforate the [[wall|pg_wall]] until internal pressure ruptures [[E. coli|bench_ecoli]].",
        "scientific": "Continued autolysin cleavage without [[peptidoglycan|pg_wall]] repair triggers bactericidal lysis of [[E. coli|bench_ecoli]]."
      },
      "es": {
        "pop": "Las autolisinas siguen cortando la [[pared|pg_wall]] sin arreglo y [[E. coli|bench_ecoli]] estalla por ósmosis.",
        "blueprint": "Autolisinas sin freno perforan la [[pared|pg_wall]] hasta que la presión interna rompe a [[E. coli|bench_ecoli]].",
        "scientific": "La acción de autolisinas sin reparar el [[peptidoglicano|pg_wall]] causa lisis bactericida en [[E. coli|bench_ecoli]]."
      }
    },
    "pha.ch1.s2.01": {
      "en": {
        "pop": "Look at [[Mycoplasma|bench_myco]]: without any [[peptidoglycan wall|pg_wall]], penicillin cannot harm it.",
        "blueprint": "Inspect [[Mycoplasma|bench_myco]]: lacking a [[peptidoglycan wall|pg_wall]] entirely, penicillin passes harmlessly.",
        "scientific": "Wall-less [[Mycoplasma genitalium|bench_myco]] lacks [[peptidoglycan|pg_wall]] and PBPs, conferring beta-lactam resistance."
      },
      "es": {
        "pop": "Mira a [[Mycoplasma|bench_myco]]: al carecer de [[pared de peptidoglicano|pg_wall]], la penicilina no puede dañarla.",
        "blueprint": "Observa [[Mycoplasma|bench_myco]]: sin [[pared de peptidoglicano|pg_wall]], la penicilina pasa sin causar daño.",
        "scientific": "[[Mycoplasma genitalium|bench_myco]] carece de [[peptidoglicano|pg_wall]] y PBP, dando resistencia intrínseca."
      }
    },
    "pha.ch1.s2.02": {
      "en": {
        "pop": "Intracellular [[Chlamydia|bench_chlam]] only pauses division, while [[viruses|bench_virus]] feel zero effect.",
        "blueprint": "Intracellular [[Chlamydia|bench_chlam]] only stalls septal division, and [[viruses|bench_virus]] register zero impact.",
        "scientific": "[[Chlamydia|bench_chlam]] stalls septal rings reversibly, while acellular [[viruses|bench_virus]] show zero binding."
      },
      "es": {
        "pop": "La [[Chlamydia|bench_chlam]] intracelular solo pausa su división, y los [[virus|bench_virus]] no sienten ningún efecto.",
        "blueprint": "[[Chlamydia|bench_chlam]] interna solo frena su división septal y los [[virus|bench_virus]] registran impacto cero.",
        "scientific": "[[Chlamydia|bench_chlam]] detiene su anillo septal de modo reversible; los [[virus|bench_virus]] no sufren unión."
      }
    },
    "pha.ch1.s2.03": {
      "en": {
        "pop": "Because [[human cells|bench_human]] have no [[peptidoglycan|pg_wall]] or PBP, beta-lactams spare host tissues.",
        "blueprint": "Since [[human cells|bench_human]] build zero [[peptidoglycan|pg_wall]] or PBPs, host tissues stay untouched.",
        "scientific": "Eukaryotic [[human cells|bench_human]] lack [[peptidoglycan|pg_wall]] biosynthesis, yielding high beta-lactam safety."
      },
      "es": {
        "pop": "Como las [[células humanas|bench_human]] no tienen [[peptidoglicano|pg_wall]] ni PBP, los beta-lactámicos las respetan.",
        "blueprint": "Como las [[células humanas|bench_human]] no fabrican [[peptidoglicano|pg_wall]] ni PBP, el huésped queda intacto.",
        "scientific": "Las [[células humanas|bench_human]] carecen de biosíntesis de [[peptidoglicano|pg_wall]], dando alta seguridad."
      }
    },
    "pha.ch2.s0.01": {
      "en": {
        "pop": "Move to Station 2 comparing bacterial [[70S ribosomes|ribo_70s]] beside human cytosolic [[80S ribosomes|ribo_80s_safe]].",
        "blueprint": "Station 2 side-by-side: prokaryotic [[70S factories|ribo_70s]] next to human cytosolic [[80S builders|ribo_80s_safe]].",
        "scientific": "Station 2 contrasts bacterial [[70S ribosomes|ribo_70s]] (21 nm) against human cytosolic [[80S|ribo_80s_safe]] (4UG0)."
      },
      "es": {
        "pop": "Pasa a la Estación 2: compara [[ribosomas 70S|ribo_70s]] bacterianos junto a [[ribosomas 80S|ribo_80s_safe]] humanos.",
        "blueprint": "Estación 2 lado a lado: fábricas [[70S|ribo_70s]] procariotas frente a ensambladores [[80S|ribo_80s_safe]] humanos.",
        "scientific": "La Estación 2 contrasta [[ribosomas 70S|ribo_70s]] bacterianos (21 nm) con [[80S|ribo_80s_safe]] humanos (4UG0)."
      }
    },
    "pha.ch2.s0.02": {
      "en": {
        "pop": "Bacterial [[70S|ribo_70s]] builds from 50S and 30S subunits, whereas human [[80S|ribo_80s_safe]] uses larger 60S and 40S.",
        "blueprint": "Bacterial [[70S|ribo_70s]] stacks 50S+30S modules, while eukaryotic [[80S|ribo_80s_safe]] runs larger 60S+40S decks.",
        "scientific": "Prokaryotic [[70S|ribo_70s]] (50S+30S; 23S/16S rRNA) differs from human [[80S|ribo_80s_safe]] (60S+40S; 28S/18S rRNA)."
      },
      "es": {
        "pop": "El [[70S|ribo_70s]] bacteriano une subunidades 50S y 30S; el [[80S|ribo_80s_safe]] humano usa 60S y 40S más grandes.",
        "blueprint": "El [[70S|ribo_70s]] apila módulos 50S+30S, mientras el [[80S|ribo_80s_safe]] eucariota emplea bloques 60S+40S.",
        "scientific": "El [[70S|ribo_70s]] (50S+30S; ARNr 23S/16S) diverge del [[80S|ribo_80s_safe]] humano (60S+40S; ARNr 28S/18S)."
      }
    },
    "pha.ch2.s0.03": {
      "en": {
        "pop": "Atomic differences in rRNA pockets let antibiotics jam [[70S|ribo_70s]] while sparing human [[80S|ribo_80s_safe]].",
        "blueprint": "Divergent rRNA pocket tolerances let small drugs jam [[70S|ribo_70s]] ports while leaving [[80S|ribo_80s_safe]] open.",
        "scientific": "Nucleotide divergence (bacterial A2058 vs human G) locks drugs in [[70S|ribo_70s]] and spares [[80S|ribo_80s_safe]]."
      },
      "es": {
        "pop": "Diferencias atómicas en los bolsillos de ARNr bloquean [[70S|ribo_70s]] sin frenar al [[80S|ribo_80s_safe]] humano.",
        "blueprint": "Tolerancias distintas en los bolsillos de ARNr atascan puertos [[70S|ribo_70s]] y dejan libre al [[80S|ribo_80s_safe]].",
        "scientific": "La divergencia (A2058 bacteriana vs G humana) fija el fármaco en [[70S|ribo_70s]] y respeta [[80S|ribo_80s_safe]]."
      }
    },
    "pha.ch2.s1.01": {
      "en": {
        "pop": "Macrolides like azithromycin plug the 50S [[exit tunnel|macrolide_tunnel]] at 23S rRNA nucleotide A2058.",
        "blueprint": "Macrolide plugs wedge straight into the 50S [[peptide exit chute|macrolide_tunnel]] at 23S rRNA site A2058.",
        "scientific": "Erythromycin and azithromycin bind the 50S [[exit tunnel|macrolide_tunnel]] at 23S rRNA A2058 (PDB 4V7U)."
      },
      "es": {
        "pop": "Macrólidos como la azitromicina tapan el [[túnel de salida|macrolide_tunnel]] 50S en la base A2058 del ARNr 23S.",
        "blueprint": "Los macrólidos encajan en el [[conducto de salida|macrolide_tunnel]] 50S sobre el sitio A2058 del ARNr 23S.",
        "scientific": "Eritromicina y azitromicina obstruyen el [[túnel 50S|macrolide_tunnel]] en ARNr 23S A2058 (PDB 4V7U)."
      }
    },
    "pha.ch2.s1.02": {
      "en": {
        "pop": "With the [[exit tunnel|macrolide_tunnel]] jammed, growing bacterial peptide chains stall inside [[70S|ribo_70s]].",
        "blueprint": "Once the [[exit chute|macrolide_tunnel]] plugs shut, nascent protein extrusion halts across [[70S|ribo_70s]].",
        "scientific": "Steric obstruction of the [[50S tunnel|macrolide_tunnel]] arrests nascent peptide elongation in [[70S|ribo_70s]]."
      },
      "es": {
        "pop": "Con el [[túnel de salida|macrolide_tunnel]] tapado, las cadenas peptídicas bacterianas se frenan en el [[70S|ribo_70s]].",
        "blueprint": "Al obstruirse el [[conducto de salida|macrolide_tunnel]], se detiene la extrusión proteica dentro del [[70S|ribo_70s]].",
        "scientific": "La obstrucción estérica del [[túnel 50S|macrolide_tunnel]] frena la elongación naciente en [[70S|ribo_70s]]."
      }
    },
    "pha.ch2.s1.03": {
      "en": {
        "pop": "Meanwhile, tetracycline occupies the 30S [[A-site|tetra_asite]], blocking incoming aminoacyl-tRNA docking.",
        "blueprint": "Separately, tetracycline parks inside the 30S [[A-site decoder|tetra_asite]], rejecting fresh aminoacyl-tRNA input.",
        "scientific": "Tetracycline (PDB 1HNW) chelates Mg2+ in the 30S 16S rRNA [[A-site|tetra_asite]], blocking aminoacyl-tRNA."
      },
      "es": {
        "pop": "Mientras tanto, la tetraciclina ocupa el [[sitio A|tetra_asite]] 30S e impide acoplar nuevos aminoacil-ARNt.",
        "blueprint": "Por su parte, la tetraciclina bloquea el [[decodificador sitio A|tetra_asite]] 30S rechazando cada aminoacil-ARNt.",
        "scientific": "La tetraciclina (PDB 1HNW) quela Mg2+ en el [[sitio A|tetra_asite]] 16S del 30S bloqueando aminoacil-ARNt."
      }
    },
    "pha.ch2.s2.01": {
      "en": {
        "pop": "[[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] and [[Chlamydia|bench_chlam]] all rely on bacterial [[70S|ribo_70s]] translation.",
        "blueprint": "All three bacteria - [[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] and [[Chlamydia|bench_chlam]] - run on [[70S|ribo_70s]].",
        "scientific": "Free-living [[E. coli|bench_ecoli]], minimal [[Mycoplasma|bench_myco]] and [[Chlamydia|bench_chlam]] share [[70S|ribo_70s]]."
      },
      "es": {
        "pop": "[[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] y [[Chlamydia|bench_chlam]] dependen de la traducción en [[70S|ribo_70s]].",
        "blueprint": "Las tres bacterias ([[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] y [[Chlamydia|bench_chlam]]) usan [[70S|ribo_70s]].",
        "scientific": "[[E. coli|bench_ecoli]], [[Mycoplasma|bench_myco]] mínima y [[Chlamydia|bench_chlam]] comparten ribosomas [[70S|ribo_70s]]."
      }
    },
    "pha.ch2.s2.02": {
      "en": {
        "pop": "Targeting [[70S|ribo_70s]] halts all three bacteria, even wall-less [[Mycoplasma|bench_myco]] untouched by penicillin.",
        "blueprint": "Locking [[70S|ribo_70s]] stops all three bacterial lines, overcoming wall-less [[Mycoplasma|bench_myco]] resistance.",
        "scientific": "Inhibiting [[70S|ribo_70s]] translation clears all three, including beta-lactam-resistant [[Mycoplasma|bench_myco]]."
      },
      "es": {
        "pop": "Atacar el [[70S|ribo_70s]] frena las tres bacterias, incluso a [[Mycoplasma|bench_myco]] inmune a la penicilina.",
        "blueprint": "Bloquear el [[70S|ribo_70s]] detiene los tres linajes, venciendo a [[Mycoplasma|bench_myco]] sin pared celular.",
        "scientific": "Inhibir el [[70S|ribo_70s]] bloquea a las tres, incluida [[Mycoplasma|bench_myco]] resistente a beta-lactámicos."
      }
    },
    "pha.ch2.s2.03": {
      "en": {
        "pop": "Human [[80S ribosomes|ribo_80s_safe]] inside [[host cells|bench_human]] keep running, and [[viruses|bench_virus]] stay untouched.",
        "blueprint": "Cytosolic [[80S units|ribo_80s_safe]] in [[human cells|bench_human]] keep running; [[viruses|bench_virus]] feel zero effect.",
        "scientific": "Human [[80S|ribo_80s_safe]] (4UG0) inside [[host cells|bench_human]] keeps translating, while [[viruses|bench_virus]] lack 70S."
      },
      "es": {
        "pop": "Los [[ribosomas 80S|ribo_80s_safe]] en [[células humanas|bench_human]] siguen activos y los [[virus|bench_virus]] quedan intactos.",
        "blueprint": "Los [[bloques 80S|ribo_80s_safe]] de [[células humanas|bench_human]] siguen operando; los [[virus|bench_virus]] no cambian.",
        "scientific": "Los [[80S|ribo_80s_safe]] (4UG0) de [[células humanas|bench_human]] siguen traduciendo y [[virus|bench_virus]] carecen de 70S."
      }
    },
    "pha.ch3.s0.01": {
      "en": {
        "pop": "To stop [[viruses|bench_virus]] without harming [[human cells|bench_human]], antivirals target uniquely viral enzymes.",
        "blueprint": "Stopping [[viruses|bench_virus]] safely around [[human cells|bench_human]] requires targeting virus-only hardware.",
        "scientific": "Direct-acting antivirals inhibit [[viral|bench_virus]] enzymes absent from [[human host cells|bench_human]]."
      },
      "es": {
        "pop": "Para frenar [[virus|bench_virus]] sin dañar [[células humanas|bench_human]], los antivirales atacan enzimas solo virales.",
        "blueprint": "Frenar [[virus|bench_virus]] sin tocar [[células humanas|bench_human]] exige atacar maquinaria exclusiva del virus.",
        "scientific": "Los antivirales directos inhiben enzimas [[virales|bench_virus]] ausentes en las [[células humanas|bench_human]]."
      }
    },
    "pha.ch3.s0.02": {
      "en": {
        "pop": "SARS-CoV-2 copies RNA using [[RdRp|rdrp_remdesivir]], an RNA-dependent polymerase absent from human cells.",
        "blueprint": "SARS-CoV-2 replicates its RNA genome via [[RdRp|rdrp_remdesivir]], a copying engine human cells do not build.",
        "scientific": "SARS-CoV-2 replicates RNA with [[RdRp|rdrp_remdesivir]] (nsp12-nsp7-nsp8, PDB 7BV2), absent in humans."
      },
      "es": {
        "pop": "SARS-CoV-2 copia su ARN con [[RdRp|rdrp_remdesivir]], una polimerasa de ARN ausente en células humanas.",
        "blueprint": "SARS-CoV-2 replica su genoma ARN con el motor [[RdRp|rdrp_remdesivir]], ausente en la arquitectura humana.",
        "scientific": "SARS-CoV-2 replica ARN con [[RdRp|rdrp_remdesivir]] (nsp12-nsp7-nsp8, PDB 7BV2), ausente en humanos."
      }
    },
    "pha.ch3.s0.03": {
      "en": {
        "pop": "HIV-1 converts viral RNA into DNA using [[HIV-1 Reverse Transcriptase|hiv_rt_azt]], another unique target.",
        "blueprint": "HIV-1 writes viral RNA backward into DNA via [[HIV-1 RT|hiv_rt_azt]], offering a second virus-only chokepoint.",
        "scientific": "Retroviral [[HIV-1 Reverse Transcriptase|hiv_rt_azt]] (p66/p51, PDB 3V4I) reverse-transcribes viral RNA to DNA."
      },
      "es": {
        "pop": "VIH-1 convierte ARN viral en ADN usando [[Transcriptasa Inversa VIH-1|hiv_rt_azt]], otro blanco exclusivo.",
        "blueprint": "VIH-1 escribe ARN viral en ADN con [[RT de VIH-1|hiv_rt_azt]], creando otro punto de control solo viral.",
        "scientific": "La [[Transcriptasa Inversa VIH-1|hiv_rt_azt]] (p66/p51, PDB 3V4I) retrotranscribe el ARN viral en ADN."
      }
    },
    "pha.ch3.s1.01": {
      "en": {
        "pop": "Host kinases phosphorylate antiviral prodrugs into nucleoside triphosphates accepted by viral enzymes.",
        "blueprint": "Human cellular kinases charge prodrugs into active triphosphate mimics that viral polymerases pull in.",
        "scientific": "Intracellular host kinases convert prodrugs into active nucleoside triphosphates for viral incorporation."
      },
      "es": {
        "pop": "Las quinasas del huésped fosforilan profármacos antivirales en trifosfatos que aceptan las enzimas virales.",
        "blueprint": "Quinasas celulares cargan los profármacos en imitadores trifosfato que las polimerasas virales incorporan.",
        "scientific": "Quinasas intracelulares fosforilan profármacos a nucleósidos trifosfato activos para polimerasas virales."
      }
    },
    "pha.ch3.s1.02": {
      "en": {
        "pop": "Nucleoside analogs stall [[RdRp|rdrp_remdesivir]] and [[HIV-1 RT|hiv_rt_azt]] like a defective rail tie missing its clasp.",
        "blueprint": "Nucleoside analogs jam [[RdRp|rdrp_remdesivir]] and [[HIV-1 RT|hiv_rt_azt]] by breaking downstream chain linkage.",
        "scientific": "Triphosphate analogs incorporate into [[RdRp|rdrp_remdesivir]] (7BV2) and [[HIV-1 RT|hiv_rt_azt]] (3V4I), halting chains."
      },
      "es": {
        "pop": "Los análogos frenan [[RdRp|rdrp_remdesivir]] y [[RT VIH-1|hiv_rt_azt]] como un durmiente defectuoso sin enganche.",
        "blueprint": "Los análogos nucleosídicos bloquean [[RdRp|rdrp_remdesivir]] y [[RT VIH-1|hiv_rt_azt]] al cortar el enlace siguiente.",
        "scientific": "Los trifosfatos análogos se incorporan en [[RdRp|rdrp_remdesivir]] (7BV2) y [[RT VIH-1|hiv_rt_azt]] (3V4I) frenándolas."
      }
    },
    "pha.ch3.s1.03": {
      "en": {
        "pop": "Because viral enzymes incorporate these mimics faster than host polymerases, replication drops sharply.",
        "blueprint": "Higher viral uptake selectivity throttles genome copying rapidly while leaving host transcription steady.",
        "scientific": "Preferential viral kcat/Km incorporation suppresses viral load orders of magnitude below host toxicity."
      },
      "es": {
        "pop": "Como las enzimas virales incorporan estos imitadores más rápido que las humanas, la replicación cae rápido.",
        "blueprint": "La mayor selectividad viral frena el copiado genómico sin interrumpir la transcripción nuclear del huésped.",
        "scientific": "La mayor kcat/Km viral reduce la carga viral varios órdenes de magnitud bajo la toxicidad del huésped."
      }
    },
    "pha.ch3.s2.01": {
      "en": {
        "pop": "In SARS-CoV-2 [[RdRp|rdrp_remdesivir]], Remdesivir triggers an i+3 stall when its 1-prime-CN hits Ser861.",
        "blueprint": "In [[RdRp|rdrp_remdesivir]], Remdesivir adds 3 bases then hard-locks as its 1-prime-CN collides with Ser861.",
        "scientific": "In [[RdRp|rdrp_remdesivir]] (PDB 7BV2), Remdesivir-TP causes i+3 delayed arrest via 1-prime-CN vs Ser861 clash."
      },
      "es": {
        "pop": "En la [[RdRp|rdrp_remdesivir]] del SARS-CoV-2, remdesivir frena en i+3 cuando su grupo 1-prima-CN choca con Ser861.",
        "blueprint": "En [[RdRp|rdrp_remdesivir]], remdesivir suma 3 bases y se traba al chocar su grupo 1-prima-CN contra Ser861.",
        "scientific": "En [[RdRp|rdrp_remdesivir]] (7BV2), remdesivir-TP induce parada diferida i+3 por choque 1-prima-CN con Ser861."
      }
    },
    "pha.ch3.s2.02": {
      "en": {
        "pop": "In [[HIV-1 RT|hiv_rt_azt]], AZT-TP lacks a 3-prime-OH group, causing immediate obligate DNA chain termination.",
        "blueprint": "In [[HIV-1 RT|hiv_rt_azt]], AZT-TP replaces 3-prime-OH with azide, stopping DNA extension on the spot.",
        "scientific": "In [[HIV-1 RT|hiv_rt_azt]] (PDB 3V4I), 3-prime-azido AZT-TP lacks a 3-prime-OH nucleophile for immediate termination."
      },
      "es": {
        "pop": "En [[RT de VIH-1|hiv_rt_azt]], AZT-TP carece del grupo 3-prima-OH y corta al instante la cadena de ADN.",
        "blueprint": "En [[RT de VIH-1|hiv_rt_azt]], AZT-TP cambia el 3-prima-OH por azida y detiene el ADN en el acto.",
        "scientific": "En [[RT VIH-1|hiv_rt_azt]] (3V4I), AZT-TP 3-prima-azido carece de nucleófilo 3-prima-OH y termina la cadena."
      }
    },
    "pha.ch3.s2.03": {
      "en": {
        "pop": "Proofreading nuclear polymerases in [[human cells|bench_human]] discriminate against both analogs to stay safe.",
        "blueprint": "Error-checking nuclear engines in [[human cells|bench_human]] reject both decoys, preserving host genome fidelity.",
        "scientific": "High-fidelity nuclear polymerases in [[human cells|bench_human]] discriminate and proofread against both drugs."
      },
      "es": {
        "pop": "Las polimerasas nucleares con corrección en [[células humanas|bench_human]] rechazan ambos análogos con seguridad.",
        "blueprint": "Los motores nucleares con verificación en [[células humanas|bench_human]] descartan ambos señuelos químicos.",
        "scientific": "Las polimerasas nucleares de alta fidelidad en [[células humanas|bench_human]] discriminan ambos análogos."
      }
    },
    "pha.ch4.s0.01": {
      "en": {
        "pop": "Station 4 shows a 90 nm [[mRNA-LNP|mrna_lnp]] vaccine delivering spike instructions with zero live virus.",
        "blueprint": "Station 4 tracks a 90 nm [[mRNA-LNP|mrna_lnp]] capsule shipping pure spike code without any infectious virus.",
        "scientific": "Station 4 resolves an ~80-100 nm ionizable [[mRNA-LNP|mrna_lnp]] delivering prefusion 2P spike mRNA safely."
      },
      "es": {
        "pop": "La Estación 4 muestra una vacuna [[ARNm-LNP|mrna_lnp]] de 90 nm que lleva código de espícula sin virus vivo.",
        "blueprint": "La Estación 4 sigue una cápsula [[ARNm-LNP|mrna_lnp]] de 90 nm enviando código de espícula sin virus activo.",
        "scientific": "La Estación 4 muestra una [[ARNm-LNP|mrna_lnp]] ionizable (~90 nm) portando ARNm de espícula 2P sin virus."
      }
    },
    "pha.ch4.s0.02": {
      "en": {
        "pop": "Inside an acidifying endosome at pH 6.0, ionizable lipids trigger [[endosome escape|endosome_escape]].",
        "blueprint": "As endosomal pH drops to 6.0, protonated LNP lipids fuse the shell for rapid [[endosome escape|endosome_escape]].",
        "scientific": "Endosomal acidification (pH ~6.0) protonates ionizable lipids, driving bilayer disruption and [[escape|endosome_escape]]."
      },
      "es": {
        "pop": "Dentro de un endosoma ácido a pH 6,0, los lípidos ionizables activan el [[escape endosomal|endosome_escape]].",
        "blueprint": "Al bajar el pH endosomal a 6,0, los lípidos protonados abren la envoltura para el [[escape|endosome_escape]].",
        "scientific": "La acidificación endosomal (pH ~6,0) protona lípidos ionizables e induce el [[escape endosomal|endosome_escape]]."
      }
    },
    "pha.ch4.s0.03": {
      "en": {
        "pop": "Capped, m1-pseudouridine-modified [[vaccine mRNA|vaccine_mrna]] releases straight into the open cytosol.",
        "blueprint": "Capped, stabilized [[vaccine mRNA|vaccine_mrna]] unloads directly into the open cytosolic translation bay.",
        "scientific": "5-prime-capped, poly-A, m1-pseudouridine [[vaccine mRNA|vaccine_mrna]] enters cytosol while avoiding TLR7/8."
      },
      "es": {
        "pop": "El [[ARNm vacunal|vaccine_mrna]] con caperuza y m1-pseudouridina se libera directo al citosol abierto.",
        "blueprint": "El [[ARNm vacunal|vaccine_mrna]] estabilizado se descarga directo en la zona citosólica de traducción.",
        "scientific": "El [[ARNm vacunal|vaccine_mrna]] con cap 5-prima, poli-A y m1-pseudouridina entra al citosol evitando TLR7/8."
      }
    },
    "pha.ch4.s1.01": {
      "en": {
        "pop": "Notice the glowing [[intact nucleus|intact_nucleus]]: [[vaccine mRNA|vaccine_mrna]] never enters or alters host DNA.",
        "blueprint": "Observe the sealed [[nuclear firewall|intact_nucleus]]: [[vaccine mRNA|vaccine_mrna]] stays outside, never editing DNA.",
        "scientific": "The [[intact nuclear envelope|intact_nucleus]] bars [[vaccine mRNA|vaccine_mrna]] from nuclear entry or DNA integration."
      },
      "es": {
        "pop": "Observa el [[núcleo intacto|intact_nucleus]]: el [[ARNm vacunal|vaccine_mrna]] nunca entra ni altera el ADN humano.",
        "blueprint": "Mira el [[muro nuclear intacto|intact_nucleus]]: el [[ARNm vacunal|vaccine_mrna]] queda fuera sin tocar el ADN.",
        "scientific": "La [[envoltura nuclear intacta|intact_nucleus]] impide que el [[ARNm vacunal|vaccine_mrna]] entre o modifique ADN."
      }
    },
    "pha.ch4.s1.02": {
      "en": {
        "pop": "[[Vaccine mRNA|vaccine_mrna]] is a temporary practice blueprint for [[80S ribosomes|ribo_80s_safe]] that dissolves after training.",
        "blueprint": "Transient [[vaccine mRNA|vaccine_mrna]] feeds cytosolic [[80S builders|ribo_80s_safe]] spike specs, then auto-clears.",
        "scientific": "Cytosolic [[vaccine mRNA|vaccine_mrna]] is translated by human [[80S ribosomes|ribo_80s_safe]] (4UG0) into 2P Spike."
      },
      "es": {
        "pop": "El [[ARNm vacunal|vaccine_mrna]] es un plano temporal para [[ribosomas 80S|ribo_80s_safe]] que se disuelve tras entrenar.",
        "blueprint": "El [[ARNm vacunal|vaccine_mrna]] pasa planos de espícula a los [[80S|ribo_80s_safe]] citosólicos y luego se depura.",
        "scientific": "El [[ARNm vacunal|vaccine_mrna]] citosólico es traducido por [[ribosomas 80S|ribo_80s_safe]] (4UG0) en espícula 2P."
      }
    },
    "pha.ch4.s1.03": {
      "en": {
        "pop": "Displayed spike peptides prime lasting B-cell IgG and T-cell memory while RNases clear [[mRNA|vaccine_mrna]].",
        "blueprint": "Exported spike antigens train B-cell IgG and T-cell memory while host RNases wipe [[mRNA|vaccine_mrna]] within days.",
        "scientific": "MHC-I and MHC-II spike display primes B/T memory while cytosolic RNases degrade [[vaccine mRNA|vaccine_mrna]]."
      },
      "es": {
        "pop": "La espícula presentada entrena memoria de IgG y linfocitos T mientras las ARNasas borran el [[ARNm|vaccine_mrna]].",
        "blueprint": "Los antígenos entrenan memoria B y T duradera mientras las ARNasas reciclan el [[ARNm|vaccine_mrna]] en días.",
        "scientific": "La presentación en MHC-I y MHC-II genera memoria B y T mientras ARNasas degradan el [[ARNm|vaccine_mrna]]."
      }
    },
    "pha.ch4.s2.01": {
      "en": {
        "pop": "In [[drug atoms|drug_atoms]], see the 1.35 A [[PBP|pbp_penicillin]] ester bond, 3-prime-OH-less AZT and m1-pseudouridine.",
        "blueprint": "In [[atomic detail|drug_atoms]], inspect the 1.35 A [[PBP|pbp_penicillin]] lock, 3-prime-azido AZT and m1-pseudouridine.",
        "scientific": "At 0.1-0.2 nm, [[drug atoms|drug_atoms]] resolve the 1.35 A [[PBP|pbp_penicillin]] Ser ester, AZT-TP and m1-Psi."
      },
      "es": {
        "pop": "En [[átomos de fármaco|drug_atoms]], ve el enlace [[PBP|pbp_penicillin]] de 1,35 A, AZT sin 3-prima-OH y m1-pseudouridina.",
        "blueprint": "En [[detalle atómico|drug_atoms]], audita la soldadura [[PBP|pbp_penicillin]] (1,35 A), AZT azida y m1-pseudouridina.",
        "scientific": "A 0,1-0,2 nm, [[átomos de fármaco|drug_atoms]] muestran el éster [[PBP|pbp_penicillin]] (1,35 A), AZT-TP y m1-Psi."
      }
    },
    "pha.ch4.s2.02": {
      "en": {
        "pop": "Cycle all four drug modes to compare live effects across [[E. coli|bench_ecoli]], [[viruses|bench_virus]] and [[human|bench_human]].",
        "blueprint": "Switch all four drug presets to test live outcomes on [[E. coli|bench_ecoli]], [[viruses|bench_virus]] and [[human|bench_human]].",
        "scientific": "Cycle the four drug classes to audit live selectivity across [[E. coli|bench_ecoli]], [[viruses|bench_virus]] and [[human|bench_human]]."
      },
      "es": {
        "pop": "Alterna los cuatro modos de fármacos para comparar [[E. coli|bench_ecoli]], [[virus|bench_virus]] y [[célula humana|bench_human]].",
        "blueprint": "Prueba los cuatro fármacos y mide en vivo resultados en [[E. coli|bench_ecoli]], [[virus|bench_virus]] y [[humano|bench_human]].",
        "scientific": "Alterna las cuatro clases para auditar selectividad en [[E. coli|bench_ecoli]], [[virus|bench_virus]] y [[humano|bench_human]]."
      }
    },
    "pha.ch4.s2.03": {
      "en": {
        "pop": "Intro Biology Capstone Complete: from atoms and cells to immunity and [[mRNA-LNP|mrna_lnp]] medicine.",
        "blueprint": "Intro Biology Capstone Complete: full-stack biology from 0.1 nm atoms to [[mRNA-LNP|mrna_lnp]] therapeutics.",
        "scientific": "Intro Biology Capstone Complete: spanning atomic bonds, cellular nanomachines, immunity and [[mRNA-LNP|mrna_lnp]]."
      },
      "es": {
        "pop": "Cierre de Biología Introductoria completo: de átomos y células a la inmunidad y vacunas [[ARNm-LNP|mrna_lnp]].",
        "blueprint": "Cierre de Biología completo: arquitectura total desde átomos de 0,1 nm hasta terapias [[ARNm-LNP|mrna_lnp]].",
        "scientific": "Cierre de Biología Introductoria completo: de enlaces atómicos e inmunidad a vacunas [[ARNm-LNP|mrna_lnp]]."
      }
    }
  }
};
