import type { BilingualNodeLens, BilingualPartLens } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 12 Phase 15 Central Dogma & Molecular Evolution Explorer nodes and all 20
 * Standalone Realistic Part Lenses (`central_dogma_realistic.html`) in `EN` & `ES`.
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const CENTRAL_DOGMA_NODE_LENSES: Record<string, BilingualNodeLens> = {
  'real-central-dogma': {
    en: {
      simple:
        'The Central Dogma traces how a [[eukaryotic cell|real-cell]] copies nuclear [[DNA|dna]], transcribes and splices messenger [[RNA|rna]], exports it through a [[nuclear pore|nuclear-pore]], and translates it on [[80S ribosomes|real-cd-ribo80]] into folded [[proteins|protein]].',
      story:
        'Inside a five-micrometer corridor linking [[nucleus|nucleus]] and [[cytosol|cytosol]], genetic information flows along one unbroken physical pathway. First the [[replisome|real-cd-replisome]] and proofreading [[DNA Pol delta|real-cd-pol-delta]] copy double-stranded [[DNA|dna]] while [[RNA Pol II|rna-polymerase]] transcribes the human beta-globin gene into pre-mRNA. Like editing one raw script into distinct cuts, the [[spliceosome|real-cd-spliceosome]] removes introns and ligates exons for [[alternative splicing|real-cd-splicing-view]] before mature [[RNA|rna]] threads a [[nuclear pore|nuclear-pore]] to cytosolic [[80S ribosomes|real-cd-ribo80]], [[Hsp70|real-cd-hsp70]], and [[TRiC|real-cd-tric]], where one [[atomic base swap|real-cd-mutation-atom]] can trigger [[HbS fibers|real-cd-hbs]] or adaptive [[AcrB efflux|real-cd-acrb]].',
      blueprint:
        'Role: Continuous 5 um Nucleus-to-Cytosol genetic information pipeline integrating replication, transcription, splicing, translation, folding, and point-mutation evolution; Inputs: Nuclear [[chromatin|chromatin-fiber]] (*HBB* gene, 3 exons, 2 introns), dNTPs/rNTPs, charged [[tRNAs|real-cd-trna]], and [[ATP|atp-synthase]]/GTP; Inside: Five linked stations from [[replisome|real-cd-replisome]] and [[RNA Pol II|rna-polymerase]] through [[spliceosome|real-cd-spliceosome]], [[nuclear pore|nuclear-pore]], [[80S ribosomes|real-cd-ribo80]], and [[TRiC|real-cd-tric]]; Outputs: Folded native [[proteins|protein]] plus live single-base [[HbS|real-cd-hbs]] and [[AcrB|real-cd-acrb]] evolutionary phenotypes.',
      scientific:
        'End-to-end structural synthesis of eukaryotic genetic information flow spanning a 5.0 x 3.2 x 2.8 um nuclear-to-cytosolic corridor down to 0.1 nm atomic bonds across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[Mg2+|atom-mg]], [[S|atom-s]], and heme [[Fe|atom-fe]]. Connects [[MCM2-7/DnaB helicase|real-cd-replisome]] (PDB 6QEL), [[DNA Pol delta-PCNA|real-cd-pol-delta]] (PDB 6TNY/1AXC), [[RNA Pol II|rna-polymerase]] (PDB 1I50), catalytic C [[spliceosome|real-cd-spliceosome]] (PDB 5YZG), 120 nm [[NPC|nuclear-pore]] export, human [[80S ribosome|real-cd-ribo80]] (PDB 4UG0) with [[tRNA|real-cd-trna]] (PDB 1EHZ), [[Hsp70|real-cd-hsp70]] (PDB 2KHO), [[TRiC|real-cd-tric]] (PDB 6NR8), and point-mutation selection in [[HbA/HbS|real-cd-hbs]] (PDB 2HHB/2HBS) and bacterial [[AcrB|real-cd-acrb]] (PDB 5O66).'
    },
    es: {
      simple:
        'El dogma central muestra cómo una [[célula eucariota|real-cell]] copia el [[ADN|dna]] nuclear, transcribe y empalma el [[ARN|rna]] mensajero, lo exporta por un [[poro nuclear|nuclear-pore]] y lo traduce en [[ribosomas 80S|real-cd-ribo80]] en [[proteínas|protein]] plegadas.',
      story:
        'A lo largo de un corredor de cinco micrómetros entre [[núcleo|nucleus]] y [[citosol|cytosol]], la información genética fluye a lo largo de una única ruta física continua. Primero el [[replisoma|real-cd-replisome]] y la [[ADN Pol δ|real-cd-pol-delta]] correctora copian el [[ADN|dna]] mientras la [[ARN Pol II|rna-polymerase]] transcribe el gen humano de beta-globina en pre-ARNm. Como editar un guion en versiones distintas, el [[espliceosoma|real-cd-spliceosome]] extirpa intrones y une exones en el [[empalme alternativo|real-cd-splicing-view]] antes de que el [[ARN|rna]] maduro cruce el [[poro nuclear|nuclear-pore]] hacia los [[ribosomas 80S|real-cd-ribo80]], [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]], donde un [[cambio atómico|real-cd-mutation-atom]] origina [[fibras HbS|real-cd-hbs]] o bombas [[AcrB|real-cd-acrb]] adaptativas.',
      blueprint:
        'Rol: Corredor continuo de 5 µm del núcleo al citosol que integra replicación, transcripción, empalme, traducción, plegamiento y evolución puntual · Entradas: [[Cromatina|chromatin-fiber]] nuclear (gen HBB, 3 exones, 2 intrones), dNTP/rNTP, [[ARNt|real-cd-trna]] cargados y [[ATP|atp-synthase]]/GTP · Interior: Cinco estaciones enlazadas desde [[replisoma|real-cd-replisome]] y [[ARN Pol II|rna-polymerase]] hasta [[espliceosoma|real-cd-spliceosome]], [[poro nuclear|nuclear-pore]], [[ribosomas 80S|real-cd-ribo80]] y [[TRiC|real-cd-tric]] · Salida: [[Proteínas|protein]] nativas y fenotipos evolutivos en vivo en [[HbS|real-cd-hbs]] y [[AcrB|real-cd-acrb]].',
      scientific:
        'Síntesis estructural continua del flujo genético eucariota desde un corredor núcleo-citosol de 5,0 × 3,2 × 2,8 µm hasta enlaces atómicos de 0,1 nm en [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[Mg²⁺|atom-mg]], [[S|atom-s]] y [[Fe|atom-fe]] del hemo. Enlaza la [[helicasa MCM2–7/DnaB|real-cd-replisome]] (PDB 6QEL), [[ADN Pol δ–PCNA|real-cd-pol-delta]] (PDB 6TNY/1AXC), [[ARN Pol II|rna-polymerase]] (PDB 1I50), el [[espliceosoma|real-cd-spliceosome]] C (PDB 5YZG), el [[poro nuclear|nuclear-pore]] de 120 nm, el [[ribosoma 80S|real-cd-ribo80]] (PDB 4UG0) con [[ARNt|real-cd-trna]] (PDB 1EHZ), [[Hsp70|real-cd-hsp70]] (PDB 2KHO), [[TRiC|real-cd-tric]] (PDB 6NR8) y la selección por mutaciones puntuales en [[HbA/HbS|real-cd-hbs]] (PDB 2HHB/2HBS) y [[AcrB|real-cd-acrb]] (PDB 5O66).'
    }
  },

  'real-cd-replisome': {
    en: {
      simple:
        'The replisome is a coordinated cluster of nuclear [[proteins|protein]] that unzips double-stranded [[DNA|dna]] at a Y-shaped replication fork and builds two identical daughter copies before [[cell division|real-cell-division]].',
      story:
        'Every time a [[eukaryotic cell|real-cell]] or [[bacterium|real-bacterium]] prepares to divide, its replisome must unwind base-paired [[DNA|dna]] without letting exposed single strands tangle or snap. At the leading edge of the fork, a ring-shaped hexameric helicase burns [[ATP|atp-synthase]] to pry complementary strands apart while single-strand binding proteins coat the bare template. Behind it, primase lays short [[RNA|rna]] starters and clamp-tethered polymerases including [[DNA Pol delta|real-cd-pol-delta]] extend the continuous leading strand and stitched Okazaki fragments on the lagging strand into two exact sister duplexes.',
      blueprint:
        'Role: Bidirectional 12-15 nm molecular replication fork duplicating parental chromatin into two semiconservative daughter duplexes; Inputs: Double-stranded [[DNA|dna]] unwrapped from [[nucleosomes|nucleosome]], dNTPs, rNTP primers, and [[ATP|atp-synthase]] + [[Mg2+|atom-mg]]; Inside: Hexameric replicative helicase (MCM2-7 / DnaB PDB 6QEL), RPA/SSB single-strand coats (PDB 1EYG), primase, and [[DNA Pol delta-PCNA|real-cd-pol-delta]] (vs. bacterial Pol III PDB 5FKV); Outputs: Two faithful sister [[chromosomes|chromosome]] ready for [[cell division|real-cell-division]] and transcription.',
      scientific:
        'Multi-enzyme replication fork assembly (~12-15 nm core; conserved logic across eukaryotic [[nuclei|nucleus]] and [[E. coli|real-bacterium]]). An ATP-dependent hexameric ring helicase (eukaryotic CMG/MCM2-7 or bacterial DnaB, PDB 6QEL, ~13 nm) translocates along single-stranded [[DNA|dna]] to separate base pairs at ~50 bp/s (eukaryotes) to ~1,000 bp/s (bacteria), while RPA/SSB (PDB 1EYG) suppresses secondary hairpins. Primase initiates short [[RNA|rna]] primers extended 5\' to 3\' by leading-strand Pol epsilon and lagging-strand [[DNA Pol delta-PCNA|real-cd-pol-delta]] (PDB 6TNY/1AXC; bacterial Pol III holoenzyme PDB 5FKV) with topoisomerase relieving upstream supercoiling.'
    },
    es: {
      simple:
        'El replisoma es un conjunto coordinado de [[proteínas|protein]] nucleares que abre el [[ADN|dna]] bicatenario en una horquilla en Y y construye dos copias hijas idénticas antes de la [[división celular|real-cell-division]].',
      story:
        'Cada vez que una [[célula eucariota|real-cell]] o una [[bacteria|real-bacterium]] se prepara para dividirse, el replisoma separa el [[ADN|dna]] sin permitir que las hebras sueltas se enreden ni se rompan. En la punta de la horquilla, una helicasa hexamérica en anillo consume [[ATP|atp-synthase]] para abrir los pares de bases mientras proteínas de unión a cadena simple recubren el molde expuesto. Detrás, la primasa coloca cebadores cortos de [[ARN|rna]] y polimerasas acopladas a pinzas, incluida la [[ADN Pol δ|real-cd-pol-delta]], sintetizan la hebra líder continua y los fragmentos de Okazaki rezagados generando dos dúplex exactos.',
      blueprint:
        'Rol: Horquilla de replicación bidireccional de 12–15 nm que duplica la cromatina parental en dos dúplex semiconservativos · Entradas: [[ADN|dna]] bicatenario liberado de [[nucleosomas|nucleosome]], dNTP, cebadores rNTP y [[ATP|atp-synthase]] + [[Mg²⁺|atom-mg]] · Interior: Helicasa hexamérica (MCM2–7 / DnaB PDB 6QEL), recubrimiento RPA/SSB (PDB 1EYG), primasa y [[ADN Pol δ–PCNA|real-cd-pol-delta]] (frente a Pol III bacteriana PDB 5FKV) · Salida: Dos [[cromosomas|chromosome]] hermanos fieles listos para la [[división celular|real-cell-division]].',
      scientific:
        'Complejo multienzimático de la horquilla de replicación (~12–15 nm; arquitectura conservada entre [[núcleos|nucleus]] eucariotas y [[E. coli|real-bacterium]]). Una helicasa anular hexamérica dependiente de ATP (CMG/MCM2–7 eucariota o DnaB bacteriana, PDB 6QEL, ~13 nm) separa el [[ADN|dna]] a ~50 pb/s (eucariotas) hasta ~1.000 pb/s (bacterias) mientras RPA/SSB (PDB 1EYG) impide horquillas internas. La primasa sintetiza cebadores de [[ARN|rna]] elongados en sentido 5\'→3\' por Pol ε en la hebra líder y [[ADN Pol δ–PCNA|real-cd-pol-delta]] (PDB 6TNY/1AXC; Pol III PDB 5FKV) en la rezagada.'
    }
  },

  'real-cd-pol-delta': {
    en: {
      simple:
        'DNA Polymerase delta pairs with the ring-shaped PCNA clamp to copy [[DNA|dna]] rapidly while double-checking every newly added [[nucleotide|nucleotide]] and erasing mistakes before moving forward.',
      story:
        'Speed alone would ruin a genome if errors piled up every division. Tethered onto the template strand by the ring-shaped PCNA sliding clamp, DNA Polymerase delta locks incoming deoxynucleotides into its palm catalytic site and tests Watson-Crick geometry against the opposite [[base|base]]. Whenever a wrong nucleotide slips in, the distorted pair stalls polymerization and swings the 3\' primer tip into the enzyme\'s built-in exonuclease pocket, snipping the mismatch out before synthesis resumes. That proofreading cuts errors roughly one-hundred-fold, yet the rare mismatches that escape create the [[point mutations|real-cd-mutation-atom]] that fuel evolution.',
      blueprint:
        'Role: High-fidelity processive eukaryotic DNA polymerase (12 x 15 nm) coupling 5\' -> 3\' synthesis with 3\' -> 5\' exonuclease proofreading; Inputs: Unwound template [[DNA|dna]] from the [[replisome|real-cd-replisome]], free dNTP [[nucleotides|nucleotide]], and two catalytic [[Mg2+|atom-mg]] ions; Inside: Catalytic PolD1 palm/fingers/thumb domains bound to trimeric PCNA sliding clamp (PDB 6TNY / 1AXC; bacterial Pol III-beta analog PDB 5FKV) plus 3\' -> 5\' proofreading exonuclease cleft; Outputs: Proofread nascent [[dsDNA|dna]] with raw misincorporation reduced to ~10^-7 per base pair.',
      scientific:
        'Eukaryotic B-family replicative holoenzyme [[DNA|dna]] Polymerase delta (four-subunit POLD1-POLD2-POLD3-POLD4 complex bound to homotrimeric PCNA processivity clamp, cryo-EM PDB 6TNY and PCNA PDB 1AXC; ~12 x 15 nm; functionally paired with bacterial C-family Pol III + beta-clamp PDB 5FKV). Catalyzes two-[[Mg2+|atom-mg]]-ion nucleophilic attack of the primer 3\'-OH onto incoming dNTP alpha-[[phosphate|phosphate]] (5\' -> 3\' elongation). Geometric mismatch sensing stalls the palm and transfers the primer 3\' end ~3 nm into the intrinsic 3\' -> 5\' exonuclease domain, boosting replication fidelity ~100-fold prior to post-replicative mismatch repair.'
    },
    es: {
      simple:
        'La ADN polimerasa delta se acopla a la pinza anular PCNA para copiar el [[ADN|dna]] con rapidez mientras verifica cada [[nucleótido|nucleotide]] incorporado y borra errores antes de avanzar.',
      story:
        'La velocidad sin precisión destruiría el genoma en pocas divisiones. Sujeta a la hebra molde por la pinza deslizante PCNA, la ADN polimerasa delta encaja cada desoxinucleótido entrante en su palma catalítica y comprueba la geometría de Watson y Crick frente a la [[base|base]] opuesta. Cuando entra una base incorrecta, el par deformado frena la síntesis y desplaza el extremo 3\' hacia la cavidad exonucleasa interna, que corta el error antes de reanudar el avance. Esta lectura de prueba reduce los fallos unas cien veces, aunque los escasos errores residuales originan las [[mutaciones puntuales|real-cd-mutation-atom]] que impulsan la evolución.',
      blueprint:
        'Rol: ADN polimerasa eucariota procesiva de alta fidelidad (12 × 15 nm) que combina síntesis 5\'→3\' y corrección exonucleasa 3\'→5\' · Entradas: Molde de [[ADN|dna]] abierto por el [[replisoma|real-cd-replisome]], [[nucleótidos|nucleotide]] dNTP y dos iones [[Mg²⁺|atom-mg]] catalíticos · Interior: Dominios catalíticos PolD1 acoplados a la pinza trimérica PCNA (PDB 6TNY / 1AXC; análogo bacteriano Pol III–β PDB 5FKV) más bolsillo exonucleasa 3\'→5\' · Salida: [[ADNbc|dna]] corregido con tasa de error reducida a ~10⁻⁷ por par de bases.',
      scientific:
        'Holoenzima replicativa eucariota de familia B [[ADN|dna]] polimerasa δ (complejo POLD1–POLD2–POLD3–POLD4 unido a la pinza homotrimérica PCNA, crio-EM PDB 6TNY y PCNA PDB 1AXC; ~12 × 15 nm; equivalente funcional a la Pol III bacteriana de familia C con pinza β, PDB 5FKV). Cataliza mediante dos iones [[Mg²⁺|atom-mg]] el ataque del 3\'-OH del cebador sobre el [[fosfato|phosphate]] α del dNTP entrante (elongación 5\'→3\'). Un mal apareamiento frena la palma y transfiere el extremo 3\' ~3 nm al dominio exonucleasa 3\'→5\', elevando la fidelidad ~100 veces.'
    }
  },

  'real-cd-spliceosome': {
    en: {
      simple:
        'The spliceosome is a huge nuclear machine built from [[RNA|rna]] and [[proteins|protein]] that cuts non-coding introns out of fresh pre-mRNA and stitches the coding exons together into mature messenger RNA.',
      story:
        'In eukaryotic [[nuclei|nucleus]], freshly transcribed pre-mRNA from [[RNA Pol II|rna-polymerase]] contains protein-coding exons interrupted by long non-coding introns that would scramble translation if left intact. Five small nuclear ribonucleoprotein particles (U1, U2, U4, U5, and U6) assemble stepwise onto each intron, spotting conserved 5\' GU, branch-point adenosine, and 3\' AG landmarks. Once remodeled into the catalytic C complex, an RNA active site guided by two [[Mg2+|atom-mg]] ions bends the intron into a looped 2\'-5\' lariat and ligates the flanking exons seamlessly, powering [[alternative splicing|real-cd-splicing-view]] before [[nuclear pore|nuclear-pore]] export.',
      blueprint:
        'Role: Dynamic 27 nm megadalton ribonucleoprotein ribozyme excising non-coding introns and ligating exons into translatable mRNA; Inputs: Capped, polyadenylated pre-mRNA from [[RNA Pol II|rna-polymerase]], U1/U2/U4/U5/U6 snRNPs, [[ATP|atp-synthase]] helicases, and catalytic [[Mg2+|atom-mg]]; Inside: Human catalytic C-complex core (PDB 5YZG, ~2.5-3.0 MDa) executing two sequential transesterification reactions via U2/U6 snRNA catalysis; Outputs: Mature spliced mRNA licensed for [[nuclear pore|nuclear-pore]] export plus excised 2\'-5\' intron lariats recycled into [[nucleotides|nucleotide]].',
      scientific:
        'Eukaryotic megadalton spliceosome (~27 x 24 x 20 nm, ~2.5-3.0 MDa; human catalytic step I/II C complex cryo-EM PDB 5YZG) comprising five small nuclear ribonucleoproteins (U1, U2, U4, U5, U6 snRNPs) and >100 accessory [[proteins|protein]] plus DExD/H-box ATPases. Recognizes 5\' splice site (GU), intronic branch-point adenosine, polypyrimidine tract, and 3\' splice site (AG). Catalyzed by a conserved two-[[Mg2+|atom-mg]]-ion [[RNA|rna]] ribozyme formed by U2/U6 snRNAs, two SN2 transesterifications cleave the 5\' exon forming a 2\'-5\' phosphodiester intron lariat and join adjacent exons cleanly for [[alternative splicing|real-cd-splicing-view]].'
    },
    es: {
      simple:
        'El espliceosoma es una enorme máquina nuclear hecha de [[ARN|rna]] y [[proteínas|protein]] que recorta los intrones no codificantes del pre-ARNm recién transcrito y une los exones codificantes en un ARNm maduro.',
      story:
        'En el [[núcleo|nucleus]] eucariota, el pre-ARNm sintetizado por la [[ARN Pol II|rna-polymerase]] mezcla exones codificantes con largos intrones que arruinarían la traducción si permanecieran en el mensaje. Cinco complejos ribonucleoproteicos pequeños (U1, U2, U4, U5 y U6) se ensamblan por etapas sobre cada intrón al localizar sus señales 5\' GU, adenosina de ramificación y 3\' AG. Ya en el complejo catalítico C, un centro activo de ARN coordinado por dos iones [[Mg²⁺|atom-mg]] cierra el intrón en un lazo 2\'–5\' y sella los exones vecinos, habilitando el [[empalme alternativo|real-cd-splicing-view]] antes de cruzar el [[poro nuclear|nuclear-pore]].',
      blueprint:
        'Rol: Ribozima ribonucleoproteica dinámica de 27 nm y megadaltons que escinde intrones y liga exones en ARNm traducible · Entradas: Pre-ARNm con caperuza y cola poli-A desde la [[ARN Pol II|rna-polymerase]], snRNP U1/U2/U4/U5/U6, helicasas de [[ATP|atp-synthase]] y [[Mg²⁺|atom-mg]] · Interior: Complejo catalítico humano C (PDB 5YZG, ~2,5–3,0 MDa) que ejecuta dos transesterificaciones mediante el centro de ARNsn U2/U6 · Salida: ARNm maduro listo para el [[poro nuclear|nuclear-pore]] y lazos intrónicos 2\'–5\' reciclados a [[nucleótidos|nucleotide]].',
      scientific:
        'Espliceosoma eucariota de escala megadalton (~27 × 24 × 20 nm, ~2,5–3,0 MDa; complejo catalítico humano C por crio-EM PDB 5YZG) integrado por cinco ribonucleoproteínas nucleares pequeñas (U1, U2, U4, U5 y U6) y más de 100 [[proteínas|protein]] con ATPasas DExD/H. Identifica el sitio donador 5\' (GU), la adenosina de ramificación, el tracto polipirimidínico y el aceptor 3\' (AG). Su núcleo catalítico de [[ARN|rna]] U2/U6 con dos [[Mg²⁺|atom-mg]] realiza dos transesterificaciones SN2 que forman un lazo fosfodiéster 2\'–5\' y ligan los exones en el [[empalme alternativo|real-cd-splicing-view]].'
    }
  },

  'real-cd-splicing-view': {
    en: {
      simple:
        'Alternative splicing lets the [[spliceosome|real-cd-spliceosome]] keep or skip specific cassette exons in one pre-mRNA transcript, allowing a single [[DNA|dna]] gene to encode multiple distinct [[proteins|protein]] across different tissues.',
      story:
        'Humans carry only about twenty thousand protein-coding genes, yet our cells manufacture well over one hundred thousand structurally distinct [[proteins|protein]]. Alternative splicing explains that combinatorial leap. Tissue-specific SR activator proteins and hnRNP repressors bind short regulatory motifs flanking cassette exons, nudging the [[spliceosome|real-cd-spliceosome]] either to include Exon 2 for full-length Isoform A or to splice Exon 1 directly to Exon 3 for compact Isoform B. Without adding a single base to nuclear [[DNA|dna]], the cell tailors binding pockets, localization tags, and enzymatic activity for muscle, brain, or blood.',
      blueprint:
        'Role: Combinatorial post-transcriptional exon router multiplying proteome diversity without expanding nuclear genome length; Inputs: Multi-exon pre-mRNA from [[RNA Pol II|rna-polymerase]], regulatory SR activators and hnRNP repressors, and the catalytic [[spliceosome|real-cd-spliceosome]]; Inside: Regulated splice-site selection toggling between Isoform A (Exon 1-2-3 retention) and Isoform B (Exon 2 cassette skipping into the excised lariat); Outputs: Distinct mature [[mRNAs|rna]] translated by cytosolic [[80S ribosomes|real-cd-ribo80]] into functionally specialized [[protein|protein]] isoforms.',
      scientific:
        'Regulated eukaryotic alternative pre-mRNA splicing across >95% of human multi-exon genes, expanding ~20,000 protein-coding loci into >100,000 distinct proteome isoforms. Trans-acting serine/arginine-rich (SR) activators and heterogeneous nuclear ribonucleoproteins (hnRNPs) recognize cis-acting exonic/intronic enhancers and silencers to modulate U1/U2 snRNP recruitment within the [[spliceosome|real-cd-spliceosome]] (PDB 5YZG). Cassette-exon inclusion (Isoform A) versus skipping (Isoform B) alters domain composition, catalytic loops, or targeting signals in the resulting [[polypeptide|polypeptide]] translated on cytosolic [[80S ribosomes|real-cd-ribo80]].'
    },
    es: {
      simple:
        'El empalme alternativo permite al [[espliceosoma|real-cd-spliceosome]] conservar u omitir exones específicos de un mismo pre-ARNm, de modo que un solo gen de [[ADN|dna]] codifique varias [[proteínas|protein]] distintas según el tejido.',
      story:
        'El genoma humano apenas contiene unos veinte mil genes codificantes de proteínas, pero nuestras células fabrican más de cien mil [[proteínas|protein]] estructuralmente distintas. El empalme alternativo explica ese salto combinatorio. Proteínas activadoras SR y represoras hnRNP propias de cada tejido se unen junto a exones casete, guiando al [[espliceosoma|real-cd-spliceosome]] a conservar el exón 2 en la Isoforma A o a enlazar directamente el exón 1 con el exón 3 en la Isoforma B. Sin alargar el [[ADN|dna]] nuclear, la célula ajusta dominios, bolsillos y destinos para músculo, cerebro o sangre.',
      blueprint:
        'Rol: Enrutador combinatorio postranscripcional de exones que multiplica la diversidad del proteoma sin agrandar el genoma · Entradas: Pre-ARNm multiexónico desde [[ARN Pol II|rna-polymerase]], activadores SR, represores hnRNP y el [[espliceosoma|real-cd-spliceosome]] · Interior: Selección regulada de sitios de corte que alterna Isoforma A (exones 1–2–3) e Isoforma B (omisión del exón 2 en el lazo intrónico) · Salida: [[ARNm|rna]] maduros distintos traducidos por [[ribosomas 80S|real-cd-ribo80]] en isoformas [[proteicas|protein]] especializadas.',
      scientific:
        'Empalme alternativo regulado presente en más del 95 % de los genes humanos multiexónicos, ampliando ~20.000 loci codificantes a más de 100.000 isoformas proteicas. Factores SR activadores y ribonucleoproteínas hnRNP represoras reconocen secuencias potenciadoras o silenciadoras en cis para modular el reclutamiento de U1/U2 en el [[espliceosoma|real-cd-spliceosome]] (PDB 5YZG). La inclusión (Isoforma A) u omisión (Isoforma B) de un exón casete reorganiza dominios funcionales en el [[polipéptido|polypeptide]] sintetizado por [[ribosomas 80S|real-cd-ribo80]].'
    }
  },

  'real-cd-ribo80': {
    en: {
      simple:
        'The eukaryotic 80S ribosome is a cytosolic [[RNA|rna]]-and-[[protein|protein]] nanomachine that reads three-letter mRNA codons and links [[amino acids|amino-acid]] one by one into a growing [[polypeptide|polypeptide]] chain.',
      story:
        'Once mature mRNA emerges from a [[nuclear pore|nuclear-pore]] into the [[cytosol|cytosol]], small [[40S|ribo-small]] and large [[60S|ribo-large]] subunits clamp around its start codon to assemble a 4.3-megadalton 80S [[ribosome|ribosome]]. Guided by GTP-fueled elongation factors, charged [[tRNAs|real-cd-trna]] test their anticodons inside the A site, shift to the P site as the 28S rRNA catalytic center forges each peptide bond, and depart uncharged from the E site. Multiple 80S ribosomes queue along one transcript as a polysome, threading nascent [[polypeptides|polypeptide]] out of the ten-nanometer exit tunnel directly toward [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]].',
      blueprint:
        'Role: 28-30 nm eukaryotic translational ribozyme decoding mature mRNA codons into sequence-exact [[polypeptide|polypeptide]] chains; Inputs: Exported capped/spliced [[mRNA|rna]], charged aminoacyl-[[tRNAs|real-cd-trna]], eEF1A/eEF2 GTPases, and [[Mg2+|atom-mg]]; Inside: Human 80S assembly (PDB 4UG0, 4.3 MDa; [[40S|ribo-small]] decoding center + [[60S|ribo-large]] 28S rRNA peptidyl-transferase center, A/P/E sites, and 10 nm exit tunnel; vs. bacterial [[70S|ribosome-70s]] PDB 4YBB); Outputs: Growing [[polypeptide|polypeptide]] chains delivered to [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]] in the [[cytosol|cytosol]].',
      scientific:
        'Human cytoplasmic 80S [[ribosome|ribosome]] (~28-30 nm diameter, ~4.3 MDa; cryo-EM PDB 4UG0; contrasted with 2.5 MDa bacterial [[70S ribosome|ribosome-70s]] PDB 4YBB) composed of the [[40S small subunit|ribo-small]] (18S rRNA + 33 ribosomal proteins) and [[60S large subunit|ribo-large]] (28S, 5.8S, 5S rRNAs + 47 proteins). The 40S decoding center enforces Watson-Crick [[codon-anticodon|real-cd-mutation-atom]] geometry across [[A/P/E tRNA sites|real-cd-trna]], while the 60S 28S rRNA ribozyme catalyzes peptidyl transfer (~5-6 residues/s in eukaryotes) and channels the nascent [[polypeptide|polypeptide]] through a ~10 nm exit tunnel lined by ribosomal RNA.'
    },
    es: {
      simple:
        'El ribosoma eucariota 80S es una nanomáquina citosólica de [[ARN|rna]] y [[proteínas|protein]] que lee codones de tres letras en el ARNm y enlaza [[aminoácidos|amino-acid]] uno tras otro formando un [[polipéptido|polypeptide]].',
      story:
        'Cuando el ARNm maduro sale por un [[poro nuclear|nuclear-pore]] al [[citosol|cytosol]], las subunidades [[40S|ribo-small]] y [[60S|ribo-large]] se cierran sobre el codón de inicio formando un [[ribosoma|ribosome]] 80S de 4,3 megadaltons. Impulsados por factores dependientes de GTP, los [[ARNt|real-cd-trna]] cargados prueban su anticodón en el sitio A, pasan al sitio P mientras el centro ribozímico del ARNr 28S forma cada enlace peptídico y salen descargados por el sitio E. Varios ribosomas 80S recorren en fila el mismo mensaje como polisoma, extruyendo [[polipéptidos|polypeptide]] por el túnel de diez nanómetros hacia [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]].',
      blueprint:
        'Rol: Ribozima traduccional eucariota de 28–30 nm que decodifica codones de ARNm maduro en [[polipéptidos|polypeptide]] de secuencia exacta · Entradas: [[ARNm|rna]] maduro exportado, aminoacil-[[ARNt|real-cd-trna]], factores GTPasa eEF1A/eEF2 y [[Mg²⁺|atom-mg]] · Interior: Ensamblaje humano 80S (PDB 4UG0, 4,3 MDa; centro decodificador [[40S|ribo-small]] + peptidil transferasa [[60S|ribo-large]] de ARNr 28S, sitios A/P/E y túnel de 10 nm; frente al [[70S|ribosome-70s]] bacteriano PDB 4YBB) · Salida: Cadenas [[polipeptídicas|polypeptide]] entregadas a [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]] en el [[citosol|cytosol]].',
      scientific:
        '[[Ribosoma|ribosome]] citoplasmático humano 80S (~28–30 nm, ~4,3 MDa; crio-EM PDB 4UG0; en contraste con el [[ribosoma 70S|ribosome-70s]] bacteriano de 2,5 MDa PDB 4YBB) formado por la [[subunidad pequeña 40S|ribo-small]] (ARNr 18S + 33 proteínas) y la [[subunidad grande 60S|ribo-large]] (ARNr 28S, 5,8S, 5S + 47 proteínas). El centro decodificador 40S verifica el apareamiento [[codón–anticodón|real-cd-mutation-atom]] en los [[sitios A/P/E|real-cd-trna]], mientras la ribozima del ARNr 28S en 60S cataliza enlaces peptídicos (~5–6 residuos/s) y guía el [[polipéptido|polypeptide]] por un túnel de salida de ~10 nm.'
    }
  },

  'real-cd-trna': {
    en: {
      simple:
        'Transfer RNA ([[tRNA|trna]]) is a folded L-shaped [[RNA|rna]] adaptor that matches a three-base mRNA codon at one tip to the exact [[amino acid|amino-acid]] attached at its opposite end inside the [[80S ribosome|real-cd-ribo80]].',
      story:
        'Because messenger [[RNA|rna]] bases cannot chemically recognize [[amino acid|amino-acid]] side chains on their own, every living cell relies on ~76-nucleotide L-shaped [[tRNA|trna]] adaptors to bridge the two languages. In the [[cytosol|cytosol]], dedicated aminoacyl-tRNA synthetases burn [[ATP|atp-synthase]] to esterify each amino acid onto its matching tRNA\'s 3\' CCA stem, while GTP-bound elongation factor ferries the charged adaptor into the A site of the [[80S ribosome|real-cd-ribo80]]. Only when all three anticodon bases form proper [[hydrogen bonds|real-cd-mutation-atom]] with the mRNA codon does GTP hydrolysis lock delivery and pass the amino acid into the growing chain.',
      blueprint:
        'Role: 7 nm L-shaped bilingual nucleic-acid adaptor executing the 64-codon genetic code inside the ribosome; Inputs: Uncharged ~76 nt [[tRNA|trna]], cognate [[amino acids|amino-acid]], [[ATP|atp-synthase]] (synthetase charging), and eEF1A/EF-Tu-GTP ternary delivery; Inside: Tertiary L-fold (PDB 1EHZ; EF-Tu ternary complex PDB 1TTT) separating the 3-base anticodon loop by ~7.5 nm from the aminoacylated 3\' CCA acceptor stem; Outputs: Cognate [[amino acid|amino-acid]] transfer across [[80S ribosome|real-cd-ribo80]] A -> P -> E sites to extend the [[polypeptide|polypeptide]].',
      scientific:
        'L-shaped tertiary [[transfer RNA|trna]] (~76 nt, ~7 x 6 x 2 nm; yeast tRNA-Phe crystal structure PDB 1EHZ; delivered in ternary complex analogous to bacterial EF-Tu-GTP-tRNA PDB 1TTT) stabilized by D-loop/T-loop tertiary H-bonds and coordinated [[Mg2+|atom-mg]] ions. Specific aminoacyl-tRNA synthetases couple each [[amino acid|amino-acid]] via a high-energy ester bond to the 3\' CCA adenosine ribose [[sugar|sugar]]. Inside the [[80S|real-cd-ribo80]] (or [[70S|ribosome-70s]]) A site, 18S/16S rRNA monitoring bases inspect minor-groove geometry of the first two [[codon-anticodon|real-cd-mutation-atom]] pairs while permitting third-position wobble pairing.'
    },
    es: {
      simple:
        'El ARN de transferencia ([[ARNt|trna]]) es un adaptador de [[ARN|rna]] plegado en forma de L que enlaza un codón de tres bases en un extremo con el [[aminoácido|amino-acid]] exacto unido a su punta opuesta dentro del [[ribosoma 80S|real-cd-ribo80]].',
      story:
        'Como las bases del [[ARN|rna]] mensajero no reconocen directamente las cadenas laterales de los [[aminoácidos|amino-acid]], toda célula usa adaptadores de [[ARNt|trna]] de ~76 nucleótidos plegados en L para conectar ambos lenguajes. En el [[citosol|cytosol]], las aminoacil-ARNt sintetasas consumen [[ATP|atp-synthase]] para esterificar cada aminoácido al tallo 3\' CCA correspondiente, mientras un factor de elongación con GTP lleva el adaptador al sitio A del [[ribosoma 80S|real-cd-ribo80]]. Solo cuando las tres bases del anticodón forman [[enlaces de hidrógeno|real-cd-mutation-atom]] válidos con el codón se hidroliza GTP y se transfiere el aminoácido.',
      blueprint:
        'Rol: Adaptador bilingüe de ácido nucleico en L (7 nm) que ejecuta el código genético de 64 codones dentro del ribosoma · Entradas: [[ARNt|trna]] libre de ~76 nt, [[aminoácidos|amino-acid]] cognados, [[ATP|atp-synthase]] (carga por sintetasa) y complejo ternario eEF1A/EF-Tu–GTP · Interior: Pliegue terciario en L (PDB 1EHZ; complejo ternario PDB 1TTT) que separa ~7,5 nm el anticodón del tallo aceptor 3\' CCA · Salida: Entrega fiel de [[aminoácidos|amino-acid]] por los sitios A→P→E del [[ribosoma 80S|real-cd-ribo80]] hacia el [[polipéptido|polypeptide]].',
      scientific:
        '[[ARN de transferencia|trna]] en L terciaria (~76 nt, ~7 × 6 × 2 nm; estructura cristalina tRNA-Phe PDB 1EHZ; entrega ternaria análoga a EF-Tu–GTP–ARNt bacteriano PDB 1TTT) estabilizado por apareamientos terciarios D/T e iones [[Mg²⁺|atom-mg]]. Las aminoacil-ARNt sintetasas unen cada [[aminoácido|amino-acid]] mediante un enlace éster rico en energía al [[azúcar|sugar]] ribosa del extremo 3\' CCA. En el sitio A del [[80S|real-cd-ribo80]] (o [[70S|ribosome-70s]]), bases sensoras del ARNr 18S/16S verifican la geometría [[codón–anticodón|real-cd-mutation-atom]] en posiciones 1–2 admitiendo balanceo en la tercera.'
    }
  },

  'real-cd-tric': {
    en: {
      simple:
        'TRiC (CCT) is a barrel-shaped eukaryotic chaperonin [[protein|protein]] complex that traps unfolded [[polypeptide|polypeptide]] chains inside an ATP-gated chamber so they fold cleanly into their working 3D shapes without clumping.',
      story:
        'Even after [[Hsp70|real-cd-hsp70]] shields an emerging chain from sticking to neighbors in the crowded [[cytosol|cytosol]], large multidomain proteins often get stuck in misfolded traps. Eukaryotic TRiC (and its bacterial cousin GroEL/GroES inside [[E. coli|real-bacterium]]) solves this by offering an isolated folding chamber. Hydrophobic rims around the open 16-nanometer barrel capture the non-native [[polypeptide|polypeptide]]; [[ATP|atp-synthase]] binding then closes TRiC\'s built-in iris lid and switches the inner wall to a hydrophilic surface, forcing hydrophobic residues inward into native [[alpha-helices|alpha-helix]] and [[beta-sheets|beta-sheet]] before ATP hydrolysis pops the finished [[protein|protein]] free.',
      blueprint:
        'Role: 15-16 nm ATP-driven double-ring folding barrel isolating difficult eukaryotic substrates from cytosolic aggregation; Inputs: Partially folded [[polypeptide|polypeptide]] intermediates handed off by [[Hsp70|real-cd-hsp70]], cytosolic [[ATP|atp-synthase]], and [[Mg2+|atom-mg]]; Inside: Hexadecameric TRiC/CCT barrel (PDB 6NR8, two 8-subunit heteromeric rings with built-in iris lids; vs. prokaryotic GroEL/GroES PDB 1AON); Outputs: Correctly folded tertiary and quaternary [[proteins|protein]] released into the [[cytosol|cytosol]].',
      scientific:
        'Group II eukaryotic cytosolic chaperonin TRiC/CCT (~15 x 16 nm, ~1 MDa double-ring hexadecamer of eight paralogous CCT1-CCT8 subunits per ring; cryo-EM PDB 6NR8; structurally compared with Group I bacterial GroEL-GroES PDB 1AON). Unlike GroEL\'s detachable GroES cap, TRiC uses integral apical helical protrusions that close an iris-like lid upon [[Mg2+|atom-mg]]-ATP binding and hydrolysis, encapsulating ~50-70 kDa [[polypeptide|polypeptide]] clients inside a negatively charged hydrophilic cavity that accelerates native [[alpha-helix|alpha-helix]]/[[beta-sheet|beta-sheet]] collapse for obligate substrates such as actin, tubulin, and WD40 folds.'
    },
    es: {
      simple:
        'TRiC (CCT) es una chaperonina eucariota en forma de barril que encierra cadenas [[polipeptídicas|polypeptide]] sin plegar dentro de una cámara controlada por ATP para que alcancen su forma 3D funcional sin agregarse.',
      story:
        'Incluso cuando [[Hsp70|real-cd-hsp70]] protege una cadena naciente en el denso [[citosol|cytosol]], muchas proteínas complejas quedan atrapadas en pliegues erróneos. La chaperonina eucariota TRiC (y su pariente bacteriana GroEL/GroES en [[E. coli|real-bacterium]]) ofrece una cámara privada de plegamiento. Los bordes hidrofóbicos del barril de 16 nanómetros capturan el [[polipéptido|polypeptide]] inmaduro; la unión de [[ATP|atp-synthase]] cierra su tapa interna en iris y vuelve hidrofílica la pared interior, empujando residuos apolares hacia el núcleo de [[hélices alfa|alpha-helix]] y [[láminas beta|beta-sheet]] antes de liberar la [[proteína|protein]] nativa.',
      blueprint:
        'Rol: Barril chaperonina de doble anillo (15–16 nm) impulsado por ATP que aísla sustratos difíciles frente a la agregación citosólica · Entradas: Intermedios [[polipeptídicos|polypeptide]] entregados por [[Hsp70|real-cd-hsp70]], [[ATP|atp-synthase]] y [[Mg²⁺|atom-mg]] · Interior: Hexadecámero TRiC/CCT (PDB 6NR8, dos anillos de 8 subunidades con tapa iris integrada; frente a GroEL/GroES PDB 1AON) · Salida: [[Proteínas|protein]] con estructura terciaria y cuaternaria funcional liberadas al [[citosol|cytosol]].',
      scientific:
        'Chaperonina citosólica eucariota del grupo II TRiC/CCT (~15 × 16 nm, hexadecámero de ~1 MDa con ocho subunidades parálogas CCT1–CCT8 por anillo; crio-EM PDB 6NR8; comparada con GroEL–GroES bacteriana del grupo I PDB 1AON). A diferencia de la tapa móvil GroES, TRiC cierra protuberancias helicoidales apicales en iris tras la unión e hidrólisis de [[Mg²⁺|atom-mg]]–ATP, encapsulando [[polipéptidos|polypeptide]] de ~50–70 kDa en una cavidad hidrofílica cargada que acelera el plegamiento de [[hélices alfa|alpha-helix]] y [[láminas beta|beta-sheet]].'
    }
  },

  'real-cd-hsp70': {
    en: {
      simple:
        'Hsp70 is a front-line cytosolic chaperone [[protein|protein]] that grabs sticky hydrophobic stretches on newly made [[polypeptides|polypeptide]] as they exit the [[80S ribosome|real-cd-ribo80]], preventing dangerous clumping.',
      story:
        'A nascent [[polypeptide|polypeptide]] emerges from the [[80S ribosome|real-cd-ribo80]] exit tunnel slowly, exposing water-repelling hydrophobic [[amino acids|amino-acid]] long before the rest of the domain exists to bury them. Left unguarded in the crowded [[cytosol|cytosol]], those patches would glue neighboring chains into toxic aggregates. Hsp70 intercepts them immediately: an open ATP-bound cleft snaps shut with a helical lid the moment a J-domain co-chaperone triggers [[ATP|atp-synthase]] hydrolysis, holding the segment safely until nucleotide exchange releases it to fold spontaneously or enter the [[TRiC|real-cd-tric]] chamber.',
      blueprint:
        'Role: 8 nm ATP-regulated co-translational chaperone shielding exposed hydrophobic peptide segments from misfolding; Inputs: Nascent [[polypeptide|polypeptide]] exiting the [[80S ribosome|real-cd-ribo80]], J-domain (Hsp40) co-chaperones, [[ATP|atp-synthase]], and [[Mg2+|atom-mg]]; Inside: 70 kDa two-domain cycle (PDB 2KHO) coupling an N-terminal ATPase domain to a C-terminal [[beta-sheet|beta-sheet]] peptide cleft and [[alpha-helix|alpha-helix]] lid; Outputs: Protected, aggregation-free folding intermediates folded directly or handed to [[TRiC|real-cd-tric]].',
      scientific:
        'Conserved ~70 kDa (~8 nm) ATP-dependent molecular chaperone Hsp70 (DnaK/Hsp70 allosteric structure PDB 2KHO) combining an N-terminal actin-fold nucleotide-binding domain (NBD) and a C-terminal substrate-binding domain (SBD) built from a [[beta-sheet|beta-sheet]] peptide groove capped by an [[alpha-helix|alpha-helix]] lid. In the ATP-bound state the lid stays open for rapid substrate exchange; Hsp40/J-domain co-chaperones stimulate [[Mg2+|atom-mg]]-ATP hydrolysis to clamp exposed 5-7 residue hydrophobic motifs on nascent [[polypeptides|polypeptide]] from [[80S|real-cd-ribo80]] or [[70S|ribosome-70s]] ribosomes until nucleotide-exchange factors reset release.'
    },
    es: {
      simple:
        'Hsp70 es una [[proteína|protein]] chaperona citosólica de primera línea que sujeta tramos hidrofóbicos pegajosos en los [[polipéptidos|polypeptide]] recién salidos del [[ribosoma 80S|real-cd-ribo80]] para impedir que se aglutinen.',
      story:
        'Un [[polipéptido|polypeptide]] naciente emerge lentamente del túnel del [[ribosoma 80S|real-cd-ribo80]] exponiendo [[aminoácidos|amino-acid]] hidrofóbicos mucho antes de que exista el resto del dominio para ocultarlos. Sin protección en el denso [[citosol|cytosol]], esos parches pegarían unas cadenas con otras formando agregados tóxicos. Hsp70 los intercepta al instante: su pinza abierta con ATP cierra una tapa helicoidal cuando una cochaperona con dominio J dispara la hidrólisis de [[ATP|atp-synthase]], resguardando la cadena hasta liberarla para plegarse sola o pasar a la cámara [[TRiC|real-cd-tric]].',
      blueprint:
        'Rol: Chaperona cotraduccional de 8 nm regulada por ATP que protege segmentos peptídicos hidrofóbicos frente al mal plegamiento · Entradas: [[Polipéptido|polypeptide]] naciente desde el [[ribosoma 80S|real-cd-ribo80]], cochaperonas J (Hsp40), [[ATP|atp-synthase]] y [[Mg²⁺|atom-mg]] · Interior: Ciclo alostérico de 70 kDa (PDB 2KHO) entre dominio ATPasa N-terminal, hendidura peptídica en [[lámina beta|beta-sheet]] y tapa en [[hélice alfa|alpha-helix]] · Salida: Intermedios protegidos que se pliegan solos o pasan a [[TRiC|real-cd-tric]].',
      scientific:
        'Chaperona molecular conservada de ~70 kDa (~8 nm) dependiente de ATP Hsp70 (estructura alostérica DnaK/Hsp70 PDB 2KHO), integrada por un dominio N-terminal de unión a nucleótidos (NBD) y un dominio C-terminal de sustrato (SBD) con surco en [[lámina beta|beta-sheet]] y tapa en [[hélice alfa|alpha-helix]]. Con ATP la tapa permanece abierta; las cochaperonas Hsp40/J inducen la hidrólisis de [[Mg²⁺|atom-mg]]–ATP cerrando la pinza sobre motivos hidrofóbicos de 5–7 residuos en [[polipéptidos|polypeptide]] salientes de ribosomas [[80S|real-cd-ribo80]] o [[70S|ribosome-70s]] hasta el recambio nucleotídico.'
    }
  },

  'real-cd-hbs': {
    en: {
      simple:
        'Sickle-cell hemoglobin (HbS) arises from a single [[DNA|dna]] letter swap in the beta-globin gene that puts a water-repelling valine on the [[protein|protein]] surface, stacking hemoglobin molecules into stiff fibers under low oxygen.',
      story:
        'Human hemoglobin carries oxygen inside red blood cells on four [[iron|atom-fe]]-centered heme groups, staying completely soluble because negatively charged glutamate sits at beta-globin position 6. Flipping one [[A to T base|real-cd-mutation-atom]] changes codon 6 from GAG to GTG, inserting nonpolar valine instead. When deoxygenated in narrow capillaries, that exposed valine docks into a hydrophobic pocket on a neighboring hemoglobin tetramer, zipping thousands of tetramers into rigid fourteen-strand fibers that sickle the cell. While two copies (HbS/HbS) cause painful vaso-occlusion, one copy (HbA/HbS) confers strong protection against severe [[Plasmodium|real-plasmodium]] malaria, maintaining the allele through balancing selection.',
      blueprint:
        'Role: Classic human molecular-evolution case linking one single-base missense mutation to quaternary fiber polymerization and balancing selection; Inputs: Single A -> T transversion at *HBB* codon 6 (GAG -> GTG; mRNA GUG) traced from [[DNA|dna]] through [[80S translation|real-cd-ribo80]]; Inside: Hydrophilic Glu6 (wild-type HbA PDB 2HHB) replaced by hydrophobic Val6 docking into adjacent beta-chain Phe85/Leu88 pockets (HbS PDB 2HBS); Outputs: Rigid deoxy-HbS fibers causing HbS/HbS sickle pathology alongside heterozygous HbA/HbS resistance to [[Plasmodium|real-plasmodium]] malaria.',
      scientific:
        'Human beta-globin (*HBB*, chromosome 11, 146 aa) missense variant HbS (rs334; coding strand GAG -> GTG, mRNA GUG; Glu6Val; wild-type deoxy-HbA PDB 2HHB vs. polymerized deoxy-HbS PDB 2HBS, alpha2-beta2 tetramer ~64.5 kDa with four heme [[Fe2+|atom-fe]] groups). Substitution of polar anionic glutamate (-COO-) with hydrophobic valine creates a lateral contact docking into the complementary Phe85/Leu88 pocket on an adjacent T-state beta-subunit, nucleating 14-strand ~21 nm helical fibers. Heterozygote advantage (HbA/HbS) against severe [[Plasmodium falciparum|real-plasmodium]] malaria sustains high allele frequency in endemic regions via balancing selection.'
    },
    es: {
      simple:
        'La hemoglobina falciforme (HbS) nace de cambiar una sola letra del [[ADN|dna]] en el gen de la beta-globina, colocando una valina apolar en la superficie de la [[proteína|protein]] que apila las moléculas en fibras rígidas con poco oxígeno.',
      story:
        'La hemoglobina humana transporta oxígeno en los glóbulos rojos sobre cuatro grupos hemo con [[hierro|atom-fe]] y permanece soluble gracias a un glutamato con carga negativa en la posición 6 de la cadena beta. Cambiar una sola [[base A por T|real-cd-mutation-atom]] transforma el codón 6 de GAG en GTG y coloca valina hidrofóbica en su lugar. Al soltar oxígeno en los capilares, esa valina encaja en un bolsillo hidrofóbico de un tetrámero vecino y ensambla fibras rígidas de catorce hebras que deforman el eritrocito. Aunque dos copias (HbS/HbS) obstruyen vasos, una copia (HbA/HbS) protege frente a la malaria grave por [[Plasmodium|real-plasmodium]], sosteniendo el alelo por selección equilibradora.',
      blueprint:
        'Rol: Caso clásico de evolución molecular humana que une una mutación puntual sin sentido con polimerización fibrilar y selección equilibradora · Entradas: Transversión única A→T en el codón 6 de HBB (GAG→GTG; ARNm GUG) desde el [[ADN|dna]] hasta la [[traducción 80S|real-cd-ribo80]] · Interior: Glutamato Glu6 hidrofílico (HbA nativa PDB 2HHB) sustituido por Val6 hidrofóbica acoplada al bolsillo Phe85/Leu88 vecino (HbS PDB 2HBS) · Salida: Fibras rígidas desoxi-HbS con patología en HbS/HbS y resistencia heterocigota HbA/HbS ante [[Plasmodium|real-plasmodium]].',
      scientific:
        'Variante de sentido erróneo HbS de la beta-globina humana (gen HBB, cromosoma 11, 146 aa; rs334; hebra codificante GAG→GTG, ARNm GUG; Glu6Val; desoxi-HbA nativa PDB 2HHB frente a desoxi-HbS PDB 2HBS, tetrámero α₂β₂ de ~64,5 kDa con cuatro grupos hemo de [[Fe²⁺|atom-fe]]). El cambio de glutamato aniónico polar por valina hidrofóbica crea un parche lateral que encaja en la cavidad Phe85/Leu88 de una subunidad β adyacente en estado T, nucleando fibras helicoidales de 14 hebras (~21 nm). La ventaja heterocigota (HbA/HbS) frente a [[Plasmodium falciparum|real-plasmodium]] mantiene el alelo por selección equilibradora.'
    }
  },

  'real-cd-acrb': {
    en: {
      simple:
        'AcrB is a drug-pumping [[protein|protein]] in [[E. coli|real-bacterium]] whose internal binding pocket can be reshaped by a single [[DNA|dna]] base change, letting resistant bacteria expel antibiotics faster and outgrow wild-type cells.',
      story:
        'Not every point mutation harms its carrier: whether a base change helps or hurts depends on the environment. Inside the inner membrane of [[E. coli|real-bacterium]], the trimeric AcrB pump uses proton flow to capture toxic drugs in a hydrophobic distal binding pocket and push them out through the TolC exit duct. A single [[G-to-A base transition|real-cd-mutation-atom]] converts codon 288 from GGC to GAC, swapping tiny glycine for charged aspartate right inside that cavity. Under fluoroquinolone treatment, the remodeled pocket alters drug orientation and increases efflux throughput, allowing mutant cells to survive and sweep the population through directional natural selection.',
      blueprint:
        'Role: Adaptive bacterial multidrug efflux pocket proving how a single nucleotide substitution confers selectable antibiotic resistance; Inputs: Single G -> A transition in *E. coli* *acrB* codon 288 (GGC -> GAC; Gly288Asp) translated on bacterial [[70S ribosomes|ribosome-70s]]; Inside: Trimeric RND proton-antiporter AcrB distal binding pocket (PDB 5O66) cycling through Loose, Tight, and Open drug-extrusion states; Outputs: Remodeled pocket polarity and faster fluoroquinolone export driving rapid directional selection across [[bacterial|real-bacterium]] populations.',
      scientific:
        'Prokaryotic RND-family multidrug efflux transporter AcrB from the [[E. coli|real-bacterium]] AcrAB-TolC tripartite pump (asymmetric functional trimer cryo-EM/crystal structure PDB 5O66; driven by inner-membrane proton-motive force). A single G -> A transition at codon 288 (GGC -> GAC) substitutes minimal Gly288 with polar anionic Asp288 along the phenylalanine-rich distal binding pocket, altering cavity width, hydration, and hydrogen-bonding contacts with fluoroquinolone substrates. Under lethal antibiotic pressure, enhanced drug extrusion raises mutant survival rate, driving rapid allele fixation via directional natural selection.'
    },
    es: {
      simple:
        'AcrB es una [[proteína|protein]] expulsora de fármacos en [[E. coli|real-bacterium]] cuyo bolsillo interno cambia con una sola letra del [[ADN|dna]], permitiendo que las bacterias mutantes bombeen antibióticos más rápido y sobrevivan.',
      story:
        'No toda mutación puntual perjudica al organismo: su valor depende del ambiente. En la membrana interna de [[E. coli|real-bacterium]], la bomba trimérica AcrB aprovecha el flujo de protones para atrapar moléculas tóxicas en su bolsillo distal y expulsarlas por el conducto TolC. Una sola [[transición G a A|real-cd-mutation-atom]] cambia el codón 288 de GGC a GAC, reemplazando la pequeña glicina por aspartato polar justo dentro de esa cavidad. Bajo presión de fluoroquinolonas, el bolsillo remodelado optimiza la expulsión del fármaco y permite que las células mutantes dominen la población por selección natural direccional.',
      blueprint:
        'Rol: Bolsillo bacteriano adaptativo de eflujo multifármaco que demuestra cómo una sola sustitución nucleotídica genera resistencia seleccionable · Entradas: Transición G→A en el codón 288 de acrB en E. coli (GGC→GAC; Gly288Asp) traducida en [[ribosomas 70S|ribosome-70s]] · Interior: Bolsillo distal del antiportador trimérico RND AcrB (PDB 5O66) alternando estados suelto, cerrado y abierto · Salida: Polaridad remodelada y mayor expulsión de fluoroquinolonas que impulsan selección direccional en [[bacterias|real-bacterium]].',
      scientific:
        'Transportador bacteriano de eflujo multifármaco de la familia RND AcrB perteneciente al complejo tripartito AcrAB–TolC de [[E. coli|real-bacterium]] (trímero funcional asimétrico PDB 5O66 impulsado por fuerza protón-motriz). Una única transición G→A en el codón 288 (GGC→GAC) reemplaza Gly288 por el residuo polar aniónico Asp288 en el bolsillo distal rico en fenilalaninas, modificando el volumen de cavidad y la red de puentes de hidrógeno con fluoroquinolonas. Bajo presión antibiótica, el aumento de eflujo acelera la fijación alélica por selección natural direccional.'
    }
  },

  'real-cd-mutation-atom': {
    en: {
      simple:
        'At atomic scale, a point mutation swaps just one [[nucleotide|nucleotide]] [[base|base]] inside a three-letter codon, rearranging individual hydrogen bonds and changing which [[amino acid|amino-acid]] gets built into a [[protein|protein]].',
      story:
        'Zooming down to half a nanometer removes all mystery from molecular evolution. Across a 1.08-nanometer Watson-Crick base pair, exact rings of [[carbon|atom-c]], [[nitrogen|atom-n]], [[oxygen|atom-o]], and [[hydrogen|atom-h]] present donor and acceptor faces that hold two strands or a codon-anticodon triplet together with 0.29-nanometer hydrogen bonds. When a rare replication slip past [[DNA Pol delta|real-cd-pol-delta]] replaces adenine with thymine in GAG -> GTG or guanine with adenine in GGC -> GAC, that single atomic pattern shift changes the [[tRNA|real-cd-trna]] that fits the [[ribosome|real-cd-ribo80]], propagating upward into [[HbS fibers|real-cd-hbs]] or resistant [[AcrB pumps|real-cd-acrb]].',
      blueprint:
        'Role: 0.1-1.0 nm atomic causal bridge linking single-base hydrogen-bond geometry to codon identity, protein folding, and selection; Inputs: Sugar-[[phosphate|phosphate]] backbone ([[C|atom-c]], [[O|atom-o]], [[P|atom-p]]), purine/pyrimidine [[bases|base]] ([[N|atom-n]], [[H|atom-h]]), and catalytic [[Mg2+|atom-mg]]; Inside: 1.08 nm Watson-Crick base pairs (A=T/A=U two H-bonds, G=C three H-bonds at 0.28-0.30 nm) flipped by GAG -> GTG (A -> T) or GGC -> GAC (G -> A); Outputs: Altered [[tRNA|real-cd-trna]] triplet recognition rewriting [[amino-acid|amino-acid]] identity in [[HbS|real-cd-hbs]] or [[AcrB|real-cd-acrb]].',
      scientific:
        'Sub-nanometer atomic resolution (0.1-1.0 nm) of nucleic-acid [[base|base]] pairing and single-nucleotide substitutions across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], catalytic [[Mg2+|atom-mg]], and sulfur ([[S|atom-s]] in Met/Cys). Standard Watson-Crick C1\'-C1\' span (~1.08 nm) aligns donor-acceptor hydrogen bonds (~0.28-0.30 nm; 2 for A=T/A=U, 3 for G=C) inspected by [[DNA Pol delta|real-cd-pol-delta]] and the [[80S ribosome|real-cd-ribo80]] decoding center. A single A -> T transversion (GAG -> GTG, Glu6Val in [[HbS|real-cd-hbs]]) or G -> A transition (GGC -> GAC, Gly288Asp in [[AcrB|real-cd-acrb]]) reassigns the [[tRNA|real-cd-trna]] anticodon match and reshapes 3D [[protein|protein]] structure.'
    },
    es: {
      simple:
        'A escala atómica, una mutación puntual cambia una sola [[base|base]] de un [[nucleótido|nucleotide]] dentro de un codón de tres letras, reorganizando sus enlaces de hidrógeno y cambiando el [[aminoácido|amino-acid]] que entra en la [[proteína|protein]].',
      story:
        'Acercarse a medio nanómetro aclara por completo el origen físico de la evolución molecular. En un par de bases de Watson y Crick de 1,08 nanómetros, anillos precisos de [[carbono|atom-c]], [[nitrógeno|atom-n]], [[oxígeno|atom-o]] e [[hidrógeno|atom-h]] enfrentan donadores y aceptores unidos por puentes de hidrógeno de 0,29 nanómetros. Cuando un fallo ocasional supera a la [[ADN Pol δ|real-cd-pol-delta]] y cambia adenina por timina en GAG→GTG o guanina por adenina en GGC→GAC, ese único giro atómico altera el [[ARNt|real-cd-trna]] aceptado por el [[ribosoma|real-cd-ribo80]], proyectándose hasta [[fibras HbS|real-cd-hbs]] o bombas [[AcrB|real-cd-acrb]] resistentes.',
      blueprint:
        'Rol: Puente causal atómico (0,1–1,0 nm) que conecta la geometría de enlaces de hidrógeno con el codón, el plegamiento y la selección · Entradas: Esqueleto [[azúcar|sugar]]–[[fosfato|phosphate]] ([[C|atom-c]], [[O|atom-o]], [[P|atom-p]]), [[bases|base]] purinas/pirimidinas ([[N|atom-n]], [[H|atom-h]]) y [[Mg²⁺|atom-mg]] · Interior: Pares Watson–Crick de 1,08 nm (A=T/A=U con 2 enlaces H, G≡C con 3 a 0,28–0,30 nm) alterados en GAG→GTG (A→T) o GGC→GAC (G→A) · Salida: Reconocimiento distinto del anticodón de [[ARNt|real-cd-trna]] que reescribe el [[aminoácido|amino-acid]] en [[HbS|real-cd-hbs]] o [[AcrB|real-cd-acrb]].',
      scientific:
        'Resolución atómica subnanométrica (0,1–1,0 nm) del apareamiento de [[bases|base]] y sustituciones puntuales en [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[Mg²⁺|atom-mg]] catalítico y [[S|atom-s]] de Met/Cys. La distancia C1\'–C1\' de Watson–Crick (~1,08 nm) alinea puentes de hidrógeno de ~0,28–0,30 nm (2 en A=T/A=U, 3 en G≡C) verificados por [[ADN Pol δ|real-cd-pol-delta]] y el [[ribosoma 80S|real-cd-ribo80]]. Una única transversión A→T (GAG→GTG, Glu6Val en [[HbS|real-cd-hbs]]) o transición G→A (GGC→GAC, Gly288Asp en [[AcrB|real-cd-acrb]]) redirige el [[ARNt|real-cd-trna]] y transforma la [[proteína|protein]] 3D.'
    }
  }
};

