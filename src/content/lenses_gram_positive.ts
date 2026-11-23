import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 9 Phase 11 Gram-Positive & Endospore Explorer nodes and all 20 Standalone
 * Realistic Part Lenses (`gram_positive_realistic.html`) in `EN` & `ES` for
 * Gram-Positive Bacteria & Armored Endospores (Phase 11).
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const GRAM_POSITIVE_NODE_LENSES: NodeLensMap = {
  'real-gram-positive': {
    en: {
      simple:
        'A Gram-positive bacterium such as Bacillus subtilis wraps a single [[plasma membrane|plasma-membrane]] inside a [[thick peptidoglycan wall|real-gp-wall]] that holds purple Gram stain and resists high internal water pressure. When food runs out, it reshapes itself into a dormant [[armored endospore|real-gp-endospore]] built to outlast boiling heat and drought.',
      story:
        'Set a cutaway Bacillus subtilis rod beside Gram-negative [[E. coli|real-bacterium]] at identical magnification and the great architectural split across bacterial life appears immediately. Instead of hiding a wafer-thin wall beneath an outer [[LPS|lps]] membrane, this monoderm rod stacks fifteen to forty cross-linked [[peptidoglycan|real-gp-wall]] sheets stitched with [[teichoic acids|real-gp-teichoic]] directly outside one [[plasma membrane|plasma-membrane]], leaving [[PBP wall enzymes|real-gp-pbp]] exposed to beta-lactam antibiotics. When nutrients vanish, the cell abandons ordinary division, triggers [[asymmetric sporulation|real-gp-sporulation]], and packs one copy of its genome into a dehydrated [[endospore|real-gp-endospore]].',
      blueprint:
        'Role: Monoderm Gram-positive prokaryotic rod and endospore-forming survival specialist (~3-4 x 0.8 micrometers); Inputs: Nutrients, amino acids, divalent cations ([[Mg2+|atom-mg]], [[Ca2+|atom-ca]]), and Lipid II precursors across a porous [[thick wall|real-gp-wall]]; Inside: Single [[plasma membrane|plasma-membrane]], exposed [[PBPs|real-gp-pbp]], 4.22 Mbp circular [[DNA|dna]], [[70S ribosomes|ribosome-70s]], and polar [[sporulation|real-gp-sporulation]] machinery; Outputs: Vegetative daughter rods under growth or one stress-resistant [[armored endospore|real-gp-endospore]] under starvation.',
      scientific:
        'Bacillus subtilis model Gram-positive (monoderm) rod (~3.0-4.0 x 0.8 micrometers; ~20 atm cytoplasmic turgor pressure; 4.22 Mbp circular B-form [[dsDNA|dna]] encoding ~4,100 genes). Bounded by a single ~7 nm [[phospholipid|phospholipid]] bilayer and an external 20-80 nm (~40 nm in vegetative rods) multilayered [[peptidoglycan|real-gp-wall]] wall functionalized with anionic [[wall and lipoteichoic acids|real-gp-teichoic]], directly contrasting with diderm [[E. coli|real-bacterium]] and peptidoglycan-free [[Archaea|real-archaea]]. Nutrient depletion activates Spo0A-driven [[asymmetric sporulation|real-gp-sporulation]], yielding a metabolically dormant ~1.0 micrometer [[endospore|real-gp-endospore]] containing a dehydrated [[Ca-DPA core|real-gp-core]].'
    },
    es: {
      simple:
        'Una bacteria Gram-positiva como Bacillus subtilis rodea una sola [[membrana plasmática|plasma-membrane]] con una [[gruesa pared de peptidoglicano|real-gp-wall]] que retiene el tinte púrpura de Gram y soporta enorme presión osmótica. Cuando falta alimento, se reorganiza en una [[endospora blindada|real-gp-endospore]] capaz de resistir el hervor y la sequía.',
      story:
        'Colocar un bacilo seccionado de Bacillus subtilis junto a la Gram-negativa [[E. coli|real-bacterium]] a idéntica escala muestra al instante la gran división estructural de las bacterias. En lugar de esconder una pared mínima bajo una membrana externa de [[LPS|lps]], esta célula monodérmica apila de quince a cuarenta capas de [[peptidoglicano|real-gp-wall]] cosidas con [[ácidos teicoicos|real-gp-teichoic]] sobre una única [[membrana plasmática|plasma-membrane]], dejando sus [[enzimas PBP|real-gp-pbp]] expuestas a antibióticos β-lactámicos. Si los nutrientes se agotan, inicia la [[esporulación asimétrica|real-gp-sporulation]] y sella su genoma en una [[endospora|real-gp-endospore]] deshidratada.',
      blueprint:
        'Rol: Bacilo procariota Gram-positivo monodérmico especialista en latencia extrema (~3–4 × 0,8 µm) · Entradas: Nutrientes, aminoácidos, cationes divalentes ([[Mg²⁺|atom-mg]], [[Ca²⁺|atom-ca]]) y precursores Lípido II a través de la [[pared gruesa|real-gp-wall]] · Interior: Una sola [[membrana plasmática|plasma-membrane]], [[PBP|real-gp-pbp]] expuestas, [[ADN|dna]] circular de 4,22 Mpb, [[ribosomas 70S|ribosome-70s]] y maquinaria de [[esporulación|real-gp-sporulation]] · Salida: Bacilos hijos en crecimiento o una [[endospora blindada|real-gp-endospore]] ante inanición.',
      scientific:
        'Bacillus subtilis como modelo bacteriano Gram-positivo monodérmico (~3,0–4,0 × 0,8 µm; presión de turgencia ~20 atm; cromosoma circular de [[ADNbc|dna]] de 4,22 Mpb y ~4.100 genes). Delimitado por una sola bicapa de [[fosfolípidos|phospholipid]] (~7 nm) bajo una pared multicapa de [[peptidoglicano|real-gp-wall]] de 20–80 nm (~40 nm en fase vegetativa) cargada con [[ácidos teicoicos y lipoteicoicos|real-gp-teichoic]], en contraste directo con la envoltura didérmica de [[E. coli|real-bacterium]] y la ausencia de mureína en [[Archaea|real-archaea]]. La inanición activa Spo0A y la [[esporulación asimétrica|real-gp-sporulation]], formando una [[endospora|real-gp-endospore]] latente de ~1,0 µm con [[núcleo de Ca-DPA|real-gp-core]].'
    }
  },

  'real-gp-wall': {
    en: {
      simple:
        'A Gram-positive cell wall stacks fifteen to forty cross-linked layers of [[peptidoglycan|peptidoglycan]] directly outside a single [[plasma membrane|plasma-membrane]]. Because ethanol shrinks this thick mesh and traps crystal-violet dye inside, these bacteria stain deep purple under the Gram test.',
      story:
        'With roughly twenty atmospheres of internal water pressure pushing outward, Bacillus subtilis needs ten times more [[peptidoglycan|peptidoglycan]] than Gram-negative [[E. coli|real-bacterium]]. Builders on the outer face of the [[plasma membrane|plasma-membrane]] weave concentric hoops of alternating NAG and NAM sugars tied together by [[peptide cross-links|real-gp-crosslink]] and threaded with anionic [[teichoic acids|real-gp-teichoic]]. During a Gram stain, ethanol dehydrates this dense wall like a tightened mesh net trapping crystal-violet-iodine complexes inside, whereas washing away the outer [[LPS|lps]] layer of E. coli lets dye escape straight through its thin three-nanometer sheet.',
      blueprint:
        'Role: Heavy-duty 20-80 nm monoderm exoskeleton resisting ~20 atm turgor and determining Gram-positive purple staining; Inputs: Cytoplasmic Lipid II disaccharide-pentapeptide units flipped across the [[plasma membrane|plasma-membrane]] plus covalent [[WTA|real-gp-teichoic]] polymers; Inside: 15-40 cross-linked [[NAG-NAM|real-gp-crosslink]] glycan strata welded by exposed [[PBP transpeptidases|real-gp-pbp]]; Outputs: Mechanical burst protection, scaffold for Sortase-anchored surface [[proteins|protein]], and direct diffusion access for lysozyme and beta-lactams.',
      scientific:
        'Multilayered Gram-positive murein sacculus (20-80 nm thick; ~40 nm in Bacillus subtilis, ~15-40 concentric layers versus 2-7 nm / 1-3 layers in diderm [[E. coli|real-bacterium]] [[bacterial walls|bacterial-wall]]), sustaining ~20 atm osmotic turgor. Alternating beta-1,4-linked N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) chains carry stem peptides cross-linked by [[PBPs|real-gp-pbp]] (direct mDAP in B. subtilis; canonical pentaglycine Gly5 bridges in Staphylococcus) and C6-NAM-linked [[WTA|real-gp-teichoic]]. Ethanol decolorization contracts hydrated wall pores (~1-2 nm), retaining ~1.2-1.5 nm crystal-violet-iodine (CV-I) complexes.'
    },
    es: {
      simple:
        'La pared Gram-positiva apila de quince a cuarenta capas entrelazadas de [[peptidoglicano|peptidoglycan]] justo por fuera de una única [[membrana plasmática|plasma-membrane]]. Al contraerse con alcohol, esta malla espesa atrapa el tinte violeta y tiñe a la bacteria de púrpura en la prueba de Gram.',
      story:
        'Con unas veinte atmósferas de presión osmótica empujando desde dentro, Bacillus subtilis necesita diez veces más [[peptidoglicano|peptidoglycan]] que la Gram-negativa [[E. coli|real-bacterium]]. Las enzimas de la cara externa de la [[membrana plasmática|plasma-membrane]] tejen capas concéntricas de azúcares NAG y NAM unidas por [[puentes peptídicos|real-gp-crosslink]] y atravesadas por [[ácidos teicoicos|real-gp-teichoic]]. En la tinción de Gram, el alcohol deshidrata este muro denso como una red contraída que atrapa el complejo cristal violeta-yodo, mientras en E. coli disuelve el [[LPS|lps]] externo y lava el colorante a través de su lámina de tres nanómetros.',
      blueprint:
        'Rol: Exoesqueleto monodérmico de 20–80 nm que soporta ~20 atm de turgencia y define la tinción Gram-positiva · Entradas: Unidades Lípido II exportadas desde la [[membrana plasmática|plasma-membrane]] y cadenas covalentes de [[WTA|real-gp-teichoic]] · Interior: 15–40 estratos de [[NAG–NAM|real-gp-crosslink]] soldados por [[transpeptidasas PBP|real-gp-pbp]] expuestas · Salida: Resistencia mecánica, anclaje de [[proteínas|protein]] superficiales y acceso directo para lisozima y β-lactámicos.',
      scientific:
        'Sáculo multicapa de mureína Gram-positiva (20–80 nm de espesor; ~40 nm y 15–40 estratos en Bacillus subtilis frente a 2–7 nm y 1–3 capas en la [[pared bacteriana|bacterial-wall]] didérmica de [[E. coli|real-bacterium]]), capaz de soportar ~20 atm de turgencia. Hebras alternas de N-acetilglucosamina (NAG) y ácido N-acetilmurámico (NAM) con enlaces β-(1→4) se reticulan mediante [[PBP|real-gp-pbp]] (puente directo mDAP en B. subtilis; puente pentaglicina Gly₅ en Staphylococcus) junto a [[WTA|real-gp-teichoic]] unidos al C6 de NAM. El etanol contrae los poros (~1–2 nm) reteniendo complejos cristal violeta–yodo (CV–I, ~1,2–1,5 nm).'
    }
  },

  'real-gp-teichoic': {
    en: {
      simple:
        'Teichoic acids are negatively charged sugar-[[phosphate|phosphate]] ribbons woven vertically through the [[Gram-positive wall|real-gp-wall]]. They catch essential [[magnesium|atom-mg]] and [[calcium|atom-ca]] ions from the surroundings, reinforce the thick mesh, and guide cell-wall remodeling.',
      story:
        'Because Gram-positive bacteria have no outer [[LPS|lps]] membrane to regulate their outer surface charge, they build dense negatively charged ribbons straight through their [[peptidoglycan|real-gp-wall]] armor. Wall teichoic acids (WTA) attach covalently to NAM sugars inside the wall, while lipoteichoic acids (LTA) root into lipids of the underlying [[plasma membrane|plasma-membrane]] and span upward through the mesh. Together their repeating [[phosphate|phosphate]] backbones bind [[Mg2+|atom-mg]] and [[Ca2+|atom-ca]] counterions, keep wall-cutting autolysins cleanly positioned during growth, and help shield the cell against cationic antimicrobial peptides.',
      blueprint:
        'Role: Anionic polyol-phosphate surface polymers reinforcing wall architecture and cation homeostasis; Inputs: CDP-glycerol or CDP-ribitol precursors polymerized by TagF (WTA) and membrane phosphatidylglycerol cleaved by LtaS (LTA) using [[P|atom-p]] and [[O|atom-o]]; Inside: Negatively charged glycerol- and ribitol-[[phosphate|phosphate]] chains covalently tied to NAM C6 (WTA) or glycolipid-anchored in the [[plasma membrane|plasma-membrane]] (LTA); Outputs: Divalent cation buffering ([[Mg2+|atom-mg]], [[Ca2+|atom-ca]]), autolysin guidance, and surface adhesion control.',
      scientific:
        'Anionic Gram-positive cell-wall glycopolymers (up to ~50% of dry wall mass) comprising covalently NAM-C6-linked wall teichoic acids (WTA, poly-glycerol-phosphate or poly-ribitol-phosphate synthesized by TagF polymerase, PDB 3L7I) and membrane-anchored lipoteichoic acids (LTA, poly-glycerol-phosphate polymerized on glycolipid anchors by outer-leaflet LtaS, PDB 2W5Q). Repeating phosphodiester groups impart strong negative surface potential, chelating [[Mg2+|atom-mg]] and [[Ca2+|atom-ca]] near the [[plasma membrane|plasma-membrane]], regulating PBP/autolysin localization, and undergoing D-alanylation (DltABCD) to modulate charge against cationic host defenses.'
    },
    es: {
      simple:
        'Los ácidos teicoicos son cintas con carga negativa de azúcares y [[fosfato|phosphate]] tejidas verticalmente a través de la [[pared Gram-positiva|real-gp-wall]]. Capturan iones esenciales de [[magnesio|atom-mg]] y [[calcio|atom-ca]], refuerzan la malla y guían la remodelación de la pared.',
      story:
        'Como las bacterias Gram-positivas carecen de membrana externa con [[LPS|lps]] para regular la carga superficial, atraviesan su [[peptidoglicano|real-gp-wall]] con densas hebras aniónicas. Los ácidos teicoicos de pared (WTA) se enlazan covalentemente al azúcar NAM de la malla, mientras los ácidos lipoteicoicos (LTA) se anclan en los lípidos de la [[membrana plasmática|plasma-membrane]] y cruzan el espesor mural. Sus columnas repetitivas de [[fosfato|phosphate]] retienen cationes [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]], ordenan las autolisinas durante el crecimiento y modulan la defensa frente a péptidos catiónicos.',
      blueprint:
        'Rol: Polímeros aniónicos poliol-fosfato que refuerzan la pared y regulan cationes superficiales · Entradas: Precursores CDP-glicerol/ribitol polimerizados por TagF (WTA) y fosfatidilglicerol procesado por LtaS (LTA) con [[P|atom-p]] y [[O|atom-o]] · Interior: Cadenas negativas de glicerol- y ribitol-[[fosfato|phosphate]] fijadas al C6 de NAM (WTA) o a glucolípidos de la [[membrana plasmática|plasma-membrane]] (LTA) · Salida: Reserva local de [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]], guía de autolisinas y control de adhesión.',
      scientific:
        'Glicopolímeros aniónicos de la pared Gram-positiva (hasta ~50 % de la masa seca mural) integrados por ácidos teicoicos de pared unidos al C6 de NAM (WTA, poli-glicerol o poli-ribitol fosfato sintetizados por TagF, PDB 3L7I) y ácidos lipoteicoicos anclados en membrana (LTA, polimerizados en la cara externa por LtaS, PDB 2W5Q). Sus enlaces fosfodiéster confieren intensa carga negativa que quela [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]] junto a la [[membrana plasmática|plasma-membrane]], posiciona PBP y autolisinas, y se modula por D-alanilación (DltABCD).'
    }
  },

  'real-gp-pbp': {
    en: {
      simple:
        'Penicillin-binding proteins (PBPs) sit right on the outer face of the [[Gram-positive plasma membrane|plasma-membrane]] stitching new [[peptidoglycan|real-gp-wall]] strands together. Because no outer [[LPS|lps]] barrier hides them, beta-lactam antibiotics such as penicillin diffuse straight through the porous wall to jam them.',
      story:
        'Every time a Bacillus subtilis rod lengthens or prepares to divide, membrane-tethered PBP transpeptidases catch freshly exported Lipid II strands and weld neighboring peptide stems into load-bearing [[cross-links|real-gp-crosslink]], while neighboring Sortase A enzymes clip surface proteins onto the same scaffold. That open monoderm layout has a famous pharmacological consequence: without the outer [[LPS|lps]] membrane and [[porin|porin]] gatekeeping of [[E. coli|real-bacterium]], penicillin glides through the porous [[peptidoglycan|real-gp-wall]] and snaps covalently into the PBP serine active site like a jammed key breaking inside a lock, stopping wall repair until twenty atmospheres of internal pressure burst the cell.',
      blueprint:
        'Role: Outer-leaflet transpeptidase/transglycosylase wall builders and primary beta-lactam antibiotic target; Inputs: Lipid II glycan-pentapeptide precursors flipped from the cytoplasm across the [[plasma membrane|plasma-membrane]]; Inside: Catalytic serine transpeptidase cleft (B. subtilis PBP3 PDB 7BN9 / PBP4a PDB 2J9P) cleaving terminal [[D-Ala-D-Ala|real-gp-crosslink]] bonds to weld adjacent strands; Outputs: Covalently cross-linked [[peptidoglycan|real-gp-wall]] layers supporting ~20 atm turgor, or catastrophic wall lysis upon beta-lactam acylation.',
      scientific:
        'Membrane-anchored penicillin-binding proteins (high-molecular-weight Class A/B PBPs; Bacillus subtilis PBP3 crystal structure PDB 7BN9 ~8 nm and PBP4a-peptidoglycan mimetic complex PDB 2J9P) operating alongside Sortase A (PDB 2KID) on the outer leaflet of the monoderm [[plasma membrane|plasma-membrane]]. Active-site Ser nucleophiles attack the donor [[D-Ala-D-Ala|real-gp-crosslink]] peptide bond to form acyl-enzyme intermediates resolved by acceptor mDAP or Gly5 amines. Beta-lactam rings structurally mimic D-Ala-D-Ala, forming stable penicilloyl-Ser esters; clinical MRSA counters via low-affinity alternative PBP2a (PDB 1VQQ).'
    },
    es: {
      simple:
        'Las proteínas de unión a penicilina (PBP) trabajan sobre la cara externa de la [[membrana plasmática|plasma-membrane]] cosiendo nuevas hebras de [[peptidoglicano|real-gp-wall]]. Al no existir una membrana externa de [[LPS|lps]] que las cubra, los antibióticos β-lactámicos como la penicilina llegan sin obstáculos para bloquearlas.',
      story:
        'Cada vez que Bacillus subtilis crece o se divide, las transpeptidasas PBP sujetas a la membrana toman hebras recién exportadas de Lípido II y sueldan péptidos vecinos en [[enlaces cruzados|real-gp-crosslink]] resistentes, mientras la Sortasa A fija proteínas superficiales a la misma red. Esa arquitectura monodérmica abierta tiene una consecuencia farmacológica decisiva: sin la membrana externa de [[LPS|lps]] ni el filtro de [[porinas|porin]] de [[E. coli|real-bacterium]], la penicilina cruza la [[pared porosa|real-gp-wall]] y se clava covalentemente en la serina activa de la PBP como una llave partida en una cerradura, deteniendo el parcheo hasta que la turgencia revienta la célula.',
      blueprint:
        'Rol: Enzimas transpeptidasas/transglicosilasas constructoras de pared en la cara externa y diana directa de β-lactámicos · Entradas: Precursores Lípido II volteados desde el citoplasma por la [[membrana plasmática|plasma-membrane]] · Interior: Sitio activo con serina catalítica (PBP3 de B. subtilis PDB 7BN9 / PBP4a PDB 2J9P) que escinde [[D-Ala–D-Ala|real-gp-crosslink]] y une cadenas contiguas · Salida: Estratos reticulados de [[peptidoglicano|real-gp-wall]] frente a ~20 atm, o lisis osmótica tras acilación por penicilina.',
      scientific:
        'Proteínas de unión a penicilina ancladas a membrana (PBP de alto peso molecular clases A y B; PBP3 de Bacillus subtilis PDB 7BN9 ~8 nm y complejo PBP4a con mimético de peptidoglicano PDB 2J9P) que operan junto a Sortasa A (PDB 2KID) sobre la hemicapa externa de la [[membrana plasmática|plasma-membrane]] monodérmica. La serina nucleofílica escinde el enlace donador [[D-Ala–D-Ala|real-gp-crosslink]] formando un intermediario acil-enzima transferido a mDAP o Gly₅; los β-lactámicos imitan D-Ala–D-Ala acilando irreversiblemente la enzima, mecanismo eludido en SARM mediante PBP2a de baja afinidad (PDB 1VQQ).'
    }
  },

  'real-gp-sporulation': {
    en: {
      simple:
        'When starvation hits, Bacillus subtilis does not multiply into many spores like a [[fungus|real-fungal]]. Instead, one cell divides off-center, pumps a complete [[DNA|dna]] copy into the tiny polar chamber, swallows it whole, and wraps it into a single [[armored endospore|real-gp-endospore]].',
      story:
        'Bacterial sporulation is a survival transformation rather than reproduction: one vegetative rod sacrifices itself to build exactly one [[endospore|real-gp-endospore]], which later germinates back into one active cell. Starvation phosphorylates master regulator Spo0A, steering the [[FtsZ|real-gp-sporulation]] division ring from midcell to one pole to pinch off a miniature forespore. Because only thirty percent of the chromosome gets trapped initially, a septum-mounted SpoIIIE motor burns ATP to haul the remaining [[DNA|dna]] across the pore before the mother cell engulfs the forespore, feeds it through SpoIIIAH-SpoIIQ channels, layers its armor, and lyses to release the finished survival vault.',
      blueprint:
        'Role: Seven-stage asymmetric differentiation converting 1 starving vegetative rod into 1 dormant [[endospore|real-gp-endospore]]; Inputs: Nutrient-depletion phosphorylation cascade activating Spo0A, duplicated 4.22 Mbp [[dsDNA|dna]], and mother-cell ATP/amino acids; Inside: Polar FtsZ Z-ring (PDB 2VXY), hexameric SpoIIIE DNA translocase (PDB 2IUU), and double-membrane SpoIIIAH-SpoIIQ feeding channel (PDB 3UZ0) driving compartmentalized sigma-F/E/G/K gene programs; Outputs: Liberated concentric [[armored endospore|real-gp-endospore]] upon programmed mother-cell lysis.',
      scientific:
        'Asymmetric endosporulation developmental program in Bacillus subtilis (~7-8 hours total; 1 vegetative cell -> 1 [[endospore|real-gp-endospore]] -> 1 germinated cell, non-reproductive unlike [[fungal|real-fungal]] conidia). Phosphorylated Spo0A~P redirects FtsZ polymers (PDB 2VXY) from midcell to a polar septum trapping the origin-proximal ~30% of one 4.22 Mbp [[dsDNA|dna]] copy; septal hexameric AAA+ translocase SpoIIIE (FtsK family, PDB 2IUU) pumps the remaining ~70% into the forespore. Mother-cell membrane engulfment establishes SpoIIIAH-SpoIIQ trans-envelope feeding channels (PDB 3UZ0) while alternating forespore (sigma-F, sigma-G) and mother-cell (sigma-E, sigma-K) regulons build cortex, coat, and [[Ca-DPA|real-gp-core]].'
    },
    es: {
      simple:
        'Cuando llega el hambre, Bacillus subtilis no se multiplica en decenas de esporas como un [[hongo|real-fungal]]. En su lugar, una célula se divide junto a un polo, bombea una copia íntegra de su [[ADN|dna]] a esa pequeña cámara, la engloba entera y la convierte en una única [[endospora blindada|real-gp-endospore]].',
      story:
        'La esporulación bacteriana es una transformación de supervivencia y no una reproducción: un bacilo vegetativo se sacrifica para fabricar una sola [[endospora|real-gp-endospore]], que luego germinará en una sola célula. La falta de nutrientes fosforila al regulador Spo0A y desplaza el anillo FtsZ desde el centro hacia un polo, aislando una pequeña preespora. Como inicialmente solo entra un treinta por ciento del cromosoma, el motor septal SpoIIIE consume ATP para arrastrar el resto del [[ADN|dna]] antes de que la célula madre englobe la cámara, la nutra mediante canales SpoIIIAH–SpoIIQ, deposite su armadura y se lise para liberarla.',
      blueprint:
        'Rol: Diferenciación asimétrica en siete etapas que convierte 1 bacilo hambriento en 1 [[endospora|real-gp-endospore]] latente · Entradas: Señal de inanición por Spo0A~P, [[ADNbc|dna]] replicado de 4,22 Mpb y ATP/precursores de la célula madre · Interior: Anillo polar FtsZ (PDB 2VXY), translocasa hexamérica de ADN SpoIIIE (PDB 2IUU) y canal alimentador SpoIIIAH–SpoIIQ (PDB 3UZ0) bajo factores σF/σE/σG/σK · Salida: [[Endospora blindada|real-gp-endospore]] liberada tras la lisis programada de la célula madre.',
      scientific:
        'Programa de endosporulación asimétrica en Bacillus subtilis (~7–8 h; 1 célula vegetativa → 1 [[endospora|real-gp-endospore]] → 1 célula germinada, estrictamente no reproductivo a diferencia de esporas [[fúngicas|real-fungal]]). Spo0A~P reubica el anillo FtsZ (PDB 2VXY) en un tabique polar que captura ~30 % proximal al origen de una copia de [[ADNbc|dna]] (4,22 Mpb); la translocasa septal hexamérica AAA+ SpoIIIE (familia FtsK, PDB 2IUU) bombea el ~70 % restante a la preespora. El englobamiento establece canales transenvoltura SpoIIIAH–SpoIIQ (PDB 3UZ0) coordinando cascadas σF/σG y σE/σK que sintetizan corteza, cubierta y [[Ca-DPA|real-gp-core]].'
    }
  },

  'real-gp-endospore': {
    en: {
      simple:
        'A dormant bacterial endospore is a miniature concentric survival chamber built to endure boiling water, radiation, disinfectants, and centuries of drought. Beneath its outer exosporium, cross-linked protein coat, and thick modified cortex sits a dry, silent [[core|real-gp-core]] waiting for nutrients to return.',
      story:
        'Once mother-cell lysis sets this one-micrometer oval free, ordinary Gram stain bounces off its sealed armor, leaving a glowing refractile body under phase microscopy. Cutting it open reveals five coordinated defensive shells: an outer glycoprotein exosporium halo, a tough cysteine-cross-linked protein coat blocking lysozyme and bleach, a thick modified peptidoglycan cortex holding water out, an intact germ cell wall reserved for future rebirth, and a compressed inner membrane guarding the [[dehydrated Ca-DPA core|real-gp-core]]. When amino acids finally trigger GerA receptors, the spore dumps its calcium shield, dissolves its cortex via SleB, rehydrates within minutes, and walks back out as a living [[Bacillus subtilis|real-gram-positive]] rod.',
      blueprint:
        'Role: Metabolically inert concentric survival structure (~1.0 x 0.7 micrometers) resisting heat, UV, desiccation, and chemicals; Inputs: Assembled during [[asymmetric sporulation|real-gp-sporulation]] from mother-cell coat proteins, cortex PG, and imported [[Ca-DPA|real-gp-core]]; Inside: Outer exosporium, 50-100 nm CotA/CotE protein coat (PDB 1GSK), 50-100 nm muramic-delta-lactam cortex + SleB (PDB 4FET), germ cell wall, compressed inner membrane, and dehydrated [[core|real-gp-core]]; Outputs: Multi-decade dormancy and rapid GerA/SpoVA/SleB germination back into one vegetative [[bacterium|real-gram-positive]].',
      scientific:
        'Dormant Bacillus subtilis endospore (~1.0-1.2 x 0.7 micrometers refractile ovoid; zero measurable metabolic rate; wet-heat tolerance >100 C, high UV/gamma and chemical resistance). Concentric architecture from outside in: (1) outer exosporium/crust glycoprotein layer; (2) 50-100 nm multilayered protein coat (>70 cross-linked polypeptides including outer-coat laccase CotA, PDB 1GSK, and morphogenetic CotE) excluding lysozyme and solvents; (3) outer forespore membrane remnant; (4) 50-100 nm low-crosslink peptidoglycan cortex containing muramic-delta-lactam recognized specifically during germination by SleB lytic transglycosylase (PDB 4FET); (5) thin primordial germ cell wall; and (6) low-fluidity inner spore membrane housing GerA nutrient receptors and SpoVA channels around the [[core|real-gp-core]].'
    },
    es: {
      simple:
        'Una endospora bacteriana latente es una diminuta cámara concéntrica diseñada para resistir agua hirviendo, radiación, desinfectantes y siglos de sequía. Bajo su exosporio externo, su cubierta proteica y su corteza espesa aguarda un [[núcleo seco|real-gp-core]] en silencio total hasta que regresen los nutrientes.',
      story:
        'Una vez que la lisis de la célula madre libera este óvalo de un micrómetro, la tinción de Gram común no consigue penetrar su blindaje hermético. Al seccionarla se distinguen cinco barreras concéntricas: un halo externo de exosporio, una cubierta proteica reticulada por cisteínas que bloquea lisozima y oxidantes, una corteza gruesa de peptidoglicano modificado que mantiene la deshidratación, una pared germinal reservada para el despertar y una membrana interna comprimida alrededor del [[núcleo de Ca-DPA|real-gp-core]]. Cuando reaparecen aminoácidos en los receptores GerA, la espora expulsa el calcio, disuelve la corteza con SleB, se rehidrata en minutos y emerge de nuevo como bacilo [[Bacillus subtilis|real-gram-positive]].',
      blueprint:
        'Rol: Estructura concéntrica metabólicamente inerte (~1,0 × 0,7 µm) inmune a calor, UV, sequía y agentes químicos · Entradas: Construida en la [[esporulación asimétrica|real-gp-sporulation]] con proteínas de cubierta, corteza PG y [[Ca-DPA|real-gp-core]] maternos · Interior: Exosporio, cubierta proteica CotA/CotE (50–100 nm, PDB 1GSK), corteza con murámico-δ-lactama y SleB (PDB 4FET), pared germinal, membrana interna comprimida y [[núcleo|real-gp-core]] seco · Salida: Latencia prolongada y germinación veloz vía GerA/SpoVA/SleB hacia un bacilo [[vegetativo|real-gram-positive]].',
      scientific:
        'Endospora latente de Bacillus subtilis (ovoide refráctil de ~1,0–1,2 × 0,7 µm; metabolismo indetectable; resistencia térmica húmeda >100 °C, UV/gamma y desinfectantes). Capas concéntricas de fuera a dentro: (1) exosporio/costra glicoproteica; (2) cubierta proteica multicapa de 50–100 nm (>70 polipéptidos reticulados, incluida la lacasa externa CotA PDB 1GSK y CotE) impermeable a lisozima y disolventes; (3) remanente de membrana externa; (4) corteza de peptidoglicano poco reticulado (50–100 nm) con murámico-δ-lactama degradada al germinar por la transglicosilasa lítica SleB (PDB 4FET); (5) pared germinal primordial; y (6) membrana interna de baja fluidez con receptores GerA y canales SpoVA rodeando el [[núcleo|real-gp-core]].'
    }
  },

  'real-gp-core': {
    en: {
      simple:
        'Deep inside the [[endospore|real-gp-endospore]], the core strips away most free [[water|water]] and packs the cytoplasm with [[calcium|atom-ca]]-dipicolinate gel and small protective SASP proteins. Locked in this dry glassy state, chromosomal [[DNA|dna]] and enzymes survive boiling heat and ultraviolet light intact.',
      story:
        'Ordinary living cells hold roughly eighty percent liquid [[water|water]], which boils, hydrolyzes bonds, and lets proteins unfold above seventy degrees Celsius. The maturing forespore replaces most of that water by importing huge quantities of mother-cell dipicolinic acid chelated one-to-one with [[calcium ions|atom-ca]], forming a dense vitrified gel that immobilizes every dormant enzyme and [[70S ribosome|ribosome-70s]]. Simultaneously, alpha/beta-SASP sleeves saturate the entire 4.22-megabase chromosome and twist [[DNA|dna]] into tight A-form geometry, turning the core into a sealed biological time-capsule vault where ultraviolet light cannot forge lethal thymine dimers.',
      blueprint:
        'Role: Low-water vitrified central compartment preserving chromosome and translation machinery in suspended animation; Inputs: Complete 4.22 Mbp [[dsDNA|dna]], dormant [[70S ribosomes|ribosome-70s]], forespore-synthesized alpha/beta-SASPs, and mother-cell dipicolinic acid + [[Ca2+|atom-ca]] imported via SpoVA channels; Inside: ~25-45% water content, ~10-15% dry-weight 1:1 [[Ca-DPA|real-gp-crosslink]] chelate matrix, and SASP-bound A-form [[DNA|dna]] (PDB 2Z3X) at lowered pH (~6.3); Outputs: Extreme wet-heat, UV, and desiccation survival until GerA triggers rapid Ca-DPA release and rehydration.',
      scientific:
        'Dehydrated central protoplast of the [[Bacillus subtilis endospore|real-gp-endospore]] characterized by ~25-45% water content (versus ~80% in vegetative cells), mildly acidic internal pH (~6.3-6.5), and vitrified high viscosity that suppresses thermal denaturation of core [[proteins|protein]] and dormant [[70S ribosomes|ribosome-70s]]. Mother-cell-synthesized pyridine-2,6-dicarboxylic acid (DPA) imported via inner-membrane SpoVA channels chelates [[Ca2+|atom-ca]] at 1:1 stoichiometry to comprise ~10-15% of total spore dry mass. Concurrently, alpha/beta-type small acid-soluble spore proteins (SASPs, PDB 2Z3X) coat chromosomal [[dsDNA|dna]], shifting B-form to A-form and diverting UV photochemistry from cyclobutane pyrimidine dimers to easily repaired spore photoproduct.'
    },
    es: {
      simple:
        'En el centro de la [[endospora|real-gp-endospore]], el núcleo elimina casi toda el [[agua|water]] libre y rellena el citoplasma con gel de dipicolinato de [[calcio|atom-ca]] y proteínas protectoras SASP. En este estado seco y vítreo, el [[ADN|dna]] y las enzimas resisten el hervor y la luz ultravioleta sin dañarse.',
      story:
        'Las células activas contienen cerca de un ochenta por ciento de [[agua|water]] líquida, que hierve, rompe enlaces y desnaturaliza proteínas al superar los setenta grados. La preespora madura desplaza gran parte de esa agua importando enormes cantidades de ácido dipicolínico materno unido uno a uno con [[iones calcio|atom-ca]], generando un gel vitrificado que inmoviliza cada enzima y [[ribosoma 70S|ribosome-70s]] latente. Al mismo tiempo, las fundas proteicas α/β-SASP saturan el cromosoma de 4,22 megabases y tuercen el [[ADN|dna]] hacia la geometría A, convirtiendo el núcleo en una cápsula biológica del tiempo inmune a dímeros de timina por radiación UV.',
      blueprint:
        'Rol: Compartimento central vitrificado con baja agua que preserva el genoma y ribosomas en latencia · Entradas: [[ADNbc|dna]] completo de 4,22 Mpb, [[ribosomas 70S|ribosome-70s]] latentes, α/β-SASP propias y dipicolinato + [[Ca²⁺|atom-ca]] importados vía SpoVA · Interior: ~25–45 % de agua, gel quelado 1:1 de [[Ca-DPA|real-gp-crosslink]] (~10–15 % peso seco) y [[ADN|dna]] en forma A con SASP (PDB 2Z3X) a pH ~6,3 · Salida: Resistencia extrema a calor húmedo, UV y sequía hasta la descarga de Ca-DPA por GerA.',
      scientific:
        'Protoplasto central deshidratado de la [[endospora de Bacillus subtilis|real-gp-endospore]] con ~25–45 % de contenido hídrico (frente a ~80 % vegetativo), pH interno ~6,3–6,5 y estado vítreo de altísima viscosidad que impide el desplegamiento térmico de [[proteínas|protein]] y [[ribosomas 70S|ribosome-70s]]. El ácido piridin-2,6-dicarboxílico (DPA) materno importado por canales SpoVA quela [[Ca²⁺|atom-ca]] en estequiometría 1:1 representando ~10–15 % del peso seco total. Paralelamente, las proteínas α/β-SASP (PDB 2Z3X) recubren el [[ADNbc|dna]] induciendo transición B→A que evita dímeros pirimidínicos ciclobutánicos bajo UV.'
    }
  },

  'real-gp-crosslink': {
    en: {
      simple:
        'Zooming down to single molecules shows the two chemical anchors of Gram-positive survival: repeating sugar strands stapled by [[D-amino-acid|amino-acid]] cross-links in the [[cell wall|real-gp-wall]], and [[calcium|atom-ca]] ions locked inside dipicolinate rings inside the [[spore core|real-gp-core]].',
      story:
        'At one nanometer, the entire physiology of Bacillus subtilis reduces to exact covalent and ionic geometry built from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[Ca|atom-ca]]. Along the vegetative [[wall|real-gp-wall]], [[glucose|glucose]]-derived NAG and NAM sugars link via beta-1,4 bonds while [[PBP enzymes|real-gp-pbp]] clip a terminal D-alanine off D-Ala-D-Ala stems to weld adjacent glycan hoops together - the exact peptide geometry beta-lactam rings copy to poison the enzyme. Inside the dormant [[endospore core|real-gp-core]], a completely different small molecule takes over: planar pyridine-2,6-dicarboxylate rings grip divalent [[calcium ions|atom-ca]] through three coordinating atoms to lock water out and stabilize dry cellular chemistry.',
      blueprint:
        'Role: Molecular-to-atomic nexus (0.1-3 nm) uniting vegetative wall cross-linking and dormant spore chelation; Inputs: [[Glucose|glucose]]-derived NAG/NAM, L/D-[[amino acids|amino-acid]], glycerol/ribitol [[phosphates|phosphate]], dipicolinate, and [[Ca2+|atom-ca]] built from [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]]; Inside: Beta-1,4 glycan strands + mDAP/Gly5/D-Ala-D-Ala transpeptidation joints beside tridentate 1:1 [[Ca2+|atom-ca]]-dipicolinate chelates; Outputs: Structural wall tension, beta-lactam drug specificity, and vitrified spore thermal stability.',
      scientific:
        'Sub-nanometer to molecular structural comparison (0.1-3 nm) of Gram-positive survival chemistry: (1) vegetative [[peptidoglycan|real-gp-wall]] beta-1,4-linked GlcNAc-MurNAc chains carrying stem peptides (L-Ala-D-iGlu-mDAP-D-Ala-D-Ala in B. subtilis; pentaglycine Gly5 interpeptide bridge in S. aureus) cross-linked via [[PBP|real-gp-pbp]] transpeptidation and C6-NAM phosphodiester [[teichoic|real-gp-teichoic]] polyols; and (2) tridentate coordination of [[Ca2+|atom-ca]] by planar pyridine-2,6-dicarboxylate (DPA, C7H3NO4^2-) via ring [[N|atom-n]] and dual carboxylate [[O|atom-o]] atoms assembling the vitrified [[Ca-DPA|real-gp-core]] core matrix.'
    },
    es: {
      simple:
        'Acercarse hasta moléculas individuales revela los dos anclajes químicos de la supervivencia Gram-positiva: hebras de azúcares grapadas por puentes de [[D-aminoácidos|amino-acid]] en la [[pared celular|real-gp-wall]], e iones de [[calcio|atom-ca]] atrapados en anillos de dipicolinato dentro del [[núcleo de la espora|real-gp-core]].',
      story:
        'A escala de un nanómetro, toda la fisiología de Bacillus subtilis se resume en geometría covalente e iónica construida con [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[Ca|atom-ca]]. En la [[pared vegetativa|real-gp-wall]], azúcares NAG y NAM derivados de [[glucosa|glucose]] se enlazan por uniones β-1,4 mientras las [[enzimas PBP|real-gp-pbp]] cortan una D-alanina terminal de D-Ala–D-Ala para soldar aros vecinos: exactamente la forma que imita el anillo β-lactámico de la penicilina. En el [[núcleo latente|real-gp-core]], otra molécula toma el relevo: anillos de piridin-2,6-dicarboxilato sujetan [[iones calcio|atom-ca]] divalentes con tres puntos de coordinación para desplazar el agua.',
      blueprint:
        'Rol: Nexo molecular y atómico (0,1–3 nm) que une la reticulación mural vegetativa con la quelación de la espora · Entradas: NAG/NAM de [[glucosa|glucose]], L/D-[[aminoácidos|amino-acid]], [[fosfatos|phosphate]] teicoicos, dipicolinato y [[Ca²⁺|atom-ca]] de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]] · Interior: Hebras β-1,4 + puentes mDAP/Gly₅/D-Ala–D-Ala junto a quelatos tridentados 1:1 de [[Ca²⁺|atom-ca]]–dipicolinato · Salida: Tensión mural, especificidad β-lactámica y vitrificación térmica.',
      scientific:
        'Comparativa estructural molecular y atómica (0,1–3 nm) de la química Gram-positiva: (1) cadenas de [[peptidoglicano|real-gp-wall]] β-(1→4)-GlcNAc–MurNAc con péptidos tallo (L-Ala–D-iGlu–mDAP–D-Ala–D-Ala en B. subtilis; puente pentaglicina Gly₅ en S. aureus) reticulados por transpeptidación [[PBP|real-gp-pbp]] y enlaces fosfodiéster [[teicoicos|real-gp-teichoic]] en C6 de NAM; y (2) coordinación tridentada de [[Ca²⁺|atom-ca]] por piridin-2,6-dicarboxilato plano (DPA, C₇H₃NO₄²⁻) mediante su [[N|atom-n]] piridínico y dos [[O|atom-o]] carboxilato que estructuran el gel [[Ca-DPA|real-gp-core]].'
    }
  },

  'atom-ca': {
    en: {
      simple:
        'Calcium is a double-positive metal atom that acts as a versatile molecular bridge across living cells. Inside bacterial [[endospores|real-gp-endospore]], millions of calcium ions lock onto dipicolinic acid to pack the dry [[core|real-gp-core]] against extreme heat; on Gram-positive surfaces, they stabilize negative [[teichoic walls|real-gp-teichoic]].',
      story:
        'Born in ancient supernovae and drawn from soil minerals into growing [[Bacillus subtilis|real-gram-positive]], this alkaline-earth cation carries two positive charges over a spacious ionic shell that comfortably clasps six to eight [[oxygen|atom-o]] and [[nitrogen|atom-n]] donors at once. On vegetative rods, divalent calcium cross-bridges negatively charged [[phosphate|phosphate]] groups along [[teichoic acid|real-gp-teichoic]] ribbons to stiffen the wall; during [[sporulation|real-gp-sporulation]], mother cells pump enormous reserves of calcium into the forespore to chelate dipicolinic acid one-to-one, turning liquid cytoplasm into a heat-proof [[Ca-DPA|real-gp-core]] gel until germination releases the ion flood.',
      blueprint:
        'Role: Divalent alkaline-earth ionic cross-linker (Ca2+) driving endospore core vitrification and wall stabilization; Inputs: Environmental Ca2+ uptake across the [[plasma membrane|plasma-membrane]] and SpoVA import into the maturing forespore; Inside: Element Z = 20 ion (ionic radius 1.00-1.14 angstroms, 6-8 coordination) chelating pyridine-2,6-dicarboxylate [[N|atom-n]]/[[O|atom-o]] pockets and anionic [[phosphate|phosphate]] backbones; Outputs: 1:1 [[Ca-DPA|real-gp-crosslink]] core thermal armor (~10-15% spore dry mass), stabilized [[teichoic acids|real-gp-teichoic]], and universal signaling in [[eukaryotic cells|real-cell]].',
      scientific:
        'Alkaline-earth metal element Z = 20 (40Ca standard atomic weight 40.078 Da; physiological divalent cation Ca2+, ionic radius 1.00 angstroms at coordination number 6 to 1.12-1.14 angstroms at CN 8, contrasting with smaller octahedral [[Mg2+|atom-mg]] at 0.72 angstroms). Flexible high coordination geometry enables rapid, high-affinity tridentate chelation with dipicolinic acid (DPA) at 1:1 molar ratio inside the [[endospore core|real-gp-core]] (~10-15% dry spore weight), ionic cross-bridging of polyanionic [[WTA/LTA|real-gp-teichoic]] phosphates, and fast EF-hand signaling transitions across [[eukaryotes|real-cell]].'
    },
    es: {
      simple:
        'El calcio es un átomo metálico con doble carga positiva que funciona como puente molecular versátil en toda célula viva. Dentro de las [[endosporas|real-gp-endospore]], millones de iones calcio se enlazan al ácido dipicolínico para sellar el [[núcleo seco|real-gp-core]] frente al calor extremo, y en la superficie estabilizan los [[ácidos teicoicos|real-gp-teichoic]].',
      story:
        'Forjado en antiguas supernovas y absorbido del suelo mineral por [[Bacillus subtilis|real-gram-positive]], este catión alcalinotérreo porta dos cargas positivas sobre una esfera iónica capaz de coordinar entre seis y ocho átomos donadores de [[oxígeno|atom-o]] y [[nitrógeno|atom-n]] a la vez. En los bacilos activos, el calcio divalente enlaza [[fosfatos|phosphate]] negativos en los [[ácidos teicoicos|real-gp-teichoic]] para dar firmeza a la pared; durante la [[esporulación|real-gp-sporulation]], la célula madre bombea enormes reservas de calcio hacia la preespora para quelar ácido dipicolínico en proporción uno a uno y vitrificar el [[núcleo Ca-DPA|real-gp-core]].',
      blueprint:
        'Rol: Catión metálico divalente (Ca²⁺) que vitrifica el núcleo de las endosporas y estabiliza paredes aniónicas · Entradas: Captación ambiental de Ca²⁺ en la [[membrana plasmática|plasma-membrane]] e importación vía SpoVA hacia la preespora · Interior: Elemento Z = 20 (radio iónico 1,00–1,14 Å, coordinación 6–8) quelando sitios [[N|atom-n]]/[[O|atom-o]] del dipicolinato y [[fosfatos|phosphate]] teicoicos · Salida: Blindaje térmico [[Ca-DPA|real-gp-crosslink]] 1:1 (~10–15 % peso seco), firmeza en [[teicoicos|real-gp-teichoic]] y señalización en [[células eucariotas|real-cell]].',
      scientific:
        'Metal alcalinotérreo Z = 20 (⁴⁰Ca masa atómica estándar 40,078 Da; catión fisiológico Ca²⁺, radio iónico de 1,00 Å con índice de coordinación 6 hasta 1,12–1,14 Å con IC 8, frente al [[Mg²⁺|atom-mg]] octaédrico más compacto de 0,72 Å). Su geometría flexible de alta coordinación permite la quelación tridentada 1:1 con ácido dipicolínico (DPA) en el [[núcleo de la endospora|real-gp-core]] (~10–15 % del peso seco), el puenteo electrostático de los [[ácidos teicoicos|real-gp-teichoic]] y la señalización rápida en [[eucariotas|real-cell]].'
    }
  }
};

