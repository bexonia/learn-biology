import type { BilingualNodeLens, BilingualPartLens } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 18 Phase 17 Specialized Human Cells & Cell Differentiation Explorer nodes
 * and all 36 Standalone Realistic Part Lenses (`neuron_realistic.html` [18] +
 * `muscle_realistic.html` [18]) in `EN` & `ES`.
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere strictly to `AGENTS.md` Rule 8.
 */
export const SPECIALIZED_CELLS_NODE_LENSES: Record<string, BilingualNodeLens> = {
  'specialized-cells-overview': {
    en: {
      simple:
        'Every nucleated human cell inherits the exact same diploid [[DNA|dna]] sequence, yet [[epigenetic marks|real-epigenetics]] switch on distinct gene subsets so identical genomes build a [[neuron|real-neuron]], a [[muscle fiber|real-muscle]], a [[red blood cell|real-erythrocyte]], and a [[gut enterocyte|real-enterocyte]].',
      story:
        'Multicellular human life solves division of labor without rewriting its genome. Surrounding one shared 6.4-gigabasepair human genome hub, four specialized [[eukaryotic cells|real-cell]] turn different chapters of the same 46 chromosomes into radically different shapes and jobs. [[H3K27ac histone acetylation|real-epigenetics]] opens ion-channel and synaptic genes in the [[multipolar neuron|real-neuron]], contractile myosin and actin genes in the [[skeletal muscle fiber|real-muscle]], globin genes before nuclear ejection in the [[red blood cell|real-erythrocyte]], and brush-border plus [[Claudin-15|real-claudin15]] barrier genes in the [[gut enterocyte|real-enterocyte]], while H3K27me3 keeps every competing toolkit compacted and silent.',
      blueprint:
        'Role: Comparative 4-cell human differentiation stage uniting identical diploid genome inheritance with lineage-specific morphology and physiology; Inputs: Shared 6.4 Gbp human [[DNA|dna]] (46 chromosomes, ~20,000 coding genes), [[epigenetic chromatin marks|real-epigenetics]] (H3K27ac vs H3K27me3), and cellular [[bioenergetics|real-bioenergetics]]; Inside: Four interactive lineage pedestals ([[Multipolar Neuron|real-neuron]], [[Skeletal Muscle Fiber|real-muscle]], [[Erythrocyte|real-erythrocyte]], [[Polarized Enterocyte|real-enterocyte]]) linked to live chromatin bookmark switching; Outputs: Coordinated electrical signaling, mechanical force, O2 transport, and sealed nutrient absorption feeding systemic [[immune defense|real-immune]] and organismal homeostasis.',
      scientific:
        'Comparative multicellular differentiation synthesis spanning >100 um tissue lineages down to 0.1 nm [[atomic currencies|real-spec-atoms]] across four canonical human cell types derived from one diploid 6.4 Gbp [[DNA|dna]] genome. Contrasts differential transcriptional activation via [[nucleosome|real-epigenetics]] (PDB 1AOI) H3K27ac euchromatin vs Polycomb H3K27me3 heterochromatin across: [[multipolar neurons|real-neuron]] (SCN9A/SYT1; Nav1.7 PDB 6J8I, Kv1.2 PDB 2R9R, SNARE PDB 1SFC), [[skeletal myofibers|real-muscle]] (MYH1/ACTA1/RYR1; Myosin-II PDB 2MYS, Actin-Tropomyosin-Troponin PDB 6KN8, SERCA1a PDB 1SU4), anucleate [[erythrocytes|real-erythrocyte]] (HBA1/HBB; Hemoglobin PDB 1GZX), and polarized [[enterocytes|real-enterocyte]] (SLC5A1/CLDN15; [[Claudin-15|real-claudin15]] PDB 4P79).'
    },
    es: {
      simple:
        'Cada célula humana con núcleo hereda exactamente la misma secuencia diploide de [[ADN|dna]], pero las [[marcas epigenéticas|real-epigenetics]] activan subconjuntos distintos de genes para construir una [[neurona|real-neuron]], una [[fibra muscular|real-muscle]], un [[glóbulo rojo|real-erythrocyte]] y un [[enterocito intestinal|real-enterocyte]].',
      story:
        'La vida humana multicelular reparte funciones sin reescribir su genoma. Alrededor de un mismo núcleo genómico de 6,4 gigapares de bases, cuatro [[células eucariotas|real-cell]] especializadas expresan distintos genes de los mismos 46 cromosomas para adoptar formas y tareas opuestas. La [[acetilación H3K27ac|real-epigenetics]] abre genes de canales iónicos y sinapsis en la [[neurona multipolar|real-neuron]], miosina y actina contráctil en la [[fibra muscular esquelética|real-muscle]], globinas antes de expulsar el núcleo en el [[eritrocito|real-erythrocyte]] y borde en cepillo más [[claudina-15|real-claudin15]] en el [[enterocito|real-enterocyte]], mientras H3K27me3 compacta y silencia los demás programas.',
      blueprint:
        'Rol: Escenario comparativo de diferenciación humana en 4 linajes que une herencia genómica diploide idéntica con especialización celular extrema · Entradas: [[ADN|dna]] humano compartido de 6,4 Gpb (46 cromosomas, ~20.000 genes), [[marcas epigenéticas|real-epigenetics]] (H3K27ac frente a H3K27me3) y [[bioenergética|real-bioenergetics]] celular · Interior: Cuatro pedestales interactivos ([[Neurona multipolar|real-neuron]], [[Fibra muscular|real-muscle]], [[Eritrocito|real-erythrocyte]], [[Enterocito polarizado|real-enterocyte]]) acoplados al conmutador de cromatina · Salida: Señalización eléctrica, fuerza mecánica, transporte de O₂ y absorción sellada en coordinación con la [[defensa inmune|real-immune]].',
      scientific:
        'Síntesis comparativa de diferenciación celular humana desde linajes tisulares (>100 µm) hasta [[divisas atómicas|real-spec-atoms]] de 0,1 nm a partir de un único genoma diploide de 6,4 Gpb de [[ADN|dna]]. Contrasta la activación transcripcional mediante eucromatina H3K27ac frente a heterocromatina Polycomb H3K27me3 en [[nucleosomas|real-epigenetics]] (PDB 1AOI) entre [[neuronas multipolares|real-neuron]] (SCN9A/SYT1; Naᵥ1.7 PDB 6J8I, Kᵥ1.2 PDB 2R9R, SNARE PDB 1SFC), [[miofibras esqueléticas|real-muscle]] (MYH1/ACTA1/RYR1; Miosina-II PDB 2MYS, Actina–Tropomiosina–Troponina PDB 6KN8, SERCA1a PDB 1SU4), [[eritrocitos|real-erythrocyte]] anucleados (Hemoglobina PDB 1GZX) y [[enterocitos|real-enterocyte]] polarizados ([[Claudina-15|real-claudin15]] PDB 4P79).'
    }
  },

  'real-erythrocyte': {
    en: {
      simple:
        'A mature red blood cell is a flexible 7.8 um biconcave disc that ejects its [[nucleus|nucleus]] and [[mitochondria|mitochondrion]] during development so it can pack roughly 270 million oxygen-carrying hemoglobin [[proteins|protein]] inside.',
      story:
        'Inside bone marrow, an immature erythroblast activates HBA1 and HBB globin genes through [[H3K27ac chromatin opening|real-epigenetics]] and translates vast quantities of globin on [[80S ribosomes|real-cd-ribo80]]. Once loaded, the cell makes a radical commitment: it expels its [[nucleus|nucleus]] and dismantles its [[mitochondria|mitochondrion]] so nearly every femtoliter holds soluble alpha2-beta2 hemoglobin tetramers anchored by four heme [[iron|atom-fe]] centers. Braced beneath its [[plasma membrane|plasma-membrane]] by an elastic spectrin-ankyrin [[cytoskeleton|cytoskeleton]], the flattened disc folds effortlessly through 3-micrometer capillaries, delivering O2 to [[neurons|real-neuron]] and [[muscle fibers|real-muscle]] while surviving purely on anaerobic [[glucose|glucose]] glycolysis so it consumes none of the oxygen it hauls.',
      blueprint:
        'Role: Anucleate, deformable 7.8 um biconcave gas-transport disc maximizing reversible O2 loading and capillary transit; Inputs: Erythroblast [[epigenetic H3K27ac|real-epigenetics]] HBA1/HBB expression, heme [[Fe2+|atom-fe]], capillary O2, and anaerobic [[glucose|glucose]] for glycolysis; Inside: ~270 million soluble alpha2-beta2 hemoglobin tetramers (PDB 1GZX, ~330 mg/mL) inside a flexible spectrin-ankyrin [[cytoskeleton|cytoskeleton]] shell with zero nucleus or mitochondria; Outputs: Up to ~1.08 billion O2 molecules delivered per cell to aerobic tissues (plus CO2 bicarbonate buffering), contrasting wild-type solubility with [[HbS sickle fibers|real-cd-hbs]].',
      scientific:
        'Mature human erythrocyte (biconcave disc, ~7.8 um diameter x 2.0 um rim x 0.8 um center, ~90 fL volume, ~136 um^2 surface area; 120-day lifespan). Terminal erythropoiesis uses [[H3K27ac|real-epigenetics]]-driven HBA1/HBB transcription followed by enucleation and mitophagy to pack ~270 million alpha2-beta2 hemoglobin tetramers (~64.5 kDa, oxy-HbA crystal structure PDB 1GZX; ~330 mg/mL cytosolic protein), each coordinating four protoporphyrin IX heme b [[Fe2+|atom-fe]] ions for cooperative sigmoidal O2 binding (~1.08 x 10^9 O2/cell). A triangulated spectrin-actin-ankyrin [[cytoskeleton|cytoskeleton]] permits reversible folding through 3-5 um capillaries, while exclusive anaerobic [[glucose|glucose]] glycolysis (2 ATP/glucose) spares 100% of carried O2 for tissue [[mitochondria|mitochondrion]].'
    },
    es: {
      simple:
        'Un glóbulo rojo maduro es un disco bicóncavo flexible de 7,8 µm que expulsa su [[núcleo|nucleus]] y sus [[mitocondrias|mitochondrion]] al madurar para alojar unos 270 millones de [[proteínas|protein]] de hemoglobina transportadoras de oxígeno.',
      story:
        'En la médula ósea, el eritroblasto inmaduro activa los genes de globina HBA1 y HBB mediante [[apertura cromatínica H3K27ac|real-epigenetics]] y traduce grandes cantidades de globina en [[ribosomas 80S|real-cd-ribo80]]. Una vez cargado, realiza una renuncia extrema: expulsa su [[núcleo|nucleus]] y desmantela sus [[mitocondrias|mitochondrion]] para llenar casi todo su volumen de tetrámeros solubles de hemoglobina α₂β₂ con cuatro centros hemo de [[hierro|atom-fe]]. Sostenido bajo la [[membrana plasmática|plasma-membrane]] por un [[citoesqueleto|cytoskeleton]] elástico de espectrina y anquirina, se pliega por capilares de 3 micrómetros entregando O₂ a [[neuronas|real-neuron]] y [[músculos|real-muscle]] mientras vive solo de glucólisis anaerobia de [[glucosa|glucose]] para no gastar el oxígeno que transporta.',
      blueprint:
        'Rol: Disco bicóncavo anucleado y deformable de 7,8 µm optimizado para transporte reversible de O₂ y paso capilar · Entradas: Expresión previa HBA1/HBB activada por [[H3K27ac|real-epigenetics]], hemo con [[Fe²⁺|atom-fe]], O₂ alveolar y [[glucosa|glucose]] para glucólisis anaerobia · Interior: ~270 millones de tetrámeros de hemoglobina α₂β₂ (PDB 1GZX, ~330 mg/mL) dentro de una corteza elástica de espectrina–anquirina sin núcleo ni mitocondrias · Salida: Hasta ~1.080 millones de moléculas de O₂ entregadas por célula a tejidos aerobios (contrastando su solubilidad con las [[fibras HbS|real-cd-hbs]]).',
      scientific:
        'Eritrocito humano maduro (disco bicóncavo de ~7,8 µm de diámetro × 2,0 µm en el borde × 0,8 µm en el centro, ~90 fL, vida media de 120 días). La eritropoyesis terminal activa HBA1/HBB por [[H3K27ac|real-epigenetics]] y luego ejecuta enucleación y mitofagia para concentrar ~270 millones de tetrámeros de hemoglobina α₂β₂ (~64,5 kDa, oxi-HbA PDB 1GZX; ~330 mg/mL), cada uno con cuatro iones [[Fe²⁺|atom-fe]] en protoporfirina IX para unión cooperativa de O₂ (~1,08 × 10⁹ O₂/célula). Una red cortical de espectrina–actina–anquirina ([[citoesqueleto|cytoskeleton]]) tolera capilares de 3–5 µm, mientras la glucólisis anaerobia de [[glucosa|glucose]] preserva el 100 % del O₂ para las [[mitocondrias|mitochondrion]] tisulares.'
    }
  },

  'real-enterocyte': {
    en: {
      simple:
        'A polarized gut enterocyte is a tall columnar epithelial cell topped with roughly 3,000 tiny microvilli that absorb [[glucose|glucose]] and [[amino acids|amino-acid]], while lateral [[tight junctions|real-claudin15]] seal the intestinal wall against leaks.',
      story:
        'Lining the small intestine, every enterocyte solves two opposing challenges at once: maximizing nutrient uptake from digested food while sealing the bloodstream against gut microbes and toxins. From its basal [[nucleus|nucleus]], [[H3K27ac chromatin marks|real-epigenetics]] switch on villin, SGLT1, and [[Claudin-15|real-claudin15]] while silencing neuronal and muscle genes. At its apical roof, bundled actin filaments push out ~3,000 slender microvilli that multiply surface area twenty-fold so Na+/glucose symporters pull [[glucose|glucose]] inward. Around the upper rim, [[Claudin-15 tight junctions|real-claudin15]] and keratin-anchored desmosomes lock neighboring cells together while basolateral [[Na+/K+-ATPase pumps|real-mem-nak]] burn [[mitochondrial|mitochondrion]] ATP to keep the inward Na+ gradient running.',
      blueprint:
        'Role: Polarized ~25 um columnar intestinal absorptive epithelium separating luminal food uptake from sterile subepithelial tissue; Inputs: Luminal digested [[glucose|glucose]], [[amino acids|amino-acid]], [[water|water]], Na+ ions, and [[mitochondrial|mitochondrion]] ATP; Inside: Apical brush border (~3,000 actin-villin microvilli + SGLT1 symporters), lateral [[Claudin-15 tight junctions|real-claudin15]] (PDB 4P79) + desmosomes, basal [[H3K27ac nucleus|real-epigenetics]], and basolateral [[Na+/K+-ATPase|real-mem-nak]]; Outputs: Directional vectorial absorption of nutrients into blood capillaries alongside a leak-proof physical barrier partnered with mucosal [[immune defense|real-immune]].',
      scientific:
        'Polarized human small-intestinal absorptive enterocyte (~25 um tall x 8-10 um wide) differentiated via [[H3K27ac|real-epigenetics]] activation of SLC5A1 (SGLT1), CLDN15, and VIL1. The apical [[plasma membrane|plasma-membrane]] projects ~3,000 microvilli (~1.0 um x 100 nm) stabilized by villin/fimbrin-crosslinked [[cytoskeleton|cytoskeleton]] cores, expanding surface area ~20-fold for Na+-coupled secondary active [[membrane transport|real-membrane-transport]] of [[glucose|glucose]] and peptides. Lateral apical junctional complexes unite [[Claudin-15|real-claudin15]]/occludin tight junctions (PDB 4P79, sealing paracellular leaks and enforcing lipid/protein polarity) with [[Ca2+|atom-ca]]-dependent desmosomal cadherins, driven energetically by basolateral [[Na+/K+-ATPase|real-mem-nak]] (PDB 3WGU).'
    },
    es: {
      simple:
        'Un enterocito intestinal polarizado es una célula epitelial columnar alta coronada por unas 3.000 microvellosidades que absorben [[glucosa|glucose]] y [[aminoácidos|amino-acid]], mientras sus [[uniones estrechas|real-claudin15]] laterales sellan la pared intestinal contra fugas.',
      story:
        'Revistiendo el intestino delgado, cada enterocito resuelve dos exigencias opuestas a la vez: maximizar la captación de nutrientes y sellar la sangre frente a microbios y toxinas luminares. Desde su [[núcleo|nucleus]] basal, las [[marcas H3K27ac|real-epigenetics]] encienden vilina, SGLT1 y [[claudina-15|real-claudin15]] mientras silencian los genes neuronales y musculares. En su techo apical, haces de actina proyectan ~3.000 microvellosidades que multiplican por veinte el área de absorción para que los simportadores SGLT1 importen [[glucosa|glucose]]. En el borde superior, las [[uniones estrechas de claudina-15|real-claudin15]] y desmosomas sujetan a las células vecinas mientras la [[bomba Na⁺/K⁺-ATPasa|real-mem-nak]] basolateral gasta ATP [[mitocondrial|mitochondrion]] sosteniendo el gradiente de Na⁺.',
      blueprint:
        'Rol: Epitelio columnar polarizado de ~25 µm que combina absorción direccional de nutrientes con sellado protector frente a la luz intestinal · Entradas: [[Glucosa|glucose]] digerida, [[aminoácidos|amino-acid]], [[agua|water]], Na⁺ luminal y ATP [[mitocondrial|mitochondrion]] · Interior: Borde en cepillo apical (~3.000 microvellosidades con vilina y SGLT1), [[uniones estrechas de claudina-15|real-claudin15]] (PDB 4P79) + desmosomas laterales, [[núcleo H3K27ac|real-epigenetics]] basal y [[Na⁺/K⁺-ATPasa|real-mem-nak]] basolateral · Salida: Transporte vectorial de nutrientes hacia los capilares y barrera física coordinada con la [[defensa inmune|real-immune]].',
      scientific:
        'Enterocito absortivo polarizado del intestino delgado humano (~25 µm de altura × 8–10 µm de ancho) diferenciado mediante activación [[H3K27ac|real-epigenetics]] de SLC5A1 (SGLT1), CLDN15 y VIL1. La [[membrana plasmática|plasma-membrane]] apical proyecta ~3.000 microvellosidades (~1,0 µm × 100 nm) con núcleos de [[citoesqueleto|cytoskeleton]] reticulados por vilina/fimbrina que multiplican ~20× la superficie para el [[transporte de membrana|real-membrane-transport]] secundario de [[glucosa|glucose]] acoplado a Na⁺. El complejo de unión lateral combina [[claudina-15|real-claudin15]]/ocludina (PDB 4P79, barrera paracelular y frontera de polaridad) con cadherinas desmosómicas dependientes de [[Ca²⁺|atom-ca]], energizado por [[Na⁺/K⁺-ATPasa|real-mem-nak]] basolateral.'
    }
  },

  'real-epigenetics': {
    en: {
      simple:
        'Epigenetic marks are removable chemical tags attached to histone [[proteins|protein]] that control whether specific stretches of nuclear [[DNA|dna]] open up to be read or fold tightly shut, letting identical genomes build different [[specialized cells|specialized-cells-overview]].',
      story:
        'Inside every nucleated human cell, two meters of negatively charged [[DNA|dna]] wrap around spool-shaped histone octamers (nucleosomes) inside the [[nucleus|nucleus]]. Without changing a single [[nucleotide|nucleotide]] letter, enzymes decorate projecting histone H3 lysine-27 tails with tiny covalent chemical groups. Attaching an acetyl tag (H3K27ac) neutralizes the lysine positive charge, loosening DNA into open euchromatin so [[central dogma|real-central-dogma]] transcription switches on SCN9A in [[neurons|real-neuron]], MYH1 in [[muscle fibers|real-muscle]], or SLC5A1 in [[enterocytes|real-enterocyte]]. In contrast, trimethylation (H3K27me3) recruits Polycomb complexes that compact nucleosomes into dense heterochromatin, locking unneeded cell programs silently away.',
      blueprint:
        'Role: Reversible chromatin-accessibility switch governing lineage-specific gene expression across one shared 6.4 Gbp diploid genome; Inputs: Nuclear [[DNA|dna]] (46 chromosomes), histone octamers (H2A, H2B, H3, H4; PDB 1AOI), acetyl-CoA (for HAT/p300 H3K27ac), and S-adenosylmethionine (for PRC2 H3K27me3); Inside: 11 nm nucleosome core particles toggling between charge-neutralized open euchromatin (H3K27ac, -COCH3) and Polycomb-compacted silenced heterochromatin (H3K27me3); Outputs: Lineage-restricted ~10-15% active transcriptome directing [[neuron|real-neuron]], [[muscle|real-muscle]], [[erythrocyte|real-erythrocyte]], and [[enterocyte|real-enterocyte]] differentiation.',
      scientific:
        'Eukaryotic chromatin epigenetic regulation centered on the 11 nm nucleosome core particle (crystal structure PDB 1AOI; 147 bp [[DNA|dna]] wrapped ~1.65 left-handed superhelical turns around an H2A/H2B/H3/H4 histone octamer). Histone acetyltransferases (p300/CBP) deposit H3K27ac (covalent -COCH3 from [[C|atom-c]], [[H|atom-h]], [[O|atom-o]] neutralizing lysine epsilon-NH3+ charge), destabilizing DNA [[phosphate|atom-p]] contacts to open active enhancers/promoters (euchromatin) for [[central dogma|real-central-dogma]] transcription. Conversely, Polycomb Repressive Complex 2 (PRC2) deposits H3K27me3 (-N(CH3)3+), compacting non-lineage loci into transcriptionally silent heterochromatin while preserving 100% identical [[DNA|dna]] sequence across [[specialized human cells|specialized-cells-overview]].'
    },
    es: {
      simple:
        'Las marcas epigenéticas son etiquetas químicas reversibles unidas a las [[proteínas|protein]] histonas que deciden si un tramo del [[ADN|dna]] nuclear se abre para leerse o se pliega cerrado, permitiendo que genomas idénticos formen distintas [[células especializadas|specialized-cells-overview]].',
      story:
        'Dentro de cada célula humana nucleada, dos metros de [[ADN|dna]] con carga negativa se enrollan sobre octámeros de histonas (nucleosomas) en el [[núcleo|nucleus]]. Sin alterar ni un solo [[nucleótido|nucleotide]], distintas enzimas etiquetan la lisina 27 de la histona H3 con pequeños grupos covalentes. Añadir un grupo acetilo (H3K27ac) neutraliza la carga positiva de la lisina y afloja el ADN formando eucromatina abierta para que la transcripción del [[dogma central|real-central-dogma]] active SCN9A en [[neuronas|real-neuron]], MYH1 en [[músculo|real-muscle]] o SLC5A1 en [[enterocitos|real-enterocyte]]. En cambio, la trimetilación (H3K27me3) recluta complejos Polycomb que compactan los nucleosomas en heterocromatina silenciada.',
      blueprint:
        'Rol: Conmutador reversible de accesibilidad cromatínica que regula la expresión génica específica de linaje sobre un único genoma de 6,4 Gpb · Entradas: [[ADN|dna]] nuclear (46 cromosomas), octámeros de histonas (H2A, H2B, H3, H4; PDB 1AOI), acetil-CoA (H3K27ac) y S-adenosilmetionina (H3K27me3) · Interior: Nucleosomas de 11 nm alternando entre eucromatina abierta neutralizada (H3K27ac, –COCH₃) y heterocromatina compactada por Polycomb (H3K27me3) · Salida: Transcriptoma activo específico (~10–15 % de genes) que define [[neurona|real-neuron]], [[músculo|real-muscle]], [[eritrocito|real-erythrocyte]] y [[enterocito|real-enterocyte]].',
      scientific:
        'Regulación epigenética eucariota centrada en la partícula central del nucleosoma de 11 nm (cristalografía PDB 1AOI; 147 pb de [[ADN|dna]] enrollados ~1,65 vueltas sobre un octámero H2A/H2B/H3/H4). Las acetiltransferasas p300/CBP depositan H3K27ac (grupo –COCH₃ de [[C|atom-c]], [[H|atom-h]] y [[O|atom-o]] que neutraliza el –NH₃⁺ de la lisina), relajando la atracción hacia los [[fosfatos|atom-p]] del ADN para abrir eucromatina activa del [[dogma central|real-central-dogma]]. El complejo Polycomb PRC2 deposita H3K27me3 (–N(CH₃)₃⁺), condensando loci ajenos en heterocromatina silente sin modificar la secuencia de [[ADN|dna]] entre [[células humanas especializadas|specialized-cells-overview]].'
    }
  },

  'real-claudin15': {
    en: {
      simple:
        'Claudin-15 is a membrane-spanning tight-junction [[protein|protein]] that zips neighboring [[gut enterocytes|real-enterocyte]] tightly together, sealing out bacteria and toxins while opening tiny selective pores for Na+ ions and [[water|water]].',
      story:
        'Between two adjacent [[intestinal enterocytes|real-enterocyte]], even a tiny uncontrolled gap would let digestive enzymes and gut bacteria leak straight into the bloodstream. Linear polymers of Claudin-15 solve that problem right along the apical-lateral rim of the [[plasma membrane|plasma-membrane]]. Four transmembrane alpha-helices anchor each subunit inside the [[phospholipid|phospholipid]] bilayer while palm-shaped extracellular beta-sheet loops interlock head-to-head with Claudin-15 strands on the neighboring cell. That molecular seam blocks pathogens and freezes apical vs basolateral protein polarity, yet negatively charged aspartate side chains line sub-nanometer paracellular channels that recycle Na+ ions back into the gut lumen to fuel continuous SGLT1 [[glucose|glucose]] absorption.',
      blueprint:
        'Role: Paracellular tight-junction strand polymer sealing epithelial gaps while forming selective cation-permeable nano-channels; Inputs: Neighboring [[enterocyte|real-enterocyte]] apical-lateral [[plasma membranes|plasma-membrane]], ZO-1 [[cytoskeleton|cytoskeleton]] anchors, and luminal/interstitial Na+ + [[H2O|water]]; Inside: Four-transmembrane-helix Claudin-15 assembly (PDB 4P79, ~25 kDa monomer) interlocking extracellular beta-sheet ECL1/ECL2 loops into ~0.6 nm anionic pore barrels; Outputs: Leak-proof mucosal barrier defending against pathogens (aiding [[immune defense|real-immune]]), strict apical-basolateral membrane fence, and recycled luminal Na+ sustaining [[membrane transport|real-membrane-transport]].',
      scientific:
        'Intestinal paracellular tight-junction channel [[protein|protein]] Claudin-15 (crystal structure PDB 4P79; ~25 kDa four-pass transmembrane monomer with a conserved five-stranded extracellular beta-sheet palm across ECL1 and ECL2). Cis-polymerization within one [[enterocyte|real-enterocyte]] [[plasma membrane|plasma-membrane]] paired with trans-interaction across the paracellular space forms continuous tight-junction strands anchored to ZO-1 and the cortical [[cytoskeleton|cytoskeleton]]. Negatively charged ECL1 residues (notably Asp55 and Asp64) line a ~0.6-0.8 nm charge-selective paracellular pore permeable to Na+ and [[water|water]] while excluding macromolecules, toxins, and bacteria.'
    },
    es: {
      simple:
        'La claudina-15 es una [[proteína|protein]] transmembrana de las uniones estrechas que sella firmemente dos [[enterocitos intestinales|real-enterocyte]] vecinos, bloqueando bacterias y toxinas mientras deja pasar selectivamente iones Na⁺ y [[agua|water]].',
      story:
        'Entre dos [[enterocitos|real-enterocyte]] contiguos, cualquier rendija sin control permitiría que enzimas digestivas y bacterias intestinales se filtraran a la sangre. Los polímeros lineales de claudina-15 resuelven este problema justo en el borde apical-lateral de la [[membrana plasmática|plasma-membrane]]. Cuatro hélices transmembrana anclan cada monómero en la bicapa de [[fosfolípidos|phospholipid]] mientras sus láminas beta extracelulares encajan frente a frente con las de la célula vecina. Esa costura molecular impide el paso de patógenos y mantiene la polaridad apical-basolateral, pero residuos de aspartato con carga negativa revisten poros paracelulares subnanométricos que reciclan Na⁺ a la luz intestinal para sostener la absorción de [[glucosa|glucose]].',
      blueprint:
        'Rol: Polímero de hebras de unión estrecha que sella brechas epiteliales y forma nanocanales paracelulares selectivos para cationes · Entradas: [[Membranas plasmáticas|plasma-membrane]] apicales-laterales de [[enterocitos|real-enterocyte]] vecinos, anclajes ZO-1 del [[citoesqueleto|cytoskeleton]] y Na⁺ + [[H₂O|water]] · Interior: Monómeros de cuatro hélices de claudina-15 (PDB 4P79, ~25 kDa) acoplando bucles extracelulares ECL1/ECL2 en poros aniónicos de ~0,6 nm · Salida: Barrera mucosa hermética aliada de la [[defensa inmune|real-immune]], frontera de polaridad lipídica y reciclaje de Na⁺ para el [[transporte de membrana|real-membrane-transport]].',
      scientific:
        '[[Proteína|protein]] intestinal formadora de poros en uniones estrechas claudina-15 (estructura cristalográfica PDB 4P79; monómero de ~25 kDa con cuatro hélices transmembrana y una palma extracelular de cinco hebras beta entre ECL1 y ECL2). Su polimerización en cis dentro de la [[membrana plasmática|plasma-membrane]] del [[enterocito|real-enterocyte]] y acoplamiento en trans entre células contiguas forman hebras continuas ancladas vía ZO-1 al [[citoesqueleto|cytoskeleton]]. Residuos aniónicos en ECL1 (Asp55 y Asp64) revisten un poro paracelular selectivo de ~0,6–0,8 nm permeable a Na⁺ y [[agua|water]] mientras excluye macromoléculas y microorganismos.'
    }
  },

  'real-neuron': {
    en: {
      simple:
        'A multipolar neuron is an electrically excitable human cell that collects incoming signals on branching dendrites, fires rapid voltage impulses down a myelinated axon, and relays chemical messages across a 20 nm [[synapse|real-neuron-synapse]].',
      story:
        'Built from the exact same 6.4 Gbp genome as every other [[specialized human cell|specialized-cells-overview]], a multipolar neuron uses [[H3K27ac chromatin marks|real-epigenetics]] inside its soma [[nucleus|nucleus]] to activate ion-channel and synaptic genes while silencing muscle and globin programs. Incoming dendritic currents sum at the axon hillock; crossing -55 mV launches an action potential down the myelinated axon. Insulating myelin wraps let that electrical wave hop between exposed [[Nodes of Ranvier|real-neuron-node]] like an express train skipping local stops to save time and ATP, driven by clustered [[Nav1.7|real-neuron-nav17]] and [[Kv1.2|real-neuron-kv12]] channels. Reaching the terminal bouton, depolarization triggers [[Ca2+|atom-ca]]-driven SNARE vesicle fusion across the [[20 nm synaptic cleft|real-neuron-synapse]], opening [[AMPA|real-neuron-ampa]] or [[nAChR|real-neuron-nachr]] channels on downstream neurons or [[skeletal muscle fibers|real-muscle]].',
      blueprint:
        'Role: Polarized long-distance bioelectrical signaling and chemical-transmission cell spanning micrometers to one meter; Inputs: Dendritic postsynaptic potentials, [[H3K27ac|real-epigenetics]] neuronal transcripts (SCN9A, SYT1, SNAP25), and dense [[mitochondrial|mitochondrion]] ATP supporting [[Na+/K+-ATPase|real-mem-nak]]; Inside: Spiny dendrites, soma with euchromatin nucleus, axon hillock, myelin sheaths, [[Nodes of Ranvier|real-neuron-node]] ([[Nav1.7|real-neuron-nav17]] + [[Kv1.2|real-neuron-kv12]]), [[microtubule|microtubule]] axonal tracks, and [[20 nm chemical synapse|real-neuron-synapse]]; Outputs: Directional saltatory action potentials (50-120 m/s) and quantal neurotransmitter pulses activating target neurons or [[skeletal muscle|real-muscle]].',
      scientific:
        'Human multipolar projection neuron (15-50 um soma, branched dendritic arbor, 0.5-15 um diameter myelinated axon extending up to ~1 m; resting Vm approx -70 mV sustained by [[Na+/K+-ATPase|real-mem-nak]]). Differentiation via [[H3K27ac|real-epigenetics]] activates SCN9A, KCNA2, SYT1, and SNAP25. Integration at the axon initial segment crosses threshold (-55 mV) to initiate all-or-none saltatory conduction across [[Nodes of Ranvier|real-neuron-node]] via voltage-gated [[Nav1.7|real-neuron-nav17]] (PDB 6J8I) influx and [[Kv1.2|real-neuron-kv12]] (PDB 2R9R) efflux. At the presynaptic terminal, Cav-mediated [[Ca2+|atom-ca]] entry triggers SNARE (PDB 1SFC) fusion of [[synaptic vesicles|real-mem-vesicle]] across the 20 nm [[synapse|real-neuron-synapse]] onto postsynaptic [[AMPA|real-neuron-ampa]] (PDB 3KG2) and [[nAChR|real-neuron-nachr]] (PDB 2BG9) channels.'
    },
    es: {
      simple:
        'Una neurona multipolar es una célula humana eléctricamente excitable que recoge señales en sus dendritas ramificadas, dispara impulsos de voltaje por un axón mielinizado y transmite mensajes químicos a través de una [[sinapsis|real-neuron-synapse]] de 20 nm.',
      story:
        'Construida a partir del mismo genoma de 6,4 Gpb que las demás [[células humanas especializadas|specialized-cells-overview]], la neurona multipolar emplea [[marcas H3K27ac|real-epigenetics]] en el [[núcleo|nucleus]] de su soma para activar genes de canales iónicos y sinapsis mientras silencia los de músculo y hemoglobina. Las corrientes dendríticas se suman en el cono axónico; al superar –55 mV nace un potencial de acción que recorre el axón. Las vainas aislantes de mielina permiten que la onda eléctrica salte entre los [[nodos de Ranvier|real-neuron-node]] como un tren expreso que evita paradas locales para ahorrar tiempo y ATP, recargada por canales [[Naᵥ1.7|real-neuron-nav17]] y [[Kᵥ1.2|real-neuron-kv12]]. En el botón terminal, el [[Ca²⁺|atom-ca]] acciona la fusión SNARE sobre la [[hendidura sináptica de 20 nm|real-neuron-synapse]], abriendo receptores [[AMPA|real-neuron-ampa]] o [[nAChR|real-neuron-nachr]] en otras neuronas o en [[fibras musculares|real-muscle]].',
      blueprint:
        'Rol: Célula polarizada de señalización bioeléctrica a larga distancia y transmisión química unidireccional (de micrómetros hasta un metro) · Entradas: Potenciales postsinápticos dendríticos, transcritos neuronales [[H3K27ac|real-epigenetics]] (SCN9A, SYT1, SNAP25) y ATP [[mitocondrial|mitochondrion]] para [[Na⁺/K⁺-ATPasa|real-mem-nak]] · Interior: Dendritas espinosas, soma con núcleo eucromático, cono axónico, vainas de mielina, [[nodos de Ranvier|real-neuron-node]] ([[Naᵥ1.7|real-neuron-nav17]] + [[Kᵥ1.2|real-neuron-kv12]]), carriles de [[microtúbulos|microtubule]] y [[sinapsis química de 20 nm|real-neuron-synapse]] · Salida: Potenciales de acción saltatorios (50–120 m/s) y pulsos cuánticos de neurotransmisores hacia otras neuronas o [[músculo esquelético|real-muscle]].',
      scientific:
        'Neurona humana multipolar de proyección (soma de 15–50 µm, árbol dendrítico y axón mielinizado de 0,5–15 µm hasta ~1 m; Vₘ de reposo ≈ –70 mV sostenido por [[Na⁺/K⁺-ATPasa|real-mem-nak]]). La diferenciación por [[H3K27ac|real-epigenetics]] activa SCN9A, KCNA2, SYT1 y SNAP25. Al superar –55 mV en el cono axónico se propaga conducción saltatoria entre [[nodos de Ranvier|real-neuron-node]] mediante entrada por [[Naᵥ1.7|real-neuron-nav17]] (PDB 6J8I) y salida por [[Kᵥ1.2|real-neuron-kv12]] (PDB 2R9R). En el terminal presináptico, el flujo de [[Ca²⁺|atom-ca]] dispara la fusión SNARE (PDB 1SFC) de [[vesículas sinápticas|real-mem-vesicle]] a través de la [[sinapsis|real-neuron-synapse]] de 20 nm sobre [[AMPA|real-neuron-ampa]] (PDB 3KG2) y [[nAChR|real-neuron-nachr]] (PDB 2BG9).'
    }
  },

  'real-neuron-node': {
    en: {
      simple:
        'A Node of Ranvier is a tiny 1-2 um unmyelinated gap exposed between insulating myelin segments along a [[neuron|real-neuron]] axon, packed with [[Na+|real-neuron-nav17]] and [[K+|real-neuron-kv12]] channels that recharge every passing action potential.',
      story:
        'Wrapping an axon in lipid-rich myelin prevents current leakage across millimeter-long stretches, yet passive internal charge still decays over distance. Every 0.2 to 1.5 millimeters, the myelin sheath parts to expose a bare one-micrometer Node of Ranvier directly to extracellular fluid. Packed at densities above one thousand channels per square micrometer, [[Nav1.7 channels|real-neuron-nav17]] snap open the instant arriving axial current crosses -55 mV, driving voltage rapidly to +40 mV before [[Kv1.2 channels|real-neuron-kv12]] open at flanking zones to restore -70 mV. Because ions cross the [[plasma membrane|plasma-membrane]] only at these narrow nodes, [[Na+/K+-ATPase pumps|real-mem-nak]] spend far less [[mitochondrial|mitochondrion]] ATP resetting gradients.',
      blueprint:
        'Role: Exposed 1-2 um axonal repeater patch executing regenerative saltatory action-potential amplification between myelin internodes; Inputs: Passive axial depolarizing current from the upstream node, extracellular Na+ (~145 mM), intracellular K+ (~140 mM), and [[mitochondrial|mitochondrion]] ATP; Inside: High-density nodal [[Nav1.7|real-neuron-nav17]] (PDB 6J8I) clusters anchored to ankyrin-G, juxtaparanodal [[Kv1.2|real-neuron-kv12]] (PDB 2R9R) repolarizers, and [[Na+/K+-ATPase|real-mem-nak]] reset pumps; Outputs: Full-amplitude +40 mV action potential launched instantaneously to the next node down to the [[chemical synapse|real-neuron-synapse]].',
      scientific:
        'Unmyelinated axonal Node of Ranvier (~1-2 um length, spaced ~0.2-1.5 mm between glial Schwann or oligodendrocyte myelin internodes on myelinated [[neurons|real-neuron]]). Anchored by ankyrin-G and beta-IV-spectrin [[cytoskeleton|cytoskeleton]] scaffolds, nodal [[plasma membrane|plasma-membrane]] concentrates voltage-gated [[Nav1.7|real-neuron-nav17]]/Nav1.6 channels (>1,000 channels/um^2; PDB 6J8I), flanked by paranodal septate junctions and juxtaparanodal [[Kv1.2|real-neuron-kv12]] channels (PDB 2R9R). Confining regenerative -70 mV -> +40 mV -> -70 mV ion flux to <1% of axonal surface boosts conduction speed to 50-120 m/s while dramatically reducing [[Na+/K+-ATPase|real-mem-nak]] (PDB 3WGU) ATP consumption.'
    },
    es: {
      simple:
        'Un nodo de Ranvier es una estrecha brecha sin mielina de 1 a 2 µm entre vainas aislantes del axón [[neuronal|real-neuron]], repleta de canales de [[Na⁺|real-neuron-nav17]] y [[K⁺|real-neuron-kv12]] que recargan cada potencial de acción.',
      story:
        'Recubrir el axón con mielina rica en lípidos evita fugas de corriente a lo largo de segmentos milimétricos, pero la carga pasiva interna igual se atenúa con la distancia. Cada 0,2 a 1,5 milímetros, la mielina se interrumpe dejando al descubierto un nodo de Ranvier de apenas un micrómetro frente al líquido extracelular. Agrupados a más de mil canales por micrómetro cuadrado, los canales [[Naᵥ1.7|real-neuron-nav17]] se abren en cuanto la corriente axial supera –55 mV, elevando el voltaje a +40 mV antes de que [[Kᵥ1.2|real-neuron-kv12]] restaure los –70 mV. Al restringir el intercambio iónico a estos parches mínimos, la [[Na⁺/K⁺-ATPasa|real-mem-nak]] ahorra enorme cantidad de ATP [[mitocondrial|mitochondrion]].',
      blueprint:
        'Rol: Parche repetidor axónico expuesto de 1–2 µm que amplifica de forma regenerativa el potencial de acción saltatorio entre internodos de mielina · Entradas: Corriente axial despolarizante del nodo previo, Na⁺ extracelular (~145 mM), K⁺ intracelular (~140 mM) y ATP [[mitocondrial|mitochondrion]] · Interior: Agrupaciones nodales densas de [[Naᵥ1.7|real-neuron-nav17]] (PDB 6J8I) fijadas a anquirina-G, canales repolarizantes [[Kᵥ1.2|real-neuron-kv12]] (PDB 2R9R) y bombas [[Na⁺/K⁺-ATPasa|real-mem-nak]] · Salida: Pulso completo de +40 mV lanzado al siguiente nodo rumbo a la [[sinapsis química|real-neuron-synapse]].',
      scientific:
        'Nodo de Ranvier axónico amielínico (~1–2 µm de longitud, espaciado ~0,2–1,5 mm entre internodos de mielina de células de Schwann u oligodendrocitos en [[neuronas|real-neuron]]). Anclado por andamios de anquirina-G y βIV-espectrina del [[citoesqueleto|cytoskeleton]], concentra canales [[Naᵥ1.7|real-neuron-nav17]]/Naᵥ1.6 (>1.000 canales/µm²; PDB 6J8I) flanqueados por uniones paranodales y canales yuxtaparanodales [[Kᵥ1.2|real-neuron-kv12]] (PDB 2R9R). Limitar los flujos de –70 mV → +40 mV → –70 mV a <1 % del área axónica eleva la velocidad a 50–120 m/s reduciendo el gasto de ATP en [[Na⁺/K⁺-ATPasa|real-mem-nak]] (PDB 3WGU).'
    }
  },

  'real-neuron-nav17': {
    en: {
      simple:
        'Nav1.7 is a voltage-gated sodium channel [[protein|protein]] embedded in [[neuron|real-neuron]] membranes that snaps open within a fraction of a millisecond when voltage rises past -55 mV, letting Na+ rush in to fire the action potential.',
      story:
        'Concentrated at the axon hillock and [[Nodes of Ranvier|real-neuron-node]], human Nav1.7 turns subtle voltage changes into an explosive electrical spike. One long [[polypeptide|polypeptide]] folds into four six-helix domains arranged around a central transmembrane pore. Each domain carries an S4 helix studded with positively charged arginine [[amino acids|amino-acid]] that shift outward the moment membrane depolarization weakens the internal negative pull. That mechanical tug widens the pore so partially hydrated Na+ ions stream inward past a tight DEKA selectivity ring, driving membrane voltage to +40 mV before an intracellular IFM inactivation latch plugs the opening one millisecond later, ensuring the impulse moves strictly forward toward the [[synapse|real-neuron-synapse]].',
      blueprint:
        'Role: Fast voltage-sensing Na+ channel igniting the rising phase (-55 mV -> +40 mV) of neuronal action potentials and enforcing forward directionality; Inputs: Suprathreshold membrane depolarization (> -55 mV) and steep inward electrochemical Na+ gradient (~145 mM outside vs ~12 mM inside); Inside: 24-TM four-domain alpha subunit + beta1/beta2 subunits (cryo-EM PDB 6J8I) with S4 arginine voltage sensors, DEKA selectivity filter, and DIII-DIV IFM fast-inactivation gate; Outputs: Rapid ~1 ms Na+ inward current launching saltatory voltage propagation before [[Kv1.2|real-neuron-kv12]] repolarization (and clinical target in [[pharmacology|real-pharmacology]]).',
      scientific:
        'Human voltage-gated sodium channel Nav1.7 (encoded by SCN9A; cryo-EM structure PDB 6J8I; ~230 kDa pore-forming alpha subunit of four pseudosymmetric 6-TM domains DI-DIV paired with beta1/beta2 Ig-domain subunits) in [[neuron|real-neuron]] [[Nodes of Ranvier|real-neuron-node]] and nociceptors. Outward translocation of positively charged S4 gating arginines opens the S6 activation gate (~0.2 ms), admitting partially dehydrated Na+ (~0.102 nm ionic radius) through the asymmetric Asp-Glu-Lys-Ala (DEKA) selectivity filter (~10^7 ions/s) to depolarize the [[plasma membrane|plasma-membrane]] toward ENa (+40 mV). Fast inactivation (~1 ms) via the DIII-DIV Ile-Phe-Met (IFM) motif creates a refractory period guiding unidirectional propagation toward the [[synapse|real-neuron-synapse]].'
    },
    es: {
      simple:
        'Naᵥ1.7 es una [[proteína|protein]] de canal de sodio dependiente de voltaje en la membrana [[neuronal|real-neuron]] que se abre en una fracción de milisegundo al superar –55 mV, dejando entrar Na⁺ para disparar el potencial de acción.',
      story:
        'Concentrado en el cono axónico y en los [[nodos de Ranvier|real-neuron-node]], el canal humano Naᵥ1.7 convierte una pequeña subida de voltaje en una espiga eléctrica veloz. Un solo [[polipéptido|polypeptide]] se pliega en cuatro dominios de seis hélices en torno a un poro central. Cada dominio porta una hélice S4 cargada con [[aminoácidos|amino-acid]] arginina positivos que se desplazan hacia fuera al reducirse la negatividad interna. Ese tirón mecánico abre el poro para que el Na⁺ cruce el estrecho anillo selectivo DEKA y eleve el voltaje a +40 mV, antes de que una compuerta intracelular IFM tapone el canal un milisegundo después garantizando avance unidireccional hacia la [[sinapsis|real-neuron-synapse]].',
      blueprint:
        'Rol: Canal rápido de Na⁺ sensible al voltaje que dispara la fase ascendente (–55 mV → +40 mV) del potencial de acción e impone propagación unidireccional · Entradas: Despolarización umbral (> –55 mV) y fuerte gradiente entrante de Na⁺ (~145 mM fuera frente a ~12 mM dentro) · Interior: Subunidad α de 24 hélices en cuatro dominios + subunidades β1/β2 (crio-EM PDB 6J8I) con sensores S4 de arginina, filtro DEKA y compuerta rápida IFM · Salida: Corriente rápida de Na⁺ (~1 ms) que lanza el impulso saltatorio previo a [[Kᵥ1.2|real-neuron-kv12]] (diana clave en [[farmacología|real-pharmacology]]).',
      scientific:
        'Canal de sodio humano dependiente de voltaje Naᵥ1.7 (codificado por SCN9A; crio-EM PDB 6J8I; subunidad α de ~230 kDa con cuatro dominios pseudosimétricos DI–DIV de 6 hélices TM y subunidades auxiliares β1/β2) en [[nodos de Ranvier|real-neuron-node]] de [[neuronas|real-neuron]]. El desplazamiento externo de las argininas sensoras S4 abre la compuerta S6 (~0,2 ms), conduciendo Na⁺ parcialmente hidratado (radio iónico ~0,102 nm) a través del filtro asimétrico Asp–Glu–Lys–Ala (DEKA) (~10⁷ iones/s) hasta +40 mV en la [[membrana plasmática|plasma-membrane]]. La inactivación rápida (~1 ms) mediante el motivo IFM del bucle DIII–DIV establece el periodo refractario hacia la [[sinapsis|real-neuron-synapse]].'
    }
  },

  'real-neuron-kv12': {
    en: {
      simple:
        'Kv1.2 is a voltage-gated potassium channel [[protein|protein]] along the [[neuron|real-neuron]] axon that opens right after [[Nav1.7|real-neuron-nav17]], letting intracellular K+ flow outward to pull membrane voltage sharply back down to -70 mV.',
      story:
        'An action potential would stay trapped at +40 mV without a rapid electrical brake. Built from four identical six-helix subunits assembled around a symmetric pore, delayed-rectifier Kv1.2 opens roughly half a millisecond after [[Nav1.7|real-neuron-nav17]] along the borders of each [[Node of Ranvier|real-neuron-node]]. At its narrow outer mouth, four conserved TVGYG signature loops point backbone [[oxygen|atom-o]] carbonyls inward at the exact spacing of a K+ hydration shell. Passing K+ ions shed their [[water|water]] jackets effortlessly and stream outward, while smaller Na+ ions sit too far from the oxygens to pay the dehydration cost, cleanly repolarizing the [[plasma membrane|plasma-membrane]] so the axon is ready to fire again.',
      blueprint:
        'Role: Delayed-rectifier homotetrameric K+ channel executing rapid action-potential repolarization (+40 mV -> -70 mV); Inputs: Peak action-potential depolarization from [[Nav1.7|real-neuron-nav17]] and steep outward electrochemical K+ gradient (~140 mM inside vs ~4 mM outside); Inside: Four-fold 6-TM Kv1.2 tetramer with T1/beta2 cytosolic complex (PDB 2R9R), peripheral S1-S4 voltage paddles, and central TVGYG backbone-carbonyl selectivity filter; Outputs: Selective K+ efflux (>1,000:1 K+/Na+ preference) terminating each spike before [[Na+/K+-ATPase|real-mem-nak]] restores long-term bulk ion concentrations.',
      scientific:
        'Mammalian Shaker-family delayed-rectifier voltage-gated potassium channel Kv1.2 (crystal structure PDB 2R9R; homotetramer of four 6-TM alpha subunits coupled to a cytoplasmic T1-beta2 oxidoreductase complex) localized at juxtaparanodes flanking [[Nodes of Ranvier|real-neuron-node]] in [[neurons|real-neuron]]. Depolarization shifts S4 voltage-sensor arginines to pivot the S4-S5 linker and open the intracellular S6 gate. The conserved Thr-Val-Gly-Tyr-Gly (TVGYG) selectivity filter coordinates dehydrated K+ (0.138 nm ionic radius) in four square-antiprismatic [[O|atom-o]] carbonyl sites matching its [[H2O|water]] solvation shell, excluding smaller Na+ (0.102 nm) by >1,000-fold to repolarize Vm back to -70 mV.'
    },
    es: {
      simple:
        'Kᵥ1.2 es un canal de potasio dependiente de voltaje en el axón [[neuronal|real-neuron]] que se abre justo después de [[Naᵥ1.7|real-neuron-nav17]], dejando salir K⁺ intracelular para devolver con rapidez el voltaje de membrana a –70 mV.',
      story:
        'Un potencial de acción quedaría bloqueado en +40 mV sin un freno eléctrico veloz. Formado por cuatro subunidades idénticas de seis hélices en torno a un poro simétrico, el canal rectificador tardío Kᵥ1.2 se abre medio milisegundo después de [[Naᵥ1.7|real-neuron-nav17]] en los bordes de cada [[nodo de Ranvier|real-neuron-node]]. En su estrecha boca externa, cuatro bucles conservados TVGYG orientan carbonilos de [[oxígeno|atom-o]] a la distancia exacta de la capa de hidratación del K⁺. Así, el K⁺ suelta su [[agua|water]] sin coste energético y sale con rapidez, mientras el Na⁺ más pequeño queda excluido, repolarizando limpiamente la [[membrana plasmática|plasma-membrane]].',
      blueprint:
        'Rol: Canal homotetramérico de K⁺ rectificador tardío que ejecuta la repolarización rápida (+40 mV → –70 mV) del potencial de acción · Entradas: Despolarización pico generada por [[Naᵥ1.7|real-neuron-nav17]] y fuerte gradiente saliente de K⁺ (~140 mM dentro frente a ~4 mM fuera) · Interior: Tetrámero Kᵥ1.2 de cuatro subunidades de 6 hélices con complejo citosólico T1/β2 (PDB 2R9R), sensores S1–S4 y filtro carbonílico TVGYG · Salida: Flujo selectivo de K⁺ (>1.000:1 frente a Na⁺) que cierra la espiga antes del reajuste a largo plazo por [[Na⁺/K⁺-ATPasa|real-mem-nak]].',
      scientific:
        'Canal de potasio rectificador tardío de mamíferos de la familia Shaker Kᵥ1.2 (estructura cristalográfica PDB 2R9R; homotetrámero de cuatro subunidades α de 6 hélices acoplado al complejo citoplasmático T1–β2) ubicado en yuxtaparanodos junto a los [[nodos de Ranvier|real-neuron-node]] de [[neuronas|real-neuron]]. La despolarización desplaza las argininas S4 abriendo la compuerta S6. El filtro selectivo Thr–Val–Gly–Tyr–Gly (TVGYG) coordina K⁺ deshidratado (radio 0,138 nm) mediante cuatro sitios antiprismáticos de carbonilos [[O|atom-o]] equivalentes a su capa de [[H₂O|water]], excluyendo al Na⁺ (0,102 nm) en >1.000× para repolarizar Vₘ a –70 mV.'
    }
  },

  'real-neuron-synapse': {
    en: {
      simple:
        'A chemical synapse is the 20 nm fluid gap where an electrical impulse arriving at a [[neuron|real-neuron]] terminal triggers [[Ca2+|atom-ca]]-driven SNARE fusion of [[synaptic vesicles|real-mem-vesicle]], releasing neurotransmitters onto postsynaptic [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] receptors.',
      story:
        'When a saltatory action potential from the last [[Node of Ranvier|real-neuron-node]] floods the presynaptic terminal bouton, electrical code must leap across a 20-nanometer fluid cleft without direct membrane contact. Depolarization opens presynaptic Cav channels so extracellular [[Ca2+|atom-ca]] surges into the active zone and binds synaptotagmin on docked 40-nanometer [[vesicles|vesicle]]. Freed from its arrest clamp, the four-helix neuronal SNARE complex (vesicle VAMP2 intertwining with membrane syntaxin-1A and SNAP-25)coils tightly from N-terminus to C-terminus, forcing the two [[phospholipid|phospholipid]] bilayers to merge. Within half a millisecond, thousands of glutamate or acetylcholine molecules cross the cleft and unlock postsynaptic [[AMPA|real-neuron-ampa]] or [[nAChR|real-neuron-nachr]] ion channels.',
      blueprint:
        'Role: Unidirectional 20 nm electro-chemical-electrical signal converter linking presynaptic axon terminals to target neurons or skeletal muscle; Inputs: Arriving terminal action potential, extracellular [[Ca2+|atom-ca]], neurotransmitter-loaded 40 nm [[synaptic vesicles|real-mem-vesicle]], and [[mitochondrial|mitochondrion]] ATP for vesicle recycling; Inside: Presynaptic Cav channels, Ca2+ sensor synaptotagmin, neuronal 4-helix SNARE complex (PDB 1SFC: VAMP2 + syntaxin-1A + SNAP-25), 20 nm aqueous cleft, and postsynaptic [[AMPA|real-neuron-ampa]] / [[nAChR|real-neuron-nachr]] clusters; Outputs: Quantal neurotransmitter burst generating fast postsynaptic depolarization on receiving [[neurons|real-neuron]] or [[muscle fibers|real-muscle]].',
      scientific:
        'Fast chemical synaptic junction (~20 nm cleft width) coupling the presynaptic active zone of a [[neuron|real-neuron]] to a postsynaptic density or [[skeletal muscle|real-muscle]] motor end-plate. Action-potential depolarization opens P/Q- or N-type Cav channels, creating a localized microdomain [[Ca2+|atom-ca]] spike (~10-100 uM) sensed by synaptotagmin-1 C2 domains. Synchronous N-to-C zippering of the trans-SNARE four-helix coiled-coil bundle (crystal structure PDB 1SFC: synaptobrevin/VAMP2, syntaxin-1A, and two SNAP-25 helices) overcomes bilayer hydration energy (~40-60 kBT) to open a fusion pore, discharging ~5,000 glutamate or acetylcholine molecules per [[vesicle|real-mem-vesicle]] within ~0.2-0.5 ms onto [[AMPA|real-neuron-ampa]] (PDB 3KG2) and [[nAChR|real-neuron-nachr]] (PDB 2BG9) channels.'
    },
    es: {
      simple:
        'Una sinapsis química es la hendidura fluida de 20 nm donde el impulso eléctrico que llega al terminal [[neuronal|real-neuron]] activa la fusión SNARE por [[Ca²⁺|atom-ca]] de [[vesículas sinápticas|real-mem-vesicle]], liberando neurotransmisores sobre receptores [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]].',
      story:
        'Cuando el potencial de acción proveniente del último [[nodo de Ranvier|real-neuron-node]] invade el botón terminal presináptico, el código eléctrico debe cruzar una hendidura fluida de 20 nanómetros sin contacto directo de membranas. La despolarización abre canales Caᵥ dejando entrar un destello de [[Ca²⁺|atom-ca]] que se une a la sinaptotagmina en [[vesículas|vesicle]] acopladas de 40 nanómetros. Liberado de su freno, el complejo neuronal SNARE de cuatro hélices —VAMP2 vesicular trenzado con sintaxina-1A y SNAP-25— se enrolla desde el extremo N al C obligando a fusionarse ambas bicapas de [[fosfolípidos|phospholipid]]. En medio milisegundo, miles de moléculas de glutamato o acetilcolina cruzan la brecha y abren los canales [[AMPA|real-neuron-ampa]] o [[nAChR|real-neuron-nachr]].',
      blueprint:
        'Rol: Conversor unidireccional electro-químico-eléctrico de 20 nm que conecta terminales axónicos con neuronas receptoras o fibras musculares · Entradas: Potencial de acción terminal, [[Ca²⁺|atom-ca]] extracelular, [[vesículas sinápticas|real-mem-vesicle]] de 40 nm cargadas y ATP [[mitocondrial|mitochondrion]] para reciclaje · Interior: Canales Caᵥ presinápticos, sensor sinaptotagmina, haz SNARE de 4 hélices (PDB 1SFC: VAMP2 + sintaxina-1A + SNAP-25), hendidura acuosa de 20 nm y receptores [[AMPA|real-neuron-ampa]] / [[nAChR|real-neuron-nachr]] · Salida: Pulso cuántico de neurotransmisor que genera despolarización postsináptica en [[neuronas|real-neuron]] o [[músculo|real-muscle]].',
      scientific:
        'Unión sináptica química rápida (hendidura de ~20 nm) entre la zona activa presináptica de una [[neurona|real-neuron]] y la densidad postsináptica o placa motora del [[músculo esquelético|real-muscle]]. La despolarización abre canales Caᵥ tipo P/Q o N creando un microdominio de [[Ca²⁺|atom-ca]] (~10–100 µM) detectado por los dominios C2 de sinaptotagmina-1. El cierre N→C del haz tetrahélico trans-SNARE (cristalografía PDB 1SFC: sinaptobrevina/VAMP2, sintaxina-1A y dos hélices de SNAP-25) vence la repulsión de hidratación (~40–60 k_BT) y libera ~5.000 moléculas de glutamato o acetilcolina por [[vesícula|real-mem-vesicle]] en ~0,2–0,5 ms hacia [[AMPA|real-neuron-ampa]] (PDB 3KG2) y [[nAChR|real-neuron-nachr]] (PDB 2BG9).'
    }
  },

  'real-neuron-ampa': {
    en: {
      simple:
        'The AMPA receptor (GluA2) is a Y-shaped postsynaptic ion channel [[protein|protein]] that binds the neurotransmitter glutamate crossing the [[synapse|real-neuron-synapse]], snapping open to let Na+ enter and excite the next [[neuron|real-neuron]].',
      story:
        'Standing densely along the postsynaptic membrane opposite glutamate-releasing active zones, tetrameric AMPA receptors turn chemical puffs into sub-millisecond electrical currents. Each of its four GluA2 subunits carries a tall extracellular N-terminal arm above a bilobed clam-shell ligand-binding domain tethered straight to the membrane pore. The instant two or more glutamate [[amino acids|amino-acid]] settle inside those clam-shells, the lobes close by roughly twenty degrees, yanking the M3 pore-lining helices outward. Extracellular Na+ rushes down its gradient into the dendrite spine, depolarizing the receiving [[neuron|real-neuron]] toward its -55 mV firing threshold before rapid receptor desensitization and glial uptake clear the [[synaptic cleft|real-neuron-synapse]].',
      blueprint:
        'Role: Fast ionotropic glutamate-gated cation channel mediating primary excitatory synaptic transmission in the central nervous system; Inputs: Presynaptic glutamate (C5H9NO4) released by [[SNARE vesicle fusion|real-neuron-synapse]] and steep inward Na+ electrochemical gradient; Inside: ~400 kDa Y-shaped GluA2 homotetramer (PDB 3KG2) layering extracellular NTD, clam-shell LBD pockets, and M1-M4 transmembrane pore with Q/R-edited M2 selectivity loop; Outputs: Sub-millisecond inward Na+ excitatory postsynaptic potential (EPSP) summed across dendrites toward [[Nav1.7|real-neuron-nav17]] ignition.',
      scientific:
        'Ionotropic alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA) glutamate receptor homotetramer GluA2 (crystal structure PDB 3KG2; ~400 kDa Y-shaped tetramer with two-fold extracellular dimer-of-dimers symmetry transitioning into a four-fold M1-M4 transmembrane cation pore). Binding of presynaptic L-glutamate ([[C/H/N/O|real-spec-atoms]]) induces ~20-degree closure of bilobed S1-S2 ligand-binding domains (LBDs), mechanically pulling M3-S2 linkers to open the gate (<0.5 ms rise time). RNA-edited Arg607 at the M2 Q/R site confers Na+/K+ permeability while blocking [[Ca2+|atom-ca]] entry, driving fast EPSPs across central [[chemical synapses|real-neuron-synapse]].'
    },
    es: {
      simple:
        'El receptor AMPA (GluA2) es un canal iónico postsináptico en forma de Y que capta el neurotransmisor glutamato procedente de la [[sinapsis|real-neuron-synapse]], abriéndose al instante para dejar entrar Na⁺ y excitar a la siguiente [[neurona|real-neuron]].',
      story:
        'Alineados con gran densidad en la membrana postsináptica frente a zonas activas glutamatérgicas, los receptores AMPA tetraméricos traducen ráfagas químicas en corrientes eléctricas en menos de un milisegundo. Cada una de sus cuatro subunidades GluA2 combina un brazo extracelular N-terminal sobre un dominio bilobulado en concha conectado al poro transmembrana. En cuanto dos o más moléculas de glutamato (un [[aminoácido|amino-acid]]) encajan en esas conchas, los lóbulos se cierran unos veinte grados y tiran hacia fuera de las hélices M3. El Na⁺ extracelular entra velozmente en la espina dendrítica acercando a la [[neurona|real-neuron]] al umbral de –55 mV antes de que la desensibilización cierre el pulso.',
      blueprint:
        'Rol: Canal catiónico ionotrópico rápido activado por glutamato que media la transmisión excitadora principal del sistema nervioso central · Entradas: Glutamato presináptico (C₅H₉NO₄) liberado por [[fusión SNARE|real-neuron-synapse]] y gradiente electroquímico entrante de Na⁺ · Interior: Homotetrámero GluA2 en Y de ~400 kDa (PDB 3KG2) con dominio NTD, conchas de unión LBD y poro M1–M4 con bucle M2 editado Q/R · Salida: Potencial postsináptico excitador (PEPS) submilisegundo sumado en dendritas rumbo a la ignición de [[Naᵥ1.7|real-neuron-nav17]].',
      scientific:
        'Receptor ionotrópico de glutamato tipo AMPA homotetramérico GluA2 (cristalografía PDB 3KG2; ~400 kDa en forma de Y con simetría extracelular dímero-de-dímeros acoplada a un poro catiónico tetramérico M1–M4). La unión de L-glutamato ([[C/H/N/O|real-spec-atoms]]) induce el cierre de ~20° en los dominios bilobulados S1–S2 (LBD), traccionando los conectores M3–S2 para abrir el canal (<0,5 ms). La edición de ARN en el sitio Q/R (Arg607 del bucle M2) selecciona Na⁺/K⁺ bloqueando el paso de [[Ca²⁺|atom-ca]] para generar PEPS rápidos en las [[sinapsis químicas|real-neuron-synapse]] centrales.'
    }
  },

  'real-neuron-nachr': {
    en: {
      simple:
        'The nicotinic acetylcholine receptor (nAChR) is a five-subunit ligand-gated channel [[protein|protein]] that opens when two acetylcholine molecules bind, admitting Na+ across the neuromuscular [[synapse|real-neuron-synapse]] to fire [[skeletal muscle|real-muscle]].',
      story:
        'At the neuromuscular junction where a motor [[neuron|real-neuron]] commands a [[skeletal muscle fiber|real-muscle]], speed and reliability must never falter. Packed into dense rows along folded sarcolemmal crests, pentameric nAChR channels span the [[plasma membrane|plasma-membrane]] as a five-subunit ring (two alpha, plus beta, gamma, and delta). When two acetylcholine molecules diffuse across the [[20 nm cleft|real-neuron-synapse]] and nestle into aromatic pockets at both alpha subunit interfaces, a mechanical twist ripples down the beta-sandwich walls and rotates five inner M2 pore helices outward. Widening that central hydrophobic girdle lets Na+ surge into the muscle fiber, firing an end-plate depolarization before cleft acetylcholinesterase clips the transmitter apart.',
      blueprint:
        'Role: Pentameric Cys-loop acetylcholine-gated cation channel translating motor-neuron chemical release into muscle and autonomic depolarization; Inputs: Two presynaptic acetylcholine (ACh) ligands from [[SNARE vesicle fusion|real-neuron-synapse]] plus extracellular Na+ gradient; Inside: ~290 kDa heteropentamer (alpha2-beta-gamma-delta; cryo-EM PDB 2BG9) coupling extracellular interfacial ACh pockets to five pore-lining M2 alpha-helices; Outputs: Rapid inward Na+ end-plate potential igniting [[skeletal muscle|real-muscle]] sarcolemmal excitation and downstream [[sarcomere|real-muscle-sarcomere]] contraction (key target in [[pharmacology|real-pharmacology]]).',
      scientific:
        'Torpedo/muscle-type nicotinic acetylcholine receptor (nAChR; cryo-EM structure PDB 2BG9; ~290 kDa Cys-loop heteropentamer composed of alpha2-beta-gamma-delta subunits, each containing four transmembrane helices M1-M4). Simultaneous binding of two acetylcholine molecules ([[C/H/N/O|real-spec-atoms]]) at the extracellular alpha-gamma and alpha-delta interfaces triggers a concerted subunit rotation transmitted via the Cys-loop to five inner M2 helices, widening the central Leu/Val hydrophobic gate (~0.8 nm). Rapid net Na+ influx (exceeding K+ efflux) generates the neuromuscular end-plate potential driving [[skeletal muscle|real-muscle]] excitation-contraction coupling before acetylcholinesterase terminates signaling in <1 ms.'
    },
    es: {
      simple:
        'El receptor nicotínico de acetilcolina (nAChR) es un canal [[proteico|protein]] de cinco subunidades activado por ligando que se abre al unirse dos moléculas de acetilcolina, dejando entrar Na⁺ en la [[sinapsis|real-neuron-synapse]] neuromuscular para activar el [[músculo esquelético|real-muscle]].',
      story:
        'En la unión neuromuscular donde una [[neurona|real-neuron]] motora ordena contraerse a una [[fibra muscular esquelética|real-muscle]], la velocidad y la fiabilidad deben ser absolutas. Agrupados sobre los pliegues del sarcolema, los canales pentaméricos nAChR atraviesan la [[membrana plasmática|plasma-membrane]] formando un anillo de cinco subunidades (dos alfa, más beta, gamma y delta). Cuando dos moléculas de acetilcolina cruzan la [[hendidura de 20 nm|real-neuron-synapse]] y encajan en las interfaces de ambas subunidades alfa, una torsión recorre las paredes beta y rota las cinco hélices internas M2. Al ensancharse ese estrechamiento hidrofóbico, el Na⁺ entra en la fibra muscular disparando la contracción antes de que la acetilcolinesterasa degrade el transmisor.',
      blueprint:
        'Rol: Canal catiónico pentamérico de bucle Cys activado por acetilcolina que traduce la señal motora química en despolarización muscular y sináptica · Entradas: Dos ligandos de acetilcolina (ACh) liberados por [[fusión SNARE|real-neuron-synapse]] y gradiente extracelular de Na⁺ · Interior: Heteropentámero de ~290 kDa (α₂βγδ; crio-EM PDB 2BG9) que acopla dos bolsillos extracelulares de ACh con cinco hélices internas M2 · Salida: Potencial de placa terminal de Na⁺ que dispara la excitación del [[músculo esquelético|real-muscle]] y del [[sarcómero|real-muscle-sarcomere]] (diana relevante en [[farmacología|real-pharmacology]]).',
      scientific:
        'Receptor nicotínico muscular de acetilcolina (nAChR; crio-EM PDB 2BG9; heteropentámero de ~290 kDa de la superfamilia de bucle Cys formado por subunidades α₂βγδ de cuatro hélices transmembrana M1–M4). La unión cooperativa de dos moléculas de acetilcolina ([[C/H/N/O|real-spec-atoms]]) en las interfaces extracelulares α–γ y α–δ rota las subunidades y transmite el giro vía bucle Cys a las cinco hélices M2 del poro, ampliando el anillo hidrofóbico central (~0,8 nm). La entrada neta de Na⁺ genera el potencial de placa motora que acopla excitación y contracción en el [[músculo esquelético|real-muscle]] antes de la hidrólisis por acetilcolinesterasa (<1 ms).'
    }
  },

  'real-muscle': {
    en: {
      simple:
        'A skeletal muscle fiber is a giant multinucleated human cell packed with cylindrical myofibrils whose repeating [[sarcomeres|real-muscle-sarcomere]] slide [[actin|real-muscle-actin-tropo]] past [[myosin|real-muscle-myosin]] using [[Ca2+|atom-ca]] and ATP to generate voluntary movement.',
      story:
        'Forged during development by fusing hundreds of precursor cells into one giant syncytium, a skeletal muscle fiber flattens its multiple [[nuclei|nucleus]] against the outer sarcolemma where [[H3K27ac chromatin marks|real-epigenetics]] keep MYH1, ACTA1, TNNT3, and RYR1 continuously active. When a motor [[neuron|real-neuron]] fires acetylcholine onto [[nAChR|real-neuron-nachr]], the electrical wave dives down transverse T-tubules and triggers sarcoplasmic reticulum RyR1 channels to flood every [[2.2 um sarcomere|real-muscle-sarcomere]] with [[Ca2+|atom-ca]]. Calcium twists [[troponin and tropomyosin|real-muscle-actin-tropo]] aside so staggered [[Myosin-II|real-muscle-myosin]] heads grab, pull, and reset along actin like a tug-of-war crew pulling hand-over-hand without letting the rope slip back, shortening the fiber until [[SERCA1a pumps|real-muscle-serca]] spend [[mitochondrial|mitochondrion]] ATP to clear Ca2+ and restore rest.',
      blueprint:
        'Role: Multinucleated voluntary contractile actuator (20-100 um wide, mm-cm long) converting neuronal commands and ATP into directional mechanical force; Inputs: Neuromuscular [[nAChR|real-neuron-nachr]] action potentials, [[H3K27ac|real-epigenetics]] contractile transcripts, [[Ca2+|atom-ca]] SR stores, O2 from [[erythrocytes|real-erythrocyte]], and [[mitochondrial|mitochondrion]] ATP; Inside: Sarcolemma, transverse T-tubules, fenestrated sarcoplasmic reticulum (RyR1 + [[SERCA1a|real-muscle-serca]]), and dense myofibrils of repeating [[2.2 um sarcomeres|real-muscle-sarcomere]] ([[Myosin-II|real-muscle-myosin]] + [[Actin-Tropomyosin-Troponin|real-muscle-actin-tropo]]); Outputs: Reversible sliding-filament shortening (2.2 um -> 1.6 um per sarcomere) generating skeletal posture and locomotion.',
      scientific:
        'Human striated skeletal muscle fiber (multinucleated syncytium, 20-100 um diameter, mm-cm length; peripheral [[nuclei|nucleus]] expressing MYH1, ACTA1, TNNT3, RYR1, and ATP2A1 via [[H3K27ac|real-epigenetics]]). Motor-neuron excitation via [[nAChR|real-neuron-nachr]] (PDB 2BG9) propagates down sarcolemmal T-tubules where DHPR mechanically gates sarcoplasmic reticulum RyR1 channels, elevating sarcoplasmic [[Ca2+|atom-ca]] from ~100 nM to ~10 uM. Calcium binding to [[troponin|real-muscle-actin-tropo]] (PDB 6KN8) shifts tropomyosin to license cyclic [[Mg2+|atom-mg]]-ATP hydrolysis by [[Myosin-II S1|real-muscle-myosin]] (PDB 2MYS), sliding thin filaments across repeating [[2.2 um sarcomeres|real-muscle-sarcomere]] (~1.6 um contracted) before [[SERCA1a|real-muscle-serca]] (PDB 1SU4) restores relaxation.'
    },
    es: {
      simple:
        'Una fibra muscular esquelética es una célula humana gigante multinucleada repleta de miofibrillas cilíndricas cuyos [[sarcómeros|real-muscle-sarcomere]] repetidos deslizan [[actina|real-muscle-actin-tropo]] sobre [[miosina|real-muscle-myosin]] con [[Ca²⁺|atom-ca]] y ATP para producir movimiento voluntario.',
      story:
        'Formada al fusionarse cientos de células precursoras en un único sincitio gigante, la fibra muscular esquelética aplana sus múltiples [[núcleos|nucleus]] bajo el sarcolema mientras las [[marcas H3K27ac|real-epigenetics]] mantienen activos MYH1, ACTA1, TNNT3 y RYR1. Cuando una [[neurona|real-neuron]] motora libera acetilcolina sobre [[nAChR|real-neuron-nachr]], la onda eléctrica desciende por los túbulos T y abre los canales RyR1 del retículo sarcoplásmico inundando de [[Ca²⁺|atom-ca]] cada [[sarcómero de 2,2 µm|real-muscle-sarcomere]]. El calcio gira la [[troponina y la tropomiosina|real-muscle-actin-tropo]] para que las cabezas escalonadas de [[miosina-II|real-muscle-myosin]] agarren, tiren y suelten la actina alternando manos como un equipo de tira y afloja sin dejar resbalar la cuerda, acortando la fibra hasta que [[SERCA1a|real-muscle-serca]] bombea de vuelta el calcio con ATP [[mitocondrial|mitochondrion]].',
      blueprint:
        'Rol: Actuador contráctil voluntario multinucleado (20–100 µm de ancho, mm–cm de largo) que convierte órdenes neuronales y ATP en fuerza mecánica direccional · Entradas: Potenciales de placa de [[nAChR|real-neuron-nachr]], transcritos [[H3K27ac|real-epigenetics]], reservas de [[Ca²⁺|atom-ca]] del RS, O₂ de [[eritrocitos|real-erythrocyte]] y ATP [[mitocondrial|mitochondrion]] · Interior: Sarcolema, túbulos T transversos, retículo sarcoplásmico fenestrado (RyR1 + [[SERCA1a|real-muscle-serca]]) y miofibrillas de [[sarcómeros de 2,2 µm|real-muscle-sarcomere]] ([[Miosina-II|real-muscle-myosin]] + [[Actina–Tropomiosina–Troponina|real-muscle-actin-tropo]]) · Salida: Acortamiento reversible por filamentos deslizantes (2,2 µm → 1,6 µm por sarcómero) para postura y locomoción.',
      scientific:
        'Fibra muscular esquelética estriada humana (sincitio multinucleado de 20–100 µm de diámetro y mm–cm de longitud; [[núcleos|nucleus]] periféricos con [[H3K27ac|real-epigenetics]] activo en MYH1, ACTA1, TNNT3, RYR1 y ATP2A1). La señal motora vía [[nAChR|real-neuron-nachr]] (PDB 2BG9) baja por túbulos T acoplando DHPR a los canales RyR1 del retículo sarcoplásmico, elevando el [[Ca²⁺|atom-ca]] de ~100 nM a ~10 µM. El calcio sobre [[troponina|real-muscle-actin-tropo]] (PDB 6KN8) desplaza la tropomiosina y habilita la hidrólisis cíclica de [[Mg²⁺|atom-mg]]–ATP por [[miosina-II S1|real-muscle-myosin]] (PDB 2MYS) en [[sarcómeros de 2,2 µm|real-muscle-sarcomere]] (~1,6 µm contraídos) hasta la relajación mediada por [[SERCA1a|real-muscle-serca]] (PDB 1SU4).'
    }
  },

  'real-muscle-sarcomere': {
    en: {
      simple:
        'A sarcomere is the repeating 2.2 um contractile unit inside a [[skeletal muscle fiber|real-muscle]] stretching from Z-disc to Z-disc. Neither filament shortens; instead, [[Myosin-II|real-muscle-myosin]] slides thin [[actin filaments|real-muscle-actin-tropo]] inward to shrink the unit to 1.6 um.',
      story:
        'Under a microscope, skeletal muscle owes its crisp stripes to thousands of identical 2.2-micrometer sarcomeres wired end to end inside every myofibril. Alpha-actinin Z-discs bracket each unit and anchor opposing thin [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] tracks spanning the light I-band, while a central M-line anchors bipolar thick [[Myosin-II|real-muscle-myosin]] filaments defining the dark A-band and bare H-zone. Giant coiled titin proteins tether every thick filament straight to both Z-discs so the lattice stays centered. When [[Ca2+|atom-ca]] floods in, myosin cross-bridges pull opposing thin filaments toward the M-line: the I-band and H-zone visibly narrow while the A-band stays strictly constant, pulling Z-discs from 2.2 down to 1.6 micrometers until [[SERCA1a|real-muscle-serca]] restores relaxation.',
      blueprint:
        'Role: Repeating 2.2 um hexagonal sliding-filament contractile module translating molecular power strokes into macroscopic muscle shortening; Inputs: Sarcoplasmic [[Ca2+|atom-ca]] trigger (from SR RyR1), [[Mg2+|atom-mg]]-ATP from adjacent [[mitochondria|mitochondrion]], and mechanical anchoring via Z-disc/M-line scaffolds; Inside: Z-disc boundaries, I-band (thin only), constant A-band (1.6 um thick filament span), shrinking H-zone, M-line, elastic titin springs, thick [[Myosin-II|real-muscle-myosin]], and thin [[Actin-Tropomyosin-Troponin|real-muscle-actin-tropo]]; Outputs: Reversible axial shortening (2.2 um relaxed <-> 1.6 um contracted) summed in series across the [[skeletal muscle fiber|real-muscle]].',
      scientific:
        'Striated [[skeletal muscle|real-muscle]] sarcomere (resting length ~2.2 um Z-disc to Z-disc; active contraction down to ~1.6 um via Huxley sliding-filament mechanism without filament length change). Hexagonal crystalline lattice pairing central M-line-anchored bipolar thick [[Myosin-II|real-muscle-myosin]] filaments (~1.6 um constant A-band; PDB 2MYS) with Z-disc alpha-actinin-anchored thin [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] filaments (~1.0 um each; PDB 6KN8) in a 1:2 thick-to-thin hexagonal ratio. Giant ~3.8 MDa elastic titin spans half-sarcomeres (Z-disc to M-line), centering A-bands and restoring resting tension once [[SERCA1a|real-muscle-serca]] (PDB 1SU4) clears [[Ca2+|atom-ca]].'
    },
    es: {
      simple:
        'Un sarcómero es la unidad contráctil repetida de 2,2 µm dentro de una [[fibra muscular esquelética|real-muscle]] entre dos discos Z. Ningún filamento se acorta: la [[miosina-II|real-muscle-myosin]] desliza los filamentos finos de [[actina|real-muscle-actin-tropo]] hacia el centro acortando la unidad a 1,6 µm.',
      story:
        'Al microscopio, el músculo esquelético debe sus bandas regulares a miles de sarcómeros idénticos de 2,2 micrómetros enlazados en serie dentro de cada miofibrilla. Los discos Z de alfa-actinina delimitan cada unidad y anclan filamentos finos de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] en la banda I clara, mientras la línea M central fija filamentos gruesos bipolares de [[miosina-II|real-muscle-myosin]] que definen la banda A oscura y la zona H. Proteínas gigantes elásticas de titina unen cada filamento grueso con ambos discos Z manteniendo el centrado. Al entrar [[Ca²⁺|atom-ca]], los puentes de miosina deslizan los filamentos finos hacia la línea M: la banda I y la zona H se estrechan mientras la banda A permanece constante, acercando los discos Z de 2,2 a 1,6 micrómetros hasta que [[SERCA1a|real-muscle-serca]] relaja el sistema.',
      blueprint:
        'Rol: Módulo contráctil hexagonal repetitivo de 2,2 µm por filamentos deslizantes que suma golpes moleculares en acortamiento muscular macroscópico · Entradas: Disparo de [[Ca²⁺|atom-ca]] sarcoplásmico (desde RyR1), [[Mg²⁺|atom-mg]]–ATP de [[mitocondrias|mitochondrion]] vecinas y anclaje en discos Z y línea M · Interior: Límites de discos Z, banda I (solo finos), banda A constante (1,6 µm de filamentos gruesos), zona H estrechable, línea M, resortes de titina, [[Miosina-II|real-muscle-myosin]] y [[Actina–Tropomiosina–Troponina|real-muscle-actin-tropo]] · Salida: Acortamiento axial reversible (2,2 µm relajado ↔ 1,6 µm contraído) sumado a lo largo de la [[fibra muscular|real-muscle]].',
      scientific:
        'Sarcómero de [[músculo esquelético|real-muscle]] estriado (longitud en reposo ~2,2 µm entre discos Z; acortamiento activo hasta ~1,6 µm por deslizamiento de Huxley sin variar la longitud individual de los filamentos). Red cristalina hexagonal que interdigita filamentos gruesos bipolares de [[miosina-II|real-muscle-myosin]] anclados a la línea M (banda A constante de ~1,6 µm; PDB 2MYS) con filamentos finos de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] (~1,0 µm; PDB 6KN8) anclados por α-actinina en el disco Z en relación 1:2. La titina gigante (~3,8 MDa) enlaza disco Z y línea M aportando retroceso elástico cuando [[SERCA1a|real-muscle-serca]] (PDB 1SU4) retira el [[Ca²⁺|atom-ca]].'
    }
  },

  'real-muscle-myosin': {
    en: {
      simple:
        'Myosin-II is an ATP-powered motor [[protein|protein]] projecting from thick filaments inside every [[sarcomere|real-muscle-sarcomere]]. Each globular S1 head binds exposed [[actin|real-muscle-actin-tropo]], pivots its lever arm to pull the filament inward, and uses fresh ATP to detach and reset.',
      story:
        'Projecting in bipolar arrays from either half of every thick filament, hundreds of Myosin-II S1 motor heads convert chemical bond energy directly into piconewton pulling steps. Each cycle begins when [[Mg2+|atom-mg]]-ATP binds the motor pocket, prying the head off [[F-actin|real-muscle-actin-tropo]] so ATP hydrolysis into ADP and inorganic [[phosphate|atom-p]] cocks the long light-chain lever arm backward into a high-energy pre-stroke angle. Once [[Ca2+|atom-ca]] clears tropomyosin from the thin filament, the cocked head locks onto actin and releases inorganic phosphate, snapping its lever arm through a ~10-nanometer power stroke that slides the thin filament toward the M-line before ADP exits and a new ATP molecule restarts the stroke.',
      blueprint:
        'Role: Bipolar ATP-hydrolyzing molecular motor converting phosphoanhydride bond cleavage into directional ~10 nm cross-bridge power strokes; Inputs: Exposed myosin-binding footprints on [[Ca2+-activated F-actin|real-muscle-actin-tropo]] plus cytosolic [[Mg2+|atom-mg]]-ATP from [[mitochondria|mitochondrion]]; Inside: Myosin-II subfragment-1 (S1) catalytic motor domain + essential/regulatory light-chain lever arm (PDB 2MYS) cycling through detached, cocked, power-stroke, and rigor states; Outputs: Piconewton axial tension sliding thin filaments inward across the [[sarcomere|real-muscle-sarcomere]] plus released ADP and [[Pi|atom-p]] recycled by [[ATP synthase|real-bio-atpsynth]].',
      scientific:
        'Skeletal muscle Myosin-II subfragment-1 (S1) motor head (crystal structure PDB 2MYS; ~130 kDa catalytic heavy-chain head bound to essential ELC and regulatory RLC calmodulin-like light chains forming an ~8.5 nm alpha-helical lever arm) assembled in bipolar thick filaments within each [[sarcomere|real-muscle-sarcomere]]. Executes the Lymn-Taylor chemomechanical ATPase cycle: (1) [[Mg2+|atom-mg]]-ATP binding opens the 50 kDa actin-binding cleft to dissociate rigor cross-bridges; (2) ATP -> ADP + [[Pi|atom-p]] hydrolysis rotates the converter ~60 degrees into the pre-power-stroke state; (3) strong binding to [[F-actin|real-muscle-actin-tropo]] triggers Pi release and an ~8-10 nm lever-arm swing (~3-5 pN force); (4) ADP release precedes the next ATP binding.'
    },
    es: {
      simple:
        'La miosina-II es una [[proteína|protein]] motora impulsada por ATP que sobresale de los filamentos gruesos de cada [[sarcómero|real-muscle-sarcomere]]. Cada cabeza globular S1 se une a la [[actina|real-muscle-actin-tropo]] expuesta, gira su brazo palanca para tirar del filamento y usa ATP nuevo para soltarse y rearmarse.',
      story:
        'Proyectadas en arreglos bipolares a ambos lados de cada filamento grueso, cientos de cabezas motoras S1 de miosina-II convierten energía química directamente en pasos de tracción de piconewtons. Cada ciclo arranca cuando el [[Mg²⁺|atom-mg]]–ATP entra en el bolsillo catalítico y despega la cabeza de la [[F-actina|real-muscle-actin-tropo]]; al hidrolizarse en ADP y [[fosfato|atom-p]] inorgánico, el brazo palanca revestido de cadenas ligeras se arma hacia atrás. En cuanto el [[Ca²⁺|atom-ca]] retira la tropomiosina, la cabeza armada se fija a la actina y expulsa el fosfato, ejecutando un golpe de fuerza de ~10 nanómetros hacia la línea M antes de liberar ADP y tomar un nuevo ATP.',
      blueprint:
        'Rol: Motor molecular bipolar dependiente de ATP que transforma la hidrólisis de enlaces fosfoanhídrido en golpes de fuerza direccionales de ~10 nm · Entradas: Sitios expuestos en [[F-actina activada por Ca²⁺|real-muscle-actin-tropo]] y [[Mg²⁺|atom-mg]]–ATP citosólico de las [[mitocondrias|mitochondrion]] · Interior: Dominio motor S1 de miosina-II y brazo palanca con cadenas ligeras esencial y reguladora (PDB 2MYS) alternando estados desacoplado, armado, golpe de fuerza y rigor · Salida: Tensión axial que desliza filamentos finos en el [[sarcómero|real-muscle-sarcomere]] más ADP y [[Pᵢ|atom-p]] reciclados por la [[ATP sintasa|real-bio-atpsynth]].',
      scientific:
        'Cabeza motora subfragmento-1 (S1) de miosina-II de músculo esquelético (cristalografía PDB 2MYS; dominio catalítico de cadena pesada de ~130 kDa unido a cadenas ligeras ELC y RLC sobre una palanca α-helicoidal de ~8,5 nm) en los filamentos gruesos bipolares del [[sarcómero|real-muscle-sarcomere]]. Ejecuta el ciclo quimiomecánico de Lymn–Taylor: (1) la unión de [[Mg²⁺|atom-mg]]–ATP abre la hendidura de unión a actina y rompe el estado de rigor; (2) la hidrólisis ATP → ADP + [[Pᵢ|atom-p]] gira el convertidor ~60° al estado pre-golpe; (3) el anclaje fuerte a [[F-actina|real-muscle-actin-tropo]] libera Pᵢ disparando un giro de ~8–10 nm (~3–5 pN); (4) la salida de ADP deja libre el sitio para el siguiente ATP.'
    }
  },

  'real-muscle-actin-tropo': {
    en: {
      simple:
        'The thin muscle filament pairs a twisted F-actin cable with regulatory tropomyosin strands and troponin [[Ca2+|atom-ca]] sensors. At rest tropomyosin shields actin from [[Myosin-II|real-muscle-myosin]], and when Ca2+ arrives troponin rolls the cable aside to unlock contraction.',
      story:
        'Inside a resting [[skeletal muscle fiber|real-muscle]], [[Myosin-II|real-muscle-myosin]] heads are already cocked with ADP and phosphate, eager to pull, so the cell needs an atomic safety lock right along the thin filament. Double-helical F-actin strands anchored at the Z-disc are draped end-to-end by coiled-coil tropomyosin cables, with one three-subunit troponin complex (TnT, TnI, and TnC) clipped every seven actin monomers. At resting ~100 nM [[Ca2+|atom-ca]], inhibitory TnI pins tropomyosin right across the myosin binding footprints. The instant SR RyR1 channels flood ~10 uM Ca2+, ions lock into TnC EF-hand pockets, pulling TnI away and rolling tropomyosin ~25 degrees into the actin groove so myosin cross-bridges can engage.',
      blueprint:
        'Role: Ca2+-regulated thin-filament contractile track gating steric access of Myosin-II S1 heads to F-actin; Inputs: Z-disc mechanical tether, G-actin [[protein|protein]] monomers, coiled-coil tropomyosin, heterotrimeric troponin, and sarcoplasmic [[Ca2+|atom-ca]] sparks; Inside: Double-helical F-actin-tropomyosin-troponin complex (cryo-EM PDB 6KN7 Ca2+-free blocked vs PDB 6KN8 Ca2+-bound open state) rotating tropomyosin ~25 degrees azimuthally; Outputs: Binary steric switch licensing [[Myosin-II|real-muscle-myosin]] sliding across the [[sarcomere|real-muscle-sarcomere]] until [[SERCA1a|real-muscle-serca]] depletes Ca2+.',
      scientific:
        'Striated muscle thin-filament regulatory assembly (cryo-EM structures PDB 6KN7 Ca2+-free blocked state and PDB 6KN8 Ca2+-activated open state) anchored at Z-discs within every [[sarcomere|real-muscle-sarcomere]]. Built from double-helical filamentous F-actin (~42 kDa globular monomers, ~37 nm half-helical repeat) wrapped by head-to-tail ~40 nm alpha-helical coiled-coil tropomyosin dimers (1 dimer per 7 actin subunits) and heterotrimeric troponin (tropomyosin-binding TnT, actin-inhibiting TnI, and [[Ca2+|atom-ca]]-sensing EF-hand TnC). Binding of two regulatory [[Ca2+|atom-ca]] ions to N-terminal TnC EF-hands releases the TnI switch peptide from actin, shifting tropomyosin ~25 degrees azimuthally to uncover [[Myosin-II S1|real-muscle-myosin]] binding sites.'
    },
    es: {
      simple:
        'El filamento fino muscular combina una hélice doble de F-actina con cables reguladores de tropomiosina y sensores troponina de [[Ca²⁺|atom-ca]]. En reposo la tropomiosina tapa la actina frente a la [[miosina-II|real-muscle-myosin]], y al llegar calcio la troponina aparta el cable para iniciar la contracción.',
      story:
        'Dentro de una [[fibra muscular|real-muscle]] en reposo, las cabezas de [[miosina-II|real-muscle-myosin]] ya están armadas con ADP y fosfato listas para tirar, por lo que la célula necesita un bloqueo molecular exacto sobre el filamento fino. Los filamentos helicoidales de F-actina anclados al disco Z van recubiertos por cables de tropomiosina en hélice superenrollada con un complejo de troponina (TnT, TnI y TnC) cada siete monómeros de actina. Con ~100 nM de [[Ca²⁺|atom-ca]] en reposo, la subunidad inhibidora TnI sujeta la tropomiosina justo sobre los sitios de unión de miosina. Cuando RyR1 inunda el sarcoplasma con ~10 µM de Ca²⁺, los iones encajan en los bolsillos EF de TnC, despegan a TnI y ruedan la tropomiosina ~25° hacia el surco liberando la pista contráctil.',
      blueprint:
        'Rol: Pista contráctil del filamento fino regulada por Ca²⁺ que controla el acceso estérico de la miosina-II a la F-actina · Entradas: Anclaje mecánico del disco Z, monómeros [[proteicos|protein]] de actina, tropomiosina, troponina heterotrimérica y pulsos de [[Ca²⁺|atom-ca]] sarcoplásmico · Interior: Complejo F-actina–tropomiosina–troponina (crio-EM PDB 6KN7 bloqueado sin Ca²⁺ frente a PDB 6KN8 abierto con Ca²⁺) que gira la tropomiosina ~25° · Salida: Interruptor estérico binario que habilita el deslizamiento de [[miosina-II|real-muscle-myosin]] en el [[sarcómero|real-muscle-sarcomere]] hasta que [[SERCA1a|real-muscle-serca]] retira el calcio.',
      scientific:
        'Complejo regulador del filamento fino del músculo estriado (crio-EM PDB 6KN7 estado bloqueado sin Ca²⁺ y PDB 6KN8 estado abierto con Ca²⁺) anclado a los discos Z del [[sarcómero|real-muscle-sarcomere]]. Integra F-actina bicatenaria helicoidal (monómeros de ~42 kDa, paso medio de ~37 nm) rodeada por dímeros en hélice superenrollada de tropomiosina de ~40 nm (1 dímero cada 7 actinas) y troponina heterotrimérica (TnT de anclaje, TnI inhibidora y TnC sensora con manos EF de [[Ca²⁺|atom-ca]]). La unión de dos iones [[Ca²⁺|atom-ca]] en el dominio N-terminal de TnC libera el péptido interruptor TnI y desplaza la tropomiosina ~25° exponiendo los sitios de [[miosina-II S1|real-muscle-myosin]].'
    }
  },

  'real-muscle-serca': {
    en: {
      simple:
        'SERCA1a is an ATP-driven calcium pump [[protein|protein]] embedded in the sarcoplasmic reticulum of [[skeletal muscle fibers|real-muscle]]. After each contraction, it actively pumps two [[Ca2+|atom-ca]] ions back into storage per ATP spent so the [[sarcomere|real-muscle-sarcomere]] can relax.',
      story:
        'A muscle that cannot relax quickly is useless for walking, breathing, or playing an instrument. Packing over half the membrane protein of the fenestrated sarcoplasmic reticulum surrounding every [[sarcomere|real-muscle-sarcomere]], SERCA1a works tirelessly to terminate contraction. Using cytosolic A, N, and P domains coupled to ten transmembrane helices, each pump captures two sarcoplasmic [[Ca2+|atom-ca]] ions into high-affinity intramembrane oxygen pockets, transfers the gamma-[[phosphate|atom-p]] of [[Mg2+|atom-mg]]-ATP onto aspartate-351, and swings its transmembrane gates into the E2P state to eject both Ca2+ ions against a ten-thousand-fold gradient into the SR lumen. Within milliseconds cytosolic Ca2+ drops back to ~100 nM, [[troponin-tropomyosin|real-muscle-actin-tropo]] snaps back over actin, and elastic titin lengthens the fiber back to 2.2 micrometers.',
      blueprint:
        'Role: High-capacity SR P-type Ca2+-ATPase driving rapid active muscle relaxation and replenishing luminal Ca2+ stores; Inputs: Elevated sarcoplasmic [[Ca2+|atom-ca]] (~10 uM post-contraction) plus cytosolic [[Mg2+|atom-mg]]-ATP from [[mitochondria|mitochondrion]]; Inside: ~110 kDa 10-TM SERCA1a pump (PDB 1SU4) coupling cytosolic A/N/P phosphorylation domains (Asp351) to two transmembrane Ca2+-binding sites cycling E1 -> E1P -> E2P -> E2; Outputs: 2 Ca2+ sequestered into the SR lumen per 1 ATP hydrolyzed (against >10,000-fold gradient), resetting [[troponin-tropomyosin|real-muscle-actin-tropo]] blockade and [[sarcomere|real-muscle-sarcomere]] rest.',
      scientific:
        'Sarco/Endoplasmic Reticulum Ca2+-ATPase isoform 1a (SERCA1a; rabbit skeletal crystal structure PDB 1SU4 in E1-2Ca2+ state; ~110 kDa single-polypeptide P-type II ATPase comprising 10 transmembrane helices M1-M10 and cytosolic actuator A, nucleotide-binding N, and phosphorylation P domains) densely packed in the SR membrane of [[skeletal muscle fibers|real-muscle]]. Mechanistically homologous to [[Na+/K+-ATPase|real-mem-nak]] in [[membrane transport|real-membrane-transport]], SERCA1a hydrolyzes 1 [[Mg2+|atom-mg]]-ATP via transient Asp351 aspartyl-phosphate formation to pump 2 [[Ca2+|atom-ca]] from sarcoplasm (~100 nM resting) into SR lumen (~1 mM, buffered by calsequestrin) while counter-transporting 2-3 [[H+|atom-h]], rapidly re-establishing [[troponin-tropomyosin|real-muscle-actin-tropo]] inhibition.'
    },
    es: {
      simple:
        'SERCA1a es una bomba de calcio impulsada por ATP incrustada en el retículo sarcoplásmico de las [[fibras musculares|real-muscle]]. Tras cada contracción, devuelve activamente dos iones [[Ca²⁺|atom-ca]] al almacén por cada ATP gastado para que el [[sarcómero|real-muscle-sarcomere]] se relaje.',
      story:
        'Un músculo incapaz de relajarse al instante no sirve para caminar, respirar ni coordinar gestos finos. Representando más de la mitad de las proteínas de membrana del retículo sarcoplásmico que envuelve cada [[sarcómero|real-muscle-sarcomere]], SERCA1a trabaja sin descanso para apagar la contracción. Sus dominios citosólicos A, N y P acoplados a diez hélices transmembrana atrapan dos iones [[Ca²⁺|atom-ca]] sarcoplásmicos, transfieren el [[fosfato|atom-p]] gamma del [[Mg²⁺|atom-mg]]–ATP al aspartato 351 y pivotan al estado E2P para expulsar ambos calcio contra un gradiente de diez mil veces hacia el lumen del RS. En milisegundos el Ca²⁺ cae a ~100 nM, la [[troponina–tropomiosina|real-muscle-actin-tropo]] vuelve a cubrir la actina y la titina devuelve la longitud de 2,2 micrómetros.',
      blueprint:
        'Rol: Bomba Ca²⁺-ATPasa tipo P de alta capacidad en el RS que ejecuta la relajación muscular activa y recarga las reservas luminales · Entradas: [[Ca²⁺|atom-ca]] sarcoplásmico elevado (~10 µM tras la contracción) y [[Mg²⁺|atom-mg]]–ATP citosólico de las [[mitocondrias|mitochondrion]] · Interior: Bomba SERCA1a de ~110 kDa y 10 hélices TM (PDB 1SU4) con dominios A/N/P (Asp351) acoplados a dos sitios de Ca²⁺ en ciclo E1 → E1P → E2P → E2 · Salida: 2 Ca²⁺ secuestrados en el lumen del RS por cada ATP hidrolizado (contra un gradiente >10.000×), restaurando el bloqueo de [[troponina–tropomiosina|real-muscle-actin-tropo]] y el reposo del [[sarcómero|real-muscle-sarcomere]].',
      scientific:
        'Ca²⁺-ATPasa del retículo sarco/endoplásmico isoforma 1a (SERCA1a; cristalografía de músculo esquelético PDB 1SU4 en estado E1–2Ca²⁺; ATPasa tipo P II de ~110 kDa con 10 hélices transmembrana M1–M10 y dominios citosólicos actuador A, nucleotídico N y de fosforilación P) en [[fibras musculares esqueléticas|real-muscle]]. Homóloga mecanística de la [[Na⁺/K⁺-ATPasa|real-mem-nak]] del [[transporte de membrana|real-membrane-transport]], hidroliza 1 [[Mg²⁺|atom-mg]]–ATP fosforilando Asp351 para bombear 2 [[Ca²⁺|atom-ca]] del sarcoplasma (~100 nM) al lumen del RS (~1 mM, tamponado por calsecuestrina) intercambiando 2–3 [[H⁺|atom-h]] y restableciendo la inhibición por [[troponina–tropomiosina|real-muscle-actin-tropo]].'
    }
  },

  'real-spec-atoms': {
    en: {
      simple:
        'At the 0.1-0.5 nm atomic scale, every signal and motion across [[specialized human cells|specialized-cells-overview]] comes down to tiny ions and chemical tags: [[Ca2+|atom-ca]] triggers, [[Fe2+|atom-fe]] oxygen carriers, [[Mg2+|atom-mg]]-ATP bonds, Na+/K+ currents, and [[C/H/N/O|atom-c]] neurotransmitter and histone marks.',
      story:
        'Zooming past whole organs, tissues, and giant PDB protein assemblies reveals that all four [[specialized human cells|specialized-cells-overview]] run on the exact same atomic toolkit. A three-atom acetyl tag (-COCH3) built from [[carbon|atom-c]], [[hydrogen|atom-h]], and [[oxygen|atom-o]] neutralizes lysine charge to open [[H3K27ac euchromatin|real-epigenetics]]. Monovalent Na+ and K+ ions distinguished by a 0.036-nanometer radius gap power [[Nav1.7|real-neuron-nav17]] and [[Kv1.2|real-neuron-kv12]], while [[nitrogen|atom-n]]-bearing glutamate and acetylcholine open [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]]. Octahedrally coordinated [[Ca2+|atom-ca]] switches both synaptic fusion and [[troponin|real-muscle-actin-tropo]], [[Mg2+|atom-mg]] stabilizes gamma-[[phosphorus|atom-p]] cleavage in [[Myosin-II|real-muscle-myosin]] and [[SERCA1a|real-muscle-serca]], and heme [[iron|atom-fe]] reversibly grips O2 inside [[erythrocytes|real-erythrocyte]].',
      blueprint:
        'Role: Fundamental 0.1-0.5 nm ionic, covalent, and cofactor currency unifying gene regulation, electrical signaling, force generation, and gas transport; Inputs: Essential biological elements ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]]) plus metal ions ([[Ca2+|atom-ca]], [[Mg2+|atom-mg]], [[Fe2+|atom-fe]], Na+, K+); Inside: Covalent H3K27ac acetyl (-COCH3) vs H3K27me3 methyl tags, L-glutamate (C5H9NO4) & acetylcholine ligands, EF-hand Ca2+ oxygen cages, Mg2+-ATP gamma-phosphate hydrolysis, and heme Fe2+-O2 bonds; Outputs: Exact physical forces driving [[epigenetics|real-epigenetics]], [[neuron synapses|real-neuron-synapse]], [[muscle sarcomeres|real-muscle-sarcomere]], [[erythrocytes|real-erythrocyte]], and [[enterocytes|real-enterocyte]].',
      scientific:
        'Sub-nanometer atomic foundation (0.1-0.5 nm) of human cellular specialization across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]], [[Ca2+|atom-ca]], [[Mg2+|atom-mg]], [[Fe2+|atom-fe]], Na+, and K+. Integrates: (1) lysine-27 acetylation (-COCH3) vs trimethylation (-N(CH3)3+) governing [[chromatin|real-epigenetics]] electrostatics; (2) ionic radius discrimination (Na+ 0.102 nm vs K+ 0.138 nm) and [[H2O|water]] solvation shells gating [[Nav1.7|real-neuron-nav17]] and [[Kv1.2|real-neuron-kv12]]; (3) L-glutamate (C5H9NO4) and acetylcholine (C7H16NO2+) binding [[AMPA|real-neuron-ampa]]/[[nAChR|real-neuron-nachr]]; (4) heptacoordinate [[Ca2+|atom-ca]] oxygen ligation in synaptotagmin and [[TnC|real-muscle-actin-tropo]]; (5) [[Mg2+|atom-mg]]-ATP gamma-[[PO4|atom-p]] cleavage in [[Myosin-II|real-muscle-myosin]]/[[SERCA1a|real-muscle-serca]]; and (6) reversible octahedral heme [[Fe2+|atom-fe]]-O2 binding in [[erythrocytes|real-erythrocyte]].'
    },
    es: {
      simple:
        'A escala atómica de 0,1 a 0,5 nm, cada señal y movimiento de las [[células humanas especializadas|specialized-cells-overview]] se reduce a pequeños iones y grupos químicos: disparadores de [[Ca²⁺|atom-ca]], portadores de oxígeno con [[Fe²⁺|atom-fe]], enlaces [[Mg²⁺|atom-mg]]–ATP, corrientes de Na⁺/K⁺ y etiquetas de [[C/H/N/O|atom-c]].',
      story:
        'Al acercarnos más allá de tejidos y complejos proteicos PDB descubrimos que las cuatro [[células especializadas|specialized-cells-overview]] operan con el mismo repertorio atómico. Un grupo acetilo (–COCH₃) de [[carbono|atom-c]], [[hidrógeno|atom-h]] y [[oxígeno|atom-o]] neutraliza la lisina para abrir la [[eucromatina H3K27ac|real-epigenetics]]. Los iones Na⁺ y K⁺, separados por apenas 0,036 nanómetros de radio, impulsan [[Naᵥ1.7|real-neuron-nav17]] y [[Kᵥ1.2|real-neuron-kv12]], mientras glutamato y acetilcolina con [[nitrógeno|atom-n]] abren [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]]. El [[Ca²⁺|atom-ca]] coordinado por oxígenos dispara tanto la fusión sináptica como la [[troponina|real-muscle-actin-tropo]], el [[Mg²⁺|atom-mg]] estabiliza la ruptura del [[fósforo|atom-p]] gamma en [[miosina-II|real-muscle-myosin]] y [[SERCA1a|real-muscle-serca]], y el [[hierro|atom-fe]] hemo transporta O₂ en los [[eritrocitos|real-erythrocyte]].',
      blueprint:
        'Rol: Divisa atómica, iónica y covalente fundamental de 0,1–0,5 nm que unifica regulación génica, señalización eléctrica, fuerza mecánica y transporte de O₂ · Entradas: Elementos biológicos esenciales ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]]) e iones metálicos ([[Ca²⁺|atom-ca]], [[Mg²⁺|atom-mg]], [[Fe²⁺|atom-fe]], Na⁺, K⁺) · Interior: Marcas covalentes H3K27ac (–COCH₃) y H3K27me3, ligandos glutamato (C₅H₉NO₄) y acetilcolina, jaulas de oxígeno EF para Ca²⁺, hidrólisis Mg²⁺–ATP y enlace hemo Fe²⁺–O₂ · Salida: Fuerzas físicas directas en [[epigenética|real-epigenetics]], [[sinapsis|real-neuron-synapse]], [[sarcómeros|real-muscle-sarcomere]], [[eritrocitos|real-erythrocyte]] y [[enterocitos|real-enterocyte]].',
      scientific:
        'Base atómica subnanométrica (0,1–0,5 nm) de la especialización celular humana sobre [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]], [[Ca²⁺|atom-ca]], [[Mg²⁺|atom-mg]], [[Fe²⁺|atom-fe]], Na⁺ y K⁺. Integra: (1) acetilación (–COCH₃) frente a trimetilación (–N(CH₃)₃⁺) en Lys27 regulando la electrostática [[epigenética|real-epigenetics]]; (2) discriminación de radio iónico (Na⁺ 0,102 nm vs K⁺ 0,138 nm) y solvatación en [[H₂O|water]] en [[Naᵥ1.7|real-neuron-nav17]] y [[Kᵥ1.2|real-neuron-kv12]]; (3) L-glutamato y acetilcolina sobre [[AMPA|real-neuron-ampa]]/[[nAChR|real-neuron-nachr]]; (4) coordinación de [[Ca²⁺|atom-ca]] en sinaptotagmina y [[TnC|real-muscle-actin-tropo]]; (5) hidrólisis de [[Mg²⁺|atom-mg]]–ATP ([[P|atom-p]]) en [[miosina-II|real-muscle-myosin]]/[[SERCA1a|real-muscle-serca]]; y (6) unión reversible hemo [[Fe²⁺|atom-fe]]–O₂ en [[eritrocitos|real-erythrocyte]].'
    }
  }
};

export const SPECIALIZED_CELLS_PART_LENSES: Record<string, Record<string, BilingualPartLens>> = {
  'neuron_realistic.html': {
    dendrites: {
      en: {
        subtitle: 'Branching Spiny Dendritic Arbor (Signal Inputs)',
        simple:
          'Branching dendrites extend outward from the [[neuron|real-neuron]] cell body and bristle with tiny spines that receive chemical inputs across thousands of upstream [[synapses|real-neuron-synapse]], converting them into graded voltage shifts.',
        story:
          'Radiating across the surrounding tissue, the dendritic arbor dramatically expands the receiving surface area of every [[multipolar neuron|real-neuron]]. Each microscopic spine houses a dense cluster of postsynaptic receptors including [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] anchored directly opposite upstream axon terminals. Whenever excitatory glutamate or acetylcholine opens those channels, inward Na+ currents generate localized graded potentials that spread passively through the dendritic cytoplasm toward the soma and axon hillock to compete against inhibitory inputs.',
        blueprint: {
          role: 'High-surface-area postsynaptic antenna collecting and summing thousands of excitatory and inhibitory synaptic currents',
          arrivesFrom: 'Neurotransmitter pulses crossing upstream [[20 nm chemical synapses|real-neuron-synapse]] onto spine [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] pores',
          inside: 'Tapering [[plasma membrane|plasma-membrane]] branches stabilized by [[microtubules|microtubule]] and cortical [[cytoskeleton|cytoskeleton]] studded with postsynaptic densities',
          deliversTo: 'Spatially and temporally summed graded depolarizations flowing passively into the soma and axon hillock',
          loop: 'Repeated coordinated spine activation remodels local receptor density, strengthening synaptic throughput during learning'
        },
        scientific:
          'Branched dendritic tree (1-5 um proximal shafts tapering to <0.5 um distal tips, studded with ~10^3-10^4 ~1 um actin-rich dendritic spines) on human [[multipolar neurons|real-neuron]]. Spine heads concentrate ionotropic [[AMPA|real-neuron-ampa]] (PDB 3KG2), NMDA, and [[nAChR|real-neuron-nachr]] (PDB 2BG9) channels supported by bidirectional [[microtubule|microtubule]] transport. Passive electrotonic spread integrates excitatory postsynaptic potentials (EPSPs) and inhibitory IPSPs across space and time before reaching the axon initial segment.',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Upstream Synapses', cargo: 'Neurotransmitter pulses' },
          { nodeId: 'real-neuron-ampa', label: 'Spine AMPA Channels', cargo: 'Graded Na+ influx' }
        ],
        to: [
          { nodeId: 'real-neuron', label: 'Neuron Soma & Hillock', cargo: 'Summed voltage currents' },
          { nodeId: 'real-neuron-nav17', label: 'Threshold Ignition', cargo: 'Depolarization past -55 mV' }
        ]
      },
      es: {
        subtitle: 'Árbol dendrítico espinoso (Entradas de señal)',
        simple:
          'Las dendritas ramificadas nacen del cuerpo celular [[neuronal|real-neuron]] y se cubren de diminutas espinas que reciben mensajes químicos de miles de [[sinapsis|real-neuron-synapse]], transformándolos en cambios graduados de voltaje.',
        story:
          'Al desplegarse por el tejido circundante, el árbol dendrítico multiplica enormemente la superficie receptora de cada [[neurona multipolar|real-neuron]]. Cada espina microscópica concentra receptores postsinápticos como [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]] alineados frente a terminales axónicos previos. Cada vez que el glutamato o la acetilcolina abren esos canales, la entrada de Na⁺ genera potenciales graduados locales que se difunden de forma pasiva por el citoplasma dendrítico hacia el soma y el cono axónico, donde se suman frente a señales inhibidoras.',
        blueprint: {
          role: 'Antena postsináptica de gran superficie que capta e integra miles de corrientes sinápticas excitadoras e inhibidoras',
          arrivesFrom: 'Pulsos de neurotransmisor que cruzan [[sinapsis químicas de 20 nm|real-neuron-synapse]] hacia poros [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]]',
          inside: 'Ramas ahusadas de [[membrana plasmática|plasma-membrane]] sostenidas por [[microtúbulos|microtubule]] y [[citoesqueleto|cytoskeleton]] con densidades postsinápticas',
          deliversTo: 'Despolarizaciones graduadas sumadas en espacio y tiempo hacia el soma y el cono axónico',
          loop: 'La activación repetida de una espina reorganiza su densidad de receptores, reforzando la eficacia sináptica en el aprendizaje'
        },
        scientific:
          'Árbol dendrítico ramificado (troncos proximales de 1–5 µm hasta puntas <0,5 µm con ~10³–10⁴ espinas de ~1 µm ricas en actina) en [[neuronas multipolares|real-neuron]] humanas. Las cabezas espinosas concentran canales ionotrópicos [[AMPA|real-neuron-ampa]] (PDB 3KG2), NMDA y [[nAChR|real-neuron-nachr]] (PDB 2BG9) abastecidos por [[microtúbulos|microtubule]]. La propagación electrotónica pasiva integra PEPS y PIPS en espacio y tiempo hacia el segmento inicial del axón.',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Sinapsis entrantes', cargo: 'Pulsos de neurotransmisor' },
          { nodeId: 'real-neuron-ampa', label: 'Canales AMPA espinosos', cargo: 'Entrada graduada de Na⁺' }
        ],
        to: [
          { nodeId: 'real-neuron', label: 'Soma y cono axónico', cargo: 'Corrientes sumadas' },
          { nodeId: 'real-neuron-nav17', label: 'Ignición umbral', cargo: 'Despolarización sobre –55 mV' }
        ]
      }
    },

    soma: {
      en: {
        subtitle: 'Neuronal Cell Body / Soma (15-50 um Biosynthetic Hub)',
        simple:
          'The soma is the central 15-50 um body of the [[neuron|real-neuron]] housing its [[nucleus|nucleus]], abundant [[80S ribosomes|real-cd-ribo80]], and [[mitochondria|mitochondrion]] to manufacture channels, vesicles, and ATP for the entire axon.',
        story:
          'Because a human axon can extend a full meter away from the cell body, the neuronal soma operates as a nonstop biosynthetic headquarters. Inside its 15-to-50-micrometer chamber, [[H3K27ac chromatin|real-epigenetics]] directs continuous transcription of channel and synaptic transcripts exported to dense cytosolic [[80S ribosomes|real-cd-ribo80]] and rough membranes, producing [[Nav1.7|real-neuron-nav17]], [[Kv1.2|real-neuron-kv12]], and SNARE [[proteins|protein]]. Newly assembled membrane cargo packs into [[vesicles|vesicle]] loaded onto axonal [[microtubules|microtubule]], while somatic [[mitochondria|mitochondrion]] oxidize [[glucose|glucose]] to feed relentless electrical signaling.',
        blueprint: {
          role: 'Metabolic, transcriptional, and electrical-integration core sustaining long-lived post-mitotic neurons',
          arrivesFrom: 'Summed dendritic voltage currents, capillary O2 from [[erythrocytes|real-erythrocyte]], and [[glucose|glucose]] plus [[amino acids|amino-acid]]',
          inside: 'Large euchromatic [[nucleus|nucleus]], dense Nissl [[80S ribosomes|real-cd-ribo80]], Golgi vesicle sorting, and abundant aerobic [[mitochondria|mitochondrion]]',
          deliversTo: 'Integrated voltage to the axon hillock plus newly synthesized channels, [[vesicles|vesicle]], and [[mitochondria|mitochondrion]] shipped down [[microtubules|microtubule]]',
          loop: 'Retrograde signals returning from distant terminals continuously adjust somatic gene expression to match synaptic demand'
        },
        scientific:
          'Neuronal perikaryon/soma (15-50 um diameter) of a post-mitotic human [[multipolar neuron|real-neuron]]. Houses an euchromatin-rich [[nucleus|nucleus]] ([[H3K27ac|real-epigenetics]]), prominent Nissl bodies (dense rough-ER and cytosolic [[80S ribosomes|real-cd-ribo80]] translating [[Nav1.7|real-neuron-nav17]], [[Kv1.2|real-neuron-kv12]], and SNARE [[proteins|protein]]), extensive Golgi apparatus packaging [[synaptic vesicle|real-mem-vesicle]] precursors, and high-density [[mitochondria|mitochondrion]] generating ~30-32 ATP/[[glucose|glucose]] via [[bioenergetics|real-bioenergetics]].',
        from: [
          { nodeId: 'real-epigenetics', label: 'Somatic Chromatin', cargo: 'H3K27ac neuronal mRNAs' },
          { nodeId: 'real-bioenergetics', label: 'Aerobic ATP Supply', cargo: 'Glucose oxidation fuel' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: '80S Protein Synthesis', cargo: 'Channel & SNARE proteins' },
          { nodeId: 'microtubule', label: 'Axonal Cargo Dispatch', cargo: 'Vesicles & mitochondria' }
        ]
      },
      es: {
        subtitle: 'Cuerpo celular o soma neuronal (Centro biosintético de 15–50 µm)',
        simple:
          'El soma es el cuerpo central de 15 a 50 µm de la [[neurona|real-neuron]] que alberga el [[núcleo|nucleus]], abundantes [[ribosomas 80S|real-cd-ribo80]] y [[mitocondrias|mitochondrion]] para fabricar canales, vesículas y ATP para todo el axón.',
        story:
          'Dado que un axón humano puede extenderse hasta un metro lejos del cuerpo celular, el soma neuronal funciona como una central biosintética ininterrumpida. Dentro de su cámara de 15 a 50 micrómetros, la [[cromatina H3K27ac|real-epigenetics]] dirige la transcripción continua de mensajeros hacia densos [[ribosomas 80S|real-cd-ribo80]], fabricando [[Naᵥ1.7|real-neuron-nav17]], [[Kᵥ1.2|real-neuron-kv12]] y [[proteínas|protein]] SNARE. Los nuevos cargamentos se empaquetan en [[vesículas|vesicle]] montadas sobre [[microtúbulos|microtubule]] axónicos, mientras las [[mitocondrias|mitochondrion]] somáticas oxidan [[glucosa|glucose]] para sostener la actividad eléctrica.',
        blueprint: {
          role: 'Núcleo metabólico, transcripcional y de integración eléctrica que mantiene neuronas posmitóticas longevas',
          arrivesFrom: 'Corrientes dendríticas sumadas, O₂ capilar desde [[eritrocitos|real-erythrocyte]], [[glucosa|glucose]] y [[aminoácidos|amino-acid]]',
          inside: 'Gran [[núcleo|nucleus]] eucromático, cuerpos de Nissl con [[ribosomas 80S|real-cd-ribo80]], aparato de Golgi y abundantes [[mitocondrias|mitochondrion]] aerobias',
          deliversTo: 'Voltaje integrado al cono axónico más canales, [[vesículas|vesicle]] y [[mitocondrias|mitochondrion]] enviados por [[microtúbulos|microtubule]]',
          loop: 'Señales retrógradas que regresan desde los terminales ajustan continuamente la expresión génica del soma'
        },
        scientific:
          'Pericarion o soma neuronal (15–50 µm de diámetro) de una [[neurona multipolar|real-neuron]] humana posmitótica. Aloja un [[núcleo|nucleus]] rico en eucromatina ([[H3K27ac|real-epigenetics]]), prominentes cuerpos de Nissl ([[ribosomas 80S|real-cd-ribo80]] que traducen [[Naᵥ1.7|real-neuron-nav17]], [[Kᵥ1.2|real-neuron-kv12]] y SNARE), Golgi productor de precursores de [[vesículas sinápticas|real-mem-vesicle]] y alta densidad de [[mitocondrias|mitochondrion]] que rinden ~30–32 ATP por [[glucosa|glucose]] en [[bioenergética|real-bioenergetics]].',
        from: [
          { nodeId: 'real-epigenetics', label: 'Cromatina somática', cargo: 'ARNm neuronales H3K27ac' },
          { nodeId: 'real-bioenergetics', label: 'Suministro aerobio ATP', cargo: 'Oxidación de glucosa' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Síntesis en ribosomas 80S', cargo: 'Canales y proteínas SNARE' },
          { nodeId: 'microtubule', label: 'Despacho axónico', cargo: 'Vesículas y mitocondrias' }
        ]
      }
    },

    nucleus_h3k27ac: {
      en: {
        subtitle: 'Epigenetic Soma Nucleus (H3K27ac Open vs H3K27me3 Silenced)',
        simple:
          'Inside the [[neuron|real-neuron]] [[nucleus|nucleus]], identical human [[DNA|dna]] carries glowing [[H3K27ac|real-epigenetics]] tags that open ion-channel and synapse genes while H3K27me3 locks away muscle and hemoglobin genes.',
        story:
          'Opening the cutaway soma [[nucleus|nucleus]] reveals why a [[neuron|real-neuron]] builds voltage gates instead of contractile fibers despite owning the exact same 6.4 Gbp [[DNA|dna]] found in [[skeletal muscle|real-muscle]] and [[gut enterocytes|real-enterocyte]]. Across SCN9A (encoding [[Nav1.7|real-neuron-nav17]]), SYT1, and SNAP25, histone H3 lysine-27 tails carry neutral acetyl groups (H3K27ac) on 11 nm nucleosome spools (PDB 1AOI), opening euchromatin for active [[central dogma|real-central-dogma]] transcription. Meanwhile, Polycomb H3K27me3 trimethylation condenses MYH1 muscle myosin and HBB globin loci into tightly compacted heterochromatin.',
        blueprint: {
          role: 'Lineage-defining nuclear chromatin selector exposing neuronal excitability loci while silencing non-neuronal genes',
          arrivesFrom: 'Shared diploid 6.4 Gbp human [[DNA|dna]], acetyl-CoA for H3K27ac, and S-adenosylmethionine for H3K27me3',
          inside: 'Nucleosome core particles (PDB 1AOI) contrasting open emerald H3K27ac euchromatin (SCN9A, SYT1, SNAP25) against violet compacted H3K27me3 heterochromatin (MYH1, HBB)',
          deliversTo: 'Mature spliced neuronal [[mRNAs|rna]] exported to somatic [[80S ribosomes|real-cd-ribo80]] for [[Nav1.7|real-neuron-nav17]] and SNARE production',
          loop: 'Activity-dependent transcription factors further acetylate plasticity enhancers whenever synaptic firing rates climb'
        },
        scientific:
          'Euchromatin-dominant neuronal [[nucleus|nucleus]] (~8-15 um diameter) regulating differential expression from the invariant 6.4 Gbp human genome via [[nucleosome|real-epigenetics]] (PDB 1AOI) histone modifications. Acetylation of histone H3 Lys27 (H3K27ac, -COCH3 via p300/CBP) neutralizes positive tail charge to open enhancers at SCN9A ([[Nav1.7|real-neuron-nav17]]), KCNA2 ([[Kv1.2|real-neuron-kv12]]), SYT1, and SNAP25 for [[central dogma|real-central-dogma]] RNA Pol II transcription, whereas PRC2-catalyzed H3K27me3 silences [[muscle|real-muscle]] (MYH1/ACTA1) and [[erythrocyte|real-erythrocyte]] (HBB) loci.',
        from: [
          { nodeId: 'dna', label: 'Shared 6.4 Gbp Genome', cargo: '46 identical human chromosomes' },
          { nodeId: 'real-epigenetics', label: 'H3K27ac / H3K27me3 Tags', cargo: 'Open vs silenced chromatin' }
        ],
        to: [
          { nodeId: 'real-central-dogma', label: 'Neuronal Transcription', cargo: 'SCN9A, SYT1 & SNAP25 mRNA' },
          { nodeId: 'real-cd-ribo80', label: 'Somatic 80S Translation', cargo: 'Ion channel & SNARE synthesis' }
        ]
      },
      es: {
        subtitle: 'Núcleo epigenético del soma (H3K27ac abierto vs H3K27me3 silenciado)',
        simple:
          'Dentro del [[núcleo|nucleus]] [[neuronal|real-neuron]], el mismo [[ADN|dna]] humano porta etiquetas [[H3K27ac|real-epigenetics]] que abren genes de canales y sinapsis mientras H3K27me3 bloquea los genes musculares y de hemoglobina.',
        story:
          'Al observar el [[núcleo|nucleus]] abierto del soma se entiende por qué una [[neurona|real-neuron]] construye canales de voltaje en vez de fibras contráctiles pese a poseer exactamente los mismos 6,4 Gpb de [[ADN|dna]] que el [[músculo esquelético|real-muscle]] o el [[enterocito|real-enterocyte]]. Sobre SCN9A ([[Naᵥ1.7|real-neuron-nav17]]), SYT1 y SNAP25, las colas de histona H3 Lys27 llevan grupos acetilo neutros (H3K27ac) en nucleosomas de 11 nm (PDB 1AOI), abriendo eucromatina activa para el [[dogma central|real-central-dogma]]. Entretanto, la trimetilación Polycomb H3K27me3 compacta MYH1 y HBB en heterocromatina silenciosa.',
        blueprint: {
          role: 'Selector cromatínico nuclear de linaje que abre loci de excitabilidad neuronal mientras silencia programas ajenos',
          arrivesFrom: '[[ADN|dna]] humano diploide compartido de 6,4 Gpb, acetil-CoA para H3K27ac y S-adenosilmetionina para H3K27me3',
          inside: 'Nucleosomas centrales (PDB 1AOI) contrastando eucromatina abierta H3K27ac (SCN9A, SYT1, SNAP25) frente a heterocromatina H3K27me3 (MYH1, HBB)',
          deliversTo: '[[ARNm|rna]] neuronales maduros exportados a los [[ribosomas 80S|real-cd-ribo80]] del soma para fabricar [[Naᵥ1.7|real-neuron-nav17]] y SNARE',
          loop: 'Factores de transcripción dependientes de actividad refuerzan la acetilación cuando sube la frecuencia sináptica'
        },
        scientific:
          '[[Núcleo|nucleus]] neuronal predominantemente eucromático (~8–15 µm) que regula la expresión diferencial del genoma humano de 6,4 Gpb mediante marcas en [[nucleosomas|real-epigenetics]] (PDB 1AOI). La acetilación H3K27ac (–COCH₃ por p300/CBP) neutraliza la carga positiva abriendo potenciadores de SCN9A ([[Naᵥ1.7|real-neuron-nav17]]), KCNA2 ([[Kᵥ1.2|real-neuron-kv12]]), SYT1 y SNAP25 en el [[dogma central|real-central-dogma]], mientras PRC2 deposita H3K27me3 silenciando loci de [[músculo|real-muscle]] (MYH1/ACTA1) y [[eritrocito|real-erythrocyte]] (HBB).',
        from: [
          { nodeId: 'dna', label: 'Genoma compartido 6,4 Gpb', cargo: '46 cromosomas idénticos' },
          { nodeId: 'real-epigenetics', label: 'Marcas H3K27ac / H3K27me3', cargo: 'Cromatina abierta vs cerrada' }
        ],
        to: [
          { nodeId: 'real-central-dogma', label: 'Transcripción neuronal', cargo: 'ARNm de SCN9A, SYT1 y SNAP25' },
          { nodeId: 'real-cd-ribo80', label: 'Traducción 80S somática', cargo: 'Síntesis de canales y SNARE' }
        ]
      }
    },

    axon_hillock: {
      en: {
        subtitle: 'Axon Hillock & Initial Segment (-55 mV Trigger Zone)',
        simple:
          'The axon hillock is the tapered neck where the [[neuron|real-neuron]] soma funnels into its axon. Packed with voltage-gated [[Nav1.7 channels|real-neuron-nav17]], it decides whether summed dendritic inputs cross -55 mV and launch an all-or-none action potential.',
        story:
          'Every graded electrical wave arriving from thousands of dendritic spines converges at the conical axon hillock and its adjacent axon initial segment. Anchored tightly to an ankyrin-G [[cytoskeleton|cytoskeleton]] collar, an exceptionally high density of voltage-gated [[Nav1.7|real-neuron-nav17]] channels gives this narrow zone the lowest firing threshold in the cell. If summed voltage stays below -55 mV, the signal quietly fades; the instant voltage crosses -55 mV, sodium channels burst open together in an all-or-none +40 mV spike that launches down the myelinated axon toward the first [[Node of Ranvier|real-neuron-node]].',
        blueprint: {
          role: 'All-or-none electrical threshold comparator converting analog dendritic sums into digital action-potential spikes',
          arrivesFrom: 'Graded excitatory and inhibitory currents converging across the [[neuron|real-neuron]] soma from upstream [[synapses|real-neuron-synapse]]',
          inside: 'Ankyrin-G-scaffolded axon initial segment densely clustered with [[Nav1.7|real-neuron-nav17]] (PDB 6J8I) and [[Kv1.2|real-neuron-kv12]] channels',
          deliversTo: 'Full-amplitude +40 mV action potential propagating exclusively forward down the axon to the first [[Node of Ranvier|real-neuron-node]]',
          loop: 'Ankyrin-G also forms a diffusion barrier blocking somatodendritic proteins from drifting into the axon membrane'
        },
        scientific:
          'Axon hillock and axon initial segment (AIS; ~20-60 um length, ~1-3 um diameter) acting as the spike initiation zone of the [[multipolar neuron|real-neuron]]. Scaffolded by ankyrin-G and beta-IV-spectrin [[cytoskeleton|cytoskeleton]] rings, the AIS clusters voltage-gated sodium channels including [[Nav1.7|real-neuron-nav17]] (PDB 6J8I) at ~40-50x somatic density, lowering firing threshold to ~-55 mV. Crossing threshold triggers regenerative inward Na+ depolarization to +40 mV followed by [[Kv1.2|real-neuron-kv12]] repolarization, launching orthodromic saltatory conduction toward [[Nodes of Ranvier|real-neuron-node]].',
        from: [
          { nodeId: 'real-neuron', label: 'Summed Soma Currents', cargo: 'Analog EPSP + IPSP total' },
          { nodeId: 'real-neuron-nav17', label: 'Clustered Nav1.7', cargo: 'Low -55 mV firing threshold' }
        ],
        to: [
          { nodeId: 'real-neuron-node', label: 'First Node of Ranvier', cargo: 'All-or-none +40 mV spike' },
          { nodeId: 'real-neuron-kv12', label: 'Spike Repolarization', cargo: 'Return to -70 mV rest' }
        ]
      },
      es: {
        subtitle: 'Cono axónico y segmento inicial (Zona de disparo –55 mV)',
        simple:
          'El cono axónico es el cuello cónico donde el soma [[neuronal|real-neuron]] da origen al axón. Repleto de canales [[Naᵥ1.7|real-neuron-nav17]], decide si las señales dendríticas sumadas superan –55 mV para lanzar un potencial de acción todo o nada.',
        story:
          'Todas las ondas eléctricas graduadas procedentes de miles de espinas dendríticas confluyen en el cono axónico y el segmento inicial del axón. Sujeta por un collar de anquirina-G del [[citoesqueleto|cytoskeleton]], una altísima densidad de canales [[Naᵥ1.7|real-neuron-nav17]] otorga a esta zona estrecha el umbral de disparo más bajo de toda la célula. Si la suma queda bajo –55 mV, la señal se extingue; en cuanto cruza –55 mV, los canales de sodio se abren al unísono en una espiga todo o nada de +40 mV dirigida hacia el primer [[nodo de Ranvier|real-neuron-node]].',
        blueprint: {
          role: 'Comparador eléctrico umbral todo-o-nada que convierte sumas analógicas dendríticas en espigas digitales de potencial de acción',
          arrivesFrom: 'Corrientes excitadoras e inhibidoras graduadas que convergen en el soma [[neuronal|real-neuron]] desde [[sinapsis|real-neuron-synapse]] previas',
          inside: 'Segmento inicial fijado por anquirina-G con altísima densidad de canales [[Naᵥ1.7|real-neuron-nav17]] (PDB 6J8I) y [[Kᵥ1.2|real-neuron-kv12]]',
          deliversTo: 'Potencial de acción completo de +40 mV propagado hacia el primer [[nodo de Ranvier|real-neuron-node]]',
          loop: 'La red de anquirina-G actúa también como filtro que impide a proteínas somáticas migrar al axón'
        },
        scientific:
          'Cono axónico y segmento inicial del axón (SIA; ~20–60 µm de longitud, ~1–3 µm de diámetro), zona de ignición de la [[neurona multipolar|real-neuron]]. Andamiado por anquirina-G y βIV-espectrina del [[citoesqueleto|cytoskeleton]], concentra canales de sodio incluido [[Naᵥ1.7|real-neuron-nav17]] (PDB 6J8I) a ~40–50× la densidad somática, fijando el umbral en ~–55 mV. Superarlo dispara despolarización regenerativa por Na⁺ hasta +40 mV seguida de repolarización por [[Kᵥ1.2|real-neuron-kv12]] hacia los [[nodos de Ranvier|real-neuron-node]].',
        from: [
          { nodeId: 'real-neuron', label: 'Corrientes sumadas del soma', cargo: 'Balance analógico PEPS + PIPS' },
          { nodeId: 'real-neuron-nav17', label: 'Naᵥ1.7 agrupados', cargo: 'Umbral bajo de –55 mV' }
        ],
        to: [
          { nodeId: 'real-neuron-node', label: 'Primer nodo de Ranvier', cargo: 'Espiga todo-o-nada +40 mV' },
          { nodeId: 'real-neuron-kv12', label: 'Repolarización', cargo: 'Retorno al reposo –70 mV' }
        ]
      }
    },

    myelin_sheath: {
      en: {
        subtitle: 'Multilayer Lipid Myelin Sheath (Saltatory Insulation)',
        simple:
          'The myelin sheath consists of dozens of tightly spiraled [[phospholipid|phospholipid]] membrane wraps formed by glial cells around the [[neuron|real-neuron]] axon, blocking electrical leaks so impulses leap swiftly from one [[Node of Ranvier|real-neuron-node]] to the next.',
        story:
          'Unmyelinated axons conduct impulses slowly because electrical charge constantly leaks across the thin bilayer and must charge every square micrometer of capacitance. Specialized glial cells (Schwann cells in peripheral nerves and oligodendrocytes in the brain)solve that physical bottleneck by wrapping 20 to 100 compacted [[phospholipid|phospholipid]] layers around millimeter-long axon segments. Increasing membrane resistance while slashing capacitance lets internal Na+ current race almost instantaneously down the insulated shaft to the next exposed [[Node of Ranvier|real-neuron-node]], accelerating conduction up to 120 meters per second and conserving [[mitochondrial|mitochondrion]] ATP.',
        blueprint: {
          role: 'High-resistance, low-capacitance multi-bilayer lipid sleeve enabling rapid energy-efficient saltatory conduction',
          arrivesFrom: 'Specialized glial [[plasma membrane|plasma-membrane]] spirals (Schwann cells or oligodendrocytes) rich in [[phospholipids|phospholipid]], cholesterol, and myelin basic protein',
          inside: '20-100 compacted insulating bilayer wraps separating 0.2-1.5 mm internodal segments sealed at paranodal loops beside each [[Node of Ranvier|real-neuron-node]]',
          deliversTo: 'Rapid low-loss axial current propagation between successive [[Nodes of Ranvier|real-neuron-node]] reaching the [[terminal synapse|real-neuron-synapse]]',
          loop: 'Loss of myelin exposes internodal membrane capacitance, slowing or blocking conduction in demyelinating disorders'
        },
        scientific:
          'Compacted multilamellar myelin internode sheath (~70-80% dry-weight lipid, enriched in galactocerebroside, cholesterol, and [[phospholipids|phospholipid]] compacted by MBP and PLP) wrapping 0.2-1.5 mm segments of vertebrate [[neuron|real-neuron]] axons. Stacking 20-100 bilayers dramatically decreases effective transmembrane capacitance (Cm) and raises transverse resistance (Rm), increasing the electrotonic length constant so action potentials jump saltatorily between [[Nodes of Ranvier|real-neuron-node]] at 50-120 m/s while cutting axonal [[Na+/K+-ATPase|real-mem-nak]] ATP expenditure.',
        from: [
          { nodeId: 'phospholipid', label: 'Glial Lipid Bilayers', cargo: '20-100 compacted wraps' },
          { nodeId: 'plasma-membrane', label: 'Electrical Insulation', cargo: 'High Rm / low Cm sleeve' }
        ],
        to: [
          { nodeId: 'real-neuron-node', label: 'Saltatory Node Hop', cargo: '50-120 m/s fast conduction' },
          { nodeId: 'real-mem-nak', label: 'ATP Conservation', cargo: 'Ion flux confined to nodes' }
        ]
      },
      es: {
        subtitle: 'Vaina lipídica multicapa de mielina (Aislamiento saltatorio)',
        simple:
          'La vaina de mielina está formada por decenas de capas compactas de [[fosfolípidos|phospholipid]] enrolladas por células gliales sobre el axón [[neuronal|real-neuron]], bloqueando fugas eléctricas para que el impulso salte velozmente entre [[nodos de Ranvier|real-neuron-node]].',
        story:
          'Los axones sin mielina conducen despacio porque la corriente se fuga a través de la fina bicapa y debe cargar cada micrómetro de capacitancia. Células gliales especializadas —de Schwann en nervios periféricos y oligodendrocitos en el encéfalo— superan ese límite enrollando entre 20 y 100 capas compactas de [[fosfolípidos|phospholipid]] a lo largo de segmentos milimétricos. Al elevar la resistencia y desplomar la capacitancia, la corriente interna de Na⁺ recorre casi al instante el tramo aislado hasta el siguiente [[nodo de Ranvier|real-neuron-node]], elevando la velocidad hasta 120 metros por segundo y ahorrando ATP [[mitocondrial|mitochondrion]].',
        blueprint: {
          role: 'Funda lipídica multicapa de alta resistencia y baja capacitancia que posibilita la conducción saltatoria rápida y económica',
          arrivesFrom: 'Espirales de [[membrana plasmática|plasma-membrane]] glial (Schwann u oligodendrocitos) ricas en [[fosfolípidos|phospholipid]], colesterol y proteína básica de mielina',
          inside: '20–100 bicapas aislantes compactadas cubriendo internodos de 0,2–1,5 mm sellados junto a cada [[nodo de Ranvier|real-neuron-node]]',
          deliversTo: 'Propagación axial veloz y sin pérdidas entre [[nodos de Ranvier|real-neuron-node]] sucesivos hasta la [[sinapsis terminal|real-neuron-synapse]]',
          loop: 'La desmielinización expone capacitancia internodal, frenando o bloqueando el impulso nervioso'
        },
        scientific:
          'Vaina de mielina multilamelar compactada (~70–80 % de lípidos en peso seco, rica en galactocerebrósido, colesterol y [[fosfolípidos|phospholipid]] compactados por MBP y PLP) sobre internodos de 0,2–1,5 mm en axones de [[neuronas|real-neuron]]. Apilar 20–100 bicapas reduce la capacitancia efectiva (C_m) y eleva la resistencia transversal (R_m), incrementando la constante de longitud para saltos saltatorios entre [[nodos de Ranvier|real-neuron-node]] a 50–120 m/s y ahorrando ATP en la [[Na⁺/K⁺-ATPasa|real-mem-nak]].',
        from: [
          { nodeId: 'phospholipid', label: 'Bicapas lipídicas gliales', cargo: '20–100 vueltas compactas' },
          { nodeId: 'plasma-membrane', label: 'Aislamiento eléctrico', cargo: 'Funda de alta Rₘ y baja Cₘ' }
        ],
        to: [
          { nodeId: 'real-neuron-node', label: 'Salto saltatorio nodal', cargo: 'Conducción de 50–120 m/s' },
          { nodeId: 'real-mem-nak', label: 'Ahorro de ATP', cargo: 'Flujo iónico limitado al nodo' }
        ]
      }
    },

    node_ranvier: {
      en: {
        subtitle: 'Exposed Node of Ranvier (1-2 um Saltatory Repeater)',
        simple:
          'This bare 1-2 um gap between myelin wraps exposes the [[neuron|real-neuron]] [[plasma membrane|plasma-membrane]] directly to extracellular Na+, clustering [[Nav1.7|real-neuron-nav17]] and [[Kv1.2|real-neuron-kv12]] channels to regenerate every passing impulse.',
        story:
          'Right where two myelin internodes terminate, a narrow 1-to-2-micrometer ring of bare axonal [[plasma membrane|plasma-membrane]] faces extracellular fluid. Within milliseconds of the previous node firing, passive axial current depolarizes this patch past -55 mV. Packed [[Nav1.7 channels|real-neuron-nav17]] swing open to boost the impulse back to a crisp +40 mV peak, flanking [[Kv1.2 channels|real-neuron-kv12]] drive rapid K+ repolarization back to -70 mV, and nearby [[Na+/K+-ATPase pumps|real-mem-nak]] quietly restore baseline ion stores for the next spike.',
        blueprint: {
          role: 'Regenerative 1-2 um saltatory voltage booster keeping action-potential amplitude lossless across meter-long axons',
          arrivesFrom: 'Fast passive axial current emerging from the upstream myelinated internode plus extracellular Na+ (~145 mM)',
          inside: 'Ankyrin-G-anchored nodal membrane packing >1,000 [[Nav1.7|real-neuron-nav17]] channels/um^2, flanking [[Kv1.2|real-neuron-kv12]], and [[Na+/K+-ATPase|real-mem-nak]] pumps',
          deliversTo: 'Recharged +40 mV depolarization pulse injected forward into the downstream internode toward the [[terminal synapse|real-neuron-synapse]]',
          loop: 'Refractory Nav1.7 inactivation prevents the boosted pulse from traveling backward toward the soma'
        },
        scientific:
          'Exposed axonal [[Node of Ranvier|real-neuron-node]] (~1-2 um axial span) between myelinated internodes of a human [[neuron|real-neuron]]. Dense clustering of [[Nav1.7|real-neuron-nav17]] (PDB 6J8I) at the nodal core paired with juxtaparanodal [[Kv1.2|real-neuron-kv12]] (PDB 2R9R) and [[Na+/K+-ATPase|real-mem-nak]] (PDB 3WGU) regenerates the -70 mV -> +40 mV -> -70 mV action potential without attenuation across up to 1 m of axonal length.',
        from: [
          { nodeId: 'real-neuron-nav17', label: 'Nodal Nav1.7 Influx', cargo: '-55 mV -> +40 mV boost' },
          { nodeId: 'real-neuron-kv12', label: 'Flanking Kv1.2 Efflux', cargo: 'Fast repolarization to -70 mV' }
        ],
        to: [
          { nodeId: 'real-neuron-node', label: 'Node of Ranvier Node', cargo: 'Saltatory repeater architecture' },
          { nodeId: 'real-neuron-synapse', label: 'Downstream Propagation', cargo: 'Impulse heading to terminal' }
        ]
      },
      es: {
        subtitle: 'Nodo de Ranvier expuesto (Repetidor saltatorio de 1–2 µm)',
        simple:
          'Esta brecha desnuda de 1 a 2 µm entre vainas de mielina expone la [[membrana plasmática|plasma-membrane]] [[neuronal|real-neuron]] al Na⁺ extracelular, agrupando canales [[Naᵥ1.7|real-neuron-nav17]] y [[Kᵥ1.2|real-neuron-kv12]] que regeneran cada impulso.',
        story:
          'Justo donde terminan dos internodos de mielina, un estrecho anillo de 1 a 2 micrómetros de [[membrana plasmática|plasma-membrane]] axónica queda expuesto al líquido extracelular. En milisegundos tras dispararse el nodo previo, la corriente axial despolariza este parche por encima de –55 mV. Los densos canales [[Naᵥ1.7|real-neuron-nav17]] se abren para devolver la señal a un pico exacto de +40 mV, los canales [[Kᵥ1.2|real-neuron-kv12]] laterales repolarizan a –70 mV y las bombas [[Na⁺/K⁺-ATPasa|real-mem-nak]] reponen los gradientes para la siguiente espiga.',
        blueprint: {
          role: 'Amplificador regenerativo saltatorio de 1–2 µm que mantiene sin pérdidas la amplitud del potencial de acción en axones largos',
          arrivesFrom: 'Corriente axial pasiva rápida procedente del internodo mielinizado previo y Na⁺ extracelular (~145 mM)',
          inside: 'Membrana nodal con anquirina-G agrupando >1.000 canales [[Naᵥ1.7|real-neuron-nav17]]/µm², [[Kᵥ1.2|real-neuron-kv12]] flanqueantes y bombas [[Na⁺/K⁺-ATPasa|real-mem-nak]]',
          deliversTo: 'Pulso recargado de +40 mV inyectado al siguiente internodo rumbo a la [[sinapsis terminal|real-neuron-synapse]]',
          loop: 'La inactivación refractaria de Naᵥ1.7 impide que el impulso recargado retroceda hacia el soma'
        },
        scientific:
          '[[Nodo de Ranvier|real-neuron-node]] axónico expuesto (~1–2 µm) entre internodos mielinizados de una [[neurona|real-neuron]] humana. Agrupa [[Naᵥ1.7|real-neuron-nav17]] (PDB 6J8I) en el núcleo nodal junto a [[Kᵥ1.2|real-neuron-kv12]] yuxtaparanodal (PDB 2R9R) y [[Na⁺/K⁺-ATPasa|real-mem-nak]] (PDB 3WGU), regenerando el ciclo –70 mV → +40 mV → –70 mV sin atenuación a lo largo de hasta 1 m.',
        from: [
          { nodeId: 'real-neuron-nav17', label: 'Entrada nodal Naᵥ1.7', cargo: 'Impulso –55 mV → +40 mV' },
          { nodeId: 'real-neuron-kv12', label: 'Salida lateral Kᵥ1.2', cargo: 'Repolarización a –70 mV' }
        ],
        to: [
          { nodeId: 'real-neuron-node', label: 'Nodo de Ranvier', cargo: 'Arquitectura repetidora saltatoria' },
          { nodeId: 'real-neuron-synapse', label: 'Propagación distal', cargo: 'Impulso rumbo al terminal' }
        ]
      }
    },

    nav17: {
      en: {
        subtitle: 'Voltage-Gated Na+ Channel Nav1.7 (PDB 6J8I)',
        simple:
          'Embedded densely inside every [[Node of Ranvier|real-neuron-node]], [[Nav1.7|real-neuron-nav17]] detects voltage crossing -55 mV and opens a Na+-selective pore within fractions of a millisecond to drive the +40 mV action-potential peak.',
        story:
          'Constructed from 24 transmembrane helices folded into four linked domains, [[Nav1.7|real-neuron-nav17]] acts as the hair-trigger ignition switch of axonal signaling. At -70 mV rest, negative intracellular charge pulls its positively charged S4 arginine helices inward, keeping the central pore closed. Once arriving axial depolarization weakens that inward pull past -55 mV, the S4 sensors slide outward, opening the DEKA selectivity filter so Na+ ions rush inside and flip membrane polarity to +40 mV before the intracellular IFM plug seals the channel in roughly one millisecond.',
        blueprint: {
          role: 'Sub-millisecond voltage-gated sodium pore igniting action-potential upstrokes and enforcing unidirectional forward flow',
          arrivesFrom: 'Arriving depolarization past -55 mV and steep inward extracellular Na+ gradient (~145 mM outside vs ~12 mM inside)',
          inside: 'Human SCN9A 24-TM alpha subunit + beta1/beta2 auxiliary subunits (PDB 6J8I) with S4 arginine sensors, DEKA filter, and IFM fast-inactivation gate',
          deliversTo: 'Explosive inward Na+ pulse driving membrane potential to +40 mV to fire the next [[Node of Ranvier|real-neuron-node]] and activate [[Kv1.2|real-neuron-kv12]]',
          loop: 'Refractory IFM plugging persists until repolarization resets S4 helices back to rest; targeted by analgesics in [[pharmacology|real-pharmacology]]'
        },
        scientific:
          'Human voltage-gated Na+ channel [[Nav1.7|real-neuron-nav17]] (SCN9A; cryo-EM PDB 6J8I; 4-domain 24-TM alpha pore + beta1/beta2 subunits) clustered at the axon hillock and [[Nodes of Ranvier|real-neuron-node]]. Outward S4 arginine gating opens the S6 activation gate (~0.2 ms), admitting partially hydrated Na+ through the Asp-Glu-Lys-Ala (DEKA) selectivity filter (~10^7 ions/s) to reach +40 mV before the DIII-DIV IFM motif executes fast inactivation (~1 ms).',
        from: [
          { nodeId: 'real-neuron-node', label: 'Nodal Depolarization', cargo: 'Voltage crossing -55 mV' },
          { nodeId: 'real-spec-atoms', label: 'Extracellular Na+ Ions', cargo: '0.102 nm cation influx' }
        ],
        to: [
          { nodeId: 'real-neuron-nav17', label: 'Nav1.7 Explorer Node', cargo: '24-TM DEKA & IFM gate' },
          { nodeId: 'real-neuron-kv12', label: 'Peak +40 mV Trigger', cargo: 'Opens delayed Kv1.2 efflux' }
        ]
      },
      es: {
        subtitle: 'Canal de Na⁺ dependiente de voltaje Naᵥ1.7 (PDB 6J8I)',
        simple:
          'Agrupado en cada [[nodo de Ranvier|real-neuron-node]], [[Naᵥ1.7|real-neuron-nav17]] detecta cuando el voltaje supera –55 mV y abre en fracciones de milisegundo un poro selectivo para Na⁺ que eleva la señal hasta +40 mV.',
        story:
          'Construido por 24 hélices transmembrana plegadas en cuatro dominios enlazados, [[Naᵥ1.7|real-neuron-nav17]] funciona como el interruptor de ignición del axón. En reposo a –70 mV, la carga negativa interna retiene hacia dentro las hélices S4 ricas en arginina, manteniendo cerrado el poro. Al superar –55 mV, los sensores S4 se deslizan hacia fuera y abren el filtro selectivo DEKA para que el Na⁺ irrumpa e invierta el voltaje a +40 mV, antes de que el tapón intracelular IFM cierre el canal en apenas un milisegundo.',
        blueprint: {
          role: 'Poro de sodio sensible al voltaje submilisegundo que dispara la fase ascendente e impone dirección única al impulso',
          arrivesFrom: 'Despolarización entrante sobre –55 mV y gradiente de Na⁺ extracelular (~145 mM fuera frente a ~12 mM dentro)',
          inside: 'Subunidad α humana SCN9A de 24 hélices + β1/β2 (PDB 6J8I) con sensores S4 de arginina, filtro DEKA y compuerta rápida IFM',
          deliversTo: 'Pulso rápido de Na⁺ hasta +40 mV que dispara el siguiente [[nodo de Ranvier|real-neuron-node]] y activa [[Kᵥ1.2|real-neuron-kv12]]',
          loop: 'El bloqueo refractario IFM dura hasta que la repolarización restablece S4; diana analgésica en [[farmacología|real-pharmacology]]'
        },
        scientific:
          'Canal humano de Na⁺ dependiente de voltaje [[Naᵥ1.7|real-neuron-nav17]] (SCN9A; crio-EM PDB 6J8I; subunidad α de 4 dominios/24 hélices + β1/β2) en el cono axónico y [[nodos de Ranvier|real-neuron-node]]. El desplazamiento externo de argininas S4 abre la compuerta S6 (~0,2 ms), conduciendo Na⁺ por el filtro Asp–Glu–Lys–Ala (DEKA) (~10⁷ iones/s) hasta +40 mV antes de la inactivación rápida (~1 ms) por el motivo IFM.',
        from: [
          { nodeId: 'real-neuron-node', label: 'Despolarización nodal', cargo: 'Voltaje sobre –55 mV' },
          { nodeId: 'real-spec-atoms', label: 'Iones Na⁺ extracelulares', cargo: 'Entrada de catión 0,102 nm' }
        ],
        to: [
          { nodeId: 'real-neuron-nav17', label: 'Nodo Naᵥ1.7', cargo: 'Poro 24-TM DEKA e IFM' },
          { nodeId: 'real-neuron-kv12', label: 'Disparo de +40 mV', cargo: 'Activa salida tardía Kᵥ1.2' }
        ]
      }
    },

    kv12: {
      en: {
        subtitle: 'Voltage-Gated K+ Channel Kv1.2 (PDB 2R9R)',
        simple:
          'Positioned along the borders of each [[Node of Ranvier|real-neuron-node]], four-subunit [[Kv1.2|real-neuron-kv12]] opens just after [[Nav1.7|real-neuron-nav17]] peaks, letting K+ stream outward to snap membrane voltage back down to -70 mV.',
        story:
          'Fast firing demands an equally fast reset. Built as a four-fold symmetric ring of six-helix subunits, delayed-rectifier [[Kv1.2|real-neuron-kv12]] senses the +40 mV peak ignited by [[Nav1.7|real-neuron-nav17]] and swings its inner S6 gate open roughly half a millisecond later. Intracellular K+ ions strip off their [[water|water]] jackets inside the narrow TVGYG carbonyl filter (whose oxygen ring matches K+ diameter to the hundredth of a nanometer while rejecting smaller Na+)and rush outward to restore the -70 mV resting potential.',
        blueprint: {
          role: 'Delayed-rectifier homotetrameric K+ channel terminating each action potential and restoring negative membrane voltage',
          arrivesFrom: 'Peak +40 mV depolarization generated by [[Nav1.7|real-neuron-nav17]] plus high intracellular K+ (~140 mM vs ~4 mM outside)',
          inside: 'Homotetrameric 6-TM Kv1.2 assembly with T1/beta2 cytosolic collar (PDB 2R9R), S4 voltage sensors, and TVGYG oxygen-carbonyl selectivity filter',
          deliversTo: 'Selective outward K+ current (>1,000:1 K+/Na+) returning the [[Node of Ranvier|real-neuron-node]] to -70 mV for high-frequency firing',
          loop: 'Brief hyperpolarization below -70 mV helps clear Nav1.7 inactivation so the axon recovers rapidly'
        },
        scientific:
          'Delayed-rectifier voltage-gated K+ channel [[Kv1.2|real-neuron-kv12]] (crystal structure PDB 2R9R; 4x 6-TM alpha homotetramer with cytosolic T1-beta2 complex) enriched at juxtaparanodes of [[Nodes of Ranvier|real-neuron-node]]. S4 voltage-sensor movement opens the S6 bundle crossing after peak [[Nav1.7|real-neuron-nav17]] activation; backbone [[O|atom-o]] carbonyls of the Thr-Val-Gly-Tyr-Gly (TVGYG) pore dehydrate and conduct K+ (0.138 nm) over Na+ (0.102 nm) by >1,000-fold to repolarize the axon to -70 mV.',
        from: [
          { nodeId: 'real-neuron-nav17', label: 'Action Potential Peak', cargo: '+40 mV gating voltage' },
          { nodeId: 'real-spec-atoms', label: 'Intracellular K+ Pool', cargo: '0.138 nm selective efflux' }
        ],
        to: [
          { nodeId: 'real-neuron-kv12', label: 'Kv1.2 Explorer Node', cargo: 'TVGYG carbonyl selectivity' },
          { nodeId: 'real-mem-nak', label: 'Resting Reset Cycle', cargo: 'Long-term K+ recovery' }
        ]
      },
      es: {
        subtitle: 'Canal de K⁺ dependiente de voltaje Kᵥ1.2 (PDB 2R9R)',
        simple:
          'Situado en los márgenes de cada [[nodo de Ranvier|real-neuron-node]], el tetrámero [[Kᵥ1.2|real-neuron-kv12]] se abre justo tras el pico de [[Naᵥ1.7|real-neuron-nav17]], dejando salir K⁺ para devolver con rapidez el voltaje de membrana a –70 mV.',
        story:
          'Disparar deprisa exige reiniciar igual de deprisa. Organizado como un anillo simétrico de cuatro subunidades de seis hélices, el canal rectificador tardío [[Kᵥ1.2|real-neuron-kv12]] detecta el pico de +40 mV generado por [[Naᵥ1.7|real-neuron-nav17]] y abre su compuerta interna S6 medio milisegundo después. Los iones K⁺ intracelulares abandonan su capa de [[agua|water]] dentro del estrecho filtro carbonílico TVGYG —cuyo anillo de oxígenos encaja exactamente con el K⁺ excluyendo al Na⁺— y salen velozmente restaurando los –70 mV de reposo.',
        blueprint: {
          role: 'Canal homotetramérico de K⁺ rectificador tardío que cierra cada potencial de acción y restaura el voltaje negativo',
          arrivesFrom: 'Despolarización pico de +40 mV generada por [[Naᵥ1.7|real-neuron-nav17]] y alta concentración interna de K⁺ (~140 mM vs ~4 mM fuera)',
          inside: 'Homotetrámero Kᵥ1.2 de 6 hélices con collar citosólico T1/β2 (PDB 2R9R), sensores S4 y filtro carbonílico TVGYG',
          deliversTo: 'Corriente saliente selectiva de K⁺ (>1.000:1 frente a Na⁺) que devuelve el [[nodo de Ranvier|real-neuron-node]] a –70 mV',
          loop: 'La breve hiperpolarización bajo –70 mV favorece el desbloqueo de Naᵥ1.7 para repetir disparos rápidos'
        },
        scientific:
          'Canal de K⁺ rectificador tardío dependiente de voltaje [[Kᵥ1.2|real-neuron-kv12]] (cristalografía PDB 2R9R; homotetrámero 4× 6-TM con complejo T1–β2) en los yuxtaparanodos de los [[nodos de Ranvier|real-neuron-node]]. El giro de los sensores S4 abre la compuerta S6 tras el pico de [[Naᵥ1.7|real-neuron-nav17]]; los carbonilos [[O|atom-o]] del filtro Thr–Val–Gly–Tyr–Gly (TVGYG) deshidratan y conducen K⁺ (0,138 nm) frente a Na⁺ (0,102 nm) con selectividad >1.000×, repolarizando a –70 mV.',
        from: [
          { nodeId: 'real-neuron-nav17', label: 'Pico del impulso', cargo: 'Voltaje activador de +40 mV' },
          { nodeId: 'real-spec-atoms', label: 'Reserva interna de K⁺', cargo: 'Salida selectiva 0,138 nm' }
        ],
        to: [
          { nodeId: 'real-neuron-kv12', label: 'Nodo Kᵥ1.2', cargo: 'Selectividad carbonílica TVGYG' },
          { nodeId: 'real-mem-nak', label: 'Ciclo de reposición', cargo: 'Recuperación de K⁺ a largo plazo' }
        ]
      }
    },

    nak_reset: {
      en: {
        subtitle: 'Nodal Na+/K+-ATPase Reset Pump (PDB 3WGU)',
        simple:
          'Working continuously beside every [[Node of Ranvier|real-neuron-node]], the [[Na+/K+-ATPase pump|real-mem-nak]] burns [[mitochondrial|mitochondrion]] ATP to push 3 Na+ back outside and pull 2 K+ back inside, preserving the -70 mV battery.',
        story:
          'Even though one action potential shifts only a tiny fraction of local ions, firing hundreds of spikes per second would slowly drain the axon battery if those ions stayed on the wrong sides of the [[plasma membrane|plasma-membrane]]. Embedded right beside nodal channels, the [[Na+/K+-ATPase|real-mem-nak]] (PDB 3WGU) runs nonstop active [[membrane transport|real-membrane-transport]]. Every [[Mg2+|atom-mg]]-ATP hydrolyzed phosphorylates the pump so it flips outward to expel 3 Na+ and flips inward upon dephosphorylation to reclaim 2 K+, accounting for roughly half of the brain resting energy budget.',
        blueprint: {
          role: 'Electrogenic P-type primary active ion pump recharging transmembrane Na+ and K+ batteries after action potentials',
          arrivesFrom: 'Intracellular Na+ entering via [[Nav1.7|real-neuron-nav17]], extracellular K+ exiting via [[Kv1.2|real-neuron-kv12]], and [[mitochondrial|mitochondrion]] ATP',
          inside: 'Alpha-beta-gamma Na+/K+-ATPase heterotrimer (PDB 3WGU) cycling phosphorylated E1P -> E2P conformational states across the nodal bilayer',
          deliversTo: 'Steep resting gradients (high outside Na+, high inside K+, net -1 charge exported per cycle) sustaining -70 mV resting potential',
          loop: 'Myelin limits ion leakage to tiny nodes so Na+/K+-ATPase keeps axons firing sustainably without exhausting glucose and O2'
        },
        scientific:
          'Neuronal nodal [[Na+/K+-ATPase|real-mem-nak]] (P-type II ATPase alpha-beta-gamma complex, crystal structure PDB 3WGU) driving primary active [[membrane transport|real-membrane-transport]] at [[Nodes of Ranvier|real-neuron-node]] and terminals. Couples hydrolysis of 1 [[Mg2+|atom-mg]]-ATP (via Asp phosphorylation in E1 -> E1P -> E2P -> E2 cycling) to uphill export of 3 Na+ and import of 2 K+, sustaining ~145 mM external Na+, ~140 mM internal K+, and resting Vm approx -70 mV powered by axonal [[mitochondrial|mitochondrion]] [[ATP synthase|real-bio-atpsynth]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Axonal ATP Supply', cargo: '1 Mg2+-ATP per pump cycle' },
          { nodeId: 'real-neuron-node', label: 'Post-Spike Ion Load', cargo: 'Internal Na+ & external K+' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Na+/K+-ATPase Node', cargo: '3 Na+ out / 2 K+ in cycle' },
          { nodeId: 'real-membrane-transport', label: 'Electrochemical Battery', cargo: 'Sustained -70 mV gradient' }
        ]
      },
      es: {
        subtitle: 'Bomba nodal Na⁺/K⁺-ATPasa de reajuste (PDB 3WGU)',
        simple:
          'Activa sin pausa junto a cada [[nodo de Ranvier|real-neuron-node]], la [[bomba Na⁺/K⁺-ATPasa|real-mem-nak]] gasta ATP [[mitocondrial|mitochondrion]] para expulsar 3 Na⁺ e introducir 2 K⁺, conservando la batería de –70 mV.',
        story:
          'Aunque un solo potencial de acción desplaza una fracción mínima de iones, disparar cientos de veces por segundo agotaría gradualmente la batería del axón si los iones no regresaran a su lado de la [[membrana plasmática|plasma-membrane]]. Incrustada junto a los canales nodales, la [[Na⁺/K⁺-ATPasa|real-mem-nak]] (PDB 3WGU) realiza [[transporte activo|real-membrane-transport]] incesante. Cada [[Mg²⁺|atom-mg]]–ATP hidrolizado fosforila la bomba para expulsar 3 Na⁺ hacia fuera y, al desfosforilarse, recuperar 2 K⁺ hacia dentro, consumiendo cerca de la mitad de la energía cerebral en reposo.',
        blueprint: {
          role: 'Bomba iónica activa primaria electrógena tipo P que recarga las baterías transmembrana de Na⁺ y K⁺ tras los impulsos',
          arrivesFrom: 'Na⁺ interno entrante por [[Naᵥ1.7|real-neuron-nav17]], K⁺ externo saliente por [[Kᵥ1.2|real-neuron-kv12]] y ATP [[mitocondrial|mitochondrion]]',
          inside: 'Heterotrímero α–β–γ de Na⁺/K⁺-ATPasa (PDB 3WGU) ciclando estados conformacionales E1P → E2P en la bicapa nodal',
          deliversTo: 'Gradientes intensos de reposo (alto Na⁺ externo, alto K⁺ interno y exportación neta de –1 carga) que mantienen –70 mV',
          loop: 'La mielina confina el intercambio a nodos diminutos para que la bomba sostenga el disparo sin agotar glucosa ni O₂'
        },
        scientific:
          '[[Na⁺/K⁺-ATPasa|real-mem-nak]] nodal neuronal (ATPasa tipo P II α–β–γ, cristalografía PDB 3WGU) responsable del [[transporte activo primario|real-membrane-transport]] en [[nodos de Ranvier|real-neuron-node]] y terminales. Acopla la hidrólisis de 1 [[Mg²⁺|atom-mg]]–ATP (fosforilación de Asp en el ciclo E1 → E1P → E2P → E2) a la exportación de 3 Na⁺ e importación de 2 K⁺, sosteniendo Vₘ ≈ –70 mV gracias a la [[ATP sintasa|real-bio-atpsynth]] [[mitocondrial|mitochondrion]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Aporte axónico de ATP', cargo: '1 Mg²⁺–ATP por ciclo' },
          { nodeId: 'real-neuron-node', label: 'Carga iónica posespiga', cargo: 'Na⁺ interno y K⁺ externo' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Nodo Na⁺/K⁺-ATPasa', cargo: 'Ciclo 3 Na⁺ fuera / 2 K⁺ dentro' },
          { nodeId: 'real-membrane-transport', label: 'Batería electroquímica', cargo: 'Gradiente estable de –70 mV' }
        ]
      }
    },

    axon_mt: {
      en: {
        subtitle: 'Axonal Microtubule Tracks (Kinesin & Dynein Transport)',
        simple:
          'Long parallel [[microtubules|microtubule]] run down the core of the [[neuron|real-neuron]] axon, serving as oriented highways for ATP-driven motor [[proteins|protein]] that haul [[synaptic vesicles|real-mem-vesicle]] and [[mitochondria|mitochondrion]] to distant terminals.',
        story:
          'Because almost all protein synthesis occurs back inside the soma, a meter-long axon cannot wait for passive diffusion (which would take years)to deliver fresh [[synaptic vesicles|real-mem-vesicle]] and [[mitochondria|mitochondrion]] to its terminal bouton. Parallel bundles of 25-nanometer hollow [[microtubules|microtubule]] run straight down the axon with every plus-end pointing toward the [[synapse|real-neuron-synapse]]. Kinesin motor dimers burn ATP to march vesicle cargo anterogradely outward at up to 400 millimeters per day, while dynein carries worn organelles and survival signals retrogradely back to the soma [[lysosomes|lysosome]] and [[nucleus|nucleus]].',
        blueprint: {
          role: 'Uniformly polarized 25 nm cytoskeletal rail system sustaining long-range bidirectional supply between soma and terminal',
          arrivesFrom: 'Somatic [[vesicles|vesicle]], channel proteins, and [[mitochondria|mitochondrion]] loaded onto kinesin motors plus ATP fuel',
          inside: 'Parallel plus-end-distal alpha/beta-tubulin [[microtubule|microtubule]] bundles crosslinked by tau [[proteins|protein]] guiding kinesin (outward) and dynein (inward)',
          deliversTo: 'Replenished [[synaptic vesicles|real-mem-vesicle]] and ATP-producing [[mitochondria|mitochondrion]] to the terminal bouton plus retrograde cargo to soma [[lysosomes|lysosome]]',
          loop: 'Continuous bidirectional axonal traffic keeps meter-long nerve terminals supplied with fresh membranes and energy'
        },
        scientific:
          'Uniformly oriented axonal [[microtubule|microtubule]] arrays (25 nm outer diameter, 13 protofilaments of alpha/beta-tubulin dimers stabilized by tau within the axonal [[cytoskeleton|cytoskeleton]], plus-ends distal toward the [[synapse|real-neuron-synapse]]). Fast anterograde transport (~100-400 mm/day) uses ATP-hydrolyzing kinesin-1/3 motors to ship [[synaptic vesicle|real-mem-vesicle]] precursors and [[mitochondria|mitochondrion]] from soma to terminal bouton, while cytoplasmic dynein drives retrograde recycling toward somatic [[lysosomes|lysosome]] and [[nuclear|nucleus]] signaling.',
        from: [
          { nodeId: 'microtubule', label: 'Tubulin Rail Bundles', cargo: '25 nm plus-end-out tracks' },
          { nodeId: 'real-neuron', label: 'Somatic Cargo Supply', cargo: 'Fresh vesicles & organelles' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Terminal Replenishment', cargo: 'Kinesin vesicle delivery' },
          { nodeId: 'lysosome', label: 'Retrograde Recycling', cargo: 'Dynein return to soma' }
        ]
      },
      es: {
        subtitle: 'Carriles axónicos de microtúbulos (Transporte por cinesina y dineína)',
        simple:
          'Largos [[microtúbulos|microtubule]] paralelos recorren el interior del axón [[neuronal|real-neuron]], actuando como vías orientadas por donde [[proteínas|protein]] motoras con ATP llevan [[vesículas sinápticas|real-mem-vesicle]] y [[mitocondrias|mitochondrion]] hasta terminales lejanos.',
        story:
          'Como casi toda la síntesis de proteínas ocurre en el soma, un axón de un metro no puede depender de la difusión pasiva —que tardaría años— para abastecer al botón terminal con [[vesículas sinápticas|real-mem-vesicle]] y [[mitocondrias|mitochondrion]]. Haces paralelos de [[microtúbulos|microtubule]] huecos de 25 nanómetros recorren el axón con todos sus extremos más apuntando hacia la [[sinapsis|real-neuron-synapse]]. Los motores de cinesina consumen ATP para llevar vesículas en sentido anterógrado a hasta 400 milímetros diarios, mientras la dineína devuelve orgánulos gastados y señales hacia los [[lisosomas|lysosome]] y el [[núcleo|nucleus]] del soma.',
        blueprint: {
          role: 'Red de carriles citoesqueléticos de 25 nm con polaridad uniforme que sostiene el suministro bidireccional entre soma y terminal',
          arrivesFrom: '[[Vesículas|vesicle]], proteínas de canal y [[mitocondrias|mitochondrion]] cargadas en cinesina desde el soma más ATP',
          inside: 'Haces paralelos de [[microtúbulos|microtubule]] de α/β-tubulina orientados con extremo (+) distal y estabilizados por proteína tau',
          deliversTo: '[[Vesículas sinápticas|real-mem-vesicle]] y [[mitocondrias|mitochondrion]] renovadas al botón terminal más retorno retrógrado a [[lisosomas|lysosome]]',
          loop: 'El tráfico bidireccional continuo mantiene abastecidos de membrana y energía a terminales alejados un metro del núcleo'
        },
        scientific:
          'Matrices axónicas de [[microtúbulos|microtubule]] de polaridad uniforme (25 nm de diámetro, 13 protofilamentos de α/β-tubulina estabilizados por tau en el [[citoesqueleto|cytoskeleton]], extremos más hacia la [[sinapsis|real-neuron-synapse]]). El transporte anterógrado rápido (~100–400 mm/día) usa cinesinas-1/3 dependientes de ATP para enviar precursores de [[vesículas sinápticas|real-mem-vesicle]] y [[mitocondrias|mitochondrion]], mientras la dineína citoplasmática impulsa el retorno retrógrado hacia [[lisosomas|lysosome]] somáticos.',
        from: [
          { nodeId: 'microtubule', label: 'Haces de tubulina', cargo: 'Vías de 25 nm extremo (+) distal' },
          { nodeId: 'real-neuron', label: 'Suministro somático', cargo: 'Vesículas y orgánulos nuevos' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Abastecimiento terminal', cargo: 'Entrega vesicular por cinesina' },
          { nodeId: 'lysosome', label: 'Reciclaje retrógrado', cargo: 'Retorno al soma por dineína' }
        ]
      }
    },

    terminal_bouton: {
      en: {
        subtitle: 'Presynaptic Terminal Bouton (Active Zone & Energy Reserve)',
        simple:
          'The terminal bouton is the swollen tip at the end of a [[neuron|real-neuron]] axon packed with neurotransmitter [[vesicles|real-mem-vesicle]], [[mitochondria|mitochondrion]], and [[Ca2+|atom-ca]] channels ready to fire across the [[20 nm synapse|real-neuron-synapse]].',
        story:
          'At the far end of the myelinated axon, the membrane flares into a bulbous presynaptic terminal bouton perched 20 nanometers above its target cell. Inside sit hundreds of ready-to-release 40-nanometer [[synaptic vesicles|real-mem-vesicle]] docked against a protein-dense active zone lined with voltage-gated Cav channels and primed SNARE complexes, backed up by clusters of [[mitochondria|mitochondrion]]. The instant a saltatory action potential arrives from the final [[Node of Ranvier|real-neuron-node]], electrical voltage converts directly into a localized [[Ca2+|atom-ca]] surge and synchronized chemical release.',
        blueprint: {
          role: 'Presynaptic transduction chamber converting incoming axonal action potentials into quantal chemical neurotransmitter bursts',
          arrivesFrom: 'Arriving action potential from the last [[Node of Ranvier|real-neuron-node]] plus [[vesicles|vesicle]] and [[mitochondria|mitochondrion]] via [[microtubules|microtubule]]',
          inside: 'Active-zone scaffold clustering Cav [[Ca2+|atom-ca]] channels, docked 40 nm [[synaptic vesicles|real-mem-vesicle]], primed SNARE complexes (PDB 1SFC), and local ATP synthesis',
          deliversTo: 'Synchronized glutamate or acetylcholine packets into the [[20 nm synaptic cleft|real-neuron-synapse]] onto [[AMPA|real-neuron-ampa]] / [[nAChR|real-neuron-nachr]]',
          loop: 'Clathrin-mediated endocytosis immediately recaptures fused vesicle membrane and reloads transmitters using proton-pump ATP'
        },
        scientific:
          'Presynaptic axon terminal bouton (~1-2 um varicosity) forming the upstream half of the [[chemical synapse|real-neuron-synapse]] on a [[multipolar neuron|real-neuron]]. Houses an electron-dense active zone (RIM, Munc13, Bassoon) coupling voltage-gated P/Q- and N-type Cav channels within ~20-100 nm of docked 40 nm [[synaptic vesicles|real-mem-vesicle]] and trans-SNARE bundles (PDB 1SFC), sustained metabolically by resident [[mitochondria|mitochondrion]] powering V-ATPase neurotransmitter refilling and clathrin retrieval.',
        from: [
          { nodeId: 'real-neuron-node', label: 'Final Node Impulse', cargo: 'Arriving +40 mV depolarization' },
          { nodeId: 'mitochondrion', label: 'Terminal Mitochondria', cargo: 'Local ATP for vesicle cycling' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Active Zone Release', cargo: 'Ca2+-triggered SNARE fusion' },
          { nodeId: 'real-mem-vesicle', label: 'Endocytic Recovery', cargo: 'Rapid vesicle recycling' }
        ]
      },
      es: {
        subtitle: 'Botón terminal presináptico (Zona activa y reserva energética)',
        simple:
          'El botón terminal es el extremo ensanchado del axón [[neuronal|real-neuron]], repleto de [[vesículas sinápticas|real-mem-vesicle]], [[mitocondrias|mitochondrion]] y canales de [[Ca²⁺|atom-ca]] listos para disparar sobre la [[sinapsis de 20 nm|real-neuron-synapse]].',
        story:
          'En el extremo distal del axón mielinizado, la membrana se ensancha en un botón terminal presináptico situado a 20 nanómetros de la célula diana. En su interior aguardan cientos de [[vesículas sinápticas|real-mem-vesicle]] de 40 nanómetros acopladas sobre una zona activa rodeada de canales Caᵥ y complejos SNARE cebados, respaldados por grupos de [[mitocondrias|mitochondrion]]. En cuanto llega el potencial de acción desde el último [[nodo de Ranvier|real-neuron-node]], el voltaje se convierte al instante en un pulso local de [[Ca²⁺|atom-ca]] y liberación química sincronizada.',
        blueprint: {
          role: 'Cámara transductora presináptica que convierte potenciales de acción entrantes en descargas cuánticas de neurotransmisores',
          arrivesFrom: 'Potencial de acción del último [[nodo de Ranvier|real-neuron-node]] más [[vesículas|vesicle]] y [[mitocondrias|mitochondrion]] vía [[microtúbulos|microtubule]]',
          inside: 'Andamio de zona activa con canales Caᵥ de [[Ca²⁺|atom-ca]], [[vesículas sinápticas|real-mem-vesicle]] de 40 nm, complejos SNARE (PDB 1SFC) y síntesis local de ATP',
          deliversTo: 'Paquetes sincronizados de glutamato o acetilcolina hacia la [[hendidura sináptica de 20 nm|real-neuron-synapse]] y receptores [[AMPA|real-neuron-ampa]] / [[nAChR|real-neuron-nachr]]',
          loop: 'La endocitosis mediada por clatrina recupera al instante la membrana vesicular fusionada y recarga neurotransmisores con ATP'
        },
        scientific:
          'Botón terminal axónico presináptico (varicosidad de ~1–2 µm) que conforma la mitad superior de la [[sinapsis química|real-neuron-synapse]] de la [[neurona multipolar|real-neuron]]. Contiene una zona activa densa (RIM, Munc13, Bassoon) que sitúa canales Caᵥ tipo P/Q y N a ~20–100 nm de [[vesículas sinápticas|real-mem-vesicle]] de 40 nm y haces trans-SNARE (PDB 1SFC), respaldado por [[mitocondrias|mitochondrion]] que financian el rellenado por V-ATPasa y el reciclaje vesicular.',
        from: [
          { nodeId: 'real-neuron-node', label: 'Impulso nodal final', cargo: 'Despolarización de +40 mV' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias terminales', cargo: 'ATP local para reciclaje' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Zona activa sináptica', cargo: 'Fusión SNARE activada por Ca²⁺' },
          { nodeId: 'real-mem-vesicle', label: 'Recuperación endocítica', cargo: 'Reciclaje rápido de vesículas' }
        ]
      }
    },

    cav_channel: {
      en: {
        subtitle: 'Presynaptic Voltage-Gated Ca2+ Channel (Cav Spark Gate)',
        simple:
          'Positioned right beside docked [[synaptic vesicles|real-mem-vesicle]], voltage-gated Cav channels open when the terminal depolarizes, admitting a brief flash of extracellular [[Ca2+|atom-ca]] that triggers neurotransmitter release.',
        story:
          'An action potential arriving at the terminal bouton cannot fuse a [[synaptic vesicle|real-mem-vesicle]] directly; it needs a chemical messenger that links membrane voltage to SNARE mechanics within microseconds. Voltage-gated Cav channels embedded directly inside the active zone perform that translation. When terminal depolarization swings past -20 mV, their S4 sensors shift open a highly selective pore tuned by four glutamate side chains to admit divalent [[Ca2+|atom-ca]] down a ten-thousand-fold gradient, raising local active-zone concentration from 100 nanomolar to tens of micromolar right around synaptotagmin.',
        blueprint: {
          role: 'Presynaptic electro-chemical transducer converting terminal voltage spikes into localized microdomain Ca2+ sparks',
          arrivesFrom: 'Arriving terminal action-potential depolarization plus steep ~10,000-fold extracellular [[Ca2+|atom-ca]] gradient (~2 mM outside vs ~100 nM inside)',
          inside: '24-TM four-domain Cav2.1/2.2 (P/Q- and N-type) alpha1 subunit anchored by RIM scaffolds within ~20-100 nm of docked vesicles',
          deliversTo: 'Localized microdomain [[Ca2+|atom-ca]] cloud binding synaptotagmin C2 domains to trigger [[SNARE vesicle fusion|real-neuron-synapse]]',
          loop: 'Presynaptic Ca2+-ATPase pumps and Na+/Ca2+ exchangers rapidly clear the Ca2+ spark so release stops cleanly after each spike'
        },
        scientific:
          'Presynaptic high-voltage-activated P/Q-type (Cav2.1) and N-type (Cav2.2) [[Ca2+|atom-ca]] channels (24-TM four-domain alpha1 pore with EEEE glutamate selectivity locus) tethered within ~20-100 nm of docked [[synaptic vesicles|real-mem-vesicle]] at the active zone of [[chemical synapses|real-neuron-synapse]]. Action-potential depolarization opens Cav pores for <1 ms, producing sharp ~10-100 uM local [[Ca2+|atom-ca]] nanodomains that cooperatively bind synaptotagmin-1 C2A/C2B domains to drive synchronous SNARE exocytosis.',
        from: [
          { nodeId: 'real-neuron-node', label: 'Terminal Depolarization', cargo: 'Action potential voltage wave' },
          { nodeId: 'atom-ca', label: 'Extracellular Ca2+', cargo: '10,000-fold inward gradient' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Synaptotagmin Trigger', cargo: '10-100 uM Ca2+ nanodomain' },
          { nodeId: 'real-mem-vesicle', label: 'Vesicle Fusion Signal', cargo: 'Synchronous SNARE release' }
        ]
      },
      es: {
        subtitle: 'Canal presináptico de Ca²⁺ dependiente de voltaje (Compuerta Caᵥ)',
        simple:
          'Situados junto a las [[vesículas sinápticas|real-mem-vesicle]] acopladas, los canales Caᵥ se abren cuando se despolariza el terminal, dejando entrar un destello de [[Ca²⁺|atom-ca]] extracelular que dispara la liberación de neurotransmisores.',
        story:
          'El potencial de acción que llega al botón terminal no puede fusionar directamente una [[vesícula sináptica|real-mem-vesicle]]; necesita un mensajero químico que enlace el voltaje de membrana con la maquinaria SNARE en microsegundos. Los canales Caᵥ anclados en la zona activa ejecutan esa traducción. Cuando el terminal se despolariza, sus sensores S4 abren un poro selectivo con cuatro glutamatos que deja entrar [[Ca²⁺|atom-ca]] a favor de un gradiente de diez mil veces, elevando localmente el calcio desde 100 nanomolar hasta decenas de micromolar alrededor de la sinaptotagmina.',
        blueprint: {
          role: 'Transductor electroquímico presináptico que convierte espigas de voltaje terminal en destellos locales de Ca²⁺',
          arrivesFrom: 'Despolarización del potencial de acción terminal y gradiente extracelular de [[Ca²⁺|atom-ca]] de ~10.000× (~2 mM fuera vs ~100 nM dentro)',
          inside: 'Subunidad α1 de 24 hélices en cuatro dominios Caᵥ2.1/2.2 (tipos P/Q y N) fijada por RIM a ~20–100 nm de las vesículas acopladas',
          deliversTo: 'Nube microdominial de [[Ca²⁺|atom-ca]] que activa los dominios C2 de sinaptotagmina para la [[fusión SNARE|real-neuron-synapse]]',
          loop: 'Bombas de Ca²⁺-ATPasa e intercambiadores Na⁺/Ca²⁺ limpian rápido el destello para cortar la liberación tras cada impulso'
        },
        scientific:
          'Canales presinápticos de [[Ca²⁺|atom-ca]] activados por alto voltaje tipos P/Q (Caᵥ2.1) y N (Caᵥ2.2) (subunidad α1 de 24 hélices en 4 dominios con filtro selectivo EEEE) anclados a ~20–100 nm de [[vesículas sinápticas|real-mem-vesicle]] en la zona activa de la [[sinapsis química|real-neuron-synapse]]. El potencial de acción abre los poros <1 ms generando nanodominios de ~10–100 µM de [[Ca²⁺|atom-ca]] que se unen cooperativamente a sinaptotagmina-1 para disparar la exocitosis SNARE.',
        from: [
          { nodeId: 'real-neuron-node', label: 'Despolarización terminal', cargo: 'Onda del potencial de acción' },
          { nodeId: 'atom-ca', label: 'Ca²⁺ extracelular', cargo: 'Gradiente entrante de 10.000×' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Disparo de sinaptotagmina', cargo: 'Nanodominio de 10–100 µM Ca²⁺' },
          { nodeId: 'real-mem-vesicle', label: 'Señal de fusión', cargo: 'Exocitosis SNARE sincronizada' }
        ]
      }
    },

    synaptic_vesicle: {
      en: {
        subtitle: '40 nm Neurotransmitter Synaptic Vesicle (Quantal Packet)',
        simple:
          'A synaptic vesicle is a tiny 40 nm [[phospholipid|phospholipid]] bubble docked inside the terminal bouton, pre-loaded with roughly 5,000 glutamate or acetylcholine molecules ready to spill into the [[synaptic cleft|real-neuron-synapse]].',
        story:
          'Neurotransmission arrives in crisp discrete packets rather than a slow trickle because presynaptic terminals pre-concentrate transmitters inside uniform 40-nanometer [[vesicles|real-mem-vesicle]]. Proton pumps (V-ATPases) acidify each vesicle lumen using [[mitochondrial|mitochondrion]] ATP so vesicular exchangers pack ~5,000 glutamate or acetylcholine molecules inside every sphere. Studded on its surface with VAMP2 SNARE tails and [[Ca2+|atom-ca]]-sensing synaptotagmin, each docked vesicle waits poised at the active zone until a Cav calcium spark drives membrane fusion and empties its full quantum in under half a millisecond.',
        blueprint: {
          role: 'Uniform 40 nm lipid delivery sphere storing discrete ~5,000-molecule neurotransmitter quanta for sub-millisecond release',
          arrivesFrom: 'Anterograde [[microtubule|microtubule]] precursor delivery, local endocytic recycling, and V-ATPase proton-coupled transmitter loading',
          inside: '40 nm curved [[phospholipid|phospholipid]] shell (~100 mM internal glutamate or ACh) studded with VAMP2/synaptobrevin, synaptotagmin-1, and V-ATPase',
          deliversTo: 'Quantal burst of ~5,000 neurotransmitters through the SNARE fusion pore across the [[20 nm cleft|real-neuron-synapse]] onto [[AMPA|real-neuron-ampa]] / [[nAChR|real-neuron-nachr]]',
          loop: 'Immediately after exocytosis, dynamin and clathrin pinch the vesicle lipid back inside the terminal for rapid refilling'
        },
        scientific:
          'Uniform ~40 nm diameter presynaptic [[synaptic vesicle|real-mem-vesicle]] ([[phospholipid|phospholipid]] bilayer shell ~4-5 nm thick) docked at the active zone of [[chemical synapses|real-neuron-synapse]]. Vacuolar H+-ATPase generates an internal proton electrochemical gradient driving vesicular transporters (VGLUT or VAChT) to load ~3,000-5,000 glutamate or acetylcholine molecules (~100 mM luminal concentration). Surface VAMP2 (synaptobrevin) engages plasma-membrane SNAREs (PDB 1SFC) while synaptotagmin-1 couples [[Ca2+|atom-ca]] entry to <0.5 ms quantal exocytosis.',
        from: [
          { nodeId: 'real-mem-vesicle', label: 'Vesicle Trafficking', cargo: '40 nm lipid & V-ATPase cycle' },
          { nodeId: 'microtubule', label: 'Axonal Supply Line', cargo: 'Kinesin-delivered precursors' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'SNARE Fusion Pore', cargo: '~5,000 transmitter quantum' },
          { nodeId: 'real-neuron-ampa', label: 'Postsynaptic Activation', cargo: 'Fast glutamate/ACh burst' }
        ]
      },
      es: {
        subtitle: 'Vesícula sináptica de 40 nm (Paquete cuántico de neurotransmisor)',
        simple:
          'Una vesícula sináptica es una diminuta esfera de [[fosfolípidos|phospholipid]] de 40 nm acoplada en el botón terminal, cargada con unas 5.000 moléculas de glutamato o acetilcolina listas para verterse en la [[hendidura sináptica|real-neuron-synapse]].',
        story:
          'La neurotransmisión llega en paquetes discretos precisos en vez de un goteo continuo porque el terminal concentra los mensajeros dentro de [[vesículas|real-mem-vesicle]] uniformes de 40 nanómetros. Bombas de protones V-ATPasa acidifican cada lumen con ATP [[mitocondrial|mitochondrion]] para que transportadores vesiculares carguen ~5.000 moléculas de glutamato o acetilcolina en cada esfera. Equipada en su superficie con colas SNARE VAMP2 y sinaptotagmina sensora de [[Ca²⁺|atom-ca]], cada vesícula acoplada aguarda en la zona activa hasta que el pulso de calcio abre el poro de fusión en medio milisegundo.',
        blueprint: {
          role: 'Esfera lipídica uniforme de 40 nm que almacena cuantos discretos de ~5.000 neurotransmisores para liberación submilisegundo',
          arrivesFrom: 'Precursores enviados por [[microtúbulos|microtubule]], reciclaje endocítico local y carga acoplada a protones por V-ATPasa',
          inside: 'Cubierta curva de [[fosfolípidos|phospholipid]] de 40 nm (~100 mM de glutamato o ACh) equipada con VAMP2, sinaptotagmina-1 y V-ATPasa',
          deliversTo: 'Descarga cuántica de ~5.000 neurotransmisores por el poro SNARE hacia la [[hendidura de 20 nm|real-neuron-synapse]] y [[AMPA|real-neuron-ampa]] / [[nAChR|real-neuron-nachr]]',
          loop: 'Inmediatamente después de la exocitosis, dinamina y clatrina recuperan la membrana vesicular para recargarla de nuevo'
        },
        scientific:
          '[[Vesícula sináptica|real-mem-vesicle]] presináptica uniforme de ~40 nm de diámetro (bicapa de [[fosfolípidos|phospholipid]] de ~4–5 nm) acoplada en la zona activa de la [[sinapsis química|real-neuron-synapse]]. La H⁺-ATPasa vacuolar crea un gradiente protónico que impulsa a VGLUT o VAChT a concentrar ~3.000–5.000 moléculas de glutamato o acetilcolina (~100 mM). VAMP2 se ensambla en el complejo SNARE (PDB 1SFC) mientras sinaptotagmina-1 acopla el [[Ca²⁺|atom-ca]] a la exocitosis cuántica en <0,5 ms.',
        from: [
          { nodeId: 'real-mem-vesicle', label: 'Tráfico vesicular', cargo: 'Ciclo lipídico y V-ATPasa' },
          { nodeId: 'microtubule', label: 'Línea axónica', cargo: 'Precursores vía cinesina' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Poro de fusión SNARE', cargo: 'Cuanto de ~5.000 transmisores' },
          { nodeId: 'real-neuron-ampa', label: 'Activación postsináptica', cargo: 'Ráfaga de glutamato/ACh' }
        ]
      }
    },

    snare_zipper: {
      en: {
        subtitle: 'Neuronal 4-Helix SNARE Fusion Complex (PDB 1SFC)',
        simple:
          'The neuronal SNARE complex is a four-helix bundle of [[proteins|protein]] bridging a docked [[synaptic vesicle|real-mem-vesicle]] and the terminal [[plasma membrane|plasma-membrane]]. Triggered by [[Ca2+|atom-ca]], its helices coil tightly together to merge both membranes and release neurotransmitters.',
        story:
          'Two hydrated [[phospholipid|phospholipid]] bilayers strongly repel one another and will not fuse spontaneously in water. At the presynaptic active zone, four complementary alpha-helices (vesicle-anchored VAMP2 (synaptobrevin) paired with terminal syntaxin-1A and two helices from SNAP-25)assemble partway and pause behind a complexin clamp. The microsecond Cav-admitted [[Ca2+|atom-ca]] binds synaptotagmin, that brake releases and the four SNARE coils wind completely from their N-terminal tips down to their membrane anchors, generating enough mechanical force to pry open a fusion pore into the [[20 nm synaptic cleft|real-neuron-synapse]].',
        blueprint: {
          role: 'Mechanical coiled-coil membrane fusion engine overcoming bilayer hydration repulsion upon Ca2+ triggering',
          arrivesFrom: 'Vesicle v-SNARE (VAMP2), terminal t-SNAREs (syntaxin-1A + SNAP-25), and synaptotagmin-sensed [[Ca2+|atom-ca]] spark',
          inside: 'Parallel four-helix coiled-coil core (PDB 1SFC; 16 hydrophobic layers + central ionic 0-layer) zipping N-to-C across both bilayers',
          deliversTo: 'Open membrane fusion pore releasing ~5,000 neurotransmitters across the [[20 nm cleft|real-neuron-synapse]] within <0.5 ms',
          loop: 'After fusion, NSF AAA+ ATPase spends ATP alongside alpha-SNAP to pry apart spent cis-SNARE bundles for the next cycle'
        },
        scientific:
          'Neuronal synaptic exocytosis SNARE core complex (crystal structure PDB 1SFC; ~12 nm parallel four-helix coiled-coil bundle uniting vesicle R-SNARE VAMP2/synaptobrevin-2 with plasma-membrane Q-SNAREs syntaxin-1A and two SNAP-25 helices) operating at [[chemical synapses|real-neuron-synapse]]. Stabilized by 15 flanking hydrophobic layers around a conserved central Arg/Gln ionic zero-layer, Ca2+-synaptotagmin-triggered C-terminal zippering releases ~35-65 kBT per complex to fuse 40 nm [[synaptic vesicles|real-mem-vesicle]] with the [[plasma membrane|plasma-membrane]], later disassembled by ATP-consuming NSF/alpha-SNAP.',
        from: [
          { nodeId: 'atom-ca', label: 'Ca2+-Synaptotagmin', cargo: 'Unclamps primed SNAREs' },
          { nodeId: 'real-mem-vesicle', label: 'VAMP2 + t-SNAREs', cargo: '4 complementary helices' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Membrane Fusion Pore', cargo: '<0.5 ms quantal release' },
          { nodeId: 'plasma-membrane', label: 'Bilayer Merger', cargo: 'Exocytosis into 20 nm cleft' }
        ]
      },
      es: {
        subtitle: 'Complejo neuronal SNARE de 4 hélices (PDB 1SFC)',
        simple:
          'El complejo neuronal SNARE es un haz de cuatro hélices [[proteicas|protein]] que enlaza la [[vesícula sináptica|real-mem-vesicle]] con la [[membrana plasmática|plasma-membrane]] terminal. Al llegar [[Ca²⁺|atom-ca]], sus hélices se enrollan con fuerza fundiendo ambas membranas.',
        story:
          'Dos bicapas hidratadas de [[fosfolípidos|phospholipid]] se repelen intensamente y no se fusionan solas en agua. En la zona activa presináptica, cuatro hélices alfa complementarias —VAMP2 (sinaptobrevina) en la vesícula junto a sintaxina-1A y dos hélices de SNAP-25 en el terminal— comienzan a trenzarse y aguardan retenidas por complexina. En el microsegundo en que el [[Ca²⁺|atom-ca]] de los canales Caᵥ activa la sinaptotagmina, el freno cede y las cuatro hélices SNARE se enrollan hasta sus anclajes de membrana, generando la fuerza mecánica necesaria para abrir el poro de fusión hacia la [[hendidura sináptica de 20 nm|real-neuron-synapse]].',
        blueprint: {
          role: 'Motor mecánico de hélices superenrolladas que vence la repulsión de hidratación de las bicapas tras la señal de Ca²⁺',
          arrivesFrom: 'v-SNARE vesicular (VAMP2), t-SNARE terminales (sintaxina-1A + SNAP-25) y destello de [[Ca²⁺|atom-ca]] captado por sinaptotagmina',
          inside: 'Núcleo paralelo de cuatro hélices superenrolladas (PDB 1SFC; 16 capas hidrofóbicas y capa central iónica 0) cerrándose de N a C',
          deliversTo: 'Poro de fusión abierto que descarga ~5.000 neurotransmisores en la [[hendidura de 20 nm|real-neuron-synapse]] en <0,5 ms',
          loop: 'Tras la fusión, la ATPasa NSF con α-SNAP gasta ATP para desenredar los haces cis-SNARE y reutilizarlos'
        },
        scientific:
          'Núcleo del complejo neuronal SNARE de exocitosis sináptica (cristalografía PDB 1SFC; haz paralelo de cuatro hélices de ~12 nm integrando la R-SNARE vesicular VAMP2/sinaptobrevina-2 con las Q-SNARE sintaxina-1A y dos hélices de SNAP-25) en [[sinapsis químicas|real-neuron-synapse]]. Estabilizado por 15 capas hidrofóbicas y una capa cero iónica Arg/Gln, su cierre C-terminal disparado por [[Ca²⁺|atom-ca]]–sinaptotagmina aporta ~35–65 k_BT fusionando [[vesículas sinápticas|real-mem-vesicle]] con la [[membrana plasmática|plasma-membrane]] antes de su desensamblaje por NSF/ATP.',
        from: [
          { nodeId: 'atom-ca', label: 'Ca²⁺–sinaptotagmina', cargo: 'Libera el freno SNARE' },
          { nodeId: 'real-mem-vesicle', label: 'VAMP2 + t-SNARE', cargo: '4 hélices complementarias' }
        ],
        to: [
          { nodeId: 'real-neuron-synapse', label: 'Poro de fusión', cargo: 'Descarga cuántica <0,5 ms' },
          { nodeId: 'plasma-membrane', label: 'Fusión de bicapas', cargo: 'Exocitosis a la hendidura 20 nm' }
        ]
      }
    },

    synaptic_cleft: {
      en: {
        subtitle: '20 nm Aqueous Synaptic Cleft (Chemical Diffusion Corridor)',
        simple:
          'The synaptic cleft is the narrow 20 nm [[water|water]]-filled gap separating the presynaptic terminal from the receiving cell. Because it is so thin, released neurotransmitters diffuse across in microseconds to unlock [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] channels.',
        story:
          'Although 20 nanometers is barely four membrane thicknesses wide, that fluid gap completely isolates the electrical circuits of two neighboring cells so signals remain strictly one-way and tunable. Adhesion [[proteins|protein]] (neurexins and neuroligins) span the cleft structurally, keeping presynaptic active zones aligned directly over postsynaptic receptor clusters. Once SNARE fusion spills glutamate or acetylcholine into the gap, Brownian motion carries ligands across 20 nanometers in roughly 50 microseconds before rapid enzymatic breakdown or reuptake transporters clear the cleft for the next signal.',
        blueprint: {
          role: 'Ultra-thin 20 nm extracellular fluid junction enforcing unidirectional electro-chemical signaling and rapid clearance',
          arrivesFrom: 'Quantal glutamate and acetylcholine bursts released through presynaptic [[SNARE fusion pores|real-neuron-synapse]]',
          inside: '20 nm extracellular [[water|water]] corridor bridged by trans-synaptic adhesion complexes (neurexin-neuroligin) and clearance enzymes (AChE)',
          deliversTo: 'High-concentration (~1 mM peak) transmitter wavefront hitting postsynaptic [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] receptors in <100 us',
          loop: 'Astrocytic EAAT glutamate transporters and synaptic acetylcholinesterase clear the cleft within ~1 ms to prevent excitotoxicity'
        },
        scientific:
          'Extracellular synaptic cleft (~20 nm width in central glutamatergic synapses; ~30-50 nm with basal lamina at neuromuscular junctions) separating presynaptic active zones from postsynaptic densities in [[chemical synapses|real-neuron-synapse]]. Aligned by trans-synaptic neurexin-neuroligin adhesion bridges, small-molecule neurotransmitters (glutamate, acetylcholine; D approx 0.3-0.7 um^2/ms in [[water|water]]) diffuse across 20 nm in <50 us to reach ~1 mM peak concentration on [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] before rapid clearance by EAAT reuptake or acetylcholinesterase.',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'SNARE Release Site', cargo: '1 mM transmitter surge' },
          { nodeId: 'water', label: '20 nm Aqueous Gap', cargo: '<50 us Brownian transit' }
        ],
        to: [
          { nodeId: 'real-neuron-ampa', label: 'AMPA Receptor Array', cargo: 'Glutamate CNS excitation' },
          { nodeId: 'real-neuron-nachr', label: 'nAChR Receptor Array', cargo: 'ACh neuromuscular firing' }
        ]
      },
      es: {
        subtitle: 'Hendidura sináptica acuosa de 20 nm (Corredor de difusión química)',
        simple:
          'La hendidura sináptica es el estrecho espacio de 20 nm lleno de [[agua|water]] entre el terminal presináptico y la célula receptora. Al ser tan delgada, los neurotransmisores la cruzan en microsegundos para abrir [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]].',
        story:
          'Aunque 20 nanómetros equivalen apenas al grosor de cuatro membranas, ese espacio fluido aísla eléctricamente a ambas células para que la transmisión sea unidireccional y modulable. [[Proteínas|protein]] de adhesión (neurexinas y neuroliginas) enlazan ambos lados manteniendo alineada la zona activa presináptica sobre los receptores postsinápticos. Cuando la fusión SNARE libera glutamato o acetilcolina, el movimiento browniano los lleva al otro borde en unos 50 microsegundos antes de que enzimas o transportadores limpien la brecha para el siguiente pulso.',
        blueprint: {
          role: 'Espacio extracelular ultrafino de 20 nm que impone transmisión electroquímica unidireccional y limpieza veloz',
          arrivesFrom: 'Ráfagas cuánticas de glutamato y acetilcolina vertidas por los [[poros SNARE|real-neuron-synapse]] presinápticos',
          inside: 'Corredor acuoso de [[agua|water]] de 20 nm estabilizado por puentes neurexina–neuroligina y enzimas de limpieza como acetilcolinesterasa',
          deliversTo: 'Frente de transmisores (~1 mM de pico) sobre receptores postsinápticos [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]] en <100 µs',
          loop: 'Transportadores astrocíticos EAAT y acetilcolinesterasa despejan la hendidura en ~1 ms evitando excitotoxicidad'
        },
        scientific:
          'Hendidura sináptica extracelular (~20 nm en sinapsis centrales glutamatérgicas; ~30–50 nm con lámina basal en placas motoras) entre la zona activa y la densidad postsináptica de las [[sinapsis químicas|real-neuron-synapse]]. Alineada por complejos trans-sinápticos neurexina–neuroligina, permite difusión en [[agua|water]] de glutamato o acetilcolina (D ≈ 0,3–0,7 µm²/ms) en <50 µs alcanzando ~1 mM sobre [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]] antes de su retirada por EAAT o acetilcolinesterasa.',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Sitio de fusión SNARE', cargo: 'Pulso de transmisor ~1 mM' },
          { nodeId: 'water', label: 'Brecha acuosa de 20 nm', cargo: 'Difusión browniana <50 µs' }
        ],
        to: [
          { nodeId: 'real-neuron-ampa', label: 'Matriz de receptores AMPA', cargo: 'Excitación central por glutamato' },
          { nodeId: 'real-neuron-nachr', label: 'Matriz de receptores nAChR', cargo: 'Disparo neuromuscular por ACh' }
        ]
      }
    },

    ampa_receptor: {
      en: {
        subtitle: 'Postsynaptic AMPA Glutamate Channel GluA2 (PDB 3KG2)',
        simple:
          'Standing on the receiving side of the [[synapse|real-neuron-synapse]], Y-shaped [[AMPA receptors|real-neuron-ampa]] capture diffusing glutamate and snap open in under a millisecond to let Na+ rush in and excite the next [[neuron|real-neuron]].',
        story:
          'Built from four GluA2 subunits towering ~14 nanometers above the postsynaptic bilayer, [[AMPA receptors|real-neuron-ampa]] execute the fastest excitatory switching in the human brain. Each subunit pairs an upper N-terminal scaffold with a bilobed clam-shell ligand-binding domain linked straight to the transmembrane M3 gate helices. When glutamate crosses the [[20 nm cleft|real-neuron-synapse]] and snaps those clam-shells shut, mechanical tension pulls the central pore open so extracellular Na+ streams inside, generating an excitatory postsynaptic current before rapid desensitization resets the channel.',
        blueprint: {
          role: 'Fast postsynaptic glutamate-gated Na+ channel translating central chemical release into millisecond electrical depolarization',
          arrivesFrom: 'Diffusing L-glutamate (C5H9NO4) crossing the [[20 nm synaptic cleft|real-neuron-synapse]] plus extracellular Na+ gradient',
          inside: '400 kDa Y-shaped GluA2 homotetramer (PDB 3KG2) coupling bilobed clam-shell ligand-binding domains to M3 gate helices and Q/R-edited M2 pore',
          deliversTo: 'Rapid inward Na+ excitatory postsynaptic potential (EPSP) traveling down dendrites toward [[Nav1.7|real-neuron-nav17]] spike initiation',
          loop: 'Receptor trafficking into and out of postsynaptic densities adjusts synaptic weight during memory formation'
        },
        scientific:
          'Postsynaptic ionotropic [[AMPA glutamate receptor|real-neuron-ampa]] GluA2 homotetramer (crystal structure PDB 3KG2; ~400 kDa Y-shaped tetramer anchored in central postsynaptic densities across [[chemical synapses|real-neuron-synapse]]). Glutamate ([[C/H/N/O|real-spec-atoms]]) closes bilobed S1-S2 clam-shell domains by ~20 degrees, pulling M3-S2 linkers to open the cation pore (<0.5 ms). Q/R RNA editing (Arg607) in the re-entrant M2 loop passes Na+/K+ while excluding [[Ca2+|atom-ca]], driving fast EPSPs in the receiving [[neuron|real-neuron]].',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Cleft Glutamate Pulse', cargo: 'C5H9NO4 excitatory ligand' },
          { nodeId: 'real-spec-atoms', label: 'Extracellular Na+', cargo: 'Fast inward cation current' }
        ],
        to: [
          { nodeId: 'real-neuron-ampa', label: 'AMPA GluA2 Node', cargo: 'Clam-shell LBD & M3 gate' },
          { nodeId: 'real-neuron', label: 'Postsynaptic Neuron', cargo: 'Excitatory EPSP summation' }
        ]
      },
      es: {
        subtitle: 'Canal postsináptico AMPA de glutamato GluA2 (PDB 3KG2)',
        simple:
          'Situados en la cara receptora de la [[sinapsis|real-neuron-synapse]], los [[receptores AMPA|real-neuron-ampa]] en forma de Y captan glutamato y se abren en menos de un milisegundo dejando entrar Na⁺ para excitar a la siguiente [[neurona|real-neuron]].',
        story:
          'Formados por cuatro subunidades GluA2 que sobresalen ~14 nanómetros sobre la bicapa postsináptica, los [[receptores AMPA|real-neuron-ampa]] ejecutan la conmutación excitadora más rápida del encéfalo humano. Cada subunidad une un andamio superior N-terminal con una concha bilobulada acoplada directamente a las hélices M3 del poro. Al cruzar el glutamato la [[hendidura de 20 nm|real-neuron-synapse]] y cerrar esas conchas, la tracción mecánica abre el canal para que entre Na⁺, generando una corriente excitadora antes de desensibilizarse rápidamente.',
        blueprint: {
          role: 'Canal postsináptico rápido de Na⁺ activado por glutamato que traduce liberación química central en despolarización milisegundo',
          arrivesFrom: 'L-glutamato (C₅H₉NO₄) difundido por la [[hendidura sináptica de 20 nm|real-neuron-synapse]] y gradiente extracelular de Na⁺',
          inside: 'Homotetrámero GluA2 en Y de 400 kDa (PDB 3KG2) acoplando conchas bilobuladas LBD con hélices M3 y poro M2 editado Q/R',
          deliversTo: 'Potencial postsináptico excitador (PEPS) rápido de Na⁺ que avanza hacia la ignición de [[Naᵥ1.7|real-neuron-nav17]]',
          loop: 'La inserción o retirada de receptores AMPA en la densidad postsináptica ajusta el peso sináptico durante la memoria'
        },
        scientific:
          '[[Receptor ionotrópico AMPA|real-neuron-ampa]] de glutamato homotetramérico GluA2 (cristalografía PDB 3KG2; ~400 kDa en forma de Y en densidades postsinápticas de [[sinapsis químicas|real-neuron-synapse]]). El glutamato ([[C/H/N/O|real-spec-atoms]]) cierra ~20° los dominios S1–S2 en concha, tirando de los conectores M3–S2 para abrir el poro catiónico (<0,5 ms). La edición Q/R (Arg607) en el bucle M2 conduce Na⁺/K⁺ bloqueando [[Ca²⁺|atom-ca]] para generar PEPS rápidos en la [[neurona|real-neuron]] receptora.',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Pulso de glutamato', cargo: 'Ligando excitador C₅H₉NO₄' },
          { nodeId: 'real-spec-atoms', label: 'Na⁺ extracelular', cargo: 'Corriente catiónica rápida' }
        ],
        to: [
          { nodeId: 'real-neuron-ampa', label: 'Nodo AMPA GluA2', cargo: 'Concha LBD y compuerta M3' },
          { nodeId: 'real-neuron', label: 'Neurona postsináptica', cargo: 'Suma excitadora de PEPS' }
        ]
      }
    },

    nachr_receptor: {
      en: {
        subtitle: 'Nicotinic Acetylcholine Receptor nAChR (PDB 2BG9)',
        simple:
          'Pentameric [[nAChR channels|real-neuron-nachr]] sit across cholinergic and neuromuscular [[synapses|real-neuron-synapse]], twisting open the moment two acetylcholine molecules dock so Na+ floods in to fire the receiving [[neuron|real-neuron]] or [[muscle fiber|real-muscle]].',
        story:
          'Linking motor [[neurons|real-neuron]] directly to [[skeletal muscle fibers|real-muscle]] as well as cholinergic brain circuits, the five-subunit [[nAChR|real-neuron-nachr]] ring (two alpha, beta, gamma, and delta) converts acetylcholine puffs into unmistakable depolarization. Two ligand molecules must occupy both alpha subunit interfaces simultaneously, sending a rotational wave down the Cys-loop vestibule to twist five pore-lining M2 helices apart. Widening that central hydrophobic constriction admits a brisk inward Na+ flood strong enough to trigger every downstream sarcolemmal action potential before cleft acetylcholinesterase clears the signal.',
        blueprint: {
          role: 'Pentameric acetylcholine-gated cation channel bridging cholinergic nerve terminals to muscle end-plates and CNS targets',
          arrivesFrom: 'Two acetylcholine (C7H16NO2+) molecules crossing the [[20 nm cleft|real-neuron-synapse]] plus extracellular Na+ gradient',
          inside: '290 kDa Cys-loop heteropentamer (alpha2-beta-gamma-delta; cryo-EM PDB 2BG9) rotating five M2 helices to widen a 0.8 nm cation pore',
          deliversTo: 'Depolarizing Na+ end-plate current launching action potentials across [[skeletal muscle fibers|real-muscle]] and cholinergic [[neurons|real-neuron]]',
          loop: 'Neuromuscular blockers and neurotoxins selectively occupy these interfacial ACh pockets (explored in [[pharmacology|real-pharmacology]])'
        },
        scientific:
          'Pentameric Cys-loop [[nicotinic acetylcholine receptor|real-neuron-nachr]] (cryo-EM structure PDB 2BG9; ~290 kDa alpha2-beta-gamma-delta assembly, 4 TM helices per subunit) operating at cholinergic [[synapses|real-neuron-synapse]] and neuromuscular junctions on [[skeletal muscle|real-muscle]]. Cooperative binding of two acetylcholine molecules ([[C/H/N/O|real-spec-atoms]]) at alpha-gamma and alpha-delta interfaces rotates inner M2 helices to widen the central Leu/Val gate (~0.8 nm), conducting rapid net Na+ influx until acetylcholinesterase hydrolyzes ACh within ~1 ms.',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Cleft ACh Release', cargo: '2 acetylcholine ligands' },
          { nodeId: 'real-spec-atoms', label: 'Extracellular Na+', cargo: 'End-plate inward cation surge' }
        ],
        to: [
          { nodeId: 'real-neuron-nachr', label: 'nAChR Explorer Node', cargo: 'Pentameric Cys-loop M2 gate' },
          { nodeId: 'real-muscle', label: 'Muscle Fiber Trigger', cargo: 'Neuromuscular excitation' }
        ]
      },
      es: {
        subtitle: 'Receptor nicotínico de acetilcolina nAChR (PDB 2BG9)',
        simple:
          'Los canales pentaméricos [[nAChR|real-neuron-nachr]] se sitúan en [[sinapsis|real-neuron-synapse]] colinérgicas y neuromusculares, girando para abrirse al unirse dos acetilcolinas y dejar entrar Na⁺ en la [[neurona|real-neuron]] o [[fibra muscular|real-muscle]].',
        story:
          'Enlazando [[neuronas|real-neuron]] motoras con [[fibras musculares esqueléticas|real-muscle]] y circuitos colinérgicos cerebrales, el anillo pentamérico [[nAChR|real-neuron-nachr]] (dos subunidades alfa, beta, gamma y delta) convierte descargas de acetilcolina en una despolarización segura. Dos ligandos deben ocupar a la vez ambas interfaces alfa para propagar una torsión por el bucle Cys que separa las cinco hélices internas M2. Al abrirse ese anillo hidrofóbico entra un flujo intenso de Na⁺ capaz de encender el potencial de acción muscular antes de que la acetilcolinesterasa limpie el ligando.',
        blueprint: {
          role: 'Canal catiónico pentamérico activado por acetilcolina que conecta terminales motores con placas musculares y sinapsis colinérgicas',
          arrivesFrom: 'Dos moléculas de acetilcolina (C₇H₁₆NO₂⁺) difundidas por la [[hendidura de 20 nm|real-neuron-synapse]] y gradiente externo de Na⁺',
          inside: 'Heteropentámero de bucle Cys de 290 kDa (α₂βγδ; crio-EM PDB 2BG9) rotando cinco hélices M2 hasta abrir un poro de 0,8 nm',
          deliversTo: 'Corriente despolarizante de placa motora que inicia potenciales de acción en [[músculo esquelético|real-muscle]] y [[neuronas|real-neuron]]',
          loop: 'Bloqueantes neuromusculares y toxinas ocupan estos mismos bolsillos de ACh (analizado en [[farmacología|real-pharmacology]])'
        },
        scientific:
          '[[Receptor nicotínico de acetilcolina|real-neuron-nachr]] pentamérico de bucle Cys (crio-EM PDB 2BG9; ~290 kDa α₂βγδ con 4 hélices TM por subunidad) en [[sinapsis|real-neuron-synapse]] colinérgicas y uniones neuromusculares del [[músculo esquelético|real-muscle]]. La unión cooperativa de dos acetilcolinas ([[C/H/N/O|real-spec-atoms]]) en las interfaces α–γ y α–δ rota las hélices internas M2 abriendo la compuerta Leu/Val (~0,8 nm) y conduciendo Na⁺ neto hasta la hidrólisis por acetilcolinesterasa (~1 ms).',
        from: [
          { nodeId: 'real-neuron-synapse', label: 'Liberación de ACh', cargo: '2 ligandos de acetilcolina' },
          { nodeId: 'real-spec-atoms', label: 'Na⁺ extracelular', cargo: 'Entrada catiónica de placa motora' }
        ],
        to: [
          { nodeId: 'real-neuron-nachr', label: 'Nodo nAChR', cargo: 'Compuerta M2 de bucle Cys' },
          { nodeId: 'real-muscle', label: 'Disparo muscular', cargo: 'Excitación neuromuscular' }
        ]
      }
    },

    neuro_atoms: {
      en: {
        subtitle: 'Neuronal Atomic Lens (Glutamate, ACh, H3K27ac & Na+/K+/Ca2+)',
        simple:
          'Zooming down to 0.1-0.5 nm reveals the exact atoms powering [[neuronal|real-neuron]] thought: [[C/H/N/O|atom-c]] neurotransmitters glutamate and acetylcholine, the H3K27ac acetyl tag, and monovalent Na+/K+ alongside divalent [[Ca2+|atom-ca]] ions.',
        story:
          'Every macroscopic thought or reflex reduces at 0.1 nanometers to precise atomic geometry and charge. One neutral acetyl group (-COCH3) of [[carbon|atom-c]], [[hydrogen|atom-h]], and [[oxygen|atom-o]] opens [[H3K27ac chromatin|real-epigenetics]] in the soma. Down the axon, a 0.036-nanometer ionic radius difference lets [[Nav1.7|real-neuron-nav17]] and [[Kv1.2|real-neuron-kv12]] separate Na+ from K+. At the [[20 nm synapse|real-neuron-synapse]], heptacoordinate [[Ca2+|atom-ca]] triggers SNARE fusion so [[nitrogen|atom-n]]-bearing L-glutamate (C5H9NO4) and acetylcholine dock cleanly into [[AMPA|real-neuron-ampa]] and [[nAChR|real-neuron-nachr]] pockets.',
        blueprint: {
          role: 'Sub-nanometer atomic foundation linking epigenetic marks, ionic conductance, and neurotransmitter ligand recognition',
          arrivesFrom: 'Universal biological elements ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]) plus ionic Na+, K+, [[Ca2+|atom-ca]], and [[Mg2+|atom-mg]]',
          inside: 'CPK ball-and-stick L-glutamate (C5H9NO4), acetylcholine (C7H16NO2+), Lys27 acetyl (-COCH3), and hydrated Na+/K+/Ca2+ charge shells',
          deliversTo: 'Exact steric and electrostatic gating across [[H3K27ac|real-epigenetics]], [[Nav1.7|real-neuron-nav17]], [[Kv1.2|real-neuron-kv12]], [[AMPA|real-neuron-ampa]], and [[nAChR|real-neuron-nachr]]',
          loop: 'Identical atoms assemble every human tissue, showing specialization arises from molecular arrangement, not exotic elements'
        },
        scientific:
          'Atomic scale (0.1-0.5 nm) of [[neuronal|real-neuron]] signaling uniting [[atomic currencies|real-spec-atoms]]: L-glutamate (C5H9NO4, MW 147.1 Da) and acetylcholine (C7H16NO2+, MW 146.2 Da) built from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], and [[O|atom-o]]; histone H3K27ac acetyl (-COCH3) charge neutralization; monovalent cation dehydration selectivity between Na+ (0.102 nm) in [[Nav1.7|real-neuron-nav17]] and K+ (0.138 nm) in [[Kv1.2|real-neuron-kv12]]; divalent [[Ca2+|atom-ca]] (0.100 nm) triggering synaptotagmin/SNARE exocytosis; and [[Mg2+|atom-mg]]-ATP ([[P|atom-p]]) fueling [[Na+/K+-ATPase|real-mem-nak]].',
        from: [
          { nodeId: 'atom-c', label: 'C / H / N / O Ligands', cargo: 'Glutamate, ACh & -COCH3' },
          { nodeId: 'atom-ca', label: 'Signaling Metal Ions', cargo: 'Ca2+, Na+, K+ & Mg2+' }
        ],
        to: [
          { nodeId: 'real-spec-atoms', label: 'Specialized Atoms Node', cargo: 'Cross-cell atomic currencies' },
          { nodeId: 'real-neuron-synapse', label: 'Synaptic Gatekeeping', cargo: 'Atomic ion & ligand fit' }
        ]
      },
      es: {
        subtitle: 'Lente atómica neuronal (Glutamato, ACh, H3K27ac y Na⁺/K⁺/Ca²⁺)',
        simple:
          'Al bajar a 0,1–0,5 nm aparecen los átomos exactos del impulso [[neuronal|real-neuron]]: los neurotransmisores glutamato y acetilcolina de [[C/H/N/O|atom-c]], la etiqueta acetilo H3K27ac y los iones Na⁺, K⁺ y [[Ca²⁺|atom-ca]].',
        story:
          'Cada pensamiento o reflejo macroscópico se reduce a 0,1 nanómetros de geometría y carga atómica exacta. Un grupo acetilo neutro (–COCH₃) de [[carbono|atom-c]], [[hidrógeno|atom-h]] y [[oxígeno|atom-o]] abre la [[cromatina H3K27ac|real-epigenetics]] en el soma. En el axón, apenas 0,036 nanómetros de diferencia en radio iónico permiten a [[Naᵥ1.7|real-neuron-nav17]] y [[Kᵥ1.2|real-neuron-kv12]] separar Na⁺ de K⁺. En la [[sinapsis de 20 nm|real-neuron-synapse]], el [[Ca²⁺|atom-ca]] dispara la fusión SNARE para que glutamato (C₅H₉NO₄) y acetilcolina con [[nitrógeno|atom-n]] encajen en [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]].',
        blueprint: {
          role: 'Base atómica subnanométrica que une marcas epigenéticas, conductancia iónica y reconocimiento de neurotransmisores',
          arrivesFrom: 'Elementos biológicos universales ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]) e iones Na⁺, K⁺, [[Ca²⁺|atom-ca]] y [[Mg²⁺|atom-mg]]',
          inside: 'Modelos CPK de L-glutamato (C₅H₉NO₄), acetilcolina (C₇H₁₆NO₂⁺), acetilo Lys27 (–COCH₃) y capas de hidratación de Na⁺/K⁺/Ca²⁺',
          deliversTo: 'Apertura estérica y electrostática precisa en [[H3K27ac|real-epigenetics]], [[Naᵥ1.7|real-neuron-nav17]], [[Kᵥ1.2|real-neuron-kv12]], [[AMPA|real-neuron-ampa]] y [[nAChR|real-neuron-nachr]]',
          loop: 'Los mismos elementos construyen todos los tejidos humanos: la especialización surge de su arquitectura molecular'
        },
        scientific:
          'Escala atómica (0,1–0,5 nm) de la señalización [[neuronal|real-neuron]] enlazada con [[divisas atómicas|real-spec-atoms]]: L-glutamato (C₅H₉NO₄, 147,1 Da) y acetilcolina (C₇H₁₆NO₂⁺, 146,2 Da) de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]] y [[O|atom-o]]; neutralización de carga por acetilo H3K27ac (–COCH₃); selectividad por radio entre Na⁺ (0,102 nm) en [[Naᵥ1.7|real-neuron-nav17]] y K⁺ (0,138 nm) en [[Kᵥ1.2|real-neuron-kv12]]; [[Ca²⁺|atom-ca]] divalente (0,100 nm) activando sinaptotagmina/SNARE y [[Mg²⁺|atom-mg]]–ATP ([[P|atom-p]]) en [[Na⁺/K⁺-ATPasa|real-mem-nak]].',
        from: [
          { nodeId: 'atom-c', label: 'Ligandos C / H / N / O', cargo: 'Glutamato, ACh y –COCH₃' },
          { nodeId: 'atom-ca', label: 'Iones metálicos señalizadores', cargo: 'Ca²⁺, Na⁺, K⁺ y Mg²⁺' }
        ],
        to: [
          { nodeId: 'real-spec-atoms', label: 'Nodo átomos especializados', cargo: 'Divisas atómicas compartidas' },
          { nodeId: 'real-neuron-synapse', label: 'Compuerta sináptica', cargo: 'Encaje atómico de iones y ligandos' }
        ]
      }
    }
  },

  'muscle_realistic.html': {
    sarcolemma: {
      en: {
        subtitle: 'Excitable Skeletal Muscle Sarcolemma (Plasma Membrane)',
        simple:
          'The sarcolemma is the excitable outer [[plasma membrane|plasma-membrane]] wrapping a [[skeletal muscle fiber|real-muscle]]. It receives motor-neuron acetylcholine via [[nAChR|real-neuron-nachr]] and conducts rapid action potentials straight into deep T-tubules.',
        story:
          'Surrounding a 20-to-100-micrometer-wide contractile cylinder, the sarcolemma does far more than hold cytoplasm inside. Beneath its outer [[phospholipid|phospholipid]] bilayer, dystrophin links internal myofibrils across the membrane to the extracellular basal lamina so strong contractions transfer force cleanly to tendons without tearing the cell. At the neuromuscular motor end-plate, [[nAChR channels|real-neuron-nachr]] ignite an electrical depolarization wave that races rapidly over the entire sarcolemma and plunges down every transverse T-tubule while [[Na+/K+-ATPase|real-mem-nak]] keeps the -90 mV resting potential charged.',
        blueprint: {
          role: 'Excitable outer force-transmitting muscle membrane coupling neuromuscular synaptic input to deep T-tubule excitation',
          arrivesFrom: 'Motor-neuron acetylcholine activating [[nAChR|real-neuron-nachr]] at the neuromuscular [[synapse|real-neuron-synapse]] plus [[mitochondrial|mitochondrion]] ATP',
          inside: 'Excitable [[phospholipid|phospholipid]] bilayer packed with Nav1.4, Kv channels, [[Na+/K+-ATPase|real-mem-nak]], and dystrophin-glycoprotein mechanical anchors',
          deliversTo: 'Synchronized action-potential waves sweeping rapidly into transverse T-tubules and mechanical tension into tendon collagen',
          loop: 'Dystrophin-mediated costameres protect the fragile lipid shell against shear stress during repeated 2.2 um -> 1.6 um contractions'
        },
        scientific:
          'Skeletal muscle fiber [[plasma membrane|plasma-membrane]] (sarcolemma; resting Vm approx -85 to -90 mV maintained by [[Na+/K+-ATPase|real-mem-nak]] and Kir channels) enclosing a 20-100 um multinucleated [[skeletal myofiber|real-muscle]]. Integrates neuromuscular end-plate [[nAChR|real-neuron-nachr]] (PDB 2BG9) receptors with voltage-gated Nav1.4 channels to conduct action potentials (~3-5 m/s) into invaginated T-tubules, while dystrophin-dystroglycan costameres mechanically couple internal Z-discs to the extracellular matrix.',
        from: [
          { nodeId: 'real-neuron-nachr', label: 'Motor End-Plate nAChR', cargo: 'ACh-triggered depolarization' },
          { nodeId: 'plasma-membrane', label: 'Excitable Lipid Shell', cargo: 'Dystrophin & Nav1.4 channels' }
        ],
        to: [
          { nodeId: 'real-muscle', label: 'T-Tubule Propagation', cargo: 'Deep inward voltage wave' },
          { nodeId: 'real-mem-nak', label: 'Resting -90 mV Reset', cargo: 'Na+/K+ ionic recovery' }
        ]
      },
      es: {
        subtitle: 'Sarcolema excitable del músculo esquelético (Membrana plasmática)',
        simple:
          'El sarcolema es la [[membrana plasmática|plasma-membrane]] externa excitable que envuelve cada [[fibra muscular esquelética|real-muscle]]. Recibe acetilcolina motora mediante [[nAChR|real-neuron-nachr]] y conduce rápidos potenciales de acción hacia los túbulos T.',
        story:
          'Envolviendo un cilindro contráctil de 20 a 100 micrómetros de grosor, el sarcolema cumple mucho más que una función de frontera. Bajo su bicapa de [[fosfolípidos|phospholipid]], la distrofina conecta las miofibrillas internas con la lámina basal externa para transmitir la fuerza hacia los tendones sin rasgar la célula. En la placa motora neuromuscular, los canales [[nAChR|real-neuron-nachr]] encienden una onda de despolarización que recorre todo el sarcolema y desciende por cada túbulo T transverso mientras la [[Na⁺/K⁺-ATPasa|real-mem-nak]] mantiene el reposo en –90 mV.',
        blueprint: {
          role: 'Membrana muscular externa excitable y transmisora de fuerza que acopla la sinapsis motora con los túbulos T',
          arrivesFrom: 'Acetilcolina motora activando [[nAChR|real-neuron-nachr]] en la [[sinapsis|real-neuron-synapse]] neuromuscular y ATP [[mitocondrial|mitochondrion]]',
          inside: 'Bicapa excitable de [[fosfolípidos|phospholipid]] equipada con canales Naᵥ1.4, Kᵥ, [[Na⁺/K⁺-ATPasa|real-mem-nak]] y complejos distrofina–glucoproteína',
          deliversTo: 'Ondas sincronizadas de potencial de acción hacia los túbulos T y tracción mecánica hacia el colágeno tendinoso',
          loop: 'Los costámeros con distrofina protegen la membrana frente al cizallamiento en cada acortamiento de 2,2 µm a 1,6 µm'
        },
        scientific:
          '[[Membrana plasmática|plasma-membrane]] de la [[fibra muscular esquelética|real-muscle]] (sarcolema; Vₘ de reposo ≈ –85 a –90 mV mantenido por [[Na⁺/K⁺-ATPasa|real-mem-nak]] y canales Kir) alrededor del sincitio de 20–100 µm. Conecta los receptores [[nAChR|real-neuron-nachr]] (PDB 2BG9) de la placa motora con canales Naᵥ1.4 para propagar potenciales de acción (~3–5 m/s) hacia los túbulos T, mientras los costámeros de distrofina transmiten fuerza mecánica desde los discos Z a la matriz extracelular.',
        from: [
          { nodeId: 'real-neuron-nachr', label: 'Placa motora nAChR', cargo: 'Despolarización por ACh' },
          { nodeId: 'plasma-membrane', label: 'Bicapa excitable', cargo: 'Distrofina y canales Naᵥ1.4' }
        ],
        to: [
          { nodeId: 'real-muscle', label: 'Propagación en túbulos T', cargo: 'Onda eléctrica hacia el interior' },
          { nodeId: 'real-mem-nak', label: 'Reposo en –90 mV', cargo: 'Recuperación iónica Na⁺/K⁺' }
        ]
      }
    },

    peripheral_nuclei: {
      en: {
        subtitle: 'Peripheral Syncytium Nuclei (H3K27ac MYH1 / ACTA1 Active)',
        simple:
          'A single [[skeletal muscle fiber|real-muscle]] holds hundreds of flattened [[nuclei|nucleus]] pressed just beneath its sarcolemma, using [[H3K27ac marks|real-epigenetics]] to express myosin and actin while keeping neuronal and blood genes closed.',
        story:
          'Because a skeletal muscle fiber spans millimeters to centimeters in length and packs its core solid with contractile myofibrils, one nucleus could never keep every segment supplied with fresh protein. During development, hundreds of myoblasts fuse into one multinucleated syncytium and push their identical 6.4 Gbp [[nuclei|nucleus]] outward against the sarcolemma. Inside every nucleus, 11 nm nucleosomes (PDB 1AOI) carry open [[H3K27ac|real-epigenetics]] acetylation on MYH1, ACTA1, TNNT3, and RYR1 while H3K27me3 silences [[neuronal|real-neuron]] SYT1 and [[erythrocyte|real-erythrocyte]] HBB.',
        blueprint: {
          role: 'Distributed multinucleated transcriptional array supplying contractile mRNA across millimeter-to-centimeter muscle volume',
          arrivesFrom: 'Fused embryonic myoblast genomes (identical 6.4 Gbp [[DNA|dna]] per nucleus) plus [[epigenetic H3K27ac/H3K27me3|real-epigenetics]] enzymes',
          inside: 'Flattened peripheral [[nuclei|nucleus]] housing PDB 1AOI nucleosomes with open H3K27ac euchromatin (MYH1, ACTA1, TNNT3, RYR1) and silenced H3K27me3 loci',
          deliversTo: 'High-volume contractile [[mRNAs|rna]] translated on [[80S ribosomes|real-cd-ribo80]] into [[Myosin-II|real-muscle-myosin]], [[actin-troponin|real-muscle-actin-tropo]], and [[SERCA1a|real-muscle-serca]]',
          loop: 'Satellite stem cells sitting beside the fiber fuse in extra nuclei whenever mechanical training expands muscle mass'
        },
        scientific:
          'Sub-sarcolemmal multinucleated syncytial [[nuclei|nucleus]] (dozens to hundreds per millimeter of human [[skeletal myofiber|real-muscle]], each managing a local myonuclear domain). Identical 6.4 Gbp diploid [[DNA|dna]] wrapped on [[nucleosomes|real-epigenetics]] (PDB 1AOI) is patterned by MyoD-recruited p300 H3K27ac euchromatin activating MYH1, ACTA1, TNNT3, RYR1, and ATP2A1 for [[central dogma|real-central-dogma]] expression, while PRC2 H3K27me3 compacts non-muscle SCN9A/SYT1 and HBB loci.',
        from: [
          { nodeId: 'dna', label: 'Identical 6.4 Gbp DNA', cargo: 'Shared diploid human genome' },
          { nodeId: 'real-epigenetics', label: 'H3K27ac Muscle Program', cargo: 'Open MYH1 / ACTA1 / RYR1' }
        ],
        to: [
          { nodeId: 'real-central-dogma', label: 'Contractile mRNA Export', cargo: 'Sarcomere gene transcription' },
          { nodeId: 'real-cd-ribo80', label: '80S Protein Assembly', cargo: 'Myosin, actin & SERCA1a' }
        ]
      },
      es: {
        subtitle: 'Núcleos periféricos del sincitio (H3K27ac activo en MYH1 / ACTA1)',
        simple:
          'Una sola [[fibra muscular esquelética|real-muscle]] alberga cientos de [[núcleos|nucleus]] aplanados justo bajo el sarcolema, usando [[marcas H3K27ac|real-epigenetics]] para expresar miosina y actina mientras mantiene cerrados los genes neuronales y sanguíneos.',
        story:
          'Dado que una fibra muscular mide de milímetros a centímetros y llena su centro con miofibrillas contráctiles, un solo núcleo jamás podría abastecer de proteínas a todo su volumen. Durante el desarrollo, cientos de mioblastos se fusionan en un sincitio multinucleado y desplazan sus [[núcleos|nucleus]] idénticos de 6,4 Gpb hacia la periferia bajo el sarcolema. En cada núcleo, los nucleosomas de 11 nm (PDB 1AOI) portan acetilación abierta [[H3K27ac|real-epigenetics]] en MYH1, ACTA1, TNNT3 y RYR1 mientras H3K27me3 silencia SYT1 [[neuronal|real-neuron]] y HBB [[eritrocitario|real-erythrocyte]].',
        blueprint: {
          role: 'Red transcripcional multinucleada distribuida que abastece ARNm contráctil a lo largo de fibras milimétricas o centimétricas',
          arrivesFrom: 'Genomas de mioblastos fusionados (6,4 Gpb de [[ADN|dna]] idéntico por núcleo) y enzimas [[epigenéticas H3K27ac/H3K27me3|real-epigenetics]]',
          inside: '[[Núcleos|nucleus]] periféricos aplanados con nucleosomas PDB 1AOI en eucromatina H3K27ac (MYH1, ACTA1, TNNT3, RYR1) y loci silenciados H3K27me3',
          deliversTo: 'Alto flujo de [[ARNm|rna]] contráctiles traducidos en [[ribosomas 80S|real-cd-ribo80]] hacia [[Miosina-II|real-muscle-myosin]], [[actina–troponina|real-muscle-actin-tropo]] y [[SERCA1a|real-muscle-serca]]',
          loop: 'Las células satélite aportan núcleos nuevos cuando el entrenamiento mecánico aumenta la masa muscular'
        },
        scientific:
          '[[Núcleos|nucleus]] subsarcolémicos de un sincitio muscular esquelético (decenas a cientos por milímetro de [[miofibra|real-muscle]], gobernando dominios mionucleares locales). El [[ADN|dna]] diploide de 6,4 Gpb sobre [[nucleosomas|real-epigenetics]] (PDB 1AOI) exhibe eucromatina H3K27ac inducida por MyoD/p300 en MYH1, ACTA1, TNNT3, RYR1 y ATP2A1 para el [[dogma central|real-central-dogma]], mientras PRC2 silencia SCN9A/SYT1 y HBB mediante H3K27me3.',
        from: [
          { nodeId: 'dna', label: 'ADN idéntico de 6,4 Gpb', cargo: 'Genoma diploide compartido' },
          { nodeId: 'real-epigenetics', label: 'Programa muscular H3K27ac', cargo: 'MYH1 / ACTA1 / RYR1 abiertos' }
        ],
        to: [
          { nodeId: 'real-central-dogma', label: 'Exportación de ARNm', cargo: 'Transcripción sarcomérica' },
          { nodeId: 'real-cd-ribo80', label: 'Ensamblaje en 80S', cargo: 'Miosina, actina y SERCA1a' }
        ]
      }
    },

    t_tubule: {
      en: {
        subtitle: 'Transverse T-Tubule Invagination (Deep Voltage Conduit)',
        simple:
          'T-tubules are narrow hollow tunnels of the outer [[plasma membrane|plasma-membrane]] that plunge deep across the [[skeletal muscle fiber|real-muscle]], carrying the electrical action potential straight to every interior [[sarcomere|real-muscle-sarcomere]] at the exact same instant.',
        story:
          'If depolarization stayed only on the outer sarcolemma of a 100-micrometer-wide muscle fiber, peripheral myofibrils would contract long before deeper ones ever received calcium, twisting the fiber apart. Instead, the sarcolemma invaginates transversely at every A-band/I-band junction into narrow ~30-nanometer T-tubules filled with extracellular fluid. Action potentials race down these tunnels within a millisecond, twisting voltage-sensing DHPR proteins in the T-tubule wall that physically tug adjacent sarcoplasmic reticulum RyR1 channels open so the entire fiber contracts in unison.',
        blueprint: {
          role: 'Transverse membrane voltage waveguide synchronizing electrical excitation across deep and superficial myofibrils',
          arrivesFrom: 'Propagating sarcolemmal action potential ignited by neuromuscular [[nAChR|real-neuron-nachr]] depolarization',
          inside: 'Narrow ~30-50 nm invaginated [[plasma membrane|plasma-membrane]] tubes lined with voltage-sensing DHPR (Cav1.1) tetrads abutting SR terminal cisternae',
          deliversTo: 'Direct mechanical DHPR-to-RyR1 gating trigger opening massive [[Ca2+|atom-ca]] release at every triad junction simultaneously',
          loop: 'Two SR cisternae flank every single T-tubule to form the signature skeletal-muscle triad architecture'
        },
        scientific:
          'Transverse tubule (T-tubule; ~30-50 nm diameter invagination of the sarcolemmal [[plasma membrane|plasma-membrane]] aligned at A-I junctions of every [[sarcomere|real-muscle-sarcomere]]) in [[skeletal muscle|real-muscle]]. Conducts action potentials rapidly into the fiber interior where voltage-sensing dihydropyridine receptors (DHPR / Cav1.1 arranged in tetrads) undergo conformational charge movement that mechanically couples to opposing sarcoplasmic reticulum RyR1 feet, launching synchronous excitation-contraction [[Ca2+|atom-ca]] release.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Sarcolemma Continuity', cargo: 'Propagating voltage wave' },
          { nodeId: 'real-neuron-nachr', label: 'Motor Impulse Origin', cargo: 'End-plate depolarization' }
        ],
        to: [
          { nodeId: 'atom-ca', label: 'Triad RyR1 Gating', cargo: 'Direct DHPR mechanical pull' },
          { nodeId: 'real-muscle-sarcomere', label: 'Synchronous Activation', cargo: 'Uniform deep contraction' }
        ]
      },
      es: {
        subtitle: 'Invaginación del túbulo T transverso (Conducto eléctrico profundo)',
        simple:
          'Los túbulos T son estrechos túneles de la [[membrana plasmática|plasma-membrane]] que penetran profundamente en la [[fibra muscular|real-muscle]], llevando el potencial de acción eléctrico al unísono hasta todos los [[sarcómeros|real-muscle-sarcomere]] internos.',
        story:
          'Si la despolarización permaneciera solo en el sarcolema externo de una fibra de 100 micrómetros de grosor, las miofibrillas externas se contraerían mucho antes que las profundas. Para evitarlo, el sarcolema se invagina transversalmente en cada unión entre banda A y banda I formando túbulos T de ~30 nanómetros llenos de líquido extracelular. El potencial de acción baja en menos de un milisegundo y activa sensores de voltaje DHPR que abren mecánicamente los canales RyR1 vecinos del retículo sarcoplásmico, logrando una contracción uniforme en toda la fibra.',
        blueprint: {
          role: 'Guía de onda eléctrica transversal que sincroniza la excitación entre miofibrillas profundas y superficiales',
          arrivesFrom: 'Potencial de acción del sarcolema iniciado por la despolarización neuromuscular de [[nAChR|real-neuron-nachr]]',
          inside: 'Tubos invaginados de [[membrana plasmática|plasma-membrane]] (~30–50 nm) revestidos con tétradas sensoras DHPR (Caᵥ1.1) frente al retículo sarcoplásmico',
          deliversTo: 'Disparo mecánico directo DHPR–RyR1 que desata la salida masiva de [[Ca²⁺|atom-ca]] en cada tríada al mismo tiempo',
          loop: 'Dos cisternas terminales del retículo sarcoplásmico flanquean cada túbulo T conformando la tríada muscular esquelética'
        },
        scientific:
          'Túbulo transverso (túbulo T; invaginación de ~30–50 nm de la [[membrana plasmática|plasma-membrane]] alineada en las uniones A–I de cada [[sarcómero|real-muscle-sarcomere]]) en [[músculo esquelético|real-muscle]]. Conduce el potencial de acción al interior donde los receptores de dihidropiridina (DHPR / Caᵥ1.1 en tétradas) experimentan un desplazamiento de carga que acopla mecánicamente los canales RyR1 del retículo sarcoplásmico para liberar [[Ca²⁺|atom-ca]] de forma sincrónica.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Continuidad del sarcolema', cargo: 'Onda propagada de voltaje' },
          { nodeId: 'real-neuron-nachr', label: 'Origen motor', cargo: 'Despolarización de placa motora' }
        ],
        to: [
          { nodeId: 'atom-ca', label: 'Apertura RyR1 en tríada', cargo: 'Tracción mecánica DHPR' },
          { nodeId: 'real-muscle-sarcomere', label: 'Activación sincrónica', cargo: 'Contracción interna uniforme' }
        ]
      }
    },

    sr_network: {
      en: {
        subtitle: 'Fenestrated Sarcoplasmic Reticulum (Ca2+ Storage Sleeve)',
        simple:
          'The sarcoplasmic reticulum is a lacy membrane sleeve wrapping every myofibril inside a [[skeletal muscle fiber|real-muscle]]. It stores huge internal reserves of [[Ca2+|atom-ca]], dumping them through RyR1 to contract and reclaiming them via [[SERCA1a|real-muscle-serca]] to relax.',
        story:
          'Unlike ordinary smooth membranes in other cells, the muscle sarcoplasmic reticulum specializes almost exclusively in rapid calcium storage and release. Wrapping every single [[2.2 um sarcomere|real-muscle-sarcomere]] in a fenestrated collar, its dilated terminal cisternae butt directly against T-tubules and pack acidic calsequestrin proteins that bind roughly 40 [[Ca2+|atom-ca]] ions per molecule to keep luminal concentration near 1 millimolar, ten thousand times higher than the resting sarcoplasm. On command, RyR1 opens the floodgates; once firing stops, dense [[SERCA1a pumps|real-muscle-serca]] across the longitudinal sleeves pump every ion back inside.',
        blueprint: {
          role: 'Dedicated high-capacity intracellular Ca2+ capacitor wrapping each myofibril to switch contraction on and off within milliseconds',
          arrivesFrom: 'Mechanical triad excitation from T-tubules plus [[SERCA1a|real-muscle-serca]] ATP-driven [[Ca2+|atom-ca]] reuptake',
          inside: 'Fenestrated [[phospholipid|phospholipid]] sleeve with calsequestrin-rich terminal cisternae (RyR1) and longitudinal tubules packed with [[SERCA1a|real-muscle-serca]] (PDB 1SU4)',
          deliversTo: '100-fold sarcoplasmic [[Ca2+|atom-ca]] jump (~100 nM -> ~10 uM) onto [[troponin-tropomyosin|real-muscle-actin-tropo]] followed by rapid relaxation clearance',
          loop: 'Luminal calsequestrin buffers free Ca2+ pressure so SERCA1a can pack enormous reserves without leaking back'
        },
        scientific:
          'Fenestrated sarcoplasmic reticulum (SR; specialized muscle smooth membrane network enclosing every myofibril of a [[skeletal muscle fiber|real-muscle]]). Organizes into two functional zones: terminal cisternae flanking T-tubules (housing RyR1 release channels and luminal calsequestrin buffering ~1 mM free / ~10-20 mM total [[Ca2+|atom-ca]]) and longitudinal fenestrated sleeves densely packed (>50% membrane protein) with [[SERCA1a|real-muscle-serca]] pumps (PDB 1SU4) driving active Ca2+ recovery after [[sarcomere|real-muscle-sarcomere]] shortening.',
        from: [
          { nodeId: 'real-muscle-serca', label: 'SERCA1a Ca2+ Loading', cargo: '2 Ca2+ pumped per ATP' },
          { nodeId: 'atom-ca', label: 'Calsequestrin Buffer', cargo: '10,000x luminal Ca2+ store' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Sarcomere Ca2+ Flood', cargo: '100 nM -> 10 uM switch' },
          { nodeId: 'real-muscle-sarcomere', label: 'On/Off Cycle Control', cargo: 'Millisecond contraction/rest' }
        ]
      },
      es: {
        subtitle: 'Retículo sarcoplásmico fenestrado (Funda almacén de Ca²⁺)',
        simple:
          'El retículo sarcoplásmico es una red membranosa calada que envuelve cada miofibrilla de la [[fibra muscular|real-muscle]]. Guarda enormes reservas de [[Ca²⁺|atom-ca]], liberándolas por RyR1 para contraer y recuperándolas mediante [[SERCA1a|real-muscle-serca]] para relajar.',
        story:
          'A diferencia de las membranas lisas de otras células, el retículo sarcoplásmico muscular está dedicado casi por completo al almacenamiento y disparo ultrarrápido de calcio. Envolviendo cada [[sarcómero de 2,2 µm|real-muscle-sarcomere]] con una funda fenestrada, sus cisternas terminales se adosan a los túbulos T y alojan calsecuestrina ácida capaz de retener unos 40 iones [[Ca²⁺|atom-ca]] por molécula, sosteniendo ~1 mM luminal —diez mil veces más que el sarcoplasma en reposo—. Al llegar la orden, RyR1 libera el torrente y luego las densas bombas [[SERCA1a|real-muscle-serca]] lo recuperan.',
        blueprint: {
          role: 'Condensador intracelular de Ca²⁺ de alta capacidad que rodea cada miofibrilla para encender y apagar la contracción en milisegundos',
          arrivesFrom: 'Excitación mecánica en la tríada desde túbulos T y recaptación de [[Ca²⁺|atom-ca]] impulsada por ATP vía [[SERCA1a|real-muscle-serca]]',
          inside: 'Funda de [[fosfolípidos|phospholipid]] con cisternas terminales ricas en calsecuestrina (RyR1) y túbulos longitudinales cubiertos de [[SERCA1a|real-muscle-serca]] (PDB 1SU4)',
          deliversTo: 'Salto de 100× en [[Ca²⁺|atom-ca]] sarcoplásmico (~100 nM → ~10 µM) hacia [[troponina–tropomiosina|real-muscle-actin-tropo]] seguido de rápida retirada',
          loop: 'La calsecuestrina luminal tampona el Ca²⁺ libre permitiendo a SERCA1a acumular grandes reservas con menor gradiente'
        },
        scientific:
          'Retículo sarcoplásmico fenestrado (RS; red membranosa especializada alrededor de cada miofibrilla de la [[fibra muscular esquelética|real-muscle]]). Se divide en cisternas terminales junto a túbulos T —con canales de liberación RyR1 y calsecuestrina tamponando ~1 mM de [[Ca²⁺|atom-ca]] libre— y mangas longitudinales donde más del 50 % de la proteína membranosa corresponde a bombas [[SERCA1a|real-muscle-serca]] (PDB 1SU4) que restauran el reposo del [[sarcómero|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-muscle-serca', label: 'Carga de Ca²⁺ por SERCA1a', cargo: '2 Ca²⁺ bombeados por ATP' },
          { nodeId: 'atom-ca', label: 'Tampón calsecuestrina', cargo: 'Reserva luminal 10.000×' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Oleada de Ca²⁺ sarcomérica', cargo: 'Interruptor 100 nM → 10 µM' },
          { nodeId: 'real-muscle-sarcomere', label: 'Control de ciclo', cargo: 'Contracción y reposo en ms' }
        ]
      }
    },

    ryr1_channel: {
      en: {
        subtitle: 'Ryanodine Receptor RyR1 (2.2 MDa SR Ca2+ Release Gate)',
        simple:
          'RyR1 is a colossal four-subunit calcium release channel seated at the T-tubule/SR junction. Mechanically pulled open by T-tubule voltage sensors, it unleashes a torrent of stored [[Ca2+|atom-ca]] onto every surrounding [[sarcomere|real-muscle-sarcomere]].',
        story:
          'Weighing over 2.2 megadaltons, the homotetrameric Ryanodine Receptor-1 (RyR1) is one of the largest ion channels known in biology. Its massive mushroom-shaped cytoplasmic scaffold spans the narrow 12-nanometer triad gap to touch DHPR voltage-sensor tetrads embedded in the T-tubule wall. The millisecond an action potential shifts DHPR charge downward, physical contact opens RyR1 pore helices across the SR terminal cisterna, releasing stored [[Ca2+|atom-ca]] down a ten-thousand-fold gradient to saturate [[troponin|real-muscle-actin-tropo]] across the entire [[sarcomere|real-muscle-sarcomere]].',
        blueprint: {
          role: 'Giant 2.2 MDa mechanically coupled SR Ca2+ release valve executing skeletal excitation-contraction coupling',
          arrivesFrom: 'Direct mechanical conformation shift from T-tubule DHPR tetrads plus steep ~10,000-fold luminal SR [[Ca2+|atom-ca]] store',
          inside: 'Homotetrameric ~2.2 MDa RyR1 assembly (~28 nm square cytoplasmic foot + transmembrane Ca2+ release pore) anchored at SR terminal cisternae',
          deliversTo: 'Explosive sarcoplasmic [[Ca2+|atom-ca]] rise (~100 nM -> ~10 uM) directly saturating [[troponin TnC|real-muscle-actin-tropo]] EF-hands',
          loop: 'T-tubule repolarization lets DHPR spring back, shutting RyR1 so [[SERCA1a|real-muscle-serca]] can rapidly clear the Ca2+ cloud'
        },
        scientific:
          'Skeletal muscle Ryanodine Receptor isoform 1 (RyR1; ~2.2 MDa homotetrameric [[protein|protein]] channel spanning ~28 x 28 nm across the ~12 nm triad cleft) in [[skeletal myofibers|real-muscle]]. Unlike cardiac RyR2 (Ca2+-induced Ca2+ release), skeletal RyR1 opens by direct mechanical allosteric coupling to T-tubule Cav1.1/DHPR tetrads during action-potential depolarization, conducting massive passive efflux of SR luminal [[Ca2+|atom-ca]] (~1 mM -> ~10 uM sarcoplasmic spike) to unlock [[troponin-tropomyosin|real-muscle-actin-tropo]] across every [[sarcomere|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-muscle', label: 'T-Tubule DHPR Sensors', cargo: 'Direct mechanical opening' },
          { nodeId: 'atom-ca', label: 'SR Luminal Ca2+ Pool', cargo: '~1 mM stored release drive' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Troponin TnC Trigger', cargo: '10 uM Ca2+ activation wave' },
          { nodeId: 'real-muscle-serca', label: 'Post-Spike Clearance', cargo: 'Pumped back after repolarization' }
        ]
      },
      es: {
        subtitle: 'Receptor de rianodina RyR1 (Compuerta de Ca²⁺ del RS de 2,2 MDa)',
        simple:
          'RyR1 es un colosal canal tetramérico liberador de calcio en la unión túbulo T/retículo sarcoplásmico. Abierto mecánicamente por sensores de voltaje del túbulo T, desata un torrente de [[Ca²⁺|atom-ca]] sobre cada [[sarcómero|real-muscle-sarcomere]].',
        story:
          'Con más de 2,2 megadaltons de masa, el receptor de rianodina-1 (RyR1) homotetramérico es uno de los mayores canales iónicos conocidos en biología. Su gigantesca cabeza citoplasmática atraviesa los 12 nanómetros de la tríada hasta tocar directamente las tétradas sensoras DHPR del túbulo T. En el milisegundo en que el potencial de acción desplaza DHPR, el contacto físico abre el poro RyR1 en la cisterna terminal del RS, soltando [[Ca²⁺|atom-ca]] a favor de un gradiente de diez mil veces para saturar la [[troponina|real-muscle-actin-tropo]] en todo el [[sarcómero|real-muscle-sarcomere]].',
        blueprint: {
          role: 'Válvula gigante de liberación de Ca²⁺ de 2,2 MDa acoplada mecánicamente que ejecuta el acoplamiento excitación–contracción',
          arrivesFrom: 'Cambio conformacional mecánico directo de tétradas DHPR en el túbulo T y reserva luminal de [[Ca²⁺|atom-ca]] de ~10.000×',
          inside: 'Homotetrámero RyR1 de ~2,2 MDa (pie citoplasmático cuadrado de ~28 nm + poro transmembrana de Ca²⁺) en las cisternas terminales del RS',
          deliversTo: 'Subida rápida de [[Ca²⁺|atom-ca]] sarcoplásmico (~100 nM → ~10 µM) que satura las manos EF de [[troponina TnC|real-muscle-actin-tropo]]',
          loop: 'La repolarización del túbulo T devuelve DHPR al reposo y cierra RyR1 para que [[SERCA1a|real-muscle-serca]] limpie la nube de Ca²⁺'
        },
        scientific:
          'Receptor de rianodina isoforma 1 del músculo esquelético (RyR1; canal [[proteico|protein]] homotetramérico de ~2,2 MDa y ~28 × 28 nm cruzando la brecha de ~12 nm de la tríada) en [[miofibras esqueléticas|real-muscle]]. A diferencia de RyR2 cardíaco, RyR1 se abre por acoplamiento alostérico mecánico directo con las tétradas Caᵥ1.1/DHPR del túbulo T, liberando [[Ca²⁺|atom-ca]] pasivo (~1 mM luminal → pico ~10 µM) para desbloquear [[troponina–tropomiosina|real-muscle-actin-tropo]] en cada [[sarcómero|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-muscle', label: 'Sensores DHPR en túbulo T', cargo: 'Apertura mecánica directa' },
          { nodeId: 'atom-ca', label: 'Reserva luminal de Ca²⁺', cargo: 'Gradiente de salida ~1 mM' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Activación de troponina TnC', cargo: 'Oleada de 10 µM de Ca²⁺' },
          { nodeId: 'real-muscle-serca', label: 'Retirada posimpulso', cargo: 'Recaptación tras repolarizar' }
        ]
      }
    },

    serca1a_pump: {
      en: {
        subtitle: 'SR Ca2+-ATPase Pump SERCA1a (PDB 1SU4 - Relaxation Engine)',
        simple:
          'Packing the sarcoplasmic reticulum membrane, [[SERCA1a|real-muscle-serca]] burns 1 [[Mg2+|atom-mg]]-ATP to pump 2 [[Ca2+|atom-ca]] ions back into storage, dropping sarcomere calcium so [[troponin|real-muscle-actin-tropo]] shuts contraction off cleanly.',
        story:
          'Muscle relaxation is just as energy-hungry as contraction. Densely tiling the longitudinal sleeves of the sarcoplasmic reticulum, 110-kilodalton [[SERCA1a|real-muscle-serca]] pumps run an active conformational cycle every time motor-neuron firing pauses. Two cytosolic [[Ca2+|atom-ca]] ions nestle into oxygen-lined pockets between transmembrane helices, triggering [[Mg2+|atom-mg]]-ATP phosphorylation of Asp351 inside the cytosolic P domain. Rearranging into the E2P state opens the luminal exit and pushes both Ca2+ back against a ten-thousand-fold gradient so [[Myosin-II|real-muscle-myosin]] releases and the [[sarcomere|real-muscle-sarcomere]] relaxes back to 2.2 micrometers.',
        blueprint: {
          role: 'Active SR P-type Ca2+-ATPase resetting low ~100 nM sarcoplasmic Ca2+ to terminate contraction and recharge SR stores',
          arrivesFrom: 'Sarcoplasmic [[Ca2+|atom-ca]] (~10 uM during active contraction) plus [[Mg2+|atom-mg]]-ATP generated by [[mitochondrial ATP synthase|real-bio-atpsynth]]',
          inside: '110 kDa 10-TM SERCA1a monomer (PDB 1SU4) coupling cytosolic A/N/P domains (Asp351 phosphorylation) to twin transmembrane Ca2+ sites',
          deliversTo: '2 [[Ca2+|atom-ca]] pumped back into the SR lumen per ATP spent, letting [[troponin-tropomyosin|real-muscle-actin-tropo]] re-block actin for 2.2 um rest',
          loop: 'Without ATP for both SERCA1a Ca2+ clearance and Myosin-II detachment, skeletal muscle locks stiffly in rigor'
        },
        scientific:
          'Fast-twitch skeletal muscle SR Ca2+-ATPase [[SERCA1a|real-muscle-serca]] (crystal structure PDB 1SU4, E1-2Ca2+ state; ~110 kDa P-type II ATPase with 10 TM helices M1-M10 and cytosolic A/N/P domains) driving active [[membrane transport|real-membrane-transport]] in [[skeletal muscle|real-muscle]]. Hydrolyzes 1 [[Mg2+|atom-mg]]-ATP via transient Asp351 phosphorylation (E1 -> E1P -> E2P -> E2) to transport 2 [[Ca2+|atom-ca]] into the SR lumen (~1 mM) against a >10,000-fold gradient in exchange for 2-3 [[H+|atom-h]], rapidly relaxing the [[sarcomere|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Mitochondrial ATP', cargo: '1 Mg2+-ATP per 2 Ca2+' },
          { nodeId: 'atom-ca', label: 'Sarcoplasmic Ca2+ Cloud', cargo: 'Active 10 uM -> 100 nM clear' }
        ],
        to: [
          { nodeId: 'real-muscle-serca', label: 'SERCA1a Explorer Node', cargo: '10-TM E1/E2 pump mechanics' },
          { nodeId: 'real-muscle-sarcomere', label: 'Sarcomere Relaxation', cargo: 'Restores 2.2 um resting length' }
        ]
      },
      es: {
        subtitle: 'Bomba Ca²⁺-ATPasa del RS SERCA1a (PDB 1SU4 · Motor de relajación)',
        simple:
          'Tapizando la membrana del retículo sarcoplásmico, [[SERCA1a|real-muscle-serca]] gasta 1 [[Mg²⁺|atom-mg]]–ATP para devolver 2 iones [[Ca²⁺|atom-ca]] al almacén, bajando el calcio para que la [[troponina|real-muscle-actin-tropo]] apague la contracción.',
        story:
          'Relajar el músculo consume tanta precisión energética como contraerlo. Cubriendo densamente los túbulos longitudinales del retículo sarcoplásmico, las bombas [[SERCA1a|real-muscle-serca]] de 110 kilodaltons arrancan en cuanto cesa la señal motora. Dos iones [[Ca²⁺|atom-ca]] encajan en bolsillos de oxígeno intramembrana, disparando la fosforilación de Asp351 con [[Mg²⁺|atom-mg]]–ATP en el dominio P. Al pivotar al estado E2P expulsan ambos calcio contra un gradiente de diez mil veces hacia el lumen del RS para que la [[miosina-II|real-muscle-myosin]] se desenganche y el [[sarcómero|real-muscle-sarcomere]] vuelva a 2,2 micrómetros.',
        blueprint: {
          role: 'Ca²⁺-ATPasa activa tipo P del RS que restaura ~100 nM de Ca²⁺ sarcoplásmico para relajar el músculo y recargar el almacén',
          arrivesFrom: '[[Ca²⁺|atom-ca]] sarcoplásmico (~10 µM en contracción) más [[Mg²⁺|atom-mg]]–ATP producido por la [[ATP sintasa mitocondrial|real-bio-atpsynth]]',
          inside: 'Monómero SERCA1a de 110 kDa y 10 hélices TM (PDB 1SU4) acoplando dominios A/N/P (Asp351) con dos sitios transmembrana de Ca²⁺',
          deliversTo: '2 [[Ca²⁺|atom-ca]] devueltos al lumen del RS por cada ATP, permitiendo que [[troponina–tropomiosina|real-muscle-actin-tropo]] bloquee la actina',
          loop: 'Sin ATP tanto para SERCA1a como para despegar la miosina-II, el músculo queda rígido en estado de rigor'
        },
        scientific:
          'Ca²⁺-ATPasa del RS muscular esquelético [[SERCA1a|real-muscle-serca]] (cristalografía PDB 1SU4, estado E1–2Ca²⁺; ATPasa tipo P II de ~110 kDa con 10 hélices M1–M10 y dominios citosólicos A/N/P) de [[transporte activo|real-membrane-transport]] en [[músculo esquelético|real-muscle]]. Hidroliza 1 [[Mg²⁺|atom-mg]]–ATP fosforilando Asp351 (E1 → E1P → E2P → E2) para bombear 2 [[Ca²⁺|atom-ca]] al lumen (~1 mM) frente a >10.000× intercambiando 2–3 [[H⁺|atom-h]], relajando el [[sarcómero|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP mitocondrial', cargo: '1 Mg²⁺–ATP por cada 2 Ca²⁺' },
          { nodeId: 'atom-ca', label: 'Nube sarcoplásmica Ca²⁺', cargo: 'Limpieza 10 µM → 100 nM' }
        ],
        to: [
          { nodeId: 'real-muscle-serca', label: 'Nodo SERCA1a', cargo: 'Mecánica bomba 10-TM E1/E2' },
          { nodeId: 'real-muscle-sarcomere', label: 'Relajación sarcomérica', cargo: 'Restaura longitud 2,2 µm' }
        ]
      }
    },

    myofibril: {
      en: {
        subtitle: 'Cylindrical Myofibril Bundle (Serial 2.2 um Sarcomeres)',
        simple:
          'Myofibrils are long 1-2 um cylindrical rods packed side by side inside every [[skeletal muscle fiber|real-muscle]], chaining thousands of identical [[2.2 um sarcomeres|real-muscle-sarcomere]] end to end so tiny sliding steps add up into visible movement.',
        story:
          'Over eighty percent of the interior volume of a [[skeletal muscle fiber|real-muscle]] is occupied by parallel cylindrical myofibrils running from tendon to tendon, wedged tightly beside rows of ATP-generating [[mitochondria|mitochondrion]] and wrapped in fenestrated sarcoplasmic reticulum. Each myofibril links thousands of [[2.2 um sarcomeres|real-muscle-sarcomere]] in strict register, aligning every dark A-band and light I-band across adjacent cylinders to produce skeletal muscle stripes. When each individual sarcomere shortens by just 0.6 micrometers, ten thousand in series shorten a whole bicep by centimeters in a fraction of a second.',
        blueprint: {
          role: 'Cylindrical 1-2 um contractile organelle chaining thousands of sarcomeres in series and parallel for macroscopic force and stroke',
          arrivesFrom: 'Synchronized SR [[Ca2+|atom-ca]] waves, aerobic [[mitochondrial|mitochondrion]] ATP (fueled by [[erythrocyte|real-erythrocyte]] O2), and newly translated [[Myosin-II|real-muscle-myosin]]/actin',
          inside: 'Registered axial chain of repeating [[2.2 um sarcomeres|real-muscle-sarcomere]] tied laterally by desmin intermediate filaments of the [[cytoskeleton|cytoskeleton]]',
          deliversTo: 'Summed axial shortening speed (series sarcomeres) and peak force (parallel myofibrils) transmitted via sarcolemma to bone tendons',
          loop: 'Resistance training adds parallel myofibrils to thicken muscle fibers without needing to divide post-mitotic cells'
        },
        scientific:
          'Contractile myofibril cylinder (~1-2 um diameter, spanning the full mm-cm length of a [[skeletal muscle fiber|real-muscle]], comprising ~80% of fiber volume). Chains ~10^3-10^4 repeating [[2.2 um sarcomeres|real-muscle-sarcomere]] in series while intermediate-filament desmin rings keep Z-discs aligned laterally across neighboring myofibrils, yielding visible cross-striations. Enveloped by T-tubule/SR triads and intermyofibrillar [[mitochondria|mitochondrion]] sustaining high ATP flux for [[Myosin-II|real-muscle-myosin]] and [[SERCA1a|real-muscle-serca]].',
        from: [
          { nodeId: 'real-muscle-sarcomere', label: 'Serial Sarcomere Chain', cargo: 'Thousands of 2.2 um units' },
          { nodeId: 'mitochondrion', label: 'Intermyofibrillar ATP', cargo: 'Continuous aerobic energy' }
        ],
        to: [
          { nodeId: 'real-muscle', label: 'Whole Myofiber Force', cargo: 'Parallel & series summation' },
          { nodeId: 'cytoskeleton', label: 'Desmin Alignment Grid', cargo: 'Registered Z-disc stripes' }
        ]
      },
      es: {
        subtitle: 'Haz cilíndrico de miofibrilla (Sarcómeros de 2,2 µm en serie)',
        simple:
          'Las miofibrillas son cilindros de 1 a 2 µm empaquetados en paralelo dentro de cada [[fibra muscular|real-muscle]], encadenando miles de [[sarcómeros de 2,2 µm|real-muscle-sarcomere]] para que deslizamientos diminutos se sumen en movimiento visible.',
        story:
          'Más del ochenta por ciento del volumen interno de una [[fibra muscular esquelética|real-muscle]] lo ocupan miofibrillas cilíndricas paralelas que corren de extremo a extremo junto a hileras de [[mitocondrias|mitochondrion]] productoras de ATP y envueltas en retículo sarcoplásmico. Cada miofibrilla encadena miles de [[sarcómeros de 2,2 µm|real-muscle-sarcomere]] en estricto registro, alineando bandas A oscuras y bandas I claras para crear las estrías del músculo. Cuando cada sarcómero se acorta apenas 0,6 micrómetros, diez mil en serie acortan un músculo entero varios centímetros en una fracción de segundo.',
        blueprint: {
          role: 'Orgánulo contráctil cilíndrico de 1–2 µm que encadena miles de sarcómeros en serie y paralelo para sumar recorrido y fuerza',
          arrivesFrom: 'Oleadas sincronizadas de [[Ca²⁺|atom-ca]] del RS, ATP aeróbico [[mitocondrial|mitochondrion]] (con O₂ de [[eritrocitos|real-erythrocyte]]) y [[miosina-II|real-muscle-myosin]]/actina',
          inside: 'Cadena axial registrada de [[sarcómeros de 2,2 µm|real-muscle-sarcomere]] sujetos lateralmente por filamentos intermedios de desmina del [[citoesqueleto|cytoskeleton]]',
          deliversTo: 'Velocidad de acortamiento sumada en serie y fuerza pico sumada en paralelo hacia el sarcolema y los tendones',
          loop: 'El ejercicio de fuerza añade miofibrillas en paralelo engrosando la fibra sin necesidad de división celular'
        },
        scientific:
          'Miofibrilla contráctil cilíndrica (~1–2 µm de diámetro, extendida a lo largo de toda la [[fibra muscular esquelética|real-muscle]], ocupando ~80 % del volumen). Encadena ~10³–10⁴ [[sarcómeros de 2,2 µm|real-muscle-sarcomere]] en serie mientras anillos de desmina mantienen alineados los discos Z vecinos formando las estriaciones transversales, rodeadas de tríadas del RS y [[mitocondrias|mitochondrion]] que financian [[miosina-II|real-muscle-myosin]] y [[SERCA1a|real-muscle-serca]].',
        from: [
          { nodeId: 'real-muscle-sarcomere', label: 'Cadena serial de sarcómeros', cargo: 'Miles de unidades de 2,2 µm' },
          { nodeId: 'mitochondrion', label: 'ATP intermiofibrilar', cargo: 'Energía aerobia continua' }
        ],
        to: [
          { nodeId: 'real-muscle', label: 'Fuerza total de la miofibra', cargo: 'Suma en serie y paralelo' },
          { nodeId: 'cytoskeleton', label: 'Alineación por desmina', cargo: 'Estriaciones en registro' }
        ]
      }
    },

    z_disc: {
      en: {
        subtitle: 'Alpha-Actinin Z-Disc (Sarcomere Boundary & Actin Anchor)',
        simple:
          'Z-discs are dense zigzag [[protein|protein]] walls marking both ends of every [[2.2 um sarcomere|real-muscle-sarcomere]]. They anchor the barbed ends of opposing thin [[actin filaments|real-muscle-actin-tropo]] and draw inward toward each other during contraction.',
        story:
          'Marking the exact physical border between neighboring [[sarcomeres|real-muscle-sarcomere]], the electron-dense Z-disc acts as a mechanical load-bearing bulkhead. Antiparallel dimers of alpha-actinin crosslink the plus (barbed) ends of thin [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] filaments entering from both adjacent sarcomeres into a crisp square woven lattice, while also anchoring the N-terminal ends of elastic titin springs. Whenever [[Myosin-II|real-muscle-myosin]] power strokes pull thin filaments inward, both flanking Z-discs glide smoothly closer from 2.2 down to 1.6 micrometers, transmitting force straight down the myofibril.',
        blueprint: {
          role: 'Mechanical structural boundary anchoring thin actin filaments and titin springs between adjacent sarcomeres',
          arrivesFrom: 'Pulling tension generated by [[Myosin-II|real-muscle-myosin]] cross-bridges on [[thin actin filaments|real-muscle-actin-tropo]] from both adjacent halves',
          inside: 'Dense ~100 nm woven lattice of alpha-actinin crosslinkers, CapZ actin-capping [[proteins|protein]], N-terminal titin anchors, and desmin collars',
          deliversTo: 'Direct axial force transmission across consecutive [[sarcomeres|real-muscle-sarcomere]] and lateral mechanical linkage to sarcolemmal costameres',
          loop: 'Measuring center-to-center distance between paired Z-discs defines exact sarcomere contraction state (2.20 um <-> 1.60 um)'
        },
        scientific:
          'Sarcomeric Z-disc (Z-line; ~80-120 nm thick electron-dense tetragonal protein lattice defining the axial boundaries of each [[2.2 um sarcomere|real-muscle-sarcomere]]). Antiparallel homodimers of alpha-actinin-2 crosslink CapZ-capped barbed (+) ends of opposing [[F-actin|real-muscle-actin-tropo]] filaments while binding N-terminal domains of giant titin (~3.8 MDa) and nebulin. Peripheral desmin intermediate filaments of the [[cytoskeleton|cytoskeleton]] link adjacent myofibrillar Z-discs in register and anchor into sarcolemmal dystrophin costameres.',
        from: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Barbed Actin Ends', cargo: 'Opposing thin filament pull' },
          { nodeId: 'cytoskeleton', label: 'Alpha-Actinin Lattice', cargo: 'Structural bulkhead & desmin' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Sarcomere Span', cargo: '2.20 um <-> 1.60 um border' },
          { nodeId: 'real-muscle', label: 'Axial Tension Transfer', cargo: 'Series force to tendons' }
        ]
      },
      es: {
        subtitle: 'Disco Z de alfa-actinina (Frontera del sarcómero y anclaje de actina)',
        simple:
          'Los discos Z son densas paredes [[proteicas|protein]] en zigzag que marcan ambos extremos de cada [[sarcómero de 2,2 µm|real-muscle-sarcomere]]. Anclan los filamentos finos de [[actina|real-muscle-actin-tropo]] y se acercan entre sí durante la contracción.',
        story:
          'Delimitando la frontera exacta entre [[sarcómeros|real-muscle-sarcomere]] vecinos, el disco Z electrodenso actúa como un mamparo mecánico portante. Dímeros antiparalelos de alfa-actinina entrelazan los extremos más de los filamentos finos de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] que llegan desde ambos sarcómeros contiguos formando una rejilla cuadrada, donde también se fijan los extremos N-terminales de la titina elástica. Cuando los golpes de fuerza de [[miosina-II|real-muscle-myosin]] tiran hacia dentro, ambos discos Z se acercan suavemente de 2,2 a 1,6 micrómetros transmitiendo la tensión.',
        blueprint: {
          role: 'Frontera estructural mecánica que ancla filamentos finos de actina y resortes de titina entre sarcómeros contiguos',
          arrivesFrom: 'Tensión de tracción generada por puentes de [[miosina-II|real-muscle-myosin]] sobre los [[filamentos finos de actina|real-muscle-actin-tropo]] adyacentes',
          inside: 'Rejilla densa de ~100 nm de alfa-actinina, [[proteínas|protein]] CapZ, anclajes N-terminales de titina y anillos de desmina',
          deliversTo: 'Transmisión axial directa de fuerza entre [[sarcómeros|real-muscle-sarcomere]] en serie y acoplamiento lateral al sarcolema',
          loop: 'La distancia entre dos discos Z define exactamente el estado contráctil del sarcómero (2,20 µm ↔ 1,60 µm)'
        },
        scientific:
          'Disco Z sarcomérico (línea Z; red proteica tetragonal electrodensa de ~80–120 nm que delimita cada [[sarcómero de 2,2 µm|real-muscle-sarcomere]]). Homodímeros antiparalelos de α-actinina-2 reticulan los extremos (+) cubiertos por CapZ de filamentos de [[F-actina|real-muscle-actin-tropo]] opuestos y fijan el extremo N-terminal de titina (~3,8 MDa) y nebulina. La desmina del [[citoesqueleto|cytoskeleton]] mantiene en registro los discos Z vecinos hasta los costámeros del sarcolema.',
        from: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Extremos (+) de actina', cargo: 'Tracción de filamentos finos' },
          { nodeId: 'cytoskeleton', label: 'Red de alfa-actinina', cargo: 'Mamparo estructural y desmina' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Longitud del sarcómero', cargo: 'Frontera 2,20 µm ↔ 1,60 µm' },
          { nodeId: 'real-muscle', label: 'Transferencia de tensión', cargo: 'Fuerza en serie al tendón' }
        ]
      }
    },

    i_band: {
      en: {
        subtitle: 'Light I-Band (Thin Actin-Only Zone - Narrows on Contraction)',
        simple:
          'The I-band is the pale optical zone surrounding each Z-disc that contains only thin [[actin filaments|real-muscle-actin-tropo]] and elastic titin coils. As [[Myosin-II|real-muscle-myosin]] pulls thin filaments inward, the I-band visibly narrows.',
        story:
          'Under polarized light microscopy, regions containing only thin [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] filaments and coiled titin springs appear bright and isotropic, giving the I-band its name. Centered over each Z-disc and shared by two neighboring [[sarcomeres|real-muscle-sarcomere]], this zone marks the exposed stretch of thin track not yet overlapped by thick myosin shafts. During active contraction, sliding pulls more of each thin filament deep into the adjacent A-band, visibly shrinking the pale I-band without altering the true length of any actin strand.',
        blueprint: {
          role: 'Non-overlapping thin-filament optical zone flanking each Z-disc that shrinks proportionally as sarcomeres shorten',
          arrivesFrom: 'Thin [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] arrays anchored into the central Z-disc plus extensible I-band titin coils',
          inside: 'Isotropic thin-filament-only corridor spanning the gap between the Z-disc and the tips of thick [[Myosin-II|real-muscle-myosin]] filaments',
          deliversTo: 'Sliding thin-filament length fed progressively into the A-band overlap zone during [[sarcomere|real-muscle-sarcomere]] shortening',
          loop: 'Comparing shrinking I-bands against constant A-bands proved Huxley sliding-filament mechanics over filament coiling'
        },
        scientific:
          'Isotropic I-band spanning symmetrically across the Z-disc between neighboring [[sarcomeres|real-muscle-sarcomere]] (~0.6 um total relaxed width at 2.2 um sarcomere length, narrowing sharply toward zero near ~1.6 um full contraction). Contains exclusively thin [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] filaments (PDB 6KN8) and extensible PEVK/Ig domains of elastic titin without thick [[Myosin-II|real-muscle-myosin]] overlap, visually confirming constant-length filament sliding.',
        from: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Z-Disc Thin Tracks', cargo: 'Unoverlapped F-actin span' },
          { nodeId: 'real-muscle-sarcomere', label: 'Relaxed Sarcomere', cargo: 'Wide pale I-band at 2.2 um' }
        ],
        to: [
          { nodeId: 'real-muscle-myosin', label: 'A-Band Overlap Entry', cargo: 'Thin filaments pulled inward' },
          { nodeId: 'real-muscle', label: 'Striated Muscle Banding', cargo: 'Diagnostic shortening readout' }
        ]
      },
      es: {
        subtitle: 'Banda I clara (Zona solo de actina · Se estrecha al contraer)',
        simple:
          'La banda I es la franja óptica clara alrededor de cada disco Z que solo contiene filamentos finos de [[actina|real-muscle-actin-tropo]] y resortes de titina. Cuando la [[miosina-II|real-muscle-myosin]] desliza la actina hacia dentro, la banda I se estrecha.',
        story:
          'Al microscopio de luz polarizada, las regiones que contienen únicamente filamentos finos de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] y segmentos elásticos de titina se ven claras e isotrópicas, origen del nombre banda I. Centrada en cada disco Z y compartida por dos [[sarcómeros|real-muscle-sarcomere]] contiguos, representa el tramo de pista fina aún sin superponer con filamentos gruesos. Al activarse la contracción, el deslizamiento introduce más actina dentro de la banda A y estrecha visiblemente la banda I sin acortar jamás el filamento.',
        blueprint: {
          role: 'Zona óptica de filamento fino sin solapamiento en torno al disco Z que se reduce proporcionalmente al acortarse el sarcómero',
          arrivesFrom: 'Filamentos finos de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] fijados al disco Z y tramos elásticos de titina',
          inside: 'Corredor isotrópico exclusivo de filamento fino entre el disco Z y los extremos de los filamentos gruesos de [[miosina-II|real-muscle-myosin]]',
          deliversTo: 'Longitud adicional de filamento fino que penetra en la zona de solapamiento de la banda A durante el acortamiento del [[sarcómero|real-muscle-sarcomere]]',
          loop: 'El estrechamiento de la banda I frente a una banda A constante demostró el modelo de filamentos deslizantes de Huxley'
        },
        scientific:
          'Banda I isotrópica distribuida simétricamente a ambos lados del disco Z entre [[sarcómeros|real-muscle-sarcomere]] vecinos (~0,6 µm en reposo a 2,2 µm, estrechándose hacia cero al contraerse a ~1,6 µm). Contiene únicamente filamentos finos de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] (PDB 6KN8) y dominios extensibles PEVK/Ig de titina sin filamentos gruesos de [[miosina-II|real-muscle-myosin]].',
        from: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Pistas finas del disco Z', cargo: 'Tramo libre de F-actina' },
          { nodeId: 'real-muscle-sarcomere', label: 'Sarcómero relajado', cargo: 'Banda I amplia a 2,2 µm' }
        ],
        to: [
          { nodeId: 'real-muscle-myosin', label: 'Ingreso en banda A', cargo: 'Deslizamiento hacia el centro' },
          { nodeId: 'real-muscle', label: 'Estriación muscular', cargo: 'Indicador visual de acortamiento' }
        ]
      }
    },

    a_band: {
      en: {
        subtitle: 'Dark A-Band (Constant 1.6 um Thick Myosin Filament Span)',
        simple:
          'The A-band is the dark central 1.6 um stripe of every [[sarcomere|real-muscle-sarcomere]] spanning the full length of thick [[Myosin-II|real-muscle-myosin]] filaments. Its width never changes during contraction because myosin rods slide rather than shrink.',
        story:
          'Named for its dark anisotropic birefringence under polarized light, the A-band spans the exact 1.6-micrometer end-to-end length of the bipolar thick [[Myosin-II|real-muscle-myosin]] bundle centered inside every [[sarcomere|real-muscle-sarcomere]]. Its outer edges form the crucial overlap zone where projecting myosin S1 heads engage thin [[actin filaments|real-muscle-actin-tropo]] in a six-around-one hexagonal array. Even when a muscle contracts forcefully from 2.2 down to 1.6 micrometers, the A-band width remains rock-steady, directly demonstrating that force comes from sliding overlap rather than shrinking proteins.',
        blueprint: {
          role: 'Constant-width 1.6 um central force-generating domain defined by the full span of bipolar thick Myosin-II filaments',
          arrivesFrom: 'Bipolar thick [[Myosin-II|real-muscle-myosin]] bundles anchored at the central M-line plus overlapping [[thin actin filaments|real-muscle-actin-tropo]]',
          inside: 'Hexagonal 1:2 lattice of thick [[Myosin-II|real-muscle-myosin]] (PDB 2MYS) and overlapping [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] (PDB 6KN8) cross-bridge zones',
          deliversTo: 'Direct piconewton cross-bridge traction drawing flanking Z-discs right up to the 1.6 um A-band borders during peak shortening',
          loop: 'Constant 1.6 um A-band width paired with shrinking H-zone and I-band is the textbook fingerprint of sliding-filament mechanics'
        },
        scientific:
          'Anisotropic A-band defining the invariant ~1.60 um central length of bipolar thick [[Myosin-II|real-muscle-myosin]] filaments (~300 myosin molecules per thick filament, PDB 2MYS) inside every [[sarcomere|real-muscle-sarcomere]]. Encompasses outer thick-thin hexagonal overlap zones (six [[F-actin|real-muscle-actin-tropo]] strands surrounding each thick shaft) and the central H-zone/M-line. A-band width remains strictly invariant between relaxed (2.2 um) and contracted (1.6 um) states.',
        from: [
          { nodeId: 'real-muscle-myosin', label: 'Bipolar Thick Filaments', cargo: 'Invariant 1.6 um myosin span' },
          { nodeId: 'real-muscle-actin-tropo', label: 'Hexagonal Overlap', cargo: '6 thin tracks per thick shaft' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Force-Generating Core', cargo: 'Constant width during sliding' },
          { nodeId: 'real-muscle', label: 'Peak Active Tension', cargo: 'Optimal 2.0-2.2 um overlap' }
        ]
      },
      es: {
        subtitle: 'Banda A oscura (Tramo constante de 1,6 µm de miosina gruesa)',
        simple:
          'La banda A es la franja oscura central de 1,6 µm de cada [[sarcómero|real-muscle-sarcomere]] que abarca toda la longitud de los filamentos gruesos de [[miosina-II|real-muscle-myosin]]. Su anchura nunca cambia al contraerse porque los filamentos deslizan sin encogerse.',
        story:
          'Llamada así por su birrefringencia oscura y anisotrópica bajo luz polarizada, la banda A abarca exactamente los 1,6 micrómetros de longitud de los filamentos gruesos bipolares de [[miosina-II|real-muscle-myosin]] centrados en cada [[sarcómero|real-muscle-sarcomere]]. Sus márgenes forman la zona activa de solapamiento donde las cabezas S1 interactúan con seis filamentos finos de [[actina|real-muscle-actin-tropo]] en geometría hexagonal. Incluso al acortarse el sarcómero de 2,2 a 1,6 micrómetros, la banda A conserva exactamente la misma anchura.',
        blueprint: {
          role: 'Dominio central generador de fuerza de anchura constante (1,6 µm) definido por los filamentos gruesos bipolares de miosina-II',
          arrivesFrom: 'Haces bipolares de [[miosina-II|real-muscle-myosin]] fijados a la línea M central y [[filamentos finos de actina|real-muscle-actin-tropo]] solapados',
          inside: 'Red hexagonal 1:2 de [[miosina-II|real-muscle-myosin]] (PDB 2MYS) y [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]] (PDB 6KN8) en zonas de puentes cruzados',
          deliversTo: 'Tracción directa de piconewtons que acerca ambos discos Z hasta los bordes de 1,6 µm en contracción máxima',
          loop: 'La anchura constante de 1,6 µm de la banda A junto al estrechamiento de zona H y banda I prueba el deslizamiento'
        },
        scientific:
          'Banda A anisotrópica que abarca los ~1,60 µm invariantes de los filamentos gruesos bipolares de [[miosina-II|real-muscle-myosin]] (~300 moléculas de miosina por filamento, PDB 2MYS) en cada [[sarcómero|real-muscle-sarcomere]]. Incluye las zonas hexagonales de solapamiento grueso–fino (seis [[F-actinas|real-muscle-actin-tropo]] por filamento grueso) y la zona H/línea M, permaneciendo constante de 2,2 µm a 1,6 µm.',
        from: [
          { nodeId: 'real-muscle-myosin', label: 'Filamentos gruesos bipolares', cargo: 'Tramo fijo de 1,6 µm' },
          { nodeId: 'real-muscle-actin-tropo', label: 'Solapamiento hexagonal', cargo: '6 pistas finas por eje grueso' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Núcleo generador de fuerza', cargo: 'Anchura invariante al deslizar' },
          { nodeId: 'real-muscle', label: 'Tensión activa máxima', cargo: 'Solapamiento óptimo 2,0–2,2 µm' }
        ]
      }
    },

    h_zone: {
      en: {
        subtitle: 'Central H-Zone (Thick-Only Gap - Vanishes at 1.6 um)',
        simple:
          'The H-zone is the lighter middle corridor inside the A-band where only bare thick [[Myosin-II|real-muscle-myosin]] shafts sit at rest. As contracting thin [[actin filaments|real-muscle-actin-tropo]] slide inward toward the M-line, the H-zone shrinks and nearly disappears.',
        story:
          'Right at the center of a relaxed 2.2-micrometer [[sarcomere|real-muscle-sarcomere]], the free pointed tips of opposing thin [[actin filaments|real-muscle-actin-tropo]] stop short of meeting in the middle. That narrow gap exposes the bare central tail-to-tail shafts of thick [[Myosin-II|real-muscle-myosin]] bundles, creating the paler H-zone (named from the German word for bright) splitting the dark A-band. The instant [[Ca2+|atom-ca]] triggers power strokes, thin filaments march inward from both sides and close the H-zone completely by 1.6 micrometers, then reopen it once [[SERCA1a|real-muscle-serca]] drives relaxation.',
        blueprint: {
          role: 'Dynamic central thick-filament-only gap providing clear visual headroom for inward thin-filament travel',
          arrivesFrom: 'Central tail-to-tail core of bipolar [[Myosin-II|real-muscle-myosin]] flanking the M-line in the relaxed 2.2 um [[sarcomere|real-muscle-sarcomere]]',
          inside: 'Thick-only corridor bordered on left and right by the advancing pointed (-) ends of opposing [[thin actin filaments|real-muscle-actin-tropo]]',
          deliversTo: 'Progressive inward overlap closure (wide at 2.2 um -> nearly vanished at 1.6 um) confirming active sliding-filament contraction',
          loop: 'Re-widening of the H-zone under titin recoil signals complete Ca2+ clearance by [[SERCA1a|real-muscle-serca]]'
        },
        scientific:
          'Central sarcomeric H-zone (Hensen disc; lighter core region inside the dark A-band centered on the M-line of a [[2.2 um sarcomere|real-muscle-sarcomere]]). Contains exclusively thick [[Myosin-II|real-muscle-myosin]] bare-zone tails and M-line crosslinkers without thin-filament overlap at resting ~2.2 um length; shrinks progressively as tropomodulin-capped pointed (-) ends of [[F-actin|real-muscle-actin-tropo]] slide inward toward the M-line during shortening to ~1.6 um.',
        from: [
          { nodeId: 'real-muscle-myosin', label: 'Myosin Bare Zone', cargo: 'Tail-to-tail central shaft' },
          { nodeId: 'real-muscle-sarcomere', label: 'Relaxed 2.2 um Gap', cargo: 'Clear travel margin' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Advancing Actin Tips', cargo: 'Close H-zone at 1.6 um' },
          { nodeId: 'real-muscle-serca', label: 'Relaxation Reopening', cargo: 'Restored upon Ca2+ removal' }
        ]
      },
      es: {
        subtitle: 'Zona H central (Brecha solo de miosina · Desaparece a 1,6 µm)',
        simple:
          'La zona H es el pasillo central más claro dentro de la banda A donde solo hay tallos gruesos de [[miosina-II|real-muscle-myosin]] en reposo. Al deslizarse los filamentos finos de [[actina|real-muscle-actin-tropo]] hacia la línea M, la zona H se cierra casi por completo.',
        story:
          'Justo en el centro de un [[sarcómero|real-muscle-sarcomere]] relajado de 2,2 micrómetros, las puntas libres de los filamentos finos de [[actina|real-muscle-actin-tropo]] opuestos no llegan a tocarse. Esa brecha deja al descubierto los ejes centrales desnudos de los filamentos gruesos de [[miosina-II|real-muscle-myosin]], dibujando la banda más clara llamada zona H en medio de la banda A oscura. Al entrar el [[Ca²⁺|atom-ca]], ambos lados deslizan la actina hacia dentro cerrando por completo la zona H a 1,6 micrómetros, hasta reabrirse con la relajación de [[SERCA1a|real-muscle-serca]].',
        blueprint: {
          role: 'Brecha central dinámica exclusiva de filamentos gruesos que ofrece recorrido libre al avance de la actina',
          arrivesFrom: 'Zona desnuda cola-con-cola de [[miosina-II|real-muscle-myosin]] en torno a la línea M en el [[sarcómero|real-muscle-sarcomere]] relajado de 2,2 µm',
          inside: 'Corredor solo de miosina flanqueado por los extremos (–) móviles de ambos haces opuestos de [[filamentos finos de actina|real-muscle-actin-tropo]]',
          deliversTo: 'Cierre progresivo del solapamiento (amplio a 2,2 µm → casi nulo a 1,6 µm) que evidencia el deslizamiento activo',
          loop: 'La reapertura de la zona H por retroceso elástico de la titina confirma la retirada de Ca²⁺ por [[SERCA1a|real-muscle-serca]]'
        },
        scientific:
          'Zona H sarcomérica (disco de Hensen; franja central más clara dentro de la banda A alrededor de la línea M del [[sarcómero de 2,2 µm|real-muscle-sarcomere]]). Alberga únicamente las colas centrales de [[miosina-II|real-muscle-myosin]] sin solapamiento de actina en reposo y se estrecha hasta casi desaparecer cuando los extremos (–) de [[F-actina|real-muscle-actin-tropo]] cubiertos por tropomodulina alcanzan el centro a ~1,6 µm.',
        from: [
          { nodeId: 'real-muscle-myosin', label: 'Zona desnuda de miosina', cargo: 'Eje central cola con cola' },
          { nodeId: 'real-muscle-sarcomere', label: 'Margen de reposo 2,2 µm', cargo: 'Espacio de recorrido interno' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Puntas de actina entrantes', cargo: 'Cierran la zona H a 1,6 µm' },
          { nodeId: 'real-muscle-serca', label: 'Reapertura en relajación', cargo: 'Restaurada al retirar Ca²⁺' }
        ]
      }
    },

    m_line: {
      en: {
        subtitle: 'Myomesin M-Line (Sarcomere Centerline & Thick Anchor)',
        simple:
          'The M-line is the central [[protein|protein]] scaffold running straight down the middle of every [[sarcomere|real-muscle-sarcomere]]. It crosslinks thick [[Myosin-II|real-muscle-myosin]] filaments in hexagonal spacing and anchors C-terminal titin springs.',
        story:
          'Bipolar thick [[Myosin-II|real-muscle-myosin]] filaments pull thin [[actin|real-muscle-actin-tropo]] inward equally from both left and right halves of the [[sarcomere|real-muscle-sarcomere]], so any imbalance would yank the myosin bundle off-center. Spanning the midpoint of the H-zone, myomesin bridges form the sturdy M-line lattice that locks adjacent thick shafts in exact hexagonal alignment while anchoring the C-terminal ends of giant titin cables. Built directly into the M-line sit muscle creatine kinase enzymes that rapidly regenerate local ATP from phosphocreatine right where myosin heads need fuel.',
        blueprint: {
          role: 'Central hexagonal anchoring bridge stabilizing thick Myosin-II filaments, titin midpoints, and rapid local ATP buffering',
          arrivesFrom: 'Tail-to-tail midpoints of bipolar [[Myosin-II|real-muscle-myosin]] filaments, C-terminal titin cables, and phosphocreatine/ADP',
          inside: 'Myomesin and obscurin crossbridge scaffold centered in the H-zone bound to M-line muscle creatine kinase dimers',
          deliversTo: 'Exact hexagonal thick-filament alignment across active contractions plus millisecond local ATP regeneration for [[Myosin-II|real-muscle-myosin]]',
          loop: 'Paired with elastic titin springs, the M-line guarantees symmetrical force balance across left and right half-sarcomeres'
        },
        scientific:
          'Sarcomeric M-line (M-band; central structural bridge bisecting the H-zone of every [[2.2 um sarcomere|real-muscle-sarcomere]]). Antiparallel myomesin dimers crosslink the bare tail-to-tail zones of thick [[Myosin-II|real-muscle-myosin]] filaments into a precise hexagonal register while binding C-terminal domains of ~3.8 MDa titin and obscurin. Docked MM-creatine kinase dimers directly catalyze phosphocreatine + ADP -> creatine + ATP to buffer rapid cross-bridge ATP consumption alongside [[mitochondrial|mitochondrion]] output.',
        from: [
          { nodeId: 'real-muscle-myosin', label: 'Thick Filament Tails', cargo: 'Bipolar symmetry midpoint' },
          { nodeId: 'real-bio-atpsynth', label: 'Phosphocreatine Buffer', cargo: 'Rapid local ATP regeneration' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Centered A-Band Lattice', cargo: 'Balanced bidirectional pull' },
          { nodeId: 'cytoskeleton', label: 'Myomesin-Titin Anchor', cargo: 'Hexagonal alignment frame' }
        ]
      },
      es: {
        subtitle: 'Línea M de miomesina (Eje central y anclaje de filamentos gruesos)',
        simple:
          'La línea M es el andamio [[proteico|protein]] central que cruza exactamente por la mitad cada [[sarcómero|real-muscle-sarcomere]]. Mantiene los filamentos gruesos de [[miosina-II|real-muscle-myosin]] en registro hexagonal y ancla los resortes de titina.',
        story:
          'Los filamentos gruesos bipolares de [[miosina-II|real-muscle-myosin]] tiran de la [[actina|real-muscle-actin-tropo]] desde ambas mitades del [[sarcómero|real-muscle-sarcomere]], por lo que cualquier desequilibrio descentraría el haz. En el punto medio de la zona H, puentes de miomesina forman la línea M, fijando los filamentos gruesos en geometría hexagonal exacta y anclando los extremos C-terminales de la titina gigante. Adosada a la propia línea M trabaja la creatina cinasa muscular, que regenera ATP al instante desde fosfocreatina justo junto a las cabezas motoras.',
        blueprint: {
          role: 'Puente hexagonal central que alinea filamentos gruesos de miosina-II, fija la titina y amortigua el consumo rápido de ATP',
          arrivesFrom: 'Centros cola-con-cola de filamentos bipolares de [[miosina-II|real-muscle-myosin]], extremos C-terminales de titina y fosfocreatina/ADP',
          inside: 'Andamio de miomesina y obscurina en el centro de la zona H asociado a dímeros de creatina cinasa muscular',
          deliversTo: 'Alineación hexagonal estable durante la contracción más regeneración milisegundo de ATP local para [[miosina-II|real-muscle-myosin]]',
          loop: 'Junto a los resortes elásticos de titina, la línea M garantiza simetría exacta entre ambas mitades del sarcómero'
        },
        scientific:
          'Línea M sarcomérica (banda M; puente estructural central que biseca la zona H de cada [[sarcómero de 2,2 µm|real-muscle-sarcomere]]). Dímeros antiparalelos de miomesina reticulan la zona desnuda de los filamentos gruesos de [[miosina-II|real-muscle-myosin]] en red hexagonal y anclan el dominio C-terminal de titina (~3,8 MDa) y obscurina, acoplando creatina cinasa MM que cataliza fosfocreatina + ADP → creatina + ATP junto a las [[mitocondrias|mitochondrion]].',
        from: [
          { nodeId: 'real-muscle-myosin', label: 'Colas de filamento grueso', cargo: 'Punto medio de simetría bipolar' },
          { nodeId: 'real-bio-atpsynth', label: 'Tampón fosfocreatina', cargo: 'Regeneración rápida de ATP' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Red centrada de banda A', cargo: 'Tracción bidireccional equilibrada' },
          { nodeId: 'cytoskeleton', label: 'Anclaje miomesina–titina', cargo: 'Marco de alineación hexagonal' }
        ]
      }
    },

    titin_spring: {
      en: {
        subtitle: 'Giant Elastic Titin Spring (~3.8 MDa - Largest Human Protein)',
        simple:
          'Titin is the largest single [[protein|protein]] in the human body, stretching ~1 um from each Z-disc straight to the central M-line inside every [[sarcomere|real-muscle-sarcomere]]. Acting as a molecular spring, it keeps thick myosin centered and snaps the fiber back to 2.2 um when relaxing.',
        story:
          'Encoded by over 34,000 [[amino acids|amino-acid]] in one continuous [[polypeptide|polypeptide]] weighing roughly 3.8 megadaltons, a single titin molecule spans an entire half-sarcomere from Z-disc to M-line. Its rigid A-band segment acts as a molecular ruler guiding assembly of thick [[Myosin-II|real-muscle-myosin]] bundles, while its I-band segment consists of extensible immunoglobulin domains and unstructured PEVK coils. When stretched, titin builds restoring elastic tension that protects against over-extension; when compressed at 1.6 micrometers and released by [[SERCA1a|real-muscle-serca]], titin smoothly restores the relaxed 2.2-micrometer resting geometry.',
        blueprint: {
          role: '3.8 MDa elastic molecular ruler and centering spring spanning every half-sarcomere from Z-disc to M-line',
          arrivesFrom: 'Single gigantic TTN [[polypeptide|polypeptide]] anchored at Z-disc alpha-actinin and extending to M-line myomesin',
          inside: 'Extensible I-band Ig-domain/PEVK spring segments coupled to rigid A-band fibronectin/Ig ruler repeats templating [[Myosin-II|real-muscle-myosin]]',
          deliversTo: 'Passive elasticity preventing overstretch, centered A-band stability, and elastic recoil back to 2.2 um after [[SERCA1a|real-muscle-serca]] relaxation',
          loop: 'Alternative splicing of TTN I-band spring domains (from [[central dogma|real-central-dogma]]) tunes stiffness across skeletal vs cardiac muscle'
        },
        scientific:
          'Human giant sarcomeric [[protein|protein]] titin (connectin; TTN gene; ~34,350 [[amino acids|amino-acid]], ~3.8 MDa single [[polypeptide|polypeptide]] spanning ~1.0-1.2 um from Z-disc N-terminus to M-line C-terminus across each half-[[sarcomere|real-muscle-sarcomere]]). Rigid A-band repeats scaffold thick [[Myosin-II|real-muscle-myosin]] spacing while extensible I-band tandem Ig and PEVK segments generate passive restoring tension, maintain A-band centering, and drive elastic recoil upon [[SERCA1a|real-muscle-serca]] relaxation.',
        from: [
          { nodeId: 'polypeptide', label: '34,350-aa Single Chain', cargo: '~3.8 MDa giant elastic fold' },
          { nodeId: 'real-central-dogma', label: 'TTN Isoform Splicing', cargo: 'Tissue-tuned spring stiffness' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'A-Band Centering', cargo: 'Passive recoil back to 2.2 um' },
          { nodeId: 'real-muscle-myosin', label: 'Thick Filament Ruler', cargo: 'Templated 1.6 um assembly' }
        ]
      },
      es: {
        subtitle: 'Resorte elástico gigante de titina (~3,8 MDa · Mayor proteína humana)',
        simple:
          'La titina es la [[proteína|protein]] más grande del cuerpo humano y se extiende ~1 µm desde cada disco Z hasta la línea M dentro de cada [[sarcómero|real-muscle-sarcomere]]. Como resorte molecular, centra la miosina gruesa y devuelve la fibra a 2,2 µm al relajarse.',
        story:
          'Codificada en más de 34.000 [[aminoácidos|amino-acid]] de un único [[polipéptido|polypeptide]] de ~3,8 megadaltons, una sola molécula de titina cruza todo un hemisarcómero desde el disco Z hasta la línea M. Su tramo rígido en la banda A actúa como regla molecular que ordena el ensamblaje de los filamentos gruesos de [[miosina-II|real-muscle-myosin]], mientras su tramo en la banda I contiene dominios inmunoglobulina y bucles PEVK extensibles. Al estirarse genera tensión elástica protectora, y al relajarse tras la acción de [[SERCA1a|real-muscle-serca]] devuelve suavemente los 2,2 micrómetros.',
        blueprint: {
          role: 'Regla molecular y resorte elástico centrador de 3,8 MDa que abarca cada hemisarcómero del disco Z a la línea M',
          arrivesFrom: 'Un único [[polipéptido|polypeptide]] gigante TTN anclado en la α-actinina del disco Z hasta la miomesina de la línea M',
          inside: 'Segmentos elásticos I de dominios Ig y PEVK acoplados a repeticiones rígidas de la banda A que moldean la [[miosina-II|real-muscle-myosin]]',
          deliversTo: 'Elasticidad pasiva anti-sobreestiramiento, centrado de la banda A y retroceso elástico a 2,2 µm tras [[SERCA1a|real-muscle-serca]]',
          loop: 'El empalme alternativo de los resortes de TTN (del [[dogma central|real-central-dogma]]) ajusta la rigidez entre músculo esquelético y cardíaco'
        },
        scientific:
          '[[Proteína|protein]] sarcomérica gigante humana titina (gen TTN; ~34.350 [[aminoácidos|amino-acid]], ~3,8 MDa en un solo [[polipéptido|polypeptide]] extendido ~1,0–1,2 µm del disco Z a la línea M en cada [[sarcómero|real-muscle-sarcomere]]). Las repeticiones rígidas de banda A moldean la longitud de [[miosina-II|real-muscle-myosin]], mientras los segmentos extensibles Ig y PEVK en banda I aportan tensión pasiva, centrado de banda A y recuperación elástica tras [[SERCA1a|real-muscle-serca]].',
        from: [
          { nodeId: 'polypeptide', label: 'Cadena única de 34.350 aa', cargo: 'Pliegue elástico de ~3,8 MDa' },
          { nodeId: 'real-central-dogma', label: 'Empalme de isoformas TTN', cargo: 'Rigidez adaptada al tejido' }
        ],
        to: [
          { nodeId: 'real-muscle-sarcomere', label: 'Centrado de banda A', cargo: 'Retroceso pasivo a 2,2 µm' },
          { nodeId: 'real-muscle-myosin', label: 'Regla de filamento grueso', cargo: 'Ensamblaje exacto de 1,6 µm' }
        ]
      }
    },

    myosin_thick: {
      en: {
        subtitle: 'Bipolar Thick Myosin-II Filament (1.6 um ~300-Motor Shaft)',
        simple:
          'A thick filament is a 1.6 um bipolar bundle of roughly 300 [[Myosin-II|real-muscle-myosin]] molecules anchored at the M-line, bristling with staggered motor heads angled in opposite directions on each half to pull both Z-discs toward the center.',
        story:
          'To pull opposite ends of a [[2.2 um sarcomere|real-muscle-sarcomere]] together, myosin motors must point in mirror-image orientations on either side of the centerline. Roughly 300 coiled-coil [[Myosin-II|real-muscle-myosin]] heavy-chain tails pack antiparallel at the central M-line (leaving a smooth bare zone)and then stagger outward along both halves of the 1.6-micrometer shaft. Projecting spirally every 14.3 nanometers around the cylinder, hundreds of S1 motor heads reach out simultaneously toward all six surrounding thin [[actin filaments|real-muscle-actin-tropo]] so contraction remains smooth and continuous.',
        blueprint: {
          role: 'Bipolar 1.6 um filamentous chassis organizing ~300 Myosin-II motors in mirror symmetry to pull both half-sarcomeres inward',
          arrivesFrom: 'Coiled-coil Myosin-II tail self-assembly templated along M-line myomesin and A-band titin rulers',
          inside: '~15 nm diameter bipolar shaft (~300 hexameric Myosin-II units, S1 heads PDB 2MYS) with 14.3 nm axial crown spacing and MyBP-C collars',
          deliversTo: 'Bidirectional inward sliding force applied symmetrically across six surrounding [[F-actin-tropomyosin-troponin|real-muscle-actin-tropo]] tracks',
          loop: 'Because opposing halves pull symmetrically toward the M-line, the A-band stays strictly centered throughout contraction'
        },
        scientific:
          'Bipolar skeletal thick filament (~1.60 um constant length, ~15 nm shaft diameter) formed by tail-to-tail antiparallel packing of ~300 hexameric [[Myosin-II|real-muscle-myosin]] complexes (2 heavy chains + 2 ELC + 2 RLC; S1 head PDB 2MYS) stabilized by MyBP-C and titin within the A-band of every [[sarcomere|real-muscle-sarcomere]]. Helical crowns spaced every 14.3 nm project staggered S1 heads toward six hexagonal [[F-actin|real-muscle-actin-tropo]] tracks to generate bidirectional force toward the M-line.',
        from: [
          { nodeId: 'real-muscle-myosin', label: '~300 Myosin-II Units', cargo: 'Coiled-coil bipolar shaft' },
          { nodeId: 'real-muscle-sarcomere', label: 'M-Line & Titin Frame', cargo: 'Exact 1.6 um A-band span' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Six Surrounding Thin Tracks', cargo: 'Hexagonal cross-bridge reach' },
          { nodeId: 'real-muscle', label: 'Bidirectional Contraction', cargo: 'Symmetric Z-disc pull' }
        ]
      },
      es: {
        subtitle: 'Filamento grueso bipolar de miosina-II (Eje de 1,6 µm y ~300 motores)',
        simple:
          'Un filamento grueso es un haz bipolar de 1,6 µm con unas 300 moléculas de [[miosina-II|real-muscle-myosin]] ancladas en la línea M, cubierto de cabezas motoras orientadas en sentidos opuestos en cada mitad para atraer ambos discos Z al centro.',
        story:
          'Para acercar ambos extremos de un [[sarcómero de 2,2 µm|real-muscle-sarcomere]], los motores de miosina deben apuntar en espejo a cada lado de la línea media. Unas 300 colas superenrolladas de [[miosina-II|real-muscle-myosin]] se empaquetan antiparalelas en la línea M central —dejando una zona desnuda lisa— y se escalonan hacia ambos extremos del eje de 1,6 micrómetros. Proyectándose en espiral cada 14,3 nanómetros, cientos de cabezas S1 alcanzan simultáneamente los seis filamentos finos de [[actina|real-muscle-actin-tropo]] circundantes para producir tracción continua.',
        blueprint: {
          role: 'Chasis filamentoso bipolar de 1,6 µm que ordena ~300 motores de miosina-II en simetría especular hacia ambos hemisarcómeros',
          arrivesFrom: 'Autoensamblaje de colas superenrolladas de miosina-II guiado por la línea M de miomesina y la regla de titina',
          inside: 'Eje bipolar de ~15 nm de diámetro (~300 hexámeros de miosina-II, cabezas S1 PDB 2MYS) con coronas cada 14,3 nm y collares MyBP-C',
          deliversTo: 'Fuerza bidireccional hacia el centro aplicada simétricamente sobre seis pistas hexagonales de [[F-actina–tropomiosina–troponina|real-muscle-actin-tropo]]',
          loop: 'Al tirar ambas mitades con igual intensidad hacia la línea M, la banda A permanece centrada durante toda la contracción'
        },
        scientific:
          'Filamento grueso bipolar esquelético (longitud constante ~1,60 µm, diámetro ~15 nm) ensamblado por empaquetamiento antiparalelo cola-con-cola de ~300 hexámeros de [[miosina-II|real-muscle-myosin]] (2 cadenas pesadas + 2 ELC + 2 RLC; cabeza S1 PDB 2MYS) estabilizado por MyBP-C y titina en la banda A del [[sarcómero|real-muscle-sarcomere]]. Coronas helicoidales cada 14,3 nm proyectan cabezas S1 hacia seis pistas hexagonales de [[F-actina|real-muscle-actin-tropo]].',
        from: [
          { nodeId: 'real-muscle-myosin', label: '~300 unidades miosina-II', cargo: 'Eje bipolar superenrollado' },
          { nodeId: 'real-muscle-sarcomere', label: 'Marco línea M y titina', cargo: 'Tramo fijo de 1,6 µm' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Seis pistas finas vecinas', cargo: 'Alcance hexagonal de puentes' },
          { nodeId: 'real-muscle', label: 'Contracción bidireccional', cargo: 'Tracción simétrica de discos Z' }
        ]
      }
    },

    myosin_head: {
      en: {
        subtitle: 'Myosin-II S1 Cross-Bridge Motor Head (PDB 2MYS - ATP Power Stroke)',
        simple:
          'Each globular [[Myosin-II|real-muscle-myosin]] S1 head is a molecular motor with an actin grip, an ATP pocket, and a pivoting lever arm. Splitting ATP cocks the arm, docking onto [[actin|real-muscle-actin-tropo]] triggers a 10 nm pull, and fresh ATP lets it detach.',
        story:
          'Every ounce of human movement originates inside the catalytic motor pocket of the [[Myosin-II|real-muscle-myosin]] S1 head (PDB 2MYS). First, binding fresh [[Mg2+|atom-mg]]-ATP opens the actin-binding cleft so the motor releases from the thin filament; hydrolyzing ATP into ADP and inorganic [[phosphate|atom-p]] then rotates its 8.5-nanometer light-chain lever arm ~60 degrees into the cocked state. Once [[Ca2+|atom-ca]] rolls tropomyosin aside, strong actin docking ejects phosphate and unleashes a ~10-nanometer lever-arm power stroke pulling [[F-actin|real-muscle-actin-tropo]] toward the M-line before ADP exits.',
        blueprint: {
          role: 'Chemomechanical ATPase cross-bridge cycling through detach, cock, bind, and 10 nm power-stroke states on F-actin',
          arrivesFrom: 'Cytosolic [[Mg2+|atom-mg]]-ATP from [[mitochondrial ATP synthase|real-bio-atpsynth]] plus Ca2+-uncovered sites on [[F-actin|real-muscle-actin-tropo]]',
          inside: '130 kDa S1 heavy-chain motor domain + ELC/RLC calmodulin-like light-chain lever arm (PDB 2MYS) amplifying sub-nanometer pocket shifts into 10 nm steps',
          deliversTo: '3-5 piconewtons of axial pull per cross-bridge sliding thin filaments inward plus spent ADP + [[Pi|atom-p]] returning to [[mitochondria|mitochondrion]]',
          loop: 'Heads cycle asynchronously so at least a subset stays bound throughout contraction, preventing thin-filament slip-back'
        },
        scientific:
          'Skeletal muscle [[Myosin-II|real-muscle-myosin]] subfragment-1 (S1) motor head + neck lever arm (crystal structure PDB 2MYS; ~130 kDa catalytic domain + essential ELC and regulatory RLC light chains on an ~8.5 nm alpha-helical IQ neck). Runs the Lymn-Taylor ATPase cross-bridge cycle: [[Mg2+|atom-mg]]-ATP binding dissociates rigor actomyosin; ATP -> ADP + [[Pi|atom-p]] hydrolysis cocks the converter ~60 degrees; strong docking onto [[Ca2+-activated F-actin|real-muscle-actin-tropo]] triggers Pi release and an ~8-10 nm lever swing (~3-5 pN) sliding filaments across the [[sarcomere|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Mg2+-ATP Energy Input', cargo: 'Detaches & cocks lever arm' },
          { nodeId: 'real-muscle-actin-tropo', label: 'Exposed Actin Footprint', cargo: 'Triggers Pi release & stroke' }
        ],
        to: [
          { nodeId: 'real-muscle-myosin', label: 'Myosin-II Explorer Node', cargo: 'Lymn-Taylor 4-step cycle' },
          { nodeId: 'real-muscle-sarcomere', label: '10 nm Power Stroke', cargo: 'Draws Z-discs 2.2 -> 1.6 um' }
        ]
      },
      es: {
        subtitle: 'Cabeza motora S1 de miosina-II (PDB 2MYS · Golpe de fuerza ATP)',
        simple:
          'Cada cabeza globular S1 de [[miosina-II|real-muscle-myosin]] es un motor molecular con pinza de actina, bolsillo de ATP y brazo palanca. Hidrolizar ATP arma la palanca, unirse a la [[actina|real-muscle-actin-tropo]] dispara un tirón de 10 nm y otro ATP la suelta.',
        story:
          'Cada movimiento voluntario nace en el bolsillo catalítico de la cabeza S1 de [[miosina-II|real-muscle-myosin]] (PDB 2MYS). Primero, la entrada de [[Mg²⁺|atom-mg]]–ATP abre la hendidura de actina y despega el motor del filamento fino; acto seguido, la hidrólisis en ADP y [[fosfato|atom-p]] gira ~60° su brazo palanca de 8,5 nanómetros hasta el estado armado. En cuanto el [[Ca²⁺|atom-ca]] aparta la tropomiosina, el anclaje fuerte a [[F-actina|real-muscle-actin-tropo]] expulsa el fosfato y ejecuta un golpe de ~10 nanómetros hacia la línea M antes de liberar ADP.',
        blueprint: {
          role: 'Puente cruzado ATPasa quimiomecánico que cicla por estados de desacople, armado, unión y golpe de fuerza de 10 nm',
          arrivesFrom: '[[Mg²⁺|atom-mg]]–ATP citosólico de la [[ATP sintasa mitocondrial|real-bio-atpsynth]] y sitios descubiertos por Ca²⁺ en [[F-actina|real-muscle-actin-tropo]]',
          inside: 'Dominio motor S1 de 130 kDa + brazo palanca con cadenas ligeras ELC/RLC (PDB 2MYS) que amplifica giros subnanométricos en pasos de 10 nm',
          deliversTo: '3–5 piconewtons de tracción axial por puente cruzado más ADP + [[Pᵢ|atom-p]] devueltos a las [[mitocondrias|mitochondrion]]',
          loop: 'Las cabezas ciclan fuera de fase para mantener siempre puentes sujetos e impedir el retroceso del filamento fino'
        },
        scientific:
          'Cabeza motora subfragmento-1 (S1) y palanca cervical de [[miosina-II|real-muscle-myosin]] esquelética (cristalografía PDB 2MYS; dominio catalítico de ~130 kDa + cadenas ligeras ELC/RLC sobre cuello α-helicoidal de ~8,5 nm). Ejecuta el ciclo de Lymn–Taylor: [[Mg²⁺|atom-mg]]–ATP rompe el rigor; ATP → ADP + [[Pᵢ|atom-p]] arma el convertidor ~60°; el enlace fuerte a [[F-actina activada|real-muscle-actin-tropo]] libera Pᵢ y pivota ~8–10 nm (~3–5 pN) acortando el [[sarcómero|real-muscle-sarcomere]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Aporte de Mg²⁺–ATP', cargo: 'Despega y arma la palanca' },
          { nodeId: 'real-muscle-actin-tropo', label: 'Sitio de actina expuesto', cargo: 'Dispara salida de Pᵢ y golpe' }
        ],
        to: [
          { nodeId: 'real-muscle-myosin', label: 'Nodo Miosina-II', cargo: 'Ciclo Lymn–Taylor en 4 pasos' },
          { nodeId: 'real-muscle-sarcomere', label: 'Golpe de fuerza 10 nm', cargo: 'Acerca discos Z 2,2 → 1,6 µm' }
        ]
      }
    },

    actin_thin: {
      en: {
        subtitle: 'Thin Double-Helical F-Actin Track (PDB 6KN8 - 1.0 um Cable)',
        simple:
          'Thin filaments are 1.0 um double-helical cables of polymerized actin [[proteins|protein]] anchored into each Z-disc. Wrapped by [[tropomyosin and troponin|real-muscle-actin-tropo]], they serve as the polarized pulling ropes grabbed by [[Myosin-II|real-muscle-myosin]].',
        story:
          'Anchored firmly by their barbed plus-ends inside alpha-actinin Z-discs, double-helical F-actin polymers extend ~1.0 micrometer inward toward the center of every [[sarcomere|real-muscle-sarcomere]], templated to uniform length by giant nebulin rulers. Each 42-kilodalton globular actin subunit carries an identical polarized binding footprint facing outward toward surrounding [[Myosin-II|real-muscle-myosin]] heads. Wrapped seamlessly along both helical grooves by regulatory [[tropomyosin and troponin|real-muscle-actin-tropo]], every thin strand translates thousands of tiny myosin steps into smooth inward sliding of the Z-disc.',
        blueprint: {
          role: 'Polarized 1.0 um double-helical contractile track transmitting Myosin-II cross-bridge strokes directly to the Z-disc',
          arrivesFrom: 'Z-disc CapZ/alpha-actinin barbed-end anchoring, nebulin length templating, and polymerized 42 kDa G-actin [[protein|protein]] monomers',
          inside: 'Right-handed double-helical F-actin core (~7 nm diameter, 37 nm half-pitch; PDB 6KN8) grooved to seat regulatory [[tropomyosin-troponin|real-muscle-actin-tropo]]',
          deliversTo: 'Bidirectional inward sliding toward the M-line under [[Myosin-II|real-muscle-myosin]] strokes, shortening the [[sarcomere|real-muscle-sarcomere]] from 2.2 to 1.6 um',
          loop: 'Identical actin monomers also build enterocyte microvilli and immune pseudopods, repurposed here into hexagonal sarcomere rails'
        },
        scientific:
          'Sarcomeric thin filament F-actin backbone (~1.0 um length templated by nebulin, ~7 nm diameter, 37 nm half-helical crossover of 42 kDa ADP-actin monomers; cryo-EM PDB 6KN8) anchored via CapZ barbed (+) ends at Z-discs and capped by tropomodulin at pointed (-) ends inside every [[sarcomere|real-muscle-sarcomere]]. Exposes stereospecific hydrophobic/electrostatic binding sites for [[Myosin-II S1|real-muscle-myosin]] regulated sterically by [[tropomyosin and troponin|real-muscle-actin-tropo]].',
        from: [
          { nodeId: 'cytoskeleton', label: 'Z-Disc Actin Anchor', cargo: 'Nebulin-measured 1.0 um track' },
          { nodeId: 'protein', label: '42 kDa G-Actin Polymer', cargo: 'Double-helical 37 nm repeat' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Thin Filament Complex', cargo: 'Actin + tropomyosin + troponin' },
          { nodeId: 'real-muscle-myosin', label: 'Cross-Bridge Traction', cargo: 'Slides inward to M-line' }
        ]
      },
      es: {
        subtitle: 'Filamento fino helicoidal de F-actina (PDB 6KN8 · Cable de 1,0 µm)',
        simple:
          'Los filamentos finos son cables de doble hélice de 1,0 µm hechos de [[proteínas|protein]] de actina ancladas a cada disco Z. Envueltos por [[tropomiosina y troponina|real-muscle-actin-tropo]], sirven de pistas polarizadas sobre las que tira la [[miosina-II|real-muscle-myosin]].',
        story:
          'Fijados firmemente por su extremo más dentro de los discos Z de alfa-actinina, los polímeros helicoidales de F-actina se extienden ~1,0 micrómetro hacia el centro de cada [[sarcómero|real-muscle-sarcomere]], medidos con exactitud por la proteína nebulina. Cada subunidad globular de actina de 42 kilodaltons expone una huella de unión polarizada hacia las cabezas vecinas de [[miosina-II|real-muscle-myosin]]. Recubierta a lo largo de ambos surcos por [[tropomiosina y troponina|real-muscle-actin-tropo]], cada hebra transmite miles de pasos motores al disco Z.',
        blueprint: {
          role: 'Pista contráctil polarizada en doble hélice de 1,0 µm que transfiere los golpes de miosina-II directamente al disco Z',
          arrivesFrom: 'Anclaje CapZ/α-actinina en el disco Z, regla molecular nebulina y monómeros [[proteicos|protein]] polimerizados de G-actina de 42 kDa',
          inside: 'Núcleo bicatenario helicoidal de F-actina (~7 nm de grosor, paso medio de 37 nm; PDB 6KN8) acanalado para alojar [[tropomiosina–troponina|real-muscle-actin-tropo]]',
          deliversTo: 'Deslizamiento axial hacia la línea M bajo tracción de [[miosina-II|real-muscle-myosin]], acortando el [[sarcómero|real-muscle-sarcomere]] de 2,2 a 1,6 µm',
          loop: 'Los mismos monómeros de actina forman microvellosidades en enterocitos y seudópodos inmunes, aquí ordenados en red hexagonal'
        },
        scientific:
          'Eje de F-actina del filamento fino sarcomérico (~1,0 µm de longitud fijada por nebulina, ~7 nm de diámetro, paso medio helicoidal de 37 nm de monómeros ADP-actina de 42 kDa; crio-EM PDB 6KN8), anclado por extremos (+) CapZ en discos Z y coronado por tropomodulina en extremos (–) dentro del [[sarcómero|real-muscle-sarcomere]]. Expone sitios estereoespecíficos para [[miosina-II S1|real-muscle-myosin]] regulados por [[tropomiosina y troponina|real-muscle-actin-tropo]].',
        from: [
          { nodeId: 'cytoskeleton', label: 'Anclaje de actina en disco Z', cargo: 'Pista de 1,0 µm medida por nebulina' },
          { nodeId: 'protein', label: 'Polímero G-actina 42 kDa', cargo: 'Doble hélice cada 37 nm' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Complejo del filamento fino', cargo: 'Actina + tropomiosina + troponina' },
          { nodeId: 'real-muscle-myosin', label: 'Tracción por puentes', cargo: 'Deslizamiento hacia línea M' }
        ]
      }
    },

    troponin_tropo: {
      en: {
        subtitle: 'Troponin-Tropomyosin Ca2+ Switch (PDB 6KN7 Blocked <-> 6KN8 Open)',
        simple:
          'Coiled-coil tropomyosin cables and three-part troponin sensors wrap every thin [[actin filament|real-muscle-actin-tropo]]. At rest they cover myosin binding footprints; when [[Ca2+|atom-ca]] binds troponin, the cable rotates ~25 degrees aside so [[Myosin-II|real-muscle-myosin]] locks on.',
        story:
          'Because cocked [[Myosin-II|real-muscle-myosin]] heads stand ready whenever ATP is present, skeletal muscle relies on the [[troponin-tropomyosin|real-muscle-actin-tropo]] steric gate to stay relaxed between nerve signals. Each 40-nanometer tropomyosin dimer spans seven actin subunits, held right over the myosin footprints by inhibitory troponin-I (TnI) in the Ca2+-free blocked state (PDB 6KN7). The millisecond RyR1 floods ~10 uM [[Ca2+|atom-ca]], two divalent ions snap into EF-hand oxygen cages on troponin-C (TnC), pulling TnI off actin and rolling tropomyosin ~25 degrees into the groove (PDB 6KN8) to ignite sliding.',
        blueprint: {
          role: 'Binary Ca2+-sensitive steric switch toggling thin-filament myosin access between blocked rest and open contraction',
          arrivesFrom: 'RyR1-released sarcoplasmic [[Ca2+|atom-ca]] (~10 uM pulse) binding regulatory EF-hand pockets on troponin-C (TnC)',
          inside: '40 nm coiled-coil tropomyosin + heterotrimeric troponin (TnT tether, TnI inhibitor, TnC sensor) shifting PDB 6KN7 -> PDB 6KN8 (~25-degree azimuthal roll)',
          deliversTo: 'Uncovered stereospecific actin footprints immediately engaging cocked [[Myosin-II S1|real-muscle-myosin]] heads across the [[sarcomere|real-muscle-sarcomere]]',
          loop: 'As soon as [[SERCA1a|real-muscle-serca]] drops Ca2+ back to ~100 nM, TnC releases calcium and TnI returns tropomyosin to the blocked position'
        },
        scientific:
          'Thin-filament steric regulatory complex [[troponin-tropomyosin|real-muscle-actin-tropo]] (cryo-EM PDB 6KN7 Ca2+-free blocked state vs PDB 6KN8 Ca2+-activated open state) positioned along F-actin at 1:7 stoichiometry. Heterotrimeric troponin (TnT anchoring tropomyosin, inhibitory TnI blocking actin, and [[Ca2+|atom-ca]]-binding EF-hand TnC) senses ~10 uM RyR1 calcium influx, shifting TnI switch peptides to roll coiled-coil tropomyosin ~25 degrees azimuthally into the actin groove and enabling cooperative [[Myosin-II S1|real-muscle-myosin]] strong binding.',
        from: [
          { nodeId: 'atom-ca', label: 'RyR1 Ca2+ Surge', cargo: 'Binds TnC EF-hand pockets' },
          { nodeId: 'real-muscle-serca', label: 'SERCA1a Reset Off', cargo: 'Clears Ca2+ to re-block' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Thin Filament Switch Node', cargo: 'PDB 6KN7 <-> 6KN8 transition' },
          { nodeId: 'real-muscle-myosin', label: 'Unlocked Actin Sites', cargo: 'Permits cross-bridge stroke' }
        ]
      },
      es: {
        subtitle: 'Interruptor Ca²⁺ troponina–tropomiosina (PDB 6KN7 cerrado ↔ 6KN8 abierto)',
        simple:
          'Los cables de tropomiosina y sensores tripartitos de troponina envuelven cada [[filamento fino de actina|real-muscle-actin-tropo]]. En reposo tapan los sitios de miosina; al unirse [[Ca²⁺|atom-ca]] a la troponina, el cable gira ~25° y deja actuar a la [[miosina-II|real-muscle-myosin]].',
        story:
          'Como las cabezas armadas de [[miosina-II|real-muscle-myosin]] están listas siempre que haya ATP, el músculo esquelético depende del freno estérico de [[troponina–tropomiosina|real-muscle-actin-tropo]] para mantenerse relajado entre impulsos. Cada dímero de tropomiosina de 40 nanómetros cubre siete subunidades de actina sujeto por la troponina-I inhibidora (TnI) en estado bloqueado sin Ca²⁺ (PDB 6KN7). Cuando RyR1 libera ~10 µM de [[Ca²⁺|atom-ca]], dos iones encajan en las manos EF de troponina-C (TnC), retiran TnI y ruedan la tropomiosina ~25° hacia el surco (PDB 6KN8) activando el deslizamiento.',
        blueprint: {
          role: 'Interruptor estérico binario sensible al Ca²⁺ que alterna la accesibilidad de la actina entre reposo bloqueado y contracción abierta',
          arrivesFrom: 'Pulso de [[Ca²⁺|atom-ca]] sarcoplásmico liberado por RyR1 (~10 µM) hacia los bolsillos EF reguladores de troponina-C (TnC)',
          inside: 'Tropomiosina superenrollada de 40 nm + troponina heterotrimérica (TnT anclaje, TnI inhibidora, TnC sensora) pasando de PDB 6KN7 a PDB 6KN8 (~25°)',
          deliversTo: 'Huellas estereoespecíficas de actina descubiertas para el acople inmediato de [[miosina-II S1|real-muscle-myosin]] en el [[sarcómero|real-muscle-sarcomere]]',
          loop: 'En cuanto [[SERCA1a|real-muscle-serca]] devuelve el Ca²⁺ a ~100 nM, TnC libera el calcio y TnI regresa la tropomiosina al estado bloqueado'
        },
        scientific:
          'Complejo regulador estérico del filamento fino [[troponina–tropomiosina|real-muscle-actin-tropo]] (crio-EM PDB 6KN7 estado bloqueado sin Ca²⁺ frente a PDB 6KN8 estado abierto con Ca²⁺) dispuesto sobre F-actina en proporción 1:7. La troponina heterotrimérica (TnT, TnI inhibidora y TnC con manos EF para [[Ca²⁺|atom-ca]]) detecta el pulso de ~10 µM desde RyR1, despega el péptido interruptor TnI y desplaza la tropomiosina ~25° habilitando el enlace fuerte de [[miosina-II S1|real-muscle-myosin]].',
        from: [
          { nodeId: 'atom-ca', label: 'Pulso Ca²⁺ de RyR1', cargo: 'Se une a manos EF de TnC' },
          { nodeId: 'real-muscle-serca', label: 'Apagado por SERCA1a', cargo: 'Retira Ca²⁺ para rebloquear' }
        ],
        to: [
          { nodeId: 'real-muscle-actin-tropo', label: 'Nodo interruptor fino', cargo: 'Transición PDB 6KN7 ↔ 6KN8' },
          { nodeId: 'real-muscle-myosin', label: 'Sitios de actina libres', cargo: 'Habilita el golpe motor' }
        ]
      }
    },

    muscle_atoms: {
      en: {
        subtitle: 'Contractile Atomic Lens (Ca2+ EF-Hand Cage & Mg2+-ATP Hydrolysis)',
        simple:
          'At 0.1-0.5 nm inside a [[skeletal muscle fiber|real-muscle]], all macroscopic lifting comes down to two atomic events: [[Ca2+|atom-ca]] snapping into oxygen pockets on [[troponin|real-muscle-actin-tropo]] and [[Mg2+|atom-mg]]-ATP cleaving its terminal [[phosphate|atom-p]] inside [[Myosin-II|real-muscle-myosin]] and [[SERCA1a|real-muscle-serca]].',
        story:
          'Zooming past the entire myofiber and 2.2-micrometer [[sarcomere|real-muscle-sarcomere]] exposes the exact atomic chemistry powering motion. Inside [[troponin TnC|real-muscle-actin-tropo]], seven negatively charged [[oxygen|atom-o]] atoms from aspartate, glutamate, and backbone carbonyls wrap tightly around divalent [[Ca2+|atom-ca]], flexing the loop that uncovers actin. Simultaneously inside [[Myosin-II|real-muscle-myosin]] and [[SERCA1a|real-muscle-serca]], a coordinated [[Mg2+|atom-mg]] ion aligns the three negatively charged [[phosphorus|atom-p]]-oxygen groups of ATP so a single [[water|water]] attack splits the gamma-phosphate bond, releasing chemical free energy directly into mechanical motion and calcium pumping.',
        blueprint: {
          role: 'Sub-nanometer atomic catalysis and metal-ion coordination powering every contraction and relaxation cycle',
          arrivesFrom: 'Divalent [[Ca2+|atom-ca]] ions from SR RyR1 plus [[Mg2+|atom-mg]]-ATP synthesized from [[C/H/N/O/P|atom-p]] by [[ATP synthase|real-bio-atpsynth]]',
          inside: 'CPK ball-and-stick Ca2+ chelated in heptacoordinate EF-hand [[oxygen|atom-o]] cages beside [[Mg2+|atom-mg]]-ATP -> ADP + [[Pi|atom-p]] gamma-bond hydrolysis',
          deliversTo: 'Exact conformational energy switching [[troponin-tropomyosin|real-muscle-actin-tropo]], driving [[Myosin-II|real-muscle-myosin]] strokes, and fueling [[SERCA1a|real-muscle-serca]] pumps',
          loop: 'Spent ADP and inorganic phosphate diffuse straight to intermyofibrillar [[mitochondria|mitochondrion]] for continuous aerobic ATP recharging'
        },
        scientific:
          'Atomic scale (0.1-0.5 nm) of [[skeletal muscle|real-muscle]] contraction uniting [[atomic currencies|real-spec-atoms]]: pentagonal-bipyramidal 7-coordinate [[O|atom-o]] ligation of [[Ca2+|atom-ca]] (0.100 nm radius) inside [[troponin TnC|real-muscle-actin-tropo]] EF-hands (Asp/Glu/backbone oxygens), paired with [[Mg2+|atom-mg]]-stabilized nucleophilic [[H2O|water]] attack cleaving the terminal gamma-[[phosphorus|atom-p]] phosphoanhydride bond of ATP (C10H16N5O13P3, built from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]; delta-G approx -50 kJ/mol in vivo) inside [[Myosin-II S1|real-muscle-myosin]] and [[SERCA1a|real-muscle-serca]].',
        from: [
          { nodeId: 'atom-ca', label: 'Ca2+ EF-Hand Cage', cargo: '7-oxygen TnC coordination' },
          { nodeId: 'atom-mg', label: 'Mg2+-ATP Gamma Bond', cargo: 'Phosphate cleavage energy' }
        ],
        to: [
          { nodeId: 'real-spec-atoms', label: 'Specialized Atoms Node', cargo: 'Universal atomic toolkit' },
          { nodeId: 'real-muscle-myosin', label: 'Chemomechanical Work', cargo: 'ATP -> ADP + Pi power stroke' }
        ]
      },
      es: {
        subtitle: 'Lente atómica contráctil (Jaula EF de Ca²⁺ e hidrólisis Mg²⁺–ATP)',
        simple:
          'A 0,1–0,5 nm dentro de la [[fibra muscular|real-muscle]], todo esfuerzo físico se reduce a dos sucesos atómicos: el encaje del [[Ca²⁺|atom-ca]] en bolsillos de oxígeno de la [[troponina|real-muscle-actin-tropo]] y la ruptura del [[fosfato|atom-p]] terminal del [[Mg²⁺|atom-mg]]–ATP en [[miosina-II|real-muscle-myosin]] y [[SERCA1a|real-muscle-serca]].',
        story:
          'Al bajar más allá de toda la miofibra y del [[sarcómero|real-muscle-sarcomere]] de 2,2 micrómetros aparece la química atómica exacta que impulsa el movimiento. En la [[troponina TnC|real-muscle-actin-tropo]], siete átomos de [[oxígeno|atom-o]] negativos rodean estrechamente al [[Ca²⁺|atom-ca]] divalente flexionando el bucle que destapa la actina. A la vez, dentro de [[miosina-II|real-muscle-myosin]] y [[SERCA1a|real-muscle-serca]], un ion [[Mg²⁺|atom-mg]] alinea los tres grupos de [[fósforo|atom-p]] y oxígeno del ATP para que una molécula de [[agua|water]] rompa el fosfato gamma, liberando energía hacia el golpe motor y el bombeo de calcio.',
        blueprint: {
          role: 'Catálisis atómica y coordinación de iones metálicos subnanométricas que financian cada ciclo de contracción y relajación',
          arrivesFrom: 'Iones divalentes [[Ca²⁺|atom-ca]] de RyR1 más [[Mg²⁺|atom-mg]]–ATP sintetizado a partir de [[C/H/N/O/P|atom-p]] por la [[ATP sintasa|real-bio-atpsynth]]',
          inside: 'Modelos CPK de Ca²⁺ quelado en jaulas EF heptacoordinadas de [[oxígeno|atom-o]] junto a la hidrólisis [[Mg²⁺|atom-mg]]–ATP → ADP + [[Pᵢ|atom-p]]',
          deliversTo: 'Energía conformacional exacta que gira [[troponina–tropomiosina|real-muscle-actin-tropo]], acciona [[miosina-II|real-muscle-myosin]] y alimenta [[SERCA1a|real-muscle-serca]]',
          loop: 'El ADP y el fosfato inorgánico regresan de inmediato a las [[mitocondrias|mitochondrion]] intermiofibrilares para recargar ATP'
        },
        scientific:
          'Escala atómica (0,1–0,5 nm) de la contracción del [[músculo esquelético|real-muscle]] integrada en [[divisas atómicas|real-spec-atoms]]: coordinación heptadentada de [[O|atom-o]] alrededor del [[Ca²⁺|atom-ca]] (radio 0,100 nm) en las manos EF de [[troponina TnC|real-muscle-actin-tropo]], junto al ataque nucleofílico de [[H₂O|water]] estabilizado por [[Mg²⁺|atom-mg]] sobre el enlace fosfoanhídrido gamma del [[fósforo|atom-p]] del ATP (C₁₀H₁₆N₅O₁₃P₃ de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]]; ΔG ≈ –50 kJ/mol in vivo) en [[miosina-II S1|real-muscle-myosin]] y [[SERCA1a|real-muscle-serca]].',
        from: [
          { nodeId: 'atom-ca', label: 'Jaula EF de Ca²⁺', cargo: 'Coordinación de 7 oxígenos en TnC' },
          { nodeId: 'atom-mg', label: 'Enlace gamma Mg²⁺–ATP', cargo: 'Energía de ruptura del fosfato' }
        ],
        to: [
          { nodeId: 'real-spec-atoms', label: 'Nodo átomos especializados', cargo: 'Repertorio atómico universal' },
          { nodeId: 'real-muscle-myosin', label: 'Trabajo quimiomecánico', cargo: 'Golpe de fuerza ATP → ADP + Pᵢ' }
        ]
      }
    }
  }
};
