import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 12 Phase 14 Cell Division Explorer nodes and all 20 Standalone Realistic
 * Part Lenses (`cell_division_realistic.html`) in `EN` & `ES` for Cell Division:
 * Binary Fission, Mitosis & Meiosis (Phase 14).
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const CELL_DIVISION_NODE_LENSES: NodeLensMap = {
  'real-cell-division': {
    en: {
      simple:
        'Cell division copies an entire [[DNA|dna]] genome and sorts each copy safely into new daughter cells without snapping or losing chromosomes. Depending on the organism and purpose, cells run prokaryotic [[binary fission|real-div-fission]], clonal eukaryotic mitosis, or gamete-forming [[meiosis|real-div-meiosis]].',
      story:
        'Every lineage across [[life|life-overview]] survives only because cells solve the same physical problem: duplicate meters or megabases of fragile [[DNA|dna]] and hand each daughter an exact complement. Inside a two-micrometer [[E. coli|real-bacterium]] rod, [[binary fission|real-div-fission]] separates circular origins and cinches the envelope with an [[FtsZ Z-ring|real-div-ftsz]]. Inside a twenty-micrometer [[eukaryotic cell|real-cell]], [[condensin|real-div-condensin]] packs linear [[chromosomes|chromosome]] so the [[mitotic spindle|real-div-spindle]] and [[kinetochores|real-div-kinetochore]] verify tension before [[separase|real-div-separase]] cuts [[cohesin|real-div-cohesin]], while germline [[meiosis|real-div-meiosis]] adds homologous recombination to build four unique haploid cells.',
      blueprint:
        'Role: Unified 3-mechanism cell-division simulator comparing prokaryotic [[binary fission|real-div-fission]] (2 um), eukaryotic mitosis (20 um, 2n -> 2 x 2n), and [[meiosis|real-div-meiosis]] (20 um, 2n -> 4 x 1n); Inputs: Replicated circular or linear [[dsDNA|dna]], ATP/GTP hydrolysis energy, and cytoskeletal polymers ([[tubulin|tubulin]], [[G-actin|g-actin]], [[FtsZ|real-div-ftsz]]); Inside: Coordinated genome compaction ([[condensin|real-div-condensin]]), sister tethering ([[cohesin|real-div-cohesin]]), mechanical segregation ([[spindle|real-div-spindle]], [[kinetochores|real-div-kinetochore]]), and checkpoint-gated cleavage ([[separase|real-div-separase]]); Outputs: Clonal daughters in fission and mitosis or four recombinant haploid gametes in [[meiosis|real-div-meiosis]].',
      scientific:
        'Comparative whole-to-tiniest structural synthesis of genome segregation spanning 20 um dividing [[eukaryotic cells|real-cell]] down to 2 um [[E. coli|real-bacterium]] and 0.1 nm atomic bonds across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and catalytic [[Mg2+|atom-mg]]. Integrates prokaryotic [[binary fission|real-div-fission]] (oriC-ter replication, ParABS partitioning, GTPase [[FtsZ|real-div-ftsz]] PDB 6UNX), somatic mitosis ([[condensin|real-div-condensin]] PDB 7QEN, [[cohesin|real-div-cohesin]] PDB 6QPW, bipolar [[spindle|real-div-spindle]], [[Ndc80|real-div-kinetochore]] PDB 3IZ0, SAC-gated [[APC/C-separase|real-div-separase]] PDB 5A31/7NJ1, actin-myosin II cytokinesis), and germline [[meiosis|real-div-meiosis]] ([[synaptonemal complex|real-div-synaptonemal]], [[RAD51|real-div-rad51]] PDB 5H1B, and [[Holliday junctions|real-div-holliday]] PDB 1C7M).'
    },
    es: {
      simple:
        'La división celular copia el genoma completo de [[ADN|dna]] y reparte cada copia en células hijas sin romper ni perder cromosomas. Según el organismo y su función, las células ejecutan [[fisión binaria|real-div-fission]] procariota, mitosis eucariota clonal o [[meiosis|real-div-meiosis]] generadora de gametos.',
      story:
        'Todo linaje de la [[vida|life-overview]] persiste porque las células resuelven un mismo reto físico: duplicar un genoma frágil de [[ADN|dna]] y entregar a cada hija una dotación exacta. En una bacteria [[E. coli|real-bacterium]] de dos micrómetros, la [[fisión binaria|real-div-fission]] separa orígenes circulares y cierra el tabique con un [[anillo Z de FtsZ|real-div-ftsz]]. En una [[célula eucariota|real-cell]] de veinte micrómetros, la [[condensina|real-div-condensin]] compacta los [[cromosomas|chromosome]] para que el [[huso mitótico|real-div-spindle]] y los [[cinetocoros|real-div-kinetochore]] verifiquen la tensión antes de que la [[separasa|real-div-separase]] corte la [[cohesina|real-div-cohesin]], mientras la [[meiosis|real-div-meiosis]] recombina homólogos para producir cuatro gametos haploides únicos.',
      blueprint:
        'Rol: Simulador unificado de tres mecanismos de división que compara [[fisión binaria|real-div-fission]] procariota (2 µm), mitosis eucariota (20 µm, 2n → 2 × 2n) y [[meiosis|real-div-meiosis]] (20 µm, 2n → 4 × 1n) · Entradas: [[ADNbc|dna]] circular o lineal replicado, energía de ATP/GTP y polímeros del citoesqueleto ([[tubulina|tubulin]], [[actina G|g-actin]], [[FtsZ|real-div-ftsz]]) · Interior: Compactación ([[condensina|real-div-condensin]]), sujeción hermana ([[cohesina|real-div-cohesin]]), segregación mecánica ([[huso|real-div-spindle]], [[cinetocoros|real-div-kinetochore]]) y corte controlado ([[separasa|real-div-separase]]) · Salida: Células hijas clonales en fisión y mitosis o cuatro gametos haploides recombinantes en [[meiosis|real-div-meiosis]].',
      scientific:
        'Síntesis estructural comparativa de la segregación genómica desde [[células eucariotas|real-cell]] en división de 20 µm y bacilos [[E. coli|real-bacterium]] de 2 µm hasta enlaces atómicos de 0,1 nm con [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[Mg²⁺|atom-mg]] catalítico. Integra la [[fisión binaria|real-div-fission]] procariota (replicación oriC–ter, partición ParABS, anillo GTPasa [[FtsZ|real-div-ftsz]] PDB 6UNX), la mitosis somática ([[condensina|real-div-condensin]] PDB 7QEN, [[cohesina|real-div-cohesin]] PDB 6QPW, [[huso|real-div-spindle]] bipolar, [[Ndc80|real-div-kinetochore]] PDB 3IZ0, compuerta SAC–[[APC/C–separasa|real-div-separase]] PDB 5A31/7NJ1, anillo actina–miosina II) y la [[meiosis|real-div-meiosis]] germinal ([[complejo sinaptonémico|real-div-synaptonemal]], [[RAD51|real-div-rad51]] PDB 5H1B y [[uniones Holliday|real-div-holliday]] PDB 1C7M).'
    }
  },

  'real-div-fission': {
    en: {
      simple:
        'Prokaryotic binary fission lets bacteria such as [[E. coli|real-bacterium]] duplicate their single circular [[DNA|dna]] chromosome, actively push the two copies to opposite ends of the elongating rod, and pinch cleanly in half with an [[FtsZ Z-ring|real-div-ftsz]].',
      story:
        'Binary fission is far from passive pinching. As an [[E. coli|real-bacterium]] rod doubles in length from two to four micrometers, bidirectional replication forks race around its 4.6-megabase circular [[nucleoid|nucleoid]] from origin oriC to terminus ter while MukBEF condensins organize each arm. ParB protein clamps lock onto parS sites near each newly copied origin and surf an ATP-driven ParA gradient toward opposite cell poles. Once the duplicated genomes clear the center, SlmA nucleoid occlusion lifts and the mid-cell [[FtsZ Z-ring|real-div-ftsz]] guides inward [[peptidoglycan|peptidoglycan]] wall closure to release two clonal daughters.',
      blueprint:
        'Role: Rapid prokaryotic clonal division pathway partitioning one circular genome into two identical daughter rods; Inputs: 4.6 Mbp circular [[dsDNA|dna]] at oriC, cytoplasmic dNTPs, ATP/CTP/GTP, and Lipid II [[peptidoglycan|peptidoglycan]] precursors across the [[plasma membrane|plasma-membrane]]; Inside: Bidirectional oriC-to-ter replication, ParABS origin partitioning (ParB-parS PDB 6T1F), MukBEF nucleoid condensation, MinCDE pole oscillation, and mid-cell [[FtsZ Z-ring|real-div-ftsz]] constriction; Outputs: Two genetically identical clonal bacterial rods (1n circular genome each) in as little as 20 minutes.',
      scientific:
        'Prokaryotic binary fission in rod-shaped [[E. coli|real-bacterium]] (~1 x 2-4 um; contrasting with [[Gram-positive|real-gram-positive]] thick-wall septation and ESCRT-III-mediated division in many [[Archaea|real-archaea]]). Bidirectional DnaA-initiated replication proceeds from oriC to ter across the 4.6 Mbp circular [[nucleoid|nucleoid]] organized by DNA gyrase, HU, and SMC-like MukBEF. CTP-gated ParB clamps (PDB 6T1F) load at parS sequences and migrate along ParA-ATP nucleoid gradients to segregate sister origins before MinCDE oscillation and SlmA nucleoid occlusion permit mid-cell [[FtsZ|real-div-ftsz]] (PDB 6UNX) ring assembly and FtsW/PBP3 septal [[peptidoglycan|peptidoglycan]] ingrowth.'
    },
    es: {
      simple:
        'La fisión binaria procariota permite a bacterias como [[E. coli|real-bacterium]] duplicar su único cromosoma circular de [[ADN|dna]], trasladar activamente cada copia hacia polos opuestos del bacilo en elongación y dividirse por el centro mediante un [[anillo Z de FtsZ|real-div-ftsz]].',
      story:
        'La fisión binaria dista mucho de ser un estrangulamiento pasivo. Mientras un bacilo de [[E. coli|real-bacterium]] duplica su longitud de dos a cuatro micrómetros, dos horquillas de replicación recorren su [[nucleoide|nucleoid]] circular de 4,6 megabases desde el origen oriC hasta ter mientras complejos MukBEF ordenan el cromosoma. Las pinzas proteicas ParB se fijan a secuencias parS junto a cada origen recién copiado y avanzan por un gradiente de ParA–ATP hacia polos opuestos. Cuando el centro queda libre de ADN, la oclusión SlmA desaparece y el [[anillo Z de FtsZ|real-div-ftsz]] dirige el cierre septal de [[peptidoglicano|peptidoglycan]] formando dos hijas clonales.',
      blueprint:
        'Rol: Vía procariota rápida de división clonal que reparte un genoma circular en dos bacilos idénticos · Entradas: [[ADNbc|dna]] circular de 4,6 Mpb desde oriC, dNTP, ATP/CTP/GTP y precursores Lípido II de [[peptidoglicano|peptidoglycan]] en la [[membrana plasmática|plasma-membrane]] · Interior: Replicación bidireccional oriC–ter, segregación ParABS (ParB–parS PDB 6T1F), compactación MukBEF, oscilación MinCDE y constricción del [[anillo Z de FtsZ|real-div-ftsz]] · Salida: Dos bacilos clonales genéticamente idénticos (1n circular) en tan solo 20 minutos.',
      scientific:
        'Fisión binaria procariota en [[E. coli|real-bacterium]] (~1 × 2–4 µm; en contraste con la septación de pared gruesa en [[Gram-positivas|real-gram-positive]] y la división por ESCRT-III en muchas [[Archaea|real-archaea]]). La replicación bidireccional iniciada por DnaA avanza de oriC a ter sobre el [[nucleoide|nucleoid]] circular de 4,6 Mpb estructurado por ADN girasa, HU y el complejo tipo SMC MukBEF. Las pinzas ParB reguladas por CTP (PDB 6T1F) se cargan en parS y migran sobre gradientes nucleoides de ParA–ATP antes de que MinCDE y SlmA habiliten el anillo central [[FtsZ|real-div-ftsz]] (PDB 6UNX) y el septo de [[peptidoglicano|peptidoglycan]] por FtsW/PBP3.'
    }
  },

  'real-div-ftsz': {
    en: {
      simple:
        'FtsZ is a bacterial [[protein|protein]] and distant evolutionary cousin of eukaryotic [[tubulin|tubulin]]. Powered by GTP, its short filaments assemble into a ring around the middle of a dividing bacterium and guide the inward building of a new [[peptidoglycan|peptidoglycan]] wall.',
      story:
        'Long before eukaryotes evolved the [[mitotic spindle|real-div-spindle]], bacteria already ran a GTP-burning polymer ring built from FtsZ. Tethered to the inner face of the [[plasma membrane|plasma-membrane]] by FtsA and ZipA anchors, curved FtsZ protofilaments add fresh GTP-bound subunits at one tip while shedding GDP-bound subunits at the tail. This directional treadmilling marches steadily around the equator of [[E. coli|real-bacterium]] during [[binary fission|real-div-fission]], ferrying FtsW glycosyltransferases and PBP3 transpeptidases that weave concentric rings of septal [[peptidoglycan|peptidoglycan]] until the envelope seals in two.',
      blueprint:
        'Role: GTP-driven bacterial Z-ring scaffold and circumferential pacemaker directing septal wall constriction; Inputs: Cytosolic FtsZ monomers, GTP and catalytic [[Mg2+|atom-mg]], membrane tethers (FtsA, ZipA), and mid-cell positional cues from MinCDE and SlmA; Inside: Single-stranded FtsZ protofilaments (PDB 6UNX) undergoing polarized GTP-hydrolysis treadmilling (~30 nm/s) beneath the [[plasma membrane|plasma-membrane]]; Outputs: Circumferential guidance of FtsW/PBP3 septal [[peptidoglycan|peptidoglycan]] synthesis completing [[binary fission|real-div-fission]].',
      scientific:
        'Prokaryotic tubulin-superfamily GTPase FtsZ (E. coli crystal/cryo-EM protofilament PDB 6UNX; ~40 kDa monomer, ~4.3 nm subunit repeat) forming the dynamic mid-cell divisome Z-ring during [[binary fission|real-div-fission]]. Anchored to the inner leaflet of the [[plasma membrane|plasma-membrane]] via FtsA and ZipA and spatially restricted to mid-cell by polar MinCDE oscillation plus SlmA nucleoid occlusion, FtsZ protofilaments undergo [[Mg2+|atom-mg]]-dependent GTP hydrolysis and polarized treadmilling (~25-35 nm/s). Rather than acting solely as a passive lasso, treadmilling FtsZ tracks distribute the FtsQLBWI-PBP3 septal [[peptidoglycan|peptidoglycan]] synthesis machinery circumferentially around the closing septum.'
    },
    es: {
      simple:
        'FtsZ es una [[proteína|protein]] bacteriana y pariente evolutiva lejana de la [[tubulina|tubulin]] eucariota. Impulsada por GTP, forma filamentos cortos que arman un anillo en el centro de la bacteria en división y dirigen el crecimiento hacia adentro de una nueva pared de [[peptidoglicano|peptidoglycan]].',
      story:
        'Mucho antes de que los eucariotas evolucionaran el [[huso mitótico|real-div-spindle]], las bacterias ya operaban un anillo polimérico impulsado por GTP hecho de FtsZ. Anclados a la cara interna de la [[membrana plasmática|plasma-membrane]] mediante FtsA y ZipA, los protofilamentos curvos de FtsZ incorporan subunidades con GTP en un extremo y liberan unidades con GDP por el opuesto. Este avance direccional recorre el ecuador de [[E. coli|real-bacterium]] durante la [[fisión binaria|real-div-fission]], guiando a las enzimas FtsW y PBP3 que tejen aros concéntricos de [[peptidoglicano|peptidoglycan]] septal hasta sellar dos células hijas.',
      blueprint:
        'Rol: Andamio bacteriano en anillo Z impulsado por GTP y marcapasos circunferencial de la constricción septal · Entradas: Monómeros citosólicos de FtsZ, GTP y [[Mg²⁺|atom-mg]], anclas de membrana (FtsA, ZipA) y posicionamiento MinCDE/SlmA · Interior: Protofilamentos simples de FtsZ (PDB 6UNX) en avance polarizado por hidrólisis de GTP (~30 nm/s) bajo la [[membrana plasmática|plasma-membrane]] · Salida: Dirección circunferencial de la síntesis septal de [[peptidoglicano|peptidoglycan]] (FtsW/PBP3) que culmina la [[fisión binaria|real-div-fission]].',
      scientific:
        'GTPasa procariota FtsZ de la superfamilia de la [[tubulina|tubulin]] (protofilamento de E. coli PDB 6UNX; monómero ~40 kDa, paso longitudinal ~4,3 nm) que ensambla el anillo Z central del divisoma durante la [[fisión binaria|real-div-fission]]. Fijada a la cara interna de la [[membrana plasmática|plasma-membrane]] por FtsA y ZipA y confinada al plano medio por MinCDE y la oclusión nucleoide SlmA, FtsZ hidroliza GTP dependiente de [[Mg²⁺|atom-mg]] generando un desplazamiento polarizado (~25–35 nm/s) que coordina circunferencialmente el complejo FtsQLBWI–PBP3 de síntesis de [[peptidoglicano|peptidoglycan]] septal.'
    }
  },

  'real-div-spindle': {
    en: {
      simple:
        'The mitotic spindle is a bipolar cage of hollow [[microtubule|microtubule]] tracks stretching between two opposite [[centrosomes|centrosome]]. Specialized [[motor proteins|motor-protein]] push the poles apart and reel condensed [[chromosomes|chromosome]] cleanly to opposite sides of the dividing cell.',
      story:
        'As a [[eukaryotic cell|real-cell]] enters mitosis and phosphorylates its [[nuclear envelope|nuclear-envelope]] away, two duplicated [[centrosomes|centrosome]] nucleate thousands of dynamic [[microtubules|microtubule]] from gamma-tubulin ring complexes. At the spindle midzone, four-headed kinesin-5 (Eg5) [[motor proteins|motor-protein]] crosslink antiparallel interpolar tracks and walk toward both plus-ends at once, jacking the poles ten micrometers apart while cortical dynein anchors astral fibers to the cell rim. Meanwhile, kinetochore fibers lock onto chromosome [[kinetochores|real-div-kinetochore]], align every pair at the equator, and then shorten from their tips in anaphase to deliver equal genomes to both daughter poles.',
      blueprint:
        'Role: Self-organizing ~10 um bipolar mechanical sorting apparatus separating replicated [[chromosomes|chromosome]] during mitosis and [[meiosis|real-div-meiosis]]; Inputs: Alpha/beta-[[tubulin|tubulin]]-GTP dimers, duplicated [[centrosomes|centrosome]] (gamma-TuRC), ATP for kinesin-5 and dynein [[motors|motor-protein]], and Ran-GTP chromatin gradients; Inside: Three distinct [[microtubule|microtubule]] classes (astral, antiparallel interpolar bridged by Eg5 PDB 1II6, and kinetochore bundles coupled via [[Ndc80|real-div-kinetochore]]) plus minus-end dynein (PDB 3VKH); Outputs: Balanced metaphase alignment, poleward chromatid transport in anaphase, and midzone signaling that positions the cleavage furrow.',
      scientific:
        'Eukaryotic bipolar mitotic/meiotic spindle (~10-15 um pole-to-pole in mammalian [[cells|real-cell]]), assembled from 25 nm [[microtubules|microtubule]] of alpha/beta-[[tubulin|tubulin]] heterodimers nucleated by centrosomal gamma-TuRC and chromatin-proximal Ran-GTP/TPX2 pathways. Bipolar architecture arises from opposing force generators: homotetrameric plus-end-directed kinesin-5 (Eg5, PDB 1II6) slides antiparallel interpolar microtubules outward, balanced by minus-end kinesin-14 (HSET) and cytoplasmic dynein (PDB 3VKH) focusing poles and anchoring astral microtubules at the cortex. Kinetochore bundles (15-25 MTs per mammalian [[kinetochore|real-div-kinetochore]]) generate piconewton poleward tension via synchronized plus-end depolymerization and poleward flux.'
    },
    es: {
      simple:
        'El huso mitótico es una estructura bipolar de [[microtúbulos|microtubule]] huecos extendidos entre dos [[centrosomas|centrosome]] opuestos. [[Proteínas motoras|motor-protein]] especializadas separan ambos polos y arrastran con precisión los [[cromosomas|chromosome]] condensados hacia lados opuestos de la célula en división.',
      story:
        'Cuando una [[célula eucariota|real-cell]] entra en mitosis y desensambla su [[envoltura nuclear|nuclear-envelope]], los dos [[centrosomas|centrosome]] duplicados nuclean miles de [[microtúbulos|microtubule]] dinámicos desde complejos γ-TuRC. En la zona media, las [[proteínas motoras|motor-protein]] cinesina-5 (Eg5) de cuatro cabezas entrelazan microtúbulos antiparalelos y caminan hacia ambos extremos positivos, separando los polos unos diez micrómetros mientras la dineína cortical ancla las fibras astrales. Al mismo tiempo, las fibras cinetocóricas capturan los [[cinetocoros|real-div-kinetochore]], alinean cada par en el ecuador y luego se acortan en anafase repartiendo genomas idénticos.',
      blueprint:
        'Rol: Aparato mecánico bipolar autoorganizado de ~10 µm que segrega los [[cromosomas|chromosome]] replicados en mitosis y [[meiosis|real-div-meiosis]] · Entradas: Dímeros de α/β-[[tubulina|tubulin]]–GTP, [[centrosomas|centrosome]] duplicados (γ-TuRC), ATP para cinesina-5 y dineína [[motoras|motor-protein]] y gradientes Ran–GTP · Interior: Tres clases de [[microtúbulos|microtubule]] (astrales, interpolares antiparalelos unidos por Eg5 PDB 1II6 y haces cinetocóricos ligados vía [[Ndc80|real-div-kinetochore]]) más dineína (PDB 3VKH) · Salida: Alineación metafásica, transporte anafásico hacia los polos y señalización ecuatorial del surco de división.',
      scientific:
        'Huso mitótico/meiótico bipolar eucariota (~10–15 µm entre polos en [[células|real-cell]] de mamífero), ensamblado con [[microtúbulos|microtubule]] de 25 nm formados por heterodímeros α/β-[[tubulina|tubulin]] nucleados por γ-TuRC centrosomal y la vía cromosómica Ran–GTP/TPX2. La bipolaridad resulta del balance de fuerzas entre la cinesina-5 homotetramérica (Eg5, PDB 1II6), que desliza hacia fuera microtúbulos interpolares antiparalelos, la cinesina-14 (HSET) y la dineína citoplasmática (PDB 3VKH) en polos y corteza. Los haces cinetocóricos (15–25 MT por [[cinetocoro|real-div-kinetochore]]) producen tensión de piconewtons mediante despolimerización en extremos positivos y flujo polar.'
    }
  },

  'real-div-condensin': {
    en: {
      simple:
        'Condensin is a ring-shaped [[protein|protein]] motor powered by ATP that reels loose [[chromatin|chromatin-fiber]] into tidy stacked loops. Without it, two meters of human [[DNA|dna]] would tangle and snap when the [[mitotic spindle|real-div-spindle]] pulls chromosomes apart.',
      story:
        'Packing two meters of fragile [[DNA|dna]] wrapped on [[nucleosomes|nucleosome]] inside a ten-micrometer [[nucleus|nucleus]] into sturdy transport rods requires ten-thousand-fold compaction without tying a single knot. Condensin solves this by clamping onto a chromatin strand and burning ATP to reel DNA progressively through its coiled-coil SMC ring, like drawing loose climbing rope through a motorized cinch into tidy stacked loops before hauling. In prophase, condensin II forms a central longitudinal scaffold while condensin I enters after [[nuclear envelope|nuclear-envelope]] breakdown to nest shorter lateral loops, sculpting individual [[chromosomes|chromosome]] clean enough for topoisomerase II to disentangle.',
      blueprint:
        'Role: ATP-driven SMC loop-extrusion nanomachine (~45 nm) compacting interphase [[chromatin|chromatin-fiber]] 10,000-fold into mitotic rods; Inputs: 11 nm [[nucleosome|nucleosome]] chromatin fibers, cytosolic ATP + [[Mg2+|atom-mg]], and CDK1 mitotic phosphorylation triggers; Inside: Heterodimeric SMC2-SMC4 ATPase coiled-coil arms joined by kleisin CAP-H/H2 and HEAT-repeat subunits (PDB 6YVU / 7QEN) extruding nested DNA loops; Outputs: Mechanically stiff, individually resolved sister chromatids ready for [[spindle|real-div-spindle]] capture and sister splitting.',
      scientific:
        'Pentameric Structural Maintenance of Chromosomes (SMC) loop-extruding ATPase complex (Condensin I and II; holocomplex cryo-EM PDB 6YVU and ATP-clamped DNA-engaged state PDB 7QEN; ~45-50 nm extended coiled-coil span). Built from SMC2-SMC4 heterodimers hinged at one end and bridged at Walker-A/B ATPase heads by a kleisin subunit (CAP-H/CAP-H2) plus two HEAT-repeat subunits (CAP-D2/D3, CAP-G/G2). Driven by [[Mg2+|atom-mg]]-ATP hydrolysis, condensin extrudes [[dsDNA|dna]] wrapped on [[nucleosomes|nucleosome]] at ~0.5-1.5 kbp/s into nested helical arrays, collaborating with topoisomerase II to individualize mitotic [[chromosomes|chromosome]] before [[separase|real-div-separase]] onset.'
    },
    es: {
      simple:
        'La condensina es un motor [[proteico|protein]] en forma de anillo impulsado por ATP que enrolla la [[cromatina|chromatin-fiber]] suelta en bucles ordenados y apilados. Sin ella, dos metros de [[ADN|dna]] humano se enredarían y romperían cuando el [[huso mitótico|real-div-spindle]] separa los cromosomas.',
      story:
        'Empaquetar dos metros de [[ADN|dna]] enrollado en [[nucleosomas|nucleosome]] dentro de un [[núcleo|nucleus]] de diez micrómetros en bastones resistentes exige compactar diez mil veces sin formar nudos. La condensina sujeta una hebra de cromatina y consume ATP para deslizar el ADN por su anillo SMC de hélices enrolladas, como recoger una cuerda suelta a través de una cincha motorizada en bucles ordenados antes de izarla. En profase, la condensina II crea un eje longitudinal y, tras romperse la [[envoltura nuclear|nuclear-envelope]], la condensina I añade bucles laterales cortos esculpiendo [[cromosomas|chromosome]] nítidos que la topoisomerasa II desenreda sin esfuerzo.',
      blueprint:
        'Rol: Nanomáquina SMC extrusora de bucles impulsada por ATP (~45 nm) que compacta la [[cromatina|chromatin-fiber]] 10.000 veces en bastones mitóticos · Entradas: Fibras de [[nucleosomas|nucleosome]] de 11 nm, ATP citosólico + [[Mg²⁺|atom-mg]] y fosforilación mitótica CDK1 · Interior: Brazos coiled-coil ATPasa SMC2–SMC4 cerrados por kleisina CAP-H/H2 y subunidades HEAT (PDB 6YVU / 7QEN) que extruyen bucles anidados · Salida: Cromátidas hermanas rígidas e individualizadas listas para el [[huso|real-div-spindle]].',
      scientific:
        'Complejo ATPasa pentamérico de la familia SMC extrusor de bucles (Condensina I y II; holocomplejo crio-EM PDB 6YVU y estado unido a ADN con ATP PDB 7QEN; longitud ~45–50 nm). Integrado por heterodímeros SMC2–SMC4 articulados en una bisagra y cerrados en sus cabezas ATPasa por una kleisina (CAP-H/CAP-H2) y dos subunidades HEAT (CAP-D2/D3, CAP-G/G2). Mediante hidrólisis de ATP dependiente de [[Mg²⁺|atom-mg]], extruye [[ADNbc|dna]] empaquetado en [[nucleosomas|nucleosome]] a ~0,5–1,5 kpb/s en lazos helicoidales anidados junto a la topoisomerasa II para individualizar [[cromosomas|chromosome]].'
    }
  },

  'real-div-cohesin': {
    en: {
      simple:
        'Cohesin is a molecular [[protein|protein]] ring that encircles two freshly copied sister [[DNA|dna]] strands and keeps them locked together from replication until metaphase. When the cell is ready to divide, [[separase|real-div-separase]] snips the ring open so the sisters separate synchronously.',
      story:
        'Copying a [[chromosome|chromosome]] during S-phase produces two identical sister chromatids that must stay paired until every single chromosome is anchored on the [[mitotic spindle|real-div-spindle]]. Cohesin closes a forty-nanometer SMC1-SMC3 ring sealed by a kleisin latch (RAD21 in mitosis, REC8 in [[meiosis|real-div-meiosis]]) around both sister duplexes so poleward spindle pull builds measurable tension across the centromere. In mitosis, WAPL removes most arm cohesin during prophase while shugoshin shields centromeric rings until [[separase|real-div-separase]] cleaves the latch; in Meiosis I, centromeric cohesin stays protected one extra round so sister chromatids remain joined until Meiosis II.',
      blueprint:
        'Role: Topological SMC ring (~40 nm) tethering replicated sister chromatids to resist spindle pull until checkpoint release; Inputs: Newly replicated sister [[dsDNA|dna]] duplexes from S-phase, ATP + [[Mg2+|atom-mg]], NIPBL/MAU2 loaders, and ESCO1/2 acetylation locking; Inside: SMC1-SMC3 coiled-coil ring latched by cleavable kleisin RAD21 (mitosis) or REC8 ([[meiosis|real-div-meiosis]]) with STAG/SA subunits (PDB 6QPW / 5F0N); Outputs: Paired sister chromatids generating amphitelic tension at [[kinetochores|real-div-kinetochore]] until cleaved by [[separase|real-div-separase]].',
      scientific:
        'Ring-shaped SMC1A-SMC3-RAD21-STAG1/2 cohesin complex (~40 nm lumen; SMC-kleisin architecture PDB 6QPW and 5F0N) providing topological sister-chromatid cohesion from DNA replication until anaphase onset, as well as interphase TAD loop extrusion. Loaded onto [[chromatin|chromatin-fiber]] by NIPBL-MAU2 and locked against WAPL unloading via SMC3 acetylation during S-phase, mitotic centromeric cohesin is protected from prophase kinase release by SGO1-PP2A until [[APC/C-activated separase|real-div-separase]] proteolyzes RAD21. In [[meiosis|real-div-meiosis]], meiosis-specific kleisin REC8 is cleaved along arms in Anaphase I while SGO2-PP2A guards centromeric REC8 until Anaphase II.'
    },
    es: {
      simple:
        'La cohesina es un anillo [[proteico|protein]] molecular que rodea dos hebras hermanas recién copiadas de [[ADN|dna]] y las mantiene unidas desde la replicación hasta la metafase. Cuando la célula está lista, la [[separasa|real-div-separase]] corta el anillo para liberar ambas hermanas a la vez.',
      story:
        'Copiar un [[cromosoma|chromosome]] en la fase S genera dos cromátidas hermanas idénticas que deben permanecer juntas hasta que cada par quede fijado al [[huso mitótico|real-div-spindle]]. La cohesina cierra un anillo SMC1–SMC3 de cuarenta nanómetros sellado por una kleisina (RAD21 en mitosis, REC8 en [[meiosis|real-div-meiosis]]) alrededor de ambos dúplex, permitiendo que la tracción del huso genere tensión medible en el centrómero. En mitosis, WAPL retira la cohesina de los brazos en profase mientras la shugoshina protege el centrómero hasta el corte por [[separasa|real-div-separase]]; en Meiosis I, esa protección centromérica se prolonga hasta la Meiosis II.',
      blueprint:
        'Rol: Anillo SMC topológico (~40 nm) que amarra cromátidas hermanas replicadas resistiendo la tensión del huso hasta la liberación del retén · Entradas: Dúplex hermanos de [[ADNbc|dna]] recién replicados en fase S, ATP + [[Mg²⁺|atom-mg]], cargador NIPBL/MAU2 y acetilación ESCO1/2 · Interior: Anillo SMC1–SMC3 cerrado por la kleisina escindible RAD21 (mitosis) o REC8 ([[meiosis|real-div-meiosis]]) con STAG/SA (PDB 6QPW / 5F0N) · Salida: Cromátidas emparejadas que sostienen tensión anfitélica en [[cinetocoros|real-div-kinetochore]] hasta el corte por [[separasa|real-div-separase]].',
      scientific:
        'Complejo cohesina en anillo SMC1A–SMC3–RAD21–STAG1/2 (luz de ~40 nm; arquitectura SMC–kleisina PDB 6QPW y 5F0N) responsable de la cohesión topológica de cromátidas hermanas desde la fase S hasta anafase, además de la extrusión de bucles TAD en interfase. Cargada sobre [[cromatina|chromatin-fiber]] por NIPBL–MAU2 y estabilizada por acetilación de SMC3 frente a WAPL, la cohesina centromérica es protegida por SGO1–PP2A hasta que la [[separasa activada por APC/C|real-div-separase]] escinde RAD21. En [[meiosis|real-div-meiosis]], REC8 se corta en los brazos en Anafase I mientras SGO2–PP2A resguarda el centrómero hasta Anafase II.'
    }
  },

  'real-div-kinetochore': {
    en: {
      simple:
        'The kinetochore is a layered [[protein|protein]] docking pad built on the centromere of each [[chromosome|chromosome]]. Its fibrous Ndc80 arms grip dynamic [[spindle microtubules|real-div-spindle]] and sense whether opposite poles are pulling evenly before division proceeds.',
      story:
        'Every sister chromatid builds a two-hundred-nanometer trilaminar kinetochore on specialized CENP-A [[nucleosomes|nucleosome]] so [[spindle microtubules|real-div-spindle]] have a rock-solid handle. Outer Ndc80 fibrils clasp the shrinking microtubule tips tightly enough to transmit piconewtons of pulling force without slipping off as tubulin rings peel outward. Like opposite winches testing taut cables before releasing the coupling bolts, kinetochores keep the Spindle Assembly Checkpoint active whenever even one attachment is loose or lopsided; only balanced bipolar tension across [[cohesin|real-div-cohesin]] silences the checkpoint and authorizes [[separase|real-div-separase]] to trigger anaphase.',
      blueprint:
        'Role: ~200 nm centromeric microtubule-coupling machine and mechanosensor gating the Spindle Assembly Checkpoint (SAC); Inputs: Centromeric CENP-A [[nucleosomes|nucleosome]], inner CCAN scaffold, outer KMN network (Ndc80 PDB 3IZ0), and dynamic plus-ends of 15-25 [[microtubules|microtubule]]; Inside: Fibrillar Ndc80 CH-domains gripping [[tubulin|tubulin]] protofilaments alongside Aurora B error-correction kinase and Mad2/BubR1 SAC sensors; Outputs: Tension-verified amphitelic chromosome attachment, SAC silencing toward [[APC/C-separase|real-div-separase]], and force coupling during anaphase poleward retraction.',
      scientific:
        'Trilaminar macromolecular kinetochore plaque (~200-250 nm diameter in vertebrates) assembled onto centromeric CENP-A [[nucleosomes|nucleosome]] via the 16-subunit Constitutive Centromere-Associated Network (CCAN) and outer KMN network (KNL1, Mis12, and Ndc80 complexes; Ndc80-microtubule cryo-EM PDB 3IZ0). Each mammalian kinetochore binds 15-25 dynamic plus-ends of [[spindle microtubules|real-div-spindle]], transducing curved protofilament depolymerization energy into poleward motility. Erroneous low-tension attachments are destabilized by inner-centromere Aurora B phosphorylation of Ndc80 tails, while unattached kinetochores catalyze Mitotic Checkpoint Complex (MCC) assembly to block [[APC/C-separase|real-div-separase]] until amphitelic tension is achieved.'
    },
    es: {
      simple:
        'El cinetocoro es una plataforma [[proteica|protein]] multicapa ensamblada sobre el centrómero de cada [[cromosoma|chromosome]]. Sus brazos fibrosos Ndc80 sujetan los [[microtúbulos del huso|real-div-spindle]] y comprueban que ambos polos tiren por igual antes de permitir la separación.',
      story:
        'Cada cromátida hermana levanta un cinetocoro trilaminar de doscientos nanómetros sobre [[nucleosomas|nucleosome]] especializados con CENP-A para ofrecer un anclaje firme a los [[microtúbulos del huso|real-div-spindle]]. Las fibrillas externas Ndc80 sujetan los extremos que se despolimerizan sin soltarse mientras los aros de tubulina se curvan hacia fuera. Como cabrestantes opuestos comprobando cables tensos antes de soltar el seguro, los cinetocoros mantienen activo el punto de control del huso ante cualquier unión floja o asimétrica; solo una tensión bipolar equilibrada sobre la [[cohesina|real-div-cohesin]] apaga el retén y autoriza a la [[separasa|real-div-separase]] a iniciar la anafase.',
      blueprint:
        'Rol: Acoplador centromérico de microtúbulos (~200 nm) y mecanosensor que controla el punto de control del huso (SAC) · Entradas: [[Nucleosomas|nucleosome]] centroméricos CENP-A, red interna CCAN, complejo externo KMN (Ndc80 PDB 3IZ0) y extremos positivos de 15–25 [[microtúbulos|microtubule]] · Interior: Dominios CH de Ndc80 sujetos a protofilamentos de [[tubulina|tubulin]] junto a la cinasa correctora Aurora B y sensores Mad2/BubR1 · Salida: Unión anfitélica verificada por tensión, apagado del SAC hacia [[APC/C–separasa|real-div-separase]] y transmisión de fuerza en anafase.',
      scientific:
        'Placa macromolecular trilaminar del cinetocoro (~200–250 nm en vertebrados) ensamblada sobre [[nucleosomas|nucleosome]] centroméricos CENP-A mediante la red interna CCAN (16 subunidades) y la red externa KMN (KNL1, Mis12 y Ndc80; crio-EM Ndc80–microtúbulo PDB 3IZ0). Cada cinetocoro de mamífero acopla 15–25 extremos positivos de [[microtúbulos del huso|real-div-spindle]], convirtiendo la energía de despolimerización en tracción polar. La cinasa Aurora B corrige uniones sin tensión fosforilando Ndc80, mientras los cinetocoros libres ensamblan el complejo MCC que inhibe a [[APC/C–separasa|real-div-separase]] hasta lograr bi-orientación anfitélica.'
    }
  },

  'real-div-separase': {
    en: {
      simple:
        'Separase is a molecular scissor [[protein|protein]] kept locked up by an inhibitor called securin until every [[chromosome|chromosome]] lines up safely. Once the checkpoint clears, the APC/C complex destroys securin so separase slices [[cohesin|real-div-cohesin]] rings open and launches anaphase.',
      story:
        'Because tearing sister chromatids apart too early causes lethal aneuploidy, the dividing cell guards separase behind a double safety gate. Throughout prophase and metaphase, securin wraps right across the catalytic cleft of separase while unattached [[kinetochores|real-div-kinetochore]] hold the E3 ubiquitin ligase APC/C inactive. The instant the final chromosome achieves balanced tension on the [[mitotic spindle|real-div-spindle]], APC/C-Cdc20 tags securin and cyclin B with ubiquitin chains for proteasomal destruction. Freed separase snaps through every centromeric [[cohesin|real-div-cohesin]] kleisin strand within seconds, unleashing synchronous poleward separation across the entire genome.',
      blueprint:
        'Role: Checkpoint-gated protease switch triggering irreversible, synchronous anaphase onset; Inputs: SAC-silencing signal from bi-oriented [[kinetochores|real-div-kinetochore]], activated APC/C-Cdc20 ubiquitin ligase (PDB 5A31), and securin-bound inactive separase (PDB 7NJ1); Inside: Proteasomal degradation of securin exposing the conserved His-Cys caspase-like catalytic dyad of separase; Outputs: Rapid proteolytic cleavage of [[cohesin|real-div-cohesin]] kleisin (RAD21 in mitosis, REC8 in [[meiosis|real-div-meiosis]]), immediately releasing chromatids to the [[spindle|real-div-spindle]].',
      scientific:
        'Two-step irreversible anaphase switch coupling the 1.2 MDa multisubunit E3 ubiquitin ligase Anaphase-Promoting Complex/Cyclosome (APC/C-Cdc20, cryo-EM PDB 5A31) to the ~230 kDa CD-clan cysteine endopeptidase separase (ESPL1; human separase-securin complex PDB 7NJ1). Upon Spindle Assembly Checkpoint satisfaction at all [[kinetochores|real-div-kinetochore]], APC/C polyubiquitylates securin and mitotic cyclin B for 26S proteasome turnover, vacating separase pseudosubstrate inhibition. Activated separase recognizes E-x-x-R motifs on [[cohesin|real-div-cohesin]] kleisin RAD21 (mitosis) or REC8 ([[meiosis|real-div-meiosis]]), hydrolyzing peptide bonds synchronously to collapse topological sister tethering.'
    },
    es: {
      simple:
        'La separasa es una [[proteína|protein]] tijera molecular mantenida bloqueada por el inhibidor segurina hasta que todos los [[cromosomas|chromosome]] están bien alineados. Al apagarse el retén, el complejo APC/C destruye la segurina para que la separasa corte los anillos de [[cohesina|real-div-cohesin]] e inicie la anafase.',
      story:
        'Como separar cromátidas antes de tiempo provoca aneuploidías letales, la célula en división resguarda la separasa tras un doble seguro. Durante profase y metafase, la segurina bloquea el sitio catalítico de la separasa mientras los [[cinetocoros|real-div-kinetochore]] sin tensión mantienen inhibida a la ubiquitina ligasa APC/C. En el instante en que el último cromosoma logra equilibrio sobre el [[huso mitótico|real-div-spindle]], APC/C–Cdc20 marca con ubiquitina a la segurina y a la ciclina B para destruirlas en el proteasoma. Libre al fin, la separasa corta cada kleisina de [[cohesina|real-div-cohesin]] en segundos, lanzando una anafase perfectamente sincronizada.',
      blueprint:
        'Rol: Interruptor proteolítico regulado por el punto de control que dispara una anafase irreversible y sincronizada · Entradas: Señal de apagado del SAC desde [[cinetocoros|real-div-kinetochore]] bi-orientados, ligasa APC/C–Cdc20 activa (PDB 5A31) y separasa inhibida por segurina (PDB 7NJ1) · Interior: Degradación proteasomal de la segurina que libera la díada catalítica His–Cys tipo caspasa de la separasa · Salida: Corte proteolítico rápido de la kleisina de [[cohesina|real-div-cohesin]] (RAD21 en mitosis, REC8 en [[meiosis|real-div-meiosis]]) que suelta las cromátidas hacia el [[huso|real-div-spindle]].',
      scientific:
        'Interruptor irreversible de anafase en dos etapas que acopla la ubiquitina ligasa E3 multiproteica de 1,2 MDa APC/C–Cdc20 (crio-EM PDB 5A31) con la cisteína endopeptidasa separasa de ~230 kDa (ESPL1; complejo humano separasa–segurina PDB 7NJ1). Al satisfacerse el SAC en todos los [[cinetocoros|real-div-kinetochore]], APC/C poliubiquitina segurina y ciclina B mitótica para degradación en el proteasoma 26S, retirando la inhibición pseudosustrato. La separasa activa reconoce motivos E-x-x-R en la kleisina RAD21 (mitosis) o REC8 ([[meiosis|real-div-meiosis]]) de la [[cohesina|real-div-cohesin]], hidrolizando los enlaces peptídicos de forma sincrónica.'
    }
  },

  'real-div-meiosis': {
    en: {
      simple:
        'Meiosis is a specialized two-round cell division in germline cells that halves the [[chromosome|chromosome]] number and shuffles maternal and paternal genes. One round of [[DNA|dna]] copying followed by two divisions yields four genetically unique haploid gametes.',
      story:
        'While mitosis clones a diploid cell into two identical copies, sexual reproduction needs haploid gametes so fertilization restores diploidy instead of doubling the genome every generation. In Prophase I, maternal and paternal homologous [[chromosomes|chromosome]] zip tightly along the [[synaptonemal complex|real-div-synaptonemal]], suffer programmed Spo11 breaks, and swap matching DNA segments via [[RAD51|real-div-rad51]] and [[Holliday junctions|real-div-holliday]]. Meiosis I then separates whole recombinant homologs while shugoshin shields centromeric [[cohesin|real-div-cohesin]], and Meiosis II skips DNA replication to split sister chromatids into four distinct haploid cells.',
      blueprint:
        'Role: Two-stage reductional and equational germline division converting one diploid (2n) meiocyte into four genetically unique haploid (1n) gametes; Inputs: Single S-phase duplication of diploid maternal/paternal [[chromosomes|chromosome]], [[synaptonemal|real-div-synaptonemal]] assembly, and programmed [[RAD51|real-div-rad51]] recombination; Inside: Meiosis I (homolog pairing, [[Holliday junction|real-div-holliday]] crossing-over, independent assortment, arm REC8 cleavage) followed directly by Meiosis II (sister separation via centromeric [[separase|real-div-separase]] cleavage); Outputs: Four non-identical 1n gametes driving genetic variation across [[eukaryotic|real-cell]] populations.',
      scientific:
        'Specialized eukaryotic germline division comprising one pre-meiotic S-phase followed by two consecutive chromosome segregations (2n -> 4 x 1n) driven by remodeled [[cohesin|real-div-cohesin]] and [[spindle|real-div-spindle]] mechanics. In Prophase I, homologous chromosomes synapse via the [[synaptonemal complex|real-div-synaptonemal]] (SYCP1 PDB 6F5X, SYCP3 PDB 4CPC) and undergo Spo11-initiated, [[RAD51|real-div-rad51]]/DMC1-mediated reciprocal crossing-over resolved through [[Holliday junctions|real-div-holliday]] (PDB 1C7M) into physical chiasmata. Meiosis I co-orients sister [[kinetochores|real-div-kinetochore]] and protects centromeric REC8 via SGO2-PP2A so [[separase|real-div-separase]] segregates homologs randomly (independent assortment); Meiosis II then separates recombinant sister chromatids equationally.'
    },
    es: {
      simple:
        'La meiosis es una división celular especializada en dos rondas propia de las células germinales que reduce a la mitad el número de [[cromosomas|chromosome]] y mezcla genes maternos y paternos. Una sola copia del [[ADN|dna]] seguida de dos divisiones genera cuatro gametos haploides genéticamente únicos.',
      story:
        'Mientras la mitosis clona una célula diploide en dos copias idénticas, la reproducción sexual requiere gametos haploides para que la fecundación restaure la diploidía sin duplicar el genoma en cada generación. En Profase I, los [[cromosomas|chromosome]] homólogos maternos y paternos se cierran a lo largo del [[complejo sinaptonémico|real-div-synaptonemal]], reciben cortes programados de Spo11 e intercambian segmentos mediante [[RAD51|real-div-rad51]] y [[uniones Holliday|real-div-holliday]]. Luego, la Meiosis I separa homólogos recombinantes mientras la shugoshina protege la [[cohesina|real-div-cohesin]] centromérica, y la Meiosis II omite replicar el ADN para dividir cromátidas hermanas en cuatro células haploides distintas.',
      blueprint:
        'Rol: División germinal en dos etapas (reduccional y ecuacional) que transforma un meiocito diploide (2n) en cuatro gametos haploides únicos (1n) · Entradas: Única duplicación en fase S de [[cromosomas|chromosome]] diploides maternos y paternos, ensamblaje [[sinaptonémico|real-div-synaptonemal]] y recombinación con [[RAD51|real-div-rad51]] · Interior: Meiosis I (sinapsis homóloga, sobrecruzamiento por [[uniones Holliday|real-div-holliday]], distribución independiente y corte de REC8 en brazos) seguida de Meiosis II (separación de hermanas por [[separasa|real-div-separase]]) · Salida: Cuatro gametos 1n distintos que impulsan la diversidad en [[eucariotas|real-cell]].',
      scientific:
        'División germinal eucariota compuesta por una fase S premeiótica seguida de dos segregaciones cromosómicas consecutivas (2n → 4 × 1n) mediante adaptación de [[cohesina|real-div-cohesin]] y [[huso|real-div-spindle]]. En Profase I, los homólogos sinapsan vía [[complejo sinaptonémico|real-div-synaptonemal]] (SYCP1 PDB 6F5X, SYCP3 PDB 4CPC) y ejecutan sobrecruzamiento recíproco iniciado por Spo11 y mediado por [[RAD51|real-div-rad51]]/DMC1 a través de [[uniones Holliday|real-div-holliday]] (PDB 1C7M) formando quiasmas físicos. La Meiosis I co-orienta [[cinetocoros|real-div-kinetochore]] hermanos y resguarda REC8 centromérica con SGO2–PP2A para segregar homólogos al azar; la Meiosis II separa ecuacionalmente las cromátidas recombinantes.'
    }
  },

  'real-div-synaptonemal': {
    en: {
      simple:
        'The synaptonemal complex is a zipper-like [[protein|protein]] ladder that binds matching maternal and paternal [[chromosomes|chromosome]] side by side during early [[meiosis|real-div-meiosis]]. Holding them exactly 100 nanometers apart lets recombination enzymes swap matching gene sections accurately.',
      story:
        'Before maternal and paternal chromosomes can trade genetic segments without deleting or duplicating genes, they must align base-for-base across their full length. During Prophase I of [[meiosis|real-div-meiosis]], axial SYCP3 protein rails coat each chromosome core while overlapping SYCP1 coiled-coil rungs bridge the hundred-nanometer gap across a central element, zipping both homologs into a single bivalent. Stabilized inside this temporary scaffold, [[RAD51|real-div-rad51]] filaments find matching sequences and mature crossovers into [[Holliday junctions|real-div-holliday]]; once recombination finishes, the zipper dissolves, leaving physical chiasmata to hold the pair together.',
      blueprint:
        'Role: ~100 nm tripartite proteinaceous zipper aligning maternal and paternal homologs along their length in Prophase I of [[meiosis|real-div-meiosis]]; Inputs: Paired sister-chromatid axes coated with meiotic [[cohesin|real-div-cohesin]], lateral SYCP3 fibers (PDB 4CPC), and transverse SYCP1 coiled-coil dimers (PDB 6F5X); Inside: Two lateral elements flanking central-element bridges that space homologous [[chromatin|chromatin-fiber]] loops at exact recombination distance; Outputs: Registered bivalent pairs enabling high-fidelity [[RAD51|real-div-rad51]] homology search and crossover maturation before diplotene disassembly.',
      scientific:
        'Tripartite meiosis-specific protein lattice (~100 nm inter-axis width) mediating homologous chromosome synapsis throughout pachytene of Prophase I in [[meiosis|real-div-meiosis]]. Comprises two axial/lateral elements built from tetrameric coiled-coil SYCP3 struts (PDB 4CPC) anchored on REC8 [[cohesin|real-div-cohesin]] axes, bridged head-to-head across the central space by antiparallel alpha-helical SYCP1 transverse filaments (PDB 6F5X) and central-element proteins (SYCE1-3, TEX12). The complex spatially coordinates [[RAD51|real-div-rad51]]/DMC1 recombination nodules, suppresses non-allelic rearrangements, and enforces crossover interference before Polo-like kinase-triggered disassembly exposes mature [[Holliday junction|real-div-holliday]] chiasmata.'
    },
    es: {
      simple:
        'El complejo sinaptonémico es una escalera [[proteica|protein]] tipo cremallera que mantiene emparejados lado a lado los [[cromosomas|chromosome]] materno y paterno al inicio de la [[meiosis|real-div-meiosis]]. Separarlos exactamente 100 nanómetros permite intercambiar tramos equivalentes de genes con precisión.',
      story:
        'Antes de que los cromosomas materno y paterno puedan intercambiar segmentos sin perder ni duplicar genes, deben alinearse con exactitud a lo largo de toda su longitud. Durante la Profase I de la [[meiosis|real-div-meiosis]], rieles axiales de proteína SYCP3 revisten cada eje cromosómico mientras travesaños coiled-coil de SYCP1 cruzan el espacio de cien nanómetros hacia un elemento central, cerrando ambos homólogos en un bivalente. Dentro de este andamio temporal, los filamentos de [[RAD51|real-div-rad51]] localizan secuencias homólogas y maduran sobrecruzamientos hacia [[uniones Holliday|real-div-holliday]]; luego el complejo se desensambla dejando los quiasmas visibles.',
      blueprint:
        'Rol: Cremallera proteica tripartita de ~100 nm que alinea los homólogos materno y paterno a lo largo de la Profase I de la [[meiosis|real-div-meiosis]] · Entradas: Ejes de cromátidas hermanas con [[cohesina|real-div-cohesin]] meiótica, fibras laterales SYCP3 (PDB 4CPC) y dímeros transversales SYCP1 (PDB 6F5X) · Interior: Dos elementos laterales unidos por puentes centrales que posicionan los bucles de [[cromatina|chromatin-fiber]] a distancia precisa de recombinación · Salida: Bivalentes registrados para la búsqueda homóloga de [[RAD51|real-div-rad51]] y maduración de quiasmas antes de diploteno.',
      scientific:
        'Red proteica tripartita específica de la [[meiosis|real-div-meiosis]] (~100 nm entre ejes laterales) que media la sinapsis homóloga durante el paquiteno de Profase I. Se compone de dos elementos laterales formados por puntales tetraméricos coiled-coil de SYCP3 (PDB 4CPC) sobre ejes de [[cohesina|real-div-cohesin]] REC8, unidos transversalmente por filamentos en hélice α de SYCP1 (PDB 6F5X) y proteínas del elemento central (SYCE1–3, TEX12). Coordina espacialmente los nódulos de recombinación con [[RAD51|real-div-rad51]]/DMC1, impide reordenamientos no alélicos y regula la interferencia de sobrecruzamientos antes de exponer los quiasmas maduros de [[uniones Holliday|real-div-holliday]].'
    }
  },

  'real-div-rad51': {
    en: {
      simple:
        'During [[meiosis|real-div-meiosis]], the enzyme Spo11 intentionally snips [[DNA|dna]] strands and RAD51 [[proteins|protein]] coat the exposed single-stranded tails. These helical RAD51 filaments invade the matching partner chromosome to kick off genetic crossing-over.',
      story:
        'Genetic diversity in [[meiosis|real-div-meiosis]] begins with a deliberate double-strand break: topoisomerase-like Spo11 dimers cleave chromosomal [[DNA|dna]] inside paired loops along the [[synaptonemal complex|real-div-synaptonemal]]. Exonucleases trim one strand back to leave long single-stranded 3-prime overhangs, onto which ATP-bound RAD51 (partnered with meiosis-specific DMC1) polymerizes into a stiff right-handed spiral filament. Stretching the trapped strand by fifty percent, this filament probes the intact partner duplex until complementary Watson-Crick base pairing snaps into place, forming a displaced D-loop that matures into a four-way [[Holliday junction|real-div-holliday]].',
      blueprint:
        'Role: Programmed DNA break initiation (Spo11) and ATP-powered homologous strand-invasion recombinase filament (RAD51/DMC1); Inputs: Paired homologous [[dsDNA|dna]] along the [[synaptonemal complex|real-div-synaptonemal]], Spo11 cleavage dimers, end-resection nucleases, and ATP + [[Mg2+|atom-mg]]; Inside: Right-handed helical RAD51 nucleoprotein filament (PDB 5H1B) stretching 3-prime ssDNA ~1.5x to scan base-pair homology and catalyze strand exchange; Outputs: Displaced D-loop intermediates primed for DNA synthesis and double [[Holliday junction|real-div-holliday]] crossing-over.',
      scientific:
        'Homologous recombination initiation engine coupling Spo11 (archaeal topoisomerase VI A-subunit homolog forming transient 5-prime phosphotyrosyl covalent DNA breaks) with the RecA-family ATPase recombinase RAD51 (cryo-EM ssDNA presynaptic filament PDB 5H1B; ~10 nm diameter, ~6 protomers per turn) and meiotic paralog DMC1. Following Mre11-Rad50-Nbs1/Exo1 resection to 3-prime ssDNA tails, [[Mg2+|atom-mg]]-ATP-bound RAD51 stretches the captured strand into base triplets (~1.5x B-DNA contour length), lowering the kinetic barrier for homology sampling on the non-sister [[chromosome|chromosome]] and driving D-loop strand invasion toward [[Holliday junction|real-div-holliday]] assembly.'
    },
    es: {
      simple:
        'Durante la [[meiosis|real-div-meiosis]], la enzima Spo11 corta de forma intencionada el [[ADN|dna]] y las [[proteínas|protein]] RAD51 recubren los extremos monocatenarios expuestos. Estos filamentos helicoidales de RAD51 invaden el cromosoma compañero para iniciar el intercambio genético.',
      story:
        'La diversidad genética en la [[meiosis|real-div-meiosis]] comienza con una rotura deliberada de doble cadena: dímeros de Spo11 cortan el [[ADN|dna]] cromosómico dentro de los bucles sujetos al [[complejo sinaptonémico|real-div-synaptonemal]]. Exonucleasas recortan una hebra dejando colas 3′ monocatenarias sobre las que RAD51 unido a ATP (junto a su par meiótico DMC1) polimeriza formando una hélice rígida. Al estirar la hebra capturada un cincuenta por ciento, el filamento sondea el dúplex homólogo intacto hasta lograr apareamiento complementario, originando un bucle D que madura en una [[unión Holliday|real-div-holliday]].',
      blueprint:
        'Rol: Inicio programado de roturas de ADN (Spo11) y filamento recombinasa invasor de hebra impulsado por ATP (RAD51/DMC1) · Entradas: [[ADNbc|dna]] homólogo emparejado en el [[complejo sinaptonémico|real-div-synaptonemal]], dímeros Spo11, nucleasas de resección y ATP + [[Mg²⁺|atom-mg]] · Interior: Filamento nucleoproteico helicoidal dextrógiro de RAD51 (PDB 5H1B) que estira el ADNmc 3′ ~1,5× para verificar homología e intercambiar hebras · Salida: Intermediarios en bucle D listos para síntesis y sobrecruzamiento por [[unión Holliday|real-div-holliday]].',
      scientific:
        'Motor de iniciación de recombinación homóloga que acopla Spo11 (homólogo de la subunidad A de topoisomerasa VI arqueana, formando enlaces covalentes 5′-fosfotirosilo) con la recombinasa ATPasa RAD51 de la familia RecA (filamento presináptico crio-EM PDB 5H1B; ~10 nm de diámetro, ~6 protómeros por vuelta) y el parálogo meiótico DMC1. Tras la resección MRN/Exo1 hacia colas 3′ de ADNmc, RAD51 unido a [[Mg²⁺|atom-mg]]–ATP estira la hebra en tripletes (~1,5× la longitud del ADN-B) catalizando la invasión del [[cromosoma|chromosome]] no hermano hacia la [[unión Holliday|real-div-holliday]].'
    }
  },

  'real-div-holliday': {
    en: {
      simple:
        'A Holliday junction is a four-way [[DNA|dna]] crossroad where two homologous [[chromosomes|chromosome]] temporarily trade single strands during [[meiosis|real-div-meiosis]]. Cutting and sealing this four-strand knot creates physical crossovers called chiasmata that shuffle maternal and paternal traits.',
      story:
        'After [[RAD51|real-div-rad51]] drives one broken strand into its partner chromosome and DNA polymerases fill the gap, two intact DNA duplexes remain covalently braided at a four-way Holliday junction. Stabilized into a compact stacked-X geometry by divalent [[Mg2+|atom-mg]] ions neutralizing negative [[phosphate|phosphate]] backbones, the branch point can slide along matching [[nucleotide|nucleotide]] sequences before structure-selective resolvase enzymes make two symmetric nicks. Depending on which pair of strands gets cut and ligated, the junction resolves either cleanly without exchange or into a reciprocal chiasma whose swapped maternal and paternal arms hold bivalents under tension until Anaphase I.',
      blueprint:
        'Role: Four-strand branched [[DNA|dna]] crossover intermediate bridging homologous chromosomes during [[meiosis|real-div-meiosis]]; Inputs: D-loop strand-invasion intermediates from [[RAD51|real-div-rad51]], repair DNA synthesis, DNA ligase, and stabilizing divalent [[Mg2+|atom-mg]] ions; Inside: Four antiparallel [[DNA|dna]] arms joined at a single mobile phosphodiester branch (crystal structure PDB 1C7M) folding into antiparallel stacked-X helices; Outputs: Symmetric resolvase cleavage yielding recombinant crossover chromatids (chiasmata) with exchanged maternal/paternal alleles.',
      scientific:
        'Four-way branched [[dsDNA|dna]] homologous recombination intermediate (stacked-X crystal structure PDB 1C7M; ~2 nm duplex arms joined at a central crossover of four sugar-[[phosphate|phosphate]] backbones built from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]]). Physiological [[Mg2+|atom-mg]] cations neutralize clustered central phosphate repulsion, stabilizing right-handed coaxial helix stacking while permitting branch migration across homologous base pairs. Endonucleolytic resolution of double Holliday junctions (MutL-gamma/MLH1-MLH3 or GEN1/MUS81) produces reciprocal meiotic crossovers (chiasmata) essential both for allele shuffling and for mechanical tension across the Metaphase I [[spindle|real-div-spindle]].'
    },
    es: {
      simple:
        'Una unión Holliday es un cruce de cuatro brazos de [[ADN|dna]] donde dos [[cromosomas|chromosome]] homólogos comparten hebras temporalmente durante la [[meiosis|real-div-meiosis]]. Cortar y sellar este nudo crea sobrecruzamientos físicos llamados quiasmas que mezclan rasgos maternos y paternos.',
      story:
        'Después de que [[RAD51|real-div-rad51]] introduce una hebra en el cromosoma compañero y las polimerasas rellenan el hueco, ambos dúplex quedan entrelazados covalentemente en una unión Holliday de cuatro vías. Estabilizada en una geometría en X apilada por cationes [[Mg²⁺|atom-mg]] que neutralizan los esqueletos negativos de [[fosfato|phosphate]], la bifurcación puede deslizarse por secuencias complementarias de [[nucleótidos|nucleotide]] hasta que las resolvasas realizan dos cortes simétricos. Según qué par de hebras se corte y ligue, el cruce culmina en un quiasma recíproco cuyos brazos intercambiados sostienen la tensión meiótica hasta la Anafase I.',
      blueprint:
        'Rol: Intermediario ramificado de cuatro hebras de [[ADN|dna]] que enlaza cromosomas homólogos durante la [[meiosis|real-div-meiosis]] · Entradas: Bucles D formados por [[RAD51|real-div-rad51]], síntesis reparadora de ADN, ligasa e iones [[Mg²⁺|atom-mg]] estabilizadores · Interior: Cuatro brazos antiparalelos de [[ADN|dna]] unidos en un punto móvil fosfodiéster (estructura cristalina PDB 1C7M) plegado en hélices apiladas en X · Salida: Resolución endonucleolítica simétrica que genera cromátidas recombinantes (quiasmas) con alelos maternos y paternos mezclados.',
      scientific:
        'Intermediario ramificado de cuatro vías de [[ADNbc|dna]] en la recombinación homóloga (estructura cristalina en X apilada PDB 1C7M; brazos dúplex de ~2 nm unidos por cuatro esqueletos azúcar-[[fosfato|phosphate]] de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]]). Los iones fisiológicos [[Mg²⁺|atom-mg]] neutralizan la repulsión de los fosfatos centrales estabilizando el apilamiento coaxial mientras permiten migración de rama sobre pares homólogos. La resolución de dobles uniones Holliday (MutLγ/MLH1–MLH3 o GEN1/MUS81) produce quiasmas recíprocos indispensables para la variabilidad alélica y la tensión en el [[huso|real-div-spindle]] de Metafase I.'
    }
  }
};

