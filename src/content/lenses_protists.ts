import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 16 Phase 12 Protists & Eukaryotic Parasites Explorer nodes and all 38
 * Standalone Realistic Part Lenses (`paramecium_realistic.html`: 18 parts;
 * `plasmodium_realistic.html`: 20 parts) in `EN` & `ES` for Phase 12
 * (*Paramecium caudatum* & *Plasmodium falciparum*).
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const PROTISTS_NODE_LENSES: NodeLensMap = {
  'real-paramecium': {
    en: {
      simple:
        'Paramecium caudatum is a free-living, slipper-shaped single-celled eukaryote that hunts [[bacteria|real-bacterium]] in freshwater ponds. Without a single organ or nerve cell, this lone cell swims, steers, swallows, digests, pumps out floodwater, and stores dual genetic archives.',
      story:
        'Single-celled [[eukaryotes|real-cell]] are often dismissed as simple stepping-stones toward animals and plants, yet one 200-micrometer Paramecium operates as a complete microscopic predator. Thousands of coordinated [[motile cilia|real-para-cilia]] sweep it through pond water and funnel bacterial prey down its [[oral groove|real-para-feeding]] into acidifying food vacuoles. Because freshwater constantly floods inward across its membrane, paired star-shaped [[contractile vacuoles|real-para-contractile]] bail out excess [[water|water]] every few seconds, while [[dual nuclei|real-para-nuclei]] divide nonstop daily transcription from safeguarded sexual inheritance.',
      blueprint:
        'Role: Autonomous free-living ciliate protist predator (~150-250 x 55 micrometers); Inputs: Phagocytosed [[bacteria|real-bacterium]] via [[oral groove|real-para-feeding]], dissolved O2 for [[mitochondria|mitochondrion]], and constant osmotic [[water|water]] influx; Inside: Alveolar pellicle with [[9+2 cilia|real-para-cilia]], circulating [[food vacuoles|real-para-feeding]], V-ATPase [[contractile vacuoles|real-para-contractile]], cytosolic [[80S ribosomes|ribosome]], and dimorphic [[macro/micronuclei|real-para-nuclei]]; Outputs: Directed swimming, digested monomer uptake, expelled water and waste, and asexual fission or sexual conjugation.',
      scientific:
        'Free-living freshwater alveolate ciliate Paramecium caudatum (Domain Eukaryota, Supergroup Alveolata, Phylum Ciliophora; ~150-250 micrometers length x ~45-65 micrometers width). Bounded by an elastic cortical pellicle of flattened calcium-storing alveoli (homologous to the [[Plasmodium|real-plasmodium]] inner membrane complex) anchoring ~3,000-5,000 [[9+2 cilia|real-para-axoneme]] driven by [[axonemal dynein|real-para-dynein]] (PDB 7KZM / 8G2Z). Integrates ciliated [[phagocytosis|real-para-feeding]] with cyclosis, paired V-ATPase-driven [[contractile vacuoles|real-para-contractile]], aerobic [[mitochondria|mitochondrion]], cytosolic [[80S ribosomes|ribosome]], and nuclear dimorphism (~30 Mbp polyploid somatic macronucleus plus diploid germline [[micronucleus|real-para-nuclei]]).'
    },
    es: {
      simple:
        'Paramecium caudatum es un eucariota unicelular de vida libre con forma de zapatilla que caza [[bacterias|real-bacterium]] en agua dulce. Sin un solo órgano ni neurona, esta única célula nada, esquiva obstáculos, traga, digiere, achica agua y administra dos núcleos distintos.',
      story:
        'Suele pensarse que los [[eucariotas|real-cell]] unicelulares son versiones simples de animales o plantas, pero un solo Paramecium de 200 micrómetros funciona como un depredador microscópico completo. Miles de [[cilios móviles|real-para-cilia]] coordinados lo impulsan por el estanque y barren bacterias hacia su [[surco oral|real-para-feeding]] para encerrarlas en vacuolas digestivas. Como el agua dulce entra sin tregua por ósmosis, dos [[vacuolas contráctiles|real-para-contractile]] estrelladas expulsan el exceso cada pocos segundos, mientras sus [[núcleos dimórficos|real-para-nuclei]] separan la transcripción diaria de la reserva sexual.',
      blueprint:
        'Rol: Protista ciliado depredador autónomo de agua dulce (~150–250 × 55 µm) · Entradas: [[Bacterias|real-bacterium]] fagocitadas por el [[surco oral|real-para-feeding]], O₂ disuelto para [[mitocondrias|mitochondrion]] e ingreso osmótico continuo de [[agua|water]] · Interior: Película alveolar con [[cilios 9+2|real-para-cilia]], [[vacuolas alimenticias|real-para-feeding]] en ciclosis, [[vacuolas contráctiles|real-para-contractile]] con V-ATPasa, [[ribosomas 80S|ribosome]] y [[macro y micronúcleo|real-para-nuclei]] · Salida: Natación dirigida, absorción de nutrientes, expulsión de agua y desechos, fisión binaria y conjugación sexual.',
      scientific:
        'Ciliado alveolado dulceacuícola de vida libre Paramecium caudatum (Eukaryota, Alveolata, Ciliophora; ~150–250 µm de longitud × ~45–65 µm de anchura). Revestido por una película cortical de alvéolos aplanados almacenadores de Ca²⁺ (homólogos al complejo de membrana interna de [[Plasmodium|real-plasmodium]]) que anclan ~3.000–5.000 [[cilios 9+2|real-para-axoneme]] propulsados por [[dineína axonemal|real-para-dynein]] (PDB 7KZM / 8G2Z). Integra [[fagocitosis|real-para-feeding]] en ciclosis, [[vacuolas contráctiles|real-para-contractile]] con V-ATPasa, [[mitocondrias|mitochondrion]] aerobias, [[ribosomas 80S|ribosome]] citosólicos y dimorfismo nuclear (~30 Mpb poliploide somático más [[micronúcleo|real-para-nuclei]] diploide germinal).'
    }
  },

  'real-para-cilia': {
    en: {
      simple:
        'Thousands of hair-like [[cilia|cilium]] carpet the entire surface of [[Paramecium|real-paramecium]], beating in smooth traveling waves that propel and steer the cell through freshwater without muscles or nerves.',
      story:
        'Anchored in neat longitudinal rows inside the armored pellicle, roughly four thousand 10-micrometer [[cilia|cilium]] beat slightly out of phase with their neighbors, sending continuous metachronal ripples from front to back. Each rigid power stroke pushes [[water|water]] rearward before a flexible recovery sweep resets close to the hull. When [[Paramecium|real-paramecium]] bumps into an obstacle, calcium channels open along the ciliary membrane and momentarily reverse every stroke, backing the cell away and angling it onto a fresh course.',
      blueprint:
        'Role: Coordinated surface propulsion, steering, and prey-sweeping ciliary array; Inputs: Basal anchoring in cortical kinetosomes, ATP from sub-cortical [[mitochondria|mitochondrion]], and voltage-gated Ca2+ reversal signals; Inside: ~3,000-5,000 membrane-wrapped [[9+2 axonemes|real-para-axoneme]] powered by [[axonemal dynein|real-para-dynein]] walking along [[tubulin|tubulin]] doublets; Outputs: Metachronal hydrodynamic thrust (~1-2 mm/s), rapid avoiding-reaction reversal, and feeding currents into the [[oral groove|real-para-feeding]].',
      scientific:
        'Dense array of ~3,000-5,000 motile eukaryotic [[cilia|cilium]] (~250 nm diameter, ~10-12 micrometers length) arranged in longitudinal kineties across the alveolar pellicle of [[Paramecium caudatum|real-paramecium]]. Each cilium extends from a 9x3 microtubule kinetosome (basal body) into a [[9+2 axoneme|real-para-axoneme]] (PDB 8G2Z) beating at ~10-40 Hz in antiplectic/symplectic metachronal waves (~1-2 mm/s helical swimming). Mechanosensory anterior depolarization opens ciliary voltage-gated Ca2+ channels (CaV), elevating intraciliary [Ca2+] from ~0.1 to >1 micromolar to transiently invert [[dynein|real-para-dynein]] beat direction.'
    },
    es: {
      simple:
        'Miles de [[cilios|cilium]] filamentosos cubren toda la superficie de [[Paramecium|real-paramecium]] y baten en ondas coordinadas que impulsan y dirigen a la célula por el agua dulce sin músculos ni nervios.',
      story:
        'Anclados en hileras longitudinales dentro de la película alveolar, unos cuatro mil [[cilios|cilium]] de 10 micrómetros baten con un ligero desfase respecto a sus vecinos, generando ondas metácronas continuas de proa a popa. Cada golpe efectivo rígido empuja el [[agua|water]] hacia atrás antes de un retorno flexible pegado a la superficie. Si [[Paramecium|real-paramecium]] choca con un obstáculo, la entrada de calcio por la membrana ciliar invierte al instante el sentido del batido para retroceder y girar hacia una nueva ruta.',
      blueprint:
        'Rol: Sistema superficial coordinado de propulsión, viraje y captura de presas · Entradas: Anclaje basal en cinetosomas corticales, ATP de [[mitocondrias|mitochondrion]] subcorticales y señales de Ca²⁺ dependientes de voltaje · Interior: ~3.000–5.000 [[axonemas 9+2|real-para-axoneme]] envueltos en membrana e impulsados por [[dineína axonemal|real-para-dynein]] sobre dobletes de [[tubulina|tubulin]] · Salida: Empuje hidrodinámico metácrono (~1–2 mm/s), reacción evasiva reversible y corrientes hacia el [[surco oral|real-para-feeding]].',
      scientific:
        'Revestimiento denso de ~3.000–5.000 [[cilios|cilium]] móviles eucariotas (~250 nm de diámetro, ~10–12 µm de longitud) ordenados en cinetias longitudinales sobre la película alveolar de [[Paramecium caudatum|real-paramecium]]. Cada cilio brota de un cinetosoma de tripletes 9×3 hacia un [[axonema 9+2|real-para-axoneme]] (PDB 8G2Z) con batido metácrono a ~10–40 Hz (~1–2 mm/s en trayectoria helicoidal). La despolarización mecánica abre canales ciliares de Ca²⁺ (CaV), elevando [Ca²⁺] por encima de 1 µM para invertir transitoriamente el golpe de la [[dineína|real-para-dynein]].'
    }
  },

  'real-para-axoneme': {
    en: {
      simple:
        'Inside every [[Paramecium cilium|real-para-cilia]] stands a 9+2 axoneme: nine paired [[microtubule|microtubule]] rails arranged in a ring around two central pipes that convert tiny motor steps into smooth whip-like bends.',
      story:
        'Zoom down to 250 nanometers across a single cilium and the architectural blueprint behind eukaryotic swimming snaps into focus. Nine outer [[microtubule|microtubule]] doublets - each a complete 13-strand A-tubule fused to a 10-strand B-tubule of [[tubulin|tubulin]] - ring a central pair of singlet pipes linked by radial spokes. When [[axonemal dynein|real-para-dynein]] tries to slide neighboring doublets past one another, elastic nexin cross-links and basal anchors resist free sliding, converting shear directly into rhythmic bending along the entire shaft.',
      blueprint:
        'Role: 250 nm 9+2 microtubule core converting linear dynein sliding into planar ciliary bending; Inputs: [[Alpha/beta-tubulin|tubulin]] heterodimers polymerized atop the 9x3 basal kinetosome plus ATP-driven shear from [[axonemal dynein|real-para-dynein]]; Inside: Nine A/B outer [[microtubule|microtubule]] doublets (PDB 8G2Z), central singlet pair (C1/C2), radial spokes, and 96 nm nexin-dynein regulatory complexes (N-DRC); Outputs: Elastic shear resistance transforming sliding force into propagated bending waves across [[Paramecium cilia|real-para-cilia]].',
      scientific:
        'Canonical motile eukaryotic 9+2 ciliary [[axoneme|cilium]] (~250 nm diameter; native doublet repeat cryo-EM PDB 8G2Z) extending longitudinally from the cortical kinetosome of [[Paramecium|real-paramecium]]. Comprises nine outer [[microtubule|microtubule]] doublets (13-protofilament A-tubule fused to 10-protofilament B-tubule built from post-translationally modified [[alpha/beta-tubulin|tubulin]], PDB 1JFF) surrounding a central pair (C1/C2) connected via T-shaped radial spokes and 96 nm N-DRC elastic linkers. Cross-link restriction converts [[dynein|real-para-dynein]] inter-doublet sliding into propagated ~10-40 Hz bends.'
    },
    es: {
      simple:
        'En el interior de cada [[cilio de Paramecium|real-para-cilia]] se alza un axonema 9+2: nueve pares de [[microtúbulos|microtubule]] dispuestos en anillo alrededor de dos tubos centrales que convierten pasos motores diminutos en flexiones rítmicas.',
      story:
        'Al acercarse a 250 nanómetros dentro de un cilio aparece el armazón maestro de la natación eucariota. Nueve dobletes periféricos de [[microtúbulos|microtubule]] —cada uno formado por un túbulo A completo de 13 protofilamentos fusionado a un túbulo B de 10— rodean a un par central unido por radios proteicos. Cuando la [[dineína axonemal|real-para-dynein]] intenta deslizar un doblete sobre el vecino, los puentes elásticos de nexina y el anclaje basal frenan el deslizamiento libre y lo transforman en una flexión coordinada a lo largo del eje.',
      blueprint:
        'Rol: Núcleo microtubular 9+2 de 250 nm que convierte el deslizamiento de dineína en flexión ciliar · Entradas: Heterodímeros de [[αβ-tubulina|tubulin]] polimerizados sobre el cinetosoma 9×3 y fuerza cortante de la [[dineína axonemal|real-para-dynein]] · Interior: Nueve dobletes externos A/B (PDB 8G2Z), par central C1/C2, radios internos y complejos reguladores nexina–dineína (N-DRC) cada 96 nm · Salida: Resistencia elástica que propaga ondas de flexión por los [[cilios de Paramecium|real-para-cilia]].',
      scientific:
        '[[Axonema|cilium]] ciliar móvil eucariota canónico 9+2 (~250 nm de diámetro; repetición de doblete por crio-EM PDB 8G2Z) extendido desde el cinetosoma cortical de [[Paramecium|real-paramecium]]. Reúne nueve dobletes externos de [[microtúbulos|microtubule]] (túbulo A de 13 protofilamentos unido al túbulo B de 10, ensamblados con [[αβ-tubulina|tubulin]] modificada, PDB 1JFF) en torno a un par central C1/C2 enlazado por radios y complejos elásticos N-DRC cada 96 nm que transforman el cizallamiento de la [[dineína|real-para-dynein]] en batidos de ~10–40 Hz.'
    }
  },

  'real-para-dynein': {
    en: {
      simple:
        'Axonemal dynein is a heavy [[motor protein|motor-protein]] bolted onto each outer rail of the [[9+2 axoneme|real-para-axoneme]]. Burning ATP, its stepping arms pull the neighboring [[microtubule|microtubule]] rail to bend the cilium back and forth.',
      story:
        'Every millimeter that [[Paramecium|real-paramecium]] glides across a drop of water is paid for in millions of tiny strokes by axonemal dynein arms lined up every 24 nanometers along the [[9+2 axoneme|real-para-axoneme]]. Each massive AAA+ motor tail anchors permanently to an A-tubule while its slender coiled-coil stalk reaches across to grip the adjacent B-tubule of [[tubulin|tubulin]]. Splitting one [[magnesium|atom-mg]]-bound ATP molecule swings the linker lever in an 8-nanometer power stroke, shearing the doublets so opposing arcs of the ring bend the cilium smoothly.',
      blueprint:
        'Role: Heavy AAA+ ATPase ciliary motor generating inter-doublet sliding torque; Inputs: Cytosolic Mg2+-ATP from sub-cortical [[mitochondria|mitochondrion]] plus radial-spoke and Ca2+ regulatory signals; Inside: Outer (24 nm repeat) and inner (96 nm repeat) dynein heavy-chain rings (PDB 7KZM) anchored on A-tubules with stalks stepping minus-endward along adjacent B-tubules; Outputs: ~5-7 pN strokes per head converted by [[axoneme|real-para-axoneme]] nexin links into rhythmic [[ciliary|real-para-cilia]] strokes.',
      scientific:
        'Multi-subunit axonemal [[dynein|motor-protein]] complexes (outer dynein arms, ODA, 24 nm spacing; inner dynein arms, IDA, 96 nm spacing; native cryo-EM PDB 7KZM) powering [[Paramecium|real-paramecium]] [[9+2 axonemes|real-para-axoneme]]. Each ~500 kDa heavy chain contains a hexameric AAA+ ATPase ring (AAA1 principal catalytic site coordinating [[Mg2+|atom-mg]]-ATP), a force-generating N-terminal linker, and a ~15 nm coiled-coil stalk ending in a microtubule-binding domain (MTBD) that walks minus-endward along [[beta-tubulin|tubulin]] (~8 nm step, ~5-7 pN stall force) to drive ciliary bending.'
    },
    es: {
      simple:
        'La dineína axonemal es una [[proteína motora|motor-protein]] pesada fijada a cada riel externo del [[axonema 9+2|real-para-axoneme]]. Al gastar ATP, sus brazos traccionan el [[microtúbulo|microtubule]] vecino para doblar el cilio de un lado a otro.',
      story:
        'Cada milímetro que avanza [[Paramecium|real-paramecium]] en una gota de agua se paga con millones de pasos coordinados de los brazos de dineína dispuestos cada 24 nanómetros en el [[axonema 9+2|real-para-axoneme]]. Cada motor AAA+ fija su cola de forma permanente al túbulo A mientras su tallo delgado alcanza el túbulo B vecino de [[tubulina|tubulin]]. Al hidrolizar una molécula de ATP con [[magnesio|atom-mg]], su palanca ejecuta un golpe de 8 nanómetros que desliza los dobletes y curva el cilio en fases alternas.',
      blueprint:
        'Rol: Motor ATPasa AAA+ pesado generador de fuerza cortante entre dobletes ciliares · Entradas: Mg²⁺·ATP citosólico de [[mitocondrias|mitochondrion]] subcorticales y señales reguladoras de radios y Ca²⁺ · Interior: Brazos externos (cada 24 nm) e internos (cada 96 nm) de cadenas pesadas (PDB 7KZM) anclados al túbulo A con tallos caminando hacia el extremo (−) del túbulo B · Salida: Golpes de ~5–7 pN por cabeza convertidos por el [[axonema|real-para-axoneme]] en batido [[ciliar|real-para-cilia]].',
      scientific:
        'Complejos motores multisubunidad de [[dineína|motor-protein]] axonemal (brazos externos ODA cada 24 nm e internos IDA cada 96 nm; estructura crio-EM PDB 7KZM) en el [[axonema 9+2|real-para-axoneme]] de [[Paramecium|real-paramecium]]. Cada cadena pesada (~500 kDa) integra un anillo hexamérico AAA+ (sitio catalítico principal AAA1 con [[Mg²⁺|atom-mg]]·ATP), un brazo palanca N-terminal y un tallo coiled-coil de ~15 nm cuyo dominio de unión camina hacia el extremo (−) sobre [[β-tubulina|tubulin]] (paso ~8 nm, ~5–7 pN).'
    }
  },

  'real-para-contractile': {
    en: {
      simple:
        'Because [[Paramecium|real-paramecium]] lives in fresh pond water with no rigid cell wall, excess [[water|water]] leaks inside nonstop. Two star-shaped contractile vacuoles gather that floodwater and pump it back outside every few seconds.',
      story:
        'Without a rigid cellulose wall like a [[plant cell|real-plant]] or chitin armor like a [[fungus|real-fungal]], a freshwater protist faces constant osmotic flooding as pond [[water|water]] rushes into its saltier cytoplasm. [[Paramecium|real-paramecium]] solves this crisis with two star-shaped contractile vacuoles working like automatic bilge pumps at opposite ends of the cell. Proton-pumping V-ATPases lining a sponge-like tubule network load ions into radial collecting canals so water follows by osmosis into the central bladder, which then opens a surface pore and contracts in alternating beats.',
      blueprint:
        'Role: Rhythmic osmoregulatory water-expulsion complex preventing hypotonic lysis; Inputs: Passive osmotic [[water|water]] influx across the [[plasma membrane|plasma-membrane]] plus ATP powering spongiome V-ATPase H+ pumps; Inside: Paired anterior/posterior central bladders (~10-20 micrometers), 6-10 radiating collecting canals, decorated V-ATPase tubules, aquaporins, and gated expulsion pores; Outputs: Pulsatile discharge of hypotonic fluid every ~6-15 seconds, maintaining steady cytosolic volume and osmolarity.',
      scientific:
        'Paired anterior and posterior contractile vacuole complexes (~10-20 micrometers diastole diameter, ~6-10 radial collecting canals and ampullae) maintaining water homeostasis in hypotonic freshwater (~1-5 mOsm external vs. ~100-120 mOsm cytosolic in [[Paramecium caudatum|real-paramecium]]). Dense vacuolar V1V0-ATPase proton pumps (homologous to [[ATP synthase|atp-synthase]]) on the decorated spongiome energize secondary K+/Cl-/HCO3- accumulation, driving osmotic [[water|water]] entry via aquaporins during diastole before alternating systole expels ~0.5-1.5 pL per ~6-15 s cycle through a transient cortical pore.'
    },
    es: {
      simple:
        'Como [[Paramecium|real-paramecium]] vive en agua dulce sin pared celular rígida, el [[agua|water]] entra sin parar en su interior. Dos vacuolas contráctiles con forma de estrella recogen ese exceso y lo bombean fuera cada pocos segundos.',
      story:
        'Sin una pared de celulosa como la [[célula vegetal|real-plant]] ni una coraza de quitina como los [[hongos|real-fungal]], un protista dulceacuícola afronta una inundación osmótica constante al ser más salado que el estanque. [[Paramecium|real-paramecium]] resuelve el peligro con dos vacuolas contráctiles estrelladas que operan como bombas de achique automáticas en extremos opuestos. Bombas V-ATPasa en una red esponjosa de túbulos acumulan iones en los canales colectores para atraer [[agua|water]] hacia la cámara central, que abre su poro y se contrae a ritmo alterno.',
      blueprint:
        'Rol: Complejo osmorregulador pulsátil que impide la lisis hipotónica · Entradas: Influjo osmótico pasivo de [[agua|water]] por la [[membrana plasmática|plasma-membrane]] y ATP para las bombas H⁺ V-ATPasa del espongioma · Interior: Dos cámaras alternas (~10–20 µm), 6–10 canales colectores radiales, túbulos decorados con V-ATPasa, acuaporinas y poros de expulsión · Salida: Descarga rítmica de fluido hipotónico cada ~6–15 s preservando el volumen citosólico.',
      scientific:
        'Complejos pares anterior y posterior de vacuola contráctil (~10–20 µm en diástole, 6–10 canales colectores radiales con ampollas) encargados de la osmorregulación de [[Paramecium caudatum|real-paramecium]] en agua dulce (~1–5 mOsm externa frente a ~100–120 mOsm interna). Bombas protónicas V₁V₀-ATPasa (emparentadas con la [[ATP sintasa|atp-synthase]]) en el espongioma decorado impulsan acumulación secundaria de K⁺/Cl⁻/HCO₃⁻ y entrada osmótica de [[agua|water]] por acuaporinas durante la diástole, seguida de sístole alterna (~0,5–1,5 pL cada ~6–15 s).'
    }
  },

  'real-para-feeding': {
    en: {
      simple:
        '[[Paramecium|real-paramecium]] eats whole [[bacteria|real-bacterium]] through a ciliated funnel called the oral groove. Food vacuoles pinch off at its cell mouth, digest their prey with acid and enzymes as they loop through the cytoplasm, and dump leftovers at an anal pore.',
      story:
        'Even without a mouth, stomach, or gut, [[Paramecium|real-paramecium]] runs a complete one-cell digestive tract. Specialized ciliary rows lining the diagonal oral groove sweep suspended [[bacteria|real-bacterium]] into the fixed cytostome, where membrane pinches around the catch to launch a fresh food [[vesicle|vesicle]]. Guided along cytoplasmic tracks in a slow loop called cyclosis, each vacuole first plunges to pH 3 to kill prey, then fuses with enzyme-packed [[lysosomes|lysosome]] to release [[amino acids|amino-acid]], sugars, and [[nucleotides|nucleotide]] before docking at the posterior cytoproct to expel indigestible wall fragments.',
      blueprint:
        'Role: End-to-end single-cell phagocytic capture, acid-enzymatic digestion, and waste-egestion pipeline; Inputs: Live [[bacteria|real-bacterium]] swept down the ciliated oral groove plus acidosomes and hydrolase-loaded [[lysosomes|lysosome]]; Inside: Cytostome/cytopharynx budding food vacuoles (~5-15 micrometers) traversing cytoplasmic cyclosis tracks across pH 7 -> pH 3 -> pH 5-6 -> neutral stages; Outputs: Absorbed [[amino acids|amino-acid]], lipids, and [[nucleotides|nucleotide]] for growth plus waste exocytosis and membrane recycling at the cytoproct.',
      scientific:
        'Complete unicellular phagocytic pathway in [[Paramecium caudatum|real-paramecium]]: specialized oral ciliature (peniculi and quadrulus) along the ventral peristome channels ~0.5-2 micrometer [[bacterial|real-bacterium]] prey to the fixed cytostome and microtubule-lined cytopharynx, where discoidal vesicle fusion forms ~5-15 micrometer nascent phagosomes (food vacuoles). During ~20-60 min cytoskeletal cyclosis, sequential fusion with V-ATPase acidosomes (dropping luminal pH to ~3.0) and [[lysosomes|lysosome]] (~pH 5-6 hydrolases) digests prey before neutral spent vacuoles undergo exocytosis and rapid membrane retrieval at the ventral cytoproct.'
    },
    es: {
      simple:
        '[[Paramecium|real-paramecium]] engulle [[bacterias|real-bacterium]] enteras a través de un embudo ciliado llamado surco oral. En la boca celular nacen vacuolas alimenticias que digieren la presa con ácido y enzimas mientras recorren el citoplasma hasta expulsar restos en un poro anal.',
      story:
        'Sin boca anatómica, estómago ni intestino, [[Paramecium|real-paramecium]] ejecuta un tubo digestivo completo dentro de una sola célula. Hileras especializadas de cilios en el surco oral barren [[bacterias|real-bacterium]] hacia el citostoma fijo, donde la membrana se cierra formando una [[vesícula|vesicle]] digestiva. Guiada por carriles citoplasmáticos en un circuito llamado ciclosis, cada vacuola cae primero a pH 3 para matar las bacterias, luego se fusiona con [[lisosomas|lysosome]] para liberar [[aminoácidos|amino-acid]], azúcares y [[nucleótidos|nucleotide]], y al final descarga los restos insolubles en el citoprocto.',
      blueprint:
        'Rol: Circuito unicelular completo de captura fagocítica, digestión ácido-enzimática y expulsión de residuos · Entradas: [[Bacterias|real-bacterium]] vivas arrastradas por el surco oral, acidosomas y [[lisosomas|lysosome]] cargados de hidrolasas · Interior: Citostoma/citofaringe formando vacuolas alimenticias (~5–15 µm) en ciclosis secuencial (pH 7 → pH 3 → pH 5–6 → neutro) · Salida: [[Aminoácidos|amino-acid]], lípidos y [[nucleótidos|nucleotide]] absorbidos, más exocitosis y reciclaje de membrana en el citoprocto.',
      scientific:
        'Vía fagocítica unicelular íntegra en [[Paramecium caudatum|real-paramecium]]: la ciliatura oral (penículos y cuádrulo) del peristoma ventral canaliza [[bacterias|real-bacterium]] (~0,5–2 µm) hacia el citostoma fijo y la citofaringe microtubular, donde la fusión de vesículas discoidales origina vacuolas alimenticias de ~5–15 µm. En ~20–60 min de ciclosis se fusionan primero acidosomas con V-ATPasa (pH ~3,0) y luego [[lisosomas|lysosome]] (pH ~5–6), antes de la exocitosis de restos y recuperación vesicular en el citoprocto.'
    }
  },

  'real-para-nuclei': {
    en: {
      simple:
        'Unlike human cells with one [[nucleus|nucleus]], [[Paramecium|real-paramecium]] keeps two distinct nuclei: a huge polyploid macronucleus running everyday gene reading, and a tiny diploid micronucleus locked away as a clean backup for sexual exchange.',
      story:
        'Running a giant 200-micrometer autonomous cell demands thousands of fresh [[mRNA|rna]] copies every second, far more than two chromosomal copies could ever supply. [[Paramecium|real-paramecium]] solves that bottleneck by splitting its genetic life in two. Its massive kidney-shaped macronucleus amplifies trimmed somatic genes to roughly eight hundred copies, keeping cytoplasmic [[80S ribosomes|ribosome]] supplied nonstop. Nestled quietly beside it sits the compact diploid micronucleus, silent during routine feeding yet safeguarded to swap exact genetic halves with a partner during sexual conjugation and build a brand-new macronucleus.',
      blueprint:
        'Role: Nuclear dimorphism separating high-output somatic transcription from germline inheritance; Inputs: [[Nucleotides|nucleotide]], chromatin [[proteins|protein]], and mitotic/meiotic signaling factors across double [[nuclear envelopes|nuclear-envelope]]; Inside: ~25-40 micrometer polyploid (~800n) somatic macronucleus (~30 Mbp streamlined chromosomes) paired with a ~3-5 micrometer transcriptionally silent diploid germline micronucleus; Outputs: Continuous [[mRNA|rna]]/rRNA supply to [[80S ribosomes|ribosome]] plus meiotic pronuclear exchange during conjugation.',
      scientific:
        'Ciliate nuclear dimorphism within a single [[Paramecium caudatum|real-paramecium]] cell, enclosed by standard double [[nuclear envelopes|nuclear-envelope]]. The somatic macronucleus (~25-40 micrometers, ~800n-1,000n ploidy, ~30 Mbp gene-dense somatic [[dsDNA|dna]] purged of internal eliminated sequences) drives all vegetative [[RNA|rna]] transcription and divides amitotically. The adjacent diploid germline micronucleus (~3-5 micrometers, transcriptionally silent in vegetative growth) retains complete centromeric chromosomes for mitosis and reciprocal haploid pronuclear exchange during sexual conjugation, after which a new macronucleus differentiates from the zygotic nucleus.'
    },
    es: {
      simple:
        'A diferencia de una célula humana con un solo [[núcleo|nucleus]], [[Paramecium|real-paramecium]] mantiene dos núcleos distintos: un enorme macronúcleo poliploide que dirige el trabajo diario y un pequeño micronúcleo diploide guardado como copia limpia para el intercambio sexual.',
      story:
        'Sostener una célula autónoma de 200 micrómetros exige miles de copias frescas de [[ARNm|rna]] cada segundo, un ritmo imposible con solo dos juegos de cromosomas. [[Paramecium|real-paramecium]] resuelve ese límite dividiendo su genética en dos cámaras. Su voluminoso macronúcleo arriñonado amplifica los genes somáticos depurados hasta unas ochocientas copias para abastecer sin pausa a los [[ribosomas 80S|ribosome]]. A su lado descansa el micronúcleo diploide, silencioso durante la alimentación diaria pero preservado intacto para intercambiar mitades genéticas durante la conjugación sexual y fabricar un macronúcleo nuevo.',
      blueprint:
        'Rol: Dimorfismo nuclear que separa la transcripción somática masiva de la herencia germinal · Entradas: [[Nucleótidos|nucleotide]], [[proteínas|protein]] cromatínicas y señales mitóticas/meióticas a través de dobles [[envolturas nucleares|nuclear-envelope]] · Interior: Macronúcleo somático poliploide (~25–40 µm, ~800n, cromosomas depurados de ~30 Mpb) junto a un micronúcleo germinal diploide (~3–5 µm) silencioso · Salida: Flujo continuo de [[ARNm|rna]]/ARNr hacia [[ribosomas 80S|ribosome]] e intercambio meiótico en conjugación.',
      scientific:
        'Dimorfismo nuclear ciliado en una sola célula de [[Paramecium caudatum|real-paramecium]] delimitado por sendas [[envolturas nucleares|nuclear-envelope]] dobles. El macronúcleo somático (~25–40 µm, ploidía ~800n–1.000n, [[ADNbc|dna]] somático depurado de ~30 Mpb sin secuencias eliminadas internas) sostiene toda la transcripción vegetativa de [[ARN|rna]] y se divide por amitosis; el micronúcleo germinal diploide (~3–5 µm, transcripcionalmente silente) conserva cromosomas íntegros para la mitosis y el intercambio recíproco de pronúcleos haploides durante la conjugación.'
    }
  },

  'real-plasmodium': {
    en: {
      simple:
        'Plasmodium falciparum is the malaria parasite: a tiny 1.5-micrometer single-celled eukaryote that drives itself inside human red blood cells. Unlike bacterial parasites such as [[Chlamydia|real-chlamydia]], it has a true [[nucleus|nucleus]], [[80S ribosomes|ribosome]], a [[mitochondrion|mitochondrion]], and a relict four-membrane [[chloroplast|real-plas-apicoplast]].',
      story:
        'Many learners assume intracellular pathogens are always viruses or [[bacteria|real-chlamydia]], yet the deadliest human malaria parasite is a full [[eukaryote|real-cell]] hiding inside our erythrocytes. Barely 1.5 micrometers long, an invasive merozoite fires its [[apical complex|real-plas-apical]] and [[glideosome|real-plas-glideosome]] motor to zip straight into a 7.5-micrometer red blood cell inside a protective parasitophorous vacuole. Once settled, its nuclear genome and [[80S ribosomes|ribosome]] remodel the host cell, its relict [[4-membrane apicoplast|real-plas-apicoplast]] makes vital isoprenoids, and its acidic [[digestive vacuole|real-plas-digestive]] devours [[hemoglobin|real-plas-hemoglobin]] while locking toxic [[heme|real-plas-heme]] into dark [[hemozoin|real-plas-hemozoin]] crystals.',
      blueprint:
        'Role: Obligate intracellular eukaryotic apicomplexan parasite invading human erythrocytes (~1.5 x 1.0 micrometer merozoite in ~7.5 micrometer RBC); Inputs: Host erythrocyte [[hemoglobin|real-plas-hemoglobin]], plasma glucose, and exogenous isoleucine across the parasitophorous vacuole membrane (PVM); Inside: True [[nucleus|nucleus]] (23.3 Mbp, 14 linear chromosomes), cytosolic [[80S ribosomes|ribosome]] (PDB 3J79), [[apical complex|real-plas-apical]], [[PfMyoA glideosome|real-plas-glideosome]], single [[mitochondrion|mitochondrion]], [[4-membrane apicoplast|real-plas-apicoplast]], and [[digestive vacuole|real-plas-digestive]]; Outputs: 16-32 daughter merozoites per ~48 h blood cycle, exported RBC-remodeling knobs, and [[hemozoin|real-plas-hemozoin]] biocrystals.',
      scientific:
        'Eukaryotic apicomplexan parasite Plasmodium falciparum (Domain Eukaryota, Alveolata, Apicomplexa; ~1.5 x 1.0 micrometer invasive merozoite developing within a parasitophorous vacuole inside a ~7.5 x 2.0 micrometer human erythrocyte). Directly contrasts with bacterial parasites [[Chlamydia|real-chlamydia]] and [[Rickettsia|real-rickettsia]]: encodes a 23.3 Mbp nuclear genome across 14 linear chromosomes (~5,300 genes), cytosolic [[80S ribosomes|ribosome]] (PDB 3J79), a 6 kb [[mitochondrion|mitochondrion]], an alveolar IMC-anchored [[PfMyoA-MTIP glideosome|real-plas-glideosome]] (PDB 6YCX), a secondary-endosymbiotic [[4-membrane apicoplast|real-plas-apicoplast]] (35 kb DNA, [[70S ribosomes|ribosome-70s]]), and a [[digestive vacuole|real-plas-digestive]] detoxifying [[hemoglobin|real-plas-hemoglobin]]-derived [[heme|real-plas-heme]] into [[hemozoin|real-plas-hemozoin]].'
    },
    es: {
      simple:
        'Plasmodium falciparum es el parásito de la malaria: un eucariota unicelular de 1,5 micrómetros que penetra activamente en los glóbulos rojos humanos. A diferencia de bacterias parásitas como [[Chlamydia|real-chlamydia]], posee [[núcleo|nucleus]], [[ribosomas 80S|ribosome]], [[mitocondria|mitochondrion]] y un [[cloroplasto relicto|real-plas-apicoplast]] de cuatro membranas.',
      story:
        'Muchos suponen que los parásitos intracelulares son siempre virus o [[bacterias|real-chlamydia]], pero el agente más letal de la malaria es un [[eucariota|real-cell]] completo oculto en nuestros eritrocitos. Con apenas 1,5 micrómetros, el merozoíto dispara su [[complejo apical|real-plas-apical]] y su motor [[glideosoma|real-plas-glideosome]] para introducirse en un glóbulo rojo de 7,5 micrómetros dentro de una vacuola parasitófora. Ya instalado, su núcleo y sus [[ribosomas 80S|ribosome]] remodelan al huésped, su [[apicoplasto de 4 membranas|real-plas-apicoplast]] sintetiza isoprenoides esenciales y su [[vacuola digestiva|real-plas-digestive]] devora [[hemoglobina|real-plas-hemoglobin]] encerrando el [[hemo|real-plas-heme]] tóxico en cristales de [[hemozoína|real-plas-hemozoin]].',
      blueprint:
        'Rol: Parásito eucariota apicomplejo intracelular obligado en eritrocitos humanos (merozoíto ~1,5 × 1,0 µm en GR de ~7,5 µm) · Entradas: [[Hemoglobina|real-plas-hemoglobin]] del eritrocito, glucosa plasmática e isoleucina a través de la membrana vacuolar parasitófora (PVM) · Interior: [[Núcleo|nucleus]] verdadero (23,3 Mpb, 14 cromosomas lineales), [[ribosomas 80S|ribosome]] (PDB 3J79), [[complejo apical|real-plas-apical]], [[glideosoma PfMyoA|real-plas-glideosome]], [[mitocondria|mitochondrion]], [[apicoplasto|real-plas-apicoplast]] y [[vacuola digestiva|real-plas-digestive]] · Salida: 16–32 merozoítos hijos cada ~48 h, botones adhesivos y cristales de [[hemozoína|real-plas-hemozoin]].',
      scientific:
        'Parásito eucariota apicomplejo Plasmodium falciparum (Eukaryota, Alveolata, Apicomplexa; merozoíto invasivo de ~1,5 × 1,0 µm alojado en una vacuola parasitófora dentro de un eritrocito humano de ~7,5 × 2,0 µm). En contraste directo con [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]], alberga un genoma nuclear de 23,3 Mpb en 14 cromosomas lineales (~5.300 genes), [[ribosomas 80S|ribosome]] citosólicos (PDB 3J79), [[mitocondria|mitochondrion]] de 6 kb, [[glideosoma PfMyoA–MTIP|real-plas-glideosome]] anclado al IMC (PDB 6YCX), [[apicoplasto de 4 membranas|real-plas-apicoplast]] por endosimbiosis secundaria (ADN de 35 kb y [[ribosomas 70S|ribosome-70s]]) y [[vacuola digestiva|real-plas-digestive]] formadora de [[hemozoína|real-plas-hemozoin]].'
    }
  },

  'real-plas-apical': {
    en: {
      simple:
        'At the pointed nose of [[Plasmodium|real-plasmodium]] sits the apical complex: a precision invasion toolkit of secretory sacs and protein rings that docks onto a human red blood cell and builds a tight gateway straight inside.',
      story:
        'Human red blood cells do not swallow microbes on their own, so a 1.5-micrometer [[Plasmodium|real-plasmodium]] merozoite must force entry in under a minute using its polarized apical tip. First, cigar-shaped micronemes release adhesins including PfRH5, which binds host Basigin and triggers a calcium commit signal. Next, paired tear-drop rhoptries inject the RON2 anchor directly into the red cell membrane so parasite AMA1 locks onto it, forming a self-laid moving junction ring that zips backward as the [[glideosome|real-plas-glideosome]] pulls the parasite straight inside its fresh vacuole.',
      blueprint:
        'Role: Polarized secretory and junction-building invasion apparatus defining Phylum Apicomplexa; Inputs: Erythrocyte surface recognition (Basigin/CD147), intracellular Ca2+ triggers, and traction from the [[PfMyoA glideosome|real-plas-glideosome]]; Inside: Apical polar rings, cigar-shaped micronemes (PfRH5 PDB 4U0Q, AMA1), paired tear-drop rhoptries (RON2/4/5, PVM lipids), and the circumferential AMA1-RON2 moving junction (PDB 3SRI); Outputs: Irreversible host commitment, membrane-zippered erythrocyte entry in ~30-60 s, and parasitophorous vacuole membrane (PVM) biogenesis.',
      scientific:
        'Polarized anterior invasion complex of [[Plasmodium falciparum|real-plasmodium]] (~300-600 nm apical zone) organizing apical polar rings (nucleating sub-pellicular [[microtubules|microtubule]]), micronemes (~100-150 nm), and paired bulbous rhoptries (~300-600 nm). Sequential Ca2+-triggered exocytosis deploys micronemal PfRH5-CyRPA-Ripr binding host erythrocyte Basigin (PDB 4U0Q) to trigger rhoptry-neck injection of RON2/RON4/RON5 into the RBC [[plasma membrane|plasma-membrane]]. Micronemal AMA1 then engages the RON2 extracellular loop (PDB 3SRI) to assemble the circumferential moving junction pulled rearward by the [[glideosome|real-plas-glideosome]] while rhoptry-bulb lipids build the PVM.'
    },
    es: {
      simple:
        'En la punta afilada de [[Plasmodium|real-plasmodium]] se concentra el complejo apical: un conjunto de vesículas secretoras y anillos proteicos que reconoce el glóbulo rojo humano y abre una compuerta sellada hacia su interior.',
      story:
        'Los glóbulos rojos humanos no fagocitan microbios por sí mismos, así que el merozoíto de [[Plasmodium|real-plasmodium]] debe forzar su entrada en menos de un minuto con su polo apical. Primero, los micronemas liberan adhesinas como PfRH5, que se enlaza a Basigin del eritrocito y dispara una señal de calcio. Acto seguido, las roptrias en forma de lágrima inyectan el receptor RON2 en la membrana del glóbulo rojo para que AMA1 del parásito se acople a él, cerrando un anillo de unión móvil que se desliza hacia atrás impulsado por el [[glideosoma|real-plas-glideosome]].',
      blueprint:
        'Rol: Aparato polarizado secretor y formador de la unión de invasión propio del filo Apicomplexa · Entradas: Reconocimiento superficial del eritrocito (Basigin/CD147), pulsos de Ca²⁺ y tracción del [[glideosoma PfMyoA|real-plas-glideosome]] · Interior: Anillos polares apicales, micronemas (PfRH5 PDB 4U0Q, AMA1), roptrias pareadas (RON2/4/5 y lípidos PVM) y anillo móvil AMA1–RON2 (PDB 3SRI) · Salida: Compromiso irreversible, entrada al eritrocito en ~30–60 s y biogénesis de la membrana vacuolar parasitófora.',
      scientific:
        'Complejo apical invasivo polarizado de [[Plasmodium falciparum|real-plasmodium]] (~300–600 nm) compuesto por anillos polares apicales (nucleadores de [[microtúbulos|microtubule]] subpeliculares), micronemas (~100–150 nm) y dos roptrias piriformes (~300–600 nm). La exocitosis regulada por Ca²⁺ expone el complejo micronemal PfRH5–CyRPA–Ripr unido a Basigin eritrocitario (PDB 4U0Q), disparando la inyección del complejo de cuello roptrial RON2/4/5 en la [[membrana plasmática|plasma-membrane]] del huésped; AMA1 se acopla a RON2 (PDB 3SRI) formando la unión móvil traccionada por el [[glideosoma|real-plas-glideosome]].'
    }
  },

  'real-plas-glideosome': {
    en: {
      simple:
        'Tucked just beneath the outer skin of [[Plasmodium|real-plasmodium]], the glideosome is a compact myosin-and-actin motor engine that pulls surface grips backward to drive the parasite forward into a red blood cell.',
      story:
        'Without cilia or flagella, how does a merozoite push its way through a tough human red cell membrane? Between its outer [[plasma membrane|plasma-membrane]] and its flattened inner membrane complex (IMC) - the evolutionary cousin of [[Paramecium|real-paramecium]] pellicle alveoli - [[Plasmodium|real-plasmodium]] anchors rows of specialized PfMyoA [[motor proteins|motor-protein]]. Burning [[magnesium|atom-mg]]-bound ATP, these tethered motors walk along short parasite PfActI [[actin filaments|actin-filament]] linked to surface adhesins at the [[AMA1-RON2 moving junction|real-plas-apical]], hauling the host membrane rearward until the parasite slides completely inside.',
      blueprint:
        'Role: Sub-pellicular actomyosin traction motor driving erythrocyte invasion and gliding motility; Inputs: Cytosolic Mg2+-ATP, short dynamic PfActI [[actin filaments|actin-filament]] (PDB 4CBU), and membrane-linked adhesin tails; Inside: IMC-anchored GAP45/GAP50/GAP40 scaffold holding PfMyoA heavy chain, MTIP, and ELC light chains (PDB 6YCX) inside the ~25-30 nm supra-alveolar space; Outputs: Rearward traction along the [[AMA1-RON2 moving junction|real-plas-apical]], propelling [[Plasmodium|real-plasmodium]] completely inside the host erythrocyte.',
      scientific:
        'Apicomplexan class-XIV actomyosin motor complex (~25-30 nm supra-alveolar compartment between the [[plasma membrane|plasma-membrane]] and inner membrane complex, IMC) in [[Plasmodium falciparum|real-plasmodium]]. Comprises single-headed unconventional myosin PfMyoA complexed with regulatory myosin tail-interacting protein (MTIP) and essential light chain (ELC; structural complex PDB 6YCX), anchored to the IMC via transmembrane GAP50/GAP40 and acylated GAP45. Hydrolyzing [[Mg2+|atom-mg]]-ATP, PfMyoA drives barbed-end sliding of short (~100-150 nm) divergent PfActI [[actin filaments|actin-filament]] (PDB 4CBU) coupled via GAC to surface adhesins across the [[moving junction|real-plas-apical]].'
    },
    es: {
      simple:
        'Alojado justo bajo la piel externa de [[Plasmodium|real-plasmodium]], el glideosoma es un motor compacto de miosina y actina que tira hacia atrás de los anclajes superficiales para impulsar al parásito dentro del glóbulo rojo.',
      story:
        'Sin cilios ni flagelos, ¿cómo atraviesa un merozoíto la resistente membrana de un eritrocito humano? Entre su [[membrana plasmática|plasma-membrane]] externa y el complejo de membrana interna (IMC) —pariente evolutivo de los alvéolos de [[Paramecium|real-paramecium]]—, [[Plasmodium|real-plasmodium]] fija filas de [[proteínas motoras|motor-protein]] PfMyoA. Consumiendo ATP unido a [[magnesio|atom-mg]], estos motores caminan sobre cortos [[filamentos de actina|actin-filament]] PfActI enlazados a las adhesinas de la [[unión móvil AMA1–RON2|real-plas-apical]], arrastrando la membrana del huésped hacia atrás hasta introducir por completo al parásito.',
      blueprint:
        'Rol: Motor subpelicular de actomiosina que impulsa la invasión eritrocitaria y el deslizamiento · Entradas: Mg²⁺·ATP citosólico, cortos [[filamentos de actina|actin-filament]] PfActI (PDB 4CBU) y colas de adhesinas de membrana · Interior: Andamiaje GAP45/GAP50/GAP40 anclado al IMC que sostiene la cadena pesada PfMyoA, MTIP y ELC (PDB 6YCX) en la hendidura de ~25–30 nm · Salida: Tracción retrógrada sobre la [[unión móvil AMA1–RON2|real-plas-apical]] que introduce a [[Plasmodium|real-plasmodium]] en el eritrocito.',
      scientific:
        'Complejo motor apicomplejo de actomiosina clase XIV localizado en el espacio supraalveolar (~25–30 nm entre la [[membrana plasmática|plasma-membrane]] y el IMC) de [[Plasmodium falciparum|real-plasmodium]]. Integra la miosina no convencional de una cabeza PfMyoA unida a MTIP y cadena ligera esencial ELC (complejo PDB 6YCX), anclada al IMC por GAP50/GAP40 y GAP45 acilada. Mediante hidrólisis de [[Mg²⁺|atom-mg]]·ATP, PfMyoA desplaza [[filamentos de actina|actin-filament]] cortos (~100–150 nm) de PfActI (PDB 4CBU) enlazados por GAC a las adhesinas de la [[unión móvil|real-plas-apical]].'
    }
  },

  'real-plas-apicoplast': {
    en: {
      simple:
        'Hidden inside [[Plasmodium|real-plasmodium]] is the apicoplast: a non-photosynthetic relict [[chloroplast|chloroplast]] wrapped in four concentric membranes. Even without sunlight, it makes essential lipids and isoprenoids - and gives certain bacterial antibiotics a surprising delayed-death target.',
      story:
        'Why does a blood-dwelling human parasite carry a [[chloroplast|chloroplast]] cousin wrapped in four nested lipid bilayers? Hundreds of millions of years ago, a predatory protist ancestor engulfed a photosynthetic red alga that already carried a two-membrane cyanobacterial plastid, preserving all four boundaries as proof of secondary endosymbiosis. Although [[Plasmodium|real-plasmodium]] abandoned photosynthesis, it cannot survive without the isoprenoid building blocks manufactured inside this tiny chamber - and because the apicoplast still translates its 35-kilobase circular [[DNA|dna]] on bacterial-style [[70S ribosomes|ribosome-70s]], antibiotics like doxycycline kill the parasite on the next replication cycle.',
      blueprint:
        'Role: Essential non-photosynthetic 4-membrane relict plastid inherited via secondary endosymbiosis; Inputs: Nuclear-encoded proteins bearing bipartite signal/transit peptides imported across four bilayers plus glycolytic triose phosphates; Inside: Four concentric [[phospholipid|phospholipid]] membranes enclosing a 35 kb circular [[dsDNA|dna]] genome, bacterial-type [[70S ribosomes|ribosome-70s]], MEP/DOXP isoprenoid enzymes, and FAS-II machinery; Outputs: Essential IPP/DMAPP isoprenoids (blood stage), fatty acids, heme precursors, and delayed-death vulnerability to [[70S|ribosome-70s]]-targeting antibiotics.',
      scientific:
        'Non-photosynthetic relict plastid (~0.3-0.6 micrometers ovoid/tubular organelle) of [[Plasmodium falciparum|real-plasmodium]] bounded by four concentric [[phospholipid|phospholipid]] bilayers resulting from secondary endosymbiosis of a photosynthetic red alga (outer phagosomal, periplastid algal plasma, outer plastid, and inner cyanobacterial membranes). Retains a highly AT-rich (~86%) 35 kb circular [[dsDNA|dna]] genome translated on plastid [[70S ribosomes|ribosome-70s]] (~30 ORFs), while importing >400 nuclear-encoded proteins. Essential in blood stages solely for MEP/DOXP synthesis of IPP/DMAPP isoprenoids; inhibition of plastid 70S translation (doxycycline, clindamycin) triggers a second-cycle delayed-death phenotype.'
    },
    es: {
      simple:
        'Oculto dentro de [[Plasmodium|real-plasmodium]] habita el apicoplasto: un [[cloroplasto|chloroplast]] relicto no fotosintético envuelto en cuatro membranas concéntricas. Aun sin luz solar, fabrica isoprenoides esenciales y ofrece a ciertos antibióticos bacterianos una diana letal diferida.',
      story:
        '¿Por qué un parásito sanguíneo humano conserva un pariente del [[cloroplasto|chloroplast]] rodeado por cuatro bicapas lipídicas anidadas? Hace cientos de millones de años, un protista ancestral engulló un alga roja fotosintética que ya contenía un plasto de doble membrana, sellando las cuatro capas como huella de endosimbiosis secundaria. Aunque [[Plasmodium|real-plasmodium]] perdió la fotosíntesis, no puede vivir sin los isoprenoides que produce esta cámara; y como su [[ADN|dna]] circular de 35 kilobases aún se traduce en [[ribosomas 70S|ribosome-70s]] de tipo bacteriano, fármacos como la doxiciclina provocan su muerte diferida en el ciclo siguiente.',
      blueprint:
        'Rol: Plasto relicto esencial no fotosintético de 4 membranas fruto de endosimbiosis secundaria · Entradas: Proteínas nucleares con péptido señal + tránsito importadas a través de cuatro bicapas y triosas fosfato glucolíticas · Interior: Cuatro membranas de [[fosfolípidos|phospholipid]] rodeando [[ADNbc|dna]] circular de 35 kb, [[ribosomas 70S|ribosome-70s]] bacterianos, vía isoprenoide MEP/DOXP y síntesis FAS-II · Salida: Precursores IPP/DMAPP esenciales, ácidos grasos, precursores del hemo y vulnerabilidad diferida a antibióticos anti-[[70S|ribosome-70s]].',
      scientific:
        'Plasto relicto no fotosintético (~0,3–0,6 µm) de [[Plasmodium falciparum|real-plasmodium]] delimitado por cuatro bicapas concéntricas de [[fosfolípidos|phospholipid]] originadas por endosimbiosis secundaria de un alga roja (membrana fagosómica externa, periplastídica algal, externa e interna plastídicas). Conserva un [[ADNbc|dna]] circular de 35 kb (~86 % A+T) traducido en [[ribosomas 70S|ribosome-70s]] propios (~30 ORF) e importa >400 proteínas nucleares. Es indispensable en fase sanguínea por la vía MEP/DOXP de isoprenoides IPP/DMAPP; bloquear sus ribosomas 70S (doxiciclina, clindamicina) causa el fenómeno de muerte diferida.'
    }
  },

  'real-plas-digestive': {
    en: {
      simple:
        'The digestive vacuole is the acidic stomach compartment inside [[Plasmodium|real-plasmodium]]. It breaks down swallowed human [[hemoglobin|real-plas-hemoglobin]] into [[amino acids|amino-acid]] and locks the toxic leftover [[heme|real-plas-heme]] into harmless dark [[hemozoin|real-plas-hemozoin]] crystals.',
      story:
        'Growing rapidly inside a human erythrocyte, [[Plasmodium|real-plasmodium]] gulps down up to eighty percent of the host cell\'s [[hemoglobin|real-plas-hemoglobin]] through tiny surface invaginations and funnels it into this single acidic chamber. Proton-pumping V-ATPases drop the lumen to pH 5.2, activating plasmepsin and falcipain proteases that chop globin chains into fresh [[amino acids|amino-acid]] for parasite [[80S ribosomes|ribosome]]. Every cleaved tetramer releases four dangerous [[iron|atom-fe]]-bearing [[heme|real-plas-heme]] rings, forcing the vacuole to stack them rapidly into inert [[hemozoin|real-plas-hemozoin]] crystals - the exact vulnerability exploited by quinoline antimalarials.',
      blueprint:
        'Role: Acidic lysosome-like proteolysis and heme-detoxification chamber (~1-2 micrometers); Inputs: Endocytosed host erythrocyte [[hemoglobin|real-plas-hemoglobin]] vesicles plus cytoplasmic ATP powering vacuolar V-ATPase and H+-PPase pumps; Inside: Acidic lumen (pH ~5.0-5.4), plasmepsin/falcipain/falcilysin proteases, neutral lipid nanodroplets, and HDP-assisted [[hemozoin|real-plas-hemozoin]] crystallization; Outputs: Exported globin [[amino acids|amino-acid]] via PfCRT/transporters, cellular room for growth, and sequestered [[hemozoin|real-plas-hemozoin]] biocrystals.',
      scientific:
        'Specialized acidic lysosome-related digestive vacuole (~1-2 micrometers diameter in trophozoites; luminal pH ~5.0-5.4 maintained by V-ATPase and H+-pyrophosphatase pumps) in intraerythrocytic [[Plasmodium falciparum|real-plasmodium]]. Endocytosed host [[hemoglobin|real-plas-hemoglobin]] (~60-80% of erythrocyte content) is sequentially cleaved by aspartic plasmepsins (I-IV), cysteine falcipains (2/2-prime/3), metalloprotease falcilysin, and aminopeptidases to supply [[amino acids|amino-acid]] (excluding absent isoleucine) while liberating ~300-400 mM equivalent toxic [[Fe3+-heme|real-plas-heme]], biomineralized into [[hemozoin|real-plas-hemozoin]]; vacuolar transporter PfCRT mutations confer chloroquine resistance.'
    },
    es: {
      simple:
        'La vacuola digestiva es la cámara ácida interna de [[Plasmodium|real-plasmodium]]. Corta la [[hemoglobina|real-plas-hemoglobin]] humana ingerida en [[aminoácidos|amino-acid]] y encierra el [[hemo|real-plas-heme]] tóxico sobrante en inofensivos cristales oscuros de [[hemozoína|real-plas-hemozoin]].',
      story:
        'Al crecer deprisa dentro del eritrocito humano, [[Plasmodium|real-plasmodium]] engulle hasta el ochenta por ciento de la [[hemoglobina|real-plas-hemoglobin]] del huésped y la conduce a esta única cámara ácida. Bombas protónicas V-ATPasa reducen el lumen a pH 5,2 para activar plasmepsinas y falcipaínas que trocean las globinas en [[aminoácidos|amino-acid]] listos para sus [[ribosomas 80S|ribosome]]. Como cada tetrámero libera cuatro anillos reactivos de [[hemo|real-plas-heme]] con [[hierro|atom-fe]], la vacuola debe apilarlos sin demora en cristales inertes de [[hemozoína|real-plas-hemozoin]], el talón de Aquiles atacado por las quinolinas antimaláricas.',
      blueprint:
        'Rol: Cámara ácida lisosomal de proteólisis de hemoglobina y detoxificación del hemo (~1–2 µm) · Entradas: Vesículas endocíticas de [[hemoglobina|real-plas-hemoglobin]] eritrocitaria y ATP para bombas V-ATPasa y H⁺-PPasa · Interior: Lumen ácido (pH ~5,0–5,4), proteasas plasmepsinas/falcipaínas/falcilisina, nanogotas lipídicas neutras y cristalización de [[hemozoína|real-plas-hemozoin]] mediada por HDP · Salida: [[Aminoácidos|amino-acid]] exportados vía PfCRT, espacio intracelular y biocristales de [[hemozoína|real-plas-hemozoin]].',
      scientific:
        'Vacuola digestiva ácida especializada relacionada con el [[lisosoma|lysosome]] (~1–2 µm en trofozoítos; pH luminal ~5,0–5,4 mantenido por V-ATPasa y H⁺-pirofosfatasa) en [[Plasmodium falciparum|real-plasmodium]]. Degrada ~60–80 % de la [[hemoglobina|real-plas-hemoglobin]] del eritrocito mediante plasmepsinas aspárticas (I–IV), falcipaínas cisteínicas (2/2′/3), falcilisina y aminopeptidasas para obtener [[aminoácidos|amino-acid]] (salvo isoleucina ausente), biomineralizando el [[hemo Fe³⁺|real-plas-heme]] liberado en [[hemozoína|real-plas-hemozoin]]; las mutaciones del transportador PfCRT confieren resistencia a cloroquina.'
    }
  },

  'real-plas-hemozoin': {
    en: {
      simple:
        'Hemozoin is the dark malaria pigment formed when [[Plasmodium|real-plasmodium]] stacks toxic free [[heme|real-plas-heme]] rings into solid, chemically quiet crystals inside its [[digestive vacuole|real-plas-digestive]] so they cannot shred parasite membranes.',
      story:
        'Unlike human cells, [[Plasmodium|real-plasmodium]] has no heme oxygenase enzyme to dismantle the porphyrin rings pouring out of digested [[hemoglobin|real-plas-hemoglobin]]. Left loose in the acidic [[digestive vacuole|real-plas-digestive]], iron-loaded [[heme|real-plas-heme]] would rupture the parasite within minutes. Instead, neutral lipid surfaces and Heme Detoxification Protein guide pairs of heme molecules to snap together via reciprocal [[iron|atom-fe]]-to-propionate bonds, stacking into dense dark beta-hematin brick crystals. Antimalarial drugs such as chloroquine cap these growing crystal faces, trapping lethal free heme outside until it kills the parasite.',
      blueprint:
        'Role: Insoluble biomineralized malaria pigment sequestering reactive Fe3+-heme inside the [[digestive vacuole|real-plas-digestive]]; Inputs: Free [[Fe3+-protoporphyrin IX|real-plas-heme]] liberated by [[hemoglobin|real-plas-hemoglobin]] proteolysis plus neutral lipid droplets and HDP catalysts; Inside: Reciprocal iron-carboxylate dimers (Fe-O propionate coordination) packed via hydrogen bonds into ~200-500 nm triclinic beta-hematin crystals; Outputs: Detoxified inert pigment released at RBC rupture (triggering malarial fever spikes) and primary target of quinoline antimalarials.',
      scientific:
        'Biomineralized dark paramagnetic malaria pigment (beta-hematin; ~200-500 nm brick-shaped triclinic crystals) accumulated within the acidic [[digestive vacuole|real-plas-digestive]] of [[Plasmodium falciparum|real-plasmodium]]. Formed by reciprocal coordination between the central [[Fe3+|atom-fe]] of one [[heme|real-plas-heme]] and a propionate carboxylate oxygen of a partner heme (~1.89 angstrom axial Fe-O bond), stabilized into stacked crystal sheets by inter-dimer carboxylic hydrogen bonds at neutral lipid interfaces. Quinoline antimalarials (chloroquine, amodiaquine) adsorb to growing crystal faces via pi-pi stacking, blocking crystallization and triggering lethal free-heme toxicity.'
    },
    es: {
      simple:
        'La hemozoína es el pigmento oscuro de la malaria que forma [[Plasmodium|real-plasmodium]] al apilar anillos tóxicos de [[hemo|real-plas-heme]] libre en cristales sólidos e inertes dentro de su [[vacuola digestiva|real-plas-digestive]] para proteger sus membranas.',
      story:
        'A diferencia de las células humanas, [[Plasmodium|real-plasmodium]] carece de hemo oxigenasa para desarmar los anillos de porfirina que brotan de la [[hemoglobina|real-plas-hemoglobin]] digerida. Suelto en la [[vacuola digestiva|real-plas-digestive]] ácida, el [[hemo|real-plas-heme]] cargado de hierro destruiría al parásito en minutos. En su lugar, superficies lipídicas neutras y la proteína HDP acoplan pares de hemo mediante enlaces recíprocos [[hierro|atom-fe]]–propionato, levantando densos cristales oscuros de β-hematina. Antimaláricos como la cloroquina tapan las caras de crecimiento del cristal, dejando hemo tóxico libre hasta matar al parásito.',
      blueprint:
        'Rol: Pigmento malárico biomineralizado insoluble que inmoviliza el hemo Fe³⁺ reactivo en la [[vacuola digestiva|real-plas-digestive]] · Entradas: [[Fe³⁺-protoporfirina IX|real-plas-heme]] libre procedente de la proteólisis de [[hemoglobina|real-plas-hemoglobin]], gotas lipídicas neutras y proteína HDP · Interior: Dímeros recíprocos hierro–carboxilato (coordinación Fe–O propionato) empaquetados por puentes de hidrógeno en cristales triclínicos de β-hematina (~200–500 nm) · Salida: Pigmento inerte liberado al romperse el eritrocito (fiebre palúdica) y diana central de las quinolinas.',
      scientific:
        'Pigmento malárico paramagnético biomineralizado (β-hematina; cristales triclínicos prismáticos de ~200–500 nm) acumulado en la [[vacuola digestiva|real-plas-digestive]] de [[Plasmodium falciparum|real-plasmodium]]. Cada dímero coordina recíprocamente el [[Fe³⁺|atom-fe]] central de un [[hemo|real-plas-heme]] con el oxígeno carboxilato propionato del vecino (enlace axial Fe–O ~1,89 Å), apilándose en láminas mediante puentes de hidrógeno en interfases lipídicas neutras. Las 4-aminoquinolinas (cloroquina, amodiaquina) recubren las caras cristalinas por apilamiento π–π e inducen toxicidad letal por hemo libre.'
    }
  },

  'real-plas-hemoglobin': {
    en: {
      simple:
        'Hemoglobin is the four-part oxygen-carrying [[protein|protein]] that fills human red blood cells. Inside an infected erythrocyte, [[Plasmodium|real-plasmodium]] consumes most of this protein to harvest [[amino acids|amino-acid]] for its own growth.',
      story:
        'Packing nearly 270 million tetramers into every healthy red blood cell, human hemoglobin folds two alpha and two beta [[polypeptide|polypeptide]] chains around four oxygen-binding [[heme|real-plas-heme]] pockets. For an invading [[Plasmodium|real-plasmodium]] parasite sealed inside its parasitophorous vacuole, that concentrated protein reservoir is both pantry and hazard: digesting hemoglobin inside the [[digestive vacuole|real-plas-digestive]] frees abundant [[amino acids|amino-acid]] (all except isoleucine) and clears physical space for parasite division, while dumping four toxic [[iron|atom-fe]]-centered heme rings per molecule that must be crystallized into [[hemozoin|real-plas-hemozoin]].',
      blueprint:
        'Role: Host erythrocyte tetrameric O2-transport protein hijacked as primary amino-acid food source by [[Plasmodium|real-plasmodium]]; Inputs: Endocytosed from host red blood cell cytosol into the acidic [[digestive vacuole|real-plas-digestive]] via parasite cytostomes; Inside: ~64.5 kDa alpha2beta2 globin tetramer (PDB 1GZX) of eight-[[alpha-helix|alpha-helix]] myoglobin folds cradling four [[Fe-heme|real-plas-heme]] groups; Outputs: Hydrolyzed globin [[amino acids|amino-acid]] fueling parasite [[80S ribosomes|ribosome]] plus liberated toxic [[heme|real-plas-heme]] funneled into [[hemozoin|real-plas-hemozoin]].',
      scientific:
        'Adult human hemoglobin A (HbA, alpha2beta2 heterotetramer, ~64.5 kDa, ~5.5 nm globular diameter; oxy-state X-ray structure PDB 1GZX) concentrated at ~5 mM (~330 mg/mL, ~270 million copies per erythrocyte). Each globin subunit folds into an [[alpha-helical|alpha-helix]] bundle coordinating one non-covalent [[Fe2+-protoporphyrin IX|real-plas-heme]] via proximal HisF8. Intraerythrocytic [[Plasmodium falciparum|real-plasmodium]] endocytoses ~60-80% of host HbA into its [[digestive vacuole|real-plas-digestive]], proteolyzing globins for [[amino acids|amino-acid]] (necessitating plasma import of isoleucine, absent from HbA) while releasing four [[heme|real-plas-heme]] equivalents per tetramer.'
    },
    es: {
      simple:
        'La hemoglobina es la [[proteína|protein]] de cuatro subunidades que transporta oxígeno dentro de los glóbulos rojos humanos. En un eritrocito infectado, [[Plasmodium|real-plasmodium]] consume gran parte de ella para obtener [[aminoácidos|amino-acid]] y multiplicarse.',
      story:
        'Con casi 270 millones de tetrámeros empaquetados en cada eritrocito sano, la hemoglobina humana pliega dos cadenas [[polipeptídicas|polypeptide]] alfa y dos beta alrededor de cuatro bolsillos de [[hemo|real-plas-heme]] captadores de oxígeno. Para [[Plasmodium|real-plasmodium]], encerrado en su vacuola parasitófora, esa reserva es a la vez despensa y veneno: digerirla en la [[vacuola digestiva|real-plas-digestive]] aporta abundantes [[aminoácidos|amino-acid]] (todos salvo isoleucina) y despeja espacio para crecer, pero libera cuatro anillos tóxicos con [[hierro|atom-fe]] por molécula que deben cristalizarse en [[hemozoína|real-plas-hemozoin]].',
      blueprint:
        'Rol: Proteína tetramérica eritrocitaria de transporte de O₂ explotada como fuente principal de aminoácidos por [[Plasmodium|real-plasmodium]] · Entradas: Endocitada desde el citosol del glóbulo rojo hacia la [[vacuola digestiva|real-plas-digestive]] por citostomas parasitarios · Interior: Tetrámero α₂β₂ de ~64,5 kDa (PDB 1GZX) con pliegues de ocho [[hélices α|alpha-helix]] sosteniendo cuatro grupos [[hemo|real-plas-heme]] · Salida: [[Aminoácidos|amino-acid]] para los [[ribosomas 80S|ribosome]] del parásito y [[hemo|real-plas-heme]] libre hacia [[hemozoína|real-plas-hemozoin]].',
      scientific:
        'Hemoglobina adulta humana A (HbA, heterotetrámero α₂β₂, ~64,5 kDa, ~5,5 nm de diámetro; estructura cristalográfica PDB 1GZX) concentrada a ~5 mM (~330 mg/mL, ~270 millones de copias por eritrocito). Cada globina adopta un haz de [[hélices α|alpha-helix]] que coordina una [[Fe²⁺-protoporfirina IX|real-plas-heme]] mediante HisF8 proximal. [[Plasmodium falciparum|real-plasmodium]] endocita ~60–80 % de la HbA hacia su [[vacuola digestiva|real-plas-digestive]], hidrolizando la globina para obtener [[aminoácidos|amino-acid]] (excepto isoleucina, ausente en HbA) y liberando cuatro moléculas de [[hemo|real-plas-heme]] por tetrámero.'
    }
  },

  'real-plas-heme': {
    en: {
      simple:
        'Heme is a flat, ring-shaped molecule holding a single [[iron atom|atom-fe]] right in its bullseye. Safe while tucked inside [[hemoglobin|real-plas-hemoglobin]], free heme turns chemically destructive once digested loose inside [[Plasmodium|real-plasmodium]].',
      story:
        'Built from four [[nitrogen|atom-n]]-bearing pyrrole rings stitched by [[carbon|atom-c]] bridges around one central [[iron atom|atom-fe]], heme is the red cofactor that lets human [[hemoglobin|real-plas-hemoglobin]] catch and release oxygen in your bloodstream. Inside the acidic [[digestive vacuole|real-plas-digestive]] of [[Plasmodium|real-plasmodium]], however, stripping away its protective globin coat oxidizes iron to reactive Fe3+. Unbound heme slips into lipid membranes and triggers oxidative damage - which is why the parasite races to stack it into [[hemozoin|real-plas-hemozoin]] and why artemisinin uses free heme iron to detonate right inside the parasite.',
      blueprint:
        'Role: Planar iron-porphyrin prosthetic group turning cytotoxic upon release from host [[hemoglobin|real-plas-hemoglobin]]; Inputs: Cleaved from human [[hemoglobin|real-plas-hemoglobin]] (PDB 1GZX HEM ligand) by acidic proteases inside the [[digestive vacuole|real-plas-digestive]]; Inside: ~1.0 nm C34H32FeN4O4 protoporphyrin IX macrocycle coordinating central [[Fe2+/Fe3+|atom-fe]] via four equatorial pyrrole [[nitrogens|atom-n]] and bearing two propionate tails; Outputs: Reactive oxygen species and bilayer peroxidation if free, or reciprocal Fe-O dimers packed into [[hemozoin|real-plas-hemozoin]].',
      scientific:
        'Iron-protoporphyrin IX cofactor (heme b; C34H32FeN4O4, 616.5 Da, ~1.0 nm planar macrocycle; HEM ligand in PDB 1GZX) coordinating one central [[iron atom|atom-fe]] across four equatorial pyrrole [[nitrogens|atom-n]] with two flexible propionate side chains. Globin proteolysis in the pH ~5.2 [[digestive vacuole|real-plas-digestive]] of [[Plasmodium falciparum|real-plasmodium]] releases amphiphilic [[Fe2+|atom-fe]]-heme that rapidly auto-oxidizes to cytotoxic Fe3+-hematin, disrupting [[phospholipid|phospholipid]] bilayers and driving lipid peroxidation unless biomineralized into [[hemozoin|real-plas-hemozoin]]; reduced heme Fe2+ also cleaves artemisinin endoperoxide bridges into carbon-centered radicals.'
    },
    es: {
      simple:
        'El hemo es una molécula plana en forma de anillo que sostiene un único [[átomo de hierro|atom-fe]] en su centro exacto. Seguro dentro de la [[hemoglobina|real-plas-hemoglobin]], el hemo libre se vuelve químicamente destructivo al quedar suelto dentro de [[Plasmodium|real-plasmodium]].',
      story:
        'Formado por cuatro anillos pirrólicos con [[nitrógeno|atom-n]] unidos por puentes de [[carbono|atom-c]] en torno a un [[átomo de hierro|atom-fe]] central, el hemo es el cofactor rojo que permite a la [[hemoglobina|real-plas-hemoglobin]] atrapar y ceder oxígeno. Pero dentro de la [[vacuola digestiva|real-plas-digestive]] ácida de [[Plasmodium|real-plasmodium]], perder su funda de globina oxida el hierro a Fe³⁺ reactivo. Libre, el hemo se incrusta en las membranas y genera daño oxidativo, obligando al parásito a apilarlo en [[hemozoína|real-plas-hemozoin]] mientras la artemisinina aprovecha ese mismo hierro para activarse letalmente.',
      blueprint:
        'Rol: Grupo prostético plano hierro–porfirina que se vuelve citotóxico al liberarse de la [[hemoglobina|real-plas-hemoglobin]] · Entradas: Escindido de la [[hemoglobina|real-plas-hemoglobin]] humana (ligando HEM en PDB 1GZX) por proteasas ácidas en la [[vacuola digestiva|real-plas-digestive]] · Interior: Macrociclo protoporfirina IX de ~1,0 nm (C₃₄H₃₂FeN₄O₄) coordinando [[Fe²⁺/Fe³⁺|atom-fe]] con cuatro [[nitrógenos|atom-n]] pirrólicos y dos colas propionato · Salida: Peroxidación lipídica si queda libre o dímeros Fe–O empaquetados en [[hemozoína|real-plas-hemozoin]].',
      scientific:
        'Cofactor hierro–protoporfirina IX (hemo b; C₃₄H₃₂FeN₄O₄, 616,5 Da, macrociclo plano de ~1,0 nm; ligando HEM en PDB 1GZX) que coordina un [[átomo de hierro|atom-fe]] central mediante cuatro [[nitrógenos|atom-n]] pirrólicos ecuatoriales y porta dos cadenas laterales propionato. La proteólisis en la [[vacuola digestiva|real-plas-digestive]] (pH ~5,2) de [[Plasmodium falciparum|real-plasmodium]] libera [[Fe²⁺|atom-fe]]-hemo que se autooxida a Fe³⁺-hematina citotóxica sobre bicapas de [[fosfolípidos|phospholipid]] si no cristaliza en [[hemozoína|real-plas-hemozoin]]; además, el Fe²⁺ del hemo activa el puente endoperóxido de la artemisinina.'
    }
  },

  'atom-fe': {
    en: {
      simple:
        'Iron is a metallic transition element that flips easily between two electrical charges (Fe2+ and Fe3+). Life depends on that redox switch to carry oxygen in [[hemoglobin|real-plas-hemoglobin]], move electrons in [[mitochondria|mitochondrion]], and build [[hemozoin|real-plas-hemozoin]] crystals inside malaria parasites.',
      story:
        'Zoom down to 0.13 nanometers at the heart of [[heme|real-plas-heme]] and you meet a single iron atom governing life and death for both human host and malaria parasite. Because its partially filled d-electrons switch effortlessly between Fe2+ and Fe3+, iron binds [[oxygen|atom-o]] reversibly inside blood [[hemoglobin|real-plas-hemoglobin]] and ferries respiratory electrons across [[mitochondrial|mitochondrion]] cytochromes. Yet inside the acidic [[digestive vacuole|real-plas-digestive]] of [[Plasmodium|real-plasmodium]], exposed Fe3+ triggers destructive free radicals unless locked into reciprocal iron-oxygen propionate bonds inside inert [[hemozoin|real-plas-hemozoin]] crystals.',
      blueprint:
        'Role: Redox-active transition-metal center (Z = 26) mediating O2 transport, electron transfer, and hemozoin dimerization; Inputs: Dietary/transferrin iron incorporated into human [[heme|real-plas-heme]], Fe-S clusters, and cytochromes; Inside: 3d6 (Fe2+) / 3d5 (Fe3+) coordination hub bound to four equatorial porphyrin [[nitrogens|atom-n]] plus axial His or carboxylate [[oxygen|atom-o]] (~1.89 angstroms); Outputs: Reversible O2 carriage in [[hemoglobin|real-plas-hemoglobin]], ETC electron flow in [[mitochondria|mitochondrion]], and Fe-O crosslinking in [[hemozoin|real-plas-hemozoin]].',
      scientific:
        'First-row d-block transition metal Iron (Fe, Z = 26; standard atomic weight 55.845 Da; 56Fe principal isotope; electron configuration [Ar] 3d6 4s2; covalent radius ~1.26 angstroms, high-spin octahedral Fe3+ ionic radius ~0.645 angstroms). Reversible Fe2+/Fe3+ redox cycling underpins reversible [[O2|atom-o]] binding in [[hemoglobin|real-plas-hemoglobin]] [[heme|real-plas-heme]], iron-sulfur clusters and cytochromes in [[mitochondria|mitochondrion]], and ribonucleotide reductase for [[DNA|dna]] synthesis. In [[Plasmodium falciparum|real-plasmodium]], unsequestered heme Fe catalyzes Fenton-type oxidative stress unless coordinated into reciprocal Fe-O propionate bonds (~1.89 angstroms) within [[hemozoin|real-plas-hemozoin]].'
    },
    es: {
      simple:
        'El hierro es un metal de transición que cambia con facilidad entre dos estados eléctricos (Fe²⁺ y Fe³⁺). La vida aprovecha ese interruptor redox para transportar oxígeno en la [[hemoglobina|real-plas-hemoglobin]], mover electrones en las [[mitocondrias|mitochondrion]] y enlazar cristales de [[hemozoína|real-plas-hemozoin]].',
      story:
        'Al descender hasta 0,13 nanómetros en el corazón del [[hemo|real-plas-heme]] aparece un único átomo de hierro que decide la vida y la muerte tanto del huésped humano como del parásito de la malaria. Gracias a sus electrones d que alternan entre Fe²⁺ y Fe³⁺, el hierro sujeta [[oxígeno|atom-o]] de manera reversible en la [[hemoglobina|real-plas-hemoglobin]] y transporta electrones en los citocromos [[mitocondriales|mitochondrion]]. Sin embargo, en la [[vacuola digestiva|real-plas-digestive]] de [[Plasmodium|real-plasmodium]], el Fe³⁺ expuesto genera radicales dañinos salvo que quede sellado por enlaces hierro–oxígeno dentro de la [[hemozoína|real-plas-hemozoin]].',
      blueprint:
        'Rol: Centro metálico de transición redox-activo (Z = 26) para transporte de O₂, cadena respiratoria y dimerización de hemozoína · Entradas: Hierro captado vía transferrina e integrado en [[hemo|real-plas-heme]], centros Fe–S y citocromos · Interior: Núcleo 3d⁶ (Fe²⁺) / 3d⁵ (Fe³⁺) coordinado por cuatro [[nitrógenos|atom-n]] porfirínicos ecuatoriales más un ligando axial de His u [[oxígeno|atom-o]] carboxilato (~1,89 Å) · Salida: Transporte de O₂ en [[hemoglobina|real-plas-hemoglobin]], flujo electrónico [[mitocondrial|mitochondrion]] y enlaces Fe–O en [[hemozoína|real-plas-hemozoin]].',
      scientific:
        'Metal de transición del bloque d Hierro (Fe, Z = 26; masa atómica estándar 55,845 Da; isótopo mayoritario ⁵⁶Fe; configuración [Ar] 3d⁶ 4s²; radio covalente ~1,26 Å, radio iónico Fe³⁺ octaédrico de alto espín ~0,645 Å). Su par redox reversible Fe²⁺/Fe³⁺ sustenta la unión de [[O₂|atom-o]] en el [[hemo|real-plas-heme]] de la [[hemoglobina|real-plas-hemoglobin]], los centros hierro–azufre y citocromos [[mitocondriales|mitochondrion]] y la ribonucleótido reductasa del [[ADN|dna]]; en [[Plasmodium falciparum|real-plasmodium]], el Fe³⁺ libre cataliza estrés oxidativo tipo Fenton hasta ser coordinado en enlaces axiales Fe–O propionato (~1,89 Å) de la [[hemozoína|real-plas-hemozoin]].'
    }
  }
};