export const GRAM_POSITIVE_PART_LENSES: PagePartLensMap = {
  'gram_positive_realistic.html': {
    pg_wall: {
      en: {
        subtitle: 'Thick Multilayered Peptidoglycan Wall (20-80 nm)',
        simple:
          'Wrapping the entire [[Bacillus subtilis|real-gram-positive]] rod, this 40-nanometer [[peptidoglycan wall|real-gp-wall]] stacks dozens of cross-linked sugar-peptide sheets to withstand twenty atmospheres of internal water pressure and trap purple Gram stain.',
        story:
          'Fresh Lipid II building blocks flip out from the single [[plasma membrane|plasma-membrane]] below, where exposed [[PBP transpeptidases|real-gp-pbp]] weave them into fifteen to forty layered hoops of alternating NAG and NAM sugars cross-stitched by [[peptide bridges|real-gp-crosslink]]. Threading straight through the mesh are negatively charged [[teichoic acids|real-gp-teichoic]]. During Gram staining, ethanol dehydrates this dense matrix so its nanometer pores shrink around crystal-violet-iodine complexes and lock the purple color inside.',
        blueprint: {
          role: 'Load-bearing 20-80 nm monoderm murein sacculus resisting ~20 atm cytoplasmic turgor and retaining CV-I dye',
          arrivesFrom: 'Lipid II disaccharide-pentapeptide units exported across the [[plasma membrane|plasma-membrane]] and woven by [[PBPs|real-gp-pbp]]',
          inside: '15-40 concentric beta-1,4 [[NAG-NAM|real-gp-crosslink]] glycan sheets covalently functionalized with [[WTA|real-gp-teichoic]]',
          deliversTo: 'Mechanical burst protection, surface protein anchorage, and direct diffusion path to outer-leaflet [[PBPs|real-gp-pbp]]',
          loop: 'Ethanol shrinks hydrated wall pores from >2 nm to ~1-2 nm, trapping ~1.2-1.5 nm CV-I complexes for purple Gram staining'
        },
        scientific:
          'Multilayered Gram-positive [[peptidoglycan|real-gp-wall]] sacculus (~40 nm thick in vegetative Bacillus subtilis; range 20-80 nm across Gram-positives, 15-40 layers versus 2-7 nm in [[E. coli|real-bacterium]] [[bacterial walls|bacterial-wall]]). Built from alternating beta-1,4-linked GlcNAc (NAG) and MurNAc (NAM) glycan chains cross-linked via direct mDAP-D-Ala peptide bonds (or Gly5 bridges in S. aureus) to sustain ~20 atm turgor; cleaved directly by lysozyme and vulnerable to beta-lactam blockade of exposed [[PBPs|real-gp-pbp]].',
        from: [
          { nodeId: 'real-gp-pbp', label: 'PBP Transpeptidases', cargo: 'Glycan & peptide cross-linking' },
          { nodeId: 'real-gp-crosslink', label: 'NAG-NAM & Peptide Stems', cargo: 'Lipid II murein precursors' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Gram-Positive Wall Node', cargo: '20-80 nm purple-retaining mesh' },
          { nodeId: 'peptidoglycan', label: 'Peptidoglycan Polymer', cargo: '20 atm osmotic load shell' }
        ]
      },
      es: {
        subtitle: 'Pared gruesa multicapa de peptidoglicano (20–80 nm)',
        simple:
          'Envolviendo por completo al bacilo [[Bacillus subtilis|real-gram-positive]], esta [[pared de peptidoglicano|real-gp-wall]] de 40 nanómetros apila decenas de capas entrelazadas que soportan veinte atmósferas de presión interna y atrapan el tinte violeta de Gram.',
        story:
          'Los precursores de Lípido II salen desde la única [[membrana plasmática|plasma-membrane]] inferior, donde las [[transpeptidasas PBP|real-gp-pbp]] expuestas los tejen en quince a cuarenta aros superpuestos de azúcares NAG y NAM cosidos por [[puentes peptídicos|real-gp-crosslink]]. A lo largo del espesor se intercalan [[ácidos teicoicos|real-gp-teichoic]] negativos. Al añadir etanol durante la tinción de Gram, la malla se deshidrata, sus poros se contraen alrededor del complejo cristal violeta-yodo y fijan el color púrpura.',
        blueprint: {
          role: 'Sáculo monodérmico de mureína de 20–80 nm que resiste ~20 atm de turgencia y retiene el complejo CV–I',
          arrivesFrom: 'Unidades Lípido II exportadas a través de la [[membrana plasmática|plasma-membrane]] y reticuladas por [[PBP|real-gp-pbp]]',
          inside: '15–40 estratos concéntricos β-1,4 de [[NAG–NAM|real-gp-crosslink]] unidos covalentemente a cadenas [[WTA|real-gp-teichoic]]',
          deliversTo: 'Blindaje osmótico, soporte para proteínas ancladas y acceso difusivo directo hacia las [[PBP|real-gp-pbp]] externas',
          loop: 'El etanol reduce los poros hidratados a ~1–2 nm atrapando complejos CV–I (~1,2–1,5 nm) responsables del color púrpura'
        },
        scientific:
          'Sáculo multicapa de [[peptidoglicano|real-gp-wall]] Gram-positivo (~40 nm en Bacillus subtilis vegetativo; rango 20–80 nm y 15–40 capas frente a 2–7 nm en la [[pared bacteriana|bacterial-wall]] de [[E. coli|real-bacterium]]). Formado por cadenas alternas β-(1→4) de GlcNAc (NAG) y MurNAc (NAM) reticuladas mediante enlaces directos mDAP–D-Ala (o puentes Gly₅ en S. aureus) frente a ~20 atm de turgencia; sensible a lisozima y a la inhibición β-lactámica de [[PBP|real-gp-pbp]].',
        from: [
          { nodeId: 'real-gp-pbp', label: 'Transpeptidasas PBP', cargo: 'Reticulación de glicanos y péptidos' },
          { nodeId: 'real-gp-crosslink', label: 'NAG–NAM y tallos peptídicos', cargo: 'Precursores Lípido II' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Pared Gram-positiva', cargo: 'Malla de 20–80 nm retentiva' },
          { nodeId: 'peptidoglycan', label: 'Polímero de peptidoglicano', cargo: 'Contención de 20 atm' }
        ]
      }
    },

    teichoic: {
      en: {
        subtitle: 'Anionic Wall (WTA) & Lipoteichoic (LTA) Acids',
        simple:
          'Extending as negatively charged threads straight through the [[peptidoglycan wall|real-gp-wall]], [[wall and lipoteichoic acids|real-gp-teichoic]] bind [[Mg2+|atom-mg]] and [[Ca2+|atom-ca]] ions from the surroundings and help keep the thick wall organized.',
        story:
          'Every Gram-positive wall pairs its rigid sugar-peptide basket with flexible poly-[[phosphate|phosphate]] ribbons synthesized by TagF and outer-leaflet LtaS enzymes. Wall teichoic acids bolt covalently onto C6 carbons of NAM sugars throughout the mesh, while lipoteichoic acids anchor in membrane lipids and span upward into the wall. Their repeating negative charges form an electrostatic reservoir concentrating [[magnesium|atom-mg]] and [[calcium|atom-ca]] right beside active wall enzymes while positioning autolysins so cell elongation never tears the sacculus.',
        blueprint: {
          role: 'Anionic glycerol/ribitol-phosphate wall polymers controlling cation capture, charge balance, and wall remodeling',
          arrivesFrom: 'WTA polymerized by TagF (PDB 3L7I) onto NAM C6; LTA polymerized by membrane LtaS (PDB 2W5Q) from phosphatidylglycerol',
          inside: 'Repeating phosphodiester polyol chains ([[C|atom-c]], [[H|atom-h]], [[O|atom-o]], [[P|atom-p]]) spanning the 40 nm [[peptidoglycan|real-gp-wall]] matrix',
          deliversTo: 'Concentrates [[Mg2+|atom-mg]] and [[Ca2+|atom-ca]] near the [[plasma membrane|plasma-membrane]] and guides wall autolysins',
          loop: 'D-alanylation dynamically trims net negative charge to repel positively charged antimicrobial peptides'
        },
        scientific:
          'Anionic Gram-positive cell-wall polyol-phosphates comprising C6-NAM-linked wall teichoic acids (WTA; TagF polymerase PDB 3L7I) and glycolipid-anchored lipoteichoic acids (LTA; extracellular LtaS synthase PDB 2W5Q, ~5.5 nm), representing up to 50% of dry wall mass. Phosphodiester backbones coordinate divalent [[Mg2+|atom-mg]] and [[Ca2+|atom-ca]] ions across the [[peptidoglycan|real-gp-wall]], scaffold [[PBP|real-gp-pbp]] and autolysin distribution, and distinguish Gram-positive envelopes from [[LPS|lps]]-capped [[E. coli|real-bacterium]].',
        from: [
          { nodeId: 'phosphate', label: 'Polyol-Phosphate Precursors', cargo: 'CDP-glycerol & phosphatidylglycerol' },
          { nodeId: 'plasma-membrane', label: 'LtaS Membrane Synthase', cargo: 'Glycolipid LTA anchoring' }
        ],
        to: [
          { nodeId: 'real-gp-teichoic', label: 'Teichoic Acids Node', cargo: 'WTA + LTA wall reinforcement' },
          { nodeId: 'atom-ca', label: 'Divalent Cation Capture', cargo: 'Ca2+ & Mg2+ surface buffering' }
        ]
      },
      es: {
        subtitle: 'Ácidos teicoicos de pared (WTA) y lipoteicoicos (LTA)',
        simple:
          'Atravesando como hebras con carga negativa toda la [[pared de peptidoglicano|real-gp-wall]], los [[ácidos teicoicos y lipoteicoicos|real-gp-teichoic]] capturan iones [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]] del entorno y mantienen organizada la pared gruesa.',
        story:
          'Toda pared Gram-positiva combina su armazón rígido de azúcares con cintas flexibles de [[polifosfato|phosphate]] sintetizadas por las enzimas TagF y LtaS. Los ácidos teicoicos de pared se fijan covalentemente al carbono C6 del azúcar NAM, mientras los lipoteicoicos se anclan en los lípidos de membrana y ascienden por la malla. Sus cargas negativas forman una reserva electrostática que concentra [[magnesio|atom-mg]] y [[calcio|atom-ca]] junto a las enzimas murales y orienta las autolisinas durante el crecimiento.',
        blueprint: {
          role: 'Polímeros aniónicos de glicerol/ribitol-fosfato que regulan captura de cationes, carga y remodelación mural',
          arrivesFrom: 'WTA polimerizados por TagF (PDB 3L7I) sobre C6 de NAM; LTA sintetizados por LtaS (PDB 2W5Q) desde fosfatidilglicerol',
          inside: 'Cadenas repetitivas fosfodiéster ([[C|atom-c]], [[H|atom-h]], [[O|atom-o]], [[P|atom-p]]) cruzando la matriz de [[peptidoglicano|real-gp-wall]] de 40 nm',
          deliversTo: 'Concentra [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]] junto a la [[membrana plasmática|plasma-membrane]] y dirige autolisinas',
          loop: 'La D-alanilación ajusta dinámicamente la carga negativa para repeler péptidos antimicrobianos catiónicos'
        },
        scientific:
          'Poliol-fosfatos aniónicos Gram-positivos integrados por ácidos teicoicos de pared unidos al C6 de NAM (WTA; polimerasa TagF PDB 3L7I) y ácidos lipoteicoicos anclados en glucolípidos de membrana (LTA; sintasa extracelular LtaS PDB 2W5Q, ~5,5 nm), hasta el 50 % de la masa seca mural. Sus esqueletos fosfodiéster quelan [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]] en el [[peptidoglicano|real-gp-wall]], ordenan [[PBP|real-gp-pbp]] y autolisinas, y contrastan con el [[LPS|lps]] de [[E. coli|real-bacterium]].',
        from: [
          { nodeId: 'phosphate', label: 'Precursores poliol-fosfato', cargo: 'CDP-glicerol y fosfatidilglicerol' },
          { nodeId: 'plasma-membrane', label: 'Sintasa LtaS de membrana', cargo: 'Anclaje lipídico de LTA' }
        ],
        to: [
          { nodeId: 'real-gp-teichoic', label: 'Ácidos teicoicos', cargo: 'Refuerzo mural WTA y LTA' },
          { nodeId: 'atom-ca', label: 'Captura de cationes', cargo: 'Reserva superficial de Ca²⁺ y Mg²⁺' }
        ]
      }
    },

    pm: {
      en: {
        subtitle: 'Single Monoderm Plasma Membrane (7 nm)',
        simple:
          'Unlike [[E. coli|real-bacterium]], which hides between two lipid layers, [[Bacillus subtilis|real-gram-positive]] has just this single 7-nanometer [[phospholipid|phospholipid]] bilayer sitting directly beneath its porous [[peptidoglycan wall|real-gp-wall]].',
        story:
          'Every chemical transaction between the rod and the outside world crosses this solitary [[plasma membrane|plasma-membrane]]. Its outer leaflet anchors [[PBP wall builders|real-gp-pbp]], Sortase A, and LtaS teichoic synthases directly exposed beneath the porous murein shell, while embedded respiratory complexes pump protons outward to spin F1F0 [[ATP synthases|atp-synthase]] and SecYEG channels export fresh surface proteins. Because no outer [[LPS|lps]] membrane shields it, antibiotics and detergents reaching the wall face this bilayer unimpeded.',
        blueprint: {
          role: 'Sole selective lipid boundary, respiratory bioenergetic sheet, and wall-assembly anchor of the monoderm cell',
          arrivesFrom: 'Ester-linked [[phospholipid|phospholipid]] bilayer (~7 nm) synthesized in the cytoplasm and populated by [[70S ribosomes|ribosome-70s]] via SecYEG',
          inside: 'Symmetric bilayer housing respiratory chains, [[ATP synthase|atp-synthase]], LtaS, [[PBPs|real-gp-pbp]], Sortase A, and LTA glycolipids',
          deliversTo: 'Exports Lipid II precursors to the [[peptidoglycan wall|real-gp-wall]], generates ATP, and imports nutrients into cytoplasm',
          loop: 'During [[asymmetric sporulation|real-gp-sporulation]], this single membrane invaginates and engulfs the forespore to create dual spore membranes'
        },
        scientific:
          'Single monoderm Gram-positive cytoplasmic membrane (~7 nm symmetric ester-linked [[phospholipid|phospholipid]] bilayer rich in phosphatidylglycerol, cardiolipin, and phosphatidylethanolamine, lacking an outer [[LPS|lps]] bilayer). Generates transmembrane proton-motive force driving F1F0 [[ATP synthase|atp-synthase]] (PDB 6OQR, ~23 nm), anchors [[LTA|real-gp-teichoic]], [[PBP transpeptidases|real-gp-pbp]], and Sortase A on its outer face, and flips Lipid II for [[peptidoglycan|real-gp-wall]] synthesis.',
        from: [
          { nodeId: 'phospholipid', label: 'Ester Phospholipids', cargo: '7 nm monoderm lipid bilayer' },
          { nodeId: 'ribosome-70s', label: '70S Ribosomes & SecYEG', cargo: 'Inserted membrane enzymes' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Peptidoglycan Wall', cargo: 'Exported Lipid II & LTA anchors' },
          { nodeId: 'atp-synthase', label: 'F1F0 ATP Synthase', cargo: 'Respiratory proton gradient' }
        ]
      },
      es: {
        subtitle: 'Única membrana plasmática monodérmica (7 nm)',
        simple:
          'A diferencia de [[E. coli|real-bacterium]], protegida por dos capas lipídicas, [[Bacillus subtilis|real-gram-positive]] posee únicamente esta bicapa de [[fosfolípidos|phospholipid]] de 7 nanómetros justo debajo de su [[pared porosa de peptidoglicano|real-gp-wall]].',
        story:
          'Todo intercambio entre el bacilo y su entorno atraviesa esta única [[membrana plasmática|plasma-membrane]]. Su cara externa sujeta las [[enzimas PBP|real-gp-pbp]], la Sortasa A y la sintasa LtaS directamente bajo la mureína porosa, mientras la cadena respiratoria bombea protones hacia fuera para girar las [[ATP sintasas|atp-synthase]] F₁F₀ y los canales SecYEG exportan proteínas de superficie. Al faltar una membrana externa de [[LPS|lps]], cualquier molécula que cruce la pared alcanza esta bicapa sin otra barrera.',
        blueprint: {
          role: 'Única barrera lipídica selectiva, lámina bioenergética respiratoria y base de anclaje mural monodérmica',
          arrivesFrom: 'Bicapa de [[fosfolípidos|phospholipid]] éster (~7 nm) sintetizada en el citosol e insertada con proteínas por [[ribosomas 70S|ribosome-70s]]',
          inside: 'Bicapa simétrica con complejos respiratorios, [[ATP sintasa|atp-synthase]], LtaS, [[PBP|real-gp-pbp]], Sortasa A y glucolípidos LTA',
          deliversTo: 'Exporta Lípido II hacia la [[pared de peptidoglicano|real-gp-wall]], sintetiza ATP e importa nutrientes al citoplasma',
          loop: 'En la [[esporulación asimétrica|real-gp-sporulation]], esta membrana se invagina y engloba la preespora originando sus dos membranas'
        },
        scientific:
          'Membrana citoplasmática monodérmica Gram-positiva única (bicapa simétrica de ~7 nm de [[fosfolípidos|phospholipid]] con enlace éster rica en fosfatidilglicerol, cardiolipina y fosfatidiletanolamina, sin membrana externa de [[LPS|lps]]). Sostiene la fuerza protón-motriz para la [[ATP sintasa|atp-synthase]] F₁F₀ (PDB 6OQR, ~23 nm), ancla [[LTA|real-gp-teichoic]], [[PBP|real-gp-pbp]] y Sortasa A, y voltea Lípido II hacia el [[peptidoglicano|real-gp-wall]].',
        from: [
          { nodeId: 'phospholipid', label: 'Fosfolípidos éster', cargo: 'Bicapa lipídica monodérmica de 7 nm' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S y SecYEG', cargo: 'Enzimas transmembrana insertadas' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Pared de peptidoglicano', cargo: 'Exportación de Lípido II y LTA' },
          { nodeId: 'atp-synthase', label: 'ATP sintasa F₁F₀', cargo: 'Gradiente respiratorio de H⁺' }
        ]
      }
    },

    ecoli_strip: {
      en: {
        subtitle: 'Gram-Negative E. coli Envelope Comparator Strip',
        simple:
          'Placed at exact matching scale beside [[Bacillus subtilis|real-gram-positive]], this slice of [[E. coli|real-bacterium]] reveals why Gram-negative cells stain pink: an outer [[LPS|lps]] lipid coat shields a wafer-thin 3-nanometer [[peptidoglycan|peptidoglycan]] layer.',
        story:
          'Comparing both envelopes side by side turns Gram staining and antibiotic susceptibility into pure geometry. Where Bacillus subtilis stacks 40 nanometers of open [[peptidoglycan|real-gp-wall]] and [[teichoic acids|real-gp-teichoic]], [[E. coli|real-bacterium]] relies on a two-membrane diderm sandwich: an outer [[LPS|lps]] bilayer studded with [[OmpF porins|porin]], a periplasmic moat containing just one to three layers of [[peptidoglycan|peptidoglycan]], and an inner [[plasma membrane|plasma-membrane]]. Ethanol dissolves that outer lipid barrier and flushes purple crystal-violet straight out of the thin wall so E. coli absorbs pink safranin, while intact LPS blocks lysozyme and large antibiotics in live cells.',
        blueprint: {
          role: 'True-scale (1 unit = 100 nm) Gram-negative diderm reference contrasting against the thick monoderm Gram-positive wall',
          arrivesFrom: 'Tripartite [[bacterial cell envelope|bacterial-wall]] architecture of [[Escherichia coli|real-bacterium]]',
          inside: 'Outer asymmetric [[LPS|lps]] membrane + OmpF [[porins|porin]] (PDB 2OMF), ~3 nm periplasmic [[peptidoglycan|peptidoglycan]], and inner bilayer',
          deliversTo: 'Explains pink Gram-negative counterstaining, outer-membrane barrier defense, and porin-gated drug permeability',
          loop: 'No teichoic acids and no Sortase A; small beta-lactams must cross porins and evade periplasmic AcrAB-TolC efflux (PDB 5O66)'
        },
        scientific:
          'True-scale comparative Gram-negative diderm [[envelope|bacterial-wall]] strip from [[Escherichia coli|real-bacterium]] (~2-5 atm turgor): asymmetric outer membrane (~7 nm, outer [[LPS|lps]] leaflet + trimeric OmpF [[porins|porin]] PDB 2OMF) shielding a 2-7 nm (~3 nm, 1-3 layers) periplasmic [[peptidoglycan|peptidoglycan]] sacculus and inner [[plasma membrane|plasma-membrane]]. Ethanol decolorization disrupts the outer LPS layer and elutes crystal-violet-iodine through the thin wall (retaining safranin counterstain), whereas intact LPS blocks lysozyme and bulky glycopeptides.',
        from: [
          { nodeId: 'real-bacterium', label: 'E. coli Reference', cargo: 'Diderm Gram-negative blueprint' },
          { nodeId: 'lps', label: 'Outer LPS Membrane', cargo: 'Lipid barrier & OmpF porins' }
        ],
        to: [
          { nodeId: 'bacterial-wall', label: 'Gram-Negative Envelope', cargo: '3 nm PG + double membrane' },
          { nodeId: 'real-gp-wall', label: 'Gram-Positive Contrast', cargo: '10x thicker wall, no outer LPS' }
        ]
      },
      es: {
        subtitle: 'Franja comparadora de envoltura Gram-negativa (E. coli)',
        simple:
          'Situada a escala idéntica junto a [[Bacillus subtilis|real-gram-positive]], esta sección de [[E. coli|real-bacterium]] muestra por qué las Gram-negativas se tiñen de rosa: una capa externa de [[LPS|lps]] protege un [[peptidoglicano|peptidoglycan]] finísimo de apenas 3 nanómetros.',
        story:
          'Comparar ambas envolturas lado a lado convierte la tinción de Gram y la acción antibiótica en geometría visible. Donde Bacillus subtilis apila 40 nanómetros de [[peptidoglicano|real-gp-wall]] y [[ácidos teicoicos|real-gp-teichoic]], [[E. coli|real-bacterium]] construye un sándwich didérmico: membrana externa con [[LPS|lps]] y [[porinas OmpF|porin]], un periplasma con apenas una a tres capas de [[peptidoglicano|peptidoglycan]] y la [[membrana interna|plasma-membrane]]. El etanol disuelve la capa lipídica externa y lava el tinte violeta para que E. coli tome safranina rosa, mientras en la célula viva el LPS frena la lisozima y antibióticos voluminosos.',
        blueprint: {
          role: 'Referencia didérmica Gram-negativa a escala real (1 unidad = 100 nm) frente a la pared monodérmica gruesa',
          arrivesFrom: 'Arquitectura tripartita de la [[envoltura bacteriana|bacterial-wall]] de [[Escherichia coli|real-bacterium]]',
          inside: 'Membrana externa asimétrica de [[LPS|lps]] + [[porinas|porin]] OmpF (PDB 2OMF), [[peptidoglicano|peptidoglycan]] de ~3 nm y bicapa interna',
          deliversTo: 'Explica la tinción rosa Gram-negativa, el blindaje lipídico externo y la entrada de fármacos filtrada por porinas',
          loop: 'Carece de ácidos teicoicos y Sortasa A; los β-lactámicos pequeños deben cruzar porinas y sortear el eflujo AcrAB–TolC (PDB 5O66)'
        },
        scientific:
          'Franja comparativa a escala real de la [[envoltura|bacterial-wall]] didérmica Gram-negativa de [[Escherichia coli|real-bacterium]] (~2–5 atm de turgencia): membrana externa asimétrica (~7 nm con [[LPS|lps]] externo y [[porinas|porin]] triméricas OmpF PDB 2OMF) sobre un sáculo periplásmico de [[peptidoglicano|peptidoglycan]] de 2–7 nm (~3 nm, 1–3 capas) y [[membrana interna|plasma-membrane]]. El alcohol desorganiza el LPS externo y eluye el complejo CV–I permitiendo la contratinción con safranina, mientras el LPS intacto excluye lisozima y glucopéptidos.',
        from: [
          { nodeId: 'real-bacterium', label: 'Referencia E. coli', cargo: 'Plano didérmico Gram-negativo' },
          { nodeId: 'lps', label: 'Membrana externa LPS', cargo: 'Barrera lipídica y porinas OmpF' }
        ],
        to: [
          { nodeId: 'bacterial-wall', label: 'Envoltura Gram-negativa', cargo: 'PG de 3 nm y doble membrana' },
          { nodeId: 'real-gp-wall', label: 'Contraste Gram-positivo', cargo: 'Pared 10× más gruesa sin LPS' }
        ]
      }
    },

    pbp: {
      en: {
        subtitle: 'Exposed PBP Transpeptidases (PDB 7BN9 / 2J9P)',
        simple:
          'Rooted in the [[plasma membrane|plasma-membrane]] with their active jaws facing directly into the porous [[peptidoglycan wall|real-gp-wall]], [[PBP enzymes|real-gp-pbp]] weld sugar-peptide strands together - and lie wide open to penicillin.',
        story:
          'As fresh Lipid II molecules flip outward across the [[plasma membrane|plasma-membrane]], PBP3 and companion [[penicillin-binding proteins|real-gp-pbp]] snip the final D-alanine off each peptide stem and weld neighboring glycan strands into a single unbroken mesh. Without an outer [[LPS|lps]] membrane blocking the approach, beta-lactam antibiotics diffuse effortlessly through the wall and mimic that exact [[D-Ala-D-Ala|real-gp-crosslink]] geometry, snapping covalently onto the catalytic serine so wall assembly stalls while internal water pressure ruptures the cell.',
        blueprint: {
          role: 'Outer-leaflet peptidoglycan transpeptidases catalyzing load-bearing cross-links and serving as the primary beta-lactam target',
          arrivesFrom: 'Translated on [[70S ribosomes|ribosome-70s]] and anchored via single N-terminal transmembrane helices in the [[plasma membrane|plasma-membrane]]',
          inside: 'B. subtilis PBP3 (~8 nm, PDB 7BN9) and PBP4a (PDB 2J9P) catalytic serine clefts processing donor [[D-Ala-D-Ala|real-gp-crosslink]] stems',
          deliversTo: 'Cross-linked [[peptidoglycan|real-gp-wall]] layers sustaining ~20 atm turgor across elongating rods and division septa',
          loop: 'Beta-lactams irreversibly acylate the active-site serine; resistant MRSA deploys low-affinity alternative PBP2a (PDB 1VQQ)'
        },
        scientific:
          'Gram-positive membrane-anchored penicillin-binding proteins represented by Bacillus subtilis PBP3 (X-ray structure PDB 7BN9, ~8 nm) and PBP4a bound to a peptidoglycan mimetic (PDB 2J9P). Catalyze DD-transpeptidation by attacking the donor [[D-Ala-D-Ala|real-gp-crosslink]] carbonyl with an active-site Ser-X-X-Lys motif to form a covalent acyl-enzyme transferred to an acceptor mDAP or Gly5 amine. Direct exposure outside the monoderm [[plasma membrane|plasma-membrane]] maximizes beta-lactam vulnerability unless bypassed by low-affinity PBP2a (PDB 1VQQ).',
        from: [
          { nodeId: 'plasma-membrane', label: 'Monoderm Membrane', cargo: 'Outer-leaflet enzyme anchor & Lipid II' },
          { nodeId: 'real-gp-crosslink', label: 'D-Ala-D-Ala Stems', cargo: 'Transpeptidation substrate' }
        ],
        to: [
          { nodeId: 'real-gp-pbp', label: 'PBP & Beta-Lactam Node', cargo: 'Cross-linking & penicillin site' },
          { nodeId: 'real-gp-wall', label: 'Peptidoglycan Mesh', cargo: 'Covalent load-bearing welds' }
        ]
      },
      es: {
        subtitle: 'Transpeptidasas PBP expuestas (PDB 7BN9 / 2J9P)',
        simple:
          'Ancladas en la [[membrana plasmática|plasma-membrane]] con su centro activo orientado hacia la [[pared porosa de peptidoglicano|real-gp-wall]], las [[enzimas PBP|real-gp-pbp]] sueldan las hebras murales y quedan completamente expuestas a la penicilina.',
        story:
          'Cuando nuevas moléculas de Lípido II voltean hacia el exterior de la [[membrana plasmática|plasma-membrane]], PBP3 y otras [[proteínas de unión a penicilina|real-gp-pbp]] cortan la D-alanina terminal de cada péptido y sueldan las hebras vecinas en una malla continua. Al no existir membrana externa de [[LPS|lps]], los β-lactámicos difunden sin barrera por la pared e imitan la geometría de [[D-Ala–D-Ala|real-gp-crosslink]], uniéndose covalentemente a la serina catalítica hasta frenar la reparación mural y provocar la lisis osmótica.',
        blueprint: {
          role: 'Transpeptidasas externas de peptidoglicano que forjan puentes resistentes y actúan como diana primaria de β-lactámicos',
          arrivesFrom: 'Traducidas en [[ribosomas 70S|ribosome-70s]] y fijadas por hélices transmembrana en la [[membrana plasmática|plasma-membrane]]',
          inside: 'Hendiduras catalíticas con serina en PBP3 (~8 nm, PDB 7BN9) y PBP4a (PDB 2J9P) actuando sobre tallos [[D-Ala–D-Ala|real-gp-crosslink]]',
          deliversTo: 'Estratos reticulados de [[peptidoglicano|real-gp-wall]] capaces de contener ~20 atm durante el crecimiento y división',
          loop: 'Los β-lactámicos acilan irreversiblemente la serina activa; SARM esquiva el bloqueo usando PBP2a de baja afinidad (PDB 1VQQ)'
        },
        scientific:
          'Proteínas de unión a penicilina ancladas a la membrana Gram-positiva, modeladas en PBP3 de Bacillus subtilis (estructura cristalográfica PDB 7BN9, ~8 nm) y PBP4a con mimético mural (PDB 2J9P). Catalizan la DD-transpeptidación mediante el motivo Ser-X-X-Lys atacando el carbonilo donador [[D-Ala–D-Ala|real-gp-crosslink]] para transferirlo a aminas mDAP o Gly₅; su exposición directa sobre la [[membrana plasmática|plasma-membrane]] monodérmica explica su alta sensibilidad a β-lactámicos frente a PBP2a (PDB 1VQQ).',
        from: [
          { nodeId: 'plasma-membrane', label: 'Membrana monodérmica', cargo: 'Anclaje externo y Lípido II' },
          { nodeId: 'real-gp-crosslink', label: 'Tallos D-Ala–D-Ala', cargo: 'Sustrato de transpeptidación' }
        ],
        to: [
          { nodeId: 'real-gp-pbp', label: 'PBP y β-lactámicos', cargo: 'Sitio de reticulación y penicilina' },
          { nodeId: 'real-gp-wall', label: 'Malla de peptidoglicano', cargo: 'Soldaduras covalentes de carga' }
        ]
      }
    },

    sortase: {
      en: {
        subtitle: 'Sortase A Wall-Protein Anchorase (PDB 2KID)',
        simple:
          'Because Gram-positive bacteria have no outer lipid membrane to hold surface [[proteins|protein]], membrane-bound Sortase A recognizes a short LPXTG tag and stitches adhesins and surface enzymes straight onto the [[peptidoglycan wall|real-gp-wall]].',
        story:
          'Gram-negative [[E. coli|real-bacterium]] embeds outer-surface proteins inside its outer [[LPS|lps]] membrane, an option monoderm bacteria do not have. Instead, newly secreted surface [[polypeptides|polypeptide]] carrying a C-terminal LPXTG sorting signal pause at the outer face of the [[plasma membrane|plasma-membrane]], where Sortase A cleaves between threonine and glycine with a catalytic cysteine and covalently transfers the protein onto a Lipid II [[cross-link|real-gp-crosslink]] bridge. Once [[PBPs|real-gp-pbp]] weave that tagged Lipid II into the growing wall, the surface protein becomes permanently riveted into the murein armor.',
        blueprint: {
          role: 'Gram-positive cysteine transpeptidase covalently attaching LPXTG surface proteins onto the [[peptidoglycan wall|real-gp-wall]]',
          arrivesFrom: 'Sec-secreted surface [[proteins|protein]] bearing C-terminal LPXTG motifs plus Lipid II cross-bridge acceptors at the [[plasma membrane|plasma-membrane]]',
          inside: 'Eight-stranded beta-barrel transpeptidase (SrtA PDB 2KID / 1T2P, ~4.5 nm) cleaving LPXT-G via catalytic Cys184/His120',
          deliversTo: 'Covalently displays adhesins, pili, and nutrient-capture enzymes across the exterior of the [[thick wall|real-gp-wall]]',
          loop: 'Absent from Gram-negative [[E. coli|real-bacterium]], making Sortase A a signature enzyme of monoderm surface display'
        },
        scientific:
          'Class A Gram-positive sortase cysteine transpeptidase (SrtA, NMR/X-ray structures PDB 2KID and PDB 1T2P, ~4.5 nm, ~24 kDa) anchored to the outer leaflet of the [[plasma membrane|plasma-membrane]] and absent in diderm [[E. coli|real-bacterium]]. Recognizes C-terminal LPXTG sorting signals on Sec-translocated [[proteins|protein]], cleaving the Thr-Gly amide bond via an active-site Cys-His-Arg triad to form a thioester intermediate resolved by nucleophilic attack from Lipid II peptide bridges prior to [[PBP|real-gp-pbp]] incorporation into [[peptidoglycan|real-gp-wall]].',
        from: [
          { nodeId: 'protein', label: 'LPXTG Surface Proteins', cargo: 'Sec-exported wall cargo' },
          { nodeId: 'plasma-membrane', label: 'Monoderm Membrane', cargo: 'Transmembrane anchor & Lipid II' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Peptidoglycan Wall', cargo: 'Covalent surface protein display' },
          { nodeId: 'real-gp-pbp', label: 'PBP Wall Assembly', cargo: 'Integration of protein-tagged Lipid II' }
        ]
      },
      es: {
        subtitle: 'Sortasa A ancladora de proteínas murales (PDB 2KID)',
        simple:
          'Como las bacterias Gram-positivas carecen de membrana externa donde insertar [[proteínas|protein]] superficiales, la Sortasa A reconoce una señal corta LPXTG y cose adhesinas y enzimas directamente sobre la [[pared de peptidoglicano|real-gp-wall]].',
        story:
          'La Gram-negativa [[E. coli|real-bacterium]] aloja sus proteínas externas en su membrana de [[LPS|lps]], una opción inexistente en bacterias monodérmicas. En su lugar, los [[polipéptidos|polypeptide]] secretados con una etiqueta C-terminal LPXTG se detienen en la cara externa de la [[membrana plasmática|plasma-membrane]], donde la Sortasa A corta entre treonina y glicina con su cisteína catalítica y los transfiere covalentemente al puente peptídico del Lípido II. Cuando las [[PBP|real-gp-pbp]] incorporan ese Lípido II a la malla, la proteína queda remachada para siempre en la pared.',
        blueprint: {
          role: 'Cisteína-transpeptidasa Gram-positiva que fija covalentemente proteínas LPXTG a la [[pared de peptidoglicano|real-gp-wall]]',
          arrivesFrom: '[[Proteínas|protein]] secretadas por Sec con motivo C-terminal LPXTG y aceptores Lípido II en la [[membrana plasmática|plasma-membrane]]',
          inside: 'Transpeptidasa en barril β de ocho hebras (SrtA PDB 2KID / 1T2P, ~4,5 nm) que corta LPXT–G vía Cys184/His120',
          deliversTo: 'Expone covalentemente adhesinas, pili y enzimas captadoras en el exterior de la [[pared gruesa|real-gp-wall]]',
          loop: 'Ausente en la Gram-negativa [[E. coli|real-bacterium]], lo que hace a Sortasa A una firma exclusiva de la superficie monodérmica'
        },
        scientific:
          'Cisteína-transpeptidasa Gram-positiva Sortasa A (SrtA, estructuras PDB 2KID y PDB 1T2P, ~4,5 nm, ~24 kDa) anclada en la cara externa de la [[membrana plasmática|plasma-membrane]] y ausente en [[E. coli|real-bacterium]]. Reconoce motivos C-terminales LPXTG en [[proteínas|protein]] secretadas vía Sec, escinde el enlace Thr–Gly mediante su tríada catalítica Cys–His–Arg formando un tioéster y lo transfiere al puente peptídico del Lípido II antes de su incorporación por [[PBP|real-gp-pbp]] al [[peptidoglicano|real-gp-wall]].',
        from: [
          { nodeId: 'protein', label: 'Proteínas superficiales LPXTG', cargo: 'Carga exportada por Sec' },
          { nodeId: 'plasma-membrane', label: 'Membrana monodérmica', cargo: 'Anclaje y Lípido II aceptor' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Pared de peptidoglicano', cargo: 'Exhibición proteica covalente' },
          { nodeId: 'real-gp-pbp', label: 'Ensamblaje PBP', cargo: 'Incorporación de Lípido II unido' }
        ]
      }
    },

    septum: {
      en: {
        subtitle: 'Asymmetric Polar FtsZ Septum (PDB 2VXY)',
        simple:
          'When starvation flips the sporulation switch, tubulin-like FtsZ filaments slide from the center of the rod to one pole and pinch an off-center wall divider that walls off the tiny future [[endospore|real-gp-endospore]].',
        story:
          'During lush vegetative growth, FtsZ forms a neat equatorial ring right down the middle of [[Bacillus subtilis|real-gram-positive]] to split two equal daughters. Once nutrient starvation phosphorylates Spo0A, regulatory signals redirect FtsZ spirals into a polar Z-ring near one tip of the rod. Treadmilling GTP-bound FtsZ filaments guide membrane invagination and septal [[peptidoglycan|real-gp-wall]] deposition to partition a compact forespore compartment from the larger mother cell, launching [[asymmetric sporulation|real-gp-sporulation]].',
        blueprint: {
          role: 'Polar cytokinetic FtsZ Z-ring establishing the asymmetric division plane between mother cell and forespore',
          arrivesFrom: 'GTP-bound FtsZ monomers (PDB 2VXY) translated on [[70S ribosomes|ribosome-70s]] and redirected poleward by Spo0A~P signaling',
          inside: 'Contractile polar FtsZ protofilament ring (~4.5 nm monomers) guiding inward [[plasma membrane|plasma-membrane]] and thin septal PG synthesis',
          deliversTo: 'Creates the polar forespore compartment, anchors [[SpoIIIE|real-gp-sporulation]], and initiates compartmentalized gene programs',
          loop: 'Deliberately thinner septal peptidoglycan later degrades cleanly so the mother cell can engulf the forespore whole'
        },
        scientific:
          'Asymmetric polar division septum of [[Bacillus subtilis sporulation|real-gp-sporulation]] driven by bacterial tubulin-homolog GTPase FtsZ (B. subtilis crystal structure PDB 2VXY, ~4.5 nm monomer). Spo0A~P elevates ftsZ transcription and activates SpoIIE phosphatase, repositioning treadmilling FtsZ rings from midcell to a subpolar locus. Guided septal [[PBP|real-gp-pbp]] synthesis forms a thinned polar wall dividing ~1/4-volume forespore from ~3/4-volume mother cell while clamping a replicated [[DNA|dna]] chromosome across the closure pore.',
        from: [
          { nodeId: 'real-gram-positive', label: 'Starvation Spo0A Switch', cargo: 'Poleward Z-ring relocation' },
          { nodeId: 'plasma-membrane', label: 'Inner Membrane & PBPs', cargo: 'Polar invagination & thin PG' }
        ],
        to: [
          { nodeId: 'real-gp-sporulation', label: 'Asymmetric Sporulation', cargo: 'Mother cell vs. forespore split' },
          { nodeId: 'real-gp-endospore', label: 'Forespore Engulfment', cargo: 'Removable septal wall scaffold' }
        ]
      },
      es: {
        subtitle: 'Tabique polar asimétrico de FtsZ (PDB 2VXY)',
        simple:
          'Cuando el hambre activa la esporulación, filamentos de FtsZ afines a la tubulina se desplazan desde el centro del bacilo hasta un polo y cierran un tabique descentrado que separa la futura [[endospora|real-gp-endospore]].',
        story:
          'En condiciones favorables, FtsZ forma un anillo ecuatorial exacto en mitad de [[Bacillus subtilis|real-gram-positive]] para generar dos células iguales. Al escasear el alimento, Spo0A fosforilado desvía las espirales de FtsZ hacia un extremo del bacilo. Los filamentos de FtsZ dependientes de GTP guían la invaginación de la [[membrana plasmática|plasma-membrane]] y un delgado tabique de [[peptidoglicano|real-gp-wall]] que aísla la pequeña preespora frente a la gran célula madre, iniciando la [[esporulación asimétrica|real-gp-sporulation]].',
        blueprint: {
          role: 'Anillo polar citocinético de FtsZ que establece el plano asimétrico entre célula madre y preespora',
          arrivesFrom: 'Monómeros FtsZ unidos a GTP (PDB 2VXY) traducidos en [[ribosomas 70S|ribosome-70s]] y redirigidos al polo por Spo0A~P',
          inside: 'Anillo contráctil polar de protofilamentos FtsZ (~4,5 nm) guiando la [[membrana plasmática|plasma-membrane]] y un tabique PG fino',
          deliversTo: 'Define la cámara de la preespora, asienta el motor [[SpoIIIE|real-gp-sporulation]] y dispara programas génicos distintos',
          loop: 'El peptidoglicano septal deliberadamente delgado se degrada después para permitir el englobamiento completo'
        },
        scientific:
          'Tabique polar asimétrico de la [[esporulación en Bacillus subtilis|real-gp-sporulation]] dirigido por la GTPasa FtsZ homóloga a tubulina (estructura cristalográfica PDB 2VXY, monómero ~4,5 nm). Spo0A~P incrementa FtsZ y activa la fosfatasa SpoIIE reubicando el anillo de división desde el centro celular a una posición subpolar; las [[PBP|real-gp-pbp]] depositan un tabique fino que separa una preespora de ~1/4 de volumen atrapando un cromosoma de [[ADN|dna]] en el poro central.',
        from: [
          { nodeId: 'real-gram-positive', label: 'Interruptor Spo0A de inanición', cargo: 'Desplazamiento polar del anillo Z' },
          { nodeId: 'plasma-membrane', label: 'Membrana y PBP septales', cargo: 'Invaginación y PG delgado' }
        ],
        to: [
          { nodeId: 'real-gp-sporulation', label: 'Esporulación asimétrica', cargo: 'Separación madre / preespora' },
          { nodeId: 'real-gp-endospore', label: 'Englobamiento', cargo: 'Tabique listo para remodelación' }
        ]
      }
    },

    spoiiie: {
      en: {
        subtitle: 'SpoIIIE ATP-Driven Septal DNA Pump (PDB 2IUU)',
        simple:
          'When the polar septum closes around the chromosome, only one third of the [[DNA|dna]] sits inside the tiny forespore. Seated right in the septum pore, this ring-shaped SpoIIIE motor burns ATP to pump the rest of the genome across.',
        story:
          'Pinching an off-center wall across a full 4.22-megabase chromosome risks guillotining the blueprint of life. Instead, Bacillus subtilis assembles a hexameric FtsK-family SpoIIIE ring directly around the trapped [[dsDNA|dna]] duplex inside the closing septum. Reading directional sequence cues along the chromosome, six ATP-burning subunits reel the remaining seventy percent of the genome into the forespore at thousands of base pairs per second, guaranteeing one complete genome reaches the future [[endospore|real-gp-endospore]] while a twin copy stays behind to run the mother cell.',
        blueprint: {
          role: 'Directional hexameric AAA+ septal DNA translocase completing chromosome packaging into the forespore',
          arrivesFrom: 'Assembles around trapped [[dsDNA|dna]] at the closing polar FtsZ septum, fueled by cytoplasmic [[Mg2+|atom-mg]]-ATP',
          inside: 'Hexameric FtsK/SpoIIIE motor ring (homolog PDB 2IUU) reading skewed chromosomal SRS motifs to pump ~3 Mbp directionally',
          deliversTo: 'Delivers an intact 4.22 Mbp chromosome into the forespore and seals septal membrane fission during [[sporulation|real-gp-sporulation]]',
          loop: 'Only after full translocation can forespore sigma-F and sigma-G operons express all protective [[core|real-gp-core]] proteins'
        },
        scientific:
          'Septal double-stranded DNA translocase SpoIIIE (hexameric AAA+ motor structurally homologous to FtsK, PDB 2IUU) anchored in the asymmetric division septum of sporulating [[Bacillus subtilis|real-gp-sporulation]]. Recognizes oriented 8-bp SpoIIIE Recognition Sequences (SRS) along the 4.22 Mbp [[dsDNA|dna]] chromosome to pump the remaining ~70% (~3 Mbp) directionally into the forespore at ~4,000-5,000 bp/s using ATP hydrolysis, followed by membrane-scission closure of the septal pore.',
        from: [
          { nodeId: 'dna', label: 'Replicated 4.22 Mbp DNA', cargo: 'Origin-trapped duplex arms' },
          { nodeId: 'atp-synthase', label: 'Cytoplasmic ATP Pool', cargo: 'Motor hydrolysis energy' }
        ],
        to: [
          { nodeId: 'real-gp-sporulation', label: 'Complete Forespore Genome', cargo: 'Intact chromosome transfer' },
          { nodeId: 'real-gp-core', label: 'Future Spore Core', cargo: 'Full 4.22 Mbp blueprint' }
        ]
      },
      es: {
        subtitle: 'Bomba septal de ADN SpoIIIE por ATP (PDB 2IUU)',
        simple:
          'Al cerrarse el tabique polar sobre el cromosoma, solo un tercio del [[ADN|dna]] queda dentro de la preespora. Situado en el poro central, este motor anular SpoIIIE consume ATP para bombear el resto del genoma hacia el interior.',
        story:
          'Cerrar un tabique descentrado sobre un cromosoma de 4,22 megabases podría seccionar el manual genético. Para evitarlo, Bacillus subtilis ensambla un anillo hexamérico SpoIIIE de la familia FtsK alrededor de la doble hélice de [[ADNbc|dna]] atrapada en el poro septal. Leyendo señales direccionales del cromosoma, sus seis subunidades alimentadas por ATP arrastran el setenta por ciento restante hacia la preespora a miles de pares de bases por segundo, asegurando un genoma completo para la futura [[endospora|real-gp-endospore]].',
        blueprint: {
          role: 'Translocasa hexamérica AAA+ direccional de ADN septal que completa el empaquetamiento genómico en la preespora',
          arrivesFrom: 'Se ensambla sobre el [[ADNbc|dna]] atrapado en el tabique polar FtsZ usando [[Mg²⁺|atom-mg]]·ATP citosólico',
          inside: 'Anillo motor hexamérico FtsK/SpoIIIE (homólogo PDB 2IUU) leyendo motivos cromosómicos SRS para bombear ~3 Mpb',
          deliversTo: 'Entrega un cromosoma íntegro de 4,22 Mpb a la preespora y sella la escisión septal en la [[esporulación|real-gp-sporulation]]',
          loop: 'Solo tras completarse el bombeo se expresan todos los genes σF/σG protectores del [[núcleo|real-gp-core]]'
        },
        scientific:
          'Translocasa septal de ADN bicatenario SpoIIIE (motor hexamérico AAA+ homólogo estructural de FtsK, PDB 2IUU) anclada en el tabique asimétrico de [[Bacillus subtilis|real-gp-sporulation]]. Reconoce secuencias orientadas de 8 pb (SRS) a lo largo del [[ADNbc|dna]] de 4,22 Mpb para bombear el ~70 % restante (~3 Mpb) hacia la preespora a ~4.000–5.000 pb/s mediante hidrólisis de ATP, culminando con el sellado membranoso del poro.',
        from: [
          { nodeId: 'dna', label: 'ADN replicado de 4,22 Mpb', cargo: 'Brazos cromosómicos atrapados' },
          { nodeId: 'atp-synthase', label: 'Reserva de ATP', cargo: 'Energía para el motor AAA+' }
        ],
        to: [
          { nodeId: 'real-gp-sporulation', label: 'Genoma completo en preespora', cargo: 'Transferencia sin roturas' },
          { nodeId: 'real-gp-core', label: 'Futuro núcleo de espora', cargo: 'Copia íntegra de 4,22 Mpb' }
        ]
      }
    },

    forespore: {
      en: {
        subtitle: 'Engulfed Forespore & SpoIIIAH-SpoIIQ Channel (PDB 3UZ0)',
        simple:
          'After the mother cell swallows the polar chamber whole, the engulfed forespore floats inside with two membranes linked by [[SpoIIIAH-SpoIIQ|real-gp-sporulation]] channels that deliver nutrients and raw materials until its armor is finished.',
        story:
          'Thinning the polar septum lets the mother cell migrate its own [[plasma membrane|plasma-membrane]] completely around the polar compartment, leaving a double-membraned protoplast suspended inside the mother cytoplasm. Sealed off from the external medium, the forespore would starve before maturing - so mother-cell SpoIIIAH and forespore SpoIIQ proteins snap together across the intermembrane space to form a continuous feeding tube. Through these conduits and neighboring SpoVA channels flow metabolic substrates and dipicolinic acid while the mother cell deposits the cortex and protein coat around the outside.',
        blueprint: {
          role: 'Engulfed double-membrane pre-spore chamber nourished by the mother cell via SpoIIIAH-SpoIIQ feeding tubes',
          arrivesFrom: 'Mother-cell membrane migration around the polar compartment after [[SpoIIIE|real-gp-sporulation]] completes [[DNA|dna]] transfer',
          inside: 'Forespore cytoplasm expressing sigma-G genes (SASPs) connected across two membranes by SpoIIIAH-SpoIIQ rings (PDB 3UZ0)',
          deliversTo: 'Receives mother-cell metabolites, cortex peptidoglycan, outer protein coat, and [[Ca-DPA|real-gp-core]] to mature into an [[endospore|real-gp-endospore]]',
          loop: 'Once fully armored and dehydrated, the mother cell undergoes programmed lysis to liberate the dormant spore'
        },
        scientific:
          'Engulfed forespore protoplast bounded by oppositely polarized inner and outer forespore membranes during Stages III-VI of [[Bacillus subtilis sporulation|real-gp-sporulation]]. Linked to the mother cell by trans-envelope SpoIIIAH-SpoIIQ multimeric feeding channels (heterodimer crystal structure PDB 3UZ0, homologous to Type III secretion rings) required to maintain forespore sigma-G transcription and metabolic capacity while mother-cell sigma-E/sigma-K pathways synthesize cortex, coat, and dipicolinic acid for the maturing [[endospore|real-gp-endospore]].',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Mother-Cell Engulfment', cargo: 'SpoIIIAH-SpoIIQ supply tube' },
          { nodeId: 'dna', label: 'Translocated Genome', cargo: 'Forespore sigma-F/G operons' }
        ],
        to: [
          { nodeId: 'real-gp-endospore', label: 'Mature Endospore', cargo: 'Armored concentric shells' },
          { nodeId: 'real-gp-core', label: 'Dehydrating Core', cargo: 'SASPs & imported Ca-DPA' }
        ]
      },
      es: {
        subtitle: 'Preespora englobada y canal SpoIIIAH–SpoIIQ (PDB 3UZ0)',
        simple:
          'Después de que la célula madre engloba por completo la cámara polar, la preespora flota en su interior con dos membranas unidas por canales [[SpoIIIAH–SpoIIQ|real-gp-sporulation]] que le suministran nutrientes hasta terminar su blindaje.',
        story:
          'Al adelgazarse el tabique polar, la [[membrana plasmática|plasma-membrane]] de la célula madre avanza hasta rodear por entero la preespora, dejándola suspendida como una cámara de doble membrana en el citosol materno. Aislada del exterior, necesitaría suministros para madurar; por eso la proteína materna SpoIIIAH y la preesporal SpoIIQ se ensamblan cruzando ambas membranas en un conducto alimentador continuo. Así recibe metabolitos y ácido dipicolínico mientras la célula madre deposita corteza y cubierta proteica a su alrededor.',
        blueprint: {
          role: 'Cámara preesporal englobada de doble membrana abastecida por la célula madre mediante canales SpoIIIAH–SpoIIQ',
          arrivesFrom: 'Migración membranosa materna alrededor del polo una vez que [[SpoIIIE|real-gp-sporulation]] completa el paso del [[ADN|dna]]',
          inside: 'Citoplasma preesporal con genes σG (SASP) conectado a través de dos membranas por complejos SpoIIIAH–SpoIIQ (PDB 3UZ0)',
          deliversTo: 'Recibe metabolitos maternos, corteza, cubierta proteica y [[Ca-DPA|real-gp-core]] hasta madurar en [[endospora|real-gp-endospore]]',
          loop: 'Al quedar completamente blindada y deshidratada, la célula madre se autodestruye para liberar la espora latente'
        },
        scientific:
          'Protoplasto de preespora englobado por membranas interna y externa de polaridad opuesta en las fases III–VI de la [[esporulación de Bacillus subtilis|real-gp-sporulation]]. Conectado a la célula madre mediante canales multiméricos transenvoltura SpoIIIAH–SpoIIQ (estructura heterodimérica PDB 3UZ0, afín a anillos de secreción tipo III) esenciales para sostener la transcripción σG mientras las rutas maternas σE/σK sintetizan corteza, cubierta y dipicolinato para la [[endospora|real-gp-endospore]].',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Englobamiento materno', cargo: 'Conducto alimentador SpoIIIAH–SpoIIQ' },
          { nodeId: 'dna', label: 'Genoma translocado', cargo: 'Operones σF y σG' }
        ],
        to: [
          { nodeId: 'real-gp-endospore', label: 'Endospora madura', cargo: 'Capas concéntricas blindadas' },
          { nodeId: 'real-gp-core', label: 'Núcleo en deshidratación', cargo: 'SASP y Ca-DPA importado' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: 'Circular 4.22 Mbp Bacillus subtilis Chromosome',
        simple:
          'Coiled openly inside the cytoplasm without a nucleus, this single circular [[DNA|dna]] loop holds 4,100 genes - running everyday growth and encoding the entire emergency [[sporulation|real-gp-sporulation]] program.',
        story:
          'Floating inside the open [[nucleoid|nucleoid]] of vegetative [[Bacillus subtilis|real-gram-positive]], this 4.22-megabase B-form double helix is transcribed directly by bacterial [[RNA polymerase|rna-polymerase]] while [[70S ribosomes|ribosome-70s]] translate fresh [[mRNA|rna]] strands immediately alongside it. Whenever starvation signals arrive, DNA replication finishes one clean extra copy of the entire ring so the mother cell keeps one genome to manufacture armor while [[SpoIIIE|real-gp-sporulation]] threads the twin copy safely into the forespore, where SASP proteins later reshape it into radiation-resistant A-form DNA.',
        blueprint: {
          role: 'Single circular 4.22 Mbp dsDNA genome orchestrating both vegetative growth and asymmetric [[sporulation|real-gp-sporulation]]',
          arrivesFrom: 'Semiconservative replication from oriC using cytoplasmic [[nucleotides|nucleotide]] and [[Mg2+|atom-mg]]-dependent polymerases',
          inside: 'Supercoiled ~2 nm B-form [[dsDNA|dna]] chromosome (~4,100 genes) organized in the membrane-free [[nucleoid|nucleoid]]',
          deliversTo: 'Transcribed by [[RNA polymerase|rna-polymerase]] into [[mRNA|rna]] for [[70S ribosomes|ribosome-70s]], or pumped into the [[spore core|real-gp-core]]',
          loop: 'Switches from active B-form transcription in vegetative rods to inert SASP-armored A-form storage inside the [[endospore|real-gp-endospore]]'
        },
        scientific:
          'Bacillus subtilis 168 single circular closed [[dsDNA|dna]] chromosome (4.22 Mbp, ~4,100 protein-coding genes, ~43.5% GC content; ~1.4 mm contour length compacted inside the [[nucleoid|nucleoid]]). Encodes alternating sporulation sigma factors (sigma-H, sigma-F, sigma-E, sigma-G, sigma-K) alongside vegetative housekeeping operons; undergoes axial filamentation and origin-anchored segregation during Stage I-II of [[asymmetric sporulation|real-gp-sporulation]] prior to A-form compaction in the [[core|real-gp-core]].',
        from: [
          { nodeId: 'nucleotide', label: 'Deoxyribonucleotides', cargo: 'dNTP replication pool' },
          { nodeId: 'nucleoid', label: 'Bacterial Nucleoid', cargo: 'Supercoiled chromosome organization' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'RNA Polymerase', cargo: 'Vegetative & sigma-F/E/G/K transcription' },
          { nodeId: 'real-gp-core', label: 'Spore Core Archive', cargo: 'Intact 4.22 Mbp copy for A-form lock' }
        ]
      },
      es: {
        subtitle: 'Cromosoma circular de 4,22 Mpb de Bacillus subtilis',
        simple:
          'Plegado libremente en el citoplasma sin membrana nuclear, este único lazo circular de [[ADN|dna]] contiene 4.100 genes que dirigen tanto el crecimiento diario como el programa completo de [[esporulación|real-gp-sporulation]].',
        story:
          'Suspendido en el [[nucleoide|nucleoid]] abierto de [[Bacillus subtilis|real-gram-positive]], esta doble hélice en forma B de 4,22 megabases es leída directamente por la [[ARN polimerasa|rna-polymerase]] mientras los [[ribosomas 70S|ribosome-70s]] traducen el [[ARNm|rna]] naciente al instante. Cuando llegan señales de inanición, el cromosoma completa una copia íntegra adicional: la célula madre conserva un ejemplar para fabricar las capas protectoras mientras [[SpoIIIE|real-gp-sporulation]] introduce el gemelo en la preespora, donde las proteínas SASP lo transformarán en ADN de forma A.',
        blueprint: {
          role: 'Genoma circular único de ADNbc de 4,22 Mpb que gobierna el crecimiento vegetativo y la [[esporulación|real-gp-sporulation]]',
          arrivesFrom: 'Replicación semiconservativa desde oriC con [[nucleótidos|nucleotide]] citosólicos y polimerasas dependientes de [[Mg²⁺|atom-mg]]',
          inside: 'Cromosoma superenrollado de [[ADNbc|dna]]-B de ~2 nm (~4.100 genes) organizado en el [[nucleoide|nucleoid]] sin membrana',
          deliversTo: 'Transcrito por [[ARN polimerasa|rna-polymerase]] a [[ARNm|rna]] para [[ribosomas 70S|ribosome-70s]], o bombeado al [[núcleo de la espora|real-gp-core]]',
          loop: 'Alterna entre forma B transcripcionalmente activa y archivo inerte en forma A protegido por SASP dentro de la [[endospora|real-gp-endospore]]'
        },
        scientific:
          'Cromosoma circular único de [[ADNbc|dna]] de Bacillus subtilis 168 (4,22 Mpb, ~4.100 genes codificantes, ~43,5 % GC; longitud de contorno ~1,4 mm compactada en el [[nucleoide|nucleoid]]). Codifica la cascada de factores sigma de esporulación (σH, σF, σE, σG, σK) junto a operones vegetativos; forma un filamento axial anclado a los polos en fases I–II de la [[esporulación asimétrica|real-gp-sporulation]] antes de su compactación en forma A en el [[núcleo|real-gp-core]].',
        from: [
          { nodeId: 'nucleotide', label: 'Desoxirribonucleótidos', cargo: 'Reserva dNTP de replicación' },
          { nodeId: 'nucleoid', label: 'Nucleoide bacteriano', cargo: 'Compactación superenrollada' }
        ],
        to: [
          { nodeId: 'rna-polymerase', label: 'ARN polimerasa', cargo: 'Transcripción vegetativa y σF/σE/σG/σK' },
          { nodeId: 'real-gp-core', label: 'Archivo nuclear de espora', cargo: 'Copia íntegra para bloqueo en forma A' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: 'Bacillus subtilis 70S Ribosomes (PDB 3J9W)',
        simple:
          'Crowding the bacterial cytoplasm, thousands of 25-nanometer [[70S ribosomes|ribosome-70s]] read [[mRNA|rna]] strands to manufacture wall builders, metabolic enzymes, spore coat armor, and protective SASP proteins.',
        story:
          'With no nucleus separating genes from translators, these [[70S ribosomes|ribosome-70s]] latch onto fresh [[mRNA|rna]] transcripts the instant they emerge from [[RNA polymerase|rna-polymerase]]. During rapid growth they churn out [[PBP transpeptidases|real-gp-pbp]], Sortase A, and teichoic synthases to expand the forty-nanometer [[wall|real-gp-wall]]. During [[sporulation|real-gp-sporulation]], mother-cell ribosomes synthesize more than seventy coat proteins while forespore ribosomes build SASP DNA shields, and a reserve fleet enters the dormant [[core|real-gp-core]] ready to resume protein synthesis minutes after germination.',
        blueprint: {
          role: '25 nm bacterial 70S ribonucleoprotein translators synthesizing vegetative wall enzymes and sporulation armor',
          arrivesFrom: '30S (16S rRNA) + 50S (23S/5S rRNA) subunits decoding [[mRNA|rna]] with aminoacyl-tRNAs, GTP, and [[Mg2+|atom-mg]]',
          inside: 'Bacillus subtilis 70S complex (cryo-EM PDB 3J9W, ~2.5 MDa) catalyzing peptide bonds inside the 23S rRNA ribozyme core',
          deliversTo: 'Produces [[PBPs|real-gp-pbp]], Sortase A, FtsZ, CotA coat armor, and alpha/beta-SASPs; preserved dormant inside the [[spore core|real-gp-core]]',
          loop: 'During germination, degraded SASP amino acids immediately feed rehydrated core 70S ribosomes to jump-start outgrowth'
        },
        scientific:
          'Bacillus subtilis 70S bacterial ribosome (~25 nm diameter, ~2.5 MDa; cryo-EM structure PDB 3J9W) composed of 30S (16S rRNA + ~21 proteins) and 50S (23S/5S rRNA + ~33 proteins) stabilized by [[Mg2+|atom-mg]]. Executes coupled co-transcriptional translation of vegetative envelope enzymes ([[PBPs|real-gp-pbp]], LtaS, Sortase A) and compartmentalized sigma-E/K/G sporulation regulons; dormant 70S pools survive vitrified inside the dehydrated [[endospore core|real-gp-core]] for immediate post-germination translation.',
        from: [
          { nodeId: 'rna', label: 'Bacterial mRNA & tRNAs', cargo: 'Vegetative & sporulation codons' },
          { nodeId: 'amino-acid', label: 'Amino Acid Pool', cargo: 'Polypeptide building blocks' }
        ],
        to: [
          { nodeId: 'protein', label: 'Wall & Spore Proteome', cargo: 'PBPs, CotA, SASPs & SleB' },
          { nodeId: 'ribosome-70s', label: '70S Ribosome Node', cargo: 'Prokaryotic translation engine' }
        ]
      },
      es: {
        subtitle: 'Ribosomas 70S de Bacillus subtilis (PDB 3J9W)',
        simple:
          'Poblando el citoplasma bacteriano, miles de [[ribosomas 70S|ribosome-70s]] de 25 nanómetros leen hebras de [[ARNm|rna]] para fabricar constructores murales, enzimas metabólicas, la cubierta de la espora y proteínas protectoras SASP.',
        story:
          'Sin núcleo que separe genes y traductores, estos [[ribosomas 70S|ribosome-70s]] se acoplan al [[ARNm|rna]] recién nacido apenas sale de la [[ARN polimerasa|rna-polymerase]]. En fase vegetativa producen [[PBP|real-gp-pbp]], Sortasa A y sintasas teicoicas para ampliar la [[pared|real-gp-wall]] de cuarenta nanómetros. Durante la [[esporulación|real-gp-sporulation]], los ribosomas maternos fabrican más de setenta proteínas de cubierta y los preesporales generan escudos SASP, quedando una flota de reserva vitrificada en el [[núcleo|real-gp-core]] lista para despertar tras la germinación.',
        blueprint: {
          role: 'Traductores ribonucleoproteicos bacterianos 70S de 25 nm que fabrican enzimas murales y el blindaje de la espora',
          arrivesFrom: 'Subunidades 30S (ARNr 16S) y 50S (ARNr 23S/5S) leyendo [[ARNm|rna]] con aminoacil-ARNt, GTP y [[Mg²⁺|atom-mg]]',
          inside: 'Complejo 70S de Bacillus subtilis (crio-EM PDB 3J9W, ~2,5 MDa) catalizando enlaces peptídicos en el ARNr 23S',
          deliversTo: 'Sintetiza [[PBP|real-gp-pbp]], Sortasa A, FtsZ, cubierta CotA y α/β-SASP; preservados latentes en el [[núcleo|real-gp-core]]',
          loop: 'Al germinar, los aminoácidos liberados al degradar las SASP abastecen de inmediato a estos ribosomas 70S rehidratados'
        },
        scientific:
          'Ribosoma bacteriano 70S de Bacillus subtilis (~25 nm de diámetro, ~2,5 MDa; estructura crio-EM PDB 3J9W) integrado por subunidades 30S (ARNr 16S + ~21 proteínas) y 50S (ARNr 23S/5S + ~33 proteínas) estabilizadas con [[Mg²⁺|atom-mg]]. Realiza traducción cotranscripcional acoplada de enzimas murales ([[PBP|real-gp-pbp]], LtaS, Sortasa A) y regulones de esporulación σE/σK/σG, permaneciendo viable en estado vítreo dentro del [[núcleo de la endospora|real-gp-core]].',
        from: [
          { nodeId: 'rna', label: 'ARNm y ARNt bacterianos', cargo: 'Codones vegetativos y de esporulación' },
          { nodeId: 'amino-acid', label: 'Reserva de aminoácidos', cargo: 'Monómeros polipeptídicos' }
        ],
        to: [
          { nodeId: 'protein', label: 'Proteoma mural y esporal', cargo: 'PBP, CotA, SASP y SleB' },
          { nodeId: 'ribosome-70s', label: 'Ribosoma 70S', cargo: 'Motor procariota de traducción' }
        ]
      }
    },

    exosporium: {
      en: {
        subtitle: 'Outer Exosporium Veil & Glycoprotein Crust',
        simple:
          'Surrounding the outside of the [[dormant endospore|real-gp-endospore]], this delicate glycoprotein crust and hair-like nap forms the very first physical barrier against soil enzymes, surfaces, and harsh environmental chemistry.',
        story:
          'Deposited as the final outer layer before the mother cell lyses, the exosporium and crust wrap the [[spore coat|real-gp-endospore]] in a loose, semi-porous lattice of sugar-coated [[proteins|protein]] and hair-like filaments. Its outer surface tunes hydrophobicity and electrostatic charge so dormant spores stick cleanly to mineral grains or disperse easily through water and air while keeping bulky predatory enzymes away from the underlying coat. Even as this outer veil intercepts macromolecules, small amino-acid and sugar germinants slip easily through its pores to reach deep nutrient sensors.',
        blueprint: {
          role: 'Outermost glycoprotein veil/crust governing spore surface adhesion, hydrophobicity, and first-line macromolecular shielding',
          arrivesFrom: 'Late mother-cell sigma-K expression depositing CotX/CotY/CotZ crust (B. subtilis) or BclA-rich exosporium nap across Bacillus',
          inside: 'Paracrystalline basal glycoprotein lattice adorned with external collagen-like glycoprotein filaments outside the [[coat|real-gp-endospore]]',
          deliversTo: 'Modulates environmental attachment, shields the underlying protein coat, and admits small germinants toward the [[inner membrane|real-gp-endospore]]',
          loop: 'Shed cleanly as an empty husk once the germinating rod swells and breaks out of its protective shells'
        },
        scientific:
          'Outermost accessory surface layer of Bacillus-group [[endospores|real-gp-endospore]]: a tightly appressed glycosylated crust (CotV/CotW/CotX/CotY/CotZ) in Bacillus subtilis and a balloon-like paracrystalline basal-layer exosporium decorated with BclA glycoprotein hair-like nap in wider Bacillus relatives. Confers tailored surface hydrophobicity, adhesion, and macromolecular exclusion while preserving permeability to low-molecular-weight nutrient germinants (L-alanine, sugars) bound by inner-membrane GerA receptors.',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Late Mother-Cell Sigma-K', cargo: 'Crust & exosporium glycoproteins' },
          { nodeId: 'protein', label: 'Glycosylated Filaments', cargo: 'Hydrophobic outer nap layer' }
        ],
        to: [
          { nodeId: 'real-gp-endospore', label: 'Armored Endospore', cargo: 'First-line outer shield & adhesion' },
          { nodeId: 'real-gp-core', label: 'Germinant Passage', cargo: 'Admits small nutrient triggers' }
        ]
      },
      es: {
        subtitle: 'Velo externo de exosporio y costra glicoproteica',
        simple:
          'Rodeando la cara más externa de la [[endospora latente|real-gp-endospore]], esta delicada costra glicoproteica con filamentos superficiales constituye la primera barrera física frente a enzimas del suelo y agentes químicos.',
        story:
          'Depositada como última capa antes de la lisis de la célula madre, la costra o exosporio envuelve la [[cubierta esporal|real-gp-endospore]] con una red semiporosa de [[proteínas|protein]] glicosiladas y filamentos vellosos. Su superficie regula la hidrofobicidad y la carga para facilitar la adhesión a partículas o la dispersión en agua y aire, manteniendo alejadas a las enzimas líticas voluminosas. Pese a frenar macromoléculas, sus poros dejan pasar sin esfuerzo pequeños aminoácidos y azúcares germinantes hacia los sensores profundos.',
        blueprint: {
          role: 'Velo o costra glicoproteica más externa que regula adhesión, hidrofobicidad y exclusión macromolecular inicial',
          arrivesFrom: 'Expresión tardía materna σK depositando la costra CotX/CotY/CotZ (B. subtilis) o exosporio velloso en el grupo Bacillus',
          inside: 'Red basal glicoproteica paracristalina coronada por filamentos externos sobre la [[cubierta proteica|real-gp-endospore]]',
          deliversTo: 'Modula la fijación ambiental, resguarda la cubierta proteica y admite pequeños germinantes hacia la [[membrana interna|real-gp-endospore]]',
          loop: 'Se desprende como una cáscara vacía en cuanto el bacilo germinado se hidrata y rompe la envoltura'
        },
        scientific:
          'Capa superficial más externa en [[endosporas|real-gp-endospore]] del grupo Bacillus: costra glicosilada adosada (CotV/CotW/CotX/CotY/CotZ) en Bacillus subtilis y exosporio paracristalino holgado con filamentos glicoproteicos tipo BclA en especies afines. Define la hidrofobicidad superficial, la adhesión y la exclusión de macromoléculas líticas manteniendo permeabilidad para germinantes de bajo peso molecular (L-alanina, azúcares) detectados por receptores GerA.',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Regulón tardío σK materno', cargo: 'Glicoproteínas de costra y exosporio' },
          { nodeId: 'protein', label: 'Filamentos glicosilados', cargo: 'Superficie externa hidrofóbica' }
        ],
        to: [
          { nodeId: 'real-gp-endospore', label: 'Endospora blindada', cargo: 'Primera defensa y adhesión' },
          { nodeId: 'real-gp-core', label: 'Paso de germinantes', cargo: 'Entrada de nutrientes señal' }
        ]
      }
    },

    coat: {
      en: {
        subtitle: 'Cross-Linked Protein Spore Coat (50-100 nm, CotA PDB 1GSK)',
        simple:
          'Built from more than seventy interlocking [[proteins|protein]], this 50-to-100-nanometer protein coat seals the [[endospore|real-gp-endospore]] against lysozyme, bleach, organic solvents, and standard Gram staining.',
        story:
          'During late [[sporulation|real-gp-sporulation]], mother-cell [[70S ribosomes|ribosome-70s]] assemble a multi-tiered protein armor around the engulfed forespore guided by morphogenetic scaffolds such as CotE and SafA. Cysteine-rich cross-links and oxidative enzymes including the copper-dependent laccase CotA harden the coat into an elastic, chemically impervious molecular sieve. While standard Gram dye, predatory digestive enzymes, and harsh disinfectants bounce right off, small nutrient triggers still pass through to wake the sleeping cell.',
        blueprint: {
          role: 'Chemically impervious 50-100 nm multilayered protein armor excluding lysozyme, oxidants, solvents, and standard dyes',
          arrivesFrom: 'Over 70 coat [[polypeptides|polypeptide]] (CotA, CotE, SafA, SpoIVA) translated in the mother cell during [[sporulation|real-gp-sporulation]]',
          inside: 'Concentric inner and outer coat shells stabilized by disulfide/dityrosine cross-links and outer CotA laccase (PDB 1GSK, ~6.5 nm)',
          deliversTo: 'Protects the underlying [[cortex|real-gp-endospore]] from lysozyme digestion and shields the [[core|real-gp-core]] from UV and chemical damage',
          loop: 'Impermeable to standard crystal violet; requires heat-driven malachite green (Schaeffer-Fulton stain) to visualize spores microscopically'
        },
        scientific:
          'Multilayered proteinaceous [[endospore|real-gp-endospore]] coat (50-100 nm total thickness; basement layer, inner coat, outer coat) assembled by mother-cell sigma-E and sigma-K regulons from >70 structural and catalytic [[proteins|protein]] anchored by SpoIVA and CotE. Outer-coat multicopper laccase CotA (Bacillus subtilis X-ray structure PDB 1GSK, ~6.5 nm) produces brown melanin-like pigments conferring UV and H2O2 resistance; extensive disulfide and isopeptide cross-linking excludes lysozyme (~14 kDa) and organic solvents.',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Mother-Cell Sigma-E/K', cargo: 'Over 70 structural coat proteins' },
          { nodeId: 'ribosome-70s', label: 'Mother 70S Ribosomes', cargo: 'CotA, CotE & SpoIVA synthesis' }
        ],
        to: [
          { nodeId: 'real-gp-endospore', label: 'Dormant Endospore', cargo: 'Lysozyme & oxidant exclusion' },
          { nodeId: 'real-gp-core', label: 'Protected Cortex & Core', cargo: 'Chemical & UV shield' }
        ]
      },
      es: {
        subtitle: 'Cubierta proteica reticulada (50–100 nm, CotA PDB 1GSK)',
        simple:
          'Construida con más de setenta [[proteínas|protein]] entrelazadas, esta cubierta de 50 a 100 nanómetros sella la [[endospora|real-gp-endospore]] frente a lisozima, lejía, disolventes orgánicos y la tinción de Gram común.',
        story:
          'En las etapas finales de la [[esporulación|real-gp-sporulation]], los [[ribosomas 70S|ribosome-70s]] de la célula madre ensamblan un blindaje proteico en varios pisos guiado por andamios como CotE y SafA. Puentes ricos en cisteína y enzimas oxidativas como la lacasa de cobre CotA endurecen la cubierta en un tamiz elástico y químicamente impenetrable. Así bloquea el tinte de Gram, enzimas digestivas y desinfectantes, aunque permite el paso de pequeños nutrientes que anuncian la vuelta de condiciones favorables.',
        blueprint: {
          role: 'Armadura proteica multicapa de 50–100 nm impermeable a lisozima, oxidantes, disolventes y colorantes comunes',
          arrivesFrom: 'Más de 70 [[polipéptidos|polypeptide]] de cubierta (CotA, CotE, SafA, SpoIVA) traducidos en la célula madre durante la [[esporulación|real-gp-sporulation]]',
          inside: 'Capas concéntricas interna y externa endurecidas por enlaces disulfuro/ditirosina y lacasa CotA (PDB 1GSK, ~6,5 nm)',
          deliversTo: 'Resguarda la [[corteza|real-gp-endospore]] frente a la lisozima y protege el [[núcleo|real-gp-core]] contra UV y químicos',
          loop: 'Rechaza el cristal violeta común; exige verde malaquita con calor (tinción de Schaeffer–Fulton) para teñirse al microscopio'
        },
        scientific:
          'Cubierta proteica multicapa de la [[endospora|real-gp-endospore]] (50–100 nm de grosor: capa basal, cubierta interna y externa) ensamblada por los regulones maternos σE y σK con >70 [[proteínas|protein]] organizadas sobre SpoIVA y CotE. La lacasa multicobre externa CotA de Bacillus subtilis (estructura cristalográfica PDB 1GSK, ~6,5 nm) sintetiza pigmentos tipo melanina frente a UV y H₂O₂; la densa reticulación por disulfuros e isopéptidos excluye lisozima (~14 kDa) y disolventes.',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Regulones maternos σE/σK', cargo: 'Más de 70 proteínas de cubierta' },
          { nodeId: 'ribosome-70s', label: 'Ribosomas 70S maternos', cargo: 'Síntesis de CotA, CotE y SpoIVA' }
        ],
        to: [
          { nodeId: 'real-gp-endospore', label: 'Endospora latente', cargo: 'Exclusión de lisozima y oxidantes' },
          { nodeId: 'real-gp-core', label: 'Corteza y núcleo protegidos', cargo: 'Escudo químico y UV' }
        ]
      }
    },

    cortex: {
      en: {
        subtitle: 'Modified Peptidoglycan Cortex (50-100 nm)',
        simple:
          'Lying beneath the protein coat, this thick, loosely cross-linked layer of modified [[peptidoglycan|peptidoglycan]] keeps the inner [[core|real-gp-core]] tightly dehydrated so extreme heat cannot denature the dormant cell.',
        story:
          'Unlike the tightly cross-linked vegetative [[cell wall|real-gp-wall]], the mother cell builds the spore cortex with very few peptide cross-links and converts roughly half of its NAM sugars into distinctive muramic-delta-lactam rings. That loose, negatively charged polymer acts as a mechanical osmotic brace that helps squeeze free [[water|water]] out of the central [[core|real-gp-core]] and hold low core hydration steady for decades. Crucially, those muramic-delta-lactam rings serve as selective cleavage markers: when germination starts, cortex lytic enzymes such as SleB shred the cortex rapidly while leaving the inner germ cell wall untouched.',
        blueprint: {
          role: 'Thick 50-100 nm low-cross-link modified peptidoglycan shell sustaining core dehydration and wet-heat resistance',
          arrivesFrom: 'Deposited into the intermembrane space of the engulfed forespore by mother-cell wall synthases and CwlD/PdaA modifiers',
          inside: 'Loosely cross-linked [[NAG-NAM|real-gp-crosslink]] mesh where ~50% of MurNAc residues convert into muramic-delta-lactam rings',
          deliversTo: 'Maintains ~25-45% core water content for [[endospore|real-gp-endospore]] dormancy and unlocks rapid expansion upon SleB cleavage',
          loop: 'Specific recognition of muramic-delta-lactam lets SleB (PDB 4FET) dissolve the cortex cleanly without harming the germ wall'
        },
        scientific:
          'Specialized [[endospore|real-gp-endospore]] peptidoglycan cortex (50-100 nm thick) synthesized by the mother cell between outer and inner forespore membranes. Features drastically reduced peptide cross-linking (~3% versus ~30-50% in vegetative [[peptidoglycan|real-gp-wall]]) and CwlD/PdaA-catalyzed conversion of ~50% of MurNAc subunits into muramic-delta-lactam, maintaining osmotic dehydration of the [[core|real-gp-core]]. During germination, cortex lytic transglycosylase SleB (PDB 4FET) and CwlJ hydrolyze only muramic-delta-lactam-containing strands.',
        from: [
          { nodeId: 'peptidoglycan', label: 'Modified PG Precursors', cargo: 'Low-crosslink murein strands' },
          { nodeId: 'real-gp-sporulation', label: 'Mother-Cell CwlD/PdaA', cargo: 'Muramic-delta-lactam tagging' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Dehydrated Spore Core', cargo: 'Maintained ~25-45% water state' },
          { nodeId: 'real-gp-endospore', label: 'Germination Release', cargo: 'Selective SleB cortex lysis' }
        ]
      },
      es: {
        subtitle: 'Corteza de peptidoglicano modificado (50–100 nm)',
        simple:
          'Bajo la cubierta proteica, esta gruesa capa de [[peptidoglicano|peptidoglycan]] modificado mantiene el [[núcleo interno|real-gp-core]] intensamente deshidratado para que el calor extremo no dañe a la célula dormida.',
        story:
          'A diferencia de la [[pared vegetativa|real-gp-wall]] densamente reticulada, la célula madre fabrica la corteza con muy pocos enlaces cruzados y convierte cerca de la mitad de sus azúcares NAM en anillos característicos de murámico-δ-lactama. Ese polímero laxo ayuda a mantener la baja hidratación del [[núcleo|real-gp-core]] durante décadas. Además, los anillos de murámico-δ-lactama funcionan como marcas selectivas de corte: al germinar, enzimas líticas como SleB disuelven rápidamente la corteza sin tocar la pared germinal interna.',
        blueprint: {
          role: 'Capa gruesa (50–100 nm) de peptidoglicano modificado poco reticulado que sostiene la deshidratación térmica del núcleo',
          arrivesFrom: 'Depositada entre las membranas de la preespora por sintasas maternas y enzimas modificadoras CwlD/PdaA',
          inside: 'Malla laxa de [[NAG–NAM|real-gp-crosslink]] con ~50 % de residuos MurNAc convertidos en anillos de murámico-δ-lactama',
          deliversTo: 'Mantiene ~25–45 % de agua en el [[núcleo|real-gp-core]] latente y habilita la expansión rápida tras la lisis por SleB',
          loop: 'El reconocimiento exclusivo de murámico-δ-lactama permite a SleB (PDB 4FET) disolver la corteza respetando la pared germinal'
        },
        scientific:
          'Corteza especializada de peptidoglicano de la [[endospora|real-gp-endospore]] (50–100 nm de espesor) sintetizada por la célula madre entre ambas membranas preesporales. Presenta muy baja reticulación peptídica (~3 % frente a ~30–50 % en el [[peptidoglicano|real-gp-wall]] vegetativo) y conversión catalizada por CwlD/PdaA de ~50 % del MurNAc en murámico-δ-lactama para sostener la deshidratación del [[núcleo|real-gp-core]]; durante la germinación, SleB (PDB 4FET) y CwlJ hidrolizan exclusivamente estas hebras modificadas.',
        from: [
          { nodeId: 'peptidoglycan', label: 'Precursores PG modificados', cargo: 'Hebras de baja reticulación' },
          { nodeId: 'real-gp-sporulation', label: 'Enzimas maternas CwlD/PdaA', cargo: 'Marcado con murámico-δ-lactama' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Núcleo deshidratado', cargo: 'Sostén de ~25–45 % de agua' },
          { nodeId: 'real-gp-endospore', label: 'Despertar germinativo', cargo: 'Degradación selectiva por SleB' }
        ]
      }
    },

    germ_wall: {
      en: {
        subtitle: 'Primordial Germ Cell Wall (Future Vegetative Wall)',
        simple:
          'Pressed snugly against the inner spore membrane lies a thin ring of regular unmodified [[peptidoglycan|peptidoglycan]]. Spared when germination dissolves the thick outer cortex, it expands straight into the newborn bacterium\'s first [[cell wall|real-gp-wall]].',
        story:
          'When a dormant [[endospore|real-gp-endospore]] wakes up, it faces a delicate engineering challenge: it must rapidly shred its thick constraining cortex so [[water|water]] can rush back into the [[core|real-gp-core]], yet without bursting from returning osmotic pressure. Bacillus subtilis solves this ahead of time during [[sporulation|real-gp-sporulation]] by laying down this thin inner germ cell wall built of ordinary vegetative-type [[NAG-NAM|real-gp-crosslink]] strands lacking muramic-delta-lactam. Because SleB ignores unmodified strands, the germ wall survives intact and immediately swells into the growing rod\'s new [[peptidoglycan exoskeleton|real-gp-wall]].',
        blueprint: {
          role: 'Thin inner primordial peptidoglycan layer spared during cortex lysis to become the emerging vegetative cell wall',
          arrivesFrom: 'Synthesized on the outer face of the inner forespore membrane by forespore-side wall builders during [[sporulation|real-gp-sporulation]]',
          inside: 'Canonical unmodified [[NAG-NAM|real-gp-crosslink]] peptidoglycan lacking muramic-delta-lactam tags beneath the thick cortex',
          deliversTo: 'Provides instant osmotic containment as the rehydrating core expands into a vegetative [[Bacillus subtilis|real-gram-positive]] rod',
          loop: 'Chemical distinction from the cortex (no muramic-delta-lactam) shields it cleanly from SleB and CwlJ lytic enzymes'
        },
        scientific:
          'Thin primordial germ cell wall (~5-10 nm) situated directly between the compressed inner spore membrane and the overlying 50-100 nm cortex of the [[endospore|real-gp-endospore]]. Chemically identical to vegetative [[peptidoglycan|real-gp-wall]] and completely lacking muramic-delta-lactam modifications, it is refractory to germination-specific cortex lytic enzymes (SleB PDB 4FET, CwlJ), immediately bearing restored ~20 atm turgor as the rehydrated cell transitions to vegetative outgrowth.',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Forespore Wall Synthesis', cargo: 'Unmodified primordial PG' },
          { nodeId: 'real-gp-crosslink', label: 'Canonical NAG-NAM Strands', cargo: 'No muramic-delta-lactam' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'New Vegetative Cell Wall', cargo: 'Instant outgrowth scaffold' },
          { nodeId: 'real-gram-positive', label: 'Germinated Rod', cargo: 'Restored 20 atm turgor shell' }
        ]
      },
      es: {
        subtitle: 'Pared germinal primordial (futura pared vegetativa)',
        simple:
          'Ceñida contra la membrana interna de la espora yace una fina capa de [[peptidoglicano|peptidoglycan]] común sin modificar. Al quedar intacta cuando la germinación disuelve la corteza externa, se convierte al instante en la primera [[pared celular|real-gp-wall]] del bacilo renacido.',
        story:
          'Al despertar, la [[endospora|real-gp-endospore]] afronta un dilema mecánico: debe destruir rápidamente la gruesa corteza rígida para que el [[agua|water]] vuelva al [[núcleo|real-gp-core]], pero sin estallar por la presión osmótica repentina. Bacillus subtilis lo resuelve de antemano durante la [[esporulación|real-gp-sporulation]] depositando esta fina pared germinal de [[NAG–NAM|real-gp-crosslink]] corriente sin anillos de murámico-δ-lactama. Como SleB ignora las hebras sin modificar, esta capa sobrevive intacta y se expande de inmediato en la nueva [[pared vegetativa|real-gp-wall]].',
        blueprint: {
          role: 'Fina capa primordial interna de peptidoglicano respetada durante la lisis cortical para formar la pared del bacilo naciente',
          arrivesFrom: 'Sintetizada sobre la cara externa de la membrana interna preesporal durante la [[esporulación|real-gp-sporulation]]',
          inside: 'Peptidoglicano canónico [[NAG–NAM|real-gp-crosslink]] sin marcas de murámico-δ-lactama bajo la corteza gruesa',
          deliversTo: 'Brinda contención osmótica inmediata cuando el núcleo rehidratado emerge como bacilo [[Bacillus subtilis|real-gram-positive]]',
          loop: 'Su diferencia química respecto a la corteza (ausencia de murámico-δ-lactama) la protege totalmente de SleB y CwlJ'
        },
        scientific:
          'Pared germinal primordial delgada (~5–10 nm) ubicada entre la membrana interna comprimida y la corteza de 50–100 nm de la [[endospora|real-gp-endospore]]. Químicamente equivalente al [[peptidoglicano|real-gp-wall]] vegetativo y carente de murámico-δ-lactama, resiste las enzimas líticas corticales de germinación (SleB PDB 4FET, CwlJ) y asume de inmediato la turgencia restaurada (~20 atm) al iniciarse el crecimiento vegetativo.',
        from: [
          { nodeId: 'real-gp-sporulation', label: 'Síntesis mural preesporal', cargo: 'Peptidoglicano primordial común' },
          { nodeId: 'real-gp-crosslink', label: 'Hebras canónicas NAG–NAM', cargo: 'Sin murámico-δ-lactama' }
        ],
        to: [
          { nodeId: 'real-gp-wall', label: 'Nueva pared vegetativa', cargo: 'Andamio inmediato al germinar' },
          { nodeId: 'real-gram-positive', label: 'Bacilo germinado', cargo: 'Contención de 20 atm' }
        ]
      }
    },

    spore_im: {
      en: {
        subtitle: 'Compressed Inner Spore Membrane (GerA, SpoVA & SleB PDB 4FET)',
        simple:
          'Sealing the dry [[core|real-gp-core]] tightly as a compressed lipid barrier, this low-permeability inner membrane blocks damaging chemicals from leaking inside while housing GerA nutrient sensors, SpoVA calcium gates, and cortex-dissolving SleB.',
        story:
          'Even though it originates from the exact same [[phospholipids|phospholipid]] as the vegetative [[plasma membrane|plasma-membrane]], the inner spore membrane is compressed to roughly half its normal surface area with immobile lipids that block small reactive molecules from reaching core [[DNA|dna]]. Embedded across this tight barrier sit dormant GerA nutrient receptors, SpoVA channels holding the massive [[Ca-DPA|real-gp-core]] depot, and cortex-lytic enzyme SleB positioned at its outer face. The moment amino acids dock onto GerA, SpoVA pops open to dump calcium-dipicolinate outward, SleB digests the cortex, [[water|water]] floods in, and the compressed bilayer unfolds back into a full-size vegetative membrane.',
        blueprint: {
          role: 'Compressed, ultra-low-permeability lipid seal guarding core DNA and triggering nutrient-activated germination',
          arrivesFrom: 'Derived from the forespore [[plasma membrane|plasma-membrane]] compressed during core dehydration in [[sporulation|real-gp-sporulation]]',
          inside: 'Immobilized [[phospholipid|phospholipid]] bilayer housing GerA receptors, SpoVA Ca-DPA channels, and cortex-facing SleB (PDB 4FET)',
          deliversTo: 'Blocks chemical toxins from the [[core|real-gp-core]], then gates Ca-DPA export, cortex hydrolysis, and rehydration on germination',
          loop: 'Stored excess membrane area expands ~1.5-2x within minutes of germination without needing immediate new lipid synthesis'
        },
        scientific:
          'Compressed inner membrane of the [[Bacillus subtilis endospore|real-gp-endospore]] (~1.5-2x lower apparent surface area than upon germination; severely restricted lipid mobility conferring dramatic resistance to small DNA-damaging chemicals and passive [[water|water]] entry). Houses cluster-organized GerA/GerB/GerK germinant receptor complexes, SpoVA mechanosensitive/gated [[Ca-DPA|real-gp-core]] release channels, and outer-leaflet cortex lytic transglycosylase SleB (PDB 4FET, inhibited in dormancy by YpeB).',
        from: [
          { nodeId: 'plasma-membrane', label: 'Forespore Lipid Bilayer', cargo: 'Compressed phospholipid seal' },
          { nodeId: 'real-gp-endospore', label: 'Incoming Germinants', cargo: 'L-alanine & sugar triggers' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Core Rehydration Gate', cargo: 'SpoVA Ca-DPA dump & H2O entry' },
          { nodeId: 'real-gram-positive', label: 'Expanding Plasma Membrane', cargo: 'Instant vegetative surface area' }
        ]
      },
      es: {
        subtitle: 'Membrana interna comprimida (GerA, SpoVA y SleB PDB 4FET)',
        simple:
          'Sellando herméticamente el [[núcleo seco|real-gp-core]], esta bicapa lipídica comprimida y casi impermeable impide la entrada de químicos dañinos mientras aloja los sensores de nutrientes GerA, las compuertas SpoVA y la enzima SleB.',
        story:
          'Aunque procede de los mismos [[fosfolípidos|phospholipid]] que la [[membrana plasmática|plasma-membrane]] vegetativa, la membrana interna de la espora queda comprimida con lípidos casi inmóviles que impiden el paso de sustancias reactivas hacia el [[ADN|dna]]. En esta barrera reposan los receptores de nutrientes GerA, los canales SpoVA que custodian el depósito de [[Ca-DPA|real-gp-core]] y la enzima SleB orientada hacia la corteza. En cuanto llegan aminoácidos a GerA, SpoVA vacía el dipicolinato de calcio, SleB disuelve la corteza, entra [[agua|water]] y la bicapa se despliega al instante.',
        blueprint: {
          role: 'Sello lipídico comprimido de bajísima permeabilidad que protege el ADN central y dispara la germinación por nutrientes',
          arrivesFrom: 'Derivada de la [[membrana plasmática|plasma-membrane]] preesporal comprimida al deshidratarse el núcleo en la [[esporulación|real-gp-sporulation]]',
          inside: 'Bicapa de [[fosfolípidos|phospholipid]] casi inmóvil con receptores GerA, canales SpoVA de Ca-DPA y SleB hacia la corteza (PDB 4FET)',
          deliversTo: 'Bloquea tóxicos frente al [[núcleo|real-gp-core]] y abre la expulsión de Ca-DPA, lisis cortical y rehidratación al germinar',
          loop: 'El área lipídica almacenada se expande ~1,5–2× en minutos tras germinar sin esperar nueva síntesis de lípidos'
        },
        scientific:
          'Membrana interna comprimida de la [[endospora de Bacillus subtilis|real-gp-endospore]] (área superficial aparente ~1,5–2× menor que tras germinar; movilidad lipídica severamente reducida que bloquea agentes químicos genotóxicos y la difusión pasiva de [[agua|water]]). Aloja complejos receptores de germinación GerA/GerB/GerK, canales SpoVA de liberación de [[Ca-DPA|real-gp-core]] y la transglicosilasa lítica cortical SleB (PDB 4FET, mantenida inactiva por YpeB durante la latencia).',
        from: [
          { nodeId: 'plasma-membrane', label: 'Bicapa lipídica preesporal', cargo: 'Sello fosfolipídico comprimido' },
          { nodeId: 'real-gp-endospore', label: 'Nutrientes germinantes', cargo: 'Señales de L-alanina y azúcares' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Compuerta de rehidratación', cargo: 'Salida de Ca-DPA y entrada de H₂O' },
          { nodeId: 'real-gram-positive', label: 'Membrana en expansión', cargo: 'Restauración rápida vegetativa' }
        ]
      }
    },

    core: {
      en: {
        subtitle: 'Dehydrated Vitrified Endospore Core (~25-45% Water)',
        simple:
          'At the heart of the [[endospore|real-gp-endospore]], this low-water [[core|real-gp-core]] holds a complete genome, dormant [[70S ribosomes|ribosome-70s]], and essential enzymes suspended in a glassy gel with zero measurable metabolism.',
        story:
          'Lowering internal [[water|water]] from eighty percent down to roughly thirty percent transforms liquid cytoplasm into a vitrified glass where heat vibrations can no longer unfold delicate [[proteins|protein]]. Packed dense with [[Ca-DPA|real-gp-crosslink]] chelates and SASP-armored [[DNA|dna]], the core shuts down ATP burning completely, preserving cellular machinery untouched through boiling water, vacuum desiccation, and centuries of burial until nutrient signals flood water back in and restart life in minutes.',
        blueprint: {
          role: 'Low-water vitrified central sanctuary preserving DNA, 70S ribosomes, and enzymes in complete metabolic stasis',
          arrivesFrom: 'Dehydrated forespore protoplast after cortex contraction, SASP binding, and SpoVA import of mother-cell [[Ca-DPA|real-gp-core]]',
          inside: '~25-45% water, mildly acidic pH (~6.3), ~10-15% dry-weight [[Ca-DPA|real-gp-crosslink]], SASP-locked A-form [[DNA|dna]], and dormant [[70S ribosomes|ribosome-70s]]',
          deliversTo: 'Survives >100 C wet heat, UV, and drought; rehydrates to ~80% water upon germination to launch a new [[Bacillus subtilis|real-gram-positive]] cell',
          loop: 'Low water content is the single strongest physical determinant of endospore wet-heat resistance'
        },
        scientific:
          'Central protoplast of the [[dormant endospore|real-gp-endospore]] maintaining ~25-45% core water (~80% in vegetative rods), internal pH ~6.3-6.5, and vitrified high macromolecular viscosity preventing thermal denaturation of dormant [[proteins|protein]] and [[70S ribosomes|ribosome-70s]]. Stabilized synergistically by ~10-15% dry-mass 1:1 [[Ca2+|atom-ca]]-dipicolinate chelates and alpha/beta-SASP saturation of the 4.22 Mbp chromosome; stores 3-phosphoglycerate as an immediate post-germination ATP reserve.',
        from: [
          { nodeId: 'real-gp-endospore', label: 'Cortex & Inner Membrane', cargo: 'Dehydration & permeability seal' },
          { nodeId: 'atom-ca', label: 'Ca2+ & Dipicolinate', cargo: 'Vitrifying 1:1 chelate gel' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Endospore Core Node', cargo: 'Heat- & UV-proof suspended life' },
          { nodeId: 'real-gram-positive', label: 'Vegetative Outgrowth', cargo: 'Rehydrated 3-PGA & 70S launch' }
        ]
      },
      es: {
        subtitle: 'Núcleo vitrificado y deshidratado (~25–45 % de agua)',
        simple:
          'En el corazón de la [[endospora|real-gp-endospore]], este [[núcleo|real-gp-core]] con poca agua guarda un genoma completo, [[ribosomas 70S|ribosome-70s]] dormidos y enzimas esenciales suspendidos en un gel vítreo sin metabolismo medible.',
        story:
          'Reducir el [[agua|water]] interna del ochenta por ciento a cerca de un treinta por ciento transforma el citoplasma líquido en un vidrio donde la agitación térmica ya no logra desplegar [[proteínas|protein]] delicadas. Repleto de quelatos de [[Ca-DPA|real-gp-crosslink]] y [[ADN|dna]] protegido por SASP, el núcleo detiene por completo el gasto de ATP y conserva intacta toda la maquinaria celular frente a ebullición, sequía y siglos de latencia hasta que los nutrientes devuelven el agua y reactivan la vida en minutos.',
        blueprint: {
          role: 'Santuario central vitrificado con baja agua que conserva ADN, ribosomas 70S y enzimas en latencia metabólica total',
          arrivesFrom: 'Protoplasto preesporal deshidratado tras la acción de la corteza, unión de SASP e importación SpoVA de [[Ca-DPA|real-gp-core]]',
          inside: '~25–45 % de agua, pH ~6,3, [[Ca-DPA|real-gp-crosslink]] (~10–15 % peso seco), [[ADN|dna]]-A con SASP y [[ribosomas 70S|ribosome-70s]] latentes',
          deliversTo: 'Resiste calor húmedo >100 °C, UV y sequía; se rehidrata al ~80 % al germinar en una nueva célula de [[Bacillus subtilis|real-gram-positive]]',
          loop: 'El bajo contenido de agua libre es el factor físico decisivo de la enorme resistencia al calor húmedo de la endospora'
        },
        scientific:
          'Protoplasto central de la [[endospora latente|real-gp-endospore]] con ~25–45 % de agua (~80 % en fase vegetativa), pH interno ~6,3–6,5 y estado vítreo de alta viscosidad que evita la desnaturalización térmica de [[proteínas|protein]] y [[ribosomas 70S|ribosome-70s]]. Estabilizado conjuntamente por quelatos 1:1 de [[Ca²⁺|atom-ca]]–dipicolinato (~10–15 % del peso seco) y saturación del cromosoma de 4,22 Mpb con α/β-SASP; almacena 3-fosfoglicerato para regenerar ATP al germinar.',
        from: [
          { nodeId: 'real-gp-endospore', label: 'Corteza y membrana interna', cargo: 'Deshidratación y sello hermético' },
          { nodeId: 'atom-ca', label: 'Ca²⁺ y dipicolinato', cargo: 'Gel quelado vitrificante 1:1' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Núcleo de la endospora', cargo: 'Vida suspendida frente a calor y UV' },
          { nodeId: 'real-gram-positive', label: 'Brote vegetativo', cargo: 'Rehidratación con 3-PGA y 70S' }
        ]
      }
    },

    ca_dpa: {
      en: {
        subtitle: 'Ca2+-Dipicolinic Acid (Ca-DPA) Vitrified Chelate Gel',
        simple:
          'Making up more than ten percent of the entire [[endospore|real-gp-endospore]] dry weight, stacks of [[calcium ions|atom-ca]] paired one-to-one with dipicolinic acid crowd out free [[water|water]] and stabilize core molecules against boiling heat.',
        story:
          'Late in [[sporulation|real-gp-sporulation]], the mother cell synthesizes massive pools of pyridine-2,6-dicarboxylic acid (DPA) from lysine pathway intermediates and pumps it across the SpoVA channel into the forespore alongside abundant [[calcium ions|atom-ca]]. Each flat ring clasps one divalent calcium atom through its ring [[nitrogen|atom-n]] and twin carboxylate [[oxygens|atom-o]], packing the [[core|real-gp-core]] into a glassy, low-water chelate matrix. When nutrients signal germination, dumping this massive Ca-DPA hoard outward in seconds creates a huge osmotic pull that draws water back in and activates cortex-lytic CwlJ.',
        blueprint: {
          role: '1:1 Ca2+-dipicolinate chelate matrix (~10-15% spore dry mass) displacing core water and conferring wet-heat tolerance',
          arrivesFrom: 'DPA synthesized in the mother cell by SpoVF synthase and imported with environmental [[Ca2+|atom-ca]] through forespore SpoVA channels',
          inside: 'Dense stacks of tridentate [[Ca2+|atom-ca]]-pyridine-2,6-dicarboxylate chelates ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]]) replacing bulk [[water|water]]',
          deliversTo: 'Vitrifies the [[core|real-gp-core]] during dormancy and triggers rapid osmotic water influx plus CwlJ cortex activation when released',
          loop: 'Rapid expulsion of Ca-DPA is the unmistakable first chemical step of germination, dropping spore refractility in minutes'
        },
        scientific:
          'Endospore-signature 1:1 chelate complex of divalent [[Ca2+|atom-ca]] and pyridine-2,6-dicarboxylate (dipicolinic acid, DPA; C7H3NO4^2-) accounting for ~10-15% of total [[endospore|real-gp-endospore]] dry weight (~1 M effective concentration inside the dehydrated [[core|real-gp-core]]). Synthesized by mother-cell SpoVFA/SpoVFB from dihydrodipicolinate and transported via forespore SpoVA channels; displaces core [[water|water]], protects [[DNA|dna]] from desiccation/heat damage, and upon germination activates outer cortex enzyme CwlJ directly.',
        from: [
          { nodeId: 'atom-ca', label: 'Calcium Ions (Ca2+)', cargo: 'Divalent 1:1 chelate center' },
          { nodeId: 'real-gp-sporulation', label: 'Mother-Cell SpoVF & SpoVA', cargo: 'Dipicolinate synthesis & import' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Vitrified Spore Core', cargo: '10-15% dry-mass thermal gel' },
          { nodeId: 'real-gp-crosslink', label: 'Atomic Chelate Pocket', cargo: 'Ca2+ N/O tridentate ring' }
        ]
      },
      es: {
        subtitle: 'Gel quelado vitrificado de Ca²⁺–ácido dipicolínico (Ca-DPA)',
        simple:
          'Representando más del diez por ciento del peso seco de toda la [[endospora|real-gp-endospore]], densos apilamientos de [[iones calcio|atom-ca]] unidos uno a uno con ácido dipicolínico desplazan el [[agua|water]] libre y protegen el núcleo del hervor.',
        story:
          'Hacia el final de la [[esporulación|real-gp-sporulation]], la célula madre fabrica enormes reservas de ácido piridin-2,6-dicarboxílico (DPA) y las bombea por el canal SpoVA hacia la preespora junto con abundante [[calcio|atom-ca]]. Cada anillo plano atrapa un catión calcio divalente mediante su [[nitrógeno|atom-n]] central y dos [[oxígenos|atom-o]] carboxilato, convirtiendo el [[núcleo|real-gp-core]] en un gel vítreo pobre en agua. Al llegar nutrientes de germinación, la expulsión súbita de este depósito de Ca-DPA atrae agua hacia dentro y activa la enzima cortical CwlJ.',
        blueprint: {
          role: 'Matriz quelada 1:1 de Ca²⁺–dipicolinato (~10–15 % del peso seco) que desplaza agua y otorga resistencia al calor húmedo',
          arrivesFrom: 'DPA sintetizado en la célula madre por SpoVF e importado junto con [[Ca²⁺|atom-ca]] a través de canales SpoVA',
          inside: 'Apilamientos de quelatos tridentados [[Ca²⁺|atom-ca]]–piridin-2,6-dicarboxilato ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]]) sustituyendo [[agua|water]]',
          deliversTo: 'Vitrifica el [[núcleo|real-gp-core]] durante la latencia y dispara la rehidratación osmótica y CwlJ al liberarse',
          loop: 'La descarga veloz de Ca-DPA marca el primer paso químico de la germinación y hace perder la refringencia en minutos'
        },
        scientific:
          'Quelato 1:1 característico de [[endosporas|real-gp-endospore]] formado por [[Ca²⁺|atom-ca]] divalente y piridin-2,6-dicarboxilato (ácido dipicolínico, DPA; C₇H₃NO₄²⁻), que supone ~10–15 % del peso seco total (~1 M efectivo en el [[núcleo|real-gp-core]] deshidratado). Sintetizado por la enzima materna SpoVFA/SpoVFB e importado por canales SpoVA; reduce el [[agua|water]] libre, protege el [[ADN|dna]] frente a calor y sequía y activa directamente a CwlJ al liberarse.',
        from: [
          { nodeId: 'atom-ca', label: 'Iones calcio (Ca²⁺)', cargo: 'Centro divalente del quelato 1:1' },
          { nodeId: 'real-gp-sporulation', label: 'SpoVF materna y SpoVA', cargo: 'Síntesis e importación de DPA' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Núcleo vitrificado', cargo: 'Gel térmico (10–15 % peso seco)' },
          { nodeId: 'real-gp-crosslink', label: 'Bolsillo quelante atómico', cargo: 'Coordinación tridentada N/O–Ca²⁺' }
        ]
      }
    },

    sasp_dna: {
      en: {
        subtitle: 'Alpha/Beta-SASP-Armored A-Form DNA (PDB 2Z3X)',
        simple:
          'Small acid-soluble spore [[proteins|protein]] (SASPs) coat the entire chromosome inside the [[spore core|real-gp-core]] and twist [[DNA|dna]] into a compact A-form helix that stops ultraviolet light and heat from breaking genes.',
        story:
          'Exposed B-form [[DNA|dna]] suffers rapid base depurination in boiling heat and fuses adjacent thymines into lethal dimers under ultraviolet sunlight. Inside the maturing forespore, sigma-G drives massive synthesis of alpha/beta-type [[SASP proteins|real-gp-core]], which snap across the minor groove of all 4.22 megabases of chromosomal DNA as snug alpha-helical sleeves. This coating twists the helix into stiff A-form geometry where lethal pyrimidine dimers cannot form - and once the spore germinates, GPR protease chops those SASP sleeves straight back into free [[amino acids|amino-acid]] to fuel the first burst of new protein synthesis.',
        blueprint: {
          role: 'DNA-saturating alpha-helical protective sleeves locking chromosomal dsDNA into heat- and UV-resistant A-form geometry',
          arrivesFrom: 'Abundant forespore sigma-G synthesis of ~6-7 kDa alpha/beta-SASPs on forespore [[70S ribosomes|ribosome-70s]]',
          inside: 'Bacillus subtilis SASP-DNA complex (X-ray structure PDB 2Z3X, ~4 nm) binding minor groove via [[alpha-helices|alpha-helix]] to induce B-to-A shift',
          deliversTo: 'Shields 4.22 Mbp [[DNA|dna]] against UV dimers, heat depurination, and radicals inside the [[core|real-gp-core]]',
          loop: 'During germination, GPR endoprotease degrades SASPs into free [[amino acids|amino-acid]], simultaneously freeing DNA and feeding ribosomes'
        },
        scientific:
          'Alpha/beta-type small acid-soluble spore [[protein|protein]]-DNA complex (Bacillus subtilis SspC-dsDNA crystal structure PDB 2Z3X, ~4 nm; ~5-10% of total spore core protein). Helix-turn-helix [[alpha-helix|alpha-helix]] monomers saturate the minor groove of the 4.22 Mbp [[dsDNA|dna]] chromosome, stiffening the duplex and driving a B-form to A-form conformational transition that suppresses depurination, oxidative cleavage, and UV cyclobutane pyrimidine dimer formation (favoring easily repaired spore photoproduct).',
        from: [
          { nodeId: 'dna', label: 'Forespore 4.22 Mbp DNA', cargo: 'B-form chromosome template' },
          { nodeId: 'alpha-helix', label: 'Alpha/Beta-SASP Sleeves', cargo: 'Sigma-G minor-groove armor' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'UV- & Heat-Proof Core', cargo: 'A-form locked genome' },
          { nodeId: 'amino-acid', label: 'Post-Germination Fuel', cargo: 'GPR-recycled amino acids' }
        ]
      },
      es: {
        subtitle: 'ADN en forma A blindado por α/β-SASP (PDB 2Z3X)',
        simple:
          'Pequeñas [[proteínas|protein]] ácidas solubles de espora (SASP) recubren todo el cromosoma dentro del [[núcleo|real-gp-core]] y tuercen el [[ADN|dna]] hacia una hélice compacta en forma A que evita daños por calor y luz ultravioleta.',
        story:
          'El [[ADN|dna]] en forma B desnudo pierde bases rápidamente con el calor y forma dímeros letales de timina bajo la luz ultravioleta. En la preespora madura, el factor σG dispara una síntesis masiva de proteínas [[α/β-SASP|real-gp-core]], que encajan como fundas en [[hélice α|alpha-helix]] a lo largo del surco menor de las 4,22 megabases del cromosoma. Esa cubierta gira la doble hélice a la geometría A rígida impidiendo los dímeros letales; luego, al germinar, la proteasa GPR trocea las SASP en [[aminoácidos|amino-acid]] libres para alimentar las primeras proteínas nuevas.',
        blueprint: {
          role: 'Fundas protectoras en hélice α que saturan el cromosoma y fijan el ADNbc en forma A inmune a calor y rayos UV',
          arrivesFrom: 'Síntesis abundante bajo σG de α/β-SASP (~6–7 kDa) en los [[ribosomas 70S|ribosome-70s]] de la preespora',
          inside: 'Complejo SASP–ADN de Bacillus subtilis (estructura cristalográfica PDB 2Z3X, ~4 nm) unido al surco menor induciendo paso B→A',
          deliversTo: 'Resguarda los 4,22 Mpb de [[ADN|dna]] frente a dímeros UV, depurinación térmica y radicales dentro del [[núcleo|real-gp-core]]',
          loop: 'Al germinar, la endoproteasa GPR degrada las SASP en [[aminoácidos|amino-acid]] libres, liberando el ADN y nutriendo ribosomas'
        },
        scientific:
          'Complejo [[proteína|protein]]–ADN de pequeñas proteínas ácidas solubles de espora tipo α/β (estructura cristalográfica SspC–ADNbc de Bacillus subtilis PDB 2Z3X, ~4 nm; ~5–10 % de la proteína total del núcleo). Monómeros con motivo [[hélice α|alpha-helix]] saturan el surco menor del [[ADNbc|dna]] de 4,22 Mpb, rigidizando la doble hélice e induciendo la transición B→A que suprime la depurinación térmica y sustituye dímeros ciclobutánicos por fotoproducto esporal reparable.',
        from: [
          { nodeId: 'dna', label: 'ADN preesporal de 4,22 Mpb', cargo: 'Cromosoma en forma B' },
          { nodeId: 'alpha-helix', label: 'Fundas α/β-SASP', cargo: 'Blindaje σG de surco menor' }
        ],
        to: [
          { nodeId: 'real-gp-core', label: 'Núcleo inmune a UV y calor', cargo: 'Genoma fijado en forma A' },
          { nodeId: 'amino-acid', label: 'Reserva tras germinar', cargo: 'Aminoácidos reciclados por GPR' }
        ]
      }
    },

    crosslink: {
      en: {
        subtitle: 'Atomic Close-Up: NAG-NAM Cross-Link & Ca-DPA Chelate',
        simple:
          'At 0.1 to 3 nanometers, this inset compares the two molecular signatures of [[Bacillus subtilis|real-gram-positive]]: the [[D-Ala-D-Ala|real-gp-crosslink]] peptide staple targeted by penicillin, and the [[Ca2+|atom-ca]]-dipicolinate pocket that vitrifies the [[spore core|real-gp-core]].',
        story:
          'Zooming all the way down to individual [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[Ca|atom-ca]] atoms unites the entire Gram-positive story. On the vegetative side, [[glucose|glucose]]-derived NAG and NAM rings alternate along beta-1,4 glycan backbones while [[PBPs|real-gp-pbp]] clip a terminal D-alanine to cross-link neighboring chains via mDAP or canonical Gly5 bridges - the exact bond imitated by a strained four-membered beta-lactam ring. Beside it sits the dormant spore chemistry: planar pyridine-2,6-dicarboxylate rings gripping [[calcium ions|atom-ca]] to lock out [[water|water]] and preserve life across extreme heat.',
        blueprint: {
          role: 'Molecular and CPK atomic inset (0.1-3 nm) contrasting wall transpeptidation chemistry against endospore Ca-DPA chelation',
          arrivesFrom: 'Universal biogenic elements [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] plus divalent [[Ca2+|atom-ca]]',
          inside: 'Beta-1,4 NAG-NAM + D-Ala-D-Ala/mDAP/Gly5 cross-link pocket (beta-lactam target) paired with tridentate [[Ca2+|atom-ca]]-DPA ring',
          deliversTo: 'Anchors mechanical strength of the [[40 nm wall|real-gp-wall]], antibiotic pharmacology at [[PBPs|real-gp-pbp]], and vitrification of the [[core|real-gp-core]]',
          loop: 'Demonstrates how six shared atomic elements assemble both an antibiotic-vulnerable growing wall and an indestructible dormant vault'
        },
        scientific:
          'Atomic-to-molecular structural inset (0.1-3 nm; van der Waals radii H 1.2 A, C 1.7 A, N 1.55 A, O 1.52 A, P 1.8 A, ionic [[Ca2+|atom-ca]] 1.00-1.14 A): contrasts (1) beta-1,4 GlcNAc-MurNAc [[peptidoglycan|peptidoglycan]] stem cross-linking (L-Ala-D-iGlu-mDAP-D-Ala-D-Ala in B. subtilis; Gly5 interpeptide bridge in S. aureus) plus [[teichoic|real-gp-teichoic]] phosphodiesters with (2) tridentate [[N|atom-n]]/[[O|atom-o]] chelation of [[Ca2+|atom-ca]] by dipicolinate in the [[endospore core|real-gp-core]].',
        from: [
          { nodeId: 'atom-ca', label: 'Calcium (Ca2+) & C/H/N/O/P', cargo: 'Six core survival elements' },
          { nodeId: 'glucose', label: 'NAG-NAM & Amino Stems', cargo: 'Sugar-peptide cross-link units' }
        ],
        to: [
          { nodeId: 'real-gp-crosslink', label: 'Cross-Link & Chelate Node', cargo: 'Wall weld vs. Ca-DPA pocket' },
          { nodeId: 'real-gp-pbp', label: 'Beta-Lactam Mimicry', cargo: 'D-Ala-D-Ala drug target' }
        ]
      },
      es: {
        subtitle: 'Detalle atómico: enlace NAG–NAM y quelato Ca-DPA',
        simple:
          'De 0,1 a 3 nanómetros, este detalle compara las dos firmas moleculares de [[Bacillus subtilis|real-gram-positive]]: la grapa peptídica [[D-Ala–D-Ala|real-gp-crosslink]] bloqueada por la penicilina y el bolsillo de dipicolinato con [[Ca²⁺|atom-ca]] que vitrifica el [[núcleo esporal|real-gp-core]].',
        story:
          'Bajar hasta los átomos individuales de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[Ca|atom-ca]] enlaza toda la historia Gram-positiva. En el lado vegetativo, los anillos NAG y NAM derivados de [[glucosa|glucose]] forman cadenas β-1,4 que las [[PBP|real-gp-pbp]] reticulan cortando una D-alanina terminal vía mDAP o puentes Gly₅: el enlace exacto que imita el tenso anillo β-lactámico. Junto a él aparece la química de la espora: anillos de piridin-2,6-dicarboxilato sujetando [[iones calcio|atom-ca]] para desplazar el [[agua|water]] y resistir el calor extremo.',
        blueprint: {
          role: 'Detalle molecular y atómico CPK (0,1–3 nm) que contrasta la transpeptidación mural frente a la quelación Ca-DPA',
          arrivesFrom: 'Elementos biogénicos [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] junto al catión divalente [[Ca²⁺|atom-ca]]',
          inside: 'Bolsillo β-1,4 NAG–NAM + D-Ala–D-Ala/mDAP/Gly₅ (diana β-lactámica) junto al anillo tridentado [[Ca²⁺|atom-ca]]–DPA',
          deliversTo: 'Sustenta la resistencia de la [[pared de 40 nm|real-gp-wall]], la acción antibiótica en [[PBP|real-gp-pbp]] y el vidrio del [[núcleo|real-gp-core]]',
          loop: 'Muestra cómo seis elementos atómicos comunes arman tanto una pared sensible a antibióticos como una cámara latente casi indestructible'
        },
        scientific:
          'Detalle estructural atómico-molecular (0,1–3 nm; radios de van der Waals H 1,2 Å, C 1,7 Å, N 1,55 Å, O 1,52 Å, P 1,8 Å; radio iónico [[Ca²⁺|atom-ca]] 1,00–1,14 Å): contrasta (1) la reticulación del [[peptidoglicano|peptidoglycan]] β-(1→4)-GlcNAc–MurNAc (L-Ala–D-iGlu–mDAP–D-Ala–D-Ala en B. subtilis; puente Gly₅ en S. aureus) y fosfodiésteres [[teicoicos|real-gp-teichoic]] con (2) la quelación tridentada [[N|atom-n]]/[[O|atom-o]] de [[Ca²⁺|atom-ca]] por dipicolinato en el [[núcleo de la endospora|real-gp-core]].',
        from: [
          { nodeId: 'atom-ca', label: 'Calcio (Ca²⁺) y C/H/N/O/P', cargo: 'Seis elementos clave' },
          { nodeId: 'glucose', label: 'NAG–NAM y tallos peptídicos', cargo: 'Unidades de reticulación mural' }
        ],
        to: [
          { nodeId: 'real-gp-crosslink', label: 'Enlace y quelato', cargo: 'Soldadura mural vs. Ca-DPA' },
          { nodeId: 'real-gp-pbp', label: 'Mimetismo β-lactámico', cargo: 'Diana farmacológica D-Ala–D-Ala' }
        ]
      }
    }
  }
};
