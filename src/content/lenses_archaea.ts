import type { NodeLensMap, PagePartLensMap } from './types.js';

/**
 * 4-Mode Explorer Node Lenses (`simple`, `story`, `blueprint`, `scientific`) for
 * all 13 Phase 10 Archaea Explorer nodes and all 20 Standalone Realistic Part
 * Lenses (`archaea_realistic.html`) in `EN` & `ES` for Domain Archaea &
 * Endosymbiosis (Phase 10).
 *
 * All English strings are 100% pure printable ASCII (`0x20..0x7E`) for clean
 * GPT-SoVITS synthesis, and adhere to Strict Analogy Restraint (`AGENTS.md` Rule 8).
 */
export const ARCHAEA_NODE_LENSES: NodeLensMap = {
  'real-archaea': {
    en: {
      simple:
        'Archaea form the third major domain of cellular life, distinct from both [[bacteria|real-bacterium]] and complex [[eukaryotic cells|real-cell]]. Though compact and nucleus-free, they build unique ether-linked membranes, crystalline protein armor, and eukaryotic-like genetic machinery.',
      story:
        'At first glance an archaeon resembles [[E. coli|real-bacterium]], yet zooming inside overturns the myth that archaea are merely extreme bacteria. Its [[envelope|real-arch-envelope]] replaces [[peptidoglycan|peptidoglycan]] with a hexagonal [[S-layer|real-arch-slayer]] over an ether-linked [[tetraether membrane|real-arch-tetraether]], while [[histones|real-arch-histones]] and a twelve-subunit [[RNA polymerase|real-arch-rnap]] mirror human genetics. In Asgard lineages, [[Lokiactin|real-arch-lokiactin]] tentacles embrace a bacterial partner across an [[endosymbiotic synapse|real-arch-synapse]], tracing the evolutionary origin of [[mitochondria|mitochondrion]] and [[eukaryotes|real-cell]].',
      blueprint:
        'Role: Third domain of cellular life and evolutionary host lineage of [[eukaryotes|real-cell]]; Inputs: Amino acids, H2, light, or inorganic redox substrates across an [[S-layer|real-arch-slayer]] and [[tetraether monolayer|real-arch-tetraether]]; Inside: Circular [[dsDNA|dna]] on [[archaeal histones|real-arch-histones]], 12-subunit [[RNAP|real-arch-rnap]], [[70S ribosomes|real-arch-ribosome]], ATP-driven [[archaellum|real-arch-archaellum]], and Asgard [[Lokiactin|real-arch-lokiactin]]; Outputs: Daughter cells, extremophile survival, and [[endosymbiotic|real-arch-synapse]] origin of [[mitochondria|mitochondrion]].',
      scientific:
        'Domain Archaea (~0.5-1.5 micrometers cell body; ~550 nm Prometheoarchaeum-like Asgard host with 1-3 micrometers branched protrusions; comparative thermoacidophile Sulfolobus acidocaldarius at 80 C, pH 2-3 and halophile Halobacterium salinarum). Characterized by zero [[peptidoglycan|peptidoglycan]], sn-glycerol-1-phosphate [[ether lipids|real-arch-ether-bond]], ATP-hydrolyzing [[archaella|real-arch-archaellum]], [[HMfB histones|real-arch-histones]], TBP/TFB-recruited 12-13 subunit [[RNAP|real-arch-rnap]], and Asgard eukaryotic-signature proteins ([[Lokiactin|real-arch-lokiactin]], profilin, ESCRT-III) mediating syntrophy with [[Rickettsia|real-rickettsia]]-related alphaproteobacteria.'
    },
    es: {
      simple:
        'Las arqueas constituyen el tercer gran dominio de la vida celular, distinto tanto de las [[bacterias|real-bacterium]] como de las [[células eucariotas|real-cell]]. Aunque son compactas y carecen de núcleo, poseen membranas de enlaces éter, armaduras proteicas cristalinas y maquinaria genética afín a la eucariota.',
      story:
        'A simple vista una arquea recuerda a [[E. coli|real-bacterium]], pero observar su interior desmonta el mito de que sean simples bacterias extremas. Su [[envoltura|real-arch-envelope]] sustituye el [[peptidoglicano|peptidoglycan]] por una [[capa S|real-arch-slayer]] hexagonal sobre una [[monocapa tetraéter|real-arch-tetraether]], mientras sus [[histonas|real-arch-histones]] y su [[ARN polimerasa|real-arch-rnap]] de doce subunidades anticipan nuestra genética. En las arqueas Asgard, tentáculos de [[Lokiactina|real-arch-lokiactin]] abrazan a una bacteria socia en una [[sinapsis endosimbiótica|real-arch-synapse]], revelando el origen de la [[mitocondria|mitochondrion]] y de los [[eucariotas|real-cell]].',
      blueprint:
        'Rol: Tercer dominio celular y linaje anfitrión evolutivo de los [[eucariotas|real-cell]] · Entradas: Aminoácidos, H₂, luz o donadores redox a través de la [[capa S|real-arch-slayer]] y la [[monocapa tetraéter|real-arch-tetraether]] · Interior: [[ADNbc|dna]] circular en [[histonas arqueanas|real-arch-histones]], [[ARN polimerasa|real-arch-rnap]] de 12 subunidades, [[ribosomas 70S|real-arch-ribosome]], [[arquelo|real-arch-archaellum]] por ATP y [[Lokiactina|real-arch-lokiactin]] · Salida: Supervivencia extremófila, división celular y origen [[endosimbiótico|real-arch-synapse]] de [[mitocondrias|mitochondrion]].',
      scientific:
        'Dominio Archaea (cuerpo de ~0,5–1,5 µm; arquea Asgard tipo Prometheoarchaeum de ~550 nm con tentáculos de 1–3 µm; comparativa con la termoacidófila Sulfolobus acidocaldarius a 80 °C, pH 2–3 y la halófila Halobacterium salinarum). Definido por ausencia total de [[peptidoglicano|peptidoglycan]], [[lípidos éter|real-arch-ether-bond]] con sn-glicerol-1-fosfato, [[arquelos|real-arch-archaellum]] dependientes de ATP, [[histonas HMfB|real-arch-histones]], [[ARNP|real-arch-rnap]] de 12–13 subunidades con TBP/TFB y proteínas Asgard ([[Lokiactina|real-arch-lokiactin]], profilina, ESCRT-III) en sintrofía con alfaproteobacterias afines a [[Rickettsia|real-rickettsia]].'
    }
  },

  'real-arch-envelope': {
    en: {
      simple:
        'Instead of a bacterial [[peptidoglycan|peptidoglycan]] wall, an archaeal cell wraps itself in a two-part [[envelope|real-arch-envelope]]: a crystalline outer [[S-layer|real-arch-slayer]] of sugar-coated proteins anchored directly into an ether-linked [[lipid membrane|real-arch-tetraether]].',
      story:
        'Because archaea completely lack the [[peptidoglycan|peptidoglycan]] mesh found in [[E. coli|real-bacterium]], antibiotics such as penicillin and host lysozyme pass over them without effect. In its place, interlocking [[S-layer glycoproteins|real-arch-slayer]] form a rigid porous canopy rooted directly into an underlying [[tetraether monolayer|real-arch-tetraether]]. Together these two layers resist crushing osmotic pressure, seal out boiling acid protons, and hold membrane turbines such as [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] and the [[archaellum|real-arch-archaellum]] firmly in place.',
      blueprint:
        'Role: Peptidoglycan-free structural armor, molecular sieve, and bioenergetic boundary (~15-30 nm total); Inputs: Glycosylated SlaA/SlaB [[proteins|protein]] and isoprenoid G1P [[ether lipids|real-arch-ether-bond]] synthesized inside the cytoplasm; Inside: Hexagonal [[S-layer canopy|real-arch-slayer]] tethered by transmembrane stalks over a continuous [[tetraether lipid sheet|real-arch-tetraether]]; Outputs: Beta-lactam immunity, thermal-acid proton insulation, and mechanical anchoring for [[archaella|real-arch-archaellum]] and [[ATP synthases|atp-synthase]].',
      scientific:
        'Bipartite archaeal cell envelope (~15-30 nm overall thickness) completely devoid of bacterial [[peptidoglycan|peptidoglycan]] (rendering archaea intrinsically resistant to beta-lactams, glycopeptides, and lysozyme; select Methanobacteriales instead synthesize pseudomurein). Comprises an outer ~10-25 nm crystalline glycoprotein [[S-layer|real-arch-slayer]] (SlaA/SlaB lattice, PDB 7ZCX) separated by a ~15-20 nm pseudo-periplasm from a ~3.5-4.5 nm [[ether-linked|real-arch-ether-bond]] isoprenoid bilayer or [[tetraether monolayer|real-arch-tetraether]] impermeable to H+ across pH 1-3 and 80-121 C.'
    },
    es: {
      simple:
        'En lugar de una pared bacteriana de [[peptidoglicano|peptidoglycan]], la arquea se protege con una [[envoltura|real-arch-envelope]] doble: una [[capa S|real-arch-slayer]] cristalina de glicoproteínas anclada directamente sobre una [[membrana lipídica|real-arch-tetraether]] unida por enlaces éter.',
      story:
        'Al carecer por completo de la malla de [[peptidoglicano|peptidoglycan]] propia de [[E. coli|real-bacterium]], antibióticos como la penicilina y la lisozima resultan inocuos sobre las arqueas. En su lugar, una rejilla regular de [[glicoproteínas de capa S|real-arch-slayer]] levanta una bóveda rígida y porosa clavada en una [[monocapa tetraéter|real-arch-tetraether]]. Unidas, ambas barreras soportan fuertes presiones osmóticas, frenan la entrada de protones ácidos y fijan motores como el [[arquelo|real-arch-archaellum]] y la [[bacteriorrodopsina|real-arch-bacteriorhodopsin]].',
      blueprint:
        'Rol: Blindaje estructural sin peptidoglicano, tamiz molecular y barrera bioenergética (~15–30 nm) · Entradas: [[Proteínas|protein]] glicosiladas SlaA/SlaB y [[lípidos éter|real-arch-ether-bond]] isoprenoides sintetizados en el citosol · Interior: Celosía hexagonal de [[capa S|real-arch-slayer]] sostenida por tallos sobre una [[lámina tetraéter|real-arch-tetraether]] continua · Salida: Inmunidad a β-lactámicos, aislamiento termoácido y soporte para [[arquelos|real-arch-archaellum]] y [[ATP sintasas|atp-synthase]].',
      scientific:
        'Envoltura celular arqueana bipartita (~15–30 nm de espesor total) totalmente carente de [[peptidoglicano|peptidoglycan]] (resistencia intrínseca a β-lactámicos, glucopéptidos y lisozima; algunos metanógenos producen pseudomureína). Combina una [[capa S|real-arch-slayer]] glicoproteica cristalina de ~10–25 nm (red SlaA/SlaB, PDB 7ZCX) y un pseudoperiplasma de ~15–20 nm sobre una bicapa isoprenoide o [[monocapa tetraéter|real-arch-tetraether]] de ~3,5–4,5 nm con [[enlaces éter|real-arch-ether-bond]] estable a pH 1–3 y 80–121 °C.'
    }
  },

  'real-arch-slayer': {
    en: {
      simple:
        'Covering the outside of most archaea is the S-layer: a single crystal sheet of interlocking sugar-coated [[proteins|protein]] arranged in neat hexagons that protects the cell like tailored chainmail without any [[peptidoglycan|peptidoglycan]].',
      story:
        'Translated on cytoplasmic [[70S ribosomes|real-arch-ribosome]] and secreted across the [[tetraether membrane|real-arch-tetraether]], thousands of identical SlaA glycoproteins self-assemble outside the cell into a seamless hexagonal canopy held aloft by SlaB protein pillars. Uniform nanometer-wide pores admit amino acids, water, and mineral ions while keeping hostile viruses and digestive enzymes outside. Because S-layer tiles carry dense negative sugar chains, they also buffer boiling acid at the surface of thermoacidophiles such as Sulfolobus.',
      blueprint:
        'Role: Self-assembling crystalline glycoprotein exoskeleton and outer molecular sieve; Inputs: Secreted SlaA canopy subunits and transmembrane SlaB stalks translated on [[70S ribosomes|real-arch-ribosome]] and N-glycosylated at the [[membrane|real-arch-tetraether]]; Inside: p6 hexagonal protein lattice (~10-25 nm thick) pierced by uniform 2-8 nm solute pores above a pseudo-periplasm; Outputs: Mechanical cell-shape stabilization, enzyme exclusion, and surface charge protection inside the [[archaeal envelope|real-arch-envelope]].',
      scientific:
        'Paracrystalline surface-layer (S-layer) glycoprotein array (~10-25 nm thick; ~18 nm in Sulfolobus acidocaldarius, cryo-EM SlaA PDB 7ZCX) forming a p6 hexagonal lattice (~20-22 nm unit-cell spacing, ~4-8 nm triangular and hexagonal pores). Outer SlaA canopies (~140 kDa, heavily N-glycosylated) lock onto trimeric coiled-coil SlaB anchors (~45 kDa) spanning the underlying [[tetraether monolayer|real-arch-tetraether]]. Replaces bacterial [[peptidoglycan|peptidoglycan]] as the primary load-bearing wall while functioning as a precision exclusion sieve.'
    },
    es: {
      simple:
        'Recubriendo el exterior de casi todas las arqueas se encuentra la capa S: una sola lámina cristalina de [[proteínas|protein]] glicosiladas encajadas en hexágonos regulares que protege la célula sin necesitar [[peptidoglicano|peptidoglycan]].',
      story:
        'Sintetizadas en los [[ribosomas 70S|real-arch-ribosome]] y secretadas a través de la [[membrana tetraéter|real-arch-tetraether]], miles de glicoproteínas SlaA idénticas se autoensamblan en el exterior formando una bóveda hexagonal sostenida por columnas SlaB. Sus poros nanométricos uniformes dejan pasar aminoácidos, agua e iones minerales mientras bloquean virus y enzimas líticas. Además, sus densas cadenas azucaradas con carga negativa amortiguan la acidez extrema sobre arqueas termófilas como Sulfolobus.',
      blueprint:
        'Rol: Exoesqueleto glicoproteico cristalino autoensamblable y tamiz molecular externo · Entradas: Subunidades SlaA y tallos transmembrana SlaB traducidos en [[ribosomas 70S|real-arch-ribosome]] y N-glicosilados en la [[membrana|real-arch-tetraether]] · Interior: Red proteica hexagonal p6 (~10–25 nm de grosor) perforada por poros regulares de 2–8 nm sobre un pseudoperiplasma · Salida: Estabilidad morfológica, exclusión enzimática y defensa superficial de la [[envoltura arqueana|real-arch-envelope]].',
      scientific:
        'Matriz superficial paracristalina de glicoproteínas (capa S; ~10–25 nm de espesor, ~18 nm en Sulfolobus acidocaldarius, crio-EM de SlaA PDB 7ZCX) organizada en simetría hexagonal p6 (paso reticular ~20–22 nm y poros triangulares y hexagonales de ~4–8 nm). Las bóvedas externas SlaA (~140 kDa, densamente N-glicosiladas) se acoplan a pilares triméricos coiled-coil SlaB (~45 kDa) insertados en la [[monocapa tetraéter|real-arch-tetraether]], sustituyendo al [[peptidoglicano|peptidoglycan]] bacteriano.'
    }
  },

  'real-arch-tetraether': {
    en: {
      simple:
        'Unlike a standard two-layer [[phospholipid|phospholipid]] skin that can melt and separate in boiling water, heat-loving archaea fuse both sides into one continuous tetraether lipid sheet held together by tough [[ether bonds|real-arch-ether-bond]].',
      story:
        'At 80 degrees Celsius and battery-acid pH, an ordinary ester-linked [[phospholipid|phospholipid]] bilayer from [[E. coli|real-bacterium]] or a [[human cell|real-cell]] hydrolyzes and splits down its oily midline. Thermophilic archaea solve this hazard by joining two glycerol headgroups end-to-end with forty-carbon branched isoprenoid chains. Acting like covalent bolts uniting both faces into one continuous sheet, these tetraether lipids never peel apart in boiling acid and block stray protons from leaking across the [[envelope|real-arch-envelope]].',
      blueprint:
        'Role: Heat- and acid-resistant continuous single-sheet plasma membrane (~3.5-4.5 nm); Inputs: C40 biphytanyl isoprenoid chains coupled to sn-glycerol-1-phosphate (G1P) headgroups via [[ether bonds|real-arch-ether-bond]]; Inside: Membrane-spanning glycerol dialkyl glycerol tetraether (GDGT) monolayer tightened by internal cyclopentane rings without a separable midplane; Outputs: Low passive H+ permeability, intact proton-motive force for [[ATP synthase|atp-synthase]], and stable anchoring for [[S-layer|real-arch-slayer]] and [[archaella|real-arch-archaellum]].',
      scientific:
        'Membrane-spanning archaeal monolayer (~3.8-4.5 nm thick) composed of C40 biphytanyl glycerol dialkyl glycerol tetraethers (GDGTs, including caldarchaeol and cyclopentane-rich crenarchaeol). Each bipolar lipid links two opposite-chirality sn-glycerol-1-phosphate (G1P) headgroups via hydrolysis-resistant [[ether linkages|real-arch-ether-bond]] rather than bacterial/eukaryotic sn-glycerol-3-phosphate (G3P) esters. Increasing internal cyclopentane rings (0-8 per GDGT) decreases membrane fluidity and lowers proton permeability by orders of magnitude at 80-121 C and pH 1-3.'
    },
    es: {
      simple:
        'A diferencia de una bicapa común de [[fosfolípidos|phospholipid]] cuyas dos hojas pueden separarse con el calor, las arqueas termófilas fusionan ambas caras en una sola lámina continua de lípidos tetraéter sellada con [[enlaces éter|real-arch-ether-bond]].',
      story:
        'A 80 °C y con acidez extrema, una bicapa corriente de [[fosfolípidos|phospholipid]] con enlaces éster como la de [[E. coli|real-bacterium]] o la de una [[célula humana|real-cell]] se hidroliza y se despega por su plano central. Las arqueas termófilas resuelven el problema enlazando dos cabezas de glicerol extremo con extremo mediante largas cadenas isoprenoides de cuarenta carbonos. Como pernos covalentes que unen ambas caras en una sola lámina continua, estos lípidos tetraéter no se abren en ácido hirviendo y frenan la fuga de protones en la [[envoltura|real-arch-envelope]].',
      blueprint:
        'Rol: Membrana plasmática monocapa continua resistente al calor y al ácido (~3,5–4,5 nm) · Entradas: Cadenas isoprenoides bifitanilo C40 unidas a cabezas sn-glicerol-1-fosfato (G1P) por [[enlaces éter|real-arch-ether-bond]] · Interior: Monocapa transmembrana de tetraéteres GDGT reforzada con anillos de ciclopentano y sin plano de clivaje central · Salida: Mínima permeabilidad pasiva a H⁺, gradiente estable para la [[ATP sintasa|atp-synthase]] y anclaje de [[capa S|real-arch-slayer]] y [[arquelos|real-arch-archaellum]].',
      scientific:
        'Monocapa lipídica transmembrana arqueana (~3,8–4,5 nm de espesor) integrada por glicerol-dialquil-glicerol-tetraéteres (GDGT, como caldarqueol y crenarqueol) con cadenas bifitanilo C40 ramificadas. Cada molécula bipolar une dos cabezas de quiralidad sn-glicerol-1-fosfato (G1P) mediante [[enlaces éter|real-arch-ether-bond]] resistentes a la hidrólisis, opuestos a los ésteres G3P bacterianos y eucariotas. La incorporación de 0 a 8 anillos de ciclopentano reduce la fluidez y la fuga de protones entre 80 y 121 °C a pH 1–3.'
    }
  },

  'real-arch-archaellum': {
    en: {
      simple:
        'The archaellum is a solid, rotating corkscrew filament that propels swimming archaea through water. Although it looks like a bacterial [[flagellum|flagellum]], it evolved separately and burns ATP directly instead of running on proton flow.',
      story:
        'Early microscopes led biologists to assume archaea swam with standard bacterial [[flagella|flagellum]], yet atomic structures proved the archaellum is an entirely separate invention related to bacterial Type IV pili. Rather than letting protons flow down a stator ring, a cytoplasmic six-subunit ArlI ring hydrolyzes magnesium-bound ATP to crank a solid helical cable of glycosylated ArlB subunits right through the [[tetraether membrane|real-arch-tetraether]] and [[S-layer|real-arch-slayer]], switching rotation direction to steer toward food or away from harsh heat.',
      blueprint:
        'Role: ATP-driven rotary swimming propeller homologous to Type IV pili (~10-14 nm filament); Inputs: Cytoplasmic Mg2+-ATP hydrolyzed by the ArlI hexamer plus N-glycosylated ArlB subunits translated on [[70S ribosomes|real-arch-ribosome]]; Inside: Cytoplasmic ArlI ATPase motor, ArlJ transmembrane platform, ArlH/ArlX switch complex, and solid helical ArlB shaft crossing the [[envelope|real-arch-envelope]]; Outputs: Bidirectional clockwise or counterclockwise thrust powering chemotaxis and phototaxis.',
      scientific:
        'Archaeal rotary motility organelle (~10-14 nm diameter solid right-handed helical filament, ~12 nm in Sulfolobus; ArlB/FlaB cryo-EM PDB 7OFQ) evolutionarily unrelated to the ~20 nm hollow FliC bacterial [[flagellum|flagellum]] and homologous instead to Type IV pili. Torque generation is powered directly by Mg2+-ATP hydrolysis within the cytoplasmic hexameric AAA+ ATPase ArlI (PDB 4IHQ), coupled through the polytopic membrane platform ArlJ and regulatory ArlH/ArlX ring to rotate the glycosylated filament clockwise or counterclockwise.'
    },
    es: {
      simple:
        'El arquelo es un filamento macizo y helicoidal que gira para impulsar a las arqueas en el agua. Aunque recuerda al [[flagelo|flagellum]] bacteriano, evolucionó de forma independiente y consume ATP directamente en vez de usar un flujo de protones.',
      story:
        'Los primeros microscopios hicieron pensar que las arqueas nadaban con [[flagelos|flagellum]] bacterianos comunes, pero su estructura atómica demostró que el arquelo es una invención distinta emparentada con los pili tipo IV. En lugar de aprovechar el paso de protones por un estator, un anillo citoplasmático hexamérico ArlI hidroliza ATP unido a magnesio para hacer girar un cable macizo de subunidades ArlB glicosiladas a través de la [[monocapa tetraéter|real-arch-tetraether]] y la [[capa S|real-arch-slayer]], invirtiendo el giro para orientarse hacia nutrientes.',
      blueprint:
        'Rol: Hélice rotatoria impulsada por ATP homóloga a pili tipo IV (filamento de ~10–14 nm) · Entradas: Mg²⁺·ATP citoplasmático hidrolizado por el hexámero ArlI y subunidades ArlB traducidas en [[ribosomas 70S|real-arch-ribosome]] · Interior: Motor ATPasa ArlI, plataforma transmembrana ArlJ, anillo regulador ArlH/ArlX y eje helicoidal macizo ArlB atravesando la [[envoltura|real-arch-envelope]] · Salida: Empuje rotatorio reversible para quimiotaxis y fototaxis.',
      scientific:
        'Orgánulo rotatorio de movilidad arqueano (filamento helicoidal dextrógiro macizo de ~10–14 nm de diámetro, ~12 nm en Sulfolobus; crio-EM de ArlB/FlaB PDB 7OFQ), evolutivamente independiente del [[flagelo|flagellum]] bacteriano hueco de FliC (~20 nm) y homólogo a pili tipo IV. El par mecánico deriva directamente de la hidrólisis de Mg²⁺·ATP en la ATPasa hexamérica citoplasmática ArlI (PDB 4IHQ), acoplada a la plataforma de membrana ArlJ y al complejo interruptor ArlH/ArlX.'
    }
  },

  'real-arch-bacteriorhodopsin': {
    en: {
      simple:
        'In salt-loving Halobacterium archaea, dense purple patches of bacteriorhodopsin capture sunlight with a tiny vitamin-A molecule called retinal and pump protons directly across the membrane to power [[ATP synthesis|atp-synthase]] without chlorophyll.',
      story:
        'When dissolved oxygen drops in sunlit hypersaline evaporation ponds, Halobacterium salinarum packs its [[archaeal membrane|real-arch-tetraether]] with crystalline two-dimensional arrays of purple bacteriorhodopsin trimers. Each seven-helix [[protein|protein]] holds a light-sensitive retinal molecule right in its central channel. A single green-yellow photon bends retinal from straight to kinked, flipping nearby acidic amino acids to push one [[hydrogen ion|atom-h]] outward into the brine so neighboring A1A0 [[ATP synthases|atp-synthase]] can spin and refill cellular ATP.',
      blueprint:
        'Role: Chlorophyll-free, light-driven transmembrane proton pump in halophilic archaea; Inputs: Green-yellow solar photons (~568 nm) and cytoplasmic H+ ions; Inside: Seven-transmembrane-helix trimers (PDB 1C3W) housing covalent all-trans-retinal on Lys216 that photoisomerizes to 13-cis, transferring H+ via Asp85 and Asp96 across the [[lipid membrane|real-arch-tetraether]]; Outputs: Electrochemical proton gradient (delta p) driving A1A0 [[ATP synthase|atp-synthase]] under low-oxygen hypersaline conditions.',
      scientific:
        'Halobacterium salinarum purple-membrane light-driven proton pump (bacteriorhodopsin, ~26 kDa monomer arranged in p3 trimeric 2D crystals; X-ray structure PDB 1C3W at 1.55 angstroms resolution with annular archaeal ether lipids). Comprises seven transmembrane alpha-helices enclosing an all-trans-retinal chromophore linked via a protonated Schiff base to Lys216. Photon absorption (~568 nm) induces all-trans to 13-cis isomerization, driving unidirectional H+ translocation via Asp85 (release) and Asp96 (cytoplasmic reprotonation) at ~1 H+ per photocycle to fuel A1A0 [[ATP synthase|atp-synthase]].'
    },
    es: {
      simple:
        'En la arquea halófila Halobacterium, densos parches púrpura de bacteriorrodopsina capturan luz solar con una pequeña molécula derivada de la vitamina A llamada retinal y bombean protones hacia fuera para alimentar la [[síntesis de ATP|atp-synthase]] sin clorofila.',
      story:
        'Cuando escasea el oxígeno en salinas soleadas, Halobacterium salinarum tapiza su [[membrana arqueana|real-arch-tetraether]] con cristales bidimensionales de trímeros púrpura de bacteriorrodopsina. Cada [[proteína|protein]] de siete hélices encierra en su centro una molécula de retinal fotosensible. Un solo fotón verde-amarillo dobla el retinal, acciona aminoácidos ácidos internos y expulsa un [[protón|atom-h]] hacia la salmuera para que las [[ATP sintasas|atp-synthase]] A₁A₀ vecinas giren y regeneren ATP.',
      blueprint:
        'Rol: Bomba transmembrana de protones activada por luz sin clorofila en arqueas halófilas · Entradas: Fotones solares verde-amarillos (~568 nm) y protones H⁺ citoplasmáticos · Interior: Trímeros de siete hélices transmembrana (PDB 1C3W) con todo-trans-retinal unido a Lys216 que fotoisomeriza a 13-cis transfiriendo H⁺ vía Asp85 y Asp96 por la [[membrana lipídica|real-arch-tetraether]] · Salida: Gradiente electroquímico de protones que impulsa la [[ATP sintasa|atp-synthase]] A₁A₀.',
      scientific:
        'Bomba protónica fotoactivada de la membrana púrpura de Halobacterium salinarum (bacteriorrodopsina, monómero de ~26 kDa en cristales bidimensionales triméricos p3; estructura cristalográfica PDB 1C3W a 1,55 Å con lípidos éter anulares). Consta de siete hélices α transmembrana que albergan todo-trans-retinal unido por base de Schiff protonada a Lys216. La absorción a ~568 nm induce isomerización 13-cis y transloca 1 H⁺ por fotociclo mediante Asp85 y Asp96 para energizar la [[ATP sintasa|atp-synthase]] A₁A₀.'
    }
  },

  'real-arch-histones': {
    en: {
      simple:
        'Many archaea wrap their circular [[DNA|dna]] around compact spool proteins called archaeal histones - the direct evolutionary ancestors of the [[histones|histone]] that package chromosomes inside human cells.',
      story:
        'While [[E. coli|real-bacterium]] bends its chromosome with bacterial HU proteins, Euryarchaeota and Asgard archaea pack their circular [[dsDNA|dna]] onto true histone-fold dimers such as HMfB. Instead of stopping at separate eight-protein beads like [[eukaryotes|real-cell]], archaeal histone dimers stack end-to-end into a flexible slinky-like hypernucleosome coil. This elastic wrapping shields genes against heat denaturation in boiling vents while unzipping smoothly whenever twelve-subunit [[archaeal RNAP|real-arch-rnap]] needs to read a promoter.',
      blueprint:
        'Role: Ancestral histone-fold chromatin packaging polymer and transcriptional gate; Inputs: Circular [[dsDNA|dna]] and ~7-8 kDa HMfB-family histone monomers translated on [[70S ribosomes|real-arch-ribosome]]; Inside: Continuously stacked histone dimers (PDB 5T5K) forming an ~8 nm slinky-like hypernucleosome wrapping ~30 bp per dimer; Outputs: Thermal DNA stabilization, chromosome compaction, and direct evolutionary precursor to octameric eukaryotic [[histones|histone]].',
      scientific:
        'Archaeal histone-DNA hypernucleosome (~8 nm superhelical diameter; Methanothermus fervidus HMfB-DNA X-ray crystal structure PDB 5T5K). Unlike bacterial HU/H-NS nucleoid-associated proteins or discrete eukaryotic 147 bp [[histone|histone]] octamers (H2A/H2B/H3/H4), archaeal ~7-8 kDa histone-fold dimers lack long N-terminal tails and polymerize into variable-length left-handed solenoids wrapping ~30 bp per dimer (~60 bp per tetramer) around circular [[dsDNA|dna]], regulating [[archaeal RNAP|real-arch-rnap]] promoter accessibility.'
    },
    es: {
      simple:
        'Muchas arqueas enrollan su [[ADN|dna]] circular alrededor de proteínas compactas llamadas histonas arqueanas: el ancestro evolutivo directo de las [[histonas|histone]] que empaquetan los cromosomas humanos.',
      story:
        'Mientras [[E. coli|real-bacterium]] pliega su cromosoma con proteínas bacterianas HU, las euriarqueas y arqueas Asgard enrollan su [[ADNbc|dna]] circular en verdaderos dímeros con pliegue de histona como HMfB. En lugar de detenerse en cuentas separadas de ocho piezas como los [[eucariotas|real-cell]], los dímeros arqueanos se apilan en un hipernucleosoma helicoidal continuo y flexible. Este enrollamiento protege los genes frente al calor extremo y se abre con suavidad cuando la [[ARN polimerasa|real-arch-rnap]] lee un promotor.',
      blueprint:
        'Rol: Polímero ancestral de cromatina con pliegue de histona y compuerta transcripcional · Entradas: [[ADNbc|dna]] circular y monómeros de histona tipo HMfB (~7–8 kDa) sintetizados en [[ribosomas 70S|real-arch-ribosome]] · Interior: Dímeros apilados en continuo (PDB 5T5K) en un hipernucleosoma de ~8 nm que envuelve ~30 pb por dímero · Salida: Protección térmica del ADN, compactación genómica y precursor evolutivo de las [[histonas|histone]] octaméricas eucariotas.',
      scientific:
        'Hipernucleosoma de histonas arqueanas y ADN (~8 nm de diámetro superhelicoidal; estructura cristalográfica HMfB–ADN de Methanothermus fervidus PDB 5T5K). A diferencia de HU/H-NS bacterianas o los octámeros discretos de [[histonas|histone]] eucariotas (147 pb), los dímeros arqueanos de ~7–8 kDa carecen de largas colas N-terminales y polimerizan en solenoides levógiros variables (~30 pb por dímero, ~60 pb por tetrámero) sobre [[ADNbc|dna]] circular modulando el acceso de la [[ARNP|real-arch-rnap]].'
    }
  },

  'real-arch-rnap': {
    en: {
      simple:
        'To copy [[DNA|dna]] genes into [[RNA|rna]], archaea use a twelve-subunit RNA polymerase guided by TBP and TFB helper proteins - closely resembling human RNA Polymerase II rather than the simpler five-subunit [[bacterial enzyme|rna-polymerase]].',
      story:
        'Looking at how archaea read their genome reveals how closely they stand to [[eukaryotes|real-cell]]. Whereas [[E. coli|real-bacterium]] relies on a compact five-subunit [[RNA polymerase|rna-polymerase]] guided by sigma factors, archaea recruit a twelve-to-thirteen-subunit crab-claw enzyme onto TATA-box promoters using eukaryotic-like TBP and TFB initiation factors. Because its active cleft differs structurally from bacterial polymerase, rifampicin fails to block archaeal transcription as fresh [[mRNA|rna]] spools directly into waiting [[70S ribosomes|real-arch-ribosome]].',
      blueprint:
        'Role: Eukaryotic-like multi-subunit DNA-dependent RNA polymerase (~14 nm clamp); Inputs: Circular [[dsDNA|dna]] unspooled from [[archaeal histones|real-arch-histones]], ribonucleoside triphosphates (NTPs), Mg2+, and TBP/TFB/TFE initiation factors; Inside: 12-13 subunit catalytic core (PDB 4V1O / 2PMZ) recognizing TATA/BRE promoter elements and catalyzing 5-to-3 phosphodiester polymerization; Outputs: Single-stranded [[mRNA|rna]], rRNA, and tRNA transcripts fed directly to cytoplasmic [[70S ribosomes|real-arch-ribosome]].',
      scientific:
        'Single multi-subunit archaeal DNA-dependent RNA polymerase (12-13 subunits, ~380-400 kDa, ~14 nm diameter; Sulfolobus crystal structures PDB 2PMZ and PDB 4V1O / 4V8S). Structurally homologous to eukaryotic RNAP II (including Rpo4/Rpo7 stalk matching Rpb4/Rpb7) rather than the 5-subunit bacterial core [[RNA polymerase|rna-polymerase]]. Promoter recruitment requires TATA-binding protein (TBP) and transcription factor B (TFB, homologous to TFIIB) at TATA/BRE sites, exhibiting intrinsic resistance to bacterial rifampicin.'
    },
    es: {
      simple:
        'Para copiar genes de [[ADN|dna]] en [[ARN|rna]], las arqueas emplean una ARN polimerasa de doce subunidades guiada por las proteínas TBP y TFB, muy parecida a la ARN polimerasa II humana y distinta de la [[enzima bacteriana|rna-polymerase]] de cinco piezas.',
      story:
        'Observar cómo las arqueas leen su genoma evidencia su parentesco directo con los [[eucariotas|real-cell]]. Mientras [[E. coli|real-bacterium]] depende de una [[ARN polimerasa|rna-polymerase]] de cinco subunidades dirigida por factores sigma, las arqueas reclutan una enzima de doce a trece subunidades en promotores TATA mediante factores TBP y TFB análogos a los nuestros. Por esa arquitectura distinta, la rifampicina no bloquea su transcripción mientras el [[ARNm|rna]] naciente pasa directo a los [[ribosomas 70S|real-arch-ribosome]].',
      blueprint:
        'Rol: ARN polimerasa multisubunidad de tipo eucariota dependiente de ADN (pinza de ~14 nm) · Entradas: [[ADNbc|dna]] desenrollado de [[histonas arqueanas|real-arch-histones]], ribonucleótidos NTP, Mg²⁺ y factores TBP/TFB/TFE · Interior: Núcleo catalítico de 12–13 subunidades (PDB 4V1O / 2PMZ) unido a motivos TATA/BRE sintetizando hebras 5′→3′ · Salida: Transcritos de [[ARNm|rna]], ARNr y ARNt entregados directamente a los [[ribosomas 70S|real-arch-ribosome]].',
      scientific:
        'Única ARN polimerasa arqueana multisubunidad dependiente de ADN (12–13 subunidades, ~380–400 kDa, ~14 nm; estructuras cristalográficas de Sulfolobus PDB 2PMZ y PDB 4V1O / 4V8S). Homóloga estructural de la ARN polimerasa II eucariota (con tallo Rpo4/Rpo7 equivalente a Rpb4/Rpb7) y alejada del núcleo bacteriano de 5 subunidades de la [[ARN polimerasa|rna-polymerase]]. Requiere TBP y TFB (homólogo de TFIIB) en promotores TATA/BRE y muestra resistencia intrínseca a la rifampicina.'
    }
  },

  'real-arch-ribosome': {
    en: {
      simple:
        'Archaeal ribosomes match the compact 70S size of [[bacterial ribosomes|ribosome-70s]], yet they start every protein with regular methionine and share dozens of specialized proteins with complex [[eukaryotic cells|real-cell]].',
      story:
        'Measuring only 22 nanometers across, the archaeal ribosome looks like a bacterial [[70S ribosome|ribosome-70s]] from a distance, yet its molecular parts form a living mosaic bridging simple and complex cells. As fresh [[mRNA|rna]] emerges from twelve-subunit [[archaeal RNAP|real-arch-rnap]], eukaryotic-like aIF2 and aEF2 factors guide unformylated methionine-tRNA into the peptidyl transferase ribozyme core, building [[S-layer|real-arch-slayer]] tiles, [[histones|real-arch-histones]], and [[Lokiactin|real-arch-lokiactin]] while resisting several bacterial-specific antibiotics.',
      blueprint:
        'Role: Mosaic 70S ribonucleoprotein translator bridging bacterial size and eukaryotic chemistry (~22 nm); Inputs: [[mRNA|rna]] from [[archaeal RNAP|real-arch-rnap]], aminoacyl-tRNAs starting with unformylated Met, GTP, and aIF2/aEF1A/aEF2 factors; Inside: 30S decoding subunit (16S rRNA) and 50S peptidyl-transferase ribozyme (23S/5S rRNA; PDB 4V6U / 1JJ2) housing ~33 archaeal-eukaryotic-specific r-proteins; Outputs: Folded [[proteins|protein]] supplying the [[envelope|real-arch-envelope]], [[archaellum|real-arch-archaellum]], and metabolism.',
      scientific:
        'Archaeal 70S ribosome (~22 nm diameter, ~2.5 MDa; 50S large subunit with 23S/5S rRNA, Haloarcula marismortui 2.4 angstroms PDB 1JJ2; intact 70S PDB 4V6U) combining prokaryotic sedimentation size with eukaryotic-type translation biochemistry. Incorporates ~68 ribosomal proteins (sharing ~33 homologs exclusively with [[eukaryotic|real-cell]] 80S ribosomes rather than bacterial [[70S ribosomes|ribosome-70s]]), initiates with unformylated Met-tRNAi via trimeric aIF2, elongates with diphthamide-modified aEF2, and resists bacterial chloramphenicol and many macrolides.'
    },
    es: {
      simple:
        'Los ribosomas arqueanos conservan el tamaño compacto 70S de los [[ribosomas bacterianos|ribosome-70s]], pero inician cada proteína con metionina normal y comparten decenas de proteínas especializadas con las [[células eucariotas|real-cell]].',
      story:
        'Con apenas 22 nanómetros de diámetro, el ribosoma arqueano parece a distancia un [[ribosoma 70S|ribosome-70s]] bacteriano, pero sus piezas forman un mosaico que une las células simples con las complejas. En cuanto el [[ARNm|rna]] brota de la [[ARN polimerasa|real-arch-rnap]], factores de tipo eucariota como aIF2 y aEF2 introducen metionina sin formilar en el centro ribozimático para fabricar [[capa S|real-arch-slayer]], [[histonas|real-arch-histones]] y [[Lokiactina|real-arch-lokiactin]], resistiendo numerosos antibióticos antibacterianos.',
      blueprint:
        'Rol: Traductor ribonucleoproteico mosaico 70S entre tamaño procariota y química eucariota (~22 nm) · Entradas: [[ARNm|rna]] de la [[ARN polimerasa|real-arch-rnap]], aminoacil-ARNt iniciados con Met no formilada, GTP y factores aIF2/aEF1A/aEF2 · Interior: Subunidad decodificadora 30S (ARNr 16S) y ribozima peptidiltransferasa 50S (ARNr 23S/5S; PDB 4V6U / 1JJ2) con ~33 proteínas compartidas solo con eucariotas · Salida: [[Proteínas|protein]] estructurales y enzimáticas.',
      scientific:
        'Ribosoma arqueano 70S (~22 nm, ~2,5 MDa; subunidad mayor 50S con ARNr 23S/5S de Haloarcula marismortui a 2,4 Å PDB 1JJ2; complejo 70S PDB 4V6U) que combina coeficiente de sedimentación procariota con maquinaria traduccional eucariota. Reúne ~68 proteínas ribosómicas (~33 compartidas exclusivamente con ribosomas 80S de [[eucariotas|real-cell]] frente a los [[70S bacterianos|ribosome-70s]]), inicia con Met-ARNti vía aIF2 trimérico, elonga con aEF2 modificado con diftamida y resiste cloranfenicol y muchos macrólidos.'
    }
  },

  'real-arch-lokiactin': {
    en: {
      simple:
        'Asgard archaea build internal cables of Lokiactin - a close relative of human [[actin filaments|actin-filament]] - that push out long branching tentacles to reach and hold neighboring symbiotic bacteria.',
      story:
        'For decades biologists thought a dynamic [[actin cytoskeleton|actin-filament]] belonged exclusively to complex [[eukaryotes|real-cell]] and [[fungi|real-fungal]]. Deep-sea Asgard archaea shattered that divide: they synthesize Lokiactin monomers regulated by Asgard profilin and gelsolin partners that polymerize into 7-nanometer filaments straight down long cytoplasmic tentacles. By bracing and extending these delicate arms, Lokiactin allows the archaeal host to entangle an aerobic bacterial partner across the [[endosymbiotic synapse|real-arch-synapse]] - the mechanical prelude to engulfing proto-[[mitochondria|mitochondrion]].',
      blueprint:
        'Role: Asgard eukaryotic-signature actin cytoskeleton supporting branched tentacles and partner capture; Inputs: ATP-bound Lokiactin monomers and regulatory LokiProfilin translated on [[70S ribosomes|real-arch-ribosome]]; Inside: Polar double-stranded helical ~7 nm Lokiactin filaments modulated by LokiProfilin (PDB 5ZZB) running inside [[membrane|real-arch-tetraether]]-sheathed extensions; Outputs: Mechanical scaffolding of 1-3 micrometer tentacles and intimate contact geometry across the [[endosymbiotic synapse|real-arch-synapse]].',
      scientific:
        'Asgard archaeal Eukaryotic Signature Protein (ESP) cytoskeleton built from Lokiactin (~42 kDa ATPase sharing ~55-60% sequence identity and near-identical F-actin protofilament architecture with eukaryotic [[actin filaments|actin-filament]], ~7 nm diameter) regulated by Asgard profilin (LokiProfilin-2-actin crystal structure PDB 5ZZB) and gelsolin/cofilin homologs. Cryo-electron tomography of cultured Asgard archaea reveals bundled Lokiactin filaments traversing 1-3 micrometer branched protrusions that mediate physical syntrophy with bacterial partners.'
    },
    es: {
      simple:
        'Las arqueas Asgard construyen cables internos de Lokiactina —pariente directa de los [[filamentos de actina|actin-filament]] humanos— que empujan largos tentáculos ramificados para alcanzar y sostener a bacterias simbióticas vecinas.',
      story:
        'Durante décadas se creyó que un [[citoesqueleto de actina|actin-filament]] dinámico era exclusivo de [[células animales|real-cell]] y [[hongos|real-fungal]]. Las arqueas Asgard marinas rompieron esa frontera: fabrican monómeros de Lokiactina regulados por profilina y gelsolina propias que polimerizan en hebras de 7 nanómetros a lo largo de extensos tentáculos citoplasmáticos. Al sostener y proyectar esos brazos, la Lokiactina permite rodear a una bacteria aerobia en la [[sinapsis endosimbiótica|real-arch-synapse]], preludio mecánico de la captura de la proto-[[mitocondria|mitochondrion]].',
      blueprint:
        'Rol: Citoesqueleto de actina de firma eucariota en arqueas Asgard para tentáculos y captura simbiótica · Entradas: Monómeros de Lokiactina unidos a ATP y LokiProfilina traducidos en [[ribosomas 70S|real-arch-ribosome]] · Interior: Filamentos helicoidales polares de ~7 nm modulados por LokiProfilina (PDB 5ZZB) recorriendo prolongaciones revestidas de [[membrana|real-arch-tetraether]] · Salida: Armazón mecánico de tentáculos de 1–3 µm y contacto estrecho en la [[sinapsis endosimbiótica|real-arch-synapse]].',
      scientific:
        'Citoesqueleto de proteínas de firma eucariota (ESP) en arqueas Asgard constituido por Lokiactina (ATPasa de ~42 kDa con ~55–60 % de identidad y arquitectura de protofilamento casi superponible a la [[actina F|actin-filament]] eucariota, ~7 nm de grosor), regulada por profilina Asgard (complejo LokiProfilina-2–actina PDB 5ZZB) y homólogos de gelsolina/cofilina. La criotomografía electrónica muestra haces de Lokiactina recorriendo tentáculos de 1–3 µm que enlazan socios bacterianos sintróficos.'
    }
  },

  'real-arch-synapse': {
    en: {
      simple:
        'At the endosymbiotic synapse, an Asgard archaeon wraps its [[Lokiactin|real-arch-lokiactin]] tentacles around an oxygen-breathing bacterium, trading waste hydrogen gas for steady respiratory ATP - the partnership that gave birth to [[mitochondria|mitochondrion]].',
      story:
        'How did simple cells jump to the scale of [[yeast|real-fungal]] and [[animal cells|real-cell]]? Across this narrow contact cleft, a slow-growing Asgard archaeon ferments amino acids and releases hydrogen gas and formate into an embracing [[Rickettsia|real-rickettsia]]-related alphaproteobacterium. The bacterium consumes oxygen to run respiration and avoid toxic buildup. Over evolutionary time this syntrophy became a permanent metabolic merger uniting two supply lines under one envelope - archaeal shelter and fermentation H2 in exchange for steady respiratory ATP - transforming the partner into the [[mitochondrion|mitochondrion]].',
      blueprint:
        'Role: Inter-domain syntrophic contact interface driving Entangle -> Engulf -> Endogenize eukaryogenesis; Inputs: Archaeal fermentation H2 and formate from the Asgard [[host|real-archaea]] plus ambient O2 into the alphaproteobacterial partner; Inside: 20-500 nm membrane cleft braced by [[Lokiactin|real-arch-lokiactin]] tentacles and ESCRT-remodeling rings facing bacterial respiratory complexes; Outputs: O2 detoxification, transition from parasitic Tlc1 ATP theft to ANT-like ATP export, and evolutionary birth of [[mitochondria|mitochondrion]].',
      scientific:
        'Syntrophic inter-domain interface (~20-500 nm contact cleft) modeled on Prometheoarchaeum syntrophicum Asgard archaea entangling aerobic alphaproteobacteria phylogenetically related to [[Rickettsia|real-rickettsia]] and proto-[[mitochondria|mitochondrion]]. Amino-acid degradation in the archaeon exports H2 and formate (thermodynamically requiring low H2 partial pressure), consumed by the bacterial electron transport chain reducing O2 to H2O. Progressive tentacle envelopment, ESCRT-mediated membrane closure, and inversion of nucleotide exchange from Tlc1 import to mitochondrial ANT-like ATP export initiated eukaryogenesis.'
    },
    es: {
      simple:
        'En la sinapsis endosimbiótica, una arquea Asgard rodea con sus tentáculos de [[Lokiactina|real-arch-lokiactin]] a una bacteria respiradora de oxígeno, intercambiando hidrógeno residual por ATP constante: la alianza que originó la [[mitocondria|mitochondrion]].',
      story:
        '¿Cómo saltó la vida simple hacia la complejidad de las [[levaduras|real-fungal]] y las [[células animales|real-cell]]? A través de esta estrecha hendidura, una arquea Asgard fermenta aminoácidos y cede hidrógeno y formiato a una alfaproteobacteria emparentada con [[Rickettsia|real-rickettsia]], que consume oxígeno mediante respiración aerobia. Con el tiempo, esta sintrofía se convirtió en una fusión metabólica permanente que unió dos líneas de suministro bajo una misma envoltura —refugio y H₂ fermentativo a cambio de ATP respiratorio continuo—, transformando a la socia en la [[mitocondria|mitochondrion]].',
      blueprint:
        'Rol: Interfaz sintrófica interdominio que impulsa la eucariogénesis (Enredar → Englobar → Endogenizar) · Entradas: H₂ y formiato fermentativos del [[huésped Asgard|real-archaea]] más O₂ ambiental hacia la alfaproteobacteria · Interior: Hendidura de 20–500 nm sostenida por tentáculos de [[Lokiactina|real-arch-lokiactin]] y anillos ESCRT frente a la cadena respiratoria bacteriana · Salida: Detoxificación de O₂, paso del robo Tlc1 a la exportación tipo ANT de ATP y nacimiento de la [[mitocondria|mitochondrion]].',
      scientific:
        'Interfaz sintrófica interdominio (hendidura de ~20–500 nm) inspirada en la arquea Asgard Prometheoarchaeum syntrophicum rodeando alfaproteobacterias aerobias emparentadas con [[Rickettsia|real-rickettsia]] y las proto-[[mitocondrias|mitochondrion]]. La fermentación arqueana de aminoácidos libera H₂ y formiato consumidos por la cadena respiratoria bacteriana dependiente de O₂; el progresivo envolvimiento tentacular, el cierre por ESCRT y el paso del importador Tlc1 a exportadores tipo ANT consolidaron el origen eucariota.'
    }
  },

  'real-arch-ether-bond': {
    en: {
      simple:
        'An ether bond joins each branched lipid tail directly to glycerol through a single [[oxygen atom|atom-o]] bridge. Without the extra side oxygen found in bacterial ester bonds, boiling acid cannot snap the [[archaeal membrane|real-arch-tetraether]] apart.',
      story:
        'Zoom down to 0.14 nanometers inside the [[tetraether monolayer|real-arch-tetraether]] and the deepest chemical divide between domains appears in a single atomic link. [[Bacteria|real-bacterium]] and [[eukaryotes|real-cell]] attach fatty acids to glycerol-3-phosphate via ester bonds whose protruding carbonyl [[oxygen|atom-o]] invites water and acid to cleave the chain. Archaea instead join branched isoprenoid chains to opposite-handed glycerol-1-phosphate via clean [[carbon|atom-c]]-[[oxygen|atom-o]]-[[carbon|atom-c]] ether bridges that shrug off 100-degree acid.',
      blueprint:
        'Role: Hydrolysis-resistant covalent chemical linkage anchoring archaeal membrane tails; Inputs: Isoprenoid geranylgeranyl pyrophosphate chains and sn-glycerol-1-phosphate (G1P) synthesized from [[C|atom-c]], [[H|atom-h]], [[O|atom-o]], and [[P|atom-p]]; Inside: Direct R-O-CH2- ether bridge (~1.43 angstroms C-O bond) lacking the electrophilic carbonyl carbon of bacterial R-CO-O-CH2- esters; Outputs: Extreme chemical stability against thermal, acidic, and alkaline cleavage across the [[tetraether membrane|real-arch-tetraether]].',
      scientific:
        'Covalent archaeal lipid ether linkage (R-O-CH2-, single C-O bond length ~1.43 angstroms, bond dissociation energy ~350 kJ/mol) coupling saturated branched phytanyl or C40 biphytanyl isoprenoid chains to sn-glycerol-1-phosphate (G1P) via geranylgeranylglyceryl phosphate synthase (GGGPS) and DGGGPS. Absence of the electrophilic ester carbonyl group (C=O) present in bacterial and eukaryotic [[phospholipids|phospholipid]] (G3P esters) eliminates acid- and base-catalyzed nucleophilic acyl substitution at 80-121 C and pH 1-3.'
    },
    es: {
      simple:
        'Un enlace éter une cada cola lipídica ramificada directamente al glicerol mediante un único puente de [[oxígeno|atom-o]]. Al carecer del oxígeno lateral típico de los ésteres bacterianos, el ácido hirviendo no logra romper la [[membrana arqueana|real-arch-tetraether]].',
      story:
        'Al acercarse a 0,14 nanómetros dentro de la [[monocapa tetraéter|real-arch-tetraether]], la división química más profunda entre dominios se resume en una sola unión atómica. Las [[bacterias|real-bacterium]] y los [[eucariotas|real-cell]] sujetan ácidos grasos al glicerol-3-fosfato mediante ésteres cuyo [[oxígeno|atom-o]] carbonílico sobresaliente facilita la hidrólisis ácida. Las arqueas enlazan cadenas isoprenoides al glicerol-1-fosfato mediante puentes éter [[carbono|atom-c]]–[[oxígeno|atom-o]]–[[carbono|atom-c]] inmunes al ácido a 100 °C.',
      blueprint:
        'Rol: Unión covalente resistente a la hidrólisis que ancla las colas lipídicas arqueanas · Entradas: Cadenas isoprenoides geranilgeranil-pirofosfato y sn-glicerol-1-fosfato (G1P) formados por [[C|atom-c]], [[H|atom-h]], [[O|atom-o]] y [[P|atom-p]] · Interior: Puente éter directo R–O–CH₂– (enlace C–O de ~1,43 Å) sin el carbono carbonílico electrófilo de los ésteres R–CO–O–CH₂– · Salida: Estabilidad extrema frente a calor, ácido y álcalis en la [[membrana tetraéter|real-arch-tetraether]].',
      scientific:
        'Enlace éter covalente lipídico arqueano (R–O–CH₂–, longitud C–O de ~1,43 Å, energía de disociación ~350 kJ/mol) que une cadenas isoprenoides fitanilo o bifitanilo C40 a sn-glicerol-1-fosfato (G1P) mediante las enzimas GGGPS y DGGGPS. La ausencia del carbonilo éster electrófilo (C=O) característico de los [[fosfolípidos|phospholipid]] G3P bacterianos y eucariotas impide la sustitución nucleofílica acílica en medios ácidos y alcalinos a 80–121 °C.'
    }
  },

  'real-arch-atoms': {
    en: {
      simple:
        'Every exotic structure in an archaeon - from boiling-acid [[tetraether sheets|real-arch-tetraether]] to [[Lokiactin|real-arch-lokiactin]] tentacles - is assembled from the same six core elements: [[carbon|atom-c]], [[hydrogen|atom-h]], [[oxygen|atom-o]], [[nitrogen|atom-n]], [[phosphorus|atom-p]], and [[magnesium|atom-mg]].',
      story:
        'Zooming all the way down to 0.1 nanometers reveals that Domain Archaea invents no new elements; instead it rearranges universal atoms into tougher bonds. [[Carbon|atom-c]] and [[hydrogen|atom-h]] build branched isoprenoid chains and cross-fed H2 gas; single [[oxygen|atom-o]] bridges seal [[ether bonds|real-arch-ether-bond]]; [[nitrogen|atom-n]] anchors [[DNA|dna]] bases and the retinal link inside [[bacteriorhodopsin|real-arch-bacteriorhodopsin]]; [[phosphorus|atom-p]] powers ATP and G1P headgroups; and [[magnesium|atom-mg]] coordinates every ATP hydrolyzed by the [[archaellum|real-arch-archaellum]] and [[RNAP|real-arch-rnap]].',
      blueprint:
        'Role: Atomic building blocks (0.1-0.3 nm) underlying archaeal membranes, bioenergetics, and genetic catalysts; Inputs: Dissolved inorganic ions, amino acids, H2, and CO2 from thermal vents, brines, or sediments; Inside: [[C|atom-c]] isoprenoid backbones, [[H|atom-h]] protons and H2 carriers, [[O|atom-o]] [[ether bridges|real-arch-ether-bond]], [[N|atom-n]] bases and peptide bonds, [[P|atom-p]] G1P/NTP groups, and [[Mg2+|atom-mg]] catalytic cofactors; Outputs: Self-assembling [[proteins|protein]], [[DNA|dna]], [[RNA|rna]], and [[tetraether lipids|real-arch-tetraether]].',
      scientific:
        'Elemental stoichiometry of archaeal biochemistry at 0.1-0.3 nm atomic resolution: [[C|atom-c]] (isoprenoid C40 biphytanyl skeletons, amino acids, nucleobases), [[H|atom-h]] (saturated methyl branches, H2 syntrophic electron shuttle, transmembrane H+ gradients), [[O|atom-o]] (hydrolysis-resistant C-O-C [[ether bonds|real-arch-ether-bond]], phosphate oxygens), [[N|atom-n]] (peptide bonds in [[SlaA|real-arch-slayer]], purines/pyrimidines, Lys216 retinal Schiff base in [[1C3W|real-arch-bacteriorhodopsin]]), [[P|atom-p]] (sn-G1P headgroups, [[dsDNA|dna]]/[[RNA|rna]], ATP), and [[Mg2+|atom-mg]] (essential cofactor in ArlI ATPase, [[RNAP|real-arch-rnap]], and [[70S ribosomes|real-arch-ribosome]]).'
    },
    es: {
      simple:
        'Cada estructura extraordinaria de una arquea —desde las [[láminas tetraéter|real-arch-tetraether]] resistentes al ácido hasta los tentáculos de [[Lokiactina|real-arch-lokiactin]]— se arma con los mismos seis elementos esenciales: [[carbono|atom-c]], [[hidrógeno|atom-h]], [[oxígeno|atom-o]], [[nitrógeno|atom-n]], [[fósforo|atom-p]] y [[magnesio|atom-mg]].',
      story:
        'Al descender hasta 0,1 nanómetros se descubre que el dominio Archaea no inventa elementos nuevos, sino enlaces más firmes con los átomos universales. [[Carbono|atom-c]] e [[hidrógeno|atom-h]] levantan cadenas isoprenoides e impulsan el H₂ sintrófico; puentes de [[oxígeno|atom-o]] sellan los [[enlaces éter|real-arch-ether-bond]]; el [[nitrógeno|atom-n]] sostiene bases de [[ADN|dna]] y el retinal en la [[bacteriorrodopsina|real-arch-bacteriorhodopsin]]; el [[fósforo|atom-p]] energiza el ATP y el G1P; y el [[magnesio|atom-mg]] coordina cada ATP en el [[arquelo|real-arch-archaellum]] y la [[ARNP|real-arch-rnap]].',
      blueprint:
        'Rol: Bloques atómicos (0,1–0,3 nm) que sustentan membranas, bioenergética y catálisis genética arqueanas · Entradas: Iones minerales, aminoácidos, H₂ y CO₂ de fuentes termales, salinas o sedimentos · Interior: Esqueletos de [[C|atom-c]], protones y H₂ de [[H|atom-h]], puentes [[éter de O|atom-o]], bases y péptidos de [[N|atom-n]], fosfatos de [[P|atom-p]] y cofactores [[Mg²⁺|atom-mg]] · Salida: [[Proteínas|protein]], [[ADN|dna]], [[ARN|rna]] y [[lípidos tetraéter|real-arch-tetraether]] autoensamblables.',
      scientific:
        'Estequiometría atómica de la bioquímica arqueana (0,1–0,3 nm): [[C|atom-c]] (esqueletos bifitanilo C40, aminoácidos, nucleobases), [[H|atom-h]] (ramificaciones metilo saturadas, lanzadera sintrófica H₂, gradientes H⁺), [[O|atom-o]] ([[enlaces éter|real-arch-ether-bond]] C–O–C resistentes a la hidrólisis), [[N|atom-n]] (enlaces peptídicos de [[SlaA|real-arch-slayer]], bases y base de Schiff en Lys216 de [[1C3W|real-arch-bacteriorhodopsin]]), [[P|atom-p]] (cabezas sn-G1P, [[ADN|dna]]/[[ARN|rna]], ATP) y [[Mg²⁺|atom-mg]] (cofactor indispensable en ArlI, [[ARNP|real-arch-rnap]] y [[ribosomas 70S|real-arch-ribosome]]).'
    }
  }
};