export const PROTISTS_PART_LENSES: PagePartLensMap = {
  'paramecium_realistic.html': {
    pellicle: {
      en: {
        subtitle: 'The Armored Alveolar Cortical Pellicle',
        simple:
          'Wrapping [[Paramecium|real-paramecium]] in a flexible quilted suit, the pellicle stacks flattened membrane sacs called alveoli directly beneath the outer [[plasma membrane|plasma-membrane]] to hold the slipper shape while still flexing past obstacles.',
        story:
          'Unlike rigid [[plant|real-plant]] or [[fungal|real-fungal]] cell walls that freeze a cell in place, [[Paramecium|real-paramecium]] needs a streamlined hull that bends during tight turns yet anchors thousands of beating [[cilia|real-para-cilia]]. Beneath its continuous [[plasma membrane|plasma-membrane]], flattened calcium-storing sacs called cortical alveoli tile the entire cortex over a fibrous protein epiplasm. Remarkably, these exact alveolar sacs unite free-living ciliates with the malaria parasite [[Plasmodium|real-plasmodium]], where the same cortical layer forms the inner membrane complex.',
        blueprint: {
          role: 'Flexible hexagonal-quilted cortical armor giving [[Paramecium|real-paramecium]] streamlined shape and ciliary anchoring',
          arrivesFrom: 'Assembled from outer [[plasma membrane|plasma-membrane]] [[phospholipids|phospholipid]], cortical alveolar vesicles, and epiplasm [[proteins|protein]]',
          inside: 'Three-membrane cortical sandwich (~100-300 nm): outer bilayer over flattened Ca2+-storing alveoli and dense epiplasm layer',
          deliversTo: 'Anchors ciliary kinetosomes and defensive trichocysts while keeping the cell elastic during fast swimming',
          loop: 'Alveolar Ca2+ release rapidly triggers trichocyst firing, while homologous alveoli form the IMC in [[Plasmodium|real-plasmodium]]'
        },
        scientific:
          'Three-membrane cortical pellicle (~100-300 nm overall thickness) defining Supergroup Alveolata in [[Paramecium caudatum|real-paramecium]]. Comprises the continuous outer [[plasma membrane|plasma-membrane]] tightly apposed to a tessellated mosaic of flattened cortical alveoli (specialized sub-plasmalemmal Ca2+ stores homologous to the [[Plasmodium|real-plasmodium]] inner membrane complex) braced internally by a fibrous epiplasm of epiplasmin proteins arranged into polygonal cortical units housing one or two cilia and docked trichocysts.',
        from: [
          { nodeId: 'phospholipid', label: 'Cortical Bilayers', cargo: 'Outer & alveolar membranes' },
          { nodeId: 'ribosome', label: 'Cytosolic 80S Ribosomes', cargo: 'Epiplasmin structural mesh' }
        ],
        to: [
          { nodeId: 'real-para-cilia', label: 'Motile 9+2 Cilia', cargo: 'Anchored longitudinal rows' },
          { nodeId: 'real-plasmodium', label: 'Plasmodium IMC', cargo: 'Shared alveolate homology' }
        ]
      },
      es: {
        subtitle: 'La película cortical alveolar flexible',
        simple:
          'Revestimiento acolchado y elástico de [[Paramecium|real-paramecium]], la película apila sacos membranosos aplanados llamados alvéolos bajo la [[membrana plasmática|plasma-membrane]] para conservar la silueta hidrodinámica sin perder flexibilidad.',
        story:
          'A diferencia de las paredes rígidas de [[plantas|real-plant]] u [[hongos|real-fungal]] que inmovilizan a la célula, [[Paramecium|real-paramecium]] necesita un casco esbelto que se curve al girar y fije miles de [[cilios|real-para-cilia]] en movimiento. Bajo su [[membrana plasmática|plasma-membrane]] continua, sacos aplanados ricos en calcio llamados alvéolos corticales tapizan el córtex sobre un epiplasma fibroso. Esa misma arquitectura alveolar emparenta a los ciliados libres con el parásito [[Plasmodium|real-plasmodium]], donde forma el complejo de membrana interna.',
        blueprint: {
          role: 'Armadura cortical flexible en mosaico hexagonal que da forma aerodinámica y anclaje ciliar a [[Paramecium|real-paramecium]]',
          arrivesFrom: 'Ensamblada con [[fosfolípidos|phospholipid]] de la [[membrana plasmática|plasma-membrane]], sacos alveolares y [[proteínas|protein]] del epiplasma',
          inside: 'Sándwich cortical de tres membranas (~100–300 nm): bicapa externa, alvéolos aplanados con Ca²⁺ y lámina epiplasmática',
          deliversTo: 'Ancla los cinetosomas ciliares y los tricocistos defensivos manteniendo la elasticidad durante la natación',
          loop: 'El Ca²⁺ alveolar dispara los tricocistos al instante; los mismos alvéolos forman el IMC en [[Plasmodium|real-plasmodium]]'
        },
        scientific:
          'Película cortical trimembranosa (~100–300 nm de espesor) diagnóstica del supergrupo Alveolata en [[Paramecium caudatum|real-paramecium]]. Combina la [[membrana plasmática|plasma-membrane]] continua con un mosaico de alvéolos corticales aplanados (reservorios submembranosos de Ca²⁺ homólogos al complejo de membrana interna de [[Plasmodium|real-plasmodium]]) apoyados sobre un epiplasma de epiplasminas organizado en unidades poligonales con uno o dos cilios y tricocistos acoplados.',
        from: [
          { nodeId: 'phospholipid', label: 'Bicapas corticales', cargo: 'Membrana externa y alvéolos' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S citosólicos', cargo: 'Malla de epiplasminas' }
        ],
        to: [
          { nodeId: 'real-para-cilia', label: 'Cilios móviles 9+2', cargo: 'Hileras ancladas (cinetias)' },
          { nodeId: 'real-plasmodium', label: 'IMC de Plasmodium', cargo: 'Homología alveolada' }
        ]
      }
    },

    cilia: {
      en: {
        subtitle: 'Metachronal Motile Cilia Covering the Hull',
        simple:
          'Roughly four thousand beating [[cilia|real-para-cilia]] line the outside of [[Paramecium|real-paramecium]], rippling in traveling waves that drive the cell rapidly through pond water and flip direction immediately after a bump.',
        story:
          'Rather than rowing all at once and stalling between strokes, adjacent longitudinal rows of [[cilia|cilium]] fire in a staggered wave that races from front to back across the pellicle. Inside each 250-nanometer shaft, [[axonemal dynein|real-para-dynein]] bends the [[9+2 microtubule core|real-para-axoneme]] through a stiff power stroke and a tucked recovery glide. Whenever the anterior end bumps an obstacle, voltage-gated calcium channels open along the ciliary membrane and invert the wave, reversing [[Paramecium|real-paramecium]] neatly onto a clear heading.',
        blueprint: {
          role: 'Surface propulsion and hydrodynamic steering array of ~3,000-5,000 motile [[9+2 cilia|real-para-cilia]]',
          arrivesFrom: 'Nucleated from cortical kinetosomes and supplied with ATP by sub-pellicular [[mitochondria|mitochondrion]]',
          inside: 'Membrane-sheathed ~10-12 micrometer [[9+2 axonemes|real-para-axoneme]] stepping via [[axonemal dynein|real-para-dynein]] at 10-40 Hz',
          deliversTo: 'Propels [[Paramecium|real-paramecium]] at ~1-2 mm/s in a rotating helix and feeds bacteria into the [[oral groove|real-para-feeding]]',
          loop: 'Anterior mechanoreception opens ciliary Ca2+ channels to transiently invert stroke polarity during avoiding reactions'
        },
        scientific:
          'Surface coat of ~3,000-5,000 motile [[9+2 cilia|real-para-cilia]] (~250 nm diameter x ~10-12 micrometers length) arranged in longitudinal kineties across [[Paramecium caudatum|real-paramecium]]. Hydrodynamic coupling coordinates beat phase into traveling metachronal waves (~10-40 Hz) yielding ~1-2 mm/s helical propulsion. Ciliary membrane voltage-gated Ca2+ channels convert mechanical depolarization into rapid intraciliary Ca2+ rises (>1 micromolar) that reorient [[axonemal dynein|real-para-dynein]] beat direction.',
        from: [
          { nodeId: 'real-para-axoneme', label: '9+2 Axoneme Core', cargo: 'Microtubule bending scaffold' },
          { nodeId: 'mitochondrion', label: 'Sub-Cortical Mitochondria', cargo: 'Local ATP supply' }
        ],
        to: [
          { nodeId: 'real-paramecium', label: 'Paramecium Propulsion', cargo: 'Metachronal swimming thrust' },
          { nodeId: 'real-para-feeding', label: 'Oral Groove Current', cargo: 'Swept bacterial prey' }
        ]
      },
      es: {
        subtitle: 'Cilios móviles en ondas metácronas',
        simple:
          'Alrededor de cuatro mil [[cilios|real-para-cilia]] tapizan el exterior de [[Paramecium|real-paramecium]], ondulando en olas sincronizadas que impulsan a la célula con rapidez e invierten su marcha tras cualquier choque.',
        story:
          'En lugar de remar todos a la vez y frenarse entre brazadas, las filas longitudinales de [[cilios|cilium]] baten con un desfase regular que recorre la película de adelante hacia atrás. En cada tallo de 250 nanómetros, la [[dineína axonemal|real-para-dynein]] flexiona el [[axonema 9+2|real-para-axoneme]] alternando un golpe rígido efectivo y un retorno plegado. Al rozar un obstáculo con la proa, los canales de calcio de la membrana ciliar invierten el batido y permiten a [[Paramecium|real-paramecium]] retroceder y cambiar de dirección.',
        blueprint: {
          role: 'Sistema superficial de propulsión y dirección con ~3.000–5.000 [[cilios móviles 9+2|real-para-cilia]]',
          arrivesFrom: 'Nucleados en cinetosomas corticales y abastecidos con ATP por [[mitocondrias|mitochondrion]] subpeliculares',
          inside: '[[Axonemas 9+2|real-para-axoneme]] de ~10–12 µm envueltos en membrana batiendo a 10–40 Hz por [[dineína|real-para-dynein]]',
          deliversTo: 'Impulsa a [[Paramecium|real-paramecium]] a ~1–2 mm/s en hélice y dirige corrientes hacia el [[surco oral|real-para-feeding]]',
          loop: 'La mecanorrecepción anterior abre canales ciliares de Ca²⁺ para invertir temporalmente el sentido de batido'
        },
        scientific:
          'Revestimiento superficial de ~3.000–5.000 [[cilios móviles 9+2|real-para-cilia]] (~250 nm de diámetro × ~10–12 µm) alineados en cinetias longitudinales sobre [[Paramecium caudatum|real-paramecium]]. El acoplamiento hidrodinámico sincroniza el desfase en ondas metácronas (~10–40 Hz, ~1–2 mm/s en hélice); canales CaV de la membrana ciliar elevan el Ca²⁺ intraciliar (>1 µM) al chocar para invertir la dirección del batido de la [[dineína|real-para-dynein]].',
        from: [
          { nodeId: 'real-para-axoneme', label: 'Núcleo axonemal 9+2', cargo: 'Armazón microtubular flexible' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias subcorticales', cargo: 'Suministro local de ATP' }
        ],
        to: [
          { nodeId: 'real-paramecium', label: 'Propulsión de Paramecium', cargo: 'Empuje metácrono' },
          { nodeId: 'real-para-feeding', label: 'Corriente del surco oral', cargo: 'Arrastre de bacterias' }
        ]
      }
    },

    kinetosome: {
      en: {
        subtitle: '9x3 Basal Body Anchoring Each Cilium',
        simple:
          'Buried right below the base of every cilium, a kinetosome is a short cylinder of nine [[microtubule|microtubule]] triplets that roots the cilium into the cortex and aligns every row along the cell body.',
        story:
          'Thousands of [[cilia|real-para-cilia]] cannot beat in straight, coordinated waves unless every shaft is bolted down at the exact same angle. Each kinetosome - the ciliate counterpart to an animal basal body - assembles nine triplet blades of [[tubulin|tubulin]] just beneath the alveolar pellicle. Its A- and B-tubules grow straight outward into the [[9+2 axoneme|real-para-axoneme]], while striated kinetodesmal fibers and microtubule ribbons tie neighboring kinetosomes into polarized rows that duplicate faithfully before cell division.',
        blueprint: {
          role: 'Cortical 9x3 microtubule basal body templating ciliary assembly and orienting beat polarity',
          arrivesFrom: 'Duplicated adjacently to existing parent kinetosomes using cytosolic [[tubulin|tubulin]] and centrin/SAS-6 cartwheel scaffolds',
          inside: 'Nine triplet [[microtubule|microtubule]] blades (A/B/C tubules, ~250 nm wide x ~450 nm long) tied to kinetodesmal rootlets',
          deliversTo: 'Extends A- and B-tubules directly into the [[9+2 axoneme|real-para-axoneme]] and anchors ciliary shear into the pellicle',
          loop: 'Cortical inheritance templates new kinetosomes in matching orientation before binary fission splits the cell'
        },
        scientific:
          'Ciliary basal body (kinetosome; ~250 nm outer diameter x ~400-500 nm length) embedded beneath each cortical unit of [[Paramecium caudatum|real-paramecium]]. Built as a 9-fold symmetric cylinder of [[microtubule|microtubule]] triplets (A-, B-, and C-tubules of [[alpha/beta-tubulin|tubulin]], nucleated via SAS-6 cartwheel symmetry) with an apical transition zone gating ciliary membrane entry. Extends A/B tubules into the [[9+2 axoneme|real-para-axoneme]] while striated kinetodesmal fibers and postciliary/transverse microtubule ribbons transmit cortical torque.',
        from: [
          { nodeId: 'tubulin', label: 'Alpha/Beta-Tubulin Pool', cargo: 'Triplet protofilament bricks' },
          { nodeId: 'ribosome', label: 'Cytosolic 80S Ribosomes', cargo: 'SAS-6, centrin & rootlets' }
        ],
        to: [
          { nodeId: 'real-para-axoneme', label: '9+2 Ciliary Axoneme', cargo: 'Continuous A/B doublet base' },
          { nodeId: 'real-para-cilia', label: 'Aligned Ciliary Rows', cargo: 'Polarized beat orientation' }
        ]
      },
      es: {
        subtitle: 'Cuerpo basal 9×3 que ancla cada cilio',
        simple:
          'Enterrado justo en la raíz de cada cilio, el cinetosoma es un cilindro corto de nueve tripletes de [[microtúbulos|microtubule]] que fija el cilio en el córtex y alinea todas las hileras a lo largo de la célula.',
        story:
          'Miles de [[cilios|real-para-cilia]] no podrían batir en ondas limpias si cada eje no estuviera anclado con el mismo ángulo preciso. Cada cinetosoma —equivalente ciliado del cuerpo basal animal— reúne nueve láminas de tripletes de [[tubulina|tubulin]] justo bajo los alvéolos corticales. Sus túbulos A y B se prolongan hacia fuera formando el [[axonema 9+2|real-para-axoneme]], mientras fibras estriadas cinetodesmales y cintas microtubulares enlazan los cinetosomas vecinos en filas polarizadas que se duplican antes de cada división.',
        blueprint: {
          role: 'Cuerpo basal cortical de tripletes 9×3 que nuclea el cilio y orienta la polaridad del batido',
          arrivesFrom: 'Duplicado junto a cinetosomas preexistentes con [[tubulina|tubulin]] citosólica y andamiajes SAS-6/centrina',
          inside: 'Nueve tripletes de [[microtúbulos|microtubule]] (túbulos A/B/C, ~250 × 450 nm) enlazados a raicillas cinetodesmales',
          deliversTo: 'Prolonga los túbulos A y B hacia el [[axonema 9+2|real-para-axoneme]] y absorbe el par mecánico en la película',
          loop: 'La herencia cortical copia la orientación de cada nuevo cinetosoma antes de la fisión binaria'
        },
        scientific:
          'Cuerpo basal ciliar (cinetosoma; ~250 nm de diámetro × ~400–500 nm de longitud) anclado bajo cada unidad cortical de [[Paramecium caudatum|real-paramecium]]. Consta de un cilindro de simetría 9 con tripletes de [[microtúbulos|microtubule]] (A, B y C de [[αβ-tubulina|tubulin]], nucleados por rueda SAS-6) y zona de transición reguladora. Sus túbulos A y B continúan en el [[axonema 9+2|real-para-axoneme]], mientras fibras cinetodesmales y cintas postciliares distribuyen la tracción cortical.',
        from: [
          { nodeId: 'tubulin', label: 'Reserva de αβ-tubulina', cargo: 'Ladrillos de tripletes' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S citosólicos', cargo: 'SAS-6, centrina y raicillas' }
        ],
        to: [
          { nodeId: 'real-para-axoneme', label: 'Axonema ciliar 9+2', cargo: 'Continuación de dobletes A/B' },
          { nodeId: 'real-para-cilia', label: 'Hileras ciliares', cargo: 'Polaridad de batido alineada' }
        ]
      }
    },

    trichocyst: {
      en: {
        subtitle: 'Defensive Rapid-Fire Protein Harpoons',
        simple:
          'Docked upright beneath the pellicle between ciliary bases, trichocysts are tiny spring-loaded protein capsules that fire stiff needle filaments outward in milliseconds to ward off predators.',
        story:
          'Freshwater ponds hold hungry ciliate hunters such as Didinium that try to grab [[Paramecium|real-paramecium]] on contact. Tucked neatly along the pellicle ridges sit hundreds of 3-micrometer spindle-shaped secretory vesicles packed with tightly folded matrix [[proteins|protein]]. When predator contact fuses the trichocyst tip with the [[plasma membrane|plasma-membrane]], incoming calcium triggers an explosive crystalline expansion that shoots a banded protein shaft up to 30 micrometers outward, pushing the attacker back and recoiling the cell out of reach.',
        blueprint: {
          role: 'Cortical defensive secretory extrusomes providing rapid mechanical predator deterrence',
          arrivesFrom: 'Trichocyst matrix [[proteins|protein]] (TMPs) translated on [[80S ribosomes|ribosome]] and packaged into regulated secretory [[vesicles|vesicle]]',
          inside: 'Docked ~3-4 micrometer carrot-shaped tip-and-body capsule holding condensed paracrystalline TMP lattice beneath alveolar sacs',
          deliversTo: 'Calcium-triggered exocytosis expands the lattice ~8-10x within milliseconds into rigid ~25-40 micrometer extracellular needles',
          loop: 'After firing, newly synthesized secretory vesicles migrate back to vacant pellicle docking rosettes to reload defenses'
        },
        scientific:
          'Regulated cortical secretory organelles (extrusomes; ~3-4 micrometers resting length, ~1,000+ per cell) docked at dedicated pellicle membrane rosettes between kinetosomes in [[Paramecium caudatum|real-paramecium]]. Filled with proteolytically processed trichocyst matrix proteins (TMPs) packed in a metastable paracrystalline array. Regulated membrane fusion exposes the matrix to extracellular Ca2+, driving an ATP-independent conformational phase transition (~8-10x axial elongation in milliseconds to ~25-40 micrometers striated shafts) that physically deters predatory ciliates.',
        from: [
          { nodeId: 'ribosome', label: '80S Ribosomes & Secretory Route', cargo: 'Precursor TMP polypeptides' },
          { nodeId: 'vesicle', label: 'Secretory Vesicles', cargo: 'Cortical docking transport' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Pellicle Docking Rosette', cargo: 'Ca2+-gated exocytosis' },
          { nodeId: 'real-paramecium', label: 'Predator Defense', cargo: 'Rapid mechanical recoil' }
        ]
      },
      es: {
        subtitle: 'Arpones proteicos defensivos de disparo rápido',
        simple:
          'Acoplados bajo la película entre las bases ciliares, los tricocistos son cápsulas proteicas listas para disparar filamentos rígidos hacia fuera en milisegundos y repeler depredadores.',
        story:
          'En el agua dulce acechan ciliados depredadores como Didinium que intentan atrapar a [[Paramecium|real-paramecium]] al primer roce. Alineados bajo los bordes de la película esperan cientos de vesículas fusiformes de 3 micrómetros repletas de [[proteínas|protein]] matriciales compactadas. Cuando un ataque fusiona la punta del tricocisto con la [[membrana plasmática|plasma-membrane]], la entrada de calcio provoca una expansión cristalina instantánea que lanza un dardo estriado de hasta 30 micrómetros, alejando al agresor e impulsando la huida celular.',
        blueprint: {
          role: 'Extrusomas secretores corticales defensivos de disuasión mecánica instantánea',
          arrivesFrom: '[[Proteínas|protein]] matriciales de tricocisto (TMP) traducidas en [[ribosomas 80S|ribosome]] y empaquetadas en [[vesículas|vesicle]]',
          inside: 'Cápsula acoplada de ~3–4 µm con punta y cuerpo llenos de red paracristalina TMP bajo los alvéolos corticales',
          deliversTo: 'La exocitosis inducida por Ca²⁺ expande la red ~8–10 veces en milisegundos formando agujas rígidas de ~25–40 µm',
          loop: 'Tras el disparo, nuevas vesículas secretoras migran a las rosetas vacías de la película para recargar la defensa'
        },
        scientific:
          'Orgánulos secretores regulados corticales (extrusomas; ~3–4 µm en reposo, >1.000 por célula) anclados en rosetas específicas de la película entre cinetosomas en [[Paramecium caudatum|real-paramecium]]. Alojan proteínas matriciales TMP procesadas en estado paracristalino metaestable; la fusión exocítica admite Ca²⁺ extracelular e induce una transición conformacional independiente de ATP (~8–10× de elongación en milisegundos hasta ejes estriados de ~25–40 µm) eficaz frente a depredadores.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S y vía secretora', cargo: 'Precursores proteicos TMP' },
          { nodeId: 'vesicle', label: 'Vesículas secretoras', cargo: 'Transporte hacia el córtex' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Roseta de anclaje', cargo: 'Exocitosis regulada por Ca²⁺' },
          { nodeId: 'real-paramecium', label: 'Defensa antipredador', cargo: 'Disuasión y retroceso rápido' }
        ]
      }
    },

    oral_groove: {
      en: {
        subtitle: 'The Ciliated Bacterial-Sweeping Funnel',
        simple:
          'Carved diagonally along the front belly of [[Paramecium|real-paramecium]], the oral groove is a ciliated trough whose sweeping currents pull suspended [[bacteria|real-bacterium]] straight down toward the cell mouth.',
        story:
          'Swimming past microscopic prey is useless unless [[Paramecium|real-paramecium]] can funnel food toward one capture point. Running obliquely down its ventral face sits a deep depression lined with tightly packed ciliary sheets called peniculi and a quadrulus. Their rhythmic sweeping creates a focused inflow vortex that filters [[bacteria|real-bacterium]] and suspended detritus out of passing pond [[water|water]] and concentrates them directly at the recessed [[cytostome|real-para-feeding]].',
        blueprint: {
          role: 'Ventral ciliated hydrodynamic intake funnel concentrating bacterial prey for phagocytosis',
          arrivesFrom: 'Ambient freshwater currents carrying suspended [[bacteria|real-bacterium]] and organic particles across the anterior cell surface',
          inside: 'Diagonal ~60-100 micrometer ciliated trough (peristome) lined with specialized multi-row peniculi and quadrulus [[cilia|real-para-cilia]]',
          deliversTo: 'Channels concentrated bacterial suspension directly into the recessed [[cytostome|real-para-feeding]] and cytopharynx',
          loop: 'Hydrodynamic sorting rejects oversized debris while feeding live bacteria continuously into budding food vacuoles'
        },
        scientific:
          'Ventral ciliated feeding depression (peristome / oral groove; ~60-100 micrometers axial length) sculpting the anterior half of [[Paramecium caudatum|real-paramecium]]. Lined by specialized oral polykinetids (two four-row peniculi plus a four-row quadrulus of coordinated [[9+2 cilia|real-para-cilia]]) generating directional laminar inflow (~100-300 micrometers/s) that sweeps ~0.5-2 micrometer [[bacterial|real-bacterium]] prey directly to the buccal cavity and [[cytostome|real-para-feeding]].',
        from: [
          { nodeId: 'real-bacterium', label: 'Freshwater Bacterial Prey', cargo: 'Suspended cells in pond water' },
          { nodeId: 'real-para-cilia', label: 'Oral Ciliary Sheets', cargo: 'Directional sweeping currents' }
        ],
        to: [
          { nodeId: 'real-para-feeding', label: 'Cytostome & Food Vacuoles', cargo: 'Concentrated prey stream' },
          { nodeId: 'vesicle', label: 'Nascent Phagosomes', cargo: 'Captured bacterial boluses' }
        ]
      },
      es: {
        subtitle: 'El embudo ciliado capturador de bacterias',
        simple:
          'Trazado en diagonal sobre la cara ventral anterior de [[Paramecium|real-paramecium]], el surco oral es un canal ciliado cuyas corrientes barren [[bacterias|real-bacterium]] suspendidas directo hacia la boca celular.',
        story:
          'Nadar junto a presas microscópicas serviría de poco si [[Paramecium|real-paramecium]] no concentrara el alimento en un punto preciso de entrada. Recorriendo su vientre se abre una depresión profunda revestida por bandas densas de cilios llamadas penículos y cuádrulo. Su batido continuo genera un remolino dirigido que separa [[bacterias|real-bacterium]] del [[agua|water]] circundante y las empuja sin pausa hasta el fondo del [[citostoma|real-para-feeding]].',
        blueprint: {
          role: 'Embudo hidrodinámico ventral ciliado que concentra presas bacterianas para fagocitosis',
          arrivesFrom: 'Corrientes de agua dulce portadoras de [[bacterias|real-bacterium]] y detritos orgánicos sobre la región anterior',
          inside: 'Surco diagonal de ~60–100 µm (peristoma) tapizado por penículos y cuádrulo de [[cilios|real-para-cilia]] especializados',
          deliversTo: 'Canaliza la suspensión concentrada de bacterias directamente hacia el [[citostoma|real-para-feeding]] y la citofaringe',
          loop: 'El filtrado hidrodinámico descarta partículas excesivas mientras alimenta de continuo las vacuolas nacientes'
        },
        scientific:
          'Depresión ventral ciliada de alimentación (peristoma o surco oral; ~60–100 µm de longitud) en la mitad anterior de [[Paramecium caudatum|real-paramecium]]. Revestida por policinetias orales especializadas (dos penículos y un cuádrulo de [[cilios 9+2|real-para-cilia]]) que producen una corriente laminar dirigida (~100–300 µm/s) para arrastrar [[bacterias|real-bacterium]] (~0,5–2 µm) hasta la cavidad bucal y el [[citostoma|real-para-feeding]].',
        from: [
          { nodeId: 'real-bacterium', label: 'Bacterias de agua dulce', cargo: 'Presas en suspensión' },
          { nodeId: 'real-para-cilia', label: 'Bandas ciliares orales', cargo: 'Corriente de arrastre dirigida' }
        ],
        to: [
          { nodeId: 'real-para-feeding', label: 'Citostoma y vacuolas', cargo: 'Flujo concentrado de presas' },
          { nodeId: 'vesicle', label: 'Fagosomas nacientes', cargo: 'Bolos bacterianos capturados' }
        ]
      }
    },

    cytostome: {
      en: {
        subtitle: 'The Fixed Cell Mouth & Phagosome Loader',
        simple:
          'Sitting at the bottom of the [[oral groove|real-para-feeding]], the cytostome is the dedicated cell mouth where [[Paramecium|real-paramecium]] packages incoming [[bacteria|real-bacterium]] into freshly pinched food vacuoles.',
        story:
          'Because the armored pellicle covers nearly the entire surface of [[Paramecium|real-paramecium]], phagocytosis cannot happen anywhere at random. Instead, the alveolar armor parts at this single recessed opening leading into a microtubule-ribbed throat called the cytopharynx. As bacteria pack against the naked membrane inside, recycled discoidal [[vesicles|vesicle]] fuse rapidly to supply extra surface area until cytoskeletal pinch-off releases a full food vacuole into cytoplasmic circulation.',
        blueprint: {
          role: 'Dedicated cortical endocytosis portal packaging swept bacteria into phagocytic food vacuoles',
          arrivesFrom: 'Swept [[bacterial|real-bacterium]] stream from the [[oral groove|real-para-feeding]] plus recycled discoidal [[vesicles|vesicle]] from the cytoproct',
          inside: '~5-8 micrometer alveolus-free membrane mouth opening into a [[microtubule|microtubule]]-ribboned cytopharynx',
          deliversTo: 'Pinches off newly filled ~5-15 micrometer food vacuoles onto internal [[cyclosis|real-para-feeding]] tracks',
          loop: 'Microtubule ribbons guide spent membrane vesicles back from the cytoproct to rebuild fresh food-vacuole membrane here'
        },
        scientific:
          'Fixed ventral endocytic aperture (cytostome, ~5-8 micrometers diameter) continuous with the [[microtubule|microtubule]]-reinforced cytopharynx at the base of the buccal cavity in [[Paramecium caudatum|real-paramecium]]. Devoid of cortical alveoli so flat discoidal recycling [[vesicles|vesicle]] arriving along cytopharyngeal ribbons can fuse rapidly, expanding the nascent phagosome membrane around packed [[bacteria|real-bacterium]] until actin- and dynamin-assisted scission releases a new [[food vacuole|real-para-feeding]].',
        from: [
          { nodeId: 'real-para-feeding', label: 'Oral Groove Funnel', cargo: 'Packed bacterial suspension' },
          { nodeId: 'vesicle', label: 'Discoidal Recycling Vesicles', cargo: 'Replacement phagosome lipid' }
        ],
        to: [
          { nodeId: 'real-para-feeding', label: 'Budding Food Vacuoles', cargo: 'Fresh 5-15 um phagosomes' },
          { nodeId: 'lysosome', label: 'Acid-Digestive Circuit', cargo: 'Bacterial prey for breakdown' }
        ]
      },
      es: {
        subtitle: 'La boca celular fija y cargadora de fagosomas',
        simple:
          'Situado al fondo del [[surco oral|real-para-feeding]], el citostoma es la boca celular dedicada donde [[Paramecium|real-paramecium]] empaqueta las [[bacterias|real-bacterium]] entrantes en vacuolas alimenticias recién cerradas.',
        story:
          'Como la película alveolar blinda casi toda la superficie de [[Paramecium|real-paramecium]], la fagocitosis no puede ocurrir en cualquier punto. En su lugar, la coraza se abre en este portal fijo que conduce a una garganta reforzada por microtúbulos llamada citofaringe. A medida que las bacterias llenan el bolsillo de membrana desnuda, [[vesículas|vesicle]] discoidales recicladas se fusionan para aportar lípido fresco hasta que la estrangulación libera una nueva vacuola alimenticia hacia la circulación interna.',
        blueprint: {
          role: 'Portal endocítico cortical fijo que empaqueta bacterias barridas en vacuolas alimenticias',
          arrivesFrom: 'Corriente de [[bacterias|real-bacterium]] del [[surco oral|real-para-feeding]] y [[vesículas|vesicle]] discoidales recicladas del citoprocto',
          inside: 'Abertura libre de alvéolos de ~5–8 µm que desemboca en la citofaringe armada con cintas de [[microtúbulos|microtubule]]',
          deliversTo: 'Libera vacuolas alimenticias de ~5–15 µm cargadas hacia las rutas internas de [[ciclosis|real-para-feeding]]',
          loop: 'Las cintas microtubulares devuelven membrana desde el citoprocto para fabricar aquí nuevas vacuolas'
        },
        scientific:
          'Abertura endocítica ventral fija (citostoma, ~5–8 µm de diámetro) continua con la citofaringe armada por cintas de [[microtúbulos|microtubule]] en la base de la cavidad bucal de [[Paramecium caudatum|real-paramecium]]. Carece de alvéolos corticales para permitir la rápida fusión de [[vesículas|vesicle]] discoidales recicladas y la formación de cada nueva [[vacuola alimenticia|real-para-feeding]] rellena de [[bacterias|real-bacterium]].',
        from: [
          { nodeId: 'real-para-feeding', label: 'Embudo del surco oral', cargo: 'Suspensión bacteriana densa' },
          { nodeId: 'vesicle', label: 'Vesículas discoidales', cargo: 'Lípidos reciclados de membrana' }
        ],
        to: [
          { nodeId: 'real-para-feeding', label: 'Vacuolas alimenticias', cargo: 'Fagosomas nuevos de 5–15 µm' },
          { nodeId: 'lysosome', label: 'Circuito ácido-digestivo', cargo: 'Bacterias para hidrólisis' }
        ]
      }
    },

    food_vacuole: {
      en: {
        subtitle: 'Circulating Acid-to-Enzyme Phagocytic Vacuoles',
        simple:
          'Pinched off at the cytostome, each [[food vacuole|real-para-feeding]] loops through the cytoplasm of [[Paramecium|real-paramecium]], plunging to strong acid to kill trapped [[bacteria|real-bacterium]] before enzymes dissolve them into usable nutrients.',
        story:
          'Once a fresh vacuole breaks loose from the cytopharynx, cytoplasmic streaming carries it on an orderly twenty-to-sixty-minute tour called cyclosis. Within minutes, acidosomes dock and flood the interior with protons down to pH 3, halting bacterial defenses. Next, hydrolase-rich [[lysosomes|lysosome]] fuse with the membrane, shifting the lumen toward pH 5 to cleave proteins, lipids, and nucleic acids into [[amino acids|amino-acid]], sugars, and [[nucleotides|nucleotide]] pumped straight into the cytoplasm while spent waste glides on toward the cytoproct.',
        blueprint: {
          role: 'Mobile phagocytic digestion chamber processing captured bacteria along a timed pH sequence',
          arrivesFrom: 'Pinched off at the [[cytostome|real-para-feeding]] and fused sequentially with acidosomes and digestive [[lysosomes|lysosome]]',
          inside: '~5-15 micrometer membrane [[vesicle|vesicle]] undergoing Stage I acidification (pH ~3), Stage II lysosomal hydrolysis (pH ~5-6), and neutralization',
          deliversTo: 'Exports hydrolyzed [[amino acids|amino-acid]], lipids, and [[nucleotides|nucleotide]] into cytoplasm and delivers waste to the [[cytoproct|real-para-feeding]]',
          loop: 'Pinocytic tubules bud off the shrinking vacuole during digestion to reclaim membrane and deliver nutrients rapidly'
        },
        scientific:
          'Circulating phagosomes (digestive vacuoles, DV-I to DV-IV; ~5-15 micrometers diameter) traversing defined cytoplasmic cyclosis paths (~20-60 min transit) inside [[Paramecium caudatum|real-paramecium]]. Rapid fusion with V-ATPase-bearing acidosomes drops luminal pH from ~7.0 to ~3.0 to kill ingested [[bacteria|real-bacterium]]; subsequent [[lysosome|lysosome]] fusion elevates pH to ~5.0-6.0 for acid hydrolase digestion (proteases, lipases, nucleases), followed by membrane retrieval and final egestion at the [[cytoproct|real-para-feeding]].',
        from: [
          { nodeId: 'real-para-feeding', label: 'Cytostome Loader', cargo: 'Freshly captured bacteria' },
          { nodeId: 'lysosome', label: 'Acid Acidosomes & Lysosomes', cargo: 'Protons & digestive hydrolases' }
        ],
        to: [
          { nodeId: 'amino-acid', label: 'Cytoplasmic Monomer Pool', cargo: 'Digested amino acids & sugars' },
          { nodeId: 'real-para-feeding', label: 'Cytoproct Anal Pore', cargo: 'Indigestible bacterial debris' }
        ]
      },
      es: {
        subtitle: 'Vacuolas fagocíticas circulantes de digestión secuencial',
        simple:
          'Desprendida del citostoma, cada [[vacuola alimenticia|real-para-feeding]] recorre el citoplasma de [[Paramecium|real-paramecium]], bajando a pH muy ácido para matar [[bacterias|real-bacterium]] antes de que las enzimas las transformen en nutrientes.',
        story:
          'En cuanto se desprende de la citofaringe, la corriente citoplasmática conduce a la vacuola por un circuito ordenado de veinte a sesenta minutos llamado ciclosis. En pocos minutos se fusionan acidosomas que bajan el interior a pH 3 para inactivar las bacterias; después llegan [[lisosomas|lysosome]] cargados de hidrolasas que elevan el pH hacia 5 y trocean proteínas, lípidos y ácidos nucleicos en [[aminoácidos|amino-acid]], azúcares y [[nucleótidos|nucleotide]] absorbidos al citoplasma antes de llegar al citoprocto.',
        blueprint: {
          role: 'Cámara fagocítica móvil que digiere bacterias capturadas siguiendo una secuencia precisa de pH',
          arrivesFrom: 'Formada en el [[citostoma|real-para-feeding]] y fusionada en serie con acidosomas y [[lisosomas|lysosome]] digestivos',
          inside: '[[Vesícula|vesicle]] de ~5–15 µm en fases sucesivas: acidificación extrema (pH ~3), hidrólisis lisosomal (pH ~5–6) y neutralización',
          deliversTo: 'Exporta [[aminoácidos|amino-acid]], lípidos y [[nucleótidos|nucleotide]] al citoplasma y lleva residuos al [[citoprocto|real-para-feeding]]',
          loop: 'Túbulos pinocíticos brotan durante la digestión para recuperar membrana y repartir nutrientes con rapidez'
        },
        scientific:
          'Fagosomas circulantes (estadios DV-I a DV-IV; ~5–15 µm de diámetro) desplazados por rutas citoplasmáticas de ciclosis (~20–60 min) en [[Paramecium caudatum|real-paramecium]]. La fusión rápida con acidosomas ricos en V-ATPasa reduce el pH luminal de ~7,0 a ~3,0 para eliminar [[bacterias|real-bacterium]]; la fusión posterior con [[lisosomas|lysosome]] lleva el pH a ~5,0–6,0 para la acción de proteasas, lipasas y nucleasas antes de la exocitosis en el [[citoprocto|real-para-feeding]].',
        from: [
          { nodeId: 'real-para-feeding', label: 'Citostoma cargador', cargo: 'Bacterias recién atrapadas' },
          { nodeId: 'lysosome', label: 'Acidosomas y lisosomas', cargo: 'Protones e hidrolasas ácidas' }
        ],
        to: [
          { nodeId: 'amino-acid', label: 'Reserva citoplasmática', cargo: 'Aminoácidos y monómeros' },
          { nodeId: 'real-para-feeding', label: 'Poro anal (citoprocto)', cargo: 'Restos bacterianos insolubles' }
        ]
      }
    },

    cytoproct: {
      en: {
        subtitle: 'The Fixed Anal Pore & Membrane Recycler',
        simple:
          'Located near the rear ventral ridge of [[Paramecium|real-paramecium]], the cytoproct is the fixed docking exit where spent [[food vacuoles|real-para-feeding]] release indigestible bacterial shells and recycle their lipid membrane back to the mouth.',
        story:
          'Once a circulating food vacuole has extracted every useful monomer from its digested [[bacteria|real-bacterium]] and returned to neutral pH, it docks exclusively at this alveolus-free cortical seam. For a few seconds, the vacuole fuses with the [[plasma membrane|plasma-membrane]] to push tough bacterial cell-wall remnants into the surrounding pond. Immediately afterward, microtubules pull the collapsed vacuole membrane inward as flat discoidal [[vesicles|vesicle]], racing them straight back up to the cytostome so zero lipid goes to waste.',
        blueprint: {
          role: 'Dedicated posterior exocytosis pore discharging solid digestive waste and reclaiming vacuole membrane',
          arrivesFrom: 'Neutralized, digestion-depleted Stage IV [[food vacuoles|real-para-feeding]] finishing their cyclosis loop',
          inside: 'Alveolus-free posterior ventral membrane slit flanked by [[microtubule|microtubule]] ribbons and retrieval machinery',
          deliversTo: 'Expels undigested bacterial debris extracellularly and returns recycled discoidal [[vesicles|vesicle]] to the [[cytostome|real-para-feeding]]',
          loop: 'Closed-loop vesicle recycling matches membrane retrieval here directly to new phagosome formation at the mouth'
        },
        scientific:
          'Fixed posterior ventral exocytic site (cytoproct / cell anus; ~5-10 micrometers longitudinal cortical slit devoid of alveoli) in [[Paramecium caudatum|real-paramecium]]. Docking and fusion of neutralized terminal food vacuoles (DV-IV) triggers bulk exocytosis of indigestible bacterial wall fragments followed within seconds by rapid clathrin-independent membrane retrieval into flat discoidal [[vesicles|vesicle]] transported anterogradely along [[microtubule|microtubule]] ribbons back to the [[cytostome|real-para-feeding]].',
        from: [
          { nodeId: 'real-para-feeding', label: 'Terminal Food Vacuoles', cargo: 'Neutralized spent phagosomes' },
          { nodeId: 'microtubule', label: 'Cortical Microtubule Tracks', cargo: 'Vacuole docking guidance' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Recycled Discoidal Vesicles', cargo: 'Reclaimed membrane lipids' },
          { nodeId: 'real-para-feeding', label: 'Cytostome Supply Loop', cargo: 'Membrane for new vacuoles' }
        ]
      },
      es: {
        subtitle: 'El poro anal fijo y reciclador de membrana',
        simple:
          'Situado en la cara ventral posterior de [[Paramecium|real-paramecium]], el citoprocto es la salida fija donde las [[vacuolas alimenticias|real-para-feeding]] agotadas expulsan restos bacterianos insolubles y devuelven su membrana hacia la boca.',
        story:
          'Cuando una vacuola digestiva ha extraído todos los nutrientes de las [[bacterias|real-bacterium]] y recupera pH neutro, atraca únicamente en esta ranura cortical libre de alvéolos. Durante unos segundos se fusiona con la [[membrana plasmática|plasma-membrane]] para expulsar al estanque los restos duros de paredes bacterianas. Acto seguido, cintas de microtúbulos pliegan la membrana vacía en [[vesículas|vesicle]] discoidales planas que regresan sin demora al citostoma para no desperdiciar lípidos.',
        blueprint: {
          role: 'Poro exocítico posterior dedicado que descarga residuos sólidos y recupera membrana vacuolar',
          arrivesFrom: '[[Vacuolas alimenticias|real-para-feeding]] terminales (estadio IV) neutralizadas al final de la ciclosis',
          inside: 'Hendidura ventral posterior sin alvéolos flanqueada por cintas de [[microtúbulos|microtubule]] y aparato de recuperación',
          deliversTo: 'Expulsa detritos bacterianos al medio y devuelve [[vesículas|vesicle]] discoidales recicladas al [[citostoma|real-para-feeding]]',
          loop: 'El reciclaje en circuito cerrado equilibra la recuperación de lípidos aquí con la formación de nuevos fagosomas'
        },
        scientific:
          'Sitio exocítico ventral posterior fijo (citoprocto; hendidura cortical de ~5–10 µm carente de alvéolos) en [[Paramecium caudatum|real-paramecium]]. La fusión regulada de vacuolas alimenticias neutralizadas (DV-IV) descarga restos indigeribles de envolturas bacterianas e inicia en segundos la recuperación masiva de membrana en [[vesículas|vesicle]] discoidales conducidas por cintas de [[microtúbulos|microtubule]] hasta el [[citostoma|real-para-feeding]].',
        from: [
          { nodeId: 'real-para-feeding', label: 'Vacuolas terminales', cargo: 'Fagosomas agotados neutros' },
          { nodeId: 'microtubule', label: 'Cintas microtubulares', cargo: 'Guía de acoplamiento cortical' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Vesículas discoidales', cargo: 'Lípidos de membrana recuperados' },
          { nodeId: 'real-para-feeding', label: 'Circuito del citostoma', cargo: 'Membrana para nuevas vacuolas' }
        ]
      }
    },

    contractile_vacuole: {
      en: {
        subtitle: 'The Rhythmic Star-Shaped Osmotic Pump',
        simple:
          'Pulsing steadily at the front and back of [[Paramecium|real-paramecium]], each central [[contractile vacuole|real-para-contractile]] fills with incoming freshwater from its radiating arms, then snaps open a surface pore to squirt excess [[water|water]] outside.',
        story:
          'Living in dilute pond water means osmosis continuously pushes [[water|water]] inward across the [[plasma membrane|plasma-membrane]] of [[Paramecium|real-paramecium]]. Without a rigid wall like a [[plant cell|real-plant]] to resist internal pressure, the cell relies on two alternating bladders that swell during diastole as radial collecting canals empty into them. Once full, each bladder seals off its canals, opens a microtubule-ringed discharge pore, and contracts in systole to eject roughly one picoliter of water every ten seconds.',
        blueprint: {
          role: 'Alternating anterior and posterior osmotic discharge bladder maintaining constant cell volume',
          arrivesFrom: 'Receives hypotonic cytosolic [[water|water]] harvested by 6-10 radial collecting canals and V-ATPase spongiome tubules',
          inside: 'Expandable ~10-20 micrometer central membrane bladder braced by helical [[microtubule|microtubule]] ribbons and a gated cortical pore',
          deliversTo: 'Expels excess [[water|water]] extracellularly during rhythmic systole every ~6-15 s without losing valuable cytoplasm',
          loop: 'Anterior and posterior bladders alternate out of phase and speed up automatically whenever external water gets fresher'
        },
        scientific:
          'Central contractile vacuole bladder (paired anterior and posterior complexes; ~10-20 micrometers diastole diameter) driving osmoregulation in [[Paramecium caudatum|real-paramecium]]. During diastole, fluid flows from radial ampullae into the central bladder; upon reaching threshold tension, canal valves close, a cortical [[microtubule|microtubule]]-supported pore fuses transiently with the [[plasma membrane|plasma-membrane]], and systole expels ~0.5-1.5 pL of hypotonic fluid (~6-15 s period, scaling inversely with external osmolarity).',
        from: [
          { nodeId: 'real-para-contractile', label: 'Radial Collecting Canals', cargo: 'Collected hypotonic fluid' },
          { nodeId: 'water', label: 'Osmotic Water Influx', cargo: 'Excess pond water entering cell' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Gated Expulsion Pore', cargo: 'Rhythmic extracellular discharge' },
          { nodeId: 'real-paramecium', label: 'Volume Homeostasis', cargo: 'Protection from osmotic lysis' }
        ]
      },
      es: {
        subtitle: 'La bomba osmótica estrellada de pulso rítmico',
        simple:
          'Latiendo con regularidad en ambos extremos de [[Paramecium|real-paramecium]], cada [[vacuola contráctil|real-para-contractile]] se llena con el agua recolectada por sus brazos radiales y abre un poro superficial para expulsar el exceso de [[agua|water]] al exterior.',
        story:
          'Habitar en agua dulce diluida provoca una entrada osmótica incesante de [[agua|water]] a través de la [[membrana plasmática|plasma-membrane]] de [[Paramecium|real-paramecium]]. Sin una pared rígida como la [[célula vegetal|real-plant]] para contener la presión, la célula emplea dos cámaras alternas que se dilatan en diástole al recibir fluido de los canales colectores. Al llenarse, cada cámara cierra las válvulas de sus canales, abre un poro sostenido por microtúbulos y se contrae en sístole expulsando cerca de un picolitro cada diez segundos.',
        blueprint: {
          role: 'Cámara osmótica alterna anterior y posterior que mantiene constante el volumen celular',
          arrivesFrom: 'Recibe [[agua|water]] hipotónica drenada por 6–10 canales colectores radiales y túbulos del espongioma con V-ATPasa',
          inside: 'Vejiga membranosa expansible de ~10–20 µm armada por cintas helicoidales de [[microtúbulos|microtubule]] y un poro cortical regulado',
          deliversTo: 'Descarga el exceso de [[agua|water]] al medio en sístoles rítmicas cada ~6–15 s sin perder contenido citosólico útil',
          loop: 'Las cámaras anterior y posterior laten desfasadas y aceleran su frecuencia cuando el agua externa es más diluida'
        },
        scientific:
          'Vejiga central de la vacuola contráctil (complejos anterior y posterior; ~10–20 µm de diámetro en diástole) en [[Paramecium caudatum|real-paramecium]]. Durante la diástole recibe fluido desde las ampollas radiales; al alcanzar el umbral de tensión, los conductos se cierran, un poro cortical reforzado por [[microtúbulos|microtubule]] se fusiona transitoriamente con la [[membrana plasmática|plasma-membrane]] y la sístole expulsa ~0,5–1,5 pL cada ~6–15 s.',
        from: [
          { nodeId: 'real-para-contractile', label: 'Canales colectores radiales', cargo: 'Fluido hipotónico acumulado' },
          { nodeId: 'water', label: 'Influjo osmótico de agua', cargo: 'Exceso dulceacuícola entrante' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Poro regulado de expulsión', cargo: 'Descarga rítmica extracelular' },
          { nodeId: 'real-paramecium', label: 'Homeostasis de volumen', cargo: 'Prevención de lisis osmótica' }
        ]
      }
    },

    collecting_canals: {
      en: {
        subtitle: 'Radiating Star Arms & Spongiome Tubules',
        simple:
          'Radiating outward around each [[contractile vacuole|real-para-contractile]], six to ten collecting canals drain excess [[water|water]] out of the cytoplasm and funnel it into the central bladder between pulses.',
        story:
          'Pulling loose [[water|water]] evenly out of a 200-micrometer cytoplasm requires broad drainage reach. Each contractile vacuole sends six to ten bulbous ampullae and long radial canals deep into the cell, surrounded by a dense lacework of fine membranes called the decorated spongiome. Active proton-pumping V-ATPases along those outer tubules load ions to draw water across aquaporins, swelling each radial arm until the central bladder relaxes and accepts the next charge.',
        blueprint: {
          role: 'Radial cytosolic water-gathering manifold linking the V-ATPase spongiome to the central vacuole',
          arrivesFrom: 'Draws cytosolic [[water|water]] osmotically across decorated spongiome tubules energized by V-ATPase H+ gradients',
          inside: 'Six to ten radiating collecting arms with contractile ampullae wrapped in dense tubular spongiome membranes',
          deliversTo: 'Discharges collected fluid into the central [[contractile vacuole|real-para-contractile]] during diastole while sealing off during systole',
          loop: 'As the central bladder contracts, the radial canals refill immediately so water removal never pauses'
        },
        scientific:
          'Radial collecting-canal manifold (6-10 radiating arms with proximal ampullae connected to an outer smooth and V-ATPase-decorated tubular spongiome) feeding each [[contractile vacuole|real-para-contractile]] of [[Paramecium caudatum|real-paramecium]]. Decorated spongiome tubules (~50 nm diameter) establish an electrochemical ion gradient driving aquaporin-mediated [[water|water]] uptake; fluid advances down each arm into ampullae that empty into the central bladder during diastole and pinch shut during systole.',
        from: [
          { nodeId: 'water', label: 'Diluted Cytoplasmic Water', cargo: 'Aquaporin-drawn osmotic flow' },
          { nodeId: 'atp-synthase', label: 'V-ATPase Ion Loading', cargo: 'Osmotic ion driving gradient' }
        ],
        to: [
          { nodeId: 'real-para-contractile', label: 'Central Vacuole Bladder', cargo: 'Diastole water filling' },
          { nodeId: 'real-paramecium', label: 'Cytoplasmic Osmolarity', cargo: 'Steady internal ion balance' }
        ]
      },
      es: {
        subtitle: 'Brazos radiales colectores y túbulos del espongioma',
        simple:
          'Extendidos como rayos de estrella alrededor de cada [[vacuola contráctil|real-para-contractile]], entre seis y diez canales colectores drenan el exceso de [[agua|water]] del citoplasma y lo conducen hacia la vejiga central entre pulsos.',
        story:
          'Extraer [[agua|water]] de forma uniforme en un citoplasma de 200 micrómetros exige una red de drenaje amplia. Cada vacuola contráctil proyecta de seis a diez ampollas y canales radiales largos rodeados por un entramado fino de túbulos llamado espongioma decorado. Las bombas V-ATPasa de esos túbulos acumulan iones para atraer agua por acuaporinas, inflando cada brazo radial hasta que la cámara central se relaja y recibe la siguiente descarga.',
        blueprint: {
          role: 'Red colectora radial que enlaza el espongioma con V-ATPasa y la cámara contráctil central',
          arrivesFrom: 'Capta [[agua|water]] citosólica por ósmosis a través de los túbulos decorados impulsados por gradientes H⁺ de V-ATPasa',
          inside: 'Seis a diez brazos radiales con ampollas contráctiles rodeados por una densa malla tubular del espongioma',
          deliversTo: 'Vierte el fluido acumulado en la [[vacuola contráctil|real-para-contractile]] durante la diástole y se sella en la sístole',
          loop: 'Mientras la vejiga central se vacía, los canales radiales vuelven a llenarse de inmediato para no detener el achique'
        },
        scientific:
          'Colector radial de 6–10 canales con ampollas proximales conectados al espongioma tubular liso y decorado de cada [[vacuola contráctil|real-para-contractile]] en [[Paramecium caudatum|real-paramecium]]. Los túbulos decorados (~50 nm de diámetro) generan el gradiente iónico que atrae [[agua|water]] por acuaporinas hacia las ampollas, las cuales descargan en la cámara central durante la diástole y se ocluyen en la sístole.',
        from: [
          { nodeId: 'water', label: 'Agua citosólica en exceso', cargo: 'Flujo osmótico por acuaporinas' },
          { nodeId: 'atp-synthase', label: 'Carga iónica por V-ATPasa', cargo: 'Gradiente electroquímico motriz' }
        ],
        to: [
          { nodeId: 'real-para-contractile', label: 'Cámara vacuolar central', cargo: 'Llenado en diástole' },
          { nodeId: 'real-paramecium', label: 'Osmolaridad citoplasmática', cargo: 'Balance hídrico constante' }
        ]
      }
    },

    vatpase: {
      en: {
        subtitle: 'Rotary V-ATPase Proton Pumps Energizing Water Collection',
        simple:
          'Packed densely along the fine tubules of the [[contractile vacuole|real-para-contractile]], V-ATPase rotary pumps burn ATP to push [[protons|atom-h]] inward, creating the electrical gradient that pulls excess [[water|water]] out of the cell.',
        story:
          'Cells cannot pump pure [[water|water]] molecules directly; they move ions first and let osmosis pull water along behind them. Covering the spongiome tubules around every collecting canal stand thousands of mushroom-shaped V-ATPase complexes - rotary cousins of mitochondrial [[ATP synthase|atp-synthase]] running in reverse. Splitting [[magnesium|atom-mg]]-bound ATP turns their membrane ring to pump [[H+|atom-h]] ions into the lumen, powering exchangers that load potassium and bicarbonate so water rushes in through aquaporins.',
        blueprint: {
          role: 'ATP-hydrolyzing rotary V1V0 proton pump powering secondary osmotic water uptake into the spongiome',
          arrivesFrom: 'Cytosolic Mg2+-ATP from nearby [[mitochondria|mitochondrion]] plus cytoplasmic [[H+|atom-h]] ions',
          inside: 'Helical rows of ~900 kDa V1 catalytic heads and V0 membrane rotor rings studding decorated spongiome tubules',
          deliversTo: 'Establishes luminal H+ gradient coupled to K+/HCO3- loading and osmotic [[water|water]] entry into [[collecting canals|real-para-contractile]]',
          loop: 'Same V-ATPase family also acidifies Paramecium acidosomes and the [[Plasmodium digestive vacuole|real-plas-digestive]]'
        },
        scientific:
          'Vacuolar-type rotary proton-translocating ATPase (V1V0-ATPase, ~900 kDa; evolutionarily sister to archaeal A1A0 and inverted relative to F1F0 [[ATP synthase|atp-synthase]]) packed in crystalline helical arrays (~10-12 nm spacing) along decorated spongiome tubules of the [[Paramecium|real-paramecium]] [[contractile vacuole|real-para-contractile]]. Hydrolyzes [[Mg2+|atom-mg]]-ATP in the cytosolic V1 sector to rotate the V0 proteolipid ring, pumping [[H+|atom-h]] into the tubule lumen to drive secondary K+/Cl-/HCO3- accumulation and aquaporin-mediated [[water|water]] influx.',
        from: [
          { nodeId: 'mitochondrion', label: 'Nearby Mitochondria', cargo: 'Mg2+-ATP hydrolysis fuel' },
          { nodeId: 'atom-h', label: 'Cytoplasmic Protons (H+)', cargo: 'Translocated ion charge' }
        ],
        to: [
          { nodeId: 'real-para-contractile', label: 'Spongiome & Canals', cargo: 'Electrochemical osmotic pull' },
          { nodeId: 'water', label: 'Aquaporin Water Flow', cargo: 'Secondary fluid accumulation' }
        ]
      },
      es: {
        subtitle: 'Bombas protónicas rotatorias V-ATPasa del espongioma',
        simple:
          'Alineadas densamente sobre los túbulos finos de la [[vacuola contráctil|real-para-contractile]], las bombas rotatorias V-ATPasa consumen ATP para introducir [[protones|atom-h]], generando el gradiente eléctrico que extrae el exceso de [[agua|water]] celular.',
        story:
          'Las células no pueden bombear moléculas de [[agua|water]] puras directamente; primero concentran iones para que la ósmosis arrastre el agua detrás. Tapizando los túbulos del espongioma alrededor de los canales colectores trabajan miles de complejos V-ATPasa, parientes rotatorios de la [[ATP sintasa|atp-synthase]] operando en sentido inverso. Al hidrolizar ATP con [[magnesio|atom-mg]], su anillo transmembrana bombea [[H⁺|atom-h]] al interior para cargar potasio y bicarbonato y atraer agua por acuaporinas.',
        blueprint: {
          role: 'Bomba rotatoria V₁V₀ hidrolizadora de ATP que impulsa la captación osmótica secundaria en el espongioma',
          arrivesFrom: 'Mg²⁺·ATP citosólico de [[mitocondrias|mitochondrion]] cercanas y [[protones H⁺|atom-h]] citoplasmáticos',
          inside: 'Hileras helicoidales de complejos de ~900 kDa con cabezas catalíticas V₁ y rotores V₀ sobre túbulos decorados',
          deliversTo: 'Crea un gradiente luminal de H⁺ acoplado a entrada de K⁺/HCO₃⁻ y flujo osmótico de [[agua|water]] hacia los [[canales|real-para-contractile]]',
          loop: 'Esta misma familia V-ATPasa acidifica los acidosomas de Paramecium y la [[vacuola digestiva de Plasmodium|real-plas-digestive]]'
        },
        scientific:
          'ATPasa protónica rotatoria de tipo vacuolar (V₁V₀-ATPasa, ~900 kDa; emparentada con la A₁A₀ arqueana y funcionalmente inversa a la [[ATP sintasa|atp-synthase]] F₁F₀) empaquetada en hélices densas (~10–12 nm) sobre los túbulos decorados de la [[vacuola contráctil|real-para-contractile]] de [[Paramecium|real-paramecium]]. Hidroliza [[Mg²⁺|atom-mg]]·ATP en V₁ para girar el anillo proteolipídico V₀, bombeando [[H⁺|atom-h]] y energizando la acumulación de K⁺/Cl⁻/HCO₃⁻ y entrada osmótica de [[agua|water]].',
        from: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias vecinas', cargo: 'Combustible Mg²⁺·ATP' },
          { nodeId: 'atom-h', label: 'Protones citoplasmáticos (H⁺)', cargo: 'Carga iónica translocada' }
        ],
        to: [
          { nodeId: 'real-para-contractile', label: 'Espongioma y canales', cargo: 'Arrastre osmótico electroquímico' },
          { nodeId: 'water', label: 'Flujo por acuaporinas', cargo: 'Acumulación secundaria de agua' }
        ]
      }
    },

    macronucleus: {
      en: {
        subtitle: 'The Giant Polyploid Somatic Gene Engine',
        simple:
          'Dominating the center of [[Paramecium|real-paramecium]], this large kidney-shaped [[macronucleus|real-para-nuclei]] holds hundreds of copies of everyday genes so the giant single cell can manufacture [[RNA|rna]] and [[proteins|protein]] fast enough to live.',
        story:
          'A single human tissue cell stays tiny and splits chores across trillions of neighbors, but one 200-micrometer [[Paramecium|real-paramecium]] must run swimming, hunting, digestion, and pumping solo. To keep thousands of [[80S ribosomes|ribosome]] fed nonstop, its macronucleus strips out junk transposons and amplifies streamlined somatic [[DNA|dna]] chromosomes roughly eight-hundred-fold inside a porous [[nuclear envelope|nuclear-envelope]]. During routine asexual division it simply pinches in half by amitosis, leaving long-term germline accuracy to the neighboring micronucleus.',
        blueprint: {
          role: 'High-copy polyploid somatic nucleus driving all daily vegetative transcription in [[Paramecium|real-paramecium]]',
          arrivesFrom: 'Differentiated from a zygotic nucleus after sexual conjugation by excising repetitive DNA and amplifying genes ~800x',
          inside: '~25-40 micrometer kidney-shaped [[nucleus|nucleus]] enclosing ~800n copies of ~30 Mbp gene-rich linear [[dsDNA|dna]] and multiple nucleoli',
          deliversTo: 'Exports massive [[mRNA|rna]] and rRNA output through nuclear pores directly to cytosolic [[80S ribosomes|ribosome]]',
          loop: 'During sexual conjugation, the aging macronucleus fragments and dissolves while a fresh one develops from the micronucleus'
        },
        scientific:
          'Somatic polyploid macronucleus (~25-40 micrometers length; ~800n-1,000n ploidy) enclosed by a perforated double [[nuclear envelope|nuclear-envelope]] in [[Paramecium caudatum|real-paramecium]]. Houses streamlined, gene-dense linear somatic chromosomes (~30 Mbp complexity after programmed excision of internal eliminated sequences and transposons) supporting intense RNA Polymerase I/II/III transcription of [[mRNA|rna]] and rRNA for cytoplasmic [[80S ribosomes|ribosome]]. Divides amitotically without a mitotic spindle during binary fission and degenerates during sexual conjugation.',
        from: [
          { nodeId: 'real-para-nuclei', label: 'Germline Micronucleus', cargo: 'Post-conjugation renewal' },
          { nodeId: 'nucleotide', label: 'Nucleotide Triphosphates', cargo: 'High-output RNA synthesis' }
        ],
        to: [
          { nodeId: 'rna', label: 'Exported mRNA & rRNA', cargo: 'Daily gene transcripts' },
          { nodeId: 'ribosome', label: 'Cytosolic 80S Ribosomes', cargo: 'Protein translation demand' }
        ]
      },
      es: {
        subtitle: 'El enorme motor genético somático poliploide',
        simple:
          'Dominando el centro de [[Paramecium|real-paramecium]], este gran [[macronúcleo|real-para-nuclei]] arriñonado almacena cientos de copias de los genes diarios para producir [[ARN|rna]] y [[proteínas|protein]] al ritmo que exige una célula gigante.',
        story:
          'Una célula de tejido humano permanece pequeña y reparte funciones entre billones de vecinas, pero un solo [[Paramecium|real-paramecium]] de 200 micrómetros debe nadar, cazar, digerir y osmorregular en solitario. Para abastecer sin pausa a miles de [[ribosomas 80S|ribosome]], su macronúcleo depura transposones y amplifica unas ochocientas veces sus cromosomas somáticos de [[ADN|dna]] dentro de una [[envoltura nuclear|nuclear-envelope]] porosa. En la división asexual se estrangula por amitosis, confiando la fidelidad germinal al micronúcleo vecino.',
        blueprint: {
          role: 'Núcleo somático poliploide de altísima copia que gobierna toda la transcripción vegetativa diaria',
          arrivesFrom: 'Diferenciado tras la conjugación sexual a partir del núcleo cigótico tras escindir ADN repetitivo y amplificar genes ~800×',
          inside: '[[Núcleo|nucleus]] arriñonado de ~25–40 µm con ~800n copias de [[ADNbc|dna]] lineal somático (~30 Mpb) y múltiples nucléolos',
          deliversTo: 'Exporta un caudal masivo de [[ARNm|rna]] y ARNr por los poros nucleares hacia los [[ribosomas 80S|ribosome]] citosólicos',
          loop: 'Durante la conjugación sexual, el macronúcleo viejo se fragmenta y disuelve mientras nace uno nuevo del micronúcleo'
        },
        scientific:
          'Macronúcleo somático poliploide (~25–40 µm de longitud; ploidía ~800n–1.000n) delimitado por una doble [[envoltura nuclear|nuclear-envelope]] en [[Paramecium caudatum|real-paramecium]]. Contiene cromosomas lineales depurados (~30 Mpb de complejidad tras la escisión programada de secuencias eliminadas internas y transposones) que sostienen la transcripción vegetativa masiva de [[ARN|rna]] para [[ribosomas 80S|ribosome]]; se divide por amitosis sin huso mitótico.',
        from: [
          { nodeId: 'real-para-nuclei', label: 'Micronúcleo germinal', cargo: 'Renovación tras conjugación' },
          { nodeId: 'nucleotide', label: 'Ribonucleótidos NTP', cargo: 'Transcripción masiva diaria' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm y ARNr exportados', cargo: 'Mensajes genéticos activos' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S citosólicos', cargo: 'Síntesis proteica continua' }
        ]
      }
    },

    micronucleus: {
      en: {
        subtitle: 'The Compact Diploid Germline Archive',
        simple:
          'Tucked snugly into the hollow of the [[macronucleus|real-para-nuclei]], this tiny diploid micronucleus stays transcriptionally quiet during daily life, preserving a spotless full-chromosome backup strictly for mitosis and sexual conjugation.',
        story:
          'Because the giant macronucleus divides imprecisely by pinching in two without mitotic spindles, centuries of asexual division would eventually scramble its gene copy balance. [[Paramecium|real-paramecium]] protects its future by locking one complete, centromere-bearing diploid genome inside this compact 4-micrometer micronucleus. Quiet during feeding, it wakes during sexual conjugation to divide cleanly by meiosis, swap a haploid pronucleus with a mating partner, and generate a brand-new macronucleus from the recombined zygotic genome.',
        blueprint: {
          role: 'Transcriptionally silent diploid germline archive preserving intact chromosomes for sexual recombination',
          arrivesFrom: 'Faithfully segregated via closed intranuclear mitotic spindles during every cell division of [[Paramecium|real-paramecium]]',
          inside: '~3-5 micrometer ovoid [[nucleus|nucleus]] with intact diploid centromeric [[dsDNA|dna]] chromosomes (retaining IES and germline repeats)',
          deliversTo: 'Undergoes meiosis during conjugation to exchange haploid pronuclei and regenerate a fresh [[macronucleus|real-para-nuclei]]',
          loop: 'Small-RNA scanning from the old macronucleus guides DNA excision as the new macronucleus matures from this archive'
        },
        scientific:
          'Compact diploid germline micronucleus (~3-5 micrometers diameter) nestled within an indentation of the somatic [[macronucleus|real-para-nuclei]] in [[Paramecium caudatum|real-paramecium]]. Transcriptionally silent during vegetative growth, preserving full-length centromeric [[dsDNA|dna]] chromosomes (including transposons and internal eliminated sequences) segregated strictly by intranuclear [[microtubule|microtubule]] mitosis. Executes meiosis during sexual conjugation, exchanges migratory haploid pronuclei across a conjugation bridge, and generates the next somatic macronucleus.',
        from: [
          { nodeId: 'dna', label: 'Intact Diploid dsDNA', cargo: 'Unedited germline chromosomes' },
          { nodeId: 'microtubule', label: 'Intranuclear Mitotic Spindle', cargo: 'Exact chromosome segregation' }
        ],
        to: [
          { nodeId: 'real-para-nuclei', label: 'New Macronucleus Origin', cargo: 'Post-conjugation genome reset' },
          { nodeId: 'real-paramecium', label: 'Sexual Conjugation', cargo: 'Reciprocal genetic diversity' }
        ]
      },
      es: {
        subtitle: 'El archivo germinal diploide compacto',
        simple:
          'Alojado en la concavidad del [[macronúcleo|real-para-nuclei]], este pequeño micronúcleo diploide permanece en silencio durante la vida diaria, custodiando una copia íntegra de los cromosomas reservada para la mitosis y la conjugación sexual.',
        story:
          'Como el gran macronúcleo se divide sin huso mitótico, cientos de generaciones asexuales acabarían desequilibrando sus copias génicas. [[Paramecium|real-paramecium]] protege su linaje guardando un genoma diploide completo y con centrómeros dentro de este compacto micronúcleo de 4 micrómetros. Inactivo al comer, despierta durante la conjugación sexual para ejecutar la meiosis, intercambiar un pronúcleo haploide con otra célula y construir un macronúcleo nuevo a partir del genoma recombinado.',
        blueprint: {
          role: 'Archivo germinal diploide transcripcionalmente silente que preserva cromosomas íntegros para recombinación sexual',
          arrivesFrom: 'Segregado con exactitud por husos mitóticos intranucleares cerrados en cada división de [[Paramecium|real-paramecium]]',
          inside: '[[Núcleo|nucleus]] ovoide de ~3–5 µm con cromosomas diploides centroméricos íntegros de [[ADNbc|dna]] (incluidas secuencias IES)',
          deliversTo: 'Realiza la meiosis en la conjugación para intercambiar pronúcleos haploides y regenerar el [[macronúcleo|real-para-nuclei]]',
          loop: 'ARN pequeños derivados del macronúcleo saliente guían el recorte de ADN al diferenciarse el nuevo macronúcleo'
        },
        scientific:
          'Micronúcleo germinal diploide compacto (~3–5 µm de diámetro) anidado junto al [[macronúcleo|real-para-nuclei]] en [[Paramecium caudatum|real-paramecium]]. Silencioso en fase vegetativa, conserva cromosomas centroméricos completos de [[ADNbc|dna]] (con transposones y secuencias eliminadas internas) repartidos por mitosis intranuclear mediada por [[microtúbulos|microtubule]]; durante la conjugación completa meiosis, intercambio pronuclear y regeneración somática.',
        from: [
          { nodeId: 'dna', label: 'ADNbc diploide íntegro', cargo: 'Cromosomas germinales completos' },
          { nodeId: 'microtubule', label: 'Huso mitótico intranuclear', cargo: 'Segregación exacta en mitosis' }
        ],
        to: [
          { nodeId: 'real-para-nuclei', label: 'Origen del nuevo macronúcleo', cargo: 'Renovación somática possexual' },
          { nodeId: 'real-paramecium', label: 'Conjugación sexual', cargo: 'Recombinación genética recíproca' }
        ]
      }
    },

    mito: {
      en: {
        subtitle: 'Sub-Cortical Aerobic Mitochondria Fueling Cilia & Pumps',
        simple:
          'Clustered thickly right beneath the pellicle and around the [[contractile vacuoles|real-para-contractile]], hundreds of oxygen-breathing [[mitochondria|mitochondrion]] supply nonstop ATP to keep thousands of [[cilia|real-para-cilia]] beating and water pumps cycling.',
        story:
          'Continuous metachronal swimming plus rhythmic water bailing burns ATP rapidly throughout the cortex of [[Paramecium|real-paramecium]]. To shorten diffusion distance, the cell packs hundreds of tubular-cristae [[mitochondria|mitochondrion]] right below its alveolar pellicle and alongside every collecting canal. Oxidizing sugars and [[amino acids|amino-acid]] salvaged from digested [[bacteria|real-bacterium]], inner-membrane respiratory chains charge a proton gradient that spins [[ATP synthase|atp-synthase]] right where [[axonemal dynein|real-para-dynein]] and V-ATPases demand energy most.',
        blueprint: {
          role: 'High-output sub-cortical respiratory ATP generators powering ciliary motility and osmoregulation',
          arrivesFrom: 'Pyruvate, fatty acids, and [[amino acids|amino-acid]] digested in [[food vacuoles|real-para-feeding]] plus dissolved pond O2',
          inside: 'Double-membrane ~0.8-2 micrometer organelles with characteristic alveolate tubular cristae, ~40 kb linear mtDNA, ETC, and [[ATP synthase|atp-synthase]]',
          deliversTo: 'Supplies local Mg2+-ATP directly to [[axonemal dynein|real-para-dynein]], spongiome V-ATPases, and [[80S ribosomes|ribosome]]',
          loop: 'Peripheral mitochondrial positioning minimizes ATP diffusion delay to thousands of beating ciliary shafts'
        },
        scientific:
          'Aerobic [[mitochondria|mitochondrion]] (~500-2,000 per cell; ~0.8-2 micrometers) concentrated in the sub-pellicular cortex and perivacuolar zones of [[Paramecium caudatum|real-paramecium]]. Exhibit tubular inner-membrane cristae typical of Alveolata and harbor an unusually large ~40 kb linear mitochondrial [[dsDNA|dna]] genome. Oxidative phosphorylation via Complexes I-IV and F1F0 [[ATP synthase|atp-synthase]] supplies ATP directly to cortical [[axonemal dynein|real-para-dynein]] and contractile-vacuole V-ATPases.',
        from: [
          { nodeId: 'real-para-feeding', label: 'Digested Bacterial Nutrients', cargo: 'Oxidizable carbon substrates' },
          { nodeId: 'atom-o', label: 'Dissolved Freshwater O2', cargo: 'Terminal electron acceptor' }
        ],
        to: [
          { nodeId: 'real-para-dynein', label: 'Axonemal Dynein Arms', cargo: 'ATP for 10-40 Hz ciliary beat' },
          { nodeId: 'real-para-contractile', label: 'Contractile Vacuole Pumps', cargo: 'ATP for V-ATPase water bailing' }
        ]
      },
      es: {
        subtitle: 'Mitocondrias subcorticales que alimentan cilios y bombas',
        simple:
          'Agrupadas densamente bajo la película y alrededor de las [[vacuolas contráctiles|real-para-contractile]], cientos de [[mitocondrias|mitochondrion]] aerobias producen ATP sin pausa para mover miles de [[cilios|real-para-cilia]] y accionar las bombas de agua.',
        story:
          'Nadar sin descanso en ondas metácronas y achicar agua cada pocos segundos exige un flujo enorme de ATP en toda la periferia de [[Paramecium|real-paramecium]]. Para acortar distancias de difusión, la célula concentra cientos de [[mitocondrias|mitochondrion]] de crestas tubulares justo debajo de los alvéolos y junto a cada canal colector. Al oxidar nutrientes extraídos de [[bacterias|real-bacterium]] digeridas, su cadena respiratoria acciona la [[ATP sintasa|atp-synthase]] al lado mismo de la [[dineína|real-para-dynein]] y las V-ATPasas.',
        blueprint: {
          role: 'Generadores respiratorios subcorticales de ATP que alimentan la movilidad ciliar y la osmorregulación',
          arrivesFrom: 'Piruvato, ácidos grasos y [[aminoácidos|amino-acid]] procedentes de [[vacuolas alimenticias|real-para-feeding]] más O₂ disuelto',
          inside: 'Orgánulos de doble membrana (~0,8–2 µm) con crestas tubulares alveoladas, ADNmt lineal de ~40 kb, cadena respiratoria y [[ATP sintasa|atp-synthase]]',
          deliversTo: 'Entrega Mg²⁺·ATP local a la [[dineína axonemal|real-para-dynein]], las V-ATPasas del espongioma y los [[ribosomas 80S|ribosome]]',
          loop: 'La ubicación periférica reduce al mínimo el tiempo de difusión del ATP hacia los miles de cilios en marcha'
        },
        scientific:
          '[[Mitocondrias|mitochondrion]] aerobias (~500–2.000 por célula; ~0,8–2 µm) concentradas en el córtex subpelicular y la zona perivacuolar de [[Paramecium caudatum|real-paramecium]]. Presentan crestas tubulares características de Alveolata y un genoma mitocondrial lineal de ~40 kb de [[ADNbc|dna]]; la fosforilación oxidativa mediante los complejos I–IV y la [[ATP sintasa|atp-synthase]] F₁F₀ abastece directamente a la [[dineína|real-para-dynein]] y las V-ATPasas.',
        from: [
          { nodeId: 'real-para-feeding', label: 'Nutrientes bacterianos', cargo: 'Sustratos oxidables digeridos' },
          { nodeId: 'atom-o', label: 'O₂ disuelto en agua dulce', cargo: 'Aceptor final de electrones' }
        ],
        to: [
          { nodeId: 'real-para-dynein', label: 'Brazos de dineína axonemal', cargo: 'ATP para batido a 10–40 Hz' },
          { nodeId: 'real-para-contractile', label: 'Bombas vacuolares', cargo: 'ATP para V-ATPasas osmóticas' }
        ]
      }
    },

    ribosome_80s: {
      en: {
        subtitle: 'Eukaryotic 80S Ribosomes Running the Ciliate Code',
        simple:
          'Scattered throughout the cytoplasm and docked along internal membranes, eukaryotic [[80S ribosomes|ribosome]] read [[mRNA|rna]] pouring out of the giant [[macronucleus|real-para-nuclei]] to assemble every structural and motor [[protein|protein]] in [[Paramecium|real-paramecium]].',
        story:
          'Every [[tubulin|tubulin]] brick inside four thousand cilia, every heavy [[dynein|real-para-dynein]] motor, every V-ATPase pump, and every defensive trichocyst needle rolls off cytosolic [[80S ribosomes|ribosome]] powered by [[amino acids|amino-acid]] salvaged from digested [[bacteria|real-bacterium]]. Intriguingly, Paramecium ribosomes interpret the genetic code with a classic ciliate twist: instead of stopping at UAA and UAG codons as human and bacterial cells do, they insert glutamine and stop exclusively at UGA.',
        blueprint: {
          role: 'Cytosolic eukaryotic 80S translation engines building the full single-celled predator proteome',
          arrivesFrom: 'Massive [[mRNA|rna]] flux from the polyploid [[macronucleus|real-para-nuclei]] plus [[amino acids|amino-acid]] recovered from [[food vacuoles|real-para-feeding]]',
          inside: '~25-30 nm ~4.2 MDa 40S + 60S [[ribosome|ribosome]] complexes decoding ciliate-variant mRNA (UAA/UAG = Gln; UGA = Stop)',
          deliversTo: 'Synthesizes [[tubulin|tubulin]], [[dynein|real-para-dynein]], epiplasmins, V-ATPases, trichocyst TMPs, and lysosomal hydrolases',
          loop: 'Directly contrasts eukaryotic 80S cytoplasm with the smaller [[70S ribosomes|ribosome-70s]] inside the bacteria Paramecium eats'
        },
        scientific:
          'Cytosolic eukaryotic [[80S ribosomes|ribosome]] (~25-30 nm diameter, ~4.2 MDa; 40S small + 60S large subunits containing 18S, 5.8S, 28S, and 5S rRNAs) translating nonstop [[macronuclear|real-para-nuclei]] [[mRNA|rna]] in [[Paramecium caudatum|real-paramecium]]. Operates under the canonical ciliate nuclear genetic code reassignment in which UAA and UAG encode glutamine (via specialized suppressor tRNAs) while UGA serves as the sole termination codon, fueled by [[amino acids|amino-acid]] from phagocytosed [[bacteria|real-bacterium]].',
        from: [
          { nodeId: 'real-para-nuclei', label: 'Polyploid Macronucleus', cargo: 'Continuous mRNA & rRNA' },
          { nodeId: 'amino-acid', label: 'Digested Amino Acid Pool', cargo: 'Charged aminoacyl-tRNAs' }
        ],
        to: [
          { nodeId: 'real-para-dynein', label: 'Ciliary Motors & Tubulin', cargo: 'Motility machinery proteins' },
          { nodeId: 'real-para-contractile', label: 'Pumps & Trichocysts', cargo: 'Membrane & secretory proteins' }
        ]
      },
      es: {
        subtitle: 'Ribosomas eucariotas 80S con código genético ciliado',
        simple:
          'Distribuidos por todo el citoplasma y las membranas internas, los [[ribosomas 80S|ribosome]] eucariotas leen el [[ARNm|rna]] emitido por el enorme [[macronúcleo|real-para-nuclei]] para fabricar todas las [[proteínas|protein]] estructurales y motoras de [[Paramecium|real-paramecium]].',
        story:
          'Cada ladrillo de [[tubulina|tubulin]] en cuatro mil cilios, cada motor de [[dineína|real-para-dynein]], cada bomba V-ATPasa y cada arpón de tricocisto sale de los [[ribosomas 80S|ribosome]] citosólicos usando [[aminoácidos|amino-acid]] recuperados de [[bacterias|real-bacterium]] digeridas. Como rasgo evolutivo célebre de los ciliados, los ribosomas de Paramecium no se detienen en los codones UAA y UAG como los humanos o las bacterias, sino que insertan glutamina y terminan únicamente en UGA.',
        blueprint: {
          role: 'Traductores citosólicos eucariotas 80S que fabrican todo el proteoma del depredador unicelular',
          arrivesFrom: 'Flujo masivo de [[ARNm|rna]] del [[macronúcleo|real-para-nuclei]] poliploide y [[aminoácidos|amino-acid]] de las [[vacuolas alimenticias|real-para-feeding]]',
          inside: 'Complejos [[ribosómicos|ribosome]] 40S + 60S (~25–30 nm, ~4,2 MDa) leyendo código ciliado (UAA/UAG = Gln; UGA = parada)',
          deliversTo: 'Sintetiza [[tubulina|tubulin]], [[dineína|real-para-dynein]], epiplasminas, V-ATPasas, proteínas TMP e hidrolasas lisosomales',
          loop: 'Contrasta directamente los ribosomas 80S eucariotas con los [[ribosomas 70S|ribosome-70s]] de las bacterias que ingiere'
        },
        scientific:
          '[[Ribosomas 80S|ribosome]] eucariotas citosólicos (~25–30 nm, ~4,2 MDa; subunidades 40S y 60S con ARNr 18S, 5,8S, 28S y 5S) que traducen el [[ARNm|rna]] del [[macronúcleo|real-para-nuclei]] en [[Paramecium caudatum|real-paramecium]]. Aplican la reasignación genética nuclear propia de ciliados donde UAA y UAG codifican glutamina y UGA actúa como único codón de terminación, abastecidos por [[aminoácidos|amino-acid]] de [[bacterias|real-bacterium]] fagocitadas.',
        from: [
          { nodeId: 'real-para-nuclei', label: 'Macronúcleo poliploide', cargo: 'ARNm y ARNr incesantes' },
          { nodeId: 'amino-acid', label: 'Reserva de aminoácidos', cargo: 'Aminoacil-ARNt cargados' }
        ],
        to: [
          { nodeId: 'real-para-dynein', label: 'Motores ciliares y tubulina', cargo: 'Proteínas de natación' },
          { nodeId: 'real-para-contractile', label: 'Bombas y tricocistos', cargo: 'Proteínas de membrana y defensa' }
        ]
      }
    },

    axoneme: {
      en: {
        subtitle: 'True-Scale 9+2 Microtubule Doublet Core (PDB 8G2Z)',
        simple:
          'Magnified to molecular scale inside a single cilium, this 250-nanometer [[9+2 axoneme|real-para-axoneme]] arranges nine outer [[microtubule|microtubule]] doublets around two central pipes linked by spokes and elastic ties.',
        story:
          'Every motile eukaryotic cilium - from a pond-dwelling [[Paramecium|real-paramecium]] to human airway [[cilia|cilium]] clearing mucus - shares this conserved 9+2 architecture. Nine paired A/B doublets of [[tubulin|tubulin]] surround a central pair while radial spokes relay timing cues outward and nexin bridges tie adjacent doublets together every 96 nanometers. When [[axonemal dynein|real-para-dynein]] pulls neighboring rails lengthwise, those elastic nexin bridges prevent telescopes from sliding apart and force the whole cylinder into a smooth bending wave.',
        blueprint: {
          role: '250 nm conserved 9+2 microtubule cylinder converting linear dynein sliding into rhythmic ciliary bends',
          arrivesFrom: 'Polymerized from [[alpha/beta-tubulin|tubulin]] dimers (PDB 1JFF) growing distally from the cortical 9x3 kinetosome',
          inside: 'Nine 13+10 protofilament A/B [[microtubule|microtubule]] doublets (PDB 8G2Z), central C1/C2 pair, radial spokes, and 96 nm N-DRC ties',
          deliversTo: 'Channels [[axonemal dynein|real-para-dynein]] shear into coordinated power and recovery bends of [[Paramecium cilia|real-para-cilia]]',
          loop: 'Radial spoke contacts with the central pair switch opposing doublet arcs on and off each stroke cycle'
        },
        scientific:
          'True-scale molecular cutaway of the eukaryotic motile [[9+2 axoneme|real-para-axoneme]] (~250 nm diameter; cryo-EM doublet repeat PDB 8G2Z) inside [[Paramecium|real-paramecium]]. Consists of nine outer [[microtubule|microtubule]] doublets (13-protofilament A-tubule + 10-protofilament B-tubule lined with microtubule inner proteins, MIPs) linked every 96 nm by nexin-dynein regulatory complexes (N-DRC) and radial spokes projecting to the central singlet pair (C1/C2), converting [[dynein|real-para-dynein]] sliding into planar bending.',
        from: [
          { nodeId: 'tubulin', label: 'Alpha/Beta-Tubulin Dimers', cargo: 'PDB 1JFF doublet bricks' },
          { nodeId: 'real-para-dynein', label: 'Outer & Inner Dynein Arms', cargo: 'ATP-driven inter-doublet shear' }
        ],
        to: [
          { nodeId: 'real-para-cilia', label: 'Beating Ciliary Shaft', cargo: 'Propagated bending wave' },
          { nodeId: 'cilium', label: 'Conserved Eukaryotic Cilium', cargo: 'Shared 9+2 blueprint' }
        ]
      },
      es: {
        subtitle: 'Núcleo de dobletes microtubulares 9+2 a escala molecular (PDB 8G2Z)',
        simple:
          'Ampliado a escala molecular dentro de un solo cilio, este [[axonema 9+2|real-para-axoneme]] de 250 nanómetros ordena nueve dobletes periféricos de [[microtúbulos|microtubule]] en torno a dos tubos centrales unidos por radios y lazos elásticos.',
        story:
          'Todos los cilios móviles eucariotas —desde un [[Paramecium|real-paramecium]] de estanque hasta los [[cilios|cilium]] respiratorios humanos— comparten esta geometría 9+2 conservada. Nueve dobletes A/B de [[tubulina|tubulin]] rodean al par central mientras radios internos transmiten señales de ritmo y puentes de nexina sujetan los dobletes vecinos cada 96 nanómetros. Cuando la [[dineína axonemal|real-para-dynein]] desliza dos rieles contiguos, esos amarres elásticos convierten el deslizamiento en una flexión limpia a lo largo del eje.',
        blueprint: {
          role: 'Cilindro microtubular 9+2 conservado de 250 nm que transforma el deslizamiento de dineína en flexión ciliar',
          arrivesFrom: 'Polimerizado con dímeros de [[αβ-tubulina|tubulin]] (PDB 1JFF) desde el cinetosoma cortical 9×3',
          inside: 'Nueve dobletes A/B de 13+10 protofilamentos (PDB 8G2Z), par central C1/C2, radios internos y complejos N-DRC cada 96 nm',
          deliversTo: 'Traduce el cizallamiento de la [[dineína|real-para-dynein]] en golpes efectivos y de retorno de los [[cilios|real-para-cilia]]',
          loop: 'El contacto de los radios con el par central alterna qué mitad del anillo de dobletes se activa en cada ciclo'
        },
        scientific:
          'Corte molecular a escala real del [[axonema móvil 9+2|real-para-axoneme]] eucariota (~250 nm de diámetro; repetición de doblete crio-EM PDB 8G2Z) en [[Paramecium|real-paramecium]]. Integra nueve dobletes externos de [[microtúbulos|microtubule]] (túbulo A de 13 protofilamentos + túbulo B de 10 estabilizado por proteínas internas MIP) unidos cada 96 nm por complejos N-DRC y radios hacia el par central C1/C2.',
        from: [
          { nodeId: 'tubulin', label: 'Dímeros de αβ-tubulina', cargo: 'Bloques de doblete PDB 1JFF' },
          { nodeId: 'real-para-dynein', label: 'Brazos de dineína', cargo: 'Fuerza cortante por ATP' }
        ],
        to: [
          { nodeId: 'real-para-cilia', label: 'Eje ciliar en movimiento', cargo: 'Onda de flexión propagada' },
          { nodeId: 'cilium', label: 'Cilio eucariota conservado', cargo: 'Arquitectura 9+2 universal' }
        ]
      }
    },

    dynein: {
      en: {
        subtitle: 'ATP-Stepping Axonemal Dynein Arms (PDB 7KZM)',
        simple:
          'Bolted every 24 nanometers along each outer rail of the [[9+2 axoneme|real-para-axoneme]], [[axonemal dynein|real-para-dynein]] arms hydrolyze ATP into ADP and [[phosphate|phosphate]] to pull neighboring [[microtubule|microtubule]] doublets past each other.',
        story:
          'At true molecular scale, swimming reveals itself as millions of tiny mechanical ratchets firing in sequence. Each outer dynein arm locks its tail permanently onto an A-tubule while projecting three massive AAA+ ring heads and slender stalks toward the adjacent B-tubule. Binding and splitting one [[magnesium|atom-mg]]-coordinated ATP tilts the linker lever, pulling the neighboring doublet baseward in an 8-nanometer step before fresh ATP detaches the stalk for the next stroke.',
        blueprint: {
          role: 'Mechanochemical AAA+ ATPase arm converting Mg2+-ATP hydrolysis into inter-doublet sliding force',
          arrivesFrom: 'Translated on [[80S ribosomes|ribosome]], pre-assembled in cytoplasm, docked every 24 nm on A-tubules, and fueled by [[mitochondrial|mitochondrion]] ATP',
          inside: 'Three-headed outer dynein arm (PDB 7KZM) with hexameric AAA+ ATPase rings, swing-arm linkers, and coiled-coil B-tubule stalks',
          deliversTo: 'Applies ~5-7 pN minus-end stepping strokes to neighboring B-tubules, flexing the [[9+2 axoneme|real-para-axoneme]]',
          loop: 'ATP -> ADP + Pi cleavage at AAA1 drives the power stroke; calcium sensors on light chains flip beat polarity during collisions'
        },
        scientific:
          'Native three-headed outer [[axonemal dynein|real-para-dynein]] complex (ODA; 24 nm axial repeat along A-tubules; cryo-EM PDB 7KZM) alongside inner dynein arms (96 nm repeat) inside the [[Paramecium|real-paramecium]] [[9+2 axoneme|real-para-axoneme]]. Each ~500 kDa heavy chain couples [[Mg2+|atom-mg]]-ATP hydrolysis at the AAA1 catalytic cleft (releasing ADP + [[Pi|phosphate]]) to linker remodeling and an ~8 nm minus-end power stroke (~5-7 pN) of the stalk MTBD along adjacent B-tubule [[tubulin|tubulin]].',
        from: [
          { nodeId: 'mitochondrion', label: 'Sub-Cortical ATP Supply', cargo: 'Mg2+-ATP catalytic fuel' },
          { nodeId: 'atom-p', label: 'ATP Phosphate Cleavage', cargo: 'ATP -> ADP + Pi energy drop' }
        ],
        to: [
          { nodeId: 'real-para-axoneme', label: 'Adjacent B-Tubule Rail', cargo: 'Inter-doublet sliding shear' },
          { nodeId: 'real-para-cilia', label: 'Metachronal Ciliary Beat', cargo: 'Rhythmic swimming power' }
        ]
      },
      es: {
        subtitle: 'Brazos de dineína axonemal impulsados por ATP (PDB 7KZM)',
        simple:
          'Fijados cada 24 nanómetros en cada riel externo del [[axonema 9+2|real-para-axoneme]], los brazos de [[dineína axonemal|real-para-dynein]] rompen ATP en ADP y [[fosfato|phosphate]] para traccionar los dobletes vecinos de [[microtúbulos|microtubule]].',
        story:
          'A escala molecular real, la natación se resuelve en millones de diminutos trinquetes mecánicos actuando en secuencia. Cada brazo externo de dineína ancla su cola de forma fija al túbulo A y extiende tres cabezas en anillo AAA+ con tallos finos hacia el túbulo B vecino. Al partir una molécula de ATP unida a [[magnesio|atom-mg]], su palanca se inclina y tira del doblete contiguo en un paso de 8 nanómetros antes de que otro ATP suelte el tallo para repetir el ciclo.',
        blueprint: {
          role: 'Brazo mecanoquímico ATPasa AAA+ que convierte la hidrólisis de Mg²⁺·ATP en deslizamiento entre dobletes',
          arrivesFrom: 'Traducido en [[ribosomas 80S|ribosome]], fijado cada 24 nm sobre el túbulo A y alimentado por ATP [[mitocondrial|mitochondrion]]',
          inside: 'Brazo externo tricefálico (PDB 7KZM) con anillos AAA+, palancas N-terminales y tallos coiled-coil hacia el túbulo B',
          deliversTo: 'Aplica golpes de ~5–7 pN hacia el extremo (−) sobre el túbulo B vecino para doblar el [[axonema 9+2|real-para-axoneme]]',
          loop: 'La escisión ATP → ADP + Pᵢ en AAA1 ejecuta el golpe efectivo; sensores de Ca²⁺ invierten el batido tras un choque'
        },
        scientific:
          'Complejo nativo tricefálico de [[dineína axonemal|real-para-dynein]] externa (ODA; paso axial de 24 nm sobre el túbulo A; crio-EM PDB 7KZM) junto a brazos internos (cada 96 nm) en el [[axonema 9+2|real-para-axoneme]] de [[Paramecium|real-paramecium]]. Cada cadena pesada (~500 kDa) acopla la hidrólisis de [[Mg²⁺|atom-mg]]·ATP en AAA1 (liberando ADP + [[Pᵢ|phosphate]]) a un golpe de ~8 nm (~5–7 pN) de su tallo sobre la [[tubulina|tubulin]] del túbulo B adyacente.',
        from: [
          { nodeId: 'mitochondrion', label: 'Suministro subcortical de ATP', cargo: 'Combustible Mg²⁺·ATP' },
          { nodeId: 'atom-p', label: 'Hidrólisis de fosfato', cargo: 'Energía de ATP → ADP + Pᵢ' }
        ],
        to: [
          { nodeId: 'real-para-axoneme', label: 'Doblete túbulo B vecino', cargo: 'Fuerza de cizallamiento' },
          { nodeId: 'real-para-cilia', label: 'Batido ciliar metácrono', cargo: 'Propulsión celular rítmica' }
        ]
      }
    },

    tubulin: {
      en: {
        subtitle: 'Alpha/Beta-Tubulin Heterodimer Bricks (PDB 1JFF)',
        simple:
          'Locked together as twin globular [[proteins|protein]], alpha- and beta-[[tubulin|tubulin]] snap head-to-tail into the sturdy hollow rails of the [[9+2 axoneme|real-para-axoneme]] and provide the exact handholds gripped by [[dynein|real-para-dynein]].',
        story:
          'Zooming down to 8 nanometers inside a doublet wall exposes the universal brick of eukaryotic [[microtubules|microtubule]]. Each twin dimer joins one GTP-locked alpha subunit to one nucleotide-sensing beta subunit, stacking end-to-end into polarized protofilaments that point their plus ends toward the ciliary tip. Inside long-lived [[Paramecium cilia|real-para-cilia]], enzymes tag the flexible outer tails of tubulin with acetyl, glutamate, and glycine groups that toughen the rails and fine-tune how [[axonemal dynein|real-para-dynein]] grips each step.',
        blueprint: {
          role: 'Polarized ~8 nm heterodimeric building block forming ciliary A/B doublets and dynein stepping tracks',
          arrivesFrom: 'Translated on [[80S ribosomes|ribosome]] from [[amino acids|amino-acid]], folded via chaperonin, and loaded with GTP',
          inside: '~100 kDa alpha-tubulin (~50 kDa) + beta-tubulin (~50 kDa) dimer (PDB 1JFF) decorated with stabilizing ciliary tail modifications',
          deliversTo: 'Assembles 13+10 protofilament [[microtubule|microtubule]] doublets in the [[9+2 axoneme|real-para-axoneme]] and kinetosomes',
          loop: 'Head-to-tail alpha/beta polarity fixes minus-end directionality so every dynein head pulls uniformly toward the cell base'
        },
        scientific:
          'Globular [[alpha/beta-tubulin|tubulin]] heterodimer (~100 kDa; ~8.0 x 4.5 x 4.0 nm; electron crystallography PDB 1JFF) polymerizing head-to-tail into the 13-protofilament A-tubule and 10-protofilament B-tubule of the [[Paramecium|real-paramecium]] [[9+2 axoneme|real-para-axoneme]]. Alpha-tubulin binds non-exchangeable GTP (N-site), while beta-tubulin binds hydrolyzable GTP/GDP (E-site). Ciliary doublets carry heavy K40 acetylation, polyglutamylation, and polyglycylation stabilizing resistance to ~10-40 Hz flexing and modulating [[axonemal dynein|real-para-dynein]] binding.',
        from: [
          { nodeId: 'ribosome', label: 'Cytosolic 80S Ribosomes', cargo: 'Alpha & beta polypeptides' },
          { nodeId: 'nucleotide', label: 'GTP Nucleotide Pool', cargo: 'Assembly nucleotide cofactor' }
        ],
        to: [
          { nodeId: 'real-para-axoneme', label: '9+2 Doublet Protofilaments', cargo: 'Polarized structural rails' },
          { nodeId: 'real-para-dynein', label: 'Dynein Stalk Binding Site', cargo: '8 nm stepping footholds' }
        ]
      },
      es: {
        subtitle: 'Ladrillos heterodiméricos de αβ-tubulina (PDB 1JFF)',
        simple:
          'Unidas como una pareja inseparable de [[proteínas|protein]] globulares, las subunidades alfa y beta de [[tubulina|tubulin]] se apilan cabeza con cola para levantar los rieles del [[axonema 9+2|real-para-axoneme]] y ofrecer los apoyos que agarra la [[dineína|real-para-dynein]].',
        story:
          'Al bajar hasta 8 nanómetros en la pared de un doblete aparece el bloque universal de los [[microtúbulos|microtubule]] eucariotas. Cada dímero enlaza una subunidad alfa fijada a GTP con una subunidad beta sensible a nucleótidos, formando protofilamentos polares cuyo extremo más apunta hacia la punta del cilio. En los [[cilios de Paramecium|real-para-cilia]], enzimas añaden acetilación, poliglutamilación y poliglicilación sobre sus colas externas para reforzar los dobletes y ajustar el agarre de la [[dineína|real-para-dynein]].',
        blueprint: {
          role: 'Bloque heterodimérico polar de ~8 nm que construye los dobletes ciliares y los carriles de la dineína',
          arrivesFrom: 'Traducido en [[ribosomas 80S|ribosome]] a partir de [[aminoácidos|amino-acid]], plegado por chaperoninas y cargado con GTP',
          inside: 'Dímero de ~100 kDa de α-tubulina (~50 kDa) y β-tubulina (~50 kDa; PDB 1JFF) con modificaciones ciliares estabilizadoras',
          deliversTo: 'Polimeriza los dobletes de 13+10 protofilamentos en el [[axonema 9+2|real-para-axoneme]] y los cinetosomas',
          loop: 'La polaridad cabeza-cola α/β orienta cada cabeza de dineína para traccionar siempre hacia la base celular'
        },
        scientific:
          'Heterodímero globular de [[αβ-tubulina|tubulin]] (~100 kDa; ~8,0 × 4,5 × 4,0 nm; cristalografía electrónica PDB 1JFF) polimerizado cabeza con cola en los túbulos A (13 protofilamentos) y B (10 protofilamentos) del [[axonema 9+2|real-para-axoneme]] de [[Paramecium|real-paramecium]]. La α-tubulina fija GTP no intercambiable (sitio N) y la β-tubulina hidroliza GTP (sitio E); la acetilación en K40 y la poliglutamilación protegen frente al batido de ~10–40 Hz y regulan a la [[dineína|real-para-dynein]].',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S citosólicos', cargo: 'Polipéptidos α y β' },
          { nodeId: 'nucleotide', label: 'Reserva de GTP', cargo: 'Cofactor de ensamblaje' }
        ],
        to: [
          { nodeId: 'real-para-axoneme', label: 'Protofilamentos 9+2', cargo: 'Rieles estructurales polares' },
          { nodeId: 'real-para-dynein', label: 'Anclaje del tallo de dineína', cargo: 'Apoyos de paso de 8 nm' }
        ]
      }
    }
  },

  'plasmodium_realistic.html': {
    rbc: {
      en: {
        subtitle: 'The Biconcave Human Red Blood Cell Host',
        simple:
          'Measuring 7.5 micrometers across and packed with oxygen-carrying [[hemoglobin|real-plas-hemoglobin]], this human erythrocyte has discarded its [[nucleus|nucleus]] and [[mitochondria|mitochondrion]] - offering [[Plasmodium|real-plasmodium]] a nutrient-rich shelter hidden from immune attack.',
        story:
          'Healthy red blood cells trade away every internal organelle to squeeze through narrow capillaries packed brimful with roughly 270 million [[hemoglobin|real-plas-hemoglobin]] tetramers. Because an erythrocyte cannot divide or run immune presentation on its own, [[Plasmodium falciparum|real-plasmodium]] targets it relentlessly: after driving inside via its [[apical complex|real-plas-apical]], the parasite exports hundreds of remodeling [[proteins|protein]] to open new nutrient channels and raise sticky surface knobs that glue infected red cells onto blood-vessel walls away from spleen filters.',
        blueprint: {
          role: 'Anucleate human erythrocyte (~7.5 x 2.0 micrometers) invaded and remodeled as host niche by [[Plasmodium|real-plasmodium]]',
          arrivesFrom: 'Circulating bloodstream erythrocytes displaying surface Basigin (CD147) and glycophorin receptors',
          inside: 'Flexible spectrin-actin cortical meshwork beneath a [[plasma membrane|plasma-membrane]] enclosing ~330 mg/mL [[hemoglobin|real-plas-hemoglobin]]',
          deliversTo: 'Supplies [[hemoglobin|real-plas-hemoglobin]] amino acids and immune-sheltered space until 16-32 merozoites burst the cell at ~48 h',
          loop: 'Exported parasite PfEMP1 knobs anchor infected RBCs in capillaries, causing severe cerebral and microvascular malaria'
        },
        scientific:
          'Mature human erythrocyte (red blood cell; biconcave disc ~7.5 micrometers diameter x ~2.0 micrometers rim, ~90 fL volume) devoid of [[nucleus|nucleus]], [[mitochondria|mitochondrion]], and [[ribosomes|ribosome]] while containing ~5 mM (~270 million molecules/cell) [[hemoglobin|real-plas-hemoglobin]] (PDB 1GZX). Lacks endogenous endocytosis, forcing [[Plasmodium falciparum|real-plasmodium]] merozoites (~1.5 micrometers) to drive active entry via Basigin/PfRH5 (PDB 4U0Q) and subsequently remodel the erythrocyte membrane with PSAC nutrient channels and cytoadhesive PfEMP1 knobs.',
        from: [
          { nodeId: 'real-cell', label: 'Human Erythroid Lineage', cargo: 'Circulating biconcave RBCs' },
          { nodeId: 'real-plas-hemoglobin', label: 'Packed Hemoglobin Pool', cargo: '~270M O2-carrier tetramers' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Intraerythrocytic Niche', cargo: 'Sheltered 48 h growth chamber' },
          { nodeId: 'real-plas-digestive', label: 'Hemoglobin Endocytosis', cargo: 'Bulk amino-acid supply' }
        ]
      },
      es: {
        subtitle: 'El glóbulo rojo humano bicóncavo huésped',
        simple:
          'Con 7,5 micrómetros de diámetro y repleto de [[hemoglobina|real-plas-hemoglobin]] portadora de oxígeno, este eritrocito humano prescinde de [[núcleo|nucleus]] y [[mitocondrias|mitochondrion]], ofreciendo a [[Plasmodium|real-plasmodium]] un refugio rico en alimento lejos de la defensa inmunitaria.',
        story:
          'Los glóbulos rojos maduros sacrifican todos sus orgánulos internos para deslizarse por capilares estrechos cargados con unos 270 millones de tetrámeros de [[hemoglobina|real-plas-hemoglobin]]. Al carecer de núcleo y presentación antigénica, el eritrocito se convierte en el blanco ideal de [[Plasmodium falciparum|real-plasmodium]]: tras entrar con su [[complejo apical|real-plas-apical]], el parásito exporta cientos de [[proteínas|protein]] para abrir canales de nutrientes y levantar botones adhesivos que pegan el glóbulo infectado a los vasos sanguíneos evitando el bazo.',
        blueprint: {
          role: 'Eritrocito humano anucleado (~7,5 × 2,0 µm) invadido y remodelado como nicho por [[Plasmodium|real-plasmodium]]',
          arrivesFrom: 'Eritrocitos circulantes que exponen receptores superficiales Basigin (CD147) y glucoforinas',
          inside: 'Malla cortical elástica de espectrina-actina bajo la [[membrana plasmática|plasma-membrane]] encerrando ~330 mg/mL de [[hemoglobina|real-plas-hemoglobin]]',
          deliversTo: 'Aporta aminoácidos de [[hemoglobina|real-plas-hemoglobin]] y cobijo inmunitario hasta la lisis con 16–32 merozoítos a las ~48 h',
          loop: 'Los botones exportados PfEMP1 adhieren eritrocitos infectados al endotelio capilar causando malaria grave'
        },
        scientific:
          'Eritrocito humano maduro (disco bicóncavo de ~7,5 µm de diámetro × ~2,0 µm de borde, volumen ~90 fL) carente de [[núcleo|nucleus]], [[mitocondrias|mitochondrion]] y [[ribosomas|ribosome]], concentrando ~5 mM (~270 millones de copias) de [[hemoglobina|real-plas-hemoglobin]] (PDB 1GZX). Carece de endocitosis propia, por lo que los merozoítos de [[Plasmodium falciparum|real-plasmodium]] (~1,5 µm) fuerzan su entrada vía Basigin/PfRH5 (PDB 4U0Q) e instalan luego canales PSAC y botones citoadhesivos PfEMP1.',
        from: [
          { nodeId: 'real-cell', label: 'Linaje eritroide humano', cargo: 'Eritrocitos bicóncavos maduros' },
          { nodeId: 'real-plas-hemoglobin', label: 'Reserva de hemoglobina', cargo: '~270 millones de tetrámeros' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Nicho intraeritrocitario', cargo: 'Cámara de crecimiento de 48 h' },
          { nodeId: 'real-plas-digestive', label: 'Endocitosis de hemoglobina', cargo: 'Suministro masivo de aminoácidos' }
        ]
      }
    },

    pvm: {
      en: {
        subtitle: 'The Parasitophorous Vacuole Membrane Bubble',
        simple:
          'Wrapping [[Plasmodium|real-plasmodium]] inside the human red blood cell, the parasitophorous vacuole membrane (PVM) is a custom lipid boundary built during invasion that separates the parasite from host cytosol while gating nutrient and protein traffic.',
        story:
          'Like the inclusion membrane built by the bacterial parasite [[Chlamydia|real-chlamydia]], this enclosing bubble insulates an intracellular invader inside its host - yet here the architect is a full eukaryote. As the merozoite glides through the [[AMA1-RON2 moving junction|real-plas-apical]], its rhoptries inject fresh [[phospholipids|phospholipid]] and cholesterol-remodeling effectors into the invaginating red-cell [[plasma membrane|plasma-membrane]], sealing behind it a sealed PVM studded with PTEX translocons that export hundreds of parasite effectors out to reshape the erythrocyte.',
        blueprint: {
          role: 'Protective host-parasite interface bubble enclosing intraerythrocytic [[Plasmodium|real-plasmodium]] inside the RBC',
          arrivesFrom: 'Formed during invasion from invaginated RBC [[plasma membrane|plasma-membrane]] remodeled with secreted [[rhoptry|real-plas-apical]] lipids and proteins',
          inside: 'Selective [[phospholipid|phospholipid]] bilayer pierced by EXP2 nutrient pores and the ATP-powered PTEX protein-export translocon',
          deliversTo: 'Admits plasma solutes into the parasite and exports PEXEL remodeling effectors into the host RBC',
          loop: 'Direct functional parallel to the bacterial inclusion of [[Chlamydia|real-chlamydia]], despite radically different eukaryotic biology'
        },
        scientific:
          'Parasitophorous vacuole membrane (PVM; ~7 nm [[phospholipid|phospholipid]] bilayer derived from host erythrocyte [[plasma membrane|plasma-membrane]] enriched in [[rhoptry|real-plas-apical]]-secreted lipids and parasite integral proteins such as EXP1/EXP2) sealing [[Plasmodium falciparum|real-plasmodium]] inside the red blood cell. Houses the multimeric PTEX translocon (HSP101 AAA+ unfoldase, PTEX150, EXP2 pore) exporting >400 host-remodeling proteins while EXP2 also serves as a nutrient channel; directly contrasted with the Inc-decorated inclusion of [[Chlamydia trachomatis|real-chlamydia]].',
        from: [
          { nodeId: 'real-plas-apical', label: 'Rhoptry Bulb Lipids', cargo: 'Secreted vacuole membrane patch' },
          { nodeId: 'plasma-membrane', label: 'Invaginated RBC Bilayer', cargo: 'Host lipid contribution' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Protected Parasite Core', cargo: 'Nutrient uptake & shelter' },
          { nodeId: 'real-chlamydia', label: 'Chlamydia Inclusion', cargo: 'Bacterial vs. eukaryotic contrast' }
        ]
      },
      es: {
        subtitle: 'La membrana de la vacuola parasitófora (PVM)',
        simple:
          'Envolviendo a [[Plasmodium|real-plasmodium]] dentro del glóbulo rojo humano, la membrana de la vacuola parasitófora (PVM) es una frontera lipídica fabricada durante la invasión que aísla al parásito y regula el tráfico de nutrientes y proteínas.',
        story:
          'Al igual que la membrana de inclusión de la bacteria [[Chlamydia|real-chlamydia]], esta burbuja resguarda a un invasor intracelular dentro de su huésped, pero aquí el arquitecto es un eucariota completo. Mientras el merozoíto atraviesa la [[unión móvil AMA1–RON2|real-plas-apical]], sus roptrias inyectan [[fosfolípidos|phospholipid]] y efectores en la [[membrana plasmática|plasma-membrane]] invaginada del eritrocito, cerrando una PVM equipada con translocones PTEX para exportar cientos de proteínas remodeladoras hacia el huésped.',
        blueprint: {
          role: 'Burbuja protectora de interfaz huésped-parásito que encierra a [[Plasmodium|real-plasmodium]] dentro del eritrocito',
          arrivesFrom: 'Formada al invadir con [[membrana plasmática|plasma-membrane]] eritrocitaria invaginada y lípidos secretados por las [[roptrias|real-plas-apical]]',
          inside: 'Bicapa selectiva de [[fosfolípidos|phospholipid]] atravesada por poros de nutrientes EXP2 y el translocón exportador PTEX impulsado por ATP',
          deliversTo: 'Permite el ingreso de solutos al parásito y exporta efectores PEXEL remodeladores hacia el eritrocito',
          loop: 'Equivalente funcional directo de la inclusión bacteriana de [[Chlamydia|real-chlamydia]] sobre una base eucariota distinta'
        },
        scientific:
          'Membrana de la vacuola parasitófora (PVM; bicapa de [[fosfolípidos|phospholipid]] de ~7 nm derivada de la [[membrana plasmática|plasma-membrane]] eritrocitaria enriquecida con lípidos [[roptriales|real-plas-apical]] y proteínas integrales EXP1/EXP2) que aísla a [[Plasmodium falciparum|real-plasmodium]]. Alberga el translocón multimérico PTEX (HSP101, PTEX150 y poro EXP2) que exporta >400 efectores remodeladores, en paralelo evolutivo convergente con la inclusión de [[Chlamydia trachomatis|real-chlamydia]].',
        from: [
          { nodeId: 'real-plas-apical', label: 'Lípidos del bulbo roptrial', cargo: 'Aporte membranoso secretado' },
          { nodeId: 'plasma-membrane', label: 'Bicapa eritrocitaria', cargo: 'Invaginación del huésped' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Núcleo protegido del parásito', cargo: 'Refugio y paso de nutrientes' },
          { nodeId: 'real-chlamydia', label: 'Inclusión de Chlamydia', cargo: 'Contraste bacteria vs. eucariota' }
        ]
      }
    },

    imc: {
      en: {
        subtitle: 'The Inner Membrane Complex (Homologous Alveolar Chassis)',
        simple:
          'Lining the inside of [[Plasmodium|real-plasmodium]] just 25 nanometers below its outer [[plasma membrane|plasma-membrane]], the inner membrane complex (IMC) consists of flattened sacs that anchor the [[glideosome|real-plas-glideosome]] motor - directly homologous to the pellicle alveoli of [[Paramecium|real-paramecium]].',
        story:
          'Free-living [[Paramecium|real-paramecium]] and parasitic [[Plasmodium|real-plasmodium]] look worlds apart, yet peeling back the outer membrane uncovers their shared family hallmark inside Supergroup Alveolata. Directly beneath the merozoite surface sits a double-membrane sac layer braced by sub-pellicular [[microtubules|microtubule]] and alveolin filaments. By locking GAP50 and GAP45 anchors solidly into this rigid inner chassis, the [[PfMyoA glideosome|real-plas-glideosome]] gains a firm footing to pull surface grips rearward during red blood cell invasion.',
        blueprint: {
          role: 'Rigid double-membrane sub-pellicular alveolar scaffold anchoring the [[PfMyoA glideosome|real-plas-glideosome]]',
          arrivesFrom: 'Assembled during daughter merozoite budding from vesicular sacs braced by sub-pellicular [[microtubules|microtubule]] and alveolins',
          inside: 'Flattened double-membrane cortical alveoli (~25-30 nm beneath outer [[plasma membrane|plasma-membrane]]) studded with GAP50/GAP40 anchors',
          deliversTo: 'Provides mechanical backing for [[PfMyoA-MTIP|real-plas-glideosome]] pulling traction and maintains merozoite polarity',
          loop: 'Direct evolutionary homolog of the cortical pellicle alveoli in free-living [[Paramecium|real-paramecium]]'
        },
        scientific:
          'Inner membrane complex (IMC) of [[Plasmodium falciparum|real-plasmodium]] merozoites: flattened double-membrane cortical vesicles positioned ~25-30 nm beneath the [[plasma membrane|plasma-membrane]], supported internally by sub-pellicular [[microtubules|microtubule]] and filamentous alveolin meshworks. Evolutionarily homologous to cortical alveoli of [[Paramecium|real-paramecium]] (uniting Apicomplexa and Ciliophora within Alveolata). Transmembrane IMC proteins GAP50 and GAP40 tether GAP45 and the [[PfMyoA-MTIP glideosome|real-plas-glideosome]] (PDB 6YCX) to resist invasion torque.',
        from: [
          { nodeId: 'microtubule', label: 'Sub-Pellicular Microtubules', cargo: 'Internal structural bracing' },
          { nodeId: 'phospholipid', label: 'Alveolar Vesicle Bilayers', cargo: 'Flattened double-membrane sacs' }
        ],
        to: [
          { nodeId: 'real-plas-glideosome', label: 'PfMyoA-MTIP Glideosome', cargo: 'Firm GAP45/GAP50 motor anchor' },
          { nodeId: 'real-paramecium', label: 'Paramecium Pellicle Alveoli', cargo: 'Shared alveolate ancestry' }
        ]
      },
      es: {
        subtitle: 'El complejo de membrana interna (IMC alveolar)',
        simple:
          'Situado a apenas 25 nanómetros bajo la [[membrana plasmática|plasma-membrane]] externa de [[Plasmodium|real-plasmodium]], el complejo de membrana interna (IMC) forma sacos aplanados que anclan el motor [[glideosoma|real-plas-glideosome]], homólogos directos de los alvéolos de [[Paramecium|real-paramecium]].',
        story:
          '[[Paramecium|real-paramecium]] de vida libre y el parásito [[Plasmodium|real-plasmodium]] parecen opuestos, pero retirar la membrana externa revela su sello evolutivo compartido dentro de Alveolata. Justo debajo de la superficie del merozoíto se extiende una lámina de sacos de doble membrana reforzada por [[microtúbulos|microtubule]] subpeliculares y alveolinas. Al fijar en este chasis rígido las proteínas GAP50 y GAP45, el [[glideosoma PfMyoA|real-plas-glideosome]] obtiene un punto de apoyo firme para empujar al parásito dentro del eritrocito.',
        blueprint: {
          role: 'Andamiaje alveolar subpelicular rígido de doble membrana que ancla el [[glideosoma PfMyoA|real-plas-glideosome]]',
          arrivesFrom: 'Ensamblado durante la gemación de merozoítos con vesículas aplanadas sobre [[microtúbulos|microtubule]] subpeliculares y alveolinas',
          inside: 'Alvéolos corticales de doble membrana (~25–30 nm bajo la [[membrana plasmática|plasma-membrane]]) con anclajes GAP50/GAP40',
          deliversTo: 'Ofrece apoyo mecánico firme a la tracción de [[PfMyoA–MTIP|real-plas-glideosome]] y mantiene la polaridad del merozoíto',
          loop: 'Homólogo evolutivo directo de los alvéolos corticales de la película de [[Paramecium|real-paramecium]]'
        },
        scientific:
          'Complejo de membrana interna (IMC) del merozoíto de [[Plasmodium falciparum|real-plasmodium]]: sacos corticales aplanados de doble membrana situados a ~25–30 nm bajo la [[membrana plasmática|plasma-membrane]], sostenidos internamente por [[microtúbulos|microtubule]] subpeliculares y redes de alveolinas. Homólogo evolutivo de los alvéolos de [[Paramecium|real-paramecium]] (supergrupo Alveolata); sus proteínas transmembrana GAP50/GAP40 anclan GAP45 y el [[glideosoma PfMyoA–MTIP|real-plas-glideosome]] (PDB 6YCX).',
        from: [
          { nodeId: 'microtubule', label: 'Microtúbulos subpeliculares', cargo: 'Soporte estructural interno' },
          { nodeId: 'phospholipid', label: 'Bicapas alveolares', cargo: 'Sacos planos de doble membrana' }
        ],
        to: [
          { nodeId: 'real-plas-glideosome', label: 'Glideosoma PfMyoA–MTIP', cargo: 'Anclaje firme vía GAP45/GAP50' },
          { nodeId: 'real-paramecium', label: 'Alvéolos de Paramecium', cargo: 'Ancestría alveolada común' }
        ]
      }
    },

    apical_complex: {
      en: {
        subtitle: 'Polarized Anterior Invasion Assembly & Polar Rings',
        simple:
          'Crowning the tapered front tip of [[Plasmodium|real-plasmodium]], the [[apical complex|real-plas-apical]] combines reinforcing polar rings with secretory micronemes and rhoptries to orient the merozoite and orchestrate red blood cell entry.',
        story:
          'Named for this distinctive anterior apparatus, Phylum Apicomplexa packs its entire invasion sequence into the narrow front nose of a 1.5-micrometer merozoite. Stacked apical polar rings anchor the sub-pellicular [[microtubule|microtubule]] ribs and frame a central secretory nozzle where cigar-shaped micronemes and tear-drop rhoptries discharge in timed order. Within seconds of touching a human erythrocyte, the tip locks onto host Basigin, injects the RON2 anchor, and hands pulling control straight over to the [[glideosome|real-plas-glideosome]].',
        blueprint: {
          role: 'Master anterior invasion hub coordinating docking, timed organelle discharge, and entry alignment',
          arrivesFrom: 'Polar rings nucleate sub-pellicular [[microtubules|microtubule]] while secretory pathways load micronemes and rhoptries',
          inside: 'Concentric apical polar rings guiding sequential exocytosis from micronemes (PfRH5/AMA1) and paired rhoptries (RON2/4/5)',
          deliversTo: 'Establishes the [[AMA1-RON2 moving junction|real-plas-apical]] and initiates [[glideosome|real-plas-glideosome]]-driven RBC entry',
          loop: 'Sequential Ca2+ pulses gate microneme release before rhoptry discharge so invasion fires only on valid RBC targets'
        },
        scientific:
          'Signature anterior [[apical complex|real-plas-apical]] (~300-600 nm apical pole) defining Phylum Apicomplexa in [[Plasmodium falciparum|real-plasmodium]]. Integrates stacked electron-dense apical polar rings (microtubule-organizing center nucleating sub-pellicular [[microtubules|microtubule]]) framing the apical exocytic site for micronemes (~100-150 nm) and paired bulbous rhoptries (~300-600 nm). Coordinates PfRH5-Basigin commitment (PDB 4U0Q), RON2 injection, [[AMA1-RON2 moving junction|real-plas-apical]] assembly (PDB 3SRI), and active [[glideosome|real-plas-glideosome]] entry.',
        from: [
          { nodeId: 'microtubule', label: 'Sub-Pellicular Microtubules', cargo: 'Polar ring structural origin' },
          { nodeId: 'ribosome', label: '80S Ribosome Secretory Route', cargo: 'Pre-loaded invasion ligands' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'PfRH5 & AMA1-RON2 Junction', cargo: 'Timed docking & entry ring' },
          { nodeId: 'real-plas-glideosome', label: 'PfMyoA Glideosome', cargo: 'Aligned traction axis' }
        ]
      },
      es: {
        subtitle: 'Aparato apical polarizado y anillos polares',
        simple:
          'Coronando la punta afilada de [[Plasmodium|real-plasmodium]], el [[complejo apical|real-plas-apical]] combina anillos polares rígidos con micronemas y roptrias secretores para orientar al merozoíto y dirigir la invasión del glóbulo rojo.',
        story:
          'El filo Apicomplexa debe su nombre a este dispositivo frontal concentrado en el extremo de un merozoíto de 1,5 micrómetros. Sus anillos polares apicales nuclean los [[microtúbulos|microtubule]] subpeliculares y enmarcan una boquilla central por donde descargan en orden preciso los micronemas y las roptrias. En segundos tras rozar un eritrocito humano, esta punta se acopla a Basigin, inyecta el anclaje RON2 y cede el arrastre al [[glideosoma|real-plas-glideosome]].',
        blueprint: {
          role: 'Centro invasivo anterior que coordina acoplamiento, secreción escalonada y alineación de entrada',
          arrivesFrom: 'Los anillos polares nuclean [[microtúbulos|microtubule]] subpeliculares mientras la vía secretora carga micronemas y roptrias',
          inside: 'Anillos polares concéntricos guiando la exocitosis ordenada de micronemas (PfRH5/AMA1) y roptrias pareadas (RON2/4/5)',
          deliversTo: 'Ensambla la [[unión móvil AMA1–RON2|real-plas-apical]] e inicia la entrada al eritrocito impulsada por el [[glideosoma|real-plas-glideosome]]',
          loop: 'Pulsos sucesivos de Ca²⁺ liberan primero micronemas y luego roptrias para disparar la invasión solo sobre eritrocitos válidos'
        },
        scientific:
          '[[Complejo apical|real-plas-apical]] anterior característico del filo Apicomplexa (~300–600 nm) en [[Plasmodium falciparum|real-plasmodium]]. Reúne anillos polares apicales electrodensos (centro nucleador de [[microtúbulos|microtubule]] subpeliculares) en torno al punto de exocitosis de micronemas (~100–150 nm) y roptrias pareadas (~300–600 nm), coordinando PfRH5–Basigin (PDB 4U0Q), la inyección de RON2 y la [[unión móvil AMA1–RON2|real-plas-apical]] (PDB 3SRI).',
        from: [
          { nodeId: 'microtubule', label: 'Microtúbulos subpeliculares', cargo: 'Origen en anillos polares' },
          { nodeId: 'ribosome', label: 'Vía secretora 80S', cargo: 'Ligandos de invasión cargados' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'PfRH5 y unión AMA1–RON2', cargo: 'Acoplamiento y anillo móvil' },
          { nodeId: 'real-plas-glideosome', label: 'Glideosoma PfMyoA', cargo: 'Eje alineado de tracción' }
        ]
      }
    },

    rhoptries: {
      en: {
        subtitle: 'Paired Tear-Drop Rhoptries Injecting RON2 & Vacuole Lipids',
        simple:
          'Hanging in a matched pair behind the tip of [[Plasmodium|real-plasmodium]], tear-drop rhoptries fire directly into the human red blood cell membrane to plant the parasite\'s own docking receptor and build its protective vacuole.',
        story:
          'Momentarily after PfRH5 locks onto host Basigin, these two club-shaped secretory organelles discharge through the narrow nozzle of the [[apical complex|real-plas-apical]]. Their slender necks fire first, injecting the RON2/RON4/RON5 protein complex straight through the erythrocyte [[plasma membrane|plasma-membrane]] so parasite AMA1 can clasp RON2 into a sealed moving junction. Immediately behind them, the wide rhoptry bulbs squirt [[phospholipids|phospholipid]] and regulatory proteins that inflate and sculpt the enclosing parasitophorous vacuole.',
        blueprint: {
          role: 'Paired apical secretory organelles planting the host-side moving-junction receptor and building the PVM',
          arrivesFrom: 'Biogenically assembled during schizogony with neck (RON) and bulb (RhopH/RAP) [[proteins|protein]] from [[80S ribosomes|ribosome]]',
          inside: 'Two ~300-600 nm tear-drop vesicles compartmentalized into a narrow RON2/4/5 neck and a lipid-rich effector bulb',
          deliversTo: 'Injects RON2 into the RBC [[plasma membrane|plasma-membrane]] for the [[moving junction|real-plas-apical]] and supplies lipids for the PVM',
          loop: 'Triggered strictly downstream of PfRH5-Basigin Ca2+ signaling so their one-shot payload fires only at host contact'
        },
        scientific:
          'Paired club-shaped apical secretory organelles (rhoptries; ~300-600 nm length) inside [[Plasmodium falciparum|real-plasmodium]] merozoites, structurally partitioned into a slender ducted neck and bulbous body. Triggered by PfRH5-Basigin-induced Ca2+ entry, rhoptry necks translocate the RON2/RON4/RON5 complex across the erythrocyte [[plasma membrane|plasma-membrane]] to form the [[AMA1-RON2 moving junction|real-plas-apical]] (PDB 3SRI), while rhoptry bulbs discharge [[phospholipids|phospholipid]], RhopH1-3 (PSAC channel assembly), and RAP effectors constructing the PVM.',
        from: [
          { nodeId: 'ribosome', label: '80S Ribosome Secretory Route', cargo: 'RON & RhopH effector proteins' },
          { nodeId: 'real-plas-apical', label: 'PfRH5-Basigin Trigger', cargo: 'Ca2+ exocytosis commit signal' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'AMA1-RON2 Moving Junction', cargo: 'Injected host-side RON2 anchor' },
          { nodeId: 'phospholipid', label: 'Nascent PVM Bilayer', cargo: 'Rhoptry-bulb lipids & RhopH' }
        ]
      },
      es: {
        subtitle: 'Roptrias pareadas inyectoras de RON2 y lípidos vacuolares',
        simple:
          'Suspendidas por pares tras la punta de [[Plasmodium|real-plasmodium]], estas roptrias con forma de lágrima disparan hacia la membrana del glóbulo rojo para instalar el receptor de entrada del parásito y construir su vacuola protectora.',
        story:
          'Instantes después de que PfRH5 se una a Basigin del huésped, estos dos orgánulos secretores piriformes descargan por la boquilla del [[complejo apical|real-plas-apical]]. Primero dispara su cuello estrecho, inyectando el complejo RON2/RON4/RON5 en la [[membrana plasmática|plasma-membrane]] del eritrocito para que AMA1 sujete a RON2 y cierre la unión móvil. Justo detrás, los bulbos liberan [[fosfolípidos|phospholipid]] y proteínas que moldean la vacuola parasitófora.',
        blueprint: {
          role: 'Orgánulos secretores apicales pareados que instalan el receptor RON2 en el huésped y forman la PVM',
          arrivesFrom: 'Ensambladas durante la esquizogonia con [[proteínas|protein]] de cuello (RON) y bulbo (RhopH/RAP) de [[ribosomas 80S|ribosome]]',
          inside: 'Dos vesículas piriformes de ~300–600 nm divididas en un cuello con RON2/4/5 y un bulbo rico en lípidos y efectores',
          deliversTo: 'Inyecta RON2 en la [[membrana plasmática|plasma-membrane]] eritrocitaria para la [[unión móvil|real-plas-apical]] y aporta lípidos a la PVM',
          loop: 'Se disparan solo tras la señal de Ca²⁺ inducida por PfRH5–Basigin para no gastar su carga única antes de tiempo'
        },
        scientific:
          'Orgánulos secretores apicales pareados con forma de clava (roptrias; ~300–600 nm) en merozoítos de [[Plasmodium falciparum|real-plasmodium]], divididos en cuello estrecho y bulbo. Tras la señalización de Ca²⁺ por PfRH5–Basigin, el cuello transloca RON2/RON4/RON5 a la [[membrana plasmática|plasma-membrane]] del eritrocito para formar la [[unión móvil AMA1–RON2|real-plas-apical]] (PDB 3SRI), mientras el bulbo descarga [[fosfolípidos|phospholipid]] y complejos RhopH1–3.',
        from: [
          { nodeId: 'ribosome', label: 'Vía secretora 80S', cargo: 'Efectores RON y RhopH' },
          { nodeId: 'real-plas-apical', label: 'Disparo PfRH5–Basigin', cargo: 'Señal de Ca²⁺ irreversible' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Unión móvil AMA1–RON2', cargo: 'Anclaje RON2 en el eritrocito' },
          { nodeId: 'phospholipid', label: 'Bicapa PVM naciente', cargo: 'Lípidos del bulbo y RhopH' }
        ]
      }
    },

    micronemes: {
      en: {
        subtitle: 'First-Wave Cigar-Shaped Adhesin Vesicles',
        simple:
          'Clustered tightly around the front tip of [[Plasmodium|real-plasmodium]], small cigar-shaped micronemes fire first on contact with a red blood cell, coating the merozoite surface with sticky gripping [[proteins|protein]] such as AMA1 and EBA-175.',
        story:
          'Before a free merozoite can commit to entering a human erythrocyte, it must reorient its pointed tip straight against the host bilayer and deploy its docking ligands. Sensing low-potassium bloodstream cues and internal calcium spikes, dozens of 120-nanometer micronemes fuse with the anterior [[plasma membrane|plasma-membrane]]. They release adhesins including EBA-175, PfRH5 partners, and AMA1, handing the parasite both initial host recognition and the parasite-side half of the [[AMA1-RON2 moving junction|real-plas-apical]].',
        blueprint: {
          role: 'First-wave Ca2+-triggered secretory vesicles deploying merozoite surface adhesins and AMA1',
          arrivesFrom: 'Synthesized on [[80S ribosomes|ribosome]] and trafficked into small apical secretory [[vesicles|vesicle]] during merozoite maturation',
          inside: 'Clustered ~100-150 nm cigar-shaped organelles packed with EBA-175, TRAP-family adhesins, and apical membrane antigen 1 (AMA1)',
          deliversTo: 'Coats the anterior merozoite [[plasma membrane|plasma-membrane]] to orient attachment and assemble the [[moving junction|real-plas-apical]]',
          loop: 'Cytosolic Ca2+ waves triggered by host contact fire micronemes first, setting up rhoptry discharge moments later'
        },
        scientific:
          'Compact cigar-shaped apical secretory organelles (micronemes; ~100-150 nm length x ~40-60 nm width) clustered beneath the polar rings of [[Plasmodium falciparum|real-plasmodium]]. Regulated by cGMP-PKG and CDPK1/Ca2+ signaling upon egress and RBC contact, micronemes undergo first-wave exocytosis deploying transmembrane adhesins (EBA-175, MTRAP, and AMA1) onto the merozoite [[plasma membrane|plasma-membrane]] to drive apical reorientation, [[PfRH5|real-plas-apical]] presentation, and [[AMA1-RON2|real-plas-apical]] (PDB 3SRI) junction formation.',
        from: [
          { nodeId: 'ribosome', label: '80S Ribosome Secretory Route', cargo: 'AMA1 & EBA adhesin precursors' },
          { nodeId: 'vesicle', label: 'Apical Secretory Trafficking', cargo: 'Sorted micronemal cargo' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Merozoite Tip & AMA1', cargo: 'First-wave surface adhesins' },
          { nodeId: 'real-plas-glideosome', label: 'Transmembrane Adhesin Tails', cargo: 'Force coupling to PfActI' }
        ]
      },
      es: {
        subtitle: 'Vesículas micronemales de adhesinas en primera oleada',
        simple:
          'Agrupados en la punta anterior de [[Plasmodium|real-plasmodium]], los pequeños micronemas en forma de puro descargan primero al tocar un glóbulo rojo, cubriendo al merozoíto con [[proteínas|protein]] de agarre como AMA1 y EBA-175.',
        story:
          'Antes de comprometerse a invadir un eritrocito humano, el merozoíto debe girar su polo apical directo hacia la bicapa del huésped y exponer sus ligandos de acoplamiento. Al detectar el entorno sanguíneo y pulsos internos de calcio, decenas de micronemas de 120 nanómetros se fusionan con la [[membrana plasmática|plasma-membrane]] anterior. Liberan EBA-175 y AMA1, otorgando al parásito el reconocimiento inicial y la mitad parasitaria de la [[unión móvil AMA1–RON2|real-plas-apical]].',
        blueprint: {
          role: 'Vesículas secretoras de primera oleada activadas por Ca²⁺ que despliegan adhesinas y AMA1 en superficie',
          arrivesFrom: 'Sintetizadas en [[ribosomas 80S|ribosome]] y clasificadas en [[vesículas|vesicle]] secretoras apicales durante la maduración',
          inside: 'Orgánulos en forma de puro de ~100–150 nm cargados de EBA-175, adhesinas tipo TRAP y antígeno apical AMA1',
          deliversTo: 'Tapiza la [[membrana plasmática|plasma-membrane]] apical para orientar el contacto y armar la [[unión móvil|real-plas-apical]]',
          loop: 'Las ondas de Ca²⁺ citosólico disparan primero los micronemas, preparando la descarga inmediata de las roptrias'
        },
        scientific:
          'Orgánulos secretores apicales compactos con forma de cigarro (micronemas; ~100–150 × 40–60 nm) agrupados bajo los anillos polares de [[Plasmodium falciparum|real-plasmodium]]. Activados por señalización cGMP–PKG y Ca²⁺/CDPK1, ejecutan la exocitosis inicial que expone adhesinas transmembrana (EBA-175, MTRAP, AMA1) en la [[membrana plasmática|plasma-membrane]] para la reorientación apical y la [[unión móvil AMA1–RON2|real-plas-apical]] (PDB 3SRI).',
        from: [
          { nodeId: 'ribosome', label: 'Vía secretora 80S', cargo: 'Precursores de AMA1 y EBA' },
          { nodeId: 'vesicle', label: 'Tráfico secretor apical', cargo: 'Carga micronemal clasificada' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Punta del merozoíto y AMA1', cargo: 'Adhesinas de primera oleada' },
          { nodeId: 'real-plas-glideosome', label: 'Colas de adhesinas', cargo: 'Acoplamiento a actina PfActI' }
        ]
      }
    },

    moving_junction: {
      en: {
        subtitle: 'The AMA1-RON2 Self-Built Invasion Ring (PDB 3SRI)',
        simple:
          'Forming a tight collar where [[Plasmodium|real-plasmodium]] pushes into the human red blood cell, the moving junction locks parasite AMA1 onto parasite-injected RON2, sliding from nose to tail as the [[glideosome|real-plas-glideosome]] pulls the cell inside.',
        story:
          'Rather than trusting unpredictable host proteins for traction, [[Plasmodium|real-plasmodium]] manufactures both halves of its own entry gateway. Micronemes display AMA1 across the merozoite membrane while rhoptries inject RON2 directly into the erythrocyte bilayer; their hydrophobic clasp locks into a tight ring around the parasite waist. Anchored on the inside to the [[PfMyoA glideosome|real-plas-glideosome]], this circumferential belt travels smoothly backward from tip to rear, squeezing the merozoite into its sealed vacuole like a self-laid zipper ring.',
        blueprint: {
          role: 'Tight circumferential AMA1-RON2 host-parasite collar transmitting glideosome traction during invasion',
          arrivesFrom: 'Parasite-surface micronemal AMA1 clasping rhoptry-injected RON2/RON4/RON5 embedded in the RBC [[plasma membrane|plasma-membrane]]',
          inside: 'High-affinity hydrophobic cleft interface (AMA1-RON2 loop complex PDB 3SRI) braced against host spectrin and parasite [[PfActI|real-plas-glideosome]]',
          deliversTo: 'Sweeps posteriorly across the merozoite body to drive full erythrocyte internalization and PVM pinch-off',
          loop: 'Molecular sieving at this tight ring strips bulk RBC surface proteins from the invaginating PVM during entry'
        },
        scientific:
          'Circumferential electron-dense host-parasite tight junction (moving junction) assembling at the apex of invading [[Plasmodium falciparum|real-plasmodium]] merozoites. Formed by high-affinity insertion of the rhoptry-injected RON2 extracellular disulfide-loop peptide into the hydrophobic trough of micronemal AMA1 (X-ray crystal complex PDB 3SRI, ~20 nM Kd) anchored to host cortical cytoskeleton via RON4/RON5. Coupled internally to the [[PfMyoA-PfActI glideosome|real-plas-glideosome]], the ring translates posteriorly over ~30-60 s to internalize the parasite inside its PVM.',
        from: [
          { nodeId: 'real-plas-apical', label: 'Micronemal AMA1 & Rhoptry RON2', cargo: 'Self-supplied lock-and-key pair' },
          { nodeId: 'real-plas-glideosome', label: 'PfMyoA-PfActI Traction', cargo: 'Rearward sliding force' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Internalized Merozoite', cargo: 'Complete RBC penetration' },
          { nodeId: 'plasma-membrane', label: 'Pinched-Off PVM Bubble', cargo: 'Filtered vacuole closure' }
        ]
      },
      es: {
        subtitle: 'El anillo de invasión autoinstalado AMA1–RON2 (PDB 3SRI)',
        simple:
          'Formando un collar hermético donde [[Plasmodium|real-plasmodium]] penetra el glóbulo rojo, la unión móvil acopla la proteína parasitaria AMA1 con RON2 inyectada en el huésped y se desliza de punta a cola impulsada por el [[glideosoma|real-plas-glideosome]].',
        story:
          'En lugar de depender de proteínas variables del huésped para traccionar, [[Plasmodium|real-plasmodium]] fabrica ambas piezas de su propia compuerta. Los micronemas exponen AMA1 en la membrana del merozoíto y las roptrias inyectan RON2 en la bicapa del eritrocito; ambas encajan en un anillo ceñido alrededor de la cintura parasitaria. Enlazado por dentro al [[glideosoma PfMyoA|real-plas-glideosome]], este collar retrocede de proa a popa introduciendo al merozoíto en su vacuola sellada como una cremallera circular autoinstalada.',
        blueprint: {
          role: 'Collar circunferencial hermético AMA1–RON2 que transmite la tracción del glideosoma durante la invasión',
          arrivesFrom: 'AMA1 micronemal en el parásito acoplada a RON2/RON4/RON5 inyectada por las roptrias en la [[membrana plasmática|plasma-membrane]] del eritrocito',
          inside: 'Surco hidrófobo de alta afinidad (complejo AMA1–RON2 PDB 3SRI) apoyado en la espectrina del huésped y [[PfActI|real-plas-glideosome]]',
          deliversTo: 'Recorre el cuerpo del merozoíto hacia atrás completando la entrada al eritrocito y el cierre de la PVM',
          loop: 'El ajuste estrecho del anillo filtra proteínas superficiales eritrocitarias mientras nace la vacuola parasitófora'
        },
        scientific:
          'Unión estrecha circunferencial electrodensa (unión móvil) ensamblada en el polo apical durante la invasión eritrocitaria de [[Plasmodium falciparum|real-plasmodium]]. Resulta del encaje del lazo extracelular de RON2 (inyectado desde el cuello roptrial con RON4/RON5) dentro del surco hidrófobo de AMA1 micronemal (estructura cristalográfica PDB 3SRI, Kd ~20 nM); el [[glideosoma PfMyoA–PfActI|real-plas-glideosome]] desplaza el anillo hacia atrás en ~30–60 s.',
        from: [
          { nodeId: 'real-plas-apical', label: 'AMA1 micronemal y RON2 roptrial', cargo: 'Pareja receptor-ligando propia' },
          { nodeId: 'real-plas-glideosome', label: 'Tracción PfMyoA–PfActI', cargo: 'Fuerza de arrastre retrógrada' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Merozoíto internalizado', cargo: 'Penetración eritrocitaria completa' },
          { nodeId: 'plasma-membrane', label: 'Burbuja PVM sellada', cargo: 'Cierre filtrado de la vacuola' }
        ]
      }
    },

    pfrh5: {
      en: {
        subtitle: 'Essential PfRH5-Basigin Docking Key (PDB 4U0Q)',
        simple:
          'Exposed at the very tip of [[Plasmodium|real-plasmodium]], the PfRH5 [[protein|protein]] locks onto the Basigin receptor on human red blood cells - the single non-redundant handshake that every strain needs to open rhoptry invasion.',
        story:
          'Many malaria surface ligands can be swapped out if human antibodies block them, yet every tested strain of [[Plasmodium falciparum|real-plasmodium]] depends strictly on PfRH5. As part of a three-protein complex with CyRPA and Ripr at the apical tip, PfRH5 latches onto human erythrocyte Basigin (CD147). That binding event opens a brief calcium pore between parasite and red blood cell, flipping the irreversible switch that fires the [[rhoptries|real-plas-apical]] and making PfRH5 one of the strongest blood-stage malaria vaccine targets.',
        blueprint: {
          role: 'Essential non-redundant apical adhesin committing [[Plasmodium|real-plasmodium]] irreversibly to erythrocyte invasion',
          arrivesFrom: 'Secreted at the apical tip as the PfRH5-CyRPA-Ripr complex following initial RBC contact and microneme priming',
          inside: 'Kite-shaped ~60 kDa alpha-helical PfRH5 ligand bound tightly to host Basigin (CD147) Ig domains (PDB 4U0Q)',
          deliversTo: 'Triggers a localized Ca2+ influx across the host-parasite junction that fires [[rhoptry|real-plas-apical]] RON2 injection',
          loop: 'Because Basigin recognition is conserved across all P. falciparum strains, antibodies against PfRH5 broadly halt entry'
        },
        scientific:
          'Essential reticulocyte-binding protein homolog 5 (PfRH5, ~60 kDa kite-shaped helical bundle; crystal complex with human Basigin/CD147 PDB 4U0Q, ~1 micromolar Kd) operating within the PCRCR/PfRH5-CyRPA-Ripr-PTRAMP-CSS invasion complex at the apex of [[Plasmodium falciparum|real-plasmodium]]. Engagement of erythrocyte Basigin is universally required across field isolates and initiates a transient Ca2+ flux at the apical contact site essential for [[rhoptry|real-plas-apical]] discharge and [[AMA1-RON2|real-plas-apical]] junction assembly.',
        from: [
          { nodeId: 'real-plas-apical', label: 'Apical Secretory Tip', cargo: 'PfRH5-CyRPA-Ripr complex' },
          { nodeId: 'plasma-membrane', label: 'Human RBC Basigin (CD147)', cargo: 'Conserved host surface receptor' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Rhoptry Exocytosis Trigger', cargo: 'Ca2+ invasion commit pulse' },
          { nodeId: 'real-plasmodium', label: 'Irreversible Host Entry', cargo: 'Strain-invariant invasion step' }
        ]
      },
      es: {
        subtitle: 'Llave esencial de acoplamiento PfRH5–Basigin (PDB 4U0Q)',
        simple:
          'Expuesta en la punta exacta de [[Plasmodium|real-plasmodium]], la [[proteína|protein]] PfRH5 se acopla al receptor Basigin del glóbulo rojo humano: el único paso indispensable que todas las cepas necesitan para disparar la invasión.',
        story:
          'Muchos ligandos superficiales de la malaria pueden sustituirse si el sistema inmune los bloquea, pero todas las cepas conocidas de [[Plasmodium falciparum|real-plasmodium]] dependen de PfRH5. Integrada en un complejo con CyRPA y Ripr en la punta apical, PfRH5 encaja sobre el receptor humano Basigin (CD147). Ese contacto abre un pulso de calcio entre el parásito y el eritrocito que acciona el disparo irreversible de las [[roptrias|real-plas-apical]], convirtiendo a PfRH5 en diana clave para vacunas antimaláricas.',
        blueprint: {
          role: 'Adhesina apical esencial no redundante que compromete de modo irreversible la invasión eritrocitaria',
          arrivesFrom: 'Secretada en el polo apical como complejo PfRH5–CyRPA–Ripr tras el contacto inicial con el glóbulo rojo',
          inside: 'Ligando helicoidal PfRH5 (~60 kDa) acoplado con precisión a los dominios Ig de Basigin/CD147 humano (PDB 4U0Q)',
          deliversTo: 'Dispara un flujo localizado de Ca²⁺ que activa la descarga de las [[roptrias|real-plas-apical]] y la inyección de RON2',
          loop: 'Al ser esencial en todas las cepas de P. falciparum, los anticuerpos contra PfRH5 frenan ampliamente la invasión'
        },
        scientific:
          'Homólogo esencial 5 de unión a reticulocitos (PfRH5, haz helicoidal de ~60 kDa; complejo cristalográfico con Basigin/CD147 humano PDB 4U0Q, Kd ~1 µM) perteneciente al complejo apical PfRH5–CyRPA–Ripr de [[Plasmodium falciparum|real-plasmodium]]. Su reconocimiento de Basigin eritrocitario es estrictamente indispensable en todos los aislados y desencadena el flujo de Ca²⁺ requerido para la exocitosis de [[roptrias|real-plas-apical]] y la [[unión móvil AMA1–RON2|real-plas-apical]].',
        from: [
          { nodeId: 'real-plas-apical', label: 'Polo secretor apical', cargo: 'Complejo PfRH5–CyRPA–Ripr' },
          { nodeId: 'plasma-membrane', label: 'Basigin (CD147) eritrocitario', cargo: 'Receptor humano conservado' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Disparo de roptrias', cargo: 'Pulso de Ca²⁺ de compromiso' },
          { nodeId: 'real-plasmodium', label: 'Entrada irreversible', cargo: 'Paso universal de invasión' }
        ]
      }
    },

    glideosome: {
      en: {
        subtitle: 'True-Scale PfMyoA-MTIP Actomyosin Motor (PDB 6YCX)',
        simple:
          'Anchored inside the narrow gap beneath the outer skin of [[Plasmodium|real-plasmodium]], [[PfMyoA-MTIP glideosome|real-plas-glideosome]] motors hydrolyze ATP to pull short [[actin|actin-filament]] cables backward and drive the parasite through the host membrane.',
        story:
          'Magnified to molecular scale inside the 25-nanometer space between the [[plasma membrane|plasma-membrane]] and inner membrane complex (IMC), this compact myosin engine powers the entire penetration of a human erythrocyte. Single-headed PfMyoA heavy chains hold their regulatory MTIP and ELC collars locked onto GAP45/GAP50 anchors in the IMC. Burning [[magnesium|atom-mg]]-bound ATP, each PfMyoA head strokes along short parasite PfActI filaments coupled to surface adhesins, pushing the merozoite smoothly forward through the [[AMA1-RON2 ring|real-plas-apical]].',
        blueprint: {
          role: 'Sub-pellicular class-XIV myosin engine converting Mg2+-ATP into rearward actin-adhesin pulling force',
          arrivesFrom: 'PfMyoA, MTIP, and ELC translated on [[80S ribosomes|ribosome]] and anchored to the IMC via GAP45/GAP50 plus cytosolic Mg2+-ATP',
          inside: 'Single-headed PfMyoA motor domain + lever-arm MTIP/ELC light chains (PDB 6YCX) gripping short PfActI tracks (PDB 4CBU)',
          deliversTo: 'Hauls GAC-linked adhesins posteriorly across the [[AMA1-RON2 moving junction|real-plas-apical]] to propel [[Plasmodium|real-plasmodium]] inside',
          loop: 'Phosphorylation of PfMyoA Ser19 tunes motor speed and force output precisely at the moment of erythrocyte entry'
        },
        scientific:
          'True-scale apicomplexan [[glideosome|real-plas-glideosome]] motor assembly (~25-30 nm supra-alveolar slot between [[plasma membrane|plasma-membrane]] and IMC) in [[Plasmodium falciparum|real-plasmodium]]. Centers on single-headed class-XIV myosin PfMyoA (~93 kDa) stabilized by myosin tail-interacting protein (MTIP) and essential light chain (ELC; cryo-EM/X-ray PDB 6YCX), tethered to the IMC via GAP45/GAP50/GAP40. Hydrolyzes [[Mg2+|atom-mg]]-ATP to walk toward barbed ends of short PfActI [[actin filaments|actin-filament]] (PDB 4CBU) linked via GAC to surface receptors.',
        from: [
          { nodeId: 'atom-mg', label: 'Glycolytic Mg2+-ATP Pool', cargo: 'Myosin power-stroke fuel' },
          { nodeId: 'actin-filament', label: 'Short PfActI Tracks', cargo: 'Polarized gliding rails' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'AMA1-RON2 Moving Junction', cargo: 'Rearward invasion traction' },
          { nodeId: 'real-plas-glideosome', label: 'Glideosome Motor Node', cargo: 'PDB 6YCX actomyosin unit' }
        ]
      },
      es: {
        subtitle: 'Motor de actomiosina PfMyoA–MTIP a escala real (PDB 6YCX)',
        simple:
          'Anclados en la estrecha hendidura bajo la piel externa de [[Plasmodium|real-plasmodium]], los motores [[PfMyoA–MTIP del glideosoma|real-plas-glideosome]] hidrolizan ATP para tirar hacia atrás de cortos cables de [[actina|actin-filament]] y empujar al parásito dentro del eritrocito.',
        story:
          'Ampliado a escala molecular en el corredor de 25 nanómetros entre la [[membrana plasmática|plasma-membrane]] y el IMC, este motor compacto impulsa toda la entrada en el glóbulo rojo. Las cadenas pesadas monocéfalas PfMyoA sujetan sus collares reguladores MTIP y ELC a los anclajes GAP45/GAP50 del IMC. Consumiendo ATP unido a [[magnesio|atom-mg]], cada cabeza PfMyoA avanza sobre filamentos cortos de PfActI conectados a adhesinas superficiales, impulsando al merozoíto a través del [[anillo AMA1–RON2|real-plas-apical]].',
        blueprint: {
          role: 'Motor subpelicular de miosina clase XIV que convierte Mg²⁺·ATP en tracción retrógrada sobre actina y adhesinas',
          arrivesFrom: 'PfMyoA, MTIP y ELC traducidas en [[ribosomas 80S|ribosome]], ancladas al IMC vía GAP45/GAP50 y Mg²⁺·ATP citosólico',
          inside: 'Dominio motor PfMyoA de una cabeza y brazo palanca con MTIP/ELC (PDB 6YCX) traccionando pistas PfActI (PDB 4CBU)',
          deliversTo: 'Arrastra adhesinas ligadas por GAC hacia atrás en la [[unión móvil AMA1–RON2|real-plas-apical]] introduciendo a [[Plasmodium|real-plasmodium]]',
          loop: 'La fosforilación de PfMyoA en Ser19 ajusta la velocidad y la fuerza del motor justo al entrar en el eritrocito'
        },
        scientific:
          'Ensamblaje motor del [[glideosoma|real-plas-glideosome]] apicomplejo a escala molecular (hendidura supraalveolar de ~25–30 nm entre [[membrana plasmática|plasma-membrane]] e IMC) en [[Plasmodium falciparum|real-plasmodium]]. Centrado en la miosina clase XIV monocéfala PfMyoA (~93 kDa) con MTIP y cadena ligera ELC (PDB 6YCX), fijada al IMC por GAP45/GAP50/GAP40; hidroliza [[Mg²⁺|atom-mg]]·ATP para deslizar [[filamentos de actina|actin-filament]] PfActI (PDB 4CBU) enlazados por GAC a receptores de membrana.',
        from: [
          { nodeId: 'atom-mg', label: 'Reserva de Mg²⁺·ATP', cargo: 'Energía del golpe de miosina' },
          { nodeId: 'actin-filament', label: 'Pistas cortas de PfActI', cargo: 'Rieles polares de deslizamiento' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Unión móvil AMA1–RON2', cargo: 'Tracción invasiva retrógrada' },
          { nodeId: 'real-plas-glideosome', label: 'Motor glideosoma', cargo: 'Unidad actomiosina PDB 6YCX' }
        ]
      }
    },

    actin: {
      en: {
        subtitle: 'Divergent Short PfActI Filaments (PDB 4CBU)',
        simple:
          'Unlike the long sturdy [[actin filaments|actin-filament]] that brace human muscle and skin cells, [[Plasmodium|real-plasmodium]] builds unusually short, fast-cycling PfActI tracks right beneath its membrane to couple [[PfMyoA|real-plas-glideosome]] force to invasion.',
        story:
          'Because [[Plasmodium|real-plasmodium]] completes erythrocyte invasion in under a minute and must immediately dismantle its gliding coat once inside, long permanent cytoskeleton cables would get in the way. Its divergent PfActI [[G-actin|g-actin]] monomers - sharing about eighty percent sequence identity with human actin - polymerize into brisk ~100-nanometer strands nucleated by formin-1 right at the apical tip. Coupled via glideosome-associated connector (GAC) to surface adhesins, these transient cables slide straight past anchored [[PfMyoA|real-plas-glideosome]] motors and rapidly disassemble once the merozoite settles inside.',
        blueprint: {
          role: 'Short, highly dynamic supra-alveolar actin tracks transmitting PfMyoA strokes to surface adhesins',
          arrivesFrom: 'ATP-bound ~42 kDa PfActI monomers (PDB 4CBU) translated on [[80S ribosomes|ribosome]] and nucleated by apical formin-1',
          inside: 'Transient ~100-150 nm double-helical ~7 nm [[actin filaments|actin-filament]] regulated by profilin, ADF, and coronin',
          deliversTo: 'Bridges IMC-anchored [[PfMyoA-MTIP|real-plas-glideosome]] motors to GAC-bound transmembrane adhesins during host entry',
          loop: 'Rapid intrinsic depolymerization clears the gliding apparatus immediately once erythrocyte entry finishes'
        },
        scientific:
          'Divergent apicomplexan actin isoform PfActI (~42 kDa monomer, ~80% sequence identity to mammalian [[G-actin|g-actin]]; crystal/cryo-EM structure PDB 4CBU) forming unusually short (~100-150 nm), intrinsically unstable ~7 nm [[F-actin|actin-filament]] polymers within the ~25-30 nm supra-alveolar space of [[Plasmodium falciparum|real-plasmodium]]. Nucleated by apical formin-1 and linked via glideosome-associated connector (GAC) to transmembrane adhesin tails, providing polarized barbed-end tracks for IMC-anchored [[PfMyoA|real-plas-glideosome]] (PDB 6YCX).',
        from: [
          { nodeId: 'g-actin', label: 'ATP-PfActI Monomers', cargo: 'PDB 4CBU globular subunits' },
          { nodeId: 'real-plas-apical', label: 'Apical Formin-1 Nucleator', cargo: 'Polarized filament seeding' }
        ],
        to: [
          { nodeId: 'real-plas-glideosome', label: 'PfMyoA-MTIP Motor Heads', cargo: 'Polarized pulling tracks' },
          { nodeId: 'actin-filament', label: 'Eukaryotic F-Actin Family', cargo: 'Short-filament specialization' }
        ]
      },
      es: {
        subtitle: 'Filamentos cortos divergentes de actina PfActI (PDB 4CBU)',
        simple:
          'A diferencia de los largos [[filamentos de actina|actin-filament]] que sostienen las células humanas, [[Plasmodium|real-plasmodium]] ensambla tramos cortos y efímeros de PfActI bajo su membrana para acoplar el empuje de [[PfMyoA|real-plas-glideosome]] durante la invasión.',
        story:
          'Como [[Plasmodium|real-plasmodium]] penetra el eritrocito en menos de un minuto y debe desmontar su equipo motor justo después, los cables largos y permanentes estorbarían. Sus monómeros divergentes de [[actina G|g-actin]] PfActI —con cerca de un ochenta por ciento de identidad con la actina humana— forman hebras breves de ~100 nanómetros nucleadas por formina-1 en la punta apical. Conectadas mediante GAC a las adhesinas de superficie, estas pistas se deslizan sobre las cabezas fijas de [[PfMyoA|real-plas-glideosome]] y se desarman al completarse la entrada.',
        blueprint: {
          role: 'Pistas supraalveolares cortas y dinámicas de actina que transmiten los golpes de PfMyoA a las adhesinas',
          arrivesFrom: 'Monómeros PfActI de ~42 kDa unidos a ATP (PDB 4CBU) traducidos en [[ribosomas 80S|ribosome]] y nucleados por formina-1 apical',
          inside: '[[Filamentos de actina|actin-filament]] transitorios (~100–150 nm × 7 nm) modulados por profilina, ADF y coronina',
          deliversTo: 'Enlaza los motores [[PfMyoA–MTIP|real-plas-glideosome]] anclados al IMC con las adhesinas transmembrana vía GAC',
          loop: 'Su rápida despolimerización intrínseca desmantela el aparato de deslizamiento al finalizar la entrada al eritrocito'
        },
        scientific:
          'Isoforma apicompleja divergente de actina PfActI (monómero de ~42 kDa, ~80 % de identidad con la [[actina G|g-actin]] de mamíferos; PDB 4CBU) que polimeriza en [[filamentos F|actin-filament]] inusualmente cortos (~100–150 nm, ~7 nm de grosor) e inestables en el espacio supraalveolar de [[Plasmodium falciparum|real-plasmodium]]. Nucleada por formina-1 apical y acoplada por GAC a adhesinas de membrana para traccionar sobre [[PfMyoA|real-plas-glideosome]] (PDB 6YCX).',
        from: [
          { nodeId: 'g-actin', label: 'Monómeros ATP-PfActI', cargo: 'Subunidades globulares PDB 4CBU' },
          { nodeId: 'real-plas-apical', label: 'Formina-1 apical', cargo: 'Nucleación polarizada' }
        ],
        to: [
          { nodeId: 'real-plas-glideosome', label: 'Cabezas motoras PfMyoA', cargo: 'Pistas polares de tracción' },
          { nodeId: 'actin-filament', label: 'Familia actina F eucariota', cargo: 'Especialización de hebra corta' }
        ]
      }
    },

    nucleus: {
      en: {
        subtitle: 'True Eukaryotic Nucleus (23.3 Mbp, 14 Linear Chromosomes)',
        simple:
          'Surrounded by a genuine double [[nuclear envelope|nuclear-envelope]], this compact [[nucleus|nucleus]] holds 14 linear chromosomes encoding ~5,300 genes - immediate proof that [[Plasmodium|real-plasmodium]] is a true eukaryote, not a bacterium like [[Chlamydia|real-chlamydia]].',
        story:
          'At just 1.5 micrometers across, a malaria merozoite is barely larger than [[Chlamydia|real-chlamydia]] or [[E. coli|real-bacterium]], yet peeking inside reveals full eukaryotic genetic architecture. Behind nuclear pore complexes, 23.3 million base pairs of remarkably AT-rich linear [[dsDNA|dna]] wrap onto eukaryotic histone spools across 14 distinct chromosomes. Throughout each 48-hour blood cycle, timed waves of nuclear transcription direct RBC remodeling, var-gene antigenic switching to dodge antibodies, and asynchronous rounds of closed mitosis producing 16 to 32 daughter nuclei.',
        blueprint: {
          role: 'Membrane-bound eukaryotic genetic command center driving blood-stage development and antigenic variation',
          arrivesFrom: 'Pyrimidine [[nucleotides|nucleotide]] enabled by [[mitochondrial|mitochondrion]] DHODH plus salvaged host purines across [[nuclear envelope|nuclear-envelope]] pores',
          inside: '~0.5-0.7 micrometer merozoite [[nucleus|nucleus]] packing 23.3 Mbp (~80.6% A+T) [[dsDNA|dna]] on eukaryotic histones across 14 linear chromosomes',
          deliversTo: 'Exports spliced [[mRNA|rna]] and ribosomal subunits to cytosolic [[80S ribosomes|ribosome]] and >400 nuclear proteins to the [[apicoplast|real-plas-apicoplast]]',
          loop: 'Epigenetic switching among ~60 subtelomeric var genes swaps surface PfEMP1 coats faster than host immunity adapts'
        },
        scientific:
          'Membrane-enclosed haploid eukaryotic [[nucleus|nucleus]] (~0.5-0.7 micrometers in merozoites; expanding during trophozoite growth and multiplying into 16-32 nuclei via closed intranuclear schizogony) in [[Plasmodium falciparum|real-plasmodium]]. Bounded by a double [[nuclear envelope|nuclear-envelope]] with nuclear pore complexes; houses a 23.3 Mbp linear nuclear genome (~80.6% A+T, 14 chromosomes, ~5,300 protein-coding genes wrapped in eukaryotic nucleosomes), contrasting sharply with the 1.04 Mbp circular nucleoid of bacterial [[Chlamydia|real-chlamydia]].',
        from: [
          { nodeId: 'mitochondrion', label: 'Mitochondrial DHODH Pathway', cargo: 'De novo pyrimidine nucleotides' },
          { nodeId: 'nuclear-envelope', label: 'Double Nuclear Envelope', cargo: 'Pore-gated transport barrier' }
        ],
        to: [
          { nodeId: 'rna', label: 'Spliced Nuclear mRNA', cargo: 'Stage-timed gene expression' },
          { nodeId: 'ribosome', label: 'Cytosolic 80S Ribosomes', cargo: 'Invasion & remodeling proteome' }
        ]
      },
      es: {
        subtitle: 'Núcleo eucariota verdadero (23,3 Mpb, 14 cromosomas lineales)',
        simple:
          'Rodeado por una auténtica [[envoltura nuclear|nuclear-envelope]] doble, este [[núcleo|nucleus]] compacto aloja 14 cromosomas lineales con ~5.300 genes: prueba inmediata de que [[Plasmodium|real-plasmodium]] es un eucariota completo y no una bacteria como [[Chlamydia|real-chlamydia]].',
        story:
          'Con apenas 1,5 micrómetros, el merozoíto de la malaria es casi tan pequeño como [[Chlamydia|real-chlamydia]] o [[E. coli|real-bacterium]], pero su interior revela genética eucariota íntegra. Tras los poros nucleares, 23,3 millones de pares de bases de [[ADNbc|dna]] lineal muy rico en A+T se enrollan en histonas a lo largo de 14 cromosomas. En cada ciclo sanguíneo de 48 horas, oleadas ordenadas de transcripción dirigen la remodelación del eritrocito, el cambio antigénico de genes var y la esquizogonia en 16 a 32 núcleos hijos.',
        blueprint: {
          role: 'Centro genético eucariota con membrana que coordina el ciclo eritrocitario y la variación antigénica',
          arrivesFrom: '[[Nucleótidos|nucleotide]] de pirimidina habilitados por DHODH [[mitocondrial|mitochondrion]] y purinas rescatadas vía [[envoltura nuclear|nuclear-envelope]]',
          inside: '[[Núcleo|nucleus]] (~0,5–0,7 µm en merozoíto) con 23,3 Mpb (~80,6 % A+T) de [[ADNbc|dna]] en histonas sobre 14 cromosomas lineales',
          deliversTo: 'Exporta [[ARNm|rna]] procesado hacia [[ribosomas 80S|ribosome]] citosólicos y >400 proteínas nucleares hacia el [[apicoplasto|real-plas-apicoplast]]',
          loop: 'El cambio epigenético entre ~60 genes var subteloméricos renueva las proteínas PfEMP1 para evadir anticuerpos'
        },
        scientific:
          '[[Núcleo|nucleus]] eucariota haploide delimitado por doble [[envoltura nuclear|nuclear-envelope]] con complejos de poro (~0,5–0,7 µm en merozoítos; replicado en 16–32 núcleos por mitosis cerrada durante la esquizogonia) en [[Plasmodium falciparum|real-plasmodium]]. Alberga un genoma lineal de 23,3 Mpb (~80,6 % A+T, 14 cromosomas, ~5.300 genes en nucleosomas), contrastando frontalmente con el nucleoide circular bacteriano de 1,04 Mpb de [[Chlamydia|real-chlamydia]].',
        from: [
          { nodeId: 'mitochondrion', label: 'Vía mitocondrial DHODH', cargo: 'Pirimidinas de novo para ADN' },
          { nodeId: 'nuclear-envelope', label: 'Doble envoltura nuclear', cargo: 'Intercambio regulado por poros' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm nuclear maduro', cargo: 'Oleadas génicas por fase' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S citosólicos', cargo: 'Proteoma invasivo y remodelador' }
        ]
      }
    },

    ribosome_80s: {
      en: {
        subtitle: 'Plasmodium Cytosolic 80S Ribosomes (PDB 3J79)',
        simple:
          'Filling the cytoplasm of [[Plasmodium|real-plasmodium]], eukaryotic [[80S ribosomes|ribosome]] turn digested [[hemoglobin|real-plas-hemoglobin]] [[amino acids|amino-acid]] into parasite enzymes and invasion tools - while sitting side-by-side with bacterial-type [[70S ribosomes|ribosome-70s]] inside the [[apicoplast|real-plas-apicoplast]].',
        story:
          'One glance at its ribosomes explains why ordinary antibacterial drugs act so differently on malaria than on [[Chlamydia|real-chlamydia]]. [[Plasmodium|real-plasmodium]] translates almost all of its ~5,300 nuclear genes on large eukaryotic 80S ribosomes (cryo-EM PDB 3J79) closely related to our own, fed heavily by [[amino acids|amino-acid]] stripped off human [[hemoglobin|real-plas-hemoglobin]]. Yet subtle parasite-specific expansion pockets allow selective inhibitors such as emetine to jam malaria 80S translation while leaving bacterial 70S-only targets confined to the relict [[apicoplast|real-plas-apicoplast]].',
        blueprint: {
          role: 'Cytosolic eukaryotic 80S translation engines building nuclear-encoded parasite and RBC-remodeling proteins',
          arrivesFrom: 'Nuclear [[mRNA|rna]] transcripts plus globin-derived [[amino acids|amino-acid]] exported from the [[digestive vacuole|real-plas-digestive]]',
          inside: '~25-30 nm ~4.2 MDa 40S + 60S [[ribosome|ribosome]] (P. falciparum cryo-EM PDB 3J79) carrying stage-specific rRNA isoforms',
          deliversTo: 'Translates [[apical|real-plas-apical]] ligands, [[glideosome|real-plas-glideosome]] subunits, digestive proteases, and >400 nuclear [[apicoplast|real-plas-apicoplast]] imports',
          loop: 'Coexists inside the same parasite cell with bacterial-type [[70S ribosomes|ribosome-70s]] tucked inside the apicoplast'
        },
        scientific:
          'Cytosolic eukaryotic [[80S ribosome|ribosome]] of [[Plasmodium falciparum|real-plasmodium]] (~25-30 nm, ~4.2 MDa; 40S + 60S subunits; high-resolution cryo-EM structure PDB 3J79 bound to emetine). Notably expresses distinct stage-specific rRNA gene sets (A-type in asexual human blood stages vs. S-type in mosquito stages) and relies on [[amino acids|amino-acid]] from [[hemoglobin|real-plas-hemoglobin]] breakdown plus imported plasma isoleucine. Directly contrasts with the cytosolic [[70S ribosomes|ribosome-70s]] of [[Chlamydia|real-chlamydia]] and [[Rickettsia|real-rickettsia]].',
        from: [
          { nodeId: 'nucleus', label: '14-Chromosome Nucleus', cargo: 'Nuclear mRNA transcripts' },
          { nodeId: 'real-plas-digestive', label: 'Digestive Vacuole Amino Acids', cargo: 'Hydrolyzed globin monomers' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Apical & Glideosome Proteins', cargo: 'Invasion nanomachines' },
          { nodeId: 'real-plas-apicoplast', label: 'Bipartite-Tagged Imports', cargo: '>400 nuclear plastid proteins' }
        ]
      },
      es: {
        subtitle: 'Ribosomas citosólicos 80S de Plasmodium (PDB 3J79)',
        simple:
          'Llenando el citoplasma de [[Plasmodium|real-plasmodium]], los [[ribosomas 80S|ribosome]] eucariotas ensamblan [[aminoácidos|amino-acid]] de la [[hemoglobina|real-plas-hemoglobin]] digerida en enzimas y armas invasivas, conviviendo con [[ribosomas 70S|ribosome-70s]] bacterianos dentro del [[apicoplasto|real-plas-apicoplast]].',
        story:
          'Observar sus ribosomas aclara por qué los antibióticos antibacterianos actúan distinto sobre la malaria que sobre [[Chlamydia|real-chlamydia]]. [[Plasmodium|real-plasmodium]] traduce casi todos sus ~5.300 genes nucleares en grandes ribosomas eucariotas 80S (crio-EM PDB 3J79) afines a los nuestros, surtidos con [[aminoácidos|amino-acid]] extraídos de la [[hemoglobina|real-plas-hemoglobin]]. Sus bolsillos propios permiten fármacos selectivos como la emetina, mientras los antibióticos anti-70S solo alcanzan el [[apicoplasto|real-plas-apicoplast]].',
        blueprint: {
          role: 'Traductores eucariotas citosólicos 80S que fabrican las proteínas nucleares invasivas y remodeladoras',
          arrivesFrom: 'Transcritos nucleares de [[ARNm|rna]] y [[aminoácidos|amino-acid]] de globina exportados desde la [[vacuola digestiva|real-plas-digestive]]',
          inside: '[[Ribosoma|ribosome]] 40S + 60S (~25–30 nm, ~4,2 MDa; crio-EM de P. falciparum PDB 3J79) con ARNr específico de fase sanguínea',
          deliversTo: 'Sintetiza ligandos [[apicales|real-plas-apical]], subunidades del [[glideosoma|real-plas-glideosome]], proteasas y >400 importaciones del [[apicoplasto|real-plas-apicoplast]]',
          loop: 'Coexiste dentro de la misma célula con [[ribosomas 70S|ribosome-70s]] de tipo bacteriano encerrados en el apicoplasto'
        },
        scientific:
          '[[Ribosoma 80S|ribosome]] eucariota citosólico de [[Plasmodium falciparum|real-plasmodium]] (~25–30 nm, ~4,2 MDa; subunidades 40S y 60S; crio-EM PDB 3J79 en complejo con emetina). Emplea conjuntos distintos de genes de ARNr según la fase (tipo A en sangre humana frente a tipo S en mosquito) y se abastece de [[aminoácidos|amino-acid]] de la [[hemoglobina|real-plas-hemoglobin]] más isoleucina plasmática, contrastando con los [[ribosomas 70S|ribosome-70s]] de [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]].',
        from: [
          { nodeId: 'nucleus', label: 'Núcleo de 14 cromosomas', cargo: 'ARNm de expresión por fases' },
          { nodeId: 'real-plas-digestive', label: 'Vacuola digestiva', cargo: 'Aminoácidos de globina' }
        ],
        to: [
          { nodeId: 'real-plas-apical', label: 'Proteínas apicales y motoras', cargo: 'Complejos de invasión' },
          { nodeId: 'real-plas-apicoplast', label: 'Proteínas con péptido bipartito', cargo: '>400 enzimas del apicoplasto' }
        ]
      }
    },

    mito: {
      en: {
        subtitle: 'Single Branched 6-kb Mitochondrion (Pyrimidine Lifeline)',
        simple:
          'Unlike [[Paramecium|real-paramecium]] packed with hundreds of [[mitochondria|mitochondrion]], [[Plasmodium|real-plasmodium]] carries just one branched mitochondrion with a tiny 6-kilobase genome - essential in blood stages not for bulk ATP, but to make [[DNA|dna]] building blocks.',
        story:
          'Swimming inside glucose-rich blood, [[Plasmodium falciparum|real-plasmodium]] generates most of its blood-stage ATP through fast cytosolic glycolysis rather than oxidative phosphorylation. Even so, the parasite dies quickly if its single tubular [[mitochondrion|mitochondrion]] shuts down. Its streamlined electron transport chain - whose cytochrome b is encoded on the smallest known mitochondrial genome of just 6 kilobases - continuously recycles ubiquinone so dihydroorotate dehydrogenase (DHODH) can synthesize pyrimidine [[nucleotides|nucleotide]] needed to copy all 14 nuclear chromosomes; blocking Complex III with atovaquone collapses DNA replication outright.',
        blueprint: {
          role: 'Single minimalist mitochondrion essential for ubiquinone recycling and de novo pyrimidine synthesis',
          arrivesFrom: 'Electrons from dihydroorotate dehydrogenase (DHODH), nuclear-encoded enzymes, and [[O2|atom-o]]',
          inside: 'Single ~0.5-1.5 micrometer branched double-membrane organelle housing a 6 kb linear tandem mtDNA (cox1, cox3, cytb) and Complex III/IV',
          deliversTo: 'Recycles oxidized ubiquinone to power DHODH pyrimidine [[nucleotide|nucleotide]] production for [[nuclear DNA|nucleus]] replication and heme synthesis steps',
          loop: 'Antimalarial atovaquone binds mitochondrial cytochrome bc1 (Complex III), starving the nucleus of pyrimidines'
        },
        scientific:
          'Single tubular-to-branched [[mitochondrion|mitochondrion]] (~0.5-1.5 micrometers in merozoites, elongating and dividing synchronously during schizogony) in [[Plasmodium falciparum|real-plasmodium]]. Carries the smallest known eukaryotic mitochondrial genome (~6 kb linear tandem-array [[dsDNA|dna]] encoding only three proteins - cox1, cox3, and cytb - plus fragmented rRNAs). In asexual blood stages, glycolysis supplies bulk ATP while the ETC (lacking canonical Complex I) serves principally to regenerate ubiquinone for mitochondrial DHODH pyrimidine biosynthesis (target of atovaquone) and interacts metabolically with the [[apicoplast|real-plas-apicoplast]].',
        from: [
          { nodeId: 'atom-o', label: 'Dissolved O2 Acceptor', cargo: 'Complex IV terminal sink' },
          { nodeId: 'atom-fe', label: 'Iron-Sulfur & Cytochrome Fe', cargo: 'Complex III redox centers' }
        ],
        to: [
          { nodeId: 'nucleotide', label: 'DHODH Pyrimidine Synthesis', cargo: 'Essential DNA/RNA bases' },
          { nodeId: 'nucleus', label: '14-Chromosome Replication', cargo: 'Schizogony dNTP supply' }
        ]
      },
      es: {
        subtitle: 'Única mitocondria ramificada de 6 kb (salvavidas de pirimidinas)',
        simple:
          'A diferencia de [[Paramecium|real-paramecium]] repleto de cientos de [[mitocondrias|mitochondrion]], [[Plasmodium|real-plasmodium]] conserva una sola mitocondria ramificada con un diminuto genoma de 6 kilobases, indispensable en sangre para fabricar bloques de [[ADN|dna]].',
        story:
          'Sumergido en sangre abundante en glucosa, [[Plasmodium falciparum|real-plasmodium]] obtiene la mayor parte de su ATP sanguíneo por glucólisis rápida en vez de fosforilación oxidativa. Aun así, muere si su única [[mitocondria|mitochondrion]] tubular se detiene. Su cadena respiratoria mínima —cuyo citocromo b reside en el genoma mitocondrial más pequeño conocido, de solo 6 kilobases— recicla ubiquinona para que la enzima DHODH sintetice [[nucleótidos|nucleotide]] de pirimidina con los que copiar sus 14 cromosomas; bloquear el Complejo III con atovacuona detiene al instante la replicación.',
        blueprint: {
          role: 'Única mitocondria minimalista esencial para reciclar ubiquinona y sintetizar pirimidinas de novo',
          arrivesFrom: 'Electrones de la dihidroorotato deshidrogenasa (DHODH), enzimas nucleares importadas y [[O₂|atom-o]]',
          inside: 'Orgánulo único ramificado de doble membrana (~0,5–1,5 µm) con ADNmt lineal en tándem de 6 kb (cox1, cox3, cytb) y complejos III/IV',
          deliversTo: 'Regenera ubiquinona oxidada para impulsar la síntesis de [[nucleótidos|nucleotide]] pirimidínicos destinados al [[núcleo|nucleus]]',
          loop: 'El antimalárico atovacuona inhibe el complejo citocromo bc₁ (Complejo III) dejando al núcleo sin pirimidinas'
        },
        scientific:
          'Única [[mitocondria|mitochondrion]] tubular y ramificada (~0,5–1,5 µm en merozoítos) de [[Plasmodium falciparum|real-plasmodium]], portadora del menor genoma mitocondrial eucariota conocido (~6 kb de [[ADNbc|dna]] lineal en tándem que codifica solo cox1, cox3 y cytb junto a fragmentos de ARNr). En fase sanguínea la glucólisis genera el grueso del ATP, mientras la cadena electrónica (sin Complejo I canónico) resulta vital para regenerar ubiquinona para la DHODH (diana de la atovacuona) y cooperar con el [[apicoplasto|real-plas-apicoplast]].',
        from: [
          { nodeId: 'atom-o', label: 'Aceptor de O₂ disuelto', cargo: 'Sumidero en Complejo IV' },
          { nodeId: 'atom-fe', label: 'Hierro en Fe–S y citocromos', cargo: 'Centros redox del Complejo III' }
        ],
        to: [
          { nodeId: 'nucleotide', label: 'Síntesis de pirimidinas DHODH', cargo: 'Bases esenciales para ADN/ARN' },
          { nodeId: 'nucleus', label: 'Replicación de 14 cromosomas', cargo: 'Suministro de dNTP en esquizogonia' }
        ]
      }
    },

    apicoplast: {
      en: {
        subtitle: 'The 4-Membrane Relict Chloroplast of Red-Algal Ancestry',
        simple:
          'Nestled beside the [[mitochondrion|mitochondrion]], this oval [[apicoplast|real-plas-apicoplast]] is an ancient [[chloroplast|chloroplast]] that gave up sunlight when malaria ancestors turned parasitic - yet it still builds essential isoprenoids needed for survival.',
        story:
          'Discovering a plant-like plastid inside the human malaria parasite surprised biologists worldwide. Stripped of chlorophyll and thylakoid stacks, this 400-nanometer chamber preserves four nested membranes, a 35-kilobase circular genome, and bacterial-type [[70S ribosomes|ribosome-70s]] inherited when an ancient alveolate engulfed a red alga. In human blood stages, [[Plasmodium|real-plasmodium]] relies entirely on the apicoplast MEP/DOXP enzymes to manufacture isoprenoid precursors (IPP and DMAPP) for protein prenylation and signaling - turning this evolutionary relic into a selective drug target absent from human cells.',
        blueprint: {
          role: 'Non-photosynthetic secondary-endosymbiotic plastid executing essential prokaryotic-type isoprenoid biosynthesis',
          arrivesFrom: 'Glycolytic triose phosphates imported across four membranes plus >400 nuclear-encoded proteins from [[80S ribosomes|ribosome]]',
          inside: '~0.3-0.6 micrometer four-membrane stroma housing 35 kb circular [[dsDNA|dna]], [[70S ribosomes|ribosome-70s]], MEP/DOXP, and FAS-II enzymes',
          deliversTo: 'Exports IPP and DMAPP isoprenoids required for blood-stage membrane trafficking, prenylation, and survival',
          loop: 'Inhibiting apicoplast replication or 70S translation with doxycycline causes lethal delayed death in the next RBC cycle'
        },
        scientific:
          'Essential relict non-photosynthetic plastid ([[apicoplast|real-plas-apicoplast]]; ~0.3-0.6 micrometers ovoid organelle branching before schizogony division) of [[Plasmodium falciparum|real-plasmodium]], homologous to [[chloroplasts|chloroplast]] via secondary endosymbiosis of a red alga. Bounded by four lipid bilayers and housing a 35 kb circular genome + [[70S ribosomes|ribosome-70s]]. Runs bacterial-type MEP/DOXP isoprenoid synthesis (generating IPP/DMAPP; blocked by fosmidomycin), FAS-II fatty-acid synthesis, Fe-S cluster assembly, and partial heme biosynthesis.',
        from: [
          { nodeId: 'chloroplast', label: 'Ancient Red-Algal Plastid', cargo: 'Secondary endosymbiotic origin' },
          { nodeId: 'ribosome', label: 'Nuclear-Encoded Imports', cargo: '>400 MEP & housekeeping enzymes' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Essential IPP/DMAPP Supply', cargo: 'Isoprenoids for blood survival' },
          { nodeId: 'ribosome-70s', label: 'Delayed-Death Drug Target', cargo: 'Doxycycline 70S vulnerability' }
        ]
      },
      es: {
        subtitle: 'El cloroplasto relicto de cuatro membranas y origen algal',
        simple:
          'Junto a la [[mitocondria|mitochondrion]], este [[apicoplasto|real-plas-apicoplast]] ovalado es un antiguo [[cloroplasto|chloroplast]] que abandonó la luz solar cuando los ancestros de la malaria se volvieron parásitos, pero aún produce isoprenoides indispensables.',
        story:
          'Hallar un plasto de origen vegetal dentro del parásito de la malaria asombró a la biología moderna. Sin clorofila ni tilacoides, esta cámara de 400 nanómetros conserva cuatro membranas anidadas, un genoma circular de 35 kilobases y [[ribosomas 70S|ribosome-70s]] de tipo bacteriano heredados al engullir un alga roja. En la fase sanguínea, [[Plasmodium|real-plasmodium]] depende por entero de su vía MEP/DOXP para sintetizar precursores isoprenoides (IPP y DMAPP), ofreciendo una diana terapéutica ausente en las células humanas.',
        blueprint: {
          role: 'Plasto no fotosintético de endosimbiosis secundaria que ejecuta biosíntesis isoprenoide de tipo procariota',
          arrivesFrom: 'Triosas fosfato glucolíticas importadas por cuatro bicapas más >400 proteínas nucleares de [[ribosomas 80S|ribosome]]',
          inside: 'Estroma de ~0,3–0,6 µm bajo cuatro membranas con [[ADNbc|dna]] circular de 35 kb, [[ribosomas 70S|ribosome-70s]], MEP/DOXP y FAS-II',
          deliversTo: 'Exporta isoprenoides IPP y DMAPP esenciales para prenilación proteica, tráfico vesicular y supervivencia sanguínea',
          loop: 'Bloquear la replicación o traducción 70S del apicoplasto con doxiciclina provoca muerte diferida en el siguiente ciclo'
        },
        scientific:
          'Plasto relicto no fotosintético esencial ([[apicoplasto|real-plas-apicoplast]]; ~0,3–0,6 µm, ramificado antes de repartirse en la esquizogonia) de [[Plasmodium falciparum|real-plasmodium]], homólogo al [[cloroplasto|chloroplast]] por endosimbiosis secundaria de un alga roja. Encerrado por cuatro bicapas con genoma circular de 35 kb y [[ribosomas 70S|ribosome-70s]], ejecuta la vía MEP/DOXP de isoprenoides (sensible a fosmidomicina), síntesis FAS-II, centros Fe–S y pasos iniciales del hemo.',
        from: [
          { nodeId: 'chloroplast', label: 'Plasto ancestral de alga roja', cargo: 'Origen por endosimbiosis secundaria' },
          { nodeId: 'ribosome', label: 'Importaciones nucleares', cargo: '>400 enzimas MEP y domésticas' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Suministro de IPP/DMAPP', cargo: 'Isoprenoides vitales en sangre' },
          { nodeId: 'ribosome-70s', label: 'Diana de muerte diferida', cargo: 'Sensibilidad 70S a doxiciclina' }
        ]
      }
    },

    apicoplast_membranes: {
      en: {
        subtitle: 'Four Concentric Membranes Proving Secondary Endosymbiosis',
        simple:
          'Peel back the [[apicoplast|real-plas-apicoplast]] and you count four concentric [[phospholipid|phospholipid]] layers - not two like a plant [[chloroplast|chloroplast]] - preserving the exact geological record of one eukaryote swallowing another photosynthetic eukaryote.',
        story:
          'While a [[plant cell|real-plant]] chloroplast carries two outer bilayers from engulfing a cyanobacterium once, the [[apicoplast|real-plas-apicoplast]] retains four stacked lipid bilayers from successive engulfment events. Starting from the inside, layers one and two are the ancient cyanobacterial plastid double envelope; layer three is the remnant [[plasma membrane|plasma-membrane]] of the engulfed red alga; and layer four is the host food-vacuole membrane that swallowed it. Every nuclear-encoded enzyme bound for the stroma carries a two-part address tag to cross all four gates in order.',
        blueprint: {
          role: 'Four-bilayer concentric envelope recording primary plus secondary endosymbiosis and gating protein import',
          arrivesFrom: 'Maintained by host endomembrane [[phospholipids|phospholipid]] plus plastid-synthesized lipid remodeling',
          inside: 'Four stacked ~7 nm bilayers (outer phagosomal, periplastid algal plasma, outer plastid, inner plastid) pierced by Sec61/SELMA/TOC-TIC gates',
          deliversTo: 'Imports >400 bipartite-tagged nuclear [[proteins|protein]] and triose phosphates while exporting IPP/DMAPP isoprenoids',
          loop: 'Counting four membranes directly proves red-algal secondary endosymbiosis rather than primary cyanobacterial uptake'
        },
        scientific:
          'Four concentric [[phospholipid|phospholipid]] bilayers surrounding the [[apicoplast|real-plas-apicoplast]] of [[Plasmodium falciparum|real-plasmodium]], providing direct ultrastructural evidence of secondary endosymbiosis: (1) innermost and (2) second membranes derive from the primary cyanobacterial [[chloroplast|chloroplast]] double envelope; (3) the periplastid membrane derives from the engulfed red alga [[plasma membrane|plasma-membrane]]; and (4) the outermost layer derives from the host endomembrane/phagosomal system. Nuclear-encoded proteins carry bipartite signal + transit peptides traversing Sec61, SELMA (ERAD-derived), and TOC/TIC-like translocons.',
        from: [
          { nodeId: 'phospholipid', label: 'Four Concentric Bilayers', cargo: 'Nested endosymbiotic wrappers' },
          { nodeId: 'chloroplast', label: 'Primary 2-Membrane Plastid', cargo: 'Innermost two layers' }
        ],
        to: [
          { nodeId: 'real-plas-apicoplast', label: 'Apicoplast Stroma', cargo: 'Regulated protein & triose entry' },
          { nodeId: 'real-plasmodium', label: 'Evolutionary Proof', cargo: 'Red-algal capture signature' }
        ]
      },
      es: {
        subtitle: 'Cuatro membranas concéntricas de endosimbiosis secundaria',
        simple:
          'Al seccionar el [[apicoplasto|real-plas-apicoplast]] se cuentan cuatro bicapas concéntricas de [[fosfolípidos|phospholipid]] —en vez de dos como en el [[cloroplasto|chloroplast]] vegetal—, conservando la huella exacta de un eucariota que engulló a otro eucariota fotosintético.',
        story:
          'Mientras el cloroplasto de una [[célula vegetal|real-plant]] conserva dos membranas heredadas al capturar una cianobacteria una sola vez, el [[apicoplasto|real-plas-apicoplast]] apila cuatro envolturas lipídicas anidadas. Desde el interior hacia fuera, las dos primeras corresponden al doble límite cianobacteriano original; la tercera es la antigua [[membrana plasmática|plasma-membrane]] del alga roja capturada; y la cuarta deriva de la vacuola huésped que la envolvió. Cada enzima nuclear destinada al estroma porta una etiqueta bipartita para atravesar las cuatro compuertas en orden.',
        blueprint: {
          role: 'Envoltura concéntrica de cuatro bicapas que atestigua la endosimbiosis secundaria y regula la importación proteica',
          arrivesFrom: 'Sostenida por [[fosfolípidos|phospholipid]] del sistema endomembranoso huésped y remodelación lipídica plastídica',
          inside: 'Cuatro bicapas de ~7 nm (fagosómica, periplastídica algal, externa e interna plastídicas) con translocones Sec61/SELMA/TOC-TIC',
          deliversTo: 'Importa >400 [[proteínas|protein]] nucleares con señal bipartita y triosas fosfato mientras exporta isoprenoides IPP/DMAPP',
          loop: 'Contar cuatro membranas demuestra endosimbiosis secundaria de un alga roja frente a la captura primaria vegetal'
        },
        scientific:
          'Cuatro bicapas concéntricas de [[fosfolípidos|phospholipid]] que delimitan el [[apicoplasto|real-plas-apicoplast]] de [[Plasmodium falciparum|real-plasmodium]] como evidencia ultraestructural de endosimbiosis secundaria: las dos internas derivan del [[cloroplasto|chloroplast]] cianobacteriano primario, la tercera (periplastídica) de la [[membrana plasmática|plasma-membrane]] del alga roja y la externa de la vacuola huésped; las proteínas nucleares con péptido señal + tránsito cruzan Sec61, SELMA y complejos tipo TOC/TIC.',
        from: [
          { nodeId: 'phospholipid', label: 'Cuatro bicapas concéntricas', cargo: 'Envolturas endosimbióticas anidadas' },
          { nodeId: 'chloroplast', label: 'Plasto primario de 2 membranas', cargo: 'Dos capas más internas' }
        ],
        to: [
          { nodeId: 'real-plas-apicoplast', label: 'Estroma del apicoplasto', cargo: 'Entrada regulada de proteínas' },
          { nodeId: 'real-plasmodium', label: 'Prueba evolutiva', cargo: 'Huella de captura del alga roja' }
        ]
      }
    },

    apicoplast_dna: {
      en: {
        subtitle: '35-kb Circular Plastid Genome & Bacterial-Type 70S Translation',
        simple:
          'Coiled inside the four-membrane [[apicoplast|real-plas-apicoplast]] sits a bacterial-style 35-kilobase ring of [[DNA|dna]] read by [[70S ribosomes|ribosome-70s]] - explaining why antibacterial drugs like doxycycline kill malaria on a one-cycle delay.',
        story:
          'Even after hundreds of millions of years inside a eukaryotic parasite, the [[apicoplast|real-plas-apicoplast]] still runs an unmistakable prokaryotic gene circuit right beside the eukaryotic nucleus of [[Plasmodium|real-plasmodium]]. Its 35-kilobase circular [[dsDNA|dna]] chromosome replicates with bacterial DNA gyrase and builds local [[70S ribosomes|ribosome-70s]] to synthesize roughly thirty plastid housekeeping proteins. When doxycycline or clindamycin shuts down those 70S ribosomes, the current parasite still finishes dividing using existing isoprenoids, yet its daughter merozoites inherit broken apicoplasts and die in the very next red-cell cycle.',
        blueprint: {
          role: 'Prokaryotic-type 35 kb circular organellar genome sustaining local 70S translation and apicoplast inheritance',
          arrivesFrom: 'Replicated by imported bacterial-type DNA gyrase and polymerase from dNTP [[nucleotides|nucleotide]]',
          inside: '35 kb circular ~86% A+T [[dsDNA|dna]] encoding rRNAs, tRNAs, RNA polymerase subunits, ClpC chaperone, and ~30 ORFs translated on [[70S ribosomes|ribosome-70s]]',
          deliversTo: 'Maintains apicoplast protein-import and division competence across daughter merozoites during schizogony',
          loop: 'Doxycycline and clindamycin inhibit apicoplast 70S translation, triggering the classic second-cycle delayed-death cure'
        },
        scientific:
          'Compact 35 kb covalently closed circular organellar [[dsDNA|dna]] genome (~86% A+T, inverted repeat architecture related to red-algal plastid DNA) housed within the [[apicoplast|real-plas-apicoplast]] stroma of [[Plasmodium falciparum|real-plasmodium]]. Encodes ~30 protein-coding genes (ribosomal proteins, prokaryotic RNA polymerase core, EF-Tu, SufB Fe-S scaffold, ClpC) plus complete rRNA and tRNA sets supporting bacterial-type [[70S ribosomes|ribosome-70s]]. Target of antibacterial translational inhibitors (doxycycline, clindamycin, azithromycin) causing delayed death via defective apicoplast segregation.',
        from: [
          { nodeId: 'dna', label: '35 kb Circular dsDNA', cargo: 'Red-algal plastid chromosome' },
          { nodeId: 'ribosome-70s', label: 'Plastid 70S Ribosomes', cargo: 'Bacterial-type translation core' }
        ],
        to: [
          { nodeId: 'real-plas-apicoplast', label: 'Apicoplast Biogenesis', cargo: 'Import & division competence' },
          { nodeId: 'real-bacterium', label: 'Prokaryotic Antibiotic Sensitivity', cargo: 'Doxycycline delayed-death target' }
        ]
      },
      es: {
        subtitle: 'Genoma circular de 35 kb y traducción bacteriana 70S',
        simple:
          'Enrollado dentro del [[apicoplasto|real-plas-apicoplast]] de cuatro membranas descansa un anillo de [[ADN|dna]] de 35 kilobases leído por [[ribosomas 70S|ribosome-70s]] bacterianos, lo que explica por qué antibióticos como la doxiciclina matan al parásito con un ciclo de retraso.',
        story:
          'Incluso tras cientos de millones de años dentro de un eucariota, el [[apicoplasto|real-plas-apicoplast]] conserva un circuito genético procariota inconfundible junto al núcleo de [[Plasmodium|real-plasmodium]]. Su cromosoma circular de [[ADNbc|dna]] de 35 kilobases se replica con girasa bacteriana y arma [[ribosomas 70S|ribosome-70s]] para fabricar unas treinta proteínas esenciales del plasto. Cuando la doxiciclina o la clindamicina bloquean esos ribosomas 70S, el parásito actual termina de dividirse, pero sus merozoítos hijos heredan apicoplastos inútiles y mueren en el siguiente ciclo eritrocitario.',
        blueprint: {
          role: 'Genoma circular organular de 35 kb de tipo procariota que sostiene la traducción 70S y la herencia del plasto',
          arrivesFrom: 'Replicado por ADN girasa y polimerasa de tipo bacteriano a partir de [[nucleótidos|nucleotide]] dNTP',
          inside: '[[ADNbc|dna]] circular de 35 kb (~86 % A+T) que codifica ARNr, ARNt, ARN polimerasa, ClpC y ~30 proteínas traducidas en [[ribosomas 70S|ribosome-70s]]',
          deliversTo: 'Mantiene la capacidad de importación proteica y división del apicoplasto entre merozoítos hijos en esquizogonia',
          loop: 'La doxiciclina y la clindamicina bloquean esta traducción 70S generando la clásica muerte diferida en el segundo ciclo'
        },
        scientific:
          'Genoma circular compacto de 35 kb de [[ADNbc|dna]] (~86 % A+T, con repetición invertida afín a plastos de algas rojas) alojado en el estroma del [[apicoplasto|real-plas-apicoplast]] de [[Plasmodium falciparum|real-plasmodium]]. Codifica ~30 proteínas (ribosómicas, ARN polimerasa procariota, EF-Tu, SufB, ClpC), ARNr y ARNt para sus [[ribosomas 70S|ribosome-70s]]; su inhibición por tetraciclinas, clindamicina o azitromicina impide la segregación funcional del plasto y produce muerte diferida.',
        from: [
          { nodeId: 'dna', label: 'ADNbc circular de 35 kb', cargo: 'Cromosoma plastídico algal' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S del plasto', cargo: 'Traducción de tipo bacteriano' }
        ],
        to: [
          { nodeId: 'real-plas-apicoplast', label: 'Biogénesis del apicoplasto', cargo: 'Herencia y mantenimiento' },
          { nodeId: 'real-bacterium', label: 'Sensibilidad antibiótica', cargo: 'Diana de muerte diferida' }
        ]
      }
    },

    digestive_vacuole: {
      en: {
        subtitle: 'The Acidic Hemoglobin-Digesting & Hemozoin-Building Chamber',
        simple:
          'Inside this acidic compartment of [[Plasmodium|real-plasmodium]], specialized proteases chop swallowed human [[hemoglobin|real-plas-hemoglobin]] into [[amino acids|amino-acid]] while stacking the dangerous leftover [[heme|real-plas-heme]] into dark [[hemozoin|real-plas-hemozoin]] crystals.',
        story:
          'To grow from a tiny 1.5-micrometer merozoite into thirty-two daughters inside a cramped red blood cell, [[Plasmodium|real-plasmodium]] drinks host cytosol through a cytostome pore and delivers [[hemoglobin|real-plas-hemoglobin]] vesicles into this single pH 5.2 chamber. Vacuolar V-ATPase pumps keep the lumen strongly acidic so plasmepsins and falcipains strip the globin chains into [[amino acids|amino-acid]] exported by PfCRT. Because every digested tetramer releases four reactive [[iron|atom-fe]]-centered [[heme|real-plas-heme]] rings, the vacuole doubles as a biomineralization kiln stacking them into inert [[hemozoin|real-plas-hemozoin]].',
        blueprint: {
          role: 'Single acidic proteolytic and heme-crystallization organelle powering intraerythrocytic parasite growth',
          arrivesFrom: 'Cytostome-derived double-membrane endocytic vesicles packed with host [[hemoglobin|real-plas-hemoglobin]] plus cytosolic ATP for V-ATPase',
          inside: '~1-2 micrometer acidic [[lysosome|lysosome]]-like lumen (pH ~5.0-5.4) holding plasmepsins, falcipains, neutral lipid nanodroplets, and growing [[hemozoin|real-plas-hemozoin]]',
          deliversTo: 'Exports globin-derived [[amino acids|amino-acid]] via PfCRT to [[80S ribosomes|ribosome]] while safely locking free [[heme|real-plas-heme]] into crystals',
          loop: 'Weak-base quinolines like chloroquine trap inside this acidic lumen to halt crystallization; mutant PfCRT pumps drugs back out'
        },
        scientific:
          'Acidic lysosome-like [[digestive vacuole|real-plas-digestive]] (~1-2 micrometers in trophozoites; luminal pH ~5.0-5.4 powered by V-ATPase and H+-PPase) of [[Plasmodium falciparum|real-plasmodium]]. Degrades ~60-80% of host erythrocyte [[hemoglobin|real-plas-hemoglobin]] via aspartic plasmepsins I-IV, cysteine falcipains 2/3, and falcilysin, exporting peptides and [[amino acids|amino-acid]] via PfCRT while catalyzing conversion of toxic free [[Fe3+-heme|real-plas-heme]] into stacked [[hemozoin|real-plas-hemozoin]] crystals at neutral lipid surfaces.',
        from: [
          { nodeId: 'real-plas-hemoglobin', label: 'Endocytosed RBC Hemoglobin', cargo: 'Concentrated globin substrate' },
          { nodeId: 'atom-h', label: 'V-ATPase Proton Pumping', cargo: 'Acidic pH 5.0-5.4 lumen' }
        ],
        to: [
          { nodeId: 'amino-acid', label: 'Exported Globin Amino Acids', cargo: 'Fuel for 80S translation' },
          { nodeId: 'real-plas-hemozoin', label: 'Stacked Hemozoin Crystals', cargo: 'Detoxified Fe3+-heme bricks' }
        ]
      },
      es: {
        subtitle: 'La cámara ácida digestora de hemoglobina y cristalizadora',
        simple:
          'Dentro de esta cámara ácida de [[Plasmodium|real-plasmodium]], proteasas especializadas cortan la [[hemoglobina|real-plas-hemoglobin]] humana en [[aminoácidos|amino-acid]] mientras apilan el [[hemo|real-plas-heme]] tóxico sobrante en cristales oscuros de [[hemozoína|real-plas-hemozoin]].',
        story:
          'Para crecer desde un merozoíto de 1,5 micrómetros hasta treinta y dos hijos dentro de un eritrocito, [[Plasmodium|real-plasmodium]] sorbe citosol huésped por un citostoma y envía vesículas de [[hemoglobina|real-plas-hemoglobin]] a esta cámara a pH 5,2. Las bombas V-ATPasa mantienen la acidez necesaria para que plasmepsinas y falcipaínas liberen [[aminoácidos|amino-acid]] exportados por PfCRT. Como cada tetrámero suelta cuatro anillos reactivos de [[hemo|real-plas-heme]] con [[hierro|atom-fe]], la vacuola los cristaliza de inmediato en [[hemozoína|real-plas-hemozoin]].',
        blueprint: {
          role: 'Orgánulo ácido único de proteólisis y cristalización del hemo que sostiene el crecimiento intraeritrocitario',
          arrivesFrom: 'Vesículas endocíticas citostomales repletas de [[hemoglobina|real-plas-hemoglobin]] huésped y ATP para bombas V-ATPasa',
          inside: 'Lumen ácido tipo [[lisosoma|lysosome]] de ~1–2 µm (pH ~5,0–5,4) con plasmepsinas, falcipaínas, nanogotas lipídicas y [[hemozoína|real-plas-hemozoin]]',
          deliversTo: 'Exporta [[aminoácidos|amino-acid]] de globina vía PfCRT hacia [[ribosomas 80S|ribosome]] y neutraliza el [[hemo|real-plas-heme]] libre en cristales',
          loop: 'Bases débiles como la cloroquina se acumulan en este lumen ácido para frenar la cristalización; PfCRT mutado la expulsa'
        },
        scientific:
          '[[Vacuola digestiva|real-plas-digestive]] ácida de tipo lisosomal (~1–2 µm en trofozoítos; pH ~5,0–5,4 sostenido por V-ATPasa y H⁺-PPasa) en [[Plasmodium falciparum|real-plasmodium]]. Hidroliza ~60–80 % de la [[hemoglobina|real-plas-hemoglobin]] eritrocitaria mediante plasmepsinas I–IV, falcipaínas 2/3 y falcilisina, exportando péptidos y [[aminoácidos|amino-acid]] por PfCRT y biomineralizando el [[hemo Fe³⁺|real-plas-heme]] en [[hemozoína|real-plas-hemozoin]].',
        from: [
          { nodeId: 'real-plas-hemoglobin', label: 'Hemoglobina endocitada', cargo: 'Sustrato concentrado de globina' },
          { nodeId: 'atom-h', label: 'Bombeo protónico V-ATPasa', cargo: 'Acidez luminal pH 5,0–5,4' }
        ],
        to: [
          { nodeId: 'amino-acid', label: 'Aminoácidos exportados', cargo: 'Insumo para traducción 80S' },
          { nodeId: 'real-plas-hemozoin', label: 'Cristales de hemozoína', cargo: 'Bloques inertes de hemo Fe³⁺' }
        ]
      }
    },

    hemoglobin: {
      en: {
        subtitle: 'Human Alpha2-Beta2 Hemoglobin Tetramer (PDB 1GZX)',
        simple:
          'Filling the host red blood cell around [[Plasmodium|real-plasmodium]], each four-part [[hemoglobin|real-plas-hemoglobin]] [[protein|protein]] holds four oxygen-carrying [[heme|real-plas-heme]] discs - devoured by the parasite for [[amino acids|amino-acid]] inside its [[digestive vacuole|real-plas-digestive]].',
        story:
          'Designed by vertebrate evolution to ferry [[oxygen|atom-o]] safely from lungs to capillaries, each 5.5-nanometer hemoglobin tetramer cradles four [[iron|atom-fe]]-centered [[heme|real-plas-heme]] cofactors inside alpha-helical globin pockets. Inside an infected erythrocyte, [[Plasmodium|real-plasmodium]] consumes up to eighty percent of this densely packed protein to harvest nineteen of the twenty standard [[amino acids|amino-acid]] (importing only missing isoleucine from plasma) and to keep the swollen host cell from bursting prematurely before schizogony completes.',
        blueprint: {
          role: 'Host oxygen-transport tetramer endocytosed and digested as the parasite\'s main protein nutrient reserve',
          arrivesFrom: 'Packed at ~5 mM (~270M copies) inside the host erythrocyte and gulped via the parasite cytostome',
          inside: '~64.5 kDa ~5.5 nm alpha2beta2 globin tetramer (PDB 1GZX) folded from [[alpha-helices|alpha-helix]] cradling four [[Fe-heme|real-plas-heme]] rings',
          deliversTo: 'Cleaved inside the [[digestive vacuole|real-plas-digestive]] into free [[amino acids|amino-acid]] plus four toxic [[heme|real-plas-heme]] molecules per tetramer',
          loop: 'Adult human hemoglobin contains zero isoleucine, forcing Plasmodium to import that single essential amino acid from blood plasma'
        },
        scientific:
          'Adult human oxy-hemoglobin tetramer (HbA, alpha2beta2, ~64.5 kDa, ~5.5 nm diameter; X-ray crystal structure PDB 1GZX) at ~330 mg/mL inside the host red blood cell. Each [[alpha-helical|alpha-helix]] globin subunit binds one [[Fe2+-protoporphyrin IX|real-plas-heme]] prosthetic group via proximal HisF8. Endocytosed into the [[Plasmodium falciparum|real-plasmodium]] [[digestive vacuole|real-plas-digestive]] and hydrolyzed by plasmepsins and falcipains to supply [[amino acids|amino-acid]] (except absent isoleucine) and colloid-osmotic relief while liberating four reactive [[heme|real-plas-heme]] rings.',
        from: [
          { nodeId: 'real-plas-hemoglobin', label: 'Host Erythrocyte Cytosol', cargo: '~5 mM packed HbA tetramers' },
          { nodeId: 'real-plas-heme', label: 'Four Bound Heme Pockets', cargo: 'O2-carrying Fe2+-porphyrins' }
        ],
        to: [
          { nodeId: 'real-plas-digestive', label: 'Digestive Vacuole Proteases', cargo: 'Plasmepsin & falcipain cleavage' },
          { nodeId: 'amino-acid', label: 'Free Amino Acid Harvest', cargo: '19 of 20 protein monomers' }
        ]
      },
      es: {
        subtitle: 'Tetrámero humano de hemoglobina α₂β₂ (PDB 1GZX)',
        simple:
          'Llenando el glóbulo rojo alrededor de [[Plasmodium|real-plasmodium]], cada [[proteína|protein]] tetramérica de [[hemoglobina|real-plas-hemoglobin]] aloja cuatro discos de [[hemo|real-plas-heme]] que el parásito digiere para extraer [[aminoácidos|amino-acid]] en su [[vacuola digestiva|real-plas-digestive]].',
        story:
          'Diseñada para llevar [[oxígeno|atom-o]] desde los pulmones hasta cada capilar, cada molécula de hemoglobina de 5,5 nanómetros guarda cuatro cofactores [[hemo|real-plas-heme]] con [[hierro|atom-fe]] dentro de bolsillos de globina en hélices alfa. En el eritrocito infectado, [[Plasmodium|real-plasmodium]] consume hasta el ochenta por ciento de esta reserva para cosechar diecinueve de los veinte [[aminoácidos|amino-acid]] (importando del plasma solo la isoleucina ausente) y evitar que la célula huésped estalle por exceso osmótico antes de terminar la división.',
        blueprint: {
          role: 'Tetrámero transportador de O₂ del huésped endocitado y digerido como principal despensa proteica',
          arrivesFrom: 'Empaquetada a ~5 mM (~270 millones de copias) en el eritrocito e ingerida por el citostoma parasitario',
          inside: 'Tetrámero de globina α₂β₂ (~64,5 kDa, ~5,5 nm; PDB 1GZX) con [[hélices α|alpha-helix]] protegiendo cuatro anillos [[hemo|real-plas-heme]]',
          deliversTo: 'Escindida en la [[vacuola digestiva|real-plas-digestive]] en [[aminoácidos|amino-acid]] libres y cuatro anillos tóxicos de [[hemo|real-plas-heme]]',
          loop: 'La hemoglobina adulta carece por completo de isoleucina, obligando al parásito a importarla del plasma sanguíneo'
        },
        scientific:
          'Tetrámero de oxihemoglobina humana adulta (HbA, α₂β₂, ~64,5 kDa, ~5,5 nm; estructura cristalográfica PDB 1GZX) a ~330 mg/mL en el eritrocito. Cada subunidad de [[hélices α|alpha-helix]] coordina una [[Fe²⁺-protoporfirina IX|real-plas-heme]] mediante HisF8 proximal; su digestión por plasmepsinas y falcipaínas en la [[vacuola digestiva|real-plas-digestive]] de [[Plasmodium falciparum|real-plasmodium]] aporta [[aminoácidos|amino-acid]] (salvo isoleucina) y libera cuatro equivalentes reactivos de [[hemo|real-plas-heme]].',
        from: [
          { nodeId: 'real-plas-hemoglobin', label: 'Citosol eritrocitario', cargo: 'Tetrámeros HbA a ~5 mM' },
          { nodeId: 'real-plas-heme', label: 'Cuatro bolsillos de hemo', cargo: 'Porfirinas Fe²⁺ con O₂' }
        ],
        to: [
          { nodeId: 'real-plas-digestive', label: 'Proteasas vacuolares', cargo: 'Corte por plasmepsinas y falcipaínas' },
          { nodeId: 'amino-acid', label: 'Cosecha de aminoácidos', cargo: '19 de los 20 monómeros proteicos' }
        ]
      }
    },

    hemozoin: {
      en: {
        subtitle: 'Inert Stacked Beta-Hematin Malaria Pigment Biocrystals',
        simple:
          'Growing into sharp dark bricks inside the [[digestive vacuole|real-plas-digestive]], [[hemozoin|real-plas-hemozoin]] locks reactive [[heme|real-plas-heme]] fragments into harmless solid crystals - the exact assembly process jammed by chloroquine.',
        story:
          'Stripping globin off millions of [[hemoglobin|real-plas-hemoglobin]] molecules floods the [[digestive vacuole|real-plas-digestive]] with chemically corrosive free [[heme|real-plas-heme]]. Because [[Plasmodium|real-plasmodium]] lacks an enzyme to break the porphyrin ring open, it neutralizes the threat by pairing heme molecules head-to-tail through reciprocal [[iron|atom-fe]]-to-propionate bonds and stacking the dimers into dark crystalline bars. Quinoline antimalarials such as chloroquine bind directly onto these growing crystal faces, leaving unstacked heme free to shred parasite membranes.',
        blueprint: {
          role: 'Biomineralized dark beta-hematin crystal array neutralizing toxic Fe3+-heme without ring degradation',
          arrivesFrom: 'Free [[Fe3+-protoporphyrin IX|real-plas-heme]] liberated by [[hemoglobin|real-plas-hemoglobin]] proteolysis catalyzed at neutral lipid droplets and HDP',
          inside: 'Stacked ~200-500 nm triclinic crystals built from reciprocal [[Fe3+|atom-fe]]-carboxylate propionate dimers linked by hydrogen bonds',
          deliversTo: 'Sequestered safely until host RBC lysis releases pigment crystals that spark periodic malarial fever cycles',
          loop: 'Chloroquine and amodiaquine cap fast-growing crystal faces by pi-pi stacking, causing lethal free-heme buildup'
        },
        scientific:
          'Biomineralized malaria pigment [[hemozoin|real-plas-hemozoin]] (synthetic equivalent beta-hematin; ~200-500 nm paramagnetic triclinic lath crystals) nucleated at neutral lipid interfaces and assisted by Heme Detoxification Protein (HDP) inside the [[Plasmodium falciparum|real-plasmodium]] [[digestive vacuole|real-plas-digestive]]. Consists of cyclic dimers joined by reciprocal axial [[Fe3+|atom-fe]]-O(propionate) coordination bonds (~1.89 angstroms) stacked into hydrogen-bonded chains. Primary target of 4-aminoquinoline antimalarials (chloroquine, piperaquine) that cap crystal growth surfaces.',
        from: [
          { nodeId: 'real-plas-heme', label: 'Toxic Free Fe3+-Heme', cargo: 'Oxidized protoporphyrin IX' },
          { nodeId: 'atom-fe', label: 'Reciprocal Fe-O Dimers', cargo: 'Iron-propionate crystal bonds' }
        ],
        to: [
          { nodeId: 'real-plas-digestive', label: 'Detoxified Vacuole Lumen', cargo: 'Neutralized membrane threat' },
          { nodeId: 'real-plas-hemozoin', label: 'Quinoline Drug Target', cargo: 'Chloroquine face-capping site' }
        ]
      },
      es: {
        subtitle: 'Biocristales apilados inertes de β-hematina (pigmento malárico)',
        simple:
          'Creciendo como ladrillos oscuros dentro de la [[vacuola digestiva|real-plas-digestive]], la [[hemozoína|real-plas-hemozoin]] inmoviliza los fragmentos tóxicos de [[hemo|real-plas-heme]] en cristales sólidos inofensivos, el proceso exacto que bloquea la cloroquina.',
        story:
          'Retirar la globina de millones de moléculas de [[hemoglobina|real-plas-hemoglobin]] inunda la [[vacuola digestiva|real-plas-digestive]] con [[hemo|real-plas-heme]] libre altamente corrosivo. Como [[Plasmodium|real-plasmodium]] carece de enzimas para romper el anillo porfirínico, empareja moléculas de hemo mediante enlaces recíprocos [[hierro|atom-fe]]–propionato y apila los dímeros en barras cristalinas oscuras. Antimaláricos como la cloroquina se adhieren a las caras de crecimiento del cristal, dejando hemo suelto que perfora las membranas del parásito.',
        blueprint: {
          role: 'Matriz biocristalina oscura de β-hematina que neutraliza el hemo Fe³⁺ tóxico sin degradar el anillo',
          arrivesFrom: '[[Fe³⁺-protoporfirina IX|real-plas-heme]] libre procedente de [[hemoglobina|real-plas-hemoglobin]], catalizada en gotas lipídicas neutras y HDP',
          inside: 'Cristales triclínicos apilados de ~200–500 nm formados por dímeros recíprocos [[Fe³⁺|atom-fe]]–propionato unidos por puentes de hidrógeno',
          deliversTo: 'Permanece secuestrada hasta la lisis eritrocitaria, cuando su liberación desencadena los picos febriles del paludismo',
          loop: 'La cloroquina y la amodiaquina sellan las caras cristalinas por apilamiento π–π provocando acumulación letal de hemo libre'
        },
        scientific:
          'Pigmento malárico biomineralizado [[hemozoína|real-plas-hemozoin]] (equivalente sintético β-hematina; cristales triclínicos paramagnéticos de ~200–500 nm) nucleado en interfases lipídicas neutras con ayuda de HDP en la [[vacuola digestiva|real-plas-digestive]] de [[Plasmodium falciparum|real-plasmodium]]. Integrado por dímeros cíclicos unidos por enlaces axiales recíprocos [[Fe³⁺|atom-fe]]–O(propionato) (~1,89 Å) en cadenas por puentes de hidrógeno; diana central de las 4-aminoquinolinas.',
        from: [
          { nodeId: 'real-plas-heme', label: 'Hemo Fe³⁺ libre tóxico', cargo: 'Protoporfirina IX oxidada' },
          { nodeId: 'atom-fe', label: 'Dímeros recíprocos Fe–O', cargo: 'Enlaces hierro–propionato' }
        ],
        to: [
          { nodeId: 'real-plas-digestive', label: 'Lumen vacuolar protegido', cargo: 'Neutralización del daño lipídico' },
          { nodeId: 'real-plas-hemozoin', label: 'Diana de las quinolinas', cargo: 'Bloqueo cristalino por cloroquina' }
        ]
      }
    },

    iron_atom: {
      en: {
        subtitle: 'Atomic Iron (Fe) Coordination Core of Heme & Hemozoin',
        simple:
          'At the tiniest 0.13-nanometer bottom of our zoom sits a single [[iron atom|atom-fe]] (Fe) centered inside [[heme|real-plas-heme]]: carrying oxygen safely in human blood, yet driving oxidative toxicity until locked into [[hemozoin|real-plas-hemozoin]] Fe-O bonds.',
        story:
          'Zooming from a 7.5-micrometer red blood cell all the way down to 0.13 nanometers lands on one single transition-metal atom that turns human oxygen transport into a malaria battlefield. Held by four equatorial [[nitrogen|atom-n]] atoms in [[heme|real-plas-heme]], ferrous Fe2+ carries [[oxygen|atom-o]] cleanly inside [[hemoglobin|real-plas-hemoglobin]]. Once digestion exposes it inside [[Plasmodium|real-plasmodium]], ferric Fe3+ threatens lethal free-radical oxidation until a partner propionate [[oxygen|atom-o]] locks onto its axis at 1.89 angstroms to build an inert [[hemozoin|real-plas-hemozoin]] dimer.',
        blueprint: {
          role: '0.13 nm redox-active transition-metal center governing heme O2 binding, oxidative toxicity, and hemozoin crosslinking',
          arrivesFrom: 'Central metal ion inside human [[hemoglobin|real-plas-hemoglobin]] [[heme|real-plas-heme]] entering the [[digestive vacuole|real-plas-digestive]]',
          inside: 'Element Z = 26 (Fe2+ 3d6 / Fe3+ 3d5) coordinated by four pyrrole [[nitrogens|atom-n]] plus an axial ~1.89 angstrom propionate [[O|atom-o]] bond',
          deliversTo: 'Crosslinks paired porphyrins into stable [[hemozoin|real-plas-hemozoin]] dimers and activates artemisinin endoperoxide radicals when reduced',
          loop: 'Whole-to-tiniest cascade connects a 7.5 micrometer infected human cell directly down to a single 0.13 nm Fe-O bond'
        },
        scientific:
          'Single atomic [[Iron|atom-fe]] center (Z = 26, 55.845 Da, covalent radius ~1.26 angstroms, high-spin Fe3+ ionic radius ~0.645 angstroms) coordinated equatorially by four pyrrole [[N|atom-n]] ligands inside [[protoporphyrin IX|real-plas-heme]]. Shifts from O2-binding Fe2+ in intact [[hemoglobin|real-plas-hemoglobin]] (PDB 1GZX) to reactive Fe3+ upon acidic globin cleavage, then forms the defining ~1.89 angstrom axial Fe3+-O(carboxylate) reciprocal dimer bond stabilizing [[hemozoin|real-plas-hemozoin]] inside [[Plasmodium falciparum|real-plasmodium]].',
        from: [
          { nodeId: 'real-plas-heme', label: 'Four Pyrrole Nitrogens', cargo: 'Equatorial porphyrin cage' },
          { nodeId: 'atom-o', label: 'Partner Propionate Oxygen', cargo: '1.89 A axial coordination' }
        ],
        to: [
          { nodeId: 'real-plas-hemozoin', label: 'Hemozoin Dimer Lattice', cargo: 'Inert Fe-O crosslinked sheets' },
          { nodeId: 'atom-fe', label: 'Atomic Iron (Fe) Node', cargo: 'Z = 26 redox metal center' }
        ]
      },
      es: {
        subtitle: 'Núcleo atómico de coordinación de hierro (Fe) en hemo y hemozoína',
        simple:
          'En el nivel más diminuto de 0,13 nanómetros reside un solo [[átomo de hierro|atom-fe]] (Fe) en el centro del [[hemo|real-plas-heme]]: transporta oxígeno sin daño en la sangre humana, pero resulta tóxico hasta quedar sellado por enlaces Fe–O en la [[hemozoína|real-plas-hemozoin]].',
        story:
          'Descender desde un glóbulo rojo de 7,5 micrómetros hasta 0,13 nanómetros conduce a un único metal de transición que convierte el transporte de oxígeno en el campo de batalla de la malaria. Rodeado por cuatro [[nitrógenos|atom-n]] ecuatoriales del [[hemo|real-plas-heme]], el Fe²⁺ lleva [[oxígeno|atom-o]] de forma segura en la [[hemoglobina|real-plas-hemoglobin]]. Al quedar expuesto dentro de [[Plasmodium|real-plasmodium]], el Fe³⁺ genera oxidación letal hasta que un [[oxígeno|atom-o]] propionato vecino se coordina a 1,89 Å cerrando el dímero inerte de [[hemozoína|real-plas-hemozoin]].',
        blueprint: {
          role: 'Centro metálico redox de 0,13 nm que controla la unión de O₂, la toxicidad oxidativa y el enlace de hemozoína',
          arrivesFrom: 'Ion metálico central del [[hemo|real-plas-heme]] de la [[hemoglobina|real-plas-hemoglobin]] humana en la [[vacuola digestiva|real-plas-digestive]]',
          inside: 'Elemento Z = 26 (Fe²⁺ 3d⁶ / Fe³⁺ 3d⁵) coordinado por cuatro [[nitrógenos|atom-n]] pirrólicos y un enlace axial Fe–[[O|atom-o]] de ~1,89 Å',
          deliversTo: 'Entrecruza porfirinas en dímeros estables de [[hemozoína|real-plas-hemozoin]] y activa radicales de artemisinina en estado reducido',
          loop: 'La cascada de lo grande a lo mínimo enlaza un eritrocito de 7,5 µm con un único enlace Fe–O de 0,13 nm'
        },
        scientific:
          'Átomo central de [[hierro|atom-fe]] (Z = 26, 55,845 Da, radio covalente ~1,26 Å, radio iónico Fe³⁺ alto espín ~0,645 Å) coordinado en el plano por cuatro [[nitrógenos|atom-n]] pirrólicos en la [[protoporfirina IX|real-plas-heme]]. Pasa de Fe²⁺ portador de O₂ en [[hemoglobina|real-plas-hemoglobin]] (PDB 1GZX) a Fe³⁺ reactivo tras la proteólisis ácida y forma el enlace axial recíproco Fe³⁺–O(carboxilato) de ~1,89 Å que estabiliza la [[hemozoína|real-plas-hemozoin]].',
        from: [
          { nodeId: 'real-plas-heme', label: 'Cuatro nitrógenos pirrólicos', cargo: 'Anillo ecuatorial de porfirina' },
          { nodeId: 'atom-o', label: 'Oxígeno propionato vecino', cargo: 'Coordinación axial a 1,89 Å' }
        ],
        to: [
          { nodeId: 'real-plas-hemozoin', label: 'Red dimérica de hemozoína', cargo: 'Láminas entrecruzadas Fe–O' },
          { nodeId: 'atom-fe', label: 'Átomo de hierro (Fe)', cargo: 'Centro redox metálico Z = 26' }
        ]
      }
    }
  }
};
