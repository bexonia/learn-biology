import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 12 (`real-paramecium` & `real-plasmodium`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - `real-paramecium`: 43 of 45 cues (95.6%, > 95%) match base `cue.text` verbatim in `en.pop`
 *   with direct, distraction-free biological prose.
 *   Exactly 2 cues use purposeful, grounded everyday mental models:
 *   1. `para.ch2.s1.02` - Contractile vacuole & canals as an automatic bilge pump bailing a leaky boat.
 *   2. `para.ch4.s0.02` - Macronucleus as open working copies vs. micronucleus as a locked master archive.
 * - `real-plasmodium`: 46 of 48 cues (95.8%, > 95%) match base `cue.text` verbatim in `en.pop`
 *   with direct, distraction-free biological prose.
 *   Exactly 2 cues use purposeful, grounded everyday mental models:
 *   1. `plas.ch1.s1.02` - AMA1-RON2 moving junction + glideosome as a self-laid zipper pulling into the RBC.
 *   2. `plas.ch3.s0.02` - Four nested apicoplast membranes like Russian dolls from an engulfed red alga.
 */
export const PERSONAS_PROTISTS: TourPersonaMap = {
  "real-paramecium": {
    "para.ch0.s0.01": {
      "en": {
        "pop": "Meet Paramecium caudatum, a 200 um freshwater eukaryote that hunts as one complete cell.",
        "blueprint": "System node Paramecium caudatum: an autonomous 200 um freshwater eukaryotic hunter chassis.",
        "scientific": "Paramecium caudatum (Alveolata, Ciliophora) is an autonomous ~200 x 55 um unicellular predator."
      },
      "es": {
        "pop": "Conoce a Paramecium caudatum, un eucariota dulceacuícola de 200 um que caza en una sola célula.",
        "blueprint": "Nodo Paramecium caudatum: un chasis eucariota autónomo de 200 um que caza en agua dulce.",
        "scientific": "Paramecium caudatum (Alveolata, Ciliophora) es un depredador unicelular de ~200 x 55 um."
      }
    },
    "para.ch0.s0.02": {
      "en": {
        "pop": "With zero organs or nerves, this slipper-shaped ciliate swims, feeds, digests and divides.",
        "blueprint": "Without tissues or neural circuits, one hull executes propulsion, intake, digestion and fission.",
        "scientific": "Lacking organs or nervous systems, one ciliate integrates motility, phagocytosis and cytokinesis."
      },
      "es": {
        "pop": "Sin órganos ni nervios, este ciliado con forma de zapatilla nada, come, digiere y se divide.",
        "blueprint": "Sin tejidos ni red neural, un solo casco integra propulsión, captura, digestión y división.",
        "scientific": "Sin órganos ni sistema nervioso, un ciliado integra motilidad, fagocitosis y citocinesis."
      }
    },
    "para.ch0.s0.03": {
      "en": {
        "pop": "Its [[pellicle|pellicle]], [[beating cilia|cilia]] and [[oral groove|oral_groove]] run life at cell scale.",
        "blueprint": "Its [[alveolar hull|pellicle]], [[ciliary array|cilia]] and [[intake chute|oral_groove]] form one system.",
        "scientific": "A cortical [[pellicle|pellicle]], [[9+2 cilia|cilia]] and ciliated [[peristome|oral_groove]] sustain autonomy."
      },
      "es": {
        "pop": "Su [[película|pellicle]], [[cilios batientes|cilia]] y [[surco oral|oral_groove]] sostienen la vida celular.",
        "blueprint": "Su [[casco alveolar|pellicle]], [[matriz ciliar|cilia]] y [[embudo oral|oral_groove]] operan en bloque.",
        "scientific": "Su [[película|pellicle]] cortical, [[cilios 9+2|cilia]] y [[peristoma|oral_groove]] aseguran su autonomía."
      }
    },
    "para.ch0.s1.01": {
      "en": {
        "pop": "Rather than a rigid plant wall, Paramecium wears a sculpted, flexible [[pellicle|pellicle]].",
        "blueprint": "Instead of stiff cellulose armor, Paramecium uses an articulated, elastic [[pellicle hull|pellicle]].",
        "scientific": "Unlike walled plants, Paramecium retains shape via a reinforced cortical [[pellicle|pellicle]]."
      },
      "es": {
        "pop": "En vez de una pared vegetal rígida, Paramecium luce una [[película|pellicle]] esculpida y flexible.",
        "blueprint": "En lugar de celulosa rígida, Paramecium opera con un [[casco elástico|pellicle]] articulado.",
        "scientific": "Sin pared celulósica, Paramecium conserva su forma mediante una [[película|pellicle]] cortical."
      }
    },
    "para.ch0.s1.02": {
      "en": {
        "pop": "Beneath the plasma membrane, flattened [[pellicle alveoli|pellicle]] form hexagonal armor plates.",
        "blueprint": "Under the outer bilayer, tiled [[cortical alveoli|pellicle]] lock into a hexagonal structural shell.",
        "scientific": "Sub-plasmalemmal [[cortical alveoli|pellicle]] tile hexagonal units with epiplasmic reinforcement."
      },
      "es": {
        "pop": "Bajo la membrana plasmática, [[alvéolos de la película|pellicle]] aplanados forman placas hexagonales.",
        "blueprint": "Bajo la bicapa externa, [[alvéolos corticales|pellicle]] encajan en una coraza hexagonal flexible.",
        "scientific": "Los [[alvéolos corticales|pellicle]] submembranosos forman unidades hexagonales con epiplasma."
      }
    },
    "para.ch0.s1.03": {
      "en": {
        "pop": "Those cortical sacs define Supergroup Alveolata, linking Paramecium to malaria parasites.",
        "blueprint": "This alveolar chassis architecture is conserved across Alveolata, including malaria parasites.",
        "scientific": "Cortical alveoli are the synapomorphy of Supergroup Alveolata, uniting ciliates and apicomplexans."
      },
      "es": {
        "pop": "Esos sacos corticales definen al supergrupo Alveolata y unen a Paramecium con la malaria.",
        "blueprint": "Este diseño de chasis alveolar se conserva en todo Alveolata, incluidos parásitos de malaria.",
        "scientific": "Los alvéolos corticales son la sinapomorfía de Alveolata, uniendo ciliados y apicomplejos."
      }
    },
    "para.ch0.s2.01": {
      "en": {
        "pop": "Docked beneath the [[pellicle|pellicle]] between ciliary rows sit spindle-shaped [[trichocysts|trichocyst]].",
        "blueprint": "Mounted under the [[pellicle|pellicle]] between drive lanes sit spring-loaded [[trichocysts|trichocyst]].",
        "scientific": "Dense secretory [[pellicle|pellicle]]-docked [[trichocysts|trichocyst]] alternate with cortical kineties."
      },
      "es": {
        "pop": "Bajo la [[película|pellicle]], entre filas de cilios, descansan [[tricocistos|trichocyst]] fusiformes.",
        "blueprint": "Montados bajo el [[casco|pellicle]] entre filas ciliares hay [[tricocistos|trichocyst]] cargados.",
        "scientific": "Bajo la [[película|pellicle]] cortical se anclan [[tricocistos|trichocyst]] secretores alternados con cinetias."
      }
    },
    "para.ch0.s2.02": {
      "en": {
        "pop": "When a predator strikes, calcium triggers [[trichocysts|trichocyst]] to fire in milliseconds.",
        "blueprint": "On impact, a cytosolic Ca2+ pulse triggers rapid [[trichocyst|trichocyst]] exocytosis in milliseconds.",
        "scientific": "Mechanical stress opens Ca2+ channels, firing [[trichocyst|trichocyst]] exocytosis within ~1 ms."
      },
      "es": {
        "pop": "Si un depredador ataca, el calcio dispara los [[tricocistos|trichocyst]] en pocos milisegundos.",
        "blueprint": "Ante un impacto, un pulso de Ca2+ acciona la descarga de [[tricocistos|trichocyst]] en milisegundos.",
        "scientific": "El estrés mecánico dispara influjo de Ca2+ y exocitosis de [[tricocistos|trichocyst]] en ~1 ms."
      }
    },
    "para.ch0.s2.03": {
      "en": {
        "pop": "Each discharged [[trichocyst|trichocyst]] stretches eightfold into a stiff shaft that pushes foes away.",
        "blueprint": "Hydrated [[trichocyst|trichocyst]] lattices expand eightfold into rigid standoff spikes against attack.",
        "scientific": "Crystalline [[trichocyst|trichocyst]] matrix proteins decondense ~8x into ~40 um defensive shafts."
      },
      "es": {
        "pop": "Cada [[tricocisto|trichocyst]] disparado se alarga ocho veces en una púa rígida que aleja rivales.",
        "blueprint": "La red del [[tricocisto|trichocyst]] se expande ocho veces en una lanza defensiva rígida.",
        "scientific": "La matriz cristalina del [[tricocisto|trichocyst]] se expande ~8x formando varillas de ~40 um."
      }
    },
    "para.ch1.s0.01": {
      "en": {
        "pop": "Over a thousand [[motile cilia|cilia]] carpet the [[pellicle|pellicle]], each about 10 um long.",
        "blueprint": "Over a thousand 10 um [[ciliary oars|cilia]] array across the outer [[pellicle surface|pellicle]].",
        "scientific": "Roughly 1,000-4,000 ~10 um [[motile cilia|cilia]] project through ridges of the [[pellicle|pellicle]]."
      },
      "es": {
        "pop": "Más de mil [[cilios móviles|cilia]] cubren la [[película|pellicle]], cada uno de unos 10 um de largo.",
        "blueprint": "Más de mil [[remos ciliares|cilia]] de 10 um tapizan toda la superficie del [[casco|pellicle]].",
        "scientific": "Entre 1.000 y 4.000 [[cilios móviles|cilia]] (~10 um) emergen por crestas de la [[película|pellicle]]."
      }
    },
    "para.ch1.s0.02": {
      "en": {
        "pop": "Every cilium roots in a basal [[kinetosome|kinetosome]] wired along longitudinal cortical tracks.",
        "blueprint": "Each actuator locks into a triplet-ring [[kinetosome socket|kinetosome]] aligned on cortical rails.",
        "scientific": "Each cilium nucleates from a 9x3 microtubule basal body ([[kinetosome|kinetosome]]) along kineties."
      },
      "es": {
        "pop": "Cada cilio se ancla en un [[cinetosoma|kinetosome]] basal alineado en pistas corticales longitudinales.",
        "blueprint": "Cada actuador encaja en un [[zócalo cinetosoma|kinetosome]] acoplado sobre rieles corticales.",
        "scientific": "Cada cilio nuclea en un cuerpo basal 9x3 ([[cinetosoma|kinetosome]]) dispuesto en cinetias."
      }
    },
    "para.ch1.s0.03": {
      "en": {
        "pop": "Coordinated [[cilia|cilia]] beat in traveling metachronal waves and reverse stroke on obstacle contact.",
        "blueprint": "Phase-locked [[cilia|cilia]] sweep metachronal waves and flip thrust via Ca2+ on hull collisions.",
        "scientific": "Hydrodynamically coupled [[cilia|cilia]] beat in metachronal waves, reversing via Ca2+ action potentials."
      },
      "es": {
        "pop": "Los [[cilios|cilia]] baten en ondas metácronas coordinadas e invierten el giro al chocar con algo.",
        "blueprint": "Los [[cilios|cilia]] operan en ondas metácronas sincronizadas e invierten empuje por señal de Ca2+.",
        "scientific": "Los [[cilios|cilia]] acoplados baten en ondas metácronas e invierten por potenciales de acción de Ca2+."
      }
    },
    "para.ch1.s1.01": {
      "en": {
        "pop": "Zoom into the 250 nm magnified inset to inspect the classic eukaryotic [[9+2 axoneme|axoneme]].",
        "blueprint": "Switch to the 250 nm cutaway module to inspect the standardized [[9+2 axoneme|axoneme]] drive shaft.",
        "scientific": "The magnified ~250 nm cross-section resolves the conserved eukaryotic [[9+2 axoneme|axoneme]] (PDB 8G2Z)."
      },
      "es": {
        "pop": "Acércate al recuadro de 250 nm para explorar el clásico [[axonema 9+2|axoneme]] eucariota.",
        "blueprint": "Pasa al módulo ampliado de 250 nm para analizar el eje motriz estándar del [[axonema 9+2|axoneme]].",
        "scientific": "El corte ampliado (~250 nm) resuelve el [[axonema 9+2|axoneme]] eucariota conservado (PDB 8G2Z)."
      }
    },
    "para.ch1.s1.02": {
      "en": {
        "pop": "Nine outer microtubule doublets ring a central pair inside this cylindrical [[axoneme|axoneme]].",
        "blueprint": "Nine peripheral doublet rails encircle twin central conduits inside the [[axoneme tube|axoneme]].",
        "scientific": "Nine outer A-B microtubule doublets surround a central pair inside the [[axoneme|axoneme]] core."
      },
      "es": {
        "pop": "Nueve dobletes externos de microtúbulos rodean un par central en este [[axonema|axoneme]] cilíndrico.",
        "blueprint": "Nueve rieles dobles periféricos rodean un par central dentro del tubo del [[axonema|axoneme]].",
        "scientific": "Nueve dobletes A-B periféricos rodean el par central en el núcleo del [[axonema|axoneme]]."
      }
    },
    "para.ch1.s1.03": {
      "en": {
        "pop": "Every doublet wall is built from repeating alpha and beta [[tubulin dimers|tubulin]].",
        "blueprint": "Each rigid track assembles from polarized head-to-tail alpha/beta [[tubulin modules|tubulin]].",
        "scientific": "Protofilaments polymerize from ~8 nm alpha/beta-[[tubulin heterodimers|tubulin]] (PDB 1JFF) with GTP."
      },
      "es": {
        "pop": "Cada pared del doblete está construida con dímeros repetidos de [[tubulina|tubulin]] alfa y beta.",
        "blueprint": "Cada riel rígido se ensambla con módulos polarizados de [[tubulina|tubulin]] alfa y beta.",
        "scientific": "Los protofilamentos polimerizan a partir de heterodímeros alfa/beta-[[tubulina|tubulin]] (PDB 1JFF)."
      }
    },
    "para.ch1.s2.01": {
      "en": {
        "pop": "Bridging neighboring [[tubulin doublets|tubulin]] are giant [[axonemal dynein arms|dynein]].",
        "blueprint": "Spanning adjacent [[tubulin rails|tubulin]] sit arrayed [[axonemal dynein actuators|dynein]].",
        "scientific": "Adjacent [[tubulin|tubulin]] doublets are cross-bridged by outer [[axonemal dynein|dynein]] (PDB 7KZM)."
      },
      "es": {
        "pop": "Uniendo [[dobletes de tubulina|tubulin]] vecinos hay enormes [[brazos de dineína|dynein]] axonemal.",
        "blueprint": "Entre [[rieles de tubulina|tubulin]] contiguos operan [[actuadores de dineína|dynein]] axonemal.",
        "scientific": "Dobletes vecinos de [[tubulina|tubulin]] se enlazan por brazos de [[dineína axonemal|dynein]] (PDB 7KZM)."
      }
    },
    "para.ch1.s2.02": {
      "en": {
        "pop": "Each [[dynein motor|dynein]] splits ATP built from C, H, N, O and P atoms to step along [[tubulin|tubulin]].",
        "blueprint": "Each [[dynein head|dynein]] hydrolyzes C-H-N-O-P ATP fuel to fire power strokes on [[tubulin|tubulin]].",
        "scientific": "AAA+ [[dynein|dynein]] rings cleave Mg2+-ATP (C, H, N, O, P) to walk minus-endward on [[tubulin|tubulin]]."
      },
      "es": {
        "pop": "Cada [[motor de dineína|dynein]] rompe ATP de C, H, N, O y P para caminar sobre la [[tubulina|tubulin]].",
        "blueprint": "Cada [[cabezal dineína|dynein]] hidroliza ATP (C, H, N, O, P) para traccionar sobre [[tubulina|tubulin]].",
        "scientific": "Los anillos AAA+ de [[dineína|dynein]] hidrolizan Mg2+-ATP al caminar hacia el extremo menos de [[tubulina|tubulin]]."
      }
    },
    "para.ch1.s2.03": {
      "en": {
        "pop": "Because [[axoneme|axoneme]] cross-links resist free sliding, [[dynein|dynein]] force bends the cilium.",
        "blueprint": "Because nexin links constrain [[axoneme|axoneme]] shear, [[dynein|dynein]] thrust converts into bending.",
        "scientific": "Nexin-dynein regulatory links restrict [[axoneme|axoneme]] sliding, turning [[dynein|dynein]] shear into bending."
      },
      "es": {
        "pop": "Como los enlaces del [[axonema|axoneme]] frenan el deslizamiento libre, la [[dineína|dynein]] curva el cilio.",
        "blueprint": "Al restringir la nexina el corte del [[axonema|axoneme]], el empuje de [[dineína|dynein]] produce flexión.",
        "scientific": "Los enlaces de nexina restringen el deslizamiento del [[axonema|axoneme]] y la [[dineína|dynein]] genera curvatura."
      }
    },
    "para.ch2.s0.01": {
      "en": {
        "pop": "Pond water is far fresher than cytosol, so water constantly floods inward across the [[pellicle|pellicle]].",
        "blueprint": "Hypotonic pond water drives relentless osmotic influx inward across the [[pellicle hull|pellicle]].",
        "scientific": "Against hypotonic freshwater, osmotic pressure drives steady H2O influx across the [[pellicle|pellicle]]."
      },
      "es": {
        "pop": "El agua del estanque es mucho más dulce que el citosol y entra sin cesar por la [[película|pellicle]].",
        "blueprint": "El medio hipotónico fuerza una entrada osmótica continua de agua a través del [[casco|pellicle]].",
        "scientific": "El agua dulce hipotónica genera un influjo osmótico continuo de H2O a través de la [[película|pellicle]]."
      }
    },
    "para.ch2.s0.02": {
      "en": {
        "pop": "With no rigid cell wall, Paramecium would swell and burst within minutes without water pumping.",
        "blueprint": "Lacking a pressure wall, this chassis would over-pressurize and rupture without active drainage.",
        "scientific": "Without a rigid cell wall to resist turgor, passive osmotic swelling would cause rapid cell lysis."
      },
      "es": {
        "pop": "Sin una pared rígida, Paramecium se hincharía y estallaría en minutos sin bombear esa agua.",
        "blueprint": "Sin muro de presión, este chasis se sobrepresurizaría y rompería sin drenaje activo.",
        "scientific": "Sin pared celular que soporte la turgencia, el influjo osmótico provocaría lisis rápida."
      }
    },
    "para.ch2.s0.03": {
      "en": {
        "pop": "Two star-shaped [[contractile vacuoles|contractile_vacuole]], front and rear, solve that osmotic threat.",
        "blueprint": "Dual fore and aft radial [[contractile vacuole hubs|contractile_vacuole]] regulate hull volume.",
        "scientific": "Paired anterior and posterior [[contractile vacuoles|contractile_vacuole]] execute osmoregulation."
      },
      "es": {
        "pop": "Dos [[vacuolas contráctiles|contractile_vacuole]] en estrella, anterior y posterior, resuelven ese riesgo.",
        "blueprint": "Dos [[estaciones contráctiles|contractile_vacuole]] radiales, frontal y trasera, controlan el volumen.",
        "scientific": "Dos [[vacuolas contráctiles|contractile_vacuole]] radiales, anterior y posterior, ejecutan la osmorregulación."
      }
    },
    "para.ch2.s1.01": {
      "en": {
        "pop": "Six to eight radial [[collecting canals|collecting_canals]] gather excess cytosolic water during diastole.",
        "blueprint": "Six to eight radial [[intake manifolds|collecting_canals]] collect cytosolic water during diastole.",
        "scientific": "Six to eight radial [[collecting canals|collecting_canals]] and ampullae fill passively in diastole."
      },
      "es": {
        "pop": "De seis a ocho [[canales colectores|collecting_canals]] radiales recogen el agua sobrante en diástole.",
        "blueprint": "Entre seis y ocho [[colectores radiales|collecting_canals]] captan agua del citosol en diástole.",
        "scientific": "De seis a ocho [[canales colectores|collecting_canals]] y ampollas radiales se llenan en diástole."
      }
    },
    "para.ch2.s1.02": {
      "en": {
        "pop": "Its [[canals|collecting_canals]] and [[vacuole|contractile_vacuole]] work like a bilge pump bailing water from a leaky boat.",
        "blueprint": "Radial [[collecting lines|collecting_canals]] charge the central [[vacuole tank|contractile_vacuole]] for pulsed discharge.",
        "scientific": "Ampullae of [[collecting canals|collecting_canals]] empty hypo-osmotic fluid into the [[vacuole|contractile_vacuole]] bladder."
      },
      "es": {
        "pop": "Sus [[canales|collecting_canals]] y [[vacuola|contractile_vacuole]] actúan como una bomba de achique vaciando un bote.",
        "blueprint": "Los [[colectores radiales|collecting_canals]] cargan el [[tanque vacuolar|contractile_vacuole]] para descarga pulsada.",
        "scientific": "Las ampollas de los [[canales colectores|collecting_canals]] vierten fluido en la [[vacuola|contractile_vacuole]] central."
      }
    },
    "para.ch2.s1.03": {
      "en": {
        "pop": "Every few seconds, systole contracts the [[vacuole|contractile_vacuole]] and jets water out a surface pore.",
        "blueprint": "On a steady clock, systole collapses the [[vacuole chamber|contractile_vacuole]] and vents via a pore.",
        "scientific": "Rhythmic systole expels fluid from the [[contractile vacuole|contractile_vacuole]] through a transient pore."
      },
      "es": {
        "pop": "Cada pocos segundos, la sístole contrae la [[vacuola|contractile_vacuole]] y expulsa agua por un poro.",
        "blueprint": "En ciclos regulares, la sístole vacía la [[cámara vacuolar|contractile_vacuole]] a través de un poro.",
        "scientific": "La sístole rítmica expulsa el fluido de la [[vacuola contráctil|contractile_vacuole]] por un poro superficial."
      }
    },
    "para.ch2.s2.01": {
      "en": {
        "pop": "Studding the spongiome tubules around [[collecting canals|collecting_canals]] are rotary [[V-ATPases|vatpase]].",
        "blueprint": "Surrounding the [[collecting manifolds|collecting_canals]], dense [[V-ATPase arrays|vatpase]] power intake.",
        "scientific": "Decorated spongiome tubules feeding [[collecting canals|collecting_canals]] pack proton-pumping [[V-ATPases|vatpase]]."
      },
      "es": {
        "pop": "Tapizando los túbulos en torno a los [[canales colectores|collecting_canals]] hay [[V-ATPasas|vatpase]] rotatorias.",
        "blueprint": "Rodeando los [[colectores radiales|collecting_canals]], matrices de [[V-ATPasa|vatpase]] energizan la carga.",
        "scientific": "Los túbulos del espongioma junto a los [[canales colectores|collecting_canals]] concentran [[V-ATPasas|vatpase]]."
      }
    },
    "para.ch2.s2.02": {
      "en": {
        "pop": "Burning ATP, [[V-ATPase pumps|vatpase]] drive H+ gradients that exchange ions into the [[canals|collecting_canals]].",
        "blueprint": "ATP-fed [[V-ATPase motors|vatpase]] build H+ potential that loads osmolytes into [[collecting canals|collecting_canals]].",
        "scientific": "[[V-ATPase|vatpase]] ATP hydrolysis builds delta-pH driving cation/H+ exchange into [[collecting canals|collecting_canals]]."
      },
      "es": {
        "pop": "Gastando ATP, las [[bombas V-ATPasa|vatpase]] crean gradientes de H+ que cargan iones en los [[canales|collecting_canals]].",
        "blueprint": "Los [[motores V-ATPasa|vatpase]] usan ATP para crear potencial H+ y cargar iones en los [[canales|collecting_canals]].",
        "scientific": "La [[V-ATPasa|vatpase]] hidroliza ATP creando un delta-pH que intercambia iones hacia los [[canales|collecting_canals]]."
      }
    },
    "para.ch2.s2.03": {
      "en": {
        "pop": "Water follows those concentrated ions through aquaporins until the [[vacuole|contractile_vacuole]] pulses.",
        "blueprint": "Osmotic water follows through aquaporin ports until the [[vacuole hub|contractile_vacuole]] fires.",
        "scientific": "Aquaporin-mediated H2O flux follows lumenal osmolytes until the [[contractile vacuole|contractile_vacuole]] empties."
      },
      "es": {
        "pop": "El agua sigue a esos iones por acuaporinas hasta que la [[vacuola|contractile_vacuole]] vuelve a pulsar.",
        "blueprint": "El agua entra por puertos de acuaporina hasta disparar la descarga de la [[vacuola|contractile_vacuole]].",
        "scientific": "El flujo de H2O por acuaporinas sigue a los osmolitos hasta vaciar la [[vacuola contráctil|contractile_vacuole]]."
      }
    },
    "para.ch3.s0.01": {
      "en": {
        "pop": "A deep ciliated [[oral groove|oral_groove]] sweeps down one side of the swimming cell toward its midline.",
        "blueprint": "A sculpted ciliated [[intake channel|oral_groove]] funnels water along the ventral hull to midline.",
        "scientific": "The ciliated [[oral groove|oral_groove]] (peristome) channels fluid currents ventrally toward mid-cell."
      },
      "es": {
        "pop": "Un profundo [[surco oral|oral_groove]] ciliado recorre un costado de la célula hasta su zona media.",
        "blueprint": "Un [[canal de entrada|oral_groove]] ciliado dirige la corriente de agua por el casco hacia el centro.",
        "scientific": "El [[surco oral|oral_groove]] ciliado (peristoma) canaliza corrientes de fluido hacia la región media."
      }
    },
    "para.ch3.s0.02": {
      "en": {
        "pop": "Specialized [[cilia|cilia]] inside the [[oral groove|oral_groove]] funnel suspended bacteria into the [[cytostome|cytostome]].",
        "blueprint": "Beating [[cilia|cilia]] in the [[oral groove|oral_groove]] sweep bacterial prey straight into the [[cytostome port|cytostome]].",
        "scientific": "Membranellar [[cilia|cilia]] lining the [[oral groove|oral_groove]] concentrate bacteria at the [[cytostome|cytostome]]."
      },
      "es": {
        "pop": "[[Cilios|cilia]] especializados del [[surco oral|oral_groove]] barren bacterias suspendidas hacia el [[citostoma|cytostome]].",
        "blueprint": "[[Cilios|cilia]] del [[canal oral|oral_groove]] canalizan presas bacterianas directo al [[puerto citostoma|cytostome]].",
        "scientific": "[[Cilios|cilia]] membranelares del [[surco oral|oral_groove]] concentran bacterias en el [[citostoma|cytostome]]."
      }
    },
    "para.ch3.s0.03": {
      "en": {
        "pop": "At the base of the [[cytostome|cytostome]] cytopharynx, incoming prey pinches off inside fresh membrane.",
        "blueprint": "At the [[cytostome|cytostome]] throat, discoidal vesicles fuse to seal incoming bacteria in a pod.",
        "scientific": "At the [[cytostome|cytostome]]-cytopharynx base, nascent phagosomes bud from recycled discoidal vesicles."
      },
      "es": {
        "pop": "En el fondo del [[citostoma|cytostome]], las presas quedan encerradas dentro de una membrana nueva.",
        "blueprint": "En la garganta del [[citostoma|cytostome]], vesículas discoidales encapsulan la carga bacteriana.",
        "scientific": "En la base del [[citostoma|cytostome]]-citofaringe, brotan fagosomas desde vesículas discoidales."
      }
    },
    "para.ch3.s1.01": {
      "en": {
        "pop": "Each budding [[food vacuole|food_vacuole]] breaks away from the [[cytostome|cytostome]] and joins cytoplasmic flow.",
        "blueprint": "Each sealed [[food vacuole pod|food_vacuole]] detaches from the [[cytostome|cytostome]] onto cyclosis rails.",
        "scientific": "Detached phagocytic [[food vacuoles|food_vacuole]] leave the [[cytostome|cytostome]] along cyclosis tracks."
      },
      "es": {
        "pop": "Cada [[vacuola digestiva|food_vacuole]] se desprende del [[citostoma|cytostome]] y se suma al flujo interno.",
        "blueprint": "Cada [[cápsula digestiva|food_vacuole]] se separa del [[citostoma|cytostome]] hacia rieles de ciclosis.",
        "scientific": "Las [[vacuolas digestivas|food_vacuole]] brotan del [[citostoma|cytostome]] y avanzan por rutas de ciclosis."
      }
    },
    "para.ch3.s1.02": {
      "en": {
        "pop": "Along its cyclosis loop, the [[food vacuole|food_vacuole]] fuses with lysosomes and shifts from green to acid amber.",
        "blueprint": "In transit, the [[food vacuole|food_vacuole]] docks with acidosomes and lysosomes, dropping lumen pH.",
        "scientific": "During cyclosis, the [[food vacuole|food_vacuole]] acidifies to pH ~3 via acidosomes before lysosomal fusion."
      },
      "es": {
        "pop": "En su ruta de ciclosis, la [[vacuola digestiva|food_vacuole]] se funde con lisosomas y vira a ámbar ácido.",
        "blueprint": "En tránsito, la [[vacuola digestiva|food_vacuole]] acopla acidosomas y lisosomas, bajando su pH interno.",
        "scientific": "Durante la ciclosis, la [[vacuola digestiva|food_vacuole]] baja a pH ~3 y se fusiona con lisosomas."
      }
    },
    "para.ch3.s1.03": {
      "en": {
        "pop": "Acid hydrolases digest the bacteria, then digested amino acids and sugars cross into the cytosol.",
        "blueprint": "Hydrolase enzymes dismantle bacterial polymers and export amino acids and sugars to cytosol.",
        "scientific": "Lysosomal hydrolases cleave bacterial macromolecules; transporters export monomers to cytosol."
      },
      "es": {
        "pop": "Las hidrolasas ácidas digieren las bacterias y pasan aminoácidos y azúcares hacia el citosol.",
        "blueprint": "Enzimas hidrolasas descomponen polímeros bacterianos y exportan monómeros hacia el citosol.",
        "scientific": "Las hidrolasas lisosomales digieren bacterias y transportadores exportan monómeros al citosol."
      }
    },
    "para.ch3.s2.01": {
      "en": {
        "pop": "Once nutrients are absorbed, the spent [[food vacuole|food_vacuole]] reaches the posterior [[cytoproct|cytoproct]].",
        "blueprint": "After nutrient extraction, the spent [[vacuole pod|food_vacuole]] docks at the rear [[cytoproct port|cytoproct]].",
        "scientific": "Depleted phagolysosomal [[food vacuoles|food_vacuole]] traffic to the fixed posterior [[cytoproct|cytoproct]]."
      },
      "es": {
        "pop": "Tras absorber nutrientes, la [[vacuola digestiva|food_vacuole]] agotada llega al [[citoprocto|cytoproct]] posterior.",
        "blueprint": "Tras extraer carga útil, la [[cápsula|food_vacuole]] se acopla al [[puerto citoprocto|cytoproct]] trasero.",
        "scientific": "Las [[vacuolas digestivas|food_vacuole]] agotadas migran hacia el [[citoprocto|cytoproct]] posterior fijo."
      }
    },
    "para.ch3.s2.02": {
      "en": {
        "pop": "The [[cytoproct|cytoproct]] is a dedicated cell-anus docking site where vacuole membrane fuses outward.",
        "blueprint": "The [[cytoproct|cytoproct]] serves as a fixed exhaust valve where spent vacuole membranes fuse.",
        "scientific": "At the [[cytoproct|cytoproct]] exocytic slit, vacuolar and plasma membranes fuse to discharge waste."
      },
      "es": {
        "pop": "El [[citoprocto|cytoproct]] es un poro anal fijo donde la membrana vacuolar se fusiona al exterior.",
        "blueprint": "El [[citoprocto|cytoproct]] opera como válvula de escape fija donde se acoplan vacuolas usadas.",
        "scientific": "En la hendidura del [[citoprocto|cytoproct]], la membrana vacuolar se fusiona para exocitar residuos."
      }
    },
    "para.ch3.s2.03": {
      "en": {
        "pop": "Indigestible debris exits cleanly while membrane discs recycle along tracks back to the [[cytostome|cytostome]].",
        "blueprint": "Solid waste ejects while membrane discs loop back on microtubule rails to the [[cytostome|cytostome]].",
        "scientific": "Debris is egested while retrieved membrane tubules recycle along microtubules to the [[cytostome|cytostome]]."
      },
      "es": {
        "pop": "Los restos salen al exterior y los discos de membrana vuelven por pistas al [[citostoma|cytostome]].",
        "blueprint": "Los residuos se expulsan mientras discos de membrana retornan por rieles al [[citostoma|cytostome]].",
        "scientific": "Los residuos se eyectan mientras túbulos membranosos se reciclan por microtúbulos al [[citostoma|cytostome]]."
      }
    },
    "para.ch4.s0.01": {
      "en": {
        "pop": "Unlike animal or plant cells, Paramecium splits its genome across a [[macronucleus|macronucleus]] and [[micronucleus|micronucleus]].",
        "blueprint": "Unlike tissue cells, Paramecium partitions code across a [[macronucleus|macronucleus]] and [[micronucleus|micronucleus]].",
        "scientific": "Ciliate nuclear dimorphism divides genomes into a somatic [[macronucleus|macronucleus]] and germline [[micronucleus|micronucleus]]."
      },
      "es": {
        "pop": "A diferencia de animales o plantas, Paramecium reparte su ADN entre [[macronúcleo|macronucleus]] y [[micronúcleo|micronucleus]].",
        "blueprint": "Frente a células tisulares, Paramecium separa su código en [[macronúcleo|macronucleus]] y [[micronúcleo|micronucleus]].",
        "scientific": "El dimorfismo nuclear divide el genoma en [[macronúcleo|macronucleus]] somático y [[micronúcleo|micronucleus]] germinal."
      }
    },
    "para.ch4.s0.02": {
      "en": {
        "pop": "The [[macronucleus|macronucleus]] runs open working copies while the [[micronucleus|micronucleus]] stays a locked master archive.",
        "blueprint": "The polyploid [[macronucleus|macronucleus]] serves active runtime code; the [[micronucleus|micronucleus]] holds cold backup.",
        "scientific": "The ~800n [[macronucleus|macronucleus]] (~30 Mbp) drives daily mRNA; the 2n [[micronucleus|micronucleus]] stays silent."
      },
      "es": {
        "pop": "El [[macronúcleo|macronucleus]] usa copias de trabajo diarias y el [[micronúcleo|micronucleus]] guarda el archivo maestro.",
        "blueprint": "El [[macronúcleo|macronucleus]] poliploide sirve código activo; el [[micronúcleo|micronucleus]] resguarda la copia maestra.",
        "scientific": "El [[macronúcleo|macronucleus]] (~800n, ~30 Mbp) transcribe ARNm; el [[micronúcleo|micronucleus]] diploide queda silente."
      }
    },
    "para.ch4.s0.03": {
      "en": {
        "pop": "During sexual conjugation, two cells swap haploid [[micronucleus|micronucleus]] copies and rebuild a fresh [[macronucleus|macronucleus]].",
        "blueprint": "During conjugation, paired cells swap haploid [[micronucleus|micronucleus]] payloads to compile a new [[macronucleus|macronucleus]].",
        "scientific": "In conjugation, meiotic [[micronucleus|micronucleus]] exchange generates a zygotic nucleus rebuilding the [[macronucleus|macronucleus]]."
      },
      "es": {
        "pop": "En la conjugación sexual, dos células intercambian [[micronúcleos|micronucleus]] y rehacen el [[macronúcleo|macronucleus]].",
        "blueprint": "Al conjugarse, dos nodos intercambian paquetes del [[micronúcleo|micronucleus]] y recompilan el [[macronúcleo|macronucleus]].",
        "scientific": "En conjugación, el intercambio meiótico de [[micronúcleos|micronucleus]] reconstruye un nuevo [[macronúcleo|macronucleus]]."
      }
    },
    "para.ch4.s1.01": {
      "en": {
        "pop": "Dense clouds of eukaryotic [[80S ribosomes|ribosome_80s]] translate continuous mRNA streaming from the [[macronucleus|macronucleus]].",
        "blueprint": "Cytosolic [[80S compilers|ribosome_80s]] translate nonstop mRNA packets exported from the [[macronucleus|macronucleus]].",
        "scientific": "Eukaryotic [[80S ribosomes|ribosome_80s]] translate abundant mRNA transcripts from the polyploid [[macronucleus|macronucleus]]."
      },
      "es": {
        "pop": "Nubes de [[ribosomas 80S|ribosome_80s]] eucariotas traducen el ARNm continuo que sale del [[macronúcleo|macronucleus]].",
        "blueprint": "[[Compiladores 80S|ribosome_80s]] citosólicos traducen paquetes continuos de ARNm desde el [[macronúcleo|macronucleus]].",
        "scientific": "Los [[ribosomas 80S|ribosome_80s]] traducen abundantes transcritos de ARNm del [[macronúcleo|macronucleus]] poliploide."
      }
    },
    "para.ch4.s1.02": {
      "en": {
        "pop": "Tubular [[mitochondria|mito]] burn food-derived fuel with O2 to supply steady cytosolic ATP.",
        "blueprint": "Tubular [[mitochondrial power plants|mito]] oxidize nutrient fuel with O2 to charge the ATP rail.",
        "scientific": "Aerobic [[mitochondria|mito]] with tubular cristae oxidize substrates via O2 to generate cytosolic ATP."
      },
      "es": {
        "pop": "[[Mitocondrias|mito]] tubulares queman nutrientes con O2 para mantener un suministro constante de ATP.",
        "blueprint": "[[Centrales mitocondriales|mito]] tubulares oxidan combustible con O2 para alimentar el bus de ATP.",
        "scientific": "Las [[mitocondrias|mito]] de crestas tubulares oxidan sustratos con O2 para sintetizar ATP citosólico."
      }
    },
    "para.ch4.s1.03": {
      "en": {
        "pop": "That mitochondrial ATP directly fuels every [[dynein|dynein]] stroke and [[V-ATPase|vatpase]] osmotic pump.",
        "blueprint": "That shared ATP rail powers both ciliary [[dynein actuators|dynein]] and [[V-ATPase|vatpase]] bilge pumps.",
        "scientific": "Oxidative ATP directly drives axonemal [[dynein|dynein]] ATPases and spongiome [[V-ATPase|vatpase]] pumps."
      },
      "es": {
        "pop": "Ese ATP mitocondrial impulsa cada golpe de [[dineína|dynein]] y cada bomba osmótica [[V-ATPasa|vatpase]].",
        "blueprint": "Ese bus de ATP alimenta tanto los actuadores de [[dineína|dynein]] como las bombas [[V-ATPasa|vatpase]].",
        "scientific": "El ATP oxidativo impulsa directamente las ATPasas de [[dineína|dynein]] y las bombas [[V-ATPasa|vatpase]]."
      }
    },
    "para.ch4.s2.01": {
      "en": {
        "pop": "Together, [[9+2 cilia|cilia]], [[contractile vacuoles|contractile_vacuole]] and [[food vacuoles|food_vacuole]] run a whole hunter.",
        "blueprint": "Integrated summary: [[ciliary drive|cilia]], [[osmotic pumps|contractile_vacuole]] and [[digestion pods|food_vacuole]] unify one hunter.",
        "scientific": "[[9+2 cilia|cilia]], osmoregulatory [[vacuoles|contractile_vacuole]] and [[phagosomes|food_vacuole]] confer full unicellular autonomy."
      },
      "es": {
        "pop": "Juntos, [[cilios 9+2|cilia]], [[vacuolas contráctiles|contractile_vacuole]] y [[digestivas|food_vacuole]] sostienen a un cazador.",
        "blueprint": "Resumen: [[propulsión ciliar|cilia]], [[bombas osmóticas|contractile_vacuole]] y [[cápsulas digestivas|food_vacuole]] forman un sistema.",
        "scientific": "[[Cilios 9+2|cilia]], [[vacuolas contráctiles|contractile_vacuole]] y [[fagosomas|food_vacuole]] logran plena autonomía unicelular."
      }
    },
    "para.ch4.s2.02": {
      "en": {
        "pop": "From a 200 um [[pellicle|pellicle]] down to ATP atoms on [[dynein|dynein]], one cell handles every task of life.",
        "blueprint": "Across four orders of magnitude, from [[pellicle|pellicle]] to [[dynein|dynein]] ATP, one chassis runs it all.",
        "scientific": "Spanning 200 um [[pellicle|pellicle]] down to 0.1 nm ATP atoms on [[dynein|dynein]], one eukaryote is self-sufficient."
      },
      "es": {
        "pop": "Desde su [[película|pellicle]] de 200 um hasta el ATP en la [[dineína|dynein]], una sola célula resuelve toda la vida.",
        "blueprint": "En cuatro órdenes de escala, del [[casco|pellicle]] al ATP en [[dineína|dynein]], un solo chasis opera todo.",
        "scientific": "Desde la [[película|pellicle]] (200 um) hasta átomos del ATP en [[dineína|dynein]], un eucariota basta por sí solo."
      }
    },
    "para.ch4.s2.03": {
      "en": {
        "pop": "Inspect any tag up close, or continue to Plasmodium to meet an alveolate cousin turned parasite.",
        "blueprint": "Audit any subsystem tag now, or advance to Plasmodium to see an alveolate repurposed for invasion.",
        "scientific": "Inspect any organelle tag, or proceed to Plasmodium falciparum to contrast a parasitic alveolate."
      },
      "es": {
        "pop": "Explora cualquier etiqueta de cerca o avanza a Plasmodium para ver a un primo alveolado parásito.",
        "blueprint": "Inspecciona cualquier subsistema o pasa a Plasmodium para analizar un alveolado invasor.",
        "scientific": "Explora cualquier etiqueta o avanza a Plasmodium falciparum para contrastar un alveolado parásito."
      }
    }
  },
  "real-plasmodium": {
    "plas.ch0.s0.01": {
      "en": {
        "pop": "Meet Plasmodium falciparum, the malaria parasite invading a 7.5 um human [[red blood cell|rbc]].",
        "blueprint": "System node Plasmodium falciparum: a eukaryotic invader breaching a 7.5 um human [[RBC host|rbc]].",
        "scientific": "Plasmodium falciparum (Apicomplexa) is an obligate eukaryotic parasite of ~7.5 um human [[RBCs|rbc]]."
      },
      "es": {
        "pop": "Conoce a Plasmodium falciparum, el parásito de la malaria invadiendo un [[glóbulo rojo|rbc]] de 7,5 um.",
        "blueprint": "Nodo Plasmodium falciparum: un invasor eucariota penetrando un [[eritrocito huésped|rbc]] de 7,5 um.",
        "scientific": "Plasmodium falciparum (Apicomplexa) es un parásito eucariota de [[eritrocitos|rbc]] humanos (~7,5 um)."
      }
    },
    "plas.ch0.s0.02": {
      "en": {
        "pop": "Unlike bacterial Chlamydia or viruses, this 1.5 um merozoite is a full eukaryotic cell.",
        "blueprint": "Unlike prokaryotic Chlamydia or viral capsids, this 1.5 um merozoite runs a full eukaryotic stack.",
        "scientific": "Unlike bacterial Chlamydia or virions, this ~1.5 x 1.0 um merozoite is a compartmentalized eukaryote."
      },
      "es": {
        "pop": "A diferencia de la bacteria Chlamydia o de los virus, este merozoíto de 1,5 um es eucariota.",
        "blueprint": "Frente a Chlamydia o virus, este merozoíto de 1,5 um opera con arquitectura eucariota completa.",
        "scientific": "A diferencia de Chlamydia o virus, este merozoíto (~1,5 x 1,0 um) es un eucariota compartimentado."
      }
    },
    "plas.ch0.s0.03": {
      "en": {
        "pop": "Cut open the crimson [[erythrocyte|rbc]] to trace its [[parasitophorous vacuole|pvm]] and [[nucleus|nucleus]].",
        "blueprint": "Sectioning the host [[RBC hull|rbc]] reveals the [[PVM bunker|pvm]] enclosing the parasite [[nucleus|nucleus]].",
        "scientific": "Cutaway of the host [[erythrocyte|rbc]] exposes the [[parasitophorous vacuole|pvm]] and true [[nucleus|nucleus]]."
      },
      "es": {
        "pop": "Abre el [[eritrocito|rbc]] rojo para ver su [[vacuola parasitófora|pvm]] y su [[núcleo|nucleus]] verdadero.",
        "blueprint": "Seccionar el [[casco eritrocitario|rbc]] expone el [[búnker PVM|pvm]] y el [[núcleo|nucleus]] del parásito.",
        "scientific": "El corte del [[eritrocito|rbc]] revela la [[vacuola parasitófora|pvm]] y el [[núcleo|nucleus]] eucariota."
      }
    },
    "plas.ch0.s1.01": {
      "en": {
        "pop": "Inside the [[red blood cell|rbc]], the parasite lives enclosed in a [[parasitophorous vacuole|pvm]].",
        "blueprint": "Inside the [[RBC interior|rbc]], the invader occupies a sealed [[parasitophorous vacuole|pvm]] bay.",
        "scientific": "Within the [[erythrocyte|rbc]], P. falciparum resides inside a host-derived [[PVM compartment|pvm]]."
      },
      "es": {
        "pop": "Dentro del [[glóbulo rojo|rbc]], el parásito vive envuelto en una [[vacuola parasitófora|pvm]].",
        "blueprint": "Dentro del [[eritrocito|rbc]], el invasor opera confinado en una cabina [[vacuola parasitófora|pvm]].",
        "scientific": "Dentro del [[eritrocito|rbc]], P. falciparum habita un compartimento delimitado por la [[PVM|pvm]]."
      }
    },
    "plas.ch0.s1.02": {
      "en": {
        "pop": "Like Chlamydia's bacterial inclusion, this [[PVM barrier|pvm]] hides the invader from host defenses.",
        "blueprint": "Analogous to Chlamydia's inclusion shell, this [[PVM partition|pvm]] isolates the parasite from defense.",
        "scientific": "Convergently like Chlamydia inclusions, the [[PVM|pvm]] buffers the parasite from host surveillance."
      },
      "es": {
        "pop": "Como la inclusión de Chlamydia, esta [[barrera PVM|pvm]] oculta al invasor de las defensas huésped.",
        "blueprint": "Similar a la inclusión de Chlamydia, esta [[partición PVM|pvm]] aísla al parásito de la respuesta.",
        "scientific": "De modo convergente a la inclusión de Chlamydia, la [[PVM|pvm]] resguarda al parásito del huésped."
      }
    },
    "plas.ch0.s1.03": {
      "en": {
        "pop": "Because mature human [[red blood cells|rbc]] lack nuclei and MHC, this shelter hides it from T cells.",
        "blueprint": "Because mature [[RBC hulls|rbc]] carry zero nuclei or MHC display ports, cytotoxic T cells cannot flag it.",
        "scientific": "Anucleate mature [[erythrocytes|rbc]] lack MHC class I presentation, shielding the parasite from CD8+ T cells."
      },
      "es": {
        "pop": "Como los [[glóbulos rojos|rbc]] maduros carecen de núcleo y MHC, el parásito escapa a los linfocitos T.",
        "blueprint": "Al carecer los [[eritrocitos|rbc]] de núcleo y puertos MHC, los linfocitos T citotóxicos no lo detectan.",
        "scientific": "Al carecer los [[eritrocitos|rbc]] maduros de núcleo y MHC-I, el parásito evade linfocitos T CD8+."
      }
    },
    "plas.ch0.s2.01": {
      "en": {
        "pop": "Beneath the parasite plasma membrane sits a quilted [[Inner Membrane Complex|imc]], or IMC.",
        "blueprint": "Under the parasite plasma membrane sits a double-layered [[Inner Membrane Complex|imc]] chassis.",
        "scientific": "Beneath the plasmalemma lies the alveolar [[Inner Membrane Complex|imc]] forming a triple pellicle."
      },
      "es": {
        "pop": "Bajo la membrana plasmática del parásito hay un [[Complejo de Membrana Interna|imc]] acolchado o IMC.",
        "blueprint": "Bajo la membrana externa opera el chasis de doble lámina del [[Complejo de Membrana Interna|imc]].",
        "scientific": "Bajo el plasmalema se sitúa el [[Complejo de Membrana Interna|imc]] alveolar formando triple película."
      }
    },
    "plas.ch0.s2.02": {
      "en": {
        "pop": "Those flattened [[IMC sacs|imc]] share direct ancestry with the cortical alveoli of Paramecium.",
        "blueprint": "These flattened [[IMC panels|imc]] inherit the exact alveolar hardware seen in free-living Paramecium.",
        "scientific": "Flattened [[IMC vesicles|imc]] are evolutionarily homologous to the cortical alveoli of Paramecium."
      },
      "es": {
        "pop": "Esos [[sacos del IMC|imc]] aplanados comparten origen directo con los alvéolos de Paramecium.",
        "blueprint": "Estos [[paneles del IMC|imc]] heredan la misma arquitectura alveolar vista en Paramecium libre.",
        "scientific": "Las [[vesículas del IMC|imc]] aplanadas son evolutivamente homólogas a los alvéolos de Paramecium."
      }
    },
    "plas.ch0.s2.03": {
      "en": {
        "pop": "Instead of anchoring cilia, the [[IMC|imc]] frames the sub-pellicular track for the [[glideosome|glideosome]].",
        "blueprint": "Rather than mounting cilia, the [[IMC bulkhead|imc]] anchors the linear [[glideosome motor|glideosome]].",
        "scientific": "Instead of kinetosomes, the [[IMC|imc]] anchors the sub-pellicular [[PfMyoA-MTIP glideosome|glideosome]]."
      },
      "es": {
        "pop": "En vez de anclar cilios, el [[IMC|imc]] forma la pista subpelicular donde corre el [[glideosoma|glideosome]].",
        "blueprint": "En lugar de montar cilios, el [[mamparo IMC|imc]] fija el motor lineal del [[glideosoma|glideosome]].",
        "scientific": "En vez de cinetosomas, el [[IMC|imc]] ancla el [[glideosoma PfMyoA-MTIP|glideosome]] subpelicular."
      }
    },
    "plas.ch1.s0.01": {
      "en": {
        "pop": "At the nose sits the [[apical complex|apical_complex]], a polar assembly defining phylum Apicomplexa.",
        "blueprint": "At the forward tip sits the [[apical complex|apical_complex]], a precision docking and breach turret.",
        "scientific": "Polar rings and secretory organelles form the [[apical complex|apical_complex]] defining Apicomplexa."
      },
      "es": {
        "pop": "En la punta está el [[complejo apical|apical_complex]], ensamblaje polar que define a Apicomplexa.",
        "blueprint": "En la proa se ubica el [[complejo apical|apical_complex]], una torreta de acoplamiento e invasión.",
        "scientific": "Anillos polares y orgánulos secretores forman el [[complejo apical|apical_complex]] de Apicomplexa."
      }
    },
    "plas.ch1.s0.02": {
      "en": {
        "pop": "Cigar-shaped [[micronemes|micronemes]] discharge [[PfRH5 adhesins|pfrh5]] toward the [[red blood cell|rbc]].",
        "blueprint": "Tubular [[microneme pods|micronemes]] deploy [[PfRH5 docking keys|pfrh5]] onto the target [[RBC hull|rbc]].",
        "scientific": "Secretory [[micronemes|micronemes]] release [[PfRH5|pfrh5]] (PDB 4U0Q) adhesins toward the [[erythrocyte|rbc]]."
      },
      "es": {
        "pop": "[[Micronemas|micronemes]] alargados descargan [[adhesinas PfRH5|pfrh5]] hacia el [[glóbulo rojo|rbc]].",
        "blueprint": "[[Cápsulas micronemas|micronemes]] despliegan [[llaves PfRH5|pfrh5]] sobre el [[casco eritrocitario|rbc]].",
        "scientific": "Los [[micronemas|micronemes]] secretan adhesinas [[PfRH5|pfrh5]] (PDB 4U0Q) hacia el [[eritrocito|rbc]]."
      }
    },
    "plas.ch1.s0.03": {
      "en": {
        "pop": "Essential [[PfRH5|pfrh5]] locks onto human Basigin receptors, committing the merozoite to invade.",
        "blueprint": "Binding of [[PfRH5|pfrh5]] to host Basigin triggers the irreversible invasion handshake.",
        "scientific": "[[PfRH5|pfrh5]]-Basigin binding (PDB 4U0Q, Kd ~1 uM) triggers Ca2+ signaling committing invasion."
      },
      "es": {
        "pop": "La proteína esencial [[PfRH5|pfrh5]] se acopla a Basigin humano y dispara la invasión irreversible.",
        "blueprint": "El enlace de [[PfRH5|pfrh5]] con Basigin huésped confirma el protocolo irreversible de entrada.",
        "scientific": "El complejo [[PfRH5|pfrh5]]-Basigin (PDB 4U0Q, Kd ~1 uM) induce señal de Ca2+ para invadir."
      }
    },
    "plas.ch1.s1.01": {
      "en": {
        "pop": "Next, twin tear-drop [[rhoptries|rhoptries]] inject RON2 protein straight into the [[RBC membrane|rbc]].",
        "blueprint": "Twin club-shaped [[rhoptry injectors|rhoptries]] insert RON2 anchor receptors into the [[RBC bilayer|rbc]].",
        "scientific": "Club-shaped [[rhoptries|rhoptries]] secrete the RON2-4-5-8 complex directly into the [[RBC membrane|rbc]]."
      },
      "es": {
        "pop": "Luego, dos [[roptrias|rhoptries]] en lágrima inyectan proteína RON2 directo en la [[membrana del RBC|rbc]].",
        "blueprint": "Dos [[inyectores roptrias|rhoptries]] insertan receptores de anclaje RON2 en la [[bicapa del RBC|rbc]].",
        "scientific": "Las [[roptrias|rhoptries]] secretan el complejo RON2-4-5-8 directamente en la [[membrana del RBC|rbc]]."
      }
    },
    "plas.ch1.s1.02": {
      "en": {
        "pop": "The [[moving junction|moving_junction]] and [[glideosome|glideosome]] act like a self-laid zipper pulling into the [[red cell|rbc]].",
        "blueprint": "Coupled to the [[moving junction ring|moving_junction]], the [[glideosome drive|glideosome]] winches through the [[RBC|rbc]].",
        "scientific": "The [[AMA1-RON2 junction|moving_junction]] (PDB 3SRI) transduces [[glideosome|glideosome]] force into the [[RBC|rbc]]."
      },
      "es": {
        "pop": "La [[unión móvil|moving_junction]] y el [[glideosoma|glideosome]] operan como una cremallera que entra al [[eritrocito|rbc]].",
        "blueprint": "Acoplado al [[anillo de unión móvil|moving_junction]], el [[glideosoma|glideosome]] tracciona al interior del [[RBC|rbc]].",
        "scientific": "La [[unión AMA1-RON2|moving_junction]] (PDB 3SRI) transmite fuerza del [[glideosoma|glideosome]] hacia el [[RBC|rbc]]."
      }
    },
    "plas.ch1.s1.03": {
      "en": {
        "pop": "Parasite AMA1 clamps onto host-embedded RON2, sealing a tight [[moving junction|moving_junction]] ring.",
        "blueprint": "Surface AMA1 locks onto injected RON2, forming a tight traction collar called the [[moving junction|moving_junction]].",
        "scientific": "Micronemal AMA1 binds rhoptry-inserted RON2 (PDB 3SRI), assembling the [[moving junction|moving_junction]]."
      },
      "es": {
        "pop": "AMA1 del parásito atrapa al RON2 incrustado y sella un anillo ceñido de [[unión móvil|moving_junction]].",
        "blueprint": "AMA1 superficial fija el RON2 inyectado, cerrando un collar de tracción o [[unión móvil|moving_junction]].",
        "scientific": "AMA1 micronemal se une a RON2 rióptrico (PDB 3SRI) ensamblando la [[unión móvil|moving_junction]]."
      }
    },
    "plas.ch1.s2.01": {
      "en": {
        "pop": "Between the plasma membrane and [[IMC|imc]] runs the ATP-powered [[PfMyoA-MTIP glideosome|glideosome]].",
        "blueprint": "Sandwiched above the [[IMC|imc]] bulkhead sits the ATP-driven [[PfMyoA-MTIP glideosome|glideosome]] engine.",
        "scientific": "Anchored to [[IMC|imc]] GAP proteins, the [[PfMyoA-MTIP glideosome|glideosome]] (PDB 6YCX) drives gliding."
      },
      "es": {
        "pop": "Entre la membrana plasmática y el [[IMC|imc]] corre el [[glideosoma PfMyoA-MTIP|glideosome]] con ATP.",
        "blueprint": "Entre membrana externa y [[IMC|imc]] opera el motor lineal con ATP del [[glideosoma|glideosome]].",
        "scientific": "Anclado a proteínas GAP del [[IMC|imc]], el [[glideosoma PfMyoA-MTIP|glideosome]] (PDB 6YCX) impulsa la entrada."
      }
    },
    "plas.ch1.s2.02": {
      "en": {
        "pop": "Myosin heads in the [[glideosome|glideosome]] step backward along short [[PfActI actin tracks|actin]].",
        "blueprint": "Stationary [[glideosome|glideosome]] myosin heads ratchet short [[PfActI actin rails|actin]] rearward.",
        "scientific": "Class XIV [[glideosome|glideosome]] myosin PfMyoA hydrolyzes ATP walking short [[PfActI|actin]] (PDB 4CBU)."
      },
      "es": {
        "pop": "Las cabezas de miosina del [[glideosoma|glideosome]] caminan atrás por pistas cortas de [[actina PfActI|actin]].",
        "blueprint": "Las cabezas fijas del [[glideosoma|glideosome]] desplazan atrás los rieles cortos de [[actina PfActI|actin]].",
        "scientific": "La miosina clase XIV del [[glideosoma|glideosome]] hidroliza ATP sobre filamentos [[PfActI|actin]] (PDB 4CBU)."
      }
    },
    "plas.ch1.s2.03": {
      "en": {
        "pop": "Linked to external adhesins, [[actin|actin]] and [[glideosome|glideosome]] pull the cell inward in 20 seconds.",
        "blueprint": "Coupled via aldolase to adhesins, [[actin|actin]] and [[glideosome|glideosome]] finish entry in ~20 seconds.",
        "scientific": "Transmembrane adhesin coupling lets [[PfActI|actin]] and [[glideosome|glideosome]] complete entry in ~20-30 s."
      },
      "es": {
        "pop": "Unidos a adhesinas externas, [[actina|actin]] y [[glideosoma|glideosome]] meten la célula en 20 segundos.",
        "blueprint": "Acoplados a adhesinas externas, [[actina|actin]] y [[glideosoma|glideosome]] completan la entrada en ~20 s.",
        "scientific": "El acoplamiento transmembrana de [[PfActI|actin]] y [[glideosoma|glideosome]] completa la invasión en ~20-30 s."
      }
    },
    "plas.ch1.s3.01": {
      "en": {
        "pop": "As the [[moving junction|moving_junction]] slides rearward, [[rhoptries|rhoptries]] pour lipids into the entry pocket.",
        "blueprint": "As the [[moving junction|moving_junction]] sweeps aft, [[rhoptry bulbs|rhoptries]] supply lipids to line the bay.",
        "scientific": "As the [[moving junction|moving_junction]] translocates posteriorly, [[rhoptries|rhoptries]] secrete vacuole lipids."
      },
      "es": {
        "pop": "Mientras la [[unión móvil|moving_junction]] corre atrás, las [[roptrias|rhoptries]] vierten lípidos en el bolsillo.",
        "blueprint": "Al retroceder la [[unión móvil|moving_junction]], las [[roptrias|rhoptries]] inyectan lípidos para el compartimento.",
        "scientific": "Al desplazarse la [[unión móvil|moving_junction]], las [[roptrias|rhoptries]] secretan lípidos vacuolares."
      }
    },
    "plas.ch1.s3.02": {
      "en": {
        "pop": "Those secretions expand the host membrane inward to form the new [[parasitophorous vacuole|pvm]].",
        "blueprint": "This lipid supply inflates host membrane inward, sealing a custom [[parasitophorous vacuole|pvm]].",
        "scientific": "Rhoptry lipids and invaginated RBC bilayer assemble the nascent [[parasitophorous vacuole|pvm]]."
      },
      "es": {
        "pop": "Esas secreciones expanden la membrana huésped hacia adentro formando la [[vacuola parasitófora|pvm]].",
        "blueprint": "Ese aporte lipídico invagina la membrana huésped hasta sellar la nueva [[vacuola parasitófora|pvm]].",
        "scientific": "Los lípidos rióptricos y la bicapa invaginada ensamblan la naciente [[vacuola parasitófora|pvm]]."
      }
    },
    "plas.ch1.s3.03": {
      "en": {
        "pop": "Once the rear closes, the parasite sits sealed inside its [[PVM|pvm]] ready to feed and remodel.",
        "blueprint": "After rear scission, the invader sits pressurized inside its [[PVM|pvm]] and boots host remodeling.",
        "scientific": "Posterior membrane fission seals the ring stage inside the [[PVM|pvm]] to begin trophozoite growth."
      },
      "es": {
        "pop": "Al cerrarse por detrás, el parásito queda sellado en su [[PVM|pvm]] listo para nutrirse y remodelar.",
        "blueprint": "Tras el sellado posterior, el invasor queda aislado en su [[PVM|pvm]] e inicia el remodelado.",
        "scientific": "La fisión posterior sella el estadio en anillo dentro de la [[PVM|pvm]] para iniciar el crecimiento."
      }
    },
    "plas.ch2.s0.01": {
      "en": {
        "pop": "Inside the merozoite sits a true [[nucleus|nucleus]] enclosed by a porous double nuclear envelope.",
        "blueprint": "At core level sits a true eukaryotic [[nucleus vault|nucleus]] wrapped in a porous double envelope.",
        "scientific": "The parasite harbors a true eukaryotic [[nucleus|nucleus]] bounded by a nuclear-pore double membrane."
      },
      "es": {
        "pop": "Dentro del merozoíto hay un [[núcleo|nucleus]] verdadero rodeado por una doble envoltura con poros.",
        "blueprint": "En el núcleo del sistema hay una [[bóveda nuclear|nucleus]] eucariota con doble envoltura porosa.",
        "scientific": "El parásito posee un [[núcleo|nucleus]] eucariota verdadero delimitado por doble membrana con poros."
      }
    },
    "plas.ch2.s0.02": {
      "en": {
        "pop": "Its [[nucleus|nucleus]] holds 23.3 Mbp across 14 linear chromosomes encoding about 5,300 genes.",
        "blueprint": "This [[nuclear repository|nucleus]] stores 23.3 Mbp across 14 linear chromosomes and ~5,300 genes.",
        "scientific": "The haploid [[nucleus|nucleus]] carries a 23.3 Mbp AT-rich (~80.6% AT) genome on 14 linear chromosomes."
      },
      "es": {
        "pop": "Su [[núcleo|nucleus]] alberga 23,3 Mbp en 14 cromosomas lineales que codifican unos 5.300 genes.",
        "blueprint": "Este [[repositorio nuclear|nucleus]] almacena 23,3 Mbp en 14 cromosomas lineales con ~5.300 genes.",
        "scientific": "El [[núcleo|nucleus]] haploide porta 23,3 Mbp (~80,6% AT) repartidas en 14 cromosomas lineales."
      }
    },
    "plas.ch2.s0.03": {
      "en": {
        "pop": "That nuclear genome dwarfs Chlamydia's 1.04 Mbp bacterial chromosome over twentyfold.",
        "blueprint": "That eukaryotic codebase exceeds Chlamydia's 1.04 Mbp bacterial chromosome by more than 20x.",
        "scientific": "At 23.3 Mbp (~5,300 genes), this nuclear genome is >22x larger than Chlamydia's 1.04 Mbp genome."
      },
      "es": {
        "pop": "Ese genoma nuclear supera en más de veinte veces al cromosoma bacteriano de 1,04 Mbp de Chlamydia.",
        "blueprint": "Esa base de código eucariota supera en más de 20 veces el cromosoma de 1,04 Mbp de Chlamydia.",
        "scientific": "Con 23,3 Mbp (~5.300 genes), este genoma nuclear supera en >22x al de Chlamydia (1,04 Mbp)."
      }
    },
    "plas.ch2.s1.01": {
      "en": {
        "pop": "Surrounding the [[nucleus|nucleus]], eukaryotic [[80S ribosomes|ribosome_80s]] translate parasite mRNA.",
        "blueprint": "Orbiting the [[nucleus|nucleus]], cytosolic [[80S compilers|ribosome_80s]] build parasite proteins.",
        "scientific": "Exported from the [[nucleus|nucleus]], mRNA is translated by cytosolic [[80S ribosomes|ribosome_80s]] (PDB 3J79)."
      },
      "es": {
        "pop": "Alrededor del [[núcleo|nucleus]], [[ribosomas 80S|ribosome_80s]] eucariotas traducen el ARNm del parásito.",
        "blueprint": "Rodeando el [[núcleo|nucleus]], [[compiladores 80S|ribosome_80s]] citosólicos ensamblan proteínas propias.",
        "scientific": "El ARNm del [[núcleo|nucleus]] es traducido por [[ribosomas 80S|ribosome_80s]] eucariotas (PDB 3J79)."
      }
    },
    "plas.ch2.s1.02": {
      "en": {
        "pop": "Because it runs [[80S ribosomes|ribosome_80s]] and builds zero peptidoglycan, penicillin cannot kill it.",
        "blueprint": "Running [[80S compilers|ribosome_80s]] with zero murein wall renders beta-lactam antibiotics useless.",
        "scientific": "Eukaryotic [[80S ribosomes|ribosome_80s]] and zero peptidoglycan explain natural penicillin resistance."
      },
      "es": {
        "pop": "Como opera con [[ribosomas 80S|ribosome_80s]] y sin peptidoglicano, la penicilina no le hace daño.",
        "blueprint": "Operar con [[compiladores 80S|ribosome_80s]] y sin mureína vuelve inútiles a los betalactámicos.",
        "scientific": "Sus [[ribosomas 80S|ribosome_80s]] eucariotas y la ausencia de peptidoglicano confieren resistencia a penicilina."
      }
    },
    "plas.ch2.s1.03": {
      "en": {
        "pop": "Exported proteins cross the [[PVM|pvm]] via PTEX translocons to stiffen and remodel the [[RBC|rbc]].",
        "blueprint": "Effector cargo exports across the [[PVM|pvm]] via PTEX gates to install sticky knobs on the [[RBC|rbc]].",
        "scientific": "PEXEL effectors traverse [[PVM|pvm]] PTEX complexes, trafficking PfEMP1 cytoadherence knobs to [[RBC|rbc]]."
      },
      "es": {
        "pop": "Proteínas exportadas cruzan la [[PVM|pvm]] por poros PTEX para rigidizar y remodelar el [[RBC|rbc]].",
        "blueprint": "Cargas efectoras cruzan compuertas PTEX de la [[PVM|pvm]] para instalar nodos adhesivos en el [[RBC|rbc]].",
        "scientific": "Efectores PEXEL cruzan translocones PTEX en la [[PVM|pvm]] para anclar PfEMP1 en el [[RBC|rbc]]."
      }
    },
    "plas.ch2.s2.01": {
      "en": {
        "pop": "One branched tubular [[mitochondrion|mito]] snakes through the cytosol beside the [[nucleus|nucleus]].",
        "blueprint": "A single branched [[mitochondrial tube|mito]] runs alongside the [[nucleus|nucleus]] as one organelle.",
        "scientific": "Each blood-stage parasite maintains a single branched [[mitochondrion|mito]] beside the [[nucleus|nucleus]]."
      },
      "es": {
        "pop": "Una sola [[mitocondria|mito]] tubular ramificada serpentea por el citosol junto al [[núcleo|nucleus]].",
        "blueprint": "Un único [[tubo mitocondrial|mito]] ramificado discurre junto al [[núcleo|nucleus]] en el citosol.",
        "scientific": "El estadio sanguíneo conserva una única [[mitocondria|mito]] tubular ramificada junto al [[núcleo|nucleus]]."
      }
    },
    "plas.ch2.s2.02": {
      "en": {
        "pop": "Its 6 kb [[mitochondrial genome|mito]] is the smallest known, encoding just three respiratory proteins.",
        "blueprint": "This 6 kb [[mitochondrial firmware|mito]] is the leanest known, coding only three ETC subunits.",
        "scientific": "The linear 6 kb [[mtDNA|mito]] is the smallest known, encoding solely cyt b, COX1, COX3 and rRNA fragments."
      },
      "es": {
        "pop": "Su [[genoma mitocondrial|mito]] de 6 kb es el menor conocido y codifica solo tres proteínas respiratorias.",
        "blueprint": "Su [[firmware mitocondrial|mito]] de 6 kb es el más mínimo conocido, con solo tres subunidades CTE.",
        "scientific": "El [[ADNmt|mito]] lineal de 6 kb es el más pequeño conocido: solo codifica cit b, COX1 y COX3."
      }
    },
    "plas.ch2.s2.03": {
      "en": {
        "pop": "Blood-stage ATP comes mostly from glycolysis, while [[mitochondria|mito]] sustain pyrimidine synthesis.",
        "blueprint": "Cytosolic glycolysis supplies blood-stage ATP while the [[mitochondrion|mito]] recycles ubiquinone.",
        "scientific": "Blood-stage ATP derives mainly from glycolysis; the [[mitochondrion|mito]] sustains DHODH pyrimidines."
      },
      "es": {
        "pop": "En sangre el ATP viene casi todo de la glucólisis; la [[mitocondria|mito]] sostiene la síntesis de pirimidinas.",
        "blueprint": "La glucólisis abastece el ATP en sangre mientras la [[mitocondria|mito]] recicla ubiquinona esencial.",
        "scientific": "El ATP hemático procede de glucólisis; la [[mitocondria|mito]] mantiene la vía DHODH de pirimidinas."
      }
    },
    "plas.ch3.s0.01": {
      "en": {
        "pop": "Beside the [[mitochondrion|mito]] lies a surprise: the [[apicoplast|apicoplast]], a relict chloroplast.",
        "blueprint": "Paired next to the [[mitochondrion|mito]] sits an unexpected module: the [[apicoplast|apicoplast]] plastid.",
        "scientific": "Adjacent to the [[mitochondrion|mito]] sits the [[apicoplast|apicoplast]], a non-photosynthetic relict plastid."
      },
      "es": {
        "pop": "Junto a la [[mitocondria|mito]] hay una sorpresa: el [[apicoplasto|apicoplast]], un cloroplasto relicto.",
        "blueprint": "Acoplado junto a la [[mitocondria|mito]] aparece un módulo insólito: el plástido [[apicoplasto|apicoplast]].",
        "scientific": "Contiguo a la [[mitocondria|mito]] se ubica el [[apicoplasto|apicoplast]], un plástido no fotosintético."
      }
    },
    "plas.ch3.s0.02": {
      "en": {
        "pop": "Four [[nested membranes|apicoplast_membranes]] wrap the [[apicoplast|apicoplast]] like Russian dolls from an engulfed red alga.",
        "blueprint": "Four [[concentric bilayers|apicoplast_membranes]] sheath the [[apicoplast|apicoplast]], logging dual engulfment.",
        "scientific": "Four [[concentric bilayers|apicoplast_membranes]] bound the [[apicoplast|apicoplast]] via secondary endosymbiosis."
      },
      "es": {
        "pop": "Cuatro [[membranas anidadas|apicoplast_membranes]] envuelven al [[apicoplasto|apicoplast]] como muñecas rusas de un alga roja.",
        "blueprint": "Cuatro [[bicapas concéntricas|apicoplast_membranes]] cubren el [[apicoplasto|apicoplast]], huella de doble captura.",
        "scientific": "Cuatro [[bicapas concéntricas|apicoplast_membranes]] rodean al [[apicoplasto|apicoplast]] por endosimbiosis secundaria."
      }
    },
    "plas.ch3.s0.03": {
      "en": {
        "pop": "Those four [[apicoplast bilayers|apicoplast_membranes]] record a protist engulfing a photosynthetic red alga.",
        "blueprint": "These four [[envelope layers|apicoplast_membranes]] preserve an ancestral protist engulfing a red alga.",
        "scientific": "Two plastid plus two host/algal [[membranes|apicoplast_membranes]] prove red-algal secondary endosymbiosis."
      },
      "es": {
        "pop": "Esas cuatro [[bicapas del apicoplasto|apicoplast_membranes]] registran a un protista engullendo un alga roja.",
        "blueprint": "Esas cuatro [[capas de envoltura|apicoplast_membranes]] registran la captura ancestral de un alga roja.",
        "scientific": "Sus cuatro [[membranas|apicoplast_membranes]] demuestran endosimbiosis secundaria de un alga roja fotosintética."
      }
    },
    "plas.ch3.s1.01": {
      "en": {
        "pop": "Inside the [[apicoplast|apicoplast]] coils a 35 kb circular [[apicoplast DNA|apicoplast_dna]] genome.",
        "blueprint": "Inside the [[apicoplast core|apicoplast]] sits a 35 kb circular [[plastid DNA|apicoplast_dna]] ring.",
        "scientific": "The [[apicoplast|apicoplast]] stroma houses a bacterial-like 35 kb circular [[dsDNA genome|apicoplast_dna]]."
      },
      "es": {
        "pop": "Dentro del [[apicoplasto|apicoplast]] se enrolla un [[ADN del apicoplasto|apicoplast_dna]] circular de 35 kb.",
        "blueprint": "En el núcleo del [[apicoplasto|apicoplast]] reside un anillo de [[ADN plastidial|apicoplast_dna]] de 35 kb.",
        "scientific": "El estroma del [[apicoplasto|apicoplast]] alberga un [[ADNbc circular|apicoplast_dna]] de 35 kb de tipo bacteriano."
      }
    },
    "plas.ch3.s1.02": {
      "en": {
        "pop": "Its [[circular genome|apicoplast_dna]] encodes bacterial-type 70S ribosomes distinct from cytosolic [[80S|ribosome_80s]].",
        "blueprint": "This [[35 kb ring|apicoplast_dna]] compiles prokaryotic 70S machinery separate from cytosolic [[80S|ribosome_80s]].",
        "scientific": "[[Apicoplast DNA|apicoplast_dna]] encodes bacterial-type 70S rRNAs distinct from cytosolic [[80S ribosomes|ribosome_80s]]."
      },
      "es": {
        "pop": "Ese [[genoma circular|apicoplast_dna]] codifica ribosomas 70S bacterianos, distintos de los [[80S|ribosome_80s]].",
        "blueprint": "Este [[anillo de 35 kb|apicoplast_dna]] construye maquinaria 70S separada de los [[compiladores 80S|ribosome_80s]].",
        "scientific": "El [[ADN del apicoplasto|apicoplast_dna]] codifica ARNr 70S bacterianos distintos a los [[80S|ribosome_80s]] citosólicos."
      }
    },
    "plas.ch3.s1.03": {
      "en": {
        "pop": "All photosynthesis genes vanished long ago, yet the [[apicoplast|apicoplast]] remains indispensable.",
        "blueprint": "Solar harvesting code was deleted long ago, yet this [[apicoplast|apicoplast]] remains mission-critical.",
        "scientific": "Despite complete loss of photosynthetic genes, [[apicoplast|apicoplast]] biochemistry remains essential."
      },
      "es": {
        "pop": "Los genes de fotosíntesis desaparecieron hace millones de años, pero el [[apicoplasto|apicoplast]] es vital.",
        "blueprint": "El código fotosintético se perdió hace eones, pero el [[apicoplasto|apicoplast]] sigue siendo crítico.",
        "scientific": "Pese a perder los genes fotosintéticos, la bioquímica del [[apicoplasto|apicoplast]] resulta esencial."
      }
    },
    "plas.ch3.s2.01": {
      "en": {
        "pop": "In human blood, the [[apicoplast|apicoplast]] synthesizes essential IPP isoprenoids via the MEP pathway.",
        "blueprint": "During blood infection, the [[apicoplast|apicoplast]] manufactures vital IPP isoprenoid precursors.",
        "scientific": "In erythrocytes, the [[apicoplast|apicoplast]] supplies essential IPP via MEP/DOXP plus FAS-II/heme links."
      },
      "es": {
        "pop": "En la sangre humana, el [[apicoplasto|apicoplast]] sintetiza isoprenoides IPP esenciales por la vía MEP.",
        "blueprint": "En fase sanguínea, el [[apicoplasto|apicoplast]] produce precursores isoprenoides IPP indispensables.",
        "scientific": "En sangre, el [[apicoplasto|apicoplast]] aporta IPP por la vía MEP/DOXP y enlaces de FAS-II y hemo."
      }
    },
    "plas.ch3.s2.02": {
      "en": {
        "pop": "Antibiotics like doxycycline block its bacterial 70S ribosomes and halt [[apicoplast|apicoplast]] division.",
        "blueprint": "Doxycycline jams the prokaryotic 70S unit inside the [[apicoplast|apicoplast]], stopping segregation.",
        "scientific": "Tetracyclines such as doxycycline inhibit plastid 70S translation, blocking [[apicoplast|apicoplast]] inheritance."
      },
      "es": {
        "pop": "Antibióticos como la doxiciclina bloquean sus ribosomas 70S e impiden dividir el [[apicoplasto|apicoplast]].",
        "blueprint": "La doxiciclina bloquea los ribosomas 70S internos del [[apicoplasto|apicoplast]] y frena su reparto.",
        "scientific": "Tetraciclinas como doxiciclina inhiben los 70S plastidiales e impiden heredar el [[apicoplasto|apicoplast]]."
      }
    },
    "plas.ch3.s2.03": {
      "en": {
        "pop": "Daughter merozoites inherit no [[apicoplast|apicoplast]] and die next cycle, causing delayed death.",
        "blueprint": "Progeny merozoites launch missing their [[apicoplast|apicoplast]] module and fail on the next cycle.",
        "scientific": "Progeny lacking an [[apicoplast|apicoplast]] exhaust IPP and arrest in cycle two: delayed-death pharmacology."
      },
      "es": {
        "pop": "Los merozoítos hijos nacen sin [[apicoplasto|apicoplast]] y mueren en el ciclo siguiente por muerte diferida.",
        "blueprint": "La progenie emerge sin su módulo [[apicoplasto|apicoplast]] y colapsa en el siguiente ciclo replicativo.",
        "scientific": "La progenie sin [[apicoplasto|apicoplast]] agota IPP y muere en el segundo ciclo: efecto de muerte diferida."
      }
    },
    "plas.ch4.s0.01": {
      "en": {
        "pop": "To fuel rapid growth, the parasite gulps host [[hemoglobin|hemoglobin]] from the [[red blood cell|rbc]].",
        "blueprint": "To source raw amino acids, the parasite siphons [[hemoglobin|hemoglobin]] out of the [[RBC cytosol|rbc]].",
        "scientific": "Via cytostomal endocytosis, Plasmodium ingests ~75% of [[hemoglobin|hemoglobin]] (PDB 1GZX) from [[RBCs|rbc]]."
      },
      "es": {
        "pop": "Para crecer rápido, el parásito engulle [[hemoglobina|hemoglobin]] huésped del [[glóbulo rojo|rbc]].",
        "blueprint": "Para obtener aminoácidos, el parásito succiona [[hemoglobina|hemoglobin]] del citosol del [[eritrocito|rbc]].",
        "scientific": "Por endocitosis citostomal, ingiere hasta 75% de la [[hemoglobina|hemoglobin]] (PDB 1GZX) del [[RBC|rbc]]."
      }
    },
    "plas.ch4.s0.02": {
      "en": {
        "pop": "Inside the acidic [[digestive vacuole|digestive_vacuole]], proteases cleave [[hemoglobin|hemoglobin]] into amino acids.",
        "blueprint": "Inside the acidic [[digestive chamber|digestive_vacuole]], proteases crack [[hemoglobin|hemoglobin]] into monomers.",
        "scientific": "In the pH ~5.2 [[digestive vacuole|digestive_vacuole]], plasmepsins and falcipains cleave [[hemoglobin|hemoglobin]]."
      },
      "es": {
        "pop": "En la [[vacuola digestiva|digestive_vacuole]] ácida, proteasas rompen la [[hemoglobina|hemoglobin]] en aminoácidos.",
        "blueprint": "En la [[cámara digestiva|digestive_vacuole]] ácida, proteasas desarman la [[hemoglobina|hemoglobin]] en monómeros.",
        "scientific": "En la [[vacuola digestiva|digestive_vacuole]] (pH ~5,2), plasmepsinas y falcipaínas digieren [[hemoglobina|hemoglobin]]."
      }
    },
    "plas.ch4.s0.03": {
      "en": {
        "pop": "Breaking down [[hemoglobin|hemoglobin]] dumps toxic free heme into the [[digestive vacuole|digestive_vacuole]] lumen.",
        "blueprint": "Stripping [[hemoglobin|hemoglobin]] leaves reactive free heme waste flooding the [[digestive vacuole|digestive_vacuole]].",
        "scientific": "Proteolysis of [[hemoglobin|hemoglobin]] liberates toxic free Fe3+-protoporphyrin IX in the [[vacuole|digestive_vacuole]]."
      },
      "es": {
        "pop": "Romper la [[hemoglobina|hemoglobin]] libera grupo hemo libre tóxico en la [[vacuola digestiva|digestive_vacuole]].",
        "blueprint": "Desmontar [[hemoglobina|hemoglobin]] libera residuo hemo reactivo en la [[cámara digestiva|digestive_vacuole]].",
        "scientific": "La proteólisis de [[hemoglobina|hemoglobin]] libera Fe3+-protoporfirina IX tóxica en la [[vacuola|digestive_vacuole]]."
      }
    },
    "plas.ch4.s1.01": {
      "en": {
        "pop": "Free iron-heme generates reactive radicals that would shred the [[digestive vacuole|digestive_vacuole]] membrane.",
        "blueprint": "Unbound iron-heme catalyzes oxidative damage that would rupture the [[digestive vacuole|digestive_vacuole]] wall.",
        "scientific": "Free hematin promotes lipid peroxidation and membrane lysis across the [[digestive vacuole|digestive_vacuole]]."
      },
      "es": {
        "pop": "El hemo libre con hierro genera radicales que destruirían la membrana de la [[vacuola digestiva|digestive_vacuole]].",
        "blueprint": "El hemo férrico suelto cataliza daño oxidativo que perforaría la [[cámara digestiva|digestive_vacuole]].",
        "scientific": "La hematina libre induce peroxidación lipídica y lisis de la [[vacuola digestiva|digestive_vacuole]]."
      }
    },
    "plas.ch4.s1.02": {
      "en": {
        "pop": "Plasmodium detoxifies free heme by stacking dimers into insoluble dark [[hemozoin crystals|hemozoin]].",
        "blueprint": "To neutralize toxic waste, the parasite locks heme dimers into inert dark [[hemozoin blocks|hemozoin]].",
        "scientific": "Heme detoxification protein converts free hematin into insoluble beta-hematin [[hemozoin|hemozoin]]."
      },
      "es": {
        "pop": "Plasmodium neutraliza el hemo libre apilando dímeros en oscuros [[cristales de hemozoína|hemozoin]].",
        "blueprint": "Para neutralizar ese residuo, el parásito cristaliza dímeros de hemo en bloques de [[hemozoína|hemozoin]].",
        "scientific": "La biocristalización convierte hematina libre en cristales insolubles de beta-hematina ([[hemozoína|hemozoin]])."
      }
    },
    "plas.ch4.s1.03": {
      "en": {
        "pop": "Chloroquine blocks [[hemozoin|hemozoin]] crystal growth so toxic free heme kills the parasite instead.",
        "blueprint": "Quinoline drugs cap [[hemozoin|hemozoin]] crystal faces, letting toxic heme poison the invader.",
        "scientific": "Chloroquine caps growing [[hemozoin|hemozoin]] facets, raising toxic free heme to lethal levels."
      },
      "es": {
        "pop": "La cloroquina frena el crecimiento de la [[hemozoína|hemozoin]] y el hemo libre tóxico mata al parásito.",
        "blueprint": "Las quinolinas tapan las caras del cristal de [[hemozoína|hemozoin]] y el hemo intoxica al invasor.",
        "scientific": "La cloroquina bloquea las caras de crecimiento de [[hemozoína|hemozoin]], acumulando hemo letal."
      }
    },
    "plas.ch4.s2.01": {
      "en": {
        "pop": "Zoom to 0.1 nm atomic scale where a central [[Fe3+ iron atom|iron_atom]] anchors each heme ring.",
        "blueprint": "At 0.1 nm atomic scale, one central [[Fe3+ iron core|iron_atom]] coordinates each porphyrin plate.",
        "scientific": "At 0.1 nm resolution, central ferric [[Fe3+|iron_atom]] coordinates four pyrrole nitrogens in heme."
      },
      "es": {
        "pop": "Baja a escala atómica de 0,1 nm, donde un [[átomo de hierro Fe3+|iron_atom]] centra cada anillo hemo.",
        "blueprint": "A escala de 0,1 nm, un núcleo central de [[hierro Fe3+|iron_atom]] coordina cada placa de porfirina.",
        "scientific": "A 0,1 nm, un ion férrico [[Fe3+|iron_atom]] central coordina cuatro nitrógenos pirrólicos del hemo."
      }
    },
    "plas.ch4.s2.02": {
      "en": {
        "pop": "Each [[iron atom|iron_atom]] bonds an adjacent propionate oxygen, locking C, H, N and O into [[hemozoin|hemozoin]].",
        "blueprint": "Reciprocal [[Fe-O|iron_atom]] propionate links weld C, H, N and O rings into solid [[hemozoin|hemozoin]].",
        "scientific": "Reciprocal [[Fe3+|iron_atom]]-propionate bonds (Fe, C, H, N, O) dimerize heme into triclinic [[hemozoin|hemozoin]]."
      },
      "es": {
        "pop": "Cada [[átomo de hierro|iron_atom]] enlaza un oxígeno propionato, uniendo C, H, N y O en [[hemozoína|hemozoin]].",
        "blueprint": "Enlaces recíprocos [[Fe-O|iron_atom]] sueldan anillos de C, H, N y O en cristales de [[hemozoína|hemozoin]].",
        "scientific": "Enlaces recíprocos [[Fe3+|iron_atom]]-propionato (Fe, C, H, N, O) forman la [[hemozoína|hemozoin]] triclínica."
      }
    },
    "plas.ch4.s2.03": {
      "en": {
        "pop": "Explore any tag now, or continue to Stage 3 to contrast eukaryotic Plasmodium with bacterial parasites.",
        "blueprint": "Inspect any module tag now, or enter Stage 3 to compare this eukaryote against bacterial parasites.",
        "scientific": "Select any organelle tag, or enter Stage 3 to contrast eukaryotic Plasmodium with Chlamydia and Rickettsia."
      },
      "es": {
        "pop": "Explora cualquier etiqueta o pasa a la Etapa 3 para comparar Plasmodium con parásitos bacterianos.",
        "blueprint": "Inspecciona cualquier módulo o avanza a Etapa 3 para contrastar este eucariota con bacterias parásitas.",
        "scientific": "Explora cualquier etiqueta o avanza a Etapa 3 para contrastar Plasmodium con Chlamydia y Rickettsia."
      }
    }
  }
};
