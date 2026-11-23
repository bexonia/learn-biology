import type { BilingualNodeLens, BilingualPartLens } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 16 Phase 18 Capstone Explorer nodes and all 36 Standalone Realistic Part
 * Lenses (`immune_defense_realistic.html` [18] + `pharmacology_lab.html` [18])
 * in `EN` & `ES` for Phase 18: Immune Defense & Targeted Pharmacology / Vaccines.
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * TTS synthesis, and adhere strictly to `AGENTS.md` Rule 8 (direct literal
 * biological prose with at most 2 concise analogies restricted to root `story`
 * lenses).
 */
export const IMMUNE_MEDICINE_NODE_LENSES: Record<string, BilingualNodeLens> = {
  'real-immune': {
    en: {
      simple:
        'The human immune system coordinates patrolling macrophages, secreted [[IgG antibodies|real-imm-igg]], and [[CD8+ cytotoxic T-cells|real-imm-tcr-mhci]] to destroy invading [[bacteria|real-bacterium]], block [[viruses|viruses]], and eliminate infected [[host cells|real-cell]] while sparing healthy tissue.',
      story:
        'Across a thirty-micrometer mucosal battleground beside healthy [[enterocytes|real-enterocyte]], three distinct immune defense arms operate side by side in real time. On the innate flank, a patrolling macrophage drives [[cytoskeletal|cytoskeleton]] pseudopods around a dividing [[E. coli|real-bacterium]], destroying it inside an acidic [[phagolysosome|real-imm-phagolysosome]] before presenting bacterial fragments on surface [[MHC-II|real-imm-mhcii]]. In the humoral space, Y-shaped [[IgG antibodies|real-imm-igg]] clamp onto [[SARS-CoV-2|real-coronavirus]] Spike domains to execute [[RBD neutralization|real-imm-rbd-block]]. On the cellular flank, surface MHC-I acts like an exterior status window displaying internal protein snippets so agile CD8+ T-cells can engage [[TCR-pMHC-I|real-imm-tcr-mhci]], open [[Perforin pores|real-imm-perforin]], and deliver [[Granzyme B|real-imm-granzyme]] to clear infected cells before partnering with [[targeted pharmacology|real-pharmacology]].',
      blueprint:
        'Role: Integrated 30 um mucosal immune defense architecture uniting innate phagocytosis, humoral neutralization, and cellular cytotoxicity; Inputs: Extracellular [[E. coli|real-bacterium]] pathogens, free [[SARS-CoV-2|real-coronavirus]] virions, infected [[epithelial cells|real-enterocyte]], and self vs non-self peptides; Inside: Macrophage [[phagolysosome|real-imm-phagolysosome]] + [[MHC-II|real-imm-mhcii]] (PDB 1DLH), B-cell [[IgG|real-imm-igg]] (PDB 1IGT) executing [[RBD blockade|real-imm-rbd-block]] (PDB 7BZ5/6M0J), and CD8+ [[TCR-pMHC-I|real-imm-tcr-mhci]] (PDB 1AO7) deploying [[Perforin|real-imm-perforin]] (PDB 3NSJ) + [[Granzyme B|real-imm-granzyme]] (PDB 1IAU); Outputs: Cleared bacteria, neutralized virions, orderly apoptosis of infected cells, and lasting adaptive memory primed by [[mRNA-LNP vaccines|real-pharm-mrna-lnp]].',
      scientific:
        'Multi-scale mammalian immune defense spanning a ~30 um mucosal tissue field down to 0.1 nm epitope bonds across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[S|atom-s]], and synaptic [[Ca2+|atom-ca]] ([[atomic interface|real-pharm-atoms]]). Integrates three structural arms: (1) innate macrophage actin phagocytosis, pH ~4.5 [[phagolysosome|real-imm-phagolysosome]] hydrolases + NOX2 ROS burst, and HLA-DR1 [[MHC-II|real-imm-mhcii]] (PDB 1DLH) presentation; (2) humoral B-cell [[IgG|real-imm-igg]] (PDB 1IGT) Fab blockade of [[SARS-CoV-2|real-coronavirus]] Spike RBD (PDB 7BZ5) away from epithelial ACE2 (PDB 6M0J, [[RBD block|real-imm-rbd-block]]); and (3) cellular CD8+ T-cell [[TCR-pMHC-I|real-imm-tcr-mhci]] (PDB 1AO7) signaling triggering [[Perforin|real-imm-perforin]] (PDB 3NSJ) pore assembly and [[Granzyme B|real-imm-granzyme]] (PDB 1IAU) caspase-mediated apoptosis.'
    },
    es: {
      simple:
        'El sistema inmunitario humano coordina macrófagos patrulleros, [[anticuerpos IgG|real-imm-igg]] secretados y [[linfocitos T citotóxicos CD8⁺|real-imm-tcr-mhci]] para destruir [[bacterias|real-bacterium]] invasoras, bloquear [[virus|viruses]] y eliminar [[células infectadas|real-cell]] sin dañar el tejido sano.',
      story:
        'En un campo mucoso de treinta micrómetros junto a [[enterocitos|real-enterocyte]] sanos, tres brazos inmunitarios actúan en paralelo en tiempo real. En el frente innato, un macrófago extiende pseudópodos del [[citoesqueleto|cytoskeleton]] sobre una [[E. coli|real-bacterium]] y la destruye en un [[fagolisosoma|real-imm-phagolysosome]] ácido antes de exhibir fragmentos en [[MHC-II|real-imm-mhcii]]. En el espacio humoral, los [[anticuerpos IgG|real-imm-igg]] en forma de Y capturan la espícula del [[SARS-CoV-2|real-coronavirus]] logrando el [[bloqueo del RBD|real-imm-rbd-block]]. En el frente celular, el MHC-I superficial actúa como una ventana exterior de estado que muestra fragmentos proteicos internos para que linfocitos T CD8⁺ acoplen su [[TCR–pMHC-I|real-imm-tcr-mhci]], abran poros de [[perforina|real-imm-perforin]] e inyecten [[granzima B|real-imm-granzyme]], cooperando con la [[farmacología dirigida|real-pharmacology]].',
      blueprint:
        'Rol: Arquitectura integrada de defensa mucosa de 30 µm que coordina fagocitosis innata, neutralización humoral y citotoxicidad celular · Entradas: Bacterias [[E. coli|real-bacterium]], viriones [[SARS-CoV-2|real-coronavirus]], [[células epiteliales|real-enterocyte]] infectadas y péptidos propios frente a extraños · Interior: [[Fagolisosoma|real-imm-phagolysosome]] + [[MHC-II|real-imm-mhcii]] (PDB 1DLH), [[IgG|real-imm-igg]] (PDB 1IGT) en [[bloqueo RBD|real-imm-rbd-block]] (PDB 7BZ5/6M0J), y [[TCR–pMHC-I|real-imm-tcr-mhci]] CD8⁺ (PDB 1AO7) con [[perforina|real-imm-perforin]] (PDB 3NSJ) y [[granzima B|real-imm-granzyme]] (PDB 1IAU) · Salida: Erradicación bacteriana, viriones neutralizados, apoptosis ordenada y memoria reforzada por [[vacunas ARNm-LNP|real-pharm-mrna-lnp]].',
      scientific:
        'Defensa inmunitaria de mamíferos desde un microentorno mucoso de ~30 µm hasta enlaces atómicos de 0,1 nm entre [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[S|atom-s]] y [[Ca²⁺|atom-ca]] sináptico ([[interfaz atómica|real-pharm-atoms]]). Integra tres brazos estructurales: (1) fagocitosis innata por actina en macrófagos, [[fagolisosoma|real-imm-phagolysosome]] ácido (pH ~4,5) con estallido ROS de NOX2 y presentación en [[MHC-II|real-imm-mhcii]] HLA-DR1 (PDB 1DLH); (2) neutralización humoral mediante [[IgG|real-imm-igg]] (PDB 1IGT) cuyos brazos Fab bloquean el RBD de [[SARS-CoV-2|real-coronavirus]] (PDB 7BZ5) frente a ACE2 (PDB 6M0J, [[bloqueo RBD|real-imm-rbd-block]]); y (3) vigilancia citotóxica CD8⁺ por [[TCR–pMHC-I|real-imm-tcr-mhci]] (PDB 1AO7), poros de [[perforina|real-imm-perforin]] (PDB 3NSJ) y proteólisis por [[granzima B|real-imm-granzyme]] (PDB 1IAU).'
    }
  },

  'real-imm-phagolysosome': {
    en: {
      simple:
        'A macrophage phagolysosome is an acidic digestive chamber formed when an engulfed bacterial [[vesicle|vesicle]] fuses with enzyme-packed [[lysosomes|lysosome]]. Proton pumps, digestive enzymes, and reactive oxygen radicals break down trapped [[bacteria|real-bacterium]] into harmless pieces.',
      story:
        'Once a patrolling macrophage recognizes bacterial surface patterns or [[IgG|real-imm-igg]] opsonization tags on an invading [[E. coli|real-bacterium]], rapid [[cytoskeletal|cytoskeleton]] branching wraps the rod inside a sealed phagosome. Within minutes, cytoplasmic [[lysosomes|lysosome]] dock and fuse with that membrane, flooding the sealed pocket with acid hydrolases while V-ATPase pumps burn ATP to drop luminal pH near 4.5. Simultaneously, membrane-embedded NADPH oxidase (NOX2) launches an oxidative respiratory burst, converting dissolved oxygen into superoxide and hydrogen peroxide that shred bacterial membranes and [[peptidoglycan|peptidoglycan]] walls, feeding clean peptide fragments directly to [[MHC-II|real-imm-mhcii]].',
      blueprint:
        'Role: Acidic oxidative bactericidal compartment (1-3 um) linking innate pathogen engulfment to adaptive antigen processing; Inputs: Engulfed [[E. coli|real-bacterium]] inside a nascent phagosome, fusing [[lysosomes|lysosome]], cytosolic NADPH, dissolved O2, and ATP; Inside: V-ATPase [[H+|atom-h]] pumps acidifying lumen to pH ~4.5, lysozyme and cathepsin proteases, plus heme-[[Fe|atom-fe]] NOX2 generating O2-, H2O2, and myeloperoxidase HOCl; Outputs: Destroyed bacterial debris, recycled [[amino acids|amino-acid]] and lipids, and 13-25 residue exogenous peptides routed into [[MHC-II|real-imm-mhcii]] loading compartments.',
      scientific:
        'Mature macrophage phagolysosome (~1-3 um diameter) assembled by Rab7/SNARE-mediated fusion of a phagocytic [[vesicle|vesicle]] containing [[E. coli|real-bacterium]] with acidic [[lysosomes|lysosome]]. Vacuolar H+-ATPases acidify the lumen to pH ~4.5-5.0, activating lysozyme (cleaving [[peptidoglycan|peptidoglycan]] beta-1,4 linkages), cathepsin proteases, and nucleases. Concurrently, the multi-subunit flavocytochrome b558 NADPH oxidase (NOX2, containing catalytic heme [[Fe|atom-fe]]) transfers electrons from cytosolic NADPH to luminal O2 forming superoxide (O2-), H2O2, and HOCl, generating 13-25 aa peptides that load onto [[MHC-II|real-imm-mhcii]] (PDB 1DLH) within the [[immune defense|real-immune]] pathway.'
    },
    es: {
      simple:
        'El fagolisosoma del macrófago es una cámara digestiva ácida formada cuando la [[vesícula|vesicle]] con una bacteria capturada se fusiona con [[lisosomas|lysosome]] cargados de enzimas. Bombas de protones, hidrolasas y radicales de oxígeno desmantelan a la [[bacteria|real-bacterium]] atrapada.',
      story:
        'Cuando un macrófago patrullero detecta patrones bacterianos o etiquetas de [[IgG|real-imm-igg]] sobre una [[E. coli|real-bacterium]], el [[citoesqueleto|cytoskeleton]] la envuelve por completo en un fagosoma cerrado. En minutos, los [[lisosomas|lysosome]] se fusionan con esa membrana y descargan hidrolasas ácidas mientras bombas V-ATPasa consumen ATP para bajar el pH luminal hasta 4,5. Al mismo tiempo, la NADPH oxidasa (NOX2) desata un estallido respiratorio oxidativo que convierte oxígeno en superóxido y peróxido de hidrógeno, destrozando la pared de [[peptidoglicano|peptidoglycan]] y enviando péptidos cortos hacia [[MHC-II|real-imm-mhcii]].',
      blueprint:
        'Rol: Compartimento bactericida ácido y oxidativo (1–3 µm) que conecta la captura innata con el procesamiento antigénico adaptativo · Entradas: [[E. coli|real-bacterium]] engullida en fagosoma, [[lisosomas|lysosome]] entrantes, NADPH citosólico, O₂ y ATP · Interior: Bombas V-ATPasa de [[H⁺|atom-h]] (pH ~4,5), lisozima, catepsinas y complejo NOX2 con [[Fe|atom-fe]] hemo generando O₂⁻, H₂O₂ y HOCl · Salida: Restos bacterianos neutralizados, [[aminoácidos|amino-acid]] reciclados y péptidos exógenos de 13–25 residuos cargados en [[MHC-II|real-imm-mhcii]].',
      scientific:
        'Fagolisosoma maduro de macrófago (~1–3 µm) formado por fusión mediada por Rab7 y SNARE entre una [[vesícula|vesicle]] fagocítica con [[E. coli|real-bacterium]] y [[lisosomas|lysosome]] ácidos. Las V-ATPasas reducen el pH luminal a ~4,5–5,0, activando lisozima (hidrólisis β-1,4 del [[peptidoglicano|peptidoglycan]]), catepsinas y nucleasas. Paralelamente, la NADPH oxidasa NOX2 (flavocitocromo b₅₅₈ con [[Fe|atom-fe]] hemo) transfiere electrones del NADPH al O₂ generando superóxido (O₂⁻), H₂O₂ y HOCl, produciendo péptidos de 13–25 aa para [[MHC-II|real-imm-mhcii]] (PDB 1DLH) en la [[defensa inmunitaria|real-immune]].'
    }
  },

  'real-imm-mhcii': {
    en: {
      simple:
        'MHC Class II is a surface display [[protein|protein]] on macrophages and dendritic cells that holds digested bacterial peptide fragments in an open groove so helper T-cells can inspect the threat and launch [[antibody|real-imm-igg]] production.',
      story:
        'Digesting an invading [[E. coli|real-bacterium]] inside a [[phagolysosome|real-imm-phagolysosome]] clears one microbe, yet lasting protection demands alerting adaptive lymphocytes across the body. Specialized endosomal compartments trim bacterial [[proteins|protein]] into 13-to-25-amino-acid peptides and swap them into the open peptide-binding cleft of heterodimeric MHC Class II after HLA-DM removes the protective CLIP plug. Exported in transport [[vesicles|vesicle]] to the macrophage [[plasma membrane|plasma-membrane]], loaded MHC-II presents that unmistakable bacterial evidence directly to CD4+ helper T-cells, unlocking clonal B-cell maturation into high-affinity [[IgG|real-imm-igg]] secretors and boosting [[CD8+ T-cell|real-imm-tcr-mhci]] vigilance.',
      blueprint:
        'Role: Professional antigen-presenting heterodimer (~7 nm) bridging innate phagocytic digestion to CD4+ helper T-cell activation; Inputs: Exogenous 13-25 aa bacterial peptides generated inside the [[phagolysosome|real-imm-phagolysosome]] and nascent alpha/beta MHC-II chains; Inside: HLA-DR1 alpha1-beta1 open-ended peptide-binding groove (PDB 1DLH) stabilized by conserved H-bonds and HLA-DM peptide exchange; Outputs: Surface pMHC-II complexes activating CD4+ T-helper cytokines that drive B-cell [[IgG|real-imm-igg]] class switching and macrophage activation.',
      scientific:
        'Human Class II Major Histocompatibility Complex heterodimer HLA-DR1 (crystal structure PDB 1DLH; non-covalent ~34 kDa alpha and ~29 kDa beta transmembrane glycoprotein chains spanning ~7 nm on macrophages, dendritic cells, and B-cells). Its alpha1 and beta1 domains form an eight-strand beta-sheet floor flanked by two alpha-helices with open ends accommodating extended 13-25 residue exogenous [[polypeptide|polypeptide]] fragments cleaved inside the [[phagolysosome|real-imm-phagolysosome]]. Following invariant-chain (Ii) proteolysis and HLA-DM catalyzed CLIP release, stable pMHC-II traffics via [[vesicles|vesicle]] to the [[plasma membrane|plasma-membrane]] to engage CD4+ T-cell receptors and coordinate [[IgG|real-imm-igg]] responses.'
    },
    es: {
      simple:
        'El MHC de clase II es una [[proteína|protein]] exhibidora en la superficie de macrófagos y células dendríticas que sujeta péptidos bacterianos digeridos en un surco abierto para que los linfocitos T cooperadores activen la producción de [[anticuerpos|real-imm-igg]].',
      story:
        'Digerir una [[E. coli|real-bacterium]] dentro del [[fagolisosoma|real-imm-phagolysosome]] elimina un microbio, pero proteger todo el organismo exige alertar al sistema adaptativo. Compartimentos endosomales recortan las [[proteínas|protein]] bacterianas en péptidos de 13 a 25 aminoácidos y, tras retirar HLA-DM el tapón protector CLIP, los cargan en la hendidura abierta del heterodímero MHC de clase II. Exportado en [[vesículas|vesicle]] hasta la [[membrana plasmática|plasma-membrane]] del macrófago, el MHC-II muestra esa prueba a los linfocitos T cooperadores CD4⁺, desencadenando la maduración de células B productoras de [[IgG|real-imm-igg]] y potenciando a los [[linfocitos T CD8⁺|real-imm-tcr-mhci]].',
      blueprint:
        'Rol: Heterodímero presentador de antígenos (~7 nm) que enlaza la digestión fagocítica innata con la activación de linfocitos T CD4⁺ · Entradas: Péptidos bacterianos exógenos de 13–25 aa procedentes del [[fagolisosoma|real-imm-phagolysosome]] y cadenas α/β de MHC-II · Interior: Surco abierto α1–β1 de HLA-DR1 (PDB 1DLH) estabilizado por enlaces de hidrógeno tras el intercambio catalizado por HLA-DM · Salida: Complejos pMHC-II en membrana que activan citocinas T cooperadoras para impulsar [[IgG|real-imm-igg]] y activar macrófagos.',
      scientific:
        'Complejo mayor de histocompatibilidad humano clase II heterodimérico HLA-DR1 (estructura cristalográfica PDB 1DLH; cadenas transmembrana glucoproteicas α de ~34 kDa y β de ~29 kDa, ~7 nm en macrófagos, células dendríticas y linfocitos B). Los dominios α1 y β1 forman una base de ocho hebras β y dos hélices α con extremos abiertos que alojan [[polipéptidos|polypeptide]] exógenos de 13–25 residuos originados en el [[fagolisosoma|real-imm-phagolysosome]]. Tras la proteólisis de la cadena invariante y liberación de CLIP por HLA-DM, pMHC-II viaja en [[vesículas|vesicle]] a la [[membrana plasmática|plasma-membrane]] para activar células T CD4⁺ y la respuesta [[IgG|real-imm-igg]].'
    }
  },

  'real-imm-igg': {
    en: {
      simple:
        'Immunoglobulin G (IgG) is a Y-shaped [[protein|protein]] antibody secreted by plasma cells. Its twin variable tips grip exact foreign viral or bacterial surfaces while its constant tail flags bound targets for destruction.',
      story:
        'Secreted by thousands of copies per second from mature plasma cells after [[MHC-II|real-imm-mhcii]] and T-helper priming, each 150-kilodalton IgG antibody patrols blood and mucosal fluid for specific molecular shapes. Two heavy chains and two light chains fold into twelve immunoglobulin domains joined by covalent [[sulfur|atom-s]] disulfide bridges at a flexible central hinge. That hinge lets the two identical Fab arms swivel independently across a twelve-nanometer span to clamp tightly onto [[SARS-CoV-2|real-coronavirus]] Spike proteins for [[RBD neutralization|real-imm-rbd-block]], while the exposed Fc stem recruits macrophages toward [[phagolysosome|real-imm-phagolysosome]] clearance and triggers complement.',
      blueprint:
        'Role: Bivalent 150 kDa Y-shaped humoral effector protein (~12 nm span) executing pathogen neutralization and Fc opsonization; Inputs: Somatic V(D)J-recombined heavy/light [[polypeptides|polypeptide]] translated on plasma-cell [[80S ribosomes|real-cd-ribo80]] and assembled with [[Cys-S-S-Cys|atom-s]] disulfides; Inside: Intact IgG2a architecture (PDB 1IGT) coupling two hypervariable CDR-tipped Fab arms through a proline-rich disulfide hinge to a glycosylated Fc stem; Outputs: Steric [[Spike RBD blockade|real-imm-rbd-block]] on free [[virions|viruses]], pathogen cross-linking, and Fc-receptor flagging for [[macrophage engulfment|real-imm-phagolysosome]].',
      scientific:
        'Intact mammalian Immunoglobulin G heterotetramer (IgG2a crystal structure PDB 1IGT; ~150 kDa, ~12 x 14 nm span composed of two ~50 kDa gamma heavy chains and two ~25 kDa kappa/lambda light chains linked by inter-chain [[S|atom-s]]-S disulfide bridges). Each Fab arm terminates in six hypervariable Complementarity-Determining Regions (CDR-H1-3, CDR-L1-3) mediating nanomolar-to-picomolar non-covalent [[epitope H-bonds|real-pharm-atoms]] for [[SARS-CoV-2 RBD blockade|real-imm-rbd-block]] (PDB 7BZ5), while the CH2/CH3 Fc stem bears conserved N297 glycans recognized by Fc-gamma receptors on [[phagocytes|real-imm-phagolysosome]] and C1q.'
    },
    es: {
      simple:
        'La inmunoglobulina G (IgG) es un anticuerpo [[proteico|protein]] en forma de Y secretado por células plasmáticas. Sus dos puntas variables sujetan superficies víricas o bacterianas exactas mientras su tallo constante marca el objetivo para su destrucción.',
      story:
        'Secretada a miles de copias por segundo por células plasmáticas tras la señal de [[MHC-II|real-imm-mhcii]] y linfocitos T cooperadores, cada IgG de 150 kilodaltons patrulla la sangre y las mucosas buscando formas moleculares concretas. Dos cadenas pesadas y dos ligeras se pliegan en doce dominios unidos por puentes disulfuro de [[azufre|atom-s]] en una bisagra flexible. Esa bisagra permite que sus dos brazos Fab giren en un alcance de doce nanómetros para sujetar la espícula del [[SARS-CoV-2|real-coronavirus]] logrando el [[bloqueo RBD|real-imm-rbd-block]], mientras el tallo Fc recluta macrófagos para la destrucción en el [[fagolisosoma|real-imm-phagolysosome]].',
      blueprint:
        'Rol: Proteína efectora humoral bivalente en Y de 150 kDa (~12 nm) que ejecuta neutralización directa y opsonización por Fc · Entradas: [[Polipéptidos|polypeptide]] pesados y ligeros recombinados por V(D)J traducidos en [[ribosomas 80S|real-cd-ribo80]] y enlazados por puentes [[Cys–S–S–Cys|atom-s]] · Interior: Arquitectura intacta IgG2a (PDB 1IGT) uniendo dos brazos Fab con bucles hipervariables CDR mediante bisagra disulfuro a un tallo Fc glucosilado · Salida: [[Bloqueo estérico del RBD|real-imm-rbd-block]] en [[viriones|viruses]], aglutinación y marcado Fc para [[fagocitosis|real-imm-phagolysosome]].',
      scientific:
        'Heterotetrámero intacto de inmunoglobulina G de mamíferos (cristalografía IgG2a PDB 1IGT; ~150 kDa, ~12 × 14 nm, formado por dos cadenas pesadas γ de ~50 kDa y dos ligeras κ/λ de ~25 kDa unidas por puentes disulfuro [[S|atom-s]]–S). Cada brazo Fab culmina en seis regiones determinantes de complementariedad (CDR-H1–3, CDR-L1–3) que forjan [[enlaces de hidrógeno atómicos|real-pharm-atoms]] de afinidad nanomolar-picomolar en el [[bloqueo del RBD de SARS-CoV-2|real-imm-rbd-block]] (PDB 7BZ5), mientras el tallo Fc CH2/CH3 glucosilado en N297 activa receptores Fcγ en [[fagocitos|real-imm-phagolysosome]] y C1q.'
    }
  },

  'real-imm-rbd-block': {
    en: {
      simple:
        'Viral neutralization occurs when [[IgG|real-imm-igg]] Fab arms latch onto the [[SARS-CoV-2|real-coronavirus]] Spike receptor-binding domain, physically covering the exact contact patch needed to dock onto host ACE2 receptors.',
      story:
        'To infect a human respiratory or intestinal [[epithelial cell|real-enterocyte]], a [[SARS-CoV-2|real-coronavirus]] virion must flip its Spike Receptor-Binding Domain (RBD) into the open up-state and press a contoured motif directly against the host ACE2 carboxypeptidase. High-affinity neutralizing [[IgG|real-imm-igg]] antibodies primed by prior infection or [[mRNA-LNP vaccination|real-pharm-mrna-lnp]] intercept that interface before contact ever happens. Their sculpted Fab CDR loops nestle across the RBD receptor-binding ridge via dense [[hydrogen bonds and salt bridges|real-pharm-atoms]], creating a physical steric barrier that keeps ACE2 cleanly repelled while leaving the virus stranded outside the [[plasma membrane|plasma-membrane]].',
      blueprint:
        'Role: Steric humoral neutralization blocking viral entry prior to host membrane fusion; Inputs: Up-conformation [[SARS-CoV-2|real-coronavirus]] Spike RBD, neutralizing [[IgG|real-imm-igg]] Fab variable domains, and nearby epithelial [[plasma-membrane|plasma-membrane]] ACE2; Inside: Competitive overlap between Fab-RBD docking (PDB 7BZ5, B38 antibody) and native ACE2-RBD recognition (PDB 6M0J) across ~800-1,000 A^2 of buried surface; Outputs: Neutralized virions unable to enter [[human cells|real-cell]] and Fc-tagged complexes cleared via [[macrophage phagocytosis|real-imm-phagolysosome]].',
      scientific:
        'Competitive steric neutralization at the [[SARS-CoV-2|real-coronavirus]] Spike Receptor-Binding Domain (residues 319-541). Class 1 neutralizing [[IgG|real-imm-igg]] Fab B38 (crystal structure PDB 7BZ5) engages 18 of the 21 RBD residues otherwise contacted by the N-terminal alpha-1 helix of human epithelial ACE2 (complex PDB 6M0J; ~860 A^2 buried interface stabilized by [[C|atom-c]], [[N|atom-n]], and [[O|atom-o]] polar networks in [[atomic epitope recognition|real-pharm-atoms]]). Because Fab binding affinity (Kd ~1-70 nM) and bivalent avidity outcompete ACE2 docking, virions cannot trigger TMPRSS2 cleavage or fusion, explaining why [[mRNA-LNP vaccines|real-pharm-mrna-lnp]] encode prefusion Spike.'
    },
    es: {
      simple:
        'La neutralización vírica ocurre cuando los brazos Fab de la [[IgG|real-imm-igg]] se fijan al dominio de unión al receptor de la espícula del [[SARS-CoV-2|real-coronavirus]], cubriendo físicamente la superficie exacta que necesita para acoplarse al receptor humano ACE2.',
      story:
        'Para infectar una [[célula epitelial|real-enterocyte]] respiratoria o intestinal, el virión del [[SARS-CoV-2|real-coronavirus]] debe levantar el dominio de unión al receptor (RBD) de su espícula y acoplarlo directamente sobre el receptor humano ACE2. Los anticuerpos [[IgG|real-imm-igg]] neutralizantes inducidos por infección previa o por [[vacunas ARNm-LNP|real-pharm-mrna-lnp]] interceptan esa superficie antes del contacto. Sus bucles Fab CDR cubren la cresta del RBD mediante densos [[enlaces de hidrógeno y puentes salinos|real-pharm-atoms]], levantando un bloqueo estérico que impide la unión a ACE2 y deja al virus varado fuera de la [[membrana plasmática|plasma-membrane]].',
      blueprint:
        'Rol: Neutralización humoral estérica que impide la entrada vírica antes de la fusión de membranas · Entradas: RBD abierto de la espícula de [[SARS-CoV-2|real-coronavirus]], dominios variables Fab de [[IgG|real-imm-igg]] y receptor epitelial ACE2 en la [[membrana plasmática|plasma-membrane]] · Interior: Solapamiento competitivo entre Fab–RBD (PDB 7BZ5, anticuerpo B38) y ACE2–RBD nativo (PDB 6M0J) sobre ~800–1.000 Å² · Salida: Viriones neutralizados incapaces de entrar en [[células humanas|real-cell]] y eliminados por [[fagocitosis|real-imm-phagolysosome]].',
      scientific:
        'Neutralización competitiva estérica sobre el dominio RBD de la espícula del [[SARS-CoV-2|real-coronavirus]] (residuos 319–541). El Fab neutralizante de clase 1 B38 de [[IgG|real-imm-igg]] (PDB 7BZ5) contacta 18 de los 21 residuos del RBD requeridos por la hélice α1 de la enzima humana ACE2 (complejo PDB 6M0J; interfaz de ~860 Å² sostenida por redes polares de [[C|atom-c]], [[N|atom-n]] y [[O|atom-o]] en el [[reconocimiento atómico|real-pharm-atoms]]). La alta afinidad (K_d ~1–70 nM) y avidez bivalente impiden la activación por TMPRSS2 y la fusión, base protectora de las [[vacunas ARNm-LNP|real-pharm-mrna-lnp]].'
    }
  },

  'real-imm-tcr-mhci': {
    en: {
      simple:
        'Every nucleated human cell displays snippets of its internal [[proteins|protein]] on MHC Class I. When a virus hijacks a cell, patrolling CD8+ T-cells recognize the foreign viral peptide through their T-cell receptor (TCR) and lock onto the target.',
      story:
        'Once a [[virus|viruses]] slips inside a [[human cell|real-cell]], circulating [[IgG antibodies|real-imm-igg]] outside the [[plasma membrane|plasma-membrane]] can no longer reach it. Cellular immunity solves that blind spot through constant internal auditing: cytosolic proteasomes chop samples of every translated [[polypeptide|polypeptide]] into crisp eight-to-ten-amino-acid peptides and load them onto MHC Class I molecules across the surface. When a patrolling CD8+ cytotoxic T-cell aligns its alpha-beta T-cell receptor across the fifteen-nanometer immunological synapse and locks onto a foreign viral nine-mer alongside CD8 co-receptor binding, an intracellular [[Ca2+|atom-ca]] wave polarizes lytic granules to release [[Perforin|real-imm-perforin]] and [[Granzyme B|real-imm-granzyme]].',
      blueprint:
        'Role: Precision cellular surveillance synapse (~15 nm intermembrane gap) distinguishing healthy self peptides from intracellular viral infection; Inputs: Proteasome-cleaved 8-10 aa endogenous viral peptides loaded on host Class I MHC plus patrolling CD8+ alpha-beta TCR complexes; Inside: Ternary TCR-pMHC-I recognition bridge (PDB 1AO7, A6 TCR bound to 9-mer peptide on HLA-A2) coupled to CD3-zeta ITAM phosphorylation and [[Ca2+|atom-ca]] signaling; Outputs: Directed cytotoxic synapse polarization triggering exocytosis of [[Perforin|real-imm-perforin]] and [[Granzyme B|real-imm-granzyme]] onto the infected target only.',
      scientific:
        'Human cytotoxic CD8+ T-cell recognition ternary complex (crystal structure PDB 1AO7; alpha-beta A6 TCR docked diagonally across a 9-mer viral peptide bound inside the closed alpha1-alpha2 cleft of Class I HLA-A2 paired with beta2-microglobulin, bridging a ~15 nm immunological synapse). Whereas [[MHC-II|real-imm-mhcii]] displays exogenous peptides on specialized phagocytes, MHC-I is expressed on virtually all nucleated [[human cells|real-cell]] (unlike anucleate [[erythrocytes|real-erythrocyte]]) to report cytosolic [[80S translation|real-cd-ribo80]] products. Productive TCR-pMHC-I engagement recruits Lck via CD8, activating ZAP-70 and store-operated [[Ca2+|atom-ca]] influx to secrete [[Perforin|real-imm-perforin]] and [[Granzyme B|real-imm-granzyme]].'
    },
    es: {
      simple:
        'Toda célula humana nucleada exhibe fragmentos de sus [[proteínas|protein]] internas en MHC de clase I. Cuando un virus invade la célula, los linfocitos T CD8⁺ patrulleros detectan el péptido vírico con su receptor TCR y fijan el objetivo.',
      story:
        'Cuando un [[virus|viruses]] logra entrar en una [[célula humana|real-cell]], los [[anticuerpos IgG|real-imm-igg]] que circulan fuera de la [[membrana plasmática|plasma-membrane]] ya no pueden alcanzarlo. La inmunidad celular resuelve ese punto ciego mediante auditoría continua: los proteasomas citosólicos trocean muestras de cada [[polipéptido|polypeptide]] recién fabricado en péptidos de ocho a diez aminoácidos y los cargan en MHC de clase I sobre la superficie. Cuando un linfocito T citotóxico CD8⁺ encaja su receptor TCR αβ a través de la sinapsis inmunitaria de quince nanómetros sobre un nonapéptido vírico, una oleada de [[Ca²⁺|atom-ca]] polariza los gránulos líticos para liberar [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]].',
      blueprint:
        'Rol: Sinapsis de vigilancia celular de precisión (~15 nm entre membranas) que distingue péptidos propios de infección vírica intracelular · Entradas: Péptidos víricos endógenos de 8–10 aa del proteasoma en MHC-I huésped y receptores TCR αβ de linfocitos CD8⁺ · Interior: Puente ternario TCR–pMHC-I (PDB 1AO7, TCR A6 sobre nonapéptido en HLA-A2) acoplado a fosforilación de CD3 y señal de [[Ca²⁺|atom-ca]] · Salida: Polarización focal de gránulos que exocitan [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]] exclusivamente sobre la célula infectada.',
      scientific:
        'Complejo ternario humano de reconocimiento citotóxico CD8⁺ (estructura cristalográfica PDB 1AO7; TCR αβ A6 acoplado diagonalmente sobre un nonapéptido vírico alojado en el surco cerrado α1–α2 de HLA-A2 con β₂-microglobulina, abarcando una sinapsis de ~15 nm). A diferencia del [[MHC-II|real-imm-mhcii]] restringido a fagocitos, el MHC-I está presente en casi toda [[célula humana|real-cell]] nucleada (salvo los [[eritrocitos|real-erythrocyte]] sin núcleo) para informar de la [[traducción 80S|real-cd-ribo80]] interna. La unión productiva recluta Lck vía CD8, activa ZAP-70 e influjo de [[Ca²⁺|atom-ca]] desencadenando [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]].'
    }
  },

  'real-imm-perforin': {
    en: {
      simple:
        'Perforin is a ring-forming [[protein|protein]] released by CD8+ T-cells inside the immunological synapse. Triggered by extracellular [[calcium|atom-ca]], roughly twenty Perforin copies assemble into a wide hollow pore right through the infected cell membrane.',
      story:
        'Stored safely at acidic pH ~5.5 inside cytotoxic granules of a CD8+ T-cell, monomeric Perforin stays completely inert so it never punctures its own host lymphocyte. The instant [[TCR-pMHC-I|real-imm-tcr-mhci]] recognition triggers granule exocytosis into the neutral, [[Ca2+|atom-ca]]-rich fifteen-nanometer synaptic cleft, Perforin\'s C2 domain locks onto target [[phospholipids|phospholipid]] on the virus-infected cell. Nineteen to twenty-four monomers rapidly oligomerize into a ring and unfurl paired transmembrane beta-hairpins through the bilayer, opening an eighteen-to-twenty-nanometer water-filled portal wide enough for [[Granzyme B|real-imm-granzyme]] to stream directly into the infected cytosol.',
      blueprint:
        'Role: Ca2+-triggered cytolytic pore-forming protein punching ~18-20 nm delivery barrels across infected target membranes; Inputs: Exocytosed monomeric Perforin (~67 kDa) from polarized CD8+ lytic granules, synaptic [[Ca2+|atom-ca]] (~1-2 mM), and target [[plasma-membrane|plasma-membrane]] phospholipids; Inside: MACPF/CDC fold monomers (PDB 3NSJ) binding lipids via C2 domains and converting helical clusters into a giant ~19-24-mer transmembrane beta-barrel; Outputs: Transiently open ~18-20 nm aqueous pores channeling [[Granzyme B|real-imm-granzyme]] into the infected cell while sparing bystander healthy cells.',
      scientific:
        'Mammalian cytolytic pore-forming glycoprotein Perforin-1 (crystal structure PDB 3NSJ; ~67 kDa monomer comprising an N-terminal Membrane Attack Complex/Perforin [MACPF] domain, EGF-like linker, and C-terminal [[Ca2+|atom-ca]]-binding C2 domain). Kept inactive inside acidic (pH ~5.5) CD8+ T-cell granules by calreticulin and low free Ca2+; upon [[TCR-pMHC-I|real-imm-tcr-mhci]]-triggered secretion into the neutral synaptic cleft (~1.2 mM Ca2+), 19-24 subunits bind target [[phospholipid|phospholipid]] headgroups and insert two amphipathic beta-hairpins per monomer to form an ~18-20 nm lumen beta-barrel permitting rapid [[Granzyme B|real-imm-granzyme]] entry.'
    },
    es: {
      simple:
        'La perforina es una [[proteína|protein]] formadora de anillos liberada por los linfocitos T CD8⁺ en la sinapsis inmunitaria. Activada por el [[calcio|atom-ca]] extracelular, unas veinte copias ensamblan un amplio poro hueco a través de la membrana de la célula infectada.',
      story:
        'Almacenada de forma segura a pH ácido ~5,5 dentro de los gránulos citotóxicos del linfocito T CD8⁺, la perforina monomérica permanece inactiva para no perforar a su propia célula. En cuanto el reconocimiento [[TCR–pMHC-I|real-imm-tcr-mhci]] desencadena la exocitosis hacia la hendidura sináptica neutra y rica en [[Ca²⁺|atom-ca]], su dominio C2 se ancla en los [[fosfolípidos|phospholipid]] de la célula infectada. Entre diecinueve y veinticuatro monómeros forman rápidamente un anillo y despliegan horquillas β transmembrana, abriendo un portal acuoso de dieciocho a veinte nanómetros por el que fluye [[granzima B|real-imm-granzyme]].',
      blueprint:
        'Rol: Proteína citolítica activada por Ca²⁺ que perfora barriles de entrega de ~18–20 nm en membranas diana infectadas · Entradas: Perforina monomérica (~67 kDa) exocitada de gránulos CD8⁺, [[Ca²⁺|atom-ca]] sináptico (~1–2 mM) y [[fosfolípidos|phospholipid]] de la membrana diana · Interior: Monómeros MACPF/CDC (PDB 3NSJ) fijados por dominios C2 que despliegan un barril β transmembrana de 19–24 subunidades · Salida: Poros acuosos de ~18–20 nm que canalizan [[granzima B|real-imm-granzyme]] hacia la célula infectada sin dañar células vecinas.',
      scientific:
        'Glucoproteína citolítica formadora de poros Perforina-1 de mamíferos (cristalografía PDB 3NSJ; monómero de ~67 kDa con dominio N-terminal MACPF, conector EGF y dominio C2 dependiente de [[Ca²⁺|atom-ca]]). Inactiva en gránulos ácidos (pH ~5,5) del linfocito T CD8⁺; tras la exocitosis inducida por [[TCR–pMHC-I|real-imm-tcr-mhci]] en la hendidura neutra (~1,2 mM Ca²⁺), 19–24 monómeros se anclan a [[fosfolípidos|phospholipid]] e insertan dos horquillas β anfipáticas cada uno formando un barril β de ~18–20 nm de luz para el paso directo de [[granzima B|real-imm-granzyme]].'
    }
  },

  'real-imm-granzyme': {
    en: {
      simple:
        'Granzyme B is a precision cutting [[protein|protein]] enzyme that enters virus-infected cells through [[Perforin pores|real-imm-perforin]] and activates self-destruct caspases so the infected cell shuts down cleanly before releasing new [[viruses|viruses]].',
      story:
        'Bursting an infected cell open violently would spill live [[viruses|viruses]] and inflammatory debris across neighboring healthy tissue. Instead, CD8+ T-cells deliver Granzyme B serine proteases right through open [[Perforin|real-imm-perforin]] rings immediately after [[TCR-pMHC-I|real-imm-tcr-mhci]] confirmation. Inside the target cytosol, Granzyme B slices proteins strictly after aspartate residues: it directly activates executioner Procaspase-3 and cleaves Bid into tBid, prompting target [[mitochondria|mitochondrion]] to release cytochrome c and amplify the caspase cascade. Within minutes, viral replication halts, nuclear [[DNA|dna]] condenses neatly, and membrane blebs invite quiet [[macrophage|real-imm-phagolysosome]] cleanup.',
      blueprint:
        'Role: Aspartate-specific cytotoxic serine protease (~32 kDa) triggering non-inflammatory programmed apoptosis inside virus-infected cells; Inputs: Secreted Granzyme B passing through ~18-20 nm [[Perforin|real-imm-perforin]] pores into a [[TCR-pMHC-I|real-imm-tcr-mhci]]-verified infected cell; Inside: Chymotrypsin-fold catalytic triad His57-Asp102-Ser195 (PDB 1IAU) with positively charged S1 Arg226 pocket cleaving Procaspase-3 and BH3-only Bid; Outputs: Mitochondrial outer-membrane permeabilization, ordered caspase-3/CAD [[DNA|dna]] fragmentation, halted viral assembly, and silent [[phagocytic|real-imm-phagolysosome]] clearance.',
      scientific:
        'Human cytotoxic serine protease Granzyme B (crystal structure PDB 1IAU; ~32 kDa trypsin/chymotrypsin-like fold with catalytic triad His57-Asp102-Ser195 and basic Arg226 at the S1 specificity pocket enforcing strict cleavage C-terminal to P1 aspartate residues). Delivered through [[Perforin|real-imm-perforin]] (PDB 3NSJ) pores upon [[TCR-pMHC-I|real-imm-tcr-mhci]] synapse activation, Granzyme B directly cleaves and activates Procaspase-3/7 and hydrolyzes cytosolic Bid to truncated tBid, triggering Bax/Bak oligomerization on [[mitochondrial|mitochondrion]] outer membranes and orderly apoptotic clearance of virus-infected [[human cells|real-cell]] without necrotic spread.'
    },
    es: {
      simple:
        'La granzima B es una enzima [[proteica|protein]] de corte preciso que entra en células infectadas por virus a través de [[poros de perforina|real-imm-perforin]] y activa caspasas de autodestrucción ordenada antes de que se liberen nuevos [[virus|viruses]].',
      story:
        'Reventar violentamente una célula infectada dispersaría [[virus|viruses]] activos y restos inflamatorios sobre el tejido sano vecino. En su lugar, los linfocitos T CD8⁺ vierten proteasas de serina granzima B a través de los poros de [[perforina|real-imm-perforin]] recién confirmada la unión [[TCR–pMHC-I|real-imm-tcr-mhci]]. En el citosol diana, la granzima B corta estrictamente tras residuos aspartato: activa la procaspasa-3 ejecutora y escinde Bid en tBid, haciendo que las [[mitocondrias|mitochondrion]] liberen citocromo c y amplifiquen la cascada. En minutos se frena el virus, se compacta el [[ADN|dna]] y los macrófagos recogen los restos en un [[fagolisosoma|real-imm-phagolysosome]].',
      blueprint:
        'Rol: Serina proteasa citotóxica específica de aspartato (~32 kDa) que dispara apoptosis programada sin inflamación en células infectadas · Entradas: Granzima B secretada atravesando poros de [[perforina|real-imm-perforin]] (~18–20 nm) hacia una célula validada por [[TCR–pMHC-I|real-imm-tcr-mhci]] · Interior: Tríada catalítica His57–Asp102–Ser195 tipo quimotripsina (PDB 1IAU) con bolsillo S1 Arg226 cortando procaspasa-3 y Bid · Salida: Permeabilización [[mitocondrial|mitochondrion]], fragmentación ordenada del [[ADN|dna]], fin del ensamblaje vírico y limpieza [[fagocítica|real-imm-phagolysosome]].',
      scientific:
        'Serina proteasa citotóxica humana Granzima B (estructura cristalográfica PDB 1IAU; ~32 kDa con pliegue tipo tripsina/quimotripsina, tríada catalítica His57–Asp102–Ser195 y Arg226 básica en el bolsillo S1 que determina corte estricto tras P1-aspartato). Introducida vía poros de [[perforina|real-imm-perforin]] (PDB 3NSJ) tras activar [[TCR–pMHC-I|real-imm-tcr-mhci]], escinde directamente procaspasas 3/7 y Bid a tBid, induciendo poros Bax/Bak en [[mitocondrias|mitochondrion]] y apoptosis limpia de [[células humanas|real-cell]] infectadas sin necrosis inflamatoria.'
    }
  },

  'real-pharmacology': {
    en: {
      simple:
        'Targeted pharmacology exploits structural differences between pathogens and [[human cells|real-cell]]: antibiotics hit bacterial [[peptidoglycan|peptidoglycan]] walls or 70S ribosomes (never viruses), antivirals stall viral polymerases, and [[mRNA-LNP vaccines|real-pharm-mrna-lnp]] safely train immunity.',
      story:
        'Modern medicine rests on one foundational principle built across this entire course: selective toxicity works only when a drug strikes a molecular target present in the pathogen and absent or structurally different in [[human cells|real-cell]]. Across a five-organism bench, penicillin shatters [[E. coli|real-bacterium]] by locking [[PBP transpeptidases|real-pharm-pbp]] while sparing wall-less [[Mycoplasma|real-mycoplasma]] and [[viruses|viruses]]; [[macrolides|real-pharm-macrolide]] and [[tetracyclines|real-pharm-tetra]] silence bacterial 70S ribosomes in bacteria including [[Chlamydia|real-chlamydia]] while leaving human [[80S ribosomes|real-cd-ribo80]] running untouched. Because viruses lack walls and ribosomes, direct antivirals instead jam [[SARS-CoV-2 RdRp|real-pharm-rdrp]] or [[HIV-1 RT|real-pharm-hivrt]]. Completing the bridge to [[immune defense|real-immune]], [[mRNA-LNP vaccines|real-pharm-mrna-lnp]] act like a temporary blueprint read by cytosolic 80S ribosomes outside the intact [[nucleus|nucleus]], dissolving naturally once adaptive memory is trained.',
      blueprint:
        'Role: Capstone comparative Drug x Target selectivity bench uniting cell architecture, central dogma, immunity, and rational medicine; Inputs: Five reference organisms ([[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], [[SARS-CoV-2|real-coronavirus]]/[[HIV-1|real-hiv]], [[Human epithelial cell|real-cell]]) tested against four therapeutic classes; Inside: Beta-lactam [[PBP|real-pharm-pbp]] (PDB 1PWC), bacterial 70S [[macrolide|real-pharm-macrolide]] (PDB 4V7U) & [[tetracycline|real-pharm-tetra]] (PDB 1HNW) vs spared human [[80S|real-cd-ribo80]] (PDB 4UG0), antiviral [[RdRp|real-pharm-rdrp]] (PDB 7BV2) & [[HIV-RT|real-pharm-hivrt]] (PDB 3V4I), plus cytosolic [[mRNA-LNP|real-pharm-mrna-lnp]] and [[atomic drug bonds|real-pharm-atoms]]; Outputs: Mechanistic proof of why antibiotics cure bacteria, why antibiotics never cure viruses, and how vaccines prime lasting protection.',
      scientific:
        'Comparative molecular pharmacology bench integrating structural selective toxicity across bacterial, viral, and eukaryotic domains down to 0.1 nm [[covalent and steric drug chemistry|real-pharm-atoms]]. Demonstrates four mechanistically distinct clinical classes: (1) beta-lactam covalent Ser-acylation of [[PBP|real-pharm-pbp]] (PDB 1PWC) lysing [[peptidoglycan|peptidoglycan]]-walled [[E. coli|real-bacterium]] while failing against wall-less [[Mycoplasma|real-mycoplasma]] and acellular [[viruses|viruses]]; (2) 70S-selective translation inhibitors targeting 23S rRNA A2058 ([[macrolide|real-pharm-macrolide]], PDB 4V7U) and 16S rRNA A-site ([[tetracycline|real-pharm-tetra]], PDB 1HNW) across bacteria including [[Chlamydia|real-chlamydia]] while sparing divergent human [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0); (3) nucleoside-analog polymerase stalling on [[SARS-CoV-2 RdRp|real-pharm-rdrp]] (PDB 7BV2) and [[HIV-1 RT|real-pharm-hivrt]] (PDB 3V4I); and (4) non-integrating cytosolic [[mRNA-LNP vaccination|real-pharm-mrna-lnp]] priming [[IgG|real-imm-igg]] and [[CD8+ T-cells|real-imm-tcr-mhci]].'
    },
    es: {
      simple:
        'La farmacología dirigida aprovecha diferencias estructurales entre patógenos y [[células humanas|real-cell]]: los antibióticos atacan paredes de [[peptidoglicano|peptidoglycan]] o ribosomas 70S bacterianos (nunca virus), los antivirales frenan polimerasas víricas y las [[vacunas ARNm-LNP|real-pharm-mrna-lnp]] entrenan la inmunidad.',
      story:
        'La medicina moderna descansa en un principio central de todo este curso: la toxicidad selectiva solo funciona cuando el fármaco golpea una diana molecular presente en el patógeno y ausente o distinta en las [[células humanas|real-cell]]. En un banco de cinco organismos, la penicilina rompe a [[E. coli|real-bacterium]] bloqueando las [[transpeptidasas PBP|real-pharm-pbp]] pero respeta al [[Mycoplasma|real-mycoplasma]] sin pared y a los [[virus|viruses]]; [[macrólidos|real-pharm-macrolide]] y [[tetraciclinas|real-pharm-tetra]] detienen los ribosomas 70S bacterianos —incluida [[Chlamydia|real-chlamydia]]— sin frenar los [[ribosomas 80S|real-cd-ribo80]] humanos. Como los virus carecen de pared y ribosomas, los antivirales bloquean la [[RdRp de SARS-CoV-2|real-pharm-rdrp]] o la [[RT de VIH-1|real-pharm-hivrt]]. Cerrando el puente con la [[defensa inmunitaria|real-immune]], las [[vacunas ARNm-LNP|real-pharm-mrna-lnp]] actúan como un plano temporal leído por ribosomas 80S fuera del [[núcleo|nucleus]] intacto que se degrada tras entrenar la memoria.',
      blueprint:
        'Rol: Banco comparativo culminante de selectividad Fármaco × Diana que integra arquitectura celular, dogma central, inmunidad y medicina racional · Entradas: Cinco organismos ([[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], [[SARS-CoV-2|real-coronavirus]]/[[VIH-1|real-hiv]], [[célula humana|real-cell]]) frente a cuatro clases terapéuticas · Interior: [[PBP|real-pharm-pbp]] con betalactámico (PDB 1PWC), [[macrólido|real-pharm-macrolide]] 70S (PDB 4V7U) y [[tetraciclina|real-pharm-tetra]] (PDB 1HNW) frente a [[80S|real-cd-ribo80]] humano intacto (PDB 4UG0), antivirales [[RdRp|real-pharm-rdrp]] (PDB 7BV2) y [[VIH-RT|real-pharm-hivrt]] (PDB 3V4I), más [[ARNm-LNP|real-pharm-mrna-lnp]] y [[enlaces atómicos|real-pharm-atoms]] · Salida: Prueba mecanística de por qué los antibióticos curan bacterias, nunca virus, y cómo vacunan los LNP.',
      scientific:
        'Banco comparativo de farmacología molecular que integra toxicidad selectiva estructural en dominios bacteriano, vírico y eucariota hasta [[enlaces químicos de 0,1 nm|real-pharm-atoms]]. Contrasta cuatro clases clínicas: (1) acilación covalente de serina en [[PBP|real-pharm-pbp]] (PDB 1PWC) por betalactámicos, lisando [[E. coli|real-bacterium]] con [[peptidoglicano|peptidoglycan]] pero ineficaz ante [[Mycoplasma|real-mycoplasma]] sin pared y [[virus|viruses]]; (2) inhibidores selectivos del ribosoma 70S en ARNr 23S A2058 ([[macrólido|real-pharm-macrolide]], PDB 4V7U) y sitio A 16S ([[tetraciclina|real-pharm-tetra]], PDB 1HNW) activos contra [[Chlamydia|real-chlamydia]] y respetuosos con el [[80S humano|real-cd-ribo80]] (PDB 4UG0); (3) análogos nucleosídicos frente a [[RdRp|real-pharm-rdrp]] (PDB 7BV2) y [[VIH-1 RT|real-pharm-hivrt]] (PDB 3V4I); y (4) [[vacunación ARNm-LNP|real-pharm-mrna-lnp]] citosólica que induce [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]].'
    }
  },

  'real-pharm-pbp': {
    en: {
      simple:
        'Penicillin mimics the natural building blocks of bacterial [[peptidoglycan|peptidoglycan]] and snaps covalently onto Penicillin-Binding Protein (PBP) enzymes. Unable to stitch its [[cell wall|cell-wall]] while internal water pressure builds, the dividing [[bacterium|real-bacterium]] bursts.',
      story:
        'Most walled bacteria such as [[E. coli|real-bacterium]] and [[Gram-positive bacilli|real-gram-positive]] live under high internal osmotic turgor resisted solely by their cross-linked [[peptidoglycan|peptidoglycan]] meshwork. During growth, Penicillin-Binding Protein (PBP) transpeptidases stitch adjacent stem peptides ending in D-Ala-D-Ala. Penicillin G carries a strained four-membered beta-lactam ring that closely mimics that D-Ala-D-Ala geometry: when PBP\'s catalytic serine attacks the beta-lactam carbonyl, the ring pops open and forms a stubborn covalent [[acyl-ester bond|real-pharm-atoms]] that traps the enzyme dead. Without cross-linking, newly growing wall zones weaken and rupture osmotically, whereas wall-less [[Mycoplasma|real-mycoplasma]], [[viruses|viruses]], and [[human cells|real-cell]] lack PBP targets completely and remain untouched.',
      blueprint:
        'Role: Suicide beta-lactam inhibition of bacterial peptidoglycan cross-linking driving selective bactericidal osmotic lysis; Inputs: Periplasmic Penicillin G beta-lactam ring, bacterial PBP transpeptidase (DD-peptidase), and uncross-linked [[peptidoglycan|peptidoglycan]] D-Ala-D-Ala stems; Inside: Active-site Ser nucleophile of PBP (PDB 1PWC) forming an irreversible ~0.135 nm covalent ester linkage with opened Penicillin G, countered in resistant strains by beta-lactamases or [[AcrB efflux|real-cd-acrb]]; Outputs: Weakened bacterial [[cell wall|cell-wall]] and lethal osmotic rupture in [[E. coli|real-bacterium]], zero wall lysis in wall-less [[Mycoplasma|real-mycoplasma]], and complete safety for [[human cells|real-cell]].',
      scientific:
        'Beta-lactam suicide inactivation of bacterial Penicillin-Binding Protein DD-transpeptidase (crystal structure PDB 1PWC showing Penicillin G covalently bound to the catalytic serine of *Streptomyces* R61 PBP, structurally homologous to [[E. coli|real-bacterium]] and [[Gram-positive|real-gram-positive]] PBPs). Because the strained four-membered beta-lactam amide mimics the D-Ala-D-Ala substrate dipeptide, nucleophilic attack by the active-site Ser-OH opens the ring to yield a kinetically trapped penicilloyl-Ser covalent ester ([[1.35 A C-O bond|real-pharm-atoms]]). Halting [[peptidoglycan|peptidoglycan]] transpeptidation while autolysins remodel the sacculus induces hypo-osmotic lysis under turgor (~2-20 atm), while sparing [[Mycoplasma|real-mycoplasma]], [[viruses|viruses]], and [[human cells|real-cell]].'
    },
    es: {
      simple:
        'La penicilina imita las piezas naturales del [[peptidoglicano|peptidoglycan]] bacteriano y se fija covalentemente a las enzimas PBP. Sin poder coser su [[pared celular|cell-wall]] frente a la presión interna del agua, la [[bacteria|real-bacterium]] en crecimiento estalla.',
      story:
        'Las bacterias con pared como [[E. coli|real-bacterium]] y los [[bacilos Gram positivos|real-gram-positive]] soportan una intensa turgencia osmótica interna contenida únicamente por su malla de [[peptidoglicano|peptidoglycan]]. Al crecer, las transpeptidasas PBP enlazan péptidos terminados en D-Ala–D-Ala. La penicilina G porta un anillo betalactámico tenso de cuatro átomos que imita esa geometría: cuando la serina catalítica de la PBP ataca el carbonilo, el anillo se abre y forja un [[enlace acil-éster covalente|real-pharm-atoms]] extremadamente estable que inutiliza la enzima. La pared cede y estalla por ósmosis, mientras el [[Mycoplasma|real-mycoplasma]] sin pared, los [[virus|viruses]] y las [[células humanas|real-cell]] carecen de diana y quedan intactos.',
      blueprint:
        'Rol: Inhibición suicida betalactámica del entrecruzamiento del peptidoglicano que induce lisis osmótica bactericida selectiva · Entradas: Anillo betalactámico de penicilina G en el periplasma, transpeptidasa bacteriana PBP y tallos D-Ala–D-Ala de [[peptidoglicano|peptidoglycan]] · Interior: Serina nucleofílica del sitio activo de PBP (PDB 1PWC) formando un éster covalente (~0,135 nm) con penicilina G abierta, contrarrestado en cepas resistentes por betalactamasas o [[bombeo AcrB|real-cd-acrb]] · Salida: Rotura osmótica de [[E. coli|real-bacterium]], sin efecto en [[Mycoplasma|real-mycoplasma]] y seguridad total en [[células humanas|real-cell]].',
      scientific:
        'Inactivación suicida betalactámica de la DD-transpeptidasa bacteriana PBP (cristalografía PDB 1PWC con penicilina G unida covalentemente a la serina catalítica de la PBP R61, homóloga a las PBP de [[E. coli|real-bacterium]] y [[Gram positivos|real-gram-positive]]). El anillo betalactámico tenso imita al dipéptido D-Ala–D-Ala; el ataque del grupo Ser-OH abre el anillo generando un acil-éster peniciloil-serina atrapado cinéticamente ([[enlace C–O de 1,35 Å|real-pharm-atoms]]). Al cesar la transpeptidación del [[peptidoglicano|peptidoglycan]] bajo presión de turgencia (~2–20 atm) sobreviene la lisis osmótica, respetando [[Mycoplasma|real-mycoplasma]], [[virus|viruses]] y [[células humanas|real-cell]].'
    }
  },

  'real-pharm-macrolide': {
    en: {
      simple:
        'Macrolide antibiotics like erythromycin and azithromycin wedge inside the polypeptide exit tunnel of bacterial 50S [[ribosomes|ribosome]], jamming new protein chains in [[bacteria|real-bacterium]], [[Mycoplasma|real-mycoplasma]], and [[Chlamydia|real-chlamydia]] without harming human [[80S ribosomes|real-cd-ribo80]].',
      story:
        'Even wall-less [[Mycoplasma|real-mycoplasma]] and intracellular [[Chlamydia|real-chlamydia]] that shrug off [[penicillin|real-pharm-pbp]] must synthesize [[proteins|protein]] on bacterial 70S [[ribosomes|ribosome]] to survive. Macrolide antibiotics exploit a subtle single-nucleotide evolutionary divergence inside the large 50S subunit\'s nascent-peptide exit tunnel. In bacteria, adenine A2058 of 23S rRNA forms a snug hydrogen-bond pocket where erythromycin or azithromycin parks its lactone ring and desosamine sugar, physically blocking emerging [[polypeptides|polypeptide]] from sliding past. Human cytosolic [[80S ribosomes|real-cd-ribo80]] carry guanine G2058 at the identical coordinate, whose protruding amino group sterically repels the macrolide so human translation keeps cruising smoothly.',
      blueprint:
        'Role: Selective bacterial 50S ribosome exit-tunnel blocker halting translation across walled, wall-less, and intracellular bacteria; Inputs: Diffusing erythromycin or azithromycin macrolide lactone rings entering bacterial cytoplasm (even inside [[Chlamydia|real-chlamydia]] inclusions); Inside: Bacterial 70S/50S 23S rRNA pocket around A2058/A2059 (PDB 4V7U) sterically occluding the ~10 nm nascent [[polypeptide|polypeptide]] exit tunnel; Outputs: Arrested protein synthesis in [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], and [[Chlamydia|real-chlamydia]], zero target on [[viruses|viruses]], and spared human [[80S ribosomes|real-cd-ribo80]].',
      scientific:
        'Bacterial 70S [[ribosome|ribosome]] large subunit (50S) nascent-peptide exit tunnel bound to erythromycin (crystal structure PDB 4V7U; bacterial 23S rRNA domain V pocket adjacent to the peptidyl-transferase center). Macrolides form specific H-bonds via their C5 desosamine sugar with bacterial 23S rRNA A2058 and A2059, obstructing nascent [[polypeptide|polypeptide]] egress in a context-dependent manner across [[E. coli|real-bacterium]], wall-less [[Mycoplasma|real-mycoplasma]], and obligate intracellular [[Chlamydia|real-chlamydia]]. Selectivity over human cytosolic [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0) stems from eukaryotic 28S rRNA G2058, whose exocyclic N2 amine sterically excludes macrolide binding; bacterial A2058G mutation or Erm methylation confers clinical resistance.'
    },
    es: {
      simple:
        'Los antibióticos macrólidos como eritromicina y azitromicina se encajan en el túnel de salida polipeptídica de los [[ribosomas|ribosome]] bacterianos 50S, atascando las proteínas nacientes en [[bacterias|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]] sin dañar los [[ribosomas 80S|real-cd-ribo80]] humanos.',
      story:
        'Incluso el [[Mycoplasma|real-mycoplasma]] sin pared y la [[Chlamydia|real-chlamydia]] intracelular que resisten la [[penicilina|real-pharm-pbp]] necesitan fabricar [[proteínas|protein]] en [[ribosomas|ribosome]] bacterianos 70S para vivir. Los macrólidos aprovechan una sutil divergencia evolutiva de un solo nucleótido en el túnel de salida de la subunidad 50S. En bacterias, la adenina A2058 del ARNr 23S ofrece un bolsillo exacto donde la eritromicina o la azitromicina alojan su anillo lactónico, impidiendo el paso del [[polipéptido|polypeptide]] naciente. En cambio, el [[ribosoma 80S|real-cd-ribo80]] humano posee guanina G2058 en ese punto, cuyo grupo amino sobresaliente repele al fármaco y protege la síntesis humana.',
      blueprint:
        'Rol: Bloqueador selectivo del túnel de salida del ribosoma 50S bacteriano que detiene la traducción en bacterias con pared, sin pared e intracelulares · Entradas: Anillos lactónicos de eritromicina o azitromicina difundiendo al citoplasma bacteriano (incluso en inclusiones de [[Chlamydia|real-chlamydia]]) · Interior: Bolsillo bacteriano del ARNr 23S en A2058/A2059 (PDB 4V7U) obstruyendo el túnel de salida de [[polipéptidos|polypeptide]] (~10 nm) · Salida: Traducción detenida en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]]; sin diana en [[virus|viruses]] y [[80S|real-cd-ribo80]] humano intacto.',
      scientific:
        'Túnel de salida polipeptídica de la subunidad grande 50S del [[ribosoma|ribosome]] bacteriano 70S unido a eritromicina (cristalografía PDB 4V7U; bolsillo del dominio V del ARNr 23S junto al centro peptidil transferasa). El azúcar desosamina en C5 establece puentes de hidrógeno específicos con A2058 y A2059 del ARNr 23S, deteniendo el avance del [[polipéptido|polypeptide]] en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]]. La selectividad frente al [[ribosoma 80S|real-cd-ribo80]] humano (PDB 4UG0) radica en la guanina G2058 del ARNr 28S eucariota, cuyo grupo N2 excluye estéricamente al macrólido; la mutación bacteriana A2058G o metilación Erm genera resistencia.'
    }
  },

  'real-pharm-tetra': {
    en: {
      simple:
        'Tetracycline antibiotics bind inside the small 30S subunit of bacterial [[ribosomes|ribosome]] and physically block incoming transfer [[RNA|rna]] from landing in the decoding A-site, stopping bacterial growth across broad-spectrum infections.',
      story:
        'While [[macrolides|real-pharm-macrolide]] choke off the exit tunnel of the bacterial 50S subunit, tetracycline and doxycycline strike the opposite end of the 70S [[ribosome|ribosome]]: its small 30S decoding center. Coordinating a divalent [[magnesium|atom-mg]] ion to bridge negatively charged phosphate oxygens on 16S rRNA helices h31 and h34, the four-ring polyketide parks squarely inside the ribosomal A-site. Every incoming aminoacyl-tRNA carrying the next [[amino acid|amino-acid]] bumps directly off tetracycline\'s rigid rings and bounces away, freezing elongation across [[E. coli|real-bacterium]], wall-less [[Mycoplasma|real-mycoplasma]], and intracellular [[Chlamydia|real-chlamydia]] and [[Rickettsia|real-rickettsia]], while eukaryotic [[80S ribosomes|real-cd-ribo80]] keep translating safely.',
      blueprint:
        'Role: Broad-spectrum bacterial 30S A-site decoding blocker halting aminoacyl-tRNA entry during translation elongation; Inputs: Four-ring tetracycline/doxycycline molecules plus coordinating [[Mg2+|atom-mg]] ions entering bacterial cells; Inside: Bacterial 30S subunit 16S rRNA h31/h34 pocket (PDB 1HNW) sterically obstructing the codon-anticodon A-site decoding slot; Outputs: Halted protein elongation in [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], and [[Rickettsia|real-rickettsia]], zero effect on [[viruses|viruses]], and spared cytosolic [[80S ribosomes|real-cd-ribo80]].',
      scientific:
        'Bacterial 30S [[ribosome|ribosome]] small subunit in complex with tetracycline (crystal structure PDB 1HNW; primary high-affinity site Tet-1 cradled between 16S rRNA helix h34 and loop h31 via a chelating [[Mg2+|atom-mg]] ion interacting with the sugar-phosphate backbone). Occupying the decoding A-site prevents stable accommodation of the EF-Tu-GTP-aminoacyl-tRNA ternary complex, arresting bacterial [[polypeptide|polypeptide]] elongation across Gram-negative [[E. coli|real-bacterium]], wall-less [[Mycoplasma|real-mycoplasma]], and intracellular [[Chlamydia|real-chlamydia]]/[[Rickettsia|real-rickettsia]]. Lower affinity for cytoplasmic human [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0) plus selective bacterial accumulation underpin therapeutic safety, though resistance arises via [[efflux pumps|real-cd-acrb]] or TetM ribosomal protection.'
    },
    es: {
      simple:
        'Las tetraciclinas se unen a la subunidad pequeña 30S de los [[ribosomas|ribosome]] bacterianos y bloquean físicamente el aterrizaje del [[ARN|rna]] de transferencia en el sitio decodificador A, frenando el crecimiento bacteriano.',
      story:
        'Mientras los [[macrólidos|real-pharm-macrolide]] obstruyen el túnel de salida en la subunidad 50S, la tetraciclina y la doxiciclina golpean el extremo opuesto del [[ribosoma|ribosome]] 70S: el centro decodificador 30S. Coordinando un ion [[magnesio|atom-mg]] con los fosfatos de las hélices h31 y h34 del ARNr 16S, su esqueleto policétido de cuatro anillos ocupa justo el sitio A. Cada aminoacil-ARNt que llega con el siguiente [[aminoácido|amino-acid]] choca contra los anillos rígidos y rebota, congelando la elongación en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]] mientras los [[ribosomas 80S|real-cd-ribo80]] humanos siguen traduciendo.',
      blueprint:
        'Rol: Bloqueador de amplio espectro del sitio A decodificador 30S bacteriano que impide la entrada de aminoacil-ARNt · Entradas: Moléculas tetracíclicas (tetraciclina/doxiciclina) e iones [[Mg²⁺|atom-mg]] coordinantes en el citosol bacteriano · Interior: Bolsillo de las hélices h31/h34 del ARNr 16S en la subunidad 30S (PDB 1HNW) obstruyendo el sitio A · Salida: Elongación detenida en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]]; sin efecto en [[virus|viruses]] y [[80S|real-cd-ribo80]] humano protegido.',
      scientific:
        'Subunidad pequeña 30S del [[ribosoma|ribosome]] bacteriano en complejo con tetraciclina (cristalografía PDB 1HNW; sitio principal Tet-1 alojado entre la hélice h34 y el bucle h31 del ARNr 16S mediante un ion [[Mg²⁺|atom-mg]] quelado). Su presencia en el sitio A impide el acomodo del complejo ternario EF-Tu–GTP–aminoacil-ARNt, frenando la síntesis de [[polipéptidos|polypeptide]] en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y patógenos intracelulares ([[Chlamydia|real-chlamydia]], [[Rickettsia|real-rickettsia]]). La menor afinidad por el [[ribosoma 80S|real-cd-ribo80]] humano (PDB 4UG0) garantiza la ventana terapéutica, desafiada por [[bombas de flujo|real-cd-acrb]] o proteínas TetM.'
    }
  },

  'real-pharm-rdrp': {
    en: {
      simple:
        'Remdesivir is an antiviral adenosine mimic that tricks the [[SARS-CoV-2|real-coronavirus]] RNA polymerase (RdRp) into weaving it into growing viral [[RNA|rna]], where its extra cyano group jams the enzyme three bases later.',
      story:
        'Because [[SARS-CoV-2|real-coronavirus]] carries neither a [[peptidoglycan|peptidoglycan]] wall nor its own [[ribosomes|ribosome]], antibacterial drugs like [[penicillin|real-pharm-pbp]] and [[macrolides|real-pharm-macrolide]] have zero target against it. Instead, antivirals strike the unique RNA-dependent RNA polymerase (RdRp, nsp12-nsp7-nsp8) that copies the virus\'s 30-kilobase genome, an enzyme completely absent from [[human cells|real-cell]]. Inside infected cells, Remdesivir converts into active Remdesivir-triphosphate, an adenosine [[nucleotide|nucleotide]] mimic retaining its 3\'-OH group but carrying an extra [[1\'-cyano (-CN) bump|real-pharm-atoms]]. Viral RdRp incorporates it and advances exactly three more bases until that rigid cyano group collides with residue Ser861 at position i+3, stalling translocation and halting viral genome synthesis.',
      blueprint:
        'Role: Direct-acting delayed chain terminator stalling SARS-CoV-2 RNA-dependent RNA polymerase without disrupting human transcription; Inputs: Intracellularly phosphorylated Remdesivir-triphosphate (GS-443902), viral (+)ssRNA template, and catalytic [[Mg2+|atom-mg]]; Inside: SARS-CoV-2 nsp12-nsp7-nsp8 RdRp complex (PDB 7BV2) incorporating Remdesivir monophosphate and stalling three nucleotides downstream (i+3) via steric clash between 1\'-CN and nsp12 Ser861; Outputs: Stalled [[coronavirus|real-coronavirus]] genome replication, reduced viral load, and intact human nuclear [[RNA|rna]] synthesis.',
      scientific:
        'SARS-CoV-2 replication-transcription complex RdRp (nsp12-nsp7-nsp8 cryo-EM structure PDB 7BV2) bound to template-primer [[RNA|rna]] and covalently incorporated Remdesivir monophosphate (RMP, active triphosphate prodrug GS-5734). Because RMP retains a 3\'-OH group, nsp12 extends three subsequent [[nucleotides|nucleotide]] before the C1\'-cyano ([[1\'-CN|real-pharm-atoms]]) substituent clashes sterically against the side chain of nsp12 Ser861 at the i+3 translocation register, arresting further elongation and partly evading viral nsp14 ExoN proofreading. Human nuclear RNA Pol II and mitochondrial POLRMT discriminate strongly against Remdesivir-TP, preserving selective toxicity across [[human cells|real-cell]].'
    },
    es: {
      simple:
        'El remdesivir es un análogo antiviral de adenosina que engaña a la ARN polimerasa (RdRp) del [[SARS-CoV-2|real-coronavirus]] para incorporarlo en el [[ARN|rna]] vírico, donde su grupo ciano extra atasca la enzima tres bases después.',
      story:
        'Como el [[SARS-CoV-2|real-coronavirus]] carece de pared de [[peptidoglicano|peptidoglycan]] y de [[ribosomas|ribosome]] propios, antibióticos como la [[penicilina|real-pharm-pbp]] o los [[macrólidos|real-pharm-macrolide]] no tienen diana contra él. Los antivirales atacan en cambio su ARN polimerasa dependiente de ARN (RdRp, nsp12–nsp7–nsp8), una enzima ausente en las [[células humanas|real-cell]]. Dentro de la célula, el remdesivir se fosforila a remdesivir trifosfato, un mimético de [[nucleótido|nucleotide]] de adenosina que conserva el 3\'-OH pero porta un [[grupo 1\'-ciano (-CN)|real-pharm-atoms]]. La RdRp lo incorpora y avanza exactamente tres bases más hasta que ese grupo ciano choca contra el residuo Ser861 en la posición i+3, bloqueando la translocación y frenando la replicación vírica.',
      blueprint:
        'Rol: Terminador de cadena diferido de acción directa que frena la ARN polimerasa del SARS-CoV-2 sin perturbar la transcripción humana · Entradas: Remdesivir trifosfato fosforilado intracelularmente, molde de ARN(+) vírico e iones [[Mg²⁺|atom-mg]] · Interior: Complejo RdRp nsp12–nsp7–nsp8 de SARS-CoV-2 (PDB 7BV2) que incorpora RMP y se detiene tres nucleótidos después (i+3) por choque estérico entre 1\'-CN y Ser861 · Salida: Replicación frenada del [[coronavirus|real-coronavirus]] y síntesis nuclear humana de [[ARN|rna]] intacta.',
      scientific:
        'Complejo de replicación RdRp de SARS-CoV-2 (nsp12–nsp7–nsp8, crio-EM PDB 7BV2) unido a un dúplex molde-cebador de [[ARN|rna]] con monofosfato de remdesivir (RMP) incorporado covalentemente. Al conservar su 3\'-OH, nsp12 adiciona tres [[nucleótidos|nucleotide]] más hasta que el sustituyente [[1\'-CN|real-pharm-atoms]] choca estéricamente con Ser861 de nsp12 en el registro i+3, deteniendo la translocación y eludiendo parcialmente la exonucleasa nsp14. La ARN Pol II humana y POLRMT mitocondrial discriminan intensamente al remdesivir-TP, preservando las [[células humanas|real-cell]].'
    }
  },

  'real-pharm-hivrt': {
    en: {
      simple:
        'AZT (zidovudine) is an antiretroviral thymidine mimic lacking a 3\'-OH chemical hook. Once [[HIV-1|real-hiv]] Reverse Transcriptase adds AZT into the growing viral [[DNA|dna]] strand, no next [[nucleotide|nucleotide]] can attach and synthesis stops immediately.',
      story:
        'Unlike [[SARS-CoV-2|real-coronavirus]], retrovirus [[HIV-1|real-hiv]] converts its RNA genome backward into double-stranded [[DNA|dna]] using a virus-only enzyme: heterodimeric Reverse Transcriptase (p66/p51). Every normal DNA extension step depends on the free 3\'-hydroxyl (-OH) oxygen at the tip of the growing strand attacking the incoming nucleotide\'s phosphate. Active AZT-triphosphate swaps that critical 3\'-OH for an inert [[3\'-azido (-N3) group|real-pharm-atoms]]. Because HIV-1 Reverse Transcriptase lacks proofreading and readily inserts AZT opposite template adenine, chain elongation snaps shut on the very next step via obligate chain termination, while high-fidelity human nuclear DNA polymerases selectively reject AZT-TP and keep copying host chromosomes cleanly.',
      blueprint:
        'Role: Obligate nucleoside-analog chain terminator arresting HIV-1 reverse transcription into proviral DNA; Inputs: Host-kinase phosphorylated AZT-triphosphate (zidovudine-TP), [[HIV-1|real-hiv]] RNA/DNA duplex, and catalytic [[Mg2+|atom-mg]] ions; Inside: HIV-1 p66/p51 Reverse Transcriptase palm active site (PDB 3V4I) incorporating 3\'-azido-dTMP lacking any 3\'-OH nucleophile for phosphodiester bond formation; Outputs: Aborted proviral [[DNA|dna]] synthesis halting [[HIV-1|real-hiv]] integration while host [[DNA|dna]] replication remains selectively spared.',
      scientific:
        'Human Immunodeficiency Virus-1 Reverse Transcriptase p66/p51 heterodimer in complex with AZT-terminated DNA primer-template (crystal structure PDB 3V4I). Phosphorylated intracellularly to 3\'-azido-3\'-deoxythymidine triphosphate (AZT-TP), the drug is preferentially incorporated by error-prone [[HIV-1|real-hiv]] RT over nuclear replicative DNA polymerases alpha/delta/epsilon ([[central dogma|real-central-dogma]]). Replacement of the deoxyribose 3\'-OH with a bulky [[3\'-N3 azido group|real-pharm-atoms]] eliminates the catalytic nucleophile required for 5\' -> 3\' phosphodiester linkage to the next dNTP, causing immediate obligate chain termination prior to integrase nuclear entry.'
    },
    es: {
      simple:
        'El AZT (zidovudina) es un análogo antirretroviral de timidina sin gancho químico 3\'-OH. Cuando la transcriptasa inversa del [[VIH-1|real-hiv]] añade AZT a la hebra naciente de [[ADN|dna]] vírico, ningún nuevo [[nucleótido|nucleotide]] puede unirse y la síntesis cesa al instante.',
      story:
        'A diferencia del [[SARS-CoV-2|real-coronavirus]], el retrovirus [[VIH-1|real-hiv]] copia su ARN hacia atrás en [[ADN|dna]] bicatenario usando una enzima exclusiva del virus: la transcriptasa inversa (p66/p51). Cada paso normal de elongación exige que el hidroxilo 3\'-OH libre del extremo naciente ataque el fosfato del nucleótido entrante. El AZT trifosfato sustituye ese 3\'-OH esencial por un [[grupo 3\'-azido (-N₃)|real-pharm-atoms]] inerte. Como la transcriptasa inversa del VIH-1 carece de corrección y acepta AZT frente a adenina, la cadena queda sellada en seco —terminación obligada— mientras las ADN polimerasas nucleares humanas de alta fidelidad rechazan el AZT-TP.',
      blueprint:
        'Rol: Terminador de cadena obligado análogo de nucleósido que detiene la transcripción inversa del VIH-1 en ADN proviral · Entradas: AZT trifosfato (zidovudina-TP) fosforilado por cinasas celulares, dúplex ARN/ADN del [[VIH-1|real-hiv]] e iones [[Mg²⁺|atom-mg]] · Interior: Sitio activo de la palma p66/p51 de la RT de VIH-1 (PDB 3V4I) incorporando 3\'-azido-dTMP carente de nucleófilo 3\'-OH · Salida: Síntesis proviral abortada que frena la integración del [[VIH-1|real-hiv]] preservando la replicación del [[ADN|dna]] humano.',
      scientific:
        'Heterodímero p66/p51 de la transcriptasa inversa del VIH-1 unido a un dúplex cebador-molde terminado en AZT (cristalografía PDB 3V4I). Fosforilado en la célula a 3\'-azido-3\'-desoxitimidina trifosfato (AZT-TP), es incorporado con preferencia por la RT propensa a errores del [[VIH-1|real-hiv]] frente a las ADN polimerasas replicativas humanas α/δ/ε ([[dogma central|real-central-dogma]]). Sustituir el 3\'-OH de la desoxirribosa por el [[grupo 3\'-N₃|real-pharm-atoms]] suprime el nucleófilo imprescindible para el enlace fosfodiéster 5\'→3\', produciendo terminación inmediata antes de la integración nuclear.'
    }
  },

  'real-pharm-mrna-lnp': {
    en: {
      simple:
        'An mRNA-LNP vaccine packages a temporary synthetic [[RNA|rna]] recipe inside a 90-nanometer lipid nanoparticle. After escaping the endosome, cytosolic [[80S ribosomes|real-cd-ribo80]] read it outside the intact [[nucleus|nucleus]] to build harmless Spike proteins that train [[IgG|real-imm-igg]] and [[CD8+ T-cells|real-imm-tcr-mhci]].',
      story:
        'Rather than injecting live pathogens, an mRNA-LNP vaccine hands the [[human cell|real-cell]]\'s own [[central dogma|real-central-dogma]] machinery a clean, short-lived genetic blueprint for one single viral surface antigen. Encapsulated inside a ninety-nanometer four-lipid nanoparticle (ionizable cationic lipids, helper [[phospholipids|phospholipid]], cholesterol, and PEG-lipids), the fragile [[RNA|rna]] slips safely into an endocytic [[vesicle|vesicle]]. As endosomal protons lower pH to ~5.5, ionizable lipids flip positively charged, fuse with the endosome wall, and release N1-methylpseudouridine ([[m1Psi|real-pharm-atoms]])-stabilized Spike mRNA directly into the cytosol. Cytosolic [[80S ribosomes|real-cd-ribo80]] translate prefusion Spike visibly outside the sealed [[nucleus|nucleus]], never entering nuclear [[DNA|dna]], before natural RNases clear the message and [[MHC-II|real-imm-mhcii]]/[[MHC-I|real-imm-tcr-mhci]] display primes lifelong [[IgG|real-imm-igg]] protection.',
      blueprint:
        'Role: Non-integrating 90 nm cytosolic nucleic-acid delivery platform priming adaptive humoral and cellular immunity without live infection; Inputs: Four-lipid LNP (~90 nm; ionizable lipid, DSPC [[phospholipid|phospholipid]], cholesterol, PEG-lipid) carrying ~4,200-nt capped/poly-A [[m1Psi|real-pharm-atoms]] Spike [[mRNA|rna]]; Inside: Acidic endosomal protonation (pH ~5.5) triggering membrane escape into cytosol where human [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0) translate prefusion 2P-Spike strictly outside the intact [[nuclear envelope|nucleus]]; Outputs: Transient viral Spike antigen priming neutralizing [[IgG|real-imm-igg]] ([[RBD block|real-imm-rbd-block]]) and [[CD8+ T-cells|real-imm-tcr-mhci]] followed by natural RNase mRNA degradation.',
      scientific:
        'Four-component Lipid Nanoparticle (~80-100 nm diameter; ionizable aminolipid pKa ~6.2-6.5, DSPC [[phospholipid|phospholipid]], cholesterol, and PEG-lipid) encapsulating ~4,200-nt 5\'-m7G-capped, 3\'-polyadenylated synthetic [[mRNA|rna]] encoding prefusion-stabilized [[SARS-CoV-2|real-coronavirus]] Spike (K986P/V987P) with complete uridine substitution by N1-methylpseudouridine ([[m1Psi|real-pharm-atoms]]) to suppress TLR7/8 innate arrest. Endosomal V-ATPase acidification (pH ~5.5-6.0) protonates ionizable lipids into cationic hexagonal HII phases mediating cytosolic escape directly onto [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0). Lacking nuclear localization signals and reverse transcriptase, vaccine mRNA remains strictly outside the intact [[nucleus|nucleus]] (zero genomic [[DNA|dna]] alteration), degrades within hours to days, and elicits potent [[IgG|real-imm-igg]] and [[CD8+ T-cell|real-imm-tcr-mhci]] immunity.'
    },
    es: {
      simple:
        'Una vacuna ARNm-LNP empaqueta una receta temporal de [[ARN|rna]] sintético en una nanopartícula lipídica de 90 nanómetros. Tras escapar del endosoma, los [[ribosomas 80S|real-cd-ribo80]] citosólicos la leen fuera del [[núcleo|nucleus]] intacto para entrenar [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]].',
      story:
        'En lugar de introducir patógenos vivos, una vacuna ARNm-LNP entrega a la maquinaria del [[dogma central|real-central-dogma]] de la [[célula humana|real-cell]] una receta breve para un único antígeno vírico inofensivo. Envuelto en una nanopartícula de noventa nanómetros con cuatro lípidos —catiónicos ionizables, [[fosfolípidos|phospholipid]] auxiliares, colesterol y lípidos PEG—, el [[ARN|rna]] entra en una [[vesícula|vesicle]] endocítica. Al bajar el pH endosomal a ~5,5, los lípidos ionizables adquieren carga positiva, rompen la membrana del endosoma y liberan al citosol el ARNm de espícula modificado con N1-metilpseudouridina ([[m¹Ψ|real-pharm-atoms]]). Los [[ribosomas 80S|real-cd-ribo80]] traducen la espícula fuera del [[núcleo|nucleus]] cerrado —sin tocar jamás el [[ADN|dna]]— antes de que las ARNasas degraden el mensaje y [[MHC-II|real-imm-mhcii]]/[[MHC-I|real-imm-tcr-mhci]] activen una sólida memoria de [[IgG|real-imm-igg]].',
      blueprint:
        'Rol: Plataforma citosólica no integrativa de 90 nm que induce inmunidad adaptativa humoral y celular sin infección viva · Entradas: LNP de cuatro lípidos (~90 nm: lípido ionizable, [[fosfolípido|phospholipid]] DSPC, colesterol y lípido PEG) con [[ARNm|rna]] de espícula (~4.200 nt, caperuza 5\', poli-A y [[m¹Ψ|real-pharm-atoms]]) · Interior: Protonación endosomal (pH ~5,5) que dispara el escape al citosol donde [[ribosomas 80S|real-cd-ribo80]] (PDB 4UG0) traducen espícula prefusión 2P fuera del [[núcleo|nucleus]] intacto · Salida: Antígeno transitorio que induce [[IgG|real-imm-igg]] neutralizantes ([[bloqueo RBD|real-imm-rbd-block]]) y [[linfocitos T CD8⁺|real-imm-tcr-mhci]], seguido de degradación natural por ARNasas.',
      scientific:
        'Nanopartícula lipídica de cuatro componentes (~80–100 nm; aminolípido ionizable pK_a ~6,2–6,5, [[fosfolípido|phospholipid]] DSPC, colesterol y lípido PEG) portadora de [[ARNm|rna]] sintético de ~4.200 nt (caperuza 5\'-m⁷G, cola poli-A) que codifica la espícula prefusión 2P (K986P/V987P) de [[SARS-CoV-2|real-coronavirus]] con sustitución íntegra de uridina por N1-metilpseudouridina ([[m¹Ψ|real-pharm-atoms]]) para evadir sensores TLR7/8. La acidificación endosomal (pH ~5,5–6,0) protona los lípidos formando fases hexagonales H_II que liberan el ARNm hacia [[ribosomas 80S|real-cd-ribo80]] (PDB 4UG0) estrictamente fuera del [[núcleo|nucleus]] intacto (sin alterar el [[ADN|dna]]), degradándose en horas o días tras primar [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]].'
    }
  },

  'real-pharm-atoms': {
    en: {
      simple:
        'At the 0.1-nanometer atomic scale, immunity and medicine come down to exact covalent and hydrogen bonds across [[carbon|atom-c]], [[hydrogen|atom-h]], [[nitrogen|atom-n]], [[oxygen|atom-o]], [[phosphorus|atom-p]], and [[sulfur|atom-s]] atoms.',
      story:
        'Zooming one hundred thousand times deeper than a [[human cell|real-cell]] reveals why single atomic swaps decide health and disease across [[immune defense|real-immune]] and [[pharmacology|real-pharmacology]]. In an antibody-virus clash, oriented [[nitrogen|atom-n]] and [[oxygen|atom-o]] hydrogen bonds along CDR3 loops lock [[IgG|real-imm-igg]] onto [[SARS-CoV-2 RBD|real-imm-rbd-block]] while covalent [[sulfur|atom-s]] disulfide bridges brace the antibody hinge. Across the drug bench, a single 0.135-nanometer [[carbon|atom-c]]-to-[[oxygen|atom-o]] covalent ester traps bacterial [[PBP|real-pharm-pbp]] with penicillin; swapping one 3\'-OH for three [[nitrogens|atom-n]] (-N3) turns AZT into an [[HIV-1 RT|real-pharm-hivrt]] chain terminator; one 1\'-CN group jams [[RdRp|real-pharm-rdrp]]; and a carbon-carbon glycosidic tweak creates [[m1Psi|real-pharm-mrna-lnp]] inside vaccine mRNA.',
      blueprint:
        'Role: 0.1-0.5 nm atomic foundation explaining antibody specificity, covalent antibiotic trapping, antiviral chain termination, and mRNA vaccine stealth; Inputs: Elemental building blocks [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]], [[Mg2+|atom-mg]], and [[Ca2+|atom-ca]] arranged in drug and receptor pockets; Inside: 0.28-0.31 nm CDR3-epitope H-bonds + 0.205 nm [[IgG|real-imm-igg]] Cys-S-S-Cys hinge, 0.135 nm beta-lactam C-O ester in [[PBP|real-pharm-pbp]], 3\'-N3 azido in [[AZT|real-pharm-hivrt]], 1\'-CN clash in [[Remdesivir|real-pharm-rdrp]], and C-C glycosidic m1Psi in [[mRNA-LNP|real-pharm-mrna-lnp]]; Outputs: Complete bottom-to-top continuity from [[Scale Explorer|scale-explorer]] atoms to clinical medicine.',
      scientific:
        'Sub-nanometer (0.1-0.5 nm) atomic bond geometry governing immune recognition and selective pharmacology across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]], [[Mg2+|atom-mg]], and [[Ca2+|atom-ca]]: (1) directional ~0.28-0.31 nm CDR3-epitope N-H...O H-bonds in [[Fab-RBD|real-imm-rbd-block]] (PDB 7BZ5) and ~0.205 nm Cys-S-S-Cys disulfides stabilizing [[IgG|real-imm-igg]] (PDB 1IGT); (2) strained four-membered beta-lactam ring opening into a ~0.135 nm (1.35 A) covalent penicilloyl C-O acyl-ester on [[PBP|real-pharm-pbp]] Ser (PDB 1PWC); (3) 3\'-azido (-N3) substitution abolishing 3\'-OH attack in [[HIV-1 RT|real-pharm-hivrt]] (PDB 3V4I) and 1\'-CN steric clash at nsp12 Ser861 in [[RdRp|real-pharm-rdrp]] (PDB 7BV2); and (4) N1-methylpseudouridine C5-C1\' isomerization stabilizing [[mRNA-LNP|real-pharm-mrna-lnp]].'
    },
    es: {
      simple:
        'A escala atómica de 0,1 nanómetros, la inmunidad y la medicina se reducen a enlaces covalentes y de hidrógeno exactos entre átomos de [[carbono|atom-c]], [[hidrógeno|atom-h]], [[nitrógeno|atom-n]], [[oxígeno|atom-o]], [[fósforo|atom-p]] y [[azufre|atom-s]].',
      story:
        'Al ampliar cien mil veces más allá de una [[célula humana|real-cell]] se revela por qué cambios de unos pocos átomos deciden la salud y la enfermedad en la [[defensa inmunitaria|real-immune]] y la [[farmacología|real-pharmacology]]. En el encuentro anticuerpo-virus, puentes de hidrógeno orientados de [[nitrógeno|atom-n]] y [[oxígeno|atom-o]] en los bucles CDR3 sellan la [[IgG|real-imm-igg]] sobre el [[RBD de SARS-CoV-2|real-imm-rbd-block]] mientras puentes disulfuro de [[azufre|atom-s]] refuerzan la bisagra. En el banco farmacológico, un éster covalente [[C|atom-c]]–[[O|atom-o]] de 0,135 nm atrapa la [[PBP|real-pharm-pbp]] con penicilina; sustituir un 3\'-OH por tres [[nitrógenos|atom-n]] (-N₃) hace del AZT un terminador en [[VIH-1 RT|real-pharm-hivrt]]; el grupo 1\'-CN frena la [[RdRp|real-pharm-rdrp]]; y un enlace C–C crea la [[m¹Ψ|real-pharm-mrna-lnp]] del ARNm vacunal.',
      blueprint:
        'Rol: Base atómica de 0,1–0,5 nm que explica especificidad de anticuerpos, atrapamiento antibiótico covalente, terminación antiviral y sigilo vacunal · Entradas: Átomos [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]], [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]] en bolsillos moleculares · Interior: Enlaces H CDR3–epítopo (~0,28–0,31 nm) + bisagra Cys–S–S–Cys de [[IgG|real-imm-igg]] (~0,205 nm), éster betalactámico C–O de 1,35 Å en [[PBP|real-pharm-pbp]], azido 3\'-N₃ en [[AZT|real-pharm-hivrt]], choque 1\'-CN en [[remdesivir|real-pharm-rdrp]] y m¹Ψ en [[ARNm-LNP|real-pharm-mrna-lnp]] · Salida: Continuidad íntegra desde los átomos del [[Explorador de Escalas|scale-explorer]] hasta la medicina clínica.',
      scientific:
        'Geometría de enlace subnanométrica (0,1–0,5 nm) que gobierna el reconocimiento inmunitario y la farmacología selectiva entre [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[S|atom-s]], [[Mg²⁺|atom-mg]] y [[Ca²⁺|atom-ca]]: (1) redes de puentes de hidrógeno CDR3–epítopo (~0,28–0,31 nm) en [[Fab–RBD|real-imm-rbd-block]] (PDB 7BZ5) y puentes disulfuro Cys–S–S–Cys (~0,205 nm) en [[IgG|real-imm-igg]] (PDB 1IGT); (2) apertura del anillo betalactámico formando un éster covalente peniciloil-serina C–O de 1,35 Å en [[PBP|real-pharm-pbp]] (PDB 1PWC); (3) sustitución 3\'-N₃ anulando el ataque 3\'-OH en [[VIH-1 RT|real-pharm-hivrt]] (PDB 3V4I) y choque 1\'-CN con Ser861 en [[RdRp|real-pharm-rdrp]] (PDB 7BV2); y (4) isomerización C5–C1\' de N1-metilpseudouridina en [[ARNm-LNP|real-pharm-mrna-lnp]].'
    }
  }
};

export const IMMUNE_MEDICINE_PART_LENSES: Record<string, Record<string, BilingualPartLens>> = {
  'immune_defense_realistic.html': {
    macrophage: {
      en: {
        subtitle: 'Patrolling Tissue Macrophage (~20 um Innate Sentinel)',
        simple:
          'This patrolling ~20-micrometer macrophage is a front-line innate white blood cell stationed in mucosal tissues. It senses invading [[bacteria|real-bacterium]], engulfs them into a [[phagolysosome|real-imm-phagolysosome]], and posts digested fragments on [[MHC-II|real-imm-mhcii]].',
        story:
          'Derived from circulating blood monocytes, the tissue-resident macrophage monitors mucosal borders beside [[enterocytes|real-enterocyte]] using Toll-like receptors and Fc-gamma receptors across its ruffled [[plasma membrane|plasma-membrane]]. When surface receptors detect lipopolysaccharide on an [[E. coli|real-bacterium]] or the exposed Fc stems of bound [[IgG antibodies|real-imm-igg]], intracellular signaling triggers rapid [[cytoskeletal|cytoskeleton]] pseudopod extension. Once the microbe is destroyed inside an acidic [[phagolysosome|real-imm-phagolysosome]], the macrophage secretes alarm cytokines and presents bacterial peptides on [[MHC-II|real-imm-mhcii]] to mobilize adaptive lymphocytes.',
        blueprint: {
          role: 'Professional innate phagocyte (~20 um) executing pathogen clearance, inflammatory signaling, and exogenous antigen presentation',
          arrivesFrom: 'Circulating monocyte differentiation, [[E. coli|real-bacterium]] pattern cues, and [[IgG|real-imm-igg]] opsonized immune complexes',
          inside: 'Ruffled [[plasma membrane|plasma-membrane]], dynamic [[cytoskeleton|cytoskeleton]], abundant [[lysosomes|lysosome]], NOX2 oxidase, and [[MHC-II|real-imm-mhcii]] loading vesicles',
          deliversTo: 'Cleared microbial debris inside [[phagolysosomes|real-imm-phagolysosome]], cytokines, and pMHC-II activation signals to CD4+ T-helper cells',
          loop: 'Cytokines from activated CD4+ T-cells amplify macrophage NOX2 oxidative killing and upregulate surface MHC-II density'
        },
        scientific:
          'Mature human tissue macrophage (~18-22 um diameter; myeloid innate phagocyte operating within [[immune defense|real-immune]]). Expresses pattern-recognition receptors (TLR4 sensing bacterial LPS, mannose receptors) and Fc-gamma receptors binding [[IgG|real-imm-igg]] Fc stems. Integrates Arp2/3 actin phagocytosis, Rab7/V-ATPase [[phagolysosome|real-imm-phagolysosome]] maturation, heme-[[Fe|atom-fe]] NOX2 reactive oxygen production, and HLA-DR1 [[MHC-II|real-imm-mhcii]] (PDB 1DLH) presentation to coordinate adaptive immunity.',
        from: [
          { nodeId: 'real-cell', label: 'Myeloid Eukaryote', cargo: 'Nucleated 20 um sentinel' },
          { nodeId: 'real-bacterium', label: 'Bacterial PAMP Signal', cargo: 'LPS & opsonized targets' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Phagolysosome Digestion', cargo: 'Acid pH 4.5 + ROS kill' },
          { nodeId: 'real-imm-mhcii', label: 'MHC-II Antigen Display', cargo: '13-25 aa bacterial peptides' }
        ]
      },
      es: {
        subtitle: 'Macrófago tisular patrullero (~20 µm, centinela innato)',
        simple:
          'Este macrófago patrullero de ~20 micrómetros es un glóbulo blanco innato de primera línea apostado en las mucosas. Detecta [[bacterias|real-bacterium]] invasoras, las destruye en un [[fagolisosoma|real-imm-phagolysosome]] y muestra fragmentos en [[MHC-II|real-imm-mhcii]].',
        story:
          'Originado a partir de monocitos sanguíneos, el macrófago residente vigila las fronteras mucosas junto a los [[enterocitos|real-enterocyte]] mediante receptores tipo Toll y receptores Fcγ en su [[membrana plasmática|plasma-membrane]] ondulada. Al detectar lipopolisacárido de [[E. coli|real-bacterium]] o tallos Fc de [[anticuerpos IgG|real-imm-igg]], la señalización interna dispara la extensión de pseudópodos del [[citoesqueleto|cytoskeleton]]. Tras eliminar el microbio en un [[fagolisosoma|real-imm-phagolysosome]] ácido, secreta citocinas de alarma y presenta péptidos en [[MHC-II|real-imm-mhcii]] para activar la inmunidad adaptativa.',
        blueprint: {
          role: 'Fagocito innato profesional (~20 µm) encargado de eliminar patógenos, secretar citocinas y presentar antígenos exógenos',
          arrivesFrom: 'Diferenciación de monocitos, señales moleculares de [[E. coli|real-bacterium]] y complejos opsonizados con [[IgG|real-imm-igg]]',
          inside: '[[Membrana plasmática|plasma-membrane]] con pliegues, [[citoesqueleto|cytoskeleton]] dinámico, abundantes [[lisosomas|lysosome]], oxidasa NOX2 y vesículas [[MHC-II|real-imm-mhcii]]',
          deliversTo: 'Restos microbianos degradados en [[fagolisosomas|real-imm-phagolysosome]], citocinas y activación pMHC-II hacia linfocitos T CD4⁺',
          loop: 'Las citocinas de los linfocitos T CD4⁺ potencian el estallido oxidativo NOX2 y multiplican la densidad de MHC-II en superficie'
        },
        scientific:
          'Macrófago tisular humano maduro (~18–22 µm de diámetro; fagocito mieloide innato en la [[defensa inmunitaria|real-immune]]). Expresa receptores de reconocimiento de patrones (TLR4 para LPS bacteriano, receptores de manosa) y receptores Fcγ para el tallo Fc de [[IgG|real-imm-igg]]. Coordina la fagocitosis por actina Arp2/3, la maduración del [[fagolisosoma|real-imm-phagolysosome]] por Rab7/V-ATPasa, el estallido ROS de NOX2 con [[Fe|atom-fe]] hemo y la presentación por [[MHC-II|real-imm-mhcii]] HLA-DR1 (PDB 1DLH).',
        from: [
          { nodeId: 'real-cell', label: 'Eucariota mieloide', cargo: 'Centinela nucleado de 20 µm' },
          { nodeId: 'real-bacterium', label: 'Señal PAMP bacteriana', cargo: 'LPS y dianas opsonizadas' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Digestión fagolisosomal', cargo: 'pH ácido 4,5 + estallido ROS' },
          { nodeId: 'real-imm-mhcii', label: 'Presentación MHC-II', cargo: 'Péptidos bacterianos 13–25 aa' }
        ]
      }
    },

    actin_pseudopod: {
      en: {
        subtitle: 'Arp2/3 Branched Actin Phagocytic Pseudopods',
        simple:
          'Actin pseudopods are fast-growing extensions of the macrophage [[cytoskeleton|cytoskeleton]] that push the [[plasma membrane|plasma-membrane]] outward to wrap cleanly around an invading [[E. coli|real-bacterium]].',
        story:
          'When macrophage receptors contact an invading [[E. coli|real-bacterium]], Rho-family GTPases (Rac1 and Cdc42) activate WASP and the Arp2/3 nucleating complex directly beneath the [[plasma membrane|plasma-membrane]]. Powered by ATP-bound monomer addition, branched [[cytoskeletal|cytoskeleton]] filaments polymerize at 70-degree angles, driving two sheet-like membrane arms around the two-micrometer bacterial rod. As the leading tips meet and zipper shut with help from myosin motors, the trapped microbe pinches inward as a sealed [[phagosome|real-imm-phagolysosome]] while the filament mesh rapidly disassembles behind the cup.',
        blueprint: {
          role: 'Force-generating branched actin-filament protrusion wrapping extracellular microbes into nascent phagosomes',
          arrivesFrom: 'Fc-gamma and TLR receptor signaling activating Rac1/Cdc42 GTPases, ATP-actin monomers, and the macrophage [[cytoskeleton|cytoskeleton]]',
          inside: 'Arp2/3-nucleated 70-degree dendritic filament networks pressing outward against the leading [[plasma membrane|plasma-membrane]] cup',
          deliversTo: 'Mechanical closure of a membrane-sealed phagocytic [[vesicle|vesicle]] around [[E. coli|real-bacterium]] heading toward [[phagolysosome|real-imm-phagolysosome]] fusion',
          loop: 'Phosphoinositide conversion (PIP2 -> PIP3) triggers rapid actin depolymerization once the cup seals so lysosomes can reach the phagosome'
        },
        scientific:
          'Arp2/3-driven dendritic F-actin polymerization (~7 nm microfilaments within the macrophage [[cytoskeleton|cytoskeleton]]) generating piconewton protrusive force across the phagocytic cup during [[immune defense|real-immune]]. Receptor clustering recruits Syk/PI3K and Rac1/Cdc42, activating N-WASP/Arp2/3 to branch ATP-G-actin at 70-degree junctions beneath the [[plasma membrane|plasma-membrane]], engulfing ~2 um [[E. coli|real-bacterium]] cells into a closed [[vesicle|vesicle]] prior to [[phagolysosome|real-imm-phagolysosome]] maturation.',
        from: [
          { nodeId: 'cytoskeleton', label: 'Actin Cytoskeleton', cargo: 'ATP-driven Arp2/3 branching' },
          { nodeId: 'plasma-membrane', label: 'Phagocytic Cup Membrane', cargo: 'Receptor-guided zippering' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Sealed Phagosome', cargo: 'Engulfed bacterial cargo' },
          { nodeId: 'real-imm-phagolysosome', label: 'Phagolysosome Pathway', cargo: 'Delivered for acid lysis' }
        ]
      },
      es: {
        subtitle: 'Pseudópodos fagocíticos de actina ramificada Arp2/3',
        simple:
          'Los pseudópodos de actina son prolongaciones rápidas del [[citoesqueleto|cytoskeleton]] del macrófago que empujan la [[membrana plasmática|plasma-membrane]] hacia fuera para rodear por completo a una [[E. coli|real-bacterium]] invasora.',
        story:
          'Cuando los receptores del macrófago tocan una [[E. coli|real-bacterium]], las GTPasas Rac1 y Cdc42 activan a WASP y al complejo nucleador Arp2/3 justo bajo la [[membrana plasmática|plasma-membrane]]. Impulsados por monómeros unidos a ATP, los filamentos ramificados del [[citoesqueleto|cytoskeleton]] crecen formando ángulos de 70 grados y extienden brazos laminares alrededor del bacilo de dos micrómetros. Al encontrarse y sellarse las puntas con ayuda de miosinas, el microbio queda atrapado en un [[fagosoma|real-imm-phagolysosome]] cerrado mientras la red se desmonta.',
        blueprint: {
          role: 'Protrusión generadora de fuerza de actina ramificada que envuelve microbios extracelulares formando fagosomas nacientes',
          arrivesFrom: 'Señalización de receptores Fcγ y TLR activando Rac1/Cdc42, monómeros de actina-ATP y el [[citoesqueleto|cytoskeleton]] del macrófago',
          inside: 'Redes dendríticas nucleadas por Arp2/3 a 70° empujando hacia el frente la copa de [[membrana plasmática|plasma-membrane]]',
          deliversTo: 'Cierre mecánico de una [[vesícula|vesicle]] fagocítica alrededor de [[E. coli|real-bacterium]] rumbo a la fusión del [[fagolisosoma|real-imm-phagolysosome]]',
          loop: 'La conversión de fosfoinosítidos (PIP₂ → PIP₃) despolimeriza la actina al cerrarse la copa para despejar el acceso a los lisosomas'
        },
        scientific:
          'Polimerización dendrítica de F-actina impulsada por Arp2/3 (microfilamentos de ~7 nm del [[citoesqueleto|cytoskeleton]] macrofágico) generando fuerza protrusiva en piconewtons durante la [[defensa inmunitaria|real-immune]]. El agrupamiento de receptores recluta Syk/PI3K y Rac1/Cdc42, activando N-WASP/Arp2/3 para ramificar actina-ATP a 70° bajo la [[membrana plasmática|plasma-membrane]] y engullir bacilos [[E. coli|real-bacterium]] de ~2 µm en una [[vesícula|vesicle]] previa al [[fagolisosoma|real-imm-phagolysosome]].',
        from: [
          { nodeId: 'cytoskeleton', label: 'Citoesqueleto de actina', cargo: 'Ramificación Arp2/3 con ATP' },
          { nodeId: 'plasma-membrane', label: 'Copa fagocítica', cargo: 'Cierre guiado por receptores' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Fagosoma sellado', cargo: 'Bacteria engullida' },
          { nodeId: 'real-imm-phagolysosome', label: 'Ruta fagolisosomal', cargo: 'Entrega para lisis ácida' }
        ]
      }
    },

    ecoli_target: {
      en: {
        subtitle: 'Invading E. coli Bacterium (~2 um Gram-Negative Rod)',
        simple:
          'This ~2-micrometer rod-shaped [[E. coli|real-bacterium]] represents an extracellular bacterial pathogen carrying a cross-linked [[peptidoglycan|peptidoglycan]] wall and outer lipopolysaccharide patterns that alert macrophage receptors.',
        story:
          'Capable of dividing every twenty minutes in nutrient-rich mucosal tissue, this Gram-negative [[E. coli|real-bacterium]] wears two molecular signatures that betray it immediately to human innate immunity: outer-membrane lipopolysaccharide (LPS) and a periplasmic [[peptidoglycan|peptidoglycan]] [[cell wall|cell-wall]]. Neither structure exists on healthy human [[enterocytes|real-enterocyte]]. Macrophage Toll-like receptor 4 locks onto LPS while [[IgG|real-imm-igg]] opsonins coat the surface, routing the intact rod straight into the macrophage [[phagolysosome|real-imm-phagolysosome]], the exact same bacterial wall target exploited clinically by [[penicillin|real-pharm-pbp]].',
        blueprint: {
          role: 'Extracellular Gram-negative bacterial pathogen (~2 x 0.8 um) bearing non-self PAMPs that trigger innate phagocytosis',
          arrivesFrom: 'Mucosal barrier breach by dividing [[prokaryote|prokaryote]] cells ([[E. coli|real-bacterium]]) carrying outer LPS and periplasmic [[peptidoglycan|peptidoglycan]]',
          inside: 'Outer LPS envelope, thin cross-linked [[peptidoglycan|peptidoglycan]] sacculus, inner bilayer, circular [[DNA|dna]], and 70S [[ribosomes|ribosome]]',
          deliversTo: 'TLR4 danger signaling, [[phagolysosome|real-imm-phagolysosome]] enzymatic destruction, and cleaved exogenous peptides loaded onto [[MHC-II|real-imm-mhcii]]',
          loop: 'Because human cells lack peptidoglycan and 70S ribosomes, both innate lysozyme and targeted antibiotics strike E. coli selectively'
        },
        scientific:
          'Extracellular Gram-negative rod [[Escherichia coli|real-bacterium]] (~2.0 x 0.8 um; ~10-fold smaller than the ~20 um patrolling macrophage in [[immune defense|real-immune]]). Displays conserved pathogen-associated molecular patterns (PAMPs) including outer-membrane lipopolysaccharide (lipid A recognized by TLR4/MD-2) and periplasmic [[peptidoglycan|peptidoglycan]] (lysozyme substrate and [[PBP|real-pharm-pbp]] cross-link target). Engulfment and [[phagolysosome|real-imm-phagolysosome]] proteolysis liberate bacterial [[polypeptides|polypeptide]] for [[MHC-II|real-imm-mhcii]] presentation.',
        from: [
          { nodeId: 'real-bacterium', label: 'E. coli Pathogen', cargo: 'Gram-negative 2 um rod' },
          { nodeId: 'peptidoglycan', label: 'Peptidoglycan Wall', cargo: 'Non-self bacterial PAMP' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Acid & ROS Killing', cargo: 'Lysozyme + NOX2 lysis' },
          { nodeId: 'real-imm-mhcii', label: 'Exogenous Peptides', cargo: 'Source of MHC-II cargo' }
        ]
      },
      es: {
        subtitle: 'Bacteria invasora E. coli (bacilo Gram negativo de ~2 µm)',
        simple:
          'Esta [[E. coli|real-bacterium]] en forma de bastón de ~2 micrómetros representa un patógeno bacteriano extracelular con pared de [[peptidoglicano|peptidoglycan]] y lipopolisacárido externo que alertan al macrófago.',
        story:
          'Capaz de dividirse cada veinte minutos en tejidos mucosos ricos en nutrientes, esta [[E. coli|real-bacterium]] Gram negativa exhibe dos firmas moleculares que la delatan ante la inmunidad innata: el lipopolisacárido externo (LPS) y su [[pared celular|cell-wall]] de [[peptidoglicano|peptidoglycan]]. Ninguna existe en los [[enterocitos|real-enterocyte]] sanos. El receptor TLR4 del macrófago detecta el LPS mientras la [[IgG|real-imm-igg]] opsoniza la superficie, conduciendo al bacilo directo al [[fagolisosoma|real-imm-phagolysosome]]; esa misma pared es la diana clínica de la [[penicilina|real-pharm-pbp]].',
        blueprint: {
          role: 'Patógeno bacteriano extracelular Gram negativo (~2 × 0,8 µm) con PAMP extraños que disparan la fagocitosis innata',
          arrivesFrom: 'Invasión mucosa de células [[procariotas|prokaryote]] ([[E. coli|real-bacterium]]) en división con LPS externo y [[peptidoglicano|peptidoglycan]]',
          inside: 'Membrana externa con LPS, saco delgado de [[peptidoglicano|peptidoglycan]], membrana interna, [[ADN|dna]] circular y [[ribosomas|ribosome]] 70S',
          deliversTo: 'Señalización de alarma TLR4, destrucción en el [[fagolisosoma|real-imm-phagolysosome]] y péptidos exógenos cargados en [[MHC-II|real-imm-mhcii]]',
          loop: 'Como las células humanas carecen de peptidoglicano y ribosomas 70S, tanto la lisozima innata como los antibióticos atacan a E. coli selectivamente'
        },
        scientific:
          'Bacilo Gram negativo extracelular [[Escherichia coli|real-bacterium]] (~2,0 × 0,8 µm; ~10 veces menor que el macrófago de ~20 µm en la [[defensa inmunitaria|real-immune]]). Porta patrones moleculares asociados a patógenos (PAMP) conservados: lipopolisacárido externo (lípido A reconocido por TLR4/MD-2) y [[peptidoglicano|peptidoglycan]] periplásmico (sustrato de lisozima y diana de [[PBP|real-pharm-pbp]]). Su captura y proteólisis en el [[fagolisosoma|real-imm-phagolysosome]] liberan [[polipéptidos|polypeptide]] para [[MHC-II|real-imm-mhcii]].',
        from: [
          { nodeId: 'real-bacterium', label: 'Patógeno E. coli', cargo: 'Bacilo Gram negativo 2 µm' },
          { nodeId: 'peptidoglycan', label: 'Pared de peptidoglicano', cargo: 'PAMP bacteriano extraño' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Lisis ácida y ROS', cargo: 'Lisozima + oxidasa NOX2' },
          { nodeId: 'real-imm-mhcii', label: 'Péptidos exógenos', cargo: 'Fuente de carga MHC-II' }
        ]
      }
    },

    phagosome: {
      en: {
        subtitle: 'Membrane-Sealed Nascent Phagosome Vesicle',
        simple:
          'Once actin pseudopods pinch shut around an engulfed [[E. coli|real-bacterium]], the microbe sits trapped inside a sealed membrane [[vesicle|vesicle]] called a phagosome, isolated from the macrophage cytoplasm.',
        story:
          'Formed directly from inverted [[plasma membrane|plasma-membrane]] [[phospholipids|phospholipid]], the freshly closed phagosome starts at neutral extracellular pH and carries no destructive enzymes of its own. Yet within sixty seconds it transforms into a directed maturation hub: small Rab5 GTPases recruit early endosomes and then hand off to Rab7, which motors the phagosome inward along [[cytoskeletal|cytoskeleton]] microtubule tracks. That controlled membrane traffic guarantees toxic acid hydrolases and oxidative radicals meet the trapped [[E. coli|real-bacterium]] only inside the sealed [[phagolysosome|real-imm-phagolysosome]], never leaking into the macrophage\'s own cytosol.',
        blueprint: {
          role: 'Sealed phagocytic isolation vesicle (~2-3 um) trafficking engulfed microbes from the cell cortex toward lysosomal fusion',
          arrivesFrom: 'Pinched-off [[plasma membrane|plasma-membrane]] phagocytic cup enclosing an intact [[E. coli|real-bacterium]] target',
          inside: 'Double-leaflet [[phospholipid|phospholipid]] boundary undergoing Rab5 -> Rab7 maturation and early V-ATPase [[H+|atom-h]] recruitment',
          deliversTo: 'Direct SNARE-mediated fusion with acidic [[lysosomes|lysosome]] to form the bactericidal [[phagolysosome|real-imm-phagolysosome]]',
          loop: 'Intracellular parasites such as Chlamydia hijack Rab markers to prevent lysosomal fusion and survive inside modified vacuoles'
        },
        scientific:
          'Nascent macrophage phagosome (~2-3 um [[vesicle|vesicle]] derived from [[plasma membrane|plasma-membrane]] [[phospholipids|phospholipid]]) sequestering engulfed [[E. coli|real-bacterium]] during [[immune defense|real-immune]]. Undergoes sequential endocytic maturation (Rab5/EEA1/PI3P -> Rab7/RILP/dynein centripetal transport) prior to HOPS/SNARE fusion with acidic [[lysosomes|lysosome]] to assemble the mature pH ~4.5 [[phagolysosome|real-imm-phagolysosome]]. Pathogens like [[Chlamydia|real-chlamydia]] evade destruction specifically by remodeling their vacuole membrane to block this fusion step.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Inverted Phagocytic Cup', cargo: 'Phospholipid vesicle seal' },
          { nodeId: 'real-bacterium', label: 'Trapped E. coli', cargo: 'Isolated bacterial cargo' }
        ],
        to: [
          { nodeId: 'lysosome', label: 'Lysosome Fusion Target', cargo: 'Rab7-guided SNARE docking' },
          { nodeId: 'real-imm-phagolysosome', label: 'Mature Phagolysosome', cargo: 'Acidification & ROS activation' }
        ]
      },
      es: {
        subtitle: 'Fagosoma naciente sellado por membrana',
        simple:
          'Cuando los pseudópodos de actina se cierran sobre una [[E. coli|real-bacterium]], el microbio queda atrapado en una [[vesícula|vesicle]] de membrana llamada fagosoma, aislado del citoplasma del macrófago.',
        story:
          'Formado directamente con [[fosfolípidos|phospholipid]] invertidos de la [[membrana plasmática|plasma-membrane]], el fagosoma recién cerrado parte con pH neutro y sin enzimas digestivas propias. En menos de un minuto se convierte en un nodo de maduración dirigido: las GTPasas Rab5 dan relevo a Rab7, que arrastra la vesícula hacia el interior sobre rieles del [[citoesqueleto|cytoskeleton]]. Este tráfico regulado garantiza que las hidrolasas ácidas y radicales oxidativos ataquen a la [[E. coli|real-bacterium]] solo dentro del [[fagolisosoma|real-imm-phagolysosome]] sellado, sin dañar el citosol propio.',
        blueprint: {
          role: 'Vesícula fagocítica de aislamiento (~2–3 µm) que transporta microbios capturados desde la corteza hacia la fusión lisosomal',
          arrivesFrom: 'Copa de [[membrana plasmática|plasma-membrane]] escindida encerrando una [[E. coli|real-bacterium]] intacta',
          inside: 'Bicapa de [[fosfolípidos|phospholipid]] en transición Rab5 → Rab7 con reclutamiento inicial de bombas V-ATPasa de [[H⁺|atom-h]]',
          deliversTo: 'Fusión directa mediada por SNARE con [[lisosomas|lysosome]] ácidos formando el [[fagolisosoma|real-imm-phagolysosome]] bactericida',
          loop: 'Parásitos intracelulares como Chlamydia alteran los marcadores Rab para impedir la fusión lisosomal y sobrevivir dentro de vacuolas'
        },
        scientific:
          'Fagosoma naciente de macrófago ([[vesícula|vesicle]] de ~2–3 µm derivada de [[fosfolípidos|phospholipid]] de la [[membrana plasmática|plasma-membrane]]) secuestrando [[E. coli|real-bacterium]] en la [[defensa inmunitaria|real-immune]]. Experimenta maduración secuencial (Rab5/EEA1/PI3P → Rab7/RILP/dineína) previa a la fusión HOPS/SNARE con [[lisosomas|lysosome]] para constituir el [[fagolisosoma|real-imm-phagolysosome]] a pH ~4,5. Patógenos como [[Chlamydia|real-chlamydia]] evaden la lisis bloqueando precisamente esta fusión.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Copa fagocítica invertida', cargo: 'Sello vesicular lipídico' },
          { nodeId: 'real-bacterium', label: 'E. coli atrapada', cargo: 'Carga bacteriana aislada' }
        ],
        to: [
          { nodeId: 'lysosome', label: 'Fusión con lisosomas', cargo: 'Acoplamiento Rab7 y SNARE' },
          { nodeId: 'real-imm-phagolysosome', label: 'Fagolisosoma maduro', cargo: 'Activación ácida y ROS' }
        ]
      }
    },

    lysosome_ros: {
      en: {
        subtitle: 'Acidic Lysosome Fusion (pH 4.5) & NOX2 ROS Burst',
        simple:
          'Fusing [[lysosomes|lysosome]] flood the phagosome with acid (pH 4.5), wall-cutting lysozyme, and a fierce reactive oxygen burst (ROS) from NOX2 enzymes that rapidly dissolves the trapped [[E. coli|real-bacterium]].',
        story:
          'As Rab7 docks [[lysosomes|lysosome]] onto the phagosome wall, two lethal killing systems ignite together inside the newly formed [[phagolysosome|real-imm-phagolysosome]]. First, V-ATPase proton pumps drive [[H+|atom-h]] ions inward until luminal pH plunges to ~4.5, switching on lysozyme and cathepsin proteases that dismantle bacterial [[peptidoglycan|peptidoglycan]] and [[proteins|protein]]. Second, the membrane-assembled NADPH oxidase complex (NOX2) uses heme-[[Fe|atom-fe]] centers to transfer electrons from cytosolic NADPH onto luminal oxygen, unleashing superoxide (O2-), hydrogen peroxide (H2O2), and hypochlorous acid that shred bacterial membranes while generating clean peptides for [[MHC-II|real-imm-mhcii]].',
        blueprint: {
          role: 'Dual acidic-hydrolase and oxidative-burst killing engine executing rapid intracellular bacterial destruction',
          arrivesFrom: 'Fusing acidic [[lysosomes|lysosome]] (V-ATPase + hydrolases), cytosolic NADPH/ATP, and dissolved [[O2|atom-o]]',
          inside: 'pH ~4.5 lumen activating lysozyme and cathepsins alongside heme-[[Fe|atom-fe]] NOX2 generating O2-, H2O2, and reactive chlorine species',
          deliversTo: 'Lethal breakdown of trapped [[E. coli|real-bacterium]] and trimmed 13-25 aa bacterial peptides exported to [[MHC-II|real-imm-mhcii]]',
          loop: 'Genetic defects in NOX2 subunits cause Chronic Granulomatous Disease, proving how vital the ROS burst is for bacterial defense'
        },
        scientific:
          'Convergent lysosomal acidification and NOX2 respiratory burst inside the macrophage [[phagolysosome|real-imm-phagolysosome]]. Vacuolar H+-ATPase drives luminal [[H+|atom-h]] accumulation (pH ~4.5), activating ~40 acid hydrolases (lysozyme cleaving [[peptidoglycan|peptidoglycan]] beta-1,4 bonds, cathepsins B/D/L, DNases). Concurrently, phagosomal gp91phox/p22phox (NOX2, heme [[Fe|atom-fe]] flavocytochrome) catalyzes NADPH + 2 O2 -> NADP+ + H+ + 2 O2-, dismutating into H2O2 and HOCl to kill [[E. coli|real-bacterium]] and feed [[MHC-II|real-imm-mhcii]] processing.',
        from: [
          { nodeId: 'lysosome', label: 'Acid Hydrolase Cargo', cargo: 'pH 4.5 lysozyme & cathepsins' },
          { nodeId: 'atom-fe', label: 'NOX2 Heme-Iron Core', cargo: 'NADPH -> O2- / H2O2 ROS' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Phagolysosome Explorer', cargo: 'Acid + ROS bacterial kill' },
          { nodeId: 'real-imm-mhcii', label: 'MHC-II Peptide Pool', cargo: 'Cleaved exogenous antigens' }
        ]
      },
      es: {
        subtitle: 'Fusión lisosomal ácida (pH 4,5) y estallido ROS de NOX2',
        simple:
          'Los [[lisosomas|lysosome]] fusionados inundan el fagosoma con ácido (pH 4,5), lisozima que corta paredes y un intenso estallido de especies reactivas de oxígeno (ROS) de NOX2 que disuelve a la [[E. coli|real-bacterium]].',
        story:
          'Al acoplarse los [[lisosomas|lysosome]] sobre la membrana del fagosoma, se activan simultáneamente dos sistemas letales dentro del [[fagolisosoma|real-imm-phagolysosome]]. Primero, las bombas V-ATPasa introducen protones [[H⁺|atom-h]] hasta bajar el pH a ~4,5, encendiendo la lisozima y las catepsinas que desarman el [[peptidoglicano|peptidoglycan]] y las [[proteínas|protein]] bacterianas. Segundo, el complejo NADPH oxidasa (NOX2) utiliza centros hemo con [[Fe|atom-fe]] para transferir electrones del NADPH al oxígeno luminal, liberando superóxido (O₂⁻), peróxido de hidrógeno (H₂O₂) y ácido hipocloroso que destruyen la bacteria y producen péptidos para [[MHC-II|real-imm-mhcii]].',
        blueprint: {
          role: 'Motor bactericida dual de hidrolasas ácidas y estallido oxidativo que ejecuta la destrucción intracelular rápida',
          arrivesFrom: '[[Lisosomas|lysosome]] ácidos fusionados (V-ATPasa + hidrolasas), NADPH/ATP citosólico y [[O₂|atom-o]] disuelto',
          inside: 'Lumen a pH ~4,5 activando lisozima y catepsinas junto a NOX2 con [[Fe|atom-fe]] hemo generando O₂⁻, H₂O₂ y especies cloradas',
          deliversTo: 'Degradación letal de la [[E. coli|real-bacterium]] atrapada y péptidos bacterianos de 13–25 aa hacia [[MHC-II|real-imm-mhcii]]',
          loop: 'Los defectos genéticos en NOX2 causan enfermedad granulomatosa crónica, demostrando el papel esencial del estallido ROS'
        },
        scientific:
          'Acidificación lisosomal y estallido respiratorio NOX2 convergentes en el [[fagolisosoma|real-imm-phagolysosome]] del macrófago. La V-ATPasa concentra [[H⁺|atom-h]] (pH ~4,5) activando ~40 hidrolasas ácidas (lisozima sobre enlaces β-1,4 del [[peptidoglicano|peptidoglycan]], catepsinas B/D/L, ADNasas). A la vez, el flavocitocromo gp91phox/p22phox (NOX2 con [[Fe|atom-fe]] hemo) cataliza NADPH + 2 O₂ → NADP⁺ + H⁺ + 2 O₂⁻ → H₂O₂ y HOCl, destruyendo a [[E. coli|real-bacterium]] y abasteciendo a [[MHC-II|real-imm-mhcii]].',
        from: [
          { nodeId: 'lysosome', label: 'Carga de hidrolasas ácidas', cargo: 'Lisozima y catepsinas pH 4,5' },
          { nodeId: 'atom-fe', label: 'Núcleo hemo-hierro NOX2', cargo: 'NADPH → O₂⁻ / H₂O₂ ROS' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Explorador Fagolisosoma', cargo: 'Destrucción ácida y ROS' },
          { nodeId: 'real-imm-mhcii', label: 'Reserva peptídica MHC-II', cargo: 'Antígenos exógenos cortados' }
        ]
      }
    },

    mhcii_display: {
      en: {
        subtitle: 'Macrophage MHC-II Antigen Display (HLA-DR1 PDB 1DLH)',
        simple:
          'Anchored on the macrophage surface, [[MHC-II|real-imm-mhcii]] holds digested bacterial peptide pieces in an open cradle so passing CD4+ helper T-cells can confirm the invasion and rally B-cell [[IgG|real-imm-igg]] production.',
        story:
          'Every time the [[phagolysosome|real-imm-phagolysosome]] breaks down an [[E. coli|real-bacterium]], specialized endosomal vesicles intercept newly folded HLA-DR1 [[MHC-II|real-imm-mhcii]] heterodimers. Once acidic cathepsins trim the temporary invariant chain down to the CLIP plug, HLA-DM catalyzes peptide exchange, snapping a 13-to-25-amino-acid bacterial fragment into the open alpha1-beta1 groove. Delivered to the macrophage [[plasma membrane|plasma-membrane]], this outward-facing display alerts helper T-cells that an extracellular pathogen is present, bridging fast innate phagocytosis to durable adaptive [[IgG|real-imm-igg]] and [[CD8+ T-cell|real-imm-tcr-mhci]] responses.',
        blueprint: {
          role: 'Surface exogenous-antigen presentation complex (~7 nm) converting phagocytic digestion into CD4+ adaptive T-helper activation',
          arrivesFrom: 'Digested 13-25 aa bacterial peptides from the [[phagolysosome|real-imm-phagolysosome]] and secretory [[vesicles|vesicle]] carrying HLA-DR1',
          inside: 'Heterodimeric alpha/beta Class II MHC (PDB 1DLH) with an open-ended beta-sheet/alpha-helix groove exchanging CLIP for pathogen peptide',
          deliversTo: 'Stable pMHC-II presentation on the macrophage [[plasma membrane|plasma-membrane]] activating CD4+ T-helper cytokines and B-cell [[IgG|real-imm-igg]]',
          loop: 'Unlike universal MHC-I on all nucleated cells, MHC-II is restricted to professional sentinels (macrophages, dendritic cells, B-cells)'
        },
        scientific:
          'Macrophage surface HLA-DR1 [[MHC Class II|real-imm-mhcii]] heterodimer (crystal structure PDB 1DLH; ~34 kDa alpha + ~29 kDa beta transmembrane chains). In late endosomal MIIC compartments, HLA-DM releases the protective CLIP fragment so exogenous 13-25 residue [[polypeptide|polypeptide]] fragments cleaved inside the [[phagolysosome|real-imm-phagolysosome]] lock into anchor pockets P1, P4, P6, and P9 before vesicular export to the [[plasma membrane|plasma-membrane]] to engage CD4+ TCRs.',
        from: [
          { nodeId: 'real-imm-phagolysosome', label: 'Phagolysosome Peptides', cargo: '13-25 aa exogenous fragments' },
          { nodeId: 'vesicle', label: 'MIIC Loading Vesicle', cargo: 'HLA-DM CLIP peptide swap' }
        ],
        to: [
          { nodeId: 'real-imm-mhcii', label: 'MHC-II Explorer Node', cargo: 'HLA-DR1 PDB 1DLH cleft' },
          { nodeId: 'real-imm-igg', label: 'CD4+ -> B-Cell IgG Help', cargo: 'Drives adaptive antibodies' }
        ]
      },
      es: {
        subtitle: 'Presentación MHC-II en macrófago (HLA-DR1 PDB 1DLH)',
        simple:
          'Anclado en la superficie del macrófago, el [[MHC-II|real-imm-mhcii]] exhibe fragmentos peptídicos bacterianos en un surco abierto para que los linfocitos T cooperadores CD4⁺ confirmen la invasión y activen [[anticuerpos IgG|real-imm-igg]].',
        story:
          'Cada vez que el [[fagolisosoma|real-imm-phagolysosome]] descompone una [[E. coli|real-bacterium]], vesículas endosomales especializadas interceptan heterodímeros recién sintetizados de [[MHC-II|real-imm-mhcii]] HLA-DR1. Tras recortar las catepsinas la cadena invariante hasta el tapón CLIP, HLA-DM cataliza el intercambio e inserta un péptido bacteriano de 13 a 25 aminoácidos en la hendidura abierta α1–β1. Expuesto en la [[membrana plasmática|plasma-membrane]] del macrófago, este complejo alerta a los linfocitos T cooperadores y enlaza la fagocitosis innata con la producción adaptativa de [[IgG|real-imm-igg]] y el refuerzo de [[linfocitos T CD8⁺|real-imm-tcr-mhci]].',
        blueprint: {
          role: 'Complejo superficial presentador de antígenos exógenos (~7 nm) que traduce la digestión fagocítica en activación T cooperadora CD4⁺',
          arrivesFrom: 'Péptidos bacterianos de 13–25 aa del [[fagolisosoma|real-imm-phagolysosome]] y [[vesículas|vesicle]] secretoras con HLA-DR1',
          inside: 'Heterodímero MHC clase II α/β (PDB 1DLH) con surco abierto de lámina β y hélices α intercambiando CLIP por péptido patógeno',
          deliversTo: 'Exposición estable pMHC-II en la [[membrana plasmática|plasma-membrane]] activando citocinas T CD4⁺ y maduración de [[IgG|real-imm-igg]]',
          loop: 'A diferencia del MHC-I universal en toda célula nucleada, el MHC-II se restringe a centinelas profesionales (macrófagos, dendríticas, células B)'
        },
        scientific:
          'Heterodímero [[MHC clase II|real-imm-mhcii]] HLA-DR1 en membrana macrofágica (cristalografía PDB 1DLH; cadenas transmembrana α ~34 kDa y β ~29 kDa). En compartimentos endosomales MIIC, HLA-DM libera CLIP para alojar fragmentos [[polipeptídicos|polypeptide]] exógenos de 13–25 residuos del [[fagolisosoma|real-imm-phagolysosome]] en los bolsillos P1, P4, P6 y P9 antes de su exportación vesicular hacia la [[membrana plasmática|plasma-membrane]] para estimular TCR CD4⁺.',
        from: [
          { nodeId: 'real-imm-phagolysosome', label: 'Péptidos del fagolisosoma', cargo: 'Fragmentos exógenos 13–25 aa' },
          { nodeId: 'vesicle', label: 'Vesícula de carga MIIC', cargo: 'Intercambio CLIP por HLA-DM' }
        ],
        to: [
          { nodeId: 'real-imm-mhcii', label: 'Nodo Explorador MHC-II', cargo: 'Surco HLA-DR1 PDB 1DLH' },
          { nodeId: 'real-imm-igg', label: 'Ayuda CD4⁺ → IgG B', cargo: 'Impulsa anticuerpos adaptativos' }
        ]
      }
    },

    igg_antibody: {
      en: {
        subtitle: 'Y-Shaped IgG Immunoglobulin Swarm (PDB 1IGT)',
        simple:
          'Swarming around the free [[SARS-CoV-2|real-coronavirus]] virion, Y-shaped [[IgG antibodies|real-imm-igg]] combine two precision target-grabbing Fab arms with an Fc signaling stem to halt viral infection.',
        story:
          'Built from two heavy chains and two light chains folded into twelve compact beta-sandwich domains, intact [[IgG|real-imm-igg]] is the dominant long-lived humoral antibody circulating in human blood and mucosal fluids. After B-cells receive helper confirmation via [[MHC-II|real-imm-mhcii]] or [[mRNA-LNP vaccination|real-pharm-mrna-lnp]], affinity-matured plasma cells secrete millions of identical 150-kilodalton Y-shaped antibodies. Flexible [[sulfur|atom-s]] hinge bridges let both Fab tips simultaneously bridge adjacent [[SARS-CoV-2|real-coronavirus]] Spike trimers for [[RBD neutralization|real-imm-rbd-block]] while presenting their constant Fc stems outward for macrophage clearance.',
        blueprint: {
          role: 'Bivalent 150 kDa humoral immunoglobulin (~12 nm span) executing high-avidity viral neutralization and immune opsonization',
          arrivesFrom: 'Plasma-cell [[80S ribosome|real-cd-ribo80]] secretion following [[MHC-II|real-imm-mhcii]] T-help or [[mRNA-LNP|real-pharm-mrna-lnp]] immunization',
          inside: 'Intact heterotetrameric IgG2a (PDB 1IGT): two hypervariable Fab arms, central disulfide-bridged hinge, and N297-glycosylated Fc stem',
          deliversTo: 'Dense steric capping of [[SARS-CoV-2 Spike RBD|real-imm-rbd-block]] and Fc-receptor docking onto patrolling [[macrophages|real-imm-phagolysosome]]',
          loop: 'Somatic hypermutation in lymph-node germinal centers refines Fab CDR loops from micromolar to picomolar binding affinity'
        },
        scientific:
          'Intact mammalian [[IgG|real-imm-igg]] heterotetramer (IgG2a crystal structure PDB 1IGT; ~150 kDa, two ~50 kDa gamma heavy chains + two ~25 kDa light chains stabilized by intradomain and inter-chain [[S|atom-s]]-S disulfide bonds). Flexible proline-rich hinge allows wide Fab-Fab angles (~60-180 degrees) supporting bivalent avidity across [[SARS-CoV-2|real-coronavirus]] Spike trimers ([[RBD block|real-imm-rbd-block]], PDB 7BZ5) while exposing the CH2/CH3 Fc domain to macrophage Fc-gamma receptors.',
        from: [
          { nodeId: 'real-imm-mhcii', label: 'T-Helper Activation', cargo: 'B-cell IgG class switch' },
          { nodeId: 'real-cd-ribo80', label: 'Plasma-Cell 80S Output', cargo: '150 kDa heavy/light chains' }
        ],
        to: [
          { nodeId: 'real-imm-igg', label: 'IgG Explorer Node', cargo: 'PDB 1IGT Fab + hinge + Fc' },
          { nodeId: 'real-imm-rbd-block', label: 'Viral RBD Neutralization', cargo: 'Steric ACE2 blockade' }
        ]
      },
      es: {
        subtitle: 'Enjambre de inmunoglobulinas IgG en Y (PDB 1IGT)',
        simple:
          'Rodeando al virión libre de [[SARS-CoV-2|real-coronavirus]], los [[anticuerpos IgG|real-imm-igg]] en Y combinan dos brazos Fab de alta precisión con un tallo Fc señalizador para frenar la infección vírica.',
        story:
          'Formada por dos cadenas pesadas y dos ligeras plegadas en doce dominios en sándwich β, la [[IgG|real-imm-igg]] intacta es el principal anticuerpo humoral de larga duración en sangre y mucosas humanas. Tras recibir confirmación cooperadora vía [[MHC-II|real-imm-mhcii]] o [[vacunación ARNm-LNP|real-pharm-mrna-lnp]], las células plasmáticas secretan millones de anticuerpos de 150 kilodaltons. Sus puentes bisagra de [[azufre|atom-s]] permiten que ambos extremos Fab sujeten simultáneamente trímeros adyacentes del [[SARS-CoV-2|real-coronavirus]] logrando el [[bloqueo RBD|real-imm-rbd-block]] mientras exhiben sus tallos Fc al macrófago.',
        blueprint: {
          role: 'Inmunoglobulina humoral bivalente de 150 kDa (~12 nm) que ejecuta neutralización vírica de alta avidez y opsonización',
          arrivesFrom: 'Secreción en [[ribosomas 80S|real-cd-ribo80]] de células plasmáticas tras ayuda [[MHC-II|real-imm-mhcii]] o inmunización [[ARNm-LNP|real-pharm-mrna-lnp]]',
          inside: 'Heterotetrámero intacto IgG2a (PDB 1IGT): dos brazos Fab hipervariables, bisagra central disulfuro y tallo Fc glucosilado en N297',
          deliversTo: 'Recubrimiento estérico del [[RBD de SARS-CoV-2|real-imm-rbd-block]] y acoplamiento Fc hacia [[macrófagos|real-imm-phagolysosome]] patrulleros',
          loop: 'La hipermutación somática en centros germinales perfecciona los bucles CDR del Fab de afinidad micromolar a picomolar'
        },
        scientific:
          'Heterotetrámero intacto de [[IgG|real-imm-igg]] de mamíferos (cristalografía IgG2a PDB 1IGT; ~150 kDa, dos cadenas pesadas γ de ~50 kDa y dos ligeras de ~25 kDa estabilizadas por puentes disulfuro [[S|atom-s]]–S). Su bisagra flexible rica en prolina admite ángulos Fab–Fab amplios (~60–180°) que confieren avidez bivalente sobre trímeros de [[SARS-CoV-2|real-coronavirus]] ([[bloqueo RBD|real-imm-rbd-block]], PDB 7BZ5) y exponen el dominio Fc CH2/CH3 a receptores Fcγ.',
        from: [
          { nodeId: 'real-imm-mhcii', label: 'Activación T cooperadora', cargo: 'Cambio de clase B a IgG' },
          { nodeId: 'real-cd-ribo80', label: 'Síntesis 80S plasmática', cargo: 'Cadenas pesadas y ligeras' }
        ],
        to: [
          { nodeId: 'real-imm-igg', label: 'Nodo Explorador IgG', cargo: 'PDB 1IGT Fab + bisagra + Fc' },
          { nodeId: 'real-imm-rbd-block', label: 'Neutralización RBD vírico', cargo: 'Bloqueo estérico de ACE2' }
        ]
      }
    },

    fab_arms: {
      en: {
        subtitle: 'Hypervariable IgG Fab Arms & CDR Binding Tips',
        simple:
          'The two upper Fab arms of each [[IgG antibody|real-imm-igg]] carry sculpted hypervariable tips (CDR loops) that fit a specific viral surface shape and clamp tightly onto [[SARS-CoV-2|real-coronavirus]] Spike RBDs.',
        story:
          'At the distal tips of both [[IgG|real-imm-igg]] Fab arms sit six flexible polypeptide loops called Complementarity-Determining Regions: three contributed by the heavy-chain variable domain (VH) and three by the light-chain variable domain (VL). Assembled randomly by V(D)J gene recombination and honed by somatic hypermutation, those loops form a bespoke chemical mold lined with [[carbon|atom-c]], [[nitrogen|atom-n]], and [[oxygen|atom-o]] contacts. When the Fab tip meets the [[SARS-CoV-2 Spike RBD|real-imm-rbd-block]], exact shape complementarity and dense [[hydrogen bonds|real-pharm-atoms]] lock the viral contact ridge shut.',
        blueprint: {
          role: 'Antigen-binding variable Fab domains (~50 kDa each) delivering sequence-specific molecular recognition across diverse epitopes',
          arrivesFrom: 'V(D)J-recombined VH/VL and CH1/CL [[protein|protein]] folds assembled on plasma-cell [[IgG|real-imm-igg]] (PDB 1IGT)',
          inside: 'Six hypervariable CDR loops (CDR-H1-3, CDR-L1-3) forming a ~800-1,000 A^2 epitope contact patch (PDB 7BZ5 B38 Fab)',
          deliversTo: 'Direct nanomolar steric capping of [[SARS-CoV-2 Spike RBD|real-imm-rbd-block]] preventing contact with host ACE2',
          loop: 'Because every IgG has two identical Fab arms on a flexible hinge, simultaneous two-point binding boosts effective grip dramatically'
        },
        scientific:
          'Fragment antigen-binding (Fab) arms of [[IgG|real-imm-igg]] (PDB 1IGT intact scaffold; B38 neutralizing Fab bound to [[SARS-CoV-2|real-coronavirus]] RBD in PDB 7BZ5; ~50 kDa per arm pairing VH-CH1 with VL-CL via an inter-chain [[S|atom-s]]-S disulfide). Six hypervariable CDR loops (especially hyperdiverse CDR-H3) establish directional [[N-H...O hydrogen bonds|real-pharm-atoms]], salt bridges, and van der Waals packing (~860 A^2 buried area) across the [[Spike RBD|real-imm-rbd-block]] receptor-binding ridge.',
        from: [
          { nodeId: 'real-imm-igg', label: 'IgG Variable Domains', cargo: 'Twin VH/VL Fab arms' },
          { nodeId: 'real-pharm-atoms', label: 'CDR3 Atomic H-Bonds', cargo: 'Sub-nm epitope precision' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Spike RBD Blockade', cargo: 'PDB 7BZ5 steric cap' },
          { nodeId: 'real-coronavirus', label: 'Neutralized Virion', cargo: 'Entry receptor masked' }
        ]
      },
      es: {
        subtitle: 'Brazos Fab hipervariables de IgG y puntas CDR',
        simple:
          'Los dos brazos superiores Fab de cada [[anticuerpo IgG|real-imm-igg]] portan puntas hipervariables moldeadas (bucles CDR) que encajan en una superficie vírica concreta y sellan el RBD de [[SARS-CoV-2|real-coronavirus]].',
        story:
          'En los extremos de ambos brazos Fab de la [[IgG|real-imm-igg]] sobresalen seis bucles flexibles llamados regiones determinantes de complementariedad (CDR): tres del dominio variable pesado (VH) y tres del ligero (VL). Generados por recombinación genética V(D)J y afinados por hipermutación somática, conforman un molde químico exacto revestido de contactos de [[carbono|atom-c]], [[nitrógeno|atom-n]] y [[oxígeno|atom-o]]. Al encontrar el [[RBD de SARS-CoV-2|real-imm-rbd-block]], su complementariedad geométrica y densos [[puentes de hidrógeno|real-pharm-atoms]] sellan la cresta de unión vírica.',
        blueprint: {
          role: 'Dominios variables Fab de unión a antígeno (~50 kDa cada uno) que proporcionan reconocimiento molecular específico de epítopo',
          arrivesFrom: 'Pliegues [[proteicos|protein]] VH/VL y CH1/CL recombinados por V(D)J ensamblados en la [[IgG|real-imm-igg]] (PDB 1IGT)',
          inside: 'Seis bucles hipervariables CDR (CDR-H1–3, CDR-L1–3) formando una superficie de contacto de ~800–1.000 Å² (Fab B38 PDB 7BZ5)',
          deliversTo: 'Sellado estérico nanomolar directo sobre el [[RBD de SARS-CoV-2|real-imm-rbd-block]] que bloquea la unión al receptor ACE2',
          loop: 'Al disponer de dos brazos Fab idénticos sobre una bisagra flexible, la unión simultánea en dos puntos multiplica la avidez efectiva'
        },
        scientific:
          'Brazos Fab (fragmento de unión a antígeno) de [[IgG|real-imm-igg]] (andamiaje PDB 1IGT; Fab neutralizante B38 unido al RBD de [[SARS-CoV-2|real-coronavirus]] en PDB 7BZ5; ~50 kDa por brazo emparejando VH–CH1 con VL–CL mediante puente [[S|atom-s]]–S). Sus seis bucles CDR (especialmente CDR-H3) forman [[puentes de hidrógeno N–H···O|real-pharm-atoms]], puentes salinos y empaquetamiento de van der Waals (~860 Å²) sobre el [[RBD de la espícula|real-imm-rbd-block]].',
        from: [
          { nodeId: 'real-imm-igg', label: 'Dominios variables IgG', cargo: 'Dos brazos Fab VH/VL' },
          { nodeId: 'real-pharm-atoms', label: 'Enlaces H atómicos CDR3', cargo: 'Precisión subnanométrica' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Bloqueo RBD espícula', cargo: 'Sellado estérico PDB 7BZ5' },
          { nodeId: 'real-coronavirus', label: 'Virión neutralizado', cargo: 'Receptor ocultado' }
        ]
      }
    },

    fc_stem: {
      en: {
        subtitle: 'IgG Constant Fc Stem (Opsonization & Complement Flag)',
        simple:
          'The constant lower Fc stem of every [[IgG antibody|real-imm-igg]] points outward as a uniform constant stalk, recruiting patrolling macrophages and complement proteins to destroy antibody-coated pathogens.',
        story:
          'While the twin Fab tips vary across billions of pathogen shapes, the vertical Fc stem shared by human [[IgG|real-imm-igg]] molecules preserves a uniform conserved structure built from paired heavy-chain CH2 and CH3 domains with a vital N297 carbohydrate core nestled between them. Once multiple IgG molecules blanket a [[SARS-CoV-2|real-coronavirus]] virion or an invading [[E. coli|real-bacterium]], their clustered Fc tails cross-link Fc-gamma receptors on patrolling macrophages. That shared effector stalk instantly triggers actin pseudopod engulfment into the [[phagolysosome|real-imm-phagolysosome]] and docks complement C1q to amplify clearance.',
        blueprint: {
          role: 'Conserved heavy-chain CH2-CH3 effector stalk linking adaptive Fab binding to innate phagocytosis and complement',
          arrivesFrom: 'Paired gamma heavy-chain constant domains below the disulfide hinge of [[IgG|real-imm-igg]] (PDB 1IGT)',
          inside: 'Glycosylated homodimeric Fc stem (~50 kDa) exposing conserved Fc-gamma receptor and C1q complement binding interfaces',
          deliversTo: 'Opsonization clustering on [[macrophage|real-imm-phagolysosome]] Fc-gamma receptors and FcRn salvage recycling that extends IgG half-life to ~21 days',
          loop: 'Because Fc is constant while Fab is variable, one set of innate macrophage receptors can clear any pathogen recognized by adaptive B-cells'
        },
        scientific:
          'Fragment crystallizable (Fc) constant region of human [[IgG|real-imm-igg]] (PDB 1IGT; homodimeric CH2-CH3 heavy-chain stalk ~50 kDa below the Cys-S-S-Cys hinge, structurally stabilized by conserved Asn297 N-linked biantennary glycans). Clustering of Fc stems on opsonized [[virions|real-coronavirus]] or [[bacteria|real-bacterium]] engages low-affinity activating Fc-gamma receptors (Fc-gamma-RIIa/IIIa) on macrophages to trigger ITAM-mediated [[phagolysosome|real-imm-phagolysosome]] engulfment, C1q classical complement activation, and pH-dependent FcRn endosomal salvage (~3-week serum half-life).',
        from: [
          { nodeId: 'real-imm-igg', label: 'IgG Heavy-Chain Hinge', cargo: 'CH2-CH3 effector stalk' },
          { nodeId: 'protein', label: 'N297 Glycoprotein Core', cargo: 'Conserved Fc geometry' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Macrophage Opsonization', cargo: 'Fc-gamma-R uptake signal' },
          { nodeId: 'real-immune', label: 'Humoral-Innate Bridge', cargo: 'C1q & phagocyte recruitment' }
        ]
      },
      es: {
        subtitle: 'Tallo constante Fc de IgG (señal de opsonización)',
        simple:
          'El tallo constante inferior Fc de cada [[anticuerpo IgG|real-imm-igg]] apunta hacia fuera formando un soporte constante uniforme que recluta macrófagos patrulleros y proteínas del complemento para eliminar patógenos marcados.',
        story:
          'Mientras las puntas Fab varían ante miles de millones de formas patógenas, el tallo vertical Fc compartido por las moléculas de [[IgG|real-imm-igg]] mantiene una arquitectura uniforme de dominios pesados CH2 y CH3 con un núcleo glucídico esencial en N297. Cuando múltiples IgG tapizan un virión de [[SARS-CoV-2|real-coronavirus]] o una [[E. coli|real-bacterium]], sus tallos Fc agrupados entrecruzan los receptores Fcγ de los macrófagos. Esa señal estandarizada dispara la fagocitosis hacia el [[fagolisosoma|real-imm-phagolysosome]] y recluta al complejo C1q del complemento.',
        blueprint: {
          role: 'Tallo efector constante CH2–CH3 que enlaza la captura adaptativa por Fab con la fagocitosis innata y el complemento',
          arrivesFrom: 'Dominios constantes pareados de la cadena pesada γ bajo la bisagra disulfuro de la [[IgG|real-imm-igg]] (PDB 1IGT)',
          inside: 'Tallo homodimérico Fc glucosilado (~50 kDa) con interfaces conservadas para receptores Fcγ y la proteína C1q del complemento',
          deliversTo: 'Agrupamiento opsonizante en receptores Fcγ de [[macrófagos|real-imm-phagolysosome]] y reciclaje FcRn que prolonga la vida de IgG a ~21 días',
          loop: 'Al ser constante el Fc mientras varía el Fab, un solo juego de receptores macrofágicos elimina cualquier patógeno marcado por células B'
        },
        scientific:
          'Región constante Fc (fragmento cristalizable) de [[IgG|real-imm-igg]] humana (PDB 1IGT; tallo homodimérico CH2–CH3 de ~50 kDa bajo la bisagra Cys–S–S–Cys, estabilizado por N-glucanos biantenarios en Asn297). El agrupamiento de tallos Fc sobre [[viriones|real-coronavirus]] o [[bacterias|real-bacterium]] opsonizados activa receptores Fcγ (FcγRIIa/IIIa) disparando la señal ITAM hacia el [[fagolisosoma|real-imm-phagolysosome]], la vía clásica C1q y el rescate endosomal FcRn (~3 semanas de vida media).',
        from: [
          { nodeId: 'real-imm-igg', label: 'Bisagra pesada IgG', cargo: 'Tallo efector CH2–CH3' },
          { nodeId: 'protein', label: 'Núcleo glucoproteico N297', cargo: 'Geometría Fc conservada' }
        ],
        to: [
          { nodeId: 'real-imm-phagolysosome', label: 'Opsonización macrofágica', cargo: 'Señal de captura FcγR' },
          { nodeId: 'real-immune', label: 'Puente humoral-innato', cargo: 'Reclutamiento de C1q y fagocitos' }
        ]
      }
    },

    spike_rbd: {
      en: {
        subtitle: 'SARS-CoV-2 Spike RBD Neutralized by Fab (PDB 7BZ5)',
        simple:
          'The Spike Receptor-Binding Domain (RBD) is the tip of the [[SARS-CoV-2|real-coronavirus]] surface glycoprotein that normally grips host ACE2, here capped tightly by neutralizing [[IgG|real-imm-igg]] Fab arms.',
        story:
          'Sitting atop each homotrimeric [[SARS-CoV-2|real-coronavirus]] Spike stalk, the ~220-residue Receptor-Binding Domain hinges upward to expose its contoured receptor-binding motif. Under unopposed infection, that motif docks snugly onto human epithelial ACE2 to unlock viral membrane fusion. Here, however, high-affinity Class 1 [[IgG|real-imm-igg]] Fab arms (modeled from neutralizing B38 antibody, PDB 7BZ5) blanket the entire contact ridge directly via [[atomic hydrogen bonds|real-pharm-atoms]], achieving [[steric RBD blockade|real-imm-rbd-block]], the exact protective target encoded by [[mRNA-LNP vaccines|real-pharm-mrna-lnp]].',
        blueprint: {
          role: 'Viral entry-trigger domain (residues 319-541) serving as the primary vulnerable epitope for neutralizing IgG antibodies',
          arrivesFrom: 'Surface homotrimeric Spike glycoproteins protruding from the [[SARS-CoV-2|real-coronavirus]] lipid envelope',
          inside: 'Five-strand beta-sheet RBD core topped by an extended receptor-binding ridge directly clamped by B38 Fab (PDB 7BZ5)',
          deliversTo: 'Steric [[neutralization|real-imm-rbd-block]] that completely prevents viral docking onto human epithelial ACE2',
          loop: 'Viral point mutations in the RBD ridge can weaken old antibodies, driving updated vaccine formulations and affinity maturation'
        },
        scientific:
          '[[SARS-CoV-2|real-coronavirus]] Spike glycoprotein Receptor-Binding Domain (residues 319-541, ~25 kDa) resolved in complex with neutralizing human [[IgG|real-imm-igg]] Fab B38 (crystal structure PDB 7BZ5). The RBD receptor-binding motif (RBM, residues 438-506) transitions from down to up conformations to engage ACE2; Fab B38 covers 18 of 21 ACE2-contact residues across ~860 A^2 via [[polar CDR H-bonds|real-pharm-atoms]], enforcing [[steric RBD neutralization|real-imm-rbd-block]] and informing prefusion 2P-Spike [[mRNA-LNP vaccine|real-pharm-mrna-lnp]] design.',
        from: [
          { nodeId: 'real-coronavirus', label: 'SARS-CoV-2 Spike', cargo: 'Up-state RBD tip (319-541)' },
          { nodeId: 'real-imm-igg', label: 'Neutralizing B38 Fab', cargo: 'High-affinity CDR clamp' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'RBD Block Explorer', cargo: 'PDB 7BZ5 vs 6M0J clash' },
          { nodeId: 'real-pharm-mrna-lnp', label: 'Vaccine Antigen Target', cargo: 'Prefusion Spike immunogen' }
        ]
      },
      es: {
        subtitle: 'RBD de espícula SARS-CoV-2 neutralizado por Fab (PDB 7BZ5)',
        simple:
          'El dominio de unión al receptor (RBD) es la punta de la espícula del [[SARS-CoV-2|real-coronavirus]] que normalmente atrapa al receptor humano ACE2, aquí sellado por los brazos Fab de la [[IgG|real-imm-igg]].',
        story:
          'Situado en la cima de cada trímero de espícula del [[SARS-CoV-2|real-coronavirus]], el dominio RBD de ~220 residuos bascula hacia arriba para exponer su cresta de unión al receptor. En una infección sin barreras, esa cresta se acopla sobre el receptor epitelial humano ACE2 e inicia la fusión de membranas. Aquí, los brazos Fab de [[IgG|real-imm-igg]] neutralizante de clase 1 (anticuerpo B38, PDB 7BZ5) cubren la cresta entera mediante [[enlaces de hidrógeno atómicos|real-pharm-atoms]], ejecutando el [[bloqueo estérico del RBD|real-imm-rbd-block]] que entrenan las [[vacunas ARNm-LNP|real-pharm-mrna-lnp]].',
        blueprint: {
          role: 'Dominio vírico desencadenante de entrada (residuos 319–541) y epítopo vulnerable principal frente a anticuerpos IgG neutralizantes',
          arrivesFrom: 'Glucoproteínas espícula homotriméricas proyectadas desde la envoltura lipídica de [[SARS-CoV-2|real-coronavirus]]',
          inside: 'Núcleo RBD de cinco hebras β coronado por una cresta de unión sujeta directamente por el Fab B38 (PDB 7BZ5)',
          deliversTo: '[[Neutralización estérica|real-imm-rbd-block]] que impide por completo el acoplamiento del virus al receptor humano ACE2',
          loop: 'Las mutaciones puntuales víricas en la cresta del RBD pueden debilitar anticuerpos previos, impulsando vacunas actualizadas y maduración de afinidad'
        },
        scientific:
          'Dominio de unión al receptor (RBD, residuos 319–541, ~25 kDa) de la espícula de [[SARS-CoV-2|real-coronavirus]] cristalizado con el Fab humano neutralizante B38 de [[IgG|real-imm-igg]] (PDB 7BZ5). El motivo RBM (residuos 438–506) asciende para unirse a ACE2; el Fab B38 cubre 18 de los 21 residuos de contacto con ACE2 sobre ~860 Å² mediante [[puentes de hidrógeno CDR|real-pharm-atoms]], ejecutando el [[bloqueo del RBD|real-imm-rbd-block]] que fundamenta la [[vacuna ARNm-LNP|real-pharm-mrna-lnp]].',
        from: [
          { nodeId: 'real-coronavirus', label: 'Espícula SARS-CoV-2', cargo: 'Punta RBD abierta (319–541)' },
          { nodeId: 'real-imm-igg', label: 'Fab neutralizante B38', cargo: 'Pinza CDR de alta afinidad' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Explorador Bloqueo RBD', cargo: 'Solapamiento PDB 7BZ5 / 6M0J' },
          { nodeId: 'real-pharm-mrna-lnp', label: 'Diana antigénica vacunal', cargo: 'Inmunógeno espícula prefusión' }
        ]
      }
    },

    ace2_blocked: {
      en: {
        subtitle: 'Host Epithelial ACE2 Receptor Sterically Spared (PDB 6M0J)',
        simple:
          'ACE2 is a normal blood-pressure-regulating [[protein|protein]] sitting on human respiratory and intestinal [[enterocytes|real-enterocyte]]. When [[IgG|real-imm-igg]] caps viral Spike RBDs, ACE2 stays safely untouched and free of viral docking.',
        story:
          'Angiotensin-Converting Enzyme 2 (ACE2) did not evolve to invite viruses; it sits in the apical [[plasma membrane|plasma-membrane]] of lung epithelial cells and intestinal [[enterocytes|real-enterocyte]] to cleave peptide hormones and protect vascular balance. [[SARS-CoV-2|real-coronavirus]] hijacks ACE2\'s exposed N-terminal alpha-1 helix as its entry latch (PDB 6M0J). Because neutralizing [[IgG|real-imm-igg]] Fab arms occupy that exact overlapping surface on the viral Spike RBD first ([[RBD block|real-imm-rbd-block]]), the antibody-coated virion physically cannot reach ACE2, sparing the host cell from genome injection and infection.',
        blueprint: {
          role: 'Host mucosal peptidase receptor hijacked by SARS-CoV-2 yet physically protected by humoral IgG steric exclusion',
          arrivesFrom: 'Apical [[plasma membrane|plasma-membrane]] expression on healthy human lung epithelia and gut [[enterocytes|real-enterocyte]]',
          inside: 'Zinc-peptidase ectodomain (PDB 6M0J) whose N-terminal alpha-1 helix is sterically shielded from IgG-capped Spike RBDs',
          deliversTo: 'Uninfected [[human epithelial cell|real-cell]] maintaining normal blood-pressure peptide regulation without viral fusion',
          loop: 'Blocking attachment at ACE2 stops infection before a single viral RNA copy ever reaches host 80S ribosomes'
        },
        scientific:
          'Human Angiotensin-Converting Enzyme 2 (ACE2; ~805 aa type-I transmembrane zinc metallopeptidase expressed on airway epithelia and [[enterocytes|real-enterocyte]]; RBD-bound reference structure PDB 6M0J). Under unneutralized exposure, [[SARS-CoV-2|real-coronavirus]] Spike RBD binds ACE2\'s N-terminal peptidase helix with ~15 nM affinity. Competitive Fab occupation (PDB 7BZ5, [[RBD block|real-imm-rbd-block]]) sterically excludes ACE2 binding across >80% of shared contact residues, preserving the intact host [[plasma membrane|plasma-membrane]].',
        from: [
          { nodeId: 'real-enterocyte', label: 'Host Mucosal Epithelium', cargo: 'Apical membrane ACE2' },
          { nodeId: 'plasma-membrane', label: 'Unbreached Host Bilayer', cargo: 'Protected from fusion' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Steric ACE2 Exclusion', cargo: 'PDB 6M0J contact blocked' },
          { nodeId: 'real-cell', label: 'Spared Human Cell', cargo: 'Zero viral RNA entry' }
        ]
      },
      es: {
        subtitle: 'Receptor epitelial humano ACE2 protegido (PDB 6M0J)',
        simple:
          'ACE2 es una [[proteína|protein]] humana normal reguladora de la presión arterial en células respiratorias y [[enterocitos|real-enterocyte]]. Cuando la [[IgG|real-imm-igg]] sella el RBD vírico, ACE2 permanece libre y a salvo.',
        story:
          'La enzima convertidora de angiotensina 2 (ACE2) no evolucionó para recibir virus: reside en la [[membrana plasmática|plasma-membrane]] apical de células pulmonares y [[enterocitos|real-enterocyte]] para escindir hormonas peptídicas y proteger el equilibrio vascular. El [[SARS-CoV-2|real-coronavirus]] secuestra la hélice α1 N-terminal de ACE2 como cerradura de entrada (PDB 6M0J). Al ocupar primero los brazos Fab de la [[IgG|real-imm-igg]] esa misma superficie del RBD ([[bloqueo RBD|real-imm-rbd-block]]), el virión queda excluido físicamente de ACE2 y la célula huésped queda libre de infección.',
        blueprint: {
          role: 'Peptidasa epitelial huésped secuestrada por SARS-CoV-2 y protegida físicamente mediante exclusión estérica por IgG humoral',
          arrivesFrom: 'Expresión en la [[membrana plasmática|plasma-membrane]] apical de epitelios pulmonares y [[enterocitos|real-enterocyte]] humanos sanos',
          inside: 'Ectodominio metalopeptidasa de zinc (PDB 6M0J) cuya hélice α1 N-terminal queda aislada de los RBD tapados por IgG',
          deliversTo: '[[Célula epitelial humana|real-cell]] no infectada que conserva su regulación peptídica normal sin fusión vírica',
          loop: 'Impedir el acoplamiento en ACE2 detiene la infección antes de que una sola copia de ARN vírico llegue a los ribosomas 80S'
        },
        scientific:
          'Enzima convertidora de angiotensina 2 humana (ACE2; metalopeptidasa transmembrana tipo I de ~805 aa en epitelio respiratorio y [[enterocitos|real-enterocyte]]; complejo de referencia PDB 6M0J). Sin anticuerpos, el RBD de [[SARS-CoV-2|real-coronavirus]] se une a la hélice α1 de ACE2 con afinidad ~15 nM. La ocupación competitiva por Fab (PDB 7BZ5, [[bloqueo RBD|real-imm-rbd-block]]) excluye estéricamente >80 % de los residuos compartidos, protegiendo la [[membrana plasmática|plasma-membrane]] huésped.',
        from: [
          { nodeId: 'real-enterocyte', label: 'Epitelio mucoso huésped', cargo: 'ACE2 en membrana apical' },
          { nodeId: 'plasma-membrane', label: 'Bicapa humana intacta', cargo: 'Protegida de la fusión' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Exclusión estérica ACE2', cargo: 'Contacto PDB 6M0J impedido' },
          { nodeId: 'real-cell', label: 'Célula humana salvada', cargo: 'Cero entrada de ARN vírico' }
        ]
      }
    },

    virion_target: {
      en: {
        subtitle: 'Neutralized SARS-CoV-2 Virion (~100 nm Enveloped Particle)',
        simple:
          'This ~100-nanometer [[SARS-CoV-2|real-coronavirus]] particle carries a positive-sense [[RNA|rna]] genome inside a lipid shell studded with Spike trimers, now coated by neutralizing [[IgG|real-imm-igg]] antibodies and blocked from infecting cells.',
        story:
          'Tiny beside a twenty-micrometer macrophage (roughly two hundred times smaller across), this enveloped [[SARS-CoV-2|real-coronavirus]] particle packs a 30-kilobase [[RNA|rna]] blueprint wrapped in nucleocapsid proteins inside a stolen host [[phospholipid|phospholipid]] envelope. Because it possesses zero ribosomes, zero metabolism, and zero peptidoglycan wall, antibiotics cannot touch it. Instead, adaptive immunity traps it directly in the extracellular fluid: Y-shaped [[IgG|real-imm-igg]] antibodies saturate its Spike RBDs to enforce [[RBD blockade|real-imm-rbd-block]] and cross-link the neutralized particle for rapid [[macrophage|real-imm-phagolysosome]] disposal.',
        blueprint: {
          role: 'Acellular ~100 nm enveloped (+)ssRNA viral target immobilized by bivalent IgG neutralization prior to cellular entry',
          arrivesFrom: 'Extracellular respiratory droplets or shedding from nearby infected epithelial cells ([[SARS-CoV-2|real-coronavirus]])',
          inside: 'Host-derived [[phospholipid|phospholipid]] envelope, ~25-40 surface Spike trimers, M/E membrane proteins, and 30 kb (+)ss[[RNA|rna]] genome',
          deliversTo: 'IgG-neutralized immune complexes cleared harmlessly by [[macrophage phagocytosis|real-imm-phagolysosome]] (or stalled intracellularly by [[Remdesivir|real-pharm-rdrp]])',
          loop: 'If any virion slips past humoral IgG into a cell, MHC-I display and CD8+ cytotoxic T-cells catch the infection inside'
        },
        scientific:
          'Enveloped betacoronavirus particle [[SARS-CoV-2|real-coronavirus]] (~90-120 nm diameter; ~30 kb (+)ss[[RNA|rna]] complexed with N protein inside a [[phospholipid|phospholipid]] bilayer displaying Spike trimers, M dimers, and E pentamers). Lacks cellular organelles and [[ribosomes|ribosome]], rendering antibacterial drugs inactive ([[pharmacology bench|real-pharmacology]]). Humoral [[IgG|real-imm-igg]] saturation mediates steric [[RBD neutralization|real-imm-rbd-block]] (PDB 7BZ5) and Fc-dependent opsonization into [[phagolysosomes|real-imm-phagolysosome]].',
        from: [
          { nodeId: 'real-coronavirus', label: 'SARS-CoV-2 Virion', cargo: '100 nm enveloped (+)ssRNA' },
          { nodeId: 'viruses', label: 'Acellular Viral Class', cargo: 'Zero ribosomes or cell wall' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Humoral Neutralization', cargo: 'Spike RBDs capped by IgG' },
          { nodeId: 'real-imm-phagolysosome', label: 'Fc-Mediated Clearance', cargo: 'Immune complex disposal' }
        ]
      },
      es: {
        subtitle: 'Virión SARS-CoV-2 neutralizado (partícula envuelta ~100 nm)',
        simple:
          'Esta partícula de [[SARS-CoV-2|real-coronavirus]] de ~100 nanómetros guarda un genoma de [[ARN|rna]] positivo en una envoltura lipídica con espículas, ahora cubierta por [[anticuerpos IgG|real-imm-igg]] que impiden la infección.',
        story:
          'Diminuta frente a un macrófago de veinte micrómetros —unas doscientas veces más pequeña—, esta partícula envuelta de [[SARS-CoV-2|real-coronavirus]] encierra un genoma de [[ARN|rna]] de 30 kilobases con nucleocápside dentro de una bicapa de [[fosfolípidos|phospholipid]] robada al huésped. Como carece de ribosomas, metabolismo y pared de peptidoglicano, los antibióticos no le afectan. En cambio, los [[anticuerpos IgG|real-imm-igg]] saturan sus RBD ejecutando el [[bloqueo RBD|real-imm-rbd-block]] y aglutinan la partícula neutralizada para que el macrófago la destruya en su [[fagolisosoma|real-imm-phagolysosome]].',
        blueprint: {
          role: 'Diana vírica acelular de ~100 nm con ARN(+) envuelto inmovilizada por neutralización bivalente con IgG antes de entrar en la célula',
          arrivesFrom: 'Gotículas respiratorias o liberación desde células epiteliales infectadas vecinas ([[SARS-CoV-2|real-coronavirus]])',
          inside: 'Envoltura de [[fosfolípidos|phospholipid]] del huésped, ~25–40 trímeros de espícula, proteínas M/E y genoma de [[ARN|rna]](+) de 30 kb',
          deliversTo: 'Complejos inmunes neutralizados eliminados en el [[fagolisosoma|real-imm-phagolysosome]] (o frenados intracelularmente por [[remdesivir|real-pharm-rdrp]])',
          loop: 'Si algún virión sortea la IgG humoral y penetra en una célula, la exhibición MHC-I y los linfocitos T CD8⁺ lo interceptan dentro'
        },
        scientific:
          'Partícula de betacoronavirus envuelto [[SARS-CoV-2|real-coronavirus]] (~90–120 nm de diámetro; [[ARN|rna]](+) de ~30 kb con proteína N en bicapa de [[fosfolípidos|phospholipid]] con trímeros S, dímeros M y pentámeros E). Sin orgánulos ni [[ribosomas|ribosome]], resulta insensible a antibióticos ([[banco farmacológico|real-pharmacology]]). La saturación por [[IgG|real-imm-igg]] impone [[bloqueo del RBD|real-imm-rbd-block]] (PDB 7BZ5) y opsonización Fc hacia [[fagolisosomas|real-imm-phagolysosome]].',
        from: [
          { nodeId: 'real-coronavirus', label: 'Virión SARS-CoV-2', cargo: 'ARN(+) envuelto de 100 nm' },
          { nodeId: 'viruses', label: 'Clase vírica acelular', cargo: 'Sin ribosomas ni pared' }
        ],
        to: [
          { nodeId: 'real-imm-rbd-block', label: 'Neutralización humoral', cargo: 'RBD cubiertos por IgG' },
          { nodeId: 'real-imm-phagolysosome', label: 'Aclaramiento mediado por Fc', cargo: 'Eliminación de inmunocomplejos' }
        ]
      }
    },

    cd8_tcell: {
      en: {
        subtitle: 'Cytotoxic CD8+ T-Lymphocyte (~8 um Cellular Assassin)',
        simple:
          'This compact ~8-micrometer CD8+ cytotoxic T-cell patrols human tissues inspecting surface MHC-I displays. Whenever it spots an infected cell hiding [[viruses|viruses]] inside, it eliminates that compromised cell cleanly.',
        story:
          'Smaller and far more mobile than a patrolling macrophage, the effector CD8+ T-lymphocyte crawls across mucosal [[enterocytes|real-enterocyte]] searching for cells already breached by [[SARS-CoV-2|real-coronavirus]] or [[HIV-1|real-hiv]]. Each T-cell bears thousands of clonally identical alpha-beta TCR complexes alongside CD8 co-receptors. The instant [[TCR-pMHC-I|real-imm-tcr-mhci]] detects a matching viral peptide on an infected cell, the lymphocyte reorients its microtubule organizing center and dense lytic granules tightly against the fifteen-nanometer immunological synapse, unleashing [[Perforin|real-imm-perforin]] and [[Granzyme B|real-imm-granzyme]] without harming untouched neighbors.',
        blueprint: {
          role: 'Adaptive cellular effector lymphocyte (~8 um) eradicating intracellular viral factories via focused synaptic cytotoxicity',
          arrivesFrom: 'Clonal expansion of naive CD8+ T-cells primed in lymph nodes by dendritic cells or [[mRNA-LNP vaccines|real-pharm-mrna-lnp]]',
          inside: 'Large euchromatic [[nucleus|nucleus]], polarized [[cytoskeleton|cytoskeleton]], surface [[TCR-CD8|real-imm-tcr-mhci]] sensors, and acidic [[Perforin|real-imm-perforin]]/[[Granzyme B|real-imm-granzyme]] granules',
          deliversTo: 'Focal synaptic exocytosis triggering clean caspase-mediated apoptosis in virus-infected [[human cells|real-cell]] only',
          loop: 'After delivering a lethal hit, the same CD8+ T-cell detaches intact and moves on to inspect and clear adjacent infected cells'
        },
        scientific:
          'Effector human CD8+ cytotoxic T-lymphocyte (CTL; ~7-9 um diameter adaptive immune specialist within [[immune defense|real-immune]]). Expresses clonotypic alpha-beta TCR/CD3 complexes and CD8 alpha-beta co-receptors scanning Class I HLA displays ([[TCR-pMHC-I|real-imm-tcr-mhci]], PDB 1AO7). Productive engagement induces Lck/ZAP-70 signaling, store-operated [[Ca2+|atom-ca]] influx, MTOC polarization along the [[cytoskeleton|cytoskeleton]], and directed secretion of [[Perforin|real-imm-perforin]] (PDB 3NSJ) and [[Granzyme B|real-imm-granzyme]] (PDB 1IAU) across a sealed ~15 nm immunological synapse.',
        from: [
          { nodeId: 'real-cell', label: 'Adaptive Lymphocyte', cargo: 'Clonally expanded 8 um CTL' },
          { nodeId: 'real-pharm-mrna-lnp', label: 'Antigen Priming Signal', cargo: 'Memory CD8+ T-cell pool' }
        ],
        to: [
          { nodeId: 'real-imm-tcr-mhci', label: 'TCR-pMHC-I Synapse', cargo: '15 nm target verification' },
          { nodeId: 'real-imm-perforin', label: 'Lytic Granule Release', cargo: 'Perforin + Granzyme B strike' }
        ]
      },
      es: {
        subtitle: 'Linfocito T citotóxico CD8⁺ (~8 µm, efector celular)',
        simple:
          'Este compacto linfocito T citotóxico CD8⁺ de ~8 micrómetros patrulla los tejidos inspeccionando los complejos MHC-I superficiales. Al hallar una célula infectada que oculta [[virus|viruses]], la elimina limpiamente.',
        story:
          'Más pequeño y ágil que un macrófago patrullero, el linfocito T efector CD8⁺ recorre [[enterocitos|real-enterocyte]] mucosos buscando células ya invadidas por [[SARS-CoV-2|real-coronavirus]] o [[VIH-1|real-hiv]]. Cada linfocito porta miles de receptores TCR αβ clonales junto a correceptores CD8. En el instante en que [[TCR–pMHC-I|real-imm-tcr-mhci]] detecta un péptido vírico coincidente, reorienta su centro organizador de microtúbulos y gránulos líticos contra la sinapsis inmunitaria de quince nanómetros, descargando [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]] sin herir a las células vecinas sanas.',
        blueprint: {
          role: 'Linfocito efector celular adaptativo (~8 µm) que erradica fábricas víricas intracelulares mediante citotoxicidad sináptica focal',
          arrivesFrom: 'Expansión clonal de linfocitos T CD8⁺ activados en ganglios por células dendríticas o [[vacunas ARNm-LNP|real-pharm-mrna-lnp]]',
          inside: 'Gran [[núcleo|nucleus]] activo, [[citoesqueleto|cytoskeleton]] polarizado, sensores [[TCR–CD8|real-imm-tcr-mhci]] y gránulos ácidos de [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]]',
          deliversTo: 'Exocitosis sináptica focal que induce apoptosis ordenada por caspasas únicamente en [[células humanas|real-cell]] infectadas',
          loop: 'Tras asestar el golpe letal, el mismo linfocito T CD8⁺ se separa intacto y continúa patrullando en busca de otras células infectadas'
        },
        scientific:
          'Linfocito T citotóxico humano efector CD8⁺ (CTL; ~7–9 µm, especialista celular de la [[defensa inmunitaria|real-immune]]). Expresa complejos clonotípicos TCR αβ/CD3 y correceptores CD8 que inspeccionan moléculas HLA clase I ([[TCR–pMHC-I|real-imm-tcr-mhci]], PDB 1AO7). El reconocimiento activa Lck/ZAP-70, influjo de [[Ca²⁺|atom-ca]], polarización del MTOC vía [[citoesqueleto|cytoskeleton]] y secreción dirigida de [[perforina|real-imm-perforin]] (PDB 3NSJ) y [[granzima B|real-imm-granzyme]] (PDB 1IAU) en una sinapsis sellada de ~15 nm.',
        from: [
          { nodeId: 'real-cell', label: 'Linfocito adaptativo', cargo: 'CTL clonal de 8 µm' },
          { nodeId: 'real-pharm-mrna-lnp', label: 'Primado antigénico', cargo: 'Reserva de memoria CD8⁺' }
        ],
        to: [
          { nodeId: 'real-imm-tcr-mhci', label: 'Sinapsis TCR–pMHC-I', cargo: 'Verificación diana a 15 nm' },
          { nodeId: 'real-imm-perforin', label: 'Descarga de gránulos líticos', cargo: 'Golpe Perforina + Granzima B' }
        ]
      }
    },

    tcr_mhci: {
      en: {
        subtitle: 'TCR-pMHC-I Ternary Recognition Synapse (PDB 1AO7)',
        simple:
          'Across a tight 15-nanometer gap, the CD8+ T-cell receptor (TCR) locks directly onto the infected cell\'s [[MHC-I|real-imm-tcr-mhci]] platform cradling a foreign viral peptide, confirming target identity before lytic release.',
        story:
          'Inside the fifteen-nanometer immunological synapse, lethal force is never unleashed without a strict molecular handshake. The target epithelial cell holds a nine-amino-acid viral fragment inside the closed alpha1-alpha2 groove of Class I HLA-A2 stabilized by beta2-microglobulin. Docked diagonally overhead, the CD8+ T-cell\'s alpha-beta [[TCR|real-imm-tcr-mhci]] (PDB 1AO7) uses its CDR1/CDR2 loops to verify self MHC helices while its hypervariable CDR3 loops read the exposed foreign peptide side chains. Once sustained binding holds long enough, CD8-tethered Lck kinase sparks the [[Ca2+|atom-ca]] surge that fires [[Perforin|real-imm-perforin]] and [[Granzyme B|real-imm-granzyme]].',
        blueprint: {
          role: 'Molecular verification bridge (~15 nm intermembrane span) gating cytotoxic granule release strictly to infected cells',
          arrivesFrom: 'Host surface Class I HLA-A2 presenting endogenous viral 9-mer peptides and patrolling CD8+ alpha-beta TCR/CD3 complexes',
          inside: 'Diagonal TCR-pMHC-I ternary complex (PDB 1AO7) inspecting both self HLA helices and non-self viral peptide side chains',
          deliversTo: 'CD3 ITAM phosphorylation, [[Ca2+|atom-ca]] signaling cascade, and focal release of [[Perforin|real-imm-perforin]] + [[Granzyme B|real-imm-granzyme]]',
          loop: 'Kinetic proofreading demands sustained binding dwell time so weak self-peptide contacts detach safely without triggering autoimmunity'
        },
        scientific:
          'Human A6 alpha-beta T-cell receptor docked onto a 9-mer viral peptide bound by Class I HLA-A2 and beta2-microglobulin (crystal structure PDB 1AO7; [[TCR-pMHC-I node|real-imm-tcr-mhci]]). Bridges the ~15 nm immunological synapse between CD8+ T-cell and infected [[human cell|real-cell]] [[plasma membranes|plasma-membrane]]. Conserved CDR1/2 contacts orient the TCR diagonally across MHC alpha1/alpha2 helices while hypervariable CDR3 loops test central peptide residues (P4-P8) via [[atomic H-bonds|real-pharm-atoms]], gating [[Perforin|real-imm-perforin]] secretion.',
        from: [
          { nodeId: 'real-cd-ribo80', label: 'Cytosolic Viral Translation', cargo: 'Proteasome-cut 9-mer peptide' },
          { nodeId: 'plasma-membrane', label: '15 nm Immune Synapse', cargo: 'Close cell-cell membrane dock' }
        ],
        to: [
          { nodeId: 'real-imm-tcr-mhci', label: 'TCR-pMHC-I Explorer', cargo: 'PDB 1AO7 ternary complex' },
          { nodeId: 'real-imm-perforin', label: 'Synaptic Pore Trigger', cargo: 'Ca2+-gated granule release' }
        ]
      },
      es: {
        subtitle: 'Sinapsis de reconocimiento TCR–pMHC-I (PDB 1AO7)',
        simple:
          'A través de una hendidura de 15 nanómetros, el receptor TCR del linfocito CD8⁺ se acopla sobre la plataforma [[MHC-I|real-imm-tcr-mhci]] que exhibe un péptido vírico extraño, confirmando el blanco antes de liberar toxinas.',
        story:
          'Dentro de la sinapsis inmunitaria de quince nanómetros, la fuerza citotóxica nunca se desata sin una verificación molecular estricta. La célula infectada sujeta un nonapéptido vírico en el surco cerrado α1–α2 de HLA-A2 clase I con β₂-microglobulina. Acoplado en diagonal desde arriba, el [[TCR αβ|real-imm-tcr-mhci]] del linfocito CD8⁺ (PDB 1AO7) usa sus bucles CDR1/CDR2 para reconocer el MHC propio mientras sus bucles hipervariables CDR3 leen las cadenas laterales del péptido extraño. Al confirmarse el ajuste, la cinasa Lck asociada a CD8 dispara la oleada de [[Ca²⁺|atom-ca]] que libera [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]].',
        blueprint: {
          role: 'Puente de verificación molecular (~15 nm entre membranas) que restringe la descarga citotóxica únicamente a células infectadas',
          arrivesFrom: 'HLA-A2 clase I superficial presentando nonapéptidos víricos endógenos y complejos TCR αβ/CD3 de linfocitos CD8⁺',
          inside: 'Complejo ternario diagonal TCR–pMHC-I (PDB 1AO7) inspeccionando tanto hélices HLA propias como residuos víricos extraños',
          deliversTo: 'Fosforilación de motivos ITAM en CD3, cascada de [[Ca²⁺|atom-ca]] y liberación focal de [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]]',
          loop: 'La corrección cinética exige permanencia sostenida para que contactos débiles con péptidos propios se suelten sin autoinmunidad'
        },
        scientific:
          'Receptor de linfocito T humano A6 αβ unido a un nonapéptido vírico en HLA-A2 clase I con β₂-microglobulina (cristalografía PDB 1AO7; [[nodo TCR–pMHC-I|real-imm-tcr-mhci]]). Abarca la sinapsis inmunitaria de ~15 nm entre las [[membranas plasmáticas|plasma-membrane]] del CTL y la [[célula humana|real-cell]] infectada. Los bucles CDR1/2 fijan la orientación diagonal sobre α1/α2 mientras CDR3 verifica los residuos P4–P8 mediante [[enlaces H atómicos|real-pharm-atoms]], habilitando la descarga de [[perforina|real-imm-perforin]].',
        from: [
          { nodeId: 'real-cd-ribo80', label: 'Traducción vírica citosólica', cargo: 'Nonapéptido del proteasoma' },
          { nodeId: 'plasma-membrane', label: 'Sinapsis inmunitaria 15 nm', cargo: 'Contacto estrecho de membranas' }
        ],
        to: [
          { nodeId: 'real-imm-tcr-mhci', label: 'Explorador TCR–pMHC-I', cargo: 'Complejo ternario PDB 1AO7' },
          { nodeId: 'real-imm-perforin', label: 'Disparo de poro sináptico', cargo: 'Exocitosis dependiente de Ca²⁺' }
        ]
      }
    },

    viral_peptide: {
      en: {
        subtitle: '9-Mer Endogenous Viral Peptide in MHC-I Groove',
        simple:
          'This short nine-[[amino-acid|amino-acid]] viral peptide is a sample cut from viral [[proteins|protein]] made inside the infected cell. Held inside the MHC-I groove, it exposes the hidden intracellular infection to patrolling [[CD8+ T-cells|real-imm-tcr-mhci]].',
        story:
          'Whenever a [[virus|viruses]] hijacks cytosolic [[80S ribosomes|real-cd-ribo80]] to manufacture viral [[polypeptides|polypeptide]], cellular immunoproteasomes continuously sample and cleave a fraction of those newly translated chains into compact eight-to-ten-residue fragments. TAP transporters pump those peptides from the cytosol into the endoplasmic reticulum, where chaperone tapasin snaps matching nine-mers into nascent Class I MHC grooves via anchor residues at positions P2 and P9. Exported to the surface, the central arch (P4-P8) bulges upward directly into the [[TCR-pMHC-I|real-imm-tcr-mhci]] recognition pocket, betraying the hidden invader.',
        blueprint: {
          role: 'Compact 8-10 aa endogenous antigenic barcode reporting real-time cytosolic protein synthesis on the outer cell surface',
          arrivesFrom: 'Cytosolic viral [[polypeptides|polypeptide]] translated on host [[80S ribosomes|real-cd-ribo80]] and sliced by the proteasome',
          inside: 'Extended 9-mer [[amino-acid|amino-acid]] chain anchored at N/C termini inside the closed HLA-A2 cleft (PDB 1AO7) with bulging central TCR contacts',
          deliversTo: 'Direct non-self recognition by CD8+ [[TCR-pMHC-I|real-imm-tcr-mhci]] triggering [[Perforin|real-imm-perforin]] and [[Granzyme B|real-imm-granzyme]] killing',
          loop: 'Because healthy cells display only self peptides, central thymic selection ensures T-cells ignore normal tissue and attack only foreign peptides'
        },
        scientific:
          'Endogenous 9-residue viral oligopeptide (8-10 aa length constrained by closed hydrogen-bonded termini in the HLA-A2 alpha1-alpha2 cleft, PDB 1AO7). Generated by proteasome/immunoproteasome cleavage of cytosolic viral [[polypeptides|polypeptide]] (or transient vaccine-encoded Spike from [[mRNA-LNP|real-pharm-mrna-lnp]] on [[80S ribosomes|real-cd-ribo80]]), translocated by TAP1/TAP2 ATPases, and bound via P2/P9 anchor side chains so bulging P4-P8 residues engage [[TCR-pMHC-I|real-imm-tcr-mhci]] CDR3 loops.',
        from: [
          { nodeId: 'polypeptide', label: 'Viral Polypeptide Sample', cargo: 'Proteasome-cleaved 9-mer' },
          { nodeId: 'amino-acid', label: 'Anchor Side Chains', cargo: 'P2/P9 fit + P4-P8 arch' }
        ],
        to: [
          { nodeId: 'real-imm-tcr-mhci', label: 'TCR CDR3 Readout', cargo: 'Non-self peptide confirmation' },
          { nodeId: 'real-imm-granzyme', label: 'Apoptosis Activation', cargo: 'Clears viral factory cell' }
        ]
      },
      es: {
        subtitle: 'Nonapéptido vírico endógeno en el surco MHC-I',
        simple:
          'Este breve péptido vírico de nueve [[aminoácidos|amino-acid]] es una muestra cortada de las [[proteínas|protein]] fabricadas por el virus dentro de la célula. Alojado en el surco MHC-I, delata la infección oculta ante los [[linfocitos T CD8⁺|real-imm-tcr-mhci]].',
        story:
          'Siempre que un [[virus|viruses]] secuestra [[ribosomas 80S|real-cd-ribo80]] citosólicos para producir [[polipéptidos|polypeptide]] víricos, los inmunoproteasomas muestrean y cortan una fracción de esas cadenas en fragmentos compactos de ocho a diez residuos. Los transportadores TAP bombean los péptidos al retículo endoplasmático, donde la tapasina encaja los nonapéptidos compatibles en surcos MHC clase I mediante residuos ancla en P2 y P9. Expuesto en la membrana, el arco central (P4–P8) sobresale hacia los bucles CDR3 del complejo [[TCR–pMHC-I|real-imm-tcr-mhci]] revelando al invasor.',
        blueprint: {
          role: 'Código antigénico endógeno compacto de 8–10 aa que informa en la superficie sobre la síntesis proteica interna en tiempo real',
          arrivesFrom: '[[Polipéptidos|polypeptide]] víricos traducidos en [[ribosomas 80S|real-cd-ribo80]] huéspedes y recortados por el proteasoma',
          inside: 'Cadena de 9 [[aminoácidos|amino-acid]] anclada en los extremos cerrados de HLA-A2 (PDB 1AO7) con arco central expuesto al TCR',
          deliversTo: 'Reconocimiento directo por [[TCR–pMHC-I|real-imm-tcr-mhci]] CD8⁺ que activa la descarga de [[perforina|real-imm-perforin]] y [[granzima B|real-imm-granzyme]]',
          loop: 'Como las células sanas solo muestran péptidos propios, la selección tímica garantiza que los linfocitos T ignoren tejidos sanos'
        },
        scientific:
          'Oligopéptido vírico endógeno de 9 residuos (longitud de 8–10 aa impuesta por los extremos cerrados con enlaces H de la hendidura α1–α2 de HLA-A2, PDB 1AO7). Producido por el proteasoma a partir de [[polipéptidos|polypeptide]] víricos (o espícula transitoria de [[ARNm-LNP|real-pharm-mrna-lnp]] en [[ribosomas 80S|real-cd-ribo80]]), bombeado por TAP1/TAP2 y anclado en P2/P9 para exponer P4–P8 al complejo [[TCR–pMHC-I|real-imm-tcr-mhci]].',
        from: [
          { nodeId: 'polypeptide', label: 'Muestra polipeptídica vírica', cargo: 'Nonapéptido del proteasoma' },
          { nodeId: 'amino-acid', label: 'Cadenas laterales ancla', cargo: 'Ajuste P2/P9 y arco P4–P8' }
        ],
        to: [
          { nodeId: 'real-imm-tcr-mhci', label: 'Lectura CDR3 del TCR', cargo: 'Confirmación de péptido extraño' },
          { nodeId: 'real-imm-granzyme', label: 'Activación apoptótica', cargo: 'Elimina la fábrica vírica' }
        ]
      }
    },

    perforin_pore: {
      en: {
        subtitle: 'Perforin Transmembrane Ring Pore (~18 nm, PDB 3NSJ)',
        simple:
          'Activated by synaptic [[calcium|atom-ca]], roughly twenty [[Perforin|real-imm-perforin]] proteins assemble into a giant 18-nanometer hollow barrel straight through the infected cell\'s [[plasma membrane|plasma-membrane]] so [[Granzyme B|real-imm-granzyme]] can enter.',
        story:
          'Discharged from polarized CD8+ T-cell granules strictly inside the sealed fifteen-nanometer immunological synapse, soluble monomeric [[Perforin|real-imm-perforin]] binds extracellular [[Ca2+|atom-ca]] through its C2 domain and docks onto the outer leaflet of the virus-infected cell. Rapid lateral oligomerization gathers nineteen to twenty-four monomers into a wide pre-pore collar that punches dual transmembrane beta-hairpins clean across the [[phospholipid|phospholipid]] bilayer. Opening an ~18-to-20-nanometer aqueous tunnel wide enough for folded proteins, the ring channels [[Granzyme B|real-imm-granzyme]] proteases straight into the infected cytosol before membrane repair closes it.',
        blueprint: {
          role: 'Ca2+-activated cytolytic transmembrane beta-barrel (~18-20 nm bore) creating an entry portal for Granzyme B delivery',
          arrivesFrom: 'Exocytosed monomeric [[Perforin|real-imm-perforin]] (~67 kDa) from [[TCR-pMHC-I|real-imm-tcr-mhci]]-activated CD8+ granules plus synaptic [[Ca2+|atom-ca]]',
          inside: '19-24 oligomerized MACPF subunits (PDB 3NSJ) inserting ~80 amphipathic beta-strands through the infected [[plasma membrane|plasma-membrane]]',
          deliversTo: 'Direct cytosolic entry conduit for ~32 kDa [[Granzyme B|real-imm-granzyme]] serine proteases triggering orderly apoptosis',
          loop: 'The T-cell protects its own membrane from Perforin using tightly ordered lipid rafts and negatively charged phosphatidylserine repulsion'
        },
        scientific:
          'Oligomeric cytolytic [[Perforin-1|real-imm-perforin]] transmembrane pore (monomer crystal structure PDB 3NSJ; ~67 kDa MACPF/C2 glycoprotein assembling into 19-24-mer rings with an ~18-20 nm hydrophilic lumen across the target [[phospholipid|phospholipid]] bilayer). Triggered by ~1.2 mM synaptic [[Ca2+|atom-ca]] after [[TCR-pMHC-I|real-imm-tcr-mhci]] exocytosis, each subunit unfolds two helical bundles into membrane-spanning beta-hairpins, creating transient channels wide enough for ~5 nm [[Granzyme B|real-imm-granzyme]] passage.',
        from: [
          { nodeId: 'atom-ca', label: 'Synaptic Ca2+ Trigger', cargo: 'C2-domain lipid docking' },
          { nodeId: 'real-imm-tcr-mhci', label: 'TCR Synapse Signal', cargo: 'Lytic granule exocytosis' }
        ],
        to: [
          { nodeId: 'real-imm-perforin', label: 'Perforin Explorer Node', cargo: 'PDB 3NSJ 18 nm ring pore' },
          { nodeId: 'real-imm-granzyme', label: 'Granzyme B Conduit', cargo: 'Cytosolic protease entry' }
        ]
      },
      es: {
        subtitle: 'Poro anular transmembrana de perforina (~18 nm, PDB 3NSJ)',
        simple:
          'Activadas por el [[calcio|atom-ca]] sináptico, unas veinte proteínas de [[perforina|real-imm-perforin]] forman un barril hueco de 18 nanómetros en la [[membrana plasmática|plasma-membrane]] de la célula infectada para dar paso a la [[granzima B|real-imm-granzyme]].',
        story:
          'Descargada desde los gránulos polarizados del linfocito T CD8⁺ estrictamente dentro de la sinapsis sellada de quince nanómetros, la [[perforina|real-imm-perforin]] monomérica liga [[Ca²⁺|atom-ca]] extracelular con su dominio C2 y se ancla a la célula infectada. La oligomerización lateral reúne de diecinueve a veinticuatro subunidades en un anillo que perfora la bicapa de [[fosfolípidos|phospholipid]] con horquillas β transmembrana. Al abrir un túnel acuoso de ~18 a 20 nanómetros —suficiente para proteínas plegadas—, introduce directamente proteasas [[granzima B|real-imm-granzyme]] al citosol infectado.',
        blueprint: {
          role: 'Barril β transmembrana citolítico activado por Ca²⁺ (~18–20 nm de luz) que abre un portal de entrada para la granzima B',
          arrivesFrom: '[[Perforina|real-imm-perforin]] monomérica (~67 kDa) exocitada tras la señal [[TCR–pMHC-I|real-imm-tcr-mhci]] más [[Ca²⁺|atom-ca]] sináptico',
          inside: '19–24 subunidades MACPF oligomerizadas (PDB 3NSJ) insertando ~80 hebras β anfipáticas en la [[membrana plasmática|plasma-membrane]] infectada',
          deliversTo: 'Conducto directo hacia el citosol para las serina proteasas [[granzima B|real-imm-granzyme]] (~32 kDa) inductoras de apoptosis',
          loop: 'El linfocito T protege su propia membrana de la perforina mediante balsas lipídicas ordenadas y repulsión electrostática'
        },
        scientific:
          'Poro transmembrana oligomérico de [[Perforina-1|real-imm-perforin]] (cristalografía monomérica PDB 3NSJ; glucoproteína MACPF/C2 de ~67 kDa que forma anillos de 19–24 subunidades con luz hidrofílica de ~18–20 nm en la bicapa de [[fosfolípidos|phospholipid]]). Activada por ~1,2 mM de [[Ca²⁺|atom-ca]] tras la exocitosis por [[TCR–pMHC-I|real-imm-tcr-mhci]], cada monómero despliega dos horquillas β transmembrana permitiendo el ingreso de [[granzima B|real-imm-granzyme]].',
        from: [
          { nodeId: 'atom-ca', label: 'Activador Ca²⁺ sináptico', cargo: 'Anclaje lipídico dominio C2' },
          { nodeId: 'real-imm-tcr-mhci', label: 'Señal sináptica TCR', cargo: 'Exocitosis de gránulos líticos' }
        ],
        to: [
          { nodeId: 'real-imm-perforin', label: 'Nodo Explorador Perforina', cargo: 'Poro anular 18 nm PDB 3NSJ' },
          { nodeId: 'real-imm-granzyme', label: 'Conducto de Granzima B', cargo: 'Entrada proteásica citosólica' }
        ]
      }
    },

    granzyme_b: {
      en: {
        subtitle: 'Granzyme B Cytotoxic Serine Protease (PDB 1IAU)',
        simple:
          'Pouring through open [[Perforin pores|real-imm-perforin]], [[Granzyme B|real-imm-granzyme]] slices specific aspartate sites on host caspases and Bid proteins to trigger clean, non-inflammatory self-destruction of the virus-infected cell.',
        story:
          'Co-packaged with [[Perforin|real-imm-perforin]] inside acidic CD8+ T-cell granules, [[Granzyme B|real-imm-granzyme]] enters the virus-infected cell\'s cytosol through the newly opened eighteen-nanometer pore and flips the programmed cell-death switch with surgical precision. Its positively charged Arg226 active pocket recognizes aspartate side chains and cleaves two key intracellular amplifiers: executioner Procaspase-3 and the pro-apoptotic sensor Bid. Truncated tBid permeabilizes target [[mitochondria|mitochondrion]], while active caspase-3 shreds viral scaffolds and condenses nuclear [[DNA|dna]] into neat apoptotic bodies collected quietly by [[macrophages|real-imm-phagolysosome]].',
        blueprint: {
          role: 'Aspartate-specific serine protease (~32 kDa) initiating clean caspase-mediated apoptosis inside virus-infected host cells',
          arrivesFrom: 'Co-exocytosed CD8+ lytic granules diffusing directly through ~18 nm [[Perforin|real-imm-perforin]] membrane pores',
          inside: 'Chymotrypsin-fold catalytic triad His57-Asp102-Ser195 + Arg226 S1 pocket (PDB 1IAU) cleaving Procaspase-3 and cytosolic Bid',
          deliversTo: '[[Mitochondrial|mitochondrion]] cytochrome c release, ordered nuclear [[DNA|dna]] cleavage, halted viral output, and silent phagocytic cleanup',
          loop: 'Orderly apoptosis keeps viral genomes sealed inside intact membrane blebs rather than spilling live virions via necrotic lysis'
        },
        scientific:
          'Human [[Granzyme B|real-imm-granzyme]] cytotoxic serine protease (crystal structure PDB 1IAU; ~32 kDa trypsin-family fold with His57-Asp102-Ser195 triad and S1 Arg226 specificity conferring Asp-P1 proteolysis identical to initiator caspases). Entering via [[Perforin|real-imm-perforin]] (PDB 3NSJ) pores, Granzyme B directly matures Procaspase-3/7 and cleaves Bid to tBid, driving Bax/Bak [[mitochondrial|mitochondrion]] permeabilization and CAD-mediated [[DNA|dna]] fragmentation to terminate intracellular viral replication.',
        from: [
          { nodeId: 'real-imm-perforin', label: 'Perforin Pore Entry', cargo: '18 nm cytosolic delivery' },
          { nodeId: 'protein', label: 'Serine Protease Fold', cargo: 'His57-Asp102-Ser195 triad' }
        ],
        to: [
          { nodeId: 'real-imm-granzyme', label: 'Granzyme B Explorer', cargo: 'PDB 1IAU caspase cascade' },
          { nodeId: 'mitochondrion', label: 'Bid -> Mito Apoptosis', cargo: 'Clean non-necrotic shutdown' }
        ]
      },
      es: {
        subtitle: 'Serina proteasa citotóxica Granzima B (PDB 1IAU)',
        simple:
          'Al entrar por los [[poros de perforina|real-imm-perforin]], la [[granzima B|real-imm-granzyme]] corta residuos aspartato precisos en caspasas y proteína Bid para activar la autodestrucción ordenada y sin inflamación de la célula infectada.',
        story:
          'Empaquetada junto con la [[perforina|real-imm-perforin]] en los gránulos ácidos del linfocito T CD8⁺, la [[granzima B|real-imm-granzyme]] penetra en el citosol infectado a través del poro de dieciocho nanómetros y acciona el programa apoptótico con precisión quirúrgica. Su bolsillo activo con Arg226 positiva reconoce residuos aspartato y escinde dos amplificadores clave: la procaspasa-3 ejecutora y el sensor Bid. El fragmento tBid permeabiliza las [[mitocondrias|mitochondrion]], mientras la caspasa-3 activa fragmenta el [[ADN|dna]] nuclear en cuerpos apoptóticos ordenados recogidos en silencio por [[macrófagos|real-imm-phagolysosome]].',
        blueprint: {
          role: 'Serina proteasa específica de aspartato (~32 kDa) que inicia la apoptosis limpia por caspasas dentro de células infectadas',
          arrivesFrom: 'Gránulos líticos CD8⁺ co-exocitados que difunden directamente por los poros de [[perforina|real-imm-perforin]] (~18 nm)',
          inside: 'Tríada catalítica His57–Asp102–Ser195 tipo quimotripsina con bolsillo S1 Arg226 (PDB 1IAU) cortando procaspasa-3 y Bid citosólico',
          deliversTo: 'Liberación [[mitocondrial|mitochondrion]] de citocromo c, fragmentación ordenada del [[ADN|dna]], fin vírico y recogida fagocítica limpia',
          loop: 'La apoptosis ordenada mantiene los genomas víricos sellados en vesículas intactas en lugar de dispersar virus vivos por necrosis'
        },
        scientific:
          'Serina proteasa citotóxica humana [[Granzima B|real-imm-granzyme]] (cristalografía PDB 1IAU; ~32 kDa de la familia tripsina con tríada His57–Asp102–Ser195 y Arg226 en S1 imponiendo corte tras P1-Asp como las caspasas iniciadoras). Introducida por poros de [[perforina|real-imm-perforin]] (PDB 3NSJ), activa procaspasa-3/7 y convierte Bid en tBid, induciendo permeabilización [[mitocondrial|mitochondrion]] Bax/Bak y fragmentación del [[ADN|dna]] por CAD.',
        from: [
          { nodeId: 'real-imm-perforin', label: 'Entrada por poro perforina', cargo: 'Acceso citosólico de 18 nm' },
          { nodeId: 'protein', label: 'Pliegue serina proteasa', cargo: 'Tríada His57–Asp102–Ser195' }
        ],
        to: [
          { nodeId: 'real-imm-granzyme', label: 'Explorador Granzima B', cargo: 'Cascada caspasa PDB 1IAU' },
          { nodeId: 'mitochondrion', label: 'Apoptosis Bid → Mitocondria', cargo: 'Cierre limpio no necrótico' }
        ]
      }
    },

    immune_atoms: {
      en: {
        subtitle: 'Atomic Epitope H-Bonds & IgG Disulfide Hinge (0.1-0.5 nm)',
        simple:
          'This 0.1-to-0.5-nanometer atomic optical inset zooms inside antibody recognition, revealing directional [[nitrogen|atom-n]]-[[hydrogen|atom-h]]-[[oxygen|atom-o]] hydrogen bonds at the CDR3-epitope interface beside a covalent [[sulfur|atom-s]]-[[sulfur|atom-s]] IgG hinge bridge.',
        story:
          'Every high-stakes decision across the thirty-micrometer immune battleground boils down to exact sub-nanometer atomic geometry. Inside the contact seam between an [[IgG|real-imm-igg]] Fab CDR3 loop and the [[SARS-CoV-2 Spike RBD|real-imm-rbd-block]] (or a [[TCR|real-imm-tcr-mhci]] reading a viral 9-mer), dozens of precisely spaced ~0.29-nanometer hydrogen bonds and electrostatic salt bridges between [[N|atom-n]], [[H|atom-h]], and [[O|atom-o]] atoms add up to unshakable nanomolar specificity, while a single viral mutation shifting one side chain can break the fit. Beside it, covalent ~0.205-nanometer Cys-[[S|atom-s]]-S-Cys disulfide bonds hold the antibody\'s twin arms firmly together.',
        blueprint: {
          role: '0.1-0.5 nm atomic proof linking non-covalent epitope specificity and covalent antibody hinge stability to cellular immunity',
          arrivesFrom: 'Elemental [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[S|atom-s]] side-chain atoms inside [[IgG|real-imm-igg]] and [[TCR|real-imm-tcr-mhci]] pockets',
          inside: 'Directional ~0.28-0.31 nm CDR3-epitope N-H...O hydrogen-bond lattice alongside ~0.205 nm covalent Cys-S-S-Cys IgG hinge bridge',
          deliversTo: 'High-affinity [[RBD neutralization|real-imm-rbd-block]], self vs non-self [[TCR discrimination|real-imm-tcr-mhci]], and direct bridge to [[atomic pharmacology|real-pharm-atoms]]',
          loop: 'Individually weak ~4-20 kJ/mol H-bonds sum across 15-25 exact atomic contacts to create ultra-selective recognition without permanent covalent cross-linking'
        },
        scientific:
          'Sub-nanometer (0.1-0.5 nm) CPK atomic geometry governing adaptive immune recognition ([[atomic interface node|real-pharm-atoms]]): (1) directional ~0.28-0.31 nm N-H...O and O-H...O hydrogen bonds plus salt bridges across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], and [[O|atom-o]] between [[IgG Fab CDR3|real-imm-rbd-block]] (PDB 7BZ5) or [[TCR CDR3|real-imm-tcr-mhci]] (PDB 1AO7) and cognate epitopes; and (2) covalent ~0.205 nm [[S|atom-s]]-S disulfide cross-links bridging cysteine residues in the flexible [[IgG|real-imm-igg]] (PDB 1IGT) hinge.',
        from: [
          { nodeId: 'atom-n', label: 'Polar N/O/H H-Bonds', cargo: '0.29 nm CDR3-epitope grip' },
          { nodeId: 'atom-s', label: 'Cysteine Sulfur Bridge', cargo: '0.205 nm IgG S-S hinge' }
        ],
        to: [
          { nodeId: 'real-pharm-atoms', label: 'Atomic Chemistry Node', cargo: 'Immune & drug bond physics' },
          { nodeId: 'scale-explorer', label: '0.1 nm Scale Continuity', cargo: 'Atoms to 30 um tissue defense' }
        ]
      },
      es: {
        subtitle: 'Enlaces H atómicos de epítopo y bisagra disulfuro IgG (0,1–0,5 nm)',
        simple:
          'Esta lente atómica de 0,1 a 0,5 nanómetros amplía el reconocimiento inmunitario, mostrando puentes de hidrógeno [[nitrógeno|atom-n]]–[[hidrógeno|atom-h]]–[[oxígeno|atom-o]] en la interfaz CDR3–epítopo junto a un puente disulfuro [[azufre|atom-s]]–[[azufre|atom-s]] de la IgG.',
        story:
          'Cada decisión crítica en el campo de batalla inmunitario de treinta micrómetros depende de geometría atómica subnanométrica exacta. En la costura entre el bucle CDR3 de un Fab de [[IgG|real-imm-igg]] y el [[RBD de SARS-CoV-2|real-imm-rbd-block]] (o de un [[TCR|real-imm-tcr-mhci]] leyendo un nonapéptido vírico), decenas de puentes de hidrógeno de ~0,29 nanómetros entre átomos de [[N|atom-n]], [[H|atom-h]] y [[O|atom-o]] se suman logrando especificidad nanomolar. Junto a ellos, enlaces covalentes Cys–[[S|atom-s]]–S–Cys de ~0,205 nanómetros mantienen unidos los brazos del anticuerpo.',
        blueprint: {
          role: 'Demostración atómica (0,1–0,5 nm) que vincula la especificidad no covalente del epítopo y la estabilidad covalente de la bisagra IgG',
          arrivesFrom: 'Átomos elementales [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[S|atom-s]] en bolsillos de [[IgG|real-imm-igg]] y [[TCR|real-imm-tcr-mhci]]',
          inside: 'Red direccional de puentes H N–H···O CDR3–epítopo (~0,28–0,31 nm) junto al puente covalente Cys–S–S–Cys (~0,205 nm) de la bisagra IgG',
          deliversTo: '[[Neutralización RBD|real-imm-rbd-block]] de alta afinidad, discriminación [[TCR|real-imm-tcr-mhci]] y enlace directo con la [[química farmacológica|real-pharm-atoms]]',
          loop: 'Puentes H individualmente débiles (~4–20 kJ/mol) se suman en 15–25 contactos exactos generando reconocimiento ultraselectivo reversible'
        },
        scientific:
          'Geometría atómica CPK subnanométrica (0,1–0,5 nm) del reconocimiento adaptativo ([[nodo atómico|real-pharm-atoms]]): (1) puentes de hidrógeno direccionales N–H···O y O–H···O (~0,28–0,31 nm) y puentes salinos entre [[C|atom-c]], [[H|atom-h]], [[N|atom-n]] y [[O|atom-o]] en [[Fab–RBD|real-imm-rbd-block]] (PDB 7BZ5) o [[TCR–pMHC-I|real-imm-tcr-mhci]] (PDB 1AO7); y (2) enlaces disulfuro covalentes [[S|atom-s]]–S (~0,205 nm) entre cisteínas en la bisagra de [[IgG|real-imm-igg]] (PDB 1IGT).',
        from: [
          { nodeId: 'atom-n', label: 'Puentes H polares N/O/H', cargo: 'Agarre CDR3–epítopo 0,29 nm' },
          { nodeId: 'atom-s', label: 'Puente de azufre cisteína', cargo: 'Bisagra S–S de IgG (0,205 nm)' }
        ],
        to: [
          { nodeId: 'real-pharm-atoms', label: 'Nodo Química Atómica', cargo: 'Física de enlaces inmunes y fármacos' },
          { nodeId: 'scale-explorer', label: 'Continuidad de escala 0,1 nm', cargo: 'De átomos a tejido de 30 µm' }
        ]
      }
    }
  },

  'pharmacology_lab.html': {
    bench_ecoli: {
      en: {
        subtitle: 'Selectivity Bench: Walled E. coli Bacterium (~2 um)',
        simple:
          'This walled [[E. coli|real-bacterium]] carries both a cross-linked [[peptidoglycan|peptidoglycan]] wall and bacterial 70S [[ribosomes|ribosome]], making it vulnerable to [[penicillin|real-pharm-pbp]] lysis and [[macrolide|real-pharm-macrolide]]/[[tetracycline|real-pharm-tetra]] arrest while ignoring antivirals.',
        story:
          'Standing at station one of the five-organism selectivity bench, [[E. coli|real-bacterium]] illustrates classic antibacterial susceptibility and resistance. Because it maintains high internal osmotic pressure behind a periplasmic [[peptidoglycan|peptidoglycan]] meshwork stitched by [[PBP|real-pharm-pbp]] enzymes, beta-lactam antibiotics weaken its growing wall until it bulges and bursts osmotically. Switching the bench to [[macrolides|real-pharm-macrolide]] or [[tetracyclines|real-pharm-tetra]] stalls its 70S [[ribosomes|ribosome]] directly. Yet antivirals aimed at [[RdRp|real-pharm-rdrp]] or [[HIV-1 RT|real-pharm-hivrt]] find no target here, and multidrug [[AcrB efflux pumps|real-cd-acrb]] show how bacteria evolve resistance.',
        blueprint: {
          role: 'Walled Gram-negative benchmark pathogen demonstrating dual susceptibility to cell-wall beta-lactams and 70S ribosome inhibitors',
          arrivesFrom: 'Prokaryotic [[E. coli|real-bacterium]] architecture combining periplasmic [[peptidoglycan|peptidoglycan]] and 70S translational machinery',
          inside: 'Outer LPS envelope, PBP-cross-linked [[cell wall|cell-wall]], bacterial 70S [[ribosomes|ribosome]], and resistance-capable [[AcrB|real-cd-acrb]] pumps',
          deliversTo: 'Live osmotic lysis under [[Penicillin|real-pharm-pbp]], halted protein synthesis under [[Macrolide/Tetracycline|real-pharm-macrolide]], and zero response to antivirals',
          loop: 'Comparing E. coli against wall-less Mycoplasma and ribosome-free viruses proves selective toxicity depends on exact molecular targets'
        },
        scientific:
          'Gram-negative bacterial benchmark [[Escherichia coli|real-bacterium]] (~2.0 x 0.8 um) on the five-organism [[pharmacology bench|real-pharmacology]]. Expresses periplasmic [[peptidoglycan|peptidoglycan]] transpeptidases ([[PBP|real-pharm-pbp]], PDB 1PWC -> bactericidal osmotic lysis under beta-lactams) and bacterial 70S [[ribosomes|ribosome]] ([[50S macrolide|real-pharm-macrolide]] PDB 4V7U; [[30S tetracycline|real-pharm-tetra]] PDB 1HNW -> translation arrest). Lacks viral polymerases (unaffected by [[Remdesivir|real-pharm-rdrp]]/[[AZT|real-pharm-hivrt]]); clinical resistance frequently evolves via beta-lactamases or RND [[AcrB efflux|real-cd-acrb]].',
        from: [
          { nodeId: 'real-bacterium', label: 'E. coli Architecture', cargo: 'Peptidoglycan + 70S ribosomes' },
          { nodeId: 'real-cd-acrb', label: 'AcrB Efflux Context', cargo: 'Antibiotic resistance pump' }
        ],
        to: [
          { nodeId: 'real-pharm-pbp', label: 'Penicillin Lysis Target', cargo: 'Periplasmic PBP acylation' },
          { nodeId: 'real-pharm-macrolide', label: '70S Ribosome Target', cargo: 'Translation arrest pathway' }
        ]
      },
      es: {
        subtitle: 'Banco de selectividad: E. coli con pared (~2 µm)',
        simple:
          'Esta [[E. coli|real-bacterium]] con pared posee tanto [[peptidoglicano|peptidoglycan]] entrecruzado como [[ribosomas|ribosome]] bacterianos 70S, por lo que sufre lisis por [[penicilina|real-pharm-pbp]] y paro por [[macrólidos|real-pharm-macrolide]]/[[tetraciclinas|real-pharm-tetra]], pero ignora los antivirales.',
        story:
          'En la primera estación del banco comparativo de cinco organismos, [[E. coli|real-bacterium]] muestra la susceptibilidad antibacteriana clásica. Al contener su alta presión osmótica interna tras una malla periplásmica de [[peptidoglicano|peptidoglycan]] cosida por enzimas [[PBP|real-pharm-pbp]], los betalactámicos debilitan su pared en crecimiento hasta provocar su estallido osmótico. Al cambiar a [[macrólidos|real-pharm-macrolide]] o [[tetraciclinas|real-pharm-tetra]], se detienen sus [[ribosomas|ribosome]] 70S. En cambio, los antivirales de [[RdRp|real-pharm-rdrp]] o [[VIH-1 RT|real-pharm-hivrt]] carecen de diana aquí, y las bombas [[AcrB|real-cd-acrb]] muestran cómo evoluciona la resistencia.',
        blueprint: {
          role: 'Patógeno modelo Gram negativo con pared que demuestra vulnerabilidad dual a betalactámicos y bloqueadores del ribosoma 70S',
          arrivesFrom: 'Arquitectura procariota de [[E. coli|real-bacterium]] con [[peptidoglicano|peptidoglycan]] periplásmico y maquinaria traduccional 70S',
          inside: 'Envoltura LPS externa, [[pared celular|cell-wall]] entrecruzada por PBP, [[ribosomas|ribosome]] 70S y bombas de resistencia [[AcrB|real-cd-acrb]]',
          deliversTo: 'Lisis osmótica con [[penicilina|real-pharm-pbp]], traducción detenida con [[macrólidos/tetraciclinas|real-pharm-macrolide]] y cero respuesta a antivirales',
          loop: 'Comparar E. coli frente a Mycoplasma sin pared y virus sin ribosomas demuestra que la toxicidad selectiva exige dianas moleculares concretas'
        },
        scientific:
          'Patógeno Gram negativo de referencia [[Escherichia coli|real-bacterium]] (~2,0 × 0,8 µm) en el [[banco farmacológico|real-pharmacology]]. Expresa transpeptidasas de [[peptidoglicano|peptidoglycan]] ([[PBP|real-pharm-pbp]], PDB 1PWC → lisis osmótica bactericida por betalactámicos) y [[ribosomas|ribosome]] 70S ([[macrólido 50S|real-pharm-macrolide]] PDB 4V7U; [[tetraciclina 30S|real-pharm-tetra]] PDB 1HNW → paro traduccional). Sin polimerasas víricas (indiferente a [[remdesivir|real-pharm-rdrp]]/[[AZT|real-pharm-hivrt]]); desarrolla resistencia mediante betalactamasas o flujo [[AcrB|real-cd-acrb]].',
        from: [
          { nodeId: 'real-bacterium', label: 'Arquitectura de E. coli', cargo: 'Peptidoglicano + ribosomas 70S' },
          { nodeId: 'real-cd-acrb', label: 'Contexto de flujo AcrB', cargo: 'Bomba de resistencia antibiótica' }
        ],
        to: [
          { nodeId: 'real-pharm-pbp', label: 'Diana de lisis por penicilina', cargo: 'Acilación periplásmica de PBP' },
          { nodeId: 'real-pharm-macrolide', label: 'Diana ribosomal 70S', cargo: 'Detención de la traducción' }
        ]
      }
    },

    bench_myco: {
      en: {
        subtitle: 'Selectivity Bench: Wall-Less Mycoplasma (~300 nm)',
        simple:
          '[[Mycoplasma|real-mycoplasma]] is a tiny bacterium completely lacking a [[peptidoglycan|peptidoglycan]] wall, so [[penicillin|real-pharm-pbp]] has zero effect on it, yet it still relies on bacterial 70S [[ribosomes|ribosome]] halted cleanly by [[macrolides|real-pharm-macrolide]] and [[tetracyclines|real-pharm-tetra]].',
        story:
          'Why does a patient with walking pneumonia caused by [[Mycoplasma|real-mycoplasma]] fail to improve on penicillin or amoxicillin? Station two of the bench answers that clinical puzzle visually. Over evolutionary streamlining, Mycoplasma discarded its entire [[peptidoglycan|peptidoglycan]] [[cell wall|cell-wall]] and PBP enzymes, bracing its flexible [[plasma membrane|plasma-membrane]] with host-scavenged sterols instead. Because no PBP target exists, [[penicillin|real-pharm-pbp]] glides straight past harmlessly. Switching to [[azithromycin|real-pharm-macrolide]] or [[doxycycline|real-pharm-tetra]], however, strikes Mycoplasma\'s intact bacterial 70S [[ribosomes|ribosome]] and shuts down its protein synthesis immediately.',
        blueprint: {
          role: 'Wall-less bacterial benchmark proving intrinsic beta-lactam resistance paired with full sensitivity to 70S ribosome antibiotics',
          arrivesFrom: 'Minimalist [[Mycoplasma|real-mycoplasma]] (~300 nm) bound solely by a sterol-stabilized [[plasma membrane|plasma-membrane]]',
          inside: 'Zero [[peptidoglycan|peptidoglycan]] sacculus, zero PBP transpeptidases, compact ~0.6-0.8 Mbp [[DNA|dna]], and active bacterial 70S [[ribosomes|ribosome]]',
          deliversTo: 'Spared survival under [[Penicillin|real-pharm-pbp]] (NO WALL) contrasted against immediate growth arrest under [[Macrolides|real-pharm-macrolide]] or [[Tetracyclines|real-pharm-tetra]]',
          loop: 'Demonstrates that antibiotic choice must match exact microbial cellular architecture rather than treating all bacteria identically'
        },
        scientific:
          'Wall-less Mollicute bacterium [[Mycoplasma|real-mycoplasma]] (~300 nm, ~0.58-0.82 Mbp genome; sterol-enriched [[plasma membrane|plasma-membrane]]) on the [[pharmacology bench|real-pharmacology]]. Genetically lacks all [[peptidoglycan|peptidoglycan]] biosynthesis and [[PBP|real-pharm-pbp]] genes, conferring complete intrinsic resistance to beta-lactams (penicillins, cephalosporins). Retains canonical bacterial 70S [[ribosomes|ribosome]] bearing 23S rRNA A2058 and 16S rRNA h31/h34 pockets, making [[macrolides|real-pharm-macrolide]] (PDB 4V7U) and [[tetracyclines|real-pharm-tetra]] (PDB 1HNW) first-line clinical therapies.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Wall-Less Mycoplasma', cargo: 'Sterol bilayer, 0 peptidoglycan' },
          { nodeId: 'plasma-membrane', label: 'Naked Sterol Membrane', cargo: 'No PBP target present' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: '50S Macrolide Cure', cargo: 'First-line 70S blockade' },
          { nodeId: 'real-pharm-tetra', label: '30S Tetracycline Cure', cargo: 'Halts 70S A-site decoding' }
        ]
      },
      es: {
        subtitle: 'Banco de selectividad: Mycoplasma sin pared (~300 nm)',
        simple:
          '[[Mycoplasma|real-mycoplasma]] es una bacteria diminuta que carece totalmente de pared de [[peptidoglicano|peptidoglycan]], por lo que la [[penicilina|real-pharm-pbp]] no le afecta, pero sus [[ribosomas|ribosome]] 70S sí se detienen con [[macrólidos|real-pharm-macrolide]] y [[tetraciclinas|real-pharm-tetra]].',
        story:
          '¿Por qué una neumonía atípica causada por [[Mycoplasma|real-mycoplasma]] no responde a penicilina ni amoxicilina? La segunda estación del banco responde visualmente. Durante su reducción evolutiva, Mycoplasma perdió toda su [[pared celular|cell-wall]] de [[peptidoglicano|peptidoglycan]] y sus enzimas PBP, reforzando su [[membrana plasmática|plasma-membrane]] con esteroles del huésped. Al no existir diana PBP, la [[penicilina|real-pharm-pbp]] resulta inútil. En cambio, al aplicar [[azitromicina|real-pharm-macrolide]] o [[doxiciclina|real-pharm-tetra]], ambos fármacos bloquean de inmediato sus [[ribosomas|ribosome]] bacterianos 70S.',
        blueprint: {
          role: 'Modelo bacteriano sin pared que demuestra resistencia intrínseca a betalactámicos junto a plena sensibilidad a inhibidores 70S',
          arrivesFrom: '[[Mycoplasma|real-mycoplasma]] minimalista (~300 nm) delimitado únicamente por una [[membrana plasmática|plasma-membrane]] con esteroles',
          inside: 'Ausencia total de [[peptidoglicano|peptidoglycan]] y transpeptidasas PBP, [[ADN|dna]] compacto (~0,6–0,8 Mpb) y [[ribosomas|ribosome]] 70S activos',
          deliversTo: 'Supervivencia intacta ante [[penicilina|real-pharm-pbp]] (SIN PARED) frente al paro inmediato con [[macrólidos|real-pharm-macrolide]] o [[tetraciclinas|real-pharm-tetra]]',
          loop: 'Prueba que la elección antibiótica debe corresponder exactamente a la arquitectura celular del microbio y no aplicarse por igual'
        },
        scientific:
          'Bacteria Mollicutes sin pared [[Mycoplasma|real-mycoplasma]] (~300 nm, genoma de ~0,58–0,82 Mpb; [[membrana plasmática|plasma-membrane]] rica en esteroles) en el [[banco farmacológico|real-pharmacology]]. Carece genéticamente de síntesis de [[peptidoglicano|peptidoglycan]] y genes [[PBP|real-pharm-pbp]], otorgándole resistencia intrínseca absoluta a betalactámicos. Conserva [[ribosomas|ribosome]] 70S con sitios A2058 (23S) y h31/h34 (16S), siendo los [[macrólidos|real-pharm-macrolide]] (PDB 4V7U) y [[tetraciclinas|real-pharm-tetra]] (PDB 1HNW) el tratamiento de elección.',
        from: [
          { nodeId: 'real-mycoplasma', label: 'Mycoplasma sin pared', cargo: 'Bicapa con esteroles, 0 pared' },
          { nodeId: 'plasma-membrane', label: 'Membrana desnuda', cargo: 'Sin diana PBP presente' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: 'Cura por macrólido 50S', cargo: 'Bloqueo 70S de primera línea' },
          { nodeId: 'real-pharm-tetra', label: 'Cura por tetraciclina 30S', cargo: 'Frena decodificación en sitio A' }
        ]
      }
    },

    bench_chlam: {
      en: {
        subtitle: 'Selectivity Bench: Intracellular Chlamydia Inclusion',
        simple:
          '[[Chlamydia|real-chlamydia]] hides inside a protective vacuole inside human cells and uses minimal septal [[peptidoglycan|peptidoglycan]]. [[Penicillin|real-pharm-pbp]] merely stalls it into swollen persistent bodies, whereas membrane-crossing [[macrolides|real-pharm-macrolide]] and [[tetracyclines|real-pharm-tetra]] halt its 70S [[ribosomes|ribosome]].',
        story:
          'Station three reveals why intracellular bacterial parasites demand membrane-permeant ribosome inhibitors. Living inside a remodeled host inclusion [[vesicle|vesicle]], replicating [[Chlamydia|real-chlamydia]] reticulate bodies synthesize only a narrow ring of septal [[peptidoglycan|peptidoglycan]] for division rather than a full pressure-bearing sacculus. Exposing them to [[penicillin|real-pharm-pbp]] blocks septum division without bursting the sheltered cell, stalling them into reversible persistent forms. Lipophilic [[azithromycin|real-pharm-macrolide]] and [[doxycycline|real-pharm-tetra]], by contrast, cross both host and inclusion bilayers to silence Chlamydia\'s bacterial 70S [[ribosomes|ribosome]] cleanly while sparing host [[80S ribosomes|real-cd-ribo80]].',
        blueprint: {
          role: 'Obligate intracellular bacterial benchmark highlighting why tissue-penetrating 70S inhibitors outperform beta-lactams inside host vacuoles',
          arrivesFrom: 'Host-sheltered [[Chlamydia|real-chlamydia]] inclusion vacuole harboring dividing reticulate bodies with bacterial 70S [[ribosomes|ribosome]]',
          inside: 'Minimal septal [[peptidoglycan|peptidoglycan]] ring (stalled, not lysed, by penicillin) alongside active bacterial 50S/30S translation complexes',
          deliversTo: 'Reversible aberrant persistence under [[Penicillin|real-pharm-pbp]] vs decisive intracellular clearance under [[Macrolides|real-pharm-macrolide]] and [[Tetracyclines|real-pharm-tetra]]',
          loop: 'Demonstrates that drug pharmacokinetics (crossing eukaryotic membranes) plus target selectivity together determine clinical cure'
        },
        scientific:
          'Obligate intracellular bacterium [[Chlamydia trachomatis|real-chlamydia]] replicating inside a host-derived inclusion [[vesicle|vesicle]] on the [[pharmacology bench|real-pharmacology]]. Synthesizes a localized septal [[peptidoglycan|peptidoglycan]] ring solely during cytokinesis; beta-lactam [[PBP|real-pharm-pbp]] inhibition stalls binary fission into swollen aberrant persistent bodies without osmotic lysis. Membrane-permeant [[macrolides|real-pharm-macrolide]] (azithromycin, PDB 4V7U) and [[tetracyclines|real-pharm-tetra]] (doxycycline, PDB 1HNW) penetrate host cytoplasm and inclusions to arrest chlamydial 70S [[ribosomes|ribosome]] while sparing human [[80S|real-cd-ribo80]].',
        from: [
          { nodeId: 'real-chlamydia', label: 'Chlamydia Inclusion', cargo: 'Intracellular reticulate bodies' },
          { nodeId: 'vesicle', label: 'Host Inclusion Barrier', cargo: 'Requires permeant 70S drugs' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: 'Azithromycin Clearance', cargo: 'Penetrates inclusion to 50S' },
          { nodeId: 'real-pharm-tetra', label: 'Doxycycline Clearance', cargo: 'Penetrates inclusion to 30S' }
        ]
      },
      es: {
        subtitle: 'Banco de selectividad: Inclusión intracelular de Chlamydia',
        simple:
          '[[Chlamydia|real-chlamydia]] se oculta dentro de una vacuola humana y solo forma un anillo septal de [[peptidoglicano|peptidoglycan]]. La [[penicilina|real-pharm-pbp]] apenas la frena en cuerpos persistentes, mientras [[macrólidos|real-pharm-macrolide]] y [[tetraciclinas|real-pharm-tetra]] bloquean sus [[ribosomas|ribosome]] 70S.',
        story:
          'La tercera estación explica por qué los parásitos bacterianos intracelulares requieren inhibidores ribosomales permeables a membranas. Alojados dentro de una [[vesícula|vesicle]] de inclusión remodelada, los cuerpos reticulados de [[Chlamydia|real-chlamydia]] sintetizan solo un delgado anillo septal de [[peptidoglicano|peptidoglycan]] para dividirse, sin pared osmótica completa. La [[penicilina|real-pharm-pbp]] detiene la división sin romperlos, induciendo cuerpos persistentes reversibles. En cambio, la [[azitromicina|real-pharm-macrolide]] y la [[doxiciclina|real-pharm-tetra]] cruzan ambas membranas y silencian sus [[ribosomas|ribosome]] 70S respetando los [[80S|real-cd-ribo80]] humanos.',
        blueprint: {
          role: 'Modelo bacteriano intracelular obligado que ilustra por qué los inhibidores 70S permeables superan a los betalactámicos dentro de vacuolas',
          arrivesFrom: 'Vacuola de inclusión intracelular de [[Chlamydia|real-chlamydia]] con cuerpos reticulados en división y [[ribosomas|ribosome]] 70S',
          inside: 'Anillo septal mínimo de [[peptidoglicano|peptidoglycan]] (frenado sin lisis por penicilina) junto a complejos traduccionales 50S/30S activos',
          deliversTo: 'Persistencia aberrante reversible ante [[penicilina|real-pharm-pbp]] frente a erradicación intracelular por [[macrólidos|real-pharm-macrolide]] y [[tetraciclinas|real-pharm-tetra]]',
          loop: 'Demuestra que la farmacocinética (atravesar membranas eucariotas) y la selectividad de diana actúan juntas para lograr la curación'
        },
        scientific:
          'Bacteria intracelular obligada [[Chlamydia trachomatis|real-chlamydia]] alojada en una [[vesícula|vesicle]] de inclusión huésped en el [[banco farmacológico|real-pharmacology]]. Sintetiza únicamente un anillo septal de [[peptidoglicano|peptidoglycan]] en la citocinesis; la inhibición de [[PBP|real-pharm-pbp]] genera cuerpos aberrantes persistentes sin lisis osmótica. Los [[macrólidos|real-pharm-macrolide]] (azitromicina, PDB 4V7U) y [[tetraciclinas|real-pharm-tetra]] (doxiciclina, PDB 1HNW) difunden al interior de la inclusión bloqueando [[ribosomas|ribosome]] 70S sin afectar los [[80S|real-cd-ribo80]] humanos.',
        from: [
          { nodeId: 'real-chlamydia', label: 'Inclusión de Chlamydia', cargo: 'Cuerpos reticulados internos' },
          { nodeId: 'vesicle', label: 'Barrera de inclusión', cargo: 'Exige fármacos 70S permeables' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: 'Erradicación con azitromicina', cargo: 'Atraviesa la inclusión al 50S' },
          { nodeId: 'real-pharm-tetra', label: 'Erradicación con doxiciclina', cargo: 'Atraviesa la inclusión al 30S' }
        ]
      }
    },

    bench_virus: {
      en: {
        subtitle: 'Selectivity Bench: Acellular Viruses (SARS-CoV-2 & HIV-1)',
        simple:
          '[[Viruses|viruses]] such as [[SARS-CoV-2|real-coronavirus]] and [[HIV-1|real-hiv]] have zero [[peptidoglycan|peptidoglycan]] wall and zero [[ribosomes|ribosome]], so antibiotics never treat viral infections. Only direct antivirals ([[Remdesivir|real-pharm-rdrp]], [[AZT|real-pharm-hivrt]]) or [[vaccines|real-pharm-mrna-lnp]] stop them.',
        story:
          'Station four delivers one of the most important public-health truths in modern biology: why antibiotics are completely powerless against viral illnesses. Neither [[SARS-CoV-2|real-coronavirus]] nor [[HIV-1|real-hiv]] builds a [[peptidoglycan|peptidoglycan]] wall for [[penicillin|real-pharm-pbp]] to break, and neither owns a single 70S [[ribosome|ribosome]] for [[macrolides|real-pharm-macrolide]] or [[tetracyclines|real-pharm-tetra]] to jam; inside host cells, viruses hijack human [[80S ribosomes|real-cd-ribo80]]. Taking antibiotics for a virus leaves virions untouched while selecting resistant bacteria. Stopping viruses requires striking virus-only polymerases via [[Remdesivir|real-pharm-rdrp]] and [[AZT|real-pharm-hivrt]], or blocking entry proactively via [[mRNA-LNP|real-pharm-mrna-lnp]]-primed [[IgG|real-imm-igg]].',
        blueprint: {
          role: 'Acellular viral benchmark proving zero antibiotic susceptibility and highlighting virus-specific polymerase and vaccine targets',
          arrivesFrom: 'Enveloped RNA viral pathogens [[SARS-CoV-2|real-coronavirus]] and retrovirus [[HIV-1|real-hiv]] lacking cellular walls or ribosomes',
          inside: 'Zero [[peptidoglycan|peptidoglycan]], zero 70S [[ribosomes|ribosome]], but unique viral polymerases ([[RdRp|real-pharm-rdrp]] PDB 7BV2 and [[HIV-RT|real-pharm-hivrt]] PDB 3V4I)',
          deliversTo: 'NO TARGET under all antibacterial classes vs polymerase stalling under [[Remdesivir/AZT|real-pharm-rdrp]] and neutralization by [[vaccine-primed IgG|real-imm-rbd-block]]',
          loop: 'Misusing antibiotics on viral infections fails to cure the virus while needlessly driving AcrB and beta-lactamase resistance in commensal bacteria'
        },
        scientific:
          'Acellular viral reference station representing [[SARS-CoV-2|real-coronavirus]] ((+)ssRNA betacoronavirus) and [[HIV-1|real-hiv]] (diploid (+)ssRNA retrovirus) on the [[pharmacology bench|real-pharmacology]]. Because [[viruses|viruses]] lack both [[peptidoglycan|peptidoglycan]]/[[PBP|real-pharm-pbp]] and 70S [[ribosomes|ribosome]], antibacterial agents show zero efficacy. Therapeutic intervention selectively targets virus-encoded replication enzymes absent from human cells ([[SARS-CoV-2 RdRp|real-pharm-rdrp]] PDB 7BV2 and [[HIV-1 RT|real-pharm-hivrt]] PDB 3V4I) or primes pre-emptive humoral [[IgG|real-imm-igg]] via [[mRNA-LNP vaccines|real-pharm-mrna-lnp]].',
        from: [
          { nodeId: 'real-coronavirus', label: 'SARS-CoV-2 Target', cargo: '0 wall, 0 ribosomes; has RdRp' },
          { nodeId: 'real-hiv', label: 'HIV-1 Retrovirus', cargo: '0 wall, 0 ribosomes; has RT' }
        ],
        to: [
          { nodeId: 'real-pharm-rdrp', label: 'Antiviral RdRp Block', cargo: 'Remdesivir i+3 stall' },
          { nodeId: 'real-pharm-hivrt', label: 'Antiviral HIV-RT Block', cargo: 'AZT 3-prime chain stop' }
        ]
      },
      es: {
        subtitle: 'Banco de selectividad: Virus acelulares (SARS-CoV-2 y VIH-1)',
        simple:
          'Los [[virus|viruses]] como [[SARS-CoV-2|real-coronavirus]] y [[VIH-1|real-hiv]] carecen por completo de pared de [[peptidoglicano|peptidoglycan]] y de [[ribosomas|ribosome]], por lo que los antibióticos nunca los curan. Solo antivirales ([[remdesivir|real-pharm-rdrp]], [[AZT|real-pharm-hivrt]]) o [[vacunas|real-pharm-mrna-lnp]] los frenan.',
        story:
          'La cuarta estación demuestra una verdad esencial de salud pública: por qué los antibióticos jamás sirven contra infecciones víricas. Ni [[SARS-CoV-2|real-coronavirus]] ni [[VIH-1|real-hiv]] construyen pared de [[peptidoglicano|peptidoglycan]] que la [[penicilina|real-pharm-pbp]] pueda romper, ni poseen un solo [[ribosoma|ribosome]] 70S para que [[macrólidos|real-pharm-macrolide]] o [[tetraciclinas|real-pharm-tetra]] lo bloqueen: dentro del cuerpo secuestran los [[ribosomas 80S|real-cd-ribo80]] humanos. Detenerlos exige atacar polimerasas exclusivas del virus con [[remdesivir|real-pharm-rdrp]] o [[AZT|real-pharm-hivrt]], o entrenar [[IgG|real-imm-igg]] preventivas mediante [[vacunas ARNm-LNP|real-pharm-mrna-lnp]].',
        blueprint: {
          role: 'Modelo vírico acelular que prueba la ineficacia total de antibióticos y destaca las dianas exclusivas de antivirales y vacunas',
          arrivesFrom: 'Patógenos víricos de ARN envueltos [[SARS-CoV-2|real-coronavirus]] y retrovirus [[VIH-1|real-hiv]] sin pared ni ribosomas',
          inside: 'Cero [[peptidoglicano|peptidoglycan]], cero [[ribosomas|ribosome]] 70S, pero polimerasas exclusivas ([[RdRp|real-pharm-rdrp]] PDB 7BV2 y [[VIH-RT|real-pharm-hivrt]] PDB 3V4I)',
          deliversTo: 'SIN DIANA frente a cualquier antibiótico contra bloqueo polimerasa por [[remdesivir/AZT|real-pharm-rdrp]] y neutralización por [[IgG vacunal|real-imm-rbd-block]]',
          loop: 'Usar antibióticos en infecciones víricas no cura el virus y selecciona innecesariamente resistencia AcrB y betalactamasas en bacterias comensales'
        },
        scientific:
          'Estación vírica acelular con [[SARS-CoV-2|real-coronavirus]] (betacoronavirus ARN+) y [[VIH-1|real-hiv]] (retrovirus ARN+ diploide) en el [[banco farmacológico|real-pharmacology]]. Al carecer los [[virus|viruses]] de [[peptidoglicano|peptidoglycan]]/[[PBP|real-pharm-pbp]] y [[ribosomas|ribosome]] 70S, los antibacterianos carecen de actividad. La terapia ataca polimerasas víricas ausentes en humanos —[[RdRp|real-pharm-rdrp]] (PDB 7BV2) y [[VIH-1 RT|real-pharm-hivrt]] (PDB 3V4I)— o induce inmunidad [[IgG|real-imm-igg]] previa con [[vacunas ARNm-LNP|real-pharm-mrna-lnp]].',
        from: [
          { nodeId: 'real-coronavirus', label: 'Diana SARS-CoV-2', cargo: '0 pared, 0 ribosomas; RdRp' },
          { nodeId: 'real-hiv', label: 'Retrovirus VIH-1', cargo: '0 pared, 0 ribosomas; RT' }
        ],
        to: [
          { nodeId: 'real-pharm-rdrp', label: 'Bloqueo antiviral RdRp', cargo: 'Paro i+3 por remdesivir' },
          { nodeId: 'real-pharm-hivrt', label: 'Bloqueo antiviral VIH-RT', cargo: 'Corte 3\' por AZT' }
        ]
      }
    },

    bench_human: {
      en: {
        subtitle: 'Selectivity Bench: Spared Human Epithelial Cell (~20 um)',
        simple:
          'This [[human cell|real-cell]] has no [[peptidoglycan|peptidoglycan]] wall, uses eukaryotic [[80S ribosomes|real-cd-ribo80]], and guards its [[DNA|dna]] inside a sealed [[nucleus|nucleus]], so antibiotics and antivirals spare it while [[mRNA-LNP vaccines|real-pharm-mrna-lnp]] safely prime immunity.',
        story:
          'Station five anchors the entire therapeutic index of selective medicine. Across every antimicrobial mode on the bench, the [[human epithelial cell|real-enterocyte]] stays healthy for concrete structural reasons: lacking a [[peptidoglycan|peptidoglycan]] wall, it ignores [[penicillin|real-pharm-pbp]]; carrying divergent 28S/18S rRNA in its cytosolic [[80S ribosomes|real-cd-ribo80]], it shrugs off [[macrolides|real-pharm-macrolide]] and [[tetracyclines|real-pharm-tetra]]; and high-fidelity nuclear polymerases reject [[Remdesivir|real-pharm-rdrp]] and [[AZT|real-pharm-hivrt]]. When switched to [[mRNA-LNP|real-pharm-mrna-lnp]], those same cytosolic 80S ribosomes translate temporary Spike protein visibly outside the untouched [[nucleus|nucleus]], training lasting [[IgG|real-imm-igg]] and [[CD8+ T-cell|real-imm-tcr-mhci]] defense.',
        blueprint: {
          role: 'Eukaryotic host safety benchmark proving selective toxicity across antibiotics, antivirals, and cytosolic mRNA-LNP priming',
          arrivesFrom: 'Nucleated human mucosal [[epithelial cell|real-enterocyte]] architecture ([[animal cell|real-cell]]) with cytosolic [[80S ribosomes|real-cd-ribo80]]',
          inside: 'Zero [[peptidoglycan|peptidoglycan]], divergent human [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0), proofreading nuclear polymerases, and intact double-membrane [[nucleus|nucleus]]',
          deliversTo: 'Spared viability across all drug classes plus harmless cytosolic Spike presentation priming [[IgG|real-imm-igg]] and [[CD8+ T-cells|real-imm-tcr-mhci]]',
          loop: 'High-dosed drugs must still respect mitochondrial 55S mitoribosomes, which share distant bacterial ancestry with prokaryotic 70S ribosomes'
        },
        scientific:
          'Human eukaryotic host control ([[real-cell|real-cell]] / [[enterocyte|real-enterocyte]], ~20 um) on the [[pharmacology bench|real-pharmacology]]. Spared by beta-lactams (zero [[peptidoglycan|peptidoglycan]]/[[PBP|real-pharm-pbp]]), spared by 70S antibiotics via eukaryotic [[80S ribosome|real-cd-ribo80]] (PDB 4UG0) 28S rRNA G2058 and 18S divergence, and selectively spared by [[Remdesivir|real-pharm-rdrp]]/[[AZT|real-pharm-hivrt]] via host polymerase discrimination. Under [[mRNA-LNP|real-pharm-mrna-lnp]], cytosolic 80S translation produces prefusion Spike strictly outside the intact [[nucleus|nucleus]] with zero [[DNA|dna]] integration.',
        from: [
          { nodeId: 'real-cell', label: 'Human Eukaryotic Cell', cargo: '0 wall, 80S ribo, intact nucleus' },
          { nodeId: 'real-enterocyte', label: 'Mucosal Host Epithelium', cargo: 'Target tissue protected' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Spared 80S Translation', cargo: 'Active protein synthesis' },
          { nodeId: 'real-immune', label: 'Adaptive Immune Priming', cargo: 'Trained IgG & CD8+ memory' }
        ]
      },
      es: {
        subtitle: 'Banco de selectividad: Célula epitelial humana intacta (~20 µm)',
        simple:
          'Esta [[célula humana|real-cell]] no tiene pared de [[peptidoglicano|peptidoglycan]], utiliza [[ribosomas 80S|real-cd-ribo80]] eucariotas y protege su [[ADN|dna]] en un [[núcleo|nucleus]] sellado, por lo que los fármacos la respetan y las [[vacunas ARNm-LNP|real-pharm-mrna-lnp]] entrenan su inmunidad.',
        story:
          'La quinta estación sustenta todo el índice terapéutico de la medicina selectiva. En cada modo antimicrobiano del banco, la [[célula epitelial humana|real-enterocyte]] permanece intacta por razones estructurales precisas: sin [[peptidoglicano|peptidoglycan]], ignora la [[penicilina|real-pharm-pbp]]; con ARNr 28S/18S divergente en sus [[ribosomas 80S|real-cd-ribo80]], elude [[macrólidos|real-pharm-macrolide]] y [[tetraciclinas|real-pharm-tetra]]; y sus polimerasas nucleares rechazan [[remdesivir|real-pharm-rdrp]] y [[AZT|real-pharm-hivrt]]. Con [[ARNm-LNP|real-pharm-mrna-lnp]], esos mismos ribosomas 80S traducen espícula fuera del [[núcleo|nucleus]] intacto para entrenar [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]].',
        blueprint: {
          role: 'Control de seguridad eucariota que prueba la toxicidad selectiva de antibióticos, antivirales y vacunación ARNm-LNP citosólica',
          arrivesFrom: 'Arquitectura de [[célula epitelial|real-enterocyte]] mucosa humana nucleada ([[célula animal|real-cell]]) con [[ribosomas 80S|real-cd-ribo80]]',
          inside: 'Sin [[peptidoglicano|peptidoglycan]], [[ribosomas 80S|real-cd-ribo80]] humanos divergentes (PDB 4UG0), polimerasas correctoras y [[núcleo|nucleus]] intacto',
          deliversTo: 'Supervivencia intacta ante toda clase farmacológica y presentación inocua de espícula que entrena [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]]',
          loop: 'Las dosis clínicas respetan también los mitorribosomas 55S mitocondriales, que conservan remota afinidad evolutiva con los 70S bacterianos'
        },
        scientific:
          'Control eucariota humano ([[célula animal|real-cell]] / [[enterocito|real-enterocyte]], ~20 µm) en el [[banco farmacológico|real-pharmacology]]. Protegida frente a betalactámicos (ausencia de [[peptidoglicano|peptidoglycan]]/[[PBP|real-pharm-pbp]]), frente a inhibidores 70S por la divergencia G2058/18S del [[ribosoma 80S|real-cd-ribo80]] (PDB 4UG0), y frente a [[remdesivir|real-pharm-rdrp]]/[[AZT|real-pharm-hivrt]] por discriminación de polimerasas humanas. Con [[ARNm-LNP|real-pharm-mrna-lnp]], la traducción 80S citosólica ocurre fuera del [[núcleo|nucleus]] sin alterar el [[ADN|dna]].',
        from: [
          { nodeId: 'real-cell', label: 'Célula eucariota humana', cargo: '0 pared, 80S, núcleo intacto' },
          { nodeId: 'real-enterocyte', label: 'Epitelio mucoso huésped', cargo: 'Tejido diana protegido' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Traducción 80S preservada', cargo: 'Síntesis proteica activa' },
          { nodeId: 'real-immune', label: 'Primado inmunitario adaptativo', cargo: 'Memoria IgG y CD8⁺' }
        ]
      }
    },

    pg_wall: {
      en: {
        subtitle: 'Bacterial Peptidoglycan Meshwork (NAG-NAM Cross-Linked Sacculus)',
        simple:
          '[[Peptidoglycan|peptidoglycan]] is a bacteria-only lattice of alternating sugar chains cross-linked by short peptides that stops [[E. coli|real-bacterium]] from bursting under water pressure, the exact structure weakened by [[penicillin|real-pharm-pbp]].',
        story:
          'Wrapping [[E. coli|real-bacterium]] and [[Gram-positive bacteria|real-gram-positive]] inside a single bag-like macromolecule, [[peptidoglycan|peptidoglycan]] alternates N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) sugars tied laterally by peptide cross-bridges containing unique D-amino acids. That meshwork resists intense internal osmotic turgor of two to twenty atmospheres. Whenever dividing bacteria snip old bonds with autolysins to expand, [[PBP transpeptidases|real-pharm-pbp]] must weave fresh cross-links immediately; once penicillin blocks PBP, autolysins keep opening gaps until the pressurized [[plasma membrane|plasma-membrane]] herniates and ruptures.',
        blueprint: {
          role: 'Bacteria-unique stress-bearing periplasmic exoskeleton resisting internal osmotic turgor across walled prokaryotes',
          arrivesFrom: 'Lipid II disaccharide-pentapeptide precursors exported across the bacterial inner [[plasma membrane|plasma-membrane]]',
          inside: 'Alternating beta-1,4 NAG-NAM glycan strands cross-linked via D-Ala-mDAP/Lys peptide stems catalyzed by [[PBP|real-pharm-pbp]]',
          deliversTo: 'Mechanical integrity in untreated [[E. coli|real-bacterium]] vs fatal hypo-osmotic lysis when penicillin blocks cross-linking',
          loop: 'Because human cells, viruses, and wall-less Mycoplasma lack peptidoglycan entirely, it is an ideal zero-host-toxicity drug target'
        },
        scientific:
          'Bacterial [[peptidoglycan|peptidoglycan]] (murein) sacculus forming the periplasmic [[cell wall|cell-wall]] of [[E. coli|real-bacterium]] (~2-6 nm thin) and [[Gram-positive|real-gram-positive]] species (~20-80 nm thick). Alternating beta-1,4-linked GlcNAc-MurNAc glycan polymers carry pentapeptide stems terminating in D-Ala-D-Ala, cross-linked by [[PBP DD-transpeptidases|real-pharm-pbp]] (PDB 1PWC) to withstand ~2-20 atm cytoplasmic turgor. Absent from [[human cells|real-cell]], [[viruses|viruses]], and [[Mycoplasma|real-mycoplasma]], conferring unmatched selective toxicity for beta-lactams and innate [[phagolysosome|real-imm-phagolysosome]] lysozyme.',
        from: [
          { nodeId: 'peptidoglycan', label: 'NAG-NAM Glycan Mesh', cargo: 'D-Ala-D-Ala peptide stems' },
          { nodeId: 'cell-wall', label: 'Bacterial Turgor Shield', cargo: 'Resists 2-20 atm pressure' }
        ],
        to: [
          { nodeId: 'real-pharm-pbp', label: 'Penicillin Lysis Failure', cargo: 'Uncross-linked wall ruptures' },
          { nodeId: 'real-bacterium', label: 'E. coli Osmotic Burst', cargo: 'Bactericidal clearance' }
        ]
      },
      es: {
        subtitle: 'Malla bacteriana de peptidoglicano (saco entrecruzado NAG–NAM)',
        simple:
          'El [[peptidoglicano|peptidoglycan]] es una red exclusiva de bacterias hecha de azúcares alternos unidos por péptidos cortos que evita que [[E. coli|real-bacterium]] estalle por presión de agua, diana directa de la [[penicilina|real-pharm-pbp]].',
        story:
          'Envolviendo a [[E. coli|real-bacterium]] y a las [[bacterias Gram positivas|real-gram-positive]] en una sola macromolécula continua, el [[peptidoglicano|peptidoglycan]] alterna azúcares NAG y NAM unidos lateralmente por puentes peptídicos con D-aminoácidos exclusivos. Esta malla soporta presiones internas de turgencia de dos a veinte atmósferas. Cuando la bacteria crece y sus autolisinas abren huecos, las [[transpeptidasas PBP|real-pharm-pbp]] deben coser enlaces nuevos al instante; al bloquearlas la penicilina, la [[membrana plasmática|plasma-membrane]] presurizada se hernia y revienta.',
        blueprint: {
          role: 'Exoesqueleto periplásmico exclusivo de bacterias que soporta la presión osmótica interna en procariotas con pared',
          arrivesFrom: 'Precursores disacárido-pentapéptido Lípido II exportados por la [[membrana plasmática|plasma-membrane]] interna bacteriana',
          inside: 'Cadenas glucánicas β-1,4 NAG–NAM entrecruzadas por tallos peptídicos D-Ala–mDAP/Lys catalizados por [[PBP|real-pharm-pbp]]',
          deliversTo: 'Integridad mecánica en [[E. coli|real-bacterium]] sana frente a lisis hipoosmótica letal cuando la penicilina bloquea el cosido',
          loop: 'Como células humanas, virus y Mycoplasma carecen de peptidoglicano, constituye una diana con toxicidad huésped casi nula'
        },
        scientific:
          'Saco bacteriano de [[peptidoglicano|peptidoglycan]] (mureína) que integra la [[pared celular|cell-wall]] de [[E. coli|real-bacterium]] (~2–6 nm) y [[Gram positivos|real-gram-positive]] (~20–80 nm). Polímeros β-1,4 de GlcNAc–MurNAc portan tallos terminados en D-Ala–D-Ala entrecruzados por [[DD-transpeptidasas PBP|real-pharm-pbp]] (PDB 1PWC) para resistir ~2–20 atm de turgencia. Ausente en [[células humanas|real-cell]], [[virus|viruses]] y [[Mycoplasma|real-mycoplasma]], habilita selectividad plena para betalactámicos y lisozima del [[fagolisosoma|real-imm-phagolysosome]].',
        from: [
          { nodeId: 'peptidoglycan', label: 'Red glucánica NAG–NAM', cargo: 'Tallos peptídicos D-Ala–D-Ala' },
          { nodeId: 'cell-wall', label: 'Escudo de turgencia', cargo: 'Resiste 2–20 atm internas' }
        ],
        to: [
          { nodeId: 'real-pharm-pbp', label: 'Fallo por penicilina', cargo: 'Ruptura de pared sin coser' },
          { nodeId: 'real-bacterium', label: 'Estallido osmótico E. coli', cargo: 'Eliminación bactericida' }
        ]
      }
    },

    pbp_penicillin: {
      en: {
        subtitle: 'PBP Transpeptidase Covalently Trapped by Penicillin G (PDB 1PWC)',
        simple:
          'Penicillin G locks permanently onto the active serine of bacterial [[PBP transpeptidase|real-pharm-pbp]], stopping [[peptidoglycan|peptidoglycan]] cross-linking in [[E. coli|real-bacterium]] while leaving wall-less [[Mycoplasma|real-mycoplasma]] and [[human cells|real-cell]] untouched.',
        story:
          'In the bacterial periplasm, Penicillin-Binding Protein ([[PBP|real-pharm-pbp]], PDB 1PWC) uses a nucleophilic active-site serine to cleave terminal D-Ala-D-Ala peptides and stitch neighboring [[peptidoglycan|peptidoglycan]] strands together. Penicillin G inserts its strained four-membered beta-lactam ring straight into that exact catalytic groove. When the serine oxygen attacks the beta-lactam carbonyl, the strained ring springs open into an ultra-stable ~0.135-nanometer [[covalent penicilloyl-Ser ester|real-pharm-atoms]] that resists water hydrolysis for hours, permanently disabling cell-wall assembly and causing fatal osmotic burst.',
        blueprint: {
          role: 'Covalent suicide enzyme-inhibitor complex shutting down bacterial peptidoglycan cross-linking transpeptidation',
          arrivesFrom: 'Periplasmic Penicillin G diffusing through outer-membrane porins onto active bacterial [[PBP|real-pharm-pbp]] enzymes',
          inside: 'DD-peptidase active groove (PDB 1PWC) where catalytic Ser-OH opens the 4-membered beta-lactam ring into a trapped 1.35 A C-O ester',
          deliversTo: 'Arrested [[peptidoglycan|peptidoglycan]] stitching, unopposed autolysin wall breakdown, and bactericidal lysis of [[E. coli|real-bacterium]]',
          loop: 'Resistant bacteria evade PBP locking either by secreting beta-lactamase enzymes that pre-open the ring or pumping drugs out via AcrB'
        },
        scientific:
          'Bacterial Penicillin-Binding Protein DD-transpeptidase covalently acylated by Penicillin G (crystal structure PDB 1PWC; [[PBP node|real-pharm-pbp]]). Structural mimicry between the strained beta-lactam amide and natural D-Ala-D-Ala induces rapid Ser-OH nucleophilic ring opening to form a kinetically inert penicilloyl-enzyme [[covalent ester|real-pharm-atoms]] (1.35 A C-O bond; deacylation half-life hours). Causes lethal osmotic lysis in walled [[E. coli|real-bacterium]] and [[Gram-positive|real-gram-positive]] cells, with zero target in [[Mycoplasma|real-mycoplasma]], [[viruses|viruses]], or [[human cells|real-cell]].',
        from: [
          { nodeId: 'peptidoglycan', label: 'D-Ala-D-Ala Mimicry', cargo: 'Beta-lactam substrate match' },
          { nodeId: 'real-pharm-atoms', label: '1.35 A Covalent Ester', cargo: 'Trapped Ser-penicilloyl bond' }
        ],
        to: [
          { nodeId: 'real-pharm-pbp', label: 'PBP Explorer Node', cargo: 'PDB 1PWC covalent trap' },
          { nodeId: 'real-bacterium', label: 'Bactericidal Wall Lysis', cargo: 'Osmotic rupture of E. coli' }
        ]
      },
      es: {
        subtitle: 'Transpeptidasa PBP atrapada covalentemente por penicilina G (PDB 1PWC)',
        simple:
          'La penicilina G se fija permanentemente a la serina activa de la [[transpeptidasa PBP|real-pharm-pbp]], deteniendo el cosido del [[peptidoglicano|peptidoglycan]] en [[E. coli|real-bacterium]] sin tocar al [[Mycoplasma|real-mycoplasma]] sin pared ni a las [[células humanas|real-cell]].',
        story:
          'En el periplasma bacteriano, la proteína fijadora de penicilina ([[PBP|real-pharm-pbp]], PDB 1PWC) usa una serina nucleofílica para escindir extremos D-Ala–D-Ala y coser cadenas vecinas de [[peptidoglicano|peptidoglycan]]. La penicilina G encaja su tenso anillo betalactámico de cuatro átomos en esa misma hendidura. Al atacar la serina el carbonilo betalactámico, el anillo se abre formando un [[éster covalente peniciloil-serina|real-pharm-atoms]] de ~0,135 nanómetros resistente a la hidrólisis durante horas, inutilizando la pared hasta la ruptura osmótica.',
        blueprint: {
          role: 'Complejo covalente suicida enzima–inhibidor que anula la transpeptidación del peptidoglicano bacteriano',
          arrivesFrom: 'Penicilina G difundida por porinas hacia las enzimas [[PBP|real-pharm-pbp]] del periplasma bacteriano',
          inside: 'Surco activo DD-peptidasa (PDB 1PWC) donde Ser-OH abre el anillo betalactámico formando un éster covalente C–O de 1,35 Å',
          deliversTo: 'Cese del cosido del [[peptidoglicano|peptidoglycan]], avance de autolisinas y lisis bactericida de [[E. coli|real-bacterium]]',
          loop: 'Las bacterias resistentes burlan este bloqueo mediante betalactamasas que rompen el anillo antes o bombas de expulsión AcrB'
        },
        scientific:
          'DD-transpeptidasa bacteriana PBP acilada covalentemente por penicilina G (cristalografía PDB 1PWC; [[nodo PBP|real-pharm-pbp]]). La mímica estructural entre la amida betalactámica tensa y D-Ala–D-Ala induce apertura nucleofílica por Ser-OH originando un [[éster covalente|real-pharm-atoms]] peniciloil-enzima (enlace C–O 1,35 Å; vida media de desacilación de horas). Provoca lisis osmótica en [[E. coli|real-bacterium]] y [[Gram positivos|real-gram-positive]], sin diana en [[Mycoplasma|real-mycoplasma]], [[virus|viruses]] ni [[células humanas|real-cell]].',
        from: [
          { nodeId: 'peptidoglycan', label: 'Mímica de D-Ala–D-Ala', cargo: 'Ajuste sustrato betalactámico' },
          { nodeId: 'real-pharm-atoms', label: 'Éster covalente 1,35 Å', cargo: 'Enlace Ser–peniciloílo fijo' }
        ],
        to: [
          { nodeId: 'real-pharm-pbp', label: 'Nodo Explorador PBP', cargo: 'Trampa covalente PDB 1PWC' },
          { nodeId: 'real-bacterium', label: 'Lisis bactericida de pared', cargo: 'Estallido osmótico de E. coli' }
        ]
      }
    },

    ribo_70s: {
      en: {
        subtitle: 'Bacterial 70S Ribosome Target (50S + 30S Subunits, ~2.5 MDa)',
        simple:
          'Every bacterium, including walled [[E. coli|real-bacterium]], wall-less [[Mycoplasma|real-mycoplasma]], and intracellular [[Chlamydia|real-chlamydia]], builds [[proteins|protein]] on compact 2.5-megadalton 70S [[ribosomes|ribosome]] structurally distinct from human [[80S ribosomes|real-cd-ribo80]].',
        story:
          'Assembled from a 30S small subunit (16S rRNA plus 21 proteins) and a 50S large subunit (23S and 5S rRNAs plus 33 proteins), the bacterial 70S [[ribosome|ribosome]] translates messenger [[RNA|rna]] into growing [[polypeptides|polypeptide]] across every prokaryotic pathogen on the bench. Because billions of years of evolutionary divergence separate bacterial 16S/23S rRNA pockets from human 18S/28S rRNA inside cytosolic [[80S ribosomes|real-cd-ribo80]], antibiotics strike two distinct bacterial vulnerabilities simultaneously: [[macrolides|real-pharm-macrolide]] plug the 50S exit tunnel while [[tetracyclines|real-pharm-tetra]] jam the 30S decoding A-site.',
        blueprint: {
          role: 'Universal ~21 nm prokaryotic translational nanomachine providing two conserved antibiotic targets absent in viruses and divergent in humans',
          arrivesFrom: 'Bacterial mRNA transcripts, charged tRNAs, and [[amino acids|amino-acid]] inside [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], and [[Chlamydia|real-chlamydia]]',
          inside: '2.5 MDa 70S assembly pairing the 30S decoding A-site ([[PDB 1HNW|real-pharm-tetra]]) with the 50S peptidyl-transferase exit tunnel ([[PDB 4V7U|real-pharm-macrolide]])',
          deliversTo: 'Complete protein-synthesis arrest across all three bacterial bench species while human [[80S ribosomes|real-cd-ribo80]] keep running smoothly',
          loop: 'Because viruses possess zero 70S ribosomes of their own, targeting 70S translation halts bacteria broadly without ever affecting viral replication'
        },
        scientific:
          'Prokaryotic 70S [[ribosome|ribosome]] (~2.5 MDa, ~21 nm diameter; 30S subunit [16S rRNA + 21 proteins] + 50S subunit [23S/5S rRNA + 33 proteins]) conserved across [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], and [[Rickettsia|real-rickettsia]]. Structural divergence from eukaryotic ~4.3 MDa [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0) enables selective clinical inhibition at both the 50S 23S rRNA exit tunnel ([[macrolides|real-pharm-macrolide]], PDB 4V7U) and the 30S 16S rRNA A-site ([[tetracyclines|real-pharm-tetra]], PDB 1HNW).',
        from: [
          { nodeId: 'ribosome', label: 'Prokaryotic 70S Core', cargo: '2.5 MDa 16S/23S ribozyme' },
          { nodeId: 'prokaryote', label: 'Universal Bacterial Target', cargo: 'E. coli, Mycoplasma, Chlamydia' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: '50S Exit Tunnel Block', cargo: 'PDB 4V7U macrolide site' },
          { nodeId: 'real-pharm-tetra', label: '30S A-Site Block', cargo: 'PDB 1HNW tetracycline site' }
        ]
      },
      es: {
        subtitle: 'Ribosoma bacteriano 70S diana (subunidades 50S + 30S, ~2,5 MDa)',
        simple:
          'Toda bacteria —[[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] sin pared y [[Chlamydia|real-chlamydia]] intracelular— fabrica [[proteínas|protein]] en [[ribosomas|ribosome]] 70S compactos de 2,5 megadaltons, distintos de los [[ribosomas 80S|real-cd-ribo80]] humanos.',
        story:
          'Ensamblado con una subunidad pequeña 30S (ARNr 16S y 21 proteínas) y una grande 50S (ARNr 23S/5S y 33 proteínas), el [[ribosoma|ribosome]] bacteriano 70S traduce [[ARN|rna]] mensajero en [[polipéptidos|polypeptide]] en los tres patógenos bacterianos del banco. Gracias a miles de millones de años de divergencia respecto al ARNr 18S/28S de los [[ribosomas 80S|real-cd-ribo80]] humanos, los antibióticos explotan dos puntos vulnerables distintos: los [[macrólidos|real-pharm-macrolide]] taponan el túnel de salida 50S y las [[tetraciclinas|real-pharm-tetra]] bloquean el sitio A decodificador 30S.',
        blueprint: {
          role: 'Nanomáquina traduccional procariota universal (~21 nm) con dos dianas antibióticas ausentes en virus y divergentes en humanos',
          arrivesFrom: 'ARNm bacteriano, ARNt cargados y [[aminoácidos|amino-acid]] en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]]',
          inside: 'Complejo 70S de 2,5 MDa que une el sitio A 30S ([[PDB 1HNW|real-pharm-tetra]]) con el túnel de salida 50S ([[PDB 4V7U|real-pharm-macrolide]])',
          deliversTo: 'Paro completo de la síntesis proteica en las tres bacterias del banco mientras los [[ribosomas 80S|real-cd-ribo80]] humanos siguen activos',
          loop: 'Como los virus carecen de ribosomas 70S propios, inhibir esta maquinaria combate bacterias de amplio espectro sin afectar virus'
        },
        scientific:
          '[[Ribosoma|ribosome]] procariota 70S (~2,5 MDa, ~21 nm; subunidad 30S [ARNr 16S + 21 proteínas] y 50S [ARNr 23S/5S + 33 proteínas]) conservado en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]]. Su divergencia respecto al [[ribosoma 80S|real-cd-ribo80]] humano (~4,3 MDa, PDB 4UG0) habilita bloqueo selectivo en el túnel 50S ([[macrólidos|real-pharm-macrolide]], PDB 4V7U) y el sitio A 30S ([[tetraciclinas|real-pharm-tetra]], PDB 1HNW).',
        from: [
          { nodeId: 'ribosome', label: 'Núcleo procariota 70S', cargo: 'Ribozima 16S/23S de 2,5 MDa' },
          { nodeId: 'prokaryote', label: 'Diana bacteriana universal', cargo: 'E. coli, Mycoplasma, Chlamydia' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: 'Bloqueo túnel 50S', cargo: 'Sitio macrólido PDB 4V7U' },
          { nodeId: 'real-pharm-tetra', label: 'Bloqueo sitio A 30S', cargo: 'Sitio tetraciclina PDB 1HNW' }
        ]
      }
    },

    macrolide_tunnel: {
      en: {
        subtitle: 'Macrolide Plugging 50S Exit Tunnel (Erythromycin PDB 4V7U)',
        simple:
          'Erythromycin and azithromycin wedge tightly inside the bacterial 50S [[ribosome|ribosome]] exit tunnel next to 23S rRNA base A2058, halting nascent [[polypeptide|polypeptide]] growth across [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], and [[Chlamydia|real-chlamydia]].',
        story:
          'Deep inside the large 50S subunit of the bacterial 70S [[ribosome|ribosome]], every newly forged [[polypeptide|polypeptide]] must thread down a narrow ten-nanometer exit tunnel lined with ribosomal [[RNA|rna]]. Macrolide antibiotics such as erythromycin and azithromycin diffuse into that corridor and anchor their desosamine sugar onto bacterial 23S rRNA adenine A2058 (PDB 4V7U). Wedged tightly across the lumen, the macrolide ring blocks emerging chains after just a few residues and forces peptidyl-tRNA drop-off, halting bacterial growth cleanly while human [[80S ribosomes|real-cd-ribo80]] (which carry guanine G2058 instead) reject the drug.',
        blueprint: {
          role: 'Selective 50S ribosomal exit-tunnel plug arresting nascent polypeptide elongation in bacterial pathogens',
          arrivesFrom: 'Diffusing erythromycin or azithromycin lactone rings entering bacterial 50S large subunits (including intracellular [[Chlamydia|real-chlamydia]])',
          inside: 'Bacterial 23S rRNA domain V pocket at A2058/A2059 (PDB 4V7U) occluding the nascent [[polypeptide|polypeptide]] tunnel near the PTC',
          deliversTo: 'Arrested bacterial translation across [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], and [[Chlamydia|real-chlamydia]] with human [[80S|real-cd-ribo80]] spared',
          loop: 'A single bacterial mutation swapping A2058 -> G2058 mimics the human 28S rRNA residue and immediately confers high-level macrolide resistance'
        },
        scientific:
          'Bacterial 70S/50S [[ribosome|ribosome]] nascent-peptide exit tunnel bound to erythromycin (crystal structure PDB 4V7U; [[macrolide node|real-pharm-macrolide]]). Forms specific hydrogen bonds between the macrolide C5 desosamine amino sugar and bacterial 23S rRNA A2058/A2059 ~1 nm downstream of the peptidyl-transferase center, sterically arresting [[polypeptide|polypeptide]] extrusion across [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], and [[Chlamydia|real-chlamydia]]. Eukaryotic [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0) harbor 28S rRNA G2058, sterically blocking macrolide binding.',
        from: [
          { nodeId: 'ribosome', label: 'Bacterial 50S Tunnel', cargo: '23S rRNA A2058 pocket' },
          { nodeId: 'rna', label: '23S rRNA Divergence', cargo: 'Bacterial A2058 vs Human G2058' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: 'Macrolide Explorer Node', cargo: 'PDB 4V7U exit-tunnel plug' },
          { nodeId: 'real-mycoplasma', label: 'Atypical Pathogen Cure', cargo: 'Halts Mycoplasma & Chlamydia' }
        ]
      },
      es: {
        subtitle: 'Macrólido taponando el túnel 50S (Eritromicina PDB 4V7U)',
        simple:
          'La eritromicina y la azitromicina se encajan en el túnel de salida del [[ribosoma|ribosome]] 50S bacteriano junto a la base A2058 del ARNr 23S, frenando el [[polipéptido|polypeptide]] naciente en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]].',
        story:
          'Dentro de la subunidad grande 50S del [[ribosoma|ribosome]] bacteriano 70S, cada [[polipéptido|polypeptide]] recién formado debe avanzar por un estrecho túnel de salida de diez nanómetros revestido de [[ARN|rna]] ribosómico. Los macrólidos como eritromicina y azitromicina difunden por ese conducto y anclan su azúcar desosamina a la adenina A2058 del ARNr 23S (PDB 4V7U). Encajado en la luz, el anillo frena la cadena naciente tras pocos residuos, deteniendo a la bacteria mientras los [[ribosomas 80S|real-cd-ribo80]] humanos —con guanina G2058— repelen el fármaco.',
        blueprint: {
          role: 'Tapón selectivo del túnel de salida ribosomal 50S que detiene la elongación polipeptídica en bacterias patógenas',
          arrivesFrom: 'Anillos lactónicos de eritromicina o azitromicina penetrando subunidades 50S bacterianas (incluida [[Chlamydia|real-chlamydia]] intracelular)',
          inside: 'Bolsillo del dominio V del ARNr 23S bacteriano en A2058/A2059 (PDB 4V7U) obstruyendo el túnel de [[polipéptidos|polypeptide]] cerca del PTC',
          deliversTo: 'Traducción detenida en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]] con [[80S|real-cd-ribo80]] humano intacto',
          loop: 'Una sola mutación bacteriana A2058 → G2058 imita el residuo humano del ARNr 28S y confiere resistencia inmediata a macrólidos'
        },
        scientific:
          'Túnel de salida polipeptídica del [[ribosoma|ribosome]] bacteriano 70S/50S unido a eritromicina (cristalografía PDB 4V7U; [[nodo macrólido|real-pharm-macrolide]]). El azúcar desosamina en C5 forma puentes H con A2058/A2059 del ARNr 23S a ~1 nm del centro peptidil transferasa, obstruyendo la extrusión del [[polipéptido|polypeptide]] en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]] y [[Chlamydia|real-chlamydia]]. Los [[ribosomas 80S|real-cd-ribo80]] humanos (PDB 4UG0) presentan G2058 en ARNr 28S, excluyendo estéricamente al fármaco.',
        from: [
          { nodeId: 'ribosome', label: 'Túnel 50S bacteriano', cargo: 'Bolsillo A2058 del ARNr 23S' },
          { nodeId: 'rna', label: 'Divergencia ARNr 23S', cargo: 'A2058 bacteriana vs G2058 humana' }
        ],
        to: [
          { nodeId: 'real-pharm-macrolide', label: 'Nodo Explorador Macrólido', cargo: 'Tapón de túnel PDB 4V7U' },
          { nodeId: 'real-mycoplasma', label: 'Cura de patógenos atípicos', cargo: 'Frena Mycoplasma y Chlamydia' }
        ]
      }
    },

    tetra_asite: {
      en: {
        subtitle: 'Tetracycline Blocking 30S Decoding A-Site (PDB 1HNW)',
        simple:
          'Tetracycline and doxycycline anchor onto the small 30S bacterial [[ribosome|ribosome]] via a [[magnesium|atom-mg]] bridge, physically occupying the decoding A-site so incoming aminoacyl-tRNAs bounce away and protein synthesis stops.',
        story:
          'Parked on the small 30S subunit of the bacterial 70S [[ribosome|ribosome]], four-ring tetracycline uses a chelated [[Mg2+|atom-mg]] ion to lock against the negatively charged sugar-phosphate backbone of 16S rRNA helices h31 and h34 (PDB 1HNW). That exact niche sits squarely across the decoding A-site where every new aminoacyl-tRNA must match its anticodon against the mRNA message. With tetracycline occupying the landing pad, incoming tRNAs clash sterically and fail to deliver their [[amino acids|amino-acid]], stopping [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], and [[Rickettsia|real-rickettsia]] while human [[80S ribosomes|real-cd-ribo80]] remain unaffected.',
        blueprint: {
          role: 'Mg2+-coordinated 30S decoding-center blocker sterically excluding aminoacyl-tRNAs from bacterial protein synthesis',
          arrivesFrom: 'Lipophilic four-ring tetracycline/doxycycline molecules plus cytosolic [[Mg2+|atom-mg]] entering bacterial cells',
          inside: 'Bacterial 30S 16S rRNA h31/h34 Tet-1 pocket (PDB 1HNW) blocking EF-Tu ternary tRNA docking inside the A-site',
          deliversTo: 'Bacteriostatic elongation halt across [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], and [[Rickettsia|real-rickettsia]]',
          loop: 'Because calcium and magnesium chelates in milk can bind tetracycline in the gut, patients avoid dairy near dosing so the drug reaches bacteria'
        },
        scientific:
          'Bacterial 30S [[ribosome|ribosome]] small subunit complexed with tetracycline (crystal structure PDB 1HNW; [[tetracycline node|real-pharm-tetra]]). Primary site Tet-1 coordinates a divalent [[Mg2+|atom-mg]] ion bridging 16S rRNA h34 phosphate oxygens (G1197/G1198) and loop h31 (C1054), sterically colliding with the anticodon stem-loop of A-site aminoacyl-tRNA. Arrests [[polypeptide|polypeptide]] elongation broadly across [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]], and [[Rickettsia|real-rickettsia]] while sparing eukaryotic [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0).',
        from: [
          { nodeId: 'atom-mg', label: 'Chelated Mg2+ Bridge', cargo: 'Anchors drug to 16S rRNA' },
          { nodeId: 'ribosome', label: 'Bacterial 30S A-Site', cargo: 'h31/h34 decoding groove' }
        ],
        to: [
          { nodeId: 'real-pharm-tetra', label: 'Tetracycline Explorer', cargo: 'PDB 1HNW A-site clash' },
          { nodeId: 'real-chlamydia', label: 'Intracellular Therapy', cargo: 'Halts Chlamydia & Rickettsia' }
        ]
      },
      es: {
        subtitle: 'Tetraciclina bloqueando el sitio A 30S (PDB 1HNW)',
        simple:
          'La tetraciclina y la doxiciclina se anclan en la subunidad 30S del [[ribosoma|ribosome]] bacteriano mediante un puente de [[magnesio|atom-mg]], ocupando el sitio A para que los aminoacil-ARNt reboten y cese la síntesis proteica.',
        story:
          'Fijada en la subunidad pequeña 30S del [[ribosoma|ribosome]] bacteriano 70S, la tetraciclina de cuatro anillos emplea un ion [[Mg²⁺|atom-mg]] quelado para unirse a los fosfatos de las hélices h31 y h34 del ARNr 16S (PDB 1HNW). Ese nicho ocupa justo el sitio decodificador A donde debe aterrizar cada nuevo aminoacil-ARNt. Al encontrar el espacio bloqueado, los ARNt chocan estéricamente sin entregar sus [[aminoácidos|amino-acid]], frenando a [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]] sin dañar los [[ribosomas 80S|real-cd-ribo80]] humanos.',
        blueprint: {
          role: 'Bloqueador del centro decodificador 30S coordinado por Mg²⁺ que excluye estéricamente a los aminoacil-ARNt bacterianos',
          arrivesFrom: 'Moléculas tetracíclicas lipofílicas (tetraciclina/doxiciclina) e iones [[Mg²⁺|atom-mg]] entrando al citoplasma bacteriano',
          inside: 'Bolsillo Tet-1 en hélices h31/h34 del ARNr 16S en 30S (PDB 1HNW) impidiendo el acoplamiento ternario de ARNt en el sitio A',
          deliversTo: 'Detención bacteriostática de la elongación en [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]]',
          loop: 'Como el calcio y magnesio lácteos quelan la tetraciclina en el intestino, se evita tomarla con lácteos para asegurar su absorción'
        },
        scientific:
          'Subunidad pequeña 30S del [[ribosoma|ribosome]] bacteriano en complejo con tetraciclina (cristalografía PDB 1HNW; [[nodo tetraciclina|real-pharm-tetra]]). El sitio primario Tet-1 coordina un ion [[Mg²⁺|atom-mg]] entre fosfatos de h34 (G1197/G1198) y el bucle h31 (C1054) del ARNr 16S, chocando con el tallo anticodón del aminoacil-ARNt entrante. Frena el crecimiento de [[E. coli|real-bacterium]], [[Mycoplasma|real-mycoplasma]], [[Chlamydia|real-chlamydia]] y [[Rickettsia|real-rickettsia]] respetando el [[ribosoma 80S|real-cd-ribo80]] humano (PDB 4UG0).',
        from: [
          { nodeId: 'atom-mg', label: 'Puente Mg²⁺ quelado', cargo: 'Fija el fármaco al ARNr 16S' },
          { nodeId: 'ribosome', label: 'Sitio A 30S bacteriano', cargo: 'Surco decodificador h31/h34' }
        ],
        to: [
          { nodeId: 'real-pharm-tetra', label: 'Explorador Tetraciclina', cargo: 'Bloqueo sitio A PDB 1HNW' },
          { nodeId: 'real-chlamydia', label: 'Terapia intracelular', cargo: 'Frena Chlamydia y Rickettsia' }
        ]
      }
    },

    ribo_80s_safe: {
      en: {
        subtitle: 'Spared Human Cytosolic 80S Ribosome (PDB 4UG0, ~4.3 MDa)',
        simple:
          'Standing right beside blocked bacterial 70S complexes, the larger human cytosolic [[80S ribosome|real-cd-ribo80]] runs untouched by [[macrolides|real-pharm-macrolide]] and [[tetracyclines|real-pharm-tetra]], and also translates [[mRNA-LNP|real-pharm-mrna-lnp]] vaccine Spike antigen.',
        story:
          'Comparing the 4.3-megadalton human [[80S ribosome|real-cd-ribo80]] (PDB 4UG0) directly beside bacterial 70S reveals two pillars of modern medicine in one molecule. First, because human 28S rRNA places guanine G2058 inside its exit tunnel and reshapes its 18S rRNA decoding groove, antibacterial [[macrolides|real-pharm-macrolide]] and [[tetracyclines|real-pharm-tetra]] cannot wedge inside, keeping human protein synthesis safe throughout antibiotic therapy. Second, when an [[mRNA-LNP vaccine|real-pharm-mrna-lnp]] releases transient Spike mRNA into the cytosol, these exact 80S ribosomes translate prefusion Spike antigen cleanly outside the intact [[nucleus|nucleus]] to train [[IgG|real-imm-igg]] immunity.',
        blueprint: {
          role: 'Dual-role ~30 nm eukaryotic translational hub spared by bacterial antibiotics and harnessed by cytosolic mRNA-LNP vaccines',
          arrivesFrom: 'Host cytosolic mRNAs (or escaped [[m1Psi vaccine mRNA|real-pharm-mrna-lnp]]), charged tRNAs, and [[amino acids|amino-acid]]',
          inside: '4.3 MDa human 80S complex (PDB 4UG0; 60S with G2058 exit tunnel + 40S decoding center) actively extruding native or vaccine [[polypeptides|polypeptide]]',
          deliversTo: 'Uninterrupted human cell survival during antibiotic treatment plus transient Spike antigen priming [[IgG|real-imm-igg]] and [[CD8+ T-cells|real-imm-tcr-mhci]]',
          loop: 'Links Phase 15 Central Dogma directly to Phase 18 Medicine: one ribosomal RNA difference makes antibiotics safe and vaccines effective'
        },
        scientific:
          'Human cytoplasmic [[80S ribosome|real-cd-ribo80]] (cryo-EM structure PDB 4UG0; ~4.3 MDa, ~28-30 nm comprising 40S [18S rRNA + 33 proteins] and 60S [28S/5.8S/5S rRNA + 47 proteins] subunits). Exocyclic N2 of 28S rRNA G2058 sterically rejects [[macrolides|real-pharm-macrolide]] (PDB 4V7U) while 18S rRNA geometry lowers [[tetracycline|real-pharm-tetra]] (PDB 1HNW) binding, preserving host translation. In [[mRNA-LNP vaccination|real-pharm-mrna-lnp]], cytosolic 80S ribosomes translate N1-methylpseudouridine Spike [[mRNA|rna]] strictly outside the intact [[nucleus|nucleus]] to prime [[immune defense|real-immune]].',
        from: [
          { nodeId: 'real-central-dogma', label: 'Human Central Dogma', cargo: 'Eukaryotic 80S architecture' },
          { nodeId: 'real-pharm-mrna-lnp', label: 'Cytosolic Vaccine mRNA', cargo: 'Transient m1Psi template' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: '80S Explorer Node', cargo: 'PDB 4UG0 antibiotic-spared' },
          { nodeId: 'real-immune', label: 'Spike Antigen Priming', cargo: 'Trains IgG & CD8+ T-cells' }
        ]
      },
      es: {
        subtitle: 'Ribosoma citosólico humano 80S preservado (PDB 4UG0, ~4,3 MDa)',
        simple:
          'Junto a los ribosomas 70S bacterianos bloqueados, el [[ribosoma 80S|real-cd-ribo80]] humano trabaja sin verse afectado por [[macrólidos|real-pharm-macrolide]] ni [[tetraciclinas|real-pharm-tetra]], y además traduce la espícula de la [[vacuna ARNm-LNP|real-pharm-mrna-lnp]].',
        story:
          'Comparar el [[ribosoma 80S|real-cd-ribo80]] humano de 4,3 megadaltons (PDB 4UG0) al lado del 70S bacteriano reúne dos pilares de la medicina moderna en una sola estructura. Primero, como el ARNr 28S humano sitúa una guanina G2058 en el túnel de salida y remodela el surco 18S, los [[macrólidos|real-pharm-macrolide]] y [[tetraciclinas|real-pharm-tetra]] no encajan y dejan intacta la síntesis humana. Segundo, cuando una [[vacuna ARNm-LNP|real-pharm-mrna-lnp]] libera ARNm temporal al citosol, estos mismos ribosomas 80S traducen espícula fuera del [[núcleo|nucleus]] intacto para entrenar la inmunidad [[IgG|real-imm-igg]].',
        blueprint: {
          role: 'Centro traduccional eucariota (~30 nm) de doble función: inmune a antibióticos bacterianos y motor de las vacunas ARNm-LNP',
          arrivesFrom: 'ARNm citosólicos propios (o [[ARNm vacunal m¹Ψ|real-pharm-mrna-lnp]]), ARNt cargados y [[aminoácidos|amino-acid]]',
          inside: 'Complejo humano 80S de 4,3 MDa (PDB 4UG0; túnel 60S con G2058 + centro 40S) extruyendo [[polipéptidos|polypeptide]] propios o vacunales',
          deliversTo: 'Supervivencia celular humana durante antibióticos y producción transitoria de espícula para entrenar [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]]',
          loop: 'Conecta el Dogma Central de la Fase 15 con la Medicina de la Fase 18: una diferencia de ARNr hace seguros los antibióticos y útiles las vacunas'
        },
        scientific:
          '[[Ribosoma 80S|real-cd-ribo80]] citoplasmático humano (crio-EM PDB 4UG0; ~4,3 MDa, ~28–30 nm: 40S [ARNr 18S + 33 proteínas] y 60S [ARNr 28S/5,8S/5S + 47 proteínas]). El grupo N2 de G2058 en el ARNr 28S repele los [[macrólidos|real-pharm-macrolide]] (PDB 4V7U) y la geometría 18S reduce la afinidad por [[tetraciclinas|real-pharm-tetra]] (PDB 1HNW). En la [[vacunación ARNm-LNP|real-pharm-mrna-lnp]], traduce [[ARNm|rna]] de espícula con m¹Ψ estrictamente fuera del [[núcleo|nucleus]] intacto activando la [[defensa inmunitaria|real-immune]].',
        from: [
          { nodeId: 'real-central-dogma', label: 'Dogma Central humano', cargo: 'Arquitectura eucariota 80S' },
          { nodeId: 'real-pharm-mrna-lnp', label: 'ARNm vacunal citosólico', cargo: 'Molde transitorio m¹Ψ' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Nodo Explorador 80S', cargo: 'PDB 4UG0 libre de antibiótico' },
          { nodeId: 'real-immune', label: 'Primado con espícula', cargo: 'Entrena IgG y linfocitos CD8⁺' }
        ]
      }
    },

    rdrp_remdesivir: {
      en: {
        subtitle: 'SARS-CoV-2 RdRp Stalled at i+3 by Remdesivir-TP (PDB 7BV2)',
        simple:
          '[[Remdesivir-TP|real-pharm-rdrp]] enters the active site of [[SARS-CoV-2|real-coronavirus]] RNA-dependent RNA polymerase (RdRp) mimicking natural adenosine, then physically jams translocation three bases downstream via its extra 1\'-CN cyano group.',
        story:
          'Unlike [[human cells|real-cell]], which transcribe [[RNA|rna]] exclusively from nuclear [[DNA|dna]], [[SARS-CoV-2|real-coronavirus]] copies its 30-kilobase genome directly from RNA to RNA using its viral nsp12-nsp7-nsp8 [[RdRp|real-pharm-rdrp]] complex (PDB 7BV2). Active Remdesivir-triphosphate mimics ATP closely enough to slip past viral selection and form a normal phosphodiester link because its 3\'-OH remains intact. Three nucleotides later (position i+3), however, its projecting [[1\'-cyano (-CN) carbon-nitrogen prong|real-pharm-atoms]] collides directly with nsp12 residue Ser861, locking the RNA duplex in place and halting coronavirus replication.',
        blueprint: {
          role: 'Virus-specific RNA-dependent RNA polymerase blocked via i+3 steric delayed chain termination by Remdesivir-TP',
          arrivesFrom: 'Intracellularly activated Remdesivir-triphosphate, viral (+)ss[[RNA|rna]] template, and catalytic [[Mg2+|atom-mg]] ions',
          inside: 'SARS-CoV-2 nsp12-nsp7-nsp8 complex (PDB 7BV2) where incorporated RMP advances three steps before 1\'-CN collides with Ser861',
          deliversTo: 'Halted [[SARS-CoV-2|real-coronavirus]] genome copying, reduced viral shedding, and preserved human nuclear transcription',
          loop: 'Delayed stalling at i+3 buries Remdesivir three bases inside the duplex, shielding it partially from coronavirus nsp14 exonuclease excision'
        },
        scientific:
          '[[SARS-CoV-2|real-coronavirus]] nsp12-nsp7-nsp8 [[RdRp|real-pharm-rdrp]] holoenzyme in complex with template-primer [[RNA|rna]] and covalently incorporated Remdesivir monophosphate (cryo-EM PDB 7BV2). Retaining a canonical 3\'-OH, RMP allows three subsequent [[nucleotide|nucleotide]] incorporations before its [[1\'-CN substituent|real-pharm-atoms]] experiences a steric translocation barrier against nsp12 Ser861 at register i+3. Selective discrimination by human nuclear RNA Pol II and mitochondrial POLRMT preserves [[human cell|real-cell]] transcription.',
        from: [
          { nodeId: 'real-coronavirus', label: 'Viral RNA Polymerase', cargo: 'Unique RdRp nsp12-7-8 target' },
          { nodeId: 'nucleotide', label: 'Adenosine Analog Drug', cargo: 'Remdesivir-TP + 1-prime CN' }
        ],
        to: [
          { nodeId: 'real-pharm-rdrp', label: 'RdRp Explorer Node', cargo: 'PDB 7BV2 i+3 Ser861 clash' },
          { nodeId: 'real-pharm-atoms', label: '1-Prime CN Steric Prong', cargo: 'Atomic translocation block' }
        ]
      },
      es: {
        subtitle: 'RdRp de SARS-CoV-2 frenada en i+3 por remdesivir-TP (PDB 7BV2)',
        simple:
          'El [[remdesivir-TP|real-pharm-rdrp]] entra en la ARN polimerasa dependiente de ARN (RdRp) del [[SARS-CoV-2|real-coronavirus]] disfrazado de adenosina y bloquea físicamente la translocación tres bases después con su grupo 1\'-CN.',
        story:
          'A diferencia de las [[células humanas|real-cell]], que transcriben [[ARN|rna]] solo a partir de [[ADN|dna]] nuclear, el [[SARS-CoV-2|real-coronavirus]] copia su genoma directamente de ARN a ARN mediante su complejo viral [[RdRp|real-pharm-rdrp]] nsp12–nsp7–nsp8 (PDB 7BV2). El remdesivir trifosfato imita al ATP y se enlaza con normalidad gracias a conservar el 3\'-OH. Sin embargo, tres nucleótidos después (posición i+3), su saliente [[1\'-ciano (-CN)|real-pharm-atoms]] choca directamente con el residuo Ser861 de nsp12, trabando el dúplex y frenando la replicación vírica.',
        blueprint: {
          role: 'ARN polimerasa dependiente de ARN exclusiva del virus bloqueada por terminación diferida estérica en i+3 por remdesivir-TP',
          arrivesFrom: 'Remdesivir trifosfato activado intracelularmente, molde de [[ARN|rna]](+) vírico e iones catalíticos [[Mg²⁺|atom-mg]]',
          inside: 'Complejo nsp12–nsp7–nsp8 de SARS-CoV-2 (PDB 7BV2) donde RMP avanza tres pasos antes del choque de 1\'-CN contra Ser861',
          deliversTo: 'Replicación frenada del genoma de [[SARS-CoV-2|real-coronavirus]], menor carga vírica y transcripción humana intacta',
          loop: 'El paro diferido en i+3 oculta al remdesivir tres bases adentro del dúplex, protegiéndolo parcialmente de la exonucleasa vírica nsp14'
        },
        scientific:
          'Holoenzima [[RdRp|real-pharm-rdrp]] nsp12–nsp7–nsp8 de [[SARS-CoV-2|real-coronavirus]] unida a un dúplex de [[ARN|rna]] con monofosfato de remdesivir incorporado (crio-EM PDB 7BV2). Al conservar el 3\'-OH, permite sumar tres [[nucleótidos|nucleotide]] hasta que el [[grupo 1\'-CN|real-pharm-atoms]] encuentra una barrera estérica frente a Ser861 de nsp12 en i+3. La discriminación por ARN Pol II humana y POLRMT preserva las [[células humanas|real-cell]].',
        from: [
          { nodeId: 'real-coronavirus', label: 'ARN polimerasa vírica', cargo: 'Diana única RdRp nsp12–7–8' },
          { nodeId: 'nucleotide', label: 'Análogo de adenosina', cargo: 'Remdesivir-TP + 1\'-CN' }
        ],
        to: [
          { nodeId: 'real-pharm-rdrp', label: 'Nodo Explorador RdRp', cargo: 'Choque Ser861 i+3 PDB 7BV2' },
          { nodeId: 'real-pharm-atoms', label: 'Grupo estérico 1\'-CN', cargo: 'Bloqueo atómico de avance' }
        ]
      }
    },

    hiv_rt_azt: {
      en: {
        subtitle: 'HIV-1 Reverse Transcriptase Halted by AZT-TP (PDB 3V4I)',
        simple:
          '[[AZT-TP|real-pharm-hivrt]] tricks [[HIV-1|real-hiv]] Reverse Transcriptase into inserting a defective thymidine missing its 3\'-OH oxygen hook, ending viral [[DNA|dna]] synthesis immediately on the spot.',
        story:
          'To integrate permanently into a human lymphocyte chromosome, retrovirus [[HIV-1|real-hiv]] depends on its heterodimeric p66/p51 [[Reverse Transcriptase|real-pharm-hivrt]] (PDB 3V4I) to transcribe viral [[RNA|rna]] backward into double-stranded [[DNA|dna]]. Active AZT-triphosphate (zidovudine-TP) looks nearly identical to normal dTTP, except its reactive 3\'-OH hydroxyl has been replaced by a chemically inert [[3\'-N3 azido group|real-pharm-atoms]]. Once HIV-1 RT adds AZT to the growing primer tip, no incoming [[nucleotide|nucleotide]] can form the next phosphodiester bond, halting proviral synthesis cold while proofreading human DNA polymerases reject AZT-TP.',
        blueprint: {
          role: 'Retroviral reverse-transcription polymerase halted by immediate obligate 3\'-OH-less chain termination with AZT-TP',
          arrivesFrom: 'Host-phosphorylated AZT-triphosphate (3\'-azido-dTTP), [[HIV-1|real-hiv]] RNA/DNA template, and catalytic [[Mg2+|atom-mg]]',
          inside: 'HIV-1 p66/p51 RT polymerase palm (PDB 3V4I) capped with a terminal 3\'-N3 azido nucleotide unable to attack the next dNTP phosphate',
          deliversTo: 'Aborted proviral [[DNA|dna]] formation preventing [[HIV-1|real-hiv]] genome integration while sparing host nuclear replication',
          loop: 'Modern HIV therapy combines nucleoside chain terminators with integrase and protease inhibitors so single RT mutations cannot escape'
        },
        scientific:
          '[[HIV-1|real-hiv]] p66/p51 [[Reverse Transcriptase|real-pharm-hivrt]] crystallized with an AZT-MP-terminated DNA primer-template duplex (PDB 3V4I). Phosphorylated intracellularly by thymidine kinases to 3\'-azido-3\'-deoxythymidine triphosphate (AZT-TP), it is accepted by error-prone HIV-1 RT lacking 3\' -> 5\' exonuclease proofreading. Absence of the deoxyribose 3\'-OH (replaced by [[3\'-N3|real-pharm-atoms]]) eliminates nucleophilic attack on the next incoming dNTP alpha-[[phosphorus|atom-p]], causing immediate obligate chain termination while human DNA polymerases selectively exclude AZT-TP.',
        from: [
          { nodeId: 'real-hiv', label: 'HIV-1 Reverse Transcriptase', cargo: 'Virus-only RNA -> DNA enzyme' },
          { nodeId: 'nucleotide', label: '3-Prime Azido Thymidine', cargo: 'AZT-TP missing 3-prime OH' }
        ],
        to: [
          { nodeId: 'real-pharm-hivrt', label: 'HIV-RT Explorer Node', cargo: 'PDB 3V4I obligate terminator' },
          { nodeId: 'real-pharm-atoms', label: '3-Prime N3 Azido Group', cargo: 'Blocks phosphodiester link' }
        ]
      },
      es: {
        subtitle: 'Transcriptasa inversa de VIH-1 frenada por AZT-TP (PDB 3V4I)',
        simple:
          'El [[AZT-TP|real-pharm-hivrt]] engaña a la transcriptasa inversa del [[VIH-1|real-hiv]] para insertar una timidina defectuosa sin gancho 3\'-OH, terminando de inmediato la síntesis del [[ADN|dna]] vírico.',
        story:
          'Para integrarse en un cromosoma humano, el retrovirus [[VIH-1|real-hiv]] depende de su [[transcriptasa inversa|real-pharm-hivrt]] p66/p51 (PDB 3V4I) para copiar su [[ARN|rna]] hacia atrás en [[ADN|dna]] bicatenario. El AZT trifosfato (zidovudina-TP) imita al dTTP normal, salvo que reemplaza el hidroxilo reactivo 3\'-OH por un [[grupo 3\'-azido (-N₃)|real-pharm-atoms]] químicamente inerte. En cuanto la RT del VIH-1 incorpora AZT en el extremo naciente, ningún nuevo [[nucleótido|nucleotide]] puede formar el siguiente enlace fosfodiéster, bloqueando el ADN proviral mientras las polimerasas humanas lo rechazan.',
        blueprint: {
          role: 'Polimerasa retroviral detenida por terminación obligada inmediata sin 3\'-OH mediante AZT-TP',
          arrivesFrom: 'AZT trifosfato fosforilado por el huésped (3\'-azido-dTTP), molde ARN/ADN del [[VIH-1|real-hiv]] e iones [[Mg²⁺|atom-mg]]',
          inside: 'Palma catalítica p66/p51 de la RT de VIH-1 (PDB 3V4I) rematada por un nucleótido 3\'-N₃ incapaz de atacar al siguiente dNTP',
          deliversTo: 'Síntesis proviral de [[ADN|dna]] abortada que impide la integración del [[VIH-1|real-hiv]] preservando la replicación humana',
          loop: 'La terapia antirretroviral moderna combina análogos terminadores con inhibidores de integrasa y proteasa para impedir mutaciones de escape'
        },
        scientific:
          '[[Transcriptasa inversa|real-pharm-hivrt]] p66/p51 de [[VIH-1|real-hiv]] cristalizada con dúplex cebador-molde terminado en AZT-MP (PDB 3V4I). Fosforilado por timidina cinasas celulares a 3\'-azido-3\'-desoxitimidina trifosfato (AZT-TP), es incorporado por la RT viral sin corrección exonucleasa. La ausencia del 3\'-OH (reemplazado por [[3\'-N₃|real-pharm-atoms]]) anula el ataque nucleofílico al [[fósforo|atom-p]] α del dNTP entrante, causando terminación obligada inmediata mientras las ADN polimerasas humanas lo discriminan.',
        from: [
          { nodeId: 'real-hiv', label: 'Transcriptasa inversa VIH-1', cargo: 'Enzima viral ARN → ADN' },
          { nodeId: 'nucleotide', label: '3\'-azidotimidina', cargo: 'AZT-TP sin hidroxilo 3\'-OH' }
        ],
        to: [
          { nodeId: 'real-pharm-hivrt', label: 'Nodo Explorador VIH-RT', cargo: 'Terminador obligado PDB 3V4I' },
          { nodeId: 'real-pharm-atoms', label: 'Grupo azido 3\'-N₃', cargo: 'Impide enlace fosfodiéster' }
        ]
      }
    },

    mrna_lnp: {
      en: {
        subtitle: 'Ionizable 4-Lipid mRNA Nanoparticle (~90 nm LNP Carrier)',
        simple:
          'This ~90-nanometer [[mRNA-LNP|real-pharm-mrna-lnp]] is a protective four-lipid sphere that shields fragile synthetic Spike [[RNA|rna]] in blood and delivers it safely into a human cell\'s endosome.',
        story:
          'Naked messenger [[RNA|rna]] injected directly into tissue would be shredded within seconds by extracellular RNases and repelled by negatively charged [[plasma membranes|plasma-membrane]]. Lipid Nanoparticles solve both problems using four precision-tuned lipid ingredients: ionizable aminolipids that stay electrically neutral in blood (pH 7.4) to avoid toxicity, structural DSPC [[phospholipids|phospholipid]], stabilizing cholesterol, and outer PEG-lipids that prevent premature clumping. Roughly ninety nanometers across (matching a virus\'s scale without any infectious machinery), the LNP enters via endocytosis to unlock [[endosomal escape|real-pharm-mrna-lnp]] into the cytosol.',
        blueprint: {
          role: 'Engineered ~90 nm four-lipid delivery capsule shielding fragile synthetic mRNA through extracellular fluid into host endosomes',
          arrivesFrom: 'Microfluidic self-assembly of ionizable aminolipids, DSPC [[phospholipids|phospholipid]], cholesterol, PEG-lipids, and Spike [[RNA|rna]]',
          inside: 'Electron-dense lipid core complexing negatively charged [[m1Psi mRNA|real-pharm-mrna-lnp]] behind a neutral pH 7.4 outer stealth coat',
          deliversTo: 'Endocytic uptake across the [[plasma membrane|plasma-membrane]] into acidifying endosomes for cytosolic release onto [[80S ribosomes|real-cd-ribo80]]',
          loop: 'Because ionizable lipids stay neutral at physiological pH 7.4 and switch positive only at endosomal pH 5.5, they maximize delivery while minimizing toxicity'
        },
        scientific:
          'Four-component [[mRNA Lipid Nanoparticle|real-pharm-mrna-lnp]] (~80-100 nm diameter; ~50 mol% ionizable aminolipid with apparent pKa ~6.2-6.5, ~10 mol% DSPC [[phospholipid|phospholipid]], ~38.5 mol% cholesterol, and ~1.5 mol% PEG-lipid encapsulating ~4,200-nt Spike [[mRNA|rna]]). Neutral surface zeta potential at pH 7.4 minimizes systemic toxicity while ApoE adsorption facilitates LDL-receptor endocytosis across the human [[plasma membrane|plasma-membrane]], positioning the cargo for acid-triggered endosomal escape and cytosolic [[80S|real-cd-ribo80]] translation.',
        from: [
          { nodeId: 'phospholipid', label: '4-Lipid Nanoparticle Shell', cargo: 'Ionizable + DSPC + Chol + PEG' },
          { nodeId: 'rna', label: 'Encapsulated Spike mRNA', cargo: 'Protected from serum RNases' }
        ],
        to: [
          { nodeId: 'real-pharm-mrna-lnp', label: 'mRNA-LNP Explorer Node', cargo: '90 nm cytosolic delivery' },
          { nodeId: 'vesicle', label: 'Endocytic Entry Vesicle', cargo: 'Acidification & escape trigger' }
        ]
      },
      es: {
        subtitle: 'Nanopartícula lipídica ionizable de 4 lípidos (~90 nm, LNP)',
        simple:
          'Esta [[nanopartícula ARNm-LNP|real-pharm-mrna-lnp]] de ~90 nanómetros es una esfera protectora de cuatro lípidos que resguarda el frágil [[ARN|rna]] de espícula en la sangre y lo entrega en el endosoma de la célula humana.',
        story:
          'Un [[ARN|rna]] mensajero desnudo inyectado en el tejido sería destruido en segundos por ARNasas extracelulares y repelido por la [[membrana plasmática|plasma-membrane]] negativa. Las nanopartículas lipídicas resuelven ambos retos con cuatro ingredientes precisos: aminolípidos ionizables neutros en sangre (pH 7,4) para evitar toxicidad, [[fosfolípidos|phospholipid]] DSPC estructurales, colesterol estabilizador y lípidos PEG externos que evitan agregación. De unos noventa nanómetros —tamaño vírico sin maquinaria infecciosa—, entra por endocitosis para disparar el [[escape endosomal|real-pharm-mrna-lnp]].',
        blueprint: {
          role: 'Cápsula de entrega de ~90 nm y cuatro lípidos que protege el ARNm sintético en fluido extracelular hasta endosomas humanos',
          arrivesFrom: 'Autoensamblaje microfluídico de aminolípidos ionizables, [[fosfolípidos|phospholipid]] DSPC, colesterol, lípidos PEG y [[ARN|rna]] de espícula',
          inside: 'Núcleo lipídico denso que compacta [[ARNm m¹Ψ|real-pharm-mrna-lnp]] negativo tras una cubierta neutra a pH 7,4',
          deliversTo: 'Captura endocítica por la [[membrana plasmática|plasma-membrane]] hacia endosomas acidificantes rumbo a [[ribosomas 80S|real-cd-ribo80]]',
          loop: 'Como los lípidos ionizables permanecen neutros a pH 7,4 y solo se cargan positivamente a pH 5,5, maximizan la entrega reduciendo toxicidad'
        },
        scientific:
          '[[Nanopartícula lipídica de ARNm|real-pharm-mrna-lnp]] de cuatro componentes (~80–100 nm; ~50 % aminolípido ionizable pK_a ~6,2–6,5, ~10 % [[fosfolípido|phospholipid]] DSPC, ~38,5 % colesterol y ~1,5 % lípido PEG encapsulando [[ARNm|rna]] de ~4.200 nt). Neutra a pH 7,4, adsorbe ApoE para entrar vía receptores LDL a través de la [[membrana plasmática|plasma-membrane]] humana, desencadenando escape endosomal ácido hacia [[ribosomas 80S|real-cd-ribo80]].',
        from: [
          { nodeId: 'phospholipid', label: 'Cubierta de 4 lípidos', cargo: 'Ionizable + DSPC + Col + PEG' },
          { nodeId: 'rna', label: 'ARNm de espícula protegido', cargo: 'A salvo de ARNasas séricas' }
        ],
        to: [
          { nodeId: 'real-pharm-mrna-lnp', label: 'Nodo Explorador ARNm-LNP', cargo: 'Entrega citosólica de 90 nm' },
          { nodeId: 'vesicle', label: 'Vesícula endocítica', cargo: 'Acidificación y escape' }
        ]
      }
    },

    endosome_escape: {
      en: {
        subtitle: 'pH 5.5 Acid-Triggered Endosomal Escape into Cytosol',
        simple:
          'Inside the acidifying endosome, [[H+ protons|atom-h]] give the [[mRNA-LNP|real-pharm-mrna-lnp]] lipids a positive charge so they fuse with the negative endosome wall and release intact vaccine [[RNA|rna]] straight into the cytosol.',
        story:
          'Entering an endocytic [[vesicle|vesicle]] is only half the journey; trapped cargo left inside an endosome would soon be digested by fusing [[lysosomes|lysosome]]. As V-ATPase proton pumps acidify the endosome lumen toward pH 5.5, the ionizable aminolipids inside the [[mRNA-LNP|real-pharm-mrna-lnp]] cross their pKa threshold and snap into a strongly positive cationic state. Attracted electrostatically to negatively charged anionic [[phospholipids|phospholipid]] on the endosome\'s inner face, the lipid pairs flip from flat bilayers into cone-shaped inverted hexagonal phases that transiently open the membrane, spilling intact vaccine [[RNA|rna]] straight toward cytosolic [[80S ribosomes|real-cd-ribo80]].',
        blueprint: {
          role: 'pH-gated biophysical phase transition liberating synthetic vaccine mRNA from acidifying endosomes before lysosomal degradation',
          arrivesFrom: 'Internalized [[mRNA-LNP|real-pharm-mrna-lnp]] inside an endocytic [[vesicle|vesicle]] plus V-ATPase [[H+|atom-h]] pumping (pH 7.4 -> 5.5)',
          inside: 'Protonated cationic aminolipids pairing with anionic endosomal [[phospholipids|phospholipid]] to induce non-bilayer hexagonal HII pore disruption',
          deliversTo: 'Intact cytosolic [[m1Psi Spike mRNA|real-pharm-mrna-lnp]] handed directly to free human [[80S ribosomes|real-cd-ribo80]] outside the nucleus',
          loop: 'This controlled acid-triggered flip solves the core bottleneck of nucleic-acid medicine without permanently rupturing the cell membrane'
        },
        scientific:
          'Acid-triggered endosomal escape of [[mRNA-LNP|real-pharm-mrna-lnp]] cargo mediated by vacuolar H+-ATPase acidification (lumen pH ~7.4 -> ~5.5-6.0) inside endocytic [[vesicles|vesicle]]. Once luminal [[H+|atom-h]] concentration drops below the ionizable lipid pKa (~6.2-6.5), protonated cationic lipids form ion pairs with endogenous anionic endosomal [[phospholipids|phospholipid]] (e.g., BMP/PS), driving a lamellar-to-inverted-hexagonal (HII) phase transition that transiently destabilizes the endosomal membrane and releases intact [[mRNA|rna]] into the cytosol for [[80S translation|real-cd-ribo80]] prior to [[lysosomal|lysosome]] clearance.',
        from: [
          { nodeId: 'atom-h', label: 'Endosomal H+ Acidification', cargo: 'pH 5.5 lipid protonation' },
          { nodeId: 'vesicle', label: 'Acidifying Endosome', cargo: 'Anionic phospholipid partner' }
        ],
        to: [
          { nodeId: 'real-pharm-mrna-lnp', label: 'Cytosolic mRNA Release', cargo: 'Escapes before lysosome' },
          { nodeId: 'real-cd-ribo80', label: '80S Ribosome Handoff', cargo: 'Direct cytosolic translation' }
        ]
      },
      es: {
        subtitle: 'Escape endosomal activado por acidez pH 5,5 al citosol',
        simple:
          'Dentro del endosoma acidificado, los [[protones H⁺|atom-h]] dan carga positiva a los lípidos del [[ARNm-LNP|real-pharm-mrna-lnp]], haciendo que se fusionen con la pared endosomal negativa y liberen el [[ARN|rna]] vacunal intacto al citosol.',
        story:
          'Entrar en una [[vesícula|vesicle]] endocítica es solo la mitad del trayecto; cualquier carga que permanezca atrapada sería digerida por los [[lisosomas|lysosome]]. Cuando las bombas V-ATPasa reducen el pH endosomal hacia 5,5, los aminolípidos ionizables del [[ARNm-LNP|real-pharm-mrna-lnp]] cruzan su pK_a y se vuelven catiónicos. Atraídos electrostáticamente por los [[fosfolípidos|phospholipid]] aniónicos de la pared del endosoma, pasan de bicapa plana a fases hexagonales invertidas cónicas que abren temporalmente la membrana y liberan el [[ARN|rna]] vacunal hacia los [[ribosomas 80S|real-cd-ribo80]].',
        blueprint: {
          role: 'Transición biofísica activada por pH que libera el ARNm vacunal de endosomas ácidos antes de su degradación lisosomal',
          arrivesFrom: '[[ARNm-LNP|real-pharm-mrna-lnp]] internalizado en una [[vesícula|vesicle]] endocítica más bombeo V-ATPasa de [[H⁺|atom-h]] (pH 7,4 → 5,5)',
          inside: 'Aminolípidos protonados emparejados con [[fosfolípidos|phospholipid]] aniónicos endosomales induciendo fase hexagonal invertida H_II',
          deliversTo: '[[ARNm m¹Ψ de espícula|real-pharm-mrna-lnp]] intacto entregado directamente a los [[ribosomas 80S|real-cd-ribo80]] citosólicos fuera del núcleo',
          loop: 'Este giro controlado por pH resuelve el mayor cuello de botella de los fármacos de ARN sin dañar la membrana plasmática celular'
        },
        scientific:
          'Escape endosomal dependiente de pH de la carga [[ARNm-LNP|real-pharm-mrna-lnp]] mediado por acidificación V-ATPasa (pH ~7,4 → ~5,5–6,0) en [[vesículas|vesicle]] endocíticas. Al superar la concentración de [[H⁺|atom-h]] el pK_a (~6,2–6,5), los lípidos catiónicos forman pares iónicos con [[fosfolípidos|phospholipid]] aniónicos endosomales, induciendo transición lamelar → hexagonal invertida (H_II) que libera el [[ARNm|rna]] intacto al citosol para su [[traducción 80S|real-cd-ribo80]] antes del [[lisosoma|lysosome]].',
        from: [
          { nodeId: 'atom-h', label: 'Acidificación H⁺ endosomal', cargo: 'Protonación lipídica pH 5,5' },
          { nodeId: 'vesicle', label: 'Endosoma en acidificación', cargo: 'Socio fosfolipídico aniónico' }
        ],
        to: [
          { nodeId: 'real-pharm-mrna-lnp', label: 'Liberación citosólica ARNm', cargo: 'Escapa antes del lisosoma' },
          { nodeId: 'real-cd-ribo80', label: 'Entrega al ribosoma 80S', cargo: 'Traducción citosólica directa' }
        ]
      }
    },

    vaccine_mrna: {
      en: {
        subtitle: 'm1Psi-Modified Prefusion Spike mRNA (~4,200 nt Cytosolic Template)',
        simple:
          'This synthetic [[RNA|rna]] strand carries a 5\' cap, poly-A tail, and [[N1-methylpseudouridine|real-pharm-atoms]] bases so cytosolic [[80S ribosomes|real-cd-ribo80]] translate harmless prefusion Spike protein before cellular enzymes naturally recycle the RNA.',
        story:
          'Once free in the cytosol outside the intact [[nucleus|nucleus]], the ~4,200-nucleotide [[vaccine mRNA|real-pharm-mrna-lnp]] matches native human transcripts for cytosolic [[80S ribosomes|real-cd-ribo80]]: it wears a protective 5\' m7G cap, untranslated flanking regions, a 3\' poly-A tail, and two stabilizing proline codons (K986P/V987P) that lock translated [[SARS-CoV-2|real-coronavirus]] Spike in its exact neutralizing prefusion shape. Replacing every standard uridine with N1-methylpseudouridine ([[m1Psi|real-pharm-atoms]]) prevents innate TLR7/8 alarms from shutting translation down. Within hours to days, normal host RNases digest the transient strand into recycled [[nucleotides|nucleotide]] while newly primed [[IgG|real-imm-igg]] and [[CD8+ T-cells|real-imm-tcr-mhci]] endure.',
        blueprint: {
          role: 'Transient ~4,200-nt cytosolic mRNA template encoding harmless prefusion-locked Spike antigen without live virus or DNA entry',
          arrivesFrom: 'Endosomal escape of [[mRNA-LNP|real-pharm-mrna-lnp]] cargo carrying capped, polyadenylated, [[m1Psi|real-pharm-atoms]]-modified [[RNA|rna]]',
          inside: '5\'-m7G cap + 5\'/3\' UTRs + 2P-stabilized Spike coding region + poly-A tail decoded exclusively on cytosolic [[80S ribosomes|real-cd-ribo80]]',
          deliversTo: 'Harmless Spike antigen display priming [[IgG RBD neutralization|real-imm-rbd-block]] and [[CD8+ T-cells|real-imm-tcr-mhci]], followed by natural RNase clearance',
          loop: 'Two engineered proline mutations (2P) prevent Spike from flipping to its post-fusion shape, ensuring B-cells make potent neutralizing antibodies'
        },
        scientific:
          'Synthetic ~4,200-nt single-stranded [[mRNA|rna]] transcript ([[mRNA-LNP node|real-pharm-mrna-lnp]]) engineered with a 5\'-Cap1 (m7G) structure, optimized UTRs, 3\'-poly(A) tail, and 100% uridine replacement by N1-methylpseudouridine ([[m1Psi|real-pharm-atoms]]) to evade endosomal TLR7/8 and cytosolic OAS/RNase L arrest. Encodes diproline-stabilized (K986P/V987P) prefusion [[SARS-CoV-2|real-coronavirus]] Spike translated exclusively by cytosolic [[80S ribosomes|real-cd-ribo80]] (PDB 4UG0) outside the intact [[nucleus|nucleus]], subsequently degraded into host [[nucleotide|nucleotide]] pools within hours to days.',
        from: [
          { nodeId: 'real-pharm-mrna-lnp', label: 'Escaped LNP Transcript', cargo: 'Capped 4,200-nt m1Psi mRNA' },
          { nodeId: 'real-pharm-atoms', label: 'm1Psi Atomic Base', cargo: 'C-C bond evades TLR7/8' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Cytosolic 80S Translation', cargo: 'Builds prefusion 2P Spike' },
          { nodeId: 'real-imm-rbd-block', label: 'Neutralizing IgG Memory', cargo: 'Blocks future viral ACE2 entry' }
        ]
      },
      es: {
        subtitle: 'ARNm de espícula prefusión con m¹Ψ (~4.200 nt, molde citosólico)',
        simple:
          'Esta hebra sintética de [[ARN|rna]] lleva caperuza 5\', cola poli-A y bases de [[N1-metilpseudouridina|real-pharm-atoms]] para que los [[ribosomas 80S|real-cd-ribo80]] fabriquen espícula prefusión inofensiva antes de que las enzimas celulares reciclen el ARN.',
        story:
          'Libre en el citosol fuera del [[núcleo|nucleus]] intacto, el [[ARNm vacunal|real-pharm-mrna-lnp]] de ~4.200 nucleótidos presenta las mismas señales que un mensajero humano habitual para los [[ribosomas 80S|real-cd-ribo80]]: lleva caperuza 5\' m⁷G, regiones UTR, cola poli-A 3\' y dos prolinas estabilizadoras (K986P/V987P) que fijan la espícula del [[SARS-CoV-2|real-coronavirus]] en su forma prefusión neutralizable. Sustituir cada uridina por N1-metilpseudouridina ([[m¹Ψ|real-pharm-atoms]]) evita que las alarmas TLR7/8 frenen la traducción. En horas o días las ARNasas reciclan la hebra en [[nucleótidos|nucleotide]] mientras perduran [[IgG|real-imm-igg]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]].',
        blueprint: {
          role: 'Molde citosólico transitorio de ~4.200 nt que codifica antígeno espícula prefusión sin virus vivo ni entrada al ADN nuclear',
          arrivesFrom: 'Escape endosomal de la carga [[ARNm-LNP|real-pharm-mrna-lnp]] con [[ARN|rna]] encaperuzado, poliadenilado y modificado con [[m¹Ψ|real-pharm-atoms]]',
          inside: 'Caperuza 5\'-m⁷G + UTR 5\'/3\' + región codificante espícula 2P + cola poli-A decodificada solo en [[ribosomas 80S|real-cd-ribo80]] citosólicos',
          deliversTo: 'Exhibición inocua de espícula que entrena [[neutralización IgG del RBD|real-imm-rbd-block]] y [[linfocitos T CD8⁺|real-imm-tcr-mhci]], seguida de degradación por ARNasas',
          loop: 'Las dos prolinas diseñadas (2P) impiden que la espícula cambie de forma, asegurando anticuerpos neutralizantes potentes contra el virus real'
        },
        scientific:
          'Transcrito sintético de [[ARNm|rna]] monocatenario de ~4.200 nt ([[nodo ARNm-LNP|real-pharm-mrna-lnp]]) dotado de caperuza 5\'-Cap1 (m⁷G), UTR optimizadas, cola poli(A) 3\' y sustitución total de uridina por N1-metilpseudouridina ([[m¹Ψ|real-pharm-atoms]]) para eludir sensores TLR7/8 y OAS/ARNasa L. Codifica espícula prefusión 2P (K986P/V987P) de [[SARS-CoV-2|real-coronavirus]] traducida únicamente por [[ribosomas 80S|real-cd-ribo80]] (PDB 4UG0) fuera del [[núcleo|nucleus]] intacto, reciclándose en [[nucleótidos|nucleotide]] en horas o días.',
        from: [
          { nodeId: 'real-pharm-mrna-lnp', label: 'Transcrito LNP liberado', cargo: 'ARNm m¹Ψ de 4.200 nt' },
          { nodeId: 'real-pharm-atoms', label: 'Base atómica m¹Ψ', cargo: 'Enlace C–C evade TLR7/8' }
        ],
        to: [
          { nodeId: 'real-cd-ribo80', label: 'Traducción citosólica 80S', cargo: 'Fabrica espícula prefusión 2P' },
          { nodeId: 'real-imm-rbd-block', label: 'Memoria IgG neutralizante', cargo: 'Bloquea futura entrada vía ACE2' }
        ]
      }
    },

    intact_nucleus: {
      en: {
        subtitle: 'Intact Double-Membrane Host Nucleus (Zero Vaccine DNA Entry)',
        simple:
          'The human [[nucleus|nucleus]] keeps all 6.4 billion base pairs of chromosomal [[DNA|dna]] sealed behind a double nuclear envelope. [[mRNA-LNP|real-pharm-mrna-lnp]] vaccine strands stay strictly outside in the cytosol and never enter or alter host DNA.',
        story:
          'Directly beside the glowing cytosolic [[80S ribosomes|real-cd-ribo80]] translating vaccine Spike protein stands the sealed double-membrane [[nucleus|nucleus]] guarding the host genome, providing clear visual proof of molecular compartment separation from the [[Central Dogma|real-central-dogma]]. Nuclear pores export mature host mRNA outward into the cytosol, not inward; vaccine [[mRNA|rna]] carries zero nuclear localization signals, and human somatic cells carry no retroviral [[Reverse Transcriptase|real-pharm-hivrt]] to convert RNA into DNA. Host chromosomes remain completely untouched while temporary cytosolic translation finishes and naturally fades away.',
        blueprint: {
          role: 'Sealed double-membrane genomic vault keeping host chromosomal DNA physically segregated from cytosolic mRNA-LNP translation',
          arrivesFrom: 'Eukaryotic [[nucleus|nucleus]] architecture of the [[human cell|real-cell]] protecting 6.4 Gbp diploid [[DNA|dna]]',
          inside: 'Intact double nuclear envelope, outward-biased mRNA export pores, unperturbed chromatin, and zero reverse transcriptase',
          deliversTo: 'Complete genomic integrity throughout [[mRNA-LNP vaccination|real-pharm-mrna-lnp]] and selective antimicrobial therapy',
          loop: 'Contrasting cytosolic mRNA vaccines against retrovirus HIV-1 clarifies why reverse transcriptase is uniquely required to write RNA into DNA'
        },
        scientific:
          'Intact eukaryotic [[nucleus|nucleus]] (~5-10 um) enclosing the 6.4 Gbp diploid human [[DNA|dna]] genome behind a double-bilayer nuclear envelope in [[pharmacology_lab|real-pharmacology]]. Because nuclear pore export of mRNP complexes is directional (nucleus -> cytosol) and synthetic [[mRNA-LNP|real-pharm-mrna-lnp]] transcripts lack nuclear import signals and retroviral [[Reverse Transcriptase|real-pharm-hivrt]]/integrase enzymes, vaccine [[mRNA|rna]] undergoes translation solely on cytosolic [[80S ribosomes|real-cd-ribo80]] with zero nuclear entry or chromosomal alteration.',
        from: [
          { nodeId: 'nucleus', label: 'Sealed Nuclear Envelope', cargo: 'Directional mRNA export gate' },
          { nodeId: 'dna', label: 'Untouched 6.4 Gbp Genome', cargo: 'Zero vaccine integration' }
        ],
        to: [
          { nodeId: 'real-central-dogma', label: 'Central Dogma Polarity', cargo: 'DNA -> mRNA -> cytosolic 80S' },
          { nodeId: 'real-cell', label: 'Genomic Safety Proof', cargo: 'Host cell fully preserved' }
        ]
      },
      es: {
        subtitle: 'Núcleo humano de doble membrana intacto (cero entrada al ADN)',
        simple:
          'El [[núcleo|nucleus]] humano mantiene los 6.400 millones de pares de bases de [[ADN|dna]] sellados tras su doble envoltura nuclear. El [[ARNm-LNP|real-pharm-mrna-lnp]] vacunal permanece estrictamente en el citosol y jamás entra ni altera el ADN.',
        story:
          'Justo al lado de los [[ribosomas 80S|real-cd-ribo80]] citosólicos que traducen la espícula vacunal se alza el [[núcleo|nucleus]] sellado de doble membrana custodiando el genoma humano, demostrando visualmente la separación de compartimentos del [[Dogma Central|real-central-dogma]]. Los poros nucleares exportan ARNm maduro hacia fuera, no hacia dentro; el [[ARNm|rna]] vacunal carece de señales de importación nuclear, y la célula somática carece de [[transcriptasa inversa|real-pharm-hivrt]] retroviral para convertir ARN en ADN. Los cromosomas permanecen completamente intactos mientras el mensaje citosólico se degrada de forma natural.',
        blueprint: {
          role: 'Bóveda genómica sellada de doble membrana que mantiene el ADN cromosómico físicamente aislado de la traducción ARNm-LNP citosólica',
          arrivesFrom: 'Arquitectura del [[núcleo|nucleus]] eucariota de la [[célula humana|real-cell]] protegiendo 6,4 Gpb de [[ADN|dna]] diploide',
          inside: 'Doble envoltura nuclear intacta, poros con exportación unidireccional de ARNm, cromatina inalterada y ausencia de transcriptasa inversa',
          deliversTo: 'Integridad genómica absoluta durante la [[vacunación ARNm-LNP|real-pharm-mrna-lnp]] y las terapias antimicrobianas selectivas',
          loop: 'Contrastar las vacunas de ARNm citosólicas con el retrovirus VIH-1 aclara por qué solo una transcriptasa inversa viral escribe ARN en ADN'
        },
        scientific:
          '[[Núcleo|nucleus]] eucariota intacto (~5–10 µm) que encierra el genoma humano diploide de 6,4 Gpb de [[ADN|dna]] tras una doble envoltura nuclear en el [[laboratorio farmacológico|real-pharmacology]]. Dado que la exportación mRNP es direccional (núcleo → citosol) y los transcritos [[ARNm-LNP|real-pharm-mrna-lnp]] carecen de señales nucleares y de [[transcriptasa inversa|real-pharm-hivrt]]/integrasa, la traducción ocurre exclusivamente en [[ribosomas 80S|real-cd-ribo80]] citosólicos sin alterar jamás el genoma.',
        from: [
          { nodeId: 'nucleus', label: 'Envoltura nuclear sellada', cargo: 'Exportación direccional ARNm' },
          { nodeId: 'dna', label: 'Genoma de 6,4 Gpb intacto', cargo: 'Cero integración vacunal' }
        ],
        to: [
          { nodeId: 'real-central-dogma', label: 'Polaridad del Dogma Central', cargo: 'ADN → ARNm → 80S citosólico' },
          { nodeId: 'real-cell', label: 'Prueba de seguridad genómica', cargo: 'Célula huésped íntegra' }
        ]
      }
    },

    drug_atoms: {
      en: {
        subtitle: 'Atomic Drug Chemistry: 1.35 A Ester, 3\'-N3 AZT & m1Psi (0.1-0.5 nm)',
        simple:
          'This 0.1-to-0.5-nanometer optical inset reveals the exact atomic bonds powering modern medicine: penicillin\'s 0.135-nanometer [[C|atom-c]]-[[O|atom-o]] covalent ester on PBP, AZT\'s [[3\'-N3|atom-n]] terminator, Remdesivir\'s 1\'-CN prong, and [[m1Psi|real-pharm-mrna-lnp]].',
        story:
          'Zooming down to single covalent bonds completes the curriculum\'s continuous ladder from [[Scale Explorer|scale-explorer]] atoms to clinical medicine. Three atomic architectures stand side by side inside the optical lens: first, the opened beta-lactam ring of [[penicillin|real-pharm-pbp]] covalently bolted via a 0.135-nanometer [[C|atom-c]]-[[O|atom-o]] ester onto bacterial PBP serine (with its thiazolidine [[sulfur|atom-s]] ring nearby); second, [[AZT-TP|real-pharm-hivrt]]\'s linear three-[[nitrogen|atom-n]] 3\'-N3 azido tail eliminating the 3\'-OH nucleophile alongside [[Remdesivir|real-pharm-rdrp]]\'s 1\'-CN bump; and third, the carbon-carbon glycosidic bond of N1-methylpseudouridine (m1Psi) stabilizing [[vaccine mRNA|real-pharm-mrna-lnp]].',
        blueprint: {
          role: '0.1-0.5 nm sub-atomic chemistry lens uniting covalent antibiotic trapping, antiviral chain stopping, and modified mRNA stealth',
          arrivesFrom: 'Elemental [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[S|atom-s]] bonds engineered across clinical drug scaffolds',
          inside: '1.35 A beta-lactam C-O acyl-ester ([[PDB 1PWC|real-pharm-pbp]]), 3\'-N3 azido terminator ([[PDB 3V4I|real-pharm-hivrt]]), 1\'-CN prong ([[PDB 7BV2|real-pharm-rdrp]]), and C5-C1\' m1Psi ([[mRNA-LNP|real-pharm-mrna-lnp]])',
          deliversTo: 'Atomic proof that changing a single chemical group converts natural biomolecules into life-saving selective medicines',
          loop: 'Closes the full biology arc from 0.1 nm atoms and four biomolecules through whole cells, immunity, and rational pharmacology'
        },
        scientific:
          'Sub-nanometer (0.1-0.5 nm) CPK atomic bond comparison inside the [[atomic drug chemistry node|real-pharm-atoms]] across [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[S|atom-s]]: (1) ~0.135 nm (1.35 A) penicilloyl-Ser covalent C-O acyl-ester formed after beta-lactam ring opening in [[PBP|real-pharm-pbp]] (PDB 1PWC); (2) 3\'-N3 azido group replacing 3\'-OH to enforce obligate termination in [[HIV-1 RT|real-pharm-hivrt]] (PDB 3V4I) alongside the 1\'-CN cyano steric clash in [[SARS-CoV-2 RdRp|real-pharm-rdrp]] (PDB 7BV2); and (3) N1-methylpseudouridine C5-C1\' isomerization stabilizing [[mRNA-LNP|real-pharm-mrna-lnp]].',
        from: [
          { nodeId: 'atom-c', label: 'C-O & C-C Drug Bonds', cargo: '1.35 A ester & m1Psi ring' },
          { nodeId: 'atom-n', label: '3-Prime N3 & 1-Prime CN', cargo: 'Antiviral chain terminators' }
        ],
        to: [
          { nodeId: 'real-pharm-atoms', label: 'Atomic Pharmacology Node', cargo: 'Sub-nm selective chemistry' },
          { nodeId: 'life-overview', label: 'Intro Biology Capstone', cargo: 'Full atoms-to-medicine arc' }
        ]
      },
      es: {
        subtitle: 'Química farmacológica atómica: Éster 1,35 Å, AZT 3\'-N₃ y m¹Ψ (0,1–0,5 nm)',
        simple:
          'Esta lente óptica de 0,1 a 0,5 nanómetros revela los enlaces atómicos exactos de la medicina moderna: el éster covalente [[C|atom-c]]–[[O|atom-o]] de 1,35 Å de la penicilina, el grupo [[3\'-N₃|atom-n]] del AZT, el 1\'-CN del remdesivir y la [[m¹Ψ|real-pharm-mrna-lnp]].',
        story:
          'Descender hasta los enlaces covalentes individuales culmina la escalera continua desde los átomos del [[Explorador de Escalas|scale-explorer]] hasta la medicina clínica. Tres arquitecturas atómicas conviven en la lente: primero, el anillo betalactámico abierto de la [[penicilina|real-pharm-pbp]] fijado por un éster covalente [[C|atom-c]]–[[O|atom-o]] de 0,135 nanómetros a la serina de PBP (junto a su anillo con [[azufre|atom-s]]); segundo, la cola lineal de tres [[nitrógenos|atom-n]] 3\'-N₃ del [[AZT-TP|real-pharm-hivrt]] y el saliente 1\'-CN del [[remdesivir|real-pharm-rdrp]]; y tercero, el enlace carbono-carbono de la N1-metilpseudouridina (m¹Ψ) en el [[ARNm vacunal|real-pharm-mrna-lnp]].',
        blueprint: {
          role: 'Lente química subatómica (0,1–0,5 nm) que une acilación antibiótica covalente, terminación antiviral y sigilo de ARNm modificado',
          arrivesFrom: 'Enlaces elementales [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[S|atom-s]] diseñados en fármacos clínicos',
          inside: 'Éster acílico C–O betalactámico de 1,35 Å ([[PDB 1PWC|real-pharm-pbp]]), terminador 3\'-N₃ ([[PDB 3V4I|real-pharm-hivrt]]), grupo 1\'-CN ([[PDB 7BV2|real-pharm-rdrp]]) y m¹Ψ C5–C1\' ([[ARNm-LNP|real-pharm-mrna-lnp]])',
          deliversTo: 'Demostración atómica de cómo modificar un solo grupo químico convierte biomoléculas naturales en medicinas selectivas vitales',
          loop: 'Cierra el arco completo de biología desde átomos de 0,1 nm y cuatro biomoléculas hasta células, inmunidad y farmacología racional'
        },
        scientific:
          'Comparativa atómica CPK subnanométrica (0,1–0,5 nm) del [[nodo de química farmacológica|real-pharm-atoms]] en [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[S|atom-s]]: (1) éster covalente C–O peniciloil-serina de ~0,135 nm (1,35 Å) tras abrirse el anillo betalactámico en [[PBP|real-pharm-pbp]] (PDB 1PWC); (2) grupo 3\'-N₃ sustituyendo al 3\'-OH para terminación obligada en [[VIH-1 RT|real-pharm-hivrt]] (PDB 3V4I) junto al choque 1\'-CN en [[RdRp|real-pharm-rdrp]] (PDB 7BV2); y (3) isomerización C5–C1\' de N1-metilpseudouridina en [[ARNm-LNP|real-pharm-mrna-lnp]].',
        from: [
          { nodeId: 'atom-c', label: 'Enlaces C–O y C–C', cargo: 'Éster 1,35 Å y anillo m¹Ψ' },
          { nodeId: 'atom-n', label: 'Grupos 3\'-N₃ y 1\'-CN', cargo: 'Terminadores antivirales' }
        ],
        to: [
          { nodeId: 'real-pharm-atoms', label: 'Nodo Farmacología Atómica', cargo: 'Química selectiva sub-nm' },
          { nodeId: 'life-overview', label: 'Culminación Biología Intro', cargo: 'Arco completo átomos a medicina' }
        ]
      }
    }
  }
};
