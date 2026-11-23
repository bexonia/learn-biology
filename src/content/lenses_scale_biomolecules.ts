import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) and
 * 11 Standalone Scale Explorer Part Lenses (`scale_explorer.html`) in `EN` & `ES`
 * for Phase 09: Powers-of-10 True Scale Explorer & The 4 Biomolecules of Life.
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and follow Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const SCALE_BIOMOLECULES_NODE_LENSES: NodeLensMap = {
  'scale-explorer': {
    en: {
      simple:
        'Living structures span six full powers of ten, from a 100-micrometer [[plant cell|real-plant]] down to a 0.1-nanometer [[hydrogen atom|atom-h]]. This logarithmic comparator places cells, [[viruses|real-coronavirus]], [[ribosomes|ribosome]], [[DNA|dna]], and [[atoms|atom-c]] at exact relative size so you can grasp true scale without visual distortion.',
      story:
        'Opening separate models makes a 100-micrometer [[plant cell|real-plant]] and a 100-nanometer [[coronavirus|real-coronavirus]] look equally large, hiding a thousandfold difference in width and a billionfold gap in volume. Sweeping down this logarithmic rail restores real proportions: if a [[hydrogen atom|atom-h]] grew to a one-millimeter sand grain, the plant cell would stretch one kilometer wide, crossing the optical-microscope barrier past [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[ribosomes|ribosome]], and [[DNA|dna]].',
      blueprint:
        'Role: Continuous logarithmic comparator spanning six decades from 100 micrometers to 0.1 nanometers; Inputs: Eleven calibrated biological models from [[plant cells|real-plant]] and [[animal cells|real-cell]] down to [[biogenic atoms|atom-h]]; Inside: Window-recentered 1:1 adjacent-pair framing, dynamic micrometer-to-angstrom scale bar, and optical/cryo-EM resolution thresholds; Outputs: Direct spatial calibration bridging [[life overview|life-overview]] to [[the four biomolecules|four-biomolecules]].',
      scientific:
        'Logarithmic size comparator covering 10^-4 m to 10^-10 m (10^6 linear dynamic range; 10^18 volume ratio) across eleven calibrated stops: [[plant cell|real-plant]] (100 micrometers), [[animal cell|real-cell]] (20 micrometers), [[Saccharomyces cerevisiae|real-fungal]] (5 micrometers), [[Escherichia coli|real-bacterium]] (2 micrometers), [[Mycoplasma genitalium|real-mycoplasma]] (300 nm), [[SARS-CoV-2|real-coronavirus]]/[[HIV-1|real-hiv]] (100 nm), [[ribosome|ribosome]] (25 nm), [[RuBisCO|rubisco]]/[[ATP synthase|atp-synthase]] (10 nm), B-[[DNA|dna]] (2 nm), monomers (0.5-1 nm), and [[atoms|atom-h]] (1-3 angstroms), mapped against ~200 nm optical diffraction and ~1-3 angstrom cryo-EM/X-ray resolution.'
    },
    es: {
      simple:
        'Las estructuras vivas abarcan seis potencias de diez, desde una [[célula vegetal|real-plant]] de 100 micrómetros hasta un [[átomo de hidrógeno|atom-h]] de 0,1 nanómetros. Este comparador logarítmico muestra células, [[virus|real-coronavirus]], [[ribosomas|ribosome]], [[ADN|dna]] y [[átomos|atom-c]] a su tamaño relativo exacto sin distorsiones.',
      story:
        'Ver modelos por separado hace parecer igual de grandes a una [[célula vegetal|real-plant]] de 100 µm y a un [[coronavirus|real-coronavirus]] de 100 nm, ocultando una diferencia de mil veces en anchura y mil millones en volumen. Descender por este riel logarítmico devuelve las proporciones reales: si un [[átomo de hidrógeno|atom-h]] midiera un milímetro como un grano de arena, la célula vegetal mediría un kilómetro, cruzando el límite óptico por [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[ribosomas|ribosome]] y [[ADN|dna]].',
      blueprint:
        'Rol: Comparador logarítmico continuo en seis décadas (100 µm a 0,1 nm) · Entradas: Once modelos biológicos calibrados desde [[células vegetales|real-plant]] y [[animales|real-cell]] hasta [[átomos biogénicos|atom-h]] · Interior: Ventana re-centrada a escala 1:1 para pares adyacentes, barra dinámica µm–nm–Å y umbrales óptico y crio-EM · Salida: Calibración espacial directa entre el [[panorama de la vida|life-overview]] y [[las cuatro biomoléculas|four-biomolecules]].',
      scientific:
        'Comparador espacial logarítmico de 10⁻⁴ m a 10⁻¹⁰ m (rango lineal de 10⁶ y volumétrico de 10¹⁸) con once paradas calibradas: [[célula vegetal|real-plant]] (100 µm), [[célula animal|real-cell]] (20 µm), [[Saccharomyces cerevisiae|real-fungal]] (5 µm), [[Escherichia coli|real-bacterium]] (2 µm), [[Mycoplasma genitalium|real-mycoplasma]] (300 nm), [[SARS-CoV-2|real-coronavirus]]/[[HIV-1|real-hiv]] (100 nm), [[ribosoma|ribosome]] (25 nm), [[RuBisCO|rubisco]]/[[ATP sintasa|atp-synthase]] (10 nm), [[ADN|dna]]-B (2 nm), monómeros (0,5–1 nm) y [[átomos|atom-h]] (1–3 Å), contrastados con el límite de difracción óptica (~200 nm) y crio-EM/rayos X (~1–3 Å).'
    }
  },

  'four-biomolecules': {
    en: {
      simple:
        'Every living cell and virus is assembled from four chemical families: lipids that form membranes, carbohydrates that store fuel and stiffen walls, [[proteins|protein]] that perform cellular work, and [[DNA|dna]] and [[RNA|rna]] that carry genetic instructions. All four are built from the same core [[atoms|atom-c]].',
      story:
        'Across these four pedestals, the chemistry of life unfolds cleanly from whole assemblies down to shared atomic building blocks. Amphipathic [[phospholipids|phospholipid]] and [[cholesterol|cholesterol]] turn oily tails inward away from water to close self-healing membranes; [[glucose|glucose]] rings join into coiled [[starch|starch]] or rigid [[cellulose|cellulose]]; [[amino acids|amino-acid]] fold into working [[proteins|protein]]; and [[nucleotides|nucleotide]] pair into [[DNA|dna]] and [[RNA|rna]] using [[carbon|atom-c]], [[hydrogen|atom-h]], [[oxygen|atom-o]], [[nitrogen|atom-n]], [[phosphorus|atom-p]], and [[magnesium|atom-mg]].',
      blueprint:
        'Role: Four-pedestal comparative molecular workbench descending from macromolecule to atom; Inputs: Six universal biogenic elements [[C|atom-c]], [[H|atom-h]], [[O|atom-o]], [[N|atom-n]], [[P|atom-p]], and [[Mg|atom-mg]]; Inside: Lipids ([[phospholipid|phospholipid]], [[cholesterol|cholesterol]]), carbohydrates ([[starch|starch]], [[cellulose|cellulose]], [[disaccharide|disaccharide]], [[glucose|glucose]]), [[proteins|protein]] ([[alpha-helix|alpha-helix]], [[beta-sheet|beta-sheet]], [[polypeptide|polypeptide]], [[amino-acid|amino-acid]]), and nucleic acids ([[DNA|dna]], [[RNA|rna]], [[polynucleotide-strand|polynucleotide-strand]], [[nucleotide|nucleotide]]); Outputs: Unified molecular vocabulary linking [[scale explorer|scale-explorer]] to cellular architecture.',
      scientific:
        'Comparative structural chemistry of the four canonical biomolecule families across 0.1-25 nm: (1) non-covalent amphipathic [[phospholipid|phospholipid]] and [[cholesterol|cholesterol]] bilayers (C, H, O, P, N); (2) glycosidic [[starch|starch]] (alpha-1,4/1,6) and [[cellulose|cellulose]] (beta-1,4) polymers of D-[[glucose|glucose]] (~1:2:1 C:H:O); (3) amide-linked L-[[amino-acid|amino-acid]] [[polypeptides|polypeptide]] folding into [[alpha-helix|alpha-helix]] and [[beta-sheet|beta-sheet]] enzymes (C, H, O, N, plus S); and (4) 3\'-5\' phosphodiester [[polynucleotide strands|polynucleotide-strand]] of [[nucleotides|nucleotide]] forming [[DNA|dna]] and [[RNA|rna]] stabilized by [[Mg2+|atom-mg]].'
    },
    es: {
      simple:
        'Toda célula viva y todo virus se construye con cuatro familias químicas: lípidos para las membranas, carbohidratos para energía y soporte, [[proteínas|protein]] para el trabajo celular y [[ADN|dna]] junto con [[ARN|rna]] para la información genética. Todas comparten los mismos [[átomos|atom-c]] esenciales.',
      story:
        'A lo largo de estos cuatro pedestales, la química de la vida desciende con orden desde conjuntos completos hasta átomos comunes. Los [[fosfolípidos|phospholipid]] y el [[colesterol|cholesterol]] ocultan sus colas lejos del agua para sellar membranas; los anillos de [[glucosa|glucose]] se enlazan en [[almidón|starch]] espiral o [[celulosa|cellulose]] rígida; los [[aminoácidos|amino-acid]] se pliegan en [[proteínas|protein]] activas; y los [[nucleótidos|nucleotide]] forman [[ADN|dna]] y [[ARN|rna]] con [[carbono|atom-c]], [[hidrógeno|atom-h]], [[oxígeno|atom-o]], [[nitrógeno|atom-n]], [[fósforo|atom-p]] y [[magnesio|atom-mg]].',
      blueprint:
        'Rol: Banco comparativo de cuatro pedestales desde macromolécula hasta átomo · Entradas: Seis elementos biogénicos universales ([[C|atom-c]], [[H|atom-h]], [[O|atom-o]], [[N|atom-n]], [[P|atom-p]] y [[Mg|atom-mg]]) · Interior: Lípidos ([[fosfolípido|phospholipid]], [[colesterol|cholesterol]]), carbohidratos ([[almidón|starch]], [[celulosa|cellulose]], [[disacárido|disaccharide]], [[glucosa|glucose]]), [[proteínas|protein]] ([[hélice α|alpha-helix]], [[lámina β|beta-sheet]], [[polipéptido|polypeptide]], [[aminoácido|amino-acid]]) y ácidos nucleicos ([[ADN|dna]], [[ARN|rna]], [[hebra polinucleotídica|polynucleotide-strand]], [[nucleótido|nucleotide]]) · Salida: Vocabulario químico unificado que enlaza la [[escala|scale-explorer]] con las células.',
      scientific:
        'Bioquímica estructural comparada de las cuatro familias biomoleculares canónicas (0,1–25 nm): (1) bicapas no covalentes de [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]] (C, H, O, P, N); (2) polímeros glucosídicos de D-[[glucosa|glucose]] en [[almidón|starch]] (α-1,4/1,6) y [[celulosa|cellulose]] (β-1,4), proporción empírica C:H:O ~ 1:2:1; (3) [[polipéptidos|polypeptide]] de L-[[aminoácidos|amino-acid]] plegados en [[hélices α|alpha-helix]] y [[láminas β|beta-sheet]] (C, H, O, N y S); y (4) [[hebras polinucleotídicas|polynucleotide-strand]] 3\'–5\' fosfodiéster de [[nucleótidos|nucleotide]] en [[ADN|dna]] y [[ARN|rna]] estabilizados con [[Mg²⁺|atom-mg]].'
    }
  },

  'disaccharide': {
    en: {
      simple:
        'A disaccharide connects two [[glucose|glucose]] rings through one oxygen bridge formed by releasing a water molecule. Changing the angle of that single bond creates either bent maltose, the repeating unit of digestible [[starch|starch]], or straight cellobiose, the rigid unit of plant [[cellulose|cellulose]].',
      story:
        'Two identical [[glucose|glucose]] rings meet, release one water molecule, and lock together between carbons one and four - yet one small bond angle changes everything. In alpha-1,4 maltose, both rings face the same way and curve smoothly into coiled [[starch|starch]] that digestive enzymes break open easily; in beta-1,4 cellobiose, the second ring flips 180 degrees so chains lie flat and lock into wood-strong [[cellulose|cellulose]].',
      blueprint:
        'Role: Two-ring carbohydrate junction contrasting alpha-1,4 maltose with beta-1,4 cellobiose (~1.4 nm); Inputs: Two D-[[glucose|glucose]] pyranose monomers joined by dehydration synthesis removing H2O; Inside: C1-O-C4 glycosidic ether bridge of [[carbon|atom-c]], [[hydrogen|atom-h]], and [[oxygen|atom-o]] enforcing either axial curvature or equatorial linearity; Outputs: Repeating dimeric precursors for storage [[starch|starch]] and structural [[cellulose|cellulose]] within [[the four biomolecules|four-biomolecules]].',
      scientific:
        'Stereochemical comparison of C12H22O11 isomers (~1.4 nm length; 342.30 Da) condensed from two D-[[glucose|glucose]] pyranose rings: alpha-1,4-linked maltose versus beta-1,4-linked cellobiose. Axial alpha-1,4 C1-O geometry induces a ~60-degree helical turn yielding coiled [[starch|starch]] cleaved by alpha-amylases; equatorial beta-1,4 linkage rotates alternating rings 180 degrees, enabling intramolecular O3-H to O5 hydrogen bonds that stiffen [[cellulose|cellulose]] fibers against mammalian hydrolysis.'
    },
    es: {
      simple:
        'Un disacárido une dos anillos de [[glucosa|glucose]] mediante un puente de oxígeno al liberar una molécula de agua. Cambiar el ángulo de ese único enlace produce maltosa curvada, base del [[almidón|starch]] digerible, o celobiosa recta, base de la [[celulosa|cellulose]] vegetal.',
      story:
        'Dos anillos idénticos de [[glucosa|glucose]] se encuentran, liberan una molécula de agua y quedan unidos entre los carbonos uno y cuatro, pero un pequeño giro geométrico decide su destino. En la maltosa α-1,4 ambos anillos miran al mismo lado y se enroscan en [[almidón|starch]] que nuestras enzimas rompen sin esfuerzo; en la celobiosa β-1,4 el segundo anillo gira 180 grados y forma cintas planas que empaquetan la [[celulosa|cellulose]].',
      blueprint:
        'Rol: Unión dimérica de carbohidratos que contrasta maltosa α-1,4 frente a celobiosa β-1,4 (~1,4 nm) · Entradas: Dos monómeros piranósicos de D-[[glucosa|glucose]] condensados con pérdida de H₂O · Interior: Puente glucosídico C1–O–C4 de [[carbono|atom-c]], [[hidrógeno|atom-h]] y [[oxígeno|atom-o]] que fija curvatura axial o linealidad ecuatorial · Salida: Subunidades repetitivas del [[almidón|starch]] de reserva y la [[celulosa|cellulose]] estructural en [[las cuatro biomoléculas|four-biomolecules]].',
      scientific:
        'Comparación estereoquímica de isómeros C₁₂H₂₂O₁₁ (~1,4 nm; 342,30 Da) condensados a partir de dos D-[[glucosas|glucose]]: maltosa con enlace α-1,4 frente a celobiosa con enlace β-1,4. El enlace axial α-1,4 impone un giro helicoidal (~60°) en el [[almidón|starch]] hidrolizable por α-amilasas; el enlace ecuatorial β-1,4 rota cada anillo 180°, estabilizando puentes de hidrógeno intramoleculares O3–H hacia O5 que endurecen la [[celulosa|cellulose]] frente a enzimas mamíferas.'
    }
  },

  'beta-sheet': {
    en: {
      simple:
        'A beta-sheet is a pleated ribbon built when stretched segments of a [[protein|protein]] chain line up side by side and lock together with hydrogen bonds. Together with the coiled [[alpha-helix|alpha-helix]], it forms the sturdy internal skeleton of enzymes and structural fibers.',
      story:
        'Instead of winding into a tight spring like an [[alpha-helix|alpha-helix]], a [[polypeptide|polypeptide]] chain can extend nearly flat and place several strands beside one another in opposite or matching directions. Backbone oxygen and nitrogen atoms reach across the narrow gap to fasten the strands into a pleated sheet, projecting [[amino-acid|amino-acid]] side chains alternately above and below to build dense [[protein|protein]] cores, silk fibers, and barrel-shaped pores.',
      blueprint:
        'Role: Pleated planar secondary structure reinforcing folded [[proteins|protein]]; Inputs: Extended [[polypeptide|polypeptide]] strands assembled from L-[[amino acids|amino-acid]] ([[C|atom-c]], [[H|atom-h]], [[O|atom-o]], [[N|atom-n]]); Inside: Antiparallel or parallel backbones stitched laterally by inter-strand C=O to H-N hydrogen bonds with alternating R-group faces; Outputs: High-tensile cores and barrels complementing [[alpha-helices|alpha-helix]] across [[the four biomolecules|four-biomolecules]].',
      scientific:
        'Extended secondary structural motif of [[polypeptide|polypeptide]] beta-strands (~3.5 angstroms axial rise per residue vs. 1.5 angstroms in [[alpha-helix|alpha-helix]]; canonical antiparallel Ramachandran angles phi near -139 degrees and psi near +135 degrees). Lateral inter-strand carbonyl-to-amide hydrogen bonds (~4.7 angstrom strand spacing) pleat the peptide planes so successive [[amino-acid|amino-acid]] R-groups project alternately above and below, stabilizing mixed alpha+beta [[proteins|protein]] such as ubiquitin (PDB 1UBQ) and outer-membrane beta-barrels.'
    },
    es: {
      simple:
        'Una lámina β es una cinta plegada en acordeón que aparece cuando tramos estirados de una [[proteína|protein]] se alinean lado a lado unidos por puentes de hidrógeno. Junto con la [[hélice α|alpha-helix]], forma el armazón interno de enzimas y fibras resistentes.',
      story:
        'En lugar de enrollarse como una [[hélice α|alpha-helix]], una cadena [[polipeptídica|polypeptide]] puede extenderse casi recta y colocar varias hebras en paralelo o en sentidos opuestos. Los oxígenos y nitrógenos del esqueleto se enlazan lateralmente por puentes de hidrógeno, formando una lámina plegada donde las cadenas laterales de los [[aminoácidos|amino-acid]] alternan arriba y abajo para crear núcleos [[proteicos|protein]], seda y canales en barril.',
      blueprint:
        'Rol: Estructura secundaria laminar plegada que estabiliza [[proteínas|protein]] · Entradas: Hebras extendidas de [[polipéptido|polypeptide]] compuestas por L-[[aminoácidos|amino-acid]] ([[C|atom-c]], [[H|atom-h]], [[O|atom-o]], [[N|atom-n]]) · Interior: Hebras antiparalelas o paralelas cosidas lateralmente mediante puentes de hidrógeno C=O···H–N con grupos R alternos · Salida: Núcleos de alta resistencia mecánica y barriles que complementan las [[hélices α|alpha-helix]] en [[las cuatro biomoléculas|four-biomolecules]].',
      scientific:
        'Motivo secundario extendido de hebras β [[polipeptídicas|polypeptide]] (~3,5 Å de avance por residuo frente a 1,5 Å en [[hélice α|alpha-helix]]; ángulos de Ramachandran antiparalelos φ ≈ −139°, ψ ≈ +135°). Los puentes de hidrógeno laterales C=O···H–N (~4,7 Å entre ejes de hebra) pliegan los planos peptídicos orientando las cadenas laterales de los [[aminoácidos|amino-acid]] en caras opuestas alternas, base de [[proteínas|protein]] α+β como ubicuitina (PDB 1UBQ) y porinas en barril β.'
    }
  },

  'polynucleotide-strand': {
    en: {
      simple:
        'A polynucleotide strand is a single directional chain of [[nucleotides|nucleotide]] joined along a repeating [[sugar|sugar]]-[[phosphate|phosphate]] spine. Its sequence of projecting [[bases|base]] encodes genetic information and forms one half of [[DNA|dna]] or an entire [[RNA|rna]] molecule.',
      story:
        'Polymerases always extend nucleic acids in one strict direction, welding the five-prime [[phosphate|phosphate]] of each arriving [[nucleotide|nucleotide]] onto the three-prime oxygen tip of the preceding [[sugar|sugar]]. That negatively charged spine stays outward, cushioned by [[magnesium ions|atom-mg]], while flat ring-shaped [[bases|base]] stack neatly inward, ready to pair with an opposite [[DNA|dna]] strand or fold into a catalytic [[RNA|rna]].',
      blueprint:
        'Role: Directional 5\'-to-3\' informational polymer chain of nucleic acids; Inputs: Activated dNTP or NTP [[nucleotides|nucleotide]] uniting [[phosphate|phosphate]], pentose [[sugar|sugar]], and nitrogenous [[base|base]]; Inside: Covalent 3\'-5\' phosphodiester bridges ([[P|atom-p]], [[O|atom-o]]) orient planar [[bases|base]] for stacking and pairing, stabilized by [[Mg2+|atom-mg]]; Outputs: Single-stranded [[RNA|rna]] transcripts or one antiparallel backbone of the [[DNA|dna]] duplex.',
      scientific:
        'Unbranched directional 5\'-to-3\' chain of [[nucleotides|nucleotide]] polymerized via covalent 3\'-to-5\' phosphodiester linkages between pentose [[sugars|sugar]] (0.34 nm stacking rise in B-[[DNA|dna]]). Anionic [[phosphate|phosphate]] groups coordinate [[Mg2+|atom-mg]] counterions while C1\'-attached purine and pyrimidine [[bases|base]] mediate pi-stacking and Watson-Crick pairing; replacing 2\'-OH in [[RNA|rna]] ribose with 2\'-H in deoxyribose dramatically lowers spontaneous backbone hydrolysis.'
    },
    es: {
      simple:
        'Una hebra polinucleotídica es una cadena direccional de [[nucleótidos|nucleotide]] enlazados sobre una columna alterna de [[azúcar|sugar]] y [[fosfato|phosphate]]. Sus [[bases|base]] salientes escriben la secuencia genética y forman media hélice de [[ADN|dna]] o una molécula completa de [[ARN|rna]].',
      story:
        'Las polimerasas alargan siempre el código genético en un único sentido, soldando el [[fosfato|phosphate]] en posición 5\' de cada [[nucleótido|nucleotide]] nuevo con el oxígeno 3\' del [[azúcar|sugar]] anterior. Esa columna con carga negativa queda hacia fuera, equilibrada por [[iones magnesio|atom-mg]], mientras las [[bases|base]] planas se apilan hacia el interior listas para aparearse en [[ADN|dna]] o plegarse en [[ARN|rna]] funcional.',
      blueprint:
        'Rol: Polímero informacional direccional 5\'→3\' de los ácidos nucleicos · Entradas: [[Nucleótidos|nucleotide]] activados (dNTP o NTP) que combinan [[fosfato|phosphate]], pentosa ([[azúcar|sugar]]) y [[base|base]] nitrogenada · Interior: Enlaces fosfodiéster covalentes 3\'–5\' ([[P|atom-p]], [[O|atom-o]]) alinean las [[bases|base]] para apilamiento y apareamiento con [[Mg²⁺|atom-mg]] · Salida: Hebras de [[ARN|rna]] o una mitad antiparalela de la doble hélice de [[ADN|dna]].',
      scientific:
        'Polímero lineal direccional 5\'→3\' de [[nucleótidos|nucleotide]] unidos por puentes fosfodiéster 3\'–5\' (–O–PO₂⁻–O–) entre pentosas ([[azúcares|sugar]]), con paso de apilamiento de 0,34 nm en [[ADN|dna]]-B. Los [[fosfatos|phosphate]] aniónicos coordinan contraiones [[Mg²⁺|atom-mg]] mientras las [[bases|base]] púricas y pirimidínicas en C1\' gobiernan el apareamiento Watson–Crick; la ausencia del grupo 2\'-OH en desoxirribosa confiere al [[ADN|dna]] alta estabilidad hidrolítica frente al [[ARN|rna]].'
    }
  }
};

