import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 17 (`real-neuron` & `real-muscle`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - `real-neuron`: 40 of 42 cues (95.2%) match base `cue.text` verbatim in `en.pop` with
 *   direct, distraction-free biological prose. Exactly 2 cues use purposeful everyday mental models:
 *   1. `neu.ch2.s0.02` - Myelin letting action potentials hop between Nodes of Ranvier like an express train skipping local stops.
 *   2. `neu.ch3.s1.02` - Complementary SNARE proteins pulling vesicle and terminal membranes together like a mechanical zipper.
 * - `real-muscle`: 40 of 42 cues (95.2%) match base `cue.text` verbatim in `en.pop`.
 *   Exactly 2 cues use purposeful everyday mental models:
 *   1. `mus.ch2.s1.02` - Tropomyosin acting as a sliding safety cover over actin tracks until Ca2+ twists troponin and rolls it aside.
 *   2. `mus.ch3.s1.02` - Staggered myosin heads pulling actin hand-over-hand like a tug-of-war crew without letting the rope slip.
 */
export const PERSONAS_SPECIALIZED_CELLS: TourPersonaMap = {
  "real-neuron": {
    "neu.ch0.s0.01": {
      "en": {
        "pop": "This neuron carries the same 6.4 Gbp DNA as every human cell, sculpted from [[dendrites|dendrites]] to [[bouton|terminal_bouton]].",
        "blueprint": "Same 6.4 Gbp firmware compiled into a high-speed relay from [[dendrite inputs|dendrites]] to [[bouton|terminal_bouton]] output.",
        "scientific": "Holding the identical 6.4 Gbp diploid genome, this multipolar neuron polarizes [[dendrites|dendrites]] to [[bouton|terminal_bouton]]."
      },
      "es": {
        "pop": "Esta neurona lleva el mismo ADN de 6,4 Gbp que toda célula humana, moldeada de [[dendritas|dendrites]] al [[botón|terminal_bouton]].",
        "blueprint": "El mismo firmware de 6,4 Gbp compilado en un relé veloz desde [[dendritas|dendrites]] hasta el [[botón|terminal_bouton]].",
        "scientific": "Con el mismo genoma diploide de 6,4 Gbp, esta neurona multipolar polariza [[dendritas|dendrites]] al [[botón|terminal_bouton]]."
      }
    },
    "neu.ch0.s0.02": {
      "en": {
        "pop": "Signals enter branching [[dendrites|dendrites]], sum in the [[soma|soma]], and race along a myelinated axon.",
        "blueprint": "Inputs arrive at branched [[dendrite ports|dendrites]], sum in the [[soma hub|soma]], and fire down a shielded axon line.",
        "scientific": "Postsynaptic potentials enter [[dendrites|dendrites]], integrate in the [[soma|soma]], and propagate down a myelinated axon."
      },
      "es": {
        "pop": "Las señales entran por [[dendritas|dendrites]] ramificadas, se suman en el [[soma|soma]] y corren por el axón.",
        "blueprint": "Las entradas llegan a [[dendritas|dendrites]], se suman en el [[nodo soma|soma]] y salen por la línea axonal aislada.",
        "scientific": "Los potenciales entran en [[dendritas|dendrites]], se integran en el [[soma|soma]] y viajan por el axón mielinizado."
      }
    },
    "neu.ch0.s0.03": {
      "en": {
        "pop": "Differential gene regulation inside the [[soma|soma]] builds ion channels and synapses without altering DNA.",
        "blueprint": "Selective gene bootloaders inside the [[soma|soma]] fabricate channels and relays while leaving DNA unchanged.",
        "scientific": "Cell-type transcriptional programs in the [[soma|soma]] synthesize channels and synaptic proteins with unchanged DNA."
      },
      "es": {
        "pop": "La regulación génica diferencial en el [[soma|soma]] fabrica canales iónicos y sinapsis sin alterar el ADN.",
        "blueprint": "La activación selectiva en el [[soma|soma]] ensambla canales y relés manteniendo intacta la secuencia del ADN.",
        "scientific": "Programas transcripcionales del [[soma|soma]] expresan canales y maquinaria sináptica sin mutar el ADN."
      }
    },
    "neu.ch0.s1.01": {
      "en": {
        "pop": "Zoom into the [[soma nucleus|nucleus_h3k27ac]], where histone marks control which parts of the 6.4 Gbp genome open.",
        "blueprint": "Inspect the [[soma control core|nucleus_h3k27ac]] where epigenetic flags unlock specific sectors of 6.4 Gbp code.",
        "scientific": "Inside the [[soma nucleus|nucleus_h3k27ac]], histone modifications on nucleosomes (1AOI) gate 6.4 Gbp DNA access."
      },
      "es": {
        "pop": "Acércate al [[núcleo del soma|nucleus_h3k27ac]], donde marcas en histonas controlan qué zonas de 6,4 Gbp se abren.",
        "blueprint": "Inspecciona el [[núcleo central|nucleus_h3k27ac]] donde banderas epigenéticas abren sectores clave del código de 6,4 Gbp.",
        "scientific": "En el [[núcleo somático|nucleus_h3k27ac]], marcas en nucleosomas (PDB 1AOI) regulan el acceso a los 6,4 Gbp."
      }
    },
    "neu.ch0.s1.02": {
      "en": {
        "pop": "Active H3K27ac tags loosen [[euchromatin|nucleus_h3k27ac]] to express neuronal SCN9A sodium channels and SYT1.",
        "blueprint": "Green H3K27ac enable flags unpack [[euchromatin|nucleus_h3k27ac]] to compile neuronal SCN9A channels and SYT1 sensors.",
        "scientific": "Acetylated H3K27ac decondenses [[euchromatin|nucleus_h3k27ac]], recruiting Pol II to neuronal SCN9A and SYT1 loci."
      },
      "es": {
        "pop": "Las marcas activas H3K27ac relajan la [[eucromatina|nucleus_h3k27ac]] para expresar canales SCN9A y SYT1 neuronales.",
        "blueprint": "Las etiquetas H3K27ac abren la [[eucromatina|nucleus_h3k27ac]] para compilar canales SCN9A y sensores SYT1 neuronales.",
        "scientific": "La acetilación H3K27ac abre [[eucromatina|nucleus_h3k27ac]] y recluta Pol II hacia los loci neuronales SCN9A y SYT1."
      }
    },
    "neu.ch0.s1.03": {
      "en": {
        "pop": "Meanwhile, compact H3K27me3 chromatin in the [[nucleus|nucleus_h3k27ac]] silences muscle MYH1 and blood HBB.",
        "blueprint": "In parallel, violet H3K27me3 locks inside the [[nucleus|nucleus_h3k27ac]] mute muscle MYH1 and blood HBB code.",
        "scientific": "Concurrently, H3K27me3 heterochromatin inside the [[nucleus|nucleus_h3k27ac]] represses myocyte MYH1 and erythroid HBB."
      },
      "es": {
        "pop": "Mientras tanto, la cromatina compacta H3K27me3 en el [[núcleo|nucleus_h3k27ac]] silencia MYH1 muscular y HBB sanguíneo.",
        "blueprint": "En paralelo, los bloqueos H3K27me3 del [[núcleo|nucleus_h3k27ac]] apagan los módulos MYH1 muscular y HBB hemático.",
        "scientific": "En paralelo, la heterocromatina H3K27me3 en el [[núcleo|nucleus_h3k27ac]] reprime los genes MYH1 y HBB ajenos."
      }
    },
    "neu.ch1.s0.01": {
      "en": {
        "pop": "Branching [[dendrites|dendrites]] bristle with tiny spines that receive chemical signals from upstream neurons.",
        "blueprint": "Multi-channel [[dendrite trees|dendrites]] deploy hundreds of spine receptors polling upstream synaptic outputs.",
        "scientific": "Arborized [[dendrites|dendrites]] carry micron-scale spines hosting postsynaptic densities for upstream inputs."
      },
      "es": {
        "pop": "Las [[dendritas|dendrites]] ramificadas portan espinas diminutas que reciben señales químicas de neuronas previas.",
        "blueprint": "Los árboles de [[dendritas|dendrites]] despliegan cientos de puertos receptores que muestrean sinapsis previas.",
        "scientific": "Las [[dendritas|dendrites]] arborizadas exhiben espinas con densidades postsinápticas para entradas aferentes."
      }
    },
    "neu.ch1.s0.02": {
      "en": {
        "pop": "Ion entry across [[dendritic|dendrites]] membranes creates brief graded voltages that spread toward the [[soma|soma]].",
        "blueprint": "Ion currents through [[dendrite|dendrites]] gates inject analog voltage ripples routed inward to the [[soma|soma]].",
        "scientific": "Ligand-gated flux across [[dendritic|dendrites]] arbors drives electrotonic EPSPs conducting toward the [[soma|soma]]."
      },
      "es": {
        "pop": "La entrada iónica en membranas [[dendríticas|dendrites]] genera voltajes graduados que viajan hacia el [[soma|soma]].",
        "blueprint": "Las corrientes iónicas en [[dendritas|dendrites]] inyectan pulsos analógicos dirigidos hacia el [[soma|soma]].",
        "scientific": "El flujo iónico en [[dendritas|dendrites]] produce potenciales electrotónicos que difunden hacia el [[soma|soma]]."
      }
    },
    "neu.ch1.s0.03": {
      "en": {
        "pop": "Excitatory inputs push voltage upward while inhibitory inputs pull the [[dendrites|dendrites]] further negative.",
        "blueprint": "Positive EPSP bias raises rail voltage while inhibitory IPSP clamps pull [[dendrite|dendrites]] potential down.",
        "scientific": "Na+/Ca2+ EPSPs depolarize while Cl-/K+ IPSPs hyperpolarize the resting [[dendritic|dendrites]] membrane potential."
      },
      "es": {
        "pop": "Las entradas excitadoras suben el voltaje mientras las inhibidoras tornan más negativas las [[dendritas|dendrites]].",
        "blueprint": "Las señales excitadoras elevan el potencial y los frenos inhibidores hunden el voltaje en [[dendritas|dendrites]].",
        "scientific": "Los EPSP de Na+ despolarizan mientras los IPSP de Cl-/K+ hiperpolarizan las [[dendritas|dendrites]] receptoras."
      }
    },
    "neu.ch1.s1.01": {
      "en": {
        "pop": "The [[soma|soma]] sums thousands of overlapping synaptic currents arriving across space and milliseconds.",
        "blueprint": "Analog adder [[soma|soma]] performs live spatial and temporal summation across thousands of incoming feeds.",
        "scientific": "The [[soma|soma]] executes spatial and temporal summation of convergent postsynaptic currents over milliseconds."
      },
      "es": {
        "pop": "El [[soma|soma]] suma miles de corrientes sinápticas superpuestas que llegan en el espacio y en milisegundos.",
        "blueprint": "El sumador analógico del [[soma|soma]] integra en tiempo real miles de corrientes espaciales y temporales.",
        "scientific": "El [[soma|soma]] ejecuta sumación espacial y temporal de miles de corrientes postsinápticas convergentes."
      }
    },
    "neu.ch1.s1.02": {
      "en": {
        "pop": "Its rough ER and Golgi pack channels and enzymes inside the [[cell body|soma]] for long-range axon export.",
        "blueprint": "Manufacturing bays in the [[cell body|soma]] assemble ion channels, enzymes and vesicles for axon shipping.",
        "scientific": "Nissl rough ER and Golgi stacks in the [[soma|soma]] synthesize channels and vesicle proteins for axonal transport."
      },
      "es": {
        "pop": "Su RE rugoso y Golgi empacan canales y enzimas en el [[cuerpo celular|soma]] para enviarlos por el axón.",
        "blueprint": "Las plantas de síntesis del [[cuerpo celular|soma]] ensamblan canales y vesículas listos para envío axonal.",
        "scientific": "El retículo de Nissl y el Golgi del [[soma|soma]] sintetizan canales y proteínas para transporte axonal."
      }
    },
    "neu.ch1.s1.03": {
      "en": {
        "pop": "All integrated voltage shifts funnel from the [[soma|soma]] into the narrow cone of the [[axon hillock|axon_hillock]].",
        "blueprint": "Summed analog potential routes out of the [[soma|soma]] directly into the trigger comparator [[axon hillock|axon_hillock]].",
        "scientific": "Integrated somatic depolarization converges from the [[soma|soma]] onto the tapered [[axon hillock|axon_hillock]] segment."
      },
      "es": {
        "pop": "Todos los cambios integrados fluyen del [[soma|soma]] hacia el cono estrecho del [[cono axónico|axon_hillock]].",
        "blueprint": "El voltaje analógico sumado sale del [[soma|soma]] directo al comparador de disparo del [[cono axónico|axon_hillock]].",
        "scientific": "La despolarización integrada converge desde el [[soma|soma]] en el segmento inicial del [[cono axónico|axon_hillock]]."
      }
    },
    "neu.ch1.s2.01": {
      "en": {
        "pop": "At rest near -70 mV, the [[axon hillock|axon_hillock]] packs a dense cluster of voltage-gated sodium channels.",
        "blueprint": "Held at -70 mV standby, the [[axon hillock|axon_hillock]] stages a high-density array of voltage-triggered Na+ gates.",
        "scientific": "Polarized near -70 mV, the [[axon hillock|axon_hillock]] concentrates Nav channels at extreme membrane density."
      },
      "es": {
        "pop": "En reposo a -70 mV, el [[cono axónico|axon_hillock]] concentra un denso grupo de canales de sodio por voltaje.",
        "blueprint": "En espera a -70 mV, el [[cono axónico|axon_hillock]] agrupa una densa matriz de compuertas de sodio por voltaje.",
        "scientific": "Polarizado a -70 mV, el [[cono axónico|axon_hillock]] concentra canales Nav con máxima densidad de membrana."
      }
    },
    "neu.ch1.s2.02": {
      "en": {
        "pop": "If summed inputs cross -55 mV at the [[axon hillock|axon_hillock]], sodium gates snap open in positive feedback.",
        "blueprint": "Crossing the -55 mV trip point at [[axon hillock|axon_hillock]] latches Nav gates open in runaway digital ignition.",
        "scientific": "Depolarization past -55 mV at the [[axon hillock|axon_hillock]] initiates regenerative Hodgkin-Huxley Na+ influx."
      },
      "es": {
        "pop": "Si las entradas cruzan -55 mV en el [[cono axónico|axon_hillock]], los canales de sodio se abren en cascada positiva.",
        "blueprint": "Cruzar el umbral de -55 mV en el [[cono axónico|axon_hillock]] dispara apertura en avalancha y pulso digital.",
        "scientific": "Superar -55 mV en el [[cono axónico|axon_hillock]] detona el influjo regenerativo de Na+ tipo Hodgkin-Huxley."
      }
    },
    "neu.ch1.s2.03": {
      "en": {
        "pop": "Voltage spikes to +40 mV, launching an all-or-none action potential down the [[axon|myelin_sheath]].",
        "blueprint": "Potential snaps to +40 mV, transmitting a full-amplitude digital spike down the [[axon|myelin_sheath]] trunk.",
        "scientific": "Membrane potential reverses to +40 mV, propagating an all-or-none action potential along the [[axon|myelin_sheath]]."
      },
      "es": {
        "pop": "El voltaje salta a +40 mV y lanza un potencial de acción todo-o-nada a lo largo del [[axón|myelin_sheath]].",
        "blueprint": "El potencial alcanza +40 mV y dispara un pulso digital de amplitud fija por la línea del [[axón|myelin_sheath]].",
        "scientific": "El potencial se invierte a +40 mV, propagando un potencial de acción todo-o-nada por el [[axón|myelin_sheath]]."
      }
    },
    "neu.ch2.s0.01": {
      "en": {
        "pop": "Multilayer lipid [[myelin sheaths|myelin_sheath]] wrap the axon tightly, cutting ion leak and membrane capacitance.",
        "blueprint": "Multi-ply lipid [[myelin jackets|myelin_sheath]] insulate the axon core, slashing leak current and cable capacitance.",
        "scientific": "Compact glial [[myelin sheaths|myelin_sheath]] raise membrane resistance and lower capacitance across internodes."
      },
      "es": {
        "pop": "Varias capas lipídicas de [[mielina|myelin_sheath]] envuelven el axón reduciendo fugas iónicas y capacitancia.",
        "blueprint": "El blindaje lipídico de [[mielina|myelin_sheath]] aísla el cable axonal, minimizando fugas y capacitancia eléctrica.",
        "scientific": "Las vainas gliales de [[mielina|myelin_sheath]] elevan la resistencia de membrana y reducen la capacitancia internodal."
      }
    },
    "neu.ch2.s0.02": {
      "en": {
        "pop": "[[Myelin|myelin_sheath]] lets impulses hop between [[Nodes of Ranvier|node_ranvier]] like an express train skipping local stops.",
        "blueprint": "[[Myelin insulation|myelin_sheath]] boosts cable speed to 120 m/s via repeater refreshes at [[Nodes of Ranvier|node_ranvier]].",
        "scientific": "[[Myelin|myelin_sheath]] accelerates saltatory conduction to ~120 m/s between regenerative [[Nodes of Ranvier|node_ranvier]]."
      },
      "es": {
        "pop": "La [[mielina|myelin_sheath]] hace saltar el pulso entre [[nodos de Ranvier|node_ranvier]] como un tren expreso sin paradas.",
        "blueprint": "El aislante de [[mielina|myelin_sheath]] logra 120 m/s regenerando la señal solo en los [[nodos de Ranvier|node_ranvier]].",
        "scientific": "La [[mielina|myelin_sheath]] acelera la conducción saltatoria a ~120 m/s entre [[nodos de Ranvier|node_ranvier]] activos."
      }
    },
    "neu.ch2.s0.03": {
      "en": {
        "pop": "This saltatory hopping saves vast ATP because ion exchange occurs only at tiny bare [[nodes|node_ranvier]].",
        "blueprint": "Restricting ionic switching to micron-wide repeater [[nodes|node_ranvier]] slashes total ATP power overhead.",
        "scientific": "Confining transmembrane Na+/K+ flux to ~1 um unmyelinated [[nodes|node_ranvier]] sharply lowers metabolic ATP cost."
      },
      "es": {
        "pop": "Este salto ahorra gran cantidad de ATP porque el intercambio iónico ocurre solo en los [[nodos|node_ranvier]].",
        "blueprint": "Limitar la conmutación iónica a repetidores puntuales en los [[nodos|node_ranvier]] reduce drásticamente el consumo ATP.",
        "scientific": "Confinar el flujo Na+/K+ a [[nodos|node_ranvier]] desnudos de ~1 um reduce enormemente el gasto metabólico de ATP."
      }
    },
    "neu.ch2.s1.01": {
      "en": {
        "pop": "Zoom to an exposed [[Node of Ranvier|node_ranvier]] where dense [[Nav1.7|nav17]] channels renew the voltage spike.",
        "blueprint": "Focus on an exposed [[Node of Ranvier|node_ranvier]] repeater packed with [[Nav1.7|nav17]] signal-booster gates.",
        "scientific": "At the unmyelinated [[Node of Ranvier|node_ranvier]], clustered [[Nav1.7|nav17]] (PDB 6J8I) regenerates action potentials."
      },
      "es": {
        "pop": "Acércate a un [[nodo de Ranvier|node_ranvier]] desnudo donde densos canales [[Nav1.7|nav17]] renuevan el pico eléctrico.",
        "blueprint": "Enfoca el repetidor del [[nodo de Ranvier|node_ranvier]], saturado de compuertas amplificadoras [[Nav1.7|nav17]].",
        "scientific": "En el [[nodo de Ranvier|node_ranvier]] desnudo, canales [[Nav1.7|nav17]] (PDB 6J8I) regeneran el potencial de acción."
      }
    },
    "neu.ch2.s1.02": {
      "en": {
        "pop": "Voltage opens [[Nav1.7|nav17]] pores to rush Na+ inward to +40 mV before fast inactivation seals the channel.",
        "blueprint": "Voltage sensors flip [[Nav1.7|nav17]] open for +40 mV Na+ surge, then an automatic hinged plug seals the pore.",
        "scientific": "S4 helices gate [[Nav1.7|nav17]] (6J8I) for rapid Na+ influx to +40 mV, terminated by IFM-motif inactivation."
      },
      "es": {
        "pop": "El voltaje abre poros [[Nav1.7|nav17]] dejando entrar Na+ hasta +40 mV antes de su rápida inactivación.",
        "blueprint": "Sensores de voltaje abren [[Nav1.7|nav17]] para el pulso de +40 mV y luego una compuerta rápida sella el canal.",
        "scientific": "Hélices S4 abren [[Nav1.7|nav17]] (6J8I) elevando Vm a +40 mV antes de la inactivación rápida por motivo IFM."
      }
    },
    "neu.ch2.s1.03": {
      "en": {
        "pop": "Adjacent [[Kv1.2|kv12]] channels then open so K+ rushes outward, repolarizing the [[node|node_ranvier]] toward -70 mV.",
        "blueprint": "Delayed [[Kv1.2|kv12]] exhaust ports then vent K+ outward, snapping the [[node|node_ranvier]] rail back to -70 mV.",
        "scientific": "Delayed-rectifier [[Kv1.2|kv12]] (PDB 2R9R) mediates K+ efflux, repolarizing the [[node|node_ranvier]] toward -70 mV."
      },
      "es": {
        "pop": "Luego se abren canales [[Kv1.2|kv12]] vecinos y el K+ sale rápido, repolarizando el [[nodo|node_ranvier]] a -70 mV.",
        "blueprint": "Válvulas retardadas [[Kv1.2|kv12]] expulsan K+ hacia afuera y devuelven el riel del [[nodo|node_ranvier]] a -70 mV.",
        "scientific": "El rectificador [[Kv1.2|kv12]] (PDB 2R9R) media el eflujo de K+, repolarizando el [[nodo|node_ranvier]] hacia -70 mV."
      }
    },
    "neu.ch2.s2.01": {
      "en": {
        "pop": "Flanking [[Na+/K+ pumps|nak_reset]] burn ATP to export 3 Na+ and import 2 K+, resetting resting -70 mV gradients.",
        "blueprint": "Recovery [[Na+/K+ pumps|nak_reset]] spend ATP to restore the 3 Na+ out / 2 K+ in battery at -70 mV standby.",
        "scientific": "Juxtaparanodal [[Na+/K+-ATPase|nak_reset]] (3WGU) exchanges 3 Na+ out for 2 K+ in per ATP, maintaining -70 mV."
      },
      "es": {
        "pop": "Las [[bombas Na+/K+|nak_reset]] gastan ATP sacando 3 Na+ y metiendo 2 K+, restaurando el reposo de -70 mV.",
        "blueprint": "Las [[bombas Na+/K+|nak_reset]] de recarga queman ATP (3 Na+ fuera / 2 K+ dentro) para sostener la batería de -70 mV.",
        "scientific": "La [[Na+/K+-ATPasa|nak_reset]] (PDB 3WGU) bombea 3 Na+ fuera y 2 K+ dentro por ATP, preservando el gradiente."
      }
    },
    "neu.ch2.s2.02": {
      "en": {
        "pop": "Deep inside the axon, parallel [[microtubule tracks|axon_mt]] form polarized highways running to the terminal.",
        "blueprint": "Inside the axon core, aligned [[microtubule rails|axon_mt]] build one-way freight corridors toward the bouton.",
        "scientific": "Within the axoplasm, plus-end-out [[microtubule bundles|axon_mt]] establish polarized tracks to the terminal."
      },
      "es": {
        "pop": "Dentro del axón, [[microtúbulos|axon_mt]] paralelos forman autopistas polarizadas que corren hasta la terminal.",
        "blueprint": "En el núcleo axonal, los [[rieles de microtúbulos|axon_mt]] tienden corredores de carga hasta el botón sináptico.",
        "scientific": "En el axoplasma, haces de [[microtúbulos|axon_mt]] con extremo más distal forman rieles hacia la terminal."
      }
    },
    "neu.ch2.s2.03": {
      "en": {
        "pop": "Kinesin motors walk along [[axon microtubules|axon_mt]] carrying mitochondria and [[vesicles|synaptic_vesicle]] outward.",
        "blueprint": "ATP-powered kinesin haulers ride [[axon rails|axon_mt]] delivering mitochondria and fresh [[vesicles|synaptic_vesicle]].",
        "scientific": "Anterograde kinesin-1 dimers step along [[axon microtubules|axon_mt]], hauling mitochondria and [[vesicles|synaptic_vesicle]]."
      },
      "es": {
        "pop": "Motores de quinesina caminan por [[microtúbulos axonales|axon_mt]] llevando mitocondrias y [[vesículas|synaptic_vesicle]].",
        "blueprint": "Transportadores quinesina recorren los [[rieles axonales|axon_mt]] llevando mitocondrias y [[vesículas|synaptic_vesicle]].",
        "scientific": "Dímeros de quinesina-1 avanzan por [[microtúbulos axonales|axon_mt]] en transporte anterógrado de [[vesículas|synaptic_vesicle]]."
      }
    },
    "neu.ch3.s0.01": {
      "en": {
        "pop": "The electrical spike reaches the flared [[terminal bouton|terminal_bouton]] facing a 20 nm chemical synapse.",
        "blueprint": "Arriving voltage hits the flared [[terminal bouton|terminal_bouton]] transmitter facing a 20 nm chemical gap.",
        "scientific": "The action potential invades the presynaptic [[terminal bouton|terminal_bouton]] apposed to a 20 nm synaptic cleft."
      },
      "es": {
        "pop": "El impulso eléctrico llega al [[botón terminal|terminal_bouton]] ensanchado frente a una sinapsis química de 20 nm.",
        "blueprint": "El pulso eléctrico alcanza el transmisor [[botón terminal|terminal_bouton]] situado ante una brecha química de 20 nm.",
        "scientific": "El potencial invade el [[botón presináptico|terminal_bouton]] enfrentado a una hendidura sináptica de 20 nm."
      }
    },
    "neu.ch3.s0.02": {
      "en": {
        "pop": "Depolarization pops open voltage-gated [[Ca2+ channels|cav_channel]] clustered right beside the active zone.",
        "blueprint": "Spike voltage trips clustered [[Cav trigger valves|cav_channel]] positioned directly along the active zone.",
        "scientific": "Presynaptic depolarization opens voltage-gated P/Q- and N-type [[Cav channels|cav_channel]] at the active zone."
      },
      "es": {
        "pop": "La despolarización abre [[canales de Ca2+|cav_channel]] por voltaje agrupados justo junto a la zona activa.",
        "blueprint": "El pico de voltaje dispara las [[válvulas Cav|cav_channel]] agrupadas directamente sobre la zona activa.",
        "scientific": "La despolarización abre [[canales Cav|cav_channel]] tipo P/Q y N concentrados en la zona activa presináptica."
      }
    },
    "neu.ch3.s0.03": {
      "en": {
        "pop": "Driven by a 10,000-fold gradient, Ca2+ surges through [[Cav pores|cav_channel]] into the [[bouton|terminal_bouton]].",
        "blueprint": "Under a 10,000x pressure gradient, Ca2+ jets through [[Cav ports|cav_channel]] into the [[bouton|terminal_bouton]].",
        "scientific": "A 10^4-fold gradient drives microdomain Ca2+ influx through [[Cav channels|cav_channel]] into the [[bouton|terminal_bouton]]."
      },
      "es": {
        "pop": "Impulsado por un gradiente de 10.000 veces, el Ca2+ entra por [[poros Cav|cav_channel]] al [[botón|terminal_bouton]].",
        "blueprint": "Bajo un gradiente de 10.000x, un chorro de Ca2+ cruza los [[puertos Cav|cav_channel]] hacia el [[botón|terminal_bouton]].",
        "scientific": "Un gradiente de 10^4 impulsa microdominios de Ca2+ por [[canales Cav|cav_channel]] dentro del [[botón|terminal_bouton]]."
      }
    },
    "neu.ch3.s1.01": {
      "en": {
        "pop": "Local Ca2+ binds synaptotagmin on docked [[synaptic vesicles|synaptic_vesicle]], releasing the fusion clamp.",
        "blueprint": "Ca2+ hits synaptotagmin interlocks on primed [[vesicle pods|synaptic_vesicle]], unlocking the fusion latch.",
        "scientific": "Ca2+ binds C2 domains of synaptotagmin-1 on docked [[synaptic vesicles|synaptic_vesicle]], relieving complexin."
      },
      "es": {
        "pop": "El Ca2+ local se une a sinaptotagmina en [[vesículas sinápticas|synaptic_vesicle]] acopladas, soltando el freno.",
        "blueprint": "El Ca2+ activa el sensor sinaptotagmina en [[cápsulas vesiculares|synaptic_vesicle]] y libera el seguro de fusión.",
        "scientific": "El Ca2+ une dominios C2 de sinaptotagmina-1 en [[vesículas sinápticas|synaptic_vesicle]], liberando la complexina."
      }
    },
    "neu.ch3.s1.02": {
      "en": {
        "pop": "Complementary [[SNARE proteins|snare_zipper]] pull [[vesicle|synaptic_vesicle]] and terminal membranes shut like a zipper.",
        "blueprint": "Four-helix [[SNARE actuators|snare_zipper]] clamp [[vesicle|synaptic_vesicle]] and outer bilayers into tight fusion.",
        "scientific": "VAMP2, Syntaxin-1A and SNAP-25 [[SNAREs|snare_zipper]] (1SFC) zip [[vesicle|synaptic_vesicle]] and plasma bilayers together."
      },
      "es": {
        "pop": "Las proteínas [[SNARE|snare_zipper]] unen la [[vesícula|synaptic_vesicle]] y la membrana terminal como una cremallera.",
        "blueprint": "Actuadores [[SNARE|snare_zipper]] de cuatro hélices prensan la [[vesícula|synaptic_vesicle]] contra la membrana externa.",
        "scientific": "VAMP2, Sintaxina-1A y SNAP-25 [[SNARE|snare_zipper]] (1SFC) fusionan la [[vesícula|synaptic_vesicle]] con la membrana."
      }
    },
    "neu.ch3.s1.03": {
      "en": {
        "pop": "Within half a millisecond, [[SNARE|snare_zipper]] force opens a lipid fusion pore straight to the outside.",
        "blueprint": "In under 0.5 ms, mechanical [[SNARE|snare_zipper]] torque punches an open discharge pore to the cleft.",
        "scientific": "In <0.5 ms, trans-[[SNARE|snare_zipper]] (1SFC) assembly overcomes bilayer hydration energy to open a fusion pore."
      },
      "es": {
        "pop": "En medio milisegundo, la fuerza [[SNARE|snare_zipper]] abre un poro lipídico de fusión directo hacia afuera.",
        "blueprint": "En menos de 0,5 ms, el par mecánico [[SNARE|snare_zipper]] perfora un poro de descarga hacia la hendidura.",
        "scientific": "En <0,5 ms, el ensamblaje trans-[[SNARE|snare_zipper]] (1SFC) vence la barrera lipídica y abre el poro de fusión."
      }
    },
    "neu.ch3.s2.01": {
      "en": {
        "pop": "Each fusing [[synaptic vesicle|synaptic_vesicle]] empties thousands of neurotransmitter molecules into the [[cleft|synaptic_cleft]].",
        "blueprint": "Each fused [[vesicle packet|synaptic_vesicle]] dumps a quantal chemical payload straight into the [[cleft|synaptic_cleft]].",
        "scientific": "Each ~40 nm [[synaptic vesicle|synaptic_vesicle]] exocytoses ~3,000-5,000 transmitter molecules into the [[cleft|synaptic_cleft]]."
      },
      "es": {
        "pop": "Cada [[vesícula sináptica|synaptic_vesicle]] fusionada vacía miles de neurotransmisores en la [[hendidura|synaptic_cleft]].",
        "blueprint": "Cada [[paquete vesicular|synaptic_vesicle]] libera una carga cuántica de mensajeros hacia la [[hendidura|synaptic_cleft]].",
        "scientific": "Cada [[vesícula sináptica|synaptic_vesicle]] (~40 nm) exocita ~3.000-5.000 moléculas hacia la [[hendidura|synaptic_cleft]]."
      }
    },
    "neu.ch3.s2.02": {
      "en": {
        "pop": "Glutamate excites central circuits while acetylcholine fires motor junctions across the [[synaptic cleft|synaptic_cleft]].",
        "blueprint": "Glutamate drives brain logic circuits while ACh fires muscle relays across the 20 nm [[synaptic cleft|synaptic_cleft]].",
        "scientific": "Glutamate mediates fast CNS excitation while acetylcholine drives NMJ signaling across the [[cleft|synaptic_cleft]]."
      },
      "es": {
        "pop": "El glutamato excita circuitos centrales y la acetilcolina activa uniones motoras por la [[hendidura|synaptic_cleft]].",
        "blueprint": "El glutamato mueve redes cerebrales y la acetilcolina dispara relés motores por la [[hendidura|synaptic_cleft]].",
        "scientific": "El glutamato excita el SNC y la acetilcolina activa la placa motora cruzando la [[hendidura|synaptic_cleft]]."
      }
    },
    "neu.ch3.s2.03": {
      "en": {
        "pop": "NSF then unwinds spent [[SNAREs|snare_zipper]] so endocytosis can refill fresh [[vesicles|synaptic_vesicle]] for rapid bursts.",
        "blueprint": "ATPase NSF then resets used [[SNARE latches|snare_zipper]] while endocytosis reloads [[vesicles|synaptic_vesicle]] fast.",
        "scientific": "AAA+ ATPase NSF disassembles cis-[[SNAREs|snare_zipper]], enabling clathrin retrieval of [[vesicles|synaptic_vesicle]]."
      },
      "es": {
        "pop": "Luego NSF desarma los [[SNARE|snare_zipper]] usados para que la endocitosis rellene nuevas [[vesículas|synaptic_vesicle]].",
        "blueprint": "La ATPasa NSF reinicia los [[cierres SNARE|snare_zipper]] mientras la endocitosis recarga [[vesículas|synaptic_vesicle]].",
        "scientific": "La ATPasa NSF desensambla cis-[[SNARE|snare_zipper]] y permite reciclar [[vesículas sinápticas|synaptic_vesicle]]."
      }
    },
    "neu.ch4.s0.01": {
      "en": {
        "pop": "Neurotransmitters cross the 20 nm [[synaptic cleft|synaptic_cleft]] by diffusion in mere tens of microseconds.",
        "blueprint": "Chemical messengers bridge the tight 20 nm [[synaptic cleft|synaptic_cleft]] gap in tens of microseconds flat.",
        "scientific": "Free Brownian diffusion carries ligands across the 20 nm [[synaptic cleft|synaptic_cleft]] within ~10-50 us."
      },
      "es": {
        "pop": "Los neurotransmisores cruzan por difusión la [[hendidura sináptica|synaptic_cleft]] de 20 nm en microsegundos.",
        "blueprint": "Los mensajeros químicos salvan la brecha de 20 nm de la [[hendidura|synaptic_cleft]] en decenas de microsegundos.",
        "scientific": "La difusión browniana cruza los 20 nm de la [[hendidura sináptica|synaptic_cleft]] en ~10-50 microsegundos."
      }
    },
    "neu.ch4.s0.02": {
      "en": {
        "pop": "Glutamate binds [[AMPA receptors|ampa_receptor]] while acetylcholine opens [[nAChR channels|nachr_receptor]] on the target.",
        "blueprint": "Glutamate keys [[AMPA input gates|ampa_receptor]] while acetylcholine switches open [[nAChR valves|nachr_receptor]].",
        "scientific": "Glutamate gates tetrameric [[AMPA|ampa_receptor]] (3KG2) while ACh opens pentameric [[nAChR|nachr_receptor]] (2BG9)."
      },
      "es": {
        "pop": "El glutamato activa [[receptores AMPA|ampa_receptor]] y la acetilcolina abre canales [[nAChR|nachr_receptor]] en el destino.",
        "blueprint": "El glutamato abre [[compuertas AMPA|ampa_receptor]] y la acetilcolina acciona las [[válvulas nAChR|nachr_receptor]].",
        "scientific": "El glutamato abre [[AMPA|ampa_receptor]] (PDB 3KG2) y la ACh abre pentámeros [[nAChR|nachr_receptor]] (PDB 2BG9)."
      }
    },
    "neu.ch4.s0.03": {
      "en": {
        "pop": "Both [[AMPA|ampa_receptor]] and [[nAChR|nachr_receptor]] admit Na+, turning the chemical pulse back into voltage.",
        "blueprint": "Open [[AMPA|ampa_receptor]] and [[nAChR|nachr_receptor]] ports admit Na+, converting chemical packets back to voltage.",
        "scientific": "Cation-selective [[AMPA|ampa_receptor]] and [[nAChR|nachr_receptor]] drive rapid Na+ influx, generating an EPSP."
      },
      "es": {
        "pop": "Tanto [[AMPA|ampa_receptor]] como [[nAChR|nachr_receptor]] dejan entrar Na+, devolviendo el pulso químico a voltaje.",
        "blueprint": "Los puertos [[AMPA|ampa_receptor]] y [[nAChR|nachr_receptor]] admiten Na+, reconvirtiendo la señal química en voltaje.",
        "scientific": "Los poros catiónicos [[AMPA|ampa_receptor]] y [[nAChR|nachr_receptor]] generan influjo de Na+ y un nuevo EPSP."
      }
    },
    "neu.ch4.s1.01": {
      "en": {
        "pop": "Zoom to 0.1-0.5 nm in the [[atomic lens|neuro_atoms]] showing neurotransmitters, ions and epigenetic marks.",
        "blueprint": "Drop to 0.1-0.5 nm atomic hardware in the [[atomic lens|neuro_atoms]] inspecting ligands, ions and chromatin tags.",
        "scientific": "At 0.1-0.5 nm resolution, the [[atomic inset|neuro_atoms]] displays transmitters, monovalent/divalent ions and acetyls."
      },
      "es": {
        "pop": "Acércate a 0,1-0,5 nm en el [[lente atómico|neuro_atoms]] con neurotransmisores, iones y marcas epigenéticas.",
        "blueprint": "Desciende a 0,1-0,5 nm en el [[visor atómico|neuro_atoms]] para auditar ligandos, iones y marcas cromatínicas.",
        "scientific": "A resolución de 0,1-0,5 nm, el [[recuadro atómico|neuro_atoms]] muestra transmisores, iones y grupos acetilo."
      }
    },
    "neu.ch4.s1.02": {
      "en": {
        "pop": "In [[neuro atoms|neuro_atoms]], glutamate (C5H9NO4) and acetylcholine sit beside Na+, K+ and triggering Ca2+ ions.",
        "blueprint": "Inside [[neuro atoms|neuro_atoms]], glutamate (C5H9NO4) and ACh sit beside Na+, K+ and Ca2+ switching charges.",
        "scientific": "In [[neuro atoms|neuro_atoms]], CPK glutamate (C5H9NO4) and ACh flank Na+ (0.102 nm), K+ (0.138 nm) and Ca2+."
      },
      "es": {
        "pop": "En [[átomos neuronales|neuro_atoms]], glutamato (C5H9NO4) y acetilcolina posan junto a iones Na+, K+ y Ca2+.",
        "blueprint": "Dentro de [[átomos neuronales|neuro_atoms]], glutamato y ACh acompañan a las cargas Na+, K+ y al disparador Ca2+.",
        "scientific": "En [[átomos neuronales|neuro_atoms]], glutamato (C5H9NO4) y ACh flanquean Na+ (0,102 nm), K+ (0,138 nm) y Ca2+."
      }
    },
    "neu.ch4.s1.03": {
      "en": {
        "pop": "A tiny -COCH3 acetyl group in [[neuro atoms|neuro_atoms]] marks H3K27ac histones that unlock neuronal identity.",
        "blueprint": "One 4-atom -COCH3 tag in [[neuro atoms|neuro_atoms]] flips histone charge to unlock the neuronal hardware build.",
        "scientific": "The -COCH3 moiety in [[neuro atoms|neuro_atoms]] neutralizes Lys27 positive charge on H3, opening neuronal enhancers."
      },
      "es": {
        "pop": "Un diminuto grupo acetilo -COCH3 en [[átomos neuronales|neuro_atoms]] marca histonas H3K27ac que abren genes neuronales.",
        "blueprint": "Una etiqueta -COCH3 en [[átomos neuronales|neuro_atoms]] cambia la carga histónica y habilita el perfil neuronal.",
        "scientific": "El grupo -COCH3 en [[átomos neuronales|neuro_atoms]] neutraliza la lisina H3K27 y activa potenciadores neuronales."
      }
    },
    "neu.ch4.s2.01": {
      "en": {
        "pop": "From [[H3K27ac chromatin|nucleus_h3k27ac]] to [[Ranvier nodes|node_ranvier]] and [[SNAREs|snare_zipper]], structure drives speed.",
        "blueprint": "From [[H3K27ac boot flags|nucleus_h3k27ac]] to [[Ranvier repeaters|node_ranvier]] and [[SNAREs|snare_zipper]], design maximizes speed.",
        "scientific": "From [[H3K27ac enhancers|nucleus_h3k27ac]] to [[Ranvier nodes|node_ranvier]] and [[SNAREs|snare_zipper]], architecture governs speed."
      },
      "es": {
        "pop": "De la [[cromatina H3K27ac|nucleus_h3k27ac]] a los [[nodos de Ranvier|node_ranvier]] y [[SNARE|snare_zipper]], la forma da velocidad.",
        "blueprint": "De [[banderas H3K27ac|nucleus_h3k27ac]] a [[repetidores Ranvier|node_ranvier]] y [[SNARE|snare_zipper]], todo optimiza latencia.",
        "scientific": "De potenciadores [[H3K27ac|nucleus_h3k27ac]] a [[nodos de Ranvier|node_ranvier]] y [[SNARE|snare_zipper]], la estructura rige rapidez."
      }
    },
    "neu.ch4.s2.02": {
      "en": {
        "pop": "Toggle Action Potential, Resting and Synaptic Fire modes to watch [[bouton|terminal_bouton]] firing live.",
        "blueprint": "Cycle Action Potential, Resting and Synaptic Fire states to test live [[bouton|terminal_bouton]] transmission.",
        "scientific": "Switch Action Potential, Resting (-70 mV) and Synaptic Fire modes to inspect [[bouton|terminal_bouton]] release."
      },
      "es": {
        "pop": "Alterna Potencial de Acción, Reposo y Disparo Sináptico para ver responder al [[botón|terminal_bouton]] en vivo.",
        "blueprint": "Conmuta los modos Activo, Reposo y Ráfaga Sináptica para probar en vivo el transmisor [[botón|terminal_bouton]].",
        "scientific": "Alterna Potencial de Acción, Reposo (-70 mV) y Ráfaga Sináptica para observar el [[botón|terminal_bouton]]."
      }
    },
    "neu.ch4.s2.03": {
      "en": {
        "pop": "Follow acetylcholine across [[nAChR|nachr_receptor]] into the Skeletal Muscle Fiber to see force generation.",
        "blueprint": "Trace ACh output through [[nAChR|nachr_receptor]] next into Skeletal Muscle to inspect molecular actuators.",
        "scientific": "Follow neuromuscular ACh gating of [[nAChR|nachr_receptor]] next into Skeletal Muscle sarcomere mechanics."
      },
      "es": {
        "pop": "Sigue la acetilcolina por [[nAChR|nachr_receptor]] hacia la Fibra Muscular Esquelética para ver generar fuerza.",
        "blueprint": "Sigue la salida de ACh vía [[nAChR|nachr_receptor]] hacia el Músculo Esquelético para ver sus motores.",
        "scientific": "Acompaña la activación de [[nAChR|nachr_receptor]] por ACh hacia el sarcómero del Músculo Esquelético."
      }
    }
  },
  "real-muscle": {
    "mus.ch0.s0.01": {
      "en": {
        "pop": "A skeletal muscle fiber holds the same 6.4 Gbp DNA as a neuron, yet packs [[myofibrils|myofibril]] built to pull.",
        "blueprint": "Same 6.4 Gbp human genome compiled into linear mechanical actuators packed inside dense [[myofibrils|myofibril]].",
        "scientific": "Containing the identical 6.4 Gbp genome as a neuron, this myocyte packs contractile [[myofibrils|myofibril]]."
      },
      "es": {
        "pop": "Una fibra muscular lleva el mismo ADN de 6,4 Gbp que una neurona, pero empaca [[miofibrillas|myofibril]] para halar.",
        "blueprint": "El mismo genoma de 6,4 Gbp compilado en actuadores mecánicos lineales dentro de densas [[miofibrillas|myofibril]].",
        "scientific": "Con el mismo genoma humano de 6,4 Gbp que una neurona, el miocito concentra [[miofibrillas|myofibril]] contráctiles."
      }
    },
    "mus.ch0.s0.02": {
      "en": {
        "pop": "Hundreds of embryonic myoblasts fuse into one giant cell wrapped by an excitable [[sarcolemma|sarcolemma]].",
        "blueprint": "Fused embryonic myoblasts form one long syncytial chassis clad in an electrically active [[sarcolemma|sarcolemma]].",
        "scientific": "Hundreds of myoblasts fuse into a multinucleated syncytium bounded by an excitable [[sarcolemma|sarcolemma]]."
      },
      "es": {
        "pop": "Cientos de mioblastos embrionarios se fusionan en una célula gigante cubierta por un [[sarcolema|sarcolemma]] excitable.",
        "blueprint": "Mioblastos fusionados construyen un chasis sincitial largo revestido por un [[sarcolema|sarcolemma]] conductor.",
        "scientific": "Cientos de mioblastos forman un sincitio multinucleado rodeado por un [[sarcolema|sarcolemma]] excitable."
      }
    },
    "mus.ch0.s0.03": {
      "en": {
        "pop": "Contractile [[myofibrils|myofibril]] fill the core, pushing flat [[peripheral nuclei|peripheral_nuclei]] under the membrane.",
        "blueprint": "Force-generating [[myofibril|myofibril]] rods occupy the core, flattening [[peripheral nuclei|peripheral_nuclei]] to the rim.",
        "scientific": "Parallel [[myofibrils|myofibril]] pack >80% of cell volume, displacing [[peripheral nuclei|peripheral_nuclei]] subsarcolemmally."
      },
      "es": {
        "pop": "Las [[miofibrillas|myofibril]] llenan el centro y empujan los [[núcleos periféricos|peripheral_nuclei]] planos bajo la membrana.",
        "blueprint": "Las barras motoras [[miofibrillas|myofibril]] ocupan el núcleo y desplazan los [[núcleos|peripheral_nuclei]] al borde externo.",
        "scientific": "Las [[miofibrillas|myofibril]] ocupan >80% del volumen y desplazan los [[núcleos periféricos|peripheral_nuclei]] al borde."
      }
    },
    "mus.ch0.s1.01": {
      "en": {
        "pop": "Inside each [[peripheral nucleus|peripheral_nuclei]], H3K27ac chromatin opens muscle genes MYH1, ACTA1 and TNNT3.",
        "blueprint": "Inside every [[peripheral core|peripheral_nuclei]], H3K27ac flags unlock MYH1, ACTA1 and TNNT3 motor blueprints.",
        "scientific": "In each [[peripheral nucleus|peripheral_nuclei]], H3K27ac nucleosomes (1AOI) open MYH1, ACTA1 and TNNT3 loci."
      },
      "es": {
        "pop": "En cada [[núcleo periférico|peripheral_nuclei]], la cromatina H3K27ac abre los genes musculares MYH1, ACTA1 y TNNT3.",
        "blueprint": "En cada [[núcleo periférico|peripheral_nuclei]], banderas H3K27ac habilitan los planos motores MYH1, ACTA1 y TNNT3.",
        "scientific": "En cada [[núcleo periférico|peripheral_nuclei]], nucleosomas H3K27ac (1AOI) activan los loci MYH1, ACTA1 y TNNT3."
      }
    },
    "mus.ch0.s1.02": {
      "en": {
        "pop": "At the same time, dense H3K27me3 heterochromatin in [[these nuclei|peripheral_nuclei]] silences neuronal SYT1 and blood HBB.",
        "blueprint": "Simultaneously, H3K27me3 locks inside [[these nuclei|peripheral_nuclei]] shut down neuronal SYT1 and blood HBB code.",
        "scientific": "Concurrently, H3K27me3 heterochromatin in [[these nuclei|peripheral_nuclei]] represses neuronal SYT1 and erythroid HBB."
      },
      "es": {
        "pop": "Al mismo tiempo, la heterocromatina H3K27me3 en [[estos núcleos|peripheral_nuclei]] silencia SYT1 neuronal y HBB sanguíneo.",
        "blueprint": "A la vez, bloqueos H3K27me3 en [[estos núcleos|peripheral_nuclei]] apagan los módulos SYT1 neuronal y HBB hemático.",
        "scientific": "En paralelo, la heterocromatina H3K27me3 en [[estos núcleos|peripheral_nuclei]] reprime SYT1 neuronal y HBB eritroide."
      }
    },
    "mus.ch0.s1.03": {
      "en": {
        "pop": "Multiple [[peripheral nuclei|peripheral_nuclei]] share mRNA delivery along a fiber that can span centimeters.",
        "blueprint": "Distributed [[peripheral nuclei|peripheral_nuclei]] supply local mRNA domains along centimeter-long muscle cables.",
        "scientific": "Distributed myonuclear domains across [[peripheral nuclei|peripheral_nuclei]] sustain protein turnover over centimeters."
      },
      "es": {
        "pop": "Múltiples [[núcleos periféricos|peripheral_nuclei]] reparten ARNm a lo largo de una fibra que puede medir centímetros.",
        "blueprint": "Los [[núcleos periféricos|peripheral_nuclei]] distribuidos abastecen de ARNm local a fibras de varios centímetros.",
        "scientific": "Los dominios mionucleares de los [[núcleos periféricos|peripheral_nuclei]] mantienen proteínas a lo largo de centímetros."
      }
    },
    "mus.ch1.s0.01": {
      "en": {
        "pop": "When a motor neuron fires acetylcholine, depolarization sweeps across the muscle [[sarcolemma|sarcolemma]].",
        "blueprint": "Motor-neuron ACh triggers a fast action-potential wave sweeping down the excitable [[sarcolemma|sarcolemma]].",
        "scientific": "Endplate nAChR depolarization initiates a Nav1.4 action potential propagating across the [[sarcolemma|sarcolemma]]."
      },
      "es": {
        "pop": "Cuando una motoneurona libera acetilcolina, la despolarización recorre todo el [[sarcolema|sarcolemma]] muscular.",
        "blueprint": "La acetilcolina motora dispara una onda eléctrica rápida a través de la superficie del [[sarcolema|sarcolemma]].",
        "scientific": "La activación nAChR en placa motora dispara un potencial Nav1.4 a lo largo del [[sarcolema|sarcolemma]]."
      }
    },
    "mus.ch1.s0.02": {
      "en": {
        "pop": "Transverse [[T-tubules|t_tubule]] dive straight inward so the electrical pulse reaches every deep [[myofibril|myofibril]].",
        "blueprint": "Radial [[T-tubule conduits|t_tubule]] pipe the trigger voltage straight into every buried [[myofibril|myofibril]] unit.",
        "scientific": "Invaginated [[T-tubules|t_tubule]] conduct sarcolemmal depolarization synchronously to every deep [[myofibril|myofibril]]."
      },
      "es": {
        "pop": "Los [[túbulos T|t_tubule]] transversales bajan al interior llevando el pulso eléctrico a cada [[miofibrilla|myofibril]].",
        "blueprint": "Los conductos radiales [[túbulos T|t_tubule]] inyectan la señal eléctrica en cada [[miofibrilla|myofibril]] profunda.",
        "scientific": "Los [[túbulos T|t_tubule]] invaginados conducen la despolarización en sincronía a cada [[miofibrilla|myofibril]]."
      }
    },
    "mus.ch1.s0.03": {
      "en": {
        "pop": "Each [[T-tubule|t_tubule]] is flanked by sleeves of [[sarcoplasmic reticulum|sr_network]] packed with stored Ca2+ ions.",
        "blueprint": "Each [[T-tubule|t_tubule]] sits wedged between pressurized [[SR Ca2+ tanks|sr_network]] forming a triad switch.",
        "scientific": "Each [[T-tubule|t_tubule]] abuts twin terminal cisternae of the [[sarcoplasmic reticulum|sr_network]] storing mM Ca2+."
      },
      "es": {
        "pop": "Cada [[túbulo T|t_tubule]] queda flanqueado por mangas del [[retículo sarcoplásmico|sr_network]] repletas de Ca2+.",
        "blueprint": "Cada [[túbulo T|t_tubule]] se acopla entre tanques presurizados del [[retículo sarcoplásmico|sr_network]] en tríada.",
        "scientific": "Cada [[túbulo T|t_tubule]] flanquea cisternas terminales del [[retículo sarcoplásmico|sr_network]] ricas en Ca2+."
      }
    },
    "mus.ch1.s1.01": {
      "en": {
        "pop": "Zoom to a single 2.2 um sarcomere inside a [[myofibril|myofibril]], spanning from [[Z-disc|z_disc]] to Z-disc.",
        "blueprint": "Inspect one 2.2 um contractile cell inside a [[myofibril|myofibril]], framed end-to-end by [[Z-disc|z_disc]] bulkheads.",
        "scientific": "Inside one [[myofibril|myofibril]], each 2.2 um sarcomere repeats between alpha-actinin [[Z-disc|z_disc]] boundaries."
      },
      "es": {
        "pop": "Acércate a un sarcómero de 2,2 um en la [[miofibrilla|myofibril]], extendido de [[disco Z|z_disc]] a disco Z.",
        "blueprint": "Inspecciona una unidad contráctil de 2,2 um en la [[miofibrilla|myofibril]], limitada por mamparos [[disco Z|z_disc]].",
        "scientific": "En la [[miofibrilla|myofibril]], cada sarcómero de 2,2 um se repite entre límites de alfa-actinina del [[disco Z|z_disc]]."
      }
    },
    "mus.ch1.s1.02": {
      "en": {
        "pop": "The pale [[I-band|i_band]] holds thin filaments anchored to the [[Z-disc|z_disc]], creating striped bands under light.",
        "blueprint": "The light [[I-band|i_band]] zone spans unoverlapped thin cables bolted directly to the [[Z-disc|z_disc]] frame.",
        "scientific": "The isotropic [[I-band|i_band]] contains actin thin filaments anchored at the [[Z-disc|z_disc]], giving striated optics."
      },
      "es": {
        "pop": "La [[banda I|i_band]] clara aloja filamentos finos anclados al [[disco Z|z_disc]], dando el aspecto estriado.",
        "blueprint": "La zona clara [[banda I|i_band]] abarca cables delgados sin solapar sujetos al marco del [[disco Z|z_disc]].",
        "scientific": "La [[banda I|i_band]] isotrópica alberga actina anclada al [[disco Z|z_disc]], origen óptico de la estriación."
      }
    },
    "mus.ch1.s1.03": {
      "en": {
        "pop": "The dark [[A-band|a_band]] spans thick myosin filaments centered symmetrically on the structural [[M-line|m_line]].",
        "blueprint": "The dense [[A-band|a_band]] marks full thick-filament length locked symmetrically onto the central [[M-line|m_line]].",
        "scientific": "The anisotropic [[A-band|a_band]] defines the 1.6 um thick-filament span cross-linked at the central [[M-line|m_line]]."
      },
      "es": {
        "pop": "La [[banda A|a_band]] oscura abarca los filamentos gruesos de miosina centrados sobre la [[línea M|m_line]].",
        "blueprint": "La zona densa [[banda A|a_band]] marca el largo fijo del eje motor centrado sobre la viga [[línea M|m_line]].",
        "scientific": "La [[banda A|a_band]] anisotrópica fija el largo de 1,6 um de miosina reticulada en la [[línea M|m_line]] central."
      }
    },
    "mus.ch1.s2.01": {
      "en": {
        "pop": "At the center of the A-band lies the lighter [[H-zone|h_zone]], where relaxed actin does not yet reach the [[M-line|m_line]].",
        "blueprint": "In mid A-band sits the clear [[H-zone|h_zone]] travel gap where relaxed actin stops short of the [[M-line|m_line]].",
        "scientific": "Centrally within the A-band, the [[H-zone|h_zone]] contains bare myosin shafts flanking the [[M-line|m_line]] at rest."
      },
      "es": {
        "pop": "Al centro de la banda A está la [[zona H|h_zone]] clara, donde la actina relajada aún no alcanza la [[línea M|m_line]].",
        "blueprint": "En la banda A queda el margen libre [[zona H|h_zone]], donde la actina en reposo no llega a la [[línea M|m_line]].",
        "scientific": "En el centro de la banda A, la [[zona H|h_zone]] expone miosina sin solapar a ambos lados de la [[línea M|m_line]]."
      }
    },
    "mus.ch1.s2.02": {
      "en": {
        "pop": "Giant coiled [[titin springs|titin_spring]] tether every thick filament from the [[M-line|m_line]] out to the [[Z-disc|z_disc]].",
        "blueprint": "Molecular [[titin springs|titin_spring]] suspend every myosin shaft between the [[M-line|m_line]] and [[Z-disc|z_disc]] walls.",
        "scientific": "3.8 MDa [[titin filaments|titin_spring]] span half-sarcomeres from the [[M-line|m_line]] directly into the [[Z-disc|z_disc]]."
      },
      "es": {
        "pop": "Los enormes [[resortes de titina|titin_spring]] atan cada filamento grueso desde la [[línea M|m_line]] hasta el [[disco Z|z_disc]].",
        "blueprint": "Los [[muelles de titina|titin_spring]] suspenden cada eje de miosina entre la [[línea M|m_line]] y los muros [[disco Z|z_disc]].",
        "scientific": "Filamentos de [[titina|titin_spring]] (3,8 MDa) enlazan cada medio sarcómero de la [[línea M|m_line]] al [[disco Z|z_disc]]."
      }
    },
    "mus.ch1.s2.03": {
      "en": {
        "pop": "Elastic [[titin|titin_spring]] centers the myosin lattice and stores passive tension that aids smooth recoil.",
        "blueprint": "Calibrated [[titin|titin_spring]] coils keep thick shafts aligned and return passive elastic force on release.",
        "scientific": "Unfolding Ig/PEVK segments in [[titin|titin_spring]] maintain A-band centering and generate passive recoil force."
      },
      "es": {
        "pop": "La [[titina|titin_spring]] elástica centra la red de miosina y guarda tensión pasiva que facilita el retorno.",
        "blueprint": "Los resortes de [[titina|titin_spring]] mantienen alineado el eje motor y devuelven fuerza elástica al soltar.",
        "scientific": "Los dominios Ig/PEVK de [[titina|titin_spring]] centran la banda A y aportan tensión pasiva de retroceso."
      }
    },
    "mus.ch2.s0.01": {
      "en": {
        "pop": "At the triad, voltage sensors in the [[T-tubule|t_tubule]] physically couple to giant [[RyR1 channels|ryr1_channel]].",
        "blueprint": "Across the triad gap, [[T-tubule|t_tubule]] voltage levers mechanically link straight to [[RyR1 valves|ryr1_channel]].",
        "scientific": "At the triad, Cav1.1 DHPR sensors in the [[T-tubule|t_tubule]] mechanically gate tetrameric [[RyR1|ryr1_channel]]."
      },
      "es": {
        "pop": "En la tríada, sensores de voltaje del [[túbulo T|t_tubule]] se acoplan físicamente a canales [[RyR1|ryr1_channel]].",
        "blueprint": "En la tríada, palancas de voltaje del [[túbulo T|t_tubule]] enlazan directo con las válvulas [[RyR1|ryr1_channel]].",
        "scientific": "En la tríada, sensores DHPR (Cav1.1) del [[túbulo T|t_tubule]] acoplan mecánicamente a tetrámeros [[RyR1|ryr1_channel]]."
      }
    },
    "mus.ch2.s0.02": {
      "en": {
        "pop": "Depolarization flips [[RyR1|ryr1_channel]] wide open, releasing a rapid emerald surge of Ca2+ from the [[SR|sr_network]].",
        "blueprint": "Trigger voltage throws [[RyR1|ryr1_channel]] open, venting a dense Ca2+ flood out of the [[SR reservoir|sr_network]].",
        "scientific": "Conformational coupling opens [[RyR1|ryr1_channel]] pores, releasing luminal Ca2+ from the [[SR|sr_network]] cisternae."
      },
      "es": {
        "pop": "La despolarización abre [[RyR1|ryr1_channel]] de par en par, liberando un rápido chorro de Ca2+ desde el [[RS|sr_network]].",
        "blueprint": "El pulso abre la válvula [[RyR1|ryr1_channel]] y descarga una oleada de Ca2+ desde el depósito [[RS|sr_network]].",
        "scientific": "El acople conformacional abre poros [[RyR1|ryr1_channel]], vaciando Ca2+ luminal desde el [[RS|sr_network]]."
      }
    },
    "mus.ch2.s0.03": {
      "en": {
        "pop": "Cytosolic Ca2+ jumps over a hundredfold within milliseconds, reaching every filament in the sarcomere.",
        "blueprint": "Sarcoplasmic Ca2+ spikes >100x in milliseconds, broadcasting an instant start command across all filaments.",
        "scientific": "Free sarcoplasmic [Ca2+] rises from ~0.1 uM to >10 uM within milliseconds across the entire sarcomere."
      },
      "es": {
        "pop": "El Ca2+ citosólico salta más de cien veces en milisegundos y alcanza cada filamento del sarcómero.",
        "blueprint": "El Ca2+ sarcoplásmico crece >100x en milisegundos, enviando orden de arranque simultánea a todo filamento.",
        "scientific": "La [Ca2+] sarcoplásmica libre sube de ~0,1 uM a >10 uM en milisegundos en todo el sarcómero."
      }
    },
    "mus.ch2.s1.01": {
      "en": {
        "pop": "At low resting Ca2+, [[tropomyosin|troponin_tropo]] cables physically mask myosin-binding sites along [[actin|actin_thin]].",
        "blueprint": "At standby Ca2+, [[tropomyosin|troponin_tropo]] guard rails cover every myosin docking slot on [[actin|actin_thin]].",
        "scientific": "At resting ~0.1 uM Ca2+, coiled-coil [[tropomyosin|troponin_tropo]] (6KN8) sterically blocks [[F-actin|actin_thin]] sites."
      },
      "es": {
        "pop": "Con Ca2+ bajo en reposo, cables de [[tropomiosina|troponin_tropo]] tapan físicamente los sitios de la [[actina|actin_thin]].",
        "blueprint": "En reposo sin Ca2+, los rieles de [[tropomiosina|troponin_tropo]] cubren cada ranura de anclaje en [[actina|actin_thin]].",
        "scientific": "A ~0,1 uM Ca2+, la [[tropomiosina|troponin_tropo]] (PDB 6KN8) bloquea estéricamente los sitios de [[F-actina|actin_thin]]."
      }
    },
    "mus.ch2.s1.02": {
      "en": {
        "pop": "[[Tropomyosin|troponin_tropo]] acts as a sliding safety cover over [[actin|actin_thin]] until Ca2+ twists troponin to roll it aside.",
        "blueprint": "Ca2+ flips the [[troponin-tropomyosin|troponin_tropo]] interlock, shifting the barrier cable off [[actin|actin_thin]] tracks.",
        "scientific": "Ca2+ binds TnC in [[troponin-tropomyosin|troponin_tropo]] (6KN8), azimuthally shifting tropomyosin off [[actin|actin_thin]]."
      },
      "es": {
        "pop": "La [[tropomiosina|troponin_tropo]] cubre la [[actina|actin_thin]] como un seguro deslizable hasta que Ca2+ gira la troponina.",
        "blueprint": "El Ca2+ conmuta el seguro [[troponina-tropomiosina|troponin_tropo]], corriendo el cable lejos de la [[actina|actin_thin]].",
        "scientific": "El Ca2+ une TnC en [[troponina-tropomiosina|troponin_tropo]] (6KN8), rotando tropomiosina fuera de [[actina|actin_thin]]."
      }
    },
    "mus.ch2.s1.03": {
      "en": {
        "pop": "With [[troponin-tropomyosin|troponin_tropo]] shifted into the groove, active binding pockets stand open on [[actin|actin_thin]].",
        "blueprint": "Once [[troponin-tropomyosin|troponin_tropo]] retracts into the groove, [[actin|actin_thin]] tracks accept motor engagement.",
        "scientific": "In the open M-state, displaced [[troponin-tropomyosin|troponin_tropo]] exposes high-affinity [[F-actin|actin_thin]] sites."
      },
      "es": {
        "pop": "Con [[troponina-tropomiosina|troponin_tropo]] corrida hacia el surco, quedan libres los sitios activos de la [[actina|actin_thin]].",
        "blueprint": "Al retraerse [[troponina-tropomiosina|troponin_tropo]] al surco, la pista de [[actina|actin_thin]] queda lista para acoplar motores.",
        "scientific": "En estado abierto, [[troponina-tropomiosina|troponin_tropo]] desplazada expone sitios de alta afinidad en [[F-actina|actin_thin]]."
      }
    },
    "mus.ch2.s2.01": {
      "en": {
        "pop": "Helical [[F-actin filaments|actin_thin]] display regularly spaced binding pockets pointing toward the sarcomere center.",
        "blueprint": "Double-helix [[actin tracks|actin_thin]] present evenly pitched docking teeth oriented toward sarcomere mid-line.",
        "scientific": "Polarized [[F-actin|actin_thin]] (6KN8) displays helical myosin-binding epitopes every ~5.5 nm along thin filaments."
      },
      "es": {
        "pop": "Los filamentos helicoidales de [[F-actina|actin_thin]] muestran bolsillos regulares orientados hacia el centro.",
        "blueprint": "Las pistas helicoidales de [[actina|actin_thin]] ofrecen dientes de acople regulares hacia la línea media.",
        "scientific": "La [[F-actina|actin_thin]] polarizada (6KN8) expone epítopos de unión a miosina cada ~5,5 nm a lo largo del eje."
      }
    },
    "mus.ch2.s2.02": {
      "en": {
        "pop": "Across the gap, energized [[myosin heads|myosin_head]] loaded with ADP and Pi wait poised on [[thick filaments|myosin_thick]].",
        "blueprint": "Cocked [[myosin actuators|myosin_head]] pre-charged with ADP+Pi stand armed along [[thick filament|myosin_thick]] shafts.",
        "scientific": "Pre-power-stroke [[Myosin-II S1|myosin_head]] (2MYS) carrying ADP-Pi projects from bipolar [[thick filaments|myosin_thick]]."
      },
      "es": {
        "pop": "Frente a ellas, [[cabezas de miosina|myosin_head]] cargadas con ADP y Pi esperan listas en [[filamentos gruesos|myosin_thick]].",
        "blueprint": "Los [[actuadores miosina|myosin_head]] precargados con ADP+Pi aguardan armados en el [[filamento grueso|myosin_thick]].",
        "scientific": "Las cabezas [[Miosina-II S1|myosin_head]] (2MYS) en estado ADP-Pi sobresalen del [[filamento grueso|myosin_thick]] bipolar."
      }
    },
    "mus.ch2.s2.03": {
      "en": {
        "pop": "Once [[troponin-tropomyosin|troponin_tropo]] clears [[actin|actin_thin]], cross-bridge docking begins immediately.",
        "blueprint": "As soon as [[troponin-tropomyosin|troponin_tropo]] unlocks [[actin|actin_thin]], cross-bridge drive clutches engage.",
        "scientific": "Upon [[troponin-tropomyosin|troponin_tropo]] clearance of [[F-actin|actin_thin]], stereospecific actomyosin cross-bridges form."
      },
      "es": {
        "pop": "Apenas [[troponina-tropomiosina|troponin_tropo]] despeja la [[actina|actin_thin]], inicia al instante el acople de puentes cruzados.",
        "blueprint": "En cuanto [[troponina-tropomiosina|troponin_tropo]] libera [[actina|actin_thin]], los embragues de puente cruzado engranan.",
        "scientific": "Al despejarse [[troponina-tropomiosina|troponin_tropo]] de [[F-actina|actin_thin]], se forman puentes actomiosina estables."
      }
    },
    "mus.ch3.s0.01": {
      "en": {
        "pop": "Each [[Myosin-II head|myosin_head]] binds exposed [[actin|actin_thin]] and releases phosphate to lock firmly onto the track.",
        "blueprint": "Each [[Myosin-II motor|myosin_head]] latches onto open [[actin|actin_thin]] and vents Pi to tighten its mechanical grip.",
        "scientific": "[[Myosin-II S1|myosin_head]] (2MYS) docks onto [[F-actin|actin_thin]] and ejects inorganic Pi, entering strong binding."
      },
      "es": {
        "pop": "Cada [[cabeza de Miosina-II|myosin_head]] se une a [[actina|actin_thin]] expuesta y libera fosfato para fijar el agarre.",
        "blueprint": "Cada [[motor Miosina-II|myosin_head]] engrana en [[actina|actin_thin]] y expulsa Pi para asegurar agarre mecánico firme.",
        "scientific": "[[Miosina-II S1|myosin_head]] (2MYS) se acopla a [[F-actina|actin_thin]] y libera Pi, pasando a unión de alta afinidad."
      }
    },
    "mus.ch3.s0.02": {
      "en": {
        "pop": "Its lever arm swings roughly 10 nm during the power stroke, pulling [[actin|actin_thin]] inward as ADP leaves [[myosin|myosin_head]].",
        "blueprint": "A ~10 nm lever-arm stroke drives [[actin|actin_thin]] inward with ~5 pN thrust as spent ADP exits [[myosin|myosin_head]].",
        "scientific": "Lever-arm rotation (~10 nm step, ~3-5 pN) slides [[actin|actin_thin]] M-ward as ADP dissociates from [[S1|myosin_head]]."
      },
      "es": {
        "pop": "Su brazo palanca gira unos 10 nm en el golpe de fuerza, halando [[actina|actin_thin]] al salir ADP de [[miosina|myosin_head]].",
        "blueprint": "Un giro de palanca de ~10 nm impulsa la [[actina|actin_thin]] hacia el centro al liberar ADP desde [[miosina|myosin_head]].",
        "scientific": "El giro de palanca (~10 nm, ~3-5 pN) desliza [[actina|actin_thin]] hacia M al disociarse ADP de [[S1|myosin_head]]."
      }
    },
    "mus.ch3.s0.03": {
      "en": {
        "pop": "A fresh ATP molecule must bind [[Myosin-II|myosin_head]] to break the rigor grip and detach it from [[actin|actin_thin]].",
        "blueprint": "Fresh ATP input must key [[Myosin-II|myosin_head]] to release the locked rigor clutch and clear [[actin|actin_thin]].",
        "scientific": "Mg-ATP binding to [[Myosin-II|myosin_head]] opens the actin-binding cleft, terminating rigor attachment to [[actin|actin_thin]]."
      },
      "es": {
        "pop": "Un nuevo ATP debe unirse a [[Miosina-II|myosin_head]] para soltar el agarre de rigor y despegarla de [[actina|actin_thin]].",
        "blueprint": "Una nueva molécula de ATP debe destrabar [[Miosina-II|myosin_head]] para soltar el embrague sobre [[actina|actin_thin]].",
        "scientific": "La unión de Mg-ATP a [[Miosina-II|myosin_head]] abre la hendidura motora y disocia el estado rigor de [[actina|actin_thin]]."
      }
    },
    "mus.ch3.s1.01": {
      "en": {
        "pop": "Hydrolyzing ATP to ADP plus Pi re-cocks each [[myosin head|myosin_head]] on the bipolar [[thick filament|myosin_thick]].",
        "blueprint": "Cleaving ATP into ADP+Pi re-arms each [[myosin actuator|myosin_head]] along the bipolar [[thick shaft|myosin_thick]].",
        "scientific": "ATP hydrolysis (ATP -> ADP + Pi) resets the recovery stroke of [[Myosin-II|myosin_head]] on [[thick filaments|myosin_thick]]."
      },
      "es": {
        "pop": "Hidrolizar ATP en ADP y Pi vuelve a armar cada [[cabeza de miosina|myosin_head]] sobre el [[filamento grueso|myosin_thick]].",
        "blueprint": "Escindir ATP en ADP+Pi recarga cada [[actuador miosina|myosin_head]] a lo largo del [[eje grueso|myosin_thick]] bipolar.",
        "scientific": "La hidrólisis ATP -> ADP + Pi recarga el golpe de recuperación en [[Miosina-II|myosin_head]] del [[eje grueso|myosin_thick]]."
      }
    },
    "mus.ch3.s1.02": {
      "en": {
        "pop": "Staggered [[myosin heads|myosin_head]] on [[thick filaments|myosin_thick]] pull [[actin|actin_thin]] hand-over-hand like tug-of-war.",
        "blueprint": "Out-of-phase [[myosin motors|myosin_head]] on [[thick shafts|myosin_thick]] drive [[actin|actin_thin]] with continuous tension.",
        "scientific": "Asynchronous ~300 [[Myosin-II heads|myosin_head]] per [[thick filament|myosin_thick]] slide [[actin|actin_thin]] without slip."
      },
      "es": {
        "pop": "Las [[cabezas de miosina|myosin_head]] en [[filamentos gruesos|myosin_thick]] halan [[actina|actin_thin]] mano a mano sin soltar la cuerda.",
        "blueprint": "Los [[motores miosina|myosin_head]] desfasados en el [[eje grueso|myosin_thick]] traccionan [[actina|actin_thin]] con fuerza continua.",
        "scientific": "Cerca de 300 [[cabezas S1|myosin_head]] asincrónicas por [[filamento grueso|myosin_thick]] deslizan [[actina|actin_thin]] sin retroceso."
      }
    },
    "mus.ch3.s1.03": {
      "en": {
        "pop": "Because [[myosin thick filaments|myosin_thick]] are bipolar, both halves pull opposite actin sets toward center.",
        "blueprint": "Opposite motor polarity on each [[thick filament|myosin_thick]] reels both flanking actin banks inward together.",
        "scientific": "Tail-to-tail bipolar [[myosin thick filaments|myosin_thick]] pull opposing F-actin arrays symmetrically M-ward."
      },
      "es": {
        "pop": "Como los [[filamentos gruesos|myosin_thick]] son bipolares, ambas mitades halan los juegos opuestos de actina al centro.",
        "blueprint": "La polaridad opuesta en cada [[filamento grueso|myosin_thick]] recoge hacia adentro ambos bancos de actina a la vez.",
        "scientific": "La simetría bipolar de los [[filamentos gruesos|myosin_thick]] tracciona ambos arreglos de F-actina hacia la línea M."
      }
    },
    "mus.ch3.s2.01": {
      "en": {
        "pop": "Neither filament shrinks in length; sliding pulls both [[Z-discs|z_disc]] inward from 2.2 um down to 1.6 um.",
        "blueprint": "Filaments keep constant length while sliding overlap draws [[Z-disc|z_disc]] walls inward from 2.2 um to 1.6 um.",
        "scientific": "By sliding-filament mechanics, constant-length filaments pull [[Z-discs|z_disc]] inward from 2.2 um to 1.6 um."
      },
      "es": {
        "pop": "Ningún filamento se encoge; el deslizamiento acerca ambos [[discos Z|z_disc]] desde 2,2 um hasta 1,6 um.",
        "blueprint": "Los filamentos conservan su largo y el solapamiento acerca los muros [[disco Z|z_disc]] de 2,2 um a 1,6 um.",
        "scientific": "Sin acortar filamentos, el deslizamiento acerca los [[discos Z|z_disc]] de 2,2 um relajado a 1,6 um contraído."
      }
    },
    "mus.ch3.s2.02": {
      "en": {
        "pop": "During shortening, the pale [[I-band|i_band]] and central [[H-zone|h_zone]] visibly narrow while [[titin|titin_spring]] compresses.",
        "blueprint": "As overlap deepens, the [[I-band|i_band]] and central [[H-zone|h_zone]] travel gaps shrink and [[titin|titin_spring]] coils compress.",
        "scientific": "During shortening, [[I-band|i_band]] and bare [[H-zone|h_zone]] widths decrease while elastic [[titin|titin_spring]] compresses."
      },
      "es": {
        "pop": "Al acortarse, la [[banda I|i_band]] clara y la [[zona H|h_zone]] central se estrechan mientras la [[titina|titin_spring]] se comprime.",
        "blueprint": "Al crecer el solapamiento, la [[banda I|i_band]] y la [[zona H|h_zone]] se reducen y los muelles [[titina|titin_spring]] se comprimen.",
        "scientific": "Durante la contracción, se estrechan la [[banda I|i_band]] y la [[zona H|h_zone]] mientras la [[titina|titin_spring]] se pliega."
      }
    },
    "mus.ch3.s2.03": {
      "en": {
        "pop": "Throughout the entire contraction, the dark [[A-band|a_band]] remains constant because thick myosin never shortens.",
        "blueprint": "Across the full stroke range, the dark [[A-band|a_band]] stays locked at fixed length since myosin rods never shrink.",
        "scientific": "Throughout sarcomere shortening, [[A-band|a_band]] width stays invariant (1.6 um) because thick filaments stay rigid."
      },
      "es": {
        "pop": "Durante toda la contracción, la [[banda A|a_band]] oscura mantiene su largo porque la miosina nunca se acorta.",
        "blueprint": "En todo el recorrido, la [[banda A|a_band]] mantiene ancho constante porque las barras de miosina no cambian de largo.",
        "scientific": "Durante todo el acortamiento, la [[banda A|a_band]] permanece constante (1,6 um) al conservarse los filamentos gruesos."
      }
    },
    "mus.ch4.s0.01": {
      "en": {
        "pop": "When motor pulses stop, dense [[SERCA1a pumps|serca1a_pump]] on the [[SR|sr_network]] drive muscle relaxation.",
        "blueprint": "Once trigger spikes cease, high-density [[SERCA1a pumps|serca1a_pump]] lining the [[SR|sr_network]] initiate reset.",
        "scientific": "When action potentials halt, P-type [[SERCA1a|serca1a_pump]] (PDB 1SU4) on the [[SR|sr_network]] drives relaxation."
      },
      "es": {
        "pop": "Al cesar los pulsos motores, densas bombas [[SERCA1a|serca1a_pump]] en el [[RS|sr_network]] impulsan la relajación.",
        "blueprint": "Al terminar la señal motora, bombas [[SERCA1a|serca1a_pump]] de alta densidad en el [[RS|sr_network]] ejecutan el reinicio.",
        "scientific": "Al cesar los pulsos, ATPasas tipo P [[SERCA1a|serca1a_pump]] (PDB 1SU4) del [[RS|sr_network]] inician la relajación."
      }
    },
    "mus.ch4.s0.02": {
      "en": {
        "pop": "Burning one ATP per cycle, [[SERCA1a|serca1a_pump]] actively pumps two Ca2+ ions back into the [[SR lumen|sr_network]].",
        "blueprint": "Spending 1 ATP per cycle, [[SERCA1a|serca1a_pump]] vacuums 2 Ca2+ ions uphill back into the [[SR tank|sr_network]].",
        "scientific": "Using E1/E2 phosphoenzyme cycling, [[SERCA1a|serca1a_pump]] (1SU4) transports 2 Ca2+/ATP into the [[SR|sr_network]]."
      },
      "es": {
        "pop": "Gastando un ATP por ciclo, [[SERCA1a|serca1a_pump]] bombea dos iones Ca2+ de regreso al interior del [[RS|sr_network]].",
        "blueprint": "Con 1 ATP por ciclo, [[SERCA1a|serca1a_pump]] recupera 2 Ca2+ cuesta arriba hacia el depósito del [[RS|sr_network]].",
        "scientific": "Mediante ciclo fosfoenzimático E1/E2, [[SERCA1a|serca1a_pump]] (1SU4) bombea 2 Ca2+/ATP al lumen del [[RS|sr_network]]."
      }
    },
    "mus.ch4.s0.03": {
      "en": {
        "pop": "As Ca2+ leaves [[troponin-tropomyosin|troponin_tropo]], tropomyosin re-blocks actin and [[titin|titin_spring]] restores 2.2 um.",
        "blueprint": "Depleted of Ca2+, [[troponin-tropomyosin|troponin_tropo]] re-locks the track while [[titin|titin_spring]] recoils to 2.2 um.",
        "scientific": "Ca2+ dissociation resets [[troponin-tropomyosin|troponin_tropo]] to its blocked B-state as [[titin|titin_spring]] restores 2.2 um."
      },
      "es": {
        "pop": "Al salir Ca2+ de [[troponina-tropomiosina|troponin_tropo]], esta vuelve a tapar la actina y [[titina|titin_spring]] devuelve 2,2 um.",
        "blueprint": "Sin Ca2+, [[troponina-tropomiosina|troponin_tropo]] rebloquea la pista y los muelles [[titina|titin_spring]] regresan a 2,2 um.",
        "scientific": "Sin Ca2+, [[troponina-tropomiosina|troponin_tropo]] vuelve al estado bloqueado y [[titina|titin_spring]] restaura 2,2 um."
      }
    },
    "mus.ch4.s1.01": {
      "en": {
        "pop": "Zoom to 0.1-0.5 nm in the [[atomic lens|muscle_atoms]] revealing Ca2+ chelation beside Mg2+-ATP hydrolysis.",
        "blueprint": "Drop to 0.1-0.5 nm hardware in the [[atomic lens|muscle_atoms]] auditing Ca2+ gating and Mg2+-ATP fuel cleavage.",
        "scientific": "At 0.1-0.5 nm resolution, the [[atomic inset|muscle_atoms]] resolves EF-hand Ca2+ coordination and Mg2+-ATP."
      },
      "es": {
        "pop": "Acércate a 0,1-0,5 nm en el [[lente atómico|muscle_atoms]] para ver la quelación de Ca2+ junto a Mg2+-ATP.",
        "blueprint": "Desciende a 0,1-0,5 nm en el [[visor atómico|muscle_atoms]] para auditar el acople Ca2+ y la ruptura Mg2+-ATP.",
        "scientific": "A 0,1-0,5 nm, el [[recuadro atómico|muscle_atoms]] resuelve coordinación EF-hand de Ca2+ e hidrólisis Mg2+-ATP."
      }
    },
    "mus.ch4.s1.02": {
      "en": {
        "pop": "Inside [[muscle atoms|muscle_atoms]], a green Ca2+ ion locks into six oxygen atoms of troponin's EF-hand cage.",
        "blueprint": "In [[muscle atoms|muscle_atoms]], divalent Ca2+ snaps into a 6-oxygen EF-hand socket to trigger the troponin switch.",
        "scientific": "In [[muscle atoms|muscle_atoms]], octahedral oxygen ligands chelate Ca2+ (0.100 nm radius) in TnC EF-hand loops."
      },
      "es": {
        "pop": "En [[átomos musculares|muscle_atoms]], un ion verde de Ca2+ encaja entre seis oxígenos de la pinza EF de troponina.",
        "blueprint": "En [[átomos musculares|muscle_atoms]], el Ca2+ encaja en un zócalo de 6 oxígenos para conmutar el bloque troponina.",
        "scientific": "En [[átomos musculares|muscle_atoms]], oxígenos octaédricos coordinan Ca2+ (radio 0,100 nm) en lazos EF de TnC."
      }
    },
    "mus.ch4.s1.03": {
      "en": {
        "pop": "Next to it in [[muscle atoms|muscle_atoms]], Mg2+-ATP cleaves into ADP plus Pi to power myosin and SERCA1a.",
        "blueprint": "Beside it in [[muscle atoms|muscle_atoms]], Mg2+-ATP splits into ADP+Pi, fueling both myosin strokes and SERCA1a.",
        "scientific": "Adjacent in [[muscle atoms|muscle_atoms]], gamma-P cleavage of Mg2+-ATP (-30.5 kJ/mol) drives myosin and SERCA1a."
      },
      "es": {
        "pop": "Junto a él en [[átomos musculares|muscle_atoms]], el Mg2+-ATP se rompe en ADP y Pi para mover miosina y SERCA1a.",
        "blueprint": "Al lado en [[átomos musculares|muscle_atoms]], Mg2+-ATP se escinde en ADP+Pi alimentando miosina y bombas SERCA1a.",
        "scientific": "En [[átomos musculares|muscle_atoms]], la hidrólisis del fosfato gamma de Mg2+-ATP impulsa miosina y SERCA1a."
      }
    },
    "mus.ch4.s2.01": {
      "en": {
        "pop": "[[Sarcolemma|sarcolemma]] waves, [[RyR1|ryr1_channel]] Ca2+, [[myosin|myosin_head]] strokes and [[SERCA1a|serca1a_pump]] turn ATP to force.",
        "blueprint": "[[Sarcolemma|sarcolemma]] pulses, [[RyR1|ryr1_channel]] Ca2+, [[myosin|myosin_head]] motors and [[SERCA1a|serca1a_pump]] convert ATP to force.",
        "scientific": "[[Sarcolemma|sarcolemma]] APs, [[RyR1|ryr1_channel]] Ca2+, [[Myosin-II|myosin_head]] (2MYS) and [[SERCA1a|serca1a_pump]] transduce ATP to work."
      },
      "es": {
        "pop": "Ondas del [[sarcolema|sarcolemma]], Ca2+ por [[RyR1|ryr1_channel]], [[miosina|myosin_head]] y [[SERCA1a|serca1a_pump]] tornan ATP en fuerza.",
        "blueprint": "Pulsos del [[sarcolema|sarcolemma]], [[RyR1|ryr1_channel]], motores [[miosina|myosin_head]] y [[SERCA1a|serca1a_pump]] generan fuerza.",
        "scientific": "Potenciales del [[sarcolema|sarcolemma]], [[RyR1|ryr1_channel]], [[Miosina-II|myosin_head]] y [[SERCA1a|serca1a_pump]] convierten ATP."
      }
    },
    "mus.ch4.s2.02": {
      "en": {
        "pop": "Cycle Ca2+ Trigger, Relaxed 2.2 um and Contracted 1.6 um modes to watch [[Z-discs|z_disc]] slide live.",
        "blueprint": "Switch Ca2+ Trigger, Relaxed 2.2 um and Contracted 1.6 um modes to test live [[Z-disc|z_disc]] travel.",
        "scientific": "Toggle Ca2+ Trigger, Relaxed (2.2 um) and Contracted (1.6 um) states to observe [[Z-disc|z_disc]] excursion."
      },
      "es": {
        "pop": "Alterna los modos Pulso Ca2+, Relajado 2,2 um y Contraído 1,6 um para ver deslizar los [[discos Z|z_disc]].",
        "blueprint": "Conmuta Pulso Ca2+, Relajado 2,2 um y Contraído 1,6 um para probar en vivo el recorrido de los [[discos Z|z_disc]].",
        "scientific": "Alterna Pulso Ca2+, Relajado (2,2 um) y Contraído (1,6 um) para medir el desplazamiento de [[discos Z|z_disc]]."
      }
    },
    "mus.ch4.s2.03": {
      "en": {
        "pop": "Continue next to Immune Defense to see macrophages, antibodies and T-cells guard these specialized tissues.",
        "blueprint": "Proceed next to Immune Defense to inspect how macrophages, IgG antibodies and T-cells defend tissues.",
        "scientific": "Advance to Immune Defense to explore macrophage phagocytosis, IgG neutralization and CD8+ T-cell lysis."
      },
      "es": {
        "pop": "Sigue a Defensa Inmunitaria para ver cómo macrófagos, anticuerpos y linfocitos T protegen estos tejidos.",
        "blueprint": "Avanza a Defensa Inmunitaria para ver cómo macrófagos, anticuerpos IgG y células T defienden el cuerpo.",
        "scientific": "Continúa a Defensa Inmunitaria para explorar fagocitosis, neutralización por IgG y lisis por células T CD8+."
      }
    }
  }
};
