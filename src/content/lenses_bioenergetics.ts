import type { BilingualNodeLens, BilingualPartLens } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 14 Phase 16 Explorer nodes and all 34 Standalone Realistic Part Lenses
 * (`bioenergetics_realistic.html` [18] + `membrane_transport_realistic.html` [16])
 * in `EN` & `ES` for Phase 16: Bioenergetics (Photosynthesis <-> Cellular Respiration)
 * & Membrane Transport / Osmosis.
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere strictly to `AGENTS.md` Rule 8.
 */
export const BIOENERGETICS_NODE_LENSES: Record<string, BilingualNodeLens> = {
  'real-bioenergetics': {
    en: {
      simple:
        'Photosynthesis and cellular respiration form one coupled energy loop across [[plant cells|real-plant]] and [[animal cells|real-cell]]. [[Chloroplasts|chloroplast]] use sunlight to convert carbon dioxide and [[water|water]] into [[glucose|glucose]] and oxygen, while [[mitochondria|mitochondrion]] oxidize that sugar back into carbon dioxide and water to synthesize ATP.',
      story:
        'Every breath links oxygenic photosynthesis inside a five-micrometer [[chloroplast|chloroplast]] to aerobic respiration inside a two-micrometer [[mitochondrion|mitochondrion]]. Driven by solar photons, [[Photosystem II|real-bio-psii]], [[Cytochrome b6f|real-bio-b6f]], and [[Photosystem I|real-bio-psi]] split [[water|water]], release oxygen, and charge NADPH and ATP so [[RuBisCO|real-bio-rubisco]] fixes carbon dioxide into [[glucose|glucose]]. Across the loop, glycolysis, [[Citrate Synthase|real-bio-citrate]], [[Complex I|real-bio-complex1]], and [[Complex IV|real-bio-complex4]] extract electrons from sugar to build a steep proton gradient, piling hydrogen ions behind the inner membrane like water behind a hydroelectric dam so they rush through rotary [[ATP synthase|real-bio-atpsynth]] and forge roughly thirty-two ATP.',
      blueprint:
        'Role: Coupled planetary bioenergetic loop uniting chloroplast carbon fixation (6 CO2 + 6 H2O + light -> C6H12O6 + 6 O2) with mitochondrial aerobic oxidation (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + ~30-32 ATP); Inputs: Solar photons (680 nm and 700 nm), atmospheric CO2, liquid [[H2O|water]], and recycled ADP + Pi; Inside: Thylakoid Z-scheme ([[PSII|real-bio-psii]], [[b6f|real-bio-b6f]], [[PSI|real-bio-psi]]) plus stromal [[RuBisCO|real-bio-rubisco]] mirrored by cytosolic glycolysis, matrix [[Krebs cycle|real-bio-citrate]], cristae [[Complexes I-IV|real-bio-complex1]], and rotary [[ATP synthase|real-bio-atpsynth]]; Outputs: Continuous [[glucose|glucose]] and O2 supply paired with universal cellular ATP currency.',
      scientific:
        'Whole-to-tiniest comparative bioenergetics spanning 50 um coupled [[plant|real-plant]] and [[animal|real-cell]] metabolism down to 5 nm energy-transducing membranes and 0.1 nm cofactor atoms ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[Mg2+|atom-mg]], [[Fe|atom-fe]], [[Ca2+|atom-ca]]). Unifies thylakoid linear electron transport ([[PSII|real-bio-psii]] PDB 3JCU, [[Cyt b6f|real-bio-b6f]] PDB 6RQF, [[PSI|real-bio-psi]] PDB 4XK8, CF1CF0 PDB 6FKF) and Calvin carbon fixation ([[RuBisCO|real-bio-rubisco]] PDB 1RCX) with cytosolic glycolysis, matrix [[Citrate Synthase|real-bio-citrate]] (PDB 1CTS), inner-membrane oxidative phosphorylation ([[Complex I|real-bio-complex1]] PDB 5XTD, Complex II PDB 1ZOY, Complex III PDB 1BGY, [[Complex IV|real-bio-complex4]] PDB 1V54, and [[F1F0 ATP synthase|real-bio-atpsynth]] PDB 5ARA yielding ~30-32 ATP/glucose vs 2 ATP anaerobically).'
    },
    es: {
      simple:
        'La fotosíntesis y la respiración celular forman un único ciclo energético entre [[células vegetales|real-plant]] y [[células animales|real-cell]]. Los [[cloroplastos|chloroplast]] usan luz solar para transformar dióxido de carbono y [[agua|water]] en [[glucosa|glucose]] y oxígeno, mientras las [[mitocondrias|mitochondrion]] oxidan ese azúcar para producir ATP.',
      story:
        'Cada respiración conecta la fotosíntesis oxigénica de un [[cloroplasto|chloroplast]] de cinco micrómetros con la respiración aerobia de una [[mitocondria|mitochondrion]] de dos micrómetros. Impulsados por fotones, el [[Fotosistema II|real-bio-psii]], el [[citocromo b6f|real-bio-b6f]] y el [[Fotosistema I|real-bio-psi]] rompen el [[agua|water]], liberan oxígeno y cargan NADPH y ATP para que [[RuBisCO|real-bio-rubisco]] fije dióxido de carbono en [[glucosa|glucose]]. En el extremo opuesto, la glucólisis, la [[citrato sintasa|real-bio-citrate]], el [[Complejo I|real-bio-complex1]] y el [[Complejo IV|real-bio-complex4]] extraen electrones del azúcar y acumulan protones tras la membrana interna como agua tras una presa hidroeléctrica, haciéndolos girar la turbina rotatoria de la [[ATP sintasa|real-bio-atpsynth]] para sintetizar unos treinta y dos ATP.',
      blueprint:
        'Rol: Bucle bioenergético acoplado que une la fijación de carbono en cloroplastos (6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂) con la oxidación aerobia mitocondrial (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~30–32 ATP) · Entradas: Fotones solares (680 y 700 nm), CO₂ atmosférico, [[H₂O|water]] líquida y ADP + Pᵢ reciclados · Interior: Esquema Z tilacoidal ([[PSII|real-bio-psii]], [[b₆f|real-bio-b6f]], [[PSI|real-bio-psi]]) y [[RuBisCO|real-bio-rubisco]] estromal reflejados por glucólisis, [[ciclo de Krebs|real-bio-citrate]], [[Complejos I–IV|real-bio-complex1]] y [[ATP sintasa|real-bio-atpsynth]] · Salida: Flujo continuo de [[glucosa|glucose]], O₂ y moneda energética ATP.',
      scientific:
        'Síntesis bioenergética comparativa desde el metabolismo acoplado de [[células vegetales|real-plant]] y [[animales|real-cell]] (50 µm) hasta membranas transductoras de 5 nm y átomos cofactores de 0,1 nm ([[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], [[Mg²⁺|atom-mg]], [[Fe|atom-fe]], [[Ca²⁺|atom-ca]]). Integra el transporte lineal tilacoidal ([[PSII|real-bio-psii]] PDB 3JCU, [[Cyt b₆f|real-bio-b6f]] PDB 6RQF, [[PSI|real-bio-psi]] PDB 4XK8, CF₁CF₀ PDB 6FKF) y la fijación por [[RuBisCO|real-bio-rubisco]] (PDB 1RCX) con glucólisis, [[citrato sintasa|real-bio-citrate]] (PDB 1CTS) y fosforilación oxidativa ([[Complejo I|real-bio-complex1]] PDB 5XTD, Complejo II PDB 1ZOY, Complejo III PDB 1BGY, [[Complejo IV|real-bio-complex4]] PDB 1V54 y [[ATP sintasa F₁F₀|real-bio-atpsynth]] PDB 5ARA, ~30–32 ATP/glucosa frente a 2 ATP anaerobios).'
    }
  },

  'real-bio-psii': {
    en: {
      simple:
        '[[Photosystem II|photosystem-ii]] is the light-powered [[protein|protein]] complex in thylakoid membranes that initiates oxygenic photosynthesis. Using energy captured by [[chlorophyll|chlorophyll]] pigments, it splits [[water|water]] molecules to release oxygen gas, free protons, and energized electrons.',
      story:
        'Embedded inside stacked [[grana|granum]] of the [[chloroplast|chloroplast]], Photosystem II executes one of the most demanding chemical reactions in biology: ripping electrons away from stable [[water|water]]. Outer LHCII antennas funnel 680-nanometer red photons into the P680 [[chlorophyll|chlorophyll]] reaction pair, kicking an electron onto pheophytin and plastoquinone while leaving behind an intensely oxidizing radical. Over four consecutive flashes, a catalytic cluster of four manganese atoms, one [[calcium|atom-ca]], and five [[oxygens|atom-o]] strips four electrons from two water molecules, releasing breathable O2 and pouring four protons into the lumen while reduced plastoquinol dashes toward [[Cytochrome b6f|real-bio-b6f]].',
      blueprint:
        'Role: Water-plastoquinone photo-oxidoreductase launching linear photosynthetic electron flow and generating atmospheric O2; Inputs: 680 nm solar photons, 2 luminal [[H2O|water]] molecules, and oxidized plastoquinone (PQ) from the thylakoid lipid core; Inside: Dimeric PSII-LHCII supercomplex (PDB 3JCU) uniting [[chlorophyll|chlorophyll]] P680, D1/D2 core subunits, and the Mn4CaO5 oxygen-evolving complex (OEC); Outputs: 1 O2 gas molecule, 4 luminal [[H+|atom-h]] protons fueling [[ATP synthase|real-bio-atpsynth]], and 2 reduced PQH2 carriers delivering electrons to [[Cytochrome b6f|real-bio-b6f]].',
      scientific:
        'Dimeric plant [[Photosystem II|photosystem-ii]]-LHCII supercomplex (cryo-EM PDB 3JCU; ~1.1 MDa assembly embedded in stacked [[granum|granum]] thylakoids during [[light reactions|light-reactions]]). Excitation of reaction-center [[chlorophyll|chlorophyll]] a P680 (680 nm) drives ultrafast charge separation to pheophytin and quinones QA -> QB, generating P680+ (E0 approx +1.25 V) capable of oxidizing the Mn4[[Ca|atom-ca]][[O5|atom-o]] oxygen-evolving cluster through Kok S0-S4 states. Complete four-photon cycling catalyzes 2 [[H2O|water]] + 2 PQ + 4 H+(stroma) -> O2 + 2 PQH2 + 4 H+(lumen), exporting plastoquinol to [[Cytochrome b6f|real-bio-b6f]].'
    },
    es: {
      simple:
        'El [[Fotosistema II|photosystem-ii]] es el complejo [[proteico|protein]] activado por luz en las membranas tilacoides que inicia la fotosíntesis oxigénica. Con energía captada por la [[clorofila|chlorophyll]], rompe moléculas de [[agua|water]] para liberar oxígeno gaseoso, protones y electrones excitados.',
      story:
        'Incrustado en los [[grana|granum]] apilados del [[cloroplasto|chloroplast]], el Fotosistema II ejecuta una de las reacciones químicas más exigentes de la biología: arrancar electrones al estable [[agua|water]]. Las antenas LHCII canalizan fotones rojos de 680 nanómetros hacia el par especial P680 de [[clorofila|chlorophyll]], lanzando un electrón hacia la feofitina y la plastoquinona mientras dejan un radical altamente oxidante. Tras cuatro destellos consecutivos, un núcleo catalítico de manganeso, [[calcio|atom-ca]] y [[oxígeno|atom-o]] extrae cuatro electrones de dos moléculas de agua, liberando O₂ respirable, vertiendo cuatro protones al lumen y enviando plastoquinol reducido hacia el [[citocromo b6f|real-bio-b6f]].',
      blueprint:
        'Rol: Foto-oxidorreductasa agua–plastoquinona que inicia el flujo electrónico fotosintético lineal y genera O₂ atmosférico · Entradas: Fotones solares de 680 nm, 2 moléculas luminales de [[H₂O|water]] y plastoquinona (PQ) oxidada del núcleo lipídico · Interior: Supercomplejo dimérico PSII–LHCII (PDB 3JCU) con [[clorofila|chlorophyll]] P680, subunidades D1/D2 y núcleo Mn₄CaO₅ (OEC) · Salida: 1 molécula de O₂, 4 protones [[H⁺|atom-h]] luminales para la [[ATP sintasa|real-bio-atpsynth]] y 2 PQH₂ hacia el [[citocromo b₆f|real-bio-b6f]].',
      scientific:
        'Supercomplejo dimérico vegetal [[Fotosistema II|photosystem-ii]]–LHCII (crio-EM PDB 3JCU; ~1,1 MDa en tilacoides de [[grana|granum]] durante las [[reacciones luminosas|light-reactions]]). La excitación de la [[clorofila|chlorophyll]] a P680 (680 nm) separa carga hacia feofitina y quinonas Q_A → Q_B generando P680⁺ (E₀ ≈ +1,25 V), que oxida el cúmulo Mn₄[[Ca|atom-ca]][[O₅|atom-o]] a través de los estados S₀–S₄ de Kok. Cuatro fotones catalizan 2 [[H₂O|water]] + 2 PQ + 4 H⁺(estroma) → O₂ + 2 PQH₂ + 4 H⁺(lumen), alimentando al [[citocromo b₆f|real-bio-b6f]].'
    }
  },

  'real-bio-b6f': {
    en: {
      simple:
        'Cytochrome b6f is the central relay [[protein|protein]] sitting halfway between [[Photosystem II|real-bio-psii]] and [[Photosystem I|real-bio-psi]] inside the thylakoid membrane. As it passes electrons onward, it pumps extra hydrogen protons into the lumen to power [[ATP synthase|real-bio-atpsynth]].',
      story:
        'Acting as the electron bridge of the [[chloroplast|chloroplast]] [[light reactions|light-reactions]], dimeric Cytochrome b6f receives mobile lipid-soluble plastoquinol (PQH2) diffusing out of [[Photosystem II|real-bio-psii]]. At its luminal Qo pocket, a Rieske [[iron|atom-fe]]-[[sulfur|atom-s]] cluster splits each pair of incoming electrons along a bifurcated Q-cycle route: one electron flows through cytochrome f to water-soluble plastocyanin, while the second recycles across membrane-spanning b-hemes to reduce a fresh plastoquinone at the stromal Qi site. That clever recycling doubles proton translocation, pumping two luminal H+ for every electron forwarded to [[Photosystem I|real-bio-psi]].',
      blueprint:
        'Role: Mid-chain thylakoid plastoquinol-plastocyanin oxidoreductase and Q-cycle proton pump linking PSII to PSI; Inputs: Lipid-soluble reduced plastoquinol (PQH2) from [[PSII|real-bio-psii]], oxidized luminal plastocyanin (PC), and stromal [[H+|atom-h]] ions; Inside: Homodimeric cytochrome b6f core (PDB 6RQF) housing heme bL, heme bH, heme cn, cytochrome f, and a mobile Rieske [[2Fe-2S|atom-fe]] domain; Outputs: Reduced luminal plastocyanin feeding [[PSI|real-bio-psi]] plus 2 H+ deposited into the thylakoid lumen per electron transferred to drive [[CF1CF0 ATP synthase|real-bio-atpsynth]].',
      scientific:
        'Homodimeric thylakoid plastoquinol:plastocyanin oxidoreductase Cytochrome b6f (~220 kDa dimer; plant/algal cryo-EM PDB 6RQF), structurally homologous to mitochondrial Complex III (cytochrome bc1). Mediates the bifurcated Mitchell Q-cycle using high-potential Rieske [[2Fe-2S|atom-fe]]-[[S|atom-s]] and heme f centers alongside low-potential transmembrane hemes bL, bH, and unique stromal heme cn. Oxidizing PQH2 from [[PSII|real-bio-psii]] translocates 2 [[H+|atom-h]] per electron from stroma to lumen (raising delta-pH across the [[granum|granum]] bilayer for [[ATP synthase|real-bio-atpsynth]]) while reducing copper-containing plastocyanin bound for [[PSI|real-bio-psi]].'
    },
    es: {
      simple:
        'El citocromo b6f es la [[proteína|protein]] de relevo situada a mitad de camino entre el [[Fotosistema II|real-bio-psii]] y el [[Fotosistema I|real-bio-psi]] en la membrana tilacoidal. Al transferir electrones, bombea protones adicionales al lumen para impulsar la [[ATP sintasa|real-bio-atpsynth]].',
      story:
        'Como puente electrónico central de las [[reacciones luminosas|light-reactions]] del [[cloroplasto|chloroplast]], el dímero del citocromo b6f recibe plastoquinol liposoluble (PQH₂) difundido desde el [[Fotosistema II|real-bio-psii]]. En su bolsillo luminal Qo, un centro Rieske de [[hierro|atom-fe]] y [[azufre|atom-s]] divide cada par de electrones por un ciclo Q bifurcado: uno pasa vía citocromo f hacia la plastocianina soluble, mientras el segundo retorna por los hemos b para reducir otra plastoquinona en el lado estromal. Este reciclaje duplica el bombeo, vertiendo dos protones al lumen por cada electrón enviado al [[Fotosistema I|real-bio-psi]].',
      blueprint:
        'Rol: Plastoquinol–plastocianina oxidorreductasa tilacoidal y bomba de protones por ciclo Q que enlaza PSII con PSI · Entradas: Plastoquinol reducido (PQH₂) de [[PSII|real-bio-psii]], plastocianina oxidada luminal y [[H⁺|atom-h]] estromales · Interior: Homodímero citocromo b₆f (PDB 6RQF) con hemos b_L, b_H, c_n, citocromo f y dominio móvil Rieske [[2Fe–2S|atom-fe]] · Salida: Plastocianina reducida hacia [[PSI|real-bio-psi]] más 2 H⁺ bombeados al lumen por electrón para mover la [[ATP sintasa CF₁CF₀|real-bio-atpsynth]].',
      scientific:
        'Complejo homodimérico tilacoidal citocromo b₆f (~220 kDa; crio-EM PDB 6RQF), homólogo estructural del Complejo III mitocondrial (citocromo bc₁). Ejecuta el ciclo Q bifurcado de Mitchell mediante un centro de alto potencial Rieske [[2Fe–2S|atom-fe]]–[[S|atom-s]] y citocromo f acoplados a hemos transmembrana b_L, b_H y el hemo c_n estromal. Al oxidar PQH₂ proveniente de [[PSII|real-bio-psii]], transloca 2 [[H⁺|atom-h]] por electrón del estroma al lumen (reforzando el ΔpH del [[grana|granum]] para la [[ATP sintasa|real-bio-atpsynth]]) y reduce la plastocianina de cobre hacia [[PSI|real-bio-psi]].'
    }
  },

  'real-bio-psi': {
    en: {
      simple:
        'Photosystem I is the second light-driven [[protein|protein]] complex in the [[chloroplast|chloroplast]] thylakoid membrane. It re-energizes low-energy electrons arriving from [[Cytochrome b6f|real-bio-b6f]] with a fresh solar photon so the cell can charge NADPH for making [[glucose|glucose]].',
      story:
        'By the time electrons finish powering proton pumping across [[Cytochrome b6f|real-bio-b6f]] and ride plastocyanin to the stromal margins of the thylakoid, they have spent much of their voltage. Photosystem I restores their reductive punch with a second 700-nanometer photon absorbed across its LHCI [[chlorophyll|chlorophyll]] crescent and focused onto the P700 dimer. Excited electrons race within picoseconds through phylloquinone and three [[iron|atom-fe]]-[[sulfur|atom-s]] clusters (FX, FA, FB) onto soluble ferredoxin in the stroma, where FNR enzyme reduces NADP+ into NADPH ready to feed [[RuBisCO|real-bio-rubisco]] and the Calvin cycle.',
      blueprint:
        'Role: Plastocyanin-ferredoxin photo-oxidoreductase executing the second solar voltage boost of the photosynthetic Z-scheme; Inputs: 700 nm photons, reduced luminal plastocyanin (PC) from [[Cyt b6f|real-bio-b6f]], and oxidized stromal ferredoxin plus NADP+; Inside: Asymmetric PSI-LHCI supercomplex (PDB 4XK8) combining PsaA/PsaB reaction core, P700 [[chlorophyll|chlorophyll]] pair, and three [[4Fe-4S|atom-fe]] clusters; Outputs: Reduced ferredoxin driving FNR synthesis of stromal NADPH (plus cyclic electron return to [[Cyt b6f|real-bio-b6f]] when extra ATP is needed) for [[Calvin fixation|real-bio-rubisco]].',
      scientific:
        'Plant Photosystem I-LHCI supercomplex (crystal structure PDB 4XK8; ~600 kDa monomeric PsaA-PsaO core flanked by four LHCI antenna subunits binding ~155 [[chlorophyll|chlorophyll]] and carotenoid cofactors in stroma-exposed thylakoids). Absorption of 700 nm light excites the special pair P700 -> P700* (E0 approx -1.2 V), driving unidirectional charge transfer across A0, phylloquinone A1, and three [[4Fe-4S|atom-fe]]-[[S|atom-s]] clusters (FX, FA, FB) with near-unity quantum efficiency (~98%). Reduces stromal ferredoxin so ferredoxin-NADP+ reductase (FNR) yields NADPH (2 e- + H+ + NADP+ -> NADPH) fueling [[RuBisCO|real-bio-rubisco]] carbon assimilation.'
    },
    es: {
      simple:
        'El Fotosistema I es el segundo complejo [[proteico|protein]] impulsado por luz en la membrana tilacoidal del [[cloroplasto|chloroplast]]. Recarga con un nuevo fotón solar los electrones que llegan del [[citocromo b6f|real-bio-b6f]] para sintetizar NADPH destinado a fabricar [[glucosa|glucose]].',
      story:
        'Cuando los electrones terminan de bombear protones en el [[citocromo b6f|real-bio-b6f]] y viajan en la plastocianina hasta los bordes tilacoidales, ya han perdido buena parte de su potencial. El Fotosistema I les devuelve su fuerza reductora con un segundo fotón de 700 nanómetros captado por su media luna de antenas LHCI y concentrado en el par de [[clorofila|chlorophyll]] P700. Los electrones excitados cruzan en picosegundos la filoquinona y tres cúmulos de [[hierro|atom-fe]] y [[azufre|atom-s]] (F_X, F_A, F_B) hasta la ferredoxina estromal, permitiendo que la enzima FNR genere NADPH para [[RuBisCO|real-bio-rubisco]].',
      blueprint:
        'Rol: Foto-oxidorreductasa plastocianina–ferredoxina que ejecuta el segundo impulso solar de voltaje del esquema Z fotosintético · Entradas: Fotones de 700 nm, plastocianina reducida desde [[Cyt b₆f|real-bio-b6f]] y ferredoxina/NADP⁺ estromales · Interior: Supercomplejo PSI–LHCI (PDB 4XK8) con núcleo PsaA/PsaB, par [[clorofila|chlorophyll]] P700 y tres centros [[4Fe–4S|atom-fe]] · Salida: Ferredoxina reducida que alimenta a FNR para sintetizar NADPH estromal (o flujo cíclico hacia [[Cyt b₆f|real-bio-b6f]]) destinado al [[ciclo de Calvin|real-bio-rubisco]].',
      scientific:
        'Supercomplejo vegetal Fotosistema I–LHCI (estructura cristalográfica PDB 4XK8; núcleo monomérico PsaA–PsaO de ~600 kDa rodeado por cuatro antenas LHCI con ~155 cofactores de [[clorofila|chlorophyll]] y carotenoides en tilacoides estromales). Un fotón de 700 nm excita P700 → P700* (E₀ ≈ −1,2 V), transfiriendo electrones vía A₀, filoquinona A₁ y tres centros [[4Fe–4S|atom-fe]]–[[S|atom-s]] (F_X, F_A, F_B) con eficiencia cuántica ~98 %. Reduce la ferredoxina estromal para que FNR catalice NADP⁺ + H⁺ + 2 e⁻ → NADPH hacia la asimilación de carbono por [[RuBisCO|real-bio-rubisco]].'
    }
  },

  'real-bio-rubisco': {
    en: {
      simple:
        '[[RuBisCO|rubisco]] is the abundant stromal [[protein|protein]] enzyme in [[chloroplasts|chloroplast]] that captures inorganic carbon dioxide gas from the air and attaches it to organic sugar backbones. Powered by ATP and NADPH from the [[light reactions|light-reactions]], it builds the raw material for [[glucose|glucose]].',
      story:
        'Swimming at dense concentrations throughout the [[chloroplast|chloroplast]] stroma, sixteen-subunit RuBisCO performs the decisive gateway reaction that turns inorganic atmospheric [[carbon|atom-c]] into living biomass. Coordinating a catalytic [[magnesium|atom-mg]] ion at each of its eight active pockets, the enzyme welds one CO2 molecule onto five-carbon ribulose-1,5-bisphosphate and cleaves the unstable intermediate into two three-carbon 3-PGA molecules. Consuming eighteen ATP from [[CF1CF0 ATP synthase|real-bio-atpsynth]] and twelve NADPH from [[Photosystem I|real-bio-psi]], the Calvin cycle reduces these fragments into G3P sugars that assemble into [[glucose|glucose]] and [[starch|starch]].',
      blueprint:
        'Role: Primary photosynthetic carboxylase anchoring the Calvin-Benson cycle and converting inorganic CO2 into organic carbohydrates; Inputs: 6 atmospheric CO2 molecules, 6 five-carbon RuBP acceptors, 18 ATP from [[ATP synthase|real-bio-atpsynth]], and 12 NADPH from [[PSI|real-bio-psi]]; Inside: 550 kDa L8S8 hexadecamer (PDB 1RCX) with eight [[Mg2+|atom-mg]]-coordinated catalytic sites on large RbcL subunits stabilized by eight small RbcS subunits; Outputs: 2 net three-carbon G3P trioses assembling into 1 [[glucose|glucose]] (C6H12O6) plus regenerated ADP, Pi, and NADP+ returning to the thylakoids.',
      scientific:
        'Form I plant ribulose-1,5-bisphosphate carboxylase/oxygenase ([[RuBisCO|rubisco]] L8S8 hexadecamer; spinach crystal structure PDB 1RCX; ~550 kDa comprising eight chloroplast-encoded ~55 kDa catalytic RbcL subunits and eight nuclear-encoded ~15 kDa RbcS subunits). Requires carbamylation of Lys201 and coordination of a catalytic [[Mg2+|atom-mg]] ion to enolize RuBP and add CO2 (kcat approx 3-10 s-1 per active site), yielding two 3-phosphoglycerate molecules per fixation event. Six Calvin turns consume 6 CO2 + 18 ATP + 12 NADPH to export two G3P equivalents into [[glucose|glucose]] and [[starch|starch]], while occasional O2 side-fixation triggers photorespiration.'
    },
    es: {
      simple:
        '[[RuBisCO|rubisco]] es la abundante enzima [[proteica|protein]] del estroma de los [[cloroplastos|chloroplast]] que captura dióxido de carbono gaseoso del aire y lo fija en esqueletos orgánicos. Impulsada por ATP y NADPH de las [[reacciones luminosas|light-reactions]], fabrica los bloques de la [[glucosa|glucose]].',
      story:
        'Presente a altísima concentración en el estroma del [[cloroplasto|chloroplast]], la enzima RuBisCO de dieciséis subunidades ejecuta el paso decisivo que convierte el [[carbono|atom-c]] inorgánico atmosférico en materia viva. Con un ion catalítico de [[magnesio|atom-mg]] en cada uno de sus ocho bolsillos activos, suelda una molécula de CO₂ sobre la ribulosa-1,5-bisfosfato de cinco carbonos y parte el intermediario inestable en dos moléculas de 3-PGA. Consumiendo dieciocho ATP de la [[ATP sintasa CF₁CF₀|real-bio-atpsynth]] y doce NADPH del [[Fotosistema I|real-bio-psi]], el ciclo de Calvin reduce estos fragmentos en G3P que forman [[glucosa|glucose]] y [[almidón|starch]].',
      blueprint:
        'Rol: Carboxilasa fotosintética principal que ancla el ciclo de Calvin–Benson y transforma CO₂ inorgánico en carbohidratos orgánicos · Entradas: 6 moléculas de CO₂ atmosférico, 6 aceptores RuBP, 18 ATP de la [[ATP sintasa|real-bio-atpsynth]] y 12 NADPH del [[PSI|real-bio-psi]] · Interior: Hexadecámero L₈S₈ de 550 kDa (PDB 1RCX) con ocho sitios activos coordinados con [[Mg²⁺|atom-mg]] en subunidades RbcL y ocho subunidades RbcS · Salida: 2 triosas G3P netas que originan 1 [[glucosa|glucose]] (C₆H₁₂O₆) más ADP, Pᵢ y NADP⁺ reciclados hacia los tilacoides.',
      scientific:
        'Ribulosa-1,5-bisfosfato carboxilasa/oxigenasa vegetal de forma I (hexadecámero L₈S₈ [[RuBisCO|rubisco]]; estructura cristalográfica PDB 1RCX; ~550 kDa integrados por ocho subunidades catalíticas cloroplásticas RbcL de ~55 kDa y ocho subunidades nucleares RbcS de ~15 kDa). Requiere carbamilación de Lys201 y un ion [[Mg²⁺|atom-mg]] catalítico para enolizar RuBP y adicionar CO₂ (k_cat ≈ 3–10 s⁻¹), generando dos 3-fosfogliceratos. Seis vueltas de Calvin consumen 6 CO₂ + 18 ATP + 12 NADPH produciendo dos G3P hacia [[glucosa|glucose]] y [[almidón|starch]], con fotorrespiración ocasional si ingresa O₂.'
    }
  },

  'real-bio-complex1': {
    en: {
      simple:
        'Complex I is the giant L-shaped entry gate of the mitochondrial [[electron transport chain|electron-transport-chain]]. It strips high-energy electrons from NADH molecules made during [[glucose|glucose]] breakdown and uses that energy to pump four protons across the inner cristae membrane.',
      story:
        'Towering across the folded inner membrane of the [[mitochondrion|mitochondrion]], forty-five-subunit Complex I is the largest proton-pumping nanomachine in aerobic respiration. Each NADH molecule charged by glycolysis and the [[Krebs cycle|real-bio-citrate]] docks at the tip of its matrix arm, donating two electrons to a flavin mononucleotide cofactor that relays them down a nine-nanometer wire of seven [[iron|atom-fe]]-[[sulfur|atom-s]] clusters to membrane-buried ubiquinone. That redox drop drives long-range electrostatic shifts along a horizontal amphipathic helix inside the membrane arm, opening four antiporter-like proton channels that push four H+ into the intermembrane space toward [[ATP synthase|real-bio-atpsynth]].',
      blueprint:
        'Role: Primary entry oxidoreductase and largest proton pump (4 H+ per NADH) of mitochondrial oxidative phosphorylation; Inputs: Matrix NADH + H+ charged by glycolysis and the [[Krebs cycle|real-bio-citrate]], plus oxidized lipid-core ubiquinone (Q); Inside: ~980 kDa L-shaped 45-subunit supercomplex (PDB 5XTD) with matrix FMN + 7 [[Fe-S|atom-fe]] electron relay coupled to four transmembrane proton-pumping modules; Outputs: Oxidized NAD+ returned to the [[matrix|real-bio-citrate]], reduced ubiquinol (QH2) forwarded toward Complex III and [[Complex IV|real-bio-complex4]], and 4 pumped H+ fueling [[F1F0 ATP synthase|real-bio-atpsynth]].',
      scientific:
        'Mammalian mitochondrial respiratory Complex I (NADH:ubiquinone oxidoreductase; cryo-EM PDB 5XTD; ~980 kDa L-shaped assembly of 45 subunits comprising 14 conserved core subunits and 31 supernumerary subunits in cristae membranes of the [[mitochondrion|mitochondrion]]). Oxidizes NADH at a matrix FMN site (NADH -> NAD+ + H+ + 2 e-) and transfers electrons ~9.5 nm across seven [[Fe-S|atom-fe]]-[[S|atom-s]] clusters (N3, N1b, N4, N5, N6a, N6b, N2) to ubiquinone (Q -> QH2). Quinone reduction conformationally couples to four antiporter-like membrane subunits (ND2, ND4, ND5, ND1/ND4L), translocating 4 [[H+|atom-h]] across the inner membrane per NADH to charge the proton-motive force for [[ATP synthase|real-bio-atpsynth]].'
    },
    es: {
      simple:
        'El Complejo I es la enorme compuerta en forma de L que inicia la [[cadena de transporte de electrones|electron-transport-chain]] mitocondrial. Extrae electrones de alta energía del NADH generado al degradar [[glucosa|glucose]] y aprovecha esa energía para bombear cuatro protones a través de la membrana interna.',
      story:
        'Erguido sobre las crestas internas de la [[mitocondria|mitochondrion]], el Complejo I de cuarenta y cinco subunidades es la mayor bomba de protones de la respiración aerobia. Cada NADH cargado por la glucólisis y el [[ciclo de Krebs|real-bio-citrate]] atraca en la punta de su brazo matricial y entrega dos electrones al cofactor FMN, que los conduce por un cable de nueve nanómetros de siete centros [[hierro|atom-fe]]–[[azufre|atom-s]] hasta la ubiquinona intramembrana. Esa caída redox acciona desplazamientos electrostáticos a lo largo de su hélice horizontal interna, abriendo cuatro canales que expulsan cuatro H⁺ hacia el espacio intermembrana para impulsar la [[ATP sintasa|real-bio-atpsynth]].',
      blueprint:
        'Rol: Oxidorreductasa principal de entrada y mayor bomba protónica (4 H⁺ por NADH) de la fosforilación oxidativa mitocondrial · Entradas: NADH + H⁺ matricial procedente de glucólisis y [[ciclo de Krebs|real-bio-citrate]], más ubiquinona (Q) oxidada · Interior: Ensamblaje en L de ~980 kDa y 45 subunidades (PDB 5XTD) con FMN + 7 centros [[Fe–S|atom-fe]] acoplados a cuatro módulos transmembrana bombeadores · Salida: NAD⁺ reciclado a la [[matriz|real-bio-citrate]], ubiquinol (QH₂) hacia el Complejo III y [[Complejo IV|real-bio-complex4]], y 4 H⁺ para la [[ATP sintasa F₁F₀|real-bio-atpsynth]].',
      scientific:
        'Complejo I respiratorio mitocondrial de mamíferos (NADH:ubiquinona oxidorreductasa; crio-EM PDB 5XTD; ~980 kDa en L con 45 subunidades —14 centrales conservadas y 31 supernumerarias— en crestas de la [[mitocondria|mitochondrion]]). Oxida NADH en el sitio FMN matricial transfiriendo 2 e⁻ a lo largo de ~9,5 nm por siete cúmulos [[Fe–S|atom-fe]]–[[S|atom-s]] hasta la ubiquinona (Q → QH₂). La reducción de la quinona acopla mecánicamente a cuatro subunidades antiporter (ND2, ND4, ND5, ND1/ND4L) translocando 4 [[H⁺|atom-h]] por NADH para cargar la fuerza protón-motriz de la [[ATP sintasa|real-bio-atpsynth]].'
    }
  },

  'real-bio-complex4': {
    en: {
      simple:
        'Complex IV is the final station of the mitochondrial [[electron transport chain|electron-transport-chain]] and the exact reason aerobic organisms breathe oxygen. It combines spent electrons, protons, and molecular oxygen into harmless [[water|water]] while pumping additional protons to sustain [[ATP synthesis|real-bio-atpsynth]].',
      story:
        'Stationed at the end of the cristae [[electron transport chain|electron-transport-chain]] inside the [[mitochondrion|mitochondrion]], Cytochrome c Oxidase accepts single electrons one at a time from mobile cytochrome c on the outer leaflet. Inside its buried binuclear catalytic center of heme a3 [[iron|atom-fe]] and copper CuB, four electrons and four matrix protons cleave one O2 double bond cleanly into two [[water|water]] molecules without leaking destructive peroxide radicals, while pumping four more protons across the membrane. Remove oxygen and Complex IV stalls instantly, backing up [[Complex I|real-bio-complex1]] and collapsing cellular output from thirty-two ATP down to just two from anaerobic glycolysis.',
      blueprint:
        'Role: Terminal respiratory oxidase coupling O2 reduction to H2O with transmembrane proton pumping (2 H+ pumped per 2 e-); Inputs: Reduced intermembrane cytochrome c, dissolved molecular O2, and matrix [[H+|atom-h]] protons (4 chemical + 4 pumped per O2); Inside: Dimeric 13-subunit Cytochrome c Oxidase (PDB 1V54) featuring binuclear CuA, heme a, and catalytic heme a3-CuB center with K/D proton pathways; Outputs: Two harmless [[H2O|water]] molecules, oxidized cytochrome c, and final electrochemical gradient boost feeding [[F1F0 ATP synthase|real-bio-atpsynth]].',
      scientific:
        'Mammalian mitochondrial Complex IV (cytochrome c oxidase; bovine heart crystal structure PDB 1V54; ~200 kDa monomer functioning as a cristae dimer of 13 subunits per monomer, with core COX1-3 encoded by mitochondrial DNA). Receives electrons sequentially from soluble cytochrome c at binuclear CuA and relays them via low-spin heme a to the oxygen-binding high-spin heme a3 [[Fe|atom-fe]]-CuB site. Catalyzes the four-electron reaction 4 Cyt c(red) + O2 + 8 H+(matrix) -> 4 Cyt c(ox) + 2 [[H2O|water]] + 4 H+(IMS), pumping 1 [[H+|atom-h]] per electron (2 H+ per NADH-derived electron pair) while maintaining forward flux through [[Complex I|real-bio-complex1]] and [[ATP synthase|real-bio-atpsynth]].'
    },
    es: {
      simple:
        'El Complejo IV es la estación terminal de la [[cadena de transporte de electrones|electron-transport-chain]] mitocondrial y la razón exacta por la que respiramos oxígeno. Combina electrones agotados, protones y oxígeno molecular en [[agua|water]] inocua mientras bombea más protones para sostener la [[síntesis de ATP|real-bio-atpsynth]].',
      story:
        'Situada al final de la [[cadena respiratoria|electron-transport-chain]] en las crestas de la [[mitocondria|mitochondrion]], la citocromo c oxidasa recoge electrones de uno en uno desde el citocromo c móvil en la cara externa. En su núcleo binuclear enterrado de [[hierro|atom-fe]] hemo a₃ y cobre Cu_B, cuatro electrones y cuatro protones matriciales escinden limpiamente un O₂ en dos moléculas de [[agua|water]] sin liberar radicales dañinos, bombeando además cuatro protones al espacio intermembrana. Sin oxígeno, el Complejo IV se detiene al instante, bloquea el [[Complejo I|real-bio-complex1]] y desploma la producción de treinta y dos ATP a solo dos de la glucólisis.',
      blueprint:
        'Rol: Oxidasa respiratoria terminal que acopla la reducción de O₂ a H₂O con el bombeo transmembrana de protones (2 H⁺ por par de e⁻) · Entradas: Citocromo c reducido, O₂ molecular disuelto y [[H⁺|atom-h]] matriciales (4 químicos + 4 bombeados por O₂) · Interior: Dímero de citocromo c oxidasa de 13 subunidades (PDB 1V54) con centros Cu_A, hemo a y sitio catalítico hemo a₃–Cu_B con canales protónicos K y D · Salida: Dos moléculas de [[H₂O|water]], citocromo c oxidado y empuje final del gradiente para la [[ATP sintasa F₁F₀|real-bio-atpsynth]].',
      scientific:
        'Complejo IV mitocondrial de mamíferos (citocromo c oxidasa; cristalografía bovina PDB 1V54; dímero en crestas con monómeros de ~200 kDa y 13 subunidades, con núcleo COX1–3 codificado en el genoma mitocondrial). Recibe electrones del citocromo c en Cu_A y los transfiere por el hemo a hacia el centro catalítico hemo a₃ [[Fe|atom-fe]]–Cu_B. Cataliza 4 Cyt c(red) + O₂ + 8 H⁺(matriz) → 4 Cyt c(ox) + 2 [[H₂O|water]] + 4 H⁺(EIM), bombeando 1 [[H⁺|atom-h]] por electrón mientras sostiene el flujo aeróbico desde el [[Complejo I|real-bio-complex1]] hasta la [[ATP sintasa|real-bio-atpsynth]].'
    }
  },

  'real-bio-atpsynth': {
    en: {
      simple:
        '[[ATP synthase|atp-synthase]] is a spinning molecular turbine embedded in both [[mitochondrial|mitochondrion]] cristae and [[chloroplast|chloroplast]] thylakoids. As concentrated hydrogen protons flow through its membrane ring, the turning central stalk squeezes ADP and phosphate together to forge fresh ATP.',
      story:
        'Across all three domains of life, cells pay for biochemical work with the same rotary [[protein|protein]] generator. Driven by the electrochemical proton pressure built up by [[Complex I|real-bio-complex1]] through [[Complex IV|real-bio-complex4]] in the [[mitochondrion|mitochondrion]], or by [[PSII|real-bio-psii]] and [[Cytochrome b6f|real-bio-b6f]] in the [[chloroplast|chloroplast]], hydrogen ions enter a half-channel in the stationary a-subunit, bind glutamate residues on the membrane c-ring, and push the rotor around at over one hundred revolutions per second. Locked to the spinning c-ring, the asymmetric gamma stalk forces three catalytic beta pockets inside the stationary F1 crown through open, loose, and tight conformations, pressing ADP and inorganic [[phosphate|atom-p]] into three ATP molecules per full turn.',
      blueprint:
        'Role: Chemiosmotic rotary molecular turbine converting transmembrane proton-motive force into high-energy ATP phosphoanhydride bonds; Inputs: Steep transmembrane [[H+|atom-h]] electrochemical gradient, soluble ADP, inorganic [[Pi|atom-p]], and catalytic [[Mg2+|atom-mg]]; Inside: Membrane-embedded F0/CF0 proton rotor (a-subunit half-channels + c8 mammalian or c14 chloroplast ring) driving an asymmetric gamma stalk inside a stator-anchored alpha3-beta3 F1 head (PDB 5ARA / 6FKF); Outputs: 3 ATP synthesized per 360-degree revolution (~26-28 oxidative ATP per [[glucose|glucose]] in mitochondria; 18 ATP per 6 CO2 in chloroplasts).',
      scientific:
        'Rotary F-type H+-translocating [[ATP synthase|atp-synthase]] (intact bovine mitochondrial F1F0 cryo-EM PDB 5ARA, c8-ring ~2.7 H+/ATP plus 1 H+ for Pi/ADP transport = ~3.7 H+/ATP; spinach chloroplast CF1CF0 cryo-EM PDB 6FKF, c14-ring = 4.67 H+/ATP). Comprises a rotating membrane c-ring and central gamma-delta-epsilon stalk turning inside a peripheral-stalk-braced alpha3-beta3 catalytic hexamer. Proton flow down delta-p drives Boyer binding-change cycling across beta-E (open), beta-DP (loose), and beta-TP (tight) states with [[Mg2+|atom-mg]]-assisted condensation of ADP + [[Pi|atom-p]] -> ATP, generating ~26-28 ATP in aerobic respiration (~30-32 total per [[glucose|glucose]]) and powering [[RuBisCO|real-bio-rubisco]] carbon fixation.'
    },
    es: {
      simple:
        'La [[ATP sintasa|atp-synthase]] es una turbina molecular giratoria incrustada tanto en las crestas [[mitocondriales|mitochondrion]] como en los tilacoides del [[cloroplasto|chloroplast]]. Al cruzar los protones acumulados por su anillo de membrana, el eje central gira y une ADP con fosfato para fabricar ATP nuevo.',
      story:
        'En todos los dominios celulares, la vida financia su trabajo químico con el mismo generador [[proteico|protein]] rotatorio. Impulsados por la presión protónica acumulada por el [[Complejo I|real-bio-complex1]] hasta el [[Complejo IV|real-bio-complex4]] en la [[mitocondria|mitochondrion]] —o por [[PSII|real-bio-psii]] y [[citocromo b₆f|real-bio-b6f]] en el [[cloroplasto|chloroplast]]—, los iones hidrógeno entran por un semicanal de la subunidad a, se unen al anillo c y hacen girar el rotor a más de cien revoluciones por segundo. Acoplado al anillo, el tallo asimétrico γ obliga a tres bolsillos β de la corona F₁ fija a ciclar por estados abierto, laxo y tenso, prensando ADP y [[fosfato|atom-p]] en tres moléculas de ATP por vuelta.',
      blueprint:
        'Rol: Turbina molecular rotatoria quimiosmótica que convierte la fuerza protón-motriz en enlaces fosfoanhídrido de ATP · Entradas: Gradiente electroquímico de [[H⁺|atom-h]], ADP soluble, [[Pᵢ|atom-p]] inorgánico y [[Mg²⁺|atom-mg]] catalítico · Interior: Rotor protónico F₀/CF₀ (semicanales a + anillo c₈ mitocondrial o c₁₄ cloroplástico) acoplado al tallo γ dentro de la cabeza α₃β₃ sujeta por un estator (PDB 5ARA / 6FKF) · Salida: 3 ATP por revolución completa (~26–28 ATP oxidativos por [[glucosa|glucose]] en mitocondrias; 18 ATP por 6 CO₂ en cloroplastos).',
      scientific:
        '[[ATP sintasa|atp-synthase]] rotatoria tipo F translocadora de protones (crio-EM bovina mitocondrial F₁F₀ PDB 5ARA con anillo c₈ ≈ 2,7 H⁺/ATP + 1 H⁺ por transporte de Pᵢ/ADP ≈ 3,7 H⁺/ATP; cloroplástica CF₁CF₀ PDB 6FKF con anillo c₁₄ = 4,67 H⁺/ATP). Integra un rotor c–γ–δ–ε que gira dentro del hexámero catalítico α₃β₃ fijado por el tallo periférico. El flujo protónico a favor de Δp acciona el mecanismo de cambio de unión de Boyer (β_E, β_DP, β_TP) condensando ADP + [[Pᵢ|atom-p]] con [[Mg²⁺|atom-mg]] para rendir ~26–28 ATP (~30–32 totales por [[glucosa|glucose]]) y alimentar a [[RuBisCO|real-bio-rubisco]].'
    }
  },

  'real-bio-citrate': {
    en: {
      simple:
        'Citrate synthase opens the Krebs (citric acid) cycle inside the [[mitochondrial|mitochondrion]] matrix. It fuses two-carbon acetyl fragments derived from [[glucose|glucose]] onto a four-carbon acceptor to make six-carbon citrate, launching the reactions that exhale CO2 and load NADH electron carriers.',
      story:
        'After cytosolic glycolysis splits one [[glucose|glucose]] into two pyruvate molecules and pyruvate dehydrogenase strips off the first two CO2 molecules, two-carbon acetyl-CoA enters the [[mitochondrial|mitochondrion]] matrix. Dimeric Citrate Synthase snaps shut around four-carbon oxaloacetate before accepting acetyl-CoA, excluding [[water|water]] from its buried active pocket so thioester cleavage cleanly forges six-carbon citrate without wasteful hydrolysis. Over seven subsequent enzymatic steps around the ring, every remaining carbon leaves as CO2 back toward [[chloroplasts|chloroplast]] while eight more high-energy electron carriers (6 NADH and 2 FADH2 per glucose) charge up for [[Complex I|real-bio-complex1]] and Complex II.',
      blueprint:
        'Role: Pacemaker condensing enzyme initiating the matrix Krebs / Citric Acid Cycle to complete aerobic carbon oxidation; Inputs: 2 Acetyl-CoA (from pyruvate oxidation of 1 [[glucose|glucose]]), 2 regenerated oxaloacetate acceptors, and 2 [[H2O|water]] molecules; Inside: Homodimeric Citrate Synthase (PDB 1CTS) executing induced-fit domain closure to form citryl-CoA and release CoA-SH + citrate into the 8-step cyclic pathway; Outputs: 4 matrix CO2 molecules (6 CO2 total per glucose), 2 GTP/ATP via substrate phosphorylation, plus 6 NADH and 2 FADH2 feeding [[Complex I|real-bio-complex1]] and oxidative phosphorylation.',
      scientific:
        'Mitochondrial matrix Citrate Synthase (homodimer crystal structure PDB 1CTS; ~100 kDa dimer) catalyzing the irreversible Claisen condensation of acetyl-CoA + oxaloacetate + [[H2O|water]] -> citrate + CoA-SH (delta-G0 prime approx -32.2 kJ/mol), committing carbon skeletons to the eight-enzyme tricarboxylic acid (Krebs) cycle inside the [[mitochondrion|mitochondrion]]. Sequential binding of oxaloacetate induces an 18-degree hinge closure creating the acetyl-CoA pocket and preventing premature thioester hydrolysis. Two full cycle turns per [[glucose|glucose]] yield 4 CO2 (6 CO2 total with PDH), 2 GTP/ATP, 6 NADH (feeding [[Complex I|real-bio-complex1]]), and 2 FADH2 (entering via membrane-bound Complex II).'
    },
    es: {
      simple:
        'La citrato sintasa abre el ciclo de Krebs (del ácido cítrico) en la matriz [[mitocondrial|mitochondrion]]. Une fragmentos acetilo de dos carbonos derivados de la [[glucosa|glucose]] con un aceptor de cuatro carbonos para formar citrato, iniciando las reacciones que exhalan CO₂ y cargan NADH.',
      story:
        'Tras partir la glucólisis una [[glucosa|glucose]] en dos piruvatos y liberar la piruvato deshidrogenasa los dos primeros CO₂, el acetil-CoA de dos carbonos ingresa a la matriz [[mitocondrial|mitochondrion]]. La citrato sintasa dimérica se cierra sobre el oxaloacetato antes de aceptar al acetil-CoA, excluyendo el [[agua|water]] de su bolsillo activo para condensar citrato de seis carbonos sin hidrólisis improductiva. En las siete etapas siguientes del anillo, el resto del carbono sale como CO₂ hacia los [[cloroplastos|chloroplast]] mientras se cargan seis NADH y dos FADH₂ por glucosa para el [[Complejo I|real-bio-complex1]] y el Complejo II.',
      blueprint:
        'Rol: Enzima condensadora marcapasos que inicia el ciclo de Krebs matricial completando la oxidación aerobia del carbono · Entradas: 2 Acetil-CoA (procedentes de 1 [[glucosa|glucose]]), 2 oxaloacetatos regenerados y 2 [[H₂O|water]] · Interior: Homodímero de citrato sintasa (PDB 1CTS) con cierre por ajuste inducido que forma citril-CoA y libera CoA-SH + citrato hacia la ruta cíclica de ocho pasos · Salida: 4 CO₂ matriciales (6 CO₂ totales por glucosa), 2 GTP/ATP y 6 NADH + 2 FADH₂ hacia el [[Complejo I|real-bio-complex1]] y la fosforilación oxidativa.',
      scientific:
        'Citrato sintasa de la matriz mitocondrial (homodímero cristalográfico PDB 1CTS; ~100 kDa) que cataliza la condensación irreversible de Claisen acetil-CoA + oxaloacetato + [[H₂O|water]] → citrato + CoA-SH (ΔG°′ ≈ −32,2 kJ/mol), inaugurando el ciclo de los ácidos tricarboxílicos (Krebs) dentro de la [[mitocondria|mitochondrion]]. La unión previa de oxaloacetato induce un giro de bisagra de 18° que arma el bolsillo del acetil-CoA y bloquea la hidrólisis prematura. Dos vueltas por [[glucosa|glucose]] rinden 4 CO₂ (6 totales con PDH), 2 GTP/ATP, 6 NADH (hacia el [[Complejo I|real-bio-complex1]]) y 2 FADH₂ (vía Complejo II).'
    }
  },

  'real-membrane-transport': {
    en: {
      simple:
        'Every cell survives by controlling what crosses its five-nanometer [[plasma membrane|plasma-membrane]]. Passive diffusion, [[aquaporin|real-mem-aqp1]] water channels, [[GLUT1|real-mem-glut1]] sugar carriers, ATP-burning [[ion pumps|real-mem-nak]], and [[vesicles|real-mem-vesicle]] regulate volume, nutrients, and voltage across both [[animal|real-cell]] and [[plant|real-plant]] cells.',
      story:
        'Set an [[animal cell|real-cell]] beside a walled [[plant cell|real-plant]] in hypotonic, isotonic, and hypertonic water, and a single physical rule explains every shape change: [[water|water]] flows across selective membranes toward higher solute concentration. Zoom into the five-nanometer [[phospholipid|phospholipid]] bilayer to see all five cellular traffic lanes working together. Small gases slip straight through lipid tails while [[aquaporins|real-mem-aqp1]] stream water single-file; polar [[glucose|glucose]] rides [[GLUT1|real-mem-glut1]] like a free-spinning revolving door moving with the crowd, whereas the [[Na+/K+ pump|real-mem-nak]] acts as a powered turnstile burning ATP to push ions uphill and [[vesicles|real-mem-vesicle]] haul bulk cargo.',
      blueprint:
        'Role: Integrated whole-cell tonicity comparator and 5 nm [[plasma membrane|plasma-membrane]] molecular transport lab spanning passive, active, and vesicular pathways; Inputs: Extracellular vs cytosolic solute gradients (H2O, O2, CO2, [[glucose|glucose]], Na+, K+) plus cytosolic ATP from [[ATP synthase|real-bio-atpsynth]]; Inside: Side-by-side wall-less [[animal cell|real-cell]] vs [[cellulose|cellulose]]-walled [[plant cell|real-plant]] paired with [[POPC bilayer|phospholipid]], [[AQP1|real-mem-aqp1]], [[GLUT1|real-mem-glut1]], [[Na+/K+-ATPase|real-mem-nak]], and [[Clathrin/SNARE vesicles|real-mem-vesicle]]; Outputs: Osmotic volume states (lysis/turgid, stable/flaccid, crenation/plasmolysis), resting voltage (-70 mV), and selective solute homeostasis.',
      scientific:
        'Multi-scale biophysical synthesis connecting 50 um whole-cell osmosis in wall-less [[animal cells|real-cell]] (lysis, homeostasis, crenation) and [[cell-wall|cell-wall]]/[[central-vacuole|central-vacuole]]-braced [[plant cells|real-plant]] (turgidity, flaccidity, plasmolysis) down to the 5 nm [[phospholipid|phospholipid]] bilayer and 0.1 nm hydrated ions. Simultaneously integrates nonpolar O2/CO2 simple diffusion, single-file [[H2O|water]] permeation via [[AQP1|real-mem-aqp1]] (PDB 1J4N; ~10^9 H2O/s), passive alternating-access [[glucose|glucose]] uniport via [[GLUT1|real-mem-glut1]] (PDB 4PYP), primary active electrogenic 3 Na+ out / 2 K+ in pumping via [[Na+/K+-ATPase|real-mem-nak]] (PDB 3WGU; Vm approx -70 mV), and bulk [[Clathrin/SNARE|real-mem-vesicle]] transport (PDB 1XI4 / 1SFC).'
    },
    es: {
      simple:
        'Toda célula sobrevive controlando qué cruza su [[membrana plasmática|plasma-membrane]] de cinco nanómetros. La difusión simple, los canales de agua [[acuaporina|real-mem-aqp1]], los transportadores [[GLUT1|real-mem-glut1]], las [[bombas de iones|real-mem-nak]] con ATP y las [[vesículas|real-mem-vesicle]] regulan volumen, nutrientes y voltaje en células [[animales|real-cell]] y [[vegetales|real-plant]].',
      story:
        'Al comparar una [[célula animal|real-cell]] junto a una [[célula vegetal|real-plant]] con pared en medios hipotónico, isotónico e hipertónico, una sola ley física explica cada deformación: el [[agua|water]] fluye a través de membranas selectivas hacia donde hay mayor concentración de solutos. Al acercarse a la bicapa de [[fosfolípidos|phospholipid]] de cinco nanómetros aparecen las cinco vías trabajando en paralelo: los gases cruzan entre las colas lipídicas y las [[acuaporinas|real-mem-aqp1]] conducen agua en fila india; la [[glucosa|glucose]] atraviesa [[GLUT1|real-mem-glut1]] como una puerta giratoria libre movida por la multitud, mientras la [[bomba Na⁺/K⁺|real-mem-nak]] actúa como un torniquete motorizado que gasta ATP para empujar iones cuesta arriba y las [[vesículas|real-mem-vesicle]] mueven cargas masivas.',
      blueprint:
        'Rol: Comparador integral de tonicidad celular y laboratorio de transporte en la [[membrana plasmática|plasma-membrane]] de 5 nm que reúne vías pasivas, activas y vesiculares · Entradas: Gradientes de solutos (H₂O, O₂, CO₂, [[glucosa|glucose]], Na⁺, K⁺) y ATP citosólico de la [[ATP sintasa|real-bio-atpsynth]] · Interior: [[Célula animal|real-cell]] sin pared frente a [[célula vegetal|real-plant]] con [[celulosa|cellulose]] junto a [[bicapa POPC|phospholipid]], [[AQP1|real-mem-aqp1]], [[GLUT1|real-mem-glut1]], [[Na⁺/K⁺-ATPasa|real-mem-nak]] y [[vesículas Clatrina/SNARE|real-mem-vesicle]] · Salida: Estados osmóticos (lisis/turgencia, equilibrio/flacidez, crenación/plasmólisis), voltaje basal (−70 mV) y homeostasis selectiva.',
      scientific:
        'Síntesis biofísica multiescala que vincula la ósmosis en [[células animales|real-cell]] de 20 µm sin pared (lisis, homeostasis, crenación) y [[células vegetales|real-plant]] con [[pared celular|cell-wall]] y [[vacuola central|central-vacuole]] (turgencia, flacidez, plasmólisis) hasta la bicapa de [[fosfolípidos|phospholipid]] de 5 nm e iones hidratados de 0,1 nm. Integra difusión simple de O₂/CO₂, paso de [[H₂O|water]] en fila india por [[AQP1|real-mem-aqp1]] (PDB 1J4N; ~10⁹ H₂O/s), uniporte pasivo de [[glucosa|glucose]] por [[GLUT1|real-mem-glut1]] (PDB 4PYP), bombeo electrogénico 3 Na⁺ fuera / 2 K⁺ dentro de [[Na⁺/K⁺-ATPasa|real-mem-nak]] (PDB 3WGU; V_m ≈ −70 mV) y transporte en bloque [[Clatrina/SNARE|real-mem-vesicle]] (PDB 1XI4 / 1SFC).'
    }
  },

  'real-mem-aqp1': {
    en: {
      simple:
        'Aquaporin AQP1 is a dedicated hourglass-shaped [[channel protein|channel-protein]] built into the [[plasma membrane|plasma-membrane]] that lets billions of [[water|water]] molecules stream through each second while slamming the door on dissolved ions and protons.',
      story:
        'Pure [[phospholipid|phospholipid]] bilayers pass [[water|water]] sluggishly, so kidneys, red blood cells, and [[plant|real-plant]] roots pack their membranes with homotetrameric aquaporin channels (AQP1 in animals, PIP2 in plants). Each of the four monomers holds its own narrow 0.28-nanometer pore lined by hydrophobic walls and two half-helices meeting at the center with conserved Asparagine-Proline-Alanine (NPA) motifs. As single-file water molecules pass this waist, the NPA dipoles flip every water molecule 180 degrees, snapping the hydrogen-bond wire so protons (H+) cannot hop through and short-circuit cellular voltage.',
      blueprint:
        'Role: High-throughput passive osmotic water channel accelerating transmembrane H2O equilibration while preserving strict proton exclusion; Inputs: Bidirectional water-potential gradient (hypotonic influx, isotonic zero net flux, hypertonic efflux) across the [[plasma membrane|plasma-membrane]]; Inside: Homotetrameric AQP1 (PDB 1J4N) / plant PIP2 (PDB 1Z98) forming four independent hourglass pores with a 0.28 nm ar/R constriction and central NPA dipole-flipping filter; Outputs: Rapid single-file [[H2O|water]] flow (~10^9 molecules/s per pore at 0 ATP) driving volume and turgor changes in [[animal|real-cell]] and [[plant|real-plant]] cells.',
      scientific:
        'Homotetrameric integral membrane water [[channel protein|channel-protein]] Aquaporin-1 (bovine AQP1 crystal structure PDB 1J4N; ~28 kDa per monomer with six transmembrane helices plus two half-helices B and E; plant homolog PIP2;1 PDB 1Z98). Each monomer conducts an independent single-file [[H2O|water]] channel (~10^9 H2O/s, passive, 0 ATP) governed by two selectivity gates: an extracellular aromatic/arginine (ar/R) filter (~0.28 nm diameter) sterically excluding hydrated ions and solutes, and central Asn-Pro-Ala (NPA) dipoles that reorient each passing water 180 degrees to break Grotthuss [[H+|atom-h]] proton conduction across the [[plasma membrane|plasma-membrane]].'
    },
    es: {
      simple:
        'La acuaporina AQP1 es una [[proteína canal|channel-protein]] con forma de reloj de arena inserta en la [[membrana plasmática|plasma-membrane]] que deja fluir miles de millones de moléculas de [[agua|water]] por segundo mientras bloquea iones disueltos y protones.',
      story:
        'Las bicapas puras de [[fosfolípidos|phospholipid]] dejan pasar el [[agua|water]] con lentitud, por lo que riñones, eritrocitos y raíces [[vegetales|real-plant]] tapizan sus membranas con canales homotetraméricos de acuaporina (AQP1 en animales, PIP2 en plantas). Cada uno de los cuatro monómeros alberga un poro independiente de 0,28 nanómetros donde convergen dos semihélices con motivos conservados Asparagina–Prolina–Alanina (NPA). Al cruzar esta cintura en fila india, los dipolos NPA voltean 180 grados cada molécula de agua, rompiendo la cadena de puentes de hidrógeno para impedir que los protones (H⁺) fuguen y descarguen el voltaje celular.',
      blueprint:
        'Rol: Canal osmótico pasivo de altísimo caudal que acelera el equilibrio hídrico transmembrana manteniendo exclusión absoluta de protones · Entradas: Gradiente bidireccional de potencial hídrico (entrada hipotónica, flujo neto cero isotónico, salida hipertónica) en la [[membrana plasmática|plasma-membrane]] · Interior: Homotetrámero AQP1 (PDB 1J4N) / PIP2 vegetal (PDB 1Z98) con cuatro poros en reloj de arena, constricción ar/R de 0,28 nm y filtro NPA inversor de dipolos · Salida: Flujo rápido de [[H₂O|water]] en fila india (~10⁹ moléculas/s por poro, 0 ATP) que regula volumen y turgencia en células [[animales|real-cell]] y [[vegetales|real-plant]].',
      scientific:
        '[[Proteína canal|channel-protein]] integral homotetramérica de agua Acuaporina-1 (estructura cristalográfica bovina AQP1 PDB 1J4N; monómeros de ~28 kDa con seis hélices transmembrana y dos semihélices B y E; homólogo vegetal PIP2;1 PDB 1Z98). Cada monómero conduce [[H₂O|water]] en fila india (~10⁹ moléculas/s, pasivo, 0 ATP) controlado por dos filtros: la constricción extracelular aromática/arginina (ar/R, ~0,28 nm) que excluye solutos e iones hidratados, y los dipolos centrales Asn–Pro–Ala (NPA) que giran 180° cada agua rompiendo la conducción protónica de Grotthuss ([[H⁺|atom-h]]) en la [[membrana plasmática|plasma-membrane]].'
    }
  },

  'real-mem-glut1': {
    en: {
      simple:
        'GLUT1 is a passive carrier [[protein|protein]] in the [[plasma membrane|plasma-membrane]] that escorts polar [[glucose|glucose]] molecules across the oily lipid core without spending ATP. It rocks back and forth between outward-open and inward-open shapes to release sugar into the [[cytosol|cytosol]].',
      story:
        'Too large and studded with polar hydroxyl groups to diffuse through the hydrophobic tails of the [[phospholipid|phospholipid]] bilayer, D-[[glucose|glucose]] depends on twelve-helix GLUT1 carriers to enter brain and red blood cells. Unlike an open pore such as [[aquaporin|real-mem-aqp1]], GLUT1 operates by a strict alternating-access rocker-switch cycle: sugar binds a hydrogen-bonded pocket while the carrier opens outward, triggers a brief doubly-sealed occluded state, and rocks inward to release glucose into the [[cytosol|cytosol]] with zero ATP hydrolyzed. Immediate phosphorylation inside the cell keeps cytosolic free glucose low, sustaining steady downhill import.',
      blueprint:
        'Role: Passive facilitated-diffusion uniporter shuttling polar D-glucose down its concentration gradient without ever opening a leaky pore; Inputs: Higher extracellular D-[[glucose|glucose]] concentration (downhill delta-C; 0 ATP required) across the [[plasma membrane|plasma-membrane]]; Inside: 12-transmembrane-helix Major Facilitator Superfamily carrier GLUT1 / SLC2A1 (PDB 4PYP) rocking across outward-open <-> occluded <-> inward-open states via N- and C-terminal six-helix lobes; Outputs: Rapid, stereospecific cytosolic [[glucose|glucose]] delivery feeding glycolysis and [[cellular respiration|real-bioenergetics]].',
      scientific:
        'Human facilitated D-[[glucose|glucose]] uniporter GLUT1 (SLC2A1; Major Facilitator Superfamily crystal structure PDB 4PYP; ~54 kDa monomer of 12 transmembrane alpha-helices arranged in pseudo-symmetric N- and C-terminal 6-TM domains plus an intracellular ICH scaffold). Catalyzes passive, saturable, stereospecific D-glucose translocation down its chemical gradient (Km approx 1-3 mM; 0 ATP) through an alternating-access rocker-switch mechanism (outward-open <-> occluded <-> inward-open), preventing transmembrane ion leakage across the [[plasma membrane|plasma-membrane]] while supplying [[cytosol|cytosol]] hexokinase to drive [[bioenergetic|real-bioenergetics]] glycolysis.'
    },
    es: {
      simple:
        'GLUT1 es una [[proteína|protein]] transportadora pasiva de la [[membrana plasmática|plasma-membrane]] que acompaña a la [[glucosa|glucose]] polar a cruzar el núcleo lipídico sin gastar ATP. Bascula entre una apertura externa y otra interna para liberar el azúcar en el [[citosol|cytosol]].',
      story:
        'Demasiado grande y cubierta de grupos hidroxilo polares para atravesar las colas hidrofóbicas de los [[fosfolípidos|phospholipid]], la D-[[glucosa|glucose]] depende del transportador GLUT1 de doce hélices para ingresar a neuronas y eritrocitos. A diferencia de un poro abierto como la [[acuaporina|real-mem-aqp1]], GLUT1 opera mediante un ciclo estricto de acceso alterno: el azúcar se une al bolsillo polar en conformación abierta hacia fuera, induce un estado ocluido sellado en ambas caras y bascula hacia el interior para soltar glucosa en el [[citosol|cytosol]] sin consumir ATP. La fosforilación inmediata mantiene bajo el gradiente interno y sostiene la entrada continua.',
      blueprint:
        'Rol: Uniportador pasivo de difusión facilitada que introduce D-glucosa polar a favor de gradiente sin abrir jamás un poro continuo · Entradas: Mayor concentración extracelular de D-[[glucosa|glucose]] (ΔC a favor; 0 ATP) en la [[membrana plasmática|plasma-membrane]] · Interior: Transportador GLUT1 / SLC2A1 de 12 hélices transmembrana (PDB 4PYP) que bascula entre estados abierto externo ↔ ocluido ↔ abierto interno mediante lóbulos N y C · Salida: Entrega estereoespecífica de [[glucosa|glucose]] citosólica para alimentar la glucólisis y la [[respiración celular|real-bioenergetics]].',
      scientific:
        'Uniportador humano facilitado de D-[[glucosa|glucose]] GLUT1 (SLC2A1; superfamilia MFS, estructura cristalográfica PDB 4PYP; monómero de ~54 kDa con 12 hélices α transmembrana en dos dominios pseudosimétricos N y C de 6 TM más hélices intracelulares ICH). Cataliza translocación pasiva, saturable y estereoespecífica a favor de gradiente (K_m ≈ 1–3 mM; 0 ATP) mediante un mecanismo de acceso alterno en balancín (abierto externo ↔ ocluido ↔ abierto interno), evitando fugas iónicas en la [[membrana plasmática|plasma-membrane]] y abasteciendo la glucólisis [[bioenergética|real-bioenergetics]] en el [[citosol|cytosol]].'
    }
  },

  'real-mem-nak': {
    en: {
      simple:
        'The [[sodium-potassium pump|na-k-pump]] is an ATP-powered active transport machine embedded in [[animal cell|real-cell]] membranes. Every cycle spends one ATP molecule to push three sodium ions out and pull two potassium ions in against their concentration gradients, charging resting voltage and preventing osmotic swelling.',
      story:
        'Consuming up to a third of a resting [[animal cell|real-cell]] ATP budget, the [[Na+/K+-ATPase|na-k-pump]] maintains the steep ionic imbalance that keeps cells alive and excitable. In its inward-facing E1 state, three cytosolic Na+ ions dock inside the alpha subunit and trigger hydrolysis of one ATP, clamping a [[phosphate|atom-p]] group onto an aspartate residue to flip the pump into its outward-facing E2-P form. After releasing three Na+ outside and binding two extracellular K+ ions, dephosphorylation snaps the pump back to E1 to deliver K+ into the [[cytosol|cytosol]]. Because three positive charges exit for every two entering, the pump helps lock resting voltage near -70 millivolts and keeps animal cells from bursting.',
      blueprint:
        'Role: Electrogenic primary active P-type ion pump maintaining animal Na+/K+ gradients, resting membrane voltage (-70 mV), and osmotic volume homeostasis; Inputs: 3 cytosolic Na+, 2 extracellular K+, and 1 cytosolic ATP + [[Mg2+|atom-mg]] from [[ATP synthase|real-bio-atpsynth]]; Inside: Heterotrimeric alpha-beta-gamma Na+/K+-ATPase (PDB 3WGU) cycling through E1 -> E1~P (Asp phosphorylation) -> E2~P -> E2 -> E1 conformations; Outputs: 3 Na+ exported, 2 K+ imported, 1 ADP + [[Pi|atom-p]] released, net -1 intracellular charge per cycle, and osmotic protection of wall-less [[animal cells|real-cell]].',
      scientific:
        'P2C-type electrogenic primary active [[Na+/K+-ATPase|na-k-pump]] (porcine alpha-beta-gamma crystal structure PDB 3WGU; ~112 kDa catalytic alpha subunit with A, N, and P cytoplasmic domains and 10 transmembrane helices plus regulatory beta and FXYD/gamma subunits). Hydrolyzes 1 ATP -> ADP + [[Pi|atom-p]] ([[Mg2+|atom-mg]]-dependent) per Post-Albers cycle (E1-3Na+ -> E1~P -> E2~P -> E2-2K+ -> E1) to pump 3 Na+ (bare radius 0.102 nm) out and 2 K+ (0.138 nm) in uphill against electrochemical gradients across the [[plasma membrane|plasma-membrane]]. Directly generates negative electrogenic current contributing to resting Vm approx -70 mV while offsetting Donnan osmotic influx in wall-less [[animal cells|real-cell]].'
    },
    es: {
      simple:
        'La [[bomba sodio-potasio|na-k-pump]] es una máquina de transporte activo impulsada por ATP inserta en las membranas de las [[células animales|real-cell]]. En cada ciclo gasta un ATP para expulsar tres iones sodio e introducir dos iones potasio contra gradiente, cargando el voltaje basal y evitando el estallido osmótico.',
      story:
        'Consumiendo hasta un tercio del presupuesto de ATP de una [[célula animal|real-cell]] en reposo, la [[Na⁺/K⁺-ATPasa|na-k-pump]] sostiene el desequilibrio iónico que mantiene viva y excitable a la célula. En su estado E₁ orientado al interior, tres Na⁺ citosólicos se alojan en la subunidad α y disparan la hidrólisis de un ATP, fijando un grupo [[fosfato|atom-p]] en un aspartato que voltea la bomba a la forma externa E₂~P. Tras liberar tres Na⁺ fuera y capturar dos K⁺ extracelulares, la desfosforilación devuelve la bomba a E₁ soltando el K⁺ al [[citosol|cytosol]]. Al salir tres cargas positivas por cada dos que entran, fija el voltaje basal cerca de −70 mV y evita la lisis.',
      blueprint:
        'Rol: Bomba iónica activa primaria electrogénica tipo P que sostiene los gradientes Na⁺/K⁺, el voltaje basal (−70 mV) y el equilibrio osmótico animal · Entradas: 3 Na⁺ citosólicos, 2 K⁺ extracelulares y 1 ATP + [[Mg²⁺|atom-mg]] de la [[ATP sintasa|real-bio-atpsynth]] · Interior: Heterotrímero αβγ de Na⁺/K⁺-ATPasa (PDB 3WGU) ciclando por E₁ → E₁~P (fosforilación de Asp) → E₂~P → E₂ → E₁ · Salida: 3 Na⁺ exportados, 2 K⁺ importados, 1 ADP + [[Pᵢ|atom-p]], carga neta −1 interna por ciclo y protección osmótica de [[células animales|real-cell]].',
      scientific:
        'Bomba activa primaria electrogénica tipo P2C [[Na⁺/K⁺-ATPasa|na-k-pump]] (estructura cristalográfica porcina αβγ PDB 3WGU; subunidad catalítica α de ~112 kDa con dominios citosólicos A, N y P y 10 hélices TM junto a subunidades β y FXYD/γ). Hidroliza 1 ATP → ADP + [[Pᵢ|atom-p]] dependiente de [[Mg²⁺|atom-mg]] por ciclo de Post–Albers (E₁·3Na⁺ → E₁~P → E₂~P → E₂·2K⁺ → E₁), bombeando 3 Na⁺ (radio iónico 0,102 nm) fuera y 2 K⁺ (0,138 nm) dentro contra gradiente en la [[membrana plasmática|plasma-membrane]]. Aporta corriente electrogénica negativa al potencial basal V_m ≈ −70 mV y contrarresta la entrada osmótica de Donnan en [[células animales|real-cell]].'
    }
  },

  'real-mem-vesicle': {
    en: {
      simple:
        'Bulk vesicular transport moves large [[proteins|protein]], surface receptors, and fluids that are far too big for channels or pumps. Cells pinch inward membranes into coated [[vesicles|vesicle]] during endocytosis and fuse internal vesicles with the [[plasma membrane|plasma-membrane]] during exocytosis.',
      story:
        'When a [[eukaryotic cell|real-cell]] needs to swallow entire lipoprotein particles or secrete bursts of digestive enzymes and hormones, single pores like [[aquaporin|real-mem-aqp1]] and carriers like [[GLUT1|real-mem-glut1]] cannot open wide enough. For inward endocytosis, three-legged clathrin triskelions snap together beneath the [[plasma membrane|plasma-membrane]] into a curved geodesic basket while dynamin GTPase pinches the neck free into a mobile [[vesicle|vesicle]]. For outward exocytosis, complementary v-SNARE and t-SNARE helices zipper tightly from tip to base into a four-helix bundle, overcoming hydration repulsion to merge both [[phospholipid|phospholipid]] bilayers and release cargo outside.',
      blueprint:
        'Role: Energy-dependent bulk membrane trafficking machinery importing and exporting macromolecules too large for transmembrane channels or pumps; Inputs: Cargo receptors, [[phospholipid|phospholipid]] bilayer patches, clathrin triskelions (PDB 1XI4), dynamin GTP, and SNARE fusion proteins (PDB 1SFC) plus ATP/GTP hydrolysis; Inside: Curved pentagonal/hexagonal clathrin coat budding inward (endocytosis) paired with v-SNARE/t-SNARE coiled-coil zippering (exocytosis) driving bilayer hemifusion and pore expansion; Outputs: Intracellular cargo [[vesicles|vesicle]] delivered into the [[cytosol|cytosol]] and secreted macromolecular payloads released to the extracellular space.',
      scientific:
        'Active eukaryotic bulk membrane trafficking coupling clathrin-mediated endocytosis (clathrin triskelion cage cryo-EM PDB 1XI4; three ~190 kDa heavy chains + light chains recruited by AP-2 adaptors and scissioned by GTPase dynamin) with SNARE-mediated exocytosis (neuronal four-helix trans-SNARE complex PDB 1SFC uniting vesicle synaptobrevin/VAMP2 with target syntaxin-1 and SNAP-25). Zippering of the amphipathic SNARE bundle releases ~35-65 kBT mechanical work to fuse 50-150 nm [[vesicle|vesicle]] [[phospholipid|phospholipid]] bilayers into the [[plasma membrane|plasma-membrane]], while NSF ATPase disassembles post-fusion cis-SNARE bundles for continuous recycling.'
    },
    es: {
      simple:
        'El transporte vesicular en bloque mueve grandes [[proteínas|protein]], receptores y fluidos demasiado voluminosos para cruzar canales o bombas. La célula invagina su membrana en [[vesículas|vesicle]] revestidas durante la endocitosis y fusiona vesículas internas con la [[membrana plasmática|plasma-membrane]] en la exocitosis.',
      story:
        'Cuando una [[célula eucariota|real-cell]] necesita ingerir lipoproteínas completas o secretar ráfagas de enzimas y hormonas, ni poros como la [[acuaporina|real-mem-aqp1]] ni transportadores como [[GLUT1|real-mem-glut1]] alcanzan suficiente diámetro. En la endocitosis, triskeliones de clatrina de tres patas se ensamblan bajo la [[membrana plasmática|plasma-membrane]] formando una cesta geodésica curva mientras la GTPasa dinamina estrangula el cuello liberando una [[vesícula|vesicle]]. En la exocitosis, hélices complementarias v-SNARE y t-SNARE se entrelazan progresivamente en un haz de cuatro hélices, venciendo la repulsión hídrica para fusionar ambas bicapas de [[fosfolípidos|phospholipid]] y descargar el contenido al exterior.',
      blueprint:
        'Rol: Maquinaria energética de tráfico de membrana en bloque para importar y exportar macromoléculas incapaces de cruzar canales o bombas · Entradas: Receptores de carga, parches de bicapa de [[fosfolípidos|phospholipid]], triskeliones de clatrina (PDB 1XI4), GTP de dinamina y proteínas SNARE (PDB 1SFC) más ATP/GTP · Interior: Cesta pentagonal/hexagonal de clatrina invaginando hacia adentro (endocitosis) junto al cierre coiled-coil v-SNARE/t-SNARE (exocitosis) que dispara la fusión de bicapas · Salida: [[Vesículas|vesicle]] internas de carga hacia el [[citosol|cytosol]] y secreción de macromoléculas al espacio extracelular.',
      scientific:
        'Tráfico activo de membrana en bloque que combina endocitosis mediada por clatrina (jaula de triskeliones crio-EM PDB 1XI4; tres cadenas pesadas de ~190 kDa y cadenas ligeras reclutadas por AP-2 y escindidas por la GTPasa dinamina) con exocitosis dependiente de SNARE (complejo neuronal de cuatro hélices PDB 1SFC integrando sinaptobrevina/VAMP2 vesicular con sintaxina-1 y SNAP-25). El cierre del haz SNARE libera ~35–65 k_B T para fusionar bicapas de [[fosfolípidos|phospholipid]] de [[vesículas|vesicle]] de 50–150 nm con la [[membrana plasmática|plasma-membrane]], mientras la ATPasa NSF desensambla los complejos cis-SNARE para reciclarlos.'
    }
  }
};