export const CELL_DIVISION_PART_LENSES: PagePartLensMap = {
  'cell_division_realistic.html': {
    cell_cortex: {
      en: {
        subtitle: 'Dividing Cell Cortex & Plasma Membrane (20 um)',
        simple:
          'This outer shell combines the flexible [[plasma membrane|plasma-membrane]] with a dense underlying mesh of [[actin filaments|actin-filament]]. During division, it rounds the cell up to give the [[spindle|real-div-spindle]] room and later pinches inward to separate the two daughters.',
        story:
          'When a twenty-micrometer [[eukaryotic cell|real-cell]] enters mitosis, its thin cortical mesh of [[actin|actin-filament]] and myosin beneath the [[plasma membrane|plasma-membrane]] increases surface tension so a flat, spread cell pulls into a protective sphere. This geometric rounding creates clear interior space for the [[mitotic spindle|real-div-spindle]] to align [[chromosomes|chromosome]] accurately while dynein anchors mounted on the inner cortex tug on astral microtubules to orient the division plane. In late anaphase, equatorial RhoA signaling focuses actin and myosin along the cell midline so the cortex folds inward around the cleavage furrow.',
        blueprint: {
          role: 'Mechanically active 20 um cell boundary regulating mitotic rounding, spindle orientation, and cleavage furrow deformation',
          arrivesFrom: 'Phospholipid bilayer of the [[plasma membrane|plasma-membrane]] backed by polymerizing [[G-actin|g-actin]] and cortical myosin II',
          inside: 'Fluid 7 nm lipid envelope coupled via ERM linkers to a ~100-200 nm contractile [[actin-filament|actin-filament]] cortex and astral dynein anchors',
          deliversTo: 'Spherical workspace for the [[mitotic spindle|real-div-spindle]], pole-anchoring force, and inward membrane furrow during cytokinesis',
          loop: 'Spindle midzone signals activate equatorial RhoA, converting uniform cortical tension into a focused cleavage furrow'
        },
        scientific:
          'Eukaryotic dividing cell boundary (~20 um diameter mammalian cutaway [[cell|real-cell]]) composed of a ~7 nm [[plasma membrane|plasma-membrane]] tethered by ezrin-radixin-moesin linkers to a ~100-200 nm submembranous [[F-actin|actin-filament]]-myosin II cortex. Mitotic CDK1-driven osmotic influx and cortical actomyosin stiffening drive mitotic rounding, preserving geometric space for the 10 um [[spindle|real-div-spindle]] while LGN-NuMA-dynein cortical complexes pull astral [[microtubules|microtubule]] to position the division axis prior to equatorial cytokinesis.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Plasma Membrane', cargo: '7 nm flexible lipid bilayer' },
          { nodeId: 'actin-filament', label: 'Cortical Actin Mesh', cargo: 'Actomyosin surface tension' }
        ],
        to: [
          { nodeId: 'real-cell-division', label: 'Dividing Cell Overview', cargo: 'Mitotic rounding & cleavage' },
          { nodeId: 'real-div-spindle', label: 'Spindle Pole Anchoring', cargo: 'Astral cortex orientation' }
        ]
      },
      es: {
        subtitle: 'Corteza celular en división y membrana plasmática (20 µm)',
        simple:
          'Esta capa externa combina la flexible [[membrana plasmática|plasma-membrane]] con una red densa de [[filamentos de actina|actin-filament]] justo debajo. Al dividirse, redondea la célula para dar espacio al [[huso|real-div-spindle]] y luego se hunde formando las dos células hijas.',
        story:
          'Cuando una [[célula eucariota|real-cell]] de veinte micrómetros entra en mitosis, su red cortical de [[actina|actin-filament]] y miosina bajo la [[membrana plasmática|plasma-membrane]] incrementa la tensión superficial para que la célula se redondee en esfera. Ese espacio interior despejado permite al [[huso mitótico|real-div-spindle]] orientar y alinear los [[cromosomas|chromosome]], mientras complejos corticales con dineína tiran de los microtúbulos astrales fijando el eje de división. En anafase tardía, señales RhoA ecuatoriales pliegan la corteza hacia adentro formando el surco de citocinesis.',
        blueprint: {
          role: 'Frontera celular mecánica de 20 µm que controla el redondeo mitótico, la orientación del huso y el surco de división',
          arrivesFrom: 'Bicapa lipídica de la [[membrana plasmática|plasma-membrane]] respaldada por [[actina G|g-actin]] polimerizada y miosina II cortical',
          inside: 'Envoltura fluida de 7 nm acoplada vía proteínas ERM a una corteza de [[filamentos de actina|actin-filament]] (~100–200 nm) y anclas de dineína',
          deliversTo: 'Espacio esférico para el [[huso mitótico|real-div-spindle]], tracción astral orientadora e invaginación del surco en citocinesis',
          loop: 'La zona media del huso activa RhoA en el ecuador, concentrando la tensión cortical en un surco de constricción'
        },
        scientific:
          'Perímetro celular eucariota en división ([[célula|real-cell]] mamífera seccionada de ~20 µm) integrado por una [[membrana plasmática|plasma-membrane]] de ~7 nm ligada por proteínas ERM a una corteza submembranosa de [[actina F|actin-filament]] y miosina II (~100–200 nm). El influjo osmótico y el endurecimiento actomiosínico mediados por CDK1 inducen el redondeo mitótico, dando volumen al [[huso|real-div-spindle]] de 10 µm mientras complejos corticales LGN–NuMA–dineína orientan los [[microtúbulos|microtubule]] astrales antes de la citocinesis.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Bicapa lipídica flexible de 7 nm' },
          { nodeId: 'actin-filament', label: 'Malla cortical de actina', cargo: 'Tensión superficial actomiosínica' }
        ],
        to: [
          { nodeId: 'real-cell-division', label: 'División celular global', cargo: 'Redondeo mitótico y escisión' },
          { nodeId: 'real-div-spindle', label: 'Anclaje polar del huso', cargo: 'Orientación cortical astral' }
        ]
      }
    },

    nuclear_env: {
      en: {
        subtitle: 'Remodeling Nuclear Envelope & Lamin Mesh',
        simple:
          'This double-membrane [[nuclear envelope|nuclear-envelope]] protects the [[nucleus|nucleus]] during interphase, breaks into tiny vesicles in prometaphase so [[spindle microtubules|real-div-spindle]] can grab chromosomes, and rebuilds two fresh envelopes in telophase.',
        story:
          'Unlike [[E. coli|real-bacterium]], which divides its circular genome directly inside the cytoplasm, an animal cell locks its linear [[chromosomes|chromosome]] behind a sturdy double [[nuclear envelope|nuclear-envelope]] reinforced by intermediate-filament nuclear lamins. To let cytoplasmic [[spindle|real-div-spindle]] fibers reach the [[kinetochores|real-div-kinetochore]], mitotic CDK1 kinases phosphorylate both nuclear pore proteins and lamins during prometaphase, tearing open and absorbing the double membrane into the endoplasmic reticulum. Once sister sets arrive at opposite poles in telophase, phosphatases strip those phosphate tags so fresh nuclear envelopes seal tightly around each daughter [[nucleus|nucleus]].',
        blueprint: {
          role: 'Reversible double-membrane barrier toggling between interphase genome protection and open-mitosis spindle access',
          arrivesFrom: 'Interphase [[nuclear envelope|nuclear-envelope]] sheets continuous with the ER, regulated by mitotic CDK1 phosphorylation and telophase PP1/PP2A',
          inside: 'Inner and outer lipid bilayers perforated by nuclear pore complexes and lined internally by polymerized lamin filaments',
          deliversTo: 'Unobstructed prometaphase [[spindle|real-div-spindle]] access to [[kinetochores|real-div-kinetochore]] and restored daughter [[nuclei|nucleus]] at telophase',
          loop: 'Phosphorylation disassembles lamins for open mitosis; dephosphorylation reassembles double envelopes around segregated chromosomes'
        },
        scientific:
          'Dynamic double-bilayer [[nuclear envelope|nuclear-envelope]] (~40 nm perinuclear lumen) undergoing open-mitosis nuclear envelope breakdown (NEBD) in animal [[cells|real-cell]] (contrasting with closed intranuclear mitosis in many [[fungi|real-fungal]]). CDK1-cyclin B and Plk1 phosphorylation of nuclear pore nucleoporins and A/B-type lamins combines with dynein-mediated tearing to retract envelope membranes into the mitotic ER network; telophase dephosphorylation by PP1/PP2A drives ESCRT-III-sealed reformation around each segregated daughter [[nucleus|nucleus]].',
        from: [
          { nodeId: 'nuclear-envelope', label: 'Nuclear Envelope', cargo: 'Double membrane & nuclear pores' },
          { nodeId: 'nucleus', label: 'Interphase Nucleus', cargo: 'Lamin-supported chromatin vault' }
        ],
        to: [
          { nodeId: 'real-div-spindle', label: 'Open Spindle Access', cargo: 'Microtubule chromosome capture' },
          { nodeId: 'real-cell-division', label: 'Telophase Reassembly', cargo: 'Two restored daughter nuclei' }
        ]
      },
      es: {
        subtitle: 'Envoltura nuclear dinámica y lámina nuclear',
        simple:
          'Esta [[envoltura nuclear|nuclear-envelope]] de doble membrana protege al [[núcleo|nucleus]] en interfase, se fragmenta en prometafase para que los [[microtúbulos del huso|real-div-spindle]] atrapen los cromosomas y reconstruye dos envolturas nuevas en telofase.',
        story:
          'A diferencia de [[E. coli|real-bacterium]], una célula animal encierra sus [[cromosomas|chromosome]] lineales tras una doble [[envoltura nuclear|nuclear-envelope]] reforzada por filamentos de lámina nuclear. Para que el [[huso mitótico|real-div-spindle]] citoplasmático alcance los [[cinetocoros|real-div-kinetochore]], las cinasas CDK1 fosforilan poros y láminas en prometafase, abriendo la barrera y absorbiendo sus membranas en el retículo endoplasmático. Al llegar los juegos hijos a ambos polos en telofase, las fosfatasas retiran esos grupos fosfato y reconstruyen una envoltura sellada alrededor de cada nuevo [[núcleo|nucleus]].',
        blueprint: {
          role: 'Barrera reversible de doble membrana que alterna entre protección genómica en interfase y acceso abierto del huso en mitosis',
          arrivesFrom: 'Láminas de la [[envoltura nuclear|nuclear-envelope]] continuas con el RE bajo control de fosforilación CDK1 y fosfatasas PP1/PP2A',
          inside: 'Bicapas lipídicas interna y externa perforadas por poros nucleares y tapizadas por filamentos de lámina nuclear',
          deliversTo: 'Paso libre del [[huso|real-div-spindle]] hacia los [[cinetocoros|real-div-kinetochore]] en prometafase y reconstrucción de [[núcleos|nucleus]] hijos en telofase',
          loop: 'La fosforilación desensambla la lámina en mitosis abierta; la desfosforilación rehace la envoltura al terminar la segregación'
        },
        scientific:
          '[[Envoltura nuclear|nuclear-envelope]] dinámica de doble bicapa (espacio perinuclear ~40 nm) sometida a desensamblaje mitótico abierto (NEBD) en [[células|real-cell]] animales (frente a la mitosis cerrada intranuclear de muchos [[hongos|real-fungal]]). La fosforilación por CDK1–ciclina B y Plk1 de nucleoporinas y láminas A/B, asistida por desgarro dependiente de dineína, integra sus lípidos en el RE; la desfosforilación en telofase por PP1/PP2A y el sellado ESCRT-III restauran cada [[núcleo|nucleus]] hijo.',
        from: [
          { nodeId: 'nuclear-envelope', label: 'Envoltura nuclear', cargo: 'Doble membrana y poros nucleares' },
          { nodeId: 'nucleus', label: 'Núcleo en interfase', cargo: 'Bóveda cromatínica con lámina' }
        ],
        to: [
          { nodeId: 'real-div-spindle', label: 'Acceso del huso', cargo: 'Captura de cromosomas por MT' },
          { nodeId: 'real-cell-division', label: 'Reensamblaje telofásico', cargo: 'Dos núcleos hijos restaurados' }
        ]
      }
    },

    centrosome: {
      en: {
        subtitle: 'Duplicated Centrosome & Spindle Pole (1 um)',
        simple:
          'Each [[centrosome|centrosome]] sits at one pole of the dividing cell, housing two orthogonal [[centrioles|centriole]] wrapped in protein rings that sprout thousands of [[microtubules|microtubule]] to construct the [[mitotic spindle|real-div-spindle]].',
        story:
          'During S-phase, the single interphase [[centrosome|centrosome]] duplicates once so a cell entering mitosis starts with exactly two microtubule-organizing poles. As prophase unfolds, each centrosome expands its pericentriolar material rich in gamma-tubulin ring complexes (gamma-TuRC) around its paired nine-triplet [[centrioles|centriole]], firing bursts of dynamic [[microtubules|microtubule]] outward in every direction. Pushed apart by antiparallel kinesin-5 motors and focused by minus-end dynein, the two poles establish the exact bipolar geometry needed to pull replicated sister chromatids into two clean sets.',
        blueprint: {
          role: 'Primary animal microtubule-organizing center (MTOC) defining the two opposite poles of the [[mitotic spindle|real-div-spindle]]',
          arrivesFrom: 'Single G1 [[centrosome|centrosome]] duplicated strictly once in S-phase under Plk4 control and matured by mitotic Plk1/Aurora A kinases',
          inside: 'Orthogonal mother-daughter [[centriole|centriole]] pair (9x3 microtubule blades) embedded in gamma-TuRC-rich pericentriolar matrix',
          deliversTo: 'Minus-end anchoring and nucleation of astral, interpolar, and kinetochore [[microtubules|microtubule]] at opposite cell poles',
          loop: 'Strict once-per-cycle duplication prevents multipolar spindles and ensures faithful two-way chromosome partitioning'
        },
        scientific:
          'Animal microtubule-organizing center (~1 um mitotic pericentriolar halo) housing an orthogonal pair of ~250 x 450 nm nine-triplet [[centrioles|centriole]] surrounded by Plk1/Aurora A-expanded pericentriolar material (pericentrin, CDK5RAP2) densely studded with gamma-tubulin ring complexes (gamma-TuRC). Nucleates and caps the minus-ends of 25 nm alpha/beta-[[tubulin|tubulin]] [[microtubules|microtubule]] to assemble the bipolar [[spindle|real-div-spindle]], whereas higher [[plant cells|real-plant]] and female oocytes assemble functional acentrosomal spindles via chromatin-driven Ran-GTP/augmin nucleation.',
        from: [
          { nodeId: 'centriole', label: 'Centriole Pair', cargo: '9x3 orthogonal core scaffold' },
          { nodeId: 'tubulin', label: 'Tubulin Dimers', cargo: 'gamma-TuRC nucleation pool' }
        ],
        to: [
          { nodeId: 'centrosome', label: 'Centrosome Node', cargo: 'Bipolar MTOC architecture' },
          { nodeId: 'real-div-spindle', label: 'Mitotic Spindle', cargo: 'Pole-to-pole microtubule array' }
        ]
      },
      es: {
        subtitle: 'Centrosoma duplicado y polo del huso (1 µm)',
        simple:
          'Cada [[centrosoma|centrosome]] se sitúa en un polo de la célula en división, albergando dos [[centríolos|centriole]] perpendiculares rodeados de anillos proteicos que hacen brotar miles de [[microtúbulos|microtubule]] para levantar el [[huso mitótico|real-div-spindle]].',
        story:
          'Durante la fase S, el único [[centrosoma|centrosome]] en interfase se duplica exactamente una vez para que la célula entre en mitosis con dos polos organizadores. Al comenzar la profase, cada centrosoma expande su matriz pericentriolar cargada de anillos γ-TuRC en torno a sus [[centríolos|centriole]] de nueve tripletes, disparando miles de [[microtúbulos|microtubule]] dinámicos en todas direcciones. Empujados a polos opuestos por la cinesina-5 y enfocados por la dineína, ambos centrosomas fijan la geometría bipolar precisa para repartir las cromátidas en dos juegos limpios.',
        blueprint: {
          role: 'Centro organizador de microtúbulos (MTOC) animal que establece los dos polos opuestos del [[huso mitótico|real-div-spindle]]',
          arrivesFrom: 'Un único [[centrosoma|centrosome]] G1 duplicado exactamente una vez en fase S vía Plk4 y madurado por cinasas Plk1/Aurora A',
          inside: 'Par ortogonal de [[centríolos|centriole]] madre-hijo (9×3 tripletes) inmerso en matriz pericentriolar rica en complejos γ-TuRC',
          deliversTo: 'Nucleación y anclaje de extremos negativos de [[microtúbulos|microtubule]] astrales, interpolares y cinetocóricos en polos opuestos',
          loop: 'La duplicación única por ciclo evita husos multipolares y garantiza un reparto cromosómico exactamente bipolar'
        },
        scientific:
          'Centro organizador de microtúbulos animal (halo pericentriolar mitótico ~1 µm) que aloja un par ortogonal de [[centríolos|centriole]] (~250 × 450 nm, nueve tripletes) rodeado de matriz pericentriolar (pericentrina, CDK5RAP2) enriquecida en complejos en anillo γ-TuRC. Nuclea y estabiliza extremos negativos de [[microtúbulos|microtubule]] de α/β-[[tubulina|tubulin]] (25 nm) para edificar el [[huso|real-div-spindle]] bipolar, a diferencia de las [[células vegetales|real-plant]] que forman husos acentrosomales vía Ran–GTP y augmina.',
        from: [
          { nodeId: 'centriole', label: 'Par de centríolos', cargo: 'Núcleo ortogonal 9×3' },
          { nodeId: 'tubulin', label: 'Dímeros de tubulina', cargo: 'Reserva de nucleación γ-TuRC' }
        ],
        to: [
          { nodeId: 'centrosome', label: 'Nodo Centrosoma', cargo: 'Arquitectura MTOC bipolar' },
          { nodeId: 'real-div-spindle', label: 'Huso mitótico', cargo: 'Red de microtúbulos entre polos' }
        ]
      }
    },

    spindle_mt: {
      en: {
        subtitle: 'Dynamic Spindle Microtubules (25 nm)',
        simple:
          'These 25-nanometer hollow [[microtubule|microtubule]] cables grow and shrink rapidly from [[tubulin|tubulin]] bricks. They search out chromosomes, push the poles apart, and reel sister chromatids backward as their ends peel apart in anaphase.',
        story:
          'Spindle [[microtubules|microtubule]] are never static rods; powered by GTP hydrolysis inside every beta-[[tubulin|tubulin]] subunit, their plus-ends constantly switch between rapid growth and sudden curling shrinkage. Astral microtubules radiate outward to anchor the poles against the cell cortex, interpolar bundles overlap at the midzone where [[kinesin-5|real-div-spindle]] pushes them apart, and kinetochore bundles latch onto chromosome [[kinetochores|real-div-kinetochore]]. When [[separase|real-div-separase]] breaks sister tethers in anaphase, controlled peeling of kinetochore microtubule tips converts stored GTP conformational strain directly into poleward pulling force.',
        blueprint: {
          role: '25 nm dynamic GTP-powered structural tracks driving chromosome capture, pole separation, and anaphase retraction',
          arrivesFrom: 'Soluble alpha/beta-[[tubulin|tubulin]]-GTP heterodimers nucleated at [[centrosome|centrosome]] gamma-TuRC rings and augmin branch sites',
          inside: '13-protofilament hollow cylinders exhibiting dynamic instability (GTP cap growth vs GDP protofilament curling peel-back)',
          deliversTo: 'Mechanical attachment to [[kinetochores|real-div-kinetochore]], antiparallel overlap for [[spindle|real-div-spindle]] motors, and poleward anaphase force',
          loop: 'GTP hydrolysis inside the polymer lattice stores elastic strain that drives plus-end depolymerization pulling without extra ATP'
        },
        scientific:
          '25 nm outer-diameter hollow cytoskeletal polymers of 13 parallel protofilaments built from alpha/beta-[[tubulin|tubulin]] heterodimers (4 nm monomer repeat) organized into three mitotic [[spindle|real-div-spindle]] subpopulations: astral, antiparallel interpolar, and kinetochore fibers (15-25 MTs per mammalian [[kinetochore|real-div-kinetochore]]). Dynamic instability accelerates ~10-fold in mitosis to enable search-and-capture; during Anaphase A, coordinated plus-end depolymerization (peeling curved GDP-tubulin protofilaments) and minus-end poleward flux move chromatids at ~1-2 um/min.',
        from: [
          { nodeId: 'tubulin', label: 'Alpha/Beta-Tubulin', cargo: 'GTP-loaded subunit dimers' },
          { nodeId: 'centrosome', label: 'Spindle Poles', cargo: 'Minus-end gamma-TuRC nucleation' }
        ],
        to: [
          { nodeId: 'real-div-kinetochore', label: 'Kinetochore Coupling', cargo: '15-25 MT force bundle' },
          { nodeId: 'microtubule', label: 'Microtubule Polymer', cargo: '25 nm dynamic instability' }
        ]
      },
      es: {
        subtitle: 'Microtúbulos dinámicos del huso (25 nm)',
        simple:
          'Estos cables huecos de [[microtúbulos|microtubule]] de 25 nanómetros crecen y se encogen a gran velocidad con bloques de [[tubulina|tubulin]]. Buscan cromosomas, empujan los polos hacia fuera y arrastran las cromátidas hermanas al desarmarse por sus puntas en anafase.',
        story:
          'Los [[microtúbulos|microtubule]] del huso jamás son varillas rígidas: gracias a la hidrólisis de GTP en cada subunidad de β-[[tubulina|tubulin]], sus extremos positivos alternan sin pausa entre alargamiento veloz y retracción súbita. Las fibras astrales fijan los polos a la corteza, los haces interpolares se superponen en el centro para que el [[huso|real-div-spindle]] se extienda, y las fibras cinetocóricas se acoplan a los [[cinetocoros|real-div-kinetochore]]. Cuando la [[separasa|real-div-separase]] suelta las hermanas en anafase, el pelado controlado de estos extremos libera energía mecánica almacenada para arrastrar cada cromosoma al polo.',
        blueprint: {
          role: 'Vías dinámicas de 25 nm impulsadas por GTP que capturan cromosomas, separan polos y ejecutan la retracción anafásica',
          arrivesFrom: 'Heterodímeros solubles de α/β-[[tubulina|tubulin]]–GTP nucleados en anillos γ-TuRC del [[centrosoma|centrosome]] y ramificaciones augmina',
          inside: 'Cilindros huecos de 13 protofilamentos con inestabilidad dinámica (crecimiento con capuchón GTP frente a desenrollado GDP)',
          deliversTo: 'Anclaje mecánico a [[cinetocoros|real-div-kinetochore]], solapamiento antiparalelo para motores del [[huso|real-div-spindle]] y tracción anafásica',
          loop: 'La hidrólisis de GTP almacena tensión elástica en la red que impulsa el tiro hacia el polo durante la despolimerización'
        },
        scientific:
          'Polímeros citoesqueléticos huecos de 25 nm de diámetro externo compuestos por 13 protofilamentos de heterodímeros α/β-[[tubulina|tubulin]] organizados en tres subpoblaciones del [[huso|real-div-spindle]]: astrales, interpolares antiparalelos y fibras cinetocóricas (15–25 MT por [[cinetocoro|real-div-kinetochore]]). Su inestabilidad dinámica se acelera ~10× en mitosis para captura cromosómica; en Anafase A, la despolimerización acoplada en extremos positivos y el flujo polar trasladan cromátidas a ~1–2 µm/min.',
        from: [
          { nodeId: 'tubulin', label: 'Tubulina α/β', cargo: 'Dímeros cargados con GTP' },
          { nodeId: 'centrosome', label: 'Polos del huso', cargo: 'Nucleación γ-TuRC en extremo (−)' }
        ],
        to: [
          { nodeId: 'real-div-kinetochore', label: 'Acople cinetocórico', cargo: 'Haz tractor de 15–25 MT' },
          { nodeId: 'microtubule', label: 'Polímero de microtúbulo', cargo: 'Inestabilidad dinámica de 25 nm' }
        ]
      }
    },

    kinesin5: {
      en: {
        subtitle: 'Kinesin-5 (Eg5) Bipolar Sliding Motor (PDB 1II6)',
        simple:
          'Kinesin-5 is a double-ended [[motor protein|motor-protein]] that bridges two overlapping [[spindle microtubules|real-div-spindle]] pointing in opposite directions. Burning ATP, both ends walk outward at once, sliding the two spindle poles steadily apart.',
        story:
          'Most walking motors carry cargo along a single track, but kinesin-5 (Eg5) assembles back-to-back into a dumbbell-shaped homotetramer with two ATP-burning motor heads at each end. Wedged inside the overlap zone where interpolar [[microtubules|microtubule]] from left and right poles meet head-on, both pairs of heads march simultaneously toward their respective plus-ends. Because the tracks point in opposite directions, that coordinated walking jacks the two [[centrosomes|centrosome]] smoothly apart into a stable bipolar [[spindle|real-div-spindle]] and extends the cell pole-to-pole again during Anaphase B.',
        blueprint: {
          role: 'Bipolar homotetrameric plus-end sliding motor establishing spindle bipolarity and driving Anaphase B pole elongation',
          arrivesFrom: 'Four Eg5 kinesin heavy chains assembled antiparallel in the cytosol and fueled by [[ATP|atp-synthase]] + [[Mg2+|atom-mg]]',
          inside: 'Two pairs of catalytic motor heads (PDB 1II6) separated by a ~60 nm central coiled-coil stalk crosslinking antiparallel [[microtubules|microtubule]]',
          deliversTo: 'Outward sliding force separating duplicated [[centrosomes|centrosome]] and lengthening the bipolar [[mitotic spindle|real-div-spindle]]',
          loop: 'Blocking kinesin-5 collapses the bipolar spindle into a monopolar star, arresting cells at the spindle checkpoint'
        },
        scientific:
          'Bipolar homotetrameric mitotic kinesin-5 (human Eg5 / KIF11; catalytic motor domain crystal structure PDB 1II6; ~60 nm antiparallel four-helix coiled-coil central rod positioning pairs of processive plus-end-directed ATPase motor heads at both extremities). Crosslinks antiparallel interpolar [[microtubules|microtubule]] within the [[spindle|real-div-spindle]] midzone and generates outward sliding forces (~1.5-5 pN per tetramer) via [[Mg2+|atom-mg]]-ATP hydrolysis, opposing inward minus-end motors (HSET/kinesin-14) to establish bipolarity in prophase and drive Anaphase B spindle elongation.',
        from: [
          { nodeId: 'motor-protein', label: 'ATPase Motor Family', cargo: 'Plus-end microtubule walking' },
          { nodeId: 'atp-synthase', label: 'Cellular ATP Supply', cargo: 'Hydrolysis power for stepping' }
        ],
        to: [
          { nodeId: 'real-div-spindle', label: 'Bipolar Spindle', cargo: 'Outward pole-pushing force' },
          { nodeId: 'centrosome', label: 'Pole Separation', cargo: 'Opposite MTOC positioning' }
        ]
      },
      es: {
        subtitle: 'Motor bipolar deslizante Cinesina-5 / Eg5 (PDB 1II6)',
        simple:
          'La cinesina-5 es una [[proteína motora|motor-protein]] con cabezas en ambos extremos que une dos [[microtúbulos del huso|real-div-spindle]] superpuestos en sentidos opuestos. Al consumir ATP, ambos extremos caminan hacia fuera y separan firmemente los polos del huso.',
        story:
          'Mientras la mayoría de los motores transportan carga por una sola vía, la cinesina-5 (Eg5) se ensambla espalda con espalda en un homotetrámero en pesa con dos cabezas motoras ATPasa en cada punta. Instalada en la zona central donde chocan los [[microtúbulos|microtubule]] interpolares de ambos polos, cada pareja de cabezas camina hacia su extremo positivo respectivo. Al apuntar las pistas en direcciones opuestas, este avance sincronizado empuja ambos [[centrosomas|centrosome]] hacia lados contrarios armando un [[huso|real-div-spindle]] bipolar estable que vuelve a alargarse en la Anafase B.',
        blueprint: {
          role: 'Motor homotetramérico bipolar hacia extremos positivos que establece la bipolaridad del huso y extiende los polos en Anafase B',
          arrivesFrom: 'Cuatro cadenas pesadas de cinesina Eg5 ensambladas en antiparalelo y alimentadas por [[ATP|atp-synthase]] + [[Mg²⁺|atom-mg]]',
          inside: 'Dos pares de cabezas catalíticas (PDB 1II6) separadas por un tallo coiled-coil de ~60 nm entre [[microtúbulos|microtubule]] antiparalelos',
          deliversTo: 'Fuerza deslizante hacia fuera que separa los [[centrosomas|centrosome]] duplicados y alarga el [[huso mitótico|real-div-spindle]]',
          loop: 'Inhibir la cinesina-5 colapsa el huso bipolar en una estrella monopolar y detiene la mitosis en el punto de control'
        },
        scientific:
          'Cinesina-5 mitótica homotetramérica bipolar (Eg5 / KIF11 humana; dominio motor cristalográfico PDB 1II6; tallo antiparalelo de cuatro hélices de ~60 nm con pares de cabezas ATPasa dirigidas al extremo positivo en cada punta). Reticula [[microtúbulos|microtubule]] interpolares antiparalelos en la zona media del [[huso|real-div-spindle]] produciendo fuerzas de empuje de ~1,5–5 pN por tetrámero mediante hidrólisis de [[Mg²⁺|atom-mg]]–ATP, equilibrando a la cinesina-14 (HSET) para formar el huso bipolar e impulsar la Anafase B.',
        from: [
          { nodeId: 'motor-protein', label: 'Familia motora ATPasa', cargo: 'Marcha hacia extremo (+)' },
          { nodeId: 'atp-synthase', label: 'Suministro de ATP', cargo: 'Energía para pasos motores' }
        ],
        to: [
          { nodeId: 'real-div-spindle', label: 'Huso bipolar', cargo: 'Fuerza de separación polar' },
          { nodeId: 'centrosome', label: 'Separación de polos', cargo: 'Posicionamiento de MTOC' }
        ]
      }
    },

    sister_chromatids: {
      en: {
        subtitle: 'Condensed Sister Chromatids (2-5 um)',
        simple:
          'Each X-shaped mitotic [[chromosome|chromosome]] consists of two identical sister chromatids copied from one parent [[DNA|dna]] molecule during S-phase, packed tightly by [[condensin|real-div-condensin]] and belted together by [[cohesin|real-div-cohesin]] until anaphase.',
        story:
          'Before division begins, every linear nuclear [[chromosome|chromosome]] duplicates cleanly into two matching sister duplexes. During prophase, [[condensin|real-div-condensin]] rings extrude thousands of [[chromatin|chromatin-fiber]] loops around a central axis while topoisomerase II untangles knotted strands, transforming invisible diffuse threads into compact two-to-five-micrometer rods. Held waist-to-waist at the centromere by [[cohesin|real-div-cohesin]], the paired sisters ride the [[mitotic spindle|real-div-spindle]] to the metaphase plate until [[separase|real-div-separase]] cuts their tether and converts each chromatid into an independent daughter chromosome.',
        blueprint: {
          role: 'Mechanically compacted identical DNA twin rods (2-5 um) engineered for damage-free segregation into daughter nuclei',
          arrivesFrom: 'Semi-conservative S-phase replication of each linear nuclear [[chromosome|chromosome]] coiled on [[nucleosomes|nucleosome]]',
          inside: '10,000-fold looped [[chromatin-fiber|chromatin-fiber]] sculpted by [[condensin|real-div-condensin]], paired by [[cohesin|real-div-cohesin]], and capped with centromeric [[kinetochores|real-div-kinetochore]]',
          deliversTo: 'Equal inheritance of one complete sister copy to each daughter [[nucleus|nucleus]] upon anaphase cleavage',
          loop: 'Compaction prevents shearing during poleward transport, while telophase decondensation reopens DNA for transcription'
        },
        scientific:
          'Paired mitotic sister chromatids (~2-5 um rod length, ~0.6-1.0 um chromatid arm diameter; modeled as 2n = 4 diploid pairs in stage view; human 2n = 46 comprising ~6.2 Gbp diploid [[dsDNA|dna]]). Generated by S-phase replication and compacted ~10,000-fold via hierarchical [[condensin|real-div-condensin]] I/II loop extrusion on 11 nm [[nucleosome|nucleosome]] arrays while topoisomerase II resolves catenations. Centromeric [[cohesin|real-div-cohesin]] resists bipolar [[spindle|real-div-spindle]] tension across sister [[kinetochores|real-div-kinetochore]] until [[separase|real-div-separase]] triggers separation into independent daughter chromosomes.',
        from: [
          { nodeId: 'real-div-condensin', label: 'Condensin Compaction', cargo: '10,000x loop extrusion' },
          { nodeId: 'real-div-cohesin', label: 'Cohesin Tethering', cargo: 'Centromeric sister locking' }
        ],
        to: [
          { nodeId: 'chromosome', label: 'Chromosome Architecture', cargo: 'Compact transport rods' },
          { nodeId: 'real-div-kinetochore', label: 'Kinetochore Capture', cargo: 'Bipolar spindle attachment' }
        ]
      },
      es: {
        subtitle: 'Cromátidas hermanas condensadas (2–5 µm)',
        simple:
          'Cada [[cromosoma|chromosome]] mitótico en forma de X está formado por dos cromátidas hermanas idénticas copiadas de una misma molécula de [[ADN|dna]] en fase S, empaquetadas por [[condensina|real-div-condensin]] y sujetas por [[cohesina|real-div-cohesin]] hasta la anafase.',
        story:
          'Antes de iniciar la división, cada [[cromosoma|chromosome]] nuclear lineal se duplica en dos dúplex hermanos exactos. En profase, los anillos de [[condensina|real-div-condensin]] extruyen miles de bucles de [[cromatina|chromatin-fiber]] alrededor de un eje central mientras la topoisomerasa II desenreda nudos, transformando hebras difusas en bastones compactos de dos a cinco micrómetros. Sujetas en el centrómero por [[cohesina|real-div-cohesin]], ambas hermanas viajan sobre el [[huso mitótico|real-div-spindle]] hasta la placa metafásica hasta que la [[separasa|real-div-separase]] libera cada cromátida como cromosoma hijo independiente.',
        blueprint: {
          role: 'Bastones gemelos de ADN idéntico compactados mecánicamente (2–5 µm) para segregarse sin roturas hacia núcleos hijos',
          arrivesFrom: 'Replicación semiconservativa en fase S de cada [[cromosoma|chromosome]] nuclear lineal enrollado en [[nucleosomas|nucleosome]]',
          inside: '[[Fibra de cromatina|chromatin-fiber]] plegada 10.000× por [[condensina|real-div-condensin]], unida por [[cohesina|real-div-cohesin]] y dotada de [[cinetocoros|real-div-kinetochore]]',
          deliversTo: 'Herencia equitativa de una copia hermana completa a cada [[núcleo|nucleus]] hijo tras el corte anafásico',
          loop: 'La compactación evita desgarros al viajar hacia el polo y la descondensación telofásica reactiva la transcripción'
        },
        scientific:
          'Cromátidas hermanas mitóticas emparejadas (~2–5 µm de longitud, ~0,6–1,0 µm de diámetro por brazo; representadas como 2n = 4 pares diploides; humano 2n = 46 con ~6,2 Gpb de [[ADNbc|dna]]). Originadas en fase S y compactadas ~10.000× mediante extrusión jerárquica de bucles por [[condensina|real-div-condensin]] I/II sobre arreglos de [[nucleosomas|nucleosome]] de 11 nm junto a topoisomerasa II. La [[cohesina|real-div-cohesin]] centromérica resiste la tensión del [[huso|real-div-spindle]] sobre [[cinetocoros|real-div-kinetochore]] hermanos hasta la escisión por [[separasa|real-div-separase]].',
        from: [
          { nodeId: 'real-div-condensin', label: 'Compactación condensina', cargo: 'Extrusión de bucles 10.000×' },
          { nodeId: 'real-div-cohesin', label: 'Amarre de cohesina', cargo: 'Sujeción centromérica' }
        ],
        to: [
          { nodeId: 'chromosome', label: 'Arquitectura cromosómica', cargo: 'Bastones compactos de transporte' },
          { nodeId: 'real-div-kinetochore', label: 'Captura cinetocórica', cargo: 'Anclaje bipolar al huso' }
        ]
      }
    },

    condensin: {
      en: {
        subtitle: 'Condensin SMC Loop-Extrusion Ring (PDB 6YVU / 7QEN)',
        simple:
          'This ATP-fueled [[condensin|real-div-condensin]] ring clamps onto loose [[chromatin|chromatin-fiber]] and reels it progressively into stacked loops, compacting fragile [[DNA|dna]] threads 10,000-fold into sturdy transport rods.',
        story:
          'When mitosis begins, CDK1 activates pentameric [[condensin|real-div-condensin]] complexes built around long SMC2-SMC4 coiled-coil arms bridged by a kleisin subunit and HEAT-repeat clamps. Anchoring one DNA segment while burning ATP at its twin Walker heads, each ring reels flanking [[nucleosome|nucleosome]] fibers inward into steadily growing loops. Condensin II builds the deep axial scaffold inside the [[nucleus|nucleus]] during prophase, and condensin I joins right after envelope breakdown to partition outer loops into dense, cylindrical sister chromatids that topoisomerase II can disentangle cleanly.',
        blueprint: {
          role: 'ATP-driven SMC loop-extruding motor compacting and individualizing mitotic [[chromosomes|chromosome]] without knotting',
          arrivesFrom: 'Nuclear Condensin II and cytosolic Condensin I complexes phosphorylated by CDK1 and fueled by [[ATP|atp-synthase]] + [[Mg2+|atom-mg]]',
          inside: '45 nm SMC2-SMC4 coiled-coil ring with kleisin CAP-H/H2 and HEAT subunits (PDB 6YVU / 7QEN) reeling 11 nm [[nucleosome|nucleosome]] strands',
          deliversTo: 'Compact, stiffened helical chromatin rods feeding clean sister chromatids to the [[mitotic spindle|real-div-spindle]]',
          loop: 'Active loop extrusion generates entropic repulsion between sister arms, helping topoisomerase II decatenate tangled DNA'
        },
        scientific:
          'Eukaryotic [[condensin|real-div-condensin]] SMC2-SMC4-kleisin-HEAT pentamer (cryo-EM holocomplex PDB 6YVU and ATP-clamped DNA-binding state PDB 7QEN; ~45-50 nm span). Catalyzes [[Mg2+|atom-mg]]-ATP-dependent unidirectional or bidirectional DNA loop extrusion (~0.5-1.5 kbp/s) across [[chromatin-fiber|chromatin-fiber]] substrates, establishing nested helical loop arrays (Condensin II ~400 kbp outer loops subdivided into ~80 kbp Condensin I inner loops) essential for mitotic [[chromosome|chromosome]] stiffness and axial resolution.',
        from: [
          { nodeId: 'chromatin-fiber', label: 'Chromatin Fiber', cargo: '11 nm nucleosome substrate' },
          { nodeId: 'atp-synthase', label: 'ATP Energy Pool', cargo: 'Loop-extrusion hydrolysis' }
        ],
        to: [
          { nodeId: 'real-div-condensin', label: 'Condensin Ring Node', cargo: 'SMC2-SMC4 compaction engine' },
          { nodeId: 'chromosome', label: 'Mitotic Chromosome', cargo: 'Dense helical chromatid rods' }
        ]
      },
      es: {
        subtitle: 'Anillo SMC extrusor de bucles Condensina (PDB 6YVU / 7QEN)',
        simple:
          'Este anillo de [[condensina|real-div-condensin]] impulsado por ATP sujeta la [[cromatina|chromatin-fiber]] suelta y la recoge en bucles apilados, compactando el [[ADN|dna]] 10.000 veces en bastones resistentes para el transporte.',
        story:
          'Al iniciarse la mitosis, CDK1 activa complejos pentaméricos de [[condensina|real-div-condensin]] construidos con largos brazos coiled-coil SMC2–SMC4 cerrados por una kleisina y pinzas HEAT. Fijando un tramo de ADN mientras consume ATP en sus cabezas motoras, cada anillo atrae la fibra de [[nucleosomas|nucleosome]] vecina formando bucles crecientes. La condensina II arma el eje profundo en profase dentro del [[núcleo|nucleus]], y la condensina I entra tras romperse la envoltura para subdividir bucles externos en cromátidas cilíndricas limpias que la topoisomerasa II desenreda sin trabas.',
        blueprint: {
          role: 'Motor SMC extrusor de bucles impulsado por ATP que compacta e individualiza [[cromosomas|chromosome]] mitóticos sin anudarlos',
          arrivesFrom: 'Complejos nucleares Condensina II y citosólicos Condensina I fosforilados por CDK1 con energía de [[ATP|atp-synthase]] + [[Mg²⁺|atom-mg]]',
          inside: 'Anillo SMC2–SMC4 de 45 nm con kleisina CAP-H/H2 y subunidades HEAT (PDB 6YVU / 7QEN) recogiendo hebras de [[nucleosomas|nucleosome]] de 11 nm',
          deliversTo: 'Bastones helicoidales densos y rígidos que entregan cromátidas hermanas limpias al [[huso mitótico|real-div-spindle]]',
          loop: 'La extrusión activa genera repulsión entrópica entre brazos hermanos, ayudando a la topoisomerasa II a descatenar el ADN'
        },
        scientific:
          'Pentámero eucariota de [[condensina|real-div-condensin]] SMC2–SMC4–kleisina–HEAT (holocomplejo crio-EM PDB 6YVU y estado unido a ADN con ATP PDB 7QEN; ~45–50 nm). Cataliza la extrusión de bucles dependiente de [[Mg²⁺|atom-mg]]–ATP (~0,5–1,5 kpb/s) sobre [[fibra de cromatina|chromatin-fiber]], formando arreglos helicoidales anidados (bucles de ~400 kpb de Condensina II subdivididos en ~80 kpb por Condensina I) esenciales para la rigidez del [[cromosoma|chromosome]] mitótico.',
        from: [
          { nodeId: 'chromatin-fiber', label: 'Fibra de cromatina', cargo: 'Sustrato de nucleosomas 11 nm' },
          { nodeId: 'atp-synthase', label: 'Reserva de ATP', cargo: 'Hidrólisis para extrusión' }
        ],
        to: [
          { nodeId: 'real-div-condensin', label: 'Anillo Condensina', cargo: 'Motor compactador SMC2–SMC4' },
          { nodeId: 'chromosome', label: 'Cromosoma mitótico', cargo: 'Bastones helicoidales densos' }
        ]
      }
    },

    cohesin: {
      en: {
        subtitle: 'Cohesin Sister-Tethering Ring (PDB 6QPW / 5F0N)',
        simple:
          'This 40-nanometer [[cohesin|real-div-cohesin]] ring encircles both replicated sister [[DNA|dna]] strands, resisting the pull of the [[spindle|real-div-spindle]] until [[separase|real-div-separase]] cuts its kleisin latch in anaphase.',
        story:
          'Loaded onto [[chromatin|chromatin-fiber]] during DNA replication, [[cohesin|real-div-cohesin]] encircles both newly synthesized sister chromatids inside a ring formed by SMC1, SMC3, and the cleavable kleisin subunit RAD21 (replaced by REC8 during [[meiosis|real-div-meiosis]]). By resisting opposite poleward forces transmitted through centromeric [[kinetochores|real-div-kinetochore]], cohesin creates the exact mechanical tension required to satisfy the Spindle Assembly Checkpoint. In mitosis, every centromeric ring snaps together at Anaphase; in Meiosis I, shugoshin protects centromeric REC8 so only arm rings cleave first.',
        blueprint: {
          role: 'Topological 40 nm SMC ring coupling sister chromatids to generate metaphase tension and prevent premature splitting',
          arrivesFrom: 'SMC1-SMC3-kleisin rings loaded onto replicating [[DNA|dna]] by NIPBL/MAU2 and locked by S-phase ESCO1/2 acetylation',
          inside: 'Ring lumen (~40 nm; PDB 6QPW / 5F0N) closed by protease-sensitive kleisin RAD21 (mitosis) or REC8 ([[meiosis|real-div-meiosis]]) plus STAG/SA',
          deliversTo: 'Mechanical counter-tension at [[kinetochores|real-div-kinetochore]] until cleaved synchronously by [[separase|real-div-separase]]',
          loop: 'Centromeric shugoshin-PP2A shields REC8 during Meiosis I so homologs split first and sisters split only in Meiosis II'
        },
        scientific:
          'Topological sister-chromatid tethering [[cohesin|real-div-cohesin]] complex (SMC1A-SMC3-RAD21-STAG1/2; structural models PDB 6QPW and 5F0N; ~40 nm ring diameter). Acetylated on SMC3 during S-phase to resist WAPL unloading, mitotic arm cohesin dissociates via prophase Plk1/Aurora B phosphorylation while centromeric rings remain guarded by SGO1-PP2A until [[APC/C-activated separase|real-div-separase]] cleaves RAD21. In [[meiosis|real-div-meiosis]], arm REC8 cleavage resolves chiasmata in Anaphase I while protected centromeric REC8 persists until Anaphase II.',
        from: [
          { nodeId: 'dna', label: 'Replicated Sister DNA', cargo: 'Paired S-phase duplexes' },
          { nodeId: 'protein', label: 'SMC & Kleisin Subunits', cargo: 'SMC1, SMC3, RAD21 / REC8' }
        ],
        to: [
          { nodeId: 'real-div-cohesin', label: 'Cohesin Ring Node', cargo: 'Topological sister lock' },
          { nodeId: 'real-div-separase', label: 'Separase Target', cargo: 'Kleisin cleavage at anaphase' }
        ]
      },
      es: {
        subtitle: 'Anillo de sujeción hermana Cohesina (PDB 6QPW / 5F0N)',
        simple:
          'Este anillo de [[cohesina|real-div-cohesin]] de 40 nanómetros rodea ambas hebras hermanas de [[ADN|dna]] replicadas, resistiendo la tracción del [[huso|real-div-spindle]] hasta que la [[separasa|real-div-separase]] corta su cierre de kleisina en anafase.',
        story:
          'Cargada sobre la [[cromatina|chromatin-fiber]] durante la replicación del ADN, la [[cohesina|real-div-cohesin]] envuelve ambas cromátidas hermanas dentro de un anillo formado por SMC1, SMC3 y la kleisina escindible RAD21 (sustituida por REC8 en [[meiosis|real-div-meiosis]]). Al resistir la tracción opuesta desde los [[cinetocoros|real-div-kinetochore]], genera la tensión exacta que exige el punto de control del huso. En mitosis todos los anillos centroméricos se cortan juntos en anafase; en Meiosis I, la shugoshina protege el centrómero para escindir primero solo los brazos.',
        blueprint: {
          role: 'Anillo SMC topológico de 40 nm que enlaza cromátidas hermanas generando tensión metafásica y evitando separación prematura',
          arrivesFrom: 'Anillos SMC1–SMC3–kleisina cargados en el [[ADN|dna]] replicado por NIPBL/MAU2 y fijados por acetilación ESCO1/2',
          inside: 'Anillo de ~40 nm (PDB 6QPW / 5F0N) cerrado por la kleisina sensible a proteasa RAD21 (mitosis) o REC8 ([[meiosis|real-div-meiosis]]) con STAG/SA',
          deliversTo: 'Contratensión mecánica en [[cinetocoros|real-div-kinetochore]] hasta el corte sincrónico por [[separasa|real-div-separase]]',
          loop: 'La shugoshina–PP2A centromérica protege REC8 en Meiosis I para separar primero homólogos y hermanas solo en Meiosis II'
        },
        scientific:
          'Complejo de amarre topológico [[cohesina|real-div-cohesin]] (SMC1A–SMC3–RAD21–STAG1/2; estructuras PDB 6QPW y 5F0N; diámetro ~40 nm). Acetilada en SMC3 en fase S frente a WAPL, la cohesina de los brazos se libera en profase por fosforilación Plk1/Aurora B mientras SGO1–PP2A protege el centrómero hasta que la [[separasa activada por APC/C|real-div-separase]] corta RAD21. En [[meiosis|real-div-meiosis]], cortar REC8 en brazos libera quiasmas en Anafase I manteniendo protegido el centrómero hasta Anafase II.',
        from: [
          { nodeId: 'dna', label: 'ADN hermano replicado', cargo: 'Dúplex pareados de fase S' },
          { nodeId: 'protein', label: 'Subunidades SMC y kleisina', cargo: 'SMC1, SMC3, RAD21 / REC8' }
        ],
        to: [
          { nodeId: 'real-div-cohesin', label: 'Anillo Cohesina', cargo: 'Cierre topológico hermano' },
          { nodeId: 'real-div-separase', label: 'Diana de separasa', cargo: 'Corte de kleisina en anafase' }
        ]
      }
    },

    kinetochore: {
      en: {
        subtitle: 'Trilaminar Kinetochore & Ndc80 Coupler (200 nm, PDB 3IZ0)',
        simple:
          'Built right on each [[chromosome|chromosome]] centromere, this 200-nanometer [[kinetochore|real-div-kinetochore]] grips 15 to 25 dynamic [[spindle microtubules|real-div-spindle]] through Ndc80 arms and blocks anaphase until opposite pulls are balanced.',
        story:
          'Positioned back-to-back on the centromeric CENP-A [[nucleosomes|nucleosome]] of paired sister chromatids, each [[kinetochore|real-div-kinetochore]] bridges chromatin to the [[mitotic spindle|real-div-spindle]]. Outer Ndc80 protein rods slide along dynamic microtubule plus-ends without letting go even as tubulin protofilaments peel back, converting polymer disassembly into steady poleward force. Whenever an attachment is missing or slack, inner-centromere Aurora B loosens the wrong link while outer Mad2/BubR1 sensors emit a stop signal blocking [[APC/C-separase|real-div-separase]] until every chromosome feels clean bipolar tension.',
        blueprint: {
          role: '200 nm centromeric microtubule-binding coupler and Spindle Assembly Checkpoint (SAC) tension transducer',
          arrivesFrom: 'Specialized CENP-A centromeric [[nucleosomes|nucleosome]], inner CCAN platform, and outer KMN network (Ndc80 PDB 3IZ0)',
          inside: 'Fibrillar Ndc80 dimers gripping 15-25 dynamic [[microtubule|microtubule]] plus-ends alongside Aurora B kinase and Mad2/BubR1 SAC signaling',
          deliversTo: 'Tension-verified bipolar chromosome alignment, SAC silencing toward [[separase|real-div-separase]], and anaphase force transfer',
          loop: 'Balanced opposite pull stretches the kinetochore away from Aurora B, locking correct attachments and releasing the anaphase brake'
        },
        scientific:
          'Vertebrate trilaminar [[kinetochore|real-div-kinetochore]] assembly (~200-250 nm plaque; inner CCAN on CENP-A [[nucleosomes|nucleosome]] linked to outer KMN complex featuring fibrous Ndc80 microtubule couplers, cryo-EM PDB 3IZ0). Engages 15-25 dynamic [[spindle microtubule|real-div-spindle]] plus-ends per sister chromatid (co-oriented in Meiosis I; bi-oriented in Mitosis and Meiosis II). Unattached or low-tension states trigger Aurora B error correction and catalytic MCC generation to inhibit [[APC/C-Cdc20|real-div-separase]] until amphitelic attachment silences the SAC.',
        from: [
          { nodeId: 'nucleosome', label: 'CENP-A Nucleosomes', cargo: 'Epigenetic centromere base' },
          { nodeId: 'microtubule', label: 'Kinetochore Microtubules', cargo: '15-25 dynamic plus-ends' }
        ],
        to: [
          { nodeId: 'real-div-kinetochore', label: 'Kinetochore Node', cargo: 'Ndc80 coupler & SAC sensor' },
          { nodeId: 'real-div-separase', label: 'SAC Release Signal', cargo: 'APC/C-separase activation' }
        ]
      },
      es: {
        subtitle: 'Cinetocoro trilaminar y acoplador Ndc80 (200 nm, PDB 3IZ0)',
        simple:
          'Construido sobre el centrómero de cada [[cromosoma|chromosome]], este [[cinetocoro|real-div-kinetochore]] de 200 nanómetros sujeta entre 15 y 25 [[microtúbulos del huso|real-div-spindle]] mediante brazos Ndc80 y frena la anafase hasta equilibrar ambos polos.',
        story:
          'Dispuestos espalda con espalda sobre los [[nucleosomas|nucleosome]] centroméricos con CENP-A de las cromátidas hermanas, cada [[cinetocoro|real-div-kinetochore]] conecta la cromatina con el [[huso mitótico|real-div-spindle]]. Las varillas externas Ndc80 se deslizan sobre extremos de microtúbulos sin soltarse mientras los protofilamentos de tubulina se desarman, convirtiendo ese desensamblaje en tracción polar. Si alguna unión falta o carece de tensión, Aurora B suelta el acople erróneo y los sensores Mad2/BubR1 bloquean a [[APC/C–separasa|real-div-separase]] hasta lograr equilibrio bipolar completo.',
        blueprint: {
          role: 'Acoplador centromérico de microtúbulos de 200 nm y transductor de tensión del punto de control del huso (SAC)',
          arrivesFrom: '[[Nucleosomas|nucleosome]] centroméricos especializados CENP-A, plataforma interna CCAN y red externa KMN (Ndc80 PDB 3IZ0)',
          inside: 'Dímeros fibrilares Ndc80 sujetos a 15–25 extremos positivos de [[microtúbulos|microtubule]] junto a Aurora B y sensores SAC Mad2/BubR1',
          deliversTo: 'Alineación bipolar verificada por tensión, apagado del SAC hacia [[separasa|real-div-separase]] y transmisión de fuerza en anafase',
          loop: 'La tracción opuesta estira el cinetocoro alejándolo de Aurora B, estabiliza las uniones correctas y suelta el freno anafásico'
        },
        scientific:
          'Ensamblaje trilaminar del [[cinetocoro|real-div-kinetochore]] en vertebrados (placa ~200–250 nm; CCAN interno sobre [[nucleosomas|nucleosome]] CENP-A unido al complejo externo KMN con acopladores Ndc80, crio-EM PDB 3IZ0). Enlaza 15–25 extremos positivos de [[microtúbulos del huso|real-div-spindle]] por cromátida (co-orientados en Meiosis I; bi-orientados en Mitosis y Meiosis II). Los estados sin tensión activan la corrección por Aurora B y la inhibición MCC de [[APC/C–Cdc20|real-div-separase]] hasta satisfacerse el SAC.',
        from: [
          { nodeId: 'nucleosome', label: 'Nucleosomas CENP-A', cargo: 'Base epigenética centromérica' },
          { nodeId: 'microtubule', label: 'Microtúbulos cinetocóricos', cargo: '15–25 extremos (+) dinámicos' }
        ],
        to: [
          { nodeId: 'real-div-kinetochore', label: 'Nodo Cinetocoro', cargo: 'Acoplador Ndc80 y sensor SAC' },
          { nodeId: 'real-div-separase', label: 'Señal de salida SAC', cargo: 'Activación de APC/C–separasa' }
        ]
      }
    },

    separase: {
      en: {
        subtitle: 'APC/C-Activated Separase Protease (PDB 5A31 / 7NJ1)',
        simple:
          'Kept silenced by securin until every [[kinetochore|real-div-kinetochore]] feels balanced tension, [[separase|real-div-separase]] springs free the moment APC/C destroys its lock, slicing [[cohesin|real-div-cohesin]] rings open so chromatids split simultaneously.',
        story:
          'A single prematurely split chromosome would leave one daughter cell missing vital genes, so the cell ties [[separase|real-div-separase]] behind the strict Spindle Assembly Checkpoint. Once the last chromosome aligns cleanly on the [[spindle|real-div-spindle]], the megadalton E3 ubiquitin ligase APC/C-Cdc20 tags securin and cyclin B for immediate proteasomal destruction. Stripped of its inhibitory plug, the cysteine protease cleft of separase cleaves the RAD21 kleisin latch on every centromeric [[cohesin|real-div-cohesin]] ring in seconds, turning metaphase tension into synchronized anaphase separation.',
        blueprint: {
          role: 'Irreversible proteolytic trigger gated by APC/C-Cdc20 that snaps cohesin rings synchronously at anaphase onset',
          arrivesFrom: 'SAC-release signal activating megadalton APC/C-Cdc20 ligase (PDB 5A31) to ubiquitylate and degrade securin',
          inside: '230 kDa CD-clan cysteine endopeptidase (separase-securin complex PDB 7NJ1) with exposed His-Cys active site cleaving E-x-x-R motifs',
          deliversTo: 'Instantaneous cleavage of [[cohesin|real-div-cohesin]] RAD21 (mitosis) or REC8 ([[meiosis|real-div-meiosis]]), launching anaphase motion',
          loop: 'Simultaneous APC/C degradation of cyclin B resets mitotic CDK1 activity so the cell exits mitosis into telophase and cytokinesis'
        },
        scientific:
          'Checkpointed anaphase cleavage machinery uniting the 1.2 MDa APC/C-Cdc20 E3 ubiquitin ligase (PDB 5A31) and the ~230 kDa cysteine endopeptidase [[separase|real-div-separase]] (ESPL1; human separase-securin cryo-EM PDB 7NJ1). Silencing of [[kinetochore|real-div-kinetochore]] MCC enables APC/C polyubiquitylation of securin and cyclin B; liberated separase proteolyzes [[cohesin|real-div-cohesin]] kleisin subunits (RAD21 in mitosis; arm REC8 in Anaphase I and centromeric REC8 in Anaphase II of [[meiosis|real-div-meiosis]]) to initiate irreversible chromatid segregation.',
        from: [
          { nodeId: 'real-div-kinetochore', label: 'SAC Tension Clearance', cargo: 'APC/C-Cdc20 activation' },
          { nodeId: 'protein', label: 'Securin Inhibitor', cargo: 'Proteasomal ubiquitin release' }
        ],
        to: [
          { nodeId: 'real-div-separase', label: 'Separase Gate Node', cargo: 'APC/C-separase switch' },
          { nodeId: 'real-div-cohesin', label: 'Cohesin Cleavage', cargo: 'RAD21 / REC8 ring snapping' }
        ]
      },
      es: {
        subtitle: 'Proteasa Separasa activada por APC/C (PDB 5A31 / 7NJ1)',
        simple:
          'Mantenida en silencio por la segurina hasta que cada [[cinetocoro|real-div-kinetochore]] siente tensión equilibrada, la [[separasa|real-div-separase]] se libera al destruir APC/C su seguro y corta los anillos de [[cohesina|real-div-cohesin]] para separar las cromátidas a la vez.',
        story:
          'Bastarían unos segundos de adelanto en un solo cromosoma para dejar a una célula hija sin genes esenciales, por lo que la célula protege la [[separasa|real-div-separase]] bajo el estricto punto de control del huso. Al alinearse el último cromosoma en el [[huso|real-div-spindle]], la ubiquitina ligasa APC/C–Cdc20 marca la segurina y la ciclina B para destrucción proteasomal inmediata. Desbloqueada, la hendidura catalítica de la separasa escinde en segundos la kleisina RAD21 de cada [[cohesina|real-div-cohesin]] centromérica, convirtiendo la tensión metafásica en una anafase sincrónica.',
        blueprint: {
          role: 'Detonador proteolítico irreversible gobernado por APC/C–Cdc20 que rompe sincrónicamente los anillos de cohesina al iniciar anafase',
          arrivesFrom: 'Señal de apagado del SAC que activa la ligasa APC/C–Cdc20 (PDB 5A31) para ubiquitinar y degradar la segurina',
          inside: 'Cisteína endopeptidasa de 230 kDa (complejo separasa–segurina PDB 7NJ1) con díada activa His–Cys sobre motivos E-x-x-R',
          deliversTo: 'Corte instantáneo de la [[cohesina|real-div-cohesin]] RAD21 (mitosis) o REC8 ([[meiosis|real-div-meiosis]]), disparando la separación anafásica',
          loop: 'La degradación paralela de ciclina B por APC/C apaga CDK1 y guía la salida mitótica hacia telofase y citocinesis'
        },
        scientific:
          'Maquinaria de disparo anafásico que combina la ligasa E3 APC/C–Cdc20 de 1,2 MDa (PDB 5A31) con la cisteína endopeptidasa [[separasa|real-div-separase]] de ~230 kDa (ESPL1; complejo humano separasa–segurina crio-EM PDB 7NJ1). Al apagarse el complejo MCC en los [[cinetocoros|real-div-kinetochore]], APC/C poliubiquitina segurina y ciclina B; la separasa libre escinde la kleisina de [[cohesina|real-div-cohesin]] (RAD21 en mitosis; REC8 de brazos en Anafase I y centromérica en Anafase II de [[meiosis|real-div-meiosis]]).',
        from: [
          { nodeId: 'real-div-kinetochore', label: 'Aprobación SAC', cargo: 'Activación de APC/C–Cdc20' },
          { nodeId: 'protein', label: 'Inhibidor segurina', cargo: 'Liberación proteasomal' }
        ],
        to: [
          { nodeId: 'real-div-separase', label: 'Compuerta Separasa', cargo: 'Interruptor APC/C–separasa' },
          { nodeId: 'real-div-cohesin', label: 'Corte de cohesina', cargo: 'Apertura de RAD21 / REC8' }
        ]
      }
    },
    contractile_ring: {
      en: {
        subtitle: 'Actin-Myosin II Contractile Ring (PDB 6BIH)',
        simple:
          'At the end of mitosis or [[meiosis|real-div-meiosis]], this equatorial belt of [[actin filaments|actin-filament]] and myosin II [[motor proteins|motor-protein]] tightens beneath the [[plasma membrane|plasma-membrane]], pinching one animal cell into two daughters.',
        story:
          'Once segregated chromosomes reach opposite poles, centralspindlin complexes along the surviving [[spindle|real-div-spindle]] midzone activate a narrow stripe of equatorial RhoA GTPase. RhoA stimulates formins to spin unbranched [[actin filaments|actin-filament]] from [[G-actin|g-actin]] while activating bipolar non-muscle myosin II minifilaments. Burning ATP, myosin heads pull antiparallel actin cables past each other around the cell waist, deepening the cleavage furrow into a narrow intercellular bridge that ESCRT-III finally snips apart - a contractile strategy absent in walled [[plant cells|real-plant]], which instead build an outward phragmoplast cell plate.',
        blueprint: {
          role: 'Equatorial actomyosin purse-string engine driving cleavage-furrow cytokinesis in animal mitosis and [[meiosis|real-div-meiosis]]',
          arrivesFrom: 'Spindle-midzone RhoA signaling recruiting formin-nucleated [[actin filaments|actin-filament]] and bipolar myosin II [[motors|motor-protein]]',
          inside: 'Circumferential antiparallel [[F-actin|actin-filament]] bundles crosslinked by anillin and pulled by ATP-fueled myosin II (PDB 6BIH)',
          deliversTo: 'Progressive inward constriction of the [[plasma membrane|plasma-membrane]] producing two physically separate daughter [[cells|real-cell]]',
          loop: 'Ring diameter shrinks continuously as actin disassembles proportionally, focusing force onto the final ESCRT-III abscission bridge'
        },
        scientific:
          'Animal cytokinesis actomyosin contractile ring (cryo-EM F-actin-myosin II actomyosin rigor interface PDB 6BIH) positioned at the equatorial [[plasma membrane|plasma-membrane]] by centralspindlin-Ect2-RhoA signaling from the anaphase [[spindle|real-div-spindle]] midzone. Formin-polymerized [[actin filaments|actin-filament]] (assembled from [[G-actin|g-actin]]) tethered via anillin and septins are sliding-constricted by non-muscle myosin II bipolar filaments hydrolyzing [[Mg2+|atom-mg]]-ATP, closing the furrow into a ~1 um midbody resolved by ESCRT-III abscission (contrasting with centrifugal Golgi-vesicle phragmoplast cytokinesis in [[plant cells|real-plant]]).',
        from: [
          { nodeId: 'actin-filament', label: 'Actin Filaments', cargo: 'Formin-built equatorial cables' },
          { nodeId: 'motor-protein', label: 'Myosin II Motors', cargo: 'ATP-driven bipolar filament pull' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Cleavage Furrow', cargo: 'Inward membrane constriction' },
          { nodeId: 'real-cell-division', label: 'Daughter Cytokinesis', cargo: '2 clonal or 4 haploid cells' }
        ]
      },
      es: {
        subtitle: 'Anillo contráctil de actina y miosina II (PDB 6BIH)',
        simple:
          'Al final de la mitosis o la [[meiosis|real-div-meiosis]], este cinturón ecuatorial de [[filamentos de actina|actin-filament]] y [[proteínas motoras|motor-protein]] miosina II se estrecha bajo la [[membrana plasmática|plasma-membrane]], dividiendo la célula animal en dos hijas.',
        story:
          'Cuando los cromosomas llegan a polos opuestos, los complejos centralspindlin de la zona media del [[huso|real-div-spindle]] activan una franja ecuatorial de RhoA. Esta señal activa forminas que polimerizan [[filamentos de actina|actin-filament]] desde [[actina G|g-actin]] y despierta minifilamentos bipolares de miosina II. Al consumir ATP, las cabezas de miosina deslizan cables antiparalelos de actina alrededor de la cintura celular, ahondando el surco de escisión hasta que ESCRT-III corta el puente final, en claro contraste con el fragmoplasto de las [[células vegetales|real-plant]].',
        blueprint: {
          role: 'Motor actomiosínico ecuatorial en jareta que impulsa el surco de citocinesis en mitosis y [[meiosis|real-div-meiosis]] animales',
          arrivesFrom: 'Señalización RhoA desde la zona media del huso que recluta [[filamentos de actina|actin-filament]] y [[motores|motor-protein]] de miosina II',
          inside: 'Haces circunferenciales antiparalelos de [[actina F|actin-filament]] enlazados por anilina y traccionados por miosina II con ATP (PDB 6BIH)',
          deliversTo: 'Constricción progresiva hacia adentro de la [[membrana plasmática|plasma-membrane]] que separa dos [[células|real-cell]] hijas completas',
          loop: 'El anillo despolimeriza actina de forma proporcional al cerrarse, concentrando la fuerza hasta la abscisión por ESCRT-III'
        },
        scientific:
          'Anillo contráctil actomiosínico de la citocinesis animal (interfaz crio-EM actina F–miosina II PDB 6BIH) ensamblado bajo la [[membrana plasmática|plasma-membrane]] ecuatorial mediante señalización centralspindlin–Ect2–RhoA desde el [[huso|real-div-spindle]]. Los [[filamentos de actina|actin-filament]] polimerizados por forminas (desde [[actina G|g-actin]]) y anclados por anilina y septinas se deslizan por miosina II no muscular dependiente de [[Mg²⁺|atom-mg]]–ATP hasta formar un cuerpo medio de ~1 µm escindido por ESCRT-III (en contraste con el fragmoplasto de [[células vegetales|real-plant]]).',
        from: [
          { nodeId: 'actin-filament', label: 'Filamentos de actina', cargo: 'Cables ecuatoriales por formina' },
          { nodeId: 'motor-protein', label: 'Motores miosina II', cargo: 'Tracción bipolar con ATP' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Surco de escisión', cargo: 'Constricción de membrana' },
          { nodeId: 'real-cell-division', label: 'Citocinesis hija', cargo: '2 clonales o 4 haploides' }
        ]
      }
    },

    bivalent: {
      en: {
        subtitle: 'Meiotic Bivalent / Four-Chromatid Tetrad',
        simple:
          'A bivalent pairs one duplicated maternal [[chromosome|chromosome]] with its matching paternal partner during [[meiosis|real-div-meiosis]] I, forming a four-chromatid bundle linked by physical crossovers so homologs segregate randomly to opposite poles.',
        story:
          'Unlike mitosis, where maternal and paternal copies of each [[chromosome|chromosome]] act independently, Prophase I of [[meiosis|real-div-meiosis]] unites both duplicated homologs into one four-chromatid bivalent. First the [[synaptonemal complex|real-div-synaptonemal]] aligns them side by side so [[RAD51|real-div-rad51]] recombination builds reciprocal crossovers through [[Holliday junctions|real-div-holliday]]. Even after the zipper dissolves, arm [[cohesin|real-div-cohesin]] distal to each chiasma holds the bivalent together under opposing [[spindle|real-div-spindle]] pull at Metaphase I, where independent orientation of each pair shuffles maternal and paternal chromosomes into millions of possible gamete combinations.',
        blueprint: {
          role: 'Paired homologous four-chromatid unit aligning at Metaphase I to drive independent assortment and reductional segregation',
          arrivesFrom: 'Replicated maternal and paternal homologous [[chromosomes|chromosome]] synapsed by the [[synaptonemal complex|real-div-synaptonemal]]',
          inside: 'Four sister/non-sister chromatids covalently linked at recombinant chiasmata and locked along arms by meiotic REC8 [[cohesin|real-div-cohesin]]',
          deliversTo: 'Balanced Metaphase I tension across co-oriented sister [[kinetochores|real-div-kinetochore]] and random homolog segregation in Anaphase I',
          loop: 'At least one obligate crossover per bivalent prevents non-disjunction and chromosome-count errors in haploid gametes'
        },
        scientific:
          'Meiotic bivalent (tetrad of four chromatids representing one replicated maternal and one replicated paternal homologous [[chromosome|chromosome]]) assembled during Prophase I of [[meiosis|real-div-meiosis]]. Stabilized transiently by the [[synaptonemal complex|real-div-synaptonemal]] and permanently until Anaphase I by chiasmata plus distal REC8 [[cohesin|real-div-cohesin]], each bivalent co-orients sister [[kinetochores|real-div-kinetochore]] toward the same pole so opposing homologous centromeres achieve tension on the [[spindle|real-div-spindle]]. Independent metaphase orientation yields 2^n parental-chromosome assortments before reciprocal crossover shuffling.',
        from: [
          { nodeId: 'real-div-synaptonemal', label: 'Synaptonemal Pairing', cargo: 'Homolog axis registration' },
          { nodeId: 'real-div-holliday', label: 'Chiasma Crossovers', cargo: 'Physical homolog linkage' }
        ],
        to: [
          { nodeId: 'real-div-meiosis', label: 'Meiosis I Assortment', cargo: 'Reductional homolog split' },
          { nodeId: 'chromosome', label: 'Recombinant Homologs', cargo: 'Shuffled chromatid pairs' }
        ]
      },
      es: {
        subtitle: 'Bivalente meiótico / tétrada de cuatro cromátidas',
        simple:
          'Un bivalente empareja un [[cromosoma|chromosome]] materno duplicado con su compañero paterno durante la [[meiosis|real-div-meiosis]] I, formando un haz de cuatro cromátidas enlazadas por quiasmas para segregar homólogos al azar hacia polos opuestos.',
        story:
          'A diferencia de la mitosis, donde las copias materna y paterna de cada [[cromosoma|chromosome]] actúan por separado, la Profase I de la [[meiosis|real-div-meiosis]] fusiona ambos homólogos duplicados en un bivalente de cuatro cromátidas. Primero el [[complejo sinaptonémico|real-div-synaptonemal]] los alinea lado a lado para que [[RAD51|real-div-rad51]] forje sobrecruzamientos mediante [[uniones Holliday|real-div-holliday]]. Tras disolverse la cremallera, la [[cohesina|real-div-cohesin]] distal a cada quiasma mantiene unido el bivalente en Metafase I, donde su orientación independiente baraja cromosomas maternos y paternos en millones de combinaciones.',
        blueprint: {
          role: 'Unidad homóloga emparejada de cuatro cromátidas que se alinea en Metafase I impulsando distribución independiente y reducción',
          arrivesFrom: '[[Cromosomas|chromosome]] homólogos materno y paterno replicados y sinapsados por el [[complejo sinaptonémico|real-div-synaptonemal]]',
          inside: 'Cuatro cromátidas enlazadas en quiasmas recombinantes y retenidas en los brazos por [[cohesina|real-div-cohesin]] meiótica REC8',
          deliversTo: 'Tensión equilibrada en Metafase I con [[cinetocoros|real-div-kinetochore]] hermanos co-orientados y segregación homóloga en Anafase I',
          loop: 'Al menos un sobrecruzamiento obligado por bivalente evita la no disyunción y errores de ploidía en gametos'
        },
        scientific:
          'Bivalente meiótico (tétrada de cuatro cromátidas integrada por un [[cromosoma|chromosome]] homólogo materno y uno paterno replicados) formado en Profase I de la [[meiosis|real-div-meiosis]]. Estabilizado por el [[complejo sinaptonémico|real-div-synaptonemal]] y sostenido hasta Anafase I por quiasmas más [[cohesina|real-div-cohesin]] REC8 distal, co-orienta [[cinetocoros|real-div-kinetochore]] hermanos al mismo polo para equilibrar la tensión homóloga en el [[huso|real-div-spindle]]. La orientación aleatoria produce 2^n combinaciones antes de sumar la recombinación.',
        from: [
          { nodeId: 'real-div-synaptonemal', label: 'Emparejamiento sinaptonémico', cargo: 'Registro de ejes homólogos' },
          { nodeId: 'real-div-holliday', label: 'Sobrecruzamientos', cargo: 'Enlace físico por quiasmas' }
        ],
        to: [
          { nodeId: 'real-div-meiosis', label: 'Distribución Meiosis I', cargo: 'Separación reduccional' },
          { nodeId: 'chromosome', label: 'Homólogos recombinantes', cargo: 'Pares de cromátidas mixtas' }
        ]
      }
    },

    synaptonemal: {
      en: {
        subtitle: 'Synaptonemal Complex Zipper (100 nm, PDB 6F5X / 4CPC)',
        simple:
          'This 100-nanometer [[protein|protein]] ladder zips matching maternal and paternal [[chromosomes|chromosome]] together during Prophase I of [[meiosis|real-div-meiosis]], aligning corresponding gene regions so recombination enzymes can swap DNA cleanly.',
        story:
          'Built exclusively in germline cells entering [[meiosis|real-div-meiosis]], the [[synaptonemal complex|real-div-synaptonemal]] constructs a tripartite track along the entire length of every homologous pair. Tetrameric SYCP3 struts stiffen each chromosome core into parallel lateral elements rooted on REC8 [[cohesin|real-div-cohesin]], while antiparallel SYCP1 coiled-coil dimers bridge the central gap head-to-head across the pairing axis. Holding maternal and paternal chromatin loops at a fixed hundred-nanometer spacing lets [[RAD51|real-div-rad51]] recombination nodules repair Spo11 breaks into clean [[Holliday junction|real-div-holliday]] crossovers before the complex disassembles in diplotene.',
        blueprint: {
          role: '100 nm tripartite proteinaceous scaffold aligning homologous chromosomes in exact base-for-base register during Prophase I',
          arrivesFrom: 'REC8 [[cohesin|real-div-cohesin]] chromosome cores recruiting lateral SYCP3 struts (PDB 4CPC) and transverse SYCP1 coiled-coils (PDB 6F5X)',
          inside: 'Two parallel lateral elements linked across a central element by antiparallel alpha-helical SYCP1 transverse filaments',
          deliversTo: 'Stable pachytene synapsis guiding [[RAD51|real-div-rad51]] strand invasion and regulated crossover maturation across each bivalent',
          loop: 'Enforces crossover interference so recombination events stay spaced along chromosome arms rather than clustering destructively'
        },
        scientific:
          'Tripartite [[synaptonemal complex|real-div-synaptonemal]] lattice (~100 nm inter-axis spacing) polymerizing between homologous [[chromosomes|chromosome]] from zygotene through pachytene of [[meiosis|real-div-meiosis]] I. Lateral elements contain antiparallel tetrameric coiled-coil SYCP3 fibers (PDB 4CPC) atop meiotic REC8 [[cohesin|real-div-cohesin]]; the central region is bridged by head-to-head alpha-helical SYCP1 transverse filaments (PDB 6F5X) and central-element proteins (SYCE1-3, TEX12), organizing recombination nodules and transmitting crossover-interference signals prior to diplotene disassembly.',
        from: [
          { nodeId: 'real-div-cohesin', label: 'REC8 Axial Cores', cargo: 'Meiotic chromosome axis' },
          { nodeId: 'alpha-helix', label: 'SYCP1 & SYCP3 Coiled-Coils', cargo: 'Transverse & lateral proteins' }
        ],
        to: [
          { nodeId: 'real-div-synaptonemal', label: 'Synaptonemal Complex Node', cargo: '100 nm homolog zipper' },
          { nodeId: 'real-div-rad51', label: 'Recombination Nodules', cargo: 'Aligned homology repair' }
        ]
      },
      es: {
        subtitle: 'Cremallera del complejo sinaptonémico (100 nm, PDB 6F5X / 4CPC)',
        simple:
          'Esta escalera [[proteica|protein]] de 100 nanómetros une los [[cromosomas|chromosome]] materno y paterno en Profase I de la [[meiosis|real-div-meiosis]], alineando las regiones génicas equivalentes para intercambiar ADN sin errores.',
        story:
          'Ensamblado únicamente en células germinales al iniciar la [[meiosis|real-div-meiosis]], el [[complejo sinaptonémico|real-div-synaptonemal]] tiende un andamio tripartito a lo largo de cada pareja homóloga. Los puntales tetraméricos SYCP3 rigidizan ambos ejes laterales sobre la [[cohesina|real-div-cohesin]] REC8, mientras los dímeros en hélice enrollada SYCP1 cruzan el espacio central enfrentándose cabeza con cabeza. Mantener los bucles maternos y paternos a cien nanómetros fijos permite a los nódulos de [[RAD51|real-div-rad51]] madurar cortes Spo11 en [[uniones Holliday|real-div-holliday]] precisas antes de desensamblarse en diploteno.',
        blueprint: {
          role: 'Andamio proteico tripartito de 100 nm que alinea cromosomas homólogos en registro exacto durante la Profase I',
          arrivesFrom: 'Ejes cromosómicos de [[cohesina|real-div-cohesin]] REC8 que reclutan puntales laterales SYCP3 (PDB 4CPC) y puentes SYCP1 (PDB 6F5X)',
          inside: 'Dos elementos laterales paralelos unidos a través de un elemento central por filamentos transversales α-helicoidales SYCP1',
          deliversTo: 'Sinapsis estable en paquiteno que guía la invasión de hebra por [[RAD51|real-div-rad51]] y la maduración ordenada de quiasmas',
          loop: 'Impone interferencia de sobrecruzamientos para distribuir los intercambios de forma espaciada a lo largo de los brazos'
        },
        scientific:
          'Red tripartita del [[complejo sinaptonémico|real-div-synaptonemal]] (~100 nm entre ejes laterales) que polimeriza entre [[cromosomas|chromosome]] homólogos de cigoteno a paquiteno en [[meiosis|real-div-meiosis]] I. Los elementos laterales integran fibras tetraméricas SYCP3 (PDB 4CPC) sobre [[cohesina|real-div-cohesin]] REC8, enlazadas por filamentos transversales α-helicoidales SYCP1 (PDB 6F5X) y proteínas centrales (SYCE1–3, TEX12) que organizan nódulos de recombinación e interferencia de quiasmas.',
        from: [
          { nodeId: 'real-div-cohesin', label: 'Ejes axiales REC8', cargo: 'Base cromosómica meiótica' },
          { nodeId: 'alpha-helix', label: 'Hélices SYCP1 y SYCP3', cargo: 'Filamentos transversales y laterales' }
        ],
        to: [
          { nodeId: 'real-div-synaptonemal', label: 'Complejo sinaptonémico', cargo: 'Cremallera homóloga de 100 nm' },
          { nodeId: 'real-div-rad51', label: 'Nódulos de recombinación', cargo: 'Reparación homóloga alineada' }
        ]
      }
    },

    spo11: {
      en: {
        subtitle: 'Spo11 Recombination Endonuclease',
        simple:
          'Spo11 is a specialized cutting [[protein|protein]] that deliberately snaps both strands of chromosomal [[DNA|dna]] at the start of [[meiosis|real-div-meiosis]]. Those controlled breaks open the door for homologous chromosomes to trade matching genes.',
        story:
          'It seems paradoxical for a healthy cell to shatter its own genome on purpose, yet meiotic recombination cannot begin without Spo11. Descended from an archaeal topoisomerase VI cutting subunit, two Spo11 enzymes sit across a [[DNA|dna]] duplex in early Prophase I and use active-site tyrosines plus catalytic [[Mg2+|atom-mg]] to attack opposite [[phosphate|phosphate]] backbones, forming temporary covalent phosphotyrosyl bonds. Endonucleases immediately clip Spo11-oligonucleotide complexes off the ends and resect single-stranded tails so [[RAD51|real-div-rad51]] can invade the partner homolog and stitch a genetic crossover.',
        blueprint: {
          role: 'Programmed meiotic DNA double-strand-break initiator launching homologous recombination in Prophase I',
          arrivesFrom: 'Meiosis-specific Spo11 dimers tethered to TOPOVIBL accessory subunits along [[synaptonemal|real-div-synaptonemal]] chromatin loops',
          inside: 'Catalytic tyrosine nucleophiles and [[Mg2+|atom-mg]]-binding TOPRIM pockets cleaving both strands of B-form [[dsDNA|dna]] via 5-prime covalent links',
          deliversTo: 'Resected 3-prime single-stranded DNA tails serving as assembly tracks for [[RAD51|real-div-rad51]]/DMC1 strand-invasion filaments',
          loop: 'ATM/Tel1 feedback suppresses excessive neighboring breaks, generating ~200-300 safe DSBs that resolve into ~1-2 crossovers per chromosome'
        },
        scientific:
          'Meiosis-specific transesterase Spo11 (homologous to archaeal topoisomerase VI subunit A, complexed with TOPOVIBL) catalyzing programmed double-strand breaks (DSBs) across chromatin hotspots in leptotene of [[meiosis|real-div-meiosis]] I. Paired catalytic Tyr residues attack staggered phosphodiester bonds (2-bp 5-prime overhang) using [[Mg2+|atom-mg]]-coordinated TOPRIM domains to form covalent 5-prime phosphotyrosyl intermediates on [[dsDNA|dna]]. MRN-CtIP endonucleolytic release of Spo11-oligo adducts and Exo1 resection expose 3-prime ssDNA substrates loaded by [[RAD51|real-div-rad51]] and DMC1.',
        from: [
          { nodeId: 'dna', label: 'Homologous Duplex DNA', cargo: 'Recombination hotspot substrate' },
          { nodeId: 'atom-mg', label: 'Catalytic Mg2+ Ions', cargo: 'TOPRIM phosphodiester cleavage' }
        ],
        to: [
          { nodeId: 'real-div-rad51', label: 'RAD51 Filament Loading', cargo: 'Resected 3-prime ssDNA tails' },
          { nodeId: 'real-div-meiosis', label: 'Meiotic Recombination', cargo: 'Programmed crossover start' }
        ]
      },
      es: {
        subtitle: 'Endonucleasa de recombinación Spo11',
        simple:
          'Spo11 es una [[proteína|protein]] cortadora especializada que rompe deliberadamente ambas hebras del [[ADN|dna]] cromosómico al inicio de la [[meiosis|real-div-meiosis]]. Estas roturas controladas abren paso al intercambio de genes entre cromosomas homólogos.',
        story:
          'Parece paradójico que una célula sana fracture su propio genoma adrede, pero la recombinación meiótica no puede comenzar sin Spo11. Derivada de la topoisomerasa VI arqueana, una pareja de enzimas Spo11 se acopla a un dúplex de [[ADN|dna]] en Profase I temprana y emplea tirosinas catalíticas junto a [[Mg²⁺|atom-mg]] para atacar ambos esqueletos de [[fosfato|phosphate]], creando enlaces covalentes temporales. Las nucleasas retiran enseguida los complejos Spo11 y resecan colas monocatenarias para que [[RAD51|real-div-rad51]] invada al homólogo compañero y teja un sobrecruzamiento.',
        blueprint: {
          role: 'Iniciador programado de roturas de doble hebra en el ADN que arranca la recombinación homóloga en Profase I',
          arrivesFrom: 'Dímeros meióticos Spo11 unidos a subunidades TOPOVIBL sobre bucles de cromatina del eje [[sinaptonémico|real-div-synaptonemal]]',
          inside: 'Tirosinas nucleofílicas y dominios TOPRIM con [[Mg²⁺|atom-mg]] que escinden ambas hebras del [[ADNbc|dna]] por enlace covalente 5′',
          deliversTo: 'Colas 3′ de ADN monocatenario resecado que sirven de pista para los filamentos invasores de [[RAD51|real-div-rad51]]/DMC1',
          loop: 'La retroalimentación por ATM/Tel1 limita roturas contiguas, generando ~200–300 cortes seguros que maduran en ~1–2 quiasmas por cromosoma'
        },
        scientific:
          'Transesterasa específica de la [[meiosis|real-div-meiosis]] Spo11 (homóloga de la subunidad A de topoisomerasa VI de [[Archaea|real-archaea]], asociada a TOPOVIBL) catalizadora de roturas programadas de doble cadena (DSB) en leptoteno. Sus tirosinas catalíticas atacan enlaces fosfodiéster escalonados mediante dominios TOPRIM coordinados por [[Mg²⁺|atom-mg]], formando aductos covalentes 5′-fosfotirosilo sobre [[ADNbc|dna]]. La liberación endonucleolítica por MRN–CtIP y resección por Exo1 exponen colas 3′ de ADNmc cargadas por [[RAD51|real-div-rad51]] y DMC1.',
        from: [
          { nodeId: 'dna', label: 'Dúplex homólogo de ADN', cargo: 'Puntos calientes de recombinación' },
          { nodeId: 'atom-mg', label: 'Iones catalíticos Mg²⁺', cargo: 'Escisión fosfodiéster TOPRIM' }
        ],
        to: [
          { nodeId: 'real-div-rad51', label: 'Carga de filamento RAD51', cargo: 'Colas 3′ de ADNmc resecado' },
          { nodeId: 'real-div-meiosis', label: 'Recombinación meiótica', cargo: 'Inicio de sobrecruzamientos' }
        ]
      }
    },

    rad51: {
      en: {
        subtitle: 'RAD51 Recombinase Filament (PDB 5H1B)',
        simple:
          'RAD51 [[proteins|protein]] wrap around broken single-stranded [[DNA|dna]] tails in a stiff spiral, search the intact partner chromosome for a matching sequence, and weave the broken strand inside to begin genetic crossing-over.',
        story:
          'After Spo11 cleaves chromosomal [[DNA|dna]] and nucleases chew back one strand, BRCA2 loads ATP-bound [[RAD51|real-div-rad51]] (alongside its meiotic partner DMC1) onto the exposed 3-prime overhang. As protomers polymerize into a right-handed helical sleeve, they stretch the trapped single strand by fifty percent into stacked base triplets ready to test Watson-Crick pairing against the aligned homolog inside the [[synaptonemal complex|real-div-synaptonemal]]. The moment complementary bases lock, RAD51 catalyzes strand exchange into a displaced D-loop that DNA polymerase extends into a double [[Holliday junction|real-div-holliday]].',
        blueprint: {
          role: 'ATP-powered RecA-family nucleoprotein filament performing homology search and strand invasion during [[meiosis|real-div-meiosis]]',
          arrivesFrom: '3-prime resected ssDNA tails generated after Spo11 cleavage and loaded by BRCA2 with [[ATP|atp-synthase]] + [[Mg2+|atom-mg]]',
          inside: 'Right-handed helical RAD51 filament (PDB 5H1B; ~6 subunits/turn) extending ssDNA 1.5x into triplet steps for rapid base-pair probing',
          deliversTo: 'Displaced D-loop heteroduplexes linking non-sister chromatids on the road to [[Holliday junction|real-div-holliday]] crossing-over',
          loop: 'ATP hydrolysis triggers filament disassembly once stable heteroduplex pairing forms, clearing room for repair DNA polymerase'
        },
        scientific:
          'Eukaryotic RecA-family ATPase recombinase [[RAD51|real-div-rad51]] (cryo-EM ssDNA presynaptic filament PDB 5H1B; ~10 nm diameter, ~6.4 protomers per helical turn) working cooperatively with meiosis-specific paralog DMC1. Mediated by BRCA2 onto resected 3-prime ssDNA, [[Mg2+|atom-mg]]-ATP-bound RAD51 stretches the strand ~1.5-fold into B-form-like nucleotide triplets separated by axial gaps, enabling fast base-triplet homology recognition on the non-sister [[chromosome|chromosome]] and driving D-loop strand invasion into double [[Holliday junctions|real-div-holliday]].',
        from: [
          { nodeId: 'dna', label: 'Resected 3-Prime ssDNA', cargo: 'Spo11 break overhang' },
          { nodeId: 'atp-synthase', label: 'ATP + Mg2+ Cofactor', cargo: 'Active stretched filament state' }
        ],
        to: [
          { nodeId: 'real-div-rad51', label: 'Spo11 / RAD51 Node', cargo: 'Homology search & D-loop' },
          { nodeId: 'real-div-holliday', label: 'Holliday Junction', cargo: 'Four-way strand exchange' }
        ]
      },
      es: {
        subtitle: 'Filamento recombinasa RAD51 (PDB 5H1B)',
        simple:
          'Las [[proteínas|protein]] RAD51 envuelven los extremos monocatenarios de [[ADN|dna]] roto en una espiral rígida, buscan la secuencia equivalente en el cromosoma compañero e insertan la hebra para iniciar el intercambio genético.',
        story:
          'Tras los cortes de Spo11 y la resección enzimática de una hebra, BRCA2 carga [[RAD51|real-div-rad51]] unido a ATP (junto a su par meiótico DMC1) sobre la cola 3′ expuesta. Al polimerizar en una funda helicoidal dextrógira, estiran el ADN monocatenario un cincuenta por ciento en tripletes listos para comprobar emparejamiento complementario frente al homólogo alineado en el [[complejo sinaptonémico|real-div-synaptonemal]]. En cuanto encajan las bases, RAD51 cataliza la invasión formando un bucle D que las polimerasas extienden hasta una doble [[unión Holliday|real-div-holliday]].',
        blueprint: {
          role: 'Filamento nucleoproteico ATPasa familia RecA que busca homología e invade hebras durante la [[meiosis|real-div-meiosis]]',
          arrivesFrom: 'Colas 3′ de ADNmc resecadas tras el corte Spo11 y cargadas por BRCA2 con [[ATP|atp-synthase]] + [[Mg²⁺|atom-mg]]',
          inside: 'Hélice dextrógira de RAD51 (PDB 5H1B; ~6 subunidades/vuelta) que extiende el ADNmc 1,5× en tripletes para sondear pares de bases',
          deliversTo: 'Heterodúplex en bucle D que conectan cromátidas no hermanas rumbo al sobrecruzamiento en [[uniones Holliday|real-div-holliday]]',
          loop: 'La hidrólisis de ATP desensambla el filamento tras estabilizarse el bucle D, dejando acceso a la ADN polimerasa reparadora'
        },
        scientific:
          'Recombinasa ATPasa eucariota de la familia RecA [[RAD51|real-div-rad51]] (filamento presináptico crio-EM PDB 5H1B; ~10 nm de diámetro, ~6,4 protómeros por vuelta) en cooperación con el parálogo meiótico DMC1. Cargada por BRCA2 sobre colas 3′ de ADNmc con [[Mg²⁺|atom-mg]]–ATP, estira la hebra ~1,5× en tripletes separados axialmente, acelerando el reconocimiento homólogo sobre el [[cromosoma|chromosome]] compañero e impulsando la invasión en bucle D hacia dobles [[uniones Holliday|real-div-holliday]].',
        from: [
          { nodeId: 'dna', label: 'ADNmc 3′ resecado', cargo: 'Extremo tras corte Spo11' },
          { nodeId: 'atp-synthase', label: 'Cofactor ATP + Mg²⁺', cargo: 'Filamento estirado activo' }
        ],
        to: [
          { nodeId: 'real-div-rad51', label: 'Nodo Spo11 / RAD51', cargo: 'Búsqueda homóloga y bucle D' },
          { nodeId: 'real-div-holliday', label: 'Unión Holliday', cargo: 'Intercambio en cuatro vías' }
        ]
      }
    },

    chiasma: {
      en: {
        subtitle: 'Crossing-Over Chiasma Junction',
        simple:
          'A chiasma is the visible X-shaped bridge where maternal and paternal chromatids have physically swapped matching [[DNA|dna]] arms during [[meiosis|real-div-meiosis]] I, both creating new gene combinations and locking homologs together until Anaphase I.',
        story:
          'Once a double [[Holliday junction|real-div-holliday]] resolves into a reciprocal crossover and the [[synaptonemal complex|real-div-synaptonemal]] melts away, the bivalent displays a dramatic X-shaped chiasma linking two non-sister chromatids of swapped maternal and paternal colors. Far from being merely decorative, each chiasma serves a vital mechanical job: combined with distal arm [[cohesin|real-div-cohesin]], it physically anchors opposing homologous centromeres together so the Metaphase I [[spindle|real-div-spindle]] can pull against real resistance before [[separase|real-div-separase]] cleaves arm cohesin in Anaphase I.',
        blueprint: {
          role: 'Visible reciprocal crossover point executing both allele shuffling and mechanical homolog linkage at Metaphase I',
          arrivesFrom: 'Asymmetric endonucleolytic resolution of double [[Holliday junctions|real-div-holliday]] formed via [[RAD51|real-div-rad51]] strand invasion',
          inside: 'Covalently continuous chimeric maternal-paternal [[dsDNA|dna]] chromatids stabilized distally by meiotic REC8 [[cohesin|real-div-cohesin]] rings',
          deliversTo: 'Bipolar tension across homologous pairs on the Metaphase I [[spindle|real-div-spindle]] and genetically mosaic haploid gametes',
          loop: 'Anaphase I cleavage of arm REC8 releases chiasma entanglement while protected centromeric cohesin keeps sisters united for Meiosis II'
        },
        scientific:
          'Cytologically visible reciprocal meiotic crossover site (chiasma) emerging in diplotene after [[synaptonemal complex|real-div-synaptonemal]] disassembly and biased MutL-gamma resolution of double [[Holliday junctions|real-div-holliday]]. Physically joins homologous [[chromosomes|chromosome]] via exchanged non-sister [[dsDNA|dna]] strands held in register by distal arm REC8 [[cohesin|real-div-cohesin]], supplying the mechanical counter-force required for bi-orientation of bivalents on the Meiosis I [[spindle|real-div-spindle]] until arm cleavage by [[separase|real-div-separase]].',
        from: [
          { nodeId: 'real-div-holliday', label: 'Holliday Resolution', cargo: 'Reciprocal arm strand swap' },
          { nodeId: 'real-div-cohesin', label: 'Distal Arm Cohesin', cargo: 'Chiasma slip resistance' }
        ],
        to: [
          { nodeId: 'real-div-meiosis', label: 'Recombinant Gametes', cargo: 'Mosaic maternal/paternal arms' },
          { nodeId: 'real-div-spindle', label: 'Metaphase I Tension', cargo: 'Homolog bi-orientation anchor' }
        ]
      },
      es: {
        subtitle: 'Quiasma de sobrecruzamiento genético',
        simple:
          'Un quiasma es el puente visible en forma de X donde cromátidas materna y paterna han intercambiado físicamente brazos de [[ADN|dna]] durante la [[meiosis|real-div-meiosis]] I, creando nuevas combinaciones génicas y sujetando los homólogos hasta la Anafase I.',
        story:
          'Una vez que una doble [[unión Holliday|real-div-holliday]] se resuelve en sobrecruzamiento recíproco y el [[complejo sinaptonémico|real-div-synaptonemal]] desaparece, el bivalente revela un quiasma en X donde dos cromátidas no hermanas exhiben segmentos maternos y paternos intercambiados. Además de generar diversidad genética, cada quiasma cumple un papel mecánico crítico: apoyado por la [[cohesina|real-div-cohesin]] de los brazos, amarra ambos homólogos para que el [[huso|real-div-spindle]] de Metafase I genere tensión real antes de que la [[separasa|real-div-separase]] corte los brazos en Anafase I.',
        blueprint: {
          role: 'Punto visible de sobrecruzamiento recíproco que mezcla alelos y mantiene unidos mecánicamente los homólogos en Metafase I',
          arrivesFrom: 'Resolución endonucleolítica asimétrica de dobles [[uniones Holliday|real-div-holliday]] originadas por invasión de [[RAD51|real-div-rad51]]',
          inside: 'Cromátidas quiméricas materno-paternas continuas de [[ADNbc|dna]] retenidas distalmente por anillos REC8 de [[cohesina|real-div-cohesin]]',
          deliversTo: 'Tensión bipolar entre homólogos en el [[huso|real-div-spindle]] de Metafase I y gametos haploides genéticamente mosaico',
          loop: 'El corte de REC8 en brazos durante Anafase I resuelve el enlace del quiasma mientras el centrómero protegido reserva las hermanas para Meiosis II'
        },
        scientific:
          'Sitio citológicamente visible de sobrecruzamiento recíproco meiótico (quiasma) expuesto en diploteno tras el desensamblaje del [[complejo sinaptonémico|real-div-synaptonemal]] y la resolución sesgada por MutLγ de dobles [[uniones Holliday|real-div-holliday]]. Enlaza físicamente [[cromosomas|chromosome]] homólogos mediante intercambio covalente de [[ADNbc|dna]] no hermano estabilizado por [[cohesina|real-div-cohesin]] REC8 distal, aportando la contratensión indispensable para orientar bivalentes en el [[huso|real-div-spindle]] de Meiosis I hasta la acción de la [[separasa|real-div-separase]].',
        from: [
          { nodeId: 'real-div-holliday', label: 'Resolución Holliday', cargo: 'Intercambio recíproco de brazos' },
          { nodeId: 'real-div-cohesin', label: 'Cohesina distal de brazos', cargo: 'Resistencia al deslizamiento' }
        ],
        to: [
          { nodeId: 'real-div-meiosis', label: 'Gametos recombinantes', cargo: 'Brazos mosaico materno/paterno' },
          { nodeId: 'real-div-spindle', label: 'Tensión en Metafase I', cargo: 'Ancla de bi-orientación homóloga' }
        ]
      }
    },

    holliday: {
      en: {
        subtitle: 'Four-Way Holliday Junction (PDB 1C7M)',
        simple:
          'At this molecular crossroad, four [[DNA|dna]] strands meet in an X-shaped knot stabilized by [[magnesium|atom-mg]] ions. Symmetric cuts by resolvase enzymes untie the knot into either intact parents or reciprocally swapped crossover arms.',
        story:
          'Zooming down to two nanometers inside a meiotic recombination nodule reveals the [[Holliday junction|real-div-holliday]]: two homologous B-form [[DNA|dna]] helices physically trading strands through a single four-way branch point. Because four negatively charged [[phosphate|phosphate]] backbones crowd into the narrow junction core, divalent [[Mg2+|atom-mg]] cations cluster right at the center to fold the four arms into a compact stacked-X structure. While base pairs remain intact across every arm, the branch point can migrate along matching [[nucleotides|nucleotide]] until MutL-gamma or GEN1 resolvases nick two opposite strands and DNA ligase seals the recombinant chromosomes.',
        blueprint: {
          role: 'Four-stranded branched DNA intermediate catalyzing exact reciprocal genetic exchange between homologous chromosomes',
          arrivesFrom: 'D-loop strand invasion by [[RAD51|real-div-rad51]], repair polymerase synthesis, and second-end capture during [[meiosis|real-div-meiosis]] I',
          inside: 'Four antiparallel 2 nm [[DNA|dna]] arms joined at a stacked-X crossover core (PDB 1C7M) neutralized by divalent [[Mg2+|atom-mg]] ions',
          deliversTo: 'Resolvase-cleaved reciprocal chiasmata or non-crossover repaired duplexes with zero net base loss',
          loop: 'Symmetric two-strand cutting along horizontal versus vertical axes determines whether flanking maternal/paternal markers swap'
        },
        scientific:
          'Four-way branched [[dsDNA|dna]] homologous recombination intermediate (antiparallel stacked-X crystal structure PDB 1C7M; 2.0 nm duplex arms connected by continuous sugar-[[phosphate|phosphate]] linkages of [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]]). Divalent [[Mg2+|atom-mg]] coordination shields central electrostatic repulsion, promoting coaxial base stacking across two quasi-continuous helices while isoenergetic branch migration shifts the crossover point until MutL-gamma (MLH1-MLH3) or GEN1/MUS81 endonucleases resolve the [[Holliday junction|real-div-holliday]] into crossovers.',
        from: [
          { nodeId: 'real-div-rad51', label: 'RAD51 Strand Invasion', cargo: 'D-loop & synthesis capture' },
          { nodeId: 'atom-mg', label: 'Stabilizing Mg2+ Core', cargo: 'Phosphate charge shielding' }
        ],
        to: [
          { nodeId: 'real-div-holliday', label: 'Holliday Junction Node', cargo: 'Four-way DNA branch structure' },
          { nodeId: 'dna', label: 'Recombinant B-DNA', cargo: 'Ligated chimeric duplexes' }
        ]
      },
      es: {
        subtitle: 'Unión Holliday de cuatro brazos (PDB 1C7M)',
        simple:
          'En esta encrucijada molecular, cuatro hebras de [[ADN|dna]] convergen en un nudo en forma de X estabilizado por iones de [[magnesio|atom-mg]]. Cortes simétricos de enzimas resolvasas desatan el cruce en cromosomas intactos o brazos recombinantes intercambiados.',
        story:
          'Al acercarse a dos nanómetros dentro de un nódulo de recombinación aparece la [[unión Holliday|real-div-holliday]]: dos hélices homólogas de [[ADN|dna]] intercambiando hebras en una bifurcación de cuatro vías. Como cuatro esqueletos negativos de [[fosfato|phosphate]] se concentran en el centro estrecho, cationes divalentes [[Mg²⁺|atom-mg]] acuden a plegar los cuatro brazos en una X apilada compacta. Mientras los pares de bases permanecen íntegros, el punto de cruce puede migrar sobre [[nucleótidos|nucleotide]] homólogos hasta que las resolvasas MutLγ o GEN1 cortan dos hebras opuestas y la ligasa sella los brazos recombinantes.',
        blueprint: {
          role: 'Intermediario ramificado de ADN de cuatro hebras que ejecuta el intercambio genético recíproco exacto entre homólogos',
          arrivesFrom: 'Invasión en bucle D por [[RAD51|real-div-rad51]], síntesis reparadora y captura del segundo extremo en [[meiosis|real-div-meiosis]] I',
          inside: 'Cuatro brazos antiparalelos de [[ADN|dna]] de 2 nm unidos en un núcleo en X apilada (PDB 1C7M) neutralizado por iones [[Mg²⁺|atom-mg]]',
          deliversTo: 'Quiasmas recíprocos cortados por resolvasas o dúplex reparados sin pérdida neta de nucleótidos',
          loop: 'El corte simétrico de dos hebras según el eje horizontal o vertical decide si los marcadores flanqueantes se intercambian'
        },
        scientific:
          'Intermediario ramificado de cuatro vías de [[ADNbc|dna]] en recombinación homóloga (estructura cristalina en X apilada antiparalela PDB 1C7M; brazos dúplex de 2,0 nm unidos por esqueletos azúcar-[[fosfato|phosphate]] de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]]). La coordinación de [[Mg²⁺|atom-mg]] atenúa la repulsión electrostática central favoreciendo el apilamiento coaxial, mientras la migración de rama precede a la resolución de la [[unión Holliday|real-div-holliday]] por MutLγ (MLH1–MLH3) o GEN1/MUS81.',
        from: [
          { nodeId: 'real-div-rad51', label: 'Invasión por RAD51', cargo: 'Bucle D y captura de hebra' },
          { nodeId: 'atom-mg', label: 'Núcleo estabilizador Mg²⁺', cargo: 'Apantallamiento de fosfatos' }
        ],
        to: [
          { nodeId: 'real-div-holliday', label: 'Nodo Unión Holliday', cargo: 'Bifurcación en cuatro vías' },
          { nodeId: 'dna', label: 'ADN-B recombinante', cargo: 'Dúplex quiméricos ligados' }
        ]
      }
    },

    ftsz_ring: {
      en: {
        subtitle: 'Bacterial FtsZ Z-Ring (PDB 6UNX)',
        simple:
          'Inside dividing [[E. coli|real-bacterium]], GTP-powered [[FtsZ|real-div-ftsz]] filaments assemble a circular Z-ring around the cell equator that steadily guides inward [[peptidoglycan|peptidoglycan]] septum growth until two identical daughters split apart.',
        story:
          'Bacteria lack both [[centrosomes|centrosome]] and [[actin-myosin|actin-filament]] contractile rings, yet [[E. coli|real-bacterium]] divides cleanly every twenty minutes using FtsZ - the prokaryotic evolutionary ancestor of eukaryotic [[tubulin|tubulin]]. Guided to exact mid-cell by oscillating MinCDE waves and DNA-bound SlmA exclusion, membrane-tethered [[FtsZ|real-div-ftsz]] protofilaments add GTP-loaded subunits at their leading tips and shed GDP subunits behind. That relentless circumferential treadmilling escorts FtsW and PBP3 wall enzymes around the shrinking waist, laying down fresh septal [[peptidoglycan|peptidoglycan]] until [[binary fission|real-div-fission]] completes.',
        blueprint: {
          role: 'GTP-fueled prokaryotic tubulin-homolog Z-ring orchestrating mid-cell constriction during bacterial [[binary fission|real-div-fission]]',
          arrivesFrom: 'Cytosolic [[FtsZ|real-div-ftsz]]-GTP monomers anchored to the inner [[plasma membrane|plasma-membrane]] via FtsA/ZipA at MinCDE/SlmA mid-cell',
          inside: 'Curved ~5 nm FtsZ protofilaments (PDB 6UNX) treadmilling at ~30 nm/s via [[Mg2+|atom-mg]]-GTP hydrolysis inside the bacterial divisome',
          deliversTo: 'Circumferential tracking of FtsW/PBP3 septal [[peptidoglycan|peptidoglycan]] wall synthesis dividing one rod into two clones',
          loop: 'MinCDE pole-to-pole waves plus SlmA nucleoid occlusion block Z-ring assembly anywhere over unsegregated DNA'
        },
        scientific:
          'Bacterial divisome Z-ring built from the prokaryotic [[tubulin|tubulin]]-superfamily GTPase [[FtsZ|real-div-ftsz]] (E. coli protofilament PDB 6UNX; ~40 kDa monomer, ~4.3 nm repeat) tethered to the [[plasma membrane|plasma-membrane]] by FtsA and ZipA during [[binary fission|real-div-fission]]. Positioned accurately at mid-cell by oscillating MinCDE gradients and SlmA nucleoid occlusion, [[Mg2+|atom-mg]]-GTP hydrolysis drives polarized protofilament treadmilling (~25-35 nm/s), pacing circumferential FtsQLBWI-PBP3 septal [[peptidoglycan|peptidoglycan]] constriction across [[E. coli|real-bacterium]] and [[Gram-positive|real-gram-positive]] rods.',
        from: [
          { nodeId: 'tubulin', label: 'Tubulin Superfamily', cargo: 'Prokaryotic GTPase ancestor' },
          { nodeId: 'plasma-membrane', label: 'FtsA / ZipA Anchors', cargo: 'Inner-leaflet ring tethering' }
        ],
        to: [
          { nodeId: 'real-div-ftsz', label: 'FtsZ Z-Ring Node', cargo: 'GTP-treadmilling divisome' },
          { nodeId: 'peptidoglycan', label: 'Septal Peptidoglycan', cargo: 'FtsW/PBP3 inward wall closure' }
        ]
      },
      es: {
        subtitle: 'Anillo Z bacteriano de FtsZ (PDB 6UNX)',
        simple:
          'Dentro de [[E. coli|real-bacterium]] en división, los filamentos de [[FtsZ|real-div-ftsz]] impulsados por GTP forman un anillo Z ecuatorial que dirige el crecimiento hacia adentro del septo de [[peptidoglicano|peptidoglycan]] hasta separar dos bacterias hijas.',
        story:
          'Las bacterias carecen de [[centrosomas|centrosome]] y de anillos de [[actina|actin-filament]], pero [[E. coli|real-bacterium]] se divide con precisión cada veinte minutos gracias a FtsZ, el ancestro procariota de la [[tubulina|tubulin]] eucariota. Situados en el centro exacto por las ondas oscilantes MinCDE y la exclusión nucleoide SlmA, los protofilamentos de [[FtsZ|real-div-ftsz]] unidos a membrana añaden subunidades con GTP por delante y sueltan unidades GDP por detrás. Ese avance continuo escolta a las enzimas murales FtsW y PBP3 depositando [[peptidoglicano|peptidoglycan]] septal hasta culminar la [[fisión binaria|real-div-fission]].',
        blueprint: {
          role: 'Anillo Z procariota homólogo de tubulina impulsado por GTP que coordina la constricción media en la [[fisión binaria|real-div-fission]]',
          arrivesFrom: 'Monómeros citosólicos de [[FtsZ|real-div-ftsz]]–GTP anclados a la [[membrana plasmática|plasma-membrane]] por FtsA/ZipA en el plano MinCDE/SlmA',
          inside: 'Protofilamentos curvos de FtsZ de ~5 nm (PDB 6UNX) en avance polarizado (~30 nm/s) por hidrólisis de [[Mg²⁺|atom-mg]]–GTP',
          deliversTo: 'Guía circunferencial de la síntesis septal de [[peptidoglicano|peptidoglycan]] por FtsW/PBP3 separando dos bacilos clonales',
          loop: 'Las ondas MinCDE entre polos y la oclusión SlmA impiden armar el anillo sobre ADN sin segregar'
        },
        scientific:
          'Anillo Z del divisoma bacteriano compuesto por la GTPasa procariota [[FtsZ|real-div-ftsz]] de la superfamilia [[tubulina|tubulin]] (protofilamento de E. coli PDB 6UNX; monómero ~40 kDa, paso ~4,3 nm) anclada a la [[membrana plasmática|plasma-membrane]] por FtsA y ZipA en la [[fisión binaria|real-div-fission]]. Ubicada en el centro por MinCDE y SlmA, la hidrólisis de [[Mg²⁺|atom-mg]]–GTP impulsa un avance direccional (~25–35 nm/s) que coordina la síntesis septal de [[peptidoglicano|peptidoglycan]] FtsQLBWI–PBP3 en [[E. coli|real-bacterium]] y bacilos [[Gram-positivos|real-gram-positive]].',
        from: [
          { nodeId: 'tubulin', label: 'Superfamilia tubulina', cargo: 'Ancestro GTPasa procariota' },
          { nodeId: 'plasma-membrane', label: 'Anclas FtsA / ZipA', cargo: 'Fijación interna del anillo' }
        ],
        to: [
          { nodeId: 'real-div-ftsz', label: 'Nodo Anillo Z FtsZ', cargo: 'Divisoma con avance GTP' },
          { nodeId: 'peptidoglycan', label: 'Peptidoglicano septal', cargo: 'Cierre mural FtsW/PBP3' }
        ]
      }
    },

    par_segregation: {
      en: {
        subtitle: 'Bacterial ParABS / oriC Segregation System (PDB 6T1F)',
        simple:
          'Before a bacterium splits in two, ParB [[protein|protein]] clamps lock onto the newly copied origin region of its circular [[DNA|dna]] and ride an ATP-driven ParA wave to pull each [[nucleoid|nucleoid]] copy toward an opposite pole.',
        story:
          'Prokaryotes do not build a eukaryotic [[mitotic spindle|real-div-spindle]], yet they still sort their replicated genomes actively instead of relying on chance diffusion. As bidirectional replication copies the circular chromosome of [[E. coli|real-bacterium]] from oriC toward ter, CTP-gated ParB dimers clamp onto centromere-like parS DNA motifs flanking each origin and spread into dense partition complexes while SMC-like MukBEF rings compact each chromosomal arm. Interacting with ATP-bound ParA coated across the [[nucleoid|nucleoid]], the ParB-origin hub stimulates ATP hydrolysis behind it and surfs the receding gradient cleanly to opposite poles so the [[FtsZ Z-ring|real-div-ftsz]] never slices through DNA.',
        blueprint: {
          role: 'Active prokaryotic chromosome-origin partitioning engine clearing duplicated circular genomes from mid-cell before fission',
          arrivesFrom: 'Bidirectional oriC replication forks copying the circular 4.6 Mbp [[nucleoid|nucleoid]] alongside CTP-loaded ParB and ATP-loaded ParA',
          inside: 'CTP-gated ParB DNA sliding clamps bound to parS motifs (PDB 6T1F) coupled to a self-depleting ParA-ATP nucleoid ratchet plus MukBEF',
          deliversTo: 'Opposite-pole positioning of twin bacterial chromosomes, lifting SlmA inhibition so the [[FtsZ Z-ring|real-div-ftsz]] can close safely',
          loop: 'ParB triggers local ParA-ATP release behind its path, creating a burnt-bridge chemical ratchet toward poleward ParA reserves'
        },
        scientific:
          'Prokaryotic active genome partitioning machinery combining CTP-regulated ParB-parS sliding clamps (crystal structure PDB 6T1F), Walker-box ATPase ParA gradients across the [[nucleoid|nucleoid]], and SMC-kleisin MukBEF condensation during bacterial [[binary fission|real-div-fission]]. Following DnaA-initiated bidirectional replication of the circular 4.6 Mbp [[dsDNA|dna]] from oriC to ter, ParB-parS complexes stimulate ParA-[[Mg2+|atom-mg]]-ATP dissociation to migrate poleward via a diffusion-ratchet mechanism, clearing mid-cell DNA so SlmA occlusion releases mid-cell [[FtsZ|real-div-ftsz]] constriction.',
        from: [
          { nodeId: 'nucleoid', label: 'Circular Bacterial Nucleoid', cargo: '4.6 Mbp oriC-to-ter dsDNA' },
          { nodeId: 'atp-synthase', label: 'ATP & CTP Nucleotides', cargo: 'ParA ratchet & ParB clamp gate' }
        ],
        to: [
          { nodeId: 'real-div-fission', label: 'Binary Fission Node', cargo: 'Active origin segregation' },
          { nodeId: 'real-div-ftsz', label: 'Cleared Mid-Cell Plane', cargo: 'SlmA-free FtsZ ring assembly' }
        ]
      },
      es: {
        subtitle: 'Sistema bacteriano de segregación ParABS / oriC (PDB 6T1F)',
        simple:
          'Antes de que una bacteria se divida, pinzas [[proteicas|protein]] ParB se fijan al origen recién copiado del [[ADN|dna]] circular y siguen una ola de ParA–ATP para arrastrar cada copia del [[nucleoide|nucleoid]] hacia un polo opuesto.',
        story:
          'Los procariotas no construyen un [[huso mitótico|real-div-spindle]] eucariota, pero reparten activamente sus genomas duplicados sin dejarlo al azar. Mientras la replicación bidireccional copia el cromosoma circular de [[E. coli|real-bacterium]] desde oriC hacia ter, dímeros ParB regulados por CTP se cierran sobre sitios parS vecinos a cada origen y compactan complejos de partición asistidos por anillos MukBEF. Al estimular la hidrólisis de ParA–ATP sobre el [[nucleoide|nucleoid]], cada complejo de origen surfea el gradiente hacia polos opuestos despejando el centro para que el [[anillo Z de FtsZ|real-div-ftsz]] cierre sin guillotinar ADN.',
        blueprint: {
          role: 'Motor procariota activo de partición de orígenes cromosómicos que despeja el centro celular antes de la fisión',
          arrivesFrom: 'Horquillas bidireccionales en oriC copiando el [[nucleoide|nucleoid]] circular de 4,6 Mpb junto a ParB–CTP y ParA–ATP',
          inside: 'Pinzas deslizantes ParB reguladas por CTP unidas a sitios parS (PDB 6T1F) acopladas a un trinquete de ParA–ATP y anillos MukBEF',
          deliversTo: 'Posicionamiento en polos opuestos de ambos cromosomas bacterianos, liberando la oclusión SlmA para el [[anillo Z de FtsZ|real-div-ftsz]]',
          loop: 'ParB libera ParA–ATP detrás de su avance, creando un trinquete químico unidireccional hacia las reservas polares'
        },
        scientific:
          'Maquinaria procariota de partición genómica que integra pinzas deslizantes ParB–parS reguladas por CTP (estructura cristalina PDB 6T1F), gradientes nucleoides de la ATPasa Walker ParA y compactación SMC MukBEF en la [[fisión binaria|real-div-fission]]. Tras la replicación bidireccional iniciada por DnaA del [[ADNbc|dna]] circular (4,6 Mpb, oriC→ter), los complejos ParB–parS inducen la disociación de ParA–[[Mg²⁺|atom-mg]]–ATP migrando hacia los polos por trinquete difusivo y habilitando el anillo central de [[FtsZ|real-div-ftsz]].',
        from: [
          { nodeId: 'nucleoid', label: 'Nucleoide circular', cargo: 'ADNbc oriC→ter de 4,6 Mpb' },
          { nodeId: 'atp-synthase', label: 'Nucleótidos ATP y CTP', cargo: 'Trinquete ParA y cierre ParB' }
        ],
        to: [
          { nodeId: 'real-div-fission', label: 'Nodo Fisión binaria', cargo: 'Segregación activa de orígenes' },
          { nodeId: 'real-div-ftsz', label: 'Plano medio despejado', cargo: 'Ensamblaje FtsZ libre de SlmA' }
        ]
      }
    },

    dna_basepair: {
      en: {
        subtitle: 'Watson-Crick Base Pair & Catalytic Backbone (0.34 nm, PDB 1BNA)',
        simple:
          'At the tiniest scale of cell division, complementary A-T and G-C [[nucleotide|nucleotide]] pairs linked by hydrogen bonds and sugar-[[phosphate|phosphate]] backbones carry the exact genetic code copied in mitosis and recombined in [[meiosis|real-div-meiosis]].',
        story:
          'Every macroscopic motion in this division stage - from twenty-micrometer [[spindles|real-div-spindle]] and forty-nanometer [[condensin|real-div-condensin]] rings down to 11-nanometer [[nucleosomes|nucleosome]] - exists to safeguard this two-nanometer [[DNA|dna]] double helix and its 0.34-nanometer base-pair steps. Built from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] atoms, complementary adenine-thymine (two hydrogen bonds) and guanine-cytosine (three hydrogen bonds) rungs unzip cleanly for semi-conservative replication and snap into matching register inside [[RAD51|real-div-rad51]] filaments and [[Holliday junctions|real-div-holliday]] with catalytic [[Mg2+|atom-mg]] ions guiding every phosphodiester cut and seal.',
        blueprint: {
          role: 'Sub-nanometer atomic information unit (0.1-2.0 nm) replicated faithfully in mitosis/fission and recombined in [[meiosis|real-div-meiosis]]',
          arrivesFrom: '2.0 nm B-form [[DNA|dna]] unwound from 11 nm [[histone|histone]]-[[nucleosome|nucleosome]] spools into individual [[nucleotides|nucleotide]]',
          inside: '0.34 nm stacked Watson-Crick A-T/G-C hydrogen-bonded pairs on covalent sugar-[[phosphate|phosphate]] strands with catalytic [[Mg2+|atom-mg]] (PDB 1BNA)',
          deliversTo: 'Exact template fidelity across replication forks and exact base-by-base homology recognition during [[Holliday junction|real-div-holliday]] crossover',
          loop: 'Weak reversible H-bonds allow rapid unzipping and homology testing while covalent phosphodiester backbones preserve chromosome integrity'
        },
        scientific:
          'Atomic-resolution B-form [[dsDNA|dna]] double-helix step (Dickerson-Drew dodecamer PDB 1BNA; 2.0 nm helix diameter, 0.34 nm axial rise, ~10.5 bp/turn) composed of [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] atoms organized into antiparallel deoxyribose-[[phosphate|phosphate]] backbones and planar Watson-Crick [[nucleotide|nucleotide]] pairs (A=T two H-bonds; G-C three H-bonds). Divalent [[Mg2+|atom-mg]] ions neutralize backbone charge, coordinate Spo11 phosphodiester cleavage and polymerase catalysis, and stabilize stacked-X [[Holliday junctions|real-div-holliday]] at the bottom of the whole-to-tiniest [[cell division|real-cell-division]] hierarchy.',
        from: [
          { nodeId: 'nucleosome', label: 'Nucleosome Unwinding', cargo: '146 bp wrapped B-DNA' },
          { nodeId: 'nucleotide', label: 'DNA Nucleotides', cargo: 'A-T & G-C base chemistry' }
        ],
        to: [
          { nodeId: 'dna', label: 'B-DNA Double Helix', cargo: '2.0 nm hereditary polymer' },
          { nodeId: 'atom-mg', label: 'Catalytic Mg2+ & Atoms', cargo: 'C, H, N, O, P, Mg2+ chemistry' }
        ]
      },
      es: {
        subtitle: 'Par de bases Watson–Crick y esqueleto catalítico (0,34 nm, PDB 1BNA)',
        simple:
          'En la escala más diminuta de la división celular, pares complementarios de [[nucleótidos|nucleotide]] A–T y G–C unidos por puentes de hidrógeno y esqueletos de azúcar-[[fosfato|phosphate]] custodian el código copiado en mitosis y recombinado en [[meiosis|real-div-meiosis]].',
        story:
          'Cada movimiento macroscópico de esta escena —desde [[husos|real-div-spindle]] de veinte micrómetros y anillos de [[condensina|real-div-condensin]] hasta [[nucleosomas|nucleosome]] de 11 nanómetros— existe para proteger esta doble hélice de [[ADN|dna]] de dos nanómetros y sus peldaños de 0,34 nanómetros. Construidos con átomos de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]], los pares adenina–timina (dos puentes de hidrógeno) y guanina–citosina (tres) se abren con exactitud al replicarse y encajan base por base dentro de [[RAD51|real-div-rad51]] y [[uniones Holliday|real-div-holliday]] bajo la asistencia catalítica de iones [[Mg²⁺|atom-mg]].',
        blueprint: {
          role: 'Unidad atómica de información (0,1–2,0 nm) replicada fielmente en mitosis/fisión y recombinada en la [[meiosis|real-div-meiosis]]',
          arrivesFrom: '[[ADN|dna]] en forma B de 2,0 nm desenrollado de carretes de [[histonas|histone]] y [[nucleosomas|nucleosome]] de 11 nm en [[nucleótidos|nucleotide]]',
          inside: 'Peldaños apilados Watson–Crick A–T/G–C cada 0,34 nm sobre esqueletos azúcar-[[fosfato|phosphate]] con [[Mg²⁺|atom-mg]] catalítico (PDB 1BNA)',
          deliversTo: 'Fidelidad exacta de molde en horquillas de replicación y reconocimiento homólogo base a base en [[uniones Holliday|real-div-holliday]]',
          loop: 'Los puentes de hidrógeno reversibles permiten abrir y sondear secuencias mientras los enlaces fosfodiéster covalentes protegen la integridad'
        },
        scientific:
          'Peldaño atómico de [[ADNbc|dna]] en forma B (dodecamero Dickerson–Drew PDB 1BNA; diámetro 2,0 nm, paso axial 0,34 nm, ~10,5 pb/vuelta) compuesto por [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]] en cadenas antiparalelas de desoxirribosa–[[fosfato|phosphate]] y pares de [[nucleótidos|nucleotide]] Watson–Crick (A=T dos puentes H; G≡C tres). Los cationes [[Mg²⁺|atom-mg]] apantallan cargas negativas, coordinan la escisión fosfodiéster por Spo11 y estabilizan [[uniones Holliday|real-div-holliday]] en la base atómica de la [[división celular|real-cell-division]].',
        from: [
          { nodeId: 'nucleosome', label: 'Desenrollado nucleosomal', cargo: '146 pb de ADN-B enrollado' },
          { nodeId: 'nucleotide', label: 'Nucleótidos de ADN', cargo: 'Química de bases A–T y G–C' }
        ],
        to: [
          { nodeId: 'dna', label: 'Doble hélice ADN-B', cargo: 'Polímero hereditario de 2,0 nm' },
          { nodeId: 'atom-mg', label: 'Mg²⁺ catalítico y átomos', cargo: 'Química C, H, N, O, P, Mg²⁺' }
        ]
      }
    }
  }
};
