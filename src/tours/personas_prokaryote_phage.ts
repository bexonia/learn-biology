import type { TourPersonaMap } from './tour_personas.js';

export const PROKARYOTE_PHAGE_TOUR_PERSONAS: TourPersonaMap = {
  "real-bacterium": {
    "ec.ch0.intro.01": {
      "en": {
        "pop": "This is Escherichia coli, a rod-shaped bacterium that lives in your gut.",
        "blueprint": "System target: Escherichia coli, an autonomous rod-shaped microbial chassis operating in the gut.",
        "scientific": "Escherichia coli K-12: a facultatively anaerobic Gram-negative γ-proteobacterial rod (~2 × 0.8 µm)."
      },
      "es": {
        "pop": "Esta es Escherichia coli, una bacteria en forma de bastón que vive en tu intestino.",
        "blueprint": "Objetivo del sistema: Escherichia coli, un chasis microbiano autónomo activo en el intestino humano.",
        "scientific": "Escherichia coli K-12: bacilo γ-proteobacteriano gramnegativo anaerobio facultativo (~2 × 0,8 µm)."
      }
    },
    "ec.ch0.intro.02": {
      "en": {
        "pop": "Everything here is drawn at one true scale: 1 scene unit is 100 nanometres.",
        "blueprint": "Unified CAD coordinate space: all assemblies render at 1:1 physical scale (1 scene unit = 100 nm).",
        "scientific": "Isotropic atomic-to-cellular scale: 1 scene unit equals 100 nm across ~0.7 fL cytoplasmic volume."
      },
      "es": {
        "pop": "Todo aquí está dibujado a una única escala real: 1 unidad de escena equivale a 100 nanómetros.",
        "blueprint": "Espacio CAD unificado: cada ensamblaje se traza a escala física 1:1 (1 unidad de escena = 100 nm).",
        "scientific": "Escala isotrópica atómica y celular: 1 unidad equivale a 100 nm en ~0,7 fL de volumen citoplasmático."
      }
    },
    "ec.ch0.intro.03": {
      "en": {
        "pop": "As a prokaryote, it has no nucleus and no membrane-bound organelles.",
        "blueprint": "Open-bus prokaryotic architecture: zero nuclear vaults, lipid partitions, or sub-compartment walls.",
        "scientific": "Prokaryotic cytoplasm lacking a nuclear envelope or endomembrane organelles (~300 mg/mL crowding)."
      },
      "es": {
        "pop": "Como procariota, no tiene núcleo ni orgánulos rodeados por membranas.",
        "blueprint": "Arquitectura procariota de bus abierto: sin bóveda nuclear, tabiques lipídicos ni subcompartimentos.",
        "scientific": "Citoplasma procariota sin envoltura nuclear ni endomembranas, con hacinamiento de ~300–400 mg/mL."
      }
    },
    "ec.ch0.intro.04": {
      "en": {
        "pop": "Yet its 4.6-million-base-pair chromosome and machines are finely ordered.",
        "blueprint": "Spatial routing organizes its 4.6 Mbp circular firmware, polar sensors, and hull turbines cleanly.",
        "scientific": "Phase separation and supercoiled macrodomains order its 4.64 Mbp chromosome (~4,300 protein genes)."
      },
      "es": {
        "pop": "Aun así, su cromosoma de 4,6 millones de pares de bases y sus máquinas están muy bien ordenados.",
        "blueprint": "El enrutamiento espacial ordena su firmware circular de 4,6 Mpb, sensores polares y turbinas de casco.",
        "scientific": "Separación de fases y macrodominios topológicos ordenan su cromosoma circular de 4,64 Mpb (~4.300 genes)."
      }
    },
    "ec.ch0.intro.05": {
      "en": {
        "pop": "Press Space to pause, or Explore to look around on your own.",
        "blueprint": "Press Space to halt real-time simulation playback, or select Explore for free camera navigation.",
        "scientific": "Press Space to pause macromolecular dynamics, or enter Explore mode to inspect atomic coordinates."
      },
      "es": {
        "pop": "Pulsa Espacio para pausar, o Explorar para recorrerlo por tu cuenta.",
        "blueprint": "Pulsa Espacio para detener la simulación en curso, o elige Explorar para navegación manual libre.",
        "scientific": "Pulsa Espacio para pausar la dinámica macromolecular, o entra en Explorar para ver coordenadas PDB."
      }
    },
    "ec.ch1.env.01": {
      "en": {
        "pop": "E. coli is a Gram-negative bacterium with a three-layer armour.",
        "blueprint": "Gram-negative hull architecture: a trilaminar perimeter integrating shield, tension mesh, and power.",
        "scientific": "Gram-negative tripartite envelope (~35 nm total): outer membrane, periplasmic murein, inner membrane."
      },
      "es": {
        "pop": "E. coli es una bacteria gramnegativa con una armadura de tres capas.",
        "blueprint": "Casco gramnegativo trilaminar: combina escudo químico exterior, malla tensora y membrana energética.",
        "scientific": "Envoltura gramnegativa tripartita (~35 nm): membrana externa, mureína periplásmica y membrana interna."
      }
    },
    "ec.ch1.env.02": {
      "en": {
        "pop": "Outside is the [[outer membrane|om]], coated in [[LPS sugar chains|om]].",
        "blueprint": "Outer chemical barrier: the asymmetric [[outer membrane|om]] paved with Mg²⁺-bridged [[LPS sugar chains|om]].",
        "scientific": "Asymmetric ~7 nm [[outer membrane|om]]: inner phospholipids and ~2×10⁶ [[LPS sugar chains|om]] outside."
      },
      "es": {
        "pop": "En el exterior está la [[membrana externa|om]], recubierta de [[cadenas de azúcares LPS|om]].",
        "blueprint": "Barrera química externa: [[membrana externa|om]] asimétrica cubierta de [[cadenas de azúcares LPS|om]] con Mg²⁺.",
        "scientific": "[[Membrana externa|om]] asimétrica (~7 nm): fosfolípidos internos y ~2×10⁶ [[cadenas de azúcares LPS|om]]."
      }
    },
    "ec.ch1.env.03": {
      "en": {
        "pop": "Trimeric [[OmpF porins|porin]] punch water-filled holes for small nutrients.",
        "blueprint": "Passive molecular-sieve I/O ports: trimeric [[OmpF porins|porin]] admit hydrophilic nutrients <600 Da.",
        "scientific": "Homotrimeric 16-stranded β-barrel [[OmpF porins|porin]] (PDB 2OMF; ~1.1 nm pore) diffuse solutes <600 Da."
      },
      "es": {
        "pop": "Las [[porinas OmpF|porin]] triméricas abren poros llenos de agua para pequeños nutrientes.",
        "blueprint": "Puertos pasivos de E/S: las [[porinas OmpF|porin]] triméricas tamizan nutrientes hidrofílicos <600 Da.",
        "scientific": "[[Porinas OmpF|porin]] homotriméricas en barril β de 16 hebras (PDB 2OMF; poro ~1,1 nm, corte <600 Da)."
      }
    },
    "ec.ch1.pump.01": {
      "en": {
        "pop": "In the periplasm sits a mesh of [[peptidoglycan|pg]] tied down by Lpp.",
        "blueprint": "Turgor-resisting exoskeleton: periplasmic [[peptidoglycan|pg]] mesh riveted to the hull by Lpp cables.",
        "scientific": "Monolayer ~4 nm GlcNAc–MurNAc [[peptidoglycan|pg]] sacculus tethered by ~5×10⁵ Lpp trimers (~3 atm turgor)."
      },
      "es": {
        "pop": "En el periplasma se sitúa una malla de [[peptidoglicano|pg]] sujeta por lipoproteínas Lpp.",
        "blueprint": "Exoesqueleto frente a turgencia: red periplásmica de [[peptidoglicano|pg]] remachada al casco vía Lpp.",
        "scientific": "Sáculo monocapa (~4 nm) de [[peptidoglicano|pg]] GlcNAc–MurNAc anclado por ~5×10⁵ trímeros Lpp (~3 atm)."
      }
    },
    "ec.ch1.pump.02": {
      "en": {
        "pop": "Spanning all three layers is the [[AcrAB–TolC efflux pump|pump]].",
        "blueprint": "Trans-envelope bilge ejector: the tripartite [[AcrAB–TolC efflux pump|pump]] spans all three hull layers.",
        "scientific": "Bridging 33 nm across both membranes stands the ~770 kDa RND [[AcrAB–TolC efflux pump|pump]] (PDB 5O66)."
      },
      "es": {
        "pop": "Atravesando las tres capas se encuentra la [[bomba de eflujo AcrAB–TolC|pump]].",
        "blueprint": "Eyector de achique transenvoltura: la [[bomba de eflujo AcrAB–TolC|pump]] conecta las tres capas del casco.",
        "scientific": "Abarcando 33 nm entre ambas membranas se erige la [[bomba de eflujo AcrAB–TolC|pump]] (~770 kDa, PDB 5O66)."
      }
    },
    "ec.ch1.pump.03": {
      "en": {
        "pop": "Acting like a bilge pump spanning both membranes, it intercepts antibiotics and blasts them outside.",
        "blueprint": "Proton-driven peristaltic cycling intercepts periplasmic drugs and vents them directly overboard.",
        "scientific": "Inward H⁺ translocation drives AcrB Loose–Tight–Open rotation to extrude antibiotics and bile salts."
      },
      "es": {
        "pop": "Como una bomba de achique que cruza ambas membranas, intercepta antibióticos y los expulsa afuera.",
        "blueprint": "Su ciclo peristáltico impulsado por H⁺ intercepta fármacos en el periplasma y los expulsa al exterior.",
        "scientific": "El flujo entrante de H⁺ impulsa la rotación funcional de AcrB para extruir fármacos y sales biliares."
      }
    },
    "ec.ch1.atps.01": {
      "en": {
        "pop": "With no mitochondria, E. coli makes its energy in the [[inner membrane|im]].",
        "blueprint": "Main electrical bus: without mitochondria, chemiosmotic power runs across the [[inner membrane|im]].",
        "scientific": "Chemiosmotic coupling operates across the ~7 nm phospholipid [[inner membrane|im]] at Δp ≈ −180 mV."
      },
      "es": {
        "pop": "Sin mitocondrias, E. coli produce su energía en la [[membrana interna|im]].",
        "blueprint": "Bus eléctrico principal: sin mitocondrias, la potencia quimiosmótica reside en la [[membrana interna|im]].",
        "scientific": "El acoplamiento quimiosmótico opera en la [[membrana interna|im]] fosfolipídica (~7 nm, Δp ≈ −180 mV)."
      }
    },
    "ec.ch1.atps.02": {
      "en": {
        "pop": "The [[respiratory chain (Complex I)|etc]] pumps protons out into the periplasm.",
        "blueprint": "Capacitor charging stage: the [[respiratory chain (Complex I)|etc]] oxidizes NADH to pump H⁺ outward.",
        "scientific": "Minimal 13-subunit [[respiratory chain (Complex I)|etc]] (NDH-1, PDB 7NYR) pumps 4 H⁺ per NADH oxidized."
      },
      "es": {
        "pop": "La [[cadena respiratoria (Complejo I)|etc]] bombea protones hacia el periplasma.",
        "blueprint": "Etapa de carga: la [[cadena respiratoria (Complejo I)|etc]] oxida NADH para bombear H⁺ hacia el periplasma.",
        "scientific": "La [[cadena respiratoria (Complejo I)|etc]] de 13 subunidades (NDH-1, PDB 7NYR) bombea 4 H⁺ por cada NADH."
      }
    },
    "ec.ch1.atps.03": {
      "en": {
        "pop": "Protons flowing back in spin [[ATP synthase|atps]] to make ATP.",
        "blueprint": "Rotary hydro-generator: inward H⁺ flux spins [[ATP synthase|atps]] to mint 3 ATP per 360° turn.",
        "scientific": "Periplasmic H⁺ return through F₀ c₁₀ rotates γ–ε in F₁F₀ [[ATP synthase|atps]] (PDB 6OQR; 3.33 H⁺/ATP)."
      },
      "es": {
        "pop": "Los protones que regresan hacen girar la [[ATP sintasa|atps]] para producir ATP.",
        "blueprint": "Generador rotatorio: el retorno de H⁺ gira la [[ATP sintasa|atps]] produciendo 3 ATP por vuelta completa.",
        "scientific": "El retorno de H⁺ por F₀ c₁₀ rota el eje γ–ε de la [[ATP sintasa|atps]] F₁F₀ (PDB 6OQR; 3,33 H⁺/ATP)."
      }
    },
    "ec.ch2.mot.01": {
      "en": {
        "pop": "Each [[flagellum|flag]] is spun by a 45-nanometre rotary motor in the wall.",
        "blueprint": "Outboard rotary thruster: each helical [[flagellum|flag]] couples to a 45 nm trans-envelope axle.",
        "scientific": "Each ~20 nm FliC [[flagellum|flag]] is driven by a ~45 nm basal body (MS, P, L, and C rings) in the wall."
      },
      "es": {
        "pop": "Cada [[flagelo|flag]] gira impulsado por un motor rotatorio de 45 nanómetros en la pared.",
        "blueprint": "Propulsor rotatorio externo: cada [[flagelo|flag]] helicoidal se acopla a un eje transenvoltura de 45 nm.",
        "scientific": "Cada [[flagelo|flag]] helicoidal FliC (~20 nm) gira mediante un cuerpo basal de ~45 nm (anillos MS, P, L, C)."
      }
    },
    "ec.ch2.mot.02": {
      "en": {
        "pop": "Protons flowing through [[MotA/MotB stators|flag]] spin the rotor 100 times/s.",
        "blueprint": "Electrostatic stator drive: H⁺ flux across [[MotA/MotB stators|flag]] spins the rotor at 100–300 Hz.",
        "scientific": "Up to 11 peptidoglycan-bound [[MotA/MotB stators|flag]] (MotA₅MotB₂) conduct ~1,200 H⁺/rev at ~100 Hz."
      },
      "es": {
        "pop": "Los protones que fluyen por los [[estatores MotA/MotB|flag]] hacen girar el rotor 100 veces/s.",
        "blueprint": "Accionamiento electrostático: el paso de H⁺ por [[estatores MotA/MotB|flag]] gira el rotor a 100–300 Hz.",
        "scientific": "Hasta 11 [[estatores MotA/MotB|flag]] (MotA₅MotB₂) conducen ~1.200 H⁺/vuelta y giran el rotor a ~100 Hz."
      }
    },
    "ec.ch2.mot.03": {
      "en": {
        "pop": "Flipping the [[C ring|flag]] clutch unbundles the propellers, making the cell tumble to a new heading.",
        "blueprint": "Directional reversing clutch: flipping [[C ring|flag]] spin unbundles filaments to tumble onto a new vector.",
        "scientific": "CheY-P binding to the FliG/FliM/FliN [[C ring|flag]] switches CCW run bundling into CW tumbling."
      },
      "es": {
        "pop": "Invertir el embrague del [[anillo C|flag]] abre las hélices: la bacteria vuelca y toma nuevo rumbo.",
        "blueprint": "Embrague inversor: invertir el giro del [[anillo C|flag]] separa el haz para reorientar la trayectoria.",
        "scientific": "La unión de CheY-P al [[anillo C|flag]] (FliG/FliM/FliN) conmuta el giro antihorario a vuelcos horarios."
      }
    },
    "ec.ch2.pole.01": {
      "en": {
        "pop": "At one pole, thousands of [[chemoreceptors|chemo]] pack into a honeycomb.",
        "blueprint": "Bow sensor array: thousands of transmembrane [[chemoreceptors|chemo]] tile into a hexagonal lattice.",
        "scientific": "At the cell pole, ~10⁴ homodimeric MCP [[chemoreceptors|chemo]] assemble into a 12 nm hexagonal lattice."
      },
      "es": {
        "pop": "En un polo, miles de [[quimiorreceptores|chemo]] se agrupan en forma de panal.",
        "blueprint": "Matriz sensora de proa: miles de [[quimiorreceptores|chemo]] transmembrana forman una red hexagonal.",
        "scientific": "En el polo celular, ~10⁴ [[quimiorreceptores|chemo]] MCP homodiméricos forman una red hexagonal de 12 nm."
      }
    },
    "ec.ch2.pole.02": {
      "en": {
        "pop": "They taste sugars and amino acids in the periplasm.",
        "blueprint": "Chemical telemetry: periplasmic ligand domains measure real-time nutrient gradients with memory.",
        "scientific": "Periplasmic 4-helix sensor domains bind attractants, sliding helix TM2 ~1.5 Å with <0.1% Δ[L]/[L] gain."
      },
      "es": {
        "pop": "Detectan azúcares y aminoácidos en el periplasma.",
        "blueprint": "Telemetría química: sus dominios periplásmicos miden gradientes de nutrientes con memoria adaptativa.",
        "scientific": "Sus dominios periplásmicos unen atrayentes y desplazan ~1,5 Å la hélice TM2 con sensibilidad <0,1%."
      }
    },
    "ec.ch2.pole.03": {
      "en": {
        "pop": "Inside, [[CheA kinases|chemo]] signal the flagellar motors when to tumble.",
        "blueprint": "Autopilot relay: cytoplasmic [[CheA kinases|chemo]] dispatch CheY-P packets to trigger motor reversal.",
        "scientific": "Receptor-coupled [[CheA kinases|chemo]] phosphorylate CheY to CheY-P, diffusing to bias C-ring switching."
      },
      "es": {
        "pop": "En el interior, las [[quinasas CheA|chemo]] indican a los motores flagelares cuándo dar un vuelco.",
        "blueprint": "Relé de piloto automático: las [[quinasas CheA|chemo]] envían señales CheY-P para invertir los motores.",
        "scientific": "Las [[quinasas CheA|chemo]] autofosforilan y transfieren fosfato a CheY, modulando el giro flagelar."
      }
    },
    "ec.ch2.pili.01": {
      "en": {
        "pop": "Sticking out all round the cell are hair-like [[pili|pili]].",
        "blueprint": "Perimeter mooring cables: rigid proteinaceous [[pili|pili]] radiate outward across the outer membrane.",
        "scientific": "Chaperone–usher Type 1 [[pili|pili]] (~7 nm × 1–2 µm helical FimA rods) project peritrichously outside."
      },
      "es": {
        "pop": "Sobresaliendo alrededor de toda la célula hay [[pili|pili]] filamentosos.",
        "blueprint": "Cables perimetrales de amarre: rígidos [[pili|pili]] proteicos irradian desde la membrana externa.",
        "scientific": "Fimbrias tipo 1 o [[pili|pili]] (~7 nm × 1–2 µm de varilla helicoidal FimA) emergen por toda la célula."
      }
    },
    "ec.ch2.pili.02": {
      "en": {
        "pop": "Their sticky tips grip host surfaces so the bacterium is not washed away.",
        "blueprint": "Shear-activated catch-bond tips lock onto host glycans, preventing hydrodynamic washout.",
        "scientific": "Tip adhesin FimH forms D-mannose catch-bonds whose lifetime increases under tensile fluid shear (~50 pN)."
      },
      "es": {
        "pop": "Sus puntas adhesivas se aferran a las superficies del huésped para evitar ser arrastrada.",
        "blueprint": "Sus puntas con enlace catch-bond se aferran a glucanos del huésped frente al arrastre hidrodinámico.",
        "scientific": "La adhesina distal FimH forma enlaces catch-bond con D-manosa reforzados bajo tensión de cizalla."
      }
    },
    "ec.ch3.nuc.01": {
      "en": {
        "pop": "In the middle sits the [[nucleoid|dna]]: 4.6 million base pairs of circular DNA.",
        "blueprint": "Core firmware storage: the membrane-free [[nucleoid|dna]] holds 4.6 Mbp of circular duplex code.",
        "scientific": "Central phase-separated [[nucleoid|dna]] housing the 4,641,652 bp covalently closed circular chromosome."
      },
      "es": {
        "pop": "En el centro se sitúa el [[nucleoide|dna]]: 4,6 millones de pares de bases de ADN circular.",
        "blueprint": "Almacén central de firmware: el [[nucleoide|dna]] sin membrana aloja 4,6 Mpb de código circular.",
        "scientific": "[[Nucleoide|dna]] central segregado por fase con el cromosoma circular cerrado de 4.641.652 pb."
      }
    },
    "ec.ch3.nuc.02": {
      "en": {
        "pop": "Stretched out it is 1.6 millimetres long, 800 times the length of the cell.",
        "blueprint": "Extreme 800:1 axial compression packs a 1.6 mm linear contour neatly inside a 2 µm hull.",
        "scientific": "Contour length 1.58 mm (800× cell length) compacted ~10³-fold into ~10 kb topological loops (σ ≈ −0.05)."
      },
      "es": {
        "pop": "Estirado mide 1,6 milímetros de largo, 800 veces la longitud de la célula.",
        "blueprint": "Compresión geométrica 800:1 que aloja 1,6 mm de contorno lineal dentro de un chasis de 2 µm.",
        "scientific": "Longitud de contorno de 1,58 mm (800× la célula) compactada ~10³ veces en dominios de ~10 kb (σ ≈ −0,05)."
      }
    },
    "ec.ch3.nuc.03": {
      "en": {
        "pop": "[[DNA gyrase|hu]] twists it into plectonemes, and [[HU proteins|hu]] bend it.",
        "blueprint": "Torsion & routing hardware: [[DNA gyrase|hu]] injects negative supercoils as [[HU proteins|hu]] kink loops.",
        "scientific": "Type IIA [[DNA gyrase|hu]] (PDB 6RKW) maintains negative supercoiling while ~30,000 [[HU proteins|hu]] bend DNA."
      },
      "es": {
        "pop": "La [[ADN girasa|hu]] lo retuerce en plectonemas, y las [[proteínas HU|hu]] lo doblan.",
        "blueprint": "Hardware de torsión: la [[ADN girasa|hu]] introduce superenrollamientos y las [[proteínas HU|hu]] pliegan bucles.",
        "scientific": "La [[ADN girasa|hu]] (PDB 6RKW) genera superhélices negativas y ~30.000 [[proteínas HU|hu]] curvan el ADN."
      }
    },
    "ec.ch3.fork.01": {
      "en": {
        "pop": "Here a [[replication fork|fork]] is copying the chromosome at 1,000 bases/s.",
        "blueprint": "High-speed DMA duplicator: each [[replication fork|fork]] clones duplex code at 1,000 bp/s throughput.",
        "scientific": "Bidirectional oriC-initiated [[replication fork|fork]] (~250 nm replisome) polymerizing at ~1,000 nt/s."
      },
      "es": {
        "pop": "Aquí una [[horquilla de replicación|fork]] está copiando el cromosoma a 1.000 bases/s.",
        "blueprint": "Duplicador de alta velocidad: la [[horquilla de replicación|fork]] clona el código a 1.000 pb/s.",
        "scientific": "[[Horquilla de replicación|fork]] bidireccional iniciada en oriC (~250 nm) que avanza a ~1.000 nt/s."
      }
    },
    "ec.ch3.fork.02": {
      "en": {
        "pop": "[[DnaB helicase|fork]] unwinds the parent helix while [[Pol III|fork]] copies both strands.",
        "blueprint": "Coupled unzip-and-write stage: [[DnaB helicase|fork]] splits strands for τ-linked twin [[Pol III|fork]] cores.",
        "scientific": "Hexameric [[DnaB helicase|fork]] (6QEL) unwinds 5′→3′ as clamp-bound [[Pol III|fork]] cores (5FKV) synthesize."
      },
      "es": {
        "pop": "La [[helicasa DnaB|fork]] desenrolla la hélice parental mientras la [[Pol III|fork]] copia ambas hebras.",
        "blueprint": "Etapa acoplada: la [[helicasa DnaB|fork]] separa hebras para dos núcleos [[Pol III|fork]] enlazados por τ.",
        "scientific": "La [[helicasa DnaB|fork]] hexamérica (6QEL) abre 5′→3′ y dos núcleos [[Pol III|fork]] (5FKV) sintetizan."
      }
    },
    "ec.ch3.fork.03": {
      "en": {
        "pop": "The lagging strand loops out in [[Okazaki fragments|dna]], guarded by SSB.",
        "blueprint": "Trombone loop buffer: antiparallel lagging synthesis builds SSB-wrapped [[Okazaki fragments|dna]].",
        "scientific": "DnaG-primed 1–2 kb lagging [[Okazaki fragments|dna]] loop around homotetrameric SSB spools (PDB 1EYG)."
      },
      "es": {
        "pop": "La hebra rezagada forma bucles en [[fragmentos de Okazaki|dna]], protegidos por SSB.",
        "blueprint": "Búfer en bucle de trombón: la hebra rezagada se ensambla en [[fragmentos de Okazaki|dna]] cubiertos de SSB.",
        "scientific": "Los [[fragmentos de Okazaki|dna]] (1–2 kb, cebados por DnaG) se enrollan en tetrámeros SSB (PDB 1EYG)."
      }
    },
    "ec.ch4.gene.01": {
      "en": {
        "pop": "With no nuclear membrane, transcription and translation happen together.",
        "blueprint": "Zero-latency pipeline: unpartitioned cytosol couples transcription directly to translation.",
        "scientific": "Absence of a nuclear envelope enables direct physical expressome coupling of RNAP and 70S ribosomes."
      },
      "es": {
        "pop": "Sin membrana nuclear, la transcripción y la traducción ocurren simultáneamente.",
        "blueprint": "Pipeline de latencia cero: el citosol abierto acopla directamente la transcripción con la traducción.",
        "scientific": "La ausencia de envoltura nuclear permite el acoplamiento físico directo en expresomas RNAP–ribosoma 70S."
      }
    },
    "ec.ch4.gene.02": {
      "en": {
        "pop": "[[RNA polymerase|rnap]] copies DNA into [[mRNA|mrna]].",
        "blueprint": "Stream encoder: [[RNA polymerase|rnap]] transcribes chromosomal operons into nascent [[mRNA|mrna]].",
        "scientific": "Core α₂ββ′ω [[RNA polymerase|rnap]] (PDB 4YG2) elongates nascent [[mRNA|mrna]] at ~40–80 nt/s."
      },
      "es": {
        "pop": "La [[ARN polimerasa|rnap]] copia el ADN en [[ARNm|mrna]].",
        "blueprint": "Codificador en flujo: la [[ARN polimerasa|rnap]] transcribe operones en hebras nacientes de [[ARNm|mrna]].",
        "scientific": "La [[ARN polimerasa|rnap]] α₂ββ′ω (PDB 4YG2) elonga transcritos nacientes de [[ARNm|mrna]] a ~40–80 nt/s."
      }
    },
    "ec.ch4.gene.03": {
      "en": {
        "pop": "With no nuclear wall, [[70S ribosomes|ribosome]] start building protein while the mRNA is still printing.",
        "blueprint": "Pipelined decoders: [[70S ribosomes|ribosome]] dock onto 5′ leaders while 3′ transcription continues.",
        "scientific": "Polysomal [[70S ribosomes|ribosome]] (PDB 4YBB) bind Shine–Dalgarno leaders to translate at ~20 aa/s."
      },
      "es": {
        "pop": "Sin muro nuclear, los [[ribosomas 70S|ribosome]] fabrican proteína mientras el ARNm aún se imprime.",
        "blueprint": "Decodificadores en serie: los [[ribosomas 70S|ribosome]] inician en 5′ antes de terminar el extremo 3′.",
        "scientific": "Polisomas de [[ribosomas 70S|ribosome]] (PDB 4YBB) se unen a secuencias Shine–Dalgarno (~20 aa/s)."
      }
    },
    "ec.ch4.cyto.01": {
      "en": {
        "pop": "Barrel-shaped [[GroEL–GroES chaperonins|cyto]] help new proteins fold.",
        "blueprint": "Quality-control isolation pods: barrel [[GroEL–GroES chaperonins|cyto]] refold nascent chains via ATP.",
        "scientific": "Tetradecameric [[GroEL–GroES chaperonins|cyto]] (PDB 1AON; ~800 kDa) encapsulate ~60 kDa substrates."
      },
      "es": {
        "pop": "Las [[chaperoninas GroEL–GroES|cyto]] en forma de barril ayudan a plegar las nuevas proteínas.",
        "blueprint": "Cápsulas de control de calidad: las [[chaperoninas GroEL–GroES|cyto]] repliegan cadenas gastando ATP.",
        "scientific": "Las [[chaperoninas GroEL–GroES|cyto]] tetradecaméricas (PDB 1AON; ~800 kDa) aíslan y pliegan sustratos."
      }
    },
    "ec.ch4.cyto.02": {
      "en": {
        "pop": "At the poles, [[glycogen granules|glycogen]] store glucose for lean times.",
        "blueprint": "Polar energy capacitors: branched [[glycogen granules|glycogen]] buffer surplus glucose reserves.",
        "scientific": "Polar α-(1→4)/α-(1→6) [[glycogen granules|glycogen]] (~20–50 nm) store polymeric glucose for starvation."
      },
      "es": {
        "pop": "En los polos, los [[gránulos de glucógeno|glycogen]] almacenan glucosa para tiempos de escasez.",
        "blueprint": "Condensadores polares de reserva: los [[gránulos de glucógeno|glycogen]] almacenan polímeros de glucosa.",
        "scientific": "Los [[gránulos de glucógeno|glycogen]] α-(1→4)/α-(1→6) (~20–50 nm) reservan glucosa en los polos."
      }
    },
    "ec.ch4.fin.01": {
      "en": {
        "pop": "Proton power, DNA replication and protein synthesis all run at once.",
        "blueprint": "Full-duplex operation: chemiosmotic power, genome replication, and translation run concurrently.",
        "scientific": "Steady-state exponential growth integrates Δp generation, ~40-min oriC replication, and ~50,000 ribosomes."
      },
      "es": {
        "pop": "La fuerza protón-motriz, la replicación del ADN y la síntesis de proteínas funcionan al mismo tiempo.",
        "blueprint": "Operación simultánea: bus protónico, replicación genómica y traducción acoplada corren en paralelo.",
        "scientific": "El crecimiento exponencial integra generación de Δp, replicación desde oriC y ~50.000 ribosomas activos."
      }
    },
    "ec.ch4.fin.02": {
      "en": {
        "pop": "Click any tag or keyword to inspect the real PDB structures up close.",
        "blueprint": "Select any telemetry tag or inline link to load atomic-resolution PDB component views.",
        "scientific": "Select any structural label to inspect experimental X-ray and cryo-EM PDB coordinates at atomic scale."
      },
      "es": {
        "pop": "Haz clic en cualquier etiqueta o palabra clave para inspeccionar de cerca las estructuras PDB reales.",
        "blueprint": "Selecciona cualquier etiqueta o enlace para abrir las vistas de componentes PDB a escala atómica.",
        "scientific": "Haz clic en cualquier etiqueta para inspeccionar estructuras experimentales PDB por crio-ME y rayos X."
      }
    },
    "ec.det.env.01": {
      "en": {
        "pop": "The Gram-negative envelope: outer LPS membrane, peptidoglycan, inner membrane.",
        "blueprint": "Trilaminar Gram-negative hull stack: asymmetric LPS outer shield, murein brace, inner power membrane.",
        "scientific": "Tripartite ~35 nm envelope: ~7 nm LPS/phospholipid OM, ~4 nm Lpp-tethered murein, ~7 nm phospholipid IM."
      },
      "es": {
        "pop": "La envoltura gramnegativa: membrana externa de LPS, peptidoglicano y membrana interna.",
        "blueprint": "Apilamiento trilaminar gramnegativo: escudo asimétrico de LPS, malla de mureína y membrana interna.",
        "scientific": "Envoltura tripartita (~35 nm): ME asimétrica de LPS (~7 nm), mureína (~4 nm) y MI fosfolipídica (~7 nm)."
      }
    },
    "ec.det.env.02": {
      "en": {
        "pop": "OmpF porins let small molecules in; AcrAB–TolC pumps antibiotics out.",
        "blueprint": "Selective perimeter I/O: passive OmpF porins admit nutrients while AcrAB–TolC ejects xenobiotics.",
        "scientific": "Trimeric OmpF β-barrels (PDB 2OMF) pass <600 Da solutes; RND AcrAB–TolC (PDB 5O66) extrudes drugs via Δp."
      },
      "es": {
        "pop": "Las porinas OmpF dejan entrar moléculas pequeñas; AcrAB–TolC bombea antibióticos hacia afuera.",
        "blueprint": "E/S perimetral selectiva: las porinas OmpF filtran nutrientes y AcrAB–TolC eyecta xenobióticos.",
        "scientific": "Los barriles β OmpF (PDB 2OMF) filtran <600 Da; AcrAB–TolC (PDB 5O66) expulsa fármacos consumiendo Δp."
      }
    },
    "ec.det.mot.01": {
      "en": {
        "pop": "A 45-nanometre proton-driven rotary motor spanning all three envelope layers.",
        "blueprint": "45 nm trans-envelope rotary drive: bush-bearing P/L rings guide an H⁺-powered rotor through the hull.",
        "scientific": "45 nm flagellar basal body spanning OM, peptidoglycan, and IM via FlgH/FlgI bushings and FliF MS-ring."
      },
      "es": {
        "pop": "Un motor rotatorio de 45 nanómetros impulsado por protones que atraviesa las tres capas de la envoltura.",
        "blueprint": "Propulsor rotatorio transenvoltura de 45 nm con cojinetes P/L y eje impulsado por flujo de protones.",
        "scientific": "Cuerpo basal flagelar de 45 nm que cruza ME, mureína y MI mediante anillos FlgH/FlgI y anillo MS FliF."
      }
    },
    "ec.det.mot.02": {
      "en": {
        "pop": "MotA/MotB stators turn the MS and C rings up to 100 revolutions a second.",
        "blueprint": "Up to 11 MotA/MotB stator units convert periplasmic H⁺ influx into 100+ rps MS/C-ring shaft torque.",
        "scientific": "Peptidoglycan-anchored MotA₅MotB₂ stators torque the FliF/FliG rotor at 100–300 Hz (~1,200 H⁺/rev)."
      },
      "es": {
        "pop": "Los estatores MotA/MotB hacen girar los anillos MS y C hasta 100 revoluciones por segundo.",
        "blueprint": "Hasta 11 estatores MotA/MotB convierten el influjo de H⁺ en giro de los anillos MS y C a >100 rps.",
        "scientific": "Estatores MotA₅MotB₂ anclados a mureína aplican par sobre el rotor FliF/FliG a 100–300 Hz (~1.200 H⁺/giro)."
      }
    },
    "ec.det.pole.01": {
      "en": {
        "pop": "Thousands of chemoreceptor trimers-of-dimers form a hexagonal sensory array.",
        "blueprint": "Cooperative phased-array nose: trimers-of-dimers form an amplified hexagonal chemotaxis lattice.",
        "scientific": "Polar hexagonal lattice (12 nm spacing) of MCP trimers-of-dimers bridged at cytoplasmic tips by CheA/CheW."
      },
      "es": {
        "pop": "Miles de trímeros de dímeros de quimiorreceptores forman una matriz sensorial hexagonal.",
        "blueprint": "Nariz en matriz en fase: trímeros de dímeros forman una red hexagonal con amplificación cooperativa.",
        "scientific": "Red hexagonal polar (paso de 12 nm) de trímeros de dímeros MCP enlazados en su base por CheA y CheW."
      }
    },
    "ec.det.pole.02": {
      "en": {
        "pop": "CheA kinase phosphorylation controls whether the flagella run or tumble.",
        "blueprint": "Signal comparator: attractant loss activates CheA autophosphorylation, dispatching CheY-P tumble commands.",
        "scientific": "Attractant-free MCPs activate histidine kinase CheA, elevating CheY-P to switch FliM/C-ring spin to CW."
      },
      "es": {
        "pop": "La fosforilación de la quinasa CheA controla si los flagelos avanzan en línea o dan un vuelco.",
        "blueprint": "Comparador de señal: la caída de atrayentes activa CheA y envía paquetes CheY-P de inversión motora.",
        "scientific": "La falta de ligando activa la histidina-quinasa CheA, elevando CheY-P para conmutar el anillo C a horario."
      }
    },
    "ec.det.nuc.01": {
      "en": {
        "pop": "The 4.6-megabase circular chromosome folded into supercoiled plectoneme loops.",
        "blueprint": "4.6 Mbp circular genome partitioned into negatively supercoiled plectonemic loop domains.",
        "scientific": "4.64 Mbp circular chromosome organized into ~400 negatively supercoiled plectonemic loops (~10 kb each)."
      },
      "es": {
        "pop": "El cromosoma circular de 4,6 megabases plegado en bucles plectonémicos superenrollados.",
        "blueprint": "Genoma circular de 4,6 Mpb particionado en dominios de bucles plectonémicos con torsión negativa.",
        "scientific": "Cromosoma circular de 4,64 Mpb organizado en ~400 bucles plectonémicos superenrollados (~10 kb cada uno)."
      }
    },
    "ec.det.nuc.02": {
      "en": {
        "pop": "HU, Fis and DNA gyrase compact the DNA without eukaryotic histones.",
        "blueprint": "Histone-free compaction: HU clips, Fis bridges, and DNA gyrase maintain accessible loop geometry.",
        "scientific": "Nucleoid-associated proteins (HU, Fis, H-NS, IHF, MukBEF) and DNA gyrase compact DNA without histones."
      },
      "es": {
        "pop": "HU, Fis y la ADN girasa compactan el ADN sin necesidad de histonas eucariotas.",
        "blueprint": "Compactación sin histonas: pinzas HU, puentes Fis y ADN girasa sostienen bucles siempre accesibles.",
        "scientific": "Proteínas asociadas al nucleoide (HU, Fis, H-NS, IHF, MukBEF) y la ADN girasa compactan sin histonas."
      }
    },
    "ec.det.gene.01": {
      "en": {
        "pop": "Coupled transcription–translation at true scale (1 bead per residue).",
        "blueprint": "1:1 residue-scale expressome pipeline: transcription feeds directly into polysomal translation.",
        "scientific": "Co-transcriptional translation rendered at 1 bead per nucleotide/residue along nascent mRNA."
      },
      "es": {
        "pop": "Transcripción y traducción acopladas a escala real (1 esfera por residuo).",
        "blueprint": "Pipeline expresoma a escala 1:1 por residuo: la transcripción alimenta en directo a los polisomas.",
        "scientific": "Traducción cotranscripcional trazada a 1 esfera por nucleótido o aminoácido sobre el ARNm naciente."
      }
    },
    "ec.det.gene.02": {
      "en": {
        "pop": "A train of 70S ribosomes translates the nascent mRNA right behind RNAP.",
        "blueprint": "Serial ribosome convoy trails RNAP closely, shielding nascent mRNA from premature Rho termination.",
        "scientific": "Polysome train of 70S ribosomes trailing RNAP at ~20 aa/s prevents R-loops and Rho factor termination."
      },
      "es": {
        "pop": "Un tren de ribosomas 70S traduce el ARNm naciente justo detrás de la ARN polimerasa.",
        "blueprint": "Un convoy de ribosomas 70S avanza tras la RNAP protegiendo el ARNm naciente frente al factor Rho.",
        "scientific": "Un tren de ribosomas 70S sigue a la RNAP (~20 aa/s), suprimiendo bucles R y la terminación por Rho."
      }
    },
    "ec.det.fork.01": {
      "en": {
        "pop": "The E. coli replisome: DnaB helicase, DnaG primase, and two Pol III cores.",
        "blueprint": "Integrated replisome core: hexameric DnaB unzipper, DnaG primer unit, and τ-coupled twin Pol IIIs.",
        "scientific": "E. coli replisome: DnaB₆ helicase (6QEL), DnaG primase, γ/τ₃δδ′ clamp loader, and two Pol III cores (5FKV)."
      },
      "es": {
        "pop": "El replisoma de E. coli: helicasa DnaB, primasa DnaG y dos núcleos de Pol III.",
        "blueprint": "Núcleo integrado del replisoma: helicasa DnaB, primasa DnaG y dos polimerasas Pol III acopladas.",
        "scientific": "Replisoma de E. coli: helicasa DnaB₆ (6QEL), primasa DnaG, cargador γ/τ₃δδ′ y dos núcleos Pol III (5FKV)."
      }
    },
    "ec.det.fork.02": {
      "en": {
        "pop": "The leading strand is copied continuously; the lagging strand in fragments.",
        "blueprint": "Asymmetric duplex synthesis: continuous leading-strand write paired with looped Okazaki batching.",
        "scientific": "Semidiscontinuous synthesis: continuous 5′→3′ leading strand and 1–2 kb looped lagging Okazaki fragments."
      },
      "es": {
        "pop": "La hebra conductora se copia de forma continua; la hebra rezagada, en fragmentos.",
        "blueprint": "Síntesis dúplex asimétrica: escritura continua en la conductora y por lotes en bucle en la rezagada.",
        "scientific": "Síntesis semidiscontinua: hebra conductora continua 5′→3′ y fragmentos de Okazaki en bucle de 1–2 kb."
      }
    },
    "ec.det.ribo.01": {
      "en": {
        "pop": "Real E. coli 70S ribosome (PDB 4YBB): 30S small and 50S large subunits.",
        "blueprint": "Prokaryotic 70S translation unit (PDB 4YBB): 30S codon decoder mated to 50S peptidyl-transferase.",
        "scientific": "E. coli 70S ribosome (PDB 4YBB, ~2.5 MDa): 30S (16S rRNA + 21 proteins) and 50S (23S/5S rRNA + 33 proteins)."
      },
      "es": {
        "pop": "Ribosoma 70S real de E. coli (PDB 4YBB): subunidad menor 30S y subunidad mayor 50S.",
        "blueprint": "Unidad de traducción 70S (PDB 4YBB): decodificador 30S acoplado al centro peptidil-transferasa 50S.",
        "scientific": "Ribosoma 70S de E. coli (PDB 4YBB, ~2,5 MDa): subunidades 30S (ARNr 16S) y 50S (ARNr 23S/5S)."
      }
    },
    "ec.det.ribo.02": {
      "en": {
        "pop": "Many clinical antibiotics bind this bacterial ribosome while sparing ours.",
        "blueprint": "Selective drug target: unique 70S rRNA pockets let clinical antibiotics halt bacteria without host harm.",
        "scientific": "Prokaryote-specific 16S/23S rRNA pockets bind tetracyclines, aminoglycosides, and macrolides selectively."
      },
      "es": {
        "pop": "Muchos antibióticos clínicos se unen a este ribosoma bacteriano sin afectar a los nuestros.",
        "blueprint": "Diana farmacológica selectiva: bolsillos exclusivos del 70S permiten bloquear bacterias sin dañar el 80S.",
        "scientific": "Bolsillos exclusivos del ARNr 16S/23S fijan tetraciclinas, aminoglucósidos y macrólidos selectivamente."
      }
    },
    "ec.det.rnap.01": {
      "en": {
        "pop": "Bacterial RNA polymerase holoenzyme (PDB 4YG2) with σ70 initiation factor.",
        "blueprint": "Transcription holoenzyme (PDB 4YG2): σ70 promoter-recognition module docked on core α₂ββ′ω crab-claw.",
        "scientific": "E. coli RNAP holoenzyme α₂ββ′ωσ70 (PDB 4YG2, ~450 kDa) recognizing −35/−10 consensus promoters."
      },
      "es": {
        "pop": "Holoenzima de la ARN polimerasa bacteriana (PDB 4YG2) con el factor de iniciación σ70.",
        "blueprint": "Holoenzima de transcripción (PDB 4YG2): módulo promotor σ70 acoplado a la pinza catalítica α₂ββ′ω.",
        "scientific": "Holoenzima ARN polimerasa α₂ββ′ωσ70 (PDB 4YG2, ~450 kDa) unida a elementos promotores −35 y −10."
      }
    },
    "ec.det.groel.01": {
      "en": {
        "pop": "GroEL–GroES chaperonin cage (PDB 1AON): two 7-membered rings plus a lid.",
        "blueprint": "Dual-ring folding pod (PDB 1AON): back-to-back heptameric GroEL chambers sealed by a GroES heptamer lid.",
        "scientific": "Chaperonin complex GroEL₁₄–GroES₇ (PDB 1AON, ~800 kDa; ~14.5 × 18 nm) with cis/trans heptameric rings."
      },
      "es": {
        "pop": "Jaula chaperonina GroEL–GroES (PDB 1AON): dos anillos de 7 subunidades más una tapa.",
        "blueprint": "Cápsula de plegamiento de doble anillo (PDB 1AON): dos heptámeros GroEL cerrados por la tapa GroES₇.",
        "scientific": "Complejo chaperonina GroEL₁₄–GroES₇ (PDB 1AON, ~800 kDa; ~14,5 × 18 nm) con anillos heptaméricos cis/trans."
      }
    },
    "ec.det.groel.02": {
      "en": {
        "pop": "Gives misfolded proteins a private ATP-timed chamber in which to fold.",
        "blueprint": "ATP-clocked hydrophilic Anfinsen cage (~10 s cycle) prevents aggregation during polypeptide folding.",
        "scientific": "7 ATP-driven GroES capping switches the cis cavity wall from hydrophobic to hydrophilic (~10 s timer)."
      },
      "es": {
        "pop": "Ofrece a las proteínas mal plegadas una cámara privada temporizada por ATP donde plegarse.",
        "blueprint": "Jaula hidrofílica temporizada por ATP (~10 s por ciclo) que evita agregados durante el plegamiento.",
        "scientific": "La unión de 7 ATP y GroES vuelve hidrofílica la cavidad cis durante ~10 s para el plegamiento aislado."
      }
    },
    "ec.det.hu.01": {
      "en": {
        "pop": "Nucleoid-associated protein HU (PDB 1MUL): two β-arms bend the DNA helix.",
        "blueprint": "Minor-groove bending clip (PDB 1MUL): dimeric α-body inserts two β-ribbon arms to kink duplex DNA.",
        "scientific": "Heterodimeric NAP HUαβ (PDB 1MUL, ~18 kDa) intercalates conserved Pro63 via β-arms to bend DNA 105–140°."
      },
      "es": {
        "pop": "Proteína asociada al nucleoide HU (PDB 1MUL): dos brazos β curvan la hélice de ADN.",
        "blueprint": "Pinza curvadora del surco menor (PDB 1MUL): cuerpo α dimérico con dos brazos β que doblan la hélice.",
        "scientific": "El heterodímero HUαβ (PDB 1MUL, ~18 kDa) intercala Pro63 mediante dos brazos β, curvando el ADN 105–140°."
      }
    },
    "ec.det.mcp.01": {
      "en": {
        "pop": "Methyl-accepting chemotaxis protein (PDB 1QU7): a long four-helix coiled coil.",
        "blueprint": "Transmembrane signal rod (PDB 1QU7): 20 nm four-helix coiled coil relaying periplasmic shifts to CheA.",
        "scientific": "Homodimeric MCP cytoplasmic domain (PDB 1QU7, ~36 nm full length) with HAMP and Glu methylation sites."
      },
      "es": {
        "pop": "Proteína de quimiotaxis aceptora de metilo (PDB 1QU7): una larga superhélice de cuatro hélices.",
        "blueprint": "Varilla transductora (PDB 1QU7): superhélice cuádruple de 20 nm que transmite desplazamientos a CheA.",
        "scientific": "Dominio citoplasmático homodimérico MCP (PDB 1QU7, ~36 nm totales) con HAMP y banda de metilación Glu."
      }
    },
    "ec.det.atps.01": {
      "en": {
        "pop": "E. coli F₁F₀ ATP synthase (PDB 6OQR): protons spin the c-ring and γ stalk.",
        "blueprint": "Rotary F₁F₀ power converter (PDB 6OQR): c₁₀ proton turbine drives eccentric γ camshaft inside α₃β₃.",
        "scientific": "Intact E. coli F₁F₀ ATP synthase (PDB 6OQR, ~530 kDa, α₃β₃γδεab₂c₁₀) yielding 3 ATP per 10 H⁺."
      },
      "es": {
        "pop": "ATP sintasa F₁F₀ de E. coli (PDB 6OQR): los protones hacen girar el anillo c y el tallo γ.",
        "blueprint": "Convertidor rotatorio F₁F₀ (PDB 6OQR): la turbina c₁₀ acciona el árbol de levas γ dentro de α₃β₃.",
        "scientific": "ATP sintasa F₁F₀ íntegra de E. coli (PDB 6OQR, ~530 kDa, α₃β₃γδεab₂c₁₀): sintetiza 3 ATP por cada 10 H⁺."
      }
    },
    "ec.det.nuo.01": {
      "en": {
        "pop": "Respiratory Complex I (NADH dehydrogenase, PDB 7NYR): 13 subunits in an L.",
        "blueprint": "Minimalist L-frame Complex I (PDB 7NYR): 13 core NuoA–N subunits housing redox wire and H⁺ antiporters.",
        "scientific": "E. coli NDH-1 / Complex I (PDB 7NYR, ~535 kDa, 13 subunits NuoA–N): minimal conserved bioenergetic core."
      },
      "es": {
        "pop": "Complejo respiratorio I (NADH deshidrogenasa, PDB 7NYR): 13 subunidades en forma de L.",
        "blueprint": "Bastidor en L del Complejo I (PDB 7NYR): 13 subunidades NuoA–N con cable redox y canales antiporter.",
        "scientific": "NDH-1 / Complejo I de E. coli (PDB 7NYR, ~535 kDa, 13 polipéptidos NuoA–N): núcleo catalítico mínimo."
      }
    },
    "ec.det.nuo.02": {
      "en": {
        "pop": "Transfers electrons from NADH to quinone and pumps four protons out.",
        "blueprint": "2 e⁻ hop from FMN across 9 Fe–S clusters to quinone, actuating 4 H⁺ ejection across the membrane arm.",
        "scientific": "FMN and nine Fe–S clusters transfer 2 e⁻ from NADH to ubiquinone-8, translocating 4 H⁺ across NuoLMN/H."
      },
      "es": {
        "pop": "Transfiere electrones del NADH a la quinona y bombea cuatro protones hacia el exterior.",
        "blueprint": "2 e⁻ viajan desde FMN por 9 centros Fe–S hasta quinona, accionando el bombeo de 4 H⁺ transmembrana.",
        "scientific": "FMN y nueve centros Fe–S transfieren 2 e⁻ del NADH a ubiquinona-8, bombeando 4 H⁺ vía NuoL, NuoM y NuoN."
      }
    },
    "ec.det.pump.01": {
      "en": {
        "pop": "Tripartite multidrug efflux pump AcrAB–TolC (PDB 5O66), 33 nanometres tall.",
        "blueprint": "33 nm trans-envelope efflux stack (PDB 5O66): AcrB₃ pump + AcrA₆ adapter + TolC₃ outer-hull chimney.",
        "scientific": "Tripartite RND complex AcrB₃–AcrA₆–TolC₃ (PDB 5O66, ~770 kDa, 33 nm axial span) bridging IM and OM."
      },
      "es": {
        "pop": "Bomba tripartita de eflujo de múltiples fármacos AcrAB–TolC (PDB 5O66), de 33 nanómetros de altura.",
        "blueprint": "Torre de eflujo de 33 nm (PDB 5O66): bomba AcrB₃ + adaptador AcrA₆ + chimenea externa TolC₃.",
        "scientific": "Complejo RND tripartito AcrB₃–AcrA₆–TolC₃ (PDB 5O66, ~770 kDa, 33 nm axiales) tendido entre MI y ME."
      }
    },
    "ec.det.pump.02": {
      "en": {
        "pop": "Uses the proton gradient to expel antibiotics across both membranes.",
        "blueprint": "H⁺-coupled peristaltic extrusion purges hydrophobic antibiotics before they enter the cytosol.",
        "scientific": "Asp407–Asp408–Lys940 H⁺ relay in AcrB powers peristaltic drug expulsion out the 14 nm TolC duct."
      },
      "es": {
        "pop": "Utiliza el gradiente de protones para expulsar antibióticos a través de ambas membranas.",
        "blueprint": "La extrusión peristáltica acoplada a H⁺ purga antibióticos hidrofóbicos antes de pisar el citosol.",
        "scientific": "El relé protónico Asp407–Asp408–Lys940 de AcrB impulsa la expulsión de fármacos por el canal TolC."
      }
    },
    "ec.det.dnab.01": {
      "en": {
        "pop": "Replicative helicase DnaB (PDB 6QEL): a hexameric ring that unwinds DNA.",
        "blueprint": "Hexameric 5′→3′ unzipping motor (PDB 6QEL): hand-over-hand NTPase ring splitting parental duplex DNA.",
        "scientific": "Superfamily 4 hexameric helicase DnaB₆ (PDB 6QEL, ~312 kDa) translocating 5′→3′ at 2 nt per NTP."
      },
      "es": {
        "pop": "Helicasa replicativa DnaB (PDB 6QEL): un anillo hexamérico que desenrolla el ADN.",
        "blueprint": "Motor hexamérico 5′→3′ (PDB 6QEL): anillo NTPasa que avanza mano sobre mano abriendo el dúplex parental.",
        "scientific": "Helicasa hexamérica SF4 DnaB₆ (PDB 6QEL, ~312 kDa) que transloca 5′→3′ a razón de 2 nt por NTP."
      }
    },
    "ec.det.pol3.01": {
      "en": {
        "pop": "DNA polymerase III core + β sliding clamp (PDB 5FKV) copying DNA.",
        "blueprint": "High-processivity writer (PDB 5FKV): Pol III αεθ core + β₂ sliding clamp with 3′→5′ proofreading.",
        "scientific": "Pol III αεθ core bound to homodimeric β₂ clamp (PDB 5FKV): ~1,000 nt/s synthesis with <10⁻⁷ error/bp."
      },
      "es": {
        "pop": "Núcleo de la ADN polimerasa III + abrazadera deslizante β (PDB 5FKV) copiando el ADN.",
        "blueprint": "Escritor de alta procesividad (PDB 5FKV): núcleo Pol III αεθ + pinza β₂ con corrector 3′→5′ integrado.",
        "scientific": "Núcleo Pol III αεθ unido a la pinza dimérica β₂ (PDB 5FKV): síntesis a ~1.000 nt/s y error <10⁻⁷/pb."
      }
    },
    "ec.det.gyr.01": {
      "en": {
        "pop": "DNA gyrase (PDB 6RKW): introduces negative supercoils; target of ciprofloxacin.",
        "blueprint": "ATP-driven Type IIA topoisomerase (PDB 6RKW): ΔLk = −2 strand-passage gate targeted by fluoroquinolones.",
        "scientific": "GyrA₂GyrB₂ holoenzyme (PDB 6RKW, ~374 kDa) introducing negative supercoils; poisoned by ciprofloxacin."
      },
      "es": {
        "pop": "ADN girasa (PDB 6RKW): introduce superenrollamientos negativos; diana del ciprofloxacino.",
        "blueprint": "Topoisomerasa IIA dependiente de ATP (PDB 6RKW): paso de hebra ΔLk = −2 bloqueado por fluoroquinolonas.",
        "scientific": "Tetrámero GyrA₂GyrB₂ (PDB 6RKW, ~374 kDa) generador de superhélices negativas; diana del ciprofloxacino."
      }
    }
  },
  "real-phage": {
    "t4.ch0.intro.01": {
      "en": {
        "pop": "This is bacteriophage T4, a virus that hunts Escherichia coli bacteria.",
        "blueprint": "System overview: Bacteriophage T4, an autonomous mechanochemical virion targeting E. coli.",
        "scientific": "Tequatrovirus T4 (Caudoviricetes, Straboviridae): a lytic myovirus infecting Escherichia coli."
      },
      "es": {
        "pop": "Este es el bacteriófago T4, un virus que caza bacterias Escherichia coli.",
        "blueprint": "Vista general del sistema: bacteriófago T4, virión mecanicoquímico autónomo contra E. coli.",
        "scientific": "Tequatrovirus T4 (Caudoviricetes, Straboviridae): miovirus lítico específico de Escherichia coli."
      }
    },
    "t4.ch0.intro.02": {
      "en": {
        "pop": "It stands about 200 nanometres tall: a lunar-lander syringe built of protein.",
        "blueprint": "200 nm modular chassis: a proteinaceous spring-loaded hypodermic lander requiring zero onboard ATP.",
        "scientific": "Total axial height ~200 nm (~100 MDa virion mass) built from >40 distinct structural gene products."
      },
      "es": {
        "pop": "Mide unos 200 nanómetros de altura: una jeringa con aspecto de módulo lunar construida con proteínas.",
        "blueprint": "Chasis modular de 200 nm: inyector hipodérmico proteico accionado por resorte sin gasto de ATP.",
        "scientific": "Altura axial de ~200 nm (~100 MDa de masa) ensamblada a partir de >40 productos génicos distintos."
      }
    },
    "t4.ch0.intro.03": {
      "en": {
        "pop": "We have cut open its head, tail and the bacterial envelope below.",
        "blueprint": "Axial cross-section cutaway exposing capsid vault, contractile actuator, and host hull layers.",
        "scientific": "Longitudinal cutaway revealing the prolate head, coaxial gp18/gp19 tail, and Gram-negative envelope."
      },
      "es": {
        "pop": "Hemos abierto en corte su cabeza, su cola y la envoltura bacteriana inferior.",
        "blueprint": "Sección axial en corte que expone la bóveda, el actuador contráctil y las tres capas del huésped.",
        "scientific": "Corte longitudinal de la cabeza prolata, la cola coaxial gp18/gp19 y la envoltura gramnegativa."
      }
    },
    "t4.ch0.intro.04": {
      "en": {
        "pop": "Every major part is drawn from real atomic coordinates at one scale.",
        "blueprint": "1:1 physical CAD assembly constructed directly from experimental atomic coordinate datasets.",
        "scientific": "All sub-assemblies are rendered at uniform scale (1 unit = 10 nm) from cryo-EM and X-ray PDB models."
      },
      "es": {
        "pop": "Cada parte principal está trazada a partir de coordenadas atómicas reales a una misma escala.",
        "blueprint": "Ensamblaje CAD físico 1:1 construido directamente desde coordenadas atómicas experimentales.",
        "scientific": "Todos los subensamblajes se representan a escala uniforme (1 unidad = 10 nm) desde modelos PDB."
      }
    },
    "t4.ch0.intro.05": {
      "en": {
        "pop": "Press Space to pause, or Explore to look around on your own.",
        "blueprint": "Press Space to pause sequence playback, or activate Explore for manual orbital inspection.",
        "scientific": "Press Space to halt the infection timeline, or switch to Explore to inspect individual PDB modules."
      },
      "es": {
        "pop": "Pulsa Espacio para pausar, o Explorar para recorrerlo por tu cuenta.",
        "blueprint": "Pulsa Espacio para pausar la secuencia, o activa Explorar para inspección orbital manual.",
        "scientific": "Pulsa Espacio para detener la cinética de infección, o elige Explorar para examinar módulos PDB."
      }
    },
    "t4.ch1.capsid.01": {
      "en": {
        "pop": "The elongated head is the [[capsid|capsid]], 115 by 85 nanometres across.",
        "blueprint": "Upper payload tank: the elongated [[capsid|capsid]] pressure vessel spans 115 nm by 85 nm.",
        "scientific": "Prolate icosahedral [[capsid|capsid]] (115 × 85 nm; T_end = 13 laevo, Q = 20; cryo-EM PDB 5VF3)."
      },
      "es": {
        "pop": "La cabeza alargada es la [[cápside|capsid]], de 115 por 85 nanómetros.",
        "blueprint": "Tanque superior de carga: la [[cápside|capsid]] prolata de alta presión mide 115 por 85 nm.",
        "scientific": "[[Cápside|capsid]] icosaédrica prolata (115 × 85 nm; simetría T_end = 13 laevo, Q = 20; PDB 5VF3)."
      }
    },
    "t4.ch1.capsid.02": {
      "en": {
        "pop": "Its wall is tiled by 155 hexamers of major capsid protein gp23*.",
        "blueprint": "Shell plating: 155 hexameric gp23* tiles interlock into a continuous load-bearing lattice.",
        "scientific": "Facet walls comprise 930 cleaved gp23* subunits (48.7 kDa, HK97 fold) arranged in 155 hexamers."
      },
      "es": {
        "pop": "Su pared está recubierta por 155 hexámeros de la proteína principal de la cápside gp23*.",
        "blueprint": "Blindaje estructural: 155 losetas hexaméricas gp23* forman una red continua de carga.",
        "scientific": "Las facetas reúnen 930 monómeros maduros gp23* (48,7 kDa, plegamiento HK97) en 155 hexámeros."
      }
    },
    "t4.ch1.capsid.03": {
      "en": {
        "pop": "DNA coils inside at huge pressure—far above a champagne bottle—pre-loading force for injection.",
        "blueprint": "Rated up to ~60–500 atm peak internal stress, the shell stores hydraulic energy for ejection.",
        "scientific": "Confinement of 169 kbp dsDNA generates ~60 atm osmotic pressure (up to ~500 atm local bending stress)."
      },
      "es": {
        "pop": "El ADN se enrolla dentro a enorme presión —mucho mayor que en champán—, lista para la inyección.",
        "blueprint": "Capaz de resistir ~60–500 atm de tensión pico, la carcasa almacena energía hidráulica de disparo.",
        "scientific": "El confinamiento de 169 kpb genera ~60 atm de presión osmótica (hasta ~500 atm de tensión local)."
      }
    },
    "t4.ch1.soc.01": {
      "en": {
        "pop": "Up close, [[Soc clamp trimers|soc]] strap neighbouring gp23* hexamers together.",
        "blueprint": "External hoop reinforcement: 810 [[Soc clamp trimers|soc]] bridge seams between gp23* hexamers.",
        "scientific": "At quasi-three-fold axes, 810 copies of 9.1 kDa Soc form [[Soc clamp trimers|soc]] across gp23* rims."
      },
      "es": {
        "pop": "De cerca, los [[trímeros de abrazadera Soc|soc]] sujetan entre sí los hexámeros gp23* vecinos.",
        "blueprint": "Refuerzo perimetral externo: 810 subunidades en [[trímeros de abrazadera Soc|soc]] sellan las juntas.",
        "scientific": "En los ejes cuasi-ternarios, [[trímeros de abrazadera Soc|soc]] (9,1 kDa, 810 copias) enlazan gp23*."
      }
    },
    "t4.ch1.soc.02": {
      "en": {
        "pop": "They lock the shell against extreme pH and osmotic shock.",
        "blueprint": "Clamp bracing hardens the vessel against alkaline pH (up to 10.6), heat, and osmotic shock.",
        "scientific": "Soc ligation elevates capsid thermal melting temperature by ~6 °C and stabilizes against pH 10.6."
      },
      "es": {
        "pop": "Refuerzan la cubierta frente al pH extremo y al choque osmótico.",
        "blueprint": "El arriostramiento Soc protege el tanque frente a pH alcalino (10,6), calor y choque osmótico.",
        "scientific": "La unión de Soc eleva la temperatura de desnaturalización ~6 °C y estabiliza la cápside a pH 10,6."
      }
    },
    "t4.ch1.soc.03": {
      "en": {
        "pop": "A single [[Hoc spike|soc]] sticks out from the centre of each hexamer.",
        "blueprint": "Surface tether mast: one central [[Hoc spike|soc]] projects outward from each gp23* hexamer.",
        "scientific": "One 40.4 kDa Ig-like [[Hoc spike|soc]] (155 total copies) protrudes ~18 nm from each gp23* hexamer."
      },
      "es": {
        "pop": "Una única [[espícula Hoc|soc]] sobresale del centro de cada hexámero.",
        "blueprint": "Mástil superficial de anclaje: una [[espícula Hoc|soc]] sobresale del eje de cada hexámero gp23*.",
        "scientific": "Una [[espícula Hoc|soc]] tipo inmunoglobulina (40,4 kDa; 155 copias) emerge de cada hexámero gp23*."
      }
    },
    "t4.ch1.vertex.01": {
      "en": {
        "pop": "Flat hexagons alone cannot close a sphere or a prolate dome.",
        "blueprint": "Euler geometric constraint: hexagonal tiling requires twelve 5-fold disclinations to close.",
        "scientific": "By Euler’s polyhedron theorem, closing a hexagonal lattice requires exactly 12 five-fold vertices."
      },
      "es": {
        "pop": "Los hexágonos planos por sí solos no pueden cerrar una esfera ni una cúpula prolata.",
        "blueprint": "Restricción geométrica de Euler: una red hexagonal exige doce vértices pentagonales para cerrarse.",
        "scientific": "Por el teorema de Euler, cerrar una red icosaédrica hexagonal requiere exactamente 12 pentámeros."
      }
    },
    "t4.ch1.vertex.02": {
      "en": {
        "pop": "Eleven corners are sealed by five-fold [[gp24* pentamers|vertex]].",
        "blueprint": "Corner keystones: eleven high-curvature vertices are sealed by five-fold [[gp24* pentamers|vertex]].",
        "scientific": "Eleven vertices carry homopentameric [[gp24* pentamers|vertex]] (5 × 46 kDa, HK97 fold; PDB 5VF3)."
      },
      "es": {
        "pop": "Once esquinas están selladas por [[pentámeros gp24*|vertex]] de simetría quíntuple.",
        "blueprint": "Piedras angulares: once vértices de alta curvatura se cierran con [[pentámeros gp24*|vertex]].",
        "scientific": "Once vértices alojan [[pentámeros gp24*|vertex]] homopentaméricos (5 × 46 kDa, PDB 5VF3)."
      }
    },
    "t4.ch1.dna.01": {
      "en": {
        "pop": "Inside coils 169 kilobase pairs of [[double-stranded DNA|dna]].",
        "blueprint": "Compressed payload: 169 kbp of coaxially spooled [[double-stranded DNA|dna]] fills the vault.",
        "scientific": "Encapsidated 168,903 bp linear [[double-stranded DNA|dna]] (~300 genes) wound in ~2.5 nm coaxial layers."
      },
      "es": {
        "pop": "En el interior se enrollan 169 kilopares de bases de [[ADN bicatenario|dna]].",
        "blueprint": "Carga útil comprimida: 169 kpb de [[ADN bicatenario|dna]] bobinado coaxialmente llenan la cámara.",
        "scientific": "Genoma lineal de 168.903 pb de [[ADN bicatenario|dna]] (~300 genes) dispuesto en capas a ~2,5 nm."
      }
    },
    "t4.ch1.dna.02": {
      "en": {
        "pop": "Stretched out it is 57 micrometres long, 280 times the virion's height.",
        "blueprint": "280:1 linear-to-axial packing ratio condenses a 57 µm contour inside a 115 nm chamber.",
        "scientific": "B-form contour length 57.4 µm (287× virion height) packed to ~500 mg/mL quasi-crystalline density."
      },
      "es": {
        "pop": "Estirado mide 57 micrómetros de largo, 280 veces la altura del virión.",
        "blueprint": "Relación de compresión 280:1 que empaqueta 57 µm de hebra dentro de una cámara de 115 nm.",
        "scientific": "Longitud de contorno de 57,4 µm (287× el virión) empaquetada a densidad cuasicristalina (~500 mg/mL)."
      }
    },
    "t4.ch1.dna.03": {
      "en": {
        "pop": "Modified cytosines protect this genome from bacterial restriction enzymes.",
        "blueprint": "Anti-restriction encryption: glucosylated hydroxymethylcytosines foil host endonuclease firewalls.",
        "scientific": "Glucosylated 5-hydroxymethylcytosines (gh-dCMP) sterically block host restriction endonucleases."
      },
      "es": {
        "pop": "Las citosinas modificadas protegen este genoma de las enzimas de restricción bacterianas.",
        "blueprint": "Cifrado antirrestricción: las hidroximetilcitosinas glucosiladas burlan las nucleasas del huésped.",
        "scientific": "La 5-hidroximetilcitosina glucosilada (gh-dCMP) bloquea estéricamente las endonucleasas de restricción."
      }
    },
    "t4.ch1.core.01": {
      "en": {
        "pop": "At the centre of the DNA spool sits the [[internal protein core|core]].",
        "blueprint": "Central mandrel: the [[internal protein core|core]] scaffolds prohead assembly and stores effectors.",
        "scientific": "Axial [[internal protein core|core]] composed of processed gp22 scaffold peptides and ~1,000 IP copies."
      },
      "es": {
        "pop": "En el centro de la bobina de ADN se ubica el [[núcleo proteico interno|core]].",
        "blueprint": "Mandril axial: el [[núcleo proteico interno|core]] guía el ensamblaje y aloja efectores listos.",
        "scientific": "[[Núcleo proteico interno|core]] formado por péptidos del andamio gp22 y ~1.000 proteínas IP*."
      }
    },
    "t4.ch1.core.02": {
      "en": {
        "pop": "Its IPI* defense proteins shoot into the host right alongside the DNA.",
        "blueprint": "Co-injected countermeasures: cleaved IPI* peptides enter first to disable host GmrSD nucleases.",
        "scientific": "Proteolytically processed IPI* (~10 kDa, ~360 copies) co-ejects to inhibit host GmrSD endonucleases."
      },
      "es": {
        "pop": "Sus proteínas de defensa IPI* se disparan hacia el huésped junto con el ADN.",
        "blueprint": "Contramedidas coinyectadas: los péptidos IPI* entran primero e inhiben nucleasas GmrSD del huésped.",
        "scientific": "La proteína procesada IPI* (~10 kDa, ~360 copias) se coinyecta para inhibir nucleasas GmrSD."
      }
    },
    "t4.ch1.portal.01": {
      "en": {
        "pop": "The twelfth vertex at the base holds the 12-subunit [[gp20 portal|portal]].",
        "blueprint": "Basal symmetry adapter: the dodecameric [[gp20 portal|portal]] bridges 5-fold head to 6-fold tail.",
        "scientific": "Twelfth vertex houses the 12-subunit [[gp20 portal|portal]] dodecamer (12 × 61 kDa; cryo-EM PDB 3JA7)."
      },
      "es": {
        "pop": "El duodécimo vértice en la base aloja el [[portal gp20|portal]] de 12 subunidades.",
        "blueprint": "Adaptador basal de simetría: el [[portal gp20|portal]] conecta la cabeza orden 5 con la cola orden 6.",
        "scientific": "El duodécimo vértice aloja el dodecámero del [[portal gp20|portal]] (12 × 61 kDa; crio-ME PDB 3JA7)."
      }
    },
    "t4.ch1.portal.02": {
      "en": {
        "pop": "During assembly, an ATP motor docks here to pump the genome inside.",
        "blueprint": "Charging phase: transient pentameric gp17 ATPase docks here to pump 169 kbp into the head.",
        "scientific": "During packaging, pentameric gp17 terminase ATPase translocates dsDNA inward at up to ~2,000 bp/s."
      },
      "es": {
        "pop": "Durante el ensamblaje, un motor de ATP se acopla aquí para bombear el genoma al interior.",
        "blueprint": "Fase de carga: la ATPasa pentamérica gp17 se acopla temporalmente para bombear los 169 kpb.",
        "scientific": "Durante la maduración, la terminasa ATPasa gp17 introduce el ADNbc hasta ~2.000 pb/s contra presión."
      }
    },
    "t4.ch1.portal.03": {
      "en": {
        "pop": "Once full, it acts as a one-way valve into the tail.",
        "blueprint": "Check-valve latch: gp13/gp14 neck rings stopper the 3.5 nm bore until tail contraction opens it.",
        "scientific": "Tunnel loops and gp13/gp14 neck proteins seal the ~3.5 nm lumen until baseplate triggering."
      },
      "es": {
        "pop": "Una vez lleno, actúa como una válvula unidireccional hacia la cola.",
        "blueprint": "Válvula de retención: los anillos gp13/gp14 taponan el paso de 3,5 nm hasta el disparo caudal.",
        "scientific": "Los bucles internos y el cuello gp13/gp14 obturan el canal de ~3,5 nm hasta la contracción."
      }
    },
    "t4.ch2.collar.01": {
      "en": {
        "pop": "Below the portal sit the neck rings and the [[collar with six whiskers|collar]].",
        "blueprint": "Upper neck assembly: gp13/gp14/gp15 connector rings mount the [[collar with six whiskers|collar]].",
        "scientific": "Beneath gp20 sit hexameric gp13/gp14/gp15 rings and the [[collar with six whiskers|collar]] (gpWac)."
      },
      "es": {
        "pop": "Debajo del portal se sitúan los anillos del cuello y el [[collar con seis bigotes|collar]].",
        "blueprint": "Ensamblaje cervical: los anillos conectores gp13–gp15 portan el [[collar con seis bigotes|collar]].",
        "scientific": "Bajo gp20 se sitúan los anillos gp13/gp14/gp15 y el [[collar con seis bigotes|collar]] de fibritina."
      }
    },
    "t4.ch2.collar.02": {
      "en": {
        "pop": "Built of fibritin (gpWac), the whiskers fold the long tail fibers inward.",
        "blueprint": "Environmental safety interlock: trimeric gpWac whiskers stow long tail fibers in bad conditions.",
        "scientific": "Trimeric coiled-coil fibritin (gpWac, ~53 nm) retracts long tail fibers under low pH or ionic strength."
      },
      "es": {
        "pop": "Construidos de fibritina (gpWac), los bigotes pliegan las fibras largas de la cola hacia adentro.",
        "blueprint": "Seguro ambiental: los bigotes triméricos gpWac mantienen plegadas las fibras en medios hostiles.",
        "scientific": "La fibritina trimérica en superhélice (gpWac, ~53 nm) retrae las fibras largas a bajo pH o salinidad."
      }
    },
    "t4.ch2.collar.03": {
      "en": {
        "pop": "When conditions favour infection, they release the fibers to search.",
        "blueprint": "Deployment release: favorable temperature and ionic strength unlatch the fibers for target scan.",
        "scientific": "At physiological ionic strength and 37 °C, gpWac releases the six fibers into extended search state."
      },
      "es": {
        "pop": "Cuando las condiciones favorecen la infección, liberan las fibras para buscar un huésped.",
        "blueprint": "Despliegue activo: la temperatura y salinidad óptimas liberan las fibras para rastrear presas.",
        "scientific": "A fuerza iónica fisiológica y 37 °C, gpWac libera las seis fibras hacia su conformación exploradora."
      }
    },
    "t4.ch2.sheath.01": {
      "en": {
        "pop": "The outer [[contractile sheath|sheath]] stacks 24 rings of six gp18 proteins.",
        "blueprint": "Outer linear actuator: 24 hexameric gp18 rings stack to build the [[contractile sheath|sheath]].",
        "scientific": "Extended [[contractile sheath|sheath]] (92.5 × 24 nm; PDB 3J2M) of 144 gp18 subunits in 24 hexamers."
      },
      "es": {
        "pop": "La [[vaina contráctil|sheath]] externa apila 24 anillos de seis proteínas gp18.",
        "blueprint": "Actuador lineal externo: 24 anillos hexaméricos gp18 conforman la [[vaina contráctil|sheath]].",
        "scientific": "[[Vaina contráctil|sheath]] extendida (92,5 × 24 nm; PDB 3J2M) de 144 subunidades gp18 en 24 anillos."
      }
    },
    "t4.ch2.sheath.02": {
      "en": {
        "pop": "With zero ATP on board, this sleeve comes pre-cocked from the host factory like a spring syringe.",
        "blueprint": "Pre-loaded metastable spring: conformational enthalpy is locked in during viral morphogenesis.",
        "scientific": "Polymerized in a high-energy metastable state storing ~25,000 kJ/mol total conformational enthalpy."
      },
      "es": {
        "pop": "Sin llevar ATP propio, esta funda sale precomprimida de fábrica como una jeringa de resorte.",
        "blueprint": "Resorte metaestable precargado: almacena energía elástica durante la morfogénesis sin requerir ATP.",
        "scientific": "Polimeriza en estado metaestable de alta energía acumulando ~25.000 kJ/mol de entalpía total."
      }
    },
    "t4.ch2.sheath.03": {
      "en": {
        "pop": "When triggered, its rings slide and twist, shrinking the sheath by half.",
        "blueprint": "Actuation stroke: hexamers rotate and interdigitate, collapsing sheath length from 92.5 to 42 nm.",
        "scientific": "β-sheet-linked gp18 domains rotate ~45°, shrinking axial rise from 4.06 to 1.64 nm (33 nm wide)."
      },
      "es": {
        "pop": "Al dispararse, sus anillos se deslizan y giran, acortando la vaina a la mitad.",
        "blueprint": "Carrera de disparo: los hexámeros rotan y se interdigitan, acortando la vaina de 92,5 a 42 nm.",
        "scientific": "Los dominios gp18 rotan ~45°, reduciendo el paso axial de 4,06 a 1,64 nm y ensanchándose a 33 nm."
      }
    },
    "t4.ch2.tube.01": {
      "en": {
        "pop": "Inside the sheath runs the rigid [[gp19 inner tail tube|tube]].",
        "blueprint": "Coaxial piercing shaft: inside the sheath sits the non-contractile [[gp19 inner tail tube|tube]].",
        "scientific": "Internal [[gp19 inner tail tube|tube]] (92.5 × 9.0 nm; PDB 5W5F) of 24 stacked gp19 hexamers."
      },
      "es": {
        "pop": "Por dentro de la vaina corre el rígido [[tubo interno de la cola gp19|tube]].",
        "blueprint": "Eje perforador coaxial: dentro de la vaina viaja el [[tubo interno de la cola gp19|tube]] rígido.",
        "scientific": "[[Tubo interno de la cola gp19|tube]] (92,5 × 9,0 nm; PDB 5W5F) formado por 24 hexámeros apilados."
      }
    },
    "t4.ch2.tube.02": {
      "en": {
        "pop": "Sheath contraction drives this 9-nanometre cylinder through the cell wall.",
        "blueprint": "50 nm axial stroke drives this 9 nm outer-diameter cylinder across the breached host envelope.",
        "scientific": "Sheath contraction translates the 9 nm gp19 β-barrel cylinder ~50 nm across the outer wall and periplasm."
      },
      "es": {
        "pop": "La contracción de la vaina impulsa este cilindro de 9 nanómetros a través de la pared celular.",
        "blueprint": "Un avance axial de ~50 nm hunde este cilindro de 9 nm a través de la envoltura perforada.",
        "scientific": "La contracción desplaza ~50 nm el cilindro β gp19 de 9 nm a través de la membrana externa y mureína."
      }
    },
    "t4.ch2.tube.03": {
      "en": {
        "pop": "Its smooth 4-nanometre bore is the barrel through which [[DNA|dna]] fires.",
        "blueprint": "Low-friction 4 nm electronegative bore guides pressurized [[DNA|dna]] single-file into the host.",
        "scientific": "Electronegative 4.0 nm lumen repels polyanionic [[DNA|dna]] phosphates for rapid translocation."
      },
      "es": {
        "pop": "Su conducto liso de 4 nanómetros es el cañón por el cual se dispara el [[ADN|dna]].",
        "blueprint": "Su conducto electronegativo de 4 nm guía el [[ADN|dna]] sin fricción hacia la membrana interna.",
        "scientific": "El lumen electronegativo de 4,0 nm repele el esqueleto fosfato del [[ADN|dna]] evitando atascos."
      }
    },
    "t4.ch3.ltf.01": {
      "en": {
        "pop": "Six hinged [[long tail fibers|ltf]] span 145 nanometres as sensor legs.",
        "blueprint": "Primary target sensors: six hinged 145 nm [[long tail fibers|ltf]] scan the surrounding surface.",
        "scientific": "Six articulated 145 nm [[long tail fibers|ltf]] built from trimeric gp34, gp35 knee, gp36, and gp37."
      },
      "es": {
        "pop": "Seis [[fibras largas de la cola|ltf]] articuladas se extienden 145 nanómetros como patas sensoras.",
        "blueprint": "Sensores primarios: seis [[fibras largas de la cola|ltf]] articuladas de 145 nm exploran la presa.",
        "scientific": "Seis [[fibras largas de la cola|ltf]] de 145 nm compuestas por gp34, rótula gp35, gp36 y punta gp37."
      }
    },
    "t4.ch3.ltf.02": {
      "en": {
        "pop": "Like lunar-lander feelers testing ground, they step reversibly until gp37 tips match [[OmpF porins|porin]].",
        "blueprint": "Reversible surface walk: distal gp37 tips sample LPS until locking onto [[OmpF porins|porin]].",
        "scientific": "Fe²⁺-coordinated gp37 tips (PDB 2XGF) reversibly probe LPS and dock onto trimeric [[OmpF porins|porin]]."
      },
      "es": {
        "pop": "Como patas de sonda tanteando terreno, pisan de modo reversible hasta hallar [[porinas OmpF|porin]].",
        "blueprint": "Rastreo reversible: las puntas distales gp37 tantean el LPS hasta fijar [[porinas OmpF|porin]].",
        "scientific": "Las puntas gp37 con 7 Fe²⁺ (PDB 2XGF) exploran el LPS y se acoplan a [[porinas OmpF|porin]] triméricas."
      }
    },
    "t4.ch3.ltf.03": {
      "en": {
        "pop": "Binding sends a mechanical tug straight up to the baseplate.",
        "blueprint": "Mechanical lever transmission: multi-fiber engagement applies torque directly to baseplate sockets.",
        "scientific": "Simultaneous binding of ≥3 fibers transmits lever tension through gp9/gp7 sockets to the baseplate."
      },
      "es": {
        "pop": "La unión envía un tirón mecánico directo hacia la placa basal.",
        "blueprint": "Transmisión por palanca: el anclaje de varias fibras aplica par mecánico sobre los zócalos basales.",
        "scientific": "El acople simultáneo de ≥3 fibras transmite tensión mecánica vía gp9/gp7 hacia la placa basal."
      }
    },
    "t4.ch3.baseplate.01": {
      "en": {
        "pop": "The [[hexagonal baseplate|baseplate]] is the nerve centre of the phage.",
        "blueprint": "Central fire-control hub: the [[hexagonal baseplate|baseplate]] integrates fiber inputs to gate firing.",
        "scientific": "Six-fold [[hexagonal baseplate|baseplate]] (~52 nm, ~6.5 MDa; ~150 subunits of 15 proteins, PDB 5IV5)."
      },
      "es": {
        "pop": "La [[placa basal hexagonal|baseplate]] es el centro nervioso del fago.",
        "blueprint": "Centro de control de tiro: la [[placa basal hexagonal|baseplate]] integra tirones y autoriza el disparo.",
        "scientific": "[[Placa basal hexagonal|baseplate]] (~52 nm, ~6,5 MDa; ~150 subunidades de 15 proteínas, PDB 5IV5)."
      }
    },
    "t4.ch3.baseplate.02": {
      "en": {
        "pop": "Pulling on the fibers flips its six wedges from a dome into a flat star.",
        "blueprint": "Bistable mechanical latch: peripheral pull snaps six wedges from a 52 nm dome into a 61 nm star.",
        "scientific": "Cooperative wedge rearrangement switches the ~52 nm dome (PDB 5IV5) into a ~61 nm star (PDB 5IV7)."
      },
      "es": {
        "pop": "El tirón de las fibras transforma sus seis cuñas de una cúpula a una estrella plana.",
        "blueprint": "Pestillo mecánico biestable: la tracción conmuta seis cuñas de cúpula (52 nm) a estrella plana (61 nm).",
        "scientific": "La reorganización cooperativa transforma la cúpula de ~52 nm (5IV5) en estrella de ~61 nm (5IV7)."
      }
    },
    "t4.ch3.baseplate.03": {
      "en": {
        "pop": "That conformational snap unleashes the contractile sheath above.",
        "blueprint": "Trigger propagation: star expansion releases gp25/gp48/gp54 contacts, firing the gp18 sheath.",
        "scientific": "Baseplate expansion unlatches the gp25–gp18 interface, initiating a rapid upward contraction wave."
      },
      "es": {
        "pop": "Ese chasquido conformacional libera la vaina contráctil situada arriba.",
        "blueprint": "Propagación de disparo: la apertura estelar libera el seguro gp25 y activa la vaina gp18.",
        "scientific": "La expansión basal desbloquea la interfaz gp25–gp18, propagando hacia arriba la onda contráctil."
      }
    },
    "t4.ch3.stf.01": {
      "en": {
        "pop": "As the baseplate opens, six [[short tail fibers (gp12)|stf]] unfold.",
        "blueprint": "Secondary anchor deployment: wedge opening rotates six [[short tail fibers (gp12)|stf]] 180° down.",
        "scientific": "Dome-to-star transition unfolds six homotrimeric [[short tail fibers (gp12)|stf]] (~34 nm; PDB 1OCY)."
      },
      "es": {
        "pop": "Al abrirse la placa basal, seis [[fibras cortas de la cola (gp12)|stf]] se despliegan.",
        "blueprint": "Despliegue de anclaje secundario: giran 180° seis [[fibras cortas de la cola (gp12)|stf]].",
        "scientific": "La transición cúpula-estrella despliega seis homotrímeros [[fibras cortas de la cola (gp12)|stf]] (1OCY)."
      }
    },
    "t4.ch3.stf.02": {
      "en": {
        "pop": "Their zinc-braced heads clamp irreversibly onto host [[LPS sugars|om]].",
        "blueprint": "Permanent clampdown: Zn²⁺-braced C-terminal heads lock onto inner-core [[LPS sugars|om]].",
        "scientific": "Zn²⁺-stabilized gp12 heads bind inner-core heptose [[LPS sugars|om]] with sub-nanomolar avidity."
      },
      "es": {
        "pop": "Sus cabezas reforzadas con zinc se aferran irreversiblemente a los [[azúcares LPS|om]] del huésped.",
        "blueprint": "Fijación irreversible: los cabezales con Zn²⁺ se empernan al núcleo de los [[azúcares LPS|om]].",
        "scientific": "Los cabezales gp12 con Zn²⁺ axial fijan heptosas de [[azúcares LPS|om]] con avidez subnanomolar."
      }
    },
    "t4.ch3.stf.03": {
      "en": {
        "pop": "Now the phage is bolted down against the recoil of puncture.",
        "blueprint": "Recoil arrest: six-point surface clamping absorbs Newton-third-law thrust during wall puncture.",
        "scientific": "Hexavalent LPS anchorage counters axial puncture recoil as the gp19/gp5 spike breaches the outer wall."
      },
      "es": {
        "pop": "Ahora el fago queda firmemente anclado frente al retroceso de la perforación.",
        "blueprint": "Freno antirretroceso: el anclaje séxtuple absorbe la reacción axial durante la perforación.",
        "scientific": "El anclaje hexavalente al LPS contrarresta el retroceso mecánico al penetrar la aguja gp19/gp5."
      }
    },
    "t4.ch3.needle.01": {
      "en": {
        "pop": "At the centre sits the [[gp27–gp5 puncturing needle|needle]], sharp as a lance.",
        "blueprint": "Armor-piercing tip: central hub mounts the [[gp27–gp5 puncturing needle|needle]] assembly.",
        "scientific": "Central heterotrimeric [[gp27–gp5 puncturing needle|needle]] ((gp27)₃–(gp5)₃, ~19 nm; PDB 1K28)."
      },
      "es": {
        "pop": "En el centro se sitúa la [[aguja perforadora gp27–gp5|needle]], afilada como una lanza.",
        "blueprint": "Cabezal perforante: el eje central porta la [[aguja perforadora gp27–gp5|needle]].",
        "scientific": "Complejo heterotrimérico central [[aguja perforadora gp27–gp5|needle]] ((gp27)₃–(gp5)₃; PDB 1K28)."
      }
    },
    "t4.ch3.needle.02": {
      "en": {
        "pop": "Its triple β-helix tip pierces the outer membrane.",
        "blueprint": "Kinetic breach: sheath thrust drives the rigid triple-stranded β-helix prism across the outer hull.",
        "scientific": "C-terminal gp5 equilateral triple-β-helix + gp5.4 PAAR tip mechanically breach the LPS bilayer."
      },
      "es": {
        "pop": "Su punta de triple hélice β atraviesa la membrana externa.",
        "blueprint": "Brecha cinética: el empuje caudal clava el prisma rígido de triple hélice β en la membrana externa.",
        "scientific": "El prisma C-terminal en triple hélice β de gp5 y la punta gp5.4 PAAR perforan la bicapa de LPS."
      }
    },
    "t4.ch3.needle.03": {
      "en": {
        "pop": "Three T4 lysozyme blades then chew a hole through the [[peptidoglycan|pg]].",
        "blueprint": "Enzymatic clearance: three T4 lysozyme modules hydrolyze periplasmic [[peptidoglycan|pg]] mesh.",
        "scientific": "Three GH24 muramidase domains on gp5 cleave β-(1→4) bonds in [[peptidoglycan|pg]] to clear passage."
      },
      "es": {
        "pop": "Tres cuchillas de lisozima T4 abren entonces un orificio en el [[peptidoglicano|pg]].",
        "blueprint": "Despeje enzimático: tres dominios lisozima T4 hidrolizan la red periplásmica de [[peptidoglicano|pg]].",
        "scientific": "Tres dominios muramidasa GH24 de gp5 escinden enlaces β-(1→4) del [[peptidoglicano|pg]]."
      }
    },
    "t4.ch4.envelope.01": {
      "en": {
        "pop": "E. coli defends itself with a three-layered cell envelope.",
        "blueprint": "Target defense stack: E. coli relies on a three-tier Gram-negative perimeter under assault.",
        "scientific": "Host E. coli ~35 nm tripartite Gram-negative cell envelope undergoing localized mechanical breach."
      },
      "es": {
        "pop": "E. coli se defiende con una envoltura celular de tres capas.",
        "blueprint": "Defensa multicapa del objetivo: el perímetro gramnegativo de tres niveles recibe el impacto.",
        "scientific": "Envoltura celular tripartita (~35 nm) de E. coli sometida a perforación mecánica y lisis local."
      }
    },
    "t4.ch4.envelope.02": {
      "en": {
        "pop": "Outside is the [[LPS outer membrane|om]] studded with [[OmpF porins|porin]].",
        "blueprint": "Compromised outer tier: [[LPS outer membrane|om]] and [[OmpF porins|porin]] serve as phage docking keys.",
        "scientific": "Asymmetric [[LPS outer membrane|om]] and trimeric [[OmpF porins|porin]] exploited as dual phage receptors."
      },
      "es": {
        "pop": "Por fuera está la [[membrana externa de LPS|om]] tachonada de [[porinas OmpF|porin]].",
        "blueprint": "Nivel externo vulnerado: [[membrana externa de LPS|om]] y [[porinas OmpF|porin]] actúan como anclajes.",
        "scientific": "[[Membrana externa de LPS|om]] y [[porinas OmpF|porin]] explotadas como receptores secuenciales."
      }
    },
    "t4.ch4.envelope.03": {
      "en": {
        "pop": "Beneath lie the [[peptidoglycan wall|pg]] and the [[inner membrane|im]].",
        "blueprint": "Inner breach: crossing digested [[peptidoglycan wall|pg]], gp19 docks at the [[inner membrane|im]].",
        "scientific": "Crossing lysed [[peptidoglycan wall|pg]], the gp19 conduit engages the phospholipid [[inner membrane|im]]."
      },
      "es": {
        "pop": "Debajo yacen la [[pared de peptidoglicano|pg]] y la [[membrana interna|im]].",
        "blueprint": "Brecha interna: tras cruzar la [[pared de peptidoglicano|pg]], gp19 contacta la [[membrana interna|im]].",
        "scientific": "Atravesada la [[pared de peptidoglicano|pg]], el tubo gp19 acopla un canal en la [[membrana interna|im]]."
      }
    },
    "t4.ch4.rnap.01": {
      "en": {
        "pop": "Once the tube reaches the inner membrane, [[viral DNA|dna]] jets into the cell.",
        "blueprint": "Payload injection: stored capsid pressure drives 169 kbp [[viral DNA|dna]] into the host cytosol.",
        "scientific": "Translocation of 168.9 kbp [[viral DNA|dna]] across the inner membrane proceeds at ~3,000–4,000 bp/s."
      },
      "es": {
        "pop": "Una vez que el tubo alcanza la membrana interna, el [[ADN viral|dna]] se inyecta en la célula.",
        "blueprint": "Inyección de carga: la presión interna impulsa 169 kpb de [[ADN viral|dna]] hacia el citosol.",
        "scientific": "La translocación de los 168,9 kpb de [[ADN viral|dna]] cruza la membrana interna a ~3.000–4.000 pb/s."
      }
    },
    "t4.ch4.rnap.02": {
      "en": {
        "pop": "Within seconds it overwrites the factory OS, hijacking [[RNA polymerase|rnap]] to run viral code.",
        "blueprint": "Control-plane takeover: strong early promoters capture host [[RNA polymerase|rnap]] within seconds.",
        "scientific": "Injected Alt ADP-ribosyltransferase and early promoters redirect host σ70 [[RNA polymerase|rnap]] (4YG2)."
      },
      "es": {
        "pop": "En segundos reescribe el sistema de la fábrica y secuestra la [[ARN polimerasa|rnap]] para su código.",
        "blueprint": "Secuestro de control: promotores tempranos fuertes capturan la [[ARN polimerasa|rnap]] del huésped.",
        "scientific": "La ADP-ribosilación por Alt y promotores tempranos redirigen la [[ARN polimerasa|rnap]] σ70 (4YG2)."
      }
    },
    "t4.ch4.ribosome.01": {
      "en": {
        "pop": "Host [[70S ribosomes|ribosome]] translate that viral mRNA into phage proteins.",
        "blueprint": "Factory reprogramming: host [[70S ribosomes|ribosome]] translate viral mRNAs into progeny hardware.",
        "scientific": "Host [[70S ribosomes|ribosome]] (PDB 4YBB) translate early, middle, and late T4 transcripts (~20 aa/s)."
      },
      "es": {
        "pop": "Los [[ribosomas 70S|ribosome]] del huésped traducen ese ARNm viral en proteínas del fago.",
        "blueprint": "Reprogramación fabril: los [[ribosomas 70S|ribosome]] traducen ARNm viral en chasis nuevos.",
        "scientific": "Los [[ribosomas 70S|ribosome]] (PDB 4YBB) traducen cascadas tempranas, medias y tardías de T4."
      }
    },
    "t4.ch4.ribosome.02": {
      "en": {
        "pop": "In 25 minutes at 37 °C, the cell bursts, releasing over 100 new phages.",
        "blueprint": "Lytic cycle completion: holin–endolysin breach at 25 min (37 °C) releases ~100–200 assembled virions.",
        "scientific": "At ~25 min (37 °C), gpT holin and gpE lysozyme lyse the envelope, releasing a burst of ~100–200 virions."
      },
      "es": {
        "pop": "En 25 minutos a 37 °C, la célula estalla y libera más de 100 fagos nuevos.",
        "blueprint": "Fin del ciclo lítico: a los 25 min (37 °C), holina y endolisina liberan ~100–200 viriones completos.",
        "scientific": "A ~25 min (37 °C), la holina gpT y la endolisina gpE lisan la célula liberando ~100–200 viriones."
      }
    },
    "t4.ch5.flows.01": {
      "en": {
        "pop": "Watch the whole infection cascade unfold in real time.",
        "blueprint": "Full state-machine execution: observe the end-to-end mechanochemical cascade in real time.",
        "scientific": "Real-time kinetic visualization of receptor binding, sheath contraction, and genome transfer."
      },
      "es": {
        "pop": "Observa cómo se desarrolla toda la cascada de infección en tiempo real.",
        "blueprint": "Ejecución completa de estados: observa en vivo toda la cascada mecanicoquímica de infección.",
        "scientific": "Visualización cinética en tiempo real de adsorción, contracción caudal y transferencia génica."
      }
    },
    "t4.ch5.flows.02": {
      "en": {
        "pop": "Each molecular signal triggers the next step from tip to cytoplasm.",
        "blueprint": "Deterministic relay pipeline: each mechanical or enzymatic stage gates the downstream event.",
        "scientific": "Allosteric receptor signals couple sequentially to cell-wall hydrolysis, ejection, and translation."
      },
      "es": {
        "pop": "Cada señal molecular activa el paso siguiente desde la punta hasta el citoplasma.",
        "blueprint": "Pipeline secuencial determinista: cada etapa mecánica o enzimática habilita el paso posterior.",
        "scientific": "Las señales alostéricas del receptor se acoplan en serie con lisis mural, eyección y traducción."
      }
    },
    "t4.ch5.signal.01": {
      "en": {
        "pop": "Porin binding sends a trigger wave from the [[long fibers|ltf]] to the [[baseplate|baseplate]].",
        "blueprint": "Trigger bus: porin engagement relays tension along [[long fibers|ltf]] to trip the [[baseplate|baseplate]].",
        "scientific": "OmpF binding transmits mechanical torque via [[long fibers|ltf]] to expand the [[baseplate|baseplate]]."
      },
      "es": {
        "pop": "La unión a la porina envía una onda de disparo desde las [[fibras largas|ltf]] hasta la [[placa basal|baseplate]].",
        "blueprint": "Bus de disparo: la unión porínica tensa las [[fibras largas|ltf]] y conmuta la [[placa basal|baseplate]].",
        "scientific": "El acople a OmpF transmite par por las [[fibras largas|ltf]] expandiendo la [[placa basal|baseplate]]."
      }
    },
    "t4.ch5.signal.02": {
      "en": {
        "pop": "The [[lysozyme needle|needle]] digests peptidoglycan, releasing muropeptides.",
        "blueprint": "Wall breach telemetry: the [[lysozyme needle|needle]] cleaves murein cross-links into muropeptides.",
        "scientific": "GH24 domains on the [[lysozyme needle|needle]] hydrolyze β-1,4 glycan bonds, shedding muropeptides."
      },
      "es": {
        "pop": "La [[aguja con lisozima|needle]] digiere el peptidoglicano, liberando péptidos murales.",
        "blueprint": "Brecha mural: la [[aguja con lisozima|needle]] escinde el sáculo liberando fragmentos muropeptídicos.",
        "scientific": "Los dominios GH24 de la [[aguja con lisozima|needle]] hidrolizan enlaces β-1,4 liberando muropéptidos."
      }
    },
    "t4.ch5.vdna.01": {
      "en": {
        "pop": "Capsid pressure drives [[viral dsDNA|dna]] down the [[portal|portal]] and [[tail tube|tube]].",
        "blueprint": "Hydraulic discharge: vault pressure routes [[viral dsDNA|dna]] down [[portal|portal]] and [[tail tube|tube]].",
        "scientific": "Stored ~60 atm pressure ejects [[viral dsDNA|dna]] via the gp20 [[portal|portal]] and gp19 [[tail tube|tube]]."
      },
      "es": {
        "pop": "La presión de la cápside impulsa el [[ADNbc viral|dna]] por el [[portal|portal]] y el [[tubo de la cola|tube]].",
        "blueprint": "Descarga hidráulica: el [[ADNbc viral|dna]] baja por el [[portal|portal]] y el [[tubo de la cola|tube]].",
        "scientific": "Las ~60 atm eyectan el [[ADNbc viral|dna]] a través del [[portal|portal]] gp20 y el [[tubo de la cola|tube]]."
      }
    },
    "t4.ch5.vdna.02": {
      "en": {
        "pop": "The genome streams into the cytoplasm to reach [[RNA polymerase|rnap]].",
        "blueprint": "Code handoff: injected DNA enters the cytosol and captures host [[RNA polymerase|rnap]] holoenzymes.",
        "scientific": "Cytoplasmic T4 dsDNA recruits ADP-ribosylated host σ70 [[RNA polymerase|rnap]] to early promoters."
      },
      "es": {
        "pop": "El genoma fluye hacia el citoplasma hasta alcanzar la [[ARN polimerasa|rnap]].",
        "blueprint": "Entrega de código: el ADN entra al citosol y captura complejos de [[ARN polimerasa|rnap]].",
        "scientific": "El ADNbc citoplasmático recluta la [[ARN polimerasa|rnap]] σ70 modificada hacia promotores tempranos."
      }
    },
    "t4.ch5.cap.01": {
      "en": {
        "pop": "Hijacked [[ribosomes|ribosome]] turn phage mRNA into new gp23* capsomeres.",
        "blueprint": "Mass fabrication: hijacked [[ribosomes|ribosome]] translate late viral mRNA into gp23* capsomeres.",
        "scientific": "Reprogrammed 70S [[ribosomes|ribosome]] synthesize gp23 precursors folded via GroEL–gp31 complexes."
      },
      "es": {
        "pop": "Los [[ribosomas|ribosome]] secuestrados convierten el ARNm del fago en nuevos capsómeros gp23*.",
        "blueprint": "Fabricación en serie: los [[ribosomas|ribosome]] traducen ARNm tardío en nuevos capsómeros gp23*.",
        "scientific": "Los [[ribosomas|ribosome]] 70S sintetizan precursores gp23 asistidos por el complejo GroEL–gp31."
      }
    },
    "t4.ch5.cap.02": {
      "en": {
        "pop": "They self-assemble into fresh [[prolate heads|capsid]] ready for DNA packaging.",
        "blueprint": "Modular self-assembly: cleaved tiles lock into empty [[prolate heads|capsid]] awaiting gp17 loading.",
        "scientific": "gp21 protease matures proheads into expanded [[prolate heads|capsid]] ready for ATP-driven packaging."
      },
      "es": {
        "pop": "Estos se autoensamblan en nuevas [[cabezas prolatas|capsid]] listas para empaquetar ADN.",
        "blueprint": "Autoensamblaje modular: las losetas forman [[cabezas prolatas|capsid]] listas para carga por gp17.",
        "scientific": "La proteasa gp21 madura las procápsides en [[cabezas prolatas|capsid]] expandidas para empaquetar ADN."
      }
    },
    "t4.ch6.roll.01": {
      "en": {
        "pop": "Prolate gp23* capsid",
        "blueprint": "Prolate gp23* high-pressure payload vault.",
        "scientific": "Prolate T=13/Q=20 gp23* capsid (PDB 5VF3)."
      },
      "es": {
        "pop": "Cápside prolata gp23*",
        "blueprint": "Bóveda prolata gp23* de alta presión.",
        "scientific": "Cápside prolata gp23* T=13/Q=20 (PDB 5VF3)."
      }
    },
    "t4.ch6.roll.02": {
      "en": {
        "pop": "Soc clamps & Hoc spikes",
        "blueprint": "External Soc seam clamps and Hoc tether masts.",
        "scientific": "810 Soc trimer clamps and 155 Ig-like Hoc spikes."
      },
      "es": {
        "pop": "Abrazaderas Soc y espículas Hoc",
        "blueprint": "Abrazaderas Soc de junta y mástiles Hoc.",
        "scientific": "810 grapas Soc y 155 espículas Ig Hoc."
      }
    },
    "t4.ch6.roll.03": {
      "en": {
        "pop": "gp24* vertex pentamers",
        "blueprint": "Eleven five-fold gp24* corner keystones.",
        "scientific": "Eleven homopentameric gp24* vertices (5 × 46 kDa)."
      },
      "es": {
        "pop": "Pentámeros de vértice gp24*",
        "blueprint": "Once piedras angulares pentaméricas gp24*.",
        "scientific": "Once vértices homopentaméricos gp24* (5 × 46 kDa)."
      }
    },
    "t4.ch6.roll.04": {
      "en": {
        "pop": "169 kbp dsDNA spool",
        "blueprint": "Coaxially spooled 169 kbp dsDNA payload.",
        "scientific": "168.9 kbp gh-dCMP dsDNA spool (~60 atm pressure)."
      },
      "es": {
        "pop": "Bobina de ADNbc de 169 kpb",
        "blueprint": "Carga coaxial de 169 kpb de ADN bicatenario.",
        "scientific": "Bobina de 168,9 kpb de ADNbc gh-dCMP (~60 atm)."
      }
    },
    "t4.ch6.roll.05": {
      "en": {
        "pop": "Internal protein core (IPI*)",
        "blueprint": "Axial scaffold mandrel and IPI* countermeasures.",
        "scientific": "gp22 scaffold core with ~360 anti-GmrSD IPI* copies."
      },
      "es": {
        "pop": "Núcleo proteico interno (IPI*)",
        "blueprint": "Mandril axial interno y contramedidas IPI*.",
        "scientific": "Núcleo gp22 con ~360 copias anti-GmrSD IPI*."
      }
    },
    "t4.ch6.roll.06": {
      "en": {
        "pop": "gp20 portal dodecamer",
        "blueprint": "Dodecameric gp20 bidirectional check valve.",
        "scientific": "12-subunit gp20 portal dodecamer (PDB 3JA7)."
      },
      "es": {
        "pop": "Dodecámero del portal gp20",
        "blueprint": "Válvula bidireccional dodecamérica gp20.",
        "scientific": "Dodecámero portal gp20 de 12 piezas (PDB 3JA7)."
      }
    },
    "t4.ch6.roll.07": {
      "en": {
        "pop": "Collar & fibritin whiskers",
        "blueprint": "Neck connector and six gpWac safety whiskers.",
        "scientific": "gp13–gp15 neck rings with six trimeric gpWac whiskers."
      },
      "es": {
        "pop": "Collar y bigotes de fibritina",
        "blueprint": "Conector cervical y seis bigotes seguro gpWac.",
        "scientific": "Cuello gp13–gp15 y seis bigotes gpWac triméricos."
      }
    },
    "t4.ch6.roll.08": {
      "en": {
        "pop": "gp18 contractile sheath",
        "blueprint": "Metastable 24-ring gp18 linear spring actuator.",
        "scientific": "144-subunit gp18 contractile sheath (PDB 3J2M)."
      },
      "es": {
        "pop": "Vaina contráctil gp18",
        "blueprint": "Actuador elástico lineal gp18 de 24 anillos.",
        "scientific": "Vaina contráctil gp18 de 144 piezas (PDB 3J2M)."
      }
    },
    "t4.ch6.roll.09": {
      "en": {
        "pop": "gp19 inner tail tube",
        "blueprint": "Rigid 9 nm gp19 piercing conduit (4 nm bore).",
        "scientific": "24-ring gp19 β-barrel inner tail tube (PDB 5W5F)."
      },
      "es": {
        "pop": "Tubo interno de la cola gp19",
        "blueprint": "Conducto perforador rígido gp19 (luz de 4 nm).",
        "scientific": "Tubo interno gp19 en barril β (PDB 5W5F)."
      }
    },
    "t4.ch6.roll.10": {
      "en": {
        "pop": "Hexagonal baseplate",
        "blueprint": "Bistable six-wedge dome-to-star trigger hub.",
        "scientific": "~150-subunit hexagonal baseplate (PDB 5IV5/5IV7)."
      },
      "es": {
        "pop": "Placa basal hexagonal",
        "blueprint": "Cubo disparador biestable de seis cuñas.",
        "scientific": "Placa basal hexagonal de ~150 piezas (5IV5/5IV7)."
      }
    },
    "t4.ch6.roll.11": {
      "en": {
        "pop": "gp12 short tail fibers",
        "blueprint": "Six Zn²⁺-braced gp12 recoil-arrest clamps.",
        "scientific": "Six homotrimeric Zn²⁺ gp12 short fibers (PDB 1OCY)."
      },
      "es": {
        "pop": "Fibras cortas de la cola gp12",
        "blueprint": "Seis mordazas antirretroceso gp12 con Zn²⁺.",
        "scientific": "Seis fibras cortas homotriméricas gp12 (PDB 1OCY)."
      }
    },
    "t4.ch6.roll.12": {
      "en": {
        "pop": "gp27–gp5 needle & lysozyme",
        "blueprint": "Central gp27–gp5 β-spike and murein cutters.",
        "scientific": "Heterotrimeric (gp27)₃–(gp5)₃ lysozyme spike (1K28)."
      },
      "es": {
        "pop": "Aguja gp27–gp5 y lisozima",
        "blueprint": "Espiga β central gp27–gp5 y cortadores murales.",
        "scientific": "Complejo perforador (gp27)₃–(gp5)₃ (PDB 1K28)."
      }
    },
    "t4.ch6.roll.13": {
      "en": {
        "pop": "gp34–gp37 long tail fibers",
        "blueprint": "Six hinged 145 nm gp34–gp37 sensor levers.",
        "scientific": "Six 145 nm gp34–gp37 fibers with Fe²⁺ tips (2XGF)."
      },
      "es": {
        "pop": "Fibras largas de la cola gp34–gp37",
        "blueprint": "Seis palancas sensoras articuladas gp34–gp37.",
        "scientific": "Seis fibras gp34–gp37 con puntas Fe²⁺ (PDB 2XGF)."
      }
    },
    "t4.ch6.roll.14": {
      "en": {
        "pop": "Host outer membrane & OmpF porins",
        "blueprint": "Host LPS outer shield and OmpF docking ports.",
        "scientific": "Asymmetric LPS outer membrane and OmpF trimers (2OMF)."
      },
      "es": {
        "pop": "Membrana externa del huésped y porinas OmpF",
        "blueprint": "Escudo externo de LPS y puertos OmpF del huésped.",
        "scientific": "Membrana externa de LPS y trímeros OmpF (2OMF)."
      }
    },
    "t4.ch6.roll.15": {
      "en": {
        "pop": "Host peptidoglycan & inner membrane",
        "blueprint": "Breached murein mesh and inner phospholipid bus.",
        "scientific": "Periplasmic GlcNAc–MurNAc murein and inner bilayer."
      },
      "es": {
        "pop": "Peptidoglicano y membrana interna del huésped",
        "blueprint": "Malla de mureína abierta y membrana interna.",
        "scientific": "Mureína periplásmica y bicapa lipídica interna."
      }
    },
    "t4.ch6.roll.16": {
      "en": {
        "pop": "Hijacked RNA polymerase & ribosomes",
        "blueprint": "Reprogrammed host RNAP and 70S factory line.",
        "scientific": "Hijacked α₂ββ′ωσ70 RNAP (4YG2) and 70S ribosomes (4YBB)."
      },
      "es": {
        "pop": "ARN polimerasa y ribosomas secuestrados",
        "blueprint": "RNAP y línea de ribosomas 70S reprogramados.",
        "scientific": "RNAP α₂ββ′ωσ70 (4YG2) y ribosomas 70S (4YBB)."
      }
    },
    "t4.ch6.exp.01": {
      "en": {
        "pop": "Now explore phage T4 on your own.",
        "blueprint": "Guided sequence complete: take manual orbital control of the T4 lander assembly.",
        "scientific": "Guided tour complete; explore the Tequatrovirus T4–E. coli complex interactively."
      },
      "es": {
        "pop": "Ahora explora el fago T4 por tu cuenta.",
        "blueprint": "Secuencia guiada completada: toma el control orbital manual del ensamblaje T4.",
        "scientific": "Recorrido completado; explora interactivamente el complejo Tequatrovirus T4–E. coli."
      }
    },
    "t4.ch6.exp.02": {
      "en": {
        "pop": "Click any tag to inspect its real PDB structure down to individual atoms.",
        "blueprint": "Select any component tag to load its isolated atomic-coordinate PDB sub-model.",
        "scientific": "Click any structural tag to inspect experimental X-ray and cryo-EM PDB coordinates."
      },
      "es": {
        "pop": "Haz clic en cualquier etiqueta para inspeccionar su estructura PDB real hasta los átomos individuales.",
        "blueprint": "Selecciona cualquier etiqueta para cargar su submodelo PDB de coordenadas atómicas.",
        "scientific": "Haz clic en cualquier etiqueta para examinar modelos experimentales PDB atómicos."
      }
    },
    "t4.det.rcap.01": {
      "en": {
        "pop": "The prolate head holds 169 kbp of dsDNA at ~500 atmospheres of pressure.",
        "blueprint": "Prolate pressure tank storing 169 kbp dsDNA at ~60 atm osmotic (~500 atm peak) stress.",
        "scientific": "Prolate T=13/Q=20 capsid confining 168.9 kbp gh-dCMP dsDNA at ~60 atm (~500 atm peak stress)."
      },
      "es": {
        "pop": "La cabeza prolata alberga 169 kpb de ADNbc a unas ~500 atmósferas de presión.",
        "blueprint": "Tanque prolato que confina 169 kpb de ADNbc bajo ~60 atm (~500 atm de tensión pico).",
        "scientific": "Cápside prolata T=13/Q=20 con 168,9 kpb de ADNbc gh-dCMP a ~60 atm (~500 atm pico)."
      }
    },
    "t4.det.rcap.02": {
      "en": {
        "pop": "155 hexamers of gp23* form the facets, reinforced by 810 Soc clamp trimers.",
        "blueprint": "Facet lattice of 155 gp23* hexamers reinforced across seams by 810 Soc clamp subunits.",
        "scientific": "930 gp23* monomers in 155 hexamers braced at quasi-3-fold interfaces by 810 Soc copies (5VF3)."
      },
      "es": {
        "pop": "155 hexámeros de gp23* forman las facetas, reforzadas por 810 trímeros de abrazadera Soc.",
        "blueprint": "Red de 155 hexámeros gp23* arriostrada en sus juntas por 810 subunidades de abrazadera Soc.",
        "scientific": "930 monómeros gp23* en 155 hexámeros reforzados en ejes cuasi-3 por 810 copias Soc (5VF3)."
      }
    },
    "t4.det.rcap.03": {
      "en": {
        "pop": "Eleven vertices carry gp24* pentamers; the twelfth holds the gp20 portal.",
        "blueprint": "Eleven 5-fold vertices mount gp24* pentamers; vertex twelve houses the gp20 portal valve.",
        "scientific": "Eleven vertices carry homopentameric gp24* (5VF3); the basal vertex holds dodecameric gp20 (3JA7)."
      },
      "es": {
        "pop": "Once vértices portan pentámeros gp24*; el duodécimo aloja el portal gp20.",
        "blueprint": "Once vértices montan pentámeros gp24*; el duodécimo integra la válvula portal gp20.",
        "scientific": "Once vértices portan homopentámeros gp24* (5VF3) y la base aloja el dodecámero gp20 (3JA7)."
      }
    },
    "t4.det.rtail.01": {
      "en": {
        "pop": "Twenty-four rings of gp18 sheath surround 24 rings of the gp19 inner tube.",
        "blueprint": "Coaxial 24-ring stack: outer gp18 contractile sleeve encasing the rigid gp19 inner barrel.",
        "scientific": "Twenty-four hexameric gp18 sheath rings (3J2M) surround 24 hexameric gp19 tube rings (5W5F)."
      },
      "es": {
        "pop": "Veinticuatro anillos de la vaina gp18 rodean 24 anillos del tubo interno gp19.",
        "blueprint": "Apilamiento coaxial de 24 anillos: funda contráctil gp18 sobre cañón rígido interno gp19.",
        "scientific": "Veinticuatro hexámeros de vaina gp18 (3J2M) rodean 24 hexámeros del tubo interno gp19 (5W5F)."
      }
    },
    "t4.det.rtail.02": {
      "en": {
        "pop": "At the top, the collar bears six fibritin whiskers (gpWac).",
        "blueprint": "Collar sensor ring mounts six gpWac fibritin whiskers that gate long-fiber deployment.",
        "scientific": "Neck collar bears six homotrimeric coiled-coil gpWac fibritin whiskers (~53 nm length)."
      },
      "es": {
        "pop": "En la parte superior, el collar porta seis bigotes de fibritina (gpWac).",
        "blueprint": "El collar superior porta seis bigotes gpWac que regulan el despliegue de las fibras largas.",
        "scientific": "El collar cervical sostiene seis bigotes homotriméricos de fibritina gpWac (~53 nm)."
      }
    },
    "t4.det.rtail.03": {
      "en": {
        "pop": "Sheath contraction drives the rigid inner tube through the host envelope.",
        "blueprint": "ATP-free sheath collapse translates stored spring tension into 50 nm axial tube penetration.",
        "scientific": "Enthalpy-driven gp18 contraction (92.5 → 42 nm) drives the 9 nm gp19 tube across the envelope."
      },
      "es": {
        "pop": "La contracción de la vaina impulsa el tubo interno rígido a través de la envoltura del huésped.",
        "blueprint": "El colapso sin ATP convierte la tensión elástica en ~50 nm de avance perforante del tubo.",
        "scientific": "La contracción entálpica de gp18 (92,5 → 42 nm) impulsa el tubo gp19 a través de la envoltura."
      }
    },
    "t4.det.rbase.01": {
      "en": {
        "pop": "Six outer wedges surround the central gp27–gp5 cell-puncturing needle.",
        "blueprint": "Six peripheral baseplate wedges ring the central gp27–gp5 armor-piercing hub.",
        "scientific": "Six multiprotein wedges (gp6/7/8/10/11/25/53; PDB 5IV5) encircle the (gp27)₃–(gp5)₃ spike (1K28)."
      },
      "es": {
        "pop": "Seis cuñas externas rodean la aguja perforadora central gp27–gp5.",
        "blueprint": "Seis cuñas periféricas rodean el buje perforador central gp27–gp5 en configuración armada.",
        "scientific": "Seis cuñas multiproteicas (PDB 5IV5) rodean el complejo perforador central (gp27)₃–(gp5)₃ (1K28)."
      }
    },
    "t4.det.rbase.02": {
      "en": {
        "pop": "When long tail fibers bind OmpF porins, six gp12 short fibers lock to LPS.",
        "blueprint": "Two-factor handshake: long-fiber OmpF sensing deploys six gp12 clamps onto LPS inner core.",
        "scientific": "gp37–OmpF binding triggers wedge expansion, rotating six Zn²⁺ gp12 trimers (1OCY) onto LPS."
      },
      "es": {
        "pop": "Cuando las fibras largas se unen a las porinas OmpF, seis fibras cortas gp12 se anclan al LPS.",
        "blueprint": "Protocolo de doble llave: el sensor OmpF despliega seis mordazas gp12 sobre el núcleo del LPS.",
        "scientific": "La unión gp37–OmpF expande las cuñas y rota seis trímeros gp12 con Zn²⁺ (1OCY) hacia el LPS."
      }
    },
    "t4.det.rbase.03": {
      "en": {
        "pop": "Three T4 lysozyme domains digest the peptidoglycan wall for DNA entry.",
        "blueprint": "Three T4 lysozyme cutters hydrolyze peptidoglycan cross-bridges to clear the injection path.",
        "scientific": "Three gp5 GH24 N-acetylmuramidase domains cleave murein β-(1→4) glycosidic linkages."
      },
      "es": {
        "pop": "Tres dominios de lisozima T4 digieren la pared de peptidoglicano para la entrada del ADN.",
        "blueprint": "Tres cortadores de lisozima T4 hidrolizan la mureína despejando la vía de inyección.",
        "scientific": "Tres dominios N-acetilmuramidasa GH24 de gp5 escinden enlaces β-(1→4) en el peptidoglicano."
      }
    },
    "t4.det.sch.01": {
      "en": {
        "pop": "Isolated 3D schematic of Bacteriophage T4 and its four sub-assemblies.",
        "blueprint": "Isolated 3D architectural schematic showing T4’s four self-assembling functional modules.",
        "scientific": "Complete Tequatrovirus T4 schematic (~200 nm) resolving head, tail, baseplate, and fiber modules."
      },
      "es": {
        "pop": "Esquema 3D aislado del bacteriófago T4 y sus cuatro subensamblajes.",
        "blueprint": "Esquema arquitectónico 3D aislado con los cuatro módulos funcionales autoensamblables de T4.",
        "scientific": "Esquema íntegro de Tequatrovirus T4 (~200 nm) con cabeza, cola, placa basal y seis fibras."
      }
    },
    "t4.det.sch.02": {
      "en": {
        "pop": "At top sits the cutaway prolate capsid packed with coaxially spooled dsDNA.",
        "blueprint": "Upper module: cutaway prolate vault housing coaxially wound double-stranded DNA.",
        "scientific": "Apical T=13/Q=20 cutaway capsid containing 168.9 kbp B-form dsDNA wound around the core."
      },
      "es": {
        "pop": "Arriba se sitúa la cápside prolata en corte, repleta de ADNbc enrollado coaxialmente.",
        "blueprint": "Módulo superior: bóveda prolata en sección con ADN bicatenario enrollado coaxialmente.",
        "scientific": "Cápside apical T=13/Q=20 en corte con 168,9 kpb de ADN-B dispuestos en capas coaxiales."
      }
    },
    "t4.det.sch.03": {
      "en": {
        "pop": "Below are the contractile tail, hexagonal baseplate and six long fibers.",
        "blueprint": "Lower actuation train: contractile tail, hexagonal trigger hub, and six hinged feeler legs.",
        "scientific": "Basal delivery apparatus: 92.5 nm gp18/gp19 tail, 6-fold baseplate, and six 145 nm gp34–gp37 legs."
      },
      "es": {
        "pop": "Debajo están la cola contráctil, la placa basal hexagonal y seis fibras largas.",
        "blueprint": "Tren inferior de actuación: cola contráctil, placa hexagonal de disparo y seis patas sensoras.",
        "scientific": "Aparato basal: cola gp18/gp19 de 92,5 nm, placa hexagonal y seis fibras gp34–gp37 de 145 nm."
      }
    },
    "t4.det.pcap.01": {
      "en": {
        "pop": "The elongated T4 head: gp23* hexamers, Soc clamps and central Hoc spikes.",
        "blueprint": "Capsid wall specification: gp23* hexamer tiles reinforced by Soc clamps and central Hoc masts.",
        "scientific": "T4 head lattice (PDB 5VF3): 155 gp23* hexamers, 810 Soc trimer clamps, and 155 Hoc Ig-like fibers."
      },
      "es": {
        "pop": "La cabeza alargada de T4: hexámeros gp23*, abrazaderas Soc y espículas Hoc centrales.",
        "blueprint": "Especificación mural: losetas hexaméricas gp23* con grapas Soc y mástiles centrales Hoc.",
        "scientific": "Red cefálica T4 (PDB 5VF3): 155 hexámeros gp23*, 810 abrazaderas Soc y 155 fibras Ig Hoc."
      }
    },
    "t4.det.pcap.02": {
      "en": {
        "pop": "Five-fold gp24* pentamers close the corners; gp20 forms the bottom portal.",
        "blueprint": "Vertex allocation: eleven gp24* pentamers close the dome; basal gp20 forms the ejection port.",
        "scientific": "Eleven 5-fold vertices bind gp24* pentamers; the twelfth seats the 12-mer gp20 portal (3JA7)."
      },
      "es": {
        "pop": "Pentámeros gp24* cierran las esquinas; gp20 forma el portal inferior.",
        "blueprint": "Asignación de vértices: once pentámeros gp24* cierran la cúpula y gp20 forma la boca basal.",
        "scientific": "Once vértices pentaméricos alojan gp24* y el duodécimo integra el portal 12-mérico gp20 (3JA7)."
      }
    },
    "t4.det.pcap.03": {
      "en": {
        "pop": "Inside, 169 kbp of dsDNA coils around the internal protein core.",
        "blueprint": "Internal spooling: 169 kbp dsDNA wraps coaxially around the central effector core.",
        "scientific": "168,903 bp gh-dCMP dsDNA coils in ~2.5 nm layers around the gp22/IPI*–IPIII* protein scaffold."
      },
      "es": {
        "pop": "En el interior, 169 kpb de ADNbc se enrollan alrededor del núcleo proteico interno.",
        "blueprint": "Bobinado interno: 169 kpb de ADNbc se enrollan coaxialmente sobre el núcleo proteico central.",
        "scientific": "168.903 pb de ADNbc gh-dCMP se arrollan cada ~2,5 nm en torno al núcleo gp22/IPI*–IPIII*."
      }
    },
    "t4.det.ptail.01": {
      "en": {
        "pop": "Cutaway of the 92.5 nm contractile tail and neck.",
        "blueprint": "Longitudinal cutaway of the 92.5 nm coaxial contractile actuator and neck connector.",
        "scientific": "Cutaway of the 92.5 × 24 nm extended tail assembly and gp13/gp14/gp15/gpWac neck complex."
      },
      "es": {
        "pop": "Corte de la cola contráctil de 92,5 nm y del cuello.",
        "blueprint": "Corte longitudinal del actuador coaxial contráctil de 92,5 nm y su conector cervical.",
        "scientific": "Sección de la cola extendida (92,5 × 24 nm) coronada por el complejo cervical gp13–gp15/gpWac."
      }
    },
    "t4.det.ptail.02": {
      "en": {
        "pop": "The green gp18 outer sheath contracts to drive the gold gp19 tube downward.",
        "blueprint": "Green gp18 outer sheath contracts to drive the gold non-contractile gp19 barrel downward.",
        "scientific": "Outer 24-ring gp18 sheath (green, 3J2M) contracts ~55% to thrust the gp19 tube (gold, 5W5F)."
      },
      "es": {
        "pop": "La vaina externa verde gp18 se contrae para impulsar hacia abajo el tubo dorado gp19.",
        "blueprint": "La vaina externa verde gp18 se contrae para hundir axialmente el cañón dorado rígido gp19.",
        "scientific": "La vaina gp18 de 24 anillos (verde, 3J2M) se acorta ~55% empujando el tubo gp19 (dorado, 5W5F)."
      }
    },
    "t4.det.ptail.03": {
      "en": {
        "pop": "Viral DNA shoots down the 4 nm central channel into the bacterium.",
        "blueprint": "4 nm central lumen channels pressurized viral dsDNA directly into the host cytoplasm.",
        "scientific": "B-form dsDNA (2.0 nm width) translocates rapidly down the 4.0 nm electronegative gp19 lumen."
      },
      "es": {
        "pop": "El ADN viral se dispara por el canal central de 4 nm hacia la bacteria.",
        "blueprint": "El canal central de 4 nm conduce el ADNbc presurizado directamente hacia el citoplasma.",
        "scientific": "El ADN-B (2,0 nm) recorre a alta velocidad el lumen electronegativo de 4,0 nm del tubo gp19."
      }
    },
    "t4.det.pbase.01": {
      "en": {
        "pop": "Six outer wedges form a hexagonal dome around the gp27–gp5 hub.",
        "blueprint": "Dome-state assembly: six peripheral wedges ring the central gp27–gp5 piercing hub.",
        "scientific": "Hexagonal ~52 nm dome of six gp6–gp53 wedges encircling the central (gp27)₃–(gp5)₃ hub (5IV5)."
      },
      "es": {
        "pop": "Seis cuñas externas forman una cúpula hexagonal alrededor del cubo gp27–gp5.",
        "blueprint": "Configuración en cúpula: seis cuñas periféricas rodean el buje perforador central gp27–gp5.",
        "scientific": "Cúpula hexagonal (~52 nm) de seis cuñas gp6–gp53 en torno al buje central (gp27)₃–(gp5)₃ (5IV5)."
      }
    },
    "t4.det.pbase.02": {
      "en": {
        "pop": "Three green T4 lysozyme domains surround the red β-helix puncturing needle.",
        "blueprint": "Dual-stage breach head: red triple-β-helix spike flanked by three green lysozyme cutters.",
        "scientific": "Central red gp5 triple-stranded β-helix needle ringed by three green GH24 lysozyme domains (1K28)."
      },
      "es": {
        "pop": "Tres dominios verdes de lisozima T4 rodean la aguja perforadora roja de hélice β.",
        "blueprint": "Cabezal bifásico: espiga roja en triple hélice β flanqueada por tres lisozimas verdes.",
        "scientific": "Aguja roja gp5 en triple hélice β rodeada por tres dominios verdes lisozima GH24 (PDB 1K28)."
      }
    },
    "t4.det.pbase.03": {
      "en": {
        "pop": "Six gp12 short tail fibers extend below to anchor onto bacterial LPS.",
        "blueprint": "Six gp12 short tail fibers project downward to clamp irreversibly onto host LPS.",
        "scientific": "Six homotrimeric Zn²⁺-containing gp12 short fibers (PDB 1OCY) anchor to LPS core heptoses."
      },
      "es": {
        "pop": "Seis fibras cortas gp12 se extienden por debajo para anclarse al LPS bacteriano.",
        "blueprint": "Seis fibras cortas gp12 se proyectan abajo para fijarse irreversiblemente al LPS del huésped.",
        "scientific": "Seis fibras cortas homotriméricas gp12 con Zn²⁺ (PDB 1OCY) se unen a heptosas del núcleo LPS."
      }
    },
    "t4.det.pfib.01": {
      "en": {
        "pop": "One 145 nm long tail fiber: proximal gp34 rod, gp35 knee and distal rod.",
        "blueprint": "Articulated 145 nm sensor lever: proximal gp34 rod, gp35 hinge, and gp36/gp37 distal shaft.",
        "scientific": "145 nm long tail fiber: homotrimeric gp34 (~65 nm), monomeric gp35 knee, and gp36–gp37 distal rod."
      },
      "es": {
        "pop": "Una fibra larga de 145 nm: bastón proximal gp34, rodilla gp35 y bastón distal.",
        "blueprint": "Palanca sensora articulada de 145 nm: barra proximal gp34, bisagra gp35 y eje distal gp36/gp37.",
        "scientific": "Fibra larga de 145 nm: homotrímero gp34 (~65 nm), rótula monomérica gp35 y segmento gp36–gp37."
      }
    },
    "t4.det.pfib.02": {
      "en": {
        "pop": "The iron-braced gp37 needle tip docks onto host OmpF porin and LPS.",
        "blueprint": "Fe²⁺-stiffened gp37 receptor tip executes target verification on host OmpF and LPS.",
        "scientific": "Distal gp37 trimer tip braced by seven octahedral Fe²⁺ ions (PDB 2XGF) binds OmpF and LPS."
      },
      "es": {
        "pop": "La punta de aguja gp37 reforzada con hierro se acopla a la porina OmpF y al LPS del huésped.",
        "blueprint": "La punta gp37 rigidizada con Fe²⁺ verifica el objetivo sobre porinas OmpF y azúcares LPS.",
        "scientific": "El extremo trimérico gp37 con siete iones Fe²⁺ octaédricos (PDB 2XGF) fija OmpF y LPS."
      }
    },
    "t4.det.gp23.01": {
      "en": {
        "pop": "Cryo-EM structure of the T4 major capsid hexamer (PDB 5VF3).",
        "blueprint": "Atomic cryo-EM model of the primary hexameric capsid wall tile (gp23*, PDB 5VF3).",
        "scientific": "Cryo-EM structure of the mature gp23* hexamer (~14 nm width, HK97 fold; PDB 5VF3)."
      },
      "es": {
        "pop": "Estructura por crio-ME del hexámero principal de la cápside de T4 (PDB 5VF3).",
        "blueprint": "Modelo atómico por crio-ME de la loseta hexamérica principal de la cápside (PDB 5VF3).",
        "scientific": "Estructura crio-ME del hexámero maduro gp23* (~14 nm de ancho, plegamiento HK97; PDB 5VF3)."
      }
    },
    "t4.det.gp23.02": {
      "en": {
        "pop": "Six gp23* subunits (blue) are ringed by Soc clamps (green) and a Hoc spike.",
        "blueprint": "Six blue gp23* subunits ringed by green Soc seam clamps and a central Hoc protrusion.",
        "scientific": "Six 48.7 kDa gp23* chains (blue) framed by 9.1 kDa Soc clamps (green) and central 40.4 kDa Hoc."
      },
      "es": {
        "pop": "Seis subunidades gp23* (azul) están rodeadas por abrazaderas Soc (verde) y una espícula Hoc.",
        "blueprint": "Seis subunidades azules gp23* ceñidas por grapas verdes Soc y una proyección Hoc central.",
        "scientific": "Seis cadenas gp23* de 48,7 kDa (azul) rodeadas de Soc de 9,1 kDa (verde) y Hoc central (40,4 kDa)."
      }
    },
    "t4.det.gp24.01": {
      "en": {
        "pop": "Cryo-EM structure of the five-fold capsid vertex pentamer (gp24*, PDB 5VF3).",
        "blueprint": "Atomic cryo-EM structure of the five-fold vertex keystone cap (gp24*, PDB 5VF3).",
        "scientific": "Cryo-EM structure of the homopentameric capsid vertex complex gp24* (~12.5 nm; PDB 5VF3)."
      },
      "es": {
        "pop": "Estructura por crio-ME del pentámero de vértice de la cápside (gp24*, PDB 5VF3).",
        "blueprint": "Estructura atómica crio-ME de la tapa pentamérica de vértice (gp24*, PDB 5VF3).",
        "scientific": "Estructura crio-ME del homopentámero de vértice de la cápside gp24* (~12,5 nm; PDB 5VF3)."
      }
    },
    "t4.det.gp24.02": {
      "en": {
        "pop": "Five gp24* subunits introduce the curvature needed to close the head.",
        "blueprint": "Five gp24* subunits introduce 60° disclination angles to seal the high-stress corners.",
        "scientific": "Five cleaved 46.0 kDa gp24* subunits sustain acute dihedral angles at 11 icosahedral vertices."
      },
      "es": {
        "pop": "Cinco subunidades gp24* introducen la curvatura necesaria para cerrar la cabeza.",
        "blueprint": "Cinco subunidades gp24* introducen el ángulo pentagonal que sella las esquinas de máxima tensión.",
        "scientific": "Cinco monómeros maduros gp24* (46,0 kDa) soportan los ángulos diedros agudos en 11 vértices."
      }
    },
    "t4.det.gp20.01": {
      "en": {
        "pop": "Cryo-EM structure of the 12-subunit gp20 portal dodecamer (PDB 3JA7).",
        "blueprint": "Atomic cryo-EM model of the dodecameric head-to-tail portal valve (gp20, PDB 3JA7).",
        "scientific": "Cryo-EM structure of the 12-subunit gp20 portal dodecamer (~17 × 14 nm, 12 × 61 kDa; PDB 3JA7)."
      },
      "es": {
        "pop": "Estructura por crio-ME del dodecámero del portal gp20 de 12 subunidades (PDB 3JA7).",
        "blueprint": "Modelo atómico crio-ME de la válvula portal dodecamérica cabeza-cola (gp20, PDB 3JA7).",
        "scientific": "Estructura crio-ME del dodecámero portal gp20 (~17 × 14 nm, 12 × 61 kDa; PDB 3JA7)."
      }
    },
    "t4.det.gp20.02": {
      "en": {
        "pop": "DNA is pumped in and fired out through its 3.5 nm central channel.",
        "blueprint": "Bidirectional 3.5 nm bore: accepts inward gp17 DNA pumping, then gates outward injection.",
        "scientific": "Crown, stem, and tunnel-loop domains form a ~2.8–3.5 nm lumen for DNA packaging and ejection."
      },
      "es": {
        "pop": "El ADN se bombea hacia adentro y se dispara hacia afuera por su canal central de 3,5 nm.",
        "blueprint": "Paso bidireccional de 3,5 nm: admite la carga por gp17 y luego canaliza la eyección.",
        "scientific": "Los dominios corona, tallo y bucle definen una luz de ~2,8–3,5 nm para carga y eyección de ADN."
      }
    },
    "t4.det.gp18.01": {
      "en": {
        "pop": "Cryo-EM structure of the gp18 contractile sheath and gp15 neck ring (3J2M).",
        "blueprint": "Cryo-EM model of the upper gp18 contractile actuator ring and gp15 neck terminator (3J2M).",
        "scientific": "Cryo-EM structure of hexameric gp18 sheath (71.2 kDa/monomer) and gp15 connector (PDB 3J2M)."
      },
      "es": {
        "pop": "Estructura por crio-ME de la vaina contráctil gp18 y el anillo del cuello gp15 (3J2M).",
        "blueprint": "Modelo crio-ME del anillo superior contráctil gp18 y el conector cervical gp15 (PDB 3J2M).",
        "scientific": "Estructura crio-ME de la vaina hexamérica gp18 (71,2 kDa/subunidad) y anillo gp15 (PDB 3J2M)."
      }
    },
    "t4.det.gp18.02": {
      "en": {
        "pop": "Twenty-four hexameric gp18 rings stack to form the spring-loaded sheath.",
        "blueprint": "24 stacked hexamers linked by β-sheet handshakes store elastic energy for one-shot contraction.",
        "scientific": "Twenty-four gp18 hexamers (4.06 nm rise, 17.2° twist) contract to 1.64 nm rise via β-sheet links."
      },
      "es": {
        "pop": "Veinticuatro anillos hexaméricos gp18 se apilan para formar la vaina cargada por resorte.",
        "blueprint": "24 hexámeros enlazados por hojas β acumulan energía elástica para un disparo único.",
        "scientific": "Veinticuatro hexámeros gp18 (paso 4,06 nm, giro 17,2°) encogen a 1,64 nm conservando hojas β."
      }
    },
    "t4.det.gp19.01": {
      "en": {
        "pop": "Cryo-EM structure of three stacked gp19 inner tail tube rings (PDB 5W5F).",
        "blueprint": "Atomic cryo-EM view of three stacked hexameric rings of the gp19 piercing barrel (PDB 5W5F).",
        "scientific": "Cryo-EM structure of three stacked gp19 hexamers (18.5 kDa monomer, 9.0 nm OD; PDB 5W5F)."
      },
      "es": {
        "pop": "Estructura por crio-ME de tres anillos apilados del tubo interno de la cola gp19 (PDB 5W5F).",
        "blueprint": "Vista atómica crio-ME de tres anillos hexaméricos apilados del cañón perforador gp19 (PDB 5W5F).",
        "scientific": "Estructura crio-ME de tres hexámeros gp19 apilados (monómero 18,5 kDa, 9,0 nm DE; PDB 5W5F)."
      }
    },
    "t4.det.gp19.02": {
      "en": {
        "pop": "Six subunits per ring form a smooth 4 nm β-barrel conduit for viral DNA.",
        "blueprint": "Six subunits per ring form a continuous 4 nm electronegative β-barrel for frictionless DNA transit.",
        "scientific": "Eight-stranded antiparallel β-barrels create a 4.0 nm negatively charged lumen for B-DNA passage."
      },
      "es": {
        "pop": "Seis subunidades por anillo forman un conducto liso de barril β de 4 nm para el ADN viral.",
        "blueprint": "Seis subunidades por anillo forman un barril β electronegativo de 4 nm sin fricción para el ADN.",
        "scientific": "Barriles β antiparalelos de ocho hebras definen un lumen negativo de 4,0 nm para el paso de ADN-B."
      }
    },
    "t4.det.gp5.01": {
      "en": {
        "pop": "Crystal structure of the gp27–gp5 cell-puncturing needle (PDB 1K28).",
        "blueprint": "Crystal structure of the central gp27–gp5 armor-piercing spike assembly (PDB 1K28).",
        "scientific": "X-ray crystal structure of the heterotrimeric (gp27)₃–(gp5)₃ puncturing complex (~19 nm; PDB 1K28)."
      },
      "es": {
        "pop": "Estructura cristalina de la aguja perforadora celular gp27–gp5 (PDB 1K28).",
        "blueprint": "Estructura cristalina del ensamblaje perforador central de blindaje gp27–gp5 (PDB 1K28).",
        "scientific": "Estructura cristalográfica del complejo perforador heterotrimérico (gp27)₃–(gp5)₃ (~19 nm; 1K28)."
      }
    },
    "t4.det.gp5.02": {
      "en": {
        "pop": "The cup-shaped gp27 hub tops a rigid triple-β-helix needle and 3 lysozymes.",
        "blueprint": "Pseudo-6-fold gp27 cup adapts the 6-fold tube to a 3-fold β-helix needle and 3 lysozyme cutters.",
        "scientific": "Trimeric gp27 bridges gp19 to the equilateral gp5 triple-β-helix prism and three GH24 lysozymes."
      },
      "es": {
        "pop": "El cubo gp27 en forma de copa corona una aguja rígida de triple hélice β y 3 lisozimas.",
        "blueprint": "La copa pseudohexamérica gp27 acopla el tubo a la aguja triple β y tres cortadores lisozima.",
        "scientific": "El trímero gp27 conecta gp19 con el prisma triple β de gp5 y tres dominios lisozima GH24."
      }
    },
    "t4.det.gp37.01": {
      "en": {
        "pop": "Crystal structure of the gp37 long tail fiber needle tip (PDB 2XGF).",
        "blueprint": "Crystal structure of the distal receptor-recognition tip of long fiber gp37 (PDB 2XGF).",
        "scientific": "X-ray structure of the C-terminal homotrimeric gp37 distal needle tip (residues 785–1026; 2XGF)."
      },
      "es": {
        "pop": "Estructura cristalina de la punta de aguja de la fibra larga de la cola gp37 (PDB 2XGF).",
        "blueprint": "Estructura cristalina del extremo distal de reconocimiento receptor de la fibra gp37 (PDB 2XGF).",
        "scientific": "Estructura por rayos X del extremo C-terminal homotrimérico gp37 (residuos 785–1026; PDB 2XGF)."
      }
    },
    "t4.det.gp37.02": {
      "en": {
        "pop": "Three interwoven chains braced by 7 iron ions recognise E. coli OmpF porins.",
        "blueprint": "Three interwoven chains braced axially by 7 Fe²⁺ ions verify host OmpF porin loops.",
        "scientific": "Intertwined trimer coordinated by seven octahedral Fe²⁺ ions via His-X-His motifs binds OmpF."
      },
      "es": {
        "pop": "Tres cadenas entrelazadas reforzadas por 7 iones de hierro reconocen las porinas OmpF de E. coli.",
        "blueprint": "Tres hebras entrelazadas sobre 7 iones Fe²⁺ axiales verifican los bucles externos de OmpF.",
        "scientific": "Trímero entrelazado con siete iones Fe²⁺ octaédricos (motivos His-X-His) específico de OmpF."
      }
    },
    "t4.det.gp12.01": {
      "en": {
        "pop": "Crystal structure of the gp12 short tail fiber trimer tip (PDB 1OCY).",
        "blueprint": "Crystal structure of the secondary recoil-arrest clamp tip on short fiber gp12 (PDB 1OCY).",
        "scientific": "X-ray crystal structure of the C-terminal homotrimeric gp12 short tail fiber (PDB 1OCY)."
      },
      "es": {
        "pop": "Estructura cristalina de la punta trimérica de la fibra corta de la cola gp12 (PDB 1OCY).",
        "blueprint": "Estructura cristalina del cabezal de anclaje antirretroceso de la fibra corta gp12 (PDB 1OCY).",
        "scientific": "Estructura cristalográfica del fragmento C-terminal homotrimérico de la fibra corta gp12 (1OCY)."
      }
    },
    "t4.det.gp12.02": {
      "en": {
        "pop": "Its zinc-binding head clamps irreversibly onto the host LPS inner core.",
        "blueprint": "Axial Zn²⁺-stabilized receptor head locks irreversibly onto the host LPS inner core.",
        "scientific": "Triple β-spiral shaft and Zn²⁺-coordinated C-terminal head bind LPS core heptose-phosphate."
      },
      "es": {
        "pop": "Su cabeza fijadora de zinc se aferra irreversiblemente al núcleo interno del LPS huésped.",
        "blueprint": "Su cabezal estabilizado por un ion Zn²⁺ axial se aferra sin retorno al núcleo interno del LPS.",
        "scientific": "Triple espiral β y cabezal coordinado por Zn²⁺ que fija heptosa-fosfato del núcleo interno LPS."
      }
    }
  }
};
