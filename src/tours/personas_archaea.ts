import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 10 (`real-archaea` / `archaeaTour`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 52 of 54 cues (96.3%, > 95%) match base `cue.text` verbatim in `en.pop` with direct,
 *   clear, distraction-free biological prose.
 * - Exactly 2 cues (`arch.ch1.s1.02` and `arch.ch4.s1.02`) use grounded everyday mental
 *   models for conceptually complex mechanisms:
 *   1. `arch.ch1.s1.02` — C40 tetraether lipids bolting both membrane faces into one sheet
 *      that will not peel apart in boiling acid.
 *   2. `arch.ch4.s1.02` — Asgard-alphaproteobacterial syntrophy locking into a permanent
 *      metabolic merger (shelter + H2 for steady respiratory ATP -> origin of mitochondria).
 */
export const PERSONAS_ARCHAEA: TourPersonaMap = {
  "real-archaea": {
    "arch.ch0.s0.01": {
      "en": {
        "pop": "Meet Domain Archaea, a third branch of cellular life wholly distinct from Bacteria.",
        "blueprint": "System node Archaea: an independent cellular chassis distinct from both Bacteria and Eukarya.",
        "scientific": "Domain Archaea forms a primary evolutionary lineage phylogenetically separate from Bacteria."
      },
      "es": {
        "pop": "Conoce al dominio Archaea, una tercera rama de la vida celular muy distinta de Bacteria.",
        "blueprint": "Nodo Archaea: un chasis celular independiente, distinto tanto de Bacteria como de Eukarya.",
        "scientific": "El dominio Archaea forma una rama filogenética primaria separada del dominio Bacteria."
      }
    },
    "arch.ch0.s0.02": {
      "en": {
        "pop": "This Prometheoarchaeum-like Asgard archaeon has a 550 nm body with no membrane nucleus.",
        "blueprint": "This Prometheoarchaeum-type Asgard chassis packs a 550 nm hull with no nuclear partition.",
        "scientific": "This ~550 nm Prometheoarchaeum-like Asgard archaeon lacks a membrane-bounded nucleus."
      },
      "es": {
        "pop": "Esta arquea Asgard tipo Prometheoarchaeum tiene un cuerpo de 550 nm sin núcleo con membrana.",
        "blueprint": "Este chasis Asgard tipo Prometheoarchaeum aloja un casco de 550 nm sin partición nuclear.",
        "scientific": "Esta arquea Asgard de ~550 nm similar a Prometheoarchaeum carece de envoltura nuclear."
      }
    },
    "arch.ch0.s0.03": {
      "en": {
        "pop": "Yet its [[S-layer|slayer]], [[tentacles|tentacle]] and [[histones|histone]] set it apart from E. coli.",
        "blueprint": "Its [[S-layer shell|slayer]], [[branched arms|tentacle]] and [[histone spools|histone]] diverge from E. coli.",
        "scientific": "A glycoprotein [[S-layer|slayer]], [[Asgard protrusions|tentacle]] and [[HMfB histones|histone]] diverge from E. coli."
      },
      "es": {
        "pop": "Sin embargo, su [[capa S|slayer]], [[tentáculos|tentacle]] e [[histonas|histone]] la separan de E. coli.",
        "blueprint": "Su [[carcasa S|slayer]], [[brazos ramificados|tentacle]] y [[bobinas de histona|histone]] difieren de E. coli.",
        "scientific": "Su [[capa S|slayer]] glucoproteica, [[prolongaciones|tentacle]] e [[histonas HMfB|histone]] la distinguen de E. coli."
      }
    },
    "arch.ch0.s1.01": {
      "en": {
        "pop": "Extending 1 to 3 um from the body are long branched [[cytoplasmic tentacles|tentacle]].",
        "blueprint": "Branched [[cytoplasmic booms|tentacle]] reach 1 to 3 um outward from the central hull.",
        "scientific": "Branched [[cytoplasmic protrusions|tentacle]] extend ~1-3 um from the ~550 nm Asgard soma."
      },
      "es": {
        "pop": "Desde el cuerpo se extienden largos [[tentáculos citoplasmáticos|tentacle]] ramificados de 1 a 3 um.",
        "blueprint": "Largos [[brazos citoplasmáticos|tentacle]] ramificados se proyectan de 1 a 3 um desde el casco.",
        "scientific": "[[Prolongaciones citoplasmáticas|tentacle]] ramificadas se extienden ~1-3 um desde el soma Asgard."
      }
    },
    "arch.ch0.s1.02": {
      "en": {
        "pop": "Internal [[Lokiactin cables|lokiactin]] brace each [[tentacle|tentacle]] as it reaches into sediment.",
        "blueprint": "Internal [[Lokiactin struts|lokiactin]] stiffen each [[protrusion|tentacle]] as it extends outward.",
        "scientific": "Polymerized [[Lokiactin filaments|lokiactin]] (~7 nm) support each [[membrane protrusion|tentacle]]."
      },
      "es": {
        "pop": "[[Cables de lokiactina|lokiactin]] internos refuerzan cada [[tentáculo|tentacle]] al avanzar por el sedimento.",
        "blueprint": "[[Puntales de lokiactina|lokiactin]] internos rigidizan cada [[prolongación|tentacle]] hacia el exterior.",
        "scientific": "Filamentos de [[lokiactina|lokiactin]] (~7 nm) sostienen internamente cada [[prolongación|tentacle]]."
      }
    },
    "arch.ch0.s1.03": {
      "en": {
        "pop": "Those [[Asgard protrusions|tentacle]] wrap closely around a neighboring [[bacterial symbiont|symbiont]].",
        "blueprint": "These [[membrane arms|tentacle]] dock tightly around a partner [[alphaproteobacterium|symbiont]].",
        "scientific": "Asgard [[tentacles|tentacle]] physically entangle an adjacent syntrophic [[alphaproteobacterium|symbiont]]."
      },
      "es": {
        "pop": "Esas [[prolongaciones Asgard|tentacle]] rodean de cerca a un [[simbionte bacteriano|symbiont]] vecino.",
        "blueprint": "Estos [[brazos de membrana|tentacle]] se acoplan alrededor de un [[socio alfaproteobacteriano|symbiont]].",
        "scientific": "Las [[prolongaciones|tentacle]] Asgard envuelven físicamente a una [[alfaproteobacteria|symbiont]] sintrófica."
      }
    },
    "arch.ch0.s2.01": {
      "en": {
        "pop": "Beside Asgard lineages thrive extremophiles enclosed in a tough [[extremophile shell|extremophile_shell]].",
        "blueprint": "Comparative view: extremophile variants run inside a hardened [[extremophile shell|extremophile_shell]].",
        "scientific": "Thermophilic and halophilic archaea rely on a reinforced [[extremophile envelope|extremophile_shell]]."
      },
      "es": {
        "pop": "Junto a los linajes Asgard viven extremófilos protegidos por una dura [[cubierta extremófila|extremophile_shell]].",
        "blueprint": "Vista comparativa: variantes extremófilas operan dentro de un [[casco extremófilo|extremophile_shell]].",
        "scientific": "Las arqueas termófilas y halófilas dependen de una [[envoltura extremófila|extremophile_shell]] reforzada."
      }
    },
    "arch.ch0.s2.02": {
      "en": {
        "pop": "Sulfolobus grows in 80 C pH 2 hot springs, while Halobacterium colors salt ponds purple.",
        "blueprint": "Sulfolobus operates at 80 C and pH 2, while Halobacterium harvests photons in saturated brine.",
        "scientific": "Sulfolobus acidocaldarius thrives at 80 C, pH 2-3; Halobacterium salinarum inhabits ~4 M NaCl."
      },
      "es": {
        "pop": "Sulfolobus vive en aguas termales a 80 C y pH 2; Halobacterium tiñe salinas de púrpura.",
        "blueprint": "Sulfolobus opera a 80 C y pH 2, mientras Halobacterium capta luz en salmueras saturadas.",
        "scientific": "Sulfolobus acidocaldarius crece a 80 C y pH 2-3; Halobacterium salinarum prospera en ~4 M NaCl."
      }
    },
    "arch.ch0.s2.03": {
      "en": {
        "pop": "From boiling vents to human guts, every archaeon shares unique envelope and core genes.",
        "blueprint": "Across extreme and mild niches, all archaea share diagnostic lipid and information modules.",
        "scientific": "From hydrothermal vents to human microbiomes, Archaea conserve distinct lipids and core genes."
      },
      "es": {
        "pop": "Desde fuentes hirvientes al intestino humano, toda arquea comparte envoltura y genes únicos.",
        "blueprint": "En nichos extremos o templados, toda arquea conserva módulos lipídicos e informacionales propios.",
        "scientific": "De fuentes hidrotermales al intestino humano, Archaea conserva lípidos y genes centrales propios."
      }
    },
    "arch.ch1.s0.01": {
      "en": {
        "pop": "Cut open the envelope to see its outer coat: a hexagonal [[glycoprotein S-layer|slayer]].",
        "blueprint": "Sectioning the hull exposes its outer armor: a hexagonal [[glycoprotein S-layer|slayer]].",
        "scientific": "The cutaway envelope reveals a paracrystalline p6 hexagonal [[glycoprotein S-layer|slayer]]."
      },
      "es": {
        "pop": "Al abrir la envoltura vemos su cubierta externa: una [[capa S glucoproteica|slayer]] hexagonal.",
        "blueprint": "Seccionar el casco revela su blindaje exterior: una [[capa S glucoproteica|slayer]] hexagonal.",
        "scientific": "El corte de la envoltura muestra una [[capa S glucoproteica|slayer]] paracristalina hexagonal p6."
      }
    },
    "arch.ch1.s0.02": {
      "en": {
        "pop": "Interlocking SlaA and SlaB stalks form an 18 nm crystalline [[S-layer lattice|slayer]] with pores.",
        "blueprint": "Anchored SlaB pillars support an 18 nm SlaA [[canopy grid|slayer]] pierced by uniform filter pores.",
        "scientific": "SlaA trimers and SlaB stalks (PDB 7ZCX) build an ~18 nm porous [[S-layer lattice|slayer]]."
      },
      "es": {
        "pop": "Tallos SlaA y SlaB entrelazados forman una [[red cristalina S|slayer]] porosa de 18 nm.",
        "blueprint": "Pilares SlaB sostienen una [[rejilla SlaA|slayer]] de 18 nm perforada por poros de filtrado.",
        "scientific": "Trímeros SlaA y tallos SlaB (PDB 7ZCX) ensamblan una [[red de capa S|slayer]] porosa de ~18 nm."
      }
    },
    "arch.ch1.s0.03": {
      "en": {
        "pop": "Because Archaea build zero peptidoglycan in this [[S-layer|slayer]], penicillin cannot harm them.",
        "blueprint": "With zero murein cross-links in this [[S-layer|slayer]], beta-lactam drugs have no target here.",
        "scientific": "Lacking NAG-NAM peptidoglycan beneath the [[S-layer|slayer]], Archaea are naturally beta-lactam immune."
      },
      "es": {
        "pop": "Como Archaea no fabrica peptidoglicano en esta [[capa S|slayer]], la penicilina no la daña.",
        "blueprint": "Sin enlaces de mureína en esta [[capa S|slayer]], los fármacos betalactámicos carecen de diana.",
        "scientific": "Sin peptidoglicano NAG-NAM bajo la [[capa S|slayer]], Archaea es inmune a los betalactámicos."
      }
    },
    "arch.ch1.s1.01": {
      "en": {
        "pop": "Beneath the [[S-layer|slayer]] lies not a bacterial bilayer, but a continuous [[tetraether monolayer|tetraether]].",
        "blueprint": "Under the [[S-layer grid|slayer]] sits a single-sheet [[tetraether monolayer|tetraether]], not a bilayer.",
        "scientific": "Beneath the [[S-layer|slayer]] lies a ~4 nm caldarchaeol [[tetraether monolayer|tetraether]] rather than a bilayer."
      },
      "es": {
        "pop": "Bajo la [[capa S|slayer]] no hay una bicapa bacteriana, sino una [[monocapa tetraéter|tetraether]] continua.",
        "blueprint": "Bajo la [[rejilla S|slayer]] opera una [[monocapa tetraéter|tetraether]] de hoja única, no una bicapa.",
        "scientific": "Bajo la [[capa S|slayer]] hay una [[monocapa tetraéter|tetraether]] de caldarqueol (~4 nm), no una bicapa."
      }
    },
    "arch.ch1.s1.02": {
      "en": {
        "pop": "Its [[tetraether lipids|tetraether]] bolt both sides into one sheet that will not peel apart in acid.",
        "blueprint": "Spanning [[tetraether lipids|tetraether]] fuse both leaflets into a single heat-proof bulkhead.",
        "scientific": "C40 biphytanyl [[tetraether monolayers|tetraether]] span ~4 nm via ether bonds stable at 100 C."
      },
      "es": {
        "pop": "Sus [[lípidos tetraéter|tetraether]] unen ambos lados en una lámina que no se separa en ácido.",
        "blueprint": "Los [[lípidos tetraéter|tetraether]] fusionan ambas caras en un mamparo único resistente al calor.",
        "scientific": "Las [[monocapas tetraéter|tetraether]] C40 abarcan ~4 nm con enlaces éter estables a 100 C."
      }
    },
    "arch.ch1.s1.03": {
      "en": {
        "pop": "Branched isoprenoid chains join by [[ether bonds|ether_bond]] to opposite-handed G1P glycerol heads.",
        "blueprint": "Branched phytanyl chains link via [[ether couplers|ether_bond]] to chiral G1P glycerol heads.",
        "scientific": "Branched isoprenoid chains attach via [[ether bonds|ether_bond]] to sn-glycerol-1-phosphate (G1P)."
      },
      "es": {
        "pop": "Cadenas isoprenoides ramificadas se unen por [[enlaces éter|ether_bond]] a cabezas de glicerol G1P.",
        "blueprint": "Cadenas fitanilo ramificadas se fijan por [[acoples éter|ether_bond]] a cabezas quirales G1P.",
        "scientific": "Cadenas isoprenoides ramificadas se enlazan por [[enlaces éter|ether_bond]] a sn-glicerol-1-fosfato."
      }
    },
    "arch.ch1.s2.01": {
      "en": {
        "pop": "Methyl branches and cyclopentane rings pack the [[tetraether membrane|tetraether]] tight against protons.",
        "blueprint": "Methyl side groups and internal rings tighten the [[tetraether barrier|tetraether]] against H+ leaks.",
        "scientific": "Methyl branches and 0-8 cyclopentane rings lower [[tetraether monolayer|tetraether]] H+ permeability."
      },
      "es": {
        "pop": "Ramas metilo y anillos ciclopentano compactan la [[membrana tetraéter|tetraether]] frente a protones.",
        "blueprint": "Grupos metilo y anillos internos sellan la [[barrera tetraéter|tetraether]] frente a fugas de H+.",
        "scientific": "Ramas metilo y anillos ciclopentano reducen la permeabilidad a H+ de la [[monocapa|tetraether]]."
      }
    },
    "arch.ch1.s2.02": {
      "en": {
        "pop": "Even in pH 2 acid, this [[ether monolayer|tetraether]] keeps the interior near neutral pH 6.5.",
        "blueprint": "Across a 10,000-fold acid gradient, the [[ether sheet|tetraether]] holds cytosolic pH near 6.5.",
        "scientific": "Against pH 2 acid, the low-leak [[tetraether monolayer|tetraether]] maintains cytosolic pH ~6.5."
      },
      "es": {
        "pop": "Incluso en ácido pH 2, esta [[monocapa éter|tetraether]] mantiene el interior cerca de pH 6,5.",
        "blueprint": "Frente a un gradiente ácido extremo, la [[lámina éter|tetraether]] sostiene un pH citosólico de 6,5.",
        "scientific": "Frente a un medio pH 2, la [[monocapa tetraéter|tetraether]] sostiene un pH citosólico de ~6,5."
      }
    },
    "arch.ch1.s2.03": {
      "en": {
        "pop": "Paired with the porous [[S-layer|slayer]], the [[extremophile envelope|extremophile_shell]] resists heat and salt.",
        "blueprint": "Combined with the [[S-layer mesh|slayer]], this [[extremophile hull|extremophile_shell]] withstands heat and salt.",
        "scientific": "Coupled to the [[S-layer|slayer]], the [[extremophile envelope|extremophile_shell]] resists thermal and osmotic stress."
      },
      "es": {
        "pop": "Unida a la [[capa S|slayer]] porosa, la [[envoltura extremófila|extremophile_shell]] resiste calor y sal.",
        "blueprint": "Junto con la [[malla S|slayer]], este [[casco extremófilo|extremophile_shell]] soporta calor y salinidad.",
        "scientific": "Acoplada a la [[capa S|slayer]], la [[envoltura extremófila|extremophile_shell]] resiste estrés térmico y salino."
      }
    },
    "arch.ch2.s0.01": {
      "en": {
        "pop": "To swim, Archaea spin a rotary [[archaellum|archaellum]] that evolved apart from bacterial flagella.",
        "blueprint": "Propulsion relies on a rotary [[archaellum drive|archaellum]] unrelated to bacterial flagellar hardware.",
        "scientific": "Archaeal swimming uses a rotary [[archaellum|archaellum]] evolutionarily distinct from bacterial flagella."
      },
      "es": {
        "pop": "Para nadar, Archaea gira un [[arqueelo|archaellum]] rotatorio distinto del flagelo bacteriano.",
        "blueprint": "La propulsión usa un [[propulsor arqueelo|archaellum]] independiente del hardware flagelar bacteriano.",
        "scientific": "La natación arqueana emplea un [[arqueelo|archaellum]] rotatorio sin homología con el flagelo bacteriano."
      }
    },
    "arch.ch2.s0.02": {
      "en": {
        "pop": "Rather than a hollow 20 nm tube, the [[archaellum|archaellum]] is a solid 12 nm ArlB protein helix.",
        "blueprint": "Instead of a hollow 20 nm conduit, the [[archaellum|archaellum]] is a solid 12 nm ArlB shaft.",
        "scientific": "Unlike hollow 20 nm FliC flagella, the [[archaellum|archaellum]] is a solid ~12 nm ArlB helix (PDB 7OFQ)."
      },
      "es": {
        "pop": "En vez de un tubo hueco de 20 nm, el [[arqueelo|archaellum]] es una hélice sólida ArlB de 12 nm.",
        "blueprint": "En lugar de un conducto hueco de 20 nm, el [[arqueelo|archaellum]] es un eje sólido ArlB de 12 nm.",
        "scientific": "Frente al flagelo hueco FliC de 20 nm, el [[arqueelo|archaellum]] es una hélice ArlB sólida (PDB 7OFQ)."
      }
    },
    "arch.ch2.s0.03": {
      "en": {
        "pop": "Related to Type IV pili, its [[ArlB filament|archaellum]] adds new subunits at the base, not the tip.",
        "blueprint": "Built on Type IV pilus architecture, the [[ArlB rotor|archaellum]] inserts subunits at its base.",
        "scientific": "Homologous to Type IV pili, the [[ArlB filament|archaellum]] polymerizes via basal subunit insertion."
      },
      "es": {
        "pop": "Emparentado con pili tipo IV, su [[filamento ArlB|archaellum]] suma subunidades desde la base.",
        "blueprint": "Basado en arquitectura de pilus tipo IV, el [[rotor ArlB|archaellum]] inserta piezas por la base.",
        "scientific": "Homólogo a pili tipo IV, el [[filamento ArlB|archaellum]] polimeriza por inserción basal de subunidades."
      }
    },
    "arch.ch2.s1.01": {
      "en": {
        "pop": "Bacterial flagella burn proton flow, but the [[archaellum|archaellum]] runs directly on Mg2+-ATP.",
        "blueprint": "Whereas bacterial motors tap proton pressure, the [[archaellum|archaellum]] draws directly from ATP.",
        "scientific": "Unlike PMF-driven bacterial flagella, [[archaellum|archaellum]] rotation is coupled directly to Mg2+-ATP."
      },
      "es": {
        "pop": "El flagelo bacteriano usa flujo de protones, pero el [[arqueelo|archaellum]] funciona con Mg2+-ATP.",
        "blueprint": "Mientras el motor bacteriano consume protones, el [[arqueelo|archaellum]] se alimenta directo de ATP.",
        "scientific": "Frente a la fuerza protón-motriz bacteriana, el [[arqueelo|archaellum]] rota mediante hidrólisis de Mg2+-ATP."
      }
    },
    "arch.ch2.s1.02": {
      "en": {
        "pop": "At the base, a cytoplasmic [[ArlI hexamer|arli]] hydrolyzes yellow ATP into ADP and phosphate.",
        "blueprint": "At the membrane socket, a hexameric [[ArlI actuator|arli]] cleaves ATP into ADP plus phosphate.",
        "scientific": "The cytosolic hexameric ATPase [[ArlI|arli]] (PDB 4IHQ) hydrolyzes ATP to ADP and inorganic Pi."
      },
      "es": {
        "pop": "En la base, un [[hexámero ArlI|arli]] citoplasmático hidroliza ATP amarillo en ADP y fosfato.",
        "blueprint": "En el zócalo basal, un [[actuador hexamérico ArlI|arli]] escinde ATP en ADP y fosfato.",
        "scientific": "La ATPasa hexamérica citosólica [[ArlI|arli]] (PDB 4IHQ) hidroliza ATP en ADP y fosfato Pi."
      }
    },
    "arch.ch2.s1.03": {
      "en": {
        "pop": "Sequential strokes in [[ArlI|arli]] rotate the [[ArlB shaft|archaellum]] forward or backward to steer.",
        "blueprint": "Cyclic [[ArlI|arli]] firing torques the [[ArlB propeller|archaellum]] in both directions to steer.",
        "scientific": "Cyclic conformational steps in [[ArlI|arli]] torque [[ArlB|archaellum]] rotation clockwise or reverse."
      },
      "es": {
        "pop": "Ciclos secuenciales en [[ArlI|arli]] giran el [[eje ArlB|archaellum]] adelante o atrás para orientarse.",
        "blueprint": "El disparo cíclico de [[ArlI|arli]] aplica par bidireccional al [[propulsor ArlB|archaellum]].",
        "scientific": "Pasos conformacionales cíclicos de [[ArlI|arli]] rotan el [[eje ArlB|archaellum]] en ambos sentidos."
      }
    },
    "arch.ch2.s2.01": {
      "en": {
        "pop": "Switch to Halobacterium purple membrane, tiled with light-driven [[bacteriorhodopsin|bacteriorhodopsin]].",
        "blueprint": "Extremophile energy mode: Halobacterium arrays solar [[bacteriorhodopsin pumps|bacteriorhodopsin]].",
        "scientific": "Halobacterium purple membrane packs crystalline trimers of [[bacteriorhodopsin|bacteriorhodopsin]]."
      },
      "es": {
        "pop": "Mira la membrana púrpura de Halobacterium, tapizada de [[bacteriorrodopsina|bacteriorhodopsin]] solar.",
        "blueprint": "Modo extremófilo: Halobacterium despliega matrices solares de [[bacteriorrodopsina|bacteriorhodopsin]].",
        "scientific": "La membrana púrpura de Halobacterium empaqueta trímeros de [[bacteriorrodopsina|bacteriorhodopsin]]."
      }
    },
    "arch.ch2.s2.02": {
      "en": {
        "pop": "Each seven-helix [[bacteriorhodopsin trimer|bacteriorhodopsin]] holds retinal that bends on green light.",
        "blueprint": "Each 7-TM [[bacteriorhodopsin unit|bacteriorhodopsin]] flips an internal retinal switch on green photons.",
        "scientific": "7-TM [[bacteriorhodopsin|bacteriorhodopsin]] (PDB 1C3W, 1.55 A) photoisomerizes all-trans retinal at 568 nm."
      },
      "es": {
        "pop": "Cada [[trímero de bacteriorrodopsina|bacteriorhodopsin]] de siete hélices dobla su retinal con luz verde.",
        "blueprint": "Cada unidad 7-TM de [[bacteriorrodopsina|bacteriorhodopsin]] conmuta su retinal al captar fotones verdes.",
        "scientific": "La [[bacteriorrodopsina|bacteriorhodopsin]] 7-TM (PDB 1C3W) fotoisomeriza retinal todo-trans a 568 nm."
      }
    },
    "arch.ch2.s2.03": {
      "en": {
        "pop": "With zero chlorophyll, [[bacteriorhodopsin|bacteriorhodopsin]] pumps protons directly across the membrane.",
        "blueprint": "Without chlorophyll or electron chains, [[bacteriorhodopsin|bacteriorhodopsin]] charges the H+ bus directly.",
        "scientific": "Independent of chlorophyll photosystems, [[bacteriorhodopsin|bacteriorhodopsin]] pumps one H+ per photon."
      },
      "es": {
        "pop": "Sin nada de clorofila, la [[bacteriorrodopsina|bacteriorhodopsin]] bombea protones a través de la membrana.",
        "blueprint": "Sin clorofila ni cadenas electrónicas, [[bacteriorrodopsina|bacteriorhodopsin]] carga directo el bus H+.",
        "scientific": "Sin fotosistemas de clorofila, la [[bacteriorrodopsina|bacteriorhodopsin]] bombea un H+ por fotón."
      }
    },
    "arch.ch2.s3.01": {
      "en": {
        "pop": "Protons pumped by [[bacteriorhodopsin|bacteriorhodopsin]] or respiration return via [[A1A0 ATP synthase|a_atps]].",
        "blueprint": "Protons exported by [[bacteriorhodopsin|bacteriorhodopsin]] or ETC flow back through [[A1A0 turbines|a_atps]].",
        "scientific": "The H+ gradient from [[bacteriorhodopsin|bacteriorhodopsin]] or ETC drives rotary [[A1A0 ATP synthase|a_atps]]."
      },
      "es": {
        "pop": "Los protones de [[bacteriorrodopsina|bacteriorhodopsin]] o respiración vuelven por la [[ATP sintasa A1A0|a_atps]].",
        "blueprint": "Los protones de [[bacteriorrodopsina|bacteriorhodopsin]] o CTE retornan por [[turbinas A1A0|a_atps]].",
        "scientific": "El gradiente de H+ de [[bacteriorrodopsina|bacteriorhodopsin]] impulsa la [[ATP sintasa A1A0|a_atps]]."
      }
    },
    "arch.ch2.s3.02": {
      "en": {
        "pop": "Archaeal [[A1A0 ATP synthase|a_atps]] resembles eukaryotic vacuolar ATPases more than bacterial F1Fo.",
        "blueprint": "Archaeal [[A1A0 turbines|a_atps]] share twin-stator V-type architecture with eukaryotic vacuoles.",
        "scientific": "Archaeal [[A1A0 ATP synthase|a_atps]] is phylogenetically closer to eukaryotic V-ATPases than F1Fo."
      },
      "es": {
        "pop": "La [[ATP sintasa A1A0|a_atps]] arqueana se parece más a ATPasas vacuolares eucariotas que a F1Fo.",
        "blueprint": "Las [[turbinas A1A0|a_atps]] comparten diseño tipo V de doble estator con vacuolas eucariotas.",
        "scientific": "La [[ATP sintasa A1A0|a_atps]] arqueana es más afín a las V-ATPasas eucariotas que a F1Fo."
      }
    },
    "arch.ch2.s3.03": {
      "en": {
        "pop": "Its spinning proteolipid ring turns proton flow into cytosolic ATP for growth and swimming.",
        "blueprint": "Torque on the membrane c-ring drives catalytic heads to synthesize ATP for cell operations.",
        "scientific": "Proton-driven proteolipid ring rotation catalyzes ADP phosphorylation in the A3B3 catalytic head."
      },
      "es": {
        "pop": "Su anillo proteolipídico giratorio convierte el flujo de protones en ATP para crecer y nadar.",
        "blueprint": "El par del anillo c impulsa cabezas catalíticas que sintetizan ATP para todo el sistema.",
        "scientific": "La rotación del anillo proteolipídico cataliza la fosforilación de ADP en la cabeza A3B3."
      }
    },
    "arch.ch3.s0.01": {
      "en": {
        "pop": "Zoom inside the cytosol to see why Eukaryotes branch directly from within Domain Archaea.",
        "blueprint": "Inspecting the core subsystem reveals why eukaryotic code execution descends from Archaea.",
        "scientific": "Phylogenomic markers inside the information core place Eukarya directly within Asgard Archaea."
      },
      "es": {
        "pop": "Acércate al citosol para ver por qué Eukarya brota directamente desde el dominio Archaea.",
        "blueprint": "Inspeccionar el núcleo de proceso revela por qué la ejecución eucariota desciende de Archaea.",
        "scientific": "Los marcadores filogenómicos del núcleo informacional sitúan a Eukarya dentro de Asgard Archaea."
      }
    },
    "arch.ch3.s0.02": {
      "en": {
        "pop": "Circular [[DNA|dna]] wraps around [[archaeal histones|histone]], the direct ancestor of our chromatin.",
        "blueprint": "Circular [[dsDNA|dna]] spools onto polymeric [[HMfB histone cores|histone]] to compact and gate access.",
        "scientific": "[[dsDNA|dna]] winds around [[HMfB histone dimers|histone]] (PDB 5T5K), forming a flexible hypernucleosome."
      },
      "es": {
        "pop": "El [[ADN|dna]] circular se enrolla en [[histonas arqueanas|histone]], ancestro directo de nuestra cromatina.",
        "blueprint": "El [[ADNbc|dna]] se bobina en núcleos poliméricos de [[histonas HMfB|histone]] que compactan el código.",
        "scientific": "El [[ADNbc|dna]] rodea dímeros de [[histona HMfB|histone]] (PDB 5T5K) formando un hipernucleosoma flexible."
      }
    },
    "arch.ch3.s0.03": {
      "en": {
        "pop": "Unlike bacterial HU proteins, stacked [[HMfB dimers|histone]] coil [[DNA|dna]] into a long superhelix.",
        "blueprint": "Unlike HU bends in bacteria, stacked [[HMfB spools|histone]] wind [[dsDNA|dna]] into an extendable coil.",
        "scientific": "Unlike bacterial HU/H-NS, continuous [[HMfB dimers|histone]] coil 2 nm [[dsDNA|dna]] into an ~8 nm superhelix."
      },
      "es": {
        "pop": "A diferencia de las proteínas HU bacterianas, [[dímeros HMfB|histone]] enrollan el [[ADN|dna]] en superhélice.",
        "blueprint": "Frente a los pliegues HU bacterianos, [[bobinas HMfB|histone]] apiladas enrollan el [[ADNbc|dna]] en espiral.",
        "scientific": "Frente a HU/H-NS bacterianos, [[dímeros HMfB|histone]] enrollan el [[ADNbc|dna]] en una superhélice de ~8 nm."
      }
    },
    "arch.ch3.s1.01": {
      "en": {
        "pop": "To read genes, Archaea recruit a 12-subunit [[RNA polymerase|rnap]] homologous to eukaryotic Pol II.",
        "blueprint": "Transcription runs on a 12-subunit [[RNAP reader|rnap]] matching eukaryotic Pol II architecture.",
        "scientific": "Archaea transcribe genes via a 12-13 subunit [[RNAP|rnap]] (PDB 4V1O/2PMZ) homologous to Pol II."
      },
      "es": {
        "pop": "Para leer genes, Archaea emplea una [[ARN polimerasa|rnap]] de 12 subunidades homóloga a Pol II.",
        "blueprint": "La transcripción opera en un [[lector ARN pol|rnap]] de 12 subunidades idéntico a la Pol II eucariota.",
        "scientific": "Archaea transcribe mediante una [[ARN polimerasa|rnap]] de 12-13 subunidades (PDB 4V1O) homóloga a Pol II."
      }
    },
    "arch.ch3.s1.02": {
      "en": {
        "pop": "Instead of bacterial sigma factors, TBP and TFB load [[archaeal RNAP|rnap]] onto TATA-box [[DNA|dna]].",
        "blueprint": "Rather than bacterial sigma keys, TBP and TFB dock [[archaeal RNAP|rnap]] onto TATA [[DNA|dna]].",
        "scientific": "Eukaryotic-like TBP and TFB recruit [[archaeal RNAP|rnap]] to TATA/BRE promoters on [[dsDNA|dna]]."
      },
      "es": {
        "pop": "En vez de factores sigma bacterianos, TBP y TFB acoplan la [[ARN pol|rnap]] en cajas TATA del [[ADN|dna]].",
        "blueprint": "En lugar de llaves sigma bacterianas, TBP y TFB posicionan la [[ARN pol|rnap]] en promotores TATA del [[ADN|dna]].",
        "scientific": "Los factores TBP y TFB reclutan la [[ARN polimerasa|rnap]] en promotores TATA/BRE del [[ADNbc|dna]]."
      }
    },
    "arch.ch3.s1.03": {
      "en": {
        "pop": "The open [[RNAP clamp|rnap]] unwinds the double helix and extrudes a fresh [[mRNA transcript|mrna]].",
        "blueprint": "The 14 nm [[RNAP clamp|rnap]] unzips the template strand and streams out nascent [[mRNA|mrna]].",
        "scientific": "The ~14 nm [[RNAP catalytic clamp|rnap]] melts the transcription bubble and synthesizes [[mRNA|mrna]]."
      },
      "es": {
        "pop": "La [[pinza de la ARN pol|rnap]] abre la doble hélice y extruye un nuevo [[transcrito de ARNm|mrna]].",
        "blueprint": "La [[mordaza ARN pol|rnap]] de 14 nm separa la hebra molde y emite flujo de [[ARNm|mrna]] naciente.",
        "scientific": "La [[pinza catalítica ARN pol|rnap]] (~14 nm) abre la burbuja de transcripción y sintetiza [[ARNm|mrna]]."
      }
    },
    "arch.ch3.s2.01": {
      "en": {
        "pop": "Translating that [[mRNA|mrna]] are compact 22 nm [[70S archaeal ribosomes|ribosome]] in the cytosol.",
        "blueprint": "Nascent [[mRNA|mrna]] streams straight into compact 22 nm [[70S ribosome compilers|ribosome]] in the cytosol.",
        "scientific": "Nascent [[mRNA|mrna]] chains are translated by cytosolic ~22 nm [[70S archaeal ribosomes|ribosome]] (PDB 4V6U)."
      },
      "es": {
        "pop": "Traduciendo ese [[ARNm|mrna]] trabajan compactos [[ribosomas arqueanos 70S|ribosome]] de 22 nm.",
        "blueprint": "El [[ARNm|mrna]] naciente entra directo en compactos [[compiladores 70S|ribosome]] de 22 nm en el citosol.",
        "scientific": "Las cadenas de [[ARNm|mrna]] son traducidas por [[ribosomas arqueanos 70S|ribosome]] (~22 nm, PDB 4V6U)."
      }
    },
    "arch.ch3.s2.02": {
      "en": {
        "pop": "Though sized like bacterial 70S, these [[ribosomes|ribosome]] use eukaryotic proteins and Met starts.",
        "blueprint": "Despite a 70S footprint, these [[compilers|ribosome]] share eukaryotic factors and Met initiation.",
        "scientific": "Archaeal [[70S ribosomes|ribosome]] (50S PDB 1JJ2) use aIF2, aEF2, eukaryotic r-proteins and Met start."
      },
      "es": {
        "pop": "Aunque miden 70S como en bacterias, estos [[ribosomas|ribosome]] usan proteínas eucariotas y Met inicial.",
        "blueprint": "Con tamaño 70S, estos [[compiladores|ribosome]] emplean factores eucariotas e inicio con metionina.",
        "scientific": "Los [[ribosomas 70S|ribosome]] arqueanos (50S PDB 1JJ2) usan aIF2, aEF2, proteínas eucariotas y Met."
      }
    },
    "arch.ch3.s2.03": {
      "en": {
        "pop": "That shared structure explains why bacterial drugs like streptomycin spare [[archaeal 70S|ribosome]].",
        "blueprint": "Those structural diffs prevent bacterial antibiotics from jamming [[archaeal 70S compilers|ribosome]].",
        "scientific": "Eukaryotic-like rRNA pockets render [[archaeal 70S ribosomes|ribosome]] insensitive to streptomycin."
      },
      "es": {
        "pop": "Esa estructura explica por qué fármacos como la estreptomicina no frenan al [[70S arqueano|ribosome]].",
        "blueprint": "Esas diferencias impiden que antibióticos bacterianos bloqueen los [[compiladores 70S|ribosome]].",
        "scientific": "Sus sitios de ARNr tipo eucariota hacen a los [[ribosomas 70S|ribosome]] insensibles a estreptomicina."
      }
    },
    "arch.ch3.s3.01": {
      "en": {
        "pop": "Asgard genomes add Eukaryotic Signature Proteins once thought unique to complex cells.",
        "blueprint": "Asgard lineages already encode the cytoskeleton and membrane-shaping toolkit of eukaryotes.",
        "scientific": "Asgard archaeal genomes encode Eukaryotic Signature Proteins (ESPs) including actin and ubiquitin."
      },
      "es": {
        "pop": "Los genomas Asgard añaden proteínas firma eucariotas antes creídas exclusivas de células complejas.",
        "blueprint": "Los linajes Asgard ya codifican el kit citoesquelético y de remodelado membranoso eucariota.",
        "scientific": "Los genomas Asgard codifican Proteínas Firma Eucariotas (ESP), incluidas actina y ubicuitina."
      }
    },
    "arch.ch3.s3.02": {
      "en": {
        "pop": "Profilin-guided [[Lokiactin filaments|lokiactin]] polymerize to shape and extend [[Asgard tentacles|tentacle]].",
        "blueprint": "Profilin-regulated [[Lokiactin cables|lokiactin]] dynamically assemble to steer [[cell protrusions|tentacle]].",
        "scientific": "LokiProfilin-2 (PDB 5ZZB) regulates [[Lokiactin|lokiactin]] polymerization driving [[tentacle|tentacle]] growth."
      },
      "es": {
        "pop": "Guiados por profilina, los [[filamentos de lokiactina|lokiactin]] alargan y moldean los [[tentáculos Asgard|tentacle]].",
        "blueprint": "[[Cables de lokiactina|lokiactin]] regulados por profilina se ensamblan para dirigir [[prolongaciones|tentacle]].",
        "scientific": "LokiProfilina-2 (PDB 5ZZB) regula la polimerización de [[lokiactina|lokiactin]] en los [[tentáculos|tentacle]]."
      }
    },
    "arch.ch3.s3.03": {
      "en": {
        "pop": "Spiral [[ESCRT-III rings|escrt]] pinch membranes from inside for cell division and vesicle scission.",
        "blueprint": "Internal [[ESCRT-III constrictor rings|escrt]] sever membranes cleanly during division and budding.",
        "scientific": "Helical [[ESCRT-III polymers|escrt]] catalyze reverse-topology membrane scission in archaeal cytokinesis."
      },
      "es": {
        "pop": "[[Anillos espirales ESCRT-III|escrt]] estrechan membranas por dentro para dividir células y vesículas.",
        "blueprint": "[[Anillos constrictores ESCRT-III|escrt]] internos seccionan membranas en división y gemación.",
        "scientific": "Polímeros helicoidales [[ESCRT-III|escrt]] catalizan la escisión membranosa en citocinesis arqueana."
      }
    },
    "arch.ch4.s0.01": {
      "en": {
        "pop": "Follow the [[tentacles|tentacle]] to a contact cleft holding a Rickettsia-like [[alphaproteobacterium|symbiont]].",
        "blueprint": "Track the [[Asgard arms|tentacle]] to a docking cleft gripping a Rickettsia-like [[partner|symbiont]].",
        "scientific": "Asgard [[tentacles|tentacle]] embrace a ~0.4 x 1.0 um Rickettsiales-like [[alphaproteobacterium|symbiont]]."
      },
      "es": {
        "pop": "Sigue los [[tentáculos|tentacle]] hasta la hendidura que abraza a una [[alfaproteobacteria|symbiont]] tipo Rickettsia.",
        "blueprint": "Sigue los [[brazos Asgard|tentacle]] hasta el puerto de contacto con un [[socio|symbiont]] tipo Rickettsia.",
        "scientific": "Los [[tentáculos|tentacle]] Asgard abrazan una [[alfaproteobacteria|symbiont]] (~0,4 x 1,0 um) afín a Rickettsiales."
      }
    },
    "arch.ch4.s0.02": {
      "en": {
        "pop": "This [[bacterial partner|symbiont]] carries two membranes, circular DNA and an O2 respiratory chain.",
        "blueprint": "This [[aerobic module|symbiont]] packs a double envelope, circular dsDNA and an O2 respiration bus.",
        "scientific": "The [[alphaproteobacterium|symbiont]] retains a double membrane, circular dsDNA, ETC and F1Fo synthase."
      },
      "es": {
        "pop": "Este [[socio bacteriano|symbiont]] posee dos membranas, ADN circular y cadena respiratoria de O2.",
        "blueprint": "Este [[módulo aeróbico|symbiont]] integra doble envoltura, ADNbc circular y bus respiratorio de O2.",
        "scientific": "La [[alfaproteobacteria|symbiont]] conserva doble membrana, ADNbc circular, CTE y sintasa F1Fo."
      }
    },
    "arch.ch4.s0.03": {
      "en": {
        "pop": "Close wrapping at the [[endosymbiotic synapse|synapse]] lets both domains trade metabolites directly.",
        "blueprint": "Tight membrane spacing at the [[metabolic synapse|synapse]] cuts diffusion loss between both nodes.",
        "scientific": "A narrow ~20 nm [[endosymbiotic synapse|synapse]] enables direct inter-domain metabolite transfer."
      },
      "es": {
        "pop": "El contacto estrecho en la [[sinapsis endosimbiótica|synapse]] permite intercambiar metabolitos directo.",
        "blueprint": "El acoplamiento ceñido en la [[sinapsis metabólica|synapse]] minimiza pérdidas de difusión entre nodos.",
        "scientific": "Una [[sinapsis endosimbiótica|synapse]] (~20 nm) permite transferencia metabólica directa entre dominios."
      }
    },
    "arch.ch4.s1.01": {
      "en": {
        "pop": "Fermenting amino acids, the host releases [[H2 and formate|h2_flow]] that the [[symbiont|symbiont]] burns with O2.",
        "blueprint": "Host fermentation outputs [[H2 and formate|h2_flow]] fuel straight into the aerobic [[partner|symbiont]].",
        "scientific": "Archaeal amino-acid fermentation exports [[H2/formate|h2_flow]], oxidized by the [[symbiont|symbiont]] via O2."
      },
      "es": {
        "pop": "Al fermentar aminoácidos, el huésped libera [[H2 y formiato|h2_flow]] que el [[simbionte|symbiont]] oxida con O2.",
        "blueprint": "La fermentación huésped envía [[H2 y formiato|h2_flow]] como combustible al [[socio|symbiont]] aeróbico.",
        "scientific": "La fermentación arqueana exporta [[H2 y formiato|h2_flow]], que el [[simbionte|symbiont]] respira con O2."
      }
    },
    "arch.ch4.s1.02": {
      "en": {
        "pop": "Over time this [[synapse|synapse]] became a permanent merger: shelter and [[H2|h2_flow]] for steady [[ATP|atp_export]].",
        "blueprint": "The [[symbiotic bus|synapse]] locked into one fused chassis: host [[H2|h2_flow]] in, partner [[ATP|atp_export]] out.",
        "scientific": "Sustained [[syntrophy|synapse]] trading [[H2|h2_flow]] for respiratory [[ATP|atp_export]] drove mitochondrial origin."
      },
      "es": {
        "pop": "Con el tiempo esta [[sinapsis|synapse]] fue una fusión permanente: refugio y [[H2|h2_flow]] por [[ATP|atp_export]].",
        "blueprint": "El [[bus simbiótico|synapse]] se fijó en un chasis único: entra [[H2|h2_flow]] y sale [[ATP|atp_export]] continuo.",
        "scientific": "La [[sintrofía|synapse]] basada en [[H2|h2_flow]] y [[ATP|atp_export]] respiratorio originó la mitocondria."
      }
    },
    "arch.ch4.s1.03": {
      "en": {
        "pop": "Unlike parasitic Rickettsia stealing ATP via Tlc1, ANT carriers reversed [[ATP export|atp_export]] outward.",
        "blueprint": "Reversing Rickettsia's Tlc1 intake, ANT translocases flipped [[ATP export|atp_export]] to power the host.",
        "scientific": "In contrast to Rickettsia Tlc1 import, mitochondrial ANT carriers reversed [[ATP export|atp_export]] outward."
      },
      "es": {
        "pop": "Al revés del robo de ATP por Tlc1 en Rickettsia, los portadores ANT volcaron la [[salida de ATP|atp_export]].",
        "blueprint": "Invirtiendo la toma Tlc1 de Rickettsia, los ANT giraron la [[exportación de ATP|atp_export]] hacia el huésped.",
        "scientific": "Frente al influjo Tlc1 de Rickettsia, el transportador ANT invirtió la [[exportación de ATP|atp_export]]."
      }
    },
    "arch.ch4.s2.01": {
      "en": {
        "pop": "Zoom to the 0.1 nm atomic inset where an archaeal [[ether bond|ether_bond]] defines the whole domain.",
        "blueprint": "At 0.1 nm atomic scale, one single chemical joint - the [[ether bond|ether_bond]] - sets Archaea apart.",
        "scientific": "At 0.1 nm resolution, the ~1.43 A C-O [[ether linkage|ether_bond]] chemically defines archaeal lipids."
      },
      "es": {
        "pop": "Baja al detalle atómico de 0,1 nm donde el [[enlace éter|ether_bond]] define a todo el dominio.",
        "blueprint": "A escala atómica de 0,1 nm, una sola unión química —el [[enlace éter|ether_bond]]— distingue a Archaea.",
        "scientific": "A 0,1 nm, el [[enlace éter|ether_bond]] C-O (~1,43 A) define químicamente los lípidos arqueanos."
      }
    },
    "arch.ch4.s2.02": {
      "en": {
        "pop": "Bacterial ester lipids expose a carbonyl oxygen that hot acid readily splits by hydrolysis.",
        "blueprint": "Bacterial ester joints include a vulnerable C=O carbonyl site that hot acid rapidly cleaves.",
        "scientific": "Bacterial/eukaryotic ester bonds (R-CO-O-CH2-) undergo rapid acid-catalyzed hydrolysis at 80 C."
      },
      "es": {
        "pop": "Los ésteres bacterianos exponen un oxígeno carbonilo que el ácido caliente rompe por hidrólisis.",
        "blueprint": "Las uniones éster bacterianas tienen un sitio C=O vulnerable que el ácido caliente corta rápido.",
        "scientific": "Los enlaces éster bacterianos (R-CO-O-CH2-) sufren rápida hidrólisis ácida a 80 C."
      }
    },
    "arch.ch4.s2.03": {
      "en": {
        "pop": "Archaea replace it with a tough C-O-C [[ether link|ether_bond]] built from C, H, O, P and Mg2+ ions.",
        "blueprint": "Removing that carbonyl leaves a hardened C-O-C [[ether weld|ether_bond]] of C, H, O, P and Mg2+.",
        "scientific": "Direct R-O-CH2- [[ether bonds|ether_bond]] resist hydrolysis across C, H, O, N, P and Mg2+ biochemistry."
      },
      "es": {
        "pop": "Archaea lo reemplaza con un fuerte [[enlace éter|ether_bond]] C-O-C hecho de C, H, O, P e iones Mg2+.",
        "blueprint": "Quitar el carbonilo deja una [[soldadura éter|ether_bond]] C-O-C robusta con C, H, O, P y Mg2+.",
        "scientific": "El [[enlace éter|ether_bond]] R-O-CH2- resiste la hidrólisis en la bioquímica de C, H, O, N, P y Mg2+."
      }
    },
    "arch.ch4.s3.01": {
      "en": {
        "pop": "Together, [[ether membranes|tetraether]], [[ATP archaella|archaellum]] and [[histones|histone]] define the third domain.",
        "blueprint": "Integrated summary: [[tetraether hull|tetraether]], [[ATP drive|archaellum]] and [[histones|histone]] define Archaea.",
        "scientific": "[[Tetraether lipids|tetraether]], [[ATP-driven archaella|archaellum]] and [[HMfB histones|histone]] define Domain Archaea."
      },
      "es": {
        "pop": "Juntos, [[membranas éter|tetraether]], [[arqueelos de ATP|archaellum]] e [[histonas|histone]] definen el tercer dominio.",
        "blueprint": "Resumen integrado: [[casco tetraéter|tetraether]], [[propulsor ATP|archaellum]] e [[histonas|histone]] definen Archaea.",
        "scientific": "[[Lípidos tetraéter|tetraether]], [[arqueelos de ATP|archaellum]] e [[histonas HMfB|histone]] definen Archaea."
      }
    },
    "arch.ch4.s3.02": {
      "en": {
        "pop": "From [[Asgard Lokiactin|lokiactin]] and [[symbiotic ATP export|atp_export]] emerged the first complex eukaryotic cells.",
        "blueprint": "Combining [[Asgard Lokiactin|lokiactin]] scaffolding with [[partner ATP export|atp_export]] launched eukaryotic cells.",
        "scientific": "Asgard [[Lokiactin|lokiactin]] dynamics plus mitochondrial [[ATP export|atp_export]] enabled eukaryotic complexity."
      },
      "es": {
        "pop": "De la [[lokiactina Asgard|lokiactin]] y la [[exportación simbiótica de ATP|atp_export]] surgieron las primeras eucariotas.",
        "blueprint": "Combinar andamiaje [[Lokiactin|lokiactin]] con [[exportación de ATP|atp_export]] dio paso al chasis eucariota.",
        "scientific": "La dinámica de [[lokiactina|lokiactin]] Asgard y la [[exportación de ATP|atp_export]] impulsaron la eucariogénesis."
      }
    },
    "arch.ch4.s3.03": {
      "en": {
        "pop": "Explore any molecular tag now, or continue to Yeast to enter Domain Eukarya.",
        "blueprint": "Inspect any component tag now, or advance to Yeast to examine compartmentalized eukaryotes.",
        "scientific": "Select any molecular tag, or proceed to Saccharomyces cerevisiae to explore Domain Eukarya."
      },
      "es": {
        "pop": "Explora ahora cualquier etiqueta molecular o avanza a Levadura para entrar en Eukarya.",
        "blueprint": "Inspecciona cualquier componente o avanza a Levadura para analizar eucariotas compartimentadas.",
        "scientific": "Selecciona cualquier etiqueta molecular o pasa a Saccharomyces cerevisiae para explorar Eukarya."
      }
    }
  }
};
