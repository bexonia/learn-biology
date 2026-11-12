import type { NodeLensMap, PagePartLensMap } from './types.js';

export const PROKARYOTE_NODE_LENSES: NodeLensMap = {
  prokaryote: {
    en: {
      simple:
        'A bacterium is a compact, single-room survival cell with no internal walls—its DNA, protein factories, and power plants all share one fast-moving space inside a tough layered shell.',
      story:
        'Welcome aboard life without walls at 100,000 RPM: a single-hulled survival submarine that ditched internal offices so every crew member can work shoulder-to-shoulder. Sugar and ions slip through [[outer-membrane porins|porin]] and inner-membrane pumps straight into the open cytosol, where enzymes crack fuel on the spot and hurl electrons into the [[plasma membrane|plasma-membrane]] to charge the hull like a live battery.\n\nBecause no nuclear vault locks away the [[nucleoid|nucleoid]], [[70S ribosomes|ribosome-70s]] leap onto fresh messenger RNA while [[RNA polymerase|rna-polymerase]] is still writing it, printing enzymes in seconds flat. Spare genes circulate on rogue plasmids, surplus fuel packs into storage granules, and proton-powered flagella spin outside the cell envelope to rocket the entire vessel toward the next meal.',
      blueprint:
        'Role: Autonomous open-plan microbial cell · From: Extracellular nutrients, ions, and O₂ across [[porins|porin]] and [[plasma membrane|plasma-membrane]] · Inside: Unenclosed [[nucleoid|nucleoid]] runs coupled transcription–translation via [[RNA polymerase|rna-polymerase]] and [[70S ribosomes|ribosome-70s]] while membrane proton gradients power ATP synthesis · To: Daughter cells via binary fission, horizontally shared [[plasmids|plasmid]], and proton-driven [[flagellar|flagellum]] thrust',
      scientific:
        'Unicellular prokaryotic organism lacking membrane-bound organelles or a nuclear envelope (typical rod dimensions 1–5 µm × 0.5–1 µm; cytoplasmic volume ~0.6–2 fL; macromolecular crowding ~300–400 mg/mL). Genetic material comprises a circular supercoiled dsDNA chromosome (~0.6–10 Mbp) condensed in a phase-separated nucleoid plus optional episomal plasmids. Bioenergetics operate directly across the cytoplasmic membrane (Δp ≈ −140 to −200 mV), driving F₁F₀ ATP synthases, secondary active transporters, RND efflux pumps, and H⁺/Na⁺-coupled rotary flagellar motors.'
    },
    es: {
      simple:
        'Una bacteria es una célula compacta de una sola estancia y sin tabiques internos: su ADN, sus fábricas de proteínas y sus turbinas de energía comparten un mismo taller ultrarrápido protegido por un blindaje multicapa.',
      story:
        'Bienvenido a la vida sin paredes a 100.000 revoluciones por minuto: un submarino de supervivencia de casco único que prescindió de despachos internos para que toda la tripulación trabaje codo con codo. Los azúcares y los iones cruzan las [[porinas|porin]] y los transportadores directos hacia el citosol, donde las enzimas parten el combustible al vuelo e inyectan electrones en la [[membrana plasmática|plasma-membrane]] para cargar todo el perímetro como una batería viva.\n\nAl no existir bóveda nuclear alrededor del [[nucleoide|nucleoid]], los [[ribosomas 70S|ribosome-70s]] saltan sobre el ARN mensajero mientras la [[ARN polimerasa|rna-polymerase]] aún lo está escribiendo, estampando proteínas en cuestión de segundos. Genes extra circulan en plásmidos contrabandistas, el excedente energético se apila en gránulos de reserva y los flagelos impulsados por protones giran fuera de la envoltura celular para lanzar toda la nave tras el rastro del próximo festín.',
      blueprint:
        'Rol: Célula microbiana autónoma sin compartimentos membranosos · De: Nutrientes, iones y O₂ extracelulares vía [[porinas|porin]] y [[membrana plasmática|plasma-membrane]] · Dentro: El [[nucleoide|nucleoid]] abierto acopla transcripción y traducción entre [[ARN polimerasa|rna-polymerase]] y [[ribosomas 70S|ribosome-70s]] mientras el gradiente protónico de membrana genera ATP · Hacia: Células hijas por fisión binaria, [[plásmidos|plasmid]] transferibles y propulsión rotatoria por [[flagelos|flagellum]]',
      scientific:
        'Organismo unicelular procariota carente de envoltura nuclear y de orgánulos delimitados por bicapas lipídicas (dimensiones típicas de bacilo 1–5 µm × 0,5–1 µm; volumen citoplasmático ~0,6–2 fL; concentración macromolecular ~300–400 mg/mL). El genoma consta de un cromosoma circular superenrollado de ADNbc (~0,6–10 Mpb) organizado en el nucleoide más plásmidos extracromosómicos opcionales. La bioenergética reside en la membrana citoplasmática (Δp ≈ −140 a −200 mV), alimentando ATP sintasas F₁F₀, cotransportadores secundarios, bombas de eflujo y motores flagelares rotatorios.'
    }
  },

  'bacterial-wall': {
    en: {
      simple:
        'The bacterial cell envelope is a three-layer suit of armor—an outer chemical shield, a middle chainmail belt that stops the cell from popping, and an inner power-generating skin.',
      story:
        'A Gram-negative bacterium swims through bile, detergents, and osmotic pressure that would shred a naked bubble in milliseconds, so it wraps its submarine in triple-decked hull plating. On the outside, tightly packed [[lipopolysaccharide|lps]] molecules lock arms against toxic grease while selective [[porin|porin]] airlocks admit small sugars and salts into the moat-like periplasm.\n\nFloating inside that moat, a single woven sack of [[peptidoglycan|peptidoglycan]] absorbs atmospheres of internal water pressure, stapled down to the [[plasma membrane|plasma-membrane]] where respiratory pumps pack protons into the periplasmic gap. Those trapped protons then pour back inward to spin [[ATP synthases|atp-synthase]] and flagella, turning the cell’s defensive wall into its main power capacitor.',
      blueprint:
        'Role: Triple-layer Gram-negative armor, osmotic brace, and chemiosmotic capacitor · From: Extracellular solutes entering [[porins|porin]] and cytoplasmic precursors/electrons arriving at [[plasma membrane|plasma-membrane]] · Inside: Asymmetric [[LPS|lps]] outer membrane filters toxins, periplasmic [[peptidoglycan|peptidoglycan]] resists turgor, and periplasm stores pumped H⁺ · To: Cytoplasmic nutrient importers, [[ATP synthase|atp-synthase]], and [[flagellar|flagellum]] stators',
      scientific:
        'Gram-negative tripartite cell envelope (~30–40 nm total thickness) comprising: (1) an asymmetric outer membrane (~7 nm) with a phospholipid inner leaflet, lipopolysaccharide (LPS) outer leaflet, and β-barrel porins; (2) an aqueous, oxidizing periplasm (~15–25 nm wide, 20–40% of cell volume in osmoshock) housing a monolayered ~2–7 nm peptidoglycan sacculus tethered via Braun’s lipoprotein (Lpp) and OmpA; and (3) a symmetric phospholipid inner membrane (~7 nm) maintaining the proton-motive force and housing respiratory, transport, and Sec/Tat translocation complexes.'
    },
    es: {
      simple:
        'La envoltura bacteriana es una armadura de tres capas: un escudo químico exterior, una cota de malla intermedia que evita que la célula estalle y una piel interna generadora de electricidad.',
      story:
        'Una bacteria Gram-negativa navega entre sales biliares, detergentes y una presión osmótica capaz de reventar cualquier burbuja desnuda en milisegundos, así que blinda su submarino con un casco de triple cubierta. En la cara exterior, densos cepillos de [[lipopolisacárido|lps]] repelen venenos grasos mientras esclusas selectivas de [[porina|porin]] dejan pasar azúcares pequeños y sales hacia el foso periplásmico.\n\nSuspendido en ese foso, un único saco tejido de [[peptidoglicano|peptidoglycan]] contiene varias atmósferas de empuje interno, sujeto sobre la [[membrana plasmática|plasma-membrane]] cuyas bombas respiratorias inyectan protones al espacio intermedio. Esos protones regresan luego en avalancha para mover la [[ATP sintasa|atp-synthase]] y los flagelos, convirtiendo la muralla defensiva en el gran condensador eléctrico de la célula.',
      blueprint:
        'Rol: Blindaje Gram-negativo tricapa, contención osmótica y condensador quimiosmótico · De: Solutos externos vía [[porinas|porin]] y precursores/electrones citoplasmáticos hacia la [[membrana plasmática|plasma-membrane]] · Dentro: Membrana externa con [[LPS|lps]] filtra tóxicos, [[peptidoglicano|peptidoglycan]] soporta la turgencia y el periplasma acumula H⁺ · Hacia: Importadores de nutrientes, [[ATP sintasa|atp-synthase]] y motores de [[flagelo|flagellum]]',
      scientific:
        'Envoltura celular Gram-negativa tripartita (~30–40 nm de espesor total) integrada por: (1) membrana externa asimétrica (~7 nm) con hemicapa interna fosfolipídica, hemicapa externa de lipopolisacárido (LPS) y barriles β porínicos; (2) periplasma oxidante (~15–25 nm de anchura) que aloja el sáculo monocapa de peptidoglicano (~2–7 nm) anclado covalentemente por la lipoproteína de Braun (Lpp) y no covalentemente por OmpA; y (3) membrana interna fosfolipídica (~7 nm) sede de la fuerza protón-motriz, complejos respiratorios, permeasas y translocones Sec/Tat.'
    }
  },

  peptidoglycan: {
    en: {
      simple:
        'Peptidoglycan is a single, unbroken chainmail bag woven from sugar beams and peptide staples that keeps the bacterium from bursting under its own water pressure.',
      story:
        'Fresh Lipid II bricks—forged from [[glucose|glucose]] derivatives and unusual D-[[amino acids|amino-acid]] inside the cytoplasm—flip across the inner membrane to feed the tireless welders patrolling the periplasm. Transglycosylases snap the alternating NAG and NAM sugars into long hoop-like girders around the rod, while transpeptidases cross-staple neighboring hoops into one seamless, cell-sized macromolecule.\n\nWithout this elastic steel-belted corset inside the [[cell envelope|bacterial-wall]], cytoplasmic turgor would blow the [[plasma membrane|plasma-membrane]] apart—which is exactly why penicillin and its β-lactam cousins mimic those D-amino acid staples to jam the welders mid-stitch. Meanwhile, anchored [[flagellar motors|real-motor]] and outer-membrane tethers bolt right onto the mesh for rock-solid leverage.',
      blueprint:
        'Role: Load-bearing covalent exoskeleton (murein sacculus) · From: Cytoplasmic UDP-MurNAc-pentapeptide and UDP-GlcNAc built from [[glucose|glucose]] and [[amino acids|amino-acid]], flipped as Lipid II across [[plasma membrane|plasma-membrane]] · Inside: Glycan strands of β-(1→4)-linked GlcNAc–MurNAc cross-linked by short D/L-peptide stems via PBP/SEDS enzymes · To: Structural anchor for [[bacterial envelope|bacterial-wall]], Braun’s lipoprotein, and [[flagellar|flagellum]] MotB stators',
      scientific:
        'Single bag-shaped heteropolymer macromolecule (~3 × 10⁶ Da to >10⁹ Da; ~2–7 nm thick in Gram-negatives, 20–80 nm in Gram-positives) withstood turgor pressures of ~2–5 atm (Gram-negative) to ~20 atm (Gram-positive). Composed of linear glycan chains of alternating N-acetylglucosamine (GlcNAc/NAG) and N-acetylmuramic acid (MurNAc/NAM) joined by β-1,4 glycosidic bonds (cleaved by lysozyme), cross-linked via lactyl-attached stem peptides (typically L-Ala–γ-D-Glu–meso-DAP–D-Ala–D-Ala in E. coli, 4→3 or 3→3 cross-links). Transpeptidation by penicillin-binding proteins (PBPs) is irreversibly acylated by β-lactam antibiotics.'
    },
    es: {
      simple:
        'El peptidoglicano es un único saco continuo de cota de malla, tejido con vigas de azúcar y grapas peptídicas, que impide que la bacteria reviente por su propia presión interna.',
      story:
        'Ladrillos frescos de Lípido II —forjados con derivados de [[glucosa|glucose]] y curiosos D-[[aminoácidos|amino-acid]] en el citoplasma— voltean la membrana interna para abastecer a los soldadores incansables del periplasma. Las transglicosilasas ensamblan los azúcares alternos NAG y NAM en largos aros alrededor del cilindro celular, y las transpeptidasas engrapan aro con aro hasta cerrar una sola macromolécula gigante sin costuras sueltas.\n\nSin este corsé elástico tendido dentro de la [[envoltura bacteriana|bacterial-wall]], la turgencia del interior haría estallar la [[membrana plasmática|plasma-membrane]]; por eso mismo la penicilina imita las grapas peptídicas para atascar a los soldadores en plena obra. Al mismo tiempo, los estatores del [[motor flagelar|real-motor]] y los anclajes externos se atornillan a esta malla para ganar punto de apoyo.',
      blueprint:
        'Rol: Exoesqueleto covalente resistente a la turgencia (sáculo de mureína) · De: Precursores de [[glucosa|glucose]] y [[aminoácidos|amino-acid]] exportados como Lípido II por la [[membrana plasmática|plasma-membrane]] · Dentro: Cadenas de β-(1→4)-GlcNAc–MurNAc entrecruzadas por péptidos cortos con D-aminoácidos mediante enzimas PBP/SEDS · Hacia: Soporte mecánico de la [[envoltura celular|bacterial-wall]], lipoproteína Lpp y estatores del [[flagelo|flagellum]]',
      scientific:
        'Macromolécula heteropolimérica única en forma de saco (~2–7 nm de grosor en Gram-negativas; 20–80 nm en Gram-positivas) que soporta presiones osmóticas de ~2–5 atm (Gram-negativas) hasta ~20 atm (Gram-positivas). Constituida por hebras lineales alternas de N-acetilglucosamina (NAG/GlcNAc) y ácido N-acetilmurámico (NAM/MurNAc) con enlaces β-(1→4) sensibles a lisozima, reticuladas mediante tetrapéptidos unidos al grupo D-lactilo del NAM (L-Ala–γ-D-Glu–meso-DAP–D-Ala en E. coli, enlaces 4→3 o 3→3). Las transpeptidasas PBP sufren acilación irreversible por antibióticos β-lactámicos.'
    }
  },

  nucleoid: {
    en: {
      simple:
        'Instead of locking its DNA inside a nucleus, a bacterium folds its giant chromosome loop right in the center of the room so genes can be read and turned into proteins at the exact same moment.',
      story:
        'Stretch a bacterium’s single loop of [[DNA|dna]] straight and it measures a full millimetre—a thousand times longer than the submarine that carries it—yet here it coils neatly in the middle of the cytosol with zero walls around it. Nimble architectural proteins like [[HU|hu-protein]] and ATP-burning [[gyrase|gyrase]] twist the helix into spring-loaded loops that unpack on demand whenever a gene needs to fire.\n\nBecause there is no customs gate between blueprint and factory floor, [[RNA polymerase|rna-polymerase]] clamps directly onto exposed loops and reels out RNA whose front end is immediately ambushed by waiting [[70S ribosomes|ribosome-70s]]. Before the back end of a gene has even been read, finished polypeptides are already peeling off into the cytoplasm.',
      blueprint:
        'Role: Membrane-free chromosomal command center · From: Cytoplasmic [[nucleotides|nucleotide]], ATP, and architectural proteins ([[HU|hu-protein]], [[gyrase|gyrase]]) · Inside: Circular [[DNA|dna]] chromosome compacted into negatively supercoiled plectonemic domains read directly by [[RNA polymerase|rna-polymerase]] · To: Nascent [[RNA|rna]] transcripts immediately translated at the periphery by [[70S ribosomes|ribosome-70s]] into [[polypeptides|polypeptide]]',
      scientific:
        'Non-membrane-bound sub-micrometre cytoplasmic phase (~0.5–1.5 µm) housing the bacterial circular chromosome (typically 1–5 Mbp; ~1.6 mm contour length in E. coli compacted ~10³-fold). Compaction relies on negative supercoiling (σ ≈ −0.05 maintained by DNA gyrase vs. topoisomerase I), macromolecular crowding depletion forces from cytoplasmic polysomes, and nucleoid-associated proteins (NAPs: HU, H-NS, Fis, IHF, MukBEF SMC condensin) organizing ~10 kb topological macrodomains while permitting co-transcriptional translation.'
    },
    es: {
      simple:
        'En lugar de encerrar su ADN en una caja fuerte nuclear, la bacteria pliega su enorme aro cromosómico en mitad de la sala para leer los genes y fabricar proteínas exactamente al mismo tiempo.',
      story:
        'Si estiraras el único aro de [[ADN|dna]] bacteriano mediría más de un milímetro —mil veces la eslora del submarino que lo transporta—, pero aquí yace recogido en pleno citosol sin un solo muro alrededor. Ágiles proteínas arquitectas como [[HU|hu-protein]] y la incansable [[ADN girasa|gyrase]] trenzan la doble hélice en bucles elásticos que se abren al instante cuando toca activar un gen.\n\nAl no haber aduana nuclear entre el archivo de planos y la línea de montaje, la [[ARN polimerasa|rna-polymerase]] muerde directamente el bucle expuesto y escupe ARN cuyo extremo inicial es abordado en el acto por [[ribosomas 70S|ribosome-70s]] al acecho. Antes incluso de terminar de copiarse el final del gen, los primeros polipéptidos ya están saliendo listos hacia el citoplasma.',
      blueprint:
        'Rol: Centro de mando cromosómico sin membrana nuclear · De: [[Nucleótidos|nucleotide]], ATP y proteínas arquitectónicas ([[HU|hu-protein]], [[girasa|gyrase]]) del citoplasma · Dentro: Cromosoma circular de [[ADN|dna]] plegado en dominios plectonémicos superenrollados leídos in situ por la [[ARN polimerasa|rna-polymerase]] · Hacia: Hebras nacientes de [[ARN|rna]] traducidas simultáneamente por [[ribosomas 70S|ribosome-70s]] en [[polipéptidos|polypeptide]]',
      scientific:
        'Región citoplasmática submicrométrica segregada por fase (~0,5–1,5 µm) sin membrana envolvente que contiene el cromosoma circular bacteriano (1–5 Mpb; ~1,6 mm de longitud de contorno en E. coli compactado ~10³ veces). Su organización combina superenrollamiento negativo (σ ≈ −0,05 mantenido por ADN girasa frente a topoisomerasa I), fuerzas entrópicas de exclusión por polisomas periféricos y proteínas asociadas al nucleoide (NAP: HU, H-NS, Fis, IHF y condensina MukBEF) en bucles topológicos de ~10 kb con acoplamiento directo transcripción-traducción.'
    }
  },

  plasmid: {
    en: {
      simple:
        'Plasmids are small bonus rings of DNA that float alongside the main chromosome, carrying survival upgrades like antibiotic shields that bacteria can trade with their neighbors.',
      story:
        'Think of plasmids as plug-and-play expansion cartridges circulating outside the main [[nucleoid|nucleoid]], sipping [[nucleotides|nucleotide]] from the cytosol to copy their tight little loops of DNA on their own schedule. When an antibiotic ambush hits the submarine, [[RNA polymerase|rna-polymerase]] races around a resistance plasmid so [[70S ribosomes|ribosome-70s]] can flood the hull with drug-shredding enzymes.\n\nBetter yet, conjugative plasmids pack their own smuggling kit: they direct the cell to extend a hollow mating [[pilus|pilus]] to a neighbor, nick one strand of the ring, and reel a fresh survival upgrade straight across species lines.',
      blueprint:
        'Role: Extrachromosomal mobile genetic module · From: Host cytoplasmic [[nucleotides|nucleotide]], replication enzymes, or horizontal transfer via conjugative [[pilus|pilus]] · Inside: Supercoiled circular ds[[DNA|dna]] (1–200 kb) with autonomous origin of replication and accessory operons · To: [[RNA polymerase|rna-polymerase]] and [[70S ribosomes|ribosome-70s]] for resistance/virulence [[proteins|protein]], plus recipient bacteria via conjugation',
      scientific:
        'Autonomous, covalently closed circular (or occasionally linear) extrachromosomal dsDNA replicons ranging from ~1 kb high-copy elements (15–500 copies/cell, θ or rolling-circle replication controlled by antisense RNA/iterons) to >100–200 kb low-copy conjugative plasmids (1–2 copies/cell, actively segregated by ParABS/Stb partitioning systems). Encode non-essential adaptive traits including β-lactamases, RND/MFS efflux determinants, heavy-metal resistance, bacteriocins, virulence factors, and Type IV secretion/relaxosome tra operons.'
    },
    es: {
      simple:
        'Los plásmidos son pequeños anillos extra de ADN que flotan junto al cromosoma principal y guardan mejoras de supervivencia —como escudos frente a antibióticos— que las bacterias intercambian entre sí.',
      story:
        'Imagina los plásmidos como cartuchos de expansión listos para enchufar que flotan fuera del [[nucleoide|nucleoid]] central, tomando [[nucleótidos|nucleotide]] del citosol para duplicar sus apretados aros de ADN a su propio ritmo. Cuando una descarga de antibióticos asedia el submarino, la [[ARN polimerasa|rna-polymerase]] recorre el plásmido a toda máquina para que los [[ribosomas 70S|ribosome-70s]] inunden el casco con enzimas destructoras del fármaco.\n\nMás astutos aún, los plásmidos conjugativos incluyen su propio equipo de contrabando: ordenan tender un [[pilus|pilus]] de acoplamiento hacia otra bacteria vecina, cortan una hebra del anillo y pasan una copia flamante del manual de resistencia incluso entre especies distintas.',
      blueprint:
        'Rol: Módulo genético móvil extracromosómico · De: [[Nucleótidos|nucleotide]] y polimerasas del huésped, o transferencia horizontal mediante [[pilus|pilus]] conjugativo · Dentro: [[ADN|dna]] bicatenario circular superenrollado (1–200 kb) con origen autónomo (oriV) y operones accesorios · Hacia: [[ARN polimerasa|rna-polymerase]] y [[ribosomas 70S|ribosome-70s]] para sintetizar [[proteínas|protein]] adaptativas, y células receptoras por conjugación',
      scientific:
        'Replicones autónomos extracromosómicos de ADNbc circular covalentemente cerrado (~1–200 kb), desde plásmidos multicopia pequeños (15–500 copias/célula; replicación θ o en círculo rodante regulada por ARN antisentido o iterones) hasta megaplásmidos conjugativos de bajo número de copias (1–2 copias/célula; segregación activa mediante sistemas ParABS). Portan determinantes adaptativos como β-lactamasas, bombas de resistencia, factores de virulencia, rutas catabólicas y operones tra de secreción tipo IV/relaxosoma.'
    }
  },

  'ribosome-70s': {
    en: {
      simple:
        'The 70S ribosome is the bacterium’s compact, high-speed protein printer—slightly trimmer than ours, which lets antibiotics jam bacterial factories while sparing human cells.',
      story:
        'Hot off the [[nucleoid|nucleoid]], a fresh ribbon of RNA barely clears the polymerase before a [[30S small subunit|ribo-30s]] snaps onto its leader tag and recruits a [[50S large subunit|ribo-50s]] to lock the clamp shut. Streams of amino-acid-loaded [[tRNAs|trna]] barrel in from the cytosol, clicking codon by codon through the machine at twenty stitches a second—five times faster than a human ribosome.\n\nFinished polypeptides snake out the back tunnel directly into [[GroEL chaperonins|groel]] or inner-membrane pores to keep the whole vessel running. That sleeker 70S geometry is a speed triumph with one fatal catch: drugs like tetracycline and erythromycin fit its pockets like custom wrenches while sliding harmlessly past eukaryotic 80S ribosomes.',
      blueprint:
        'Role: Coupled prokaryotic translation machine · From: Nascent m[[RNA|rna]] from [[RNA polymerase|rna-polymerase]], aminoacyl-[[tRNAs|trna]], and GTP · Inside: [[30S subunit|ribo-30s]] decodes codons while [[50S subunit|ribo-50s]] 23S rRNA catalyzes peptide bonds at ~15–22 aa/s · To: Folded cytoplasmic [[proteins|protein]] (via [[GroEL|groel]]) and membrane/periplasmic proteins via [[plasma membrane|plasma-membrane]] Sec translocons',
      scientific:
        'Bacterial 70S ribonucleoprotein complex (~2.5 MDa, ~20–25 nm diameter; ~65% rRNA, ~35% protein by mass) assembled from a 30S small subunit (16S rRNA + 21 proteins, S1–S21) and a 50S large subunit (23S + 5S rRNA + 33 proteins, L1–L36). Initiates via 16S rRNA anti-Shine–Dalgarno base-pairing with purine-rich mRNA 5′ leaders plus fMet-tRNAfMet and IF1–IF3; elongates at 15–222 peptide bonds/min (~20 aa/s at 37 °C) using EF-Tu·GTP and EF-G·GTP. Primary target of aminoglycosides, tetracyclines, macrolides, chloramphenicol, and oxazolidinones.'
    },
    es: {
      simple:
        'El ribosoma 70S es la impresora ultrarrápida y compacta de proteínas de la bacteria: algo más ligera que la humana, diferencia que aprovechan muchos antibióticos para bloquearla sin dañar nuestras células.',
      story:
        'Recién salida del [[nucleoide|nucleoid]], una cinta tibia de ARN apenas asoma de la polimerasa cuando una [[subunidad menor 30S|ribo-30s]] muerde su señal de arranque y convoca a la [[subunidad mayor 50S|ribo-50s]] para cerrar el cerrojo. Oleadas de [[ARNt|trna]] cargados de aminoácidos llegan disparadas desde el citosol, encajando codón tras codón a veinte puntadas por segundo.\n\nLos polipéptidos recién cosidos emergen por el túnel trasero directo hacia cámaras [[GroEL|groel]] o poros de la membrana interna para sostener la nave a pleno rendimiento. Ese diseño 70S ligero es un prodigio de velocidad con un talón de Aquiles: antibióticos como la tetraciclina o la estreptomicina encajan en sus huecos como llaves a medida sin tocar nuestros ribosomas 80S.',
      blueprint:
        'Rol: Máquina procariota de traducción acoplada · De: ARNm naciente de [[ARN polimerasa|rna-polymerase]], aminoacil-[[ARNt|trna]] y GTP · Dentro: La [[subunidad 30S|ribo-30s]] verifica codones y la [[subunidad 50S|ribo-50s]] une aminoácidos a ~15–22 aa/s · Hacia: [[Proteínas|protein]] citoplasmáticas (asistidas por [[GroEL|groel]]) y proteínas de envoltura vía [[membrana plasmática|plasma-membrane]]',
      scientific:
        'Complejo ribonucleoproteico bacteriano 70S (~2,5 MDa, ~20–25 nm de diámetro; ~65% ARNr y ~35% proteínas en masa) integrado por la subunidad menor 30S (ARNr 16S + 21 proteínas) y la subunidad mayor 50S (ARNr 23S y 5S + 33 proteínas). Inicia mediante apareamiento anti-Shine–Dalgarno del ARNr 16S con el líder 5′ del ARNm junto a fMet-ARNtfMet e IF1–IF3; elonga a ~15–22 aa/s a 37 °C asistido por EF-Tu·GTP y EF-G·GTP. Diana selectiva de aminoglucósidos, tetraciclinas, macrólidos, cloranfenicol y oxazolidinonas.'
    }
  },

  flagellum: {
    en: {
      simple:
        'A bacterial flagellum is a real microscopic outboard motor and corkscrew propeller, spun hundreds of times a second not by ATP fuel directly, but by a rushing stream of protons.',
      story:
        'Forget muscles or whipping tails—this propeller runs on a true rotary axle bolted straight through the [[cell envelope|bacterial-wall]] and braced against the [[peptidoglycan|peptidoglycan]] wall. Protons packed into the periplasm by the [[respiratory chain|electron-transport-chain]] cascade back down MotA/MotB stator chutes in the [[plasma membrane|plasma-membrane]], kicking electrostatic teeth on the rotor to whirl the shaft up to 300 revolutions per second.\n\nOutside the hull, a curved universal-joint hook bends that spin into a long corkscrew whip of protein flagellin. Spin counterclockwise and half a dozen whips braid into one sleek thrust bundle driving the cell up a sugar trail; receive a panic signal from the [[chemoreceptor array|real-pole]], slam into reverse for a tenth of a second, and the bundle flies apart to tumble the submarine onto a brand-new heading.',
      blueprint:
        'Role: Proton-driven rotary propulsion nanomachine · From: Periplasmic H⁺ gradient generated by [[respiratory chain|electron-transport-chain]] and directional signals from [[chemoreceptor array|real-pole]] · Inside: [[Peptidoglycan|peptidoglycan]]-anchored stators in [[plasma membrane|plasma-membrane]] torque the basal rotor, universal hook, and helical flagellin [[protein|protein]] filament · To: Hydrodynamic thrust (~25–35 µm/s runs and reorienting tumbles) and spent H⁺ returned to [[cytosol|cytosol]]',
      scientific:
        'Trans-envelope rotary nanomachine (~20 nm filament diameter, 5–20 µm length; ~45 nm basal body) built from ~30 distinct proteins via an axial Type III export apparatus. Comprises cytoplasmic C-ring switch (FliG/FliM/FliN), inner-membrane MS-ring (FliF), periplasmic/outer-membrane P- and L-ring bushings (FlgI/FlgH), 55-nm universal-joint hook (FlgE), and left-handed helical flagellin (FliC) filament (~11 protofilaments, 2.3 µm pitch). Up to 11 peptidoglycan-anchored MotA₅MotB₂ stator complexes conduct ~1,200 H⁺/rev down Δp, generating ~1,000–4,000 pN·nm torque at 100–300 Hz (~18,000 rpm in E. coli; >1,000 Hz in Na⁺-driven Vibrio motors).'
    },
    es: {
      simple:
        'El flagelo bacteriano es un auténtico motor fueraborda microscópico con hélice en sacacorchos, capaz de girar cientos de veces por segundo impulsado directamente por una corriente de protones.',
      story:
        'Olvida los latigazos musculares: esta hélice gira sobre un eje rotatorio real atornillado a través de toda la [[envoltura celular|bacterial-wall]] y calzado contra la malla de [[peptidoglicano|peptidoglycan]]. Los protones acumulados en el periplasma por la [[cadena respiratoria|electron-transport-chain]] caen en cascada por los estatores MotA/MotB de la [[membrana plasmática|plasma-membrane]], golpeando cargas eléctricas del rotor hasta hacerlo zumbar a 300 vueltas por segundo.\n\nFuera del casco, un codo flexible transfiere el giro a un larguísimo tirabuzón de proteína flagelina. Si gira en sentido antihorario, varios látigos se trenzan en una sola cola propulsora que lanza la nave rastro arriba tras el azúcar; si llega una alerta desde la [[matriz de quimiorreceptores|real-pole]], el embrague mete marcha atrás una décima de segundo, el haz se abre y el submarino da un vuelco acrobático hacia un nuevo rumbo.',
      blueprint:
        'Rol: Nanomáquina rotatoria de propulsión impulsada por protones · De: Gradiente de H⁺ periplásmico de la [[cadena respiratoria|electron-transport-chain]] y señales de giro desde la [[matriz de quimiorreceptores|real-pole]] · Dentro: Estatores anclados al [[peptidoglicano|peptidoglycan]] en la [[membrana plasmática|plasma-membrane]] giran el rotor basal, el gancho y el filamento helicoidal de [[proteína|protein]] flagelina · Hacia: Empuje hidrodinámico (carreras de ~25–35 µm/s y vuelcos) y retorno de H⁺ al [[citosol|cytosol]]',
      scientific:
        'Nanomáquina rotatoria transenvoltura (filamento de ~20 nm de ancho y 5–20 µm de largo; cuerpo basal de ~45 nm) ensamblada mediante un sistema axial de exportación tipo III. Consta de anillo conmutador C citoplasmático (FliG/FliM/FliN), anillo MS en membrana interna (FliF), cojinetes P y L (FlgI/FlgH), gancho articulado de ~55 nm (FlgE) y filamento helicoidal levógiro de flagelina FliC (~11 protofilamentos, paso de 2,3 µm). Hasta 11 complejos estatores MotA₅MotB₂ conducen ~1.200 H⁺/vuelta a favor de Δp, desarrollando pares de ~1.000–4.000 pN·nm a 100–300 Hz (~18.000 rpm en E. coli; >1.000 Hz en motores de Na⁺ de Vibrio).'
    }
  },

  pilus: {
    en: {
      simple:
        'Pili are ultra-thin protein grappling hooks bristling from the bacterium’s surface—used to cling onto host tissues against rushing fluids, drag the cell across surfaces, or reel in neighbor DNA.',
      story:
        'Fresh pilin [[proteins|protein]] thread out across the [[plasma membrane|plasma-membrane]], get escorted across the periplasm by dedicated chaperones, and click base-first into an outer-membrane usher ring that extrudes a stiff hair-thin cable into the outside world. At the very tip sits a spring-loaded adhesin claw tuned to grab sugar coats on gut or urinary walls—tightening its grip like a finger-trap the harder flushing currents tug on the [[bacterium|prokaryote]].\n\nSpecialized cousin pili take the grappling hook further: Type IV pili burn ATP at their base to winch the cell forward like a mountaineer, while conjugative sex pili dock onto another cell to pipe [[plasmid|plasmid]] [[DNA|dna]] straight across the gap.',
      blueprint:
        'Role: Surface adhesion grappling fiber, twitching winch, and DNA bridge · From: Sec-exported pilin [[proteins|protein]] crossing [[plasma membrane|plasma-membrane]] to outer-membrane assembly ushers/ATPases · Inside: Helical rod (~6–7 nm wide) of polymerized pilin subunits capped by lectin-like tip adhesins (e.g. FimH) · To: Host glycoprotein anchorage for [[prokaryote|prokaryote]], biofilm scaffolding, or horizontal [[plasmid|plasmid]] [[DNA|dna]] transfer',
      scientific:
        'Non-flagellar filamentous surface appendages (~6–8 nm diameter, 0.5–4 µm length) falling into chaperone–usher fimbriae (e.g. Type 1 pili FimA rod ~3.4 subunits/turn with catch-bond mannose-binding FimH adhesin at the tip; donor-strand complementation via FimC/FimD), ATP-powered Type IV pili (PilA/PilB/PilT motor retracting with >100 pN stall force for twitching motility and natural transformation), and Type IV secretion conjugative F-pili (~8.5 nm outer diameter, 2–3 nm lumen).'
    },
    es: {
      simple:
        'Los pili son finísimos garfios proteicos que erizan la superficie bacteriana: sirven para aferrarse a los tejidos frente a corrientes bruscas, arrastrarse sobre superficies o pescar ADN vecino.',
      story:
        'Subunidades frescas de [[proteína|protein]] pilina cruzan la [[membrana plasmática|plasma-membrane]], atraviesan el periplasma escoltadas por chaperonas y encajan por la base en un anillo ensamblador externo que despliega un cable rígido hacia el exterior. En la punta misma aguarda una pinza adhesiva diseñada para enganchar azúcares de las paredes intestinales o urinarias, cerrando el agarre con más fuerza cuanto más tiran las corrientes para barrer a la [[bacteria|prokaryote]].\n\nOtras variantes llevan el garfio al extremo: los pili tipo IV queman ATP en su base para recoger cable y arrastrar la célula como un escalador, mientras los pili sexuales tienden un puente hueco por donde deslizar [[plásmidos|plasmid]] de [[ADN|dna]] hacia una vecina.',
      blueprint:
        'Rol: Fibra de adhesión superficial, cabrestante retráctil y puente conjugativo · De: Subunidades de [[proteína|protein]] pilina exportadas por la [[membrana plasmática|plasma-membrane]] hacia ensambladores de membrana externa · Dentro: Hélice cilíndrica (~6–7 nm de grosor) de pilinas coronada por adhesinas de punta (como FimH) · Hacia: Anclaje de la [[bacteria|prokaryote]] a tejidos y biopelículas, motilidad contráctil o transferencia de [[plásmidos|plasmid]] de [[ADN|dna]]',
      scientific:
        'Apéndices filamentosos superficiales no flagelares (~6–8 nm de diámetro, 0,5–4 µm de longitud) que comprenden fimbrias de la vía chaperona-usher (p. ej., pili tipo 1 de varilla helicoidal FimA a ~3,4 subunidades/vuelta con adhesina FimH de enlace tipo catch-bond específica de D-manosa), pili tipo IV retráctiles dependientes de ATPasas PilB/PilT (fuerzas de retracción >100 pN para motilidad twitching y captación de ADN) y pili conjugativos F asociados a secreción tipo IV (~8,5 nm de diámetro externo, luz central de 2–3 nm).'
    }
  },

  microcompartment: {
    en: {
      simple:
        'A bacterial microcompartment is a miniature geometric workshop built entirely out of interlocking protein tiles—giving the cell a private room for tricky or toxic chemistry without using any membrane fat.',
      story:
        'Who says a cell without lipid walls cannot build VIP labs? Thousands of flat hexagonal and pentagonal [[protein|protein]] tiles snap together in the [[cytosol|cytosol]] like a soccer-ball geodesic dome, sealing specialized enzymes—such as sluggish [[RuBisCO|rubisco]] and rapid-fire carbonic anhydrase—inside a private icosahedral vault.\n\nCharged central pores in the tiles invite bicarbonate ions in while blocking uncharged carbon dioxide and oxygen from leaking across the shell. Inside a carboxysome, trapped CO₂ skyrockets right under RuBisCO’s nose, churning out three-carbon [[sugar|sugar]] precursors that slip back out the tile pores to feed the rest of the [[bacterium|prokaryote]].',
      blueprint:
        'Role: Lipid-free polyhedral metabolic organelle · From: Bicarbonate or volatile metabolic substrates entering from [[cytosol|cytosol]] through selective hexamer tile pores · Inside: Icosahedral BMC-[[protein|protein]] shell (~100–200 nm) concentrates CO₂ around encapsulated [[RuBisCO|rubisco]] (carboxysome) or traps toxic aldehydes (metabolosome) · To: 3-phosphoglycerate / fixed carbon intermediates exported to [[cytosol|cytosol]] for [[sugar|sugar]] and biomass synthesis',
      scientific:
        'Self-assembling proteinaceous organelle (100–200 nm diameter, ~300–600 MDa) bounded by a ~3–4 nm semi-permeable polyhedral shell of BMC-H hexamers, BMC-T trimers, and vertex-capping BMC-P pentamers (~0.4–0.7 nm positively charged central pores). Anabolic α/β-carboxysomes co-encapsulate form I RuBisCO (~250–1,000 copies condensed via CcmM/CsoS2 linkers) and carbonic anhydrase to elevate local [CO₂] >10-fold above Km and suppress photorespiration; catabolic metabolosomes (Pdu, Eut) sequester propionaldehyde/acetaldehyde intermediates.'
    },
    es: {
      simple:
        'Un microcompartimento bacteriano es un taller geométrico en miniatura construido solo con baldosas proteicas encajadas: crea una sala privada para reacciones delicadas o tóxicas sin gastar una sola gota de grasa.',
      story:
        '¿Quién dijo que una célula sin tabiques de grasa no podía montar laboratorios privados? Miles de losetas hexagonales y pentagonales de [[proteína|protein]] se ensamblan en el [[citosol|cytosol]] como una cúpula geodésica, encerrando enzimas selectas —como la parsimoniosa [[RuBisCO|rubisco]] y la veloz anhidrasa carbónica— dentro de una cámara icosaédrica blindada.\n\nDiminutos poros cargados en el centro de cada loseta dejan entrar iones bicarbonato pero impiden que escapen el gas carbónico o entre el oxígeno competidor. Dentro del carboxisoma, el CO₂ concentrado se dispara justo ante la RuBisCO, que despacha precursores de [[azúcar|sugar]] de vuelta por los poros hacia el resto de la [[bacteria|prokaryote]].',
      blueprint:
        'Rol: Orgánulo metabólico poliédrico exclusivamente proteico · De: Bicarbonato o sustratos metabólicos del [[citosol|cytosol]] a través de poros selectivos centrales · Dentro: Cápside icosaédrica (~100–200 nm) de [[proteínas|protein]] BMC que concentra CO₂ junto a [[RuBisCO|rubisco]] o confina aldehídos volátiles · Hacia: Precursores de [[azúcar|sugar]] (3-fosfoglicerato) y metabolitos limpios exportados al [[citosol|cytosol]]',
      scientific:
        'Orgánulo proteico autoensamblado (100–200 nm de diámetro, ~300–600 MDa) delimitado por una cubierta poliédrica semipermeable de ~3–4 nm formada por hexámeros BMC-H, trímeros BMC-T y pentámeros de vértice BMC-P con poros centrales cargados positivamente (~0,4–0,7 nm). Los carboxisomas α/β coencapsulan RuBisCO forma I y anhidrasa carbónica mediante proteínas andamio (CcmM/CsoS2), elevando la [CO₂] local >10 veces para suprimir la oxigenación; los metabolosomas catabólicos (Pdu, Eut) confinan aldehídos citotóxicos.'
    }
  },

  'ribo-50s': {
    en: {
      simple:
        'The 50S large subunit is the anvil of the bacterial ribosome, where folded RNA—not protein—actually welds amino acids together into a growing chain.',
      story:
        'Once the [[30S small subunit|ribo-30s]] verifies a codon match, this heavier crown slams down on top and opens its catalytic vault to incoming [[tRNAs|trna]]. Deep inside, not a single [[protein|protein]] side chain touches the weld: twisted loops of 23S [[RNA|rna]] position the new amino acid with sub-ångström precision so the growing chain snaps onto it—proving the ribosome is an ancient RNA machine wearing a protein exoskeleton.\n\nEach newly forged link threads straight down a 10-nanometre exit tunnel carved through the 50S core, emerging into waiting [[GroEL cages|groel]] or membrane channels before cytosolic tangles can ambush it.',
      blueprint:
        'Role: Peptidyl-transferase ribozyme core and nascent-chain exit conduit · From: Validated aminoacyl-[[tRNA|trna]] positioned by [[30S subunit|ribo-30s]] and EF-Tu/EF-G GTPase strokes · Inside: 23S and 5S r[[RNA|rna]] scaffolded by 33 ribosomal [[proteins|protein]] catalyzes peptide bond formation and guides chain down a ~10 nm tunnel · To: Nascent [[polypeptides|polypeptide]] emerging to Trigger Factor, [[GroEL|groel]], or Sec translocons, plus deacylated tRNA release',
      scientific:
        'Large bacterial ribosomal subunit (~1.6 MDa, ~20 nm across) comprising 23S rRNA (2,904 nt in E. coli), 5S rRNA (120 nt), and 33 proteins (uL1–bL36). The peptidyl-transferase center (PTC, domain V of 23S rRNA; key catalytic nucleotide A2451) is devoid of protein within ~18 Å, accelerating aminolysis ~10⁷-fold via proton-shuttle substrate-assisted catalysis on the P-site tRNA A76 2′-OH. Houses the GTPase-associated sarcin–ricin loop and a ~10 nm × 1.5 nm polypeptide exit tunnel targeted by macrolide, lincosamide, streptogramin B, and phenicol antibiotics.'
    },
    es: {
      simple:
        'La subunidad mayor 50S es el yunque del ribosoma bacteriano: en su corazón, hebras plegadas de ARN —y no proteínas— sueldan cada aminoácido a la cadena naciente.',
      story:
        'En cuanto la [[subunidad menor 30S|ribo-30s]] valida el codón correcto, esta cúpula mayor encaja encima y abre su cámara catalítica a los [[ARNt|trna]] entrantes. En lo más hondo del taller ni una sola cadena lateral de [[proteína|protein]] toca la soldadura: pliegues exactos del [[ARN|rna]] 23S alinean el nuevo aminoácido al subångström para transferirle toda la cadena en crecimiento, revelando que el ribosoma es una antiquísima enzima de ARN vestida con armazón proteico.\n\nCada eslabón recién forjado avanza por un túnel de salida de diez nanómetros excavado a través del núcleo 50S, asomando hacia cápsulas [[GroEL|groel]] o poros de membrana antes de poder enredarse.',
      blueprint:
        'Rol: Núcleo ribozímico peptidil-transferasa y túnel de salida naciente · De: Aminoacil-[[ARNt|trna]] verificado por la [[subunidad 30S|ribo-30s]] e impulsos GTPásicos de EF-Tu/EF-G · Dentro: ARNr 23S y 5S de [[ARN|rna]] con 33 [[proteínas|protein]] catalizan el enlace peptídico y guían la hebra por un túnel de ~10 nm · Hacia: [[Polipéptidos|polypeptide]] nacientes entregados a Trigger Factor, [[GroEL|groel]] o SecYEG, y ARNt descargado',
      scientific:
        'Subunidad ribosómica bacteriana mayor (~1,6 MDa, ~20 nm) constituida por ARNr 23S (2.904 nt en E. coli), ARNr 5S (120 nt) y 33 proteínas (uL1–bL36). El centro peptidil-transferasa (PTC, dominio V del ARNr 23S, nucleótido clave A2451) carece de cadenas proteicas a menos de ~18 Å y acelera ~10⁷ veces la aminólisis mediante catálisis asistida por el 2′-OH de A76 del peptidil-ARNt. Contiene el centro asociado a GTPasas (bucle sarcina-ricina) y un túnel de salida de ~10 nm × 1,5 nm donde se fijan macrólidos, lincosamidas y cloranfenicol.'
    }
  },

  'ribo-30s': {
    en: {
      simple:
        'The 30S small subunit is the barcode scanner of the bacterial ribosome—catching fresh mRNA threads and checking that every incoming tRNA matches the three-letter code.',
      story:
        'Mere nanoseconds after a gene’s 5′ leader pokes out of [[RNA polymerase|rna-polymerase]], the tail end of 16S [[RNA|rna]] inside this nimble head base-pairs directly with the Shine–Dalgarno landing strip to line up the start codon. Once the [[50S partner|ribo-50s]] docks on top, courier [[tRNAs|trna]] audition in the decoding groove at breakneck speed.\n\nTwo spring-loaded adenine fingers on the 16S RNA flip out to feel the geometry of every codon–anticodon pair: a clean Watson–Crick fit snaps the head closed and triggers peptide welding upstairs, while a near-miss gets booted back into the [[cytosol|cytosol]] before a wrong amino acid can spoil the protein.',
      blueprint:
        'Role: mRNA recruitment and high-fidelity codon–anticodon decoding head · From: Nascent m[[RNA|rna]] from [[RNA polymerase|rna-polymerase]], initiator/elongator [[tRNAs|trna]], and initiation factors IF1–IF3 · Inside: 16S r[[RNA|rna]] + 21 [[proteins|protein]] bind Shine–Dalgarno leader and probe A-site minor-groove geometry via A1492/A1493 · To: Validated codon-matched tRNAs handed into [[50S subunit|ribo-50s]] catalytic core within [[70S ribosome|ribosome-70s]]',
      scientific:
        'Small bacterial ribosomal subunit (~0.9 MDa, ~15 nm) composed of 16S rRNA (1,542 nt in E. coli, folded into body, platform, head, and helix 44) and 21 proteins (bS1–bS21). The 3′ pyrimidine-rich 16S rRNA tail (5′-ACCUCCUUA-3′) hybridizes with mRNA Shine–Dalgarno sequences 5–9 nt upstream of AUG. Decoding fidelity (~10⁻³–10⁻⁴ error/codon) relies on induced-fit flipping of 16S rRNA bases A1492, A1493, and G530 to monitor Watson–Crick minor-groove geometry at codon positions 1 and 2; aminoglycosides (streptomycin, gentamicin) lock A1492/A1493 out to induce lethal miscoding, whereas tetracyclines sterically block A-site tRNA accommodation.'
    },
    es: {
      simple:
        'La subunidad menor 30S es el lector de código de barras del ribosoma bacteriano: atrapa el ARNm recién nacido y comprueba que cada ARNt entrante coincida exactamente con su triplete.',
      story:
        'Apenas unos nanosegundos después de que el extremo inicial de un gen asome de la [[ARN polimerasa|rna-polymerase]], la cola del [[ARN|rna]] 16S de este cabezal ligero se aparea con la pista Shine–Dalgarno para clavar el codón de arranque en posición. Cuando la [[subunidad 50S|ribo-50s]] cierra encima, los mensajeros [[ARNt|trna]] pasan audición tras audición a ritmo vertiginoso.\n\nDos adeninas móviles del ARN 16S saltan como palpadores sobre cada pareja codón-anticodón: si la geometría encaja al milímetro, el cabezal bascula y da luz verde a la soldadura en el piso superior; si falla por un pelo, el intruso sale despedido de vuelta al [[citosol|cytosol]] antes de colar un aminoácido equivocado.',
      blueprint:
        'Rol: Cabezal de captura de ARNm y verificación de fidelidad codón-anticodón · De: ARNm naciente de [[ARN polimerasa|rna-polymerase]], [[ARNt|trna]] cargados y factores IF1–IF3 · Dentro: ARNr 16S de [[ARN|rna]] + 21 [[proteínas|protein]] reconocen la secuencia Shine–Dalgarno e inspeccionan el surco menor con A1492/A1493 · Hacia: ARNt validados transferidos al centro catalítico de la [[subunidad 50S|ribo-50s]] dentro del [[ribosoma 70S|ribosome-70s]]',
      scientific:
        'Subunidad ribosómica bacteriana menor (~0,9 MDa, ~15 nm) formada por ARNr 16S (1.542 nt en E. coli, dominios cuerpo, plataforma, cabeza y hélice 44) y 21 proteínas (bS1–bS21). El extremo 3′ del ARNr 16S (5′-ACCUCCUUA-3′) hibrida con la secuencia Shine–Dalgarno situada 5–9 nt aguas arriba del codón de inicio. La fidelidad traduccional (~10⁻³–10⁻⁴ errores/codón) depende de la eversión de A1492, A1493 y G530 sobre el surco menor en las dos primeras posiciones del dúplex codón-anticodón; los aminoglucósidos fijan A1492/A1493 induciendo lectura errónea y las tetraciclinas bloquean el sitio A.'
    }
  },

  trna: {
    en: {
      simple:
        'Transfer RNA is an L-shaped molecular adapter that reads a three-letter RNA word at one end and delivers the matching amino acid brick at the other.',
      story:
        'Out in the crowded [[cytosol|cytosol]], twenty specialist synthetase enzymes patrol like meticulous quartermasters, burning ATP to clip each [[amino acid|amino-acid]] onto the 3′ tail of its exact matching L-shaped nucleotide courier. Immediately, elongation factor EF-Tu wraps the loaded courier in a protective GTP-powered escort and rockets it toward the nearest working [[70S ribosome|ribosome-70s]].\n\nDown at the [[30S subunit|ribo-30s]], the anticodon tip tests the mRNA triplet; on a clean match, EF-Tu snaps its GTP latch and bows out, swinging the amino acid upstairs into the [[50S catalytic forge|ribo-50s]]. Moments later, the empty courier ejects through the exit door, ready to be recharged for another lap.',
      blueprint:
        'Role: Bilingual genetic-code adapter between mRNA codons and amino acids · From: Free [[amino acids|amino-acid]], ATP, aminoacyl-tRNA synthetases, and EF-Tu·GTP in [[cytosol|cytosol]] · Inside: ~76-[[nucleotide|nucleotide]] cloverleaf folded into a 7-nm L-shape with anticodon loop at one pole and 3′-CCA aminoacyl ester at the other · To: Codon decoding in [[30S subunit|ribo-30s]] and peptide transfer in [[50S subunit|ribo-50s]] of [[70S ribosomes|ribosome-70s]]',
      scientific:
        'Compact non-coding RNA (~73–93 nt, ~25 kDa, ~7 × 6 × 2.5 nm coaxial L-fold of acceptor–TψC stem and D–anticodon stem stabilized by tertiary base triples and post-transcriptional modifications such as pseudouridine, dihydrouridine, and wobble-tuning inosine/queuosine; PDB 1EHZ/1TTT). Aminoacyl-tRNA synthetases (classes I and II, hydrolyzing ATP → AMP + PPi with editing domains achieving <10⁻⁴ mischarging) esterify cognate amino acids to the 2′- or 3′-OH of terminal A76; delivered to the ribosomal A-site as an EF-Tu·GTP·aa-tRNA ternary complex (~150–200 µM total tRNA in fast-growing E. coli).'
    },
    es: {
      simple:
        'El ARN de transferencia es un adaptador molecular en forma de L que lee una palabra genética de tres letras por un extremo y entrega el ladrillo de aminoácido exacto por el otro.',
      story:
        'En medio del bullicioso [[citosol|cytosol]], veinte enzimas sintetasas patrullan como intendentes implacables, gastando ATP para enganchar cada [[aminoácido|amino-acid]] en la cola 3′ de su mensajero exacto de nucleótidos plegado en L. Acto seguido, el factor EF-Tu envuelve al mensajero cargado en una escolta propulsada por GTP y lo dispara hacia el [[ribosoma 70S|ribosome-70s]] más cercano.\n\nAbajo, en la [[subunidad 30S|ribo-30s]], la punta del anticodón pone a prueba el triplete del ARNm; si hay pleno acierto, EF-Tu quema su GTP y se aparta para que el aminoácido bascule arriba hacia la fragua de la [[subunidad 50S|ribo-50s]]. Instantes después, el adaptador vacío sale por la compuerta lateral listo para recargarse y volver a la carga.',
      blueprint:
        'Rol: Adaptador bilingüe entre codones del ARNm y aminoácidos · De: [[Aminoácidos|amino-acid]] libres, ATP, aminoacil-ARNt sintetasas y EF-Tu·GTP en el [[citosol|cytosol]] · Dentro: Cadena de ~76 [[nucleótidos|nucleotide]] plegada en L (~7 nm) con bucle anticodón en un extremo y cola aceptora 3′-CCA aminoacilada en el opuesto · Hacia: Lectura en la [[subunidad 30S|ribo-30s]] y entrega peptídica en la [[subunidad 50S|ribo-50s]] del [[ribosoma 70S|ribosome-70s]]',
      scientific:
        'ARN pequeño no codificante (~73–93 nt, ~25 kDa, arquitectura coaxial en L de ~7 × 6 × 2,5 nm formada por el apilamiento aceptor–TψC y D–anticodón con bases modificadas ψ, D, m⁷G e hipoxantina/queuosina en posición 34 de tambaleo; PDB 1EHZ/1TTT). Las aminoacil-ARNt sintetasas (clases I y II, error <10⁻⁴ gracias a dominios de edición hidrolítica) esterifican cada aminoácido al 2′- o 3′-OH de la adenosina terminal A76 consumiendo ATP → AMP + PPi; el complejo ternario EF-Tu·GTP·aa-ARNt abastece el sitio A ribosómico (~150–200 µM de ARNt total en E. coli en fase exponencial).'
    }
  },

  'rna-polymerase': {
    en: {
      simple:
        'RNA polymerase is a molecular crab claw that latches onto the start of a gene, unzips a tiny bubble of DNA, and prints a working RNA copy at forty to eighty letters a second.',
      story:
        'Guided through the tangled [[nucleoid|nucleoid]] by its detachable σ scout protein, this giant crab claw slides along chromosomal [[DNA|dna]] until σ spots a promoter signpost and pries twelve base pairs apart into an open bubble. Ribonucleoside triphosphates pour in through a side funnel from the [[cytosol|cytosol]], snapping onto the template strand over a catalytic magnesium spark at forty to eighty letters every second.\n\nOnce ten letters clear the chute, the σ scout lets go and the core claw sprints down the operon—with eager [[70S ribosomes|ribosome-70s]] grabbing the fresh [[RNA|rna]] tail right behind its bumper so translation and transcription race forward as one convoy.',
      blueprint:
        'Role: DNA-dependent transcription engine for all bacterial RNAs · From: Supercoiled chromosomal/plasmid [[DNA|dna]] in [[nucleoid|nucleoid]], cytosolic NTP [[nucleotides|nucleotide]], and promoter-specificity σ factors · Inside: α₂ββ′ω core pincers maintain a ~12–14 bp transcription bubble and polymerize 5′→3′ [[RNA|rna]] via two-Mg²⁺ catalysis · To: Nascent mRNA immediately boarded by [[70S ribosomes|ribosome-70s]], plus rRNA and [[tRNA|trna]] transcripts',
      scientific:
        'Single multi-subunit bacterial DNA-dependent RNA polymerase (~400 kDa α₂ββ′ω core; ~450–480 kDa holoenzyme with σ factor; ~15 × 11.5 × 11 nm) transcribing all mRNA, rRNA, and tRNA species. Housekeeping σ⁷⁰ (or stress σ³⁸/σ³²/σ⁵⁴/σE) recognizes −35 (TTGACA) and −10 (TATAAT) promoter hexamers to isomerize closed-to-open complexes (~13 bp unwound bubble, 8–9 bp RNA:DNA hybrid). Elongates at 40–85 nt/s using two active-site Mg²⁺ ions coordinated by a conserved β′-NADFDGD motif; terminates via intrinsic GC-hairpin/poly-U slippage or ATP-dependent hexameric Rho helicase; inhibited by rifamycins.'
    },
    es: {
      simple:
        'La ARN polimerasa es una pinza de cangrejo molecular que localiza el inicio de un gen, abre una pequeña burbuja en el ADN e imprime una copia activa de ARN a entre cuarenta y ochenta letras por segundo.',
      story:
        'Guiada por el laberinto del [[nucleoide|nucleoid]] gracias a su explorador desmontable —el factor σ—, esta tenaza gigante se desliza sobre el [[ADN|dna]] hasta divisar la señal de arranque de un promotor y abrir una burbuja de doce pares de bases. Los ribonucleótidos entran a chorro por un embudo lateral desde el [[citosol|cytosol]] y se engarzan sobre la hebra molde junto a un ion magnesio catalítico a un ritmo de cuarenta a ochenta letras por segundo.\n\nEn cuanto asoman las diez primeras letras, el factor σ se suelta y la pinza central acelera operón abajo, seguida a escasos nanómetros por [[ribosomas 70S|ribosome-70s]] que atrapan la cola fresca de [[ARN|rna]] en pleno vuelo.',
      blueprint:
        'Rol: Motor único de transcripción dependiente de ADN para todos los ARN bacterianos · De: [[ADN|dna]] superenrollado del [[nucleoide|nucleoid]], [[nucleótidos|nucleotide]] NTP del citosol y factores σ promotores · Dentro: Pinzas α₂ββ′ω sostienen una burbuja abierta de ~12–14 pb y polimerizan [[ARN|rna]] 5′→3′ con dos iones Mg²⁺ · Hacia: ARNm naciente abordado al instante por [[ribosomas 70S|ribosome-70s]], además de ARNr y [[ARNt|trna]]',
      scientific:
        'Única ARN polimerasa bacteriana multisubunidad (~400 kDa núcleo α₂ββ′ω; ~450–480 kDa holoenzima con factor σ; ~15 × 11,5 × 11 nm) responsable de sintetizar ARNm, ARNr y ARNt. El factor σ⁷⁰ vegetativo (o σ alternativos de estrés) reconoce elementos −35 (TTGACA) y −10 (TATAAT) e isomeriza el complejo abierto (burbuja de ~13 pb, híbrido ARN:ADN de 8–9 pb). Elonga a 40–85 nt/s mediante catálisis de dos iones Mg²⁺ coordinados por la tríada β′-NADFDGD; termina en horquillas intrínsecas ricas en GC seguidas de poli-U o mediante la helicasa hexamérica Rho; inhibida por rifampicina.'
    }
  },

  capsule: {
    en: {
      simple:
        'The capsule is a thick, slippery gel coat outside the cell wall that locks in moisture, glues bacteria into protective communities, and makes them too slick for immune cells to swallow.',
      story:
        'Activated [[glucose|glucose]] and acidic sugar bricks assembled inside the cytoplasm ride dedicated export tunnels straight through both membranes of the [[cell envelope|bacterial-wall]], unfurling into a plush, water-soaked halo thicker than the wall itself. Anchor [[phospholipids|phospholipid]] moor those long polysaccharide ribbons to the outer hull so the cloak stays put even in turbulent bloodstreams.\n\nWhen drought strikes, that hydrogel sponge hoards precious [[water|water]] around the bacterium; when immune patrols attack, macrophages and complement proteins skid right off its negatively charged slime while hidden [[pili|pilus]] underneath quietly lock onto host tissue.',
      blueprint:
        'Role: Hydrated anti-phagocytic stealth shield and desiccation buffer · From: Cytoplasmic nucleotide-activated [[sugars|glucose]] translocated across [[plasma membrane|plasma-membrane]] and [[bacterial envelope|bacterial-wall]] via Wzx/Wzy or ABC-transporter Wza channels · Inside: 0.2–1 µm hydrogel matrix of high-molecular-weight anionic polysaccharides moored to outer-membrane [[phospholipids|phospholipid]] · To: Immune evasion (complement/opsonization masking), [[water|water]] retention, and biofilm matrix formation for [[prokaryote|prokaryote]]',
      scientific:
        'Extracellular high-molecular-weight polysaccharide glycocalyx (K-antigens in E. coli; 0.2–1.0 µm hydrated thickness, >95% bound water) covalently tethered to outer-membrane phosphatidylglycerol/lysophosphatidylglycerol anchors or Lipid A. Biosynthesized via Group 1/4 Wzy-dependent polymerization-translocation across octameric outer-membrane Wza barrels or Group 2/3 processive ABC-transporter KpsMT–KpsED complexes. Masks subcapsular PAMPs from C3b opsonization and Fc/complement-mediated macrophage phagocytosis, though exploited as receptor by capsule-depolymerizing bacteriophages.'
    },
    es: {
      simple:
        'La cápsula es un grueso abrigo gelatinoso y resbaladizo fuera de la pared celular que retiene la humedad, pega a las bacterias en colonias protegidas e impide que las células inmunitarias las atrapen.',
      story:
        'Ladrillos activados de [[glucosa|glucose]] y azúcares ácidos tejidos en el citoplasma viajan por túneles exclusivos a través de toda la [[envoltura bacteriana|bacterial-wall]], desplegándose al salir en un manto esponjoso empapado de agua más grueso que el propio casco. Anclas de [[fosfolípido|phospholipid]] amarran esas largas cintas azucaradas a la cubierta exterior para que el disfraz no se desprenda ni en pleno torrente sanguíneo.\n\nSi arrecia la sequía, ese hidrogel retiene [[agua|water]] vital alrededor de la bacteria; si atacan las patrullas inmunitarias, los macrófagos resbalan sobre su superficie cargada sin lograr engullirla mientras los [[pili|pilus]] ocultos debajo afianzan la cabeza de playa.',
      blueprint:
        'Rol: Escudo furtivo antifagocítico e hidrogel contra la desecación · De: [[Azúcares|glucose]] activados del citoplasma exportados a través de la [[membrana plasmática|plasma-membrane]] y la [[envoltura bacteriana|bacterial-wall]] vía canales Wza/Kps · Dentro: Matriz hidratada (0,2–1 µm) de polisacáridos aniónicos anclada a [[fosfolípidos|phospholipid]] externos · Hacia: Evasión inmunitaria, retención de [[agua|water]] y cohesión de biopelículas para la [[bacteria|prokaryote]]',
      scientific:
        'Glicocálix extracelular de polisacáridos capsulares de alto peso molecular (antígenos K en E. coli; grosor hidratado de 0,2–1,0 µm, >95% de agua retenida) anclado a fosfatidilglicerol/lisofosfatidilglicerol de la membrana externa. Ensamblado mediante polimerización Wzy acoplada al canal octamérico Wza (grupos 1/4) o transporte ABC procesivo KpsMT–KpsED (grupos 2/3). Bloquea estérica y electrostáticamente el depósito de C3b del complemento y la fagocitosis por neutrófilos y macrófagos.'
    }
  },

  lps: {
    en: {
      simple:
        'Lipopolysaccharide (LPS) is a dense, bristling carpet of fat-anchored sugar chains paving the outside of Gram-negative bacteria—keeping detergents and oily drugs from sneaking across the hull.',
      story:
        'Forged on the [[plasma membrane|plasma-membrane]] from six saturated [[fatty-acid tails|fatty-acid-tail]], phosphorylated glucosamine, and [[sugar|glucose]] branches, each LPS brick rides a seven-protein molecular escalator across the periplasm until the outer-membrane LptD/E gate flips it onto the exterior deck. Up on the hull, divalent [[magnesium|atom-mg]] and calcium ions cross-bridge the negatively charged phosphate heads into a shoulder-to-shoulder palisade tighter than any ordinary lipid membrane.\n\nBile salts in your gut and bulky hydrophobic antibiotics bounce right off that wet sugar thicket, forcing small nutrients to queue politely at [[porin|porin]] gates instead—though if the cell shatters, freed Lipid A anchors trip mammalian TLR4 alarms as potent endotoxin.',
      blueprint:
        'Role: Asymmetric outer-leaflet permeability barrier and structural endotoxin · From: Cytoplasmic/inner-membrane synthesis from [[fatty-acid tails|fatty-acid-tail]], [[phosphate|phosphate]], and [[sugars|glucose]], ferried across periplasm via LptA–G bridge · Inside: Hexa-acylated Lipid A anchor bridged by [[Mg²⁺|atom-mg]] ions beneath core oligosaccharide and repeating O-antigen chains · To: Exterior face of [[bacterial envelope|bacterial-wall]] shielding [[porins|porin]] and repelling hydrophobic antibiotics/bile salts',
      scientific:
        'Amphipathic glycolipid (~10–20 kDa full smooth form; ~4 kDa rough K-12 form lacking O-antigen; ~2 × 10⁶ molecules covering ~75% of E. coli outer surface) exclusively populates the outer leaflet of the Gram-negative outer membrane, delivered unidirectionally by ATP-powered LptB₂FGC–LptA–LptDE (PDB 4Q35). Comprises hexa-acylated β-1′,6-linked diglucosamine bisphosphate Lipid A (endotoxin recognized at picomolar levels by MD-2/TLR4), Kdo₂–heptose inner/outer core oligosaccharide cross-linked laterally by Mg²⁺/Ca²⁺ (target of polymyxin/colistin displacement), and polymorphic O-polysaccharide.'
    },
    es: {
      simple:
        'El lipopolisacárido (LPS) es una tupida alfombra de cadenas de azúcar ancladas en grasa que pavimenta por fuera a las bacterias Gram-negativas e impide el paso de detergentes y fármacos aceitosos.',
      story:
        'Ensamblado sobre la [[membrana plasmática|plasma-membrane]] con seis [[colas de ácidos grasos|fatty-acid-tail]], glucosamina fosforilada y ramas de [[azúcar|glucose]], cada bloque de LPS sube por un puente proteico de siete piezas a través del periplasma hasta que la esclusa LptD/E lo coloca en la cubierta exterior. Allí arriba, iones [[magnesio|atom-mg]] y calcio abrochan las cabezas negativas de fosfato en una empalizada hombro con hombro mucho más hermética que cualquier bicapa común.\n\nLas sales biliares del intestino y los antibióticos hidrófobos rebotan contra ese bosque húmedo de azúcares, obligando a los nutrientes pequeños a pedir paso por las [[porinas|porin]]; pero si la bacteria se rompe, sus anclas de Lípido A sueltas disparan todas las alarmas inmunitarias humanas como endotoxina.',
      blueprint:
        'Rol: Barrera impermeable de la hemicapa externa y endotoxina estructural · De: Síntesis en [[membrana plasmática|plasma-membrane]] con [[ácidos grasos|fatty-acid-tail]], [[fosfato|phosphate]] y [[azúcares|glucose]], transportada por el puente LptA–G · Dentro: Ancla hexaacilada de Lípido A reticulada por [[Mg²⁺|atom-mg]] bajo un núcleo oligosacárido y el antígeno O · Hacia: Cara exterior de la [[envoltura bacteriana|bacterial-wall]] protegiendo [[porinas|porin]] frente a sales biliares y antibióticos',
      scientific:
        'Glicolípido anfipático (~10–20 kDa en cepas lisas; ~4 kDa en cepas rugosas K-12 sin antígeno O; ~2 × 10⁶ copias que cubren ~75% de la superficie externa de E. coli) insertado exclusivamente en la hoja exterior de la membrana externa por la maquinaria dependiente de ATP LptB₂FGC–LptA–LptDE (PDB 4Q35). Consta de Lípido A (diglucosamina β-1′,6 bisfosfato hexaacilada, agonista picomolar de TLR4/MD-2), oligosacárido central Kdo₂-heptosa estabilizado lateralmente por puentes divalentes Mg²⁺/Ca²⁺ (desplazados por polimixinas) y polisacárido O antigénico.'
    }
  },

  porin: {
    en: {
      simple:
        'Porins are sturdy three-barreled water tunnels punched through the bacterium’s outer armor, letting small food molecules and salts drift in while keeping big toxic molecules out.',
      story:
        'Because the [[LPS|lps]] outer coat seals the submarine almost watertight, the cell punches ~100,000 three-hole sieves right through the armor so its engines do not starve. Unfolded porin [[proteins|protein]] cross the inner membrane, ride periplasmic jellyfish chaperones (Skp and SurA) across the moat, and get rolled into sixteen-strand β-barrels by the BAM folding machine.\n\nInside each water-filled barrel, an inward-folded eyelet loop narrows the throat to barely a nanometre across and lines it with opposing electric charges. [[Water|water]], ions, [[glucose|glucose]], and amino acids under 600 daltons breeze into the periplasm toward inner-membrane pumps, while giant antibiotics like vancomycin slam into the narrow gauge and stay stranded outside.',
      blueprint:
        'Role: Size- and charge-selective outer-membrane passive diffusion sieve · From: Unfolded β-barrel [[proteins|protein]] exported into periplasm and inserted by BAM complex amidst [[LPS|lps]] and [[phospholipids|phospholipid]] · Inside: Homotrimer of 16-stranded antiparallel β-barrels with loop L3 constricting an aqueous pore (~0.7 × 1.1 nm, ~600 Da cutoff) · To: Periplasmic delivery of [[water|water]], ions, [[glucose|glucose]], and [[amino acids|amino-acid]] to inner-membrane importers',
      scientific:
        'Trimeric outer-membrane β-barrel channels (~110 kDa trimer for E. coli OmpF/OmpC, PDB 2OMF; ~10⁵ copies/cell) folded into the asymmetric lipid bilayer by the BamABCDE complex (PDB 5D0O). Each monomer forms a 16-stranded antiparallel β-barrel whose extracellular loop L3 folds into the lumen, creating an electrostatic constriction zone (~7 × 11 Å; acidic D113/E117 opposite basic R42/R82/R132 cluster) with a ~600 Da exclusion limit. Osmoregulated EnvZ/OmpR signaling shifts expression from wider OmpF (low osmolarity) to narrower OmpC (high gut osmolarity, slowing bile/β-lactam influx).'
    },
    es: {
      simple:
        'Las porinas son robustos túneles triples llenos de agua perforados en el blindaje exterior de la bacteria: dejan entrar nutrientes pequeños y sales, pero cierran el paso a moléculas tóxicas grandes.',
      story:
        'Como la coraza de [[LPS|lps]] vuelve casi estanco el casco exterior, la bacteria perfora en ella cien mil tamices de tres cañones para no morir de hambre dentro de su propia armadura. Las cadenas de [[proteína|protein]] recién salidas cruzan el foso periplásmico escoltadas por chaperonas como Skp y SurA hasta que el taller BAM las enrolla e incrusta como barriles de dieciséis láminas.\n\nEn la cintura de cada tubo acuoso, un bucle interno estrecha el paso a apenas un nanómetro flanqueado por cargas eléctricas enfrentadas. El [[agua|water]], los iones, la [[glucosa|glucose]] y los aminoácidos menores de 600 daltons pasan limpios al periplasma rumbo a los transportadores internos, mientras gigantes como la vancomicina se estrellan contra el gálibo estrecho.',
      blueprint:
        'Rol: Tamiz pasivo selectivo por tamaño y carga en la membrana externa · De: [[Proteínas|protein]] de barril β escoltadas por el periplasma y plegadas por BAM entre [[LPS|lps]] y [[fosfolípidos|phospholipid]] · Dentro: Homotrímero de barriles β de 16 hebras con bucle L3 que estrecha el poro acuoso (~0,7 × 1,1 nm; límite ~600 Da) · Hacia: Paso de [[agua|water]], iones, [[glucosa|glucose]] y [[aminoácidos|amino-acid]] hacia permeasas internas',
      scientific:
        'Canales triméricos de barril β de membrana externa (~110 kDa el trímero OmpF/OmpC en E. coli, PDB 2OMF; ~10⁵ copias/célula) insertados por el complejo BamABCDE (PDB 5D0O). Cada monómero de 16 láminas β antiparalelas repliega el bucle extracelular L3 hacia la luz, formando un ojal electrostático (~7 × 11 Å; residuos ácidos D113/E117 frente a la tríada básica R42/R82/R132) con exclusión molecular ~600 Da. El sistema de dos componentes EnvZ/OmpR conmuta OmpF (baja osmolaridad) por OmpC de poro más estrecho (alta osmolaridad intestinal, restringiendo sales biliares y β-lactámicos).'
    }
  },

  'storage-granule': {
    en: {
      simple:
        'Storage granules are compact pantry spheres floating in the cytoplasm where bacteria pack away spare sugar, carbon, or phosphate during feasts without bloating the cell with water.',
      story:
        'Leave ten million free [[glucose|glucose]] molecules dissolved in the [[cytosol|cytosol]] and osmotic water influx would pop the submarine like an overfilled balloon. Instead, whenever carbon is plentiful and nitrogen runs scarce, cytoplasmic enzymes link spare sugars into dense, branched glycogen snowballs, string [[phosphates|phosphate]] into high-energy polyphosphate beads, or polymerize acetyl-CoA into bioplastic PHB droplets wrapped in tidy phasin-protein coats.\n\nBecause giant polymers exert almost zero osmotic pull, the pantry stays feather-light on pressure. The moment outside rations dry up, phosphorylases and depolymerases shave fuel back off the granules to keep glycolysis, [[ATP synthases|atp-synthase]], and [[70S ribosomes|ribosome-70s]] humming through the famine.',
      blueprint:
        'Role: Osmotically inert cytoplasmic carbon, energy, and phosphate reserve · From: Excess [[glucose|glucose]]-1-phosphate, acetyl-CoA, or ATP-[[phosphate|phosphate]] in [[cytosol|cytosol]] during nutrient imbalance · Inside: Membrane-free 50–500 nm inclusions of α-(1→4)/α-(1→6) glycogen, polyphosphate, or phasin-[[protein|protein]]-coated polyhydroxybutyrate (PHB) · To: Mobilized glucose-1-P, β-hydroxybutyrate, and ATP/Pi feeding central metabolism and [[70S ribosomes|ribosome-70s]] during starvation',
      scientific:
        'Non-membrane-bound cytoplasmic inclusion bodies (50–500 nm diameter) minimizing intracellular osmotic pressure while stockpiling macronutrients: (1) glycogen granules (~20–50 nm rosettes synthesized via GlgC ADP-glucose pyrophosphorylase, GlgA synthase, and GlgB branching enzyme; mobilized by GlgP/GlgX); (2) polyhydroxyalkanoate/PHB carbonosomes coated by amphipathic phasin proteins (PhaP), PhaC polymerase, and PhaZ depolymerase monolayer; and (3) acidocalcisome-like inorganic polyphosphate (polyP, tens to hundreds of Pi residues linked by phosphoanhydride bonds via PPK1/PPK2) buffering Mg²⁺, stress signaling, and ATP regeneration.'
    },
    es: {
      simple:
        'Los gránulos de reserva son esferas compactas de despensa en el citoplasma donde la bacteria guarda azúcar, carbono o fosfato sobrante en épocas de abundancia sin hincharse de agua.',
      story:
        'Si dejaras millones de moléculas sueltas de [[glucosa|glucose]] flotando en el [[citosol|cytosol]], el agua entraría en tromba por ósmosis hasta reventar el casco como un globo pasado de rosca. Por eso, cuando sobra carbono pero escasea nitrógeno, las enzimas empaquetan el azúcar extra en densas esferas ramificadas de glucógeno, ensartan [[fosfatos|phosphate]] en collares energéticos de polifosfato o fabrican gotas de bioplástico PHB envueltas en un abrigo ordenado de [[proteínas|protein]] fasinas.\n\nAl ser polímeros gigantes, apenas ejercen presión osmótica. En cuanto escasea la comida afuera, las enzimas de rescate van raspando raciones del gránulo para mantener encendidos el metabolismo central y los [[ribosomas 70S|ribosome-70s]] durante la travesía en seco.',
      blueprint:
        'Rol: Despensa citoplasmática osmóticamente inerte de carbono, energía y fosfato · De: Exceso de [[glucosa|glucose]], acetil-CoA o [[fosfato|phosphate]] de ATP en el [[citosol|cytosol]] · Dentro: Cuerpos de inclusión sin bicapa lipídica (50–500 nm) de glucógeno ramificado, polifosfato o PHB recubierto de [[proteínas|protein]] fasinas · Hacia: Glucosa-1-P, equivalentes reductores y fosfato liberados durante el ayuno hacia rutas glucolíticas y [[ribosomas 70S|ribosome-70s]]',
      scientific:
        'Cuerpos de inclusión citoplasmáticos carentes de bicapa lipídica (50–500 nm) que almacenan reservas reduciendo al mínimo la osmolaridad interna: (1) rosetas de glucógeno (~20–50 nm; vía GlgC ADP-glucosa pirofosforilasa, GlgA y GlgB; degradadas por GlgP/GlgX); (2) gránulos de polihidroxibutirato (PHB) estabilizados por una monocapa proteica de fasinas anfipáticas (PhaP), polimerasa PhaC y despolimerasa PhaZ; y (3) gránulos metacromáticos de polifosfato inorgánico (poliP, enlaces fosfoanhídrido de alta energía vía PPK1/PPK2).'
    }
  },

  'real-bacterium': {
    en: {
      simple:
        'This is an Escherichia coli bacterium drawn at true molecular scale—every wall layer, ribosome, motor, and DNA base pair packed into one bustling two-micrometre room with zero internal walls.',
      story:
        'Step inside Escherichia coli at true atomic scale, where one scene unit spans 100 nanometres and luxury hallways do not exist. Sugars pour through outer-membrane sieves of the [[cell envelope|real-envelope]] into a cytoplasm so packed with enzymes and [[70S ribosomes|ribosome-ecoli]] that molecules pinball off neighbors a million times a second, stripping electrons to charge the hull via [[Complex I|complex-i-ecoli]] while [[AcrAB–TolC cannons|acrab-tolc]] blast intruding antibiotics straight back overboard.\n\nRight in the open center, 4.64 million base pairs of chromosome twist inside the [[nucleoid|real-nucleoid]], where replication forks copy a thousand letters a second and coupled gene convoys translate mRNA before transcription even finishes. Out at the bow, a polar chemoreceptor sonar dome tastes faint sugar trails and signals proton-driven flagellar motors to keep this submarine sprinting ahead of starvation.',
      blueprint:
        'Role: True-scale Gram-negative E. coli MG1655 open-plan bioenergetic system (1 unit = 100 nm) · From: Extracellular [[glucose|glucose]], [[amino acids|amino-acid]], and O₂ crossing [[cell envelope|real-envelope]] · Inside: Cytoplasmic glycolysis/TCA feeds [[Complex I|complex-i-ecoli]] H⁺ pumping; [[nucleoid|real-nucleoid]] runs [[replication forks|real-fork]] and coupled [[gene expression|real-gene]] · To: Proton-driven [[ATP synthase|atp-synthase-ecoli]], [[flagellar motors|real-motor]], [[AcrAB–TolC|acrab-tolc]] drug efflux, and binary division every ~20 min',
      scientific:
        'True-scale molecular reconstruction of rod-shaped Escherichia coli K-12 MG1655 (~2.0 µm × 0.9 µm; ~0.9 fL total volume; ~300 mg/mL cytoplasmic macromolecular density; 1 scene unit = 100 nm). Houses a 4,641,652 bp circular chromosome (~1.6 mm B-DNA) organized into ~460 negatively supercoiled plectonemic domains, surrounded by ~40,000–50,000 70S ribosomes (PDB 4YBB, ~75% in active polysomes), ~4,000 RNA polymerases (PDB 4YG2), and a ~35 nm tripartite Gram-negative envelope maintaining Δp ≈ −160 mV across the inner membrane to drive F₁F₀ ATP synthases (PDB 6OQR) and MotAB-coupled peritrichous flagella.'
    },
    es: {
      simple:
        'Esta es una bacteria Escherichia coli construida a escala molecular exacta: cada capa del casco, cada ribosoma, cada motor y cada par de bases del ADN conviven en un taller de dos micrómetros sin un solo muro interior.',
      story:
        'Entra en una Escherichia coli a escala atómica verdadera, donde cada unidad de escena mide 100 nanómetros y no sobra ni un rincón vacío. Los azúcares atraviesan los tamices de la [[envoltura celular|real-envelope]] hacia un citoplasma tan abarrotado de enzimas y [[ribosomas 70S|ribosome-ecoli]] que cada molécula rebota millones de veces por segundo, cediendo electrones al [[Complejo I|complex-i-ecoli]] para electrificar el casco mientras los cañones [[AcrAB–TolC|acrab-tolc]] escupen antibióticos intrusos fuera de borda.\n\nEn pleno centro abierto, 4,64 millones de pares de bases se retuercen en el [[nucleoide|real-nucleoid]], donde las horquillas de replicación copian mil letras por segundo y los genes activos se traducen antes incluso de terminar de escribirse. En la proa, el radar de la matriz de quimiorreceptores olfatea trazas de alimento y ordena a los motores flagelares propulsados por protones mantener la nave a toda máquina.',
      blueprint:
        'Rol: Sistema bioenergético abierto a escala real de E. coli MG1655 (1 unidad = 100 nm) · De: [[Glucosa|glucose]], [[aminoácidos|amino-acid]] y O₂ a través de la [[envoltura celular|real-envelope]] · Dentro: Glucólisis/TCA alimentan el bombeo de H⁺ del [[Complejo I|complex-i-ecoli]]; el [[nucleoide|real-nucleoid]] ejecuta [[replicación|real-fork]] y [[expresión acoplada|real-gene]] · Hacia: [[ATP sintasa|atp-synthase-ecoli]], [[motores flagelares|real-motor]], eflujo [[AcrAB–TolC|acrab-tolc]] y división celular cada ~20 min',
      scientific:
        'Reconstrucción molecular a escala verdadera del bacilo Gram-negativo Escherichia coli K-12 MG1655 (~2,0 µm × 0,9 µm; volumen ~0,9 fL; densidad macromolecular ~300 mg/mL; 1 unidad = 100 nm). Contiene el cromosoma circular de 4.641.652 pb (~1,6 mm de ADN-B) plegado en ~460 dominios plectonémicos superenrollados negativamente, rodeado por ~40.000–50.000 ribosomas 70S (PDB 4YBB), ~4.000 ARN polimerasas (PDB 4YG2) y una envoltura tripartita de ~35 nm cuya membrana interna sostiene Δp ≈ −160 mV para alimentar ATP sintasas F₁F₀ (PDB 6OQR) y flagelos perítricos.'
    }
  },

  'real-envelope': {
    en: {
      simple:
        'Only 35 nanometres thick, this three-layer hull blocks detergents on the outside, braces against bursting in the middle, and replaces mitochondria on the inside by making all the cell’s ATP.',
      story:
        'Zoom into the cut edge of the hull and three distinct engineering decks snap into focus across just 35 nanometres. Up top, an outer shield of [[LPS|lps]] locks out bile salts while trimeric [[OmpF porins|porin]] let small nutrients trickle into the periplasmic moat, where jellyfish chaperones ferry fresh β-barrels to BAM assembly docks.\n\nMid-deck, hundreds of thousands of Braun’s lipoprotein cables rivet the outer armor down to a single woven sheet of [[peptidoglycan|peptidoglycan]] swimming in protons pumped out from below. Down on the inner [[plasma membrane|plasma-membrane]]—because bacteria carry zero mitochondria—[[Complex I|complex-i-ecoli]] and cytochrome oxidases charge that proton moat so ATP synthases can mint ATP, while 33-nanometre AcrAB–TolC towers bridge all three decks to hurl poisons straight into space.',
      blueprint:
        'Role: Integrated 35-nm Gram-negative barrier, exoskeleton, and respiratory power deck · From: External solutes via [[porins|porin]], cytoplasmic NADH/O₂ at [[Complex I|complex-i-ecoli]], and exported envelope [[proteins|protein]] · Inside: [[LPS|lps]] outer membrane + Lpp-tethered [[peptidoglycan|peptidoglycan]] in H⁺-rich periplasm + bioenergetic [[plasma membrane|plasma-membrane]] · To: Cytoplasmic ATP from [[ATP synthase|atp-synthase-ecoli]] and trans-envelope drug expulsion via [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Atomic-scale cross-section of the ~35 nm E. coli K-12 envelope: (1) ~7 nm asymmetric outer membrane populated by rough-type Lipid A–core LPS, OmpF trimers (PDB 2OMF), OmpA anchors (PDB 1BXW), BamABCDE insertase (PDB 5D0O), and LptDE LPS translocon (PDB 4Q35); (2) ~21 nm periplasm containing periplasmic chaperones SurA (1M5Y), Skp (1SG2), and MalE (1ANF), plus a monolayered peptidoglycan sacculus covalently stapled by ~5 × 10⁵ Braun’s lipoprotein (Lpp) trimers; and (3) ~7 nm phospholipid inner membrane housing Nuo Complex I (7NYR), bo₃ quinol oxidase (1FFT), F₁F₀ ATP synthase (6OQR), LacY/GlpT/MscS, SecYEG–SecA (3DIN), and tripartite AcrAB–TolC efflux pumps (5O66).'
    },
    es: {
      simple:
        'Con apenas 35 nanómetros de espesor, este casco de tres cubiertas frena detergentes por fuera, resiste la presión en el medio y suple la falta de mitocondrias fabricando todo el ATP en su membrana interna.',
      story:
        'Acércate al borde seccionado del casco y verás tres cubiertas de ingeniería concentradas en solo 35 nanómetros. Arriba del todo, un pavimento exterior de [[LPS|lps]] repele las sales biliares mientras las [[porinas OmpF|porin]] filtran nutrientes menudos hacia el foso periplásmico, por donde chaperonas escoltan barriles nuevos hasta los astilleros BAM.\n\nEn la entreplanta, cientos de miles de tirantes de lipoproteína de Braun remachan el blindaje externo contra una única red tensa de [[peptidoglicano|peptidoglycan]] bañada en protones. Abajo, en la [[membrana plasmática|plasma-membrane]] —ya que aquí no existen mitocondrias—, el [[Complejo I|complex-i-ecoli]] y las oxidasas cargan ese foso ácido para que las turbinas de ATP sintasa acuñen energía, mientras cañones AcrAB–TolC atraviesan las tres cubiertas de lado a lado para catapultar venenos al exterior.',
      blueprint:
        'Rol: Casco Gram-negativo integrado de 35 nm con barrera selectiva, exoesqueleto y central energética · De: Solutos externos vía [[porinas|porin]], NADH/O₂ en el [[Complejo I|complex-i-ecoli]] y [[proteínas|protein]] exportadas · Dentro: Membrana externa con [[LPS|lps]] + [[peptidoglicano|peptidoglycan]] anclado por Lpp en periplasma ácido + [[membrana plasmática|plasma-membrane]] bioenergética · Hacia: ATP citoplasmático vía [[ATP sintasa|atp-synthase-ecoli]] y expulsión de fármacos por [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Corte a escala atómica de la envoltura de ~35 nm de E. coli K-12: (1) membrana externa asimétrica (~7 nm) con LPS rugoso, trímeros OmpF (PDB 2OMF), OmpA (1BXW), complejo plegador BamABCDE (5D0O) y translocón LptDE (4Q35); (2) periplasma (~21 nm) con chaperonas SurA (1M5Y), Skp (1SG2), proteína de unión a maltosa (1ANF) y monocapa de peptidoglicano unida por ~5 × 10⁵ trímeros de lipoproteína de Braun (Lpp); y (3) membrana interna (~7 nm) equipada con Complejo I Nuo (7NYR), citocromo bo₃ oxidasa (1FFT), ATP sintasa F₁F₀ (6OQR), LacY/GlpT/MscS, SecYEG–SecA (3DIN) y bombas tripartitas AcrAB–TolC (5O66).'
    }
  },

  'real-motor': {
    en: {
      simple:
        'Sliced right down the middle, this 45-nanometre electric motor uses eleven proton-powered stators bolted to the cell wall to spin the propeller shaft—and can slam into reverse in a millisecond.',
      story:
        'Sliced clean along the hull cutaway, this 45-nanometre turbine looks like it rolled out of a watchmaker’s fever dream. Eleven pink MotA/MotB stator studs bolt onto the [[peptidoglycan|peptidoglycan]] wall in a ring around the rotor, channeling protons from the periplasm back across the [[plasma membrane|plasma-membrane]] to kick FliG gear teeth atop the cytoplasmic C-ring.\n\nThat torque spins the central drive rod cleanly through frictionless P- and L-ring bushings in the [[cell envelope|real-envelope]], bending out through the curved hook into the long helical [[flagellum|flagellum]]. As long as the polar [[chemoreceptor array|real-pole]] smells rising sugar, all motors spin counterclockwise in one smooth thrust bundle; the instant phosphorylated CheY tags the bottom C-ring switch, the gear snaps clockwise, the bundle splays open, and the cell tumbles toward a luckier path.',
      blueprint:
        'Role: Reversible H⁺-driven rotary basal nanomachine (~45 nm diameter) · From: Periplasmic H⁺ proton-motive force across [[plasma membrane|plasma-membrane]] and CheY-P switch signals from [[chemoreceptor array|real-pole]] · Inside: 11 [[peptidoglycan|peptidoglycan]]-anchored MotAB stators drive MS/C-ring rotor, axial rod, P/L-ring bushings, and universal hook · To: Helical [[flagellum|flagellum]] propulsion (~100 Hz runs / clockwise tumbles) and H⁺ return to [[cytosol|cytosol]]',
      scientific:
        'Cross-sectioned peritrichous E. coli basal motor (~45 nm C-ring diameter; ~50 nm transmembrane height) spanning inner membrane, periplasm, and outer membrane. Architecture comprises cytoplasmic switch complex C-ring (~34-fold FliG/FliM/FliN, r ≈ 22.5 nm) coupled to inner-membrane MS-ring (FliF) and axial drive rod (FliE/FlgB/FlgC/FlgF/FlgG) passing through unanchored periplasmic P-ring (FlgI) and outer-membrane L-ring (FlgH) bushings into the ~55 nm curved hook (FlgE). Up to 11 dynamic MotA₅MotB₂ stator units anchored via MotB OmpA-like domains to peptidoglycan rotate themselves as rotary mini-motors upon H⁺ binding to MotB-Asp32, driving FliG torque (~1,260 pN·nm stall torque; ~100 Hz free-swimming rotation; cooperative Hill coefficient >10 upon CheY-P binding to FliM).'
    },
    es: {
      simple:
        'Abierto por la mitad, este motor eléctrico de 45 nanómetros utiliza once estatores fijados a la pared celular y movidos por protones para girar el eje propulsor e invertir la marcha en un milisegundo.',
      story:
        'Seccionado justo al ras del corte del casco, este motor de 45 nanómetros parece salido del banco de un maestro relojero a escala atómica. Once estatores MotA/MotB anclados a la malla de [[peptidoglicano|peptidoglycan]] rodean la base como bobinas fijas, dejando caer protones a través de la [[membrana plasmática|plasma-membrane]] para empujar diente a diente la corona FliG sobre el anillo C.\n\nEl par resultante hace girar el eje central a través de cojinetes sin fricción P y L en la [[envoltura celular|real-envelope]], doblando el giro por el gancho articulado hacia el largo [[flagelo|flagellum]] helicoidal. Mientras la [[matriz de quimiorreceptores|real-pole]] huela cada vez más comida, el giro antihorario mantiene las colas trenzadas en carrera recta; en cuanto la señal CheY-P golpea el anillo C inferior, el rotor invierte el sentido en seco y la bacteria da un vuelco para reorientar la caza.',
      blueprint:
        'Rol: Nanomáquina basal rotatoria reversible impulsada por H⁺ (~45 nm) · De: Fuerza protón-motriz en la [[membrana plasmática|plasma-membrane]] y señales CheY-P desde la [[matriz de quimiorreceptores|real-pole]] · Dentro: 11 estatores MotAB fijados al [[peptidoglicano|peptidoglycan]] impulsan el rotor MS/C, eje central, cojinetes P/L y gancho universal · Hacia: Giro propulsor del [[flagelo|flagellum]] (~100 Hz) y devolución de H⁺ al [[citosol|cytosol]]',
      scientific:
        'Motor basal perítrico de E. coli en sección longitudinal (~45 nm de diámetro en el anillo C; ~50 nm de altura transenvoltura). Integra el complejo conmutador citoplasmático C (~34 copias de FliG/FliM/FliN, r ≈ 22,5 nm), anillo MS en membrana interna (FliF), eje transmisor (FliE/FlgBCFG), cojinetes pasamuros P (FlgI en peptidoglicano) y L (FlgH en membrana externa) y gancho curvo de ~55 nm (FlgE). Hasta 11 complejos estatores MotA₅MotB₂ anclados al peptidoglicano giran acoplados a la protonación de MotB-Asp32, aplicando par electrostático sobre FliG (~1.260 pN·nm en bloqueo; ~100 Hz en nado libre; conmutación ultracooperativa con coeficiente de Hill >10 ante CheY-P).'
    }
  },

  'real-pole': {
    en: {
      simple:
        'Clustered at the front pole of the cell, thousands of chemical sensors form a honeycomb radar dish that detects tiny changes in nearby food and steers the bacterium’s swimming.',
      story:
        'Up at the submarine’s bow, thousands of [[chemoreceptors|chemoreceptor]] lock into a 250-nanometre hexagonal honeycomb spaced precisely 12 nanometres from trimer to trimer across the [[plasma membrane|plasma-membrane]]. Out in the periplasm, their tips sniff [[glucose|glucose]] escorted by sugar-binding proteins, aspartate, serine, or noxious repellents; down in the cytoplasm, their tails cradle a shared lattice of CheA kinases and CheW adapter rings.\n\nWiring thousands of noses into one crystalline sheet creates hair-trigger teamwork: if just one receptor loses its sugar molecule, neighboring trimers flip together like dominoes, unleashing CheA to slap [[phosphate|phosphate]] tags onto CheY messengers. Those messengers race through the cytosol to flip the [[flagellar motors|real-motor]] into a course-correcting tumble before the scent trail goes cold.',
      blueprint:
        'Role: Cooperative polar chemotaxis sensor array and signal amplifier · From: Periplasmic [[glucose|glucose]], [[amino acids|amino-acid]], and repellents crossing [[porins|porin]] · Inside: Hexagonal lattice (~12 nm spacing) of trimers-of-dimers [[chemoreceptors|chemoreceptor]] in [[plasma membrane|plasma-membrane]] networked at cytoplasmic tips by CheA kinase and CheW · To: Diffusible CheY-[[phosphate|phosphate]] messengers in [[cytosol|cytosol]] controlling [[flagellar motor|real-motor]] reversal',
      scientific:
        'Supramolecular polar signaling array (~200–300 nm patch containing ~3,000–10,000 MCP homodimers: Tar, Tsr, Trg, Tap, Aer) organized as a p6-symmetric hexagonal lattice with 12 nm center-to-center spacing. Each vertex comprises a trimer of MCP dimers (PDB 1QU7) bridged at its cytoplasmic hairpin tips (−22.5 nm below inner membrane) by alternating hexameric rings of dimeric histidine autokinase CheA and coupling protein CheW. Allosteric Ising-like coupling yields ~35–50× signal gain over five orders of ligand concentration via CheR methyltransferase / CheB-P methylesterase adaptation, modulating CheY-P diffusion to FliM.'
    },
    es: {
      simple:
        'Agrupados en un polo de la bacteria, miles de sensores químicos forman una antena en panal capaz de notar cambios minúsculos de alimento en el agua y dirigir el rumbo de nado.',
      story:
        'En la proa misma del submarino, miles de [[quimiorreceptores|chemoreceptor]] encajan en un panal hexagonal de 250 nanómetros separados exactamente 12 nanómetros de trímero a trímero sobre la [[membrana plasmática|plasma-membrane]]. Sus antenas externas en el periplasma olfatean [[glucosa|glucose]], aminoácidos o repelentes tóxicos; sus puntas internas sostienen en vilo una red cristalina compartida de quinasas CheA y anillos acopladores CheW.\n\nConectar miles de receptores en una sola placa multiplica el oído químico: basta que un puñado deje de oler azúcar para que los vecinos basculen al unísono como fichas de dominó y disparen a CheA a estampar etiquetas de [[fosfato|phosphate]] sobre mensajeros CheY. Estos cruzan veloces el citosol y ordenan a los [[motores flagelares|real-motor]] dar un vuelco inmediato antes de perder el rastro.',
      blueprint:
        'Rol: Antena polar cooperativa de quimiotaxis y amplificador de señales · De: [[Glucosa|glucose]], [[aminoácidos|amino-acid]] y repelentes que entran al periplasma vía [[porinas|porin]] · Dentro: Red hexagonal (paso de 12 nm) de trímeros de dímeros de [[quimiorreceptores|chemoreceptor]] en la [[membrana plasmática|plasma-membrane]] enlazados abajo por CheA y CheW · Hacia: Mensajeros CheY-[[fosfato|phosphate]] difundidos por el [[citosol|cytosol]] hacia el [[motor flagelar|real-motor]]',
      scientific:
        'Matriz supramolecular polar de señalización (~200–300 nm de diámetro; ~3.000–10.000 homodímeros MCP: Tar, Tsr, Trg, Tap y Aer) dispuesta en red hexagonal p6 con espaciado centro a centro de 12 nm. Cada nodo reúne trímeros de dímeros MCP (PDB 1QU7) conectados a ~22,5 nm bajo la membrana interna mediante anillos hexaméricos de histidina-quinasa CheA y acoplador CheW. El acoplamiento alostérico tipo red de Ising proporciona una ganancia de ~35–50× en un rango dinámico de cinco órdenes de magnitud gracias a la adaptación por metilación/desmetilación (CheR/CheB-P).'
    }
  },

  'real-nucleoid': {
    en: {
      simple:
        'Here all 4.6 million DNA base pairs of E. coli are twisted like braided rubber bands into hundreds of compact loops—packed into one micrometre without a nucleus, yet wide open for business.',
      story:
        'If you unspooled E. coli’s circular DNA chromosome it would stretch 1.6 millimetres—eight hundred times longer than the cell—yet here all 4,641,652 base pairs nestle inside a one-micrometre cloud with no membrane fence in sight. ATP-powered [[DNA gyrase|gyrase]] endlessly underwinds the double helix so it braids back on itself like a twisted phone cord into ~460 plectoneme loops, while nimble [[HU dimers|hu-protein]], Fis, and IHF pinch sharp corners every few hundred letters.\n\nCrowded polysomes press inward from the surrounding cytoplasm, herding the chromosome together while keeping bulk [[70S ribosomes|ribosome-ecoli]] parked neatly around its shoreline. Deep inside, a [[replication fork|real-fork]] duplicates a thousand bases a second, while active loops poke out to the edge so [[coupled genes|real-gene]] can fire straight into waiting ribosomes.',
      blueprint:
        'Role: Full-genome plectonemic E. coli chromosome architecture (~4.64 Mbp) · From: Parental [[DNA|dna]], dNTP/NTP [[nucleotides|nucleotide]], and supercoiling/bending work by [[DNA gyrase|gyrase]] and [[HU|hu-protein]] · Inside: ~460 topological loops (~10 kb each) braided into right-handed plectonemes duplicated by [[replication forks|real-fork]] · To: Surface-exposed [[active genes|real-gene]] transcribed by [[RNA polymerase|rnap-ecoli]] and translated by peripheral [[ribosomes|ribosome-ecoli]]',
      scientific:
        'Atomic-to-mesoscale reconstruction of the E. coli MG1655 circular chromosome (4,641,652 bp, 1.58 mm B-DNA contour length, 0.34 nm axial rise/bp) occupying a ~1.2 × 0.65 µm bilobed cytoplasmic zone. Organized into 4 macrodomains (Ori, Ter, Left, Right) subdivided into ~460 supercoiled topological domains (~10 kb average) forming branched right-handed interwound plectonemes (superhelical density σ ≈ −0.05; pitch ~18 nm, radius ~4.5 nm). Decorated every ~150–350 bp by nucleoid-associated proteins HU (PDB 1MUL), Fis (PDB 3IV5), and IHF (PDB 1IHF), with GyrA₂B₂ gyrase (PDB 6RKW) every ~5–12 kb; entropic volume exclusion segregates 70S polysomes to the nucleoid periphery.'
    },
    es: {
      simple:
        'Aquí se pliegan los 4,6 millones de pares de bases de E. coli retorcidos como gomas elásticas trenzadas en cientos de bucles: caben en un micrómetro sin membrana nuclear y siguen listos para leerse al instante.',
      story:
        'Si desenrollaras el aro de ADN de E. coli mediría 1,6 milímetros —ochocientas veces la longitud de la bacteria—, pero aquí sus 4.641.652 pares de bases se recogen en una nube de apenas un micrómetro sin vallas ni membranas. La [[ADN girasa|gyrase]] quema ATP para retorcer la doble hélice en sentido negativo hasta trenzarla sobre sí misma como un cable de teléfono en unos 460 bucles plectonémicos, mientras pequeños dímeros [[HU|hu-protein]], Fis e IHF doblan horquillas cerradas cada pocos cientos de letras.\n\nEl gentío de polisomas empuja desde fuera manteniendo compacto el cromosoma y dejando a los [[ribosomas 70S|ribosome-ecoli]] apostados en su orilla. En el interior, una [[horquilla de replicación|real-fork]] duplica mil bases por segundo mientras los [[genes activos|real-gene]] asoman al borde para traducirse sobre la marcha.',
      blueprint:
        'Rol: Arquitectura cromosómica plectonémica completa de E. coli (~4,64 Mpb) · De: [[ADN|dna]] parental, [[nucleótidos|nucleotide]] y superenrollamiento/plegado por [[ADN girasa|gyrase]] y [[HU|hu-protein]] · Dentro: ~460 dominios topológicos (~10 kb) trenzados en plectonemas y duplicados por [[horquillas de replicación|real-fork]] · Hacia: [[Genes en lectura|real-gene]] expuestos en la periferia hacia [[ARN polimerasa|rnap-ecoli]] y [[ribosomas 70S|ribosome-ecoli]]',
      scientific:
        'Reconstrucción multiescala del cromosoma circular de E. coli MG1655 (4.641.652 pb; 1,58 mm de contorno ADN-B a 0,34 nm/pb) confinado en un volumen bilobulado de ~1,2 × 0,65 µm. Estructurado en 4 macrodominios (Ori, Ter, Left, Right) y ~460 bucles topológicos (~10 kb) trenzados en plectonemas dextrógiros por superenrollamiento negativo (σ ≈ −0,05; paso ~18 nm, radio ~4,5 nm). Modelado cada ~150–350 pb por proteínas asociadas al nucleoide HU (PDB 1MUL), Fis (3IV5) e IHF (1IHF), y mantenido cada ~5–12 kb por ADN girasa (6RKW), con exclusión estérica de polisomas hacia la corteza citoplasmática.'
    }
  },

  'real-gene': {
    en: {
      simple:
        'Without a nuclear wall in the way, a line of ribosomes jumps onto a gene’s RNA copy while RNA polymerase is still writing it—turning DNA code into finished proteins in one continuous assembly line.',
      story:
        'Here is bacterial speed’s secret weapon caught red-handed at one bead per amino acid and nucleotide. At the head of the convoy, [[E. coli RNA polymerase|rnap-ecoli]] chews along a chromosomal [[DNA|dna]] loop flanked by [[HU architectural clamps|hu-protein]], reeling a bright orange ribbon of messenger [[RNA|rna]] out of its exit channel.\n\nThat transcript never gets a single second alone: a lead [[70S ribosome|ribosome-ecoli]] rides practically bumper-to-bumper behind the polymerase, and trailing ribosomes pile on behind it, each extruding a longer nascent polypeptide the further down the ribbon it has marched. By shielding the naked RNA from scissor-happy nucleases and premature Rho roadblocks, this expressosome convoy turns genetic ink into working enzymes before the sentence even ends.',
      blueprint:
        'Role: Co-transcriptional translation convoy (expressosome / nascent polysome) · From: Promoter-opened [[DNA|dna]] flanked by [[HU|hu-protein]], cytosolic NTPs, and charged [[tRNAs|trna]] · Inside: [[RNA polymerase|rnap-ecoli]] synthesizes nascent m[[RNA|rna]] while trailing [[E. coli 70S ribosomes|ribosome-ecoli]] simultaneously translate codons · To: Folding nascent [[polypeptides|polypeptide]] handed to [[GroEL|groel]] or inner-membrane translocons',
      scientific:
        'Atomic-scale locus (~100 nm span) depicting coupled prokaryotic transcription–translation. Leading α₂ββ′ω RNA polymerase (PDB 4YG2) elongates nascent mRNA (~45 nt/s) along B-DNA kinked laterally by HU dimers (PDB 1MUL), physically bridged or kinetically paced (via NusG/NusA) by a trailing 70S lead ribosome (PDB 4YBB, ~15 aa/s = 45 nt/s matching rate). Subsequent 70S ribosomes load every ~75–110 nt onto the 5′ Shine–Dalgarno site, forming a co-transcriptional polysome with progressively longer nascent polypeptide chains (~10–90 residues) that suppress R-loop formation, RNase E cleavage, and Rho-dependent termination.'
    },
    es: {
      simple:
        'Al no haber envoltura nuclear de por medio, una fila de ribosomas se sube a la copia de ARN mientras la ARN polimerasa aún la está escribiendo: del ADN a la proteína en una sola cadena de montaje.',
      story:
        'Aquí tienes cazada in fraganti, esfera por aminoácido y nucleótido, el arma secreta de la velocidad bacteriana. En cabeza del convoy, la [[ARN polimerasa de E. coli|rnap-ecoli]] avanza sobre un bucle de [[ADN|dna]] escoltado por pinzas [[HU|hu-protein]], desenrollando una cinta naranja brillante de [[ARN|rna]] mensajero por su canal de salida.\n\nEse mensaje no pasa ni un segundo a solas: un [[ribosoma 70S|ribosome-ecoli]] líder marcha pegado al parachoques de la polimerasa y varios más se van cargando detrás en fila india, luciendo cada uno un polipéptido naciente más largo cuanto más camino lleva recorrido. Al tapar el ARN desnudo frente a nucleasas voraces y frenos prematuros, este tren expreso transforma tinta genética en máquinas listas antes de poner el punto final al gen.',
      blueprint:
        'Rol: Convoy acoplado de transcripción y traducción simultáneas (expresosoma / polisoma naciente) · De: [[ADN|dna]] promotor flanqueado por [[HU|hu-protein]], NTPs y [[ARNt|trna]] aminoacilados · Dentro: La [[ARN polimerasa|rnap-ecoli]] transcribe ARNm de [[ARN|rna]] mientras [[ribosomas 70S de E. coli|ribosome-ecoli]] lo traducen al paso · Hacia: [[Polipéptidos|polypeptide]] nacientes entregados a [[GroEL|groel]] o translocones de membrana',
      scientific:
        'Locus activo a escala atómica (~100 nm) de acoplamiento transcripción-traducción en E. coli. La ARN polimerasa elongante (PDB 4YG2, ~45 nt/s) recorre ADN-B flanqueado por dímeros HU (PDB 1MUL) sincronizada cinética y físicamente (mediante NusG/NusA) con un ribosoma 70S líder (PDB 4YBB, ~15 aa/s = 45 nt/s). Ribosomas sucesivos abordan el extremo 5′ cada ~75–110 nt formando un polisoma cotranscripcional cuyas cadenas peptídicas crecientes (~10–90 residuos) emergen progresivamente mientras protegen al ARNm frente a RNasa E y terminación por Rho.'
    }
  },

  'ribosome-ecoli': {
    en: {
      simple:
        'Built from 4,566 RNA letters and 54 proteins at true atomic coordinates, up to 70,000 of these E. coli ribosomes pack a fast-growing cell to copy every protein it owns in twenty minutes.',
      story:
        'Every bead in this 25-nanometre boulder marks one real nucleotide or amino acid from E. coli crystal coordinates: a paler [[30S decoding head|ribo-30s]] cradled against a darker [[50S catalytic crown|ribo-50s]]. In a cell doubling every twenty minutes, printing new ribosomes swallows more than half the entire energy budget, packing the cytoplasm outside the [[nucleoid|real-nucleoid]] wall-to-wall with ~50,000 roaring factories.\n\nThree quarters of them ride nose-to-tail along messenger RNA ribbons as polysomes, gulping EF-Tu-delivered [[tRNAs|trna]] to stitch twenty peptide bonds a second before handing tricky chains off to [[GroEL folding chambers|groel]].',
      blueprint:
        'Role: Atomic-resolution E. coli 70S protein synthesis factory (PDB 4YBB) · From: rRNA operons + 54 ribosomal [[proteins|protein]], nascent m[[RNA|rna]], and EF-Tu·GTP·aa-[[tRNA|trna]] · Inside: [[30S subunit|ribo-30s]] (16S rRNA) pairs codons while [[50S subunit|ribo-50s]] (23S/5S rRNA) catalyzes peptide bonds · To: Cytoplasmic proteome folded via [[GroEL|groel]] and envelope proteins routed to [[cell envelope|real-envelope]]',
      scientific:
        'X-ray structure of the Escherichia coli 70S ribosome (PDB 4YBB; ~2.3 MDa, ~25 × 22 × 22 nm; 10,398 coarse-grained residue/nucleotide beads in full LOD) comprising the 30S subunit (1,542-nt 16S rRNA + 21 proteins S1–S21) and 50S subunit (2,904-nt 23S rRNA + 120-nt 5S rRNA + 33 proteins L1–L36; total 4,566 rRNA nt transcribed from 7 rrn operons). Copy number scales with growth rate from ~7,000 (μ = 0.6 doublings/h) to ~50,000–72,000 ribosomes/cell (μ = 2.5–3 doublings/h), consuming ~4 ATP-equivalents per peptide bond at ~16–22 aa/s.'
    },
    es: {
      simple:
        'Construido con 4.566 letras de ARN y 54 proteínas en coordenadas atómicas reales, hasta 70.000 de estos ribosomas de E. coli abarrotan una célula en crecimiento rápido para duplicar todas sus proteínas en veinte minutos.',
      story:
        'Cada esfera de esta mole de 25 nanómetros representa un nucleótido o aminoácido real de E. coli: el [[cabezal lector 30S|ribo-30s]], más claro, acoplado contra la [[cúpula catalítica 50S|ribo-50s]], más oscura. Cuando la bacteria se divide cada veinte minutos, fabricar nuevos ribosomas devora más de la mitad de todo el presupuesto energético celular, llenando el citoplasma alrededor del [[nucleoide|real-nucleoid]] con cincuenta mil factorías rugiendo a la vez.\n\nTres cuartas partes avanzan en caravana sobre cintas de ARN mensajero formando polisomas, engullendo [[ARNt|trna]] escoltados por EF-Tu a veinte enlaces por segundo y pasando las cadenas rebeldes a las cámaras [[GroEL|groel]].',
      blueprint:
        'Rol: Factoría ribosómica 70S de E. coli en coordenadas reales (PDB 4YBB) · De: Operones rrn + 54 [[proteínas|protein]] ribosómicas, ARNm de [[ARN|rna]] y complejos EF-Tu·GTP·aa-[[ARNt|trna]] · Dentro: [[Subunidad 30S|ribo-30s]] (ARNr 16S) decodifica y [[subunidad 50S|ribo-50s]] (ARNr 23S/5S) suelda enlaces peptídicos · Hacia: Proteoma citoplasmático vía [[GroEL|groel]] y proteínas de la [[envoltura celular|real-envelope]]',
      scientific:
        'Estructura cristalográfica del ribosoma 70S de Escherichia coli (PDB 4YBB; ~2,3 MDa, ~25 × 22 × 22 nm; 10.398 esferas de residuo/nucleótido) integrada por la subunidad 30S (ARNr 16S de 1.542 nt + 21 proteínas S1–S21) y la subunidad 50S (ARNr 23S de 2.904 nt + ARNr 5S de 120 nt + 33 proteínas L1–L36; 4.566 nt totales de ARNr transcritos desde 7 operones rrn). Su abundancia escala entre ~7.000 y ~50.000–72.000 copias/célula según la tasa de crecimiento, consumiendo ~4 equivalentes de ATP por enlace peptídico a ~16–22 aa/s.'
    }
  },

  'rnap-ecoli': {
    en: {
      simple:
        'This real E. coli RNA polymerase structure shows the five-piece enzyme claw paired with its sigma-70 guide, clamped around DNA to copy genes into RNA.',
      story:
        'Modeled residue by residue from E. coli crystal data, two massive β and β′ [[polypeptide|polypeptide]] jaws form a 15-nanometre crab claw braced at the back by two α dimers and a tiny ω pin. Perched along the rim rides σ⁷⁰, the housekeeping scout whose [[α-helical|alpha-helix]] domains read promoter signposts on [[nucleoid|real-nucleoid]] DNA and pry open the double helix right over the buried active site.\n\nOnce RNA synthesis catches fire, σ⁷⁰ pops free so the core claw can sprint solo down [[active genes|real-gene]]—or stack bumper-to-bumper along ribosomal RNA operons like freight trains feeding new [[70S ribosomes|ribosome-ecoli]].',
      blueprint:
        'Role: Atomic-structure E. coli σ⁷⁰-holoenzyme transcription machine (PDB 4YG2) · From: Promoter DNA in [[nucleoid|real-nucleoid]], NTPs, and dissociable σ⁷⁰ specificity [[polypeptide|polypeptide]] · Inside: α₂ββ′ω crab-claw pincers + [[α-helix|alpha-helix]]-rich σ⁷⁰ melt promoter DNA around catalytic Mg²⁺ · To: Co-transcriptionally translated [[gene transcripts|real-gene]] and rRNA Christmas-tree operons for [[ribosomes|ribosome-ecoli]]',
      scientific:
        'Crystal structure of Escherichia coli RNA polymerase σ⁷⁰ holoenzyme (PDB 4YG2; 3,599 amino acid residues, ~458 kDa, ~15 nm across) comprising core subunits α₂ (2 × 329 aa), β (1,342 aa), β′ (1,407 aa), ω (91 aa), and housekeeping initiation factor σ⁷⁰ (RpoD, 613 aa). Domains σ₂ and σ₄ bind −10 (TATAAT, flipping non-template A−11 and T−7 into aromatic pockets) and −35 (TTGACA) hexamers respectively; after abortive cycling and σ3.2 finger displacement from the RNA exit channel (~9–11 nt), the core elongates at ~40–85 nt/s (~2,000–5,000 RNAP copies/cell, >60% clustered on the 7 rrn operons during rapid growth).'
    },
    es: {
      simple:
        'Esta estructura real de la ARN polimerasa de E. coli muestra la pinza enzimática de cinco piezas acoplada a su guía sigma-70, abrazando el ADN para copiar genes en ARN.',
      story:
        'Reconstruida aminoácido a aminoácido a partir del cristal de E. coli, dos enormes mandíbulas [[polipeptídicas|polypeptide]] β y β′ forman una tenaza de 15 nanómetros sujeta por detrás por dos subunidades α y el pasador ω. A caballo sobre el borde viaja el factor σ⁷⁰, cuyos dominios de [[hélice alfa|alpha-helix]] leen las señales promotoras en el [[nucleoide|real-nucleoid]] y abren la doble hélice justo encima del centro activo.\n\nEn cuanto el nuevo ARN coge carrerilla, σ⁷⁰ se desacopla para que la pinza central corra en solitario por los [[genes activos|real-gene]] o se encadene parachoques con parachoques en los operones ribosómicos que abastecen de piezas a los [[ribosomas 70S|ribosome-ecoli]].',
      blueprint:
        'Rol: Holoenzima ARN polimerasa-σ⁷⁰ de E. coli a escala atómica (PDB 4YG2) · De: ADN promotor del [[nucleoide|real-nucleoid]], NTPs y subunidad guía σ⁷⁰ de [[polipéptido|polypeptide]] · Dentro: Tenazas α₂ββ′ω y dominios en [[hélice alfa|alpha-helix]] de σ⁷⁰ funden el promotor sobre el Mg²⁺ catalítico · Hacia: [[Transcripción acoplada|real-gene]] de ARNm y síntesis masiva de ARNr para [[ribosomas 70S|ribosome-ecoli]]',
      scientific:
        'Estructura cristalina de la holoenzima ARN polimerasa-σ⁷⁰ de Escherichia coli (PDB 4YG2; 3.599 residuos, ~458 kDa, ~15 nm) formada por el núcleo α₂ (2 × 329 aa), β (1.342 aa), β′ (1.407 aa), ω (91 aa) y el factor vegetativo σ⁷⁰ (RpoD, 613 aa). Las regiones σ₂ y σ₄ reconocen los hexámeros −10 (TATAAT, capturando A−11 y T−7 evertidas en bolsillos aromáticos) y −35 (TTGACA); tras superar la iniciación abortiva y desplazar el dedo σ3.2 del canal de salida (~9–11 nt), elonga a ~40–85 nt/s (~2.000–5.000 copias/célula en crecimiento rápido).'
    }
  },

  groel: {
    en: {
      simple:
        'GroEL–GroES is a barrel-shaped protein rescue chamber with a removable lid—catching tangled new proteins, sealing them inside alone for ten seconds, and letting them fold cleanly.',
      story:
        'Fresh [[polypeptides|polypeptide]] pouring out of [[E. coli ribosomes|ribosome-ecoli]] enter a cytoplasmic mosh pit so jammed with neighbors that exposed greasy patches risk clumping into useless sludge. Waiting nearby, this back-to-back double barrel of fourteen GroEL subunits—crowned by sticky hydrophobic jaws—snatches the misfolded straggler into its open rim.\n\nSeven ATP molecules snap onto the ring, dropping the dome-shaped GroES lid on top while simultaneously flipping the barrel’s inner walls from greasy to water-loving and doubling the chamber volume. Given ten peaceful seconds inside its private Anfinsen isolation booth while those ATPs tick down to ADP, the [[alpha helices|alpha-helix]] and sheets settle into shape before the opposite ring fires to pop the lid and release a working enzyme into the [[cytosol|cytosol]].',
      blueprint:
        'Role: ATP-driven cylindrical chaperonin isolation chamber (PDB 1AON) · From: Misfolded nascent [[polypeptides|polypeptide]] from [[70S ribosomes|ribosome-ecoli]] and 7 ATP per ring cycle · Inside: Back-to-back GroEL₁₄ heptameric rings capped by GroES₇ dome switch hydrophobic lining to hydrophilic for ~10 s isolated folding · To: Native folded [[α-helical|alpha-helix]]/β-sheet enzymes released into [[cytosol|cytosol]] plus 7 ADP + Pi',
      scientific:
        'Group I bacterial chaperonin complex GroEL₁₄–GroES₇ (PDB 1AON; ~875 kDa total, ~14 nm diameter × 18–20 nm height; 8,015 residues) essential for E. coli viability (~10–15% of cytoplasmic proteome requires GroEL, including ~85 obligate TIM-barrel/αβ-fold substrates up to ~60 kDa). Comprises two back-to-back homoheptameric GroEL rings (~57 kDa × 14; equatorial ATPase, intermediate hinge, and apical substrate-binding domains) alternating in negative-cooperativity bullet cycles with a homoheptameric GroES co-chaperonin dome (~10 kDa × 7). Cooperative binding of 7 ATP + GroES expands the cis-cavity to ~175,000 Å³, burying hydrophobic apical patches for a ~10 s folding timer (kcat ≈ 0.1 s⁻¹) terminated by trans-ring ATP binding.'
    },
    es: {
      simple:
        'GroEL–GroES es un barril rescatador de proteínas con tapa desmontable: atrapa cadenas recién hechas que se han enredado, las aísla diez segundos a solas y les permite plegarse sin estorbos.',
      story:
        'Los [[polipéptidos|polypeptide]] recién salidos de los [[ribosomas de E. coli|ribosome-ecoli]] caen en un citoplasma tan atestado que cualquier parche grasiento expuesto corre peligro de pegarse a sus vecinos y formar un amasijo inútil. Al quite espera este doble barril espalda con espalda de catorce piezas GroEL, cuyas bocas hidrofóbicas capturan al náufrago mal plegado.\n\nSiete moléculas de ATP encajan en el anillo, bajan la cúpula GroES como una tapa a presión y, de un golpe mecánico, duplican la cabida interior volviendo hidrófilas sus paredes. Con diez segundos de paz absoluta dentro de esa cabina privada mientras se consume el ATP, las [[hélices alfa|alpha-helix]] y láminas encuentran su pliegue exacto antes de que el anillo opuesto salte la tapa y devuelva una enzima impecable al [[citosol|cytosol]].',
      blueprint:
        'Rol: Cámara cilíndrica de aislamiento y plegado asistido por ATP (PDB 1AON) · De: [[Polipéptidos|polypeptide]] mal plegados procedentes de [[ribosomas 70S|ribosome-ecoli]] y 7 ATP por ciclo · Dentro: Dos anillos heptaméricos GroEL₁₄ con tapa GroES₇ conmutan su cavidad de hidrófoba a hidrófila durante ~10 s · Hacia: Enzimas nativas con [[hélices alfa|alpha-helix]] y láminas β liberadas al [[citosol|cytosol]] más 7 ADP + Pi',
      scientific:
        'Complejo chaperonina bacteriano de grupo I GroEL₁₄–GroES₇ (PDB 1AON; ~875 kDa, ~14 nm de ancho × 18–20 nm de alto) indispensable para la viabilidad de E. coli (~85 sustratos estrictos obligados de hasta ~60 kDa, a menudo barriles TIM α/β). Formado por dos anillos homoheptaméricos GroEL (~57 kDa × 14; dominios ecuatorial ATPasa, bisagra intermedia y apical) acoplados asimétricamente a una cúpula homoheptamérica GroES (~10 kDa × 7). La unión cooperativa de 7 ATP + GroES expande la cámara cis a ~175.000 Å³ ocultando parches hidrofóbicos durante ~10 s (kcat ≈ 0,1 s⁻¹) hasta que el ATP en el anillo trans eyecta tapa y sustrato.'
    }
  },

  'hu-protein': {
    en: {
      simple:
        'HU is a tiny, agile clip protein that slips two flexible arms into DNA’s groove to bend sharp corners—packing the bacterial chromosome without locking genes away like eukaryotic histones do.',
      story:
        'Bacteria skipped bulky histone spools, hiring 30,000 nimble dimers of HU instead to tame the 1.6-millimetre tangle of the [[nucleoid|real-nucleoid]]. Built from two compact [[alpha-helical|alpha-helix]] bodies, HU reaches two slender β-ribbon arms straight into the minor groove of [[DNA|dna]] and pries proline wedges between base pairs, kinking the stiff double helix through a hairpin bend in a fraction of a second.\n\nUnlike permanent spools, HU hops on and off in milliseconds—cinching fresh plectoneme loops behind the [[replication fork|real-fork]] while stepping politely aside whenever [[RNA polymerase|rnap-ecoli]] barrels down a gene.',
      blueprint:
        'Role: Sequence-independent minor-groove DNA architectural bender (PDB 1MUL) · From: HupA and HupB [[polypeptides|polypeptide]] synthesized on cytoplasmic ribosomes · Inside: ~18 kDa [[α-helical|alpha-helix]] dimer inserts two β-ribbon arms (Pro63 intercalation) into [[DNA|dna]] minor groove to induce ~105–140° bends · To: Compact plectonemic loops in [[nucleoid|real-nucleoid]], newly replicated duplexes behind [[replication fork|real-fork]], and promoter loops near [[RNA polymerase|rnap-ecoli]]',
      scientific:
        'Most abundant nucleoid-associated protein in exponentially growing E. coli (~30,000–50,000 dimers/cell; heterodimer HUαβ encoded by hupA/hupB, ~18 kDa, ~3 nm core; PDB 1MUL). Comprises an intertwined α-helical body supporting two flexible antiparallel β-ribbon arms that track the B-DNA minor groove independent of sequence (footprint ~9–36 bp), intercalating conserved Pro63 residues at two sites 9 bp apart to induce sharp bends (105–140°) and restrain negative supercoils alongside Fis, IHF, and DNA gyrase.'
    },
    es: {
      simple:
        'HU es una diminuta y ágil pinza proteica que mete dos brazos flexibles en el surco del ADN para doblar esquinas cerradas, compactando el cromosoma sin bloquear la lectura de los genes como hacen las histonas.',
      story:
        'Las bacterias prescindieron de los pesados carretes de histonas y contrataron en su lugar a treinta mil ágiles dímeros HU para domar el ovillo de 1,6 milímetros del [[nucleoide|real-nucleoid]]. Con un pequeño cuerpo de [[hélices alfa|alpha-helix]], HU desliza dos finos brazos de cinta β en el surco menor del [[ADN|dna]] e incrusta cuñas de prolina entre las bases, doblando la rígida doble hélice en codos cerrados en una fracción de segundo.\n\nA diferencia de un carrete fijo, HU salta y se suelta en milisegundos: recoge los bucles recién salidos detrás de la [[horquilla de replicación|real-fork]] y se aparta cortésmente en cuanto la [[ARN polimerasa|rnap-ecoli]] pide vía libre.',
      blueprint:
        'Rol: Proteína arquitectónica plegadora del surco menor del ADN sin especificidad de secuencia (PDB 1MUL) · De: Cadenas [[polipeptídicas|polypeptide]] HupA y HupB traducidas en el citosol · Dentro: Dímero de ~18 kDa con cuerpo en [[hélice alfa|alpha-helix]] y dos brazos β (Pro63) que doblan el [[ADN|dna]] ~105–140° · Hacia: Compactación de plectonemas en el [[nucleoide|real-nucleoid]], dúplex hijos tras la [[horquilla de replicación|real-fork]] y regiones vecinas a [[ARN polimerasa|rnap-ecoli]]',
      scientific:
        'Proteína asociada al nucleoide más abundante en E. coli exponencial (~30.000–50.000 dímeros/célula; heterodímero HUαβ codificado por hupA/hupB, ~18 kDa, cuerpo de ~3 nm; PDB 1MUL). Presenta un núcleo entrelazado de hélices α del que proyectan dos brazos antiparalelos de lámina β que abrazan el surco menor del ADN-B sin especificidad de secuencia (huella de 9–36 pb), intercalando dos residuos Pro63 separados por 9 pb para inducir curvaturas pronunciadas (105–140°) y estabilizar superenrollamientos negativos.'
    }
  },

  chemoreceptor: {
    en: {
      simple:
        'A chemoreceptor is a long, springy four-helix protein rod hanging inside the cell membrane that relays subtle chemical tastes from outside down to the steering kinase at its tip.',
      story:
        'Picture a 20-nanometre tuning fork of four coiled [[alpha helices|alpha-helix]] dangling into the cytoplasm from the polar [[chemoreceptor array|real-pole]]. Whenever an attractant sugar or [[amino acid|amino-acid]] snaps onto its sensor head out in the periplasm, one transmembrane helix slides inward by less than two ångströms—barely the width of a single atom—yet this coiled-coil shaft faithfully telegraphs that tiny nudge all the way down to quiet the CheA kinase at its bottom tip.\n\nSo the swimmer never goes nose-blind in a rich broth, CheR and CheB enzymes constantly add or clip methyl tags along a middle adaptation belt on its [[polypeptide|polypeptide]] stalks, resetting the spring so the [[flagellar motors|real-motor]] always compare right now against two seconds ago.',
      blueprint:
        'Role: Transmembrane chemotaxis transducer and methylation-memory rod (PDB 1QU7) · From: Periplasmic attractant [[amino acids|amino-acid]] or MalE-bound [[glucose|glucose]]/maltose · Inside: Homodimeric four-[[α-helix|alpha-helix]] coiled-coil hairpin (~20 nm cytoplasmic stalk) with HAMP domain, Glu/Gln methylation belt, and CheA/CheW tip · To: Polar [[chemoreceptor array|real-pole]] kinase control governing [[flagellar motor|real-motor]] tumbling frequency',
      scientific:
        'Methyl-accepting chemotaxis protein homodimer (MCP, e.g. E. coli Tsr/Tar cytoplasmic domain PDB 1QU7; ~60 kDa/monomer, ~36 nm total length, ~20 nm cytoplasmic four-helix bundle). Ligand binding to the periplasmic four-helix sensor domain induces a ~1.5 Å piston displacement of transmembrane helix TM2 through the cytoplasmic HAMP domain into the coiled-coil signaling stalk. Reversible SAM-dependent methylation by CheR and CheB-P hydrolysis at 4–5 specific glutamate residues resets kinase baseline activity, enabling temporal derivative sensing (Δ[L]/[L] sensitivity <0.1%).'
    },
    es: {
      simple:
        'Un quimiorreceptor es un largo bastón elástico de cuatro hélices que cuelga bajo la membrana celular: transmite el sabor químico del exterior hasta la quinasa de timón situada en su punta inferior.',
      story:
        'Imagina un diapasón de 20 nanómetros trenzado con cuatro [[hélices alfa|alpha-helix]] que cuelga hacia el citoplasma dentro de la [[matriz polar de quimiorreceptores|real-pole]]. Cuando un azúcar o un [[aminoácido|amino-acid]] atrayente se posa en su antena periplásmica, una hélice transmembrana se desliza hacia dentro apenas un ångström y medio —el ancho de un átomo—, pero este fuste helicoidal transmite ese susurro íntegro hasta su punta inferior para calmar a la quinasa CheA.\n\nPara que la bacteria no pierda olfato dentro de un caldo rico, dos enzimas ponen y quitan grupos metilo sobre el cinturón intermedio de sus tallos [[polipeptídicos|polypeptide]], reajustando el muelle como una memoria de corto plazo para que los [[motores flagelares|real-motor]] comparen siempre el olor de ahora mismo con el de hace dos segundos.',
      blueprint:
        'Rol: Transductor transmembrana de quimiotaxis con memoria adaptativa por metilación (PDB 1QU7) · De: [[Aminoácidos|amino-acid]] o [[glucosa|glucose]]/maltosa periplásmicos · Dentro: Horquilla homodimérica en haz de cuatro [[hélices alfa|alpha-helix]] (~20 nm citoplasmáticos) con dominio HAMP, banda de metilación Glu y punta de unión a CheA/CheW · Hacia: Control de quinasa en la [[matriz polar|real-pole]] para modular vuelcos del [[motor flagelar|real-motor]]',
      scientific:
        'Homodímero de proteína de quimiotaxis aceptora de metilo (MCP, dominio citoplasmático Tsr de E. coli PDB 1QU7; ~60 kDa/monómero, ~36 nm de longitud total, tallo citoplasmático de ~20 nm en superhélice de cuatro hélices). La unión de ligando en el periplasma desplaza tipo pistón (~1,5 Å) la hélice TM2 a través del conversor HAMP hasta la punta reguladora de CheA. La metilación reversible dependiente de S-adenosilmetionina (CheR) y desmetilación (CheB-P) en 4–5 glutamatos específicos reajusta el equilibrio conformacional, otorgando memoria temporal de varios segundos.'
    }
  },

  'real-fork': {
    en: {
      simple:
        'This 250-nanometre DNA copying machine unzips the chromosome at 1,000 letters per second—writing one new strand smoothly forward while looping the other strand around to stitch it in quick back-steps.',
      story:
        'Copying 4.64 million base pairs in forty minutes takes twin high-speed locomotives—and here is one replisome caught mid-stride inside the [[nucleoid|real-nucleoid]]. Out in front, the six-subunit ring of [[DnaB helicase|dnab-helicase]] burns ATP to plow parental [[DNA|dna]] apart at a thousand base pairs every second, feeding the upper template straight into a leading-strand [[DNA polymerase III|pol3-ecoli]] that lays down pale-blue daughter DNA without lifting its pen.\n\nThe lower strand runs backward chemically, so the replisome pulls a clever trombone trick: DnaG primase lays a short pink RNA starter, white SSB spools keep the bare single strand from tangling as it loops out, and a twin Pol III tethered by flexible τ arms stitches a 1,500-base Okazaki fragment before snapping onto the next primer while [[HU clips|hu-protein]] fold both fresh chromosomes behind it.',
      blueprint:
        'Role: Coupled bidirectional E. coli replisome (~1,000 bp/s per fork) · From: Supercoiled parental [[DNA|dna]] in [[nucleoid|real-nucleoid]], dNTPs, NTP primers, and ATP · Inside: [[DnaB helicase|dnab-helicase]] unwinds duplex; τ-tethered twin [[Pol III cores|pol3-ecoli]] + β₂ clamps synthesize continuous leading strand and DnaG-primed, SSB-coated lagging Okazaki loops · To: Two semiconservative sister chromosomes folded immediately by [[HU|hu-protein]] and [[gyrase|gyrase]]',
      scientific:
        'True-scale ~250 nm E. coli replication fork initiated bidirectionally from oriC toward ter sites (~40 min C-period at 1,000 nt/s). Integrates hexameric DnaB helicase (PDB 6QEL) translocating 5′→3′ on the lagging template, DnaG primase (PDB 1DDE) synthesizing ~10–12 nt RNA primers every 1–2 kb, homotetrameric SSB spools (PDB 1EYG, ~65–85 nt wrapped per tetramer), pentameric γ/τ₃δδ′χψ clamp loader (PDB 3GLF) depositing dimeric β₂ sliding clamps, and coupled leading/lagging Pol III αεθ cores (PDB 5FKV), followed by Pol I nick translation and NAD⁺-dependent DNA ligase.'
    },
    es: {
      simple:
        'Esta máquina copiadora de 250 nanómetros abre el cromosoma a mil letras por segundo: escribe una hebra hija seguida hacia delante mientras arquea la otra en bucle para coserla por tramos.',
      story:
        'Duplicar 4,64 millones de pares de bases en cuarenta minutos exige dos locomotoras gemelas a toda costa, y aquí tienes un replisoma cazado en plena carrera dentro del [[nucleoide|real-nucleoid]]. En vanguardia, el anillo de seis piezas de la [[helicasa DnaB|dnab-helicase]] quema ATP para hender el [[ADN|dna]] parental a mil bases por segundo, entregando la hebra superior directa a una [[ADN polimerasa III|pol3-ecoli]] que extiende la hebra conductora sin levantar el trazo.\n\nComo la otra hebra corre al revés químicamente, el replisoma ejecuta un malabarismo de trombón: la primasa DnaG planta un breve cebador rosa de ARN, carretes blancos de SSB evitan enredos mientras la hebra desnuda describe un amplio bucle y una segunda Pol III sujeta por brazos τ cose fragmentos de Okazaki de mil quinientas letras mientras pinzas [[HU|hu-protein]] pliegan detrás ambos cromosomas hijos.',
      blueprint:
        'Rol: Replisoma acoplado de E. coli (~1.000 pb/s por horquilla) · De: [[ADN|dna]] parental del [[nucleoide|real-nucleoid]], dNTPs, NTPs para cebadores y ATP · Dentro: [[Helicasa DnaB|dnab-helicase]] separa la hélice; dos núcleos [[Pol III|pol3-ecoli]] unidos por brazos τ copian la hebra conductora continua y el bucle rezagado con SSB y cebadores de [[ARN|rna]] (DnaG) · Hacia: Dos cromosomas semiconservativos compactados por [[HU|hu-protein]] y [[girasa|gyrase]]',
      scientific:
        'Horquilla de replicación de E. coli a escala real (~250 nm) que avanza desde oriC hacia ter (~40 min de periodo C a ~1.000 pb/s). Reúne la helicasa hexamérica DnaB (PDB 6QEL) sobre el molde rezagado 5′→3′, primasa DnaG (PDB 1DDE; cebadores de ARN de ~10–12 nt cada 1–2 kb), tetrámeros SSB recubriendo ADN monocatenario (PDB 1EYG; ~65–85 nt/tetrámero), cargador de pinza τ₃δδ′χψ (PDB 3GLF), anillos deslizantes diméricos β₂ y polimerasas gemelas Pol III αεθ (PDB 5FKV), seguidas de ADN Pol I y ligasa dependiente de NAD⁺.'
    }
  },

  'atp-synthase-ecoli': {
    en: {
      simple:
        'Mounted right in the bacterium’s inner membrane, E. coli ATP synthase is a rotary waterwheel spun by incoming protons—minting three fresh ATP fuel molecules with every full turn.',
      story:
        'With zero mitochondria aboard, E. coli bolts its rotary power turbines straight into the [[cell envelope’s|real-envelope]] inner membrane, heads pointing inward toward the [[cytosol|cytosol]]. Protons packed into the periplasm by [[Complex I|complex-i-ecoli]] drop down a half-channel in subunit a, hopping onto a carousel of ten c [[alpha-helical|alpha-helix]] hairpins to spin the membrane rotor like a millstone in a fast stream.\n\nAttached to that carousel, the lopsided γ–ε central drive shaft whirls inside the α₃β₃ catalytic crown—held keepsake-still by the slender b₂δ side-stalk—forcing three β jaws through open, loose, and tight strokes that slam ADP and phosphate into three fresh ATPs per turn. And if oxygen vanishes? The turbine simply burns glycolytic ATP in reverse to pump protons out so the [[flagellar motors|real-motor]] never lose voltage.',
      blueprint:
        'Role: Reversible inner-membrane rotary F₁F₀ ATP synthase/ATPase (PDB 6OQR) · From: Periplasmic H⁺ gradient from [[Complex I|complex-i-ecoli]] plus cytosolic ADP + [[phosphate|phosphate]] · Inside: 10-subunit F₀ c₁₀ [[α-helical|alpha-helix]] ring + a stator spin central γ–ε stalk inside b₂δ-braced α₃β₃ head · To: 3 ATP per 360° turn (10 H⁺ / 3 ATP ≈ 3.3 H⁺/ATP) powering [[ribosomes|ribosome-ecoli]], [[GroEL|groel]], and [[replisomes|real-fork]]',
      scientific:
        'Cryo-EM structure of intact Escherichia coli F₁F₀ ATP synthase (PDB 6OQR; ~530 kDa, ~25 nm height, 8 subunit types: F₁ α₃β₃γδε + F₀ ab₂c₁₀). Transmembrane proton translocation across two offset half-channels in subunit a protonates/deprotonates Asp61 on the 10-hairpin c₁₀ rotor ring, driving 120° stepping of the asymmetric γ–ε stalk against the stationary α₃β₃ hexamer braced by the peripheral b₂δ stalk. Yields 3 ATP per 10 H⁺ (H⁺/ATP = 3.33) at up to ~100–270 revolutions/s under aerobic Δp, or hydrolyzes ATP in anaerobiosis to maintain Δp.'
    },
    es: {
      simple:
        'Anclada directamente en la membrana interna de la bacteria, la ATP sintasa de E. coli es una noria rotatoria movida por protones que acuña tres moléculas de ATP por cada vuelta completa.',
      story:
        'Al no llevar mitocondrias a bordo, E. coli atornilla sus turbinas eléctricas directamente en la membrana interna de la [[envoltura celular|real-envelope]], con el cabezal asomando hacia el [[citosol|cytosol]]. Los protones acumulados en el periplasma por el [[Complejo I|complex-i-ecoli]] bajan por la subunidad a y saltan a un carrusel de diez horquillas de [[hélice alfa|alpha-helix]] (anillo c₁₀), haciéndolo girar como una rueda de molino bajo un salto de agua.\n\nSolidario con ese carrusel, el eje central asimétrico γ–ε da vueltas dentro de la corona α₃β₃ —sujeta firme por el brazo lateral b₂δ— y obliga a sus tres cámaras β a prensar ADP y fosfato hasta escupir tres ATP nuevos por giro. ¿Que se acaba el oxígeno? La turbina invierte el giro quemando ATP glucolítico para bombear protones hacia fuera y que los [[motores flagelares|real-motor]] jamás se queden sin tensión.',
      blueprint:
        'Rol: Turbina rotatoria reversible F₁F₀ ATP sintasa de membrana interna (PDB 6OQR) · De: Gradiente periplásmico de H⁺ del [[Complejo I|complex-i-ecoli]], ADP y [[fosfato|phosphate]] · Dentro: Anillo c₁₀ de [[hélices alfa|alpha-helix]] e interfaz a giran el tallo γ–ε dentro del cabezal α₃β₃ frenado por b₂δ · Hacia: 3 ATP por vuelta (3,33 H⁺/ATP) para [[ribosomas|ribosome-ecoli]], [[GroEL|groel]] y [[horquilla de replicación|real-fork]]',
      scientific:
        'Estructura crio-EM de la ATP sintasa F₁F₀ íntegra de Escherichia coli (PDB 6OQR; ~530 kDa, ~25 nm de altura, 8 tipos de subunidades: F₁ α₃β₃γδε + F₀ ab₂c₁₀). El paso de H⁺ por dos semicanales desfasados de la subunidad a protona/desprotona Asp61 en el anillo c₁₀, impulsando pasos rotatorios de 120° del eje γ–ε dentro del hexámero α₃β₃ inmovilizado por el estator periférico b₂δ. Sintetiza 3 ATP por cada 10 H⁺ (relación 3,33 H⁺/ATP) a ~100–270 rps bajo respiración aerobia, o hidroliza ATP en anaerobiosis para sostener Δp.'
    }
  },

  'complex-i-ecoli': {
    en: {
      simple:
        'Complex I is an L-shaped power pump in the inner membrane—stripping electrons from food-derived NADH in its upright arm and using that jolt to push four protons out through its membrane arm.',
      story:
        'While human mitochondria wrap Complex I in thirty-plus extra accessory subunits, E. coli runs the lean, stripped-down 13-protein original right in its [[inner envelope|real-envelope]]. Down in the cytoplasmic arm, NADH fresh from glycolysis and the Krebs cycle docks at a flavin sparkplug and hands over two high-energy electrons, which zip down a 9-station wire of iron–sulfur clusters toward the membrane hinge.\n\nWhen those electrons leap onto a waiting quinone carrier inside the bilayer, electrostatic shockwaves ripple down the 18-nanometre horizontal arm of [[alpha-helical|alpha-helix]] antiporter channels, heaving four protons out into the periplasm. Cytochrome oxidases finish the handoff to oxygen while those pumped protons rush back in to spin [[ATP synthases|atp-synthase-ecoli]], [[flagellar motors|real-motor]], and [[AcrAB–TolC pumps|acrab-tolc]].',
      blueprint:
        'Role: Minimalist 13-subunit respiratory NADH:quinone oxidoreductase H⁺ pump (PDB 7NYR) · From: Cytoplasmic NADH + H⁺ from glycolysis/TCA and membrane ubiquinone/menaquinone · Inside: L-shaped NuoA–N complex transfers 2 e⁻ across FMN + 9 Fe–S clusters in peripheral arm to drive 4 H⁺ ejection across [[α-helical|alpha-helix]] membrane arm · To: Reduced quinol for terminal oxidases and periplasmic Δp feeding [[ATP synthase|atp-synthase-ecoli]], [[flagellar motor|real-motor]], and [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Cryo-EM structure of Escherichia coli respiratory Complex I / NADH dehydrogenase I (NDH-1, encoded by nuoA–N with fused NuoCD; 13 polypeptides, ~535 kDa, ~15 nm peripheral arm × ~18 nm membrane arm; PDB 7NYR)—the minimal catalytic core conserved in 45-subunit mammalian Complex I. Oxidizes cytoplasmic NADH via non-covalent FMN and transfers 2 e⁻ down a ~95 Å chain of 9 iron–sulfur clusters (2 [2Fe–2S], 7 [4Fe–4S], ending at N2) to ubiquinone-8/menaquinone-8, coupling ΔE°′ ≈ +0.42 V to conformational/electrostatic proton translocation across NuoL, NuoM, NuoN, and NuoH/A/J/K channels (stoichiometry 4 H⁺/2 e⁻).'
    },
    es: {
      simple:
        'El Complejo I es una bomba de energía en forma de L incrustada en la membrana interna: toma electrones del NADH en su brazo vertical y aprovecha ese chispazo para expulsar cuatro protones por su brazo horizontal.',
      story:
        'Mientras las mitocondrias humanas envuelven su Complejo I con más de treinta piezas accesorias, E. coli monta en su [[envoltura interna|real-envelope]] el motor original puro y ligero de trece proteínas. En el brazo que asoma al citoplasma, el NADH recién llegado de romper azúcares entrega dos electrones llenos de brío a una flavina, desde donde bajan a toda chispa por un cable de nueve centros de hierro-azufre hasta la bisagra de la membrana.\n\nAl saltar esos electrones sobre una quinona liposoluble, una sacudida electrostática recorre los 18 nanómetros del brazo horizontal de [[hélices alfa|alpha-helix]] y empuja cuatro protones al foso periplásmico. Esos mismos protones alimentarán segundos después el giro de la [[ATP sintasa|atp-synthase-ecoli]], los [[motores flagelares|real-motor]] y los cañones [[AcrAB–TolC|acrab-tolc]].',
      blueprint:
        'Rol: Bomba respiratoria minimalista NADH:quinona oxidorreductasa de 13 subunidades (PDB 7NYR) · De: NADH citoplasmático (glucólisis/TCA) y ubiquinona/menaquinona de membrana · Dentro: Complejo NuoA–N en L conduce 2 e⁻ por FMN y 9 centros Fe–S para bombear 4 H⁺ mediante antiporters de [[hélices alfa|alpha-helix]] · Hacia: Quinol reducido para oxidasas terminales y gradiente H⁺ periplásmico para [[ATP sintasa|atp-synthase-ecoli]], [[motor flagelar|real-motor]] y [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Estructura crio-EM de la NADH deshidrogenasa I de Escherichia coli (NDH-1, operón nuoA–N con fusión NuoCD; 13 polipéptidos, ~535 kDa, brazo periférico de ~15 nm × brazo membranoso de ~18 nm; PDB 7NYR), núcleo catalítico mínimo homólogo al Complejo I mitocondrial de 45 subunidades. Oxida NADH mediante FMN y conduce 2 e⁻ a través de 9 centros hierro-azufre (2 [2Fe–2S] y 7 [4Fe–4S] hasta el centro N2) hacia ubiquinona-8/menaquinona-8, acoplando la caída redox al bombeo vectorial de 4 H⁺/2 e⁻ por las subunidades antiporter NuoL, NuoM, NuoN y NuoH/A/J/K.'
    }
  },

  'acrab-tolc': {
    en: {
      simple:
        'AcrAB–TolC is a 33-nanometre multidrug cannon spanning all three layers of the cell wall—grabbing antibiotics before they even reach the cytoplasm and firing them straight outside.',
      story:
        'Why wait for poison to hit your ribosomes when you can intercept it in the hallway and shoot it through the roof? Spanning all 33 nanometres of the [[cell envelope|real-envelope]], trimeric AcrB sits in the [[plasma membrane|plasma-membrane]] like a three-cylinder peristaltic bilge pump, snatching bile salts, detergents, and antibiotics straight out of the lipid bilayer and periplasm.\n\nPowered by periplasmic protons rushing back inward—courtesy of [[Complex I|complex-i-ecoli]]—each AcrB monomer cycles smoothly through access, binding, and squeeze strokes, ramming its toxic catch up a hexameric AcrA adapter collar and straight out the 14-nanometre TolC β-barrel chimney piercing the [[LPS|lps]] outer hull. The drug lands back in the outside world without ever touching the cytoplasm.',
      blueprint:
        'Role: Tripartite RND proton-antiporter multidrug efflux cannon (PDB 5O66) · From: Hydrophobic antibiotics, bile salts, and detergents in periplasm/[[plasma membrane|plasma-membrane]] plus periplasmic H⁺ from [[Complex I|complex-i-ecoli]] · Inside: AcrB₃ inner-membrane peristaltic pump + AcrA₆ periplasmic funnel + TolC₃ outer-membrane channel spanning [[cell envelope|real-envelope]] · To: Direct expulsion past [[LPS|lps]] barrier into extracellular medium and H⁺ return to cytosol',
      scientific:
        'Cryo-EM structure of the Escherichia coli tripartite RND multidrug efflux complex AcrB₃–AcrA₆–TolC₃ (PDB 5O66; ~770 kDa, ~33 nm axial length spanning inner membrane, periplasm, and outer membrane). Inner-membrane RND antiporter AcrB homotrimer undergoes functional rotation across Loose (Access), Tight (Binding, hydrophobic Phe-rich pocket), and Open (Extrusion) states driven by inward H⁺ translocation via a transmembrane Asp407–Asp408–Lys940 relay. Substrates (β-lactams, fluoroquinolones, tetracyclines, macrolides, chloramphenicol, bile salts) are funneled through the hexameric membrane-fusion protein AcrA and iris-opened 14-nm α/β-barrel TolC duct directly across the outer membrane.'
    },
    es: {
      simple:
        'AcrAB–TolC es un cañón expulsador de 33 nanómetros que atraviesa las tres capas de la envoltura celular: atrapa antibióticos antes siquiera de que pisen el citoplasma y los dispara directo al exterior.',
      story:
        '¿Para qué esperar a que un veneno toque tus ribosomas si puedes interceptarlo en el vestíbulo y catapultarlo por el tejado? Tendido a lo largo de los 33 nanómetros completos de la [[envoltura celular|real-envelope]], el trímero AcrB vigila en la [[membrana plasmática|plasma-membrane]] como una bomba de achique de tres tiempos, pescando sales biliares, detergentes y antibióticos directamente en la bicapa y el periplasma.\n\nImpulsado por los protones que regresan desde el periplasma —cargados previamente por el [[Complejo I|complex-i-ecoli]]—, cada pistón AcrB alterna fases de captura, cierre y compresión para empujar el tóxico por el embudo hexamérico AcrA y escupirlo por la chimenea TolC de 14 nanómetros que perfora la coraza de [[LPS|lps]]. El fármaco vuelve a la calle sin haber rozado jamás el interior celular.',
      blueprint:
        'Rol: Cañón tripartito RND de eflujo multirresistente impulsado por H⁺ (PDB 5O66) · De: Antibióticos, detergentes y sales biliares en periplasma/[[membrana plasmática|plasma-membrane]] más H⁺ del [[Complejo I|complex-i-ecoli]] · Dentro: Bomba peristáltica AcrB₃ + embudo periplásmico AcrA₆ + conducto externo TolC₃ a través de la [[envoltura celular|real-envelope]] · Hacia: Expulsión directa más allá del [[LPS|lps]] al medio extracelular y entrada acoplada de H⁺',
      scientific:
        'Estructura crio-EM de la bomba tripartita de eflujo RND AcrB₃–AcrA₆–TolC₃ de Escherichia coli (PDB 5O66; ~770 kDa, ~33 nm de longitud axial transenvoltura). El homotrímero interno AcrB cicla de modo rotatorio funcional por los estados Acceso (L), Unión (T, bolsillo hidrofóbico rico en Phe) y Extrusión (O) acoplado a la entrada de protones por la tríada transmembrana Asp407–Asp408–Lys940. Los sustratos (β-lactámicos, fluoroquinolonas, macrólidos, tetraciclinas, sales biliares) ascienden sellados por el collar hexamérico AcrA y el túnel α/β TolC de 14 nm hacia el exterior.'
    }
  },

  'dnab-helicase': {
    en: {
      simple:
        'DnaB helicase is a six-piece protein ring threaded onto one strand of DNA—burning fuel like a motorized zipper pull to split the double helix at 1,000 base pairs per second.',
      story:
        'Right at the sharp prow of the [[replication fork|real-fork]], six identical subunits lock into a 12-nanometre collar around the lagging-strand [[DNA|dna]] template while forcing the leading-strand template outside the ring like a wedge splitting firewood. Burning ATP around its hexameric circle, internal loops step hand-over-hand down the sugar-phosphate backbone, ripping hydrogen bonds apart at a blistering thousand base pairs every second.\n\nDnaB never flies solo: flexible τ tethers tie its tail directly to twin [[DNA polymerase III|pol3-ecoli]] engines so unwinding never outruns copying, while its front shoulder periodically catches DnaG primase to drop fresh RNA starters onto the looping lagging strand.',
      blueprint:
        'Role: Hexameric 5′→3′ replicative DNA unzipping motor (PDB 6QEL) · From: DnaC-mediated loading at oriC onto parental [[DNA|dna]] plus cytosolic ATP/NTPs · Inside: Homohexameric [[polypeptide|polypeptide]] ring (~12 nm) translocates hand-over-hand along lagging template (2 nt/ATP) to sterically exclude leading strand · To: Unwound single-stranded templates feeding [[Pol III|pol3-ecoli]] and DnaG primase inside [[replication fork|real-fork]]',
      scientific:
        'Superfamily 4 replicative hexameric helicase DnaB₆ (PDB 6QEL; 6 × 52 kDa = ~312 kDa, ~12 nm outer diameter, ~2.5–4 nm central channel) loaded onto oriC ssDNA bubbles by ATP-bound DnaC₆. Translocates 5′→3′ along the lagging-strand template via sequential hand-over-hand subunit staircase cycling (2 nt translocated per NTP hydrolyzed; ~700–1,000 bp/s when coupled to Pol III via τ-subunit C-terminal domains, vs. ~35 bp/s uncoupled). Transiently recruits up to three DnaG primase molecules to its N-terminal collar to initiate Okazaki fragments.'
    },
    es: {
      simple:
        'La helicasa DnaB es un anillo de seis piezas ensartado en una hebra del ADN: quema energía como el cursor motorizado de una cremallera para abrir la doble hélice a mil pares de bases por segundo.',
      story:
        'En la proa misma de la [[horquilla de replicación|real-fork]], seis subunidades idénticas cierran un collar de 12 nanómetros alrededor del molde rezagado de [[ADN|dna]], obligando a la hebra opuesta a resbalar por fuera del anillo como una cuña que raja leña. Quemando ATP en cascada alrededor del hexámero, sus lazos internos trepan peldaño a peldaño por el esqueleto de fosfatos y abren mil pares de bases por segundo.\n\nDnaB nunca viaja desencadenada: tirantes flexibles τ la atan por detrás a las dos [[ADN polimerasas III|pol3-ecoli]] para sincronizar el paso, mientras su hombro delantero invita cada pocos segundos a la primasa DnaG a estampar un nuevo cebador.',
      blueprint:
        'Rol: Motor hexamérico replicativo de desenrollamiento de ADN 5′→3′ (PDB 6QEL) · De: Carga por DnaC en oriC sobre [[ADN|dna]] parental y ATP/NTPs citosólicos · Dentro: Anillo homohexamérico de [[polipéptidos|polypeptide]] (~12 nm) que avanza mano sobre mano (2 nt/ATP) excluyendo estéricamente la hebra conductora · Hacia: Moldes monocatenarios abiertos para [[Pol III|pol3-ecoli]] y primasa DnaG en la [[horquilla de replicación|real-fork]]',
      scientific:
        'Helicasa replicativa hexamérica de superfamilia 4 DnaB₆ (PDB 6QEL; 6 × 52 kDa ≈ 312 kDa, ~12 nm de diámetro externo) depositada en oriC por el complejo cargador DnaC₆. Avanza en dirección 5′→3′ sobre el molde rezagado mediante un mecanismo secuencial en escalera espiral (2 nt por NTP hidrolizado; velocidad de ~700–1.000 pb/s acoplada al replisoma mediante los dominios C-terminales de τ, frente a ~35 pb/s aislada). Su collar N-terminal recluta transitoriamente a la primasa DnaG para iniciar cada fragmento de Okazaki.'
    }
  },

  'pol3-ecoli': {
    en: {
      simple:
        'DNA polymerase III is E. coli’s master copywriter—locked onto DNA by a sliding ring clamp so it can type 1,000 letters a second while instantly backspacing its own rare typos.',
      story:
        'Left to itself, a polymerase core would fall off [[DNA|dna]] after a dozen letters; snap the golden β₂ sliding-clamp doughnut behind it, however, and this 13-nanometre sprinter stays locked on the rail for hundreds of thousands of bases. Trailing right behind [[DnaB helicase|dnab-helicase]] inside the [[replication fork|real-fork]], its catalytic α palm grabs dNTP [[nucleotides|nucleotide]] from the cytoplasm and snaps them onto the 3′ end a thousand times every second.\n\nIf a mismatched base sneaks in—roughly once every hundred thousand tries—the growing tip stalls and flips four nanometres sideways into the ε proofreading pocket, which snips off the typo and hands the clean strand straight back to α so the daughter [[nucleoid|real-nucleoid]] inherits near-flawless code.',
      blueprint:
        'Role: High-speed, high-fidelity replicative DNA polymerase + sliding clamp (PDB 5FKV) · From: Single-stranded templates from [[DnaB helicase|dnab-helicase]], RNA primers, and cytosolic dNTP [[nucleotides|nucleotide]] · Inside: α polymerase + ε 3′→5′ proofreading exonuclease + θ stabilizer locked onto [[DNA|dna]] by dimeric β₂ ring clamp · To: Semiconservative leading and Okazaki lagging duplexes inside [[replication fork|real-fork]] (<10⁻⁷ error/bp)',
      scientific:
        'Cryo-EM structure of the Escherichia coli replicative DNA polymerase III core–clamp complex on primer–template DNA (PDB 5FKV; ~13 nm across). Core heterotrimer comprises family-C polymerase α (DnaE, 1,160 aa, 130 kDa), DnaQ/ε 3′→5′ proofreading exonuclease (243 aa, 27.5 kDa), and HolE/θ stabilizer (8.8 kDa), tethered via two hydrophobic peptide motifs to the homodimeric head-to-tail β₂ sliding clamp (DnaN₂, 2 × 40.6 kDa ring encircling B-DNA). Synthesizes DNA at ~750–1,000 nt/s with processivity >50–500 kb; base selection (~10⁻⁵) plus ε exonucleolytic editing (~10⁻²) achieves ~10⁻⁷ replicative error prior to Dam-directed MutSLH mismatch repair (~10⁻¹⁰ final).'
    },
    es: {
      simple:
        'La ADN polimerasa III es la mecanógrafa maestra de E. coli: sujeta al ADN por un anillo deslizante, escribe mil letras por segundo y borra al vuelo sus contadísimas erratas.',
      story:
        'Suelto a su suerte, el núcleo polimerasa se caería del [[ADN|dna]] tras una docena de letras; pero en cuanto el anillo dorado de la pinza β₂ se cierra detrás de él, este velocista de 13 nanómetros queda engarzado al raíl para copiar cientos de miles de bases del tirón. Pegado tras la [[helicasa DnaB|dnab-helicase]] en la [[horquilla de replicación|real-fork]], su palma catalítica α caza [[nucleótidos|nucleotide]] dNTP del citoplasma y los suelda a mil impactos por segundo.\n\nSi una base equivocada se cuela —apenas una vez cada cien mil intentos—, la hebra se frena y salta cuatro nanómetros de costado al bolsillo corrector ε, que recorta la errata al instante y devuelve la punta limpia a α para legar al nuevo [[nucleoide|real-nucleoid]] un texto casi perfecto.',
      blueprint:
        'Rol: Polimerasa replicativa de alta velocidad y fidelidad con pinza deslizante (PDB 5FKV) · De: Moldes abiertos por la [[helicasa DnaB|dnab-helicase]], cebadores de ARN y [[nucleótidos|nucleotide]] dNTP · Dentro: Subunidad α polimerasa + exonucleasa correctora ε 3′→5′ + θ aseguradas al [[ADN|dna]] por el anillo dimérico β₂ · Hacia: Dúplex conductor y fragmentos de Okazaki en la [[horquilla de replicación|real-fork]] (error <10⁻⁷/pb)',
      scientific:
        'Estructura crio-EM del complejo replicativo ADN polimerasa III–pinza β₂ de Escherichia coli sobre ADN molde-cebador (PDB 5FKV; ~13 nm). El núcleo heterotrimérico reúne la polimerasa α de familia C (DnaE, 130 kDa), la exonucleasa correctora 3′→5′ ε (DnaQ, 27,5 kDa) y θ (HolE, 8,8 kDa), anclado al anillo homodimérico deslizante β₂ (DnaN₂, 2 × 40,6 kDa). Polimeriza a ~750–1.000 nt/s con procesividad >50–500 kb; la discriminación en el bolsillo activo (~10⁻⁵) sumada a la edición exonucleolítica de ε (~10⁻²) reduce la tasa de error a ~10⁻⁷ antes de la reparación MutSLH (~10⁻¹⁰ final).'
    }
  },

  gyrase: {
    en: {
      simple:
        'DNA gyrase is a molecular untangler and spring-winder: it snips both strands of DNA, passes another loop right through the cut, and seals it back up to keep the chromosome compact and twist-free.',
      story:
        'Unzipping [[DNA|dna]] at a thousand bases a second ahead of [[DnaB helicase|dnab-helicase]] and [[RNA polymerase|rnap-ecoli]] cranks vicious positive knots ahead of every fork—enough torsional jam to bring the whole submarine to a dead halt. Stationed every few thousand base pairs across the [[nucleoid|real-nucleoid]], DNA gyrase wraps a segment of helix around its wheel, slices both strands clean through using active-site tyrosines, and burns ATP to shove a second DNA duplex straight through the open gate before snapping the cut shut without a scar.\n\nEach daring magic trick subtracts two twists—relieving fork gridlock while spring-loading the chromosome with negative supercoils. Fluoroquinolone antibiotics like ciprofloxacin turn this lifesaver into an assassin by wedging inside the open cut so gyrase cannot reseal its own double-strand break.',
      blueprint:
        'Role: ATP-dependent Type IIA topoisomerase introducing negative supercoils (PDB 6RKW) · From: Positively overwound [[DNA|dna]] ahead of [[replication forks|real-fork]] and [[RNA polymerase|rnap-ecoli]], plus 2 ATP · Inside: GyrA₂GyrB₂ heterotetramer (~20 nm) cleaves double-stranded G-segment via Tyr122 covalent linkage, passes T-segment through 3 gates, and religates · To: Negatively supercoiled plectonemes (ΔLk = −2 per cycle) in [[nucleoid|real-nucleoid]] plus 2 ADP + Pi',
      scientific:
        'Cryo-EM structure of Escherichia coli DNA gyrase holoenzyme GyrA₂GyrB₂ (PDB 6RKW; ~374 kDa, ~20 nm tall; 2 × GyrA 97 kDa + 2 × GyrB 90 kDa)—unique among Type IIA topoisomerases in actively introducing negative supercoils against elastic torque. Wraps ~130 bp of DNA in a positive chiral loop around C-terminal GyrA β-pinwheel domains; ATP binding to GyrB GHKL domains closes the N-gate and drives strand passage of a T-segment through a transient 4-bp staggered double-strand break covalently tethered via 5′-phosphotyrosyl bonds to GyrA-Tyr122 (DNA-gate), exiting the C-gate for ΔLk = −2 per 2 ATP (~1–2 cycles/s). Poisoned by fluoroquinolones (ciprofloxacin, levofloxacin) stabilizing cleavage complexes and by aminocoumarins blocking GyrB ATPase.'
    },
    es: {
      simple:
        'La ADN girasa es un desenredador y tensor molecular: corta de cuajo las dos hebras del ADN, pasa otro tramo a través del hueco y vuelve a sellar el corte sin cicatriz para mantener compacto el cromosoma.',
      story:
        'Abrir el [[ADN|dna]] a mil letras por segundo delante de la [[helicasa DnaB|dnab-helicase]] y de la [[ARN polimerasa|rnap-ecoli]] retuerce la doble hélice por delante en nudos positivos tan tensos que pararían en seco toda la maquinaria celular. Apostada cada pocos miles de bases por el [[nucleoide|real-nucleoid]], la ADN girasa abraza un tramo sobre su rueda lateral, taja ambas hebras usando tirosinas activas y gasta ATP para cruzar otro segmento entero a través de la brecha antes de volver a soldar los cabos.\n\nCada pase de prestidigitador descuenta dos vueltas, aliviando el atasco y cargando el cromosoma con superenrollamiento negativo como un muelle listo para abrirse. Antibióticos como el ciprofloxacino convierten a esta salvadora en verdugo acuñándose justo dentro del corte abierto para impedir que vuelva a cerrarlo.',
      blueprint:
        'Rol: Topoisomerasa tipo IIA dependiente de ATP generadora de superenrollamiento negativo (PDB 6RKW) · De: [[ADN|dna]] sobretorcido delante de la [[horquilla de replicación|real-fork]] y [[ARN polimerasa|rnap-ecoli]], más 2 ATP · Dentro: Heterotetrámero GyrA₂GyrB₂ (~20 nm) escinde el segmento G bicatenario (Tyr122), cruza el segmento T por tres compuertas y religa · Hacia: Plectonemas con superenrollamiento negativo (ΔLk = −2/ciclo) en el [[nucleoide|real-nucleoid]] más 2 ADP + Pi',
      scientific:
        'Estructura crio-EM del heterotetrámero ADN girasa GyrA₂GyrB₂ de Escherichia coli (PDB 6RKW; ~374 kDa, ~20 nm; 2 × GyrA 97 kDa + 2 × GyrB 90 kDa), única topoisomerasa tipo IIA capaz de introducir activamente superenrollamientos negativos contra tensión torsional. Enrolla ~130 pb en quiralidad positiva sobre los dominios β-pinwheel C-terminales de GyrA; el cierre dependiente de 2 ATP de la compuerta N (GyrB) impulsa el cruce de un segmento T a través de un corte bicatenario escalonado de 4 nt unido por enlaces 5′-fosfotirosilo a GyrA-Tyr122, logrando ΔLk = −2 por ciclo. Las fluoroquinolonas (ciprofloxacino) estabilizan el complejo de corte letal.'
    }
  }
};