export const SCALE_BIOMOLECULES_PART_LENSES: PagePartLensMap = {
  'scale_explorer.html': {
    plant_100um: {
      en: {
        subtitle: '100 Micrometers - The Edge of Naked-Eye Vision',
        simple:
          'At 100 micrometers across, a large [[plant leaf cell|real-plant]] or human egg sits right at the smallest dot your unaided eye can barely spot. It is one thousand times wider than a [[virus|real-coronavirus]] and one million times wider than a [[hydrogen atom|atom-h]].',
        story:
          'Begin the logarithmic descent at 10^-4 meters, where a walled [[plant cell|real-plant]] spans roughly the width of a fine human hair. Because volume grows with the cube of width, this single solar-powered chamber holds a billion times more space than a 100-nanometer [[coronavirus|real-coronavirus]] - enough room for a huge water vacuole, dozens of green plastids, and stiff [[cellulose|cellulose]] cables bracing its exterior.',
        blueprint: {
          role: 'Top calibrated stop (10^-4 m / 100 micrometers; 1,000,000x [[H atom|atom-h]]) anchoring the [[scale explorer|scale-explorer]] rail',
          arrivesFrom: 'Macroscopic naked-eye threshold (~100 micrometers) stepping down into cellular microscopy',
          inside: 'Pressurized [[plant cell|real-plant]] wrapped in [[cellulose|cellulose]] walls alongside a ~100-micrometer human oocyte reference sphere',
          deliversTo: 'Steps down 5x in width (125x in volume) to the 20-micrometer [[animal cell|real-cell]] stop',
          loop: 'Demonstrates why 1:1 true-size pairing beats distorted textbook cartoons across six powers of ten'
        },
        scientific:
          'Stop 1 at 10^-4 m (100 micrometers = 100,000 nm = 10^6 angstroms; 10^6x [[atomic hydrogen|atom-h]]): representative angiosperm mesophyll [[plant cell|real-plant]] (40-100 micrometers, ~50-500 pL volume) and mammalian oocyte (~100-120 micrometers), marking the ~100-micrometer human unaided visual resolution limit and bounded by a [[cellulose|cellulose]] cell wall sustaining 0.4-1.0 MPa turgor.',
        from: [
          { nodeId: 'scale-explorer', label: '10^-4 m Top Stop', cargo: 'Naked-eye threshold (~100 um)' },
          { nodeId: 'life-overview', label: 'Eukaryotic Tier', cargo: 'Walled autotrophic cell' }
        ],
        to: [
          { nodeId: 'real-plant', label: 'Plant Cell Explorer', cargo: 'Full 3D leaf cell model' },
          { nodeId: 'real-cell', label: 'Next Stop: 20 um', cargo: '5x narrower animal cell' }
        ]
      },
      es: {
        subtitle: '100 micrómetros — El límite del ojo humano',
        simple:
          'Con 100 micrómetros de ancho, una [[célula vegetal|real-plant]] grande o un óvulo humano marca el punto más diminuto que apenas distingue la vista sin lentes. Es mil veces más ancha que un [[virus|real-coronavirus]] y un millón de veces mayor que un [[átomo de hidrógeno|atom-h]].',
        story:
          'El descenso logarítmico arranca en 10⁻⁴ metros, donde una [[célula vegetal|real-plant]] mide casi lo mismo que el grosor de un cabello fino. Como el volumen crece con el cubo de la anchura, esta cámara solar alberga mil millones de veces más espacio que un [[coronavirus|real-coronavirus]] de 100 nanómetros, suficiente para una gran vacuola, decenas de plastidios y cables de [[celulosa|cellulose]].',
        blueprint: {
          role: 'Primera parada calibrada (10⁻⁴ m / 100 µm; 1.000.000× un [[átomo de H|atom-h]]) del [[explorador de escala|scale-explorer]]',
          arrivesFrom: 'Umbral macroscópico del ojo desnudo (~100 µm) abriendo la escala celular',
          inside: '[[Célula vegetal|real-plant]] presurizada con pared de [[celulosa|cellulose]] junto a la esfera de referencia de un ovocito de ~100 µm',
          deliversTo: 'Desciende 5× en anchura (125× en volumen) hacia la [[célula animal|real-cell]] de 20 µm',
          loop: 'Demuestra por qué la comparación real 1:1 corrige los diagramas desproporcionados en seis potencias de diez'
        },
        scientific:
          'Parada 1 en 10⁻⁴ m (100 µm = 100.000 nm = 10⁶ Å; 10⁶× el [[hidrógeno atómico|atom-h]]): [[célula vegetal|real-plant]] mesofílica típica (40–100 µm, volumen ~50–500 pL) y ovocito humano (~100–120 µm), umbral práctico de resolución visual sin instrumentos y reforzada por pared de [[celulosa|cellulose]] bajo 0,4–1,0 MPa de turgencia.',
        from: [
          { nodeId: 'scale-explorer', label: 'Inicio en 10⁻⁴ m', cargo: 'Límite del ojo desnudo (~100 µm)' },
          { nodeId: 'life-overview', label: 'Nivel eucariota', cargo: 'Célula autótrofa con pared' }
        ],
        to: [
          { nodeId: 'real-plant', label: 'Explorar célula vegetal', cargo: 'Modelo 3D completo de hoja' },
          { nodeId: 'real-cell', label: 'Siguiente: 20 µm', cargo: 'Célula animal 5× más estrecha' }
        ]
      }
    },

    animal_20um: {
      en: {
        subtitle: '20 Micrometers - Typical Mammalian Somatic Cell',
        simple:
          'A typical [[animal cell|real-cell]] spans about 20 micrometers - five times narrower than a big [[plant cell|real-plant]], yet still ten times longer than [[E. coli|real-bacterium]]. Without a rigid cell wall, its flexible [[phospholipid|phospholipid]] skin changes shape as tissues move.',
        story:
          'Zooming in fivefold from the 100-micrometer mark brings an intact mammalian [[animal cell|real-cell]] cleanly into focus. Easily resolved by any standard light microscope, this 20-micrometer sphere packs a central nuclear vault, fuel-burning organelles, and thousands of [[ribosomes|ribosome]] inside a dynamic membrane rich in [[cholesterol|cholesterol]] - occupying roughly one thousand times the volume of a typical bacterium.',
        blueprint: {
          role: 'Second scale stop (2 x 10^-5 m / 20 micrometers; 200,000x [[H atom|atom-h]]) for wall-less eukaryotic tissue cells',
          arrivesFrom: 'Fivefold linear step down from the 100-micrometer [[plant cell|real-plant]] stop',
          inside: 'Compartmentalized [[animal cell|real-cell]] bounded by a [[phospholipid|phospholipid]] and [[cholesterol|cholesterol]] membrane',
          deliversTo: 'Steps down 4x in diameter to the 5-micrometer [[budding yeast|real-fungal]] and eukaryotic nucleus benchmark',
          loop: 'Sits comfortably 100x above the ~200 nm optical diffraction barrier of light microscopy'
        },
        scientific:
          'Stop 2 at 2 x 10^-5 m (20 micrometers = 20,000 nm = 2 x 10^5 angstroms; 200,000x [[atomic hydrogen|atom-h]]): typical mammalian somatic [[animal cell|real-cell]] (15-30 micrometers diameter; ~2-4 pL volume; ~200-300 mg/mL macromolecular crowding), lacking a [[cellulose|cellulose]] wall and bounded by a 7-10 nm [[phospholipid|phospholipid]]-[[cholesterol|cholesterol]] plasma membrane.',
        from: [
          { nodeId: 'real-plant', label: 'Previous Stop: 100 um', cargo: '5x wider plant cell' },
          { nodeId: 'life-overview', label: 'Eukaryotic Tier', cargo: 'Wall-less somatic cell' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Animal Cell Explorer', cargo: 'Full 3D mammalian cell' },
          { nodeId: 'real-fungal', label: 'Next Stop: 5 um', cargo: '4x narrower yeast cell' }
        ]
      },
      es: {
        subtitle: '20 micrómetros — Célula somática de mamífero',
        simple:
          'Una [[célula animal|real-cell]] típica mide unos 20 micrómetros: es cinco veces más estrecha que una [[célula vegetal|real-plant]] grande, pero diez veces más larga que [[E. coli|real-bacterium]]. Sin pared rígida, su membrana flexible de [[fosfolípidos|phospholipid]] se adapta al movimiento del tejido.',
        story:
          'Al acercarnos cinco veces desde los 100 micrómetros aparece con claridad una [[célula animal|real-cell]] completa. Fácil de observar con cualquier microscopio óptico escolar, esta esfera de 20 micrómetros aloja un núcleo central, orgánulos energéticos y miles de [[ribosomas|ribosome]] bajo una membrana rica en [[colesterol|cholesterol]], con cerca de mil veces el volumen de una bacteria corriente.',
        blueprint: {
          role: 'Segunda parada (2 × 10⁻⁵ m / 20 µm; 200.000× un [[átomo de H|atom-h]]) para células eucariotas sin pared',
          arrivesFrom: 'Descenso lineal de 5× desde la [[célula vegetal|real-plant]] de 100 µm',
          inside: '[[Célula animal|real-cell]] compartimentada delimitada por bicapa de [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]]',
          deliversTo: 'Desciende 4× en diámetro hacia la [[levadura|real-fungal]] y el núcleo eucariota de 5 µm',
          loop: 'Permanece 100× por encima del límite de difracción óptica de ~200 nm'
        },
        scientific:
          'Parada 2 en 2 × 10⁻⁵ m (20 µm = 20.000 nm = 2 × 10⁵ Å; 200.000× el [[hidrógeno|atom-h]]): [[célula animal|real-cell]] somática de mamífero (15–30 µm de diámetro; volumen ~2–4 pL; concentración macromolecular de ~200–300 mg/mL), sin pared de [[celulosa|cellulose]] y delimitada por una membrana de [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]] de 7–10 nm.',
        from: [
          { nodeId: 'real-plant', label: 'Anterior: 100 µm', cargo: 'Célula vegetal 5× mayor' },
          { nodeId: 'life-overview', label: 'Nivel eucariota', cargo: 'Célula somática sin pared' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Explorar célula animal', cargo: 'Modelo 3D mamífero completo' },
          { nodeId: 'real-fungal', label: 'Siguiente: 5 µm', cargo: 'Levadura 4× más estrecha' }
        ]
      }
    },

    yeast_5um: {
      en: {
        subtitle: '5 Micrometers - Budding Yeast & Eukaryotic Nucleus',
        simple:
          'At 5 micrometers wide, an entire [[budding yeast cell|real-fungal]] is about the same size as the nucleus sitting inside one [[animal cell|real-cell]]. Even at this compact scale, it keeps full eukaryotic machinery and divides by pinching off daughter buds.',
        story:
          'Stepping down fourfold from the 20-micrometer [[animal cell|real-cell]] lands on [[Saccharomyces cerevisiae|real-fungal]], the single-celled fungus behind bread and brewing. Packing a membrane-bound nucleus, mitochondria, and [[ribosomes|ribosome]] into a tough 5-micrometer oval proves that eukaryotic organization can fit inside the footprint of a single animal nucleus while remaining more than twice as long as [[E. coli|real-bacterium]].',
        blueprint: {
          role: 'Third scale stop (5 x 10^-6 m / 5 micrometers; 50,000x [[H atom|atom-h]]) anchoring compact eukaryotes and nuclear diameter',
          arrivesFrom: 'Fourfold linear step down from the 20-micrometer [[animal cell|real-cell]] stop',
          inside: 'Single-celled [[budding yeast|real-fungal]] (~5 x 4 micrometers) matching the ~5-6 micrometer scale of a mammalian nucleus',
          deliversTo: 'Steps down 2.5x to the 2-micrometer autonomous prokaryote [[E. coli|real-bacterium]]',
          loop: 'Bridges large multicellular eukaryotes and single-compartment bacterial cells at exact relative scale'
        },
        scientific:
          'Stop 3 at 5 x 10^-6 m (5 micrometers = 5,000 nm = 5 x 10^4 angstroms; 50,000x [[atomic hydrogen|atom-h]]): [[Saccharomyces cerevisiae|real-fungal]] (~5 x 4 micrometers; ~40 fL volume; 12.1 Mbp linear genome across 16 chromosomes), directly matching the ~5-6 micrometer diameter of a somatic eukaryotic nucleus while remaining 25x above the optical diffraction limit.',
        from: [
          { nodeId: 'real-cell', label: 'Previous Stop: 20 um', cargo: '4x wider animal cell' },
          { nodeId: 'life-overview', label: 'Compact Eukaryote', cargo: 'Nucleus-sized fungal cell' }
        ],
        to: [
          { nodeId: 'real-fungal', label: 'Budding Yeast Explorer', cargo: 'Full 3D S. cerevisiae model' },
          { nodeId: 'real-bacterium', label: 'Next Stop: 2 um', cargo: '2.5x smaller E. coli rod' }
        ]
      },
      es: {
        subtitle: '5 micrómetros — Levadura y núcleo eucariota',
        simple:
          'Con 5 micrómetros de diámetro, una [[célula completa de levadura|real-fungal]] tiene casi el mismo tamaño que el núcleo dentro de una [[célula animal|real-cell]]. Incluso en este formato compacto conserva todos los orgánulos eucariotas y se divide formando yemas.',
        story:
          'Bajar cuatro veces desde la [[célula animal|real-cell]] de 20 micrómetros nos lleva a [[Saccharomyces cerevisiae|real-fungal]], el hongo unicelular del pan y la fermentación. Reunir núcleo, mitocondrias y [[ribosomas|ribosome]] dentro de un óvalo resistente de 5 micrómetros demuestra que la arquitectura eucariota cabe en el espacio de un solo núcleo animal, siendo aún más del doble de larga que [[E. coli|real-bacterium]].',
        blueprint: {
          role: 'Tercera parada (5 × 10⁻⁶ m / 5 µm; 50.000× un [[átomo de H|atom-h]]) para eucariotas compactos y escala nuclear',
          arrivesFrom: 'Descenso lineal de 4× desde la [[célula animal|real-cell]] de 20 µm',
          inside: '[[Levadura en gemación|real-fungal]] unicelular (~5 × 4 µm) equivalente en tamaño al núcleo mamífero (~5–6 µm)',
          deliversTo: 'Desciende 2,5× hacia la bacteria procariota autónoma [[E. coli|real-bacterium]] de 2 µm',
          loop: 'Tiende el puente real entre grandes células eucariotas y bacterias de un solo compartimento'
        },
        scientific:
          'Parada 3 en 5 × 10⁻⁶ m (5 µm = 5.000 nm = 5 × 10⁴ Å; 50.000× el [[hidrógeno|atom-h]]): [[Saccharomyces cerevisiae|real-fungal]] (~5 × 4 µm; volumen ~40 fL; genoma lineal de 12,1 Mpb en 16 cromosomas), equiparable en escala a un núcleo eucariota somático (~5–6 µm) y 25× por encima del límite de difracción óptica.',
        from: [
          { nodeId: 'real-cell', label: 'Anterior: 20 µm', cargo: 'Célula animal 4× más ancha' },
          { nodeId: 'life-overview', label: 'Eucariota compacto', cargo: 'Escala de un núcleo celular' }
        ],
        to: [
          { nodeId: 'real-fungal', label: 'Explorar levadura', cargo: 'Modelo 3D de S. cerevisiae' },
          { nodeId: 'real-bacterium', label: 'Siguiente: 2 µm', cargo: 'Bacilo E. coli 2,5× menor' }
        ]
      }
    },

    ecoli_2um: {
      en: {
        subtitle: '2 Micrometers - Autonomous Bacterium (E. coli)',
        simple:
          'Measuring roughly 2 micrometers long and 1 micrometer wide, [[E. coli|real-bacterium]] packs all four essentials of independent life into one open room: a [[lipid membrane|phospholipid]], circular [[DNA|dna]], [[ribosomes|ribosome]], and membrane [[ATP synthase|atp-synthase]] engines inside a compact bacterial capsule.',
        story:
          'At 2 micrometers, cellular architecture shifts from multi-room eukaryotes to a single open prokaryotic chamber. Compared side by side with the 20-micrometer [[animal cell|real-cell]], [[E. coli|real-bacterium]] is ten times shorter and roughly one thousand times smaller in volume, yet its ~1-femtoliter capsule still houses a 4.6-million-base-pair [[DNA|dna]] loop, tens of thousands of [[ribosomes|ribosome]], and spinning proton-powered turbines.',
        blueprint: {
          role: 'Fourth scale stop (2 x 10^-6 m / 2 micrometers; 20,000x [[H atom|atom-h]]) anchoring autonomous prokaryotic scale',
          arrivesFrom: '2.5x linear step down from 5-micrometer [[budding yeast|real-fungal]] into single-room bacteria',
          inside: 'Rod-shaped [[E. coli|real-bacterium]] (~1 x 2 micrometers) integrating circular [[DNA|dna]], [[ribosomes|ribosome]], and [[ATP synthase|atp-synthase]]',
          deliversTo: 'Steps down nearly 7x to the 300-nanometer wall-less minimal bacterium [[Mycoplasma|real-mycoplasma]]',
          loop: 'Near the practical lower comfort zone of routine bright-field light microscopy (10x above ~200 nm limit)'
        },
        scientific:
          'Stop 4 at 2 x 10^-6 m (2 micrometers = 2,000 nm = 2 x 10^4 angstroms; 20,000x [[atomic hydrogen|atom-h]]): Gram-negative rod [[Escherichia coli|real-bacterium]] (~1.0 x 2.0 micrometers; ~1 fL volume; 4.64 Mbp circular ds[[DNA|dna]]; ~20,000-50,000 70S [[ribosomes|ribosome]]; plasma-membrane F1F0 [[ATP synthase|atp-synthase]]), marking the baseline autonomous prokaryotic cell size.',
        from: [
          { nodeId: 'real-fungal', label: 'Previous Stop: 5 um', cargo: '2.5x wider yeast cell' },
          { nodeId: 'life-overview', label: 'Autonomous Prokaryote', cargo: 'All 4 pillars in 1 room' }
        ],
        to: [
          { nodeId: 'real-bacterium', label: 'E. coli Explorer', cargo: 'Full 3D bacterium model' },
          { nodeId: 'real-mycoplasma', label: 'Next Stop: 300 nm', cargo: 'Minimal 300 nm bacterium' }
        ]
      },
      es: {
        subtitle: '2 micrómetros — Bacteria autónoma (E. coli)',
        simple:
          'Con unos 2 micrómetros de largo por 1 de ancho, [[E. coli|real-bacterium]] concentra los cuatro pilares de la vida autónoma en una sola cámara abierta: [[membrana lipídica|phospholipid]], [[ADN|dna]] circular, [[ribosomas|ribosome]] y motores de [[ATP sintasa|atp-synthase]].',
        story:
          'En los 2 micrómetros pasamos de eucariotas con múltiples estancias a una sola habitación procariota abierta. Frente a la [[célula animal|real-cell]] de 20 micrómetros, [[E. coli|real-bacterium]] es diez veces más corta y cerca de mil veces menor en volumen, pero su cápsula de ~1 femtolitro contiene un bucle de [[ADN|dna]] de 4,6 millones de pares de bases, decenas de miles de [[ribosomas|ribosome]] y turbinas de protones.',
        blueprint: {
          role: 'Cuarta parada (2 × 10⁻⁶ m / 2 µm; 20.000× un [[átomo de H|atom-h]]) de la escala procariota autónoma',
          arrivesFrom: 'Descenso lineal de 2,5× desde la [[levadura|real-fungal]] de 5 µm hacia bacterias sin núcleo',
          inside: 'Bacilo [[E. coli|real-bacterium]] (~1 × 2 µm) que integra [[ADN|dna]] circular, [[ribosomas|ribosome]] y [[ATP sintasa|atp-synthase]]',
          deliversTo: 'Desciende casi 7× hacia la bacteria mínima sin pared [[Mycoplasma|real-mycoplasma]] de 300 nm',
          loop: 'Se sitúa 10× por encima del límite de difracción óptica (~200 nm), visible aún con microscopio de luz'
        },
        scientific:
          'Parada 4 en 2 × 10⁻⁶ m (2 µm = 2.000 nm = 2 × 10⁴ Å; 20.000× el [[hidrógeno|atom-h]]): bacilo gramnegativo [[Escherichia coli|real-bacterium]] (~1,0 × 2,0 µm; volumen ~1 fL; [[ADN|dna]] circular de 4,64 Mpb; ~20.000–50.000 [[ribosomas|ribosome]] 70S; [[ATP sintasa|atp-synthase]] F₁F₀ en membrana interna), referencia estándar de célula procariota autónoma.',
        from: [
          { nodeId: 'real-fungal', label: 'Anterior: 5 µm', cargo: 'Levadura 2,5× más ancha' },
          { nodeId: 'life-overview', label: 'Procariota autónomo', cargo: 'Cuatro pilares en un cuarto' }
        ],
        to: [
          { nodeId: 'real-bacterium', label: 'Explorar E. coli', cargo: 'Modelo 3D bacteriano completo' },
          { nodeId: 'real-mycoplasma', label: 'Siguiente: 300 nm', cargo: 'Bacteria mínima de 300 nm' }
        ]
      }
    },

    myco_300nm: {
      en: {
        subtitle: '300 Nanometers - Minimal Cell at the Optical Edge',
        simple:
          'At just 300 nanometers across, [[Mycoplasma genitalium|real-mycoplasma]] is the tiniest known self-replicating cell, sitting right above the 200-nanometer blur limit of visible light. Despite losing its cell wall, it still carries [[DNA|dna]] and its own [[ribosomes|ribosome]].',
        story:
          'Crossing from micrometers into hundreds of nanometers reaches the absolute physical floor of cellular life. [[Mycoplasma genitalium|real-mycoplasma]] packs a minimal 580-kilobase [[DNA|dna]] circle and roughly 150 [[ribosomes|ribosome]] into a wall-less 300-nanometer flask stiffened by stolen host [[cholesterol|cholesterol]]. One small step further down crosses the 200-nanometer diffraction barrier of visible light, where ordinary light microscopes blur into fog.',
        blueprint: {
          role: 'Fifth scale stop (3 x 10^-7 m / 300 nm; 3,000x [[H atom|atom-h]]) marking minimal cellular size near the 200 nm optical barrier',
          arrivesFrom: 'Nearly 7x linear drop from autonomous [[E. coli|real-bacterium]] (2 micrometers) via reductive evolution',
          inside: 'Wall-less [[Mycoplasma genitalium|real-mycoplasma]] (~300 x 600 nm) with [[cholesterol|cholesterol]]-braced [[phospholipid|phospholipid]] bilayer, 580 kbp [[DNA|dna]], and ~150 [[ribosomes|ribosome]]',
          deliversTo: 'Crosses the ~200 nm Abbe light-microscope limit down to 100-nanometer [[SARS-CoV-2|real-coronavirus]] and [[HIV-1|real-hiv]]',
          loop: 'Separates the smallest true cells (own ribosomes and binary fission) from acellular viruses right below'
        },
        scientific:
          'Stop 5 at 3 x 10^-7 m (300 nm = 0.3 micrometers = 3,000 angstroms; 3,000x [[atomic hydrogen|atom-h]]): Mollicutes minimal bacterium [[Mycoplasma genitalium|real-mycoplasma]] (~300 x 600 nm; ~0.02-0.04 fL; 580,076 bp ds[[DNA|dna]]; P140/P110 Nap adhesin PDB 6RUT), hovering just above the ~200 nm Abbe visible-light diffraction limit (lambda / 2 NA) while retaining ~150 70S [[ribosomes|ribosome]].',
        from: [
          { nodeId: 'real-bacterium', label: 'Previous Stop: 2 um', cargo: '7x larger E. coli rod' },
          { nodeId: 'phospholipid', label: 'Sterol Bilayer', cargo: 'Wall-less 300 nm membrane' }
        ],
        to: [
          { nodeId: 'real-mycoplasma', label: 'Mycoplasma Explorer', cargo: 'Smallest self-replicating cell' },
          { nodeId: 'real-coronavirus', label: 'Next Stop: 100 nm', cargo: '3x smaller virion particle' }
        ]
      },
      es: {
        subtitle: '300 nanómetros — Célula mínima al borde óptico',
        simple:
          'Con apenas 300 nanómetros de ancho, [[Mycoplasma genitalium|real-mycoplasma]] es la célula autorreplicante más pequeña conocida, justo encima del límite de 200 nanómetros de la luz visible. Aun sin pared celular, conserva [[ADN|dna]] y [[ribosomas|ribosome]] propios.',
        story:
          'Al bajar de los micrómetros a los cientos de nanómetros tocamos el suelo físico de la vida celular. [[Mycoplasma genitalium|real-mycoplasma]] comprime un círculo mínimo de [[ADN|dna]] de 580 kilobases y unos 150 [[ribosomas|ribosome]] en un matraz de 300 nm reforzado con [[colesterol|cholesterol]] del huésped. Un paso más abajo cruzamos la barrera de difracción de 200 nm, donde los microscopios de luz dejan de resolver detalles.',
        blueprint: {
          role: 'Quinta parada (3 × 10⁻⁷ m / 300 nm; 3.000× un [[átomo de H|atom-h]]) en el límite mínimo celular junto a la barrera óptica de 200 nm',
          arrivesFrom: 'Descenso lineal de ~7× desde [[E. coli|real-bacterium]] (2 µm) por evolución reductiva',
          inside: '[[Mycoplasma genitalium|real-mycoplasma]] sin pared (~300 × 600 nm) con bicapa de [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]], [[ADN|dna]] de 580 kpb y ~150 [[ribosomas|ribosome]]',
          deliversTo: 'Cruza el límite de difracción de Abbe (~200 nm) hacia [[SARS-CoV-2|real-coronavirus]] y [[HIV-1|real-hiv]] de 100 nm',
          loop: 'Traza la frontera real entre las células más diminutas y los virus acelulares situados justo debajo'
        },
        scientific:
          'Parada 5 en 3 × 10⁻⁷ m (300 nm = 0,3 µm = 3.000 Å; 3.000× el [[hidrógeno|atom-h]]): bacteria mínima Mollicutes [[Mycoplasma genitalium|real-mycoplasma]] (~300 × 600 nm; ~0,02–0,04 fL; [[ADN|dna]]bc de 580.076 pb; adhesina Nap P140/P110 PDB 6RUT), situada justo por encima del límite de difracción óptica de Abbe (~200 nm) conservando ~150 [[ribosomas|ribosome]] 70S.',
        from: [
          { nodeId: 'real-bacterium', label: 'Anterior: 2 µm', cargo: 'E. coli 7× más larga' },
          { nodeId: 'phospholipid', label: 'Bicapa con esterol', cargo: 'Sin pared en 300 nm' }
        ],
        to: [
          { nodeId: 'real-mycoplasma', label: 'Explorar Mycoplasma', cargo: 'Célula mínima autorreplicante' },
          { nodeId: 'real-coronavirus', label: 'Siguiente: 100 nm', cargo: 'Virión 3× más pequeño' }
        ]
      }
    },

    virus_100nm: {
      en: {
        subtitle: '100 Nanometers - Enveloped Virions Below Optical Light',
        simple:
          'At 100 nanometers wide, [[SARS-CoV-2|real-coronavirus]] and [[HIV-1|real-hiv]] sit below what visible light can resolve and are a thousand times narrower than a [[plant cell|real-plant]]. Too small to hold [[ribosomes|ribosome]] or metabolism, they stay inert until hijacking a cell.',
        story:
          'Past the 200-nanometer light barrier, electron microscopes reveal enveloped virions such as [[SARS-CoV-2|real-coronavirus]] and [[HIV-1|real-hiv]] hovering near 100 to 120 nanometers. Wrapping a delicate [[RNA|rna]] genome inside a stolen [[phospholipid|phospholipid]] coat studded with spike [[proteins|protein]], each particle leaves zero space for [[ribosomes|ribosome]] or [[ATP synthase|atp-synthase]] - explaining why viruses must invade much larger host cells to copy themselves.',
        blueprint: {
          role: 'Sixth scale stop (10^-7 m / 100 nm; 1,000x [[H atom|atom-h]]) entering the sub-optical acellular virion regime',
          arrivesFrom: '3x linear step down from 300-nanometer [[Mycoplasma|real-mycoplasma]] across the 200 nm optical diffraction cutoff',
          inside: 'Enveloped [[SARS-CoV-2|real-coronavirus]] (~100-120 nm) and [[HIV-1|real-hiv]] (~110-120 nm) packaging [[RNA|rna]] and surface [[proteins|protein]] inside host-derived [[phospholipids|phospholipid]]',
          deliversTo: 'Steps down 4x to the 25-nanometer [[ribosome|ribosome]] nanomachine that viruses lack and must hijack',
          loop: '1,000x narrower and 1,000,000,000x smaller in volume than the 100-micrometer [[plant cell|real-plant]]'
        },
        scientific:
          'Stop 6 at 10^-7 m (100 nm = 0.1 micrometers = 1,000 angstroms; 1,000x [[atomic hydrogen|atom-h]]): enveloped (+)ss[[RNA|rna]] virions [[SARS-CoV-2|real-coronavirus]] (~100-120 nm; Spike PDB 6VXX, RdRp PDB 6M71) and [[HIV-1|real-hiv]] (~110-120 nm; Env PDB 4TVP, CA PDB 3H4E). Below visible-light resolution (~200 nm), requiring cryo-EM/TEM imaging and carrying zero [[ribosomes|ribosome]] or endogenous bioenergetics.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Previous Stop: 300 nm', cargo: 'Crosses ~200 nm optical limit' },
          { nodeId: 'real-cell', label: 'Host Target Cell', cargo: '200x wider mammalian cell' }
        ],
        to: [
          { nodeId: 'real-coronavirus', label: 'SARS-CoV-2 Explorer', cargo: '100-120 nm coronavirus' },
          { nodeId: 'real-hiv', label: 'HIV-1 Explorer', cargo: '110-120 nm retrovirus' }
        ]
      },
      es: {
        subtitle: '100 nanómetros — Viriones envueltos bajo la luz visible',
        simple:
          'Con 100 nanómetros de diámetro, [[SARS-CoV-2|real-coronavirus]] y [[HIV-1|real-hiv]] caen por debajo de lo que resuelve la luz visible y son mil veces más estrechos que una [[célula vegetal|real-plant]]. Sin espacio para [[ribosomas|ribosome]], permanecen inertes hasta secuestrar una célula.',
        story:
          'Tras cruzar el límite óptico de 200 nanómetros, la microscopía electrónica revela viriones envueltos como [[SARS-CoV-2|real-coronavirus]] y [[HIV-1|real-hiv]] cerca de los 100 a 120 nanómetros. Cada partícula guarda [[ARN|rna]] bajo una envoltura robada de [[fosfolípidos|phospholipid]] con espículas de [[proteína|protein]], sin sitio alguno para [[ribosomas|ribosome]] ni [[ATP sintasa|atp-synthase]], lo que obliga al virus a invadir una célula huésped.',
        blueprint: {
          role: 'Sexta parada (10⁻⁷ m / 100 nm; 1.000× un [[átomo de H|atom-h]]) en el régimen subóptico de viriones acelulares',
          arrivesFrom: 'Descenso de 3× desde [[Mycoplasma|real-mycoplasma]] (300 nm) traspasando el límite óptico de 200 nm',
          inside: 'Viriones envueltos [[SARS-CoV-2|real-coronavirus]] (~100–120 nm) y [[HIV-1|real-hiv]] (~110–120 nm) con [[ARN|rna]] y [[proteínas|protein]] sobre [[fosfolípidos|phospholipid]]',
          deliversTo: 'Desciende 4× hacia la nanomáquina del [[ribosoma|ribosome]] (25 nm) que los virus no poseen y deben secuestrar',
          loop: '1.000× más estrecho y 1.000.000.000× menor en volumen que la [[célula vegetal|real-plant]] de 100 µm'
        },
        scientific:
          'Parada 6 en 10⁻⁷ m (100 nm = 0,1 µm = 1.000 Å; 1.000× el [[hidrógeno|atom-h]]): viriones envueltos (+)ARNmc [[SARS-CoV-2|real-coronavirus]] (~100–120 nm; espícula PDB 6VXX, RdRp PDB 6M71) y [[HIV-1|real-hiv]] (~110–120 nm; Env PDB 4TVP, cápside PDB 3H4E). Invisibles al microscopio óptico convencional (~200 nm), requieren crio-EM/MET y carecen por completo de [[ribosomas|ribosome]] y metabolismo propio.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Anterior: 300 nm', cargo: 'Cruza límite óptico (~200 nm)' },
          { nodeId: 'real-cell', label: 'Célula huésped', cargo: 'Célula animal 200× mayor' }
        ],
        to: [
          { nodeId: 'real-coronavirus', label: 'Explorar SARS-CoV-2', cargo: 'Coronavirus de 100–120 nm' },
          { nodeId: 'real-hiv', label: 'Explorar HIV-1', cargo: 'Retrovirus de 110–120 nm' }
        ]
      }
    },

    ribo_25nm: {
      en: {
        subtitle: '25 Nanometers - The Ribosome Protein Builder',
        simple:
          'At 25 nanometers wide, a [[ribosome|ribosome]] is four times smaller than a [[coronavirus|real-coronavirus]], yet it is the universal workshop of every living cell. Reading [[RNA|rna]] instructions, it links [[amino acids|amino-acid]] one by one into folded [[proteins|protein]].',
        story:
          'Shrink fourfold inside the sub-optical world and whole particles give way to molecular machines. Roughly 21 to 25 nanometers across in [[E. coli|real-bacterium]] and up to 30 nanometers in eukaryotes, the [[ribosome|ribosome]] weaves folded catalytic [[RNA|rna]] strands together with dozens of [[proteins|protein]]. Thousands of these compact assemblers crowd every living cell, translating genetic messages into enzymes half their own size.',
        blueprint: {
          role: 'Seventh scale stop (2.5 x 10^-8 m / 25 nm; 250x [[H atom|atom-h]]) anchoring macromolecular ribonucleoprotein machines',
          arrivesFrom: 'Fourfold linear step down from 100-nanometer [[virions|real-coronavirus]] into universal cellular translation engines',
          inside: 'Small and large subunits of catalytic [[RNA|rna]] plus ribosomal [[proteins|protein]] joining [[amino acids|amino-acid]] into [[polypeptides|polypeptide]]',
          deliversTo: 'Steps down 2.5x to 10-nanometer folded enzyme complexes such as [[RuBisCO|rubisco]] and [[ATP synthase|atp-synthase]]',
          loop: 'Only resolved in atomic detail by cryo-electron microscopy and X-ray crystallography'
        },
        scientific:
          'Stop 7 at 2.5 x 10^-8 m (25 nm = 250 angstroms; 250x [[atomic hydrogen|atom-h]]): bacterial 70S [[ribosome|ribosome]] (~21-25 nm; ~2.5 MDa; [[E. coli|real-bacterium]] PDB 4YBB) and eukaryotic 80S ribosome (~25-30 nm; ~4.3 MDa). Two-subunit ribozyme (~60% r[[RNA|rna]], ~40% [[protein|protein]] by mass) catalyzing peptidyl transfer between tRNA-delivered [[amino acids|amino-acid]] at ~10-20 residues per second.',
        from: [
          { nodeId: 'real-coronavirus', label: 'Previous Stop: 100 nm', cargo: '4x wider virion (0 ribosomes)' },
          { nodeId: 'rna', label: 'rRNA & mRNA', cargo: 'Catalytic RNA core & code' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Ribosome Explorer', cargo: '25 nm translation machine' },
          { nodeId: 'protein', label: 'Next Stop: 10 nm', cargo: 'Folded enzyme complexes' }
        ]
      },
      es: {
        subtitle: '25 nanómetros — El ribosoma ensamblador de proteínas',
        simple:
          'Con 25 nanómetros de ancho, un [[ribosoma|ribosome]] es cuatro veces menor que un [[coronavirus|real-coronavirus]], pero constituye el taller universal de toda célula viva. Leyendo mensajes de [[ARN|rna]], encadena [[aminoácidos|amino-acid]] uno tras otro hasta formar [[proteínas|protein]] funcionales.',
        story:
          'Al bajar cuatro veces en el mundo subóptico, las partículas completas ceden paso a las máquinas moleculares. Con 21 a 25 nanómetros en [[E. coli|real-bacterium]] y hasta 30 nm en eucariotas, el [[ribosoma|ribosome]] entrelaza hebras catalíticas de [[ARN|rna]] con decenas de [[proteínas|protein]]. Miles de estos ensambladores llenan cada célula viva traduciendo genes en enzimas que miden menos de la mitad que ellos.',
        blueprint: {
          role: 'Séptima parada (2,5 × 10⁻⁸ m / 25 nm; 250× un [[átomo de H|atom-h]]) de nanomáquinas ribonucleoproteicas',
          arrivesFrom: 'Descenso lineal de 4× desde los [[viriones|real-coronavirus]] de 100 nm hacia la traducción celular universal',
          inside: 'Subunidades menor y mayor de [[ARN|rna]] catalítico y [[proteínas|protein]] que enlazan [[aminoácidos|amino-acid]] en [[polipéptidos|polypeptide]]',
          deliversTo: 'Desciende 2,5× hacia complejos enzimáticos plegados de 10 nm como [[RuBisCO|rubisco]] y [[ATP sintasa|atp-synthase]]',
          loop: 'Su arquitectura atómica solo se resuelve mediante criomicroscopía electrónica y cristalografía de rayos X'
        },
        scientific:
          'Parada 7 en 2,5 × 10⁻⁸ m (25 nm = 250 Å; 250× el [[hidrógeno|atom-h]]): [[ribosoma|ribosome]] bacteriano 70S (~21–25 nm; ~2,5 MDa; [[E. coli|real-bacterium]] PDB 4YBB) y eucariota 80S (~25–30 nm; ~4,3 MDa). Ribozima bipartita (~60 % [[ARN|rna]] ribosómico y ~40 % [[proteína|protein]] en masa) que cataliza enlaces peptídicos entre [[aminoácidos|amino-acid]] a ~10–20 residuos por segundo.',
        from: [
          { nodeId: 'real-coronavirus', label: 'Anterior: 100 nm', cargo: 'Virión 4× mayor (sin ribosomas)' },
          { nodeId: 'rna', label: 'ARNr y ARNm', cargo: 'Núcleo catalítico y molde' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Explorar ribosoma', cargo: 'Máquina traductora de 25 nm' },
          { nodeId: 'protein', label: 'Siguiente: 10 nm', cargo: 'Complejos enzimáticos plegados' }
        ]
      }
    },

    enzyme_10nm: {
      en: {
        subtitle: '10 Nanometers - Multi-Subunit Protein Engines',
        simple:
          'At about 10 nanometers across, multi-part [[protein|protein]] engines like [[RuBisCO|rubisco]] and the spinning head of [[ATP synthase|atp-synthase]] drive essential cellular chemistry. Each folded enzyme complex is just one hundred times wider than a single [[hydrogen atom|atom-h]].',
        story:
          'Ten nanometers is the signature scale of folded multi-subunit [[proteins|protein]] built from bundled [[alpha-helices|alpha-helix]] and pleated [[beta-sheets|beta-sheet]]. Side by side here sit two planetary heavyweights: ~11-nanometer [[RuBisCO|rubisco]], which captures carbon dioxide from air inside [[plant cells|real-plant]], and the ~10-nanometer catalytic crown of [[ATP synthase|atp-synthase]], which turns proton flow into usable ATP across every autonomous domain of life.',
        blueprint: {
          role: 'Eighth scale stop (10^-8 m / 10 nm; 100x [[H atom|atom-h]]) showcasing folded multi-subunit [[protein|protein]] complexes',
          arrivesFrom: '2.5x linear step down from 25-nanometer [[ribosomes|ribosome]] that synthesize their [[polypeptide|polypeptide]] chains',
          inside: 'Folded [[alpha-helix|alpha-helix]] and [[beta-sheet|beta-sheet]] subunits forming ~11 nm [[RuBisCO|rubisco]] and ~10 nm [[ATP synthase|atp-synthase]] rotors',
          deliversTo: 'Steps down 5x to the 2-nanometer [[DNA|dna]] double helix carrying the genes for every subunit',
          loop: 'Bridges quaternary enzyme machines directly into [[the four biomolecules|four-biomolecules]] protein workbench'
        },
        scientific:
          'Stop 8 at 10^-8 m (10 nm = 100 angstroms; 100x [[atomic hydrogen|atom-h]]): quaternary catalytic [[protein|protein]] complexes exemplified by hexadecameric L8S8 [[RuBisCO|rubisco]] (~11 nm diameter; ~550 kDa; PDB 1RCX) and rotary F1F0 [[ATP synthase|atp-synthase]] (~10 nm F1 catalytic head width, ~22-25 nm axial height; PDB 6OQR, 6FKF), folding [[polypeptide|polypeptide]] chains into precise active sites.',
        from: [
          { nodeId: 'ribosome', label: 'Previous Stop: 25 nm', cargo: 'Translated polypeptide chains' },
          { nodeId: 'four-biomolecules', label: 'Protein Pedestal', cargo: 'Quaternary folded assemblies' }
        ],
        to: [
          { nodeId: 'rubisco', label: 'RuBisCO Explorer', cargo: '11 nm carbon-fixing complex' },
          { nodeId: 'atp-synthase', label: 'ATP Synthase Explorer', cargo: '10 nm rotary turbine head' }
        ]
      },
      es: {
        subtitle: '10 nanómetros — Motores proteicos multisubunidad',
        simple:
          'Alrededor de los 10 nanómetros operan motores [[proteicos|protein]] de varias piezas como [[RuBisCO|rubisco]] y la cabeza giratoria de la [[ATP sintasa|atp-synthase]]. Cada una de estas enzimas mide apenas cien veces el diámetro de un [[átomo de hidrógeno|atom-h]].',
        story:
          'Diez nanómetros es la escala característica de las [[proteínas|protein]] plegadas en haces de [[hélices α|alpha-helix]] y [[láminas β|beta-sheet]]. Aquí coinciden dos gigantes químicos del planeta: [[RuBisCO|rubisco]] (~11 nm), que fija el dióxido de carbono del aire en las [[células vegetales|real-plant]], y la corona catalítica (~10 nm) de la [[ATP sintasa|atp-synthase]], que transforma el flujo de protones en ATP en todo organismo autónomo.',
        blueprint: {
          role: 'Octava parada (10⁻⁸ m / 10 nm; 100× un [[átomo de H|atom-h]]) dedicada a complejos enzimáticos [[proteicos|protein]]',
          arrivesFrom: 'Descenso lineal de 2,5× desde los [[ribosomas|ribosome]] de 25 nm que sintetizan sus [[polipéptidos|polypeptide]]',
          inside: 'Subunidades de [[hélice α|alpha-helix]] y [[lámina β|beta-sheet]] ensambladas en [[RuBisCO|rubisco]] (~11 nm) y [[ATP sintasa|atp-synthase]] (~10 nm)',
          deliversTo: 'Desciende 5× hacia la doble hélice de [[ADN|dna]] de 2 nm que codifica cada subunidad',
          loop: 'Conecta las enzimas cuaternarias directamente con el pedestal proteico de [[las cuatro biomoléculas|four-biomolecules]]'
        },
        scientific:
          'Parada 8 en 10⁻⁸ m (10 nm = 100 Å; 100× el [[hidrógeno|atom-h]]): complejos [[proteicos|protein]] catalíticos cuaternarios representados por [[RuBisCO|rubisco]] hexadecamérica L₈S₈ (~11 nm de diámetro; ~550 kDa; PDB 1RCX) y la [[ATP sintasa|atp-synthase]] rotatoria F₁F₀ (~10 nm de ancho en F₁, ~22–25 nm de altura; PDB 6OQR, 6FKF), ensamblando [[polipéptidos|polypeptide]] en sitios activos de precisión.',
        from: [
          { nodeId: 'ribosome', label: 'Anterior: 25 nm', cargo: 'Cadenas polipeptídicas traducidas' },
          { nodeId: 'four-biomolecules', label: 'Pedestal de proteínas', cargo: 'Ensamblajes cuaternarios' }
        ],
        to: [
          { nodeId: 'rubisco', label: 'Explorar RuBisCO', cargo: 'Complejo fijador de 11 nm' },
          { nodeId: 'atp-synthase', label: 'Explorar ATP sintasa', cargo: 'Cabeza rotatoria de 10 nm' }
        ]
      }
    },

    dna_2nm: {
      en: {
        subtitle: '2 Nanometers - Width of the DNA Double Helix',
        simple:
          'No matter how large the organism, its [[DNA|dna]] double helix measures only 2 nanometers across - fifty thousand times narrower than a 100-micrometer [[plant cell|real-plant]] and just twenty times wider than a single [[hydrogen atom|atom-h]] beside it.',
        story:
          'Drop fivefold below 10-nanometer enzyme complexes and the thread of heredity comes into crisp molecular view. Two opposite [[polynucleotide strands|polynucleotide-strand]] wind around a 2-nanometer cylinder, keeping negatively charged [[phosphate|phosphate]]-[[sugar|sugar]] spines outside while pairing complementary [[bases|base]] down the center. That uniform width lets repair enzymes scan billions of letters smoothly without snagging.',
        blueprint: {
          role: 'Ninth scale stop (2 x 10^-9 m / 2.0 nm; 20x [[H atom|atom-h]]) anchoring the universal genetic helix diameter',
          arrivesFrom: 'Fivefold linear step down from 10-nanometer folded [[protein|protein]] complexes into nucleic acid geometry',
          inside: 'Two antiparallel [[polynucleotide strands|polynucleotide-strand]] of paired [[nucleotides|nucleotide]] forming major and minor grooves along 2.0 nm B-[[DNA|dna]]',
          deliversTo: 'Steps down 2-4x into individual 0.5-1 nm biomolecule monomers ([[nucleotide|nucleotide]], [[glucose|glucose]], [[amino-acid|amino-acid]], [[phospholipid|phospholipid]])',
          loop: 'Uniform 2.0 nm purine-pyrimidine pairing ensures identical helix diameter across every cellular domain'
        },
        scientific:
          'Stop 9 at 2 x 10^-9 m (2.0 nm = 20 angstroms; 20x [[atomic hydrogen|atom-h]]): canonical right-handed B-form [[DNA|dna]] double helix (Drew-Dickerson dodecamer PDB 1BNA; 2.0 nm diameter, 3.4 nm helical pitch, 10.5 bp/turn, 3.4 angstrom axial rise per base pair). Stabilized by Watson-Crick A=T and G-C hydrogen bonds between antiparallel [[polynucleotide strands|polynucleotide-strand]] plus pi-stacking.',
        from: [
          { nodeId: 'protein', label: 'Previous Stop: 10 nm', cargo: '5x wider protein complexes' },
          { nodeId: 'polynucleotide-strand', label: 'Antiparallel Strands', cargo: 'Paired 5-prime to 3-prime chains' }
        ],
        to: [
          { nodeId: 'dna', label: 'DNA Helix Explorer', cargo: '2.0 nm B-form double helix' },
          { nodeId: 'nucleotide', label: 'Next Stop: 1 nm', cargo: 'Single nucleotide monomer' }
        ]
      },
      es: {
        subtitle: '2 nanómetros — Grosor de la doble hélice de ADN',
        simple:
          'Sin importar cuán grande sea el organismo, su doble hélice de [[ADN|dna]] mide solo 2 nanómetros de ancho: cincuenta mil veces más fina que una [[célula vegetal|real-plant]] de 100 micrómetros y apenas veinte veces más ancha que un [[átomo de hidrógeno|atom-h]].',
        story:
          'Cinco veces por debajo de los complejos enzimáticos de 10 nm aparece nítido el hilo de la herencia. Dos [[hebras polinucleotídicas|polynucleotide-strand]] antiparalelas se enrollan en un cilindro de 2 nanómetros, exponiendo columnas de [[azúcar|sugar]] y [[fosfato|phosphate]] hacia fuera mientras aparean [[bases|base]] complementarias en el centro. Ese diámetro uniforme permite que las enzimas reparadoras recorran miles de millones de letras sin atascarse.',
        blueprint: {
          role: 'Novena parada (2 × 10⁻⁹ m / 2,0 nm; 20× un [[átomo de H|atom-h]]) que fija el diámetro universal del genoma',
          arrivesFrom: 'Descenso lineal de 5× desde complejos [[proteicos|protein]] de 10 nm hacia la geometría nucleica',
          inside: 'Dos [[hebras polinucleotídicas|polynucleotide-strand]] antiparalelas de [[nucleótidos|nucleotide]] formando surcos mayor y menor en el [[ADN|dna]]-B de 2,0 nm',
          deliversTo: 'Desciende 2–4× hasta monómeros biomoleculares de 0,5–1 nm ([[nucleótido|nucleotide]], [[glucosa|glucose]], [[aminoácido|amino-acid]], [[fosfolípido|phospholipid]])',
          loop: 'El apareamiento purina–pirimidina mantiene un diámetro constante de 2,0 nm en todos los dominios de la vida'
        },
        scientific:
          'Parada 9 en 2 × 10⁻⁹ m (2,0 nm = 20 Å; 20× el [[hidrógeno|atom-h]]): doble hélice dextrógira canónica de [[ADN|dna]] forma B (dodecámero de Drew–Dickerson PDB 1BNA; 2,0 nm de diámetro, paso helicoidal de 3,4 nm, 10,5 pb/vuelta y 3,4 Å de avance por par). Estabilizada por puentes de hidrógeno A=T y G≡C entre [[hebras polinucleotídicas|polynucleotide-strand]] antiparalelas y apilamiento π.',
        from: [
          { nodeId: 'protein', label: 'Anterior: 10 nm', cargo: 'Enzimas 5× más anchas' },
          { nodeId: 'polynucleotide-strand', label: 'Hebras antiparalelas', cargo: 'Cadenas 5\'→3\' emparejadas' }
        ],
        to: [
          { nodeId: 'dna', label: 'Explorar hélice de ADN', cargo: 'Doble hélice B de 2,0 nm' },
          { nodeId: 'nucleotide', label: 'Siguiente: 1 nm', cargo: 'Monómero de nucleótido' }
        ]
      }
    },

    monomer_1nm: {
      en: {
        subtitle: '0.5 to 1 Nanometer - The Four Universal Building Blocks',
        simple:
          'Between half a nanometer and one nanometer sit life\'s core molecular bricks: an [[amino acid|amino-acid]], a [[glucose|glucose]] ring, a [[nucleotide|nucleotide]], and the polar head of a [[phospholipid|phospholipid]]. Every membrane, enzyme, and chromosome is assembled by repeating units at this scale.',
        story:
          'At five to ten angstroms, the four families from [[the four biomolecules|four-biomolecules]] stand side by side as individual covalent monomers. A 0.5-nanometer [[amino acid|amino-acid]], a 0.9-nanometer [[glucose|glucose]] ring, a 1.0-nanometer [[nucleotide|nucleotide]], and a 0.8-nanometer [[phospholipid|phospholipid]] head (with tails reaching ~2.5 nm) show how just a few dozen bonded atoms create distinct shapes, charges, and reactive handles.',
        blueprint: {
          role: 'Tenth scale stop (0.5-1.0 nm / 5-10 angstroms; 5-10x [[H atom|atom-h]]) aligning monomers of all four biomolecule families',
          arrivesFrom: '2-4x step down from the 2.0 nm [[DNA|dna]] duplex into individual repeating macromolecular bricks',
          inside: 'Covalent geometries of [[amino acid|amino-acid]] (~0.5 nm), [[glucose|glucose]] (~0.9 nm), [[nucleotide|nucleotide]] (~1.0 nm), and [[phospholipid|phospholipid]] (~0.8 nm head, ~2.5 nm full length)',
          deliversTo: 'Steps down 5-10x into the final 0.1-0.3 nm shared foundation of [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[Mg|atom-mg]] atoms',
          loop: 'Direct bridge between the logarithmic [[scale explorer|scale-explorer]] and [[the four biomolecules|four-biomolecules]] drill-down'
        },
        scientific:
          'Stop 10 at 5 x 10^-10 to 10^-9 m (0.5-1.0 nm = 5-10 angstroms; 5-10x [[atomic hydrogen|atom-h]]): canonical small-molecule monomers built from 1.2-1.54 angstrom covalent bonds - L-[[amino acid|amino-acid]] (~0.5 nm), D-[[glucose|glucose]] pyranose (~0.9 nm, C6H12O6), [[nucleotide|nucleotide]] (~1.0 nm: [[phosphate|phosphate]] + [[sugar|sugar]] + [[base|base]]), and [[phospholipid|phospholipid]] (~0.8 nm phosphocholine head; ~2.5 nm extended acyl span).',
        from: [
          { nodeId: 'dna', label: 'Previous Stop: 2 nm', cargo: 'Macromolecular polymers' },
          { nodeId: 'four-biomolecules', label: '4 Biomolecules Stage', cargo: 'Four universal monomers' }
        ],
        to: [
          { nodeId: 'glucose', label: 'Glucose (~0.9 nm)', cargo: 'Carbohydrate pyranose ring' },
          { nodeId: 'amino-acid', label: 'Amino Acid (~0.5 nm)', cargo: 'Protein monomer brick' },
          { nodeId: 'nucleotide', label: 'Nucleotide (~1.0 nm)', cargo: 'DNA and RNA monomer' },
          { nodeId: 'phospholipid', label: 'Phospholipid (~0.8 nm head)', cargo: 'Membrane lipid unit' }
        ]
      },
      es: {
        subtitle: '0,5 a 1 nanómetro — Los cuatro ladrillos universales',
        simple:
          'Entre medio nanómetro y un nanómetro residen los ladrillos químicos de la vida: un [[aminoácido|amino-acid]], un anillo de [[glucosa|glucose]], un [[nucleótido|nucleotide]] y la cabeza polar de un [[fosfolípido|phospholipid]]. Toda membrana, enzima y cromosoma repite piezas de esta escala.',
        story:
          'Entre cinco y diez ángstroms, las cuatro familias de [[las cuatro biomoléculas|four-biomolecules]] aparecen cara a cara como monómeros covalentes individuales. Un [[aminoácido|amino-acid]] de 0,5 nm, una [[glucosa|glucose]] de 0,9 nm, un [[nucleótido|nucleotide]] de 1,0 nm y la cabeza de 0,8 nm de un [[fosfolípido|phospholipid]] (con colas de ~2,5 nm) muestran cómo pocas decenas de átomos crean cargas y formas precisas.',
        blueprint: {
          role: 'Décima parada (0,5–1,0 nm / 5–10 Å; 5–10× un [[átomo de H|atom-h]]) con los monómeros de las cuatro familias',
          arrivesFrom: 'Descenso de 2–4× desde la doble hélice de [[ADN|dna]] (2,0 nm) hacia sus unidades repetitivas',
          inside: 'Geometrías covalentes de [[aminoácido|amino-acid]] (~0,5 nm), [[glucosa|glucose]] (~0,9 nm), [[nucleótido|nucleotide]] (~1,0 nm) y [[fosfolípido|phospholipid]] (cabeza ~0,8 nm; largo ~2,5 nm)',
          deliversTo: 'Desciende 5–10× hacia la base atómica compartida de 0,1–0,3 nm ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[Mg|atom-mg]])',
          loop: 'Puente directo entre la escala logarítmica del [[explorador|scale-explorer]] y [[las cuatro biomoléculas|four-biomolecules]]'
        },
        scientific:
          'Parada 10 en 5 × 10⁻¹⁰ a 10⁻⁹ m (0,5–1,0 nm = 5–10 Å; 5–10× el [[hidrógeno|atom-h]]): monómeros canónicos construidos con enlaces covalentes de 1,2–1,54 Å —L-[[aminoácido|amino-acid]] (~0,5 nm), D-[[glucosa|glucose]] piranósica (~0,9 nm, C₆H₁₂O₆), [[nucleótido|nucleotide]] (~1,0 nm: [[fosfato|phosphate]] + [[azúcar|sugar]] + [[base|base]]) y [[fosfolípido|phospholipid]] (cabeza de fosfocolina ~0,8 nm; longitud total ~2,5 nm).',
        from: [
          { nodeId: 'dna', label: 'Anterior: 2 nm', cargo: 'Polímeros macromoleculares' },
          { nodeId: 'four-biomolecules', label: '4 Biomoléculas', cargo: 'Cuatro monómeros universales' }
        ],
        to: [
          { nodeId: 'glucose', label: 'Glucosa (~0,9 nm)', cargo: 'Anillo piranósico glucídico' },
          { nodeId: 'amino-acid', label: 'Aminoácido (~0,5 nm)', cargo: 'Ladrillo proteico' },
          { nodeId: 'nucleotide', label: 'Nucleótido (~1,0 nm)', cargo: 'Monómero de ADN y ARN' },
          { nodeId: 'phospholipid', label: 'Fosfolípido (cabeza ~0,8 nm)', cargo: 'Unidad lipídica de membrana' }
        ]
      }
    },

    atom_01nm: {
      en: {
        subtitle: '0.1 to 0.3 Nanometers - The Shared Atomic Floor',
        simple:
          'At 0.1 to 0.3 nanometers - just one to three angstroms - all four biomolecule families resolve into the same six core elements: [[hydrogen|atom-h]], [[carbon|atom-c]], [[nitrogen|atom-n]], [[oxygen|atom-o]], [[phosphorus|atom-p]], and [[magnesium|atom-mg]], forming every living structure.',
        story:
          'Six full powers of ten below the 100-micrometer [[plant cell|real-plant]] lies the shared atomic foundation of biology. Tiny [[hydrogen|atom-h]] (1.0 angstrom) caps carbon skeletons and bridges hydrogen bonds; four-bonded [[carbon|atom-c]] builds rings and chains; [[oxygen|atom-o]] and [[nitrogen|atom-n]] bring polarity and catalysis; [[phosphorus|atom-p]] links [[DNA|dna]] and energizes ATP; and [[magnesium|atom-mg]] shields charged phosphates across every cell on Earth.',
        blueprint: {
          role: 'Final calibrated stop (1-3 x 10^-10 m / 1-3 angstroms; 1-3x [[H atom|atom-h]]) at the atomic resolution floor',
          arrivesFrom: '5-10x linear step down from 0.5-1.0 nm biomolecule monomers into individual atomic orbitals',
          inside: 'Six biogenic elements: [[H|atom-h]] (1.0 A), [[C|atom-c]]/[[N|atom-n]]/[[O|atom-o]] (~1.5 A), [[P|atom-p]] (~2.0 A), and [[Mg|atom-mg]] (~3.0 A shell)',
          deliversTo: 'Bonds covalently and ionically upward into [[glucose|glucose]], [[amino acids|amino-acid]], [[phospholipids|phospholipid]], [[nucleotides|nucleotide]], and whole cells',
          loop: 'Completes the 1,000,000x Whole-to-Tiniest descent resolved by X-ray crystallography and atomic cryo-EM'
        },
        scientific:
          'Stop 11 at 1-3 x 10^-10 m (0.1-0.3 nm = 1.0-3.0 angstroms; 1-3x baseline [[atomic hydrogen|atom-h]]): IUPAC covalent and van der Waals radii of biology\'s core elements - [[H|atom-h]] (~1.0 A), [[C|atom-c]], [[N|atom-n]], and [[O|atom-o]] (~1.5 A), [[P|atom-p]] (~2.0 A), and [[Mg|atom-mg]] (~3.0 A ionic/hydration sphere), matching the 0.1-0.3 nm diffraction limit of X-ray crystallography and high-resolution cryo-EM.',
        from: [
          { nodeId: 'glucose', label: 'Previous Stop: 0.5-1 nm', cargo: 'Covalent monomer bonds' },
          { nodeId: 'four-biomolecules', label: 'Shared Atomic Base', cargo: '6 universal biogenic elements' }
        ],
        to: [
          { nodeId: 'atom-h', label: 'Hydrogen (1.0 A)', cargo: 'Smallest biogenic atom' },
          { nodeId: 'atom-c', label: 'Carbon (1.5 A)', cargo: 'Four-bond organic backbone' },
          { nodeId: 'atom-o', label: 'Oxygen & Nitrogen (1.5 A)', cargo: 'Polar groups and H-bonds' },
          { nodeId: 'atom-p', label: 'Phosphorus & Mg (2-3 A)', cargo: 'DNA, ATP and ion bridges' }
        ]
      },
      es: {
        subtitle: '0,1 a 0,3 nanómetros — La base atómica compartida',
        simple:
          'Entre 0,1 y 0,3 nanómetros —apenas uno a tres ángstroms— las cuatro familias de biomoléculas convergen en los mismos seis elementos centrales: [[hidrógeno|atom-h]], [[carbono|atom-c]], [[nitrógeno|atom-n]], [[oxígeno|atom-o]], [[fósforo|atom-p]] y [[magnesio|atom-mg]], base común de toda la vida.',
        story:
          'Seis potencias de diez por debajo de la [[célula vegetal|real-plant]] de 100 micrómetros aparece la base atómica común de toda la biología. El [[hidrógeno|atom-h]] (1,0 Å) remata cadenas y forma puentes de hidrógeno; el [[carbono|atom-c]] tetravalente levanta anillos y esqueletos; [[oxígeno|atom-o]] y [[nitrógeno|atom-n]] aportan polaridad y catálisis; el [[fósforo|atom-p]] enlaza el [[ADN|dna]] y el ATP; y el [[magnesio|atom-mg]] estabiliza cargas negativas.',
        blueprint: {
          role: 'Última parada calibrada (1–3 × 10⁻¹⁰ m / 1–3 Å; 1–3× un [[átomo de H|atom-h]]) en el suelo de resolución atómica',
          arrivesFrom: 'Descenso lineal de 5–10× desde los monómeros de 0,5–1,0 nm hacia orbitales atómicos individuales',
          inside: 'Seis elementos biogénicos: [[H|atom-h]] (1,0 Å), [[C|atom-c]]/[[N|atom-n]]/[[O|atom-o]] (~1,5 Å), [[P|atom-p]] (~2,0 Å) y [[Mg|atom-mg]] (~3,0 Å)',
          deliversTo: 'Se enlaza hacia arriba formando [[glucosa|glucose]], [[aminoácidos|amino-acid]], [[fosfolípidos|phospholipid]], [[nucleótidos|nucleotide]] y células enteras',
          loop: 'Completa el descenso de 1.000.000× desde el todo hasta lo mínimo, accesible por rayos X y crio-EM atómica'
        },
        scientific:
          'Parada 11 en 1–3 × 10⁻¹⁰ m (0,1–0,3 nm = 1,0–3,0 Å; referencia 1–3× [[hidrógeno atómico|atom-h]]): radios covalentes y de van der Waals IUPAC de los elementos biogénicos clave —[[H|atom-h]] (~1,0 Å), [[C|atom-c]], [[N|atom-n]] y [[O|atom-o]] (~1,5 Å), [[P|atom-p]] (~2,0 Å) y [[Mg|atom-mg]] (~3,0 Å en esfera iónica/hidratada)—, coincidiendo con la resolución de 0,1–0,3 nm de la cristalografía de rayos X y crio-EM atómica.',
        from: [
          { nodeId: 'glucose', label: 'Anterior: 0,5–1 nm', cargo: 'Enlaces covalentes de monómeros' },
          { nodeId: 'four-biomolecules', label: 'Base atómica común', cargo: '6 elementos biogénicos' }
        ],
        to: [
          { nodeId: 'atom-h', label: 'Hidrógeno (1,0 Å)', cargo: 'Átomo biogénico menor' },
          { nodeId: 'atom-c', label: 'Carbono (1,5 Å)', cargo: 'Esqueleto tetravalente' },
          { nodeId: 'atom-o', label: 'Oxígeno y nitrógeno (1,5 Å)', cargo: 'Grupos polares y puentes H' },
          { nodeId: 'atom-p', label: 'Fósforo y Mg (2–3 Å)', cargo: 'ADN, ATP y puentes iónicos' }
        ]
      }
    }
  }
};
