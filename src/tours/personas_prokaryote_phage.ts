import type { TourPersonaMap } from './tour_personas.js';

export const PROKARYOTE_PHAGE_TOUR_PERSONAS: TourPersonaMap = {
  'real-bacterium': {
    'ec.ch0.intro.01': {
      en: {
        pop: 'Meet Escherichia coli—your gut’s bustling, rod-shaped local straight out of Cells at Work!',
        blueprint: 'System target: Escherichia coli, an autonomous rod-shaped microbial chassis operating in the gut.',
        scientific: 'Escherichia coli K-12: a facultatively anaerobic Gram-negative γ-proteobacterial rod (~2 × 0.8 µm).'
      },
      es: {
        pop: '¡Conoce a Escherichia coli, la inquieta vecina cilíndrica de tu intestino al estilo Cells at Work!',
        blueprint: 'Objetivo del sistema: Escherichia coli, un chasis microbiano autónomo activo en el intestino humano.',
        scientific: 'Escherichia coli K-12: bacilo γ-proteobacteriano gramnegativo anaerobio facultativo (~2 × 0,8 µm).'
      }
    },
    'ec.ch0.intro.02': {
      en: {
        pop: 'Zero movie-set illusions here: every machine sits at true scale, with 1 unit equal to 100 nanometres.',
        blueprint: 'Unified CAD coordinate space: all assemblies render at 1:1 physical scale (1 scene unit = 100 nm).',
        scientific: 'Isotropic atomic-to-cellular scale: 1 scene unit equals 100 nm across ~0.7 fL cytoplasmic volume.'
      },
      es: {
        pop: 'Aquí no hay trucos de cámara: todo está a escala real, donde 1 unidad equivale a 100 nanómetros.',
        blueprint: 'Espacio CAD unificado: cada ensamblaje se traza a escala física 1:1 (1 unidad de escena = 100 nm).',
        scientific: 'Escala isotrópica atómica y celular: 1 unidad equivale a 100 nm en ~0,7 fL de volumen citoplasmático.'
      }
    },
    'ec.ch0.intro.03': {
      en: {
        pop: 'Built like the Millennium Falcon, this prokaryote ditches inner walls for one hyper-fast open cockpit!',
        blueprint: 'Open-bus prokaryotic architecture: zero nuclear vaults, lipid partitions, or sub-compartment walls.',
        scientific: 'Prokaryotic cytoplasm lacking a nuclear envelope or endomembrane organelles (~300 mg/mL crowding).'
      },
      es: {
        pop: '¡Como el Halcón Milenario, este procariota elimina tabiques internos y opera en una sola cabina veloz!',
        blueprint: 'Arquitectura procariota de bus abierto: sin bóveda nuclear, tabiques lipídicos ni subcompartimentos.',
        scientific: 'Citoplasma procariota sin envoltura nuclear ni endomembranas, con hacinamiento de ~300–400 mg/mL.'
      }
    },
    'ec.ch0.intro.04': {
      en: {
        pop: 'Even without rooms, its 4.6-million-letter DNA playbook and crews coordinate like the Avengers.',
        blueprint: 'Spatial routing organizes its 4.6 Mbp circular firmware, polar sensors, and hull turbines cleanly.',
        scientific: 'Phase separation and supercoiled macrodomains order its 4.64 Mbp chromosome (~4,300 protein genes).'
      },
      es: {
        pop: 'Aun sin despachos, su manual de ADN de 4,6 millones de letras y sus máquinas coordinan como Vengadores.',
        blueprint: 'El enrutamiento espacial ordena su firmware circular de 4,6 Mpb, sensores polares y turbinas de casco.',
        scientific: 'Separación de fases y macrodominios topológicos ordenan su cromosoma circular de 4,64 Mpb (~4.300 genes).'
      }
    },
    'ec.ch0.intro.05': {
      en: {
        pop: 'Tap Space anytime for a Matrix bullet-time freeze, or hit Explore to pilot the camera solo!',
        blueprint: 'Press Space to halt real-time simulation playback, or select Explore for free camera navigation.',
        scientific: 'Press Space to pause macromolecular dynamics, or enter Explore mode to inspect atomic coordinates.'
      },
      es: {
        pop: '¡Pulsa Espacio para congelar la acción al estilo Matrix, o Explorar para pilotar la cámara a tu aire!',
        blueprint: 'Pulsa Espacio para detener la simulación en curso, o elige Explorar para navegación manual libre.',
        scientific: 'Pulsa Espacio para pausar la dinámica macromolecular, o entra en Explorar para ver coordenadas PDB.'
      }
    },
    'ec.ch1.env.01': {
      en: {
        pop: 'Like Wall Maria, Rose, and Sina in Attack on Titan, E. coli wraps itself in triple-layer armor.',
        blueprint: 'Gram-negative hull architecture: a trilaminar perimeter integrating shield, tension mesh, and power.',
        scientific: 'Gram-negative tripartite envelope (~35 nm total): outer membrane, periplasmic murein, inner membrane.'
      },
      es: {
        pop: 'Como los muros María, Rose y Sina de Ataque a los Titanes, E. coli viste un blindaje de tres capas.',
        blueprint: 'Casco gramnegativo trilaminar: combina escudo químico exterior, malla tensora y membrana energética.',
        scientific: 'Envoltura gramnegativa tripartita (~35 nm): membrana externa, mureína periplásmica y membrana interna.'
      }
    },
    'ec.ch1.env.02': {
      en: {
        pop: 'Outermost sits the [[outer membrane|om]], bristling with [[LPS sugar chains|om]] like an Evangelion AT Field!',
        blueprint: 'Outer chemical barrier: the asymmetric [[outer membrane|om]] paved with Mg²⁺-bridged [[LPS sugar chains|om]].',
        scientific: 'Asymmetric ~7 nm [[outer membrane|om]]: inner phospholipids and ~2×10⁶ [[LPS sugar chains|om]] outside.'
      },
      es: {
        pop: 'Por fuera brilla la [[membrana externa|om]], erizada de [[cadenas de azúcares LPS|om]] cual Campo AT.',
        blueprint: 'Barrera química externa: [[membrana externa|om]] asimétrica cubierta de [[cadenas de azúcares LPS|om]] con Mg²⁺.',
        scientific: '[[Membrana externa|om]] asimétrica (~7 nm): fosfolípidos internos y ~2×10⁶ [[cadenas de azúcares LPS|om]].'
      }
    },
    'ec.ch1.env.03': {
      en: {
        pop: 'Three-barrel [[OmpF porins|porin]] work like Monsters, Inc. doors, letting tiny snacks slip inside.',
        blueprint: 'Passive molecular-sieve I/O ports: trimeric [[OmpF porins|porin]] admit hydrophilic nutrients <600 Da.',
        scientific: 'Homotrimeric 16-stranded β-barrel [[OmpF porins|porin]] (PDB 2OMF; ~1.1 nm pore) diffuse solutes <600 Da.'
      },
      es: {
        pop: 'Las [[porinas OmpF|porin]] triméricas son puertas tipo Monsters, Inc. que solo admiten bocados pequeños.',
        blueprint: 'Puertos pasivos de E/S: las [[porinas OmpF|porin]] triméricas tamizan nutrientes hidrofílicos <600 Da.',
        scientific: '[[Porinas OmpF|porin]] homotriméricas en barril β de 16 hebras (PDB 2OMF; poro ~1,1 nm, corte <600 Da).'
      }
    },
    'ec.ch1.pump.01': {
      en: {
        pop: 'In the moat below, Beskar-tough [[peptidoglycan|pg]] chainmail stapled by Lpp keeps the cell from popping.',
        blueprint: 'Turgor-resisting exoskeleton: periplasmic [[peptidoglycan|pg]] mesh riveted to the hull by Lpp cables.',
        scientific: 'Monolayer ~4 nm GlcNAc–MurNAc [[peptidoglycan|pg]] sacculus tethered by ~5×10⁵ Lpp trimers (~3 atm turgor).'
      },
      es: {
        pop: 'En el foso interior, una cota de malla de [[peptidoglicano|pg]] sujeta por Lpp evita que la célula estalle.',
        blueprint: 'Exoesqueleto frente a turgencia: red periplásmica de [[peptidoglicano|pg]] remachada al casco vía Lpp.',
        scientific: 'Sáculo monocapa (~4 nm) de [[peptidoglicano|pg]] GlcNAc–MurNAc anclado por ~5×10⁵ trímeros Lpp (~3 atm).'
      }
    },
    'ec.ch1.pump.02': {
      en: {
        pop: 'Piercing all three walls like Thor’s Bifrost cannon stands the [[AcrAB–TolC efflux pump|pump]].',
        blueprint: 'Trans-envelope bilge ejector: the tripartite [[AcrAB–TolC efflux pump|pump]] spans all three hull layers.',
        scientific: 'Bridging 33 nm across both membranes stands the ~770 kDa RND [[AcrAB–TolC efflux pump|pump]] (PDB 5O66).'
      },
      es: {
        pop: 'Cruzando las tres murallas como el cañón Bifrost de Thor se alza la [[bomba de eflujo AcrAB–TolC|pump]].',
        blueprint: 'Eyector de achique transenvoltura: la [[bomba de eflujo AcrAB–TolC|pump]] conecta las tres capas del casco.',
        scientific: 'Abarcando 33 nm entre ambas membranas se erige la [[bomba de eflujo AcrAB–TolC|pump]] (~770 kDa, PDB 5O66).'
      }
    },
    'ec.ch1.pump.03': {
      en: {
        pop: 'Fueled by protons, this bouncer grabs incoming antibiotics and tosses them straight back outside!',
        blueprint: 'Proton-driven peristaltic cycling intercepts periplasmic drugs and vents them directly overboard.',
        scientific: 'Inward H⁺ translocation drives AcrB Loose–Tight–Open rotation to extrude antibiotics and bile salts.'
      },
      es: {
        pop: '¡Impulsada por protones, atrapa antibióticos en pleno pasillo y los catapulta de vuelta a la calle!',
        blueprint: 'Su ciclo peristáltico impulsado por H⁺ intercepta fármacos en el periplasma y los expulsa al exterior.',
        scientific: 'El flujo entrante de H⁺ impulsa la rotación funcional de AcrB para extruir fármacos y sales biliares.'
      }
    },
    'ec.ch1.atps.01': {
      en: {
        pop: 'No mitochondria? E. coli wires its whole [[inner membrane|im]] like Tony Stark’s chest Arc Reactor!',
        blueprint: 'Main electrical bus: without mitochondria, chemiosmotic power runs across the [[inner membrane|im]].',
        scientific: 'Chemiosmotic coupling operates across the ~7 nm phospholipid [[inner membrane|im]] at Δp ≈ −180 mV.'
      },
      es: {
        pop: '¿Sin mitocondrias? ¡E. coli cablea toda su [[membrana interna|im]] como el Reactor Arc de Iron Man!',
        blueprint: 'Bus eléctrico principal: sin mitocondrias, la potencia quimiosmótica reside en la [[membrana interna|im]].',
        scientific: 'El acoplamiento quimiosmótico opera en la [[membrana interna|im]] fosfolipídica (~7 nm, Δp ≈ −180 mV).'
      }
    },
    'ec.ch1.atps.02': {
      en: {
        pop: 'Like Goku charging golden Ki, the [[respiratory chain (Complex I)|etc]] packs protons into the periplasm.',
        blueprint: 'Capacitor charging stage: the [[respiratory chain (Complex I)|etc]] oxidizes NADH to pump H⁺ outward.',
        scientific: 'Minimal 13-subunit [[respiratory chain (Complex I)|etc]] (NDH-1, PDB 7NYR) pumps 4 H⁺ per NADH oxidized.'
      },
      es: {
        pop: 'Como Goku cargando Ki, la [[cadena respiratoria (Complejo I)|etc]] inyecta protones al foso periplásmico.',
        blueprint: 'Etapa de carga: la [[cadena respiratoria (Complejo I)|etc]] oxida NADH para bombear H⁺ hacia el periplasma.',
        scientific: 'La [[cadena respiratoria (Complejo I)|etc]] de 13 subunidades (NDH-1, PDB 7NYR) bombea 4 H⁺ por cada NADH.'
      }
    },
    'ec.ch1.atps.03': {
      en: {
        pop: 'Protons rushing home spin [[ATP synthase|atps]] like a Naruto Rasengan, minting fresh ATP fuel!',
        blueprint: 'Rotary hydro-generator: inward H⁺ flux spins [[ATP synthase|atps]] to mint 3 ATP per 360° turn.',
        scientific: 'Periplasmic H⁺ return through F₀ c₁₀ rotates γ–ε in F₁F₀ [[ATP synthase|atps]] (PDB 6OQR; 3.33 H⁺/ATP).'
      },
      es: {
        pop: '¡Los protones que regresan giran la [[ATP sintasa|atps]] como un Rasengan para fabricar ATP fresco!',
        blueprint: 'Generador rotatorio: el retorno de H⁺ gira la [[ATP sintasa|atps]] produciendo 3 ATP por vuelta completa.',
        scientific: 'El retorno de H⁺ por F₀ c₁₀ rota el eje γ–ε de la [[ATP sintasa|atps]] F₁F₀ (PDB 6OQR; 3,33 H⁺/ATP).'
      }
    },
    'ec.ch2.mot.01': {
      en: {
        pop: 'Each whip-like [[flagellum|flag]] spins on a 45 nm turbine worthy of Anakin’s Star Wars pod-racer!',
        blueprint: 'Outboard rotary thruster: each helical [[flagellum|flag]] couples to a 45 nm trans-envelope axle.',
        scientific: 'Each ~20 nm FliC [[flagellum|flag]] is driven by a ~45 nm basal body (MS, P, L, and C rings) in the wall.'
      },
      es: {
        pop: '¡Cada [[flagelo|flag]] gira sobre una turbina de 45 nm digna de una vaina de carreras de Star Wars!',
        blueprint: 'Propulsor rotatorio externo: cada [[flagelo|flag]] helicoidal se acopla a un eje transenvoltura de 45 nm.',
        scientific: 'Cada [[flagelo|flag]] helicoidal FliC (~20 nm) gira mediante un cuerpo basal de ~45 nm (anillos MS, P, L, C).'
      }
    },
    'ec.ch2.mot.02': {
      en: {
        pop: 'Proton waterfalls pouring through [[MotA/MotB stators|flag]] whirl the rotor 100 revolutions per second!',
        blueprint: 'Electrostatic stator drive: H⁺ flux across [[MotA/MotB stators|flag]] spins the rotor at 100–300 Hz.',
        scientific: 'Up to 11 peptidoglycan-bound [[MotA/MotB stators|flag]] (MotA₅MotB₂) conduct ~1,200 H⁺/rev at ~100 Hz.'
      },
      es: {
        pop: '¡Cascadas de protones por los [[estatores MotA/MotB|flag]] disparan el rotor a 100 vueltas por segundo!',
        blueprint: 'Accionamiento electrostático: el paso de H⁺ por [[estatores MotA/MotB|flag]] gira el rotor a 100–300 Hz.',
        scientific: 'Hasta 11 [[estatores MotA/MotB|flag]] (MotA₅MotB₂) conducen ~1.200 H⁺/vuelta y giran el rotor a ~100 Hz.'
      }
    },
    'ec.ch2.mot.03': {
      en: {
        pop: 'Flip the [[C ring|flag]] into reverse and the tail bundle flies apart for an instant Mario Kart drift!',
        blueprint: 'Directional reversing clutch: flipping [[C ring|flag]] spin unbundles filaments to tumble onto a new vector.',
        scientific: 'CheY-P binding to the FliG/FliM/FliN [[C ring|flag]] switches CCW run bundling into CW tumbling.'
      },
      es: {
        pop: '¡Invierte el [[anillo C|flag]] y el haz propulsor se abre al instante para derrapar hacia un nuevo rumbo!',
        blueprint: 'Embrague inversor: invertir el giro del [[anillo C|flag]] separa el haz para reorientar la trayectoria.',
        scientific: 'La unión de CheY-P al [[anillo C|flag]] (FliG/FliM/FliN) conmuta el giro antihorario a vuelcos horarios.'
      }
    },
    'ec.ch2.pole.01': {
      en: {
        pop: 'Up at the bow, thousands of [[chemoreceptors|chemo]] cluster like a Dragon Ball Scouter radar dish!',
        blueprint: 'Bow sensor array: thousands of transmembrane [[chemoreceptors|chemo]] tile into a hexagonal lattice.',
        scientific: 'At the cell pole, ~10⁴ homodimeric MCP [[chemoreceptors|chemo]] assemble into a 12 nm hexagonal lattice.'
      },
      es: {
        pop: '¡En la proa, miles de [[quimiorreceptores|chemo]] forman un radar hexagonal digno de un rastreador saiyajin!',
        blueprint: 'Matriz sensora de proa: miles de [[quimiorreceptores|chemo]] transmembrana forman una red hexagonal.',
        scientific: 'En el polo celular, ~10⁴ [[quimiorreceptores|chemo]] MCP homodiméricos forman una red hexagonal de 12 nm.'
      }
    },
    'ec.ch2.pole.02': {
      en: {
        pop: 'Like Remy from Ratatouille sniffing soup, they sample sweet sugars and amino acids in the moat.',
        blueprint: 'Chemical telemetry: periplasmic ligand domains measure real-time nutrient gradients with memory.',
        scientific: 'Periplasmic 4-helix sensor domains bind attractants, sliding helix TM2 ~1.5 Å with <0.1% Δ[L]/[L] gain.'
      },
      es: {
        pop: 'Como Remy en Ratatouille oliendo el caldo, saborean azúcares y aminoácidos frescos en el periplasma.',
        blueprint: 'Telemetría química: sus dominios periplásmicos miden gradientes de nutrientes con memoria adaptativa.',
        scientific: 'Sus dominios periplásmicos unen atrayentes y desplazan ~1,5 Å la hélice TM2 con sensibilidad <0,1%.'
      }
    },
    'ec.ch2.pole.03': {
      en: {
        pop: 'Downstairs, [[CheA kinases|chemo]] ping the tail motors whenever snacks fade: time to tumble!',
        blueprint: 'Autopilot relay: cytoplasmic [[CheA kinases|chemo]] dispatch CheY-P packets to trigger motor reversal.',
        scientific: 'Receptor-coupled [[CheA kinases|chemo]] phosphorylate CheY to CheY-P, diffusing to bias C-ring switching.'
      },
      es: {
        pop: 'Abajo, las [[quinasas CheA|chemo]] avisan a los motores si escasea la comida: ¡hora de cambiar de rumbo!',
        blueprint: 'Relé de piloto automático: las [[quinasas CheA|chemo]] envían señales CheY-P para invertir los motores.',
        scientific: 'Las [[quinasas CheA|chemo]] autofosforilan y transfieren fosfato a CheY, modulando el giro flagelar.'
      }
    },
    'ec.ch2.pili.01': {
      en: {
        pop: 'Bristling all around the hull are grappling-hook [[pili|pili]] straight out of Spider-Man’s web-shooters.',
        blueprint: 'Perimeter mooring cables: rigid proteinaceous [[pili|pili]] radiate outward across the outer membrane.',
        scientific: 'Chaperone–usher Type 1 [[pili|pili]] (~7 nm × 1–2 µm helical FimA rods) project peritrichously outside.'
      },
      es: {
        pop: 'Alrededor del casco brotan [[pili|pili]] como cables lanzatelarañas dignos del propio Spider-Man.',
        blueprint: 'Cables perimetrales de amarre: rígidos [[pili|pili]] proteicos irradian desde la membrana externa.',
        scientific: 'Fimbrias tipo 1 o [[pili|pili]] (~7 nm × 1–2 µm de varilla helicoidal FimA) emergen por toda la célula.'
      }
    },
    'ec.ch2.pili.02': {
      en: {
        pop: 'The harder gut currents yank, the tighter their catch-bond tips clamp down—zero wipeouts!',
        blueprint: 'Shear-activated catch-bond tips lock onto host glycans, preventing hydrodynamic washout.',
        scientific: 'Tip adhesin FimH forms D-mannose catch-bonds whose lifetime increases under tensile fluid shear (~50 pN).'
      },
      es: {
        pop: 'Cuanto más fuerte tiran las corrientes intestinales, más aprietan sus puntas adhesivas sin soltarse.',
        blueprint: 'Sus puntas con enlace catch-bond se aferran a glucanos del huésped frente al arrastre hidrodinámico.',
        scientific: 'La adhesina distal FimH forma enlaces catch-bond con D-manosa reforzados bajo tensión de cizalla.'
      }
    },
    'ec.ch3.nuc.01': {
      en: {
        pop: 'Center stage floats the [[nucleoid|dna]]: 4.6 million DNA letters coiled with zero vault walls!',
        blueprint: 'Core firmware storage: the membrane-free [[nucleoid|dna]] holds 4.6 Mbp of circular duplex code.',
        scientific: 'Central phase-separated [[nucleoid|dna]] housing the 4,641,652 bp covalently closed circular chromosome.'
      },
      es: {
        pop: '¡En el centro flota el [[nucleoide|dna]]: 4,6 millones de letras de ADN sin caja fuerte alrededor!',
        blueprint: 'Almacén central de firmware: el [[nucleoide|dna]] sin membrana aloja 4,6 Mpb de código circular.',
        scientific: '[[Nucleoide|dna]] central segregado por fase con el cromosoma circular cerrado de 4.641.652 pb.'
      }
    },
    'ec.ch3.nuc.02': {
      en: {
        pop: 'Unrolled, that loop spans 1.6 millimetres—800× the cell, packed tighter than a Pokémon in a Poké Ball!',
        blueprint: 'Extreme 800:1 axial compression packs a 1.6 mm linear contour neatly inside a 2 µm hull.',
        scientific: 'Contour length 1.58 mm (800× cell length) compacted ~10³-fold into ~10 kb topological loops (σ ≈ −0.05).'
      },
      es: {
        pop: '¡Estirado mide 1,6 milímetros —800 veces la célula—, comprimido mejor que un Pokémon en su Pokébola!',
        blueprint: 'Compresión geométrica 800:1 que aloja 1,6 mm de contorno lineal dentro de un chasis de 2 µm.',
        scientific: 'Longitud de contorno de 1,58 mm (800× la célula) compactada ~10³ veces en dominios de ~10 kb (σ ≈ −0,05).'
      }
    },
    'ec.ch3.nuc.03': {
      en: {
        pop: '[[DNA gyrase|hu]] winds springy twists while nimble [[HU proteins|hu]] clip sharp corners on the fly.',
        blueprint: 'Torsion & routing hardware: [[DNA gyrase|hu]] injects negative supercoils as [[HU proteins|hu]] kink loops.',
        scientific: 'Type IIA [[DNA gyrase|hu]] (PDB 6RKW) maintains negative supercoiling while ~30,000 [[HU proteins|hu]] bend DNA.'
      },
      es: {
        pop: 'La [[ADN girasa|hu]] tensa espirales elásticas mientras ágiles [[proteínas HU|hu]] doblan las esquinas.',
        blueprint: 'Hardware de torsión: la [[ADN girasa|hu]] introduce superenrollamientos y las [[proteínas HU|hu]] pliegan bucles.',
        scientific: 'La [[ADN girasa|hu]] (PDB 6RKW) genera superhélices negativas y ~30.000 [[proteínas HU|hu]] curvan el ADN.'
      }
    },
    'ec.ch3.fork.01': {
      en: {
        pop: 'Shadow Clone Jutsu in action: this [[replication fork|fork]] duplicates DNA at 1,000 letters a second!',
        blueprint: 'High-speed DMA duplicator: each [[replication fork|fork]] clones duplex code at 1,000 bp/s throughput.',
        scientific: 'Bidirectional oriC-initiated [[replication fork|fork]] (~250 nm replisome) polymerizing at ~1,000 nt/s.'
      },
      es: {
        pop: '¡Jutsu Clones de Sombra: esta [[horquilla de replicación|fork]] duplica el ADN a 1.000 letras por segundo!',
        blueprint: 'Duplicador de alta velocidad: la [[horquilla de replicación|fork]] clona el código a 1.000 pb/s.',
        scientific: '[[Horquilla de replicación|fork]] bidireccional iniciada en oriC (~250 nm) que avanza a ~1.000 nt/s.'
      }
    },
    'ec.ch3.fork.02': {
      en: {
        pop: '[[DnaB helicase|fork]] unzips the track ahead while twin [[Pol III|fork]] sprinters copy both rails!',
        blueprint: 'Coupled unzip-and-write stage: [[DnaB helicase|fork]] splits strands for τ-linked twin [[Pol III|fork]] cores.',
        scientific: 'Hexameric [[DnaB helicase|fork]] (6QEL) unwinds 5′→3′ as clamp-bound [[Pol III|fork]] cores (5FKV) synthesize.'
      },
      es: {
        pop: '¡La [[helicasa DnaB|fork]] abre la cremallera delante mientras dos [[Pol III|fork]] copian ambas vías!',
        blueprint: 'Etapa acoplada: la [[helicasa DnaB|fork]] separa hebras para dos núcleos [[Pol III|fork]] enlazados por τ.',
        scientific: 'La [[helicasa DnaB|fork]] hexamérica (6QEL) abre 5′→3′ y dos núcleos [[Pol III|fork]] (5FKV) sintetizan.'
      }
    },
    'ec.ch3.fork.03': {
      en: {
        pop: 'The backward rail loops like a trombone into [[Okazaki fragments|dna]], shielded by SSB bodyguards.',
        blueprint: 'Trombone loop buffer: antiparallel lagging synthesis builds SSB-wrapped [[Okazaki fragments|dna]].',
        scientific: 'DnaG-primed 1–2 kb lagging [[Okazaki fragments|dna]] loop around homotetrameric SSB spools (PDB 1EYG).'
      },
      es: {
        pop: 'La vía inversa se arquea como un trombón en [[fragmentos de Okazaki|dna]] escoltados por guardianes SSB.',
        blueprint: 'Búfer en bucle de trombón: la hebra rezagada se ensambla en [[fragmentos de Okazaki|dna]] cubiertos de SSB.',
        scientific: 'Los [[fragmentos de Okazaki|dna]] (1–2 kb, cebados por DnaG) se enrollan en tetrámeros SSB (PDB 1EYG).'
      }
    },
    'ec.ch4.gene.01': {
      en: {
        pop: 'With no office walls, reading genes and 3D-printing proteins happen live on the exact same floor!',
        blueprint: 'Zero-latency pipeline: unpartitioned cytosol couples transcription directly to translation.',
        scientific: 'Absence of a nuclear envelope enables direct physical expressome coupling of RNAP and 70S ribosomes.'
      },
      es: {
        pop: '¡Sin muros de oficina, leer los genes e imprimir proteínas ocurre en vivo sobre la misma pista!',
        blueprint: 'Pipeline de latencia cero: el citosol abierto acopla directamente la transcripción con la traducción.',
        scientific: 'La ausencia de envoltura nuclear permite el acoplamiento físico directo en expresomas RNAP–ribosoma 70S.'
      }
    },
    'ec.ch4.gene.02': {
      en: {
        pop: '[[RNA polymerase|rnap]] skates along DNA, reeling out fresh [[mRNA|mrna]] ticker-tape dispatches.',
        blueprint: 'Stream encoder: [[RNA polymerase|rnap]] transcribes chromosomal operons into nascent [[mRNA|mrna]].',
        scientific: 'Core α₂ββ′ω [[RNA polymerase|rnap]] (PDB 4YG2) elongates nascent [[mRNA|mrna]] at ~40–80 nt/s.'
      },
      es: {
        pop: 'La [[ARN polimerasa|rnap]] patina por el ADN soltando cintas calentitas de [[ARNm|mrna]] mensajero.',
        blueprint: 'Codificador en flujo: la [[ARN polimerasa|rnap]] transcribe operones en hebras nacientes de [[ARNm|mrna]].',
        scientific: 'La [[ARN polimerasa|rnap]] α₂ββ′ω (PDB 4YG2) elonga transcritos nacientes de [[ARNm|mrna]] a ~40–80 nt/s.'
      }
    },
    'ec.ch4.gene.03': {
      en: {
        pop: 'Impatient [[70S ribosomes|ribosome]] leap onto that tape mid-sentence like commuters boarding a moving train!',
        blueprint: 'Pipelined decoders: [[70S ribosomes|ribosome]] dock onto 5′ leaders while 3′ transcription continues.',
        scientific: 'Polysomal [[70S ribosomes|ribosome]] (PDB 4YBB) bind Shine–Dalgarno leaders to translate at ~20 aa/s.'
      },
      es: {
        pop: '¡Impacientes [[ribosomas 70S|ribosome]] saltan al mensaje en marcha como pasajeros a un tren en movimiento!',
        blueprint: 'Decodificadores en serie: los [[ribosomas 70S|ribosome]] inician en 5′ antes de terminar el extremo 3′.',
        scientific: 'Polisomas de [[ribosomas 70S|ribosome]] (PDB 4YBB) se unen a secuencias Shine–Dalgarno (~20 aa/s).'
      }
    },
    'ec.ch4.cyto.01': {
      en: {
        pop: 'Double-decker [[GroEL–GroES chaperonins|cyto]] work like Dragon Ball’s Time Chamber for folding proteins!',
        blueprint: 'Quality-control isolation pods: barrel [[GroEL–GroES chaperonins|cyto]] refold nascent chains via ATP.',
        scientific: 'Tetradecameric [[GroEL–GroES chaperonins|cyto]] (PDB 1AON; ~800 kDa) encapsulate ~60 kDa substrates.'
      },
      es: {
        pop: '¡Los barriles [[chaperoninas GroEL–GroES|cyto]] son Cámaras del Tiempo privadas para plegar proteínas!',
        blueprint: 'Cápsulas de control de calidad: las [[chaperoninas GroEL–GroES|cyto]] repliegan cadenas gastando ATP.',
        scientific: 'Las [[chaperoninas GroEL–GroES|cyto]] tetradecaméricas (PDB 1AON; ~800 kDa) aíslan y pliegan sustratos.'
      }
    },
    'ec.ch4.cyto.02': {
      en: {
        pop: 'Tucked at the poles, [[glycogen granules|glycogen]] stash emergency glucose like Dragon Ball Senzu beans!',
        blueprint: 'Polar energy capacitors: branched [[glycogen granules|glycogen]] buffer surplus glucose reserves.',
        scientific: 'Polar α-(1→4)/α-(1→6) [[glycogen granules|glycogen]] (~20–50 nm) store polymeric glucose for starvation.'
      },
      es: {
        pop: '¡En los polos, los [[gránulos de glucógeno|glycogen]] guardan glucosa extra como Semillas del Ermitaño!',
        blueprint: 'Condensadores polares de reserva: los [[gránulos de glucógeno|glycogen]] almacenan polímeros de glucosa.',
        scientific: 'Los [[gránulos de glucógeno|glycogen]] α-(1→4)/α-(1→6) (~20–50 nm) reservan glucosa en los polos.'
      }
    },
    'ec.ch4.fin.01': {
      en: {
        pop: 'Proton turbines, DNA cloning, and protein printing roar together—one tiny cell at full throttle!',
        blueprint: 'Full-duplex operation: chemiosmotic power, genome replication, and translation run concurrently.',
        scientific: 'Steady-state exponential growth integrates Δp generation, ~40-min oriC replication, and ~50,000 ribosomes.'
      },
      es: {
        pop: '¡Turbinas de protones, clonado de ADN e impresión de proteínas rugen a la vez a máxima potencia!',
        blueprint: 'Operación simultánea: bus protónico, replicación genómica y traducción acoplada corren en paralelo.',
        scientific: 'El crecimiento exponencial integra generación de Δp, replicación desde oriC y ~50.000 ribosomas activos.'
      }
    },
    'ec.ch4.fin.02': {
      en: {
        pop: 'Click any glowing tag or highlighted link to zoom right down to real atomic PDB models!',
        blueprint: 'Select any telemetry tag or inline link to load atomic-resolution PDB component views.',
        scientific: 'Select any structural label to inspect experimental X-ray and cryo-EM PDB coordinates at atomic scale.'
      },
      es: {
        pop: '¡Haz clic en cualquier etiqueta o enlace brillante para bajar hasta los modelos atómicos PDB reales!',
        blueprint: 'Selecciona cualquier etiqueta o enlace para abrir las vistas de componentes PDB a escala atómica.',
        scientific: 'Haz clic en cualquier etiqueta para inspeccionar estructuras experimentales PDB por crio-ME y rayos X.'
      }
    },
    'ec.det.env.01': {
      en: {
        pop: 'Three shields in one: slick LPS armor outside, chainmail in the middle, and a live-wire skin inside.',
        blueprint: 'Trilaminar Gram-negative hull stack: asymmetric LPS outer shield, murein brace, inner power membrane.',
        scientific: 'Tripartite ~35 nm envelope: ~7 nm LPS/phospholipid OM, ~4 nm Lpp-tethered murein, ~7 nm phospholipid IM.'
      },
      es: {
        pop: 'Tres escudos en uno: coraza externa de LPS, cota de malla central y piel eléctrica en el interior.',
        blueprint: 'Apilamiento trilaminar gramnegativo: escudo asimétrico de LPS, malla de mureína y membrana interna.',
        scientific: 'Envoltura tripartita (~35 nm): ME asimétrica de LPS (~7 nm), mureína (~4 nm) y MI fosfolipídica (~7 nm).'
      }
    },
    'ec.det.env.02': {
      en: {
        pop: 'OmpF doors welcome bite-sized snacks while AcrAB–TolC cannons boot gatecrashing antibiotics out!',
        blueprint: 'Selective perimeter I/O: passive OmpF porins admit nutrients while AcrAB–TolC ejects xenobiotics.',
        scientific: 'Trimeric OmpF β-barrels (PDB 2OMF) pass <600 Da solutes; RND AcrAB–TolC (PDB 5O66) extrudes drugs via Δp.'
      },
      es: {
        pop: '¡Las puertas OmpF admiten bocados pequeños mientras el cañón AcrAB–TolC expulsa antibióticos intrusos!',
        blueprint: 'E/S perimetral selectiva: las porinas OmpF filtran nutrientes y AcrAB–TolC eyecta xenobióticos.',
        scientific: 'Los barriles β OmpF (PDB 2OMF) filtran <600 Da; AcrAB–TolC (PDB 5O66) expulsa fármacos consumiendo Δp.'
      }
    },
    'ec.det.mot.01': {
      en: {
        pop: 'Behold nature’s ultimate pod-racer engine: a 45 nm proton-powered axle bolted across all three walls!',
        blueprint: '45 nm trans-envelope rotary drive: bush-bearing P/L rings guide an H⁺-powered rotor through the hull.',
        scientific: '45 nm flagellar basal body spanning OM, peptidoglycan, and IM via FlgH/FlgI bushings and FliF MS-ring.'
      },
      es: {
        pop: '¡Contempla un motor digno de Star Wars: un eje rotatorio de 45 nm empernado a las tres murallas!',
        blueprint: 'Propulsor rotatorio transenvoltura de 45 nm con cojinetes P/L y eje impulsado por flujo de protones.',
        scientific: 'Cuerpo basal flagelar de 45 nm que cruza ME, mureína y MI mediante anillos FlgH/FlgI y anillo MS FliF.'
      }
    },
    'ec.det.mot.02': {
      en: {
        pop: 'Ringed MotA/MotB stators kick the MS and C rings past 100 spins a second without burning a drop of ATP!',
        blueprint: 'Up to 11 MotA/MotB stator units convert periplasmic H⁺ influx into 100+ rps MS/C-ring shaft torque.',
        scientific: 'Peptidoglycan-anchored MotA₅MotB₂ stators torque the FliF/FliG rotor at 100–300 Hz (~1,200 H⁺/rev).'
      },
      es: {
        pop: '¡Los estatores MotA/MotB patean los anillos MS y C a más de 100 giros por segundo sin gastar ATP!',
        blueprint: 'Hasta 11 estatores MotA/MotB convierten el influjo de H⁺ en giro de los anillos MS y C a >100 rps.',
        scientific: 'Estatores MotA₅MotB₂ anclados a mureína aplican par sobre el rotor FliF/FliG a 100–300 Hz (~1.200 H⁺/giro).'
      }
    },
    'ec.det.pole.01': {
      en: {
        pop: 'Thousands of sensor trimers link arms into a honeycomb radar sensitive to a single whiff of sugar!',
        blueprint: 'Cooperative phased-array nose: trimers-of-dimers form an amplified hexagonal chemotaxis lattice.',
        scientific: 'Polar hexagonal lattice (12 nm spacing) of MCP trimers-of-dimers bridged at cytoplasmic tips by CheA/CheW.'
      },
      es: {
        pop: '¡Miles de sensores enlazan brazos en un panal radar capaz de oler la más mínima traza de azúcar!',
        blueprint: 'Nariz en matriz en fase: trímeros de dímeros forman una red hexagonal con amplificación cooperativa.',
        scientific: 'Red hexagonal polar (paso de 12 nm) de trímeros de dímeros MCP enlazados en su base por CheA y CheW.'
      }
    },
    'ec.det.pole.02': {
      en: {
        pop: 'CheA kinase acts as navigator—staying chill on a snack trail or yelling "Tumble!" when flavors drop.',
        blueprint: 'Signal comparator: attractant loss activates CheA autophosphorylation, dispatching CheY-P tumble commands.',
        scientific: 'Attractant-free MCPs activate histidine kinase CheA, elevating CheY-P to switch FliM/C-ring spin to CW.'
      },
      es: {
        pop: 'La quinasa CheA ejerce de navegante: mantiene rumbo hacia el festín o grita «¡Vuelco!» si baja el rastro.',
        blueprint: 'Comparador de señal: la caída de atrayentes activa CheA y envía paquetes CheY-P de inversión motora.',
        scientific: 'La falta de ligando activa la histidina-quinasa CheA, elevando CheY-P para conmutar el anillo C a horario.'
      }
    },
    'ec.det.nuc.01': {
      en: {
        pop: '4.6 million DNA letters braided into springy plectoneme braids—neat, compact, and ready to read!',
        blueprint: '4.6 Mbp circular genome partitioned into negatively supercoiled plectonemic loop domains.',
        scientific: '4.64 Mbp circular chromosome organized into ~400 negatively supercoiled plectonemic loops (~10 kb each).'
      },
      es: {
        pop: '¡4,6 millones de letras de ADN trenzadas en bucles elásticos, compactos y listos para leerse al vuelo!',
        blueprint: 'Genoma circular de 4,6 Mpb particionado en dominios de bucles plectonémicos con torsión negativa.',
        scientific: 'Cromosoma circular de 4,64 Mpb organizado en ~400 bucles plectonémicos superenrollados (~10 kb cada uno).'
      }
    },
    'ec.det.nuc.02': {
      en: {
        pop: 'Who needs bulky eukaryotic histone spools when nimble HU, Fis, and gyrase tame the whole tangle?',
        blueprint: 'Histone-free compaction: HU clips, Fis bridges, and DNA gyrase maintain accessible loop geometry.',
        scientific: 'Nucleoid-associated proteins (HU, Fis, H-NS, IHF, MukBEF) and DNA gyrase compact DNA without histones.'
      },
      es: {
        pop: '¿Quién necesita pesados carretes de histonas teniendo a HU, Fis y la ADN girasa domando el ovillo?',
        blueprint: 'Compactación sin histonas: pinzas HU, puentes Fis y ADN girasa sostienen bucles siempre accesibles.',
        scientific: 'Proteínas asociadas al nucleoide (HU, Fis, H-NS, IHF, MukBEF) y la ADN girasa compactan sin histonas.'
      }
    },
    'ec.det.gene.01': {
      en: {
        pop: 'Every tiny bead here is one real amino acid or RNA letter—live factory teamwork at true scale!',
        blueprint: '1:1 residue-scale expressome pipeline: transcription feeds directly into polysomal translation.',
        scientific: 'Co-transcriptional translation rendered at 1 bead per nucleotide/residue along nascent mRNA.'
      },
      es: {
        pop: '¡Cada cuentecita es un aminoácido o nucleótido real: trabajo en cadena en vivo y a escala exacta!',
        blueprint: 'Pipeline expresoma a escala 1:1 por residuo: la transcripción alimenta en directo a los polisomas.',
        scientific: 'Traducción cotranscripcional trazada a 1 esfera por nucleótido o aminoácido sobre el ARNm naciente.'
      }
    },
    'ec.det.gene.02': {
      en: {
        pop: 'A conga line of 70S ribosomes drafts right behind RNAP, printing proteins before the sentence ends!',
        blueprint: 'Serial ribosome convoy trails RNAP closely, shielding nascent mRNA from premature Rho termination.',
        scientific: 'Polysome train of 70S ribosomes trailing RNAP at ~20 aa/s prevents R-loops and Rho factor termination.'
      },
      es: {
        pop: '¡Una locomotora de ribosomas 70S sigue pegada a la polimerasa fabricando proteínas a media frase!',
        blueprint: 'Un convoy de ribosomas 70S avanza tras la RNAP protegiendo el ARNm naciente frente al factor Rho.',
        scientific: 'Un tren de ribosomas 70S sigue a la RNAP (~20 aa/s), suprimiendo bucles R y la terminación por Rho.'
      }
    },
    'ec.det.fork.01': {
      en: {
        pop: 'Meet the ultimate copy crew: DnaB unzips, DnaG drops starter tags, and twin Pol III engines race ahead!',
        blueprint: 'Integrated replisome core: hexameric DnaB unzipper, DnaG primer unit, and τ-coupled twin Pol IIIs.',
        scientific: 'E. coli replisome: DnaB₆ helicase (6QEL), DnaG primase, γ/τ₃δδ′ clamp loader, and two Pol III cores (5FKV).'
      },
      es: {
        pop: '¡El equipo copiador definitivo: DnaB abre paso, DnaG pone cebadores y dos motores Pol III vuelan!',
        blueprint: 'Núcleo integrado del replisoma: helicasa DnaB, primasa DnaG y dos polimerasas Pol III acopladas.',
        scientific: 'Replisoma de E. coli: helicasa DnaB₆ (6QEL), primasa DnaG, cargador γ/τ₃δδ′ y dos núcleos Pol III (5FKV).'
      }
    },
    'ec.det.fork.02': {
      en: {
        pop: 'One rail writes non-stop while the backward rail loops out like a musical slide trombone in chunks!',
        blueprint: 'Asymmetric duplex synthesis: continuous leading-strand write paired with looped Okazaki batching.',
        scientific: 'Semidiscontinuous synthesis: continuous 5′→3′ leading strand and 1–2 kb looped lagging Okazaki fragments.'
      },
      es: {
        pop: '¡Una vía se escribe del tirón mientras la vía inversa se arquea en tramos como la vara de un trombón!',
        blueprint: 'Síntesis dúplex asimétrica: escritura continua en la conductora y por lotes en bucle en la rezagada.',
        scientific: 'Síntesis semidiscontinua: hebra conductora continua 5′→3′ y fragmentos de Okazaki en bucle de 1–2 kb.'
      }
    },
    'ec.det.ribo.01': {
      en: {
        pop: 'E. coli’s sleek 70S protein printer (PDB 4YBB): a 30S reader clamped under a 50S stitching dome!',
        blueprint: 'Prokaryotic 70S translation unit (PDB 4YBB): 30S codon decoder mated to 50S peptidyl-transferase.',
        scientific: 'E. coli 70S ribosome (PDB 4YBB, ~2.5 MDa): 30S (16S rRNA + 21 proteins) and 50S (23S/5S rRNA + 33 proteins).'
      },
      es: {
        pop: '¡La impresora 70S de E. coli (PDB 4YBB): lector 30S abajo y cúpula cosedora 50S arriba a todo gas!',
        blueprint: 'Unidad de traducción 70S (PDB 4YBB): decodificador 30S acoplado al centro peptidil-transferasa 50S.',
        scientific: 'Ribosoma 70S de E. coli (PDB 4YBB, ~2,5 MDa): subunidades 30S (ARNr 16S) y 50S (ARNr 23S/5S).'
      }
    },
    'ec.det.ribo.02': {
      en: {
        pop: 'Because this 70S model differs from our 80S printers, antibiotics jam it like a custom wrench!',
        blueprint: 'Selective drug target: unique 70S rRNA pockets let clinical antibiotics halt bacteria without host harm.',
        scientific: 'Prokaryote-specific 16S/23S rRNA pockets bind tetracyclines, aminoglycosides, and macrolides selectively.'
      },
      es: {
        pop: '¡Como este modelo 70S difiere de nuestro 80S, los antibióticos lo atascan sin tocar nuestras células!',
        blueprint: 'Diana farmacológica selectiva: bolsillos exclusivos del 70S permiten bloquear bacterias sin dañar el 80S.',
        scientific: 'Bolsillos exclusivos del ARNr 16S/23S fijan tetraciclinas, aminoglucósidos y macrólidos selectivamente.'
      }
    },
    'ec.det.rnap.01': {
      en: {
        pop: 'Guided by its σ70 scout visor, RNA polymerase (PDB 4YG2) locks onto gene start lines in a snap!',
        blueprint: 'Transcription holoenzyme (PDB 4YG2): σ70 promoter-recognition module docked on core α₂ββ′ω crab-claw.',
        scientific: 'E. coli RNAP holoenzyme α₂ββ′ωσ70 (PDB 4YG2, ~450 kDa) recognizing −35/−10 consensus promoters.'
      },
      es: {
        pop: '¡Con su visor explorador σ70, la ARN polimerasa (PDB 4YG2) localiza el inicio de cada gen al instante!',
        blueprint: 'Holoenzima de transcripción (PDB 4YG2): módulo promotor σ70 acoplado a la pinza catalítica α₂ββ′ω.',
        scientific: 'Holoenzima ARN polimerasa α₂ββ′ωσ70 (PDB 4YG2, ~450 kDa) unida a elementos promotores −35 y −10.'
      }
    },
    'ec.det.groel.01': {
      en: {
        pop: 'GroEL–GroES (PDB 1AON) stacks two seven-part barrels under a cap like a molecular pressure cooker!',
        blueprint: 'Dual-ring folding pod (PDB 1AON): back-to-back heptameric GroEL chambers sealed by a GroES heptamer lid.',
        scientific: 'Chaperonin complex GroEL₁₄–GroES₇ (PDB 1AON, ~800 kDa; ~14.5 × 18 nm) with cis/trans heptameric rings.'
      },
      es: {
        pop: '¡GroEL–GroES (PDB 1AON) apila dos barriles de siete piezas con tapa como una olla exprés molecular!',
        blueprint: 'Cápsula de plegamiento de doble anillo (PDB 1AON): dos heptámeros GroEL cerrados por la tapa GroES₇.',
        scientific: 'Complejo chaperonina GroEL₁₄–GroES₇ (PDB 1AON, ~800 kDa; ~14,5 × 18 nm) con anillos heptaméricos cis/trans.'
      }
    },
    'ec.det.groel.02': {
      en: {
        pop: 'Tangled proteins get ~10 quiet seconds inside its Hyperbolic Time Chamber to fold without crowding!',
        blueprint: 'ATP-clocked hydrophilic Anfinsen cage (~10 s cycle) prevents aggregation during polypeptide folding.',
        scientific: '7 ATP-driven GroES capping switches the cis cavity wall from hydrophobic to hydrophilic (~10 s timer).'
      },
      es: {
        pop: '¡Las proteínas enredadas ganan ~10 segundos a solas en esta Cámara del Tiempo para plegarse en paz!',
        blueprint: 'Jaula hidrofílica temporizada por ATP (~10 s por ciclo) que evita agregados durante el plegamiento.',
        scientific: 'La unión de 7 ATP y GroES vuelve hidrofílica la cavidad cis durante ~10 s para el plegamiento aislado.'
      }
    },
    'ec.det.hu.01': {
      en: {
        pop: 'Tiny HU (PDB 1MUL) hugs DNA with two flexible ribbon arms, bending hairpin turns like a paperclip!',
        blueprint: 'Minor-groove bending clip (PDB 1MUL): dimeric α-body inserts two β-ribbon arms to kink duplex DNA.',
        scientific: 'Heterodimeric NAP HUαβ (PDB 1MUL, ~18 kDa) intercalates conserved Pro63 via β-arms to bend DNA 105–140°.'
      },
      es: {
        pop: '¡La diminuta HU (PDB 1MUL) abraza el ADN con dos brazos flexibles para doblar curvas cerradas al vuelo!',
        blueprint: 'Pinza curvadora del surco menor (PDB 1MUL): cuerpo α dimérico con dos brazos β que doblan la hélice.',
        scientific: 'El heterodímero HUαβ (PDB 1MUL, ~18 kDa) intercala Pro63 mediante dos brazos β, curvando el ADN 105–140°.'
      }
    },
    'ec.det.mcp.01': {
      en: {
        pop: 'Shaped like a springy tuning fork, this four-helix stalk (PDB 1QU7) telegraphs tiny tastes downward!',
        blueprint: 'Transmembrane signal rod (PDB 1QU7): 20 nm four-helix coiled coil relaying periplasmic shifts to CheA.',
        scientific: 'Homodimeric MCP cytoplasmic domain (PDB 1QU7, ~36 nm full length) with HAMP and Glu methylation sites.'
      },
      es: {
        pop: '¡Como un diapasón elástico de cuatro hélices (PDB 1QU7), transmite cada sabor directo hasta su punta!',
        blueprint: 'Varilla transductora (PDB 1QU7): superhélice cuádruple de 20 nm que transmite desplazamientos a CheA.',
        scientific: 'Dominio citoplasmático homodimérico MCP (PDB 1QU7, ~36 nm totales) con HAMP y banda de metilación Glu.'
      }
    },
    'ec.det.atps.01': {
      en: {
        pop: 'F₁F₀ ATP synthase (PDB 6OQR): protons whirl the c-ring carousel so the γ shaft stamps out ATP!',
        blueprint: 'Rotary F₁F₀ power converter (PDB 6OQR): c₁₀ proton turbine drives eccentric γ camshaft inside α₃β₃.',
        scientific: 'Intact E. coli F₁F₀ ATP synthase (PDB 6OQR, ~530 kDa, α₃β₃γδεab₂c₁₀) yielding 3 ATP per 10 H⁺.'
      },
      es: {
        pop: '¡ATP sintasa F₁F₀ (PDB 6OQR): los protones giran el carrusel c para que el eje γ estampe ATP sin parar!',
        blueprint: 'Convertidor rotatorio F₁F₀ (PDB 6OQR): la turbina c₁₀ acciona el árbol de levas γ dentro de α₃β₃.',
        scientific: 'ATP sintasa F₁F₀ íntegra de E. coli (PDB 6OQR, ~530 kDa, α₃β₃γδεab₂c₁₀): sintetiza 3 ATP por cada 10 H⁺.'
      }
    },
    'ec.det.nuo.01': {
      en: {
        pop: 'Complex I (PDB 7NYR) is a lean 13-piece L-shaped engine—the compact ancestor of our 45-piece monster!',
        blueprint: 'Minimalist L-frame Complex I (PDB 7NYR): 13 core NuoA–N subunits housing redox wire and H⁺ antiporters.',
        scientific: 'E. coli NDH-1 / Complex I (PDB 7NYR, ~535 kDa, 13 subunits NuoA–N): minimal conserved bioenergetic core.'
      },
      es: {
        pop: '¡El Complejo I (PDB 7NYR) es un motor en L de 13 piezas, ancestro ligero del nuestro de 45 piezas!',
        blueprint: 'Bastidor en L del Complejo I (PDB 7NYR): 13 subunidades NuoA–N con cable redox y canales antiporter.',
        scientific: 'NDH-1 / Complejo I de E. coli (PDB 7NYR, ~535 kDa, 13 polipéptidos NuoA–N): núcleo catalítico mínimo.'
      }
    },
    'ec.det.nuo.02': {
      en: {
        pop: 'Electrons zip down nine iron–sulfur stepping stones to quinone, kicking four protons out per pair!',
        blueprint: '2 e⁻ hop from FMN across 9 Fe–S clusters to quinone, actuating 4 H⁺ ejection across the membrane arm.',
        scientific: 'FMN and nine Fe–S clusters transfer 2 e⁻ from NADH to ubiquinone-8, translocating 4 H⁺ across NuoLMN/H.'
      },
      es: {
        pop: '¡Dos electrones bajan por nueve piedras de hierro-azufre y lanzan cuatro protones fuera de un golpe!',
        blueprint: '2 e⁻ viajan desde FMN por 9 centros Fe–S hasta quinona, accionando el bombeo de 4 H⁺ transmembrana.',
        scientific: 'FMN y nueve centros Fe–S transfieren 2 e⁻ del NADH a ubiquinona-8, bombeando 4 H⁺ vía NuoL, NuoM y NuoN.'
      }
    },
    'ec.det.pump.01': {
      en: {
        pop: 'Standing 33 nm tall, AcrAB–TolC (PDB 5O66) towers across the whole wall like an orbital launch tube!',
        blueprint: '33 nm trans-envelope efflux stack (PDB 5O66): AcrB₃ pump + AcrA₆ adapter + TolC₃ outer-hull chimney.',
        scientific: 'Tripartite RND complex AcrB₃–AcrA₆–TolC₃ (PDB 5O66, ~770 kDa, 33 nm axial span) bridging IM and OM.'
      },
      es: {
        pop: '¡Con 33 nm de altura, AcrAB–TolC (PDB 5O66) cruza toda la muralla como un tubo de lanzamiento orbital!',
        blueprint: 'Torre de eflujo de 33 nm (PDB 5O66): bomba AcrB₃ + adaptador AcrA₆ + chimenea externa TolC₃.',
        scientific: 'Complejo RND tripartito AcrB₃–AcrA₆–TolC₃ (PDB 5O66, ~770 kDa, 33 nm axiales) tendido entre MI y ME.'
      }
    },
    'ec.det.pump.02': {
      en: {
        pop: 'Trading incoming protons for outgoing poison, it keeps multidrug-resistant bacteria unscathed!',
        blueprint: 'H⁺-coupled peristaltic extrusion purges hydrophobic antibiotics before they enter the cytosol.',
        scientific: 'Asp407–Asp408–Lys940 H⁺ relay in AcrB powers peristaltic drug expulsion out the 14 nm TolC duct.'
      },
      es: {
        pop: '¡Cambiando protones entrantes por veneno saliente, blinda a las bacterias multirresistentes!',
        blueprint: 'La extrusión peristáltica acoplada a H⁺ purga antibióticos hidrofóbicos antes de pisar el citosol.',
        scientific: 'El relé protónico Asp407–Asp408–Lys940 de AcrB impulsa la expulsión de fármacos por el canal TolC.'
      }
    },
    'ec.det.dnab.01': {
      en: {
        pop: 'Six DnaB subunits lock into a motorized zipper pull (PDB 6QEL), splitting DNA at 1,000 bases/s!',
        blueprint: 'Hexameric 5′→3′ unzipping motor (PDB 6QEL): hand-over-hand NTPase ring splitting parental duplex DNA.',
        scientific: 'Superfamily 4 hexameric helicase DnaB₆ (PDB 6QEL, ~312 kDa) translocating 5′→3′ at 2 nt per NTP.'
      },
      es: {
        pop: '¡Seis piezas de DnaB forman un cursor motorizado (PDB 6QEL) que abre el ADN a 1.000 bases por segundo!',
        blueprint: 'Motor hexamérico 5′→3′ (PDB 6QEL): anillo NTPasa que avanza mano sobre mano abriendo el dúplex parental.',
        scientific: 'Helicasa hexamérica SF4 DnaB₆ (PDB 6QEL, ~312 kDa) que transloca 5′→3′ a razón de 2 nt por NTP.'
      }
    },
    'ec.det.pol3.01': {
      en: {
        pop: 'Locked to DNA by a golden β doughnut clamp, Pol III (PDB 5FKV) types fast and backspaces typos live!',
        blueprint: 'High-processivity writer (PDB 5FKV): Pol III αεθ core + β₂ sliding clamp with 3′→5′ proofreading.',
        scientific: 'Pol III αεθ core bound to homodimeric β₂ clamp (PDB 5FKV): ~1,000 nt/s synthesis with <10⁻⁷ error/bp.'
      },
      es: {
        pop: '¡Sujeta por su rosquilla β deslizante, la Pol III (PDB 5FKV) escribe a mil por hora y corrige erratas!',
        blueprint: 'Escritor de alta procesividad (PDB 5FKV): núcleo Pol III αεθ + pinza β₂ con corrector 3′→5′ integrado.',
        scientific: 'Núcleo Pol III αεθ unido a la pinza dimérica β₂ (PDB 5FKV): síntesis a ~1.000 nt/s y error <10⁻⁷/pb.'
      }
    },
    'ec.det.gyr.01': {
      en: {
        pop: 'DNA gyrase (PDB 6RKW) cuts DNA, passes a strand through, and reseals—unless ciprofloxacin jams the gate!',
        blueprint: 'ATP-driven Type IIA topoisomerase (PDB 6RKW): ΔLk = −2 strand-passage gate targeted by fluoroquinolones.',
        scientific: 'GyrA₂GyrB₂ holoenzyme (PDB 6RKW, ~374 kDa) introducing negative supercoils; poisoned by ciprofloxacin.'
      },
      es: {
        pop: '¡La ADN girasa (PDB 6RKW) corta, cruza y sella el ADN, salvo que el ciprofloxacino atasque su compuerta!',
        blueprint: 'Topoisomerasa IIA dependiente de ATP (PDB 6RKW): paso de hebra ΔLk = −2 bloqueado por fluoroquinolonas.',
        scientific: 'Tetrámero GyrA₂GyrB₂ (PDB 6RKW, ~374 kDa) generador de superhélices negativas; diana del ciprofloxacino.'
      }
    }
  },
  'real-phage': {
    't4.ch0.intro.01': {
      en: {
        pop: 'Enter Bacteriophage T4—an apex mecha-predator engineered by evolution to hunt Escherichia coli!',
        blueprint: 'System overview: Bacteriophage T4, an autonomous mechanochemical virion targeting E. coli.',
        scientific: 'Tequatrovirus T4 (Caudoviricetes, Straboviridae): a lytic myovirus infecting Escherichia coli.'
      },
      es: {
        pop: '¡Entra en escena el bacteriófago T4: un meca-depredador diseñado para cazar bacterias E. coli!',
        blueprint: 'Vista general del sistema: bacteriófago T4, virión mecanicoquímico autónomo contra E. coli.',
        scientific: 'Tequatrovirus T4 (Caudoviricetes, Straboviridae): miovirus lítico específico de Escherichia coli.'
      }
    },
    't4.ch0.intro.02': {
      en: {
        pop: 'Standing 200 nm tall, it looks like an Apollo lunar lander crossed with an Evangelion syringe!',
        blueprint: '200 nm modular chassis: a proteinaceous spring-loaded hypodermic lander requiring zero onboard ATP.',
        scientific: 'Total axial height ~200 nm (~100 MDa virion mass) built from >40 distinct structural gene products.'
      },
      es: {
        pop: '¡Con 200 nm de altura, parece un módulo lunar Apolo cruzado con una jeringa de Evangelion!',
        blueprint: 'Chasis modular de 200 nm: inyector hipodérmico proteico accionado por resorte sin gasto de ATP.',
        scientific: 'Altura axial de ~200 nm (~100 MDa de masa) ensamblada a partir de >40 productos génicos distintos.'
      }
    },
    't4.ch0.intro.03': {
      en: {
        pop: 'We sliced open its head, tail, and the target bacterium below for an X-ray heist view!',
        blueprint: 'Axial cross-section cutaway exposing capsid vault, contractile actuator, and host hull layers.',
        scientific: 'Longitudinal cutaway revealing the prolate head, coaxial gp18/gp19 tail, and Gram-negative envelope.'
      },
      es: {
        pop: '¡Cortamos por la mitad su cabeza, su cola y la bacteria inferior para ver el asalto en rayos X!',
        blueprint: 'Sección axial en corte que expone la bóveda, el actuador contráctil y las tres capas del huésped.',
        scientific: 'Corte longitudinal de la cabeza prolata, la cola coaxial gp18/gp19 y la envoltura gramnegativa.'
      }
    },
    't4.ch0.intro.04': {
      en: {
        pop: 'Every gear and spike is built from real atomic crystal and cryo-EM coordinates at one true scale.',
        blueprint: '1:1 physical CAD assembly constructed directly from experimental atomic coordinate datasets.',
        scientific: 'All sub-assemblies are rendered at uniform scale (1 unit = 10 nm) from cryo-EM and X-ray PDB models.'
      },
      es: {
        pop: 'Cada engranaje y aguja proviene de coordenadas atómicas reales trazadas a una sola escala exacta.',
        blueprint: 'Ensamblaje CAD físico 1:1 construido directamente desde coordenadas atómicas experimentales.',
        scientific: 'Todos los subensamblajes se representan a escala uniforme (1 unidad = 10 nm) desde modelos PDB.'
      }
    },
    't4.ch0.intro.05': {
      en: {
        pop: 'Hit Space to freeze-frame the strike anytime, or click Explore to fly around the lander solo!',
        blueprint: 'Press Space to pause sequence playback, or activate Explore for manual orbital inspection.',
        scientific: 'Press Space to halt the infection timeline, or switch to Explore to inspect individual PDB modules.'
      },
      es: {
        pop: '¡Pulsa Espacio para congelar el ataque al instante, o Explorar para volar libre alrededor del fago!',
        blueprint: 'Pulsa Espacio para pausar la secuencia, o activa Explorar para inspección orbital manual.',
        scientific: 'Pulsa Espacio para detener la cinética de infección, o elige Explorar para examinar módulos PDB.'
      }
    },
    't4.ch1.capsid.01': {
      en: {
        pop: 'Up top gleams the faceted [[capsid|capsid]] warhead, measuring 115 by 85 nanometres across.',
        blueprint: 'Upper payload tank: the elongated [[capsid|capsid]] pressure vessel spans 115 nm by 85 nm.',
        scientific: 'Prolate icosahedral [[capsid|capsid]] (115 × 85 nm; T_end = 13 laevo, Q = 20; cryo-EM PDB 5VF3).'
      },
      es: {
        pop: 'Arriba brilla la ojiva facetada de la [[cápside|capsid]], de 115 por 85 nanómetros de calibre.',
        blueprint: 'Tanque superior de carga: la [[cápside|capsid]] prolata de alta presión mide 115 por 85 nm.',
        scientific: '[[Cápside|capsid]] icosaédrica prolata (115 × 85 nm; simetría T_end = 13 laevo, Q = 20; PDB 5VF3).'
      }
    },
    't4.ch1.capsid.02': {
      en: {
        pop: '155 hexagonal shields of gp23* interlock across its walls like Iron Man’s nano-armor plates.',
        blueprint: 'Shell plating: 155 hexameric gp23* tiles interlock into a continuous load-bearing lattice.',
        scientific: 'Facet walls comprise 930 cleaved gp23* subunits (48.7 kDa, HK97 fold) arranged in 155 hexamers.'
      },
      es: {
        pop: '155 escudos hexagonales de gp23* se entrelazan en sus muros como placas de nanoarmadura.',
        blueprint: 'Blindaje estructural: 155 losetas hexaméricas gp23* forman una red continua de carga.',
        scientific: 'Las facetas reúnen 930 monómeros maduros gp23* (48,7 kDa, plegamiento HK97) en 155 hexámeros.'
      }
    },
    't4.ch1.capsid.03': {
      en: {
        pop: 'Coiled DNA pushes outward at intense champagne-bottle pressure, yet this armor never cracks!',
        blueprint: 'Rated up to ~60–500 atm peak internal stress, the shell stores hydraulic energy for ejection.',
        scientific: 'Confinement of 169 kbp dsDNA generates ~60 atm osmotic pressure (up to ~500 atm local bending stress).'
      },
      es: {
        pop: '¡El ADN empuja por dentro con una presión brutal de champán agitado, pero el casco ni se inmuta!',
        blueprint: 'Capaz de resistir ~60–500 atm de tensión pico, la carcasa almacena energía hidráulica de disparo.',
        scientific: 'El confinamiento de 169 kpb genera ~60 atm de presión osmótica (hasta ~500 atm de tensión local).'
      }
    },
    't4.ch1.soc.01': {
      en: {
        pop: 'Zoom in to spot [[Soc clamp trimers|soc]] stapling gp23* tiles together like vibranium rivets!',
        blueprint: 'External hoop reinforcement: 810 [[Soc clamp trimers|soc]] bridge seams between gp23* hexamers.',
        scientific: 'At quasi-three-fold axes, 810 copies of 9.1 kDa Soc form [[Soc clamp trimers|soc]] across gp23* rims.'
      },
      es: {
        pop: '¡De cerca, los [[trímeros de abrazadera Soc|soc]] engrapan las losetas gp23* como remaches de vibranio!',
        blueprint: 'Refuerzo perimetral externo: 810 subunidades en [[trímeros de abrazadera Soc|soc]] sellan las juntas.',
        scientific: 'En los ejes cuasi-ternarios, [[trímeros de abrazadera Soc|soc]] (9,1 kDa, 810 copias) enlazan gp23*.'
      }
    },
    't4.ch1.soc.02': {
      en: {
        pop: 'Those outer straps let T4 shrug off scalding heat, pH swings, and brutal osmotic shocks.',
        blueprint: 'Clamp bracing hardens the vessel against alkaline pH (up to 10.6), heat, and osmotic shock.',
        scientific: 'Soc ligation elevates capsid thermal melting temperature by ~6 °C and stabilizes against pH 10.6.'
      },
      es: {
        pop: 'Esas correas externas permiten a T4 resistir calor, pH extremo y choques osmóticos sin abrirse.',
        blueprint: 'El arriostramiento Soc protege el tanque frente a pH alcalino (10,6), calor y choque osmótico.',
        scientific: 'La unión de Soc eleva la temperatura de desnaturalización ~6 °C y estabiliza la cápside a pH 10,6.'
      }
    },
    't4.ch1.soc.03': {
      en: {
        pop: 'Dead center on every hexamer rises one [[Hoc spike|soc]]—helping T4 hitch rides on gut mucus!',
        blueprint: 'Surface tether mast: one central [[Hoc spike|soc]] projects outward from each gp23* hexamer.',
        scientific: 'One 40.4 kDa Ig-like [[Hoc spike|soc]] (155 total copies) protrudes ~18 nm from each gp23* hexamer.'
      },
      es: {
        pop: '¡En el centro de cada hexámero asoma una [[espícula Hoc|soc]] que engancha el moco intestinal!',
        blueprint: 'Mástil superficial de anclaje: una [[espícula Hoc|soc]] sobresale del eje de cada hexámero gp23*.',
        scientific: 'Una [[espícula Hoc|soc]] tipo inmunoglobulina (40,4 kDa; 155 copias) emerge de cada hexámero gp23*.'
      }
    },
    't4.ch1.vertex.01': {
      en: {
        pop: 'Ask any soccer-ball maker: flat hexagons alone can roll a tube, never a closed dome!',
        blueprint: 'Euler geometric constraint: hexagonal tiling requires twelve 5-fold disclinations to close.',
        scientific: 'By Euler’s polyhedron theorem, closing a hexagonal lattice requires exactly 12 five-fold vertices.'
      },
      es: {
        pop: 'Pregunta a cualquier artesano de balones: ¡con puros hexágonos jamás cerrarás una cúpula!',
        blueprint: 'Restricción geométrica de Euler: una red hexagonal exige doce vértices pentagonales para cerrarse.',
        scientific: 'Por el teorema de Euler, cerrar una red icosaédrica hexagonal requiere exactamente 12 pentámeros.'
      }
    },
    't4.ch1.vertex.02': {
      en: {
        pop: 'So eleven sharp corners lock shut with five-sided [[gp24* pentamers|vertex]] built for high stress.',
        blueprint: 'Corner keystones: eleven high-curvature vertices are sealed by five-fold [[gp24* pentamers|vertex]].',
        scientific: 'Eleven vertices carry homopentameric [[gp24* pentamers|vertex]] (5 × 46 kDa, HK97 fold; PDB 5VF3).'
      },
      es: {
        pop: 'Por eso once esquinas críticas quedan selladas con resistentes [[pentámeros gp24*|vertex]].',
        blueprint: 'Piedras angulares: once vértices de alta curvatura se cierran con [[pentámeros gp24*|vertex]].',
        scientific: 'Once vértices alojan [[pentámeros gp24*|vertex]] homopentaméricos (5 × 46 kDa, PDB 5VF3).'
      }
    },
    't4.ch1.dna.01': {
      en: {
        pop: 'Wound tight inside sits 169,000 base pairs of [[double-stranded DNA|dna]]—the hijack script!',
        blueprint: 'Compressed payload: 169 kbp of coaxially spooled [[double-stranded DNA|dna]] fills the vault.',
        scientific: 'Encapsidated 168,903 bp linear [[double-stranded DNA|dna]] (~300 genes) wound in ~2.5 nm coaxial layers.'
      },
      es: {
        pop: '¡Enrollados a presión aguardan 169.000 pares de bases de [[ADN bicatenario|dna]] listos para el golpe!',
        blueprint: 'Carga útil comprimida: 169 kpb de [[ADN bicatenario|dna]] bobinado coaxialmente llenan la cámara.',
        scientific: 'Genoma lineal de 168.903 pb de [[ADN bicatenario|dna]] (~300 genes) dispuesto en capas a ~2,5 nm.'
      }
    },
    't4.ch1.dna.02': {
      en: {
        pop: 'Unspooled, that thread spans 57 micrometres—280× taller than T4, Poké-Ball style!',
        blueprint: '280:1 linear-to-axial packing ratio condenses a 57 µm contour inside a 115 nm chamber.',
        scientific: 'B-form contour length 57.4 µm (287× virion height) packed to ~500 mg/mL quasi-crystalline density.'
      },
      es: {
        pop: '¡Desenrollado mide 57 micrómetros —280 veces la altura del fago—, digno de una Pokébola!',
        blueprint: 'Relación de compresión 280:1 que empaqueta 57 µm de hebra dentro de una cámara de 115 nm.',
        scientific: 'Longitud de contorno de 57,4 µm (287× el virión) empaquetada a densidad cuasicristalina (~500 mg/mL).'
      }
    },
    't4.ch1.dna.03': {
      en: {
        pop: 'Sugar-coated cytosines act like Harry Potter’s invisibility cloak against bacterial DNA scissors!',
        blueprint: 'Anti-restriction encryption: glucosylated hydroxymethylcytosines foil host endonuclease firewalls.',
        scientific: 'Glucosylated 5-hydroxymethylcytosines (gh-dCMP) sterically block host restriction endonucleases.'
      },
      es: {
        pop: '¡Sus citosinas azucaradas son una capa de invisibilidad frente a las tijeras de restricción!',
        blueprint: 'Cifrado antirrestricción: las hidroximetilcitosinas glucosiladas burlan las nucleasas del huésped.',
        scientific: 'La 5-hidroximetilcitosina glucosilada (gh-dCMP) bloquea estéricamente las endonucleasas de restricción.'
      }
    },
    't4.ch1.core.01': {
      en: {
        pop: 'Right down the bullseye of that DNA coil sits the [[internal protein core|core]].',
        blueprint: 'Central mandrel: the [[internal protein core|core]] scaffolds prohead assembly and stores effectors.',
        scientific: 'Axial [[internal protein core|core]] composed of processed gp22 scaffold peptides and ~1,000 IP copies.'
      },
      es: {
        pop: 'Justo en el ojo del huracán de esa bobina descansa el [[núcleo proteico interno|core]].',
        blueprint: 'Mandril axial: el [[núcleo proteico interno|core]] guía el ensamblaje y aloja efectores listos.',
        scientific: '[[Núcleo proteico interno|core]] formado por péptidos del andamio gp22 y ~1.000 proteínas IP*.'
      }
    },
    't4.ch1.core.02': {
      en: {
        pop: 'Its IPI* bodyguards parachute into E. coli alongside the DNA to jam anti-phage traps!',
        blueprint: 'Co-injected countermeasures: cleaved IPI* peptides enter first to disable host GmrSD nucleases.',
        scientific: 'Proteolytically processed IPI* (~10 kDa, ~360 copies) co-ejects to inhibit host GmrSD endonucleases.'
      },
      es: {
        pop: '¡Sus escoltas IPI* saltan en paracaídas junto al ADN para inutilizar las defensas bacterianas!',
        blueprint: 'Contramedidas coinyectadas: los péptidos IPI* entran primero e inhiben nucleasas GmrSD del huésped.',
        scientific: 'La proteína procesada IPI* (~10 kDa, ~360 copias) se coinyecta para inhibir nucleasas GmrSD.'
      }
    },
    't4.ch1.portal.01': {
      en: {
        pop: 'At the twelfth bottom corner spins the 12-bladed [[gp20 portal|portal]] gateway.',
        blueprint: 'Basal symmetry adapter: the dodecameric [[gp20 portal|portal]] bridges 5-fold head to 6-fold tail.',
        scientific: 'Twelfth vertex houses the 12-subunit [[gp20 portal|portal]] dodecamer (12 × 61 kDa; cryo-EM PDB 3JA7).'
      },
      es: {
        pop: 'En la duodécima esquina inferior aguarda la compuerta de 12 álabes del [[portal gp20|portal]].',
        blueprint: 'Adaptador basal de simetría: el [[portal gp20|portal]] conecta la cabeza orden 5 con la cola orden 6.',
        scientific: 'El duodécimo vértice aloja el dodecámero del [[portal gp20|portal]] (12 × 61 kDa; crio-ME PDB 3JA7).'
      }
    },
    't4.ch1.portal.02': {
      en: {
        pop: 'During build, a furious gp17 ATP turbo-pump docks here to cram the whole genome uphill!',
        blueprint: 'Charging phase: transient pentameric gp17 ATPase docks here to pump 169 kbp into the head.',
        scientific: 'During packaging, pentameric gp17 terminase ATPase translocates dsDNA inward at up to ~2,000 bp/s.'
      },
      es: {
        pop: '¡Al fabricarse, un turbomotor gp17 a puro ATP se acopla aquí para embutir todo el genoma!',
        blueprint: 'Fase de carga: la ATPasa pentamérica gp17 se acopla temporalmente para bombear los 169 kpb.',
        scientific: 'Durante la maduración, la terminasa ATPasa gp17 introduce el ADNbc hasta ~2.000 pb/s contra presión.'
      }
    },
    't4.ch1.portal.03': {
      en: {
        pop: 'Sealed by neck rings, it holds the blast back like a champagne cork until launch time!',
        blueprint: 'Check-valve latch: gp13/gp14 neck rings stopper the 3.5 nm bore until tail contraction opens it.',
        scientific: 'Tunnel loops and gp13/gp14 neck proteins seal the ~3.5 nm lumen until baseplate triggering.'
      },
      es: {
        pop: '¡Sellado por el cuello, retiene la presión como un corcho de champán hasta la orden de fuego!',
        blueprint: 'Válvula de retención: los anillos gp13/gp14 taponan el paso de 3,5 nm hasta el disparo caudal.',
        scientific: 'Los bucles internos y el cuello gp13/gp14 obturan el canal de ~3,5 nm hasta la contracción.'
      }
    },
    't4.ch2.collar.01': {
      en: {
        pop: 'Right under the neck sits the [[collar with six whiskers|collar]], looking like cybernetic cat whiskers.',
        blueprint: 'Upper neck assembly: gp13/gp14/gp15 connector rings mount the [[collar with six whiskers|collar]].',
        scientific: 'Beneath gp20 sit hexameric gp13/gp14/gp15 rings and the [[collar with six whiskers|collar]] (gpWac).'
      },
      es: {
        pop: 'Justo bajo el cuello asoma el [[collar con seis bigotes|collar]], cual bigotes de gato cibernético.',
        blueprint: 'Ensamblaje cervical: los anillos conectores gp13–gp15 portan el [[collar con seis bigotes|collar]].',
        scientific: 'Bajo gp20 se sitúan los anillos gp13/gp14/gp15 y el [[collar con seis bigotes|collar]] de fibritina.'
      }
    },
    't4.ch2.collar.02': {
      en: {
        pop: 'In cold or acidic waters, these fibritin whiskers tuck the long legs up like X-wing S-foils!',
        blueprint: 'Environmental safety interlock: trimeric gpWac whiskers stow long tail fibers in bad conditions.',
        scientific: 'Trimeric coiled-coil fibritin (gpWac, ~53 nm) retracts long tail fibers under low pH or ionic strength.'
      },
      es: {
        pop: '¡Si el medio es frío o ácido, estos bigotes repliegan las patas como alas de X-wing en crucero!',
        blueprint: 'Seguro ambiental: los bigotes triméricos gpWac mantienen plegadas las fibras en medios hostiles.',
        scientific: 'La fibritina trimérica en superhélice (gpWac, ~53 nm) retrae las fibras largas a bajo pH o salinidad.'
      }
    },
    't4.ch2.collar.03': {
      en: {
        pop: 'Sense warm gut broth? Lock S-foils in attack position—the whiskers drop the legs to hunt!',
        blueprint: 'Deployment release: favorable temperature and ionic strength unlatch the fibers for target scan.',
        scientific: 'At physiological ionic strength and 37 °C, gpWac releases the six fibers into extended search state.'
      },
      es: {
        pop: '¿Caldo intestinal tibio? ¡Alas en posición de ataque: los bigotes sueltan las patas para cazar!',
        blueprint: 'Despliegue activo: la temperatura y salinidad óptimas liberan las fibras para rastrear presas.',
        scientific: 'A fuerza iónica fisiológica y 37 °C, gpWac libera las seis fibras hacia su conformación exploradora.'
      }
    },
    't4.ch2.sheath.01': {
      en: {
        pop: 'Wrapping the tail are 24 stacked rings of six gp18 proteins: the [[contractile sheath|sheath]].',
        blueprint: 'Outer linear actuator: 24 hexameric gp18 rings stack to build the [[contractile sheath|sheath]].',
        scientific: 'Extended [[contractile sheath|sheath]] (92.5 × 24 nm; PDB 3J2M) of 144 gp18 subunits in 24 hexamers.'
      },
      es: {
        pop: 'Envolviendo la cola se apilan 24 anillos de seis piezas gp18: la [[vaina contráctil|sheath]].',
        blueprint: 'Actuador lineal externo: 24 anillos hexaméricos gp18 conforman la [[vaina contráctil|sheath]].',
        scientific: '[[Vaina contráctil|sheath]] extendida (92,5 × 24 nm; PDB 3J2M) de 144 subunidades gp18 en 24 anillos.'
      }
    },
    't4.ch2.sheath.02': {
      en: {
        pop: 'Cocked during assembly like Luffy’s Gum-Gum Bazooka, it stores pure hair-trigger tension!',
        blueprint: 'Pre-loaded metastable spring: conformational enthalpy is locked in during viral morphogenesis.',
        scientific: 'Polymerized in a high-energy metastable state storing ~25,000 kJ/mol total conformational enthalpy.'
      },
      es: {
        pop: '¡Armada de fábrica como un Golpe Bazooka de Luffy, guarda pura tensión lista para estallar!',
        blueprint: 'Resorte metaestable precargado: almacena energía elástica durante la morfogénesis sin requerir ATP.',
        scientific: 'Polimeriza en estado metaestable de alta energía acumulando ~25.000 kJ/mol de entalpía total.'
      }
    },
    't4.ch2.sheath.03': {
      en: {
        pop: 'Fire! Like an Evangelion pile-bunker, the rings twist and slam down to less than half height!',
        blueprint: 'Actuation stroke: hexamers rotate and interdigitate, collapsing sheath length from 92.5 to 42 nm.',
        scientific: 'β-sheet-linked gp18 domains rotate ~45°, shrinking axial rise from 4.06 to 1.64 nm (33 nm wide).'
      },
      es: {
        pop: '¡Fuego! ¡Como un martinete de Evangelion, los anillos giran y se aplastan a menos de la mitad!',
        blueprint: 'Carrera de disparo: los hexámeros rotan y se interdigitan, acortando la vaina de 92,5 a 42 nm.',
        scientific: 'Los dominios gp18 rotan ~45°, reduciendo el paso axial de 4,06 a 1,64 nm y ensanchándose a 33 nm.'
      }
    },
    't4.ch2.tube.01': {
      en: {
        pop: 'Hidden inside that spring runs the unbending [[gp19 inner tail tube|tube]] syringe barrel.',
        blueprint: 'Coaxial piercing shaft: inside the sheath sits the non-contractile [[gp19 inner tail tube|tube]].',
        scientific: 'Internal [[gp19 inner tail tube|tube]] (92.5 × 9.0 nm; PDB 5W5F) of 24 stacked gp19 hexamers.'
      },
      es: {
        pop: 'Oculto dentro del resorte corre el inflexible cañón del [[tubo interno de la cola gp19|tube]].',
        blueprint: 'Eje perforador coaxial: dentro de la vaina viaja el [[tubo interno de la cola gp19|tube]] rígido.',
        scientific: '[[Tubo interno de la cola gp19|tube]] (92,5 × 9,0 nm; PDB 5W5F) formado por 24 hexámeros apilados.'
      }
    },
    't4.ch2.tube.02': {
      en: {
        pop: 'When the outer sleeve crunches down, it rams this 9 nm pipe straight through bacterial armor!',
        blueprint: '50 nm axial stroke drives this 9 nm outer-diameter cylinder across the breached host envelope.',
        scientific: 'Sheath contraction translates the 9 nm gp19 β-barrel cylinder ~50 nm across the outer wall and periplasm.'
      },
      es: {
        pop: '¡Al encogerse la funda exterior, clava este cilindro de 9 nm directo a través de la muralla!',
        blueprint: 'Un avance axial de ~50 nm hunde este cilindro de 9 nm a través de la envoltura perforada.',
        scientific: 'La contracción desplaza ~50 nm el cilindro β gp19 de 9 nm a través de la membrana externa y mureína.'
      }
    },
    't4.ch2.tube.03': {
      en: {
        pop: 'Slick negative walls turn its 4 nm bore into a maglev rail firing [[DNA|dna]] at warp speed!',
        blueprint: 'Low-friction 4 nm electronegative bore guides pressurized [[DNA|dna]] single-file into the host.',
        scientific: 'Electronegative 4.0 nm lumen repels polyanionic [[DNA|dna]] phosphates for rapid translocation.'
      },
      es: {
        pop: '¡Sus paredes negativas crean un riel de levitación de 4 nm por donde vuela el [[ADN|dna]]!',
        blueprint: 'Su conducto electronegativo de 4 nm guía el [[ADN|dna]] sin fricción hacia la membrana interna.',
        scientific: 'El lumen electronegativo de 4,0 nm repele el esqueleto fosfato del [[ADN|dna]] evitando atascos.'
      }
    },
    't4.ch3.ltf.01': {
      en: {
        pop: 'Six knee-jointed [[long tail fibers|ltf]] reach out 145 nanometres like mechanical spider legs.',
        blueprint: 'Primary target sensors: six hinged 145 nm [[long tail fibers|ltf]] scan the surrounding surface.',
        scientific: 'Six articulated 145 nm [[long tail fibers|ltf]] built from trimeric gp34, gp35 knee, gp36, and gp37.'
      },
      es: {
        pop: 'Seis [[fibras largas de la cola|ltf]] con rodilla se estiran 145 nm como patas mecánicas de araña.',
        blueprint: 'Sensores primarios: seis [[fibras largas de la cola|ltf]] articuladas de 145 nm exploran la presa.',
        scientific: 'Seis [[fibras largas de la cola|ltf]] de 145 nm compuestas por gp34, rótula gp35, gp36 y punta gp37.'
      }
    },
    't4.ch3.ltf.02': {
      en: {
        pop: 'Tip-toeing across E. coli, their iron-braced gp37 tips hunt for [[OmpF porins|porin]]!',
        blueprint: 'Reversible surface walk: distal gp37 tips sample LPS until locking onto [[OmpF porins|porin]].',
        scientific: 'Fe²⁺-coordinated gp37 tips (PDB 2XGF) reversibly probe LPS and dock onto trimeric [[OmpF porins|porin]].'
      },
      es: {
        pop: '¡Caminando de puntillas sobre E. coli, sus puntas gp37 buscan encajar en [[porinas OmpF|porin]]!',
        blueprint: 'Rastreo reversible: las puntas distales gp37 tantean el LPS hasta fijar [[porinas OmpF|porin]].',
        scientific: 'Las puntas gp37 con 7 Fe²⁺ (PDB 2XGF) exploran el LPS y se acoplan a [[porinas OmpF|porin]] triméricas.'
      }
    },
    't4.ch3.ltf.03': {
      en: {
        pop: 'Twang! Like Spider-Man’s web tripwire, receptor lock yanks a mechanical signal up to the hub!',
        blueprint: 'Mechanical lever transmission: multi-fiber engagement applies torque directly to baseplate sockets.',
        scientific: 'Simultaneous binding of ≥3 fibers transmits lever tension through gp9/gp7 sockets to the baseplate.'
      },
      es: {
        pop: '¡Zas! ¡Como un hilo trampa de Spider-Man, el enganche manda un tirón mecánico directo a la base!',
        blueprint: 'Transmisión por palanca: el anclaje de varias fibras aplica par mecánico sobre los zócalos basales.',
        scientific: 'El acople simultáneo de ≥3 fibras transmite tensión mecánica vía gp9/gp7 hacia la placa basal.'
      }
    },
    't4.ch3.baseplate.01': {
      en: {
        pop: 'Meet the phage’s mechanical brain: the 150-piece [[hexagonal baseplate|baseplate]]!',
        blueprint: 'Central fire-control hub: the [[hexagonal baseplate|baseplate]] integrates fiber inputs to gate firing.',
        scientific: 'Six-fold [[hexagonal baseplate|baseplate]] (~52 nm, ~6.5 MDa; ~150 subunits of 15 proteins, PDB 5IV5).'
      },
      es: {
        pop: '¡Aquí está el cerebro mecánico del fago: la [[placa basal hexagonal|baseplate]] de 150 piezas!',
        blueprint: 'Centro de control de tiro: la [[placa basal hexagonal|baseplate]] integra tirones y autoriza el disparo.',
        scientific: '[[Placa basal hexagonal|baseplate]] (~52 nm, ~6,5 MDa; ~150 subunidades de 15 proteínas, PDB 5IV5).'
      }
    },
    't4.ch3.baseplate.02': {
      en: {
        pop: 'Transformers roll out! Fiber tugs flip its six wedges from a cupped dome into a flat 6-pointed star!',
        blueprint: 'Bistable mechanical latch: peripheral pull snaps six wedges from a 52 nm dome into a 61 nm star.',
        scientific: 'Cooperative wedge rearrangement switches the ~52 nm dome (PDB 5IV5) into a ~61 nm star (PDB 5IV7).'
      },
      es: {
        pop: '¡Al estilo Transformers, el tirón abre sus seis cuñas de cúpula cerrada a estrella de seis puntas!',
        blueprint: 'Pestillo mecánico biestable: la tracción conmuta seis cuñas de cúpula (52 nm) a estrella plana (61 nm).',
        scientific: 'La reorganización cooperativa transforma la cúpula de ~52 nm (5IV5) en estrella de ~61 nm (5IV7).'
      }
    },
    't4.ch3.baseplate.03': {
      en: {
        pop: 'Click-BOOM! That star-snap pulls the sear pin and unleashes the coiled sheath overhead!',
        blueprint: 'Trigger propagation: star expansion releases gp25/gp48/gp54 contacts, firing the gp18 sheath.',
        scientific: 'Baseplate expansion unlatches the gp25–gp18 interface, initiating a rapid upward contraction wave.'
      },
      es: {
        pop: '¡Clic y FUEGO! ¡Ese chasquido en estrella suelta el fiador y desata la vaina contráctil arriba!',
        blueprint: 'Propagación de disparo: la apertura estelar libera el seguro gp25 y activa la vaina gp18.',
        scientific: 'La expansión basal desbloquea la interfaz gp25–gp18, propagando hacia arriba la onda contráctil.'
      }
    },
    't4.ch3.stf.01': {
      en: {
        pop: 'As the star blooms open, six [[short tail fibers (gp12)|stf]] swing down like ODM grappling hooks!',
        blueprint: 'Secondary anchor deployment: wedge opening rotates six [[short tail fibers (gp12)|stf]] 180° down.',
        scientific: 'Dome-to-star transition unfolds six homotrimeric [[short tail fibers (gp12)|stf]] (~34 nm; PDB 1OCY).'
      },
      es: {
        pop: '¡Al abrirse la estrella, seis [[fibras cortas de la cola (gp12)|stf]] bajan como garfios de maniobra!',
        blueprint: 'Despliegue de anclaje secundario: giran 180° seis [[fibras cortas de la cola (gp12)|stf]].',
        scientific: 'La transición cúpula-estrella despliega seis homotrímeros [[fibras cortas de la cola (gp12)|stf]] (1OCY).'
      }
    },
    't4.ch3.stf.02': {
      en: {
        pop: 'Zinc-loaded jaws bite irreversibly onto host [[LPS sugars|om]]—there is zero shaking this grip!',
        blueprint: 'Permanent clampdown: Zn²⁺-braced C-terminal heads lock onto inner-core [[LPS sugars|om]].',
        scientific: 'Zn²⁺-stabilized gp12 heads bind inner-core heptose [[LPS sugars|om]] with sub-nanomolar avidity.'
      },
      es: {
        pop: '¡Sus fauces con zinc muerden sin retorno los [[azúcares LPS|om]] del huésped: agarre total!',
        blueprint: 'Fijación irreversible: los cabezales con Zn²⁺ se empernan al núcleo de los [[azúcares LPS|om]].',
        scientific: 'Los cabezales gp12 con Zn²⁺ axial fijan heptosas de [[azúcares LPS|om]] con avidez subnanomolar.'
      }
    },
    't4.ch3.stf.03': {
      en: {
        pop: 'Bolted tight to the deck, the lander won’t bounce backward when the needle slams downward!',
        blueprint: 'Recoil arrest: six-point surface clamping absorbs Newton-third-law thrust during wall puncture.',
        scientific: 'Hexavalent LPS anchorage counters axial puncture recoil as the gp19/gp5 spike breaches the outer wall.'
      },
      es: {
        pop: '¡Empernado a cubierta, el módulo no rebotará hacia atrás cuando el punzón golpee la muralla!',
        blueprint: 'Freno antirretroceso: el anclaje séxtuple absorbe la reacción axial durante la perforación.',
        scientific: 'El anclaje hexavalente al LPS contrarresta el retroceso mecánico al penetrar la aguja gp19/gp5.'
      }
    },
    't4.ch3.needle.01': {
      en: {
        pop: 'Dead center gleams the [[gp27–gp5 puncturing needle|needle]], sharp as Evangelion’s Lance of Longinus!',
        blueprint: 'Armor-piercing tip: central hub mounts the [[gp27–gp5 puncturing needle|needle]] assembly.',
        scientific: 'Central heterotrimeric [[gp27–gp5 puncturing needle|needle]] ((gp27)₃–(gp5)₃, ~19 nm; PDB 1K28).'
      },
      es: {
        pop: '¡En el centro reluce la [[aguja perforadora gp27–gp5|needle]], afilada cual Lanza de Longinus!',
        blueprint: 'Cabezal perforante: el eje central porta la [[aguja perforadora gp27–gp5|needle]].',
        scientific: 'Complejo heterotrimérico central [[aguja perforadora gp27–gp5|needle]] ((gp27)₃–(gp5)₃; PDB 1K28).'
      }
    },
    't4.ch3.needle.02': {
      en: {
        pop: 'Driven by the sheath slam, its triangular β-helix dagger punches clean through the outer shield!',
        blueprint: 'Kinetic breach: sheath thrust drives the rigid triple-stranded β-helix prism across the outer hull.',
        scientific: 'C-terminal gp5 equilateral triple-β-helix + gp5.4 PAAR tip mechanically breach the LPS bilayer.'
      },
      es: {
        pop: '¡Impulsada por la vaina, su daga triangular en hélice β perfora de cuajo el escudo externo!',
        blueprint: 'Brecha cinética: el empuje caudal clava el prisma rígido de triple hélice β en la membrana externa.',
        scientific: 'El prisma C-terminal en triple hélice β de gp5 y la punta gp5.4 PAAR perforan la bicapa de LPS.'
      }
    },
    't4.ch3.needle.03': {
      en: {
        pop: 'Then three built-in lysozyme buzzsaws chew a tunnel straight through [[peptidoglycan|pg]] chainmail!',
        blueprint: 'Enzymatic clearance: three T4 lysozyme modules hydrolyze periplasmic [[peptidoglycan|pg]] mesh.',
        scientific: 'Three GH24 muramidase domains on gp5 cleave β-(1→4) bonds in [[peptidoglycan|pg]] to clear passage.'
      },
      es: {
        pop: '¡Luego tres cuchillas de lisozima serruchan un boquete en la malla de [[peptidoglicano|pg]]!',
        blueprint: 'Despeje enzimático: tres dominios lisozima T4 hidrolizan la red periplásmica de [[peptidoglicano|pg]].',
        scientific: 'Tres dominios muramidasa GH24 de gp5 escinden enlaces β-(1→4) del [[peptidoglicano|pg]].'
      }
    },
    't4.ch4.envelope.01': {
      en: {
        pop: 'Down below, E. coli’s three Attack on Titan fortress walls suddenly face a hull breach!',
        blueprint: 'Target defense stack: E. coli relies on a three-tier Gram-negative perimeter under assault.',
        scientific: 'Host E. coli ~35 nm tripartite Gram-negative cell envelope undergoing localized mechanical breach.'
      },
      es: {
        pop: '¡Abajo, las tres murallas estilo Ataque a los Titanes de E. coli sufren una brecha directa!',
        blueprint: 'Defensa multicapa del objetivo: el perímetro gramnegativo de tres niveles recibe el impacto.',
        scientific: 'Envoltura celular tripartita (~35 nm) de E. coli sometida a perforación mecánica y lisis local.'
      }
    },
    't4.ch4.envelope.02': {
      en: {
        pop: 'The phage turned E. coli’s own [[LPS outer membrane|om]] and [[OmpF porins|porin]] into landing pads!',
        blueprint: 'Compromised outer tier: [[LPS outer membrane|om]] and [[OmpF porins|porin]] serve as phage docking keys.',
        scientific: 'Asymmetric [[LPS outer membrane|om]] and trimeric [[OmpF porins|porin]] exploited as dual phage receptors.'
      },
      es: {
        pop: '¡El fago usó la propia [[membrana externa de LPS|om]] y las [[porinas OmpF|porin]] como pista de aterrizaje!',
        blueprint: 'Nivel externo vulnerado: [[membrana externa de LPS|om]] y [[porinas OmpF|porin]] actúan como anclajes.',
        scientific: '[[Membrana externa de LPS|om]] y [[porinas OmpF|porin]] explotadas como receptores secuenciales.'
      }
    },
    't4.ch4.envelope.03': {
      en: {
        pop: 'Past the chewed [[peptidoglycan wall|pg]], the tail tube kisses the [[inner membrane|im]] doorway!',
        blueprint: 'Inner breach: crossing digested [[peptidoglycan wall|pg]], gp19 docks at the [[inner membrane|im]].',
        scientific: 'Crossing lysed [[peptidoglycan wall|pg]], the gp19 conduit engages the phospholipid [[inner membrane|im]].'
      },
      es: {
        pop: '¡Cruzada la [[pared de peptidoglicano|pg]], el tubo besa la [[membrana interna|im]] citoplasmática!',
        blueprint: 'Brecha interna: tras cruzar la [[pared de peptidoglicano|pg]], gp19 contacta la [[membrana interna|im]].',
        scientific: 'Atravesada la [[pared de peptidoglicano|pg]], el tubo gp19 acopla un canal en la [[membrana interna|im]].'
      }
    },
    't4.ch4.rnap.01': {
      en: {
        pop: 'WHOOSH! Bottled pressure fires [[viral DNA|dna]] into the cell like One Piece’s Coup de Burst!',
        blueprint: 'Payload injection: stored capsid pressure drives 169 kbp [[viral DNA|dna]] into the host cytosol.',
        scientific: 'Translocation of 168.9 kbp [[viral DNA|dna]] across the inner membrane proceeds at ~3,000–4,000 bp/s.'
      },
      es: {
        pop: '¡ZUMBA! ¡La presión dispara el [[ADN viral|dna]] al interior como un Coup de Burst de One Piece!',
        blueprint: 'Inyección de carga: la presión interna impulsa 169 kpb de [[ADN viral|dna]] hacia el citosol.',
        scientific: 'La translocación de los 168,9 kpb de [[ADN viral|dna]] cruza la membrana interna a ~3.000–4.000 pb/s.'
      }
    },
    't4.ch4.rnap.02': {
      en: {
        pop: 'Agent Smith style from The Matrix, T4 instantly hijacks host [[RNA polymerase|rnap]]!',
        blueprint: 'Control-plane takeover: strong early promoters capture host [[RNA polymerase|rnap]] within seconds.',
        scientific: 'Injected Alt ADP-ribosyltransferase and early promoters redirect host σ70 [[RNA polymerase|rnap]] (4YG2).'
      },
      es: {
        pop: '¡Al puro estilo Agente Smith en Matrix, T4 secuestra en segundos la [[ARN polimerasa|rnap]]!',
        blueprint: 'Secuestro de control: promotores tempranos fuertes capturan la [[ARN polimerasa|rnap]] del huésped.',
        scientific: 'La ADP-ribosilación por Alt y promotores tempranos redirigen la [[ARN polimerasa|rnap]] σ70 (4YG2).'
      }
    },
    't4.ch4.ribosome.01': {
      en: {
        pop: 'Unwitting [[70S ribosomes|ribosome]] start mass-printing phage parts instead of bacterial gear!',
        blueprint: 'Factory reprogramming: host [[70S ribosomes|ribosome]] translate viral mRNAs into progeny hardware.',
        scientific: 'Host [[70S ribosomes|ribosome]] (PDB 4YBB) translate early, middle, and late T4 transcripts (~20 aa/s).'
      },
      es: {
        pop: '¡Sin saberlo, los [[ribosomas 70S|ribosome]] pasan a fabricar piezas del fago a destajo!',
        blueprint: 'Reprogramación fabril: los [[ribosomas 70S|ribosome]] traducen ARNm viral en chasis nuevos.',
        scientific: 'Los [[ribosomas 70S|ribosome]] (PDB 4YBB) traducen cascadas tempranas, medias y tardías de T4.'
      }
    },
    't4.ch4.ribosome.02': {
      en: {
        pop: '25 minutes at 37 °C later—KABOOM! Over 100 fresh T4 clones burst out for the sequel!',
        blueprint: 'Lytic cycle completion: holin–endolysin breach at 25 min (37 °C) releases ~100–200 assembled virions.',
        scientific: 'At ~25 min (37 °C), gpT holin and gpE lysozyme lyse the envelope, releasing a burst of ~100–200 virions.'
      },
      es: {
        pop: '¡En 25 minutos a 37 °C, PUM: la bacteria estalla liberando más de 100 clones nuevos de T4!',
        blueprint: 'Fin del ciclo lítico: a los 25 min (37 °C), holina y endolisina liberan ~100–200 viriones completos.',
        scientific: 'A ~25 min (37 °C), la holina gpT y la endolisina gpE lisan la célula liberando ~100–200 viriones.'
      }
    },
    't4.ch5.flows.01': {
      en: {
        pop: 'Roll the full action sequence—watch T4’s domino-chain heist play out live!',
        blueprint: 'Full state-machine execution: observe the end-to-end mechanochemical cascade in real time.',
        scientific: 'Real-time kinetic visualization of receptor binding, sheath contraction, and genome transfer.'
      },
      es: {
        pop: '¡Acción en directo: mira cómo cae cada ficha de dominó del asalto viral en tiempo real!',
        blueprint: 'Ejecución completa de estados: observa en vivo toda la cascada mecanicoquímica de infección.',
        scientific: 'Visualización cinética en tiempo real de adsorción, contracción caudal y transferencia génica.'
      }
    },
    't4.ch5.flows.02': {
      en: {
        pop: 'Like a Rube Goldberg contraption, each click from leg tip to cytosol triggers the next!',
        blueprint: 'Deterministic relay pipeline: each mechanical or enzymatic stage gates the downstream event.',
        scientific: 'Allosteric receptor signals couple sequentially to cell-wall hydrolysis, ejection, and translation.'
      },
      es: {
        pop: '¡Como una máquina de Rube Goldberg, cada clic desde la pata hasta el citosol dispara el siguiente!',
        blueprint: 'Pipeline secuencial determinista: cada etapa mecánica o enzimática habilita el paso posterior.',
        scientific: 'Las señales alostéricas del receptor se acoplan en serie con lisis mural, eyección y traducción.'
      }
    },
    't4.ch5.signal.01': {
      en: {
        pop: 'Spider-Sense tingling! Porin lock rockets a tug up the [[long fibers|ltf]] to snap the [[baseplate|baseplate]]!',
        blueprint: 'Trigger bus: porin engagement relays tension along [[long fibers|ltf]] to trip the [[baseplate|baseplate]].',
        scientific: 'OmpF binding transmits mechanical torque via [[long fibers|ltf]] to expand the [[baseplate|baseplate]].'
      },
      es: {
        pop: '¡Sentido arácnido! ¡El enganche sube por las [[fibras largas|ltf]] y abre la [[placa basal|baseplate]]!',
        blueprint: 'Bus de disparo: la unión porínica tensa las [[fibras largas|ltf]] y conmuta la [[placa basal|baseplate]].',
        scientific: 'El acople a OmpF transmite par por las [[fibras largas|ltf]] expandiendo la [[placa basal|baseplate]].'
      }
    },
    't4.ch5.signal.02': {
      en: {
        pop: 'Slash! The [[lysozyme needle|needle]] chews through chainmail, scattering muropeptide crumbs!',
        blueprint: 'Wall breach telemetry: the [[lysozyme needle|needle]] cleaves murein cross-links into muropeptides.',
        scientific: 'GH24 domains on the [[lysozyme needle|needle]] hydrolyze β-1,4 glycan bonds, shedding muropeptides.'
      },
      es: {
        pop: '¡Tajo limpio! ¡La [[aguja con lisozima|needle]] corta la malla y suelta migas de péptidos murales!',
        blueprint: 'Brecha mural: la [[aguja con lisozima|needle]] escinde el sáculo liberando fragmentos muropeptídicos.',
        scientific: 'Los dominios GH24 de la [[aguja con lisozima|needle]] hidrolizan enlaces β-1,4 liberando muropéptidos.'
      }
    },
    't4.ch5.vdna.01': {
      en: {
        pop: 'Head pressure blasts [[viral dsDNA|dna]] straight through the [[portal|portal]] and [[tail tube|tube]]!',
        blueprint: 'Hydraulic discharge: vault pressure routes [[viral dsDNA|dna]] down [[portal|portal]] and [[tail tube|tube]].',
        scientific: 'Stored ~60 atm pressure ejects [[viral dsDNA|dna]] via the gp20 [[portal|portal]] and gp19 [[tail tube|tube]].'
      },
      es: {
        pop: '¡La presión catapulta el [[ADNbc viral|dna]] por el [[portal|portal]] y el [[tubo de la cola|tube]]!',
        blueprint: 'Descarga hidráulica: el [[ADNbc viral|dna]] baja por el [[portal|portal]] y el [[tubo de la cola|tube]].',
        scientific: 'Las ~60 atm eyectan el [[ADNbc viral|dna]] a través del [[portal|portal]] gp20 y el [[tubo de la cola|tube]].'
      }
    },
    't4.ch5.vdna.02': {
      en: {
        pop: 'Streaming into the open cockpit, the genome bee-lines straight for host [[RNA polymerase|rnap]]!',
        blueprint: 'Code handoff: injected DNA enters the cytosol and captures host [[RNA polymerase|rnap]] holoenzymes.',
        scientific: 'Cytoplasmic T4 dsDNA recruits ADP-ribosylated host σ70 [[RNA polymerase|rnap]] to early promoters.'
      },
      es: {
        pop: '¡Irrumpiendo en cabina abierta, el genoma va directo a secuestrar la [[ARN polimerasa|rnap]]!',
        blueprint: 'Entrega de código: el ADN entra al citosol y captura complejos de [[ARN polimerasa|rnap]].',
        scientific: 'El ADNbc citoplasmático recluta la [[ARN polimerasa|rnap]] σ70 modificada hacia promotores tempranos.'
      }
    },
    't4.ch5.cap.01': {
      en: {
        pop: 'Brainwashed [[ribosomes|ribosome]] churn out fresh gp23* armor tiles like a droid factory!',
        blueprint: 'Mass fabrication: hijacked [[ribosomes|ribosome]] translate late viral mRNA into gp23* capsomeres.',
        scientific: 'Reprogrammed 70S [[ribosomes|ribosome]] synthesize gp23 precursors folded via GroEL–gp31 complexes.'
      },
      es: {
        pop: '¡Los [[ribosomas|ribosome]] hipnotizados estampan placas gp23* como una fábrica de droides!',
        blueprint: 'Fabricación en serie: los [[ribosomas|ribosome]] traducen ARNm tardío en nuevos capsómeros gp23*.',
        scientific: 'Los [[ribosomas|ribosome]] 70S sintetizan precursores gp23 asistidos por el complejo GroEL–gp31.'
      }
    },
    't4.ch5.cap.02': {
      en: {
        pop: 'Those tiles snap together into shiny new [[prolate heads|capsid]], hungry for fresh DNA!',
        blueprint: 'Modular self-assembly: cleaved tiles lock into empty [[prolate heads|capsid]] awaiting gp17 loading.',
        scientific: 'gp21 protease matures proheads into expanded [[prolate heads|capsid]] ready for ATP-driven packaging.'
      },
      es: {
        pop: '¡Esas piezas encajan solas en flamantes [[cabezas prolatas|capsid]] listas para cargar ADN!',
        blueprint: 'Autoensamblaje modular: las losetas forman [[cabezas prolatas|capsid]] listas para carga por gp17.',
        scientific: 'La proteasa gp21 madura las procápsides en [[cabezas prolatas|capsid]] expandidas para empaquetar ADN.'
      }
    },
    't4.ch6.roll.01': {
      en: {
        pop: 'Armored gp23* jewel warhead up top!',
        blueprint: 'Prolate gp23* high-pressure payload vault.',
        scientific: 'Prolate T=13/Q=20 gp23* capsid (PDB 5VF3).'
      },
      es: {
        pop: '¡Ojiva blindada gp23* en toda la cumbre!',
        blueprint: 'Bóveda prolata gp23* de alta presión.',
        scientific: 'Cápside prolata gp23* T=13/Q=20 (PDB 5VF3).'
      }
    },
    't4.ch6.roll.02': {
      en: {
        pop: 'Vibranium-tough Soc straps and Hoc spikes!',
        blueprint: 'External Soc seam clamps and Hoc tether masts.',
        scientific: '810 Soc trimer clamps and 155 Ig-like Hoc spikes.'
      },
      es: {
        pop: '¡Correas Soc ultraduras y espículas Hoc!',
        blueprint: 'Abrazaderas Soc de junta y mástiles Hoc.',
        scientific: '810 grapas Soc y 155 espículas Ig Hoc.'
      }
    },
    't4.ch6.roll.03': {
      en: {
        pop: 'Eleven five-sided gp24* soccer-ball corners!',
        blueprint: 'Eleven five-fold gp24* corner keystones.',
        scientific: 'Eleven homopentameric gp24* vertices (5 × 46 kDa).'
      },
      es: {
        pop: '¡Once esquinas pentagonales gp24* de cierre!',
        blueprint: 'Once piedras angulares pentaméricas gp24*.',
        scientific: 'Once vértices homopentaméricos gp24* (5 × 46 kDa).'
      }
    },
    't4.ch6.roll.04': {
      en: {
        pop: '169 kbp of stealth-cloaked DNA wound tight!',
        blueprint: 'Coaxially spooled 169 kbp dsDNA payload.',
        scientific: '168.9 kbp gh-dCMP dsDNA spool (~60 atm pressure).'
      },
      es: {
        pop: '¡169 kpb de ADN camuflado enrollado a tope!',
        blueprint: 'Carga coaxial de 169 kpb de ADN bicatenario.',
        scientific: 'Bobina de 168,9 kpb de ADNbc gh-dCMP (~60 atm).'
      }
    },
    't4.ch6.roll.05': {
      en: {
        pop: 'Central core packing IPI* bodyguard proteins!',
        blueprint: 'Axial scaffold mandrel and IPI* countermeasures.',
        scientific: 'gp22 scaffold core with ~360 anti-GmrSD IPI* copies.'
      },
      es: {
        pop: '¡Núcleo central con escoltas proteicas IPI*!',
        blueprint: 'Mandril axial interno y contramedidas IPI*.',
        scientific: 'Núcleo gp22 con ~360 copias anti-GmrSD IPI*.'
      }
    },
    't4.ch6.roll.06': {
      en: {
        pop: 'Twelve-bladed gp20 loading gate and nozzle!',
        blueprint: 'Dodecameric gp20 bidirectional check valve.',
        scientific: '12-subunit gp20 portal dodecamer (PDB 3JA7).'
      },
      es: {
        pop: '¡Compuerta y tobera gp20 de doce álabes!',
        blueprint: 'Válvula bidireccional dodecamérica gp20.',
        scientific: 'Dodecámero portal gp20 de 12 piezas (PDB 3JA7).'
      }
    },
    't4.ch6.roll.07': {
      en: {
        pop: 'Neck collar sporting six X-wing fibritin whiskers!',
        blueprint: 'Neck connector and six gpWac safety whiskers.',
        scientific: 'gp13–gp15 neck rings with six trimeric gpWac whiskers.'
      },
      es: {
        pop: '¡Collar cervical con seis bigotes tipo X-wing!',
        blueprint: 'Conector cervical y seis bigotes seguro gpWac.',
        scientific: 'Cuello gp13–gp15 y seis bigotes gpWac triméricos.'
      }
    },
    't4.ch6.roll.08': {
      en: {
        pop: 'Spring-cocked gp18 pile-bunker outer sleeve!',
        blueprint: 'Metastable 24-ring gp18 linear spring actuator.',
        scientific: '144-subunit gp18 contractile sheath (PDB 3J2M).'
      },
      es: {
        pop: '¡Funda exterior gp18 cargada como martinete!',
        blueprint: 'Actuador elástico lineal gp18 de 24 anillos.',
        scientific: 'Vaina contráctil gp18 de 144 piezas (PDB 3J2M).'
      }
    },
    't4.ch6.roll.09': {
      en: {
        pop: 'Slick gp19 maglev barrel down the middle!',
        blueprint: 'Rigid 9 nm gp19 piercing conduit (4 nm bore).',
        scientific: '24-ring gp19 β-barrel inner tail tube (PDB 5W5F).'
      },
      es: {
        pop: '¡Cañón interno gp19 sin fricción al centro!',
        blueprint: 'Conducto perforador rígido gp19 (luz de 4 nm).',
        scientific: 'Tubo interno gp19 en barril β (PDB 5W5F).'
      }
    },
    't4.ch6.roll.10': {
      en: {
        pop: 'Transformers-style dome-to-star baseplate brain!',
        blueprint: 'Bistable six-wedge dome-to-star trigger hub.',
        scientific: '~150-subunit hexagonal baseplate (PDB 5IV5/5IV7).'
      },
      es: {
        pop: '¡Placa basal transformable de cúpula a estrella!',
        blueprint: 'Cubo disparador biestable de seis cuñas.',
        scientific: 'Placa basal hexagonal de ~150 piezas (5IV5/5IV7).'
      }
    },
    't4.ch6.roll.11': {
      en: {
        pop: 'Six zinc-jawed gp12 ODM grappling hooks!',
        blueprint: 'Six Zn²⁺-braced gp12 recoil-arrest clamps.',
        scientific: 'Six homotrimeric Zn²⁺ gp12 short fibers (PDB 1OCY).'
      },
      es: {
        pop: '¡Seis garfios cortos gp12 con fauces de zinc!',
        blueprint: 'Seis mordazas antirretroceso gp12 con Zn²⁺.',
        scientific: 'Seis fibras cortas homotriméricas gp12 (PDB 1OCY).'
      }
    },
    't4.ch6.roll.12': {
      en: {
        pop: 'Lance-sharp gp27–gp5 spike and lysozyme saws!',
        blueprint: 'Central gp27–gp5 β-spike and murein cutters.',
        scientific: 'Heterotrimeric (gp27)₃–(gp5)₃ lysozyme spike (1K28).'
      },
      es: {
        pop: '¡Lanza perforadora gp27–gp5 y sierras lisozima!',
        blueprint: 'Espiga β central gp27–gp5 y cortadores murales.',
        scientific: 'Complejo perforador (gp27)₃–(gp5)₃ (PDB 1K28).'
      }
    },
    't4.ch6.roll.13': {
      en: {
        pop: 'Six 145 nm spider-leg feelers with iron tips!',
        blueprint: 'Six hinged 145 nm gp34–gp37 sensor levers.',
        scientific: 'Six 145 nm gp34–gp37 fibers with Fe²⁺ tips (2XGF).'
      },
      es: {
        pop: '¡Seis patas exploradoras de 145 nm con hierro!',
        blueprint: 'Seis palancas sensoras articuladas gp34–gp37.',
        scientific: 'Seis fibras gp34–gp37 con puntas Fe²⁺ (PDB 2XGF).'
      }
    },
    't4.ch6.roll.14': {
      en: {
        pop: 'E. coli’s outer LPS shield and OmpF doorways!',
        blueprint: 'Host LPS outer shield and OmpF docking ports.',
        scientific: 'Asymmetric LPS outer membrane and OmpF trimers (2OMF).'
      },
      es: {
        pop: '¡Escudo externo de LPS y puertas OmpF huésped!',
        blueprint: 'Escudo externo de LPS y puertos OmpF del huésped.',
        scientific: 'Membrana externa de LPS y trímeros OmpF (2OMF).'
      }
    },
    't4.ch6.roll.15': {
      en: {
        pop: 'Breached chainmail wall and inner power skin!',
        blueprint: 'Breached murein mesh and inner phospholipid bus.',
        scientific: 'Periplasmic GlcNAc–MurNAc murein and inner bilayer.'
      },
      es: {
        pop: '¡Cota de malla abierta y piel eléctrica interna!',
        blueprint: 'Malla de mureína abierta y membrana interna.',
        scientific: 'Mureína periplásmica y bicapa lipídica interna.'
      }
    },
    't4.ch6.roll.16': {
      en: {
        pop: 'Agent-Smith-hijacked polymerase and 70S printers!',
        blueprint: 'Reprogrammed host RNAP and 70S factory line.',
        scientific: 'Hijacked α₂ββ′ωσ70 RNAP (4YG2) and 70S ribosomes (4YBB).'
      },
      es: {
        pop: '¡Polimerasa y ribosomas 70S bajo mando viral!',
        blueprint: 'RNAP y línea de ribosomas 70S reprogramados.',
        scientific: 'RNAP α₂ββ′ωσ70 (4YG2) y ribosomas 70S (4YBB).'
      }
    },
    't4.ch6.exp.01': {
      en: {
        pop: 'The controls are yours—take this 200 nm mecha-syringe for a solo spin!',
        blueprint: 'Guided sequence complete: take manual orbital control of the T4 lander assembly.',
        scientific: 'Guided tour complete; explore the Tequatrovirus T4–E. coli complex interactively.'
      },
      es: {
        pop: '¡Los mandos son tuyos: pilota por libre esta meca-jeringa de 200 nanómetros!',
        blueprint: 'Secuencia guiada completada: toma el control orbital manual del ensamblaje T4.',
        scientific: 'Recorrido completado; explora interactivamente el complejo Tequatrovirus T4–E. coli.'
      }
    },
    't4.ch6.exp.02': {
      en: {
        pop: 'Click any floating tag to zoom straight into real cryo-EM and X-ray atoms!',
        blueprint: 'Select any component tag to load its isolated atomic-coordinate PDB sub-model.',
        scientific: 'Click any structural tag to inspect experimental X-ray and cryo-EM PDB coordinates.'
      },
      es: {
        pop: '¡Haz clic en cualquier etiqueta flotante para bajar hasta sus átomos reales en 3D!',
        blueprint: 'Selecciona cualquier etiqueta para cargar su submodelo PDB de coordenadas atómicas.',
        scientific: 'Haz clic en cualquier etiqueta para examinar modelos experimentales PDB atómicos.'
      }
    },
    't4.det.rcap.01': {
      en: {
        pop: 'Packed tighter than a Dragon Ball Spirit Bomb, 169 kbp of DNA straining at monster pressure!',
        blueprint: 'Prolate pressure tank storing 169 kbp dsDNA at ~60 atm osmotic (~500 atm peak) stress.',
        scientific: 'Prolate T=13/Q=20 capsid confining 168.9 kbp gh-dCMP dsDNA at ~60 atm (~500 atm peak stress).'
      },
      es: {
        pop: '¡Más comprimida que una Genkidama: 169 kpb de ADN tensados a una presión colosal!',
        blueprint: 'Tanque prolato que confina 169 kpb de ADNbc bajo ~60 atm (~500 atm de tensión pico).',
        scientific: 'Cápside prolata T=13/Q=20 con 168,9 kpb de ADNbc gh-dCMP a ~60 atm (~500 atm pico).'
      }
    },
    't4.det.rcap.02': {
      en: {
        pop: '155 gp23* hex-shields bolted edge-to-edge by 810 Soc clamp trimers—zero leaks allowed!',
        blueprint: 'Facet lattice of 155 gp23* hexamers reinforced across seams by 810 Soc clamp subunits.',
        scientific: '930 gp23* monomers in 155 hexamers braced at quasi-3-fold interfaces by 810 Soc copies (5VF3).'
      },
      es: {
        pop: '¡155 escudos hexagonales gp23* engrapados por 810 piezas Soc sin una sola fisura!',
        blueprint: 'Red de 155 hexámeros gp23* arriostrada en sus juntas por 810 subunidades de abrazadera Soc.',
        scientific: '930 monómeros gp23* en 155 hexámeros reforzados en ejes cuasi-3 por 810 copias Soc (5VF3).'
      }
    },
    't4.det.rcap.03': {
      en: {
        pop: 'Eleven corners wear five-sided gp24* caps, leaving corner #12 for the gp20 launch valve!',
        blueprint: 'Eleven 5-fold vertices mount gp24* pentamers; vertex twelve houses the gp20 portal valve.',
        scientific: 'Eleven vertices carry homopentameric gp24* (5VF3); the basal vertex holds dodecameric gp20 (3JA7).'
      },
      es: {
        pop: '¡Once esquinas llevan tapas gp24* y la duodécima aloja la válvula de disparo gp20!',
        blueprint: 'Once vértices montan pentámeros gp24*; el duodécimo integra la válvula portal gp20.',
        scientific: 'Once vértices portan homopentámeros gp24* (5VF3) y la base aloja el dodecámero gp20 (3JA7).'
      }
    },
    't4.det.rtail.01': {
      en: {
        pop: '24 outer rings of gp18 hug 24 inner rings of gp19 like a cocked mecha pile-bunker!',
        blueprint: 'Coaxial 24-ring stack: outer gp18 contractile sleeve encasing the rigid gp19 inner barrel.',
        scientific: 'Twenty-four hexameric gp18 sheath rings (3J2M) surround 24 hexameric gp19 tube rings (5W5F).'
      },
      es: {
        pop: '¡24 anillos externos gp18 abrazan 24 anillos internos gp19 como un martinete meca armado!',
        blueprint: 'Apilamiento coaxial de 24 anillos: funda contráctil gp18 sobre cañón rígido interno gp19.',
        scientific: 'Veinticuatro hexámeros de vaina gp18 (3J2M) rodean 24 hexámeros del tubo interno gp19 (5W5F).'
      }
    },
    't4.det.rtail.02': {
      en: {
        pop: 'Up at the neck, six fibritin whiskers act as weather vanes holding or dropping the long legs.',
        blueprint: 'Collar sensor ring mounts six gpWac fibritin whiskers that gate long-fiber deployment.',
        scientific: 'Neck collar bears six homotrimeric coiled-coil gpWac fibritin whiskers (~53 nm length).'
      },
      es: {
        pop: 'Arriba en el cuello, seis bigotes de fibritina retienen o sueltan las patas según el clima.',
        blueprint: 'El collar superior porta seis bigotes gpWac que regulan el despliegue de las fibras largas.',
        scientific: 'El collar cervical sostiene seis bigotes homotriméricos de fibritina gpWac (~53 nm).'
      }
    },
    't4.det.rtail.03': {
      en: {
        pop: 'Zero fuel needed on strike—the outer sleeve snaps short to punch the inner pipe straight in!',
        blueprint: 'ATP-free sheath collapse translates stored spring tension into 50 nm axial tube penetration.',
        scientific: 'Enthalpy-driven gp18 contraction (92.5 → 42 nm) drives the 9 nm gp19 tube across the envelope.'
      },
      es: {
        pop: '¡Sin gastar combustible al atacar, la funda se encoge de golpe y clava el tubo interior!',
        blueprint: 'El colapso sin ATP convierte la tensión elástica en ~50 nm de avance perforante del tubo.',
        scientific: 'La contracción entálpica de gp18 (92,5 → 42 nm) impulsa el tubo gp19 a través de la envoltura.'
      }
    },
    't4.det.rbase.01': {
      en: {
        pop: 'Six outer wedges circle the central gp27–gp5 lance like a mechanical camera iris!',
        blueprint: 'Six peripheral baseplate wedges ring the central gp27–gp5 armor-piercing hub.',
        scientific: 'Six multiprotein wedges (gp6/7/8/10/11/25/53; PDB 5IV5) encircle the (gp27)₃–(gp5)₃ spike (1K28).'
      },
      es: {
        pop: '¡Seis cuñas externas rodean la lanza central gp27–gp5 como el iris mecánico de una cámara!',
        blueprint: 'Seis cuñas periféricas rodean el buje perforador central gp27–gp5 en configuración armada.',
        scientific: 'Seis cuñas multiproteicas (PDB 5IV5) rodean el complejo perforador central (gp27)₃–(gp5)₃ (1K28).'
      }
    },
    't4.det.rbase.02': {
      en: {
        pop: 'Long legs find OmpF porins first; then six short gp12 claws slam down onto LPS for good!',
        blueprint: 'Two-factor handshake: long-fiber OmpF sensing deploys six gp12 clamps onto LPS inner core.',
        scientific: 'gp37–OmpF binding triggers wedge expansion, rotating six Zn²⁺ gp12 trimers (1OCY) onto LPS.'
      },
      es: {
        pop: '¡Las patas largas hallan OmpF primero y luego seis garras cortas gp12 se clavan al LPS!',
        blueprint: 'Protocolo de doble llave: el sensor OmpF despliega seis mordazas gp12 sobre el núcleo del LPS.',
        scientific: 'La unión gp37–OmpF expande las cuñas y rota seis trímeros gp12 con Zn²⁺ (1OCY) hacia el LPS.'
      }
    },
    't4.det.rbase.03': {
      en: {
        pop: 'Three lysozyme buzzsaws snip open the peptidoglycan belt so the DNA cannon has a clear shot!',
        blueprint: 'Three T4 lysozyme cutters hydrolyze peptidoglycan cross-bridges to clear the injection path.',
        scientific: 'Three gp5 GH24 N-acetylmuramidase domains cleave murein β-(1→4) glycosidic linkages.'
      },
      es: {
        pop: '¡Tres sierras de lisozima cortan el cinturón de peptidoglicano para abrir paso al cañón!',
        blueprint: 'Tres cortadores de lisozima T4 hidrolizan la mureína despejando la vía de inyección.',
        scientific: 'Tres dominios N-acetilmuramidasa GH24 de gp5 escinden enlaces β-(1→4) en el peptidoglicano.'
      }
    },
    't4.det.sch.01': {
      en: {
        pop: 'Meet T4 in clean studio lighting: four modular assemblies snapped into one ultimate hunter!',
        blueprint: 'Isolated 3D architectural schematic showing T4’s four self-assembling functional modules.',
        scientific: 'Complete Tequatrovirus T4 schematic (~200 nm) resolving head, tail, baseplate, and fiber modules.'
      },
      es: {
        pop: '¡Aquí posa T4 en limpio: cuatro módulos ensamblados en un único cazador implacable!',
        blueprint: 'Esquema arquitectónico 3D aislado con los cuatro módulos funcionales autoensamblables de T4.',
        scientific: 'Esquema íntegro de Tequatrovirus T4 (~200 nm) con cabeza, cola, placa basal y seis fibras.'
      }
    },
    't4.det.sch.02': {
      en: {
        pop: 'Upstairs sits the sliced-open crystal head, stuffed wall-to-wall with coiled viral DNA.',
        blueprint: 'Upper module: cutaway prolate vault housing coaxially wound double-stranded DNA.',
        scientific: 'Apical T=13/Q=20 cutaway capsid containing 168.9 kbp B-form dsDNA wound around the core.'
      },
      es: {
        pop: 'Arriba luce la cabeza cristalina en corte, repleta de cabo a rabo con espiras de ADN.',
        blueprint: 'Módulo superior: bóveda prolata en sección con ADN bicatenario enrollado coaxialmente.',
        scientific: 'Cápside apical T=13/Q=20 en corte con 168,9 kpb de ADN-B dispuestos en capas coaxiales.'
      }
    },
    't4.det.sch.03': {
      en: {
        pop: 'Downstairs hang the spring-loaded syringe tail, star-trigger baseplate, and six spider legs!',
        blueprint: 'Lower actuation train: contractile tail, hexagonal trigger hub, and six hinged feeler legs.',
        scientific: 'Basal delivery apparatus: 92.5 nm gp18/gp19 tail, 6-fold baseplate, and six 145 nm gp34–gp37 legs.'
      },
      es: {
        pop: '¡Abajo cuelgan la cola con resorte, la placa disparadora y sus seis patas arácnidas!',
        blueprint: 'Tren inferior de actuación: cola contráctil, placa hexagonal de disparo y seis patas sensoras.',
        scientific: 'Aparato basal: cola gp18/gp19 de 92,5 nm, placa hexagonal y seis fibras gp34–gp37 de 145 nm.'
      }
    },
    't4.det.pcap.01': {
      en: {
        pop: 'Armor check on T4’s helmet: gp23* hex-plates, Soc buckle straps, and central Hoc hood spikes!',
        blueprint: 'Capsid wall specification: gp23* hexamer tiles reinforced by Soc clamps and central Hoc masts.',
        scientific: 'T4 head lattice (PDB 5VF3): 155 gp23* hexamers, 810 Soc trimer clamps, and 155 Hoc Ig-like fibers.'
      },
      es: {
        pop: '¡Revisión del casco de T4: placas gp23*, hebillas Soc y espículas centrales Hoc!',
        blueprint: 'Especificación mural: losetas hexaméricas gp23* con grapas Soc y mástiles centrales Hoc.',
        scientific: 'Red cefálica T4 (PDB 5VF3): 155 hexámeros gp23*, 810 abrazaderas Soc y 155 fibras Ig Hoc.'
      }
    },
    't4.det.pcap.02': {
      en: {
        pop: 'Five-sided gp24* keystones curve eleven corners shut while gp20 guards the bottom exit!',
        blueprint: 'Vertex allocation: eleven gp24* pentamers close the dome; basal gp20 forms the ejection port.',
        scientific: 'Eleven 5-fold vertices bind gp24* pentamers; the twelfth seats the 12-mer gp20 portal (3JA7).'
      },
      es: {
        pop: '¡Once piezas pentagonales gp24* cierran las esquinas y gp20 vigila la escotilla inferior!',
        blueprint: 'Asignación de vértices: once pentámeros gp24* cierran la cúpula y gp20 forma la boca basal.',
        scientific: 'Once vértices pentaméricos alojan gp24* y el duodécimo integra el portal 12-mérico gp20 (3JA7).'
      }
    },
    't4.det.pcap.03': {
      en: {
        pop: 'Inside, 169 kbp of DNA winds neatly around the protein core like hose on a fire reel!',
        blueprint: 'Internal spooling: 169 kbp dsDNA wraps coaxially around the central effector core.',
        scientific: '168,903 bp gh-dCMP dsDNA coils in ~2.5 nm layers around the gp22/IPI*–IPIII* protein scaffold.'
      },
      es: {
        pop: '¡Dentro, 169 kpb de ADN se enrollan sobre el núcleo como una manguera lista para abrirse!',
        blueprint: 'Bobinado interno: 169 kpb de ADNbc se enrollan coaxialmente sobre el núcleo proteico central.',
        scientific: '168.903 pb de ADNbc gh-dCMP se arrollan cada ~2,5 nm en torno al núcleo gp22/IPI*–IPIII*.'
      }
    },
    't4.det.ptail.01': {
      en: {
        pop: 'Sliced lengthwise: 92.5 nanometres of spring-loaded mecha piston and collar neck!',
        blueprint: 'Longitudinal cutaway of the 92.5 nm coaxial contractile actuator and neck connector.',
        scientific: 'Cutaway of the 92.5 × 24 nm extended tail assembly and gp13/gp14/gp15/gpWac neck complex.'
      },
      es: {
        pop: '¡Abierto a lo largo: 92,5 nanómetros de pistón meca cargado por resorte y su cuello!',
        blueprint: 'Corte longitudinal del actuador coaxial contráctil de 92,5 nm y su conector cervical.',
        scientific: 'Sección de la cola extendida (92,5 × 24 nm) coronada por el complejo cervical gp13–gp15/gpWac.'
      }
    },
    't4.det.ptail.02': {
      en: {
        pop: 'When the green gp18 sleeve slams short, it punches the gold gp19 syringe pipe straight down!',
        blueprint: 'Green gp18 outer sheath contracts to drive the gold non-contractile gp19 barrel downward.',
        scientific: 'Outer 24-ring gp18 sheath (green, 3J2M) contracts ~55% to thrust the gp19 tube (gold, 5W5F).'
      },
      es: {
        pop: '¡Al encogerse la funda verde gp18, clava hacia abajo la tubería dorada gp19 de un golpe!',
        blueprint: 'La vaina externa verde gp18 se contrae para hundir axialmente el cañón dorado rígido gp19.',
        scientific: 'La vaina gp18 de 24 anillos (verde, 3J2M) se acorta ~55% empujando el tubo gp19 (dorado, 5W5F).'
      }
    },
    't4.det.ptail.03': {
      en: {
        pop: 'Down that 4 nm bullseye tunnel rockets the whole viral genome straight into E. coli!',
        blueprint: '4 nm central lumen channels pressurized viral dsDNA directly into the host cytoplasm.',
        scientific: 'B-form dsDNA (2.0 nm width) translocates rapidly down the 4.0 nm electronegative gp19 lumen.'
      },
      es: {
        pop: '¡Por ese túnel central de 4 nm sale disparado todo el genoma viral directo a la bacteria!',
        blueprint: 'El canal central de 4 nm conduce el ADNbc presurizado directamente hacia el citoplasma.',
        scientific: 'El ADN-B (2,0 nm) recorre a alta velocidad el lumen electronegativo de 4,0 nm del tubo gp19.'
      }
    },
    't4.det.pbase.01': {
      en: {
        pop: 'Six outer wedges lock into a domed crown around the central gp27–gp5 dagger hub!',
        blueprint: 'Dome-state assembly: six peripheral wedges ring the central gp27–gp5 piercing hub.',
        scientific: 'Hexagonal ~52 nm dome of six gp6–gp53 wedges encircling the central (gp27)₃–(gp5)₃ hub (5IV5).'
      },
      es: {
        pop: '¡Seis cuñas externas cierran una corona abovedada en torno al cubo de la daga gp27–gp5!',
        blueprint: 'Configuración en cúpula: seis cuñas periféricas rodean el buje perforador central gp27–gp5.',
        scientific: 'Cúpula hexagonal (~52 nm) de seis cuñas gp6–gp53 en torno al buje central (gp27)₃–(gp5)₃ (5IV5).'
      }
    },
    't4.det.pbase.02': {
      en: {
        pop: 'Three green lysozyme buzzsaws flank the red β-helix stiletto—stab first, saw second!',
        blueprint: 'Dual-stage breach head: red triple-β-helix spike flanked by three green lysozyme cutters.',
        scientific: 'Central red gp5 triple-stranded β-helix needle ringed by three green GH24 lysozyme domains (1K28).'
      },
      es: {
        pop: '¡Tres sierras verdes de lisozima escoltan al estilete rojo: primero clava y luego corta!',
        blueprint: 'Cabezal bifásico: espiga roja en triple hélice β flanqueada por tres lisozimas verdes.',
        scientific: 'Aguja roja gp5 en triple hélice β rodeada por tres dominios verdes lisozima GH24 (PDB 1K28).'
      }
    },
    't4.det.pbase.03': {
      en: {
        pop: 'Underneath hang six short gp12 grappling claws, ready to lock onto bacterial LPS!',
        blueprint: 'Six gp12 short tail fibers project downward to clamp irreversibly onto host LPS.',
        scientific: 'Six homotrimeric Zn²⁺-containing gp12 short fibers (PDB 1OCY) anchor to LPS core heptoses.'
      },
      es: {
        pop: '¡Debajo asoman seis garras cortas gp12 listas para aferrarse sin retorno al LPS bacteriano!',
        blueprint: 'Seis fibras cortas gp12 se proyectan abajo para fijarse irreversiblemente al LPS del huésped.',
        scientific: 'Seis fibras cortas homotriméricas gp12 con Zn²⁺ (PDB 1OCY) se unen a heptosas del núcleo LPS.'
      }
    },
    't4.det.pfib.01': {
      en: {
        pop: 'One 145 nm mecha-leg up close: gp34 thigh, nimble gp35 kneecap, and distal shin rod!',
        blueprint: 'Articulated 145 nm sensor lever: proximal gp34 rod, gp35 hinge, and gp36/gp37 distal shaft.',
        scientific: '145 nm long tail fiber: homotrimeric gp34 (~65 nm), monomeric gp35 knee, and gp36–gp37 distal rod.'
      },
      es: {
        pop: '¡Una pata meca de 145 nm al detalle: muslo gp34, rodilla ágil gp35 y tibia distal!',
        blueprint: 'Palanca sensora articulada de 145 nm: barra proximal gp34, bisagra gp35 y eje distal gp36/gp37.',
        scientific: 'Fibra larga de 145 nm: homotrímero gp34 (~65 nm), rótula monomérica gp35 y segmento gp36–gp37.'
      }
    },
    't4.det.pfib.02': {
      en: {
        pop: 'Reinforced with seven iron atoms like rebar, the gp37 fingertip slots straight into OmpF!',
        blueprint: 'Fe²⁺-stiffened gp37 receptor tip executes target verification on host OmpF and LPS.',
        scientific: 'Distal gp37 trimer tip braced by seven octahedral Fe²⁺ ions (PDB 2XGF) binds OmpF and LPS.'
      },
      es: {
        pop: '¡Armada con siete átomos de hierro como hormigón, la punta gp37 encaja directo en OmpF!',
        blueprint: 'La punta gp37 rigidizada con Fe²⁺ verifica el objetivo sobre porinas OmpF y azúcares LPS.',
        scientific: 'El extremo trimérico gp37 con siete iones Fe²⁺ octaédricos (PDB 2XGF) fija OmpF y LPS.'
      }
    },
    't4.det.gp23.01': {
      en: {
        pop: 'Real cryo-EM atoms of T4’s main armor shield: the gp23* hexamer (PDB 5VF3)!',
        blueprint: 'Atomic cryo-EM model of the primary hexameric capsid wall tile (gp23*, PDB 5VF3).',
        scientific: 'Cryo-EM structure of the mature gp23* hexamer (~14 nm width, HK97 fold; PDB 5VF3).'
      },
      es: {
        pop: '¡Átomos reales por crio-ME del escudo principal de T4: el hexámero gp23* (PDB 5VF3)!',
        blueprint: 'Modelo atómico por crio-ME de la loseta hexamérica principal de la cápside (PDB 5VF3).',
        scientific: 'Estructura crio-ME del hexámero maduro gp23* (~14 nm de ancho, plegamiento HK97; PDB 5VF3).'
      }
    },
    't4.det.gp23.02': {
      en: {
        pop: 'Six blue gp23* plates lock arms inside green Soc clamp straps with one Hoc spike on top!',
        blueprint: 'Six blue gp23* subunits ringed by green Soc seam clamps and a central Hoc protrusion.',
        scientific: 'Six 48.7 kDa gp23* chains (blue) framed by 9.1 kDa Soc clamps (green) and central 40.4 kDa Hoc.'
      },
      es: {
        pop: '¡Seis placas azules gp23* quedan abrazadas por correas verdes Soc y una púa Hoc central!',
        blueprint: 'Seis subunidades azules gp23* ceñidas por grapas verdes Soc y una proyección Hoc central.',
        scientific: 'Seis cadenas gp23* de 48,7 kDa (azul) rodeadas de Soc de 9,1 kDa (verde) y Hoc central (40,4 kDa).'
      }
    },
    't4.det.gp24.01': {
      en: {
        pop: 'Cryo-EM close-up of T4’s five-sided corner keystone: the gp24* pentamer (PDB 5VF3)!',
        blueprint: 'Atomic cryo-EM structure of the five-fold vertex keystone cap (gp24*, PDB 5VF3).',
        scientific: 'Cryo-EM structure of the homopentameric capsid vertex complex gp24* (~12.5 nm; PDB 5VF3).'
      },
      es: {
        pop: '¡Primer plano por crio-ME de la piedra angular de cinco lados: el pentámero gp24* (PDB 5VF3)!',
        blueprint: 'Estructura atómica crio-ME de la tapa pentamérica de vértice (gp24*, PDB 5VF3).',
        scientific: 'Estructura crio-ME del homopentámero de vértice de la cápside gp24* (~12,5 nm; PDB 5VF3).'
      }
    },
    't4.det.gp24.02': {
      en: {
        pop: 'Five gp24* cousins bend the flat wall plates into a closed dome right where pressure peaks!',
        blueprint: 'Five gp24* subunits introduce 60° disclination angles to seal the high-stress corners.',
        scientific: 'Five cleaved 46.0 kDa gp24* subunits sustain acute dihedral angles at 11 icosahedral vertices.'
      },
      es: {
        pop: '¡Cinco piezas gp24* curvan el muro plano hasta cerrar la cúpula donde más aprieta la presión!',
        blueprint: 'Cinco subunidades gp24* introducen el ángulo pentagonal que sella las esquinas de máxima tensión.',
        scientific: 'Cinco monómeros maduros gp24* (46,0 kDa) soportan los ángulos diedros agudos en 11 vértices.'
      }
    },
    't4.det.gp20.01': {
      en: {
        pop: 'Behold the 12-subunit gp20 Stargate ring at the base of the phage head (PDB 3JA7)!',
        blueprint: 'Atomic cryo-EM model of the dodecameric head-to-tail portal valve (gp20, PDB 3JA7).',
        scientific: 'Cryo-EM structure of the 12-subunit gp20 portal dodecamer (~17 × 14 nm, 12 × 61 kDa; PDB 3JA7).'
      },
      es: {
        pop: '¡Contempla el anillo Stargate gp20 de 12 piezas en la base de la cabeza (PDB 3JA7)!',
        blueprint: 'Modelo atómico crio-ME de la válvula portal dodecamérica cabeza-cola (gp20, PDB 3JA7).',
        scientific: 'Estructura crio-ME del dodecámero portal gp20 (~17 × 14 nm, 12 × 61 kDa; PDB 3JA7).'
      }
    },
    't4.det.gp20.02': {
      en: {
        pop: 'Two-way traffic through a 3.5 nm bore: crammed in by ATP, then blasted out under pressure!',
        blueprint: 'Bidirectional 3.5 nm bore: accepts inward gp17 DNA pumping, then gates outward injection.',
        scientific: 'Crown, stem, and tunnel-loop domains form a ~2.8–3.5 nm lumen for DNA packaging and ejection.'
      },
      es: {
        pop: '¡Doble sentido en 3,5 nm: entra embutido a puro ATP y sale disparado a toda presión!',
        blueprint: 'Paso bidireccional de 3,5 nm: admite la carga por gp17 y luego canaliza la eyección.',
        scientific: 'Los dominios corona, tallo y bucle definen una luz de ~2,8–3,5 nm para carga y eyección de ADN.'
      }
    },
    't4.det.gp18.01': {
      en: {
        pop: 'Cryo-EM close-up of T4’s pile-bunker muscle: gp18 sheath rings capped by gp15 (PDB 3J2M)!',
        blueprint: 'Cryo-EM model of the upper gp18 contractile actuator ring and gp15 neck terminator (3J2M).',
        scientific: 'Cryo-EM structure of hexameric gp18 sheath (71.2 kDa/monomer) and gp15 connector (PDB 3J2M).'
      },
      es: {
        pop: '¡Músculo de martinete en crio-ME: anillos de vaina gp18 coronados por gp15 (PDB 3J2M)!',
        blueprint: 'Modelo crio-ME del anillo superior contráctil gp18 y el conector cervical gp15 (PDB 3J2M).',
        scientific: 'Estructura crio-ME de la vaina hexamérica gp18 (71,2 kDa/subunidad) y anillo gp15 (PDB 3J2M).'
      }
    },
    't4.det.gp18.02': {
      en: {
        pop: '24 six-part rings stack into a molecular crossbow—interlocking β-sheets keep it from tearing!',
        blueprint: '24 stacked hexamers linked by β-sheet handshakes store elastic energy for one-shot contraction.',
        scientific: 'Twenty-four gp18 hexamers (4.06 nm rise, 17.2° twist) contract to 1.64 nm rise via β-sheet links.'
      },
      es: {
        pop: '¡24 anillos de seis piezas forman una ballesta molecular unida por resistentes hojas β!',
        blueprint: '24 hexámeros enlazados por hojas β acumulan energía elástica para un disparo único.',
        scientific: 'Veinticuatro hexámeros gp18 (paso 4,06 nm, giro 17,2°) encogen a 1,64 nm conservando hojas β.'
      }
    },
    't4.det.gp19.01': {
      en: {
        pop: 'Three stacked rings of the rigid gp19 syringe pipe caught at atomic cryo-EM detail (PDB 5W5F)!',
        blueprint: 'Atomic cryo-EM view of three stacked hexameric rings of the gp19 piercing barrel (PDB 5W5F).',
        scientific: 'Cryo-EM structure of three stacked gp19 hexamers (18.5 kDa monomer, 9.0 nm OD; PDB 5W5F).'
      },
      es: {
        pop: '¡Tres anillos apilados del cañón rígido gp19 captados a detalle atómico crio-ME (PDB 5W5F)!',
        blueprint: 'Vista atómica crio-ME de tres anillos hexaméricos apilados del cañón perforador gp19 (PDB 5W5F).',
        scientific: 'Estructura crio-ME de tres hexámeros gp19 apilados (monómero 18,5 kDa, 9,0 nm DE; PDB 5W5F).'
      }
    },
    't4.det.gp19.02': {
      en: {
        pop: 'Six β-sheet subunits per ring weave a slick 4 nm tunnel so DNA rockets past friction-free!',
        blueprint: 'Six subunits per ring form a continuous 4 nm electronegative β-barrel for frictionless DNA transit.',
        scientific: 'Eight-stranded antiparallel β-barrels create a 4.0 nm negatively charged lumen for B-DNA passage.'
      },
      es: {
        pop: '¡Seis piezas por anillo tejen un túnel liso de 4 nm para que el ADN vuele sin rozamiento!',
        blueprint: 'Seis subunidades por anillo forman un barril β electronegativo de 4 nm sin fricción para el ADN.',
        scientific: 'Barriles β antiparalelos de ocho hebras definen un lumen negativo de 4,0 nm para el paso de ADN-B.'
      }
    },
    't4.det.gp5.01': {
      en: {
        pop: 'X-ray crystal close-up of T4’s armor-piercing Lance of Longinus: gp27–gp5 (PDB 1K28)!',
        blueprint: 'Crystal structure of the central gp27–gp5 armor-piercing spike assembly (PDB 1K28).',
        scientific: 'X-ray crystal structure of the heterotrimeric (gp27)₃–(gp5)₃ puncturing complex (~19 nm; PDB 1K28).'
      },
      es: {
        pop: '¡Cristalografía de rayos X de la Lanza de Longinus viral: el punzón gp27–gp5 (PDB 1K28)!',
        blueprint: 'Estructura cristalina del ensamblaje perforador central de blindaje gp27–gp5 (PDB 1K28).',
        scientific: 'Estructura cristalográfica del complejo perforador heterotrimérico (gp27)₃–(gp5)₃ (~19 nm; 1K28).'
      }
    },
    't4.det.gp5.02': {
      en: {
        pop: 'A cup-shaped gp27 adapter crowns a triangular β-helix dagger flanked by three lysozyme saws!',
        blueprint: 'Pseudo-6-fold gp27 cup adapts the 6-fold tube to a 3-fold β-helix needle and 3 lysozyme cutters.',
        scientific: 'Trimeric gp27 bridges gp19 to the equilateral gp5 triple-β-helix prism and three GH24 lysozymes.'
      },
      es: {
        pop: '¡La copa adaptadora gp27 corona una daga triangular escoltada por tres sierras de lisozima!',
        blueprint: 'La copa pseudohexamérica gp27 acopla el tubo a la aguja triple β y tres cortadores lisozima.',
        scientific: 'El trímero gp27 conecta gp19 con el prisma triple β de gp5 y tres dominios lisozima GH24.'
      }
    },
    't4.det.gp37.01': {
      en: {
        pop: 'X-ray crystal view of the long leg’s sensor fingertip: the gp37 needle tip (PDB 2XGF)!',
        blueprint: 'Crystal structure of the distal receptor-recognition tip of long fiber gp37 (PDB 2XGF).',
        scientific: 'X-ray structure of the C-terminal homotrimeric gp37 distal needle tip (residues 785–1026; 2XGF).'
      },
      es: {
        pop: '¡Vista cristalina de la yema sensora de la pata larga: la punta de aguja gp37 (PDB 2XGF)!',
        blueprint: 'Estructura cristalina del extremo distal de reconocimiento receptor de la fibra gp37 (PDB 2XGF).',
        scientific: 'Estructura por rayos X del extremo C-terminal homotrimérico gp37 (residuos 785–1026; PDB 2XGF).'
      }
    },
    't4.det.gp37.02': {
      en: {
        pop: 'Three chains braid around 7 iron ions like steel rebar, tuned to recognize E. coli OmpF!',
        blueprint: 'Three interwoven chains braced axially by 7 Fe²⁺ ions verify host OmpF porin loops.',
        scientific: 'Intertwined trimer coordinated by seven octahedral Fe²⁺ ions via His-X-His motifs binds OmpF.'
      },
      es: {
        pop: '¡Tres cadenas trenzadas sobre 7 iones de hierro como acero armado para reconocer OmpF!',
        blueprint: 'Tres hebras entrelazadas sobre 7 iones Fe²⁺ axiales verifican los bucles externos de OmpF.',
        scientific: 'Trímero entrelazado con siete iones Fe²⁺ octaédricos (motivos His-X-His) específico de OmpF.'
      }
    },
    't4.det.gp12.01': {
      en: {
        pop: 'Crystal close-up of T4’s point-of-no-return grappling claw: short fiber gp12 (PDB 1OCY)!',
        blueprint: 'Crystal structure of the secondary recoil-arrest clamp tip on short fiber gp12 (PDB 1OCY).',
        scientific: 'X-ray crystal structure of the C-terminal homotrimeric gp12 short tail fiber (PDB 1OCY).'
      },
      es: {
        pop: '¡Primer plano cristalino del garfio sin retorno de T4: la fibra corta gp12 (PDB 1OCY)!',
        blueprint: 'Estructura cristalina del cabezal de anclaje antirretroceso de la fibra corta gp12 (PDB 1OCY).',
        scientific: 'Estructura cristalográfica del fragmento C-terminal homotrimérico de la fibra corta gp12 (1OCY).'
      }
    },
    't4.det.gp12.02': {
      en: {
        pop: 'A single zinc atom braces its three jaws so they clamp bacterial LPS and never let go!',
        blueprint: 'Axial Zn²⁺-stabilized receptor head locks irreversibly onto the host LPS inner core.',
        scientific: 'Triple β-spiral shaft and Zn²⁺-coordinated C-terminal head bind LPS core heptose-phosphate.'
      },
      es: {
        pop: '¡Un átomo de zinc refuerza sus tres fauces para morder el LPS bacteriano y no soltar jamás!',
        blueprint: 'Su cabezal estabilizado por un ion Zn²⁺ axial se aferra sin retorno al núcleo interno del LPS.',
        scientific: 'Triple espiral β y cabezal coordinado por Zn²⁺ que fija heptosa-fosfato del núcleo interno LPS.'
      }
    }
  }
};