export const ARCHAEA_PART_LENSES: PagePartLensMap = {
  'archaea_realistic.html': {
    slayer: {
      en: {
        subtitle: 'The Hexagonal Glycoprotein S-Layer Lattice',
        simple:
          'Covering the outside of the archaeon, this crisp hexagonal lattice of sugar-coated [[SlaA proteins|real-arch-slayer]] shields the cell from acid, enzymes, and osmotic stress without a single strand of [[peptidoglycan|peptidoglycan]].',
        story:
          'Fresh SlaA canopy subunits and SlaB anchor pillars arrive from cytoplasmic [[70S ribosomes|real-arch-ribosome]], cross the [[tetraether membrane|real-arch-tetraether]], and receive dense sugar coats before snapping into a seamless hexagonal crystal. Uniform pores admit amino acids and ions into the pseudo-periplasm while barring lytic enzymes and viruses, keeping the archaeon immune to penicillin and lysozyme that shred [[bacterial walls|peptidoglycan]].',
        blueprint: {
          role: 'Self-assembling p6 crystalline glycoprotein armor and molecular sieve of the [[archaeal envelope|real-arch-envelope]]',
          arrivesFrom: 'Translated on [[70S ribosomes|real-arch-ribosome]], exported via Sec, and N-glycosylated at the [[membrane|real-arch-tetraether]]',
          inside: 'Interlocking ~140 kDa SlaA hexagonal canopies (PDB 7ZCX) braced ~18 nm out on trimeric SlaB stalks',
          deliversTo: 'Mechanically stabilizes cell shape, buffers surface pH, and filters solutes for the [[archaeon|real-archaea]]',
          loop: 'Because S-layers lack D-amino-acid peptidoglycan cross-links, beta-lactam antibiotics cannot disrupt assembly'
        },
        scientific:
          'Paracrystalline surface-layer glycoprotein lattice (~18 nm thick in Sulfolobus acidocaldarius; SlaA cryo-EM PDB 7ZCX) exhibiting p6 hexagonal symmetry with ~20-22 nm lattice constants and ~4-8 nm exclusion pores. SlaA ectodomains (~140 kDa) bind non-covalently to ~45 kDa coiled-coil SlaB anchors rooted in the [[tetraether monolayer|real-arch-tetraether]], replacing bacterial [[peptidoglycan|peptidoglycan]] across the [[envelope|real-arch-envelope]].',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Ribosomes', cargo: 'SlaA & SlaB polypeptides' },
          { nodeId: 'real-arch-tetraether', label: 'Tetraether Monolayer', cargo: 'Transmembrane SlaB anchoring' }
        ],
        to: [
          { nodeId: 'real-arch-envelope', label: 'Archaeal Cell Envelope', cargo: 'Hexagonal armor & pore sieve' },
          { nodeId: 'real-arch-slayer', label: 'S-Layer Detail', cargo: 'p6 glycoprotein crystal' }
        ]
      },
      es: {
        subtitle: 'La red hexagonal glicoproteica de la capa S',
        simple:
          'Recubriendo el exterior de la arquea, esta red hexagonal de [[proteínas SlaA|real-arch-slayer]] recubiertas de azúcares protege a la célula frente al ácido, enzimas y presión osmótica sin nada de [[peptidoglicano|peptidoglycan]].',
        story:
          'Las subunidades SlaA y los pilares SlaB salen de los [[ribosomas 70S|real-arch-ribosome]], cruzan la [[membrana tetraéter|real-arch-tetraether]] y reciben cadenas de azúcares antes de ensamblarse en un cristal hexagonal continuo. Sus poros regulares dejan entrar aminoácidos e iones al pseudoperiplasma mientras frenan virus y enzimas digestivas, haciendo a la arquea inmune a la penicilina que rompe las [[paredes bacterianas|peptidoglycan]].',
        blueprint: {
          role: 'Armadura cristalina p6 autoensamblable y tamiz molecular de la [[envoltura arqueana|real-arch-envelope]]',
          arrivesFrom: 'Traducida en [[ribosomas 70S|real-arch-ribosome]], exportada por Sec y N-glicosilada en la [[membrana|real-arch-tetraether]]',
          inside: 'Bóvedas hexagonales SlaA de ~140 kDa (PDB 7ZCX) sostenidas a ~18 nm por pilares triméricos SlaB',
          deliversTo: 'Estabiliza la forma celular, amortigua el pH ácido y filtra nutrientes para la [[arquea|real-archaea]]',
          loop: 'Al carecer de puentes D-peptídicos de peptidoglicano, los antibióticos β-lactámicos resultan ineficaces'
        },
        scientific:
          'Red superficial paracristalina de glicoproteínas (~18 nm de espesor en Sulfolobus acidocaldarius; crio-EM SlaA PDB 7ZCX) con simetría hexagonal p6, paso reticular de ~20–22 nm y poros de exclusión de ~4–8 nm. Las subunidades SlaA (~140 kDa) se fijan a tallos coiled-coil SlaB (~45 kDa) insertados en la [[monocapa tetraéter|real-arch-tetraether]], reemplazando al [[peptidoglicano|peptidoglycan]] bacteriano.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Ribosomas 70S arqueanos', cargo: 'Polipéptidos SlaA y SlaB' },
          { nodeId: 'real-arch-tetraether', label: 'Monocapa tetraéter', cargo: 'Anclaje transmembrana SlaB' }
        ],
        to: [
          { nodeId: 'real-arch-envelope', label: 'Envoltura arqueana', cargo: 'Blindaje hexagonal y tamiz' },
          { nodeId: 'real-arch-slayer', label: 'Detalle de capa S', cargo: 'Cristal glicoproteico p6' }
        ]
      }
    },

    tetraether: {
      en: {
        subtitle: 'The Boiling-Proof Tetraether Monolayer',
        simple:
          'Instead of two separate lipid layers that can peel apart in hot acid, this continuous 4-nanometer [[tetraether sheet|real-arch-tetraether]] links opposite sides together through tough [[ether bonds|real-arch-ether-bond]].',
        story:
          'Conventional ester-linked [[phospholipid|phospholipid]] bilayers in [[bacteria|real-bacterium]] and [[animal cells|real-cell]] split along their hydrophobic center when heated near boiling. Thermophilic archaea span the entire 4-nanometer membrane with single forty-carbon biphytanyl molecules capped at both ends by glycerol-1-phosphate. Bolting both faces into one continuous sheet keeps protons from leaking inward at pH 2 while securely embedding [[bacteriorhodopsin|real-arch-bacteriorhodopsin]], [[ATP synthases|atp-synthase]], and [[S-layer|real-arch-slayer]] anchors.',
        blueprint: {
          role: 'Continuous single-sheet plasma membrane impervious to thermal delamination and acid proton leak',
          arrivesFrom: 'Assembled from C40 biphytanyl isoprenoid chains joined to sn-glycerol-1-phosphate via [[ether bonds|real-arch-ether-bond]]',
          inside: 'Membrane-spanning GDGT monolayer (~4 nm) stiffened by methyl branches and internal cyclopentane rings',
          deliversTo: 'Preserves proton-motive force for [[ATP synthase|atp-synthase]] and anchors the [[archaeal envelope|real-arch-envelope]]',
          loop: 'Higher growth temperatures trigger extra cyclopentane cyclization to tighten lipid packing automatically'
        },
        scientific:
          'Continuous ~3.8-4.5 nm membrane-spanning monolayer of C40 biphytanyl glycerol dialkyl glycerol tetraethers (GDGTs: caldarchaeol and crenarchaeol) linking opposite sn-glycerol-1-phosphate (G1P) headgroups via [[ether bonds|real-arch-ether-bond]]. Unlike bacterial/eukaryotic G3P ester [[phospholipids|phospholipid]], absence of an inter-leaflet midplane plus 0-8 internal cyclopentane rings drastically restricts lateral diffusion and passive H+ flux across 80-121 C and pH 1-3.',
        from: [
          { nodeId: 'real-arch-ether-bond', label: 'G1P Ether Linkages', cargo: 'Hydrolysis-resistant C-O-C joins' },
          { nodeId: 'real-arch-atoms', label: 'C, H, O & P Pools', cargo: 'Branched isoprenoid precursors' }
        ],
        to: [
          { nodeId: 'real-arch-envelope', label: 'Cell Envelope', cargo: 'Continuous 4 nm barrier' },
          { nodeId: 'atp-synthase', label: 'A1A0 ATP Synthase', cargo: 'Insulated proton gradient' }
        ]
      },
      es: {
        subtitle: 'La monocapa tetraéter resistente al hervor',
        simple:
          'En lugar de dos hojas lipídicas separables que pueden despegarse en ácido caliente, esta [[lámina tetraéter|real-arch-tetraether]] continua de 4 nanómetros une ambas caras con firmes [[enlaces éter|real-arch-ether-bond]].',
        story:
          'Las bicapas habituales de [[fosfolípidos|phospholipid]] con enlaces éster en [[bacterias|real-bacterium]] y [[células animales|real-cell]] tienden a separarse por su centro hidrófobo al rozar la ebullición. Las arqueas termófilas cruzan toda la membrana de 4 nanómetros con una sola molécula bifitanilo de cuarenta carbonos rematada por dos cabezas de glicerol-1-fosfato. Unir ambos lados en una lámina continua frena la entrada de protones a pH 2 y sujeta [[bacteriorrodopsina|real-arch-bacteriorhodopsin]], [[ATP sintasas|atp-synthase]] y [[capa S|real-arch-slayer]].',
        blueprint: {
          role: 'Membrana plasmática monocapa continua inmune a la separación térmica y a la fuga de protones',
          arrivesFrom: 'Ensamblada con cadenas isoprenoides bifitanilo C40 unidas a sn-glicerol-1-fosfato por [[enlaces éter|real-arch-ether-bond]]',
          inside: 'Monocapa transmembrana GDGT (~4 nm) compactada por metilos laterales y anillos de ciclopentano',
          deliversTo: 'Mantiene la fuerza protón-motriz para la [[ATP sintasa|atp-synthase]] y ancla la [[envoltura arqueana|real-arch-envelope]]',
          loop: 'Al subir la temperatura, las enzimas añaden más anillos de ciclopentano para endurecer la lámina'
        },
        scientific:
          'Monocapa transmembrana continua (~3,8–4,5 nm) formada por glicerol-dialquil-glicerol-tetraéteres C40 (GDGT: caldarqueol y crenarqueol) con cabezas opuestas de sn-glicerol-1-fosfato (G1P) unidas mediante [[enlaces éter|real-arch-ether-bond]]. Frente a los [[fosfolípidos|phospholipid]] éster G3P, la ausencia de plano de clivaje central y los 0–8 anillos de ciclopentano reducen drásticamente la permeabilidad pasiva a H⁺ a 80–121 °C y pH 1–3.',
        from: [
          { nodeId: 'real-arch-ether-bond', label: 'Enlaces éter G1P', cargo: 'Uniones C–O–C estables' },
          { nodeId: 'real-arch-atoms', label: 'Átomos C, H, O y P', cargo: 'Precursores isoprenoides' }
        ],
        to: [
          { nodeId: 'real-arch-envelope', label: 'Envoltura celular', cargo: 'Barrera continua de 4 nm' },
          { nodeId: 'atp-synthase', label: 'ATP sintasa A₁A₀', cargo: 'Gradiente protónico sellado' }
        ]
      }
    },

    tentacle: {
      en: {
        subtitle: 'Branched Asgard Cytoplasmic Tentacles',
        simple:
          'Reaching several micrometers outward from the compact [[Asgard archaeon|real-archaea]], these thin, branching cytoplasmic arms are stiffened by [[Lokiactin|real-arch-lokiactin]] to catch and cradle nearby symbiotic bacteria.',
        story:
          'Deep-sea Prometheoarchaeum cells are barely 550 nanometers wide, yet they extend delicate branching protrusions up to three micrometers long into surrounding sediment. Bundled [[Lokiactin filaments|real-arch-lokiactin]] push the [[archaeal membrane|real-arch-tetraether]] outward while ESCRT rings sculpt curvature along each neck. By wrapping these extensions tightly around an aerobic [[Rickettsia|real-rickettsia]]-like partner, the archaeon expands its contact surface across the [[endosymbiotic synapse|real-arch-synapse]] and sets the stage for engulfment.',
        blueprint: {
          role: 'Long branched cytoplasmic protrusions mediating partner entanglement and syntrophic exchange',
          arrivesFrom: 'Pushed outward from the ~550 nm [[Asgard cell body|real-archaea]] by polymerizing [[Lokiactin|real-arch-lokiactin]] bundles',
          inside: 'Membrane-sheathed ~80-150 nm tubules packed with ~7 nm [[Lokiactin|real-arch-lokiactin]] cables and profilin regulators',
          deliversTo: 'Envelops the alphaproteobacterial partner to widen the [[endosymbiotic synapse|real-arch-synapse]] contact zone',
          loop: 'Progressive branching and fusion of enveloping arms explains how eukaryotes enclosed [[mitochondria|mitochondrion]]'
        },
        scientific:
          'Long branched extracellular cytoplasmic protrusions (~80-150 nm diameter, ~1-3 micrometers length) imaged by cryo-electron tomography in cultured Asgard archaea (Prometheoarchaeum syntrophicum and Lokiarchaeum ossiferum). Internally scaffolded by bundled ~7 nm [[Lokiactin|real-arch-lokiactin]] filaments (homologous to eukaryotic [[F-actin|actin-filament]]) and bounded by the continuous [[archaeal envelope|real-arch-envelope]], maximizing surface area for interspecies H2/formate transfer across the [[synapse|real-arch-synapse]].',
        from: [
          { nodeId: 'real-arch-lokiactin', label: 'Lokiactin Cytoskeleton', cargo: '7 nm internal support cables' },
          { nodeId: 'real-arch-envelope', label: 'Archaeal Envelope', cargo: 'Flexible outer membrane sheath' }
        ],
        to: [
          { nodeId: 'real-arch-synapse', label: 'Endosymbiotic Synapse', cargo: 'Expanded partner contact area' },
          { nodeId: 'mitochondrion', label: 'Mitochondrial Origin', cargo: 'Entangle-to-engulf geometry' }
        ]
      },
      es: {
        subtitle: 'Tentáculos citoplasmáticos ramificados Asgard',
        simple:
          'Proyectándose varios micrómetros desde el pequeño cuerpo de la [[arquea Asgard|real-archaea]], estos brazos citoplasmáticos ramificados se sostienen con [[Lokiactina|real-arch-lokiactin]] para abrazar bacterias simbióticas cercanas.',
        story:
          'Las células marinas tipo Prometheoarchaeum miden apenas 550 nanómetros de cuerpo, pero lanzan prolongaciones ramificadas de hasta tres micrómetros hacia el sedimento. Haces de [[Lokiactina|real-arch-lokiactin]] empujan hacia fuera la [[membrana arqueana|real-arch-tetraether]] mientras anillos ESCRT modelan su curvatura. Al envolver con estos brazos a una bacteria aerobia afín a [[Rickettsia|real-rickettsia]], la arquea amplía el contacto en la [[sinapsis endosimbiótica|real-arch-synapse]] y prepara el envolvimiento.',
        blueprint: {
          role: 'Prolongaciones citoplasmáticas ramificadas para entrelazar y abrazar socios sintróficos',
          arrivesFrom: 'Impulsadas desde el cuerpo [[Asgard|real-archaea]] de ~550 nm por haces en polimerización de [[Lokiactina|real-arch-lokiactin]]',
          inside: 'Túbulos membranosos de ~80–150 nm recorridos por cables de [[Lokiactina|real-arch-lokiactin]] (~7 nm) y profilina',
          deliversTo: 'Rodean a la alfaproteobacteria socia ampliando la superficie de la [[sinapsis endosimbiótica|real-arch-synapse]]',
          loop: 'La fusión progresiva de brazos envolventes explica la captura evolutiva de la [[mitocondria|mitochondrion]]'
        },
        scientific:
          'Prolongaciones citoplasmáticas ramificadas (~80–150 nm de diámetro, ~1–3 µm de longitud) documentadas por criotomografía en arqueas Asgard cultivadas (Prometheoarchaeum syntrophicum y Lokiarchaeum ossiferum). Armadas por haces de [[Lokiactina|real-arch-lokiactin]] de ~7 nm (homóloga a [[actina F|actin-filament]]) bajo la [[envoltura arqueana|real-arch-envelope]], multiplican la interfaz de intercambio de H₂ y formiato en la [[sinapsis|real-arch-synapse]].',
        from: [
          { nodeId: 'real-arch-lokiactin', label: 'Citoesqueleto de Lokiactina', cargo: 'Cables internos de 7 nm' },
          { nodeId: 'real-arch-envelope', label: 'Envoltura arqueana', cargo: 'Funda membranosa continua' }
        ],
        to: [
          { nodeId: 'real-arch-synapse', label: 'Sinapsis endosimbiótica', cargo: 'Contacto estrecho ampliado' },
          { nodeId: 'mitochondrion', label: 'Origen mitocondrial', cargo: 'Geometría de envolvimiento' }
        ]
      }
    },

    escrt: {
      en: {
        subtitle: 'ESCRT-III Membrane-Remodeling & Scission Rings',
        simple:
          'Spiral rings of ESCRT-III [[proteins|protein]] line the inner face of the [[archaeal membrane|real-arch-tetraether]], tightening membrane necks to pinch off dividing cells and remodel tentacles just like in [[human cells|real-cell]].',
        story:
          'While [[E. coli|real-bacterium]] divides using a bacterial FtsZ ring, crenarchaea like Sulfolobus and Asgard archaea deploy CdvB/ESCRT-III spirals driven by the Vps4 ATPase. These contractile filaments curl along the cytoplasmic surface of the [[envelope|real-arch-envelope]] to narrow division bridges and curve membrane pockets around budding vesicles. Eukaryotes inherited this exact scission machinery intact for endosomal sorting and finishing cytokinesis.',
        blueprint: {
          role: 'Contractile helical membrane-curving and scission complex inherited directly by [[eukaryotes|real-cell]]',
          arrivesFrom: 'ESCRT-III (CdvB) monomers and hexameric Vps4 (CdvC) ATPases translated on [[70S ribosomes|real-arch-ribosome]]',
          inside: 'Concentric spiral filaments assembling on the inner [[membrane|real-arch-tetraether]] leaflet and remodeled by Mg2+-ATP',
          deliversTo: 'Pinches division furrows in Sulfolobus and sculpts membrane necks around Asgard [[synapses|real-arch-synapse]]',
          loop: 'Vps4 ATP hydrolysis extracts individual ESCRT-III subunits to constrict the spiral until membrane fission completes'
        },
        scientific:
          'Archaeal ESCRT-III (CdvB/CdvB1/CdvB2) and AAA+ ATPase Vps4 (CdvC) membrane-scission machinery conserved across TACK and Asgard archaea as the evolutionary precursor to eukaryotic ESCRT complexes. Polymerization of alpha-helical ESCRT-III subunits into inner-leaflet spiral filaments generates negative membrane curvature; stepwise subunit disassembly by hexameric Vps4 hydrolyzing Mg2+-ATP drives neck constriction and membrane fission during cytokinesis and vesicle budding.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Ribosomes', cargo: 'ESCRT-III & Vps4 subunits' },
          { nodeId: 'atom-mg', label: 'Mg2+-ATP Pool', cargo: 'Fuel for Vps4 remodeling' }
        ],
        to: [
          { nodeId: 'real-arch-envelope', label: 'Dividing Membrane Neck', cargo: 'Helical neck constriction' },
          { nodeId: 'real-cell', label: 'Eukaryotic Lineage', cargo: 'Conserved ESCRT scission' }
        ]
      },
      es: {
        subtitle: 'Anillos ESCRT-III de remodelación y corte de membrana',
        simple:
          'Anillos en espiral de [[proteínas|protein]] ESCRT-III recubren la cara interna de la [[membrana arqueana|real-arch-tetraether]], estrechando cuellos membranosos para dividir la célula y moldear tentáculos igual que en las [[células humanas|real-cell]].',
        story:
          'Mientras [[E. coli|real-bacterium]] se divide con un anillo bacteriano FtsZ, las crenarqueas como Sulfolobus y las arqueas Asgard emplean espirales CdvB/ESCRT-III accionadas por la ATPasa Vps4. Estos filamentos contráctiles se enrollan en la cara interna de la [[envoltura|real-arch-envelope]] para cerrar puentes de división y curvar bolsas de membrana. Los eucariotas heredaron intacta esta maquinaria para sus endosomas y la etapa final de la citocinesis.',
        blueprint: {
          role: 'Complejo helicoidal contráctil de curvatura y escisión de membrana heredado por los [[eucariotas|real-cell]]',
          arrivesFrom: 'Subunidades ESCRT-III (CdvB) y ATPasas hexaméricas Vps4 (CdvC) sintetizadas en [[ribosomas 70S|real-arch-ribosome]]',
          inside: 'Filamentos espirales concéntricos sobre la cara interna de la [[membrana|real-arch-tetraether]] remodelados por Mg²⁺·ATP',
          deliversTo: 'Estrangula surcos de división en Sulfolobus y moldea cuellos en las [[sinapsis|real-arch-synapse]] Asgard',
          loop: 'La hidrólisis de ATP en Vps4 extrae subunidades de ESCRT-III y tensa la espiral hasta completar la escisión'
        },
        scientific:
          'Maquinaria arqueana de escisión membranosa ESCRT-III (CdvB/CdvB1/CdvB2) y ATPasa AAA+ Vps4 (CdvC), conservada en arqueas TACK y Asgard como antecesor directo del sistema ESCRT eucariota. La polimerización helicoidal sobre la cara citosólica genera curvatura negativa y el desensamblaje secuencial por Vps4 dependiente de Mg²⁺·ATP cierra el cuello membranoso durante la citocinesis y la gemación vesicular.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Ribosomas 70S arqueanos', cargo: 'Subunidades ESCRT-III y Vps4' },
          { nodeId: 'atom-mg', label: 'Reserva de Mg²⁺·ATP', cargo: 'Energía para Vps4' }
        ],
        to: [
          { nodeId: 'real-arch-envelope', label: 'Cuello de membrana', cargo: 'Constricción y escisión' },
          { nodeId: 'real-cell', label: 'Linaje eucariota', cargo: 'Sistema ESCRT conservado' }
        ]
      }
    },

    extremophile_shell: {
      en: {
        subtitle: 'Comparative Extremophile Shell (Sulfolobus & Halobacterium)',
        simple:
          'Switching to extremophile mode compares how heat-and-acid-loving Sulfolobus and salt-loving Halobacterium harden the [[archaeal envelope|real-arch-envelope]] with hexagonal [[S-layers|real-arch-slayer]], [[tetraether sheets|real-arch-tetraether]], and purple light pumps.',
        story:
          'Archaea thrive both in gentle marine mud and in habitats lethal to nearly all [[bacteria|real-bacterium]] and [[eukaryotes|real-cell]]. In 80-degree volcanic springs at pH 2, Sulfolobus acidocaldarius pairs a tough [[SlaA/SlaB S-layer|real-arch-slayer]] with a continuous [[tetraether monolayer|real-arch-tetraether]] and an ATP-driven [[archaellum|real-arch-archaellum]]. In saturated salt flats, rod-shaped Halobacterium salinarum packs its ether membrane with purple [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] crystals to harvest sunlight directly.',
        blueprint: {
          role: 'Comparative extremophile cell-envelope configuration showcasing thermoacidophile and halophile adaptations',
          arrivesFrom: 'Integrates [[S-layer glycoproteins|real-arch-slayer]], [[ether lipids|real-arch-ether-bond]], and membrane bioenergetic arrays',
          inside: 'Sulfolobus (~1 micrometer, 80 C, pH 2-3) [[tetraether|real-arch-tetraether]] + [[archaellum|real-arch-archaellum]] alongside Halobacterium [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] patches',
          deliversTo: 'Demonstrates why Domain [[Archaea|real-archaea]] surpasses ester-bilayer and [[peptidoglycan|peptidoglycan]] thermal/chemical limits',
          loop: 'Both extremophiles and moderate Asgard hosts share core archaeal ether chemistry and eukaryotic-like genetics'
        },
        scientific:
          'Comparative extremophile archaeal architecture contrasting thermoacidophilic Crenarchaeota (Sulfolobus acidocaldarius, ~0.8-1.5 micrometers lobed coccus, optimal 75-80 C, pH 2-3, ~18 nm p6 SlaA/SlaB [[S-layer|real-arch-slayer]] over C40 [[tetraether monolayer|real-arch-tetraether]]) with extreme halophilic Euryarchaeota (Halobacterium salinarum, ~0.5 x 2-4 micrometers rod in 4-5 M NaCl, acidic surface proteome, purple-membrane [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] PDB 1C3W + A1A0 [[ATP synthase|atp-synthase]]).',
        from: [
          { nodeId: 'real-arch-slayer', label: 'Hexagonal S-Layer', cargo: 'SlaA/SlaB outer crystal' },
          { nodeId: 'real-arch-tetraether', label: 'Ether-Linked Lipids', cargo: 'Boiling-acid & brine seal' }
        ],
        to: [
          { nodeId: 'real-arch-bacteriorhodopsin', label: 'Purple Membrane', cargo: 'Halobacterium light H+ pump' },
          { nodeId: 'real-arch-archaellum', label: 'Sulfolobus Archaellum', cargo: 'ATP-driven motility' }
        ]
      },
      es: {
        subtitle: 'Coraza extremófila comparada (Sulfolobus y Halobacterium)',
        simple:
          'El modo extremófilo compara cómo Sulfolobus en ácido hirviente y Halobacterium en salmuera saturada refuerzan la [[envoltura arqueana|real-arch-envelope]] con [[capas S|real-arch-slayer]], [[monocapas tetraéter|real-arch-tetraether]] y bombas púrpura.',
        story:
          'Las arqueas prosperan tanto en sedimentos templados como en ambientes letales para casi todas las [[bacterias|real-bacterium]] y [[eucariotas|real-cell]]. En manantiales volcánicos a 80 °C y pH 2, Sulfolobus acidocaldarius combina una [[capa S|real-arch-slayer]] SlaA/SlaB con una [[monocapa tetraéter|real-arch-tetraether]] y un [[arquelo|real-arch-archaellum]] movido por ATP. En salinas saturadas, Halobacterium salinarum tapiza su membrana éter con cristales púrpura de [[bacteriorrodopsina|real-arch-bacteriorhodopsin]] para captar luz.',
        blueprint: {
          role: 'Configuración comparada de envoltura extremófila para adaptaciones termoacidófilas y halófilas',
          arrivesFrom: 'Integra [[glicoproteínas de capa S|real-arch-slayer]], [[lípidos éter|real-arch-ether-bond]] y complejos bioenergéticos de membrana',
          inside: 'Sulfolobus (~1 µm, 80 °C, pH 2–3) con [[tetraéter|real-arch-tetraether]] + [[arquelo|real-arch-archaellum]] junto a parches de [[bacteriorrodopsina|real-arch-bacteriorhodopsin]] de Halobacterium',
          deliversTo: 'Muestra por qué [[Archaea|real-archaea]] supera los límites térmicos de bicapas éster y [[peptidoglicano|peptidoglycan]]',
          loop: 'Tanto las extremófilas como las Asgard templadas comparten lípidos éter y genética de tipo eucariota'
        },
        scientific:
          'Arquitectura arqueana extremófila comparada que contrasta Crenarchaeota termoacidófilas (Sulfolobus acidocaldarius, coco lobulado de ~0,8–1,5 µm, óptimo 75–80 °C, pH 2–3, [[capa S|real-arch-slayer]] p6 de ~18 nm sobre [[monocapa tetraéter|real-arch-tetraether]] C40) con Euryarchaeota halófilas extremas (Halobacterium salinarum, bacilo de ~0,5 × 2–4 µm en NaCl 4–5 M, membrana púrpura de [[bacteriorrodopsina|real-arch-bacteriorhodopsin]] PDB 1C3W y [[ATP sintasa|atp-synthase]] A₁A₀).',
        from: [
          { nodeId: 'real-arch-slayer', label: 'Capa S hexagonal', cargo: 'Cristal externo SlaA/SlaB' },
          { nodeId: 'real-arch-tetraether', label: 'Lípidos con enlace éter', cargo: 'Sello ácido y salino' }
        ],
        to: [
          { nodeId: 'real-arch-bacteriorhodopsin', label: 'Membrana púrpura', cargo: 'Bombeo fotoactivado de H⁺' },
          { nodeId: 'real-arch-archaellum', label: 'Arquelo de Sulfolobus', cargo: 'Propulsión por ATP' }
        ]
      }
    },

    archaellum: {
      en: {
        subtitle: 'The Solid Helical ArlB Propeller Filament',
        simple:
          'Spinning outside the [[S-layer|real-arch-slayer]], this 12-nanometer solid helical cable of [[ArlB subunits|real-arch-archaellum]] propels the archaeon forward - built like a Type IV pilus rather than a hollow bacterial [[flagellum|flagellum]].',
        story:
          'Unlike the hollow 20-nanometer bacterial [[flagellum|flagellum]] that threads new bricks up its core, the archaeal propeller grows from its base as ArlB pilin subunits lock into a dense, glycosylated right-handed helix. Cranking directly on ATP torque delivered by the cytoplasmic ArlI motor below the [[tetraether membrane|real-arch-tetraether]], the rigid corkscrew stays intact in 80-degree acidic water and reverses spin to redirect swimming.',
        blueprint: {
          role: 'Solid glycosylated helical swimming propeller crossing the [[archaeal envelope|real-arch-envelope]] (~12 nm wide)',
          arrivesFrom: 'Assembled at the base from pre-pilin-peptidase-processed ArlB subunits translated on [[70S ribosomes|real-arch-ribosome]]',
          inside: 'Tight hydrophobic N-terminal alpha-helix core wrapped by N-glycosylated outer Ig-like ArlB domains (PDB 7OFQ)',
          deliversTo: 'Converts rotary torque from the cytoplasmic ArlI ATPase into bidirectional swimming thrust for [[archaea|real-archaea]]',
          loop: 'Dense N-glycan chains on outer ArlB surfaces protect the filament against boiling acid and proteolysis'
        },
        scientific:
          'Solid ~10-14 nm (~12 nm in Sulfolobus acidocaldarius) right-handed helical [[archaellum|real-arch-archaellum]] filament polymerized from N-glycosylated ArlB (FlaB) class III signal-peptide subunits (cryo-EM PDB 7OFQ, ~5.4 A axial rise, ~108 deg twist). Structurally homologous to bacterial Type IV pili rather than hollow ~20 nm FliC [[flagella|flagellum]], rotating as a rigid propeller driven by base-coupled ArlI/ArlJ ATPase torque.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Ribosomes', cargo: 'ArlB archaellin subunits' },
          { nodeId: 'real-arch-archaellum', label: 'ArlI-ArlJ Base Motor', cargo: 'ATP-driven rotary torque' }
        ],
        to: [
          { nodeId: 'real-archaea', label: 'Motile Archaeon', cargo: 'Bidirectional swimming thrust' },
          { nodeId: 'flagellum', label: 'Bacterial Flagellum', cargo: 'Convergent rotary contrast' }
        ]
      },
      es: {
        subtitle: 'El filamento propulsor helicoidal macizo ArlB',
        simple:
          'Girando fuera de la [[capa S|real-arch-slayer]], este cable helicoidal macizo de 12 nanómetros formado por [[subunidades ArlB|real-arch-archaellum]] impulsa a la arquea con diseño de pilus tipo IV, no de [[flagelo|flagellum]] bacteriano hueco.',
        story:
          'A diferencia del [[flagelo|flagellum]] bacteriano hueco de 20 nanómetros que crece por la punta, la hélice arqueana se ensambla desde su base encajando subunidades ArlB glicosiladas en una espiral dextrógira compacta. Movida por el par del motor ATPasa ArlI bajo la [[membrana tetraéter|real-arch-tetraether]], esta barra rígida soporta agua ácida a 80 °C e invierte el sentido de giro para cambiar de rumbo.',
        blueprint: {
          role: 'Hélice nadadora maciza glicosilada que atraviesa la [[envoltura arqueana|real-arch-envelope]] (~12 nm)',
          arrivesFrom: 'Ensamblada desde la base con subunidades ArlB procesadas y traducidas en [[ribosomas 70S|real-arch-ribosome]]',
          inside: 'Núcleo hidrófobo de hélices α N-terminales rodeado por dominios externos ArlB N-glicosilados (PDB 7OFQ)',
          deliversTo: 'Convierte el par rotatorio de la ATPasa ArlI en empuje natatorio bidireccional para la [[arquea|real-archaea]]',
          loop: 'La densa N-glicosilación superficial protege al filamento frente al ácido caliente y la proteólisis'
        },
        scientific:
          'Filamento propulsor [[arquelar|real-arch-archaellum]] macizo dextrógiro (~10–14 nm; ~12 nm en Sulfolobus acidocaldarius) polimerizado con subunidades N-glicosiladas ArlB (FlaB) con péptido señal de clase III (crio-EM PDB 7OFQ, paso axial ~5,4 Å y giro ~108°). Homólogo estructural de pili tipo IV y no del [[flagelo|flagellum]] hueco de FliC (~20 nm), accionado desde la base por el motor ATPasa ArlI/ArlJ.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Ribosomas 70S arqueanos', cargo: 'Subunidades ArlB' },
          { nodeId: 'real-arch-archaellum', label: 'Motor basal ArlI–ArlJ', cargo: 'Par rotatorio por ATP' }
        ],
        to: [
          { nodeId: 'real-archaea', label: 'Arquea móvil', cargo: 'Empuje natatorio reversible' },
          { nodeId: 'flagellum', label: 'Flagelo bacteriano', cargo: 'Contraste evolutivo convergente' }
        ]
      }
    },

    arli: {
      en: {
        subtitle: 'The ArlI Hexameric ATPase Rotary Motor',
        simple:
          'Docked beneath the [[tetraether membrane|real-arch-tetraether]], this six-subunit ArlI ring splits cytoplasmic ATP molecules into ADP and phosphate to both assemble and spin the [[archaellum|real-arch-archaellum]].',
        story:
          'Whereas a bacterial [[flagellar motor|flagellum]] harvests inward proton current, archaea plug chemical energy straight into motility at the ArlI hexamer. Sitting on the cytoplasmic face of the ArlJ membrane platform, six [[magnesium|atom-mg]]-coordinated ATP pockets fire in waves around the ring. Early cycles push fresh ArlB subunits upward to grow the shaft; once mature, coordinated conformational strokes crank the [[archaellum|real-arch-archaellum]] in steady rotation.',
        blueprint: {
          role: 'Cytoplasmic hexameric ATPase motor fueling both assembly and rotation of the [[archaellum|real-arch-archaellum]]',
          arrivesFrom: 'Six ArlI (FlaI) subunits translated on [[70S ribosomes|real-arch-ribosome]] docked to membrane ArlJ + cytoplasmic Mg2+-ATP',
          inside: 'Asymmetric hexameric crown ring (PDB 4IHQ) cycling sequentially through ATP-bound, hydrolyzing, and ADP-release states',
          deliversTo: 'Transmits rotary mechanical torque through ArlJ into the extracellular ArlB [[archaellum|real-arch-archaellum]] shaft',
          loop: 'Binding of the clock-like ArlH regulator switches ArlI from filament assembly mode into continuous rotary swimming'
        },
        scientific:
          'Bifunctional cytoplasmic hexameric AAA+/PilT-like ATPase ArlI (FlaI, ~60 kDa per protomer, ~360 kDa crown hexamer; Sulfolobus acidocaldarius X-ray structure PDB 4IHQ) driving the [[archaellum|real-arch-archaellum]]. Coordinates [[Mg2+|atom-mg]]-ATP across Walker A/B clefts; asymmetric nucleotide occupancy generates axial strokes for ArlB secretion and rotational torque via polytopic membrane platform ArlJ, directly contrasting with H+-driven bacterial MotAB [[flagellar|flagellum]] stators.',
        from: [
          { nodeId: 'atp-synthase', label: 'A1A0 ATP Synthase', cargo: 'Cytoplasmic Mg2+-ATP fuel' },
          { nodeId: 'atom-mg', label: 'Mg2+ Catalytic Cofactor', cargo: 'Active-site ATP coordination' }
        ],
        to: [
          { nodeId: 'real-arch-archaellum', label: 'ArlB Helical Shaft', cargo: 'Assembly & rotary torque' },
          { nodeId: 'real-arch-tetraether', label: 'ArlJ Membrane Platform', cargo: 'Transmembrane force coupling' }
        ]
      },
      es: {
        subtitle: 'El motor rotatorio ATPasa hexamérico ArlI',
        simple:
          'Acoplado bajo la [[membrana tetraéter|real-arch-tetraether]], este anillo de seis subunidades ArlI parte moléculas de ATP citoplasmático en ADP y fosfato para ensamblar y hacer girar el [[arquelo|real-arch-archaellum]].',
        story:
          'Mientras el [[motor flagelar|flagellum]] bacteriano aprovecha una corriente entrante de protones, las arqueas inyectan energía química directa en el hexámero ArlI. Situado bajo la plataforma transmembrana ArlJ, sus seis bolsillos coordinados con [[magnesio|atom-mg]] hidrolizan ATP en secuencia alrededor del anillo: primero impulsan la salida de subunidades ArlB para construir el eje y luego transmiten el par rotatorio continuo al [[arquelo|real-arch-archaellum]].',
        blueprint: {
          role: 'Motor ATPasa hexamérico citoplasmático que ensambla y hace rotar el [[arquelo|real-arch-archaellum]]',
          arrivesFrom: 'Seis subunidades ArlI (FlaI) de [[ribosomas 70S|real-arch-ribosome]] acopladas a ArlJ y Mg²⁺·ATP citosólico',
          inside: 'Anillo hexamérico asimétrico en corona (PDB 4IHQ) ciclando entre unión de ATP, hidrólisis y salida de ADP + Pᵢ',
          deliversTo: 'Transmite par rotatorio a través de ArlJ hacia el eje extracelular ArlB del [[arquelo|real-arch-archaellum]]',
          loop: 'La unión del regulador ArlH cambia ArlI desde modo de ensamblaje hacia rotación natatoria sostenida'
        },
        scientific:
          'ATPasa hexamérica bifuncional de tipo PilT/AAA+ ArlI (FlaI, ~60 kDa por protómero, ~360 kDa en hexámero; estructura cristalográfica de Sulfolobus acidocaldarius PDB 4IHQ) del [[arquelo|real-arch-archaellum]]. Coordina [[Mg²⁺|atom-mg]]·ATP en motivos Walker A/B para acoplar hidrólisis asimétrica a secreción de ArlB y giro mecánico vía la plataforma de membrana ArlJ, en contraste directo con los estatores protónicos MotAB del [[flagelo|flagellum]] bacteriano.',
        from: [
          { nodeId: 'atp-synthase', label: 'ATP sintasa A₁A₀', cargo: 'Combustible Mg²⁺·ATP' },
          { nodeId: 'atom-mg', label: 'Cofactor Mg²⁺', cargo: 'Coordinación catalítica' }
        ],
        to: [
          { nodeId: 'real-arch-archaellum', label: 'Eje helicoidal ArlB', cargo: 'Ensamblaje y giro mecánico' },
          { nodeId: 'real-arch-tetraether', label: 'Plataforma ArlJ', cargo: 'Acoplamiento transmembrana' }
        ]
      }
    },

    bacteriorhodopsin: {
      en: {
        subtitle: 'The Purple-Membrane Light-Driven Proton Pump',
        simple:
          'Packed into purple crystal patches inside Halobacterium, each [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] protein catches sunlight with a retinal molecule and pumps one proton outward to charge the membrane.',
        story:
          'Without using a trace of chlorophyll or complex plant photosystems, Halobacterium salinarum turns bright sunlight straight into electrical membrane charge. Each purple trimer embeds a single retinal pigment covalently linked to lysine 216 inside seven transmembrane helices. Absorbing a green-yellow photon bends retinal in under a picosecond, triggering a precise proton relay from cytoplasm to brine that powers neighboring A1A0 [[ATP synthases|atp-synthase]].',
        blueprint: {
          role: 'Single-protein, chlorophyll-free solar proton pump arranged in 2D purple-membrane crystals',
          arrivesFrom: 'Solar green-yellow photons (~568 nm), cytoplasmic H+ ions, and covalent all-trans-retinal on Lys216',
          inside: 'Seven-helix trimers (PDB 1C3W) cycling all-trans to 13-cis retinal isomerization across Asp85 and Asp96',
          deliversTo: 'Exports 1 H+ per photon across the [[ether membrane|real-arch-tetraether]] to charge A1A0 [[ATP synthase|atp-synthase]]',
          loop: 'Retinal thermally relaxes back to all-trans within ~10 milliseconds, resetting the channel for the next photon'
        },
        scientific:
          'Archaeal microbial rhodopsin proton pump from Halobacterium salinarum (~26 kDa, 248 residues, 7-TM alpha-helical bundle crystallized in p3 trimers with annular archaeal ether lipids; X-ray structure PDB 1C3W at 1.55 angstroms). Photoisomerization (~568 nm) of Lys216 Schiff-base all-trans-retinal to 13-cis drives directional proton release via Asp85/Glu194-Glu204 and cytoplasmic reprotonation via Asp96 (~1 H+/photocycle), generating transmembrane delta p for A1A0 [[ATP synthase|atp-synthase]].',
        from: [
          { nodeId: 'atom-h', label: 'Cytoplasmic Protons (H+)', cargo: 'Uptake via Asp96' },
          { nodeId: 'real-arch-tetraether', label: 'Halophile Ether Lipids', cargo: 'Annular 2D crystal lattice' }
        ],
        to: [
          { nodeId: 'atp-synthase', label: 'A1A0 ATP Synthase', cargo: 'Light-charged H+ gradient' },
          { nodeId: 'real-arch-bacteriorhodopsin', label: 'Bacteriorhodopsin Node', cargo: 'PDB 1C3W retinal photocycle' }
        ]
      },
      es: {
        subtitle: 'La bomba protónica fotoactivada de la membrana púrpura',
        simple:
          'Empaquetada en parches cristalinos púrpura en Halobacterium, cada proteína de [[bacteriorrodopsina|real-arch-bacteriorhodopsin]] captura luz solar con una molécula de retinal y bombea un protón hacia el exterior para cargar la membrana.',
        story:
          'Sin una gota de clorofila ni fotosistemas complejos, Halobacterium salinarum convierte la luz solar directa en potencial eléctrico de membrana. Cada trímero púrpura aloja un pigmento retinal unido a la lisina 216 dentro de siete hélices transmembrana. Un fotón verde-amarillo curva el retinal en menos de un picosegundo y dispara un relevo de protones hacia la salmuera que alimenta a las [[ATP sintasas|atp-synthase]] A₁A₀ vecinas.',
        blueprint: {
          role: 'Bomba solar de protones de una sola proteína sin clorofila en cristales bidimensionales púrpura',
          arrivesFrom: 'Fotones verde-amarillos (~568 nm), protones H⁺ citoplasmáticos y todo-trans-retinal unido a Lys216',
          inside: 'Trímeros de siete hélices (PDB 1C3W) que alternan todo-trans y 13-cis retinal transfiriendo H⁺ vía Asp85 y Asp96',
          deliversTo: 'Expulsa 1 H⁺ por fotón a través de la [[membrana éter|real-arch-tetraether]] para cargar la [[ATP sintasa|atp-synthase]] A₁A₀',
          loop: 'El retinal vuelve térmicamente a todo-trans en ~10 milisegundos, listo para el siguiente fotón'
        },
        scientific:
          'Bomba protónica rodopsínica microbiana de Halobacterium salinarum (~26 kDa, 248 residuos, haz de 7 hélices α en trímeros p3 con lípidos éter anulares; estructura cristalográfica PDB 1C3W a 1,55 Å). La fotoisomerización (~568 nm) del todo-trans-retinal en base de Schiff (Lys216) a 13-cis impulsa la liberación extracelular vía Asp85/Glu194–Glu204 y la reprotonación citosólica por Asp96 (~1 H⁺/fotociclo) para la [[ATP sintasa|atp-synthase]] A₁A₀.',
        from: [
          { nodeId: 'atom-h', label: 'Protones citosólicos (H⁺)', cargo: 'Entrada vía Asp96' },
          { nodeId: 'real-arch-tetraether', label: 'Lípidos éter halófilos', cargo: 'Matriz cristalina 2D anular' }
        ],
        to: [
          { nodeId: 'atp-synthase', label: 'ATP sintasa A₁A₀', cargo: 'Gradiente H⁺ fotogenerado' },
          { nodeId: 'real-arch-bacteriorhodopsin', label: 'Bacteriorrodopsina', cargo: 'Fotociclo retinal PDB 1C3W' }
        ]
      }
    },

    a_atps: {
      en: {
        subtitle: 'The Archaeal A1A0 Rotary ATP Synthase',
        simple:
          'Embedded in the [[archaeal membrane|real-arch-tetraether]], this rotary [[ATP synthase|atp-synthase]] lets returning protons spin its turbine shaft to press ADP and phosphate into fresh ATP - structurally closer to eukaryotic V-ATPases than bacterial F1F0.',
        story:
          'Whether protons were pumped out by respiratory enzymes in Sulfolobus or by purple [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] in Halobacterium, they rush back inside through the membrane-embedded A0 ring of archaeal A1A0 [[ATP synthase|atp-synthase]]. That proton flow spins a central stalk inside the cytoplasmic A1 catalytic crown, mechanically squeezing ADP and inorganic phosphate together to supply ATP for [[ArlI motility|real-arch-archaellum]], [[transcription|real-arch-rnap]], and [[Lokiactin|real-arch-lokiactin]] growth.',
        blueprint: {
          role: 'Archaeal rotary chemiosmotic turbine synthesizing ATP from transmembrane H+ or Na+ gradients',
          arrivesFrom: 'Inward proton-motive force charged by [[bacteriorhodopsin|real-arch-bacteriorhodopsin]] or ETC + cytoplasmic ADP, Pi, and Mg2+',
          inside: 'Membrane A0 proteolipid c-ring rotor, dual peripheral E/G stators, and cytoplasmic A1 (A3B3) catalytic hexamer',
          deliversTo: 'Supplies charged Mg2+-ATP to [[ArlI|real-arch-archaellum]], [[Lokiactin|real-arch-lokiactin]], ESCRT Vps4, and biosynthesis',
          loop: 'Dual peripheral stalks and A3B3 catalytic architecture link archaeal A1A0 directly to eukaryotic vacuolar V-ATPases'
        },
        scientific:
          'Archaeal A1A0 rotary [[ATP synthase|atp-synthase]] (~600-650 kDa, ~22 nm height; evolutionarily sister to eukaryotic vacuolar V1V0-ATPases and distinct from bacterial/[[mitochondrial|mitochondrion]] F1F0 synthases). Comprises a membrane-embedded A0 stator-a plus proteolipid c-ring coupled via a central DF rotor and two peripheral EG stalks to the cytoplasmic A1 catalytic hexamer (A3B3), converting ~3-4 translocated H+ (or Na+) per synthesized [[Mg2+|atom-mg]]-ATP across the [[ether membrane|real-arch-tetraether]].',
        from: [
          { nodeId: 'real-arch-bacteriorhodopsin', label: 'Proton Gradient Sources', cargo: 'Returning H+ ion current' },
          { nodeId: 'atom-p', label: 'ADP & Phosphate Pool', cargo: 'Phosphorylation substrates' }
        ],
        to: [
          { nodeId: 'real-arch-archaellum', label: 'ArlI Rotary Motor', cargo: 'ATP for swimming torque' },
          { nodeId: 'real-arch-lokiactin', label: 'Lokiactin & Biosynthesis', cargo: 'Cellular ATP supply' }
        ]
      },
      es: {
        subtitle: 'La ATP sintasa rotatoria arqueana A₁A₀',
        simple:
          'Anclada en la [[membrana arqueana|real-arch-tetraether]], esta [[ATP sintasa|atp-synthase]] rotatoria aprovecha el regreso de protones para girar su eje y unir ADP con fosfato en ATP fresco, con arquitectura cercana a las V-ATPasas eucariotas.',
        story:
          'Tanto si los protones salieron impulsados por cadenas respiratorias en Sulfolobus como por la [[bacteriorrodopsina|real-arch-bacteriorhodopsin]] púrpura en Halobacterium, regresan al interior atravesando el anillo A₀ de la [[ATP sintasa|atp-synthase]] A₁A₀. Ese flujo hace rotar un tallo central dentro de la corona catalítica A₁ que prensa mecánicamente ADP y fosfato inorgánico para suministrar ATP al [[arquelo|real-arch-archaellum]], la [[transcripción|real-arch-rnap]] y la [[Lokiactina|real-arch-lokiactin]].',
        blueprint: {
          role: 'Turbina quimiosmótica rotatoria arqueana que sintetiza ATP a partir de gradientes de H⁺ o Na⁺',
          arrivesFrom: 'Fuerza protón-motriz cargada por [[bacteriorrodopsina|real-arch-bacteriorhodopsin]] o cadena respiratoria + ADP, Pᵢ y Mg²⁺',
          inside: 'Rotor proteolipídico A₀ en membrana, dos estatores periféricos E/G y hexámero catalítico citosólico A₁ (A₃B₃)',
          deliversTo: 'Abastece Mg²⁺·ATP al motor [[ArlI|real-arch-archaellum]], [[Lokiactina|real-arch-lokiactin]], Vps4 ESCRT y biosíntesis',
          loop: 'Sus dos tallos periféricos y subunidades A₃B₃ emparentan A₁A₀ directamente con las V-ATPasas eucariotas'
        },
        scientific:
          '[[ATP sintasa|atp-synthase]] rotatoria arqueana A₁A₀ (~600–650 kDa, ~22 nm de altura; hermana evolutiva de las V₁V₀-ATPasas vacuolares eucariotas y distinta de la F₁F₀ bacteriana y [[mitocondrial|mitochondrion]]). Integra el rotor proteolipídico A₀, un eje central DF, dos estatores periféricos EG y la cabeza catalítica A₁ (A₃B₃), convirtiendo ~3–4 H⁺ (o Na⁺) por cada [[Mg²⁺|atom-mg]]·ATP sintetizado a través de la [[membrana éter|real-arch-tetraether]].',
        from: [
          { nodeId: 'real-arch-bacteriorhodopsin', label: 'Fuentes de gradiente H⁺', cargo: 'Flujo entrante de protones' },
          { nodeId: 'atom-p', label: 'Reserva de ADP y fosfato', cargo: 'Sustratos de fosforilación' }
        ],
        to: [
          { nodeId: 'real-arch-archaellum', label: 'Motor rotatorio ArlI', cargo: 'ATP para propulsión' },
          { nodeId: 'real-arch-lokiactin', label: 'Lokiactina y biosíntesis', cargo: 'Suministro celular de ATP' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: 'The Circular Archaeal dsDNA Chromosome',
        simple:
          'Floating openly in the cytoplasm with no nuclear wall, this circular ring of [[double-stranded DNA|dna]] resembles a bacterial chromosome in shape yet replicates and packs like an early [[eukaryotic genome|real-cell]].',
        story:
          'Although an archaeal chromosome forms a closed 1.5-to-4.4-megabase loop with no surrounding nucleus, its information-handling toolkit points unmistakably toward [[eukaryotes|real-cell]]. Replication opens at multiple origins using eukaryotic-like Orc1/Cdc6 initiators and MCM helicases; [[archaeal histones|real-arch-histones]] spool the helix into heat-tolerant coils; and twelve-subunit [[archaeal RNAP|real-arch-rnap]] transcribes active operons right beside waiting [[70S ribosomes|real-arch-ribosome]].',
        blueprint: {
          role: 'Circular prokaryotic-shaped [[dsDNA|dna]] genome copied and read by eukaryotic-like replication and transcription tools',
          arrivesFrom: 'Replicated semiconservatively from single or multiple origins by Orc1/Cdc6, MCM helicase, and DNA polymerases B/D',
          inside: 'Supercoiled ~1.5-4.4 Mbp circular ~2 nm [[dsDNA|dna]] helix compacted onto [[archaeal histones|real-arch-histones]] or Alba/Sul7d',
          deliversTo: 'Templates [[mRNA|rna]], rRNA, and tRNA synthesis for twelve-subunit [[archaeal RNAP|real-arch-rnap]]',
          loop: 'Hyperthermophiles encode reverse gyrase to add positive supercoils that prevent strands from melting above 80 C'
        },
        scientific:
          'Covalently closed circular archaeal [[dsDNA|dna]] chromosome (~1.5-4.4 Mbp; ~4.4 Mbp in Prometheoarchaeum, ~2.2 Mbp in Sulfolobus acidocaldarius; ~2 nm B-DNA duplex). Replicated via eukaryotic-homologous Orc1/Cdc6 origin recognition, hexameric MCM replicative helicase, PCNA sliding clamp, and family B/D DNA polymerases. Compacted by [[HMfB histones|real-arch-histones]] in Euryarchaeota/Asgard or Alba/Cren7 in Crenarchaeota, with positive supercoiling by reverse gyrase in hyperthermophiles.',
        from: [
          { nodeId: 'real-arch-atoms', label: 'C, H, O, N & P Nucleotides', cargo: 'dNTP replication precursors' },
          { nodeId: 'real-arch-histones', label: 'Archaeal Histones', cargo: 'Protective chromatin wrapping' }
        ],
        to: [
          { nodeId: 'real-arch-rnap', label: '12-Subunit Archaeal RNAP', cargo: 'TATA/BRE promoter templates' },
          { nodeId: 'dna', label: 'DNA Double Helix', cargo: '2 nm base-paired blueprint' }
        ]
      },
      es: {
        subtitle: 'El cromosoma circular arqueano de ADNbc',
        simple:
          'Plegado libremente en el citoplasma sin envoltura nuclear, este anillo circular de [[ADN bicatenario|dna]] recuerda en forma a un cromosoma bacteriano, pero se replica y empaqueta como un [[genoma eucariota|real-cell]] temprano.',
        story:
          'Aunque el cromosoma arqueano forma un lazo cerrado de 1,5 a 4,4 megabases sin núcleo que lo encierre, toda su maquinaria genética anuncia a los [[eucariotas|real-cell]]. La replicación arranca en uno o varios orígenes mediante proteínas Orc1/Cdc6 y helicasas MCM; las [[histonas arqueanas|real-arch-histones]] enrollan la hélice frente al calor; y la [[ARN polimerasa|real-arch-rnap]] de doce subunidades transcribe operones justo junto a los [[ribosomas 70S|real-arch-ribosome]].',
        blueprint: {
          role: 'Genoma circular de [[ADNbc|dna]] replicado y transcrito por maquinaria de tipo eucariota',
          arrivesFrom: 'Replicación semiconservativa desde uno o varios orígenes con Orc1/Cdc6, helicasa MCM y ADN polimerasas B/D',
          inside: 'Hélice circular superenrollada de ~1,5–4,4 Mpb (~2 nm) compactada en [[histonas arqueanas|real-arch-histones]] o Alba/Sul7d',
          deliversTo: 'Sirve de molde para [[ARNm|rna]], ARNr y ARNt en la [[ARN polimerasa|real-arch-rnap]] de doce subunidades',
          loop: 'Las hipertermófilas emplean girasa inversa para introducir superenrollamiento positivo que impide la fusión sobre 80 °C'
        },
        scientific:
          'Cromosoma circular cerrado de [[ADNbc|dna]] arqueano (~1,5–4,4 Mpb; ~4,4 Mpb en Prometheoarchaeum, ~2,2 Mpb en Sulfolobus acidocaldarius; doble hélice B de ~2 nm). Replicado por complejos homólogos a eucariotas: reconocimiento de origen Orc1/Cdc6, helicasa hexamérica MCM, abrazadera PCNA y polimerasas B/D. Compactado por [[histonas HMfB|real-arch-histones]] en Euryarchaeota/Asgard o Alba/Cren7 en Crenarchaeota, con girasa inversa en hipertermófilas.',
        from: [
          { nodeId: 'real-arch-atoms', label: 'Nucleótidos (C, H, O, N, P)', cargo: 'Precursores dNTP' },
          { nodeId: 'real-arch-histones', label: 'Histonas arqueanas', cargo: 'Compactación protectora' }
        ],
        to: [
          { nodeId: 'real-arch-rnap', label: 'ARNP de 12 subunidades', cargo: 'Promotores TATA y BRE' },
          { nodeId: 'dna', label: 'Doble hélice de ADN', cargo: 'Código base-apareado de 2 nm' }
        ]
      }
    },

    histone: {
      en: {
        subtitle: 'HMfB Archaeal Histone Hypernucleosome Coils',
        simple:
          'Winding the circular [[DNA|dna]] into an 8-nanometer spiral, these compact [[archaeal histones|real-arch-histones]] protect genes from heat while serving as the direct evolutionary ancestor of human [[histones|histone]].',
        story:
          'Unlike [[E. coli|real-bacterium]], which folds its chromosome with non-histone HU clamps, Euryarchaeota and Asgard archaea build true histone-fold dimers such as HMfB. Rather than stopping at discrete eight-protein spools like [[eukaryotes|real-cell]], dimers stack end-to-end into a flexible slinky-like hypernucleosome around circular [[dsDNA|dna]], stabilizing the helix at high temperature while flexing open whenever [[archaeal RNAP|real-arch-rnap]] transcribes a gene.',
        blueprint: {
          role: 'Polymeric histone-fold chromatin spool compacting and shielding circular [[archaeal dsDNA|dna]]',
          arrivesFrom: 'Translated as ~7-8 kDa HMfB-family monomers on [[70S ribosomes|real-arch-ribosome]] and assembled into dimers',
          inside: 'Continuous left-handed ~8 nm hypernucleosome superhelix (PDB 5T5K) wrapping ~30 bp of [[dsDNA|dna]] per dimer',
          deliversTo: 'Protects genes against thermal melting and gates promoter access for twelve-subunit [[RNAP|real-arch-rnap]]',
          loop: 'Eukaryotes later diversified this archaeal histone fold into H2A, H2B, H3, and H4 octamers with regulatory tails'
        },
        scientific:
          'Archaeal histone-DNA hypernucleosome polymer (~8 nm superhelix; Methanothermus fervidus HMfB-DNA crystal structure PDB 5T5K). Compact ~69-residue histone-fold dimers lacking extended N-terminal tails oligomerize continuously along circular [[dsDNA|dna]] (~30 bp per dimer, ~60 bp per tetramer), providing thermal protection, dynamic transcriptional modulation, and the ancestral core fold of eukaryotic octameric [[histones|histone]].',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Ribosomes', cargo: 'HMfB histone monomers' },
          { nodeId: 'dna', label: 'Circular dsDNA', cargo: '30 bp dimer wrapping sites' }
        ],
        to: [
          { nodeId: 'real-arch-histones', label: 'Hypernucleosome Node', cargo: 'PDB 5T5K slinky solenoid' },
          { nodeId: 'histone', label: 'Eukaryotic Histones', cargo: 'Ancestral histone fold' }
        ]
      },
      es: {
        subtitle: 'Espirales hipernucleosómicas de histonas arqueanas HMfB',
        simple:
          'Enrollando el [[ADN|dna]] circular en una espiral de 8 nanómetros, estas [[histonas arqueanas|real-arch-histones]] protegen los genes del calor y constituyen el ancestro directo de las [[histonas|histone]] humanas.',
        story:
          'A diferencia de [[E. coli|real-bacterium]], que pliega su cromosoma con proteínas HU ajenas a las histonas, las euriarqueas y arqueas Asgard fabrican auténticos dímeros con pliegue de histona como HMfB. En vez de limitarse a octámeros separados como en [[eucariotas|real-cell]], los dímeros se apilan en un hipernucleosoma helicoidal flexible sobre el [[ADNbc|dna]], protegiendo la hélice del calor y abriéndose cuando avanza la [[ARNP|real-arch-rnap]].',
        blueprint: {
          role: 'Carrete polimérico de cromatina con pliegue de histona que compacta y protege el [[ADNbc|dna]] arqueano',
          arrivesFrom: 'Traducidas como monómeros HMfB (~7–8 kDa) en [[ribosomas 70S|real-arch-ribosome]] y ensambladas en dímeros',
          inside: 'Superhélice hipernucleosómica levógira continua de ~8 nm (PDB 5T5K) envolviendo ~30 pb por dímero',
          deliversTo: 'Resguarda los genes frente a la desnaturalización térmica y regula el acceso de la [[ARNP|real-arch-rnap]]',
          loop: 'Los eucariotas diversificaron luego este pliegue en octámeros H2A, H2B, H3 y H4 con colas reguladoras'
        },
        scientific:
          'Polímero hipernucleosómico arqueano histona–ADN (~8 nm de superhélice; estructura cristalográfica HMfB–ADN de Methanothermus fervidus PDB 5T5K). Dímeros compactos de ~69 aminoácidos sin colas N-terminales largas se apilan continuamente sobre [[ADNbc|dna]] circular (~30 pb/dímero, ~60 pb/tetrámero), modulando la transcripción y anticipando el núcleo de las [[histonas|histone]] eucariotas.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Ribosomas 70S arqueanos', cargo: 'Monómeros de histona HMfB' },
          { nodeId: 'dna', label: 'ADNbc circular', cargo: 'Segmentos de 30 pb por dímero' }
        ],
        to: [
          { nodeId: 'real-arch-histones', label: 'Hipernucleosoma', cargo: 'Solenoide flexible PDB 5T5K' },
          { nodeId: 'histone', label: 'Histonas eucariotas', cargo: 'Pliegue ancestral conservado' }
        ]
      }
    },

    rnap: {
      en: {
        subtitle: 'The 12-Subunit Eukaryotic-Like Archaeal RNAP',
        simple:
          'Clamped directly onto unspooled [[DNA|dna]], this twelve-subunit [[archaeal RNA polymerase|real-arch-rnap]] uses eukaryotic-like TBP and TFB helpers to transcribe [[mRNA|rna]] strands - closely mirroring human RNA Polymerase II.',
        story:
          'Where [[E. coli|real-bacterium]] deploys a five-subunit core [[RNA polymerase|rna-polymerase]] guided by sigma factors, archaea recruit a twelve-subunit enzyme that shares its subunit architecture with eukaryotic Pol II. General factors TBP and TFB recognize TATA and BRE promoter sequences, opening the double helix so [[magnesium|atom-mg]] ions at the catalytic cleft stitch ribonucleotides into fresh [[mRNA|rna]] chains immediately grabbed by nearby [[70S ribosomes|real-arch-ribosome]].',
        blueprint: {
          role: 'Single multi-subunit eukaryotic-type DNA-dependent RNA polymerase driving all archaeal transcription',
          arrivesFrom: 'Assembled from 12-13 Rpo subunits and recruited to TATA/BRE [[DNA|dna]] promoters by TBP, TFB, and TFE',
          inside: '~14 nm crab-claw catalytic core + Rpo4/Rpo7 stalk (PDB 4V1O / 2PMZ) coordinating Mg2+ for 5-to-3 RNA synthesis',
          deliversTo: 'Extrudes nascent single-stranded [[mRNA|rna]], rRNA, and tRNA directly into cytoplasmic [[70S ribosomes|real-arch-ribosome]]',
          loop: 'Lacks the bacterial rifampicin-binding pocket, rendering archaeal transcription naturally rifampicin-resistant'
        },
        scientific:
          'Multi-subunit archaeal DNA-dependent RNA polymerase (12-13 subunits, ~380-400 kDa, ~14 nm clamp; Sulfolobus crystal structures PDB 2PMZ and PDB 4V1O / 4V8S). Homologous in subunit composition (including Rpo4/Rpo7 stalk) and TBP/TFB/TFE promoter initiation to eukaryotic RNAP II rather than the 5-subunit bacterial core [[RNA polymerase|rna-polymerase]]. Catalyzes two-[[Mg2+|atom-mg]]-ion phosphodiester polymerization while remaining insensitive to rifampicin.',
        from: [
          { nodeId: 'dna', label: 'TATA/BRE Promoters', cargo: 'Unwrapped dsDNA template' },
          { nodeId: 'atom-mg', label: 'Catalytic Mg2+ & NTPs', cargo: 'Active-site polymerization' }
        ],
        to: [
          { nodeId: 'rna', label: 'Nascent Archaeal mRNA', cargo: 'Fresh 5-to-3 transcripts' },
          { nodeId: 'real-arch-rnap', label: 'Archaeal RNAP Node', cargo: 'PDB 4V1O / 2PMZ complex' }
        ]
      },
      es: {
        subtitle: 'La ARN polimerasa arqueana de 12 subunidades',
        simple:
          'Sujeta sobre el [[ADN|dna]] desenrollado, esta [[ARN polimerasa arqueana|real-arch-rnap]] de doce subunidades usa factores TBP y TFB para transcribir [[ARNm|rna]] con un diseño casi idéntico a la ARN polimerasa II humana.',
        story:
          'Mientras [[E. coli|real-bacterium]] trabaja con una [[ARN polimerasa|rna-polymerase]] de cinco subunidades dirigida por factores sigma, las arqueas emplean una enzima de doce piezas cuya estructura coincide con la Pol II eucariota. Los factores TBP y TFB reconocen promotores TATA y BRE, separan las hebras y permiten que los iones [[magnesio|atom-mg]] enlacen ribonucleótidos en [[ARNm|rna]] leído al instante por [[ribosomas 70S|real-arch-ribosome]].',
        blueprint: {
          role: 'Única ARN polimerasa multisubunidad de tipo eucariota responsable de toda la transcripción arqueana',
          arrivesFrom: 'Ensamblada con 12–13 subunidades Rpo y reclutada a promotores TATA/BRE del [[ADN|dna]] por TBP, TFB y TFE',
          inside: 'Núcleo en pinza de ~14 nm con tallo Rpo4/Rpo7 (PDB 4V1O / 2PMZ) coordinando Mg²⁺ en síntesis 5′→3′',
          deliversTo: 'Libera hebras de [[ARNm|rna]], ARNr y ARNt directamente hacia los [[ribosomas 70S|real-arch-ribosome]] citosólicos',
          loop: 'Carece del bolsillo bacteriano de unión a rifampicina, por lo que resiste de forma natural este antibiótico'
        },
        scientific:
          'ARN polimerasa arqueana multisubunidad dependiente de ADN (12–13 subunidades, ~380–400 kDa, ~14 nm; estructuras cristalográficas de Sulfolobus PDB 2PMZ y PDB 4V1O / 4V8S). Homóloga en arquitectura (incluido el tallo Rpo4/Rpo7) e iniciación TBP/TFB/TFE a la ARN polimerasa II eucariota frente al núcleo bacteriano de 5 subunidades de la [[ARN polimerasa|rna-polymerase]], con catálisis de dos iones [[Mg²⁺|atom-mg]] e insensibilidad a rifampicina.',
        from: [
          { nodeId: 'dna', label: 'Promotores TATA y BRE', cargo: 'Molde de ADNbc expuesto' },
          { nodeId: 'atom-mg', label: 'Mg²⁺ catalítico y NTP', cargo: 'Polimerización 5′→3′' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm arqueano naciente', cargo: 'Transcritos sin núcleo' },
          { nodeId: 'real-arch-rnap', label: 'ARNP arqueana', cargo: 'Complejo PDB 4V1O / 2PMZ' }
        ]
      }
    },

    mrna: {
      en: {
        subtitle: 'Co-Transcriptional Archaeal Messenger RNA',
        simple:
          'Peeling straight off the twelve-subunit [[RNA polymerase|real-arch-rnap]] into the open cytoplasm, single-stranded [[mRNA|rna]] carries gene instructions straight to waiting [[70S ribosomes|real-arch-ribosome]] with no nuclear barrier in between.',
        story:
          'Because archaea have no nuclear envelope separating genes from protein builders, freshly extruded [[mRNA|rna]] threads enter translation the moment they clear the exit channel of [[archaeal RNAP|real-arch-rnap]]. Many archaeal transcripts are completely leaderless, starting right at their first AUG codon without eukaryotic 5-prime caps or spliceosomal introns, allowing rapid synthesis of [[S-layer|real-arch-slayer]] tiles, [[Lokiactin|real-arch-lokiactin]], and stress enzymes.',
        blueprint: {
          role: 'Single-stranded genetic message linking eukaryotic-like [[archaeal RNAP|real-arch-rnap]] directly to [[70S ribosomes|real-arch-ribosome]]',
          arrivesFrom: 'Polymerized 5-to-3 from NTPs off [[dsDNA|dna]] operons inside twelve-subunit [[archaeal RNAP|real-arch-rnap]]',
          inside: 'Uncapped polycistronic or leaderless single-stranded [[RNA|rna]] transcripts lacking spliceosomal introns',
          deliversTo: 'Feeds codons directly into cytoplasmic [[70S ribosomes|real-arch-ribosome]] for co-transcriptional [[protein|protein]] synthesis',
          loop: 'After translation cycles finish, archaeal exosome complexes recycle spent mRNA into nucleotides for fresh rounds'
        },
        scientific:
          'Single-stranded archaeal messenger [[RNA|rna]] transcribed co-transcriptionally in the open cytoplasm by 12-13 subunit [[archaeal RNAP|real-arch-rnap]] using poly(U) intrinsic termination signals. Lacks eukaryotic 7-methylguanosine 5-prime caps and spliceosomal introns (though tRNA/rRNA genes contain bulge-helix-bulge introns spliced by EndA endonuclease). Often organized in Shine-Dalgarno polycistronic operons or leaderless monocistronic transcripts decoded immediately by [[70S ribosomes|real-arch-ribosome]].',
        from: [
          { nodeId: 'real-arch-rnap', label: '12-Subunit Archaeal RNAP', cargo: 'Nascent 5-to-3 transcript' },
          { nodeId: 'dna', label: 'Archaeal Operons', cargo: 'Encoded open reading frames' }
        ],
        to: [
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Ribosomes', cargo: 'Co-transcriptional codons' },
          { nodeId: 'protein', label: 'Archaeal Proteome', cargo: 'Folded structural & enzyme chains' }
        ]
      },
      es: {
        subtitle: 'ARN mensajero arqueano en traducción acoplada',
        simple:
          'Saliendo directamente de la [[ARN polimerasa|real-arch-rnap]] de doce subunidades al citoplasma abierto, el [[ARNm|rna]] monocatenario lleva las instrucciones génicas hasta los [[ribosomas 70S|real-arch-ribosome]] sin barrera nuclear.',
        story:
          'Como las arqueas carecen de membrana nuclear entre sus genes y sus traductores, cada hebra de [[ARNm|rna]] empieza a leerse apenas asoma por el canal de salida de la [[ARNP arqueana|real-arch-rnap]]. Muchos transcritos arqueanos carecen de región líder y arrancan justo en el primer codón AUG, sin caperuza 5′ ni intrones espliceosomales, acelerando la producción de [[capa S|real-arch-slayer]], [[Lokiactina|real-arch-lokiactin]] y enzimas metabólicas.',
        blueprint: {
          role: 'Mensaje genético monocatenario que une la [[ARNP arqueana|real-arch-rnap]] directamente con los [[ribosomas 70S|real-arch-ribosome]]',
          arrivesFrom: 'Polimerizado 5′→3′ desde operones de [[ADNbc|dna]] por la [[ARN polimerasa|real-arch-rnap]] de doce subunidades',
          inside: 'Hebras de [[ARN|rna]] policistrónicas o sin líder, sin caperuza 5′ ni intrones espliceosomales',
          deliversTo: 'Entrega codones directamente a [[ribosomas 70S|real-arch-ribosome]] para síntesis cotranscripcional de [[proteínas|protein]]',
          loop: 'Tras varios ciclos de lectura, el exosoma arqueano recicla el ARNm en nucleótidos reutilizables'
        },
        scientific:
          '[[ARN|rna]] mensajero monocatenario arqueano sintetizado cotranscripcionalmente en el citosol abierto por la [[ARNP|real-arch-rnap]] de 12–13 subunidades con terminación intrínseca en tractos poli(U). Carece de caperuza 5′ de 7-metilguanosina y de intrones espliceosomales (los intrones en ARNt/ARNr se cortan vía endonucleasa EndA), combinando operones con secuencia Shine-Dalgarno y transcritos sin líder traducidos por [[ribosomas 70S|real-arch-ribosome]].',
        from: [
          { nodeId: 'real-arch-rnap', label: 'ARNP de 12 subunidades', cargo: 'Transcrito 5′→3′ naciente' },
          { nodeId: 'dna', label: 'Operones arqueanos', cargo: 'Marcos de lectura codificantes' }
        ],
        to: [
          { nodeId: 'real-arch-ribosome', label: 'Ribosomas 70S arqueanos', cargo: 'Codones en lectura inmediata' },
          { nodeId: 'protein', label: 'Proteoma arqueano', cargo: 'Cadenas polipeptídicas' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: 'The Mosaic Archaeal 70S Ribosome',
        simple:
          'Measuring 22 nanometers wide like a bacterial [[70S ribosome|ribosome-70s]], this [[archaeal ribosome|real-arch-ribosome]] reads [[mRNA|rna]] using eukaryotic-style initiation factors and regular methionine to build every archaeal [[protein|protein]].',
        story:
          'Docking immediately onto emerging [[mRNA|rna]] strands beside [[archaeal RNAP|real-arch-rnap]], the 30S and 50S subunits lock together around an unformylated methionine initiator tRNA guided by trimeric aIF2. Dozens of ribosomal proteins shared exclusively with [[eukaryotes|real-cell]] stabilize its 23S rRNA ribozyme core, allowing the particle to fold [[S-layer|real-arch-slayer]], [[histones|real-arch-histones]], and [[Lokiactin|real-arch-lokiactin]] even at 80 degrees Celsius.',
        blueprint: {
          role: '22 nm mosaic 70S ribonucleoprotein translator bridging prokaryotic size and eukaryotic translation chemistry',
          arrivesFrom: '16S/23S/5S rRNA + ~68 ribosomal proteins assembling onto [[mRNA|rna]] with Met-tRNAi, GTP, and aIF2/aEF2',
          inside: '30S decoding center and 50S peptidyl-transferase ribozyme (PDB 4V6U / 1JJ2) stabilized by Mg2+ ions',
          deliversTo: 'Synthesizes all archaeal [[proteins|protein]], including [[SlaA|real-arch-slayer]], [[ArlB|real-arch-archaellum]], and [[Lokiactin|real-arch-lokiactin]]',
          loop: 'Eukaryotic-like r-protein contours make archaeal 70S ribosomes resistant to chloramphenicol and many macrolides'
        },
        scientific:
          'Archaeal 70S ribosome (~22 nm, ~2.5 MDa; intact 70S PDB 4V6U and Haloarcula marismortui 50S peptidyl transferase crystal structure PDB 1JJ2 at 2.4 angstroms). Pairs bacterial-scale sedimentation (30S + 50S) with ~33 eukaryotic-shared ribosomal proteins, unformylated Met-tRNAi initiation via aIF2, diphthamide-modified aEF2 elongation, and [[Mg2+|atom-mg]]-stabilized rRNA helices tolerant of hyperthermophilic or 4 M KCl halophilic cytoplasms.',
        from: [
          { nodeId: 'rna', label: 'Archaeal mRNA & tRNAs', cargo: 'Codons & unformylated Met' },
          { nodeId: 'atom-mg', label: 'Structural Mg2+ Ions', cargo: 'rRNA ribozyme folding' }
        ],
        to: [
          { nodeId: 'protein', label: 'Nascent Archaeal Proteins', cargo: 'SlaA, HMfB, ArlB & Lokiactin' },
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Node', cargo: 'PDB 4V6U / 1JJ2 mosaic' }
        ]
      },
      es: {
        subtitle: 'El ribosoma mosaico arqueano 70S',
        simple:
          'Con 22 nanómetros de ancho igual que un [[ribosoma 70S|ribosome-70s]] bacteriano, este [[ribosoma arqueano|real-arch-ribosome]] lee el [[ARNm|rna]] con factores de iniciación tipo eucariota y metionina normal para ensamblar cada [[proteína|protein]].',
        story:
          'Al acoplarse sobre el [[ARNm|rna]] recién salido de la [[ARNP arqueana|real-arch-rnap]], las subunidades 30S y 50S abrazan un ARNt iniciador con metionina sin formilar guiado por aIF2 trimérico. Decenas de proteínas ribosómicas compartidas en exclusiva con los [[eucariotas|real-cell]] estabilizan la ribozima del ARNr 23S, permitiendo sintetizar [[capa S|real-arch-slayer]], [[histonas|real-arch-histones]] y [[Lokiactina|real-arch-lokiactin]] incluso a 80 °C.',
        blueprint: {
          role: 'Traductor mosaico 70S de 22 nm que une tamaño procariota con química traduccional eucariota',
          arrivesFrom: 'ARNr 16S/23S/5S y ~68 proteínas ensamblados sobre [[ARNm|rna]] con Met-ARNti, GTP y factores aIF2/aEF2',
          inside: 'Centro decodificador 30S y ribozima peptidiltransferasa 50S (PDB 4V6U / 1JJ2) estabilizados por Mg²⁺',
          deliversTo: 'Produce todas las [[proteínas|protein]] arqueanas: [[SlaA|real-arch-slayer]], [[ArlB|real-arch-archaellum]] y [[Lokiactina|real-arch-lokiactin]]',
          loop: 'Su arquitectura compartida con eucariotas confiere resistencia a cloranfenicol y numerosos macrólidos'
        },
        scientific:
          'Ribosoma arqueano 70S (~22 nm, ~2,5 MDa; estructura 70S PDB 4V6U y subunidad mayor 50S de Haloarcula marismortui a 2,4 Å PDB 1JJ2). Combina tamaño 30S + 50S con ~33 proteínas ribosómicas exclusivas del linaje arqueo-eucariota, iniciación con Met-ARNti vía aIF2, elongación por aEF2 con diftamida y hélices de ARNr estabilizadas por [[Mg²⁺|atom-mg]] en medios hipertermófilos o hipersalinos.',
        from: [
          { nodeId: 'rna', label: 'ARNm y ARNt arqueanos', cargo: 'Codones y Met sin formilar' },
          { nodeId: 'atom-mg', label: 'Iones estructurales Mg²⁺', cargo: 'Plegamiento ribozimático' }
        ],
        to: [
          { nodeId: 'protein', label: 'Proteínas nacientes', cargo: 'SlaA, HMfB, ArlB y Lokiactina' },
          { nodeId: 'real-arch-ribosome', label: 'Ribosoma arqueano 70S', cargo: 'Mosaico PDB 4V6U / 1JJ2' }
        ]
      }
    },

    lokiactin: {
      en: {
        subtitle: 'Asgard Lokiactin & Profilin Cytoskeletal Cables',
        simple:
          'Running straight down every Asgard tentacle, these 7-nanometer [[Lokiactin filaments|real-arch-lokiactin]] match eukaryotic [[actin filaments|actin-filament]] so closely that human profilin proteins can even recognize and regulate them.',
        story:
          'Long considered an exclusively eukaryotic hallmark, polar [[actin|actin-filament]] cables actually arose first inside Asgard archaea. Powered by cytoplasmic ATP and guided by Asgard LokiProfilin regulators, Lokiactin monomers assemble into bundled filaments spanning the cell body and branching out through 1-to-3-micrometer tentacles, giving the host mechanical leverage to hold its alphaproteobacterial partner across the [[endosymbiotic synapse|real-arch-synapse]].',
        blueprint: {
          role: 'Asgard eukaryotic-signature actin cable network extending and bracing branched tentacles',
          arrivesFrom: 'ATP-loaded Lokiactin monomers and LokiProfilin-2 regulators translated on [[70S ribosomes|real-arch-ribosome]]',
          inside: 'Double-stranded helical ~7 nm F-actin protofilaments modulated by LokiProfilin (PDB 5ZZB) and gelsolin homologs',
          deliversTo: 'Scaffolds long cytoplasmic tentacles and positions membranes around the [[endosymbiotic synapse|real-arch-synapse]]',
          loop: 'Dynamic polymerization and severing foreshadowed eukaryotic phagocytosis, crawling, and organelle transport'
        },
        scientific:
          'Asgard archaeal Lokiactin (~42 kDa ATPase filament-forming [[protein|protein]], ~7 nm polar double-stranded helix sharing ~55-60% sequence identity with eukaryotic [[actin filaments|actin-filament]]) regulated by functional Asgard profilins (LokiProfilin-2-actin crystal complex PDB 5ZZB) and gelsolin/cofilin homologs. In situ cryo-ET shows Lokiactin bundles extending throughout the cell body and 1-3 micrometer protrusions mediating physical syntrophy.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Archaeal 70S Ribosomes', cargo: 'Lokiactin & LokiProfilin-2' },
          { nodeId: 'atp-synthase', label: 'Cytoplasmic ATP', cargo: 'Monomer polymerization fuel' }
        ],
        to: [
          { nodeId: 'real-arch-synapse', label: 'Branched Tentacle Contact', cargo: 'Mechanical partner wrapping' },
          { nodeId: 'actin-filament', label: 'Eukaryotic F-Actin', cargo: 'Direct ancestral cytoskeleton' }
        ]
      },
      es: {
        subtitle: 'Cables citoesqueléticos Asgard de Lokiactina y profilina',
        simple:
          'Recorriendo cada tentáculo de la arquea Asgard, estos filamentos de [[Lokiactina|real-arch-lokiactin]] de 7 nanómetros se parecen tanto a los [[filamentos de actina|actin-filament]] humanos que incluso las profilinas eucariotas los reconocen.',
        story:
          'Considerados durante años un rasgo exclusivo de los eucariotas, los cables polares de [[actina|actin-filament]] nacieron primero en las arqueas Asgard. Cargados con ATP citoplasmático y modulados por LokiProfilina, los monómeros de Lokiactina se ensamblan en haces que atraviesan el cuerpo celular y se ramifican por tentáculos de 1 a 3 micrómetros, sosteniendo el abrazo con la bacteria socia en la [[sinapsis endosimbiótica|real-arch-synapse]].',
        blueprint: {
          role: 'Red citoesquelética de actina de firma eucariota en Asgard que proyecta y sostiene tentáculos',
          arrivesFrom: 'Monómeros de Lokiactina unidos a ATP y reguladores LokiProfilina-2 de [[ribosomas 70S|real-arch-ribosome]]',
          inside: 'Protofilamentos helicoidales polares de ~7 nm modulados por LokiProfilina (PDB 5ZZB) y gelsolinas',
          deliversTo: 'Arma los tentáculos citoplasmáticos y posiciona la membrana en la [[sinapsis endosimbiótica|real-arch-synapse]]',
          loop: 'Su polimerización dinámica anticipó la fagocitosis, la migración celular y el tráfico eucariota'
        },
        scientific:
          'Lokiactina de arqueas Asgard ([[proteína|protein]] ATPasa de ~42 kDa formando hélices polares bicatenarias de ~7 nm con ~55–60 % de identidad respecto a los [[filamentos de actina|actin-filament]] eucariotas), regulada por profilinas Asgard funcionales (complejo cristalográfico LokiProfilina-2–actina PDB 5ZZB) y homólogos de gelsolina/cofilina. La criotomografía confirma haces de Lokiactina en todo el cuerpo y los tentáculos sintróficos.',
        from: [
          { nodeId: 'real-arch-ribosome', label: 'Ribosomas 70S arqueanos', cargo: 'Lokiactina y LokiProfilina-2' },
          { nodeId: 'atp-synthase', label: 'ATP citosólico', cargo: 'Energía de polimerización' }
        ],
        to: [
          { nodeId: 'real-arch-synapse', label: 'Tentáculos ramificados', cargo: 'Sostén mecánico del abrazo' },
          { nodeId: 'actin-filament', label: 'Actina F eucariota', cargo: 'Ancestro directo del citoesqueleto' }
        ]
      }
    },

    symbiont: {
      en: {
        subtitle: 'The Rickettsia-Like Alphaproteobacterial Partner',
        simple:
          'Cradled inside the Asgard tentacles rests an oxygen-breathing bacterium closely related to [[Rickettsia|real-rickettsia]] - the free-living evolutionary cousin of the [[mitochondrion|mitochondrion]] inside every complex cell.',
        story:
          'Unlike its archaeal neighbor, this ~0.4-by-1.0-micrometer rod wears a classic bacterial double membrane of ester-linked [[phospholipids|phospholipid]] and [[peptidoglycan|peptidoglycan]], enclosing a circular [[DNA|dna]] genome and an aerobic respiratory chain. Drawing in waste H2 and formate from the [[Asgard host|real-archaea]] while consuming ambient O2 across its inner membrane F1F0 [[ATP synthases|atp-synthase]], this aerobic partner stands on the evolutionary threshold of becoming a permanent [[mitochondrion|mitochondrion]].',
        blueprint: {
          role: 'Aerobic alphaproteobacterial syntrophic partner and evolutionary precursor of [[mitochondria|mitochondrion]]',
          arrivesFrom: 'Receives archaeal H2/formate across the [[synapse|real-arch-synapse]] plus ambient O2 across its Gram-negative outer membrane',
          inside: 'Double ester-lipid membrane, respiratory electron transport chain, F1F0 [[ATP synthase|atp-synthase]], circular [[dsDNA|dna]], and [[70S ribosomes|ribosome-70s]]',
          deliversTo: 'Removes toxic O2, pulls archaeal fermentation forward, and evolves ANT-like ATP export to the [[host|real-archaea]]',
          loop: 'Retaining circular DNA and 70S ribosomes inside modern [[mitochondria|mitochondrion]] preserves direct proof of this bacterial origin'
        },
        scientific:
          'Aerobic alphaproteobacterial endosymbiotic partner (~0.4 x 1.0 micrometers Gram-negative rod phylogenetically allied to [[Rickettsia prowazekii|real-rickettsia]] and proto-[[mitochondria|mitochondrion]]). Retains outer and inner ester-linked [[phospholipid|phospholipid]] bilayers, inner-membrane oxidative phosphorylation complexes I-IV + F1F0 [[ATP synthase|atp-synthase]], circular [[dsDNA|dna]], and bacterial [[70S ribosomes|ribosome-70s]]. Consumes ambient O2 and archaeal reducing equivalents across the [[synapse|real-arch-synapse]].',
        from: [
          { nodeId: 'real-arch-synapse', label: 'Archaeal H2 & Formate', cargo: 'Syntrophic electron donors' },
          { nodeId: 'atom-o', label: 'Dissolved O2', cargo: 'Terminal respiratory acceptor' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Modern Mitochondrion', cargo: 'Double-membrane respiratory organelle' },
          { nodeId: 'real-rickettsia', label: 'Rickettsia Cousin', cargo: 'Alphaproteobacterial comparison' }
        ]
      },
      es: {
        subtitle: 'La alfaproteobacteria socia afín a Rickettsia',
        simple:
          'Envuelta entre los tentáculos Asgard reposa una bacteria respiradora de oxígeno emparentada con [[Rickettsia|real-rickettsia]]: la prima evolutiva de la [[mitocondria|mitochondrion]] presente en toda célula compleja.',
        story:
          'A diferencia de su anfitriona arqueana, este bacilo de ~0,4 por 1,0 micrómetros conserva una doble membrana bacteriana clásica de [[fosfolípidos|phospholipid]] éster y [[peptidoglicano|peptidoglycan]], con [[ADN|dna]] circular y cadena respiratoria aerobia. Al consumir el H₂ y formiato cedidos por la [[arquea Asgard|real-archaea]] junto al oxígeno ambiental en sus [[ATP sintasas|atp-synthase]] F₁F₀, se halla justo en el umbral de convertirse en una [[mitocondria|mitochondrion]].',
        blueprint: {
          role: 'Alfaproteobacteria aerobia sintrófica y antecesora evolutiva directa de la [[mitocondria|mitochondrion]]',
          arrivesFrom: 'Recibe H₂ y formiato arqueanos a través de la [[sinapsis|real-arch-synapse]] más O₂ ambiental por su membrana externa',
          inside: 'Doble membrana de lípidos éster, cadena respiratoria, [[ATP sintasa|atp-synthase]] F₁F₀, [[ADNbc|dna]] circular y [[ribosomas 70S|ribosome-70s]]',
          deliversTo: 'Consume el O₂ tóxico, hace viable la fermentación arqueana y evoluciona hacia la exportación de ATP al [[huésped|real-archaea]]',
          loop: 'El ADN circular y los ribosomas 70S en las [[mitocondrias|mitochondrion]] actuales conservan la huella de este origen bacteriano'
        },
        scientific:
          'Socia endosimbiótica alfaproteobacteriana aerobia (bacilo Gram-negativo de ~0,4 × 1,0 µm emparentado filogenéticamente con [[Rickettsia prowazekii|real-rickettsia]] y las proto-[[mitocondrias|mitochondrion]]). Conserva bicapas interna y externa de [[fosfolípidos|phospholipid]] éster, fosforilación oxidativa (complejos I–IV + [[ATP sintasa|atp-synthase]] F₁F₀), [[ADNbc|dna]] circular y [[ribosomas 70S|ribosome-70s]] bacterianos acoplados a la [[sinapsis|real-arch-synapse]].',
        from: [
          { nodeId: 'real-arch-synapse', label: 'H₂ y formiato arqueanos', cargo: 'Donadores sintróficos de electrones' },
          { nodeId: 'atom-o', label: 'Oxígeno disuelto (O₂)', cargo: 'Aceptor respiratorio final' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitocondria moderna', cargo: 'Orgánulo respiratorio de doble membrana' },
          { nodeId: 'real-rickettsia', label: 'Pariente Rickettsia', cargo: 'Comparación alfaproteobacteriana' }
        ]
      }
    },

    synapse: {
      en: {
        subtitle: 'The Endosymbiotic Entangle-Engulf Contact Cleft',
        simple:
          'This narrow gap between the [[Asgard archaeon|real-archaea]] tentacle and its bacterial partner acts as a shared chemical exchange zone - the evolutionary bridge from simple cells to [[eukaryotes|real-cell]].',
        story:
          'Close membrane contact solves two survival limits at once: the archaeon must dump fermentation hydrogen rapidly before chemistry stalls, while the oxygen-breathing alphaproteobacterium thrives on that fuel and lowers local O2 around its anaerobic host. Over time this [[synapse|real-arch-synapse]] became a permanent metabolic merger uniting two supply lines under one envelope - archaeal shelter and H2 in exchange for steady respiratory ATP - launching [[yeast|real-fungal]] and [[animal cells|real-cell]].',
        blueprint: {
          role: 'Inter-domain syntrophic exchange cleft driving Entangle -> Engulf -> Endogenize eukaryogenesis',
          arrivesFrom: 'Formed where [[Lokiactin|real-arch-lokiactin]] tentacles wrap tightly around an aerobic [[Rickettsia|real-rickettsia]]-like bacterium',
          inside: '20-500 nm diffusion cleft concentrating archaeal H2/formate export, O2 scavenging, and coupled nucleotide exchange',
          deliversTo: 'Permanent endosymbiotic integration yielding [[mitochondria|mitochondrion]] inside early [[eukaryotic cells|real-cell]]',
          loop: 'As tentacles fused and enclosed the symbiont, most bacterial genes migrated to the host genome while ATP export locked in'
        },
        scientific:
          'Syntrophic inter-domain contact cleft (~20-500 nm separation) between an Asgard archaeal [[envelope|real-arch-envelope]] and an aerobic alphaproteobacterial outer membrane, representing the physical stage of the Entangle-Engulf-Endogenize (E3) eukaryogenesis model. Minimizes diffusion distance for interspecies H2/formate transfer and O2 detoxification prior to ESCRT-mediated engulfment and evolutionary consolidation of the [[mitochondrion|mitochondrion]].',
        from: [
          { nodeId: 'real-arch-lokiactin', label: 'Asgard Tentacle', cargo: 'H2/formate export & shelter' },
          { nodeId: 'real-rickettsia', label: 'Alphaproteobacterium', cargo: 'O2 respiration & ATP production' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitochondrial Genesis', cargo: 'Permanent endosymbiotic merger' },
          { nodeId: 'real-cell', label: 'Domain Eukarya', cargo: 'Birth of complex cells' }
        ]
      },
      es: {
        subtitle: 'La hendidura endosimbiótica de contacto y fusión',
        simple:
          'Esta estrecha franja entre el tentáculo de la [[arquea Asgard|real-archaea]] y su bacteria socia funciona como zona de intercambio químico compartido: el puente evolutivo de las células simples a los [[eucariotas|real-cell]].',
        story:
          'El contacto cercano resuelve dos límites a la vez: la arquea necesita evacuar hidrógeno fermentativo antes de frenar su metabolismo, mientras la alfaproteobacteria aerobia aprovecha ese combustible y retira el oxígeno del entorno. Con el tiempo, esta [[sinapsis|real-arch-synapse]] pasó a ser una fusión metabólica permanente que unió dos líneas de suministro bajo una misma envoltura —refugio y H₂ por ATP respiratorio—, originando [[hongos|real-fungal]] y [[células animales|real-cell]].',
        blueprint: {
          role: 'Hendidura sintrófica interdominio que impulsa la eucariogénesis (Enredar → Englobar → Endogenizar)',
          arrivesFrom: 'Formada donde los tentáculos de [[Lokiactina|real-arch-lokiactin]] envuelven a la alfaproteobacteria afín a [[Rickettsia|real-rickettsia]]',
          inside: 'Espacio de difusión de 20–500 nm que concentra la transferencia de H₂/formiato, consumo de O₂ y tráfico energético',
          deliversTo: 'Integración endosimbiótica permanente que origina la [[mitocondria|mitochondrion]] dentro de [[células eucariotas|real-cell]]',
          loop: 'Al cerrarse los tentáculos, gran parte de los genes bacterianos migraron al huésped mientras se fijó la exportación de ATP'
        },
        scientific:
          'Hendidura de contacto sintrófico interdominio (~20–500 nm) entre la [[envoltura arqueana|real-arch-envelope]] Asgard y la membrana externa alfaproteobacteriana, fase física central del modelo E3 de eucariogénesis (Entangle–Engulf–Endogenize). Acorta la distancia de difusión para la transferencia interespecie de H₂/formiato y la eliminación de O₂ antes del cierre por ESCRT y el origen de la [[mitocondria|mitochondrion]].',
        from: [
          { nodeId: 'real-arch-lokiactin', label: 'Tentáculo Asgard', cargo: 'Refugio y cesión de H₂' },
          { nodeId: 'real-rickettsia', label: 'Alfaproteobacteria', cargo: 'Respiración con O₂ y ATP' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Génesis mitocondrial', cargo: 'Fusión endosimbiótica permanente' },
          { nodeId: 'real-cell', label: 'Dominio Eukarya', cargo: 'Nacimiento de la célula compleja' }
        ]
      }
    },

    h2_flow: {
      en: {
        subtitle: 'Syntrophic H2 & Formate Cross-Feeding Stream',
        simple:
          'As the [[Asgard archaeon|real-archaea]] breaks down amino acids, it vents tiny [[hydrogen|atom-h]] gas and formate molecules straight across the [[synapse|real-arch-synapse]] so its bacterial partner can burn them with oxygen.',
        story:
          'Amino-acid fermentation inside anaerobic Asgard archaea stalls thermodynamically whenever dissolved hydrogen gas builds up around the cell. By pressing its tentacles right against an oxygen-respiring partner across the [[endosymbiotic synapse|real-arch-synapse]], the host vents H2 and formate directly into bacterial hydrogenases. Continuous consumption keeps local hydrogen near zero, making host metabolism profitable while fueling bacterial respiration.',
        blueprint: {
          role: 'Interspecies reducing-equivalent shuttle (H2 & formate) thermodynamically linking host fermentation to partner respiration',
          arrivesFrom: 'Generated by amino-acid and peptide fermentation via ferredoxin-coupled hydrogenases inside the [[Asgard host|real-archaea]]',
          inside: 'Rapid diffusive flux of dissolved H2 and HCOO- crossing the 20-500 nm [[endosymbiotic synapse|real-arch-synapse]] cleft',
          deliversTo: 'Feeds membrane hydrogenases and the aerobic electron transport chain of the bacterial [[symbiont|real-arch-synapse]]',
          loop: 'Removing H2 lowers product inhibition so host amino-acid breakdown stays exergonic and continuous'
        },
        scientific:
          'Interspecies hydrogen and formate transfer (syntrophic electron cross-feeding) across the ~20-500 nm [[synapse|real-arch-synapse]]. Fermentative amino-acid catabolism in Prometheoarchaeum-like [[Asgard archaea|real-archaea]] requires ultra-low H2 partial pressure (<10 Pa) to remain thermodynamically favorable (delta G < 0); uptake by bacterial hydrogenases/formate dehydrogenases coupled to O2 respiration sustains both partners simultaneously.',
        from: [
          { nodeId: 'real-archaea', label: 'Asgard Fermentation', cargo: 'Reducing equivalents (H2, HCOO-)' },
          { nodeId: 'atom-h', label: 'Hydrogen Atoms', cargo: 'Diatomic H2 electron shuttle' }
        ],
        to: [
          { nodeId: 'real-arch-synapse', label: 'Symbiont Hydrogenases', cargo: 'Respiratory electron input' },
          { nodeId: 'mitochondrion', label: 'Oxidative Metabolism', cargo: 'Coupled redox partnership' }
        ]
      },
      es: {
        subtitle: 'Flujo sintrófico de H₂ y formiato entre socios',
        simple:
          'Al degradar aminoácidos, la [[arquea Asgard|real-archaea]] expulsa pequeñas moléculas de [[hidrógeno|atom-h]] y formiato a través de la [[sinapsis|real-arch-synapse]] para que su bacteria socia las oxide usando oxígeno.',
        story:
          'La fermentación de aminoácidos en arqueas Asgard anaerobias se bloquea termodinámicamente en cuanto el hidrógeno disuelto se acumula alrededor de la célula. Al ceñir sus tentáculos contra una bacteria aerobia en la [[sinapsis endosimbiótica|real-arch-synapse]], el huésped vierte H₂ y formiato directamente hacia las hidrogenasas bacterianas. Ese consumo constante mantiene el hidrógeno al mínimo y alimenta la respiración de la socia.',
        blueprint: {
          role: 'Lanzadera interespecie de poder reductor (H₂ y formiato) entre fermentación arqueana y respiración bacteriana',
          arrivesFrom: 'Generada por fermentación de aminoácidos vía hidrogenasas acopladas a ferredoxina en el [[huésped Asgard|real-archaea]]',
          inside: 'Difusión rápida de H₂ y HCOO⁻ disueltos a través de la hendidura de 20–500 nm de la [[sinapsis|real-arch-synapse]]',
          deliversTo: 'Abastece las hidrogenasas y la cadena respiratoria aerobia de la bacteria socia en la [[sinapsis|real-arch-synapse]]',
          loop: 'Retirar el H₂ elimina la inhibición por producto y vuelve exergónica y continua la fermentación del huésped'
        },
        scientific:
          'Transferencia interespecie de hidrógeno y formiato (sintrofía electrónica) a través de la [[sinapsis|real-arch-synapse]] de ~20–500 nm. El catabolismo fermentativo de aminoácidos en [[arqueas Asgard|real-archaea]] tipo Prometheoarchaeum exige presiones parciales de H₂ menores a 10 Pa para mantener ΔG < 0; su oxidación acoplada a O₂ en la alfaproteobacteria sostiene la viabilidad de ambos socios.',
        from: [
          { nodeId: 'real-archaea', label: 'Fermentación Asgard', cargo: 'Poder reductor (H₂ y formiato)' },
          { nodeId: 'atom-h', label: 'Átomos de hidrógeno', cargo: 'Lanzadera electrónica H₂' }
        ],
        to: [
          { nodeId: 'real-arch-synapse', label: 'Hidrogenasas simbiontes', cargo: 'Entrada de electrones' },
          { nodeId: 'mitochondrion', label: 'Metabolismo oxidativo', cargo: 'Acoplamiento redox evolutivo' }
        ]
      }
    },

    atp_export: {
      en: {
        subtitle: 'From Parasitic ATP Theft to Mitochondrial ATP Export',
        simple:
          'Whereas parasitic [[Rickettsia|real-rickettsia]] steals host ATP inward through Tlc1 pumps, the evolving endosymbiont reverses that trade - exporting rich respiratory ATP back to the [[archaeal host|real-archaea]] just like a [[mitochondrion|mitochondrion]].',
        story:
          'Comparing Stage 3 [[Rickettsia prowazekii|real-rickettsia]] with a modern [[mitochondrion|mitochondrion]] pinpoints the decisive turning point of complex life. Parasitic Rickettsia uses Tlc1 carriers to siphon host ATP inward. Inside the tightening [[Asgard synapse|real-arch-synapse]], evolution favored an opposite carrier - the mitochondrial ANT-like exchanger - that swaps spent host ADP for freshly minted respiratory ATP, multiplying cellular energy budgets by thousands for [[eukaryotes|real-cell]].',
        blueprint: {
          role: 'Bioenergetic ATP export flux marking the evolutionary shift from parasitism to [[mitochondrial|mitochondrion]] mutualism',
          arrivesFrom: 'Oxidative phosphorylation across bacterial respiratory complexes and inner-membrane F1F0 [[ATP synthases|atp-synthase]]',
          inside: 'ANT-like adenine nucleotide translocase exporting charged ATP4- outward in 1:1 exchange for host ADP3- (opposite to [[Rickettsia|real-rickettsia]] Tlc1)',
          deliversTo: 'Powers [[Lokiactin|real-arch-lokiactin]] expansion, genome enlargement, and organelle evolution in [[eukaryotes|real-cell]]',
          loop: 'Surplus respiratory ATP unlocked the dramatic leap in cell size and gene count from prokaryotes to [[yeast|real-fungal]] and [[animals|real-cell]]'
        },
        scientific:
          'Bioenergetic inversion defining the bacterial-to-[[mitochondrial|mitochondrion]] transition: whereas cytosolic parasite [[Rickettsia prowazekii|real-rickettsia]] imports host ATP via NTT/Tlc1 translocases, eukaryotic mitochondria acquired an evolutionarily distinct SLC25 adenine nucleotide translocase (ANT/AAC) catalyzing electrogenic 1:1 export of matrix ATP4- for cytosolic ADP3-. Multiplying available ATP per gene enabled the expansion of [[eukaryotic|real-cell]] genomes, endomembranes, and cytoskeletons.',
        from: [
          { nodeId: 'atp-synthase', label: 'Symbiont F1F0 ATP Synthase', cargo: 'O2-respiration ATP yield' },
          { nodeId: 'real-rickettsia', label: 'Tlc1 Contrast', cargo: 'Reversal of ATP theft direction' }
        ],
        to: [
          { nodeId: 'real-archaea', label: 'Asgard Host Cytoplasm', cargo: 'Steady respiratory ATP supply' },
          { nodeId: 'mitochondrion', label: 'Mitochondrial ANT Export', cargo: 'Foundation of eukaryotic power' }
        ]
      },
      es: {
        subtitle: 'Del robo parasitario a la exportación mitocondrial de ATP',
        simple:
          'Mientras la parásita [[Rickettsia|real-rickettsia]] roba ATP hacia dentro con bombas Tlc1, el endosimbionte invierte ese comercio y exporta abundante ATP respiratorio al [[huésped arqueano|real-archaea]] igual que una [[mitocondria|mitochondrion]].',
        story:
          'Comparar la [[Rickettsia prowazekii|real-rickettsia]] parásita con una [[mitocondria|mitochondrion]] actual revela el punto de giro decisivo de la vida compleja. Rickettsia emplea translocasas Tlc1 para succionar ATP humano. En la [[sinapsis Asgard|real-arch-synapse]], la evolución fijó un intercambiador opuesto de tipo ANT que cambia ADP gastado del huésped por ATP respiratorio recién fabricado, multiplicando la energía disponible para los [[eucariotas|real-cell]].',
        blueprint: {
          role: 'Flujo bioenergético de exportación de ATP que marca el paso del parasitismo al mutualismo [[mitocondrial|mitochondrion]]',
          arrivesFrom: 'Fosforilación oxidativa en complejos respiratorios bacterianos y [[ATP sintasas|atp-synthase]] F₁F₀ internas',
          inside: 'Translocasa de nucleótidos de adenina tipo ANT que exporta ATP⁴⁻ a cambio 1:1 de ADP³⁻ del huésped (opuesta a Tlc1 de [[Rickettsia|real-rickettsia]])',
          deliversTo: 'Energiza la expansión de [[Lokiactina|real-arch-lokiactin]], mayores genomas y orgánulos en [[eucariotas|real-cell]]',
          loop: 'El excedente de ATP respiratorio desbloqueó el salto de tamaño desde procariotas hasta [[levaduras|real-fungal]] y [[animales|real-cell]]'
        },
        scientific:
          'Inversión bioenergética decisiva en la transición de bacteria a [[mitocondria|mitochondrion]]: frente a la importación parasitaria de ATP mediante Tlc1/NTT en [[Rickettsia prowazekii|real-rickettsia]], los eucariotas incorporaron la translocasa SLC25 ANT/AAC, que cataliza el intercambio electrogénico 1:1 exportando ATP⁴⁻ matricial por ADP³⁻ citosólico y habilitando la expansión energética del genoma [[eucariota|real-cell]].',
        from: [
          { nodeId: 'atp-synthase', label: 'ATP sintasa F₁F₀ simbionte', cargo: 'Producción aerobia de ATP' },
          { nodeId: 'real-rickettsia', label: 'Contraste Tlc1', cargo: 'Inversión del sentido del flujo' }
        ],
        to: [
          { nodeId: 'real-archaea', label: 'Citoplasma huésped Asgard', cargo: 'Suministro continuo de ATP' },
          { nodeId: 'mitochondrion', label: 'Exportación ANT mitocondrial', cargo: 'Base del metabolismo eucariota' }
        ]
      }
    },

    ether_bond: {
      en: {
        subtitle: 'Atomic Close-Up: Archaeal Ether vs. Bacterial Ester Bond',
        simple:
          'At 0.14 nanometers, a single [[oxygen atom|atom-o]] links each branched lipid chain to glycerol via an [[ether bond|real-arch-ether-bond]] - missing the fragile side oxygen that lets boiling acid break bacterial [[phospholipid|phospholipid]] ester bonds.',
        story:
          'Place a bacterial [[phospholipid|phospholipid]] side by side with an archaeal [[tetraether lipid|real-arch-tetraether]] at atomic scale and the secret of extremophile survival snaps into focus. Bacterial and [[eukaryotic|real-cell]] ester bonds carry a reactive double-bonded carbonyl [[oxygen|atom-o]] that boiling acid attacks quickly. Archaea remove that weak point, locking saturated branched isoprenoid chains onto glycerol-1-phosphate through clean [[C|atom-c]]-[[O|atom-o]]-[[C|atom-c]] ether bridges alongside catalytic [[Mg2+|atom-mg]]-ATP chemistry.',
        blueprint: {
          role: 'Atomic-scale chemical signature separating Domain [[Archaea|real-archaea]] membranes from [[Bacteria|real-bacterium]] and [[Eukarya|real-cell]]',
          arrivesFrom: 'Covalent condensation of isoprenoid tails with sn-glycerol-1-phosphate (G1P) using [[C|atom-c]], [[H|atom-h]], [[O|atom-o]], and [[P|atom-p]]',
          inside: 'R-O-CH2- ether linkage (~1.43 angstroms C-O bond) lacking the vulnerable C=O carbonyl of G3P ester lipids',
          deliversTo: 'Hydrolysis-resistant core chemistry sustaining both bilayers and C40 [[tetraether monolayers|real-arch-tetraether]]',
          loop: 'Opposite glycerol stereochemistry (G1P vs. G3P) implies archaeal and bacterial lipid pathways diverged at the root of life'
        },
        scientific:
          'Atomic comparison (0.1-0.3 nm) of the archaeal [[ether bond|real-arch-ether-bond]] (R-O-CH2-, C-O bond ~1.43 angstroms on sn-glycerol-1-phosphate via G1PDH/GGGPS) versus the bacterial and eukaryotic ester bond (R-CO-O-CH2- on sn-glycerol-3-phosphate [[phospholipids|phospholipid]]). Absence of the electrophilic carbonyl carbon prevents acid- or base-catalyzed nucleophilic hydrolysis at 80-121 C and pH 1-3, while saturated branched phytanyl chains resist oxidative cleavage.',
        from: [
          { nodeId: 'atom-c', label: 'Isoprenoid Carbon Chains', cargo: 'Branched phytanyl/biphytanyl C' },
          { nodeId: 'atom-o', label: 'Single Oxygen Bridge', cargo: '1.43 A C-O-C ether link' }
        ],
        to: [
          { nodeId: 'real-arch-ether-bond', label: 'Ether Bond Node', cargo: 'Ether vs. ester atomic contrast' },
          { nodeId: 'real-arch-tetraether', label: 'Tetraether Monolayer', cargo: 'Acid- and heat-proof sheet' }
        ]
      },
      es: {
        subtitle: 'Detalle atómico: enlace éter arqueano frente a éster bacteriano',
        simple:
          'A 0,14 nanómetros, un único [[átomo de oxígeno|atom-o]] une cada cola lipídica ramificada al glicerol mediante un [[enlace éter|real-arch-ether-bond]], sin el oxígeno lateral vulnerable que el ácido rompe en los [[fosfolípidos|phospholipid]] bacterianos.',
        story:
          'Colocar a escala atómica un [[fosfolípido|phospholipid]] bacteriano frente a un [[lípido tetraéter|real-arch-tetraether]] arqueano revela al instante el secreto extremófilo. Los enlaces éster de bacterias y [[eucariotas|real-cell]] exhiben un [[oxígeno|atom-o]] carbonílico de doble enlace que el ácido caliente ataca con facilidad. Las arqueas eliminan ese punto débil uniendo cadenas isoprenoides ramificadas al glicerol-1-fosfato mediante puentes éter [[C|atom-c]]–[[O|atom-o]]–[[C|atom-c]] estables.',
        blueprint: {
          role: 'Firma química atómica que separa las membranas de [[Archaea|real-archaea]] frente a [[Bacteria|real-bacterium]] y [[Eukarya|real-cell]]',
          arrivesFrom: 'Condensación covalente de colas isoprenoides con sn-glicerol-1-fosfato (G1P) de [[C|atom-c]], [[H|atom-h]], [[O|atom-o]] y [[P|atom-p]]',
          inside: 'Unión éter R–O–CH₂– (enlace C–O de ~1,43 Å) carente del carbonilo vulnerable C=O de los ésteres G3P',
          deliversTo: 'Química resistente a la hidrólisis que sostiene bicapas y [[monocapas tetraéter|real-arch-tetraether]] C40',
          loop: 'La quiralidad opuesta del glicerol (G1P frente a G3P) sugiere una divergencia lipídica temprana en el árbol de la vida'
        },
        scientific:
          'Comparación atómica (0,1–0,3 nm) entre el [[enlace éter|real-arch-ether-bond]] arqueano (R–O–CH₂–, longitud C–O ~1,43 Å sobre sn-glicerol-1-fosfato vía G1PDH/GGGPS) y el enlace éster bacteriano y eucariota (R–CO–O–CH₂– en [[fosfolípidos|phospholipid]] G3P). La falta de carbono carbonílico electrófilo impide la hidrólisis nucleofílica a 80–121 °C y pH 1–3, mientras las cadenas fitanilo saturadas resisten la oxidación.',
        from: [
          { nodeId: 'atom-c', label: 'Cadenas de carbono isoprenoides', cargo: 'Fitanilo/bifitanilo ramificado' },
          { nodeId: 'atom-o', label: 'Puente único de oxígeno', cargo: 'Enlace éter C–O–C (1,43 Å)' }
        ],
        to: [
          { nodeId: 'real-arch-ether-bond', label: 'Enlace éter', cargo: 'Contraste atómico éter vs. éster' },
          { nodeId: 'real-arch-tetraether', label: 'Monocapa tetraéter', cargo: 'Lámina inmune al ácido y calor' }
        ]
      }
    }
  }
};
