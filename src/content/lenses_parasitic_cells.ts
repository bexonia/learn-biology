import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) and
 * 56 Standalone Realistic Part Lenses (`mycoplasma_realistic.html`,
 * `chlamydia_realistic.html`, `rickettsia_realistic.html`) in `EN` & `ES` for
 * Stage 3: Parasitic & Minimal Cells (Phase 08).
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const PARASITIC_CELLS_NODE_LENSES: NodeLensMap = {
  'parasitic-cells-overview': {
    en: {
      simple:
        '[[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], and [[Rickettsia|real-rickettsia]] are tiny bacteria that lost the ability to make many nutrients or their own ATP, forcing them to live on or inside host cells. Even so, they are true living cells - not [[viruses|viruses]] - because each keeps a [[lipid membrane|phospholipid]], a circular [[double-stranded DNA|dna]] genome, and its own [[70S ribosomes|ribosome-70s]] to build proteins and divide in two.',
      story:
        'Because [[Chlamydia|real-chlamydia]] and [[Rickettsia|real-rickettsia]] hide inside human cells and steal energy, students often mistake them for large [[viruses|viruses]], yet looking inside settles the question immediately. Wall-less [[Mycoplasma genitalium|real-mycoplasma]] trims its genome down to 580 kilobases in a 300-nanometer flask, [[Chlamydia trachomatis|real-chlamydia]] alternates between tough spore-like elementary bodies and dividing reticulate bodies inside a host vacuole, and cytosolic [[Rickettsia prowazekii|real-rickettsia]] swims through host cytoplasm as a close evolutionary cousin of [[mitochondria|mitochondrion]]. Like a compact workshop that keeps its own [[DNA|dna]] blueprints and [[70S ribosome|ribosome-70s]] tools while plugging an Npt1/Tlc1 extension cord into the host ATP grid, all three translate their own proteins, divide by binary fission, and remain vulnerable to ribosome-blocking antibiotics that leave viruses untouched.',
      blueprint:
        'Role: Host-dependent cellular nodes shaped by reductive evolution; Inputs: Host cytosolic ATP, nucleotides, amino acids, and sterols imported across [[plasma membrane|plasma-membrane]] via Npt1/Tlc1 ATP/ADP antiporters; Inside: Intact [[phospholipid|phospholipid]] bilayer (lacking [[peptidoglycan|peptidoglycan]] in [[Mycoplasma|real-mycoplasma]]), reduced circular [[dsDNA|dna]] chromosome (0.58-1.11 Mbp), and active onboard [[70S ribosomes|ribosome-70s]] driving autonomous translation; Outputs: Daughter cells via binary fission, contrasting sharply with autonomous [[E. coli|real-bacterium]] (generates own ATP) and ribosome-free [[viruses|viruses]] (hijack host ribosomes).',
      scientific:
        'Comparative microbiology of genome-reduced obligate and facultative bacterial parasites (0.3-1.2 micrometers; 0.58-1.11 Mbp circular dsDNA vs. 4.6 Mbp in [[Escherichia coli|real-bacterium]]): (1) [[Mycoplasma genitalium|real-mycoplasma]] (Mollicutes, ~300 nm diameter, 580,076 bp encoding ~482 proteins, cholesterol-stabilized trilaminar membrane devoid of [[peptidoglycan|peptidoglycan]]); (2) [[Chlamydia trachomatis|real-chlamydia]] (Chlamydiota, 1.04 Mbp, biphasic developmental cycle between ~300 nm infectious elementary bodies and ~800-1,000 nm replicative reticulate bodies inside an inclusion vacuole); and (3) [[Rickettsia prowazekii|real-rickettsia]] (Alphaproteobacteria, 1.11 Mbp cytosolic parasite phylogenetically related to proto-[[mitochondria|mitochondrion]]). Chlamydia and Rickettsia express transmembrane Npt1/Tlc1 nucleotide translocases that import host ATP in obligate exchange for ADP + Pi, while retaining bacterial [[70S ribosomes|ribosome-70s]] sensitive to tetracyclines and macrolides.'
    },
    es: {
      simple:
        '[[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]] son bacterias diminutas que perdieron la capacidad de fabricar muchos nutrientes o su propio ATP, por lo que dependen de células huésped. Aun así, son células vivas reales —nunca [[virus|viruses]]—, pues cada una conserva su [[membrana lipídica|phospholipid]], su genoma circular de [[ADN bicatenario|dna]] y sus propios [[ribosomas 70S|ribosome-70s]] para producir proteínas y dividirse en dos.',
      story:
        'Como [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]] viven dentro de células humanas y roban energía, a menudo se las confunde con [[virus|viruses]] grandes, pero basta mirar su interior para despejar cualquier duda. [[Mycoplasma genitalium|real-mycoplasma]] prescinde de pared celular y reduce su genoma a 580 kilobases en apenas 300 nanómetros; [[Chlamydia trachomatis|real-chlamydia]] alterna entre cuerpos elementales infecciosos y cuerpos reticulados que se dividen dentro de una vacuola; y [[Rickettsia prowazekii|real-rickettsia]] vive libre en el citosol como pariente evolutiva directa de las [[mitocondrias|mitochondrion]]. Igual que un taller compacto que conserva sus planos de [[ADN|dna]] y sus herramientas de [[ribosomas 70S|ribosome-70s]] pero enchufa un alargador Npt1/Tlc1 a la red de ATP del huésped, las tres fabrican sus propias proteínas, se dividen por fisión binaria y responden a antibióticos dirigidos al ribosoma que jamás afectan a un virus.',
      blueprint:
        'Rol: Nodos celulares dependientes del huésped por evolución reductiva · Entradas: ATP citosólico, nucleótidos, aminoácidos y esteroles importados por la [[membrana plasmática|plasma-membrane]] mediante antiporters ATP/ADP Npt1/Tlc1 · Interior: Bicapa de [[fosfolípidos|phospholipid]] propia (sin [[peptidoglicano|peptidoglycan]] en [[Mycoplasma|real-mycoplasma]]), cromosoma circular reducido de [[ADNbc|dna]] (0,58–1,11 Mpb) y [[ribosomas 70S|ribosome-70s]] funcionales para traducción autónoma · Salida: Células hijas por fisión binaria, diferenciándose tanto de [[E. coli|real-bacterium]] autónoma como de los [[virus|viruses]] carentes de ribosomas.',
      scientific:
        'Microbiología comparada de bacterias parásitas con reducción genómica extrema (0,3–1,2 µm; ADNbc circular de 0,58–1,11 Mpb frente a 4,6 Mpb en [[Escherichia coli|real-bacterium]]): (1) [[Mycoplasma genitalium|real-mycoplasma]] (Mollicutes, ~300 nm, 580.076 pb con ~482 genes proteicos, membrana trilaminar rica en esteroles sin [[peptidoglicano|peptidoglycan]]); (2) [[Chlamydia trachomatis|real-chlamydia]] (Chlamydiota, 1,04 Mpb, ciclo bifásico entre cuerpos elementales de ~300 nm y cuerpos reticulados replicativos de ~800–1.000 nm dentro de una inclusión vacuolar); y (3) [[Rickettsia prowazekii|real-rickettsia]] (Alphaproteobacteria, 1,11 Mpb, parásito citosólico emparentado filogenéticamente con el ancestro de la [[mitocondria|mitochondrion]]). Chlamydia y Rickettsia expresan translocasas transmembrana Npt1/Tlc1 que importan ATP del huésped a cambio de ADP + Pi, manteniendo [[ribosomas 70S|ribosome-70s]] sensibles a tetraciclinas y macrólidos.'
    }
  },

  'real-mycoplasma': {
    en: {
      simple:
        'Mycoplasma genitalium is the smallest known self-replicating organism on Earth, packing just ~482 protein genes into a wall-less 300-nanometer flask. It clings to human airway and urogenital [[cilia|cilium]], scavenging ready-made [[cholesterol|cholesterol]] and nutrients while translating its own proteins on [[70S ribosomes|ribosome-70s]].',
      story:
        'Living full-time on warm, mucus-coated human epithelia allowed Mycoplasma genitalium to discard nearly 90 percent of the genes carried by free-living [[E. coli|real-bacterium]], including every enzyme for building a [[peptidoglycan|peptidoglycan]] cell wall. Because penicillin targets that missing wall, beta-lactam drugs pass right by harmlessly while imported host [[cholesterol|cholesterol]] stiffens the single [[phospholipid|phospholipid]] membrane against osmotic rupture. At the tapered neck of the flask, an internal [[terminal rod|real-myco-rod]] powers outer [[Nap adhesin feet|real-myco-nap]] that walk along beating [[cilia|cilium]], while inside the tiny chamber a [[580-kilobase nucleoid|real-myco-nucleoid]] feeds mRNA to ~150 [[70S ribosomes|ribosome-70s]] and glycolysis generates just enough ATP to divide in two.',
      blueprint:
        'Role: Minimal wall-less surface-parasitic bacterial cell (~300 x 600 nm); Inputs: Scavenged host [[cholesterol|cholesterol]], fatty acids, nucleosides, amino acids, and glucose across a single [[phospholipid|phospholipid]] bilayer; Inside: Polar [[terminal rod|real-myco-rod]] driving [[Nap adhesins|real-myco-nap]], [[580 kbp dsDNA nucleoid|real-myco-nucleoid]], ~150 [[70S ribosomes|ribosome-70s]], and Embden-Meyerhof glycolysis without TCA or respiratory chains; Outputs: Gliding adhesion along host [[cilia|cilium]] and daughter flasks via binary fission.',
      scientific:
        'Mollicutes minimal bacterium Mycoplasma genitalium (~300 nm body diameter x ~600 nm length; ~0.02-0.04 fL volume; 580,076 bp circular dsDNA chromosome at 31.7% GC encoding ~482 protein-coding genes and 43 structural RNAs, benchmark template for JCVI-syn3.0). Totally devoid of a [[peptidoglycan|peptidoglycan]] sacculus (intrinsically beta-lactam and glycopeptide resistant), bounded by a single ~7 nm trilaminar [[phospholipid|phospholipid]] bilayer containing ~35-50 mol% unesterified host [[cholesterol|cholesterol]]. Exhibits polarized gliding (~0.1-0.4 micrometers/s) mediated by the [[P140-P110 Nap complex|real-myco-nap]] (PDB 6RUT) and segmented [[HMW1/HMW2/P65 terminal organelle|real-myco-rod]], generating ATP exclusively via substrate-level glycolytic and pyruvate-to-acetate phosphorylation.'
    },
    es: {
      simple:
        'Mycoplasma genitalium es la célula autorreplicante más pequeña conocida en la Tierra: concentra apenas ~482 genes proteicos en un matraz sin pared de 300 nanómetros. Se aferra a los [[cilios|cilium]] humanos, toma [[colesterol|cholesterol]] y nutrientes ya listos del tejido y fabrica sus propias proteínas en [[ribosomas 70S|ribosome-70s]].',
      story:
        'Vivir permanentemente sobre epitelios humanos cálidos y húmedos permitió a Mycoplasma genitalium desprenderse de casi el 90 % de los genes que mantiene [[E. coli|real-bacterium]], incluidas todas las enzimas de la pared de [[peptidoglicano|peptidoglycan]]. Al carecer de esa muralla, las penicilinas resultan inocuas, mientras el [[colesterol|cholesterol]] capturado del huésped estabiliza su única bicapa de [[fosfolípidos|phospholipid]] frente al choque osmótico. En el cuello estrecho del matraz, un [[bastón terminal interno|real-myco-rod]] acciona [[adhesinas Nap|real-myco-nap]] que caminan sobre los [[cilios|cilium]] batientes, mientras el [[nucleoide de 580 kilobases|real-myco-nucleoid]] alimenta ~150 [[ribosomas 70S|ribosome-70s]] y la glucólisis produce el ATP justo para dividirse.',
      blueprint:
        'Rol: Célula bacteriana parásita mínima sin pared celular (~300 × 600 nm) · Entradas: [[Colesterol|cholesterol]], ácidos grasos, nucleósidos, aminoácidos y glucosa del huésped a través de una sola bicapa de [[fosfolípidos|phospholipid]] · Interior: [[Bastón terminal|real-myco-rod]] acoplado a [[adhesinas Nap|real-myco-nap]], [[nucleoide de ADNbc de 580 kpb|real-myco-nucleoid]], ~150 [[ribosomas 70S|ribosome-70s]] y glucólisis sin ciclo de Krebs ni cadena respiratoria · Salida: Deslizamiento polar sobre [[cilios|cilium]] epiteliales y fisión binaria.',
      scientific:
        'Bacteria mínima de la clase Mollicutes Mycoplasma genitalium (~300 nm de diámetro × ~600 nm de longitud; volumen ~0,02–0,04 fL; cromosoma circular de ADNbc de 580.076 pb con 31,7 % GC, ~482 genes proteicos y 43 genes de ARN, referencia base de JCVI-syn3.0). Carece por completo de [[peptidoglicano|peptidoglycan]] (resistencia intrínseca a β-lactámicos y glucopéptidos) y está delimitada por una única bicapa trilaminar (~7 nm) enriquecida con ~35–50 % molar de [[colesterol|cholesterol]] del huésped. Desarrolla movilidad deslizante polar (~0,1–0,4 µm/s) mediante el complejo [[Nap P140–P110|real-myco-nap]] (PDB 6RUT) y el [[orgánulo terminal HMW1/HMW2/P65|real-myco-rod]], sintetizando ATP exclusivamente por fosforilación a nivel de sustrato glucolítica y acetato quinasa.'
    }
  },

  'real-myco-nap': {
    en: {
      simple:
        'Clustered tightly around the nose of [[Mycoplasma genitalium|real-mycoplasma]], crown-shaped Nap adhesin complexes grab sugar-coated receptors on human [[cilia|cilium]] so mucus flow cannot sweep the bacterium away.',
      story:
        'Airway and urogenital epithelia beat thousands of [[cilia|cilium]] in unison to clear microbes out of the body within minutes, so [[Mycoplasma genitalium|real-mycoplasma]] concentrates hundreds of P140-P110 Nap towers right at its leading tip. Each heterodimer reaches ~20 nanometers out from the [[cholesterol|cholesterol]]-stiffened [[membrane|phospholipid]] so its P110 crown can catch sialic-acid sugars branching off the ciliary surface. Driven from underneath by the [[internal terminal rod|real-myco-rod]], individual Nap feet alternate between open receptor-catching and closed release states to inch the flask forward while periodically shuffling gene fragments to evade host antibodies.',
      blueprint:
        'Role: Polar sialylated-oligosaccharide adhesin and gliding foot complex; Inputs: Mechanical force from the [[internal terminal rod|real-myco-rod]] across the [[phospholipid|phospholipid]] bilayer and sialylated glycans on host [[cilia|cilium]]; Inside: Heterodimeric P140-P110 (MgpB-MgpC) ectodomain crowns cycling between open sialic-acid-binding and closed conformations; Outputs: Persistent mucosal tethering, catch-and-pull gliding traction, and antigenic variation.',
      scientific:
        'Extracellular Nap attachment complex of [[Mycoplasma genitalium|real-mycoplasma]] (~20 nm projection; cryo-EM and X-ray heterodimer PDB 6RUT closed state, PDB 6RUV/6RUW open states, P110 sialyllactose complex PDB 6RC9). Assembled as dimers of heterodimers (two 160 kDa MgpB/P140 + two 114 kDa MgpC/P110 subunits) anchored via C-terminal transmembrane helices coupled to the intracellular [[terminal organelle|real-myco-rod]]. P110 potassium-stabilized beta-propeller/crown pockets bind alpha-2,3- and alpha-2,6-sialylated host glycoproteins on [[cilia|cilium]], while RecA-mediated homologous recombination with nine chromosomal MgPa repeat islands generates surface antigenic diversity.'
    },
    es: {
      simple:
        'Agrupados densamente en la punta de [[Mycoplasma genitalium|real-mycoplasma]], los complejos adhesivos Nap con forma de corona sujetan azúcares superficiales de los [[cilios|cilium]] humanos para evitar que el flujo de moco arrastre a la bacteria.',
      story:
        'Los epitelios respiratorios y urogenitales baten miles de [[cilios|cilium]] coordinados para expulsar intrusos en minutos, por lo que [[Mycoplasma genitalium|real-mycoplasma]] concentra cientos de torres Nap P140–P110 en su polo delantero. Cada heterodímero sobresale ~20 nanómetros desde la [[membrana|phospholipid]] reforzada con [[colesterol|cholesterol]] para atrapar residuos de ácido siálico sobre el cilio. Impulsados desde el interior por el [[bastón terminal|real-myco-rod]], los pies Nap alternan entre conformaciones abiertas de captura y cerradas de liberación para hacer avanzar el matraz mientras recombinan fragmentos génicos para esquivar anticuerpos.',
      blueprint:
        'Rol: Complejo polar de adhesión a oligosacáridos sialilados y pie de deslizamiento · Entradas: Tracción mecánica del [[bastón terminal interno|real-myco-rod]] a través de la bicapa de [[fosfolípidos|phospholipid]] y glicanos sialilados de [[cilios|cilium]] · Interior: Coronas heterodiméricas P140–P110 (MgpB–MgpC) que alternan entre estados abiertos de unión a ácido siálico y estados cerrados · Salida: Anclaje mucoso persistente, propulsión deslizante y variación antigénica.',
      scientific:
        'Complejo extracelular de adhesión Nap de [[Mycoplasma genitalium|real-mycoplasma]] (~20 nm de proyección externa; estructuras cristalográficas y crio-EM PDB 6RUT estado cerrado, PDB 6RUV/6RUW estados abiertos y dominio P110 unido a sialil-lactosa PDB 6RC9). Organizado como tetrámeros (dos subunidades MgpB/P140 de 160 kDa + dos MgpC/P110 de 114 kDa) con hélices transmembrana C-terminales acopladas al [[orgánulo terminal|real-myco-rod]]. El bolsillo de P110 reconoce glicoconjugados α-2,3 y α-2,6-sialilados en [[cilios|cilium]], mientras la recombinación homóloga dependiente de RecA con nueve islas repetidas MgPa diversifica los epítopos expuestos.'
    }
  },

  'real-myco-rod': {
    en: {
      simple:
        'Even without a cell wall, [[Mycoplasma genitalium|real-mycoplasma]] builds a stiff internal protein skeleton inside its narrow neck that braces the front tip, drives surface gliding, and pulls copied chromosomes apart.',
      story:
        'A wall-less lipid bag would normally collapse into a featureless sphere, yet [[Mycoplasma genitalium|real-mycoplasma]] maintains a polarized flask shape thanks to a ~280-nanometer protein core running down its neck. Up front, an electron-dense terminal button welds the tip membrane behind the [[Nap adhesin crown|real-myco-nap]]; down the middle, paired coiled-coil HMW2 girders form a segmented rod; and at the base, a wheel-like bowl complex converts glycolytic ATP into rapid conformational strokes. Those strokes push and pull transmembrane linkages to walk across [[cilia|cilium]] and tether duplicated [[580-kilobase chromosomes|real-myco-nucleoid]] to opposite poles before cell division.',
      blueprint:
        'Role: Asymmetric intracellular cytoskeletal rod, gliding force transmission shaft, and chromosome-segregation anchor; Inputs: Cytosolic ATP from glycolysis and newly translated HMW1/HMW2/HMW3/P65 subunits from [[70S ribosomes|ribosome-70s]]; Inside: Distal P65/P32 terminal button, central segmented HMW2 coiled-coil paired rod braced by HMW1/HMW3, and proximal TopJ/MG_200 bowl motor wheel; Outputs: Mechanical strokes delivered to [[Nap adhesins|real-myco-nap]] and polar positioning of daughter [[nucleoids|real-myco-nucleoid]].',
      scientific:
        'Cryo-electron tomography architecture of the [[Mycoplasma genitalium|real-mycoplasma]] terminal organelle cytoskeleton (~280-300 nm axial length, ~11 protein components encoded in the MG_217-MG_218 and MG_312-MG_318 operons). Comprises three tandem modules: (1) a distal terminal button (MG_217/P65 + MG_318/P32) juxtaposed against the inner [[phospholipid|phospholipid]] leaflet; (2) a segmented paired electron-dense rod built from parallel coiled-coil dimers of MG_218 (HMW2, ~215 kDa) decorated by MG_312 (HMW1) and MG_317 (HMW3); and (3) a proximal wheel/bowl complex containing J-domain chaperone MG_200 (TopJ) that couples ATP hydrolysis to ~0.1-0.4 micrometers/s [[Nap|real-myco-nap]] gliding and nascent pole duplication prior to cytokinesis.'
    },
    es: {
      simple:
        'Aun sin pared celular, [[Mycoplasma genitalium|real-mycoplasma]] ensambla un esqueleto proteico rígido dentro de su cuello estrecho que sostiene la punta, impulsa el deslizamiento y ayuda a repartir los cromosomas hijos.',
      story:
        'Una vesícula lipídica sin pared tendería a redondearse sin rumbo, pero [[Mycoplasma genitalium|real-mycoplasma]] conserva su silueta de matraz gracias a un eje proteico de ~280 nanómetros alojado en su cuello. En el extremo frontal, un botón terminal denso afirma la membrana tras las [[coronas Nap|real-myco-nap]]; en el tramo central, dímeros superenrollados HMW2 levantan un bastón segmentado; y en la base, un complejo en rueda transforma el ATP glucolítico en impulsos mecánicos. Esos impulsos mueven los anclajes transmembrana sobre los [[cilios|cilium]] y amarran los [[cromosomas duplicados|real-myco-nucleoid]] hacia polos opuestos antes de la división.',
      blueprint:
        'Rol: Citoesqueleto polar interno, eje transmisor de deslizamiento y anclaje de segregación cromosómica · Entradas: ATP citosólico de la glucólisis y subunidades HMW1/HMW2/HMW3/P65 recién traducidas en [[ribosomas 70S|ribosome-70s]] · Interior: Botón terminal distal P65/P32, bastón doble segmentado de hélices HMW2 estabilizado por HMW1/HMW3 y rueda basal motora TopJ/MG_200 · Salida: Tracción mecánica hacia [[adhesinas Nap|real-myco-nap]] y posicionamiento polar de [[nucleoides|real-myco-nucleoid]] hijos.',
      scientific:
        'Arquitectura por criotomografía electrónica del citoesqueleto del orgánulo terminal de [[Mycoplasma genitalium|real-mycoplasma]] (~280–300 nm de longitud axial; ~11 proteínas estructurales de los operones MG_217–MG_218 y MG_312–MG_318). Reúne tres módulos en serie: (1) botón terminal distal (MG_217/P65 + MG_318/P32) anclado bajo la hoja interna de [[fosfolípidos|phospholipid]]; (2) bastón doble segmentado de dímeros coiled-coil de MG_218 (HMW2, ~215 kDa) revestido por MG_312 (HMW1) y MG_317 (HMW3); y (3) complejo basal en cuenco/rueda con la chaperona de dominio J MG_200 (TopJ) que acopla el gasto de ATP al deslizamiento [[Nap|real-myco-nap]] (~0,1–0,4 µm/s) y a la duplicación polar previa a la citocinesis.'
    }
  },

  'real-myco-nucleoid': {
    en: {
      simple:
        'Inside [[Mycoplasma genitalium|real-mycoplasma]] sits a single 580,000-letter ring of [[DNA|dna]] - smaller than some giant viruses, yet able to run a complete living cell using its own [[RNA polymerase|rna-polymerase]] and [[70S ribosomes|ribosome-70s]].',
      story:
        'Compare this open cytoplasmic core to a [[virus|viruses]] and the boundary of cellular life becomes unmistakable: although giant viruses carry more DNA letters, none can translate a single protein on their own, whereas [[Mycoplasma genitalium|real-mycoplasma]] runs a self-contained genetic workshop on just 482 protein genes. Histone-like HU dimers bend the circular [[double-stranded DNA|dna]] loop so it fits inside the 300-nanometer flask without tangling. Because Mycoplasma stripped away auxiliary regulators down to one housekeeping sigma factor, [[RNA polymerase|rna-polymerase]] transcribes multi-gene [[mRNA|rna]] operons that waiting [[70S ribosomes|ribosome-70s]] translate immediately into glycolytic enzymes, membrane importers, and [[gliding rod|real-myco-rod]] parts.',
      blueprint:
        'Role: Minimal autonomous cellular genome, transcription, and coupled 70S translation core; Inputs: Imported host nucleosides phosphorylated via salvage kinases, scavenged amino acids, and glycolytic ATP; Inside: Circular 580,076 bp [[dsDNA|dna]] compacted by HU dimers, single-sigma [[RNA polymerase|rna-polymerase]] producing polycistronic [[mRNA|rna]], and ~150 bacterial [[70S ribosomes|ribosome-70s]]; Outputs: Complete ~482-protein minimal proteome sustaining membrane homeostasis, [[terminal rod|real-myco-rod]] assembly, and binary fission.',
      scientific:
        'Minimal cellular genetic system of [[Mycoplasma genitalium|real-mycoplasma]] G37 (580,076 bp circular [[dsDNA|dna]], 31.7% GC, ~197 micrometers contour length compacted >500-fold by MG_353 HU-family dimers and DNA gyrase; 482 protein-coding genes plus single 16S-23S-5S rRNA operon and 36 tRNAs decoding UGA as tryptophan rather than stop). Transcription relies on core bacterial [[RNA polymerase|rna-polymerase]] paired with a single sigma-70 factor (SigA/MG_249), feeding co-transcriptional translation across ~140-180 cytoplasmic [[70S ribosomes|ribosome-70s]] (~2.3 MDa, susceptible to macrolides and tetracyclines). Served as the natural foundation for the 473-gene synthetic minimal cell JCVI-syn3.0.'
    },
    es: {
      simple:
        'En el centro de [[Mycoplasma genitalium|real-mycoplasma]] se pliega un único anillo de [[ADN|dna]] de 580.000 letras: más pequeño que algunos virus gigantes, pero capaz de sostener una célula viva completa con su propia [[ARN polimerasa|rna-polymerase]] y sus [[ribosomas 70S|ribosome-70s]].',
      story:
        'Comparar este núcleo abierto con un [[virus|viruses]] aclara al instante dónde empieza la vida celular: aunque ciertos virus gigantes acumulan más letras genéticas, ninguno traduce una sola proteína por sí mismo, mientras [[Mycoplasma genitalium|real-mycoplasma]] mantiene un taller autónomo con apenas 482 genes proteicos. Dímeros tipo histona HU curvan el aro de [[ADN bicatenario|dna]] para alojarlo sin nudos dentro del matraz de 300 nanómetros. Con un único factor sigma doméstico conservado tras la reducción evolutiva, la [[ARN polimerasa|rna-polymerase]] transcribe operones de [[ARNm|rna]] que ~150 [[ribosomas 70S|ribosome-70s]] traducen al vuelo en enzimas glucolíticas, transportadores y piezas del [[bastón terminal|real-myco-rod]].',
      blueprint:
        'Rol: Núcleo genómico mínimo autónomo con transcripción y traducción acoplada 70S · Entradas: Nucleósidos del huésped fosforilados por vías de rescate, aminoácidos importados y ATP glucolítico · Interior: [[ADNbc|dna]] circular de 580.076 pb compactado por HU, [[ARN polimerasa|rna-polymerase]] con un solo factor sigma generando [[ARNm|rna]] policistrónico y ~150 [[ribosomas 70S|ribosome-70s]] · Salida: Proteoma mínimo de ~482 proteínas para homeostasis de membrana, [[bastón terminal|real-myco-rod]] y fisión binaria.',
      scientific:
        'Sistema genético celular mínimo de [[Mycoplasma genitalium|real-mycoplasma]] cepa G37 (cromosoma circular de [[ADNbc|dna]] de 580.076 pb, 31,7 % GC, ~197 µm de longitud lineal compactada >500 veces por dímeros HU MG_353 y ADN girasa; 482 genes codificantes más un único operón rRNA 16S–23S–5S y 36 ARNt que reasignan el codón UGA a triptófano). La transcripción opera con [[ARN polimerasa|rna-polymerase]] bacteriana y un único factor sigma doméstico (SigA/MG_249), acoplada directamente a ~140–180 [[ribosomas 70S|ribosome-70s]] (~2,3 MDa, sensibles a macrólidos y tetraciclinas). Base experimental directa de la célula mínima sintética JCVI-syn3.0 (473 genes).'
    }
  },

  'real-chlamydia': {
    en: {
      simple:
        'Chlamydia trachomatis is an obligate intracellular bacterium that hides inside a custom-built membrane bubble within a human [[host cell|real-cell]]. Inside that shelter it switches between tough spore-like [[Elementary Bodies|real-chlam-eb]] that spread infection and larger [[Reticulate Bodies|real-chlam-rb]] that import host ATP via [[Npt1|real-chlam-npt1]] to divide.',
      story:
        'Once mistaken for a virus because it cannot grow on nutrient agar outside [[eukaryotic cells|real-cell]], Chlamydia trachomatis solves intracellular survival by splitting its life across two specialized cellular forms inside a remodeled vacuole called an inclusion. Outside the cell, a compact 300-nanometer [[Elementary Body|real-chlam-eb]] wears disulfide-locked protein armor and fires Type III Secretion needles to slip indoors and block [[lysosome|lysosome]] destruction. Inside the inclusion, Inc proteins reroute lipid-rich vesicles from the host [[Golgi|golgi]] while the bacterium expands into a 1-micrometer [[Reticulate Body|real-chlam-rb]] that trades spent ADP for host ATP across [[Npt1 translocases|real-chlam-npt1]], builds proteins on [[70S ribosomes|ribosome-70s]], divides repeatedly, and condenses back into hundreds of infectious Elementary Bodies.',
      blueprint:
        'Role: Biphasic obligate intracellular bacterial energy parasite inside an epithelial inclusion vacuole; Inputs: Host cytosolic ATP/GTP via [[Npt1|real-chlam-npt1]]/Npt2, plus sphingomyelin and [[cholesterol|cholesterol]] vesicles intercepted from host [[Golgi|golgi]]; Inside: Inc-shielded inclusion membrane avoiding [[lysosome|lysosome]] fusion, housing ~300 nm infectious [[Elementary Bodies|real-chlam-eb]] and ~1 micrometer dividing [[Reticulate Bodies|real-chlam-rb]] with 1.04 Mbp [[dsDNA|dna]] and [[70S ribosomes|ribosome-70s]]; Outputs: 200-1,000 progeny Elementary Bodies released by host lysis or extrusion.',
      scientific:
        'Chlamydiota obligate intracellular pathogen Chlamydia trachomatis (1,042,519 bp circular [[dsDNA|dna]] chromosome encoding ~895 ORFs plus 7.5 kb virulence plasmid pCT) developing within a non-acidified, Rab/SNARE-remodeled parasitophorous inclusion inside human mucosal [[epithelial cells|real-cell]]. Executes a 48-72 h biphasic cycle: extracellular disulfide-crosslinked [[Elementary Bodies|real-chlam-eb]] (~300 nm, Hc1/Hc2-condensed nucleoid, polar T3SS) differentiate within 2-8 h into metabolically active [[Reticulate Bodies|real-chlam-rb]] (~800-1,000 nm) that import host ATP via [[Npt1Ct|real-chlam-npt1]], hijack [[Golgi|golgi]]-derived sphingolipids via IncD-CERT contacts while evading [[lysosomes|lysosome]], divide via MreB-guided septal rings (~2-3 h doubling), and redifferentiate into infectious EBs.'
    },
    es: {
      simple:
        'Chlamydia trachomatis es una bacteria intracelular obligada que se refugia dentro de una vacuola modificada en el interior de una [[célula humana|real-cell]]. Allí alterna entre [[Cuerpos Elementales|real-chlam-eb]] resistentes que transmiten la infección y [[Cuerpos Reticulados|real-chlam-rb]] mayores que importan ATP mediante [[Npt1|real-chlam-npt1]] para dividirse.',
      story:
        'Confundida durante décadas con un virus por no crecer fuera de [[células eucariotas|real-cell]], Chlamydia trachomatis reparte su ciclo vital entre dos formas celulares complementarias dentro de una vacuola protectora llamada inclusión. Fuera del huésped, el [[Cuerpo Elemental|real-chlam-eb]] de 300 nanómetros viste una coraza proteica sellada por puentes disulfuro y dispara agujas de secreción tipo III para entrar y frenar a los [[lisosomas|lysosome]]. Ya dentro, las proteínas Inc desvían vesículas lipídicas del [[aparato de Golgi|golgi]] mientras la bacteria se expande en un [[Cuerpo Reticulado|real-chlam-rb]] de 1 micrómetro que cambia ADP gastado por ATP humano en las [[translocasas Npt1|real-chlam-npt1]], traduce proteínas en [[ribosomas 70S|ribosome-70s]], se multiplica y vuelve a condensarse en cientos de Cuerpos Elementales.',
      blueprint:
        'Rol: Bacteria parásita energética intracelular obligada de ciclo bifásico en vacuola de inclusión · Entradas: ATP y NTP citosólicos del huésped vía [[Npt1|real-chlam-npt1]]/Npt2, más esfingomielina y [[colesterol|cholesterol]] desviados del [[Golgi|golgi]] · Interior: Membrana de inclusión blindada con proteínas Inc frente a [[lisosomas|lysosome]], alojando [[Cuerpos Elementales|real-chlam-eb]] (~300 nm) y [[Cuerpos Reticulados|real-chlam-rb]] replicativos (~1 µm) con [[ADNbc|dna]] de 1,04 Mpb y [[ribosomas 70S|ribosome-70s]] · Salida: 200–1.000 Cuerpos Elementales infecciosos liberados por lisis o extrusión.',
      scientific:
        'Patógeno intracelular obligado del filo Chlamydiota Chlamydia trachomatis (cromosoma circular de [[ADNbc|dna]] de 1.042.519 pb con ~895 ORF más plásmido críptico de virulencia pCT de 7,5 kb) establecido dentro de una inclusión parasitófora no acidificada en [[células epiteliales|real-cell]] humanas. Completa un ciclo bifásico de 48–72 h: los [[Cuerpos Elementales|real-chlam-eb]] extracelulares (~300 nm, envoltura entrecruzada por disulfuros MOMP/OmcB y nucleoide condensado por Hc1/Hc2) germinan en 2–8 h hacia [[Cuerpos Reticulados|real-chlam-rb]] (~800–1.000 nm) que importan ATP vía [[Npt1Ct|real-chlam-npt1]], capturan lípidos del [[Golgi|golgi]] mediante contactos IncD–CERT evitando [[lisosomas|lysosome]], se dividen con anillos de MreB (~2–3 h/generación) y rediferencian a CE.'
    }
  },

  'real-chlam-eb': {
    en: {
      simple:
        'The Elementary Body is [[Chlamydia|real-chlamydia]] in tough courier mode: a 300-nanometer dormant cell locked inside disulfide-bonded protein armor and armed with Type III Secretion needles that trigger entry into a new [[host cell|real-cell]].',
      story:
        'Without a conventional thick [[peptidoglycan|peptidoglycan]] wall, [[Chlamydia trachomatis|real-chlamydia]] survives transit between hosts by cross-linking cysteine-rich MOMP, OmcA, and OmcB outer-membrane proteins into a rigid disulfide cage while histone-like Hc1 dimers clamp its [[1.04-megabase DNA|dna]] shut. Bristling from one hemisphere of this dormant sphere sit 10 to 20 pre-loaded Type III Secretion System injectisomes. Upon touching a human mucosal [[cell membrane|phospholipid]], those hollow needles punch across the bilayer and inject TarP effectors that bundle host [[actin filaments|actin-filament]] into an entry cup, pulling the bacterium into a nascent inclusion where disulfide reduction awakens it into a dividing [[Reticulate Body|real-chlam-rb]].',
      blueprint:
        'Role: Osmotically rigid extracellular infectious courier and Type III effector-injection stage; Inputs: Pre-packed cytoplasmic effectors (TarP, Inc precursors), Hc1/Hc2-condensed [[dsDNA|dna]], and contact with host mucosal [[phospholipid|phospholipid]] membrane; Inside: Disulfide-crosslinked MOMP/OmcA/OmcB outer envelope plus polarized T3SS basal-ring and CdsF needle array; Outputs: Translocates TarP to polymerize host [[actin filaments|actin-filament]] for uptake, evades [[lysosomes|lysosome]], and germinates into [[Reticulate Bodies|real-chlam-rb]].',
      scientific:
        'Infectious Chlamydia trachomatis Elementary Body (~300 nm diameter) stabilized against extracellular osmotic lysis by an extensively disulfide-crosslinked outer-membrane supramolecular complex (~60% trimeric 40 kDa MOMP/OmpA porin plus periplasmic cysteine-rich 60 kDa OmcB and 9 kDa OmcA lipoproteins) over an Hc1 (HctA, 18 kDa) and Hc2 (HctB) nucleoprotein-condensed [[dsDNA|dna]] core. Displays a polarized patch of 10-20 Type III Secretion System (T3SS) injectisomes (~65 nm trans-envelope span, CdsF needle, CT584 tip, CopB/CopD translocon) that translocate TarP (CT456; WH2 actin-binding helix PDB 4APO) to nucleate host [[F-actin|actin-filament]] and initiate inclusion biogenesis.'
    },
    es: {
      simple:
        'El Cuerpo Elemental es [[Chlamydia|real-chlamydia]] en modo mensajero blindado: una célula latente de 300 nanómetros cerrada por puentes disulfuro y armada con agujas de secreción tipo III que fuerzan su entrada en una nueva [[célula huésped|real-cell]].',
      story:
        'Sin recurrir a un saco grueso clásico de [[peptidoglicano|peptidoglycan]], [[Chlamydia trachomatis|real-chlamydia]] resiste el viaje entre huéspedes entrelazando proteínas ricas en cisteína —MOMP, OmcA y OmcB— en una jaula rígida de puentes disulfuro mientras proteínas tipo histona Hc1 silencian su [[ADN de 1,04 megabases|dna]]. De un polo de esta esfera latente asoman entre 10 y 20 inyectisomas precargados del sistema de secreción tipo III. Al tocar la [[membrana celular|phospholipid]] humana, las agujas perforan la bicapa e inyectan el efector TarP, que recluta [[filamentos de actina|actin-filament]] para envolver a la bacteria en una vacuola naciente donde la reducción de disulfuros la despierta como [[Cuerpo Reticulado|real-chlam-rb]].',
      blueprint:
        'Rol: Fase infecciosa extracelular osmóticamente rígida e inyectora de efectores tipo III · Entradas: Efectores preempaquetados (TarP, precursores Inc), [[ADNbc|dna]] condensado por Hc1/Hc2 y contacto con la bicapa de [[fosfolípidos|phospholipid]] epitelial · Interior: Envoltura externa MOMP/OmcA/OmcB reticulada por disulfuros y batería polar de agujas T3SS CdsF · Salida: Inyecta TarP para polimerizar [[filamentos de actina|actin-filament]], bloquea [[lisosomas|lysosome]] y germina en [[Cuerpo Reticulado|real-chlam-rb]].',
      scientific:
        'Cuerpo Elemental infeccioso de Chlamydia trachomatis (~300 nm de diámetro) estabilizado frente a la lisis osmótica extracelular mediante el complejo externo entrecruzado por puentes disulfuro (~60 % porina trimérica MOMP/OmpA de 40 kDa más lipoproteínas periplásmicas ricas en cisteína OmcB de 60 kDa y OmcA de 9 kDa) sobre un núcleo de [[ADNbc|dna]] hipercondensado por Hc1 (HctA, 18 kDa) y Hc2 (HctB). Exhibe un parche polar de 10–20 inyectisomas T3SS (~65 nm de longitud, aguja CdsF, punta CT584 y translocón CopB/CopD) que inyectan TarP (CT456; hélice WH2 de unión a actina PDB 4APO) para polimerizar [[actina F|actin-filament]] cortical e iniciar la inclusión.'
    }
  },

  'real-chlam-rb': {
    en: {
      simple:
        'Protected inside the host inclusion, the [[Elementary Body|real-chlam-eb]] swells into a 1-micrometer Reticulate Body that unpacks its [[DNA|dna]], runs [[70S ribosomes|ribosome-70s]] at full speed, and divides using an MreB protein ring.',
      story:
        'Safe inside the non-lysosomal [[inclusion vacuole|real-chlamydia]], disulfide bonds in the outer armor are reduced so MOMP pores widen and the cell expands nearly thirty-fold in volume. Isoprenoid metabolites pry Hc1 clamps off the [[1.04-megabase chromosome|dna]], allowing [[RNA polymerase|rna-polymerase]] and abundant [[70S ribosomes|ribosome-70s]] to flood the cytoplasm with fresh proteins powered by [[Npt1-imported ATP|real-chlam-npt1]]. For decades scientists wondered why penicillin stalls Chlamydia division even though its genome lacks FtsZ and whole-cell walls; high-resolution imaging revealed that actin-like MreB filaments lay down a fleeting, ultra-narrow [[peptidoglycan|peptidoglycan]] ring solely at the division septum to pinch each Reticulate Body in two.',
      blueprint:
        'Role: Metabolically active intracellular replicative cell inside the inclusion lumen; Inputs: Host ATP and NTPs imported via [[Npt1|real-chlam-npt1]]/Npt2, scavenged amino acids, and [[Golgi|golgi]]-derived lipids from the inclusion wall; Inside: Relaxed MOMP outer membrane, decondensed 1.04 Mbp [[dsDNA|dna]], active [[RNA polymerase|rna-polymerase]], dense [[70S ribosomes|ribosome-70s]], and FtsZ-free MreB + septal [[peptidoglycan|peptidoglycan]] division ring; Outputs: Exponential daughter RBs (~2-3 h doubling) that asynchronously redifferentiate into [[Elementary Bodies|real-chlam-eb]].',
      scientific:
        'Replicative Chlamydia trachomatis Reticulate Body (~800-1,000 nm diameter) residing within the [[inclusion lumen|real-chlamydia]]. Reduction of MOMP/OmcB disulfides restores outer-membrane fluidity and porin permeability, while MEP-pathway synthesis of 2-C-methyl-D-erythritol 2,4-cyclodiphosphate dissociates Hc1/Hc2 from [[dsDNA|dna]] to initiate transcription by [[RNA polymerase|rna-polymerase]] and translation on [[70S ribosomes|ribosome-70s]] (inhibited clinically by azithromycin and doxycycline). Lacking ftsZ, RBs execute polarized division driven by polymerized MreB filaments (homolog PDB 4CZJ) scaffolding PBP2/PBP3 synthesis of a transient septal [[peptidoglycan|peptidoglycan]] ring whose inhibition by beta-lactams induces enlarged aberrant persistent bodies.'
    },
    es: {
      simple:
        'Protegido dentro de la inclusión celular, el [[Cuerpo Elemental|real-chlam-eb]] se expande hasta formar un Cuerpo Reticulado de 1 micrómetro que despliega su [[ADN|dna]], activa a fondo sus [[ribosomas 70S|ribosome-70s]] y se divide mediante un anillo de MreB.',
      story:
        'A salvo dentro de la [[vacuola de inclusión|real-chlamydia]], los puentes disulfuro del blindaje externo se reducen para abrir los poros MOMP y multiplicar casi treinta veces el volumen celular. Pequeños metabolitos isoprenoides sueltan las abrazaderas Hc1 del [[cromosoma de 1,04 megabases|dna]], dejando vía libre a la [[ARN polimerasa|rna-polymerase]] y a densos [[ribosomas 70S|ribosome-70s]] abastecidos por el [[ATP importado en Npt1|real-chlam-npt1]]. Durante décadas intrigó por qué la penicilina frena la división de Chlamydia pese a carecer de FtsZ y de pared continua: filamentos proteicos MreB tienden un finísimo anillo transitorio de [[peptidoglicano|peptidoglycan]] exclusivamente en el tabique de corte para estrangular cada Cuerpo Reticulado en dos.',
      blueprint:
        'Rol: Fase replicativa intracelular metabólicamente activa en el lumen de la inclusión · Entradas: ATP y NTP humanos vía [[Npt1|real-chlam-npt1]]/Npt2, aminoácidos y lípidos del [[Golgi|golgi]] incorporados a través de la inclusión · Interior: Membrana externa MOMP reducida, [[ADNbc|dna]] descondensado de 1,04 Mpb, [[ARN polimerasa|rna-polymerase]], [[ribosomas 70S|ribosome-70s]] y anillo divisional de MreB + [[peptidoglicano|peptidoglycan]] septal sin FtsZ · Salida: Multiplicación exponencial (~2–3 h/duplicación) y posterior condensación en [[Cuerpos Elementales|real-chlam-eb]].',
      scientific:
        'Cuerpo Reticulado replicativo de Chlamydia trachomatis (~800–1.000 nm de diámetro) alojado en el [[lumen de la inclusión|real-chlamydia]]. La reducción de disulfuros en MOMP/OmcB restablece la permeabilidad externa, mientras el intermediario isoprenoide 2-C-metil-D-eritritol 2,4-ciclodifosfato libera Hc1/Hc2 del [[ADNbc|dna]] activando la transcripción por [[ARN polimerasa|rna-polymerase]] y la síntesis proteica en [[ribosomas 70S|ribosome-70s]] (diana clínica de azitromicina y doxiciclina). En ausencia de ftsZ, la división polar depende de filamentos de MreB (homólogo PDB 4CZJ) que dirigen a PBP2/PBP3 para sintetizar un anillo septal transitorio de [[peptidoglicano|peptidoglycan]] sensible a β-lactámicos.'
    }
  },

  'real-chlam-npt1': {
    en: {
      simple:
        'Embedded in the [[Reticulate Body|real-chlam-rb]] inner membrane, the Npt1 transporter steals charged ATP molecules straight from the [[host cell|real-cell]] and hands back spent ADP in a strict one-for-one swap.',
      story:
        'Rather than maintaining the sprawling respiratory complexes that power free-living [[E. coli|real-bacterium]], [[Chlamydia trachomatis|real-chlamydia]] taps directly into the ATP rich cytoplasm produced by host [[mitochondria|mitochondrion]]. Host ATP diffuses across porous channels in the inclusion and outer bacterial membranes until it reaches Npt1, a twelve-helix rocker-switch antiporter in the [[Reticulate Body|real-chlam-rb]] inner membrane. Like swapping a drained battery for a freshly charged one at a counter, Npt1 pulls one host ATP4- inward only when it pushes one spent bacterial ADP3- outward, while neighboring Npt2 symporters haul in GTP, CTP, and UTP to feed [[RNA polymerase|rna-polymerase]] and [[70S ribosomes|ribosome-70s]].',
      blueprint:
        'Role: Inner-membrane obligate 1:1 ATP/ADP nucleotide antiporter (energy-parasitism hub); Inputs: Host cytosolic ATP synthesized by host [[mitochondria|mitochondrion]] diffusing into the [[inclusion|real-chlamydia]] periplasm, paired with spent bacterial ADP; Inside: Twelve-transmembrane-helix Npt1Ct rocker-switch carrier alongside H+-coupled Npt2Ct NTP symporter in the [[phospholipid|phospholipid]] inner membrane; Outputs: Charged cytoplasmic ATP and NTPs powering [[Reticulate Body|real-chlam-rb]] [[RNA|rna]] synthesis, [[70S ribosomes|ribosome-70s]], and MreB division, while returning ADP to host cytosol.',
      scientific:
        'Chlamydia trachomatis non-mitochondrial nucleotide transporter Npt1Ct (Tlcc1, ~58 kDa, 12 transmembrane alpha-helices, NTT/SLC35-like major facilitator fold shared horizontally with Rickettsiales and plant plastids). Catalyzes electroneutral-compensated obligate 1:1 counter-exchange of incoming host ATP4- (Km ~20-48 micromolar) for outgoing bacterial ADP3- across the [[Reticulate Body|real-chlam-rb]] cytoplasmic [[phospholipid|phospholipid]] bilayer, Evolutionarily distinct from eukaryotic [[mitochondrial|mitochondrion]] AAC/ANT carriers (which export ATP outward). Operates in tandem with proton-driven Npt2Ct importing GTP, CTP, UTP, and ATP (Km ~5-15 micromolar) to supply ribonucleotides absent de novo synthesis.'
    },
    es: {
      simple:
        'Incrustado en la membrana interna del [[Cuerpo Reticulado|real-chlam-rb]], el transportador Npt1 captura moléculas cargadas de ATP de la [[célula huésped|real-cell]] y devuelve ADP gastado en un intercambio estricto uno por uno.',
      story:
        'En lugar de sostener toda la maquinaria respiratoria autónoma de [[E. coli|real-bacterium]], [[Chlamydia trachomatis|real-chlamydia]] se conecta al suministro abundante de ATP que fabrican las [[mitocondrias|mitochondrion]] humanas. El ATP atraviesa poros de la inclusión y la membrana externa bacteriana hasta toparse con Npt1, un antiporter basculante de doce hélices en la membrana interna del [[Cuerpo Reticulado|real-chlam-rb]]. Igual que quien entrega una batería descargada en ventanilla a cambio de otra llena, Npt1 introduce un ATP4- humano solo cuando expulsa un ADP3- bacteriano usado, mientras el cotransportador vecino Npt2 importa GTP, CTP y UTP para abastecer a la [[ARN polimerasa|rna-polymerase]] y a los [[ribosomas 70S|ribosome-70s]].',
      blueprint:
        'Rol: Antiporter obligatorio 1:1 de nucleótidos ATP/ADP en membrana interna (núcleo del parasitismo energético) · Entradas: ATP citosólico generado por [[mitocondrias|mitochondrion]] del huésped que difunde hacia la [[inclusión|real-chlamydia]], junto con ADP bacteriano agotado · Interior: Transportador basculante Npt1Ct de 12 hélices transmembrana acompañado por el simportador H+/NTP Npt2Ct en la bicapa interna de [[fosfolípidos|phospholipid]] · Salida: ATP y NTP citoplasmáticos para síntesis de [[ARN|rna]], [[ribosomas 70S|ribosome-70s]] y división en el [[Cuerpo Reticulado|real-chlam-rb]], devolviendo ADP al huésped.',
      scientific:
        'Translocasa de nucleótidos no mitocondrial Npt1Ct de Chlamydia trachomatis (Tlcc1, ~58 kDa, 12 hélices α transmembrana de la familia NTT compartida evolutivamente con Rickettsiales y plastidios vegetales). Cataliza el contratransporte estricto 1:1 de ATP4- del huésped entrante (Km ~20–48 µM) por ADP3- bacteriano saliente a través de la bicapa interna de [[fosfolípidos|phospholipid]] del [[Cuerpo Reticulado|real-chlam-rb]], con polaridad funcional opuesta al transportador AAC/ANT de la [[mitocondria|mitochondrion]] (que exporta ATP). Actúa en paralelo con el simportador acoplado a protones Npt2Ct para importar GTP, CTP y UTP esenciales ante la ausencia de síntesis de novo de purinas y pirimidinas.'
    }
  },

  'real-rickettsia': {
    en: {
      simple:
        'Rickettsia prowazekii is an intracellular bacterium that shreds its entry bubble to live naked inside the [[host cell|real-cell]] cytoplasm, stealing ATP early, respiring with its own [[electron transport chain|electron-transport-chain]], and rocketing between cells on [[actin comet tails|real-rick-comet]].',
      story:
        'Unlike [[Chlamydia|real-chlamydia]], which stays walled inside a protective inclusion, Rickettsia prowazekii - the louse-borne bacterium behind epidemic typhus - uses phospholipase enzymes in its [[Gram-negative envelope|real-rick-envelope]] to dissolve the phagosome within minutes of entry before [[lysosomes|lysosome]] can arrive. Swimming directly inside raw human cytoplasm surrounded by amino acids and nucleotides, it imports host ATP through Tlc1 translocases while also running its own respiratory chain and [[ATP synthases|atp-synthase]] right next to host [[mitochondria|mitochondrion]] - its closest evolutionary cousins. At one pole, Sca2 proteins hijack host actin into an unbranched [[comet tail|real-rick-comet]] that rams the bacterium straight into neighboring cells.',
      blueprint:
        'Role: Cytosolic obligate intracellular Alphaproteobacterium (~350 x 1,100 nm) with dual ATP import and oxidative phosphorylation; Inputs: Host cytosolic ATP via Tlc1, glutamate/pyruvate substrates, O2, and host G-actin monomers inside [[eukaryotic cell|real-cell]] cytoplasm; Inside: [[T4SS and Tlc1 Gram-negative envelope|real-rick-envelope]], 1.11 Mbp circular [[dsDNA|dna]], [[70S ribosomes|ribosome-70s]], [[mitochondria-homologous ETC and F1F0 ATPase|real-rick-mito]], and polar [[Sca2 actin nucleator|real-rick-comet]]; Outputs: Binary fission in naked cytosol and direct cell-to-cell spread via F-actin propulsion.',
      scientific:
        'Alphaproteobacterial obligate intracellular pathogen Rickettsia prowazekii (~0.35 x 1.1 micrometers coccobacillus; 1,111,523 bp circular [[dsDNA|dna]] chromosome at 29.0% GC encoding ~834 protein-coding genes alongside ~24% pseudogene/non-coding DNA reflecting ongoing reductive evolution). Escapes nascent phagosomes via phospholipase D and TlyC hemolysin across its [[microcapsular Gram-negative envelope|real-rick-envelope]] to replicate freely in host cytosol (doubling ~8-12 h) via [[70S ribosomes|ribosome-70s]] (doxycycline/chloramphenicol sensitive), combining Tlc1 ATP/ADP antiport with endogenous TCA/[[ETC|electron-transport-chain]]/[[F1F0 ATP synthase|atp-synthase]] bioenergetics [[homologous to mitochondria|real-rick-mito]] and Sca2-mediated [[F-actin comet motility|real-rick-comet]].'
    },
    es: {
      simple:
        'Rickettsia prowazekii es una bacteria intracelular que rompe su vesícula de entrada para vivir libre en pleno citoplasma de la [[célula huésped|real-cell]], importando ATP al inicio, respirando con su propia [[cadena de transporte de electrones|electron-transport-chain]] e impulsándose con [[colas de actina|real-rick-comet]].',
      story:
        'A diferencia de [[Chlamydia|real-chlamydia]], que permanece dentro de una inclusión membranosa, Rickettsia prowazekii —agente del tifus epidémico— emplea fosfolipasas de su [[envoltura Gram-negativa|real-rick-envelope]] para disolver el fagosoma en pocos minutos antes de que lleguen los [[lisosomas|lysosome]]. Libre en el citosol humano entre nutrientes listos para usar, importa ATP mediante translocasas Tlc1 al tiempo que conserva su propia cadena respiratoria y [[ATP sintasas|atp-synthase]] junto a las [[mitocondrias|mitochondrion]] del huésped, sus parientes evolutivas más cercanas. En uno de sus polos, la proteína Sca2 ensambla [[filamentos de actina en una cola de cometa|real-rick-comet]] que empuja a la bacteria directamente hacia la célula vecina.',
      blueprint:
        'Rol: Alfaproteobacteria intracelular obligada citosólica (~350 × 1.100 nm) con importación de ATP y fosforilación oxidativa propia · Entradas: ATP citosólico vía Tlc1, glutamato/piruvato, O₂ y monómeros de actina G dentro del citoplasma [[eucariota|real-cell]] · Interior: [[Envoltura Gram-negativa con T4SS y Tlc1|real-rick-envelope]], [[ADNbc|dna]] circular de 1,11 Mpb, [[ribosomas 70S|ribosome-70s]], [[cadena respiratoria y ATPasa F₁F₀ homólogas a la mitocondria|real-rick-mito]] y nucleador polar [[Sca2|real-rick-comet]] · Salida: Fisión binaria citosólica y propagación directa célula a célula.',
      scientific:
        'Patógeno intracelular obligado de la clase Alphaproteobacteria Rickettsia prowazekii (cocobacilo de ~0,35 × 1,1 µm; cromosoma circular de [[ADNbc|dna]] de 1.111.523 pb con 29,0 % GC, ~834 genes proteicos y ~24 % de secuencia no codificante/pseudogénica en plena evolución reductiva). Escapa del fagosoma naciente mediante fosfolipasa D y hemolisina TlyC de su [[envoltura Gram-negativa microcapsular|real-rick-envelope]] para replicarse libre en el citosol (~8–12 h/generación) con [[ribosomas 70S|ribosome-70s]] (sensibles a doxiciclina), combinando antiporte ATP/ADP Tlc1 con ciclo de Krebs, [[CTE|electron-transport-chain]] y [[ATP sintasa F₁F₀|atp-synthase]] [[emparentados con la mitocondria|real-rick-mito]] y motilidad polar por [[actina F mediada por Sca2|real-rick-comet]].'
    }
  },

  'real-rick-envelope': {
    en: {
      simple:
        'The layered envelope of [[Rickettsia prowazekii|real-rickettsia]] combines vacuole-shredding phospholipase blades, a Type IV Secretion syringe, and Tlc1 transporters that trade spent ADP for fresh host ATP.',
      story:
        'Seconds after a human endothelial [[cell|real-cell]] engulfs [[Rickettsia prowazekii|real-rickettsia]], the bacterium faces a race against incoming acid [[lysosomes|lysosome]]. Across its OmpB-armored outer [[membrane|phospholipid]] and thin [[peptidoglycan|peptidoglycan]] belt, it secretes phospholipase D and TlyC hemolysin to chew open the vacuole membrane and step free into the warm cytosol. Once settled indoors, twelve-helix Tlc1 translocases in its inner membrane swap bacterial ADP for host ATP while a multi-ring Type IV Secretion System spans all envelope layers to deliver host-modulating effectors and keep the infected cell alive while the bacteria multiply.',
      blueprint:
        'Role: Multi-layered Gram-negative host-escape, Type IV effector secretion, and Tlc1 ATP-import envelope; Inputs: Vacuolar [[phospholipid|phospholipid]] targets upon entry, host cytosolic ATP, and intracellular effectors/substrates; Inside: Immunodominant OmpB S-layer + slime coat, LPS outer membrane, thin [[peptidoglycan|peptidoglycan]] sacculus, trans-envelope rvh T4SS channel, secreted Pld/TlyC lysins, and inner-membrane Tlc1 ATP/ADP antiporters; Outputs: Rapid phagosome lysis (<30 min) ahead of [[lysosomes|lysosome]], cytosolic ATP import, and T4SS host signaling control.',
      scientific:
        'Tripartite Gram-negative envelope of [[Rickettsia prowazekii|real-rickettsia]] (~30 nm thickness): microcapsular slime layer and crystalline S-layer of autotransporter OmpB (Sca5, 120 kDa mature passenger) over an LPS outer [[phospholipid|phospholipid]] bilayer, periplasmic [[peptidoglycan|peptidoglycan]] monolayer (DAP-type), and bioenergetic inner membrane. Phagosomal escape within 15-30 min requires dimeric phospholipase D (Pld, ~23 kDa subunits), patatin-like phospholipases, and hemolysin TlyC. Envelope-spanning Rickettsiales vir homolog Type IV Secretion System (rvh T4SS; outer-membrane core complex homolog PDB 6GYB, duplicated RvhB4/B8/B9 subunits) translocates effectors, while 12-TM Tlc1 (~57 kDa) catalyzes obligate 1:1 host-ATP/bacterial-ADP exchange.'
    },
    es: {
      simple:
        'La envoltura en capas de [[Rickettsia prowazekii|real-rickettsia]] reúne fosfolipasas que rasgan la vacuola de entrada, un canal de secreción tipo IV y transportadores Tlc1 que cambian ADP gastado por ATP humano.',
      story:
        'Segundos después de que una [[célula endotelial|real-cell]] engulle a [[Rickettsia prowazekii|real-rickettsia]], comienza una carrera contrarreloj frente a los [[lisosomas|lysosome]] ácidos. A través de su [[membrana externa|phospholipid]] acorazada con OmpB y su fino cinturón de [[peptidoglicano|peptidoglycan]], la bacteria secreta fosfolipasa D y hemolisina TlyC para disolver la pared del fagosoma y salir libre al citosol. Ya instalada allí, las translocasas Tlc1 de doce hélices en su membrana interna intercambian ADP bacteriano por ATP del huésped, mientras el sistema de secreción tipo IV atraviesa toda la envoltura para inyectar efectores que prolongan la supervivencia celular.',
      blueprint:
        'Rol: Envoltura Gram-negativa de escape vacuolar, secreción tipo IV e importación de ATP por Tlc1 · Entradas: Bicapa de [[fosfolípidos|phospholipid]] del fagosoma inicial, ATP citosólico humano y efectores proteicos internos · Interior: Capa mucosa y cristalina S de OmpB, membrana externa con LPS, monocapa fina de [[peptidoglicano|peptidoglycan]], complejo transenvoltura rvh T4SS, lisinas Pld/TlyC y antiporters internos Tlc1 · Salida: Lisis del fagosoma (<30 min) antes de la fusión con [[lisosomas|lysosome]], suministro de ATP y modulación del huésped.',
      scientific:
        'Envoltura Gram-negativa tripartita de [[Rickettsia prowazekii|real-rickettsia]] (~30 nm de espesor): microcápsula mucosa y capa S cristalina del autotransportador OmpB (Sca5, dominio pasajero maduro de 120 kDa), membrana externa de [[fosfolípidos|phospholipid]] y LPS, monocapa periplásmica de [[peptidoglicano|peptidoglycan]] con meso-DAP y membrana interna bioenergética. El escape fagosómico en 15–30 min depende de la fosfolipasa D dimérica (Pld, ~23 kDa) y la hemolisina TlyC. El sistema de secreción tipo IV rvh (homólogo del núcleo externo PDB 6GYB, con paralogía RvhB4/B8/B9) exporta efectores al citosol, mientras Tlc1 (12 hélices TM, ~57 kDa) media el intercambio obligatorio 1:1 de ATP humano por ADP bacteriano.'
    }
  },

  'real-rick-comet': {
    en: {
      simple:
        'Anchored at one end of cytosolic [[Rickettsia|real-rickettsia]], the Sca2 protein snaps the [[host cell|real-cell]] own actin building blocks into long straight cables that rocket the bacterium directly into neighboring cells.',
      story:
        'Stepping outside an infected [[cell|real-cell]] into the bloodstream would expose [[Rickettsia|real-rickettsia]] to patrolling antibodies, so spotted-fever and typhus-group rickettsiae evolved an indoor propulsion engine built from stolen cytoskeleton parts. Displayed at one bacterial pole on the [[outer membrane|real-rick-envelope]], the crescent-shaped Sca2 autotransporter mimics human formin proteins without sharing their genetic sequence. Grabbing profilin-bound actin monomers out of the host cytoplasm, Sca2 strings them into long, unbranched parallel [[actin filaments|actin-filament]]; continuous monomer addition right against the bacterial pole pushes Rickettsia forward like a jet trail, ramming a membrane finger deep into the next cell.',
      blueprint:
        'Role: Polar formin-mimetic autotransporter nucleating unbranched F-actin comet tails for cell-to-cell spread; Inputs: Host cytosolic ATP-bound G-actin monomers and profilin recruited to one pole of [[Rickettsia|real-rickettsia]]; Inside: Outer-membrane beta-barrel anchor presenting the crescent-shaped alpha-helical Sca2 passenger domain at the [[bacterial surface|real-rick-envelope]]; Outputs: Parallel bundled host [[F-actin filaments|actin-filament]] generating ~10-20 micrometers/min thrust to invaginate adjacent [[host cell|real-cell]] membranes without extracellular exposure.',
      scientific:
        'Rickettsial actin-based motility machinery driven by Surface Cell Antigen 2 (Sca2, ~1,800 aa autotransporter; N-terminal passenger domain crystal structure PDB 4J4M). Unlike Listeria ActA or early rickettsial RickA (which activate host Arp2/3 to form Y-branched 70-degree dendritic networks), the all-helical crescent fold of Sca2 functionally mimics eukaryotic FH2/FH1 formins via proline-rich profilin-binding repeats and WH2-like motifs, processively nucleating and barbed-end-elongating unbranched, fascin/fimbrin-bundled [[F-actin filaments|actin-filament]] (~10-25 micrometers/min propulsion) that drive double-membrane protrusion into neighboring [[endothelial cells|real-cell]].'
    },
    es: {
      simple:
        'Anclada en un polo de [[Rickettsia|real-rickettsia]], la proteína Sca2 ensambla ladrillos de actina de la propia [[célula huésped|real-cell]] en largos cables rectos que propulsan a la bacteria directamente hacia las células vecinas.',
      story:
        'Salir al torrente sanguíneo entre una [[célula|real-cell]] y otra expondría a [[Rickettsia|real-rickettsia]] a los anticuerpos circulantes, de modo que estas bacterias desarrollaron un propulsor intracelular construido con piezas del citoesqueleto humano. Expuesto en un polo de la [[envoltura externa|real-rick-envelope]], el dominio en media luna del autotransportador Sca2 imita la función de las forminas humanas sin compartir su secuencia evolutiva. Al capturar monómeros de actina unidos a profilina del citosol, Sca2 alinea haces largos y paralelos de [[filamentos de actina|actin-filament]] sin ramificar; el crecimiento continuo contra el polo impulsa a la bacteria y hunde una protrusión directa dentro de la célula contigua.',
      blueprint:
        'Rol: Autotransportador polar mimético de formina que nuclea colas no ramificadas de actina F para propagación intercelular · Entradas: Monómeros citosólicos de actina G-ATP y profilina del huésped en un polo de [[Rickettsia|real-rickettsia]] · Interior: Barril β de membrana externa que proyecta el dominio pasajero helicoidal en media luna Sca2 sobre la [[superficie bacteriana|real-rick-envelope]] · Salida: Haces paralelos de [[filamentos de actina F|actin-filament]] (~10–20 µm/min) que invaginan la [[célula vecina|real-cell]] evitando el espacio extracelular.',
      scientific:
        'Maquinaria rickettsial de motilidad basada en actina dirigida por el antígeno superficial Sca2 (autotransportador de ~1.800 aa; estructura cristalina del dominio N-terminal PDB 4J4M). A diferencia de ActA de Listeria o de RickA (que activan Arp2/3 generando redes dendríticas a 70°), el plegamiento α-helicoidal en media luna de Sca2 mimetiza funcionalmente a las forminas eucariotas FH1/FH2 mediante tractos ricos en prolina que unen profilina y motivos tipo WH2, elongando procesivamente en el extremo barbado haces paralelos no ramificados de [[actina F|actin-filament]] (~10–25 µm/min) para cruzar entre [[células endoteliales|real-cell]].'
    }
  },

  'real-rick-mito': {
    en: {
      simple:
        'Seeing [[Rickettsia prowazekii|real-rickettsia]] beside a human [[mitochondrion|mitochondrion]] reveals over a billion years of shared family history: both descend from ancient Alphaproteobacteria and run matching [[electron transport chains|electron-transport-chain]] and rotary [[ATP synthases|atp-synthase]].',
      story:
        'Nearly two billion years ago, a free-living alphaproteobacterium related to [[Rickettsia prowazekii|real-rickettsia]] took up permanent residence inside an ancestral host cell and gradually became the [[mitochondrion|mitochondrion]] powering every [[eukaryotic cell|real-cell]] today. Side by side in the same cytosol, their kinship is unmistakable: Rickettsia still carries NADH dehydrogenase, cytochrome bc1, cytochrome c oxidase, and rotary [[F1F0 ATP synthases|atp-synthase]] in its inner membrane alongside circular [[DNA|dna]] and bacterial [[70S ribosomes|ribosome-70s]]. The decisive divergence lies in their nucleotide transporters: Rickettsia uses [[Tlc1|real-rick-envelope]] to steal ATP inward from the host, whereas mitochondria evolved ANT carriers to export ATP outward and power complex life.',
      blueprint:
        'Role: Evolutionary and bioenergetic comparison between cytosolic [[Rickettsia prowazekii|real-rickettsia]] and host [[mitochondria|mitochondrion]]; Inputs: Pyruvate/glutamate, NADH, and O2 feeding homologous inner-membrane respiratory complexes; Inside: Conserved alphaproteobacterial [[electron transport chain|electron-transport-chain]] (Complexes I-IV), proton-driven [[F1F0 ATP synthase|atp-synthase]], circular [[dsDNA|dna]], and bacterial-lineage ribosomes; Outputs: Opposite ATP polarity - Rickettsia imports host ATP via [[Tlc1|real-rick-envelope]] for parasitism, whereas mitochondria export ATP via AAC/ANT to sustain the [[eukaryotic cell|real-cell]].',
      scientific:
        'Phylogenomic and bioenergetic synteny between Rickettsiales ([[Rickettsia prowazekii|real-rickettsia]], 1.11 Mbp [[dsDNA|dna]]) and eukaryotic [[mitochondria|mitochondrion]] (16.6 kbp human mtDNA after massive endosymbiotic gene transfer to the nucleus). Both retain homologous inner-membrane [[respiratory complexes|electron-transport-chain]] (proton-pumping NADH:ubiquinone oxidoreductase Complex I, succinate dehydrogenase Complex II, ubiquinol:cytochrome c oxidoreductase Complex III, cytochrome c oxidase Complex IV) generating a ~150-180 mV proton-motive force across a cardiolipin-rich inner [[phospholipid|phospholipid]] bilayer to drive rotary [[F1F0 ATP synthases|atp-synthase]], while contrasting non-homologous rickettsial Tlc1 (ATP import) against mitochondrial MCF-family SLC25A4/ANT (ATP export).'
    },
    es: {
      simple:
        'Observar a [[Rickettsia prowazekii|real-rickettsia]] junto a una [[mitocondria|mitochondrion]] humana revela más de mil millones de años de parentesco: ambas descienden de antiguas alfaproteobacterias y comparten [[cadenas de transporte de electrones|electron-transport-chain]] y [[ATP sintasas|atp-synthase]] rotatorias equivalentes.',
      story:
        'Hace casi dos mil millones de años, una alfaproteobacteria emparentada con [[Rickettsia prowazekii|real-rickettsia]] se estableció de forma permanente dentro de una célula ancestral hasta transformarse en la [[mitocondria|mitochondrion]] que hoy alimenta a toda [[célula eucariota|real-cell]]. Vistas lado a lado en el mismo citosol, la herencia común salta a la vista: Rickettsia conserva complejos respiratorios I a IV y [[ATP sintasas F₁F₀|atp-synthase]] en su membrana interna junto a [[ADN|dna]] circular y [[ribosomas 70S|ribosome-70s]]. La bifurcación clave está en el sentido del intercambio energético: Rickettsia usa [[Tlc1|real-rick-envelope]] para importar ATP del huésped, mientras la mitocondria adoptó el transportador ANT para exportar ATP hacia el citoplasma celular.',
      blueprint:
        'Rol: Comparación evolutiva y bioenergética entre [[Rickettsia prowazekii|real-rickettsia]] citosólica y la [[mitocondria|mitochondrion]] del huésped · Entradas: Piruvato/glutamato, NADH y O₂ hacia complejos respiratorios homólogos de membrana interna · Interior: [[Cadena de transporte de electrones|electron-transport-chain]] alfaproteobacteriana conservada (Complejos I–IV), [[ATP sintasa F₁F₀|atp-synthase]] rotatoria, [[ADNbc|dna]] circular y ribosomas de linaje bacteriano · Salida: Polaridad opuesta de ATP: Rickettsia importa ATP vía [[Tlc1|real-rick-envelope]], mientras la mitocondria exporta ATP vía AAC/ANT para sostener a la [[célula eucariota|real-cell]].',
      scientific:
        'Sintenia filogenómica y bioenergética entre Rickettsiales ([[Rickettsia prowazekii|real-rickettsia]], [[ADNbc|dna]] de 1,11 Mpb) y la [[mitocondria|mitochondrion]] eucariota (ADNmt humano de 16,6 kpb tras transferencia génica endosimbiótica masiva al núcleo). Ambas conservan complejos homólogos de la [[cadena respiratoria|electron-transport-chain]] (Complejo I NADH:ubiquinona oxidorreductasa, Complejo II succinato deshidrogenasa, Complejo III citocromo bc₁ y Complejo IV citocromo c oxidasa) que generan ~150–180 mV de fuerza protón-motriz en una bicapa interna rica en cardiolipina ([[fosfolípidos|phospholipid]]) para accionar [[ATP sintasas F₁F₀|atp-synthase]], oponiendo el antiporter rickettsial Tlc1 (importador de ATP) al transportador mitocondrial SLC25A4/ANT (exportador de ATP).'
    }
  }
};

export const PARASITIC_CELLS_PART_LENSES: PagePartLensMap = {
  'mycoplasma_realistic.html': {
    membrane: {
      en: {
        subtitle: 'The Wall-Less Single Bilayer',
        simple:
          'Unlike [[E. coli|real-bacterium]], [[Mycoplasma genitalium|real-mycoplasma]] has no rigid cell wall at all - only a single soft [[phospholipid|phospholipid]] membrane that makes penicillin completely harmless against it.',
        story:
          'Living full-time in osmotically stable human mucus let [[Mycoplasma genitalium|real-mycoplasma]] shed every gene for building [[peptidoglycan|peptidoglycan]] armor. Without that target meshwork outside its ~7-nanometer [[phospholipid|phospholipid]] bilayer, beta-lactam antibiotics have nothing to break, while scavenged host [[cholesterol|cholesterol]] and fatty acids keep the naked flask flexible enough to squeeze between airway [[cilia|cilium]].',
        blueprint: {
          role: 'Single wall-less cytoplasmic [[phospholipid|phospholipid]] boundary of [[Mycoplasma genitalium|real-mycoplasma]]',
          arrivesFrom: 'Host fatty acids phosphorylated via FakA/FakB and synthesized into phosphatidylglycerol and cardiolipin',
          inside: '~7 nm trilaminar bilayer lacking [[peptidoglycan|peptidoglycan]] or LPS, braced by ~35-50 mol% [[cholesterol|cholesterol]]',
          deliversTo: 'Houses salvage importers, surface lipoproteins, and polar [[Nap adhesin complexes|real-myco-nap]]',
          loop: 'Absence of mur wall enzymes confers complete intrinsic resistance to penicillins, cephalosporins, and vancomycin'
        },
        scientific:
          'Single ~7 nm trilaminar cytoplasmic membrane of Mollicutes completely devoid of [[peptidoglycan|peptidoglycan]], teichoic acids, or an outer membrane. Synthesizes phosphatidylglycerol and cardiolipin from imported host exogenous fatty acids (activated via FakA/FakB kinase-acylACP pathway) while incorporating ~35-50 mol% unesterified host [[cholesterol|cholesterol]] to regulate acyl-chain order and prevent osmotic lysis.',
        from: [
          { nodeId: 'real-cell', label: 'Host Epithelial Mucosa', cargo: 'Exogenous fatty acids & glycerol' },
          { nodeId: 'cholesterol', label: 'Scavenged Host Sterols', cargo: 'Membrane rigidity buffer' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Polar Nap Adhesins', cargo: 'Transmembrane tip anchor' },
          { nodeId: 'real-myco-nucleoid', label: 'Minimal Cytoplasm', cargo: 'Protected osmotic boundary' }
        ]
      },
      es: {
        subtitle: 'La bicapa única sin pared celular',
        simple:
          'A diferencia de [[E. coli|real-bacterium]], [[Mycoplasma genitalium|real-mycoplasma]] carece por completo de pared rígida: solo posee una membrana blanda de [[fosfolípidos|phospholipid]], por lo que la penicilina no le hace ningún efecto.',
        story:
          'Habitar de continuo en mucosas humanas osmóticamente estables permitió a [[Mycoplasma genitalium|real-mycoplasma]] descartar todos los genes del [[peptidoglicano|peptidoglycan]]. Sin esa malla exterior sobre su bicapa de [[fosfolípidos|phospholipid]] de ~7 nanómetros, los antibióticos β-lactámicos se quedan sin diana, mientras el [[colesterol|cholesterol]] tomado del huésped aporta resistencia elástica para deslizarse entre los [[cilios|cilium]].',
        blueprint: {
          role: 'Frontera citoplasmática única de [[fosfolípidos|phospholipid]] sin pared de [[Mycoplasma genitalium|real-mycoplasma]]',
          arrivesFrom: 'Ácidos grasos del huésped activados por FakA/FakB y convertidos en fosfatidilglicerol y cardiolipina',
          inside: 'Bicapa trilaminar de ~7 nm sin [[peptidoglicano|peptidoglycan]] ni LPS, estabilizada con ~35–50 % de [[colesterol|cholesterol]]',
          deliversTo: 'Aloja permeasas de rescate, lipoproteínas de superficie y [[complejos polares Nap|real-myco-nap]]',
          loop: 'La ausencia total de enzimas mur otorga resistencia natural completa frente a penicilinas y vancomicina'
        },
        scientific:
          'Membrana citoplasmática única trilaminar (~7 nm) propia de Mollicutes, desprovista de [[peptidoglicano|peptidoglycan]], ácidos teicoicos o membrana externa. Sintetiza fosfatidilglicerol y cardiolipina a partir de ácidos grasos exógenos del huésped (vía quinasa FakA/FakB) e incorpora ~35–50 % molar de [[colesterol|cholesterol]] libre para modular la fluidez lipídica y resistir tensiones osmóticas.',
        from: [
          { nodeId: 'real-cell', label: 'Mucosa epitelial humana', cargo: 'Ácidos grasos exógenos' },
          { nodeId: 'cholesterol', label: 'Esteroles capturados', cargo: 'Amortiguación mecánica' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Adhesinas polares Nap', cargo: 'Anclaje transmembrana apical' },
          { nodeId: 'real-myco-nucleoid', label: 'Citoplasma mínimo', cargo: 'Contención osmótica' }
        ]
      }
    },

    sterol: {
      en: {
        subtitle: 'Stolen Cholesterol Hull Bracing',
        simple:
          'Because [[Mycoplasma|real-mycoplasma]] cannot make sterols or a cell wall of its own, it pulls ready-made [[cholesterol|cholesterol]] straight out of human cell membranes to keep its thin lipid skin from tearing.',
        story:
          'Most bacteria never use [[cholesterol|cholesterol]], relying on tough [[peptidoglycan|peptidoglycan]] walls instead. Having abandoned its wall, [[Mycoplasma genitalium|real-mycoplasma]] compensates during close contact with human [[cilia|cilium]] by transferring flat four-ring sterol wedges directly into both leaflets of its [[phospholipid|phospholipid]] bilayer, packing fatty tails tightly enough to stop ion leaks without freezing the gliding tip.',
        blueprint: {
          role: 'Exogenous planar sterol stiffener and proton/ion permeability barrier',
          arrivesFrom: 'Scavenged directly from host [[epithelial cell|real-cell]] plasma and ciliary membranes',
          inside: 'Unesterified [[cholesterol|cholesterol]] intercalated at ~35-50 mol% between bacterial [[phospholipid|phospholipid]] acyl chains',
          deliversTo: 'Mechanical tensile stability for the wall-less [[Mycoplasma|real-mycoplasma]] flask and [[Nap|real-myco-nap]] neck',
          loop: 'Sterol dependency restricts growth to animal hosts or serum-supplemented laboratory media'
        },
        scientific:
          'High-mole-fraction (~35-50 mol% of total membrane lipid) unesterified [[cholesterol|cholesterol]] and cholestanol acquired intact from host [[cilia|cilium]] and apical [[plasma membranes|real-cell]] without de novo mevalonate or MEP sterol biosynthesis. Planar tetracyclic rings condense neighboring [[phospholipid|phospholipid]] hydrocarbon chains into a liquid-ordered-like state that lowers passive ion leakage and raises lysis thresholds.',
        from: [
          { nodeId: 'cilium', label: 'Host Ciliary Membrane', cargo: 'Unesterified cholesterol' },
          { nodeId: 'real-cell', label: 'Host Epithelial Rafts', cargo: 'Direct sterol transfer' }
        ],
        to: [
          { nodeId: 'phospholipid', label: 'Mycoplasma Bilayer', cargo: '35-50 mol% acyl packing' },
          { nodeId: 'real-mycoplasma', label: 'Wall-Less Flask', cargo: 'Osmotic shear resistance' }
        ]
      },
      es: {
        subtitle: 'Refuerzo de colesterol tomado del huésped',
        simple:
          'Como [[Mycoplasma|real-mycoplasma]] no fabrica esteroles ni pared celular, extrae [[colesterol|cholesterol]] listo de las membranas humanas para evitar que su fina cubierta lipídica se desgarre.',
        story:
          'Casi ninguna bacteria emplea [[colesterol|cholesterol]], pues les basta su malla de [[peptidoglicano|peptidoglycan]]. Al prescindir de pared, [[Mycoplasma genitalium|real-mycoplasma]] aprovecha el roce estrecho con los [[cilios|cilium]] humanos para insertar anillos planos de esterol entre ambas hojas de su bicapa de [[fosfolípidos|phospholipid]], reduciendo fugas iónicas sin restar flexibilidad al cuello deslizante.',
        blueprint: {
          role: 'Estabilizador mecánico planar de esterol exógeno y barrera frente a fugas iónicas',
          arrivesFrom: 'Capturado directamente desde las membranas ciliares y apicales de la [[célula huésped|real-cell]]',
          inside: '[[Colesterol|cholesterol]] no esterificado intercalado al ~35–50 % molar entre cadenas acilo de [[fosfolípidos|phospholipid]]',
          deliversTo: 'Resistencia mecánica para el matraz sin pared de [[Mycoplasma|real-mycoplasma]] y su cuello [[Nap|real-myco-nap]]',
          loop: 'La auxotrofía absoluta de esteroles obliga a vivir sobre tejidos animales o medios enriquecidos con suero'
        },
        scientific:
          'Fracción molar elevada (~35–50 % de los lípidos totales de membrana) de [[colesterol|cholesterol]] libre adquirido directamente de [[cilios|cilium]] y membranas de [[células epiteliales|real-cell]] sin síntesis de novo de isoprenoides. Sus anillos tetracíclicos rígidos ordenan las colas hidrocarbonadas de los [[fosfolípidos|phospholipid]], disminuyendo la permeabilidad pasiva y compensando la falta de pared.',
        from: [
          { nodeId: 'cilium', label: 'Membrana ciliar humana', cargo: 'Colesterol libre' },
          { nodeId: 'real-cell', label: 'Balsas epiteliales', cargo: 'Transferencia lipídica directa' }
        ],
        to: [
          { nodeId: 'phospholipid', label: 'Bicapa de Mycoplasma', cargo: 'Empaquetamiento 35–50 %' },
          { nodeId: 'real-mycoplasma', label: 'Matraz sin pared', cargo: 'Tolerancia osmótica' }
        ]
      }
    },

    lipo: {
      en: {
        subtitle: 'The Shifting Lipoprotein Coat',
        simple:
          'Anchored into the outer face of the [[membrane|phospholipid]] by greasy lipid tails, abundant surface lipoproteins help capture nutrients while disguising [[Mycoplasma|real-mycoplasma]] from immune attack.',
        story:
          'Even with only 482 genes in its [[minimal genome|real-myco-nucleoid]], [[Mycoplasma genitalium|real-mycoplasma]] devotes nearly four percent of its entire blueprint to surface lipoproteins. Built on [[70S ribosomes|ribosome-70s]] and bolted to the outer [[phospholipid|phospholipid]] leaflet by fatty-acid chains, these exposed proteins act as substrate-binding traps for salvage importers and decoy antigens that distract mucosal antibodies away from essential [[Nap adhesins|real-myco-nap]].',
        blueprint: {
          role: 'Lipid-anchored ectodomain coat for nutrient capture, immune modulation, and decoy variation',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]], exported via Sec, and S-diacylated/N-acyl-modified on N-terminal Cys',
          inside: '~21 MG lipoprotein families tethered by diacylglyceryl-cysteine tails in the outer [[phospholipid|phospholipid]] leaflet',
          deliversTo: 'Delivers bound nucleosides/peptides to ABC importers and triggers/modulates [[host cell|real-cell]] TLR2/6 signaling',
          loop: 'Phase and sequence variation shifts exposed epitopes during chronic mucosal colonization'
        },
        scientific:
          'High-density surface lipoproteome (~21 genes, ~4.3% of all ORFs in [[Mycoplasma genitalium|real-mycoplasma]]) processed by prolipoprotein diacylglyceryl transferase (Lgt/MG_086) and signal peptidase II (LspA/MG_210) at conserved lipobox Cys residues. Tri- and diacylated lipopeptides (including MPN/MG homologs of macrophage-activating lipopeptide MALP-2) engage host heterodimeric TLR2/TLR6 while serving as periplasm-replacing substrate-binding subunits for ABC salvage permeases.',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes & Sec', cargo: 'Prolipoprotein precursors' },
          { nodeId: 'phospholipid', label: 'Outer Membrane Leaflet', cargo: 'Diacylglyceryl Cys lipid anchor' }
        ],
        to: [
          { nodeId: 'real-mycoplasma', label: 'ABC Salvage Transporters', cargo: 'Captured host substrates' },
          { nodeId: 'real-cell', label: 'Host Mucosal Innate Sensors', cargo: 'TLR2/6 immune modulation' }
        ]
      },
      es: {
        subtitle: 'El manto cambiante de lipoproteínas',
        simple:
          'Sujetas a la cara externa de la [[membrana|phospholipid]] mediante colas grasas, las abundantes lipoproteínas superficiales capturan nutrientes y ayudan a [[Mycoplasma|real-mycoplasma]] a despistar a las defensas.',
        story:
          'Pese a contar con solo 482 genes en su [[genoma mínimo|real-myco-nucleoid]], [[Mycoplasma genitalium|real-mycoplasma]] dedica más del cuatro por ciento de su repertorio a lipoproteínas externas. Sintetizadas en [[ribosomas 70S|ribosome-70s]] y clavadas en la hoja exterior de [[fosfolípidos|phospholipid]] por cadenas acilo, actúan como receptores de nutrientes para los transportadores y como señuelos variables que protegen a las [[adhesinas Nap|real-myco-nap]].',
        blueprint: {
          role: 'Cubierta ectodominio anclada por lípidos para captura de solutos y evasión inmunitaria',
          arrivesFrom: 'Traducidas en [[ribosomas 70S|ribosome-70s]], secretadas por Sec y lipidadas en cisteína N-terminal',
          inside: '~21 familias de lipoproteínas MG ancladas por colas diacilgliceril-cisteína en la hoja externa de [[fosfolípidos|phospholipid]]',
          deliversTo: 'Transfieren sustratos a permeasas ABC e interactúan con receptores TLR2/6 de la [[célula huésped|real-cell]]',
          loop: 'La variación antigénica y de fase renueva la superficie durante colonizaciones persistentes'
        },
        scientific:
          'Lipoproteoma superficial de alta densidad (~21 genes, ~4,3 % de los ORF de [[Mycoplasma genitalium|real-mycoplasma]]) madurado por la diacilgliceril transferasa Lgt (MG_086) y la peptidasa señal II LspA (MG_210). Sus extremos di- y triacilados reemplazan funcionalmente a las proteínas periplásmicas de unión a sustrato ausentes en bacterias sin pared y modulan la respuesta inflamatoria mucosa vía TLR2/TLR6.',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S y vía Sec', cargo: 'Precursores con lipobox' },
          { nodeId: 'phospholipid', label: 'Hoja lipídica externa', cargo: 'Anclaje diacilglicerilo' }
        ],
        to: [
          { nodeId: 'real-mycoplasma', label: 'Importadores ABC', cargo: 'Sustratos capturados' },
          { nodeId: 'real-cell', label: 'Epitelio del huésped', cargo: 'Señalización TLR2/6' }
        ]
      }
    },

    nap: {
      en: {
        subtitle: 'The Four-Crown Ciliary Grappling Foot',
        simple:
          'Packed densely over the nose of the flask, crown-shaped [[Nap complexes|real-myco-nap]] latch onto sugar chains on human [[cilia|cilium]] and step forward one catch-and-release cycle at a time.',
        story:
          'Each [[Nap adhesin tower|real-myco-nap]] pairs two P140 stalks with two P110 receptor-binding crowns projecting ~20 nanometers out of the polar [[membrane|phospholipid]]. When P110 snaps onto a sialylated sugar atop an airway [[cilium|cilium]], mechanical tugs transmitted from the intracellular [[terminal rod|real-myco-rod]] pull the cell body forward before P140-P110 rocks open to release its grip for the next step.',
        blueprint: {
          role: 'Polar heterotetrameric sialic-acid adhesin and gliding traction foot ([[Nap|real-myco-nap]])',
          arrivesFrom: 'Co-expressed from the mgpBC operon on [[70S ribosomes|ribosome-70s]] and focused at the tip pole',
          inside: '(P140)2-(P110)2 ectodomain crowns cycling between open sialyllactose-binding and closed release states',
          deliversTo: 'Anchors [[Mycoplasma|real-mycoplasma]] onto beating [[cilia|cilium]] and converts [[rod|real-myco-rod]] force into gliding',
          loop: 'RecA-driven recombination with MgPa archival islands swaps surface loops to escape neutralizing IgA'
        },
        scientific:
          'Polar ~550 kDa (MgpB/P140)2-(MgpC/P110)2 Nap complex (cryo-EM closed heterodimer PDB 6RUT, open conformation PDB 6RUV, sialyllactose-bound P110 PDB 6RC9). Transmembrane C-terminal helices and cytoplasmic tails couple extracellular sialic-acid engagement on [[cilia|cilium]] to the intracellular [[P65/HMW2 terminal organelle|real-myco-rod]], generating ~25-30 pN stall force during unidirectional surface gliding.',
        from: [
          { nodeId: 'real-myco-rod', label: 'Internal Terminal Rod', cargo: 'Cytoskeletal pull strokes' },
          { nodeId: 'ribosome-70s', label: 'mgpBC Operon Translation', cargo: 'P140 & P110 subunits' }
        ],
        to: [
          { nodeId: 'cilium', label: 'Host Epithelial Cilium', cargo: 'Sialylated glycan grip' },
          { nodeId: 'real-mycoplasma', label: 'Polar Flask Body', cargo: 'Forward mucosal traction' }
        ]
      },
      es: {
        subtitle: 'El pie de cuatro coronas sobre el cilio',
        simple:
          'Concentrados en la nariz del matraz, los complejos [[Nap|real-myco-nap]] con forma de corona se enganchan a los azúcares de los [[cilios|cilium]] humanos y avanzan alternando agarre y suelta.',
        story:
          'Cada torre [[adhesiva Nap|real-myco-nap]] reúne dos tallos P140 y dos coronas P110 que sobresalen ~20 nanómetros de la [[membrana|phospholipid]] polar. Cuando P110 atrapa un azúcar sialilado sobre un [[cilio|cilium]] respiratorio, los tirones transmitidos desde el [[bastón terminal interno|real-myco-rod]] desplazan el cuerpo bacteriano hacia delante antes de abrir la pinza para el siguiente paso.',
        blueprint: {
          role: 'Adhesina heterotetramérica polar de unión a ácido siálico y pie tractor ([[Nap|real-myco-nap]])',
          arrivesFrom: 'Traducida desde el operón mgpBC en [[ribosomas 70S|ribosome-70s]] y concentrada en el polo apical',
          inside: 'Coronas (P140)2–(P110)2 que alternan entre conformación abierta fijadora de glicanos y cerrada de suelta',
          deliversTo: 'Amarra [[Mycoplasma|real-mycoplasma]] a los [[cilios|cilium]] y convierte el empuje del [[bastón|real-myco-rod]] en avance',
          loop: 'La recombinación homóloga con islas MgPa renueva los bucles externos frente a anticuerpos IgA'
        },
        scientific:
          'Complejo polar Nap (MgpB/P140)2–(MgpC/P110)2 de ~550 kDa (heterodímero cerrado PDB 6RUT, estado abierto PDB 6RUV, complejo P110–sialil-lactosa PDB 6RC9). Sus hélices transmembrana C-terminales conectan la unión a oligosacáridos sialilados del [[cilio|cilium]] con el [[orgánulo terminal P65/HMW2|real-myco-rod]], desarrollando fuerzas de detención de ~25–30 pN.',
        from: [
          { nodeId: 'real-myco-rod', label: 'Bastón terminal interno', cargo: 'Impulsos mecánicos' },
          { nodeId: 'ribosome-70s', label: 'Traducción mgpBC', cargo: 'Subunidades P140 y P110' }
        ],
        to: [
          { nodeId: 'cilium', label: 'Cilio epitelial humano', cargo: 'Fijación a ácido siálico' },
          { nodeId: 'real-mycoplasma', label: 'Cuerpo del matraz', cargo: 'Deslizamiento polar' }
        ]
      }
    },

    sialo: {
      en: {
        subtitle: 'Sialic-Acid Stepping Stones on the Cilium',
        simple:
          'Branched sugar chains capped with negatively charged sialic acid coat human [[cilia|cilium]] to keep mucus slippery, inadvertently giving [[Mycoplasma Nap feet|real-myco-nap]] a dense track of handholds.',
        story:
          'Synthesized inside the host [[Golgi|golgi]] and planted densely across the [[ciliary membrane|cilium]], sialylated glycoproteins normally prevent cells from sticking together while moving mucus upward. [[Mycoplasma genitalium|real-mycoplasma]] turns that protective sugar coat into a stepping-stone rail: P110 pockets recognize terminal Neu5Ac sugars with micromolar precision so the bacterium glides down the cilium shaft toward calm shelter near the cell surface.',
        blueprint: {
          role: 'Host terminal Neu5Ac-oligosaccharide receptor array recognized by [[Nap adhesins|real-myco-nap]]',
          arrivesFrom: 'Glycosylated by sialyltransferases inside host [[Golgi|golgi]] and trafficked to [[cilia|cilium]]',
          inside: 'Alpha-2,3- and alpha-2,6-linked sialyllactose chains displayed on epithelial mucins and gangliosides',
          deliversTo: 'Provides reversible catch-and-release footholds for [[Mycoplasma|real-mycoplasma]] P110 crowns',
          loop: 'Neuraminidase treatment strips these sialic-acid caps and immediately halts Mycoplasma attachment and gliding'
        },
        scientific:
          'Host apical glycocalyx ligands comprising terminal N-acetylneuraminic acid (Neu5Ac) linked alpha-2,3 or alpha-2,6 to galactose on [[Golgi|golgi]]-matured N-/O-glycoproteins and sialoglycolipids along [[epithelial cilia|cilium]]. Co-crystallized in the K+-coordinated binding pocket of MgpC/P110 (PDB 6RC9; Kd ~10-100 micromolar enabling rapid multivalent catch-and-release stepping).',
        from: [
          { nodeId: 'golgi', label: 'Host Golgi Sialyltransferases', cargo: 'Alpha-2,3/2,6 Neu5Ac caps' },
          { nodeId: 'cilium', label: 'Ciliary Membrane Shaft', cargo: 'Displayed sialoglycoproteins' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'P110 Binding Pocket', cargo: 'Reversible gliding foothold' }
        ]
      },
      es: {
        subtitle: 'Peldaños de ácido siálico sobre el cilio',
        simple:
          'Las cadenas ramificadas de azúcar rematadas en ácido siálico recubren los [[cilios|cilium]] humanos para lubricar el moco, pero ofrecen a los [[pies Nap|real-myco-nap]] una hilera continua de puntos de agarre.',
        story:
          'Ensambladas en el [[aparato de Golgi|golgi]] humano y expuestas a lo largo de la membrana del [[cilio|cilium]], las glicoproteínas sialiladas mantienen húmeda y deslizante la superficie epitelial. [[Mycoplasma genitalium|real-mycoplasma]] convierte ese tapiz protector en una vía férrea: el bolsillo de P110 reconoce el ácido siálico terminal con la afinidad justa para aferrarse y soltarse paso a paso rumbo a la base tranquila del epitelio.',
        blueprint: {
          role: 'Matriz receptora de oligosacáridos con Neu5Ac terminal reconocida por las [[adhesinas Nap|real-myco-nap]]',
          arrivesFrom: 'Glicosilada por sialiltransferasas en el [[Golgi|golgi]] humano y exportada hacia los [[cilios|cilium]]',
          inside: 'Cadenas de sialil-lactosa con enlaces α-2,3 y α-2,6 sobre glicoproteínas y gangliósidos apicales',
          deliversTo: 'Ofrece puntos de apoyo reversibles para las coronas P110 de [[Mycoplasma|real-mycoplasma]]',
          loop: 'El corte enzimático con neuraminidasa elimina el ácido siálico y detiene en seco la adhesión y el avance'
        },
        scientific:
          'Ligandos del glicocálix apical formados por ácido N-acetilneuramínico (Neu5Ac) terminal en enlace α-2,3 o α-2,6 con galactosa sobre glicoproteínas maduradas en el [[Golgi|golgi]] y expuestas en [[cilios|cilium]]. Cocristalizados en el sitio coordinado por K+ de MgpC/P110 (PDB 6RC9; Kd micromolar óptima para tracción multivalente reversible).',
        from: [
          { nodeId: 'golgi', label: 'Golgi de la célula huésped', cargo: 'Glicosilación α-2,3/2,6 Neu5Ac' },
          { nodeId: 'cilium', label: 'Superficie del cilio', cargo: 'Sialoglicoproteínas expuestas' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Bolsillo receptor P110', cargo: 'Punto de tracción deslizante' }
        ]
      }
    },

    cilium: {
      en: {
        subtitle: 'The Beating Host Airway & Mucosal Pillar',
        simple:
          'Rising micrometers tall from the [[human epithelial cell|real-cell]], this motile [[cilium|cilium]] beats rhythmically to sweep microbes out, yet becomes the primary docking post for [[Mycoplasma genitalium|real-mycoplasma]].',
        story:
          'Powered inside by dynein motors walking along a nine-plus-two ring of microtubules fed by host [[mitochondria|mitochondrion]], healthy [[cilia|cilium]] whip back and forth more than ten times per second. By clamping onto ciliary sialic-acid sugars via [[Nap complexes|real-myco-nap]] and scavenging [[cholesterol|cholesterol]] directly from the ciliary bilayer, [[Mycoplasma|real-mycoplasma]] rides out the mucociliary storm and gradually slows ciliary beating through local hydrogen peroxide stress.',
        blueprint: {
          role: 'Motile host epithelial organelle colonized by surface-attached [[Mycoplasma genitalium|real-mycoplasma]]',
          arrivesFrom: 'Anchored via basal body in the apical cortex of the [[human epithelial cell|real-cell]] and fueled by [[mitochondria|mitochondrion]]',
          inside: '9+2 microtubule-dynein axoneme sheathed in a [[cholesterol|cholesterol]]- and sialic-acid-rich [[phospholipid|phospholipid]] membrane',
          deliversTo: 'Supplies [[Nap|real-myco-nap]] attachment sites, membrane sterols, and mucosal nutrients to [[Mycoplasma|real-mycoplasma]]',
          loop: 'Persistent colonization and metabolic H2O2/superoxide release cause ciliostasis and epithelial shedding'
        },
        scientific:
          'Motile eukaryotic [[cilium|cilium]] (~250 nm diameter x 5-10 micrometers length; 9 outer doublet + 2 central singlet microtubules driven by axonemal dynein ATPases at ~10-20 Hz). Provides both the alpha-2,3/2,6-sialylated glycoprotein substratum bound by [[Nap P110|real-myco-nap]] and a sterol-rich [[phospholipid|phospholipid]] donor bilayer from which wall-less [[Mycoplasma|real-mycoplasma]] extracts unesterified [[cholesterol|cholesterol]].',
        from: [
          { nodeId: 'real-cell', label: 'Host Epithelial Cell', cargo: 'Basal body & ciliary membrane' },
          { nodeId: 'mitochondrion', label: 'Host Mitochondria', cargo: 'ATP for 10-20 Hz ciliary beat' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Mycoplasma Nap Crown', cargo: 'Sialylated surface tether' },
          { nodeId: 'cholesterol', label: 'Mycoplasma Membrane', cargo: 'Transferred host sterols' }
        ]
      },
      es: {
        subtitle: 'El pilar batiente del epitelio humano',
        simple:
          'Elevándose varios micrómetros sobre la [[célula epitelial humana|real-cell]], este [[cilio|cilium]] móvil bate rítmicamente para barrer microbios, pero termina sirviendo de muelle principal para [[Mycoplasma genitalium|real-mycoplasma]].',
        story:
          'Impulsados por motores de dineína sobre nueve pares de microtúbulos abastecidos por las [[mitocondrias|mitochondrion]] humanas, los [[cilios|cilium]] sanos baten más de diez veces por segundo. Al aferrarse a sus azúcares sialilados mediante [[complejos Nap|real-myco-nap]] y extraer [[colesterol|cholesterol]] de su membrana, [[Mycoplasma|real-mycoplasma]] resiste el barrido mucociliar y acaba enlenteciendo el batido por liberación local de peróxido.',
        blueprint: {
          role: 'Orgánulo móvil epitelial colonizado en superficie por [[Mycoplasma genitalium|real-mycoplasma]]',
          arrivesFrom: 'Anclado mediante cuerpo basal en la [[célula epitelial|real-cell]] y energizado por [[mitocondrias|mitochondrion]]',
          inside: 'Axonema 9+2 con dineína envuelto en membrana de [[fosfolípidos|phospholipid]] rica en [[colesterol|cholesterol]] y ácido siálico',
          deliversTo: 'Aporta puntos de anclaje [[Nap|real-myco-nap]], esteroles y solutos mucosos a [[Mycoplasma|real-mycoplasma]]',
          loop: 'La colonización sostenida y el H₂O₂ metabólico provocan ciliostasis y daño epitelial'
        },
        scientific:
          '[[Cilio|cilium]] eucariota móvil (~250 nm de diámetro × 5–10 µm de largo; axonema 9+2 accionado por dineínas a ~10–20 Hz). Suministra tanto el sustrato de sialoglicoproteínas reconocido por [[Nap P110|real-myco-nap]] como una bicapa de [[fosfolípidos|phospholipid]] donadora de [[colesterol|cholesterol]] libre hacia [[Mycoplasma|real-mycoplasma]].',
        from: [
          { nodeId: 'real-cell', label: 'Célula epitelial humana', cargo: 'Cuerpo basal y membrana' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias del huésped', cargo: 'ATP para el batido ciliar' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Corona Nap bacteriana', cargo: 'Sustrato de adhesión' },
          { nodeId: 'cholesterol', label: 'Membrana de Mycoplasma', cargo: 'Cesión de esteroles' }
        ]
      }
    },

    button: {
      en: {
        subtitle: 'The Distal Nosecone Anchor Cap',
        simple:
          'Wedged snugly inside the very tip of the flask neck, this dense protein cap pins the [[internal rod|real-myco-rod]] to the front [[membrane|phospholipid]] right behind the outer [[Nap adhesin crown|real-myco-nap]].',
        story:
          'Without a sturdy nosecone inside the tip, pulling on external [[Nap feet|real-myco-nap]] would simply rip flexible [[phospholipids|phospholipid]] away from the rest of the cell. Assembled from P65 and P32 cap proteins locked onto the front end of HMW2, the terminal button reinforces the curved polar membrane from underneath and keeps hundreds of Nap towers corralled at the leading edge.',
        blueprint: {
          role: 'Distal electron-dense cap anchoring the [[terminal rod|real-myco-rod]] to the polar tip membrane',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]] from MG_217 (P65) and MG_318 (P32) and recruited by HMW2',
          inside: 'Multi-layered P65/P32 protein dome bridging N-terminal HMW2 coiled-coils to inner [[phospholipid|phospholipid]] heads',
          deliversTo: 'Stabilizes tip curvature and concentrates outer [[Nap adhesin complexes|real-myco-nap]] at the gliding pole',
          loop: 'Loss of P65 destabilizes tip cap geometry and causes Nap adhesins to disperse randomly'
        },
        scientific:
          'Distal ~35-45 nm electron-dense terminal button at the apex of the [[Mycoplasma genitalium|real-mycoplasma]] [[attachment organelle|real-myco-rod]], composed of acidic proline-rich MG_217 (P65), MG_318 (P32), and the N-terminal domain of MG_218 (HMW2). Forms a peripheral membrane-associated scaffold that maintains ~80 nm polar tip curvature and clusters transmembrane C-termini of [[MgpB/MgpC Nap complexes|real-myco-nap]].',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'MG_217 (P65) & MG_318 (P32)' },
          { nodeId: 'real-myco-rod', label: 'HMW2 Rod N-Terminus', cargo: 'Axial tip docking' }
        ],
        to: [
          { nodeId: 'phospholipid', label: 'Polar Tip Bilayer', cargo: 'Curvature reinforcement' },
          { nodeId: 'real-myco-nap', label: 'Nap Adhesin Cluster', cargo: 'Apical retention zone' }
        ]
      },
      es: {
        subtitle: 'El casquete distal de la proa celular',
        simple:
          'Encajado justo en la punta interna del cuello del matraz, este denso casquete proteico sujeta el [[bastón interno|real-myco-rod]] contra la [[membrana|phospholipid]] frontal detrás de las [[adhesinas Nap|real-myco-nap]].',
        story:
          'Sin un cabezal firme bajo la punta, la tracción de los [[pies Nap|real-myco-nap]] arrancaría la blanda bicapa de [[fosfolípidos|phospholipid]] del resto del citoplasma. Formado por las proteínas P65 y P32 engarzadas al extremo delantero de HMW2, el botón terminal apuntala la curvatura apical y mantiene concentradas las torres adhesivas en el frente de avance.',
        blueprint: {
          role: 'Casquete electrodenso distal que fija el [[bastón terminal|real-myco-rod]] al polo apical de membrana',
          arrivesFrom: 'Sintetizado en [[ribosomas 70S|ribosome-70s]] a partir de MG_217 (P65) y MG_318 (P32) sobre HMW2',
          inside: 'Domo proteico estratificado P65/P32 entre el extremo N de HMW2 y la hoja interna de [[fosfolípidos|phospholipid]]',
          deliversTo: 'Mantiene la curvatura del cuello y retiene los [[complejos Nap|real-myco-nap]] en el polo delantero',
          loop: 'La deleción de P65 desorganiza el ápice y dispersa las adhesinas por toda la superficie'
        },
        scientific:
          'Botón terminal electrodenso distal (~35–45 nm) en el ápice del [[orgánulo de fijación|real-myco-rod]] de [[Mycoplasma genitalium|real-mycoplasma]], integrado por MG_217 (P65), MG_318 (P32) y el dominio N-terminal de MG_218 (HMW2). Actúa como placa submembranosa que preserva el radio de curvatura polar (~80 nm) y confina las colas citoplasmáticas de [[Nap|real-myco-nap]].',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Proteínas P65 y P32' },
          { nodeId: 'real-myco-rod', label: 'Extremo N del bastón HMW2', cargo: 'Soporte axial delantero' }
        ],
        to: [
          { nodeId: 'phospholipid', label: 'Bicapa del ápice polar', cargo: 'Refuerzo de curvatura' },
          { nodeId: 'real-myco-nap', label: 'Agrupación polar Nap', cargo: 'Retención en la punta' }
        ]
      }
    },

    rod: {
      en: {
        subtitle: 'The Segmented Coiled-Coil Neck Girder',
        simple:
          'Stretching ~200 nanometers down the narrow neck, paired bundles of springy HMW2 proteins form a segmented internal backbone that shapes [[Mycoplasma|real-mycoplasma]] into a flask and transmits gliding force.',
        story:
          'Even though [[Mycoplasma genitalium|real-mycoplasma]] gave up a cell wall, it still builds an unmistakable front and back. Long alpha-helical HMW2 dimers stack side by side like ribbed railroad ties between the distal terminal button and the basal wheel, wrapped in HMW1 and HMW3 stabilizers so impulses from the base travel cleanly forward to [[Nap gliding feet|real-myco-nap]] while a second rod assembles beside it before division.',
        blueprint: {
          role: 'Central segmented load-bearing cytoskeletal shaft of the [[terminal organelle|real-myco-rod]]',
          arrivesFrom: 'Self-assembled from parallel MG_218 (HMW2) coiled-coil dimers plus MG_312 (HMW1) and MG_317 (HMW3)',
          inside: '~200 nm paired electron-dense ribbed plates spanning from the basal wheel to the distal button',
          deliversTo: 'Maintains piriform flask geometry, relays gliding strokes to [[Nap|real-myco-nap]], and guides [[nucleoid|real-myco-nucleoid]] segregation',
          loop: 'De novo assembly of a daughter rod adjacent to the mature rod initiates polar cytokinesis'
        },
        scientific:
          'Central ~200 nm segmented paired-plate core of the [[Mycoplasma genitalium|real-mycoplasma]] [[terminal cytoskeleton|real-myco-rod]] resolved by cryo-electron tomography (~15-20 repeating striations spaced ~9-11 nm). Built from oriented ~1,800-aa coiled-coil homodimers of MG_218 (HMW2, N-terminus distal, C-terminus proximal) sheathed by peripheral MG_312 (HMW1) and MG_317 (HMW3) accessory proteins.',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'HMW2, HMW1 & HMW3 subunits' },
          { nodeId: 'real-myco-nucleoid', label: 'MG_218 & MG_312 Operons', cargo: 'Cytoskeletal mRNA transcripts' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Polar Nap Adhesins', cargo: 'Axial force transmission' },
          { nodeId: 'real-mycoplasma', label: 'Piriform Neck', cargo: 'Polarized cell shape' }
        ]
      },
      es: {
        subtitle: 'La viga segmentada interna del cuello',
        simple:
          'Recorriendo ~200 nanómetros a lo largo del cuello estrecho, haces apareados de proteínas HMW2 forman una columna interna segmentada que da forma de matraz a [[Mycoplasma|real-mycoplasma]] y transmite el empuje.',
        story:
          'Aunque [[Mycoplasma genitalium|real-mycoplasma]] renunció a la pared celular, mantiene una proa y una popa bien definidas. Largos dímeros helicoidales HMW2 se alinean en placas estriadas entre el botón delantero y la rueda basal, arropados por HMW1 y HMW3 para llevar cada impulso hacia los [[pies deslizantes Nap|real-myco-nap]] mientras un segundo bastón gemelo nace a su lado antes de dividirse.',
        blueprint: {
          role: 'Eje citoesquelético central segmentado portador de carga del [[orgánulo terminal|real-myco-rod]]',
          arrivesFrom: 'Autoensamblado con dímeros coiled-coil MG_218 (HMW2) junto a MG_312 (HMW1) y MG_317 (HMW3)',
          inside: 'Placas dobles electrodensas estriadas de ~200 nm tendidas entre la rueda basal y el botón distal',
          deliversTo: 'Sostiene la silueta piriforme, transmite fuerza a [[Nap|real-myco-nap]] y orienta los [[nucleoides|real-myco-nucleoid]]',
          loop: 'La síntesis de un bastón hijo junto al maduro marca el inicio del reparto cromosómico'
        },
        scientific:
          'Núcleo central de placas apareadas segmentadas (~200 nm de largo, ~15–20 estrías periódicas cada ~9–11 nm por criotomografía) del [[citoesqueleto terminal|real-myco-rod]] de [[Mycoplasma genitalium|real-mycoplasma]]. Constituido por homodímeros paralelos superenrollados de MG_218 (HMW2, ~1.800 aa, extremo N distal y C proximal) estabilizados lateralmente por MG_312 (HMW1) y MG_317 (HMW3).',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Subunidades HMW2, HMW1 y HMW3' },
          { nodeId: 'real-myco-nucleoid', label: 'Operones MG_218/312', cargo: 'ARNm estructurales' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Adhesinas Nap', cargo: 'Transmisión axial de fuerza' },
          { nodeId: 'real-mycoplasma', label: 'Cuello del matraz', cargo: 'Morfología polarizada' }
        ]
      }
    },

    wheel: {
      en: {
        subtitle: 'The Proximal Bowl Motor & Chromosome Hitch',
        simple:
          'Cupped around the back end of the [[internal rod|real-myco-rod]], this bowl-shaped protein hub spends glycolytic ATP to drive gliding strokes forward while hitching onto the [[circular DNA|real-myco-nucleoid]] behind it.',
        story:
          'Where the narrow neck widens into the main cytoplasm of [[Mycoplasma genitalium|real-mycoplasma]], the C-terminal tails of the HMW2 rod plug into a curved proximal bowl rich in TopJ chaperone proteins. Spending ATP freshly minted by cytosolic glycolysis, this hub drives subtle back-and-forth lever strokes up the [[rod|real-myco-rod]] and simultaneously tethers the replication origin of the [[580-kilobase nucleoid|real-myco-nucleoid]] so gliding pulls daughter chromosomes apart.',
        blueprint: {
          role: 'Proximal bowl/wheel motor hub coupling glycolytic ATP to [[rod|real-myco-rod]] motion and chromosome tethering',
          arrivesFrom: 'C-terminal domains of HMW2 complexed with MG_200 (TopJ), MG_386 (P200), and glycolytic ATP',
          inside: 'Cup-shaped multimeric hub at the neck-body junction transducing ATPase cycles into axial strokes',
          deliversTo: 'Drives [[terminal rod|real-myco-rod]] gliding linkage forward and anchors the [[nucleoid|real-myco-nucleoid]] oriC pole',
          loop: 'Disrupting MG_200 or P200 leaves Nap adhesion intact while abolishing gliding speed'
        },
        scientific:
          'Proximal ~50-60 nm electron-dense bowl ("wheel") complex at the base of the [[Mycoplasma genitalium|real-mycoplasma]] [[terminal organelle|real-myco-rod]], integrating C-terminal HMW2 domains with J-domain cochaperone MG_200 (TopJ) and motility-specific cytadherence accessory protein MG_386 (P200). Couples cytoplasmic ATP hydrolysis to conformational displacements along the rod while physically tethering the [[chromosomal|dna]] oriC region.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Cytosolic Glycolysis', cargo: 'Substrate-level ATP' },
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'TopJ (MG_200) & P200' }
        ],
        to: [
          { nodeId: 'real-myco-rod', label: 'Segmented Rod Shaft', cargo: 'Mechanical ATP strokes' },
          { nodeId: 'real-myco-nucleoid', label: 'Minimal Chromosome', cargo: 'Polar oriC segregation tether' }
        ]
      },
      es: {
        subtitle: 'El cuenco motor basal y amarre cromosómico',
        simple:
          'Acoplado en la base trasera del [[bastón interno|real-myco-rod]], este núcleo en forma de cuenco consume ATP de la glucólisis para impulsar el deslizamiento y sujetar detrás el [[ADN circular|real-myco-nucleoid]].',
        story:
          'Justo donde el cuello estrecho se abre al cuerpo principal de [[Mycoplasma genitalium|real-mycoplasma]], los extremos traseros del bastón HMW2 encajan en un cuenco proteico rico en chaperonas TopJ. Gastando ATP recién salido de la glucólisis, este centro convierte energía química en empujes axiales a lo largo del [[bastón|real-myco-rod]] mientras amarra el origen del [[nucleoide de 580 kilobases|real-myco-nucleoid]] para arrastrar los cromosomas hijos al separarse.',
        blueprint: {
          role: 'Complejo basal en rueda/cuenco que acopla ATP glucolítico al [[bastón|real-myco-rod]] y al cromosoma',
          arrivesFrom: 'Dominios C-terminales de HMW2 unidos a MG_200 (TopJ), MG_386 (P200) y ATP citosólico',
          inside: 'Buje multimérico cóncavo en la unión cuello-cuerpo que convierte hidrólisis de ATP en pulsos mecánicos',
          deliversTo: 'Acciona el [[bastón terminal|real-myco-rod]] y retiene el polo oriC del [[nucleoide|real-myco-nucleoid]]',
          loop: 'Las mutaciones en MG_200 o P200 conservan la adhesión pero anulan la velocidad de deslizamiento'
        },
        scientific:
          'Complejo proximal en cuenco («rueda», ~50–60 nm) en la base del [[orgánulo terminal|real-myco-rod]] de [[Mycoplasma genitalium|real-mycoplasma]], formado por los extremos C de HMW2, la cochaperona con dominio J MG_200 (TopJ) y la proteína motora MG_386 (P200). Transduce la hidrólisis de ATP en desplazamientos mecánicos del eje y ancla físicamente la región oriC del [[ADN|dna]].',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Glucólisis citosólica', cargo: 'ATP a nivel de sustrato' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Proteínas TopJ y P200' }
        ],
        to: [
          { nodeId: 'real-myco-rod', label: 'Bastón segmentado', cargo: 'Impulso mecánico axial' },
          { nodeId: 'real-myco-nucleoid', label: 'Cromosoma mínimo', cargo: 'Anclaje polar de oriC' }
        ]
      }
    },

    gliding: {
      en: {
        subtitle: 'The Polar Catch-and-Pull Gliding Linkage',
        simple:
          'Without flagella or pili, [[Mycoplasma|real-mycoplasma]] crawls steadily tip-first across human [[cilia|cilium]] by passing tiny mechanical strokes from its [[internal rod|real-myco-rod]] out to its [[Nap feet|real-myco-nap]].',
        story:
          'Swimming bacteria spin rotary flagella, yet [[Mycoplasma genitalium|real-mycoplasma]] discarded every flagellar gene and still travels up to 400 nanometers every second across wet airway surfaces. Transmembrane couplers bridging the [[segmented rod|real-myco-rod]] to outer [[Nap crowns|real-myco-nap]] convert cytosolic ATP bursts into coordinated inchworm steps: front feet grab sialic-acid sugars, pull the flask forward, and pop open as trailing feet reset.',
        blueprint: {
          role: 'Transmembrane mechanochemical transmission coupling [[internal rod|real-myco-rod]] strokes to [[Nap|real-myco-nap]] stepping',
          arrivesFrom: 'ATP-driven axial displacements from the basal wheel and [[HMW2 rod|real-myco-rod]] across the [[bilayer|phospholipid]]',
          inside: 'Cytoplasmic C-terminal tails of MgpB/MgpC engaging peripheral terminal-organelle linkers',
          deliversTo: 'Unidirectional ~0.1-0.4 micrometers/s crawling along [[cilia|cilium]] and tension-assisted cytokinesis',
          loop: 'Opposing gliding traction between two daughter poles stretches the dividing membrane neck until it pinches off'
        },
        scientific:
          'Flagella-independent Mollicutes surface gliding apparatus operating exclusively in the direction of the [[terminal organelle|real-myco-rod]] (~0.1-0.4 micrometers/s, ~25-30 pN stall force). Driven by cytoplasmic ATP hydrolysis rather than proton-motive force, transmitting sub-10-nm conformational steps across [[phospholipid|phospholipid]]-spanning MgpB/MgpC helices to cycle [[Nap ectodomains|real-myco-nap]] (PDB 6RUT/6RUV) along sialylated [[cilia|cilium]].',
        from: [
          { nodeId: 'real-myco-rod', label: 'Rod & Basal Wheel', cargo: 'ATP-driven axial force' },
          { nodeId: 'phospholipid', label: 'Polar Neck Bilayer', cargo: 'Transmembrane tail coupling' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Nap Foot Array', cargo: 'Catch-and-release stepping' },
          { nodeId: 'cilium', label: 'Ciliary Surface', cargo: '0.1-0.4 um/s crawling' }
        ]
      },
      es: {
        subtitle: 'El acoplamiento polar de marcha deslizante',
        simple:
          'Sin flagelos ni pili, [[Mycoplasma|real-mycoplasma]] avanza siempre con la punta por delante sobre los [[cilios|cilium]] humanos transmitiendo pulsos desde su [[bastón interno|real-myco-rod]] hasta sus [[pies Nap|real-myco-nap]].',
        story:
          'Mientras otras bacterias giran hélices flagelares, [[Mycoplasma genitalium|real-mycoplasma]] eliminó todos los genes del flagelo y aun así recorre hasta 400 nanómetros por segundo sobre superficies mucosas. Enlaces transmembrana entre el [[bastón segmentado|real-myco-rod]] y las [[coronas Nap|real-myco-nap]] convierten el gasto de ATP en pasos coordinados: los pies delanteros atrapan ácido siálico, tiran del matraz y se abren para repetir el ciclo.',
        blueprint: {
          role: 'Transmisión mecanicoquímica transmembrana entre el [[bastón interno|real-myco-rod]] y los pies [[Nap|real-myco-nap]]',
          arrivesFrom: 'Pulsos axiales impulsados por ATP desde la rueda basal y el [[bastón HMW2|real-myco-rod]] por la [[bicapa|phospholipid]]',
          inside: 'Colas citoplasmáticas C-terminales de MgpB/MgpC acopladas a adaptadores del orgánulo terminal',
          deliversTo: 'Avance unidireccional (~0,1–0,4 µm/s) sobre [[cilios|cilium]] y tracción final en la citocinesis',
          loop: 'El avance opuesto de dos polos hijos estira el cuello membranoso hasta escindir ambas células'
        },
        scientific:
          'Sistema de deslizamiento superficial de Mollicutes independiente de flagelos y de fuerza protón-motriz (~0,1–0,4 µm/s, fuerza de bloqueo ~25–30 pN). Acopla directamente la hidrólisis citosólica de ATP a través de las hélices transmembrana MgpB/MgpC en la bicapa de [[fosfolípidos|phospholipid]] para alternar estados conformacionales de [[Nap|real-myco-nap]] (PDB 6RUT/6RUV) sobre [[cilios|cilium]].',
        from: [
          { nodeId: 'real-myco-rod', label: 'Bastón y rueda basal', cargo: 'Tracción dependiente de ATP' },
          { nodeId: 'phospholipid', label: 'Bicapa del cuello polar', cargo: 'Acoplamiento transmembrana' }
        ],
        to: [
          { nodeId: 'real-myco-nap', label: 'Batería de pies Nap', cargo: 'Ciclo de agarre y suelta' },
          { nodeId: 'cilium', label: 'Superficie ciliar', cargo: 'Deslizamiento polar' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: 'The 580-Kilobase Minimal Cellular Blueprint',
        simple:
          'Coiled openly in the middle of the flask, this single 580,076-letter ring of [[double-stranded DNA|dna]] holds the smallest gene set known in any naturally self-replicating cell.',
        story:
          'Compare this [[chromosome|real-myco-nucleoid]] to autonomous [[E. coli|real-bacterium]]: nearly four million letters of metabolic backup were trimmed away over evolution, leaving just 482 protein genes and 43 RNA genes. Yet unlike [[viruses|viruses]], every core instruction for membrane maintenance, DNA replication, [[RNA polymerase|rna-polymerase]], and [[70S ribosomes|ribosome-70s]] remains intact so the cell copies itself without hijacking host ribosomes.',
        blueprint: {
          role: 'Minimal circular [[dsDNA|dna]] chromosome encoding autonomous cellular life in ~482 protein genes',
          arrivesFrom: 'Semiconservative replication from oriC using salvaged host deoxynucleosides',
          inside: '580,076 bp AT-rich (31.7% GC) supercoiled [[nucleoid|real-myco-nucleoid]] bent by HU dimers and DNA gyrase',
          deliversTo: 'Templates polycistronic [[mRNA|rna]], rRNA, and tRNA synthesis by [[RNA polymerase|rna-polymerase]]',
          loop: 'Tethered at oriC to the [[terminal organelle|real-myco-rod]] so daughter rings segregate to opposite poles'
        },
        scientific:
          'Covalently closed circular [[dsDNA|dna]] chromosome of [[Mycoplasma genitalium|real-mycoplasma]] G37 (580,076 bp, 31.7% GC, ~197 micrometers contour length, 482 protein-coding ORFs + 1 rRNA operon + 36 tRNA genes; ~8 times smaller than the 4.64 Mbp [[Escherichia coli|real-bacterium]] genome). Sequenced in 1995 as the second complete bacterial genome and used to design the 531 kbp synthetic minimal cell JCVI-syn3.0.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Nucleoside Salvage Kinases', cargo: 'dATP, dTTP, dGTP & dCTP' },
          { nodeId: 'real-myco-rod', label: 'Proximal Wheel Tether', cargo: 'Polar oriC positioning' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'Minimal RNA Polymerase', cargo: '482-gene template loops' },
          { nodeId: 'real-myco-nucleoid', label: 'Daughter Flasks', cargo: 'Segregated genome copies' }
        ]
      },
      es: {
        subtitle: 'El plano celular mínimo de 580 kilobases',
        simple:
          'Plegado sin envoltura nuclear en el centro del matraz, este único aro de [[ADN bicatenario|dna]] de 580.076 letras reúne el repertorio génico más reducido conocido en una célula natural autorreplicante.',
        story:
          'Si lo comparas con [[E. coli|real-bacterium]], casi cuatro millones de letras de rutas metabólicas accesorias desaparecieron con la evolución, quedando solo 482 genes proteicos y 43 de ARN. Sin embargo, a diferencia de los [[virus|viruses]], este [[nucleoide|real-myco-nucleoid]] conserva íntegras las instrucciones para replicar su ADN, transcribir con [[ARN polimerasa|rna-polymerase]] y traducir proteínas en [[ribosomas 70S|ribosome-70s]] propios.',
        blueprint: {
          role: 'Cromosoma circular mínimo de [[ADNbc|dna]] que sostiene una célula autónoma con ~482 genes proteicos',
          arrivesFrom: 'Replicación semiconservativa desde oriC alimentada por desoxinucleósidos rescatados del huésped',
          inside: 'Anillo superenrollado rico en AT (580.076 pb; 31,7 % GC) en el [[nucleoide|real-myco-nucleoid]] plegado por HU y girasa',
          deliversTo: 'Sirve de molde de [[ARNm|rna]], ARNr y ARNt para la [[ARN polimerasa|rna-polymerase]]',
          loop: 'Unido por oriC al [[orgánulo terminal|real-myco-rod]] para repartir copias fieles a cada polo hijo'
        },
        scientific:
          'Cromosoma circular cerrado de [[ADNbc|dna]] de [[Mycoplasma genitalium|real-mycoplasma]] G37 (580.076 pb, 31,7 % GC, ~197 µm de contorno, 482 ORF proteicos, 1 operón rRNA y 36 ARNt; ocho veces menor que los 4,64 Mpb de [[Escherichia coli|real-bacterium]]). Secuenciado en 1995 como referencia histórica de genómica mínima e inspiración directa de JCVI-syn3.0.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Rescate de nucleósidos', cargo: 'dATP, dTTP, dGTP y dCTP' },
          { nodeId: 'real-myco-rod', label: 'Amarre de la rueda basal', cargo: 'Posicionamiento de oriC' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa mínima', cargo: 'Moldes génicos expuestos' },
          { nodeId: 'real-myco-nucleoid', label: 'Células hijas', cargo: 'Cromosoma duplicado' }
        ]
      }
    },

    hu: {
      en: {
        subtitle: 'The Lone Chromosomal Bender',
        simple:
          'Stretching nearly 200 micrometers if pulled straight, the [[DNA ring|dna]] fits neatly inside a 300-nanometer cell because compact HU protein clamps bend sharp U-turns along the helix.',
        story:
          'Free-living bacteria juggle half a dozen nucleoid-shaping proteins, whereas [[Mycoplasma genitalium|real-mycoplasma]] trimmed that toolkit down to one essential architect: the two-armed HU dimer. Gripping the minor groove of the [[580-kilobase chromosome|real-myco-nucleoid]] every few dozen base pairs alongside topoisomerases, HU folds long DNA loops compactly without blocking [[RNA polymerase|rna-polymerase]] from reading active genes.',
        blueprint: {
          role: 'Sole conserved nucleoid-associated architectural protein compacting the [[minimal chromosome|real-myco-nucleoid]]',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]] from essential gene MG_353',
          inside: 'Homodimeric ~20 kDa beta-ribbon arms inserting conserved prolines into [[dsDNA|dna]] minor grooves (~90-140 deg bends)',
          deliversTo: '>500-fold compaction of the 197-micrometer [[DNA|dna]] contour while keeping promoters open to [[RNAP|rna-polymerase]]',
          loop: 'Transposon disruption of MG_353 is lethal even in synthetic minimal mycoplasma genomes'
        },
        scientific:
          'Essential bacterial histone-like architectural homodimer HupB/HU encoded by MG_353 (2 x ~10 kDa subunits; structural homolog PDB 1P71) and sole canonical nucleoid-associated protein retained in [[Mycoplasma genitalium|real-mycoplasma]] (which lacks H-NS, Fis, and IHF). Intercalates conserved beta-arm proline residues into [[B-DNA|dna]] to induce sharp flexible bends and stabilize negative supercoiling.',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'MG_353 HU monomers' },
          { nodeId: 'dna', label: '580 kbp dsDNA Ring', cargo: 'Exposed minor-groove sites' }
        ],
        to: [
          { nodeId: 'real-myco-nucleoid', label: 'Compacted Nucleoid', cargo: 'Flexible plectonemic loops' },
          { nodeId: 'rna-polymerase', label: 'Active Promoters', cargo: 'Accessible transcription loops' }
        ]
      },
      es: {
        subtitle: 'El único arquitecto que pliega el cromosoma',
        simple:
          'Aunque estirado mediría casi 200 micrómetros, el [[anillo de ADN|dna]] cabe sin enredos en una célula de 300 nanómetros porque pequeñas pinzas proteicas HU doblan curvas cerradas en la hélice.',
        story:
          'Las bacterias de vida libre combinan media docena de proteínas moldeadoras del nucleoide, pero [[Mycoplasma genitalium|real-mycoplasma]] redujo ese equipo a una sola pieza indispensable: el dímero HU. Abrazando el surco menor del [[cromosoma de 580 kilobases|real-myco-nucleoid]], HU empaqueta largos bucles elásticos sin estorbar el paso de la [[ARN polimerasa|rna-polymerase]].',
        blueprint: {
          role: 'Única proteína arquitectónica conservada asociada al [[nucleoide mínimo|real-myco-nucleoid]]',
          arrivesFrom: 'Traducida en [[ribosomas 70S|ribosome-70s]] a partir del gen esencial MG_353',
          inside: 'Homodímero (~20 kDa) cuyos brazos β insertan prolinas en el surco menor del [[ADNbc|dna]] (~90–140° de giro)',
          deliversTo: 'Compacta >500 veces los 197 µm de [[ADN|dna]] manteniendo accesibles los promotores para la [[ARN polimerasa|rna-polymerase]]',
          loop: 'La inactivación de MG_353 resulta letal incluso en células mínimas sintéticas'
        },
        scientific:
          'Homodímero arquitectónico bacteriano tipo histona HU codificado por MG_353 (2 × ~10 kDa; homólogo estructural PDB 1P71), única proteína asociada al nucleoide canónica conservada en [[Mycoplasma genitalium|real-mycoplasma]] (carente de H-NS, Fis e IHF). Intercala residuos conservados de prolina en el [[ADN-B|dna]] para inducir curvaturas agudas y estabilizar superenrollamientos negativos.',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Subunidades HU MG_353' },
          { nodeId: 'dna', label: 'Anillo de ADN de 580 kpb', cargo: 'Surco menor de la hélice' }
        ],
        to: [
          { nodeId: 'real-myco-nucleoid', label: 'Nucleoide plegado', cargo: 'Bucles superenrollados' },
          { nodeId: 'rna-polymerase', label: 'Promotores activos', cargo: 'Lectura sin bloqueo' }
        ]
      }
    },

    fork: {
      en: {
        subtitle: 'The Streamlined Replisome Fork',
        simple:
          'Unzipping from a single start site, two minimal copying forks race around the [[580-kilobase DNA ring|dna]] using salvaged human DNA building blocks so [[Mycoplasma|real-mycoplasma]] can divide into two cells.',
        story:
          'Initiated at oriC near the base of the [[terminal rod|real-myco-rod]], helicase rings peel apart the AT-rich [[chromosome|real-myco-nucleoid]] while sliding-clamp DNA polymerases stitch imported deoxynucleotides into two identical daughter circles. Ahead of the fork, DNA gyrase relieves superhelical twist - making fluoroquinolone antibiotics like moxifloxacin potent weapons when macrolide resistance emerges.',
        blueprint: {
          role: 'Minimal bidirectional chromosomal replication fork duplicating the [[580 kbp genome|real-myco-nucleoid]]',
          arrivesFrom: 'DnaA firing at oriC plus dNTPs phosphorylated from imported host deoxynucleosides',
          inside: 'Replicative helicase, primase, beta-clamped PolC/DnaE polymerase, and GyrAB/Topo IV topoisomerases on [[dsDNA|dna]]',
          deliversTo: 'Two catenane-resolved circular chromosomes segregated by opposing [[terminal rods|real-myco-rod]]',
          loop: 'Fluoroquinolones trap GyrA/ParC cleavage complexes ahead of the fork to halt Mycoplasma replication'
        },
        scientific:
          'Streamlined Gram-positive-affiliated (Firmicutes/Mollicutes) replisome of [[Mycoplasma genitalium|real-mycoplasma]] initiating at oriC and employing replicative family-C polymerase PolC (MG_031) with DnaN beta2 clamp (MG_001), DnaB-like helicase, DnaG primase, DNA gyrase (MG_003/MG_004), and topoisomerase IV (MG_203/MG_204). Completes 580 kbp [[dsDNA|dna]] duplication strictly from salvaged dNMP precursors lacking ribonucleotide-independent de novo purine/pyrimidine synthesis.',
        from: [
          { nodeId: 'dna', label: 'Parental 580 kbp Ring', cargo: 'Template strands from oriC' },
          { nodeId: 'real-mycoplasma', label: 'Salvage Kinases', cargo: 'Cytosolic dNTP pool' }
        ],
        to: [
          { nodeId: 'real-myco-nucleoid', label: 'Daughter Nucleoids', cargo: 'Two 580 kbp dsDNA circles' },
          { nodeId: 'real-myco-rod', label: 'Dual Terminal Poles', cargo: 'Segregation before fission' }
        ]
      },
      es: {
        subtitle: 'La horquilla replicativa simplificada',
        simple:
          'Abriéndose desde un único punto de inicio, dos horquillas copiadoras mínimas recorren el [[anillo de ADN de 580 kilobases|dna]] usando ladrillos rescatados del huésped para que [[Mycoplasma|real-mycoplasma]] pueda dividirse.',
        story:
          'Iniciada en oriC junto a la base del [[bastón terminal|real-myco-rod]], la helicasa separa el [[cromosoma|real-myco-nucleoid]] rico en AT mientras polimerasas sujetas por pinzas deslizantes ensamblan dos círculos hijos idénticos. Delante del avance, la ADN girasa libera los nudos torsionales, razón por la cual fluoroquinolonas como el moxifloxacino bloquean con eficacia su multiplicación.',
        blueprint: {
          role: 'Horquilla replicativa bidireccional mínima que duplica el [[genoma de 580 kpb|real-myco-nucleoid]]',
          arrivesFrom: 'Activación por DnaA en oriC y dNTP obtenidos por fosforilación de desoxinucleósidos humanos',
          inside: 'Helicasa replicativa, primasa, polimerasa PolC con pinza β y topoisomerasas GyrAB/ParCE sobre [[ADNbc|dna]]',
          deliversTo: 'Dos cromosomas circulares desencadenados y repartidos hacia [[bastones terminales|real-myco-rod]] opuestos',
          loop: 'Las fluoroquinolonas inmovilizan la girasa y topoisomerasa IV delante de la horquilla deteniendo la división'
        },
        scientific:
          'Replisoma reducido de linaje Firmicutes/Mollicutes en [[Mycoplasma genitalium|real-mycoplasma]], dotado de polimerasa replicativa PolC (MG_031), pinza deslizante DnaN β2 (MG_001), helicasa, primasa DnaG, ADN girasa (MG_003/MG_004) y topoisomerasa IV (MG_203/MG_204). Duplica los 580 kpb de [[ADNbc|dna]] dependiendo exclusivamente de precursores nucleosídicos rescatados.',
        from: [
          { nodeId: 'dna', label: 'Anillo parental de 580 kpb', cargo: 'Hebras molde desde oriC' },
          { nodeId: 'real-mycoplasma', label: 'Quinasas de rescate', cargo: 'Reserva de dNTP' }
        ],
        to: [
          { nodeId: 'real-myco-nucleoid', label: 'Nucleoides hijos', cargo: 'Dos aros completos de ADNbc' },
          { nodeId: 'real-myco-rod', label: 'Polos terminales gemelos', cargo: 'Segregación polar' }
        ]
      }
    },

    rnap: {
      en: {
        subtitle: 'One Sigma Factor Rules the Whole Cell',
        simple:
          'Whereas free-living bacteria carry many switchable promoter guides for changing environments, [[Mycoplasma|real-mycoplasma]] runs its [[RNA polymerase|rna-polymerase]] with just a single housekeeping sigma factor.',
        story:
          'Because warm human mucosa stays near 37 degrees Celsius year-round, [[Mycoplasma genitalium|real-mycoplasma]] discarded emergency sigma factors for starvation or cold shock. Armed with its lone SigA guide, bacterial [[RNA polymerase|rna-polymerase]] clamps onto exposed promoters of the [[580-kilobase nucleoid|real-myco-nucleoid]] and reels out long multi-gene [[mRNA ribbons|rna]] straight toward nearby [[70S ribosomes|ribosome-70s]].',
        blueprint: {
          role: 'Core bacterial [[RNA polymerase|rna-polymerase]] holoenzyme operating with a single housekeeping sigma factor',
          arrivesFrom: 'Assembled from RpoA2, RpoB, RpoC, and lone sigma-70 subunit SigA (MG_249) plus salvaged NTPs',
          inside: 'Crab-claw catalytic core unwinding [[minimal nucleoid|real-myco-nucleoid]] promoters to polymerize nascent [[RNA|rna]]',
          deliversTo: 'Streams polycistronic [[mRNA|rna]] directly into coupled [[70S ribosomes|ribosome-70s]] plus rRNA/tRNA',
          loop: 'Minimal transcriptional regulation relies mainly on DNA supercoiling and small leader attenuators'
        },
        scientific:
          'Four-subunit bacterial core [[RNA polymerase|rna-polymerase]] (alpha2-beta-betaPrime; MG_177, MG_340, MG_341) complexed with the sole sigma factor encoded in the [[Mycoplasma genitalium|real-mycoplasma]] genome, housekeeping sigma-A (MG_249). Transcribes sub-operons and long polycistronic [[mRNAs|rna]] across the 580 kbp [[dsDNA|dna]] chromosome using ATP, GTP, CTP, and UTP salvaged from host nucleosides.',
        from: [
          { nodeId: 'real-myco-nucleoid', label: '580 kbp Nucleoid', cargo: 'SigA housekeeping promoters' },
          { nodeId: 'real-mycoplasma', label: 'Nucleotide Salvage', cargo: 'ATP, GTP, CTP & UTP' }
        ],
        to: [
          { nodeId: 'rna', label: 'Polycistronic mRNA', cargo: 'Co-transcriptional ribbons' },
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'Coupled translation handoff' }
        ]
      },
      es: {
        subtitle: 'Un único factor sigma gobierna toda la célula',
        simple:
          'Mientras las bacterias libres alternan múltiples guías promotoras ante cambios bruscos, [[Mycoplasma|real-mycoplasma]] opera su [[ARN polimerasa|rna-polymerase]] con un solo factor sigma doméstico.',
        story:
          'Como la mucosa humana permanece estable a unos 37 °C todo el año, [[Mycoplasma genitalium|real-mycoplasma]] prescindió de los factores sigma de choque térmico o ayuno. Guiada únicamente por SigA, su [[ARN polimerasa|rna-polymerase]] recorre el [[nucleoide de 580 kilobases|real-myco-nucleoid]] y tiende largas cintas multigénicas de [[ARNm|rna]] directamente hacia los [[ribosomas 70S|ribosome-70s]].',
        blueprint: {
          role: 'Holoenzima [[ARN polimerasa|rna-polymerase]] bacteriana gobernada por un único factor sigma doméstico',
          arrivesFrom: 'Ensamblada con RpoA2, RpoB, RpoC y la subunidad única SigA (MG_249) más NTP rescatados',
          inside: 'Pinza catalítica que abre promotores del [[nucleoide mínimo|real-myco-nucleoid]] para sintetizar [[ARN|rna]]',
          deliversTo: 'Entrega [[ARNm|rna]] policistrónico en acoplamiento directo a [[ribosomas 70S|ribosome-70s]], además de ARNr y ARNt',
          loop: 'La regulación génica mínima descansa sobre todo en el superenrollamiento del ADN'
        },
        scientific:
          'Holoenzima [[ARN polimerasa|rna-polymerase]] bacteriana (núcleo α2ββ′: MG_177, MG_340, MG_341) asociada al único factor sigma conservado en [[Mycoplasma genitalium|real-mycoplasma]], SigA (MG_249). Sintetiza unidades policistrónicas de [[ARNm|rna]], el único operón de ARNr y los 36 ARNt sobre el cromosoma de [[ADNbc|dna]] de 580 kpb.',
        from: [
          { nodeId: 'real-myco-nucleoid', label: 'Nucleoide de 580 kpb', cargo: 'Promotores domésticos SigA' },
          { nodeId: 'real-mycoplasma', label: 'Rescate de nucleótidos', cargo: 'ATP, GTP, CTP y UTP' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm policistrónico', cargo: 'Transcritos nacientes' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Traducción acoplada' }
        ]
      }
    },

    mrna: {
      en: {
        subtitle: 'Rewired Genetic Code Ribbons',
        simple:
          'Streaming directly from [[RNA polymerase|rna-polymerase]] into [[70S ribosomes|ribosome-70s]], Mycoplasma [[messenger RNAs|rna]] use a slightly rewired dialect where the usual UGA stop sign codes for the amino acid tryptophan.',
        story:
          'With zero nuclear membrane inside [[Mycoplasma genitalium|real-mycoplasma]], the front end of each [[mRNA strand|rna]] feeds into a waiting [[70S ribosome|ribosome-70s]] while its back end is still being copied off the [[580-kilobase DNA|real-myco-nucleoid]]. Over reductive evolution, Mycoplasma lost Release Factor 2 and reassigned UGA to tryptophan - so if a Mycoplasma gene is pasted unmodified into [[E. coli|real-bacterium]], translation halts prematurely.',
        blueprint: {
          role: 'Polycistronic and leaderless [[mRNA|rna]] transcripts carrying the Mollicutes UGA-to-Trp genetic code',
          arrivesFrom: 'Synthesized co-transcriptionally off the [[580 kbp chromosome|real-myco-nucleoid]] by [[RNA polymerase|rna-polymerase]]',
          inside: 'Single-stranded [[RNA|rna]] operons read via Shine-Dalgarno or leaderless initiation with UGA = Trp',
          deliversTo: 'Decoded by ~150 [[70S ribosomes|ribosome-70s]] before rapid turnover by RNase R and RNase J1',
          loop: 'Ribonucleolytic recycling returns NMPs to salvage kinases so scarce nucleotides never go to waste'
        },
        scientific:
          'Uncapped polycistronic and leaderless [[mRNA|rna]] transcriptome of [[Mycoplasma genitalium|real-mycoplasma]] utilizing NCBI Translation Table 4 (deletion of prfB/RF-2 reassigns UGA from opal stop to Trp via tRNA-Trp CCA/UCA, leaving RF-1 to terminate solely at UAA and UAG). Immediately engaged co-transcriptionally by [[70S ribosomes|ribosome-70s]] and degraded back into reusable mononucleotides by exoribonuclease RNase R (MG_104).',
        from: [
          { nodeId: 'rna-polymerase', label: 'SigA RNA Polymerase', cargo: 'Nascent operon transcripts' },
          { nodeId: 'real-myco-nucleoid', label: 'Minimal Gene Clusters', cargo: 'AT-rich coding sequences' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: '70S Polysomes', cargo: 'Table-4 UGA=Trp decoding' },
          { nodeId: 'real-mycoplasma', label: 'RNase R Recycling', cargo: 'Salvaged ribonucleotides' }
        ]
      },
      es: {
        subtitle: 'Cintas de ARNm con dialecto genético propio',
        simple:
          'Pasando sin pausa de la [[ARN polimerasa|rna-polymerase]] a los [[ribosomas 70S|ribosome-70s]], los [[ARN mensajeros|rna]] de Mycoplasma leen el habitual codón de parada UGA como el aminoácido triptófano.',
        story:
          'Al no existir envoltura nuclear en [[Mycoplasma genitalium|real-mycoplasma]], el extremo inicial de cada [[hebra de ARNm|rna]] entra en un [[ribosoma 70S|ribosome-70s]] mientras el final aún se transcribe sobre el [[ADN de 580 kilobases|real-myco-nucleoid]]. Durante su reducción genómica perdió el factor de liberación 2 y reasignó UGA a triptófano, razón por la que sus genes sin adaptar se truncan dentro de [[E. coli|real-bacterium]].',
        blueprint: {
          role: 'Transcritos policistrónicos de [[ARNm|rna]] codificados según el dialecto Mollicutes (UGA = Trp)',
          arrivesFrom: 'Transcritos directamente sobre el [[cromosoma de 580 kpb|real-myco-nucleoid]] por la [[ARN polimerasa|rna-polymerase]]',
          inside: 'Operones de [[ARN|rna]] monocatenario traducidos con reasignación de UGA a triptófano y paradas UAA/UAG',
          deliversTo: 'Alimentan ~150 [[ribosomas 70S|ribosome-70s]] antes de reciclarse mediante RNasa R y RNasa J1',
          loop: 'El reciclaje ribonucleolítico devuelve mononucleótidos a la reserva citosólica ahorrando recursos'
        },
        scientific:
          'Transcriptoma de [[ARNm|rna]] policistrónico y sin líder de [[Mycoplasma genitalium|real-mycoplasma]] regido por el código genético de Mollicutes (Tabla 4 de NCBI: pérdida de prfB/RF-2 y lectura de UGA como Trp por ARNt-Trp, terminando exclusivamente en UAA/UAG con RF-1). Se traduce cotranscripcionalmente en [[ribosomas 70S|ribosome-70s]] y se recicla mediante la exorribonucleasa RNasa R (MG_104).',
        from: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa SigA', cargo: 'Cintas de ARNm naciente' },
          { nodeId: 'real-myco-nucleoid', label: 'Operones mínimos', cargo: 'Secuencias ricas en AT' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'Polisomas 70S', cargo: 'Lectura con UGA = Trp' },
          { nodeId: 'real-mycoplasma', label: 'Reciclaje por RNasa R', cargo: 'Mononucleótidos reutilizables' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: 'The ~150 Ribosomes That Prove Cellular Life',
        simple:
          'About 150 bacterial [[70S ribosomes|ribosome-70s]] crowd the tiny flask - proving [[Mycoplasma|real-mycoplasma]] is a true living cell rather than a [[virus|viruses]], and giving macrolide and tetracycline antibiotics a clear target.',
        story:
          'Whereas [[E. coli|real-bacterium]] packs tens of thousands of ribosomes, [[Mycoplasma genitalium|real-mycoplasma]] gets by on roughly 150 [[70S machines|ribosome-70s]] supplied by a single rRNA operon in its [[minimal nucleoid|real-myco-nucleoid]]. Even though beta-lactams fail because there is no wall, drugs like azithromycin and doxycycline slip across the [[membrane|phospholipid]] and jam these 70S tunnels directly.',
        blueprint: {
          role: 'Autonomous bacterial [[70S ribosome|ribosome-70s]] pool (~150 copies/cell) synthesizing the minimal proteome',
          arrivesFrom: 'Assembled from the single 16S-23S-5S rRNA operon in the [[nucleoid|real-myco-nucleoid]] plus ~53 r-proteins',
          inside: '30S decoding + 50S peptidyl-transferase subunits translating [[mRNA|rna]] using just 36 minimal tRNA species',
          deliversTo: 'Produces glycolytic enzymes, salvage transporters, [[terminal rod|real-myco-rod]] girders, and [[Nap adhesins|real-myco-nap]]',
          loop: 'Primary clinical target of tetracyclines (30S A-site) and macrolides (50S exit tunnel; 23S A2058G confers resistance)'
        },
        scientific:
          'Cytoplasmic complement of ~140-180 bacterial [[70S ribosomes|ribosome-70s]] (~2.3 MDa; in-cell cryo-ET resolved with EF-Tu/EF-G states) occupying ~15% of [[Mycoplasma genitalium|real-mycoplasma]] internal volume. Operates with an ultra-reduced 36-tRNA set via extended wobble pairing; absence of [[peptidoglycan|peptidoglycan]] leaves the 30S (doxycycline) and 50S 23S-rRNA peptidyl-transferase/exit tunnel (azithromycin) as frontline therapeutic targets.',
        from: [
          { nodeId: 'rna', label: 'Polycistronic mRNA & 36 tRNAs', cargo: 'Codons & aminoacyl-tRNAs' },
          { nodeId: 'real-myco-nucleoid', label: 'Single rRNA Operon', cargo: '16S, 23S & 5S rRNA scaffolds' }
        ],
        to: [
          { nodeId: 'real-myco-rod', label: 'Terminal Cytoskeleton', cargo: 'HMW1/2/3 & P65 proteins' },
          { nodeId: 'real-myco-nap', label: 'Sec-Exported Surface', cargo: 'Nap P140/P110 & lipoproteins' }
        ]
      },
      es: {
        subtitle: 'Los ~150 ribosomas que certifican vida celular',
        simple:
          'Unos 150 [[ribosomas 70S|ribosome-70s]] bacterianos pueblan el diminuto matraz: demuestran que [[Mycoplasma|real-mycoplasma]] es una célula viva y no un [[virus|viruses]], y ofrecen diana a macrólidos y tetraciclinas.',
        story:
          'Mientras [[E. coli|real-bacterium]] alberga decenas de miles de ribosomas, [[Mycoplasma genitalium|real-mycoplasma]] sostiene toda su vida con cerca de 150 [[máquinas 70S|ribosome-70s]] abastecidas por un único operón de ARNr en su [[nucleoide mínimo|real-myco-nucleoid]]. Aunque las penicilinas fracasan al no haber pared, fármacos como la azitromicina o la doxiciclina cruzan la [[membrana|phospholipid]] y bloquean directamente estos túneles 70S.',
        blueprint: {
          role: 'Dotación autónoma de [[ribosomas 70S|ribosome-70s]] (~150 copias/célula) productora del proteoma mínimo',
          arrivesFrom: 'Ensamblados a partir del único operón ARNr 16S–23S–5S del [[nucleoide|real-myco-nucleoid]] y ~53 proteínas ribosómicas',
          inside: 'Subunidades 30S y 50S que traducen [[ARNm|rna]] empleando un conjunto mínimo de solo 36 ARNt',
          deliversTo: 'Sintetiza enzimas glucolíticas, permeasas, piezas del [[bastón terminal|real-myco-rod]] y [[adhesinas Nap|real-myco-nap]]',
          loop: 'Diana clínica esencial de doxiciclina (30S) y azitromicina (túnel 50S; mutaciones 23S A2058G causan resistencia)'
        },
        scientific:
          'Población citoplasmática de ~140–180 [[ribosomas 70S|ribosome-70s]] (~2,3 MDa; caracterizados in situ por criotomografía electrónica) que ocupa ~15 % del volumen interno de [[Mycoplasma genitalium|real-mycoplasma]]. Traduce con solo 36 especies de ARNt mediante apareamiento oscilante ampliado; ante la ausencia de [[peptidoglicano|peptidoglycan]], constituye la diana terapéutica principal frente a infecciones por micoplasmas.',
        from: [
          { nodeId: 'rna', label: 'ARNm y 36 ARNt mínimos', cargo: 'Codones y aminoácidos' },
          { nodeId: 'real-myco-nucleoid', label: 'Operón único de ARNr', cargo: 'ARNr 16S, 23S y 5S' }
        ],
        to: [
          { nodeId: 'real-myco-rod', label: 'Citoesqueleto polar', cargo: 'Proteínas HMW1/2/3 y P65' },
          { nodeId: 'real-myco-nap', label: 'Superficie vía Sec', cargo: 'Complejos Nap y lipoproteínas' }
        ]
      }
    },

    import: {
      en: {
        subtitle: 'The All-Salvage Supply Gates',
        simple:
          'Having deleted the genes to build amino acids, nucleotides, and fatty acids from scratch, [[Mycoplasma|real-mycoplasma]] lines its [[membrane|phospholipid]] with high-affinity pumps that import ready-made building blocks from human mucus.',
        story:
          'Genome reduction works only when the surrounding [[host tissue|real-cell]] acts as a stocked pantry. Across its single [[phospholipid|phospholipid]] bilayer, [[Mycoplasma genitalium|real-mycoplasma]] runs ATP-driven ABC and ECF salvage gates alongside PTS sugar ports - hauling in nucleosides for [[DNA|dna]] and [[RNA|rna]], oligopeptides for [[70S ribosomes|ribosome-70s]], fatty acids for membrane repair, and glucose for glycolysis.',
        blueprint: {
          role: 'High-affinity ABC, ECF, and PTS salvage transporter suite replacing de novo biosynthesis',
          arrivesFrom: 'Extracellular nucleosides, oligopeptides, amino acids, vitamins, fatty acids, and glucose on [[host epithelia|real-cell]]',
          inside: 'ATP-binding cassette (Opp/Nup) and ECF vitamin permeases plus PTS glucose IIABC spanning the [[bilayer|phospholipid]]',
          deliversTo: 'Supplies precursors straight to salvage kinases, [[70S ribosomes|ribosome-70s]], [[replisomes|real-myco-nucleoid]], and glycolysis',
          loop: 'Consumes a major fraction of glycolytic ATP to keep intracellular monomer pools stocked'
        },
        scientific:
          'Membrane transport proteome (~45-50 ORFs, ~10% of the [[Mycoplasma genitalium|real-mycoplasma]] genome) compensating for total loss of de novo amino-acid, purine/pyrimidine, cofactor, and fatty-acid biosynthetic pathways. Includes oligopeptide/nucleoside ABC importers, energy-coupling factor (ECF) vitamin transporters, FakA/FakB fatty-acid uptake modules, and phosphoenolpyruvate:carbohydrate phosphotransferase (PTS) glucose/fructose permeases.',
        from: [
          { nodeId: 'real-cell', label: 'Host Mucosal Fluid', cargo: 'Nucleosides, peptides & sugars' },
          { nodeId: 'phospholipid', label: 'Cytoplasmic Membrane', cargo: 'Transmembrane permease housing' }
        ],
        to: [
          { nodeId: 'real-myco-nucleoid', label: 'DNA & RNA Synthesis', cargo: 'Salvaged nucleoside precursors' },
          { nodeId: 'ribosome-70s', label: '70S Translation', cargo: 'Imported amino acids' }
        ]
      },
      es: {
        subtitle: 'Las compuertas de rescate total',
        simple:
          'Tras eliminar los genes para fabricar desde cero aminoácidos, nucleótidos y ácidos grasos, [[Mycoplasma|real-mycoplasma]] tapiza su [[membrana|phospholipid]] con bombas que importan piezas ya hechas del moco humano.',
        story:
          'La reducción extrema del genoma solo funciona cuando el [[tejido huésped|real-cell]] actúa como despensa permanente. En su única bicapa de [[fosfolípidos|phospholipid]], [[Mycoplasma genitalium|real-mycoplasma]] despliega permeasas ABC, transportadores ECF de vitaminas y puertos PTS de azúcares para ingresar nucleósidos hacia el [[ADN|dna]] y el [[ARN|rna]], péptidos para los [[ribosomas 70S|ribosome-70s]] y glucosa para la glucólisis.',
        blueprint: {
          role: 'Batería de permeasas ABC, ECF y PTS que sustituye por completo la biosíntesis de novo',
          arrivesFrom: 'Nucleósidos, oligopéptidos, aminoácidos, vitaminas, ácidos grasos y glucosa de la [[mucosa humana|real-cell]]',
          inside: 'Importadores ABC (Opp/Nup), módulos ECF y sistema PTS de glucosa integrados en la [[bicapa|phospholipid]]',
          deliversTo: 'Abastece quinasas de rescate, [[ribosomas 70S|ribosome-70s]], [[replicación|real-myco-nucleoid]] y glucólisis',
          loop: 'Invierte buena parte del ATP glucolítico en sostener la entrada continua de ladrillos moleculares'
        },
        scientific:
          'Proteoma de transporte transmembrana (~45–50 ORF, ~10 % del genoma de [[Mycoplasma genitalium|real-mycoplasma]]) que suple la pérdida completa de síntesis de novo de aminoácidos, purinas, pirimidinas, cofactores y ácidos grasos. Reúne importadores ABC de oligopéptidos y nucleósidos, transportadores ECF de vitaminas, quinasas de ácidos grasos FakA/FakB y permeasas PTS de glucosa/fructosa.',
        from: [
          { nodeId: 'real-cell', label: 'Fluido mucoso epitelial', cargo: 'Nucleósidos, péptidos y glucosa' },
          { nodeId: 'phospholipid', label: 'Bicapa citoplasmática', cargo: 'Soporte transmembrana' }
        ],
        to: [
          { nodeId: 'real-myco-nucleoid', label: 'Síntesis de ADN y ARN', cargo: 'Nucleósidos rescatados' },
          { nodeId: 'ribosome-70s', label: 'Traducción 70S', cargo: 'Aminoácidos importados' }
        ]
      }
    },

    glycolysis: {
      en: {
        subtitle: 'Minimalist Sugar-Splitting Powerhouse',
        simple:
          'With no Krebs cycle and no [[electron transport chain|electron-transport-chain]], [[Mycoplasma|real-mycoplasma]] generates all of its own ATP by splitting imported sugars down to lactate and acetate right in the cytoplasm.',
        story:
          'Unlike [[Chlamydia|real-chlamydia]], which steals finished ATP from inside a host cell, surface-dwelling [[Mycoplasma genitalium|real-mycoplasma]] still mints its own ATP - just on a stripped-down budget. Enzymes in the open cytosol crack PTS-imported glucose into pyruvate and push pyruvate through pyruvate dehydrogenase and acetate kinase for extra ATP, while membrane [[F1F0 ATPases|atp-synthase]] run in reverse spending ATP to pump protons out and keep internal pH steady.',
        blueprint: {
          role: 'Sole endogenous ATP-generating pathway (Embden-Meyerhof glycolysis + pyruvate-to-acetate branch)',
          arrivesFrom: 'Glucose-6-phosphate imported via membrane PTS permeases from [[host mucosal secretions|real-cell]]',
          inside: 'Ten glycolytic enzymes plus PDH/Pta/AckA yielding up to 3-4 net ATP per glucose with zero [[respiratory chain|electron-transport-chain]]',
          deliversTo: 'Powers [[70S ribosomes|ribosome-70s]], ABC salvage importers, [[terminal rod gliding|real-myco-rod]], and H+-extruding [[F1F0 ATPase|atp-synthase]]',
          loop: 'NADH oxidation via Ldh/Nox regenerates NAD+ while producing H2O2 byproduct on host cilia'
        },
        scientific:
          'Truncated fermentative bioenergetics of [[Mycoplasma genitalium|real-mycoplasma]] lacking all TCA-cycle enzymes, quinones, and cytochromes (no [[electron transport chain|electron-transport-chain]]). Substrate-level ATP synthesis proceeds via Embden-Meyerhof-Parnas glycolysis (2 net ATP/glucose) plus pyruvate dehydrogenase, phosphotransacetylase, and acetate kinase AckA (+1-2 ATP/glucose), while the retained [[F1F0 ATPase|atp-synthase]] operates hydrolytically to extrude H+ and maintain transmembrane proton potential.',
        from: [
          { nodeId: 'real-cell', label: 'PTS Sugar Import', cargo: 'Glucose-6-phosphate' },
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'Glycolytic & AckA enzymes' }
        ],
        to: [
          { nodeId: 'real-myco-rod', label: 'Gliding Motor Wheel', cargo: 'Cytosolic ATP fuel' },
          { nodeId: 'atp-synthase', label: 'Reverse F1F0 H+ Pump', cargo: 'ATP spent for pH homeostasis' }
        ]
      },
      es: {
        subtitle: 'La central mínima de fermentación de azúcares',
        simple:
          'Sin ciclo de Krebs ni [[cadena de transporte de electrones|electron-transport-chain]], [[Mycoplasma|real-mycoplasma]] produce todo su ATP partiendo azúcares importados hasta lactato y acetato en pleno citoplasma.',
        story:
          'A diferencia de [[Chlamydia|real-chlamydia]], que roba ATP dentro de la célula invadida, [[Mycoplasma genitalium|real-mycoplasma]] vive en la superficie exterior y fabrica su propio ATP con una ruta reducida al mínimo. Sus enzimas citosólicas degradan la glucosa hasta piruvato y acetato para sumar ATP extra, mientras sus [[ATP sintasas F1F0|atp-synthase]] trabajan al revés gastando ATP para expulsar protones y equilibrar el pH interno.',
        blueprint: {
          role: 'Única vía endógena generadora de ATP (glucólisis Embden-Meyerhof + rama piruvato-acetato)',
          arrivesFrom: 'Glucosa-6-fosfato incorporada mediante permeasas PTS desde las secreciones de la [[célula huésped|real-cell]]',
          inside: 'Diez enzimas glucolíticas más PDH/Pta/AckA (~3–4 ATP netos/glucosa) sin [[cadena respiratoria|electron-transport-chain]]',
          deliversTo: 'Alimenta [[ribosomas 70S|ribosome-70s]], permeasas ABC, [[deslizamiento polar|real-myco-rod]] y [[ATPasa F1F0|atp-synthase]]',
          loop: 'La reoxidación de NADH por Ldh y Nox regenera NAD+ liberando trazas de H₂O₂ sobre el cilio'
        },
        scientific:
          'Bioenergética fermentativa mínima de [[Mycoplasma genitalium|real-mycoplasma]], desprovista por completo de ciclo de los ácidos tricarboxílicos, quinonas y citocromos (sin [[cadena de transporte de electrones|electron-transport-chain]]). Sintetiza ATP exclusivamente a nivel de sustrato mediante glucólisis (2 ATP netos) más el módulo piruvato deshidrogenasa–fosfotransacetilasa–acetato quinasa AckA (+1–2 ATP), mientras la [[ATPasa F₁F₀|atp-synthase]] funciona en modo hidrolítico para extruir H+.',
        from: [
          { nodeId: 'real-cell', label: 'Sistema PTS de membrana', cargo: 'Glucosa-6-fosfato' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Enzimas glucolíticas y AckA' }
        ],
        to: [
          { nodeId: 'real-myco-rod', label: 'Rueda motora polar', cargo: 'ATP para deslizamiento' },
          { nodeId: 'atp-synthase', label: 'Bomba inversa F₁F₀', cargo: 'Extrusión de protones' }
        ]
      }
    }
  },

  'chlamydia_realistic.html': {
    inclusion: {
      en: {
        subtitle: 'The Cloaked Indoor Vacuole Sanctuary',
        simple:
          'Rather than floating loose in cytoplasm, [[Chlamydia trachomatis|real-chlamydia]] lives inside a custom-remodeled membrane bubble called an inclusion that hides the bacteria from acid [[lysosomes|lysosome]].',
        story:
          'When an [[Elementary Body|real-chlam-eb]] tricks a human [[epithelial cell|real-cell]] into swallowing it, the newborn membrane sac would normally fuse with digestive [[lysosomes|lysosome]] within minutes. Instead, Chlamydia strips host Rab markers off the bubble and decorates it with bacterial Inc proteins, turning a death trap into a growing private nursery where [[Reticulate Bodies|real-chlam-rb]] divide safely.',
        blueprint: {
          role: 'Non-acidified, lysosome-evading parasitophorous vacuole housing [[Chlamydia trachomatis|real-chlamydia]]',
          arrivesFrom: 'Invaginated host [[plasma membrane|phospholipid]] remodeled via Inc effectors and [[Golgi|golgi]] lipid vesicles',
          inside: 'Expanding single-[[phospholipid|phospholipid]]-bilayer sac (~5-15 micrometers late cycle) cleared of Rab5/Rab7/LAMP1',
          deliversTo: 'Shelters dividing [[Reticulate Bodies|real-chlam-rb]] and maturing [[Elementary Bodies|real-chlam-eb]] while admitting host ATP',
          loop: 'Maintains neutral luminal pH (~7.2) and exits via host lysis or actin-coated extrusion'
        },
        scientific:
          'Parasitophorous chlamydial inclusion vacuole bounded by a hybrid host-derived [[phospholipid|phospholipid]] bilayer extensively remodeled by >50 bacterial Inc proteins. Actively divorced from endolysosomal maturation (pH ~7.25, devoid of V-ATPase and [[lysosomal|lysosome]] hydrolases), positioned at the peri-Golgi microtubule-organizing center via dynein to intercept [[Golgi|golgi]] exocytic lipids and pass cytosolic metabolites to [[Reticulate Bodies|real-chlam-rb]].',
        from: [
          { nodeId: 'real-cell', label: 'Host Plasma Membrane', cargo: 'Initial phagocytic cup' },
          { nodeId: 'golgi', label: 'Host Trans-Golgi Network', cargo: 'Sphingomyelin & sterol expansion' }
        ],
        to: [
          { nodeId: 'real-chlam-rb', label: 'Reticulate Bodies', cargo: 'Protected replicative lumen' },
          { nodeId: 'real-chlam-eb', label: 'Progeny Elementary Bodies', cargo: 'Extrusion or lytic release' }
        ]
      },
      es: {
        subtitle: 'El santuario vacuolar camuflado',
        simple:
          'En lugar de flotar suelta en el citoplasma, [[Chlamydia trachomatis|real-chlamydia]] habita dentro de una burbuja membranosa remodelada llamada inclusión que la protege de los [[lisosomas|lysosome]] ácidos.',
        story:
          'Cuando un [[Cuerpo Elemental|real-chlam-eb]] logra que una [[célula epitelial|real-cell]] lo envuelva, esa vesícula acabaría fusionada en minutos con [[lisosomas|lysosome]] destructivos si fuera una bacteria común. Chlamydia borra las señales endosómicas de la membrana y la tapiza con proteínas propias Inc, convirtiendo la trampa en una guardería privada donde los [[Cuerpos Reticulados|real-chlam-rb]] se multiplican.',
        blueprint: {
          role: 'Vacuola parasitófora no acidificada que aísla a [[Chlamydia trachomatis|real-chlamydia]] frente a [[lisosomas|lysosome]]',
          arrivesFrom: '[[Membrana plasmática|phospholipid]] invaginada y ampliada con vesículas lipídicas del [[Golgi|golgi]]',
          inside: 'Saco de bicapa de [[fosfolípidos|phospholipid]] (~5–15 µm en fase tardía) desprovisto de marcadores Rab5/Rab7/LAMP1',
          deliversTo: 'Resguarda [[Cuerpos Reticulados|real-chlam-rb]] en división y [[Cuerpos Elementales|real-chlam-eb]] admitiendo ATP',
          loop: 'Conserva pH neutro (~7,2) y libera la progenie por lisis celular o extrusión recubierta de actina'
        },
        scientific:
          'Vacuola parasitófora de inclusión delimitada por una bicapa híbrida de [[fosfolípidos|phospholipid]] modificada con más de 50 proteínas Inc bacterianas. Excluida activamente de la ruta endolisosómica (pH ~7,25, sin V-ATPasa ni enzimas de [[lisosoma|lysosome]]) y transportada por dineína junto al centro organizador de microtúbulos para interceptar lípidos del [[Golgi|golgi]].',
        from: [
          { nodeId: 'real-cell', label: 'Membrana epitelial', cargo: 'Invaginación inicial' },
          { nodeId: 'golgi', label: 'Red trans-Golgi', cargo: 'Esfingomielina y colesterol' }
        ],
        to: [
          { nodeId: 'real-chlam-rb', label: 'Cuerpos Reticulados', cargo: 'Lumen protegido de división' },
          { nodeId: 'real-chlam-eb', label: 'Cuerpos Elementales hijos', cargo: 'Liberación infecciosa' }
        ]
      }
    },

    inc: {
      en: {
        subtitle: 'Custom Bacterial Switches in the Bubble Wall',
        simple:
          'Fired straight into the inclusion membrane by bacterial secretion needles, hairpin-shaped Inc proteins rewire [[host cell|real-cell]] traffic to block [[lysosomes|lysosome]] and merge multiple inclusions into one.',
        story:
          'Hours after entry, [[Chlamydia|real-chlamydia]] remodels the outside face of its shelter using dozens of bespoke Inc proteins folded like double-pronged staples in the [[inclusion bilayer|phospholipid]]. IncA coils zip separate inclusions together like native human SNAREs, IncD recruits lipid-ferrying bridges from the ER and [[Golgi|golgi]], and IncE disarms host retromer scouts.',
        blueprint: {
          role: 'Type III-secreted transmembrane hairpin effectors remodeling the [[inclusion|real-chlamydia]] cytoplasmic face',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]] in [[Reticulate Bodies|real-chlam-rb]] and injected via T3SS',
          inside: '>50 bilobed hydrophobic hairpin proteins (IncA, IncD, IncE, IncV) exposing coiled-coil domains to host cytosol',
          deliversTo: 'Blocks [[lysosome|lysosome]] fusion, fuses sibling inclusions (IncA), and tethers [[Golgi|golgi]]/ER lipid supply',
          loop: 'IncA-deficient clinical strains fail to fuse inclusions, leaving multiple separate vacuoles per host cell'
        },
        scientific:
          'Chlamydia-specific family of >50 Inclusion membrane (Inc) proteins characterized by ~40-60-residue bilobed transmembrane hairpins inserted into the [[inclusion bilayer|phospholipid]] via T3SS. Cytosolic effectors include SNARE-mimetic four-helix bundle IncA (PDB 2J6R, mediating homotypic inclusion fusion), IncD (recruiting host CERT ceramide transfer protein), and IncE (binding sorting nexin SNX5/SNX6 PX domains, PDB 5WY2).',
        from: [
          { nodeId: 'ribosome-70s', label: 'RB 70S Ribosomes', cargo: 'Early & mid-cycle Inc polypeptides' },
          { nodeId: 'real-chlam-rb', label: 'Inclusion-Docked T3SS', cargo: 'Direct membrane insertion' }
        ],
        to: [
          { nodeId: 'lysosome', label: 'Host Endolysosomes', cargo: 'Blocked Rab7/SNARE fusion' },
          { nodeId: 'golgi', label: 'ER-Golgi Lipid Contacts', cargo: 'IncD-CERT ceramide capture' }
        ]
      },
      es: {
        subtitle: 'Interruptores bacterianos en la pared de la burbuja',
        simple:
          'Insertadas en la membrana de la inclusión por las agujas secretoras de la bacteria, las proteínas Inc en horquilla reprograman el tráfico de la [[célula huésped|real-cell]] para frenar [[lisosomas|lysosome]] y unir inclusiones.',
        story:
          'Pocas horas después de entrar, [[Chlamydia|real-chlamydia]] rediseña la cara externa de su refugio clavando decenas de proteínas Inc con forma de grapa doble en la [[bicapa de la inclusión|phospholipid]]. IncA imita cremalleras humanas SNARE para fundir varias inclusiones en una sola, IncD tiende puentes lipídicos hacia el RE y el [[Golgi|golgi]], e IncE neutraliza el reciclaje retrómero.',
        blueprint: {
          role: 'Efectores transmembrana en horquilla secretados por T3SS que gobiernan la cara citosólica de la [[inclusión|real-chlamydia]]',
          arrivesFrom: 'Sintetizados en [[ribosomas 70S|ribosome-70s]] de [[Cuerpos Reticulados|real-chlam-rb]] e insertados vía T3SS',
          inside: '>50 proteínas con horquilla hidrofóbica bilobulada (IncA, IncD, IncE, IncV) orientadas hacia el citosol humano',
          deliversTo: 'Impiden la fusión con [[lisosomas|lysosome]], fusionan inclusiones hermanas y captan lípidos del [[Golgi|golgi]]',
          loop: 'Las cepas mutantes sin IncA forman múltiples vacuolas pequeñas separadas dentro de la misma célula'
        },
        scientific:
          'Familia exclusiva de Chlamydiota con >50 proteínas Inc provistas de dominios hidrofóbicos bilobulados (~40–60 aa) insertados en la [[bicapa vacuolar|phospholipid]] mediante T3SS. Comprende el mimético SNARE IncA (haz helicoidal PDB 2J6R para fusión homotípica), IncD (reclutador del transportador de ceramida CERT) e IncE (inhibidor del complejo retrómero SNX5/SNX6, PDB 5WY2).',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S del CR', cargo: 'Efectores Inc tempranos' },
          { nodeId: 'real-chlam-rb', label: 'T3SS acoplado a membrana', cargo: 'Inserción en la inclusión' }
        ],
        to: [
          { nodeId: 'lysosome', label: 'Lisosomas del huésped', cargo: 'Bloqueo de fusión ácida' },
          { nodeId: 'golgi', label: 'Contactos RE-Golgi', cargo: 'Captura de ceramida y lípidos' }
        ]
      }
    },

    golgi_lip: {
      en: {
        subtitle: 'Hijacked Golgi Lipid Delivery Vans',
        simple:
          'To grow its inclusion bubble and build hundreds of daughter membranes, [[Chlamydia|real-chlamydia]] intercepts shipping vesicles loaded with sphingomyelin and [[cholesterol|cholesterol]] straight out of the host [[Golgi|golgi]].',
        story:
          'A single [[Elementary Body|real-chlam-eb]] swelling and dividing into five hundred progeny needs vast sheets of fresh [[phospholipids|phospholipid]] and sterols. Parked right beside the host [[Golgi apparatus|golgi]], the inclusion diverts outgoing post-Golgi vesicles originally addressed to the human plasma membrane, fusing them into the inclusion wall so [[Reticulate Bodies|real-chlam-rb]] can absorb eukaryotic lipids into their own envelopes.',
        blueprint: {
          role: 'Intercepted post-[[Golgi|golgi]] exocytic vesicles supplying sphingomyelin and [[cholesterol|cholesterol]]',
          arrivesFrom: 'Host [[trans-Golgi network|golgi]] and IncD-tethered ER-Golgi CERT ceramide transport',
          inside: 'Rab6/Rab11/Rab14-positive lipid vesicles fusing directly into the [[inclusion membrane|real-chlamydia]]',
          deliversTo: 'Expands inclusion surface area and transfers eukaryotic sphingomyelin/sterols into [[RB|real-chlam-rb]] membranes',
          loop: 'Brefeldin A or CERT inhibition starves RBs of sphingolipids and stalls replication'
        },
        scientific:
          'Intercepted host exocytic vesicles and non-vesicular IncD-CERT-VAPA/B membrane contact transfers delivering eukaryotic sphingomyelin and unesterified [[cholesterol|cholesterol]] from the [[Golgi|golgi]] into the [[chlamydial inclusion|real-chlamydia]]. Eukaryotic sphingomyelin constitutes ~15-20% of purified [[Reticulate Body|real-chlam-rb]] and [[Elementary Body|real-chlam-eb]] bilayers despite complete absence of bacterial sphingolipid synthases.',
        from: [
          { nodeId: 'golgi', label: 'Host Golgi Stacks', cargo: 'Sphingomyelin exocytic vesicles' },
          { nodeId: 'cholesterol', label: 'Host Sterol Traffic', cargo: 'Unesterified cholesterol' }
        ],
        to: [
          { nodeId: 'real-chlamydia', label: 'Inclusion Membrane', cargo: 'Vacuolar surface expansion' },
          { nodeId: 'real-chlam-rb', label: 'Dividing Reticulate Bodies', cargo: 'Scavenged membrane lipids' }
        ]
      },
      es: {
        subtitle: 'Vesículas lipídicas desviadas del Golgi',
        simple:
          'Para agrandar su burbuja y fabricar cientos de membranas hijas, [[Chlamydia|real-chlamydia]] intercepta vesículas cargadas de esfingomielina y [[colesterol|cholesterol]] recién salidas del [[aparato de Golgi|golgi]] humano.',
        story:
          'Un solo [[Cuerpo Elemental|real-chlam-eb]] que se multiplica hasta generar quinientas bacterias hijas requiere enormes cantidades de [[fosfolípidos|phospholipid]] y esteroles. Estacionada junto al [[Golgi|golgi]] del huésped, la inclusión desvía el correo lipídico destinado a la superficie celular y lo funde con su propia pared para nutrir las envolturas de los [[Cuerpos Reticulados|real-chlam-rb]].',
        blueprint: {
          role: 'Vesículas exocíticas pos-[[Golgi|golgi]] interceptadas como fuente de esfingomielina y [[colesterol|cholesterol]]',
          arrivesFrom: '[[Red trans-Golgi|golgi]] humana y transferencia directa de ceramida mediada por contactos IncD–CERT',
          inside: 'Vesículas marcadas con Rab6/Rab11/Rab14 que se fusionan con la [[membrana de inclusión|real-chlamydia]]',
          deliversTo: 'Expande el área vacuolar e incorpora esfingolípidos eucariotas a las bicapas del [[Cuerpo Reticulado|real-chlam-rb]]',
          loop: 'Bloquear el tráfico de esfingolípidos detiene la expansión de la inclusión y la división bacteriana'
        },
        scientific:
          'Tráfico vesicular exocítico secuestrado del [[Golgi|golgi]] combinado con transporte no vesicular de ceramida vía IncD–CERT–VAPA/B hacia la [[inclusión clamidial|real-chlamydia]]. La esfingomielina y el [[colesterol|cholesterol]] eucariotas llegan a representar ~15–20 % de los lípidos totales de [[Cuerpos Reticulados|real-chlam-rb]] y [[Cuerpos Elementales|real-chlam-eb]] pese a carecer de enzimas propias para sintetizarlos.',
        from: [
          { nodeId: 'golgi', label: 'Cisternas del Golgi humano', cargo: 'Vesículas de esfingomielina' },
          { nodeId: 'cholesterol', label: 'Tráfico celular de esteroles', cargo: 'Colesterol libre' }
        ],
        to: [
          { nodeId: 'real-chlamydia', label: 'Pared de la inclusión', cargo: 'Crecimiento de membrana' },
          { nodeId: 'real-chlam-rb', label: 'Cuerpos Reticulados', cargo: 'Lípidos para nuevas células' }
        ]
      }
    },

    host_cyto: {
      en: {
        subtitle: 'The Host Epithelial Power Grid & Actin Cage',
        simple:
          'Surrounding the inclusion, the [[human cell|real-cell]] cytoplasm supplies a steady stream of [[mitochondria|mitochondrion]]-made ATP, nucleotides, and amino acids while weaving a stabilizing cage of [[actin filaments|actin-filament]] around the bubble.',
        story:
          'Everything [[Chlamydia trachomatis|real-chlamydia]] stopped making over millions of years of reductive evolution sits waiting just nanometers outside the inclusion membrane. Host [[mitochondria|mitochondrion]] churn out millimolar ATP that diffuses through inclusion pores to feed [[Npt1 transporters|real-chlam-npt1]], while a woven corset of host [[actin|actin-filament]] and intermediate filaments keeps the ballooning vacuole from rupturing prematurely.',
        blueprint: {
          role: 'Nutrient- and ATP-rich [[eukaryotic host|real-cell]] cytosol sustaining obligate intracellular growth',
          arrivesFrom: 'Host glycolysis, [[mitochondrial|mitochondrion]] oxidative phosphorylation, and cytosolic metabolite pools',
          inside: 'Millimolar ATP/GTP/UTP/CTP, amino acids, UDP-glucose, and a perivacuolar [[F-actin|actin-filament]]/vimentin scaffold',
          deliversTo: 'Feeds [[Npt1|real-chlam-npt1]]/Npt2 nucleotide import and stabilizes the expanding [[inclusion|real-chlamydia]]',
          loop: 'Chlamydial CPAF and T3SS effectors suppress host apoptosis until late-stage EB maturation completes'
        },
        scientific:
          'Mucosal [[epithelial host|real-cell]] cytoplasm (~3-8 mM ATP generated by [[mitochondria|mitochondrion]], ~0.5 mM GTP/UTP/CTP, free amino acids, and UDP-glucose) coupled across porous inclusion membrane channels (<500-1,000 Da) to the [[inclusion lumen|real-chlamydia]]. Encased by a RhoA-dependent cortical [[F-actin|actin-filament]] and septin/intermediate-filament scaffold that mechanically stabilizes the large late-cycle vacuole.',
        from: [
          { nodeId: 'mitochondrion', label: 'Host Mitochondria', cargo: '3-8 mM cytosolic ATP' },
          { nodeId: 'real-cell', label: 'Host Metabolic Pools', cargo: 'NTPs, amino acids & UDP-Glc' }
        ],
        to: [
          { nodeId: 'real-chlam-npt1', label: 'Npt1/Npt2 Translocases', cargo: 'ATP & ribonucleotide influx' },
          { nodeId: 'actin-filament', label: 'Perivacuolar Cage', cargo: 'Mechanical inclusion brace' }
        ]
      },
      es: {
        subtitle: 'La red eléctrica del huésped y jaula de actina',
        simple:
          'Alrededor de la inclusión, el citoplasma de la [[célula humana|real-cell]] aporta un flujo constante de ATP fabricado en [[mitocondrias|mitochondrion]], nucleótidos y aminoácidos mientras teje una red estabilizadora de [[filamentos de actina|actin-filament]].',
        story:
          'Todo lo que [[Chlamydia trachomatis|real-chlamydia]] dejó de sintetizar durante millones de años de reducción evolutiva aguarda a escasos nanómetros fuera de la inclusión. Las [[mitocondrias|mitochondrion]] humanas mantienen reservas milimolares de ATP que cruzan poros vacuolares rumbo a [[Npt1|real-chlam-npt1]], mientras un armazón de [[actina|actin-filament]] y filamentos intermedios sujeta la enorme burbuja hasta completar la maduración.',
        blueprint: {
          role: 'Citosol [[eucariota|real-cell]] rico en ATP y precursores que abastece el crecimiento intracelular obligado',
          arrivesFrom: 'Glucólisis del huésped, fosforilación oxidativa en [[mitocondrias|mitochondrion]] y reservas metabólicas',
          inside: 'ATP/GTP/UTP/CTP milimolar, aminoácidos, UDP-glucosa y andamio perivacuolar de [[actina F|actin-filament]]',
          deliversTo: 'Suministra nucleótidos a [[Npt1|real-chlam-npt1]]/Npt2 y sostiene mecánicamente la [[inclusión|real-chlamydia]]',
          loop: 'Efectores antiapoptóticos bacterianos mantienen viva a la célula huésped hasta cerrar el ciclo en CE'
        },
        scientific:
          'Citoplasma de la [[célula epitelial|real-cell]] huésped (~3–8 mM de ATP procedente de [[mitocondrias|mitochondrion]], ~0,5 mM de GTP/UTP/CTP, aminoácidos libres y UDP-glucosa) comunicado con el [[lumen de la inclusión|real-chlamydia]] mediante poros pasivos para solutos pequeños. Rodeado por un entramado dependiente de RhoA de [[filamentos de actina|actin-filament]] y septinas que evita la rotura prematura de la vacuola.',
        from: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias humanas', cargo: 'ATP citosólico (3–8 mM)' },
          { nodeId: 'real-cell', label: 'Reservas del citosol', cargo: 'NTP, aminoácidos y UDP-Glc' }
        ],
        to: [
          { nodeId: 'real-chlam-npt1', label: 'Translocasas Npt1/Npt2', cargo: 'Entrada de ATP y NTP' },
          { nodeId: 'actin-filament', label: 'Jaula perivacuolar', cargo: 'Soporte mecánico externo' }
        ]
      }
    },

    eb_om: {
      en: {
        subtitle: 'The Disulfide-Locked Spore-Like Armor',
        simple:
          'Instead of a thick sugar-peptide wall, the extracellular [[Elementary Body|real-chlam-eb]] survives outside cells by locking cysteine-rich outer-membrane proteins together with tough chemical disulfide bridges.',
        story:
          'Traveling through tears or mucosal secretions between hosts would burst an ordinary wall-deficient cell, so [[Chlamydia|real-chlamydia]] cross-links its outer [[phospholipid|phospholipid]] envelope into a rigid protein shell. Periplasmic OmcA and OmcB cysteine webs staple trimeric MOMP barrels tight during oxidizing extracellular transit, then unlock inside the reducing environment of a new [[host cell|real-cell]] so the bacterium can swell into a [[Reticulate Body|real-chlam-rb]].',
        blueprint: {
          role: 'Disulfide-crosslinked outer-membrane armor protecting extracellular [[Elementary Bodies|real-chlam-eb]]',
          arrivesFrom: 'Late-cycle oxidation of MOMP, OmcA, and OmcB cysteines during RB-to-EB redifferentiation',
          inside: 'LPS-bearing [[phospholipid|phospholipid]] outer bilayer braced by disulfide-linked OmcB (60 kDa) and OmcA (9 kDa) webs',
          deliversTo: 'Confers spore-like osmotic resilience outside the host without a full [[peptidoglycan|peptidoglycan]] sacculus',
          loop: 'Disulfide reduction after host entry relaxes the cage to initiate [[Reticulate Body|real-chlam-rb]] expansion'
        },
        scientific:
          'Supramolecular Chlamydial Outer Membrane Complex (COMC) of the ~300 nm [[Elementary Body|real-chlam-eb]]: truncated rough-type chlamydial lipooligosaccharide outer leaflet over a [[phospholipid|phospholipid]] inner leaflet reinforced by extensive intermolecular disulfide bonds linking cysteine-rich periplasmic lipoproteins OmcB (60 kDa, 24 Cys) and OmcA (9 kDa, 15% Cys) to MOMP, functionally substituting for classical [[peptidoglycan|peptidoglycan]].',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Late RB Redifferentiation', cargo: 'OmcA/OmcB disulfide oxidation' },
          { nodeId: 'phospholipid', label: 'Outer Membrane Bilayer', cargo: 'Lipooligosaccharide hull' }
        ],
        to: [
          { nodeId: 'real-chlam-eb', label: 'Extracellular Transit', cargo: 'Osmotic & mechanical armor' },
          { nodeId: 'real-cell', label: 'Mucosal Entry Surface', cargo: 'Heparan-sulfate OmcB docking' }
        ]
      },
      es: {
        subtitle: 'La coraza tipo espora cerrada por puentes disulfuro',
        simple:
          'En vez de usar una gruesa pared de azúcares, el [[Cuerpo Elemental|real-chlam-eb]] resiste fuera de las células enlazando sus proteínas externas ricas en cisteína mediante fuertes puentes químicos disulfuro.',
        story:
          'Viajar entre un huésped y otro haría estallar cualquier célula frágil sin pared, de modo que [[Chlamydia|real-chlamydia]] convierte su [[membrana externa|phospholipid]] en un caparazón proteico rígido. Las redes periplásmicas de OmcA y OmcB cosen entre sí los barriles MOMP en el medio oxidante exterior, y vuelven a soltar esos cierres al entrar en una nueva [[célula humana|real-cell]] para dar paso al [[Cuerpo Reticulado|real-chlam-rb]].',
        blueprint: {
          role: 'Coraza de membrana externa reticulada por disulfuros del [[Cuerpo Elemental|real-chlam-eb]] extracelular',
          arrivesFrom: 'Oxidación tardía de cisteínas en MOMP, OmcA y OmcB durante la conversión final de CR a CE',
          inside: 'Bicapa externa de [[fosfolípidos|phospholipid]] y lipooligosacárido reforzada por mallas disulfuro OmcB (60 kDa) y OmcA (9 kDa)',
          deliversTo: 'Otorga resistencia osmótica extracelular sin requerir un saco continuo de [[peptidoglicano|peptidoglycan]]',
          loop: 'La reducción de puentes tras el ingreso celular afloja la jaula e inicia la expansión a [[Cuerpo Reticulado|real-chlam-rb]]'
        },
        scientific:
          'Complejo supramolecular de membrana externa clamidial (COMC) del [[Cuerpo Elemental|real-chlam-eb]] (~300 nm): bicapa de [[fosfolípidos|phospholipid]] y lipooligosacárido truncado estabilizada mediante densos enlaces disulfuro intermoleculares entre las lipoproteínas ricas en cisteína OmcB (60 kDa, 24 Cys), OmcA (9 kDa) y MOMP, reemplazando mecánicamente al [[peptidoglicano|peptidoglycan]] estructural.',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Maduración tardía de CR', cargo: 'Oxidación de redes OmcA/OmcB' },
          { nodeId: 'phospholipid', label: 'Bicapa externa', cargo: 'Soporte lipooligosacárido' }
        ],
        to: [
          { nodeId: 'real-chlam-eb', label: 'Supervivencia extracelular', cargo: 'Blindaje osmótico rígido' },
          { nodeId: 'real-cell', label: 'Superficie epitelial', cargo: 'Unión inicial a heparán sulfato' }
        ]
      }
    },

    momp: {
      en: {
        subtitle: 'The Redox-Gated Porin & Serovar Shield',
        simple:
          'Making up nearly three-fifths of the outer surface, trimeric MOMP barrels stay bolted shut on dormant [[Elementary Bodies|real-chlam-eb]] and swing open on [[Reticulate Bodies|real-chlam-rb]] so host ATP can pour inside.',
        story:
          'One remarkably versatile protein does triple duty across the entire [[Chlamydia|real-chlamydia]] life cycle. Outside a [[host cell|real-cell]], disulfide-locked MOMP trimers brace the [[Elementary Body|real-chlam-eb]] hull and display variable surface loops that define trachoma versus urogenital serovars; once safe inside the inclusion, reduced cysteines widen each barrel pore to let host ATP reach inner-membrane [[Npt1|real-chlam-npt1]].',
        blueprint: {
          role: 'Dominant redox-gated outer-membrane beta-barrel porin, structural rivet, and serovar antigen',
          arrivesFrom: 'Abundantly translated on [[70S ribosomes|ribosome-70s]] from ompA and folded into the outer [[bilayer|phospholipid]]',
          inside: '~40 kDa 16-stranded beta-barrel homotrimers (~60% of outer-membrane protein) with 9 redox-active cysteines',
          deliversTo: 'Oxidized closed armor in [[EBs|real-chlam-eb]]; reduced open ATP/NTP diffusion channels in [[RBs|real-chlam-rb]]',
          loop: 'Four surface-exposed variable domains (VD1-VD4) diversify serovars A-K and L1-L3 against antibodies'
        },
        scientific:
          'Major Outer Membrane Protein (MOMP/OmpA, ~39.5 kDa monomer, 9 conserved Cys residues, homotrimeric beta-barrel constituting ~60% of total outer-membrane protein mass in [[Chlamydia trachomatis|real-chlamydia]]). Functions as a redox-switched general diffusion porin (exclusion ~850-1,000 Da when reduced in [[Reticulate Bodies|real-chlam-rb]], admitting ATP/NTPs toward [[Npt1|real-chlam-npt1]]) and covalent structural cross-linker in [[Elementary Bodies|real-chlam-eb]].',
        from: [
          { nodeId: 'ribosome-70s', label: 'ompA 70S Translation', cargo: 'Abundant 40 kDa monomers' },
          { nodeId: 'real-cell', label: 'Host Inclusion Lumen', cargo: 'Diffusing host ATP & NTPs' }
        ],
        to: [
          { nodeId: 'real-chlam-eb', label: 'Oxidized EB Coat', cargo: 'Cross-linked hull & serovar loops' },
          { nodeId: 'real-chlam-npt1', label: 'Periplasmic Npt1 Access', cargo: 'Open porin ATP passage' }
        ]
      },
      es: {
        subtitle: 'La porina regulada por redox y escudo de serovariedad',
        simple:
          'Ocupando casi tres quintas partes de la superficie externa, los barriles triméricos MOMP permanecen cerrados en el [[Cuerpo Elemental|real-chlam-eb]] y se abren en el [[Cuerpo Reticulado|real-chlam-rb]] para dejar entrar ATP.',
        story:
          'Una misma proteína cumple tres misiones vitales en el ciclo de [[Chlamydia|real-chlamydia]]. Fuera de la [[célula huésped|real-cell]], los trímeros MOMP trabados por disulfuros blindan al [[Cuerpo Elemental|real-chlam-eb]] y exponen bucles variables que distinguen cepas oculares y urogenitales; dentro de la inclusión, la reducción de sus cisteínas abre el poro para que el ATP humano alcance a [[Npt1|real-chlam-npt1]].',
        blueprint: {
          role: 'Porina dominante en barril β regulada por estado redox, remache estructural y antígeno de serovariedad',
          arrivesFrom: 'Traducida masivamente en [[ribosomas 70S|ribosome-70s]] desde ompA e insertada en la [[bicapa|phospholipid]] externa',
          inside: 'Homotrímeros de ~40 kDa (~60 % de la proteína externa) provistos de 9 cisteínas sensibles al potencial redox',
          deliversTo: 'Coraza cerrada oxidada en [[CE|real-chlam-eb]]; canal abierto para difusión de ATP/NTP en [[CR|real-chlam-rb]]',
          loop: 'Cuatro dominios variables externos (VD1–VD4) definen las serovariedades clínicas A–K y L1–L3'
        },
        scientific:
          'Proteína Principal de Membrana Externa (MOMP/OmpA, monómero de ~39,5 kDa con 9 cisteínas conservadas, homotrímero en barril β que representa ~60 % de la masa proteica externa de [[Chlamydia trachomatis|real-chlamydia]]). Opera como porina de difusión regulada por reducción (límite ~850–1.000 Da en [[Cuerpos Reticulados|real-chlam-rb]], permeable a ATP hacia [[Npt1|real-chlam-npt1]]) y armazón estructural en [[Cuerpos Elementales|real-chlam-eb]].',
        from: [
          { nodeId: 'ribosome-70s', label: 'Traducción de ompA', cargo: 'Monómeros de 40 kDa' },
          { nodeId: 'real-cell', label: 'Lumen de la inclusión', cargo: 'ATP y NTP en difusión' }
        ],
        to: [
          { nodeId: 'real-chlam-eb', label: 'Cubierta oxidada del CE', cargo: 'Rigidez y dominios VD1–VD4' },
          { nodeId: 'real-chlam-npt1', label: 'Acceso periplásmico a Npt1', cargo: 'Paso libre de nucleótidos' }
        ]
      }
    },

    eb_dna: {
      en: {
        subtitle: 'The Histone-Locked Dormant Nucleoid',
        simple:
          'Inside every [[Elementary Body|real-chlam-eb]], bacterial histone-like proteins clamp the entire 1.04-million-letter [[DNA ring|dna]] into a dense, silent ball until the bacterium safely enters a new host cell.',
        story:
          'Unlike [[E. coli|real-bacterium]], which keeps its genes open and active at all times, [[Chlamydia trachomatis|real-chlamydia]] shuts transcription down completely before leaving a dying host. Lysine-rich Hc1 and Hc2 proteins coat the [[circular chromosome|dna]] into a rock-hard electron-dense core; minutes after entering a fresh [[epithelial cell|real-cell]], a small isoprenoid signal pops Hc1 loose so the [[Reticulate Body|real-chlam-rb]] wakes up.',
        blueprint: {
          role: 'Hyper-condensed, transcriptionally silent [[dsDNA|dna]] core of the infectious [[Elementary Body|real-chlam-eb]]',
          arrivesFrom: 'Late-cycle expression of hctA (Hc1) and hctB (Hc2) condensing replicated [[RB chromosomes|real-chlam-rb]]',
          inside: '1,042,519 bp [[dsDNA|dna]] + 7.5 kb plasmid tightly compacted into a ~120 nm liquid-crystalline nucleoid core',
          deliversTo: 'Shields genome from oxidative/nuclease damage outside the host; uncoils via MEcPP into [[RB DNA|real-chlam-rb]]',
          loop: 'Premature Hc1 expression halts transcription; IspE-produced MEcPP unlocks Hc1 upon host entry'
        },
        scientific:
          'Electron-dense metabolically quiescent nucleoid of the [[Elementary Body|real-chlam-eb]] containing the 1,042,519 bp [[Chlamydia trachomatis|real-chlamydia]] [[dsDNA|dna]] chromosome condensed by eukaryotic histone-H1-like basic proteins Hc1 (HctA, ~18 kDa) and Hc2 (HctB) that globally silence [[RNA polymerase|rna-polymerase]]. Decondensation during germination requires non-mevalonate MEP isoprenoid intermediate 2-C-methyl-D-erythritol 2,4-cyclodiphosphate (MEcPP).',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Late-Cycle RB Chromosome', cargo: 'Hc1/Hc2 histone clamping' },
          { nodeId: 'ribosome-70s', label: 'Late hctA/hctB Translation', cargo: 'Basic condensing proteins' }
        ],
        to: [
          { nodeId: 'dna', label: 'Protected 1.04 Mbp Genome', cargo: 'Extracellular transit survival' },
          { nodeId: 'rna-polymerase', label: 'Post-Entry Germination', cargo: 'MEcPP-triggered awakening' }
        ]
      },
      es: {
        subtitle: 'El nucleoide latente sellado por histonas',
        simple:
          'En cada [[Cuerpo Elemental|real-chlam-eb]], proteínas bacterianas similares a histonas comprimen el [[anillo de ADN|dna]] de 1,04 millones de letras en una esfera densa y silenciosa hasta entrar en una nueva célula.',
        story:
          'A diferencia de [[E. coli|real-bacterium]], cuyos genes permanecen abiertos de continuo, [[Chlamydia trachomatis|real-chlamydia]] apaga por completo su lectura antes de abandonar la célula agotada. Las proteínas básicas Hc1 y Hc2 empaquetan el [[cromosoma circular|dna]] en un núcleo compacto e inerte; tras ingresar en otra [[célula epitelial|real-cell]], una señal isoprenoide suelta esas trabas y despierta al [[Cuerpo Reticulado|real-chlam-rb]].',
        blueprint: {
          role: 'Núcleo de [[ADNbc|dna]] hipercondensado y transcripcionalmente inactivo del [[Cuerpo Elemental|real-chlam-eb]]',
          arrivesFrom: 'Síntesis tardía de hctA (Hc1) y hctB (Hc2) sobre los cromosomas replicados del [[Cuerpo Reticulado|real-chlam-rb]]',
          inside: '[[ADNbc|dna]] de 1.042.519 pb más plásmido pCT comprimidos en un núcleo cristalino electrodenso (~120 nm)',
          deliversTo: 'Protege el genoma fuera del huésped y se despliega mediante MEcPP para iniciar la transcripción en [[CR|real-chlam-rb]]',
          loop: 'El metabolito MEcPP producido por IspE desplaza a Hc1 pocos minutos después de la entrada celular'
        },
        scientific:
          'Nucleoide electrodenso transcripcionalmente silente del [[Cuerpo Elemental|real-chlam-eb]], donde el cromosoma de [[ADNbc|dna]] de 1.042.519 pb de [[Chlamydia trachomatis|real-chlamydia]] queda compactado por las proteínas ricas en lisina Hc1 (HctA, ~18 kDa) y Hc2 (HctB), análogas funcionales de la histona H1 eucariota frente a la [[ARN polimerasa|rna-polymerase]]. Su descondensación depende de 2-C-metil-D-eritritol 2,4-ciclodifosfato (MEcPP).',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Cromosoma tardío del CR', cargo: 'Condensación por Hc1/Hc2' },
          { nodeId: 'ribosome-70s', label: 'Traducción tardía hctA/B', cargo: 'Proteínas básicas de cierre' }
        ],
        to: [
          { nodeId: 'dna', label: 'Genoma de 1,04 Mpb', cargo: 'Resistencia extracelular' },
          { nodeId: 'rna-polymerase', label: 'Germinación posentrada', cargo: 'Desbloqueo por MEcPP' }
        ]
      }
    },

    t3ss: {
      en: {
        subtitle: 'The Polar Molecular Syringe Array',
        simple:
          'Grouped on one side of the [[Elementary Body|real-chlam-eb]], hollow Type III Secretion needles punch across the [[host cell|real-cell]] membrane on contact to inject proteins that commandeer entry and shield the inclusion.',
        story:
          'Even while its [[DNA|dna]] sits locked in dormancy, the [[Elementary Body|real-chlam-eb]] arrives at a human cell with 10 to 20 pre-loaded syringes aimed outward from one pole. Touching the host [[lipid bilayer|phospholipid]] opens CopB/CopD tip pores and fires stored TarP effectors straight into human cytoplasm; later, [[Reticulate Bodies|real-chlam-rb]] press the same syringes against the inclusion wall to install Inc shields.',
        blueprint: {
          role: 'Polar contact-activated Type III Secretion System (T3SS) injectisome delivering effectors across host membranes',
          arrivesFrom: 'Pre-assembled into a polarized 10-20-needle patch during late RB-to-[[EB|real-chlam-eb]] maturation',
          inside: 'Multi-ring SctC/D/J basal body, ATPase sorting platform, hollow ~2 nm CdsF needle, and CopB/CopD tip pore',
          deliversTo: 'Injects TarP on [[host entry|real-cell]] and inserts Inc proteins across the [[inclusion membrane|real-chlamydia]]',
          loop: 'Detaching RBs from the inclusion wall breaks T3SS contact and helps cue late conversion back into EBs'
        },
        scientific:
          'Polarized cryo-ET-resolved Type III Secretion System (T3SS) injectisome array (10-20 complexes clustered on one [[Elementary Body|real-chlam-eb]] hemisphere; ~65 nm total span across inner membrane, periplasm, outer membrane, and ~30-40 nm CdsF needle). Powered by cytoplasmic SctN hexameric ATPase and ion gradient to translocate unfolded TarP, TepP, and >50 Inc effectors across [[host|real-cell]] and [[inclusion|real-chlamydia]] bilayers.',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Pre-Packed EB Chaperones', cargo: 'Primed TarP & TepP effectors' },
          { nodeId: 'real-chlam-rb', label: 'Inclusion-Contacting RBs', cargo: 'Newly synthesized Inc proteins' }
        ],
        to: [
          { nodeId: 'actin-filament', label: 'Host Cortical Actin', cargo: 'TarP-driven phagocytic cup' },
          { nodeId: 'real-chlamydia', label: 'Inclusion Bilayer', cargo: 'Inserted Inc shield effectors' }
        ]
      },
      es: {
        subtitle: 'La batería polar de jeringas moleculares',
        simple:
          'Agrupadas en un polo del [[Cuerpo Elemental|real-chlam-eb]], las agujas huecas de secreción tipo III perforan la membrana de la [[célula humana|real-cell]] al primer roce e inyectan proteínas que fuerzan la entrada.',
        story:
          'Aunque su [[ADN|dna]] viaje dormido, el [[Cuerpo Elemental|real-chlam-eb]] aterriza sobre el epitelio con una veintena de jeringas cargadas apuntando desde un hemisferio. El contacto con la [[bicapa lipídica|phospholipid]] abre el poro apical CopB/CopD y dispara efectores TarP al citoplasma humano; horas más tarde, los [[Cuerpos Reticulados|real-chlam-rb]] apoyan esas mismas agujas contra la inclusión para instalar escudos Inc.',
        blueprint: {
          role: 'Inyectisoma polar del sistema de secreción tipo III (T3SS) activado por contacto de membrana',
          arrivesFrom: 'Preensamblado en un parche polar de 10–20 agujas durante la maduración final hacia [[Cuerpo Elemental|real-chlam-eb]]',
          inside: 'Anillos basales SctC/D/J, plataforma ATPasa SctN, aguja hueca CdsF (~2 nm de canal) y poro CopB/CopD',
          deliversTo: 'Inyecta TarP en la [[célula huésped|real-cell]] e inserta proteínas Inc en la [[membrana de inclusión|real-chlamydia]]',
          loop: 'El despegue de los CR respecto a la pared de la inclusión interrumpe el contacto T3SS e induce el paso a CE'
        },
        scientific:
          'Batería polarizada de inyectisomas de secreción tipo III (10–20 complejos concentrados en un hemisferio del [[Cuerpo Elemental|real-chlam-eb]] por criotomografía; ~65 nm de extensión transenvoltura con aguja CdsF de ~30–40 nm). Impulsado por la ATPasa hexamérica SctN para translocar efectores desplegados TarP, TepP y >50 proteínas Inc a través de bicapas de la [[célula huésped|real-cell]] y de la [[inclusión|real-chlamydia]].',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Reserva interna del CE', cargo: 'Efectores TarP listos' },
          { nodeId: 'real-chlam-rb', label: 'CR adosados a la pared', cargo: 'Síntesis continua de Inc' }
        ],
        to: [
          { nodeId: 'actin-filament', label: 'Actina cortical humana', cargo: 'Copa de entrada por TarP' },
          { nodeId: 'real-chlamydia', label: 'Bicapa de la inclusión', cargo: 'Blindaje antilisosómico' }
        ]
      }
    },

    tarP: {
      en: {
        subtitle: 'The Injected Actin-Sculpting Hijacker',
        simple:
          'Shot into the [[host cell|real-cell]] within seconds of contact, TarP grabs human actin bricks directly and tricks host enzymes into raising a wave of [[actin filaments|actin-filament]] that swallows the [[Elementary Body|real-chlam-eb]].',
        story:
          'Non-phagocytic epithelial cells have no reason to engulf a 300-nanometer bacterium until TarP arrives through the T3SS needle. Its C-terminal helices corral three human actin monomers at once to seed fresh [[actin filaments|actin-filament]], while its N-terminal tyrosine repeats lure human Src and Abl kinases into activating Arp2/3 - sculpting a custom entry pedestal that closes into the nascent [[inclusion|real-chlamydia]].',
        blueprint: {
          role: 'Immediate-early T3SS-translocated actin nucleator and host kinase scaffold driving [[EB|real-chlam-eb]] uptake',
          arrivesFrom: 'Pre-stored with Slc1 chaperone inside [[Elementary Bodies|real-chlam-eb]] and injected via T3SS',
          inside: 'Multi-domain ~100 kDa polypeptide with N-terminal Tyr-phosphorylation repeats and C-terminal WH2/FAB actin sites',
          deliversTo: 'Nucleates linear and Arp2/3-branched host [[F-actin|actin-filament]] to internalize EBs into [[inclusions|real-chlamydia]]',
          loop: 'Rapidly degraded after vacuole closure so cortical actin returns to normal around the new inclusion'
        },
        scientific:
          'Translocated actin-recruiting phosphoprotein TarP (CT456, ~1,005 aa; C-terminal WH2 actin-binding helix crystal structure PDB 4APO). Combines direct tandem WH2-mediated nucleation of host G-actin oligomers with Src/Syk/Abl phosphorylation of N-terminal ~50-aa ENIYE repeats that recruit Rac1 GEFs Vav2/Sos1 and Arp2/3 to remodel [[epithelial|real-cell]] cortical [[F-actin|actin-filament]] within <60 s of contact.',
        from: [
          { nodeId: 'real-chlam-eb', label: 'EB T3SS Needle', cargo: 'Unfolded CT456 translocation' },
          { nodeId: 'real-cell', label: 'Host Src/Abl Kinases', cargo: 'N-terminal Tyr phosphorylation' }
        ],
        to: [
          { nodeId: 'actin-filament', label: 'Host Cortical Cytoskeleton', cargo: 'Actin pedestal & cup' },
          { nodeId: 'real-chlamydia', label: 'Nascent Inclusion', cargo: 'Internalized Elementary Body' }
        ]
      },
      es: {
        subtitle: 'El efector inyectado escultor de actina',
        simple:
          'Disparada dentro de la [[célula humana|real-cell]] segundos después del contacto, la proteína TarP reúne ladrillos de actina y levanta una ola de [[filamentos de actina|actin-filament]] que engulle al [[Cuerpo Elemental|real-chlam-eb]].',
        story:
          'Las células epiteliales no suelen fagocitar bacterias de 300 nanómetros hasta que TarP irrumpe por la aguja T3SS. Sus hélices traseras juntan directamente monómeros humanos para sembrar [[filamentos de actina|actin-filament]] nuevos, mientras sus repeticiones delanteras reclutan quinasas celulares que activan Arp2/3, levantando una copa membranosa a medida que se cierra formando la [[inclusión|real-chlamydia]].',
        blueprint: {
          role: 'Nucleador directo de actina y plataforma de señalización inyectado por T3SS para internalizar al [[CE|real-chlam-eb]]',
          arrivesFrom: 'Almacenado junto a la chaperona Slc1 en el [[Cuerpo Elemental|real-chlam-eb]] y translocado al contacto',
          inside: 'Polipéptido multidominio (~100 kDa) con repeticiones de tirosina N-terminales y motivos WH2 C-terminales',
          deliversTo: 'Polimeriza [[actina F|actin-filament]] lineal y ramificada (Arp2/3) para cerrar la [[inclusión|real-chlamydia]] naciente',
          loop: 'Se degrada tras cerrarse la vesícula para restablecer la corteza normal de la célula invadida'
        },
        scientific:
          'Fosfoproteína translocada reclutadora de actina TarP (CT456, ~1.005 aa; estructura cristalina de su hélice WH2 unida a actina PDB 4APO). Coordina la nucleación directa de actina G mediante dominios WH2 en tándem con la fosforilación por quinasas Src/Abl de sus repeticiones N-terminales que activan Rac1 y Arp2/3, remodelando la [[actina F|actin-filament]] cortical de la [[célula epitelial|real-cell]] en <60 s.',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Aguja T3SS del CE', cargo: 'Inyección de CT456' },
          { nodeId: 'real-cell', label: 'Quinasas Src/Abl humanas', cargo: 'Fosforilación de tirosinas' }
        ],
        to: [
          { nodeId: 'actin-filament', label: 'Corteza de actina humana', cargo: 'Pedestal y copa endocítica' },
          { nodeId: 'real-chlamydia', label: 'Inclusión temprana', cargo: 'Internalización completada' }
        ]
      }
    },

    rb_om: {
      en: {
        subtitle: 'The Unlocked, Permeable Factory Outer Skin',
        simple:
          'Once safely inside the inclusion, chemical disulfide locks pop open across the outer [[membrane|phospholipid]] so the cell swells into a 1-micrometer [[Reticulate Body|real-chlam-rb]] permeable to incoming host ATP.',
        story:
          'Trading armor for speed, the newly germinated [[Reticulate Body|real-chlam-rb]] relaxes its outer [[phospholipid|phospholipid]] envelope and stocks it with stolen [[Golgi|golgi]] sphingomyelin and [[cholesterol|cholesterol]]. Although osmotically fragile if spilled outside the cell, this soft outer skin opens wide MOMP porin channels so host ATP and nucleotides flood into the periplasm to feed [[Npt1|real-chlam-npt1]].',
        blueprint: {
          role: 'Disulfide-reduced, lipid-expanding outer [[phospholipid|phospholipid]] membrane of the replicative [[Reticulate Body|real-chlam-rb]]',
          arrivesFrom: 'Reductive unlocking of [[EB outer armor|real-chlam-eb]] plus scavenged host [[Golgi|golgi]] sphingolipids and bacterial lipids',
          inside: 'Fluid ~7 nm outer bilayer with reduced open MOMP trimers, polymorphic Pmp autotransporters, and Bam assembly',
          deliversTo: 'Admits host ATP/NTPs and amino acids into the periplasm for [[Npt1|real-chlam-npt1]] import and anchors T3SS',
          loop: 'Re-oxidized by periplasmic disulfide oxidoreductases late in the cycle to rebuild tough [[EB|real-chlam-eb]] armor'
        },
        scientific:
          'Osmotically fragile, metabolically permeable outer [[phospholipid|phospholipid]] bilayer of the ~800-1,000 nm [[Reticulate Body|real-chlam-rb]], containing ~15-20% host-derived sphingomyelin/[[cholesterol|cholesterol]] alongside bacterial branched-chain phospholipids and lipooligosaccharide. Sulfhydryl reduction of MOMP and OmcA/OmcB opens outer porins (<1 kDa cutoff) to supply periplasmic substrates to [[Npt1Ct|real-chlam-npt1]].',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Reduced EB Envelope', cargo: 'Unlocked MOMP/OmcB disulfides' },
          { nodeId: 'golgi', label: 'Hijacked Golgi Lipids', cargo: 'Sphingomyelin & cholesterol' }
        ],
        to: [
          { nodeId: 'real-chlam-npt1', label: 'Inner-Membrane Npt1', cargo: 'Periplasmic ATP & NTP delivery' },
          { nodeId: 'real-chlam-rb', label: 'Expanding RB Body', cargo: '30-fold volume growth' }
        ]
      },
      es: {
        subtitle: 'La cubierta externa abierta y permeable de fábrica',
        simple:
          'Ya a salvo dentro de la inclusión, los cierres disulfuro se abren en la [[membrana|phospholipid]] externa para que la bacteria crezca hasta un [[Cuerpo Reticulado|real-chlam-rb]] de 1 micrómetro permeable al ATP humano.',
        story:
          'Cambiando blindaje por velocidad de crecimiento, el recién germinado [[Cuerpo Reticulado|real-chlam-rb]] destensa su envoltura externa de [[fosfolípidos|phospholipid]] y la amplía con esfingomielina y [[colesterol|cholesterol]] tomados del [[Golgi|golgi]]. Aunque estallaría fuera de la célula, dentro de la inclusión abre de par en par sus poros MOMP para inundar el periplasma de ATP hacia [[Npt1|real-chlam-npt1]].',
        blueprint: {
          role: 'Membrana externa reducida y fluida de [[fosfolípidos|phospholipid]] propia del [[Cuerpo Reticulado|real-chlam-rb]] replicativo',
          arrivesFrom: 'Reducción de la [[coraza del CE|real-chlam-eb]] sumada a esfingolípidos del [[Golgi|golgi]] y lípidos bacterianos',
          inside: 'Bicapa fluida de ~7 nm con trímeros MOMP abiertos, autotransportadores Pmp y maquinaria BAM',
          deliversTo: 'Permite el paso de ATP, NTP y aminoácidos al periplasma rumbo a [[Npt1|real-chlam-npt1]] y sostiene el T3SS',
          loop: 'Se reoxida al final del ciclo mediante oxidorreductasas periplásmicas para restaurar la coraza del [[CE|real-chlam-eb]]'
        },
        scientific:
          'Bicapa externa osmóticamente lábil y permeable de [[fosfolípidos|phospholipid]] del [[Cuerpo Reticulado|real-chlam-rb]] (~800–1.000 nm), enriquecida con ~15–20 % de esfingomielina y [[colesterol|cholesterol]] del huésped junto a fosfolípidos bacterianos de cadena ramificada. La reducción tiólica de MOMP habilita la difusión pasiva (<1 kDa) de ATP citosólico hacia [[Npt1Ct|real-chlam-npt1]].',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Envoltura reducida del CE', cargo: 'Apertura de puentes disulfuro' },
          { nodeId: 'golgi', label: 'Lípidos captados del Golgi', cargo: 'Esfingomielina y esteroles' }
        ],
        to: [
          { nodeId: 'real-chlam-npt1', label: 'Translocasa interna Npt1', cargo: 'Flujo periplásmico de ATP' },
          { nodeId: 'real-chlam-rb', label: 'Crecimiento del CR', cargo: 'Expansión de volumen 30x' }
        ]
      }
    },

    rb_im: {
      en: {
        subtitle: 'The Energy-Importing Cytoplasmic Skin',
        simple:
          'Inside the relaxed outer envelope, the [[Reticulate Body|real-chlam-rb]] inner [[membrane|phospholipid]] holds the [[Npt1|real-chlam-npt1]] and Npt2 transporters that trade spent nucleotides for charged host ATP and RNA building blocks.',
        story:
          'Unlike [[E. coli|real-bacterium]], which packs its inner membrane with proton-pumping respiratory towers, [[Chlamydia|real-chlamydia]] turns its inner [[phospholipid|phospholipid]] bilayer into an import switchboard. Twelve-helix [[Npt1|real-chlam-npt1]] and Npt2 carriers haul host ATP and ribonucleotides straight into the cytoplasm while sodium-pumping Nqr complexes maintain the membrane potential needed for amino-acid uptake.',
        blueprint: {
          role: 'Cytoplasmic [[phospholipid|phospholipid]] inner membrane housing [[Npt1|real-chlam-npt1]], Npt2, and division machinery',
          arrivesFrom: 'Bacterial branched-chain fatty-acid synthesis combined with modified host [[Golgi|golgi]] phospholipids',
          inside: '~7 nm inner bilayer studded with [[Npt1|real-chlam-npt1]] ATP/ADP antiporters, Npt2 NTP symporters, Nqr Na+ pumps, and SecYEG',
          deliversTo: 'Delivers imported ATP/NTPs and amino acids to [[70S ribosomes|ribosome-70s]] and anchors septal MreB/PBP rings',
          loop: 'Maintains Na+/H+ electrochemical gradients to energize Npt2 and secondary amino-acid symporters'
        },
        scientific:
          'Symmetric ~7 nm cytoplasmic [[phospholipid|phospholipid]] bilayer of the [[Reticulate Body|real-chlam-rb]] enriched in bacterially synthesized anteiso-15:0 branched acyl chains remodeled onto host glycerophospholipids via LicA/PlsE. Houses [[Npt1Ct|real-chlam-npt1]], Npt2Ct, Na+-translocating NADH:ubiquinone oxidoreductase (NqrA-F), V-type Na+-ATPase, Sec translocons, and septal PBP2/PBP3 transpeptidases.',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Periplasmic Space', cargo: 'MOMP-filtered host ATP & NTPs' },
          { nodeId: 'golgi', label: 'Remodeled Host Lipids', cargo: 'Glycerophospholipid backbones' }
        ],
        to: [
          { nodeId: 'real-chlam-npt1', label: 'Npt1/Npt2 Antiporters', cargo: 'Cytoplasmic ATP & NTP influx' },
          { nodeId: 'ribosome-70s', label: 'RB Cytoplasm', cargo: 'Energized translation pool' }
        ]
      },
      es: {
        subtitle: 'La membrana interna importadora de energía',
        simple:
          'Bajo la cubierta externa destensada, la [[membrana|phospholipid]] interna del [[Cuerpo Reticulado|real-chlam-rb]] aloja los transportadores [[Npt1|real-chlam-npt1]] y Npt2 que cambian nucleótidos gastados por ATP y bloques de ARN humanos.',
        story:
          'A diferencia de [[E. coli|real-bacterium]], cuya membrana interna rebosa complejos respiratorios clásicos, [[Chlamydia|real-chlamydia]] convierte su bicapa interna de [[fosfolípidos|phospholipid]] en una central de importación. Las translocasas [[Npt1|real-chlam-npt1]] y Npt2 introducen ATP y ribonucleótidos directos al citoplasma mientras bombas Nqr de sodio sostienen el potencial eléctrico para captar aminoácidos.',
        blueprint: {
          role: 'Membrana citoplasmática interna de [[fosfolípidos|phospholipid]] sede de [[Npt1|real-chlam-npt1]], Npt2 y complejos septales',
          arrivesFrom: 'Síntesis bacteriana de ácidos grasos ramificados combinada con lípidos captados del [[Golgi|golgi]]',
          inside: 'Bicapa interna de ~7 nm con antiporters [[Npt1|real-chlam-npt1]], simportadores Npt2, bomba de Na+ Nqr y SecYEG',
          deliversTo: 'Abastece de ATP, NTP y aminoácidos a los [[ribosomas 70S|ribosome-70s]] y ancla el anillo divisional MreB/PBP',
          loop: 'El gradiente electroquímico de Na+/H+ impulsa la entrada acoplada de GTP, CTP y UTP por Npt2'
        },
        scientific:
          'Bicapa citoplasmática interna (~7 nm) del [[Cuerpo Reticulado|real-chlam-rb]] enriquecida con cadenas acilo ramificadas anteiso-15:0 injertadas sobre glicerofosfolípidos del huésped. Aloja [[Npt1Ct|real-chlam-npt1]], Npt2Ct, el complejo respiratorio translocador de sodio NADH:ubiquinona oxidorreductasa (NqrA–F), el translocón Sec y las transpeptidasas septales PBP2/PBP3.',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Espacio periplásmico', cargo: 'ATP y NTP filtrados por MOMP' },
          { nodeId: 'golgi', label: 'Lípidos remodelados', cargo: 'Esqueletos fosfolipídicos' }
        ],
        to: [
          { nodeId: 'real-chlam-npt1', label: 'Sistemas Npt1 y Npt2', cargo: 'Flujo interno de nucleótidos' },
          { nodeId: 'ribosome-70s', label: 'Citoplasma del CR', cargo: 'Energía para traducción' }
        ]
      }
    },

    septum: {
      en: {
        subtitle: 'The Fleeting Peptidoglycan Division Ring',
        simple:
          'For fifty years scientists could not find [[peptidoglycan|peptidoglycan]] in [[Chlamydia|real-chlamydia]] despite penicillin stalling its growth; it builds only a razor-thin sugar-peptide ring right where a [[Reticulate Body|real-chlam-rb]] pinches in two.',
        story:
          'Full-body [[peptidoglycan|peptidoglycan]] walls trip human innate immune alarms, so [[Chlamydia trachomatis|real-chlamydia]] pared its wall down to the bare minimum needed for cell division. Guided by MreB filaments inside the [[Reticulate Body|real-chlam-rb]], PBP2 and PBP3 stitch a narrow peptide-crosslinked belt solely along the budding cleavage furrow and immediately dismantle it once the two daughter cells separate.',
        blueprint: {
          role: 'Transient division-plane [[peptidoglycan|peptidoglycan]] ring resolving the chlamydial anomaly',
          arrivesFrom: 'Cytoplasmic Lipid II synthesized via MurA-F/MraY/MurG and flipped into the [[RB|real-chlam-rb]] periplasm',
          inside: 'Narrow septal hoop of cross-linked GlcNAc-MurNAc-pentapeptide polymerized by SEDS RodA/FtsW and PBP2/PBP3',
          deliversTo: 'Constricts the [[Reticulate Body|real-chlam-rb]] septum during division before amidase recycling',
          loop: 'Penicillin blocks PBP2/PBP3 cross-linking, halting division into swollen aberrant persistent forms'
        },
        scientific:
          'Transient non-sacculus septal [[peptidoglycan|peptidoglycan]] ring (~40-60 nm wide, detected via clickable D-Ala-D-Ala probes) restricted exclusively to the division plane of [[Chlamydia trachomatis|real-chlamydia]] [[Reticulate Bodies|real-chlam-rb]]. Synthesized from Lipid II by RodA/PBP2 and FtsW/PBP3 and rapidly turned over by periplasmic AmiA amidase to minimize NOD1/NOD2 cytosolic pattern-recognition detection.',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Cytoplasmic Mur Pathway', cargo: 'Flipped Lipid II precursors' },
          { nodeId: 'real-chlam-npt1', label: 'Imported Host ATP', cargo: 'MurC-F ligase energy' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Cleavage Furrow Ring', cargo: 'Septal constriction force' },
          { nodeId: 'real-chlam-eb', label: 'Progeny Cell Separation', cargo: 'Completed RB fission' }
        ]
      },
      es: {
        subtitle: 'El fugaz anillo septal de peptidoglicano',
        simple:
          'Durante cincuenta años nadie encontraba [[peptidoglicano|peptidoglycan]] en [[Chlamydia|real-chlamydia]] pese a su sensibilidad a la penicilina: solo tiende un finísimo anillo justo en la cintura donde el [[Cuerpo Reticulado|real-chlam-rb]] se divide.',
        story:
          'Un saco completo de [[peptidoglicano|peptidoglycan]] dispararía las alarmas inmunes del citosol humano, así que [[Chlamydia trachomatis|real-chlamydia]] redujo su pared al mínimo imprescindible para partirse en dos. Guiadas por filamentos MreB en el [[Cuerpo Reticulado|real-chlam-rb]], las enzimas PBP2 y PBP3 tejen un aro estrecho únicamente en el surco de escisión y lo reciclan en cuanto se separan las células hijas.',
        blueprint: {
          role: 'Anillo transitorio de [[peptidoglicano|peptidoglycan]] restringido al plano de división (anomalía clamidial)',
          arrivesFrom: 'Lípido II sintetizado en citoplasma por la vía MurA–F y volteado al periplasma del [[CR|real-chlam-rb]]',
          inside: 'Aro estrecho de GlcNAc–MurNAc reticulado por los complejos RodA/PBP2 y FtsW/PBP3 sin formar pared global',
          deliversTo: 'Estrangula el tabique del [[Cuerpo Reticulado|real-chlam-rb]] antes de ser degradado por la amidasa AmiA',
          loop: 'Los β-lactámicos bloquean PBP2/PBP3 e inducen cuerpos persistentes gigantes incapaces de dividirse'
        },
        scientific:
          'Anillo septal transitorio de [[peptidoglicano|peptidoglycan]] sin sáculo celular (~40–60 nm de anchura, demostrado con sondas fluorescentes de D-aminoácidos) confinado al plano divisional de los [[Cuerpos Reticulados|real-chlam-rb]] de [[Chlamydia trachomatis|real-chlamydia]]. Polimerizado por RodA/PBP2 y FtsW/PBP3 y reciclado de inmediato por AmiA para evadir sensores inmunes intracelulares NOD1/NOD2.',
        from: [
          { nodeId: 'real-chlam-rb', label: 'Ruta citoplasmática Mur', cargo: 'Precursores Lípido II' },
          { nodeId: 'real-chlam-npt1', label: 'ATP importado por Npt1', cargo: 'Energía para ligasas Mur' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Surco de división', cargo: 'Constricción del tabique' },
          { nodeId: 'real-chlam-eb', label: 'Separación de progenie', cargo: 'Fisión completada' }
        ]
      }
    },

    mreb: {
      en: {
        subtitle: 'The Actin-Like Substitute for FtsZ',
        simple:
          'Most bacteria divide using a tubulin-like FtsZ ring, but [[Chlamydia|real-chlamydia]] deleted FtsZ completely and instead uses bacterial actin-like MreB filaments to steer [[Reticulate Body|real-chlam-rb]] division.',
        story:
          'In rod-shaped [[E. coli|real-bacterium]], MreB guides side-wall elongation while FtsZ pinches the middle. Having become spherical inside the [[inclusion|real-chlamydia]] and lost the ftsZ gene altogether, [[Reticulate Bodies|real-chlam-rb]] repurposed MreB into their master division director - polymerizing ATP-bound MreB arcs beneath the inner [[membrane|phospholipid]] to position the narrow [[peptidoglycan|peptidoglycan]] septum.',
        blueprint: {
          role: 'ATP-dependent bacterial actin-homolog cytoskeleton directing FtsZ-independent [[RB|real-chlam-rb]] division',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]] and polymerized using [[Npt1-imported ATP|real-chlam-npt1]]',
          inside: 'Curved double-protofilament MreB patches tethered via RodZ to the [[Reticulate Body|real-chlam-rb]] inner leaflet',
          deliversTo: 'Recruits Lipid II synthases and PBP2/PBP3 to build and constrict the septal [[peptidoglycan|peptidoglycan]] ring',
          loop: 'Small-molecule MreB inhibitor A22 immediately arrests RB polarized budding and chromosome partitioning'
        },
        scientific:
          'Polymerized bacterial actin homolog MreB (~37 kDa, structural homolog PDB 4CZJ) paired with transmembrane bitopic adaptor RodZ inside FtsZ-lacking [[Chlamydia trachomatis|real-chlamydia]] [[Reticulate Bodies|real-chlam-rb]]. Driven by ATP imported through [[Npt1|real-chlam-npt1]], MreB filaments localize asymmetrically at nascent budding/fission sites to scaffold septal [[peptidoglycan|peptidoglycan]] synthesis.',
        from: [
          { nodeId: 'real-chlam-npt1', label: 'Npt1 Imported ATP', cargo: 'MreB polymerization fuel' },
          { nodeId: 'ribosome-70s', label: 'RB 70S Ribosomes', cargo: 'MreB & RodZ subunits' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Septal PBP2/RodA Ring', cargo: 'Division-plane guidance' },
          { nodeId: 'real-chlam-rb', label: 'Polarized Budding/Fission', cargo: 'Daughter RB scission' }
        ]
      },
      es: {
        subtitle: 'El sustituto tipo actina del anillo FtsZ',
        simple:
          'Casi todas las bacterias se dividen con un anillo FtsZ parecido a la tubulina, pero [[Chlamydia|real-chlamydia]] perdió FtsZ y utiliza filamentos bacterianos MreB tipo actina para dirigir la división del [[Cuerpo Reticulado|real-chlam-rb]].',
        story:
          'En bacilos como [[E. coli|real-bacterium]], MreB alarga los costados mientras FtsZ corta por el centro. Al volverse esférica dentro de la [[inclusión|real-chlamydia]] y perder el gen ftsZ, la bacteria reasignó MreB como director principal de división: sus arcos impulsados por ATP bajo la [[membrana|phospholipid]] interna colocan y cierran el fino anillo de [[peptidoglicano|peptidoglycan]].',
        blueprint: {
          role: 'Citoesqueleto bacteriano homólogo de actina dependiente de ATP que dirige la división sin FtsZ del [[CR|real-chlam-rb]]',
          arrivesFrom: 'Traducido en [[ribosomas 70S|ribosome-70s]] y polimerizado con [[ATP importado por Npt1|real-chlam-npt1]]',
          inside: 'Protofilamentos dobles curvos de MreB anclados mediante RodZ bajo la bicapa interna del [[Cuerpo Reticulado|real-chlam-rb]]',
          deliversTo: 'Recluta RodA y PBP2/PBP3 para ensamblar y estrechar el anillo septal de [[peptidoglicano|peptidoglycan]]',
          loop: 'El inhibidor específico de MreB (A22) bloquea de inmediato la gemación polarizada y el reparto celular'
        },
        scientific:
          'Homólogo bacteriano de actina MreB (~37 kDa; estructura de referencia PDB 4CZJ) acoplado al adaptador transmembrana RodZ en los [[Cuerpos Reticulados|real-chlam-rb]] carentes de FtsZ de [[Chlamydia trachomatis|real-chlamydia]]. Energizado por el ATP procedente de [[Npt1|real-chlam-npt1]], organiza asimétricamente el complejo sintético del anillo septal de [[peptidoglicano|peptidoglycan]].',
        from: [
          { nodeId: 'real-chlam-npt1', label: 'ATP importado en Npt1', cargo: 'Polimerización de MreB' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Monómeros MreB y RodZ' }
        ],
        to: [
          { nodeId: 'peptidoglycan', label: 'Complejo septal PBP2', cargo: 'Guía del surco divisional' },
          { nodeId: 'real-chlam-rb', label: 'Fisión asimétrica del CR', cargo: 'Separación de células hijas' }
        ]
      }
    },

    npt1: {
      en: {
        subtitle: 'The One-for-One Host ATP Counter-Exchanger',
        simple:
          'Embedded in the [[Reticulate Body|real-chlam-rb]] inner membrane, [[Npt1|real-chlam-npt1]] makes Chlamydia a true energy parasite by pulling in one charged human ATP molecule for every spent bacterial ADP it pushes out.',
        story:
          'Host [[mitochondria|mitochondrion]] work around the clock outside the [[inclusion|real-chlamydia]] to keep human cytoplasm rich in ATP. Once that ATP slips across MOMP pores into the [[Reticulate Body|real-chlam-rb]] periplasm, twelve-helix [[Npt1|real-chlam-npt1]] antiporters rock back and forth like a battery-swap turnstile - importing charged ATP4- to run [[70S ribosomes|ribosome-70s]] and handing drained ADP3- back to the host for recharging.',
        blueprint: {
          role: 'Obligate 1:1 ATP/ADP inner-membrane antiporter driving chlamydial energy parasitism ([[Npt1|real-chlam-npt1]])',
          arrivesFrom: 'Host [[mitochondria|mitochondrion]]-generated cytosolic ATP diffusing across inclusion and MOMP pores',
          inside: 'Twelve-transmembrane-helix Npt1Ct rocker-switch carrier in the [[Reticulate Body|real-chlam-rb]] inner [[bilayer|phospholipid]]',
          deliversTo: 'Supplies cytoplasmic ATP for [[RNA polymerase|rna-polymerase]], [[70S translation|ribosome-70s]], and MreB while exporting ADP',
          loop: 'Exported ADP returns to host cytosol where host mitochondria re-phosphorylate it back into ATP'
        },
        scientific:
          'Non-mitochondrial NTT-family ATP/ADP translocase Npt1Ct (Tlcc1, 527 aa, ~58 kDa, 12 transmembrane helices) in the [[Reticulate Body|real-chlam-rb]] cytoplasmic [[phospholipid|phospholipid]] membrane. Mediates strict 1:1 counter-exchange of periplasmic host ATP4- (apparent Km ~20-48 micromolar) for cytoplasmic bacterial ADP3-, functionally opposite in transport direction to eukaryotic [[mitochondrial|mitochondrion]] ADP/ATP carrier ANT.',
        from: [
          { nodeId: 'mitochondrion', label: 'Host Mitochondria', cargo: 'Synthesized cytosolic ATP4-' },
          { nodeId: 'real-chlam-rb', label: 'RB Cytoplasm', cargo: 'Spent bacterial ADP3-' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'RB 70S Translation & Kinases', cargo: 'Imported charged ATP' },
          { nodeId: 'real-cell', label: 'Host Cytosol', cargo: 'Returned ADP for recharging' }
        ]
      },
      es: {
        subtitle: 'El intercambiador uno por uno de ATP humano',
        simple:
          'Alojado en la membrana interna del [[Cuerpo Reticulado|real-chlam-rb]], [[Npt1|real-chlam-npt1]] convierte a Chlamydia en parásito energético al introducir un ATP humano cargado por cada ADP bacteriano gastado que expulsa.',
        story:
          'Las [[mitocondrias|mitochondrion]] humanas trabajan sin descanso fuera de la [[inclusión|real-chlamydia]] manteniendo alto el ATP del citosol. En cuanto ese ATP cruza los poros MOMP hasta el periplasma del [[Cuerpo Reticulado|real-chlam-rb]], el transportador [[Npt1|real-chlam-npt1]] de doce hélices bascula como un torno de recambio: mete ATP4- fresco para alimentar a los [[ribosomas 70S|ribosome-70s]] y devuelve el ADP3- agotado para que el huésped vuelva a cargarlo.',
        blueprint: {
          role: 'Antiporter obligatorio 1:1 de ATP/ADP en membrana interna que ejecuta el parasitismo energético ([[Npt1|real-chlam-npt1]])',
          arrivesFrom: 'ATP citosólico generado por [[mitocondrias|mitochondrion]] humanas filtrado por la inclusión y poros MOMP',
          inside: 'Transportador basculante Npt1Ct de 12 hélices transmembrana en la [[bicapa|phospholipid]] interna del [[CR|real-chlam-rb]]',
          deliversTo: 'Entrega ATP citoplasmático a [[ARN polimerasa|rna-polymerase]], [[ribosomas 70S|ribosome-70s]] y MreB mientras exporta ADP',
          loop: 'El ADP expulsado regresa al citosol humano donde las mitocondrias lo refosforilan de nuevo a ATP'
        },
        scientific:
          'Translocasa de nucleótidos ATP/ADP de la familia NTT Npt1Ct (Tlcc1, 527 aa, ~58 kDa, 12 hélices transmembrana) en la membrana de [[fosfolípidos|phospholipid]] interna del [[Cuerpo Reticulado|real-chlam-rb]]. Ejecuta el contratransporte estricto 1:1 de ATP4- humano entrante (Km ~20–48 µM) por ADP3- bacteriano saliente, con sentido inverso al transportador [[mitocondrial|mitochondrion]] ANT.',
        from: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias del huésped', cargo: 'ATP4- citosólico fresco' },
          { nodeId: 'real-chlam-rb', label: 'Citoplasma bacteriano', cargo: 'ADP3- descargado' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'Traducción 70S y quinasas', cargo: 'ATP cargado importado' },
          { nodeId: 'real-cell', label: 'Citosol humano', cargo: 'ADP devuelto para recarga' }
        ]
      }
    },

    npt2: {
      en: {
        subtitle: 'The Proton-Driven RNA Letter Importer',
        simple:
          'Swapping ATP for ADP via [[Npt1|real-chlam-npt1]] keeps energy steady but never adds net RNA letters, so the companion Npt2 pump uses proton flow to haul in fresh host GTP, CTP, UTP, and ATP.',
        story:
          'A dividing [[Reticulate Body|real-chlam-rb]] doubling every two hours cannot build new [[ribosomes|ribosome-70s]] and [[messenger RNAs|rna]] by one-for-one swaps alone because [[Chlamydia|real-chlamydia]] cannot synthesize purine or pyrimidine rings from scratch. Riding inward proton gradients across the inner [[membrane|phospholipid]], Npt2 imports net ribonucleoside triphosphates from the host to expand the bacterial nucleotide pool.',
        blueprint: {
          role: 'Proton-coupled ribonucleoside triphosphate symporter supplying net GTP, CTP, UTP, and ATP',
          arrivesFrom: 'Host cytosolic NTP pools entering the [[inclusion|real-chlamydia]] plus periplasmic H+ electrochemical gradient',
          inside: 'Twelve-helix Npt2Ct H+/NTP symporter embedded beside [[Npt1|real-chlam-npt1]] in the [[RB|real-chlam-rb]] inner membrane',
          deliversTo: 'Net NTP building blocks for [[RNA polymerase|rna-polymerase]], GTPases on [[70S ribosomes|ribosome-70s]], and dNTP reductase',
          loop: 'Complements 1:1 Npt1 antiport so total intracellular nucleotide content doubles each cell cycle'
        },
        scientific:
          'Proton-motive-force-coupled nucleoside triphosphate symporter Npt2Ct (~59 kDa, 12 transmembrane segments, paralogous to [[Npt1Ct|real-chlam-npt1]]). Catalyzes net concentrative unidirectional uptake of host GTP, UTP, CTP, and ATP (Km ~4-16 micromolar; competitive across all four rNTPs) across the [[Reticulate Body|real-chlam-rb]] inner [[phospholipid|phospholipid]] bilayer to compensate for absent de novo nucleotide synthesis.',
        from: [
          { nodeId: 'real-cell', label: 'Host Cytosolic NTP Pool', cargo: 'GTP, CTP, UTP & ATP' },
          { nodeId: 'real-chlam-rb', label: 'Periplasmic Ion Gradient', cargo: 'Co-transported H+ motive force' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'RB RNA Polymerase', cargo: 'Net rNTP transcription bricks' },
          { nodeId: 'ribosome-70s', label: 'EF-Tu / EF-G GTPases', cargo: 'GTP for 70S elongation' }
        ]
      },
      es: {
        subtitle: 'El importador neto de letras de ARN impulsado por protones',
        simple:
          'El trueque uno por uno de [[Npt1|real-chlam-npt1]] mantiene la energía pero no suma letras nuevas: por eso la bomba vecina Npt2 aprovecha la entrada de protones para importar GTP, CTP, UTP y ATP netos del huésped.',
        story:
          'Un [[Cuerpo Reticulado|real-chlam-rb]] que duplica su tamaño cada pocas horas no puede fabricar nuevos [[ribosomas 70S|ribosome-70s]] ni [[ARN mensajero|rna]] solo cambiando una molécula por otra, pues [[Chlamydia|real-chlamydia]] perdió las rutas para crear bases nitrogenadas desde cero. Impulsado por protones en la [[membrana|phospholipid]] interna, Npt2 acumula ribonucleótidos trifosfato frescos del huésped.',
        blueprint: {
          role: 'Simportador de ribonucleósidos trifosfato acoplado a protones para ganancia neta de GTP, CTP, UTP y ATP',
          arrivesFrom: 'Reserva citosólica humana de NTP filtrada hacia la [[inclusión|real-chlamydia]] más gradiente periplásmico de H+',
          inside: 'Transportador Npt2Ct de 12 hélices acoplado a H+ junto a [[Npt1|real-chlam-npt1]] en la membrana interna del [[CR|real-chlam-rb]]',
          deliversTo: 'Aporta ladrillos NTP netos a la [[ARN polimerasa|rna-polymerase]], GTPasas de [[ribosomas 70S|ribosome-70s]] y ribonucleótido reductasa',
          loop: 'Complementa el antiporte 1:1 de Npt1 permitiendo duplicar el inventario total de nucleótidos en cada división'
        },
        scientific:
          'Simportador H+/ribonucleósido trifosfato Npt2Ct (~59 kDa, 12 hélices transmembrana, parálogo de [[Npt1Ct|real-chlam-npt1]]). Ejecuta la captación neta unidireccional de GTP, UTP, CTP y ATP del huésped (Km ~4–16 µM) a través de la bicapa interna de [[fosfolípidos|phospholipid]] del [[Cuerpo Reticulado|real-chlam-rb]], supliendo la carencia absoluta de biosíntesis de novo de purinas y pirimidinas.',
        from: [
          { nodeId: 'real-cell', label: 'Reserva humana de NTP', cargo: 'GTP, CTP, UTP y ATP' },
          { nodeId: 'real-chlam-rb', label: 'Gradiente periplásmico', cargo: 'Fuerza motriz de protones' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa del CR', cargo: 'Suministro neto de rNTP' },
          { nodeId: 'ribosome-70s', label: 'Factores EF-Tu y EF-G', cargo: 'GTP para elongación 70S' }
        ]
      }
    },

    rb_dna: {
      en: {
        subtitle: 'The Uncoiled 1.04-Megabase Active Genome',
        simple:
          'Freed from the histone locks of the dormant spore stage, the open 1.04-million-letter [[DNA circle|dna]] of the [[Reticulate Body|real-chlam-rb]] copies itself every two to three hours while firing hundreds of growth genes.',
        story:
          'Minutes after an [[Elementary Body|real-chlam-eb]] enters its host, MEP isoprenoid signals pry Hc1 clamps off the chromosome so the nucleoid blossoms across the [[Reticulate Body|real-chlam-rb]] interior. Replicative forks fed by ribonucleotide reductase copy all 895 chromosomal genes plus the 7.5-kilobase virulence plasmid while [[RNA polymerase|rna-polymerase]] transcribes mid-cycle operons nonstop.',
        blueprint: {
          role: 'Transcriptionally active, replicating 1.04 Mbp circular [[dsDNA|dna]] nucleoid + pCT plasmid of the [[Reticulate Body|real-chlam-rb]]',
          arrivesFrom: 'MEcPP-mediated release of Hc1/Hc2 histones from the incoming [[Elementary Body nucleoid|real-chlam-eb]]',
          inside: 'Open plectonemic 1,042,519 bp [[dsDNA|dna]] chromosome (~895 ORFs) + ~8 copies of 7,501 bp plasmid pCT',
          deliversTo: 'Templates [[RNA polymerase|rna-polymerase]] transcription and semiconservative replication for daughter RBs',
          loop: 'Late accumulation of Hc1/Hc2 re-condenses daughter chromosomes into silent [[Elementary Body|real-chlam-eb]] cores'
        },
        scientific:
          'Decondensed euchromatin-like bacterial nucleoid of the [[Reticulate Body|real-chlam-rb]] housing the 1,042,519 bp circular [[dsDNA|dna]] chromosome (41.3% GC, ~895 protein-coding genes) and conserved 7,501 bp plasmid pCT (8 ORFs including Pgp4 transcriptional regulator of glycogen/virulence genes). Replicated every ~2-3 h using dNTPs converted from Npt2-imported host rNDPs via bacterial ribonucleotide reductase NrdAB.',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Germinating EB Core', cargo: 'MEcPP-released chromosome' },
          { nodeId: 'real-chlam-npt1', label: 'Npt2 + NrdAB Pathway', cargo: 'Reduced dNTP precursors' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'Active RNAP Holoenzyme', cargo: 'Open mid-cycle promoters' },
          { nodeId: 'real-chlam-rb', label: 'Dividing Daughter RBs', cargo: 'Segregated 1.04 Mbp circles' }
        ]
      },
      es: {
        subtitle: 'El genoma activo desplegado de 1,04 megabases',
        simple:
          'Liberado de los cierres de histona de la fase latente, el [[círculo abierto de ADN|dna]] de 1,04 millones de letras del [[Cuerpo Reticulado|real-chlam-rb]] se duplica cada dos o tres horas mientras enciende cientos de genes.',
        story:
          'Poco después de que el [[Cuerpo Elemental|real-chlam-eb]] ingresa en el huésped, señales isoprenoides retiran las pinzas Hc1 y despliegan el cromosoma por el interior del [[Cuerpo Reticulado|real-chlam-rb]]. Las horquillas replicativas copian los 895 genes cromosómicos junto al plásmido de virulencia de 7,5 kilobases mientras la [[ARN polimerasa|rna-polymerase]] transcribe sin descanso.',
        blueprint: {
          role: 'Nucleoide replicativo abierto de [[ADNbc|dna]] (1,04 Mpb + plásmido pCT) propio del [[Cuerpo Reticulado|real-chlam-rb]]',
          arrivesFrom: 'Desbloqueo mediado por MEcPP de las histonas Hc1/Hc2 del [[nucleoide del Cuerpo Elemental|real-chlam-eb]]',
          inside: 'Cromosoma circular distendido de 1.042.519 pb (~895 ORF) más ~8 copias del plásmido pCT (7.501 pb)',
          deliversTo: 'Sirve de molde a la [[ARN polimerasa|rna-polymerase]] y a la replicación exponencial de nuevos CR',
          loop: 'La síntesis tardía de Hc1/Hc2 vuelve a comprimir los cromosomas hijos en núcleos de [[Cuerpo Elemental|real-chlam-eb]]'
        },
        scientific:
          'Nucleoide bacteriano descondensado del [[Cuerpo Reticulado|real-chlam-rb]] compuesto por el cromosoma circular de [[ADNbc|dna]] de 1.042.519 pb (41,3 % GC, ~895 ORF) y el plásmido conservado pCT de 7.501 pb (regulador Pgp4). Se duplica cada ~2–3 h empleando dNTP generados a partir de ribonucleótidos importados mediante la ribonucleótido reductasa bacteriana NrdAB.',
        from: [
          { nodeId: 'real-chlam-eb', label: 'Núcleo germinante del CE', cargo: 'Cromosoma liberado de Hc1' },
          { nodeId: 'real-chlam-npt1', label: 'Vía Npt2 + NrdAB', cargo: 'Suministro de dNTP' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa activa', cargo: 'Promotores de fase media' },
          { nodeId: 'real-chlam-rb', label: 'Cuerpos Reticulados hijos', cargo: 'Copias íntegras de 1,04 Mpb' }
        ]
      }
    },

    rnap: {
      en: {
        subtitle: 'The Three-Sigma Developmental Clock',
        simple:
          'Guided sequentially by three sigma factors, Chlamydia [[RNA polymerase|rna-polymerase]] times the entire indoor cycle - turning on shelter-building genes first, growth genes second, and spore-armor genes last.',
        story:
          'Unlike [[Mycoplasma|real-mycoplasma]] with its single steady lifestyle, [[Chlamydia trachomatis|real-chlamydia]] must orchestrate a dramatic transformation between [[Reticulate|real-chlam-rb]] and [[Elementary Bodies|real-chlam-eb]]. Core [[RNA polymerase|rna-polymerase]] uses sigma-66 early and mid-cycle to print Inc shields, [[Npt1|real-chlam-npt1]], and MOMP, then recruits sigma-54 and sigma-28 late in the cycle to order Hc1 histones and disulfide armor.',
        blueprint: {
          role: 'Stage-regulated bacterial [[RNA polymerase|rna-polymerase]] driving the early/mid/late biphasic cascade',
          arrivesFrom: 'Core RpoA2BC enzyme switching between sigma-66 (housekeeping), sigma-54 (RpoN), and sigma-28 (FliA)',
          inside: 'Transcribes open [[Reticulate Body dsDNA|real-chlam-rb]] using NTPs imported by [[Npt1|real-chlam-npt1]]/Npt2',
          deliversTo: 'Produces temporal waves of [[mRNA|rna]] for [[70S ribosomes|ribosome-70s]] plus rRNA and tRNA',
          loop: 'Rifamycins potently bind RpoB to block transcription, though single-step rpoB mutations can arise'
        },
        scientific:
          'Bacterial multisubunit [[RNA polymerase|rna-polymerase]] of [[Chlamydia trachomatis|real-chlamydia]] partnering with three developmental sigma factors: primary sigma-66 (RpoD, driving immediate-early inc and mid-cycle [[RB|real-chlam-rb]] metabolic/ribosomal regulons) and late-stage sigma-54 (RpoN, enhancer-activated by CtcC) plus sigma-28 (WhiG/FliA) activating hctA, hctB, and omcAB for [[EB|real-chlam-eb]] redifferentiation.',
        from: [
          { nodeId: 'dna', label: '1.04 Mbp RB Chromosome', cargo: 'Early, mid & late promoters' },
          { nodeId: 'real-chlam-npt1', label: 'Npt1/Npt2 Translocases', cargo: 'Imported host ATP & NTPs' }
        ],
        to: [
          { nodeId: 'rna', label: 'Temporal mRNA Waves', cargo: 'Stage-timed transcripts' },
          { nodeId: 'ribosome-70s', label: 'RB 70S Polysomes', cargo: 'Coupled protein synthesis' }
        ]
      },
      es: {
        subtitle: 'El reloj de desarrollo de tres factores sigma',
        simple:
          'Guiada en orden por tres factores sigma, la [[ARN polimerasa|rna-polymerase]] de Chlamydia marca el ritmo del ciclo: activa primero los escudos de la inclusión, luego la división y al final la coraza infecciosa.',
        story:
          'A diferencia de [[Mycoplasma|real-mycoplasma]] y su rutina constante, [[Chlamydia trachomatis|real-chlamydia]] debe coordinar la metamorfosis entre [[Cuerpos Reticulados|real-chlam-rb]] y [[Cuerpos Elementales|real-chlam-eb]]. Su [[ARN polimerasa|rna-polymerase]] emplea sigma-66 al principio y en fase media para producir proteínas Inc, [[Npt1|real-chlam-npt1]] y MOMP, y convoca después a sigma-54 y sigma-28 para fabricar histonas Hc1 y blindaje disulfuro.',
        blueprint: {
          role: '[[ARN polimerasa|rna-polymerase]] bacteriana regulada por etapas que gobierna la cascada genética bifásica',
          arrivesFrom: 'Núcleo RpoA2BC acoplado secuencialmente a sigma-66, sigma-54 (RpoN) y sigma-28',
          inside: 'Transcribe el [[ADNbc abierto del CR|real-chlam-rb]] consumiendo los NTP importados vía [[Npt1|real-chlam-npt1]]/Npt2',
          deliversTo: 'Genera oleadas temporales de [[ARNm|rna]] hacia los [[ribosomas 70S|ribosome-70s]] junto con ARNr y ARNt',
          loop: 'Sensible a rifamicinas sobre la subunidad RpoB durante la fase replicativa intracelular'
        },
        scientific:
          'Holoenzima [[ARN polimerasa|rna-polymerase]] de [[Chlamydia trachomatis|real-chlamydia]] controlada por tres factores sigma temporales: sigma-66 principal (RpoD, genes tempranos inc y regulón replicativo del [[CR|real-chlam-rb]]) y los factores tardíos sigma-54 (RpoN, activado por CtcC) y sigma-28, responsables de encender hctA, hctB y omcAB durante la conversión en [[CE|real-chlam-eb]].',
        from: [
          { nodeId: 'dna', label: 'Cromosoma abierto de 1,04 Mpb', cargo: 'Promotores por etapa' },
          { nodeId: 'real-chlam-npt1', label: 'Sistemas Npt1 y Npt2', cargo: 'ATP y rNTP del huésped' }
        ],
        to: [
          { nodeId: 'rna', label: 'Oleadas de ARNm', cargo: 'Transcritos tempranos a tardíos' },
          { nodeId: 'ribosome-70s', label: 'Polisomas 70S del CR', cargo: 'Síntesis proteica acoplada' }
        ]
      }
    },

    mrna: {
      en: {
        subtitle: 'Three Timed Waves of Genetic Orders',
        simple:
          'Peeling off the open [[Reticulate Body|real-chlam-rb]] chromosome, bacterial [[messenger RNAs|rna]] carry three timed waves of instructions straight to [[70S ribosomes|ribosome-70s]] - plus carry-over transcripts packed inside spores.',
        story:
          'Within thirty minutes of entering a [[human cell|real-cell]], early [[mRNAs|rna]] order Inc shields to remodel the inclusion wall; by twelve hours, mid-cycle ribbons flood [[70S ribosomes|ribosome-70s]] with MOMP and MreB division blueprints; and after twenty-four hours, late transcripts trigger condensation back into [[Elementary Bodies|real-chlam-eb]] stocked with ready-to-translate mRNAs for the next host.',
        blueprint: {
          role: 'Temporally cascaded early, mid-cycle, and late bacterial [[mRNA|rna]] transcriptome',
          arrivesFrom: 'Synthesized by stage-switched [[RNA polymerase|rna-polymerase]] off the [[1.04 Mbp RB nucleoid|real-chlam-rb]]',
          inside: 'Uncapped prokaryotic [[RNA|rna]] operons translated co-transcriptionally inside [[Reticulate Bodies|real-chlam-rb]]',
          deliversTo: 'Directs [[70S ribosomes|ribosome-70s]] to build Inc effectors, [[Npt1|real-chlam-npt1]], MreB, and late EB armor',
          loop: 'Small regulatory sRNAs (such as IhtA) repress Hc1 translation during RB growth until late conversion'
        },
        scientific:
          'Triphasic [[mRNA|rna]] expression program of [[Chlamydia trachomatis|real-chlamydia]]: immediate-early transcripts (1-3 h post-infection: incD-G, npt1), mid-cycle exponential [[RB|real-chlam-rb]] transcripts (8-20 h: ompA, mreB, r-proteins), and late [[EB|real-chlam-eb]] transcripts (24-48 h: hctA, hctB, omcAB, tarp). Small antisense RNA IhtA post-transcriptionally silences hctA mRNA until RB replication concludes.',
        from: [
          { nodeId: 'rna-polymerase', label: 'Sigma-66/54/28 RNAP', cargo: 'Early, mid & late transcription' },
          { nodeId: 'real-chlam-rb', label: 'Decondensed RB Nucleoid', cargo: '895-gene coding templates' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: '70S Polysome Chains', cargo: 'Co-transcriptional decoding' },
          { nodeId: 'real-chlam-eb', label: 'Maturing Elementary Bodies', cargo: 'Carry-over early mRNAs' }
        ]
      },
      es: {
        subtitle: 'Tres oleadas sincronizadas de órdenes genéticas',
        simple:
          'Saliendo del cromosoma abierto del [[Cuerpo Reticulado|real-chlam-rb]], los [[ARN mensajeros|rna]] entregan tres tandas sucesivas de instrucciones a los [[ribosomas 70S|ribosome-70s]] a lo largo de la infección.',
        story:
          'A la media hora de entrar en la [[célula humana|real-cell]], los primeros [[ARNm|rna]] encargan escudos Inc para blindar la vacuola; hacia las doce horas, los transcritos medios saturan los [[ribosomas 70S|ribosome-70s]] con planos de MOMP y MreB; y pasadas veinticuatro horas, la oleada tardía ordena empaquetar nuevos [[Cuerpos Elementales|real-chlam-eb]].',
        blueprint: {
          role: 'Transcriptoma bacteriano de [[ARNm|rna]] escalonado en fases temprana, media y tardía',
          arrivesFrom: 'Transcrito por la [[ARN polimerasa|rna-polymerase]] sobre el [[nucleoide abierto del CR|real-chlam-rb]]',
          inside: 'Operones procariotas de [[ARN|rna]] traducidos cotranscripcionalmente en el citoplasma replicativo',
          deliversTo: 'Guía a los [[ribosomas 70S|ribosome-70s]] para fabricar proteínas Inc, [[Npt1|real-chlam-npt1]], MreB y coraza tardía',
          loop: 'Pequeños ARN reguladores como IhtA frenan la traducción de Hc1 hasta terminar las rondas de división'
        },
        scientific:
          'Programa transcripcional trifásico de [[ARNm|rna]] en [[Chlamydia trachomatis|real-chlamydia]]: transcritos tempranos inmediatos (1–3 h: incD–G, npt1), transcritos exponenciales del [[CR|real-chlam-rb]] (8–20 h: ompA, mreB, proteínas ribosómicas) y transcritos tardíos hacia [[CE|real-chlam-eb]] (24–48 h: hctA, omcAB, tarp), modulados postranscripcionalmente por el ARN antisentido IhtA.',
        from: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa sigma-66/54/28', cargo: 'Síntesis escalonada' },
          { nodeId: 'real-chlam-rb', label: 'Nucleoide del CR', cargo: 'Moldes de 895 genes' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'Polisomas 70S', cargo: 'Traducción inmediata' },
          { nodeId: 'real-chlam-eb', label: 'Cuerpos Elementales maduros', cargo: 'ARNm retenidos para germinar' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: 'Host-ATP-Powered 70S Protein Factories',
        simple:
          'Crowding every dividing [[Reticulate Body|real-chlam-rb]], thousands of bacterial [[70S ribosomes|ribosome-70s]] spend stolen human ATP to build bacterial proteins - which is why azithromycin and doxycycline cure Chlamydia while sparing [[viruses|viruses]].',
        story:
          'Because early microbiologists saw [[Chlamydia|real-chlamydia]] replicate only inside [[human cells|real-cell]], they called it a large virus until electron microscopes revealed dense clouds of bacterial [[70S ribosomes|ribosome-70s]] inside every [[Reticulate Body|real-chlam-rb]]. Powered by ATP and GTP imported across [[Npt1|real-chlam-npt1]] and Npt2, these 70S factories build every T3SS needle, Inc shield, and MOMP barrel.',
        blueprint: {
          role: 'Bacterial [[70S ribosome|ribosome-70s]] translation machinery fueled by imported host ATP/GTP',
          arrivesFrom: 'Two chromosomal 16S-23S-5S rRNA operons plus r-proteins inside [[Reticulate Bodies|real-chlam-rb]]',
          inside: 'Prokaryotic 30S + 50S [[70S polysomes|ribosome-70s]] decoding chlamydial [[mRNA|rna]] using EF-Tu/EF-G and host-derived GTP',
          deliversTo: 'Synthesizes MOMP, Inc effectors, T3SS subunits, [[Npt1|real-chlam-npt1]], MreB, and late Hc1/OmcB proteins',
          loop: 'Selective clinical target of tetracyclines (doxycycline, 30S) and macrolides (azithromycin, 50S)'
        },
        scientific:
          'Abundant prokaryotic [[70S ribosomes|ribosome-70s]] (~2.5 MDa, encoded by two rRNA operons in [[Chlamydia trachomatis|real-chlamydia]]) densely populating exponential-phase [[Reticulate Bodies|real-chlam-rb]]. Driven bioenergetically by host-imported ATP/GTP via [[Npt1Ct|real-chlam-npt1]]/Npt2Ct and selectively inhibited by first-line clinical regimens doxycycline (30S decoding center) and azithromycin (50S nascent peptide tunnel) without harming host 80S ribosomes.',
        from: [
          { nodeId: 'rna', label: 'Chlamydial mRNA & rRNA', cargo: 'Transcripts & two rRNA operons' },
          { nodeId: 'real-chlam-npt1', label: 'Npt1 & Npt2 Import', cargo: 'Host ATP & GTP fuel' }
        ],
        to: [
          { nodeId: 'real-chlam-rb', label: 'RB Proteome & MreB', cargo: 'Exponential biomass doubling' },
          { nodeId: 'real-chlam-eb', label: 'Late T3SS & COMC Armor', cargo: 'Infectious progeny assembly' }
        ]
      },
      es: {
        subtitle: 'Fábricas proteicas 70S movidas con ATP humano',
        simple:
          'Llenando cada [[Cuerpo Reticulado|real-chlam-rb]] en división, miles de [[ribosomas 70S|ribosome-70s]] propios gastan ATP humano robado para fabricar proteínas bacterianas; por eso la azitromicina y la doxiciclina curan Chlamydia y jamás un [[virus|viruses]].',
        story:
          'Como solo se multiplicaba dentro de [[células humanas|real-cell]], durante años se tomó a [[Chlamydia|real-chlamydia]] por un virus hasta que el microscopio electrónico reveló nubes densas de [[ribosomas 70S|ribosome-70s]] en cada [[Cuerpo Reticulado|real-chlam-rb]]. Alimentados con el ATP y GTP que entran por [[Npt1|real-chlam-npt1]] y Npt2, estos talleres construyen todas las agujas T3SS, escudos Inc y barriles MOMP.',
        blueprint: {
          role: 'Maquinaria bacteriana de traducción en [[ribosomas 70S|ribosome-70s]] energizada por ATP/GTP del huésped',
          arrivesFrom: 'Dos operones cromosómicos ARNr 16S–23S–5S y proteínas ribosómicas del [[Cuerpo Reticulado|real-chlam-rb]]',
          inside: '[[Polisomas 70S|ribosome-70s]] procariotas (30S + 50S) que traducen [[ARNm|rna]] propio con GTP importado',
          deliversTo: 'Fabrica MOMP, proteínas Inc, complejos T3SS, [[Npt1|real-chlam-npt1]], MreB y coraza tardía Hc1/OmcB',
          loop: 'Diana terapéutica de primera línea para doxiciclina (subunidad 30S) y azitromicina (túnel 50S)'
        },
        scientific:
          'Población densa de [[ribosomas 70S|ribosome-70s]] bacterianos (~2,5 MDa, respaldados por dos operones ribosómicos en [[Chlamydia trachomatis|real-chlamydia]]) dentro de los [[Cuerpos Reticulados|real-chlam-rb]]. Sostenidos energéticamente por el ATP/GTP importado mediante [[Npt1Ct|real-chlam-npt1]]/Npt2Ct e inhibidos selectivamente en clínica por doxiciclina y azitromicina sin afectar los ribosomas 80S humanos.',
        from: [
          { nodeId: 'rna', label: 'ARNm y dos operones ARNr', cargo: 'Moldes y armazón ribosómico' },
          { nodeId: 'real-chlam-npt1', label: 'Importación Npt1/Npt2', cargo: 'ATP y GTP del huésped' }
        ],
        to: [
          { nodeId: 'real-chlam-rb', label: 'Proteoma y anillo MreB', cargo: 'Duplicación exponencial' },
          { nodeId: 'real-chlam-eb', label: 'Inyectisomas y coraza COMC', cargo: 'Maduración de progenie' }
        ]
      }
    },

    glycogen: {
      en: {
        subtitle: 'The Shared Sugar Pantry Inside the Bubble',
        simple:
          'Late in infection, [[Chlamydia trachomatis|real-chlamydia]] packs the open fluid of its [[inclusion|real-chlamydia]] with branched glycogen sugar granules that fuel [[Elementary Body|real-chlam-eb]] maturation and germination.',
        story:
          'As hundreds of [[Reticulate Bodies|real-chlam-rb]] crowd the growing inclusion and compete for host ATP, Chlamydia stocks an emergency energy reserve right inside the vacuole lumen. Using host UDP-glucose imported across the inclusion wall alongside secreted bacterial GlgA synthase, it weaves dense glycogen rosettes (classically stained brown with iodine in diagnostics) that mature [[Elementary Bodies|real-chlam-eb]] tap for glycolysis.',
        blueprint: {
          role: 'Intraluminal and cytoplasmic alpha-glucan energy reserve fueling late [[EB|real-chlam-eb]] maturation',
          arrivesFrom: 'Host cytosolic UDP-glucose imported via SLC35D2 into the [[inclusion|real-chlamydia]] plus T3SS-secreted GlgA',
          inside: 'Branched alpha-1,4 / alpha-1,6 glucose polymer granules filling the inclusion lumen and [[EB|real-chlam-eb]] cytoplasm',
          deliversTo: 'Cleaved into glucose-1-phosphate/glucose-6-phosphate to power late maturation and early EB germination',
          loop: 'Regulated by plasmid protein Pgp4; plasmid-cured C. trachomatis strains fail to accumulate luminal glycogen'
        },
        scientific:
          'Abundant intraluminal and intraparticulate branched alpha-1,4/alpha-1,6 glycogen granules unique among Chlamydiaceae to [[Chlamydia trachomatis|real-chlamydia]] (diagnostic Lugol iodine-positive matrix). Synthesized inside the [[inclusion lumen|real-chlamydia]] by T3SS-secreted bacterial glycogen synthase GlgA + branching enzyme GlgB acting on host UDP-glucose imported via recruited host transporter SLC35D2, then phosphorolyzed via GlgP into G6P for [[EB|real-chlam-eb]] bioenergetics.',
        from: [
          { nodeId: 'real-cell', label: 'Host SLC35D2 Import', cargo: 'Cytosolic UDP-glucose' },
          { nodeId: 'real-chlam-rb', label: 'Plasmid Pgp4 & GlgA', cargo: 'Luminal glycogen synthesis' }
        ],
        to: [
          { nodeId: 'real-chlam-eb', label: 'Maturing Elementary Bodies', cargo: 'Stored glucose-6-P reserve' },
          { nodeId: 'real-chlamydia', label: 'Inclusion Lumen Matrix', cargo: 'Iodine-staining sugar depot' }
        ]
      },
      es: {
        subtitle: 'La despensa compartida de glucógeno en la inclusión',
        simple:
          'En la etapa avanzada de la infección, [[Chlamydia trachomatis|real-chlamydia]] llena el interior de su [[inclusión|real-chlamydia]] con gránulos ramificados de glucógeno que alimentan la maduración de los [[Cuerpos Elementales|real-chlam-eb]].',
        story:
          'Cuando cientos de [[Cuerpos Reticulados|real-chlam-rb]] abarrotan la vacuola y compiten por el ATP disponible, la bacteria acumula una reserva energética común en pleno lumen de la inclusión. Importando UDP-glucosa humana y secretando su propia enzima GlgA, teje rosetas densas de glucógeno —clásicamente teñidas con yodo en diagnóstico— que abastecen a los nuevos [[Cuerpos Elementales|real-chlam-eb]].',
        blueprint: {
          role: 'Reserva polisacarídica intraluminal e intracelular de α-glucano para la maduración del [[Cuerpo Elemental|real-chlam-eb]]',
          arrivesFrom: 'UDP-glucosa del huésped introducida por SLC35D2 en la [[inclusión|real-chlamydia]] y procesada por GlgA secretada',
          inside: 'Gránulos ramificados de glucosa α-1,4 / α-1,6 acumulados en el lumen vacuolar y en los [[CE|real-chlam-eb]]',
          deliversTo: 'Degradados por GlgP en glucosa-6-fosfato para sostener la conversión final y la germinación temprana',
          loop: 'Depende del regulador plasmídico Pgp4; las cepas sin plásmido pCT pierden el depósito de glucógeno'
        },
        scientific:
          'Depósito intraluminal e intracitoplasmático de glucógeno ramificado α-1,4/α-1,6 característico de [[Chlamydia trachomatis|real-chlamydia]] (matriz positiva al yodo de Lugol). Polimerizado en el [[lumen de la inclusión|real-chlamydia]] por la glucógeno sintasa bacteriana GlgA y la enzima ramificante GlgB secretadas vía T3SS sobre UDP-glucosa importada por SLC35D2, y movilizado como G6P para los [[Cuerpos Elementales|real-chlam-eb]].',
        from: [
          { nodeId: 'real-cell', label: 'Transportador SLC35D2', cargo: 'UDP-glucosa humana' },
          { nodeId: 'real-chlam-rb', label: 'Regulador Pgp4 y GlgA', cargo: 'Polimerización luminal' }
        ],
        to: [
          { nodeId: 'real-chlam-eb', label: 'Cuerpos Elementales', cargo: 'Reserva energética para germinar' },
          { nodeId: 'real-chlamydia', label: 'Lumen de la inclusión', cargo: 'Matriz polisacarídica densa' }
        ]
      }
    }
  },

  'rickettsia_realistic.html': {
    slime: {
      en: {
        subtitle: 'The Cytosolic Stealth Polysaccharide Halo',
        simple:
          'Floating naked inside human cytoplasm, [[Rickettsia prowazekii|real-rickettsia]] wears a hydrated sugar-slime halo outside its [[outer membrane|real-rick-envelope]] that helps mask the bacterium from intracellular cleanup sensors.',
        story:
          'Living free in raw [[host cytoplasm|real-cell]] without an inclusion bubble exposes a bacterium directly to ubiquitin tags and autophagy traps. Outside its OmpB armor, [[Rickettsia prowazekii|real-rickettsia]] maintains a translucent microcapsular slime coat that cushions its [[envelope|real-rick-envelope]], stabilizes attachment during entry, and shields outer surface lipids from host immune recognition.',
        blueprint: {
          role: 'Outermost hydrated microcapsular polysaccharide layer cloaking cytosolic [[Rickettsia|real-rickettsia]]',
          arrivesFrom: 'Exported across the [[Gram-negative envelope|real-rick-envelope]] from nucleotide-sugar precursors',
          inside: '~10-15 nm electron-lucent glycocalyx halo loosely tethered to outer LPS O-antigen and OmpB S-layer',
          deliversTo: 'Buffers cytosolic osmotic/immune contact and limits host ubiquitin-autophagy recruitment',
          loop: 'Thins during prolonged extracellular starvation and regenerates rapidly upon cytosolic entry'
        },
        scientific:
          'Outermost ~10-15 nm hydrated microcapsular polysaccharide slime layer surrounding the crystalline S-layer and [[outer membrane|real-rick-envelope]] of [[Rickettsia prowazekii|real-rickettsia]]. Composed of immunogenic acidic glycoconjugates loosely associated with lipopolysaccharide O-chains and OmpB, contributing to serum/autophagy evasion inside [[endothelial cells|real-cell]].',
        from: [
          { nodeId: 'real-rick-envelope', label: 'Gram-Negative Envelope', cargo: 'Exported glycoconjugates' },
          { nodeId: 'real-rickettsia', label: 'Sugar-Nucleotide Pool', cargo: 'Activated glycosyl donors' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Host Cytosol Sensors', cargo: 'Autophagy/ubiquitin masking' },
          { nodeId: 'lysosome', label: 'Xenophagy Evasion', cargo: 'Blocked autophagolysosome capture' }
        ]
      },
      es: {
        subtitle: 'El halo mucoso furtivo en pleno citosol',
        simple:
          'Flotando libre en el citoplasma humano, [[Rickettsia prowazekii|real-rickettsia]] se rodea de un halo hidratado de polisacáridos sobre su [[membrana externa|real-rick-envelope]] que la oculta de los sensores internos de limpieza.',
        story:
          'Vivir desnuda en el [[citosol humano|real-cell]] sin una vacuola protectora expone a cualquier bacteria a etiquetas de ubiquitina y trampas autofágicas. Sobre su coraza proteica OmpB, [[Rickettsia prowazekii|real-rickettsia]] despliega una fina microcápsula mucosa que amortigua su [[envoltura|real-rick-envelope]], facilita la adhesión inicial y esconde sus lípidos externos.',
        blueprint: {
          role: 'Microcápsula externa hidratada de polisacáridos que camufla a [[Rickettsia|real-rickettsia]] en el citosol',
          arrivesFrom: 'Exportada a través de la [[envoltura Gram-negativa|real-rick-envelope]] desde azúcares-nucleótido internos',
          inside: 'Halo glucocalicino (~10–15 nm) asociado de forma laxa a las cadenas O del LPS y a la capa S de OmpB',
          deliversTo: 'Amortigua el roce citosólico y dificulta el marcaje autofágico por parte de la [[célula huésped|real-cell]]',
          loop: 'Se reduce durante el ayuno extracelular en el vector y se regenera al reingresar al citosol endotelial'
        },
        scientific:
          'Capa microcapsular hidratada de polisacáridos (~10–15 nm de grosor) dispuesta sobre la capa S cristalina y la [[membrana externa|real-rick-envelope]] de [[Rickettsia prowazekii|real-rickettsia]]. Formada por glicoconjugados ácidos inmunogénicos unidos no covalentemente al LPS y a OmpB, implicados en la evasión de xenofagia dentro de [[células endoteliales|real-cell]].',
        from: [
          { nodeId: 'real-rick-envelope', label: 'Envoltura Gram-negativa', cargo: 'Glicoconjugados exportados' },
          { nodeId: 'real-rickettsia', label: 'Azúcares-nucleótido', cargo: 'Precursores capsulares' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Sensores del citosol', cargo: 'Ocultación frente a ubiquitina' },
          { nodeId: 'lysosome', label: 'Evasión de xenofagia', cargo: 'Freno a autofagolisosomas' }
        ]
      }
    },

    om: {
      en: {
        subtitle: 'The Autotransporter-Studded Outer Hull',
        simple:
          'Built like a classic Gram-negative outer shield, this asymmetric [[lipid bilayer|phospholipid]] anchors the OmpB entry coat, the [[Type IV Secretion|real-rick-envelope]] pore, and the polar [[Sca2 comet engine|real-rick-comet]].',
        story:
          'Even after millions of years living inside [[eukaryotic cells|real-cell]], [[Rickettsia prowazekii|real-rickettsia]] kept a true Gram-negative outer [[membrane|phospholipid]] paved on its exterior with lipopolysaccharide. Beta-barrel pores let cytosolic host ATP and glutamate diffuse into the periplasm toward [[Tlc1|real-rick-envelope]], while autotransporter barrels display OmpB across the body and [[Sca2|real-rick-comet]] at one pole.',
        blueprint: {
          role: 'Asymmetric LPS-bearing outer [[phospholipid|phospholipid]] bilayer of the [[rickettsial envelope|real-rick-envelope]]',
          arrivesFrom: 'Bacterial phospholipid and LPS synthesis assembled via outer-membrane Bam machinery',
          inside: '~7 nm bilayer with outer LPS leaflet, general porins, rvh T4SS outer cap, OmpB S-layer, and polar [[Sca2|real-rick-comet]]',
          deliversTo: 'Filters host cytosolic ATP/metabolites into periplasm and presents adhesion and motility effectors',
          loop: 'Group-specific typhus LPS antigens distinguish R. prowazekii from spotted-fever rickettsiae'
        },
        scientific:
          'Asymmetric ~7 nm Gram-negative outer [[phospholipid|phospholipid]] bilayer of [[Rickettsia prowazekii|real-rickettsia]] featuring typhus-group immunodominant lipopolysaccharide in the outer leaflet and glycerophospholipids in the inner leaflet. Houses Bam-inserted 12-stranded autotransporter beta-barrels (Sca5/OmpB and polar [[Sca2|real-rick-comet]]), solute porins admitting cytosolic ATP, and the outer-membrane chamber of [[rvh T4SS|real-rick-envelope]].',
        from: [
          { nodeId: 'real-rickettsia', label: 'Inner-Membrane Lpt/Sec', cargo: 'LPS & beta-barrel precursors' },
          { nodeId: 'phospholipid', label: 'Bacterial Lipid Synthesis', cargo: 'Inner-leaflet phospholipids' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Periplasmic Space', cargo: 'Filtered host ATP & glutamate' },
          { nodeId: 'real-rick-comet', label: 'Polar Sca2 Anchor', cargo: 'Displayed actin nucleator' }
        ]
      },
      es: {
        subtitle: 'El casco externo tachonado de autotransportadores',
        simple:
          'Construida como un escudo Gram-negativo clásico, esta [[bicapa lipídica|phospholipid]] asimétrica sostiene la cubierta de entrada OmpB, el poro de [[secreción tipo IV|real-rick-envelope]] y el motor polar [[Sca2|real-rick-comet]].',
        story:
          'Incluso tras millones de años dentro de [[células eucariotas|real-cell]], [[Rickettsia prowazekii|real-rickettsia]] conservó una auténtica [[membrana|phospholipid]] externa Gram-negativa pavimentada con lipopolisacárido. Sus porinas dejan pasar el ATP y el glutamato del citosol hacia [[Tlc1|real-rick-envelope]], mientras barriles autotransportadores exponen OmpB en todo el cuerpo y [[Sca2|real-rick-comet]] en un polo.',
        blueprint: {
          role: 'Bicapa externa asimétrica de [[fosfolípidos|phospholipid]] y LPS de la [[envoltura rickettsial|real-rick-envelope]]',
          arrivesFrom: 'Síntesis bacteriana de fosfolípidos y LPS ensamblados mediante el complejo externo BAM',
          inside: 'Bicapa de ~7 nm con hoja externa de LPS, porinas, cúpula externa de rvh T4SS, OmpB y [[Sca2|real-rick-comet]] polar',
          deliversTo: 'Tamiza ATP y metabolitos del citosol hacia el periplasma y proyecta adhesinas y nucleadores de actina',
          loop: 'El antígeno LPS del grupo tífico diferencia serológicamente a R. prowazekii de las fiebres manchadas'
        },
        scientific:
          'Bicapa externa Gram-negativa asimétrica (~7 nm) de [[Rickettsia prowazekii|real-rickettsia]] con lipopolisacárido inmunodominante del grupo tífico en su hoja exterior y glicerofosfolípidos en la hoja interna. Aloja barriles β autotransportadores de 12 hebras (Sca5/OmpB y [[Sca2|real-rick-comet]] polar), porinas permeables a ATP y el anillo externo del [[sistema rvh T4SS|real-rick-envelope]].',
        from: [
          { nodeId: 'real-rickettsia', label: 'Transporte interno Lpt/Sec', cargo: 'LPS y precursores β' },
          { nodeId: 'phospholipid', label: 'Síntesis lipídica propia', cargo: 'Fosfolípidos internos' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Espacio periplásmico', cargo: 'Paso de ATP y glutamato' },
          { nodeId: 'real-rick-comet', label: 'Anclaje polar de Sca2', cargo: 'Exposición hacia el citosol' }
        ]
      }
    },

    omp: {
      en: {
        subtitle: 'The Crystalline S-Layer Entry Key',
        simple:
          'Tiling the entire surface in a neat geometric lattice, abundant OmpB autotransporter proteins latch onto Ku70 receptors on human blood-vessel [[cells|real-cell]] to trick them into swallowing [[Rickettsia|real-rickettsia]].',
        story:
          'Lining human capillaries, endothelial [[cells|real-cell]] are the prime target of epidemic typhus. [[Rickettsia prowazekii|real-rickettsia]] coats its [[outer membrane|real-rick-envelope]] with a regular crystalline array of Sca5/OmpB passenger domains; touching host Ku70 triggers ubiquitin tagging and actin recruitment that pulls the bacterium indoors where phospholipases immediately break it free.',
        blueprint: {
          role: 'Immunodominant crystalline S-layer autotransporter adhesin (OmpB/Sca5) mediating host endothelial invasion',
          arrivesFrom: 'Translated as a 168 kDa precursor on [[70S ribosomes|ribosome-70s]] and cleaved into 120 kDa passenger + 32 kDa barrel',
          inside: 'Tetragonal paracrystalline S-layer of lysine-methylated OmpB passengers tiling the [[outer membrane|real-rick-envelope]]',
          deliversTo: 'Binds host plasma-membrane Ku70 on [[endothelial cells|real-cell]] to trigger zipper-like phagocytic uptake',
          loop: 'Extensive lysine methylation by PKMT1/PKMT2 protects OmpB from host proteases and shapes immune recognition'
        },
        scientific:
          'Surface Cell Antigen 5 (Sca5 / rOmpB, ~15% of total cellular protein mass in [[Rickettsia prowazekii|real-rickettsia]]) forming a regular ~13 nm tetragonal S-layer over the [[outer membrane|real-rick-envelope]]. Secreted via type Va autotransport (32 kDa C-terminal beta-barrel + noncovalently retained 120 kDa beta-helical passenger methylated by PKMT1/2), engaging host Ku70 and recruiting c-Cbl/Arp2/3 for [[endothelial|real-cell]] entry.',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes & PKMT1/2', cargo: 'Methylated 168 kDa pro-OmpB' },
          { nodeId: 'real-rick-envelope', label: 'Outer-Membrane Barrel', cargo: 'Type Va autotransport' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Endothelial Ku70 Receptor', cargo: 'Zipper-mediated invasion' },
          { nodeId: 'actin-filament', label: 'Host Entry Actin', cargo: 'Arp2/3 phagocytic engulfment' }
        ]
      },
      es: {
        subtitle: 'La llave cristalina de entrada endotelial',
        simple:
          'Cubriendo toda la bacteria en una red geométrica ordenada, las abundantes proteínas OmpB se unen a receptores Ku70 de las [[células|real-cell]] de los vasos sanguíneos para lograr que engullan a [[Rickettsia|real-rickettsia]].',
        story:
          'Las [[células endoteliales|real-cell]] que tapizan nuestros capilares sanguíneos son el blanco principal del tifus epidémico. [[Rickettsia prowazekii|real-rickettsia]] reviste su [[membrana externa|real-rick-envelope]] con una malla cristalina de dominios OmpB; al tocar la proteína humana Ku70 desencadena el reclutamiento local de actina para entrar en la célula antes de romper la vesícula.',
        blueprint: {
          role: 'Adhesina autotransportadora inmunodominante en capa S cristalina (OmpB/Sca5) para invasión endotelial',
          arrivesFrom: 'Traducida como precursor de 168 kDa en [[ribosomas 70S|ribosome-70s]] y escindida en pasajero (120 kDa) y barril (32 kDa)',
          inside: 'Red paracristalina tetragonal de dominios OmpB metilados en lisinas sobre la [[membrana externa|real-rick-envelope]]',
          deliversTo: 'Reconoce el receptor Ku70 en [[células endoteliales|real-cell]] para inducir endocitosis tipo cremallera',
          loop: 'La metilación múltiple por PKMT1/PKMT2 protege a OmpB de proteasas humanas y modula su inmunogenicidad'
        },
        scientific:
          'Antígeno Celular Superficial 5 (Sca5 / rOmpB, ~15 % de la proteína total de [[Rickettsia prowazekii|real-rickettsia]]) dispuesto en una capa S tetragonal (~13 nm de periodicidad) sobre la [[membrana externa|real-rick-envelope]]. Exportado por autotransporte tipo Va e hipermetilado por las metiltransferasas PKMT1/2, se une a Ku70 en [[células endoteliales|real-cell]] activando c-Cbl y Arp2/3.',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S y PKMT1/2', cargo: 'Precursor OmpB metilado' },
          { nodeId: 'real-rick-envelope', label: 'Barril β externo', cargo: 'Autotransporte tipo Va' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Receptor endotelial Ku70', cargo: 'Adhesión e invasión' },
          { nodeId: 'actin-filament', label: 'Actina de entrada', cargo: 'Fagocitosis inducida' }
        ]
      }
    },

    pg: {
      en: {
        subtitle: 'The Thin Rod-Shaping Chainmail Belt',
        simple:
          'Unlike wall-less [[Mycoplasma|real-mycoplasma]] or septal-only [[Chlamydia|real-chlamydia]], [[Rickettsia prowazekii|real-rickettsia]] keeps a complete thin [[peptidoglycan|peptidoglycan]] sacculus that holds its short rod shape inside host cytoplasm.',
        story:
          'Sandwiched inside the periplasm of the [[rickettsial envelope|real-rick-envelope]], a single woven layer of meso-DAP [[peptidoglycan|peptidoglycan]] braces the ~350-by-1,100-nanometer coccobacillus so polar [[Sca2 comet thrust|real-rick-comet]] pushes a rigid hull rather than squashing a soft bag. Although beta-lactams reach cytosolic bacteria poorly clinically, Rickettsia retains functional Mur and PBP enzymes.',
        blueprint: {
          role: 'Complete thin Gram-negative [[peptidoglycan|peptidoglycan]] sacculus maintaining coccobacillary rod geometry',
          arrivesFrom: 'Cytoplasmic UDP-GlcNAc and UDP-MurNAc-pentapeptide flipped as Lipid II across the inner [[bilayer|phospholipid]]',
          inside: 'Monolayered ~3-5 nm meso-DAP cross-linked murein mesh in the periplasm of the [[envelope|real-rick-envelope]]',
          deliversTo: 'Provides axial stiffness for [[Sca2 actin propulsion|real-rick-comet]] and scaffolds [[rvh T4SS|real-rick-envelope]]',
          loop: 'Modified stem peptides limit shedding of NOD1-activating fragments into the surrounding host cytosol'
        },
        scientific:
          'Continuous periplasmic Gram-negative A1gamma (meso-diaminopimelate) [[peptidoglycan|peptidoglycan]] monolayer (~3-5 nm thick) in [[Rickettsia prowazekii|real-rickettsia]], synthesized by conserved MurA-G, MraY, RodA/PBP2, and FtsI enzymes. Confers mechanical rod rigidity required for directional polar [[F-actin comet motility|real-rick-comet]] despite clinical reliance on intracellularly penetrating tetracyclines rather than poorly permeating beta-lactams.',
        from: [
          { nodeId: 'real-rickettsia', label: 'Cytoplasmic MurA-G', cargo: 'Lipid II murein precursors' },
          { nodeId: 'phospholipid', label: 'Inner Membrane Flippase', cargo: 'Periplasmic translocation' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Tripartite Envelope', cargo: 'Coccobacillary rigidity' },
          { nodeId: 'real-rick-comet', label: 'Polar Comet Thrust', cargo: 'Load-bearing hull brace' }
        ]
      },
      es: {
        subtitle: 'El fino cinturón de malla que da forma al bacilo',
        simple:
          'A diferencia de [[Mycoplasma|real-mycoplasma]] sin pared o de [[Chlamydia|real-chlamydia]] con anillo solo al dividirse, [[Rickettsia prowazekii|real-rickettsia]] conserva un saco fino y completo de [[peptidoglicano|peptidoglycan]] que sostiene su silueta.',
        story:
          'Tendido en el periplasma de la [[envoltura rickettsial|real-rick-envelope]], un único manto tejido de [[peptidoglicano|peptidoglycan]] mantiene firme el cocobacilo de ~350 por 1.100 nanómetros para que el empuje polar de la [[cola de actina Sca2|real-rick-comet]] impulse un casco rígido sin deformarlo. Aunque en clínica se prefieren tetraciclinas por penetrar mejor al citosol, Rickettsia conserva intactas sus enzimas Mur y PBP.',
        blueprint: {
          role: 'Sáculo continuo y delgado de [[peptidoglicano|peptidoglycan]] Gram-negativo que preserva la geometría cocobacilar',
          arrivesFrom: 'Precursores UDP-GlcNAc y UDP-MurNAc-pentapéptido exportados como Lípido II por la [[bicapa|phospholipid]] interna',
          inside: 'Monocapa (~3–5 nm) reticulada con meso-DAP en el espacio periplásmico de la [[envoltura|real-rick-envelope]]',
          deliversTo: 'Aporta rigidez axial frente al empuje de [[propulsión por actina|real-rick-comet]] y ancla el [[sistema T4SS|real-rick-envelope]]',
          loop: 'El reciclaje controlado reduce la liberación de fragmentos libres hacia los sensores NOD1 del citosol'
        },
        scientific:
          'Monocapa periplásmica continua de [[peptidoglicano|peptidoglycan]] tipo A1γ con ácido meso-diaminopimélico (~3–5 nm) en [[Rickettsia prowazekii|real-rickettsia]], ensamblada por las enzimas conservadas MurA–G, RodA/PBP2 y FtsI. Suministra la rigidez estructural indispensable para el desplazamiento direccional impulsado por [[actina F polar|real-rick-comet]].',
        from: [
          { nodeId: 'real-rickettsia', label: 'Vía citoplasmática Mur', cargo: 'Unidades de Lípido II' },
          { nodeId: 'phospholipid', label: 'Membrana interna', cargo: 'Exportación al periplasma' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Envoltura tripartita', cargo: 'Soporte mecánico del bacilo' },
          { nodeId: 'real-rick-comet', label: 'Propulsión polar Sca2', cargo: 'Transmisión firme de empuje' }
        ]
      }
    },

    im: {
      en: {
        subtitle: 'The Dual-Power Proto-Mitochondrial Skin',
        simple:
          'Rich in cardiolipin just like a human [[mitochondrion|mitochondrion]], the [[Rickettsia|real-rickettsia]] inner [[membrane|phospholipid]] holds both ATP-stealing Tlc1 pumps and a genuine proton-pumping [[electron transport chain|electron-transport-chain]].',
        story:
          'Look closely at this ~7-nanometer inner [[phospholipid|phospholipid]] bilayer and you see both sides of [[Rickettsia prowazekii|real-rickettsia]] history at once: Tlc1 antiporters import ready-made ATP from the [[host cytosol|real-cell]] early on, while right beside them Complexes I through IV and rotary [[F1F0 ATP synthases|atp-synthase]] mirror the inner cristae of the [[mitochondria|real-rick-mito]] floating nearby.',
        blueprint: {
          role: 'Cardiolipin-rich bioenergetic inner [[phospholipid|phospholipid]] membrane combining Tlc1 import and OXPHOS',
          arrivesFrom: 'Endogenous phosphatidylglycerol/cardiolipin synthesis plus scavenged host lipid precursors',
          inside: '~7 nm bilayer housing [[Tlc1|real-rick-envelope]], [[Complexes I-IV|electron-transport-chain]], [[F1F0 ATPase|atp-synthase]], and Sec/rvh inner rings',
          deliversTo: 'Maintains ~160 mV proton-motive force and supplies cytoplasmic ATP by both import and respiration',
          loop: 'Shifts smoothly from early Tlc1 ATP theft to endogenous oxidative phosphorylation as host ATP drops'
        },
        scientific:
          'Bioenergetic cytoplasmic [[phospholipid|phospholipid]] membrane of [[Rickettsia prowazekii|real-rickettsia]] enriched in cardiolipin and phosphatidylethanolamine, exhibiting direct evolutionary homology to the [[inner mitochondrial membrane|real-rick-mito]]. Integrates 12-TM [[Tlc1|real-rick-envelope]] ATP/ADP translocases alongside a complete aerobic [[respiratory chain|electron-transport-chain]] and [[F1F0 ATP synthase|atp-synthase]].',
        from: [
          { nodeId: 'real-cell', label: 'Host Cytosol', cargo: 'ATP, glutamate & pyruvate' },
          { nodeId: 'electron-transport-chain', label: 'Complexes I-IV', cargo: 'Transmembrane H+ gradient' }
        ],
        to: [
          { nodeId: 'atp-synthase', label: 'Rickettsial F1F0 ATPase', cargo: 'Proton-motive torque' },
          { nodeId: 'real-rick-mito', label: 'Mitochondrial Homology', cargo: 'Conserved OXPHOS architecture' }
        ]
      },
      es: {
        subtitle: 'La membrana interna dual protomitocondrial',
        simple:
          'Rica en cardiolipina igual que una [[mitocondria|mitochondrion]] humana, la [[membrana|phospholipid]] interna de [[Rickettsia|real-rickettsia]] reúne tanto bombas Tlc1 que importan ATP como una auténtica [[cadena de transporte de electrones|electron-transport-chain]].',
        story:
          'En esta bicapa interna de [[fosfolípidos|phospholipid]] de ~7 nanómetros conviven las dos caras de la historia evolutiva de [[Rickettsia prowazekii|real-rickettsia]]: al principio los transportadores Tlc1 absorben ATP listo del [[citosol humano|real-cell]], mientras justo a su lado los Complejos I a IV y las [[ATP sintasas F1F0|atp-synthase]] reproducen la bioenergética de las [[mitocondrias|real-rick-mito]] vecinas.',
        blueprint: {
          role: 'Membrana interna bioenergética rica en cardiolipina ([[fosfolípidos|phospholipid]]) que une importación Tlc1 y respiración',
          arrivesFrom: 'Síntesis propia de fosfatidilglicerol/cardiolipina junto con precursores captados del huésped',
          inside: 'Bicapa de ~7 nm con [[Tlc1|real-rick-envelope]], [[Complejos I–IV|electron-transport-chain]], [[ATPasa F1F0|atp-synthase]] y base de rvh T4SS',
          deliversTo: 'Sostiene ~160 mV de fuerza protón-motriz y abastece ATP tanto por importación como por fosforilación oxidativa',
          loop: 'Compensa la caída tardía del ATP humano pasando del robo inicial por Tlc1 a su propia respiración aerobia'
        },
        scientific:
          'Membrana citoplasmática interna de [[fosfolípidos|phospholipid]] de [[Rickettsia prowazekii|real-rickettsia]] rica en cardiolipina y fosfatidiletanolamina, homóloga evolutiva directa de la [[membrana mitocondrial interna|real-rick-mito]]. Combina translocasas [[Tlc1|real-rick-envelope]] de 12 hélices con una [[cadena respiratoria|electron-transport-chain]] aerobia completa y [[ATP sintasa F₁F₀|atp-synthase]].',
        from: [
          { nodeId: 'real-cell', label: 'Citosol del huésped', cargo: 'ATP, glutamato y piruvato' },
          { nodeId: 'electron-transport-chain', label: 'Complejos I–IV', cargo: 'Bombeo periplásmico de H+' }
        ],
        to: [
          { nodeId: 'atp-synthase', label: 'ATP sintasa F₁F₀ propia', cargo: 'Síntesis rotatoria de ATP' },
          { nodeId: 'real-rick-mito', label: 'Parentesco mitocondrial', cargo: 'Arquitectura OXPHOS común' }
        ]
      }
    },

    tlc1: {
      en: {
        subtitle: 'The Inward ATP/ADP Energy Siphon',
        simple:
          'Working in the exact opposite direction of a [[mitochondrion|mitochondrion]], the [[Tlc1 transporter|real-rick-envelope]] pulls one charged human ATP molecule inward for every spent bacterial ADP it hands back out.',
        story:
          'When [[Rickettsia prowazekii|real-rickettsia]] first breaks free into a fresh [[human cell|real-cell]], cytosolic ATP sits at millimolar abundance thanks to host [[mitochondria|mitochondrion]]. Rather than burning fuel immediately, twelve-helix [[Tlc1|real-rick-envelope]] antiporters in the inner membrane siphon host ATP straight into the bacterium to power [[70S ribosomes|ribosome-70s]], while four paralogous Tlc2-5 carriers import ribonucleotides and NAD+.',
        blueprint: {
          role: 'Inner-membrane obligate 1:1 host-ATP / bacterial-ADP nucleotide translocase ([[Tlc1|real-rick-envelope]])',
          arrivesFrom: 'Host cytosolic ATP synthesized by [[mitochondria|mitochondrion]] diffusing across outer porins',
          inside: 'Twelve-transmembrane-helix RpTlc1 (~57 kDa) rocker-switch antiporter in the inner [[phospholipid|phospholipid]] bilayer',
          deliversTo: 'Imports charged ATP into [[Rickettsia|real-rickettsia]] cytoplasm for [[RNAP|rna-polymerase]] and [[70S ribosomes|ribosome-70s]]',
          loop: 'Paralogous Tlc4/Tlc5 import CTP/UTP/GTP and NAD+ lost during reductive evolution'
        },
        scientific:
          'Archetypal bacterial ATP/ADP translocase RpTlc1 (RP076, 497 aa, ~57 kDa, 12 transmembrane alpha-helices of the non-mitochondrial NTT family) in the [[Rickettsia prowazekii|real-rickettsia]] [[inner membrane|real-rick-envelope]]. Catalyzes obligate 1:1 counter-exchange of incoming host ATP (Km ~75-100 micromolar) for outgoing bacterial ADP; evolutionarily unrelated and opposite in vector polarity to [[mitochondrial|real-rick-mito]] MCF-family ANT.',
        from: [
          { nodeId: 'mitochondrion', label: 'Host Mitochondria', cargo: 'Cytosolic ATP supply' },
          { nodeId: 'real-rickettsia', label: 'Bacterial Cytoplasm', cargo: 'Spent bacterial ADP' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'Rickettsial 70S Ribosomes', cargo: 'Imported ATP energy' },
          { nodeId: 'real-rick-mito', label: 'Polarity Contrast vs ANT', cargo: 'ATP import vs mito export' }
        ]
      },
      es: {
        subtitle: 'El sifón inverso de intercambio ATP/ADP',
        simple:
          'Trabajando justo en sentido contrario al de una [[mitocondria|mitochondrion]], el [[transportador Tlc1|real-rick-envelope]] introduce un ATP humano cargado en la bacteria por cada ADP agotado que devuelve al exterior.',
        story:
          'Recién liberada en una [[célula humana|real-cell]] intacta, [[Rickettsia prowazekii|real-rickettsia]] nada en reservas milimolares de ATP producidas por las [[mitocondrias|mitochondrion]] del huésped. El antiporter [[Tlc1|real-rick-envelope]] de doce hélices aprovecha esa abundancia inicial para absorber ATP directo hacia los [[ribosomas 70S|ribosome-70s]], acompañado por los parálogos Tlc2–5 que importan NTP y NAD+.',
        blueprint: {
          role: 'Translocasa interna obligatoria 1:1 de ATP humano / ADP bacteriano ([[Tlc1|real-rick-envelope]])',
          arrivesFrom: 'ATP citosólico procedente de las [[mitocondrias|mitochondrion]] del huésped filtrado por porinas externas',
          inside: 'Antiporter basculante RpTlc1 (~57 kDa, 12 hélices TM) integrado en la [[bicapa|phospholipid]] interna',
          deliversTo: 'Suministra ATP cargado a la [[ARN polimerasa|rna-polymerase]] y a los [[ribosomas 70S|ribosome-70s]] de [[Rickettsia|real-rickettsia]]',
          loop: 'Sus parálogos Tlc4 y Tlc5 incorporan ribonucleótidos y coenzima NAD+ no sintetizados de novo'
        },
        scientific:
          'Translocasa arquetípica de nucleótidos ATP/ADP RpTlc1 (RP076, 497 aa, ~57 kDa, 12 hélices α transmembrana de la familia NTT) en la [[membrana interna|real-rick-envelope]] de [[Rickettsia prowazekii|real-rickettsia]]. Cataliza el intercambio estricto 1:1 de ATP humano entrante (Km ~75–100 µM) por ADP bacteriano saliente, de origen independiente y polaridad inversa al transportador ANT [[mitocondrial|real-rick-mito]].',
        from: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias humanas', cargo: 'ATP libre en el citosol' },
          { nodeId: 'real-rickettsia', label: 'Citoplasma bacteriano', cargo: 'ADP bacteriano gastado' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S propios', cargo: 'Energía directa importada' },
          { nodeId: 'real-rick-mito', label: 'Contraste frente a ANT', cargo: 'Importación frente a exportación' }
        ]
      }
    },

    etc: {
      en: {
        subtitle: 'The Living Fossil of Mitochondrial Respiration',
        simple:
          'Even though [[Rickettsia|real-rickettsia]] dropped glycolysis, it kept the exact same four-complex [[electron transport chain|electron-transport-chain]] found inside human [[mitochondria|mitochondrion]] to pump protons and burn oxygen.',
        story:
          'Having lost sugar-splitting enzymes, [[Rickettsia prowazekii|real-rickettsia]] imports glutamate and pyruvate from the [[host cytosol|real-cell]] into its Krebs cycle to load NADH. Electrons then cascade down inner-membrane Complexes I, II, III, and IV onto oxygen, pumping protons into the periplasm in a living replay of how ancient Alphaproteobacteria became eukaryotic [[mitochondria|real-rick-mito]].',
        blueprint: {
          role: 'Complete aerobic [[electron transport chain|electron-transport-chain]] (Complexes I-IV) homologous to [[mitochondria|real-rick-mito]]',
          arrivesFrom: 'NADH and FADH2 generated by the bacterial TCA cycle from imported host glutamate/pyruvate plus O2',
          inside: 'NADH dehydrogenase (I), succinate dehydrogenase (II), cytochrome bc1 (III), and aa3 cytochrome c oxidase (IV)',
          deliversTo: 'Pumps H+ into the periplasm to drive rotary [[F1F0 ATP synthases|atp-synthase]] and secondary symporters',
          loop: 'Sustains Rickettsia ATP production late in infection after heavy bacterial growth depletes host ATP'
        },
        scientific:
          'Conserved alphaproteobacterial aerobic [[respiratory chain|electron-transport-chain]] in the [[Rickettsia prowazekii|real-rickettsia]] inner [[phospholipid|phospholipid]] bilayer: multisubunit proton-translocating NADH:ubiquinone oxidoreductase (nuoA-N), succinate dehydrogenase (sdhCDAB), ubiquinol:cytochrome c oxidoreductase (petBC), soluble periplasmic cytochrome c, and cytochrome c oxidase (coxBAC) - phylogenetically sister to [[mitochondrial|real-rick-mito]] OXPHOS complexes.',
        from: [
          { nodeId: 'real-cell', label: 'Imported Host Glutamate', cargo: 'TCA-cycle NADH & FADH2' },
          { nodeId: 'real-rick-envelope', label: 'Diffusing Cytosolic O2', cargo: 'Terminal electron acceptor' }
        ],
        to: [
          { nodeId: 'atp-synthase', label: 'Periplasmic H+ Capacitor', cargo: '~160 mV proton-motive force' },
          { nodeId: 'real-rick-mito', label: 'Endosymbiotic Kinship', cargo: 'Shared Complexes I-IV' }
        ]
      },
      es: {
        subtitle: 'El fósil viviente de la respiración mitocondrial',
        simple:
          'Aunque [[Rickettsia|real-rickettsia]] perdió la glucólisis, conservó exactamente la misma [[cadena de transporte de electrones|electron-transport-chain]] de cuatro complejos que opera en nuestras [[mitocondrias|mitochondrion]].',
        story:
          'Sin enzimas para partir azúcares, [[Rickettsia prowazekii|real-rickettsia]] importa glutamato y piruvato del [[citosol humano|real-cell]] hacia su ciclo de Krebs para cargar NADH. Esos electrones descienden por los Complejos I, II, III y IV hasta el oxígeno bombeando protones al periplasma, mostrando en vivo cómo una antigua alfaproteobacteria dio origen a las [[mitocondrias|real-rick-mito]].',
        blueprint: {
          role: '[[Cadena de transporte de electrones|electron-transport-chain]] aerobia completa (Complejos I–IV) homóloga a la [[mitocondria|real-rick-mito]]',
          arrivesFrom: 'NADH y FADH₂ obtenidos en el ciclo de Krebs a partir de glutamato/piruvato del huésped más O₂',
          inside: 'NADH deshidrogenasa (I), succinato deshidrogenasa (II), citocromo bc₁ (III) y citocromo c oxidasa aa₃ (IV)',
          deliversTo: 'Bombea H+ al periplasma para mover las [[ATP sintasas F1F0|atp-synthase]] y permeasas acopladas',
          loop: 'Mantiene activa la síntesis propia de ATP en fases avanzadas cuando decae el ATP citosólico humano'
        },
        scientific:
          '[[Cadena respiratoria|electron-transport-chain]] aerobia alfaproteobacteriana en la bicapa interna de [[fosfolípidos|phospholipid]] de [[Rickettsia prowazekii|real-rickettsia]]: NADH:ubiquinona oxidorreductasa (nuoA–N), succinato deshidrogenasa (sdhCDAB), ubiquinol:citocromo c oxidorreductasa (petBC), citocromo c periplásmico y citocromo c oxidasa (coxBAC), grupo hermano filogenético directo del sistema OXPHOS [[mitocondrial|real-rick-mito]].',
        from: [
          { nodeId: 'real-cell', label: 'Glutamato importado', cargo: 'NADH y FADH₂ vía Krebs' },
          { nodeId: 'real-rick-envelope', label: 'Oxígeno difundido', cargo: 'Aceptor final de electrones' }
        ],
        to: [
          { nodeId: 'atp-synthase', label: 'Reserva periplásmica H+', cargo: 'Fuerza protón-motriz' },
          { nodeId: 'real-rick-mito', label: 'Vínculo endosimbiótico', cargo: 'Homología Complejos I–IV' }
        ]
      }
    },

    atps: {
      en: {
        subtitle: 'The Ancestral Rotary ATP Turbine',
        simple:
          'Protons pumped into the periplasm by the [[respiratory chain|electron-transport-chain]] spin this rotary [[F1F0 ATP synthase|atp-synthase]] to mint fresh bacterial ATP - the exact same turbine design inherited by [[mitochondria|mitochondrion]].',
        story:
          'Early in infection [[Tlc1|real-rick-envelope]] steals plenty of host ATP, yet once dozens of [[Rickettsia prowazekii|real-rickettsia]] pack a tired [[endothelial cell|real-cell]], host ATP reserves plunge. That is when Rickettsia switches on self-reliance: periplasmic protons rush down the F0 rotor ring to spin the central stalk inside the F1 catalytic crown, pressing ADP and phosphate into fresh ATP.',
        blueprint: {
          role: 'Proton-driven rotary [[F1F0 ATP synthase|atp-synthase]] synthesizing endogenous rickettsial ATP',
          arrivesFrom: 'Periplasmic H+ electrochemical gradient generated by [[Complexes I, III, and IV|electron-transport-chain]] plus ADP + Pi',
          inside: 'Membrane-embedded F0 c-ring + peripheral stator coupled via gamma-epsilon shaft to cytoplasmic alpha3-beta3 F1 head',
          deliversTo: 'Endogenous cytoplasmic ATP powering [[70S ribosomes|ribosome-70s]], [[RNAP|rna-polymerase]], and late replication',
          loop: 'Demonstrates direct structural continuity with cristae-bound [[mitochondrial ATP synthases|real-rick-mito]]'
        },
        scientific:
          'Canonical eight-subunit bacterial rotary [[F1F0 ATP synthase|atp-synthase]] (atpBEFHAGDC) in the inner [[phospholipid|phospholipid]] membrane of [[Rickettsia prowazekii|real-rickettsia]]. Unlike [[Mycoplasma|real-mycoplasma]] (which runs F1F0 in reverse to extrude H+), Rickettsia utilizes the proton-motive force from its [[electron transport chain|electron-transport-chain]] for true oxidative phosphorylation (~3 ATP per turn), sharing ancestry with [[mitochondrial|real-rick-mito]] Complex V.',
        from: [
          { nodeId: 'electron-transport-chain', label: 'Respiratory Chain H+ Flux', cargo: 'Periplasmic proton gradient' },
          { nodeId: 'real-rickettsia', label: 'Bacterial Cytoplasm', cargo: 'Spent ADP + Pi' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: '70S Translation & Growth', cargo: 'Synthesized bacterial ATP' },
          { nodeId: 'real-rick-mito', label: 'Mitochondrial Complex V', cargo: 'Shared rotary turbine lineage' }
        ]
      },
      es: {
        subtitle: 'La turbina rotatoria ancestral de ATP',
        simple:
          'Los protones acumulados en el periplasma por la [[cadena respiratoria|electron-transport-chain]] hacen girar esta [[ATP sintasa F1F0|atp-synthase]] para acuñar ATP propio, con el mismo diseño heredado por nuestras [[mitocondrias|mitochondrion]].',
        story:
          'Al inicio de la infección [[Tlc1|real-rick-envelope]] absorbe abundante ATP ajeno, pero cuando decenas de [[Rickettsia prowazekii|real-rickettsia]] saturan la [[célula endotelial|real-cell]], las reservas humanas caen. Entonces entra en juego su autonomía ancestral: los protones periplásmicos impulsan el anillo F0 y rotan el eje central dentro del cabezal F1 para unir ADP y fosfato en ATP nuevo.',
        blueprint: {
          role: '[[ATP sintasa F1F0|atp-synthase]] rotatoria impulsada por protones productora de ATP endógeno',
          arrivesFrom: 'Gradiente electroquímico periplásmico de H+ creado por los [[Complejos I, III y IV|electron-transport-chain]] más ADP + Pi',
          inside: 'Anillo transmembrana F0 acoplado mediante tallo γ/ε a la corona catalítica citoplasmática α3β3 (F1)',
          deliversTo: 'Suministra ATP propio a los [[ribosomas 70S|ribosome-70s]], la [[ARN polimerasa|rna-polymerase]] y la división tardía',
          loop: 'Evidencia la continuidad evolutiva directa con el Complejo V de las crestas [[mitocondriales|real-rick-mito]]'
        },
        scientific:
          '[[ATP sintasa F₁F₀|atp-synthase]] rotatoria bacteriana completa de ocho subunidades (atpBEFHAGDC) en la bicapa interna de [[fosfolípidos|phospholipid]] de [[Rickettsia prowazekii|real-rickettsia]]. A diferencia de [[Mycoplasma|real-mycoplasma]] (que invierte F₁F₀ gastando ATP), Rickettsia aprovecha el potencial protónico de su [[cadena respiratoria|electron-transport-chain]] para ejecutar verdadera fosforilación oxidativa homóloga a la [[mitocondria|real-rick-mito]].',
        from: [
          { nodeId: 'electron-transport-chain', label: 'Cadena respiratoria', cargo: 'Gradiente periplásmico H+' },
          { nodeId: 'real-rickettsia', label: 'Citoplasma bacteriano', cargo: 'ADP + fosfato inorgánico' }
        ],
        to: [
          { nodeId: 'ribosome-70s', label: 'Traducción 70S y síntesis', cargo: 'ATP bacteriano fresco' },
          { nodeId: 'real-rick-mito', label: 'Complejo V mitocondrial', cargo: 'Turbina ancestral común' }
        ]
      }
    },

    t4ss: {
      en: {
        subtitle: 'The Trans-Envelope Host-Control Conduit',
        simple:
          'Spanning both inner and outer membranes like a multi-ring tower, the rvh [[Type IV Secretion System|real-rick-envelope]] delivers bacterial effector proteins straight into the surrounding [[human cytoplasm|real-cell]].',
        story:
          'Keeping an infected [[endothelial cell|real-cell]] alive and cooperative while dozens of bacteria multiply in its cytoplasm takes constant chemical diplomacy. Powered at its base by three ATPase motors, the Rickettsiales vir homolog [[T4SS channel|real-rick-envelope]] threads effector proteins across all three envelope layers to dampen host apoptosis and remodel intracellular membranes.',
        blueprint: {
          role: 'Pilus-less Rickettsiales vir homolog Type IV Secretion System (rvh T4SS) exporting cytosolic effectors',
          arrivesFrom: 'Assembled across the [[tripartite envelope|real-rick-envelope]] from duplicated RvhB4/B8/B9 and RvhB7/B10/D4 subunits',
          inside: 'Inner-membrane RvhD4/B4/B11 ATPase platform coupled via stalk to a 14-fold RvhB7/B9/B10 outer-membrane core',
          deliversTo: 'Translocates ankyrin-repeat and phospholipase/anti-apoptotic effectors directly into [[host cytosol|real-cell]]',
          loop: 'Lacks an extracellular conjugative pilus (no rvhB5/B2 pilin assembly needed once naked inside host cytosol)'
        },
        scientific:
          'Specialized Rickettsiales vir homolog Type IV Secretion System ([[rvh T4SS|real-rick-envelope]]; 14-fold outer-membrane core complex structural homolog PDB 6GYB) conserved across all [[Rickettsia|real-rickettsia]] species despite extreme genome reduction. Features unique gene duplications (paralogous rvhB4a/b, rvhB8a/b, rvhB9a/b) and lacks canonical extracellular pili, secreting RalF/Risk1/ankyrin effectors directly into [[eukaryotic cytoplasm|real-cell]].',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'Rvh subunits & effectors' },
          { nodeId: 'atp-synthase', label: 'Cytoplasmic ATP Pool', cargo: 'RvhB4/B11/D4 ATPase fuel' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Host Endothelial Cytosol', cargo: 'Anti-apoptotic & lipid effectors' },
          { nodeId: 'real-rick-envelope', label: 'Trans-Envelope Conduit', cargo: 'Direct cytosolic secretion' }
        ]
      },
      es: {
        subtitle: 'El conducto transenvoltura de control celular',
        simple:
          'Atravesando las membranas interna y externa como una torre de anillos, el [[sistema de secreción tipo IV rvh|real-rick-envelope]] inyecta proteínas efectoras directamente al [[citoplasma humano|real-cell]] circundante.',
        story:
          'Mantener con vida a la [[célula endotelial|real-cell]] mientras decenas de bacterias crecen sueltas en su interior exige regulación bioquímica continua. Impulsado en su base por tres motores ATPasa, el [[canal rvh T4SS|real-rick-envelope]] exporta proteínas moduladoras a través de las tres capas del casco para frenar la muerte celular prematura y desactivar defensas.',
        blueprint: {
          role: 'Sistema de secreción tipo IV homólogo vir de Rickettsiales (rvh T4SS) sin pilus externo',
          arrivesFrom: 'Ensamblado a través de la [[envoltura tripartita|real-rick-envelope]] con subunidades RvhB4/B8/B9 duplicadas y RvhD4',
          inside: 'Plataforma ATPasa interna RvhD4/B4/B11 unida a una cámara central externa de simetría 14 (RvhB7/B9/B10)',
          deliversTo: 'Secreta efectores con repeticiones de anquirina y moduladores lipídicos al [[citosol huésped|real-cell]]',
          loop: 'Prescinde de pilus extracelular al encontrarse ya inmerso directamente en el citoplasma de la célula invadida'
        },
        scientific:
          'Sistema de secreción tipo IV especializado rvh ([[rvh T4SS|real-rick-envelope]]; homólogo estructural del complejo central externo PDB 6GYB) conservado universalmente en [[Rickettsia|real-rickettsia]] pese a su reducción genómica. Presenta duplicación característica de subunidades (rvhB4a/b, rvhB8a/b, rvhB9a/b) sin pilus conjugativo externo, translocando efectores directamente al [[citosol eucariota|real-cell]].',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Subunidades Rvh y efectores' },
          { nodeId: 'atp-synthase', label: 'Reserva interna de ATP', cargo: 'Impulso de ATPasas RvhB4/D4' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Citosol endotelial', cargo: 'Freno a la apoptosis celular' },
          { nodeId: 'real-rick-envelope', label: 'Canal transenvoltura', cargo: 'Secreción directa sin vacuola' }
        ]
      }
    },

    pld: {
      en: {
        subtitle: 'The Phagosome-Dissolving Escape Blades',
        simple:
          'Minutes after a blood-vessel [[cell|real-cell]] swallows [[Rickettsia|real-rickettsia]], secreted Phospholipase D and hemolysin TlyC chew open the surrounding membrane bubble so the bacterium escapes before acid [[lysosomes|lysosome]] arrive.',
        story:
          'Whereas [[Chlamydia|real-chlamydia]] remodels its entry bubble into a permanent home, [[Rickettsia prowazekii|real-rickettsia]] breaks out immediately. Exported across the [[bacterial envelope|real-rick-envelope]], dimeric Pld enzymes snip polar headgroups off host vacuolar [[phospholipids|phospholipid]] alongside TlyC pore-formers, shredding the phagosome within fifteen minutes to release Rickettsia naked into nutrient-rich cytoplasm.',
        blueprint: {
          role: 'Secreted phospholipase D (Pld) and TlyC hemolysin effectors executing rapid phagosomal escape',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]] with N-terminal signal peptides and exported on vacuole contact',
          inside: 'Homodimeric HKD-motif phospholipase D (~46 kDa dimer) + TlyC/patatin phospholipases attacking vacuolar [[lipids|phospholipid]]',
          deliversTo: 'Lyses the nascent phagosome (<15-30 min) ahead of [[lysosome|lysosome]] fusion to enter [[host cytosol|real-cell]]',
          loop: 'Deleting pld attenuates virulence and delays escape from phagosomes into the cytoplasm'
        },
        scientific:
          'Vacuolar-escape enzymatic suite of [[Rickettsia prowazekii|real-rickettsia]] led by secreted homodimeric Phospholipase D (Pld, RP819, 2 x ~23 kDa subunits bearing conserved HKD catalytic motifs) acting synergistically with hemolysin C (TlyC, RP740) and patatin-like phospholipase A2 enzymes to hydrolyze phosphatidylcholine in the nascent phagosomal [[phospholipid|phospholipid]] bilayer prior to Rab7/[[lysosome|lysosome]] maturation.',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes & Sec', cargo: 'Pld & TlyC lysin precursors' },
          { nodeId: 'real-rick-envelope', label: 'Outer Envelope Export', cargo: 'Triggered vacuolar release' }
        ],
        to: [
          { nodeId: 'phospholipid', label: 'Phagosomal Bilayer', cargo: 'Cleaved phosphatidylcholine' },
          { nodeId: 'lysosome', label: 'Evaded Lysosomes', cargo: 'Escape into naked cytosol' }
        ]
      },
      es: {
        subtitle: 'Las tijeras enzimáticas de escape vacuolar',
        simple:
          'Minutos después de que una [[célula endotelial|real-cell]] traga a [[Rickettsia|real-rickettsia]], la fosfolipasa D y la hemolisina TlyC disuelven la vesícula de entrada antes de que lleguen los [[lisosomas|lysosome]] ácidos.',
        story:
          'Mientras [[Chlamydia|real-chlamydia]] convierte su vesícula inicial en vivienda permanente, [[Rickettsia prowazekii|real-rickettsia]] opta por la fuga inmediata. Exportadas a través de la [[envoltura bacteriana|real-rick-envelope]], las enzimas diméricas Pld recortan las cabezas polares de los [[fosfolípidos|phospholipid]] vacuolares junto con TlyC, deshaciendo el fagosoma en quince minutos para salir libre al citosol.',
        blueprint: {
          role: 'Efectores secretados fosfolipasa D (Pld) y hemolisina TlyC responsables de la lisis temprana del fagosoma',
          arrivesFrom: 'Traducidos en [[ribosomas 70S|ribosome-70s]] con péptido señal y secretados al contacto con la vacuola',
          inside: 'Homodímero Pld con motivos catalíticos HKD (~46 kDa) + TlyC hidrolizando [[fosfolípidos|phospholipid]] del fagosoma',
          deliversTo: 'Rompe el fagosoma (<15–30 min) antes de la llegada de [[lisosomas|lysosome]] liberando la bacteria al [[citosol|real-cell]]',
          loop: 'La inactivación del gen pld retrasa la salida vacuolar y atenúa drásticamente la virulencia'
        },
        scientific:
          'Conjunto lítico de escape vacuolar de [[Rickettsia prowazekii|real-rickettsia]] encabezado por la fosfolipasa D homodimérica secretada (Pld, RP819, 2 × ~23 kDa con motivos HKD conservados), en sinergia con la hemolisina TlyC (RP740) y fosfolipasas tipo patatina que hidrolizan fosfatidilcolina en la bicapa de [[fosfolípidos|phospholipid]] del fagosoma antes de su fusión con [[lisosomas|lysosome]].',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S y vía Sec', cargo: 'Enzimas Pld y TlyC' },
          { nodeId: 'real-rick-envelope', label: 'Exportación externa', cargo: 'Activación intrafagosómica' }
        ],
        to: [
          { nodeId: 'phospholipid', label: 'Bicapa del fagosoma', cargo: 'Hidrólisis de fosfatidilcolina' },
          { nodeId: 'lysosome', label: 'Lisosomas burlados', cargo: 'Salida libre al citosol' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: 'A Genome Caught Mid-Shrinkage (24% Pseudogene Fossils)',
        simple:
          'Coiled openly in the bacterial center, this 1.11-million-letter [[DNA ring|dna]] preserves ~834 working genes alongside a huge graveyard of broken gene fossils - catching reductive evolution in the act.',
        story:
          'Sequencing [[Rickettsia prowazekii|real-rickettsia]] in 1998 stunned evolutionary biologists: nearly one quarter of its [[circular chromosome|dna]] is non-coding wreckage of inactivated biosynthetic genes no longer needed inside [[human cytoplasm|real-cell]]. What remains active is a focused survival core encoding [[70S ribosomes|ribosome-70s]], [[Tlc1|real-rick-envelope]], [[Sca2|real-rick-comet]], and the exact respiratory genes shared with [[mitochondria|real-rick-mito]].',
        blueprint: {
          role: 'AT-rich 1.11 Mbp circular [[dsDNA|dna]] chromosome documenting ongoing reductive evolution',
          arrivesFrom: 'Semiconservative replication (~8-12 h doubling time) inside naked [[host cytosol|real-cell]]',
          inside: '1,111,523 bp circular [[dsDNA|dna]] (29.0% GC): ~834 intact protein ORFs + ~24% neutral pseudogene/spacer DNA',
          deliversTo: 'Templates [[RNA polymerase|rna-polymerase]] synthesis of OXPHOS, [[Tlc1/T4SS|real-rick-envelope]], and [[70S|ribosome-70s]] components',
          loop: 'Mirrors an early snapshot of the genome-shrinkage path taken by ancestral [[mitochondria|real-rick-mito]]'
        },
        scientific:
          'Single circular [[dsDNA|dna]] chromosome of [[Rickettsia prowazekii|real-rickettsia]] Madrid E / Breinl (1,111,523 bp, 29.0% GC, ~834 protein-coding genes, zero plasmids, and 24% non-coding/pseudogene content - the highest non-coding fraction among classic bacteria, reflecting Muller ratchet mutational decay of amino-acid and nucleotide biosynthetic operons redundant in [[host cytosol|real-cell]]).',
        from: [
          { nodeId: 'real-rick-envelope', label: 'Tlc Nucleotide Import', cargo: 'Salvaged NTP/dNTP precursors' },
          { nodeId: 'real-rickettsia', label: 'Slow Replisome (~8-12 h)', cargo: 'Semiconservative duplication' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'Rickettsial RNAP', cargo: '834 active gene templates' },
          { nodeId: 'real-rick-mito', label: 'Endosymbiotic Evolution', cargo: 'Proto-mitochondrial synteny' }
        ]
      },
      es: {
        subtitle: 'Un genoma sorprendido encogiéndose (24 % de fósiles génicos)',
        simple:
          'Plegado en el centro bacteriano, este [[anillo de ADN|dna]] de 1,11 millones de letras conserva ~834 genes activos junto a un amplio cementerio de pseudogenes inactivos que retrata la evolución reductiva en marcha.',
        story:
          'La secuenciación de [[Rickettsia prowazekii|real-rickettsia]] en 1998 asombró a la biología evolutiva: casi una cuarta parte de su [[cromosoma circular|dna]] corresponde a restos erosionados de antiguas rutas biosintéticas innecesarias dentro del [[citoplasma humano|real-cell]]. Lo que sigue intacto sostiene sus [[ribosomas 70S|ribosome-70s]], [[Tlc1|real-rick-envelope]], [[Sca2|real-rick-comet]] y el núcleo respiratorio compartido con las [[mitocondrias|real-rick-mito]].',
        blueprint: {
          role: 'Cromosoma circular de [[ADNbc|dna]] rico en AT (1,11 Mpb) en plena reducción evolutiva activa',
          arrivesFrom: 'Replicación semiconservativa pausada (~8–12 h por generación) dentro del [[citosol huésped|real-cell]]',
          inside: '1.111.523 pb de [[ADNbc|dna]] (29,0 % GC) con ~834 ORF funcionales y ~24 % de regiones pseudogénicas no codificantes',
          deliversTo: 'Proporciona moldes a la [[ARN polimerasa|rna-polymerase]] para OXPHOS, [[Tlc1/T4SS|real-rick-envelope]] y [[ribosomas 70S|ribosome-70s]]',
          loop: 'Ofrece una instantánea viviente del proceso de pérdida génica que vivieron las antiguas [[mitocondrias|real-rick-mito]]'
        },
        scientific:
          'Cromosoma circular único de [[ADNbc|dna]] de [[Rickettsia prowazekii|real-rickettsia]] (1.111.523 pb, 29,0 % GC, ~834 genes proteicos, sin plásmidos y con un extraordinario 24 % de ADN intergénico y pseudogénico fruto del trinquete de Muller sobre operones biosintéticos redundantes en el [[citosol eucariota|real-cell]]).',
        from: [
          { nodeId: 'real-rick-envelope', label: 'Importación Tlc', cargo: 'Precursores nucleotídicos' },
          { nodeId: 'real-rickettsia', label: 'Replisoma (~8–12 h)', cargo: 'Duplicación cromosómica' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa propia', cargo: '834 genes funcionales' },
          { nodeId: 'real-rick-mito', label: 'Evolución endosimbiótica', cargo: 'Sintenia con la mitocondria' }
        ]
      }
    },

    rnap: {
      en: {
        subtitle: 'The Cytosol-Paced Bacterial Scribe',
        simple:
          'Clamped directly onto the AT-rich [[rickettsial chromosome|dna]], bacterial [[RNA polymerase|rna-polymerase]] transcribes respiratory, secretion, and motility genes at a steady pace tuned to life inside human cells and body lice.',
        story:
          'Because [[Rickettsia prowazekii|real-rickettsia]] cycles between 37-degree human blood vessels and cooler louse gut cells, it retains both a housekeeping RpoD sigma factor and a heat-shock RpoH guide on its [[RNA polymerase|rna-polymerase]]. Powered by ribonucleotides imported through [[Tlc transporters|real-rick-envelope]], emerging [[mRNA strands|rna]] feed straight into waiting [[70S ribosomes|ribosome-70s]].',
        blueprint: {
          role: 'Bacterial multisubunit [[RNA polymerase|rna-polymerase]] transcribing the 1.11 Mbp rickettsial genome',
          arrivesFrom: 'Assembled from RpoA2BCZ subunits plus RpoD (sigma-70) or RpoH (sigma-32) and Tlc-imported NTPs',
          inside: 'Unwinds AT-rich [[chromosomal|dna]] promoters directly in the unenclosed bacterial cytoplasm',
          deliversTo: 'Produces nascent [[mRNA|rna]], unlinked 16S and 23S-5S rRNAs, and 33 tRNAs for [[70S ribosomes|ribosome-70s]]',
          loop: 'Switches transcriptional profiles between cooler arthropod vector gut and warm mammalian endothelium'
        },
        scientific:
          'Canonical bacterial [[RNA polymerase|rna-polymerase]] holoenzyme (alpha2-beta-betaPrime-omega) of [[Rickettsia prowazekii|real-rickettsia]] operating with two sigma subunits (RpoD/RP395 and thermal-stress RpoH/RP265). Transcribes split rRNA genes (dispersed single-copy rrs 16S and rrl-rrf 23S-5S loci characteristic of both Rickettsia and [[mitochondrial|real-rick-mito]] ancestors) alongside ~834 mRNAs.',
        from: [
          { nodeId: 'dna', label: '1.11 Mbp AT-Rich Nucleoid', cargo: 'RpoD & RpoH promoters' },
          { nodeId: 'real-rick-envelope', label: 'Tlc1-5 Transporters', cargo: 'ATP, GTP, CTP & UTP' }
        ],
        to: [
          { nodeId: 'rna', label: 'Nascent mRNA & Split rRNAs', cargo: 'Co-transcriptional ribbons' },
          { nodeId: 'ribosome-70s', label: '70S Ribosomes', cargo: 'Direct cytosolic translation' }
        ]
      },
      es: {
        subtitle: 'El escriba bacteriano adaptado a huésped y vector',
        simple:
          'Unida directamente al [[cromosoma rickettsial|dna]] rico en AT, la [[ARN polimerasa|rna-polymerase]] transcribe genes respiratorios, secretores y motores ajustándose al paso entre vasos humanos e intestino del piojo.',
        story:
          'Como [[Rickettsia prowazekii|real-rickettsia]] alterna entre el endotelio humano a 37 °C y el tubo digestivo más frío del piojo corporal, su [[ARN polimerasa|rna-polymerase]] conserva tanto el factor doméstico RpoD como el factor térmico RpoH. Abastecida con nucleótidos importados por [[Tlc|real-rick-envelope]], entrega [[hebras de ARNm|rna]] directas a los [[ribosomas 70S|ribosome-70s]].',
        blueprint: {
          role: '[[ARN polimerasa|rna-polymerase]] bacteriana multisubunidad lectora del genoma de 1,11 Mpb',
          arrivesFrom: 'Núcleo RpoA2BCZ unido a RpoD (sigma-70) o RpoH (sigma-32) consumiendo NTP importados por Tlc',
          inside: 'Abre promotores ricos en AT sobre el [[ADNbc|dna]] directamente en el citoplasma sin núcleo',
          deliversTo: 'Sintetiza [[ARNm|rna]], loci separados de ARNr 16S y 23S–5S y 33 ARNt para los [[ribosomas 70S|ribosome-70s]]',
          loop: 'Reajusta la expresión génica al saltar entre el artrópodo vector y el endotelio mamífero'
        },
        scientific:
          'Holoenzima [[ARN polimerasa|rna-polymerase]] bacteriana (α2ββ′ω) de [[Rickettsia prowazekii|real-rickettsia]] regulada por dos factores sigma (RpoD/RP395 y RpoH/RP265). Transcribe genes ribosómicos dispersos en copia única (locus 16S separado del par 23S–5S, rasgo evolutivo compartido con linajes próximos a la [[mitocondria|real-rick-mito]]) junto a ~834 ARNm.',
        from: [
          { nodeId: 'dna', label: 'Nucleoide de 1,11 Mpb', cargo: 'Promotores RpoD y RpoH' },
          { nodeId: 'real-rick-envelope', label: 'Sistemas Tlc1–5', cargo: 'ATP, GTP, CTP y UTP' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm y ARNr escindidos', cargo: 'Transcritos nacientes' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S', cargo: 'Traducción acoplada' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: 'The 70S Target That Defeats Epidemic Typhus',
        simple:
          'Floating inside [[Rickettsia prowazekii|real-rickettsia]], bacterial [[70S ribosomes|ribosome-70s]] build every enzyme and surface protein on their own - proving Rickettsia is a living bacterium cured by doxycycline, never a [[virus|viruses]].',
        story:
          'Epidemic typhus once felled entire armies until tetracyclines arrived. Slipping easily across both the [[human cell membrane|real-cell]] and the [[rickettsial envelope|real-rick-envelope]], doxycycline locks onto the 30S subunit of these bacterial [[70S ribosomes|ribosome-70s]] while leaving human 80S cytosolic ribosomes running smoothly - halting OmpB, Pld, and [[Sca2|real-rick-comet]] production in its tracks.',
        blueprint: {
          role: 'Autonomous bacterial [[70S ribosome|ribosome-70s]] machinery translating the ~834-protein rickettsial proteome',
          arrivesFrom: 'Single-copy split 16S and 23S-5S rRNAs plus ~54 ribosomal proteins inside [[Rickettsia|real-rickettsia]]',
          inside: 'Prokaryotic 30S + 50S [[70S ribosomes|ribosome-70s]] powered by [[Tlc1|real-rick-envelope]]-imported or [[F1F0|atp-synthase]]-made ATP',
          deliversTo: 'Synthesizes [[ETC complexes|electron-transport-chain]], Tlc1, rvh T4SS, Pld, OmpB, and polar [[Sca2|real-rick-comet]]',
          loop: 'Life-saving clinical target of doxycycline (30S) and chloramphenicol (50S) in typhus and spotted fevers'
        },
        scientific:
          'Cytoplasmic bacterial [[70S ribosomes|ribosome-70s]] (~2.5 MDa, assembled from single unlinked 16S and 23S-5S rRNA genes constraining growth to ~8-12 h doubling times) in [[Rickettsia prowazekii|real-rickettsia]]. Closely related phylogenetically to ancestral [[mitoribosomes|real-rick-mito]], and selectively inhibited by lipophilic doxycycline binding the 30S 16S-rRNA A-site.',
        from: [
          { nodeId: 'rna', label: 'mRNA, Split rRNA & 33 tRNAs', cargo: 'Genetic templates & adaptors' },
          { nodeId: 'atp-synthase', label: 'Tlc1 & F1F0 Bioenergetics', cargo: 'ATP & GTP translation fuel' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Envelope & T4SS Proteome', cargo: 'OmpB, Pld, Tlc1 & Rvh' },
          { nodeId: 'real-rick-comet', label: 'Polar Motility Engine', cargo: 'Sca2 autotransporter' }
        ]
      },
      es: {
        subtitle: 'La diana 70S que vence al tifus epidémico',
        simple:
          'Dentro de [[Rickettsia prowazekii|real-rickettsia]], sus propios [[ribosomas 70S|ribosome-70s]] fabrican todas sus proteínas: la prueba definitiva de que es una bacteria curable con doxiciclina y jamás un [[virus|viruses]].',
        story:
          'El tifus epidémico diezmó poblaciones enteras hasta la llegada de las tetraciclinas. Al cruzar con facilidad la [[membrana humana|real-cell]] y la [[envoltura rickettsial|real-rick-envelope]], la doxiciclina bloquea la subunidad 30S de estos [[ribosomas 70S|ribosome-70s]] respetando los ribosomas 80S del citosol humano, deteniendo en seco la producción de OmpB, Pld y [[Sca2|real-rick-comet]].',
        blueprint: {
          role: 'Maquinaria autónoma de [[ribosomas 70S|ribosome-70s]] encargada de traducir las ~834 proteínas rickettsiales',
          arrivesFrom: 'Genes únicos separados de ARNr 16S y 23S–5S más ~54 proteínas ribosómicas en [[Rickettsia|real-rickettsia]]',
          inside: '[[Ribosomas 70S|ribosome-70s]] procariotas (30S + 50S) alimentados por ATP de [[Tlc1|real-rick-envelope]] o [[ATPasa F1F0|atp-synthase]]',
          deliversTo: 'Fabrica complejos de la [[CTE|electron-transport-chain]], Tlc1, rvh T4SS, Pld, OmpB y el motor polar [[Sca2|real-rick-comet]]',
          loop: 'Diana farmacológica decisiva de doxiciclina (30S) y cloranfenicol (50S) frente al tifus'
        },
        scientific:
          '[[Ribosomas 70S|ribosome-70s]] bacterianos citoplasmáticos (~2,5 MDa, sostenidos por una única copia génica de ARNr 16S y 23S–5S que marca su pausada duplicación de ~8–12 h) en [[Rickettsia prowazekii|real-rickettsia]]. Emparentados evolutivamente con el ancestro del [[mitorribosoma|real-rick-mito]] e inhibidos selectivamente por doxiciclina lipofílica en el sitio A de 16S.',
        from: [
          { nodeId: 'rna', label: 'ARNm, ARNr y 33 ARNt', cargo: 'Moldes y adaptadores' },
          { nodeId: 'atp-synthase', label: 'Suministro Tlc1 y F₁F₀', cargo: 'ATP y GTP para elongación' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Proteoma de envoltura', cargo: 'OmpB, Pld, Tlc1 y Rvh' },
          { nodeId: 'real-rick-comet', label: 'Motor polar de actina', cargo: 'Autotransportador Sca2' }
        ]
      }
    },

    sca2: {
      en: {
        subtitle: 'The Formin-Mimicking Polar Rocket Nozzle',
        simple:
          'Anchored at one end of [[Rickettsia|real-rickettsia]], the crescent-shaped [[Sca2 protein|real-rick-comet]] mimics human formin builders to snap host actin bricks directly into straight propulsion cables.',
        story:
          'Most actin-riding bacteria borrow the host Arp2/3 complex to weave bushy branched webs, yet rickettsial [[Sca2|real-rick-comet]] reinvented a completely different human tool by convergent evolution. Projecting from its outer-membrane beta-barrel at one bacterial pole, its helical crescent grabs profilin-actin complexes out of the [[host cytosol|real-cell]] and feeds barbed filament ends continuously.',
        blueprint: {
          role: 'Polar autotransporter molecular mimic of eukaryotic formins nucleating unbranched [[actin tails|real-rick-comet]]',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]], secreted via Sec, and anchored at one pole of the [[outer membrane|real-rick-envelope]]',
          inside: '~150 kDa surface passenger domain with crescent alpha-helical repeats (PDB 4J4M), WH2 motifs, and proline-rich tracts',
          deliversTo: 'Processively nucleates and elongates barbed ends of parallel host [[F-actin filaments|actin-filament]]',
          loop: 'Attenuated R. prowazekii Madrid E carries a frameshift mutation in sca2, whereas virulent strains retain intact ORFs'
        },
        scientific:
          'Polar outer-membrane autotransporter Surface Cell Antigen 2 ([[Sca2|real-rick-comet]], ~1,800 aa; N-terminal repeat domain crystal structure PDB 4J4M at 2.2 Angstroms). Adopts a novel all-alpha-helical crescent fold unrelated in sequence to eukaryotic FH2 domains yet functionally mimicking dimeric formins: recruits profilin-ATP-G-actin via central proline-rich FH1-like loops to processively elongate unbranched [[F-actin|actin-filament]] barbed ends while excluding capping protein.',
        from: [
          { nodeId: 'ribosome-70s', label: '70S Ribosomes & Sec', cargo: 'Polar Sca2 autotransporter' },
          { nodeId: 'real-cell', label: 'Host Cytosol', cargo: 'Profilin-bound ATP-G-actin' }
        ],
        to: [
          { nodeId: 'actin-filament', label: 'Barbed F-Actin Ends', cargo: 'Processive monomer addition' },
          { nodeId: 'real-rick-comet', label: 'Parallel Comet Tail', cargo: 'Polar propulsion thrust' }
        ]
      },
      es: {
        subtitle: 'La tobera polar que imita a las forminas humanas',
        simple:
          'Clavada en un polo de [[Rickettsia|real-rickettsia]], la proteína [[Sca2|real-rick-comet]] en forma de media luna imita a las forminas humanas para engarzar ladrillos de actina en cables rectos de empuje.',
        story:
          'Otras bacterias intracelulares reclutan el complejo humano Arp2/3 para tejer mallas ramificadas, pero [[Sca2|real-rick-comet]] reinventó por evolución convergente una herramienta distinta. Asomando desde su barril externo en un único polo, su arco helicoidal atrapa complejos profilina-actina del [[citosol humano|real-cell]] y alimenta sin pausa el extremo creciente de cada filamento.',
        blueprint: {
          role: 'Autotransportador polar mimético funcional de forminas eucariotas que nuclea [[colas rectas de actina|real-rick-comet]]',
          arrivesFrom: 'Traducido en [[ribosomas 70S|ribosome-70s]], secretado por Sec y concentrado en un polo de la [[membrana externa|real-rick-envelope]]',
          inside: 'Dominio pasajero (~150 kDa) con plegamiento α-helicoidal en media luna (PDB 4J4M), motivos WH2 y lazos de prolina',
          deliversTo: 'Nuclea y elonga procesivamente los extremos barbados de [[filamentos de actina F|actin-filament]] paralelos',
          loop: 'La cepa vacunal atenuada Madrid E de R. prowazekii porta una mutación truncante en sca2 frente a cepas virulentas'
        },
        scientific:
          'Autotransportador polar de membrana externa Antígeno Celular Superficial 2 ([[Sca2|real-rick-comet]], ~1.800 aa; estructura cristalina del dominio repetido N-terminal PDB 4J4M a 2,2 Å). Presenta un plegamiento exclusivamente α-helicoidal en media luna sin homología de secuencia con dominios FH2 eucariotas pero funcionalmente equivalente a una formina: une profilina–actina G-ATP mediante tramos ricos en prolina y elonga extremos barbados de [[actina F|actin-filament]] excluyendo proteínas bloqueadoras.',
        from: [
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S y Sec', cargo: 'Autotransportador Sca2' },
          { nodeId: 'real-cell', label: 'Citosol humano', cargo: 'Complejos profilina–actina G' }
        ],
        to: [
          { nodeId: 'actin-filament', label: 'Extremos barbados', cargo: 'Adición continua de monómeros' },
          { nodeId: 'real-rick-comet', label: 'Cola cometa paralela', cargo: 'Impulso direccional' }
        ]
      }
    },

    comet: {
      en: {
        subtitle: 'The Unbranched F-Actin Jet Trail',
        simple:
          'Streaming behind one pole of [[Rickettsia|real-rickettsia]], long parallel bundles of hijacked human [[actin filaments|actin-filament]] push the bacterium through thick cytoplasm at up to twenty micrometers per minute.',
        story:
          'Each new actin subunit snapped onto the growing barbed end right against [[polar Sca2|real-rick-comet]] adds 2.7 nanometers of forward push while the trailing filament bundle stays anchored in viscous [[host cytoplasm|real-cell]]. Bundled stiffly side by side by host fascin and fimbrin cross-linkers, this straight [[actin comet tail|actin-filament]] drives Rickettsia clean across the cell toward its neighbor.',
        blueprint: {
          role: 'Parallel unbranched host [[F-actin|actin-filament]] bundle propelling intracellular and intercellular spread',
          arrivesFrom: 'Continuous barbed-end polymerization by polar [[Sca2|real-rick-comet]] and bundling by host fascin/plastin',
          inside: 'Micrometer-long parallel polar [[actin filaments|actin-filament]] lacking Arp2/3 70-degree branches',
          deliversTo: 'Generates ~10-20 micrometers/min axial thrust pushing [[Rickettsia|real-rickettsia]] into adjacent [[host cells|real-cell]]',
          loop: 'Pointed filament ends behind the tail depolymerize via host cofilin, recycling G-actin back to the cytosol'
        },
        scientific:
          'Unbranched polar [[F-actin comet tail|real-rick-comet]] (~2-10 micrometers length) composed of long parallel double-helical host [[actin filaments|actin-filament]] cross-linked by host T-plastin (fimbrin) and fascin. Polymerization ratcheting at barbed ends tethered to [[Sca2|real-rick-comet]] (~2.75 nm axial step per incorporated subunit) propels cytosolic rickettsiae at ~10-25 micrometers/min prior to cofilin-mediated pointed-end turnover.',
        from: [
          { nodeId: 'real-rick-comet', label: 'Polar Sca2 Nucleator', cargo: 'Barbed-end elongation' },
          { nodeId: 'real-cell', label: 'Host Fascin & Fimbrin', cargo: 'Parallel bundle cross-links' }
        ],
        to: [
          { nodeId: 'real-rickettsia', label: 'Coccobacillus Pole', cargo: '10-20 um/min forward thrust' },
          { nodeId: 'actin-filament', label: 'Cofilin Tail Turnover', cargo: 'Recycled G-actin monomers' }
        ]
      },
      es: {
        subtitle: 'La estela propulsora de haces rectos de actina F',
        simple:
          'Extendiéndose detrás de un polo de [[Rickettsia|real-rickettsia]], largos haces paralelos de [[filamentos de actina|actin-filament]] humanos empujan a la bacteria por el denso citoplasma hasta veinte micrómetros por minuto.',
        story:
          'Cada nuevo monómero insertado contra el motor polar [[Sca2|real-rick-comet]] suma 2,7 nanómetros de avance mientras el haz trasero queda firme en el viscoso [[citosol humano|real-cell]]. Entrelazada lateralmente por proteínas humanas como fascina y fimbrina, esta recta [[cola de actina|actin-filament]] lanza a Rickettsia de punta a punta de la célula rumbo a su vecina.',
        blueprint: {
          role: 'Haz paralelo no ramificado de [[actina F|actin-filament]] del huésped que impulsa el avance intracelular',
          arrivesFrom: 'Polimerización continua en el extremo barbado por [[Sca2|real-rick-comet]] y empaquetamiento por fascina/fimbrina',
          inside: '[[Filamentos de actina|actin-filament]] largos y paralelos de varios micrómetros sin ramificaciones Arp2/3',
          deliversTo: 'Genera empuje axial (~10–20 µm/min) proyectando a [[Rickettsia|real-rickettsia]] hacia [[células contiguas|real-cell]]',
          loop: 'La cofilina humana desmonta el extremo trasero de la estela devolviendo actina G libre al citosol'
        },
        scientific:
          '[[Cola cometa polar no ramificada|real-rick-comet]] (~2–10 µm de longitud) formada por largos [[filamentos de actina F|actin-filament]] paralelos entrecruzados por plastina-T (fimbrina) y fascina del huésped. El trinquete de polimerización en el extremo barbado unido a [[Sca2|real-rick-comet]] (~2,75 nm de avance por subunidad) impulsa el cocobacilo a ~10–25 µm/min antes del reciclaje posterior por cofilina.',
        from: [
          { nodeId: 'real-rick-comet', label: 'Nucleador polar Sca2', cargo: 'Crecimiento en extremo barbado' },
          { nodeId: 'real-cell', label: 'Fascina y fimbrina humanas', cargo: 'Empaquetamiento paralelo' }
        ],
        to: [
          { nodeId: 'real-rickettsia', label: 'Polo trasero del bacilo', cargo: 'Empuje de 10–20 µm/min' },
          { nodeId: 'actin-filament', label: 'Reciclaje por cofilina', cargo: 'Liberación de actina G' }
        ]
      }
    },

    g_actin: {
      en: {
        subtitle: 'Stolen Host Cytoskeleton Bricks',
        simple:
          'Floating abundantly throughout [[human cytoplasm|real-cell]], ATP-charged G-actin monomers bound to profilin get funneled straight into [[Sca2|real-rick-comet]] to build the rickettsial rocket tail.',
        story:
          'Endothelial [[cells|real-cell]] keep tens of micromoles of unpolymerized globular actin bound to profilin ready to repair stress fibers at a moment notice. Proline-rich loops on [[polar Sca2|real-rick-comet]] snatch those exact profilin-actin complexes out of the surrounding fluid and snap the ATP-actin bricks onto the growing [[comet tail|actin-filament]] without spending a single bacterial protein.',
        blueprint: {
          role: 'Host cytosolic profilin-ATP-G-actin monomer pool hijacked for polar [[comet propulsion|real-rick-comet]]',
          arrivesFrom: 'Recycled from host cytoskeleton and trailing comet tails by cofilin and recharged with host ATP',
          inside: '42 kDa globular ATP-actin monomers complexed 1:1 with 15 kDa host profilin diffusing to the bacterial pole',
          deliversTo: 'Captured by [[Sca2|real-rick-comet]] proline tracts and incorporated into barbed [[F-actin|actin-filament]] ends',
          loop: 'Hydrolyzes bound ATP to ADP-Pi inside the aged filament to mark the tail rear for cofilin recycling'
        },
        scientific:
          'Cytosolic pool (~20-50 micromolar) of eukaryotic 42 kDa ATP-bound globular actin complexed 1:1 with profilin-1 inside [[endothelial host cells|real-cell]]. Recruited with high flux by central poly-L-proline motifs of rickettsial [[Sca2|real-rick-comet]] (PDB 4J4M) for barbed-end delivery onto [[F-actin|actin-filament]], releasing free profilin back into host cytoplasm.',
        from: [
          { nodeId: 'real-cell', label: 'Host Cytosolic Pool', cargo: '42 kDa G-actin + profilin' },
          { nodeId: 'mitochondrion', label: 'Host ATP Recharge', cargo: 'Nucleotide exchange to ATP-actin' }
        ],
        to: [
          { nodeId: 'real-rick-comet', label: 'Sca2 Proline Loops', cargo: 'High-speed polar capture' },
          { nodeId: 'actin-filament', label: 'Growing Comet Tail', cargo: 'Polymerized F-actin subunits' }
        ]
      },
      es: {
        subtitle: 'Ladrillos del citoesqueleto humano reclutados al polo',
        simple:
          'Abundantes por todo el [[citoplasma humano|real-cell]], los monómeros globulares de actina cargados con ATP y unidos a profilina son captados por [[Sca2|real-rick-comet]] para alargar la cola propulsora.',
        story:
          'Las [[células endoteliales|real-cell]] mantienen una gran reserva de actina globular unida a profilina lista para remodelar su forma en segundos. Los bucles ricos en prolina de [[Sca2|real-rick-comet]] pescan esos complejos directamente del fluido vecino y engarzan cada ladrillo de actina-ATP en la [[estela de filamentos|actin-filament]] sin gastar subunidades bacterianas.',
        blueprint: {
          role: 'Reserva citosólica humana de monómeros profilina–actina G-ATP desviada hacia la [[propulsión polar|real-rick-comet]]',
          arrivesFrom: 'Reciclada del citoesqueleto celular y de la propia cola por cofilina y recargada con ATP humano',
          inside: 'Monómeros globulares de actina-ATP (42 kDa) unidos 1:1 a profilina humana (15 kDa) cerca del polo bacteriano',
          deliversTo: 'Capturados por los tractos de prolina de [[Sca2|real-rick-comet]] e integrados en [[filamentos de actina F|actin-filament]]',
          loop: 'La hidrólisis posterior del ATP unido dentro del filamento señala el tramo viejo para su reciclaje'
        },
        scientific:
          'Reserva citosólica (~20–50 µM) de actina globular eucariota de 42 kDa unida a ATP y a profilina-1 dentro de la [[célula endotelial|real-cell]]. Reclutada a alta velocidad por los motivos de poliprolina de [[Sca2|real-rick-comet]] (PDB 4J4M) para alimentar el extremo barbado de [[actina F|actin-filament]], liberando la profilina de vuelta al citosol.',
        from: [
          { nodeId: 'real-cell', label: 'Reserva del citosol humano', cargo: 'Actina G (42 kDa) + profilina' },
          { nodeId: 'mitochondrion', label: 'Recarga con ATP humano', cargo: 'Cambio ADP por ATP en actina' }
        ],
        to: [
          { nodeId: 'real-rick-comet', label: 'Lazos de prolina Sca2', cargo: 'Captura polar selectiva' },
          { nodeId: 'actin-filament', label: 'Estela en crecimiento', cargo: 'Incorporación de subunidades' }
        ]
      }
    },

    host_mito: {
      en: {
        subtitle: 'The Domesticated Cousin Across the Cytosol',
        simple:
          'Floating right next to [[Rickettsia prowazekii|real-rickettsia]] in the same cytoplasm sits a human [[mitochondrion|mitochondrion]] - an ancient Alphaproteobacterial cousin that gives ATP to the cell while Rickettsia steals it.',
        story:
          'Few sights in biology tell a deeper evolutionary story than seeing [[Rickettsia|real-rickettsia]] drift past a host [[mitochondrion|real-rick-mito]]. Both carry double membranes, cardiolipin lipids, circular [[DNA|dna]], bacterial-type ribosomes, and matching [[Complexes I-IV|electron-transport-chain]] plus [[F1F0 ATP synthases|atp-synthase]] - yet mitochondria export ATP outward via ANT carriers to power the [[host cell|real-cell]], whereas Rickettsia flips that bargain via [[Tlc1|real-rick-envelope]] to siphon that very ATP inward.',
        blueprint: {
          role: 'Endosymbiotic alphaproteobacterial organelle supplying host ATP and illustrating [[rickettsial ancestry|real-rick-mito]]',
          arrivesFrom: 'Ancient (~1.8-2.0 Ga) alphaproteobacterial endosymbiosis integrated into [[eukaryotic cells|real-cell]]',
          inside: 'Outer porin membrane + cristae-folded inner membrane with [[Complexes I-IV|electron-transport-chain]], [[F1F0 ATPase|atp-synthase]], and 16.6 kbp mtDNA',
          deliversTo: 'Exports ATP via AAC/ANT into [[host cytosol|real-cell]] - inadvertently feeding rickettsial [[Tlc1|real-rick-envelope]]',
          loop: 'Direct phylogenetic and bioenergetic foil contrasting mutualistic ATP export vs parasitic ATP import'
        },
        scientific:
          'Adjacent host [[mitochondrion|mitochondrion]] (~0.5-1.0 micrometers diameter; 16,569 bp circular mtDNA, 55S mitoribosomes, cristae [[Complexes I-IV|electron-transport-chain]] and [[F1F0 ATP synthase|atp-synthase]]) sharing deep Alphaproteobacterial synteny with [[Rickettsia prowazekii|real-rick-mito]]. Exports matrix ATP4- in exchange for cytosolic ADP3- via MCF-family SLC25A4 (ANT1), sustaining the cytosolic ATP pool parasitized by rickettsial [[RpTlc1|real-rick-envelope]].',
        from: [
          { nodeId: 'real-cell', label: 'Host Pyruvate & O2', cargo: 'Matrix TCA & OXPHOS fuel' },
          { nodeId: 'electron-transport-chain', label: 'Cristae Complexes I-IV', cargo: 'Proton-motive force' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'Cytosolic ATP Pool -> Tlc1', cargo: 'Siphoned by Rickettsia' },
          { nodeId: 'real-rick-mito', label: 'Evolutionary Comparison', cargo: 'Shared Alphaproteobacterial root' }
        ]
      },
      es: {
        subtitle: 'La prima domesticada al otro lado del citosol',
        simple:
          'Flotando justo al lado de [[Rickettsia prowazekii|real-rickettsia]] en el mismo citoplasma aparece una [[mitocondria|mitochondrion]] humana: una antigua prima alfaproteobacteriana que entrega ATP a la célula mientras Rickettsia lo sustrae.',
        story:
          'Pocas escenas biológicas resumen tanta evolución como ver a [[Rickettsia|real-rickettsia]] cruzar frente a una [[mitocondria|real-rick-mito]] del huésped. Ambas poseen doble membrana con cardiolipina, [[ADN|dna]] circular, ribosomas de linaje bacteriano y los mismos [[Complejos I–IV|electron-transport-chain]] con [[ATP sintasas F1F0|atp-synthase]]; pero la mitocondria exporta ATP mediante ANT para sostener a la [[célula humana|real-cell]], mientras Rickettsia invierte el trato con [[Tlc1|real-rick-envelope]] para absorber ese mismo ATP.',
        blueprint: {
          role: 'Orgánulo endosimbiótico alfaproteobacteriano productor del ATP celular y espejo evolutivo de [[Rickettsia|real-rick-mito]]',
          arrivesFrom: 'Endosimbiosis ancestral (~1.800–2.000 Ma) integrada permanentemente en el linaje [[eucariota|real-cell]]',
          inside: 'Membrana externa con porinas y crestas internas con [[Complejos I–IV|electron-transport-chain]], [[ATPasa F1F0|atp-synthase]] y ADNmt (16,6 kpb)',
          deliversTo: 'Exporta ATP vía AAC/ANT al [[citosol humano|real-cell]], abasteciendo de forma indirecta a [[Tlc1|real-rick-envelope]]',
          loop: 'Contraste funcional directo entre exportación mutualista de ATP (ANT) e importación parasitaria (Tlc1)'
        },
        scientific:
          '[[Mitocondria|mitochondrion]] del huésped (~0,5–1,0 µm de diámetro; ADNmt circular de 16.569 pb, mitorribosomas 55S, [[Complejos I–IV|electron-transport-chain]] en crestas y [[ATP sintasa F₁F₀|atp-synthase]]) unida por profunda sintenia alfaproteobacteriana con [[Rickettsia prowazekii|real-rick-mito]]. Exporta ATP4- matricial a cambio de ADP3- citosólico mediante SLC25A4 (ANT), sosteniendo el ATP citosólico que parasita [[RpTlc1|real-rick-envelope]].',
        from: [
          { nodeId: 'real-cell', label: 'Piruvato y O₂ celulares', cargo: 'Combustible matricial' },
          { nodeId: 'electron-transport-chain', label: 'Crestas Complejos I–IV', cargo: 'Potencial protónico' }
        ],
        to: [
          { nodeId: 'real-rick-envelope', label: 'ATP citosólico -> Tlc1', cargo: 'Captado por Rickettsia' },
          { nodeId: 'real-rick-mito', label: 'Comparación evolutiva', cargo: 'Ancestro común alfaproteobacteriano' }
        ]
      }
    },

    host_mem: {
      en: {
        subtitle: 'The Stealth Cell-to-Cell Tunnel Border',
        simple:
          'Driven by its [[F-actin comet tail|real-rick-comet]], [[Rickettsia|real-rickettsia]] rams the [[host cell membrane|phospholipid]] outward into a long finger that pokes straight into the neighboring blood-vessel cell without ever touching open blood.',
        story:
          'Stepping outside into bloodstream plasma would expose [[Rickettsia|real-rickettsia]] to complement proteins and neutralizing antibodies. Instead, comet propulsion pushes a tight [[phospholipid|phospholipid]] finger deep into the next [[endothelial cell|real-cell]], which engulfs the tip in a double-membrane bubble that [[Pld and TlyC blades|real-rick-envelope]] promptly slice open to restart the cytosolic cycle.',
        blueprint: {
          role: 'Host [[plasma-membrane|phospholipid]] cell-to-cell protrusion tunnel enabling antibody-shielded spread',
          arrivesFrom: 'Mechanical invagination of donor and recipient [[endothelial membranes|real-cell]] by [[F-actin comet|real-rick-comet]] thrust',
          inside: 'Apposed donor and recipient [[phospholipid|phospholipid]] bilayers enclosing the advancing coccobacillus tip',
          deliversTo: 'Engulfed into a secondary two-membrane vacuole in the neighbor cell and lysed by [[Pld/TlyC|real-rick-envelope]]',
          loop: 'Spreads focal endothelial damage from cell to cell across capillary walls while evading humoral immunity'
        },
        scientific:
          'Intercellular [[endothelial|real-cell]] junctional [[phospholipid|phospholipid]] bilayer deformed by [[Sca2-nucleated F-actin comet|real-rick-comet]] propulsion (assisted by secreted effector Sca4 reducing host vinculin cortical tension at cell junctions) into a ~0.4-micrometer-wide filopodial protrusion. Engulfment by the adjacent cell yields a double-membrane vacuole rapidly lysed by [[Pld and TlyC|real-rick-envelope]].',
        from: [
          { nodeId: 'real-rick-comet', label: 'F-Actin Comet Thrust', cargo: 'Membrane-deforming force' },
          { nodeId: 'phospholipid', label: 'Donor/Neighbor Bilayers', cargo: 'Sca4-relaxed cell junction' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Neighbor Endothelial Cell', cargo: 'Double-membrane engulfment' },
          { nodeId: 'real-rick-envelope', label: 'Pld/TlyC Lysis', cargo: 'Escape into neighbor cytosol' }
        ]
      },
      es: {
        subtitle: 'El puente membranoso furtivo entre dos células',
        simple:
          'Impulsada por su [[cola de actina F|real-rick-comet]], [[Rickettsia|real-rickettsia]] empuja la [[membrana celular|phospholipid]] formando un dedo largo que penetra en la célula vecina del vaso sanguíneo sin tocar jamás la sangre.',
        story:
          'Asomarse libre al plasma sanguíneo dejaría a [[Rickettsia|real-rickettsia]] a merced del complemento y los anticuerpos. Por eso el empuje de su cola de actina hunde una estrecha protrusión de [[fosfolípidos|phospholipid]] dentro de la [[célula endotelial|real-cell]] contigua; cuando la vecina engulle esa punta en una vesícula doble, [[Pld y TlyC|real-rick-envelope]] cortan ambas capas e inician una nueva conquista.',
        blueprint: {
          role: 'Protrusión intercelular de [[membrana plasmática|phospholipid]] que permite propagación oculta a anticuerpos',
          arrivesFrom: 'Deformación mecánica de las [[membranas endoteliales|real-cell]] donante y receptora por el empuje del [[cometa|real-rick-comet]]',
          inside: 'Doble frontera de bicapas de [[fosfolípidos|phospholipid]] envolviendo el polo delantero del cocobacilo',
          deliversTo: 'Forma una vacuola secundaria de doble membrana en la célula vecina, lisada enseguida por [[Pld/TlyC|real-rick-envelope]]',
          loop: 'Propaga la infección célula a célula a lo largo del endotelio capilar esquivando la inmunidad humoral'
        },
        scientific:
          'Frontera intercelular de [[fosfolípidos|phospholipid]] entre [[células endoteliales|real-cell]] deformada por la propulsión de la [[cola de actina Sca2|real-rick-comet]] (facilitada por el efector secretado Sca4, que relaja la tensión de vinculina en las uniones adherentes) en una protrusión filopodial de ~0,4 µm. Su endocitosis por la célula adyacente genera una vacuola doble lisada por [[Pld y TlyC|real-rick-envelope]].',
        from: [
          { nodeId: 'real-rick-comet', label: 'Empuje del cometa de actina', cargo: 'Fuerza de protrusión' },
          { nodeId: 'phospholipid', label: 'Bicapas donante y vecina', cargo: 'Unión relajada por Sca4' }
        ],
        to: [
          { nodeId: 'real-cell', label: 'Célula endotelial vecina', cargo: 'Captura en vacuola doble' },
          { nodeId: 'real-rick-envelope', label: 'Lisis por Pld y TlyC', cargo: 'Liberación al nuevo citosol' }
        ]
      }
    }
  }
};