export const BIOENERGETICS_PART_LENSES: Record<string, Record<string, BilingualPartLens>> = {
  'bioenergetics_realistic.html': {
    chloroplast_hull: {
      en: {
        subtitle: 'Plant Chloroplast Double Envelope (~5 um)',
        simple:
          'This emerald [[chloroplast|chloroplast]] drives solar energy conversion inside [[plant cells|real-plant]]. Enclosed by a smooth double membrane, it absorbs sunlight, splits [[water|water]] into oxygen, and fixes atmospheric CO2 into [[glucose|glucose]] for the entire biosphere.',
        story:
          'Measuring roughly five micrometers long inside green leaf cells, the [[chloroplast|chloroplast]] descended from an ancient photosynthetic cyanobacterium engulfed by an early eukaryote. Its smooth outer envelope passes small ions through porins while its selective inner envelope controls triose-phosphate export, sealing an alkaline aqueous stroma around dense stacks of [[thylakoid grana|granum]]. Together, the membrane-bound [[light reactions|light-reactions]] and stromal [[RuBisCO|real-bio-rubisco]] enzymes convert 6 CO2 and 6 H2O into [[glucose|glucose]] and 6 O2 that stream directly toward respiring [[mitochondria|mitochondrion]].',
        blueprint: {
          role: 'Solar energy-capturing plastid (~5 um) housing both light-dependent thylakoid complexes and stromal Calvin carbon fixation',
          arrivesFrom: 'Solar photons (680/700 nm), atmospheric CO2, liquid [[H2O|water]], and inorganic phosphate imported across the inner envelope',
          inside: 'Double outer/inner lipid envelope enclosing enzyme-rich stroma, stacked [[grana|granum]] thylakoids, [[chlorophyll|chlorophyll]] photosystems, and [[RuBisCO|real-bio-rubisco]]',
          deliversTo: 'Exported triose phosphates assembling into [[glucose|glucose]] and [[starch|starch]], plus breathable O2 gas fueling [[mitochondria|mitochondrion]]',
          loop: 'Dimming sunlight pauses thylakoid proton pumping and halts stromal carbon fixation until photon flux resumes'
        },
        scientific:
          'Semi-autonomous endosymbiotic plastid (~5 x 2-3 um in vascular [[plant cells|real-plant]]) bounded by an outer porin-permeable membrane and a selective inner envelope enclosing the aqueous stroma (~pH 8.0 under illumination) and internal [[granum|granum]] thylakoid network. Couples thylakoid linear electron flow ([[PSII|real-bio-psii]] -> [[Cyt b6f|real-bio-b6f]] -> [[PSI|real-bio-psi]] -> [[CF1CF0|real-bio-atpsynth]]) with stromal [[RuBisCO|real-bio-rubisco]] fixation (6 CO2 + 6 [[H2O|water]] + light -> C6H12O6 + 6 O2), exporting triose phosphates via the inner-envelope triose-phosphate/phosphate translocator.',
        from: [
          { nodeId: 'real-plant', label: 'Plant Leaf Cell', cargo: 'Sunlight, CO2 & H2O intake' },
          { nodeId: 'water', label: 'Liquid Water', cargo: 'Electron donor for photolysis' }
        ],
        to: [
          { nodeId: 'chloroplast', label: 'Chloroplast Explorer', cargo: 'Plastid architecture & stroma' },
          { nodeId: 'glucose', label: 'Glucose Export', cargo: 'C6H12O6 + 6 O2 to respiration' }
        ]
      },
      es: {
        subtitle: 'Doble envoltura del cloroplasto vegetal (~5 µm)',
        simple:
          'Este [[cloroplasto|chloroplast]] esmeralda dirige la conversión de energía solar en las [[células vegetales|real-plant]]. Rodeado por una doble membrana lisa, absorbe luz solar, rompe [[agua|water]] liberando oxígeno y fija CO₂ atmosférico en [[glucosa|glucose]] para toda la biosfera.',
        story:
          'Con unos cinco micrómetros de longitud en células foliares verdes, el [[cloroplasto|chloroplast]] desciende de una antigua cianobacteria fotosintética incorporada por un eucariota primitivo. Su membrana externa deja pasar pequeños solutos y la interna regula la salida de triosas fosfato, encerrando un estroma alcalino alrededor de pilas de [[grana|granum]] tilacoidales. En conjunto, las [[reacciones luminosas|light-reactions]] de membrana y la enzima estromal [[RuBisCO|real-bio-rubisco]] convierten 6 CO₂ y 6 H₂O en [[glucosa|glucose]] y 6 O₂ que viajan hacia las [[mitocondrias|mitochondrion]].',
        blueprint: {
          role: 'Plastidio captador de luz solar (~5 µm) que alberga tanto los complejos luminosos tilacoidales como la fijación de carbono estromal',
          arrivesFrom: 'Fotones solares (680/700 nm), CO₂ atmosférico, [[H₂O|water]] líquida y fosfato inorgánico importado por la membrana interna',
          inside: 'Doble envoltura lipídica rodeando el estroma enzimático, pilas de [[grana|granum]] tilacoidales, fotosistemas con [[clorofila|chlorophyll]] y [[RuBisCO|real-bio-rubisco]]',
          deliversTo: 'Triosas fosfato exportadas para ensamblar [[glucosa|glucose]] y [[almidón|starch]], más gas O₂ hacia las [[mitocondrias|mitochondrion]]',
          loop: 'Reducir la luz solar frena el bombeo protónico tilacoidal y detiene la fijación estromal de carbono hasta volver a iluminarse'
        },
        scientific:
          'Plastidio endosimbiótico semiautónomo (~5 × 2–3 µm en [[células vegetales|real-plant]]) delimitado por una membrana externa con porinas y una membrana interna selectiva que encierran el estroma acuoso (~pH 8,0 bajo luz) y la red interna de [[grana|granum]]. Acopla el transporte electrónico lineal ([[PSII|real-bio-psii]] → [[Cyt b₆f|real-bio-b6f]] → [[PSI|real-bio-psi]] → [[CF₁CF₀|real-bio-atpsynth]]) con la fijación por [[RuBisCO|real-bio-rubisco]] (6 CO₂ + 6 [[H₂O|water]] + luz → C₆H₁₂O₆ + 6 O₂), exportando triosas fosfato vía translocador TPT.',
        from: [
          { nodeId: 'real-plant', label: 'Célula foliar vegetal', cargo: 'Entrada de luz, CO₂ y H₂O' },
          { nodeId: 'water', label: 'Agua líquida', cargo: 'Donador de electrones' }
        ],
        to: [
          { nodeId: 'chloroplast', label: 'Explorador Cloroplasto', cargo: 'Arquitectura y estroma' },
          { nodeId: 'glucose', label: 'Exportación de glucosa', cargo: 'C₆H₁₂O₆ + 6 O₂ a respiración' }
        ]
      }
    },

    thylakoid: {
      en: {
        subtitle: 'Stacked Grana Thylakoid Membrane (5 nm Bilayer)',
        simple:
          'Thylakoids are flattened green membrane discs stacked into [[grana|granum]] inside the [[chloroplast|chloroplast]]. Their sealed 5-nanometer bilayer holds the [[light-reaction|light-reactions]] complexes and traps hydrogen protons inside a tiny acidic lumen.',
        story:
          'Inside the [[chloroplast|chloroplast]] stroma, galactolipid-rich thylakoid membranes fold into tightly stacked disc-shaped [[grana|granum]] linked by unstacked stroma lamellae. That spatial segregation organizes the entire Z-scheme: light-harvesting [[Photosystem II|real-bio-psii]] crowds inside appressed grana stacks, [[Cytochrome b6f|real-bio-b6f]] straddles the boundaries, and bulky [[Photosystem I|real-bio-psi]] plus [[CF1CF0 ATP synthase|real-bio-atpsynth]] sit on exposed margins facing the stroma. Because the continuous bilayer blocks passive proton escape, water splitting and Q-cycle pumping rapidly acidify the narrow interior lumen to pH 5.5, powering stromal ATP synthesis.',
        blueprint: {
          role: 'Continuous proton-impermeable 5 nm photosynthetic membrane enclosing an acidic thylakoid lumen (pH ~5.5) for chemiosmosis',
          arrivesFrom: 'Galactolipids (MGDG, DGDG), [[chlorophyll|chlorophyll]] antennas, and lateral segregation of grana vs stroma lamellae',
          inside: 'Appressed [[PSII|real-bio-psii]] stacks, bridging [[Cyt b6f|real-bio-b6f]] dimers, stroma-exposed [[PSI|real-bio-psi]], and rotary [[CF1CF0|real-bio-atpsynth]] complexes',
          deliversTo: 'Steep transmembrane delta-pH (~2.5 units) driving [[ATP synthase|real-bio-atpsynth]] plus stromal NADPH feeding [[RuBisCO|real-bio-rubisco]]',
          loop: 'Intact bilayer sealing is mandatory; any leak dissipates the luminal H+ pool as heat instead of forging ATP'
        },
        scientific:
          'Internal photosynthetic membrane system (~5 nm bilayer enriched in non-bilayer-forming monogalactosyldiacylglycerol MGDG and digalactosyldiacylglycerol DGDG) forming stacked [[granum|granum]] cylinders (~300-600 nm diameter) joined by stroma lamellae within the [[chloroplast|chloroplast]]. Lateral heterogeneity partitions [[PSII|real-bio-psii]]-LHCII into appressed grana cores and [[PSI|real-bio-psi]]-LHCI plus [[CF1CF0 ATP synthase|real-bio-atpsynth]] onto non-appressed margins. Encloses a continuous ~4-10 nm aqueous lumen acidified to pH ~5.5 against pH ~8.0 stroma during [[light reactions|light-reactions]].',
        from: [
          { nodeId: 'granum', label: 'Thylakoid Granum', cargo: 'Stacked disc geometry' },
          { nodeId: 'light-reactions', label: 'Light-Reaction Array', cargo: 'Z-scheme membrane layout' }
        ],
        to: [
          { nodeId: 'real-bio-psii', label: 'Photosystem II', cargo: 'Grana water splitting' },
          { nodeId: 'real-bio-atpsynth', label: 'CF1CF0 ATP Synthase', cargo: 'Lumen-to-stroma H+ drive' }
        ]
      },
      es: {
        subtitle: 'Membrana tilacoidal en pilas de grana (bicapa de 5 nm)',
        simple:
          'Los tilacoides son discos membranosos verdes apilados en [[grana|granum]] dentro del [[cloroplasto|chloroplast]]. Su bicapa sellada de 5 nanómetros aloja los complejos de las [[reacciones luminosas|light-reactions]] y confina protones dentro de un estrecho lumen ácido.',
        story:
          'Dentro del estroma del [[cloroplasto|chloroplast]], las membranas tilacoidales ricas en galactolípidos se pliegan en pilas compactas de [[grana|granum]] conectadas por lamelas estromales. Esta segregación ordena todo el esquema Z: el [[Fotosistema II|real-bio-psii]] se concentra en los discos apilados, el [[citocromo b₆f|real-bio-b6f]] ocupa las fronteras y los voluminosos [[Fotosistema I|real-bio-psi]] y [[ATP sintasa CF₁CF₀|real-bio-atpsynth]] sobresalen hacia el estroma. Como la bicapa impide la fuga pasiva de protones, la fotólisis y el ciclo Q acidifican el lumen hasta pH 5,5, impulsando la síntesis de ATP.',
        blueprint: {
          role: 'Membrana fotosintética continua de 5 nm impermeable a protones que encierra un lumen ácido (pH ~5,5) para la quimiosmosis',
          arrivesFrom: 'Galactolípidos (MGDG, DGDG), antenas de [[clorofila|chlorophyll]] y segregación lateral entre grana y lamelas estromales',
          inside: 'Pilas compactas de [[PSII|real-bio-psii]], dímeros puente [[Cyt b₆f|real-bio-b6f]], [[PSI|real-bio-psi]] expuesto al estroma y rotores [[CF₁CF₀|real-bio-atpsynth]]',
          deliversTo: 'Pronunciado ΔpH transmembrana (~2,5 unidades) que mueve la [[ATP sintasa|real-bio-atpsynth]] más NADPH estromal hacia [[RuBisCO|real-bio-rubisco]]',
          loop: 'La integridad de la bicapa es indispensable; cualquier fuga disipa los H⁺ luminales en calor sin generar ATP'
        },
        scientific:
          'Sistema membranoso fotosintético interno (bicapa de ~5 nm rica en galactolípidos MGDG y DGDG) organizado en cilindros de [[grana|granum]] (~300–600 nm de diámetro) unidos por lamelas estromales en el [[cloroplasto|chloroplast]]. La heterogeneidad lateral separa [[PSII|real-bio-psii]]–LHCII en regiones apiladas y [[PSI|real-bio-psi]]–LHCI más [[CF₁CF₀|real-bio-atpsynth]] en márgenes no apilados, encerrando un lumen continuo de ~4–10 nm acidificado a pH ~5,5 frente al estroma pH ~8,0 durante las [[reacciones luminosas|light-reactions]].',
        from: [
          { nodeId: 'granum', label: 'Grana tilacoidal', cargo: 'Discos apilados' },
          { nodeId: 'light-reactions', label: 'Matriz luminosa', cargo: 'Disposición del esquema Z' }
        ],
        to: [
          { nodeId: 'real-bio-psii', label: 'Fotosistema II', cargo: 'Fotólisis del agua' },
          { nodeId: 'real-bio-atpsynth', label: 'ATP sintasa CF₁CF₀', cargo: 'Impulso protónico al estroma' }
        ]
      }
    },

    psii: {
      en: {
        subtitle: 'Photosystem II-LHCII Supercomplex (PDB 3JCU)',
        simple:
          'Anchored in stacked thylakoid [[grana|granum]], [[Photosystem II|real-bio-psii]] absorbs 680-nanometer red photons via [[chlorophyll|chlorophyll]] and rips electrons from [[water|water]], releasing breathable O2 gas and pumping luminal protons.',
        story:
          'When golden solar photons strike the outer LHCII antenna trimers of [[Photosystem II|real-bio-psii]], excitation energy hops in picoseconds into the central P680 [[chlorophyll|chlorophyll]] pair on the D1/D2 core. An ejected electron jumps across pheophytin onto plastoquinone while the oxidized P680+ radical draws replacement electrons from the luminal Mn4CaO5 oxygen-evolving cluster. Every four photons split two [[water|water]] molecules into one rising O2 bubble, four luminal protons, and two mobile plastoquinol (PQH2) shuttles racing toward [[Cytochrome b6f|real-bio-b6f]].',
        blueprint: {
          role: 'Light-driven water-plastoquinone oxidoreductase initiating linear electron transport and planetary O2 evolution',
          arrivesFrom: '680 nm solar photons, luminal [[H2O|water]] substrate, and oxidized plastoquinone (PQ) diffusing from the bilayer core',
          inside: 'Dimeric PSII-LHCII supercomplex (PDB 3JCU) with P680 [[chlorophyll|chlorophyll]] dimer, D1/D2 core, and catalytic Mn4[[Ca|atom-ca]][[O5|atom-o]] OEC',
          deliversTo: 'Evolved O2 gas, 4 luminal [[H+|atom-h]] protons charging the gradient, and reduced PQH2 carriers docking at [[Cyt b6f|real-bio-b6f]]',
          loop: 'Switching off sunlight immediately arrests P680 charge separation, halting O2 release and starving the Z-scheme of electrons'
        },
        scientific:
          'Plant dimeric [[Photosystem II|photosystem-ii]]-LHCII supercomplex (cryo-EM PDB 3JCU; ~1.1 MDa embedded in [[granum|granum]] thylakoids). Excitation of reaction-center P680 [[chlorophyll|chlorophyll]] a drives charge transfer via pheophytin and QA to the two-electron gate QB, generating P680+ (+1.25 V) to advance the Mn4[[Ca|atom-ca]][[O5|atom-o]] cluster across S0-S4 states. Net four-photon stoichiometry: 2 [[H2O|water]] + 2 PQ + 4 H+(stroma) -> O2 + 2 PQH2 + 4 H+(lumen), feeding [[Cytochrome b6f|real-bio-b6f]] and luminal delta-pH.',
        from: [
          { nodeId: 'chlorophyll', label: 'Chlorophyll a P680', cargo: '680 nm photon excitation' },
          { nodeId: 'water', label: 'Luminal Water', cargo: '2 H2O -> O2 + 4 H+ + 4 e-' }
        ],
        to: [
          { nodeId: 'real-bio-psii', label: 'PSII Explorer Node', cargo: 'Mn4CaO5 OEC & Z-scheme' },
          { nodeId: 'real-bio-b6f', label: 'Cytochrome b6f', cargo: 'Reduced plastoquinol PQH2' }
        ]
      },
      es: {
        subtitle: 'Supercomplejo Fotosistema II–LHCII (PDB 3JCU)',
        simple:
          'Anclado en los [[grana|granum]] tilacoidales, el [[Fotosistema II|real-bio-psii]] absorbe fotones rojos de 680 nanómetros mediante [[clorofila|chlorophyll]] y arranca electrones al [[agua|water]], liberando oxígeno respirable y protones luminales.',
        story:
          'Cuando los fotones solares impactan los trímeros antena LHCII del [[Fotosistema II|real-bio-psii]], la energía salta en picosegundos hasta el par central P680 de [[clorofila|chlorophyll]] en el núcleo D1/D2. El electrón expulsado pasa por feofitina hacia la plastoquinona mientras el radical oxidante P680⁺ extrae electrones de reposición del núcleo luminal Mn₄CaO₅. Cada cuatro fotones escinden dos moléculas de [[agua|water]] en una burbuja de O₂, cuatro protones luminales y dos plastoquinoles (PQH₂) móviles rumbo al [[citocromo b₆f|real-bio-b6f]].',
        blueprint: {
          role: 'Oxidorreductasa agua–plastoquinona impulsada por luz que inicia el transporte electrónico lineal y la emisión planetaria de O₂',
          arrivesFrom: 'Fotones solares de 680 nm, sustrato luminal [[H₂O|water]] y plastoquinona (PQ) oxidada del núcleo lipídico',
          inside: 'Supercomplejo dimérico PSII–LHCII (PDB 3JCU) con par [[clorofila|chlorophyll]] P680, núcleo D1/D2 y cúmulo catalítico Mn₄[[Ca|atom-ca]][[O₅|atom-o]]',
          deliversTo: 'Gas O₂ liberado, 4 protones [[H⁺|atom-h]] luminales que cargan el gradiente y portadores PQH₂ hacia [[Cyt b₆f|real-bio-b6f]]',
          loop: 'Apagar la luz detiene al instante la separación de carga en P680, cesando la emisión de O₂ y el flujo al esquema Z'
        },
        scientific:
          'Supercomplejo vegetal dimérico [[Fotosistema II|photosystem-ii]]–LHCII (crio-EM PDB 3JCU; ~1,1 MDa en tilacoides de [[grana|granum]]). La excitación de P680 impulsa transferencia electrónica vía feofitina y Q_A hacia Q_B, generando P680⁺ (+1,25 V) que cicla el núcleo Mn₄[[Ca|atom-ca]][[O₅|atom-o]] por los estados S₀–S₄ de Kok. Estequiometría de cuatro fotones: 2 [[H₂O|water]] + 2 PQ + 4 H⁺(estroma) → O₂ + 2 PQH₂ + 4 H⁺(lumen), alimentando a [[Cyt b₆f|real-bio-b6f]].',
        from: [
          { nodeId: 'chlorophyll', label: 'Clorofila a P680', cargo: 'Excitación por fotón 680 nm' },
          { nodeId: 'water', label: 'Agua luminal', cargo: '2 H₂O → O₂ + 4 H⁺ + 4 e⁻' }
        ],
        to: [
          { nodeId: 'real-bio-psii', label: 'Nodo Fotosistema II', cargo: 'OEC Mn₄CaO₅ y esquema Z' },
          { nodeId: 'real-bio-b6f', label: 'Citocromo b₆f', cargo: 'Plastoquinol reducido PQH₂' }
        ]
      }
    },

    cyt_b6f: {
      en: {
        subtitle: 'Cytochrome b6f Q-Cycle Proton Pump (PDB 6RQF)',
        simple:
          'Positioned midway along the thylakoid membrane, [[Cytochrome b6f|real-bio-b6f]] accepts electrons carried by plastoquinol from [[PSII|real-bio-psii]], hands them to copper-bearing plastocyanin for [[PSI|real-bio-psi]], and pumps extra protons into the lumen.',
        story:
          'Hydrophobic plastoquinol (PQH2) leaves [[Photosystem II|real-bio-psii]] carrying two electrons and two stromal protons straight to the luminal Qo cleft of dimeric [[Cytochrome b6f|real-bio-b6f]]. There a mobile Rieske [[iron|atom-fe]]-[[sulfur|atom-s]] domain splits the pair: one electron routes up via cytochrome f onto soluble plastocyanin, while the other dives across transmembrane hemes bL and bH to re-reduce a quinone on the stromal face. By doubling proton translocation through this Q-cycle, b6f supplies half the luminal acid gradient spinning [[CF1CF0 ATP synthase|real-bio-atpsynth]].',
        blueprint: {
          role: 'Mid-chain thylakoid redox relay and bifurcated Q-cycle proton pump linking PSII to PSI while amplifying delta-pH',
          arrivesFrom: 'Lipid-soluble reduced plastoquinol (PQH2) arriving from [[PSII|real-bio-psii]] plus stromal [[H+|atom-h]] ions and oxidized plastocyanin',
          inside: 'Homodimeric cytochrome b6f complex (PDB 6RQF) coordinating Rieske [[2Fe-2S|atom-fe]], heme f, transmembrane hemes bL/bH, and stromal heme cn',
          deliversTo: 'Reduced luminal plastocyanin diffusing to [[PSI|real-bio-psi]] plus 2 H+ pumped into the lumen per electron to drive [[CF1CF0|real-bio-atpsynth]]',
          loop: 'Also mediates cyclic electron return from PSI ferredoxin to boost ATP production whenever the Calvin cycle needs extra ATP over NADPH'
        },
        scientific:
          'Thylakoid homodimeric plastoquinol:plastocyanin oxidoreductase [[Cytochrome b6f|real-bio-b6f]] (cryo-EM PDB 6RQF; ~220 kDa dimer structurally homologous to mitochondrial Complex III). Oxidizes PQH2 at the luminal Qo pocket via the high-potential Rieske [[2Fe-2S|atom-fe]]-[[S|atom-s]] / cytochrome f branch while routing the second electron across hemes bL, bH, and stromal heme cn to the Qi site. Net Q-cycle translocation pumps 2 [[H+|atom-h]] into the lumen per electron transferred to luminal plastocyanin bound for [[PSI|real-bio-psi]].',
        from: [
          { nodeId: 'real-bio-psii', label: 'PSII Plastoquinol', cargo: 'Reduced PQH2 lipid shuttle' },
          { nodeId: 'atom-fe', label: 'Heme & Fe-S Centers', cargo: 'Rieske 2Fe-2S + b-hemes' }
        ],
        to: [
          { nodeId: 'real-bio-b6f', label: 'Cyt b6f Explorer Node', cargo: 'Thylakoid Q-cycle pump' },
          { nodeId: 'real-bio-psi', label: 'Photosystem I', cargo: 'Reduced plastocyanin PC' }
        ]
      },
      es: {
        subtitle: 'Bomba protónica de ciclo Q Citocromo b₆f (PDB 6RQF)',
        simple:
          'Situado a mitad de la membrana tilacoidal, el [[citocromo b₆f|real-bio-b6f]] recoge electrones del plastoquinol proveniente de [[PSII|real-bio-psii]], los pasa a la plastocianina hacia [[PSI|real-bio-psi]] y bombea protones adicionales al lumen.',
        story:
          'El plastoquinol hidrofóbico (PQH₂) sale del [[Fotosistema II|real-bio-psii]] portando dos electrones y dos protones estromales hasta el bolsillo Qo del dímero [[citocromo b₆f|real-bio-b6f]]. Allí el dominio móvil Rieske de [[hierro|atom-fe]]–[[azufre|atom-s]] bifurca el par: un electrón sube por el citocromo f hacia la plastocianina soluble, mientras el otro desciende por los hemos b_L y b_H para reducir otra quinona en el lado estromal. Al duplicar el bombeo con este ciclo Q, b₆f aporta la mitad del gradiente ácido que mueve la [[ATP sintasa CF₁CF₀|real-bio-atpsynth]].',
        blueprint: {
          role: 'Relevo redox tilacoidal central y bomba protónica de ciclo Q bifurcado que une PSII con PSI y amplifica el ΔpH',
          arrivesFrom: 'Plastoquinol reducido (PQH₂) liposoluble procedente de [[PSII|real-bio-psii]], [[H⁺|atom-h]] estromales y plastocianina oxidada',
          inside: 'Homodímero citocromo b₆f (PDB 6RQF) con centro Rieske [[2Fe–2S|atom-fe]], hemo f, hemos b_L/b_H transmembrana y hemo c_n estromal',
          deliversTo: 'Plastocianina luminal reducida hacia [[PSI|real-bio-psi]] más 2 H⁺ bombeados al lumen por electrón hacia [[CF₁CF₀|real-bio-atpsynth]]',
          loop: 'Admite también retorno electrónico cíclico desde ferredoxina de PSI para generar ATP extra cuando lo exige el ciclo de Calvin'
        },
        scientific:
          'Plastoquinol:plastocianina oxidorreductasa homodimérica tilacoidal [[citocromo b₆f|real-bio-b6f]] (crio-EM PDB 6RQF; dímero ~220 kDa homólogo al Complejo III mitocondrial). Oxida PQH₂ en Q_o vía el brazo Rieske [[2Fe–2S|atom-fe]]–[[S|atom-s]] / citocromo f y devuelve el segundo electrón por hemos b_L, b_H y c_n al sitio Q_i, translocando 2 [[H⁺|atom-h]] al lumen por electrón entregado a la plastocianina rumbo a [[PSI|real-bio-psi]].',
        from: [
          { nodeId: 'real-bio-psii', label: 'Plastoquinol de PSII', cargo: 'Lanzadera lipídica PQH₂' },
          { nodeId: 'atom-fe', label: 'Centros hemo y Fe–S', cargo: 'Rieske 2Fe–2S + hemos b' }
        ],
        to: [
          { nodeId: 'real-bio-b6f', label: 'Nodo Citocromo b₆f', cargo: 'Bomba tilacoidal de ciclo Q' },
          { nodeId: 'real-bio-psi', label: 'Fotosistema I', cargo: 'Plastocianina reducida PC' }
        ]
      }
    },

    psi: {
      en: {
        subtitle: 'Photosystem I-LHCI Supercomplex (PDB 4XK8)',
        simple:
          'Using a second 700-nanometer solar photon, [[Photosystem I|real-bio-psi]] re-energizes electrons delivered from [[Cytochrome b6f|real-bio-b6f]] and passes them to stromal ferredoxin so FNR can charge NADPH for [[glucose|glucose]] assembly.',
        story:
          'Mounted on stroma-exposed thylakoid margins where stromal carriers dock freely, [[Photosystem I|real-bio-psi]] finishes the photosynthetic Z-scheme. Reduced copper plastocyanin drops off a low-energy electron to refill the P700 [[chlorophyll|chlorophyll]] pair just as a fresh 700-nanometer photon from the flanking LHCI crescent lifts that electron to a powerful -1.2-volt reducing potential. Sprinting through phylloquinone and three [[iron|atom-fe]]-[[sulfur|atom-s]] clusters (FX, FA, FB), electrons reduce soluble ferredoxin so FNR builds 12 NADPH molecules per [[glucose|glucose]] for [[RuBisCO|real-bio-rubisco]].',
        blueprint: {
          role: 'Second solar-powered photo-oxidoreductase re-exciting electrons to synthesize high-energy stromal NADPH',
          arrivesFrom: '700 nm solar photons, reduced luminal plastocyanin from [[Cyt b6f|real-bio-b6f]], and oxidized stromal ferredoxin/NADP+',
          inside: '600 kDa PSI-LHCI supercomplex (PDB 4XK8) combining PsaA/PsaB reaction core, P700 [[chlorophyll|chlorophyll]] pair, and three [[4Fe-4S|atom-fe]] clusters',
          deliversTo: 'Reduced ferredoxin fueling FNR reduction of NADP+ + H+ -> NADPH for stromal [[RuBisCO|real-bio-rubisco]] carbon fixation',
          loop: 'Can divert reduced ferredoxin back into Cytochrome b6f (cyclic flow) to balance cellular ATP-to-NADPH demand'
        },
        scientific:
          'Stroma-margin plant [[Photosystem I|real-bio-psi]]-LHCI supercomplex (crystal structure PDB 4XK8; ~600 kDa PsaA-PsaO monomer plus four LHCI subunits binding ~155 [[chlorophyll|chlorophyll]] and carotenoid cofactors). Excitation of P700 (700 nm) achieves ~98% quantum-yield electron transfer through A0, phylloquinone A1, and three [[4Fe-4S|atom-fe]]-[[S|atom-s]] centers (FX, FA, FB) to stromal ferredoxin, driving FNR synthesis of 12 NADPH per 6 CO2 fixed by [[RuBisCO|real-bio-rubisco]].',
        from: [
          { nodeId: 'real-bio-b6f', label: 'Luminal Plastocyanin', cargo: 'Single-electron copper relay' },
          { nodeId: 'chlorophyll', label: 'Chlorophyll a P700', cargo: '700 nm second photon boost' }
        ],
        to: [
          { nodeId: 'real-bio-psi', label: 'PSI Explorer Node', cargo: 'P700 & 4Fe-4S electron path' },
          { nodeId: 'real-bio-rubisco', label: 'Calvin NADPH Supply', cargo: '12 NADPH per glucose' }
        ]
      },
      es: {
        subtitle: 'Supercomplejo Fotosistema I–LHCI (PDB 4XK8)',
        simple:
          'Mediante un segundo fotón solar de 700 nanómetros, el [[Fotosistema I|real-bio-psi]] re-energiza los electrones llegados del [[citocromo b₆f|real-bio-b6f]] y los cede a la ferredoxina estromal para que FNR cargue NADPH destinado a fabricar [[glucosa|glucose]].',
        story:
          'Instalado en los márgenes tilacoidales abiertos al estroma, el [[Fotosistema I|real-bio-psi]] culmina el esquema Z fotosintético. La plastocianina reducida repone un electrón al par P700 de [[clorofila|chlorophyll]] justo cuando un nuevo fotón de 700 nanómetros captado por la media luna LHCI eleva su potencial hasta −1,2 voltios. Cruzando a gran velocidad la filoquinona y tres centros [[hierro|atom-fe]]–[[azufre|atom-s]] (F_X, F_A, F_B), los electrones reducen ferredoxina soluble para que FNR produzca 12 NADPH por [[glucosa|glucose]] hacia [[RuBisCO|real-bio-rubisco]].',
        blueprint: {
          role: 'Segunda foto-oxidorreductasa solar que re-excita electrones para sintetizar NADPH reductor de alta energía en el estroma',
          arrivesFrom: 'Fotones solares de 700 nm, plastocianina luminal reducida desde [[Cyt b₆f|real-bio-b6f]] y ferredoxina/NADP⁺ estromales',
          inside: 'Supercomplejo PSI–LHCI de 600 kDa (PDB 4XK8) con núcleo PsaA/PsaB, par [[clorofila|chlorophyll]] P700 y tres centros [[4Fe–4S|atom-fe]]',
          deliversTo: 'Ferredoxina reducida que permite a FNR catalizar NADP⁺ + H⁺ → NADPH para el [[ciclo de Calvin|real-bio-rubisco]]',
          loop: 'Puede desviar electrones de ferredoxina de regreso al citocromo b₆f (flujo cíclico) para ajustar la proporción ATP/NADPH'
        },
        scientific:
          'Supercomplejo vegetal [[Fotosistema I|real-bio-psi]]–LHCI de márgenes estromales (estructura PDB 4XK8; monómero PsaA–PsaO de ~600 kDa con cuatro antenas LHCI y ~155 cofactores de [[clorofila|chlorophyll]] y carotenoides). La excitación de P700 (700 nm) logra ~98 % de rendimiento cuántico vía A₀, filoquinona A₁ y tres centros [[4Fe–4S|atom-fe]]–[[S|atom-s]] (F_X, F_A, F_B) hacia ferredoxina y FNR, rindiendo 12 NADPH por cada 6 CO₂ fijados por [[RuBisCO|real-bio-rubisco]].',
        from: [
          { nodeId: 'real-bio-b6f', label: 'Plastocianina luminal', cargo: 'Relevo de cobre (1 e⁻)' },
          { nodeId: 'chlorophyll', label: 'Clorofila a P700', cargo: 'Segundo impulso de 700 nm' }
        ],
        to: [
          { nodeId: 'real-bio-psi', label: 'Nodo Fotosistema I', cargo: 'Ruta P700 y centros 4Fe–4S' },
          { nodeId: 'real-bio-rubisco', label: 'Suministro NADPH', cargo: '12 NADPH por glucosa' }
        ]
      }
    },

    cf1cf0: {
      en: {
        subtitle: 'Chloroplast CF1CF0 Rotary ATP Synthase (PDB 6FKF)',
        simple:
          'Embedded in stroma-facing thylakoid membranes, chloroplast [[CF1CF0 ATP synthase|real-bio-atpsynth]] lets trapped luminal protons rush back into the stroma, spinning its 14-subunit membrane ring to forge 18 ATP per [[glucose|glucose]] for carbon fixation.',
        story:
          'Every time [[Photosystem II|real-bio-psii]] splits [[water|water]] and [[Cytochrome b6f|real-bio-b6f]] runs its Q-cycle, protons pack tightly inside the acidic thylakoid lumen. Their sole productive exit runs through the membrane CF0 channel of [[CF1CF0 ATP synthase|real-bio-atpsynth]], driving rotation of its wide 14-subunit c-ring and central gamma shaft. Inside the stromal alpha3-beta3 crown, each full turn forces three catalytic pockets to condense ADP and inorganic [[phosphate|atom-p]] into ATP, delivering the exact 18 ATP required alongside 12 NADPH to power [[RuBisCO|real-bio-rubisco]] sugar synthesis.',
        blueprint: {
          role: 'Chloroplast chemiosmotic rotary turbine converting thylakoid lumen delta-pH into stromal ATP for the Calvin cycle',
          arrivesFrom: 'Acidic luminal [[H+|atom-h]] protons (pH ~5.5) generated by [[PSII|real-bio-psii]] and [[Cyt b6f|real-bio-b6f]] plus stromal ADP, [[Pi|atom-p]], and [[Mg2+|atom-mg]]',
          inside: 'CF0 proton-driven 14-subunit c-ring (PDB 6FKF) turning an asymmetric gamma stalk inside the stator-locked stromal alpha3-beta3 CF1 crown',
          deliversTo: '18 stromal ATP molecules per 6 CO2 fixed directly fueling phosphorylation steps around [[RuBisCO|real-bio-rubisco]]',
          loop: 'In darkness, disulfide locking on the gamma subunit brakes reverse ATP hydrolysis so the chloroplast never wastes stored ATP'
        },
        scientific:
          'Spinach chloroplast F-type rotary [[ATP synthase|atp-synthase]] CF1CF0 (cryo-EM PDB 6FKF; non-appressed thylakoid margin complex). Features a 14-subunit membrane c14-ring yielding an exact bioenergetic gear ratio of 14/3 = 4.67 [[H+|atom-h]] per ATP synthesized (compared to c8 in mammalian [[mitochondrial F1F0|real-bio-atpsynth]]). Driven mainly by delta-pH (~2.5 units between pH 5.5 lumen and pH 8.0 stroma), CF1CF0 synthesizes 18 ATP per [[glucose|glucose]] equivalent for the stromal Calvin cycle and undergoes redox thioredoxin regulation to halt wasteful back-hydrolysis in the dark.',
        from: [
          { nodeId: 'real-bio-b6f', label: 'Luminal H+ Gradient', cargo: 'pH ~5.5 proton-motive force' },
          { nodeId: 'atom-p', label: 'Stromal ADP + Pi', cargo: 'Phosphorylation substrates' }
        ],
        to: [
          { nodeId: 'real-bio-atpsynth', label: 'Rotary ATP Synthase', cargo: 'c14-ring & gamma turbine' },
          { nodeId: 'real-bio-rubisco', label: 'Calvin Cycle ATP', cargo: '18 ATP per glucose forged' }
        ]
      },
      es: {
        subtitle: 'ATP sintasa rotatoria cloroplástica CF₁CF₀ (PDB 6FKF)',
        simple:
          'Incrustada en los tilacoides orientados al estroma, la [[ATP sintasa CF₁CF₀|real-bio-atpsynth]] deja salir los protones atrapados en el lumen, girando su anillo de 14 subunidades para fabricar 18 ATP por [[glucosa|glucose]] para fijar carbono.',
        story:
          'Cada vez que el [[Fotosistema II|real-bio-psii]] rompe [[agua|water]] y el [[citocromo b₆f|real-bio-b6f]] ejecuta su ciclo Q, los protones se acumulan dentro del lumen tilacoidal ácido. Su única salida productiva atraviesa el canal CF₀ de la [[ATP sintasa CF₁CF₀|real-bio-atpsynth]], haciendo rotar su amplio anillo c de 14 subunidades y el eje central γ. Dentro de la corona estromal α₃β₃, cada vuelta completa prensa ADP y [[fosfato|atom-p]] inorgánico en tres moléculas de ATP, suministrando los 18 ATP precisos junto a 12 NADPH para [[RuBisCO|real-bio-rubisco]].',
        blueprint: {
          role: 'Turbina rotatoria quimiosmótica cloroplástica que transforma el ΔpH luminal en ATP estromal para el ciclo de Calvin',
          arrivesFrom: 'Protones luminales [[H⁺|atom-h]] (pH ~5,5) generados por [[PSII|real-bio-psii]] y [[Cyt b₆f|real-bio-b6f]] más ADP, [[Pᵢ|atom-p]] y [[Mg²⁺|atom-mg]] estromales',
          inside: 'Anillo CF₀ de 14 subunidades c (PDB 6FKF) impulsando el tallo asimétrico γ dentro de la corona estromal α₃β₃ sujeta por un estator',
          deliversTo: '18 moléculas de ATP estromal por cada 6 CO₂ fijados que impulsan las fosforilaciones en torno a [[RuBisCO|real-bio-rubisco]]',
          loop: 'En oscuridad, un puente disulfuro en la subunidad γ frena la hidrólisis inversa para no malgastar el ATP almacenado'
        },
        scientific:
          '[[ATP sintasa|atp-synthase]] rotatoria tipo F cloroplástica CF₁CF₀ (crio-EM de espinaca PDB 6FKF; localizada en márgenes tilacoidales no apilados). Posee un anillo membranoso c₁₄ con relación exacta de 14/3 = 4,67 [[H⁺|atom-h]] por ATP (frente al anillo c₈ de la [[F₁F₀ mitocondrial|real-bio-atpsynth]]). Impulsada sobre todo por ΔpH (~2,5 unidades entre lumen pH 5,5 y estroma pH 8,0), genera 18 ATP por [[glucosa|glucose]] para el ciclo de Calvin y se regula por tiorredoxina en oscuridad.',
        from: [
          { nodeId: 'real-bio-b6f', label: 'Gradiente H⁺ luminal', cargo: 'Fuerza protón-motriz pH ~5,5' },
          { nodeId: 'atom-p', label: 'ADP + Pᵢ estromales', cargo: 'Sustratos de fosforilación' }
        ],
        to: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP sintasa rotatoria', cargo: 'Turbina de anillo c₁₄ y tallo γ' },
          { nodeId: 'real-bio-rubisco', label: 'ATP del ciclo de Calvin', cargo: '18 ATP por glucosa fijada' }
        ]
      }
    },

    rubisco: {
      en: {
        subtitle: 'Stromal RuBisCO L8S8 & Calvin Cycle (PDB 1RCX)',
        simple:
          'Floating abundantly in the [[chloroplast|chloroplast]] stroma, sixteen-subunit [[RuBisCO|real-bio-rubisco]] captures gaseous CO2 and locks it onto organic sugar rings. Spending 18 ATP and 12 NADPH from the thylakoids, the Calvin cycle exports [[glucose|glucose]].',
        story:
          'As the most abundant [[protein|protein]] on Earth, [[RuBisCO|real-bio-rubisco]] forms massive 550-kilodalton L8S8 hexadecamers packed densely across the aqueous [[chloroplast|chloroplast]] stroma. Each catalytic site coordinates a [[Mg2+|atom-mg]] ion to attach incoming CO2 onto five-carbon RuBP and split the product into twin 3-PGA intermediates. Phosphorylated by 18 ATP from [[CF1CF0|real-bio-atpsynth]] and reduced by 12 NADPH from [[Photosystem I|real-bio-psi]], six Calvin turns yield two net three-carbon G3P sugars that unite into hexagonal [[glucose|glucose]] heading straight to cytosolic glycolysis.',
        blueprint: {
          role: 'Stromal carbon-fixation engine anchoring the Calvin-Benson cycle and converting inorganic CO2 into organic G3P and glucose',
          arrivesFrom: 'Diffusing atmospheric CO2 plus 18 ATP from [[CF1CF0|real-bio-atpsynth]] and 12 NADPH from [[PSI|real-bio-psi]] per hexose built',
          inside: '550 kDa L8S8 [[RuBisCO|rubisco]] hexadecamer (PDB 1RCX) with eight [[Mg2+|atom-mg]]-bound active sites driving carboxylation, reduction, and RuBP regeneration',
          deliversTo: '2 net G3P trioses assembling into 1 [[glucose|glucose]] (C6H12O6) or [[starch|starch]] plus recycled ADP, Pi, and NADP+ returning to thylakoids',
          loop: 'Because RuBisCO fixes only ~3-10 CO2 per second per site, leaves stockpile millions of enzyme copies to match sunlight speed'
        },
        scientific:
          'Spinach Form I [[RuBisCO|rubisco]] (ribulose-1,5-bisphosphate carboxylase/oxygenase L8S8 hexadecamer, PDB 1RCX; 8 large ~55 kDa catalytic RbcL + 8 small ~15 kDa RbcS subunits) operating in the [[chloroplast|chloroplast]] stroma. Catalyzes [[Mg2+|atom-mg]]-dependent carboxylation of RuBP (6 CO2 + 6 RuBP -> 12 3-PGA), followed by Calvin reduction and RuBP regeneration consuming 18 ATP and 12 NADPH to yield 2 net G3P -> 1 [[glucose|glucose]] (C6H12O6) and regenerating 18 ADP + 18 [[Pi|atom-p]] + 12 NADP+.',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Thylakoid ATP', cargo: '18 ATP per glucose fixed' },
          { nodeId: 'real-bio-psi', label: 'PSI NADPH', cargo: '12 NADPH reducing equivalents' }
        ],
        to: [
          { nodeId: 'real-bio-rubisco', label: 'RuBisCO Explorer Node', cargo: 'L8S8 carboxylase architecture' },
          { nodeId: 'glucose', label: 'Synthesized Glucose', cargo: 'C6H12O6 exported to cytosol' }
        ]
      },
      es: {
        subtitle: 'RuBisCO L₈S₈ estromal y ciclo de Calvin (PDB 1RCX)',
        simple:
          'Abundante en el estroma del [[cloroplasto|chloroplast]], el complejo [[RuBisCO|real-bio-rubisco]] de dieciséis subunidades captura CO₂ gaseoso y lo fija en esqueletos de azúcar. Con 18 ATP y 12 NADPH de los tilacoides, el ciclo de Calvin exporta [[glucosa|glucose]].',
        story:
          'Como la [[proteína|protein]] más abundante de la Tierra, [[RuBisCO|real-bio-rubisco]] forma masivos hexadecámeros L₈S₈ de 550 kilodaltons repartidos por todo el estroma del [[cloroplasto|chloroplast]]. Cada sitio catalítico coordina un ion [[Mg²⁺|atom-mg]] para añadir CO₂ sobre RuBP de cinco carbonos y escindirlo en dos moléculas de 3-PGA. Fosforiladas con 18 ATP de [[CF₁CF₀|real-bio-atpsynth]] y reducidas por 12 NADPH del [[Fotosistema I|real-bio-psi]], seis vueltas de Calvin producen dos G3P netos que forman [[glucosa|glucose]] rumbo a la glucólisis.',
        blueprint: {
          role: 'Motor estromal de fijación de carbono que ancla el ciclo de Calvin–Benson y transforma CO₂ inorgánico en G3P y glucosa',
          arrivesFrom: 'CO₂ atmosférico disuelto más 18 ATP de [[CF₁CF₀|real-bio-atpsynth]] y 12 NADPH del [[PSI|real-bio-psi]] por cada hexosa fabricada',
          inside: 'Hexadecámero L₈S₈ [[RuBisCO|rubisco]] de 550 kDa (PDB 1RCX) con ocho sitios activos con [[Mg²⁺|atom-mg]] para carboxilación, reducción y regeneración de RuBP',
          deliversTo: '2 triosas G3P netas que originan 1 [[glucosa|glucose]] (C₆H₁₂O₆) o [[almidón|starch]] más ADP, Pᵢ y NADP⁺ devueltos a los tilacoides',
          loop: 'Como RuBisCO fija solo ~3–10 CO₂ por segundo por sitio, las hojas acumulan millones de copias para seguir el ritmo solar'
        },
        scientific:
          '[[RuBisCO|rubisco]] vegetal de forma I (hexadecámero L₈S₈, PDB 1RCX; 8 subunidades catalíticas grandes RbcL de ~55 kDa y 8 pequeñas RbcS de ~15 kDa) en el estroma del [[cloroplasto|chloroplast]]. Cataliza la carboxilación de RuBP dependiente de [[Mg²⁺|atom-mg]] (6 CO₂ + 6 RuBP → 12 3-PGA); seis ciclos consumen 18 ATP y 12 NADPH rindiendo 2 G3P netos → 1 [[glucosa|glucose]] (C₆H₁₂O₆) y regenerando 18 ADP + 18 [[Pᵢ|atom-p]] + 12 NADP⁺.',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP tilacoidal', cargo: '18 ATP por glucosa fijada' },
          { nodeId: 'real-bio-psi', label: 'NADPH de PSI', cargo: '12 equivalentes reductores' }
        ],
        to: [
          { nodeId: 'real-bio-rubisco', label: 'Nodo RuBisCO', cargo: 'Arquitectura carboxilasa L₈S₈' },
          { nodeId: 'glucose', label: 'Glucosa sintetizada', cargo: 'C₆H₁₂O₆ hacia el citosol' }
        ]
      }
    },

    glycolysis: {
      en: {
        subtitle: 'Cytosolic Glycolysis Corridor (Glucose -> 2 Pyruvate)',
        simple:
          'Running inside the [[cytosol|cytosol]] outside the [[mitochondrion|mitochondrion]], glycolysis slices every six-carbon [[glucose|glucose]] ring into two three-carbon pyruvate molecules. It nets 2 ATP and 2 NADH immediately and keeps pulsing even when oxygen disappears.',
        story:
          'Universal across [[bacteria|real-bacterium]], [[plants|real-plant]], and [[animal cells|real-cell]], glycolysis predates oxygenic atmospheres and needs zero oxygen to operate inside the [[cytosol|cytosol]]. Ten consecutive soluble enzymes invest two ATP molecules to prime and split [[glucose|glucose]] down the middle, then harvest four ATP and two NADH electrons during the payoff half via GAPDH and pyruvate kinase. Under aerobic conditions, both twin pyruvate molecules enter the [[mitochondrion|mitochondrion]] for [[Krebs oxidation|real-bio-citrate]]; when oxygen is shut off, fermentation recycles NAD+ so glycolysis sustains an emergency 2 ATP per glucose.',
        blueprint: {
          role: 'Universal oxygen-independent cytosolic pathway cleaving 6-carbon glucose into twin 3-carbon pyruvate fuels plus rapid ATP',
          arrivesFrom: 'Imported cytosolic D-[[glucose|glucose]] (from photosynthesis or [[GLUT1|real-mem-glut1]]), 2 investment ATP, 2 NAD+, and 4 ADP + 2 [[Pi|atom-p]]',
          inside: 'Ten-enzyme cytosolic corridor (hexokinase, PFK-1, aldolase, GAPDH tetramer, pyruvate kinase) splitting hexose phosphates into trioses',
          deliversTo: '2 pyruvate molecules entering the [[mitochondrion|mitochondrion]] matrix, 2 net substrate-level ATP, and 2 NADH shuttles',
          loop: 'Toggling O2 off halts mitochondrial ETC, leaving anaerobic glycolysis + fermentation as the sole 2 ATP/glucose lifeline'
        },
        scientific:
          'Ancient ten-step Embden-Meyerhof-Parnas glycolytic pathway in the aqueous [[cytosol|cytosol]] converting 1 D-[[glucose|glucose]] + 2 NAD+ + 2 ADP + 2 [[Pi|atom-p]] -> 2 pyruvate + 2 NADH + 2 H+ + 2 net ATP + 2 [[H2O|water]] (investing 2 ATP at hexokinase/PFK-1 and recovering 4 ATP via phosphoglycerate kinase and pyruvate kinase). Requires no O2: under aerobic respiration pyruvate feeds mitochondrial [[Citrate Synthase|real-bio-citrate]] and [[Complex I|real-bio-complex1]] for ~30-32 total ATP; under anoxia lactate/ethanol fermentation re-oxidizes NADH to sustain 2 net ATP per glucose.',
        from: [
          { nodeId: 'glucose', label: 'Cytosolic Glucose', cargo: '6-carbon C6H12O6 fuel' },
          { nodeId: 'cytosol', label: 'Cytosol Enzymes', cargo: '10-step soluble cascade' }
        ],
        to: [
          { nodeId: 'real-bio-citrate', label: 'Matrix Pyruvate Import', cargo: '2 Pyruvate -> 2 Acetyl-CoA' },
          { nodeId: 'mitochondrion', label: 'Aerobic Respiration', cargo: '2 NADH + 2 net ATP' }
        ]
      },
      es: {
        subtitle: 'Corredor glucolítico citosólico (Glucosa → 2 Piruvato)',
        simple:
          'Activa en el [[citosol|cytosol]] fuera de la [[mitocondria|mitochondrion]], la glucólisis divide cada anillo de [[glucosa|glucose]] de seis carbonos en dos moléculas de piruvato de tres carbonos. Genera 2 ATP netos y 2 NADH al instante y sigue funcionando incluso sin oxígeno.',
        story:
          'Universal en [[bacterias|real-bacterium]], [[plantas|real-plant]] y [[células animales|real-cell]], la glucólisis precede a la atmósfera oxigenada y opera en el [[citosol|cytosol]] sin necesitar O₂. Diez enzimas solubles invierten primero dos ATP para activar y escindir la [[glucosa|glucose]] por la mitad, y luego cosechan cuatro ATP y dos electrones en NADH en la fase de rendimiento mediante GAPDH y piruvato cinasa. Con oxígeno, ambos piruvatos ingresan a la [[mitocondria|mitochondrion]] rumbo al [[ciclo de Krebs|real-bio-citrate]]; sin oxígeno, la fermentación regenera NAD⁺ sosteniendo 2 ATP de emergencia por glucosa.',
        blueprint: {
          role: 'Ruta citosólica universal independiente de oxígeno que escinde glucosa de 6 carbonos en dos piruvatos y ATP rápido',
          arrivesFrom: 'D-[[glucosa|glucose]] citosólica (de fotosíntesis o [[GLUT1|real-mem-glut1]]), 2 ATP iniciales, 2 NAD⁺ y 4 ADP + 2 [[Pᵢ|atom-p]]',
          inside: 'Corredor de diez enzimas citosólicas (hexocinasa, PFK-1, aldolasa, tetrámero GAPDH, piruvato cinasa) dividiendo hexosas fosfato',
          deliversTo: '2 moléculas de piruvato hacia la matriz [[mitocondrial|mitochondrion]], 2 ATP netos a nivel de sustrato y 2 lanzaderas NADH',
          loop: 'Al cortar el O₂ se detiene la cadena mitocondrial y la glucólisis anaerobia con fermentación queda como único aporte de 2 ATP/glucosa'
        },
        scientific:
          'Ruta ancestral de Embden–Meyerhof–Parnas en diez pasos en el [[citosol|cytosol]]: 1 D-[[glucosa|glucose]] + 2 NAD⁺ + 2 ADP + 2 [[Pᵢ|atom-p]] → 2 piruvato + 2 NADH + 2 H⁺ + 2 ATP netos + 2 [[H₂O|water]] (inversión de 2 ATP en hexocinasa/PFK-1 y retorno de 4 ATP en fosfoglicerato cinasa y piruvato cinasa). Sin dependencia de O₂: en aerobiosis abastece a la [[citrato sintasa|real-bio-citrate]] y [[Complejo I|real-bio-complex1]] (~30–32 ATP totales); en anaerobiosis la fermentación reoxida NADH manteniendo 2 ATP netos por glucosa.',
        from: [
          { nodeId: 'glucose', label: 'Glucosa citosólica', cargo: 'Combustible C₆H₁₂O₆' },
          { nodeId: 'cytosol', label: 'Enzimas del citosol', cargo: 'Cascada soluble de 10 pasos' }
        ],
        to: [
          { nodeId: 'real-bio-citrate', label: 'Entrada de piruvato', cargo: '2 Piruvato → 2 Acetil-CoA' },
          { nodeId: 'mitochondrion', label: 'Respiración aerobia', cargo: '2 NADH + 2 ATP netos' }
        ]
      }
    },

    mito_hull: {
      en: {
        subtitle: 'Mitochondrial Double Membrane & Cristae (~2 um)',
        simple:
          'This warm-toned [[mitochondrion|mitochondrion]] is the aerobic ATP generator of [[eukaryotic cells|real-cell]]. Its smooth outer skin wraps a deeply folded inner membrane whose cristae house the [[electron transport chain|electron-transport-chain]] and rotary [[ATP synthase|real-bio-atpsynth]].',
        story:
          'Measuring roughly two micrometers long and descended from an ancient alpha-proteobacterium, the [[mitochondrion|mitochondrion]] maximizes ATP output through architectural folding. Porin channels in its outer shell admit pyruvate, oxygen, and ADP from the [[cytosol|cytosol]], while its cardiolipin-rich inner membrane folds into dense cristae baffles sealing the inner matrix from a narrow intermembrane space. Matrix [[Krebs enzymes|real-bio-citrate]] strip electrons from fuel and feed cristae [[Complexes I-IV|real-bio-complex1]], charging protons in that slim gap to drive [[F1F0 ATP synthase|real-bio-atpsynth]] at ~30-32 ATP per [[glucose|glucose]].',
        blueprint: {
          role: 'Double-membrane aerobic bioenergetic organelle (~1-3 um) coupling carbon oxidation to chemiosmotic ATP generation',
          arrivesFrom: '2 pyruvate + 2 NADH from cytosolic glycolysis, dissolved O2 from [[chloroplasts|chloroplast]], and cytosolic ADP + [[Pi|atom-p]]',
          inside: 'Porin outer membrane, narrow acidic H+ intermembrane space, cristae-folded inner bilayer ([[Complexes I-IV|real-bio-complex1]], [[F1F0|real-bio-atpsynth]]), and [[Krebs|real-bio-citrate]] matrix',
          deliversTo: '6 exhaled CO2 molecules cycling back to [[RuBisCO|real-bio-rubisco]], metabolic [[H2O|water]], and ~30-32 total ATP per [[glucose|glucose]]',
          loop: 'Tightly curved cristae ridges concentrate proton pumps beside F1F0 synthase dimers, minimizing proton escape before capture'
        },
        scientific:
          'Endosymbiotic double-membrane [[mitochondrion|mitochondrion]] (~1-3 x 0.5-1 um in [[animal|real-cell]] and [[plant|real-plant]] eukaryotes). Comprises a VDAC-porin outer membrane, an intermembrane space (~20 nm wide, acidified by ETC proton pumping), a cardiolipin-enriched (~20%) proton-impermeable inner membrane invaginated into cristae housing [[Complexes I-IV|real-bio-complex1]] and dimeric [[F1F0 ATP synthase|real-bio-atpsynth]], and a dense aqueous matrix hosting pyruvate dehydrogenase and the [[Krebs cycle|real-bio-citrate]].',
        from: [
          { nodeId: 'real-cell', label: 'Eukaryotic Cytosol', cargo: 'Pyruvate, O2 & ADP supply' },
          { nodeId: 'glucose', label: 'Glycolytic Fuel', cargo: '2 Pyruvate + 2 NADH' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitochondrion Explorer', cargo: 'Cristae & matrix structure' },
          { nodeId: 'real-bio-atpsynth', label: 'Oxidative ATP Output', cargo: '~30-32 total ATP / glucose' }
        ]
      },
      es: {
        subtitle: 'Doble membrana y crestas mitocondriales (~2 µm)',
        simple:
          'Esta [[mitocondria|mitochondrion]] cálida es la generadora aerobia de ATP de las [[células eucariotas|real-cell]]. Su cubierta externa lisa envuelve una membrana interna muy plegada en crestas que alojan la [[cadena de electrones|electron-transport-chain]] y la [[ATP sintasa|real-bio-atpsynth]].',
        story:
          'Con forma de cápsula de dos micrómetros descendiente de una antigua alfa-proteobacteria, la [[mitocondria|mitochondrion]] multiplica su producción de ATP mediante plegamiento arquitectónico. Las porinas externas admiten piruvato, oxígeno y ADP del [[citosol|cytosol]], mientras la membrana interna rica en cardiolipina se pliega en crestas densas que separan la matriz del estrecho espacio intermembrana. Allí las enzimas del [[ciclo de Krebs|real-bio-citrate]] entregan electrones a los [[Complejos I–IV|real-bio-complex1]], cargando protones que impulsan la [[ATP sintasa F₁F₀|real-bio-atpsynth]] hasta ~30–32 ATP por [[glucosa|glucose]].',
        blueprint: {
          role: 'Orgánulo bioenergético aerobio de doble membrana (~1–3 µm) que acopla la oxidación del carbono con la síntesis quimiosmótica de ATP',
          arrivesFrom: '2 piruvatos + 2 NADH de la glucólisis citosólica, O₂ disuelto de los [[cloroplastos|chloroplast]] y ADP + [[Pᵢ|atom-p]] citosólicos',
          inside: 'Membrana externa con porinas, estrecho espacio intermembrana ácido en H⁺, crestas internas ([[Complejos I–IV|real-bio-complex1]], [[F₁F₀|real-bio-atpsynth]]) y matriz de [[Krebs|real-bio-citrate]]',
          deliversTo: '6 moléculas de CO₂ exhaladas de vuelta a [[RuBisCO|real-bio-rubisco]], [[H₂O|water]] metabólica y ~30–32 ATP totales por [[glucosa|glucose]]',
          loop: 'Las crestas muy curvadas concentran las bombas protónicas junto a dímeros F₁F₀, reduciendo la dispersión de H⁺'
        },
        scientific:
          '[[Mitocondria|mitochondrion]] endosimbiótica de doble membrana (~1–3 × 0,5–1 µm en células [[animales|real-cell]] y [[vegetales|real-plant]]). Consta de membrana externa con porinas VDAC, espacio intermembrana (~20 nm, acidificado por el bombeo ETC), membrana interna impermeable a protones rica en cardiolipina (~20 %) plegada en crestas con los [[Complejos I–IV|real-bio-complex1]] y dímeros [[F₁F₀|real-bio-atpsynth]], y matriz densa sede de PDH y del [[ciclo de Krebs|real-bio-citrate]].',
        from: [
          { nodeId: 'real-cell', label: 'Citosol eucariota', cargo: 'Aporte de piruvato, O₂ y ADP' },
          { nodeId: 'glucose', label: 'Combustible glucolítico', cargo: '2 Piruvato + 2 NADH' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Explorador Mitocondria', cargo: 'Estructura de crestas y matriz' },
          { nodeId: 'real-bio-atpsynth', label: 'Producción aerobia ATP', cargo: '~30–32 ATP totales / glucosa' }
        ]
      }
    },

    krebs_cycle: {
      en: {
        subtitle: 'Matrix Krebs / Citric Acid Cycle (Citrate Synthase PDB 1CTS)',
        simple:
          'Spinning inside the [[mitochondrial|mitochondrion]] matrix, the Krebs cycle dismantles carbon fuel from [[glucose|glucose]] completely into exhaled CO2 gas. Its main payoff is not direct ATP, but loading high-energy NADH and FADH2 carriers for the [[electron transport chain|electron-transport-chain]].',
        story:
          'Before entering the ring, pyruvate dehydrogenase strips two CO2 molecules from twin pyruvates to build two-carbon acetyl-CoA and 2 NADH. Inside the [[mitochondrion|mitochondrion]] matrix, [[Citrate Synthase|real-bio-citrate]] joins each acetyl group to four-carbon oxaloacetate to form citrate, launching an eight-enzyme loop that exhales the final four CO2 molecules back toward [[chloroplasts|chloroplast]]. Across two turns per [[glucose|glucose]], the cycle yields 2 GTP/ATP directly while charging 6 NADH and 2 FADH2 that pour electrons straight into [[Complex I|real-bio-complex1]] and Complex II.',
        blueprint: {
          role: 'Eight-enzyme matrix metabolic loop completing glucose carbon oxidation into CO2 and charging high-energy electron carriers',
          arrivesFrom: '2 Acetyl-CoA (derived from 2 glycolytic pyruvate molecules via PDH) plus oxidized matrix NAD+, FAD, and GDP/ADP + [[Pi|atom-p]]',
          inside: 'Matrix [[Citrate Synthase|real-bio-citrate]] (PDB 1CTS) through malate dehydrogenase coupled to inner-membrane Complex II (succinate dehydrogenase)',
          deliversTo: '4 matrix CO2 (6 CO2 total per [[glucose|glucose]]), 2 GTP/ATP, plus 6 NADH and 2 FADH2 feeding [[Complex I|real-bio-complex1]] and cristae ETC',
          loop: 'All 8 steps depend on Complex I-IV regenerating oxidized NAD+ and FAD; shutting off O2 quickly backs up the entire matrix ring'
        },
        scientific:
          'Tricarboxylic acid (Krebs / citric acid) cycle inside the [[mitochondrion|mitochondrion]] matrix initiated by homodimeric [[Citrate Synthase|real-bio-citrate]] (PDB 1CTS; acetyl-CoA + oxaloacetate + [[H2O|water]] -> citrate + CoA-SH). Two turns per [[glucose|glucose]] (combined with pyruvate dehydrogenase: 2 Pyruvate -> 2 Acetyl-CoA + 2 CO2 + 2 NADH) oxidize all six glucose [[carbons|atom-c]] into 6 CO2 while producing 2 GTP/ATP, 8 mitochondrial NADH (10 NADH total with glycolysis), and 2 FADH2 coupled directly into membrane-bound Complex II.',
        from: [
          { nodeId: 'real-bio-citrate', label: 'Citrate Synthase', cargo: 'Acetyl-CoA + OAA -> Citrate' },
          { nodeId: 'glucose', label: 'Pyruvate Oxidation', cargo: '2 Acetyl-CoA + 2 CO2 + 2 NADH' }
        ],
        to: [
          { nodeId: 'real-bio-complex1', label: 'Complex I NADH Feed', cargo: '8 matrix NADH shuttles' },
          { nodeId: 'real-bio-rubisco', label: 'CO2 Carbon Return', cargo: '6 CO2 back to chloroplast' }
        ]
      },
      es: {
        subtitle: 'Ciclo de Krebs en la matriz (Citrato sintasa PDB 1CTS)',
        simple:
          'Activo dentro de la matriz [[mitocondrial|mitochondrion]], el ciclo de Krebs desarma por completo el carbono de la [[glucosa|glucose]] en gas CO₂ exhalado. Su mayor rendimiento no es el ATP directo, sino cargar NADH y FADH₂ para la [[cadena respiratoria|electron-transport-chain]].',
        story:
          'Antes del anillo, la piruvato deshidrogenasa extrae dos CO₂ de los dos piruvatos formando acetil-CoA y 2 NADH. En la matriz de la [[mitocondria|mitochondrion]], la [[citrato sintasa|real-bio-citrate]] une cada acetilo al oxaloacetato formando citrato e iniciando un bucle de ocho enzimas que exhala los cuatro CO₂ restantes rumbo a los [[cloroplastos|chloroplast]]. En dos vueltas por [[glucosa|glucose]], el ciclo genera 2 GTP/ATP directos y carga 6 NADH y 2 FADH₂ que alimentan al [[Complejo I|real-bio-complex1]] y al Complejo II.',
        blueprint: {
          role: 'Bucle metabólico matricial de ocho enzimas que completa la oxidación del carbono a CO₂ y carga portadores electrónicos',
          arrivesFrom: '2 Acetil-CoA (procedentes de 2 piruvatos vía PDH) más NAD⁺, FAD y GDP/ADP + [[Pᵢ|atom-p]] matriciales',
          inside: '[[Citrato sintasa|real-bio-citrate]] matricial (PDB 1CTS) hasta malato deshidrogenasa, acoplado al Complejo II en la membrana interna',
          deliversTo: '4 CO₂ matriciales (6 CO₂ totales por [[glucosa|glucose]]), 2 GTP/ATP y 6 NADH + 2 FADH₂ hacia el [[Complejo I|real-bio-complex1]]',
          loop: 'El anillo depende de que los Complejos I–IV regeneren NAD⁺ y FAD; sin O₂ el ciclo se frena rápidamente'
        },
        scientific:
          'Ciclo de los ácidos tricarboxílicos (Krebs) en la matriz [[mitocondrial|mitochondrion]] iniciado por la [[citrato sintasa|real-bio-citrate]] homodimérica (PDB 1CTS). Dos vueltas por [[glucosa|glucose]] (sumadas a la descarboxilación por PDH: 2 piruvato → 2 acetil-CoA + 2 CO₂ + 2 NADH) oxidan los seis [[carbonos|atom-c]] a 6 CO₂ rindiendo 2 GTP/ATP, 8 NADH mitocondriales (10 NADH totales) y 2 FADH₂ canalizados directamente al Complejo II.',
        from: [
          { nodeId: 'real-bio-citrate', label: 'Citrato sintasa', cargo: 'Acetil-CoA + OAA → Citrato' },
          { nodeId: 'glucose', label: 'Oxidación de piruvato', cargo: '2 Acetil-CoA + 2 CO₂ + 2 NADH' }
        ],
        to: [
          { nodeId: 'real-bio-complex1', label: 'Aporte NADH al Complejo I', cargo: '8 lanzaderas NADH matriciales' },
          { nodeId: 'real-bio-rubisco', label: 'Retorno de CO₂', cargo: '6 CO₂ hacia el cloroplasto' }
        ]
      }
    },

    complex_i: {
      en: {
        subtitle: 'Complex I NADH:Ubiquinone Oxidoreductase (PDB 5XTD)',
        simple:
          'Spanning the inner cristae membrane in a large L-shaped assembly, [[Complex I|real-bio-complex1]] strips two electrons from every NADH delivered by the [[Krebs cycle|real-bio-citrate]], hands them to lipid-soluble ubiquinone, and pumps four protons outward.',
        story:
          'As the main high-voltage gateway into the mitochondrial [[electron transport chain|electron-transport-chain]], forty-five-subunit [[Complex I|real-bio-complex1]] couples chemistry in the matrix to mechanical proton pumping across the cristae bilayer. NADH binds its peripheral flavin site and sends two electrons racing down seven [[iron|atom-fe]]-[[sulfur|atom-s]] clusters to reduce ubiquinone (Q) to ubiquinol (QH2) inside the membrane core. That conformational shift drives four proton-translocating subunits along the horizontal membrane arm to push 4 H+ into the intermembrane space for [[F1F0 ATP synthase|real-bio-atpsynth]].',
        blueprint: {
          role: 'Largest respiratory supercomplex oxidizing NADH, reducing membrane ubiquinone, and pumping 4 H+ per electron pair',
          arrivesFrom: 'Matrix NADH + H+ charged by glycolysis, PDH, and the [[Krebs cycle|real-bio-citrate]], plus oxidized membrane ubiquinone (Q)',
          inside: '980 kDa L-shaped 45-subunit assembly (PDB 5XTD) pairing a matrix FMN + 7 [[Fe-S|atom-fe]] wire with four membrane proton channels',
          deliversTo: 'Regenerated matrix NAD+, lipid-soluble ubiquinol (QH2) moving to Complex III, and 4 pumped H+ charging [[ATP synthase|real-bio-atpsynth]]',
          loop: 'If O2 stops at Complex IV, ubiquinol saturates and Complex I stalls, preventing matrix NAD+ regeneration'
        },
        scientific:
          'Mammalian respiratory [[Complex I|real-bio-complex1]] (NADH:ubiquinone oxidoreductase; cryo-EM PDB 5XTD; ~980 kDa, 45 subunits embedded in cristae of the [[mitochondrion|mitochondrion]]). Transfers 2 e- from NADH via FMN and seven [[Fe-S|atom-fe]]-[[S|atom-s]] clusters over ~9.5 nm to membrane ubiquinone (Q -> QH2), coupling redox energy across four antiporter-like subunits (ND1/ND4L, ND2, ND4, ND5) to translocate 4 [[H+|atom-h]] per NADH from matrix to intermembrane space.',
        from: [
          { nodeId: 'real-bio-citrate', label: 'Krebs NADH Supply', cargo: 'High-energy 2 e- donor' },
          { nodeId: 'atom-fe', label: 'Seven Fe-S Clusters', cargo: '9.5 nm electron wire' }
        ],
        to: [
          { nodeId: 'real-bio-complex1', label: 'Complex I Node', cargo: '45-subunit 4 H+ pump' },
          { nodeId: 'electron-transport-chain', label: 'Ubiquinol Pool', cargo: 'QH2 shuttle to Complex III' }
        ]
      },
      es: {
        subtitle: 'Complejo I NADH:ubiquinona oxidorreductasa (PDB 5XTD)',
        simple:
          'Desplegado con una gran estructura en L en las crestas internas, el [[Complejo I|real-bio-complex1]] retira dos electrones de cada NADH del [[ciclo de Krebs|real-bio-citrate]], los pasa a la ubiquinona lipídica y bombea cuatro protones hacia fuera.',
        story:
          'Como entrada principal de alto potencial en la [[cadena respiratoria|electron-transport-chain]] mitocondrial, el [[Complejo I|real-bio-complex1]] de cuarenta y cinco subunidades acopla la química matricial al bombeo protónico en la membrana interna. El NADH se une al sitio FMN y envía dos electrones por siete centros [[hierro|atom-fe]]–[[azufre|atom-s]] para reducir ubiquinona (Q) a ubiquinol (QH₂). Ese cambio conformacional acciona cuatro subunidades bombeadoras del brazo horizontal, expulsando 4 H⁺ hacia el espacio intermembrana para la [[ATP sintasa F₁F₀|real-bio-atpsynth]].',
        blueprint: {
          role: 'Mayor complejo respiratorio que oxida NADH, reduce ubiquinona de membrana y bombea 4 H⁺ por par de electrones',
          arrivesFrom: 'NADH + H⁺ matricial de glucólisis, PDH y [[ciclo de Krebs|real-bio-citrate]], más ubiquinona (Q) oxidada de la bicapa',
          inside: 'Ensamblaje en L de 980 kDa y 45 subunidades (PDB 5XTD) que une cable FMN + 7 [[Fe–S|atom-fe]] con cuatro canales protónicos',
          deliversTo: 'NAD⁺ matricial regenerado, ubiquinol (QH₂) móvil rumbo al Complejo III y 4 H⁺ bombeados para [[ATP sintasa|real-bio-atpsynth]]',
          loop: 'Si falta O₂ en el Complejo IV, el ubiquinol se satura y el Complejo I se detiene bloqueando el reciclaje de NAD⁺'
        },
        scientific:
          '[[Complejo I|real-bio-complex1]] respiratorio de mamíferos (NADH:ubiquinona oxidorreductasa; crio-EM PDB 5XTD; ~980 kDa, 45 subunidades en crestas de la [[mitocondria|mitochondrion]]). Transfiere 2 e⁻ de NADH mediante FMN y siete centros [[Fe–S|atom-fe]]–[[S|atom-s]] (~9,5 nm) hacia la ubiquinona (Q → QH₂), translocando 4 [[H⁺|atom-h]] por NADH mediante cuatro subunidades tipo antiporter hacia el espacio intermembrana.',
        from: [
          { nodeId: 'real-bio-citrate', label: 'Aporte NADH de Krebs', cargo: 'Donador de 2 e⁻ de alta energía' },
          { nodeId: 'atom-fe', label: 'Siete centros Fe–S', cargo: 'Cable electrónico de 9,5 nm' }
        ],
        to: [
          { nodeId: 'real-bio-complex1', label: 'Nodo Complejo I', cargo: 'Bomba 4 H⁺ de 45 subunidades' },
          { nodeId: 'electron-transport-chain', label: 'Reserva de ubiquinol', cargo: 'Lanzadera QH₂ al Complejo III' }
        ]
      }
    },

    complex_ii: {
      en: {
        subtitle: 'Complex II Succinate Dehydrogenase (PDB 1ZOY)',
        simple:
          'Complex II serves double duty as an enzyme of the [[Krebs cycle|real-bio-citrate]] and a second entry point into the [[electron transport chain|electron-transport-chain]]. It passes electrons from FADH2 directly to ubiquinone without pumping any protons itself.',
        story:
          'Unique among respiratory enzymes, four-subunit Succinate Dehydrogenase physically welds the matrix [[Krebs cycle|real-bio-citrate]] onto the inner cristae bilayer of the [[mitochondrion|mitochondrion]]. As its catalytic flavoprotein oxidizes succinate into fumarate, two electrons load transiently onto covalently bound FAD (forming FADH2) and hop through three [[iron|atom-fe]]-[[sulfur|atom-s]] clusters straight into membrane ubiquinone (Q -> QH2). Because succinate electrons enter at a lower voltage than NADH, Complex II pumps zero protons, which explains why FADH2 drives 6 total H+ downstream rather than 10.',
        blueprint: {
          role: 'Dual-role Krebs cycle enzyme and secondary ETC ubiquinone reductase bridging matrix metabolism directly to cristae lipids',
          arrivesFrom: 'Matrix succinate generated halfway around the [[Krebs cycle|real-bio-citrate]] plus oxidized inner-membrane ubiquinone (Q)',
          inside: 'Four-subunit Succinate Dehydrogenase (PDB 1ZOY; SDHA-SDHD) housing covalent FAD, three [[Fe-S|atom-fe]] clusters, and a protective b-heme',
          deliversTo: 'Matrix fumarate continuing the [[Krebs loop|real-bio-citrate]] plus reduced ubiquinol (QH2) feeding Complex III and [[Complex IV|real-bio-complex4]]',
          loop: 'Bypassing Complex I yields 0 H+ pumped here, so each FADH2 produces ~1.5 ATP compared to ~2.5 ATP per NADH'
        },
        scientific:
          'Mitochondrial Complex II (succinate:ubiquinone oxidoreductase / succinate dehydrogenase; porcine crystal structure PDB 1ZOY; ~124 kDa four-subunit nuclear-encoded assembly SDHA-SDHD in inner cristae of the [[mitochondrion|mitochondrion]]). Catalyzes succinate -> fumarate + 2 e- + 2 H+ via covalently linked FAD and three [[Fe-S|atom-fe]]-[[S|atom-s]] clusters ([2Fe-2S], [4Fe-4S], [3Fe-4S]) to reduce ubiquinone to ubiquinol without transmembrane [[H+|atom-h]] pumping (0 H+), yielding 6 net H+ via Complexes III and [[IV|real-bio-complex4]].',
        from: [
          { nodeId: 'real-bio-citrate', label: 'Krebs Succinate', cargo: 'Dual TCA / ETC interface' },
          { nodeId: 'atom-fe', label: 'Triple Fe-S Chain', cargo: 'FAD -> QH2 electron path' }
        ],
        to: [
          { nodeId: 'electron-transport-chain', label: 'Ubiquinol Pool', cargo: 'QH2 to Complex III (0 H+ here)' },
          { nodeId: 'mitochondrion', label: 'Matrix Fumarate', cargo: 'Krebs cycle continuation' }
        ]
      },
      es: {
        subtitle: 'Complejo II Succinato deshidrogenasa (PDB 1ZOY)',
        simple:
          'El Complejo II cumple doble función como enzima del [[ciclo de Krebs|real-bio-citrate]] y segunda entrada a la [[cadena respiratoria|electron-transport-chain]]. Entrega electrones del FADH₂ a la ubiquinona sin bombear protones por sí mismo.',
        story:
          'Único entre las enzimas respiratorias, el Complejo II de cuatro subunidades suelda físicamente el [[ciclo de Krebs|real-bio-citrate]] matricial sobre la bicapa interna de la [[mitocondria|mitochondrion]]. Al oxidar succinato a fumarato, dos electrones pasan por FAD covalente (FADH₂) y saltan por tres centros [[hierro|atom-fe]]–[[azufre|atom-s]] hasta reducir ubiquinona (Q → QH₂). Como estos electrones ingresan con menor voltaje que el NADH, el Complejo II bombea cero protones, por lo que cada FADH₂ impulsa solo 6 H⁺ aguas abajo frente a los 10 del NADH.',
        blueprint: {
          role: 'Enzima dual del ciclo de Krebs y reductasa secundaria de ubiquinona que une el metabolismo matricial con los lípidos de cresta',
          arrivesFrom: 'Succinato matricial producido en el [[ciclo de Krebs|real-bio-citrate]] más ubiquinona (Q) oxidada de la membrana interna',
          inside: 'Succinato deshidrogenasa de cuatro subunidades (PDB 1ZOY; SDHA–SDHD) con FAD covalente, tres centros [[Fe–S|atom-fe]] y hemo b protector',
          deliversTo: 'Fumarato matricial para proseguir el [[ciclo de Krebs|real-bio-citrate]] más ubiquinol (QH₂) rumbo al Complejo III y [[Complejo IV|real-bio-complex4]]',
          loop: 'Al omitir el Complejo I y bombear 0 H⁺ aquí, cada FADH₂ genera ~1,5 ATP frente a ~2,5 ATP por NADH'
        },
        scientific:
          'Complejo II mitocondrial (succinato:ubiquinona oxidorreductasa; cristalografía porcina PDB 1ZOY; ensamblaje nuclear de cuatro subunidades SDHA–SDHD de ~124 kDa en crestas de la [[mitocondria|mitochondrion]]). Cataliza succinato → fumarato + 2 e⁻ + 2 H⁺ vía FAD covalente y tres centros [[Fe–S|atom-fe]]–[[S|atom-s]] reduciendo Q a QH₂ sin translocar [[H⁺|atom-h]] (0 H⁺), aportando 6 H⁺ netos vía Complejos III y [[IV|real-bio-complex4]].',
        from: [
          { nodeId: 'real-bio-citrate', label: 'Succinato de Krebs', cargo: 'Puente directo Krebs / ETC' },
          { nodeId: 'atom-fe', label: 'Cadena triple Fe–S', cargo: 'Ruta FAD → QH₂' }
        ],
        to: [
          { nodeId: 'electron-transport-chain', label: 'Reserva ubiquinol', cargo: 'QH₂ al Complejo III (0 H⁺ aquí)' },
          { nodeId: 'mitochondrion', label: 'Fumarato matricial', cargo: 'Continuación de Krebs' }
        ]
      }
    },

    complex_iii: {
      en: {
        subtitle: 'Complex III Cytochrome bc1 Dimer (PDB 1BGY)',
        simple:
          'Acting as the mitochondrial counterpart of chloroplast [[Cytochrome b6f|real-bio-b6f]], Complex III receives electrons from ubiquinol, transfers them to soluble cytochrome c for [[Complex IV|real-bio-complex4]], and releases four protons into the intermembrane space.',
        story:
          'Built as an intertwined 22-subunit homodimer inside the cristae of the [[mitochondrion|mitochondrion]], Cytochrome bc1 merges electron traffic arriving from both [[Complex I|real-bio-complex1]] and Complex II via the lipid ubiquinol pool. Using the exact same bifurcated Q-cycle architecture evolved in [[chloroplast Cytochrome b6f|real-bio-b6f]], its swinging Rieske [[iron|atom-fe]]-[[sulfur|atom-s]] head routes one electron through cytochrome c1 onto mobile cytochrome c while recycling the second across hemes bL and bH to reload another quinone, pushing 4 H+ into the intermembrane space per two electrons forwarded.',
        blueprint: {
          role: 'Central respiratory ubiquinol-cytochrome c oxidoreductase running the bifurcated Q-cycle to translocate 4 H+ per 2 e-',
          arrivesFrom: 'Lipid-soluble ubiquinol (QH2) reduced by [[Complex I|real-bio-complex1]] and Complex II plus oxidized intermembrane cytochrome c',
          inside: 'Dimeric 480 kDa cytochrome bc1 assembly (PDB 1BGY) housing mobile Rieske [[2Fe-2S|atom-fe]], cytochrome c1, and transmembrane hemes bL/bH',
          deliversTo: 'Two reduced cytochrome c shuttles heading to [[Complex IV|real-bio-complex4]] plus 4 H+ released into the intermembrane space for [[F1F0|real-bio-atpsynth]]',
          loop: 'Mirrors chloroplast Cytochrome b6f structurally, illustrating how photosynthesis and respiration share identical proton-pumping physics'
        },
        scientific:
          'Mammalian mitochondrial Complex III (ubiquinol:cytochrome c oxidoreductase / cytochrome bc1 homodimer; bovine crystal structure PDB 1BGY; ~480 kDa dimer of 11 subunits per monomer, homologous to thylakoid [[Cytochrome b6f|real-bio-b6f]]). Executes Mitchell Q-cycle bifurcation at Qo and Qi pockets via a mobile Rieske [[2Fe-2S|atom-fe]]-[[S|atom-s]] domain, heme c1, and bL/bH hemes: QH2 + 2 Cyt c(ox) + 2 H+(matrix) -> Q + 2 Cyt c(red) + 4 [[H+|atom-h]](IMS), delivering reduced cytochrome c to [[Complex IV|real-bio-complex4]].',
        from: [
          { nodeId: 'real-bio-complex1', label: 'Complex I & II QH2', cargo: 'Merged ubiquinol electron pool' },
          { nodeId: 'atom-fe', label: 'Rieske & b/c1 Hemes', cargo: 'Q-cycle bifurcation core' }
        ],
        to: [
          { nodeId: 'real-bio-complex4', label: 'Complex IV Feed', cargo: 'Reduced Cyt c (1 e- carriers)' },
          { nodeId: 'real-bio-atpsynth', label: 'Proton Gradient', cargo: '4 H+ released per 2 e-' }
        ]
      },
      es: {
        subtitle: 'Dímero Complejo III Citocromo bc₁ (PDB 1BGY)',
        simple:
          'Como contraparte mitocondrial del [[citocromo b₆f|real-bio-b6f]] cloroplástico, el Complejo III recoge electrones del ubiquinol, los transfiere al citocromo c soluble hacia el [[Complejo IV|real-bio-complex4]] y libera cuatro protones al espacio intermembrana.',
        story:
          'Construido como un homodímero entrelazado de 22 subunidades en las crestas de la [[mitocondria|mitochondrion]], el citocromo bc₁ reúne el flujo electrónico que llega tanto del [[Complejo I|real-bio-complex1]] como del Complejo II mediante el ubiquinol lipídico. Con la misma arquitectura de ciclo Q bifurcado presente en el [[citocromo b₆f|real-bio-b6f]], su cabeza móvil Rieske [[hierro|atom-fe]]–[[azufre|atom-s]] envía un electrón por el citocromo c₁ al citocromo c móvil y recicla el otro por los hemos b_L y b_H, aportando 4 H⁺ al espacio intermembrana por cada par de electrones.',
        blueprint: {
          role: 'Oxidorreductasa respiratoria central ubiquinol–citocromo c que ejecuta el ciclo Q bifurcado liberando 4 H⁺ por cada 2 e⁻',
          arrivesFrom: 'Ubiquinol (QH₂) reducido por el [[Complejo I|real-bio-complex1]] y Complejo II más citocromo c oxidado intermembrana',
          inside: 'Homodímero citocromo bc₁ de 480 kDa (PDB 1BGY) con centro móvil Rieske [[2Fe–2S|atom-fe]], citocromo c₁ y hemos b_L/b_H transmembrana',
          deliversTo: 'Dos lanzaderas reducidas de citocromo c hacia el [[Complejo IV|real-bio-complex4]] más 4 H⁺ al espacio intermembrana para [[F₁F₀|real-bio-atpsynth]]',
          loop: 'Refleja estructuralmente al citocromo b₆f vegetal, demostrando que fotosíntesis y respiración comparten idéntica física de bombeo'
        },
        scientific:
          'Complejo III mitocondrial de mamíferos (ubiquinol:citocromo c oxidorreductasa / dímero citocromo bc₁; cristalografía bovina PDB 1BGY; ~480 kDa con 11 subunidades por monómero, homólogo de [[Cyt b₆f|real-bio-b6f]]). Ejecuta el ciclo Q de Mitchell entre sitios Q_o y Q_i mediante el centro Rieske [[2Fe–2S|atom-fe]]–[[S|atom-s]], hemo c₁ y hemos b_L/b_H: QH₂ + 2 Cyt c(ox) + 2 H⁺(matriz) → Q + 2 Cyt c(red) + 4 [[H⁺|atom-h]](EIM), abasteciendo al [[Complejo IV|real-bio-complex4]].',
        from: [
          { nodeId: 'real-bio-complex1', label: 'QH₂ de Complejos I y II', cargo: 'Reserva unificada de ubiquinol' },
          { nodeId: 'atom-fe', label: 'Rieske y hemos b/c₁', cargo: 'Núcleo bifurcado de ciclo Q' }
        ],
        to: [
          { nodeId: 'real-bio-complex4', label: 'Aporte al Complejo IV', cargo: 'Citocromo c reducido (1 e⁻)' },
          { nodeId: 'real-bio-atpsynth', label: 'Gradiente protónico', cargo: '4 H⁺ liberados por cada 2 e⁻' }
        ]
      }
    },

    complex_iv: {
      en: {
        subtitle: 'Complex IV Cytochrome c Oxidase (PDB 1V54)',
        simple:
          '[[Complex IV|real-bio-complex4]] is the oxygen-consuming finish line of the mitochondrial [[electron transport chain|electron-transport-chain]]. It unites spent electrons, protons, and breathed O2 into [[water|water]] while pumping additional protons across the inner cristae.',
        story:
          'Receiving one electron at a time from soluble cytochrome c on the outer side of the cristae bilayer, dimeric [[Complex IV|real-bio-complex4]] channels electrons through copper CuA and heme a into a deeply buried heme a3 [[iron|atom-fe]]-copper CuB oxygen trap. Holding O2 tight until all four electrons and four chemical protons arrive prevents toxic radical escape, producing two clean [[water|water]] molecules while pumping four more protons outward (2 H+ per electron pair). Switching the O2 toggle off halts this single enzyme and drops cellular ATP output from ~32 down to 2.',
        blueprint: {
          role: 'Terminal respiratory oxidase safely reducing O2 to H2O while pumping 2 H+ per 2 e- to sustain aerobic ETC throughput',
          arrivesFrom: 'Reduced intermembrane cytochrome c from Complex III, dissolved O2 from [[PSII|real-bio-psii]], and matrix [[H+|atom-h]] protons',
          inside: 'Dimeric 13-subunit Cytochrome c Oxidase (PDB 1V54) coordinating CuA, heme a, and binuclear catalytic heme a3-[[Fe|atom-fe]]/CuB',
          deliversTo: 'Metabolic [[H2O|water]] returned to the biosphere loop plus 2 pumped H+ per electron pair powering [[F1F0 ATP synthase|real-bio-atpsynth]]',
          loop: 'Oxygen deprivation freezes Complex IV instantly, backing up Complexes III and I and collapsing yield to 2 glycolytic ATP'
        },
        scientific:
          'Mammalian mitochondrial [[Complex IV|real-bio-complex4]] (cytochrome c oxidase; bovine heart crystal structure PDB 1V54; ~200 kDa monomer operating as an inner-membrane cristae dimer). Accepts electrons from soluble cytochrome c at CuA -> heme a -> binuclear heme a3 [[Fe|atom-fe]]-CuB to catalyze 4 Cyt c(red) + O2 + 8 H+(matrix) -> 4 Cyt c(ox) + 2 [[H2O|water]] + 4 [[H+|atom-h]](IMS), completing the 10 H+/NADH (4 + 4 + 2) aerobic proton budget driving [[F1F0 ATP synthase|real-bio-atpsynth]].',
        from: [
          { nodeId: 'electron-transport-chain', label: 'Reduced Cytochrome c', cargo: 'Terminal electron relay' },
          { nodeId: 'real-bio-psii', label: 'Atmospheric O2', cargo: 'Final electron acceptor' }
        ],
        to: [
          { nodeId: 'real-bio-complex4', label: 'Complex IV Node', cargo: 'O2 -> H2O oxidase & H+ pump' },
          { nodeId: 'water', label: 'Metabolic Water', cargo: '1/2 O2 + 2 H+ + 2 e- -> H2O' }
        ]
      },
      es: {
        subtitle: 'Complejo IV Citocromo c oxidasa (PDB 1V54)',
        simple:
          'El [[Complejo IV|real-bio-complex4]] es la meta consumidora de oxígeno de la [[cadena respiratoria|electron-transport-chain]] mitocondrial. Une electrones gastados, protones y O₂ respirado formando [[agua|water]] mientras bombea protones adicionales a través de la cresta interna.',
        story:
          'Recibiendo electrones de uno en uno desde el citocromo c soluble en la cara externa de la cresta, el dímero [[Complejo IV|real-bio-complex4]] los guía vía Cu_A y hemo a hasta su núcleo profundo de [[hierro|atom-fe]] hemo a₃ y cobre Cu_B. Retener el O₂ hasta reunir cuatro electrones y cuatro protones evita fugas radicalarias, liberando dos moléculas de [[agua|water]] limpias y bombeando cuatro protones adicionales (2 H⁺ por par de electrones). Apagar el O₂ bloquea esta enzima y reduce el rendimiento de ~32 ATP a solo 2.',
        blueprint: {
          role: 'Oxidasa respiratoria terminal que reduce con seguridad O₂ a H₂O y bombea 2 H⁺ por par de e⁻ sosteniendo el flujo aerobio',
          arrivesFrom: 'Citocromo c reducido del Complejo III, O₂ disuelto procedente de [[PSII|real-bio-psii]] y protones [[H⁺|atom-h]] matriciales',
          inside: 'Dímero de citocromo c oxidasa de 13 subunidades (PDB 1V54) con Cu_A, hemo a y centro binuclear catalítico hemo a₃–[[Fe|atom-fe]]/Cu_B',
          deliversTo: '[[H₂O|water]] metabólica devuelta al ciclo vital más 2 H⁺ bombeados por par de electrones para la [[ATP sintasa F₁F₀|real-bio-atpsynth]]',
          loop: 'La falta de oxígeno paraliza el Complejo IV al instante, frena los Complejos III y I y cae a 2 ATP de glucólisis'
        },
        scientific:
          '[[Complejo IV|real-bio-complex4]] mitocondrial de mamíferos (citocromo c oxidasa; cristalografía bovina PDB 1V54; dímero en crestas de monómeros de ~200 kDa). Transfiere electrones desde el citocromo c vía Cu_A → hemo a → hemo a₃ [[Fe|atom-fe]]–Cu_B catalizando 4 Cyt c(red) + O₂ + 8 H⁺(matriz) → 4 Cyt c(ox) + 2 [[H₂O|water]] + 4 [[H⁺|atom-h]](EIM), cerrando el presupuesto de 10 H⁺/NADH (4 + 4 + 2) que alimenta a la [[ATP sintasa F₁F₀|real-bio-atpsynth]].',
        from: [
          { nodeId: 'electron-transport-chain', label: 'Citocromo c reducido', cargo: 'Relevo electrónico terminal' },
          { nodeId: 'real-bio-psii', label: 'O₂ atmosférico', cargo: 'Aceptor final de electrones' }
        ],
        to: [
          { nodeId: 'real-bio-complex4', label: 'Nodo Complejo IV', cargo: 'Oxidasa O₂ → H₂O y bomba H⁺' },
          { nodeId: 'water', label: 'Agua metabólica', cargo: '½ O₂ + 2 H⁺ + 2 e⁻ → H₂O' }
        ]
      }
    },

    f1f0_atps: {
      en: {
        subtitle: 'Mitochondrial F1F0 Rotary ATP Synthase (PDB 5ARA)',
        simple:
          'Anchored along curved cristae ridges of the [[mitochondrion|mitochondrion]], rotary [[F1F0 ATP synthase|real-bio-atpsynth]] harvests the inward rush of protons to spin its membrane c8-ring and central stalk, synthesizing ~26-28 ATP per [[glucose|glucose]].',
        story:
          'Paired in V-shaped dimers that actively bend the inner cristae ridges of the [[mitochondrion|mitochondrion]], [[F1F0 ATP synthase|real-bio-atpsynth]] converts proton pressure directly into mechanical torque. Protons pumped into the intermembrane space by [[Complex I|real-bio-complex1]], Complex III, and [[Complex IV|real-bio-complex4]] flow back into the matrix through the F0 a-subunit and 8-subunit c-ring, rotating the asymmetric gamma shaft inside the matrix-facing alpha3-beta3 crown. Each 360-degree turn forges three fresh ATP molecules from ADP and [[phosphate|atom-p]], bringing aerobic output to ~30-32 total ATP per [[glucose|glucose]].',
        blueprint: {
          role: 'Mitochondrial rotary chemiosmotic turbine generating ~90% of cellular ATP from the cristae proton-motive force',
          arrivesFrom: 'Intermembrane [[H+|atom-h]] proton gradient (~10 H+/NADH, ~6 H+/FADH2) plus matrix ADP, [[Pi|atom-p]], and [[Mg2+|atom-mg]]',
          inside: 'Intact F1F0 dimeric turbine (PDB 5ARA) coupling an F0 c8 proton ring and central gamma stalk to a stator-braced alpha3-beta3 head',
          deliversTo: '~26-28 oxidative ATP molecules per [[glucose|glucose]] exported to the [[cytosol|cytosol]] (~30-32 total ATP with glycolysis and Krebs)',
          loop: 'Without O2 the proton gradient collapses, stopping c8-ring rotation and dropping cellular yield to 2 anaerobic ATP'
        },
        scientific:
          'Intact mammalian mitochondrial [[F1F0 ATP synthase|atp-synthase]] (bovine heart cryo-EM PDB 5ARA; ~600 kDa monomer forming cristae-shaping dimers). Membrane-embedded F0 houses a compact 8-subunit c8-ring requiring 8/3 = 2.67 [[H+|atom-h]] per ATP plus 1 H+ for phosphate/ADP import (~3.7 H+/ATP total). Powered by inner-membrane proton-motive force (~180-200 mV), rotational Boyer binding-change catalysis yields ~26-28 oxidative ATP (~30-32 total ATP per [[glucose|glucose]]) powering [[Na+/K+ pumps|real-mem-nak]], biosynthesis, and motility.',
        from: [
          { nodeId: 'real-bio-complex4', label: 'Cristae H+ Gradient', cargo: 'Proton-motive force (~180 mV)' },
          { nodeId: 'atom-p', label: 'Matrix ADP + Pi', cargo: 'Phosphoanhydride synthesis' }
        ],
        to: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP Synthase Node', cargo: 'c8-ring rotary F1F0 turbine' },
          { nodeId: 'real-mem-nak', label: 'Cellular ATP Consumers', cargo: '~30-32 ATP / glucose currency' }
        ]
      },
      es: {
        subtitle: 'ATP sintasa rotatoria mitocondrial F₁F₀ (PDB 5ARA)',
        simple:
          'Anclada en los bordes curvos de las crestas de la [[mitocondria|mitochondrion]], la [[ATP sintasa F₁F₀|real-bio-atpsynth]] aprovecha el retorno de protones para rotar su anillo c₈ y tallo central, sintetizando ~26–28 ATP por [[glucosa|glucose]].',
        story:
          'Emparejada en dímeros en V que moldean las crestas de la [[mitocondria|mitochondrion]], la [[ATP sintasa F₁F₀|real-bio-atpsynth]] convierte presión protónica directamente en par mecánico. Los protones bombeados al espacio intermembrana por el [[Complejo I|real-bio-complex1]], Complejo III y [[Complejo IV|real-bio-complex4]] regresan a la matriz por la subunidad a y el anillo de 8 subunidades c, girando el eje asimétrico γ dentro de la corona matricial α₃β₃. Cada vuelta completa sintetiza tres ATP desde ADP y [[fosfato|atom-p]], elevando el total aerobio a ~30–32 ATP por [[glucosa|glucose]].',
        blueprint: {
          role: 'Turbina quimiosmótica rotatoria mitocondrial que produce ~90 % del ATP celular a partir de la fuerza protón-motriz en crestas',
          arrivesFrom: 'Gradiente intermembrana de [[H⁺|atom-h]] (~10 H⁺/NADH, ~6 H⁺/FADH₂) más ADP, [[Pᵢ|atom-p]] y [[Mg²⁺|atom-mg]] matriciales',
          inside: 'Turbina dimérica F₁F₀ intacta (PDB 5ARA) que acopla el anillo protónico c₈ y el eje γ a la cabeza catalítica α₃β₃ fija por estator',
          deliversTo: '~26–28 ATP oxidativos por [[glucosa|glucose]] exportados al [[citosol|cytosol]] (~30–32 ATP totales con glucólisis y Krebs)',
          loop: 'Sin O₂ el gradiente de protones se agota, frenando el anillo c₈ y cayendo a solo 2 ATP anaerobios'
        },
        scientific:
          '[[ATP sintasa F₁F₀|atp-synthase]] mitocondrial intacta de mamíferos (crio-EM bovina PDB 5ARA; monómero de ~600 kDa en dímeros curvadores de crestas). Su rotor F₀ posee un anillo c₈ compacto que consume 8/3 = 2,67 [[H⁺|atom-h]] por ATP más 1 H⁺ por simporte de Pᵢ/ADP (~3,7 H⁺/ATP). Impulsada por Δp (~180–200 mV), la catálisis rotatoria de Boyer produce ~26–28 ATP oxidativos (~30–32 totales por [[glucosa|glucose]]) para [[bombas Na⁺/K⁺|real-mem-nak]] y biosíntesis.',
        from: [
          { nodeId: 'real-bio-complex4', label: 'Gradiente H⁺ en crestas', cargo: 'Fuerza protón-motriz (~180 mV)' },
          { nodeId: 'atom-p', label: 'ADP + Pᵢ matriciales', cargo: 'Síntesis fosfoanhídrido' }
        ],
        to: [
          { nodeId: 'real-bio-atpsynth', label: 'Nodo ATP sintasa', cargo: 'Turbina rotatoria F₁F₀ c₈' },
          { nodeId: 'real-mem-nak', label: 'Consumidores celulares', cargo: '~30–32 ATP / glucosa' }
        ]
      }
    },

    proton_grad: {
      en: {
        subtitle: 'Chemiosmotic Proton Gradient (H+ / Delta-p)',
        simple:
          'This glowing concentration of hydrogen ions ([[H+|atom-h]]) across sealed thylakoid and mitochondrial membranes stores the exact electrochemical energy needed to spin [[ATP synthase|real-bio-atpsynth]]. Both photosynthesis and respiration depend on this shared proton gradient.',
        story:
          'Peter Mitchell revealed that neither sunlight nor sugar oxidation builds ATP directly at electron-transport complexes; instead, both organelles convert redox energy into one universal intermediate: a transmembrane proton gradient. Inside the [[chloroplast|chloroplast]], [[PSII|real-bio-psii]] and [[Cytochrome b6f|real-bio-b6f]] concentrate H+ inside the tiny thylakoid lumen to pH 5.5 against pH 8.0 stroma. Inside the [[mitochondrion|mitochondrion]], [[Complex I|real-bio-complex1]], Complex III, and [[Complex IV|real-bio-complex4]] pump H+ into the narrow intermembrane space, establishing a ~180-millivolt electrochemical drive that spins [[ATP synthase|real-bio-atpsynth]].',
        blueprint: {
          role: 'Universal chemiosmotic energy intermediate linking membrane electron transport chains to rotary ATP synthesis',
          arrivesFrom: 'Proton pumping and water splitting by [[PSII|real-bio-psii]]/[[Cyt b6f|real-bio-b6f]] (thylakoid) and [[Complexes I, III, IV|real-bio-complex1]] (mitochondria)',
          inside: 'Combined chemical pH difference (delta-pH) and electrical membrane potential (delta-psi) stored across intact 5 nm proton-tight bilayers',
          deliversTo: 'Directional [[H+|atom-h]] influx through F0/CF0 c-rings turning [[ATP synthase|real-bio-atpsynth]] plus secondary inner-membrane Pi/pyruvate transport',
          loop: 'Uncoupling proteins or membrane holes short-circuit H+ directly across the bilayer, dissipating energy as heat instead of ATP'
        },
        scientific:
          'Transmembrane chemiosmotic proton-motive force (delta-p = delta-psi - 2.3(RT/F)delta-pH) carried by hydrated [[H+|atom-h]] ions across sealed energy-transducing membranes (~5 nm bilayers). In illuminated [[chloroplast|chloroplast]] thylakoids, delta-p (~160-180 mV) is dominated by delta-pH (~2.5 pH units: lumen pH 5.5 vs stroma pH 8.0); in respiring [[mitochondrion|mitochondrion]] cristae, delta-p (~180-200 mV) is dominated by electrical voltage delta-psi (~150 mV matrix-negative) plus delta-pH (~0.5-0.8 units), powering [[F1F0 and CF1CF0 ATP synthases|real-bio-atpsynth]].',
        from: [
          { nodeId: 'real-bio-b6f', label: 'Thylakoid Pumping', cargo: 'Lumen pH ~5.5 accumulation' },
          { nodeId: 'real-bio-complex1', label: 'Cristae ETC Pumping', cargo: '10 H+/NADH & 6 H+/FADH2' }
        ],
        to: [
          { nodeId: 'real-bio-atpsynth', label: 'Rotary ATP Synthases', cargo: 'Torque-driving H+ return flow' },
          { nodeId: 'atom-h', label: 'Hydrogen Proton H+', cargo: '0.1 nm chemiosmotic ion' }
        ]
      },
      es: {
        subtitle: 'Gradiente quimiosmótico de protones (H⁺ / Δp)',
        simple:
          'Esta acumulación brillante de iones hidrógeno ([[H⁺|atom-h]]) a través de membranas tilacoidales y mitocondriales selladas almacena la energía electroquímica exacta que hace girar la [[ATP sintasa|real-bio-atpsynth]]. Fotosíntesis y respiración comparten este mismo gradiente protónico.',
        story:
          'Peter Mitchell demostró que ni la luz solar ni la oxidación del azúcar fabrican ATP directamente en la cadena electrónica; ambos orgánulos convierten la energía redox en un mismo intermediario universal: un gradiente transmembrana de protones. En el [[cloroplasto|chloroplast]], [[PSII|real-bio-psii]] y [[citocromo b₆f|real-bio-b6f]] acidifican el lumen hasta pH 5,5 frente al estroma pH 8,0; en la [[mitocondria|mitochondrion]], los [[Complejos I|real-bio-complex1]], III y [[IV|real-bio-complex4]] bombean H⁺ al espacio intermembrana creando un empuje de ~180 mV que acciona la [[ATP sintasa|real-bio-atpsynth]].',
        blueprint: {
          role: 'Intermediario energético quimiosmótico universal que enlaza cadenas de transporte electrónico con la síntesis rotatoria de ATP',
          arrivesFrom: 'Bombeo protónico y fotólisis en [[PSII|real-bio-psii]]/[[Cyt b₆f|real-bio-b6f]] (tilacoides) y [[Complejos I, III, IV|real-bio-complex1]] (mitocondrias)',
          inside: 'Diferencia química de acidez (ΔpH) sumada al potencial eléctrico (Δψ) retenidos por bicapas intactas de 5 nm impermeables a H⁺',
          deliversTo: 'Retorno direccional de [[H⁺|atom-h]] por los anillos c de F₀/CF₀ girando la [[ATP sintasa|real-bio-atpsynth]] y simporte de Pᵢ/piruvato',
          loop: 'Las proteínas desacopladoras o fugas lipídicas cortocircuitan los H⁺, disipando el gradiente en calor sin producir ATP'
        },
        scientific:
          'Fuerza protón-motriz quimiosmótica transmembrana (Δp = Δψ − 2,3(RT/F)ΔpH) sostenida por iones [[H⁺|atom-h]] a través de bicapas transductoras de ~5 nm. En tilacoides iluminados del [[cloroplasto|chloroplast]], Δp (~160–180 mV) proviene sobre todo de ΔpH (~2,5 unidades: lumen pH 5,5 vs estroma pH 8,0); en crestas de la [[mitocondria|mitochondrion]], Δp (~180–200 mV) combina Δψ (~150 mV matriz negativa) con ΔpH (~0,5–0,8 unidades) para impulsar [[F₁F₀ y CF₁CF₀|real-bio-atpsynth]].',
        from: [
          { nodeId: 'real-bio-b6f', label: 'Bombeo tilacoidal', cargo: 'Acumulación luminal pH ~5,5' },
          { nodeId: 'real-bio-complex1', label: 'Bombeo ETC en crestas', cargo: '10 H⁺/NADH y 6 H⁺/FADH₂' }
        ],
        to: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP sintasas rotatorias', cargo: 'Retorno de H⁺ generador de par' },
          { nodeId: 'atom-h', label: 'Protón de hidrógeno H⁺', cargo: 'Ion quimiosmótico de 0,1 nm' }
        ]
      }
    },

    energy_carriers: {
      en: {
        subtitle: 'Mobile Energy Currencies (ATP, NADH, NADPH & FADH2)',
        simple:
          'Cells separate short-term work currency (ATP) from high-energy electron shuttles (NADH, FADH2, and NADPH). Rather than releasing food or light energy in one explosive burst, these rechargeable nucleotide carriers deliver exact energy packets to enzymes.',
        story:
          'Every stage of the coupled [[bioenergetics|real-bioenergetics]] chamber depends on soluble nucleotide shuttles cycling between charged and discharged forms. In the [[chloroplast|chloroplast]], [[Photosystem I|real-bio-psi]] charges NADP+ into NADPH while [[CF1CF0|real-bio-atpsynth]] charges ADP into ATP, delivering both directly to [[RuBisCO|real-bio-rubisco]] carbon fixation. In respiration, glycolysis and the [[Krebs cycle|real-bio-citrate]] load 10 NADH and 2 FADH2 per [[glucose|glucose]], ferrying two-electron packets to [[Complex I|real-bio-complex1]] and Complex II so [[F1F0 ATP synthase|real-bio-atpsynth]] mints universal ATP.',
        blueprint: {
          role: 'Rechargeable nucleotide energy currencies separating phosphate-transfer work (ATP) from hydride electron delivery (NADH/NADPH/FADH2)',
          arrivesFrom: 'Electron loading at [[PSI|real-bio-psi]], glycolysis, and [[Krebs cycle|real-bio-citrate]] paired with phosphorylation at [[ATP synthase|real-bio-atpsynth]]',
          inside: 'Adenine-ribose-triphosphate ATP/ADP+[[Pi|atom-p]] (~30.5 kJ/mol standard hydrolysis) alongside nicotinamide (NAD+/NADH, NADP+/NADPH) and flavin (FAD/FADH2) redox rings',
          deliversTo: 'Reducing power to Calvin fixation (NADPH) and cristae [[Complexes I/II|real-bio-complex1]] (NADH/FADH2) plus universal ATP to [[ion pumps|real-mem-nak]] and synthesis',
          loop: 'A single human cell recycles its entire ATP pool thousands of times per day without ever altering total nucleotide count'
        },
        scientific:
          'Diffusible nucleotide coenzymes mediating cellular energy coupling across 0.5-1.5 nm molecular scales: ATP/ADP + [[Pi|atom-p]] (adenosine 5-prime-triphosphate, delta-G0 prime approx -30.5 kJ/mol, physiological delta-G approx -50 kJ/mol; coordinated with [[Mg2+|atom-mg]]) and two-electron hydride/redox carriers NADH/NAD+ (E0 prime = -0.32 V; 10 NADH per [[glucose|glucose]] feeding [[Complex I|real-bio-complex1]]), FADH2/FAD (2 per glucose via Complex II), and anabolic NADPH/NADP+ (12 per glucose built by [[PSI|real-bio-psi]] for [[RuBisCO|real-bio-rubisco]]).',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Rotary ATP Synthases', cargo: 'ADP + Pi -> ATP recharging' },
          { nodeId: 'real-bio-citrate', label: 'Krebs & PSI Shuttles', cargo: 'NADH, FADH2 & NADPH charging' }
        ],
        to: [
          { nodeId: 'real-bio-rubisco', label: 'Calvin Carbon Fixation', cargo: '18 ATP + 12 NADPH consumed' },
          { nodeId: 'real-mem-nak', label: 'Active Transport Work', cargo: 'Cytosolic ATP hydrolysis' }
        ]
      },
      es: {
        subtitle: 'Portadores móviles de energía (ATP, NADH, NADPH y FADH₂)',
        simple:
          'Las células separan la moneda de trabajo inmediato (ATP) de las lanzaderas electrónicas de alta energía (NADH, FADH₂ y NADPH). En vez de liberar energía de golpe, estos nucleótidos recargables entregan paquetes exactos a cada enzima.',
        story:
          'Cada etapa de la cámara [[bioenergética|real-bioenergetics]] depende de nucleótidos solubles que alternan entre formas cargadas y descargadas. En el [[cloroplasto|chloroplast]], el [[Fotosistema I|real-bio-psi]] reduce NADP⁺ a NADPH mientras [[CF₁CF₀|real-bio-atpsynth]] fosforila ADP a ATP para abastecer a [[RuBisCO|real-bio-rubisco]]. En la respiración, la glucólisis y el [[ciclo de Krebs|real-bio-citrate]] cargan 10 NADH y 2 FADH₂ por [[glucosa|glucose]], llevando pares electrónicos al [[Complejo I|real-bio-complex1]] y Complejo II para que [[F₁F₀|real-bio-atpsynth]] acuñe ATP universal.',
        blueprint: {
          role: 'Monedas nucleotídicas recargables que separan el trabajo por transferencia de fosfato (ATP) del transporte redox de electrones (NADH/NADPH/FADH₂)',
          arrivesFrom: 'Carga electrónica en [[PSI|real-bio-psi]], glucólisis y [[ciclo de Krebs|real-bio-citrate]] junto a fosforilación en la [[ATP sintasa|real-bio-atpsynth]]',
          inside: 'Trifosfato ATP/ADP+[[Pᵢ|atom-p]] (~30,5 kJ/mol estándar) junto a anillos redox de nicotinamida (NADH/NADPH) y flavina (FADH₂)',
          deliversTo: 'Poder reductor a Calvin (NADPH) y [[Complejos I/II|real-bio-complex1]] (NADH/FADH₂) más ATP universal a [[bombas iónicas|real-mem-nak]] y síntesis',
          loop: 'Cada célula recicla toda su reserva de ATP miles de veces al día manteniendo constante la cantidad total de nucleótidos'
        },
        scientific:
          'Coenzimas nucleotídicas difusibles (0,5–1,5 nm) que acoplan el metabolismo energético: ATP/ADP + [[Pᵢ|atom-p]] (ΔG°′ ≈ −30,5 kJ/mol, ΔG fisiológico ≈ −50 kJ/mol, complejado con [[Mg²⁺|atom-mg]]) y portadores redox bielectrónicos NADH/NAD⁺ (E₀′ = −0,32 V; 10 NADH por [[glucosa|glucose]] hacia el [[Complejo I|real-bio-complex1]]), FADH₂/FAD (2 por glucosa en Complejo II) y NADPH/NADP⁺ anabólico (12 por glucosa desde [[PSI|real-bio-psi]] hacia [[RuBisCO|real-bio-rubisco]]).',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP sintasas rotatorias', cargo: 'Recarga ADP + Pᵢ → ATP' },
          { nodeId: 'real-bio-citrate', label: 'Lanzaderas Krebs y PSI', cargo: 'Carga de NADH, FADH₂ y NADPH' }
        ],
        to: [
          { nodeId: 'real-bio-rubisco', label: 'Fijación de Calvin', cargo: 'Consumo de 18 ATP + 12 NADPH' },
          { nodeId: 'real-mem-nak', label: 'Trabajo de transporte activo', cargo: 'Hidrólisis citosólica de ATP' }
        ]
      }
    },

    cofactor_atoms: {
      en: {
        subtitle: 'Atomic Cofactors: Chlorophyll Mg2+ & ATP Triphosphate (0.1-1 nm)',
        simple:
          'Zooming down to single atoms reveals how bioenergetics actually works: a central green [[magnesium|atom-mg]] ion cradled inside four [[nitrogen|atom-n]] atoms of [[chlorophyll|chlorophyll]] captures photons, while three negatively charged [[phosphate|atom-p]] groups on ATP store releasable chemical tension.',
        story:
          'At the sub-nanometer floor of the Whole-to-Tiniest ladder, planetary ecosystems boil down to orbital chemistry across [[carbon|atom-c]], [[hydrogen|atom-h]], [[nitrogen|atom-n]], [[oxygen|atom-o]], [[phosphorus|atom-p]], and [[magnesium|atom-mg]]. Inside [[chlorophyll|chlorophyll]] a, a conjugated chlorin ring around one Mg2+ ion absorbs red (680/700 nm) and blue photons to excite a delocalized pi-electron into [[PSII|real-bio-psii]] and [[PSI|real-bio-psi]]. Beside it, ATP links three crowded anionic phosphate groups via high-energy phosphoanhydride bonds; [[Mg2+|atom-mg]] shields their repulsion until an enzyme cleaves the terminal gamma-phosphate to perform cellular work.',
        blueprint: {
          role: 'Atomic-scale quantum light absorber (Chlorophyll a Mg2+) and phosphoanhydride bond-energy reservoir (ATP gamma-phosphate)',
          arrivesFrom: 'Single [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]], and [[Mg2+|atom-mg]] atoms assembled into photosynthetic and nucleotide cofactors',
          inside: 'Planar conjugated tetrapyrrole chlorin ring coordinating central Mg2+ (C55H72MgN4O5) beside adenine-ribose triphosphate (C10H16N5O13P3) and hydrated [[H+|atom-h]]',
          deliversTo: 'Primary photo-excited electrons inside [[PSII|real-bio-psii]]/[[PSI|real-bio-psi]] and ~50 kJ/mol free-energy release upon ATP hydrolysis across the cell',
          loop: 'Both photon absorption and ATP cleavage are fully reversible atomic-level cycles repeated trillions of times per second'
        },
        scientific:
          'Atomic-resolution (0.1-1.5 nm) comparison of primary bioenergetic cofactors: [[Chlorophyll|chlorophyll]] a (C55H72[[Mg|atom-mg]][[N4|atom-n]][[O5|atom-o]]; planar ~1.0 nm chlorin porphyrin macrocycle coordinating central [[Mg2+|atom-mg]] via four pyrrole nitrogens, tuning Qy absorption to 680 nm in [[PSII|real-bio-psii]] and 700 nm in [[PSI|real-bio-psi]]) alongside Mg-ATP (C10H16N5O13[[P3|atom-p]]; terminal beta-gamma phosphoanhydride bond hydrolysis assisted by divalent [[Mg2+|atom-mg]] releasing physiological delta-G approx -50 kJ/mol) and chemiosmotic [[H+|atom-h]].',
        from: [
          { nodeId: 'atom-mg', label: 'Magnesium Ion Mg2+', cargo: 'Chlorophyll core & ATP shield' },
          { nodeId: 'atom-p', label: 'Phosphorus Atom P', cargo: 'ATP alpha-beta-gamma chain' }
        ],
        to: [
          { nodeId: 'chlorophyll', label: 'Chlorophyll a Node', cargo: 'Conjugated light-capturing ring' },
          { nodeId: 'real-bioenergetics', label: 'Whole Bioenergetics Loop', cargo: '0.1 nm atoms -> 50 um loop' }
        ]
      },
      es: {
        subtitle: 'Cofactores atómicos: Mg²⁺ de clorofila y trifosfato ATP (0,1–1 nm)',
        simple:
          'Al descender hasta átomos individuales se revela el motor real de la bioenergética: un ion verde de [[magnesio|atom-mg]] sujeto por cuatro [[nitrógenos|atom-n]] en la [[clorofila|chlorophyll]] atrapa fotones, mientras tres [[fosfatos|atom-p]] negativos en el ATP almacenan tensión química liberable.',
        story:
          'En la base subnanométrica de la escala, el flujo energético planetario se reduce a química orbital entre [[carbono|atom-c]], [[hidrógeno|atom-h]], [[nitrógeno|atom-n]], [[oxígeno|atom-o]], [[fósforo|atom-p]] y [[magnesio|atom-mg]]. En la [[clorofila|chlorophyll]] a, un anillo conjugado en torno al Mg²⁺ absorbe fotones rojos (680/700 nm) y azules para excitar un electrón π hacia [[PSII|real-bio-psii]] y [[PSI|real-bio-psi]]. A su lado, el ATP enlaza tres fosfatos aniónicos muy próximos mediante enlaces fosfoanhídrido; el [[Mg²⁺|atom-mg]] apantalla su repulsión hasta que una enzima rompe el fosfato γ terminal para realizar trabajo celular.',
        blueprint: {
          role: 'Absorbedor cuántico atómico de luz (Mg²⁺ de clorofila a) y depósito de energía de enlace fosfoanhídrido (fosfato γ del ATP)',
          arrivesFrom: 'Átomos individuales de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], [[P|atom-p]] y [[Mg²⁺|atom-mg]] ensamblados en cofactores vitales',
          inside: 'Anillo plano tetrapirrólico de clorina coordinando Mg²⁺ central (C₅₅H₇₂MgN₄O₅) junto al trifosfato de adenosina (C₁₀H₁₆N₅O₁₃P₃) y [[H⁺|atom-h]]',
          deliversTo: 'Electrones fotoexcitados primarios en [[PSII|real-bio-psii]]/[[PSI|real-bio-psi]] y liberación de ~50 kJ/mol al hidrolizar ATP en toda la célula',
          loop: 'Tanto la excitación fotónica como la escisión del ATP operan en ciclos atómicos reversibles repetidos billones de veces por segundo'
        },
        scientific:
          'Comparación a resolución atómica (0,1–1,5 nm) de cofactores bioenergéticos primarios: [[clorofila|chlorophyll]] a (C₅₅H₇₂[[Mg|atom-mg]][[N₄|atom-n]][[O₅|atom-o]]; macrociclo plano de ~1,0 nm coordinando [[Mg²⁺|atom-mg]] mediante cuatro nitrógenos pirrólicos, sintonizando Q_y a 680 nm en [[PSII|real-bio-psii]] y 700 nm en [[PSI|real-bio-psi]]) junto a Mg–ATP (C₁₀H₁₆N₅O₁₃[[P₃|atom-p]]; hidrólisis del enlace fosfoanhídrido β–γ asistida por [[Mg²⁺|atom-mg]], ΔG ≈ −50 kJ/mol) y [[H⁺|atom-h]] quimiosmóticos.',
        from: [
          { nodeId: 'atom-mg', label: 'Ion magnesio Mg²⁺', cargo: 'Núcleo de clorofila y escudo ATP' },
          { nodeId: 'atom-p', label: 'Átomo de fósforo P', cargo: 'Cadena α–β–γ del ATP' }
        ],
        to: [
          { nodeId: 'chlorophyll', label: 'Nodo Clorofila a', cargo: 'Anillo conjugado captador de luz' },
          { nodeId: 'real-bioenergetics', label: 'Ciclo bioenergético total', cargo: 'De 0,1 nm a bucle de 50 µm' }
        ]
      }
    }
  },

  'membrane_transport_realistic.html': {
    animal_cell: {
      en: {
        subtitle: 'Wall-Less Animal Cell Tonicity Responder (~15-20 um)',
        simple:
          'Lacking a rigid outer wall, an [[animal cell|real-cell]] relies strictly on isotonic surroundings and active [[Na+/K+ pumping|real-mem-nak]] to hold its normal volume. In hypotonic water it swells until its [[plasma membrane|plasma-membrane]] ruptures, whereas in hypertonic brine it shrivels into spiked crenation.',
        story:
          'Bounded solely by a delicate five-nanometer [[plasma membrane|plasma-membrane]] supported by flexible cortical filaments, an [[animal cell|real-cell]] responds dramatically to extracellular osmolarity. In isotonic blood plasma (~300 mOsm), [[water|water]] enters and leaves equally through [[aquaporins|real-mem-aqp1]] to keep cell volume steady. Drop the cell into hypotonic fresh water and net osmotic influx stretches the bilayer past its narrow ~3% elastic limit into osmotic lysis; immerse it in hypertonic salt solution and rapid water exit collapses its silhouette into crenated spikes.',
        blueprint: {
          role: 'Wall-less eukaryotic osmotic test cell (~15-20 um) demonstrating lysis, isotonic homeostasis, and hypertonic crenation',
          arrivesFrom: 'Bidirectional osmotic [[H2O|water]] flux across [[aquaporins|real-mem-aqp1]] driven by extracellular vs cytosolic solute concentration',
          inside: 'Flexible 5 nm [[plasma membrane|plasma-membrane]] enclosing ~300 mOsm [[cytosol|cytosol]] stabilized continuously by [[Na+/K+-ATPase|real-mem-nak]] volume pumps',
          deliversTo: 'Three diagnostic osmotic states: hypotonic lysis rupture, isotonic stable homeostasis, and hypertonic spiked crenation',
          loop: 'Because animal cells cannot tolerate wall-less turgor, kidneys and Na+/K+ pumps defend isotonic blood osmolarity nonstop'
        },
        scientific:
          'Wall-less mammalian [[animal cell|real-cell]] (~8-20 um diameter; cytosolic osmolarity ~290-300 mOsm). Because the 5 nm [[plasma membrane|plasma-membrane]] ruptures under ~2-4% areal strain (~10 mN/m lysis tension), hypotonic water influx across [[AQP1|real-mem-aqp1]] drives rapid swelling and osmotic lysis; isotonic conditions maintain zero net flux (J_net = 0); hypertonic media drive rapid water efflux and crenated membrane collapse. Baseline Donnan osmotic pressure from impermeant cytosolic [[proteins|protein]] is continuously offset by electrogenic [[Na+/K+-ATPase|real-mem-nak]] export (unlike freshwater [[Paramecium|real-paramecium]] contractile vacuoles).',
        from: [
          { nodeId: 'real-cell', label: 'Animal Cell Architecture', cargo: 'Wall-less flexible cortex' },
          { nodeId: 'real-mem-nak', label: 'Na+/K+ Volume Defense', cargo: '3 Na+ out / 2 K+ in balance' }
        ],
        to: [
          { nodeId: 'real-membrane-transport', label: 'Tonicity Comparator', cargo: 'Lysis / Stable / Crenation' },
          { nodeId: 'plasma-membrane', label: '5 nm Plasma Membrane', cargo: 'Narrow 3% elastic burst limit' }
        ]
      },
      es: {
        subtitle: 'Célula animal sin pared ante cambios de tonicidad (~15–20 µm)',
        simple:
          'Al carecer de pared rígida, una [[célula animal|real-cell]] depende estrictamente de un medio isotónico y de la [[bomba Na⁺/K⁺|real-mem-nak]] para conservar su volumen. En agua hipotónica se hincha hasta romper su [[membrana plasmática|plasma-membrane]], y en medio hipertónico se arruga por crenación.',
        story:
          'Rodeada únicamente por una delicada [[membrana plasmática|plasma-membrane]] de cinco nanómetros, la [[célula animal|real-cell]] reacciona de inmediato a la osmolaridad externa. En plasma isotónico (~300 mOsm), el [[agua|water]] entra y sale por igual a través de [[acuaporinas|real-mem-aqp1]] conservando un perfil estable. En medio hipotónico, la entrada neta de agua estira la bicapa más allá de su estrecho límite elástico del 3 % provocando lisis osmótica; en medio hipertónico, la pérdida rápida de agua la contrae en puntas crenadas.',
        blueprint: {
          role: 'Célula eucariota sin pared (~15–20 µm) que muestra lisis hipotónica, homeostasis isotónica y crenación hipertónica',
          arrivesFrom: 'Flujo osmótico bidireccional de [[H₂O|water]] por [[acuaporinas|real-mem-aqp1]] según el contraste de solutos externo y citosólico',
          inside: '[[Membrana plasmática|plasma-membrane]] flexible de 5 nm envolviendo [[citosol|cytosol]] a ~300 mOsm estabilizado por bombas [[Na⁺/K⁺-ATPasa|real-mem-nak]]',
          deliversTo: 'Tres estados osmóticos diagnósticos: ruptura por lisis hipotónica, equilibrio isotónico estable y crenación espiculada hipertónica',
          loop: 'Al no tolerar turgencia sin pared, los riñones y las bombas Na⁺/K⁺ defienden de continuo una osmolaridad isotónica'
        },
        scientific:
          '[[Célula animal|real-cell]] de mamífero sin pared (~8–20 µm; osmolaridad citosólica ~290–300 mOsm). Como la [[membrana plasmática|plasma-membrane]] de 5 nm se rompe al superar ~2–4 % de expansión superficial, el flujo hipotónico vía [[AQP1|real-mem-aqp1]] causa lisis osmótica, un medio isotónico mantiene flujo neto nulo (J_net = 0) y un medio hipertónico desencadena crenación. El efecto Donnan de [[proteínas|protein]] citosólicas es compensado continuamente por la [[Na⁺/K⁺-ATPasa|real-mem-nak]] (en contraste con las vacuolas contráctiles de [[Paramecium|real-paramecium]]).',
        from: [
          { nodeId: 'real-cell', label: 'Arquitectura animal', cargo: 'Corteza flexible sin pared' },
          { nodeId: 'real-mem-nak', label: 'Defensa de volumen Na⁺/K⁺', cargo: 'Balance 3 Na⁺ fuera / 2 K⁺ dentro' }
        ],
        to: [
          { nodeId: 'real-membrane-transport', label: 'Comparador de tonicidad', cargo: 'Lisis / Equilibrio / Crenación' },
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática 5 nm', cargo: 'Límite elástico de ruptura 3 %' }
        ]
      }
    },

    plant_cell: {
      en: {
        subtitle: 'Cellulose-Walled Plant Cell Tonicity Responder (~50 um)',
        simple:
          'Protected by a rigid [[cellulose|cellulose]] [[cell wall|cell-wall]] and inflated by its large [[central vacuole|central-vacuole]], a [[plant cell|real-plant]] thrives in hypotonic rainwater where an [[animal cell|real-cell]] bursts. High internal turgor keeps stems crisp and upright, whereas hypertonic salt triggers plasmolysis.',
        story:
          'Unlike fragile animal tissues, a [[plant cell|real-plant]] harnesses osmotic water inflow as its hydraulic skeleton. Placed in hypotonic soil water, [[water|water]] floods across plasma-membrane and vacuolar [[aquaporins|real-mem-aqp1]] until the [[central vacuole|central-vacuole]] presses the [[plasma membrane|plasma-membrane]] firmly against the unyielding [[cellulose cell wall|cell-wall]], generating healthy turgor pressure without bursting. In isotonic surroundings turgor falls to zero leaving leaves flaccid, and in hypertonic salt water the vacuole collapses and the plasma membrane pulls cleanly away from the stationary wall in plasmolysis.',
        blueprint: {
          role: 'Walled plant osmotic test cell (~40-80 um) illustrating healthy hypotonic turgor, isotonic flaccidity, and hypertonic plasmolysis',
          arrivesFrom: 'Water-potential gradient driving [[H2O|water]] across plasma membrane and tonoplast [[aquaporins|real-mem-aqp1]] into the [[central vacuole|central-vacuole]]',
          inside: 'Rigid outer [[cellulose|cellulose]] [[cell wall|cell-wall]] bracing an expandable [[plasma membrane|plasma-membrane]], peripheral [[chloroplasts|chloroplast]], and large osmotic vacuole',
          deliversTo: 'Three botanical states: firm turgid hypotonic posture, soft flaccid isotonic state, and detached hypertonic plasmolysis',
          loop: 'Turgor pressure drives stomatal opening, leaf rigidity, and cell-wall expansion throughout plant growth'
        },
        scientific:
          'Vascular [[plant cell|real-plant]] (~40-80 um) governed by total water potential Psi_w = Psi_s (solute potential) + Psi_p (hydrostatic turgor pressure). In hypotonic surroundings (Psi_w,out > Psi_w,in), [[H2O|water]] enters through plasma-membrane PIP2 [[aquaporins|real-mem-aqp1]] into the [[central vacuole|central-vacuole]] until rigid [[cellulose|cellulose]] [[cell wall|cell-wall]] resistance raises Psi_p (+0.5 to +1.0 MPa), achieving full turgidity (Psi_w,in = Psi_w,out). Isotonic media yield Psi_p = 0 (flaccid); hypertonic media collapse vacuolar volume and detach the [[plasma membrane|plasma-membrane]] from the wall (plasmolysis).',
        from: [
          { nodeId: 'real-plant', label: 'Plant Leaf Cell', cargo: 'Wall + vacuole hydraulics' },
          { nodeId: 'water', label: 'Osmotic Water Potential', cargo: 'Psi_w = Psi_s + Psi_p' }
        ],
        to: [
          { nodeId: 'cell-wall', label: 'Cellulose Cell Wall', cargo: 'Turgor counter-pressure' },
          { nodeId: 'central-vacuole', label: 'Central Vacuole', cargo: 'Turgid / Flaccid / Plasmolysis' }
        ]
      },
      es: {
        subtitle: 'Célula vegetal con pared ante cambios de tonicidad (~50 µm)',
        simple:
          'Protegida por una rígida [[pared celular|cell-wall]] de [[celulosa|cellulose]] e inflada por su [[vacuola central|central-vacuole]], la [[célula vegetal|real-plant]] prospera en agua hipotónica donde una [[célula animal|real-cell]] estalla. La turgencia mantiene erguidos los tallos, mientras la sal hipertónica provoca plasmólisis.',
        story:
          'A diferencia de las células animales, la [[célula vegetal|real-plant]] aprovecha la entrada osmótica de agua como esqueleto hidráulico. En agua hipotónica del suelo, el [[agua|water]] entra por [[acuaporinas|real-mem-aqp1]] hasta que la [[vacuola central|central-vacuole]] presiona firmemente la [[membrana plasmática|plasma-membrane]] contra la [[pared celular|cell-wall]] rígida, alcanzando turgencia óptima sin estallar. En medio isotónico la presión cae a cero dejando la célula flácida, y en medio hipertónico la vacuola se vacía y la membrana se despega de la pared fija en plasmólisis.',
        blueprint: {
          role: 'Célula vegetal con pared (~40–80 µm) que demuestra turgencia hipotónica óptima, flacidez isotónica y plasmólisis hipertónica',
          arrivesFrom: 'Gradiente de potencial hídrico que mueve [[H₂O|water]] por [[acuaporinas|real-mem-aqp1]] hacia la [[vacuola central|central-vacuole]]',
          inside: '[[Pared celular|cell-wall]] rígida de [[celulosa|cellulose]] sosteniendo la [[membrana plasmática|plasma-membrane]], [[cloroplastos|chloroplast]] periféricos y gran vacuola osmótica',
          deliversTo: 'Tres estados botánicos: turgencia firme hipotónica, flacidez blanda isotónica y plasmólisis despegada hipertónica',
          loop: 'La presión de turgencia impulsa la apertura estomática, la rigidez foliar y la expansión celular durante el crecimiento vegetal'
        },
        scientific:
          '[[Célula vegetal|real-plant]] vascular (~40–80 µm) regida por el potencial hídrico Ψ_w = Ψ_s (potencial osmótico) + Ψ_p (presión de turgencia). En medio hipotónico, el [[H₂O|water]] ingresa por [[acuaporinas|real-mem-aqp1]] PIP2 hacia la [[vacuola central|central-vacuole]] hasta que la [[pared celular|cell-wall]] de [[celulosa|cellulose]] opone Ψ_p (+0,5 a +1,0 MPa) logrando plena turgencia. En medio isotónico Ψ_p = 0 (flácida) y en medio hipertónico la [[membrana plasmática|plasma-membrane]] se retrae lejos de la pared (plasmólisis).',
        from: [
          { nodeId: 'real-plant', label: 'Célula foliar vegetal', cargo: 'Hidráulica pared + vacuola' },
          { nodeId: 'water', label: 'Potencial hídrico', cargo: 'Ψ_w = Ψ_s + Ψ_p' }
        ],
        to: [
          { nodeId: 'cell-wall', label: 'Pared de celulosa', cargo: 'Contrapresión de turgencia' },
          { nodeId: 'central-vacuole', label: 'Vacuola central', cargo: 'Turgente / Flácida / Plasmólisis' }
        ]
      }
    },

    cell_wall: {
      en: {
        subtitle: 'Rigid Cellulose Plant Cell Wall (100-300 nm)',
        simple:
          'Wrapping every [[plant cell|real-plant]] outside its [[plasma membrane|plasma-membrane]], this woven [[cell wall|cell-wall]] of tough [[cellulose|cellulose]] fibers resists intense internal water pressure. It stops hypotonic lysis and remains stationary even when the membrane pulls away during plasmolysis.',
        story:
          'While [[animal cells|real-cell]] burst in rainwater, [[plant cells|real-plant]] lock themselves inside a tensile cage spun from crystalline [[cellulose|cellulose]] microfibrils crosslinked by hemicellulose and hydrated pectin. Fully permeable to [[water|water]], dissolved gases, and small ions, the [[cell wall|cell-wall]] does not block osmosis; instead it supplies an equal and opposite mechanical wall pressure (up to 10 atmospheres) whenever the [[central vacuole|central-vacuole]] swells in hypotonic media. During hypertonic plasmolysis, this rigid frame stays fixed in place while the shrinking protoplast retreats inside.',
        blueprint: {
          role: 'High-tensile extracellular structural shell (100-300 nm) converting hypotonic water influx into safe mechanical turgor pressure',
          arrivesFrom: 'Beta-1,4-linked [[glucose|glucose]] polymers extruded by plasma-membrane cellulose synthase rosettes into layered [[cellulose|cellulose]] microfibrils',
          inside: 'Crosslinked mesh of 3-5 nm crystalline [[cellulose|cellulose]] cables embedded in hemicellulose and pectin matrix outside the [[plasma membrane|plasma-membrane]]',
          deliversTo: 'Mechanical counter-pressure (+0.5-1.0 MPa) preventing osmotic lysis and holding terrestrial [[plant|real-plant]] stems upright',
          loop: 'Permeable to water and small solutes yet mechanically unyielding, cleanly separating osmotic transport from burst protection'
        },
        scientific:
          'Primary terrestrial [[plant|real-plant]] [[cell wall|cell-wall]] (~100-300 nm thick; tensile strength comparable to steel per weight) woven from 18-chain crystalline beta-1,4-D-[[glucose|glucose]] [[cellulose|cellulose]] microfibrils crosslinked by xyloglucan hemicelluloses and Ca2+-bridged homogalacturonan pectins. Freely permeable to [[water|water]] and solutes below ~4 nm hydrodynamic radius; mechanically withstands ~0.5-1.0 MPa internal hydrostatic turgor pressure (Psi_p) from the expanding [[central vacuole|central-vacuole]], preventing hypotonic membrane lysis.',
        from: [
          { nodeId: 'cellulose', label: 'Cellulose Microfibrils', cargo: 'Beta-1,4-glucan tensile cables' },
          { nodeId: 'glucose', label: 'Photosynthetic Glucose', cargo: 'Wall polymer building blocks' }
        ],
        to: [
          { nodeId: 'cell-wall', label: 'Cell Wall Explorer', cargo: '100-300 nm woven wall mesh' },
          { nodeId: 'real-plant', label: 'Turgid Plant Support', cargo: 'Anti-lysis hydrostatic cage' }
        ]
      },
      es: {
        subtitle: 'Pared celular vegetal rígida de celulosa (100–300 nm)',
        simple:
          'Envolviendo cada [[célula vegetal|real-plant]] por fuera de su [[membrana plasmática|plasma-membrane]], esta [[pared celular|cell-wall]] tejida de fibras de [[celulosa|cellulose]] soporta una intensa presión hídrica interna. Impide la lisis hipotónica y permanece fija incluso durante la plasmólisis.',
        story:
          'Mientras las [[células animales|real-cell]] estallan en agua dulce, las [[células vegetales|real-plant]] se resguardan tras una armadura tensil de microfibrillas cristalinas de [[celulosa|cellulose]] entrelazadas con hemicelulosa y pectina. Totalmente permeable al [[agua|water]] y a solutos pequeños, la [[pared celular|cell-wall]] no bloquea la ósmosis, sino que opone una contrapresión mecánica de hasta diez atmósferas cuando la [[vacuola central|central-vacuole]] se infla en medio hipotónico. En la plasmólisis hipertónica, este marco permanece inmóvil mientras el protoplasto se retrae hacia adentro.',
        blueprint: {
          role: 'Armadura extracelular de alta resistencia (100–300 nm) que convierte la entrada hipotónica de agua en presión de turgencia segura',
          arrivesFrom: 'Polímeros de [[glucosa|glucose]] β-1,4 extruidos por complejos celulosa sintasa en microfibrillas laminares de [[celulosa|cellulose]]',
          inside: 'Malla entrecruzada de cables cristalinos de [[celulosa|cellulose]] (3–5 nm) en matriz de hemicelulosa y pectina fuera de la [[membrana|plasma-membrane]]',
          deliversTo: 'Contrapresión mecánica (+0,5–1,0 MPa) que evita la lisis osmótica y sostiene erguidos los tejidos [[vegetales|real-plant]]',
          loop: 'Permeable al agua y solutos pequeños pero rígida ante la expansión, separa el transporte osmótico de la protección frente a ruptura'
        },
        scientific:
          '[[Pared celular|cell-wall]] primaria de [[plantas|real-plant]] (~100–300 nm de grosor) tejida por microfibrillas cristalinas de [[celulosa|cellulose]] (18 cadenas β-1,4-D-[[glucosa|glucose]]) reticuladas con xiloglucanos y pectinas puenteadas por [[Ca²⁺|atom-ca]]. Permeable a [[agua|water]] y moléculas menores de ~4 nm, resiste presiones hidrostáticas internas Ψ_p de ~0,5–1,0 MPa generadas por la [[vacuola central|central-vacuole]], impidiendo la lisis de la [[membrana plasmática|plasma-membrane]].',
        from: [
          { nodeId: 'cellulose', label: 'Microfibrillas de celulosa', cargo: 'Cables tensiles β-1,4-glucano' },
          { nodeId: 'glucose', label: 'Glucosa fotosintética', cargo: 'Monómeros de pared celular' }
        ],
        to: [
          { nodeId: 'cell-wall', label: 'Explorador Pared celular', cargo: 'Malla estructural 100–300 nm' },
          { nodeId: 'real-plant', label: 'Soporte vegetal turgente', cargo: 'Jaula hidrostática antilisis' }
        ]
      }
    },

    vacuole: {
      en: {
        subtitle: 'Plant Central Vacuole Osmotic Reservoir (60-80% Volume)',
        simple:
          'Occupying most of a mature [[plant cell|real-plant]], this water-filled [[central vacuole|central-vacuole]] generates the internal hydrostatic pressure behind plant rigidity. It swells tightly against the [[cell wall|cell-wall]] in hypotonic water and shrinks sharply during hypertonic plasmolysis.',
        story:
          'Wrapped in a selective lipid membrane called the tonoplast studded with proton pumps and TIP [[aquaporins|real-mem-aqp1]], the [[central vacuole|central-vacuole]] stores concentrated potassium ions, organic acids, and pigments to maintain a strongly negative osmotic potential. In hypotonic conditions, [[water|water]] streams swiftly into this giant lumen, inflating the vacuole until it presses the thin peripheral [[cytosol|cytosol]] and [[plasma membrane|plasma-membrane]] flush against the [[cellulose|cellulose]] wall. Under hypertonic drought or salt stress, rapid vacuolar water exit causes dramatic collapse and wilting.',
        blueprint: {
          role: 'Large tonoplast-enclosed plant osmotic reservoir (60-80% cell volume) regulating turgor pressure and solute storage',
          arrivesFrom: 'Rapid [[H2O|water]] transport through tonoplast aquaporins plus proton-coupled ion accumulation driven by V-type H+-ATPases',
          inside: 'Aqueous acidic lumen (pH ~5.5) storing K+, malate, sugars, and defensive compounds inside a single selective lipid membrane',
          deliversTo: 'Hydrostatic outward turgor push pressing the [[plasma membrane|plasma-membrane]] against the [[cell wall|cell-wall]] in hypotonic media',
          loop: 'Vacuolar collapse under hypertonic solute stress pulls the plasma membrane off the cell wall, visibly triggering plasmolysis'
        },
        scientific:
          'Mature [[plant cell|real-plant]] [[central vacuole|central-vacuole]] (accounting for 60-90% of total cell volume) bounded by the single-bilayer tonoplast carrying V-type H+-ATPases, H+-pyrophosphatases, ion exchangers, and high-permeability TIP [[aquaporins|real-mem-aqp1]]. Active solute sequestration lowers internal osmotic potential (Psi_s approx -0.6 to -1.2 MPa), pulling [[H2O|water]] inward in hypotonic media to generate rigid turgor against the [[cellulose|cellulose]] [[cell wall|cell-wall]], and deflating rapidly during hypertonic plasmolysis.',
        from: [
          { nodeId: 'water', label: 'Tonoplast Water Flow', cargo: 'High-speed osmotic swelling' },
          { nodeId: 'real-mem-aqp1', label: 'Vacuolar Aquaporins', cargo: 'Passive H2O volume gating' }
        ],
        to: [
          { nodeId: 'central-vacuole', label: 'Central Vacuole Node', cargo: 'Hydraulic turgor reservoir' },
          { nodeId: 'cell-wall', label: 'Wall Turgor Force', cargo: 'Firm hypotonic leaf support' }
        ]
      },
      es: {
        subtitle: 'Vacuola central vegetal osmótica (60–80 % del volumen)',
        simple:
          'Ocupando la mayor parte de una [[célula vegetal|real-plant]] madura, esta [[vacuola central|central-vacuole]] llena de agua controla la rigidez de la planta. Se hincha firmemente contra la [[pared celular|cell-wall]] en agua hipotónica y se colapsa durante la plasmólisis hipertónica.',
        story:
          'Envuelta por el tonoplasto, una membrana selectiva repleta de bombas de protones y [[acuaporinas|real-mem-aqp1]] TIP, la [[vacuola central|central-vacuole]] almacena potasio, ácidos orgánicos y solutos para mantener un potencial osmótico muy negativo. En condiciones hipotónicas, el [[agua|water]] fluye con rapidez hacia su interior hasta que el volumen vacuolar empuja el [[citosol|cytosol]] y la [[membrana plasmática|plasma-membrane]] contra la pared de [[celulosa|cellulose]]. Ante estrés salino hipertónico, la pérdida de agua vacuolar desinfla la célula y provoca marchitamiento.',
        blueprint: {
          role: 'Gran depósito osmótico vegetal delimitado por el tonoplasto (60–80 % del volumen) que gobierna la turgencia y reserva solutos',
          arrivesFrom: 'Flujo rápido de [[H₂O|water]] por acuaporinas del tonoplasto y acumulación iónica impulsada por H⁺-ATPasas vacuolares',
          inside: 'Lumen acuoso ácido (pH ~5,5) cargado de K⁺, malato, azúcares y metabolitos dentro de una membrana lipídica selectiva',
          deliversTo: 'Empuje hidrostático externo que aprieta la [[membrana plasmática|plasma-membrane]] contra la [[pared celular|cell-wall]] en medio hipotónico',
          loop: 'El vaciado vacuolar en medio hipertónico arrastra la membrana lejos de la pared, desencadenando la plasmólisis visible'
        },
        scientific:
          '[[Vacuola central|central-vacuole]] de [[célula vegetal|real-plant]] madura (60–90 % del volumen celular) rodeada por el tonoplasto dotado de H⁺-ATPasas tipo V, pirofosfatasas protónicas y [[acuaporinas|real-mem-aqp1]] TIP. El secuestro activo de solutos reduce su potencial osmótico (Ψ_s ≈ −0,6 a −1,2 MPa), atrayendo [[H₂O|water]] en medio hipotónico para generar turgencia frente a la [[pared celular|cell-wall]] de [[celulosa|cellulose]] y retrayéndose en plasmólisis hipertónica.',
        from: [
          { nodeId: 'water', label: 'Flujo hídrico tonoplástico', cargo: 'Hinchamiento osmótico veloz' },
          { nodeId: 'real-mem-aqp1', label: 'Acuaporinas vacuolares', cargo: 'Compuerta pasiva de H₂O' }
        ],
        to: [
          { nodeId: 'central-vacuole', label: 'Nodo Vacuola central', cargo: 'Depósito hidráulico de turgencia' },
          { nodeId: 'cell-wall', label: 'Fuerza contra la pared', cargo: 'Rigidez foliar hipotónica' }
        ]
      }
    },

    bilayer: {
      en: {
        subtitle: '5 nm Fluid Mosaic Phospholipid Bilayer (POPC + Cholesterol)',
        simple:
          'Every [[plasma membrane|plasma-membrane]] is built from a self-sealing double sheet of [[phospholipids|phospholipid]] just five nanometers thick. Its water-loving phosphate heads face outside and inside, while its oily interior repels ions and sugars unless a dedicated [[protein|protein]] lets them cross.',
        story:
          'Zooming past the whole cell down to five nanometers exposes the amphipathic architecture that defines life: two opposing leaflets of POPC [[phospholipids|phospholipid]] interspersed with rigid cholesterol wedges. Hydrophilic choline-phosphate headgroups face extracellular fluid and [[cytosol|cytosol]], while their paired hydrophobic fatty-acyl tails pack into an oily three-nanometer core that automatically self-heals around embedded proteins. Small nonpolar gases slip right across, but charged Na+ and K+ ions and polar [[glucose|glucose]] remain blocked until [[aquaporins|real-mem-aqp1]], [[GLUT1|real-mem-glut1]], and [[Na+/K+ pumps|real-mem-nak]] open selective pathways.',
        blueprint: {
          role: 'Self-assembling 5 nm semipermeable lipid barrier defining cellular compartments and hosting all transmembrane transporters',
          arrivesFrom: 'Amphipathic [[phospholipids|phospholipid]] (POPC) and cholesterol molecules spontaneously aligning tails inward in liquid [[water|water]]',
          inside: 'Two polar headgroup faces flanking a ~3 nm hydrophobic fatty-acyl core exhibiting lateral fluidity while blocking charged ions',
          deliversTo: 'Strict selective permeability enabling resting [[membrane voltage|real-mem-nak]], osmotic gradients, and lateral [[protein|protein]] mobility',
          loop: 'Cholesterol buffers fluidity across temperature swings so transporters rock freely without leaking protons or sodium ions'
        },
        scientific:
          'Fluid-mosaic eukaryotic [[plasma membrane|plasma-membrane]] bilayer (~4.5-5.5 nm total thickness; ~3.0 nm low-dielectric hydrophobic fatty-acyl core of palmitoyl-oleoyl-phosphatidylcholine POPC plus ~20-40 mol% cholesterol regulating acyl packing and permeability). Exhibits high permeability to nonpolar gases (O2, CO2; P ~ 10 cm/s), modest intrinsic [[H2O|water]] permeability (~10^-3 cm/s), and vanishing permeability (< 10^-12 cm/s) to hydrated Na+/K+ ions and polar [[glucose|glucose]], requiring [[AQP1|real-mem-aqp1]], [[GLUT1|real-mem-glut1]], and [[Na+/K+-ATPase|real-mem-nak]].',
        from: [
          { nodeId: 'phospholipid', label: 'POPC Phospholipids', cargo: 'Amphipathic two-tail lipids' },
          { nodeId: 'plasma-membrane', label: 'Plasma Membrane Node', cargo: 'Fluid mosaic boundary' }
        ],
        to: [
          { nodeId: 'real-mem-aqp1', label: 'Embedded Channels', cargo: 'AQP1 water selectivity' },
          { nodeId: 'real-mem-nak', label: 'Active Ion Barrier', cargo: 'Blocks passive Na+/K+ leak' }
        ]
      },
      es: {
        subtitle: 'Bicapa de fosfolípidos en mosaico fluido de 5 nm (POPC + colesterol)',
        simple:
          'Toda [[membrana plasmática|plasma-membrane]] es una doble lámina autosellante de [[fosfolípidos|phospholipid]] de solo cinco nanómetros de espesor. Sus cabezas polares miran hacia fuera y hacia dentro, mientras su núcleo aceitoso bloquea iones y azúcares salvo que una [[proteína|protein]] dedicada les abra paso.',
        story:
          'Al bajar hasta cinco nanómetros emerge la arquitectura anfipática que hace posible la vida: dos monocapas opuestas de [[fosfolípidos|phospholipid]] POPC salpicadas de colesterol. Las cabezas hidrofílicas de fosfocolina tocan el medio externo y el [[citosol|cytosol]], mientras sus colas hidrofóbicas de ácidos grasos sellan un núcleo apolar de tres nanómetros que se repara espontáneamente alrededor de proteínas integrales. Los gases apolares lo atraviesan directo, pero Na⁺, K⁺ y [[glucosa|glucose]] quedan retenidos hasta encontrar [[acuaporinas|real-mem-aqp1]], [[GLUT1|real-mem-glut1]] o [[bombas Na⁺/K⁺|real-mem-nak]].',
        blueprint: {
          role: 'Barrera lipídica semipermeable autoensamblada de 5 nm que define compartimentos celulares y aloja los transportadores transmembrana',
          arrivesFrom: '[[Fosfolípidos|phospholipid]] anfipáticos (POPC) y moléculas de colesterol alineando espontáneamente sus colas en [[agua|water]]',
          inside: 'Dos caras de cabezas polares rodeando un núcleo graso hidrofóbico de ~3 nm con fluidez lateral y bloqueo estricto de iones',
          deliversTo: 'Permeabilidad selectiva que sustenta el [[voltaje de membrana|real-mem-nak]], los gradientes osmóticos y la movilidad de [[proteínas|protein]]',
          loop: 'El colesterol amortigua la fluidez ante cambios térmicos para que los transportadores basculen sin fugas de iones'
        },
        scientific:
          'Bicapa eucariota en mosaico fluido de la [[membrana plasmática|plasma-membrane]] (~4,5–5,5 nm de espesor; núcleo hidrofóbico de ~3,0 nm de POPC más ~20–40 % molar de colesterol). Presenta altísima permeabilidad a gases apolares (O₂, CO₂; P ~ 10 cm/s), permeabilidad intrínseca moderada al [[H₂O|water]] (~10⁻³ cm/s) y casi nula (< 10⁻¹² cm/s) a iones hidratados Na⁺/K⁺ y [[glucosa|glucose]], haciendo imprescindibles [[AQP1|real-mem-aqp1]], [[GLUT1|real-mem-glut1]] y [[Na⁺/K⁺-ATPasa|real-mem-nak]].',
        from: [
          { nodeId: 'phospholipid', label: 'Fosfolípidos POPC', cargo: 'Lípidos anfipáticos de dos colas' },
          { nodeId: 'plasma-membrane', label: 'Nodo Membrana plasmática', cargo: 'Frontera en mosaico fluido' }
        ],
        to: [
          { nodeId: 'real-mem-aqp1', label: 'Canales embebidos', cargo: 'Selectividad hídrica AQP1' },
          { nodeId: 'real-mem-nak', label: 'Barrera iónica activa', cargo: 'Impide fugas pasivas Na⁺/K⁺' }
        ]
      }
    },

    simple_diff: {
      en: {
        subtitle: 'Simple Passive Diffusion of Nonpolar Gases (O2 & CO2)',
        simple:
          'Small, uncharged gas molecules like oxygen (O2) and carbon dioxide (CO2) need no channels and spend zero ATP to cross the [[plasma membrane|plasma-membrane]]. Driven purely by thermal motion, they weave directly through the oily [[phospholipid|phospholipid]] tails from high to low concentration.',
        story:
          'Respiration and photosynthesis could never keep pace if every O2 or CO2 molecule had to wait in line at a protein gate. Because O2 and CO2 are tiny, electrically neutral, and nonpolar, they dissolve briefly right into the three-nanometer hydrophobic acyl core of the [[phospholipid|phospholipid]] bilayer and emerge on the dilute side in microseconds. Driven strictly by Fick diffusion down their partial-pressure gradients at zero ATP cost, O2 streams inward to feed [[mitochondrial Complex IV|real-bio-complex4]] while waste CO2 exits freely toward [[chloroplast RuBisCO|real-bio-rubisco]].',
        blueprint: {
          role: 'Zero-ATP passive permeation pathway moving small nonpolar respiratory gases directly across the hydrophobic bilayer core',
          arrivesFrom: 'Higher partial-pressure concentration side of O2 (extracellular / [[PSII|real-bio-psii]]) or CO2 (cytosolic [[Krebs cycle|real-bio-citrate]])',
          inside: 'Thermal partition and random walk straight between oscillating hydrocarbon fatty-acyl tails of the 5 nm [[POPC bilayer|phospholipid]]',
          deliversTo: 'Continuous O2 delivery to [[Complex IV|real-bio-complex4]] and unobstructed CO2 exchange feeding [[RuBisCO|real-bio-rubisco]] carbon fixation',
          loop: 'Flux speed scales linearly with concentration gradient and stops at equilibrium without ever saturating a protein carrier'
        },
        scientific:
          'Non-mediated passive simple diffusion across the 3 nm hydrophobic acyl interior of the [[phospholipid|phospholipid]] bilayer obeying Fick first law (J = -P * delta-C; 0 ATP, non-saturable). Small linear nonpolar gases O2 (~0.35 nm; [[O|atom-o]]) and CO2 (~0.33 nm; [[C|atom-c]]) exhibit high oil-water partition coefficients and permeability coefficients P ~ 1-10 cm/s, traversing the [[plasma membrane|plasma-membrane]] orders of magnitude faster than polar [[glucose|glucose]] or hydrated Na+/K+ ions.',
        from: [
          { nodeId: 'atom-o', label: 'Nonpolar O2 & CO2', cargo: 'Uncharged 0.33 nm gases' },
          { nodeId: 'phospholipid', label: 'Hydrophobic Core', cargo: 'Direct lipid-tail partition' }
        ],
        to: [
          { nodeId: 'real-bio-complex4', label: 'Aerobic Respiration', cargo: 'Inward O2 terminal supply' },
          { nodeId: 'real-bio-rubisco', label: 'Photosynthetic Fixation', cargo: 'CO2 gas supply to stroma' }
        ]
      },
      es: {
        subtitle: 'Difusión simple pasiva de gases apolares (O₂ y CO₂)',
        simple:
          'Moléculas gaseosas diminutas y sin carga como el oxígeno (O₂) y el dióxido de carbono (CO₂) no necesitan canales ni gastan ATP para cruzar la [[membrana plasmática|plasma-membrane]]. Impulsadas por agitación térmica, atraviesan directo las colas de [[fosfolípidos|phospholipid]] a favor de gradiente.',
        story:
          'La respiración y la fotosíntesis jamás alcanzarían su ritmo si cada molécula de O₂ o CO₂ debiera esperar turno en una proteína. Al ser minúsculas, neutras y apolares, O₂ y CO₂ se disuelven fugazmente en el núcleo hidrofóbico de tres nanómetros de los [[fosfolípidos|phospholipid]] y emergen del lado menos concentrado en microsegundos. Regidas solo por la ley de Fick con gasto nulo de ATP, el O₂ entra hacia el [[Complejo IV mitocondrial|real-bio-complex4]] mientras el CO₂ difunde sin trabas hacia [[RuBisCO|real-bio-rubisco]].',
        blueprint: {
          role: 'Vía pasiva de permeación sin gasto de ATP que mueve gases respiratorios apolares pequeños directo por el núcleo lipídico',
          arrivesFrom: 'Lado de mayor presión parcial de O₂ (extracelular / [[PSII|real-bio-psii]]) o CO₂ ([[ciclo de Krebs|real-bio-citrate]] citosólico)',
          inside: 'Partición térmica directa entre las cadenas hidrocarbonadas oscilantes de la bicapa [[POPC|phospholipid]] de 5 nm',
          deliversTo: 'Suministro continuo de O₂ al [[Complejo IV|real-bio-complex4]] e intercambio libre de CO₂ hacia la fijación de [[RuBisCO|real-bio-rubisco]]',
          loop: 'El caudal crece linealmente con el gradiente de concentración y cesa al equilibrarse sin saturar jamás un transportador'
        },
        scientific:
          'Difusión simple pasiva no mediada a través del núcleo acílico de 3 nm de la bicapa de [[fosfolípidos|phospholipid]] conforme a la primera ley de Fick (J = −P · ΔC; 0 ATP, no saturable). Los gases apolares O₂ (~0,35 nm; [[O|atom-o]]) y CO₂ (~0,33 nm; [[C|atom-c]]) presentan altos coeficientes de partición lípido/agua y permeabilidad P ~ 1–10 cm/s en la [[membrana plasmática|plasma-membrane]], muy superior a [[glucosa|glucose]] o iones hidratados.',
        from: [
          { nodeId: 'atom-o', label: 'Gases apolares O₂ y CO₂', cargo: 'Moléculas neutras de 0,33 nm' },
          { nodeId: 'phospholipid', label: 'Núcleo hidrofóbico', cargo: 'Partición lipídica directa' }
        ],
        to: [
          { nodeId: 'real-bio-complex4', label: 'Respiración aerobia', cargo: 'Entrada de O₂ terminal' },
          { nodeId: 'real-bio-rubisco', label: 'Fijación fotosintética', cargo: 'Suministro gaseoso de CO₂' }
        ]
      }
    },

    aquaporin: {
      en: {
        subtitle: 'Aquaporin AQP1 / PIP2 Water Channel (PDB 1J4N / 1Z98)',
        simple:
          'This homotetrameric [[aquaporin|real-mem-aqp1]] channel drills four narrow hourglass pores through the [[plasma membrane|plasma-membrane]], letting single-file [[water|water]] zip across at a billion molecules per second while blocking ions and leaking protons.',
        story:
          'Each [[aquaporin|real-mem-aqp1]] assembly packs four independent 28-kilodalton barrels into a square tetramer spanning the [[phospholipid|phospholipid]] bilayer. Inside each monomer, an extracellular ar/R constriction narrows to 0.28 nanometers, just wide enough for one [[water|water]] molecule stripped of its neighbors, yet far too tight for hydrated Na+ or K+. Right at the pore waist, paired Asn-Pro-Ala (NPA) dipoles grab the oxygen of each passing water and rotate it 180 degrees, cleanly snapping the hydrogen-bond chain so protons ([[H+|atom-h]]) cannot hop across the membrane.',
        blueprint: {
          role: 'High-speed passive water-selective hourglass channel excluding all ions and preventing transmembrane proton leakage',
          arrivesFrom: 'Four 6-TM + 2-half-helix [[channel protein|channel-protein]] monomers embedded in [[animal|real-cell]] (AQP1) and [[plant|real-plant]] (PIP2) membranes',
          inside: 'Homotetrameric AQP1 (PDB 1J4N) / PIP2 (PDB 1Z98) with 0.28 nm ar/R steric filter and central NPA dipole-reorienting waist',
          deliversTo: 'Passive single-file [[H2O|water]] throughput (~10^9 molecules/s per pore, 0 ATP) governing whole-cell osmotic volume and plant turgor',
          loop: 'Reversing tonicity instantly flips flow direction through the same open channel while the NPA gate preserves -70 mV voltage'
        },
        scientific:
          'Homotetrameric integral membrane water [[channel protein|channel-protein]] [[AQP1|real-mem-aqp1]] (bovine crystal structure PDB 1J4N; plant homolog PIP2;1 PDB 1Z98). Each ~28 kDa monomer contains six transmembrane helices plus two opposing half-helices (B and E) converging at central conserved Asn-Pro-Ala (NPA) motifs. The ~0.28 nm extracellular aromatic/arginine (ar/R) selectivity filter rejects hydrated ions and solutes, while NPA electrostatic dipoles rotate each single-file [[H2O|water]] molecule 180 degrees to break Grotthuss [[H+|atom-h]] proton conduction (~10^9 H2O/s, 0 ATP).',
        from: [
          { nodeId: 'channel-protein', label: 'Channel Protein Family', cargo: 'Passive selective pore class' },
          { nodeId: 'water', label: 'Bulk Water Pools', cargo: 'Single-file H2O entry' }
        ],
        to: [
          { nodeId: 'real-mem-aqp1', label: 'Aquaporin Explorer Node', cargo: 'NPA & ar/R proton exclusion' },
          { nodeId: 'real-membrane-transport', label: 'Whole-Cell Osmosis', cargo: 'Rapid volume & turgor shifts' }
        ]
      },
      es: {
        subtitle: 'Canal de agua Acuaporina AQP1 / PIP2 (PDB 1J4N / 1Z98)',
        simple:
          'Este canal homotetramérico de [[acuaporina|real-mem-aqp1]] abre cuatro estrechos poros en reloj de arena en la [[membrana plasmática|plasma-membrane]], dejando cruzar [[agua|water]] en fila india a mil millones de moléculas por segundo mientras bloquea iones y protones.',
        story:
          'Cada conjunto de [[acuaporina|real-mem-aqp1]] agrupa cuatro barriles independientes de 28 kilodaltons en un tetrámero cuadrado que cruza la bicapa de [[fosfolípidos|phospholipid]]. En cada monómero, el filtro extracelular ar/R se estrecha hasta 0,28 nanómetros, admitiendo una sola molécula de [[agua|water]] mientras frena el paso a Na⁺ o K⁺ hidratados. Justo en la cintura, los motivos Asn–Pro–Ala (NPA) sujetan el oxígeno y giran 180 grados cada molécula de agua, rompiendo la fila de puentes de hidrógeno para impedir fugas de protones ([[H⁺|atom-h]]).',
        blueprint: {
          role: 'Canal pasivo de altísima velocidad selectivo para agua que excluye iones y evita cortocircuitos de protones en la membrana',
          arrivesFrom: 'Cuatro monómeros de [[proteína canal|channel-protein]] (6 TM + 2 semihélices) insertos en membranas [[animales|real-cell]] (AQP1) y [[vegetales|real-plant]] (PIP2)',
          inside: 'Homotetrámero AQP1 (PDB 1J4N) / PIP2 (PDB 1Z98) con filtro estérico ar/R de 0,28 nm y cintura central NPA orientadora de dipolos',
          deliversTo: 'Caudal pasivo de [[H₂O|water]] en fila india (~10⁹ moléculas/s por poro, 0 ATP) que controla el volumen osmótico y la turgencia vegetal',
          loop: 'Cambiar la tonicidad invierte al instante el sentido del flujo por el mismo poro mientras el filtro NPA protege el voltaje de −70 mV'
        },
        scientific:
          '[[Proteína canal|channel-protein]] homotetramérica de agua [[AQP1|real-mem-aqp1]] (cristalografía bovina PDB 1J4N; homólogo vegetal PIP2;1 PDB 1Z98). Cada monómero (~28 kDa) combina seis hélices transmembrana y dos semihélices (B y E) convergentes en motivos conservados Asn–Pro–Ala (NPA). El filtro aromático/arginina (ar/R, ~0,28 nm) excluye iones hidratados y los dipolos NPA rotan 180° cada [[H₂O|water]] en fila india bloqueando el salto protónico de Grotthuss ([[H⁺|atom-h]], ~10⁹ H₂O/s, 0 ATP).',
        from: [
          { nodeId: 'channel-protein', label: 'Familia de canales', cargo: 'Poro pasivo selectivo' },
          { nodeId: 'water', label: 'Reservas de agua', cargo: 'Entrada de H₂O en fila india' }
        ],
        to: [
          { nodeId: 'real-mem-aqp1', label: 'Nodo Acuaporina', cargo: 'Filtros NPA y ar/R antiprotón' },
          { nodeId: 'real-membrane-transport', label: 'Ósmosis celular', cargo: 'Ajuste rápido de volumen y turgencia' }
        ]
      }
    },

    water_flow: {
      en: {
        subtitle: 'Bidirectional Osmotic Water Flux (Single-File H2O)',
        simple:
          'Osmosis is the passive net flow of [[water|water]] across a selective membrane toward the side with higher dissolved solute concentration. Switching tonicity from hypotonic to hypertonic immediately reverses this single-file H2O stream through [[aquaporins|real-mem-aqp1]].',
        story:
          'Dissolved ions and sugars tie up surrounding [[water|water]] molecules into hydration shells, lowering the concentration of free water on the saltier side of the [[plasma membrane|plasma-membrane]]. Because [[aquaporins|real-mem-aqp1]] pass only water while holding solutes back, thermal collisions produce a decisive net water flux toward the more concentrated compartment at zero ATP expense. In hypotonic mode water rushes inward to swell the [[animal cell|real-cell]] and stiffen the [[plant vacuole|central-vacuole]]; in isotonic balance inward and outward crossings match evenly; in hypertonic brine net flow reverses outward.',
        blueprint: {
          role: 'Passive directional solvent stream equalizing water chemical potential across semipermeable cell membranes',
          arrivesFrom: 'Difference in free [[H2O|water]] concentration (water potential delta-Psi_w) between extracellular medium and [[cytosol|cytosol]]',
          inside: 'Single-file dipole chain of bent [[H2O|water]] molecules (104.5 deg H-O-H angle) flipping orientation at the [[AQP1|real-mem-aqp1]] NPA center',
          deliversTo: 'Net volume gain (hypotonic), zero net balance (isotonic), or rapid osmotic dehydration (hypertonic) across animal and plant cells',
          loop: 'Water itself never flows uphill; cells steer water passively by pumping solutes such as Na+ and K+ across the membrane'
        },
        scientific:
          'Passive transmembrane osmotic [[H2O|water]] flux governed by J_v = L_p * (delta-P - sigma * R * T * delta-C_s), mediated predominantly by single-file conduction (~10^9 molecules/s per monomer) through [[AQP1|real-mem-aqp1]] / PIP2 tetramers at 0 ATP cost. Transitions cleanly across Hypotonic (J_in > 0 driving animal lysis and plant turgor), Isotonic (J_net = 0 maintaining animal stability and plant flaccidity), and Hypertonic (J_out > 0 driving animal crenation and plant plasmolysis).',
        from: [
          { nodeId: 'water', label: 'H2O Water Molecules', cargo: '104.5 deg polar solvent' },
          { nodeId: 'real-mem-aqp1', label: 'Aquaporin Hourglass', cargo: '10^9 H2O/s single-file lane' }
        ],
        to: [
          { nodeId: 'real-membrane-transport', label: 'Tonicity Response', cargo: 'Hypotonic / Isotonic / Hypertonic' },
          { nodeId: 'central-vacuole', label: 'Plant Turgor Drive', cargo: 'Hydraulic vacuole inflation' }
        ]
      },
      es: {
        subtitle: 'Flujo osmótico bidireccional de agua (H₂O en fila india)',
        simple:
          'La ósmosis es el flujo pasivo neto de [[agua|water]] a través de una membrana selectiva hacia el lado con mayor concentración de solutos disueltos. Cambiar de medio hipotónico a hipertónico invierte al instante esta corriente de H₂O por las [[acuaporinas|real-mem-aqp1]].',
        story:
          'Los iones y azúcares disueltos retienen moléculas de [[agua|water]] en capas de hidratación, reduciendo el agua libre en el lado más salino de la [[membrana plasmática|plasma-membrane]]. Como las [[acuaporinas|real-mem-aqp1]] dejan cruzar agua pero retienen los solutos, el movimiento térmico genera un flujo neto hacia el compartimento más concentrado sin gastar ATP. En medio hipotónico el agua entra hinchando la [[célula animal|real-cell]] y la [[vacuola vegetal|central-vacuole]]; en medio isotónico entradas y salidas se igualan; en medio hipertónico el flujo neto se invierte hacia fuera.',
        blueprint: {
          role: 'Corriente pasiva direccional de disolvente que iguala el potencial hídrico a ambos lados de membranas semipermeables',
          arrivesFrom: 'Diferencia de concentración de [[H₂O|water]] libre (ΔΨ_w) entre el medio extracelular y el [[citosol|cytosol]]',
          inside: 'Cadena bipolar en fila india de moléculas angulares de [[H₂O|water]] (104,5°) girando en el centro NPA de [[AQP1|real-mem-aqp1]]',
          deliversTo: 'Ganancia neta de volumen (hipotónico), equilibrio nulo (isotónico) o deshidratación osmótica (hipertónico) en células animales y vegetales',
          loop: 'El agua nunca se bombea cuesta arriba; las células dirigen su flujo pasivamente bombeando solutos como Na⁺ y K⁺'
        },
        scientific:
          'Flujo osmótico pasivo transmembrana de [[H₂O|water]] regido por J_v = L_p · (ΔP − σ · R · T · ΔC_s), conducido principalmente en fila india (~10⁹ moléculas/s por monómero) por tetrámeros [[AQP1|real-mem-aqp1]] / PIP2 con 0 ATP. Responde limpiamente entre estados hipotónico (J_in > 0: lisis animal / turgencia vegetal), isotónico (J_net = 0: equilibrio / flacidez) e hipertónico (J_out > 0: crenación / plasmólisis).',
        from: [
          { nodeId: 'water', label: 'Moléculas de H₂O', cargo: 'Disolvente polar de 104,5°' },
          { nodeId: 'real-mem-aqp1', label: 'Reloj de arena AQP1', cargo: 'Carril de 10⁹ H₂O/s' }
        ],
        to: [
          { nodeId: 'real-membrane-transport', label: 'Respuesta de tonicidad', cargo: 'Hipotónico / Isotónico / Hipertónico' },
          { nodeId: 'central-vacuole', label: 'Empuje vacuolar vegetal', cargo: 'Inflado hidráulico turgente' }
        ]
      }
    },

    glut1: {
      en: {
        subtitle: 'GLUT1 Facilitated Glucose Uniporter (PDB 4PYP)',
        simple:
          'This rocking twelve-helix [[GLUT1|real-mem-glut1]] carrier escorts polar [[glucose|glucose]] rings across the oily [[plasma membrane|plasma-membrane]] down their concentration gradient at zero ATP cost. It opens to only one side at a time so ions can never leak through.',
        story:
          'Unlike small gases that cross freely, six-carbon D-[[glucose|glucose]] carries five polar hydroxyl groups that refuse to enter the hydrophobic fatty-acyl core of the [[phospholipid|phospholipid]] bilayer. Human [[GLUT1|real-mem-glut1]] solves that impasse using two symmetrical six-helix bundles joined around a central sugar-binding pocket. Docking of an extracellular glucose ring tilts both lobes through a sealed occluded state into an inward-open conformation, releasing sugar straight into the [[cytosol|cytosol]] for glycolysis with zero ATP spent before rocking back outward.',
        blueprint: {
          role: 'Passive alternating-access facilitated-diffusion uniporter delivering polar D-glucose into the cytosol without ATP expenditure',
          arrivesFrom: 'Higher extracellular D-[[glucose|glucose]] concentration (downhill gradient; 0 ATP) docking at the outward-open cleft',
          inside: '12-TM Major Facilitator Superfamily carrier GLUT1 / SLC2A1 (PDB 4PYP) cycling outward-open <-> occluded <-> inward-open states',
          deliversTo: 'Stereospecific cytosolic D-[[glucose|glucose]] release immediately entering glycolysis and [[cellular respiration|real-bioenergetics]]',
          loop: 'Cytosolic hexokinase phosphorylates incoming glucose to G6P, locking it inside and preserving a permanent downhill import gradient'
        },
        scientific:
          'Human facilitated D-[[glucose|glucose]] uniporter [[GLUT1|real-mem-glut1]] (SLC2A1; MFS crystal structure PDB 4PYP; ~54 kDa monomer comprising two 6-transmembrane-helix N- and C-terminal bundles plus cytosolic ICH helices). Mediates passive, saturable, stereospecific D-glucose translocation down its chemical gradient (Km ~1-3 mM; 0 ATP) via a rocker-switch alternating-access cycle (outward-open <-> occluded <-> inward-open) that never creates a continuous open pore across the [[plasma membrane|plasma-membrane]].',
        from: [
          { nodeId: 'glucose', label: 'Extracellular Glucose', cargo: 'Polar C6H12O6 hexose' },
          { nodeId: 'protein', label: '12-TM MFS Carrier', cargo: 'Alternating-access rocker' }
        ],
        to: [
          { nodeId: 'real-mem-glut1', label: 'GLUT1 Explorer Node', cargo: 'Passive facilitated uniport' },
          { nodeId: 'real-bioenergetics', label: 'Glycolysis Fueling', cargo: 'Cytosolic glucose delivery' }
        ]
      },
      es: {
        subtitle: 'Uniportador facilitado de glucosa GLUT1 (PDB 4PYP)',
        simple:
          'Este transportador [[GLUT1|real-mem-glut1]] basculante de doce hélices guía la [[glucosa|glucose]] polar a través de la [[membrana plasmática|plasma-membrane]] a favor de gradiente sin gastar ATP. Solo abre una cara a la vez para evitar fugas de iones.',
        story:
          'A diferencia de los gases pequeños, la D-[[glucosa|glucose]] posee cinco grupos hidroxilo polares que le impiden penetrar el núcleo graso de los [[fosfolípidos|phospholipid]]. El transportador humano [[GLUT1|real-mem-glut1]] resuelve esa barrera mediante dos haces simétricos de seis hélices articulados en torno a un bolsillo central. Al encajar una glucosa externa, ambos lóbulos basculan por un estado ocluido sellado hacia la apertura interna, soltando el azúcar en el [[citosol|cytosol]] para la glucólisis con gasto cero de ATP.',
        blueprint: {
          role: 'Uniportador pasivo de acceso alterno y difusión facilitada que introduce D-glucosa polar en el citosol sin consumir ATP',
          arrivesFrom: 'Mayor concentración extracelular de D-[[glucosa|glucose]] (gradiente a favor; 0 ATP) en el bolsillo abierto al exterior',
          inside: 'Transportador MFS de 12 hélices TM GLUT1 / SLC2A1 (PDB 4PYP) alternando estados abierto externo ↔ ocluido ↔ abierto interno',
          deliversTo: 'Entrega estereoespecífica de D-[[glucosa|glucose]] en el citosol para alimentar la glucólisis y la [[respiración celular|real-bioenergetics]]',
          loop: 'La hexocinasa citosólica fosforila la glucosa entrante a G6P, atrapándola dentro y sosteniendo un gradiente permanente de entrada'
        },
        scientific:
          'Uniportador humano facilitado de D-[[glucosa|glucose]] [[GLUT1|real-mem-glut1]] (SLC2A1; estructura MFS PDB 4PYP; monómero de ~54 kDa con dos lóbulos N y C de 6 hélices TM y hélices citosólicas ICH). Ejecuta translocación pasiva, saturable y estereoespecífica a favor de gradiente (K_m ~1–3 mM; 0 ATP) mediante ciclo en balancín (abierto externo ↔ ocluido ↔ abierto interno) sin abrir jamás un poro continuo en la [[membrana plasmática|plasma-membrane]].',
        from: [
          { nodeId: 'glucose', label: 'Glucosa extracelular', cargo: 'Hexosa polar C₆H₁₂O₆' },
          { nodeId: 'protein', label: 'Transportador MFS 12-TM', cargo: 'Balancín de acceso alterno' }
        ],
        to: [
          { nodeId: 'real-mem-glut1', label: 'Nodo GLUT1', cargo: 'Uniporte pasivo facilitado' },
          { nodeId: 'real-bioenergetics', label: 'Combustible glucolítico', cargo: 'Entrega citosólica de glucosa' }
        ]
      }
    },

    nak_pump: {
      en: {
        subtitle: 'Na+/K+-ATPase Primary Active Pump (PDB 3WGU)',
        simple:
          'Hydrolyzing one cytosolic ATP per cycle, the [[Na+/K+-ATPase|real-mem-nak]] pushes three sodium ions out and pulls two potassium ions in uphill against their gradients. This electrogenic cycle builds resting membrane voltage and protects wall-less [[animal cells|real-cell]] from swelling.',
        story:
          'Spanning the [[plasma membrane|plasma-membrane]] of every [[animal cell|real-cell]], the [[sodium-potassium pump|na-k-pump]] runs the four-step Post-Albers conformational engine to move ions directly against steep electrochemical cliffs. In its inward E1 pose, three cytosolic Na+ ions bind tightly and trigger ATP phosphorylation of an aspartate switch, flipping the transmembrane helices outward into E2-P so all three Na+ release into the exterior. Binding two extracellular K+ ions then strips the [[phosphate|atom-p]] off, resetting E1 to release 2 K+ into the [[cytosol|cytosol]] with a net -1 intracellular charge shift.',
        blueprint: {
          role: 'Electrogenic P-type primary active ion pump exporting 3 Na+ and importing 2 K+ uphill per ATP hydrolyzed',
          arrivesFrom: '3 cytosolic Na+, 2 extracellular K+, and 1 cytosolic ATP + [[Mg2+|atom-mg]] generated by [[mitochondrial ATP synthase|real-bio-atpsynth]]',
          inside: 'Heterotrimeric alpha-beta-gamma Na+/K+-ATPase (PDB 3WGU) cycling E1-3Na+ -> E1~P (Asp) -> E2~P -> E2-2K+ -> E1',
          deliversTo: 'Steep Na+/K+ gradients, electrogenic negative contribution to resting Vm (-70 mV), and osmotic volume defense for [[animal cells|real-cell]]',
          loop: 'The resulting inward Na+ gradient also powers secondary active cotransport of sugars and amino acids across intestinal and kidney epithelia'
        },
        scientific:
          'Electrogenic P2C-type primary active [[Na+/K+-ATPase|na-k-pump]] (porcine alpha-beta-gamma structure PDB 3WGU; ~112 kDa 10-TM catalytic alpha subunit with cytosolic A/N/P domains plus beta and regulatory FXYD/gamma subunits). Couples [[Mg2+|atom-mg]]-dependent hydrolysis of 1 ATP -> ADP + [[Pi|atom-p]] via transient Asp369 phosphorylation (Post-Albers E1/E2 cycle) to uphill stoichiometry of 3 Na+ out / 2 K+ in across the [[plasma membrane|plasma-membrane]], sustaining resting Vm approx -70 mV and protecting wall-less [[animal cells|real-cell]] against Donnan osmotic swelling.',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'Mitochondrial ATP', cargo: '1 ATP hydrolyzed per cycle' },
          { nodeId: 'na-k-pump', label: 'Na+/K+ Pump Explorer', cargo: 'P-type E1/E2 architecture' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Active Pump Node', cargo: '3 Na+ out / 2 K+ in uphill' },
          { nodeId: 'real-cell', label: 'Animal Homeostasis', cargo: '-70 mV voltage & volume guard' }
        ]
      },
      es: {
        subtitle: 'Bomba activa primaria Na⁺/K⁺-ATPasa (PDB 3WGU)',
        simple:
          'Al hidrolizar un ATP citosólico por ciclo, la [[Na⁺/K⁺-ATPasa|real-mem-nak]] expulsa tres iones sodio e introduce dos iones potasio cuesta arriba contra gradiente. Este ciclo electrogénico carga el voltaje basal y protege del hinchamiento a las [[células animales|real-cell]].',
        story:
          'Atravesando la [[membrana plasmática|plasma-membrane]] de toda [[célula animal|real-cell]], la [[bomba sodio-potasio|na-k-pump]] ejecuta el ciclo conformacional de Post–Albers en cuatro tiempos para desplazar iones contra fuertes gradientes electroquímicos. En su estado interno E₁, tres Na⁺ citosólicos se acoplan y disparan la fosforilación de un aspartato mediante ATP, invirtiendo las hélices hacia el estado externo E₂~P para soltar los tres Na⁺ fuera. Luego, la unión de dos K⁺ extracelulares libera el [[fosfato|atom-p]] y devuelve la bomba a E₁ descargando 2 K⁺ al [[citosol|cytosol]].',
        blueprint: {
          role: 'Bomba iónica activa primaria electrogénica tipo P que exporta 3 Na⁺ e importa 2 K⁺ contra gradiente por cada ATP hidrolizado',
          arrivesFrom: '3 Na⁺ citosólicos, 2 K⁺ extracelulares y 1 ATP + [[Mg²⁺|atom-mg]] producido por la [[ATP sintasa mitocondrial|real-bio-atpsynth]]',
          inside: 'Heterotrímero αβγ de Na⁺/K⁺-ATPasa (PDB 3WGU) ciclando E₁·3Na⁺ → E₁~P (Asp) → E₂~P → E₂·2K⁺ → E₁',
          deliversTo: 'Gradientes intensos de Na⁺/K⁺, aporte electrogénico negativo al voltaje basal V_m (−70 mV) y defensa de volumen en [[células animales|real-cell]]',
          loop: 'El gradiente de entrada de Na⁺ así creado impulsa además el cotransporte activo secundario de nutrientes en intestino y riñón'
        },
        scientific:
          'Bomba activa primaria electrogénica tipo P2C [[Na⁺/K⁺-ATPasa|na-k-pump]] (estructura porcina αβγ PDB 3WGU; subunidad catalítica α de ~112 kDa y 10 TM con dominios citosólicos A/N/P junto a subunidades β y FXYD/γ). Acopla la hidrólisis de 1 ATP → ADP + [[Pᵢ|atom-p]] dependiente de [[Mg²⁺|atom-mg]] vía fosforilación transitoria de Asp369 (ciclo Post–Albers E₁/E₂) para bombear 3 Na⁺ fuera / 2 K⁺ dentro en la [[membrana plasmática|plasma-membrane]], sosteniendo V_m ≈ −70 mV.',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP mitocondrial', cargo: '1 ATP hidrolizado por ciclo' },
          { nodeId: 'na-k-pump', label: 'Explorador Bomba Na⁺/K⁺', cargo: 'Arquitectura tipo P E₁/E₂' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Nodo Bomba activa', cargo: '3 Na⁺ fuera / 2 K⁺ dentro' },
          { nodeId: 'real-cell', label: 'Homeostasis animal', cargo: 'Voltaje −70 mV y volumen' }
        ]
      }
    },

    atp_hydrolysis: {
      en: {
        subtitle: 'ATP -> ADP + Pi Active Transport Power Stroke',
        simple:
          'Active transport cannot happen for free. Every time the [[Na+/K+ pump|real-mem-nak]] pushes ions uphill, it cleaves the terminal [[phosphate|atom-p]] bond of one ATP molecule into ADP + Pi, converting stored chemical energy from [[cellular respiration|real-bioenergetics]] into conformational motion.',
        story:
          'Direct links between bioenergetics and membrane physiology converge at the cytosolic nucleotide-binding pocket of the [[Na+/K+-ATPase|real-mem-nak]]. Synthesized continuously by [[mitochondrial F1F0 ATP synthase|real-bio-atpsynth]], Mg-ATP docks inside the pump N-domain once three cytosolic Na+ ions occupy their transmembrane cavities. Assisted by a catalytic [[Mg2+|atom-mg]] ion, the terminal gamma-[[phosphate|atom-p]] transfers covalently onto a conserved aspartate side chain, releasing ~50 kilojoules per mole of free energy that snaps the pump helices from E1 to E2-P and expels sodium against a twelvefold gradient.',
        blueprint: {
          role: 'Exergonic ATP phosphoanhydride cleavage step directly coupling bioenergetic fuel to uphill active ion transport',
          arrivesFrom: 'Cytosolic Mg-ATP exported from [[F1F0 ATP synthase|real-bio-atpsynth]] and glycolysis into the [[Na+/K+-ATPase|real-mem-nak]] N/P catalytic pocket',
          inside: '[[Mg2+|atom-mg]]-assisted transfer of the terminal gamma-[[phosphate|atom-p]] onto conserved Asp369, forming a high-energy acyl-phosphate intermediate (E1~P)',
          deliversTo: 'Conformational E1 -> E2~P transition driving 3 Na+ export and 2 K+ import plus spent ADP + [[Pi|atom-p]] recycled back to [[mitochondria|mitochondrion]]',
          loop: 'Interrupting cellular ATP supply halts active pumps, eroding membrane voltage and causing wall-less animal cells to swell'
        },
        scientific:
          'Exergonic cytosolic ATP hydrolysis (ATP + [[H2O|water]] -> ADP + [[Pi|atom-p]]; physiological delta-G approx -50 kJ/mol, coordinated with divalent [[Mg2+|atom-mg]]) powering primary active transport at the P-type [[Na+/K+-ATPase|real-mem-nak]] (PDB 3WGU) and plant plasma-membrane H+-ATPase. Proceeds via a covalent beta-aspartyl [[phosphate|atom-p]] intermediate (E1~P) that locks directional uphill stoichiometry (3 Na+ out / 2 K+ in), returning ADP + Pi to [[F1F0 ATP synthase|real-bio-atpsynth]] inside [[mitochondria|mitochondrion]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'F1F0 ATP Synthase', cargo: 'Continuous cytosolic ATP pool' },
          { nodeId: 'atom-p', label: 'Gamma-Phosphate Bond', cargo: '~50 kJ/mol cleavage energy' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Na+/K+-ATPase Cycle', cargo: 'Asp phosphorylation E1 -> E2' },
          { nodeId: 'mitochondrion', label: 'ADP + Pi Recycling', cargo: 'Returned for re-phosphorylation' }
        ]
      },
      es: {
        subtitle: 'Golpe energético ATP → ADP + Pᵢ del transporte activo',
        simple:
          'El transporte activo jamás ocurre gratis. Cada vez que la [[bomba Na⁺/K⁺|real-mem-nak]] empuja iones cuesta arriba, rompe el enlace [[fosfato|atom-p]] terminal de un ATP en ADP + Pᵢ, convirtiendo energía de la [[respiración celular|real-bioenergetics]] en movimiento conformacional.',
        story:
          'El puente directo entre bioenergética y fisiología de membrana converge en el bolsillo citosólico de la [[Na⁺/K⁺-ATPasa|real-mem-nak]]. Sintetizado sin cesar por la [[ATP sintasa F₁F₀|real-bio-atpsynth]], el Mg–ATP se acopla al dominio N cuando tres Na⁺ ocupan sus huecos internos. Asistido por un ion catalítico [[Mg²⁺|atom-mg]], el [[fosfato|atom-p]] γ terminal se transfiere covalentemente a un aspartato conservado, liberando ~50 kJ/mol que basculan las hélices de E₁ a E₂~P para expulsar sodio contra un gradiente doce veces mayor.',
        blueprint: {
          role: 'Escisión exergónica del enlace fosfoanhídrido del ATP que acopla directamente el combustible bioenergético al bombeo iónico cuesta arriba',
          arrivesFrom: 'Mg–ATP citosólico exportado por la [[ATP sintasa F₁F₀|real-bio-atpsynth]] y glucólisis hacia el bolsillo catalítico N/P de [[Na⁺/K⁺-ATPasa|real-mem-nak]]',
          inside: 'Transferencia asistida por [[Mg²⁺|atom-mg]] del [[fosfato|atom-p]] γ terminal a Asp369 formando el intermediario acil-fosfato de alta energía (E₁~P)',
          deliversTo: 'Transición conformacional E₁ → E₂~P que exporta 3 Na⁺ e importa 2 K⁺ más ADP + [[Pᵢ|atom-p]] devueltos a las [[mitocondrias|mitochondrion]]',
          loop: 'Interrumpir el suministro de ATP frena las bombas activas, erosiona el voltaje de membrana y provoca hinchamiento en células animales'
        },
        scientific:
          'Hidrólisis citosólica exergónica de ATP (ATP + [[H₂O|water]] → ADP + [[Pᵢ|atom-p]]; ΔG fisiológico ≈ −50 kJ/mol coordinado con [[Mg²⁺|atom-mg]]) impulsora del transporte activo primario en [[Na⁺/K⁺-ATPasa|real-mem-nak]] (PDB 3WGU). Opera mediante intermediario covalente β-aspartil-[[fosfato|atom-p]] (E₁~P) que fija la direccionalidad 3 Na⁺ fuera / 2 K⁺ dentro y recicla ADP + Pᵢ hacia la [[ATP sintasa F₁F₀|real-bio-atpsynth]] en las [[mitocondrias|mitochondrion]].',
        from: [
          { nodeId: 'real-bio-atpsynth', label: 'ATP sintasa F₁F₀', cargo: 'Reserva citosólica de ATP' },
          { nodeId: 'atom-p', label: 'Enlace fosfato γ', cargo: '~50 kJ/mol de energía libre' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Ciclo Na⁺/K⁺-ATPasa', cargo: 'Fosforilación de Asp E₁ → E₂' },
          { nodeId: 'mitochondrion', label: 'Reciclaje ADP + Pᵢ', cargo: 'Retorno para refosforilación' }
        ]
      }
    },

    membrane_voltage: {
      en: {
        subtitle: 'Resting Transmembrane Voltage Potential (Vm ~ -70 mV)',
        simple:
          'Because the [[plasma membrane|plasma-membrane]] separates unequal concentrations of positively charged Na+ and K+ ions across just five nanometers, living [[animal cells|real-cell]] carry a steady -70 millivolt resting electrical charge inside negative.',
        story:
          'A resting cell stores electric charge across its insulating five-nanometer [[phospholipid|phospholipid]] bilayer. First, the electrogenic [[Na+/K+ pump|real-mem-nak]] exports three Na+ for every two K+ imported, piling sodium outside (~145 mM) and potassium inside (~140 mM) while subtracting one net positive charge each cycle. Resting K+ leak [[channels|channel-protein]] then let tiny traces of K+ diffuse outward down their chemical gradient until the growing interior negative pull (-70 mV) balances outflow, priming nerves, muscles, and secondary cotransporters.',
        blueprint: {
          role: 'Steady-state resting electrical potential (~-70 mV inside negative) stored across the insulating 5 nm phospholipid bilayer',
          arrivesFrom: 'Asymmetric Na+/K+ gradients built by [[Na+/K+-ATPase|real-mem-nak]] combined with selective outward K+ leak through [[channel proteins|channel-protein]]',
          inside: 'Thin charge-separation layer immediately lining both polar headgroup surfaces of the 5 nm [[POPC bilayer|phospholipid]] (~140,000 V/cm field)',
          deliversTo: 'Stored electrical energy driving nerve action potentials, muscle contraction, and Na+-coupled nutrient uptake across [[animal cells|real-cell]]',
          loop: 'Aquaporin NPA proton blocking and tight lipid packing keep this electrical potential from leaking away between pump cycles'
        },
        scientific:
          'Resting transmembrane electrical potential Vm approx -70 mV (cytosol negative relative to extracellular fluid; equivalent to an electric field of ~1.4 x 10^7 V/m across the 5 nm [[plasma membrane|plasma-membrane]]). Quantified by the Goldman-Hodgkin-Katz equation from asymmetric concentrations maintained by [[Na+/K+-ATPase|real-mem-nak]] ([Na+]out ~145 mM vs [Na+]in ~12 mM; [K+]in ~140 mM vs [K+]out ~4 mM) plus higher resting K+ leak [[channel|channel-protein]] conductance (P_K >> P_Na) and direct electrogenic pump current (~-5 to -10 mV).',
        from: [
          { nodeId: 'real-mem-nak', label: 'Electrogenic 3 Na+/2 K+', cargo: 'Maintains Na+/K+ asymmetry' },
          { nodeId: 'channel-protein', label: 'K+ Leak Channels', cargo: 'Dominant resting conductance' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: '5 nm Bilayer Capacitor', cargo: 'Stores -70 mV electric field' },
          { nodeId: 'real-cell', label: 'Excitable Cell Readiness', cargo: 'Action potentials & cotransport' }
        ]
      },
      es: {
        subtitle: 'Potencial eléctrico de membrana en reposo (V_m ≈ −70 mV)',
        simple:
          'Dado que la [[membrana plasmática|plasma-membrane]] separa concentraciones desiguales de Na⁺ y K⁺ a solo cinco nanómetros de distancia, las [[células animales|real-cell]] mantienen una carga eléctrica basal de −70 milivoltios negativos en su interior.',
        story:
          'Una célula en reposo almacena carga eléctrica a través de su bicapa aislante de [[fosfolípidos|phospholipid]]. Primero, la [[bomba Na⁺/K⁺|real-mem-nak]] electrogénica expulsa tres Na⁺ por cada dos K⁺ que importa, concentrando sodio fuera (~145 mM) y potasio dentro (~140 mM). Luego, [[canales|channel-protein]] de fuga de K⁺ dejan escapar trazas de potasio a favor de gradiente químico hasta que la atracción negativa interior (−70 mV) equilibra la salida, preparando neuronas, músculos y cotransportadores secundarios.',
        blueprint: {
          role: 'Potencial eléctrico basal en estado estacionario (~−70 mV interior negativo) almacenado en la bicapa lipídica aislante de 5 nm',
          arrivesFrom: 'Gradientes asimétricos de Na⁺/K⁺ creados por la [[Na⁺/K⁺-ATPasa|real-mem-nak]] junto a fuga selectiva de K⁺ por [[proteínas canal|channel-protein]]',
          inside: 'Fina capa de separación de cargas adherida a ambas superficies polares de la bicapa [[POPC|phospholipid]] de 5 nm (~140.000 V/cm)',
          deliversTo: 'Energía eléctrica almacenada que impulsa potenciales de acción nerviosos, contracción muscular y cotransporte acoplado a Na⁺ en [[células animales|real-cell]]',
          loop: 'El bloqueo protónico NPA de acuaporinas y el sellado lipídico evitan que este voltaje se descargue entre ciclos de bombeo'
        },
        scientific:
          'Potencial eléctrico transmembrana en reposo V_m ≈ −70 mV ([[citosol|cytosol]] negativo respecto al medio externo; campo de ~1,4 × 10⁷ V/m a través de la [[membrana plasmática|plasma-membrane]] de 5 nm). Descrito por la ecuación de Goldman–Hodgkin–Katz a partir de gradientes sostenidos por [[Na⁺/K⁺-ATPasa|real-mem-nak]] ([Na⁺]ext ~145 mM vs [Na⁺]int ~12 mM; [K⁺]int ~140 mM vs [K⁺]ext ~4 mM), alta permeabilidad basal a K⁺ por [[canales|channel-protein]] (P_K >> P_Na) y aporte electrogénico directo.',
        from: [
          { nodeId: 'real-mem-nak', label: 'Bombeo electrogénico', cargo: 'Sostiene asimetría Na⁺/K⁺' },
          { nodeId: 'channel-protein', label: 'Canales de fuga K⁺', cargo: 'Conductancia basal dominante' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Condensador bicapa 5 nm', cargo: 'Almacena campo de −70 mV' },
          { nodeId: 'real-cell', label: 'Excitabilidad celular', cargo: 'Impulsos y cotransporte' }
        ]
      }
    },

    clathrin_pit: {
      en: {
        subtitle: 'Clathrin-Coated Endocytic Pit (PDB 1XI4)',
        simple:
          'When a cell needs to import large [[proteins|protein]] or receptor-bound cargo too wide for any channel, three-legged clathrin triskelions assemble under the [[plasma membrane|plasma-membrane]], curving the bilayer inward into a budding [[vesicle|vesicle]].',
        story:
          'Receptor-mediated endocytosis begins when surface receptors bind extracellular ligands and recruit cytosolic AP-2 adaptor complexes on the inner leaflet of the [[plasma membrane|plasma-membrane]]. Three-legged clathrin triskelions interlock onto those adaptors into a curved lattice of pentagons and hexagons, pulling the flat [[phospholipid|phospholipid]] sheet smoothly inward into a deep coated pit. Finally, a spiral collar of GTP-hydrolyzing dynamin tightens around the narrow membrane neck and pinches a sealed ~100-nanometer coated [[vesicle|vesicle]] free into the [[cytosol|cytosol]].',
        blueprint: {
          role: 'Curvature-generating protein scaffold driving active receptor-mediated endocytosis of bulk macromolecular cargo',
          arrivesFrom: 'Extracellular ligands bound to membrane receptors recruiting cytosolic AP-2 adaptors, clathrin triskelions (PDB 1XI4), and dynamin GTP',
          inside: 'Interlocking pentagonal/hexagonal clathrin polyhedral cage deforming the [[plasma membrane|plasma-membrane]] inward until dynamin scission',
          deliversTo: 'Sealed ~60-120 nm intracellular [[vesicles|vesicle]] uncoated by ATPases and routed to endosomes inside the [[cytosol|cytosol]]',
          loop: 'After scission, Hsc70 ATPase strips the clathrin cage back into free triskelions ready to build the next endocytic pit'
        },
        scientific:
          'Clathrin-mediated endocytosis assembly (clathrin triskelion lattice cryo-EM PDB 1XI4; three ~190 kDa heavy chains and three ~25 kDa light chains linked to transmembrane cargo receptors via AP-2 adaptors at the inner [[plasma membrane|plasma-membrane]] leaflet). Assembly of pentagonal and hexagonal facets curves the [[phospholipid|phospholipid]] bilayer into a ~60-120 nm coated pit, followed by GTP-dependent dynamin helical scission releasing a sealed [[vesicle|vesicle]] into the [[cytosol|cytosol]] and ATP-driven Hsc70/auxilin uncoating.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Plasma Membrane Patch', cargo: 'Receptor-bound cargo cluster' },
          { nodeId: 'protein', label: 'Clathrin Triskelions', cargo: 'Pentagonal/hexagonal cage' }
        ],
        to: [
          { nodeId: 'real-mem-vesicle', label: 'Bulk Vesicular Node', cargo: 'Endocytosis & exocytosis pair' },
          { nodeId: 'vesicle', label: 'Endocytic Vesicle', cargo: '60-120 nm internal cargo sac' }
        ]
      },
      es: {
        subtitle: 'Fosa endocítica revestida de clatrina (PDB 1XI4)',
        simple:
          'Cuando una célula debe importar [[proteínas|protein]] grandes o receptores demasiado anchos para cualquier canal, los triskeliones de clatrina de tres patas se ensamblan bajo la [[membrana plasmática|plasma-membrane]] curvando la bicapa hacia adentro en una [[vesícula|vesicle]].',
        story:
          'La endocitosis mediada por receptor comienza cuando los receptores de superficie capturan ligandos extracelulares y reclutan adaptadores citosólicos AP-2 en la cara interna de la [[membrana plasmática|plasma-membrane]]. Los triskeliones de clatrina se acoplan sobre ellos en una malla curva de pentágonos y hexágonos, hundiendo la lámina de [[fosfolípidos|phospholipid]] en una fosa profunda. Finalmente, un collar helicoidal de dinamina dependiente de GTP estrangula el cuello y libera una [[vesícula|vesicle]] sellada de ~100 nanómetros hacia el [[citosol|cytosol]].',
        blueprint: {
          role: 'Andamio proteico generador de curvatura que impulsa la endocitosis activa mediada por receptor de macromoléculas en bloque',
          arrivesFrom: 'Ligandos extracelulares en receptores de membrana que reclutan adaptadores AP-2, triskeliones de clatrina (PDB 1XI4) y dinamina con GTP',
          inside: 'Jaula poliédrica entrelazada de pentágonos y hexágonos de clatrina invaginando la [[membrana plasmática|plasma-membrane]] hasta la escisión por dinamina',
          deliversTo: '[[Vesículas|vesicle]] intracelulares selladas de ~60–120 nm que pierden su cubierta con ATP y viajan hacia endosomas en el [[citosol|cytosol]]',
          loop: 'Tras la escisión, la ATPasa Hsc70 desensambla la jaula devolviendo triskeliones libres para formar la siguiente fosa'
        },
        scientific:
          'Ensamblaje de endocitosis mediada por clatrina (red de triskeliones crio-EM PDB 1XI4; tres cadenas pesadas de ~190 kDa y tres ligeras de ~25 kDa acopladas mediante AP-2 a receptores en la [[membrana plasmática|plasma-membrane]]). Las facetas pentagonales y hexagonales curvan la bicapa de [[fosfolípidos|phospholipid]] en fosas de ~60–120 nm, escindidas por la GTPasa dinamina para liberar una [[vesícula|vesicle]] al [[citosol|cytosol]] antes del desensamblaje dependiente de ATP por Hsc70/auxilina.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Parche de membrana', cargo: 'Cúmulo receptor–ligando' },
          { nodeId: 'protein', label: 'Triskeliones de clatrina', cargo: 'Jaula pentagonal/hexagonal' }
        ],
        to: [
          { nodeId: 'real-mem-vesicle', label: 'Nodo Transporte vesicular', cargo: 'Endocitosis y exocitosis' },
          { nodeId: 'vesicle', label: 'Vesícula endocítica', cargo: 'Saco interno de 60–120 nm' }
        ]
      }
    },

    snare_fusion: {
      en: {
        subtitle: 'SNARE Four-Helix Exocytic Fusion Complex (PDB 1SFC)',
        simple:
          'Two hydrated [[phospholipid|phospholipid]] membranes naturally repel each other instead of merging. During exocytosis, matching v-SNARE and t-SNARE [[proteins|protein]] twist together into a tight four-helix bundle, pulling a secretory [[vesicle|vesicle]] flush against the [[plasma membrane|plasma-membrane]] until both bilayers fuse.',
        story:
          'Secretion of hormones, neurotransmitters, and cell-wall enzymes requires fusing an internal ~80-nanometer [[vesicle|vesicle]] cleanly into the [[plasma membrane|plasma-membrane]] without spilling cytosolic contents. Positioned on opposite membranes, vesicle v-SNARE (synaptobrevin) engages target t-SNAREs (syntaxin-1 and SNAP-25) from their outer tips inward, coiling progressively into an extraordinarily stable four-helix trans-SNARE bundle. That directional coiling overcomes lipid hydration repulsion, opens a fusion pore to discharge bulk cargo outside, and awaits NSF ATPase disassembly afterward.',
        blueprint: {
          role: 'Coiled-coil mechanical fusion engine pulling vesicle and plasma bilayers into contact to drive exocytic cargo release',
          arrivesFrom: 'Docked secretory [[vesicle|vesicle]] bearing v-SNARE (synaptobrevin) meeting [[plasma membrane|plasma-membrane]] t-SNAREs (syntaxin-1, SNAP-25)',
          inside: 'Directional N-to-C assembly of the four-helix trans-SNARE coiled-coil bundle (PDB 1SFC) releasing ~35-65 kBT fusion work',
          deliversTo: 'Opening of a continuous fusion pore merging both [[phospholipid|phospholipid]] bilayers and secreting bulk cargo into extracellular fluid',
          loop: 'After fusion, the ATPase NSF and alpha-SNAP unwind the locked cis-SNARE bundle so vesicle proteins recycle cleanly'
        },
        scientific:
          'Exocytic four-helix trans-SNARE membrane fusion complex (synaptic core crystal structure PDB 1SFC uniting vesicle R-SNARE synaptobrevin-2/VAMP2 with target Q-SNAREs syntaxin-1A and dual-helix SNAP-25). Progressive N-to-C-terminal coiled-coil assembly bridges docked [[vesicle|vesicle]] and [[plasma membrane|plasma-membrane]] [[phospholipid|phospholipid]] bilayers, overcoming the ~40-60 kBT hydration and stalk-hemifusion barrier (often triggered rapidly by [[Ca2+|atom-ca]]-sensing synaptotagmin) before ATP-dependent NSF/alpha-SNAP disassembly.',
        from: [
          { nodeId: 'vesicle', label: 'Secretory Vesicle', cargo: 'v-SNARE synaptobrevin anchor' },
          { nodeId: 'atom-ca', label: 'Ca2+ Trigger Signal', cargo: 'Regulated fusion timing' }
        ],
        to: [
          { nodeId: 'real-mem-vesicle', label: 'Bulk Vesicular Node', cargo: 'Exocytic bilayer merging' },
          { nodeId: 'plasma-membrane', label: 'Fusion Pore Opening', cargo: 'Extracellular cargo release' }
        ]
      },
      es: {
        subtitle: 'Complejo de fusión exocítica SNARE de cuatro hélices (PDB 1SFC)',
        simple:
          'Dos bicapas hidratadas de [[fosfolípidos|phospholipid]] se repelen naturalmente en lugar de fundirse. En la exocitosis, las [[proteínas|protein]] v-SNARE y t-SNARE se trenzan en un haz compacto de cuatro hélices que atrae la [[vesícula|vesicle]] contra la [[membrana plasmática|plasma-membrane]] hasta fusionarlas.',
        story:
          'Secretar hormonas, neurotransmisores o enzimas de pared exige fusionar una [[vesícula|vesicle]] interna de ~80 nanómetros con la [[membrana plasmática|plasma-membrane]] sin derramar el citosol. Situadas en membranas opuestas, la v-SNARE vesicular (sinaptobrevina) se enlaza con las t-SNARE de destino (sintaxina-1 y SNAP-25) desde sus extremos libres hacia las bases, enrollándose en un haz de cuatro hélices trans-SNARE muy estable. Ese cierre direccional vence la repulsión hídrica lipídica, abre el poro de fusión para expulsar la carga y después la ATPasa NSF desarma el complejo.',
        blueprint: {
          role: 'Motor mecánico de fusión coiled-coil que acerca bicapas vesicular y plasmática para disparar la secreción exocítica',
          arrivesFrom: '[[Vesícula|vesicle]] secretora acoplada con v-SNARE (sinaptobrevina) frente a t-SNARE (sintaxina-1, SNAP-25) en la [[membrana plasmática|plasma-membrane]]',
          inside: 'Ensamblaje direccional N→C del haz coiled-coil trans-SNARE de cuatro hélices (PDB 1SFC) liberando ~35–65 k_B T de trabajo de fusión',
          deliversTo: 'Apertura de un poro continuo que fusiona ambas bicapas de [[fosfolípidos|phospholipid]] y libera la carga al exterior celular',
          loop: 'Tras la fusión, la ATPasa NSF y α-SNAP desenrollan el complejo cis-SNARE para reciclar cada proteína vesicular'
        },
        scientific:
          'Complejo exocítico trans-SNARE de cuatro hélices (estructura cristalográfica sináptica PDB 1SFC que une la R-SNARE vesicular sinaptobrevina-2/VAMP2 con las Q-SNARE sintaxina-1A y SNAP-25). El enrollamiento progresivo N→C acerca las bicapas de [[fosfolípidos|phospholipid]] de la [[vesícula|vesicle]] y la [[membrana plasmática|plasma-membrane]], superando la barrera de hidratación y hemifusión (~40–60 k_B T, frecuentemente gatillado por [[Ca²⁺|atom-ca]] vía sinaptotagmina) antes de la disociación por NSF/α-SNAP con ATP.',
        from: [
          { nodeId: 'vesicle', label: 'Vesícula secretora', cargo: 'Anclaje v-SNARE sinaptobrevina' },
          { nodeId: 'atom-ca', label: 'Señal de disparo Ca²⁺', cargo: 'Sincronización de fusión' }
        ],
        to: [
          { nodeId: 'real-mem-vesicle', label: 'Nodo Transporte vesicular', cargo: 'Fusión de bicapas en exocitosis' },
          { nodeId: 'plasma-membrane', label: 'Apertura de poro', cargo: 'Secreción extracelular' }
        ]
      }
    },

    vesicle_cargo: {
      en: {
        subtitle: 'Bulk Macromolecular Vesicle Cargo (50-150 nm)',
        simple:
          'Wrapped inside miniature [[phospholipid|phospholipid]] bubbles 50 to 150 nanometers wide, bulk cargo includes folded [[proteins|protein]], hormones, neurotransmitters, and membrane receptors that are orders of magnitude too bulky to pass through channels or ion pumps.',
        story:
          'Whereas [[aquaporin|real-mem-aqp1]] filters 0.28-nanometer water molecules and [[GLUT1|real-mem-glut1]] handles 0.9-nanometer glucose rings, cells constantly ship entire multi-kilodalton macromolecules across their perimeter. Packaging secreted enzymes, extracellular-matrix polymers, and recycled surface receptors inside sealed 50-to-150-nanometer [[vesicles|vesicle]] keeps delicate cargo shielded from cytosolic degradation while delivering hundreds of molecules in one coordinated fusion burst via [[SNARE|real-mem-vesicle]] exocytosis or importing them via clathrin endocytosis.',
        blueprint: {
          role: 'Membrane-wrapped bulk payload packets (50-150 nm) transporting macromolecules and membrane lipids across the cell boundary',
          arrivesFrom: 'Extracellular macromolecular ligands captured in clathrin pits or secretory [[proteins|protein]] packaged in internal transport [[vesicles|vesicle]]',
          inside: 'Aqueous vesicle lumen carrying soluble hormones, enzymes, or polysaccharides bounded by a ~5 nm [[phospholipid|phospholipid]] shell with embedded receptors',
          deliversTo: 'Targeted cytosolic endosomes (via endocytosis) or extracellular space and [[plasma membrane|plasma-membrane]] remodeling (via exocytosis)',
          loop: 'Balanced rates of endocytic membrane uptake and exocytic membrane return keep total plasma-membrane surface area constant'
        },
        scientific:
          'Bulk macromolecular payloads transported within 50-150 nm spherical lipid [[vesicles|vesicle]] during ATP/GTP-dependent endocytosis and exocytosis ([[bulk vesicular transport|real-mem-vesicle]]). Accommodates folded [[proteins|protein]] (5-30 nm), lipoprotein complexes, neurotransmitters, and plant [[cell wall|cell-wall]] matrix polysaccharides far exceeding the < 1 nm steric cutoffs of [[AQP1|real-mem-aqp1]], [[GLUT1|real-mem-glut1]], and [[Na+/K+-ATPase|real-mem-nak]], while simultaneously recycling [[plasma membrane|plasma-membrane]] [[phospholipids|phospholipid]] and receptors.',
        from: [
          { nodeId: 'vesicle', label: 'Transport Vesicle', cargo: '50-150 nm lipid bubble' },
          { nodeId: 'protein', label: 'Macromolecular Cargo', cargo: 'Enzymes, hormones & receptors' }
        ],
        to: [
          { nodeId: 'real-mem-vesicle', label: 'Clathrin & SNARE Traffic', cargo: 'Endo- & exocytic delivery' },
          { nodeId: 'plasma-membrane', label: 'Membrane Turnover', cargo: 'Balanced lipid surface area' }
        ]
      },
      es: {
        subtitle: 'Carga macromolecular en bloque de vesículas (50–150 nm)',
        simple:
          'Envueltas en pequeñas burbujas de [[fosfolípidos|phospholipid]] de 50 a 150 nanómetros, las cargas en bloque incluyen [[proteínas|protein]] plegadas, hormonas, neurotransmisores y receptores demasiado voluminosos para atravesar canales o bombas iónicas.',
        story:
          'Mientras la [[acuaporina|real-mem-aqp1]] filtra moléculas de agua de 0,28 nanómetros y [[GLUT1|real-mem-glut1]] maneja anillos de glucosa de 0,9 nanómetros, las células intercambian continuamente macromoléculas completas de gran masa. Empaquetar enzimas secretoras, polisacáridos y receptores dentro de [[vesículas|vesicle]] selladas de 50 a 150 nanómetros resguarda la carga frente a la degradación citosólica y permite entregar cientos de moléculas en un solo evento de exocitosis [[SNARE|real-mem-vesicle]] o captarlas por endocitosis con clatrina.',
        blueprint: {
          role: 'Paquetes de carga en bloque envueltos en membrana (50–150 nm) que transportan macromoléculas y lípidos por el perímetro celular',
          arrivesFrom: 'Ligandos macromoleculares extracelulares en fosas de clatrina o [[proteínas|protein]] secretoras empaquetadas en [[vesículas|vesicle]] internas',
          inside: 'Lumen acuoso vesicular con hormonas, enzimas o polisacáridos rodeado por una cubierta de [[fosfolípidos|phospholipid]] de ~5 nm con receptores',
          deliversTo: 'Endosomas citosólicos (por endocitosis) o medio extracelular y renovación de la [[membrana plasmática|plasma-membrane]] (por exocitosis)',
          loop: 'El equilibrio entre membrana retirada por endocitosis y devuelta por exocitosis mantiene constante la superficie celular'
        },
        scientific:
          'Cargas macromoleculares en bloque movilizadas en [[vesículas|vesicle]] lipídicas esféricas de 50–150 nm durante endocitosis y exocitosis dependientes de ATP/GTP ([[transporte vesicular|real-mem-vesicle]]). Transporta [[proteínas|protein]] plegadas (5–30 nm), lipoproteínas, neurotransmisores y polisacáridos de [[pared celular|cell-wall]] muy por encima del límite < 1 nm de [[AQP1|real-mem-aqp1]], [[GLUT1|real-mem-glut1]] y [[Na+/K+-ATPasa|real-mem-nak]], reciclando simultáneamente [[fosfolípidos|phospholipid]] y receptores.',
        from: [
          { nodeId: 'vesicle', label: 'Vesícula de transporte', cargo: 'Burbuja lipídica de 50–150 nm' },
          { nodeId: 'protein', label: 'Carga macromolecular', cargo: 'Enzimas, hormonas y receptores' }
        ],
        to: [
          { nodeId: 'real-mem-vesicle', label: 'Tráfico Clatrina y SNARE', cargo: 'Entrega endo- y exocítica' },
          { nodeId: 'plasma-membrane', label: 'Recambio de membrana', cargo: 'Superficie lipídica equilibrada' }
        ]
      }
    },

    ion_atoms: {
      en: {
        subtitle: 'Atomic Ions (Na+ 0.102 nm vs K+ 0.138 nm), H2O & POPC Headgroup',
        simple:
          'Zooming down to 0.1 nanometers reveals how [[membrane proteins|real-membrane-transport]] tell nearly identical atoms apart: bare sodium (0.102 nm) is noticeably smaller than potassium (0.138 nm), bent [[water|water]] dipoles form tight hydration shells, and polar [[phospholipid|phospholipid]] headgroups align [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]].',
        story:
          'Every macroscopic tonicity shift and -70-millivolt nerve pulse rests on angstrom-scale atomic geometry. Stripped of water, a sodium ion (0.102 nm radius) packs denser surface charge and clutches a larger, tighter coat of bent 104.5-degree [[H2O|water]] dipoles than slightly larger potassium (0.138 nm). That exact 0.036-nanometer difference lets [[Na+/K+-ATPase|real-mem-nak]] binding cavities and ion channels match each cation coordination shell cleanly, while zwitterionic choline-phosphate POPC headgroups ([[P|atom-p]], [[N|atom-n]], [[O|atom-o]]) anchor the bilayer in water.',
        blueprint: {
          role: 'Sub-nanometer atomic geometry underlying osmotic hydration, Na+/K+ selectivity, and amphipathic lipid bilayer stability',
          arrivesFrom: 'Single [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]], and [[P|atom-p]] atoms alongside monovalent Na+ (0.102 nm) and K+ (0.138 nm) cations',
          inside: 'Bent polar [[H2O|water]] dipoles (104.5 deg), distinct Na+ vs K+ hydration shells, and zwitterionic POPC phosphatidylcholine headgroup',
          deliversTo: 'Exact steric and electrostatic recognition inside [[AQP1|real-mem-aqp1]] NPA pores and [[Na+/K+-ATPase|real-mem-nak]] E1/E2 ion pockets',
          loop: 'A 0.036 nm radius difference between Na+ and K+ scales all the way up to resting cell voltage and animal volume homeostasis'
        },
        scientific:
          'Atomic-scale (0.1-1.0 nm) comparison of membrane transport building blocks: bare crystallographic ionic radius of Na+ (0.102 nm; stronger charge density and tighter ~0.36 nm hydration shell) vs K+ (0.138 nm; weaker hydration enthalpy, ~0.33 nm hydrated shell), polar bent [[H2O|water]] (104.5 deg [[H|atom-h]]-[[O|atom-o]]-H angle, 1.85 D dipole traversing [[AQP1|real-mem-aqp1]]), and zwitterionic POPC [[phospholipid|phospholipid]] headgroup combining negatively charged [[phosphate|atom-p]] and positively charged [[nitrogen|atom-n]] choline on a [[carbon|atom-c]] backbone.',
        from: [
          { nodeId: 'atom-o', label: 'Oxygen & Water Dipole', cargo: '104.5 deg H2O hydration shell' },
          { nodeId: 'atom-p', label: 'Phosphate Headgroup', cargo: 'Polar POPC bilayer anchor' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Na+ vs K+ Selectivity', cargo: '0.102 nm vs 0.138 nm fit' },
          { nodeId: 'real-membrane-transport', label: 'Whole Transport Lab', cargo: '0.1 nm atoms -> 50 um osmosis' }
        ]
      },
      es: {
        subtitle: 'Iones atómicos (Na⁺ 0,102 nm vs K⁺ 0,138 nm), H₂O y cabeza POPC',
        simple:
          'Al bajar hasta 0,1 nanómetros se descubre cómo las [[proteínas de membrana|real-membrane-transport]] distinguen átomos casi gemelos: el sodio desnudo (0,102 nm) es menor que el potasio (0,138 nm), el [[agua|water]] angular forma capas de hidratación y las cabezas de [[fosfolípidos|phospholipid]] ordenan [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]].',
        story:
          'Cada cambio macroscópico de tonicidad y cada pulso de −70 milivoltios descansa en geometría atómica de décimas de nanómetro. Desnudo, el ion sodio (radio de 0,102 nm) concentra mayor densidad de carga y retiene una corona más fuerte de dipolos de [[H₂O|water]] de 104,5 grados que el potasio (0,138 nm). Esa diferencia exacta de 0,036 nanómetros permite que la [[Na⁺/K⁺-ATPasa|real-mem-nak]] ajuste con precisión cada bolsillo de coordinación, mientras las cabezas zwitteriónicas POPC ([[P|atom-p]], [[N|atom-n]], [[O|atom-o]]) anclan la bicapa al agua.',
        blueprint: {
          role: 'Geometría atómica subnanométrica que sustenta la hidratación osmótica, la selectividad Na⁺/K⁺ y la estabilidad anfipática de la bicapa',
          arrivesFrom: 'Átomos individuales de [[C|atom-c]], [[H|atom-h]], [[N|atom-n]], [[O|atom-o]] y [[P|atom-p]] junto a cationes Na⁺ (0,102 nm) y K⁺ (0,138 nm)',
          inside: 'Dipolos polares angulares de [[H₂O|water]] (104,5°), capas de hidratación diferenciadas de Na⁺ vs K⁺ y cabeza zwitteriónica fosfatidilcolina POPC',
          deliversTo: 'Reconocimiento estérico y electrostático preciso en los poros NPA de [[AQP1|real-mem-aqp1]] y los sitios E₁/E₂ de [[Na⁺/K⁺-ATPasa|real-mem-nak]]',
          loop: 'Una diferencia de radio de 0,036 nm entre Na⁺ y K⁺ escala hasta el voltaje celular basal y el equilibrio osmótico animal'
        },
        scientific:
          'Comparación atómica (0,1–1,0 nm) de los componentes del transporte de membrana: radio iónico cristalográfico de Na⁺ (0,102 nm; mayor densidad de carga y capa hidratada más rígida ~0,36 nm) frente a K⁺ (0,138 nm; menor entalpía de hidratación, ~0,33 nm hidratado), [[H₂O|water]] polar angular (ángulo [[H|atom-h]]–[[O|atom-o]]–H de 104,5°, 1,85 D en [[AQP1|real-mem-aqp1]]) y cabeza zwitteriónica del [[fosfolípido|phospholipid]] POPC con [[fosfato|atom-p]] negativo y colina de [[nitrógeno|atom-n]] positivo sobre esqueleto de [[carbono|atom-c]].',
        from: [
          { nodeId: 'atom-o', label: 'Oxígeno y dipolo H₂O', cargo: 'Capa de hidratación de 104,5°' },
          { nodeId: 'atom-p', label: 'Cabeza fosfato POPC', cargo: 'Ancla polar de la bicapa' }
        ],
        to: [
          { nodeId: 'real-mem-nak', label: 'Selectividad Na⁺ vs K⁺', cargo: 'Ajuste 0,102 nm vs 0,138 nm' },
          { nodeId: 'real-membrane-transport', label: 'Laboratorio completo', cargo: 'De 0,1 nm a ósmosis de 50 µm' }
        ]
      }
    }
  }
};
