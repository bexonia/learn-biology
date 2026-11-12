import type { NodeLensMap, PagePartLensMap } from './types.js';

export const PROKARYOTE_NODE_LENSES: NodeLensMap = {
  prokaryote: {
    en: {
      simple:
        'A bacterium is the Millennium Falcon of cells: a hot-rodded, open-cockpit speedrunner with zero internal walls, reading DNA and printing proteins side by side inside one armored hull.',
      story:
        'Welcome aboard the Millennium Falcon of biology—a stripped-down speedrunner that ripped out every internal office wall so the whole crew works shoulder-to-shoulder at hyperspeed! Nutrients slip through [[outer-membrane porins|porin]] straight into the open cabin, where enzymes crack fuel on sight and hurl electrons into the [[plasma membrane|plasma-membrane]] to charge the entire hull like a live Arc-Reactor battery.\n\nBecause no nuclear vault locks away the [[nucleoid|nucleoid]], [[70S ribosomes|ribosome-70s]] jump onto messenger RNA while [[RNA polymerase|rna-polymerase]] is still printing it! Bonus Pokémon-style TM plasmids trade survival upgrades, Senzu-bean fuel snowballs pack the pantry, and Anakin-grade pod-racer flagella rocket the ship toward its next meal—letting one cell double in twenty minutes flat.',
      blueprint:
        'Role: Autonomous open-plan microbial cell · From: Extracellular nutrients, ions, and O₂ across [[porins|porin]] and [[plasma membrane|plasma-membrane]] · Inside: Unenclosed [[nucleoid|nucleoid]] runs coupled transcription–translation via [[RNA polymerase|rna-polymerase]] and [[70S ribosomes|ribosome-70s]] while membrane proton gradients power ATP synthesis · To: Daughter cells via binary fission, horizontally shared [[plasmids|plasmid]], and proton-driven [[flagellar|flagellum]] thrust',
      scientific:
        'Unicellular prokaryotic organism lacking membrane-bound organelles or a nuclear envelope (typical rod dimensions 1–5 µm × 0.5–1 µm; cytoplasmic volume ~0.6–2 fL; macromolecular crowding ~300–400 mg/mL). Genetic material comprises a circular supercoiled dsDNA chromosome (~0.6–10 Mbp) condensed in a phase-separated nucleoid plus optional episomal plasmids. Bioenergetics operate directly across the cytoplasmic membrane (Δp ≈ −140 to −200 mV), driving F₁F₀ ATP synthases, secondary active transporters, RND efflux pumps, and H⁺/Na⁺-coupled rotary flagellar motors.'
    },
    es: {
      simple:
        'Una bacteria es el Halcón Milenario de las células: un bólido de cabina abierta sin tabiques internos que lee su ADN e imprime proteínas al mismo tiempo dentro de un casco blindado.',
      story:
        'Bienvenido a bordo del Halcón Milenario de la biología: un carguero trucado que derribó todos los despachos internos para que su tripulación trabaje codo con codo a velocidad hiperespacial. Los nutrientes cruzan las [[porinas|porin]] directo al taller abierto, donde las enzimas parten combustible al vuelo e inyectan electrones en la [[membrana plasmática|plasma-membrane]] para cargar todo el casco como una batería viva.\n\nAl no haber aduana nuclear sobre el [[nucleoide|nucleoid]], los [[ribosomas 70S|ribosome-70s]] saltan sobre el ARN mensajero mientras la [[ARN polimerasa|rna-polymerase]] aún lo está imprimiendo. Plásmidos estilo MT de Pokémon intercambian mejoras, gránulos energéticos llenan la despensa y turbinas flagelares lanzan la nave para duplicarse en solo veinte minutos.',
      blueprint:
        'Rol: Célula microbiana autónoma sin compartimentos membranosos · De: Nutrientes, iones y O₂ extracelulares vía [[porinas|porin]] y [[membrana plasmática|plasma-membrane]] · Dentro: El [[nucleoide|nucleoid]] abierto acopla transcripción y traducción entre [[ARN polimerasa|rna-polymerase]] y [[ribosomas 70S|ribosome-70s]] mientras el gradiente protónico de membrana genera ATP · Hacia: Células hijas por fisión binaria, [[plásmidos|plasmid]] transferibles y propulsión rotatoria por [[flagelos|flagellum]]',
      scientific:
        'Organismo unicelular procariota carente de envoltura nuclear y de orgánulos delimitados por bicapas lipídicas (dimensiones típicas de bacilo 1–5 µm × 0,5–1 µm; volumen citoplasmático ~0,6–2 fL; concentración macromolecular ~300–400 mg/mL). El genoma consta de un cromosoma circular superenrollado de ADNbc (~0,6–10 Mpb) organizado en el nucleoide más plásmidos extracromosómicos opcionales. La bioenergética reside en la membrana citoplasmática (Δp ≈ −140 a −200 mV), alimentando ATP sintasas F₁F₀, cotransportadores secundarios, bombas de eflujo y motores flagelares rotatorios.'
    }
  },

  'bacterial-wall': {
    en: {
      simple:
        'Built like a three-layer Iron Man suit, the bacterial envelope pairs an outer chemical deflector shield, a middle Mithril chainmail corset, and an inner Arc-Reactor skin.',
      story:
        'Swimming through gut bile and crushing water pressure would pop a naked cell in milliseconds, so a Gram-negative bacterium wears a three-deck Iron Man Mark-III armor suit. Outside, bristling [[lipopolysaccharide|lps]] tiles deflect greasy toxins like Beskar plating while size-checked [[porin|porin]] airlocks let small sugars trickle into the moat-like periplasm.\n\nFloating in that moat, one seamless Mithril-style bag of [[peptidoglycan|peptidoglycan]] holds back atmospheres of internal turgor pressure, bolted above the [[plasma membrane|plasma-membrane]] where respiratory pumps pack protons into the gap. Those banked protons roar back inward to spin [[ATP synthases|atp-synthase]] and pod-racer flagella—turning everyday armor into a live power plant!',
      blueprint:
        'Role: Triple-layer Gram-negative armor, osmotic brace, and chemiosmotic capacitor · From: Extracellular solutes entering [[porins|porin]] and cytoplasmic precursors/electrons arriving at [[plasma membrane|plasma-membrane]] · Inside: Asymmetric [[LPS|lps]] outer membrane filters toxins, periplasmic [[peptidoglycan|peptidoglycan]] resists turgor, and periplasm stores pumped H⁺ · To: Cytoplasmic nutrient importers, [[ATP synthase|atp-synthase]], and [[flagellar|flagellum]] stators',
      scientific:
        'Gram-negative tripartite cell envelope (~30–40 nm total thickness) comprising: (1) an asymmetric outer membrane (~7 nm) with a phospholipid inner leaflet, lipopolysaccharide (LPS) outer leaflet, and β-barrel porins; (2) an aqueous, oxidizing periplasm (~15–25 nm wide, 20–40% of cell volume in osmoshock) housing a monolayered ~2–7 nm peptidoglycan sacculus tethered via Braun’s lipoprotein (Lpp) and OmpA; and (3) a symmetric phospholipid inner membrane (~7 nm) maintaining the proton-motive force and housing respiratory, transport, and Sec/Tat translocation complexes.'
    },
    es: {
      simple:
        'Construida como una armadura de Iron Man en tres capas, la envoltura bacteriana combina un escudo químico exterior, una cota de malla tipo mithril y una piel interna generadora.',
      story:
        'Nadar entre sales biliares y una presión osmótica brutal reventaría cualquier burbuja desnuda en milisegundos, así que la bacteria Gram-negativa viste un traje de Iron Man de triple cubierta. Afuera, cepillos de [[lipopolisacárido|lps]] repelen venenos grasos como placas de beskar mientras esclusas de [[porina|porin]] filtran azúcares menudos hacia el foso periplásmico.\n\nEn ese foso flota un saco continuo de [[peptidoglicano|peptidoglycan]] digno de una cota de mithril que frena atmósferas enteras de presión, sujeto sobre la [[membrana plasmática|plasma-membrane]] cuyas bombas llenan el espacio de protones. Su regreso en avalancha hace girar la [[ATP sintasa|atp-synthase]] y los flagelos, convirtiendo la muralla en un auténtico Reactor Arc.',
      blueprint:
        'Rol: Blindaje Gram-negativo tricapa, contención osmótica y condensador quimiosmótico · De: Solutos externos vía [[porinas|porin]] y precursores/electrones citoplasmáticos hacia la [[membrana plasmática|plasma-membrane]] · Dentro: Membrana externa con [[LPS|lps]] filtra tóxicos, [[peptidoglicano|peptidoglycan]] soporta la turgencia y el periplasma acumula H⁺ · Hacia: Importadores de nutrientes, [[ATP sintasa|atp-synthase]] y motores de [[flagelo|flagellum]]',
      scientific:
        'Envoltura celular Gram-negativa tripartita (~30–40 nm de espesor total) integrada por: (1) membrana externa asimétrica (~7 nm) con hemicapa interna fosfolipídica, hemicapa externa de lipopolisacárido (LPS) y barriles β porínicos; (2) periplasma oxidante (~15–25 nm de anchura) que aloja el sáculo monocapa de peptidoglicano (~2–7 nm) anclado covalentemente por la lipoproteína de Braun (Lpp) y no covalentemente por OmpA; y (3) membrana interna fosfolipídica (~7 nm) sede de la fuerza protón-motriz, complejos respiratorios, permeasas y translocones Sec/Tat.'
    }
  },

  peptidoglycan: {
    en: {
      simple:
        'Woven like Frodo’s Mithril chainmail shirt around the entire bacterium, peptidoglycan is one unbroken sugar-and-peptide bag that keeps internal water pressure from blowing the cell apart.',
      story:
        'Forged inside the cytosol from [[glucose|glucose]] derivatives and mirror-image D-[[amino acids|amino-acid]] that baffle ordinary proteases, fresh Lipid II bricks flip across the inner membrane to tireless periplasmic welders. Transglycosylases snap NAG–NAM sugars into hoop girders while transpeptidases staple hoop to hoop into one cell-sized Mithril chainmail shirt.\n\nWithout this elastic corset inside the [[cell envelope|bacterial-wall]], turgor pressure would pop the [[plasma membrane|plasma-membrane]] like an overfilled cartoon water balloon—which is why penicillin disguises itself as a D-amino acid staple to jam the welders mid-stitch! Meanwhile, [[flagellar motors|real-motor]] bolt straight onto this mesh for rock-solid torque.',
      blueprint:
        'Role: Load-bearing covalent exoskeleton (murein sacculus) · From: Cytoplasmic UDP-MurNAc-pentapeptide and UDP-GlcNAc built from [[glucose|glucose]] and [[amino acids|amino-acid]], flipped as Lipid II across [[plasma membrane|plasma-membrane]] · Inside: Glycan strands of β-(1→4)-linked GlcNAc–MurNAc cross-linked by short D/L-peptide stems via PBP/SEDS enzymes · To: Structural anchor for [[bacterial envelope|bacterial-wall]], Braun’s lipoprotein, and [[flagellar|flagellum]] MotB stators',
      scientific:
        'Single bag-shaped heteropolymer macromolecule (~3 × 10⁶ Da to >10⁹ Da; ~2–7 nm thick in Gram-negatives, 20–80 nm in Gram-positives) withstood turgor pressures of ~2–5 atm (Gram-negative) to ~20 atm (Gram-positive). Composed of linear glycan chains of alternating N-acetylglucosamine (GlcNAc/NAG) and N-acetylmuramic acid (MurNAc/NAM) joined by β-1,4 glycosidic bonds (cleaved by lysozyme), cross-linked via lactyl-attached stem peptides (typically L-Ala–γ-D-Glu–meso-DAP–D-Ala–D-Ala in E. coli, 4→3 or 3→3 cross-links). Transpeptidation by penicillin-binding proteins (PBPs) is irreversibly acylated by β-lactam antibiotics.'
    },
    es: {
      simple:
        'Tejido como la cota de malla de mithril de Frodo alrededor de toda la bacteria, el peptidoglicano es un saco continuo de azúcar y péptidos que evita que la presión reviente la célula.',
      story:
        'Forjados en el citosol con derivados de [[glucosa|glucose]] e inusuales D-[[aminoácidos|amino-acid]] invisibles para las proteasas comunes, los ladrillos de Lípido II voltean la membrana interna hacia soldadores incansables del periplasma. Estos ensamblan azúcares NAG–NAM en largos aros y los engrapan entre sí hasta cerrar una única camisa de mithril del tamaño de toda la célula.\n\nSin este corsé elástico dentro de la [[envoltura bacteriana|bacterial-wall]], la presión interna reventaría la [[membrana plasmática|plasma-membrane]] como un globo de dibujos animados; por eso la penicilina imita esas grapas para atascar a los soldadores en plena obra. Además, los estatores del [[motor flagelar|real-motor]] se atornillan a esta red para ganar apoyo.',
      blueprint:
        'Rol: Exoesqueleto covalente resistente a la turgencia (sáculo de mureína) · De: Precursores de [[glucosa|glucose]] y [[aminoácidos|amino-acid]] exportados como Lípido II por la [[membrana plasmática|plasma-membrane]] · Dentro: Cadenas de β-(1→4)-GlcNAc–MurNAc entrecruzadas por péptidos cortos con D-aminoácidos mediante enzimas PBP/SEDS · Hacia: Soporte mecánico de la [[envoltura celular|bacterial-wall]], lipoproteína Lpp y estatores del [[flagelo|flagellum]]',
      scientific:
        'Macromolécula heteropolimérica única en forma de saco (~2–7 nm de grosor en Gram-negativas; 20–80 nm en Gram-positivas) que soporta presiones osmóticas de ~2–5 atm (Gram-negativas) hasta ~20 atm (Gram-positivas). Constituida por hebras lineales alternas de N-acetilglucosamina (NAG/GlcNAc) y ácido N-acetilmurámico (NAM/MurNAc) con enlaces β-(1→4) sensibles a lisozima, reticuladas mediante tetrapéptidos unidos al grupo D-lactilo del NAM (L-Ala–γ-D-Glu–meso-DAP–D-Ala en E. coli, enlaces 4→3 o 3→3). Las transpeptidasas PBP sufren acilación irreversible por antibióticos β-lactámicos.'
    }
  },

  nucleoid: {
    en: {
      simple:
        'Ditching the slow bureaucracy of a nucleus, a bacterium parks its folded chromosome right on the open factory floor so genes are read and built into proteins at the exact same second.',
      story:
        'Unspool a bacterium’s single loop of [[DNA|dna]] and it stretches a full millimetre—a thousand times longer than the ship—yet here it coils right in the open Millennium Falcon cabin with zero walls around it! Agile [[HU|hu-protein]] clips and Doctor Strange-style [[gyrase|gyrase]] twist the helix into hundreds of spring-loaded plectoneme loops ready to pop open on cue.\n\nWith no nuclear customs booth slowing paperwork down, [[RNA polymerase|rna-polymerase]] latches straight onto exposed DNA and reels out mRNA whose front tip is immediately boarded by [[70S ribosomes|ribosome-70s]]. Before the back end of a gene even finishes printing, finished enzymes are already leaping into battle!',
      blueprint:
        'Role: Membrane-free chromosomal command center · From: Cytoplasmic [[nucleotides|nucleotide]], ATP, and architectural proteins ([[HU|hu-protein]], [[gyrase|gyrase]]) · Inside: Circular [[DNA|dna]] chromosome compacted into negatively supercoiled plectonemic domains read directly by [[RNA polymerase|rna-polymerase]] · To: Nascent [[RNA|rna]] transcripts immediately translated at the periphery by [[70S ribosomes|ribosome-70s]] into [[polypeptides|polypeptide]]',
      scientific:
        'Non-membrane-bound sub-micrometre cytoplasmic phase (~0.5–1.5 µm) housing the bacterial circular chromosome (typically 1–5 Mbp; ~1.6 mm contour length in E. coli compacted ~10³-fold). Compaction relies on negative supercoiling (σ ≈ −0.05 maintained by DNA gyrase vs. topoisomerase I), macromolecular crowding depletion forces from cytoplasmic polysomes, and nucleoid-associated proteins (NAPs: HU, H-NS, Fis, IHF, MukBEF SMC condensin) organizing ~10 kb topological macrodomains while permitting co-transcriptional translation.'
    },
    es: {
      simple:
        'Sin la burocracia de un núcleo cerrado, la bacteria pliega su cromosoma gigante en medio del taller abierto para leer genes e imprimir proteínas en el mismo instante.',
      story:
        'Si estiraras el aro de [[ADN|dna]] bacteriano mediría un milímetro entero —mil veces su nave—, pero aquí se pliega en plena cabina abierta del Halcón Milenario sin un solo muro alrededor. Ágiles pinzas [[HU|hu-protein]] y la [[ADN girasa|gyrase]] al estilo Doctor Strange retuercen la hélice en cientos de bucles elásticos listos para abrirse al menor aviso.\n\nSin aduana nuclear que retrase el papeleo, la [[ARN polimerasa|rna-polymerase]] muerde el bucle expuesto y saca ARN cuya punta abordan en el acto los [[ribosomas 70S|ribosome-70s]]. Antes siquiera de terminar de leerse el final del gen, las primeras proteínas ya salen listas al combate.',
      blueprint:
        'Rol: Centro de mando cromosómico sin membrana nuclear · De: [[Nucleótidos|nucleotide]], ATP y proteínas arquitectónicas ([[HU|hu-protein]], [[girasa|gyrase]]) del citoplasma · Dentro: Cromosoma circular de [[ADN|dna]] plegado en dominios plectonémicos superenrollados leídos in situ por la [[ARN polimerasa|rna-polymerase]] · Hacia: Hebras nacientes de [[ARN|rna]] traducidas simultáneamente por [[ribosomas 70S|ribosome-70s]] en [[polipéptidos|polypeptide]]',
      scientific:
        'Región citoplasmática submicrométrica segregada por fase (~0,5–1,5 µm) sin membrana envolvente que contiene el cromosoma circular bacteriano (1–5 Mpb; ~1,6 mm de longitud de contorno en E. coli compactado ~10³ veces). Su organización combina superenrollamiento negativo (σ ≈ −0,05 mantenido por ADN girasa frente a topoisomerasa I), fuerzas entrópicas de exclusión por polisomas periféricos y proteínas asociadas al nucleoide (NAP: HU, H-NS, Fis, IHF y condensina MukBEF) en bucles topológicos de ~10 kb con acoplamiento directo transcripción-traducción.'
    }
  },

  plasmid: {
    en: {
      simple:
        'Plasmids are the Pokémon TM skill-discs of the microbial world—small bonus DNA rings carrying special moves like "Antibiotic Shield" that bacteria trade with neighbors.',
      story:
        'Picture plasmids as Pokémon Technical Machine skill-discs floating outside the main [[nucleoid|nucleoid]], sipping [[nucleotides|nucleotide]] from the cytosol to copy their compact DNA loops whenever they please. When an antibiotic boss battle begins, [[RNA polymerase|rna-polymerase]] sprints around a resistance plasmid so [[70S ribosomes|ribosome-70s]] flood the ship with beta-lactamase drug shredders or efflux pumps.\n\nWilder still, conjugative plasmids run their own Game Boy Link-Cable trade: they order the bacterium to fire a hollow mating [[pilus|pilus]] grappling hook into a neighbor and beam a copy of the new survival move straight across species lines in minutes!',
      blueprint:
        'Role: Extrachromosomal mobile genetic module · From: Host cytoplasmic [[nucleotides|nucleotide]], replication enzymes, or horizontal transfer via conjugative [[pilus|pilus]] · Inside: Supercoiled circular ds[[DNA|dna]] (1–200 kb) with autonomous origin of replication and accessory operons · To: [[RNA polymerase|rna-polymerase]] and [[70S ribosomes|ribosome-70s]] for resistance/virulence [[proteins|protein]], plus recipient bacteria via conjugation',
      scientific:
        'Autonomous, covalently closed circular (or occasionally linear) extrachromosomal dsDNA replicons ranging from ~1 kb high-copy elements (15–500 copies/cell, θ or rolling-circle replication controlled by antisense RNA/iterons) to >100–200 kb low-copy conjugative plasmids (1–2 copies/cell, actively segregated by ParABS/Stb partitioning systems). Encode non-essential adaptive traits including β-lactamases, RND/MFS efflux determinants, heavy-metal resistance, bacteriocins, virulence factors, and Type IV secretion/relaxosome tra operons.'
    },
    es: {
      simple:
        'Los plásmidos son los discos MT de Pokémon del mundo microbiano: pequeños aros extra de ADN con movimientos especiales como «Escudo Antibiótico» que las bacterias intercambian.',
      story:
        'Imagina los plásmidos como Máquinas Técnicas de Pokémon flotando fuera del [[nucleoide|nucleoid]] central, tomando [[nucleótidos|nucleotide]] del citosol para duplicar sus pequeños anillos a su aire. Si estalla un combate jefe contra antibióticos, la [[ARN polimerasa|rna-polymerase]] recorre el disco a toda mecha para que los [[ribosomas 70S|ribosome-70s]] inunden la nave de enzimas rompe-fármacos y bombas de achique.\n\nMejor aún, los plásmidos conjugativos traen su propio Cable Link de Game Boy: tienden un [[pilus|pilus]] hueco como garfio hacia una bacteria vecina y le transfieren en minutos el nuevo movimiento de resistencia incluso entre especies distintas.',
      blueprint:
        'Rol: Módulo genético móvil extracromosómico · De: [[Nucleótidos|nucleotide]] y polimerasas del huésped, o transferencia horizontal mediante [[pilus|pilus]] conjugativo · Dentro: [[ADN|dna]] bicatenario circular superenrollado (1–200 kb) con origen autónomo (oriV) y operones accesorios · Hacia: [[ARN polimerasa|rna-polymerase]] y [[ribosomas 70S|ribosome-70s]] para sintetizar [[proteínas|protein]] adaptativas, y células receptoras por conjugación',
      scientific:
        'Replicones autónomos extracromosómicos de ADNbc circular covalentemente cerrado (~1–200 kb), desde plásmidos multicopia pequeños (15–500 copias/célula; replicación θ o en círculo rodante regulada por ARN antisentido o iterones) hasta megaplásmidos conjugativos de bajo número de copias (1–2 copias/célula; segregación activa mediante sistemas ParABS). Portan determinantes adaptativos como β-lactamasas, bombas de resistencia, factores de virulencia, rutas catabólicas y operones tra de secreción tipo IV/relaxosoma.'
    }
  },

  'ribosome-70s': {
    en: {
      simple:
        'Built like a Formula-1 pit crew five times faster than human ribosomes, the sleek 70S printer stitches twenty amino acids a second—though its trim shape gives antibiotics a custom target.',
      story:
        'Barely clear of the [[nucleoid|nucleoid]], a fresh mRNA ribbon gets ambushed by a [[30S small subunit|ribo-30s]] barcode scanner, which snaps a [[50S large subunit|ribo-50s]] anvil on top like a sub-two-second Formula-1 pit-stop clamp! Turbo-charged [[tRNAs|trna]] rocket in from the cytosol, clicking through at twenty amino-acid welds per second—nearly five times faster than our heavier human 80S models.\n\nFinished chains snake out the back tunnel straight into Iron Man-style [[GroEL chaperonins|groel]] or membrane gates. That lightweight 70S chassis hides just one Death Star exhaust port: antibiotics like tetracycline and erythromycin jam its pockets like custom wrenches while leaving human 80S ribosomes untouched!',
      blueprint:
        'Role: Coupled prokaryotic translation machine · From: Nascent m[[RNA|rna]] from [[RNA polymerase|rna-polymerase]], aminoacyl-[[tRNAs|trna]], and GTP · Inside: [[30S subunit|ribo-30s]] decodes codons while [[50S subunit|ribo-50s]] 23S rRNA catalyzes peptide bonds at ~15–22 aa/s · To: Folded cytoplasmic [[proteins|protein]] (via [[GroEL|groel]]) and membrane/periplasmic proteins via [[plasma membrane|plasma-membrane]] Sec translocons',
      scientific:
        'Bacterial 70S ribonucleoprotein complex (~2.5 MDa, ~20–25 nm diameter; ~65% rRNA, ~35% protein by mass) assembled from a 30S small subunit (16S rRNA + 21 proteins, S1–S21) and a 50S large subunit (23S + 5S rRNA + 33 proteins, L1–L36). Initiates via 16S rRNA anti-Shine–Dalgarno base-pairing with purine-rich mRNA 5′ leaders plus fMet-tRNAfMet and IF1–IF3; elongates at 15–222 peptide bonds/min (~20 aa/s at 37 °C) using EF-Tu·GTP and EF-G·GTP. Primary target of aminoglycosides, tetracyclines, macrolides, chloramphenicol, and oxazolidinones.'
    },
    es: {
      simple:
        'Como un equipo de boxes de Fórmula 1 cinco veces más veloz que el ribosoma humano, la impresora 70S cose veinte aminoácidos por segundo, aunque su chasis ligero ofrece blanco a los antibióticos.',
      story:
        'Apenas asoma del [[nucleoide|nucleoid]], el ARNm es interceptado por el escáner de la [[subunidad menor 30S|ribo-30s]], que encaja encima la [[subunidad mayor 50S|ribo-50s]] con precisión de parada en boxes de Fórmula 1. Ráfagas de [[ARNt|trna]] entran disparadas soldando veinte aminoácidos por segundo, casi cinco veces más rápido que nuestras pesadas máquinas humanas 80S.\n\nLas cadenas nuevas salen por el túnel trasero directo hacia cabinas [[GroEL|groel]] estilo Iron Man o poros de membrana. Ese chasis 70S ligero esconde un único punto débil digno de la Estrella de la Muerte: antibióticos como la tetraciclina o la eritromicina bloquean sus huecos a medida sin rozar nuestros ribosomas.',
      blueprint:
        'Rol: Máquina procariota de traducción acoplada · De: ARNm naciente de [[ARN polimerasa|rna-polymerase]], aminoacil-[[ARNt|trna]] y GTP · Dentro: La [[subunidad 30S|ribo-30s]] verifica codones y la [[subunidad 50S|ribo-50s]] une aminoácidos a ~15–22 aa/s · Hacia: [[Proteínas|protein]] citoplasmáticas (asistidas por [[GroEL|groel]]) y proteínas de envoltura vía [[membrana plasmática|plasma-membrane]]',
      scientific:
        'Complejo ribonucleoproteico bacteriano 70S (~2,5 MDa, ~20–25 nm de diámetro; ~65% ARNr y ~35% proteínas en masa) integrado por la subunidad menor 30S (ARNr 16S + 21 proteínas) y la subunidad mayor 50S (ARNr 23S y 5S + 33 proteínas). Inicia mediante apareamiento anti-Shine–Dalgarno del ARNr 16S con el líder 5′ del ARNm junto a fMet-ARNtfMet e IF1–IF3; elonga a ~15–22 aa/s a 37 °C asistido por EF-Tu·GTP y EF-G·GTP. Diana selectiva de aminoglucósidos, tetraciclinas, macrólidos, cloranfenicol y oxazolidinonas.'
    }
  },

  flagellum: {
    en: {
      simple:
        'Built like Anakin Skywalker’s pod-racer turbine, the bacterial flagellum is a true proton-powered rotary motor and corkscrew propeller that screams at hundreds of turns per second.',
      story:
        'Forget flapping fishtails—this is Anakin’s Boonta Eve pod-racer engine bolted straight through the [[cell envelope|bacterial-wall]] and braced on [[peptidoglycan|peptidoglycan]] armor! Protons banked in the periplasm by the [[respiratory chain|electron-transport-chain]] pour down MotA/MotB stator chutes in the [[plasma membrane|plasma-membrane]], kicking rotor gear-teeth up to 18,000 RPM in E. coli and over 100,000 RPM in marine speedsters!\n\nOutside, a flexible universal-joint hook whips a hollow flagellin corkscrew into a tight thrust braid shooting up a sugar trail. One panic ping from the [[chemoreceptor array|real-pole]] slams the gearbox into reverse in a single millisecond, blowing the braid apart into an acrobatic tumble onto a sweeter heading.',
      blueprint:
        'Role: Proton-driven rotary propulsion nanomachine · From: Periplasmic H⁺ gradient generated by [[respiratory chain|electron-transport-chain]] and directional signals from [[chemoreceptor array|real-pole]] · Inside: [[Peptidoglycan|peptidoglycan]]-anchored stators in [[plasma membrane|plasma-membrane]] torque the basal rotor, universal hook, and helical flagellin [[protein|protein]] filament · To: Hydrodynamic thrust (~25–35 µm/s runs and reorienting tumbles) and spent H⁺ returned to [[cytosol|cytosol]]',
      scientific:
        'Trans-envelope rotary nanomachine (~20 nm filament diameter, 5–20 µm length; ~45 nm basal body) built from ~30 distinct proteins via an axial Type III export apparatus. Comprises cytoplasmic C-ring switch (FliG/FliM/FliN), inner-membrane MS-ring (FliF), periplasmic/outer-membrane P- and L-ring bushings (FlgI/FlgH), 55-nm universal-joint hook (FlgE), and left-handed helical flagellin (FliC) filament (~11 protofilaments, 2.3 µm pitch). Up to 11 peptidoglycan-anchored MotA₅MotB₂ stator complexes conduct ~1,200 H⁺/rev down Δp, generating ~1,000–4,000 pN·nm torque at 100–300 Hz (~18,000 rpm in E. coli; >1,000 Hz in Na⁺-driven Vibrio motors).'
    },
    es: {
      simple:
        'Construido como la turbina de vainas de Anakin Skywalker, el flagelo bacteriano es un motor rotatorio real movido por protones que gira cientos de veces por segundo.',
      story:
        'Olvida los coletazos musculares: esto es la turbina de carreras de Anakin en Star Wars atornillada a través de la [[envoltura celular|bacterial-wall]] y calzada en la malla de [[peptidoglicano|peptidoglycan]]. Los protones acumulados por la [[cadena respiratoria|electron-transport-chain]] caen por estatores MotA/MotB de la [[membrana plasmática|plasma-membrane]], pateando el rotor hasta 18.000 RPM en E. coli y más de 100.000 RPM en velocistas marinos.\n\nAfuera, un codo universal flexible transmite el giro a un sacacorchos hueco de flagelina trenzado en chorro propulsor rumbo al azúcar. Si llega una alerta de la [[matriz de quimiorreceptores|real-pole]], el motor mete marcha atrás en un solo milisegundo y da un trompo acrobático hacia un nuevo rumbo.',
      blueprint:
        'Rol: Nanomáquina rotatoria de propulsión impulsada por protones · De: Gradiente de H⁺ periplásmico de la [[cadena respiratoria|electron-transport-chain]] y señales de giro desde la [[matriz de quimiorreceptores|real-pole]] · Dentro: Estatores anclados al [[peptidoglicano|peptidoglycan]] en la [[membrana plasmática|plasma-membrane]] giran el rotor basal, el gancho y el filamento helicoidal de [[proteína|protein]] flagelina · Hacia: Empuje hidrodinámico (carreras de ~25–35 µm/s y vuelcos) y retorno de H⁺ al [[citosol|cytosol]]',
      scientific:
        'Nanomáquina rotatoria transenvoltura (filamento de ~20 nm de ancho y 5–20 µm de largo; cuerpo basal de ~45 nm) ensamblada mediante un sistema axial de exportación tipo III. Consta de anillo conmutador C citoplasmático (FliG/FliM/FliN), anillo MS en membrana interna (FliF), cojinetes P y L (FlgI/FlgH), gancho articulado de ~55 nm (FlgE) y filamento helicoidal levógiro de flagelina FliC (~11 protofilamentos, paso de 2,3 µm). Hasta 11 complejos estatores MotA₅MotB₂ conducen ~1.200 H⁺/vuelta a favor de Δp, desarrollando pares de ~1.000–4.000 pN·nm a 100–300 Hz (~18.000 rpm en E. coli; >1.000 Hz en motores de Na⁺ de Vibrio).'
    }
  },

  pilus: {
    en: {
      simple:
        'Like Spider-Man’s web-shooters mixed with Attack on Titan’s ODM grappling hooks, hair-thin pili let bacteria cling against rushing fluids, winch across surfaces, or trade bonus DNA.',
      story:
        'Fresh pilin [[proteins|protein]] cross the [[plasma membrane|plasma-membrane]] and click base-first into outer-membrane usher rings, shooting stiff hair-thin cables into the wild like Attack on Titan ODM gear. At the tip waits a mechanical catch-bond claw that grabs gut or urinary sugars—clamping tighter like a Spider-Man web-line the harder flushing currents yank on the [[bacterium|prokaryote]]!\n\nSpecialized cousins upgrade the superhero gadgetry: Type IV pili burn ATP at their base to reel in cable and haul the cell across surfaces at superhero Gs, while hollow sex pili dock onto neighbors like a Pokémon Link Cable to pipe [[plasmid|plasmid]] [[DNA|dna]] straight across.',
      blueprint:
        'Role: Surface adhesion grappling fiber, twitching winch, and DNA bridge · From: Sec-exported pilin [[proteins|protein]] crossing [[plasma membrane|plasma-membrane]] to outer-membrane assembly ushers/ATPases · Inside: Helical rod (~6–7 nm wide) of polymerized pilin subunits capped by lectin-like tip adhesins (e.g. FimH) · To: Host glycoprotein anchorage for [[prokaryote|prokaryote]], biofilm scaffolding, or horizontal [[plasmid|plasmid]] [[DNA|dna]] transfer',
      scientific:
        'Non-flagellar filamentous surface appendages (~6–8 nm diameter, 0.5–4 µm length) falling into chaperone–usher fimbriae (e.g. Type 1 pili FimA rod ~3.4 subunits/turn with catch-bond mannose-binding FimH adhesin at the tip; donor-strand complementation via FimC/FimD), ATP-powered Type IV pili (PilA/PilB/PilT motor retracting with >100 pN stall force for twitching motility and natural transformation), and Type IV secretion conjugative F-pili (~8.5 nm outer diameter, 2–3 nm lumen).'
    },
    es: {
      simple:
        'Como los lanzatelarañas de Spider-Man cruzados con los garfios de Ataque a los Titanes, los finísimos pili aferran tejidos, arrastran a la bacteria o tienden puentes de ADN.',
      story:
        'Ladrillos frescos de [[proteína|protein]] pilina cruzan la [[membrana plasmática|plasma-membrane]] y se ensamblan en anillos externos disparando cables rígidos dignos del equipo de maniobras de Ataque a los Titanes. Su pinza terminal mecánica muerde azúcares intestinales o urinarios, apretando con más saña —igual que una telaraña de Spider-Man— cuanto más fuerte tira la corriente para barrer a la [[bacteria|prokaryote]].\n\nSus primos llevan el arsenal más lejos: los pili tipo IV queman ATP en la base para recoger cable y arrastrar la célula sobre superficies sólidas, mientras los pili sexuales tienden un Cable Link hueco para pasar [[plásmidos|plasmid]] de [[ADN|dna]] a una vecina.',
      blueprint:
        'Rol: Fibra de adhesión superficial, cabrestante retráctil y puente conjugativo · De: Subunidades de [[proteína|protein]] pilina exportadas por la [[membrana plasmática|plasma-membrane]] hacia ensambladores de membrana externa · Dentro: Hélice cilíndrica (~6–7 nm de grosor) de pilinas coronada por adhesinas de punta (como FimH) · Hacia: Anclaje de la [[bacteria|prokaryote]] a tejidos y biopelículas, motilidad contráctil o transferencia de [[plásmidos|plasmid]] de [[ADN|dna]]',
      scientific:
        'Apéndices filamentosos superficiales no flagelares (~6–8 nm de diámetro, 0,5–4 µm de longitud) que comprenden fimbrias de la vía chaperona-usher (p. ej., pili tipo 1 de varilla helicoidal FimA a ~3,4 subunidades/vuelta con adhesina FimH de enlace tipo catch-bond específica de D-manosa), pili tipo IV retráctiles dependientes de ATPasas PilB/PilT (fuerzas de retracción >100 pN para motilidad twitching y captación de ADN) y pili conjugativos F asociados a secreción tipo IV (~8,5 nm de diámetro externo, luz central de 2–3 nm).'
    }
  },

  microcompartment: {
    en: {
      simple:
        'Like a Wakandan geodesic lab dome built from interlocking protein tiles with zero membrane fat, microcompartments lock tricky or toxic reactions inside a private geometric room.',
      story:
        'No internal lipid membranes? Build a Wakandan geodesic lab dome instead! Thousands of flat hexagonal and corner pentagonal [[protein|protein]] tiles snap together in the [[cytosol|cytosol]] into a tight icosahedral vault, sealing VIP specialists—like easily distracted [[RuBisCO|rubisco]] and turbo carbonic anhydrase—inside a private cleanroom.\n\nCharged pinholes in the center of each tile wave negatively charged bicarbonate ions inside while locking competing oxygen out and trapping uncharged carbon dioxide indoors. With CO₂ skyrocketing right under RuBisCO’s nose, the dome cranks out three-carbon [[sugar|sugar]] bricks that slip back out the pores to feed the whole [[bacterium|prokaryote]].',
      blueprint:
        'Role: Lipid-free polyhedral metabolic organelle · From: Bicarbonate or volatile metabolic substrates entering from [[cytosol|cytosol]] through selective hexamer tile pores · Inside: Icosahedral BMC-[[protein|protein]] shell (~100–200 nm) concentrates CO₂ around encapsulated [[RuBisCO|rubisco]] (carboxysome) or traps toxic aldehydes (metabolosome) · To: 3-phosphoglycerate / fixed carbon intermediates exported to [[cytosol|cytosol]] for [[sugar|sugar]] and biomass synthesis',
      scientific:
        'Self-assembling proteinaceous organelle (100–200 nm diameter, ~300–600 MDa) bounded by a ~3–4 nm semi-permeable polyhedral shell of BMC-H hexamers, BMC-T trimers, and vertex-capping BMC-P pentamers (~0.4–0.7 nm positively charged central pores). Anabolic α/β-carboxysomes co-encapsulate form I RuBisCO (~250–1,000 copies condensed via CcmM/CsoS2 linkers) and carbonic anhydrase to elevate local [CO₂] >10-fold above Km and suppress photorespiration; catabolic metabolosomes (Pdu, Eut) sequester propionaldehyde/acetaldehyde intermediates.'
    },
    es: {
      simple:
        'Como una cúpula geodésica de Wakanda armada solo con baldosas proteicas y cero grasa, el microcompartimento encierra reacciones delicadas o tóxicas en un laboratorio privado.',
      story:
        '¿Sin tabiques internos de grasa? ¡Levanta un domo geodésico de laboratorio digno de Wakanda! Miles de losetas hexagonales planas y pentagonales de esquina hechas de [[proteína|protein]] encajan en el [[citosol|cytosol]] como un balón blindado, aislando especialistas —como la distraída [[RuBisCO|rubisco]] y la veloz anhidrasa carbónica— en una sala limpia privada.\n\nPoros cargados en cada loseta dejan pasar iones bicarbonato pero bloquean al oxígeno rival e impiden que escape el gas carbónico sin carga. Con el CO₂ disparado frente a la RuBisCO, la cúpula despacha ladrillos de [[azúcar|sugar]] por sus poros para alimentar a toda la [[bacteria|prokaryote]].',
      blueprint:
        'Rol: Orgánulo metabólico poliédrico exclusivamente proteico · De: Bicarbonato o sustratos metabólicos del [[citosol|cytosol]] a través de poros selectivos centrales · Dentro: Cápside icosaédrica (~100–200 nm) de [[proteínas|protein]] BMC que concentra CO₂ junto a [[RuBisCO|rubisco]] o confina aldehídos volátiles · Hacia: Precursores de [[azúcar|sugar]] (3-fosfoglicerato) y metabolitos limpios exportados al [[citosol|cytosol]]',
      scientific:
        'Orgánulo proteico autoensamblado (100–200 nm de diámetro, ~300–600 MDa) delimitado por una cubierta poliédrica semipermeable de ~3–4 nm formada por hexámeros BMC-H, trímeros BMC-T y pentámeros de vértice BMC-P con poros centrales cargados positivamente (~0,4–0,7 nm). Los carboxisomas α/β coencapsulan RuBisCO forma I y anhidrasa carbónica mediante proteínas andamio (CcmM/CsoS2), elevando la [CO₂] local >10 veces para suprimir la oxigenación; los metabolosomas catabólicos (Pdu, Eut) confinan aldehídos citotóxicos.'
    }
  },

  'ribo-50s': {
    en: {
      simple:
        'Wearing proteins like mech armor around an ancient RNA wizard core, the 50S large subunit is the catalytic forge that welds amino acids into growing chains.',
      story:
        'Once the [[30S small subunit|ribo-30s]] clears a codon match downstairs, this heavy crown slams shut to welcome incoming [[tRNAs|trna]]. Plot twist straight out of anime lore: zero [[protein|protein]] side chains touch the weld! Folded loops of ancient 23S [[RNA|rna]] align and snap each peptide bond together—proving the ribosome is an RNA wizard piloting a protein mech suit.\n\nFreshly forged chains snake down a 10-nanometre exit tunnel straight into Tony Stark-style [[GroEL cages|groel]] or membrane gates before the crowded cytoplasm can tangle them.',
      blueprint:
        'Role: Peptidyl-transferase ribozyme core and nascent-chain exit conduit · From: Validated aminoacyl-[[tRNA|trna]] positioned by [[30S subunit|ribo-30s]] and EF-Tu/EF-G GTPase strokes · Inside: 23S and 5S r[[RNA|rna]] scaffolded by 33 ribosomal [[proteins|protein]] catalyzes peptide bond formation and guides chain down a ~10 nm tunnel · To: Nascent [[polypeptides|polypeptide]] emerging to Trigger Factor, [[GroEL|groel]], or Sec translocons, plus deacylated tRNA release',
      scientific:
        'Large bacterial ribosomal subunit (~1.6 MDa, ~20 nm across) comprising 23S rRNA (2,904 nt in E. coli), 5S rRNA (120 nt), and 33 proteins (uL1–bL36). The peptidyl-transferase center (PTC, domain V of 23S rRNA; key catalytic nucleotide A2451) is devoid of protein within ~18 Å, accelerating aminolysis ~10⁷-fold via proton-shuttle substrate-assisted catalysis on the P-site tRNA A76 2′-OH. Houses the GTPase-associated sarcin–ricin loop and a ~10 nm × 1.5 nm polypeptide exit tunnel targeted by macrolide, lincosamide, streptogramin B, and phenicol antibiotics.'
    },
    es: {
      simple:
        'Con proteínas como armadura mecha alrededor de un ancestral hechicero de ARN, la subunidad mayor 50S es la fragua que suelda cada aminoácido a la cadena.',
      story:
        'Cuando la [[subunidad menor 30S|ribo-30s]] aprueba el codón abajo, esta corona pesada baja y abre su cámara a los [[ARNt|trna]]. Y aquí viene el giro digno de un anime: ¡ninguna [[proteína|protein]] toca la soldadura! Lazos precisos del [[ARN|rna]] 23S alinean y enlazan cada aminoácido, demostrando que el ribosoma es un antiguo mago de ARN pilotando un traje mecha proteico.\n\nCada eslabón nuevo avanza por un túnel de diez nanómetros directo hacia cabinas [[GroEL|groel]] estilo Tony Stark o poros de membrana antes de poder enredarse.',
      blueprint:
        'Rol: Núcleo ribozímico peptidil-transferasa y túnel de salida naciente · De: Aminoacil-[[ARNt|trna]] verificado por la [[subunidad 30S|ribo-30s]] e impulsos GTPásicos de EF-Tu/EF-G · Dentro: ARNr 23S y 5S de [[ARN|rna]] con 33 [[proteínas|protein]] catalizan el enlace peptídico y guían la hebra por un túnel de ~10 nm · Hacia: [[Polipéptidos|polypeptide]] nacientes entregados a Trigger Factor, [[GroEL|groel]] o SecYEG, y ARNt descargado',
      scientific:
        'Subunidad ribosómica bacteriana mayor (~1,6 MDa, ~20 nm) constituida por ARNr 23S (2.904 nt en E. coli), ARNr 5S (120 nt) y 33 proteínas (uL1–bL36). El centro peptidil-transferasa (PTC, dominio V del ARNr 23S, nucleótido clave A2451) carece de cadenas proteicas a menos de ~18 Å y acelera ~10⁷ veces la aminólisis mediante catálisis asistida por el 2′-OH de A76 del peptidil-ARNt. Contiene el centro asociado a GTPasas (bucle sarcina-ricina) y un túnel de salida de ~10 nm × 1,5 nm donde se fijan macrólidos, lincosamidas y cloranfenicol.'
    }
  },

  'ribo-30s': {
    en: {
      simple:
        'Acting like a Dragon Ball scouter visor for genetic code, the 30S small subunit catches fresh mRNA and checks every tRNA’s three-letter match before allowing a weld.',
      story:
        'Nanoseconds after an mRNA leader pokes out of [[RNA polymerase|rna-polymerase]], the 16S [[RNA|rna]] tail inside this Dragon Ball scouter head locks onto the Shine–Dalgarno landing strip to frame the start codon. With its [[50S partner|ribo-50s]] clamped upstairs, courier [[tRNAs|trna]] audition at twenty tries a second.\n\nTwo spring-loaded adenine fingers flip out like caliper gauges to feel each codon–anticodon handshake: a true Watson–Crick fit nods the head shut to trigger welding, while impostors get booted back into the [[cytosol|cytosol]] before a typo ruins the build!',
      blueprint:
        'Role: mRNA recruitment and high-fidelity codon–anticodon decoding head · From: Nascent m[[RNA|rna]] from [[RNA polymerase|rna-polymerase]], initiator/elongator [[tRNAs|trna]], and initiation factors IF1–IF3 · Inside: 16S r[[RNA|rna]] + 21 [[proteins|protein]] bind Shine–Dalgarno leader and probe A-site minor-groove geometry via A1492/A1493 · To: Validated codon-matched tRNAs handed into [[50S subunit|ribo-50s]] catalytic core within [[70S ribosome|ribosome-70s]]',
      scientific:
        'Small bacterial ribosomal subunit (~0.9 MDa, ~15 nm) composed of 16S rRNA (1,542 nt in E. coli, folded into body, platform, head, and helix 44) and 21 proteins (bS1–bS21). The 3′ pyrimidine-rich 16S rRNA tail (5′-ACCUCCUUA-3′) hybridizes with mRNA Shine–Dalgarno sequences 5–9 nt upstream of AUG. Decoding fidelity (~10⁻³–10⁻⁴ error/codon) relies on induced-fit flipping of 16S rRNA bases A1492, A1493, and G530 to monitor Watson–Crick minor-groove geometry at codon positions 1 and 2; aminoglycosides (streptomycin, gentamicin) lock A1492/A1493 out to induce lethal miscoding, whereas tetracyclines sterically block A-site tRNA accommodation.'
    },
    es: {
      simple:
        'Como un rastreador de Dragon Ball para el código genético, la subunidad menor 30S atrapa el ARNm fresco y verifica cada triplete antes de autorizar la soldadura.',
      story:
        'Nanosegundos después de asomar un gen de la [[ARN polimerasa|rna-polymerase]], la cola del [[ARN|rna]] 16S de este visor estilo Dragon Ball se aparea con la pista Shine–Dalgarno para clavar el arranque. Con la [[subunidad 50S|ribo-50s]] acoplada arriba, los mensajeros [[ARNt|trna]] pasan audición a ritmo de vértigo.\n\nDos adeninas saltan como calibres táctiles sobre cada pareja codón-anticodón: si encaja al milímetro, el cabezal asiente y ordena soldar; si falla por un pelo, expulsa al impostor al [[citosol|cytosol]] antes de colar una pieza falsa.',
      blueprint:
        'Rol: Cabezal de captura de ARNm y verificación de fidelidad codón-anticodón · De: ARNm naciente de [[ARN polimerasa|rna-polymerase]], [[ARNt|trna]] cargados y factores IF1–IF3 · Dentro: ARNr 16S de [[ARN|rna]] + 21 [[proteínas|protein]] reconocen la secuencia Shine–Dalgarno e inspeccionan el surco menor con A1492/A1493 · Hacia: ARNt validados transferidos al centro catalítico de la [[subunidad 50S|ribo-50s]] dentro del [[ribosoma 70S|ribosome-70s]]',
      scientific:
        'Subunidad ribosómica bacteriana menor (~0,9 MDa, ~15 nm) formada por ARNr 16S (1.542 nt en E. coli, dominios cuerpo, plataforma, cabeza y hélice 44) y 21 proteínas (bS1–bS21). El extremo 3′ del ARNr 16S (5′-ACCUCCUUA-3′) hibrida con la secuencia Shine–Dalgarno situada 5–9 nt aguas arriba del codón de inicio. La fidelidad traduccional (~10⁻³–10⁻⁴ errores/codón) depende de la eversión de A1492, A1493 y G530 sobre el surco menor en las dos primeras posiciones del dúplex codón-anticodón; los aminoglucósidos fijan A1492/A1493 induciendo lectura errónea y las tetraciclinas bloquean el sitio A.'
    }
  },

  trna: {
    en: {
      simple:
        'Shaped like an L-bar Tetris piece chauffeured by The Flash, transfer RNA reads a three-letter mRNA word at one tip and drops off the matching amino acid at the other.',
      story:
        'Across the bustling [[cytosol|cytosol]], twenty picky synthetase quartermasters burn ATP to clip each [[amino acid|amino-acid]] onto its exact L-shaped tRNA courier. Instantly, speedster escort EF-Tu wraps the loaded courier in a GTP-powered Flash aura and rockets it into the nearest [[70S ribosome|ribosome-70s]].\n\nDown in the [[30S subunit|ribo-30s]], the anticodon tests the mRNA triplet; on a clean match, EF-Tu snaps its GTP latch and steps aside, swinging the brick upstairs into the [[50S catalytic forge|ribo-50s]] before the empty courier pops out for a pit-stop recharge.',
      blueprint:
        'Role: Bilingual genetic-code adapter between mRNA codons and amino acids · From: Free [[amino acids|amino-acid]], ATP, aminoacyl-tRNA synthetases, and EF-Tu·GTP in [[cytosol|cytosol]] · Inside: ~76-[[nucleotide|nucleotide]] cloverleaf folded into a 7-nm L-shape with anticodon loop at one pole and 3′-CCA aminoacyl ester at the other · To: Codon decoding in [[30S subunit|ribo-30s]] and peptide transfer in [[50S subunit|ribo-50s]] of [[70S ribosomes|ribosome-70s]]',
      scientific:
        'Compact non-coding RNA (~73–93 nt, ~25 kDa, ~7 × 6 × 2.5 nm coaxial L-fold of acceptor–TψC stem and D–anticodon stem stabilized by tertiary base triples and post-transcriptional modifications such as pseudouridine, dihydrouridine, and wobble-tuning inosine/queuosine; PDB 1EHZ/1TTT). Aminoacyl-tRNA synthetases (classes I and II, hydrolyzing ATP → AMP + PPi with editing domains achieving <10⁻⁴ mischarging) esterify cognate amino acids to the 2′- or 3′-OH of terminal A76; delivered to the ribosomal A-site as an EF-Tu·GTP·aa-tRNA ternary complex (~150–200 µM total tRNA in fast-growing E. coli).'
    },
    es: {
      simple:
        'Con silueta de pieza L de Tetris escoltada por Flash, el ARNt lee una palabra de tres letras por una punta y entrega el aminoácido exacto por la otra.',
      story:
        'Por todo el [[citosol|cytosol]], veinte sintetasas intendentes gastan ATP para abrochar cada [[aminoácido|amino-acid]] en la cola de su mensajero exacto en forma de L. Al instante, el velocista EF-Tu lo envuelve en un turbo de GTP digno de Flash y lo dispara hacia el [[ribosoma 70S|ribosome-70s]] más cercano.\n\nEn la [[subunidad 30S|ribo-30s]], su anticodón prueba el triplete del ARNm; si acierta de lleno, EF-Tu quema su GTP y se aparta para que el ladrillo suba a la fragua de la [[subunidad 50S|ribo-50s]], saliendo luego vacío para recargarse en boxes.',
      blueprint:
        'Rol: Adaptador bilingüe entre codones del ARNm y aminoácidos · De: [[Aminoácidos|amino-acid]] libres, ATP, aminoacil-ARNt sintetasas y EF-Tu·GTP en el [[citosol|cytosol]] · Dentro: Cadena de ~76 [[nucleótidos|nucleotide]] plegada en L (~7 nm) con bucle anticodón en un extremo y cola aceptora 3′-CCA aminoacilada en el opuesto · Hacia: Lectura en la [[subunidad 30S|ribo-30s]] y entrega peptídica en la [[subunidad 50S|ribo-50s]] del [[ribosoma 70S|ribosome-70s]]',
      scientific:
        'ARN pequeño no codificante (~73–93 nt, ~25 kDa, arquitectura coaxial en L de ~7 × 6 × 2,5 nm formada por el apilamiento aceptor–TψC y D–anticodón con bases modificadas ψ, D, m⁷G e hipoxantina/queuosina en posición 34 de tambaleo; PDB 1EHZ/1TTT). Las aminoacil-ARNt sintetasas (clases I y II, error <10⁻⁴ gracias a dominios de edición hidrolítica) esterifican cada aminoácido al 2′- o 3′-OH de la adenosina terminal A76 consumiendo ATP → AMP + PPi; el complejo ternario EF-Tu·GTP·aa-ARNt abastece el sitio A ribosómico (~150–200 µM de ARNt total en E. coli en fase exponencial).'
    }
  },

  'rna-polymerase': {
    en: {
      simple:
        'Shaped like a giant Doctor Octopus claw guided by a detachable R2-D2 scout, RNA polymerase unzips DNA and prints live RNA at up to eighty letters a second.',
      story:
        'Steered through the [[nucleoid|nucleoid]] by its detachable σ astromech scout, this five-part crab claw slides along [[DNA|dna]] until σ spots a promoter signpost and pries open a twelve-letter bubble. Building blocks pour in from the [[cytosol|cytosol]], snapping onto the template over a magnesium spark at forty to eighty letters per second.\n\nTen letters in, the σ scout ejects like a booster stage and the core locomotive roars down the operon—towing a Snowpiercer-style train of [[70S ribosomes|ribosome-70s]] that translate the fresh [[RNA|rna]] tail while the front end is still printing!',
      blueprint:
        'Role: DNA-dependent transcription engine for all bacterial RNAs · From: Supercoiled chromosomal/plasmid [[DNA|dna]] in [[nucleoid|nucleoid]], cytosolic NTP [[nucleotides|nucleotide]], and promoter-specificity σ factors · Inside: α₂ββ′ω core pincers maintain a ~12–14 bp transcription bubble and polymerize 5′→3′ [[RNA|rna]] via two-Mg²⁺ catalysis · To: Nascent mRNA immediately boarded by [[70S ribosomes|ribosome-70s]], plus rRNA and [[tRNA|trna]] transcripts',
      scientific:
        'Single multi-subunit bacterial DNA-dependent RNA polymerase (~400 kDa α₂ββ′ω core; ~450–480 kDa holoenzyme with σ factor; ~15 × 11.5 × 11 nm) transcribing all mRNA, rRNA, and tRNA species. Housekeeping σ⁷⁰ (or stress σ³⁸/σ³²/σ⁵⁴/σE) recognizes −35 (TTGACA) and −10 (TATAAT) promoter hexamers to isomerize closed-to-open complexes (~13 bp unwound bubble, 8–9 bp RNA:DNA hybrid). Elongates at 40–85 nt/s using two active-site Mg²⁺ ions coordinated by a conserved β′-NADFDGD motif; terminates via intrinsic GC-hairpin/poly-U slippage or ATP-dependent hexameric Rho helicase; inhibited by rifamycins.'
    },
    es: {
      simple:
        'Como una pinza del Doctor Octopus guiada por un droide R2-D2 desmontable, la ARN polimerasa abre el ADN e imprime ARN vivo hasta a ochenta letras por segundo.',
      story:
        'Guiada por el [[nucleoide|nucleoid]] gracias a su droide explorador desmontable —el factor σ—, esta tenaza gigante recorre el [[ADN|dna]] hasta divisar un promotor y abrir una burbuja de doce bases. Los ladrillos entran a chorro desde el [[citosol|cytosol]], soldándose junto a un ion magnesio de cuarenta a ochenta letras por segundo.\n\nTras diez letras, el explorador σ salta como etapa propulsora y la locomotora acelera operón abajo, arrastrando un tren estilo Snowpiercer de [[ribosomas 70S|ribosome-70s]] que traducen la cola de [[ARN|rna]] mientras aún se imprime.',
      blueprint:
        'Rol: Motor único de transcripción dependiente de ADN para todos los ARN bacterianos · De: [[ADN|dna]] superenrollado del [[nucleoide|nucleoid]], [[nucleótidos|nucleotide]] NTP del citosol y factores σ promotores · Dentro: Pinzas α₂ββ′ω sostienen una burbuja abierta de ~12–14 pb y polimerizan [[ARN|rna]] 5′→3′ con dos iones Mg²⁺ · Hacia: ARNm naciente abordado al instante por [[ribosomas 70S|ribosome-70s]], además de ARNr y [[ARNt|trna]]',
      scientific:
        'Única ARN polimerasa bacteriana multisubunidad (~400 kDa núcleo α₂ββ′ω; ~450–480 kDa holoenzima con factor σ; ~15 × 11,5 × 11 nm) responsable de sintetizar ARNm, ARNr y ARNt. El factor σ⁷⁰ vegetativo (o σ alternativos de estrés) reconoce elementos −35 (TTGACA) y −10 (TATAAT) e isomeriza el complejo abierto (burbuja de ~13 pb, híbrido ARN:ADN de 8–9 pb). Elonga a 40–85 nt/s mediante catálisis de dos iones Mg²⁺ coordinados por la tríada β′-NADFDGD; termina en horquillas intrínsecas ricas en GC seguidas de poli-U o mediante la helicasa hexamérica Rho; inhibida por rifampicina.'
    }
  },

  capsule: {
    en: {
      simple:
        'Straight out of Cells at Work!, the bacterial capsule is a thick, slippery slime cloak that hoards water and makes invaders glide right out of White Blood Cell hands.',
      story:
        'Remember those smug, helmeted bacterial villains in Cells at Work! slipping straight through White Blood Cell’s grip? Chains of [[glucose|glucose]] and acidic sugars shoot out dedicated export tunnels across the [[cell envelope|bacterial-wall]], moored by [[phospholipids|phospholipid]] into a plush jelly cloak often thicker than the bacterium itself.\n\nIn dry spells on a hospital countertop, that hydrogel sponge hoards life-saving [[water|water]]; inside a human bloodstream, macrophages and complement tags skid right off its slick negative slime while hidden [[pili|pilus]] grappling hooks quietly anchor to tissue underneath!',
      blueprint:
        'Role: Hydrated anti-phagocytic stealth shield and desiccation buffer · From: Cytoplasmic nucleotide-activated [[sugars|glucose]] translocated across [[plasma membrane|plasma-membrane]] and [[bacterial envelope|bacterial-wall]] via Wzx/Wzy or ABC-transporter Wza channels · Inside: 0.2–1 µm hydrogel matrix of high-molecular-weight anionic polysaccharides moored to outer-membrane [[phospholipids|phospholipid]] · To: Immune evasion (complement/opsonization masking), [[water|water]] retention, and biofilm matrix formation for [[prokaryote|prokaryote]]',
      scientific:
        'Extracellular high-molecular-weight polysaccharide glycocalyx (K-antigens in E. coli; 0.2–1.0 µm hydrated thickness, >95% bound water) covalently tethered to outer-membrane phosphatidylglycerol/lysophosphatidylglycerol anchors or Lipid A. Biosynthesized via Group 1/4 Wzy-dependent polymerization-translocation across octameric outer-membrane Wza barrels or Group 2/3 processive ABC-transporter KpsMT–KpsED complexes. Masks subcapsular PAMPs from C3b opsonization and Fc/complement-mediated macrophage phagocytosis, though exploited as receptor by capsule-depolymerizing bacteriophages.'
    },
    es: {
      simple:
        'Recién salida de Cells at Work!, la cápsula es un grueso manto gelatinoso de invisibilidad y baba que retiene agua y hace que la bacteria se escurra de los glóbulos blancos.',
      story:
        '¿Recuerdas a esos invasores bacterianos de Cells at Work! que se escurren entre los dedos del Glóbulo Blanco? Largas cintas de [[glucosa|glucose]] y azúcares ácidos cruzan túneles exclusivos por toda la [[envoltura bacteriana|bacterial-wall]], amarradas con [[fosfolípido|phospholipid]] en un manto viscoso más grueso que el propio casco.\n\nEn plena sequía sobre una superficie seca, esa esponja retiene [[agua|water]] vital; dentro de la sangre humana, los macrófagos y el complemento patinan sobre su gel negativo resbaladizo mientras los [[pili|pilus]] ocultos debajo clavan sus garfios en el tejido.',
      blueprint:
        'Rol: Escudo furtivo antifagocítico e hidrogel contra la desecación · De: [[Azúcares|glucose]] activados del citoplasma exportados a través de la [[membrana plasmática|plasma-membrane]] y la [[envoltura bacteriana|bacterial-wall]] vía canales Wza/Kps · Dentro: Matriz hidratada (0,2–1 µm) de polisacáridos aniónicos anclada a [[fosfolípidos|phospholipid]] externos · Hacia: Evasión inmunitaria, retención de [[agua|water]] y cohesión de biopelículas para la [[bacteria|prokaryote]]',
      scientific:
        'Glicocálix extracelular de polisacáridos capsulares de alto peso molecular (antígenos K en E. coli; grosor hidratado de 0,2–1,0 µm, >95% de agua retenida) anclado a fosfatidilglicerol/lisofosfatidilglicerol de la membrana externa. Ensamblado mediante polimerización Wzy acoplada al canal octamérico Wza (grupos 1/4) o transporte ABC procesivo KpsMT–KpsED (grupos 2/3). Bloquea estérica y electrostáticamente el depósito de C3b del complemento y la fagocitosis por neutrófilos y macrófagos.'
    }
  },

  lps: {
    en: {
      simple:
        'Like Wakanda’s energy dome paving the outside of Gram-negative armor, LPS locks fat-anchored sugar bristles edge-to-edge so gut bile and oily drugs bounce right off.',
      story:
        'Built on the [[plasma membrane|plasma-membrane]] from six [[fatty-acid tails|fatty-acid-tail]], glucosamine, and [[sugar|glucose]] branches, each LPS tile rides a seven-protein Pez-dispenser bridge across the periplasm onto the outer roof. Up top, [[magnesium|atom-mg]] and calcium ions clip neighboring negatively charged heads into a Wakanda-tight shield wall.\n\nGut bile detergents and greasy antibiotics ricochet right off that wet O-antigen sugar forest, forcing small snacks to line up politely at [[porin|porin]] gates—though if immune battle shatters the hull, loose Lipid A anchors trip human TLR4 alarms like a five-alarm fever siren!',
      blueprint:
        'Role: Asymmetric outer-leaflet permeability barrier and structural endotoxin · From: Cytoplasmic/inner-membrane synthesis from [[fatty-acid tails|fatty-acid-tail]], [[phosphate|phosphate]], and [[sugars|glucose]], ferried across periplasm via LptA–G bridge · Inside: Hexa-acylated Lipid A anchor bridged by [[Mg²⁺|atom-mg]] ions beneath core oligosaccharide and repeating O-antigen chains · To: Exterior face of [[bacterial envelope|bacterial-wall]] shielding [[porins|porin]] and repelling hydrophobic antibiotics/bile salts',
      scientific:
        'Amphipathic glycolipid (~10–20 kDa full smooth form; ~4 kDa rough K-12 form lacking O-antigen; ~2 × 10⁶ molecules covering ~75% of E. coli outer surface) exclusively populates the outer leaflet of the Gram-negative outer membrane, delivered unidirectionally by ATP-powered LptB₂FGC–LptA–LptDE (PDB 4Q35). Comprises hexa-acylated β-1′,6-linked diglucosamine bisphosphate Lipid A (endotoxin recognized at picomolar levels by MD-2/TLR4), Kdo₂–heptose inner/outer core oligosaccharide cross-linked laterally by Mg²⁺/Ca²⁺ (target of polymyxin/colistin displacement), and polymorphic O-polysaccharide.'
    },
    es: {
      simple:
        'Como el escudo fronterizo de Wakanda sobre las bacterias Gram-negativas, el LPS traba cerdas de azúcar ancladas en grasa para que la bilis y los fármacos aceitosos reboten.',
      story:
        'Forjado en la [[membrana plasmática|plasma-membrane]] con seis [[colas de ácidos grasos|fatty-acid-tail]] y ramas de [[azúcar|glucose]], cada bloque de LPS sube por un puente dispensador de siete proteínas hasta el tejado exterior. Allí arriba, iones [[magnesio|atom-mg]] y calcio abrochan las cabezas negativas hombro con hombro en un muro digno de Wakanda.\n\nLas sales biliares y los antibióticos grasos rebotan contra ese espeso bosque húmedo de antígeno O, obligando a los nutrientes menudos a hacer fila en las [[porinas|porin]]; aunque si el casco estalla, sus anclas de Lípido A disparan todas las sirenas inmunes humanas.',
      blueprint:
        'Rol: Barrera impermeable de la hemicapa externa y endotoxina estructural · De: Síntesis en [[membrana plasmática|plasma-membrane]] con [[ácidos grasos|fatty-acid-tail]], [[fosfato|phosphate]] y [[azúcares|glucose]], transportada por el puente LptA–G · Dentro: Ancla hexaacilada de Lípido A reticulada por [[Mg²⁺|atom-mg]] bajo un núcleo oligosacárido y el antígeno O · Hacia: Cara exterior de la [[envoltura bacteriana|bacterial-wall]] protegiendo [[porinas|porin]] frente a sales biliares y antibióticos',
      scientific:
        'Glicolípido anfipático (~10–20 kDa en cepas lisas; ~4 kDa en cepas rugosas K-12 sin antígeno O; ~2 × 10⁶ copias que cubren ~75% de la superficie externa de E. coli) insertado exclusivamente en la hoja exterior de la membrana externa por la maquinaria dependiente de ATP LptB₂FGC–LptA–LptDE (PDB 4Q35). Consta de Lípido A (diglucosamina β-1′,6 bisfosfato hexaacilada, agonista picomolar de TLR4/MD-2), oligosacárido central Kdo₂-heptosa estabilizado lateralmente por puentes divalentes Mg²⁺/Ca²⁺ (desplazados por polimixinas) y polisacárido O antigénico.'
    }
  },

  porin: {
    en: {
      simple:
        'Punched through the outer armor like VIP club bouncers with a strict size-ring, three-barreled porins wave tiny sugars and water inside while slamming the door on giant antibiotics.',
      story:
        'Because the [[LPS|lps]] shield seals the hull nearly watertight, the bacterium installs ~100,000 three-barrel bouncers so the crew doesn’t starve inside its own fortress! Unfolded porin [[proteins|protein]] cross the periplasmic moat with jellyfish-like SurA chaperones and get rolled into 16-strand β-barrels by the BAM loom.\n\nHalfway down each water-filled barrel, a charged L3 eyelet loop pinches the doorway to roughly one nanometre wide: [[Water|water]], salts, and [[glucose|glucose]] under 600 daltons stroll right in, while heavyweight antibiotics like vancomycin get clotheslined outside the velvet rope!',
      blueprint:
        'Role: Size- and charge-selective outer-membrane passive diffusion sieve · From: Unfolded β-barrel [[proteins|protein]] exported into periplasm and inserted by BAM complex amidst [[LPS|lps]] and [[phospholipids|phospholipid]] · Inside: Homotrimer of 16-stranded antiparallel β-barrels with loop L3 constricting an aqueous pore (~0.7 × 1.1 nm, ~600 Da cutoff) · To: Periplasmic delivery of [[water|water]], ions, [[glucose|glucose]], and [[amino acids|amino-acid]] to inner-membrane importers',
      scientific:
        'Trimeric outer-membrane β-barrel channels (~110 kDa trimer for E. coli OmpF/OmpC, PDB 2OMF; ~10⁵ copies/cell) folded into the asymmetric lipid bilayer by the BamABCDE complex (PDB 5D0O). Each monomer forms a 16-stranded antiparallel β-barrel whose extracellular loop L3 folds into the lumen, creating an electrostatic constriction zone (~7 × 11 Å; acidic D113/E117 opposite basic R42/R82/R132 cluster) with a ~600 Da exclusion limit. Osmoregulated EnvZ/OmpR signaling shifts expression from wider OmpF (low osmolarity) to narrower OmpC (high gut osmolarity, slowing bile/β-lactam influx).'
    },
    es: {
      simple:
        'Incrustadas en el casco exterior como porteros de discoteca con gálibo estricto, las porinas de tres cañones dejan pasar agua y azúcares menudos pero frenan antibióticos gigantes.',
      story:
        'Como el escudo de [[LPS|lps]] deja el casco casi estanco, la bacteria instala cien mil porteros de tres cañones para no morir de hambre dentro de su fortaleza. Las cadenas desplegadas de [[proteína|protein]] cruzan el foso con chaperonas SurA hasta que el telar BAM las enrolla en barriles de dieciséis láminas.\n\nA mitad de cada cañón acuoso, un ojal eléctrico estrecha el paso a un nanómetro exacto: el [[agua|water]], los iones y la [[glucosa|glucose]] menores de 600 daltons entran sin hacer cola, mientras pesos pesados como la vancomicina se quedan fuera del cordón VIP.',
      blueprint:
        'Rol: Tamiz pasivo selectivo por tamaño y carga en la membrana externa · De: [[Proteínas|protein]] de barril β escoltadas por el periplasma y plegadas por BAM entre [[LPS|lps]] y [[fosfolípidos|phospholipid]] · Dentro: Homotrímero de barriles β de 16 hebras con bucle L3 que estrecha el poro acuoso (~0,7 × 1,1 nm; límite ~600 Da) · Hacia: Paso de [[agua|water]], iones, [[glucosa|glucose]] y [[aminoácidos|amino-acid]] hacia permeasas internas',
      scientific:
        'Canales triméricos de barril β de membrana externa (~110 kDa el trímero OmpF/OmpC en E. coli, PDB 2OMF; ~10⁵ copias/célula) insertados por el complejo BamABCDE (PDB 5D0O). Cada monómero de 16 láminas β antiparalelas repliega el bucle extracelular L3 hacia la luz, formando un ojal electrostático (~7 × 11 Å; residuos ácidos D113/E117 frente a la tríada básica R42/R82/R132) con exclusión molecular ~600 Da. El sistema de dos componentes EnvZ/OmpR conmuta OmpF (baja osmolaridad) por OmpC de poro más estrecho (alta osmolaridad intestinal, restringiendo sales biliares y β-lactámicos).'
    }
  },

  'storage-granule': {
    en: {
      simple:
        'Like Dragon Ball Senzu beans stashed for lean times, storage granules pack thousands of spare sugars or phosphates into compact balls that won’t swell the cell with water.',
      story:
        'Leave millions of loose [[glucose|glucose]] molecules floating in the [[cytosol|cytosol]] and incoming osmotic water would inflate the bacterium like Violet Beauregarde in Willy Wonka! Instead, during carbon feasts, enzymes snap spare sugars into branched glycogen snowballs, string [[phosphates|phosphate]] into high-energy polyphosphate beads, or spin bioplastic droplets.\n\nOne giant insoluble snowball costs almost zero osmotic pressure—a true Dragon Ball Senzu-bean ration pack! When famine strikes, enzymes shave fuel right off the outer branches to keep [[ATP synthases|atp-synthase]] and [[70S ribosomes|ribosome-70s]] humming through the drought.',
      blueprint:
        'Role: Osmotically inert cytoplasmic carbon, energy, and phosphate reserve · From: Excess [[glucose|glucose]]-1-phosphate, acetyl-CoA, or ATP-[[phosphate|phosphate]] in [[cytosol|cytosol]] during nutrient imbalance · Inside: Membrane-free 50–500 nm inclusions of α-(1→4)/α-(1→6) glycogen, polyphosphate, or phasin-[[protein|protein]]-coated polyhydroxybutyrate (PHB) · To: Mobilized glucose-1-P, β-hydroxybutyrate, and ATP/Pi feeding central metabolism and [[70S ribosomes|ribosome-70s]] during starvation',
      scientific:
        'Non-membrane-bound cytoplasmic inclusion bodies (50–500 nm diameter) minimizing intracellular osmotic pressure while stockpiling macronutrients: (1) glycogen granules (~20–50 nm rosettes synthesized via GlgC ADP-glucose pyrophosphorylase, GlgA synthase, and GlgB branching enzyme; mobilized by GlgP/GlgX); (2) polyhydroxyalkanoate/PHB carbonosomes coated by amphipathic phasin proteins (PhaP), PhaC polymerase, and PhaZ depolymerase monolayer; and (3) acidocalcisome-like inorganic polyphosphate (polyP, tens to hundreds of Pi residues linked by phosphoanhydride bonds via PPK1/PPK2) buffering Mg²⁺, stress signaling, and ATP regeneration.'
    },
    es: {
      simple:
        'Como Semillas del Ermitaño de Dragon Ball guardadas para épocas de escasez, los gránulos de reserva compactan miles de azúcares o fosfatos sin hinchar de agua la célula.',
      story:
        'Si dejaras millones de moléculas sueltas de [[glucosa|glucose]] en el [[citosol|cytosol]], la avalancha osmótica de agua hincharía la nave como en Charlie y la fábrica de chocolate. Por eso, en tiempos de festín, las enzimas empaquetan el azúcar en esferas ramificadas de glucógeno, ensartan [[fosfatos|phosphate]] energéticos o crean gotas de bioplástico envueltas en [[proteínas|protein]] fasinas.\n\nCada esfera insoluble guarda miles de raciones tipo Semilla del Ermitaño casi sin peaje osmótico; cuando llega el ayuno, las enzimas raspan combustible de sus ramas para sostener a los [[ribosomas 70S|ribosome-70s]] en marcha.',
      blueprint:
        'Rol: Despensa citoplasmática osmóticamente inerte de carbono, energía y fosfato · De: Exceso de [[glucosa|glucose]], acetil-CoA o [[fosfato|phosphate]] de ATP en el [[citosol|cytosol]] · Dentro: Cuerpos de inclusión sin bicapa lipídica (50–500 nm) de glucógeno ramificado, polifosfato o PHB recubierto de [[proteínas|protein]] fasinas · Hacia: Glucosa-1-P, equivalentes reductores y fosfato liberados durante el ayuno hacia rutas glucolíticas y [[ribosomas 70S|ribosome-70s]]',
      scientific:
        'Cuerpos de inclusión citoplasmáticos carentes de bicapa lipídica (50–500 nm) que almacenan reservas reduciendo al mínimo la osmolaridad interna: (1) rosetas de glucógeno (~20–50 nm; vía GlgC ADP-glucosa pirofosforilasa, GlgA y GlgB; degradadas por GlgP/GlgX); (2) gránulos de polihidroxibutirato (PHB) estabilizados por una monocapa proteica de fasinas anfipáticas (PhaP), polimerasa PhaC y despolimerasa PhaZ; y (3) gránulos metacromáticos de polifosfato inorgánico (poliP, enlaces fosfoanhídrido de alta energía vía PPK1/PPK2).'
    }
  },

  'real-bacterium': {
    en: {
      simple:
        'Meet Escherichia coli at true atomic scale: a two-micrometre Millennium Falcon packed wall-to-wall with 70S printers, Ghostbusters efflux cannons, and open-floor DNA.',
      story:
        'Step aboard E. coli at real atomic scale—a two-micrometre Millennium Falcon with zero hallways and zero wasted space! Nutrients pour through the [[cell envelope|real-envelope]] into a bustling mosh pit of three million proteins and [[70S ribosomes|ribosome-ecoli]] colliding a million times a second, feeding electrons to [[Complex I|complex-i-ecoli]] to electrify the hull while Ghostbusters-style [[AcrAB–TolC cannons|acrab-tolc]] blast intruding antibiotics right out the roof.\n\nDead center twists the 4.64-million-letter [[nucleoid|real-nucleoid]], where twin Tron-fast replisomes type a thousand bases a second and ribosomes translate mRNA before it even finishes printing—while a Cerebro-like nose array steers pod-racer flagella toward fresh sugar!',
      blueprint:
        'Role: True-scale Gram-negative E. coli MG1655 open-plan bioenergetic system (1 unit = 100 nm) · From: Extracellular [[glucose|glucose]], [[amino acids|amino-acid]], and O₂ crossing [[cell envelope|real-envelope]] · Inside: Cytoplasmic glycolysis/TCA feeds [[Complex I|complex-i-ecoli]] H⁺ pumping; [[nucleoid|real-nucleoid]] runs [[replication forks|real-fork]] and coupled [[gene expression|real-gene]] · To: Proton-driven [[ATP synthase|atp-synthase-ecoli]], [[flagellar motors|real-motor]], [[AcrAB–TolC|acrab-tolc]] drug efflux, and binary division every ~20 min',
      scientific:
        'True-scale molecular reconstruction of rod-shaped Escherichia coli K-12 MG1655 (~2.0 µm × 0.9 µm; ~0.9 fL total volume; ~300 mg/mL cytoplasmic macromolecular density; 1 scene unit = 100 nm). Houses a 4,641,652 bp circular chromosome (~1.6 mm B-DNA) organized into ~460 negatively supercoiled plectonemic domains, surrounded by ~40,000–50,000 70S ribosomes (PDB 4YBB, ~75% in active polysomes), ~4,000 RNA polymerases (PDB 4YG2), and a ~35 nm tripartite Gram-negative envelope maintaining Δp ≈ −160 mV across the inner membrane to drive F₁F₀ ATP synthases (PDB 6OQR) and MotAB-coupled peritrichous flagella.'
    },
    es: {
      simple:
        'Conoce a Escherichia coli a escala atómica real: un Halcón Milenario de dos micrómetros repleto de impresoras 70S, cañones cazafantasmas y ADN a cielo abierto.',
      story:
        'Sube a bordo de E. coli a escala atómica real: un Halcón Milenario de dos micrómetros sin pasillos ni rincones vacíos. Los nutrientes cruzan la [[envoltura celular|real-envelope]] hacia un taller vibrante de tres millones de enzimas y [[ribosomas 70S|ribosome-ecoli]] que chocan millones de veces por segundo, cargando el casco mediante el [[Complejo I|complex-i-ecoli]] mientras cañones [[AcrAB–TolC|acrab-tolc]] estilo Cazafantasmas expulsan antibióticos por el tejado.\n\nEn pleno centro gira el [[nucleoide|real-nucleoid]] de 4,64 millones de bases, copiándose a mil letras por segundo y traduciendo genes en caliente mientras su radar frontal tipo Cerebro guía turbinas dignas de Anakin Skywalker.',
      blueprint:
        'Rol: Sistema bioenergético abierto a escala real de E. coli MG1655 (1 unidad = 100 nm) · De: [[Glucosa|glucose]], [[aminoácidos|amino-acid]] y O₂ a través de la [[envoltura celular|real-envelope]] · Dentro: Glucólisis/TCA alimentan el bombeo de H⁺ del [[Complejo I|complex-i-ecoli]]; el [[nucleoide|real-nucleoid]] ejecuta [[replicación|real-fork]] y [[expresión acoplada|real-gene]] · Hacia: [[ATP sintasa|atp-synthase-ecoli]], [[motores flagelares|real-motor]], eflujo [[AcrAB–TolC|acrab-tolc]] y división celular cada ~20 min',
      scientific:
        'Reconstrucción molecular a escala verdadera del bacilo Gram-negativo Escherichia coli K-12 MG1655 (~2,0 µm × 0,9 µm; volumen ~0,9 fL; densidad macromolecular ~300 mg/mL; 1 unidad = 100 nm). Contiene el cromosoma circular de 4.641.652 pb (~1,6 mm de ADN-B) plegado en ~460 dominios plectonémicos superenrollados negativamente, rodeado por ~40.000–50.000 ribosomas 70S (PDB 4YBB), ~4.000 ARN polimerasas (PDB 4YG2) y una envoltura tripartita de ~35 nm cuya membrana interna sostiene Δp ≈ −160 mV para alimentar ATP sintasas F₁F₀ (PDB 6OQR) y flagelos perítricos.'
    }
  },

  'real-envelope': {
    en: {
      simple:
        'Just 35 nanometres thick, E. coli’s three-deck hull works like Wakandan shield + Mithril chainmail + Tony Stark’s Arc Reactor rolled into one skin.',
      story:
        'Slice the hull at true scale and three sci-fi decks appear in just 35 nanometres! Up top, magnesium-locked [[LPS|lps]] deflects gut bile while three-barrel [[OmpF porins|porin]] let small snacks enter the periplasmic moat.\n\nMid-deck, Braun’s lipoprotein rivets bolt the roof down to a Mithril-tough sheet of [[peptidoglycan|peptidoglycan]] swimming in pumped-out protons. Down on the [[plasma membrane|plasma-membrane]]—since bacteria carry zero mitochondria—[[Complex I|complex-i-ecoli]] and oxidases charge that proton moat like an Arc Reactor to spin ATP synthases, while 33-nanometre AcrAB–TolC cannons bridge all three decks to hurl poisons into space.',
      blueprint:
        'Role: Integrated 35-nm Gram-negative barrier, exoskeleton, and respiratory power deck · From: External solutes via [[porins|porin]], cytoplasmic NADH/O₂ at [[Complex I|complex-i-ecoli]], and exported envelope [[proteins|protein]] · Inside: [[LPS|lps]] outer membrane + Lpp-tethered [[peptidoglycan|peptidoglycan]] in H⁺-rich periplasm + bioenergetic [[plasma membrane|plasma-membrane]] · To: Cytoplasmic ATP from [[ATP synthase|atp-synthase-ecoli]] and trans-envelope drug expulsion via [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Atomic-scale cross-section of the ~35 nm E. coli K-12 envelope: (1) ~7 nm asymmetric outer membrane populated by rough-type Lipid A–core LPS, OmpF trimers (PDB 2OMF), OmpA anchors (PDB 1BXW), BamABCDE insertase (PDB 5D0O), and LptDE LPS translocon (PDB 4Q35); (2) ~21 nm periplasm containing periplasmic chaperones SurA (1M5Y), Skp (1SG2), and MalE (1ANF), plus a monolayered peptidoglycan sacculus covalently stapled by ~5 × 10⁵ Braun’s lipoprotein (Lpp) trimers; and (3) ~7 nm phospholipid inner membrane housing Nuo Complex I (7NYR), bo₃ quinol oxidase (1FFT), F₁F₀ ATP synthase (6OQR), LacY/GlpT/MscS, SecYEG–SecA (3DIN), and tripartite AcrAB–TolC efflux pumps (5O66).'
    },
    es: {
      simple:
        'En apenas 35 nanómetros, el casco de tres cubiertas de E. coli une escudo de Wakanda, malla de mithril y Reactor Arc de Iron Man en una sola piel.',
      story:
        'Corta el casco a escala real y verás tres cubiertas dignas de ciencia ficción en solo 35 nanómetros. Arriba, el escudo de [[LPS|lps]] frena la bilis mientras las [[porinas OmpF|porin]] dejan pasar bocados pequeños al foso periplásmico.\n\nEn la entreplanta, miles de tirantes remachan el techo a una red tipo mithril de [[peptidoglicano|peptidoglycan]] bañada en protones. Abajo, en la [[membrana plasmática|plasma-membrane]] —sin una sola mitocondria a bordo—, el [[Complejo I|complex-i-ecoli]] carga ese foso como un Reactor Arc para mover las turbinas de ATP, mientras cañones AcrAB–TolC cruzan las tres cubiertas para disparar venenos fuera.',
      blueprint:
        'Rol: Casco Gram-negativo integrado de 35 nm con barrera selectiva, exoesqueleto y central energética · De: Solutos externos vía [[porinas|porin]], NADH/O₂ en el [[Complejo I|complex-i-ecoli]] y [[proteínas|protein]] exportadas · Dentro: Membrana externa con [[LPS|lps]] + [[peptidoglicano|peptidoglycan]] anclado por Lpp en periplasma ácido + [[membrana plasmática|plasma-membrane]] bioenergética · Hacia: ATP citoplasmático vía [[ATP sintasa|atp-synthase-ecoli]] y expulsión de fármacos por [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Corte a escala atómica de la envoltura de ~35 nm de E. coli K-12: (1) membrana externa asimétrica (~7 nm) con LPS rugoso, trímeros OmpF (PDB 2OMF), OmpA (1BXW), complejo plegador BamABCDE (5D0O) y translocón LptDE (4Q35); (2) periplasma (~21 nm) con chaperonas SurA (1M5Y), Skp (1SG2), proteína de unión a maltosa (1ANF) y monocapa de peptidoglicano unida por ~5 × 10⁵ trímeros de lipoproteína de Braun (Lpp); y (3) membrana interna (~7 nm) equipada con Complejo I Nuo (7NYR), citocromo bo₃ oxidasa (1FFT), ATP sintasa F₁F₀ (6OQR), LacY/GlpT/MscS, SecYEG–SecA (3DIN) y bombas tripartitas AcrAB–TolC (5O66).'
    }
  },

  'real-motor': {
    en: {
      simple:
        'Cut open like Anakin’s pod-racer engine blueprint, this 45-nanometre electric motor uses eleven proton-fed stators to spin its shaft—and slams into reverse in a millisecond!',
      story:
        'Behold Sebulba’s worst nightmare: a 45-nanometre electric pod-racer turbine built from real protein rings and bushings! Eleven MotA/MotB stators bolted to the [[peptidoglycan|peptidoglycan]] wall channel periplasmic protons across the [[plasma membrane|plasma-membrane]], kicking FliG gear-teeth atop the C-ring to spin the drive rod smoothly through [[cell envelope|real-envelope]] bushings into the corkscrew [[flagellum|flagellum]].\n\nSo long as the bow [[chemoreceptor array|real-pole]] smells rising sugar, counterclockwise spin braids every tail into one turbo jet; one CheY-P tag on the C-ring clutch snaps the motor clockwise in a millisecond to tumble onto a sweeter heading!',
      blueprint:
        'Role: Reversible H⁺-driven rotary basal nanomachine (~45 nm diameter) · From: Periplasmic H⁺ proton-motive force across [[plasma membrane|plasma-membrane]] and CheY-P switch signals from [[chemoreceptor array|real-pole]] · Inside: 11 [[peptidoglycan|peptidoglycan]]-anchored MotAB stators drive MS/C-ring rotor, axial rod, P/L-ring bushings, and universal hook · To: Helical [[flagellum|flagellum]] propulsion (~100 Hz runs / clockwise tumbles) and H⁺ return to [[cytosol|cytosol]]',
      scientific:
        'Cross-sectioned peritrichous E. coli basal motor (~45 nm C-ring diameter; ~50 nm transmembrane height) spanning inner membrane, periplasm, and outer membrane. Architecture comprises cytoplasmic switch complex C-ring (~34-fold FliG/FliM/FliN, r ≈ 22.5 nm) coupled to inner-membrane MS-ring (FliF) and axial drive rod (FliE/FlgB/FlgC/FlgF/FlgG) passing through unanchored periplasmic P-ring (FlgI) and outer-membrane L-ring (FlgH) bushings into the ~55 nm curved hook (FlgE). Up to 11 dynamic MotA₅MotB₂ stator units anchored via MotB OmpA-like domains to peptidoglycan rotate themselves as rotary mini-motors upon H⁺ binding to MotB-Asp32, driving FliG torque (~1,260 pN·nm stall torque; ~100 Hz free-swimming rotation; cooperative Hill coefficient >10 upon CheY-P binding to FliM).'
    },
    es: {
      simple:
        'Abierto en corte como el plano de la vaina de carreras de Anakin, este motor eléctrico de 45 nanómetros usa once estatores de protones e invierte la marcha en un milisegundo.',
      story:
        'Contempla una turbina digna del Boonta Eve de Star Wars tallada átomo a átomo en solo 45 nanómetros. Once estatores MotA/MotB sujetos al [[peptidoglicano|peptidoglycan]] canalizan protones a través de la [[membrana plasmática|plasma-membrane]], golpeando los dientes FliG del anillo C para girar el eje sin fricción a través de la [[envoltura celular|real-envelope]] hacia el [[flagelo|flagellum]].\n\nMientras el radar de la [[matriz de quimiorreceptores|real-pole]] huela más comida, el giro antihorario trenza las colas en un chorro recto; un toque de CheY-P en el embrague invierte el giro en seco para virar de rumbo al instante.',
      blueprint:
        'Rol: Nanomáquina basal rotatoria reversible impulsada por H⁺ (~45 nm) · De: Fuerza protón-motriz en la [[membrana plasmática|plasma-membrane]] y señales CheY-P desde la [[matriz de quimiorreceptores|real-pole]] · Dentro: 11 estatores MotAB fijados al [[peptidoglicano|peptidoglycan]] impulsan el rotor MS/C, eje central, cojinetes P/L y gancho universal · Hacia: Giro propulsor del [[flagelo|flagellum]] (~100 Hz) y devolución de H⁺ al [[citosol|cytosol]]',
      scientific:
        'Motor basal perítrico de E. coli en sección longitudinal (~45 nm de diámetro en el anillo C; ~50 nm de altura transenvoltura). Integra el complejo conmutador citoplasmático C (~34 copias de FliG/FliM/FliN, r ≈ 22,5 nm), anillo MS en membrana interna (FliF), eje transmisor (FliE/FlgBCFG), cojinetes pasamuros P (FlgI en peptidoglicano) y L (FlgH en membrana externa) y gancho curvo de ~55 nm (FlgE). Hasta 11 complejos estatores MotA₅MotB₂ anclados al peptidoglicano giran acoplados a la protonación de MotB-Asp32, aplicando par electrostático sobre FliG (~1.260 pN·nm en bloqueo; ~100 Hz en nado libre; conmutación ultracooperativa con coeficiente de Hill >10 ante CheY-P).'
    }
  },

  'real-pole': {
    en: {
      simple:
        'Wired together at the bow like Professor X’s Cerebro helmet, thousands of honeycomb sensors amplify tiny whiffs of sugar into instant steering commands.',
      story:
        'Up at the ship’s nose sits E. coli’s own X-Men Cerebro dome: thousands of [[chemoreceptors|chemoreceptor]] locked into a 250-nanometre hexagonal honeycomb across the [[plasma membrane|plasma-membrane]]. Outside, their antennas taste [[glucose|glucose]], amino acids, or toxins; inside, their tips share one cooperative floor of CheA kinases and CheW rings.\n\nBecause the whole honeycomb talks as one mind, losing even a few sugar molecules flips neighboring trimers like dominoes—firing CheA to slap [[phosphate|phosphate]] tags onto CheY couriers that sprint aft and kick the [[flagellar motors|real-motor]] into a course-correcting tumble!',
      blueprint:
        'Role: Cooperative polar chemotaxis sensor array and signal amplifier · From: Periplasmic [[glucose|glucose]], [[amino acids|amino-acid]], and repellents crossing [[porins|porin]] · Inside: Hexagonal lattice (~12 nm spacing) of trimers-of-dimers [[chemoreceptors|chemoreceptor]] in [[plasma membrane|plasma-membrane]] networked at cytoplasmic tips by CheA kinase and CheW · To: Diffusible CheY-[[phosphate|phosphate]] messengers in [[cytosol|cytosol]] controlling [[flagellar motor|real-motor]] reversal',
      scientific:
        'Supramolecular polar signaling array (~200–300 nm patch containing ~3,000–10,000 MCP homodimers: Tar, Tsr, Trg, Tap, Aer) organized as a p6-symmetric hexagonal lattice with 12 nm center-to-center spacing. Each vertex comprises a trimer of MCP dimers (PDB 1QU7) bridged at its cytoplasmic hairpin tips (−22.5 nm below inner membrane) by alternating hexameric rings of dimeric histidine autokinase CheA and coupling protein CheW. Allosteric Ising-like coupling yields ~35–50× signal gain over five orders of ligand concentration via CheR methyltransferase / CheB-P methylesterase adaptation, modulating CheY-P diffusion to FliM.'
    },
    es: {
      simple:
        'Conectados en proa como el casco Cerebro del Profesor X, miles de sensores en panal amplifican cambios mínimos de olor químico para pilotar la bacteria.',
      story:
        'En la proa misma brilla el Cerebro de X-Men bacteriano: miles de [[quimiorreceptores|chemoreceptor]] engarzados en un panal hexagonal de 250 nanómetros sobre la [[membrana plasmática|plasma-membrane]]. Sus antenas externas catan [[glucosa|glucose]], aminoácidos o venenos; abajo, sus puntas comparten una placa cooperativa de quinasas CheA.\n\nAl trabajar como una sola mente colmena, basta que escasee una pizca de azúcar para volcar en dominó a todo el vecindario: CheA estampa etiquetas de [[fosfato|phosphate]] en mensajeros CheY que cruzan la cabina y ordenan a los [[motores flagelares|real-motor]] dar un trompo corrector.',
      blueprint:
        'Rol: Antena polar cooperativa de quimiotaxis y amplificador de señales · De: [[Glucosa|glucose]], [[aminoácidos|amino-acid]] y repelentes que entran al periplasma vía [[porinas|porin]] · Dentro: Red hexagonal (paso de 12 nm) de trímeros de dímeros de [[quimiorreceptores|chemoreceptor]] en la [[membrana plasmática|plasma-membrane]] enlazados abajo por CheA y CheW · Hacia: Mensajeros CheY-[[fosfato|phosphate]] difundidos por el [[citosol|cytosol]] hacia el [[motor flagelar|real-motor]]',
      scientific:
        'Matriz supramolecular polar de señalización (~200–300 nm de diámetro; ~3.000–10.000 homodímeros MCP: Tar, Tsr, Trg, Tap y Aer) dispuesta en red hexagonal p6 con espaciado centro a centro de 12 nm. Cada nodo reúne trímeros de dímeros MCP (PDB 1QU7) conectados a ~22,5 nm bajo la membrana interna mediante anillos hexaméricos de histidina-quinasa CheA y acoplador CheW. El acoplamiento alostérico tipo red de Ising proporciona una ganancia de ~35–50× en un rango dinámico de cinco órdenes de magnitud gracias a la adaptación por metilación/desmetilación (CheR/CheB-P).'
    }
  },

  'real-nucleoid': {
    en: {
      simple:
        'Coiled like 460 spring-loaded telephone cords with zero nuclear walls, E. coli’s 4.6-million-letter chromosome fits inside one micrometre while staying wide open for instant reading.',
      story:
        'Stretched straight, E. coli’s DNA ring spans 1.6 millimetres—800 times longer than the ship—yet all 4.64 million base pairs pack neatly into a one-micrometre open cockpit! Doctor Strange-like [[DNA gyrase|gyrase]] underwinds the helix into ~460 braided plectoneme loops while parkour-agile [[HU dimers|hu-protein]], Fis, and IHF pinch sharp corners.\n\nCrowded [[70S ribosomes|ribosome-ecoli]] press gently around the shoreline, while deep inside a [[replication fork|real-fork]] types 1,000 letters a second and outer loops poke into the aisle so [[coupled genes|real-gene]] print straight into waiting ribosome convoys.',
      blueprint:
        'Role: Full-genome plectonemic E. coli chromosome architecture (~4.64 Mbp) · From: Parental [[DNA|dna]], dNTP/NTP [[nucleotides|nucleotide]], and supercoiling/bending work by [[DNA gyrase|gyrase]] and [[HU|hu-protein]] · Inside: ~460 topological loops (~10 kb each) braided into right-handed plectonemes duplicated by [[replication forks|real-fork]] · To: Surface-exposed [[active genes|real-gene]] transcribed by [[RNA polymerase|rnap-ecoli]] and translated by peripheral [[ribosomes|ribosome-ecoli]]',
      scientific:
        'Atomic-to-mesoscale reconstruction of the E. coli MG1655 circular chromosome (4,641,652 bp, 1.58 mm B-DNA contour length, 0.34 nm axial rise/bp) occupying a ~1.2 × 0.65 µm bilobed cytoplasmic zone. Organized into 4 macrodomains (Ori, Ter, Left, Right) subdivided into ~460 supercoiled topological domains (~10 kb average) forming branched right-handed interwound plectonemes (superhelical density σ ≈ −0.05; pitch ~18 nm, radius ~4.5 nm). Decorated every ~150–350 bp by nucleoid-associated proteins HU (PDB 1MUL), Fis (PDB 3IV5), and IHF (PDB 1IHF), with GyrA₂B₂ gyrase (PDB 6RKW) every ~5–12 kb; entropic volume exclusion segregates 70S polysomes to the nucleoid periphery.'
    },
    es: {
      simple:
        'Trenzado como 460 cables de teléfono con resorte y sin muros nucleares, el cromosoma de 4,6 millones de letras cabe en un micrómetro listo para leerse al vuelo.',
      story:
        'Estirado mediría 1,6 milímetros —ochocientas veces la eslora del casco—, pero aquí los 4,64 millones de pares de bases caben en un micrómetro de cabina abierta. La [[ADN girasa|gyrase]], cual hechicero Doctor Strange, trenza la hélice en unos 460 bucles elásticos mientras ágiles pinzas [[HU|hu-protein]] doblan horquillas cerradas.\n\nEl gentío exterior de [[ribosomas 70S|ribosome-ecoli]] abraza la costa del cromosoma, mientras adentro una [[horquilla de replicación|real-fork]] copia mil bases por segundo y los [[genes activos|real-gene]] asoman al borde para traducirse en caliente.',
      blueprint:
        'Rol: Arquitectura cromosómica plectonémica completa de E. coli (~4,64 Mpb) · De: [[ADN|dna]] parental, [[nucleótidos|nucleotide]] y superenrollamiento/plegado por [[ADN girasa|gyrase]] y [[HU|hu-protein]] · Dentro: ~460 dominios topológicos (~10 kb) trenzados en plectonemas y duplicados por [[horquillas de replicación|real-fork]] · Hacia: [[Genes en lectura|real-gene]] expuestos en la periferia hacia [[ARN polimerasa|rnap-ecoli]] y [[ribosomas 70S|ribosome-ecoli]]',
      scientific:
        'Reconstrucción multiescala del cromosoma circular de E. coli MG1655 (4.641.652 pb; 1,58 mm de contorno ADN-B a 0,34 nm/pb) confinado en un volumen bilobulado de ~1,2 × 0,65 µm. Estructurado en 4 macrodominios (Ori, Ter, Left, Right) y ~460 bucles topológicos (~10 kb) trenzados en plectonemas dextrógiros por superenrollamiento negativo (σ ≈ −0,05; paso ~18 nm, radio ~4,5 nm). Modelado cada ~150–350 pb por proteínas asociadas al nucleoide HU (PDB 1MUL), Fis (3IV5) e IHF (1IHF), y mantenido cada ~5–12 kb por ADN girasa (6RKW), con exclusión estérica de polisomas hacia la corteza citoplasmática.'
    }
  },

  'real-gene': {
    en: {
      simple:
        'Like Gromit laying train tracks right in front of a speeding locomotive, E. coli ribosomes jump onto mRNA while RNA polymerase is still printing it!',
      story:
        'Behold the Millennium Falcon speedrun trick in action, modeled bead-for-bead! Up front, [[E. coli RNA polymerase|rnap-ecoli]] sprints along a [[DNA|dna]] loop braced by [[HU architectural clamps|hu-protein]], feeding a bright orange [[RNA|rna]] ribbon straight out its exhaust chute.\n\nLike Wallace & Gromit laying track mid-chase, a lead [[70S ribosome|ribosome-ecoli]] tailgates bumper-to-bumper behind the polymerase while trailing ribosomes pile on in a Snowpiercer convoy—blocking RNA-chopping scissors and peeling off finished enzymes before the gene even ends!',
      blueprint:
        'Role: Co-transcriptional translation convoy (expressosome / nascent polysome) · From: Promoter-opened [[DNA|dna]] flanked by [[HU|hu-protein]], cytosolic NTPs, and charged [[tRNAs|trna]] · Inside: [[RNA polymerase|rnap-ecoli]] synthesizes nascent m[[RNA|rna]] while trailing [[E. coli 70S ribosomes|ribosome-ecoli]] simultaneously translate codons · To: Folding nascent [[polypeptides|polypeptide]] handed to [[GroEL|groel]] or inner-membrane translocons',
      scientific:
        'Atomic-scale locus (~100 nm span) depicting coupled prokaryotic transcription–translation. Leading α₂ββ′ω RNA polymerase (PDB 4YG2) elongates nascent mRNA (~45 nt/s) along B-DNA kinked laterally by HU dimers (PDB 1MUL), physically bridged or kinetically paced (via NusG/NusA) by a trailing 70S lead ribosome (PDB 4YBB, ~15 aa/s = 45 nt/s matching rate). Subsequent 70S ribosomes load every ~75–110 nt onto the 5′ Shine–Dalgarno site, forming a co-transcriptional polysome with progressively longer nascent polypeptide chains (~10–90 residues) that suppress R-loop formation, RNase E cleavage, and Rho-dependent termination.'
    },
    es: {
      simple:
        'Como Gromit tendiendo vías justo delante de una locomotora a toda marcha, los ribosomas saltan al ARNm mientras la ARN polimerasa todavía lo está escribiendo.',
      story:
        'Aquí tienes cazado átomo a átomo el truco de speedrun del Halcón Milenario bacteriano. En cabeza, la [[ARN polimerasa de E. coli|rnap-ecoli]] corre por un bucle de [[ADN|dna]] sujeto por pinzas [[HU|hu-protein]], tendiendo una cinta naranja de [[ARN|rna]] recién horneada.\n\nIgual que en la persecución del tren de Wallace y Gromit, un [[ribosoma 70S|ribosome-ecoli]] líder viaja pegado a su parachoques seguido por una caravana entera: protegen el ARN frente a tijeras destructoras y entregan proteínas terminadas antes del punto final del gen.',
      blueprint:
        'Rol: Convoy acoplado de transcripción y traducción simultáneas (expresosoma / polisoma naciente) · De: [[ADN|dna]] promotor flanqueado por [[HU|hu-protein]], NTPs y [[ARNt|trna]] aminoacilados · Dentro: La [[ARN polimerasa|rnap-ecoli]] transcribe ARNm de [[ARN|rna]] mientras [[ribosomas 70S de E. coli|ribosome-ecoli]] lo traducen al paso · Hacia: [[Polipéptidos|polypeptide]] nacientes entregados a [[GroEL|groel]] o translocones de membrana',
      scientific:
        'Locus activo a escala atómica (~100 nm) de acoplamiento transcripción-traducción en E. coli. La ARN polimerasa elongante (PDB 4YG2, ~45 nt/s) recorre ADN-B flanqueado por dímeros HU (PDB 1MUL) sincronizada cinética y físicamente (mediante NusG/NusA) con un ribosoma 70S líder (PDB 4YBB, ~15 aa/s = 45 nt/s). Ribosomas sucesivos abordan el extremo 5′ cada ~75–110 nt formando un polisoma cotranscripcional cuyas cadenas peptídicas crecientes (~10–90 residuos) emergen progresivamente mientras protegen al ARNm frente a RNasa E y terminación por Rho.'
    }
  },

  'ribosome-ecoli': {
    en: {
      simple:
        'Up to 70,000 of these atomic-scale 70S turbo-printers pack a fast-growing E. coli like a factory planet—cloning every single protein in the ship in twenty minutes flat.',
      story:
        'Every sphere in this 25-nanometre powerhouse maps a real E. coli atom: the [[30S decoding head|ribo-30s]] visor paired with the [[50S catalytic crown|ribo-50s]] forge. When E. coli doubles every twenty minutes, building ribosomes eats over half the ship’s entire power grid, crowding ~50,000 roaring printers around the [[nucleoid|real-nucleoid]].\n\nThree quarters race nose-to-tail as polysome convoys, gulping Flash-fast [[tRNAs|trna]] at twenty peptide welds a second before tossing tricky folds into Tony Stark [[GroEL folding chambers|groel]].',
      blueprint:
        'Role: Atomic-resolution E. coli 70S protein synthesis factory (PDB 4YBB) · From: rRNA operons + 54 ribosomal [[proteins|protein]], nascent m[[RNA|rna]], and EF-Tu·GTP·aa-[[tRNA|trna]] · Inside: [[30S subunit|ribo-30s]] (16S rRNA) pairs codons while [[50S subunit|ribo-50s]] (23S/5S rRNA) catalyzes peptide bonds · To: Cytoplasmic proteome folded via [[GroEL|groel]] and envelope proteins routed to [[cell envelope|real-envelope]]',
      scientific:
        'X-ray structure of the Escherichia coli 70S ribosome (PDB 4YBB; ~2.3 MDa, ~25 × 22 × 22 nm; 10,398 coarse-grained residue/nucleotide beads in full LOD) comprising the 30S subunit (1,542-nt 16S rRNA + 21 proteins S1–S21) and 50S subunit (2,904-nt 23S rRNA + 120-nt 5S rRNA + 33 proteins L1–L36; total 4,566 rRNA nt transcribed from 7 rrn operons). Copy number scales with growth rate from ~7,000 (μ = 0.6 doublings/h) to ~50,000–72,000 ribosomes/cell (μ = 2.5–3 doublings/h), consuming ~4 ATP-equivalents per peptide bond at ~16–22 aa/s.'
    },
    es: {
      simple:
        'Hasta 70.000 de estas turboimpresoras 70S a escala atómica llenan una E. coli en racha como un planeta factoría, duplicando todas sus proteínas en veinte minutos.',
      story:
        'Cada esfera de este coloso de 25 nanómetros marca un átomo real de E. coli: el [[cabezal lector 30S|ribo-30s]] unido a la [[cúpula catalítica 50S|ribo-50s]]. Al dividirse cada veinte minutos, fabricar ribosomas consume más de media energía celular, rodeando el [[nucleoide|real-nucleoid]] con cincuenta mil imprentas a todo gas.\n\nTres cuartas partes desfilan en trenes polisómicos devorando [[ARNt|trna]] veloces a veinte enlaces por segundo y enviando las cadenas rebeldes a las cápsulas [[GroEL|groel]] estilo Tony Stark.',
      blueprint:
        'Rol: Factoría ribosómica 70S de E. coli en coordenadas reales (PDB 4YBB) · De: Operones rrn + 54 [[proteínas|protein]] ribosómicas, ARNm de [[ARN|rna]] y complejos EF-Tu·GTP·aa-[[ARNt|trna]] · Dentro: [[Subunidad 30S|ribo-30s]] (ARNr 16S) decodifica y [[subunidad 50S|ribo-50s]] (ARNr 23S/5S) suelda enlaces peptídicos · Hacia: Proteoma citoplasmático vía [[GroEL|groel]] y proteínas de la [[envoltura celular|real-envelope]]',
      scientific:
        'Estructura cristalográfica del ribosoma 70S de Escherichia coli (PDB 4YBB; ~2,3 MDa, ~25 × 22 × 22 nm; 10.398 esferas de residuo/nucleótido) integrada por la subunidad 30S (ARNr 16S de 1.542 nt + 21 proteínas S1–S21) y la subunidad 50S (ARNr 23S de 2.904 nt + ARNr 5S de 120 nt + 33 proteínas L1–L36; 4.566 nt totales de ARNr transcritos desde 7 operones rrn). Su abundancia escala entre ~7.000 y ~50.000–72.000 copias/célula según la tasa de crecimiento, consumiendo ~4 equivalentes de ATP por enlace peptídico a ~16–22 aa/s.'
    }
  },

  'rnap-ecoli': {
    en: {
      simple:
        'Modeled from real crystal data, E. coli’s five-piece crab-claw polymerase rides with its detachable R2-D2 sigma-70 navigator to spot genes and launch RNA convoys.',
      story:
        'Built atom-for-atom from E. coli crystal coordinates, massive β and β′ [[polypeptide|polypeptide]] jaws form a 15-nanometre Doc Ock claw pinned by α dimers and ω. Perched on the rim like R2-D2 in an X-wing socket sits σ⁷⁰, whose [[α-helical|alpha-helix]] sensors spot promoter beacons on [[nucleoid|real-nucleoid]] DNA and melt open the helix.\n\nOnce the RNA spark catches, σ⁷⁰ pops free so the core claw rockets solo down [[active genes|real-gene]]—or stacks bumper-to-bumper down rRNA tracks to mass-produce new [[70S ribosomes|ribosome-ecoli]].',
      blueprint:
        'Role: Atomic-structure E. coli σ⁷⁰-holoenzyme transcription machine (PDB 4YG2) · From: Promoter DNA in [[nucleoid|real-nucleoid]], NTPs, and dissociable σ⁷⁰ specificity [[polypeptide|polypeptide]] · Inside: α₂ββ′ω crab-claw pincers + [[α-helix|alpha-helix]]-rich σ⁷⁰ melt promoter DNA around catalytic Mg²⁺ · To: Co-transcriptionally translated [[gene transcripts|real-gene]] and rRNA Christmas-tree operons for [[ribosomes|ribosome-ecoli]]',
      scientific:
        'Crystal structure of Escherichia coli RNA polymerase σ⁷⁰ holoenzyme (PDB 4YG2; 3,599 amino acid residues, ~458 kDa, ~15 nm across) comprising core subunits α₂ (2 × 329 aa), β (1,342 aa), β′ (1,407 aa), ω (91 aa), and housekeeping initiation factor σ⁷⁰ (RpoD, 613 aa). Domains σ₂ and σ₄ bind −10 (TATAAT, flipping non-template A−11 and T−7 into aromatic pockets) and −35 (TTGACA) hexamers respectively; after abortive cycling and σ3.2 finger displacement from the RNA exit channel (~9–11 nt), the core elongates at ~40–85 nt/s (~2,000–5,000 RNAP copies/cell, >60% clustered on the 7 rrn operons during rapid growth).'
    },
    es: {
      simple:
        'Modelada sobre el cristal real, la pinza de cinco piezas de la ARN polimerasa lleva acoplado su navegante sigma-70 tipo R2-D2 para localizar genes y lanzar trenes de ARN.',
      story:
        'Trazada átomo a átomo, dos grandes mandíbulas [[polipeptídicas|polypeptide]] β y β′ arman una tenaza de 15 nanómetros cerrada por α y ω. Encajado en el borde como R2-D2 en el ala-X viaja σ⁷⁰, cuyos sensores de [[hélice alfa|alpha-helix]] leen las balizas promotoras del [[nucleoide|real-nucleoid]] y abren la doble hélice.\n\nApenas prende la síntesis, σ⁷⁰ se suelta para que la pinza acelere en solitario por los [[genes activos|real-gene]] o forme caravanas compactas en los operones que fabrican nuevos [[ribosomas 70S|ribosome-ecoli]].',
      blueprint:
        'Rol: Holoenzima ARN polimerasa-σ⁷⁰ de E. coli a escala atómica (PDB 4YG2) · De: ADN promotor del [[nucleoide|real-nucleoid]], NTPs y subunidad guía σ⁷⁰ de [[polipéptido|polypeptide]] · Dentro: Tenazas α₂ββ′ω y dominios en [[hélice alfa|alpha-helix]] de σ⁷⁰ funden el promotor sobre el Mg²⁺ catalítico · Hacia: [[Transcripción acoplada|real-gene]] de ARNm y síntesis masiva de ARNr para [[ribosomas 70S|ribosome-ecoli]]',
      scientific:
        'Estructura cristalina de la holoenzima ARN polimerasa-σ⁷⁰ de Escherichia coli (PDB 4YG2; 3.599 residuos, ~458 kDa, ~15 nm) formada por el núcleo α₂ (2 × 329 aa), β (1.342 aa), β′ (1.407 aa), ω (91 aa) y el factor vegetativo σ⁷⁰ (RpoD, 613 aa). Las regiones σ₂ y σ₄ reconocen los hexámeros −10 (TATAAT, capturando A−11 y T−7 evertidas en bolsillos aromáticos) y −35 (TTGACA); tras superar la iniciación abortiva y desplazar el dedo σ3.2 del canal de salida (~9–11 nt), elonga a ~40–85 nt/s (~2.000–5.000 copias/célula en crecimiento rápido).'
    }
  },

  groel: {
    en: {
      simple:
        'Built like Tony Stark’s cylindrical Iron Man suit-up chamber—or a Dragon Ball Z healing pod—GroEL–GroES seals tangled new proteins inside alone for ten seconds to fold cleanly.',
      story:
        'Fresh [[polypeptides|polypeptide]] tumbling out of [[E. coli ribosomes|ribosome-ecoli]] hit a cytoplasmic mosh pit so crowded that sticky hydrophobic patches risk clumping into junk. Standing ready like Tony Stark’s automated suit gantry—or Goku’s healing pod—this 14-subunit double barrel snatches the misfolded rookie into its open ring.\n\nSeven ATPs click in, slamming the dome-shaped GroES helmet lid on top while flipping the inner wall from greasy to water-friendly and doubling room size! Ten quiet VIP seconds later, its [[alpha helices|alpha-helix]] snap into hero form and the pod pops open into the [[cytosol|cytosol]].',
      blueprint:
        'Role: ATP-driven cylindrical chaperonin isolation chamber (PDB 1AON) · From: Misfolded nascent [[polypeptides|polypeptide]] from [[70S ribosomes|ribosome-ecoli]] and 7 ATP per ring cycle · Inside: Back-to-back GroEL₁₄ heptameric rings capped by GroES₇ dome switch hydrophobic lining to hydrophilic for ~10 s isolated folding · To: Native folded [[α-helical|alpha-helix]]/β-sheet enzymes released into [[cytosol|cytosol]] plus 7 ADP + Pi',
      scientific:
        'Group I bacterial chaperonin complex GroEL₁₄–GroES₇ (PDB 1AON; ~875 kDa total, ~14 nm diameter × 18–20 nm height; 8,015 residues) essential for E. coli viability (~10–15% of cytoplasmic proteome requires GroEL, including ~85 obligate TIM-barrel/αβ-fold substrates up to ~60 kDa). Comprises two back-to-back homoheptameric GroEL rings (~57 kDa × 14; equatorial ATPase, intermediate hinge, and apical substrate-binding domains) alternating in negative-cooperativity bullet cycles with a homoheptameric GroES co-chaperonin dome (~10 kDa × 7). Cooperative binding of 7 ATP + GroES expands the cis-cavity to ~175,000 Å³, burying hydrophobic apical patches for a ~10 s folding timer (kcat ≈ 0.1 s⁻¹) terminated by trans-ring ATP binding.'
    },
    es: {
      simple:
        'Como la cabina cilíndrica donde se ensambla la armadura de Iron Man —o una cápsula médica de Dragon Ball Z—, GroEL–GroES aísla proteínas enredadas diez segundos para plegarlas.',
      story:
        'Los [[polipéptidos|polypeptide]] recién salidos de los [[ribosomas de E. coli|ribosome-ecoli]] caen en un pogo citoplasmático tan apretado que sus parches grasos podrían pegarse en chatarra. Al quite espera este doble barril de catorce piezas estilo taller de Tony Stark —o cápsula curativa de Goku— para atrapar al recluta mal plegado.\n\nSiete ATP bajan la cúpula GroES como un casco hermético, duplicando el espacio y volviendo hidrófilas las paredes. Tras diez segundos de paz VIP, sus [[hélices alfa|alpha-helix]] encajan impecables y la compuerta salta devolviéndolo listo al [[citosol|cytosol]].',
      blueprint:
        'Rol: Cámara cilíndrica de aislamiento y plegado asistido por ATP (PDB 1AON) · De: [[Polipéptidos|polypeptide]] mal plegados procedentes de [[ribosomas 70S|ribosome-ecoli]] y 7 ATP por ciclo · Dentro: Dos anillos heptaméricos GroEL₁₄ con tapa GroES₇ conmutan su cavidad de hidrófoba a hidrófila durante ~10 s · Hacia: Enzimas nativas con [[hélices alfa|alpha-helix]] y láminas β liberadas al [[citosol|cytosol]] más 7 ADP + Pi',
      scientific:
        'Complejo chaperonina bacteriano de grupo I GroEL₁₄–GroES₇ (PDB 1AON; ~875 kDa, ~14 nm de ancho × 18–20 nm de alto) indispensable para la viabilidad de E. coli (~85 sustratos estrictos obligados de hasta ~60 kDa, a menudo barriles TIM α/β). Formado por dos anillos homoheptaméricos GroEL (~57 kDa × 14; dominios ecuatorial ATPasa, bisagra intermedia y apical) acoplados asimétricamente a una cúpula homoheptamérica GroES (~10 kDa × 7). La unión cooperativa de 7 ATP + GroES expande la cámara cis a ~175.000 Å³ ocultando parches hidrofóbicos durante ~10 s (kcat ≈ 0,1 s⁻¹) hasta que el ATP en el anillo trans eyecta tapa y sustrato.'
    }
  },

  'hu-protein': {
    en: {
      simple:
        'Skipping heavy eukaryotic histone spools, agile Spider-Man-like HU clips swing in and out of DNA grooves in milliseconds—bending sharp hairpins without locking genes away.',
      story:
        'Human cells wrap DNA around heavy histone boulders; speedrunner E. coli hires 30,000 parkour-nimble HU dimers to tame its 1.6-millimetre [[nucleoid|real-nucleoid]]! Folded from compact [[alpha-helical|alpha-helix]] bodies, HU slips two β-ribbon fingers into the minor groove of [[DNA|dna]] to kink hairpin turns on a dime.\n\nLike Spider-Man vaulting off a lamppost, HU clips on and off in milliseconds—cinching tidy loops behind the [[replication fork|real-fork]] while leaping politely aside whenever [[RNA polymerase|rnap-ecoli]] thunders through!',
      blueprint:
        'Role: Sequence-independent minor-groove DNA architectural bender (PDB 1MUL) · From: HupA and HupB [[polypeptides|polypeptide]] synthesized on cytoplasmic ribosomes · Inside: ~18 kDa [[α-helical|alpha-helix]] dimer inserts two β-ribbon arms (Pro63 intercalation) into [[DNA|dna]] minor groove to induce ~105–140° bends · To: Compact plectonemic loops in [[nucleoid|real-nucleoid]], newly replicated duplexes behind [[replication fork|real-fork]], and promoter loops near [[RNA polymerase|rnap-ecoli]]',
      scientific:
        'Most abundant nucleoid-associated protein in exponentially growing E. coli (~30,000–50,000 dimers/cell; heterodimer HUαβ encoded by hupA/hupB, ~18 kDa, ~3 nm core; PDB 1MUL). Comprises an intertwined α-helical body supporting two flexible antiparallel β-ribbon arms that track the B-DNA minor groove independent of sequence (footprint ~9–36 bp), intercalating conserved Pro63 residues at two sites 9 bp apart to induce sharp bends (105–140°) and restrain negative supercoils alongside Fis, IHF, and DNA gyrase.'
    },
    es: {
      simple:
        'En lugar de pesados carretes de histonas, las ágiles pinzas HU entran y salen del ADN en milisegundos al estilo Spider-Man, doblando curvas cerradas sin bloquear genes.',
      story:
        'Nuestras células enrollan el ADN en pesados bloques de histonas; la velocista E. coli contrata treinta mil acróbatas HU para domar los 1,6 milímetros del [[nucleoide|real-nucleoid]]. Con un cuerpo compacto de [[hélices alfa|alpha-helix]], HU mete dos dedos flexibles en el surco menor del [[ADN|dna]] para doblar horquillas en el acto.\n\nIgual que Spider-Man apoyándose y saltando en milisegundos, HU recoge los bucles tras la [[horquilla de replicación|real-fork]] y se aparta al vuelo apenas asoma la [[ARN polimerasa|rnap-ecoli]].',
      blueprint:
        'Rol: Proteína arquitectónica plegadora del surco menor del ADN sin especificidad de secuencia (PDB 1MUL) · De: Cadenas [[polipeptídicas|polypeptide]] HupA y HupB traducidas en el citosol · Dentro: Dímero de ~18 kDa con cuerpo en [[hélice alfa|alpha-helix]] y dos brazos β (Pro63) que doblan el [[ADN|dna]] ~105–140° · Hacia: Compactación de plectonemas en el [[nucleoide|real-nucleoid]], dúplex hijos tras la [[horquilla de replicación|real-fork]] y regiones vecinas a [[ARN polimerasa|rnap-ecoli]]',
      scientific:
        'Proteína asociada al nucleoide más abundante en E. coli exponencial (~30.000–50.000 dímeros/célula; heterodímero HUαβ codificado por hupA/hupB, ~18 kDa, cuerpo de ~3 nm; PDB 1MUL). Presenta un núcleo entrelazado de hélices α del que proyectan dos brazos antiparalelos de lámina β que abrazan el surco menor del ADN-B sin especificidad de secuencia (huella de 9–36 pb), intercalando dos residuos Pro63 separados por 9 pb para inducir curvaturas pronunciadas (105–140°) y estabilizar superenrollamientos negativos.'
    }
  },

  chemoreceptor: {
    en: {
      simple:
        'Dangling from the nose array like a Daredevil radar tuning fork, this four-helix rod telegraphs a one-atom nudge of sugar taste down to the ship’s steering clutch.',
      story:
        'Picture a 20-nanometre Daredevil radar wand of four coiled [[alpha helices|alpha-helix]] hanging inside the bow [[chemoreceptor array|real-pole]]. When a sugar or [[amino acid|amino-acid]] kisses its outer tip, one helix slides inward by barely 1.5 ångströms—one atom’s width!—yet the shaft telegraphs that whisper all the way down to calm the CheA kinase.\n\nSo the pilot never goes nose-blind in rich soup, adaptation enzymes add or snip methyl tags along its [[polypeptide|polypeptide]] belt—giving the [[flagellar motors|real-motor]] a two-second memory to ask, "Is life getting sweeter or worse?"',
      blueprint:
        'Role: Transmembrane chemotaxis transducer and methylation-memory rod (PDB 1QU7) · From: Periplasmic attractant [[amino acids|amino-acid]] or MalE-bound [[glucose|glucose]]/maltose · Inside: Homodimeric four-[[α-helix|alpha-helix]] coiled-coil hairpin (~20 nm cytoplasmic stalk) with HAMP domain, Glu/Gln methylation belt, and CheA/CheW tip · To: Polar [[chemoreceptor array|real-pole]] kinase control governing [[flagellar motor|real-motor]] tumbling frequency',
      scientific:
        'Methyl-accepting chemotaxis protein homodimer (MCP, e.g. E. coli Tsr/Tar cytoplasmic domain PDB 1QU7; ~60 kDa/monomer, ~36 nm total length, ~20 nm cytoplasmic four-helix bundle). Ligand binding to the periplasmic four-helix sensor domain induces a ~1.5 Å piston displacement of transmembrane helix TM2 through the cytoplasmic HAMP domain into the coiled-coil signaling stalk. Reversible SAM-dependent methylation by CheR and CheB-P hydrolysis at 4–5 specific glutamate residues resets kinase baseline activity, enabling temporal derivative sensing (Δ[L]/[L] sensitivity <0.1%).'
    },
    es: {
      simple:
        'Colgando en proa como el bastón radar de Daredevil, esta varilla de cuatro hélices transmite un empujón de apenas un átomo desde el azúcar exterior hasta el timón.',
      story:
        'Imagina un bastón sensorial digno de Daredevil de 20 nanómetros y cuatro [[hélices alfa|alpha-helix]] suspendido en la [[matriz polar de quimiorreceptores|real-pole]]. Cuando un azúcar o [[aminoácido|amino-acid]] roza su punta externa, una hélice baja apenas el ancho de un átomo, pero el fuste transmite ese susurro íntegro para calmar abajo a la quinasa CheA.\n\nPara no saturarse en un caldo rico, dos enzimas ponen y quitan marcas metilo sobre sus tallos [[polipeptídicos|polypeptide]], dando a los [[motores flagelares|real-motor]] memoria de dos segundos para comparar si el rastro mejora.',
      blueprint:
        'Rol: Transductor transmembrana de quimiotaxis con memoria adaptativa por metilación (PDB 1QU7) · De: [[Aminoácidos|amino-acid]] o [[glucosa|glucose]]/maltosa periplásmicos · Dentro: Horquilla homodimérica en haz de cuatro [[hélices alfa|alpha-helix]] (~20 nm citoplasmáticos) con dominio HAMP, banda de metilación Glu y punta de unión a CheA/CheW · Hacia: Control de quinasa en la [[matriz polar|real-pole]] para modular vuelcos del [[motor flagelar|real-motor]]',
      scientific:
        'Homodímero de proteína de quimiotaxis aceptora de metilo (MCP, dominio citoplasmático Tsr de E. coli PDB 1QU7; ~60 kDa/monómero, ~36 nm de longitud total, tallo citoplasmático de ~20 nm en superhélice de cuatro hélices). La unión de ligando en el periplasma desplaza tipo pistón (~1,5 Å) la hélice TM2 a través del conversor HAMP hasta la punta reguladora de CheA. La metilación reversible dependiente de S-adenosilmetionina (CheR) y desmetilación (CheB-P) en 4–5 glutamatos específicos reajusta el equilibrio conformacional, otorgando memoria temporal de varios segundos.'
    }
  },

  'real-fork': {
    en: {
      simple:
        'Roaring like a twin-engine Tron light-cycle at 1,000 letters per second, the replisome writes one DNA strand straight ahead while looping the partner strand like a slide trombone!',
      story:
        'Cloning 4.64 million letters in forty minutes takes twin Tron light-cycles—and here is one replisome caught mid-drift inside the [[nucleoid|real-nucleoid]]! Up front, six-ring [[DnaB helicase|dnab-helicase]] burns ATP to split parental [[DNA|dna]] at 1,000 bases a second, feeding the top rail straight into leading-strand [[DNA polymerase III|pol3-ecoli]].\n\nBecause the bottom strand runs backward chemically, the machine pulls a jazz-trombone stunt: DnaG stamps pink RNA primers, white SSB spools guard the looping single strand, and a twin Pol III stitches 1,500-base Okazaki runs while [[HU clips|hu-protein]] fold both fresh chromosomes aft.',
      blueprint:
        'Role: Coupled bidirectional E. coli replisome (~1,000 bp/s per fork) · From: Supercoiled parental [[DNA|dna]] in [[nucleoid|real-nucleoid]], dNTPs, NTP primers, and ATP · Inside: [[DnaB helicase|dnab-helicase]] unwinds duplex; τ-tethered twin [[Pol III cores|pol3-ecoli]] + β₂ clamps synthesize continuous leading strand and DnaG-primed, SSB-coated lagging Okazaki loops · To: Two semiconservative sister chromosomes folded immediately by [[HU|hu-protein]] and [[gyrase|gyrase]]',
      scientific:
        'True-scale ~250 nm E. coli replication fork initiated bidirectionally from oriC toward ter sites (~40 min C-period at 1,000 nt/s). Integrates hexameric DnaB helicase (PDB 6QEL) translocating 5′→3′ on the lagging template, DnaG primase (PDB 1DDE) synthesizing ~10–12 nt RNA primers every 1–2 kb, homotetrameric SSB spools (PDB 1EYG, ~65–85 nt wrapped per tetramer), pentameric γ/τ₃δδ′χψ clamp loader (PDB 3GLF) depositing dimeric β₂ sliding clamps, and coupled leading/lagging Pol III αεθ cores (PDB 5FKV), followed by Pol I nick translation and NAD⁺-dependent DNA ligase.'
    },
    es: {
      simple:
        'Rugiendo como una moto de luz de Tron de doble motor a mil letras por segundo, el replisoma escribe una hebra recta mientras curva la otra como la vara de un trombón.',
      story:
        'Copiar 4,64 millones de bases en cuarenta minutos exige dos motos de luz estilo Tron a tope, y aquí ves un replisoma en plena curva dentro del [[nucleoide|real-nucleoid]]. En proa, el anillo de la [[helicasa DnaB|dnab-helicase]] abre el [[ADN|dna]] parental a mil bases por segundo, sirviendo la vía superior directa a una [[ADN polimerasa III|pol3-ecoli]] continua.\n\nComo la otra vía corre al revés, ejecuta un truco de trombón: la primasa DnaG pone cebadores rosas, carretes blancos SSB protegen el bucle abierto y una Pol III gemela cose tramos de Okazaki mientras pinzas [[HU|hu-protein]] pliegan detrás ambos cromosomas.',
      blueprint:
        'Rol: Replisoma acoplado de E. coli (~1.000 pb/s por horquilla) · De: [[ADN|dna]] parental del [[nucleoide|real-nucleoid]], dNTPs, NTPs para cebadores y ATP · Dentro: [[Helicasa DnaB|dnab-helicase]] separa la hélice; dos núcleos [[Pol III|pol3-ecoli]] unidos por brazos τ copian la hebra conductora continua y el bucle rezagado con SSB y cebadores de [[ARN|rna]] (DnaG) · Hacia: Dos cromosomas semiconservativos compactados por [[HU|hu-protein]] y [[girasa|gyrase]]',
      scientific:
        'Horquilla de replicación de E. coli a escala real (~250 nm) que avanza desde oriC hacia ter (~40 min de periodo C a ~1.000 pb/s). Reúne la helicasa hexamérica DnaB (PDB 6QEL) sobre el molde rezagado 5′→3′, primasa DnaG (PDB 1DDE; cebadores de ARN de ~10–12 nt cada 1–2 kb), tetrámeros SSB recubriendo ADN monocatenario (PDB 1EYG; ~65–85 nt/tetrámero), cargador de pinza τ₃δδ′χψ (PDB 3GLF), anillos deslizantes diméricos β₂ y polimerasas gemelas Pol III αεθ (PDB 5FKV), seguidas de ADN Pol I y ligasa dependiente de NAD⁺.'
    }
  },

  'atp-synthase-ecoli': {
    en: {
      simple:
        'Bolted straight into E. coli’s inner skin like Tony Stark’s rotary Arc Reactor, ATP synthase spins on incoming protons to mint three fresh ATP coins every turn!',
      story:
        'No mitochondria? Bolt Tony Stark’s Arc Reactor straight into your [[cell envelope’s|real-envelope]] inner skin, facing the [[cytosol|cytosol]]! Protons banked outside by [[Complex I|complex-i-ecoli]] hop onto a 10-spoke carousel of [[alpha-helical|alpha-helix]] hairpins, whirling the central γ–ε camshaft inside the stationary α₃β₃ crown.\n\nEvery full spin slams spent ADP and phosphate into three fresh ATP fuel coins. Wildest plot twist: if oxygen vanishes in the gut, the turbine runs backward—burning glycolytic ATP to pump protons out so the [[flagellar motors|real-motor]] never lose power!',
      blueprint:
        'Role: Reversible inner-membrane rotary F₁F₀ ATP synthase/ATPase (PDB 6OQR) · From: Periplasmic H⁺ gradient from [[Complex I|complex-i-ecoli]] plus cytosolic ADP + [[phosphate|phosphate]] · Inside: 10-subunit F₀ c₁₀ [[α-helical|alpha-helix]] ring + a stator spin central γ–ε stalk inside b₂δ-braced α₃β₃ head · To: 3 ATP per 360° turn (10 H⁺ / 3 ATP ≈ 3.3 H⁺/ATP) powering [[ribosomes|ribosome-ecoli]], [[GroEL|groel]], and [[replisomes|real-fork]]',
      scientific:
        'Cryo-EM structure of intact Escherichia coli F₁F₀ ATP synthase (PDB 6OQR; ~530 kDa, ~25 nm height, 8 subunit types: F₁ α₃β₃γδε + F₀ ab₂c₁₀). Transmembrane proton translocation across two offset half-channels in subunit a protonates/deprotonates Asp61 on the 10-hairpin c₁₀ rotor ring, driving 120° stepping of the asymmetric γ–ε stalk against the stationary α₃β₃ hexamer braced by the peripheral b₂δ stalk. Yields 3 ATP per 10 H⁺ (H⁺/ATP = 3.33) at up to ~100–270 revolutions/s under aerobic Δp, or hydrolyzes ATP in anaerobiosis to maintain Δp.'
    },
    es: {
      simple:
        'Atornillada en la piel interna de E. coli como el Reactor Arc rotatorio de Tony Stark, la ATP sintasa gira con protones para acuñar tres monedas de ATP por vuelta.',
      story:
        '¿Sin mitocondrias? ¡Atornilla el Reactor Arc de Iron Man directo en la piel interna de la [[envoltura celular|real-envelope]] mirando al [[citosol|cytosol]]! Los protones acumulados afuera por el [[Complejo I|complex-i-ecoli]] hacen girar un carrusel de diez horquillas de [[hélice alfa|alpha-helix]], rotando el árbol de levas γ–ε dentro de la corona α₃β₃.\n\nCada giro completo prensa ADP y fosfato en tres monedas nuevas de ATP. Y si falta el oxígeno en el intestino, ¡invierte la marcha quemando ATP para expulsar protones y mantener vivos los [[motores flagelares|real-motor]]!',
      blueprint:
        'Rol: Turbina rotatoria reversible F₁F₀ ATP sintasa de membrana interna (PDB 6OQR) · De: Gradiente periplásmico de H⁺ del [[Complejo I|complex-i-ecoli]], ADP y [[fosfato|phosphate]] · Dentro: Anillo c₁₀ de [[hélices alfa|alpha-helix]] e interfaz a giran el tallo γ–ε dentro del cabezal α₃β₃ frenado por b₂δ · Hacia: 3 ATP por vuelta (3,33 H⁺/ATP) para [[ribosomas|ribosome-ecoli]], [[GroEL|groel]] y [[horquilla de replicación|real-fork]]',
      scientific:
        'Estructura crio-EM de la ATP sintasa F₁F₀ íntegra de Escherichia coli (PDB 6OQR; ~530 kDa, ~25 nm de altura, 8 tipos de subunidades: F₁ α₃β₃γδε + F₀ ab₂c₁₀). El paso de H⁺ por dos semicanales desfasados de la subunidad a protona/desprotona Asp61 en el anillo c₁₀, impulsando pasos rotatorios de 120° del eje γ–ε dentro del hexámero α₃β₃ inmovilizado por el estator periférico b₂δ. Sintetiza 3 ATP por cada 10 H⁺ (relación 3,33 H⁺/ATP) a ~100–270 rps bajo respiración aerobia, o hidroliza ATP en anaerobiosis para sostener Δp.'
    }
  },

  'complex-i-ecoli': {
    en: {
      simple:
        'Built like a Pacific Rim L-shaped diesel-electric piston, Complex I strips high-voltage electrons from NADH in its upright tower to heave four protons out its horizontal hull arm.',
      story:
        'While human mitochondria pad Complex I with thirty extra trim pieces, E. coli runs the lean 13-subunit hot-rod engine right in its [[inner envelope|real-envelope]]. NADH from cracked sugars hands two high-voltage electrons to a flavin sparkplug, shooting them down a nine-step iron–sulfur wire to the hinge.\n\nWhen those electrons jump onto membrane quinone, an electrostatic shockwave fires four [[alpha-helical|alpha-helix]] proton pistons along the horizontal arm—charging the periplasmic battery that spins [[ATP synthases|atp-synthase-ecoli]], pod-racer [[flagellar motors|real-motor]], and [[AcrAB–TolC pumps|acrab-tolc]]!',
      blueprint:
        'Role: Minimalist 13-subunit respiratory NADH:quinone oxidoreductase H⁺ pump (PDB 7NYR) · From: Cytoplasmic NADH + H⁺ from glycolysis/TCA and membrane ubiquinone/menaquinone · Inside: L-shaped NuoA–N complex transfers 2 e⁻ across FMN + 9 Fe–S clusters in peripheral arm to drive 4 H⁺ ejection across [[α-helical|alpha-helix]] membrane arm · To: Reduced quinol for terminal oxidases and periplasmic Δp feeding [[ATP synthase|atp-synthase-ecoli]], [[flagellar motor|real-motor]], and [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Cryo-EM structure of Escherichia coli respiratory Complex I / NADH dehydrogenase I (NDH-1, encoded by nuoA–N with fused NuoCD; 13 polypeptides, ~535 kDa, ~15 nm peripheral arm × ~18 nm membrane arm; PDB 7NYR)—the minimal catalytic core conserved in 45-subunit mammalian Complex I. Oxidizes cytoplasmic NADH via non-covalent FMN and transfers 2 e⁻ down a ~95 Å chain of 9 iron–sulfur clusters (2 [2Fe–2S], 7 [4Fe–4S], ending at N2) to ubiquinone-8/menaquinone-8, coupling ΔE°′ ≈ +0.42 V to conformational/electrostatic proton translocation across NuoL, NuoM, NuoN, and NuoH/A/J/K channels (stoichiometry 4 H⁺/2 e⁻).'
    },
    es: {
      simple:
        'Como un motor en L de Pacific Rim con cuatro pistones en serie, el Complejo I arranca electrones al NADH en su torre vertical para expulsar cuatro protones por su brazo de membrana.',
      story:
        'Mientras nuestras mitocondrias forran su Complejo I con treinta piezas extra, E. coli monta en su [[envoltura interna|real-envelope]] el bloque motor puro de trece subunidades. El NADH entrega dos electrones a tope que bajan como un rayo por nueve estaciones de hierro-azufre hasta la bisagra.\n\nAl saltar sobre una quinona, la onda electrostática acciona cuatro pistones de [[hélices alfa|alpha-helix]] en el brazo horizontal y lanza cuatro protones al periplasma, cargando la batería que mueve la [[ATP sintasa|atp-synthase-ecoli]], los [[motores flagelares|real-motor]] y los cañones [[AcrAB–TolC|acrab-tolc]].',
      blueprint:
        'Rol: Bomba respiratoria minimalista NADH:quinona oxidorreductasa de 13 subunidades (PDB 7NYR) · De: NADH citoplasmático (glucólisis/TCA) y ubiquinona/menaquinona de membrana · Dentro: Complejo NuoA–N en L conduce 2 e⁻ por FMN y 9 centros Fe–S para bombear 4 H⁺ mediante antiporters de [[hélices alfa|alpha-helix]] · Hacia: Quinol reducido para oxidasas terminales y gradiente H⁺ periplásmico para [[ATP sintasa|atp-synthase-ecoli]], [[motor flagelar|real-motor]] y [[AcrAB–TolC|acrab-tolc]]',
      scientific:
        'Estructura crio-EM de la NADH deshidrogenasa I de Escherichia coli (NDH-1, operón nuoA–N con fusión NuoCD; 13 polipéptidos, ~535 kDa, brazo periférico de ~15 nm × brazo membranoso de ~18 nm; PDB 7NYR), núcleo catalítico mínimo homólogo al Complejo I mitocondrial de 45 subunidades. Oxida NADH mediante FMN y conduce 2 e⁻ a través de 9 centros hierro-azufre (2 [2Fe–2S] y 7 [4Fe–4S] hasta el centro N2) hacia ubiquinona-8/menaquinona-8, acoplando la caída redox al bombeo vectorial de 4 H⁺/2 e⁻ por las subunidades antiporter NuoL, NuoM, NuoN y NuoH/A/J/K.'
    }
  },

  'acrab-tolc': {
    en: {
      simple:
        'Think Ghostbusters proton-pack meets rooftop bilge cannon: 33-nanometre AcrAB–TolC snatches antibiotics in the foyer before they ever reach the cytosol and blasts them outside!',
      story:
        'Who ya gonna call when antibiotics breach the outer gate? Spanning all 33 nanometres of the [[cell envelope|real-envelope]], Ghostbusters-style AcrB patrols the [[plasma membrane|plasma-membrane]] like a rotating three-chambered containment trap—snatching bile salts, soaps, dyes, and broad-spectrum drugs right out of the periplasmic foyer before they touch a single ribosome!\n\nPowered by protons roaring back inward from [[Complex I|complex-i-ecoli]], the trimer cycles through Loose, Tight, and Open strokes like a peristaltic bilge cannon, ramming poisons up the AcrA adapter collar and firing them clean out the TolC rooftop chimney past the [[LPS|lps]] shield.',
      blueprint:
        'Role: Tripartite RND proton-antiporter multidrug efflux cannon (PDB 5O66) · From: Hydrophobic antibiotics, bile salts, and detergents in periplasm/[[plasma membrane|plasma-membrane]] plus periplasmic H⁺ from [[Complex I|complex-i-ecoli]] · Inside: AcrB₃ inner-membrane peristaltic pump + AcrA₆ periplasmic funnel + TolC₃ outer-membrane channel spanning [[cell envelope|real-envelope]] · To: Direct expulsion past [[LPS|lps]] barrier into extracellular medium and H⁺ return to cytosol',
      scientific:
        'Cryo-EM structure of the Escherichia coli tripartite RND multidrug efflux complex AcrB₃–AcrA₆–TolC₃ (PDB 5O66; ~770 kDa, ~33 nm axial length spanning inner membrane, periplasm, and outer membrane). Inner-membrane RND antiporter AcrB homotrimer undergoes functional rotation across Loose (Access), Tight (Binding, hydrophobic Phe-rich pocket), and Open (Extrusion) states driven by inward H⁺ translocation via a transmembrane Asp407–Asp408–Lys940 relay. Substrates (β-lactams, fluoroquinolones, tetracyclines, macrolides, chloramphenicol, bile salts) are funneled through the hexameric membrane-fusion protein AcrA and iris-opened 14-nm α/β-barrel TolC duct directly across the outer membrane.'
    },
    es: {
      simple:
        'Mitad trampa de los Cazafantasmas y mitad cañón de achique en el tejado: AcrAB–TolC intercepta antibióticos de 33 nanómetros abajo y los dispara fuera sin que pisen el citosol.',
      story:
        '¿A quién vas a llamar cuando un antibiótico cruza la primera puerta? Cruzando los 33 nanómetros de la [[envoltura celular|real-envelope]], el trímero AcrB vigila en la [[membrana plasmática|plasma-membrane]] como una trampa rotatoria de los Cazafantasmas de tres cámaras, cazando sales biliares, tintes y fármacos en el vestíbulo antes de que rocen un solo ribosoma.\n\nMovido por protones procedentes del [[Complejo I|complex-i-ecoli]], AcrB alterna sus cámaras en tres tiempos implacables, empujando el veneno por el manguito AcrA para escupirlo por la chimenea TolC más allá del escudo de [[LPS|lps]].',
      blueprint:
        'Rol: Cañón tripartito RND de eflujo multirresistente impulsado por H⁺ (PDB 5O66) · De: Antibióticos, detergentes y sales biliares en periplasma/[[membrana plasmática|plasma-membrane]] más H⁺ del [[Complejo I|complex-i-ecoli]] · Dentro: Bomba peristáltica AcrB₃ + embudo periplásmico AcrA₆ + conducto externo TolC₃ a través de la [[envoltura celular|real-envelope]] · Hacia: Expulsión directa más allá del [[LPS|lps]] al medio extracelular y entrada acoplada de H⁺',
      scientific:
        'Estructura crio-EM de la bomba tripartita de eflujo RND AcrB₃–AcrA₆–TolC₃ de Escherichia coli (PDB 5O66; ~770 kDa, ~33 nm de longitud axial transenvoltura). El homotrímero interno AcrB cicla de modo rotatorio funcional por los estados Acceso (L), Unión (T, bolsillo hidrofóbico rico en Phe) y Extrusión (O) acoplado a la entrada de protones por la tríada transmembrana Asp407–Asp408–Lys940. Los sustratos (β-lactámicos, fluoroquinolonas, macrólidos, tetraciclinas, sales biliares) ascienden sellados por el collar hexamérico AcrA y el túnel α/β TolC de 14 nm hacia el exterior.'
    }
  },

  'dnab-helicase': {
    en: {
      simple:
        'Threaded onto one DNA strand like a motorized Sonic gold ring, six-piece DnaB helicase burns ATP to unzip the double helix at 1,000 letters per second.',
      story:
        'Riding the nosecone of the [[replication fork|real-fork]] like a turbo-charged Sonic gold ring, six DnaB subunits encircle the lagging [[DNA|dna]] strand while wedging the partner strand outside like a high-speed snowplow. Burning ATP sequentially around the hexamer, inner staircase loops haul hand-over-hand two letters per step to rip 1,000 base pairs open every second!\n\nFlexible τ tow-cables hitch DnaB directly to twin [[DNA polymerase III|pol3-ecoli]] engines so unzipping never outruns typing, while its front shoulder flags down DnaG primase to stamp fresh RNA starter tabs.',
      blueprint:
        'Role: Hexameric 5′→3′ replicative DNA unzipping motor (PDB 6QEL) · From: DnaC-mediated loading at oriC onto parental [[DNA|dna]] plus cytosolic ATP/NTPs · Inside: Homohexameric [[polypeptide|polypeptide]] ring (~12 nm) translocates hand-over-hand along lagging template (2 nt/ATP) to sterically exclude leading strand · To: Unwound single-stranded templates feeding [[Pol III|pol3-ecoli]] and DnaG primase inside [[replication fork|real-fork]]',
      scientific:
        'Superfamily 4 replicative hexameric helicase DnaB₆ (PDB 6QEL; 6 × 52 kDa = ~312 kDa, ~12 nm outer diameter, ~2.5–4 nm central channel) loaded onto oriC ssDNA bubbles by ATP-bound DnaC₆. Translocates 5′→3′ along the lagging-strand template via sequential hand-over-hand subunit staircase cycling (2 nt translocated per NTP hydrolyzed; ~700–1,000 bp/s when coupled to Pol III via τ-subunit C-terminal domains, vs. ~35 bp/s uncoupled). Transiently recruits up to three DnaG primase molecules to its N-terminal collar to initiate Okazaki fragments.'
    },
    es: {
      simple:
        'Ensartada en una hebra de ADN como un anillo dorado motorizado de Sonic, la helicasa DnaB de seis piezas quema ATP para abrir la doble hélice a mil letras por segundo.',
      story:
        'En el morro mismo de la [[horquilla de replicación|real-fork]], seis piezas de DnaB cierran un anillo dorado digno de Sonic sobre la hebra rezagada de [[ADN|dna]], apartando como un quitanieves a toda marcha la hebra opuesta. Quemando ATP en rueda alrededor del hexámero, sus peldaños internos avanzan de dos en dos bases abriendo mil pares por segundo.\n\nTirantes flexibles τ atan a DnaB con las dos [[ADN polimerasas III|pol3-ecoli]] para que el corte nunca deje atrás a las mecanógrafas, mientras su hombro delantero llama a la primasa DnaG para plantar cebadores de ARN.',
      blueprint:
        'Rol: Motor hexamérico replicativo de desenrollamiento de ADN 5′→3′ (PDB 6QEL) · De: Carga por DnaC en oriC sobre [[ADN|dna]] parental y ATP/NTPs citosólicos · Dentro: Anillo homohexamérico de [[polipéptidos|polypeptide]] (~12 nm) que avanza mano sobre mano (2 nt/ATP) excluyendo estéricamente la hebra conductora · Hacia: Moldes monocatenarios abiertos para [[Pol III|pol3-ecoli]] y primasa DnaG en la [[horquilla de replicación|real-fork]]',
      scientific:
        'Helicasa replicativa hexamérica de superfamilia 4 DnaB₆ (PDB 6QEL; 6 × 52 kDa ≈ 312 kDa, ~12 nm de diámetro externo) depositada en oriC por el complejo cargador DnaC₆. Avanza en dirección 5′→3′ sobre el molde rezagado mediante un mecanismo secuencial en escalera espiral (2 nt por NTP hidrolizado; velocidad de ~700–1.000 pb/s acoplada al replisoma mediante los dominios C-terminales de τ, frente a ~35 pb/s aislada). Su collar N-terminal recluta transitoriamente a la primasa DnaG para iniciar cada fragmento de Okazaki.'
    }
  },

  'pol3-ecoli': {
    en: {
      simple:
        'Locked onto DNA by a golden Sonic-ring clamp, speed-typist Polymerase III hammers out 1,000 letters a second—and taps its built-in ε Backspace pocket whenever a typo slips in!',
      story:
        'Solo, this polymerase would fall off [[DNA|dna]] after a dozen letters; snap the golden β₂ doughnut clamp behind its back, and it sprints non-stop like Sonic on a grind rail! Drafting right behind [[DnaB helicase|dnab-helicase]] in the [[replication fork|real-fork]], its catalytic α palm welds cytosolic [[nucleotides|nucleotide]] at a blistering 1,000 hits per second.\n\nSlip in one rare mispaired base and geometry stalls the palm, flicking the frayed tip four nanometres sideways into the ε exonuclease Backspace shredder to delete the mistake on the spot—handing a near-flawless genome to the daughter [[nucleoid|real-nucleoid]].',
      blueprint:
        'Role: High-speed, high-fidelity replicative DNA polymerase + sliding clamp (PDB 5FKV) · From: Single-stranded templates from [[DnaB helicase|dnab-helicase]], RNA primers, and cytosolic dNTP [[nucleotides|nucleotide]] · Inside: α polymerase + ε 3′→5′ proofreading exonuclease + θ stabilizer locked onto [[DNA|dna]] by dimeric β₂ ring clamp · To: Semiconservative leading and Okazaki lagging duplexes inside [[replication fork|real-fork]] (<10⁻⁷ error/bp)',
      scientific:
        'Cryo-EM structure of the Escherichia coli replicative DNA polymerase III core–clamp complex on primer–template DNA (PDB 5FKV; ~13 nm across). Core heterotrimer comprises family-C polymerase α (DnaE, 1,160 aa, 130 kDa), DnaQ/ε 3′→5′ proofreading exonuclease (243 aa, 27.5 kDa), and HolE/θ stabilizer (8.8 kDa), tethered via two hydrophobic peptide motifs to the homodimeric head-to-tail β₂ sliding clamp (DnaN₂, 2 × 40.6 kDa ring encircling B-DNA). Synthesizes DNA at ~750–1,000 nt/s with processivity >50–500 kb; base selection (~10⁻⁵) plus ε exonucleolytic editing (~10⁻²) achieves ~10⁻⁷ replicative error prior to Dam-directed MutSLH mismatch repair (~10⁻¹⁰ final).'
    },
    es: {
      simple:
        'Engarzada al ADN por un anillo dorado estilo Sonic, la Polimerasa III teclea mil letras por segundo y pulsa al vuelo su bolsillo «Retroceso» si se cuela una errata.',
      story:
        'Sola, esta polimerasa se caería del [[ADN|dna]] en apenas doce letras; pero con el anillo dorado β₂ cerrado detrás, corre decenas de miles de bases sin soltarse como Sonic sobre un raíl. Pegada a la [[helicasa DnaB|dnab-helicase]] en la [[horquilla de replicación|real-fork]], su palma catalítica α suelda [[nucleótidos|nucleotide]] a un ritmo vertiginoso de mil golpes por segundo.\n\nSi entra una base falsa, el tropiezo geométrico desvía la punta cuatro nanómetros de lado hacia la trituradora correctora ε —su tecla «Retroceso»—, borrando el fallo al vuelo para entregar al nuevo [[nucleoide|real-nucleoid]] una copia impecable.',
      blueprint:
        'Rol: Polimerasa replicativa de alta velocidad y fidelidad con pinza deslizante (PDB 5FKV) · De: Moldes abiertos por la [[helicasa DnaB|dnab-helicase]], cebadores de ARN y [[nucleótidos|nucleotide]] dNTP · Dentro: Subunidad α polimerasa + exonucleasa correctora ε 3′→5′ + θ aseguradas al [[ADN|dna]] por el anillo dimérico β₂ · Hacia: Dúplex conductor y fragmentos de Okazaki en la [[horquilla de replicación|real-fork]] (error <10⁻⁷/pb)',
      scientific:
        'Estructura crio-EM del complejo replicativo ADN polimerasa III–pinza β₂ de Escherichia coli sobre ADN molde-cebador (PDB 5FKV; ~13 nm). El núcleo heterotrimérico reúne la polimerasa α de familia C (DnaE, 130 kDa), la exonucleasa correctora 3′→5′ ε (DnaQ, 27,5 kDa) y θ (HolE, 8,8 kDa), anclado al anillo homodimérico deslizante β₂ (DnaN₂, 2 × 40,6 kDa). Polimeriza a ~750–1.000 nt/s con procesividad >50–500 kb; la discriminación en el bolsillo activo (~10⁻⁵) sumada a la edición exonucleolítica de ε (~10⁻²) reduce la tasa de error a ~10⁻⁷ antes de la reparación MutSLH (~10⁻¹⁰ final).'
    }
  },

  gyrase: {
    en: {
      simple:
        'Pulling a Doctor Strange Sling-Ring portal trick on tangled DNA, gyrase snips both strands clean through, passes another loop across the gap, and seals it without a scar!',
      story:
        'Unzipping [[DNA|dna]] at 1,000 bases a second ahead of [[DnaB helicase|dnab-helicase]] and [[RNA polymerase|rnap-ecoli]] winds brutal phone-cord knots that would stall every engine on the ship. Enter the Sorcerer Supreme of the [[nucleoid|real-nucleoid]]: four-part DNA gyrase wraps a duplex loop, slices BOTH strands wide open, burns ATP to pass a second helix straight through the Sling-Ring portal, and welds the cut shut without losing grip!\n\nEvery magic pass erases two twists and spring-loads the chromosome for easy reading—which is why fluoroquinolone drugs like ciprofloxacin turn Doctor Strange lethal by wedging inside the open cut so gyrase cannot close its own portal.',
      blueprint:
        'Role: ATP-dependent Type IIA topoisomerase introducing negative supercoils (PDB 6RKW) · From: Positively overwound [[DNA|dna]] ahead of [[replication forks|real-fork]] and [[RNA polymerase|rnap-ecoli]], plus 2 ATP · Inside: GyrA₂GyrB₂ heterotetramer (~20 nm) cleaves double-stranded G-segment via Tyr122 covalent linkage, passes T-segment through 3 gates, and religates · To: Negatively supercoiled plectonemes (ΔLk = −2 per cycle) in [[nucleoid|real-nucleoid]] plus 2 ADP + Pi',
      scientific:
        'Cryo-EM structure of Escherichia coli DNA gyrase holoenzyme GyrA₂GyrB₂ (PDB 6RKW; ~374 kDa, ~20 nm tall; 2 × GyrA 97 kDa + 2 × GyrB 90 kDa)—unique among Type IIA topoisomerases in actively introducing negative supercoils against elastic torque. Wraps ~130 bp of DNA in a positive chiral loop around C-terminal GyrA β-pinwheel domains; ATP binding to GyrB GHKL domains closes the N-gate and drives strand passage of a T-segment through a transient 4-bp staggered double-strand break covalently tethered via 5′-phosphotyrosyl bonds to GyrA-Tyr122 (DNA-gate), exiting the C-gate for ΔLk = −2 per 2 ATP (~1–2 cycles/s). Poisoned by fluoroquinolones (ciprofloxacin, levofloxacin) stabilizing cleavage complexes and by aminocoumarins blocking GyrB ATPase.'
    },
    es: {
      simple:
        'Ejecutando un portal digno del Doctor Strange sobre el ADN enredado, la girasa corta ambas hebras de cuajo, pasa otro bucle por la brecha y sella el corte sin cicatriz.',
      story:
        'Abrir el [[ADN|dna]] a mil bases por segundo ante la [[helicasa DnaB|dnab-helicase]] y la [[ARN polimerasa|rnap-ecoli]] aprieta nudos feroces capaces de gripar todos los motores de la nave. Ahí entra el Hechicero Supremo del [[nucleoide|real-nucleoid]]: la ADN girasa rodea un tramo, taja AMBAS hebras, gasta ATP para cruzar otro segmento por el portal mágico abierto y vuelve a soldar los cabos sin soltarlos jamás.\n\nCada pase borra dos vueltas y tensa el muelle cromosómico para facilitar su lectura; por eso antibióticos como el ciprofloxacino resultan letales al acuñarse en mitad del portal e impedir que la girasa cierre su propio tajo.',
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
          'Built like a Wakandan border shield over half a lipid bilayer, E. coli’s outer membrane faces gut bile with magnesium-locked LPS sugar armor instead of ordinary fat.',
        story:
          'Gut life means swimming through bile detergents built to pop fat bubbles on sight. E. coli answers with a hybrid Wakandan outer hull: [[phospholipids|phospholipid]] line the inside, while fresh [[LPS|lps]] tiles ride a seven-protein elevator from the [[plasma membrane|plasma-membrane]] to pave the roof in magnesium-locked sugar bristles.\n\nGreasy drugs skid right off that wet shield while oxygen slips down to [[Complex I|complex-i-ecoli]]—forcing water-soluble snacks to check in at [[porin|porin]] bouncer gates.',
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
          'Como un escudo fronterizo de Wakanda sobre media bicapa, la membrana externa de E. coli encara la bilis intestinal con una coraza azucarada de LPS trabada con magnesio.',
        story:
          'Vivir en el intestino exige nadar entre detergentes biliares diseñados para reventar burbujas grasas. E. coli responde con un casco híbrido digno de Wakanda: [[fosfolípidos|phospholipid]] por dentro y bloques de [[LPS|lps]] subidos desde la [[membrana plasmática|plasma-membrane]] para pavimentar el techo con cerdas de azúcar y magnesio.\n\nLos fármacos grasos patinan sobre el escudo mientras el oxígeno baja hacia el [[Complejo I|complex-i-ecoli]], obligando a cualquier nutriente soluble a pasar revista en las [[porinas|porin]].',
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
          'Acting like club bouncers alongside R2-D2 hull-repair droids, OmpF porins let small sugars inside while BAM and LptDE machines build the outer armor with zero ATP!',
        story:
          'A sealed Wakandan shield would starve its own crew, so E. coli crowds the roof with three-barrel [[OmpF porins|porin]] passing [[glucose|glucose]] and [[amino acids|amino-acid]] under 600 daltons while OmpA rivets grip the [[peptidoglycan|peptidoglycan]] below.\n\nWildest engineering flex: there is zero ATP out here! Unfolded chains ride periplasmic chaperones to the R2-D2-like BAM barrel-loom, which folds fresh porins into the wall while LptD–LptE lays [[LPS|lps]] roof tiles.',
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
          'Como porteros con gálibo junto a droides reparadores estilo R2-D2, las porinas OmpF filtran nutrientes pequeños mientras BAM y LptDE arman el casco exterior sin gastar ATP.',
        story:
          'Un escudo hermético mataría de hambre a la tripulación, así que E. coli llena su cubierta de [[porinas OmpF|porin]] triples que admiten [[glucosa|glucose]] y [[aminoácidos|amino-acid]] ligeros, mientras OmpA atornilla el techo al [[peptidoglicano|peptidoglycan]].\n\n¿Y cómo se repara el casco donde no hay ni gota de ATP? Las cadenas viajan con chaperonas hasta el telar BAM —un auténtico R2-D2 mecánico— que incrusta barriles nuevos mientras su vecino LptD–LptE pavimenta con [[LPS|lps]].',
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
          'Like a Ghostbusters proton trap wired straight to a rooftop cannon, 33-nanometre AcrAB–TolC snatches antibiotics in the wall and fires them right back outside!',
        story:
          'Any antibiotic or bile salt that sneaks through a [[porin|porin]] or dives into the [[plasma membrane|plasma-membrane]] walks straight into a 33-nanometre Ghostbusters trap! Three-chambered [[AcrB pump|acrab-tolc]] scoops greasy poisons right out of the membrane foyer before they ever reach the cytosol.\n\nPowered by periplasmic protons banked by the [[respiratory chain|complex-i-ecoli]], AcrB squeezes in three rhythmic strokes—blasting the captured drug up AcrA and out the TolC chimney past the [[LPS|lps]] roof!',
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
          'Como una trampa de los Cazafantasmas conectada a un cañón en la azotea, AcrAB–TolC captura antibióticos a mitad del muro y los dispara de vuelta a la calle.',
        story:
          'Todo antibiótico o detergente que cruce una [[porina|porin]] o se hunda en la [[membrana plasmática|plasma-membrane]] cae en una emboscada estilo Cazafantasmas de 33 nanómetros. El rotor [[AcrAB–TolC|acrab-tolc]] pesca venenos grasos directamente de la bicapa antes de que pisen el citosol.\n\nImpulsado por los protones que bombeó el [[Complejo I|complex-i-ecoli]], AcrB comprime el fármaco en tres tiempos y lo catapulta por la chimenea TolC más allá del techo de [[LPS|lps]].',
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
          'Doubling as Frodo’s Mithril chainmail shirt and an acid-filled battery tank, the periplasmic moat stops the cell from popping while storing protons for every motor.',
        story:
          'Sandwiched between hulls, this 21-nanometre moat is half Mithril armor, half capacitor bank! Lipid II bricks flipped across the [[plasma membrane|plasma-membrane]] get welded into one seamless [[peptidoglycan|peptidoglycan]] chainmail bag riveted tight against multi-atmosphere turgor.\n\nAll around that mesh swirls a dense proton cloud pumped out by the [[respiratory chain|complex-i-ecoli]]—the live battery tapped by every [[ATP synthase|atp-synthase-ecoli]], pod-racer [[flagellar motor|real-motor]], and AcrAB–TolC cannon!',
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
          'Mitad cota de mithril de Frodo y mitad tanque acumulador de batería, el foso periplásmico impide que la célula estalle mientras guarda protones para todos sus motores.',
        story:
          'Entre ambas cubiertas, este foso de 21 nanómetros trabaja a la vez como malla de mithril y condensador eléctrico. Los ladrillos volteados desde la [[membrana plasmática|plasma-membrane]] se tejen en un único saco continuo de [[peptidoglicano|peptidoglycan]] capaz de aguantar atmósferas enteras de empuje.\n\nAlrededor flota la densa nube de protones cargada por el [[Complejo I|complex-i-ecoli]]: de esa batería viva beben cada [[ATP sintasa|atp-synthase-ecoli]], cada [[motor flagelar|real-motor]] y cada cañón expulsador.',
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
          'With zero mitochondria aboard, E. coli turns its own inner skin into a wrap-around Iron Man Arc Reactor—holding 160 millivolts to power ATP, import, and propulsion.',
        story:
          'Eukaryotes tuck power plants inside mitochondria; E. coli wires its entire inner skin into a 360-degree Tony Stark Arc Reactor! Only 7 nanometres thick, it holds 160 millivolts of proton voltage—a lightning-bolt electric field per metre.\n\nHalf its surface is solid turbo hardware: [[Complex I|complex-i-ecoli]] pumps protons into the [[periplasm|peptidoglycan]], [[ATP synthases|atp-synthase-ecoli]] and pod-racer [[flagellar motors|real-motor]] harvest them roaring back, and Cerebro [[chemoreceptors|real-pole]] steer up front.',
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
          'Sin mitocondrias a bordo, E. coli convierte toda su piel interna en un Reactor Arc envolvente estilo Iron Man de 160 milivoltios que fabrica ATP, importa comida y propulsa la nave.',
        story:
          'Las células eucariotas guardan sus centrales en mitocondrias; E. coli transforma su piel interna entera en un Reactor Arc de 360 grados digno de Tony Stark. En solo 7 nanómetros sostiene 160 milivoltios: la intensidad de campo de un relámpago.\n\nMedia superficie es pura maquinaria: el [[Complejo I|complex-i-ecoli]] carga de protones el [[periplasma|peptidoglycan]], la [[ATP sintasa|atp-synthase-ecoli]] y los [[motores flagelares|real-motor]] cosechan su vuelta, y la [[matriz polar|real-pole]] pilota en proa.',
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
          'Like Millennium Falcon hyperdrive coils stripping electrons from fuel, these inner-membrane pumps bank eight protons outside per NADH to keep the hull battery topped up.',
        story:
          'Cracked sugars hand high-voltage electrons to NADH couriers sprinting to [[Complex I|complex-i-ecoli]]. Two electrons zip down nine iron–sulfur rungs onto a ubiquinone shuttle cruising the [[plasma membrane|plasma-membrane]], kicking four protons out into the [[periplasm|peptidoglycan]].\n\nUbiquinol ferries the charge to cytochrome bo₃ oxidase, turning oxygen into water while banking four more protons outside—eight total per NADH to spin [[ATP synthases|atp-synthase-ecoli]] and [[flagellar motors|real-motor]] ship-wide!',
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
          'Como bobinas del hiperimpulsor del Halcón Milenario extrayendo electrones del combustible, estas bombas sacan ocho protones por cada NADH para cargar la batería del casco.',
        story:
          'Cada azúcar partido entrega electrones de alto voltaje en NADH directos al [[Complejo I|complex-i-ecoli]]. Dos electrones bajan por nueve peldaños de hierro-azufre hasta una ubiquinona que navega la [[membrana plasmática|plasma-membrane]], bombeando cuatro protones al [[periplasma|peptidoglycan]].\n\nLa oxidasa bo₃ entrega luego esos electrones al oxígeno formando agua y suma cuatro protones más: ocho por NADH para hacer rugir las [[ATP sintasas|atp-synthase-ecoli]] y los [[motores flagelares|real-motor]] de toda la nave.',
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
          'Spinning like golden Sonic coin-mints powered by incoming protons, dozens of ATP synthase turbines stamp spent ADP and phosphate into fresh ATP fuel.',
        story:
          'Out in the [[periplasm|peptidoglycan]], protons banked by [[Complex I|complex-i-ecoli]] crowd the gates to rush home. Golden [[ATP synthase turbines|atp-synthase-ecoli]] collect the toll: protons whirl the 10-spoke rotor and central γ–ε cam inside the α₃β₃ crown.\n\nEvery 120-degree click stamps spent ADP plus phosphate into a fresh ATP coin—snapped up in milliseconds by nearby [[RNA polymerases|rnap-ecoli]] and [[ribosomes|ribosome-ecoli]]!',
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
          'Girando como acuñadoras doradas de monedas estilo Sonic impulsadas por protones, decenas de turbinas ATP sintasa prensan ADP gastado y fosfato para crear ATP nuevo.',
        story:
          'En el [[periplasma|peptidoglycan]], los protones acumulados por el [[Complejo I|complex-i-ecoli]] empujan por volver adentro. Las turbinas doradas de [[ATP sintasa|atp-synthase-ecoli]] cobran peaje haciendo girar su rotor de diez radios y la leva γ–ε.\n\nCada tercio de vuelta acuña una moneda fresca de ATP que devoran al vuelo las [[ARN polimerasas|rnap-ecoli]] y los [[ribosomas|ribosome-ecoli]] vecinos.',
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
          'Lining the inner hull like Spirited Away bathhouse chutes and Star Trek emergency airlocks, pumps haul food in, Sec motors thread hull parts out, and MscS valves prevent popping!',
        story:
          'Snacks crossing outer [[porins|porin]] meet busy inner-hull customs: proton symporters haul sugars uphill, PTS gates tag [[glucose|glucose]] so it can’t sneak back out, and ABC pumps feed [[ribosomes|ribosome-ecoli]].\n\nOutbound Sec motors spend ATP from [[ATP synthase|atp-synthase-ecoli]] to thread a third of all new proteins into the [[periplasm|peptidoglycan]]—and if fresh water floods in, MscS panic airlocks pop open in microseconds so osmotic shock never blows the ship!',
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
          'Como compuertas de carga y esclusas de emergencia de Star Trek en la piel interna, estos puertos meten comida, exportan piezas del casco y abren válvulas MscS si sube la presión.',
        story:
          'Los nutrientes que cruzan las [[porinas|porin]] pasan por los aduaneros internos: permeasas suben azúcares con protones, puertas PTS sellan la [[glucosa|glucose]] con fosfato para que no escape e importadores ABC ceban a los [[ribosomas|ribosome-ecoli]].\n\nHacia fuera, el motor Sec gasta ATP de la [[ATP sintasa|atp-synthase-ecoli]] en enviar piezas al [[periplasma|peptidoglycan]]; y si un chaparrón diluye el entorno, las válvulas MscS saltan en microsegundos antes de que reviente el casco.',
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
          'Half a dozen Anakin-style pod-racer turbines stud the hull—braiding corkscrew whips behind the ship to rocket straight, or kicking clockwise to tumble onto a new trail!',
        story:
          'At two micrometres long, water feels thick as warm honey—shut off thrust and you stop in less than an atom’s width! E. coli bores through that syrup with ~6 proton-fed [[rotary motors|real-motor]] braced on [[peptidoglycan|peptidoglycan]] and powered by [[Complex I|complex-i-ecoli]].\n\nCounterclockwise spin braids long [[flagellar filaments|flagellum]] into one turbo propeller; one CheY-P alert from the [[chemoreceptor array|real-pole]] slams a motor clockwise, blowing the braid into a quick tumble toward sweeter water.',
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
          'Media docena de turbinas dignas de la vaina de Anakin rodean el casco: trenzan sus látigos para salir disparadas en recta o invierten el giro para virar de golpe.',
        story:
          'A escala de dos micrómetros el agua pesa como miel espesa: si cortas gas, frenas en menos de un átomo. Para taladrar ese jarabe, E. coli monta seis [[motores rotatorios|real-motor]] sujetos al [[peptidoglicano|peptidoglycan]] y cebados por el [[Complejo I|complex-i-ecoli]].\n\nAl girar en antihorario, los [[filamentos flagelares|flagellum]] se trenzan en un solo chorro propulsor; un aviso CheY-P desde la [[matriz de quimiorreceptores|real-pole]] mete reversa un instante, abre el haz y reorienta la caza.',
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
          'Bristling like Attack on Titan ODM grappling cables tipped with golden FimH finger-traps, dozens of Type 1 pili clamp tighter the harder rushing currents try to wash E. coli away!',
        story:
          'Propellers find the meal, but staying anchored in a flushing tract takes ODM grappling gear! Pilin [[protein|protein]] bricks from [[70S ribosomes|ribosome-ecoli]] cross the [[periplasm|peptidoglycan]] with FimC escorts and extrude into eighty stiff [[Type 1 pili|pilus]].\n\nEach tip sports a golden FimH claw tuned to host mannose [[sugars|glucose]]: tug gently and it lets go to explore; yank hard with a fluid wave and FimH snaps into a Spider-Man catch-bond lock!',
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
          'Erizados como cables de maniobras de Ataque a los Titanes con pinzas doradas FimH, decenas de pili aprietan más fuerte cuanto más intenta barrerlos la corriente.',
        story:
          'Nadar halla el banquete, pero resistir el barrido intestinal pide garfios de abordaje. Ladrillos de [[proteína|protein]] pilina salidos de [[ribosomas 70S|ribosome-ecoli]] cruzan el [[periplasma|peptidoglycan]] con FimC hasta desplegar ochenta rígidos [[pili tipo 1|pilus]].\n\nCada punta luce una garra dorada FimH que muerde [[azúcares|glucose]] del tejido: en calma suelta amarras para explorar, pero ante un tirón brusco bloquea su cierre mecánico como una telaraña de Spider-Man.',
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
          'Like Professor X’s Cerebro wired to the ship’s helm, this polar sensor honeycomb compares right-now’s broth against two seconds ago to steer E. coli up sugar trails.',
        story:
          'Too tiny to smell front-versus-back, E. coli navigates through time via its 250-nanometre [[polar honeycomb|real-pole]]! Snacks slipping through [[porins|porin]] nudge [[chemoreceptors|chemoreceptor]] a whisper inward across the [[plasma membrane|plasma-membrane]].\n\nWired into one Cerebro crystal by CheA and CheW, even a tiny sugar dip fires a neighborhood of kinases at once—sending CheY-P couriers sprinting to kick [[flagellar motors|real-motor]] into a course-correcting tumble!',
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
          'Como el casco Cerebro del Profesor X conectado al timón, este panal polar compara el olor de ahora mismo con el de hace dos segundos para guiar la caza.',
        story:
          'Demasiado pequeña para comparar proa y popa, E. coli navega midiendo el tiempo con su [[panal polar|real-pole]] de 250 nanómetros. Los nutrientes que cruzan las [[porinas|porin]] rozan los [[quimiorreceptores|chemoreceptor]] a través de la [[membrana plasmática|plasma-membrane]].\n\nCableados en red tipo Cerebro por CheA y CheW, la menor caída de azúcar enciende todo un sector de quinasas que lanzan mensajeros CheY-P para hacer virar a los [[motores flagelares|real-motor]].',
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
          'Cruising around the inner hull like Tron light-ribbons towing periplasmic welders, actin-cousin MreB guides wall hoops in straight circles so E. coli stays a sleek rod.',
        story:
          'Why doesn’t a high-pressure bag inflate into a round beach ball as it grows? Hugging the [[plasma membrane|plasma-membrane]], short ribbons of MreB—bacterial cousin of [[actin filaments|actin-filament]]—sip ATP from [[ATP synthase|atp-synthase-ecoli]] and sense where the hull curves sharpest.\n\nRodZ hitches those Tron-like inner sleds to RodA–PBP2 welders out in the [[periplasm|peptidoglycan]], towing them in neat circular orbits that lay straight barrel hoops!',
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
          'Orbitando bajo la membrana como estelas de luz de Tron que remolcan soldadoras, las cintas de MreB guían aros rectos para que E. coli crezca cilíndrica y no redonda.',
        story:
          '¿Por qué un saco a presión no se hincha como una pelota de playa al crecer? Pegadas a la [[membrana plasmática|plasma-membrane]], cortas cintas de MreB —prima de los [[filamentos de actina|actin-filament]]— beben ATP de la [[ATP sintasa|atp-synthase-ecoli]] allí donde más se curva el cilindro.\n\nPasadores RodZ enganchan estos patines estilo Tron con las soldadoras externas del [[periplasma|peptidoglycan]], guiándolas en órbitas circulares que tejen un fuselaje recto impecable.',
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
          'All 4.64 million letters of E. coli’s operating manual coil into 460 spring-loaded loops right in the open cabin—copied and read at the exact same time!',
        story:
          'Here sits the entire source code of our Millennium Falcon: 4,641,652 base pairs coiled in the open [[nucleoid|real-nucleoid]] with zero nuclear walls! Doctor Strange-style [[DNA gyrase|gyrase]] twists ~460 braided branches pinned by nimble [[HU|hu-protein]] clips.\n\nNever locked in a vault, it multitasks nonstop: twin Tron [[replication forks|real-fork]] copy every letter while outer loops feed [[RNA polymerases|rnap-ecoli]] straight into surrounding ribosomes!',
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
          'Las 4,64 millones de letras del manual de E. coli se recogen en 460 bucles con resorte en mitad de la cabina abierta, copiándose y leyéndose a la vez.',
        story:
          'Aquí late el código maestro de nuestro Halcón Milenario: 4.641.652 pares de bases en el [[nucleoide|real-nucleoid]] abierto sin un solo tabique nuclear. La [[ADN girasa|gyrase]] al estilo Doctor Strange trenza unas 460 ramas sujetas por pinzas [[HU|hu-protein]].\n\nJamás archivado bajo llave, hace doble turno: dos [[horquillas de replicación|real-fork]] copian el círculo mientras los bucles externos ceban a la [[ARN polimerasa|rnap-ecoli]] frente a los ribosomas.',
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
          'Teaming Spider-Man-agile HU clips with Doctor Strange-style DNA gyrase, E. coli packs 1.6 millimetres of DNA into a one-micrometre room without locking a single gene.',
        story:
          'Packing 1.6 millimetres of DNA without heavy histone locks takes acrobats fresh off [[70S ribosomes|ribosome-ecoli]]! Nimble [[HU dimers|hu-protein]] kink flexible bends like Spider-Man parkour clips while Fis and IHF bridge sharp U-turns.\n\nEvery few thousand bases, Sorcerer Supreme [[DNA gyrase|gyrase]] spends ATP from [[ATP synthase|atp-synthase-ecoli]] to slice both strands, pass a loop through the portal, and clear knots ahead of racing [[replication forks|real-fork]].',
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
          'Combinando pinzas HU ágiles como Spider-Man con portales de ADN girasa estilo Doctor Strange, E. coli pliega 1,6 milímetros de ADN sin echar llave a ningún gen.',
        story:
          'Plegar 1,6 milímetros de ADN sin pesados bloques de histonas pide acróbatas salidos de los [[ribosomas 70S|ribosome-ecoli]]. Los dímeros [[HU|hu-protein]] doblan curvas rápidas al estilo Spider-Man mientras Fis e IHF cierran horquillas.\n\nCada pocos miles de letras, la [[ADN girasa|gyrase]] usa ATP de la [[ATP sintasa|atp-synthase-ecoli]] para abrir un portal digno de Doctor Strange, cruzar otra hebra y despejar nudos ante la [[horquilla de replicación|real-fork]].',
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
          'Launching new replication runs before the last one even finishes, E. coli’s twin-polymerase Tron racer unzips and clones 1,000 DNA letters every second!',
        story:
          'Speedrunner math: E. coli divides every 20 minutes even though copying its genome takes 40—launching new [[replication forks|real-fork]] before the previous lap finishes! Up front, [[DnaB helicase|dnab-helicase]] burns [[ATP synthase|atp-synthase-ecoli]] fuel to feed leading [[Pol III|pol3-ecoli]] nonstop.\n\nDownstairs, the lagging strand loops out like a jazz trombone on white SSB spools through a twin Pol III, handing crisp sister helices to [[HU|hu-protein]] and gyrase.',
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
          'Lanzando nuevas vueltas antes siquiera de terminar la anterior, este bólido estilo Tron de doble polimerasa abre y clona mil letras de ADN por segundo.',
        story:
          'Matemática de speedrunner: E. coli se divide cada 20 minutos aunque copiar su ADN tarde 40, ¡así que arranca nuevas [[horquillas de replicación|real-fork]] antes de cruzar la meta previa! Delante, la [[helicasa DnaB|dnab-helicase]] quema ATP de la [[ATP sintasa|atp-synthase-ecoli]] sirviendo vía recta a una [[ADN polimerasa III|pol3-ecoli]].\n\nAbajo, la otra hebra traza un bucle de trombón sobre carretes SSB hacia su Pol III gemela, entregando copias limpias a [[HU|hu-protein]].',
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
          'Four thousand crab-claw polymerases prowl the chromosome—towing ribosome convoys on protein genes while bumper-packing rRNA tracks like Bullet Trains!',
        story:
          'Four thousand [[E. coli RNA polymerases|rnap-ecoli]] roam the [[nucleoid|real-nucleoid]], burning nucleotides charged by [[ATP synthase|atp-synthase-ecoli]]. On protein genes, lone claws tow Snowpiercer [[ribosome convoys|real-gene]] at fifty letters a second.\n\nSwitch to the seven rRNA operons and it’s Shinkansen rush hour: dozens of claws pack nose-to-tail, sprouting pink rRNA branches into classic "Christmas trees" that birth new [[70S ribosomes|ribosome-ecoli]]!',
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
          'Cuatro mil tenazas de ARN polimerasa patrullan el cromosoma: remolcan trenes de ribosomas en genes comunes y llenan como trenes bala las vías de ARN ribosómico.',
        story:
          'Cuatro mil [[ARN polimerasas de E. coli|rnap-ecoli]] recorren el [[nucleoide|real-nucleoid]] con combustible de la [[ATP sintasa|atp-synthase-ecoli]]. En los genes comunes, cada tenaza arrastra detrás [[caravanas de ribosomas|real-gene]] al vuelo.\n\nPero en los siete operones ribosómicos parece hora punta de tren bala japonés: decenas de polimerasas pegadas despliegan ramas rosadas en «árbol de Navidad» de donde nacen nuevos [[ribosomas 70S|ribosome-ecoli]].',
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
          'Like Mission: Impossible self-destructing tapes, bacterial mRNA gets translated mid-print and shredded three minutes later so the ship pivots on a dime!',
        story:
          'While eukaryotic [[RNA|rna]] queues for caps, splicing, and nuclear visas, E. coli’s orange mRNA already carries a convoy of [[70S ribosomes|ribosome-ecoli]] before [[RNA polymerase|rnap-ecoli]] finishes typing! Better yet, one tape often prints a whole heist crew of partner enzymes together.\n\nThree minutes later—this tape self-destructs! RNase E shreds old orders so the ship pivots menus instantly, while tough crimson rRNA lives on inside [[50S|ribo-50s]] and [[30S subunits|ribo-30s]].',
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
          'Como cintas de Misión Imposible que se autodestruyen en tres minutos, el ARNm bacteriano se traduce mientras se imprime y luego se recicla para cambiar de plan al instante.',
        story:
          'Mientras el [[ARN|rna]] eucariota hace cola por sellos y visados nucleares, el ARNm naranja de E. coli ya carga un tren de [[ribosomas 70S|ribosome-ecoli]] antes de que termine la [[ARN polimerasa|rnap-ecoli]]. A menudo una sola cinta imprime de golpe a todo un equipo de enzimas.\n\nTres minutos después, ¡este mensaje se autodestruirá! La RNasa E recicla el ARNm para cambiar de menú al instante, mientras el resistente ARNr perdura en las subunidades [[50S|ribo-50s]] y [[30S|ribo-30s]].',
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
          'Ringing the central DNA like Coruscant’s roaring factory districts, ~50,000 purple 70S printers weld twenty amino acids a second along live mRNA tracks.',
        story:
          'Spot how purple [[70S ribosomes|ribosome-ecoli]] ring the blue [[nucleoid|real-nucleoid]] like Coruscant’s industrial belt around a mountain? Too chunky as polysome trains to squeeze deep inside braided DNA, ~50,000 printers pack the outer cabin along orange [[mRNA ribbons|real-gene]].\n\nFed nonstop by Flash-fast [[tRNAs|trna]] and [[ATP synthase|atp-synthase-ecoli]] power, they forge both cytosolic enzymes and hull armor at twenty welds per second!',
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
          'Rodeando el ADN central como los distritos industriales de Coruscant en Star Wars, unas 50.000 impresoras 70S púrpuras sueldan veinte aminoácidos por segundo.',
        story:
          '¿Ves cómo los [[ribosomas 70S|ribosome-ecoli]] púrpuras abrazan el [[nucleoide|real-nucleoid]] azul igual que el anillo industrial de Coruscant rodea una cumbre? Demasiado grandes en trenes para meterse en la maraña de ADN, cincuenta mil factorías desfilan fuera sobre cintas de [[ARNm activo|real-gene]].\n\nCebados sin pausa por [[ARNt|trna]] veloces y energía de la [[ATP sintasa|atp-synthase-ecoli]], forjan cada pieza interna y cada escudo del casco a veinte puntadas por segundo.',
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
          'Escorted by EF-Tu—the Flash-fast courier that outnumbers every other protein in the cabin—hundreds of thousands of tRNAs rocket amino acids into 70S printers.',
        story:
          'Feeding 50,000 [[ribosomes|ribosome-ecoli]] at twenty welds a second takes a Speed Force courier corps! Twenty synthetases spend [[ATP synthase|atp-synthase-ecoli]] fuel to clip incoming [[amino acids|amino-acid]] onto matching [[tRNA|trna]] adapters.\n\nInstantly, GTP-charged EF-Tu—the single most abundant soluble [[protein|protein]] aboard—wraps each tRNA into a Flash torpedo, nails the codon match, drops the brick, and races back for another lap!',
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
          'Escolados por EF-Tu —el mensajero veloz tipo Flash más abundante de toda la cabina—, cientos de miles de ARNt disparan aminoácidos hacia los ribosomas.',
        story:
          'Abastecer cincuenta mil [[ribosomas|ribosome-ecoli]] a veinte enlaces por segundo exige una brigada digna de Flash. Veinte sintetasas gastan energía de la [[ATP sintasa|atp-synthase-ecoli]] para enganchar cada [[aminoácido|amino-acid]] en su [[ARNt|trna]].\n\nAl vuelo, EF-Tu —la [[proteína|protein]] soluble más numerosa de toda E. coli— envuelve al ARNt en un torpedo con GTP, clava el codón, suelta el ladrillo y vuelve disparado a recargar.',
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
          'Packed tighter than a Studio Ghibli bathhouse kitchen—with zero mitochondria—the open cytosol runs glycolysis, Krebs, and Iron Man GroEL rescue pods side by side!',
        story:
          'Forget empty soup: E. coli’s [[cytosol|cytosol]] is a Spirited Away boiler-room packed with 2.5 million [[proteins|protein]] bumping every ten nanometres! Incoming glucose hits glycolytic and Krebs enzymes right in the same open hall, firing high-voltage NADH straight to [[Complex I|complex-i-ecoli]] on the wall.\n\nRight beside the stoves, golden Tony Stark [[GroEL–GroES barrels|groel]] rescue tangled rookies fresh off [[70S ribosomes|ribosome-ecoli]] so the line never jams.',
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
          'Más atestado que la sala de calderas de El viaje de Chihiro y sin mitocondrias, el citosol ejecuta glucólisis, Krebs y rescates GroEL estilo Iron Man codo con codo.',
        story:
          'Olvida una sopa vacía: el [[citosol|cytosol]] de E. coli hierve como las calderas de Chihiro con 2,5 millones de [[proteínas|protein]] chocando cada diez nanómetros. La glucosa pasa directo de la glucólisis al ciclo de Krebs en la misma sala, enviando oleadas de NADH al [[Complejo I|complex-i-ecoli]].\n\nEntre tanto bullicio, cápsulas doradas [[GroEL–GroES|groel]] estilo Tony Stark rescatan cadenas enredadas salidas de los [[ribosomas 70S|ribosome-ecoli]] sin parar la marcha.',
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
          'Like Dragon Ball Senzu-bean snowballs tucked near the poles, branched glycogen rosettes bank thousands of emergency sugars at the water-swelling cost of one molecule!',
        story:
          'Gut feasts vanish fast, yet hoarding loose [[glucose|glucose]] would swell and pop the hull like a water balloon! Instead, enzymes spend [[ATP synthase|atp-synthase-ecoli]] coins to snap spare sugars into 40-nanometre Senzu-bean [[glycogen rosettes|storage-granule]] outside the nucleoid.\n\nEach snowball banks tens of thousands of sugars at one molecule’s osmotic toll—then shaves fuel right back off during famine to keep [[Complex I|complex-i-ecoli]] and pod-racer [[flagellar motors|real-motor]] roaring!',
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
          'Como Semillas del Ermitaño de Dragon Ball apiladas en copos, las rosetas de glucógeno guardan miles de azúcares de emergencia pagando el peaje osmótico de una sola molécula.',
        story:
          'Los banquetes intestinales vuelan, pero guardar [[glucosa|glucose]] suelta reventaría el casco de pura ósmosis. Por eso la célula invierte monedas de la [[ATP sintasa|atp-synthase-ecoli]] en tejer tupidas [[rosetas de glucógeno|storage-granule]] tipo Semilla del Ermitaño de 40 nanómetros.\n\nCada copo esconde decenas de miles de azúcares sin hinchar la nave y, en cuanto llega el ayuno, suelta combustible al instante para sostener el [[Complejo I|complex-i-ecoli]] y los [[motores flagelares|real-motor]].',
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