export const CENTRAL_DOGMA_PART_LENSES: Record<string, Record<string, BilingualPartLens>> = {
  'central_dogma_realistic.html': {
    chromatin: {
      en: {
        subtitle: 'Open Euchromatin Gene Locus (HBB, PDB 1KX5)',
        simple:
          'This loose strand of euchromatin wraps nuclear [[DNA|dna]] around cylindrical [[histone|histone]] cores in open [[nucleosomes|nucleosome]] so replication and transcription enzymes can reach the beta-globin gene directly.',
        story:
          'Inside the five-micrometer [[nucleus|nucleus]], genomic [[DNA|dna]] is not naked thread floating loose; it wraps roughly 1.65 turns around eight-protein [[histone|histone]] octamers to form 11-nanometer [[nucleosome|nucleosome]] beads. At active gene loci such as human beta-globin (*HBB*), acetylation loosens histone tails so chromatin remodeling complexes slide nucleosomes aside. That accessible euchromatin posture hands unobstructed template strands straight to the [[replisome|real-cd-replisome]] during S-phase and to [[RNA Polymerase II|rna-polymerase]] during transcription.',
        blueprint: {
          role: 'Transcriptionally active 11 nm euchromatin fiber exposing the three-exon, two-intron human HBB gene locus',
          arrivesFrom: 'Nuclear [[chromosome|chromosome]] domains decondensed by histone acetylation and ATP-dependent chromatin remodelers',
          inside: '147 bp [[dsDNA|dna]] segments wrapped around H2A/H2B/H3/H4 [[histone|histone]] octamers ([[nucleosome|nucleosome]] PDB 1KX5) separated by linker DNA',
          deliversTo: 'Accessible parental template strands for [[helicase|real-cd-replisome]] unwinding and [[RNA Pol II|rna-polymerase]] initiation',
          loop: 'Histone marks dynamically toggle loci between open euchromatin for active expression and compact heterochromatin for silencing'
        },
        scientific:
          'Active nuclear euchromatin (~11 nm beads-on-a-string [[chromatin fiber|chromatin-fiber]]; [[nucleosome|nucleosome]] core particle PDB 1KX5 wrapping 147 bp of B-form [[dsDNA|dna]] in 1.65 left-handed superhelical turns around an H2A-H2B-H3-H4 [[histone|histone]] octamer). Histone acetyltransferases neutralize lysine tail charges and SWI/SNF remodelers displace nucleosomes at the human *HBB* locus (chromosome 11p15.4; 3 exons, 2 introns, 146 aa mature coding sequence), licensing access to the [[replisome|real-cd-replisome]] and [[RNA Pol II|rna-polymerase]].',
        from: [
          { nodeId: 'nucleus', label: 'Cell Nucleus', cargo: 'Protected eukaryotic genome vault' },
          { nodeId: 'nucleosome', label: 'Nucleosome Spools', cargo: '147 bp DNA on histone octamers' }
        ],
        to: [
          { nodeId: 'real-cd-replisome', label: 'Replication Fork', cargo: 'Unwrapped parental dsDNA' },
          { nodeId: 'rna-polymerase', label: 'RNA Pol II Initiation', cargo: 'Open HBB promoter template' }
        ]
      },
      es: {
        subtitle: 'Locus génico en eucromatina abierta (HBB, PDB 1KX5)',
        simple:
          'Esta hebra abierta de eucromatina enrolla el [[ADN|dna]] nuclear sobre carretes de [[histonas|histone]] formando [[nucleosomas|nucleosome]] accesibles para que las enzimas de replicación y transcripción lean el gen de la beta-globina.',
        story:
          'Dentro del [[núcleo|nucleus]], el [[ADN|dna]] genómico no flota desnudo sino que da unas 1,65 vueltas sobre octámeros de [[histonas|histone]] formando [[nucleosomas|nucleosome]] de 11 nanómetros. En genes activos como el de la beta-globina humana (HBB), la acetilación afloja las colas de histona para que complejos remodeladores deslicen los nucleosomas a un lado. Esa conformación abierta en eucromatina entrega moldes despejados tanto al [[replisoma|real-cd-replisome]] en la fase S como a la [[ARN polimerasa II|rna-polymerase]] durante la transcripción.',
        blueprint: {
          role: 'Fibra activa de eucromatina de 11 nm que expone el locus humano HBB de tres exones y dos intrones',
          arrivesFrom: 'Dominios del [[cromosoma|chromosome]] nuclear descondensados por acetilación de histonas y remodeladores dependientes de ATP',
          inside: 'Tramos de 147 pb de [[ADNbc|dna]] enrollados sobre octámeros de [[histonas|histone]] H2A/H2B/H3/H4 ([[nucleosoma|nucleosome]] PDB 1KX5) con ADN espaciador',
          deliversTo: 'Hebras molde accesibles para el desenrollado de la [[helicasa|real-cd-replisome]] y el inicio de la [[ARN Pol II|rna-polymerase]]',
          loop: 'Las marcas epigenéticas alternan cada gen entre eucromatina abierta activa y heterocromatina compacta silenciada'
        },
        scientific:
          'Eucromatina nuclear transcripcionalmente activa ([[fibra de cromatina|chromatin-fiber]] de ~11 nm; [[nucleosoma|nucleosome]] PDB 1KX5 con 147 pb de [[ADNbc|dna]] B en 1,65 vueltas levógiras sobre un octámero de [[histonas|histone]] H2A–H2B–H3–H4). La acetilación de lisinas y los complejos SWI/SNF despejan el locus humano HBB (cromosoma 11p15.4; 3 exones, 2 intrones, 146 aa codificantes) permitiendo la entrada del [[replisoma|real-cd-replisome]] y la [[ARN Pol II|rna-polymerase]].',
        from: [
          { nodeId: 'nucleus', label: 'Núcleo celular', cargo: 'Compartimento del genoma eucariota' },
          { nodeId: 'nucleosome', label: 'Carretes nucleosomales', cargo: '147 pb de ADN sobre histonas' }
        ],
        to: [
          { nodeId: 'real-cd-replisome', label: 'Horquilla de replicación', cargo: 'ADNbc parental despejado' },
          { nodeId: 'rna-polymerase', label: 'Inicio de ARN Pol II', cargo: 'Promotor HBB accesible' }
        ]
      }
    },

    helicase: {
      en: {
        subtitle: 'Replicative Ring Helicase (MCM2-7 / DnaB, PDB 6QEL)',
        simple:
          'This six-subunit ring [[protein|protein]] encircles one [[DNA|dna]] strand and uses [[ATP|atp-synthase]] energy to unzip the double helix ahead of the copying polymerases.',
        story:
          'To duplicate a genome before [[cell division|real-cell-division]], cells must break millions of Watson-Crick hydrogen bonds holding double-stranded [[DNA|dna]] together. Loaded at replication origins, the hexameric ring helicase (eukaryotic MCM2-7 inside the CMG complex, modeled alongside bacterial DnaB) threads one template strand through its central channel and excludes the other. Sequential [[ATP|atp-synthase]] hydrolysis around the six subunits drives a spiral staircase of DNA-gripping hairpins forward, splitting the parental duplex cleanly into exposed templates stabilized by RPA/SSB for [[DNA Pol delta|real-cd-pol-delta]].',
        blueprint: {
          role: '13 nm hexameric ATPase motor ring unwinding parental dsDNA at the leading vertex of the replication fork',
          arrivesFrom: 'Origin-licensed MCM2-7 helicase rings (bacterial analog DnaB PDB 6QEL) fueled by nuclear [[ATP|atp-synthase]] + [[Mg2+|atom-mg]]',
          inside: 'Six-subunit central pore encircling one template strand while sterically wedging the complementary [[DNA|dna]] strand outward',
          deliversTo: 'Separated leading and lagging single-stranded templates coated by RPA/SSB to [[DNA Pol delta|real-cd-pol-delta]] and Pol epsilon',
          loop: 'Helicase translocation stays physically coupled to polymerase progress so exposed single-stranded DNA never accumulates dangerously'
        },
        scientific:
          'Hexameric replicative DNA helicase (~13 nm outer ring diameter; bacterial DnaB crystal structure PDB 6QEL paired conceptually with eukaryotic Cdc45-MCM2-7-GINS complex in the [[replisome|real-cd-replisome]]). Driven by sequential [[Mg2+|atom-mg]]-ATP hydrolysis across six RecA/AAA+ motor subunits, internal beta-hairpin loops translocate sterically along one [[DNA|dna]] backbone (3\' -> 5\' for eukaryotic MCM2-7; 5\' -> 3\' for bacterial DnaB), rupturing [[base-pair|real-cd-mutation-atom]] hydrogen bonds at the fork junction ahead of [[DNA Pol delta|real-cd-pol-delta]].',
        from: [
          { nodeId: 'dna', label: 'Parental dsDNA', cargo: 'Base-paired double helix' },
          { nodeId: 'atp-synthase', label: 'Cellular ATP Supply', cargo: 'Strand-unwinding hydrolysis' }
        ],
        to: [
          { nodeId: 'real-cd-replisome', label: 'Replisome Fork Node', cargo: 'Unzipped replication fork' },
          { nodeId: 'real-cd-pol-delta', label: 'DNA Pol delta', cargo: 'Exposed ssDNA template' }
        ]
      },
      es: {
        subtitle: 'Helicasa replicativa en anillo (MCM2–7 / DnaB, PDB 6QEL)',
        simple:
          'Esta [[proteína|protein]] anular de seis subunidades rodea una hebra de [[ADN|dna]] y usa energía de [[ATP|atp-synthase]] para abrir la doble hélice por delante de las polimerasas.',
        story:
          'Para duplicar el genoma antes de la [[división celular|real-cell-division]], la célula debe romper millones de enlaces de hidrógeno que unen el [[ADN|dna]] bicatenario. Cargada en los orígenes de replicación, la helicasa hexamérica en anillo (MCM2–7 eucariota en el complejo CMG, comparada con DnaB bacteriana) enhebra una hebra molde por su canal central y desplaza la complementaria hacia fuera. La hidrólisis secuencial de [[ATP|atp-synthase]] alrededor de sus seis subunidades impulsa horquillas internas que separan el dúplex limpiamente para RPA/SSB y la [[ADN Pol δ|real-cd-pol-delta]].',
        blueprint: {
          role: 'Motor ATPasa hexamérico en anillo de 13 nm que abre el ADNbc parental en el vértice de la horquilla de replicación',
          arrivesFrom: 'Anillos helicasa MCM2–7 activados en orígenes (análogo bacteriano DnaB PDB 6QEL) alimentados por [[ATP|atp-synthase]] + [[Mg²⁺|atom-mg]]',
          inside: 'Poro central de seis subunidades que envuelve una hebra molde y separa estéricamente la hebra complementaria de [[ADN|dna]]',
          deliversTo: 'Moldes monocatenarios líder y rezagado estabilizados por RPA/SSB hacia [[ADN Pol δ|real-cd-pol-delta]] y Pol ε',
          loop: 'El avance de la helicasa se mantiene acoplado a la polimerasa para evitar tramos largos y vulnerables de ADN monocatenario'
        },
        scientific:
          'Helicasa replicativa hexamérica de ADN (~13 nm de diámetro externo; estructura cristalina DnaB bacteriana PDB 6QEL emparejada con el complejo eucariota CMG/MCM2–7 en el [[replisoma|real-cd-replisome]]). Impulsada por hidrólisis secuencial de [[Mg²⁺|atom-mg]]–ATP en seis motores RecA/AAA+, sus horquillas β translocan sobre una hebra de [[ADN|dna]] (3\'→5\' en MCM2–7; 5\'→3\' en DnaB), rompiendo puentes de hidrógeno de los [[pares de bases|real-cd-mutation-atom]] antes de la [[ADN Pol δ|real-cd-pol-delta]].',
        from: [
          { nodeId: 'dna', label: 'ADNbc parental', cargo: 'Doble hélice apareada' },
          { nodeId: 'atp-synthase', label: 'Suministro de ATP', cargo: 'Hidrólisis para apertura' }
        ],
        to: [
          { nodeId: 'real-cd-replisome', label: 'Horquilla replisoma', cargo: 'Horquilla abierta activa' },
          { nodeId: 'real-cd-pol-delta', label: 'ADN Pol δ', cargo: 'Molde monocatenario listo' }
        ]
      }
    },

    pol_delta: {
      en: {
        subtitle: 'DNA Polymerase delta & PCNA Clamp (PDB 6TNY / 1AXC)',
        simple:
          'Clamped onto [[DNA|dna]] by the sliding PCNA ring, [[DNA Pol delta|real-cd-pol-delta]] builds the new complementary strand 5\' to 3\' and backs up to cut out mispaired [[nucleotides|nucleotide]].',
        story:
          'Behind the unwinding helicase, [[DNA Pol delta|real-cd-pol-delta]] docks onto the ring-shaped PCNA clamp so it can slide smoothly along thousands of bases without falling off. Its catalytic palm coordinates two [[Mg2+|atom-mg]] ions to snap each complementary dNTP onto the growing 3\' end. Whenever an erroneous [[base|base]] creates an abnormal width across the duplex, synthesis stalls immediately and the primer tip shifts into the 3\' -> 5\' exonuclease pocket, excising the mistake before elongation restarts. Only rare escapes pass forward as heritable [[point mutations|real-cd-mutation-atom]].',
        blueprint: {
          role: '12 x 15 nm clamp-tethered replicative polymerase performing 5\' -> 3\' DNA synthesis and instant 3\' -> 5\' mismatch excision',
          arrivesFrom: 'Single-stranded template from the [[replisome|real-cd-replisome]] fork, nuclear dNTP pool, and homotrimeric PCNA ring (PDB 1AXC)',
          inside: 'Pol delta holoenzyme (PDB 6TNY; bacterial Pol III-beta analog PDB 5FKV) switching mismatched 3\' ends between palm polymerase and exonuclease sites',
          deliversTo: 'Proofread double-stranded sister [[DNA|dna]] ready for chromatin reassembly and [[RNA Pol II|rna-polymerase]] transcription',
          loop: 'Mismatch-induced stalling lowers replication error frequency ~100-fold while leaving minimal variation for molecular evolution'
        },
        scientific:
          'Human [[DNA Pol delta|real-cd-pol-delta]]-PCNA replicative complex (cryo-EM PDB 6TNY; PCNA homotrimeric ring PDB 1AXC; compared with *E. coli* DNA Pol III + beta-clamp PDB 5FKV). Catalyzes processive 5\' -> 3\' phosphodiester bond formation via two-metal ([[Mg2+|atom-mg]]) geometry verification against template [[bases|base]]. Misincorporated [[nucleotides|nucleotide]] distort the minor groove, triggering melting of ~3-4 primer base pairs and transfer into the 3\' -> 5\' exonuclease active site before resuming high-speed elongation.',
        from: [
          { nodeId: 'real-cd-replisome', label: 'Replication Fork', cargo: 'Primed ssDNA templates' },
          { nodeId: 'nucleotide', label: 'Free dNTP Pool', cargo: 'dATP, dTTP, dGTP, dCTP' }
        ],
        to: [
          { nodeId: 'real-cd-pol-delta', label: 'Pol delta Proofreader', cargo: '3\' -> 5\' exo fidelity' },
          { nodeId: 'real-cd-mutation-atom', label: 'Rare Escape Mismatches', cargo: 'Raw substrate of evolution' }
        ]
      },
      es: {
        subtitle: 'ADN polimerasa δ y pinza PCNA (PDB 6TNY / 1AXC)',
        simple:
          'Sujeta al [[ADN|dna]] por el anillo deslizante PCNA, la [[ADN Pol δ|real-cd-pol-delta]] construye la hebra nueva en sentido 5\'→3\' y retrocede para recortar cualquier [[nucleótido|nucleotide]] mal apareado.',
        story:
          'Detrás de la helicasa, la [[ADN Pol δ|real-cd-pol-delta]] se acopla al anillo PCNA para deslizarse miles de bases sin desprenderse. Su palma catalítica usa dos iones [[Mg²⁺|atom-mg]] para unir cada dNTP complementario al extremo 3\' naciente. Si una [[base|base]] errónea deforma el ancho del dúplex, la síntesis se detiene al instante y la punta del cebador pasa al sitio exonucleasa 3\'→5\', que elimina el error antes de continuar. Solo los escasos fallos que escapan a este filtro pasan como [[mutaciones puntuales|real-cd-mutation-atom]] heredables.',
        blueprint: {
          role: 'Polimerasa replicativa de 12 × 15 nm sujeta por pinza que une síntesis 5\'→3\' y escisión instantánea de errores 3\'→5\'',
          arrivesFrom: 'Molde monocatenario de la horquilla del [[replisoma|real-cd-replisome]], dNTP nucleares y anillo trimérico PCNA (PDB 1AXC)',
          inside: 'Holoenzima Pol δ (PDB 6TNY; análogo bacteriano Pol III–β PDB 5FKV) alternando extremos 3\' erróneos entre palma y exonucleasa',
          deliversTo: '[[ADN|dna]] hermano bicatenario corregido listo para reempaquetarse y ser transcrito por la [[ARN Pol II|rna-polymerase]]',
          loop: 'El frenado ante malos apareamientos reduce ~100 veces los errores dejando una variación mínima para la evolución molecular'
        },
        scientific:
          'Complejo replicativo humano [[ADN Pol δ|real-cd-pol-delta]]–PCNA (crio-EM PDB 6TNY; pinza homotrimérica PCNA PDB 1AXC; comparado con ADN Pol III + pinza β de E. coli PDB 5FKV). Cataliza la formación procesiva de enlaces fosfodiéster 5\'→3\' con dos iones [[Mg²⁺|atom-mg]] comprobando la geometría de las [[bases|base]]. Un [[nucleótido|nucleotide]] incorrecto distorsiona el surco menor y desplaza el extremo 3\' al centro exonucleasa 3\'→5\' antes de reanudar la elongación.',
        from: [
          { nodeId: 'real-cd-replisome', label: 'Horquilla de replicación', cargo: 'Moldes monocatenarios cebados' },
          { nodeId: 'nucleotide', label: 'Reserva de dNTP', cargo: 'dATP, dTTP, dGTP, dCTP' }
        ],
        to: [
          { nodeId: 'real-cd-pol-delta', label: 'Correctora Pol δ', cargo: 'Fidelidad exonucleasa 3\'→5\'' },
          { nodeId: 'real-cd-mutation-atom', label: 'Errores residuales', cargo: 'Fuente primaria de evolución' }
        ]
      }
    },

    rna_pol2: {
      en: {
        subtitle: 'RNA Polymerase II Transcription Bubble (PDB 1I50)',
        simple:
          'Twelve-subunit [[RNA Polymerase II|rna-polymerase]] pries open a short 12-to-14 base-pair bubble along [[DNA|dna]] and copies the active gene into a single-stranded pre-mRNA [[RNA|rna]] transcript.',
        story:
          'To express the human *HBB* gene without disturbing the master genomic archive, [[RNA Polymerase II|rna-polymerase]] docks at the opened promoter and melts a local 12-to-14 base-pair transcription bubble inside its deep catalytic cleft. Reading the 3\' -> 5\' DNA template strand, its catalytic [[Mg2+|atom-mg]] center stitches ribonucleotides (rNTPs) 5\' -> 3\' into a temporary RNA-DNA hybrid before a protein rudder peels the fresh [[RNA|rna]] strand cleanly out the exit channel. Behind the enzyme, parental [[DNA|dna]] zips right back closed while the phosphorylated C-terminal tail recruits capping and splicing enzymes.',
        blueprint: {
          role: '15 nm 12-subunit eukaryotic RNA polymerase transcribing nuclear protein-coding genes into nascent pre-mRNA',
          arrivesFrom: 'Opened euchromatin promoter DNA, general transcription factors, nuclear rNTPs (ATP, UTP, GTP, CTP), and [[Mg2+|atom-mg]]',
          inside: '550 kDa multi-subunit catalytic core (PDB 1I50) maintaining an ~12-14 bp transcription bubble and an 8-9 bp RNA-DNA catalytic hybrid',
          deliversTo: '5\' -> 3\' nascent pre-mRNA exiting straight into capping enzymes, polyadenylation factors, and the [[spliceosome|real-cd-spliceosome]]',
          loop: 'The phosphorylated Rpb1 C-terminal domain (CTD) coordinates capping, splicing, and 3\' cleavage co-transcriptionally along the gene'
        },
        scientific:
          'Eukaryotic 12-subunit [[RNA Polymerase II|rna-polymerase]] (~15 x 13 x 11 nm, ~550 kDa; yeast core crystal structure PDB 1I50) transcribing protein-coding loci such as human *HBB*. Opens a ~12-14 bp transcription bubble, reads the 3\' -> 5\' template strand via two-[[Mg2+|atom-mg]]-ion catalysis across the bridge helix and trigger loop (~30-60 nt/s), and extrudes 5\' -> 3\' pre-mRNA through the RNA exit channel while the Rpb1 C-terminal heptad repeat tail recruits 5\' capping, [[spliceosome|real-cd-spliceosome]], and cleavage-polyadenylation machinery.',
        from: [
          { nodeId: 'chromatin-fiber', label: 'Open Euchromatin', cargo: 'Accessible HBB gene template' },
          { nodeId: 'nucleotide', label: 'Nuclear rNTP Pool', cargo: 'ATP, UTP, GTP, CTP substrates' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'RNA Pol II Node', cargo: '12-subunit transcription engine' },
          { nodeId: 'real-cd-spliceosome', label: 'Co-Transcriptional Splicing', cargo: 'Nascent exon-intron pre-mRNA' }
        ]
      },
      es: {
        subtitle: 'Burbuja de transcripción de ARN polimerasa II (PDB 1I50)',
        simple:
          'La [[ARN polimerasa II|rna-polymerase]] de doce subunidades abre una breve burbuja de 12 a 14 pares de bases en el [[ADN|dna]] y copia el gen activo en una hebra sencilla de pre-ARNm.',
        story:
          'Para expresar el gen humano HBB sin alterar el archivo maestro, la [[ARN polimerasa II|rna-polymerase]] se acopla al promotor abierto y funde una burbuja local de 12 a 14 pares de bases dentro de su hendidura en pinza. Al leer el molde de ADN en sentido 3\'→5\', su centro catalítico con [[Mg²⁺|atom-mg]] ensambla ribonucleótidos (rNTP) en dirección 5\'→3\' dentro de un híbrido ARN–ADN temporal antes de expulsar la hebra naciente de [[ARN|rna]] por el canal de salida. Detrás, el [[ADN|dna]] vuelve a cerrarse mientras su cola C-terminal fosforilada recluta enzimas de caperuza y empalme.',
        blueprint: {
          role: 'ARN polimerasa eucariota de 12 subunidades (15 nm) que transcribe genes nucleares codificantes en pre-ARNm naciente',
          arrivesFrom: 'Promotor en eucromatina abierta, factores generales de transcripción, rNTP nucleares (ATP, UTP, GTP, CTP) y [[Mg²⁺|atom-mg]]',
          inside: 'Núcleo en pinza de 550 kDa (PDB 1I50) con burbuja de ~12–14 pb e híbrido catalítico ARN–ADN de 8–9 pb',
          deliversTo: 'Pre-ARNm 5\'→3\' entregado directamente a enzimas de caperuza, poliadenilación y al [[espliceosoma|real-cd-spliceosome]]',
          loop: 'La cola C-terminal (CTD) fosforilada de Rpb1 coordina cotranscripcionalmente la caperuza 5\', el empalme y el corte 3\''
        },
        scientific:
          '[[ARN polimerasa II|rna-polymerase]] eucariota de 12 subunidades (~15 × 13 × 11 nm, ~550 kDa; estructura cristalina PDB 1I50) encargada de transcribir genes codificantes como HBB. Mantiene una burbuja de ~12–14 pb, lee la hebra molde 3\'→5\' mediante catálisis con dos [[Mg²⁺|atom-mg]] (~30–60 nt/s) y extruye pre-ARNm 5\'→3\' mientras las repeticiones heptapeptídicas de su dominio CTD reclutan la caperuza 5\', el [[espliceosoma|real-cd-spliceosome]] y los factores de poliadenilación 3\'.',
        from: [
          { nodeId: 'chromatin-fiber', label: 'Eucromatina abierta', cargo: 'Molde génico HBB accesible' },
          { nodeId: 'nucleotide', label: 'Reserva nuclear rNTP', cargo: 'Sustratos ATP, UTP, GTP, CTP' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'Nodo ARN Pol II', cargo: 'Motor de transcripción de 12 subunidades' },
          { nodeId: 'real-cd-spliceosome', label: 'Empalme cotranscripcional', cargo: 'Pre-ARNm con exones e intrones' }
        ]
      }
    },

    pre_mrna: {
      en: {
        subtitle: '5\'-Capped & 3\'-Polyadenylated Pre-mRNA Transcript',
        simple:
          'Pre-mRNA is the raw [[RNA|rna]] copy of a eukaryotic gene that still holds both coding exons and non-coding introns, shielded at its ends by a protective 5\' cap and a long 3\' poly-A tail.',
        story:
          'Barely twenty-five [[nucleotides|nucleotide]] after the nascent *HBB* transcript pokes out of [[RNA Pol II|rna-polymerase]], capping enzymes flip a methylated guanosine (m7G) backwards onto its 5\' tip via a rare 5\'-5\' triphosphate bridge. When transcription finishes past the final exon, cleavage factors trim the transcript and poly-A polymerase stitches 150 to 250 adenosines onto the 3\' end. Those two molecular end-caps block RNA-degrading exonucleases and serve as export signals, while the internal introns wait to be removed by the [[spliceosome|real-cd-spliceosome]].',
        blueprint: {
          role: 'End-protected immature nuclear RNA carrying alternating coding exons and non-coding introns awaiting splicing',
          arrivesFrom: '5\' -> 3\' transcript emerging from the [[RNA Pol II|rna-polymerase]] exit channel with co-transcriptional capping and poly-A enzymes',
          inside: 'Single-stranded [[RNA|rna]] bearing an inverted 5\' m7G triphosphate cap, three HBB exons, two internal introns (GU...A...AG), and a 150-250 nt 3\' poly-A tail',
          deliversTo: 'Intron-marked pre-mRNA substrate directly to the nuclear [[spliceosome|real-cd-spliceosome]] for lariat excision',
          loop: 'Both the 5\' m7G cap and 3\' poly-A tail later bind translation initiation factors in the cytosol to confirm transcript integrity'
        },
        scientific:
          'Eukaryotic primary transcript (pre-mRNA; human *HBB* ~1.6 kb precursor comprising 3 exons and 2 introns). Co-transcriptionally modified by RNA triphosphatase, guanylyltransferase, and N7-methyltransferase attaching an inverted 7-methylguanosine (m7G) 5\'-5\' triphosphate cap, followed by CPSF/CstF 3\' endonucleolytic cleavage and PAP-catalyzed polymerization of ~150-250 adenosine [[nucleotides|nucleotide]]. Cap-binding complex (CBC) and nuclear poly-A binding proteins guard against 5\'/3\' exonucleases while licensing [[spliceosome|real-cd-spliceosome]] processing and [[nuclear pore|nuclear-pore]] export.',
        from: [
          { nodeId: 'rna-polymerase', label: 'RNA Pol II', cargo: 'Nascent 5\' -> 3\' RNA strand' },
          { nodeId: 'rna', label: 'RNA Backbone', cargo: 'Ribose-phosphate exons & introns' }
        ],
        to: [
          { nodeId: 'real-cd-spliceosome', label: 'Spliceosome Entry', cargo: 'Capped pre-mRNA substrate' },
          { nodeId: 'real-cd-splicing-view', label: 'Alternative Splicing', cargo: 'Selectable cassette exons' }
        ]
      },
      es: {
        subtitle: 'Pre-ARNm con caperuza 5\' y cola poli-A 3\'',
        simple:
          'El pre-ARNm es la copia cruda de [[ARN|rna]] de un gen eucariota que aún conserva exones codificantes e intrones no codificantes, protegida en sus extremos por una caperuza 5\' y una larga cola poli-A 3\'.',
        story:
          'Apenas veinticinco [[nucleótidos|nucleotide]] después de asomar el transcrito HBB fuera de la [[ARN Pol II|rna-polymerase]], enzimas específicas unen una guanosina metilada invertida (m⁷G) en el extremo 5\' mediante un puente trifosfato 5\'–5\'. Al terminar la transcripción tras el último exón, factores de corte recortan la hebra y la poli-A polimerasa añade entre 150 y 250 adenosinas en el extremo 3\'. Ambos remates bloquean exonucleasas destructoras y sirven de señal de exportación mientras el [[espliceosoma|real-cd-spliceosome]] elimina los intrones internos.',
        blueprint: {
          role: 'ARN nuclear inmaduro protegido en ambos extremos que porta exones codificantes e intrones listos para empalme',
          arrivesFrom: 'Transcrito 5\'→3\' saliente de la [[ARN Pol II|rna-polymerase]] modificado cotranscripcionalmente por enzimas de caperuza y poli-A',
          inside: '[[ARN|rna]] monocatenario con caperuza invertida 5\' m⁷G, tres exones HBB, dos intrones (GU…A…AG) y cola poli-A 3\' de 150–250 nt',
          deliversTo: 'Sustrato pre-ARNm marcado con señales intrónicas hacia el [[espliceosoma|real-cd-spliceosome]] nuclear',
          loop: 'Tanto la caperuza 5\' m⁷G como la cola poli-A 3\' reclutan luego factores de inicio en el citosol confirmando la integridad del mensaje'
        },
        scientific:
          'Transcrito primario eucariota (pre-ARNm; precursor humano HBB de ~1,6 kb con 3 exones y 2 intrones). Modificado cotranscripcionalmente con una caperuza invertida 7-metilguanosina (m⁷G) por enlace trifosfato 5\'–5\', seguido de corte endonucleolítico 3\' (CPSF/CstF) y polimerización de ~150–250 [[nucleótidos|nucleotide]] de adenosina. El complejo de unión a caperuza (CBC) y PABPN1 protegen frente a exonucleasas mientras habilitan el [[espliceosoma|real-cd-spliceosome]] y el [[poro nuclear|nuclear-pore]].',
        from: [
          { nodeId: 'rna-polymerase', label: 'ARN Pol II', cargo: 'Hebra naciente de ARN 5\'→3\'' },
          { nodeId: 'rna', label: 'Esqueleto de ARN', cargo: 'Exones e intrones de ribosa-fosfato' }
        ],
        to: [
          { nodeId: 'real-cd-spliceosome', label: 'Entrada al espliceosoma', cargo: 'Pre-ARNm con caperuza y cola' },
          { nodeId: 'real-cd-splicing-view', label: 'Empalme alternativo', cargo: 'Exones casete seleccionables' }
        ]
      }
    },

    spliceosome: {
      en: {
        subtitle: 'Catalytic Spliceosome C Complex (U1-U6 snRNPs, PDB 5YZG)',
        simple:
          'This 27-nanometer [[spliceosome|real-cd-spliceosome]] assembles five snRNP modules around each pre-mRNA intron, snips out the non-coding sequence as a loop, and fuses the coding exons together.',
        story:
          'Unlike rigid protein enzymes with fixed pockets, the [[spliceosome|real-cd-spliceosome]] rebuilds itself fresh on every single intron inside the [[nucleus|nucleus]]. U1 snRNP locks onto the 5\' GU boundary while U2 snRNP pairs around the internal branch-point adenosine, bulging it outward for chemistry. The U4/U6.U5 tri-snRNP joins and ATP-burning helicases eject U1 and U4, unveiling the catalytic U2/U6 [[RNA|rna]] ribozyme. Guided by two [[Mg2+|atom-mg]] ions, it executes two crisp transesterifications that release the intron lariat and seal the exon junction.',
        blueprint: {
          role: '27 nm megadalton ribonucleoprotein machine catalyzing intron removal and regulated exon ligation in eukaryotic nuclei',
          arrivesFrom: 'Five snRNPs (U1, U2, U4, U5, U6), >100 splicing [[proteins|protein]], [[ATP|atp-synthase]] helicases, and nascent pre-mRNA',
          inside: 'Human catalytic C complex (PDB 5YZG, ~2.5-3.0 MDa) positioning the U2/U6 snRNA catalytic triad and two [[Mg2+|atom-mg]] ions at splice sites',
          deliversTo: 'Ligated coding exons ([[Isoform A or B|real-cd-splicing-view]]) ready for export and excised 2\'-5\' intron lariats',
          loop: 'After each intron is excised, ATPases disassemble the spliceosome so all five snRNPs recycle onto downstream introns'
        },
        scientific:
          'Human catalytic [[spliceosome|real-cd-spliceosome]] C complex (~27 x 24 x 20 nm, ~2.5-3.0 MDa; cryo-EM PDB 5YZG). Five snRNPs (U1, U2, U4, U5, U6) remodel sequentially via DExD/H-box RNA helicases (Prp2, Prp16, Prp22, Prp43) to form an active site built from U2/U6 snRNA coordinating two catalytic [[Mg2+|atom-mg]] ions. Two SN2 transesterifications cleave the 5\' GU site via the branch-point 2\'-OH and then attack the 3\' AG junction, driving canonical and [[alternative splicing|real-cd-splicing-view]].',
        from: [
          { nodeId: 'rna-polymerase', label: 'Pre-mRNA Supply', cargo: 'Intron-bearing nascent transcript' },
          { nodeId: 'atom-mg', label: 'Catalytic Mg2+ Ions', cargo: 'Two-metal ribozyme active site' }
        ],
        to: [
          { nodeId: 'real-cd-spliceosome', label: 'Spliceosome Node', cargo: 'U1-U6 catalytic C complex' },
          { nodeId: 'real-cd-splicing-view', label: 'Isoform Selection', cargo: 'Exon inclusion vs. skipping' }
        ]
      },
      es: {
        subtitle: 'Complejo catalítico C del espliceosoma (snRNP U1–U6, PDB 5YZG)',
        simple:
          'Este [[espliceosoma|real-cd-spliceosome]] de 27 nanómetros reúne cinco módulos snRNP alrededor de cada intrón del pre-ARNm, recorta la secuencia no codificante en un lazo y fusiona los exones codificantes.',
        story:
          'A diferencia de las enzimas proteicas rígidas, el [[espliceosoma|real-cd-spliceosome]] se ensambla desde cero sobre cada intrón dentro del [[núcleo|nucleus]]. U1 reconoce el borde 5\' GU mientras U2 se aparea alrededor de la adenosina de ramificación exponiéndola hacia fuera. Luego entra el tri-snRNP U4/U6·U5 y helicasas con ATP expulsan U1 y U4, destapando la ribozima catalítica de [[ARN|rna]] U2/U6. Con dos iones [[Mg²⁺|atom-mg]], ejecuta dos transesterificaciones precisas que liberan el lazo intrónico y sellan la unión entre exones.',
        blueprint: {
          role: 'Máquina ribonucleoproteica de 27 nm y megadaltons que cataliza la escisión intrónica y la ligación regulada de exones',
          arrivesFrom: 'Cinco snRNP (U1, U2, U4, U5, U6), más de 100 [[proteínas|protein]], helicasas de [[ATP|atp-synthase]] y pre-ARNm naciente',
          inside: 'Complejo catalítico humano C (PDB 5YZG, ~2,5–3,0 MDa) que alinea la tríada de ARNsn U2/U6 y dos [[Mg²⁺|atom-mg]] en los cortes',
          deliversTo: 'Exones codificantes ligados ([[Isoforma A o B|real-cd-splicing-view]]) listos para exportar y lazos intrónicos 2\'–5\' escindidos',
          loop: 'Al terminar cada intrón, ATPasas desarman el espliceosoma reciclando los cinco snRNP hacia intrones posteriores'
        },
        scientific:
          'Complejo catalítico humano C del [[espliceosoma|real-cd-spliceosome]] (~27 × 24 × 20 nm, ~2,5–3,0 MDa; crio-EM PDB 5YZG). Sus cinco snRNP (U1, U2, U4, U5, U6) se remodelan mediante helicasas de ARN DExD/H (Prp2, Prp16, Prp22, Prp43) exponiendo un centro activo de ARNsn U2/U6 con dos [[Mg²⁺|atom-mg]] catalíticos. Dos transesterificaciones SN2 escinden el sitio 5\' GU con el 2\'-OH de ramificación y unen el aceptor 3\' AG impulsando el [[empalme alternativo|real-cd-splicing-view]].',
        from: [
          { nodeId: 'rna-polymerase', label: 'Suministro pre-ARNm', cargo: 'Transcrito naciente con intrones' },
          { nodeId: 'atom-mg', label: 'Iones Mg²⁺ catalíticos', cargo: 'Sitio activo de dos metales' }
        ],
        to: [
          { nodeId: 'real-cd-spliceosome', label: 'Nodo Espliceosoma', cargo: 'Complejo catalítico C U1–U6' },
          { nodeId: 'real-cd-splicing-view', label: 'Selección de isoforma', cargo: 'Inclusión u omisión de exón' }
        ]
      }
    },

    intron_lariat: {
      en: {
        subtitle: 'Excised 2\'-5\' Intron Lariat Loop',
        simple:
          'This looped piece of non-coding [[RNA|rna]] is an excised intron bent into a closed lariat loop during splicing. After leaving the [[spliceosome|real-cd-spliceosome]], nuclear enzymes open the loop and recycle its [[nucleotides|nucleotide]].',
        story:
          'During step one of splicing inside the [[spliceosome|real-cd-spliceosome]], the 2\'-hydroxyl group of a conserved internal branch-point adenosine attacks the 5\' GU intron boundary. Instead of breaking the strand into loose fragments, that reaction forges an unusual 2\'-5\' phosphodiester bond that ties the intron\'s front tip onto its own middle, creating a closed lariat loop with a short tail. Once step two cuts the 3\' AG boundary and releases the finished exon junction, DBR1 debranching enzyme clips that 2\'-5\' knot so nuclear exonucleases recycle every ribonucleotide back into fresh [[RNA|rna]] synthesis.',
        blueprint: {
          role: 'Covalently looped non-coding intron byproduct excised from pre-mRNA during step I and step II transesterification',
          arrivesFrom: 'Internal non-coding intronic segments (and skipped cassette exons in Isoform B) looped by the [[spliceosome|real-cd-spliceosome]]',
          inside: 'Circularized [[RNA|rna]] loop closed by a specialized 2\'-5\' phosphodiester linkage at the conserved branch-point adenosine [[sugar|sugar]]',
          deliversTo: 'Nuclear DBR1 debranching enzyme and exonucleases recycling free ribonucleotide monophosphates back to [[RNA Pol II|rna-polymerase]]',
          loop: 'Excised introns also host small regulatory RNAs (such as snoRNAs or miRNAs) before full nuclear turnover'
        },
        scientific:
          'Excised eukaryotic intronic [[RNA|rna]] lariat generated by step I nucleophilic attack of the intronic branch-point adenosine 2\'-OH on the 5\' splice-site [[phosphate|phosphate]] inside the [[spliceosome|real-cd-spliceosome]] (PDB 5YZG), forming a branched 2\'-5\' phosphodiester bond alongside the canonical 3\'-5\' backbone. Liberated by the Prp43 helicase after step II exon ligation, the lariat is linearized by the nuclear debranching metallophosphoesterase DBR1 and degraded into reusable [[nucleotides|nucleotide]] by Xrn2 and the nuclear exosome.',
        from: [
          { nodeId: 'real-cd-spliceosome', label: 'Spliceosome Catalysis', cargo: 'Step I/II lariat excision' },
          { nodeId: 'rna', label: 'Intronic RNA', cargo: 'Non-coding GU...A...AG segment' }
        ],
        to: [
          { nodeId: 'nucleotide', label: 'Nucleotide Recycling', cargo: 'DBR1 debranching & turnover' },
          { nodeId: 'nucleus', label: 'Nuclear Exosome', cargo: 'RNA ribonucleotide recovery' }
        ]
      },
      es: {
        subtitle: 'Lazo intrónico 2\'–5\' escindido',
        simple:
          'Este bucle de [[ARN|rna]] no codificante es un intrón extirpado en forma de lazo durante el empalme. Al salir del [[espliceosoma|real-cd-spliceosome]], enzimas nucleares abren el bucle y reciclan sus [[nucleótidos|nucleotide]].',
        story:
          'En el primer paso catalítico dentro del [[espliceosoma|real-cd-spliceosome]], el grupo 2\'-OH de una adenosina de ramificación interna ataca el extremo 5\' GU del intrón. En vez de dejar cabos sueltos, la reacción forja un enlace fosfodiéster 2\'–5\' poco común que ata el inicio del intrón sobre su propio tramo medio, formando un lazo cerrado con cola corta. Al liberarse tras el segundo paso que sella los exones, la enzima desramificadora DBR1 rompe el nudo 2\'–5\' para que exonucleasas nucleares reciclen cada ribonucleótido hacia nueva síntesis de [[ARN|rna]].',
        blueprint: {
          role: 'Subproducto intrónico no codificante cerrado en lazo covalente durante las dos transesterificaciones del empalme',
          arrivesFrom: 'Segmentos intrónicos no codificantes (y exones casete omitidos en Isoforma B) escindidos por el [[espliceosoma|real-cd-spliceosome]]',
          inside: 'Bucle de [[ARN|rna]] cerrado por un enlace fosfodiéster 2\'–5\' en el [[azúcar|sugar]] ribosa de la adenosina de ramificación',
          deliversTo: 'Enzima nuclear desramificadora DBR1 y exonucleasas que devuelven ribonucleótidos libres hacia la [[ARN Pol II|rna-polymerase]]',
          loop: 'Algunos intrones escindidos alojan ARN reguladores pequeños (snoARN o miARN) antes de su reciclaje completo'
        },
        scientific:
          'Lazo intrónico de [[ARN|rna]] eucariota originado por el ataque nucleofílico del 2\'-OH de la adenosina de ramificación sobre el [[fosfato|phosphate]] del sitio 5\' dentro del [[espliceosoma|real-cd-spliceosome]] (PDB 5YZG), creando un enlace fosfodiéster 2\'–5\' junto al esqueleto 3\'–5\'. Liberado por la helicasa Prp43 tras la ligación exónica, es linealizado por la fosfoesterasa nuclear DBR1 y degradado en [[nucleótidos|nucleotide]] reutilizables por Xrn2 y el exosoma nuclear.',
        from: [
          { nodeId: 'real-cd-spliceosome', label: 'Catálisis espliceosoma', cargo: 'Escisión en lazo paso I/II' },
          { nodeId: 'rna', label: 'ARN intrónico', cargo: 'Segmento no codificante GU…A…AG' }
        ],
        to: [
          { nodeId: 'nucleotide', label: 'Reciclaje nucleotídico', cargo: 'Desramificación DBR1 y recambio' },
          { nodeId: 'nucleus', label: 'Exosoma nuclear', cargo: 'Recuperación de ribonucleótidos' }
        ]
      }
    },

    exon_junction: {
      en: {
        subtitle: 'Spliced Exon Junction & Isoform Router (Isoform A / B)',
        simple:
          'This stitched seam joins adjacent coding exons into one unbroken reading frame. Depending on [[alternative splicing|real-cd-splicing-view]], the [[spliceosome|real-cd-spliceosome]] either keeps cassette Exon 2 (Isoform A) or skips it (Isoform B).',
        story:
          'In step two of splicing, the free 3\'-hydroxyl end of the upstream exon attacks the 3\' AG splice site, covalently stitching neighboring coding exons without missing a single [[nucleotide|nucleotide]] so the triplet reading frame stays exact. Right upstream of every finished seam, the [[spliceosome|real-cd-spliceosome]] deposits an Exon Junction Complex (EJC) protein tag that marks successful processing for [[nuclear pore|nuclear-pore]] export and quality control. Toggling [[alternative splicing|real-cd-splicing-view]] reroutes this exact junction between full-length Exon 1-2-3 (Isoform A) and compact Exon 1-3 (Isoform B).',
        blueprint: {
          role: 'Frame-exact ligated coding splice seam and EJC export marker toggling between alternative protein isoforms',
          arrivesFrom: 'Upstream and downstream coding exons aligned inside the [[spliceosome|real-cd-spliceosome]] under SR/hnRNP control',
          inside: 'Canonical 3\'-5\' phosphodiester exon-exon junction stamped ~20-24 nt upstream by the multiprotein Exon Junction Complex (EJC)',
          deliversTo: 'Export-licensed mature [[mRNA|rna]] encoding either full-length Isoform A or cassette-skipped Isoform B for [[80S ribosomes|real-cd-ribo80]]',
          loop: 'EJC tags remain bound until cleared by the first translating ribosome, triggering nonsense-mediated decay if a premature stop codon occurs'
        },
        scientific:
          'Covalent 3\'-5\' exon-exon ligation site forged during step II transesterification in the [[spliceosome|real-cd-spliceosome]] (PDB 5YZG), maintaining single-nucleotide reading-frame accuracy across spliced coding exons. Marked ~20-24 nt upstream by the tetrameric Exon Junction Complex (eIF4AIII, MAGOH, Y14, MLN51), which recruits TREX/NXF1 export adaptors for [[NPC|nuclear-pore]] transit and gates nonsense-mediated decay during the pioneer round on [[80S ribosomes|real-cd-ribo80]]. Switching [[Isoform A vs. Isoform B|real-cd-splicing-view]] alters domain architecture from one gene.',
        from: [
          { nodeId: 'real-cd-spliceosome', label: 'Spliceosome Ligation', cargo: 'Step II exon joining' },
          { nodeId: 'real-cd-splicing-view', label: 'Alternative Splicing', cargo: 'Isoform A vs. Isoform B toggle' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Export Licensing', cargo: 'EJC + NXF1 export tag' },
          { nodeId: 'real-cd-ribo80', label: '80S Reading Frame', cargo: 'Uninterrupted coding exons' }
        ]
      },
      es: {
        subtitle: 'Unión de exones y selector de isoformas (Isoforma A / B)',
        simple:
          'Esta costura une exones codificantes vecinos en un marco de lectura continuo. Según el [[empalme alternativo|real-cd-splicing-view]], el [[espliceosoma|real-cd-spliceosome]] conserva el exón casete 2 (Isoforma A) o lo omite (Isoforma B).',
        story:
          'En el segundo paso del empalme, el extremo 3\'-OH libre del exón anterior ataca el sitio 3\' AG y sella covalentemente dos exones sin perder un solo [[nucleótido|nucleotide]], preservando intacto el marco de lectura en tripletes. Justo antes de cada costura terminada, el [[espliceosoma|real-cd-spliceosome]] deposita un complejo de unión exónica (EJC) que acredita el procesamiento para el [[poro nuclear|nuclear-pore]] y el control de calidad. Alternar el [[empalme alternativo|real-cd-splicing-view]] redirige esta unión entre la Isoforma A completa (exones 1–2–3) y la Isoforma B compacta (exones 1–3).',
        blueprint: {
          role: 'Costura exónica exacta en marco de lectura y marcador EJC de exportación que alterna isoformas proteicas',
          arrivesFrom: 'Exones codificantes alineados dentro del [[espliceosoma|real-cd-spliceosome]] bajo regulación de factores SR y hnRNP',
          inside: 'Unión fosfodiéster canónica 3\'–5\' entre exones marcada ~20–24 nt río arriba por el complejo multiproteico EJC',
          deliversTo: '[[ARNm|rna]] maduro habilitado para exportación que codifica la Isoforma A completa o la Isoforma B recortada para [[ribosomas 80S|real-cd-ribo80]]',
          loop: 'Los complejos EJC permanecen hasta la primera pasada ribosomal, activando degradación si aparece un codón de parada prematuro'
        },
        scientific:
          'Sitio de ligación covalente 3\'–5\' entre exones formado en la transesterificación de paso II del [[espliceosoma|real-cd-spliceosome]] (PDB 5YZG), preservando la precisión del marco de lectura al nucleótido. Marcado ~20–24 nt río arriba por el complejo EJC (eIF4AIII, MAGOH, Y14, MLN51), que recluta adaptadores TREX/NXF1 para el [[poro nuclear|nuclear-pore]] y controla el decaimiento mediado por mutación sin sentido en [[ribosomas 80S|real-cd-ribo80]]. Alternar [[Isoforma A y B|real-cd-splicing-view]] genera dos dominios desde un mismo gen.',
        from: [
          { nodeId: 'real-cd-spliceosome', label: 'Ligación espliceosoma', cargo: 'Unión exónica paso II' },
          { nodeId: 'real-cd-splicing-view', label: 'Empalme alternativo', cargo: 'Selector Isoforma A frente a B' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Licencia de exportación', cargo: 'Marca EJC + adaptador NXF1' },
          { nodeId: 'real-cd-ribo80', label: 'Marco de lectura 80S', cargo: 'Exones codificantes continuos' }
        ]
      }
    },

    npc: {
      en: {
        subtitle: 'Nuclear Pore Complex Export Gate (NPC, 120 nm)',
        simple:
          'This 120-nanometer [[nuclear pore|nuclear-pore]] embeds in the double [[nuclear envelope|nuclear-envelope]], blocking unspliced fragments while letting finished messenger [[RNA|rna]] thread cleanly into the [[cytosol|cytosol]].',
        story:
          'Separating nuclear transcription from cytosolic translation gives eukaryotes time to splice and verify every transcript, but it requires a high-throughput selective transport gate. Built with crisp eight-fold rotational symmetry from roughly a thousand nucleoporin [[proteins|protein]], each [[Nuclear Pore Complex|nuclear-pore]] spans 120 nanometers across the [[nuclear envelope|nuclear-envelope]] with a 40-nanometer central mesh of disordered FG-repeat filaments. Only mature mRNPs wearing a 5\' cap, EJC marks, and NXF1/NXT1 export receptors slip smoothly through the selective hydrogel; once out on the cytoplasmic fibrils, Dbp5 ATPase strips the receptors so export runs strictly one-way.',
        blueprint: {
          role: '120 nm selective nucleocytoplasmic gateway enforcing quality-checked, one-way export of mature mRNA into the cytosol',
          arrivesFrom: 'Double-bilayer [[nuclear envelope|nuclear-envelope]] perforated by eight-fold symmetric nucleoporin scaffolds receiving spliced mRNPs',
          inside: '40 nm central channel filled with hydrophobic phenylalanine-glycine (FG-repeat) meshwork, nuclear basket, and cytoplasmic Dbp5 helicase fibrils',
          deliversTo: 'Directionally exported mature [[mRNA|rna]] strands directly to cytosolic [[80S ribosomes|real-cd-ribo80]] and polysome arcs',
          loop: 'Unspliced pre-mRNAs are retained inside the nucleus by basket quality controls while recycled importins return freshly made nuclear proteins inward'
        },
        scientific:
          'Eukaryotic [[Nuclear Pore Complex|nuclear-pore]] (NPC; ~120 nm outer diameter, ~40 nm transport channel, ~110 MDa assembled from ~30 distinct nucleoporin species in 8-fold rotational symmetry spanning the ~40 nm [[nuclear envelope|nuclear-envelope]]). Intrinsically disordered FG-repeat nucleoporins form a selective permeability sieve permitting NXF1-NXT1-bound mature mRNPs (~20-30 nm particles) to diffuse through rapidly, while cytoplasmic filament-anchored Gle1-IP6-Dbp5 ATPase remodels the exiting transcript to enforce irreversible unidirectional export to cytosolic [[80S ribosomes|real-cd-ribo80]].',
        from: [
          { nodeId: 'nuclear-envelope', label: 'Nuclear Envelope', cargo: 'Double-membrane barrier' },
          { nodeId: 'real-cd-spliceosome', label: 'Spliced mRNP', cargo: 'NXF1-licensed mature transcript' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Nuclear Pore Node', cargo: '120 nm selective FG gate' },
          { nodeId: 'cytosol', label: 'Cytosolic Translation', cargo: 'Unidirectional mRNA exit' }
        ]
      },
      es: {
        subtitle: 'Compuerta de exportación del poro nuclear (NPC, 120 nm)',
        simple:
          'Este [[poro nuclear|nuclear-pore]] de 120 nanómetros atraviesa la doble [[envoltura nuclear|nuclear-envelope]], reteniendo fragmentos sin empalmar mientras deja pasar el [[ARN|rna]] mensajero maduro hacia el [[citosol|cytosol]].',
        story:
          'Separar la transcripción nuclear de la traducción citosólica da tiempo a los eucariotas para empalmar y revisar cada transcrito, pero exige una compuerta selectiva de gran caudal. Construido con simetría rotacional de orden ocho a partir de unas mil nucleoporinas [[proteicas|protein]], cada [[complejo de poro nuclear|nuclear-pore]] mide 120 nanómetros en la [[envoltura nuclear|nuclear-envelope]] con un canal central de 40 nanómetros tapizado por filamentos FG desordenados. Solo los ARNm maduros con caperuza 5\', marcas EJC y receptores NXF1/NXT1 atraviesan el gel selectivo; al salir, la ATPasa Dbp5 retira los receptores garantizando un tráfico en un solo sentido.',
        blueprint: {
          role: 'Compuerta nucleocitoplasmática selectiva de 120 nm que asegura la exportación unidireccional y verificada de ARNm maduro',
          arrivesFrom: 'Doble bicapa de la [[envoltura nuclear|nuclear-envelope]] perforada por andamios octaméricos de nucleoporinas que reciben mRNP empalmados',
          inside: 'Canal central de 40 nm ocupado por malla hidrofóbica de repeticiones FG, cesta nuclear y fibrillas citoplasmáticas con helicasa Dbp5',
          deliversTo: 'Hebras de [[ARNm|rna]] maduro exportadas directamente hacia los [[ribosomas 80S|real-cd-ribo80]] y polisomas del citosol',
          loop: 'La cesta nuclear retiene pre-ARNm sin empalmar mientras las importinas devuelven hacia el núcleo proteínas recién fabricadas'
        },
        scientific:
          '[[Complejo de poro nuclear|nuclear-pore]] eucariota (NPC; diámetro externo ~120 nm, canal de transporte ~40 nm, ~110 MDa ensamblados por ~30 especies de nucleoporinas en simetría octamérica a través de la [[envoltura nuclear|nuclear-envelope]]). Las nucleoporinas FG intrínsecamente desordenadas crean un tamiz selectivo atravesado por mRNP maduros unidos a NXF1–NXT1, mientras la ATPasa citoplasmática Gle1–IP6–Dbp5 remodela el transcrito saliente imponiendo direccionalidad hacia los [[ribosomas 80S|real-cd-ribo80]].',
        from: [
          { nodeId: 'nuclear-envelope', label: 'Envoltura nuclear', cargo: 'Barrera de doble membrana' },
          { nodeId: 'real-cd-spliceosome', label: 'mRNP empalmado', cargo: 'Transcrito maduro con NXF1' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Nodo Poro Nuclear', cargo: 'Compuerta selectiva FG de 120 nm' },
          { nodeId: 'cytosol', label: 'Traducción citosólica', cargo: 'Salida unidireccional de ARNm' }
        ]
      }
    },

    mature_mrna: {
      en: {
        subtitle: 'Exported Mature mRNA Coding Transcript',
        simple:
          'Mature messenger [[RNA|rna]] carries an unbroken sequence of three-letter codons from its 5\' cap to its 3\' poly-A tail, guiding cytosolic [[80S ribosomes|real-cd-ribo80]] on the exact order of [[amino acids|amino-acid]] to link.',
        story:
          'Stripped of every non-coding intron and delivered into the [[cytosol|cytosol]] through the [[nuclear pore|nuclear-pore]], mature *HBB* mRNA is ready for high-speed translation. Cap-binding eIF4E at the 5\' m7G end and poly-A binding protein (PABP) along the 3\' tail bridge through eIF4G into a closed-loop conformation that helps finished ribosomes restart quickly. Scanning from the 5\' untranslated region, the small subunit locates the AUG start codon and feeds consecutive three-base coding triplets straight through the decoding groove until a UAA, UAG, or UGA stop codon signals release.',
        blueprint: {
          role: 'Intron-free cytosolic coding blueprint specifying exact polypeptide primary sequence via consecutive three-base codons',
          arrivesFrom: 'Spliced, capped, and polyadenylated transcript exported directionally through the [[nuclear pore|nuclear-pore]]',
          inside: '5\' m7G cap, 5\' UTR, uninterrupted open reading frame (146 coding codons for human HBB beta-globin), 3\' UTR, and PABP-bound 3\' poly-A tail',
          deliversTo: 'Sequential 3-base codon stream decoded by [[80S ribosomes|real-cd-ribo80]] and cognate [[tRNAs|real-cd-trna]] across polysomes',
          loop: 'Gradual deadenylation of the 3\' poly-A tail sets the transcript lifespan, controlling how many protein copies one mRNA yields'
        },
        scientific:
          'Processed eukaryotic cytoplasmic mature [[mRNA|rna]] (human *HBB* ~626 nt mature transcript with 441 nt coding sequence encoding 146 aa beta-globin plus initiator Met, flanked by 5\' m7G cap, 5\'/3\' UTRs, and ~150-250 nt 3\' poly-A tail). Bridged into a pseudo-circular closed loop by eIF4E-eIF4G-PABP interactions that enhance initiation efficiency on [[80S ribosomes|real-cd-ribo80]], exposing consecutive 3-nt codons for [[tRNA|real-cd-trna]] Watson-Crick [[anticodon pairing|real-cd-mutation-atom]] until cytoplasmic deadenylases trigger turnover.',
        from: [
          { nodeId: 'nuclear-pore', label: 'Nuclear Pore Export', cargo: 'Verified cytosolic mRNA' },
          { nodeId: 'real-cd-splicing-view', label: 'Spliced Isoform', cargo: 'Unbroken exon reading frame' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: '80S Ribosome Decoding', cargo: '5\' -> 3\' codon triplets' },
          { nodeId: 'real-cd-trna', label: 'tRNA Anticodon Match', cargo: '3-base genetic code readout' }
        ]
      },
      es: {
        subtitle: 'Transcrito codificante de ARNm maduro exportado',
        simple:
          'El [[ARN|rna]] mensajero maduro lleva una secuencia continua de codones de tres letras desde su caperuza 5\' hasta la cola poli-A 3\', indicando a los [[ribosomas 80S|real-cd-ribo80]] el orden exacto de los [[aminoácidos|amino-acid]].',
        story:
          'Libre de intrones no codificantes y entregado en el [[citosol|cytosol]] a través del [[poro nuclear|nuclear-pore]], el ARNm maduro de HBB queda listo para traducirse a gran ritmo. La proteína eIF4E en la caperuza 5\' m⁷G y PABP en la cola poli-A 3\' se enlazan mediante eIF4G formando un bucle cerrado que facilita el reinicio rápido de los ribosomas. Al rastrear desde la región 5\' no traducida, la subunidad pequeña localiza el codón de inicio AUG y desliza tripletes codificantes consecutivos hasta que un codón de parada UAA, UAG o UGA indica la liberación.',
        blueprint: {
          role: 'Plano codificante citosólico sin intrones que dicta la secuencia primaria exacta del polipéptido en tripletes consecutivos',
          arrivesFrom: 'Transcrito empalmado, con caperuza y poliadenilado exportado unidireccionalmente por el [[poro nuclear|nuclear-pore]]',
          inside: 'Caperuza 5\' m⁷G, UTR 5\', marco abierto continuo (146 codones para beta-globina humana HBB), UTR 3\' y cola poli-A 3\' con PABP',
          deliversTo: 'Flujo secuencial de codones de 3 bases decodificado por [[ribosomas 80S|real-cd-ribo80]] y [[ARNt|real-cd-trna]] en polisomas',
          loop: 'El acortamiento progresivo de la cola poli-A 3\' regula la vida útil del transcrito y cuántas copias proteicas produce cada ARNm'
        },
        scientific:
          '[[ARNm|rna]] citoplasmático eucariota maduro (transcrito humano HBB de ~626 nt con marco codificante de 441 nt para 146 aa de beta-globina más Met inicial, caperuza 5\' m⁷G, UTR 5\'/3\' y cola poli-A 3\' de ~150–250 nt). El puente eIF4E–eIF4G–PABP genera un bucle cerrado que eleva la eficiencia de iniciación en [[ribosomas 80S|real-cd-ribo80]], presentando tripletes consecutivos al [[apareamiento codón–anticodón|real-cd-mutation-atom]] de los [[ARNt|real-cd-trna]].',
        from: [
          { nodeId: 'nuclear-pore', label: 'Exportación por poro', cargo: 'ARNm citosólico verificado' },
          { nodeId: 'real-cd-splicing-view', label: 'Isoforma empalmada', cargo: 'Marco exónico sin interrupciones' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Decodificación 80S', cargo: 'Tripletes de codones 5\'→3\'' },
          { nodeId: 'real-cd-trna', label: 'Emparejamiento ARNt', cargo: 'Lectura del código genético' }
        ]
      }
    },

    ribosome_80s: {
      en: {
        subtitle: 'Eukaryotic 80S Ribosome (40S + 60S, PDB 4UG0)',
        simple:
          'This 28-nanometer [[80S ribosome|real-cd-ribo80]] clamps onto mature mRNA with its [[40S|ribo-small]] decoding head and [[60S|ribo-large]] catalytic body, forging peptide bonds and pushing out the new [[polypeptide|polypeptide]].',
        story:
          'Assembled in the [[cytosol|cytosol]] right on the mRNA start codon, the eukaryotic [[80S ribosome|real-cd-ribo80]] steps along the transcript through coordinated two-subunit rotation. Its lower [[40S|ribo-small]] subunit cradles three consecutive mRNA codons while checking that incoming [[tRNA|real-cd-trna]] anticodons match cleanly across the A, P, and E pockets. Above it, the [[60S|ribo-large]] subunit uses pure 28S ribosomal [[RNA|rna]], with no protein side chains touching the reaction, to link each new [[amino acid|amino-acid]] onto the growing chain and feed it through the 10-nanometer exit tunnel.',
        blueprint: {
          role: '28-30 nm cytosolic translational ribozyme converting 3-base mRNA codons into growing amino-acid chains',
          arrivesFrom: 'Free [[40S|ribo-small]] and [[60S|ribo-large]] subunits recruited onto exported mature [[mRNA|rna]] plus eEF1A/eEF2 GTPases',
          inside: '4.3 MDa human 80S assembly (PDB 4UG0; contrasted with bacterial [[70S|ribosome-70s]] PDB 4YBB) housing A/P/E pockets, 28S rRNA PTC, and 10 nm tunnel',
          deliversTo: 'Growing nascent [[polypeptide|polypeptide]] chain emerging directly into [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]] folding machinery',
          loop: 'At a stop codon, release factor eRF1 hydrolyzes the finished peptide and ABCE1 splits the 40S and 60S subunits for reuse'
        },
        scientific:
          'Eukaryotic cytoplasmic [[80S ribosome|real-cd-ribo80]] (~28-30 nm, ~4.3 MDa; human cryo-EM PDB 4UG0; compared with prokaryotic [[70S ribosome|ribosome-70s]] PDB 4YBB) integrating the [[40S subunit|ribo-small]] (18S rRNA + 33 proteins) and [[60S subunit|ribo-large]] (28S/5.8S/5S rRNAs + 47 proteins). GTP-driven eEF2 translocation shifts mRNA and [[tRNAs|real-cd-trna]] precisely three nucleotides per step (~5-6 aa/s) while the 28S rRNA peptidyl-transferase center catalyzes amide bond formation and channels the [[polypeptide|polypeptide]] through a ~10 nm exit tunnel.',
        from: [
          { nodeId: 'ribo-small', label: '40S Decoding Subunit', cargo: '18S rRNA codon inspection' },
          { nodeId: 'ribo-large', label: '60S Catalytic Subunit', cargo: '28S rRNA peptide-bond center' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: '80S Ribosome Node', cargo: '4.3 MDa translation engine' },
          { nodeId: 'real-cd-hsp70', label: 'Hsp70 Shielding', cargo: 'Emerging hydrophobic peptide' }
        ]
      },
      es: {
        subtitle: 'Ribosoma eucariota 80S (40S + 60S, PDB 4UG0)',
        simple:
          'Este [[ribosoma 80S|real-cd-ribo80]] de 28 nanómetros se cierra sobre el ARNm maduro con su cabeza decodificadora [[40S|ribo-small]] y su cuerpo catalítico [[60S|ribo-large]], forjando enlaces peptídicos y extruyendo el nuevo [[polipéptido|polypeptide]].',
        story:
          'Ensamblado en el [[citosol|cytosol]] sobre el codón de inicio del ARNm, el [[ribosoma 80S|real-cd-ribo80]] opera mediante un trinquete sincronizado de dos subunidades. Su subunidad inferior [[40S|ribo-small]] aloja tres codones seguidos comprobando que cada anticodón de [[ARNt|real-cd-trna]] encaje en los sitios A, P y E. Arriba, la subunidad [[60S|ribo-large]] utiliza puro [[ARN|rna]] ribosómico 28S —sin cadenas laterales proteicas en el centro reactivo— para enlazar cada nuevo [[aminoácido|amino-acid]] y empujar la cadena por el túnel de salida de 10 nanómetros.',
        blueprint: {
          role: 'Ribozima traduccional citosólica de 28–30 nm que convierte codones de 3 bases en cadenas crecientes de aminoácidos',
          arrivesFrom: 'Subunidades libres [[40S|ribo-small]] y [[60S|ribo-large]] ensambladas sobre [[ARNm|rna]] maduro junto a factores GTPasa eEF1A/eEF2',
          inside: 'Complejo humano 80S de 4,3 MDa (PDB 4UG0; comparado con [[70S|ribosome-70s]] PDB 4YBB) con sitios A/P/E, PTC de ARNr 28S y túnel de 10 nm',
          deliversTo: 'Cadena [[polipeptídica|polypeptide]] naciente entregada directamente a las chaperonas [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]]',
          loop: 'Al llegar a un codón de parada, eRF1 libera el polipéptido y ABCE1 separa las subunidades 40S y 60S para reutilizarlas'
        },
        scientific:
          '[[Ribosoma 80S|real-cd-ribo80]] citoplasmático eucariota (~28–30 nm, ~4,3 MDa; crio-EM humano PDB 4UG0; frente al [[ribosoma 70S|ribosome-70s]] procariota PDB 4YBB) compuesto por las subunidades [[40S|ribo-small]] (ARNr 18S + 33 proteínas) y [[60S|ribo-large]] (ARNr 28S/5,8S/5S + 47 proteínas). La translocación mediada por eEF2–GTP avanza exactamente tres nucleótidos por ciclo (~5–6 aa/s) mientras la peptidil transferasa de ARNr 28S forma enlaces amida y guía el [[polipéptido|polypeptide]] por un túnel de ~10 nm.',
        from: [
          { nodeId: 'ribo-small', label: 'Subunidad decodificadora 40S', cargo: 'Revisión de codones ARNr 18S' },
          { nodeId: 'ribo-large', label: 'Subunidad catalítica 60S', cargo: 'Centro peptídico ARNr 28S' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Nodo Ribosoma 80S', cargo: 'Motor traduccional de 4,3 MDa' },
          { nodeId: 'real-cd-hsp70', label: 'Protección Hsp70', cargo: 'Péptido hidrofóbico saliente' }
        ]
      }
    },

    trna_ape: {
      en: {
        subtitle: 'Aminoacyl-tRNA in Ribosomal A / P / E Sites (PDB 1EHZ / 1TTT)',
        simple:
          'L-shaped [[tRNA|real-cd-trna]] adaptors step sequentially through the [[80S ribosome|real-cd-ribo80]] A (Aminoacyl), P (Peptidyl), and E (Exit) sites, matching three mRNA bases to the exact next [[amino acid|amino-acid]].',
        story:
          'Every [[amino acid|amino-acid]] enters protein synthesis escorted by a 76-nucleotide L-shaped [[tRNA|real-cd-trna]] pre-charged by its specific synthetase. Carried by GTP-bound eEF1A into the ribosomal A site, the tRNA\'s three-base anticodon tests Watson-Crick pairing against the exposed mRNA codon; near-cognate mismatches bounce out while an exact fit triggers GTP hydrolysis and full accommodation. Inside the P site, the 60S ribozyme transfers the entire growing [[polypeptide|polypeptide]] onto the newly arrived amino acid, and eEF2 ratchets the now-empty tRNA into the E site for cytosolic recharging.',
        blueprint: {
          role: 'Three-slot ribosomal stepping conveyor (A -> P -> E) translating nucleotide triplets into covalent peptide bonds',
          arrivesFrom: 'Aminoacyl-tRNA synthetase charging in the [[cytosol|cytosol]] plus eEF1A/EF-Tu-GTP ternary delivery (PDB 1TTT)',
          inside: '7 nm L-shaped [[tRNA|trna]] adaptors (PDB 1EHZ) verifying [[codon-anticodon|real-cd-mutation-atom]] geometry in A, transferring peptides in P, and ejecting from E',
          deliversTo: 'Sequence-accurate [[amino acid|amino-acid]] monomers added onto the growing [[polypeptide|polypeptide]] inside [[80S ribosomes|real-cd-ribo80]]',
          loop: 'Deacylated tRNAs exit from the E site and immediately rebind aminoacyl-tRNA synthetases for another charging cycle'
        },
        scientific:
          'Synchronized [[tRNA|real-cd-trna]] occupancy across the three intersubunit cavities of the [[80S ribosome|real-cd-ribo80]] (A = aminoacyl decoding site, P = peptidyl-tRNA site, E = exit site; tRNA fold PDB 1EHZ, ternary complex analog EF-Tu-GTP-tRNA PDB 1TTT). Kinetic proofreading splits codon recognition into initial selection and GTPase-activated accommodation, yielding ~10^-4 translational missense accuracy before eEF2-GTP catalyzes hybrid A/P and P/E ratcheting by one 3-nt codon.',
        from: [
          { nodeId: 'trna', label: 'Charged tRNA Pool', cargo: 'Aminoacylated 76-nt L-adaptors' },
          { nodeId: 'amino-acid', label: '20 Amino Acids', cargo: 'Cognate side-chain monomers' }
        ],
        to: [
          { nodeId: 'real-cd-trna', label: 'tRNA Adaptor Node', cargo: 'A -> P -> E decoding cycle' },
          { nodeId: 'real-cd-mutation-atom', label: 'Codon Triplet H-Bonds', cargo: 'Anticodon base-pair check' }
        ]
      },
      es: {
        subtitle: 'Aminoacil-ARNt en los sitios A / P / E (PDB 1EHZ / 1TTT)',
        simple:
          'Los adaptadores [[ARNt|real-cd-trna]] en forma de L avanzan en secuencia por los sitios A (aminoacilo), P (peptidilo) y E (salida) del [[ribosoma 80S|real-cd-ribo80]], emparejando cada triplete con el [[aminoácido|amino-acid]] exacto.',
        story:
          'Cada [[aminoácido|amino-acid]] llega a la síntesis proteica montado sobre un [[ARNt|real-cd-trna]] de 76 nucleótidos cargado por su sintetasa específica. Entregado por eEF1A–GTP en el sitio A, su anticodón de tres bases comprueba el apareamiento con el codón del ARNm; los errores son rechazados mientras un encaje exacto dispara la hidrólisis de GTP y la acomodación completa. En el sitio P, la ribozima 60S transfiere todo el [[polipéptido|polypeptide]] creciente al nuevo aminoácido y eEF2 desplaza el ARNt vacío hacia el sitio E para recargarlo en el citosol.',
        blueprint: {
          role: 'Cinta escalonada ribosomal de tres plazas (A→P→E) que traduce tripletes de nucleótidos en enlaces peptídicos covalentes',
          arrivesFrom: 'Carga por aminoacil-ARNt sintetasas en el [[citosol|cytosol]] y entrega ternaria eEF1A/EF-Tu–GTP (PDB 1TTT)',
          inside: 'Adaptadores [[ARNt|trna]] en L de 7 nm (PDB 1EHZ) verificando el par [[codón–anticodón|real-cd-mutation-atom]] en A, transfiriendo en P y saliendo por E',
          deliversTo: 'Monómeros de [[aminoácidos|amino-acid]] añadidos con precisión secuencial al [[polipéptido|polypeptide]] dentro del [[ribosoma 80S|real-cd-ribo80]]',
          loop: 'Los ARNt descargados abandonan el sitio E y vuelven de inmediato a su sintetasa para iniciar otro ciclo de carga'
        },
        scientific:
          'Tránsito sincronizado de [[ARNt|real-cd-trna]] por las tres cavidades intersubunidad del [[ribosoma 80S|real-cd-ribo80]] (sitio A aminoacilo, sitio P peptidilo, sitio E salida; pliegue ARNt PDB 1EHZ, complejo ternario análogo EF-Tu–GTP–ARNt PDB 1TTT). La corrección cinética divide la selección en reconocimiento inicial y acomodación tras hidrólisis de GTP (~10⁻⁴ de error traduccional) antes de que eEF2–GTP avance exactamente un codón de 3 nt.',
        from: [
          { nodeId: 'trna', label: 'Reserva de ARNt cargado', cargo: 'Adaptadores L de 76 nt' },
          { nodeId: 'amino-acid', label: '20 aminoácidos', cargo: 'Monómeros de cadenas laterales' }
        ],
        to: [
          { nodeId: 'real-cd-trna', label: 'Nodo Adaptador ARNt', cargo: 'Ciclo decodificador A→P→E' },
          { nodeId: 'real-cd-mutation-atom', label: 'Enlaces H del codón', cargo: 'Verificación del anticodón' }
        ]
      }
    },

    polypeptide: {
      en: {
        subtitle: 'Nascent Polypeptide Chain Exiting the 60S Tunnel',
        simple:
          'This growing [[polypeptide|polypeptide]] is a freshly linked chain of [[amino acids|amino-acid]] threading out of the [[80S ribosome|real-cd-ribo80]] tunnel and beginning to twist into local [[alpha-helices|alpha-helix]] and [[beta-sheets|beta-sheet]].',
        story:
          'Every time the 60S peptidyl-transferase center forges a new covalent amide bond, the growing [[polypeptide|polypeptide]] advances roughly 0.35 nanometers down the ten-nanometer ribosomal exit tunnel. Inside that narrow 1-to-2 nanometer RNA-lined chute, about thirty to forty nascent residues are shielded from the cytosol while short [[alpha-helices|alpha-helix]] begin coiling spontaneously. The instant the amino-terminal stretch pokes out into the [[cytosol|cytosol]], exposed hydrophobic side chains are immediately greeted by [[Hsp70|real-cd-hsp70]] and escorted toward [[TRiC|real-cd-tric]] to complete full tertiary folding.',
        blueprint: {
          role: 'Linear sequence-encoded amino-acid polymer transitioning from ribosomal exit extrusion to native 3D protein folding',
          arrivesFrom: 'Peptide-bond catalysis inside the [[80S ribosome|real-cd-ribo80]] P/A active site fed by charged [[tRNAs|real-cd-trna]]',
          inside: 'N-to-C covalent amide backbone carrying polar, charged, and hydrophobic [[amino-acid|amino-acid]] side chains initiating local [[alpha-helix|alpha-helix]] folding',
          deliversTo: 'Partially folded nascent chains handed off to [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]] to build active [[HbA|real-cd-hbs]] or other [[proteins|protein]]',
          loop: 'Local sequence chemistry dictates tertiary collapse, so a single Glu6Val substitution already biases folding and assembly downstream'
        },
        scientific:
          'Nascent covalent [[polypeptide|polypeptide]] chain (human HBB beta-globin: 146 mature residues after initiator Met excision) synthesized N-terminus to C-terminus inside the [[80S ribosome|real-cd-ribo80]] (PDB 4UG0). Roughly 30-40 residues reside simultaneously within the ~10 nm long, ~1-2 nm wide 60S exit tunnel where compaction of nascent [[alpha-helix|alpha-helix]] segments begins co-translationally before exiting into [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]] cytosolic folding quality control.',
        from: [
          { nodeId: 'real-cd-ribo80', label: '80S Exit Tunnel', cargo: '10 nm ribosomal extrusion chute' },
          { nodeId: 'amino-acid', label: 'Linked Amino Acids', cargo: 'N -> C covalent peptide bonds' }
        ],
        to: [
          { nodeId: 'polypeptide', label: 'Polypeptide Node', cargo: 'Primary amino-acid sequence' },
          { nodeId: 'real-cd-hsp70', label: 'Hsp70 Chaperone', cargo: 'Co-translational patch shielding' }
        ]
      },
      es: {
        subtitle: 'Cadena polipeptídica naciente saliendo del túnel 60S',
        simple:
          'Este [[polipéptido|polypeptide]] en crecimiento es una cadena recién enlazada de [[aminoácidos|amino-acid]] que sale por el túnel del [[ribosoma 80S|real-cd-ribo80]] y comienza a enrollarse en [[hélices alfa|alpha-helix]] y [[láminas beta|beta-sheet]].',
        story:
          'Cada vez que la peptidil transferasa 60S forja un nuevo enlace amida covalente, el [[polipéptido|polypeptide]] avanza unos 0,35 nanómetros por el túnel de salida de diez nanómetros. Dentro de ese estrecho conducto de ARN de uno a dos nanómetros de ancho, entre treinta y cuarenta residuos quedan protegidos del citosol mientras las primeras [[hélices alfa|alpha-helix]] empiezan a formarse solas. En cuanto el extremo amino asoma al [[citosol|cytosol]], [[Hsp70|real-cd-hsp70]] intercepta las cadenas laterales hidrofóbicas y las conduce hacia [[TRiC|real-cd-tric]] para completar el plegamiento terciario.',
        blueprint: {
          role: 'Polímero lineal de aminoácidos en transición desde la extrusión ribosomal hasta el plegamiento proteico 3D nativo',
          arrivesFrom: 'Catálisis peptídica en los sitios P/A del [[ribosoma 80S|real-cd-ribo80]] abastecidos por [[ARNt|real-cd-trna]] cargados',
          inside: 'Esqueleto amida covalente N→C con cadenas laterales polares, cargadas e hidrofóbicas de [[aminoácidos|amino-acid]] iniciando [[hélices alfa|alpha-helix]]',
          deliversTo: 'Cadenas nacientes semiplejadas hacia [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]] para formar [[HbA|real-cd-hbs]] u otras [[proteínas|protein]]',
          loop: 'La química de la secuencia primaria dirige el colapso 3D: un solo cambio Glu6Val ya condiciona el ensamblaje posterior'
        },
        scientific:
          'Cadena [[polipeptídica|polypeptide]] naciente covalente (beta-globina humana HBB: 146 residuos maduros tras escisión de Met inicial) sintetizada de N-terminal a C-terminal en el [[ribosoma 80S|real-cd-ribo80]] (PDB 4UG0). Entre 30 y 40 residuos ocupan simultáneamente el túnel de salida 60S (~10 nm de largo, ~1–2 nm de ancho), donde se inicia el plegamiento cotraduccional de [[hélices alfa|alpha-helix]] antes de acoplarse a [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]].',
        from: [
          { nodeId: 'real-cd-ribo80', label: 'Túnel de salida 80S', cargo: 'Conducto ribosomal de 10 nm' },
          { nodeId: 'amino-acid', label: 'Aminoácidos enlazados', cargo: 'Enlaces peptídicos N→C' }
        ],
        to: [
          { nodeId: 'polypeptide', label: 'Nodo Polipéptido', cargo: 'Secuencia primaria de aminoácidos' },
          { nodeId: 'real-cd-hsp70', label: 'Chaperona Hsp70', cargo: 'Protección cotraduccional' }
        ]
      }
    },

    polysome: {
      en: {
        subtitle: 'Cytosolic 80S Polysome Arc (100-150 nm)',
        simple:
          'A polysome lines up multiple [[80S ribosomes|real-cd-ribo80]] along one single mature [[mRNA|rna]] strand at the same time, multiplying protein output so the cell builds thousands of copies rapidly.',
        story:
          'Translating one beta-globin copy at a time would take far too long to pack a developing red blood cell with hundreds of millions of hemoglobin tetramers. Instead, as soon as the leading [[80S ribosome|real-cd-ribo80]] clears roughly eighty to one hundred [[nucleotides|nucleotide]] past the AUG start site, a second ribosome initiates right behind it, then a third and fourth, curving the [[mRNA|rna]] into a 100-to-150-nanometer polysome rosette in the [[cytosol|cytosol]]. Each ribosome trails a progressively longer [[polypeptide|polypeptide]] tail, releasing a steady wave of identical protein chains into [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]].',
        blueprint: {
          role: '100-150 nm multi-ribosome translation amplifier running parallel polypeptide synthesis along one closed-loop mRNA',
          arrivesFrom: 'Exported mature [[mRNA|rna]] circularized by eIF4E-eIF4G-PABP recruiting sequential [[80S ribosomes|real-cd-ribo80]] from the [[cytosol|cytosol]]',
          inside: 'Curved arc of 4-8 instanced 80S ribosomes (PDB 4UG0) spaced ~80-100 nt apart with staggered nascent [[polypeptide|polypeptide]] lengths',
          deliversTo: 'High-throughput parallel stream of identical chains to [[Hsp70|real-cd-hsp70]] and [[TRiC|real-cd-tric]] folding benches',
          loop: 'Closed-loop circularization lets terminating ribosomes at the 3\' stop codon re-initiate quickly at the neighboring 5\' cap'
        },
        scientific:
          'Eukaryotic cytosolic polyribosome (polysome; ~100-150 nm spiral or rosette arrangement of multiple [[80S ribosomes|real-cd-ribo80]], PDB 4UG0, spaced ~80-100 nt along one mature [[mRNA|rna]]). Closed-loop eIF4E-eIF4G-PABP tethering promotes rapid ribosome recycling, amplifying translational output roughly 5-to-10-fold per transcript while staggering nascent [[polypeptide|polypeptide]] exit tunnel orientations radially outward to minimize inter-chain aggregation before [[Hsp70|real-cd-hsp70]] capture.',
        from: [
          { nodeId: 'nuclear-pore', label: 'Exported Mature mRNA', cargo: 'Closed-loop translation template' },
          { nodeId: 'real-cd-ribo80', label: '80S Ribosome Pool', cargo: 'Sequential initiation subunits' }
        ],
        to: [
          { nodeId: 'polypeptide', label: 'Polypeptide Wave', cargo: 'Parallel nascent protein output' },
          { nodeId: 'real-cd-tric', label: 'Chaperone Folding Bench', cargo: 'High-volume folding substrates' }
        ]
      },
      es: {
        subtitle: 'Arco polisómico citosólico 80S (100–150 nm)',
        simple:
          'Un polisoma alinea varios [[ribosomas 80S|real-cd-ribo80]] sobre una sola hebra de [[ARNm|rna]] maduro a la vez, multiplicando la producción de proteínas para fabricar miles de copias con rapidez.',
        story:
          'Traducir una sola copia de beta-globina cada vez sería demasiado lento para llenar un eritrocito en desarrollo con cientos de millones de tetrámeros de hemoglobina. En cuanto el primer [[ribosoma 80S|real-cd-ribo80]] avanza entre ochenta y cien [[nucleótidos|nucleotide]] más allá del codón AUG, un segundo ribosoma inicia justo detrás, seguido por un tercero y un cuarto, curvando el [[ARNm|rna]] en un polisoma de 100 a 150 nanómetros en el [[citosol|cytosol]]. Cada ribosoma extruye un [[polipéptido|polypeptide]] progresivamente más largo en una ola constante hacia [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]].',
        blueprint: {
          role: 'Amplificador traduccional multirribosomal de 100–150 nm que sintetiza polipéptidos en paralelo sobre un mismo ARNm',
          arrivesFrom: '[[ARNm|rna]] maduro exportado en bucle cerrado eIF4E–eIF4G–PABP reclutando sucesivos [[ribosomas 80S|real-cd-ribo80]] del [[citosol|cytosol]]',
          inside: 'Arco curvo de 4 a 8 ribosomas 80S (PDB 4UG0) espaciados ~80–100 nt con cadenas [[polipeptídicas|polypeptide]] de longitud escalonada',
          deliversTo: 'Flujo paralelo de alto rendimiento de cadenas idénticas hacia las chaperonas [[Hsp70|real-cd-hsp70]] y [[TRiC|real-cd-tric]]',
          loop: 'La circularización permite que cada ribosoma que termina en el codón 3\' reinicie rápidamente junto a la caperuza 5\''
        },
        scientific:
          'Polirribosoma (polisoma) citosólico eucariota (roseta o arco de ~100–150 nm con múltiples [[ribosomas 80S|real-cd-ribo80]], PDB 4UG0, espaciados ~80–100 nt a lo largo de un mismo [[ARNm|rna]] maduro). La unión circular eIF4E–eIF4G–PABP acelera el reciclaje ribosomal multiplicando de 5 a 10 veces la producción por transcrito y orientando los túneles de salida hacia fuera para evitar choques entre [[polipéptidos|polypeptide]] antes de [[Hsp70|real-cd-hsp70]].',
        from: [
          { nodeId: 'nuclear-pore', label: 'ARNm maduro exportado', cargo: 'Molde circularizado en el citosol' },
          { nodeId: 'real-cd-ribo80', label: 'Reserva de ribosomas 80S', cargo: 'Iniciaciones secuenciales' }
        ],
        to: [
          { nodeId: 'polypeptide', label: 'Ola de polipéptidos', cargo: 'Producción proteica en paralelo' },
          { nodeId: 'real-cd-tric', label: 'Plegamiento asistido', cargo: 'Alto flujo de sustratos nacientes' }
        ]
      }
    },

    hsp70: {
      en: {
        subtitle: 'Hsp70 Hydrophobic-Shielding Chaperone (PDB 2KHO)',
        simple:
          'Mounted right outside the ribosome exit tunnel, [[Hsp70|real-cd-hsp70]] clamps exposed sticky hydrophobic patches on nascent [[polypeptides|polypeptide]] using [[ATP|atp-synthase]] so they do not clump together.',
        story:
          'The crowded [[cytosol|cytosol]] packs hundreds of milligrams of macromolecules into every milliliter, making exposed hydrophobic stretches on an unfinished [[polypeptide|polypeptide]] dangerously prone to misfolding. [[Hsp70|real-cd-hsp70]] stands guard directly near exiting polysomes. In its open ATP-bound state, its beta-sheet peptide groove welcomes a short hydrophobic segment; J-domain co-chaperones then trigger ATP hydrolysis, slamming the alpha-helical lid closed to shield the segment safely until nucleotide exchange releases it to fold natively or transfer inside the [[TRiC|real-cd-tric]] barrel.',
        blueprint: {
          role: '8 nm ATP-switched molecular clamp guarding nascent hydrophobic peptide segments against cytosolic aggregation',
          arrivesFrom: 'Cytosolic Hsp70/Hsp40 co-chaperone pool plus [[ATP|atp-synthase]] and [[Mg2+|atom-mg]] stationed beside [[80S ribosomes|real-cd-ribo80]]',
          inside: '70 kDa two-domain chaperone (PDB 2KHO) cycling between open ATP-bound cleft and lid-locked ADP-bound substrate clamp',
          deliversTo: 'Aggregation-protected nascent [[polypeptides|polypeptide]] folding independently or handed cleanly to [[TRiC|real-cd-tric]]',
          loop: 'Repeated bind-and-release ATP cycles smooth out kinetic misfolding traps without permanently blocking native domain collapse'
        },
        scientific:
          'Eukaryotic/conserved [[Hsp70|real-cd-hsp70]] molecular chaperone (~70 kDa, ~8 nm; allosteric full-length structure PDB 2KHO) coupling an N-terminal nucleotide-binding ATPase domain to a C-terminal [[beta-sheet|beta-sheet]] substrate-binding cleft and [[alpha-helix|alpha-helix]] lid. Hsp40/J-domain co-chaperones stimulate [[Mg2+|atom-mg]]-ATP hydrolysis to trap exposed 5-7 residue hydrophobic stretches emerging from [[80S ribosomes|real-cd-ribo80]], preventing off-pathway aggregation prior to native folding or [[TRiC|real-cd-tric]] handoff.',
        from: [
          { nodeId: 'polypeptide', label: 'Nascent Polypeptide', cargo: 'Exposed hydrophobic motifs' },
          { nodeId: 'atp-synthase', label: 'ATP Energy Supply', cargo: 'Lid-clamping hydrolysis cycle' }
        ],
        to: [
          { nodeId: 'real-cd-hsp70', label: 'Hsp70 Chaperone Node', cargo: 'Allosteric hydrophobic shield' },
          { nodeId: 'real-cd-tric', label: 'TRiC Chaperonin', cargo: 'Protected substrate handoff' }
        ]
      },
      es: {
        subtitle: 'Chaperona protectora hidrofóbica Hsp70 (PDB 2KHO)',
        simple:
          'Situada justo a la salida del túnel ribosomal, [[Hsp70|real-cd-hsp70]] sujeta los tramos hidrofóbicos expuestos en los [[polipéptidos|polypeptide]] nacientes usando [[ATP|atp-synthase]] para impedir que se aglutinen.',
        story:
          'El [[citosol|cytosol]] concentra cientos de miligramos de macromoléculas por mililitro, por lo que cualquier tramo hidrofóbico expuesto en un [[polipéptido|polypeptide]] sin terminar tiende a pegarse y plegarse mal. [[Hsp70|real-cd-hsp70]] vigila justo junto a los polisomas. En su estado abierto con ATP, su hendidura en lámina beta recibe el segmento apolar; luego una cochaperona con dominio J dispara la hidrólisis de ATP cerrando la tapa en hélice alfa hasta que el recambio nucleotídico libera la cadena para plegarse o entrar al barril [[TRiC|real-cd-tric]].',
        blueprint: {
          role: 'Pinza molecular de 8 nm controlada por ATP que resguarda segmentos hidrofóbicos nacientes frente a la agregación',
          arrivesFrom: 'Reserva citosólica de Hsp70/Hsp40 más [[ATP|atp-synthase]] y [[Mg²⁺|atom-mg]] apostada junto a los [[ribosomas 80S|real-cd-ribo80]]',
          inside: 'Chaperona bidominio de 70 kDa (PDB 2KHO) que alterna hendidura abierta con ATP y pinza cerrada con tapa en estado ADP',
          deliversTo: '[[Polipéptidos|polypeptide]] libres de agregados que se pliegan solos o se transfieren al barril [[TRiC|real-cd-tric]]',
          loop: 'Los ciclos repetidos de unión y liberación con ATP corrigen trampas cinéticas sin frenar el plegamiento nativo'
        },
        scientific:
          'Chaperona molecular conservada [[Hsp70|real-cd-hsp70]] (~70 kDa, ~8 nm; estructura alostérica completa PDB 2KHO) que acopla un dominio ATPasa N-terminal con una hendidura C-terminal en [[lámina beta|beta-sheet]] cubierta por tapa en [[hélice alfa|alpha-helix]]. Las cochaperonas Hsp40/J estimulan la hidrólisis de [[Mg²⁺|atom-mg]]–ATP atrapando motivos hidrofóbicos de 5–7 residuos salientes de [[ribosomas 80S|real-cd-ribo80]] antes del plegamiento nativo o el traspaso a [[TRiC|real-cd-tric]].',
        from: [
          { nodeId: 'polypeptide', label: 'Polipéptido naciente', cargo: 'Motivos hidrofóbicos expuestos' },
          { nodeId: 'atp-synthase', label: 'Suministro de ATP', cargo: 'Ciclo de cierre de tapa' }
        ],
        to: [
          { nodeId: 'real-cd-hsp70', label: 'Nodo Chaperona Hsp70', cargo: 'Escudo hidrofóbico alostérico' },
          { nodeId: 'real-cd-tric', label: 'Chaperonina TRiC', cargo: 'Traspaso protegido del sustrato' }
        ]
      }
    },

    tric_groel: {
      en: {
        subtitle: 'TRiC / CCT & GroEL Chaperonin Barrel (PDB 6NR8 / 1AON)',
        simple:
          'This ATP-powered [[TRiC|real-cd-tric]] barrel encloses an unfolded [[polypeptide|polypeptide]] inside an isolated folding chamber, flipping the inner wall to water-friendly so the [[protein|protein]] snaps into its proper 3D shape.',
        story:
          'Handed over by [[Hsp70|real-cd-hsp70]], a partially collapsed [[polypeptide|polypeptide]] enters the open hydrophobic rim of eukaryotic [[TRiC/CCT|real-cd-tric]] (shown alongside prokaryotic GroEL/GroES from [[E. coli|real-bacterium]]). Binding [[ATP|atp-synthase]] rotates all eight ring subunits inward, closing TRiC\'s integral helical iris lid over the chamber while burying its hydrophobic lining. Alone inside a 15-nanometer hydrophilic cavity with zero outside interference, the trapped chain tucks its own hydrophobic core inward to form native [[alpha-helices|alpha-helix]] and [[beta-sheets|beta-sheet]]; ATP hydrolysis then opens the iris and releases a working [[protein|protein]].',
        blueprint: {
          role: '15 x 16 nm ATP-gated chaperonin folding chamber providing isolated hydrophilic refolding for complex cytosolic proteins',
          arrivesFrom: 'Unfolded or kinetically trapped [[polypeptides|polypeptide]] escorted by [[Hsp70|real-cd-hsp70]] plus [[ATP|atp-synthase]] and [[Mg2+|atom-mg]]',
          inside: 'Eukaryotic TRiC/CCT double-ring hexadecamer with built-in iris lid (PDB 6NR8; prokaryotic GroEL/GroES comparison PDB 1AON)',
          deliversTo: 'Natively folded tertiary/quaternary [[proteins|protein]] such as wild-type [[HbA|real-cd-hbs]] or cytoskeletal subunits into the [[cytosol|cytosol]]',
          loop: 'Negative cooperativity between the two stacked rings alternates firing cycles so one chamber folds while the opposite ring loads'
        },
        scientific:
          'Comparative chaperonin folding barrels: eukaryotic Group II [[TRiC/CCT|real-cd-tric]] (~15 x 16 nm, ~1 MDa double-ring hexadecamer with built-in apical iris lids, cryo-EM PDB 6NR8) and bacterial Group I GroEL-GroES (PDB 1AON in [[E. coli|real-bacterium]]). [[Mg2+|atom-mg]]-ATP binding and hydrolysis switch the internal chamber from hydrophobic substrate capture to a hydrophilic encapsulation cage (~50-70 kDa limit), promoting native [[alpha-helix|alpha-helix]]/[[beta-sheet|beta-sheet]] collapse without intermolecular aggregation.',
        from: [
          { nodeId: 'real-cd-hsp70', label: 'Hsp70 Handoff', cargo: 'Unfolded cytosolic intermediates' },
          { nodeId: 'atp-synthase', label: 'ATP Fuel', cargo: 'Iris-lid encapsulation cycle' }
        ],
        to: [
          { nodeId: 'real-cd-tric', label: 'TRiC Chaperonin Node', cargo: 'ATP-gated folding barrel' },
          { nodeId: 'protein', label: 'Native 3D Proteins', cargo: 'Active folded cytosolic enzymes' }
        ]
      },
      es: {
        subtitle: 'Barril chaperonina TRiC / CCT y GroEL (PDB 6NR8 / 1AON)',
        simple:
          'Este barril [[TRiC|real-cd-tric]] impulsado por ATP encierra un [[polipéptido|polypeptide]] sin plegar en una cámara aislada, volviendo hidrofílica su pared interior para que la [[proteína|protein]] adopte su forma 3D correcta.',
        story:
          'Entregado por [[Hsp70|real-cd-hsp70]], un [[polipéptido|polypeptide]] parcialmente plegado entra por el borde hidrofóbico abierto de la chaperonina eucariota [[TRiC/CCT|real-cd-tric]] (comparada con GroEL/GroES de [[E. coli|real-bacterium]]). La unión de [[ATP|atp-synthase]] gira hacia adentro sus ocho subunidades cerrando la tapa iris integrada y ocultando la superficie apolar. Aislada en una cavidad hidrofílica de 15 nanómetros sin estorbos externos, la cadena repliega su núcleo en [[hélices alfa|alpha-helix]] y [[láminas beta|beta-sheet]] nativas antes de que la hidrólisis de ATP abra la cámara y libere la [[proteína|protein]].',
        blueprint: {
          role: 'Cámara chaperonina de plegamiento de 15 × 16 nm controlada por ATP que aísla proteínas citosólicas complejas',
          arrivesFrom: '[[Polipéptidos|polypeptide]] desplegados o atrapados cinéticamente escoltados por [[Hsp70|real-cd-hsp70]] junto a [[ATP|atp-synthase]] y [[Mg²⁺|atom-mg]]',
          inside: 'Hexadecámero eucariota de doble anillo TRiC/CCT con tapa iris integrada (PDB 6NR8; comparación procariota GroEL/GroES PDB 1AON)',
          deliversTo: '[[Proteínas|protein]] nativas terciarias y cuaternarias como [[HbA|real-cd-hbs]] o subunidades estructurales hacia el [[citosol|cytosol]]',
          loop: 'La cooperatividad negativa entre ambos anillos alterna los ciclos: mientras una cámara pliega, la opuesta captura otro sustrato'
        },
        scientific:
          'Barriles chaperonina comparados: [[TRiC/CCT|real-cd-tric]] eucariota del grupo II (~15 × 16 nm, hexadecámero de doble anillo de ~1 MDa con tapas iris apicales integradas, crio-EM PDB 6NR8) y GroEL–GroES bacteriana del grupo I (PDB 1AON en [[E. coli|real-bacterium]]). La unión e hidrólisis de [[Mg²⁺|atom-mg]]–ATP transforman el interior de zona hidrofóbica de captura en jaula hidrofílica (~50–70 kDa) que impulsa el plegamiento nativo de [[hélices alfa|alpha-helix]] y [[láminas beta|beta-sheet]].',
        from: [
          { nodeId: 'real-cd-hsp70', label: 'Entrega desde Hsp70', cargo: 'Intermedios citosólicos desplegados' },
          { nodeId: 'atp-synthase', label: 'Combustible ATP', cargo: 'Ciclo de encapsulación en iris' }
        ],
        to: [
          { nodeId: 'real-cd-tric', label: 'Nodo Chaperonina TRiC', cargo: 'Barril de plegamiento por ATP' },
          { nodeId: 'protein', label: 'Proteínas 3D nativas', cargo: 'Enzimas citosólicas funcionales' }
        ]
      }
    },

    hb_wildtype: {
      en: {
        subtitle: 'Wild-Type Human Hemoglobin HbA (Glu6, PDB 2HHB)',
        simple:
          'Normal human hemoglobin (HbA) folds four globin chains around four [[iron|atom-fe]]-bearing heme pockets. Because codon 6 (GAG) places water-friendly glutamate on the surface, every tetramer stays freely soluble inside red blood cells.',
        story:
          'Following the wild-type human *HBB* gene all the way from nuclear chromatin to folded [[protein|protein]] produces a smooth, globular beta-globin chain packed with eight [[alpha-helices|alpha-helix]]. Two beta chains pair with two alpha chains around four [[iron|atom-fe]]-centered heme groups to build soluble deoxyhemoglobin HbA. At beta position 6, the GAG codon installs negatively charged glutamate (-COO-) right on the exterior surface, repelling neighboring tetramers even at dense intracellular concentrations so flexible biconcave red blood cells squeeze effortlessly through capillaries to supply [[mitochondria|mitochondrion]] with O2.',
        blueprint: {
          role: 'Soluble alpha2-beta2 oxygen-transport tetramer demonstrating healthy wild-type GAG -> Glu6 folding output',
          arrivesFrom: 'Canonical *HBB* Exon 1 codon 6 (GAG -> mRNA GAG) translated on [[80S ribosomes|real-cd-ribo80]] and folded with heme [[Fe|atom-fe]]',
          inside: '64.5 kDa deoxy-HbA tetramer (PDB 2HHB) exposing polar, negatively charged Glu6 side chains along its outer beta-globin surface',
          deliversTo: 'Freely diffusing cytosolic oxygen transport supporting smooth erythrocyte flow and aerobic [[mitochondrial|mitochondrion]] respiration',
          loop: 'Comparing wild-type Glu6 against mutated Val6 reveals how one surface charge prevents catastrophic quaternary aggregation'
        },
        scientific:
          'Wild-type human adult deoxyhemoglobin A (HbA; alpha2-beta2 tetramer, ~64.5 kDa, ~5.5 nm diameter; crystal structure PDB 2HHB) carrying four protoporphyrin IX [[Fe2+|atom-fe]] heme groups nested within eight-helix myoglobin-fold [[alpha-helix|alpha-helix]] globin subunits. Coding *HBB* codon 6 (GAG) specifies surface-exposed polar anionic Glu6 (-COO-), maintaining high aqueous solubility (>300 mg/mL inside erythrocytes) without hydrophobic self-association, in sharp contrast to [[HbS|real-cd-hbs]] Glu6Val.',
        from: [
          { nodeId: 'real-cd-tric', label: 'Folded Globin Chains', cargo: 'Native 8-helix beta-globin' },
          { nodeId: 'atom-fe', label: 'Heme Iron Cofactor', cargo: 'Reversible O2 binding center' }
        ],
        to: [
          { nodeId: 'real-cd-hbs', label: 'HbA vs. HbS Toggle', cargo: 'Baseline wild-type Glu6 state' },
          { nodeId: 'mitochondrion', label: 'Cellular O2 Delivery', cargo: 'Aerobic respiration fuel' }
        ]
      },
      es: {
        subtitle: 'Hemoglobina humana nativa HbA (Glu6, PDB 2HHB)',
        simple:
          'La hemoglobina humana normal (HbA) pliega cuatro cadenas de globina alrededor de cuatro grupos hemo con [[hierro|atom-fe]]. Como el codón 6 (GAG) coloca glutamato hidrofílico en la superficie, cada tetrámero permanece soluble en el glóbulo rojo.',
        story:
          'Seguir el gen humano HBB nativo desde la cromatina nuclear hasta la [[proteína|protein]] plegada culmina en una beta-globina globular formada por ocho [[hélices alfa|alpha-helix]]. Dos cadenas beta se ensamblan con dos cadenas alfa y cuatro grupos hemo con [[hierro|atom-fe]] formando la desoxihemoglobina HbA soluble. En la posición beta 6, el codón GAG instala glutamato con carga negativa en la cara externa, repeliendo tetrámeros vecinos incluso a concentraciones altísimas para que los eritrocitos flexibles lleven O₂ sin obstrucciones a las [[mitocondrias|mitochondrion]].',
        blueprint: {
          role: 'Tetrámero α₂β₂ soluble transportador de oxígeno que muestra la salida nativa saludable del codón GAG→Glu6',
          arrivesFrom: 'Codón 6 canónico del exón 1 de HBB (GAG→ARNm GAG) traducido en [[ribosomas 80S|real-cd-ribo80]] y plegado con hemo [[Fe|atom-fe]]',
          inside: 'Tetrámero desoxi-HbA de 64,5 kDa (PDB 2HHB) que expone residuos polares aniónicos Glu6 en la superficie externa de sus cadenas beta',
          deliversTo: 'Transporte citosólico soluble de oxígeno que sostiene el flujo eritrocitario y la respiración [[mitocondrial|mitochondrion]]',
          loop: 'Comparar Glu6 nativo frente a Val6 mutado demuestra cómo una sola carga superficial evita una polimerización catastrófica'
        },
        scientific:
          'Desoxihemoglobina humana adulta nativa (HbA; tetrámero α₂β₂ de ~64,5 kDa, diámetro ~5,5 nm; estructura cristalina PDB 2HHB) portadora de cuatro grupos hemo de protoporfirina IX con [[Fe²⁺|atom-fe]] alojados en subunidades de ocho [[hélices alfa|alpha-helix]]. El codón 6 de HBB (GAG) codifica Glu6 polar aniónico en superficie, preservando su solubilidad (>300 mg/mL en eritrocitos) sin autoensamblaje hidrofóbico, frente a la variante [[HbS|real-cd-hbs]] Glu6Val.',
        from: [
          { nodeId: 'real-cd-tric', label: 'Globinas plegadas', cargo: 'Beta-globina nativa de 8 hélices' },
          { nodeId: 'atom-fe', label: 'Cofactor hierro del hemo', cargo: 'Centro reversible de unión a O₂' }
        ],
        to: [
          { nodeId: 'real-cd-hbs', label: 'Comparativa HbA / HbS', cargo: 'Estado nativo basal Glu6' },
          { nodeId: 'mitochondrion', label: 'Entrega celular de O₂', cargo: 'Respiración aerobia' }
        ]
      }
    },

    hb_sickle_fiber: {
      en: {
        subtitle: 'Sickle-Cell HbS Polymerizing Fiber (Glu6Val, PDB 2HBS)',
        simple:
          'Flipping one base from GAG to GTG swaps glutamate for water-repelling valine, making deoxygenated [[HbS|real-cd-hbs]] tetramers lock end-to-end into stiff fibers that bend red blood cells into sickles.',
        story:
          'Flipping a single [[A to T base|real-cd-mutation-atom]] in *HBB* codon 6 converts mRNA GAG into GUG, replacing polar Glu6 with nonpolar Val6 on the beta-globin surface. Under high oxygen, HbS stays soluble; once it unloads oxygen in deep capillaries, a complementary hydrophobic pocket (Phe85/Leu88) opens on neighboring beta chains and locks tightly onto that exposed Val6 bump. Tetramers stack into rigid fourteen-strand helical fibers that warp the red blood cell into a brittle sickle, causing recessive vaso-occlusion in HbS/HbS homozygotes while shielding HbA/HbS carriers from severe [[Plasmodium|real-plasmodium]] malaria.',
        blueprint: {
          role: 'Pathogenic 14-strand deoxy-HbS polymer fiber demonstrating single-base missense aggregation and balancing selection',
          arrivesFrom: 'Single A -> T point mutation in *HBB* codon 6 (GAG -> GTG; Glu6Val) tracked from [[codon atoms|real-cd-mutation-atom]] through [[80S ribosomes|real-cd-ribo80]]',
          inside: 'Exposed hydrophobic Val6 patch docking laterally into adjacent beta-globin Phe85/Leu88 pockets across deoxy-HbS tetramers (PDB 2HBS)',
          deliversTo: 'Rigid intracellular fibers deforming erythrocytes in HbS/HbS disease while conferring heterozygous malaria resistance against [[Plasmodium|real-plasmodium]]',
          loop: 'Balancing selection keeps the HbS allele prevalent where malaria mortality outweighs recessive sickle-cell fitness cost'
        },
        scientific:
          'Polymerized deoxygenated human sickle-cell hemoglobin [[HbS|real-cd-hbs]] (Glu6Val crystal lattice PDB 2HBS; *HBB* A -> T transversion converting GAG to GTG / mRNA GUG). In the deoxygenated T-state, the hydrophobic isopropyl side chain of Val6 inserts into the Phe85/Leu88 hydrophobic acceptor pocket of an adjacent beta-subunit, nucleating 14-strand ~21 nm helical fibers that rigidify erythrocytes. Homozygotes (HbS/HbS) suffer vaso-occlusive crises whereas heterozygotes (HbA/HbS) experience selective protection against severe [[Plasmodium falciparum|real-plasmodium]] malaria.',
        from: [
          { nodeId: 'real-cd-mutation-atom', label: 'A -> T Point Mutation', cargo: 'GAG -> GTG (Glu6 -> Val6)' },
          { nodeId: 'real-cd-hbs', label: 'Sickle HbS Node', cargo: 'Hydrophobic Val6 surface patch' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Malaria Balancing Selection', cargo: 'HbA/HbS heterozygote advantage' },
          { nodeId: 'real-cell', label: 'Erythrocyte Phenotype', cargo: 'Deoxygenated sickle deformation' }
        ]
      },
      es: {
        subtitle: 'Fibra polimerizante falciforme HbS (Glu6Val, PDB 2HBS)',
        simple:
          'Cambiar una sola base de GAG a GTG sustituye glutamato por valina hidrofóbica, haciendo que los tetrámeros desoxigenados de [[HbS|real-cd-hbs]] encajen unos con otros en fibras rígidas que curvan el glóbulo rojo en hoz.',
        story:
          'Cambiar una única [[base A por T|real-cd-mutation-atom]] en el codón 6 de HBB convierte el ARNm GAG en GUG, sustituyendo Glu6 polar por Val6 apolar en la superficie de la beta-globina. Con oxígeno alto, HbS sigue soluble; al liberar oxígeno en los capilares, se abre un bolsillo hidrofóbico complementario (Phe85/Leu88) en cadenas beta vecinas que atrapa ese saliente de Val6. Los tetrámeros se apilan en fibras helicoidales rígidas de catorce hebras que deforman el eritrocito en hoz: provocan oclusión vascular en homocigotos HbS/HbS pero protegen a portadores HbA/HbS frente a la malaria por [[Plasmodium|real-plasmodium]].',
        blueprint: {
          role: 'Fibra polimérica desoxi-HbS de 14 hebras que muestra agregación por mutación puntual y selección equilibradora',
          arrivesFrom: 'Mutación puntual única A→T en el codón 6 de HBB (GAG→GTG; Glu6Val) desde los [[átomos del codón|real-cd-mutation-atom]] hasta el [[ribosoma 80S|real-cd-ribo80]]',
          inside: 'Parche hidrofóbico expuesto Val6 acoplado lateralmente al bolsillo Phe85/Leu88 de tetrámeros desoxi-HbS vecinos (PDB 2HBS)',
          deliversTo: 'Fibras intracelulares rígidas que deforman eritrocitos en HbS/HbS y confieren resistencia heterocigota ante [[Plasmodium|real-plasmodium]]',
          loop: 'La selección equilibradora conserva el alelo HbS donde la protección antimalárica compensa el coste recesivo'
        },
        scientific:
          'Hemoglobina falciforme humana desoxigenada polimerizada [[HbS|real-cd-hbs]] (red cristalina Glu6Val PDB 2HBS; transversión A→T en HBB que muda GAG a GTG / ARNm GUG). En estado T desoxigenado, la cadena isopropilo apolar de Val6 encaja en el bolsillo hidrofóbico Phe85/Leu88 de una subunidad β vecina, nucleando fibras helicoidales de 14 hebras (~21 nm). Los homocigotos HbS/HbS padecen crisis vasooclusivas mientras los heterocigotos HbA/HbS resisten la malaria grave por [[Plasmodium falciparum|real-plasmodium]].',
        from: [
          { nodeId: 'real-cd-mutation-atom', label: 'Mutación puntual A→T', cargo: 'GAG→GTG (Glu6→Val6)' },
          { nodeId: 'real-cd-hbs', label: 'Nodo HbS falciforme', cargo: 'Parche superficial hidrofóbico Val6' }
        ],
        to: [
          { nodeId: 'real-plasmodium', label: 'Selección equilibradora', cargo: 'Ventaja heterocigota HbA/HbS' },
          { nodeId: 'real-cell', label: 'Fenotipo eritrocitario', cargo: 'Deformación falciforme hipóxica' }
        ]
      }
    },

    acrb_pocket: {
      en: {
        subtitle: 'E. coli AcrB Distal Efflux Pocket (Gly288Asp, PDB 5O66)',
        simple:
          'Inside the [[E. coli|real-bacterium]] [[AcrB|real-cd-acrb]] antibiotic pump, one G-to-A base change swaps glycine for aspartate, reshaping this drug-binding pocket so mutant bacteria pump out fluoroquinolones faster and survive.',
        story:
          'Switching the live mutation bench from human beta-globin to [[E. coli|real-bacterium]] demonstrates adaptive evolution in action. The trimeric [[AcrB|real-cd-acrb]] efflux pump channels antibiotics through a phenylalanine-lined distal binding pocket and expels them across the outer envelope using proton-motive energy. A single [[G-to-A transition|real-cd-mutation-atom]] at codon 288 (GGC -> GAC) replaces tiny Gly288 with polar charged Asp288, widening local hydration and tuning hydrogen-bond contacts with fluoroquinolones. In an antibiotic-rich environment, cells carrying that single nucleotide swap export drug faster and rapidly dominate through directional natural selection.',
        blueprint: {
          role: 'Adaptive bacterial multidrug efflux cavity showcasing beneficial single-base evolution under antibiotic selection',
          arrivesFrom: 'Single G -> A transition in *E. coli* *acrB* codon 288 (GGC -> GAC; Gly288Asp) translated on bacterial [[70S ribosomes|ribosome-70s]]',
          inside: 'Distal substrate-binding pocket of trimeric RND antiporter AcrB (PDB 5O66) cycling through Loose, Tight, and Open extrusion conformers',
          deliversTo: 'Remodeled pocket geometry boosting fluoroquinolone extrusion and bacterial survival across [[E. coli|real-bacterium]] populations',
          loop: 'When antibiotic selection pressure is present, resistant Asp288 carriers outcompete wild-type Gly288 cells generation by generation'
        },
        scientific:
          'Distal drug-binding pocket of the [[E. coli|real-bacterium]] AcrAB-TolC RND efflux transporter [[AcrB|real-cd-acrb]] (asymmetric trimer structure PDB 5O66). Proton translocation across the inner membrane drives functional rotation through Loose (L), Tight (T), and Open (O) states. A single G -> A transition (GGC -> GAC, Gly288Asp) reshapes the phenylalanine-rich distal pocket width and hydrogen-bonding polarity, altering fluoroquinolone binding orientation and increasing efflux resistance under directional natural selection.',
        from: [
          { nodeId: 'real-cd-mutation-atom', label: 'G -> A Transition', cargo: 'GGC -> GAC (Gly288 -> Asp288)' },
          { nodeId: 'ribosome-70s', label: 'Bacterial 70S Synthesis', cargo: 'Mutant AcrB RND subunit' }
        ],
        to: [
          { nodeId: 'real-cd-acrb', label: 'AcrB Evolution Node', cargo: 'Adaptive efflux pocket shift' },
          { nodeId: 'real-bacterium', label: 'E. coli Survival Sweep', cargo: 'Directional antibiotic selection' }
        ]
      },
      es: {
        subtitle: 'Bolsillo distal de eflujo AcrB en E. coli (Gly288Asp, PDB 5O66)',
        simple:
          'Dentro de la bomba antibiótica [[AcrB|real-cd-acrb]] de [[E. coli|real-bacterium]], un solo cambio G a A sustituye glicina por aspartato y remodela este bolsillo para que las bacterias mutantes expulsen fluoroquinolonas más rápido.',
        story:
          'Cambiar el banco de mutaciones en vivo desde la beta-globina humana a [[E. coli|real-bacterium]] muestra la evolución adaptativa en directo. La bomba trimérica [[AcrB|real-cd-acrb]] captura antibióticos en un bolsillo distal tapizado de fenilalaninas y los expulsa usando energía de protones. Una única [[transición G a A|real-cd-mutation-atom]] en el codón 288 (GGC→GAC) reemplaza la minúscula Gly288 por el residuo polar cargado Asp288, reajustando la hidratación y los contactos con fluoroquinolonas. En presencia del antibiótico, las bacterias con esa sola base cambiada bombean más rápido y dominan la población por selección direccional.',
        blueprint: {
          role: 'Cavidad bacteriana adaptativa de eflujo multifármaco que ilustra evolución puntual beneficiosa bajo selección antibiótica',
          arrivesFrom: 'Transición única G→A en el codón 288 de acrB en E. coli (GGC→GAC; Gly288Asp) traducida en [[ribosomas 70S|ribosome-70s]]',
          inside: 'Bolsillo distal de sustrato del antiportador trimérico RND AcrB (PDB 5O66) alternando conformaciones suelta, tensa y abierta',
          deliversTo: 'Geometría remodelada del bolsillo que aumenta la expulsión de fluoroquinolonas y la supervivencia en poblaciones de [[E. coli|real-bacterium]]',
          loop: 'Mientras persiste la presión antibiótica, las portadoras Asp288 superan generación tras generación a las cepas nativas Gly288'
        },
        scientific:
          'Bolsillo distal de unión a sustratos del transportador RND [[AcrB|real-cd-acrb]] del complejo AcrAB–TolC de [[E. coli|real-bacterium]] (trímero asimétrico PDB 5O66). El influjo de protones impulsa la rotación funcional por los estados Suelto (L), Tenso (T) y Abierto (O). Una única transición G→A (GGC→GAC, Gly288Asp) altera la anchura y polaridad del bolsillo rico en fenilalaninas, modificando la orientación de fluoroquinolonas y elevando la supervivencia por selección natural direccional.',
        from: [
          { nodeId: 'real-cd-mutation-atom', label: 'Transición G→A', cargo: 'GGC→GAC (Gly288→Asp288)' },
          { nodeId: 'ribosome-70s', label: 'Síntesis bacteriana 70S', cargo: 'Subunidad RND AcrB mutante' }
        ],
        to: [
          { nodeId: 'real-cd-acrb', label: 'Nodo Evolución AcrB', cargo: 'Remodelado adaptativo del bolsillo' },
          { nodeId: 'real-bacterium', label: 'Barrido en E. coli', cargo: 'Selección direccional antibiótica' }
        ]
      }
    },

    codon_atoms: {
      en: {
        subtitle: 'Atomic Codon-Anticodon Triplet & Point Substitution (0.1-1.0 nm)',
        simple:
          'At 0.1-to-1.0 nanometer scale, individual [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] atoms form exact hydrogen-bond patterns across each codon-anticodon triplet, showing how one base flip rewrites a [[protein|protein]].',
        story:
          'Everything upstream and downstream in the [[Central Dogma|real-central-dogma]] rests on sub-nanometer atomic geometry. Inside the 40S decoding center, three mRNA [[bases|base]] face three antiparallel [[tRNA|real-cd-trna]] anticodon bases across a 1.08-nanometer bridge, locking two hydrogen bonds on A=U pairs and three on G=C pairs spaced just 0.29 nanometers apart. Flipping a single adenine into thymine (GAG -> GTG) or guanine into adenine (GGC -> GAC) rearranges those exact nitrogen-hydrogen donors and oxygen acceptors, redirecting which [[amino acid|amino-acid]] enters [[HbS|real-cd-hbs]] or [[AcrB|real-cd-acrb]].',
        blueprint: {
          role: '0.1-1.0 nm atomic inspection bench connecting individual base hydrogen bonds directly to missense protein evolution',
          arrivesFrom: 'Ribose-[[sugar|sugar]]-[[phosphate|phosphate]] backbones and purine/pyrimidine [[bases|base]] verified by [[DNA Pol delta|real-cd-pol-delta]] and [[80S ribosomes|real-cd-ribo80]]',
          inside: 'Individual [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[Mg2+|atom-mg]] atoms forming 0.28-0.30 nm Watson-Crick H-bonds across GAG/GTG and GGC/GAC',
          deliversTo: 'Exact [[tRNA|real-cd-trna]] anticodon selection controlling [[Glu6Val|real-cd-hbs]] fiber assembly or [[Gly288Asp|real-cd-acrb]] antibiotic efflux',
          loop: 'One 0.3 nm atomic hydrogen-bond donor/acceptor switch scales five orders of magnitude up into organismal fitness and evolution'
        },
        scientific:
          'Atomic-resolution (0.1-1.0 nm) ball-and-stick representation of [[codon-anticodon|real-cd-mutation-atom]] triplet pairing across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], catalytic [[Mg2+|atom-mg]], and sulfur ([[S|atom-s]]). Standard Watson-Crick geometry maintains ~1.08 nm C1\'-C1\' width and ~0.28-0.30 nm N-H...O / N-H...N hydrogen-bond lengths (two in A=T/A=U, three in G=C). Live switching between GAG <-> GTG ([[HbS|real-cd-hbs]]) and GGC <-> GAC ([[AcrB|real-cd-acrb]]) visualizes exact donor/acceptor inversion driving missense [[amino-acid|amino-acid]] substitution.',
        from: [
          { nodeId: 'base', label: 'Nitrogenous Bases', cargo: 'Purine & pyrimidine H-bond rings' },
          { nodeId: 'atom-n', label: 'Atomic Donors & Acceptors', cargo: '0.29 nm N-H...O / N-H...N bonds' }
        ],
        to: [
          { nodeId: 'real-cd-mutation-atom', label: 'Atomic Mutation Node', cargo: '0.1-1.0 nm causal point-mutation scale' },
          { nodeId: 'real-cd-hbs', label: 'Macroscopic Phenotype', cargo: 'Single-base to 3D selection chain' }
        ]
      },
      es: {
        subtitle: 'Triplete atómico codón–anticodón y sustitución puntual (0,1–1,0 nm)',
        simple:
          'A escala de 0,1 a 1,0 nanómetros, átomos individuales de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]] forman patrones exactos de puentes de hidrógeno en cada codón–anticodón, mostrando cómo un giro de base reescribe una [[proteína|protein]].',
        story:
          'Todo el flujo del [[dogma central|real-central-dogma]] descansa sobre geometría atómica subnanométrica. En el centro decodificador 40S, tres [[bases|base]] del ARNm enfrentan tres bases antiparalelas del anticodón de [[ARNt|real-cd-trna]] separadas 1,08 nanómetros, cerrando dos enlaces de hidrógeno en pares A=U y tres en pares G≡C de apenas 0,29 nanómetros. Cambiar una sola adenina por timina (GAG→GTG) o guanina por adenina (GGC→GAC) invierte esos donadores de nitrógeno-hidrógeno y aceptores de oxígeno, redirigiendo qué [[aminoácido|amino-acid]] entra en [[HbS|real-cd-hbs]] o [[AcrB|real-cd-acrb]].',
        blueprint: {
          role: 'Banco atómico de 0,1–1,0 nm que enlaza puentes de hidrógeno individuales directamente con la evolución proteica puntual',
          arrivesFrom: 'Esqueletos [[azúcar|sugar]]–[[fosfato|phosphate]] y [[bases|base]] purinas/pirimidinas verificados por [[ADN Pol δ|real-cd-pol-delta]] y [[ribosomas 80S|real-cd-ribo80]]',
          inside: 'Átomos individuales de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[Mg²⁺|atom-mg]] formando puentes H Watson–Crick de 0,28–0,30 nm en GAG/GTG y GGC/GAC',
          deliversTo: 'Selección exacta del anticodón de [[ARNt|real-cd-trna]] que gobierna la fibra [[Glu6Val|real-cd-hbs]] o el eflujo [[Gly288Asp|real-cd-acrb]]',
          loop: 'Un único giro atómico de 0,3 nm en un puente de hidrógeno escala cinco órdenes de magnitud hasta la eficacia evolutiva'
        },
        scientific:
          'Representación atómica de bolas y varillas (0,1–1,0 nm) del apareamiento [[codón–anticodón|real-cd-mutation-atom]] en [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[Mg²⁺|atom-mg]] catalítico y [[S|atom-s]]. La geometría Watson–Crick mantiene un ancho C1\'–C1\' de ~1,08 nm y puentes de hidrógeno N–H···O / N–H···N de ~0,28–0,30 nm (dos en A=T/A=U, tres en G≡C). Alternar en vivo GAG↔GTG ([[HbS|real-cd-hbs]]) y GGC↔GAC ([[AcrB|real-cd-acrb]]) exhibe la inversión exacta donador/aceptor que sustituye un [[aminoácido|amino-acid]].',
        from: [
          { nodeId: 'base', label: 'Bases nitrogenadas', cargo: 'Anillos de purinas y pirimidinas' },
          { nodeId: 'atom-n', label: 'Donadores y aceptores atómicos', cargo: 'Enlaces N–H···O / N–H···N de 0,29 nm' }
        ],
        to: [
          { nodeId: 'real-cd-mutation-atom', label: 'Nodo Mutación Atómica', cargo: 'Escala causal puntual de 0,1–1,0 nm' },
          { nodeId: 'real-cd-hbs', label: 'Fenotipo macroscópico', cargo: 'Cadena de una base a la selección 3D' }
        ]
      }
    }
  }
};
