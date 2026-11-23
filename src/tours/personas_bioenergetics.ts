import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 16 (`real-bioenergetics` & `real-membrane-transport`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - `real-bioenergetics`: 40 of 42 cues (95.2%) match base `cue.text` verbatim in `en.pop` with
 *   direct, distraction-free biological prose. Exactly 2 cues use purposeful everyday mental models:
 *   1. `bio.ch1.s2.02` - NADPH/NADH electron carriers vs ATP as rechargeable electron power packs vs single-use coins.
 *   2. `bio.ch4.s0.02` - Chemiosmotic proton gradient spinning F1F0 ATP synthase like dammed water driving a turbine.
 * - `real-membrane-transport`: 40 of 42 cues (95.2%) match base `cue.text` verbatim in `en.pop`.
 *   Exactly 2 cues use purposeful everyday mental models:
 *   1. `mem.ch1.s2.02` - Osmotic water flow through aquaporins like water leveling across a fine semipermeable sieve.
 *   2. `mem.ch3.s1.02` - Passive GLUT1 as a free revolving door versus ATP-driven Na+/K+-ATPase as a powered turnstile.
 */
export const PERSONAS_BIOENERGETICS: TourPersonaMap = {
  "real-bioenergetics": {
    "bio.ch0.s0.01": {
      "en": {
        "pop": "Every breath links [[plant chloroplasts|chloroplast_hull]] and [[animal mitochondria|mito_hull]] in one loop.",
        "blueprint": "Coupled bioenergetic loop: [[chloroplasts|chloroplast_hull]] fix carbon while [[mitochondria|mito_hull]] oxidize it.",
        "scientific": "Oxygenic photosynthesis in [[chloroplasts|chloroplast_hull]] balances aerobic respiration in [[mitochondria|mito_hull]]."
      },
      "es": {
        "pop": "Cada respiro une a los [[cloroplastos|chloroplast_hull]] vegetales y las [[mitocondrias|mito_hull]] animales en un ciclo.",
        "blueprint": "Bucle bioenergético acoplado: los [[cloroplastos|chloroplast_hull]] fijan carbono y las [[mitocondrias|mito_hull]] lo oxidan.",
        "scientific": "La fotosíntesis en [[cloroplastos|chloroplast_hull]] equilibra la respiración aerobia en [[mitocondrias|mito_hull]]."
      }
    },
    "bio.ch0.s0.02": {
      "en": {
        "pop": "The [[chloroplast|chloroplast_hull]] captures sunlight to build glucose and O2 from CO2 and water.",
        "blueprint": "Solar converter [[chloroplast|chloroplast_hull]] turns photon input, CO2 and H2O into glucose plus O2.",
        "scientific": "The ~5 um [[chloroplast|chloroplast_hull]] drives 6 CO2 + 6 H2O + light -> C6H12O6 + 6 O2 synthesis."
      },
      "es": {
        "pop": "El [[cloroplasto|chloroplast_hull]] captura luz solar para fabricar glucosa y O2 desde CO2 y agua.",
        "blueprint": "El módulo solar [[cloroplasto|chloroplast_hull]] transforma fotones, CO2 y H2O en glucosa y O2.",
        "scientific": "El [[cloroplasto|chloroplast_hull]] (~5 um) cataliza 6 CO2 + 6 H2O + luz -> C6H12O6 + 6 O2."
      }
    },
    "bio.ch0.s0.03": {
      "en": {
        "pop": "The [[mitochondrion|mito_hull]] oxidizes that glucose with O2 to charge [[ATP carriers|energy_carriers]].",
        "blueprint": "Power unit [[mitochondrion|mito_hull]] burns glucose with O2 to output universal [[ATP currency|energy_carriers]].",
        "scientific": "The ~1-3 um [[mitochondrion|mito_hull]] oxidizes glucose via O2 to phosphorylate ~32 [[ATP|energy_carriers]]."
      },
      "es": {
        "pop": "La [[mitocondria|mito_hull]] oxida esa glucosa con O2 para recargar [[portadores de ATP|energy_carriers]].",
        "blueprint": "La unidad [[mitocondria|mito_hull]] quema glucosa con O2 para emitir [[divisa ATP|energy_carriers]] celular.",
        "scientific": "La [[mitocondria|mito_hull]] (~1-3 um) oxida glucosa con O2 generando ~32 [[ATP|energy_carriers]] por mol."
      }
    },
    "bio.ch0.s1.01": {
      "en": {
        "pop": "Inside the [[chloroplast|chloroplast_hull]], stacked [[thylakoid|thylakoid]] membranes harvest photons.",
        "blueprint": "Within the [[chloroplast casing|chloroplast_hull]], stacked [[thylakoid|thylakoid]] decks house optical collectors.",
        "scientific": "Inside the [[chloroplast|chloroplast_hull]], appressed [[thylakoid|thylakoid]] grana anchor photosynthetic antennas."
      },
      "es": {
        "pop": "Dentro del [[cloroplasto|chloroplast_hull]], las membranas apiladas de [[tilacoides|thylakoid]] captan fotones.",
        "blueprint": "En la carcasa del [[cloroplasto|chloroplast_hull]], las pilas de [[tilacoides|thylakoid]] alojan colectores solares.",
        "scientific": "En el [[cloroplasto|chloroplast_hull]], las granas de [[tilacoides|thylakoid]] anclan los complejos antena."
      }
    },
    "bio.ch0.s1.02": {
      "en": {
        "pop": "Inside the [[mitochondrion|mito_hull]], folded inner cristae release bond energy from food.",
        "blueprint": "Inside the [[mitochondrial hull|mito_hull]], folded inner cristae racks extract energy from fuel bonds.",
        "scientific": "Within the [[mitochondrion|mito_hull]], inner-membrane cristae expand area for oxidative phosphorylation."
      },
      "es": {
        "pop": "Dentro de la [[mitocondria|mito_hull]], las crestas internas plegadas liberan la energía del alimento.",
        "blueprint": "En el casco de la [[mitocondria|mito_hull]], las crestas plegadas extraen potencia de enlaces orgánicos.",
        "scientific": "Dentro de la [[mitocondria|mito_hull]], las crestas internas amplían la superficie fosforilativa."
      }
    },
    "bio.ch0.s1.03": {
      "en": {
        "pop": "Both organelles convert electron flow into a transmembrane [[proton gradient|proton_grad]] to make ATP.",
        "blueprint": "Both architectures transduce redox current into a pressurized [[proton gradient|proton_grad]] power rail.",
        "scientific": "Both couple membrane electron transport to an electrochemical [[proton-motive force|proton_grad]] for ATP."
      },
      "es": {
        "pop": "Ambos orgánulos convierten flujo de electrones en un [[gradiente de protones|proton_grad]] para crear ATP.",
        "blueprint": "Ambas arquitecturas convierten corriente redox en un riel presurizado de [[protones|proton_grad]].",
        "scientific": "Ambos acoplan transporte electrónico a una [[fuerza protón-motriz|proton_grad]] transmembrana."
      }
    },
    "bio.ch1.s0.01": {
      "en": {
        "pop": "Zoom to the 5 nm [[thylakoid bilayer|thylakoid]], where golden 680 nm photons strike [[PSII|psii]].",
        "blueprint": "Zoom to the 5 nm [[thylakoid bus|thylakoid]] where 680 nm light pulses activate the [[PSII|psii]] input stage.",
        "scientific": "At the 5 nm [[thylakoid membrane|thylakoid]], 680 nm photons excite P680 chlorophylls in [[PSII|psii]] (3JCU)."
      },
      "es": {
        "pop": "Acércate a la [[bicapa tilacoidal|thylakoid]] de 5 nm, donde fotones de 680 nm activan al [[PSII|psii]].",
        "blueprint": "Enfoque en el [[bus tilacoidal|thylakoid]] de 5 nm donde pulsos de 680 nm activan el módulo [[PSII|psii]].",
        "scientific": "En el [[tilacoide|thylakoid]] (5 nm), fotones de 680 nm excitan P680 en [[PSII|psii]] (PDB 3JCU)."
      }
    },
    "bio.ch1.s0.02": {
      "en": {
        "pop": "Excited chlorophyll in [[Photosystem II|psii]] splits two H2O molecules at its Mn4CaO5 cluster.",
        "blueprint": "Photo-energized [[PSII|psii]] runs water electrolysis across its catalytic Mn4CaO5 core.",
        "scientific": "Oxidized P680+ in [[PSII|psii]] (3JCU) extracts electrons from 2 H2O at the Mn4CaO5 OEC cluster."
      },
      "es": {
        "pop": "La clorofila excitada del [[Fotosistema II|psii]] divide dos moléculas de H2O en su núcleo Mn4CaO5.",
        "blueprint": "El módulo fotoactivado [[PSII|psii]] ejecuta fotólisis de agua en su núcleo catalítico Mn4CaO5.",
        "scientific": "El P680+ oxidado en [[PSII|psii]] (3JCU) escinde 2 H2O en el complejo Mn4CaO5 productor de oxígeno."
      }
    },
    "bio.ch1.s0.03": {
      "en": {
        "pop": "Water splitting at [[PSII|psii]] releases breathable O2 gas, four electrons and four luminal H+ ions.",
        "blueprint": "Photolysis output at [[PSII|psii]]: vented O2 byproduct, 4 excited electrons and 4 luminal H+ charges.",
        "scientific": "OEC catalysis in [[PSII|psii]] yields 2 H2O -> O2 + 4 e- + 4 H+ inside the thylakoid lumen."
      },
      "es": {
        "pop": "Al romper agua, [[PSII|psii]] libera gas O2 respirable, cuatro electrones y cuatro H+ al lumen.",
        "blueprint": "Salida de fotólisis en [[PSII|psii]]: gas O2 ventilado, 4 electrones excitados y 4 cargas H+ luminales.",
        "scientific": "La fotólisis en [[PSII|psii]] rinde 2 H2O -> O2 + 4 e- + 4 H+ liberados en el lumen tilacoidal."
      }
    },
    "bio.ch1.s1.01": {
      "en": {
        "pop": "Lipid-soluble plastoquinone carries electrons from [[PSII|psii]] straight to [[Cytochrome b6f|cyt_b6f]].",
        "blueprint": "Hydrophobic plastoquinone shuttles electron packets from [[PSII|psii]] over to [[Cyt b6f|cyt_b6f]].",
        "scientific": "Membrane-diffusible plastoquinol (PQH2) transfers 2 e- from [[PSII|psii]] to dimeric [[Cyt b6f|cyt_b6f]] (6RQF)."
      },
      "es": {
        "pop": "La plastoquinona liposoluble lleva electrones de [[PSII|psii]] directo al [[Citocromo b6f|cyt_b6f]].",
        "blueprint": "La plastoquinona hidrofóbica transporta paquetes de electrones de [[PSII|psii]] al módulo [[Cyt b6f|cyt_b6f]].",
        "scientific": "El plastoquinol (PQH2) transfiere 2 e- desde [[PSII|psii]] al dímero [[Citocromo b6f|cyt_b6f]] (PDB 6RQF)."
      }
    },
    "bio.ch1.s1.02": {
      "en": {
        "pop": "As electrons pass through [[Cyt b6f|cyt_b6f]], the complex pumps extra H+ into the [[proton gradient|proton_grad]].",
        "blueprint": "Relay node [[Cyt b6f|cyt_b6f]] uses electron drop to pump extra H+ into the [[proton reservoir|proton_grad]].",
        "scientific": "Via the Q-cycle, [[Cyt b6f|cyt_b6f]] (6RQF) translocates 4 H+ per 2 e- into the luminal [[gradient|proton_grad]]."
      },
      "es": {
        "pop": "Al cruzar [[Cyt b6f|cyt_b6f]], los electrones bombean más H+ hacia el [[gradiente de protones|proton_grad]].",
        "blueprint": "El nodo [[Cyt b6f|cyt_b6f]] usa la caída electrónica para bombear H+ al [[depósito protónico|proton_grad]].",
        "scientific": "Por ciclo Q, [[Cyt b6f|cyt_b6f]] (6RQF) transloca 4 H+ por cada 2 e- al [[gradiente|proton_grad]] luminal."
      }
    },
    "bio.ch1.s1.03": {
      "en": {
        "pop": "Next, mobile luminal plastocyanin hands those lowered-energy electrons onward to [[PSI|psi]].",
        "blueprint": "Copper carrier plastocyanin then routes spent electrons across the lumen to booster [[PSI|psi]].",
        "scientific": "Luminal copper protein plastocyanin (1AG6) donates single electrons to P700+ inside [[PSI|psi]] (4XK8)."
      },
      "es": {
        "pop": "Luego, la plastocianina móvil entrega esos electrones de menor energía al [[PSI|psi]].",
        "blueprint": "La plastocianina con cobre enruta los electrones por el lumen hasta el refuerzo [[PSI|psi]].",
        "scientific": "La plastocianina luminal (1AG6) cede electrones unitarios al centro P700+ de [[PSI|psi]] (4XK8)."
      }
    },
    "bio.ch1.s2.01": {
      "en": {
        "pop": "A 700 nm photon re-excites electrons inside [[Photosystem I|psi]] to complete the linear Z-scheme.",
        "blueprint": "Stage two booster [[Photosystem I|psi]] injects 700 nm photon voltage to complete the Z-scheme.",
        "scientific": "A 700 nm photon re-excites P700 in [[PSI-LHCI|psi]] (PDB 4XK8), driving electrons onto ferredoxin."
      },
      "es": {
        "pop": "Un fotón de 700 nm reexcita los electrones en el [[Fotosistema I|psi]] completando el esquema Z.",
        "blueprint": "El amplificador [[Fotosistema I|psi]] inyecta un pulso de 700 nm para cerrar el esquema Z lineal.",
        "scientific": "Un fotón de 700 nm reexcita P700 en [[PSI-LHCI|psi]] (PDB 4XK8) y reduce ferredoxina estromal."
      }
    },
    "bio.ch1.s2.02": {
      "en": {
        "pop": "[[PSI|psi]] loads [[NADPH|energy_carriers]] like rechargeable electron power packs, unlike single-use ATP coins.",
        "blueprint": "[[PSI|psi]] charges [[NADPH redox packs|energy_carriers]] for electron delivery, distinct from direct ATP energy.",
        "scientific": "Via FNR, [[PSI|psi]] reduces NADP+ + H+ to [[NADPH|energy_carriers]] (2 e- redox hydride vs ATP phosphoanhydride)."
      },
      "es": {
        "pop": "[[PSI|psi]] carga [[NADPH|energy_carriers]] como baterías recargables de electrones, no como monedas de ATP.",
        "blueprint": "[[PSI|psi]] recarga [[paquetes redox NADPH|energy_carriers]] de electrones, distintos al ATP de gasto directo.",
        "scientific": "Vía FNR, [[PSI|psi]] reduce NADP+ + H+ a [[NADPH|energy_carriers]] (hidruro redox frente al enlace fosfato ATP)."
      }
    },
    "bio.ch1.s2.03": {
      "en": {
        "pop": "Fresh [[NADPH|energy_carriers]] diffuses into the stroma to reduce CO2 during carbon fixation.",
        "blueprint": "Charged [[NADPH carriers|energy_carriers]] export reducing power into the stroma for carbon assembly.",
        "scientific": "Stromal [[NADPH|energy_carriers]] supplies 12 reducing equivalents per 6 CO2 fixed in the Calvin cycle."
      },
      "es": {
        "pop": "El [[NADPH|energy_carriers]] recién cargado difunde al estroma para reducir CO2 al fijar carbono.",
        "blueprint": "Los [[portadores NADPH|energy_carriers]] exportan poder reductor al estroma para ensamblar carbono.",
        "scientific": "El [[NADPH|energy_carriers]] estromal aporta 12 equivalentes reductores por cada 6 CO2 fijados."
      }
    },
    "bio.ch2.s0.01": {
      "en": {
        "pop": "Protons crowded in the lumen build a steep [[proton gradient|proton_grad]] across the thylakoid membrane.",
        "blueprint": "Accumulated luminal H+ charges build a sharp [[proton pressure head|proton_grad]] across the bilayer.",
        "scientific": "Photolysis and b6f pumping establish a ~2.5-unit delta-pH [[proton gradient|proton_grad]] (pH 5.5 vs 8.0)."
      },
      "es": {
        "pop": "Los protones acumulados en el lumen crean un fuerte [[gradiente de protones|proton_grad]] tilacoidal.",
        "blueprint": "Las cargas H+ acumuladas en el lumen levantan una alta [[presión protónica|proton_grad]] de membrana.",
        "scientific": "Fotólisis y b6f generan un [[gradiente protónico|proton_grad]] de ~2,5 unidades de pH (5,5 frente a 8,0)."
      }
    },
    "bio.ch2.s0.02": {
      "en": {
        "pop": "Those H+ ions rush back to the stroma through rotary [[CF1CF0 ATP synthase|cf1cf0]], turning its ring.",
        "blueprint": "Pressurized H+ vents into the stroma through rotary generator [[CF1CF0|cf1cf0]], spinning its c-ring.",
        "scientific": "Downhill H+ flux rotates the 14-subunit c-ring of chloroplast [[CF1CF0|cf1cf0]] (PDB 6FKF; ~4.67 H+/ATP)."
      },
      "es": {
        "pop": "Esos iones H+ vuelven al estroma por la [[ATP sintasa CF1CF0|cf1cf0]] girando su anillo rotatorio.",
        "blueprint": "El flujo presurizado de H+ gira el rotor del generador [[CF1CF0|cf1cf0]] al salir hacia el estroma.",
        "scientific": "El flujo pasivo de H+ rota el anillo c14 de la [[CF1CF0|cf1cf0]] cloroplástica (PDB 6FKF; ~4,67 H+/ATP)."
      }
    },
    "bio.ch2.s0.03": {
      "en": {
        "pop": "Each rotation of [[CF1CF0|cf1cf0]] forges stromal [[ATP|energy_carriers]] needed to run the Calvin cycle.",
        "blueprint": "Every revolution of [[CF1CF0|cf1cf0]] stamps stromal [[ATP fuel|energy_carriers]] for carbon synthesis.",
        "scientific": "Conformational cycling in [[CF1CF0|cf1cf0]] yields 18 stromal [[ATP|energy_carriers]] per glucose equivalent."
      },
      "es": {
        "pop": "Cada giro de [[CF1CF0|cf1cf0]] sintetiza el [[ATP|energy_carriers]] estromal que mueve el ciclo de Calvin.",
        "blueprint": "Cada revolución de [[CF1CF0|cf1cf0]] acuña combustible [[ATP|energy_carriers]] en el estroma para fijar CO2.",
        "scientific": "El ciclo catalítico de [[CF1CF0|cf1cf0]] aporta 18 [[ATP|energy_carriers]] estromales por glucosa formada."
      }
    },
    "bio.ch2.s1.01": {
      "en": {
        "pop": "In the stroma, sixteen-subunit [[RuBisCO|rubisco]] captures CO2 onto five-carbon RuBP rings.",
        "blueprint": "In the stroma bay, 16-part enzyme [[RuBisCO|rubisco]] welds inorganic CO2 onto 5-carbon RuBP acceptors.",
        "scientific": "Stromal L8S8 hexadecamer [[RuBisCO|rubisco]] (PDB 1RCX) carboxylates 5-carbon RuBP with dissolved CO2."
      },
      "es": {
        "pop": "En el estroma, [[RuBisCO|rubisco]] de dieciséis subunidades fija CO2 sobre moléculas de RuBP de 5 carbonos.",
        "blueprint": "En la cámara estromal, [[RuBisCO|rubisco]] acopla CO2 inorgánico a aceptores RuBP de 5 carbonos.",
        "scientific": "El hexadecámero L8S8 [[RuBisCO|rubisco]] (PDB 1RCX) carboxila ribulosa-1,5-bisfosfato con CO2."
      }
    },
    "bio.ch2.s1.02": {
      "en": {
        "pop": "Spending 18 ATP and 12 NADPH from [[energy carriers|energy_carriers]], the cycle turns six CO2 into sugar.",
        "blueprint": "Consuming 18 ATP and 12 NADPH from [[power rails|energy_carriers]], Calvin assembly converts 6 CO2 to sugar.",
        "scientific": "Six Calvin turns expend 18 ATP and 12 NADPH ([[energy carriers|energy_carriers]]) to net 2 G3P -> 1 glucose."
      },
      "es": {
        "pop": "Gastando 18 ATP y 12 NADPH de [[portadores|energy_carriers]], el ciclo convierte seis CO2 en azúcar.",
        "blueprint": "Consumiendo 18 ATP y 12 NADPH de los [[rieles energéticos|energy_carriers]], arma azúcar con 6 CO2.",
        "scientific": "Seis vueltas gastan 18 ATP y 12 NADPH ([[portadores|energy_carriers]]) rindiendo 2 G3P -> 1 glucosa."
      }
    },
    "bio.ch2.s1.03": {
      "en": {
        "pop": "Assembled glucose leaves the [[chloroplast|chloroplast_hull]] after [[RuBisCO|rubisco]] fixes airborne carbon.",
        "blueprint": "Finished glucose ships out of the [[chloroplast|chloroplast_hull]] once [[RuBisCO|rubisco]] locks atmospheric carbon.",
        "scientific": "Triose export exits the [[chloroplast|chloroplast_hull]] as C6H12O6 fixed by stromal [[RuBisCO|rubisco]] (1RCX)."
      },
      "es": {
        "pop": "La glucosa armada sale del [[cloroplasto|chloroplast_hull]] tras la fijación de carbono por [[RuBisCO|rubisco]].",
        "blueprint": "La glucosa terminada sale del [[cloroplasto|chloroplast_hull]] después de que [[RuBisCO|rubisco]] fije CO2.",
        "scientific": "Las triosas salen del [[cloroplasto|chloroplast_hull]] como C6H12O6 fijado por [[RuBisCO|rubisco]] (1RCX)."
      }
    },
    "bio.ch2.s2.01": {
      "en": {
        "pop": "In the cytosol, ten enzymes of [[glycolysis|glycolysis]] split one six-carbon glucose into two pyruvate.",
        "blueprint": "Across the cytosol bridge, a 10-step [[glycolysis|glycolysis]] pipeline cleaves C6 glucose into twin C3 pyruvates.",
        "scientific": "Cytosolic [[glycolysis|glycolysis]] (including GAPDH 1U8F) cleaves 1 C6H12O6 into 2 3-carbon pyruvate."
      },
      "es": {
        "pop": "En el citosol, diez enzimas de [[glucólisis|glycolysis]] dividen una glucosa de seis carbonos en dos piruvatos.",
        "blueprint": "En el puente citosólico, la línea de [[glucólisis|glycolysis]] parte glucosa C6 en dos piruvatos C3.",
        "scientific": "La [[glucólisis|glycolysis]] citosólica (con GAPDH 1U8F) escinde 1 C6H12O6 en 2 piruvatos de 3 carbonos."
      }
    },
    "bio.ch2.s2.02": {
      "en": {
        "pop": "[[Glycolysis|glycolysis]] runs without oxygen, netting 2 ATP and 2 NADH [[carriers|energy_carriers]] fast.",
        "blueprint": "Anaerobic [[glycolysis|glycolysis]] needs zero O2, outputting 2 net ATP plus 2 NADH [[carriers|energy_carriers]].",
        "scientific": "Oxygen-independent [[glycolysis|glycolysis]] nets 2 substrate-level ATP and 2 NADH [[carriers|energy_carriers]]."
      },
      "es": {
        "pop": "La [[glucólisis|glycolysis]] funciona sin oxígeno y rinde rápido 2 ATP y 2 [[portadores|energy_carriers]] NADH.",
        "blueprint": "La [[glucólisis|glycolysis]] anaerobia opera sin O2 y entrega 2 ATP netos más 2 [[portadores|energy_carriers]] NADH.",
        "scientific": "La [[glucólisis|glycolysis]] anaerobia genera 2 ATP netos a nivel de sustrato y 2 NADH [[portadores|energy_carriers]]."
      }
    },
    "bio.ch2.s2.03": {
      "en": {
        "pop": "When O2 is present, twin pyruvate molecules cross into the [[mitochondrion|mito_hull]] for full oxidation.",
        "blueprint": "With O2 online, both pyruvate outputs route into the [[mitochondrion|mito_hull]] for complete combustion.",
        "scientific": "Under aerobic conditions, 2 pyruvate import into the [[mitochondrion|mito_hull]] via MPC for matrix oxidation."
      },
      "es": {
        "pop": "Cuando hay O2, ambos piruvatos cruzan hacia la [[mitocondria|mito_hull]] para su oxidación completa.",
        "blueprint": "Con O2 disponible, ambos piruvatos ingresan en la [[mitocondria|mito_hull]] para oxidación total.",
        "scientific": "En presencia de O2, 2 piruvatos entran en la [[mitocondria|mito_hull]] por MPC para oxidarse en matriz."
      }
    },
    "bio.ch3.s0.01": {
      "en": {
        "pop": "Inside the [[mitochondrial matrix|mito_hull]], pyruvate becomes acetyl-CoA and enters the [[Krebs cycle|krebs_cycle]].",
        "blueprint": "In the [[matrix chamber|mito_hull]], pyruvate converts to acetyl-CoA feeding the rotary [[Krebs loop|krebs_cycle]].",
        "scientific": "In the [[matrix|mito_hull]], PDH oxidizes pyruvate to acetyl-CoA (+2 CO2, 2 NADH) for the [[Krebs cycle|krebs_cycle]]."
      },
      "es": {
        "pop": "En la [[matriz mitocondrial|mito_hull]], el piruvato pasa a acetil-CoA y entra al [[ciclo de Krebs|krebs_cycle]].",
        "blueprint": "En la [[cámara matricial|mito_hull]], el piruvato forma acetil-CoA que alimenta el [[bucle de Krebs|krebs_cycle]].",
        "scientific": "En la [[matriz|mito_hull]], PDH convierte piruvato en acetil-CoA para iniciar el [[ciclo de Krebs|krebs_cycle]]."
      }
    },
    "bio.ch3.s0.02": {
      "en": {
        "pop": "Citrate synthase drives the [[Krebs cycle|krebs_cycle]], exhaling six CO2 back to [[chloroplasts|chloroplast_hull]].",
        "blueprint": "Citrate synthase turns the [[Krebs ring|krebs_cycle]], venting 6 exhaust CO2 back to [[chloroplasts|chloroplast_hull]].",
        "scientific": "Citrate synthase (PDB 1CTS) initiates the [[Krebs cycle|krebs_cycle]], releasing 6 CO2/glucose for [[chloroplasts|chloroplast_hull]]."
      },
      "es": {
        "pop": "La citrato sintasa impulsa el [[ciclo de Krebs|krebs_cycle]], exhalando seis CO2 a los [[cloroplastos|chloroplast_hull]].",
        "blueprint": "La citrato sintasa mueve el [[anillo de Krebs|krebs_cycle]] y devuelve 6 CO2 hacia los [[cloroplastos|chloroplast_hull]].",
        "scientific": "La citrato sintasa (PDB 1CTS) inicia el [[ciclo de Krebs|krebs_cycle]] liberando 6 CO2 hacia [[cloroplastos|chloroplast_hull]]."
      }
    },
    "bio.ch3.s0.03": {
      "en": {
        "pop": "Together with glycolysis, the [[Krebs cycle|krebs_cycle]] loads 10 NADH and 2 FADH2 [[carriers|energy_carriers]].",
        "blueprint": "Combined with glycolysis, the [[Krebs engine|krebs_cycle]] charges 10 NADH and 2 FADH2 [[shuttles|energy_carriers]].",
        "scientific": "Full oxidation via [[Krebs|krebs_cycle]] + glycolysis + PDH yields 2 GTP, 10 NADH and 2 FADH2 [[carriers|energy_carriers]]."
      },
      "es": {
        "pop": "Junto con la glucólisis, el [[ciclo de Krebs|krebs_cycle]] carga 10 NADH y 2 FADH2 [[portadores|energy_carriers]].",
        "blueprint": "Sumado a la glucólisis, el [[motor de Krebs|krebs_cycle]] recarga 10 NADH y 2 FADH2 [[lanzaderas|energy_carriers]].",
        "scientific": "Glucólisis, PDH y [[ciclo de Krebs|krebs_cycle]] rinden 2 GTP, 10 NADH y 2 FADH2 [[portadores|energy_carriers]]."
      }
    },
    "bio.ch3.s1.01": {
      "en": {
        "pop": "On inner cristae, [[Complex I|complex_i]] strips electrons from NADH and pumps four protons outward.",
        "blueprint": "Cristae port [[Complex I|complex_i]] unloads NADH electrons and pumps 4 H+ across the inner membrane.",
        "scientific": "NADH dehydrogenase [[Complex I|complex_i]] (PDB 5XTD) oxidizes NADH to Q while pumping 4 H+/2 e-."
      },
      "es": {
        "pop": "En las crestas internas, el [[Complejo I|complex_i]] toma electrones del NADH y bombea cuatro protones fuera.",
        "blueprint": "El puerto [[Complejo I|complex_i]] descarga electrones del NADH y bombea 4 H+ hacia el exterior interno.",
        "scientific": "La NADH deshidrogenasa [[Complejo I|complex_i]] (PDB 5XTD) reduce Q bombeando 4 H+ por cada 2 e-."
      }
    },
    "bio.ch3.s1.02": {
      "en": {
        "pop": "[[Complex II|complex_ii]] accepts electrons from FADH2 without pumping H+, feeding the same ubiquinone pool.",
        "blueprint": "Bypass input [[Complex II|complex_ii]] injects FADH2 electrons directly to ubiquinone with 0 H+ pumped.",
        "scientific": "Succinate dehydrogenase [[Complex II|complex_ii]] (PDB 1ZOY) feeds FADH2 electrons to Q without H+ pumping."
      },
      "es": {
        "pop": "El [[Complejo II|complex_ii]] acepta electrones de FADH2 sin bombear H+ hacia la misma reserva de ubiquinona.",
        "blueprint": "El puerto alterno [[Complejo II|complex_ii]] inyecta electrones FADH2 a la ubiquinona con 0 H+ bombeados.",
        "scientific": "La succinato deshidrogenasa [[Complejo II|complex_ii]] (1ZOY) cede e- de FADH2 a Q sin translocar H+."
      }
    },
    "bio.ch3.s1.03": {
      "en": {
        "pop": "[[Complex III|complex_iii]] relays electrons to cytochrome c while pumping four more H+ into the [[gradient|proton_grad]].",
        "blueprint": "Relay pump [[Complex III|complex_iii]] passes electrons to Cyt c while adding 4 H+ to the [[proton rail|proton_grad]].",
        "scientific": "Cytochrome bc1 [[Complex III|complex_iii]] (PDB 1BGY) transfers 2 e- to Cyt c and adds 4 H+ to the [[gradient|proton_grad]]."
      },
      "es": {
        "pop": "El [[Complejo III|complex_iii]] pasa electrones al citocromo c bombeando cuatro H+ más al [[gradiente|proton_grad]].",
        "blueprint": "La bomba [[Complejo III|complex_iii]] transfiere electrones a Cyt c sumando 4 H+ al [[riel protónico|proton_grad]].",
        "scientific": "El complejo bc1 [[Complejo III|complex_iii]] (1BGY) reduce Cyt c bombeando 4 H+ al [[gradiente|proton_grad]]."
      }
    },
    "bio.ch3.s2.01": {
      "en": {
        "pop": "Cytochrome c delivers electrons from [[Complex III|complex_iii]] to copper-heme [[Complex IV|complex_iv]].",
        "blueprint": "Mobile carrier Cyt c bridges output from [[Complex III|complex_iii]] into terminal [[Complex IV|complex_iv]].",
        "scientific": "Soluble cytochrome c (1HRC) shuttles single electrons from [[Complex III|complex_iii]] to [[Complex IV|complex_iv]] (1V54)."
      },
      "es": {
        "pop": "El citocromo c entrega electrones del [[Complejo III|complex_iii]] al [[Complejo IV|complex_iv]] de cobre y hemo.",
        "blueprint": "La lanzadera Cyt c enlaza la salida del [[Complejo III|complex_iii]] con la terminal [[Complejo IV|complex_iv]].",
        "scientific": "El citocromo c (1HRC) lleva electrones desde [[Complejo III|complex_iii]] hasta [[Complejo IV|complex_iv]] (1V54)."
      }
    },
    "bio.ch3.s2.02": {
      "en": {
        "pop": "[[Complex IV|complex_iv]] pumps two H+ and unites electrons, protons and O2 to form clean H2O.",
        "blueprint": "Terminal sink [[Complex IV|complex_iv]] pumps 2 H+ and merges spent electrons with O2 into H2O.",
        "scientific": "Cytochrome c oxidase [[Complex IV|complex_iv]] (1V54) pumps 2 H+ and reduces 1/2 O2 + 2 H+ + 2 e- -> H2O."
      },
      "es": {
        "pop": "El [[Complejo IV|complex_iv]] bombea dos H+ y une electrones, protones y O2 formando agua H2O limpia.",
        "blueprint": "El sumidero terminal [[Complejo IV|complex_iv]] bombea 2 H+ y combina electrones con O2 para formar H2O.",
        "scientific": "La citocromo c oxidasa [[Complejo IV|complex_iv]] (1V54) bombea 2 H+ y reduce 1/2 O2 + 2 H+ + 2 e- -> H2O."
      }
    },
    "bio.ch3.s2.03": {
      "en": {
        "pop": "Remove O2 and [[Complex IV|complex_iv]] halts instantly, backing up the entire electron chain.",
        "blueprint": "Cut O2 supply and terminal [[Complex IV|complex_iv]] stalls at once, freezing the entire redox pipeline.",
        "scientific": "Without terminal O2 acceptor, [[Complex IV|complex_iv]] arrests immediately, stalling Complexes I-III."
      },
      "es": {
        "pop": "Si falta O2, el [[Complejo IV|complex_iv]] se frena al instante y atasca toda la cadena electrónica.",
        "blueprint": "Sin suministro de O2, la terminal [[Complejo IV|complex_iv]] se bloquea y detiene toda la línea redox.",
        "scientific": "Sin aceptor terminal O2, el [[Complejo IV|complex_iv]] se detiene y frena de golpe a los Complejos I-III."
      }
    },
    "bio.ch4.s0.01": {
      "en": {
        "pop": "Complexes I, III and IV pack a dense [[proton gradient|proton_grad]] inside the intermembrane space.",
        "blueprint": "Pumps I, III and IV charge a dense electrochemical [[proton gradient|proton_grad]] in the outer cristae slot.",
        "scientific": "Complexes I, III and IV pump 10 H+/NADH (6 H+/FADH2), charging the cristae [[proton gradient|proton_grad]]."
      },
      "es": {
        "pop": "Los complejos I, III y IV concentran un denso [[gradiente de protones|proton_grad]] en el espacio intermembrana.",
        "blueprint": "Las bombas I, III y IV cargan un intenso [[gradiente protónico|proton_grad]] en el espacio intermembrana.",
        "scientific": "Los complejos I, III y IV bombean 10 H+/NADH (6/FADH2) cargando el [[gradiente protónico|proton_grad]]."
      }
    },
    "bio.ch4.s0.02": {
      "en": {
        "pop": "Trapped [[protons|proton_grad]] pile up like dammed water, rushing through [[ATP synthase|f1f0_atps]] like a turbine.",
        "blueprint": "Pressurized [[proton flow|proton_grad]] drives rotary [[F1F0 ATP synthase|f1f0_atps]] as a molecular turbine.",
        "scientific": "Chemiosmotic [[proton-motive force|proton_grad]] spins the c8 rotor of [[F1F0 ATP synthase|f1f0_atps]] (5ARA) to forge ATP."
      },
      "es": {
        "pop": "Los [[protones|proton_grad]] se acumulan como agua en una presa y giran la turbina de la [[ATP sintasa|f1f0_atps]].",
        "blueprint": "La [[presión protónica|proton_grad]] impulsa a la [[ATP sintasa F1F0|f1f0_atps]] como turbina molecular rotatoria.",
        "scientific": "La [[fuerza protón-motriz|proton_grad]] gira el anillo c8 de [[ATP sintasa F1F0|f1f0_atps]] (5ARA) formando ATP."
      }
    },
    "bio.ch4.s0.03": {
      "en": {
        "pop": "Aerobic [[F1F0 ATP synthase|f1f0_atps]] yields ~32 ATP per glucose versus just 2 ATP in anaerobic [[glycolysis|glycolysis]].",
        "blueprint": "Aerobic [[F1F0 output|f1f0_atps]] hits ~32 ATP per glucose versus only 2 ATP from fallback [[glycolysis|glycolysis]].",
        "scientific": "Oxidative [[F1F0 ATP synthase|f1f0_atps]] (~30-32 ATP/glucose) outproduces anaerobic [[glycolysis|glycolysis]] (2 ATP) ~16-fold."
      },
      "es": {
        "pop": "La [[ATP sintasa F1F0|f1f0_atps]] aerobia rinde ~32 ATP por glucosa frente a solo 2 ATP en [[glucólisis|glycolysis]].",
        "blueprint": "La salida aerobia de [[F1F0|f1f0_atps]] alcanza ~32 ATP por glucosa frente a 2 ATP de [[glucólisis|glycolysis]] basal.",
        "scientific": "La fosforilación en [[F1F0|f1f0_atps]] (~30-32 ATP/glucosa) supera ~16 veces a la [[glucólisis|glycolysis]] anaerobia."
      }
    },
    "bio.ch4.s1.01": {
      "en": {
        "pop": "Zoom to 0.1 nm atomic scale in the [[cofactor lens|cofactor_atoms]] showing Chlorophyll a and ATP.",
        "blueprint": "Descend to 0.1 nm atomic hardware in the [[cofactor lens|cofactor_atoms]] inspecting Chlorophyll a and ATP.",
        "scientific": "At 0.1 nm atomic resolution, the [[cofactor inset|cofactor_atoms]] resolves Chlorophyll a beside Mg-ATP."
      },
      "es": {
        "pop": "Acércate a escala atómica de 0,1 nm en el [[lente cofactor|cofactor_atoms]] con Clorofila a y ATP.",
        "blueprint": "Desciende a 0,1 nm en el [[visor cofactor|cofactor_atoms]] para auditar Clorofila a y ATP átomo a átomo.",
        "scientific": "A resolución atómica (0,1 nm), el [[recuadro cofactor|cofactor_atoms]] muestra Clorofila a junto a Mg-ATP."
      }
    },
    "bio.ch4.s1.02": {
      "en": {
        "pop": "In [[cofactor atoms|cofactor_atoms]], a central green Mg2+ atom sits inside four nitrogens to catch light.",
        "blueprint": "In [[cofactor atoms|cofactor_atoms]], a central Mg2+ ion coordinated by four N atoms tunes optical absorption.",
        "scientific": "Inside [[cofactor atoms|cofactor_atoms]], porphyrin N4 coordinates central Mg2+ in Chlorophyll a (C55H72MgN4O5)."
      },
      "es": {
        "pop": "En [[átomos cofactores|cofactor_atoms]], un átomo central verde de Mg2+ entre cuatro nitrógenos capta luz.",
        "blueprint": "En [[átomos cofactores|cofactor_atoms]], un ion Mg2+ coordinado por cuatro N sintoniza la absorción solar.",
        "scientific": "En [[átomos cofactores|cofactor_atoms]], cuatro N porfirínicos coordinan Mg2+ en Clorofila a (C55H72MgN4O5)."
      }
    },
    "bio.ch4.s1.03": {
      "en": {
        "pop": "Beside it, C, H, N, O and three P atoms in [[ATP|cofactor_atoms]] store energy in the gamma-phosphate bond.",
        "blueprint": "Alongside it, C, H, N, O and three P atoms in [[ATP|cofactor_atoms]] store work in the terminal gamma-P bond.",
        "scientific": "Adjacent C, H, N, O and three P atoms in [[ATP|cofactor_atoms]] release ~-30.5 kJ/mol upon gamma-P hydrolysis."
      },
      "es": {
        "pop": "A su lado, C, H, N, O y tres fósforos del [[ATP|cofactor_atoms]] guardan energía en el enlace gamma-fosfato.",
        "blueprint": "Al lado, C, H, N, O y tres P del [[ATP|cofactor_atoms]] almacenan trabajo en el enlace gamma terminal.",
        "scientific": "Los átomos C, H, N, O y 3 P del [[ATP|cofactor_atoms]] liberan ~-30,5 kJ/mol al hidrolizar su gamma-fosfato."
      }
    },
    "bio.ch4.s2.01": {
      "en": {
        "pop": "[[Chloroplasts|chloroplast_hull]] and [[mitochondria|mito_hull]] run opposite carbon chemistry on shared rotary engines.",
        "blueprint": "[[Chloroplasts|chloroplast_hull]] and [[mitochondria|mito_hull]] mirror carbon I/O using homologous proton-driven turbines.",
        "scientific": "[[Chloroplasts|chloroplast_hull]] and [[mitochondria|mito_hull]] invert carbon redox using conserved chemiosmotic F-ATPases."
      },
      "es": {
        "pop": "[[Cloroplastos|chloroplast_hull]] y [[mitocondrias|mito_hull]] corren química de carbono opuesta con motores comunes.",
        "blueprint": "[[Cloroplastos|chloroplast_hull]] y [[mitocondrias|mito_hull]] invierten el flujo de carbono con turbinas homólogas.",
        "scientific": "[[Cloroplastos|chloroplast_hull]] y [[mitocondrias|mito_hull]] invierten el redox carbónico con F-ATPasas homólogas."
      }
    },
    "bio.ch4.s2.02": {
      "en": {
        "pop": "Toggle Sun and O2 modes to watch the [[proton gradient|proton_grad]] and [[ATP synthase|f1f0_atps]] respond live.",
        "blueprint": "Switch Sun and O2 controls to test live throttling of [[proton pressure|proton_grad]] and [[F1F0 output|f1f0_atps]].",
        "scientific": "Toggle light and O2 states to observe live coupling between [[delta-pH|proton_grad]] and [[F1F0|f1f0_atps]] yield."
      },
      "es": {
        "pop": "Alterna los modos Sol y O2 para ver responder en vivo al [[gradiente|proton_grad]] y la [[ATP sintasa|f1f0_atps]].",
        "blueprint": "Conmuta los controles Sol y O2 para probar en vivo la [[presión H+|proton_grad]] y la salida [[F1F0|f1f0_atps]].",
        "scientific": "Alterna luz y O2 para medir en vivo el acople entre el [[delta-pH|proton_grad]] y la [[F1F0|f1f0_atps]]."
      }
    },
    "bio.ch4.s2.03": {
      "en": {
        "pop": "Continue next to the Membrane Transport Lab to see how cells spend ATP moving water, glucose and ions.",
        "blueprint": "Proceed next to Membrane Transport to trace how selective bilayers spend ATP on water, sugar and ions.",
        "scientific": "Advance to the Membrane Transport Lab to examine passive channels, GLUT1 and ATP-driven Na+/K+ pumps."
      },
      "es": {
        "pop": "Sigue al Laboratorio de Transporte de Membrana para ver cómo las células gastan ATP moviendo iones y agua.",
        "blueprint": "Avanza a Transporte de Membrana para ver cómo las bicapas gastan ATP al mover agua, glucosa e iones.",
        "scientific": "Continúa al Laboratorio de Transporte de Membrana para explorar canales pasivos, GLUT1 y bombas Na+/K+."
      }
    }
  },
  "real-membrane-transport": {
    "mem.ch0.s0.01": {
      "en": {
        "pop": "Every cell survives by controlling what crosses its selective 5 nm [[phospholipid bilayer|bilayer]].",
        "blueprint": "Cellular homeostasis depends on strict I/O gating across a 5 nm [[phospholipid bilayer|bilayer]].",
        "scientific": "Homeostasis requires selective permeability across the ~5 nm amphipathic [[phospholipid bilayer|bilayer]]."
      },
      "es": {
        "pop": "Cada célula sobrevive controlando qué cruza su selectiva [[bicapa fosfolipídica|bilayer]] de 5 nm.",
        "blueprint": "La homeostasis celular depende del control estricto de entrada en la [[bicapa|bilayer]] de 5 nm.",
        "scientific": "La homeostasis exige permeabilidad selectiva a través de la [[bicapa fosfolipídica|bilayer]] de ~5 nm."
      }
    },
    "mem.ch0.s0.02": {
      "en": {
        "pop": "Above sit a wall-less [[animal cell|animal_cell]] and a walled [[plant cell|plant_cell]] facing live osmosis.",
        "blueprint": "Upper stage pairs an unarmored [[animal chassis|animal_cell]] beside a walled [[plant cell|plant_cell]] under osmosis.",
        "scientific": "The upper comparator contrasts a wall-less [[animal cell|animal_cell]] and a cellulose-walled [[plant cell|plant_cell]]."
      },
      "es": {
        "pop": "Arriba aparecen una [[célula animal|animal_cell]] sin pared y una [[célula vegetal|plant_cell]] con pared ante ósmosis.",
        "blueprint": "El panel superior compara un [[chasis animal|animal_cell]] sin muro y una [[célula vegetal|plant_cell]] rígida.",
        "scientific": "El comparador superior contrasta una [[célula animal|animal_cell]] sin pared y una [[vegetal|plant_cell]] con celulosa."
      }
    },
    "mem.ch0.s0.03": {
      "en": {
        "pop": "Below, the same [[bilayer|bilayer]] reveals passive diffusion, channels, active pumps and bulk vesicles.",
        "blueprint": "Below, the magnified [[bilayer|bilayer]] exposes all five transport classes from gas pores to vesicles.",
        "scientific": "Below, the 5 nm [[bilayer|bilayer]] displays simple diffusion, AQP1, GLUT1, Na+/K+-ATPase and vesicular traffic."
      },
      "es": {
        "pop": "Abajo, la misma [[bicapa|bilayer]] revela difusión pasiva, canales, bombas activas y vesículas en masa.",
        "blueprint": "Abajo, la [[bicapa|bilayer]] ampliada expone las cinco clases de transporte, de gases a vesículas.",
        "scientific": "Abajo, la [[bicapa|bilayer]] (5 nm) muestra difusión simple, AQP1, GLUT1, Na+/K+-ATPasa y tráfico vesicular."
      }
    },
    "mem.ch0.s1.01": {
      "en": {
        "pop": "In hypotonic fluid with lower external solute, net [[water flow|water_flow]] rushes into both cells.",
        "blueprint": "Under hypotonic dilution (low outside solute), osmotic [[water intake|water_flow]] surges inward.",
        "scientific": "In hypotonic media ([solute]out < [solute]in), net osmotic [[H2O influx|water_flow]] enters both cells."
      },
      "es": {
        "pop": "En medio hipotónico con menos soluto externo, el [[flujo de agua|water_flow]] neto entra en ambas células.",
        "blueprint": "Bajo dilución hipotónica (menos soluto externo), la [[entrada de agua|water_flow]] acelera hacia el interior.",
        "scientific": "En medio hipotónico ([soluto]ext < [soluto]int), el [[flujo osmótico de H2O|water_flow]] entra en ambas células."
      }
    },
    "mem.ch0.s1.02": {
      "en": {
        "pop": "With no wall, the [[animal cell|animal_cell]] swells past its elastic limit toward osmotic lysis.",
        "blueprint": "Lacking exterior reinforcement, the [[animal cell|animal_cell]] over-pressurizes and ruptures in osmotic lysis.",
        "scientific": "Without a rigid wall, the [[animal cell|animal_cell]] swells beyond membrane tension limits into osmotic lysis."
      },
      "es": {
        "pop": "Sin pared rígida, la [[célula animal|animal_cell]] se hincha más allá de su límite hacia la lisis osmótica.",
        "blueprint": "Sin refuerzo externo, la [[célula animal|animal_cell]] se sobrepresuriza y estalla por lisis osmótica.",
        "scientific": "Al carecer de pared rígida, la [[célula animal|animal_cell]] rebasa su tensión límite y sufre lisis osmótica."
      }
    },
    "mem.ch0.s1.03": {
      "en": {
        "pop": "The [[plant cell|plant_cell]] fills its [[vacuole|vacuole]] against its rigid [[cell wall|cell_wall]] to stay turgid.",
        "blueprint": "The [[plant unit|plant_cell]] pressurizes its [[vacuole|vacuole]] against its [[cellulose frame|cell_wall]] for firm turgor.",
        "scientific": "In the [[plant cell|plant_cell]], [[vacuole|vacuole]] expansion presses the rigid [[cell wall|cell_wall]] into healthy turgor."
      },
      "es": {
        "pop": "La [[célula vegetal|plant_cell]] llena su [[vacuola|vacuole]] contra la [[pared celular|cell_wall]] rígida y queda turgente.",
        "blueprint": "La [[unidad vegetal|plant_cell]] presuriza su [[vacuola|vacuole]] contra el [[marco de celulosa|cell_wall]] logrando turgencia.",
        "scientific": "En la [[célula vegetal|plant_cell]], la [[vacuola|vacuole]] presiona la [[pared celular|cell_wall]] rígida generando turgencia."
      }
    },
    "mem.ch0.s2.01": {
      "en": {
        "pop": "In isotonic fluid, equal water exchange keeps the [[animal cell|animal_cell]] stable and the [[plant cell|plant_cell]] flaccid.",
        "blueprint": "At isotonic balance (zero net flux), the [[animal cell|animal_cell]] holds steady while the [[plant|plant_cell]] turns flaccid.",
        "scientific": "In isotonic solution (Jnet = 0), the [[animal cell|animal_cell]] stays homeostatic while the [[plant cell|plant_cell]] is flaccid."
      },
      "es": {
        "pop": "En medio isotónico, el agua equilibrada mantiene estable a la [[animal|animal_cell]] y flácida a la [[vegetal|plant_cell]].",
        "blueprint": "En equilibrio isotónico (flujo neto cero), la [[célula animal|animal_cell]] se estabiliza y la [[vegetal|plant_cell]] queda flácida.",
        "scientific": "En solución isotónica (Jnet = 0), la [[célula animal|animal_cell]] es estable y la [[vegetal|plant_cell]] está flácida."
      }
    },
    "mem.ch0.s2.02": {
      "en": {
        "pop": "In hypertonic salty fluid, water exits and shrivels the [[animal cell|animal_cell]] into spiked crenation.",
        "blueprint": "Under hypertonic high solute, rapid H2O drainage collapses the [[animal cell|animal_cell]] into spiked crenation.",
        "scientific": "In hypertonic media ([solute]out > [solute]in), H2O efflux dehydrates the [[animal cell|animal_cell]] (crenation)."
      },
      "es": {
        "pop": "En líquido hipertónico salado, sale agua y la [[célula animal|animal_cell]] se arruga en crenación espinosa.",
        "blueprint": "En medio hipertónico, el drenaje de H2O colapsa a la [[célula animal|animal_cell]] en crenación dentada.",
        "scientific": "En medio hipertónico ([soluto]ext > [soluto]int), el eflujo de H2O provoca crenación en la [[animal|animal_cell]]."
      }
    },
    "mem.ch0.s2.03": {
      "en": {
        "pop": "Meanwhile, the plant [[vacuole|vacuole]] shrinks and pulls the membrane off its [[cell wall|cell_wall]] in plasmolysis.",
        "blueprint": "Simultaneously, plant [[vacuole|vacuole]] collapse peels the plasma liner off its fixed [[cell wall|cell_wall]] (plasmolysis).",
        "scientific": "Concurrently, [[vacuole|vacuole]] shrinkage detaches the plant plasma membrane from its [[cell wall|cell_wall]] (plasmolysis)."
      },
      "es": {
        "pop": "A la vez, la [[vacuola|vacuole]] vegetal encoge y despega la membrana de su [[pared celular|cell_wall]] en plasmólisis.",
        "blueprint": "Al mismo tiempo, el colapso de la [[vacuola|vacuole]] separa la membrana de su [[pared|cell_wall]] rígida (plasmólisis).",
        "scientific": "Simultáneamente, al retraerse la [[vacuola|vacuole]] la membrana se despega de la [[pared|cell_wall]] (plasmólisis)."
      }
    },
    "mem.ch1.s0.01": {
      "en": {
        "pop": "Zoom straight into the 5 nm [[phospholipid bilayer|bilayer]], a fluid double sheet of POPC lipids.",
        "blueprint": "Zoom to the 5 nm [[fluid bilayer|bilayer]], a self-sealing double sheet built from POPC and cholesterol.",
        "scientific": "At molecular scale, the 5 nm [[phospholipid bilayer|bilayer]] comprises fluid POPC leaflets plus cholesterol."
      },
      "es": {
        "pop": "Acércate directo a la [[bicapa fosfolipídica|bilayer]] de 5 nm, una doble lámina fluida de lípidos POPC.",
        "blueprint": "Enfoque en la [[bicapa fluida|bilayer]] de 5 nm, una doble hoja autosellante de POPC y colesterol.",
        "scientific": "A escala molecular, la [[bicapa fosfolipídica|bilayer]] (5 nm) combina monocapas fluidas de POPC y colesterol."
      }
    },
    "mem.ch1.s0.02": {
      "en": {
        "pop": "Polar phosphate heads face water outside and inside, while hydrophobic fatty tails fill the 3 nm core.",
        "blueprint": "Hydrophilic headgroups face both aqueous chambers while hydrophobic acyl tails insulate the 3 nm core.",
        "scientific": "Zwitterionic phosphocholine heads face cytosol and exterior around a ~3 nm nonpolar fatty-acyl core."
      },
      "es": {
        "pop": "Las cabezas polares de fosfato miran al agua y las colas grasas hidrofóbicas llenan el núcleo de 3 nm.",
        "blueprint": "Las cabezas hidrofílicas miran al agua mientras las colas acilo hidrofóbicas aíslan el núcleo de 3 nm.",
        "scientific": "Cabezas zwitteriónicas de fosfocolina flanquean un núcleo hidrofóbico acilo de ~3 nm de espesor."
      }
    },
    "mem.ch1.s0.03": {
      "en": {
        "pop": "That oily core inside the [[bilayer|bilayer]] blocks charged ions and polar sugars from leaking freely.",
        "blueprint": "This dielectric hydrophobic barrier inside the [[bilayer|bilayer]] blocks unassisted ion and sugar leakage.",
        "scientific": "High desolvation energy across the nonpolar [[bilayer|bilayer]] core excludes charged ions and polar hexoses."
      },
      "es": {
        "pop": "Ese núcleo aceitoso en la [[bicapa|bilayer]] impide que iones cargados y azúcares polares se filtren libres.",
        "blueprint": "Esa barrera dieléctrica hidrofóbica en la [[bicapa|bilayer]] bloquea fugas libres de iones y azúcares.",
        "scientific": "La alta energía de desolvatación en el núcleo de la [[bicapa|bilayer]] excluye iones cargados y hexosas."
      }
    },
    "mem.ch1.s1.01": {
      "en": {
        "pop": "Small nonpolar gases O2 and CO2 slip directly between lipid tails via passive [[simple diffusion|simple_diff]].",
        "blueprint": "Small nonpolar O2 and CO2 molecules traverse the lipid core unassisted by [[simple diffusion|simple_diff]].",
        "scientific": "Nonpolar gases O2 and CO2 partition directly across acyl chains via Fickian [[simple diffusion|simple_diff]]."
      },
      "es": {
        "pop": "Los gases pequeños apolares O2 y CO2 se cuelan entre colas lipídicas por [[difusión simple|simple_diff]] pasiva.",
        "blueprint": "Los gases apolares O2 y CO2 cruzan el núcleo lipídico sin proteínas por [[difusión simple|simple_diff]].",
        "scientific": "Los gases apolares O2 y CO2 particionan directo entre cadenas acilo por [[difusión simple|simple_diff]]."
      }
    },
    "mem.ch1.s1.02": {
      "en": {
        "pop": "[[Simple diffusion|simple_diff]] runs down concentration gradients across the [[bilayer|bilayer]] at zero ATP cost.",
        "blueprint": "Passive [[gas diffusion|simple_diff]] flows strictly down concentration gradients across the [[bilayer|bilayer]] (0 ATP).",
        "scientific": "[[Simple diffusion|simple_diff]] moves solutes down delta-C across the [[bilayer|bilayer]] with 0 ATP hydrolysis."
      },
      "es": {
        "pop": "La [[difusión simple|simple_diff]] sigue el gradiente de concentración por la [[bicapa|bilayer]] con cero gasto de ATP.",
        "blueprint": "La [[difusión pasiva|simple_diff]] corre estrictamente a favor de gradiente por la [[bicapa|bilayer]] (0 ATP).",
        "scientific": "La [[difusión simple|simple_diff]] transporta solutos a favor de delta-C en la [[bicapa|bilayer]] sin ATP."
      }
    },
    "mem.ch1.s1.03": {
      "en": {
        "pop": "Unassisted gas exchange supplies O2 to mitochondria and clears CO2 from active tissues.",
        "blueprint": "Zero-overhead membrane gas exchange feeds O2 to respiratory chains and vents metabolic CO2.",
        "scientific": "Rapid transmembrane gas permeability sustains mitochondrial O2 supply and respiratory CO2 clearance."
      },
      "es": {
        "pop": "Este intercambio directo abastece de O2 a las mitocondrias y despeja el CO2 de tejidos activos.",
        "blueprint": "El intercambio gaseoso sin coste alimenta O2 a la respiración celular y evacua el CO2 metabólico.",
        "scientific": "La alta permeabilidad a gases sostiene el aporte mitocondrial de O2 y la salida de CO2 respiratorio."
      }
    },
    "mem.ch1.s2.01": {
      "en": {
        "pop": "Polar H2O crosses slowly alone, so tetrameric [[aquaporins|aquaporin]] open narrow hourglass water pores.",
        "blueprint": "To accelerate polar H2O throughput, tetrameric [[AQP1 channels|aquaporin]] install dedicated hourglass conduits.",
        "scientific": "Homotetrameric [[AQP1 aquaporins|aquaporin]] (PDB 1J4N) conduct ~10^9 H2O/s per hourglass monomer pore."
      },
      "es": {
        "pop": "El agua H2O cruza lento sola, así que las [[acuaporinas|aquaporin]] tetraméricas abren poros de reloj de arena.",
        "blueprint": "Para acelerar el caudal de H2O, los canales [[AQP1|aquaporin]] instalan conductos dedicados en reloj de arena.",
        "scientific": "Las [[acuaporinas AQP1|aquaporin]] (PDB 1J4N) conducen ~10^9 H2O/s por cada poro monomérico en reloj de arena."
      }
    },
    "mem.ch1.s2.02": {
      "en": {
        "pop": "Like water leveling across a fine sieve, [[water|water_flow]] crosses [[aquaporins|aquaporin]] toward denser solutes.",
        "blueprint": "Passive [[solvent flux|water_flow]] routes single-file through [[AQP1 channels|aquaporin]] to equalize osmotic potential.",
        "scientific": "Osmotic [[H2O diffusion|water_flow]] traverses [[AQP1 tetramers|aquaporin]] down its chemical potential gradient."
      },
      "es": {
        "pop": "Como agua nivelándose en un tamiz fino, el [[agua|water_flow]] cruza las [[acuaporinas|aquaporin]] hacia más solutos.",
        "blueprint": "El [[flujo pasivo de agua|water_flow]] cruza en fila por [[canales AQP1|aquaporin]] equilibrando presión osmótica.",
        "scientific": "La [[difusión osmótica de H2O|water_flow]] atraviesa [[tetrámeros AQP1|aquaporin]] a favor de potencial hídrico."
      }
    },
    "mem.ch1.s2.03": {
      "en": {
        "pop": "Central NPA motifs in [[AQP1|aquaporin]] flip each H2O dipole single-file while excluding H+ ions.",
        "blueprint": "The central NPA filter in [[AQP1|aquaporin]] rotates every H2O dipole 180 deg to block H+ proton shorts.",
        "scientific": "Paired Asn-Pro-Ala (NPA) and ar/R filters in [[AQP1|aquaporin]] (1J4N) flip H2O dipoles and block H+ wires."
      },
      "es": {
        "pop": "Los motivos NPA centrales en [[AQP1|aquaporin]] giran cada dipolo H2O en fila bloqueando iones H+.",
        "blueprint": "El filtro central NPA de [[AQP1|aquaporin]] rota cada dipolo H2O 180 grados para impedir cortocircuitos H+.",
        "scientific": "Los motivos NPA y ar/R en [[AQP1|aquaporin]] (1J4N) invierten dipolos H2O y bloquean fugas de protones H+."
      }
    },
    "mem.ch2.s0.01": {
      "en": {
        "pop": "Six-carbon D-glucose is polar and bulky, so the hydrophobic [[bilayer|bilayer]] blocks its passive entry.",
        "blueprint": "Polar 6-carbon glucose cannot clear the hydrophobic [[bilayer|bilayer]] core without a dedicated transporter.",
        "scientific": "Hydrophilic D-glucose (180 Da, 5 OH groups) has near-zero permeability across the pure [[bilayer|bilayer]]."
      },
      "es": {
        "pop": "La D-glucosa de seis carbonos es polar y grande, así que la [[bicapa|bilayer]] hidrofóbica bloquea su paso.",
        "blueprint": "La glucosa polar de 6 carbonos no cruza el núcleo de la [[bicapa|bilayer]] sin un transportador dedicado.",
        "scientific": "La D-glucosa hidrofílica (180 Da) presenta permeabilidad casi nula a través de la [[bicapa|bilayer]] pura."
      }
    },
    "mem.ch2.s0.02": {
      "en": {
        "pop": "Embedded [[GLUT1|glut1]] carrier proteins selectively bind extracellular glucose for facilitated diffusion.",
        "blueprint": "Transmembrane uniporter [[GLUT1|glut1]] captures extracellular glucose for selective facilitated intake.",
        "scientific": "Major facilitator uniporter [[GLUT1|glut1]] (SLC2A1, PDB 4PYP) mediates 1:1 D-glucose facilitated diffusion."
      },
      "es": {
        "pop": "Las proteínas transportadoras [[GLUT1|glut1]] enlazan glucosa extracelular para su difusión facilitada.",
        "blueprint": "El uniportador transmembrana [[GLUT1|glut1]] captura glucosa externa para ingreso facilitado selectivo.",
        "scientific": "El uniportador MFS [[GLUT1|glut1]] (SLC2A1, PDB 4PYP) media la difusión facilitada 1:1 de D-glucosa."
      }
    },
    "mem.ch2.s0.03": {
      "en": {
        "pop": "Because glucose moves down its concentration gradient, [[GLUT1|glut1]] spends zero cellular ATP.",
        "blueprint": "Driven solely by the external-to-cytosol sugar gradient, [[GLUT1|glut1]] operates at zero ATP overhead.",
        "scientific": "Passive uniport through [[GLUT1|glut1]] follows the chemical gradient (delta-G < 0) with 0 ATP consumed."
      },
      "es": {
        "pop": "Como la glucosa baja por su gradiente de concentración, [[GLUT1|glut1]] gasta cero ATP celular.",
        "blueprint": "Impulsado solo por el gradiente de azúcar hacia el citosol, [[GLUT1|glut1]] opera con cero gasto de ATP.",
        "scientific": "El uniporte pasivo por [[GLUT1|glut1]] sigue el gradiente químico (delta-G < 0) consumiendo 0 ATP."
      }
    },
    "mem.ch2.s1.01": {
      "en": {
        "pop": "[[GLUT1|glut1]] rocks through outward-open, occluded and inward-open shapes to release glucose inside.",
        "blueprint": "[[GLUT1|glut1]] cycles three discrete states: outward-open dock, occluded lock and inward-open drop.",
        "scientific": "Two 6-TM bundles in [[GLUT1|glut1]] (4PYP) undergo outward-open <-> occluded <-> inward-open rocker switching."
      },
      "es": {
        "pop": "[[GLUT1|glut1]] oscila entre estado abierto afuera, ocluido y abierto adentro para liberar glucosa.",
        "blueprint": "[[GLUT1|glut1]] alterna tres estados discretos: captura externa, cámara ocluida y descarga interna.",
        "scientific": "Dos haces 6-TM de [[GLUT1|glut1]] (4PYP) ejecutan el balancín abierto afuera <-> ocluido <-> abierto adentro."
      }
    },
    "mem.ch2.s1.02": {
      "en": {
        "pop": "This alternating-access switch never opens a continuous hole across the [[bilayer|bilayer]] that leaks ions.",
        "blueprint": "Alternating-access gating preserves seal integrity across the [[bilayer|bilayer]] so ions never short through.",
        "scientific": "Alternating-access occlusion prevents any continuous water-filled pore across the [[bilayer|bilayer]]."
      },
      "es": {
        "pop": "Este mecanismo de acceso alterno nunca abre un hueco continuo en la [[bicapa|bilayer]] que filtre iones.",
        "blueprint": "El sellado por acceso alterno mantiene estanca la [[bicapa|bilayer]] impidiendo fugas eléctricas de iones.",
        "scientific": "La oclusión alternante impide abrir un poro continuo permeable a iones a través de la [[bicapa|bilayer]]."
      }
    },
    "mem.ch2.s1.03": {
      "en": {
        "pop": "Once inside cytosol, rapid glucose phosphorylation keeps gradient flow running through [[GLUT1|glut1]].",
        "blueprint": "Immediate cytosolic hexokinase tagging locks sugar inside, sustaining downhill flux via [[GLUT1|glut1]].",
        "scientific": "Hexokinase traps D-glucose as glucose-6-phosphate, keeping cytosolic [glucose] low for [[GLUT1|glut1]]."
      },
      "es": {
        "pop": "Ya en el citosol, la rápida fosforilación de glucosa mantiene el gradiente activo en [[GLUT1|glut1]].",
        "blueprint": "El marcado inmediato por hexoquinasa retiene el azúcar y sostiene el flujo a favor por [[GLUT1|glut1]].",
        "scientific": "La hexoquinasa fosforila a glucosa-6-fosfato manteniendo baja la glucosa libre para [[GLUT1|glut1]]."
      }
    },
    "mem.ch3.s0.01": {
      "en": {
        "pop": "Splitting one [[ATP|atp_hydrolysis]], the [[sodium-potassium pump|nak_pump]] exports three Na+ and imports two K+.",
        "blueprint": "Hydrolyzing [[1 ATP|atp_hydrolysis]], the [[Na+/K+ ATPase|nak_pump]] drives 3 Na+ out and 2 K+ in uphill.",
        "scientific": "Primary active [[ATP hydrolysis|atp_hydrolysis]] powers [[Na+/K+-ATPase|nak_pump]] (3WGU) 3 Na+ out / 2 K+ in cycling."
      },
      "es": {
        "pop": "Al romper un [[ATP|atp_hydrolysis]], la [[bomba sodio-potasio|nak_pump]] saca tres Na+ y mete dos K+.",
        "blueprint": "Hidrolizando [[1 ATP|atp_hydrolysis]], la [[ATPasa Na+/K+|nak_pump]] bombea 3 Na+ fuera y 2 K+ dentro cuesta arriba.",
        "scientific": "La [[hidrólisis de ATP|atp_hydrolysis]] impulsa en [[Na+/K+-ATPasa|nak_pump]] (3WGU) el ciclo 3 Na+ fuera / 2 K+ dentro."
      }
    },
    "mem.ch3.s0.02": {
      "en": {
        "pop": "Both ions move uphill against steep gradients, so [[Na+/K+-ATPase|nak_pump]] executes primary active transport.",
        "blueprint": "Because both cations move against gradient pressure, [[Na+/K+-ATPase|nak_pump]] requires powered pumping.",
        "scientific": "Moving Na+ out (~145 vs 12 mM) and K+ in (~140 vs 4 mM) defines [[Na+/K+-ATPase|nak_pump]] active transport."
      },
      "es": {
        "pop": "Ambos iones suben contra gradientes fuertes, así que [[Na+/K+-ATPasa|nak_pump]] hace transporte activo primario.",
        "blueprint": "Como ambos cationes avanzan contra presión de gradiente, [[Na+/K+-ATPasa|nak_pump]] exige bombeo motorizado.",
        "scientific": "Mover Na+ fuera (~145 vs 12 mM) y K+ dentro (~140 vs 4 mM) define el transporte activo de [[Na+/K+-ATPasa|nak_pump]]."
      }
    },
    "mem.ch3.s0.03": {
      "en": {
        "pop": "Each cleavage flash at [[ATP hydrolysis|atp_hydrolysis]] powers one full pumping cycle of 3 Na+ out, 2 K+ in.",
        "blueprint": "Every [[ATP -> ADP + Pi|atp_hydrolysis]] power stroke executes one exact 3 Na+ out / 2 K+ in counter-transfer.",
        "scientific": "Tightly coupled [[ATP hydrolysis|atp_hydrolysis]] fixes strict 3 Na+ : 2 K+ : 1 ATP P-type stoichiometry."
      },
      "es": {
        "pop": "Cada destello de [[hidrólisis de ATP|atp_hydrolysis]] impulsa un ciclo completo de 3 Na+ fuera y 2 K+ dentro.",
        "blueprint": "Cada golpe energético de [[ATP -> ADP + Pi|atp_hydrolysis]] ejecuta un ciclo exacto de 3 Na+ fuera y 2 K+ dentro.",
        "scientific": "La [[hidrólisis de ATP|atp_hydrolysis]] acoplada fija la estequiometría estricta 3 Na+ : 2 K+ : 1 ATP."
      }
    },
    "mem.ch3.s1.01": {
      "en": {
        "pop": "Three cytosolic Na+ ions bind the [[pump|nak_pump]], triggering [[ATP phosphorylation|atp_hydrolysis]] into E1-P.",
        "blueprint": "Loading 3 internal Na+ arms the [[E1 pump|nak_pump]] and triggers Asp [[phosphorylation|atp_hydrolysis]] (E1-P).",
        "scientific": "High-affinity E1 binding of 3 cytosolic Na+ on [[Na+/K+-ATPase|nak_pump]] induces [[ATP|atp_hydrolysis]] Asp-P formation."
      },
      "es": {
        "pop": "Tres iones Na+ citosólicos se unen a la [[bomba|nak_pump]] y activan la [[fosforilación ATP|atp_hydrolysis]] a E1-P.",
        "blueprint": "Cargar 3 Na+ internos arma el estado [[E1|nak_pump]] y dispara la [[fosforilación Asp|atp_hydrolysis]] (E1-P).",
        "scientific": "La unión de 3 Na+ citosólicos en estado E1 de [[Na+/K+-ATPasa|nak_pump]] dispara [[autofosforilación|atp_hydrolysis]]."
      }
    },
    "mem.ch3.s1.02": {
      "en": {
        "pop": "Passive [[GLUT1|glut1]] spins like a free revolving door, while [[Na+/K+-ATPase|nak_pump]] is a powered turnstile.",
        "blueprint": "Passive [[GLUT1|glut1]] routes cargo downhill for free, while [[Na+/K+-ATPase|nak_pump]] drives uphill work.",
        "scientific": "Facilitative [[GLUT1|glut1]] equilibrates gradients passively, whereas P-type [[Na+/K+-ATPase|nak_pump]] pumps uphill."
      },
      "es": {
        "pop": "[[GLUT1|glut1]] gira como puerta giratoria libre, mientras [[Na+/K+-ATPasa|nak_pump]] es un torniquete motorizado.",
        "blueprint": "El pasivo [[GLUT1|glut1]] conduce carga a favor sin energía, mientras [[Na+/K+-ATPasa|nak_pump]] bombea cuesta arriba.",
        "scientific": "[[GLUT1|glut1]] equilibra gradientes de modo pasivo, mientras la ATPasa tipo P [[Na+/K+-ATPasa|nak_pump]] bombea en contra."
      }
    },
    "mem.ch3.s1.03": {
      "en": {
        "pop": "Switching to E2-P releases 3 Na+ outside and binds 2 K+, then dephosphorylation resets the [[pump|nak_pump]].",
        "blueprint": "Flipping to E2-P dumps 3 Na+ externally, docks 2 K+ and releases Pi to reset the [[pump|nak_pump]] to E1.",
        "scientific": "E1-P -> E2-P releases 3 Na+ extracellularly, binds 2 K+ and dephosphorylates to reset [[Na+/K+-ATPase|nak_pump]]."
      },
      "es": {
        "pop": "El cambio a E2-P suelta 3 Na+ afuera, une 2 K+ y al desfosforilarse reinicia la [[bomba|nak_pump]].",
        "blueprint": "Conmutar a E2-P descarga 3 Na+ al exterior, acopla 2 K+ y libera Pi reiniciando la [[bomba|nak_pump]] a E1.",
        "scientific": "La transición E1-P -> E2-P libera 3 Na+ fuera, capta 2 K+ y desfosforila reiniciando [[Na+/K+-ATPasa|nak_pump]]."
      }
    },
    "mem.ch3.s2.01": {
      "en": {
        "pop": "Exporting 3 Na+ for every 2 K+ leaves net negative charge inside, driving [[membrane voltage|membrane_voltage]].",
        "blueprint": "Net -1 charge export per cycle turns the pump into a DC battery charging [[membrane voltage|membrane_voltage]].",
        "scientific": "Electrogenic 3 Na+ out / 2 K+ in stoichiometry exports +1 net charge, polarizing [[V_m|membrane_voltage]]."
      },
      "es": {
        "pop": "Sacar 3 Na+ por cada 2 K+ deja carga negativa neta dentro, generando [[voltaje de membrana|membrane_voltage]].",
        "blueprint": "Exportar carga neta positiva convierte la bomba en batería que carga el [[voltaje de membrana|membrane_voltage]].",
        "scientific": "La estequiometría electrogénica 3 Na+ fuera / 2 K+ dentro polariza el [[potencial V_m|membrane_voltage]]."
      }
    },
    "mem.ch3.s2.02": {
      "en": {
        "pop": "Paired with K+ leak channels, the [[pump|nak_pump]] holds resting [[voltage|membrane_voltage]] near -70 mV.",
        "blueprint": "Together with K+ leak paths, the [[pump|nak_pump]] regulates resting [[membrane voltage|membrane_voltage]] near -70 mV.",
        "scientific": "Coupled to K+ leak conductance, [[Na+/K+-ATPase|nak_pump]] maintains resting [[V_m|membrane_voltage]] near -70 mV."
      },
      "es": {
        "pop": "Junto a canales de fuga de K+, la [[bomba|nak_pump]] mantiene el [[voltaje|membrane_voltage]] de reposo en -70 mV.",
        "blueprint": "En conjunto con fugas de K+, la [[bomba|nak_pump]] regula el [[voltaje de reposo|membrane_voltage]] cerca de -70 mV.",
        "scientific": "Acoplada a canales de fuga K+, la [[Na+/K+-ATPasa|nak_pump]] sostiene un [[V_m|membrane_voltage]] de ~-70 mV."
      }
    },
    "mem.ch3.s2.03": {
      "en": {
        "pop": "Continuous Na+ export also lowers internal osmolarity so wall-less [[animal cells|animal_cell]] do not burst.",
        "blueprint": "Steady Na+ extrusion offsets intracellular solutes, keeping wall-less [[animal cells|animal_cell]] volume-stable.",
        "scientific": "Continuous Na+ extrusion counters Donnan colloid osmotic pressure so wall-less [[animal cells|animal_cell]] resist lysis."
      },
      "es": {
        "pop": "La salida constante de Na+ baja la osmolaridad interna para que las [[células animales|animal_cell]] no estallen.",
        "blueprint": "La extrusión continua de Na+ compensa solutos internos estabilizando a las [[células animales|animal_cell]].",
        "scientific": "La extrusión de Na+ contrarresta el efecto Donnan evitando lisis en [[células animales|animal_cell]] sin pared."
      }
    },
    "mem.ch4.s0.01": {
      "en": {
        "pop": "Proteins and large [[vesicle cargo|vesicle_cargo]] are far too big for channels, requiring bulk membrane traffic.",
        "blueprint": "Macromolecular [[bulk payloads|vesicle_cargo]] exceed channel diameter and route via ATP-driven vesicle buds.",
        "scientific": "Macromolecules and secreted [[vesicle cargo|vesicle_cargo]] (>5 nm) cross membranes via bulk vesicular transport."
      },
      "es": {
        "pop": "Proteínas y grandes [[cargas vesiculares|vesicle_cargo]] no caben en canales y exigen tráfico en masa.",
        "blueprint": "Las [[cargas macromoleculares|vesicle_cargo]] superan todo canal y se enrutan por vesículas dependientes de ATP.",
        "scientific": "Macromoléculas y [[cargas vesiculares|vesicle_cargo]] (>5 nm) cruzan la membrana mediante transporte vesicular."
      }
    },
    "mem.ch4.s0.02": {
      "en": {
        "pop": "In endocytosis, triskelion [[clathrin pits|clathrin_pit]] curve the membrane inward until dynamin pinches a vesicle.",
        "blueprint": "For bulk intake, geodesic [[clathrin cages|clathrin_pit]] bend the bilayer inward until dynamin snips free.",
        "scientific": "During endocytosis, [[clathrin triskelia|clathrin_pit]] (PDB 1XI4) sculpt coated pits cleaved by GTPase dynamin."
      },
      "es": {
        "pop": "En endocitosis, los trisqueliones de [[clatrina|clathrin_pit]] curvan la membrana hasta que la dinamina la corta.",
        "blueprint": "En la captura en masa, jaulas geodésicas de [[clatrina|clathrin_pit]] invaginan la bicapa hasta su escisión.",
        "scientific": "En endocitosis, trisqueliones de [[clatrina|clathrin_pit]] (PDB 1XI4) curvan fositas escindidas por dinamina."
      }
    },
    "mem.ch4.s0.03": {
      "en": {
        "pop": "In exocytosis, four-helix [[SNARE bundles|snare_fusion]] zipper membranes together to release [[cargo|vesicle_cargo]] outside.",
        "blueprint": "For export, four-helix [[SNARE zippers|snare_fusion]] pull bilayers into fusion to eject [[cargo|vesicle_cargo]].",
        "scientific": "In exocytosis, coiled-coil [[SNARE bundles|snare_fusion]] (PDB 1SFC) drive bilayer fusion and [[cargo|vesicle_cargo]] secretion."
      },
      "es": {
        "pop": "En exocitosis, haces de [[SNARE|snare_fusion]] cierran como cremallera ambas membranas liberando [[carga|vesicle_cargo]].",
        "blueprint": "En exportación, cierres de cuatro hélices [[SNARE|snare_fusion]] fusionan bicapas para eyectar [[carga|vesicle_cargo]].",
        "scientific": "En exocitosis, haces de cuatro hélices [[SNARE|snare_fusion]] (1SFC) fusionan bicapas secretando [[carga|vesicle_cargo]]."
      }
    },
    "mem.ch4.s1.01": {
      "en": {
        "pop": "Zoom to 0.1 nm atomic scale in the [[ion lens|ion_atoms]] comparing Na+, K+, H2O and POPC heads.",
        "blueprint": "Descend to 0.1 nm atomic tolerances in the [[ion inset|ion_atoms]] inspecting Na+, K+, H2O and POPC.",
        "scientific": "At 0.1 nm atomic resolution, the [[ion lens|ion_atoms]] contrasts hydrated Na+, K+, H2O and POPC headgroups."
      },
      "es": {
        "pop": "Acércate a escala atómica de 0,1 nm en el [[lente iónico|ion_atoms]] comparando Na+, K+, H2O y POPC.",
        "blueprint": "Desciende a 0,1 nm en el [[visor iónico|ion_atoms]] para auditar Na+, K+, H2O y cabezas POPC.",
        "scientific": "A 0,1 nm, el [[recuadro iónico|ion_atoms]] compara los radios de Na+, K+, dipolos H2O y cabezas POPC."
      }
    },
    "mem.ch4.s1.02": {
      "en": {
        "pop": "Inside [[ion atoms|ion_atoms]], naked Na+ measures 0.102 nm while K+ spans 0.138 nm, enabling pump sorting.",
        "blueprint": "In [[ion atoms|ion_atoms]], exact ionic radii (Na+ 0.102 nm vs K+ 0.138 nm) key selective pump pockets.",
        "scientific": "Within [[ion atoms|ion_atoms]], crystal radii of Na+ (0.102 nm) vs K+ (0.138 nm) govern pump binding specificity."
      },
      "es": {
        "pop": "En [[átomos iónicos|ion_atoms]], Na+ mide 0,102 nm y K+ alcanza 0,138 nm, permitiendo a la bomba distinguirlos.",
        "blueprint": "En [[átomos iónicos|ion_atoms]], los radios exactos (Na+ 0,102 nm vs K+ 0,138 nm) calibran los bolsillos selectivos.",
        "scientific": "En [[átomos iónicos|ion_atoms]], los radios cristalinos Na+ (0,102 nm) y K+ (0,138 nm) rigen la selectividad iónica."
      }
    },
    "mem.ch4.s1.03": {
      "en": {
        "pop": "Bent 104.5 deg H2O dipoles and C, H, N, O, P lipid heads in [[ion atoms|ion_atoms]] dictate membrane selectivity.",
        "blueprint": "104.5 deg H2O polarity plus C, H, N, O, P lipid heads in [[ion atoms|ion_atoms]] set every bilayer gate rule.",
        "scientific": "Polar 104.5 deg H2O dipoles and C, H, N, O, P POPC headgroups in [[ion atoms|ion_atoms]] govern membrane physics."
      },
      "es": {
        "pop": "Dipolos H2O de 104,5 grados y cabezas C, H, N, O, P en [[átomos iónicos|ion_atoms]] dictan la selectividad.",
        "blueprint": "La polaridad H2O (104,5 grados) y cabezas C, H, N, O, P en [[átomos iónicos|ion_atoms]] fijan las reglas de paso.",
        "scientific": "Dipolos H2O (104,5 grados) y grupos POPC de C, H, N, O y P en [[átomos iónicos|ion_atoms]] rigen la permeabilidad."
      }
    },
    "mem.ch4.s2.01": {
      "en": {
        "pop": "From [[animal|animal_cell]] and [[plant|plant_cell]] tonicity to [[AQP1|aquaporin]] and [[GLUT1|glut1]], gradients guide passive flow.",
        "blueprint": "Across [[animal|animal_cell]] and [[plant|plant_cell]] tonicity, [[AQP1|aquaporin]] and [[GLUT1|glut1]] route passive flow free.",
        "scientific": "From [[animal|animal_cell]] and [[plant|plant_cell]] osmosis to [[AQP1|aquaporin]] and [[GLUT1|glut1]], delta-mu drives passive flux."
      },
      "es": {
        "pop": "De la tonicidad [[animal|animal_cell]] y [[vegetal|plant_cell]] a [[AQP1|aquaporin]] y [[GLUT1|glut1]], el gradiente guía el flujo.",
        "blueprint": "De tonicidad [[animal|animal_cell]] y [[vegetal|plant_cell]] a [[AQP1|aquaporin]] y [[GLUT1|glut1]], el flujo pasivo cuesta cero.",
        "scientific": "Desde ósmosis [[animal|animal_cell]] y [[vegetal|plant_cell]] hasta [[AQP1|aquaporin]] y [[GLUT1|glut1]], delta-mu dirige el paso."
      }
    },
    "mem.ch4.s2.02": {
      "en": {
        "pop": "Test Hypotonic, Isotonic and Hypertonic modes, then watch [[Na+/K+-ATPase|nak_pump]] sustain [[voltage|membrane_voltage]].",
        "blueprint": "Cycle all three tonicity modes and inspect [[Na+/K+-ATPase|nak_pump]] holding steady [[voltage|membrane_voltage]].",
        "scientific": "Toggle Hypotonic, Isotonic and Hypertonic states while [[Na+/K+-ATPase|nak_pump]] maintains -70 mV [[V_m|membrane_voltage]]."
      },
      "es": {
        "pop": "Prueba los modos Hipotónico, Isotónico e Hipertónico y mira a [[Na+/K+-ATPasa|nak_pump]] sostener el [[voltaje|membrane_voltage]].",
        "blueprint": "Alterna los tres modos de tonicidad y observa a [[Na+/K+-ATPasa|nak_pump]] sostener el [[voltaje|membrane_voltage]].",
        "scientific": "Alterna estados Hipotónico, Isotónico e Hipertónico mientras [[Na+/K+-ATPasa|nak_pump]] mantiene [[V_m|membrane_voltage]]."
      }
    },
    "mem.ch4.s2.03": {
      "en": {
        "pop": "Continue next to Specialized Human Cells to see neurons and muscles harness these ion gradients.",
        "blueprint": "Proceed next to Specialized Human Cells where neurons and muscle fibers fire using these ion gradients.",
        "scientific": "Advance to Specialized Human Cells to see excitable neurons and myocytes exploit -70 mV ion gradients."
      },
      "es": {
        "pop": "Sigue a Células Humanas Especializadas para ver cómo neuronas y músculos usan estos gradientes iónicos.",
        "blueprint": "Avanza a Células Humanas Especializadas, donde neuronas y músculos disparan gracias a estos gradientes.",
        "scientific": "Continúa a Células Humanas Especializadas para ver cómo neuronas y miocitos usan gradientes de -70 mV."
      }
    }
  }
};
