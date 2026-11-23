import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 14 Phase 13 Edge-of-Life Explorer nodes and all 44 Standalone Realistic
 * Part Lenses (`mimivirus_realistic.html`: 16 parts; `viroid_realistic.html`:
 * 14 parts; `prion_realistic.html`: 14 parts) in `EN` & `ES` for Giant Viruses,
 * Viroids & Prions (Phase 13).
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const EDGE_OF_LIFE_NODE_LENSES: NodeLensMap = {
  'subviral-overview': {
    en: {
      simple:
        'Line up a living minimal bacterium beside a [[giant virus|real-mimivirus]], a naked [[viroid|real-viroid]], and a gene-free [[prion|real-prion]], and the boundary of life comes into sharp focus. Size alone never makes an entity alive: only cells hold their own [[ribosomes|ribosome-70s]] and energy machinery.',
      story:
        'Stepping beyond canonical [[viruses|viruses]] strips biological replication down to three startling extremes standing beside 300-nanometer [[Mycoplasma genitalium|real-mycoplasma]] and 100-nanometer [[SARS-CoV-2|real-coronavirus]]. First looms 750-nanometer [[Mimivirus|real-mimivirus]], more than twice as wide as Mycoplasma and carrying twice as many [[DNA|dna]] genes, yet completely silent without an amoeba host. Next floats 50-nanometer [[PSTVd|real-viroid]], a bare 359-nucleotide circle of [[RNA|rna]] with zero protein shell and zero protein-coding genes. Finally stands the 13-nanometer [[PrPsc amyloid fibril|real-prion]], a misfolded [[protein|protein]] that spreads its own shape with zero nucleic acids at all.',
      blueprint:
        'Role: Comparative 3-pedestal autonomy ladder testing the 4-Pillar Life Criteria (Membrane, Genome, Ribosomes, Own ATP) from living cells to 0-gene replicators; Inputs: True-scale reference silhouettes of [[Mycoplasma|real-mycoplasma]] (300 nm, 4/4 living benchmark) and [[SARS-CoV-2|real-coronavirus]] (100 nm) paired with three edge-of-life specimens; Inside: [[Mimivirus|real-mimivirus]] (750 nm, 1.18 Mbp dsDNA, 0 ribosomes), [[PSTVd viroid|real-viroid]] (50 x 2 nm, 359 nt naked ssRNA, 0 ORFs), and [[PrPc -> PrPsc prion|real-prion]] (13 nm cross-beta fibril, 0 DNA/RNA); Outputs: Direct drill-down across [[Scale Explorer|scale-explorer]] and [[Life Overview|life-overview]] proving autonomy depends on translation and metabolism rather than size.',
      scientific:
        'Comparative structural and autonomy spectrum spanning the living/non-living boundary (~13 nm to 750 nm) benchmarked against minimal autonomous [[Mycoplasma genitalium|real-mycoplasma]] (~300 x 600 nm; 580 kbp circular [[dsDNA|dna]], ~482 genes, [[70S ribosomes|ribosome-70s]]) and canonical [[SARS-CoV-2|real-coronavirus]] (~100 nm; 29.9 kb ssRNA). Compares: (1) NCLDV giant virus [[Acanthamoeba polyphaga Mimivirus|real-mimivirus]] (~750 nm; 1.18 Mbp linear dsDNA, ~1,000 genes including aaRS, 0 ribosomes, 0 ATP synthesis); (2) pospiviroid [[PSTVd|real-viroid]] (~50 x 2 nm; 359 nt circular non-coding [[ssRNA|rna]], 0 capsid, 0 ORFs); and (3) mammalian [[PrPc -> PrPsc|real-prion]] (~208 aa polypeptide, ~13 nm cross-beta amyloid fibril at 4.8 A rung pitch, 0 nucleotides).'
    },
    es: {
      simple:
        'Colocar una bacteria mínima viva junto a un [[virus gigante|real-mimivirus]], un [[viroide|real-viroid]] desnudo y un [[prión|real-prion]] sin genes vuelve nítida la frontera de la vida. El tamaño por sí solo jamás hace viva a una entidad: solo las células poseen [[ribosomas|ribosome-70s]] y metabolismo propios.',
      story:
        'Ir más allá de los [[virus|viruses]] clásicos revela tres extremos asombrosos junto a [[Mycoplasma genitalium|real-mycoplasma]] (300 nm) y [[SARS-CoV-2|real-coronavirus]] (100 nm). Primero se alza [[Mimivirus|real-mimivirus]] con 750 nm, más del doble de ancho que Mycoplasma y con el doble de genes de [[ADN|dna]], pero inerte sin una ameba. Luego flota [[PSTVd|real-viroid]] de 50 nm, un aro desnudo de 359 nucleótidos de [[ARN|rna]] sin cápside ni genes proteicos. Al final aparece la [[fibrilla amiloide PrPˢᶜ|real-prion]] de 13 nm, una [[proteína|protein]] mal plegada que propaga su forma sin un solo nucleótido.',
      blueprint:
        'Rol: Escenario comparativo de 3 pedestales que evalúa los 4 pilares de autonomía vital (Membrana, Genoma, Ribosomas, ATP propio) desde células vivas hasta replicadores sin genes · Entradas: Siluetas a escala real de [[Mycoplasma|real-mycoplasma]] (300 nm, referente vivo) y [[SARS-CoV-2|real-coronavirus]] (100 nm) frente a tres agentes límite · Interior: [[Mimivirus|real-mimivirus]] (750 nm, 1,18 Mpb ADNbc, 0 ribosomas), [[viroide PSTVd|real-viroid]] (50 × 2 nm, 359 nt ARNmc desnudo, 0 ORF) y [[prión PrPᶜ → PrPˢᶜ|real-prion]] (fibrilla cross-β de 13 nm, 0 ADN/ARN) · Salida: Acceso directo hacia [[Escala|scale-explorer]] y [[Panorama de la vida|life-overview]] demostrando que la autonomía exige traducción y energía.',
      scientific:
        'Espectro comparativo estructural y funcional en la frontera de lo vivo (~13 nm a 750 nm), contrastado con [[Mycoplasma genitalium|real-mycoplasma]] (~300 × 600 nm; 580 kpb [[ADNbc|dna]], ~482 genes, [[ribosomas 70S|ribosome-70s]]) y [[SARS-CoV-2|real-coronavirus]] (~100 nm; 29,9 kb ARNmc). Incluye: (1) virus gigante NCLDV [[Acanthamoeba polyphaga Mimivirus|real-mimivirus]] (~750 nm; 1,18 Mpb ADNbc lineal, ~1.000 genes con aaRS, 0 ribosomas, 0 ATP); (2) pospiviroide [[PSTVd|real-viroid]] (~50 × 2 nm; 359 nt [[ARNmc|rna]] circular no codificante, sin cápside ni ORF); y (3) [[prión PrPᶜ → PrPˢᶜ|real-prion]] (~208 aa, fibrilla amiloide cross-β de ~13 nm con paso de 4,8 Å, 0 nucleótidos).'
    }
  },

  'real-mimivirus': {
    en: {
      simple:
        'Mimivirus is a giant virus wider than the smallest living [[bacterium|real-mycoplasma]], packing roughly 1,000 [[DNA|dna]] genes inside a fuzzy 750-nanometer shell. Even with its huge genome, it carries zero [[ribosomes|ribosome]] and makes zero ATP, so it stays inert until an amoeba swallows it.',
      story:
        'For years after its discovery inside a cooling-tower amoeba, scientists mistook Acanthamoeba polyphaga Mimivirus for a [[Gram-positive bacterium|real-gram-positive]] because its dense 125-nanometer [[glycosylated fiber canopy|real-mimi-capsid]] pushes it to 750 nanometers across - larger than living [[Mycoplasma|real-mycoplasma]]. Inside its 500-nanometer pseudo-icosahedral shell and inner lipid bilayer coils a 1.18-megabase [[genomic fiber|real-mimi-fiber]] encoding nearly a thousand genes, including translation enzymes like [[TyrRS|real-mimi-tyrrs]]. Yet Mimivirus behaves like a shipping crate packed with spare tools and zero factory floor: only after an amoeba engulfs it and acid triggers its five-fold [[stargate portal|real-mimi-stargate]] can it hijack host [[80S ribosomes|ribosome]] and ATP inside a giant cytoplasmic viral factory.',
      blueprint:
        'Role: Acellular NCLDV giant dsDNA virus (~750 nm overall) proving physical size and gene count do not grant cellular life; Inputs: Engulfment by phagocytic Acanthamoeba hosts plus stolen host [[80S ribosomes|ribosome]], nucleotides, [[amino acids|amino-acid]], and ATP; Inside: 125 nm glycosylated fibers, 500 nm double-jelly-roll [[capsid|real-mimi-capsid]], 5-fold [[stargate|real-mimi-stargate]], internal lipid bilayer, 30 nm [[genomic fiber|real-mimi-fiber]] (1.18 Mbp [[dsDNA|dna]]), and viral [[TyrRS|real-mimi-tyrrs]] / RNAP; Outputs: Cytoplasmic viral factory releasing hundreds of progeny virions while encoding 0 ribosomes and 0 [[ATP synthases|atp-synthase]].',
      scientific:
        'Acanthamoeba polyphaga Mimivirus (Phylum Nucleocytoviricota, Family Mimiviridae; ~750 nm total diameter comprising a ~500 nm pseudo-icosahedral double-jelly-roll [[MCP capsid|real-mimi-capsid]], PDB 5J7O homolog, enveloped by ~125 nm cross-linked glycosylated collagen-like surface fibers). Encapsidates an internal ~5 nm lipid bilayer surrounding a 1,181,549 bp linear [[dsDNA|dna]] genome (~1,000 ORFs) condensed into a ~30 nm helical nucleoprotein [[genomic fiber|real-mimi-fiber]] (cryo-EM PDB 7YX3/7YX4) encoding aminoacyl-tRNA synthetases ([[TyrRS|real-mimi-tyrrs]], PDB 2J5B), DNA-dependent RNA polymerase, and mRNA capping enzymes. Enters via amoebal phagocytosis and 5-fold [[stargate|real-mimi-stargate]] opening yet possesses zero [[ribosomes|ribosome]] and zero energy metabolism, contrasting directly with [[Mycoplasma genitalium|real-mycoplasma]].'
    },
    es: {
      simple:
        'Mimivirus es un virus gigante más ancho que la [[bacteria|real-mycoplasma]] viva más pequeña, con cerca de 1.000 genes de [[ADN|dna]] bajo una cubierta fibrosa de 750 nanómetros. Aun con ese genoma colosal, carece por completo de [[ribosomas|ribosome]] y de ATP propio, por lo que permanece inerte hasta que una ameba lo engulle.',
      story:
        'Durante años tras hallarlo en una ameba de torre de enfriamiento, los científicos confundieron a Acanthamoeba polyphaga Mimivirus con una [[bacteria Gram-positiva|real-gram-positive]] porque su tupida capa de fibras glicosiladas de 125 nanómetros lo eleva a 750 nanómetros, superando a [[Mycoplasma|real-mycoplasma]]. Bajo su [[cápside|real-mimi-capsid]] de 500 nm y su bicapa lipídica interna se enrolla una [[fibra genómica|real-mimi-fiber]] de 1,18 megabases con casi mil genes, incluidas enzimas de traducción como [[TyrRS|real-mimi-tyrrs]]. Sin embargo, Mimivirus actúa como una caja de carga repleta de herramientas de repuesto pero sin planta de producción: solo cuando una ameba lo fagocita y el ácido abre su [[portal estelar stargate|real-mimi-stargate]] puede secuestrar [[ribosomas 80S|ribosome]] y ATP del hospedador.',
      blueprint:
        'Rol: Virus gigante acelular NCLDV de ADNbc (~750 nm totales) que demuestra que el tamaño y el número de genes no bastan para estar vivo · Entradas: Fagocitosis por Acanthamoeba más [[ribosomas 80S|ribosome]], nucleótidos, [[aminoácidos|amino-acid]] y ATP robados al hospedador · Interior: Fibras glicosiladas de 125 nm, [[cápside|real-mimi-capsid]] doble jelly-roll de 500 nm, [[stargate|real-mimi-stargate]] pentagonal, bicapa lipídica interna, [[fibra genómica|real-mimi-fiber]] de 30 nm (1,18 Mpb [[ADNbc|dna]]) y [[TyrRS|real-mimi-tyrrs]] / ARNP virales · Salida: Fábrica viral citoplasmática que libera cientos de viriones, con 0 ribosomas y 0 [[ATP sintasas|atp-synthase]].',
      scientific:
        'Acanthamoeba polyphaga Mimivirus (Nucleocytoviricota, Mimiviridae; ~750 nm de diámetro total: [[cápside MCP|real-mimi-capsid]] pseudoicosaédrica doble jelly-roll de ~500 nm, homólogo PDB 5J7O, cubierta por fibras glicosiladas reticuladas de ~125 nm). Encierra una bicapa lipídica interna de ~5 nm alrededor de un genoma lineal de [[ADNbc|dna]] de 1.181.549 pb (~1.000 ORF) compactado en una [[fibra genómica|real-mimi-fiber]] nucleoproteica helicoidal de ~30 nm (crio-EM PDB 7YX3/7YX4) que codifica aminoacil-ARNt sintetasas ([[TyrRS|real-mimi-tyrrs]], PDB 2J5B), ARN polimerasa y enzimas de caperuza. Ingresa por fagocitosis y apertura del [[stargate|real-mimi-stargate]], pero carece de [[ribosomas|ribosome]] y metabolismo energético frente a [[Mycoplasma genitalium|real-mycoplasma]].'
    }
  },

  'real-mimi-stargate': {
    en: {
      simple:
        'One of the twelve corners of [[Mimivirus|real-mimivirus]] holds a special five-pointed star seal called the stargate. Inside an acidic amoeba digestive vacuole, its five seams split wide open so the viral core can slip straight into the host cytoplasm.',
      story:
        'A rigid 500-nanometer protein [[capsid|real-mimi-capsid]] cannot simply dissolve on demand without shattering the 1.18-megabase genome inside. Instead, [[Mimivirus|real-mimivirus]] builds a single engineered weak point at one five-fold icosahedral vertex: five thick, fiber-free seams radiating outward like a closed starfish. Once an Acanthamoeba swallows the virion and pumps acid into the phagosome, low pH triggers conformational release along those five sutures. The five triangular capsid petals peel backward, exposing the internal lipid bilayer so it fuses directly with the phagosome wall and creates an unobstructed membrane tunnel into the cytoplasm.',
      blueprint:
        'Role: Unique 5-fold icosahedral vertex delivery portal mediating controlled uncoating inside host phagosomes; Inputs: Acidic phagosomal pH trigger after amoebal engulfment of fiber-coated [[Mimivirus|real-mimivirus]]; Inside: Five star-shaped proteinaceous sealing seams bridging five triangular [[MCP capsid|real-mimi-capsid]] facets over the internal lipid membrane; Outputs: Unzipped 5-petal aperture enabling viral-phagosome membrane fusion and ejection of the 30 nm [[genomic fiber|real-mimi-fiber]] into the host cytosol.',
      scientific:
        'Unique 5-fold vertex assembly (~200-250 nm star-shaped complex) breaking strict icosahedral symmetry on the ~500 nm [[Mimivirus capsid|real-mimi-capsid]]. Comprises five radial thickened ridges devoid of long surface fibers that lock five adjacent triangular facets closed during extracellular persistence. Phagosomal acidification within Acanthamoeba induces sequential outward opening of the five triangular petals, permitting direct fusion of the internal viral [[phospholipid|phospholipid]] bilayer with the host phagosome membrane to create a wide delivery conduit (~100-150 nm) for the 1.18 Mbp [[genomic fiber|real-mimi-fiber]] and co-packaged early transcription enzymes.'
    },
    es: {
      simple:
        'Uno de los doce vértices de [[Mimivirus|real-mimivirus]] aloja un sello especial en forma de estrella de cinco puntas llamado stargate. Dentro de la vacuola digestiva ácida de la ameba, sus cinco costuras se abren de par en par para liberar el núcleo viral al citoplasma.',
      story:
        'Una [[cápside|real-mimi-capsid]] rígida de 500 nanómetros no puede deshacerse al azar sin dañar el genoma de 1,18 megabases que protege. Por eso [[Mimivirus|real-mimivirus]] fabrica un único punto de apertura en un vértice pentagonal: cinco costuras gruesas y despejadas de fibras que irradian como una estrella cerrada. Cuando Acanthamoeba engulle el virión y acidifica el fagosoma, el bajo pH libera la tensión en esas cinco suturas. Los cinco pétalos triangulares se abaten hacia atrás, exponen la bicapa lipídica interna y permiten que esta se fusione con la membrana del fagosoma abriendo un túnel directo hacia el citoplasma.',
      blueprint:
        'Rol: Portal único de vértice pentagonal que ejecuta el desnudamiento controlado dentro del fagosoma · Entradas: Descenso ácido del pH fagosomal tras la fagocitosis de [[Mimivirus|real-mimivirus]] · Interior: Cinco costuras proteicas estrelladas que sellan cinco caras triangulares de la [[cápside MCP|real-mimi-capsid]] sobre la membrana lipídica interna · Salida: Apertura de cinco pétalos que permite la fusión de bicapas y la inyección de la [[fibra genómica|real-mimi-fiber]] de 30 nm al citosol.',
      scientific:
        'Complejo único de vértice de orden 5 (~200–250 nm) que rompe la simetría icosaédrica estricta de la [[cápside de Mimivirus|real-mimi-capsid]] (~500 nm). Está formado por cinco crestas radiales engrosadas carentes de fibras largas que mantienen selladas cinco caras triangulares contiguas fuera del hospedador. La acidificación del fagosoma en Acanthamoeba dispara la apertura hacia atrás de los cinco pétalos, exponiendo la bicapa interna de [[fosfolípidos|phospholipid]] para su fusión con la membrana vacuolar y transfiriendo la [[fibra genómica|real-mimi-fiber]] de 1,18 Mpb y enzimas tempranas al citoplasma.'
    }
  },

  'real-mimi-capsid': {
    en: {
      simple:
        'The 500-nanometer shell of [[Mimivirus|real-mimivirus]] is tiled from thousands of three-part double-jelly-roll [[protein|protein]] blocks arranged into twenty flat triangular faces. Long, sticky glycosylated fibers sprout from its outer surface, making the virus look like a tiny [[bacterium|real-bacterium]] to hungry amoebae.',
      story:
        'Building a hollow geometric vault half a micrometer wide out of identical molecular tiles requires a remarkably ancient architectural fold. [[Mimivirus|real-mimivirus]] constructs its twenty triangular facets from trimeric Major Capsid Proteins whose paired eight-stranded [[beta-sheet|beta-sheet]] barrels - the double jelly-roll fold also shared with human [[Adenovirus|real-adenovirus]] - snap into tight hexagonal sheets held by minor cementing proteins underneath. Anchored directly onto this rigid protein shell stands a dense 125-nanometer forest of cross-linked glycosylated fibers that traps water, resists environmental decay, and disguises the virion as bacterial prey.',
      blueprint:
        'Role: 500 nm pseudo-icosahedral double-jelly-roll protective shell and 125 nm glycosylated fiber anchor; Inputs: Major Capsid Protein (MCP) trimers translated on host [[80S ribosomes|ribosome]] plus viral glycosyltransferases modifying surface fibers inside the viral factory; Inside: Pseudo-hexameric double-jelly-roll [[beta-sheet|beta-sheet]] trimers (PDB 5J7O structural homolog), zip-protein facet cement, and outer cross-linked collagen-like glycan fibers; Outputs: ~750 nm total virion armor guarding the inner lipid bilayer and triggering Acanthamoeba phagocytosis.',
      scientific:
        'Pseudo-icosahedral giant-virus capsid (~500 nm vertex-to-vertex; ~750 nm including the ~125 nm glycosylated surface fiber canopy) built from thousands of pseudo-hexameric trimers of the double-jelly-roll Major Capsid Protein (NCLDV MCP homolog PDB 5J7O; two tandem eight-stranded antiparallel [[beta-sheet|beta-sheet]] jelly-roll domains per monomer, evolutionarily related to [[Adenovirus|real-adenovirus]] hexons). Minor tape-measure and zip proteins stabilize the 20 triangular facets around an internal ~5 nm [[phospholipid|phospholipid]] bilayer, while one 5-fold vertex forms the specialized [[stargate portal|real-mimi-stargate]].'
    },
    es: {
      simple:
        'La coraza de 500 nanómetros de [[Mimivirus|real-mimivirus]] está ensamblada con miles de bloques triméricos de [[proteína|protein]] doble jelly-roll ordenados en veinte caras triangulares. De su exterior brotan largas fibras glicosiladas que disfrazan al virus como una [[bacteria|real-bacterium]] ante las amebas.',
      story:
        'Construir una bóveda geométrica hueca de medio micrómetro con piezas moleculares repetidas exige un plegamiento arquitectónico muy antiguo. [[Mimivirus|real-mimivirus]] levanta sus veinte caras triangulares con trímeros de la proteína mayor de la cápside cuyos barriles pareados de [[láminas β|beta-sheet]] de ocho hebras —el mismo motivo doble jelly-roll presente en [[Adenovirus|real-adenovirus]]— encajan en mallas hexagonales cementadas por proteínas menores. Sobre este casco rígido crece un bosque de 125 nanómetros de fibras glicosiladas reticuladas que protegen contra la desecación y engañan a la ameba depredadora.',
      blueprint:
        'Rol: Coraza protectora pseudoicosaédrica doble jelly-roll de 500 nm y base para las fibras glicosiladas de 125 nm · Entradas: Trímeros de proteína mayor de la cápside (MCP) traducidos en [[ribosomas 80S|ribosome]] del hospedador y glicosiltransferasas virales · Interior: Trímeros pseudohexaméricos de [[láminas β|beta-sheet]] doble jelly-roll (homólogo estructural PDB 5J7O), proteínas cementantes de arista y fibras externas tipo colágeno glicosiladas · Salida: Blindaje total de ~750 nm que resguarda la bicapa interna e induce la fagocitosis en Acanthamoeba.',
      scientific:
        'Cápside pseudoicosaédrica de virus gigante (~500 nm vértice a vértice; ~750 nm con la corona de fibras glicosiladas de ~125 nm) formada por miles de trímeros pseudohexaméricos de la proteína mayor de la cápside (MCP NCLDV, homólogo PDB 5J7O; dos dominios en tándem de ocho hebras antiparalelas de [[lámina β|beta-sheet]] en rollo de gelatina, emparentada con el hexón de [[Adenovirus|real-adenovirus]]). Proteínas menores estabilizan las 20 caras triangulares sobre la bicapa interna de [[fosfolípidos|phospholipid]], mientras un vértice de orden 5 forma el [[portal stargate|real-mimi-stargate]].'
    }
  },

  'real-mimi-tyrrs': {
    en: {
      simple:
        'Mimivirus Tyrosyl-tRNA Synthetase (TyrRS) is a viral [[protein|protein]] enzyme that loads the amino acid tyrosine onto its matching transfer RNA. Finding translation enzymes encoded inside a virus shocked biologists, yet [[Mimivirus|real-mimivirus]] still lacks [[ribosomes|ribosome]] to assemble proteins on its own.',
      story:
        'Canonical viruses like [[TMV|real-tmv]], [[SARS-CoV-2|real-coronavirus]], and [[HIV-1|real-hiv]] carry zero genes for charging transfer RNAs, relying entirely on host enzymes. [[Mimivirus|real-mimivirus]] breaks that classic textbook rule by encoding four distinct aminoacyl-tRNA synthetases, exemplified by its dimeric Tyrosyl-tRNA synthetase resolved at atomic detail in PDB 2J5B. Burning host ATP, each catalytic pocket activates L-tyrosine into tyrosyl-adenylate and transfers it onto host tRNA-Tyr to accelerate massive viral protein production - while simultaneously proving that carrying spare translation parts still leaves a virus short of true cellular life without [[ribosomes|ribosome]].',
      blueprint:
        'Role: Virus-encoded Class Ic aminoacyl-tRNA synthetase homodimer charging tRNA-Tyr to speed viral translation; Inputs: Free L-tyrosine [[amino acids|amino-acid]], host-supplied ATP + [[Mg2+|atom-mg]], and amoebal tRNA-Tyr; Inside: Dimeric Rossmann-fold catalytic pocket (PDB 2J5B) forming an enzyme-bound tyrosyl-AMP intermediate before esterifying the tRNA 3-prime acceptor end; Outputs: Charged Tyr-tRNA-Tyr fed directly to stolen Acanthamoeba [[80S ribosomes|ribosome]] surrounding the viral factory.',
      scientific:
        'Acanthamoeba polyphaga Mimivirus Tyrosyl-tRNA synthetase (TyrRS; crystal structure PDB 2J5B, Class Ic aminoacyl-tRNA synthetase homodimer ~90 kDa, ~425 residues per subunit featuring a canonical Rossmann nucleotide-binding fold with HIGH and KMSKS motifs plus an alpha-helical anticodon-recognition domain). Catalyzes two-step ATP/[[Mg2+|atom-mg]]-dependent activation of L-tyrosine ([[amino acid|amino-acid]]) to tyrosyl-adenylate and esterification onto tRNA-Tyr. Alongside viral ArgRS, CysRS, and MetRS, TyrRS demonstrates partial translation encoding in [[Mimivirus|real-mimivirus]] while the complete absence of rRNA and [[ribosomal proteins|ribosome]] maintains strict acellular status.'
    },
    es: {
      simple:
        'La tirosil-ARNt sintetasa (TyrRS) de Mimivirus es una [[proteína|protein]] enzimática viral que carga el aminoácido tirosina en su ARN de transferencia correspondiente. Hallar enzimas de traducción codificadas en un virus sorprendió a la biología, aunque [[Mimivirus|real-mimivirus]] siga careciendo de [[ribosomas|ribosome]].',
      story:
        'Los virus clásicos como [[TMV|real-tmv]], [[SARS-CoV-2|real-coronavirus]] y [[VIH-1|real-hiv]] no codifican ninguna enzima para cargar ARNt y dependen por completo del hospedador. [[Mimivirus|real-mimivirus]] rompe esa regla al portar cuatro aminoacil-ARNt sintetasas distintas, representadas por su tirosil-ARNt sintetasa dimérica resuelta en PDB 2J5B. Consumiendo ATP de la ameba, cada bolsillo catalítico activa la L-tirosina en tirosil-adenilato y la acopla al ARNt-Tyr para acelerar la síntesis masiva de proteínas virales, confirmando a la vez que portar piezas sueltas de traducción no equivale a poseer [[ribosomas|ribosome]] ni vida celular.',
      blueprint:
        'Rol: Homodímero viral aminoacil-ARNt sintetasa de clase Ic que carga ARNt-Tyr para acelerar la traducción viral · Entradas: [[Aminoácido|amino-acid]] L-tirosina libre, ATP + [[Mg²⁺|atom-mg]] del hospedador y ARNt-Tyr de la ameba · Interior: Bolsillo catalítico dimérico con plegamiento Rossmann (PDB 2J5B) que forma tirosil-AMP y esterifica el extremo 3′ del ARNt · Salida: Tyr-ARNt-Tyr cargado entregado a los [[ribosomas 80S|ribosome]] de Acanthamoeba alrededor de la fábrica viral.',
      scientific:
        'Tirosil-ARNt sintetasa de Acanthamoeba polyphaga Mimivirus (TyrRS; estructura cristalográfica PDB 2J5B, homodímero de clase Ic de ~90 kDa y ~425 residuos por subunidad con plegamiento Rossmann portador de motivos HIGH y KMSKS más dominio α-helicoidal de reconocimiento del anticodón). Cataliza en dos etapas dependientes de ATP y [[Mg²⁺|atom-mg]] la activación de L-tirosina ([[aminoácido|amino-acid]]) a tirosil-adenilato y su transferencia al ARNt-Tyr. Junto con ArgRS, CysRS y MetRS, evidencia genes de traducción parciales en [[Mimivirus|real-mimivirus]] sin rARN ni [[ribosomas|ribosome]] propios.'
    }
  },

  'real-mimi-fiber': {
    en: {
      simple:
        'To squeeze 1.18 million base pairs of [[DNA|dna]] inside a 500-nanometer [[capsid|real-mimi-capsid]], [[Mimivirus|real-mimivirus]] winds its genome inside a hollow 30-nanometer protein tube. This helical genomic fiber protects the giant chromosome and opens right away once inside an amoeba.',
      story:
        'Packing more than a megabase of stiff double-stranded [[DNA|dna]] inside a viral core without tangling it into an unusable knot is a major geometric challenge. Cryo-electron microscopy structures PDB 7YX3 and 7YX4 revealed that [[Mimivirus|real-mimivirus]] solves it in an unexpected way: it repurposes GMC-oxidoreductase-related shell proteins into a five- or six-start helical cylinder roughly 30 nanometers wide. Inside that central lumen run bundled dsDNA strands lined directly alongside viral DNA-dependent RNA polymerase complexes, ready to launch early mRNA transcription the instant the [[stargate|real-mimi-stargate]] delivers the fiber into host cytoplasm.',
      blueprint:
        'Role: ~30 nm helical nucleoprotein cylinder compacting and protecting the 1.18 Mbp Mimivirus genome for immediate post-entry transcription; Inputs: Replicated 1,181,549 bp linear [[dsDNA|dna]], dimeric GMC-oxidoreductase-family shell [[proteins|protein]], and packaged viral RNA polymerase; Inside: 5-start and 6-start helical protein shell (cryo-EM PDB 7YX3 / 7YX4) enclosing five or six parallel dsDNA strands plus central transcriptional enzymes; Outputs: Ordered genomic core loaded into new [[capsids|real-mimi-capsid]] and rapidly uncoiled inside Acanthamoeba after [[stargate|real-mimi-stargate]] fusion.',
      scientific:
        'Mimivirus ~30 nm helical nucleoprotein genomic fiber (near-atomic cryo-EM structures PDB 7YX3 five-start and PDB 7YX4 six-start assemblies; outer diameter ~28-32 nm). Constructed from an outer proteinaceous cylindrical shell composed of paralogous glucose-methanol-choline (GMC) oxidoreductase-like [[polypeptides|polypeptide]] (which also contribute to surface fiber cross-linking) lining an internal channel that organizes five or six parallel strands of the 1,181,549 bp linear [[dsDNA|dna]] genome. Co-encapsidates multi-subunit viral DNA-dependent RNA polymerase so cytoplasmic transcription begins immediately upon [[stargate|real-mimi-stargate]] delivery without host nuclear transit.'
    },
    es: {
      simple:
        'Para comprimir 1,18 millones de pares de bases de [[ADN|dna]] dentro de una [[cápside|real-mimi-capsid]] de 500 nanómetros, [[Mimivirus|real-mimivirus]] enrolla su genoma dentro de un tubo proteico hueco de 30 nanómetros. Esta fibra genómica helicoidal protege el cromosoma gigante y se despliega al instante en la ameba.',
      story:
        'Empaquetar más de una megabase de [[ADN|dna]] bicatenario rígido dentro del núcleo viral sin enredarlo en un nudo imposible es un reto geométrico monumental. Las estructuras de crio-EM PDB 7YX3 y 7YX4 revelaron la solución inesperada de [[Mimivirus|real-mimivirus]]: recicla proteínas emparentadas con GMC-oxidorreductasas para formar un cilindro helicoidal de cinco o seis inicios y unos 30 nanómetros de grosor. Dentro de ese conducto discurren hebras ordenadas de ADNbc acompañadas de la ARN polimerasa viral, listas para iniciar la transcripción en cuanto el [[stargate|real-mimi-stargate]] inyecta la fibra en el citoplasma.',
      blueprint:
        'Rol: Cilindro nucleoproteico helicoidal de ~30 nm que compacta y protege el genoma de 1,18 Mpb para transcripción inmediata · Entradas: [[ADNbc|dna]] lineal replicado de 1.181.549 pb, [[proteínas|protein]] estructurales de la familia GMC-oxidorreductasa y ARN polimerasa viral · Interior: Cubierta proteica helicoidal de 5 y 6 inicios (crio-EM PDB 7YX3 / 7YX4) que rodea cinco o seis hebras paralelas de ADNbc y enzimas transcripcionales · Salida: Núcleo genómico ordenado que se empaqueta en nuevas [[cápsides|real-mimi-capsid]] y se desenrolla tras la fusión del [[stargate|real-mimi-stargate]].',
      scientific:
        'Fibra genómica nucleoproteica helicoidal de ~30 nm de Mimivirus (crio-EM casi atómica PDB 7YX3 de cinco inicios y PDB 7YX4 de seis inicios; diámetro externo ~28–32 nm). Consta de una funda cilíndrica externa formada por [[polipéptidos|polypeptide]] parálogos de tipo glucosa-metanol-colina (GMC) oxidorreductasa que revisten un canal central con cinco o seis hebras paralelas del genoma lineal de [[ADNbc|dna]] (1.181.549 pb). Coempaqueta la ARN polimerasa dependiente de ADN viral, permitiendo transcripción citoplasmática inmediata tras la apertura del [[stargate|real-mimi-stargate]] sin ingresar al núcleo hospedador.'
    }
  },

  'real-viroid': {
    en: {
      simple:
        'Potato Spindle Tuber Viroid (PSTVd) is a naked ring of just 359 [[RNA|rna]] letters folded tightly into a 50-nanometer rod. It has zero protein shell, zero lipid coat, and zero protein-coding genes, yet it still hijacks a [[plant cell|real-plant]] enzyme to copy itself.',
      story:
        'Drop down below every canonical [[virus|viruses]] and every capsid disappears altogether. Potato Spindle Tuber Viroid consists strictly of 359 covalently closed single-stranded [[RNA|rna]] [[nucleotides|nucleotide]] paired against themselves into a stiff 50-by-2-nanometer rod divided into five structural domains (T_L, P, C, V, and T_R). PSTVd behaves like raw executable text with no envelope: carrying zero protein coat and zero protein-coding genes, its own folded 3D RNA geometry - especially its conserved [[Loop E motif|real-viroid-loope]] - recruits host nuclear [[RNA Polymerase II|real-viroid-pol2]] to spin out endless rolling-circle copies inside the [[plant nucleus|nucleus]].',
      blueprint:
        'Role: Minimal subviral naked circular non-coding ssRNA replicator (~50 x 2 nm; 359 nt; 0 ORFs; 0 capsid); Inputs: Host plant [[nucleus|nucleus]] entry, ribonucleotide triphosphates (rNTPs), [[Mg2+|atom-mg]], host [[RNA Pol II|real-viroid-pol2]] + TFIIIA-7ZF, and DNA ligase 1; Inside: Five self-paired helical domains (T_L, P, C, V, T_R) stabilized by Watson-Crick A-U/G-C pairs, wobble G-U pairs, conserved [[Loop E|real-viroid-loope]], and Central Conserved Region (CCR); Outputs: Asymmetric rolling-circle amplification of circular (+) PSTVd progeny and pathogenic small RNAs disrupting [[plant|real-plant]] growth.',
      scientific:
        'Potato Spindle Tuber Viroid (PSTVd; Family Pospiviroidae, nuclear-replicating circular non-coding [[ssRNA|rna]], 359 [[nucleotides|nucleotide]], ~50 nm length x ~2 nm diameter, molecular mass ~115 kDa; 0 capsid proteins, 0 lipid envelope, 0 open reading frames). Extensive intramolecular Watson-Crick (A-U, G-C) and wobble (G-U) base pairing compacts the closed ring into a rod-like secondary structure partitioned into Terminal Left (T_L), Pathogenicity (P), Central (C), Variable (V), and Terminal Right (T_R) domains containing the conserved [[Loop E|real-viroid-loope]] and CCR. Replicates exclusively inside host [[plant nuclei|nucleus]] via redirected DNA-dependent [[RNA Pol II|real-viroid-pol2]] (PDB 1WCM), TFIIIA-7ZF, RNase cleavage, and DNA ligase 1.'
    },
    es: {
      simple:
        'El viroide del tubérculo fusiforme de la papa (PSTVd) es un anillo desnudo de solo 359 letras de [[ARN|rna]] plegado en una varilla de 50 nanómetros. No tiene cápside, ni membrana, ni un solo gen que codifique proteínas, pero secuestra una enzima de la [[célula vegetal|real-plant]] para copiarse.',
      story:
        'Descender por debajo de todos los [[virus|viruses]] clásicos hace desaparecer cualquier cubierta proteica. El viroide PSTVd consta únicamente de 359 [[nucleótidos|nucleotide]] de [[ARN|rna]] monocatenario cerrado en círculo y apareado consigo mismo formando una varilla rígida de 50 por 2 nanómetros dividida en cinco dominios (T_L, P, C, V y T_R). PSTVd actúa como texto ejecutable sin sobre: sin cápside ni genes proteicos, su propia geometría tridimensional —en especial su [[motivo Loop E|real-viroid-loope]]— recluta a la [[ARN Polimerasa II|real-viroid-pol2]] del hospedador para multiplicar copias en círculo rodante dentro del [[núcleo vegetal|nucleus]].',
      blueprint:
        'Rol: Replicador subviral mínimo de ARNmc circular desnudo no codificante (~50 × 2 nm; 359 nt; 0 ORF; 0 cápside) · Entradas: Ingreso al [[núcleo|nucleus]] vegetal, ribonucleótidos trifosfato (rNTP), [[Mg²⁺|atom-mg]], [[ARN Pol II|real-viroid-pol2]] + TFIIIA-7ZF y ADN ligasa 1 del hospedador · Interior: Cinco dominios helicoidales autoapareados (T_L, P, C, V, T_R) con pares Watson–Crick A–U/G–C, pares bamboleantes G·U, [[Loop E|real-viroid-loope]] y Región Central Conservada (CCR) · Salida: Replicación asimétrica en círculo rodante de anillos (+) PSTVd y ARN pequeños que alteran el desarrollo de la [[planta|real-plant]].',
      scientific:
        'Viroide del tubérculo fusiforme de la papa (PSTVd; familia Pospiviroidae, [[ARNmc|rna]] circular no codificante nuclear de 359 [[nucleótidos|nucleotide]], ~50 × 2 nm, masa ~115 kDa; 0 proteínas de cápside, 0 envoltura lipídica, 0 marcos abiertos de lectura). El apareamiento intramolecular Watson–Crick (A–U, G–C) y wobble (G·U) lo pliega en una varilla de cinco dominios —Terminal Izquierdo (T_L), Patogenicidad (P), Central (C), Variable (V) y Terminal Derecho (T_R)— que albergan [[Loop E|real-viroid-loope]] y la CCR. Se replica en el [[núcleo vegetal|nucleus]] mediante la [[ARN Pol II|real-viroid-pol2]] (PDB 1WCM) asistida por TFIIIA-7ZF y ADN ligasa 1.'
    }
  },

  'real-viroid-loope': {
    en: {
      simple:
        'Loop E is a specially twisted pocket inside the middle of the [[PSTVd viroid|real-viroid]] rod where [[RNA|rna]] bases form unusual non-standard pairs. Because this rigid 3D shape fits host plant enzymes directly, it controls replication, processing, and movement without encoding any protein.',
      story:
        'A plain double helix of [[RNA|rna]] looks uniform along its outer edges, offering few distinctive handles for cellular proteins to grip. Inside the Central Conserved Region of [[PSTVd|real-viroid]], however, a compact internal bulge called Loop E breaks regular Watson-Crick geometry with trans Hoogsteen, trans sugar-edge, and sheared base pairings matching the conserved Loop E architecture resolved in PDB 1S72. Those non-canonical contacts twist the local [[sugar|sugar]]-[[phosphate|phosphate]] backbone into an unmistakable 3D molecular badge that guides nuclear processing, host protein recognition, and precise circularization by DNA ligase 1.',
      blueprint:
        'Role: Conserved non-canonical 3D RNA structural motif acting as a protein-free recognition and circularization switch; Inputs: Local sequence within the Central (C) domain of 359-nt [[PSTVd|real-viroid]] plus stabilizing [[Mg2+|atom-mg]] counterions and [[water|water]] bridges; Inside: Non-Watson-Crick base pairs (trans Hoogsteen/sugar-edge, sheared G-A, bulged [[bases|base]]) structurally analogous to ribosomal Loop E (PDB 1S72) adjacent to the CCR cleavage site; Outputs: Rigid structural signal enabling host-factor binding, species adaptation, and DNA ligase 1 ring closure after [[Pol II|real-viroid-pol2]] copying.',
      scientific:
        'Conserved Loop E internal RNA tertiary motif located within the Central Conserved Region (CCR) of [[PSTVd|real-viroid]] (nt 98-102 / 256-261; canonical structural template resolved in bacterial 5S/23S rRNA Loop E, PDB 1S72). Stabilized by stacked non-Watson-Crick base pairs - including trans Hoogsteen/sugar-edge, cis Watson-Crick/sugar-edge, and bulged purine geometries coordinated by [[Mg2+|atom-mg]] and ordered [[water|water]] - that widen the deep major groove for specific recognition by host transcription/processing proteins (such as RPL5 and DNA ligase 1) during cleavage-ligation of unit-length (+) [[viroid|real-viroid]] strands.'
    },
    es: {
      simple:
        'El motivo Loop E es un bolsillo torcido en el centro de la varilla del [[viroide PSTVd|real-viroid]] donde las bases de [[ARN|rna]] forman pares no convencionales. Esa forma tridimensional rígida encaja en enzimas vegetales y dirige su replicación y sellado sin codificar ninguna proteína.',
      story:
        'Una doble hélice lisa de [[ARN|rna]] ofrece pocos rasgos distintivos para que las proteínas celulares la reconozcan. Sin embargo, dentro de la Región Central Conservada de [[PSTVd|real-viroid]], un abultamiento interno llamado Loop E rompe el apareamiento Watson–Crick habitual mediante enlaces trans Hoogsteen y de borde de azúcar equivalentes a la arquitectura de Loop E resuelta en PDB 1S72. Esos contactos no canónicos tuercen el esqueleto local de [[azúcar|sugar]] y [[fosfato|phosphate]] en una firma tridimensional inconfundible que guía el corte, la unión de proteínas vegetales y el cierre circular por la ADN ligasa 1.',
      blueprint:
        'Rol: Motivo terciario conservado de ARN no canónico que funciona como interruptor de reconocimiento y circularización sin proteínas · Entradas: Secuencia del dominio Central (C) de [[PSTVd|real-viroid]] (359 nt) más contraiones [[Mg²⁺|atom-mg]] y puentes de [[agua|water]] · Interior: Pares no Watson–Crick (trans Hoogsteen/borde de azúcar, G·A cizallados y [[bases|base]] sobresalientes) análogos al Loop E ribosómico (PDB 1S72) junto a la CCR · Salida: Señal rígida que dirige el reconocimiento de factores vegetales y el sellado del anillo por ADN ligasa 1 tras la copia por [[Pol II|real-viroid-pol2]].',
      scientific:
        'Motivo terciario interno conservado Loop E situado en la Región Central Conservada (CCR) de [[PSTVd|real-viroid]] (nt 98–102 / 256–261; molde estructural canónico resuelto en ARNr 5S/23S, PDB 1S72). Estabilizado por pares no Watson–Crick apilados —incluyendo interacciones trans Hoogsteen/borde de azúcar y purinas abultadas coordinadas por [[Mg²⁺|atom-mg]] y [[agua|water]]— que ensanchan el surco mayor para el reconocimiento específico por proteínas nucleares vegetales (como RPL5 y ADN ligasa 1) durante el corte y ligación de hebras unitarias (+) del [[viroide|real-viroid]].'
    }
  },

  'real-viroid-pol2': {
    en: {
      simple:
        'Host plant [[RNA Polymerase II|pol-ii]] normally reads [[DNA|dna]] genes inside the [[nucleus|nucleus]]. Tricked by the folded shape of [[PSTVd|real-viroid]] and a seven-finger helper protein called TFIIIA-7ZF, this enzyme mistakes the naked RNA ring for DNA and copies it round and round.',
      story:
        'Because [[PSTVd|real-viroid]] encodes zero polymerases of its own, it must commandeer the most prominent transcription engine in a [[plant nucleus|nucleus]]: twelve-subunit DNA-dependent [[RNA Polymerase II|pol-ii]] (PDB 1WCM). On its own, Pol II prefers DNA templates, so the viroid recruits a specific alternatively spliced host transcription factor, TFIIIA-7ZF, which clasps the terminal left domain of the viroid rod and docks it directly into the Pol II active cleft. Once engaged, Pol II runs an asymmetric rolling-circle loop - spinning long multimeric (-) strands from the circular (+) ring, transcribing multimeric (+) strands back from them, and handing them off for cleavage at the [[CCR|real-viroid-loope]] and ring closure by host DNA ligase 1.',
      blueprint:
        'Role: Hijacked 12-subunit host nuclear DNA-dependent RNA polymerase redirected to execute RNA-templated rolling-circle replication; Inputs: Circular (+) [[PSTVd|real-viroid]] template, host splicing adapter TFIIIA-7ZF, nuclear rNTPs, and catalytic [[Mg2+|atom-mg]] ions; Inside: 12-subunit eukaryotic [[Pol II|pol-ii]] catalytic clamp (PDB 1WCM) polymerizing multimeric (-) and (+) [[RNA|rna]] concatemers around the closed circular template; Outputs: Unit-length 359-nt (+) RNA strands cleaved at the [[CCR/Loop E|real-viroid-loope]] and circularized by redirected host DNA ligase 1.',
      scientific:
        'Host [[plant|real-plant]] nuclear DNA-dependent [[RNA Polymerase II|pol-ii]] (12-subunit eukaryotic core enzyme modeled from PDB 1WCM, ~515 kDa, alpha-amanitin-sensitive, dual catalytic [[Mg2+|atom-mg]] active site) reprogrammed to perform RNA-dependent RNA polymerization on circular [[PSTVd|real-viroid]]. Recruited by host splicing variant TFIIIA-7ZF (seven zinc-finger domains bridging the viroid T_L/P stem to Pol II), the complex executes asymmetric rolling-circle replication: synthesizing multimeric linear (-) RNAs from circular (+) templates and multimeric (+) RNAs from (-) templates, followed by CCR hairpin cleavage and 5-prime-P to 3-prime-OH circularization by host DNA ligase 1.'
    },
    es: {
      simple:
        'La [[ARN Polimerasa II|pol-ii]] de la planta suele leer genes de [[ADN|dna]] dentro del [[núcleo|nucleus]]. Engañada por la forma plegada de [[PSTVd|real-viroid]] y la proteína auxiliar TFIIIA-7ZF, confunde el anillo desnudo de ARN con ADN y lo copia vuelta tras vuelta.',
      story:
        'Como [[PSTVd|real-viroid]] no codifica ninguna polimerasa propia, debe secuestrar el principal motor transcripcional del [[núcleo vegetal|nucleus]]: la [[ARN Polimerasa II|pol-ii]] dependiente de ADN de doce subunidades (PDB 1WCM). Por sí sola, Pol II prefiere moldes de ADN, así que el viroide recluta una variante específica de corte y empalme del hospedador, TFIIIA-7ZF, que sujeta el dominio izquierdo de la varilla y lo guía hasta la hendidura catalítica de Pol II. Una vez acoplada, Pol II ejecuta un círculo rodante asimétrico: sintetiza largas hebras multiméricas (–) desde el anillo (+), transcribe nuevas hebras (+) a partir de ellas y las entrega para su corte en la [[CCR|real-viroid-loope]] y sellado por la ADN ligasa 1.',
      blueprint:
        'Rol: ARN polimerasa nuclear vegetal de 12 subunidades redirigida para replicar un molde de ARN en círculo rodante · Entradas: Molde circular (+) de [[PSTVd|real-viroid]], adaptador vegetal TFIIIA-7ZF, rNTP nucleares e iones catalíticos [[Mg²⁺|atom-mg]] · Interior: Pinza catalítica eucariota de 12 subunidades [[Pol II|pol-ii]] (PDB 1WCM) sintetizando concatémeros lineales (–) y (+) de [[ARN|rna]] · Salida: Hebras unitarias (+) de 359 nt cortadas en [[CCR/Loop E|real-viroid-loope]] y circularizadas por la ADN ligasa 1 vegetal.',
      scientific:
        '[[ARN Polimerasa II|pol-ii]] nuclear dependiente de ADN de la [[planta|real-plant]] (enzima eucariota de 12 subunidades modelada a partir de PDB 1WCM, ~515 kDa, sensible a α-amanitina, centro activo con dos iones [[Mg²⁺|atom-mg]]) reprogramada como polimerasa dependiente de ARN sobre el círculo de [[PSTVd|real-viroid]]. Reclutada por la variante vegetal TFIIIA-7ZF (siete dedos de zinc que acoplan el tallo T_L/P a Pol II), ejecuta replicación asimétrica en círculo rodante sintetizando concatémeros lineales (–) y (+), posteriormente escindidos en la horquilla CCR y sellados 5′-P a 3′-OH por la ADN ligasa 1.'
    }
  },

  'real-prion': {
    en: {
      simple:
        'A prion is an infectious agent built purely from a misfolded [[protein|protein]], carrying zero [[DNA|dna]] and zero [[RNA|rna]]. When a twisted PrPsc amyloid fibril meets a healthy [[PrPc protein|real-prion-prpc]] on a neuron, it forces the healthy copy to refold into the exact same infectious shape.',
      story:
        'At the very bottom of the [[Edge of Life|subviral-overview]] spectrum, nucleic acids vanish completely. Mammals naturally produce a harmless, soluble, helix-rich glycoprotein called [[PrPc|real-prion-prpc]] anchored on neuronal membranes. Yet if even one misfolded [[PrPsc amyloid fibril|real-prion-piribs]] seed enters the tissue, it sets off a domino crystallization cascade: each healthy PrPc monomer docks onto the exposed fibril tip, unravels its three alpha-helices, and snaps flat into a stacked 4.8-angstrom [[beta-sheet|beta-sheet]] rung locked by dry [[steric zippers|real-prion-zipper]]. When long fibrils snap into smaller fragments, each broken end becomes a fresh conversion template, multiplying infection with zero genes.',
      blueprint:
        'Role: Protein-only infectious conformational replicator (0 DNA, 0 RNA, 0 genes) propagating neurodegenerative amyloid fibrils; Inputs: Endogenous soluble [[PrPc|real-prion-prpc]] monomers (~208 aa, residues 23-230) synthesized on host [[80S ribosomes|ribosome]] and anchored on neuronal lipid rafts; Inside: Self-templating 13 nm cross-beta [[PIRIBS fibril core|real-prion-piribs]] (PDB 7LNA / 7TD6) stabilized by 4.8 A amide H-bond ladders, dry [[steric zippers|real-prion-zipper]], and an intact Cys179-Cys214 [[sulfur|atom-s]] disulfide bridge; Outputs: Protease-resistant amyloid growth, fibril fragmentation multiplying seeds, and strain-encoded conformational inheritance.',
      scientific:
        'Mammalian infectious prion (PrPsc; mature polypeptide ~208 [[amino acids|amino-acid]], human residues 23-230, ~23 kDa unglycosylated; 0 [[DNA|dna]], 0 [[RNA|rna]]). Propagates via templated conformational conversion of endogenous GPI-anchored, [[alpha-helix|alpha-helix]]-rich cellular [[PrPc|real-prion-prpc]] (solution NMR PDB 1QLX) into detergent-insoluble, proteinase-K-resistant cross-[[beta-sheet|beta-sheet]] amyloid fibrils (~13 nm wide; cryo-EM PDB 7LNA hamster 263K and PDB 7TD6 mouse aRML). Stacked [[PIRIBS|real-prion-piribs]] rungs spaced at 4.8 A (0.48 nm) locked by dry [[steric zippers|real-prion-zipper]] and the conserved Cys179-Cys214 [[disulfide|atom-s]] encode heritable prion strains strictly in 3D protein geometry.'
    },
    es: {
      simple:
        'Un prión es un agente infeccioso compuesto solo por una [[proteína|protein]] mal plegada, con cero [[ADN|dna]] y cero [[ARN|rna]]. Cuando una fibrilla amiloide PrPˢᶜ toca a una [[proteína PrPᶜ|real-prion-prpc]] sana en una neurona, obliga a la copia sana a replegarse exactamente igual.',
      story:
        'En el extremo inferior del espectro [[en la frontera de la vida|subviral-overview]], los ácidos nucleicos desaparecen por completo. Los mamíferos producen de forma natural una glicoproteína soluble y rica en hélices llamada [[PrPᶜ|real-prion-prpc]] en sus membranas neuronales. Sin embargo, basta que llegue una sola semilla mal plegada de [[fibrilla PrPˢᶜ|real-prion-piribs]] para desatar una cascada dominó de cristalización: cada monómero sano de PrPᶜ se acopla al extremo expuesto de la fibrilla, deshace sus tres hélices α y se aplana en un peldaño de [[lámina β|beta-sheet]] de 4,8 Å sellado por [[cremalleras estéricas|real-prion-zipper]]. Al fragmentarse las fibrillas largas, cada rotura multiplica los extremos activos sin un solo gen.',
      blueprint:
        'Rol: Replicador infeccioso exclusivamente proteico (0 ADN, 0 ARN, 0 genes) que propaga fibrillas amiloides neurodegenerativas · Entradas: Monómeros endógenos solubles de [[PrPᶜ|real-prion-prpc]] (~208 aa, residuos 23–230) producidos en [[ribosomas 80S|ribosome]] neuronales · Interior: [[Núcleo fibrilar PIRIBS|real-prion-piribs]] cross-β de 13 nm (PDB 7LNA / 7TD6) fijado por escaleras de enlaces H amida cada 4,8 Å, [[cremalleras estéricas|real-prion-zipper]] secas y puente disulfuro Cys179–Cys214 de [[azufre|atom-s]] · Salida: Elongación resistente a proteasas, fragmentación generadora de semillas y herencia conformacional de cepas.',
      scientific:
        'Prión infeccioso de mamíferos (PrPˢᶜ; polipéptido maduro de ~208 [[aminoácidos|amino-acid]], residuos humanos 23–230, ~23 kDa sin glucanos; 0 [[ADN|dna]], 0 [[ARN|rna]]). Se propaga mediante conversión conformacional dirigida por molde desde la [[PrPᶜ|real-prion-prpc]] celular soluble rica en [[hélices α|alpha-helix]] anclada por GPI (RMN PDB 1QLX) hacia fibrillas amiloides cross-[[β|beta-sheet]] insolubles y resistentes a proteinasa K (~13 nm de anchura; crio-EM PDB 7LNA hámster 263K y PDB 7TD6 ratón aRML). Los peldaños [[PIRIBS|real-prion-piribs]] cada 4,8 Å unidos por [[cremalleras estéricas|real-prion-zipper]] y el [[disulfuro|atom-s]] Cys179–Cys214 codifican cepas heredables solo en geometría tridimensional.'
    }
  },

  'real-prion-prpc': {
    en: {
      simple:
        'PrPc is the normal, harmless version of the [[prion protein|real-prion]] sitting on the outer surface of healthy mammalian neurons. Folded neatly into three [[alpha-helices|alpha-helix]] and a tiny beta-ribbon, it dissolves cleanly in water and is easily recycled by cellular enzymes.',
      story:
        'Every healthy mammal builds the exact same 208-amino-acid prion [[polypeptide|polypeptide]] from its own nuclear PRNP gene and tethers it to cholesterol-rich neuronal [[plasma membrane|plasma-membrane]] rafts via a C-terminal GPI anchor. In this benign native state resolved by solution NMR (PDB 1QLX), the protein stays compact and water-soluble: a flexible copper-binding N-terminal tail floats ahead of a tidy C-terminal globe made of three alpha-helices (H1, H2, H3), a short antiparallel beta-ribbon, two branched N-glycan sugars, and one stabilizing Cys179-Cys214 [[sulfur|atom-s]] disulfide bridge. Nothing about its amino-acid sequence changes when it turns deadly - only its three-dimensional fold.',
      blueprint:
        'Role: Normal soluble alpha-helical neuronal surface glycoprotein (~4 x 3 nm globular domain; ~23 kDa core); Inputs: Host PRNP gene translated by [[80S ribosomes|ribosome]], glycosylated at Asn181/Asn197, oxidized at Cys179-Cys214, and GPI-anchored to [[cholesterol|cholesterol]] lipid rafts; Inside: Flexible N-terminal octarepeat tail plus globular C-terminal domain (PDB 1QLX) of three [[alpha-helices|alpha-helix]] (H1-H3), short beta1-beta2 ribbon, and one [[S-S|atom-s]] disulfide bond; Outputs: Normal neuronal signaling and copper homeostasis, or substrate captured by [[PrPsc fibrils|real-prion-piribs]] during templated conversion.',
      scientific:
        'Native cellular mammalian prion protein (PrPc; human mature sequence residues 23-230, ~208 [[amino acids|amino-acid]], ~23 kDa unglycosylated / ~33-35 kDa diglycosylated; C-terminal globular domain NMR structure PDB 1QLX, ~4 x 3 nm). Tethered to outer-leaflet neuronal [[cholesterol|cholesterol]]/sphingolipid rafts via a C-terminal GPI anchor; carries two complex N-linked glycans (Asn181, Asn197) and one intramolecular Cys179-Cys214 [[disulfide|atom-s]] linking helices H2 and H3. High [[alpha-helix|alpha-helix]] content (~42% alpha, ~3% beta) confers full monomer solubility and rapid proteinase-K digestion prior to [[PrPsc|real-prion-piribs]] conversion.'
    },
    es: {
      simple:
        'PrPᶜ es la versión normal e inofensiva de la [[proteína priónica|real-prion]] situada en la cara externa de neuronas sanas. Plegada en tres [[hélices α|alpha-helix]] y una diminuta cinta β, es soluble en agua y las enzimas celulares la reciclan con facilidad.',
      story:
        'Todo mamífero sano fabrica exactamente el mismo [[polipéptido|polypeptide]] priónico de 208 aminoácidos desde su propio gen PRNP y lo sujeta a balsas de [[membrana plasmática|plasma-membrane]] ricas en colesterol mediante un anclaje GPI. En este estado nativo benigno resuelto por RMN (PDB 1QLX), la proteína es compacta y soluble: una cola N-terminal flexible que une cobre precede a un dominio globular de tres hélices α (H1, H2, H3), una breve cinta β antiparalela, dos cadenas N-glicano y un puente disulfuro de [[azufre|atom-s]] Cys179–Cys214. Al volverse infecciosa no cambia ni un solo aminoácido, solo su plegamiento tridimensional.',
      blueprint:
        'Rol: Glicoproteína neuronal superficial normal, soluble y rica en hélices α (dominio globular de ~4 × 3 nm; ~23 kDa) · Entradas: Gen celular PRNP traducido en [[ribosomas 80S|ribosome]], glicosilado en Asn181/Asn197, oxidado en Cys179–Cys214 y anclado por GPI a balsas de [[colesterol|cholesterol]] · Interior: Cola N-terminal flexible y dominio globular C-terminal (PDB 1QLX) con tres [[hélices α|alpha-helix]] (H1–H3), cinta β1–β2 y puente [[S–S|atom-s]] · Salida: Señalización neuronal y homeostasis de cobre, o sustrato capturado por [[fibrillas PrPˢᶜ|real-prion-piribs]] durante la conversión.',
      scientific:
        'Proteína priónica celular nativa de mamíferos (PrPᶜ; secuencia humana madura residuos 23–230, ~208 [[aminoácidos|amino-acid]], ~23 kDa no glicosilada / ~33–35 kDa diglicosilada; dominio globular C-terminal por RMN PDB 1QLX, ~4 × 3 nm). Anclada mediante GPI a balsas lipídicas neuronales ricas en [[colesterol|cholesterol]] y esfingolípidos; posee dos N-glicanos complejos (Asn181, Asn197) y un puente [[disulfuro|atom-s]] intramolecular Cys179–Cys214 entre las hélices H2 y H3. Su alto contenido en [[hélice α|alpha-helix]] (~42 % α, ~3 % β) le confiere solubilidad y sensibilidad a proteinasa K antes de convertirse en [[PrPˢᶜ|real-prion-piribs]].'
    }
  },

  'real-prion-piribs': {
    en: {
      simple:
        'Inside a pathogenic [[prion fibril|real-prion]], every misfolded protein flattens into a single zig-zag layer stacked straight atop the next copy every 4.8 angstroms. This parallel in-register beta-sheet (PIRIBS) stack turns soft [[PrPc|real-prion-prpc]] into an extraordinarily tough amyloid filament.',
      story:
        'For decades, scientists wondered what atomic shape hid inside infectious PrPsc. Near-atomic cryo-electron microscopy of infectious hamster 263K (PDB 7LNA) and mouse aRML (PDB 7TD6) brain fibrils finally solved the puzzle: every alpha-helix of [[PrPc|real-prion-prpc]] completely unwinds and refolds into a single flat serpentine rung (~4.8 angstroms thick) made of multiple [[beta-sheet|beta-sheet]] arches folded around the intact Cys179-Cys214 [[disulfide|atom-s]] bond. Because every amino acid lines up directly on top of the exact same amino acid in the rung below - Parallel In-Register Intermolecular Beta-Sheets - thousands of monomers weld into an insoluble 13-nanometer cable that resists boiling and digestive proteases.',
      blueprint:
        'Role: Self-templating cross-beta amyloid protofilament architecture (~13 nm width; 4.8 A axial rung pitch) driving prion infectivity; Inputs: Unfolded monomers of soluble [[PrPc|real-prion-prpc]] docking onto the exposed hydrophobic/H-bond fibril end; Inside: Parallel in-register intermolecular [[beta-sheet|beta-sheet]] (PIRIBS) arches (cryo-EM PDB 7LNA / 7TD6) retaining Cys179-Cys214 [[S-S|atom-s]] inside the core while N-glycans project outward; Outputs: Elongating protease-resistant [[PrPsc fibrils|real-prion]] locked by dry [[steric zippers|real-prion-zipper]] and capable of strain-faithful seeding.',
      scientific:
        'Infectious PrPsc Parallel In-Register Intermolecular Beta-Sheet (PIRIBS) amyloid fibril core resolved by near-atomic cryo-EM (PDB 7LNA hamster 263K at 3.1 A; PDB 7TD6 mouse aRML at 3.0 A; protofilament width ~13 nm, canonical cross-[[beta-sheet|beta-sheet]] axial repeat 4.8 A / 0.48 nm). Each converted [[PrP|real-prion]] monomer (protease-resistant core spanning roughly residues ~94-226) forms a single planar zig-zag rung containing N-terminal and disulfide-anchored C-terminal beta-arches (preserving the Cys179-Cys214 [[sulfur|atom-s]] bridge), with identical residues aligned vertically along the fibril axis and bulky N-glycans plus GPI anchors projecting outward into solvent.'
    },
    es: {
      simple:
        'Dentro de una [[fibrilla priónica|real-prion]] patógena, cada proteína mal plegada se aplana en una sola capa en zigzag apilada exactamente sobre la copia vecina cada 4,8 angstroms. Esta arquitectura PIRIBS de láminas β paralelas en registro convierte a la blanda [[PrPᶜ|real-prion-prpc]] en un filamento amiloide ultrarresistente.',
      story:
        'Durante décadas los biólogos buscaron la estructura atómica oculta en PrPˢᶜ. La crio-EM casi atómica de fibrillas cerebrales infecciosas de hámster 263K (PDB 7LNA) y ratón aRML (PDB 7TD6) resolvió el enigma: las tres hélices α de [[PrPᶜ|real-prion-prpc]] se desenrollan por completo para replegarse en un único peldaño serpentino plano de 4,8 Å formado por arcos de [[lámina β|beta-sheet]] en torno al puente [[disulfuro|atom-s]] Cys179–Cys214 intacto. Al alinearse cada aminoácido exactamente encima del mismo residuo del peldaño inferior —láminas β intermoleculares paralelas en registro (PIRIBS)— miles de copias se sueldan en un cable insoluble de 13 nm resistente a proteasas.',
      blueprint:
        'Rol: Arquitectura protofilamentosa amiloide cross-β autorreplicante (~13 nm de anchura; paso axial de 4,8 Å) · Entradas: Monómeros desplegados de [[PrPᶜ|real-prion-prpc]] acoplándose sobre el extremo hidrofóbico expuesto de la fibrilla · Interior: Arcos de [[lámina β|beta-sheet]] paralela intermolecular en registro (PIRIBS, crio-EM PDB 7LNA / 7TD6) que conservan el puente [[S–S|atom-s]] Cys179–Cys214 dentro del núcleo mientras los N-glicanos apuntan al exterior · Salida: [[Fibrillas PrPˢᶜ|real-prion]] resistentes a proteasas fijadas por [[cremalleras estéricas|real-prion-zipper]] capaces de sembrar cepas fieles.',
      scientific:
        'Núcleo amiloide infeccioso PrPˢᶜ de láminas β intermoleculares paralelas en registro (PIRIBS) resuelto por crio-EM casi atómica (PDB 7LNA hámster 263K a 3,1 Å; PDB 7TD6 ratón aRML a 3,0 Å; anchura ~13 nm, periodicidad axial cross-[[β|beta-sheet]] de 4,8 Å / 0,48 nm). Cada monómero convertido de [[PrP|real-prion]] (núcleo resistente a proteasas ~residuos 94–226) integra un único peldaño plano con arcos β N- y C-terminales en torno al puente de [[azufre|atom-s]] Cys179–Cys214, alineando residuos idénticos a lo largo del eje fibrilar mientras N-glicanos y GPI sobresalen al solvente.'
    }
  },

  'real-prion-zipper': {
    en: {
      simple:
        'Between facing [[beta-sheet|beta-sheet]] walls inside a [[PrPsc fibril|real-prion-piribs]], amino-acid side chains interlock tightly like gear teeth while squeezing every drop of [[water|water]] out. Together with a continuous vertical ladder of backbone hydrogen bonds, these dry steric zippers make prions almost indestructible.',
      story:
        'Zoom down to sub-nanometer resolution inside the [[PIRIBS core|real-prion-piribs]] and the physical secret of prion toughness appears in atomic detail. Along the fibril axis, every peptide backbone amide [[N-H|atom-n]] donates a crisp hydrogen bond straight upward to the carbonyl [[O=C|atom-o]] of the identical residue sitting 4.8 angstroms above it, creating an unbroken hydrogen-bond ladder spanning thousands of rungs. Perpendicular to that axis, opposing beta-arches mesh their side chains into water-free steric zippers reinforced by the covalent Cys179-Cys214 [[S-S|atom-s]] bridge. Without internal water molecules to pry the sheets apart, standard autoclaving and proteases bounce harmlessly off.',
      blueprint:
        'Role: Atomic-scale dry side-chain interlocking and axial backbone H-bond ladder stabilizing pathogenic [[PrPsc|real-prion]] far below native [[PrPc|real-prion-prpc]] free energy; Inputs: Interfacing hydrophobic and polar [[amino-acid|amino-acid]] side chains plus repeating peptide backbone atoms ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]]) and Cys179-Cys214 [[S|atom-s]]; Inside: Water-excluded steric-zipper interfaces (~8-10 A inter-sheet spacing) crossed perpendicularly by continuous 4.8 A axial N-H...O=C hydrogen bonds; Outputs: Extreme kinetic trapping, detergent insolubility, thermal/protease resistance, and strain-specific packing geometry.',
      scientific:
        'Sub-nanometer dry steric-zipper and cross-beta hydrogen-bond architecture within the [[PrPsc PIRIBS core|real-prion-piribs]] (resolved in PDB 7LNA / 7TD6; strictly [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[S|atom-s]] - zero [[P|atom-p]]). Interdigitating nonpolar and stacked polar (Asn/Gln ladder) [[amino-acid|amino-acid]] side chains exclude [[water|water]] across opposing [[beta-sheet|beta-sheet]] interfaces (~8-11 A inter-sheet spacing), paired orthogonally with continuous 4.8 A inter-rung backbone amide N-H...O=C hydrogen bonds and the conserved covalent Cys179-Cys214 disulfide (~2.05 A [[S-S|atom-s]]). Cooperative van der Waals and H-bond networks lock the amyloid fold into a deep thermodynamic minimum.'
    },
    es: {
      simple:
        'Entre las paredes enfrentadas de [[láminas β|beta-sheet]] dentro de una [[fibrilla PrPˢᶜ|real-prion-piribs]], las cadenas laterales de los aminoácidos encajan con precisión expulsando hasta la última gota de [[agua|water]]. Unidas a una escalera continua de enlaces de hidrógeno, estas cremalleras estéricas vuelven al prión casi indestructible.',
      story:
        'Al descender a resolución subnanométrica dentro del [[núcleo PIRIBS|real-prion-piribs]] aparece el secreto físico de la dureza priónica. A lo largo del eje fibrilar, cada grupo amida [[N–H|atom-n]] del esqueleto peptídico forma un enlace de hidrógeno vertical con el carbonilo [[O=C|atom-o]] del residuo idéntico situado exactamente 4,8 Å arriba, creando una escalera continua a lo largo de miles de peldaños. En dirección perpendicular, los arcos β enfrentados entrelazan sus cadenas laterales en cremalleras estéricas secas reforzadas por el puente covalente [[S–S|atom-s]] Cys179–Cys214. Sin agua interna que separe las láminas, el calor ordinario y las proteasas rebotan sin efecto.',
      blueprint:
        'Rol: Encaje atómico seco de cadenas laterales y escalera axial de puentes H que estabilizan [[PrPˢᶜ|real-prion]] muy por debajo de [[PrPᶜ|real-prion-prpc]] · Entradas: Cadenas laterales hidrofóbicas y polares de [[aminoácidos|amino-acid]], esqueleto peptídico ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]]) y [[S|atom-s]] de Cys179–Cys214 · Interior: Interfaces de cremallera estérica libres de agua (~8–10 Å entre láminas) cruzadas por enlaces N–H···O=C axiales cada 4,8 Å · Salida: Atrapamiento cinético extremo, insolubilidad en detergentes, resistencia térmica/proteolítica y geometría específica de cepa.',
      scientific:
        'Arquitectura subnanométrica de cremallera estérica seca y enlaces de hidrógeno cross-β en el [[núcleo PIRIBS de PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6; únicamente [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[S|atom-s]], cero [[P|atom-p]]). La interdigitación de cadenas laterales apolares y escaleras polares (Asn/Gln) excluye el [[agua|water]] entre [[láminas β|beta-sheet]] enfrentadas (~8–11 Å), en ángulo recto con la red continua de puentes de hidrógeno amida N–H···O=C cada 4,8 Å y el puente covalente Cys179–Cys214 ([[S–S|atom-s]] ~2,05 Å), atrapando el plegamiento amiloide en un profundo mínimo termodinámico.'
    }
  },

  'atom-s': {
    en: {
      simple:
        'Sulfur is the golden nonmetal atom built into the [[amino acids|amino-acid]] cysteine and methionine. When two sulfur atoms link covalently into a disulfide bridge, they staple folded [[proteins|protein]] together - including the exact Cys179-Cys214 bond that survives intact across the entire [[PrPc to PrPsc|real-prion]] transition.',
      story:
        'Sitting directly below [[oxygen|atom-o]] on the periodic table, sulfur (element Z = 16) carries a larger valence shell that forms uniquely reversible yet robust covalent bonds inside biology. While [[DNA|dna]] and [[RNA|rna]] rely on [[phosphorus|atom-p]] and hold zero sulfur, [[proteins|protein]] weave sulfur into every starting methionine and every cross-linking cysteine. Inside the mammalian prion protein, a single covalent sulfur-sulfur bridge (~2.05 angstroms) joins Cys179 to Cys214: it stabilizes the healthy three-helix bundle of [[PrPc|real-prion-prpc]], refuses to break during conversion, and ends up stapling the tight C-terminal beta-arch right inside the core of pathogenic [[PrPsc|real-prion-piribs]].',
      blueprint:
        'Role: Essential biogenic chalcogen (Z = 16) forming covalent protein disulfide staples, thioesters, and iron-sulfur redox clusters; Inputs: Inorganic sulfate assimilated by [[plants|real-plant]] and [[bacteria|real-bacterium]] into cysteine and methionine [[amino acids|amino-acid]]; Inside: Element 16 (32.06 Da; van der Waals radius 1.80 A) forming thiol (-SH) side chains that oxidize into covalent ~2.05 A S-S disulfide bridges; Outputs: Structural locking of [[PrPc|real-prion-prpc]] and the [[PrPsc PIRIBS core|real-prion-piribs]] (Cys179-Cys214), acetyl-CoA energy transfer, and catalytic active sites across all living cells.',
      scientific:
        'Chalcogen nonmetal element Z = 16 (standard atomic weight 32.06 Da; ground-state valence [Ne] 3s2 3p4; van der Waals radius 1.80 A, covalent radius 1.05 A). Absent from canonical [[DNA|dna]] and [[RNA|rna]] backbones (which use [[P|atom-p]]) yet indispensable in [[proteins|protein]] via methionine thioethers and cysteine thiols (-SH). Oxidative pairing of two cysteine thiols forms a covalent disulfide bond (S-S bond length ~2.05 A, bond energy ~250 kJ/mol, dihedral angle ~+/-90 deg), exemplified by the conserved Cys179-Cys214 staple bridging H2-H3 in soluble [[PrPc|real-prion-prpc]] (PDB 1QLX) and anchoring the C-terminal beta-arch in [[PrPsc|real-prion-piribs]] (PDB 7LNA / 7TD6).'
    },
    es: {
      simple:
        'El azufre es el átomo no metálico presente en los [[aminoácidos|amino-acid]] cisteína y metionina. Cuando dos átomos de azufre se unen covalentemente en un puente disulfuro, grapan el plegamiento de las [[proteínas|protein]], incluido el enlace Cys179–Cys214 que sobrevive intacto en la transición de [[PrPᶜ a PrPˢᶜ|real-prion]].',
      story:
        'Situado justo debajo del [[oxígeno|atom-o]] en la tabla periódica, el azufre (elemento Z = 16) posee una capa de valencia más amplia que forma enlaces covalentes reversibles y extraordinariamente firmes en biología. Mientras el [[ADN|dna]] y el [[ARN|rna]] dependen del [[fósforo|atom-p]] y carecen de azufre, las [[proteínas|protein]] lo incorporan en cada metionina inicial y cada cisteína reticulante. En la proteína priónica de mamíferos, un único puente covalente azufre–azufre (~2,05 Å) une Cys179 con Cys214: estabiliza el haz de tres hélices de [[PrPᶜ|real-prion-prpc]], resiste la conversión y termina grapando el arco β central dentro de [[PrPˢᶜ|real-prion-piribs]].',
      blueprint:
        'Rol: Calcógeno biogénico esencial (Z = 16) que forma puentes disulfuro proteicos, tioésteres y centros hierro–azufre · Entradas: Sulfato inorgánico asimilado por [[plantas|real-plant]] y [[bacterias|real-bacterium]] en [[aminoácidos|amino-acid]] cisteína y metionina · Interior: Elemento 16 (32,06 Da; radio de van der Waals 1,80 Å) con grupos tiol (–SH) oxidables en puentes covalentes S–S de ~2,05 Å · Salida: Fijación estructural de [[PrPᶜ|real-prion-prpc]] y del [[núcleo PIRIBS PrPˢᶜ|real-prion-piribs]] (Cys179–Cys214), transferencia energética en acetil-CoA y catálisis redox celular.',
      scientific:
        'Elemento no metálico calcógeno Z = 16 (masa atómica estándar 32,06 Da; configuración [Ne] 3s² 3p⁴; radio de van der Waals 1,80 Å, radio covalente 1,05 Å). Ausente de los esqueletos canónicos de [[ADN|dna]] y [[ARN|rna]] (que usan [[P|atom-p]]), pero esencial en [[proteínas|protein]] mediante tioéteres de metionina y tioles (–SH) de cisteína. La oxidación de dos cisteínas crea un enlace disulfuro covalente (longitud S–S ~2,05 Å, energía ~250 kJ/mol, ángulo diedro ~±90°), como el puente conservado Cys179–Cys214 entre H2–H3 en [[PrPᶜ|real-prion-prpc]] (PDB 1QLX) y en el arco β C-terminal de [[PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6).'
    }
  }
};

export const EDGE_OF_LIFE_PART_LENSES: PagePartLensMap = {
  'mimivirus_realistic.html': {
    fibers: {
      en: {
        subtitle: '125 nm Cross-Linked Glycosylated Fiber Canopy',
        simple:
          'Covering every face of the 500-nanometer [[capsid|real-mimi-capsid]] except its [[stargate|real-mimi-stargate]] seams, this dense 125-nanometer coat of sugar-coated fibers pushes [[Mimivirus|real-mimivirus]] to 750 nanometers wide and tricks amoebae into eating it like a [[bacterium|real-bacterium]].',
        story:
          'At first glance under a light microscope, these densely packed glycosylated hairs made [[Mimivirus|real-mimivirus]] look indistinguishable from a Gram-positive coccus. Anchored onto the underlying double-jelly-roll [[capsid|real-mimi-capsid]] and cross-linked by viral GMC-oxidoreductase enzymes, the 125-nanometer fibers carry bacterial-like surface sugars such as viosamine and rhamnose. That outer camouflage serves a dual mission: it shields the virion against harsh aquatic drying and detergents while persuading grazing Acanthamoeba cells to engulf it as a nutritious meal.',
        blueprint: {
          role: 'Outer 125 nm glycosylated protective canopy and bacterial-mimicry phagocytosis trigger',
          arrivesFrom: 'Collagen-like fiber [[proteins|protein]] translated on host [[80S ribosomes|ribosome]] and modified by viral glycosyltransferases',
          inside: 'Dense radially anchored 125 nm protein fibrils cross-linked by GMC-oxidoreductase paralogs and coated in unusual bacterial-like glycans',
          deliversTo: 'Expands total diameter from 500 nm to ~750 nm and stimulates Acanthamoeba phagocytosis into an acidic vacuole',
          loop: 'Absence of long fibers along the 5-fold [[stargate|real-mimi-stargate]] seams keeps the viral exit hatch clear during uncoating'
        },
        scientific:
          'Dense ~125 nm outer fibrillar integument projecting radially from all 20 triangular facets of the ~500 nm [[Mimivirus capsid|real-mimi-capsid]] (expanding overall diameter to ~750 nm, exceeding [[Mycoplasma|real-mycoplasma]] at ~300 nm). Built from heavily glycosylated collagen-like [[polypeptides|polypeptide]] (including L425 / R135 GMC-oxidoreductase-related proteins) decorated with 4-amino-4,6-dideoxy-D-glucose (viosamine) and rhamnose synthesized by virus-encoded sugar pathways, mediating adhesion to bacterial biofilms and phagocytic uptake by Acanthamoeba.',
        from: [
          { nodeId: 'real-mimi-capsid', label: 'Double-Jelly-Roll Capsid', cargo: '500 nm fiber anchoring facets' },
          { nodeId: 'sugar', label: 'Viral Glycan Sugars', cargo: 'Viosamine & rhamnose coat' }
        ],
        to: [
          { nodeId: 'real-mimivirus', label: 'Whole Mimivirus (750 nm)', cargo: 'Bacterial-scale camouflage' },
          { nodeId: 'real-mimi-stargate', label: 'Phagosomal Entry Route', cargo: 'Engulfment into acidic vacuole' }
        ]
      },
      es: {
        subtitle: 'Corona de fibras glicosiladas reticuladas de 125 nm',
        simple:
          'Cubriendo todas las caras de la [[cápside|real-mimi-capsid]] de 500 nanómetros salvo las costuras del [[stargate|real-mimi-stargate]], esta densa capa fibrosa de 125 nanómetros lleva a [[Mimivirus|real-mimivirus]] a 750 nm y engaña a las amebas para que lo traguen como una [[bacteria|real-bacterium]].',
        story:
          'Bajo el microscopio óptico, estas densas fibras azucaradas hicieron que [[Mimivirus|real-mimivirus]] pareciera indistinguible de un coco Gram-positivo. Ancladas a la [[cápside|real-mimi-capsid]] doble jelly-roll y reticuladas por enzimas GMC-oxidorreductasas virales, las fibras de 125 nanómetros portan azúcares de tipo bacteriano como viosamina y ramnosa. Ese camuflaje cumple dos objetivos: protege al virión contra la desecación ambiental y convence a Acanthamoeba de fagocitarlo como si fuera alimento.',
        blueprint: {
          role: 'Cubierta protectora externa glicosilada de 125 nm y señuelo de mimetismo bacteriano para fagocitosis',
          arrivesFrom: '[[Proteínas|protein]] fibrosas tipo colágeno traducidas en [[ribosomas 80S|ribosome]] del hospedador y modificadas por glicosiltransferasas virales',
          inside: 'Fibrillas proteicas radiales de 125 nm reticuladas por parálogos de GMC-oxidorreductasa y revestidas de glicanos tipo bacteriano',
          deliversTo: 'Amplía el diámetro total de 500 nm a ~750 nm y dispara la fagocitosis por Acanthamoeba hacia una vacuola ácida',
          loop: 'La ausencia de fibras largas sobre las costuras del [[stargate|real-mimi-stargate]] deja despejada la compuerta de apertura'
        },
        scientific:
          'Tegumento fibrilar externo denso de ~125 nm que emerge radialmente de las 20 caras triangulares de la [[cápside de Mimivirus|real-mimi-capsid]] (~500 nm), llevando el diámetro total a ~750 nm por encima de [[Mycoplasma|real-mycoplasma]] (~300 nm). Compuesto por [[polipéptidos|polypeptide]] tipo colágeno altamente glicosilados (incluidas proteínas tipo GMC-oxidorreductasa R135/L425) decorados con viosamina y ramnosa sintetizadas por rutas virales, promoviendo adherencia y fagocitosis en Acanthamoeba.',
        from: [
          { nodeId: 'real-mimi-capsid', label: 'Cápside doble jelly-roll', cargo: 'Caras de anclaje de 500 nm' },
          { nodeId: 'sugar', label: 'Azúcares glicánicos virales', cargo: 'Cubierta de viosamina y ramnosa' }
        ],
        to: [
          { nodeId: 'real-mimivirus', label: 'Mimivirus completo (750 nm)', cargo: 'Camuflaje a escala bacteriana' },
          { nodeId: 'real-mimi-stargate', label: 'Ruta fagosomal', cargo: 'Captura en vacuola ácida' }
        ]
      }
    },

    capsid: {
      en: {
        subtitle: '500 nm Pseudo-Icosahedral Double-Jelly-Roll Capsid',
        simple:
          'Built from thousands of three-part double-jelly-roll [[protein|protein]] tiles, this 500-nanometer geometric shell forms the rigid armor of [[Mimivirus|real-mimivirus]] around its inner lipid membrane and giant genome.',
        story:
          'Cut away one facet of the 500-nanometer hull and its precision molecular tiling shines through. Each hexagonal tile is a trimer of Major Capsid Protein folded into paired eight-stranded [[beta-sheet|beta-sheet]] barrels - the conserved double-jelly-roll architecture modeled from PDB 5J7O and shared across giant DNA viruses and [[Adenovirus|real-adenovirus]]. Beneath these twenty flat triangular faces, minor cement proteins lock the seams tight everywhere except one unique five-fold corner reserved for the [[stargate portal|real-mimi-stargate]].',
        blueprint: {
          role: 'Rigid 500 nm pseudo-icosahedral protein armor housing the internal bilayer and 1.18 Mbp genomic core',
          arrivesFrom: 'Major Capsid Protein (MCP) trimers synthesized on hijacked host [[80S ribosomes|ribosome]] around the cytoplasmic viral factory',
          inside: 'Hexagonal lattice of double-jelly-roll [[beta-sheet|beta-sheet]] trimers (PDB 5J7O homolog) stitched by internal zip and tape-measure proteins',
          deliversTo: 'Anchors the outer 125 nm glycosylated fiber canopy and shields the internal lipid bilayer until [[stargate|real-mimi-stargate]] release',
          loop: 'Assembled continuously along the outer periphery of the amoeba viral factory before loading the [[genomic fiber|real-mimi-fiber]]'
        },
        scientific:
          'Pseudo-icosahedral double-jelly-roll [[MCP capsid|real-mimi-capsid]] (~500 nm vertex-to-vertex; ~7 nm protein shell thickness; triangulation number T ~ 972-1,179; NCLDV structural homolog PDB 5J7O). Trimeric capsomers tile 20 triangular facets via antiparallel eight-stranded [[beta-sheet|beta-sheet]] barrels linked by minor inner-shell cementing proteins, enveloping a ~5 nm internal lipid membrane and terminating at one specialized 5-fold [[stargate|real-mimi-stargate]] vertex.',
        from: [
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'Viral MCP trimer translation' },
          { nodeId: 'beta-sheet', label: 'Double-Jelly-Roll Barrels', cargo: 'Eight-stranded structural fold' }
        ],
        to: [
          { nodeId: 'real-mimi-capsid', label: 'Mimivirus Capsid Node', cargo: '500 nm pseudo-icosahedral shell' },
          { nodeId: 'real-mimi-stargate', label: '5-Fold Stargate Vertex', cargo: 'Controlled facet opening hinge' }
        ]
      },
      es: {
        subtitle: 'Cápside pseudoicosaédrica doble jelly-roll de 500 nm',
        simple:
          'Formada por miles de baldosas triméricas de [[proteína|protein]] doble jelly-roll, esta coraza geométrica de 500 nanómetros protege la membrana interna y el genoma gigante de [[Mimivirus|real-mimivirus]].',
        story:
          'Al seccionar una cara del casco de 500 nanómetros destaca su precisión cristalina. Cada loseta hexagonal es un trímero de la proteína mayor de la cápside plegado en barriles pareados de [[láminas β|beta-sheet]] de ocho hebras —la arquitectura doble jelly-roll modelada a partir de PDB 5J7O y compartida con [[Adenovirus|real-adenovirus]]. Bajo las veinte caras triangulares, proteínas cementantes sellan cada arista salvo en un vértice pentagonal reservado para el [[portal stargate|real-mimi-stargate]].',
        blueprint: {
          role: 'Blindaje proteico pseudoicosaédrico rígido de 500 nm que resguarda la bicapa interna y el núcleo de 1,18 Mpb',
          arrivesFrom: 'Trímeros de proteína mayor de la cápside (MCP) sintetizados por [[ribosomas 80S|ribosome]] secuestrados en la fábrica viral',
          inside: 'Red hexagonal de trímeros de [[lámina β|beta-sheet]] doble jelly-roll (homólogo PDB 5J7O) unidos por proteínas cementantes internas',
          deliversTo: 'Ancla la corona externa de fibras glicosiladas de 125 nm y protege la bicapa lipídica hasta la apertura del [[stargate|real-mimi-stargate]]',
          loop: 'Se ensambla de forma continua en la periferia de la fábrica viral antes de introducir la [[fibra genómica|real-mimi-fiber]]'
        },
        scientific:
          '[[Cápside MCP|real-mimi-capsid]] pseudoicosaédrica doble jelly-roll (~500 nm entre vértices; ~7 nm de espesor proteico; T ~ 972–1.179; homólogo estructural NCLDV PDB 5J7O). Los capsómeros triméricos enlazan 20 caras triangulares mediante barriles antiparalelos de ocho hebras de [[lámina β|beta-sheet]] fijados por proteínas cementantes menores sobre la bicapa interna de ~5 nm, convergiendo en el vértice especializado del [[stargate|real-mimi-stargate]].',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S del hospedador', cargo: 'Traducción de trímeros MCP' },
          { nodeId: 'beta-sheet', label: 'Barriles doble jelly-roll', cargo: 'Plegamiento estructural de 8 hebras' }
        ],
        to: [
          { nodeId: 'real-mimi-capsid', label: 'Cápside de Mimivirus', cargo: 'Coraza pseudoicosaédrica de 500 nm' },
          { nodeId: 'real-mimi-stargate', label: 'Vértice stargate pentagonal', cargo: 'Bisagra de apertura controlada' }
        ]
      }
    },

    stargate: {
      en: {
        subtitle: '5-Fold Star-Shaped Vertex Delivery Portal',
        simple:
          'At one special corner of [[Mimivirus|real-mimivirus]], five triangular [[capsid|real-mimi-capsid]] panels meet along a raised star-shaped seam. Inside an acidic amoeba phagosome, those five petals hinge backward so the viral core can pour out.',
        story:
          'Unlike [[Bacteriophage T4|real-phage]], which injects DNA through a contractile tail tube, [[Mimivirus|real-mimivirus]] carries no tail at all. Instead, it seals one unique five-fold vertex with a star-shaped protein lock cleared of long outer fibers. Once trapped inside an acidifying Acanthamoeba phagosome, proton-driven conformational changes unzip all five sutures simultaneously. The five capsid triangles swing wide open like hinged petals, exposing the internal lipid bilayer so it merges with the phagosome membrane and launches the 30-nanometer [[genomic fiber|real-mimi-fiber]] into host cytoplasm.',
        blueprint: {
          role: 'Acid-triggered 5-fold vertex uncoating hatch opening a >100 nm portal out of the rigid capsid',
          arrivesFrom: 'Assembled as the single symmetry-breaking vertex of the 500 nm [[MCP capsid|real-mimi-capsid]] during virion maturation',
          inside: 'Five thickened star-shaped proteinaceous sealing ridges hinging five triangular capsid facets over the internal lipid membrane',
          deliversTo: 'Exposes the internal viral bilayer for phagosome fusion and releases the 1.18 Mbp [[genomic fiber|real-mimi-fiber]] into the host cytosol',
          loop: 'Toggling Stargate Open mode animates the exact 5-petal unzipping triggered by phagosomal acidification'
        },
        scientific:
          'Unique 5-fold [[stargate|real-mimi-stargate]] vertex portal (~200-250 nm radial star assembly) interrupting the pseudo-icosahedral symmetry of [[Mimivirus|real-mimivirus]]. Five thickened, fiber-free proteinaceous seams stabilize five adjacent triangular facets until low phagosomal pH inside Acanthamoeba induces coordinated outward hinging, creating a wide aperture for fusion of the inner viral [[phospholipid|phospholipid]] bilayer with the host phagosome membrane.',
        from: [
          { nodeId: 'real-mimi-capsid', label: 'Five Hinged MCP Facets', cargo: '5-fold vertex symmetry break' },
          { nodeId: 'water', label: 'Acidic Phagosome Lumen', cargo: 'Low-pH proton opening trigger' }
        ],
        to: [
          { nodeId: 'real-mimi-stargate', label: 'Stargate Portal Node', cargo: 'Unzipped 5-petal exit channel' },
          { nodeId: 'real-mimi-fiber', label: 'Genomic Core Ejection', cargo: '30 nm fiber transfer to cytosol' }
        ]
      },
      es: {
        subtitle: 'Portal de vértice pentagonal en estrella (Stargate)',
        simple:
          'En un vértice único de [[Mimivirus|real-mimivirus]], cinco paneles triangulares de la [[cápside|real-mimi-capsid]] convergen en una costura estrellada. Dentro del fagosoma ácido de la ameba, esos cinco pétalos se abaten hacia atrás para liberar el núcleo viral.',
        story:
          'A diferencia del [[bacteriófago T4|real-phage]], que inyecta su ADN por una cola contráctil, [[Mimivirus|real-mimivirus]] carece de cola. En su lugar sella un único vértice pentagonal con una cerradura proteica en estrella libre de fibras largas. Cuando queda atrapado en el fagosoma acidificado de Acanthamoeba, el descenso del pH abre las cinco suturas al unísono. Los cinco triángulos giran hacia afuera como pétalos articulados, descubren la bicapa lipídica interna para que se fusione con la vacuola y liberan la [[fibra genómica|real-mimi-fiber]] de 30 nm al citoplasma.',
        blueprint: {
          role: 'Compuerta pentagonal activada por ácido que abre un portal >100 nm en la cápside rígida',
          arrivesFrom: 'Ensamblado como el único vértice asimétrico de la [[cápside MCP|real-mimi-capsid]] de 500 nm durante la maduración',
          inside: 'Cinco crestas proteicas engrosadas en estrella que articulan cinco caras triangulares sobre la membrana interna',
          deliversTo: 'Expone la bicapa lipídica viral para fusionarse con el fagosoma y liberar la [[fibra genómica|real-mimi-fiber]] de 1,18 Mpb al citosol',
          loop: 'El modo Stargate abierto anima la apertura real de cinco pétalos disparada por la acidificación fagosomal'
        },
        scientific:
          'Portal único de vértice de orden 5 ([[stargate|real-mimi-stargate]], ~200–250 nm) que interrumpe la simetría pseudoicosaédrica de [[Mimivirus|real-mimivirus]]. Cinco suturas proteicas engrosadas y libres de fibras mantienen cerradas cinco caras triangulares contiguas hasta que el pH ácido del fagosoma de Acanthamoeba induce su apertura radial sincronizada para fusionar la bicapa interna de [[fosfolípidos|phospholipid]] con la membrana vacuolar.',
        from: [
          { nodeId: 'real-mimi-capsid', label: 'Cinco caras MCP articuladas', cargo: 'Ruptura de simetría pentagonal' },
          { nodeId: 'water', label: 'Lumen fagosomal ácido', cargo: 'Detonante protónico de bajo pH' }
        ],
        to: [
          { nodeId: 'real-mimi-stargate', label: 'Portal Stargate', cargo: 'Canal abierto de 5 pétalos' },
          { nodeId: 'real-mimi-fiber', label: 'Eyección del núcleo genómico', cargo: 'Transferencia de la fibra de 30 nm' }
        ]
      }
    },

    inner_mem: {
      en: {
        subtitle: 'Internal Viral Phospholipid Bilayer (~5 nm)',
        simple:
          'Unlike [[SARS-CoV-2|real-coronavirus]], which wears a lipid envelope on the outside, [[Mimivirus|real-mimivirus]] hides this thin [[phospholipid|phospholipid]] membrane directly beneath its 500-nanometer protein [[capsid|real-mimi-capsid]]. When the [[stargate|real-mimi-stargate]] opens, this inner membrane fuses with the host vacuole.',
        story:
          'Peeling away the crystalline outer shell reveals a smooth, continuous lipid sac wrapping the entire nucleoprotein core. Harvested from endoplasmic-reticulum-derived vesicles inside the previous amoeba viral factory, this ~5-nanometer [[phospholipid|phospholipid]] bilayer stays sealed and protected from outdoor drying until phagocytosis. The moment the five [[stargate|real-mimi-stargate]] petals peel open inside an acidic phagosome, this inner viral bilayer bulges outward and merges directly with the host phagosome membrane, forming a clean continuous pore straight into the amoeba cytosol.',
        blueprint: {
          role: 'Sub-capsid lipid membrane sealing the genomic core and driving viral-phagosome membrane fusion',
          arrivesFrom: 'Host amoeba ER-derived [[phospholipid|phospholipid]] vesicles recruited into the viral factory during capsid assembly',
          inside: 'Continuous ~5 nm bilayer studded with viral membrane fusion proteins lining the inner wall of the 500 nm [[capsid|real-mimi-capsid]]',
          deliversTo: 'Fuses directly with the acidic phagosome wall after [[stargate|real-mimi-stargate]] opening to discharge the [[genomic fiber|real-mimi-fiber]]',
          loop: 'Demonstrates inverted membrane topology compared to outer-enveloped viruses like [[HIV-1|real-hiv]] and [[SARS-CoV-2|real-coronavirus]]'
        },
        scientific:
          'Internal ~5 nm viral [[phospholipid|phospholipid]] bilayer positioned immediately beneath the 500 nm pseudo-icosahedral [[MCP capsid|real-mimi-capsid]] of [[Mimivirus|real-mimivirus]] (derived from host endoplasmic reticulum membrane sheets during factory morphogenesis). Unlike outer-enveloped viruses ([[SARS-CoV-2|real-coronavirus]], [[HIV-1|real-hiv]]), this internal sac remains shielded until [[stargate|real-mimi-stargate]] opening exposes it for fusion with the Acanthamoeba phagosome membrane.',
        from: [
          { nodeId: 'phospholipid', label: 'Host ER Phospholipids', cargo: 'Recruited bilayer building blocks' },
          { nodeId: 'real-mimi-capsid', label: 'Inner Capsid Wall', cargo: 'Structural scaffold for lipid sac' }
        ],
        to: [
          { nodeId: 'real-mimi-stargate', label: 'Phagosome Membrane Fusion', cargo: 'Direct bilayer continuity pore' },
          { nodeId: 'real-mimi-fiber', label: 'Nucleoprotein Core Delivery', cargo: 'Cytoplasmic genome release' }
        ]
      },
      es: {
        subtitle: 'Bicapa interna viral de fosfolípidos (~5 nm)',
        simple:
          'A diferencia de [[SARS-CoV-2|real-coronavirus]], cuya envoltura lipídica está por fuera, [[Mimivirus|real-mimivirus]] esconde esta fina membrana de [[fosfolípidos|phospholipid]] justo debajo de su [[cápside|real-mimi-capsid]] de 500 nm. Al abrirse el [[stargate|real-mimi-stargate]], esta bicapa se fusiona con la vacuola.',
        story:
          'Al retirar la coraza cristalina externa queda a la vista una bolsa lipídica continua que envuelve todo el núcleo nucleoproteico. Obtenida a partir de vesículas del retículo endoplásmico dentro de la fábrica viral de la ameba anterior, esta bicapa de [[fosfolípidos|phospholipid]] de ~5 nm permanece resguardada frente al exterior hasta la fagocitosis. En el instante en que los cinco pétalos del [[stargate|real-mimi-stargate]] se abren dentro del fagosoma ácido, esta membrana interna sobresale y se funde con la pared vacuolar abriendo un poro directo al citosol.',
        blueprint: {
          role: 'Membrana lipídica subcapsidal que sella el núcleo genómico y ejecuta la fusión con el fagosoma',
          arrivesFrom: 'Vesículas de [[fosfolípidos|phospholipid]] del retículo endoplásmico de la ameba reclutadas durante el ensamblaje viral',
          inside: 'Bicapa continua de ~5 nm provista de proteínas virales de fusión que tapiza el interior de la [[cápside|real-mimi-capsid]] de 500 nm',
          deliversTo: 'Se fusiona con la membrana del fagosoma ácido tras abrirse el [[stargate|real-mimi-stargate]] para inyectar la [[fibra genómica|real-mimi-fiber]]',
          loop: 'Muestra una topología membranosa invertida frente a virus con envoltura externa como [[VIH-1|real-hiv]] y [[SARS-CoV-2|real-coronavirus]]'
        },
        scientific:
          'Bicapa viral interna de [[fosfolípidos|phospholipid]] (~5 nm) dispuesta inmediatamente bajo la [[cápside MCP|real-mimi-capsid]] pseudoicosaédrica de 500 nm de [[Mimivirus|real-mimivirus]] (derivada de láminas del retículo endoplásmico del hospedador en la fábrica viral). A diferencia de [[SARS-CoV-2|real-coronavirus]] o [[VIH-1|real-hiv]], queda resguardada hasta que la apertura del [[stargate|real-mimi-stargate]] la expone para fusionarse con la membrana del fagosoma de Acanthamoeba.',
        from: [
          { nodeId: 'phospholipid', label: 'Fosfolípidos del RE hospedador', cargo: 'Lípidos reclutados para la bicapa' },
          { nodeId: 'real-mimi-capsid', label: 'Pared interna de la cápside', cargo: 'Soporte estructural de la membrana' }
        ],
        to: [
          { nodeId: 'real-mimi-stargate', label: 'Fusión con el fagosoma', cargo: 'Poro continuo entre bicapas' },
          { nodeId: 'real-mimi-fiber', label: 'Entrega del núcleo genómico', cargo: 'Descarga del ADN al citoplasma' }
        ]
      }
    },

    genomic_fiber: {
      en: {
        subtitle: '30 nm Helical Nucleoprotein Genomic Fiber (PDB 7YX3)',
        simple:
          'Coiled tightly inside [[Mimivirus|real-mimivirus]], this hollow 30-nanometer protein tube packs all 1.18 million base pairs of viral [[DNA|dna]] neatly without tangling and carries viral transcription enzymes straight into the amoeba.',
        story:
          'Whereas eukaryotic cells wind [[DNA|dna]] around histone spools inside a [[nucleus|nucleus]], [[Mimivirus|real-mimivirus]] folds its huge chromosome into an inverted sleeve: an outer helical protein tube made of five- or six-start GMC-oxidoreductase-like subunits (resolved by cryo-EM in PDB 7YX3 and 7YX4) sheathing bundled linear dsDNA inside its central bore. Co-packaged viral RNA polymerase sits right alongside those DNA strands so the moment the [[stargate|real-mimi-stargate]] delivers the fiber into cytoplasm, early genes start transcribing immediately.',
        blueprint: {
          role: '30 nm helical nucleoprotein cylinder organizing 1.18 Mbp of dsDNA and co-packaged transcription machinery',
          arrivesFrom: 'Replicated 1.18 Mbp linear [[dsDNA|dna]] threaded with viral GMC-oxidoreductase shell [[proteins|protein]] inside the viral factory',
          inside: '5-start and 6-start helical protein cylinder (cryo-EM PDB 7YX3 / 7YX4) enclosing five or six parallel dsDNA helices plus viral RNAP',
          deliversTo: 'Streams through the open [[stargate|real-mimi-stargate]] into Acanthamoeba cytoplasm and unwinds to seed a new viral factory',
          loop: 'Reuses the same GMC-oxidoreductase protein family that cross-links outer surface fibers, showing extreme genomic economy'
        },
        scientific:
          'Mimivirus ~30 nm helical nucleoprotein [[genomic fiber|real-mimi-fiber]] (near-atomic cryo-EM PDB 7YX3 five-start and PDB 7YX4 six-start structures; outer diameter ~28-32 nm). Paralogous GMC-oxidoreductase-family [[polypeptides|polypeptide]] assemble a protective external helix surrounding five or six internal parallel strands of the 1,181,549 bp linear [[dsDNA|dna]] genome along with packaged DNA-dependent RNA polymerase complexes for immediate cytoplasmic gene expression.',
        from: [
          { nodeId: 'dna', label: '1.18 Mbp Linear dsDNA', cargo: 'Giant double-stranded genome' },
          { nodeId: 'protein', label: 'GMC-Oxidoreductase Shell', cargo: '5-start & 6-start helical sleeve' }
        ],
        to: [
          { nodeId: 'real-mimi-fiber', label: 'Genomic Fiber Node', cargo: 'PDB 7YX3 30 nm assembly' },
          { nodeId: 'real-mimivirus', label: 'Cytoplasmic Viral Factory', cargo: 'Immediate post-entry transcription' }
        ]
      },
      es: {
        subtitle: 'Fibra genómica nucleoproteica helicoidal de 30 nm (PDB 7YX3)',
        simple:
          'Enrollada dentro de [[Mimivirus|real-mimivirus]], esta funda proteica hueca de 30 nanómetros guarda sin enredos los 1,18 millones de pares de bases del [[ADN|dna]] viral y transporta las enzimas de transcripción directo a la ameba.',
        story:
          'Mientras las células eucariotas enrollan el [[ADN|dna]] alrededor de histonas dentro del [[núcleo|nucleus]], [[Mimivirus|real-mimivirus]] usa el diseño inverso: un tubo proteico helicoidal externo de cinco o seis inicios formado por subunidades tipo GMC-oxidorreductasa (crio-EM PDB 7YX3 y 7YX4) que encierra haces lineales de ADNbc en su conducto interior. La ARN polimerasa viral viaja pegada a esas hebras para iniciar la transcripción de genes tempranos apenas el [[stargate|real-mimi-stargate]] libera la fibra en el citoplasma.',
        blueprint: {
          role: 'Cilindro nucleoproteico helicoidal de 30 nm que organiza 1,18 Mpb de ADNbc y enzimas transcripcionales',
          arrivesFrom: '[[ADNbc|dna]] lineal replicado de 1,18 Mpb revestido con [[proteínas|protein]] GMC-oxidorreductasas en la fábrica viral',
          inside: 'Cilindro proteico helicoidal de 5 y 6 inicios (crio-EM PDB 7YX3 / 7YX4) con cinco o seis hélices paralelas de ADNbc y ARNP viral',
          deliversTo: 'Fluye por el [[stargate|real-mimi-stargate]] abierto hacia el citoplasma de Acanthamoeba para fundar una nueva fábrica viral',
          loop: 'Reutiliza la misma familia proteica GMC-oxidorreductasa presente en las fibras superficiales externas'
        },
        scientific:
          '[[Fibra genómica|real-mimi-fiber]] nucleoproteica helicoidal de ~30 nm de Mimivirus (crio-EM PDB 7YX3 de cinco inicios y PDB 7YX4 de seis inicios; diámetro ~28–32 nm). [[Polipéptidos|polypeptide]] parálogos de la familia GMC-oxidorreductasa construyen una hélice externa que encierra cinco o seis hebras paralelas del genoma lineal de [[ADNbc|dna]] (1.181.549 pb) junto a la ARN polimerasa dependiente de ADN viral para expresión citoplasmática inmediata.',
        from: [
          { nodeId: 'dna', label: 'ADNbc lineal de 1,18 Mpb', cargo: 'Genoma bicatenario gigante' },
          { nodeId: 'protein', label: 'Funda GMC-oxidorreductasa', cargo: 'Hélice proteica de 5 y 6 inicios' }
        ],
        to: [
          { nodeId: 'real-mimi-fiber', label: 'Fibra genómica', cargo: 'Ensamblaje de 30 nm PDB 7YX3' },
          { nodeId: 'real-mimivirus', label: 'Fábrica viral citoplasmática', cargo: 'Transcripción temprana inmediata' }
        ]
      }
    },

    dsdna: {
      en: {
        subtitle: '1.18 Mbp Linear Double-Stranded DNA Genome (~1,000 Genes)',
        simple:
          'Holding 1,181,549 base pairs and roughly 1,000 genes, this linear [[dsDNA|dna]] chromosome is twice as large as the entire genome of living [[Mycoplasma genitalium|real-mycoplasma]] - yet it encodes zero [[ribosomes|ribosome]] and zero ATP engines.',
        story:
          'Every canonical textbook [[virus|viruses]] carries between a handful and a few hundred genes, leaving all complex biochemistry to the cell. [[Mimivirus|real-mimivirus]] shatters that scale with 1.18 megabases of AT-rich linear [[DNA|dna]] coding for DNA repair enzymes, sugar-building pathways, mRNA capping machinery, and even four aminoacyl-tRNA synthetases such as [[TyrRS|real-mimi-tyrrs]]. Yet scanning every single one of those ~1,000 open reading frames reveals the decisive missing pieces: zero ribosomal RNA genes, zero ribosomal proteins, and zero respiratory [[ATP synthases|atp-synthase]].',
        blueprint: {
          role: '1,181,549 bp linear double-stranded DNA archive (~1,000 ORFs) orchestrating autonomous cytoplasmic factory morphogenesis',
          arrivesFrom: 'Replicated inside the Acanthamoeba cytoplasmic viral factory by virus-encoded Family B DNA polymerase consuming host dNTPs',
          inside: 'AT-rich (~72% A+T) B-form [[dsDNA|dna]] duplex packaged inside the 30 nm [[genomic fiber|real-mimi-fiber]] with terminal hairpins',
          deliversTo: 'Templates early/late viral mRNAs for [[capsid|real-mimi-capsid]], [[TyrRS|real-mimi-tyrrs]], fibers, and progeny genomes',
          loop: 'Carries >2x the DNA and genes of living [[Mycoplasma|real-mycoplasma]] (580 kbp, ~482 genes) yet remains strictly non-living'
        },
        scientific:
          'Linear double-stranded [[DNA|dna]] genome of [[Acanthamoeba polyphaga Mimivirus|real-mimivirus]] measuring 1,181,549 bp (~72% A+T content; ~979-1,018 predicted ORFs, ~90% coding density), exceeding autonomous minimal bacterium [[Mycoplasma genitalium|real-mycoplasma]] (580,076 bp; ~482 genes) and intracellular bacterial parasites [[Chlamydia|real-chlamydia]] and [[Rickettsia|real-rickettsia]]. Encodes DNA polymerase, topoisomerases, repair pathways, multi-subunit RNAP, and four aaRSs ([[TyrRS|real-mimi-tyrrs]]), while completely lacking rRNA, ribosomal proteins, and ATP-generating metabolism.',
        from: [
          { nodeId: 'nucleotide', label: 'Host dNTP Supply', cargo: 'dATP, dTTP, dGTP, dCTP' },
          { nodeId: 'real-mimi-fiber', label: '30 nm Genomic Fiber', cargo: 'Ordered nucleoprotein packaging' }
        ],
        to: [
          { nodeId: 'dna', label: 'Double-Stranded DNA Node', cargo: '1.18 Mbp linear duplex' },
          { nodeId: 'real-mimi-tyrrs', label: 'Viral Translation Genes', cargo: '4 aaRSs & ~1,000 ORFs' }
        ]
      },
      es: {
        subtitle: 'Genoma lineal de ADNbc de 1,18 Mpb (~1.000 genes)',
        simple:
          'Con 1.181.549 pares de bases y cerca de 1.000 genes, este cromosoma lineal de [[ADNbc|dna]] duplica al genoma completo de la bacteria viva [[Mycoplasma genitalium|real-mycoplasma]], pero codifica cero [[ribosomas|ribosome]] y cero motores de ATP.',
        story:
          'Los [[virus|viruses]] clásicos suelen portar entre unos pocos y un par de cientos de genes, delegando toda bioquímica compleja a la célula. [[Mimivirus|real-mimivirus]] rompe esa escala con 1,18 megabases de [[ADN|dna]] lineal rico en A+T que codifica reparación de ADN, síntesis de azúcares, enzimas de caperuza e incluso cuatro aminoacil-ARNt sintetasas como [[TyrRS|real-mimi-tyrrs]]. Sin embargo, revisar uno por uno sus ~1.000 genes confirma la ausencia decisiva: cero genes de ARN ribosómico, cero proteínas ribosómicas y cero [[ATP sintasas|atp-synthase]].',
        blueprint: {
          role: 'Archivo genético lineal de ADNbc de 1.181.549 pb (~1.000 ORF) que dirige la fábrica viral citoplasmática',
          arrivesFrom: 'Replicado en la fábrica viral citoplasmática de Acanthamoeba por la ADN polimerasa viral de familia B con dNTP del hospedador',
          inside: 'Dúplex de [[ADNbc|dna]] forma B rico en A+T (~72 %) compactado dentro de la [[fibra genómica|real-mimi-fiber]] de 30 nm',
          deliversTo: 'Sirve de molde para ARNm virales de [[cápside|real-mimi-capsid]], [[TyrRS|real-mimi-tyrrs]], fibras y nuevos genomas',
          loop: 'Duplica el ADN y los genes de la célula viva [[Mycoplasma|real-mycoplasma]] (580 kpb, ~482 genes) sin dejar de ser acelular'
        },
        scientific:
          'Genoma lineal de [[ADN|dna]] bicatenario de [[Acanthamoeba polyphaga Mimivirus|real-mimivirus]] de 1.181.549 pb (~72 % A+T; ~979–1.018 ORF predichos, densidad codificante ~90 %), superior a [[Mycoplasma genitalium|real-mycoplasma]] (580.076 pb; ~482 genes) y comparable a bacterias parásitas como [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]]. Codifica ADN polimerasa, topoisomerasas, reparación, ARNP multisubunidad y cuatro aaRS ([[TyrRS|real-mimi-tyrrs]]), careciendo totalmente de ARNr, proteínas ribosómicas y síntesis de ATP.',
        from: [
          { nodeId: 'nucleotide', label: 'Suministro de dNTP hospedador', cargo: 'dATP, dTTP, dGTP, dCTP' },
          { nodeId: 'real-mimi-fiber', label: 'Fibra genómica de 30 nm', cargo: 'Empaquetado nucleoproteico ordenado' }
        ],
        to: [
          { nodeId: 'dna', label: 'ADN bicatenario', cargo: 'Dúplex lineal de 1,18 Mpb' },
          { nodeId: 'real-mimi-tyrrs', label: 'Genes virales de traducción', cargo: '4 aaRS y ~1.000 ORF' }
        ]
      }
    },

    tyrrs: {
      en: {
        subtitle: 'Viral Tyrosyl-tRNA Synthetase (PDB 2J5B)',
        simple:
          'Encoded directly in the [[Mimivirus|real-mimivirus]] genome, this dimeric [[enzyme|real-mimi-tyrrs]] attaches the amino acid tyrosine onto host transfer RNA to help stolen amoeba [[ribosomes|ribosome]] build viral proteins faster.',
        story:
          'Seeing a real crystal structure of a virus-encoded aminoacyl-tRNA synthetase (PDB 2J5B) forces every learner to refine the definition of life. [[Mimivirus|real-mimivirus]] brings its own Tyrosyl-tRNA synthetase along with ArgRS, CysRS, and MetRS so translation of its AT-rich genes never stalls waiting for scarce host charging enzymes. Using amoeba-supplied ATP and [[Mg2+|atom-mg]], the dimer activates tyrosine and loads it onto host tRNA-Tyr - yet without host [[80S ribosomes|ribosome]] to read that loaded tRNA, the enzyme sits completely idle.',
        blueprint: {
          role: 'Viral Class Ic aminoacyl-tRNA synthetase dimer charging host tRNA-Tyr for rapid factory protein synthesis',
          arrivesFrom: 'Encoded on the 1.18 Mbp [[dsDNA|dna]] genome and translated by stolen Acanthamoeba [[80S ribosomes|ribosome]]',
          inside: 'Homodimeric Rossmann-fold catalytic site (PDB 2J5B) coupling free L-tyrosine [[amino acids|amino-acid]] and host ATP + [[Mg2+|atom-mg]]',
          deliversTo: 'Delivers charged Tyr-tRNA-Tyr directly to host [[80S ribosomes|ribosome]] ringing the viral factory',
          loop: 'Demonstrates that partial translation enzymes alone cannot satisfy the ribosome autonomy pillar of cellular life'
        },
        scientific:
          'Mimivirus [[Tyrosyl-tRNA synthetase|real-mimi-tyrrs]] homodimer (PDB 2J5B; Class Ic aaRS containing Rossmann fold HIGH/KMSKS catalytic signatures and minimalist anticodon-binding domain). Catalyzes ATP/[[Mg2+|atom-mg]]-dependent aminoacylation of host tRNA-Tyr with L-tyrosine to relieve codon-usage bottlenecks imposed by the ~72% A+T [[Mimivirus|real-mimivirus]] genome, while remaining completely dependent on host Acanthamoeba [[80S ribosomes|ribosome]].',
        from: [
          { nodeId: 'amino-acid', label: 'L-Tyrosine Amino Acid', cargo: 'Host cytosolic amino acid pool' },
          { nodeId: 'atom-mg', label: 'Host ATP & Mg2+', cargo: 'Aminoacylation activation energy' }
        ],
        to: [
          { nodeId: 'real-mimi-tyrrs', label: 'Mimivirus TyrRS Node', cargo: 'PDB 2J5B viral aaRS dimer' },
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'Charged Tyr-tRNA-Tyr supply' }
        ]
      },
      es: {
        subtitle: 'Tirosil-ARNt sintetasa viral (PDB 2J5B)',
        simple:
          'Codificada en el propio genoma de [[Mimivirus|real-mimivirus]], esta [[enzima|real-mimi-tyrrs]] dimérica carga el aminoácido tirosina en el ARNt del hospedador para que los [[ribosomas|ribosome]] robados fabriquen proteínas virales más rápido.',
        story:
          'Contemplar la estructura real de una aminoacil-ARNt sintetasa codificada por un virus (PDB 2J5B) obliga a afinar la frontera de la vida. [[Mimivirus|real-mimivirus]] aporta su propia tirosil-ARNt sintetasa junto con ArgRS, CysRS y MetRS para que la traducción de sus genes ricos en A+T no se atasque por falta de enzimas celulares. Empleando ATP y [[Mg²⁺|atom-mg]] de la ameba, el dímero activa la tirosina y la transfiere al ARNt-Tyr del hospedador, pero sin [[ribosomas 80S|ribosome]] celulares que lean ese ARNt la enzima queda inactiva.',
        blueprint: {
          role: 'Dímero viral aminoacil-ARNt sintetasa de clase Ic que carga ARNt-Tyr para acelerar la fábrica viral',
          arrivesFrom: 'Codificada en el genoma [[ADNbc|dna]] de 1,18 Mpb y traducida en [[ribosomas 80S|ribosome]] de Acanthamoeba',
          inside: 'Sitio catalítico homodimérico con plegamiento Rossmann (PDB 2J5B) que acopla L-tirosina ([[aminoácido|amino-acid]]) con ATP y [[Mg²⁺|atom-mg]]',
          deliversTo: 'Entrega Tyr-ARNt-Tyr cargado directamente a los [[ribosomas 80S|ribosome]] del hospedador alrededor de la fábrica',
          loop: 'Confirma que poseer enzimas parciales de traducción no sustituye al pilar ribosómico de la vida celular'
        },
        scientific:
          'Homodímero viral de [[tirosil-ARNt sintetasa|real-mimi-tyrrs]] de Mimivirus (PDB 2J5B; aaRS clase Ic con motivos catalíticos Rossmann HIGH/KMSKS y dominio mínimo de unión al anticodón). Cataliza la aminoacilación dependiente de ATP y [[Mg²⁺|atom-mg]] del ARNt-Tyr hospedador con L-tirosina para aliviar cuellos de botella de uso de codones en el genoma ~72 % A+T de [[Mimivirus|real-mimivirus]], dependiendo íntegramente de los [[ribosomas 80S|ribosome]] de Acanthamoeba.',
        from: [
          { nodeId: 'amino-acid', label: 'Aminoácido L-tirosina', cargo: 'Reserva citosólica de aminoácidos' },
          { nodeId: 'atom-mg', label: 'ATP y Mg²⁺ del hospedador', cargo: 'Energía de aminoacilación' }
        ],
        to: [
          { nodeId: 'real-mimi-tyrrs', label: 'TyrRS de Mimivirus', cargo: 'Dímero viral aaRS PDB 2J5B' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S del hospedador', cargo: 'Suministro de Tyr-ARNt-Tyr cargado' }
        ]
      }
    },

    viral_rnap: {
      en: {
        subtitle: 'Co-Packaged Viral DNA-Dependent RNA Polymerase',
        simple:
          'Because [[Mimivirus|real-mimivirus]] replicates completely outside the amoeba [[nucleus|nucleus]], it packs its own multi-subunit RNA polymerase inside the [[genomic fiber|real-mimi-fiber]] to start reading viral [[DNA|dna]] immediately upon entry.',
        story:
          'DNA viruses like [[Adenovirus|real-adenovirus]] must haul their genomes all the way into the host [[nucleus|nucleus]] to borrow cellular [[RNA Pol II|pol-ii]]. [[Mimivirus|real-mimivirus]] skips the nuclear trip altogether by building its own multi-subunit DNA-dependent RNA polymerase and packing pre-made copies directly inside the 30-nanometer [[genomic fiber|real-mimi-fiber]]. The second the core hits host cytoplasm and drains host rNTPs and [[Mg2+|atom-mg]], viral RNAP transcribes early genes that construct the massive cytoplasmic viral factory.',
        blueprint: {
          role: 'Packaged multi-subunit viral transcriptase initiating cytoplasmic mRNA synthesis without nuclear entry',
          arrivesFrom: 'Pre-packaged directly along the 30 nm [[genomic fiber|real-mimi-fiber]] inside the mature virion before amoeba uptake',
          inside: 'Multi-subunit RNA polymerase core (homologous in catalytic cleft to eukaryotic [[Pol II|pol-ii]]) coordinating [[Mg2+|atom-mg]] and rNTPs on [[dsDNA|dna]]',
          deliversTo: 'Extrudes early viral [[RNA|rna]] transcripts to the viral capping enzyme and nearby host [[80S ribosomes|ribosome]]',
          loop: 'Grants cytoplasmic transcriptional independence while still relying 100% on host nucleotides, ATP, and ribosomes'
        },
        scientific:
          'Virus-encoded multi-subunit DNA-dependent RNA polymerase (comprising Rpb1/Rpb2-like catalytic subunits plus accessory factors) co-packaged inside the ~30 nm [[Mimivirus genomic fiber|real-mimi-fiber]] (PDB 7YX3). Consumes host cytoplasmic rNTPs with catalytic [[Mg2+|atom-mg]] to transcribe early, intermediate, and late [[Mimivirus|real-mimivirus]] promoters directly in the Acanthamoeba cytoplasm without requiring host nuclear [[Pol II|pol-ii]].',
        from: [
          { nodeId: 'real-mimi-fiber', label: '30 nm Genomic Fiber', cargo: 'Pre-packaged RNAP + dsDNA template' },
          { nodeId: 'nucleotide', label: 'Host Cytoplasmic rNTPs', cargo: 'ATP, UTP, GTP, CTP building blocks' }
        ],
        to: [
          { nodeId: 'rna', label: 'Early Viral mRNA', cargo: 'Cytoplasmic transcripts' },
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'Translation into factory proteins' }
        ]
      },
      es: {
        subtitle: 'ARN polimerasa dependiente de ADN viral coempaquetada',
        simple:
          'Como [[Mimivirus|real-mimivirus]] se replica por completo fuera del [[núcleo|nucleus]] de la ameba, empaca su propia ARN polimerasa multisubunidad dentro de la [[fibra genómica|real-mimi-fiber]] para leer su [[ADN|dna]] viral apenas entra.',
        story:
          'Virus de ADN como [[Adenovirus|real-adenovirus]] deben transportar su genoma hasta el [[núcleo|nucleus]] celular para usar la [[ARN Pol II|pol-ii]] del hospedador. [[Mimivirus|real-mimivirus]] evita ese viaje fabricando su propia ARN polimerasa dependiente de ADN multisubunidad y guardando copias listas dentro de la [[fibra genómica|real-mimi-fiber]] de 30 nm. Apenas el núcleo viral alcanza el citoplasma y capta rNTP y [[Mg²⁺|atom-mg]] de la ameba, esta enzima transcribe los genes tempranos que levantan la fábrica viral.',
        blueprint: {
          role: 'Transcriptasa viral multisubunidad coempaquetada que inicia la síntesis de ARNm sin entrar al núcleo',
          arrivesFrom: 'Preempaquetada a lo largo de la [[fibra genómica|real-mimi-fiber]] de 30 nm dentro del virión maduro antes de la infección',
          inside: 'Núcleo enzimático multisubunidad (homólogo en su centro catalítico a la [[Pol II|pol-ii]] eucariota) coordinando [[Mg²⁺|atom-mg]] y rNTP sobre [[ADNbc|dna]]',
          deliversTo: 'Libera transcritos tempranos de [[ARN|rna]] viral hacia la enzima de caperuza y los [[ribosomas 80S|ribosome]] del hospedador',
          loop: 'Otorga autonomía transcripcional en el citoplasma, pero sigue dependiendo al 100 % de nucleótidos, ATP y ribosomas ajenos'
        },
        scientific:
          'ARN polimerasa dependiente de ADN multisubunidad codificada por el virus (con subunidades catalíticas homólogas a Rpb1/Rpb2 y factores accesorios) coempaquetada dentro de la [[fibra genómica de Mimivirus|real-mimi-fiber]] de ~30 nm (PDB 7YX3). Consume rNTP citoplasmáticos del hospedador con [[Mg²⁺|atom-mg]] catalítico para transcribir promotores tempranos, intermedios y tardíos de [[Mimivirus|real-mimivirus]] directamente en el citoplasma de Acanthamoeba sin recurrir a la [[Pol II|pol-ii]] nuclear.',
        from: [
          { nodeId: 'real-mimi-fiber', label: 'Fibra genómica de 30 nm', cargo: 'ARNP coempaquetada y molde ADNbc' },
          { nodeId: 'nucleotide', label: 'rNTP citoplasmáticos', cargo: 'ATP, UTP, GTP y CTP del hospedador' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm viral temprano', cargo: 'Transcritos citoplasmáticos' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S del hospedador', cargo: 'Traducción de proteínas de fábrica' }
        ]
      }
    },

    capping_enz: {
      en: {
        subtitle: 'Viral Trifunctional mRNA Capping Enzyme',
        simple:
          'Host [[80S ribosomes|ribosome]] expect every messenger [[RNA|rna]] to wear a protective 5-prime chemical cap. Because [[Mimivirus|real-mimivirus]] transcribes its genes in the cytoplasm, it carries its own capping enzyme to stamp that cap onto every viral transcript.',
        story:
          'In an uninfected [[eukaryotic cell|real-cell]], nuclear capping enzymes attach a 7-methylguanosine cap onto nascent mRNAs before export so cytosolic exonucleases do not chew them up and [[80S ribosomes|ribosome]] recognize them. Since [[Mimivirus|real-mimivirus]] stays strictly inside the amoeba cytoplasm, its own trifunctional capping enzyme intercepts freshly transcribed viral [[RNA|rna]] right off the viral polymerase, strips a terminal [[phosphate|phosphate]], transfers a guanylyl group, and methylates it so host translation factors embrace viral messages eagerly.',
        blueprint: {
          role: 'Cytoplasmic viral mRNA 5-prime capping module masking viral transcripts as authentic eukaryotic messages',
          arrivesFrom: 'Co-packaged and freshly translated viral capping [[protein|protein]] acting on nascent [[RNA|rna]] from viral RNAP',
          inside: 'Trifunctional RNA triphosphatase, guanylyltransferase, and N7-methyltransferase domains using host GTP and [[Mg2+|atom-mg]]',
          deliversTo: 'Releases 5-prime-m7G-capped viral mRNAs directly to recruited Acanthamoeba [[80S ribosomes|ribosome]]',
          loop: 'Shields cytoplasmic viral mRNAs from host 5-to-3 exonucleases while maximizing hijacked translation rates'
        },
        scientific:
          'Mimivirus trifunctional mRNA capping enzyme combining RNA 5-prime-triphosphatase (metal-dependent [[Mg2+|atom-mg]] hydrolysis), guanylyltransferase (GTP -> GMP transfer via covalent lysyl-GMP intermediate), and guanine-N7-methyltransferase activities. Modifies the 5-prime terminus of cytoplasmic [[Mimivirus|real-mimivirus]] [[RNA|rna]] transcripts to form a eukaryotic m7GpppN cap essential for eIF4E recruitment and [[80S ribosome|ribosome]] initiation.',
        from: [
          { nodeId: 'rna', label: 'Nascent Viral mRNA', cargo: '5-prime-triphosphate RNA ends' },
          { nodeId: 'nucleotide', label: 'Host GTP Supply', cargo: 'Guanylyl cap donor' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'm7G-capped translatable mRNA' },
          { nodeId: 'real-mimivirus', label: 'Viral Factory Output', cargo: 'High-efficiency viral expression' }
        ]
      },
      es: {
        subtitle: 'Enzima viral trifuncional de caperuza 5′ del ARNm',
        simple:
          'Los [[ribosomas 80S|ribosome]] del hospedador exigen que todo [[ARN|rna]] mensajero lleve una caperuza química 5′ protectora. Como [[Mimivirus|real-mimivirus]] transcribe sus genes en el citoplasma, aporta su propia enzima para sellar cada transcrito viral.',
        story:
          'En una [[célula eucariota|real-cell]] sana, las enzimas nucleares añaden una caperuza de 7-metilguanosina al ARNm naciente para protegerlo de exonucleasas y permitir que los [[ribosomas 80S|ribosome]] lo inicien. Al permanecer siempre en el citoplasma de la ameba, [[Mimivirus|real-mimivirus]] despliega su propia enzima trifuncional sobre el [[ARN|rna]] recién salido de la polimerasa viral: retira un [[fosfato|phosphate]] terminal, transfiere guanosina y la metila para que la maquinaria hospedadora traduzca sus mensajes a toda velocidad.',
        blueprint: {
          role: 'Módulo viral citoplasmático de caperuza 5′ que disfraza los ARNm virales como mensajeros eucariotas',
          arrivesFrom: '[[Proteína|protein]] viral coempaquetada que actúa sobre el [[ARN|rna]] recién transcrito por la ARNP viral',
          inside: 'Dominios trifuncionales de ARN trifosfatasa, guanililtransferasa y N7-metiltransferasa con GTP y [[Mg²⁺|atom-mg]]',
          deliversTo: 'Entrega ARNm virales con caperuza 5′-m⁷G a los [[ribosomas 80S|ribosome]] de Acanthamoeba',
          loop: 'Protege los mensajeros citoplasmáticos frente a exonucleasas mientras maximiza la traducción secuestrada'
        },
        scientific:
          'Enzima trifuncional de caperuza del ARNm de Mimivirus que integra actividades ARN 5′-trifosfatasa dependiente de [[Mg²⁺|atom-mg]], guanililtransferasa (intermediario covalente lisil-GMP desde GTP) y guanina-N7-metiltransferasa. Forma la caperuza eucariota m⁷GpppN en el extremo 5′ del [[ARN|rna]] citoplasmático de [[Mimivirus|real-mimivirus]] para reclutar eIF4E e iniciar la traducción en [[ribosomas 80S|ribosome]].',
        from: [
          { nodeId: 'rna', label: 'ARNm viral naciente', cargo: 'Extremos 5′-trifosfato' },
          { nodeId: 'nucleotide', label: 'GTP del hospedador', cargo: 'Donador guanilílico de caperuza' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S del hospedador', cargo: 'ARNm con caperuza m⁷G traducible' },
          { nodeId: 'real-mimivirus', label: 'Producción de la fábrica viral', cargo: 'Expresión viral de alta tasa' }
        ]
      }
    },

    phagosome: {
      en: {
        subtitle: 'Acidic Acanthamoeba Phagosome Vacuole',
        simple:
          'After an amoeba swallows 750-nanometer [[Mimivirus|real-mimivirus]] mistaking it for a [[bacterium|real-bacterium]], it seals the particle inside this digestive vacuole and pumps acid in - unintentionally pulling the exact trigger that opens the viral [[stargate|real-mimi-stargate]].',
        story:
          'Normally, Acanthamoeba hunts bacterial prey by sealing each victim inside a phagosome, pumping protons across the vacuolar membrane to drop pH below 5, and dumping lysosomal enzymes to digest it. Against [[Mimivirus|real-mimivirus]], that ancient defense backfires completely. The dense fiber coat and 500-nanometer [[capsid|real-mimi-capsid]] withstand acid digestion while low pH unlocks the five-fold [[stargate|real-mimi-stargate]], letting the viral inner bilayer fuse directly into the phagosome wall and inject the 1.18-megabase core straight out into the cytoplasm.',
        blueprint: {
          role: 'Host digestive vacuole hijacked as the low-pH conformational trigger for giant-virus uncoating',
          arrivesFrom: 'Pinched off from the Acanthamoeba [[plasma membrane|plasma-membrane]] following bacterial-mimicry phagocytosis',
          inside: 'Acidified ~1-micrometer membrane-bound lumen (pH ~4.5-5.0) containing V-ATPase proton pumps and engulfed [[Mimivirus|real-mimivirus]]',
          deliversTo: 'Triggers 5-petal [[stargate|real-mimi-stargate]] unzipping and hosts direct membrane fusion for [[genomic fiber|real-mimi-fiber]] escape',
          loop: 'Turns the amoeba own predatory digestion cycle into the mandatory entry key for viral infection'
        },
        scientific:
          'Acidifying endocytic phagosome vacuole (~0.9-1.2 micrometers diameter) generated by Acanthamoeba phagocytosis of fiber-coated ~750 nm [[Mimivirus|real-mimivirus]] particles. V-ATPase-mediated proton pumping lowers luminal pH (~4.5-5.5), providing the biochemical cue that opens the 5-fold [[stargate|real-mimi-stargate]] portal and enables fusion of the viral internal [[phospholipid|phospholipid]] bilayer with the phagosomal membrane prior to lysosomal destruction.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Amoeba Phagocytic Cup', cargo: 'Engulfment of 750 nm virion' },
          { nodeId: 'real-mimivirus', label: 'Bacterial-Scale Fibers', cargo: 'Phagocytosis recognition cue' }
        ],
        to: [
          { nodeId: 'real-mimi-stargate', label: 'Acid-Triggered Stargate', cargo: '5-petal capsid opening' },
          { nodeId: 'real-mimi-fiber', label: 'Cytoplasmic Core Release', cargo: 'Escape prior to digestion' }
        ]
      },
      es: {
        subtitle: 'Vacuola fagosomal ácida de Acanthamoeba',
        simple:
          'Tras engullir a [[Mimivirus|real-mimivirus]] (750 nm) confundiéndolo con una [[bacteria|real-bacterium]], la ameba lo encierra en esta vacuola digestiva y bombea ácido adentro, accionando sin querer el detonante exacto que abre el [[stargate|real-mimi-stargate]] viral.',
        story:
          'Normalmente, Acanthamoeba digiere bacterias sellándolas en un fagosoma, bombeando protones hasta bajar el pH por debajo de 5 y vertiendo enzimas lisosomales. Con [[Mimivirus|real-mimivirus]], esa defensa milenaria se vuelve en contra: las fibras y la [[cápside|real-mimi-capsid]] de 500 nm resisten la digestión mientras el pH ácido desbloquea el [[stargate|real-mimi-stargate]] pentagonal, dejando que la membrana viral interna se fusione con la pared vacuolar y lance el genoma al citoplasma.',
        blueprint: {
          role: 'Vacuola digestiva del hospedador aprovechada como detonante ácido del desnudamiento del virus gigante',
          arrivesFrom: 'Formada por invaginación de la [[membrana plasmática|plasma-membrane]] de Acanthamoeba tras la fagocitosis',
          inside: 'Lumen acidificado de ~1 µm (pH ~4,5–5,0) con bombas protónicas V-ATPasa rodeando a [[Mimivirus|real-mimivirus]]',
          deliversTo: 'Dispara la apertura de 5 pétalos del [[stargate|real-mimi-stargate]] y ofrece la bicapa para el escape de la [[fibra genómica|real-mimi-fiber]]',
          loop: 'Convierte el propio mecanismo predador de la ameba en la llave indispensable de entrada viral'
        },
        scientific:
          'Vacuola fagosomal acidificante (~0,9–1,2 µm de diámetro) originada tras la fagocitosis de [[Mimivirus|real-mimivirus]] (~750 nm) por Acanthamoeba. El bombeo de protones por V-ATPasa reduce el pH luminal (~4,5–5,5), disparando la apertura del [[portal stargate|real-mimi-stargate]] de orden 5 y la fusión entre la bicapa interna viral de [[fosfolípidos|phospholipid]] y la membrana del fagosoma antes de la degradación lisosomal.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Copa fagocítica de ameba', cargo: 'Captura del virión de 750 nm' },
          { nodeId: 'real-mimivirus', label: 'Fibras de escala bacteriana', cargo: 'Señuelo de fagocitosis' }
        ],
        to: [
          { nodeId: 'real-mimi-stargate', label: 'Stargate activado por ácido', cargo: 'Apertura pentagonal de la cápside' },
          { nodeId: 'real-mimi-fiber', label: 'Escape al citoplasma', cargo: 'Salida previa a la digestión' }
        ]
      }
    },

    amoeba_mem: {
      en: {
        subtitle: 'Host Acanthamoeba Plasma Membrane',
        simple:
          'This flexible eukaryotic [[plasma membrane|plasma-membrane]] belongs to the single-celled host Acanthamoeba, which reaches out pseudopods to engulf [[bacteria|real-bacterium]] - and accidentally pulls 750-nanometer [[Mimivirus|real-mimivirus]] inside.',
        story:
          'Whereas tiny 100-nanometer viruses like [[SARS-CoV-2|real-coronavirus]] or [[HIV-1|real-hiv]] rely on specific protein receptor keys to cross a host [[plasma membrane|plasma-membrane]], giant [[Mimivirus|real-mimivirus]] uses sheer size and surface mimicry. Grazing freshwater Acanthamoeba constantly sweep particles larger than ~500 nanometers into phagocytic cups driven by actin polymerization beneath this fluid [[phospholipid|phospholipid]]-[[cholesterol|cholesterol]] bilayer, unknowingly importing a colossal predator.',
        blueprint: {
          role: 'Fluid eukaryotic host outer membrane executing bulk phagocytosis of bacterial-scale particles',
          arrivesFrom: 'Living Acanthamoeba eukaryotic cell envelope built from [[phospholipids|phospholipid]], sterols ([[cholesterol|cholesterol]]), and surface receptors',
          inside: '7 nm fluid bilayer backed by cortical actin machinery wrapping around incoming >500 nm targets',
          deliversTo: 'Seals engulfed [[Mimivirus|real-mimivirus]] inside an internalizing acidic phagosome and eventually lyses to release progeny',
          loop: 'Demonstrates that giant viruses exploit general protozoan feeding rather than lock-and-key receptor fusion at the surface'
        },
        scientific:
          'Eukaryotic [[plasma membrane|plasma-membrane]] (~7 nm fluid [[phospholipid|phospholipid]]/sterol bilayer) of free-living freshwater amoeba Acanthamoeba polyphaga (analogous in eukaryotic cell boundary physics to [[animal|real-cell]] and [[protist|real-paramecium]] cells). Actin-driven pseudopod extension phagocytoses particles >= ~500 nm, internalizing fiber-coated ~750 nm [[Mimivirus|real-mimivirus]] into nascent phagosomes and later rupturing upon terminal viral burst.',
        from: [
          { nodeId: 'phospholipid', label: 'Host Bilayer Lipids', cargo: 'Fluid eukaryotic membrane sheet' },
          { nodeId: 'real-cell', label: 'Eukaryotic Host Cortex', cargo: 'Actin-driven phagocytosis' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Plasma Membrane Node', cargo: 'Selective eukaryotic barrier' },
          { nodeId: 'real-mimivirus', label: 'Phagocytic Virion Uptake', cargo: 'Entry into acidic vacuole' }
        ]
      },
      es: {
        subtitle: 'Membrana plasmática hospedadora de Acanthamoeba',
        simple:
          'Esta flexible [[membrana plasmática|plasma-membrane]] eucariota pertenece a la ameba unicelular Acanthamoeba, que extiende seudópodos para cazar [[bacterias|real-bacterium]] y atrapa por error a [[Mimivirus|real-mimivirus]] de 750 nanómetros.',
        story:
          'Mientras virus diminutos de 100 nm como [[SARS-CoV-2|real-coronavirus]] o [[VIH-1|real-hiv]] requieren receptores específicos para atravesar la [[membrana plasmática|plasma-membrane]], [[Mimivirus|real-mimivirus]] aprovecha su enorme tamaño y camuflaje superficial. Acanthamoeba engulle de forma rutinaria partículas mayores de ~500 nm mediante copas fagocíticas impulsadas por actina bajo esta bicapa fluida de [[fosfolípidos|phospholipid]] y esteroles, importando sin saberlo a su propio destructor.',
        blueprint: {
          role: 'Membrana eucariota fluida del hospedador que ejecuta fagocitosis masiva de partículas de escala bacteriana',
          arrivesFrom: 'Envoltura viva de Acanthamoeba compuesta de [[fosfolípidos|phospholipid]], esteroles ([[colesterol|cholesterol]]) y receptores superficiales',
          inside: 'Bicapa fluida de 7 nm respaldada por actina cortical que rodea presas mayores de 500 nm',
          deliversTo: 'Encierra a [[Mimivirus|real-mimivirus]] en un fagosoma ácido naciente y termina lisándose para liberar la progenie',
          loop: 'Muestra que los virus gigantes explotan la alimentación protozoaria general en lugar de fusión superficial por receptor'
        },
        scientific:
          '[[Membrana plasmática|plasma-membrane]] eucariota (bicapa fluida de [[fosfolípidos|phospholipid]] y esteroles de ~7 nm) de la ameba de vida libre Acanthamoeba polyphaga (homóloga en física de frontera a [[células animales|real-cell]] y [[protistas|real-paramecium]]). La extensión de seudópodos guiada por actina fagocita partículas ≥500 nm, internalizando [[Mimivirus|real-mimivirus]] (~750 nm) en fagosomas y sufriendo lisis celular al final del ciclo viral.',
        from: [
          { nodeId: 'phospholipid', label: 'Lípidos de bicapa hospedadora', cargo: 'Lámina membranosa eucariota' },
          { nodeId: 'real-cell', label: 'Corteza eucariota', cargo: 'Fagocitosis impulsada por actina' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Barrera selectiva eucariota' },
          { nodeId: 'real-mimivirus', label: 'Captación fagocítica', cargo: 'Ingreso en vacuola ácida' }
        ]
      }
    },

    viral_factory: {
      en: {
        subtitle: 'Giant Cytoplasmic Viral Factory (Nucleus-Sized Hub)',
        simple:
          'Within hours of entry, [[Mimivirus|real-mimivirus]] constructs this glowing, nucleus-sized assembly zone right inside the amoeba cytoplasm, replicating millions of base pairs of [[DNA|dna]] and building hundreds of new [[capsids|real-mimi-capsid]] from host materials.',
        story:
          'Unlike small DNA viruses that borrow the host [[nucleus|nucleus]], [[Mimivirus|real-mimivirus]] establishes its own rival command center in the cytoplasm so enormous it rivals the amoeba nucleus itself. Inside the bright inner replication core, viral polymerases copy the 1.18-megabase [[dsDNA|dna]] while ER membranes stream inward to seed new internal bilayers. Around the intermediate zone, fresh [[MCP capsids|real-mimi-capsid]] assemble, package coiled [[genomic fibers|real-mimi-fiber]], sprout glycosylated outer hairs, and drain nearby host [[80S ribosomes|ribosome]] and ATP until the amoeba bursts.',
        blueprint: {
          role: 'Self-organized cytoplasmic replication and morphogenesis hub replacing nuclear viral replication',
          arrivesFrom: 'Nucleated by early gene expression from the uncoated 30 nm [[genomic fiber|real-mimi-fiber]] and fed by host dNTPs, ER lipids, and ATP',
          inside: 'Concentric inner DNA replication core, intermediate [[capsid|real-mimi-capsid]] assembly zone, and outer fiber-acquisition rim ringed by host [[80S ribosomes|ribosome]]',
          deliversTo: 'Produces hundreds of complete 750 nm [[Mimivirus|real-mimivirus]] virions prior to terminal amoebal lysis',
          loop: 'Demonstrates spatial division between viral DNA replication inside the factory and mandatory host translation strictly outside its rim'
        },
        scientific:
          'Cytoplasmic giant viral factory (~2-4 micrometers diameter, rivaling the Acanthamoeba [[nucleus|nucleus]]) orchestrated exclusively by [[Mimivirus|real-mimivirus]] early/intermediate gene products. Exhibits concentric functional zonation: central [[dsDNA|dna]] replication and viral RNAP transcription core, peripheral host ER-membrane recruitment and double-jelly-roll [[capsid|real-mimi-capsid]] assembly with [[genomic fiber|real-mimi-fiber]] packaging, outer glycosylated fiber addition, and an external halo of hijacked host [[80S ribosomes|ribosome]] and host ATP supply.',
        from: [
          { nodeId: 'real-mimi-fiber', label: 'Uncoated Genomic Core', cargo: 'Early cytoplasmic transcription seed' },
          { nodeId: 'ribosome', label: 'Peripheral Host 80S Ribosomes', cargo: 'Continuous viral protein influx' }
        ],
        to: [
          { nodeId: 'real-mimi-capsid', label: 'Assembling Progeny Capsids', cargo: '500 nm double-jelly-roll shells' },
          { nodeId: 'real-mimivirus', label: 'Mature 750 nm Virions', cargo: 'Lytic burst into freshwater' }
        ]
      },
      es: {
        subtitle: 'Fábrica viral citoplasmática gigante (tamaño nuclear)',
        simple:
          'Horas después de entrar, [[Mimivirus|real-mimivirus]] levanta esta luminosa zona de ensamblaje del tamaño de un núcleo en el citoplasma de la ameba, copiando millones de bases de [[ADN|dna]] y armando cientos de nuevas [[cápsides|real-mimi-capsid]].',
        story:
          'En lugar de invadir el [[núcleo|nucleus]] celular como los virus pequeños de ADN, [[Mimivirus|real-mimivirus]] erige su propio centro de mando citoplasmático tan vasto como el núcleo de la propia ameba. En su centro luminoso, las polimerasas virales replican el [[ADNbc|dna]] de 1,18 Mpb mientras llegan membranas del retículo endoplásmico para las bicapas internas. En la franja media se ensamblan [[cápsides MCP|real-mimi-capsid]], se introducen las [[fibras genómicas|real-mimi-fiber]] y se añaden las fibras externas, todo alimentado por [[ribosomas 80S|ribosome]] y ATP robados alrededor.',
        blueprint: {
          role: 'Centro citoplasmático autoorganizado de replicación y morfogénesis que prescinde del núcleo hospedador',
          arrivesFrom: 'Iniciada por genes tempranos de la [[fibra genómica|real-mimi-fiber]] de 30 nm y alimentada con dNTP, lípidos del RE y ATP ajenos',
          inside: 'Núcleo interno de replicación de ADN, zona intermedia de ensamblaje de [[cápsides|real-mimi-capsid]] y anillo externo rodeado de [[ribosomas 80S|ribosome]]',
          deliversTo: 'Genera cientos de viriones completos de [[Mimivirus|real-mimivirus]] (750 nm) hasta la lisis final de la ameba',
          loop: 'Evidencia la separación espacial entre la replicación viral interna y la traducción obligatoria en ribosomas hospedadores externos'
        },
        scientific:
          'Fábrica viral citoplasmática gigante (~2–4 µm de diámetro, equiparable al [[núcleo|nucleus]] de Acanthamoeba) organizada por proteínas tempranas e intermedias de [[Mimivirus|real-mimivirus]]. Presenta zonación concéntrica: núcleo central de replicación de [[ADNbc|dna]] y transcripción por ARNP viral, zona media de reclutamiento de membranas del RE, ensamblaje de [[cápsides|real-mimi-capsid]] y empaquetado de [[fibras genómicas|real-mimi-fiber]], capa de adición fibrilar y halo exterior de [[ribosomas 80S|ribosome]] y ATP del hospedador.',
        from: [
          { nodeId: 'real-mimi-fiber', label: 'Núcleo genómico liberado', cargo: 'Semilla transcripcional citoplasmática' },
          { nodeId: 'ribosome', label: 'Ribosomas 80S periféricos', cargo: 'Flujo continuo de proteínas virales' }
        ],
        to: [
          { nodeId: 'real-mimi-capsid', label: 'Cápsides hijas en ensamblaje', cargo: 'Corazas doble jelly-roll de 500 nm' },
          { nodeId: 'real-mimivirus', label: 'Viriones maduros de 750 nm', cargo: 'Liberación lítica al agua' }
        ]
      }
    },

    host_ribo: {
      en: {
        subtitle: 'Stolen Acanthamoeba 80S Ribosomes (0 Viral Ribosomes)',
        simple:
          'Despite packing 1,000 genes and four tRNA-charging enzymes like [[TyrRS|real-mimi-tyrrs]], [[Mimivirus|real-mimivirus]] owns zero [[ribosomes|ribosome]]. Every single viral protein must be manufactured by these host amoeba 80S ribosomes clustered around the viral factory.',
        story:
          'Here lies the sharpest proof of why even the mightiest giant virus fails the 4-Pillar Autonomy Test. While [[Mimivirus|real-mimivirus]] dwarfs living [[Mycoplasma|real-mycoplasma]] in physical width and gene count, Mycoplasma builds its own [[70S ribosomes|ribosome-70s]] from start to finish. Mimivirus encodes zero ribosomal RNA and zero ribosomal subunits; it must gather thousands of host Acanthamoeba [[80S ribosomes|ribosome]] in a dense halo around its cytoplasmic viral factory to translate capped viral mRNAs into capsid trimers, enzymes, and surface fibers.',
        blueprint: {
          role: 'Hijacked eukaryotic host translation machines supplying 100% of Mimivirus protein synthesis',
          arrivesFrom: 'Host Acanthamoeba cytoplasm recruited densely around the outer rim of the viral factory',
          inside: 'Eukaryotic 80S (60S + 40S) ribonucleoprotein complexes decoding m7G-capped viral mRNAs using host and viral-charged aa-tRNAs ([[TyrRS|real-mimi-tyrrs]])',
          deliversTo: 'Pours newly folded [[MCP capsomers|real-mimi-capsid]], GMC-oxidoreductases, viral RNAP, and surface fibers into the factory',
          loop: 'Zero virus-encoded ribosomes keeps [[Mimivirus|real-mimivirus]] permanently on the non-living side of the [[Edge of Life|subviral-overview]]'
        },
        scientific:
          'Host Acanthamoeba eukaryotic [[80S ribosomes|ribosome]] (~4.3 MDa; 60S large + 40S small subunits containing 28S/18S/5.8S/5S rRNA) concentrated around the periphery of the cytoplasmic [[Mimivirus|real-mimivirus]] viral factory. Translates capped viral mRNAs assisted by viral aminoacyl-tRNA synthetases ([[TyrRS|real-mimi-tyrrs]], PDB 2J5B); the absolute absence of virus-encoded rRNA or ribosomal proteins distinguishes giant viruses from all cellular life including minimal [[Mycoplasma|real-mycoplasma]] ([[70S ribosomes|ribosome-70s]]).',
        from: [
          { nodeId: 'real-mimi-tyrrs', label: 'Viral TyrRS & aa-tRNAs', cargo: 'Charged aminoacyl-tRNA supply' },
          { nodeId: 'rna', label: 'Capped Viral mRNAs', cargo: 'Early & late factory blueprints' }
        ],
        to: [
          { nodeId: 'ribosome', label: '80S Ribosome Node', cargo: 'Eukaryotic protein synthesis' },
          { nodeId: 'real-mimi-capsid', label: 'Viral Structural Proteins', cargo: 'MCP trimers & surface fibers' }
        ]
      },
      es: {
        subtitle: 'Ribosomas 80S robados de Acanthamoeba (0 ribosomas virales)',
        simple:
          'A pesar de portar 1.000 genes y cuatro enzimas cargadoras de ARNt como [[TyrRS|real-mimi-tyrrs]], [[Mimivirus|real-mimivirus]] tiene cero [[ribosomas|ribosome]] propios. Cada proteína viral debe construirse en estos ribosomas 80S de la ameba agrupados en torno a la fábrica viral.',
        story:
          'Aquí aparece la prueba más tajante de por qué ni siquiera el virus gigante más colosal supera la prueba de los cuatro pilares. Aunque [[Mimivirus|real-mimivirus]] duplica a la bacteria viva [[Mycoplasma|real-mycoplasma]] en tamaño y genes, Mycoplasma construye sus propios [[ribosomas 70S|ribosome-70s]]. Mimivirus carece de ARNr y subunidades ribosómicas; depende por entero de congregar miles de [[ribosomas 80S|ribosome]] de Acanthamoeba alrededor de su fábrica citoplasmática para traducir sus ARNm con caperuza en cápsides, enzimas y fibras.',
        blueprint: {
          role: 'Máquinas de traducción eucariotas del hospedador que aportan el 100 % de las proteínas de Mimivirus',
          arrivesFrom: 'Citoplasma de Acanthamoeba reclutado densamente alrededor del borde exterior de la fábrica viral',
          inside: 'Complejos ribonucleoproteicos 80S (60S + 40S) decodificando ARNm virales con caperuza y aa-ARNt cargados ([[TyrRS|real-mimi-tyrrs]])',
          deliversTo: 'Vierte [[capsómeros MCP|real-mimi-capsid]], GMC-oxidorreductasas, ARNP viral y fibras recién plegadas a la fábrica',
          loop: 'Tener cero ribosomas propios mantiene a [[Mimivirus|real-mimivirus]] del lado no vivo en la [[frontera de la vida|subviral-overview]]'
        },
        scientific:
          '[[Ribosomas 80S|ribosome]] eucariotas de Acanthamoeba (~4,3 MDa; subunidades 60S y 40S con ARNr 28S/18S/5,8S/5S) concentrados en la periferia de la fábrica citoplasmática de [[Mimivirus|real-mimivirus]]. Traducen ARNm virales con caperuza asistidos por aminoacil-ARNt sintetasas virales ([[TyrRS|real-mimi-tyrrs]], PDB 2J5B); la ausencia absoluta de ARNr y proteínas ribosómicas virales separa a los virus gigantes de toda célula viva, incluida [[Mycoplasma|real-mycoplasma]] ([[ribosomas 70S|ribosome-70s]]).',
        from: [
          { nodeId: 'real-mimi-tyrrs', label: 'TyrRS viral y aa-ARNt', cargo: 'Suministro de ARNt cargados' },
          { nodeId: 'rna', label: 'ARNm virales con caperuza', cargo: 'Planos tempranos y tardíos' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Ribosoma 80S', cargo: 'Síntesis proteica eucariota' },
          { nodeId: 'real-mimi-capsid', label: 'Proteínas estructurales virales', cargo: 'Trímeros MCP y fibras' }
        ]
      }
    },

    myco_ref: {
      en: {
        subtitle: 'True-Scale 300 nm Mycoplasma genitalium Benchmark',
        simple:
          'Standing side by side at identical scale, living [[Mycoplasma genitalium|real-mycoplasma]] measures just 300 nanometers wide - less than half the width of 750-nanometer [[Mimivirus|real-mimivirus]] - yet it is alive because it builds its own [[70S ribosomes|ribosome-70s]] and ATP.',
        story:
          'This translucent true-scale reference silhouette dismantles biology most stubborn misconception in a single glance. [[Mycoplasma genitalium|real-mycoplasma]] carries only 580 kilobases of circular [[DNA|dna]] and ~482 genes inside a fragile 300-nanometer membrane, whereas towering [[Mimivirus|real-mimivirus]] right beside it stretches to 750 nanometers with 1.18 megabases and ~1,000 genes. Yet Mycoplasma passes the autonomy test as the smallest self-replicating cell, while Mimivirus remains an inert particle until swallowed by an amoeba.',
        blueprint: {
          role: 'True-scale 300 nm living cellular benchmark proving physical size and genome length do not define life',
          arrivesFrom: 'Minimal autonomous bacterial reference from [[Mycoplasma genitalium|real-mycoplasma]] placed at exact 1:1 scene scale',
          inside: '300 x 600 nm cholesterol-stabilized [[plasma membrane|plasma-membrane]], 580 kbp circular [[dsDNA|dna]] (~482 genes), ~150 [[70S ribosomes|ribosome-70s]], and glycolysis ATP',
          deliversTo: 'Direct visual contrast against 750 nm [[Mimivirus|real-mimivirus]] (1.18 Mbp, 0 ribosomes, 0 ATP) across the [[Edge of Life|subviral-overview]]',
          loop: 'Confirms that cellular autonomy rests on ribosomes plus self-generated energy rather than physical diameter'
        },
        scientific:
          'True-scale comparative silhouette of minimal self-replicating bacterium [[Mycoplasma genitalium|real-mycoplasma]] (~300 nm body diameter x ~600 nm length; 580,076 bp circular [[dsDNA|dna]], ~482 protein-coding genes, ~150 autonomous [[70S ribosomes|ribosome-70s]], glycolytic ATP generation, single [[cholesterol|cholesterol]]-rich bilayer) set directly alongside ~750 nm [[Mimivirus|real-mimivirus]] (1,181,549 bp linear dsDNA, ~1,000 genes, 0 ribosomes, 0 energy metabolism) to illustrate the size-versus-life paradox.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Mycoplasma genitalium', cargo: '300 nm minimal living cell' },
          { nodeId: 'scale-explorer', label: 'True 1:1 Scale Ruler', cargo: '300 nm vs. 750 nm comparison' }
        ],
        to: [
          { nodeId: 'subviral-overview', label: 'Edge of Life Ladder', cargo: '4/4 living vs. 0-ribosome giant virus' },
          { nodeId: 'ribosome-70s', label: 'Autonomous 70S Ribosomes', cargo: 'Decisive cellular life pillar' }
        ]
      },
      es: {
        subtitle: 'Referencia a escala real: Mycoplasma genitalium (300 nm)',
        simple:
          'Frente a frente a idéntica escala, la bacteria viva [[Mycoplasma genitalium|real-mycoplasma]] mide apenas 300 nanómetros —menos de la mitad que [[Mimivirus|real-mimivirus]] (750 nm)—, pero está viva porque fabrica sus propios [[ribosomas 70S|ribosome-70s]] y su ATP.',
        story:
          'Esta silueta translúcida a escala real desmonta en un segundo el mito biológico más persistente. [[Mycoplasma genitalium|real-mycoplasma]] guarda solo 580 kilobases de [[ADN|dna]] circular y ~482 genes dentro de una membrana de 300 nanómetros, mientras el imponente [[Mimivirus|real-mimivirus]] a su lado alcanza 750 nanómetros con 1,18 megabases y ~1.000 genes. Sin embargo, Mycoplasma supera la prueba como la célula autorreplicante más pequeña, mientras Mimivirus sigue inerte hasta que una ameba lo engulle.',
        blueprint: {
          role: 'Referencia celular viva de 300 nm a escala real que demuestra que tamaño y longitud genómica no definen la vida',
          arrivesFrom: 'Bacteria mínima autónoma [[Mycoplasma genitalium|real-mycoplasma]] colocada en proporción exacta 1:1',
          inside: '[[Membrana plasmática|plasma-membrane]] con colesterol de 300 × 600 nm, [[ADNbc|dna]] circular de 580 kpb (~482 genes), ~150 [[ribosomas 70S|ribosome-70s]] y ATP glucolítico',
          deliversTo: 'Contraste visual directo frente a [[Mimivirus|real-mimivirus]] de 750 nm (1,18 Mpb, 0 ribosomas, 0 ATP) en la [[frontera de la vida|subviral-overview]]',
          loop: 'Confirma que la autonomía vital depende de ribosomas y energía propios, no del diámetro físico'
        },
        scientific:
          'Silueta comparativa a escala real de la bacteria mínima autorreplicante [[Mycoplasma genitalium|real-mycoplasma]] (~300 nm × ~600 nm; 580.076 pb de [[ADNbc|dna]] circular, ~482 genes, ~150 [[ribosomas 70S|ribosome-70s]] autónomos, glucólisis y bicapa rica en [[colesterol|cholesterol]]) frente a [[Mimivirus|real-mimivirus]] (~750 nm; 1.181.549 pb de ADNbc lineal, ~1.000 genes, 0 ribosomas, 0 metabolismo energético) para ilustrar la paradoja tamaño frente a vida.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Mycoplasma genitalium', cargo: 'Célula viva mínima de 300 nm' },
          { nodeId: 'scale-explorer', label: 'Regla a escala 1:1', cargo: 'Comparación 300 nm vs. 750 nm' }
        ],
        to: [
          { nodeId: 'subviral-overview', label: 'Escalera de la frontera vital', cargo: 'Célula 4/4 vs. virus gigante sin ribosomas' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S autónomos', cargo: 'Pilar decisivo de la vida celular' }
        ]
      }
    },

    atp_pool: {
      en: {
        subtitle: 'Hijacked Host Amoeba ATP Energy Pool (0 Viral ATP)',
        simple:
          'Copying 1.18 million base pairs of [[DNA|dna]] and charging thousands of tRNAs takes enormous chemical energy, yet [[Mimivirus|real-mimivirus]] owns zero [[ATP synthases|atp-synthase]]. Every molecule of ATP fueling the viral factory is siphoned straight from the living amoeba.',
        story:
          'Stand outside an amoeba and [[Mimivirus|real-mimivirus]] burns zero fuel and performs zero chemistry, no matter how long it floats in warm pond water. Even inside an infected cell, its ~1,000 genes encode neither glycolysis nor oxidative phosphorylation. Instead, streams of host-generated ATP diffuse continuously from Acanthamoeba mitochondria into the viral factory to power viral DNA replication, RNA transcription, [[TyrRS|real-mimi-tyrrs]] amino-acid charging, and ATP-driven packaging of the giant genome into fresh capsids.',
        blueprint: {
          role: 'Continuous host-derived chemical energy flux powering every enzymatic step of giant-virus replication',
          arrivesFrom: 'Host Acanthamoeba glycolysis and mitochondrial [[ATP synthase|atp-synthase]] diffusing toward the cytoplasmic viral factory',
          inside: 'High-energy [[phosphate|phosphate]]-bond ATP/[[Mg2+|atom-mg]] complexes consumed by viral polymerases, helicases, [[TyrRS|real-mimi-tyrrs]], and packaging motors',
          deliversTo: 'Drives 1.18 Mbp [[dsDNA|dna]] synthesis, mRNA capping, host [[80S ribosome|ribosome]] translation, and capsid genome loading',
          loop: 'Zero virus-encoded ATP metabolism represents the fourth decisive pillar separating giant viruses from autonomous cells'
        },
        scientific:
          'Host-supplied cytosolic adenosine triphosphate (ATP-[[Mg2+|atom-mg]]) pool generated by Acanthamoeba aerobic respiration ([[ATP synthase|atp-synthase]]) and glycolysis, sequestered to sustain the high bioenergetic cost of [[Mimivirus|real-mimivirus]] replication (~1.18 Mbp [[dsDNA|dna]] polymerization, viral RNAP transcription, [[TyrRS|real-mimi-tyrrs]] aminoacylation, and A32-like packaging ATPase translocation). Complete absence of viral energy metabolism satisfies the acellular non-living classification.',
        from: [
          { nodeId: 'atp-synthase', label: 'Host Mitochondrial ATP Synthase', cargo: 'Aerobic ATP production' },
          { nodeId: 'atom-mg', label: 'Mg2+-ATP Cofactor', cargo: 'Active phosphoanhydride energy' }
        ],
        to: [
          { nodeId: 'real-mimi-tyrrs', label: 'Viral TyrRS & Polymerases', cargo: 'ATP-driven charging & synthesis' },
          { nodeId: 'real-mimivirus', label: 'Viral Factory Assembly', cargo: 'Zero own ATP metabolism' }
        ]
      },
      es: {
        subtitle: 'Reserva de ATP secuestrada a la ameba (0 ATP viral)',
        simple:
          'Copiar 1,18 millones de pares de bases de [[ADN|dna]] y cargar miles de ARNt exige muchísima energía química, pero [[Mimivirus|real-mimivirus]] carece de [[ATP sintasas|atp-synthase]]. Todo el ATP que mueve la fábrica viral se desvía de la ameba viva.',
        story:
          'Fuera de una ameba, [[Mimivirus|real-mimivirus]] no consume combustible ni ejecuta reacción alguna por mucho tiempo que flote en el agua. Incluso dentro del hospedador, sus ~1.000 genes no codifican ni glucólisis ni fosforilación oxidativa. En su lugar, ríos continuos de ATP fabricado por las mitocondrias de Acanthamoeba afluyen hacia la fábrica viral para impulsar la replicación del ADN, la transcripción, la carga de aminoácidos en [[TyrRS|real-mimi-tyrrs]] y el empaquetado del genoma en nuevas cápsides.',
        blueprint: {
          role: 'Flujo continuo de energía química del hospedador que sustenta cada paso enzimático del virus gigante',
          arrivesFrom: 'Glucólisis y [[ATP sintasa|atp-synthase]] mitocondrial de Acanthamoeba difundiendo hacia la fábrica viral',
          inside: 'Complejos de alta energía ATP–[[Mg²⁺|atom-mg]] con enlaces [[fosfato|phosphate]] consumidos por polimerasas, [[TyrRS|real-mimi-tyrrs]] y motores de empaquetado',
          deliversTo: 'Impulsa la síntesis de [[ADNbc|dna]] de 1,18 Mpb, caperuza 5′, traducción en [[ribosomas 80S|ribosome]] y carga de cápsides',
          loop: 'La ausencia total de metabolismo energético propio constituye el cuarto pilar que separa al virus gigante de las células vivas'
        },
        scientific:
          'Reserva citosólica de adenosín trifosfato (ATP–[[Mg²⁺|atom-mg]]) generada por respiración aerobia ([[ATP sintasa|atp-synthase]]) y glucólisis de Acanthamoeba, desviada para cubrir la enorme demanda bioenergética de [[Mimivirus|real-mimivirus]] (polimerización de ~1,18 Mpb de [[ADNbc|dna]], transcripción viral, aminoacilación en [[TyrRS|real-mimi-tyrrs]] y empaquetado mediante ATPasas tipo A32). La carencia absoluta de metabolismo energético propio confirma su carácter acelular.',
        from: [
          { nodeId: 'atp-synthase', label: 'ATP sintasa mitocondrial hospedadora', cargo: 'Producción aerobia de ATP' },
          { nodeId: 'atom-mg', label: 'Cofactor Mg²⁺–ATP', cargo: 'Energía fosfoanhídrida activa' }
        ],
        to: [
          { nodeId: 'real-mimi-tyrrs', label: 'TyrRS y polimerasas virales', cargo: 'Carga y síntesis dependientes de ATP' },
          { nodeId: 'real-mimivirus', label: 'Ensamblaje de la fábrica viral', cargo: 'Cero metabolismo de ATP propio' }
        ]
      }
    },

    dna_atoms: {
      en: {
        subtitle: 'Atomic Close-Up: Mimivirus dsDNA Base Pairs & Phosphodiester P',
        simple:
          'Zooming down to single atoms inside the 1.18-megabase [[Mimivirus|real-mimivirus]] chromosome reveals the exact same five elements - [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] - forming A-T and G-C hydrogen bonds as in every living cell.',
        story:
          'At 0.1 to 2 nanometers, the giant viral chromosome sheds all mystery and reveals universal nucleic-acid chemistry. Two antiparallel deoxyribose-[[phosphate|phosphate]] rails linked through tetrahedral [[phosphorus|atom-p]] atoms cradle paired nitrogenous [[bases|base]] held across the center by exact hydrogen bonds: two between adenine and thymine, three between guanine and cytosine. Because [[Mimivirus|real-mimivirus]] builds its ~1,000 genes from ~72% A-T pairs using the exact same atomic alphabet as its host, stolen amoeba enzymes and [[ribosomes|ribosome]] read its blueprints effortlessly.',
        blueprint: {
          role: 'Sub-nanometer atomic inset (0.1-2 nm) connecting macro 750 nm Mimivirus down to covalent DNA chemistry',
          arrivesFrom: 'Host-synthesized deoxyribonucleotides composed of universal elements [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]]',
          inside: '2-prime-deoxyribose [[sugar|sugar]] rings, anionic phosphodiester [[P|atom-p]] linkages, and Watson-Crick A=T (2 H-bonds) / G-C (3 H-bonds) [[bases|base]]',
          deliversTo: 'Encodes all 1,181,549 bp of the [[Mimivirus genome|real-mimivirus]] packaged inside the 30 nm [[genomic fiber|real-mimi-fiber]]',
          loop: 'Contrasts DNA deoxyribose (no 2-prime-OH) against the RNA 2-prime-OH of [[PSTVd|real-viroid]] and the zero-phosphorus [[PrPsc|real-prion]]'
        },
        scientific:
          'Atomic-resolution B-form [[dsDNA|dna]] inset (0.1-2.0 nm; 3.4 A axial base-pair rise, 2.0 nm helix diameter; elements [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]). Displays 3-prime-5-prime phosphodiester [[phosphate|phosphate]] bridges linking 2-prime-deoxyribose [[sugars|sugar]] (lacking the reactive 2-prime-OH present in [[viroid RNA|real-viroid]]) and planar Watson-Crick hydrogen-bonded A-T (2 H-bonds; ~72% abundance in [[Mimivirus|real-mimivirus]]) and G-C (3 H-bonds) [[base|base]] pairs.',
        from: [
          { nodeId: 'atom-p', label: 'Phosphorus (P) & C/H/N/O', cargo: 'Five nucleic-acid elements' },
          { nodeId: 'nucleotide', label: 'Deoxyribonucleotides', cargo: 'dAMP, dTMP, dGMP, dCMP units' }
        ],
        to: [
          { nodeId: 'dna', label: 'Double-Stranded DNA Node', cargo: 'B-form chemical backbone' },
          { nodeId: 'real-mimi-fiber', label: '1.18 Mbp Genomic Fiber', cargo: 'Macro-scale DNA condensation' }
        ]
      },
      es: {
        subtitle: 'Detalle atómico: pares de bases de ADNbc y fósforo fosfodiéster',
        simple:
          'Acercarse hasta átomos individuales dentro del cromosoma de 1,18 Mpb de [[Mimivirus|real-mimivirus]] muestra los mismos cinco elementos —[[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]]— formando puentes de hidrógeno A–T y G–C idénticos a los de cualquier célula viva.',
        story:
          'Entre 0,1 y 2 nanómetros, el cromosoma del virus gigante revela la química universal de los ácidos nucleicos. Dos rieles antiparalelos de desoxirribosa y [[fosfato|phosphate]] unidos por átomos tetraédricos de [[fósforo|atom-p]] sostienen [[bases|base]] nitrogenadas enlazadas por puentes de hidrógeno precisos: dos entre adenina y timina, tres entre guanina y citosina. Como [[Mimivirus|real-mimivirus]] escribe sus ~1.000 genes con el mismo alfabeto atómico que su hospedador (~72 % A–T), las enzimas y [[ribosomas|ribosome]] de la ameba leen sus planos sin dificultad.',
        blueprint: {
          role: 'Detalle atómico subnanométrico (0,1–2 nm) que enlaza al Mimivirus de 750 nm con la química covalente del ADN',
          arrivesFrom: 'Desoxirribonucleótidos celulares formados por los elementos universales [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]]',
          inside: 'Anillos de 2′-desoxirribosa ([[azúcar|sugar]]), puentes fosfodiéster con [[P|atom-p]] y pares Watson–Crick A=T (2 puentes H) y G≡C (3 puentes H)',
          deliversTo: 'Codifica los 1.181.549 pb del [[genoma de Mimivirus|real-mimivirus]] empaquetados en la [[fibra genómica|real-mimi-fiber]] de 30 nm',
          loop: 'Contrasta la desoxirribosa del ADN (sin 2′-OH) frente al 2′-OH del ARN de [[PSTVd|real-viroid]] y el cero fósforo de [[PrPˢᶜ|real-prion]]'
        },
        scientific:
          'Detalle atómico de [[ADNbc|dna]] forma B (0,1–2,0 nm; paso axial de 3,4 Å, diámetro de 2,0 nm; elementos [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]). Muestra enlaces fosfodiéster 3′–5′ de [[fosfato|phosphate]] entre [[azúcares|sugar]] 2′-desoxirribosa (sin el hidroxilo 2′-OH presente en el [[ARN viroidal|real-viroid]]) y pares planos Watson–Crick A–T (2 puentes H; ~72 % en [[Mimivirus|real-mimivirus]]) y G–C (3 puentes H).',
        from: [
          { nodeId: 'atom-p', label: 'Fósforo (P) y C/H/N/O', cargo: 'Cinco elementos nucleicos' },
          { nodeId: 'nucleotide', label: 'Desoxirribonucleótidos', cargo: 'Unidades dAMP, dTMP, dGMP, dCMP' }
        ],
        to: [
          { nodeId: 'dna', label: 'ADN bicatenario', cargo: 'Esqueleto químico forma B' },
          { nodeId: 'real-mimi-fiber', label: 'Fibra genómica de 1,18 Mpb', cargo: 'Compactación macro del ADN' }
        ]
      }
    }
  },

  'viroid_realistic.html': {
    tl_domain: {
      en: {
        subtitle: 'Terminal Left (T_L) Transcription-Initiation Domain',
        simple:
          'Forming the left tip of the 50-nanometer [[PSTVd viroid|real-viroid]] rod, the Terminal Left domain folds into a tight [[RNA|rna]] hairpin loop that acts as the landing dock where host [[RNA Pol II|real-viroid-pol2]] starts copying.',
        story:
          'Even though [[PSTVd|real-viroid]] carries zero protein-coding genes, every region along its 359-nucleotide circle performs a specialized structural job. At the left end, complementary strands zip into a stiff terminal hairpin punctuated by tiny asymmetric loops. Inside a [[plant nucleus|nucleus]], host splicing factor TFIIIA-7ZF grabs this Terminal Left region and aligns the viroid end right against the active cleft of [[RNA Polymerase II|real-viroid-pol2]], firing up transcription around the entire naked circle.',
        blueprint: {
          role: 'Left-terminal RNA structural dock initiating RNA-templated rolling-circle transcription inside plant nuclei',
          arrivesFrom: 'Intramolecular self-folding of the 5-prime/3-prime terminal nucleotides of the closed 359-nt [[PSTVd|real-viroid]] ring',
          inside: 'Paired A-form [[RNA|rna]] helical stems, terminal hairpin loop, and conserved sequence motifs recognized by host TFIIIA-7ZF',
          deliversTo: 'Recruits and positions host nuclear [[RNA Pol II|real-viroid-pol2]] to begin antisense (-) concatemer synthesis',
          loop: 'Proves a pure 3D non-coding RNA fold can serve as an active promoter without a single DNA base pair'
        },
        scientific:
          'Terminal Left (T_L) functional domain (~nt 1-46 and 315-359) of the 359-nt rod-like secondary structure of [[PSTVd|real-viroid]] (Family Pospiviroidae). Harbors the conserved terminal hairpin and internal loop motifs serving as the primary binding site for host splicing factor TFIIIA-7ZF and transcription initiation site (around nt 1 / U359-C1) for redirected plant nuclear [[RNA Polymerase II|real-viroid-pol2]] (PDB 1WCM).',
        from: [
          { nodeId: 'rna', label: 'Closed 359-nt ssRNA Ring', cargo: 'Self-paired left terminal fold' },
          { nodeId: 'real-viroid', label: 'PSTVd Rod Architecture', cargo: 'Five-domain structural map' }
        ],
        to: [
          { nodeId: 'real-viroid-pol2', label: 'Host Pol II + TFIIIA-7ZF', cargo: 'Transcription initiation dock' },
          { nodeId: 'nucleus', label: 'Plant Nuclear Replication', cargo: 'Start of rolling-circle copying' }
        ]
      },
      es: {
        subtitle: 'Dominio Terminal Izquierdo (T_L) de inicio transcripcional',
        simple:
          'En el extremo izquierdo de la varilla de 50 nanómetros de [[PSTVd|real-viroid]], el dominio Terminal Izquierdo forma una horquilla compacta de [[ARN|rna]] que sirve de muelle de atraque para que la [[ARN Pol II|real-viroid-pol2]] empiece a copiarlo.',
        story:
          'Aunque [[PSTVd|real-viroid]] carece por completo de genes proteicos, cada tramo de su anillo de 359 nucleótidos desempeña una tarea estructural precisa. En el extremo izquierdo, las hebras complementarias se cierran en una horquilla rígida salpicada de pequeños bucles. Dentro del [[núcleo vegetal|nucleus]], el factor del hospedador TFIIIA-7ZF sujeta este dominio Terminal Izquierdo y alinea la punta del viroide con el centro activo de la [[ARN Polimerasa II|real-viroid-pol2]] para disparar la copia en círculo rodante.',
        blueprint: {
          role: 'Muelle estructural de ARN en el extremo izquierdo que inicia la transcripción rodante en el núcleo vegetal',
          arrivesFrom: 'Autoplegamiento intramolecular de los extremos del anillo cerrado de 359 nt de [[PSTVd|real-viroid]]',
          inside: 'Tallos helicoidales de [[ARN|rna]] forma A, horquilla terminal y motivos reconocidos por el factor hospedador TFIIIA-7ZF',
          deliversTo: 'Recluta y posiciona a la [[ARN Pol II|real-viroid-pol2]] nuclear para iniciar la síntesis del concatémero antisentido (–)',
          loop: 'Demuestra que un plegamiento puro de ARN no codificante actúa como promotor sin un solo par de bases de ADN'
        },
        scientific:
          'Dominio funcional Terminal Izquierdo (T_L, ~nt 1–46 y 315–359) en la estructura en varilla de 359 nt de [[PSTVd|real-viroid]] (Pospiviroidae). Contiene la horquilla terminal y los bucles internos que conforman el sitio principal de unión para la variante hospedadora TFIIIA-7ZF y el origen de iniciación transcripcional (entorno nt 1 / U359–C1) de la [[ARN Polimerasa II|real-viroid-pol2]] nuclear vegetal (PDB 1WCM).',
        from: [
          { nodeId: 'rna', label: 'Anillo cerrado de ARNmc (359 nt)', cargo: 'Plegamiento terminal izquierdo' },
          { nodeId: 'real-viroid', label: 'Arquitectura en varilla PSTVd', cargo: 'Mapa de cinco dominios' }
        ],
        to: [
          { nodeId: 'real-viroid-pol2', label: 'Pol II hospedadora + TFIIIA-7ZF', cargo: 'Muelle de inicio transcripcional' },
          { nodeId: 'nucleus', label: 'Replicación nuclear vegetal', cargo: 'Arranque del círculo rodante' }
        ]
      }
    },

    p_domain: {
      en: {
        subtitle: 'Pathogenicity (P) Virulence-Modulating Domain',
        simple:
          'Just beside the left tip of [[PSTVd|real-viroid]], the Pathogenicity domain contains a flexible adenine-rich bulge that controls how severely this tiny naked [[RNA|rna]] stunts leaves and twists potato tubers.',
        story:
          'How can a 359-nucleotide molecule that makes zero toxic proteins devastate an entire crop of [[plants|real-plant]]? Much of the answer lives inside this Pathogenicity domain. Tiny single-letter mutations in its virulence-modulating region alter local stem flexibility and yield small interfering RNAs sliced by host plant Dicer enzymes; those viroid-derived small RNAs then guide host RNA-silencing complexes to destroy vital plant developmental mRNAs, producing stunted growth and spindle-shaped tubers.',
        blueprint: {
          role: 'Virulence-modulating RNA domain governing symptom severity via host RNA-silencing interference',
          arrivesFrom: 'Conserved oligo-adenine (A-rich) bulge flanking the [[T_L|real-viroid]] stem along the self-paired 359-nt rod',
          inside: 'Flexible A-rich internal loops and virulence-modulating [[RNA|rna]] duplexes cleaved by host Dicer-like enzymes',
          deliversTo: 'Generates viroid-derived small RNAs (vd-sRNAs) that misdirect plant RNA interference against host hormone and growth genes',
          loop: 'Explains how a 0-protein subviral RNA triggers severe plant disease strictly through nucleotide complementarity'
        },
        scientific:
          'Pathogenicity (P) domain (~nt 47-71 and 289-314) of [[PSTVd|real-viroid]] featuring the conserved oligopurine / A-rich bulge and Virulence Modulating Region (VMR). Base substitutions within the P domain modulate thermodynamic stability of the rod and dictate sequence identity of 21-24 nt viroid-derived small RNAs (vd-sRNAs) processed by host [[plant|real-plant]] DCL endonucleases to trigger post-transcriptional gene silencing of endogenous host transcripts.',
        from: [
          { nodeId: 'real-viroid', label: 'PSTVd Self-Paired Rod', cargo: 'A-rich virulence bulge' },
          { nodeId: 'nucleotide', label: 'Virulence-Modulating Bases', cargo: 'Strain-specific RNA sequence' }
        ],
        to: [
          { nodeId: 'real-plant', label: 'Host Plant Gene Silencing', cargo: 'Symptom-inducing vd-sRNAs' },
          { nodeId: 'rna', label: 'Non-Coding RNA Interference', cargo: 'Disease with zero viral proteins' }
        ]
      },
      es: {
        subtitle: 'Dominio de Patogenicidad (P) modulador de virulencia',
        simple:
          'Justo junto al extremo izquierdo de [[PSTVd|real-viroid]], el dominio de Patogenicidad alberga un bucle flexible rico en adeninas que determina cuánto atrofia este diminuto [[ARN|rna]] desnudo las hojas y tubérculos de la planta.',
        story:
          '¿Cómo puede una molécula de 359 nucleótidos que no produce ninguna proteína tóxica enfermar a cultivos enteros de [[plantas|real-plant]]? Gran parte de la respuesta reside en este dominio de Patogenicidad. Pequeños cambios de una sola letra en su región moduladora alteran la estabilidad del tallo y generan ARN interferentes cortos cortados por enzimas Dicer del hospedador; esos fragmentos guían el silenciamiento vegetal contra genes propios del crecimiento, deformando tallos y tubérculos.',
        blueprint: {
          role: 'Dominio modulador de virulencia que dicta la gravedad sintomática mediante silenciamiento de ARN vegetal',
          arrivesFrom: 'Abultamiento conservado rico en adeninas adyacente al tallo T_L en la varilla de 359 nt de [[PSTVd|real-viroid]]',
          inside: 'Bucles internos flexibles ricos en A y dúplex de [[ARN|rna]] procesados por enzimas tipo Dicer de la planta',
          deliversTo: 'Origina pequeños ARN derivados del viroide (vd-sRNA) que silencian genes de desarrollo de la [[planta|real-plant]]',
          loop: 'Explica cómo un ARN subviral con cero proteínas provoca enfermedad grave solo por complementariedad de bases'
        },
        scientific:
          'Dominio de Patogenicidad (P, ~nt 47–71 y 289–314) de [[PSTVd|real-viroid]], caracterizado por un abultamiento oligopurínico rico en A y la Región Moduladora de Virulencia (VMR). Las sustituciones de nucleótidos en P modifican la estabilidad termodinámica local y definen la secuencia de los vd-sRNA de 21–24 nt generados por endonucleasas DCL de la [[planta|real-plant]] para inducir silenciamiento postranscripcional de ARNm hospedadores.',
        from: [
          { nodeId: 'real-viroid', label: 'Varilla autoapareada PSTVd', cargo: 'Bucle de virulencia rico en A' },
          { nodeId: 'nucleotide', label: 'Bases moduladoras', cargo: 'Secuencia específica de cepa' }
        ],
        to: [
          { nodeId: 'real-plant', label: 'Silenciamiento génico vegetal', cargo: 'vd-sRNA inductores de síntomas' },
          { nodeId: 'rna', label: 'Interferencia por ARN no codificante', cargo: 'Patología sin proteínas virales' }
        ]
      }
    },

    c_domain: {
      en: {
        subtitle: 'Central Conserved (C) Processing & Ligation Domain',
        simple:
          'Spanning the middle of the [[PSTVd|real-viroid]] rod, the Central domain holds the most tightly conserved [[RNA|rna]] sequence in the entire viroid family, housing both [[Loop E|real-viroid-loope]] and the exact cut-and-seal zone for rolling-circle copying.',
        story:
          'While outer regions of different plant viroids drift over evolution, this central core remains fiercely conserved across Pospiviroidae. Here sit the two master structural switches that finish every replication cycle: the metastable Central Conserved Region (CCR) hairpin that marks exact unit-length cleavage points on multimeric (+) strands, and the adjacent non-canonical [[Loop E motif|real-viroid-loope]] that shapes the freshly cut ends so host plant DNA ligase 1 seals them back into flawless closed circles.',
        blueprint: {
          role: 'Evolutionarily conserved central hub coordinating nuclear cleavage and circularization of progeny RNA',
          arrivesFrom: 'Upper and lower conserved central strands of the 359-nt [[PSTVd|real-viroid]] rod',
          inside: 'Central Conserved Region (CCR) metastable cleavage switch paired directly alongside the non-canonical [[Loop E|real-viroid-loope]] bulge',
          deliversTo: 'Directs host endonuclease cutting of (+) concatemers and guides host DNA ligase 1 to close unit-length 359-nt circles',
          loop: 'Alternates dynamically between the active cleavage hairpin conformation and the stable native rod with Loop E'
        },
        scientific:
          'Central (C) domain (~nt 72-121 and 239-288) of [[PSTVd|real-viroid]], containing the family-defining Central Conserved Region (CCR) and conserved [[Loop E|real-viroid-loope]] motif. Undergoes regulated structural switching between a metastable tri-helical/hairpin-I cleavage substrate during processing of multimeric (+) transcripts synthesized by [[RNA Pol II|real-viroid-pol2]] and the native Loop E ligation substrate circularized by host DNA ligase 1.',
        from: [
          { nodeId: 'real-viroid-pol2', label: 'Multimeric (+) RNA Transcripts', cargo: 'Concatemeric rolling-circle output' },
          { nodeId: 'real-viroid', label: 'Central Conserved Sequence', cargo: 'Pospiviroidae core signature' }
        ],
        to: [
          { nodeId: 'real-viroid-loope', label: 'Loop E & CCR Switch', cargo: 'Unit-length cut-and-seal hub' },
          { nodeId: 'rna', label: 'Circularized 359-nt Progeny', cargo: 'Refolded infectious viroid rods' }
        ]
      },
      es: {
        subtitle: 'Dominio Central Conservado (C) de corte y circularización',
        simple:
          'En el centro de la varilla de [[PSTVd|real-viroid]], el dominio Central guarda la secuencia de [[ARN|rna]] más conservada de toda la familia, albergando tanto el [[Loop E|real-viroid-loope]] como la zona exacta de corte y sellado del círculo rodante.',
        story:
          'Mientras otras regiones del viroide cambian entre especies, este corazón central permanece casi intacto en toda la familia Pospiviroidae. Aquí conviven los dos interruptores estructurales que culminan cada ciclo de replicación: la horquilla metaestable de la Región Central Conservada (CCR), que marca los puntos exactos de corte sobre las cadenas multiméricas (+), y el [[motivo Loop E|real-viroid-loope]] vecino, que alinea los extremos cortados para que la ADN ligasa 1 cierre el círculo.',
        blueprint: {
          role: 'Núcleo central conservado que coordina el corte nuclear y el sellado circular del ARN hijo',
          arrivesFrom: 'Hebras centrales superior e inferior conservadas dentro de la varilla de 359 nt de [[PSTVd|real-viroid]]',
          inside: 'Interruptor de corte de la Región Central Conservada (CCR) acoplado al abultamiento no canónico [[Loop E|real-viroid-loope]]',
          deliversTo: 'Dirige la escisión de concatémeros (+) por endonucleasas vegetales y guía el cierre de anillos de 359 nt por ADN ligasa 1',
          loop: 'Alterna dinámicamente entre la horquilla activa de corte y la varilla nativa estable con Loop E'
        },
        scientific:
          'Dominio Central (C, ~nt 72–121 y 239–288) de [[PSTVd|real-viroid]], portador de la Región Central Conservada (CCR) diagnóstica de Pospiviroidae y del motivo [[Loop E|real-viroid-loope]]. Experimenta una conmutación conformacional regulada entre un sustrato metaestable trihelicoidal/horquilla I para el corte de concatémeros (+) producidos por [[ARN Pol II|real-viroid-pol2]] y la conformación nativa con Loop E ligada por la ADN ligasa 1 hospedadora.',
        from: [
          { nodeId: 'real-viroid-pol2', label: 'Transcritos multiméricos (+)', cargo: 'Salida concatémera del círculo rodante' },
          { nodeId: 'real-viroid', label: 'Secuencia central conservada', cargo: 'Firma diagnóstica de Pospiviroidae' }
        ],
        to: [
          { nodeId: 'real-viroid-loope', label: 'Interruptor Loop E y CCR', cargo: 'Centro de corte y ligación unitaria' },
          { nodeId: 'rna', label: 'Progenie circularizada de 359 nt', cargo: 'Varillas infecciosas replegadas' }
        ]
      }
    },

    v_domain: {
      en: {
        subtitle: 'Variable (V) Structural Spacer & Adaptation Domain',
        simple:
          'Sitting between the central core and the right end of [[PSTVd|real-viroid]], the Variable domain tolerates the widest sequence changes across viroid strains while preserving the stiff rod shape needed for survival.',
        story:
          'Because a naked [[RNA|rna]] ring faces constant mutation by error-prone RNA-templated copying inside the [[plant nucleus|nucleus]], some sections must absorb evolutionary drift without breaking replication. The Variable domain shows less than half the sequence identity shared across related pospiviroids, yet its compensatory base substitutions still keep upper and lower strands tightly paired so the 50-nanometer rod stays resistant to host ribonucleases.',
        blueprint: {
          role: 'Evolutionarily flexible helical spacer maintaining rod geometry while absorbing sequence mutations',
          arrivesFrom: 'Paired internal duplex segment linking the conserved Central (C) core to the Terminal Right (T_R) trafficking tip',
          inside: 'High-GC Watson-Crick stems, compensatory base-pair substitutions, and small internal loops preserving rod stiffness',
          deliversTo: 'Mechanically bridges the [[CCR/Loop E|real-viroid-loope]] processing zone to T_R intercellular movement signals',
          loop: 'Illustrates structural selection in non-coding RNA: secondary fold is preserved even when nucleotide letters drift'
        },
        scientific:
          'Variable (V) domain (~nt 122-146 and 214-238) of [[PSTVd|real-viroid]], exhibiting the highest sequence divergence (<50% identity across Pospiviroidae species) while conserving high G+C stem stability and overall ~2 nm rod-like secondary geometry. Structural covariation preserves ribonuclease resistance and proper spatial spacing between the [[C domain|real-viroid-loope]] and Terminal Right transport motifs.',
        from: [
          { nodeId: 'real-viroid', label: 'PSTVd Self-Paired Rod', cargo: 'Covarying helical spacer' },
          { nodeId: 'base', label: 'Compensatory Base Pairs', cargo: 'GC-rich thermodynamic stability' }
        ],
        to: [
          { nodeId: 'rna', label: 'RNase-Resistant Rod Fold', cargo: 'Maintained 50 x 2 nm geometry' },
          { nodeId: 'real-plant', label: 'Host-Range Adaptation', cargo: 'Evolutionary sequence plasticity' }
        ]
      },
      es: {
        subtitle: 'Dominio Variable (V) espaciador y de adaptación estructural',
        simple:
          'Ubicado entre el núcleo central y el extremo derecho de [[PSTVd|real-viroid]], el dominio Variable admite los mayores cambios de secuencia entre cepas conservando siempre la rigidez de la varilla necesaria para resistir enzimas.',
        story:
          'Como un anillo desnudo de [[ARN|rna]] sufre mutaciones frecuentes durante su copia en el [[núcleo vegetal|nucleus]], necesita regiones capaces de absorber variación evolutiva sin colapsar. El dominio Variable presenta la menor identidad de secuencia entre pospiviroide emparentados, pero sus sustituciones compensatorias mantienen apareadas las hebras superior e inferior para conservar una varilla compacta resistente a ribonucleasas.',
        blueprint: {
          role: 'Espaciador helicoidal evolutivamente flexible que preserva la geometría de varilla ante mutaciones',
          arrivesFrom: 'Segmento dúplex apareado que conecta el núcleo Central (C) con el dominio Terminal Derecho (T_R)',
          inside: 'Tallos Watson–Crick ricos en G–C, sustituciones compensatorias de bases y pequeños bucles que conservan la rigidez',
          deliversTo: 'Enlaza mecánicamente la zona de procesamiento [[CCR/Loop E|real-viroid-loope]] con las señales de transporte de T_R',
          loop: 'Ejemplifica la selección estructural del ARN no codificante: se conserva la forma aunque cambien las letras'
        },
        scientific:
          'Dominio Variable (V, ~nt 122–146 y 214–238) de [[PSTVd|real-viroid]], región de mayor divergencia de secuencia (<50 % de identidad entre especies de Pospiviroidae) que mantiene una alta estabilidad G+C y la geometría secundaria en varilla de ~2 nm. La covariación de pares conserva la resistencia frente a ribonucleasas y la separación exacta entre el [[dominio C|real-viroid-loope]] y los motivos de transporte de T_R.',
        from: [
          { nodeId: 'real-viroid', label: 'Varilla autoapareada PSTVd', cargo: 'Espaciador helicoidal covariante' },
          { nodeId: 'base', label: 'Pares de bases compensatorios', cargo: 'Estabilidad termodinámica G–C' }
        ],
        to: [
          { nodeId: 'rna', label: 'Plegamiento resistente a RNasas', cargo: 'Geometría estable de 50 × 2 nm' },
          { nodeId: 'real-plant', label: 'Adaptación de hospedador', cargo: 'Plasticidad evolutiva de secuencia' }
        ]
      }
    },

    tr_domain: {
      en: {
        subtitle: 'Terminal Right (T_R) Plant-Trafficking Domain',
        simple:
          'Capping the right end of the 50-nanometer [[PSTVd|real-viroid]] rod, the Terminal Right domain carries folded [[RNA|rna]] loops that guide this naked ring through microscopic channels from one [[plant cell|real-plant]] to the next.',
        story:
          'Replicating inside a single leaf nucleus would trap a viroid forever unless it could spread throughout the plant. Because [[PSTVd|real-viroid]] builds zero viral movement proteins - unlike [[Tobacco Mosaic Virus|real-tmv]], which encodes its own movement protein - it encodes directional zip codes straight into the folded loops of this Terminal Right hairpin. Host plant RNA-binding proteins recognize the T_R motif and escort the naked circular RNA across plasmodesmata and into phloem vascular highways.',
        blueprint: {
          role: 'Right-terminal RNA structural zip code directing systemic intercellular and phloem movement in plants',
          arrivesFrom: 'Closed right-hand hairpin and conserved internal loops of the 359-nt [[PSTVd|real-viroid]] rod',
          inside: 'Specific 3D non-canonical internal loops (such as the bipartite trafficking motif) folded along the T_R stem',
          deliversTo: 'Recruits host plant trafficking factors to move naked [[PSTVd|real-viroid]] across plasmodesmata into distant tissues',
          loop: 'Replaces dedicated viral movement proteins (as in [[TMV|real-tmv]]) with pure 3D non-coding RNA geometry'
        },
        scientific:
          'Terminal Right (T_R) domain (~nt 147-213) of [[PSTVd|real-viroid]], containing conserved 3D internal RNA loop motifs (including the RY/trafficking motif required for bundle-sheath to mesophyll and phloem entry). Binds endogenous [[plant|real-plant]] RNA-binding transport factors (such as VirP1 bromodomain protein) to mediate nuclear import, plasmodesmal cell-to-cell transit, and systemic vascular spread without any virus-encoded movement [[protein|protein]].',
        from: [
          { nodeId: 'real-viroid', label: 'PSTVd Closed RNA Rod', cargo: 'Right-terminal hairpin motifs' },
          { nodeId: 'rna', label: '3D RNA Trafficking Loops', cargo: 'Protein-free postal zip code' }
        ],
        to: [
          { nodeId: 'real-plant', label: 'Systemic Plant Infection', cargo: 'Plasmodesmata & phloem transit' },
          { nodeId: 'nucleus', label: 'Neighboring Cell Nuclei', cargo: 'Nuclear import via host VirP1' }
        ]
      },
      es: {
        subtitle: 'Dominio Terminal Derecho (T_R) de transporte vegetal',
        simple:
          'Rematando el extremo derecho de la varilla de 50 nm de [[PSTVd|real-viroid]], el dominio Terminal Derecho porta bucles de [[ARN|rna]] plegado que guían este anillo desnudo entre [[células vegetales|real-plant]] a través de plasmodesmos.',
        story:
          'Replicarse en un solo núcleo foliar dejaría atrapado al viroide si no lograra expandirse por toda la planta. Como [[PSTVd|real-viroid]] no fabrica proteínas de movimiento propias —a diferencia del [[virus del mosaico del tabaco|real-tmv]]—, codifica sus direcciones postales directamente en los bucles tridimensionales de esta horquilla Terminal Derecha. Proteínas vegetales de unión a ARN reconocen el motivo T_R y escoltan el anillo desnudo a través de los plasmodesmos hasta el floema.',
        blueprint: {
          role: 'Código postal estructural de ARN en el extremo derecho que guía el tráfico celular y por floema',
          arrivesFrom: 'Horquilla terminal derecha y bucles internos conservados en la varilla de 359 nt de [[PSTVd|real-viroid]]',
          inside: 'Bucles internos tridimensionales no canónicos (motivos de tráfico y unión a VirP1) a lo largo del tallo T_R',
          deliversTo: 'Recluta proteínas vegetales de transporte para desplazar [[PSTVd|real-viroid]] por plasmodesmos hacia tejidos lejanos',
          loop: 'Sustituye las proteínas virales de movimiento (como en [[TMV|real-tmv]]) por pura geometría 3D de ARN'
        },
        scientific:
          'Dominio Terminal Derecho (T_R, ~nt 147–213) de [[PSTVd|real-viroid]], portador de motivos conservados de bucles internos 3D (incluidos motivos RY esenciales para el cruce entre mesófilo, vaina vascular y floema). Interacciona con proteínas endógenas de la [[planta|real-plant]] como VirP1 (con bromodominio) para dirigir importación nuclear, tránsito por plasmodesmos y propagación sistémica sin codificar ninguna [[proteína|protein]] propia.',
        from: [
          { nodeId: 'real-viroid', label: 'Varilla cerrada PSTVd', cargo: 'Motivos de la horquilla derecha' },
          { nodeId: 'rna', label: 'Bucles 3D de tráfico', cargo: 'Señal direccional sin proteínas' }
        ],
        to: [
          { nodeId: 'real-plant', label: 'Infección sistémica vegetal', cargo: 'Tránsito por plasmodesmos y floema' },
          { nodeId: 'nucleus', label: 'Núcleos de células vecinas', cargo: 'Importación nuclear vía VirP1' }
        ]
      }
    },

    loop_e: {
      en: {
        subtitle: 'Conserved Non-Canonical Loop E Structural Motif',
        simple:
          'Glowing inside the central core of [[PSTVd|real-viroid]], [[Loop E|real-viroid-loope]] twists unpaired [[RNA|rna]] letters into unusual non-standard base pairs that host enzymes recognize directly to seal new viroid rings.',
        story:
          'Where ordinary [[RNA|rna]] stems stack smooth Watson-Crick pairs, Loop E bends the sugar-phosphate rail into a crisp architectural landmark modeled on the conserved ribosomal Loop E structure (PDB 1S72). Non-canonical trans Hoogsteen and sugar-edge hydrogen bonds lock bulged bases into a rigid platform stabilized by [[Mg2+|atom-mg]] ions. Inside the [[plant nucleus|nucleus]], that unmistakable 3D pocket tells host DNA ligase 1 exactly where to weld cleaved linear (+) strands back into infectious circles.',
        blueprint: {
          role: 'Rigid non-canonical 3D RNA bulge serving as a molecular recognition and circularization signal',
          arrivesFrom: 'Conserved central nucleotides inside the C domain of [[PSTVd|real-viroid]] coordinated by [[Mg2+|atom-mg]] ions',
          inside: 'Five stacked non-Watson-Crick base pairs (modeled on PDB 1S72 Loop E) widening the deep RNA major groove',
          deliversTo: 'Positions cleaved 5-prime-phosphate and 3-prime-OH ends for circularization by host DNA ligase 1 and host-factor docking',
          loop: 'Single mutations disrupting Loop E geometry abolish replication even when the rest of the 359-nt rod remains intact'
        },
        scientific:
          'Conserved internal [[Loop E|real-viroid-loope]] RNA tertiary motif within the Central Conserved Region of [[PSTVd|real-viroid]] (nt 98-102 / 256-261; structural analog of ribosomal Loop E, PDB 1S72). Built from non-Watson-Crick trans Hoogsteen/sugar-edge and cis sugar-edge/Watson-Crick interactions plus bulged purines coordinated by [[Mg2+|atom-mg]], presenting a widened major-groove docking surface for host RPL5 and redirected plant DNA ligase 1.',
        from: [
          { nodeId: 'real-viroid', label: 'Central Conserved Region', cargo: 'Conserved Loop E nucleotides' },
          { nodeId: 'atom-mg', label: 'Stabilizing Mg2+ Ions', cargo: 'Tertiary RNA fold coordination' }
        ],
        to: [
          { nodeId: 'real-viroid-loope', label: 'Loop E Motif Node', cargo: 'Non-canonical 3D RNA switch' },
          { nodeId: 'rna', label: 'Circular Ring Closure', cargo: 'DNA ligase 1 substrate alignment' }
        ]
      },
      es: {
        subtitle: 'Motivo estructural conservado no canónico Loop E',
        simple:
          'Brillando en el corazón central de [[PSTVd|real-viroid]], el [[Loop E|real-viroid-loope]] tuerce letras de [[ARN|rna]] en pares no convencionales que las enzimas vegetales reconocen al instante para sellar los nuevos anillos viroidales.',
        story:
          'Donde los tallos comunes de [[ARN|rna]] apilan pares Watson–Crick regulares, Loop E dobla el esqueleto azúcar–fosfato formando un relieve preciso modelado sobre el Loop E ribosómico (PDB 1S72). Enlaces de hidrógeno no canónicos trans Hoogsteen y de borde de azúcar fijan bases sobresalientes en una plataforma rígida estabilizada por [[Mg²⁺|atom-mg]]. Dentro del [[núcleo vegetal|nucleus]], ese bolsillo 3D inconfundible indica a la ADN ligasa 1 el punto exacto donde soldar las hebras lineales (+) en círculos infecciosos.',
        blueprint: {
          role: 'Bucle terciario rígido de ARN no canónico que actúa como señal de reconocimiento y circularización',
          arrivesFrom: 'Nucleótidos centrales conservados en el dominio C de [[PSTVd|real-viroid]] coordinados por iones [[Mg²⁺|atom-mg]]',
          inside: 'Cinco pares apilados no Watson–Crick (modelados según Loop E PDB 1S72) que ensanchan el surco mayor del ARN',
          deliversTo: 'Alinea los extremos 5′-fosfato y 3′-OH cortados para el sellado por ADN ligasa 1 y la unión de factores vegetales',
          loop: 'Una sola mutación que rompa la geometría de Loop E bloquea la replicación aunque el resto de la varilla siga intacta'
        },
        scientific:
          'Motivo terciario interno conservado [[Loop E|real-viroid-loope]] en la Región Central Conservada de [[PSTVd|real-viroid]] (nt 98–102 / 256–261; análogo estructural del Loop E ribosómico, PDB 1S72). Estabilizado por interacciones no Watson–Crick trans Hoogsteen/borde de azúcar, cis borde de azúcar/Watson–Crick y purinas abultadas coordinadas por [[Mg²⁺|atom-mg]], ofreciendo una superficie ensanchada para RPL5 y la ADN ligasa 1 vegetal.',
        from: [
          { nodeId: 'real-viroid', label: 'Región Central Conservada', cargo: 'Nucleótidos conservados de Loop E' },
          { nodeId: 'atom-mg', label: 'Iones Mg²⁺ estabilizadores', cargo: 'Coordinación terciaria del ARN' }
        ],
        to: [
          { nodeId: 'real-viroid-loope', label: 'Motivo Loop E', cargo: 'Interruptor 3D no canónico de ARN' },
          { nodeId: 'rna', label: 'Cierre circular del anillo', cargo: 'Alineación para ADN ligasa 1' }
        ]
      }
    },

    ccr_hairpin: {
      en: {
        subtitle: 'Central Conserved Region (CCR) Cleavage Hairpin',
        simple:
          'Right inside the central zone of [[PSTVd|real-viroid]], freshly copied multi-unit (+) [[RNA|rna]] strands briefly fold into this hairpin switch so a host plant RNase slices them into exact 359-nucleotide pieces.',
        story:
          'When hijacked host [[RNA Pol II|real-viroid-pol2]] spins a long multi-copy (+) strand off the (-) rolling-circle template, those chained copies must be cut apart at the exact nucleotide boundary before closing into rings. During transcription, the Central Conserved Region transiently snaps into metastable Hairpin I, aligning two repeated CCR junctions into a precise double-stranded cleavage platform. Once a host RNase makes the two staggered cuts, the linear monomer flips straight back into the [[Loop E|real-viroid-loope]] rod ready for ligation.',
        blueprint: {
          role: 'Metastable RNA secondary-structure switch directing exact unit-length cleavage of (+) concatemers',
          arrivesFrom: 'Co-transcriptional folding of tandem CCR repeats inside multimeric (+) strands synthesized by [[Pol II|real-viroid-pol2]]',
          inside: 'Metastable Hairpin I / tri-helical cleavage duplex positioned between nucleotides G95 and G96 in the upper CCR',
          deliversTo: 'Presents an exact staggered cleavage substrate to host nuclear RNase III-like endonuclease before [[Loop E|real-viroid-loope]] refolding',
          loop: 'Collapses irreversibly into the lower-energy native [[Loop E|real-viroid-loope]] duplex once cut, preventing re-cleavage'
        },
        scientific:
          'Metastable Hairpin I / tri-helical cleavage structure formed transiently within the upper Central Conserved Region (CCR) of multimeric (+) [[PSTVd|real-viroid]] RNAs during asymmetric rolling-circle replication. Two consecutive CCR repeats pair into a conserved quasi-double-stranded stem cleaved specifically between G95 and G96 by a host nuclear endoribonuclease, generating 5-prime-phosphate and 3-prime-hydroxyl unit-length linear monomers that refold into the [[Loop E|real-viroid-loope]] ligation substrate.',
        from: [
          { nodeId: 'real-viroid-pol2', label: 'Multimeric (+) RNA Chain', cargo: 'Tandem CCR cleavage repeats' },
          { nodeId: 'rna', label: 'Metastable Hairpin I', cargo: 'Co-transcriptional folding switch' }
        ],
        to: [
          { nodeId: 'real-viroid-loope', label: 'Refolded Loop E Junction', cargo: '5-prime-P / 3-prime-OH ligation ends' },
          { nodeId: 'real-viroid', label: 'Unit-Length 359-nt Monomer', cargo: 'Exact progeny length cut' }
        ]
      },
      es: {
        subtitle: 'Horquilla de escisión de la Región Central Conservada (CCR)',
        simple:
          'Justo en la zona central de [[PSTVd|real-viroid]], las largas copias multiméricas (+) de [[ARN|rna]] se pliegan brevemente en esta horquilla para que una RNasa vegetal las corte en piezas exactas de 359 nucleótidos.',
        story:
          'Cuando la [[ARN Pol II|real-viroid-pol2]] secuestrada sintetiza una cadena continua con varias copias (+) encadenadas, el viroide debe separarlas en el nucleótido exacto antes de cerrarlas en anillos. Durante la transcripción, la Región Central Conservada adopta transitoriamente la horquilla metaestable I, reuniendo dos repeticiones CCR en una plataforma precisa de corte. Apenas una endonucleasa vegetal practica los cortes escalonados, el monómero lineal se repliega hacia la conformación [[Loop E|real-viroid-loope]] lista para ligarse.',
        blueprint: {
          role: 'Interruptor estructural metaestable de ARN que dirige el corte exacto a longitud unitaria de concatémeros (+)',
          arrivesFrom: 'Plegamiento cotranscripcional de repeticiones CCR en cadenas multiméricas (+) sintetizadas por [[Pol II|real-viroid-pol2]]',
          inside: 'Dúplex de corte metaestable horquilla I / trihelicoidal centrado entre los nucleótidos G95 y G96 de la CCR superior',
          deliversTo: 'Ofrece un sustrato escalonado preciso a la endorribonucleasa nuclear antes del replegamiento hacia [[Loop E|real-viroid-loope]]',
          loop: 'Al cortarse colapsa a la varilla nativa [[Loop E|real-viroid-loope]] de menor energía, impidiendo nuevos cortes'
        },
        scientific:
          'Estructura metaestable horquilla I / trihelicoidal formada transitoriamente en la Región Central Conservada (CCR) superior de transcritos multiméricos (+) de [[PSTVd|real-viroid]] durante el círculo rodante asimétrico. Dos repeticiones CCR sucesivas forman un tallo cuasibicatenario escindido específicamente entre G95 y G96 por una endorribonucleasa nuclear vegetal, generando monómeros lineales con extremos 5′-fosfato y 3′-OH que se repliegan hacia el sustrato de ligación [[Loop E|real-viroid-loope]].',
        from: [
          { nodeId: 'real-viroid-pol2', label: 'Cadena multimérica (+)', cargo: 'Repeticiones CCR en tándem' },
          { nodeId: 'rna', label: 'Horquilla metaestable I', cargo: 'Interruptor cotranscripcional' }
        ],
        to: [
          { nodeId: 'real-viroid-loope', label: 'Unión replegada Loop E', cargo: 'Extremos 5′-P y 3′-OH alineados' },
          { nodeId: 'real-viroid', label: 'Monómero unitario de 359 nt', cargo: 'Corte exacto de la progenie' }
        ]
      }
    },

    wobble_gu: {
      en: {
        subtitle: 'Non-Canonical G-U Wobble Base Pairs',
        simple:
          'Alongside standard A-U and G-C rungs, [[PSTVd|real-viroid]] peppers its [[RNA|rna]] stems with golden guanine-uracil (G-U) wobble pairs. Each wobble pair tilts the helix slightly, creating pockets that host proteins recognize and preventing the rod from locking too rigidly.',
        story:
          'In double-stranded [[DNA|dna]], guanine pairs strictly with cytosine, leaving the helix smooth and uniform. Inside folded single-stranded [[RNA|rna]] like [[PSTVd|real-viroid]], guanine regularly pairs directly with uracil through two shifted hydrogen bonds. That slight geometric offset - the classic G-U wobble pair - exposes distinctive hydrogen-bond donors and electronegative [[oxygen|atom-o]] pockets inside the shallow minor groove while keeping local melting energy tuned so hijacked [[Pol II|real-viroid-pol2]] can still unzip the rod during copying.',
        blueprint: {
          role: 'Thermodynamically stable non-canonical RNA base pair tuning helix flexibility and protein-docking geometry',
          arrivesFrom: 'Intramolecular pairing between opposed guanine and uracil [[bases|base]] across the 359-nt [[PSTVd|real-viroid]] rod',
          inside: 'Two shifted N1-H...O2 and O6...H-N3 hydrogen bonds introducing a subtle helical twist and unique electrostatic pocket',
          deliversTo: 'Balances extracellular RNase protection with controlled local strand unzipping for [[RNA Pol II|real-viroid-pol2]] copying',
          loop: 'Demonstrates a signature RNA structural tool absent from canonical B-form [[dsDNA|dna]]'
        },
        scientific:
          'Non-canonical cis Watson-Crick/Watson-Crick G-U wobble [[base|base]] pairs distributed throughout the self-paired A-form helical stems of [[PSTVd|real-viroid]]. Stabilized by two hydrogen bonds (G-N1H to U-O2 and G-O6 to U-N3H) with thermodynamic stability approaching canonical A-U pairs, each G-U wobble displaces the uracil glycosidic angle, creates a distinctive minor-groove exocyclic amino group and [[water|water]]-bridging pocket for host protein recognition, and modulates helical stability during [[Pol II|real-viroid-pol2]] strand separation.',
        from: [
          { nodeId: 'base', label: 'Guanine & Uracil Bases', cargo: 'Non-canonical RNA base pairing' },
          { nodeId: 'rna', label: 'A-Form RNA Helical Stems', cargo: 'Self-paired viroid backbone' }
        ],
        to: [
          { nodeId: 'real-viroid', label: 'Flexible 50 nm PSTVd Rod', cargo: 'Tuned stability & recognition' },
          { nodeId: 'real-viroid-loope', label: 'Non-Canonical Motif Network', cargo: '3D RNA architectural signals' }
        ]
      },
      es: {
        subtitle: 'Pares de bases no canónicos bamboleantes G·U (Wobble)',
        simple:
          'Junto a los peldaños estándar A–U y G–C, [[PSTVd|real-viroid]] salpica sus tallos de [[ARN|rna]] con pares guanina–uracilo (G·U). Cada par bamboleante inclina ligeramente la hélice, creando bolsillos que las proteínas vegetales reconocen y evitando una rigidez excesiva.',
        story:
          'En el [[ADN|dna]] bicatenario, la guanina se empareja estrictamente con citosina, manteniendo una hélice uniforme. En un [[ARN|rna]] monocatenario plegado como [[PSTVd|real-viroid]], la guanina forma con frecuencia dos puentes de hidrógeno desplazados con el uracilo. Ese leve desplazamiento geométrico —el par wobble G·U— expone donadores y grupos [[oxígeno|atom-o]] característicos en el surco menor y ajusta la energía local de fusión para que la [[Pol II|real-viroid-pol2]] secuestrada pueda abrir la varilla al copiarla.',
        blueprint: {
          role: 'Par de bases no canónico estable del ARN que ajusta la flexibilidad helicoidal y el acoplamiento proteico',
          arrivesFrom: 'Apareamiento intramolecular entre [[bases|base]] guanina y uracilo enfrentadas en la varilla de [[PSTVd|real-viroid]]',
          inside: 'Dos puentes de hidrógeno desplazados (N1–H···O2 y O6···H–N3) que introducen torsión local y un bolsillo electrostático único',
          deliversTo: 'Equilibra la protección frente a RNasas con la apertura controlada de hebras durante la copia por [[ARN Pol II|real-viroid-pol2]]',
          loop: 'Ilustra un recurso estructural exclusivo del ARN ausente en el [[ADNbc|dna]] canónico forma B'
        },
        scientific:
          'Pares de [[bases|base]] no canónicos cis Watson–Crick G·U (wobble) repartidos a lo largo de los tallos helicoidales forma A de [[PSTVd|real-viroid]]. Estabilizados por dos puentes de hidrógeno (G-N1H···U-O2 y G-O6···U-N3H) con energía comparable a A–U, desplazan la geometría glicosídica, exponen un grupo amino exocíclico y un puente de [[agua|water]] en el surco menor para reconocimiento proteico, y regulan la apertura helicoidal por [[Pol II|real-viroid-pol2]].',
        from: [
          { nodeId: 'base', label: 'Bases guanina y uracilo', cargo: 'Apareamiento no canónico en ARN' },
          { nodeId: 'rna', label: 'Tallos de ARN forma A', cargo: 'Esqueleto viroidal autoapareado' }
        ],
        to: [
          { nodeId: 'real-viroid', label: 'Varilla flexible PSTVd (50 nm)', cargo: 'Estabilidad y reconocimiento finos' },
          { nodeId: 'real-viroid-loope', label: 'Red de motivos no canónicos', cargo: 'Señales arquitectónicas 3D' }
        ]
      }
    },

    pol2: {
      en: {
        subtitle: 'Hijacked Host Plant RNA Polymerase II (PDB 1WCM)',
        simple:
          'Normally dedicated to reading [[DNA|dna]] chromosomes inside a [[plant nucleus|nucleus]], this 12-subunit host [[RNA Polymerase II|real-viroid-pol2]] gets tricked into grabbing the naked [[PSTVd|real-viroid]] RNA ring and spinning endless copies around it.',
        story:
          'Every time a [[plant cell|real-plant]] transcribes its own protein-coding genes, this massive 515-kilodalton molecular machine (modeled from PDB 1WCM) opens double-stranded [[DNA|dna]] and links ribonucleotides together using two catalytic [[Mg2+|atom-mg]] ions. Remarkably, [[PSTVd|real-viroid]] forces Pol II to rewrite its own job description: guided by host adapter TFIIIA-7ZF, the enzyme clamps onto the folded 359-nucleotide RNA rod instead of DNA and executes continuous rolling-circle RNA synthesis without a single viral gene product assisting.',
        blueprint: {
          role: '12-subunit host nuclear DNA-dependent RNA polymerase repurposed as an RNA-templated viroid copier',
          arrivesFrom: 'Endogenous [[plant|real-plant]] nuclear transcription pool recruited onto the T_L domain of [[PSTVd|real-viroid]] via TFIIIA-7ZF',
          inside: '12-subunit eukaryotic [[Pol II|pol-ii]] core (PDB 1WCM) with dual [[Mg2+|atom-mg]] catalytic site polymerizing nuclear rNTPs',
          deliversTo: 'Spools out multimeric antisense (-) and sense (+) [[RNA|rna]] concatemers around the closed circular template',
          loop: 'Demonstrates that an ancient catalytic RNA-templated activity remains latent inside modern eukaryotic [[RNA Pol II|pol-ii]]'
        },
        scientific:
          'Twelve-subunit eukaryotic nuclear DNA-dependent [[RNA Polymerase II|pol-ii]] (core structure modeled from PDB 1WCM, ~515 kDa, alpha-amanitin-sensitive, dual [[Mg2+|atom-mg]] active cleft) commandeered inside host [[plant nuclei|nucleus]] by [[PSTVd|real-viroid]]. Recruited by host splicing variant TFIIIA-7ZF, Pol II performs processive RNA-dependent RNA synthesis across both steps of asymmetric rolling-circle replication, generating multimeric linear (-) and (+) viroid strands.',
        from: [
          { nodeId: 'pol-ii', label: 'Host Nuclear Pol II Pool', cargo: '12-subunit PDB 1WCM engine' },
          { nodeId: 'nucleotide', label: 'Nuclear rNTPs & Mg2+', cargo: 'ATP, UTP, GTP, CTP fuel' }
        ],
        to: [
          { nodeId: 'real-viroid-pol2', label: 'Hijacked Pol II Complex Node', cargo: 'Rolling-circle RNA copier' },
          { nodeId: 'rna', label: 'Multimeric (-) & (+) Strands', cargo: 'Linear viroid concatemers' }
        ]
      },
      es: {
        subtitle: 'ARN Polimerasa II vegetal secuestrada (PDB 1WCM)',
        simple:
          'Dedicada normalmente a leer cromosomas de [[ADN|dna]] en el [[núcleo vegetal|nucleus]], esta [[ARN Polimerasa II|real-viroid-pol2]] de 12 subunidades es engañada para atrapar el anillo desnudo de [[PSTVd|real-viroid]] y sacar copias sin parar.',
        story:
          'Cada vez que una [[célula vegetal|real-plant]] transcribe sus genes propios, esta gran máquina de 515 kDa (modelada desde PDB 1WCM) abre el [[ADN|dna]] y enlaza ribonucleótidos con dos iones catalíticos de [[Mg²⁺|atom-mg]]. De forma extraordinaria, [[PSTVd|real-viroid]] reasigna por completo a Pol II: guiada por el adaptador celular TFIIIA-7ZF, la enzima sujeta la varilla de ARN de 359 nucleótidos en lugar de ADN y ejecuta una síntesis continua en círculo rodante sin una sola proteína viral.',
        blueprint: {
          role: 'ARN polimerasa nuclear de 12 subunidades del hospedador reutilizada como copiadora de ARN viroidal',
          arrivesFrom: 'Reserva transcripcional nuclear de la [[planta|real-plant]] reclutada al dominio T_L de [[PSTVd|real-viroid]] vía TFIIIA-7ZF',
          inside: 'Núcleo eucariota de 12 subunidades [[Pol II|pol-ii]] (PDB 1WCM) con centro catalítico dual de [[Mg²⁺|atom-mg]] polimerizando rNTP',
          deliversTo: 'Despliega concatémeros lineales antisentido (–) y sentido (+) de [[ARN|rna]] alrededor del molde circular',
          loop: 'Revela que una antigua capacidad de copiar ARN sigue latente en la [[ARN Pol II|pol-ii]] eucariota moderna'
        },
        scientific:
          '[[ARN Polimerasa II|pol-ii]] nuclear eucariota de 12 subunidades dependiente de ADN (PDB 1WCM, ~515 kDa, sensible a α-amanitina, centro activo con dos [[Mg²⁺|atom-mg]]) secuestrada en [[núcleos vegetales|nucleus]] por [[PSTVd|real-viroid]]. Reclutada mediante la variante vegetal TFIIIA-7ZF, Pol II ejecuta síntesis de ARN dependiente de ARN en ambas fases del círculo rodante asimétrico, generando hebras lineales multiméricas (–) y (+).',
        from: [
          { nodeId: 'pol-ii', label: 'Reserva nuclear de Pol II', cargo: 'Motor de 12 subunidades PDB 1WCM' },
          { nodeId: 'nucleotide', label: 'rNTP nucleares y Mg²⁺', cargo: 'ATP, UTP, GTP y CTP' }
        ],
        to: [
          { nodeId: 'real-viroid-pol2', label: 'Complejo Pol II secuestrado', cargo: 'Copiadora rodante de ARN' },
          { nodeId: 'rna', label: 'Hebras multiméricas (–) y (+)', cargo: 'Concatémeros lineales viroidales' }
        ]
      }
    },

    tfiiia: {
      en: {
        subtitle: 'Host Seven-Zinc-Finger Splicing Adapter (TFIIIA-7ZF)',
        simple:
          'Host [[RNA Pol II|real-viroid-pol2]] normally ignores [[RNA|rna]] templates. This shortened seven-finger plant [[protein|protein]] acts as a molecular bridge, gripping the left end of [[PSTVd|real-viroid]] and guiding it straight into the Pol II copying slot.',
        story:
          'Why does a DNA-reading polymerase agree to transcribe a naked [[RNA|rna]] circle? Biologists solved that mystery by uncovering a specific plant splicing variant called TFIIIA-7ZF. Whereas full-length nine-finger TFIIIA helps transcribe ribosomal 5S genes, the trimmed seven-zinc-finger variant binds directly to the lower left stem of [[PSTVd|real-viroid]] and interacts with the [[Pol II|real-viroid-pol2]] core, serving as the dedicated transcription factor that switches Pol II onto the viroid template.',
        blueprint: {
          role: 'Host nuclear zinc-finger transcription adapter bridging naked PSTVd RNA onto DNA-dependent Pol II',
          arrivesFrom: 'Alternatively spliced endogenous [[plant|real-plant]] TFIIIA pre-mRNA regulated by host ribosomal protein RPL5',
          inside: 'Seven tandem C2H2 zinc-finger nucleic-acid-binding domains clasping the T_L/P lower strand of [[PSTVd|real-viroid]]',
          deliversTo: 'Loads the circular (+) viroid template accurately into the catalytic cleft of nuclear [[RNA Pol II|real-viroid-pol2]]',
          loop: 'Viroid binding to RPL5 shifts host alternative splicing to produce even more TFIIIA-7ZF, boosting its own replication'
        },
        scientific:
          'Host [[plant|real-plant]] seven-zinc-finger splicing variant TFIIIA-7ZF (deduced nuclear adapter lacking the first two C2H2 fingers of canonical 9ZF TFIIIA). Recognizes the Terminal Left / Pathogenicity lower strand of [[PSTVd|real-viroid]] and bridges it to nuclear 12-subunit [[RNA Pol II|real-viroid-pol2]] (PDB 1WCM) to enable RNA-templated transcription; PSTVd further binds host RPL5 to promote exon skipping that elevates TFIIIA-7ZF levels.',
        from: [
          { nodeId: 'protein', label: 'Host Plant TFIIIA-7ZF', cargo: '7-zinc-finger splicing variant' },
          { nodeId: 'real-viroid', label: 'PSTVd T_L Binding Region', cargo: 'Lower-strand RNA recognition site' }
        ],
        to: [
          { nodeId: 'real-viroid-pol2', label: 'Active Pol II Initiation', cargo: 'RNA-templated copying switch' },
          { nodeId: 'nucleus', label: 'Positive Splicing Feedback', cargo: 'RPL5-modulated host hijack' }
        ]
      },
      es: {
        subtitle: 'Adaptador vegetal de siete dedos de zinc (TFIIIA-7ZF)',
        simple:
          'La [[ARN Pol II|real-viroid-pol2]] suele ignorar los moldes de [[ARN|rna]]. Esta [[proteína|protein]] vegetal recortada de siete dedos actúa como puente molecular, sujetando el extremo izquierdo de [[PSTVd|real-viroid]] y metiéndolo en la ranura de copia de Pol II.',
        story:
          '¿Por qué acepta una polimerasa de ADN transcribir un anillo desnudo de [[ARN|rna]]? El enigma se resolvió al descubrir una variante vegetal de corte y empalme llamada TFIIIA-7ZF. Mientras la versión completa de nueve dedos transcribe genes de ARNr 5S, la variante de siete dedos de zinc se adhiere directamente al tallo inferior izquierdo de [[PSTVd|real-viroid]] y se acopla al núcleo de [[Pol II|real-viroid-pol2]], redirigiendo la enzima hacia el molde viroidal.',
        blueprint: {
          role: 'Adaptador transcripcional nuclear de dedos de zinc que acopla el ARN desnudo de PSTVd a la Pol II',
          arrivesFrom: 'Pre-ARNm endógeno de TFIIIA de la [[planta|real-plant]] procesado por corte y empalme alternativo regulado por RPL5',
          inside: 'Siete dominios en tándem C2H2 de dedos de zinc que sujetan la hebra inferior T_L/P de [[PSTVd|real-viroid]]',
          deliversTo: 'Introduce el molde circular (+) del viroide en el centro catalítico de la [[ARN Pol II|real-viroid-pol2]] nuclear',
          loop: 'El propio viroide secuestra RPL5 para desplazar el empalme celular hacia más TFIIIA-7ZF y acelerar su copia'
        },
        scientific:
          'Variante de empalme alternativo vegetal TFIIIA-7ZF de siete dedos de zinc (carece de los dos primeros dedos C2H2 del TFIIIA canónico de 9 dedos). Se une a la hebra inferior T_L/P de [[PSTVd|real-viroid]] y la acopla a la [[ARN Pol II|real-viroid-pol2]] nuclear de 12 subunidades (PDB 1WCM) para habilitar la transcripción sobre ARN; además, PSTVd se liga a RPL5 hospedadora para estimular la omisión exónica que aumenta TFIIIA-7ZF.',
        from: [
          { nodeId: 'protein', label: 'TFIIIA-7ZF vegetal', cargo: 'Variante de siete dedos de zinc' },
          { nodeId: 'real-viroid', label: 'Sitio de unión T_L de PSTVd', cargo: 'Hebra inferior de reconocimiento' }
        ],
        to: [
          { nodeId: 'real-viroid-pol2', label: 'Iniciación activa de Pol II', cargo: 'Interruptor de copia sobre ARN' },
          { nodeId: 'nucleus', label: 'Retroalimentación de empalme', cargo: 'Secuestro regulado por RPL5' }
        ]
      }
    },

    minus_rna: {
      en: {
        subtitle: 'Multimeric Antisense (-) Rolling-Circle RNA Strand',
        simple:
          'As host [[Pol II|real-viroid-pol2]] circles nonstop around the closed (+) [[PSTVd|real-viroid]] template, it spins off this glowing ribbon containing multiple head-to-tail reverse copies called the (-) antisense strand.',
        story:
          'Unlike symmetric viroids found in chloroplasts, nuclear [[PSTVd|real-viroid]] follows an asymmetric rolling-circle cycle. Because the incoming (+) ring has no stop signal, [[Pol II|real-viroid-pol2]] keeps looping lap after lap around the 359-nucleotide track, extruding a long linear concatemer of complementary (-) RNA copies. Rather than being sliced into circles itself, this multimeric (-) ribbon stays linear inside the [[nucleus|nucleus]] and serves directly as the master template for transcribing hordes of new (+) strands.',
        blueprint: {
          role: 'Linear multimeric antisense (-) RNA intermediate bridging the first and second halves of rolling-circle copying',
          arrivesFrom: 'Continuous multi-lap transcription of the circular (+) [[PSTVd|real-viroid]] ring by hijacked [[RNA Pol II|real-viroid-pol2]]',
          inside: 'Head-to-tail tandem repeats of complementary 359-nt antisense [[RNA|rna]] accumulating inside the plant [[nucleus|nucleus]]',
          deliversTo: 'Feeds directly back into host [[RNA Pol II|real-viroid-pol2]] as template for synthesizing multimeric (+) progeny chains',
          loop: 'Defines the asymmetric Pospiviroidae cycle: (-) strands remain linear multimers instead of circularizing'
        },
        scientific:
          'Multimeric linear antisense (-) [[RNA|rna]] concatemer (integral multiples of 359 [[nucleotides|nucleotide]]) synthesized processively around circular (+) [[PSTVd|real-viroid]] by host nuclear [[RNA Pol II|real-viroid-pol2]] + TFIIIA-7ZF. Characteristic of the asymmetric rolling-circle pathway in Family Pospiviroidae, the (-) concatemer is neither cleaved nor ligated into circles, functioning directly inside the [[plant nucleus|nucleus]] as the template for (+) strand synthesis.',
        from: [
          { nodeId: 'real-viroid-pol2', label: 'Rolling-Circle Pol II', cargo: 'Continuous multi-lap synthesis' },
          { nodeId: 'real-viroid', label: 'Circular (+) PSTVd Template', cargo: '359-nt closed RNA loop' }
        ],
        to: [
          { nodeId: 'rna', label: 'Antisense (-) Concatemer', cargo: 'Linear template for (+) copies' },
          { nodeId: 'nucleus', label: 'Nuclear Replication Hub', cargo: 'Asymmetric cycle intermediate' }
        ]
      },
      es: {
        subtitle: 'Hebra multimérica antisentido (–) de ARN en círculo rodante',
        simple:
          'Mientras la [[Pol II|real-viroid-pol2]] da vueltas sin detenerse sobre el anillo cerrado (+) de [[PSTVd|real-viroid]], desenrolla esta cinta luminosa con múltiples copias inversas encadenadas llamada hebra antisentido (–).',
        story:
          'A diferencia de los viroides simétricos de cloroplastos, el nuclear [[PSTVd|real-viroid]] sigue un ciclo asimétrico en círculo rodante. Como el anillo (+) de partida carece de señal de parada, la [[Pol II|real-viroid-pol2]] completa vuelta tras vuelta alrededor de la pista de 359 nucleótidos, generando un largo concatémero lineal de copias complementarias (–). En lugar de cortarse en anillos, esta cinta (–) permanece lineal en el [[núcleo|nucleus]] y actúa directamente como molde maestro para transcribir nuevas cadenas (+).',
        blueprint: {
          role: 'Intermediario lineal multimérico de ARN antisentido (–) entre ambas fases del círculo rodante asimétrico',
          arrivesFrom: 'Transcripción continua multivuelta del anillo circular (+) de [[PSTVd|real-viroid]] por [[ARN Pol II|real-viroid-pol2]]',
          inside: 'Repeticiones en tándem cabeza-cola de [[ARN|rna]] antisentido de 359 nt acumuladas en el [[núcleo|nucleus]] vegetal',
          deliversTo: 'Vuelve a entrar en la [[ARN Pol II|real-viroid-pol2]] como molde para sintetizar cadenas multiméricas (+) hijas',
          loop: 'Define el ciclo asimétrico de Pospiviroidae: la hebra (–) nunca se circulariza y permanece como multímero lineal'
        },
        scientific:
          'Concatémero lineal multimérico de [[ARN|rna]] antisentido (–) (múltiplos enteros de 359 [[nucleótidos|nucleotide]]) sintetizado procesivamente sobre el círculo (+) de [[PSTVd|real-viroid]] por la [[ARN Pol II|real-viroid-pol2]] nuclear y TFIIIA-7ZF. Rasgo distintivo de la vía asimétrica de Pospiviroidae, la hebra (–) no sufre corte ni ligación circular y sirve directamente en el [[núcleo vegetal|nucleus]] como molde de síntesis de cadenas (+).',
        from: [
          { nodeId: 'real-viroid-pol2', label: 'Pol II en círculo rodante', cargo: 'Síntesis continua multivuelta' },
          { nodeId: 'real-viroid', label: 'Molde circular (+) PSTVd', cargo: 'Bucle cerrado de 359 nt' }
        ],
        to: [
          { nodeId: 'rna', label: 'Concatémero antisentido (–)', cargo: 'Molde lineal para copias (+)' },
          { nodeId: 'nucleus', label: 'Centro de replicación nuclear', cargo: 'Intermediario del ciclo asimétrico' }
        ]
      }
    },

    plus_rna: {
      en: {
        subtitle: 'Cleaved & Circularized Sense (+) Progeny Viroid RNA',
        simple:
          'Copied off the linear (-) ribbon by host [[Pol II|real-viroid-pol2]], sliced to exact 359-letter length at the CCR, and sealed into a closed ring, each fresh (+) [[PSTVd|real-viroid]] rod folds up immediately to infect new [[plant cells|real-plant]].',
        story:
          'Once hijacked [[Pol II|real-viroid-pol2]] transcribes multimeric (+) sense strands back off the linear (-) template, the finishing steps unfold with remarkable precision without a single viroid enzyme. Transient CCR cleavage hairpins direct host nuclear RNase to slice exact 359-nucleotide monomers; each monomer snaps into its native [[Loop E|real-viroid-loope]] rod so host DNA ligase 1 seals the 5-prime and 3-prime ends into a permanent closed circle ready to export through plasmodesmata.',
        blueprint: {
          role: 'Mature infectious 359-nt sense (+) viroid progeny completing the asymmetric rolling-circle amplification loop',
          arrivesFrom: 'Multimeric (+) transcripts copied off (-) concatemers by [[Pol II|real-viroid-pol2]], cleaved at the CCR, and closed by DNA ligase 1',
          inside: 'Covalently closed 359-nt single-stranded [[RNA|rna]] self-paired into the 50 x 2 nm five-domain rod with intact [[Loop E|real-viroid-loope]]',
          deliversTo: 'Seeds new nuclear rolling-circle rounds and traffics via T_R signals across plasmodesmata to uninfected [[plant cells|real-plant]]',
          loop: 'Closes the naked replication cycle: pure folded RNA enters, hijacks host nuclear enzymes, and exits as amplified folded RNA'
        },
        scientific:
          'Mature unit-length (359 [[nucleotides|nucleotide]]) covalently closed circular sense (+) [[PSTVd|real-viroid]] progeny generated via [[RNA Pol II|real-viroid-pol2]] transcription of linear (-) multimers, site-specific CCR Hairpin I endonucleolytic cleavage, conformational refolding into the native [[Loop E|real-viroid-loope]] rod, and phosphodiester circularization by host DNA ligase 1.',
        from: [
          { nodeId: 'real-viroid-loope', label: 'CCR Cleavage & Loop E Switch', cargo: 'Unit-length monomer alignment' },
          { nodeId: 'real-viroid-pol2', label: 'Pol II (+) Synthesis', cargo: 'Sense-strand transcription' }
        ],
        to: [
          { nodeId: 'real-viroid', label: 'Infectious 50 nm PSTVd Rod', cargo: 'Closed circular 359-nt progeny' },
          { nodeId: 'real-plant', label: 'Intercellular Spread', cargo: 'Export to neighboring plant nuclei' }
        ]
      },
      es: {
        subtitle: 'ARN hijo sentido (+) cortado y circularizado',
        simple:
          'Copiado desde la cinta lineal (–) por la [[Pol II|real-viroid-pol2]], cortado exactamente a 359 letras en la CCR y sellado en círculo cerrado, cada nuevo bastón (+) de [[PSTVd|real-viroid]] se pliega al instante para infectar nuevas [[células vegetales|real-plant]].',
        story:
          'Una vez que la [[Pol II|real-viroid-pol2]] transcribe largas hebras sentido (+) a partir del molde lineal (–), el acabado ocurre con precisión quirúrgica sin ninguna enzima del viroide. La horquilla transitoria CCR guía a la RNasa nuclear para liberar monómeros exactos de 359 nucleótidos; cada pieza se pliega al instante en la varilla con [[Loop E|real-viroid-loope]] para que la ADN ligasa 1 cierre sus extremos 5′ y 3′ en un anillo infeccioso listo para viajar por los plasmodesmos.',
        blueprint: {
          role: 'Progenie infecciosa madura sentido (+) de 359 nt que cierra el ciclo de replicación rodante asimétrico',
          arrivesFrom: 'Transcritos multiméricos (+) copiados de hebras (–) por [[Pol II|real-viroid-pol2]], cortados en la CCR y sellados por ADN ligasa 1',
          inside: '[[ARN|rna]] monocatenario circular cerrado de 359 nt autoapareado en varilla de 50 × 2 nm con [[Loop E|real-viroid-loope]] intacto',
          deliversTo: 'Alimenta nuevas rondas nucleares de círculo rodante y migra vía T_R hacia otras [[células vegetales|real-plant]]',
          loop: 'Cierra el ciclo desnudo: ARN plegado puro entra, desvía enzimas nucleares del hospedador y sale multiplicado'
        },
        scientific:
          'Progenie circular covalentemente cerrada de polaridad sentido (+) y longitud unitaria (359 [[nucleótidos|nucleotide]]) de [[PSTVd|real-viroid]], obtenida por transcripción con [[ARN Pol II|real-viroid-pol2]] desde multímeros lineales (–), corte endonucleolítico específico en la horquilla I de la CCR, replegamiento hacia la varilla nativa [[Loop E|real-viroid-loope]] y circularización fosfodiéster por ADN ligasa 1 vegetal.',
        from: [
          { nodeId: 'real-viroid-loope', label: 'Corte CCR y giro Loop E', cargo: 'Alineación del monómero unitario' },
          { nodeId: 'real-viroid-pol2', label: 'Síntesis (+) por Pol II', cargo: 'Transcripción de hebra sentido' }
        ],
        to: [
          { nodeId: 'real-viroid', label: 'Varilla infecciosa PSTVd (50 nm)', cargo: 'Progenie circular de 359 nt' },
          { nodeId: 'real-plant', label: 'Propagación intercelular', cargo: 'Salida hacia núcleos vecinos' }
        ]
      }
    },

    ligase: {
      en: {
        subtitle: 'Redirected Host Plant DNA Ligase 1',
        simple:
          'Just as [[PSTVd|real-viroid]] tricks a [[DNA|dna]]-reading polymerase into copying [[RNA|rna]], it also hijacks host DNA ligase 1 inside the [[plant nucleus|nucleus]] to weld the cut ends of each new 359-letter RNA into a seamless closed ring.',
        story:
          'Normally, plant nuclear DNA ligase 1 seals broken Okazaki fragments along replicating chromosomal [[DNA|dna]], ignoring ordinary single-stranded RNAs. Yet when a cleaved unit-length (+) [[PSTVd|real-viroid]] monomer snaps into its native [[Loop E|real-viroid-loope]] duplex, the nick between its 5-prime-[[phosphate|phosphate]] and 3-prime-hydroxyl ends mimics a double-stranded nucleic-acid repair joint. Burning host ATP, DNA ligase 1 forges the final covalent phosphodiester bond, sealing the circular armor that protects the naked viroid from exonucleases.',
        blueprint: {
          role: 'Host nuclear DNA repair ligase redirected to circularize linear 359-nt (+) viroid RNA monomers',
          arrivesFrom: 'Endogenous [[plant|real-plant]] nuclear DNA replication/repair enzyme pool plus host ATP and [[Mg2+|atom-mg]]',
          inside: 'ATP-dependent adenylyltransferase catalytic cleft recognizing the aligned 5-prime-P / 3-prime-OH nick adjacent to [[Loop E|real-viroid-loope]]',
          deliversTo: 'Forges the covalent 3-prime-5-prime phosphodiester bond sealing exonuclease-resistant circular (+) [[PSTVd|real-viroid]]',
          loop: 'Completes the double-hijack theme of PSTVd: both a DNA-dependent polymerase and a DNA ligase are subverted onto RNA'
        },
        scientific:
          'Host [[plant|real-plant]] nuclear DNA ligase 1 redirected onto an [[RNA|rna]] substrate during the terminal circularization step of [[PSTVd|real-viroid]] replication. Consuming host ATP and [[Mg2+|atom-mg]], DNA ligase 1 recognizes the local duplex nick stabilized by the conserved [[Loop E|real-viroid-loope]] motif and catalyzes covalent 3-prime-OH to 5-prime-[[phosphate|phosphate]] phosphodiester ligation to yield covalently closed circular 359-nt (+) progeny.',
        from: [
          { nodeId: 'real-viroid-loope', label: 'Loop E Aligned Nick', cargo: '5-prime-P and 3-prime-OH RNA ends' },
          { nodeId: 'atom-mg', label: 'Host ATP & Mg2+', cargo: 'Adenylylation ligation energy' }
        ],
        to: [
          { nodeId: 'real-viroid', label: 'Covalently Closed PSTVd Ring', cargo: 'Exonuclease-proof circular RNA' },
          { nodeId: 'phosphate', label: 'Sealed Phosphodiester Bond', cargo: 'Continuous 359-nt backbone' }
        ]
      },
      es: {
        subtitle: 'ADN ligasa 1 nuclear vegetal redirigida',
        simple:
          'Igual que [[PSTVd|real-viroid]] engaña a una polimerasa de [[ADN|dna]] para copiar [[ARN|rna]], también secuestra a la ADN ligasa 1 en el [[núcleo vegetal|nucleus]] para soldar los extremos cortados de cada nueva hebra en un anillo cerrado.',
        story:
          'En condiciones normales, la ADN ligasa 1 sella fragmentos de Okazaki en el [[ADN|dna]] cromosómico y pasa de largo ante el ARN monocatenario. Sin embargo, cuando un monómero (+) cortado de [[PSTVd|real-viroid]] adopta su conformación nativa [[Loop E|real-viroid-loope]], la muesca entre su [[fosfato|phosphate]] 5′ y su hidroxilo 3′ imita una fractura reparable en doble hebra. Consumiendo ATP del hospedador, la ADN ligasa 1 forja el enlace fosfodiéster final, blindando al viroide desnudo frente a exonucleasas.',
        blueprint: {
          role: 'Ligasa nuclear reparadora de ADN del hospedador desviada para circularizar monómeros lineales (+) de 359 nt',
          arrivesFrom: 'Reserva nuclear de reparación del ADN de la [[planta|real-plant]] junto con ATP y [[Mg²⁺|atom-mg]]',
          inside: 'Sitio adenililtransferasa dependiente de ATP que reconoce la muesca 5′-P / 3′-OH alineada junto al [[Loop E|real-viroid-loope]]',
          deliversTo: 'Crea el enlace covalente fosfodiéster 3′–5′ que cierra el anillo de [[PSTVd|real-viroid]] resistente a exonucleasas',
          loop: 'Culmina el doble secuestro de PSTVd: tanto una polimerasa de ADN como una ligasa de ADN acaban operando sobre ARN'
        },
        scientific:
          'ADN ligasa 1 nuclear de la [[planta|real-plant]] redirigida sobre un sustrato de [[ARN|rna]] en el paso terminal de circularización de [[PSTVd|real-viroid]]. Mediante ATP y [[Mg²⁺|atom-mg]], reconoce la muesca bicatenaria local estabilizada por el motivo conservado [[Loop E|real-viroid-loope]] y cataliza la formación del enlace fosfodiéster covalente 3′-OH a 5′-[[fosfato|phosphate]] produciendo el anillo cerrado de 359 nt.',
        from: [
          { nodeId: 'real-viroid-loope', label: 'Muesca alineada por Loop E', cargo: 'Extremos 5′-P y 3′-OH del ARN' },
          { nodeId: 'atom-mg', label: 'ATP y Mg²⁺ del hospedador', cargo: 'Energía de adenililación' }
        ],
        to: [
          { nodeId: 'real-viroid', label: 'Anillo cerrado de PSTVd', cargo: 'ARN circular inmune a exonucleasas' },
          { nodeId: 'phosphate', label: 'Enlace fosfodiéster sellado', cargo: 'Esqueleto continuo de 359 nt' }
        ]
      }
    },

    rna_atoms: {
      en: {
        subtitle: 'Atomic Close-Up: Ribose 2-prime-OH, Phosphodiester P & G-U Wobble',
        simple:
          'At atomic scale, [[PSTVd|real-viroid]] is built purely from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] - with zero [[sulfur|atom-s]] because it holds zero protein. That extra 2-prime-OH [[oxygen|atom-o]] on every ribose ring powers RNA folding into compact A-form rods and non-canonical loops.',
        story:
          'Zooming all the way into a single ribonucleotide pair reveals why [[RNA|rna]] can act as an autonomous 3D structural machine where [[DNA|dna]] stays a passive archive. Every five-carbon [[ribose|sugar]] carries a projecting 2-prime-hydroxyl (-OH) group that forces the helix into tight A-form geometry and donates extra hydrogen bonds inside [[Loop E|real-viroid-loope]]. Linked by anionic [[phosphorus|atom-p]] diester rails and bridged across the center by shifted G-U wobble hydrogen bonds, these five pure elements build an entire infectious agent with zero amino acids.',
        blueprint: {
          role: 'Sub-nanometer atomic inset (0.1-2 nm) exposing the chemical basis of RNA folding, 2-prime-OH polarity, and G-U wobble pairing',
          arrivesFrom: 'Host nuclear ribonucleotides assembled exclusively from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] (0 [[S|atom-s]])',
          inside: 'Ribose [[sugar|sugar]] with 2-prime-OH group, 3-prime-5-prime phosphodiester [[P|atom-p]] bridge, and dual H-bonded G-U wobble [[bases|base]]',
          deliversTo: 'Enables A-form rod stability, non-canonical [[Loop E|real-viroid-loope]] tertiary contacts, and protein-free [[PSTVd|real-viroid]] infectivity',
          loop: 'Directly contrasts RNA (2-prime-OH + P, 0 S) against [[Mimivirus DNA|real-mimivirus]] (2-prime-H + P) and [[prion protein|real-prion]] (S, 0 P)'
        },
        scientific:
          'Atomic-resolution [[RNA|rna]] structural inset (0.1-2.0 nm; elements [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]; zero [[S|atom-s]]). Highlights the ribose C2-prime hydroxyl (2-prime-OH) enforcing C3-prime-endo pucker and A-form helical geometry (~2.8 A rise, deep narrow major groove), covalent 3-prime-5-prime phosphodiester [[phosphate|phosphate]] linkages, and shifted cis G-U wobble hydrogen bonding underlying [[PSTVd|real-viroid]] tertiary motifs.',
        from: [
          { nodeId: 'atom-p', label: 'Phosphorus (P) & C/H/N/O', cargo: 'Five pure RNA elements (0 S)' },
          { nodeId: 'sugar', label: 'Ribose 2-prime-OH Sugar', cargo: 'A-form pucker & H-bond donor' }
        ],
        to: [
          { nodeId: 'rna', label: 'Ribonucleic Acid Node', cargo: 'Self-folding RNA chemistry' },
          { nodeId: 'real-viroid', label: 'Naked 359-nt PSTVd Rod', cargo: 'Zero-protein subviral code' }
        ]
      },
      es: {
        subtitle: 'Detalle atómico: ribosa 2′-OH, fósforo fosfodiéster y par G·U',
        simple:
          'A escala atómica, [[PSTVd|real-viroid]] está hecho solo de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]], sin nada de [[azufre|atom-s]] porque carece de proteínas. El grupo extra 2′-OH en cada ribosa impulsa el plegamiento en varillas forma A y bucles no canónicos.',
        story:
          'Acercarse hasta un solo par de ribonucleótidos revela por qué el [[ARN|rna]] puede operar como máquina estructural 3D allí donde el [[ADN|dna]] permanece como archivo pasivo. Cada anillo de [[ribosa|sugar]] lleva un hidroxilo 2′-OH que impone geometría helicoidal forma A y aporta puentes de hidrógeno extra dentro de [[Loop E|real-viroid-loope]]. Unidos por rieles fosfodiéster de [[fósforo|atom-p]] y enlazados al centro por pares bamboleantes G·U, estos cinco elementos bastan para crear un agente infeccioso sin un solo aminoácido.',
        blueprint: {
          role: 'Detalle atómico subnanométrico (0,1–2 nm) que revela la base química del plegamiento del ARN, el 2′-OH y el par G·U',
          arrivesFrom: 'Ribonucleótidos nucleares compuestos exclusivamente por [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]] (0 [[S|atom-s]])',
          inside: '[[Azúcar|sugar]] ribosa con grupo 2′-OH, puente fosfodiéster 3′–5′ con [[P|atom-p]] y [[bases|base]] G·U con doble puente de hidrógeno',
          deliversTo: 'Permite la rigidez forma A, contactos terciarios en [[Loop E|real-viroid-loope]] e infectividad sin proteínas de [[PSTVd|real-viroid]]',
          loop: 'Contrasta directamente el ARN (2′-OH + P, 0 S) con el [[ADN de Mimivirus|real-mimivirus]] (2′-H + P) y el [[prión|real-prion]] (S, 0 P)'
        },
        scientific:
          'Detalle estructural atómico de [[ARN|rna]] (0,1–2,0 nm; elementos [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]; cero [[S|atom-s]]). Muestra el hidroxilo C2′-OH de la ribosa que fija el plegamiento C3′-endo y la hélice forma A (paso ~2,8 Å, surco mayor estrecho y profundo), enlaces fosfodiéster 3′–5′ de [[fosfato|phosphate]] y puentes de hidrógeno desplazados G·U que sustentan los motivos terciarios de [[PSTVd|real-viroid]].',
        from: [
          { nodeId: 'atom-p', label: 'Fósforo (P) y C/H/N/O', cargo: 'Cinco elementos puros del ARN (0 S)' },
          { nodeId: 'sugar', label: 'Ribosa con grupo 2′-OH', cargo: 'Conformación forma A y puentes H' }
        ],
        to: [
          { nodeId: 'rna', label: 'Ácido ribonucleico (ARN)', cargo: 'Química de autoplegamiento' },
          { nodeId: 'real-viroid', label: 'Varilla desnuda PSTVd (359 nt)', cargo: 'Código subviral sin proteínas' }
        ]
      }
    }
  },

  'prion_realistic.html': {
    lipid_raft: {
      en: {
        subtitle: 'Neuronal Cholesterol-Sphingolipid Lipid Raft',
        simple:
          'This ordered, [[cholesterol|cholesterol]]-rich patch of a neuron outer [[plasma membrane|plasma-membrane]] gathers healthy [[PrPc|real-prion-prpc]] proteins close together - which helps normal signaling, but also creates the exact meeting point where invading [[PrPsc|real-prion]] seeds trigger misfolding.',
        story:
          'Healthy neurons do not scatter cellular prion proteins randomly across their entire surface. Instead, saturated sphingolipids and packed [[cholesterol|cholesterol]] rings assemble slightly thicker, semi-ordered membrane islands called lipid rafts that concentrate GPI-anchored [[PrPc|real-prion-prpc]] monomers side by side. When an infectious [[PrPsc fibril|real-prion-piribs]] contacts this raft or enters early endosomes pinched off from it, the high local density of healthy PrPc dramatically accelerates templated conversion.',
        blueprint: {
          role: 'Ordered outer-leaflet neuronal membrane microdomain concentrating native GPI-anchored PrPc substrates',
          arrivesFrom: 'Lateral phase clustering of [[cholesterol|cholesterol]], sphingomyelin, and saturated [[phospholipids|phospholipid]] in the neuronal [[plasma membrane|plasma-membrane]]',
          inside: 'Liquid-ordered ~5 nm bilayer domain densely populated with GPI-tethered soluble [[PrPc|real-prion-prpc]] monomers',
          deliversTo: 'Presents concentrated native [[PrPc|real-prion-prpc]] monomers to docking [[PrPsc|real-prion-piribs]] seeds at the surface and in endocytic vesicles',
          loop: 'Membrane lipid composition and cholesterol levels directly influence both normal PrPc signaling and pathological conversion speed'
        },
        scientific:
          'Liquid-ordered (Lo) neuronal [[plasma membrane|plasma-membrane]] microdomain (~10-200 nm lateral patches enriched in [[cholesterol|cholesterol]], glycosphingolipids, and saturated [[phospholipids|phospholipid]]). Concentrates GPI-anchored native [[PrPc|real-prion-prpc]] (PDB 1QLX) on the exoplasmic leaflet; serves as the primary physiological signaling platform and the key membrane interface where extracellular or endocytic [[PrPsc|real-prion-piribs]] seeds encounter fresh PrPc monomers.',
        from: [
          { nodeId: 'cholesterol', label: 'Cholesterol & Sphingolipids', cargo: 'Liquid-ordered raft packing' },
          { nodeId: 'plasma-membrane', label: 'Neuronal Plasma Membrane', cargo: 'Exoplasmic surface leaflet' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Concentrated PrPc Pool', cargo: 'GPI-anchored native substrate' },
          { nodeId: 'real-prion', label: 'Membrane Conversion Interface', cargo: 'Seed-to-substrate encounter zone' }
        ]
      },
      es: {
        subtitle: 'Balsa lipídica neuronal rica en colesterol y esfingolípidos',
        simple:
          'Este parche ordenado y rico en [[colesterol|cholesterol]] de la [[membrana plasmática|plasma-membrane]] neuronal agrupa a las proteínas sanas [[PrPᶜ|real-prion-prpc]], facilitando la señalización normal pero también el encuentro con semillas invasoras de [[PrPˢᶜ|real-prion]].',
        story:
          'Las neuronas sanas no dispersan al azar su proteína priónica por toda la superficie. En cambio, los esfingolípidos saturados y el [[colesterol|cholesterol]] compacto forman islas semiordenadas llamadas balsas lipídicas que reúnen monómeros de [[PrPᶜ|real-prion-prpc]] anclados por GPI unos junto a otros. Cuando una [[fibrilla PrPˢᶜ|real-prion-piribs]] infecciosa toca esta balsa o ingresa con ella en endosomas, la elevada concentración local de PrPᶜ sana acelera enormemente la conversión.',
        blueprint: {
          role: 'Microdominio ordenado de la hemicapa externa neuronal que concentra sustratos nativos PrPᶜ anclados por GPI',
          arrivesFrom: 'Agrupamiento lateral de [[colesterol|cholesterol]], esfingomielina y [[fosfolípidos|phospholipid]] saturados en la [[membrana plasmática|plasma-membrane]]',
          inside: 'Dominio bicapa líquido-ordenado (~5 nm) densamente poblado por monómeros solubles [[PrPᶜ|real-prion-prpc]]',
          deliversTo: 'Presenta monómeros concentrados de [[PrPᶜ|real-prion-prpc]] a las semillas [[PrPˢᶜ|real-prion-piribs]] en la superficie y endosomas',
          loop: 'La composición lipídica y el colesterol modulan tanto la señalización fisiológica como la cinética de conversión priónica'
        },
        scientific:
          'Microdominio neuronal líquido-ordenado (Lo) de la [[membrana plasmática|plasma-membrane]] (parches laterales de ~10–200 nm ricos en [[colesterol|cholesterol]], glicoesfingolípidos y [[fosfolípidos|phospholipid]] saturados). Concentra [[PrPᶜ|real-prion-prpc]] nativa (PDB 1QLX) anclada por GPI en la cara exoplasmática, actuando como plataforma fisiológica de señalización y principal interfaz donde las semillas [[PrPˢᶜ|real-prion-piribs]] capturan nuevos monómeros.',
        from: [
          { nodeId: 'cholesterol', label: 'Colesterol y esfingolípidos', cargo: 'Empaquetado líquido-ordenado' },
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática neuronal', cargo: 'Hemicapa superficial externa' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Reserva concentrada de PrPᶜ', cargo: 'Sustrato nativo anclado por GPI' },
          { nodeId: 'real-prion', label: 'Interfaz de conversión', cargo: 'Zona de encuentro semilla–sustrato' }
        ]
      }
    },

    gpi_anchor: {
      en: {
        subtitle: 'C-Terminal Glycosylphosphatidylinositol (GPI) Anchor',
        simple:
          'Instead of piercing all the way across the [[plasma membrane|plasma-membrane]], healthy [[PrPc|real-prion-prpc]] hangs from the outside of the neuron by this short glycolipid tether plugged into the outer lipid layer.',
        story:
          'Inside the neuronal endoplasmic reticulum, a cellular transamidase clips off the hydrophobic C-terminal signal peptide of freshly made PrP and welds a glycosylphosphatidylinositol (GPI) anchor directly onto serine 230. Its two saturated fatty tails sink smoothly into the outer leaflet of [[cholesterol|cholesterol]]-rich lipid rafts, allowing [[PrPc|real-prion-prpc]] to glide laterally along the neuron surface - and allowing ADAM10 proteases to shed soluble anchorless PrPc, or permitting GPI-tethered fibrils to tug and distort neuronal membranes during disease.',
        blueprint: {
          role: 'Outer-leaflet glycolipid tether anchoring C-terminal Ser230 of PrP to neuronal lipid rafts',
          arrivesFrom: 'Post-translational ER glycolipid transfer combining phosphatidylinositol [[phospholipids|phospholipid]], glycan core, and ethanolamine-[[phosphate|phosphate]]',
          inside: 'Two saturated lipid chains embedded strictly in the outer bilayer leaflet linked via glycan bridge to PrP residue 230',
          deliversTo: 'Confines soluble [[PrPc|real-prion-prpc]] to lipid rafts and projects outward from converted [[PrPsc|real-prion-piribs]] fibril flanks',
          loop: 'Retained on converted PrPsc monomers unless shed, linking amyloid fibril buildup directly to neuronal membrane disruption'
        },
        scientific:
          'C-terminal glycosylphosphatidylinositol (GPI) glycolipid anchor covalently attached via ethanolamine-[[phosphate|phosphate]] to mature residue Ser230 of mammalian [[PrPc|real-prion-prpc]] (conserved across [[PrPsc|real-prion-piribs]] cryo-EM models PDB 7LNA / 7TD6, projecting outside the cross-beta core). Saturated acyl chains partition selectively into outer-leaflet [[cholesterol|cholesterol]]/sphingolipid rafts without spanning the inner cytoplasmic leaflet.',
        from: [
          { nodeId: 'phospholipid', label: 'Phosphatidylinositol Tails', cargo: 'Outer-leaflet lipid insertion' },
          { nodeId: 'sugar', label: 'GPI Glycan Bridge', cargo: 'Carbohydrate-ethanolamine linker' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Tethered Cellular PrPc', cargo: 'Mobile surface raft localization' },
          { nodeId: 'real-prion', label: 'Fibril-Membrane Coupling', cargo: 'Membrane stress during amyloid growth' }
        ]
      },
      es: {
        subtitle: 'Anclaje C-terminal de glicosilfosfatidilinositol (GPI)',
        simple:
          'En lugar de atravesar por completo la [[membrana plasmática|plasma-membrane]], la proteína sana [[PrPᶜ|real-prion-prpc]] cuelga de la cara externa neuronal mediante esta corta correa glucolipídica insertada solo en la capa lipídica exterior.',
        story:
          'En el retículo endoplásmico neuronal, una transamidasa recorta el péptido señal C-terminal de la PrP recién fabricada y une un anclaje de glicosilfosfatidilinositol (GPI) a la serina 230. Sus dos colas grasas saturadas se hunden en la hemicapa externa de las balsas de [[colesterol|cholesterol]], permitiendo que [[PrPᶜ|real-prion-prpc]] se deslice lateralmente sobre la neurona y que las fibrillas convertidas permanezcan acopladas a la membrana durante el daño patológico.',
        blueprint: {
          role: 'Correa glucolipídica de la hemicapa externa que fija el extremo C-terminal Ser230 de PrP a balsas neuronales',
          arrivesFrom: 'Transferencia postraduccional en el RE que une [[fosfolípidos|phospholipid]] de fosfatidilinositol, núcleo glicano y etanolamina-[[fosfato|phosphate]]',
          inside: 'Dos cadenas acilo saturadas insertadas solo en la hemicapa externa enlazadas por puente glicano al residuo 230',
          deliversTo: 'Confinamiento de [[PrPᶜ|real-prion-prpc]] en balsas lipídicas y proyección lateral hacia el exterior en [[PrPˢᶜ|real-prion-piribs]]',
          loop: 'Se conserva en muchos monómeros convertidos de PrPˢᶜ, acoplando el crecimiento amiloide a la deformación membranosa'
        },
        scientific:
          'Anclaje glucolipídico C-terminal de glicosilfosfatidilinositol (GPI) unido covalentemente vía etanolamina-[[fosfato|phosphate]] al residuo maduro Ser230 de [[PrPᶜ|real-prion-prpc]] (conservado hacia el exterior del núcleo cross-β en modelos crio-EM de [[PrPˢᶜ|real-prion-piribs]], PDB 7LNA / 7TD6). Sus cadenas acilo saturadas se particionan en balsas de [[colesterol|cholesterol]] y esfingolípidos sin cruzar la hemicapa interna.',
        from: [
          { nodeId: 'phospholipid', label: 'Colas de fosfatidilinositol', cargo: 'Inserción en hemicapa externa' },
          { nodeId: 'sugar', label: 'Puente glicano del GPI', cargo: 'Enlace carbohidrato–etanolamina' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'PrPᶜ anclada a balsa', cargo: 'Localización móvil en superficie' },
          { nodeId: 'real-prion', label: 'Acoplamiento fibrilla–membrana', cargo: 'Tensión lipídica por amiloides' }
        ]
      }
    },

    prpc: {
      en: {
        subtitle: 'Native Soluble Cellular Prion Protein PrPc (NMR PDB 1QLX)',
        simple:
          'This compact, water-soluble [[protein|protein]] is the healthy form of prion protein produced naturally by every mammalian brain. Built of three neat [[alpha-helices|alpha-helix]], it carries zero [[DNA|dna]] and zero [[RNA|rna]] - and serves as the exact raw material hijacked by [[PrPsc|real-prion]].',
        story:
          'Resolved in solution by nuclear magnetic resonance (PDB 1QLX), native cellular [[PrPc|real-prion-prpc]] looks nothing like a destructive fibril. Its flexible N-terminal tail coordinates copper ions ahead of a tidy ~4-by-3-nanometer globular C-terminal domain packed with three alpha-helices, two branching N-glycans, and one Cys179-Cys214 [[disulfide|atom-s]] staple. Completely sensitive to cellular proteases and harmless on its own, this same 208-residue chain requires zero genetic mutations to become lethal - only an encounter with a misfolded [[PrPsc|real-prion-piribs]] template.',
        blueprint: {
          role: 'Benign endogenous alpha-helical monomer (~208 aa; residues 23-230) serving as mandatory fuel for prion propagation',
          arrivesFrom: 'Host nuclear PRNP gene translated by neuronal [[80S ribosomes|ribosome]] and trafficked to outer lipid rafts',
          inside: 'Globular C-terminal domain (PDB 1QLX) of three [[alpha-helices|alpha-helix]] (H1-H3), short beta1-beta2 ribbon, Cys179-Cys214 [[S-S|atom-s]], and two N-glycans',
          deliversTo: 'Normal myelin/synaptic support under healthy physiology, or refolds monomer-by-monomer onto active [[PrPsc|real-prion-piribs]] ends',
          loop: 'Animals engineered without endogenous PrPc cannot propagate prions, proving PrPsc strictly converts host-made PrPc'
        },
        scientific:
          'Native monomeric mammalian cellular prion [[protein|protein]] ([[PrPc|real-prion-prpc]]; mature human residues 23-230, ~208 [[amino acids|amino-acid]], ~23 kDa unglycosylated; solution NMR globular fold PDB 1QLX, ~4 x 3 nm). Rich in [[alpha-helix|alpha-helix]] (~42% alpha, ~3% beta), detergent-soluble, and fully digested by proteinase K; shares 100% identical covalent primary sequence with pathogenic [[PrPsc|real-prion-piribs]] (PDB 7LNA / 7TD6).',
        from: [
          { nodeId: 'ribosome', label: 'Neuronal 80S Ribosomes', cargo: 'Host PRNP gene translation' },
          { nodeId: 'alpha-helix', label: 'Native H1-H3 Helical Fold', cargo: 'Soluble 1QLX conformation' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Cellular PrPc Node', cargo: 'Healthy monomer architecture' },
          { nodeId: 'real-prion-piribs', label: 'Templated Conversion Substrate', cargo: 'Fuel for cross-beta elongation' }
        ]
      },
      es: {
        subtitle: 'Proteína priónica celular nativa soluble PrPᶜ (RMN PDB 1QLX)',
        simple:
          'Esta [[proteína|protein]] compacta y soluble en agua es la forma sana de la proteína priónica fabricada por todo cerebro mamífero. Formada por tres [[hélices α|alpha-helix]], carece de [[ADN|dna]] y [[ARN|rna]] y sirve de materia prima exacta para [[PrPˢᶜ|real-prion]].',
        story:
          'Resuelta en disolución por resonancia magnética nuclear (PDB 1QLX), la [[PrPᶜ|real-prion-prpc]] nativa no guarda parecido alguno con una fibrilla patógena. Su cola N-terminal flexible coordina cobre delante de un dominio globular C-terminal de ~4 × 3 nm con tres hélices α, dos N-glicanos ramificados y el puente [[disulfuro|atom-s]] Cys179–Cys214. Completamente digerible por proteasas celulares e inocua por sí sola, esta misma cadena de 208 residuos no requiere ninguna mutación genética para volverse letal: basta tocar un molde [[PrPˢᶜ|real-prion-piribs]].',
        blueprint: {
          role: 'Monómero endógeno benigno rico en hélices α (~208 aa; residuos 23–230) indispensable como sustrato priónico',
          arrivesFrom: 'Gen nuclear celular PRNP traducido por [[ribosomas 80S|ribosome]] neuronales y enviado a balsas lipídicas',
          inside: 'Dominio globular C-terminal (PDB 1QLX) con tres [[hélices α|alpha-helix]] (H1–H3), cinta β1–β2, puente [[S–S|atom-s]] Cys179–Cys214 y dos N-glicanos',
          deliversTo: 'Mantenimiento sináptico y de mielina en salud, o replegamiento monómero a monómero sobre extremos activos de [[PrPˢᶜ|real-prion-piribs]]',
          loop: 'Los animales sin gen PRNP endógeno son inmunes a priones, demostrando que PrPˢᶜ solo convierte PrPᶜ propia del hospedador'
        },
        scientific:
          '[[Proteína|protein]] priónica celular monomérica nativa de mamíferos ([[PrPᶜ|real-prion-prpc]]; secuencia humana madura residuos 23–230, ~208 [[aminoácidos|amino-acid]], ~23 kDa sin glucanos; plegamiento globular RMN PDB 1QLX, ~4 × 3 nm). Rica en [[hélice α|alpha-helix]] (~42 % α, ~3 % β), soluble en detergentes y sensible a proteinasa K; comparte exactamente la misma secuencia primaria covalente que [[PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6).',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S neuronales', cargo: 'Traducción del gen PRNP propio' },
          { nodeId: 'alpha-helix', label: 'Plegamiento nativo H1–H3', cargo: 'Conformación soluble 1QLX' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'PrPᶜ celular', cargo: 'Arquitectura del monómero sano' },
          { nodeId: 'real-prion-piribs', label: 'Sustrato de conversión', cargo: 'Combustible para el crecimiento β' }
        ]
      }
    },

    helices_h123: {
      en: {
        subtitle: 'Native Alpha-Helices H1, H2 & H3 (PDB 1QLX Core)',
        simple:
          'Three neatly coiled [[alpha-helices|alpha-helix]] - H1, H2, and H3 - form the stable core of healthy [[PrPc|real-prion-prpc]]. During prion infection, all three spirals completely unwind and flatten into stacked [[beta-sheet|beta-sheet]] layers without breaking a single peptide bond.',
        story:
          'In the native solution structure of [[PrPc|real-prion-prpc]] (PDB 1QLX), helices H2 and H3 lean together into a long antiparallel V stapled at their middle by the Cys179-Cys214 [[disulfide|atom-s]] bridge, while short hydrophilic helix H1 perches beside them. That intramolecular hydrogen-bonded helical fold keeps the protein comfortably water-soluble. Yet once captured by an exposed [[PrPsc|real-prion-piribs]] tip, every helical turn unzips completely and extends into intermolecular cross-beta strands - one of the most dramatic secondary-structure transformations known in biology.',
        blueprint: {
          role: 'Three-helix globular scaffold of soluble PrPc that undergoes wholesale alpha-to-beta refolding during conversion',
          arrivesFrom: 'Co-translational folding of mature residues ~144-226 of the neuronal [[polypeptide|polypeptide]] inside the ER',
          inside: 'Helix H1 (residues ~144-154), Helix H2 (~173-194), and Helix H3 (~200-226) pinned internally by Cys179-Cys214 [[S-S|atom-s]]',
          deliversTo: 'Unravels completely upon fibril-tip docking to supply the extended backbone chains of the [[PIRIBS|real-prion-piribs]] beta-arches',
          loop: 'Intramolecular i to i+4 alpha-helical H-bonds swap entirely for intermolecular 4.8 A vertical cross-beta H-bonds'
        },
        scientific:
          'Native three-helix globular bundle of cellular [[PrPc|real-prion-prpc]] (PDB 1QLX: H1 residues 144-154, H2 residues 173-194, H3 residues 200-226; ~42% [[alpha-helix|alpha-helix]] content). H2 and H3 are covalently cross-linked by the intramolecular Cys179-Cys214 [[disulfide|atom-s]] bond. Near-atomic cryo-EM structures of [[PrPsc|real-prion-piribs]] (PDB 7LNA / 7TD6) prove that all three helices completely dissolve into parallel in-register [[beta-sheet|beta-sheet]] arches upon templated conversion.',
        from: [
          { nodeId: 'alpha-helix', label: 'Intramolecular Alpha-Helices', cargo: 'i to i+4 helical H-bonds' },
          { nodeId: 'polypeptide', label: 'PrP Residues 144-226', cargo: 'Conserved C-terminal chain' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Soluble PrPc Globe', cargo: 'Healthy protease-sensitive state' },
          { nodeId: 'beta-sheet', label: 'Wholesale Alpha -> Beta Refold', cargo: 'Conversion into PIRIBS rungs' }
        ]
      },
      es: {
        subtitle: 'Hélices α nativas H1, H2 y H3 (núcleo PDB 1QLX)',
        simple:
          'Tres [[hélices α|alpha-helix]] ordenadas —H1, H2 y H3— forman el corazón estable de la [[PrPᶜ|real-prion-prpc]] sana. Durante la infección priónica, las tres espirales se desenrollan por completo y se aplanan en capas apiladas de [[lámina β|beta-sheet]] sin romper ni un enlace peptídico.',
        story:
          'En la estructura nativa de [[PrPᶜ|real-prion-prpc]] (PDB 1QLX), las hélices H2 y H3 forman una larga horquilla antiparalela grapada en su centro por el puente [[disulfuro|atom-s]] Cys179–Cys214, mientras la breve hélice H1 se apoya a un costado. Ese plegamiento helicoidal con puentes de hidrógeno intramoleculares mantiene a la proteína soluble. Al acoplarse a un extremo activo de [[PrPˢᶜ|real-prion-piribs]], cada giro helicoidal se desarma para estirarse en hebras β intermoleculares: una de las remodelaciones estructurales más drásticas de la biología.',
        blueprint: {
          role: 'Haz globular de tres hélices de PrPᶜ soluble que sufre una conversión total α → β durante el contagio',
          arrivesFrom: 'Plegamiento en el RE de los residuos maduros ~144–226 del [[polipéptido|polypeptide]] neuronal',
          inside: 'Hélice H1 (~144–154), Hélice H2 (~173–194) y Hélice H3 (~200–226) sujetas por el puente [[S–S|atom-s]] Cys179–Cys214',
          deliversTo: 'Se despliega por completo al acoplarse a la fibrilla aportando el esqueleto extendido de los arcos β [[PIRIBS|real-prion-piribs]]',
          loop: 'Los enlaces H intramoleculares i→i+4 de hélice α se sustituyen íntegramente por puentes H intermoleculares β cada 4,8 Å'
        },
        scientific:
          'Haz globular nativo de tres hélices de [[PrPᶜ|real-prion-prpc]] (PDB 1QLX: H1 residuos 144–154, H2 residuos 173–194, H3 residuos 200–226; ~42 % de [[hélice α|alpha-helix]]). H2 y H3 quedan unidas por el [[disulfuro|atom-s]] intramolecular Cys179–Cys214. Las estructuras crio-EM de [[PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6) confirman la disolución total de H1–H3 en arcos de [[lámina β|beta-sheet]] paralela en registro.',
        from: [
          { nodeId: 'alpha-helix', label: 'Hélices α intramoleculares', cargo: 'Puentes H helicoidales i→i+4' },
          { nodeId: 'polypeptide', label: 'Residuos 144–226 de PrP', cargo: 'Cadena C-terminal conservada' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Dominio globular PrPᶜ', cargo: 'Estado sano sensible a proteasas' },
          { nodeId: 'beta-sheet', label: 'Replegamiento total α → β', cargo: 'Conversión en peldaños PIRIBS' }
        ]
      }
    },

    beta_ribbon: {
      en: {
        subtitle: 'Short Native Antiparallel Beta-Ribbon (beta1-beta2)',
        simple:
          'Tucked against the three [[alpha-helices|alpha-helix]] of healthy [[PrPc|real-prion-prpc]], this tiny two-stranded [[beta-sheet|beta-sheet]] ribbon makes up only 3% of the normal fold - yet its flexible beta2-alpha2 loop acts as a crucial conformational hinge during prion misfolding.',
        story:
          'Even in its benign native state (PDB 1QLX), [[PrPc|real-prion-prpc]] already carries a miniature two-strand antiparallel [[beta-sheet|beta-sheet]] (beta1 and beta2) pressed snugly against helix H1. Biophysical studies show that the adjacent beta2-alpha2 loop acts like a species-barrier gatekeeper: subtle single-amino-acid variations right around this tiny ribbon dictate whether a prion strain from one mammal can easily dock onto and convert another species PrPc.',
        blueprint: {
          role: 'Native two-strand antiparallel beta-sheet flank and species-barrier conformational hinge on healthy PrPc',
          arrivesFrom: 'Short extended segments beta1 (residues ~128-131) and beta2 (~161-164) flanking helix H1 in PDB 1QLX',
          inside: 'Compact antiparallel two-strand [[beta-sheet|beta-sheet]] plus the conformationally sensitive beta2-alpha2 loop',
          deliversTo: 'Provides an early edge-strand nucleation hinge during docking onto pathogenic [[PrPsc|real-prion-piribs]] seeds',
          loop: 'Sequence polymorphisms in the beta2-alpha2 loop strongly control cross-species prion transmission barriers'
        },
        scientific:
          'Native short antiparallel [[beta-sheet|beta-sheet]] ribbon (beta1 residues 128-131, beta2 residues 161-164; ~3% total beta content) packing alongside helices H1-H3 in soluble [[PrPc|real-prion-prpc]] (PDB 1QLX). The immediately trailing beta2-alpha2 loop (residues ~165-172) displays pronounced conformational plasticity and governs interspecies transmission barriers by modulating early docking onto [[PrPsc|real-prion-piribs]] fibril templates.',
        from: [
          { nodeId: 'beta-sheet', label: 'Short Native Beta-Strands', cargo: 'Antiparallel beta1-beta2 pair' },
          { nodeId: 'real-prion-prpc', label: 'PrPc Globular Flank', cargo: 'beta2-alpha2 hinge loop' }
        ],
        to: [
          { nodeId: 'real-prion-piribs', label: 'Initiation Hinge', cargo: 'Early cross-beta unfolding point' },
          { nodeId: 'real-prion', label: 'Species-Barrier Modulation', cargo: 'Strain docking compatibility' }
        ]
      },
      es: {
        subtitle: 'Cinta β antiparalela nativa corta (β1–β2)',
        simple:
          'Adosada a las tres [[hélices α|alpha-helix]] de [[PrPᶜ|real-prion-prpc]] sana, esta diminuta cinta de [[lámina β|beta-sheet]] de dos hebras supone apenas un 3 % del plegamiento normal, pero su bucle β2–α2 actúa como bisagra decisiva al iniciarse el mal plegamiento.',
        story:
          'Incluso en su estado benigno (PDB 1QLX), [[PrPᶜ|real-prion-prpc]] ya contiene una diminuta [[lámina β|beta-sheet]] antiparalela de dos hebras (β1 y β2) pegada a la hélice H1. Los estudios estructurales demuestran que el bucle vecino β2–α2 funciona como guardián de la barrera de especie: variaciones mínimas de un solo aminoácido en esta zona deciden si una cepa priónica de un mamífero logra acoplarse y convertir a la PrPᶜ de otra especie.',
        blueprint: {
          role: 'Flanco β antiparalelo nativo de dos hebras y bisagra conformacional clave para la barrera de especie',
          arrivesFrom: 'Tramos cortos extendidos β1 (~residuos 128–131) y β2 (~161–164) flanqueando la hélice H1 en PDB 1QLX',
          inside: 'Pequeña [[lámina β|beta-sheet]] antiparalela más el bucle β2–α2 de gran sensibilidad conformacional',
          deliversTo: 'Ofrece una bisagra temprana de nucleación al acoplarse sobre semillas patógenas de [[PrPˢᶜ|real-prion-piribs]]',
          loop: 'Los polimorfismos en el bucle β2–α2 regulan intensamente la transmisión priónica entre especies'
        },
        scientific:
          'Cinta nativa corta de [[lámina β|beta-sheet]] antiparalela (β1 residuos 128–131, β2 residuos 161–164; ~3 % de contenido β total) junto a las hélices H1–H3 en [[PrPᶜ|real-prion-prpc]] soluble (PDB 1QLX). El bucle contiguo β2–α2 (~residuos 165–172) presenta notable plasticidad conformacional y gobierna las barreras de transmisión entre especies al regular el acoplamiento inicial al molde [[PrPˢᶜ|real-prion-piribs]].',
        from: [
          { nodeId: 'beta-sheet', label: 'Hebras β nativas cortas', cargo: 'Par antiparalelo β1–β2' },
          { nodeId: 'real-prion-prpc', label: 'Flanco globular de PrPᶜ', cargo: 'Bucle bisagra β2–α2' }
        ],
        to: [
          { nodeId: 'real-prion-piribs', label: 'Bisagra de iniciación', cargo: 'Punto temprano de despliegue' },
          { nodeId: 'real-prion', label: 'Modulación de barrera de especie', cargo: 'Compatibilidad de cepas' }
        ]
      }
    },

    nglycans: {
      en: {
        subtitle: 'Complex N-Linked Glycan Trees (Asn181 & Asn197)',
        simple:
          'Two bushy [[sugar|sugar]] branches sprout from residues Asn181 and Asn197 on both healthy [[PrPc|real-prion-prpc]] and misfolded [[PrPsc|real-prion-piribs]]. After conversion, these bulky trees flare outward from the fibril sides, shielding the amyloid core and shaping distinct prion strains.',
        story:
          'Before [[PrPc|real-prion-prpc]] ever reaches the neuronal surface, enzymes in the Golgi apparatus attach complex sialylated carbohydrate trees onto up to two asparagine sites (Asn181 and Asn197), creating unglycosylated, monoglycosylated, and diglycosylated versions of the exact same [[polypeptide|polypeptide]]. When monomers stack every 4.8 angstroms inside a [[PrPsc|real-prion-piribs]] fibril, those bulky branched [[sugars|sugar]] cannot fit inside the tight dry core; they sweep outward like dense protective plumes that sterically dictate which glycoforms fit each prion strain.',
        blueprint: {
          role: 'Bulky outer carbohydrate plumes modulating prion strain glycoform ratios and shielding fibril flanks',
          arrivesFrom: 'ER/Golgi N-glycosylation adding complex branched [[sugar|sugar]] chains to Asn181 and Asn197 on [[PrPc|real-prion-prpc]]',
          inside: 'Negatively charged sialylated bi-, tri-, and tetra-antennary N-glycans projecting outward from the 4.8 A [[PIRIBS|real-prion-piribs]] stacks',
          deliversTo: 'Imposes steric selection between un-, mono-, and diglycosylated PrP monomers and helps deflect host proteases',
          loop: 'Distinct prion strains show reproducible glycoform fingerprints determined by steric crowding along the fibril exterior'
        },
        scientific:
          'Complex sialylated N-linked oligosaccharide chains ([[sugar|sugar]] trees, ~3-5 kDa each) covalently attached to Asn181 and Asn197 (human numbering; Asn180/Asn196 in rodent) of [[PrPc|real-prion-prpc]] and retained on [[PrPsc|real-prion-piribs]] fibrils (cryo-EM density resolved radiating externally in PDB 7LNA / 7TD6). Steric and electrostatic crowding of stacked glycans at 4.8 A intervals modulates fibril twist, strain-specific glycoform ratios, and immune/protease shielding.',
        from: [
          { nodeId: 'sugar', label: 'Complex Oligosaccharides', cargo: 'Sialylated branched glycan trees' },
          { nodeId: 'real-prion-prpc', label: 'Asn181 & Asn197 Sites', cargo: 'Dual N-glycosylation anchors' }
        ],
        to: [
          { nodeId: 'real-prion-piribs', label: 'Outer Fibril Glycan Plume', cargo: 'Steric core shielding' },
          { nodeId: 'real-prion', label: 'Strain Glycoform Signature', cargo: 'Distinct biochemical prion strains' }
        ]
      },
      es: {
        subtitle: 'Árboles complejos de N-glicanos (Asn181 y Asn197)',
        simple:
          'Dos frondosas ramas de [[azúcares|sugar]] brotan en los residuos Asn181 y Asn197 tanto en la [[PrPᶜ|real-prion-prpc]] sana como en la [[PrPˢᶜ|real-prion-piribs]] patógena. Tras la conversión, sobresalen hacia los costados de la fibrilla, protegiendo el núcleo y definiendo distintas cepas.',
        story:
          'Antes de llegar a la superficie neuronal, el aparato de Golgi añade complejos árboles de carbohidratos sialilados en hasta dos asparaginas (Asn181 y Asn197), produciendo formas sin glucanos, mono- y diglicosiladas del mismo [[polipéptido|polypeptide]]. Al apilarse los monómeros cada 4,8 Å en una fibrilla [[PrPˢᶜ|real-prion-piribs]], esos voluminosos [[azúcares|sugar]] no caben en el estrecho núcleo seco y se proyectan hacia fuera como penachos densos que seleccionan estéricamente qué glicoformas encajan en cada cepa.',
        blueprint: {
          role: 'Penachos externos de carbohidratos que modulan el perfil de glicoformas de cepa y blindan los flancos fibrilares',
          arrivesFrom: 'N-glicosilación en RE y Golgi que acopla cadenas ramificadas de [[azúcar|sugar]] en Asn181 y Asn197 de [[PrPᶜ|real-prion-prpc]]',
          inside: 'N-glicanos sialilados cargados negativamente proyectados al exterior desde las pilas [[PIRIBS|real-prion-piribs]] cada 4,8 Å',
          deliversTo: 'Impone selección estérica entre monómeros no, mono- y diglicosilados y dificulta el acceso de proteasas',
          loop: 'Cada cepa priónica exhibe una proporción reproducible de glicoformas dictada por el apiñamiento externo de la fibrilla'
        },
        scientific:
          'Cadenas oligosacáridas complejas sialiladas unidas por enlace N (árboles de [[azúcares|sugar]] de ~3–5 kDa cada uno) en Asn181 y Asn197 (numeración humana; Asn180/Asn196 en roedores) de [[PrPᶜ|real-prion-prpc]], conservadas hacia el exterior en fibrillas [[PrPˢᶜ|real-prion-piribs]] (densidades crio-EM radiales en PDB 7LNA / 7TD6). Su apiñamiento estérico y electrostático a intervalos de 4,8 Å influye en la torsión fibrilar, las proporciones de glicoformas y la evasión proteolítica.',
        from: [
          { nodeId: 'sugar', label: 'Oligosacáridos complejos', cargo: 'Árboles glicánicos sialilados' },
          { nodeId: 'real-prion-prpc', label: 'Sitios Asn181 y Asn197', cargo: 'Anclajes dobles de N-glicosilación' }
        ],
        to: [
          { nodeId: 'real-prion-piribs', label: 'Penacho glicánico externo', cargo: 'Blindaje estérico del núcleo' },
          { nodeId: 'real-prion', label: 'Firma de glicoformas de cepa', cargo: 'Identidad bioquímica de cepas' }
        ]
      }
    },

    disulfide: {
      en: {
        subtitle: 'Conserved Intramolecular Cys179-Cys214 Disulfide Bridge',
        simple:
          'A single covalent [[sulfur|atom-s]]-to-[[sulfur|atom-s]] bridge staples cysteine 179 to cysteine 214 inside both healthy [[PrPc|real-prion-prpc]] and deadly [[PrPsc|real-prion-piribs]]. Even as the helices completely flatten into beta-sheets, this golden atomic lock never breaks.',
        story:
          'Formed by oxidizing enzymes in the neuronal endoplasmic reticulum, the ~2.05-angstrom covalent [[S-S|atom-s]] bond between Cys179 and Cys214 pins helices H2 and H3 together across healthy [[PrPc|real-prion-prpc]] (PDB 1QLX). When infectious brain fibrils were finally solved by cryo-EM (PDB 7LNA and 7TD6), scientists saw that the exact same intramolecular disulfide stays completely intact inside every 4.8-angstrom rung, anchoring the hairpin base of the C-terminal disulfide beta-arch right at the core of pathogenic [[PrPsc|real-prion-piribs]].',
        blueprint: {
          role: 'Permanent covalent S-S intramolecular staple preserved across the entire alpha-to-beta prion fold transition',
          arrivesFrom: 'Oxidative ER pairing of thiol (-SH) side chains from Cys179 and Cys214 [[amino acids|amino-acid]] containing [[sulfur|atom-s]]',
          inside: 'Single ~2.05 A covalent S-S disulfide bond linking H2-H3 in [[PrPc|real-prion-prpc]] and anchoring the C-terminal beta-arch in [[PrPsc|real-prion-piribs]]',
          deliversTo: 'Constrains chain topology so refolded monomers close into the signature double-arch [[PIRIBS|real-prion-piribs]] cross-section',
          loop: 'Demonstrates that prion conversion requires zero covalent bond breakage - strictly non-covalent shape refolding'
        },
        scientific:
          'Conserved single intramolecular covalent disulfide bridge between Cys179 and Cys214 (human numbering; Cys178-Cys213 in mouse/hamster; [[S-S|atom-s]] bond length ~2.05 A). Cross-links helices H2 and H3 in native [[PrPc|real-prion-prpc]] (PDB 1QLX) and persists unreduced within every monomer rung of cryo-EM [[PrPsc|real-prion-piribs]] fibrils (PDB 7LNA / 7TD6), anchoring the base of the central disulfide [[beta-sheet|beta-sheet]] arch.',
        from: [
          { nodeId: 'atom-s', label: 'Cysteine Sulfur Atoms (S-S)', cargo: '2.05 A covalent disulfide bond' },
          { nodeId: 'amino-acid', label: 'Cys179 & Cys214 Residues', cargo: 'Oxidized thiol side chains' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'H2-H3 Helical Staple', cargo: 'Native PrPc domain lock' },
          { nodeId: 'real-prion-piribs', label: 'Disulfide Beta-Arch Base', cargo: 'Preserved core fibril anchor' }
        ]
      },
      es: {
        subtitle: 'Puente disulfuro intramolecular conservado Cys179–Cys214',
        simple:
          'Un único enlace covalente entre dos átomos de [[azufre|atom-s]] grapa la cisteína 179 con la cisteína 214 tanto en [[PrPᶜ|real-prion-prpc]] sana como en [[PrPˢᶜ|real-prion-piribs]] patógena. Incluso cuando las hélices se aplanan por completo, este cierre atómico nunca se rompe.',
        story:
          'Forjado por enzimas oxidantes en el retículo endoplásmico neuronal, el enlace covalente [[S–S|atom-s]] de ~2,05 Å entre Cys179 y Cys214 sujeta entre sí las hélices H2 y H3 en la [[PrPᶜ|real-prion-prpc]] nativa (PDB 1QLX). Cuando la crio-EM resolvió fibrillas cerebrales infecciosas (PDB 7LNA y 7TD6), reveló que exactamente el mismo puente disulfuro permanece intacto en cada peldaño de 4,8 Å, cerrando la base del arco β C-terminal dentro del núcleo de [[PrPˢᶜ|real-prion-piribs]].',
        blueprint: {
          role: 'Grapa covalente intramolecular S–S conservada intacta durante toda la transición priónica α → β',
          arrivesFrom: 'Oxidación en el RE de los tioles (–SH) de los [[aminoácidos|amino-acid]] Cys179 y Cys214 portadores de [[azufre|atom-s]]',
          inside: 'Un enlace covalente S–S de ~2,05 Å que une H2–H3 en [[PrPᶜ|real-prion-prpc]] y fija el arco β C-terminal en [[PrPˢᶜ|real-prion-piribs]]',
          deliversTo: 'Restringe la topología de la cadena para cerrar el perfil de doble arco del núcleo [[PIRIBS|real-prion-piribs]]',
          loop: 'Prueba que la conversión priónica no rompe enlaces covalentes: es un replegamiento puramente no covalente'
        },
        scientific:
          'Puente disulfuro covalente intramolecular único y conservado entre Cys179 y Cys214 (numeración humana; Cys178–Cys213 en roedores; longitud [[S–S|atom-s]] ~2,05 Å). Une las hélices H2 y H3 en [[PrPᶜ|real-prion-prpc]] nativa (PDB 1QLX) y persiste intacto en cada peldaño monomérico de las fibrillas [[PrPˢᶜ|real-prion-piribs]] por crio-EM (PDB 7LNA / 7TD6), anclando la base del arco [[β|beta-sheet]] disulfuro central.',
        from: [
          { nodeId: 'atom-s', label: 'Átomos de azufre (S–S)', cargo: 'Enlace disulfuro covalente de 2,05 Å' },
          { nodeId: 'amino-acid', label: 'Residuos Cys179 y Cys214', cargo: 'Cadenas laterales tiol oxidadas' }
        ],
        to: [
          { nodeId: 'real-prion-prpc', label: 'Grapa helicoidal H2–H3', cargo: 'Fijación del dominio nativo PrPᶜ' },
          { nodeId: 'real-prion-piribs', label: 'Base del arco β disulfuro', cargo: 'Anclaje preservado en la fibrilla' }
        ]
      }
    },

    prpsc_fibril: {
      en: {
        subtitle: 'Pathogenic PrPsc Cross-Beta Amyloid Fibril (~13 nm Wide)',
        simple:
          'Towering like a twisted ribbon built purely from misfolded [[protein|protein]], this 13-nanometer [[PrPsc|real-prion]] amyloid fibril carries zero [[DNA|dna]] and zero [[RNA|rna]], resists digestive enzymes and heat, and converts every healthy [[PrPc|real-prion-prpc]] monomer that touches its tip.',
        story:
          'Modeled directly from near-atomic cryo-EM structures of infectious brain-derived fibrils (hamster 263K PDB 7LNA and mouse aRML PDB 7TD6), this helical filament shows the complete architectural contrast with soluble [[PrPc|real-prion-prpc]]. Hundreds to thousands of identical refolded PrP chains stack tightly into a single rigid ~13-nanometer cable with a gentle left-handed twist, projecting N-glycan plumes and GPI tethers outward while sealing protease-sensitive peptide bonds deep inside its water-free cross-beta interior.',
        blueprint: {
          role: 'Self-propagating ~13 nm protease-resistant amyloid filament encoding prion infectivity purely in 3D geometry',
          arrivesFrom: 'Templated addition of unfolded neuronal [[PrPc|real-prion-prpc]] monomers onto active fibril tips without nucleic acids',
          inside: 'Twisted cross-beta [[PIRIBS core|real-prion-piribs]] (PDB 7LNA / 7TD6) of stacked 4.8 A rungs locked by dry [[steric zippers|real-prion-zipper]]',
          deliversTo: 'Elongates continuously through neuronal tissue and shears via fragmentation into fresh infectious seeds',
          loop: 'Distinct fibril twists and arch geometries encode heritable prion strains strictly in protein shape rather than mutations'
        },
        scientific:
          'Infectious mammalian [[PrPsc|real-prion]] cross-[[beta-sheet|beta-sheet]] amyloid protofilament (~13 nm width, gentle left-handed helical twist ~100-150 nm crossover; near-atomic cryo-EM structures PDB 7LNA hamster 263K and PDB 7TD6 mouse aRML). Built solely from ~208-aa host-encoded PrP [[polypeptides|polypeptide]] (protease-K-resistant core ~residues 94-226; 0 [[DNA|dna]], 0 [[RNA|rna]]) stacked in [[PIRIBS|real-prion-piribs]] symmetry at 4.8 A axial pitch.',
        from: [
          { nodeId: 'real-prion-prpc', label: 'Captured PrPc Monomers', cargo: 'Host-synthesized PrP protein' },
          { nodeId: 'real-prion-piribs', label: 'PIRIBS Cross-Beta Core', cargo: 'PDB 7LNA & 7TD6 stack' }
        ],
        to: [
          { nodeId: 'real-prion', label: 'Infectious Prion Node', cargo: '0-gene protein-only propagation' },
          { nodeId: 'real-prion-zipper', label: 'Extreme Protease Resistance', cargo: 'Water-free steric-zipper armor' }
        ]
      },
      es: {
        subtitle: 'Fibrilla amiloide patógena PrPˢᶜ cross-β (~13 nm de ancho)',
        simple:
          'Alzándose como una cinta retorcida hecha únicamente de [[proteína|protein]] mal plegada, esta fibrilla amiloide [[PrPˢᶜ|real-prion]] de 13 nm carece de [[ADN|dna]] y [[ARN|rna]], resiste enzimas digestivas y convierte cada [[PrPᶜ|real-prion-prpc]] sana que toca su extremo.',
        story:
          'Modelada directamente a partir de estructuras crio-EM casi atómicas de fibrillas cerebrales infecciosas (hámster 263K PDB 7LNA y ratón aRML PDB 7TD6), este filamento helicoidal muestra el contraste absoluto frente a la [[PrPᶜ|real-prion-prpc]] soluble. Cientos o miles de cadenas idénticas replegadas se apilan en un cable rígido de ~13 nanómetros con suave torsión levógira, proyectando N-glicanos y anclajes GPI hacia el exterior mientras esconden los enlaces peptídicos dentro de un corazón cross-β sin agua.',
        blueprint: {
          role: 'Filamento amiloide autorreplicante de ~13 nm resistente a proteasas que codifica infectividad solo en forma 3D',
          arrivesFrom: 'Adición dirigida por molde de monómeros neuronales [[PrPᶜ|real-prion-prpc]] en extremos fibrilares sin ácidos nucleicos',
          inside: '[[Núcleo PIRIBS|real-prion-piribs]] cross-β helicoidal (PDB 7LNA / 7TD6) con peldaños cada 4,8 Å trabados por [[cremalleras estéricas|real-prion-zipper]]',
          deliversTo: 'Crece por el tejido neuronal y se parte por fragmentación multiplicando las semillas infecciosas activas',
          loop: 'Las distintas torsiones y arcos β codifican cepas priónicas heredables únicamente en geometría proteica'
        },
        scientific:
          'Protofilamento amiloide cross-[[β|beta-sheet]] infeccioso de mamíferos [[PrPˢᶜ|real-prion]] (~13 nm de anchura, torsión helicoidal levógira con paso de ~100–150 nm; crio-EM casi atómica PDB 7LNA hámster 263K y PDB 7TD6 ratón aRML). Formado exclusivamente por [[polipéptidos|polypeptide]] PrP del hospedador (núcleo resistente a proteinasa K ~residuos 94–226; 0 [[ADN|dna]], 0 [[ARN|rna]]) apilados en arquitectura [[PIRIBS|real-prion-piribs]] cada 4,8 Å.',
        from: [
          { nodeId: 'real-prion-prpc', label: 'Monómeros capturados de PrPᶜ', cargo: 'Proteína PrP del hospedador' },
          { nodeId: 'real-prion-piribs', label: 'Núcleo cross-β PIRIBS', cargo: 'Apilamiento PDB 7LNA y 7TD6' }
        ],
        to: [
          { nodeId: 'real-prion', label: 'Prión infeccioso', cargo: 'Propagación proteica sin genes' },
          { nodeId: 'real-prion-zipper', label: 'Resistencia extrema a proteasas', cargo: 'Blindaje de cremallera estérica seca' }
        ]
      }
    },

    piribs_core: {
      en: {
        subtitle: 'Parallel In-Register Intermolecular Beta-Sheet (PIRIBS) Core',
        simple:
          'Peering straight down the axis of a [[PrPsc fibril|real-prion]] reveals its [[PIRIBS architecture|real-prion-piribs]]: every refolded protein forms one flat serpentine rung where each amino acid sits directly on top of the exact same amino acid in the next molecule.',
        story:
          'Why can one misfolded protein force thousands of incoming copies to match its exact strain down to a single loop angle? Cryo-EM structures PDB 7LNA and 7TD6 gave the definitive answer: Parallel In-Register Intermolecular Beta-Sheets (PIRIBS). Instead of coiling into a multi-rung solenoid, each [[PrP|real-prion]] chain folds into a single planar cross-section composed of interlocking N-terminal and disulfide-anchored C-terminal [[beta-sheet|beta-sheet]] arches. Because residue 150 stacks directly over residue 150 and residue 200 over residue 200, the exposed top rung provides an exact residue-for-residue atomic blueprint for the next incoming monomer.',
        blueprint: {
          role: 'Single-layer-per-monomer PIRIBS cross-section enforcing exact residue-for-residue templated strain fidelity',
          arrivesFrom: 'Refolding of the protease-resistant core (~residues 94-226) of each incoming [[PrPc|real-prion-prpc]] monomer',
          inside: 'Planar zig-zag N-terminal and Cys179-Cys214 disulfide-anchored C-terminal [[beta-sheet|beta-sheet]] arches (PDB 7LNA / 7TD6)',
          deliversTo: 'Aligns identical amino acids vertically in continuous hydrophobic and polar stacks powering [[steric-zipper|real-prion-zipper]] locking',
          loop: 'Direct 1-to-1 vertical alignment explains why even a single amino-acid mismatch can create a strong prion species barrier'
        },
        scientific:
          'Parallel In-Register Intermolecular Beta-Sheet ([[PIRIBS|real-prion-piribs]]) core architecture resolved in infectious mammalian [[PrPsc|real-prion]] cryo-EM structures (PDB 7LNA hamster 263K; PDB 7TD6 mouse aRML). Each monomer spans a single ~4.8 A axial plane folded into conserved N-terminal middle and C-terminal Cys179-Cys214 disulfide-linked [[beta-sheet|beta-sheet]] arches (~residues 94-226), positioning identical side chains vertically in register along the fibril axis.',
        from: [
          { nodeId: 'beta-sheet', label: 'Refolded Beta-Arches', cargo: 'Planar serpentine PrP cross-section' },
          { nodeId: 'atom-s', label: 'Intact Cys179-Cys214 Bridge', cargo: 'Central C-terminal arch anchor' }
        ],
        to: [
          { nodeId: 'real-prion-piribs', label: 'PIRIBS Core Node', cargo: 'In-register strain fidelity' },
          { nodeId: 'real-prion-zipper', label: 'Stacked Dry Interfaces', cargo: 'Cooperative vertical packing' }
        ]
      },
      es: {
        subtitle: 'Núcleo PIRIBS (láminas β intermoleculares paralelas en registro)',
        simple:
          'Mirar a lo largo del eje de una [[fibrilla PrPˢᶜ|real-prion]] revela su [[arquitectura PIRIBS|real-prion-piribs]]: cada proteína replegada forma un peldaño plano en zigzag donde cada aminoácido queda justo encima del mismo aminoácido de la copia contigua.',
        story:
          '¿Cómo logra una proteína mal plegada imponer su cepa exacta hasta el último ángulo de bucle a miles de copias nuevas? Las estructuras crio-EM PDB 7LNA y 7TD6 dieron la clave definitiva: láminas β intermoleculares paralelas en registro (PIRIBS). Cada cadena de [[PrP|real-prion]] forma una única sección plana con arcos de [[lámina β|beta-sheet]] N- y C-terminales en torno al puente disulfuro. Al apilarse cada residuo exactamente encima de su homólogo del peldaño inferior, la cara superior expuesta dicta residuo a residuo el molde del siguiente monómero.',
        blueprint: {
          role: 'Sección plana PIRIBS de una sola capa por monómero que garantiza fidelidad de cepa residuo por residuo',
          arrivesFrom: 'Replegamiento del núcleo resistente a proteasas (~residuos 94–226) de cada monómero entrante de [[PrPᶜ|real-prion-prpc]]',
          inside: 'Arcos planos en zigzag de [[lámina β|beta-sheet]] N-terminal y C-terminal disulfuro (PDB 7LNA / 7TD6)',
          deliversTo: 'Alinea verticalmente aminoácidos idénticos en columnas hidrofóbicas y polares que sellan las [[cremalleras estéricas|real-prion-zipper]]',
          loop: 'El registro vertical 1 a 1 explica por qué un solo aminoácido distinto puede generar una fuerte barrera de especie'
        },
        scientific:
          'Arquitectura nuclear [[PIRIBS|real-prion-piribs]] (láminas β intermoleculares paralelas en registro) resuelta por crio-EM en [[PrPˢᶜ|real-prion]] infecciosa (PDB 7LNA hámster 263K; PDB 7TD6 ratón aRML). Cada monómero ocupa un único plano axial de ~4,8 Å plegado en arcos de [[lámina β|beta-sheet]] N-terminales y C-terminales unidos por el puente Cys179–Cys214 (~residuos 94–226), apilando cadenas laterales idénticas en registro vertical.',
        from: [
          { nodeId: 'beta-sheet', label: 'Arcos β replegados', cargo: 'Sección serpentina plana de PrP' },
          { nodeId: 'atom-s', label: 'Puente intacto Cys179–Cys214', cargo: 'Anclaje central del arco C-terminal' }
        ],
        to: [
          { nodeId: 'real-prion-piribs', label: 'Núcleo PIRIBS', cargo: 'Fidelidad de cepa en registro' },
          { nodeId: 'real-prion-zipper', label: 'Interfaces secas apiladas', cargo: 'Empaquetado vertical cooperativo' }
        ]
      }
    },

    beta_rungs: {
      en: {
        subtitle: 'Stacked 4.8-Angstrom Axial Cross-Beta Rungs',
        simple:
          'Stacked tightly perpendicular to the long [[PrPsc|real-prion]] fibril axis, every flattened [[protein|protein]] rung repeats at an exact spacing of 4.8 angstroms - less than half a nanometer - creating the diagnostic structural fingerprint of all amyloids.',
        story:
          'Long before cryo-EM resolved individual side chains, X-ray fiber diffraction revealed a razor-sharp 4.8-angstrom meridional reflection running along every infectious prion filament. That exact 0.48-nanometer pitch is the natural distance between parallel [[beta-sheet|beta-sheet]] strands linked edge-to-edge by continuous vertical backbone hydrogen bonds. Every time a new [[PrPc|real-prion-prpc]] monomer converts at the fibril tip, the filament grows by exactly 4.8 angstroms, stitching another locked cross-beta plate onto the towering stack.',
        blueprint: {
          role: 'Canonical 4.8 A (0.48 nm) axial repeat plates constructing the rigid cross-beta amyloid backbone',
          arrivesFrom: 'Sequential monomer-by-monomer refolding of docked [[PrPc|real-prion-prpc]] into flat [[PIRIBS|real-prion-piribs]] sheets',
          inside: 'Perpendicular extended [[beta-sheet|beta-sheet]] strands spaced exactly 4.8 A apart along the fibril axis and bridged by vertical amide H-bonds',
          deliversTo: 'Generates immense axial tensile strength, characteristic cross-beta diffraction, and a clean flat docking edge for the next monomer',
          loop: 'Over ~2,000 stacked rungs build a single 1-micrometer prion fibril from identical host-encoded protein copies'
        },
        scientific:
          'Perpendicular cross-[[beta-sheet|beta-sheet]] protofilament rungs repeating at the canonical axial pitch of 4.8 A (0.48 nm; ~2.08 rungs per nanometer) observed across [[PrPsc|real-prion-piribs]] cryo-EM reconstructions (PDB 7LNA / 7TD6). Each rung contributes ~130 residues in extended beta-strands linked by continuous intermolecular backbone N-H...O=C hydrogen bonds running strictly parallel to the fibril long axis.',
        from: [
          { nodeId: 'beta-sheet', label: 'Extended Beta-Strands', cargo: '0.48 nm inter-strand pitch' },
          { nodeId: 'real-prion-piribs', label: 'PIRIBS Monomer Plane', cargo: 'One refolded PrP per rung' }
        ],
        to: [
          { nodeId: 'real-prion-zipper', label: 'Axial Backbone H-Bond Ladder', cargo: 'Continuous 4.8 A vertical stitching' },
          { nodeId: 'real-prion', label: 'Rigid Macro-Scale Fibril', cargo: 'Cross-beta structural signature' }
        ]
      },
      es: {
        subtitle: 'Peldaños axiales cross-β apilados cada 4,8 Å',
        simple:
          'Apilados perpendicularmente al eje largo de la fibrilla [[PrPˢᶜ|real-prion]], cada peldaño aplanado de [[proteína|protein]] se repite exactamente cada 4,8 angstroms —menos de medio nanómetro—, formando la huella estructural de todo amiloide.',
        story:
          'Mucho antes de que la crio-EM resolviera las cadenas laterales, la difracción de rayos X mostró una nítida reflexión meridional de 4,8 Å en toda fibrilla priónica infecciosa. Ese paso exacto de 0,48 nanómetros es la distancia natural entre hebras de [[lámina β|beta-sheet]] paralelas cosidas por puentes de hidrógeno verticales del esqueleto peptídico. Cada vez que una nueva [[PrPᶜ|real-prion-prpc]] se convierte en la punta, la fibrilla se alarga exactamente 4,8 Å sumando una nueva placa rígida.',
        blueprint: {
          role: 'Placas axiales repetitivas cada 4,8 Å (0,48 nm) que edifican la columna rígida cross-β amiloide',
          arrivesFrom: 'Replegamiento secuencial monómero a monómero de [[PrPᶜ|real-prion-prpc]] acoplada en láminas [[PIRIBS|real-prion-piribs]]',
          inside: 'Hebras extendidas de [[lámina β|beta-sheet]] perpendiculares al eje fibrilar separadas 4,8 Å y cosidas por enlaces H verticales',
          deliversTo: 'Confiere alta resistencia axial, difracción cross-β diagnóstica y un borde plano listo para el siguiente monómero',
          loop: 'Alrededor de 2.000 peldaños apilados construyen una fibrilla de 1 micrómetro con copias idénticas de proteína del hospedador'
        },
        scientific:
          'Peldaños perpendiculares cross-[[β|beta-sheet]] con periodicidad axial canónica de 4,8 Å (0,48 nm; ~2,08 peldaños/nm) presentes en las reconstrucciones crio-EM de [[PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6). Cada peldaño aporta ~130 residuos en hebras β extendidas enlazadas por puentes de hidrógeno intermoleculares continuos N–H···O=C paralelos al eje fibrilar.',
        from: [
          { nodeId: 'beta-sheet', label: 'Hebras β extendidas', cargo: 'Paso entre hebras de 0,48 nm' },
          { nodeId: 'real-prion-piribs', label: 'Plano monomérico PIRIBS', cargo: 'Una PrP replegada por peldaño' }
        ],
        to: [
          { nodeId: 'real-prion-zipper', label: 'Escalera axial de puentes H', cargo: 'Costura vertical cada 4,8 Å' },
          { nodeId: 'real-prion', label: 'Fibrilla macroscópica rígida', cargo: 'Firma estructural cross-β' }
        ]
      }
    },

    steric_zipper: {
      en: {
        subtitle: 'Dry Interdigitating Steric-Zipper Side Chains',
        simple:
          'Between facing [[beta-sheet|beta-sheet]] walls inside the [[PrPsc core|real-prion-piribs]], neighboring [[amino-acid|amino-acid]] side chains mesh tightly together and squeeze out all [[water|water]]. These dry [[steric zippers|real-prion-zipper]] lock the misfolded shape so tightly that standard heat and proteases cannot undo it.',
        story:
          'Backbone hydrogen bonds stitch rungs vertically along the fibril, but horizontal strength comes from a completely dry molecular seam. Where two opposing beta-strands fold face to face inside the [[PIRIBS|real-prion-piribs]] arches, hydrophobic side chains (valine, isoleucine, leucine, methionine) and stacked polar ladders (asparagine, glutamine) interdigitate with sub-angstrom shape complementarity, expelling every trapped [[water|water]] molecule. That exclusion of water creates an extraordinarily deep thermodynamic trap that keeps [[PrPsc|real-prion]] locked indefinitely.',
        blueprint: {
          role: 'Water-excluded side-chain interlocking seam sealing facing beta-sheets into an irreversible amyloid core',
          arrivesFrom: 'Opposed hydrophobic and polar [[amino-acid|amino-acid]] side chains folded face-to-face across [[PIRIBS|real-prion-piribs]] beta-arches',
          inside: 'Tightly interdigitated nonpolar pockets and vertical Asn/Gln H-bond ladders (~8-11 A inter-sheet gap) completely devoid of [[water|water]]',
          deliversTo: 'Locks [[PrPsc|real-prion]] into a deep energy minimum immune to proteinase K, detergents, and ordinary sterilization',
          loop: 'Changes in which side chains zip together define distinct conformational prion strains from the exact same amino-acid sequence'
        },
        scientific:
          'Dry [[steric-zipper|real-prion-zipper]] interfaces (~8-11 A inter-sheet distance) joining mated [[beta-sheet|beta-sheet]] arches across the [[PrPsc PIRIBS core|real-prion-piribs]] (PDB 7LNA / 7TD6). Interdigitated nonpolar [[amino-acid|amino-acid]] side chains plus stacked polar asparagine/glutamine amide ladders exclude interfacial [[water|water]], generating dense van der Waals packing that accounts for detergent insolubility, thermal stability, and proteinase-K resistance.',
        from: [
          { nodeId: 'amino-acid', label: 'Interdigitated Side Chains', cargo: 'Hydrophobic & Asn/Gln ladders' },
          { nodeId: 'real-prion-piribs', label: 'Opposed PIRIBS Beta-Arches', cargo: 'Mated cross-beta walls' }
        ],
        to: [
          { nodeId: 'real-prion-zipper', label: 'Steric Zipper Node', cargo: 'Water-free thermodynamic lock' },
          { nodeId: 'real-prion', label: 'Protease-Resistant Core', cargo: 'Extreme environmental persistence' }
        ]
      },
      es: {
        subtitle: 'Cremalleras estéricas secas de cadenas laterales interdigitadas',
        simple:
          'Entre paredes enfrentadas de [[láminas β|beta-sheet]] en el [[núcleo PrPˢᶜ|real-prion-piribs]], las cadenas laterales de los [[aminoácidos|amino-acid]] encajan sin holgura y expulsan toda el [[agua|water]]. Estas [[cremalleras estéricas|real-prion-zipper]] sellan el pliegue frente al calor y las proteasas.',
        story:
          'Mientras los puentes de hidrógeno del esqueleto cosen los peldaños en vertical, la solidez horizontal nace de una junta molecular completamente seca. Allí donde dos hebras β se pliegan cara a cara dentro de los arcos [[PIRIBS|real-prion-piribs]], las cadenas laterales hidrofóbicas (valina, isoleucina, leucina, metionina) y las escaleras polares de asparagina y glutamina se interdigitan con precisión subangstrom expulsando cada molécula de [[agua|water]], atrapando a [[PrPˢᶜ|real-prion]] en un mínimo energético profundísimo.',
        blueprint: {
          role: 'Junta seca de cadenas laterales interdigitadas que sella láminas β enfrentadas en un núcleo amiloide irreversible',
          arrivesFrom: 'Cadenas laterales hidrofóbicas y polares de [[aminoácidos|amino-acid]] plegadas frente a frente en arcos [[PIRIBS|real-prion-piribs]]',
          inside: 'Bolsillos apolares encajados sin holgura y escaleras verticales Asn/Gln (~8–11 Å entre láminas) libres de [[agua|water]]',
          deliversTo: 'Atrapa a [[PrPˢᶜ|real-prion]] en un mínimo termodinámico inmune a proteinasa K, detergentes y esterilización común',
          loop: 'Qué cadenas laterales encajan entre sí determina cepas priónicas distintas a partir de la misma secuencia proteica'
        },
        scientific:
          'Interfaces de [[cremallera estérica|real-prion-zipper]] seca (~8–11 Å entre láminas) que unen arcos de [[lámina β|beta-sheet]] enfrentados en el [[núcleo PIRIBS de PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6). La interdigitación de cadenas laterales apolares junto a escaleras polares de amidas (Asn/Gln) excluye el [[agua|water]] interfacial, generando un empaquetado de van der Waals denso responsable de la insolubilidad, termoestabilidad y resistencia a proteinasa K.',
        from: [
          { nodeId: 'amino-acid', label: 'Cadenas laterales interdigitadas', cargo: 'Empaquetado hidrofóbico y Asn/Gln' },
          { nodeId: 'real-prion-piribs', label: 'Arcos β PIRIBS enfrentados', cargo: 'Paredes cross-β acopladas' }
        ],
        to: [
          { nodeId: 'real-prion-zipper', label: 'Cremallera estérica', cargo: 'Bloqueo termodinámico sin agua' },
          { nodeId: 'real-prion', label: 'Núcleo resistente a proteasas', cargo: 'Persistencia ambiental extrema' }
        ]
      }
    },

    template_dock: {
      en: {
        subtitle: 'Active Fibril-Tip Templated Conversion Site',
        simple:
          'At the exposed growing end of a [[PrPsc fibril|real-prion]], unsatisfied backbone hydrogen-bond sites wait in the open. When a healthy [[PrPc|real-prion-prpc]] monomer docks here, the tip guides its helices to unwind and snap straight into a new 4.8-angstrom [[beta-sheet|beta-sheet]] rung.',
        story:
          'Along the sealed flanks of a prion filament, every backbone bond is already satisfied and shielded by bulky N-glycans, so nothing converts there. All the biochemical drama concentrates strictly at the two exposed tips. Because the top [[PIRIBS|real-prion-piribs]] rung displays unsatisfied amide [[N-H|atom-n]] and carbonyl [[O=C|atom-o]] groups plus hydrophobic grooves, an approaching [[PrPc|real-prion-prpc]] monomer binds directly to that raw cross-section, lowers the unfolding barrier of its three alpha-helices, and locks into an exact copy of the template beneath it.',
        blueprint: {
          role: 'Catalytic open fibril end lowering the kinetic barrier for PrPc unfolding and templated PIRIBS elongation',
          arrivesFrom: 'Unsatisfied cross-beta edge of the terminal 4.8 A rung on a growing [[PrPsc|real-prion-piribs]] protofilament',
          inside: 'Exposed hydrophobic arch grooves and open backbone N-H / C=O hydrogen-bond sites capturing incoming soluble [[PrPc|real-prion-prpc]]',
          deliversTo: 'Converts alpha-helical [[PrPc|real-prion-prpc]] into one new locked 4.8 A [[beta-sheet|beta-sheet]] rung while regenerating an identical active tip',
          loop: 'Every conversion event reproduces the active template surface one rung higher, sustaining autocatalytic propagation with 0 genes'
        },
        scientific:
          'Active templating interface at the open axial extremity of a [[PrPsc|real-prion-piribs]] protofilament (PDB 7LNA / 7TD6). Unsatisfied backbone amide hydrogen-bond donors/acceptors and solvent-exposed [[steric-zipper|real-prion-zipper]] surfaces lower the activation energy required to unfold native [[alpha-helices|alpha-helix]] H1-H3 of docked [[PrPc|real-prion-prpc]] (PDB 1QLX) and lock the chain into a new 4.8 A in-register cross-[[beta-sheet|beta-sheet]] rung.',
        from: [
          { nodeId: 'real-prion-prpc', label: 'Incoming Soluble PrPc', cargo: 'Native 1QLX monomer substrate' },
          { nodeId: 'real-prion-piribs', label: 'Exposed Top PIRIBS Rung', cargo: 'Unsatisfied H-bond template edge' }
        ],
        to: [
          { nodeId: 'beta-sheet', label: 'Newly Converted 4.8 A Rung', cargo: 'Refolded cross-beta addition' },
          { nodeId: 'real-prion', label: 'Autocatalytic Elongation', cargo: 'Regenerated active conversion tip' }
        ]
      },
      es: {
        subtitle: 'Sitio activo de conversión por molde en el extremo fibrilar',
        simple:
          'En la punta abierta de una [[fibrilla PrPˢᶜ|real-prion]], los enlaces de hidrógeno insatisfechos del esqueleto quedan expuestos. Cuando una [[PrPᶜ|real-prion-prpc]] sana atraca aquí, el molde guía el desenrollado de sus hélices hasta encajarlas en un nuevo peldaño [[β|beta-sheet]] de 4,8 Å.',
        story:
          'A lo largo de los costados cerrados de la fibrilla, todos los enlaces están saturados y protegidos por N-glicanos, de modo que allí no ocurre conversión. Toda la reacción se concentra en los dos extremos expuestos. Como el último peldaño [[PIRIBS|real-prion-piribs]] ofrece grupos amida [[N–H|atom-n]], carbonilos [[O=C|atom-o]] libres y surcos hidrofóbicos abiertos, la [[PrPᶜ|real-prion-prpc]] entrante se acopla a esa cara cruda, reduce la barrera de despliegue de sus hélices y queda sellada como copia exacta del molde inferior.',
        blueprint: {
          role: 'Extremo abierto catalítico de la fibrilla que rebaja la barrera cinética para desplegar PrPᶜ y añadir peldaños PIRIBS',
          arrivesFrom: 'Borde cross-β insatisfecho del último peldaño de 4,8 Å de un protofilamento [[PrPˢᶜ|real-prion-piribs]]',
          inside: 'Surcos hidrofóbicos expuestos y grupos N–H / C=O libres del esqueleto que capturan [[PrPᶜ|real-prion-prpc]] soluble',
          deliversTo: 'Convierte [[PrPᶜ|real-prion-prpc]] α-helicoidal en un nuevo peldaño [[β|beta-sheet]] de 4,8 Å regenerando una punta idéntica',
          loop: 'Cada conversión reproduce la superficie activa un peldaño más arriba, sosteniendo la autocatálisis con cero genes'
        },
        scientific:
          'Interfaz activa de moldeado en la extremidad axial abierta del protofilamento [[PrPˢᶜ|real-prion-piribs]] (PDB 7LNA / 7TD6). Los donadores y aceptores amida insatisfechos y los bolsillos de [[cremallera estérica|real-prion-zipper]] expuestos al solvente disminuyen la energía de activación para desplegar las [[hélices α|alpha-helix]] H1–H3 de la [[PrPᶜ|real-prion-prpc]] acoplada (PDB 1QLX) y fijarla en un nuevo peldaño cross-[[β|beta-sheet]] en registro de 4,8 Å.',
        from: [
          { nodeId: 'real-prion-prpc', label: 'PrPᶜ soluble entrante', cargo: 'Monómero nativo sustrato 1QLX' },
          { nodeId: 'real-prion-piribs', label: 'Peldaño PIRIBS terminal expuesto', cargo: 'Borde molde con puentes H libres' }
        ],
        to: [
          { nodeId: 'beta-sheet', label: 'Nuevo peldaño de 4,8 Å', cargo: 'Adición cross-β replegada' },
          { nodeId: 'real-prion', label: 'Elongación autocatalítica', cargo: 'Punta activa regenerada' }
        ]
      }
    },

    fragmentation: {
      en: {
        subtitle: 'Fibril Fragmentation & Exponential Seed Multiplication',
        simple:
          'One long [[PrPsc fibril|real-prion]] has only two active conversion ends. When mechanical shear or cellular stress snaps that filament into two shorter pieces, the number of infectious growing tips instantly doubles - driving exponential spread without a single gene.',
        story:
          'Pure end-to-end growth of a single amyloid fiber increases mass only linearly over time. What turns [[PrPsc|real-prion]] into a devastating exponential infectious agent is secondary fragmentation. As elongated ~13-nanometer fibrils bend under cellular shear, membrane motion, or host chaperone tugging, one strand cracks cleanly across a 4.8-angstrom plane into two separate seeds. Each fresh break exposes two brand-new active [[PIRIBS|real-prion-piribs]] conversion tips that drift to untouched neuronal rafts and double the replication rate again and again.',
        blueprint: {
          role: 'Physical fibril-scission mechanism converting linear filament elongation into exponential infectious seed amplification',
          arrivesFrom: 'Mechanical shear, thermal stress, or host chaperone pulling on elongated [[PrPsc|real-prion-piribs]] amyloid filaments',
          inside: 'Transverse fracture along a 4.8 A inter-rung plane splitting one 2-tip fibril into two 2-tip seeds (4 active ends)',
          deliversTo: 'Multiplies active templating ends across brain tissue and spreads small mobile seeds between neighboring neurons',
          loop: 'Elongation plus fragmentation equals exponential replication strictly through physics and protein folding - zero DNA or RNA'
        },
        scientific:
          'Secondary fibril fragmentation of elongated [[PrPsc|real-prion-piribs]] protofilaments (transverse cleavage between stacked 4.8 A cross-[[beta-sheet|beta-sheet]] rungs driven by mechanical shear or cellular remodeling). Because conversion occurs exclusively at exposed fibril termini, scission converts linear monomer-addition kinetics into exponential autocatalytic amplification (doubling seed concentration per fracture cycle) and governs prion strain incubation times.',
        from: [
          { nodeId: 'real-prion-piribs', label: 'Elongated PrPsc Filament', cargo: 'Mechanically brittle amyloid cable' },
          { nodeId: 'real-prion-zipper', label: 'Inter-Rung Fracture Plane', cargo: '4.8 A transverse cleavage site' }
        ],
        to: [
          { nodeId: 'real-prion', label: 'Doubled Infectious Seeds', cargo: 'Exponential tip multiplication' },
          { nodeId: 'real-prion-prpc', label: 'Fresh Neuronal Rafts', cargo: 'Accelerated healthy PrPc capture' }
        ]
      },
      es: {
        subtitle: 'Fragmentación fibrilar y multiplicación exponencial de semillas',
        simple:
          'Una sola [[fibrilla PrPˢᶜ|real-prion]] larga tiene únicamente dos extremos activos de conversión. Cuando el esfuerzo mecánico o celular la parte en dos fragmentos cortos, el número de puntas infecciosas se duplica al instante, disparando una propagación exponencial sin un solo gen.',
        story:
          'El crecimiento lineal por los extremos de un único filamento amiloide aumentaría la masa lentamente. Lo que transforma a [[PrPˢᶜ|real-prion]] en un agente infeccioso exponencial es la fragmentación secundaria. Cuando las fibrillas alargadas de ~13 nm se flexionan por tensiones celulares o chaperonas del hospedador, se quiebran limpiamente entre dos peldaños de 4,8 Å formando dos semillas independientes. Cada fractura expone dos nuevas puntas [[PIRIBS|real-prion-piribs]] activas que alcanzan balsas sanas y duplican sin cesar la velocidad de contagio.',
        blueprint: {
          role: 'Mecanismo físico de escisión fibrilar que convierte la elongación lineal en amplificación exponencial de semillas',
          arrivesFrom: 'Cizallamiento mecánico, tensión de membrana o tracción de chaperonas sobre filamentos largos de [[PrPˢᶜ|real-prion-piribs]]',
          inside: 'Fractura transversal entre planos de 4,8 Å que divide una fibrilla de 2 puntas en dos semillas con 4 extremos activos',
          deliversTo: 'Multiplica los extremos moldeadores en el tejido nervioso y difunde semillas móviles hacia neuronas vecinas',
          loop: 'Elongación más fragmentación equivale a replicación exponencial puramente física, sin ADN ni ARN'
        },
        scientific:
          'Fragmentación fibrilar secundaria de protofilamentos elongados de [[PrPˢᶜ|real-prion-piribs]] (escisión transversal entre peldaños cross-[[β|beta-sheet]] de 4,8 Å inducida por cizallamiento mecánico o remodelación celular). Al limitarse la conversión a los extremos abiertos, cada fractura transforma la cinética lineal en amplificación autocatalítica exponencial y modula el periodo de incubación propio de cada cepa priónica.',
        from: [
          { nodeId: 'real-prion-piribs', label: 'Filamento elongado PrPˢᶜ', cargo: 'Cable amiloide frágil a la flexión' },
          { nodeId: 'real-prion-zipper', label: 'Plano de fractura entre peldaños', cargo: 'Corte transversal cada 4,8 Å' }
        ],
        to: [
          { nodeId: 'real-prion', label: 'Semillas infecciosas duplicadas', cargo: 'Multiplicación exponencial de puntas' },
          { nodeId: 'real-prion-prpc', label: 'Nuevas balsas neuronales', cargo: 'Captura acelerada de PrPᶜ sana' }
        ]
      }
    },

    amide_atoms: {
      en: {
        subtitle: 'Atomic Close-Up: 4.8 A Amide H-Bonds & Cys179-Cys214 S-S (0 P)',
        simple:
          'Down at single-atom resolution, a [[prion|real-prion]] consists strictly of [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[S|atom-s]] - with zero [[phosphorus|atom-p]] because it contains zero [[DNA|dna]] or [[RNA|rna]]. Continuous vertical N-H...O=C hydrogen bonds every 4.8 angstroms weld the entire fibril together.',
        story:
          'Compare this atomic close-up straight against [[Mimivirus dsDNA|real-mimivirus]] and [[PSTVd RNA|real-viroid]], and the chemistry of the [[Edge of Life|subviral-overview]] clicks into total clarity. Where both virus and viroid rely on tetrahedral [[phosphorus|atom-p]] rails to hold genetic letters, pathogenic [[PrPsc|real-prion]] contains zero phosphorus at all. Its entire infectious memory is written solely in five protein elements - [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[S|atom-s]] - locked by repeating 4.8-angstrom backbone amide N-H...O=C hydrogen bonds and the golden 2.05-angstrom Cys179-Cys214 [[sulfur|atom-s]] disulfide staple.',
        blueprint: {
          role: 'Sub-nanometer atomic inset (0.1-2 nm) verifying zero-phosphorus protein-only chemistry and 4.8 A cross-beta H-bonding',
          arrivesFrom: 'Peptide backbone and cysteine side-chain atoms strictly from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[S|atom-s]] (0 [[P|atom-p]])',
          inside: 'Vertical 4.8 A backbone amide N-H...O=C hydrogen-bond ladder paired beside the covalent 2.05 A Cys179-Cys214 [[S-S|atom-s]] disulfide bond',
          deliversTo: 'Provides the fundamental atomic cohesion powering [[PIRIBS|real-prion-piribs]] stacking, dry [[steric zippers|real-prion-zipper]], and 0-gene infectivity',
          loop: 'Completes the Phase 13 atomic triad: dsDNA (P, no 2-prime-OH), naked ssRNA (P + 2-prime-OH, 0 S), and prion amyloid (S, 0 P)'
        },
        scientific:
          'Atomic-resolution peptide cross-[[beta-sheet|beta-sheet]] inset (0.1-2.0 nm; elements [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[S|atom-s]]; strictly zero [[P|atom-p]] and zero nucleic-acid residues). Displays the continuous inter-rung backbone amide N-H...O=C hydrogen-bond ladder (donor-acceptor distance ~2.8-3.0 A across the 4.8 A axial repeat) alongside the covalent Cys179-Cys214 [[disulfide|atom-s]] (~2.05 A S-S) preserved throughout [[PrPc -> PrPsc|real-prion]] conversion (PDB 1QLX -> 7LNA / 7TD6).',
        from: [
          { nodeId: 'atom-s', label: 'Sulfur (S) & C/H/N/O', cargo: 'Five pure protein elements (0 P)' },
          { nodeId: 'polypeptide', label: 'Peptide Amide Backbone', cargo: 'Repeating N-H and C=O planes' }
        ],
        to: [
          { nodeId: 'real-prion-zipper', label: '4.8 A H-Bond & Zipper Lock', cargo: 'Atomic origin of prion toughness' },
          { nodeId: 'subviral-overview', label: 'Zero-Gene Edge of Life', cargo: 'Protein-only atomic proof' }
        ]
      },
      es: {
        subtitle: 'Detalle atómico: puentes H amida cada 4,8 Å y S–S Cys179–Cys214 (0 P)',
        simple:
          'A escala de átomos individuales, un [[prión|real-prion]] se compone estrictamente de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[S|atom-s]], con cero [[fósforo|atom-p]] porque no posee [[ADN|dna]] ni [[ARN|rna]]. Puentes de hidrógeno verticales N–H···O=C cada 4,8 Å sueldan toda la fibrilla.',
        story:
          'Comparar este detalle atómico frente al [[ADNbc de Mimivirus|real-mimivirus]] y el [[ARN de PSTVd|real-viroid]] ilumina al instante la química de la [[frontera de la vida|subviral-overview]]. Mientras virus y viroide dependen del [[fósforo|atom-p]] tetraédrico para encadenar letras genéticas, [[PrPˢᶜ|real-prion]] no contiene fósforo alguno. Toda su memoria infecciosa reside en cinco elementos proteicos —[[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[S|atom-s]]— soldados por escaleras de enlaces de hidrógeno N–H···O=C cada 4,8 Å y el puente covalente [[S–S|atom-s]] de 2,05 Å entre Cys179 y Cys214.',
        blueprint: {
          role: 'Detalle atómico subnanométrico (0,1–2 nm) que demuestra química exclusivamente proteica sin fósforo y enlaces H cada 4,8 Å',
          arrivesFrom: 'Átomos del esqueleto peptídico y de cisteína estrictamente en [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[S|atom-s]] (0 [[P|atom-p]])',
          inside: 'Escalera vertical de enlaces de hidrógeno amida N–H···O=C cada 4,8 Å junto al puente covalente [[S–S|atom-s]] Cys179–Cys214 (2,05 Å)',
          deliversTo: 'Aporta la cohesión atómica que sostiene el apilamiento [[PIRIBS|real-prion-piribs]], las [[cremalleras estéricas|real-prion-zipper]] y la infectividad sin genes',
          loop: 'Cierra la tríada atómica de la Fase 13: ADNbc (P, sin 2′-OH), ARNmc desnudo (P + 2′-OH, 0 S) y amiloide priónico (S, 0 P)'
        },
        scientific:
          'Detalle atómico peptídico cross-[[β|beta-sheet]] (0,1–2,0 nm; elementos [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[S|atom-s]]; cero [[P|atom-p]] y cero ácidos nucleicos). Muestra la escalera continua de enlaces de hidrógeno amida N–H···O=C entre peldaños (distancia donador–aceptor ~2,8–3,0 Å sobre el paso axial de 4,8 Å) junto al puente [[disulfuro|atom-s]] covalente Cys179–Cys214 (~2,05 Å S–S) preservado en toda la conversión [[PrPᶜ → PrPˢᶜ|real-prion]] (PDB 1QLX → 7LNA / 7TD6).',
        from: [
          { nodeId: 'atom-s', label: 'Azufre (S) y C/H/N/O', cargo: 'Cinco elementos proteicos puros (0 P)' },
          { nodeId: 'polypeptide', label: 'Esqueleto amida peptídico', cargo: 'Planos repetitivos N–H y C=O' }
        ],
        to: [
          { nodeId: 'real-prion-zipper', label: 'Cierre de puentes H y cremallera', cargo: 'Base atómica de la dureza priónica' },
          { nodeId: 'subviral-overview', label: 'Frontera de la vida sin genes', cargo: 'Prueba atómica exclusivamente proteica' }
        ]
      }
    }
  }
};