export const PROKARYOTE_PART_LENSES: PagePartLensMap = {
  'prokaryote_cell_realistic.html': {
    om: {
      en: {
        subtitle: 'The Asymmetric Endotoxin Hull',
        simple:
          'Unlike ordinary membranes made of phospholipids on both sides, this outer shield coats its exterior in sugar-tipped LPS armor that blocks detergents and oily antibiotics.',
        story:
          'Life inside a mammalian gut means swimming through bile salts and digestive detergents designed to dissolve ordinary fat bubbles on contact. E. coli answers with a lopsided outer hull: [[phospholipids|phospholipid]] line the inner face toward the periplasm, while newly minted [[LPS|lps]] molecules ride a seven-protein bridge from the [[plasma membrane|plasma-membrane]] to pave the entire outside deck in a magnesium-locked sugar thicket.\n\nGreasy poisons and bulky drugs skid harmlessly off that wet canopy, while dissolved oxygen slips across toward the [[respiratory chain|complex-i-ecoli]] and metabolic CO₂ exhales outward. Any water-soluble meal hoping to board the submarine has to queue up at embedded [[porin|porin]] airlocks.',
        blueprint: {
          role: 'Asymmetric outer permeability barrier of the [[Gram-negative envelope|real-envelope]]',
          arrivesFrom: '[[LPS|lps]] exported via LptA–G bridge and [[phospholipids|phospholipid]] from [[plasma membrane|plasma-membrane]]',
          inside: 'Outer leaflet of Mg²⁺-cross-linked [[LPS|lps]] over an inner phospholipid leaflet, riveted down by Braun’s lipoprotein',
          deliversTo: 'Hydrophobic drug/bile exclusion, O₂/CO₂ gas exchange, and structural housing for [[porins|porin]] and [[AcrAB–TolC|acrab-tolc]]',
          loop: 'Cell swelling or LPS defects trigger envelope stress responses that remodel outer-membrane lipid packing'
        },
        scientific:
          'Asymmetric ~7 nm lipid bilayer forming the outermost boundary of E. coli: inner leaflet of ~75% phosphatidylethanolamine, ~20% phosphatidylglycerol, and ~5% cardiolipin; outer leaflet exclusively rough-type Lipid A–Kdo₂–core lipopolysaccharide (~2 × 10⁶ molecules/cell) cross-bridged by divalent Mg²⁺/Ca²⁺ to yield very low lateral fluidity and ~100-fold lower permeability to lipophilic solutes than canonical bilayers. Tethering to peptidoglycan via ~5 × 10⁵ Braun’s lipoprotein (Lpp) homotrimers prevents outer-membrane blebbing.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Inner membrane', cargo: 'LPS & phospholipids' },
          { nodeId: 'porin', label: 'LptDE & BAM', cargo: 'Outer-leaflet assembly' }
        ],
        to: [
          { nodeId: 'porin', label: 'OmpF porins', cargo: 'Small-solute routing' },
          { nodeId: 'peptidoglycan', label: 'Wall & periplasm', cargo: 'Lpp mechanical anchor' },
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain', cargo: 'Diffusing O₂' }
        ]
      },
      es: {
        subtitle: 'El casco asimétrico de endotoxina',
        simple:
          'A diferencia de las membranas comunes hechas de fosfolípidos por ambas caras, este escudo exterior se pavimenta por fuera con cadenas azucaradas de LPS que frenan detergentes y antibióticos grasos.',
        story:
          'Vivir en el intestino de un mamífero exige nadar entre sales biliares y detergentes diseñados para disolver cualquier burbuja de grasa al primer roce. E. coli responde con un casco exterior asimétrico: los [[fosfolípidos|phospholipid]] tapizan la cara interna hacia el periplasma, mientras bloques frescos de [[LPS|lps]] cruzan desde la [[membrana plasmática|plasma-membrane]] por un puente proteico para cubrir toda la cubierta externa con un seto de azúcares abrochado con magnesio.\n\nLos venenos aceitosos y los fármacos voluminosos patinan sobre ese dosel húmedo, el oxígeno difunde hacia el [[Complejo I|complex-i-ecoli]] y el CO₂ escapa limpio hacia fuera. Cualquier nutriente soluble que quiera subir a bordo debe hacer cola en las esclusas de [[porina|porin]].',
        blueprint: {
          role: 'Barrera externa asimétrica de permeabilidad de la [[envoltura Gram-negativa|real-envelope]]',
          arrivesFrom: '[[LPS|lps]] vía puente LptA–G y [[fosfolípidos|phospholipid]] desde la [[membrana plasmática|plasma-membrane]]',
          inside: 'Hemicapa externa de [[LPS|lps]] reticulado con Mg²⁺ sobre hemicapa interna fosfolipídica sujeta por lipoproteína Lpp',
          deliversTo: 'Exclusión de sales biliares/antibióticos, difusión de O₂/CO₂ y soporte de [[porinas|porin]] y [[AcrAB–TolC|acrab-tolc]]',
          loop: 'El estrés de envoltura detecta huecos en el LPS y refuerza la asimetría lipídica externa'
        },
        scientific:
          'Bicapa lipídica asimétrica de ~7 nm en la superficie de E. coli: hoja interna compuesta por ~75% fosfatidiletanolamina, ~20% fosfatidilglicerol y ~5% cardiolipina; hoja externa poblada exclusivamente por lipopolisacárido Lípido A–núcleo (~2 × 10⁶ copias/célula) estabilizado por puentes Mg²⁺/Ca²⁺, reduciendo dos órdenes de magnitud la permeabilidad a compuestos lipofílicos. Anclada covalentemente al peptidoglicano mediante ~5 × 10⁵ trímeros de lipoproteína de Braun (Lpp).',
        from: [
          { nodeId: 'plasma-membrane', label: 'Membrana interna', cargo: 'LPS y fosfolípidos' },
          { nodeId: 'porin', label: 'LptDE y BAM', cargo: 'Inserción externa' }
        ],
        to: [
          { nodeId: 'porin', label: 'Porinas OmpF', cargo: 'Paso de solutos' },
          { nodeId: 'peptidoglycan', label: 'Pared y periplasma', cargo: 'Anclaje Lpp' },
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria', cargo: 'O₂ difundido' }
        ]
      }
    },

    porin: {
      en: {
        subtitle: 'Airlocks & Barrel Builders of the Outer Deck',
        simple:
          'Crowded β-barrel proteins stud the outer membrane—OmpF sieves let small sugars and amino acids slip inside, while BAM and LptDE machines build and repair the armor itself.',
        story:
          'An impenetrable hull would starve its own crew in seconds, so E. coli crowds its outer membrane with three-barreled [[OmpF porins|porin]] whose water-filled eyelets pass [[glucose|glucose]], [[amino acids|amino-acid]], and ions under 600 daltons into the periplasmic moat. Right beside them, OmpA barrels bolt the outer deck down onto the [[peptidoglycan|peptidoglycan]] mesh so the armor never peels loose.\n\nHow do you build machines in an outer wall with zero ATP out there? Unfolded polypeptides threaded through Sec channels ride periplasmic Skp and SurA chaperones up to the BAM barrel-folding loom, which rolls fresh porins into the membrane while neighboring LptD–LptE gates lay [[LPS|lps]] tiles onto the roof.',
        blueprint: {
          role: 'Passive nutrient sieving, wall tethering, and outer-membrane biogenesis hub',
          arrivesFrom: 'Extracellular [[glucose|glucose]]/[[amino acids|amino-acid]] and Sec-exported unfolded [[proteins|protein]] + [[LPS|lps]] from periplasm',
          inside: 'OmpF 16-strand β-barrel trimers sieve solutes; OmpA anchors to [[peptidoglycan|peptidoglycan]]; BAM folds β-barrels; LptDE inserts LPS',
          deliversTo: 'Periplasmic nutrients for [[inner-membrane|plasma-membrane]] importers and fresh outer-membrane armor',
          loop: 'High gut osmolarity swaps wider OmpF for narrower OmpC porins to throttle toxin entry'
        },
        scientific:
          'High-density outer-membrane β-barrel proteome (~50% of outer-membrane mass): trimeric OmpF (PDB 2OMF, 16-stranded barrels, ~7 × 11 Å constriction, ~10⁵ copies/cell) mediates passive Fickian diffusion of hydrophilic solutes <600 Da; monomeric 8-stranded OmpA (PDB 1BXW) binds peptidoglycan non-covalently via its C-terminal periplasmic domain; heteropentameric BamABCDE (PDB 5D0O) catalyzes ATP-independent lateral budding of β-barrels delivered by SurA (1M5Y)/Skp (1SG2); plug-and-barrel LptD–LptE (PDB 4Q35, 26-stranded β-barrel) inserts LPS into the outer leaflet.',
        from: [
          { nodeId: 'glucose', label: 'Extracellular medium', cargo: 'Sugars, ions & amino acids' },
          { nodeId: 'plasma-membrane', label: 'Sec translocon', cargo: 'Unfolded β-barrels & LPS' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Periplasm', cargo: 'Filtered nutrients' },
          { nodeId: 'lps', label: 'Outer LPS leaflet', cargo: 'Inserted LPS & barrels' },
          { nodeId: 'real-pole', label: 'Chemoreceptors', cargo: 'Attractant ligands' }
        ]
      },
      es: {
        subtitle: 'Esclusas y astilleros de la cubierta exterior',
        simple:
          'Apretados barriles proteicos salpican la membrana externa: los tamices OmpF dejan entrar azúcares y aminoácidos pequeños, mientras los talleres BAM y LptDE construyen y reparan el propio casco.',
        story:
          'Un blindaje totalmente hermético mataría de hambre a su tripulación en segundos, así que E. coli tapiza su membrana externa con [[porinas OmpF|porin]] de tres cañones cuyos ojales acuosos dejan pasar [[glucosa|glucose]], [[aminoácidos|amino-acid]] e iones menores de 600 daltons hacia el foso periplásmico. A su lado, los barriles OmpA atornillan la cubierta externa contra la red de [[peptidoglicano|peptidoglycan]] para que el casco jamás se deslamine.\n\n¿Y cómo se montan máquinas en una muralla exterior donde no hay ni gota de ATP? Los polipéptidos exportados por Sec cruzan el periplasma escoltados por las chaperonas Skp y SurA hasta el telar BAM, que enrolla e incrusta barriles nuevos mientras su vecino LptD–LptE pavimenta el tejado con [[LPS|lps]].',
        blueprint: {
          role: 'Tamizado pasivo de nutrientes, anclaje parietal y biogénesis de membrana externa',
          arrivesFrom: '[[Glucosa|glucose]]/[[aminoácidos|amino-acid]] externos, [[proteínas|protein]] desplegadas vía Sec y [[LPS|lps]] periplásmico',
          inside: 'Trímeros OmpF filtran solutos; OmpA ancla al [[peptidoglicano|peptidoglycan]]; BAM pliega barriles β; LptDE inserta LPS',
          deliversTo: 'Nutrientes periplásmicos para permeasas de la [[membrana interna|plasma-membrane]] y renovación del casco externo',
          loop: 'La alta osmolaridad intestinal sustituye OmpF por OmpC de poro más estrecho frente a sales biliares'
        },
        scientific:
          'Proteoma de barriles β de alta densidad (~50% de la masa de membrana externa): OmpF trimérica (PDB 2OMF, barriles de 16 hebras, estrechamiento de ~7 × 11 Å, ~10⁵ copias/célula) permite difusión pasiva <600 Da; OmpA de 8 hebras (PDB 1BXW) enlaza el peptidoglicano; el complejo BamABCDE (PDB 5D0O) inserta lateralmente nuevos barriles β asistido por SurA (1M5Y) y Skp (1SG2) sin gasto local de ATP; y el complejo LptD–LptE de 26 hebras (PDB 4Q35) transfiere LPS a la hoja exterior.',
        from: [
          { nodeId: 'glucose', label: 'Medio externo', cargo: 'Azúcares, iones y aminoácidos' },
          { nodeId: 'plasma-membrane', label: 'Translocón Sec', cargo: 'Barriles β y LPS' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Periplasma', cargo: 'Nutrientes filtrados' },
          { nodeId: 'lps', label: 'Hemicapa de LPS', cargo: 'LPS y porinas nuevas' },
          { nodeId: 'real-pole', label: 'Quimiorreceptores', cargo: 'Atrayentes químicos' }
        ]
      }
    },

    pump: {
      en: {
        subtitle: 'The Trans-Envelope Bilge Cannon',
        simple:
          'Spanning all three layers of the envelope, AcrAB–TolC uses incoming proton power to vacuum up antibiotics and bile salts from the wall and fire them straight out of the cell.',
        story:
          'Every time an antibiotic molecule or gut detergent squeezes past a [[porin|porin]] into the periplasm or wedges into the [[plasma membrane|plasma-membrane]], it walks straight into a 33-nanometre ambush. Anchored in the inner membrane, the three-chambered [[AcrB pump|acrab-tolc]] scoops lipophilic poisons directly out of the membrane leaflet before they ever touch the cytosol.\n\nProtons cascading back inward from the periplasm—pumped out moments earlier by the [[respiratory chain|complex-i-ecoli]]—crank AcrB through a relentless three-stroke peristaltic squeeze. That mechanical push rams the captured drug up a six-piece AcrA collar and blasts it clean through the TolC chimney past the [[LPS|lps]] shield into open water.',
        blueprint: {
          role: 'Tripartite proton-driven multidrug and bile-salt efflux system ([[AcrAB–TolC|acrab-tolc]])',
          arrivesFrom: 'Antibiotics/bile salts in periplasm and [[plasma membrane|plasma-membrane]] plus periplasmic H⁺ from [[respiratory chain|complex-i-ecoli]]',
          inside: 'AcrB₃ inner-membrane RND antiporter rotates Loose → Tight → Open to drive substrates up AcrA₆ into outer-membrane TolC₃',
          deliversTo: 'Xenobiotics expelled past [[LPS|lps]] into extracellular space and spent H⁺ returned to [[cytosol|cytosol]]',
          loop: 'Intracellular MarA/SoxS/Rob sensors detect toxic stress and upregulate AcrAB–TolC while repressing OmpF porins'
        },
        scientific:
          '33-nm trans-envelope RND efflux complex AcrB₃–AcrA₆–TolC₃ (PDB 5O66, ~770 kDa; ~24–500 assembled copies/cell). AcrB captures amphiphilic/lipophilic compounds (tetracyclines, chloramphenicol, fluoroquinolones, β-lactams, novobiocin, bile acids) from the periplasmic cleft and outer leaflet of the inner membrane, coupling inward H⁺ flux down Δp (~1–2 H⁺/drug) to peristaltic extrusion through the sealed AcrA hexameric funnel and 140-Å TolC α-helical/β-barrel duct.',
        from: [
          { nodeId: 'peptidoglycan', label: 'Periplasm', cargo: 'H⁺ & infiltrated drugs' },
          { nodeId: 'plasma-membrane', label: 'Inner membrane', cargo: 'Partitioned toxins & bile' },
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain', cargo: 'Proton-motive force' }
        ],
        to: [
          { nodeId: 'lps', label: 'Exterior beyond LPS', cargo: 'Expelled antibiotics' },
          { nodeId: 'cytosol', label: 'Cytoplasm', cargo: 'Imported H⁺' }
        ]
      },
      es: {
        subtitle: 'El cañón de achique transenvoltura',
        simple:
          'Atravesando de lado a lado las tres capas del casco, la bomba AcrAB–TolC usa la entrada de protones para aspirar antibióticos y sales biliares y dispararlos fuera de la bacteria.',
        story:
          'Cada vez que un antibiótico o detergente intestinal logra colarse por una [[porina|porin]] al periplasma o se hunde en la [[membrana plasmática|plasma-membrane]], cae de lleno en una emboscada de 33 nanómetros. Apostado en la membrana interna, el rotor de tres cámaras de [[AcrAB–TolC|acrab-tolc]] pesca los venenos grasos directamente de la bicapa antes de que lleguen siquiera a rozar el citosol.\n\nLos protones que reingresan desde el periplasma —bombeados instantes antes por el [[Complejo I|complex-i-ecoli]]— accionan un apretón peristáltico de tres tiempos en AcrB. Ese empuje embute la droga por el embudo hexamérico AcrA y la escupe a través de la chimenea TolC más allá del escudo de [[LPS|lps]], devolviéndola al exterior.',
        blueprint: {
          role: 'Cañón tripartito de eflujo multirresistente impulsado por protones ([[AcrAB–TolC|acrab-tolc]])',
          arrivesFrom: 'Antibióticos/sales biliares en periplasma y [[membrana plasmática|plasma-membrane]] más H⁺ del [[Complejo I|complex-i-ecoli]]',
          inside: 'El antiporter RND AcrB₃ rota Acceso → Unión → Extrusión empujando sustratos por AcrA₆ y el canal externo TolC₃',
          deliversTo: 'Tóxicos expulsados fuera de la barrera de [[LPS|lps]] y protones devueltos al [[citosol|cytosol]]',
          loop: 'Los reguladores MarA/SoxS/Rob detectan tóxicos, multiplican bombas AcrAB–TolC y cierran porinas OmpF'
        },
        scientific:
          'Complejo tripartito RND transenvoltura AcrB₃–AcrA₆–TolC₃ de 33 nm (PDB 5O66, ~770 kDa). El homotrímero AcrB recoge sustratos anfifílicos (fluoroquinolonas, β-lactámicos, macrólidos, tetraciclinas, cloranfenicol, sales biliares) desde la interfaz membrana interna/periplasma y acopla la entrada de H⁺ a favor de Δp a la extrusión peristáltica por el conducto sellado AcrA₆–TolC₃ (140 Å de túnel α/β).',
        from: [
          { nodeId: 'peptidoglycan', label: 'Periplasma', cargo: 'H⁺ y fármacos infiltrados' },
          { nodeId: 'plasma-membrane', label: 'Membrana interna', cargo: 'Tóxicos y sales biliares' },
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria', cargo: 'Fuerza protón-motriz' }
        ],
        to: [
          { nodeId: 'lps', label: 'Exterior tras el LPS', cargo: 'Antibióticos expulsados' },
          { nodeId: 'cytosol', label: 'Citoplasma', cargo: 'H⁺ reingresados' }
        ]
      }
    },

    pg: {
      en: {
        subtitle: 'The Chainmail Corset & Proton Moat',
        simple:
          'Between the two membranes lies a narrow gel moat holding a single woven bag of peptidoglycan—stopping the cell from bursting while storing the pumped-out protons that run its motors.',
        story:
          'Packed between outer and inner membranes, the 21-nanometre periplasm works double duty as pressure brace and battery tank. Lipid II wall bricks flipped out across the [[plasma membrane|plasma-membrane]] get stitched along MreB-guided tracks into one unbroken [[peptidoglycan|peptidoglycan]] chainmail sack, riveted to the outer hull by a forest of Braun’s lipoprotein pillars so multi-atmosphere turgor cannot blow the rod apart.\n\nMeanwhile, the gel around that mesh swarms with chaperone escorts (Skp, SurA), sugar-catching MalE scouts, and a dense cloud of protons ejected by the [[respiratory chain|complex-i-ecoli]]. Every [[ATP synthase|atp-synthase-ecoli]], [[flagellar motor|real-motor]], and AcrAB–TolC cannon taps this acidic moat to do its heavy lifting.',
        blueprint: {
          role: 'Osmotic load-bearing sacculus, chaperone transit zone, and periplasmic H⁺ reservoir',
          arrivesFrom: 'Lipid II murein precursors from [[cytosol|cytosol]], H⁺ from [[respiratory chain|complex-i-ecoli]], and solutes from [[porins|porin]]',
          inside: 'Monolayer [[peptidoglycan|peptidoglycan]] mesh tethered by Lpp amidst MalE/Skp/SurA periplasmic [[proteins|protein]] and accumulated H⁺',
          deliversTo: 'Proton-motive force to [[ATP synthase|atp-synthase-ecoli]], [[flagellar motors|real-motor]], and [[AcrAB–TolC|acrab-tolc]], plus folded barrels to [[porins|porin]]',
          loop: 'MreB filaments beneath the inner membrane steer PBP/RodA wall insertion to maintain uniform rod diameter'
        },
        scientific:
          'Periplasmic compartment (~21 nm width; oxidizing environment with DsbA/DsbB disulfide bond formation) housing a single-layered ~2.5–4 nm peptidoglycan sacculus (GlcNAc–MurNAc glycan hoops oriented circumferentially around the rod axis, cross-linked ~30–40% via L-Ala–D-Glu–mDAP–D-Ala peptides). Populated by periplasmic binding proteins (e.g. MalE PDB 1ANF at millimolar local levels), outer-membrane chaperones SurA (1M5Y) and Skp (1SG2), ~5 × 10⁵ Lpp trimers, and the electrochemically positive proton pool (pH ~0.5–1.0 units below cytoplasm) sustaining Δp.',
        from: [
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain', cargo: 'Pumped H⁺' },
          { nodeId: 'plasma-membrane', label: 'Inner membrane & Sec', cargo: 'Lipid II & periplasmic proteins' },
          { nodeId: 'porin', label: 'Outer-membrane porins', cargo: 'Small nutrients' }
        ],
        to: [
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'H⁺ influx' },
          { nodeId: 'real-motor', label: 'Flagellar motors', cargo: 'H⁺ torque & stator anchor' },
          { nodeId: 'acrab-tolc', label: 'AcrAB–TolC pump', cargo: 'H⁺ antiport drive' }
        ]
      },
      es: {
        subtitle: 'El corsé de malla y el foso de protones',
        simple:
          'Entre las dos membranas se extiende un estrecho foso gelatinoso que aloja una red continua de peptidoglicano: impide que la bacteria estalle y almacena los protones que mueven sus motores.',
        story:
          'Comprimido entre ambas membranas, el periplasma de 21 nanómetros cumple doble misión como faja de presión y acumulador eléctrico. Los ladrillos de Lípido II volteados desde la [[membrana plasmática|plasma-membrane]] se tejen siguiendo raíles de MreB en un único saco de [[peptidoglicano|peptidoglycan]], remachado al techo externo por cientos de miles de tirantes de lipoproteína de Braun para contener varias atmósferas de empuje osmótico.\n\nAlrededor de esa malla bullen chaperonas mensajeras (Skp, SurA), cazadores de azúcares MalE y una densa nube de protones expulsados por el [[Complejo I|complex-i-ecoli]]. Cada [[ATP sintasa|atp-synthase-ecoli]], cada [[motor flagelar|real-motor]] y cada cañón AcrAB–TolC bebe de este foso ácido para ejecutar su trabajo mecánico.',
        blueprint: {
          role: 'Sáculo resistente a la turgencia, corredor de chaperonas y depósito periplásmico de H⁺',
          arrivesFrom: 'Precursores Lípido II del [[citosol|cytosol]], H⁺ del [[Complejo I|complex-i-ecoli]] y solutos vía [[porinas|porin]]',
          inside: 'Monocapa de [[peptidoglicano|peptidoglycan]] sujeta por Lpp entre [[proteínas|protein]] periplásmicas (MalE, Skp, SurA) y protones acumulados',
          deliversTo: 'Fuerza protón-motriz hacia [[ATP sintasa|atp-synthase-ecoli]], [[motores flagelares|real-motor]] y [[AcrAB–TolC|acrab-tolc]]',
          loop: 'Los filamentos internos MreB guían dónde coser nueva pared para conservar la geometría cilíndrica del bacilo'
        },
        scientific:
          'Compartimento periplásmico (~21 nm de espesor; medio oxidante con sistema DsbA/DsbB de puentes disulfuro) que contiene el sáculo monocapa de peptidoglicano (~2,5–4 nm; cadenas circunferenciales GlcNAc–MurNAc reticuladas en un ~30–40% por tetrapéptidos con meso-DAP). Alberga proteínas periplásmicas de unión a soluto (MalE, PDB 1ANF), chaperonas SurA (1M5Y) y Skp (1SG2), ~5 × 10⁵ trímeros Lpp y el reservorio electroquímico de H⁺ que sostiene la fuerza protón-motriz.',
        from: [
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria', cargo: 'H⁺ bombeados' },
          { nodeId: 'plasma-membrane', label: 'Membrana interna y Sec', cargo: 'Lípido II y proteínas' },
          { nodeId: 'porin', label: 'Porinas externas', cargo: 'Nutrientes filtrados' }
        ],
        to: [
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'Retorno de H⁺' },
          { nodeId: 'real-motor', label: 'Motores flagelares', cargo: 'Par de H⁺ y anclaje MotB' },
          { nodeId: 'acrab-tolc', label: 'Bomba AcrAB–TolC', cargo: 'Impulso H⁺' }
        ]
      }
    },

    im: {
      en: {
        subtitle: 'The Powerhouse Skin That Replaces Mitochondria',
        simple:
          'Because bacteria have no internal organelles, this inner phospholipid membrane does it all—holding a 160-millivolt proton charge while running respiration, ATP synthesis, nutrient import, and swimming motors.',
        story:
          'Eukaryotes lock their power plants inside mitochondria; E. coli turns its own skin into one continuous 360-degree dynamo. Woven from fluid phospholipids synthesized on its cytoplasmic face, this 7-nanometre barrier seals the cytosol tight enough to hold protons back at 160 millivolts—an electric field of twenty million volts per metre across so thin a film.\n\nNearly half its surface area is solid machinery: [[Complex I|complex-i-ecoli]] and oxidases pump protons out into the [[periplasm|peptidoglycan]], [[ATP synthases|atp-synthase-ecoli]] and [[flagellar motors|real-motor]] harvest them rushing back in, [[chemoreceptors|real-pole]] keep watch at the bow, and sugar permeases feed hungry enzymes inside.',
        blueprint: {
          role: 'Selective cytoplasmic boundary and chemiosmotic power-plant membrane',
          arrivesFrom: 'Cytosolic [[phospholipid|phospholipid]] synthesis, nascent membrane [[proteins|protein]] from [[ribosomes|ribosome-ecoli]], and filtered periplasmic solutes',
          inside: '7-nm PE/PG/cardiolipin bilayer maintaining Δp ≈ −160 mV across embedded ETC, [[ATP synthase|atp-synthase-ecoli]], permeases, and [[motors|real-motor]]',
          deliversTo: 'Imported nutrients and ATP to [[cytosol|cytosol]], pumped H⁺ and exported proteins to [[periplasm|peptidoglycan]]',
          loop: 'Proton pumping by respiration balances continuous H⁺ consumption by ATP synthesis, active transport, and motility'
        },
        scientific:
          'Symmetric ~7 nm cytoplasmic phospholipid bilayer (~75% zwitterionic phosphatidylethanolamine, ~20% anionic phosphatidylglycerol, ~5% cardiolipin concentrated at cell poles; ~50–60% protein by mass) insulating the cytoplasm against passive ion leak. Sustains a transmembrane proton-motive force Δp = Δψ − (2.3RT/F)ΔpH ≈ −140 to −180 mV (~2 × 10⁷ V/m field strength), functionally homologous to the mitochondrial inner cristae membrane.',
        from: [
          { nodeId: 'cytosol', label: 'Cytoplasm', cargo: 'NADH, ADP & phospholipids' },
          { nodeId: 'peptidoglycan', label: 'Periplasm', cargo: 'Filtered solutes & H⁺' },
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'Co-translated membrane proteins' }
        ],
        to: [
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain', cargo: 'Quinone pool & bilayer' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'Δp proton voltage' },
          { nodeId: 'real-motor', label: 'Flagellar motors', cargo: 'MS-ring & stator seat' }
        ]
      },
      es: {
        subtitle: 'La piel eléctrica que suple a las mitocondrias',
        simple:
          'Al no tener orgánulos internos, esta membrana interna de fosfolípidos lo hace todo: retiene una carga de 160 milivoltios mientras ejecuta la respiración, fabrica ATP, importa comida y mueve los flagelos.',
        story:
          'Las células eucariotas encierran sus centrales eléctricas en mitocondrias; E. coli convierte su propia piel interna en una dinamo continua de 360 grados. Tejida con fosfolípidos fluidos ensamblados en su cara interior, esta película de 7 nanómetros sella el citosol lo bastante bien para sostener 160 milivoltios de diferencia de potencial: un campo eléctrico digno de un relámpago concentrado en unos pocos nanómetros.\n\nMás de la mitad de su superficie es maquinaria pura: el [[Complejo I|complex-i-ecoli]] y las oxidasas bombean protones al [[periplasma|peptidoglycan]], la [[ATP sintasa|atp-synthase-ecoli]] y los [[motores flagelares|real-motor]] aprovechan su regreso, la [[matriz polar|real-pole]] vigila en proa y las permeasas meten combustible al taller.',
        blueprint: {
          role: 'Frontera selectiva citoplasmática y membrana bioenergética generadora de potencial',
          arrivesFrom: 'Síntesis citosólica de [[fosfolípidos|phospholipid]], [[proteínas|protein]] integrales de [[ribosomas|ribosome-ecoli]] y solutos periplásmicos',
          inside: 'Bicapa de 7 nm (PE/PG/cardiolipina) que sostiene Δp ≈ −160 mV entre cadena respiratoria, [[ATP sintasa|atp-synthase-ecoli]], permeasas y [[motores|real-motor]]',
          deliversTo: 'Nutrientes y ATP al [[citosol|cytosol]], H⁺ bombeados y proteínas secretadas hacia el [[periplasma|peptidoglycan]]',
          loop: 'El bombeo respiratorio de H⁺ equilibra el consumo continuo de protones por síntesis de ATP, transporte y nado'
        },
        scientific:
          'Bicapa fosfolipídica citoplasmática simétrica de ~7 nm (~75% fosfatidiletanolamina, ~20% fosfatidilglicerol, ~5% cardiolipina enriquecida en los polos; ~50–60% de proteína en peso) impermeable al paso libre de iones. Mantiene una fuerza protón-motriz transmembrana Δp = Δψ − (2,3RT/F)ΔpH ≈ −140 a −180 mV (campo eléctrico ~2 × 10⁷ V/m), equivalente evolutivo y funcional de la membrana interna mitocondrial.',
        from: [
          { nodeId: 'cytosol', label: 'Citoplasma', cargo: 'NADH, ADP y lípidos' },
          { nodeId: 'peptidoglycan', label: 'Periplasma', cargo: 'Solutos filtrados y H⁺' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Proteínas integrales' }
        ],
        to: [
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria', cargo: 'Poza de quinonas' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'Voltaje protónico Δp' },
          { nodeId: 'real-motor', label: 'Motores flagelares', cargo: 'Asiento MS y estatores' }
        ]
      }
    },

    etc: {
      en: {
        subtitle: 'The Proton-Pumping Electron Bucket Brigade',
        simple:
          'Using electrons stripped from food and oxygen diffusing in from outside, these inner-membrane complexes pump protons out into the periplasm to charge the bacterium’s main battery.',
        story:
          'Every glucose broken down in the cytosol hands high-voltage electrons onto NADH couriers that sprint to the upright arm of [[Complex I|complex-i-ecoli]]. Two electrons leap down its nine iron–sulfur stepping stones onto a mobile ubiquinone shuttle inside the [[plasma membrane|plasma-membrane]], triggering mechanical piston strokes that heave four protons out into the [[periplasm|peptidoglycan]].\n\nLoaded ubiquinol glides millimetres—in molecular terms—through the lipid sea to cytochrome bo₃ oxidase, where oxygen drifted in from outside accepts those spent electrons to become harmless water while four more protons fly outward. Eight protons banked per NADH: that pressurized acid moat immediately drives [[ATP synthases|atp-synthase-ecoli]] and [[flagellar motors|real-motor]] around the entire hull.',
        blueprint: {
          role: 'Modular respiratory electron-transport chain and vectorial H⁺ generator',
          arrivesFrom: 'NADH from [[cytosol|cytosol]] (glycolysis/TCA) and dissolved O₂ diffusing across [[outer membrane|lps]] and [[inner membrane|plasma-membrane]]',
          inside: '[[Complex I|complex-i-ecoli]] (NuoA–N, 4 H⁺/2 e⁻) reduces ubiquinone-8; cytochrome bo₃ quinol oxidase (4 H⁺/2 e⁻) reduces ½ O₂ → [[water|water]]',
          deliversTo: 'Periplasmic H⁺ gradient in [[wall/periplasm|peptidoglycan]] powering [[ATP synthase|atp-synthase-ecoli]], [[flagella|real-motor]], and [[efflux pumps|acrab-tolc]], plus NAD⁺ back to cytosol',
          loop: 'Low O₂ swaps high-output bo₃ oxidase for ultra-high-affinity bd oxidase or anaerobic nitrate/fumarate reductases'
        },
        scientific:
          'Branched modular E. coli aerobic respiratory chain in the inner membrane: NADH dehydrogenase I (NuoA–N, PDB 7NYR; 4 H⁺/2 e⁻) and non-coupling NDH-2 feed the membrane ubiquinone-8 pool alongside succinate dehydrogenase, passing electrons directly—without a cytochrome bc₁/cytochrome c stage—to terminal cytochrome bo₃ ubiquinol oxidase (CyoABCD, PDB 1FFT; heme b–heme o₃–CuB binuclear center; 4 H⁺/2 e⁻ translocated/scalar, Km(O₂) ~0.2 µM), yielding 8 H⁺/NADH and regenerating cytosolic NAD⁺.',
        from: [
          { nodeId: 'cytosol', label: 'Glycolysis & TCA', cargo: 'NADH electrons' },
          { nodeId: 'lps', label: 'Across envelope', cargo: 'Diffusing O₂' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Periplasm', cargo: '8 H⁺ per NADH' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'Proton-motive force' },
          { nodeId: 'water', label: 'Metabolic water', cargo: 'H₂O + NAD⁺' }
        ]
      },
      es: {
        subtitle: 'La brigada de electrones que carga el casco',
        simple:
          'Con los electrones extraídos de la comida y el oxígeno que entra por difusión, estos complejos de la membrana interna bombean protones al periplasma para cargar la batería principal de la célula.',
        story:
          'Cada azúcar partido en el citosol carga electrones de alto voltaje en mensajeros NADH que acuden directos al brazo vertical del [[Complejo I|complex-i-ecoli]]. Dos electrones saltan por sus nueve escalones de hierro-azufre hasta una ubiquinona móvil en la [[membrana plasmática|plasma-membrane]], disparando un golpe de pistón que expulsa cuatro protones hacia el [[periplasma|peptidoglycan]].\n\nEl ubiquinol cargado navega por el mar lipídico hasta la oxidasa citocromo bo₃, donde el oxígeno llegado de fuera recoge los electrones gastados para formar agua limpia mientras otros cuatro protones salen despedidos. Ocho protones ingresados por cada NADH: ese foso presurizado pone a girar al instante las [[ATP sintasas|atp-synthase-ecoli]] y los [[motores flagelares|real-motor]] de todo el casco.',
        blueprint: {
          role: 'Cadena respiratoria modular de transporte electrónico y bombeo vectorial de H⁺',
          arrivesFrom: 'NADH del [[citosol|cytosol]] (glucólisis/TCA) y O₂ difundido a través del [[LPS|lps]] y la [[membrana interna|plasma-membrane]]',
          inside: 'El [[Complejo I|complex-i-ecoli]] (4 H⁺/2 e⁻) reduce ubiquinona-8 y la oxidasa citocromo bo₃ (4 H⁺/2 e⁻) reduce ½ O₂ → [[agua|water]]',
          deliversTo: 'Gradiente periplásmico de H⁺ en el [[periplasma|peptidoglycan]] para [[ATP sintasa|atp-synthase-ecoli]], [[flagelos|real-motor]] y [[AcrAB–TolC|acrab-tolc]], más NAD⁺ al citosol',
          loop: 'Si cae el O₂, reemplaza bo₃ por la oxidasa bd de altísima afinidad o reductasas anaerobias de nitrato y fumarato'
        },
        scientific:
          'Cadena respiratoria aerobia modular ramificada de E. coli: la NADH deshidrogenasa I (NuoA–N, PDB 7NYR; 4 H⁺/2 e⁻) transfiere electrones a la poza membranosa de ubiquinona-8, que alimenta directamente —sin complejo bc₁ ni citocromo c soluble— a la ubiquinol oxidasa terminal citocromo bo₃ (CyoABCD, PDB 1FFT; centro binuclear hemo o₃–CuB; 4 H⁺/2 e⁻ equivalentes, Km(O₂) ~0,2 µM), rindiendo un total de 8 H⁺/NADH y regenerando NAD⁺ citosólico.',
        from: [
          { nodeId: 'cytosol', label: 'Glucólisis y TCA', cargo: 'Electrones en NADH' },
          { nodeId: 'lps', label: 'A través del casco', cargo: 'O₂ por difusión' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Periplasma', cargo: '8 H⁺ por NADH' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'Fuerza protón-motriz' },
          { nodeId: 'water', label: 'Agua metabólica', cargo: 'H₂O + NAD⁺' }
        ]
      }
    },

    atps: {
      en: {
        subtitle: 'The Rotary Proton Mill',
        simple:
          'Protons rushing back in from the periplasm spin this molecular turbine like a waterwheel, squeezing spent ADP and phosphate back together into fresh ATP.',
        story:
          'Out in the [[periplasm|peptidoglycan]], protons banked by the [[respiratory chain|complex-i-ecoli]] press impatiently against the inner membrane, looking for a chute home. Dozens of golden [[ATP synthase turbines|atp-synthase-ecoli]] offer the deal: three to four protons ride the 10-spoke c carousel down into the cytosol, spinning the central γ–ε camshaft inside the stationary α₃β₃ crown.\n\nEvery 120-degree click of that lopsided cam crushes one spent ADP against inorganic phosphate, popping a freshly charged ATP molecule into the cytoplasm. Within moments, nearby [[RNA polymerases|rnap-ecoli]], [[ribosomes|ribosome-ecoli]], and replisomes snap up that fuel and toss spent ADP right back to the mill.',
        blueprint: {
          role: 'Reversible chemiosmotic rotary ATP generator ([[E. coli F₁F₀ ATP synthase|atp-synthase-ecoli]])',
          arrivesFrom: 'Periplasmic H⁺ from [[respiratory chain|complex-i-ecoli]] via [[periplasm|peptidoglycan]], plus spent ADP + [[phosphate|phosphate]] from [[cytosol|cytosol]]',
          inside: 'F₀ ab₂c₁₀ membrane proton turbine spins central γ–ε stalk inside b₂δ-clamped α₃β₃ catalytic hexamer',
          deliversTo: '3 ATP per revolution released into [[cytosol|cytosol]] for [[ribosomes|ribosome-ecoli]], [[RNA polymerase|rnap-ecoli]], [[replication fork|real-fork]], and SecA',
          loop: 'Under anaerobic fermentation, reverses direction to hydrolyze glycolytic ATP and pump H⁺ out to preserve membrane voltage'
        },
        scientific:
          'Escherichia coli F₁F₀ ATP synthase (PDB 6OQR, ~530 kDa; ~3,000 copies/cell). Proton translocation down Δp (~160 mV) through offset periplasmic and cytoplasmic half-channels of subunit a rotates the decameric c₁₀ ring (Asp61 H⁺ carrier) at ~100–270 Hz, driving rotary conformational catalysis across the three β-subunit active sites (Open → Loose → Tight; 10 H⁺ / 3 ATP = 3.33 H⁺/ATP; ~300 ATP synthesized s⁻¹ enzyme⁻¹).',
        from: [
          { nodeId: 'peptidoglycan', label: 'Periplasmic H⁺ pool', cargo: '10 H⁺ per turn' },
          { nodeId: 'cytosol', label: 'Cytoplasm', cargo: 'Spent ADP + Pi' }
        ],
        to: [
          { nodeId: 'rnap-ecoli', label: 'RNA polymerase', cargo: 'ATP / NTP energy' },
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'ATP / GTP recharge' },
          { nodeId: 'real-fork', label: 'Replication fork', cargo: 'ATP for DnaB & clamp' },
          { nodeId: 'cytosol', label: 'Cytoplasmic enzymes', cargo: 'Charged ATP' }
        ]
      },
      es: {
        subtitle: 'El molino rotatorio de protones',
        simple:
          'Los protones que regresan en tromba desde el periplasma hacen girar esta turbina molecular como una noria hidráulica, prensando ADP gastado y fosfato para fabricar ATP nuevo.',
        story:
          'Afuera, en el [[periplasma|peptidoglycan]], los protones acumulados por el [[Complejo I|complex-i-ecoli]] empujan contra la membrana interna buscando un conducto de vuelta a casa. Decenas de turbinas doradas de [[ATP sintasa|atp-synthase-ecoli]] les abren paso con peaje: los protones hacen girar el carrusel de diez radios c₁₀ rumbo al citosol, arrastrando con él el árbol de levas γ–ε dentro del cabezal fijo α₃β₃.\n\nCada tercio de vuelta aplasta un ADP descargado contra un fosfato hasta escupir una molécula flamante de ATP al citoplasma. Al instante, las [[ARN polimerasas|rnap-ecoli]], los [[ribosomas|ribosome-ecoli]] y la horquilla de replicación devoran esa carga y devuelven el ADP gastado al molino.',
        blueprint: {
          role: 'Generador rotatorio quimiosmótico reversible de ATP ([[ATP sintasa F₁F₀ de E. coli|atp-synthase-ecoli]])',
          arrivesFrom: 'H⁺ periplásmicos del [[Complejo I|complex-i-ecoli]] desde el [[periplasma|peptidoglycan]], más ADP + [[fosfato|phosphate]] del [[citosol|cytosol]]',
          inside: 'El rotor membranoso F₀ ab₂c₁₀ gira el eje γ–ε dentro del hexámero catalítico α₃β₃ sujeto por b₂δ',
          deliversTo: '3 ATP por revolución al [[citosol|cytosol]] para [[ribosomas|ribosome-ecoli]], [[ARN polimerasa|rnap-ecoli]], [[replisoma|real-fork]] y SecA',
          loop: 'En fermentación sin O₂ invierte la marcha: gasta ATP glucolítico para bombear H⁺ afuera y sostener el potencial de membrana'
        },
        scientific:
          'ATP sintasa F₁F₀ de Escherichia coli (PDB 6OQR, ~530 kDa; ~3.000 copias/célula). El flujo de H⁺ a favor de Δp (~160 mV) por los semicanales de la subunidad a rota el anillo c₁₀ (portador Asp61) a ~100–270 Hz, induciendo catálisis rotatoria secuencial en las tres subunidades β (Abierta → Laxa → Cerrada; 10 H⁺ / 3 ATP = 3,33 H⁺/ATP; ~300 ATP·s⁻¹ por complejo).',
        from: [
          { nodeId: 'peptidoglycan', label: 'Reserva periplásmica', cargo: '10 H⁺ por vuelta' },
          { nodeId: 'cytosol', label: 'Citoplasma', cargo: 'ADP gastado + Pi' }
        ],
        to: [
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa', cargo: 'Energía ATP / NTP' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Recarga ATP / GTP' },
          { nodeId: 'real-fork', label: 'Horquilla replicativa', cargo: 'ATP para DnaB' },
          { nodeId: 'cytosol', label: 'Metabolismo central', cargo: 'ATP cargado' }
        ]
      }
    },

    transport: {
      en: {
        subtitle: 'Cargo Gates, Protein Threaders & Emergency Valves',
        simple:
          'Embedded across the inner membrane, specialist pumps pull in sugars and amino acids, Sec motors thread newly built proteins out to the wall, and safety valves vent water if the cell swells.',
        story:
          'Once small nutrients slip through outer [[porins|porin]] into the periplasm, inner-membrane gatekeepers sort the haul. Symporters like LacY ride incoming protons to drag sugars uphill, PTS gates phosphorylate [[glucose|glucose]] the instant it crosses so it cannot leak back out, and ABC importers burn ATP to haul in amino acids for hungry [[ribosomes|ribosome-ecoli]].\n\nTraffic runs outward too: the SecYEG–SecA motor burns ATP from [[ATP synthase|atp-synthase-ecoli]] to thread roughly a third of all newly minted polypeptides out into the [[periplasm|peptidoglycan]] to build the hull. And if sudden rain dilutes the outside world? Mechanosensitive MscS valves snap open in microseconds as membrane tension spikes, dumping ions so osmotic shock never bursts the submarine.',
        blueprint: {
          role: 'Active nutrient uptake, Sec protein export, and mechanosensitive osmotic relief across [[inner membrane|plasma-membrane]]',
          arrivesFrom: 'Periplasmic [[glucose|glucose]]/[[amino acids|amino-acid]] via [[porins|porin]], plus nascent [[proteins|protein]] from [[ribosomes|ribosome-ecoli]] and cytosolic ATP',
          inside: 'LacY/GlpT/PTS/ABC permeases import solutes; SecYEG–SecA threads unfolded chains outward; MscS gates open under lateral tension',
          deliversTo: 'Imported sugars/amino acids to [[cytosol|cytosol]], exported proteins to [[periplasm|peptidoglycan]] and [[outer membrane|porin]], and emergency osmolyte vent',
          loop: 'PTS glucose import simultaneously dephosphorylates EIIA^Glc to regulate LacY and catabolite gene expression'
        },
        scientific:
          'Inner-membrane transport ensemble depicted with real crystal structures: MFS H⁺/lactose symporter LacY (PDB 1PV6, 12-TM alternating-access rocker-switch), glycerol-3-P/Pi antiporter GlpT (PDB 1PW4), glucose-specific PTS EIICBA phosphorylating incoming glucose to G6P via PEP, ATP-driven SecYEG–SecA protein translocase (PDB 3DIN, threading unfolded preproteins with N-terminal signal peptides at ~20–40 aa/ATP), and homoheptameric mechanosensitive channel MscS (PDB 2OAU, ~1 nS conductance opening at ~5–7 mN/m bilayer tension).',
        from: [
          { nodeId: 'porin', label: 'Outer-membrane porins', cargo: 'Glucose & amino acids' },
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'Unfolded preproteins' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP for SecA & ABCs' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Cytoplasmic metabolism', cargo: 'Imported glucose' },
          { nodeId: 'trna', label: 'tRNA charging', cargo: 'Imported amino acids' },
          { nodeId: 'peptidoglycan', label: 'Periplasm & BAM', cargo: 'Sec-threaded proteins' }
        ]
      },
      es: {
        subtitle: 'Esclusas de carga, enhebradores Sec y válvulas de alivio',
        simple:
          'Repartidos por la membrana interna, estos transportadores meten azúcares y aminoácidos, el motor Sec enhebra proteínas nuevas hacia el casco y las válvulas MscS alivian presión si entra demasiada agua.',
        story:
          'Cuando los nutrientes pequeños cruzan las [[porinas|porin]] externas hacia el periplasma, los aduaneros de la membrana interna clasifican el botín. Las permeasas como LacY aprovechan la caída de protones para arrastrar azúcares cuesta arriba, las puertas PTS le estampan un fosfato a la [[glucosa|glucose]] nada más entrar para que no pueda escapar y los importadores ABC gastan ATP en meter aminoácidos para los [[ribosomas|ribosome-ecoli]].\n\nEl tráfico también va hacia fuera: el motor SecYEG–SecA consume ATP de la [[ATP sintasa|atp-synthase-ecoli]] para enhebrar un tercio de todos los polipéptidos nuevos hacia el [[periplasma|peptidoglycan]]. ¿Y si un chaparrón diluye de golpe el medio externo? Las válvulas mecanosensibles MscS se abren en microsegundos al tensarse la membrana y sueltan lastre antes de que la célula reviente.',
        blueprint: {
          role: 'Captación activa de nutrientes, exportación proteica Sec y válvula osmótica en la [[membrana interna|plasma-membrane]]',
          arrivesFrom: '[[Glucosa|glucose]] y [[aminoácidos|amino-acid]] desde [[porinas|porin]], [[proteínas|protein]] nacientes de [[ribosomas|ribosome-ecoli]] y ATP',
          inside: 'Permeasas LacY/GlpT/PTS/ABC importan nutrientes; SecYEG–SecA exporta preproteínas; MscS alivia tensión osmótica',
          deliversTo: 'Azúcares y aminoácidos al [[citosol|cytosol]], proteínas secretadas al [[periplasma|peptidoglycan]] y [[membrana externa|porin]]',
          loop: 'La entrada de glucosa por PTS regula simultáneamente a LacY y prioriza el azúcar preferido (represión catabólica)'
        },
        scientific:
          'Conjunto de transporte de membrana interna con estructuras reales: simportador MFS H⁺/lactosa LacY (PDB 1PV6, 12 hélices TM con acceso alternante), antiportador glicerol-3-P/Pi GlpT (PDB 1PW4), sistema fosfotransferasa PTS de glucosa, translocón SecYEG–SecA dependiente de ATP (PDB 3DIN, exportación postraduccional/cotraduccional de preproteínas desplegadas) y canal mecanosensible homoheptamérico MscS (PDB 2OAU, conductancia ~1 nS activada a ~5–7 mN/m de tensión lateral).',
        from: [
          { nodeId: 'porin', label: 'Porinas externas', cargo: 'Glucosa y aminoácidos' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Preproteínas nacientes' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ATP para SecA y ABC' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Glucólisis citosólica', cargo: 'Glucosa importada' },
          { nodeId: 'trna', label: 'Carga de ARNt', cargo: 'Aminoácidos importados' },
          { nodeId: 'peptidoglycan', label: 'Periplasma y BAM', cargo: 'Proteínas exportadas' }
        ]
      }
    },

    flag: {
      en: {
        subtitle: 'Proton-Driven Rotary Outboards',
        simple:
          'Six or seven corkscrew propellers sprout around the hull, each spun at ~100 turns a second by a proton-powered rotary motor that bundles them to swim straight or reverses them to tumble.',
        story:
          'At two micrometres long, water feels as thick as warm honey—coasting stops in less than the width of an atom. To bore through that syrup, E. coli mounts half a dozen 45-nanometre [[rotary motors|real-motor]] around its sides, each anchored to [[peptidoglycan|peptidoglycan]] and fed periplasmic protons banked by the [[respiratory chain|complex-i-ecoli]].\n\nAs protons pour through eleven MotA/MotB stators per motor, curved hooks bend their spin rearward so long left-handed [[flagellar filaments|flagellum]] braid into one sleek corkscrew tail pushing the rod twenty body-lengths every second. One phosphorylated CheY shout from the [[chemoreceptor array|real-pole]] flips a C-ring clockwise, blowing the braid apart into a brief, chaotic tumble that points the bow down a fresher chemical trail.',
        blueprint: {
          role: 'Peritrichous proton-driven run-and-tumble propulsion system ([[flagellar motor|real-motor]] + [[filament|flagellum]])',
          arrivesFrom: 'Periplasmic H⁺ from [[respiratory chain|complex-i-ecoli]] in [[periplasm|peptidoglycan]] and CheY-P switch signals from [[chemoreceptor array|real-pole]]',
          inside: '11 MotAB stators drive MS/C-ring rotor (~100 Hz) through P/L bushings and universal hook into a 2.3-µm-pitch helical FliC whip',
          deliversTo: 'Counterclockwise bundled runs (~25–35 µm/s), clockwise reorienting tumbles (~0.1 s), and H⁺ return to [[cytosol|cytosol]]',
          loop: 'Swimming up an attractant gradient suppresses CheA at the polar array, extending runs toward richer nutrients'
        },
        scientific:
          'Peritrichous motility apparatus (~4–8 flagella/cell): ~45 nm trans-envelope basal body (C-ring FliGMN, MS-ring FliF, rod, P/L bushings FlgI/FlgH) driven by 11 peptidoglycan-bound MotA₅MotB₂ H⁺ channels (~1,200 H⁺/rev, ~100 Hz free-swimming speed, ~1,260 pN·nm stall torque), coupled via a 55-nm FlgE universal-joint hook to a 5–10 µm hollow helical flagellin (FliC) filament (20 nm diameter, left-handed normal polymorph, 0.4 µm helix diameter, 2.3 µm pitch) operating at low Reynolds number (Re ≈ 10⁻⁵).',
        from: [
          { nodeId: 'peptidoglycan', label: 'Periplasm & wall', cargo: 'H⁺ flux & MotB anchor' },
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain', cargo: 'Proton-motive force' },
          { nodeId: 'real-pole', label: 'Chemoreceptor array', cargo: 'CheY-P tumble signal' }
        ],
        to: [
          { nodeId: 'real-bacterium', label: 'Whole-cell thrust', cargo: '~30 µm/s chemotaxis' },
          { nodeId: 'cytosol', label: 'Cytoplasm', cargo: 'Returned H⁺' }
        ]
      },
      es: {
        subtitle: 'Motores fueraborda rotatorios de protones',
        simple:
          'Seis o siete hélices en sacacorchos brotan por los costados del casco, cada una girada unas cien veces por segundo por un motor eléctrico de protones que las trenza para avanzar o las invierte para virar.',
        story:
          'Para un cuerpo de dos micrómetros, el agua resulta tan espesa como miel tibia: si apagas el motor, te clavas en menos del ancho de un átomo. Para abrirse paso en ese jarabe, E. coli reparte media docena de [[motores rotatorios|real-motor]] de 45 nanómetros por el casco, calzados en el [[peptidoglicano|peptidoglycan]] y alimentados con los protones que el [[Complejo I|complex-i-ecoli]] acumula en el periplasma.\n\nAl caer los protones por once estatores MotA/MotB, los ganchos curvos doblan el giro hacia popa para que los largos [[filamentos flagelares|flagellum]] se trencen en una sola cola propulsora capaz de empujar la nave veinte esloras por segundo. Basta un aviso CheY-P desde la [[matriz de quimiorreceptores|real-pole]] para invertir un anillo C a sentido horario, deshacer la trenza y dar un vuelco fugaz rumbo a aguas más dulces.',
        blueprint: {
          role: 'Sistema perítrico de propulsión carrera-vuelco impulsado por H⁺ ([[motor|real-motor]] + [[flagelo|flagellum]])',
          arrivesFrom: 'H⁺ periplásmicos del [[Complejo I|complex-i-ecoli]] en el [[periplasma|peptidoglycan]] y señal CheY-P de la [[matriz polar|real-pole]]',
          inside: '11 estatores MotAB giran el rotor MS/C (~100 Hz), cojinetes P/L, gancho universal y hélice levógira FliC (paso 2,3 µm)',
          deliversTo: 'Carreras rectas antihorarias (~25–35 µm/s), vuelcos horarios (~0,1 s) y retorno de H⁺ al [[citosol|cytosol]]',
          loop: 'Avanzar hacia más comida inhibe CheA en la proa, alargando las carreras rectas rastro arriba'
        },
        scientific:
          'Aparato locomotor perítrico (~4–8 flagelos/célula) operando a bajo número de Reynolds (Re ≈ 10⁻⁵): cuerpo basal de ~45 nm (anillo C FliGMN, anillo MS FliF, eje, cojinetes P/L FlgI/FlgH) accionado por 11 canales estatores MotA₅MotB₂ unidos al peptidoglicano (~1.200 H⁺/vuelta, ~100 Hz en nado libre, ~1.260 pN·nm de par máximo), acoplado mediante el gancho articulado FlgE (55 nm) a un filamento helicoidal levógiro de flagelina FliC (20 nm de grosor, 0,4 µm de amplitud helicoidal y 2,3 µm de paso).',
        from: [
          { nodeId: 'peptidoglycan', label: 'Periplasma y pared', cargo: 'Flujo H⁺ y anclaje MotB' },
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria', cargo: 'Fuerza protón-motriz' },
          { nodeId: 'real-pole', label: 'Matriz polar', cargo: 'Señal de giro CheY-P' }
        ],
        to: [
          { nodeId: 'real-bacterium', label: 'Empuje celular', cargo: 'Quimiotaxis ~30 µm/s' },
          { nodeId: 'cytosol', label: 'Citoplasma', cargo: 'H⁺ reingresados' }
        ]
      }
    },

    pili: {
      en: {
        subtitle: 'Catch-Bond Grappling Hooks',
        simple:
          'Dozens of stiff, hair-thin protein rods bristle from the outer membrane, tipped with golden FimH claws that grip host sugar coats tighter the harder fluid currents try to wash the cell away.',
        story:
          'Swimming finds the feast, but staying put in a flushing gut or urinary tract takes grappling gear. Pilin [[protein|protein]] bricks synthesized on [[70S ribosomes|ribosome-ecoli]] cross the inner membrane through Sec gates, get escorted across the [[periplasm|peptidoglycan]] by FimC chaperones, and polymerize base-first through FimD outer-membrane ushers into eighty stiff [[Type 1 pili|pilus]] bristling from the hull.\n\nCapping the far tip of every 7-nanometre shaft sits a golden FimH lectin claw tuned to mannose [[sugars|glucose]] on host epithelial cells. Pull gently and FimH can let go so the cell explores; yank hard with a rushing fluid shear wave and FimH snaps into a locked catch-bond conformation, mooring the bacterium fast while neighbors weave a biofilm.',
        blueprint: {
          role: 'Chaperone–usher adhesive fimbriae for shear-resistant host colonization ([[Type 1 pili|pilus]])',
          arrivesFrom: 'FimA/FimF/FimG/FimH [[polypeptides|polypeptide]] from [[ribosomes|ribosome-ecoli]] exported via Sec into [[periplasm|peptidoglycan]]',
          inside: 'FimC periplasmic chaperone + FimD outer-membrane usher assemble a 7-nm helical FimA rod (~0.5–2 µm) tipped by mannose-binding FimH',
          deliversTo: 'Catch-bond surface attachment of [[E. coli|real-bacterium]] to host glycoproteins and abiotic biofilm surfaces',
          loop: 'Fluid shear tension allosterically stretches FimH from low-affinity to high-affinity mannose grip'
        },
        scientific:
          'Type 1 chaperone–usher fimbriae (~100–300 copies/cell; 7 nm diameter, 0.5–2 µm length) polymerized without external ATP via donor-strand exchange at the outer-membrane FimD usher barrel. Right-handed helical rod (~3.4 FimA subunits/turn, axial pore ~2 nm) can uncoil reversibly at constant ~30–50 pN force to buffer hydrodynamic shock, terminating in a fibrillum (FimF–FimG) and two-domain FimH tip adhesin exhibiting tensile catch-bond kinetics toward α-D-mannosylated host uroplakins/glycoproteins.',
        from: [
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'Pilin polypeptides' },
          { nodeId: 'peptidoglycan', label: 'Periplasm (FimC)', cargo: 'Chaperoned subunits' }
        ],
        to: [
          { nodeId: 'real-bacterium', label: 'Host anchorage', cargo: 'Shear-locked adhesion' },
          { nodeId: 'plasmid', label: 'Conjugative relatives', cargo: 'Cell-to-cell contact' }
        ]
      },
      es: {
        subtitle: 'Garfios adhesivos a prueba de corriente',
        simple:
          'Decenas de rígidas varillas proteicas erizan la membrana externa, rematadas en su punta dorada por pinzas FimH que aprietan más fuerte cuanto más intenta arrastrarlas la corriente.',
        story:
          'Nadar sirve para encontrar el banquete, pero no salir barrido por el flujo intestinal o urinario exige lanzar garfios de abordaje. Los ladrillos de [[proteína|protein]] pilina salidos de los [[ribosomas 70S|ribosome-ecoli]] cruzan la membrana interna por Sec, atraviesan el [[periplasma|peptidoglycan]] de la mano de la chaperona FimC y se ensamblan por la base en anillos FimD externos hasta erizar el casco con ochenta [[pili tipo 1|pilus]].\n\nEn la punta dorada de cada pértiga de 7 nanómetros espera la pinza FimH, calibrada para morder [[azúcares|glucose]] de manosa en los tejidos del huésped. Con agua calma suelta amarras para dejar explorar; pero si embiste una corriente brusca, el tirón estira FimH hacia un cierre mecánico de alta tenacidad que clava a la bacteria al sustrato.',
        blueprint: {
          role: 'Fimbrias adhesivas chaperona-usher para colonización resistente al flujo ([[pili tipo 1|pilus]])',
          arrivesFrom: '[[Polipéptidos|polypeptide]] FimA/F/G/H de [[ribosomas|ribosome-ecoli]] exportados vía Sec al [[periplasma|peptidoglycan]]',
          inside: 'Chaperona FimC y ensamblador externo FimD polimerizan una varilla helicoidal de 7 nm coronada por la adhesina FimH',
          deliversTo: 'Anclaje tipo catch-bond de [[E. coli|real-bacterium]] sobre glicoproteínas del huésped y biopelículas',
          loop: 'La fuerza de cizalla hidrodinámica conmuta alostéricamente FimH hacia su estado de agarre fuerte'
        },
        scientific:
          'Fimbrias tipo 1 de la vía chaperona-usher (~100–300 copias/célula; 7 nm de ancho, 0,5–2 µm de largo) ensambladas sin ATP periplásmico mediante intercambio de hebra donadora en el barril externo FimD. El eje helicoidal dextrógiro de FimA (~3,4 subunidades/vuelta) se desenrolla de modo elástico reversible a ~30–50 pN amortiguando tirones hidrodinámicos, y culmina en la adhesina apical FimH con cinética catch-bond frente a residuos α-D-manosa.',
        from: [
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Subunidades pilina' },
          { nodeId: 'peptidoglycan', label: 'Periplasma (FimC)', cargo: 'Escolta al anillo FimD' }
        ],
        to: [
          { nodeId: 'real-bacterium', label: 'Fijación tisular', cargo: 'Adhesión bajo corriente' },
          { nodeId: 'plasmid', label: 'Vecindad celular', cargo: 'Contacto en biopelículas' }
        ]
      }
    },

    chemo: {
      en: {
        subtitle: 'The Polar Chemical Sonar Dome',
        simple:
          'At one pole of the cell, thousands of chemoreceptors link into a hexagonal lattice that senses tiny rises or drops in nearby sugars and tells the flagellar motors when to change course.',
        story:
          'E. coli is far too tiny to tell whether its nose smells sweeter than its tail—so instead it measures time, comparing this second’s broth against two seconds ago through a 250-nanometre [[polar honeycomb|real-pole]]. Sugars and amino acids slipping through outer [[porins|porin]] brush the periplasmic tips of trimeric [[chemoreceptors|chemoreceptor]], sliding their four-helix stalks a whisper inward across the [[plasma membrane|plasma-membrane]].\n\nBecause CheA kinases and CheW rings wire thousands of receptor tips into one cooperative crystal, a tiny drop in sugar flips a whole neighborhood of kinases on at once. Burning ATP, CheA stamps phosphate tags onto CheY couriers that sprint across the cytosol to kick [[flagellar motors|real-motor]] into a course-changing tumble—while methylation enzymes reset the array’s memory for the next sniff.',
        blueprint: {
          role: 'Cooperative polar chemotaxis sensory lattice and kinase switchboard ([[chemoreceptor array|real-pole]])',
          arrivesFrom: 'Periplasmic [[glucose|glucose]]/maltose (via MalE), [[amino acids|amino-acid]], and repellents entering [[porins|porin]], plus cytosolic ATP',
          inside: '12-nm hexagonal lattice of [[MCP trimers-of-dimers|chemoreceptor]] coupled to CheW and histidine kinase CheA with CheR/CheB methylation memory',
          deliversTo: 'Diffusible CheY-[[phosphate|phosphate]] in [[cytosol|cytosol]] triggering clockwise tumbles at [[flagellar motors|real-motor]] (cleared by CheZ)',
          loop: 'CheR methylation and CheB-P demethylation continuously reset receptor sensitivity across 5 orders of ligand concentration'
        },
        scientific:
          'Polar supramolecular chemotaxis array (~250 nm diameter; p6 hexagonal lattice with 12 nm spacing) integrating trimers of homodimeric MCPs (Tsr, Tar, Trg, Tap; cytoplasmic four-helix bundle PDB 1QU7) with baseplate rings of CheA₂ histidine autokinase and CheW. Attractant binding inhibits CheA autophosphorylation with cooperative Hill coefficients up to ~15–35; repellent/attractant drop activates CheA → CheY-P flux (dephosphorylated rapidly by polar CheZ, τ ≈ 0.1–0.3 s) to bias flagellar C-rings from CCW run to CW tumble.',
        from: [
          { nodeId: 'porin', label: 'Outer-membrane porins', cargo: 'Sugars & amino acids' },
          { nodeId: 'peptidoglycan', label: 'Periplasm (MalE)', cargo: 'Bound attractants' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP for CheA kinase' }
        ],
        to: [
          { nodeId: 'real-motor', label: 'Flagellar motors', cargo: 'CheY-P tumble switch' },
          { nodeId: 'cytosol', label: 'Cytoplasm', cargo: 'Diffusing CheY-P' }
        ]
      },
      es: {
        subtitle: 'El domo polar de sonar químico',
        simple:
          'En un polo de la bacteria, miles de quimiorreceptores se enlazan en un panal hexagonal que detecta subidas o bajadas minúsculas de alimento y avisa a los motores cuándo cambiar de rumbo.',
        story:
          'E. coli es demasiado diminuta para notar diferencia de olor entre su proa y su popa, así que mide el tiempo: compara el caldo de este instante con el de hace dos segundos mediante un [[panal polar|real-pole]] de 250 nanómetros. Los azúcares y aminoácidos que entran por las [[porinas|porin]] rozan las antenas periplásmicas de los [[quimiorreceptores|chemoreceptor]], hundiendo sus tallos de cuatro hélices apenas un suspiro a través de la [[membrana plasmática|plasma-membrane]].\n\nComo las quinasas CheA y los anillos CheW cablean miles de puntas en una sola red cooperativa, basta que escasee una pizca el azúcar para encender todo un vecindario de quinasas a la vez. Consumiendo ATP, CheA estampa fosfatos sobre mensajeros CheY que cruzan el citosol y obligan a los [[motores flagelares|real-motor]] a dar un vuelco hacia aguas más prometedoras.',
        blueprint: {
          role: 'Red sensorial polar cooperativa y centralita quinasa de quimiotaxis ([[matriz polar|real-pole]])',
          arrivesFrom: '[[Glucosa|glucose]]/maltosa (vía MalE), [[aminoácidos|amino-acid]] y repelentes por [[porinas|porin]], más ATP citosólico',
          inside: 'Red hexagonal (12 nm) de [[trímeros de dímeros MCP|chemoreceptor]] acoplados a CheW y quinasa CheA con memoria por metilación CheR/CheB',
          deliversTo: 'Mensajero CheY-[[fosfato|phosphate]] en el [[citosol|cytosol]] que invierte el giro de los [[motores flagelares|real-motor]]',
          loop: 'La metilación (CheR) y desmetilación (CheB-P) reajustan la línea base permitiendo oler cambios en 5 órdenes de magnitud'
        },
        scientific:
          'Matriz polar quimiotáctica (~250 nm de diámetro; red hexagonal p6 con paso de 12 nm) formada por trímeros de homodímeros MCP (Tsr, Tar, Trg, Tap; PDB 1QU7) acoplados a 22,5 nm bajo la membrana interna con anillos de histidina-quinasa CheA₂ y acoplador CheW. La caída de atrayentes dispara la autofosforilación de CheA (ganancia cooperativa ~35×) y la transferencia de fosfato a CheY-P (hidrolizado por CheZ en ~0,1–0,3 s), conmutando el anillo C flagelar de carrera antihoraria a vuelco horario.',
        from: [
          { nodeId: 'porin', label: 'Porinas externas', cargo: 'Azúcares y aminoácidos' },
          { nodeId: 'peptidoglycan', label: 'Periplasma (MalE)', cargo: 'Atrayentes captados' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ATP para CheA' }
        ],
        to: [
          { nodeId: 'real-motor', label: 'Motores flagelares', cargo: 'Conmutador CheY-P' },
          { nodeId: 'cytosol', label: 'Citoplasma', cargo: 'Difusión de CheY-P' }
        ]
      }
    },

    mreb: {
      en: {
        subtitle: 'The Rod-Sculpting Actin Tracks',
        simple:
          'Short ribbons of an actin-like protein curve around the inside of the membrane, guiding wall-building enzymes in neat hoops so the growing bacterium stays a straight rod instead of ballooning into a sphere.',
        story:
          'How does a high-pressure bag grow twice as long without bulging into a round beach ball? Snug against the inner face of the [[plasma membrane|plasma-membrane]], short double-protofilament ribbons of MreB—a bacterial cousin of eukaryotic [[actin filaments|actin-filament]]—drink ATP from [[ATP synthase|atp-synthase-ecoli]] and hug patches where the cylinder curves most.\n\nTransmembrane RodZ linkers hitch these intracellular tracks directly to the RodA–PBP2 wall welders working out in the [[periplasm|peptidoglycan]]. As those welders stitch fresh glycan hoops around the circumference, they tow the MreB sleds steadily around the rod axis, laying straight cylindrical reinforcement until FtsZ pinches the middle in two.',
        blueprint: {
          role: 'Membrane-associated bacterial [[actin-homolog|actin-filament]] scaffold directing rod-shape elongation',
          arrivesFrom: 'MreB [[polypeptides|polypeptide]] from [[70S ribosomes|ribosome-ecoli]] and cytosolic ATP from [[ATP synthase|atp-synthase-ecoli]]',
          inside: 'Antiparallel double protofilaments bound to [[inner membrane|plasma-membrane]] via N-terminal amphipathic helices and coupled to RodZ/RodA/PBP2',
          deliversTo: 'Circumferential guidance of new [[peptidoglycan|peptidoglycan]] strand insertion and spent ADP + Pi to [[cytosol|cytosol]]',
          loop: 'Local membrane negative Gaussian curvature recruits MreB patches specifically to bulges to straighten the cylinder'
        },
        scientific:
          'Prokaryotic actin-superfamily cytoskeleton MreB (~37 kDa monomer; antiparallel non-polar double protofilaments ~5 nm × 100–300 nm tethered directly to the cytoplasmic leaflet of the inner membrane). ATP-dependent polymerization positions the elongasome complex (MreBCD–RodZ–RodA SEDS glycosyltransferase–PBP2 transpeptidase), which rotates circumferentially around the cell’s short axis at ~20–30 nm/s driven by nascent peptidoglycan polymerization; inhibited by A22, causing spherical rounding and lysis.',
        from: [
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP for polymerization' },
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'MreB monomers' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Wall elongasome', cargo: 'Circumferential hoop guide' },
          { nodeId: 'plasma-membrane', label: 'Inner membrane', cargo: 'Curvature-sensing track' }
        ]
      },
      es: {
        subtitle: 'Los raíles de actina que esculpen el cilindro',
        simple:
          'Cortas cintas de una proteína prima de la actina rodean por dentro la membrana, guiando en aros ordenados a las enzimas que tejen la pared para que la bacteria crezca como un bastón recto y no se hinche como un balón.',
        story:
          '¿Cómo consigue un saco sometido a alta presión duplicar su largo sin deformarse en una pelota redonda? Pegadas a la cara interna de la [[membrana plasmática|plasma-membrane]], cortas cintas dobles de MreB —pariente bacteriana de los [[filamentos de actina|actin-filament]]— consumen ATP de la [[ATP sintasa|atp-synthase-ecoli]] y se acoplan justo donde más se curva el cilindro.\n\nPasadores transmembrana RodZ enganchan estos patines interiores con las soldadoras RodA–PBP2 que trabajan afuera en el [[periplasma|peptidoglycan]]. A medida que las soldadoras cosen nuevos aros de azúcar alrededor del perímetro, arrastran consigo los raíles de MreB en órbitas circulares, reforzando el tubo recto hasta que llega la hora de dividirlo en dos.',
        blueprint: {
          role: 'Andamio bacteriano homólogo a [[actina|actin-filament]] que dirige la elongación cilíndrica de la pared',
          arrivesFrom: '[[Polipéptidos|polypeptide]] MreB de [[ribosomas 70S|ribosome-ecoli]] y ATP citosólico de la [[ATP sintasa|atp-synthase-ecoli]]',
          inside: 'Protofilamentos dobles antiparalelos anclados a la [[membrana interna|plasma-membrane]] y acoplados al complejo RodZ/RodA/PBP2',
          deliversTo: 'Guía circunferencial para insertar nuevo [[peptidoglicano|peptidoglycan]] y liberación de ADP + Pi al [[citosol|cytosol]]',
          loop: 'Las zonas abombadas reclutan preferentemente parches de MreB para corregir desviaciones y enderezar el bacilo'
        },
        scientific:
          'Citoesqueleto procariota de la superfamilia actina MreB (monómero de ~37 kDa; protofilamentos dobles antiparalelos apolares de ~5 nm × 100–300 nm anclados por hélices anfipáticas N-terminales a la membrana interna). Organiza el elongasoma (MreBCD–RodZ–glicosiltransferasa SEDS RodA–transpeptidasa PBP2), que avanza circunferencialmente a ~20–30 nm/s impulsado por la propia síntesis del peptidoglicano; su inhibición por A22 provoca pérdida de forma bacilar y lisis.',
        from: [
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ATP de polimerización' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Monómeros MreB' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Elongasoma parietal', cargo: 'Guía de aros de mureína' },
          { nodeId: 'plasma-membrane', label: 'Membrana interna', cargo: 'Sensor de curvatura' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: '4.6 Million Letters Twisted Without a Vault',
        simple:
          'One unbroken circular double helix of 4.64 million base pairs—1.6 millimetres of DNA if stretched straight—folds into hundreds of twisted plectoneme loops right in the center of the cell.',
        story:
          'Here lies the entire operating manual of Escherichia coli: 4,641,652 base pairs of circular B-DNA coiled into the open [[nucleoid|real-nucleoid]] without a shred of nuclear membrane around it. Negative supercoiling wound in by [[DNA gyrase|gyrase]] twists neighboring stretches of double helix around each other into ~460 braided plectoneme branches, cinched at their bases by [[HU|hu-protein]] and Fis clips.\n\nFar from sitting idle in storage, this live cable runs two high-stakes jobs simultaneously: twin [[replication forks|real-fork]] plow around the circle from oriC to copy every letter in forty minutes, while exposed outer loops feed [[RNA polymerases|rnap-ecoli]] so active genes fire straight into the surrounding sea of ribosomes.',
        blueprint: {
          role: 'Single circular 4.64-Mbp genomic blueprint organized as plectonemic domains ([[realistic nucleoid|real-nucleoid]])',
          arrivesFrom: 'Semiconservative synthesis by [[replication forks|real-fork]] using cytosolic dNTP [[nucleotides|nucleotide]] and supercoiling by [[gyrase|gyrase]]',
          inside: '1.58-mm closed [[DNA|dna]] duplex folded into ~460 negatively supercoiled loops (~10 kb each) pinned by [[HU|hu-protein]], Fis, and IHF',
          deliversTo: 'Template strands for [[RNA polymerase|rnap-ecoli]] transcription, [[coupled gene expression|real-gene]], and daughter chromosomes',
          loop: 'Transcription-induced supercoiling dynamically opens upstream promoters while gyrase and topoisomerase I rebalance twist'
        },
        scientific:
          'Escherichia coli K-12 MG1655 circular chromosome (4,641,652 bp, ~4,300 protein-coding genes + 7 rrn operons + 86 tRNA genes; 50.8% GC; 1.58 mm contour length at 0.34 nm/bp, 10.5 bp/turn B-form helix) compacted ~1,000-fold into a ~1.2 × 0.65 µm nucleoid. Partitioned into ~460 topological domains (~10 kb) wound into right-handed interwound plectonemes (net superhelical density σ ≈ −0.05; ~50% constrained by NAPs, ~50% unconstrained elastic tension).',
        from: [
          { nodeId: 'real-fork', label: 'Replication fork', cargo: 'Newly copied duplex' },
          { nodeId: 'gyrase', label: 'DNA gyrase & HU', cargo: 'Negative supercoiling' },
          { nodeId: 'nucleotide', label: 'Cytoplasmic dNTPs', cargo: 'A, T, G, C bricks' }
        ],
        to: [
          { nodeId: 'rnap-ecoli', label: 'RNA polymerase', cargo: 'Promoter templates' },
          { nodeId: 'real-gene', label: 'Active genes', cargo: 'Coupled expression' },
          { nodeId: 'real-fork', label: 'Replisome', cargo: 'Parental template' }
        ]
      },
      es: {
        subtitle: '4,6 millones de letras trenzadas sin bóveda',
        simple:
          'Una única doble hélice circular de 4,64 millones de pares de bases —1,6 milímetros de ADN si se estirara— se recoge en cientos de bucles trenzados justo en el centro abierto de la célula.',
        story:
          'Aquí late el manual completo de instrucciones de Escherichia coli: 4.641.652 pares de bases de ADN-B circular recogidos en el [[nucleoide|real-nucleoid]] sin un solo tabique nuclear a la vista. El superenrollamiento negativo inyectado por la [[ADN girasa|gyrase]] trenza tramos vecinos entre sí formando unas 460 ramas plectonémicas sujetas por pinzas [[HU|hu-protein]] y Fis.\n\nLejos de dormir archivado, este cable vivo ejecuta dos proezas a la vez: dos [[horquillas de replicación|real-fork]] recorren el anillo en sentidos opuestos para copiar cada letra en cuarenta minutos, mientras los bucles exteriores alimentan a la [[ARN polimerasa|rnap-ecoli]] para que los genes activos se traduzcan directamente en la orilla ribosómica.',
        blueprint: {
          role: 'Genoma circular único de 4,64 Mpb organizado en dominios plectonémicos ([[nucleoide realista|real-nucleoid]])',
          arrivesFrom: 'Duplicación semiconservativa en la [[horquilla de replicación|real-fork]] con [[nucleótidos|nucleotide]] dNTP y tensión de [[girasa|gyrase]]',
          inside: 'Dúplex cerrado de [[ADN|dna]] (1,58 mm) plegado en ~460 bucles superenrollados (~10 kb) sujetos por [[HU|hu-protein]], Fis e IHF',
          deliversTo: 'Hebras molde para [[ARN polimerasa|rnap-ecoli]], [[genes acoplados|real-gene]] y cromosomas hijos',
          loop: 'La propia transcripción genera olas de torsión que abren promotores vecinos mientras girasa y Topo I equilibran las vueltas'
        },
        scientific:
          'Cromosoma circular de Escherichia coli K-12 MG1655 (4.641.652 pb, ~4.300 genes codificantes + 7 operones rrn + 86 genes de ARNt; 50,8% GC; longitud de contorno 1,58 mm a 0,34 nm/pb y 10,5 pb/vuelta) compactado ~1.000 veces en un nucleoide de ~1,2 × 0,65 µm. Dividido en ~460 dominios topológicos (~10 kb) enrollados en plectonemas dextrógiros con densidad superhelicoidal σ ≈ −0,05.',
        from: [
          { nodeId: 'real-fork', label: 'Horquilla replicativa', cargo: 'Dúplex recién copiado' },
          { nodeId: 'gyrase', label: 'ADN girasa y HU', cargo: 'Superenrollamiento negativo' },
          { nodeId: 'nucleotide', label: 'dNTPs citosólicos', cargo: 'Bases A, T, G, C' }
        ],
        to: [
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa', cargo: 'Moldes promotores' },
          { nodeId: 'real-gene', label: 'Genes en lectura', cargo: 'Expresión acoplada' },
          { nodeId: 'real-fork', label: 'Replisoma', cargo: 'Molde parental' }
        ]
      }
    },

    hu: {
      en: {
        subtitle: 'The Nimble Chromosomal Origami Crew',
        simple:
          'Instead of wrapping DNA around heavy histone spools, tiny proteins like HU, Fis, and IHF bend sharp corners along the helix while ATP-powered gyrase keeps the whole chromosome spring-loaded.',
        story:
          'Packing 1.6 millimetres of DNA into a one-micrometre submarine without locking genes in storage calls for acrobatic crewmates synthesized fresh on [[70S ribosomes|ribosome-ecoli]]. Every few hundred base pairs, nimble [[HU dimers|hu-protein]] slip β-ribbon fingers into the minor groove to pinch flexible bends, Fis bridges neighboring loops during rapid feasts, and IHF folds hairpin U-turns at regulatory switches.\n\nEvery several thousand letters, the heavy hitter steps in: [[DNA gyrase|gyrase]] grabs ATP minted by [[ATP synthase|atp-synthase-ecoli]], slices both strands of a duplex, passes another segment clean through the gap, and seals the cut to keep plectonemes coiled tight and clear positive knots ahead of advancing [[replication forks|real-fork]].',
        blueprint: {
          role: 'Dynamic nucleoid-associated bending, bridging, and topoisomerase crew ([[HU|hu-protein]], Fis, IHF, [[gyrase|gyrase]])',
          arrivesFrom: 'Architectural [[polypeptides|polypeptide]] from [[ribosomes|ribosome-ecoli]] and cytosolic ATP from [[ATP synthase|atp-synthase-ecoli]]',
          inside: '[[HU|hu-protein]], Fis, and IHF bend/bridge B-[[DNA|dna]] minor grooves; GyrA₂B₂ [[gyrase|gyrase]] introduces 2 negative supercoils per 2 ATP',
          deliversTo: 'Compact yet transcription-ready [[nucleoid|real-nucleoid]] loops and torsional relief ahead of [[replisomes|real-fork]] and [[RNAP|rnap-ecoli]]',
          loop: 'Growth-phase shifts swap abundant Fis in rich media for Dps/H-NS protection during stationary starvation'
        },
        scientific:
          'Nucleoid-associated protein (NAP) and topoisomerase ensemble modeled from crystal/cryo-EM coordinates: heterodimeric HUαβ (PDB 1MUL, ~30,000–50,000 copies/cell, 105–140° minor-groove kinks), homodimeric Fis (PDB 3IV5, ~60,000 copies in early exponential growth, ~50–90° bends activating rrn promoters), sequence-specific IHFαβ (PDB 1IHF, >160° U-turns), and heterotetrameric Type IIA topoisomerase DNA gyrase (PDB 6RKW, ΔLk = −2 per ATPase cycle, maintaining σ ≈ −0.05).',
        from: [
          { nodeId: 'dna', label: 'Chromosomal DNA', cargo: 'Overwound or bare duplex' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP for DNA gyrase' },
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'NAP polypeptides' }
        ],
        to: [
          { nodeId: 'real-nucleoid', label: 'Folded nucleoid', cargo: 'Supercoiled plectonemes' },
          { nodeId: 'real-fork', label: 'Replication fork', cargo: 'Swivel relief & daughter folding' },
          { nodeId: 'rnap-ecoli', label: 'RNA polymerase', cargo: 'Bent open promoters' }
        ]
      },
      es: {
        subtitle: 'La cuadrilla acrobática de origami cromosómico',
        simple:
          'En vez de enrollar el ADN en pesados carretes de histonas, pequeñas proteínas como HU, Fis e IHF doblan codos ágiles en la hélice mientras la girasa gasta ATP en mantener tenso el muelle.',
        story:
          'Meter 1,6 milímetros de ADN en un submarino de un micrómetro sin dejar los genes bajo llave exige acróbatas ligeros recién salidos de los [[ribosomas 70S|ribosome-ecoli]]. Cada pocos cientos de pares de bases, los dímeros [[HU|hu-protein]] hunden dedos de cinta β en el surco menor para doblar curvas flexibles, Fis tiende puentes entre ramas durante los banquetes de crecimiento rápido e IHF pliega horquillas cerradas de 160 grados.\n\nCada varios miles de bases entra en acción el peso pesado: la [[ADN girasa|gyrase]] toma ATP de la [[ATP sintasa|atp-synthase-ecoli]], corta de cuajo ambas hebras, cruza otro segmento a través del tajo y vuelve a soldarlo para sostener el trenzado negativo y despejar los nudos delante de la [[horquilla de replicación|real-fork]].',
        blueprint: {
          role: 'Cuadrilla dinámica de plegado, puenteo y superenrollamiento del nucleoide ([[HU|hu-protein]], Fis, IHF, [[girasa|gyrase]])',
          arrivesFrom: '[[Polipéptidos|polypeptide]] desde [[ribosomas|ribosome-ecoli]] y ATP citosólico de la [[ATP sintasa|atp-synthase-ecoli]]',
          inside: '[[HU|hu-protein]], Fis e IHF curvan el [[ADN|dna]]; la [[ADN girasa|gyrase]] GyrA₂B₂ introduce 2 superenrollamientos negativos por cada 2 ATP',
          deliversTo: 'Plectonemas compactos pero accesibles en el [[nucleoide|real-nucleoid]] y alivio torsional ante [[replisomas|real-fork]] y [[ARN polimerasa|rnap-ecoli]]',
          loop: 'Al pasar del festín al ayuno, la célula releva a Fis por proteínas protectoras que blindan el cromosoma'
        },
        scientific:
          'Conjunto de proteínas asociadas al nucleoide (NAP) y topoisomerasas con coordenadas reales: heterodímero HUαβ (PDB 1MUL, ~30.000–50.000 copias/célula, curvaturas de 105–140°), homodímero Fis (PDB 3IV5, hasta ~60.000 copias en crecimiento exponencial activando operones rrn), heterodímero específico IHF (PDB 1IHF, giros en U >160°) y topoisomerasa IIA ADN girasa GyrA₂B₂ (PDB 6RKW, ΔLk = −2 por ciclo hidrolítico de ATP).',
        from: [
          { nodeId: 'dna', label: 'ADN cromosómico', cargo: 'Hélice tensa o desnuda' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ATP para la girasa' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Proteínas NAP' }
        ],
        to: [
          { nodeId: 'real-nucleoid', label: 'Nucleoide plegado', cargo: 'Plectonemas compactos' },
          { nodeId: 'real-fork', label: 'Horquilla replicativa', cargo: 'Alivio de nudos' },
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa', cargo: 'Promotores accesibles' }
        ]
      }
    },

    fork: {
      en: {
        subtitle: 'The 1,000-Letter-Per-Second Trombone Locomotive',
        simple:
          'Two coupled DNA polymerases race behind a ring-shaped helicase—copying one strand smoothly forward while looping the other strand out to stitch it in 1,500-letter Okazaki sections.',
        story:
          'A fast-growing E. coli divides every twenty minutes even though copying its chromosome takes forty—meaning new [[replication forks|real-fork]] launch at oriC before the previous pair even finishes! At the nose of this 250-nanometre machine, hexameric [[DnaB helicase|dnab-helicase]] burns ATP from [[ATP synthase|atp-synthase-ecoli]] to wedge parental DNA apart, feeding the upper strand straight into leading-strand [[Pol III|pol3-ecoli]] for non-stop copying.\n\nMeanwhile, the lower template threads through the DnaB ring, catches an RNA primer from DnaG primase, wraps safely around white SSB spools in a sweeping trombone loop, and feeds backward through a twin Pol III held by flexible τ arms—handing two crisp sister chromosomes back to [[HU|hu-protein]] and gyrase.',
        blueprint: {
          role: 'High-speed coupled semiconservative chromosome replisome ([[realistic fork|real-fork]])',
          arrivesFrom: 'Parental [[DNA|dna]] unwound ahead by [[gyrase|gyrase]], cytosolic dNTP/NTP [[nucleotides|nucleotide]], and ATP from [[ATP synthase|atp-synthase-ecoli]]',
          inside: '[[DnaB helicase|dnab-helicase]] + DnaG primase + SSB tetramers + τ₃δδ′χψ clamp loader + β₂-clamped twin [[Pol III cores|pol3-ecoli]] (~1,000 bp/s)',
          deliversTo: 'Two semiconservative daughter chromosomes immediately folded into [[nucleoid|real-nucleoid]] plectonemes by [[HU|hu-protein]]',
          loop: 'In rich media, multifork initiation fires at oriC ahead of cell division so daughters inherit already-replicating chromosomes'
        },
        scientific:
          'Complete E. coli replisome (~250 nm span, ~1 MDa holoenzyme) synthesizing ~1,000 bp/s with <10⁻⁷ error/nt: DnaB₆ helicase (PDB 6QEL) unwinds parental duplex on the 5′→3′ lagging strand; DnaG primase (1DDE) lays 10–12 nt RNA primers; homotetrameric SSB (1EYG) coats ~65–85 nt ssDNA per spool; γ/τ₃δδ′χψ clamp loader (3GLF) loads dimeric β₂ sliding clamps onto primers and tethers leading and trombone-looped lagging Pol III αεθ cores (5FKV).',
        from: [
          { nodeId: 'dna', label: 'Parental chromosome', cargo: 'Template duplex' },
          { nodeId: 'nucleotide', label: 'Cytoplasmic dNTPs', cargo: 'dATP, dTTP, dGTP, dCTP' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP for DnaB & clamp loader' }
        ],
        to: [
          { nodeId: 'real-nucleoid', label: 'Sister chromosomes', cargo: '2× 4.64 Mbp DNA' },
          { nodeId: 'hu-protein', label: 'HU & gyrase', cargo: 'Nascent duplexes to fold' }
        ]
      },
      es: {
        subtitle: 'La locomotora en trombón de mil letras por segundo',
        simple:
          'Dos ADN polimerasas acopladas corren tras un anillo helicasa: copian una hebra seguida hacia delante mientras curvan la otra en bucle para coserla en tramos de mil quinientas letras.',
        story:
          'En caldo rico, E. coli se divide cada veinte minutos aunque copiar su cromosoma entero lleve cuarenta: ¡eso significa que lanza nuevas [[horquillas de replicación|real-fork]] antes incluso de que terminen las anteriores! En el morro de esta locomotora de 250 nanómetros, la [[helicasa DnaB|dnab-helicase]] quema ATP de la [[ATP sintasa|atp-synthase-ecoli]] para abrir el ADN parental y servir en bandeja la hebra superior a una [[ADN polimerasa III|pol3-ecoli]] continua.\n\nPor debajo, la otra hebra atraviesa el anillo DnaB, recibe un cebador de ARN de la primasa DnaG, se arropa en carretes blancos SSB trazando un lazo de trombón y entra en una segunda Pol III sujeta por brazos τ, entregando dos cromosomas impecables a [[HU|hu-protein]] y la girasa.',
        blueprint: {
          role: 'Replisoma acoplado semiconservativo de alta velocidad ([[horquilla realista|real-fork]])',
          arrivesFrom: '[[ADN|dna]] parental aliviado por [[girasa|gyrase]], [[nucleótidos|nucleotide]] dNTP/NTP y ATP de la [[ATP sintasa|atp-synthase-ecoli]]',
          inside: '[[Helicasa DnaB|dnab-helicase]] + primasa DnaG + carretes SSB + cargador τ₃δδ′χψ + dos núcleos [[Pol III|pol3-ecoli]] con pinza β₂ (~1.000 pb/s)',
          deliversTo: 'Dos cromosomas hermanos plegados al instante en el [[nucleoide|real-nucleoid]] por [[HU|hu-protein]]',
          loop: 'En crecimiento rápido dispara rondas solapadas en oriC para legar cromosomas ya a medio copiar a las hijas'
        },
        scientific:
          'Replisoma íntegro de E. coli (~250 nm, ~1 MDa) operando a ~1.000 pb/s con error <10⁻⁷/nt: helicasa hexamérica DnaB₆ (PDB 6QEL) en molde rezagado 5′→3′, primasa DnaG (1DDE; cebadores de ARN de 10–12 nt), tetrámeros SSB (1EYG; ~65–85 nt/tetrámero), cargador de pinza τ₃δδ′χψ (3GLF), anillos deslizantes β₂ y dos núcleos Pol III αεθ acoplados (5FKV).',
        from: [
          { nodeId: 'dna', label: 'Cromosoma parental', cargo: 'Dúplex molde' },
          { nodeId: 'nucleotide', label: 'dNTPs citosólicos', cargo: 'dATP, dTTP, dGTP, dCTP' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ATP para DnaB y cargador' }
        ],
        to: [
          { nodeId: 'real-nucleoid', label: 'Cromosomas hijos', cargo: '2× 4,64 Mpb de ADN' },
          { nodeId: 'hu-protein', label: 'HU y girasa', cargo: 'Dúplex listos para plegar' }
        ]
      }
    },

    rnap: {
      en: {
        subtitle: 'Crab-Claw Scribes & Ribosomal Christmas Trees',
        simple:
          'Thousands of RNA polymerase claws patrol the chromosome, reading single genes for immediate protein making while packing bumper-to-bumper along ribosomal RNA operons.',
        story:
          'Four thousand [[E. coli RNA polymerases|rnap-ecoli]] prowl the [[nucleoid|real-nucleoid]], gulping ribonucleotide triphosphates recharged by [[ATP synthase|atp-synthase-ecoli]] to turn silent DNA into live instructions. Along ordinary protein genes near the nucleoid rim, single claws reel out messenger RNA straight into trailing [[ribosome convoys|real-gene]] at fifty letters per second.\n\nLook up at one of the seven ribosomal RNA operons, however, and traffic turns into a roaring freight train: dozens of polymerases sprint nose-to-tail down the same DNA track, their nascent pink rRNA transcripts growing longer down the line and folding on the fly with ribosomal proteins into a classic electron-micrograph “Christmas tree” that births new [[70S ribosomes|ribosome-ecoli]].',
        blueprint: {
          role: 'Genome-wide mRNA, rRNA, and tRNA transcription fleet ([[E. coli RNAP|rnap-ecoli]])',
          arrivesFrom: 'Promoter [[DNA|dna]] in [[nucleoid|real-nucleoid]], NTP [[nucleotides|nucleotide]] recharged by [[ATP synthase|atp-synthase-ecoli]], and σ factors',
          inside: 'α₂ββ′ωσ⁷⁰ crab-claw holoenzymes melt 13-bp bubbles and polymerize [[RNA|rna]] singly on mRNAs or bumper-to-bumper on rrn operons',
          deliversTo: 'Nascent mRNA for [[coupled polysomes|real-gene]], folding 16S/23S/5S rRNA for [[70S ribosomes|ribosome-ecoli]], and [[tRNAs|trna]]',
          loop: 'Amino-acid starvation triggers alarmone ppGpp on RNAP, throttling rRNA Christmas trees to redirect ink toward biosynthetic genes'
        },
        scientific:
          'Cellular pool of ~2,000–5,000 α₂ββ′ω RNA polymerase holoenzymes (PDB 4YG2, ~458 kDa with σ⁷⁰). During rapid exponential growth, >60% of active RNAPs pack at ~1 polymerase per 80 bp along the seven ~5.5-kb rrn operons (~85 nt/s antiterminated elongation via NusABEG, co-transcriptionally assembling 30S/50S precursors), while remaining enzymes transcribe polycistronic mRNAs (~45 nt/s) coupled directly to lead 70S ribosomes.',
        from: [
          { nodeId: 'dna', label: 'Chromosomal promoters', cargo: 'Gene & rrn templates' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP / NTP recharge' }
        ],
        to: [
          { nodeId: 'real-gene', label: 'Coupled mRNAs', cargo: 'Nascent coding transcripts' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosome assembly', cargo: '16S, 23S & 5S rRNA' },
          { nodeId: 'trna', label: 'tRNA pool', cargo: 'Pre-tRNA transcripts' }
        ]
      },
      es: {
        subtitle: 'Tenazas escribas y abetos de ARN ribosómico',
        simple:
          'Miles de pinzas de ARN polimerasa recorren el cromosoma: leen genes sueltos para fabricar proteínas al vuelo y se encadenan en trenes compactos sobre los operones de ARN ribosómico.',
        story:
          'Cuatro mil [[ARN polimerasas de E. coli|rnap-ecoli]] patrullan el [[nucleoide|real-nucleoid]], bebiendo nucleótidos recargados por la [[ATP sintasa|atp-synthase-ecoli]] para despertar el código dormido. En la orilla del nucleoide, pinzas solitarias transcriben genes de trabajo y tienden su cinta de ARN mensajero directamente a las [[caravanas de ribosomas|real-gene]] que trotan detrás.\n\nPero asómate a uno de los siete operones ribosómicos y verás una autopista en hora punta: decenas de polimerasas avanzan pegadas una tras otra por el mismo raíl de ADN, desplegando ramas crecientes de ARNr rosado que ya van reclutando proteínas al vuelo como un «árbol de Navidad» molecular del que nacen nuevos [[ribosomas 70S|ribosome-ecoli]].',
        blueprint: {
          role: 'Flota celular de transcripción de ARNm, ARNr y ARNt ([[ARN polimerasa de E. coli|rnap-ecoli]])',
          arrivesFrom: '[[ADN|dna]] promotor del [[nucleoide|real-nucleoid]], [[nucleótidos|nucleotide]] NTP recargados por [[ATP sintasa|atp-synthase-ecoli]] y factores σ',
          inside: 'Holoenzimas α₂ββ′ωσ⁷⁰ abren burbujas de 13 pb y sintetizan [[ARN|rna]] en genes individuales o en fila densa sobre operones rrn',
          deliversTo: 'ARNm naciente hacia [[polisomas acoplados|real-gene]], ARNr 16S/23S/5S para [[ribosomas 70S|ribosome-ecoli]] y [[ARNt|trna]]',
          loop: 'Si faltan aminoácidos, la señal de alarma ppGpp frena en seco los operones ribosómicos y desvía las polimerasas a fabricar nutrientes'
        },
        scientific:
          'Dotación celular de ~2.000–5.000 holoenzimas ARN polimerasa α₂ββ′ω (PDB 4YG2, ~458 kDa con σ⁷⁰). En crecimiento exponencial rápido, >60% de las polimerasas activas se concentran (~1 enzima cada 80 pb) sobre los siete operones rrn de ~5,5 kb elongando a ~85 nt/s asistidas por el complejo antiterminador NusABEG, mientras el resto transcribe ARNm policistrónicos (~45 nt/s) acoplados a ribosomas líderes.',
        from: [
          { nodeId: 'dna', label: 'Promotores de ADN', cargo: 'Moldes génicos y rrn' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'Recarga de ATP / NTP' }
        ],
        to: [
          { nodeId: 'real-gene', label: 'ARNm acoplado', cargo: 'Transcritos codificantes' },
          { nodeId: 'ribosome-ecoli', label: 'Biogénesis ribosómica', cargo: 'ARNr 16S, 23S y 5S' },
          { nodeId: 'trna', label: 'Reserva de ARNt', cargo: 'Precursores de ARNt' }
        ]
      }
    },

    mrna: {
      en: {
        subtitle: 'Live-Wire Messages & Catalytic RNA Scaffolds',
        simple:
          'Bacterial mRNA lives fast and dies young—read by a string of ribosomes while it is still being made and shredded within minutes so the cell can pivot instantly, while rRNA folds into durable ribosome cores.',
        story:
          'In a eukaryote, messenger [[RNA|rna]] gets capped, spliced, polyadenylated, and stamped for export before a ribosome ever sees it; in E. coli, an orange mRNA strand is already feeding a polysome of [[70S ribosomes|ribosome-ecoli]] before [[RNA polymerase|rnap-ecoli]] has even finished writing its tail! Often one polycistronic ribbon carries three or four partner enzymes of the same pathway side by side so the whole crew prints together.\n\nThree minutes later, RNase E scissors chew that spent message back into loose nucleotides—letting the submarine rewrite its entire enzyme lineup the instant gut weather changes. By contrast, crimson ribosomal RNA folds into A-form stems that outlive generations inside [[50S|ribo-50s]] and [[30S subunits|ribo-30s]].',
        blueprint: {
          role: 'Short-lived polycistronic coding dispatches (mRNA) and long-lived catalytic ribosome scaffolds (rRNA)',
          arrivesFrom: 'Transcribed directly off [[nucleoid DNA|real-nucleoid]] by [[RNA polymerase|rnap-ecoli]] using cytosolic NTPs',
          inside: 'Uncapped polycistronic m[[RNA|rna]] (t₁/₂ ≈ 2–5 min) translated co-transcriptionally; folded 16S/23S/5S rRNA (~85% of cellular RNA)',
          deliversTo: 'Codon instructions for [[70S ribosomes|ribosome-ecoli]], structural/catalytic cores of [[30S|ribo-30s]]/[[50S|ribo-50s]], and recycled [[nucleotides|nucleotide]] via degradosome',
          loop: 'Rapid RNase E turnover erases obsolete mRNAs in minutes so new transcripts immediately dominate translation'
        },
        scientific:
          'Dual bacterial RNA populations rendered at single-nucleotide scale (0.6 nm single-strand step; A-form hairpins 0.28 nm rise/bp, 11 bp/turn): (1) uncapped, non-polyadenylated, frequently polycistronic mRNAs (~4% of total RNA; median half-life ~2–5 min via RNase E–PNPase–RhlB–enolase degradosome) bearing Shine–Dalgarno leaders; and (2) stable 16S, 23S, and 5S rRNAs (~80–85% of total RNA) co-transcriptionally cleaved by RNase III and modified into active ribosomal subunits.',
        from: [
          { nodeId: 'rnap-ecoli', label: 'RNA polymerase', cargo: 'Nascent mRNA & rRNA' },
          { nodeId: 'nucleotide', label: 'NTP pool', cargo: 'ATP, UTP, GTP, CTP' }
        ],
        to: [
          { nodeId: 'ribosome-ecoli', label: '70S polysomes', cargo: 'Coding mRNA & rRNA core' },
          { nodeId: 'real-gene', label: 'Coupled expressosome', cargo: 'Co-transcriptional 5′ end' },
          { nodeId: 'nucleotide', label: 'RNA degradosome', cargo: 'Recycled NMPs' }
        ]
      },
      es: {
        subtitle: 'Mensajes fugaces en vivo y armazones eternos de ARNr',
        simple:
          'El ARNm bacteriano vive deprisa: una fila de ribosomas lo lee mientras aún se está fabricando y en pocos minutos se recicla para cambiar de menú al instante, mientras el ARNr arma el corazón duradero de los ribosomas.',
        story:
          'En una célula eucariota, el [[ARN|rna]] mensajero recibe caperuza, corte de intrones, cola y pasaporte nuclear antes de ver un ribosoma; en E. coli, una cinta naranja de ARNm ya sostiene un tren entero de [[ribosomas 70S|ribosome-ecoli]] cuando la [[ARN polimerasa|rnap-ecoli]] ni siquiera ha terminado de escribir su final. A menudo una sola tira policistrónica agrupa tres o cuatro enzimas vecinas para imprimir el equipo completo de una tacada.\n\nTres minutos después, las tijeras de la RNasa E desmenuzan ese mensaje de vuelta a nucleótidos sueltos, permitiendo al submarino cambiar de repertorio en cuanto varía el entorno. En cambio, el ARNr carmesí se pliega en horquillas robustas que perduran generación tras generación dentro de las subunidades [[50S|ribo-50s]] y [[30S|ribo-30s]].',
        blueprint: {
          role: 'Despachos codificantes efímeros policistrónicos (ARNm) y andamios catalíticos estables (ARNr)',
          arrivesFrom: 'Transcripción directa desde el [[nucleoide|real-nucleoid]] por la [[ARN polimerasa|rnap-ecoli]] con NTPs citosólicos',
          inside: 'ARNm de [[ARN|rna]] sin caperuza (vida media ~2–5 min) leído cotranscripcionalmente; ARNr 16S/23S/5S estable (~85% del ARN total)',
          deliversTo: 'Instrucciones para [[ribosomas 70S|ribosome-ecoli]], núcleos de [[30S|ribo-30s]]/[[50S|ribo-50s]] y [[nucleótidos|nucleotide]] reciclados por el degradosoma',
          loop: 'La degradación veloz por RNasa E borra órdenes antiguas en minutos para que la célula reaccione sin inercia'
        },
        scientific:
          'Poblaciones de ARN bacteriano trazadas nucleótido a nucleótido (paso monocatenario de 0,6 nm; tallos en horquilla forma A de 0,28 nm/pb y 11 pb/vuelta): (1) ARNm sin caperuza 5′ ni poliadenilación funcional, a menudo policistrónicos (~4% del ARN celular; semivida media ~2–5 min vía degradosoma RNasa E–PNPasa–RhlB) con secuencias Shine–Dalgarno; y (2) ARNr estables 16S, 23S y 5S (~80–85% del ARN total) procesados por RNasa III.',
        from: [
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa', cargo: 'ARNm y ARNr nacientes' },
          { nodeId: 'nucleotide', label: 'Reserva de NTPs', cargo: 'ATP, UTP, GTP, CTP' }
        ],
        to: [
          { nodeId: 'ribosome-ecoli', label: 'Polisomas 70S', cargo: 'ARNm y núcleo ARNr' },
          { nodeId: 'real-gene', label: 'Expresosoma acoplado', cargo: 'Extremo 5′ naciente' },
          { nodeId: 'nucleotide', label: 'Degradosoma ARN', cargo: 'Nucleótidos reciclados' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: '50,000 Protein Forges Crowding the Nucleoid Shore',
        simple:
          'Excluded from the tangled center of the DNA, tens of thousands of 70S ribosomes pack the surrounding cytoplasm—strung like beads along mRNAs to build every enzyme, pump, and propeller in the cell.',
        story:
          'Notice how purple [[70S ribosomes|ribosome-ecoli]] ring the blue [[nucleoid|real-nucleoid]] like a bustling port city around a mountain? Too bulky as multi-ribosome polysomes to squeeze deep into braided DNA, ~50,000 factories pack the outer cytoplasm instead, three quarters of them marching in convoys along orange [[mRNA ribbons|real-gene]] while the rest wait between shifts.\n\nFed non-stop by EF-Tu-escorted [[tRNAs|trna]] and nucleotide fuel from [[ATP synthase|atp-synthase-ecoli]], each ribosome welds twenty amino acids a second. Two thirds of their newly forged chains fold into cytoplasmic workhorses with help from GroEL, while one third carry signal tags straight to inner-membrane Sec gates to armor the hull.',
        blueprint: {
          role: 'High-density polysomal translation fleet surrounding the nucleoid ([[E. coli 70S ribosomes|ribosome-ecoli]])',
          arrivesFrom: 'Nascent m[[RNA|rna]] from [[RNA polymerase|rnap-ecoli]], EF-Tu·GTP·aa-[[tRNAs|trna]], and GTP/ATP energy from [[ATP synthase|atp-synthase-ecoli]]',
          inside: '~50,000 [[70S particles|ribosome-ecoli]] (~75% active polysomes, ~25% free subunits) stitch [[amino acids|amino-acid]] at ~20 aa/s',
          deliversTo: 'Soluble enzymes folded in [[cytosol|cytosol]]/[[GroEL|groel]] (~65%) and Sec/SRP-targeted [[envelope|real-envelope]] proteins (~35%)',
          loop: 'Excluded sterically from dense plectonemes, polysomes exert entropic crowding pressure that helps compact the nucleoid'
        },
        scientific:
          'Cytoplasmic 70S ribosome population (PDB 4YBB; ~2.3 MDa, ~25 nm diameter; ~40,000–50,000 copies occupying ~20–25% of cytoplasmic volume outside the nucleoid via entropic phase segregation). Roughly 75% translate mRNAs in polysomes spaced every ~75–110 nt (~25–35 codons), consuming ~80% of cellular metabolic translation GTP/ATP; co-translational SRP (Ffh/4.5S RNA) or post-translational SecB routes ~30–35% of nascent chains to inner-membrane SecYEG.',
        from: [
          { nodeId: 'rnap-ecoli', label: 'RNA polymerase', cargo: 'mRNA & rRNA subunits' },
          { nodeId: 'trna', label: 'tRNA & EF-Tu', cargo: 'Charged amino acids' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'GTP / ATP energy' }
        ],
        to: [
          { nodeId: 'groel', label: 'GroEL & cytoplasm', cargo: 'Soluble enzymes (~65%)' },
          { nodeId: 'plasma-membrane', label: 'Sec translocon', cargo: 'Envelope proteins (~35%)' },
          { nodeId: 'trna', label: 'Synthetase pool', cargo: 'Deacylated tRNAs' }
        ]
      },
      es: {
        subtitle: 'Cincuenta mil fraguas proteicas a orillas del nucleoide',
        simple:
          'Excluidos del apretado ovillo central de ADN, decenas de miles de ribosomas 70S llenan el citoplasma periférico ensartados en cintas de ARNm para fabricar cada enzima, bomba y hélice de la bacteria.',
        story:
          '¿Ves cómo los [[ribosomas 70S|ribosome-ecoli]] púrpuras rodean el [[nucleoide|real-nucleoid]] azul igual que una ciudad portuaria abraza una montaña? Demasiado voluminosos cuando viajan en polisomas para colarse entre las trenzas de ADN, unas cincuenta mil factorías abarrotan el anillo exterior del citoplasma: tres cuartas partes desfilan sobre cintas naranjas de [[ARNm activo|real-gene]] y el cuarto restante aguarda turno entre encargos.\n\nAbastecidos sin tregua por [[ARNt|trna]] escoltados por EF-Tu y combustible de la [[ATP sintasa|atp-synthase-ecoli]], cada ribosoma suelda veinte aminoácidos por segundo. Dos tercios de las nuevas cadenas se quedan trabajando en el interior asistidas por GroEL, y un tercio marcha directo a las puertas Sec para blindar la envoltura.',
        blueprint: {
          role: 'Flota polisómica de traducción de alta densidad en la corteza citoplasmática ([[ribosomas 70S|ribosome-ecoli]])',
          arrivesFrom: 'ARNm de [[ARN|rna]] desde [[ARN polimerasa|rnap-ecoli]], complejos EF-Tu·GTP·aa-[[ARNt|trna]] y energía de [[ATP sintasa|atp-synthase-ecoli]]',
          inside: '~50.000 [[ribosomas 70S|ribosome-ecoli]] (~75% en polisomas activos, ~25% libres) enlazan [[aminoácidos|amino-acid]] a ~20 aa/s',
          deliversTo: 'Enzimas solubles en [[citosol|cytosol]]/[[GroEL|groel]] (~65%) y proteínas dirigidas a Sec hacia la [[envoltura|real-envelope]] (~35%)',
          loop: 'Al quedar fuera del ADN denso, el empuje osmótico-entrópico de los polisomas ayuda a mantener compacto el nucleoide'
        },
        scientific:
          'Población citoplasmática de ribosomas 70S (PDB 4YBB; ~2,3 MDa, ~25 nm; ~40.000–50.000 copias segregadas hacia la periferia del nucleoide por exclusión entrópica de volumen). Alrededor del 75% opera en polisomas espaciados cada ~75–110 nt consumiendo la mayor fracción energética celular; las rutas SRP (Ffh/ARN 4.5S) y SecB canalizan ~30–35% del proteoma naciente hacia el translocón SecYEG.',
        from: [
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa', cargo: 'ARNm y subunidades ARNr' },
          { nodeId: 'trna', label: 'ARNt y EF-Tu', cargo: 'Aminoácidos cargados' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'Energía GTP / ATP' }
        ],
        to: [
          { nodeId: 'groel', label: 'GroEL y citosol', cargo: 'Enzimas solubles (~65%)' },
          { nodeId: 'plasma-membrane', label: 'Translocón Sec', cargo: 'Proteínas de casco (~35%)' },
          { nodeId: 'trna', label: 'Sintetasas', cargo: 'ARNt descargados' }
        ]
      }
    },

    trna: {
      en: {
        subtitle: 'The High-Speed Courier Fleet & EF-Tu Escorts',
        simple:
          'Hundreds of thousands of L-shaped tRNA adapters pair up with EF-Tu—the single most abundant protein in the cytoplasm—to rush matching amino acids into working ribosomes.',
        story:
          'Keeping fifty thousand [[ribosomes|ribosome-ecoli]] fed at twenty stitches a second requires the busiest courier brigade in biology. As [[amino acids|amino-acid]] pour in through inner-membrane permeases or roll off biosynthetic lines, twenty specialist synthetases burn ATP from [[ATP synthase|atp-synthase-ecoli]] to clip each brick onto its cognate [[tRNA|trna]].\n\nInstantly, GTP-charged EF-Tu—the single most abundant soluble [[protein|protein]] in E. coli—scoops up the loaded tRNA into a streamlined ternary torpedo that protects the fragile ester bond and rockets it into a ribosome’s decoding slot. Once the codon clicks, EF-Tu fires its GTP, hands off the brick, gets recharged by EF-Ts, and races back for another pickup.',
        blueprint: {
          role: 'Aminoacyl-[[tRNA|trna]] and EF-Tu·GTP delivery shuttle feeding ribosomal elongation',
          arrivesFrom: 'Imported/synthesized [[amino acids|amino-acid]], [[tRNA|trna]] transcripts from [[RNAP|rnap-ecoli]], and ATP/GTP from [[ATP synthase|atp-synthase-ecoli]]',
          inside: '20 aminoacyl-tRNA synthetases charge tRNAs; EF-Tu·GTP binds aa-tRNA into a 1:1:1 ternary complex for A-site sampling',
          deliversTo: 'Verified [[amino acids|amino-acid]] into [[70S ribosomes|ribosome-ecoli]] plus deacylated tRNA and EF-Tu·GDP recycled to [[cytosol|cytosol]]',
          loop: 'Uncharged tRNAs stalling in ribosomal A-sites activate RelA to synthesize ppGpp, triggering the stringent starvation response'
        },
        scientific:
          'Cytoplasmic translation supply pool (~200,000–400,000 tRNA molecules from 86 tRNA genes, PDB 1EHZ; paired with ~250,000–350,000 copies of elongation factor EF-Tu, ~43 kDa, ~5–6% of total cell protein, PDB 1EFC; ternary complex PDB 1TTT). Aminoacyl-tRNA synthetases consume 2 high-energy phosphate equivalents (ATP → AMP + PPi) per charging; EF-Tu·GTP protects the labile aminoacyl ester (t₁/₂ hours vs. minutes free) and proofreads codon–anticodon kinetics via GTPase activation on the 50S sarcin–ricin loop, regenerated by nucleotide-exchange factor EF-Ts.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Inner-membrane importers', cargo: 'Amino acids' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP & GTP fuel' },
          { nodeId: 'rnap-ecoli', label: 'RNA polymerase', cargo: 'Fresh tRNAs' }
        ],
        to: [
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'EF-Tu·GTP·aa-tRNA' },
          { nodeId: 'real-gene', label: 'Coupled polysomes', cargo: 'Co-transcriptional bricks' }
        ]
      },
      es: {
        subtitle: 'La flota de mensajeros en L y sus escoltas EF-Tu',
        simple:
          'Cientos de miles de adaptadores ARNt se emparejan con EF-Tu —la proteína soluble más abundante de todo el citoplasma— para entregar aminoácidos a toda carrera en los ribosomas.',
        story:
          'Alimentar cincuenta mil [[ribosomas|ribosome-ecoli]] a veinte puntadas por segundo exige el servicio de mensajería más frenético de la biología. A medida que los [[aminoácidos|amino-acid]] entran por las permeasas de membrana o salen de las rutas de síntesis, veinte sintetasas especialistas gastan ATP de la [[ATP sintasa|atp-synthase-ecoli]] para abrochar cada ladrillo en su [[ARNt|trna]] exacto.\n\nAl vuelo, el factor EF-Tu cargado con GTP —la [[proteína|protein]] soluble más numerosa de toda E. coli— abraza al ARNt formando un torpedo ternario que protege el enlace químico y lo lanza directo a la ranura lectora del ribosoma. En cuanto el codón encaja, EF-Tu dispara su GTP, suelta la carga, se recarga con ayuda de EF-Ts y vuelve disparado a por el siguiente envío.',
        blueprint: {
          role: 'Lanzadera de entrega de aminoacil-[[ARNt|trna]] y EF-Tu·GTP hacia la elongación ribosómica',
          arrivesFrom: '[[Aminoácidos|amino-acid]] importados/sintetizados, [[ARNt|trna]] de [[ARN polimerasa|rnap-ecoli]] y ATP/GTP de [[ATP sintasa|atp-synthase-ecoli]]',
          inside: '20 aminoacil-ARNt sintetasas cargan los ARNt; EF-Tu·GTP forma el complejo ternario 1:1:1 para auditar codones',
          deliversTo: '[[Aminoácidos|amino-acid]] verificados al [[ribosoma 70S|ribosome-ecoli]] más ARNt vacío y EF-Tu·GDP reciclados en el [[citosol|cytosol]]',
          loop: 'Si se acumulan ARNt vacíos en el ribosoma, la enzima RelA dispara la alarma ppGpp de respuesta astringente al ayuno'
        },
        scientific:
          'Flota citosólica de suministro traduccional (~200.000–400.000 moléculas de ARNt codificadas por 86 genes, PDB 1EHZ; emparejadas con ~250.000–350.000 copias de EF-Tu, ~43 kDa, ~5–6% de la proteína celular total, PDB 1EFC; complejo ternario PDB 1TTT). Cada carga consume ATP → AMP + PPi; EF-Tu·GTP protege el enlace éster aminoacilo de la hidrólisis espontánea y aporta corrección cinética mediante hidrólisis de GTP activada por el bucle sarcina-ricina 50S, reciclándose vía EF-Ts.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Permeasas internas', cargo: 'Aminoácidos' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'Combustible ATP y GTP' },
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa', cargo: 'ARNt transcritos' }
        ],
        to: [
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Complejo EF-Tu·aa-ARNt' },
          { nodeId: 'real-gene', label: 'Polisomas acoplados', cargo: 'Suministro cotraduccional' }
        ]
      }
    },

    cyto: {
      en: {
        subtitle: 'The Wall-to-Wall Metabolic Mosh Pit',
        simple:
          'Packed to a fifth of its volume with thousands of enzyme species, the open cytoplasm cracks glucose via glycolysis and the Krebs cycle—making ATP, NADH electrons, and every building block with no organelles needed.',
        story:
          'Forget empty watery soup: E. coli’s [[cytosol|cytosol]] is a shoulder-to-shoulder workshop packed with 2.5 million soluble [[proteins|protein]] where molecules travel ten nanometres between collisions. Fresh glucose arriving through inner-membrane gates hits glycolytic workhorses like GAPDH right in the open room, splitting into pyruvate while minting quick ATP and high-energy NADH.\n\nWith zero mitochondria on board, pyruvate steps straight to neighboring Krebs-cycle enzymes floating inches—in molecular terms—away, exhaling CO₂ out through the hull while dispatching torrents of NADH to [[Complex I|complex-i-ecoli]] on the membrane. Amidst the bustle, golden [[GroEL–GroES barrels|groel]] catch tangled newcomers from [[70S ribosomes|ribosome-ecoli]] so no enzyme stalls the line.',
        blueprint: {
          role: 'Crowded organelle-free central metabolic and proteostasis matrix ([[cytosol|cytosol]] + [[GroEL|groel]])',
          arrivesFrom: 'Imported [[glucose|glucose]] from [[inner membrane|plasma-membrane]], glycogen mobilizations from [[storage granules|storage-granule]], and nascent chains from [[ribosomes|ribosome-ecoli]]',
          inside: 'Glycolysis (e.g. GAPDH) splits glucose → 2 pyruvate + 2 ATP + 2 NADH; cytosolic TCA cycle oxidizes acetyl-CoA → NADH + CO₂; [[GroEL|groel]] folds enzymes',
          deliversTo: 'NADH electrons to [[Complex I|complex-i-ecoli]], ATP/dNTPs/NTPs/[[amino acids|amino-acid]] to [[nucleoid|real-nucleoid]] and ribosomes, and CO₂ vented across [[outer membrane|lps]]',
          loop: 'High ATP/NADH ratios allosterically brake phosphofructokinase and citrate synthase while routing surplus glucose into glycogen'
        },
        scientific:
          'Macromolecularly crowded cytoplasmic phase (~300–350 mg/mL protein + RNA, ~20–30% volume occupancy; ~2.5 × 10⁶ soluble protein molecules across ~2,000 expressed species). Houses complete Embden–Meyerhof–Parnas glycolysis (exemplified by homotetrameric GAPDH, PDB 1DC4), pentose phosphate pathway, and soluble tricarboxylic acid (TCA) cycle enzymes (except membrane-bound succinate dehydrogenase), alongside ~2,000–3,000 GroEL₁₄–GroES₇ chaperonin complexes (PDB 1AON) maintaining proteostasis.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Sugar & nutrient gates', cargo: 'Glucose & ions' },
          { nodeId: 'storage-granule', label: 'Glycogen granules', cargo: 'Mobilized glucose-1-P' },
          { nodeId: 'ribosome-ecoli', label: '70S ribosomes', cargo: 'Newly made enzymes' }
        ],
        to: [
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain', cargo: 'NADH electron carriers' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'Spent ADP + Pi' },
          { nodeId: 'storage-granule', label: 'Glycogen store', cargo: 'Surplus ADP-glucose' },
          { nodeId: 'lps', label: 'Exhaled across hull', cargo: 'Metabolic CO₂' }
        ]
      },
      es: {
        subtitle: 'El taller metabólico abarrotado de pared a pared',
        simple:
          'Ocupado en una quinta parte de su volumen por millones de enzimas, el citoplasma abierto rompe la glucosa mediante la glucólisis y el ciclo de Krebs sin necesitar mitocondrias.',
        story:
          'Olvídate de una sopa acuosa vacía: el [[citosol|cytosol]] de E. coli es un taller codo con codo repleto de dos millones y medio de [[proteínas|protein]] solubles donde nada avanza diez nanómetros sin tropezar con un vecino. La glucosa recién cruzada por las compuertas internas cae en manos de enzimas glucolíticas como GAPDH allí mismo, partiéndose en piruvato mientras rinde ATP rápido y NADH cargado.\n\nAl no haber mitocondrias, el piruvato pasa en el acto a las enzimas vecinas del ciclo de Krebs en la misma sala, exhalando CO₂ a través del casco y enviando oleadas de NADH hacia el [[Complejo I|complex-i-ecoli]] de la membrana. Entre tanto ajetreo, los barriles dorados [[GroEL–GroES|groel]] rescatan proteínas enredadas salidas de los [[ribosomas 70S|ribosome-ecoli]] para que ninguna pieza atasque la cadena.',
        blueprint: {
          role: 'Matriz central abarrotada de metabolismo energético, biosíntesis y proteostasis ([[citosol|cytosol]] + [[GroEL|groel]])',
          arrivesFrom: '[[Glucosa|glucose]] importada por la [[membrana interna|plasma-membrane]], reservas de [[gránulos de glucógeno|storage-granule]] y enzimas de [[ribosomas|ribosome-ecoli]]',
          inside: 'Glucólisis (GAPDH) parte glucosa → 2 piruvato + 2 ATP + 2 NADH; el ciclo TCA citosólico genera NADH + CO₂; [[GroEL|groel]] pliega proteínas',
          deliversTo: 'NADH al [[Complejo I|complex-i-ecoli]], ladrillos y ATP hacia el [[nucleoide|real-nucleoid]] y ribosomas, y CO₂ exhalado por el [[casco externo|lps]]',
          loop: 'El exceso de ATP y NADH frena alostéricamente la glucólisis y desvía el azúcar sobrante hacia gránulos de glucógeno'
        },
        scientific:
          'Fase citoplasmática de alta aglomeración macromolecular (~300–350 mg/mL de proteína + ARN, ~20–30% de fracción volumétrica ocupada; ~2,5 × 10⁶ proteínas solubles de ~2.000 especies expresadas). Ejecuta en solución la vía glucolítica Embden–Meyerhof–Parnas (representada por GAPDH tetramérica, PDB 1DC4), ruta de las pentosas fosfato y ciclo del ácido cítrico (salvo la succinato deshidrogenasa membranosa), asistida por ~2.000–3.000 complejos chaperonina GroEL₁₄–GroES₇ (PDB 1AON).',
        from: [
          { nodeId: 'plasma-membrane', label: 'Permeasas internas', cargo: 'Glucosa e iones' },
          { nodeId: 'storage-granule', label: 'Gránulos de glucógeno', cargo: 'Glucosa-1-P liberada' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Enzimas nuevas' }
        ],
        to: [
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria', cargo: 'Portadores NADH' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ADP gastado + Pi' },
          { nodeId: 'storage-granule', label: 'Reserva de glucógeno', cargo: 'Excedente de glucosa' },
          { nodeId: 'lps', label: 'Exhalación transenvoltura', cargo: 'CO₂ metabólico' }
        ]
      }
    },

    glycogen: {
      en: {
        subtitle: 'Osmosis-Safe Sugar Snowballs',
        simple:
          'When sugar is plentiful, E. coli links spare glucose into dense branched glycogen rosettes—storing emergency fuel without drawing osmotic water into the cell, then shaving it back off when food runs out.',
        story:
          'Feasts in the gut arrive in sudden waves and vanish just as fast, yet hoarding millions of loose [[glucose|glucose]] molecules in the cytosol would draw in enough osmotic water to pop the hull. Instead, whenever carbon overflows while nitrogen or sulfur runs short, cytoplasmic enzymes spend ATP from [[ATP synthase|atp-synthase-ecoli]] to snap spare sugars into compact, bush-like [[glycogen rosettes|storage-granule]] tucked outside the nucleoid.\n\nEach 40-nanometre snowball locks away thousands of glucose units at the osmotic cost of a single molecule. The instant external sugar dries up, GlgP phosphorylases nibble the outer branches back into glucose-1-phosphate—keeping glycolysis, [[Complex I|complex-i-ecoli]], and [[flagellar motors|real-motor]] powered while the submarine hunts its next meal.',
        blueprint: {
          role: 'Branched α-glucan cytoplasmic energy buffer ([[glycogen storage granules|storage-granule]])',
          arrivesFrom: 'Surplus [[glucose|glucose]]-6-phosphate in [[cytosol|cytosol]] activated with ATP from [[ATP synthase|atp-synthase-ecoli]]',
          inside: '~40–50 nm rosettes of α-(1→4)-linked glucose chains with α-(1→6) branches built by GlgC/GlgA/GlgB and mobilized by GlgP/GlgX',
          deliversTo: 'Glucose-1-[[phosphate|phosphate]] released directly into [[cytosol|cytosol]] glycolysis during carbon starvation',
          loop: 'Fructose-1,6-bisphosphate activates GlgC during sugar feasts, while AMP activates GlgP breakdown when ATP drops'
        },
        scientific:
          'Non-membrane-bound cytoplasmic α-polysaccharide inclusions (~30–60 nm β-particles, ~10⁷ Da, ~20,000–50,000 glucosyl units per granule) localized predominantly at the cell poles/nucleoid periphery. Rate-limiting ADP-glucose pyrophosphorylase (GlgC: ATP + G1P → ADP-Glc + PPi) feeds glycogen synthase (GlgA, α-1,4 linkages) and branching enzyme (GlgB, α-1,6 branches every ~8–12 residues); catabolized phosphorolytically by glycogen phosphorylase (GlgP + Pi → G1P, saving 1 ATP vs. free glucose hexokinase phosphorylation) and debranching enzyme GlgX.',
        from: [
          { nodeId: 'cytosol', label: 'Cytoplasmic glycolysis', cargo: 'Spare glucose-1-P' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP synthase', cargo: 'ATP for ADP-glucose' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Starvation glycolysis', cargo: 'Glucose-1-phosphate' },
          { nodeId: 'complex-i-ecoli', label: 'Respiratory chain (via NADH)', cargo: 'Emergency electron fuel' }
        ]
      },
      es: {
        subtitle: 'Copos compactos de azúcar sin peaje osmótico',
        simple:
          'Cuando sobra comida, E. coli enlaza la glucosa extra en tupidas rosetas ramificadas de glucógeno: guarda combustible de emergencia sin hinchar la célula de agua y vuelve a soltarlo cuando llega el ayuno.',
        story:
          'En el intestino los banquetes llegan de golpe y se esfuman igual de rápido, pero acumular millones de moléculas sueltas de [[glucosa|glucose]] en el citosol atraería tanta agua por ósmosis que reventaría el casco. Por eso, cuando abunda el carbono pero falta nitrógeno para crecer, las enzimas invierten ATP de la [[ATP sintasa|atp-synthase-ecoli]] en engarzar el azúcar sobrante formando tupidas [[rosetas de glucógeno|storage-granule]] fuera del nucleoide.\n\nCada copo de 40 nanómetros guarda decenas de miles de azúcares pagando el precio osmótico de una sola molécula. En cuanto se agota el alimento exterior, las fosforilasas GlgP podan las ramas externas liberando glucosa-1-fosfato lista para sostener la glucólisis, el [[Complejo I|complex-i-ecoli]] y los [[motores flagelares|real-motor]] mientras el submarino busca otro rastro.',
        blueprint: {
          role: 'Amortiguador energético citoplasmático de α-glucano ramificado ([[gránulos de glucógeno|storage-granule]])',
          arrivesFrom: 'Excedente de [[glucosa|glucose]]-6-fosfato en el [[citosol|cytosol]] activado con ATP de la [[ATP sintasa|atp-synthase-ecoli]]',
          inside: 'Rosetas (~40–50 nm) de cadenas α-(1→4) con ramas α-(1→6) tejidas por GlgC/GlgA/GlgB y degradadas por GlgP/GlgX',
          deliversTo: 'Glucosa-1-[[fosfato|phosphate]] inyectada directamente a la glucólisis del [[citosol|cytosol]] durante el ayuno',
          loop: 'Los intermediarios abundantes de azúcar activan la síntesis en GlgC, mientras la subida de AMP dispara la poda cuando cae el ATP'
        },
        scientific:
          'Inclusiones citoplasmáticas no membranosas de α-polisacárido ramificado (partículas β de ~30–60 nm, ~10⁷ Da, ~20.000–50.000 residuos glucosil/gránulo) situadas en la periferia del nucleoide y los polos celulares. Sintetizadas por la ADP-glucosa pirofosforilasa (GlgC: ATP + G1P → ADP-Glc + PPi), glucógeno sintasa (GlgA, enlaces α-1,4) y enzima ramificante (GlgB, ramas α-1,6 cada ~8–12 residuos); movilizadas fosforolíticamente por GlgP (+ Pi → G1P, ahorrando 1 ATP frente a glucosa libre) y desramificante GlgX.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol en abundancia', cargo: 'Glucosa-1-P sobrante' },
          { nodeId: 'atp-synthase-ecoli', label: 'ATP sintasa', cargo: 'ATP para ADP-glucosa' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Glucólisis de rescate', cargo: 'Glucosa-1-fosfato' },
          { nodeId: 'complex-i-ecoli', label: 'Cadena respiratoria (vía NADH)', cargo: 'Combustible de emergencia' }
        ]
      }
    }
  }
};
