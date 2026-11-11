import type { NodeLensMap, PagePartLensMap } from './types.js';

export const ANIMAL_NODE_LENSES: NodeLensMap = {
  'cell': {
    en: {
      simple: 'An animal cell is a microscopic, self-sustaining city of warm jelly wrapped in an oily skin. Inside, specialized neighborhoods burn fuel, guard genetic blueprints, build protein machines, and recycle worn-out parts nonstop.',
      story: 'Every second of your life, the universe tries to dissolve you into lukewarm soup, and every second this microscopic metropolis fights back. Raw [[glucose|glucose]], oxygen, and amino acids slip across the oily [[plasma membrane|plasma-membrane]] into a jam-packed cytosol where millions of molecules collide every millisecond.\n\nInstead of letting chaos win, the city walls off its dangerous trades into membrane-bound districts—eukaryotic organelles. Deep in the [[nucleus|nucleus]], ancient DNA scrolls stay safe from cytoplasmic sparks while courier transcripts rush out to [[ribosome|ribosome]] foundries; mitochondria burn fuel to mint fresh ATP coins; and acidic [[lysosomes|lysosome]] melt broken gears so neighboring builders never run short of parts.',
      blueprint: 'Role: Self-maintaining eukaryotic unit of animal tissues · From: Extracellular blood/interstitial fluid ([[glucose|glucose]], O₂, [[amino acids|amino-acid]], signals) · Inside: Compartmentalized organelles in [[cytosol|cytosol]] convert fuel into ATP and genetic code into [[proteins|protein]] · To: Exported [[vesicle|vesicle]] cargo, mechanical force via [[cell junctions|cell-junction]], and waste CO₂/H₂O',
      scientific: 'Eukaryotic heterotrophic cell, 10–30 µm diameter (~1–4 pL volume), ~70% H₂O and ~20–30% macromolecules by mass (~200–300 mg/mL total protein). Compartmentalized by endomembrane bilayers into nucleus (diploid genome, ~6.4 Gbp in humans), mitochondria, ER, Golgi, lysosomes, and peroxisomes; lacks a cell wall, relying on cortical actomyosin, intermediate filaments, and intercellular junctions for mechanical integrity.'
    },
    es: {
      simple: 'Una célula animal es una ciudad microscópica y autosuficiente de jalea tibia envuelta en una piel aceitosa. En su interior, barrios especializados queman combustible, custodian planos genéticos, fabrican máquinas proteicas y reciclan piezas sin descanso.',
      story: 'Cada segundo de tu vida el universo intenta disolverte en un caldo tibio, y cada segundo esta metrópolis microscópica se niega a derrumbarse. La [[glucosa|glucose]], el oxígeno y los aminoácidos cruzan la frontera aceitosa de la [[membrana plasmática|plasma-membrane]] hacia un citosol abarrotado donde millones de moléculas chocan cada milisegundo.\n\nPara que no reine el caos, la ciudad reparte sus oficios peligrosos en distritos amurallados llamados orgánulos. En la bóveda del [[núcleo|nucleus]], los pergaminos de ADN quedan a salvo de chispas químicas mientras mensajeros de ARN corren hacia las fundiciones de los [[ribosomas|ribosome]]; las mitocondrias queman combustible para acuñar monedas de ATP; y los [[lisosomas|lysosome]] ácidos funden la chatarra para devolver ladrillos limpios a los talleres vecinos.',
      blueprint: 'Rol: Unidad eucariota autorregulada de los tejidos animales · De: Fluido extracelular ([[glucosa|glucose]], O₂, [[aminoácidos|amino-acid]], señales) · Dentro: Orgánulos compartimentados en el [[citosol|cytosol]] transforman nutrientes en ATP e información genética en [[proteínas|protein]] · Hacia: Carga secretada en [[vesículas|vesicle]], tracción en [[uniones celulares|cell-junction]] y desechos CO₂/H₂O',
      scientific: 'Célula eucariota heterótrofa de 10–30 µm de diámetro (~1–4 pL de volumen), compuesta por ~70 % H₂O y ~20–30 % macromoléculas en masa (~200–300 mg/mL de proteína). Compartimentada mediante bicapas endomembranosas en núcleo (genoma diploide, ~6.4 Gpb en humanos), mitocondrias, RE, Golgi, lisosomas y peroxisomas; carece de pared celular y sostiene su tensión mecánica mediante el córtex de actomiosina, filamentos intermedios y complejos de unión.'
    }
  },
  'plasma-membrane': {
    en: {
      simple: 'The plasma membrane is a soap-bubble-thin oily skin that holds the cell together while acting as a smart border patrol. It blocks random leaks while letting chosen nutrients, water, and messages cross through dedicated protein gates.',
      story: 'A city built of water floating in water needs a border made of oil, or its citizens simply drift away. Fresh [[phospholipids|phospholipid]] and cholesterol arrive aboard secretory [[vesicles|vesicle]] from the Golgi apparatus, snapping into a self-sealing double sheet barely eight nanometers thick.\n\nWithin this restless two-dimensional sea—the fluid mosaic bilayer—[[sodium–potassium pumps|na-k-pump]] burn ATP from nearby mitochondria to keep the border electrically charged, while [[channel proteins|channel-protein]] usher water in single file and GPCRs eavesdrop on passing hormones. Every sugar, amino acid, and alarm signal that feeds the [[cytosol|cytosol]] owes its entry visa to this shimmering wall.',
      blueprint: 'Role: Selective barrier, electrochemical capacitor, and signaling interface · From: Lipids and membrane proteins delivered by [[Golgi|golgi]] [[vesicles|vesicle]], plus extracellular solutes · Inside: Asymmetric [[phospholipid|phospholipid]] bilayer buffered by [[cholesterol|cholesterol]] hosts [[ion pumps|na-k-pump]], [[channels|channel-protein]], and [[GPCRs|gpcr]] · To: Regulated import to [[cytosol|cytosol]], signal cascades, and exocytic export',
      scientific: 'Asymmetric glycerophospholipid/sphingolipid bilayer, 7–10 nm thick (~4–5 nm hydrophobic core), ~50% protein by mass (~1 protein per 50–100 lipids) and ~30–40 mol% cholesterol. Outer leaflet enriched in phosphatidylcholine, sphingomyelin, and glycolipids; cytosolic leaflet enriched in phosphatidylserine (net negative charge) and phosphoinositides. Maintains resting potential (Vm ≈ −70 mV) with specific capacitance ~1 µF/cm².'
    },
    es: {
      simple: 'La membrana plasmática es una piel aceitosa finísima que mantiene unida a la célula y actúa como una aduana inteligente. Impide fugas accidentales mientras deja pasar agua, nutrientes y mensajes a través de compuertas proteicas exclusivas.',
      story: 'Una ciudad hecha de agua y sumergida en agua necesita una muralla de aceite, o sus habitantes se diluirían al instante. Nuevos [[fosfolípidos|phospholipid]] y moléculas de colesterol llegan en [[vesículas|vesicle]] desde el aparato de Golgi y se encajan solos en una lámina doble que sella cualquier grieta en microsegundos.\n\nSobre este mar bidimensional en perpetuo movimiento —la bicapa de mosaico fluido—, las [[bombas de sodio–potasio|na-k-pump]] queman ATP recién salido de las mitocondrias para electrificar la frontera, mientras las [[acuaporinas|channel-protein]] filtran agua en fila india y los receptores GPCR escuchan rumores hormonales del exterior. Cada nutriente y cada alerta que entra al [[citosol|cytosol]] pasa primero por el escrutinio de este muro vivo.',
      blueprint: 'Rol: Barrera selectiva, condensador electroquímico e interfaz sensorial · De: Lípidos y proteínas traídos en [[vesículas|vesicle]] del [[Golgi|golgi]], más solutos extracelulares · Dentro: Bicapa asimétrica de [[fosfolípidos|phospholipid]] estabilizada por [[colesterol|cholesterol]] con [[bombas iónicas|na-k-pump]], [[canales|channel-protein]] y [[GPCR|gpcr]] · Hacia: Nutrientes y señales al [[citosol|cytosol]], y secreción al exterior',
      scientific: 'Bicapa asimétrica de glicerofosfolípidos y esfingolípidos de 7–10 nm de espesor (~4–5 nm de núcleo hidrofóbico), ~50 % proteína en masa y ~30–40 % molar de colesterol. Valva externa rica en fosfatidilcolina, esfingomielina y glicolípidos; valva citosólica rica en fosfatidilserina (carga neta negativa) y fosfoinosítidos. Mantiene un potencial de reposo Vm ≈ −70 mV con capacitancia específica de ~1 µF/cm².'
    }
  },
  'phospholipid': {
    en: {
      simple: 'A phospholipid is a two-faced soap-like molecule with a water-loving head and two oily, water-fearing tails. Drop millions of them in water and they automatically line up tail-to-tail into a leakproof cell membrane.',
      story: 'Forged on the cytosolic face of the [[smooth ER|smooth-er]], each phospholipid carries a split personality built right into its skeleton. Its charged [[phosphocholine head|head-group]] craves the bustling water of the cytoplasm, while its twin [[fatty-acid tails|fatty-acid-tail]] recoil from moisture and huddle together in an oily embrace, spontaneously raising the walls of every [[vesicle|vesicle]] and [[plasma membrane|plasma-membrane]] in the city without spending a single ATP to stay standing.',
      blueprint: 'Role: Self-assembling amphipathic brick of biological membranes · From: Synthesized in [[smooth ER|smooth-er]] from glycerol-3-phosphate, [[fatty-acid tails|fatty-acid-tail]], and [[head groups|head-group]] · Inside: Hydrophobic effect drives spontaneous tail-to-tail bilayer assembly · To: Builds [[plasma membrane|plasma-membrane]], [[vesicles|vesicle]], and organelle envelopes',
      scientific: 'Amphipathic glycerophospholipid (~760 Da for POPC, ~2.5 nm length, ~0.65 nm² cross-sectional area). Sn-1 and sn-2 positions of glycerol esterified to C16–C20 acyl chains; sn-3 esterified to a polar phosphate-linked headgroup (choline, ethanolamine, serine, or inositol). Lateral diffusion coefficient D ≈ 1–5 µm²/s at 37 °C; uncatalyzed transbilayer flip-flop t₁/₂ spans hours to days (accelerated by flippases/scramblases).'
    },
    es: {
      simple: 'Un fosfolípido es una molécula de doble cara: tiene una cabeza que ama el agua y dos colas aceitosas que huyen de ella. Al soltar millones en agua, se alinean cola con cola por sí solos formando una membrana impermeable.',
      story: 'Forjado en los túbulos del [[RE liso|smooth-er]], cada fosfolípido nace con una personalidad dividida en su propia anatomía. Su [[cabeza polar|head-group]] cargada busca el abrazo del agua celular, mientras sus dos [[colas de ácidos grasos|fatty-acid-tail]] huyen de la humedad y se refugian juntas en un núcleo aceitoso, levantando espontáneamente los muros de cada [[vesícula|vesicle]] y de la [[membrana plasmática|plasma-membrane]] sin gastar un solo ATP en mantenerse en pie.',
      blueprint: 'Rol: Ladrillo anfipático autoensamblable de todas las membranas · De: Sintetizado en el [[RE liso|smooth-er]] con glicerol-3-fosfato, [[colas acilo|fatty-acid-tail]] y [[cabeza polar|head-group]] · Dentro: El efecto hidrofóbico agrupa las colas frente a frente formando una bicapa estable · Hacia: Estructura la [[membrana plasmática|plasma-membrane]], [[vesículas|vesicle]] y orgánulos',
      scientific: 'Glicerofosfolípido anfipático (~760 Da para POPC, ~2.5 nm de longitud, ~0.65 nm² de área transversal). Carbonos sn-1 y sn-2 del glicerol esterificados a cadenas acilo C16–C20; sn-3 unido a un grupo fosfato polar (colina, etanolamina, serina o inositol). Difusión lateral D ≈ 1–5 µm²/s a 37 °C; inversión transbicapa espontánea (flip-flop) con t₁/₂ de horas a días, regulada por flipasas y escramblasas.'
    }
  },
  'head-group': {
    en: {
      simple: 'The head group is the electrically charged tip of a membrane lipid that happily touches water. It forms the wet inner and outer faces of every membrane in the cell.',
      story: 'Assembled from dietary choline, a negatively charged [[phosphate|phosphate]], and a glycerol hinge, this compact tip wears both a positive [[nitrogen|atom-n]] crown and a negative oxygen belt. That permanent zwitterionic sparkle locks neighboring [[water|water]] molecules into a protective hydration cushion and gives [[peripheral proteins|peripheral-protein]] an electrostatic dock on the inner face of the [[plasma membrane|plasma-membrane]].',
      blueprint: 'Role: Hydrophilic solvent interface and protein-docking surface of a [[phospholipid|phospholipid]] · From: Choline, [[phosphate|phosphate]], and glycerol precursors in [[smooth ER|smooth-er]] · Inside: Zwitterionic charge pairs hydrogen-bond and coordinate [[water|water]] · To: Faces [[cytosol|cytosol]] or extracellular fluid; recruits [[peripheral proteins|peripheral-protein]]',
      scientific: 'Phosphocholine moiety (~0.8 nm axial thickness, MW ~184 Da fragment): quaternary trimethylammonium group [−N⁺(CH₃)₃] paired with anionic phosphodiester (−PO₄⁻−), yielding net neutral zwitterion at physiological pH 7.4. Binds 10–12 tightly ordered hydration shell H₂O molecules per headgroup, creating a strong short-range hydration repulsion barrier against uncontrolled membrane fusion.'
    },
    es: {
      simple: 'La cabeza polar es el extremo con carga eléctrica de un lípido de membrana que disfruta el contacto con el agua. Forma las caras húmedas interna y externa de todas las membranas celulares.',
      story: 'Ensamblada con colina de la dieta, un grupo [[fosfato|phosphate]] negativo y una bisagra de glicerol, esta pequeña punta luce a la vez una corona positiva de [[nitrógeno|atom-n]] y un cinturón negativo de oxígeno. Ese destello eléctrico permanente atrapa un colchón protector de [[agua|water]] alrededor del [[fosfolípido|phospholipid]] y ofrece un muelle magnético donde atracan las [[proteínas periféricas|peripheral-protein]] bajo la membrana.',
      blueprint: 'Rol: Interfaz hidrofílica y plataforma de anclaje de un [[fosfolípido|phospholipid]] · De: Precursores de colina, [[fosfato|phosphate]] y glicerol en el [[RE liso|smooth-er]] · Dentro: Par zwitteriónico coordina capas de hidratación de [[agua|water]] · Hacia: Mira hacia el [[citosol|cytosol]] o el exterior y fija [[proteínas periféricas|peripheral-protein]]',
      scientific: 'Grupo fosfocolina (~0.8 nm de espesor axial): amonio cuaternario [−N⁺(CH₃)₃] acoplado a un fosfodiéster aniónico (−PO₄⁻−), formando un zwitterión eléctricamente neutro a pH 7.4. Coordina entre 10 y 12 moléculas de H₂O en su primera esfera de hidratación, generando una barrera repulsiva de corto alcance que impide la fusión espontánea e inespecífica de bicapas.'
    }
  },
  'fatty-acid-tail': {
    en: {
      simple: 'Fatty-acid tails are greasy carbon chains dangling beneath each membrane lipid. A sharp bend in one of the two tails keeps them from packing into solid wax, so the cell stays soft and flexible.',
      story: 'Stitched from [[carbon|atom-c]] and hydrogen links inside the [[cytosol|cytosol]] and elongated in the smooth ER, one tail hangs straight while its partner kicks sideways at a stubborn cis double bond. That molecular elbow shoves neighboring [[phospholipids|phospholipid]] apart so the [[plasma membrane|plasma-membrane]] never freezes into brittle candle wax—and when fuel runs low, lipases snip similar tails from lipid droplets to feed the [[mitochondria|mitochondrion]].',
      blueprint: 'Role: Hydrophobic barrier core and high-density metabolic fuel · From: Acetyl-CoA polymerization in [[cytosol|cytosol]] and desaturation in [[smooth ER|smooth-er]] · Inside: Saturated C16/C18 chain plus cis-unsaturated bent chain prevent crystalline packing · To: Seals [[phospholipid|phospholipid]] bilayers or oxidizes in [[mitochondria|mitochondrion]]/[[peroxisomes|peroxisome]]',
      scientific: 'Acyl hydrocarbon chains (~1.8 nm extended length), typically sn-1 palmitoyl (16:0, saturated all-trans) and sn-2 oleoyl (18:1 Δ⁹-cis, ~30° kink). Van der Waals dispersion and hydrophobic exclusion exclude ions (permeability P_Na⁺ ≈ 10⁻¹⁴ cm/s) while cis-unsaturation lowers the gel-to-liquid-crystalline phase transition temperature (Tm ≈ −2 °C for POPC vs +41 °C for DPPC).'
    },
    es: {
      simple: 'Las colas de ácidos grasos son cadenas aceitosas de carbono que cuelgan de cada lípido de membrana. Un quiebre permanente en una de las dos colas impide que se apelmace como cera sólida, manteniendo flexible a la célula.',
      story: 'Tejidas eslabón a eslabón con [[carbono|atom-c]] e hidrógeno en el [[citosol|cytosol]] y retocadas en el RE liso, una cola cae recta mientras su compañera lanza un codazo lateral gracias a un doble enlace cis. Ese codo molecular separa a los [[fosfolípidos|phospholipid]] vecinos para que la [[membrana plasmática|plasma-membrane]] jamás se congele como sebo rígido, y cuando escasea el alimento, colas gemelas guardadas en gotas lipídicas marchan hacia las [[mitocondrias|mitochondrion]] para arder.',
      blueprint: 'Rol: Núcleo hidrofóbico aislante y reserva energética densa · De: Síntesis desde acetil-CoA en [[citosol|cytosol]] y desaturación en [[RE liso|smooth-er]] · Dentro: Cadena saturada recta más cadena cis-insaturada acodada evitan la cristalización · Hacia: Sella bicapas de [[fosfolípidos|phospholipid]] o alimenta β-oxidación en [[mitocondrias|mitochondrion]] y [[peroxisomas|peroxisome]]',
      scientific: 'Cadenas acilo hidrocarbonadas (~1.8 nm de longitud), típicamente palmitoil en sn-1 (16:0, todo-trans) y oleoil en sn-2 (18:1 Δ⁹-cis, ángulo de ~30°). El núcleo apolar bloquea el paso libre de iones (P_Na⁺ ≈ 10⁻¹⁴ cm/s), mientras la insaturación cis reduce la temperatura de transición de fase gel a cristal líquido (Tm ≈ −2 °C en POPC frente a +41 °C en DPPC).'
    }
  },
  'cholesterol': {
    en: {
      simple: 'Cholesterol is a stiff, flat four-ring molecule tucked between floppy membrane lipids like wooden shims. It stops the membrane from getting too runny when warm or freezing stiff when cold.',
      story: 'Hammered together through nearly thirty enzymatic steps in the [[smooth ER|smooth-er]] or unpacked from incoming [[vesicles|vesicle]], this flat four-ring steroid slips snugly beside the wavy [[fatty-acid tails|fatty-acid-tail]] of the [[plasma membrane|plasma-membrane]]. When heat makes lipids thrash wildly, its rigid rings rein them in; when chill tries to pack them solid, it wedges them apart, while corralling [[GPCRs|gpcr]] onto floating signaling rafts.',
      blueprint: 'Role: Bidirectional fluidity buffer and lipid-raft organizer · From: De novo mevalonate pathway in [[smooth ER|smooth-er]] or LDL receptor [[vesicle|vesicle]] uptake · Inside: Planar tetracyclic steroid ring restrains upper [[fatty-acid tails|fatty-acid-tail]] while spacing lower tips · To: Stabilizes [[plasma membrane|plasma-membrane]], [[lipid droplets|lipid-droplet]] (as esters), and steroid synthesis',
      scientific: 'Sterol lipid C₂₇H₄₆O (386.65 Da, ~1.9 nm length): planar cyclopentanoperhydrophenanthrene four-ring core, C3 β-hydroxyl polar anchor, and C17 isooctyl tail. Comprises 30–45 mol% of animal plasma membranes vs ~5 mol% in ER; induces the liquid-ordered (Lo) phase, increasing bilayer thickness by ~0.4 nm, decreasing passive water/proton permeability, and nucleating sphingolipid microdomains.'
    },
    es: {
      simple: 'El colesterol es una molécula plana y rígida de cuatro anillos encajada como una cuña entre los lípidos blandos de la membrana. Evita que la membrana se vuelva demasiado líquida con el calor o quebradiza con el frío.',
      story: 'Forjado tras casi treinta pasos enzimáticos en el [[RE liso|smooth-er]] o desembarcado de [[vesículas|vesicle]] endocíticas, este esteroide plano de cuatro anillos se desliza entre las [[colas de ácidos grasos|fatty-acid-tail]] de la [[membrana plasmática|plasma-membrane]]. Si sube la temperatura, sus anillos rígidos frenan el alboroto lipídico; si arrecia el frío, actúa como cuña anticongelante y agrupa receptores [[GPCR|gpcr]] en balsas flotantes de señalización.',
      blueprint: 'Rol: Amortiguador térmico de fluidez y organizador de balsas lipídicas · De: Vía del mevalonato en [[RE liso|smooth-er]] o endocitosis por [[vesículas|vesicle]] · Dentro: Anillo esteroideo tetracíclico ordena las [[colas acilo|fatty-acid-tail]] superiores e impide su colapso cristalino · Hacia: Estabiliza la [[membrana plasmática|plasma-membrane]] y se almacena esterificado en [[gotas lipídicas|lipid-droplet]]',
      scientific: 'Esterol C₂₇H₄₆O (386.65 Da, ~1.9 nm de largo): núcleo plano de ciclopentanoperhidrofenantreno, grupo β-hidroxilo polar en C3 y cadena isooctilo en C17. Representa el 30–45 % molar de la membrana plasmática animal (~5 % en el RE); induce la fase líquido-ordenada (Lo), engrosa la bicapa ~0.4 nm, reduce la permeabilidad pasiva al agua y organiza microdominios de esfingolípidos.'
    }
  },
  'channel-protein': {
    en: {
      simple: 'An aquaporin channel is a dedicated VIP water tunnel punched straight through the oily cell membrane. Billions of water molecules zip through it single-file every second while ions and protons get bounced at the door.',
      story: 'Woven on the [[rough ER|rough-er]] and delivered to the [[plasma membrane|plasma-membrane]] in vesicles, six tilted [[alpha-helices|alpha-helix]] surround an hourglass pore barely wide enough for one [[water|water]] molecule at a time. Midway down the chute, twin asparagine guards flip each passing molecule upside down, snapping the hydrogen-bond wire that rogue protons ride on so the [[cytosol|cytosol]] stays hydrated without short-circuiting the city’s electrical grid.',
      blueprint: 'Role: High-throughput, proton-excluding selective water pore · From: Translated at [[rough ER|rough-er]], matured in [[Golgi|golgi]], inserted into [[plasma membrane|plasma-membrane]] · Inside: Six transmembrane [[alpha-helices|alpha-helix]] + NPA constriction filter pass single-file [[water|water]] · To: Rapidly equilibrates osmotic volume of [[cytosol|cytosol]]',
      scientific: 'Homotetrameric integral membrane protein (monomer ~28 kDa, ~6 nm tetramer width; human AQP1 PDB 1FQY), each subunit forming an independent ~2.8 Å diameter hourglass pore from 6 transmembrane α-helices and 2 half-helices bearing conserved Asn-Pro-Ala (NPA) motifs and an ar/R selectivity filter. Conducts ~3 × 10⁹ H₂O molecules·subunit⁻¹·s⁻¹ dynamically driven by osmotic gradients while completely blocking H₃O⁺ Grotthuss hopping.'
    },
    es: {
      simple: 'Una acuaporina es un túnel exclusivo para el agua que atraviesa de lado a lado la piel aceitosa de la célula. Miles de millones de moléculas de agua cruzan en fila india cada segundo mientras los iones rebotan en la entrada.',
      story: 'Tejida en el [[RE rugoso|rough-er]] e incrustada en la [[membrana plasmática|plasma-membrane]] mediante vesículas, seis [[hélices α|alpha-helix]] inclinadas rodean un reloj de arena tan estrecho que solo cabe una molécula de [[agua|water]] a la vez. Justo a mitad del túnel, dos guardianes de asparagina obligan a cada molécula a dar una voltereta, cortando el cable de protones que intentaría colarse para hidratar el [[citosol|cytosol]] sin provocar un apagón eléctrico en la ciudad.',
      blueprint: 'Rol: Poro selectivo de agua de ultra-alto flujo y bloqueo de protones · De: Sintetizada en [[RE rugoso|rough-er]], procesada en [[Golgi|golgi]] e insertada en [[membrana plasmática|plasma-membrane]] · Dentro: Seis [[hélices α|alpha-helix]] y el filtro NPA conducen [[agua|water]] en fila india · Hacia: Equilibra al instante el volumen osmótico del [[citosol|cytosol]]',
      scientific: 'Proteína integral homotetramérica (monómero ~28 kDa, ancho tetramérico ~6 nm; AQP1 humana PDB 1FQY), donde cada subunidad forma un poro independiente de ~2.8 Å de diámetro mínimo con 6 hélices α transmembrana y 2 semihélices con motivos conservados Asn-Pro-Ala (NPA) y filtro ar/R. Transporta ~3 × 10⁹ moléculas de H₂O·subunidad⁻¹·s⁻¹ por ósmosis pasiva, impidiendo la conducción protónica tipo Grotthuss.'
    }
  },
  'peripheral-protein': {
    en: {
      simple: 'A peripheral protein clips onto one wet face of a membrane without piercing its oily middle. It acts like a bracket that bolts the cell’s internal scaffolding to the outer skin or passes along quick chemical messages.',
      story: 'Folded by free [[ribosomes|ribosome]] floating in the [[cytosol|cytosol]], this nimble globular worker never plunges into the greasy membrane core; instead it latches onto negatively charged head groups or the cytosolic tail of an integral receptor. One moment it rivets flexible [[actin filaments|actin-filament]] beneath the [[plasma membrane|plasma-membrane]] so the wall will not tear, and at the flash of a hormone signal it unclips to sprint an urgent memo straight toward the [[nucleus|nucleus]].',
      blueprint: 'Role: Reversible membrane-surface scaffold anchor and signal relay · From: Synthesized by cytosolic [[ribosomes|ribosome]] from [[amino acids|amino-acid]] · Inside: Electrostatic patches, PH/C2 domains, or lipid anchors grip [[head groups|head-group]] · To: Tethers [[actin filaments|actin-filament]] to [[plasma membrane|plasma-membrane]] or relays signals into [[cytosol|cytosol]]',
      scientific: 'Water-soluble globular polypeptide (typically 20–100 kDa, 3–6 nm) associating non-covalently with membrane surfaces (Kd ≈ 10⁻⁹–10⁻⁵ M) via cationic patches binding anionic phosphatidylserine/PIP₂ headgroups (e.g., PH, C2, FERM domains) or covalently via prenyl, myristoyl, or palmitoyl tethers. Dissociable by high ionic strength (0.5–1 M NaCl) or pH shift without disrupting the phospholipid bilayer.'
    },
    es: {
      simple: 'Una proteína periférica se engancha a una sola cara húmeda de la membrana sin perforar su centro aceitoso. Funciona como una abrazadera que sujeta el andamiaje interno a la piel celular o releva mensajes rápidos.',
      story: 'Plegada por [[ribosomas|ribosome]] libres en pleno [[citosol|cytosol]], esta obrera globular jamás se hunde en el aceite de la bicapa: se abrocha magnéticamente a las cabezas polares negativas o al talón interno de un receptor vecino. En segundos remacha la red de [[filamentos de actina|actin-filament]] contra la [[membrana plasmática|plasma-membrane]] para que la muralla resista tirones, o se suelta al recibir una señal química para llevar el aviso corriendo hacia el [[núcleo|nucleus]].',
      blueprint: 'Rol: Anclaje mecánico reversible y relevo de señales en la cara de la membrana · De: Traducida por [[ribosomas|ribosome]] libres a partir de [[aminoácidos|amino-acid]] · Dentro: Dominios electrostáticos o anclas lipídicas se fijan a [[cabezas polares|head-group]] · Hacia: Une [[filamentos de actina|actin-filament]] a la [[membrana plasmática|plasma-membrane]] o propaga cascadas en el [[citosol|cytosol]]',
      scientific: 'Polipéptido globular hidrosoluble (20–100 kDa, 3–6 nm) unido de forma reversible a una cara de la bicapa (Kd ≈ 10⁻⁹–10⁻⁵ M) mediante dominios catiónicos afines a fosfatidilserina o PIP₂ (dominios PH, C2, FERM) o anclajes covalentes miristoilo/palmitoilo/prenilo. Se libera con fuerza iónica elevada (0.5–1 M NaCl) o cambios de pH sin disgregar la bicapa lipídica.'
    }
  },
  'glycocalyx': {
    en: {
      simple: 'The glycocalyx is a fuzzy forest of microscopic sugar antlers sprouting from the outside of the cell. It acts as both a slippery protective cushion and the official ID badge that tells immune patrol cells "I belong here."',
      story: 'Inside the [[Golgi apparatus|golgi]], master sugar-smiths weld branching trees of [[glucose|glucose]], galactose, and sialic acid onto outgoing proteins and lipids before [[vesicles|vesicle]] unfurl them across the outer face of the [[plasma membrane|plasma-membrane]]. This glistening carbohydrate canopy traps a cushion of [[water|water]] so blood cells glide past capillary walls without scraping, while displaying the exact molecular passport—like ABO blood-group badges—that stops roving immune hunters from blowing the city up.',
      blueprint: 'Role: Extracellular identity coat, hydration shield, and mechanosensor · From: Oligosaccharides assembled on glycoproteins/glycolipids in [[rough ER|rough-er]] and [[Golgi|golgi]] · Inside: Branched [[glucose|glucose]]-family sugar trees carry negative sialic acid charges and bind [[water|water]] · To: Presents self-ID antigens on [[plasma membrane|plasma-membrane]] and cushions shear stress',
      scientific: 'Extracellular carbohydrate pericellular matrix, 10–100 nm thick (up to ~500 nm on vascular endothelium), composed of N- and O-linked glycoproteins, glycosphingolipids, and transmembrane proteoglycans (syndecans, glypicans bearing heparan/chondroitin sulfate GAGs). Terminal N-acetylneuraminic (sialic) acids impart dense negative surface charge (zeta potential), mediating selectin rolling, ABO/MHC recognition, and endothelial shear-stress transduction.'
    },
    es: {
      simple: 'El glucocálix es un bosque esponjoso de antenas de azúcar que brota hacia fuera en la piel de la célula. Sirve a la vez de almohadilla resbaladiza protectora y de carné de identidad ante las patrullas del sistema inmunitario.',
      story: 'En los talleres del [[aparato de Golgi|golgi]], artesanos enzimáticos sueldan arboledas ramificadas de [[glucosa|glucose]] y otros azúcares sobre proteínas y lípidos antes de que las [[vesículas|vesicle]] los desplieguen en la cara exterior de la [[membrana plasmática|plasma-membrane]]. Este dosel azucarado retiene un manto resbaladizo de [[agua|water]] que amortigua roces mecánicos y exhibe a plena vista el pasaporte molecular —incluidos tus grupos sanguíneos— que convence a los linfocitos patrulleros de que esta ciudad es aliada.',
      blueprint: 'Rol: Cubierta de identidad celular, escudo hidratado y mecanosensor · De: Oligosacáridos ensamblados sobre lípidos y proteínas en [[RE rugoso|rough-er]] y [[Golgi|golgi]] · Dentro: Cadenas ramificadas de azúcares tipo [[glucosa|glucose]] retienen [[agua|water]] y carga negativa · Hacia: Expone antígenos propios en la [[membrana plasmática|plasma-membrane]] y protege frente a fricción',
      scientific: 'Matriz pericelular glucídica externa de 10–100 nm de espesor (hasta ~500 nm en endotelio vascular), integrada por N- y O-glicoproteínas, glicoesfingolípidos y proteoglicanos con glucosaminoglicanos (heparán y condroitín sulfato). Los residuos terminales de ácido siálico (N-acetilneuramínico) confieren una densa carga negativa superficial que regula repulsión electrostática, adhesión por selectinas, antígenos ABO y mecanotransducción endotelial.'
    }
  },
  'glucose': {
    en: {
      simple: 'Glucose is a compact six-carbon sugar ring packed with sun-forged chemical energy. Cells either crack it open for fast fuel or snap rings together into external ID tags.',
      story: 'Originally forged from sunlight in distant green leaves and carried to your tissues by the bloodstream, this six-[[carbon|atom-c]] ring slips through GLUT gates in the [[plasma membrane|plasma-membrane]] and gets immediately trapped with a phosphate tag so it cannot wander back out. Ten rapid-fire enzymes in the cytosol snap the ring in half into pyruvate—harvesting quick pocket-change ATP—before handing those three-carbon embers to the [[mitochondria|mitochondrion]] for the main inferno, or routing spare rings to the [[Golgi|golgi]] to weave the [[glycocalyx|glycocalyx]].',
      blueprint: 'Role: Primary glycolytic fuel and structural carbohydrate monomer · From: Extracellular bloodstream import across [[plasma membrane|plasma-membrane]] via GLUT transporters · Inside: C₆H₁₂O₆ pyranose ring phosphorylated by hexokinase in [[cytosol|cytosol]] · To: Pyruvate/NADH for [[mitochondria|mitochondrion]], ribose-5-P for [[nucleotides|nucleotide]], or [[glycocalyx|glycocalyx]] glycans',
      scientific: 'D-Glucopyranose, C₆H₁₂O₆ (180.16 Da, ~0.9 nm chair ring; ~36:64 α:β anomeric equilibrium in aqueous solution). Imported via facilitative GLUT1–4 uniporters (Km ≈ 1–5 mM) or Na⁺-coupled SGLT1/2 symporters, then phosphorylated to glucose-6-phosphate. Complete aerobic oxidation (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, ΔG°′ = −2,870 kJ/mol) yields ~30–32 ATP per molecule.'
    },
    es: {
      simple: 'La glucosa es un pequeño anillo de azúcar de seis carbonos cargado de energía química. La célula la parte por la mitad como combustible rápido o engarza varios anillos para tejer sus etiquetas exteriores.',
      story: 'Forjada originalmente con luz solar en hojas lejanas y traída hasta aquí por el torrente sanguíneo, esta joya hexagonal de seis [[carbonos|atom-c]] cruza las compuertas de la [[membrana plasmática|plasma-membrane]] y recibe al instante un grillete de fosfato para que no pueda escapar. Diez enzimas veloces del citosol parten el anillo en dos mitades de piruvato —cobrando un anticipo rápido de ATP— antes de entregar esas brasas a las [[mitocondrias|mitochondrion]] para la gran combustión, o desviar anillos extra hacia el [[Golgi|golgi]] para bordar el [[glucocálix|glycocalyx]].',
      blueprint: 'Rol: Combustible primario de la glucólisis y monómero estructural glucídico · De: Sangre/fluido intersticial a través de la [[membrana plasmática|plasma-membrane]] (GLUT) · Dentro: Anillo piranósico C₆H₁₂O₆ fosforilado por hexoquinasa en el [[citosol|cytosol]] · Hacia: Piruvato para [[mitocondrias|mitochondrion]], ribosa para [[nucleótidos|nucleotide]] o cadenas del [[glucocálix|glycocalyx]]',
      scientific: 'D-Glucopiranosa, C₆H₁₂O₆ (180.16 Da, anillo silla ~0.9 nm; equilibrio anomérico ~36:64 α:β en agua). Ingresa vía transportadores facilitativos GLUT1–4 (Km ≈ 1–5 mM) o cotransportadores Na⁺/glucosa SGLT1/2 y es retenida como glucosa-6-fosfato. Su oxidación aeróbica completa (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, ΔG°′ = −2,870 kJ/mol) rinde ~30–32 moléculas de ATP.'
    }
  },
  'cytoskeleton': {
    en: {
      simple: 'The cytoskeleton is a self-rebuilding skeleton, muscle system, and highway network all in one. Without a rigid outer wall, the animal cell relies on three kinds of protein fibers to hold its shape, haul cargo, and crawl.',
      story: 'Because an animal cell wears no wooden armor, a single poke would pop its [[plasma membrane|plasma-membrane]] if not for a living web of girders, ropes, and muscles spanning the entire cytosol. Fresh protein bricks minted by ribosomes snap together using ATP and GTP fuel from [[mitochondria|mitochondrion]], tearing down old roads and laying new bridges in seconds whenever the city needs to turn.\n\nThree specialists share the load: hollow microtubules radiate from the [[centrosome|centrosome]] as freight railways for motor proteins, flexible actin filaments tense and push right under the outer skin, and tough [[intermediate filaments|intermediate-filament]] lash the nucleus to [[cell junctions|cell-junction]] so mechanical shock waves disperse harmlessly.',
      blueprint: 'Role: Dynamic mechanical scaffold, intracellular transport grid, and force generator · From: Monomeric subunits synthesized on [[ribosomes|ribosome]] plus ATP/GTP from [[mitochondria|mitochondrion]] · Inside: Co-operates 25 nm [[microtubules|microtubule]], 7 nm [[actin filaments|actin-filament]], and 10 nm [[intermediate filaments|intermediate-filament]] · To: Positions organelles, guides [[motor-protein|motor-protein]] [[vesicles|vesicle]], braces [[plasma membrane|plasma-membrane]] and [[cell junctions|cell-junction]]',
      scientific: 'Tripartite filamentous polymer network spanning the eukaryotic cytoplasm: (1) microtubules (25 nm O.D., αβ-tubulin, GTP-driven dynamic instability, flexural persistence length Lp ≈ 5 mm), (2) F-actin microfilaments (7 nm, G-actin, ATP-driven treadmilling, Lp ≈ 15 µm), and (3) intermediate filaments (10 nm, apolar coiled-coil tetramers, non-nucleotide-hydrolyzing, Lp ≈ 1 µm, strain-stiffening up to ~300% elongation).'
    },
    es: {
      simple: 'El citoesqueleto es a la vez el andamiaje, la musculatura y la red de autopistas de la célula, capaz de desmontarse y reconstruirse en segundos. Tres tipos de fibras sostienen su forma, arrastran cargas y le permiten moverse.',
      story: 'Como la célula animal no viste armadura rígida, cualquier empujón reventaría su [[membrana plasmática|plasma-membrane]] si no contara con un entramado vivo de vigas, cables y músculos tendido por todo el citosol. Ladrillos proteicos recién salidos de los ribosomas se ensamblan gastando ATP y GTP de las [[mitocondrias|mitochondrion]], demoliendo avenidas viejas y levantando puentes nuevos en segundos.\n\nTres gremios se reparten la obra: los microtúbulos huecos irradian desde el [[centrosoma|centrosome]] como vías férreas para las proteínas motoras, los filamentos de actina tiran y empujan justo bajo la piel celular, y los [[filamentos intermedios|intermediate-filament]] amarran el núcleo a las [[uniones celulares|cell-junction]] para absorber tirones bruscos sin desgarrar el tejido.',
      blueprint: 'Rol: Andamiaje mecánico dinámico, red ferroviaria interna y generador de fuerza · De: Subunidades traducidas en [[ribosomas|ribosome]] y ATP/GTP de [[mitocondrias|mitochondrion]] · Dentro: Coordina [[microtúbulos|microtubule]] (25 nm), [[filamentos de actina|actin-filament]] (7 nm) y [[filamentos intermedios|intermediate-filament]] (10 nm) · Hacia: Posiciona orgánulos, guía [[vesículas|vesicle]] con [[proteínas motoras|motor-protein]] y refuerza [[uniones celulares|cell-junction]]',
      scientific: 'Red polimérica tripartita citoplasmática: (1) microtúbulos (25 nm Ø externo, dímeros αβ-tubulina, inestabilidad dinámica dependiente de GTP, longitud de persistencia Lp ≈ 5 mm), (2) microfilamentos de actina F (7 nm, actina G + ATP, recambio polarizado, Lp ≈ 15 µm) y (3) filamentos intermedios (10 nm, tetrámeros apolares en superhélice, Lp ≈ 1 µm, extensibles hasta ~300 % con endurecimiento por deformación).'
    }
  },
  'microtubule': {
    en: {
      simple: 'Microtubules are stiff, hollow protein pipes that serve as the main interstate highways of the cell. Walking motor proteins march along them hauling cargo bags, and during cell division they reassemble to pull chromosomes apart.',
      story: 'Anchored by their minus ends in the [[centrosome|centrosome]] near the city center, thirteen columns of [[tubulin|tubulin]] dimers spiral outward into a rigid hollow pipe twenty-five nanometers wide. As long as fresh GTP-loaded dimers cap the growing tip, the highway shoots out toward the plasma membrane, but the instant GTP runs down to GDP the tip peels apart like a banana skin—letting the cell reroute traffic on the fly while [[motor proteins|motor-protein]] haul [[vesicles|vesicle]] and whole [[mitochondria|mitochondrion]] down its lanes.',
      blueprint: 'Role: Polarized intracellular railway and mitotic spindle girder · From: Nucleated at γ-TuRC rings in [[centrosome|centrosome]] from GTP-[[tubulin|tubulin]] dimers · Inside: 13 protofilaments form a hollow cylinder undergoing GTP-cap growth and GDP catastrophe · To: Guides kinesin/dynein [[motor proteins|motor-protein]] carrying [[vesicles|vesicle]], positions [[Golgi|golgi]], and segregates [[chromosomes|chromosome]]',
      scientific: 'Hollow polar cylinder (25 nm outer diameter, ~15 nm lumen) assembled from 13 parallel protofilaments of head-to-tail αβ-tubulin heterodimers in a B-lattice with a 3-monomer seam. Minus end capped at centrosomal γ-tubulin ring complexes (γ-TuRC); plus end exhibits dynamic instability (polymerization ~10–20 µm/min, catastrophe upon β-tubulin GTP hydrolysis to GDP, rapid depolymerization ~30–50 µm/min).'
    },
    es: {
      simple: 'Los microtúbulos son tubos rígidos y huecos de proteína que funcionan como las grandes autopistas de la célula. Sobre ellos caminan motores moleculares cargados de paquetes, y al dividirse la célula se reorganizan para repartir los cromosomas.',
      story: 'Anclados por su extremo menos en el [[centrosoma|centrosome]], trece hileras de dímeros de [[tubulina|tubulin]] se cierran en espiral formando una tubería hueca y firme de veinticinco nanómetros de grosor. Mientras lleguen dímeros frescos cargados con GTP, la autopista avanza veloz hacia la membrana plasmática, pero si el capuchón pierde su energía la punta se deshilacha de golpe para rediseñar el mapa vial, todo mientras las [[proteínas motoras|motor-protein]] trotan por su lomo remolcando [[vesículas|vesicle]] y [[mitocondrias|mitochondrion]].',
      blueprint: 'Rol: Vía férrea intracelular polarizada y viga del huso mitótico · De: Nucleado en anillos γ-TuRC del [[centrosoma|centrosome]] con dímeros de [[tubulina|tubulin]]-GTP · Dentro: Cilindro hueco de 13 protofilamentos con crecimiento por capuchón GTP y catástrofe GDP · Hacia: Dirige [[proteínas motoras|motor-protein]] con [[vesículas|vesicle]], ordena el [[Golgi|golgi]] y separa [[cromosomas|chromosome]]',
      scientific: 'Cilindro polar hueco (25 nm Ø externo, ~15 nm de lumen) compuesto por 13 protofilamentos paralelos de heterodímeros αβ-tubulina en red tipo B con costura de 3 monómeros. Extremo menos anclado al complejo γ-TuRC centrosómico; extremo más con inestabilidad dinámica (crecimiento ~10–20 µm/min con capuchón GTP, catástrofe tras hidrólisis a GDP en β-tubulina y despolimerización a ~30–50 µm/min).'
    }
  },
  'tubulin': {
    en: {
      simple: 'A tubulin dimer is a twin-brick pair of tightly joined proteins that snap end-to-end to build hollow microtubule pipes. A built-in chemical timer flips after assembly, letting old pipes unzip and recycle in seconds.',
      story: 'Folded inside specialized chaperone cages in the [[cytosol|cytosol]] from [[amino acids|amino-acid]], α-tubulin and β-tubulin lock together as inseparable twins, each clutching a guanine nucleotide. When β-tubulin swaps spent GDP for fresh GTP, the pair clicks eagerly onto the growing tip of a [[microtubule|microtubule]]; seconds later its internal clock snaps GTP to GDP, storing spring-loaded tension that eventually pops the brick back into the cytosol for another round.',
      blueprint: 'Role: Self-timing dimeric building brick of [[microtubules|microtubule]] and [[centrioles|centriole]] · From: Translated on cytosolic [[ribosomes|ribosome]], folded via CCT/TRiC chaperonin, charged with GTP · Inside: Non-exchangeable α-GTP + hydrolyzable β-GTP control straight vs curved conformation · To: Polymerizes into [[microtubule|microtubule]] lattices, [[centrioles|centriole]], and [[cilium|cilium]] axonemes',
      scientific: 'αβ-Tubulin heterodimer (~100 kDa total; α ~50 kDa + β ~50 kDa, 8 nm × 4.5 nm × 4 nm; PDB 1JFF). α-Tubulin binds GTP irreversibly at the non-exchangeable N-site; β-tubulin binds exchangeable GTP/GDP at the E-site exposed at the (+) end. Post-incorporation GTP hydrolysis induces ~12° intradimer curvature strain that drives rapid protofilament peeling upon loss of the stabilizing GTP cap.'
    },
    es: {
      simple: 'El dímero de tubulina es un ladrillo doble de proteínas gemelas que se encajan en fila para levantar los microtúbulos. Incluye un temporizador químico interno que permite desmontar y reciclar las tuberías viejas en segundos.',
      story: 'Plegadas dentro de jaulas chaperonas en el [[citosol|cytosol]] a partir de [[aminoácidos|amino-acid]], la α-tubulina y la β-tubulina nacen abrazadas como mellizas inseparables. En cuanto la mitad β carga combustible GTP nuevo, el par encaja recto en la punta viva de un [[microtúbulo|microtubule]]; poco después su reloj interno quema ese GTP a GDP, tensando el ladrillo como un resorte listo para saltar y volver a usarse en otra avenida o en un [[centriolo|centriole]].',
      blueprint: 'Rol: Ladrillo dimérico con temporizador GTP de [[microtúbulos|microtubule]] y [[centriolos|centriole]] · De: Traducido en [[ribosomas|ribosome]] citosólicos, plegado por chaperonina CCT y cargado con GTP · Dentro: Sitio N fijo (α-GTP) y sitio E hidrolizable (β-GTP→GDP) alternan geometría recta o curva · Hacia: Ensambla [[microtúbulos|microtubule]], [[centriolos|centriole]] y el [[cilio primario|cilium]]',
      scientific: 'Heterodímero αβ-tubulina (~100 kDa totales; ~50 kDa por monómero, 8 × 4.5 × 4 nm; PDB 1JFF). La subunidad α une GTP de modo no intercambiable (sitio N); la subunidad β une GTP/GDP intercambiable (sitio E) expuesto en el extremo (+). La hidrólisis del GTP en β-tubulina tras el ensamblaje introduce ~12° de tensión de curvatura alostérica que impulsa el pelado rápido del protofilamento.'
    }
  },
  'actin-filament': {
    en: {
      simple: 'Actin filaments are thin, twisted two-strand protein cables concentrated right beneath the cell’s outer skin. Paired with tiny myosin motors, they let the cell pinch in two, swallow droplets, and crawl forward.',
      story: 'Just beneath the fragile [[plasma membrane|plasma-membrane]], thousands of [[G-actin|g-actin]] beads twist into twin-stranded cables seven nanometers thick, fed by steady ATP shipments from [[mitochondria|mitochondrion]]. At the leading edge of a crawling cell, branching cables push the membrane forward like tent poles; moments later, myosin motors yank those same cables inward to pinch off incoming [[vesicles|vesicle]], stiffen [[microvilli|microvillus]], or cinch a dividing cell cleanly in half.',
      blueprint: 'Role: Cortical contractile mesh, protrusive engine, and short-range track · From: Polymerized from ATP-[[G-actin|g-actin]] monomers nucleated by Arp2/3 and formins · Inside: Polarized right-handed double-helical filament treadmills (barbed + growth, pointed − disassembly) · To: Braces [[plasma membrane|plasma-membrane]], cores [[microvilli|microvillus]], pinches [[vesicles|vesicle]], and drives cytokinesis',
      scientific: 'Polarized right-handed two-stranded helical microfilament (F-actin, 7 nm diameter, 37 nm half-helical pitch, ~13.5 subunits per turn). Barbed (+) end critical concentration Cc⁺ ≈ 0.1 µM vs pointed (−) end Cc⁻ ≈ 0.8 µM for ATP-actin, driving steady-state treadmilling modulated by profilin, cofilin, Arp2/3 (70° branches), and non-muscle myosin II contractile stress fibers (2–5 pN per motor head).'
    },
    es: {
      simple: 'Los filamentos de actina son finos cables de dos hebras trenzadas tendidos justo debajo de la piel celular. Junto con diminutos motores de miosina, permiten a la célula avanzar, tragar gotitas y estrangularse en dos al dividirse.',
      story: 'Justo bajo la delicada [[membrana plasmática|plasma-membrane]], miles de cuentas de [[actina G|g-actin]] se trenzan en cuerdas dobles de siete nanómetros cebadas con ATP de las [[mitocondrias|mitochondrion]]. En el frente de avance empujan la piel hacia fuera como varillas de tienda de campaña; un instante después, motores de miosina tiran de esas mismas cuerdas para estrangular [[vesículas|vesicle]] entrantes, erguir [[microvellosidades|microvillus]] o ceñir la cintura de la célula cuando toca dividirse.',
      blueprint: 'Rol: Malla contráctil cortical y motor de protrusión superficial · De: Polimerizado desde monómeros de [[actina G|g-actin]]-ATP mediante Arp2/3 y forminas · Dentro: Doble hélice polarizada en recambio continuo (crece por extremo +, se acorta por extremo −) · Hacia: Sostiene la [[membrana plasmática|plasma-membrane]], arma [[microvellosidades|microvillus]] y escinde [[vesículas|vesicle]]',
      scientific: 'Microfilamento helicoidal dextrógiro polarizado de dos protofilamentos (actina F, 7 nm de diámetro, paso semihélice de 37 nm, ~13.5 monómeros por vuelta). Concentración crítica asimétrica para actina-ATP (Cc⁺ ≈ 0.1 µM en extremo barbado frente a Cc⁻ ≈ 0.8 µM en extremo puntiagudo) que impulsa el treadmilling, regulado por profilina, cofilina, complejo Arp2/3 (ramas a 70°) y miosina II (~2–5 pN por cabeza).'
    }
  },
  'g-actin': {
    en: {
      simple: 'G-actin is a single bead-shaped protein clutching one ATP fuel coin in its center groove. Thousands of these beads snap together in seconds whenever the cell needs a new actin cable.',
      story: 'Fresh off cytosolic [[ribosomes|ribosome]] as a folded chain of [[amino acids|amino-acid]], each globular bead clamps a single ATP molecule plus a [[magnesium|atom-mg]] ion inside its central jaw. Chaperoned by profilin in the crowded [[cytosol|cytosol]] so they do not clump at random, legions of beads wait on hair-trigger alert until a signal orders them to click onto the barbed tip of an [[actin filament|actin-filament]].',
      blueprint: 'Role: ATP-charged monomeric subunit pool for [[actin filaments|actin-filament]] · From: Synthesized on cytosolic [[ribosomes|ribosome]] from [[amino acids|amino-acid]]; recharged with ATP from [[mitochondria|mitochondrion]] · Inside: Two-lobe globular cleft binds Mg²⁺-ATP and hydrolyzes it to ADP + Pi after polymerization · To: Assembles into [[actin filaments|actin-filament]] and returns to [[cytosol|cytosol]] via cofilin severing',
      scientific: 'Globular polypeptide of 375 amino acids (42 kDa, ~5.5 × 5.5 × 3.5 nm; β/γ-actin isoforms in non-muscle animal cells; PDB 1ATN), comprising four subdomains flanking a deep catalytic cleft coordinating divalent Mg²⁺ and ATP. Cytosolic pool reaches 50–200 µM (~5–10% of total soluble protein), sequestered unpolymerized above Cc by thymosin-β4 and recharged from ADP to ATP by profilin.'
    },
    es: {
      simple: 'La actina G es una cuenta redonda de proteína que guarda una moneda de energía ATP en su hendidura central. Miles de cuentas esperan listas para engancharse en cadena apenas la célula necesita tender un cable nuevo.',
      story: 'Recién salida de los [[ribosomas|ribosome]] libres como una cadena plegada de [[aminoácidos|amino-acid]], esta esfera proteica atrapa en su boca central un ATP escoltado por un átomo de [[magnesio|atom-mg]]. Vigiladas en el [[citosol|cytosol]] para no apelotonarse a destiempo, legiones enteras aguardan en alerta máxima hasta que una orden las hace encajar de golpe en la punta viva de un [[filamento de actina|actin-filament]].',
      blueprint: 'Rol: Reserva monomérica cargada con ATP de los [[filamentos de actina|actin-filament]] · De: Traducida en [[ribosomas|ribosome]] libres con [[aminoácidos|amino-acid]] y recargada con ATP de [[mitocondrias|mitochondrion]] · Dentro: Hendidura bilobulada fija Mg²⁺-ATP y lo hidroliza a ADP tras polimerizar · Hacia: Construye [[filamentos de actina|actin-filament]] y recicla al [[citosol|cytosol]] vía cofilina',
      scientific: 'Polipéptido globular de 375 aminoácidos (42 kDa, ~5.5 × 5.5 × 3.5 nm; isoformas β/γ citoplasmáticas; PDB 1ATN), organizado en cuatro subdominios alrededor de una hendidura catalítica con Mg²⁺-ATP. Alcanza concentraciones citosólicas de 50–200 µM (~5–10 % de la proteína soluble), mantenida en reserva monomérica sobre la Cc por timosina-β4 y recargada de ADP a ATP por profilina.'
    }
  },
  'intermediate-filament': {
    en: {
      simple: 'Intermediate filaments are braided, rope-like cables that keep animal cells from ripping apart when stretched. Unlike microtubules and actin, they stay put without burning energy and form the toughness of skin, hair, and nails.',
      story: 'While flashy highways and muscles constantly assemble and vanish, every city needs steel suspension cables that simply refuse to snap. Long [[alpha-helices|alpha-helix]] twist around one another like nautical hawser ropes into ten-nanometer cables that require zero ATP to hold fast, slinging a protective hammock around the [[nucleus|nucleus]] and bolting straight through [[cell junctions|cell-junction]] into neighboring cells so a tug on your skin shares the load across thousands of neighbors.',
      blueprint: 'Role: High-tensile mechanical shock absorber and nuclear lamina armor · From: Coiled-coil [[alpha-helix|alpha-helix]] monomers synthesized on cytosolic [[ribosomes|ribosome]] · Inside: Antiparallel staggered tetramers pack laterally into apolar, stretch-resistant 10 nm ropes · To: Anchors [[nucleus|nucleus]], reinforces [[microvillus|microvillus]] terminal web, and rivets desmosomal [[cell junctions|cell-junction]]',
      scientific: 'Apolar fibrous polymer, ~10 nm diameter, assembled from tissue-specific coiled-coil rod proteins (~40–200 kDa: Types I/II keratins in epithelia, Type III vimentin/desmin, Type IV neurofilaments, Type V nuclear lamins A/B/C). Parallel coiled-coil dimers associate into staggered antiparallel tetramers; 8 tetramers compact radially into a unit-length filament without NTPase activity, sustaining strains >250% via α-helix-to-β-sheet unfolding.'
    },
    es: {
      simple: 'Los filamentos intermedios son cuerdas trenzadas ultra-resistentes que impiden que las células animales se desgarren al estirarse. No gastan energía para mantenerse firmes y dan su dureza a la piel, el pelo y las uñas.',
      story: 'Mientras las autopistas y los músculos se arman y desarman sin parar, toda ciudad necesita cables de acero colgante que jamás cedan ante un tirón. Largas [[hélices α|alpha-helix]] se trenzan como maromas marineras en cuerdas de diez nanómetros que no gastan ni un ATP para resistir, tejiendo una hamaca protectora en torno al [[núcleo|nucleus]] y abrochándose a las [[uniones celulares|cell-junction]] para repartir cualquier golpe entre miles de células vecinas.',
      blueprint: 'Rol: Cable tensor amortiguador de tracción y armadura nuclear · De: Monómeros en [[hélice α|alpha-helix]] traducidos por [[ribosomas|ribosome]] libres · Dentro: Tetrámeros antiparalelos escalonados forman cuerdas apolares de 10 nm sin gasto de NTP · Hacia: Sujeta el [[núcleo|nucleus]] y remacha los desmosomas en [[uniones celulares|cell-junction]]',
      scientific: 'Polímero fibroso apolar de ~10 nm de diámetro formado por proteínas con dominio central en superhélice (40–200 kDa: queratinas tipo I/II en epitelios, vimentina/desmina tipo III, neurofilamentos tipo IV y láminas nucleares A/B/C tipo V). Ocho tetrámeros antiparalelos se compactan lateralmente por sección sin actividad NTPasa, soportando elongaciones >250 % mediante transición reversible hélice α → lámina β.'
    }
  },
  'nucleus': {
    en: {
      simple: 'The nucleus is the armored central library where the cell keeps its master DNA blueprints safe. Instead of lending out the priceless originals, it sends disposable RNA photocopies out through guarded gates.',
      story: 'Two meters of fragile [[DNA|dna]] thread crammed into a microscopic city full of motors and acid sacs would tangle and shred in minutes if left out on the street. So the cell locks its master blueprints inside a double-walled nuclear envelope, importing fresh nucleotides, [[histones|histone]], and regulatory proteins forged out in the cytosol through selective [[nuclear pores|nuclear-pore]].\n\nInside this quiet sanctum, forty-six chromosomes occupy their own neighborhoods while scribes copy active genes into RNA scrolls and the dense [[nucleolus|nucleolus]] churns out half-built ribosomes. Every finished work order streams back through the pores to tell the [[rough ER|rough-er]] and cytoplasm what machines to build next.',
      blueprint: 'Role: Genome vault, transcriptional command center, and ribosome-subunit foundry · From: [[Nucleotides|nucleotide]], ATP, [[histones|histone]], and transcription factors imported from [[cytosol|cytosol]] · Inside: [[Nuclear envelope|nuclear-envelope]] houses [[chromosomes|chromosome]] and [[nucleolus|nucleolus]]; polymerases transcribe [[DNA|dna]] into [[RNA|rna]] · To: Exports capped mRNA, tRNA, and 40S/60S [[ribosome|ribosome]] subunits via [[nuclear pores|nuclear-pore]]',
      scientific: 'Largest eukaryotic organelle, 5–10 µm diameter (~10% of cell volume), bounded by a double lipid bilayer perforated by ~2,000–4,000 nuclear pore complexes and mechanically lined by a 15–30 nm lamin meshwork. Houses ~6.4 Gbp diploid human nuclear DNA (~2 m contour length) compacted ~10,000-fold into euchromatic (interior, transcriptionally active) and heterochromatic (lamina/nucleolus-associated, silent) chromosome territories.'
    },
    es: {
      simple: 'El núcleo es la biblioteca acorazada central donde la célula guarda bajo llave sus planos maestros de ADN. Jamás presta los originales: envía fotocopias desechables de ARN a través de compuertas vigiladas.',
      story: 'Dos metros de finísimo hilo de [[ADN|dna]] sueltos en una metrópolis llena de motores y sacos de ácido acabarían enredados y hechos trizas en cuestión de minutos. Por eso la ciudad encierra sus planos originales tras la doble muralla de la envoltura nuclear, recibiendo nucleótidos, [[histonas|histone]] y mensajeros desde el citosol únicamente a través de las aduanas del [[poro nuclear|nuclear-pore]].\n\nDentro de esta cámara acorazada, cuarenta y seis cromosomas ocupan sus propios barrios mientras enzimas copistas transcriben órdenes en rollos de ARN y el denso [[nucléolo|nucleolus]] ensambla mitades de ribosomas. Cada copia terminada cruza de vuelta los poros para dictar al [[RE rugoso|rough-er]] qué máquinas necesita hoy la ciudad.',
      blueprint: 'Rol: Bóveda genómica, centro transcripcional y astillero de subunidades ribosómicas · De: [[Nucleótidos|nucleotide]], ATP, [[histonas|histone]] y polimerasas importados del [[citosol|cytosol]] · Dentro: La [[envoltura nuclear|nuclear-envelope]] protege [[cromosomas|chromosome]] y [[nucléolo|nucleolus]]; transcribe [[ADN|dna]] en [[ARN|rna]] · Hacia: Exporta ARNm, ARNt y subunidades de [[ribosoma|ribosome]] por [[poros nucleares|nuclear-pore]]',
      scientific: 'Mayor orgánulo eucariota, de 5–10 µm de diámetro (~10 % del volumen celular), delimitado por doble bicapa lipídica perforada por ~2,000–4,000 complejos de poro nuclear y reforzada internamente por una lámina nuclear de 15–30 nm. Alberga el genoma nuclear diploide (~6.4 Gpb en humanos, ~2 m de ADN lineal) compactado en territorios cromosómicos de eucromatina activa central y heterocromatina periférica.'
    }
  },
  'nuclear-envelope': {
    en: {
      simple: 'The nuclear envelope is a double-layered moat of membrane that seals off the nucleus from the busy cytoplasm. Its outer wall flows seamlessly into the rough ER factory right next door.',
      story: 'Built from twin sheets of [[phospholipids|phospholipid]] separated by a narrow fluid moat, this double fortress wall curves sharply around thousands of [[nuclear pores|nuclear-pore]] where inner and outer membranes fuse like buttonholes. Its inner face bolts onto tough lamin intermediate filaments to shield the [[nucleus|nucleus]] from crushes, while its outer wall balloons directly into the [[rough ER|rough-er]]—so newly exported messages meet waiting [[ribosomes|ribosome]] the instant they step outside.',
      blueprint: 'Role: Double-bilayer compartment boundary coupling genome protection to the ER network · From: Membrane [[phospholipids|phospholipid]] synthesized in [[smooth ER|smooth-er]]/[[rough ER|rough-er]] · Inside: Inner membrane binds nuclear lamina and chromatin; outer membrane studded with [[ribosomes|ribosome]]; fused at [[nuclear pores|nuclear-pore]] · To: Segregates [[nucleus|nucleus]] from [[cytosol|cytosol]] and shares lumen directly with [[rough ER|rough-er]]',
      scientific: 'Concentric double phospholipid bilayer system (~40 nm total span: two ~7 nm bilayers separated by a 20–40 nm perinuclear cisterna lumen continuous with the ER lumen). Inner nuclear membrane (INM) harbors >60 unique integral proteins (emerin, LBR, SUN1/2 of the LINC complex bridging lamins to cytoplasmic cytoskeleton via outer-membrane nesprins); disassembles via CDK1-mediated lamin phosphorylation during open mitosis.'
    },
    es: {
      simple: 'La envoltura nuclear es una muralla doble con foso intermedio que aísla al núcleo del bullicio del citoplasma. Su cara exterior se prolonga sin costuras hasta convertirse en la fábrica del retículo rugoso vecino.',
      story: 'Levantada con dos láminas concéntricas de [[fosfolípidos|phospholipid]] separadas por un estrecho foso acuoso, esta doble muralla se cose sobre sí misma alrededor de miles de [[poros nucleares|nuclear-pore]] como los ojales de un abrigo blindado. Por dentro se apoya en una malla de filamentos intermedios que protege al [[núcleo|nucleus]] de aplastamientos, mientras por fuera desemboca directamente en el [[RE rugoso|rough-er]] para que los [[ribosomas|ribosome]] reciban los planos recién salidos de la puerta.',
      blueprint: 'Rol: Frontera de doble bicapa que aísla el genoma y conecta con la red del RE · De: [[Fosfolípidos|phospholipid]] sintetizados en el [[RE liso|smooth-er]] y [[RE rugoso|rough-er]] · Dentro: Membrana interna anclada a láminas; membrana externa con [[ribosomas|ribosome]]; fusionadas en [[poros nucleares|nuclear-pore]] · Hacia: Separa el [[núcleo|nucleus]] del [[citosol|cytosol]] y comparte lumen con el [[RE rugoso|rough-er]]',
      scientific: 'Sistema concéntrico de doble bicapa lipídica (~40 nm totales: dos bicapas de ~7 nm separadas por un espacio perinuclear de 20–40 nm continuo con el lumen del RE). La membrana nuclear interna aloja >60 proteínas integrales específicas (emerina, LBR y complejos LINC SUN-nesprina que acoplan mecánicamente la lámina nuclear al citoesqueleto); se desensambla en mitosis abierta tras fosforilación de láminas por CDK1.'
    }
  },
  'nuclear-pore': {
    en: {
      simple: 'A nuclear pore is a massive octagonal security gate set into the wall of the nucleus. Small molecules drift right through, but big proteins and RNA scrolls need a molecular passport to get past its spaghetti-like center.',
      story: 'Riveted into the fused rim of the [[nuclear envelope|nuclear-envelope]], roughly a thousand individual [[proteins|protein]] assemble into an eight-spoked colossus thirty times heavier than a ribosome. Its central throat is stuffed with a wiggly mesh of disordered protein tentacles that swat away unauthorized drifters from the cytosol, yet part like velvet curtains the instant an import escort presents a tagged [[histone|histone]] going in or a freshly capped [[RNA|rna]] scroll heading out to the [[ribosomes|ribosome]].',
      blueprint: 'Role: Bidirectional size- and signal-selective gateway of the [[nucleus|nucleus]] · From: Built from ~30 nucleoporin [[proteins|protein]] anchored in the [[nuclear envelope|nuclear-envelope]] · Inside: FG-repeat hydrogel mesh + Ran-GTP/GDP gradient power active importin/exportin transport · To: Imports polymerases/[[histones|histone]] into [[nucleus|nucleus]]; exports mRNA and [[ribosome|ribosome]] subunits to [[cytosol|cytosol]]',
      scientific: 'Octagonal macromolecular assembly (~110–125 MDa in vertebrates, ~120 nm outer diameter, ~40–50 nm central transport channel; ~1,000 polypeptide copies of ~34 nucleoporins/Nups). Passive diffusion cutoff ~40 kDa (~5 nm); macromolecules above cutoff require NLS/NES signals bound by karyopherins (importins/exportins) dissolving transiently into phenylalanine-glycine (FG) intrinsically disordered repeats at up to ~1,000 translocations·pore⁻¹·s⁻¹.'
    },
    es: {
      simple: 'El poro nuclear es una colosal aduana octogonal incrustada en la muralla del núcleo. Las moléculas pequeñas pasan libremente, pero las proteínas grandes y los rollos de ARN necesitan un pasaporte químico para cruzar su cortina central.',
      story: 'Remachadas en el borde donde se funde la [[envoltura nuclear|nuclear-envelope]], cerca de mil [[proteínas|protein]] se ensamblan en un coloso de ocho radios treinta veces más pesado que un ribosoma. Su garganta central está rellena de tentáculos proteicos flexibles que rechazan a cualquier intruso del citosol, pero se abren como cortinas de terciopelo en cuanto un escolta presenta el visado de una [[histona|histone]] entrante o de un rollo de [[ARN|rna]] rumbo a los [[ribosomas|ribosome]].',
      blueprint: 'Rol: Aduana bidireccional selectiva entre el [[núcleo|nucleus]] y el citoplasma · De: ~30 tipos de nucleoporinas ([[proteínas|protein]]) ancladas en la [[envoltura nuclear|nuclear-envelope]] · Dentro: Malla hidrofóbica de repeticiones FG y gradiente Ran-GTP regulan importinas y exportinas · Hacia: Importa enzimas e [[histonas|histone]]; exporta [[ARN|rna]] y subunidades de [[ribosoma|ribosome]] al [[citosol|cytosol]]',
      scientific: 'Complejo supramolecular de simetría octogonal (~110–125 MDa en vertebrados, ~120 nm Ø externo, canal central de ~40–50 nm; ~1,000 copias de ~34 nucleoporinas). Límite de difusión pasiva libre de ~40 kDa (~5 nm); el transporte activo mediado por carioferinas (importinas/exportinas) acopladas al ciclo energético Ran-GTP/GDP atraviesa el hidrogel de repeticiones fenilalanina-glicina (FG) hasta ~1,000 eventos·poro⁻¹·s⁻¹.'
    }
  },
  'protein': {
    en: {
      simple: 'A globular protein is a long ribbon of amino acids folded into a precise 3D tool with pockets, hinges, and blades. Depending on its shape, it acts as a chemical enzyme, a sensor, a pump, or a walking motor.',
      story: 'Extruded as a floppy [[polypeptide|polypeptide]] ribbon from a [[ribosome|ribosome]], this chain is shoved by surrounding water until its oily side chains hide inside and crisp [[alpha-helices|alpha-helix]] click into a one-of-a-kind sculpture. Shape is destiny in this city: carve one pocket and it snips sugars in the [[cytosol|cytosol]], carve another and it hauls cargo or shreds marked junk in the [[proteasome|proteasome]].',
      blueprint: 'Role: Universal catalytic, structural, signaling, and mechanical nanomachine · From: Linear [[polypeptide|polypeptide]] translated by [[ribosomes|ribosome]] from [[amino acids|amino-acid]] · Inside: Hydrophobic collapse, hydrogen-bonded [[alpha-helices|alpha-helix]]/β-sheets, and chaperones lock native 3D fold · To: Operates across all organelles until tagged with [[ubiquitin|ubiquitin]] for [[proteasome|proteasome]] recycling',
      scientific: 'Compactly folded heteropolymer (typically 50–2,000 amino acids, ~5.5–220 kDa, 2–10 nm hydrodynamic diameter, packing density ~0.75 vs crystalline solids). Stabilized marginally (ΔG_fold ≈ −20 to −65 kJ/mol) by hydrophobic core burial, backbone H-bonded α-helices and β-sheets, salt bridges, metal cofactors, and luminal disulfide bonds; human proteome encodes ~20,000 canonical genes generating >100,000 splice/PTM proteoforms.'
    },
    es: {
      simple: 'Una proteína globular es una cinta larga de aminoácidos plegada como origami en una herramienta 3D con bisagras y bolsillos exactos. Según su forma, trabaja como enzima, sensor, bomba o motor andante.',
      story: 'Nacida como una cinta blanda [[polipeptídica|polypeptide]] en el túnel de un [[ribosoma|ribosome]], el empuje del agua circundante la obliga a esconder su corazón aceitoso y encajar [[hélices α|alpha-helix]] y láminas en una escultura única. En esta ciudad la forma dicta el oficio: un bolsillo exacto parte azúcares en el [[citosol|cytosol]], otro bombea iones y, cuando la pieza se abolla, una etiqueta la envía al [[proteasoma|proteasome]] para fundirla de nuevo.',
      blueprint: 'Rol: Nanomáquina universal catalítica, estructural, motora y sensorial · De: Cadena [[polipeptídica|polypeptide]] tejida por [[ribosomas|ribosome]] con [[aminoácidos|amino-acid]] · Dentro: Colapso hidrofóbico y puentes de hidrógeno en [[hélices α|alpha-helix]] y láminas β fijan su pliegue 3D · Hacia: Ejecuta funciones en cada orgánulo hasta su reciclaje vía [[ubiquitina|ubiquitin]] en el [[proteasoma|proteasome]]',
      scientific: 'Heteropolímero globular compacto (típicamente 50–2,000 aminoácidos, ~5.5–220 kDa, 2–10 nm de diámetro, densidad de empaquetamiento ~0.75). Estabilizado marginalmente (ΔG_plegamiento ≈ −20 a −65 kJ/mol) por efecto hidrofóbico central, hélices α y láminas β con puentes de hidrógeno, puentes salinos y enlaces disulfuro; el proteoma humano comprende ~20,000 genes canónicos y >100,000 proteoformas.'
    }
  },
  'alpha-helix': {
    en: {
      simple: 'An alpha-helix is a tight corkscrew coil that protein chains twist into like a telephone cord. Weak hydrogen clasps between every fourth link turn a floppy string into a sturdy rod.',
      story: 'Moments after [[amino acids|amino-acid]] emerge from a [[ribosome|ribosome]], the backbone curls into a right-handed spring where every fourth link catches its neighbor above with a neat hydrogen bond, pointing all side chains outward like bristles on a bottle brush. Line it with greasy bristles and it anchors [[channel proteins|channel-protein]] or [[GPCRs|gpcr]] inside oily membranes; braid two or three together and you get the unbreakable cables of [[intermediate filaments|intermediate-filament]].',
      blueprint: 'Role: Rigid cylindrical secondary-structure girder and transmembrane rod · From: Spontaneous local folding of nascent [[polypeptide|polypeptide]] chains · Inside: Right-handed spiral of [[amino acids|amino-acid]] stabilized by i → i+4 backbone hydrogen bonds · To: Builds cores of globular [[proteins|protein]], transmembrane [[GPCRs|gpcr]], and coiled-coil [[intermediate filaments|intermediate-filament]]',
      scientific: 'Right-handed polypeptide secondary structure (~1.2 nm outer diameter including side chains, 0.54 nm pitch, 3.6 residues per turn, 0.15 nm axial rise per residue; Ramachandran angles φ ≈ −57°, ψ ≈ −47°). Every backbone C=O of residue i hydrogen-bonds to N–H of residue i+4, aligning peptide dipoles into a macrodipole (+0.5 e at N-terminus, −0.5 e at C-terminus); ~20–25 hydrophobic residues span a ~3.5 nm lipid core.'
    },
    es: {
      simple: 'Una hélice alfa es un resorte en espiral en el que se enrollan las cadenas de proteína como el cable de un teléfono antiguo. Pequeños broches cada cuatro eslabones transforman un hilo flojo en una barra firme.',
      story: 'Apenas los [[aminoácidos|amino-acid]] asoman del [[ribosoma|ribosome]], el esqueleto gira en un sacacorchos hacia la derecha donde cada cuarto eslabón abrocha al anterior con un puente de hidrógeno y proyecta sus cadenas laterales hacia fuera como un cepillo cilíndrico. Si sus cerdas son aceitosas, clava [[acuaporinas|channel-protein]] y receptores [[GPCR|gpcr]] en las membranas; si se trenzan varias hélices entre sí, forjan los cables irrompibles de los [[filamentos intermedios|intermediate-filament]].',
      blueprint: 'Rol: Viga cilíndrica de estructura secundaria y cilindro transmembrana · De: Plegamiento local inmediato de una cadena [[polipeptídica|polypeptide]] · Dentro: Espiral dextrógira de [[aminoácidos|amino-acid]] sujeta por puentes de hidrógeno C=O(i)···H–N(i+4) · Hacia: Arma [[proteínas|protein]] globulares, receptores [[GPCR|gpcr]] y [[filamentos intermedios|intermediate-filament]]',
      scientific: 'Estructura secundaria dextrógira (~1.2 nm de diámetro total con cadenas laterales, paso de rosca 0.54 nm, 3.6 residuos por vuelta, avance axial 0.15 nm/residuo; ángulos diedros φ ≈ −57°, ψ ≈ −47°). Estabilizada por puentes de hidrógeno intracatenarios entre el carbonilo i y la amida i+4 que suman un macrodipolo helicoidal; un tramo de 20–25 residuos apolares basta para atravesar perpendicularmente una bicapa lipídica.'
    }
  },
  'polypeptide': {
    en: {
      simple: 'A polypeptide is a freshly stitched, still-unfolded string of amino acid beads sliding out of a ribosome. Within seconds it folds up—sometimes with helper chaperones—into a working protein.',
      story: 'Clicked together at five to twenty [[amino acids|amino-acid]] per second inside the exit tunnel of a [[ribosome|ribosome]], this raw bead necklace snakes into the crowded cytosol or threads directly into the [[rough ER|rough-er]]. Chaperone bodyguards grab its sticky patches before neighboring chains can snarl it into toxic clumps, coaching it into a finished [[protein|protein]]—or slapping a [[ubiquitin|ubiquitin]] recall sticker on duds that refuse to fold.',
      blueprint: 'Role: Linear covalent polymer carrying primary sequence information into 3D folding · From: Dehydration synthesis of [[amino acids|amino-acid]] inside the [[ribosome|ribosome]] 60S tunnel · Inside: Planar trans peptide bonds (−CO−NH−) with rotatable φ/ψ hinges · To: Co-translationally folds into native [[proteins|protein]] in [[cytosol|cytosol]] or [[rough ER|rough-er]] lumen',
      scientific: 'Unbranched polyamide heteropolymer extending from a free α-amino N-terminus to an α-carboxyl C-terminus via resonance-stabilized planar peptide bonds (~40% double-bond character, C–N length 1.33 Å, >99.7% trans except Xaa-Pro ~6% cis). Extrudes through the ~10 nm × 1.5 nm ribosomal exit tunnel shielding ~30–40 nascent residues while Hsp70/BiP chaperones prevent off-pathway aggregation.'
    },
    es: {
      simple: 'Una cadena polipeptídica es un collar recién cosido de aminoácidos que aún sale sin plegar del ribosoma. En cuestión de segundos se dobla sobre sí mismo para convertirse en una proteína funcional.',
      story: 'Engarzada a un ritmo febril de hasta veinte [[aminoácidos|amino-acid]] por segundo dentro del túnel del [[ribosoma|ribosome]], esta cinta cruda asoma al bullicio del citosol o se enhebra directo en el lumen del [[RE rugoso|rough-er]]. Guardaespaldas chaperonas sujetan al vuelo sus tramos pegajosos para evitar enredos fatales hasta que cuaja como [[proteína|protein]] madura, o marcan con [[ubiquitina|ubiquitin]] las piezas defectuosas para reciclarlas.',
      blueprint: 'Rol: Polímero lineal covalente que traduce secuencia genética en arquitectura 3D · De: Condensación de [[aminoácidos|amino-acid]] en el túnel de salida del [[ribosoma|ribosome]] · Dentro: Enlaces peptídicos planos (−CO−NH−) alternados con giros φ/ψ en carbonos α · Hacia: Se pliega en [[proteínas|protein]] activas en el [[citosol|cytosol]] o el [[RE rugoso|rough-er]]',
      scientific: 'Heteropolímero poliamídico lineal con direccionalidad N-terminal (α-NH₃⁺) a C-terminal (α-COO⁻), unido por enlaces peptídicos planares estabilizados por resonancia (longitud C–N de 1.33 Å, configuración trans en >99.7 % salvo Xaa-Pro). Atraviesa el túnel ribosómico de ~10 nm (alojando 30–40 residuos nacientes) bajo vigilancia cotraduccional de chaperonas Hsp70/BiP.'
    }
  },
  'amino-acid': {
    en: {
      simple: 'Amino acids are the twenty different snap-together Lego bricks used to build every protein in life. All twenty share the exact same connector hooks on two sides, differing only in the unique tool dangling off the middle.',
      story: 'Salvaged when [[lysosomes|lysosome]] and proteasomes shred yesterday’s worn-out gears—or imported fresh from food across the [[plasma membrane|plasma-membrane]]—each compact monomer centers on a single carbon hub holding an amino hook, an acid clasp, and one of twenty distinct side-chain personalities. Matched to its dedicated [[tRNA|trna]] courier in the [[cytosol|cytosol]], it rides straight into a ribosome to become the next link in a newborn [[polypeptide|polypeptide]].',
      blueprint: 'Role: Twenty-letter chemical alphabet of all [[polypeptides|polypeptide]] and [[proteins|protein]] · From: Dietary uptake across [[plasma membrane|plasma-membrane]], metabolic synthesis, or [[lysosome|lysosome]]/[[proteasome|proteasome]] recycling · Inside: Chiral L-α-[[carbon|atom-c]] links −NH₃⁺, −COO⁻, −H, and variable R side chain · To: Charged onto [[tRNA|trna]] (spending ATP) for [[ribosome|ribosome]] translation',
      scientific: 'L-α-Amino carboxylic acid, H₃N⁺–CH(R)–COO⁻ zwitterion at pH 7.4 (average residue mass ~110 Da in proteins; L-alanine C₃H₇NO₂ = 89.09 Da, R = −CH₃, ~0.5 nm). Twenty genetically encoded canonical monomers (9 essential in humans) span nonpolar aliphatic/aromatic, polar uncharged, acidic (Asp, Glu), and basic (Lys, Arg, His) R-groups; aminoacyl-tRNA synthetases charge cognate tRNAs with error rates <10⁻⁴.'
    },
    es: {
      simple: 'Los aminoácidos son las veinte piezas distintas tipo Lego con las que se construyen todas las proteínas. Todas comparten los mismos enganches laterales y solo cambian en el accesorio químico que cuelga del centro.',
      story: 'Rescatados cuando los [[lisosomas|lysosome]] y proteasomas desguazan maquinaria vieja —o recién importados del alimento a través de la [[membrana plasmática|plasma-membrane]]—, cada ladrillo gira en torno a un carbono central con los mismos dos broches universales y una de veinte personalidades laterales distintas. Cargado en su [[ARNt|trna]] mensajero dentro del [[citosol|cytosol]], viaja directo al ribosoma para coserse en una nueva cadena [[polipeptídica|polypeptide]].',
      blueprint: 'Rol: Alfabeto químico de 20 monómeros que construye toda [[proteína|protein]] · De: Absorción en [[membrana plasmática|plasma-membrane]], síntesis citosólica o reciclaje en [[lisosomas|lysosome]] y [[proteasomas|proteasome]] · Dentro: [[Carbono|atom-c]] α quiral L unido a −NH₃⁺, −COO⁻, −H y cadena lateral R · Hacia: Se une a [[ARNt|trna]] con gasto de ATP para alimentar al [[ribosoma|ribosome]]',
      scientific: 'Ácido L-α-aminocarboxílico en forma zwitteriónica H₃N⁺–CH(R)–COO⁻ a pH 7.4 (masa residual media ~110 Da; L-alanina C₃H₇NO₂ = 89.09 Da, R = −CH₃, ~0.5 nm). Veinte aminoácidos canónicos codificados genéticamente (9 esenciales en humanos) con grupos R apolares, aromáticos, polares neutros, ácidos y básicos; las aminoacil-ARNt sintetasas los acoplan con fidelidad >99.99 %.'
    }
  },
  'nucleolus': {
    en: {
      simple: 'The nucleolus is a busy factory-without-walls floating inside the nucleus, dedicated to building the cell’s ribosome protein-makers. Like an oil droplet in vinegar, it holds itself together without needing a membrane.',
      story: 'Right inside the [[nucleus|nucleus]] sits a bustling workshop that needs no membrane wall at all—a self-gathering droplet condensed around loops of chromosomes carrying ribosomal genes. Ribosomal [[proteins|protein]] freshly made out in the [[cytosol|cytosol]] march in through nuclear pores to meet long ribbons of newly transcribed [[RNA|rna]] spooling off the genes.\n\nSnipping enzymes trim those ribbons to length, fold them around the incoming proteins into separate small and large [[ribosome|ribosome]] halves, and ship both halves back out the pores—keeping them apart until a real job order locks them together in the cytoplasm.',
      blueprint: 'Role: Membraneless biomolecular condensate for rRNA synthesis and [[ribosome|ribosome]] biogenesis · From: rDNA loops on 5 acrocentric [[chromosomes|chromosome]], [[nucleotides|nucleotide]], and ~80 ribosomal [[proteins|protein]] imported via [[nuclear pores|nuclear-pore]] · Inside: Tripartite phase-separated zones transcribe 47S pre-rRNA, cleave/modify it, and assemble 40S + 60S subunits · To: Exports immature [[ribo-small|ribo-small]] and [[ribo-large|ribo-large]] subunits through [[nuclear pores|nuclear-pore]]',
      scientific: 'Liquid–liquid phase-separated nuclear body (1–3 µm diameter) nucleated around tandem rDNA repeats at nucleolar organizer regions (NORs on human chromosomes 13, 14, 15, 21, 22). Organized into three immiscible subphases: fibrillar center (FC, Pol I + rDNA), dense fibrillar component (DFC, fibrillarin + snoRNPs catalyzing 2′-O-methylation and pseudouridylation of 47S → 18S, 5.8S, 28S rRNAs), and granular component (GC, nucleophosmin, pre-40S/pre-60S assembly; ~2,000–10,000 ribosomes/min).'
    },
    es: {
      simple: 'El nucléolo es una fábrica sin paredes dentro del núcleo dedicada por entero a construir los ribosomas de la célula. Se mantiene unido por sí solo como una gota densa suspendida en agua, sin necesitar membrana.',
      story: 'En pleno corazón del [[núcleo|nucleus]] bulle un astillero que no necesita murallas: una gota densa condensada alrededor de bucles de cromosomas repletos de genes ribosómicos. Decenas de [[proteínas|protein]] recién fabricadas afuera en el [[citosol|cytosol]] entran desfilando por los poros nucleares para encontrarse con largas cintas frescas de [[ARN|rna]] recién copiadas.\n\nTijeras moleculares recortan esas cintas a medida, las pliegan junto a las proteínas en las dos mitades separadas de cada [[ribosoma|ribosome]] y las despachan de vuelta por los poros, manteniéndolas desacopladas hasta que reciban su primer encargo en el citoplasma.',
      blueprint: 'Rol: Condensado biomolecular sin membrana que fabrica subunidades de [[ribosoma|ribosome]] · De: Bucles ADNr de [[cromosomas|chromosome]], [[nucleótidos|nucleotide]] y ~80 [[proteínas|protein]] importadas por [[poros nucleares|nuclear-pore]] · Dentro: Tres fases líquidas transcriben pre-ARNr 47S, lo procesan y ensamblan pre-40S y pre-60S · Hacia: Exporta [[subunidad 40S|ribo-small]] y [[subunidad 60S|ribo-large]] por los [[poros nucleares|nuclear-pore]]',
      scientific: 'Condensado nuclear formado por separación de fases líquido-líquido (1–3 µm Ø) sobre regiones organizadoras nucleolares (NOR en cromosomas humanos 13, 14, 15, 21 y 22). Estructurado en tres subfases: centro fibrilar (CF, ARN Pol I + ADNr), componente fibrilar denso (CFD, fibrilarina y snoRNP que procesan el pre-ARNr 47S en 18S, 5.8S y 28S) y componente granular (CG, nucleofosmina, ensamblaje de subunidades a ~2,000–10,000 ribosomas/min).'
    }
  },
  'chromosome': {
    en: {
      simple: 'A chromosome is a single, unbroken, centimeter-long thread of DNA neatly spooled and packed so it never tangles. During normal life it loosens into readable loops, and right before cell division it cinches into a tight X-shaped suitcase.',
      story: 'Imagine packing a forty-kilometer silk thread into a tennis ball so neatly you can still pull out any paragraph in seconds—that is what forty-six chromosomes pull off inside the [[nucleus|nucleus]]. Most of the day each long [[DNA|dna]] molecule hangs in loose, readable neighborhoods of chromatin fibers where [[RNA polymerase II|pol-ii]] copies active genes; only when the city prepares to divide does [[PCNA|pcna]] help duplicate every letter and condensin rings cinch the twin sister copies into compact X-shaped trunks ready for [[microtubules|microtubule]] to haul apart.',
      blueprint: 'Role: Discrete genomic packaging unit ensuring orderly transcription and error-free segregation · From: Single continuous [[DNA|dna]] duplex replicated with [[PCNA|pcna]] and wrapped on [[histones|histone]] · Inside: Hierarchical compaction via [[nucleosomes|nucleosome]] and [[chromatin fibers|chromatin-fiber]]; condensin compacts 10,000× in mitosis · To: Exposes euchromatin to [[RNA polymerase II|pol-ii]] or attaches kinetochores to spindle [[microtubules|microtubule]]',
      scientific: 'Linear eukaryotic nucleoprotein complex (humans: 2n = 46 chromosomes, 50–250 Mbp per chromatid, 1.7–8.5 cm uncoiled DNA compacted to 2–10 µm at metaphase). Contains replication origins (~30,000–50,000 per human genome), CENP-A-defined centromeric constriction assembling the kinetochore, and protective TTAGGG telomeric repeats (5–15 kb) capped by shelterin; loop-extruded by cohesin in interphase and condensin I/II in mitosis.'
    },
    es: {
      simple: 'Un cromosoma es una sola hebra larguísima e ininterrumpida de ADN enrollada con orden extremo para no enredarse jamás. En el día a día forma bucles abiertos fáciles de leer, y al dividirse la célula se empaca como una maleta en forma de X.',
      story: 'Imagina guardar varios centímetros de hilo microscópico dentro de la bóveda del [[núcleo|nucleus]] con tal orden que puedas abrir cualquier página en segundos: esa proeza la logran cuarenta y seis cromosomas. Casi todo el tiempo cada molécula de [[ADN|dna]] reposa en barrios aireados de fibra de cromatina donde la [[ARN polimerasa II|pol-ii]] lee genes activos; solo cuando toca dividir la ciudad se duplica letra por letra con ayuda de [[PCNA|pcna]] y anillos proteicos aprietan las copias gemelas en maletas en X listas para que los [[microtúbulos|microtubule]] las repartan.',
      blueprint: 'Rol: Unidad física del genoma para transcripción ordenada y reparto mitótico · De: Doble hélice única de [[ADN|dna]] replicada con [[PCNA|pcna]] y enrollada en [[histonas|histone]] · Dentro: Compactación jerárquica en [[nucleosomas|nucleosome]] y [[fibra de cromatina|chromatin-fiber]] (hasta 10,000× en mitosis) · Hacia: Abre genes a la [[ARN polimerasa II|pol-ii]] o engancha cinetocoros a [[microtúbulos|microtubule]]',
      scientific: 'Complejo nucleoproteico lineal (humanos: 2n = 46, 50–250 Mpb por cromátida, 1.7–8.5 cm de ADN compactados a 2–10 µm en metafase). Incluye múltiples orígenes de replicación, centrómero epigenético definido por CENP-A donde ensambla el cinetocoro, y telómeros terminales repetitivos (TTAGGG, 5–15 kb) protegidos por el complejo shelterina; organizado en dominios TAD por cohesina en interfase y condensina I/II en mitosis.'
    }
  },
  'chromatin-fiber': {
    en: {
      simple: 'Chromatin fiber is the coiled rope formed when DNA-wrapped spools bunch together like clustered beads on a string. Tightening the fiber locks genes on mute; loosening it opens them up to be read.',
      story: 'Thousands of [[nucleosome|nucleosome]] spools strung along a [[DNA|dna]] molecule fold accordion-style into a dense thirty-nanometer cable, squeezing forty lengths of blueprint into one inside the [[chromosome|chromosome]]. Chemical switches painted onto [[histone|histone]] tails decide the local mood: clamp the fiber shut into silent storage, or pop the spools apart so [[RNA polymerase II|pol-ii]] can land and read a recipe.',
      blueprint: 'Role: Tunable intermediate-scale compaction layer regulating gene accessibility · From: Arrays of [[nucleosomes|nucleosome]] linked by linker [[DNA|dna]] and H1 linker histones · Inside: Dynamic 10-to-30 nm folding clutches controlled by [[histone|histone]] acetylation/methylation and ATP remodelers · To: Packs into [[chromosome|chromosome]] loops or opens naked promoters to [[RNA polymerase II|pol-ii]]',
      scientific: 'Polymorphic nucleosomal array (~10–30 nm cross-section, ~40–50-fold linear DNA compaction) stabilized by linker histone H1 binding entry/exit dyad DNA (~20–60 bp linker length) and internucleosomal H4 N-terminal tail interactions with adjacent H2A/H2B acidic patches. In vivo cryo-EM/ChromEMT reveals disordered liquid-like 5–24 nm clutches dynamically remodeled by SWI/SNF and ISWI ATPases.'
    },
    es: {
      simple: 'La fibra de cromatina es el cordón plegado que se forma cuando los carretes de ADN se agrupan unos contra otros. Si el cordón se aprieta, silencia los genes; si se afloja, deja leer sus instrucciones.',
      story: 'Miles de carretes [[nucleosómicos|nucleosome]] ensartados en una misma hebra de [[ADN|dna]] se pliegan en zigzag formando un cordón denso que reduce cuarenta veces su longitud dentro del [[cromosoma|chromosome]]. Pequeñas marcas químicas sobre las colas de las [[histonas|histone]] funcionan como interruptores: cierran la fibra bajo candado cuando un gen no hace falta o despejan el tramo exacto donde debe aterrizar la [[ARN polimerasa II|pol-ii]].',
      blueprint: 'Rol: Nivel intermedio y regulable de empaquetamiento y silenciamiento génico · De: Hileras de [[nucleosomas|nucleosome]] conectadas por [[ADN|dna]] espaciador e histona H1 · Dentro: Plegamiento dinámico de 10 a 30 nm modulado por marcas en [[histonas|histone]] y remodeladores ATP · Hacia: Forma bucles del [[cromosoma|chromosome]] o expone promotores a la [[ARN polimerasa II|pol-ii]]',
      scientific: 'Arreglo polimórfico de nucleosomas (~10–30 nm de sección, compactación lineal de ~40–50×) estabilizado por la histona conectora H1 en la díada de entrada/salida (espaciador de 20–60 pb) y contactos entre la cola H4 y el parche ácido H2A/H2B vecino. En células vivas (ChromEMT) se organiza en racimos dinámicos irregulares de 5–24 nm remodelados por complejos ATPasa SWI/SNF e ISWI.'
    }
  },
  'nucleosome': {
    en: {
      simple: 'A nucleosome is a microscopic thread-spool: DNA wrapped nearly twice around a puck of eight histone proteins. Millions of these spools keep the genome from snarling into a hopeless knot.',
      story: 'Left bare, negatively charged [[DNA|dna]] repels itself like stiff wire and refuses to fold, so the [[nucleus|nucleus]] winds exactly 147 base pairs 1.65 times around a positively charged [[histone|histone]] puck. Strung thirty million strong along human [[chromatin fibers|chromatin-fiber]], these spools aren’t dumb packing peanuts—ATP-powered remodeling crews slide or evict individual pucks on command whenever [[RNA polymerase II|pol-ii]] knocks to copy a gene.',
      blueprint: 'Role: Fundamental repeating spool unit of eukaryotic chromatin · From: 147 bp [[DNA|dna]] duplex + one [[histone|histone]] octamer assembled post-replication · Inside: Electrostatic salt bridges wrap left-handed superhelical [[DNA|dna]] 1.65 turns around the octamer · To: Strings together into [[chromatin fibers|chromatin-fiber]] or slides aside for [[RNA polymerase II|pol-ii]]',
      scientific: 'Nucleosome core particle (NCP, ~206 kDa, 11 nm diameter × 5.5 nm height; high-resolution crystal structure PDB 1AOI): 147 bp of B-DNA wrapped in 1.65 left-handed superhelical turns (pitch ~2.8 nm) around a histone octamer via ~142 backbone-phosphate hydrogen bonds and arginine minor-groove insertions every ~10.2 bp, achieving ~6–7-fold initial linear compaction (~3 × 10⁷ NCPs per diploid human nucleus).'
    },
    es: {
      simple: 'Un nucleosoma es un carrete microscópico: hilo de ADN enrollado casi dos vueltas alrededor de un disco de ocho proteínas histonas. Treinta millones de estos carretes evitan que el genoma se convierta en un nudo imposible.',
      story: 'Por sí solo, el [[ADN|dna]] cargado negativamente se repele como un alambre tieso imposible de guardar, así que el [[núcleo|nucleus]] enrolla exactamente 147 escalones del código alrededor de un disco positivo de [[histonas|histone]]. Ensartados por millones a lo largo de la [[fibra de cromatina|chromatin-fiber]], estos carretes son además porteros inteligentes que se deslizan o se apartan a golpe de ATP cada vez que la [[ARN polimerasa II|pol-ii]] pide paso.',
      blueprint: 'Rol: Carrete elemental repetitivo del empaquetamiento eucariota · De: 147 pb de [[ADN|dna]] + un octámero de [[histonas|histone]] tras la replicación · Dentro: Superhélice levógira de 1.65 vueltas sujeta por puentes electrostáticos · Hacia: Se encadena en [[fibra de cromatina|chromatin-fiber]] o cede el paso a la [[ARN polimerasa II|pol-ii]]',
      scientific: 'Partícula central del nucleosoma (NCP, ~206 kDa, cilindro de 11 nm Ø × 5.5 nm de altura; PDB 1AOI): 147 pb de ADN-B enrollados en 1.65 vueltas superhelicoidales levógiras alrededor de un octámero de histonas mediante ~142 puentes de hidrógeno e inserciones de arginina en el surco menor cada ~10.2 pb, logrando una compactación primaria de ~6–7× (~3 × 10⁷ nucleosomas por núcleo humano diploide).'
    }
  },
  'histone': {
    en: {
      simple: 'A histone octamer is a hockey-puck core of eight positively charged proteins that acts like a magnet for negatively charged DNA. Waving protein tails stick out of the puck to hold sticky-note tags reading "read me" or "do not disturb."',
      story: 'Mass-produced on cytosolic [[ribosomes|ribosome]] from lysine- and arginine-rich [[amino acids|amino-acid]] and rushed through [[nuclear pores|nuclear-pore]], two copies each of H2A, H2B, H3, and H4 snap into a positively charged barrel. While the barrel grips [[DNA|dna]] inside a [[nucleosome|nucleosome]], its flexible N-terminal tails dangle outside like signal flags—acetyl tags neutralize their grip to invite transcription, whereas methyl tags lock the vault tight.',
      blueprint: 'Role: Positively charged protein spool core and epigenetic switchboard · From: Translated on cytosolic [[ribosomes|ribosome]] and imported through [[nuclear pores|nuclear-pore]] · Inside: (H3–H4)₂ tetramer + two H2A–H2B dimers form a cationic histone-fold barrel with protruding N-tails · To: Wraps [[DNA|dna]] into [[nucleosomes|nucleosome]] and displays PTM marks regulating [[chromatin fibers|chromatin-fiber]]',
      scientific: 'Octameric protein core (~108 kDa total, ~7 nm × 5.5 nm): central (H3–H4)₂ heterotetramer flanked by two H2A–H2B heterodimers (monomers 11–15 kDa, >20% Lys + Arg residues, pI > 10), each sharing the 3-helix histone-fold motif. Unstructured N-terminal tails undergo reversible lysine acetylation (e.g., H3K27ac), methylation (H3K4me3, H3K9me3), phosphorylation, and monoubiquitination ("histone code").'
    },
    es: {
      simple: 'El octámero de histonas es un disco de ocho proteínas con carga positiva que atrae como un imán al ADN negativo. De sus bordes asoman colas flexibles donde la célula cuelga notas de «léeme» o «no molestar».',
      story: 'Fabricadas a destajo en los [[ribosomas|ribosome]] del citoplasma con [[aminoácidos|amino-acid]] cargados positivamente e importadas por los [[poros nucleares|nuclear-pore]], ocho piezas gemelas dos a dos se encajan en un tambor magnético. Mientras ese tambor abraza al [[ADN|dna]] para armar cada [[nucleosoma|nucleosome]], sus colas asoman por fuera como banderines donde enzimas escriben o borran etiquetas químicas que abren o clausuran barrios enteros del genoma.',
      blueprint: 'Rol: Tambor proteico catiónico y tablero de control epigenético · De: Sintetizadas en [[ribosomas|ribosome]] citosólicos e importadas por [[poros nucleares|nuclear-pore]] · Dentro: Tetrámero (H3–H4)₂ + dos dímeros H2A–H2B ricos en Lys/Arg con colas N-terminales · Hacia: Enrolla el [[ADN|dna]] en [[nucleosomas|nucleosome]] y regula el estado de la [[fibra de cromatina|chromatin-fiber]]',
      scientific: 'Octámero proteico básico (~108 kDa totales, ~7 × 5.5 nm): tetrámero central (H3–H4)₂ flanqueado por dos dímeros H2A–H2B (monómeros de 11–15 kDa, >20 % residuos Lys + Arg, pI > 10) unidos por el motivo estructural histone-fold. Sus colas N-terminales desordenadas reciben acetilación (H3K27ac), metilación (H3K4me3, H3K9me3), fosforilación y ubiquitinación.'
    }
  },
  'dna': {
    en: {
      simple: 'DNA is a twisted rope ladder whose rungs spell out the master instruction book for building and running the entire cell. Because each half of a rung only fits one partner, unzipping the ladder lets the cell make two exact copies.',
      story: 'Every nanomachine in the city owes its existence to this two-nanometer twisted staircase guarded inside the [[nucleus|nucleus]] (with a tiny backup scroll still humming inside each [[mitochondrion|mitochondrion]]). Twin rails of deoxyribose and [[phosphate|phosphate]] shield billions of paired [[nitrogenous bases|base]] inside—A always clasping T, G always clasping C—so [[RNA polymerase II|pol-ii]] can unzip a single block to scribble an RNA work order and zip the master archive back up unharmed.',
      blueprint: 'Role: Permanent archival storage of hereditary sequence information · From: Replicated semiconservatively from deoxynucleoside triphosphates ([[nucleotides|nucleotide]]) · Inside: Antiparallel sugar-phosphate backbones enclose Watson–Crick paired [[bases|base]] (A–T, G–C) · To: Wrapped onto [[nucleosomes|nucleosome]] and transcribed into [[RNA|rna]] by polymerases',
      scientific: 'Right-handed antiparallel double-stranded polynucleotide (canonical B-DNA: 2.0 nm diameter, 3.4 nm helical pitch, ~10.5 bp/turn, 0.34 nm axial rise/bp, major groove 2.2 nm wide vs minor groove 1.2 nm). Stabilized primarily by aromatic π–π base-stacking interactions plus Watson–Crick hydrogen bonds (2 per A=T, 3 per G≡C) along anionic 5′→3′ phosphodiester backbones.'
    },
    es: {
      simple: 'El ADN es una escalera de caracol cuyos peldaños deletrean el manual maestro para construir y operar toda la célula. Como cada medio peldaño solo encaja con su pareja exacta, basta abrir la cremallera para sacar copias idénticas.',
      story: 'Todas las máquinas de la ciudad deben su diseño a esta escalera retorcida de dos nanómetros custodiada en el [[núcleo|nucleus]] (con un pequeño pergamino propio conservado aún en cada [[mitocondria|mitochondrion]]). Dos pasamanos de desoxirribosa y [[fosfato|phosphate]] blindan en su interior miles de millones de [[bases nitrogenadas|base]] emparejadas —A siempre con T, G siempre con C— para que la [[ARN polimerasa II|pol-ii]] pueda abrir un párrafo, copiar la receta y volver a cerrar el original intacto.',
      blueprint: 'Rol: Archivo maestro permanente de la información genética hereditaria · De: Replicación semiconservativa a partir de [[nucleótidos|nucleotide]] trifosfato · Dentro: Hebras antiparalelas 5′→3′ de azúcar-fosfato con pares complementarios de [[bases|base]] (A–T, G–C) · Hacia: Se enrolla en [[nucleosomas|nucleosome]] y sirve de molde para transcribir [[ARN|rna]]',
      scientific: 'Polinucleótido bicatenario antiparalelo dextrógiro (forma canónica ADN-B: 2.0 nm Ø, paso de hélice 3.4 nm, ~10.5 pb/vuelta, ascenso axial 0.34 nm/pb, surco mayor de 2.2 nm y surco menor de 1.2 nm). Estabilizado por apilamiento hidrofóbico/aromático π–π entre pares de bases y puentes de hidrógeno de Watson–Crick (2 en A=T, 3 en G≡C) sobre esqueletos polianiónicos fosfodiéster.'
    }
  },
  'nucleotide': {
    en: {
      simple: 'A nucleotide is a single three-piece letter brick of DNA or RNA: a sugar hub, a phosphate connector, and one lettered base. Add two extra phosphates and the exact same brick doubles as ATP, the universal battery of life.',
      story: 'Brewed from [[glucose|glucose]]-derived sugars and amino acid nitrogen in the [[cytosol|cytosol]] and recharged at mitochondria, this three-piece marvel links a five-carbon [[sugar|sugar]] to one nitrogenous base and a string of [[phosphates|phosphate]]. Snap off its outer two phosphates and the released spark welds the brick permanently into growing DNA or [[RNA|rna]]—or, when the base is adenine, powers almost every motor and pump in the cell.',
      blueprint: 'Role: Monomeric letter of nucleic acids and universal phosphoryl energy currency · From: De novo or salvage pathways in [[cytosol|cytosol]]; re-phosphorylated by [[mitochondria|mitochondrion]] · Inside: Pentose [[sugar|sugar]] C1′ holds [[base|base]]; C5′ holds 1–3 [[phosphate|phosphate]] groups · To: Polymerizes into [[DNA|dna]]/[[RNA|rna]] or powers enzymes as ATP/GTP',
      scientific: 'Nucleoside monophosphate/triphosphate (~330 Da per NMP residue in DNA/RNA; ATP = 507.18 Da, ~1 nm): β-N-glycosidic bond at C1′ links a purine (A, G) or pyrimidine (C, T, U) to D-ribose or 2′-deoxy-D-ribose, esterified at C5′ to α, β, γ phosphates. Polymerases catalyze nucleophilic attack of primer 3′-OH on incoming α-phosphate, releasing pyrophosphate (PPi → 2 Pi drives polymerization irreversibly).'
    },
    es: {
      simple: 'Un nucleótido es el ladrillo de tres piezas que forma cada letra del ADN y del ARN: un azúcar central, un enganche de fosfato y una base con letra. Con dos fosfatos extra, ese mismo ladrillo es el ATP, la batería universal de la célula.',
      story: 'Ensamblado en el [[citosol|cytosol]] con derivados de glucosa y nitrógeno de [[aminoácidos|amino-acid]], y recargado sin pausa en las mitocondrias, este ingenio reúne un [[azúcar|sugar]] central, una base nitrogenada y hasta tres grupos [[fosfato|phosphate]]. Al soltar sus dos fosfatos exteriores, el chispazo liberado suelda la letra en una hebra nueva de ADN o [[ARN|rna]], o bien mueve motores y bombas por toda la ciudad.',
      blueprint: 'Rol: Monómero informativo de ácidos nucleicos y moneda energética celular (ATP/GTP) · De: Síntesis citosólica y fosforilación oxidativa en [[mitocondrias|mitochondrion]] · Dentro: [[Azúcar|sugar]] pentosa une la [[base|base]] en C1′ y 1–3 [[fosfatos|phosphate]] en C5′ · Hacia: Polimeriza en [[ADN|dna]] y [[ARN|rna]] o impulsa bombas y motores',
      scientific: 'Nucleósido fosfato (~330 Da por residuo NMP incorporado; ATP = 507.18 Da, ~1 nm): enlace β-N-glucosídico en C1′ entre una purina (A, G) o pirimidina (C, T, U) y ribosa o 2′-desoxirribosa, esterificada en C5′ a fosfatos α, β, γ. Las polimerasas catalizan el ataque nucleofílico del 3′-OH sobre el fosfato α entrante con liberación e hidrólisis de pirofosfato (PPi).'
    }
  },
  'phosphate': {
    en: {
      simple: 'A phosphate group is a negatively charged cluster of one phosphorus atom surrounded by four oxygens. It forms the sturdy outer rails of DNA, caps membrane lipids, and acts as the cell’s favorite on/off switch for proteins.',
      story: 'Centered on a single [[phosphorus|atom-p]] atom gripping four [[oxygens|atom-o]], these negatively charged clusters bristle with mutual repulsion when forced three-in-a-row onto ADP inside ATP synthase. Snapping off that end cluster unleashes a clean burst of mechanical work, stamping one onto a [[protein|protein]] flips its activity switch in a millisecond, and stringing them between [[sugars|sugar]] builds the indestructible rails of [[DNA|dna]].',
      blueprint: 'Role: Anionic backbone linker, high-energy phosphoanhydride spring, and signaling tag · From: Inorganic orthophosphate (Pi) imported across [[plasma membrane|plasma-membrane]] · Inside: Tetrahedral [[phosphorus|atom-p]] coordinated to four [[oxygen|atom-o]] atoms carrying negative charge · To: Links [[nucleotides|nucleotide]], charges ATP at [[ATP synthase|atp-synthase]], and caps [[head groups|head-group]]',
      scientific: 'Orthophosphate / phosphoryl group (H₂PO₄⁻ ⇌ HPO₄²⁻ in physiological cytosol, pKa₂ = 7.21; ~0.3 nm tetrahedral radius, P–O bond ~1.54 Å). Forms hydrolytically stable phosphodiester bridges in DNA/RNA (negative charge confines nucleic acids inside lipid bilayers and resists OH⁻ attack) and high-transfer-potential phosphoanhydride bonds in ATP (ΔG°′ = −30.5 kJ/mol, cellular ΔG ≈ −50 to −65 kJ/mol).'
    },
    es: {
      simple: 'Un grupo fosfato es una pequeña estrella de carga negativa con un fósforo central rodeado de cuatro oxígenos. Forma los rieles del ADN, remata los lípidos de membrana y sirve de interruptor para encender o apagar proteínas.',
      story: 'Alrededor de un átomo de [[fósforo|atom-p]] abrazado a cuatro [[oxígenos|atom-o]], estos racimos negativos se repelen como imanes enfrentados cuando la ATP sintasa aprieta tres seguidos para cargar un ATP. Soltar el último dispara trabajo limpio al instante, pegarlo sobre una [[proteína|protein]] cambia su interruptor en milisegundos, y engarzarlos entre [[azúcares|sugar]] tiende los pasamanos blindados del [[ADN|dna]].',
      blueprint: 'Rol: Eslabón aniónico estructural, resorte energético del ATP e interruptor proteico · De: Fosfato inorgánico (Pi) absorbido por la [[membrana plasmática|plasma-membrane]] · Dentro: Geometría tetraédrica de [[fósforo|atom-p]] y cuatro [[oxígenos|atom-o]] con carga negativa · Hacia: Une [[nucleótidos|nucleotide]], carga ATP en la [[ATP sintasa|atp-synthase]] y corona [[cabezas polares|head-group]]',
      scientific: 'Grupo ortofosfato / fosforilo (equilibrio H₂PO₄⁻ ⇌ HPO₄²⁻ a pH 7.2, pKa₂ = 7.21; radio tetraédrico ~0.3 nm, enlace P–O ~1.54 Å). Forma enlaces fosfodiéster cinéticamente ultraestables en ADN/ARN (cuya carga negativa impide la fuga pasiva por membranas) y enlaces fosfoanhídrido de alto potencial de transferencia en el ATP (ΔG°′ = −30.5 kJ/mol; ΔG celular real ≈ −50 a −65 kJ/mol).'
    }
  },
  'sugar': {
    en: {
      simple: 'Deoxyribose is a five-sided sugar ring that acts as the central hub of every DNA brick. Missing just one oxygen atom compared to RNA’s sugar makes DNA thousands of times tougher for century-long storage.',
      story: 'Diverted from [[glucose|glucose]] metabolism into a five-sided ring of [[carbon|atom-c]], hydrogen, and [[oxygen|atom-o]], ribose starts life with two reactive hydroxyl hooks—fine for disposable [[RNA|rna]] memos that self-destruct after work. To forge permanent [[DNA|dna]] vaults, ribonucleotide reductase surgically plucks one oxygen off carbon-2′, disarming the self-cutting hook so your genetic archive survives an entire human lifetime.',
      blueprint: 'Role: Pentose structural hub distinguishing long-term [[DNA|dna]] from transient [[RNA|rna]] · From: Pentose phosphate pathway branching from [[glucose|glucose]]-6-phosphate; C2′ reduced by ribonucleotide reductase · Inside: Furanose 5-membered ring links [[base|base]] at C1′ and [[phosphates|phosphate]] at C5′/C3′ · To: Forms backbone hubs of [[nucleotides|nucleotide]] in [[DNA|dna]]',
      scientific: '2-Deoxy-D-erythro-pentofuranose (C₅H₁₀O₄, 134.13 Da, ~0.5 nm ring; adopts C2′-endo puckering in canonical B-DNA vs C3′-endo in ribose/A-RNA). Absence of the 2′-hydroxyl group eliminates intramolecular 2′-O⁻ nucleophilic attack on the adjacent 3′,5′-phosphodiester bond, increasing DNA hydrolytic half-life >10,000-fold relative to RNA at physiological pH.'
    },
    es: {
      simple: 'La desoxirribosa es un anillo de azúcar de cinco puntas que sirve de pieza central en cada ladrillo del ADN. Al faltarle un solo átomo de oxígeno respecto al azúcar del ARN, vuelve al ADN miles de veces más duradero.',
      story: 'Derivada del metabolismo de la [[glucosa|glucose]] en un pentágono de [[carbono|atom-c]], hidrógeno y [[oxígeno|atom-o]], la ribosa original trae un gancho químico en su segunda esquina que hace que los recados de [[ARN|rna]] se autodestruyan tras leerse. Para construir la bóveda eterna del [[ADN|dna]], una enzima arranca con precisión quirúrgica ese único oxígeno y desactiva la mecha, garantizando que el manual maestro dure décadas sin cortarse solo.',
      blueprint: 'Rol: Pieza central pentosa que otorga estabilidad secular al [[ADN|dna]] frente al [[ARN|rna]] · De: Ruta de las pentosas fosfato desde [[glucosa|glucose]] y reducción en C2′ · Dentro: Anillo furanósico enlaza la [[base|base]] en C1′ y [[fosfatos|phosphate]] en C3′ y C5′ · Hacia: Integra los [[nucleótidos|nucleotide]] del [[ADN|dna]]',
      scientific: '2-Desoxi-D-eritro-pentofuranosa (C₅H₁₀O₄, 134.13 Da, ~0.5 nm; plegamiento de anillo C2′-endo en ADN-B frente a C3′-endo en ARN-A). La ausencia del grupo 2′-OH suprime la transesterificación intramolecular sobre el enlace fosfodiéster 3′,5′ vecino, multiplicando por >10,000 la estabilidad hidrolítica del ADN frente al ARN.'
    }
  },
  'base': {
    en: {
      simple: 'A nitrogenous base is a flat chemical ring that acts as one letter—A, T, C, G, or U—of the genetic alphabet. Each letter’s edge has a unique lock-and-key notch so A only pairs with T (or U) and G only pairs with C.',
      story: 'Built as crisp flat rings of [[carbon|atom-c]] and [[nitrogen|atom-n]] in the cytosol, double-ring purines (A, G) and single-ring pyrimidines (C, T, U) snap onto [[nucleotides|nucleotide]] as the actual ink of heredity. Thymine—distinguished from RNA’s uracil by one extra methyl badge that helps repair crews spot typos—reaches across the center of [[DNA|dna]] to clasp adenine with two hydrogen bonds, ensuring every copy read by [[RNA polymerase II|pol-ii]] stays faithful.',
      blueprint: 'Role: Information-bearing hydrogen-bonding letter of [[DNA|dna]] and [[RNA|rna]] · From: Synthesized from [[amino acids|amino-acid]], CO₂, and folate one-carbon units in [[cytosol|cytosol]] · Inside: Planar aromatic ring of [[carbon|atom-c]] and [[nitrogen|atom-n]] forms specific Watson–Crick H-bond edges · To: Encodes genes in [[DNA|dna]], codons in [[RNA|rna]], and anticodons in [[tRNA|trna]]',
      scientific: 'Planar heteroaromatic purines (adenine, guanine; bicyclic) and pyrimidines (cytosine, thymine = 5-methyluracil C₅H₆N₂O₂ = 126.11 Da, uracil; monocyclic, ~0.5 nm). Purine–pyrimidine pairing preserves uniform 1.08 nm C1′–C1′ duplex width; C5 methylation of thymine enables uracil-DNA glycosylase to distinguish mutagenic cytosine-deamination (C→U) lesions from native T.'
    },
    es: {
      simple: 'Una base nitrogenada es un anillo químico plano que representa una letra —A, T, C, G o U— del alfabeto genético. El borde de cada letra tiene muescas únicas para que A solo encaje con T (o U) y G solo con C.',
      story: 'Forjadas como láminas planas de [[carbono|atom-c]] y [[nitrógeno|atom-n]] en el citosol, estas letras se montan en los [[nucleótidos|nucleotide]] como la tinta viva de la herencia. La timina —que lleva un sello extra respecto al uracilo para que las cuadrillas de mantenimiento detecten erratas al instante— tiende dos puentes de hidrógeno hacia la adenina en el corazón del [[ADN|dna]], asegurando copias fieles cuando pasa la [[ARN polimerasa II|pol-ii]].',
      blueprint: 'Rol: Letra aromática portadora de código por emparejamiento específico · De: Biosíntesis de purinas y pirimidinas desde [[aminoácidos|amino-acid]] en el [[citosol|cytosol]] · Dentro: Anillo plano de [[carbono|atom-c]] y [[nitrógeno|atom-n]] con bordes complementarios de puentes de hidrógeno · Hacia: Codifica genes en [[ADN|dna]], codones en [[ARN|rna]] y anticodones en [[ARNt|trna]]',
      scientific: 'Heterociclos aromáticos planos: purinas bicíclicas (adenina, guanina) y pirimidinas monocíclicas (citosina, uracilo y timina = 5-metiluracilo, C₅H₆N₂O₂ = 126.11 Da, ~0.5 nm). El par purina-pirimidina fija una distancia isostérica C1′–C1′ de 1.08 nm; el grupo 5-metilo de la timina permite a la uracilo-ADN glicosilasa reparar desaminaciones espontáneas C→U sin borrar timinas legítimas.'
    }
  },
  'rna': {
    en: {
      simple: 'RNA is a single-stranded working copy of a gene—flexible enough to carry messages out of the nucleus or fold itself into a chemical tool. Once its job is done, enzymes shred and recycle its bricks.',
      story: 'Copied letter-for-letter off [[DNA|dna]] by RNA polymerase II or inside the [[nucleolus|nucleolus]], this nimble single-stranded ribbon wears a protective 5′ helmet and a poly-A tail before slipping out a [[nuclear pore|nuclear-pore]]. Out in the cytosol it leads three lives at once: messenger RNA feeds blueprints through [[ribosomes|ribosome]], [[tRNA|trna]] ferries amino acids, and ribosomal RNA folds into the very blade that welds every protein together.',
      blueprint: 'Role: Disposable genetic courier (mRNA), amino-acid adaptor ([[tRNA|trna]]), and catalytic ribozyme (rRNA) · From: Transcribed from [[DNA|dna]] templates using ribo-[[nucleotides|nucleotide]] inside [[nucleus|nucleus]]/[[nucleolus|nucleolus]] · Inside: Single-stranded ribose-phosphate chain (A, U, G, C) spliced, 5′-capped, and folded into hairpins · To: Exported via [[nuclear pores|nuclear-pore]] to direct [[ribosomes|ribosome]], then recycled to [[nucleotides|nucleotide]]',
      scientific: 'Single-stranded polyribonucleotide (ribose C2′-OH, uracil replacing thymine; forms local A-form duplex stems, 11 bp/turn). Cellular RNA mass is ~80–85% rRNA (28S, 18S, 5.8S, 5S), ~10–15% tRNA (~76 nt cloverleaf/L-fold), and ~2–5% mRNA (5′ 7-methylguanosine cap, coding ORF, 3′ ~200-nt poly(A) tail; median mammalian mRNA half-life ~3–9 h) plus snRNA, snoRNA, miRNA, and lncRNA.'
    },
    es: {
      simple: 'El ARN es una copia de trabajo de una sola hebra sacada de un gen: sirve tanto de recadero que sale del núcleo como de herramienta plegable. Cuando termina su encargo, la célula lo desmonta y reutiliza sus piezas.',
      story: 'Copiada letra a letra sobre el molde del [[ADN|dna]] por la ARN polimerasa II o en el [[nucléolo|nucleolus]], esta cinta flexible recibe un casco protector en la punta y una cola larga antes de cruzar el [[poro nuclear|nuclear-pore]]. Ya en el citosol ejerce tres oficios vitales: el mensajero dicta planos a los [[ribosomas|ribosome]], el [[ARNt|trna]] acarrea ladrillos y el ARN ribosómico forma el mismísimo cincel que suelda cada proteína.',
      blueprint: 'Rol: Mensajero génico temporal (ARNm), adaptador ([[ARNt|trna]]) y ribozima estructural (ARNr) · De: Transcrito sobre [[ADN|dna]] con ribo-[[nucleótidos|nucleotide]] en [[núcleo|nucleus]] y [[nucléolo|nucleolus]] · Dentro: Hebra simple con ribosa y uracilo, procesada con caperuza 5′, empalme y horquillas 3D · Hacia: Cruza [[poros nucleares|nuclear-pore]] hacia los [[ribosomas|ribosome]] y luego se recicla',
      scientific: 'Polirribonucleótido monocatenario (ribosa con 2′-OH y uracilo en lugar de timina; tallos locales en hélice tipo A de 11 pb/vuelta). Del ARN celular total, ~80–85 % es ARNr (28S, 18S, 5.8S, 5S), ~10–15 % ARNt (~76 nt en L) y ~2–5 % ARNm maduro (caperuza m⁷G 5′, exones empalmados y cola poli-A 3′ de ~200 nt; semivida media en mamíferos de 3–9 h), además de snARN, snoARN y miARN.'
    }
  },
  'rough-er': {
    en: {
      simple: 'The rough endoplasmic reticulum is a maze of flat membrane sheets pebble-dashed with thousands of ribosomes. Every protein destined to leave the cell, sit in a membrane, or work inside a lysosome starts on this assembly line.',
      story: 'Flowing straight out of the outer [[nuclear envelope|nuclear-envelope]], stacked sheets of phospholipids glitter with docked [[ribosomes|ribosome]] threading fresh [[polypeptides|polypeptide]] through tiny trapdoors directly into the inner lumen.\n\nInside this protected cavern, chaperone crews fold each chain, clamp sturdy sulfur bridges in place, and stamp a starter sugar tree onto its flank. Anything folded right gets bubble-wrapped into COPII vesicles bound for the [[Golgi apparatus|golgi]]; anything hopelessly mangled gets booted back out to the [[proteasome|proteasome]].',
      blueprint: 'Role: Co-translational synthesis, folding, disulfide-bonding, and N-glycosylation factory for secretory/membrane proteins · From: mRNA + [[ribosomes|ribosome]], [[amino acids|amino-acid]], and ATP from [[cytosol|cytosol]] · Inside: Sec61 translocon imports nascent chains into oxidizing lumen; BiP/calnexin fold and quality-check · To: Buds COPII [[vesicles|vesicle]] to [[Golgi|golgi]] or ejects misfolded chains via ERAD to [[proteasome|proteasome]]',
      scientific: 'Ribosome-studded cisternal sheet network (~50 nm luminal spacing) continuous with the outer nuclear membrane. Signal recognition particle (SRP) docks translating ribosomes onto Sec61αβγ translocons; inside the oxidizing lumen (GSH:GSSG ≈ 3:1 vs ~100:1 in cytosol, [Ca²⁺] ≈ 0.5 mM), oligosaccharyltransferase transfers Glc₃Man₉GlcNAc₂ to Asn-X-Ser/Thr, protein disulfide isomerase (PDI) forms S–S bonds, and calnexin/calreticulin enforce folding quality control.'
    },
    es: {
      simple: 'El retículo endoplasmático rugoso es un laberinto de sacos aplanados tachonados con miles de ribosomas. Toda proteína destinada a salir de la célula, incrustarse en una membrana o trabajar en un lisosoma nace en esta línea de montaje.',
      story: 'Brotando sin costuras desde la [[envoltura nuclear|nuclear-envelope]], grandes sábanas de fosfolípidos relucen cubiertas de [[ribosomas|ribosome]] que enhebran cadenas [[polipeptídicas|polypeptide]] recién nacidas por diminutas escotillas hacia su caverna interior.\n\nDentro de esa galería aislada, cuadrillas de chaperonas doblan cada pieza, remachan puentes de azufre y le estampan su primer árbol de azúcar. Las piezas impecables viajan envueltas en vesículas hacia el [[aparato de Golgi|golgi]]; las defectuosas son expulsadas sin contemplaciones hacia la trituradora del [[proteasoma|proteasome]].',
      blueprint: 'Rol: Fábrica de inserción cotraduccional, plegamiento oxidativo y N-glicosilación · De: ARNm, [[ribosomas|ribosome]], [[aminoácidos|amino-acid]] y ATP procedentes del [[citosol|cytosol]] · Dentro: Translocón Sec61 introduce cadenas al lumen; BiP, PDI y calnexina pliegan y auditan calidad · Hacia: Envía [[vesículas|vesicle]] COPII al [[Golgi|golgi]] o desvía fallos al [[proteasoma|proteasome]]',
      scientific: 'Red de cisternas laminares (~50 nm de luz) continua con la membrana nuclear externa y tapizada de ribosomas 80S en su cara citosólica. La partícula SRP dirige el complejo naciente al translocón Sec61; en el lumen oxidante (GSH:GSSG ≈ 3:1, [Ca²⁺] ≈ 0.5 mM), la oligosacariltransferasa añade el precursor Glc₃Man₉GlcNAc₂, la PDI cataliza puentes disulfuro y el ciclo calnexina/calreticulina filtra el plegamiento antes de exportar vía COPII.'
    }
  },
  'smooth-er': {
    en: {
      simple: 'The smooth endoplasmic reticulum is a coral-like tangle of membrane pipes with zero ribosomes on its surface. It brews fresh membrane oils, neutralizes poisons, and holds calcium ready to release like a starter pistol.',
      story: 'Branching off the sheeted factory next door into ribosome-free pipes, this sleek refinery takes raw [[fatty-acid tails|fatty-acid-tail]] and ATP from the [[cytosol|cytosol]] to brew the city’s [[phospholipids|phospholipid]] and [[cholesterol|cholesterol]].\n\nWhenever excess fat pours in, it inflates golden [[lipid droplets|lipid-droplet]] straight out of its wall; when foreign drugs or alcohol trespass, cytochrome P450 enzymes bolt oxygen handles onto them so the body can flush them out; and all the while SERCA pumps pack its lumen with calcium ions ready to flash out and trigger muscle or signaling bursts.',
      blueprint: 'Role: Lipid/steroid refinery, xenobiotic detoxifier, and intracellular Ca²⁺ reservoir · From: [[Fatty-acid tails|fatty-acid-tail]], acetyl-CoA, NADPH, O₂, and ATP from [[cytosol|cytosol]] · Inside: Smooth ~50 nm tubules house lipid synthases, cytochrome P450 monooxygenases, and SERCA Ca²⁺ pumps · To: Supplies [[phospholipids|phospholipid]]/[[cholesterol|cholesterol]], buds [[lipid droplets|lipid-droplet]], and pulses Ca²⁺ to [[cytosol|cytosol]] and [[mitochondria|mitochondrion]]',
      scientific: 'Anastomosing ribosome-free tubular membrane network (~30–60 nm diameter, shaped by reticulons and atlastin GTPases). Synthesizes phosphatidylcholine, ceramide, cholesterol (HMG-CoA reductase), and steroid hormones; detoxifies lipophilic xenobiotics via NADPH-cytochrome P450 reductase/CYP450 hydroxylation; sequesters luminal Ca²⁺ (~0.1–1 mM vs ~100 nM cytosolic) via SERCA ATPases for rapid IP₃R/RyR release.'
    },
    es: {
      simple: 'El retículo endoplasmático liso es un arrecife tubular de membranas sin un solo ribosoma encima. Fabrica los aceites y lípidos de la célula, neutraliza sustancias tóxicas y guarda calcio listo para disparar señales rápidas.',
      story: 'Ramificándose desde las láminas vecinas en una red de tuberías lisas, esta refinería química toma [[colas de ácidos grasos|fatty-acid-tail]] y ATP del [[citosol|cytosol]] para destilar casi todos los fosfolípidos y el [[colesterol|cholesterol]] que mantienen en pie las murallas de la ciudad.\n\nSi sobra combustible graso, infla relucientes [[gotas lipídicas|lipid-droplet]] desde su propia pared; si entran fármacos o toxinas, sus enzimas P450 los vuelven solubles para expulsarlos; y en su interior guarda una reserva a presión de iones calcio lista para inundar el citoplasma y encender músculos o alertas junto a las [[mitocondrias|mitochondrion]].',
      blueprint: 'Rol: Refinería de lípidos y esteroides, planta detoxificadora y almacén de Ca²⁺ · De: [[Colas de ácidos grasos|fatty-acid-tail]], acetil-CoA, NADPH, O₂ y ATP del [[citosol|cytosol]] · Dentro: Túbulos de ~50 nm con sintasas lipídicas, citocromos P450 y bombas de calcio SERCA · Hacia: Surte [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]], brota [[gotas lipídicas|lipid-droplet]] y libera pulsos de Ca²⁺',
      scientific: 'Red tubular anastomosada carente de ribosomas (~30–60 nm Ø, curvada por reticulonas y GTPasas atlastinas). Cataliza la biosíntesis de glicerofosfolípidos, ceramida, colesterol (HMG-CoA reductasa) y hormonas esteroideas; hidroxila xenobióticos lipofílicos mediante monooxigenasas del citocromo P450 dependientes de NADPH; acumula Ca²⁺ luminal (0.1–1 mM frente a ~100 nM citosólico) vía bombas SERCA con liberación por canales IP₃R y RyR.'
    }
  },
  'ribosome': {
    en: {
      simple: 'A ribosome is a two-piece molecular 3D printer that reads RNA blueprints three letters at a time and clicks matching amino acids into a protein chain. Millions of them hum nonstop across every living cell.',
      story: 'Shipped out of the [[nucleolus|nucleolus]] as two separate halves that only snap together when an RNA work order threads between them, up to ten million of these nanomachines pack the [[cytosol|cytosol]] and stud the rough ER.\n\nInside the cleft, [[tRNA|trna]] couriers audition three-letter codons one after another while the catalytic core—ancient folded RNA rather than protein—welds each [[amino acid|amino-acid]] onto a growing polypeptide, burning GTP minted near [[mitochondria|mitochondrion]] to ratchet forward without skipping a single beat.',
      blueprint: 'Role: Universal mRNA-directed [[polypeptide|polypeptide]] synthesizer (ribozyme nanomachine) · From: [[40S|ribo-small]] + [[60S|ribo-large]] subunits from [[nucleolus|nucleolus]], mRNA, aminoacyl-[[tRNAs|trna]], and GTP · Inside: A, P, and E tRNA sites decode 3-base codons and catalyze peptide bonds at ~5–20 aa/s · To: Releases cytosolic [[proteins|protein]] or threads secretory chains into [[rough ER|rough-er]]',
      scientific: 'Eukaryotic 80S ribonucleoprotein machine (~4.3 MDa, ~28 × 25 nm; human 80S cryo-EM PDB 4UG0) comprising the 40S small subunit (18S rRNA + 33 RPS proteins) and 60S large subunit (28S, 5.8S, 5S rRNAs + 47 RPL proteins). Peptidyl transferase center (PTC) is a pure ribozyme core within 28S rRNA; consumes 2 GTP (eEF1A, eEF2) plus 1 ATP-equivalent (tRNA charging, 2 high-energy bonds) per peptide bond (~5–9 aa/s in mammals).'
    },
    es: {
      simple: 'El ribosoma es una impresora 3D molecular de dos piezas que lee cintas de ARN de tres en tres letras y engarza los aminoácidos correspondientes hasta formar una proteína. Millones de ellos trabajan sin descanso por toda la célula.',
      story: 'Despachadas desde el [[nucléolo|nucleolus]] como dos mitades sueltas que solo se abrazan cuando una cinta de ARN se tiende entre ellas, hasta diez millones de estas forjas diminutas pueblan el [[citosol|cytosol]] y el RE rugoso.\n\nEn su ranura central, mensajeros [[ARNt|trna]] prueban suerte codón tras codón mientras un corazón catalítico hecho de ARN antiguo suelda cada [[aminoácido|amino-acid]] a la cadena polipeptídica naciente, gastando energía recién traída de las [[mitocondrias|mitochondrion]] para avanzar sin saltarse jamás un escalón.',
      blueprint: 'Rol: Sintetizador universal de cadenas [[polipeptídicas|polypeptide]] guiado por ARNm · De: Subunidades [[40S|ribo-small]] y [[60S|ribo-large]] del [[nucléolo|nucleolus]], ARNm, aminoacil-[[ARNt|trna]] y GTP · Dentro: Sitios A, P y E leen codones de 3 bases y sueldan enlaces peptídicos a ~5–20 aa/s · Hacia: Entrega [[proteínas|protein]] al [[citosol|cytosol]] o las inyecta al [[RE rugoso|rough-er]]',
      scientific: 'Complejo ribonucleoproteico eucariota 80S (~4.3 MDa, ~28 × 25 nm; estructura humana PDB 4UG0), integrado por la subunidad menor 40S (ARNr 18S + 33 proteínas) y la mayor 60S (ARNr 28S, 5.8S, 5S + 47 proteínas). El centro peptidiltransferasa (PTC) reside íntegramente en el ARNr 28S (ribozima); consume 2 GTP (eEF1A, eEF2) más el coste de aminoacilación por cada enlace peptídico (~5–9 aa/s en mamíferos).'
    }
  },
  'ribo-large': {
    en: {
      simple: 'The 60S large subunit is the heavy upper dome of the ribosome where amino acids actually get welded together. Amazingly, its RNA core—not its proteins—does the chemical stitching.',
      story: 'Assembled inside the [[nucleolus|nucleolus]] from three folded [[RNA|rna]] scaffolds and forty-seven helper proteins, this heavy dome clamps onto the [[small subunit|ribo-small]] once an mRNA start sign is found. Deep inside its core, naked RNA acts as an ancient anvil that snaps each new [[amino acid|amino-acid]] onto the growing [[polypeptide|polypeptide]] and guides the chain out through a sheltered tunnel.',
      blueprint: 'Role: Catalytic peptidyl-transferase dome and nascent-chain exit tunnel of the [[ribosome|ribosome]] · From: 28S, 5.8S, and 5S [[RNA|rna]] + 47 [[proteins|protein]] assembled in [[nucleolus|nucleolus]] · Inside: 28S rRNA ribozyme welds peptide bonds and channels [[polypeptide|polypeptide]] through a 10 nm tunnel · To: Releases finished chains to [[cytosol|cytosol]] or docks onto Sec61 on [[rough ER|rough-er]]',
      scientific: 'Eukaryotic 60S ribosomal subunit (~2.8 MDa, ~25 nm): 28S (~5,070 nt in humans), 5.8S (157 nt), and Pol III-transcribed 5S (121 nt) rRNAs complexed with 47 RPL proteins. Houses the protein-free peptidyl transferase center (~18 Å radius devoid of amino acid side chains around the catalytic adenine) and a ~100 Å × 10–20 Å exit tunnel accommodating ~35 nascent residues.'
    },
    es: {
      simple: 'La subunidad mayor 60S es la pesada cúpula superior del ribosoma donde se sueldan físicamente los aminoácidos. Sorprendentemente, quien cose cada eslabón no es una proteína, sino su corazón de ARN plegado.',
      story: 'Ensamblada en el [[nucléolo|nucleolus]] con tres armazones de [[ARN|rna]] y cuarenta y siete proteínas auxiliares, esta cúpula se encaja sobre la [[subunidad menor|ribo-small]] apenas aparece la señal de arranque. En lo más hondo de su yunque, el propio ARN desnudo suelda cada nuevo [[aminoácido|amino-acid]] y escolta a la joven cadena [[polipeptídica|polypeptide]] por un túnel blindado hacia el exterior.',
      blueprint: 'Rol: Cúpula catalítica peptidiltransferasa y túnel de salida del [[ribosoma|ribosome]] · De: ARNr 28S, 5.8S y 5S + 47 [[proteínas|protein]] ensamblados en el [[nucléolo|nucleolus]] · Dentro: Ribozima ARNr 28S forma enlaces peptídicos y guía la cadena [[polipeptídica|polypeptide]] · Hacia: Libera cadenas al [[citosol|cytosol]] o acopla el túnel al [[RE rugoso|rough-er]]',
      scientific: 'Subunidad ribosómica eucariota 60S (~2.8 MDa, ~25 nm): formada por ARNr 28S (~5,070 nt en humanos), 5.8S (157 nt) y 5S (121 nt, transcrito por ARN Pol III) junto a 47 proteínas RPL. Alberga el centro peptidiltransferasa puramente ribozímico (sin cadenas laterales proteicas a <18 Å del sitio reactivo) y el túnel de salida de ~100 Å de longitud.'
    }
  },
  'ribo-small': {
    en: {
      simple: 'The 40S small subunit is the reader head of the ribosome that scans along an RNA message to check every three-letter code word. It refuses to let the upper dome weld an amino acid unless the match is exact.',
      story: 'Sliding out of a [[nuclear pore|nuclear-pore]] ahead of its heavier partner, this nimble reader grabs the 5′ cap of a fresh [[RNA|rna]] scroll in the [[cytosol|cytosol]] and scans until it spots the AUG start flag. Once the [[large subunit|ribo-large]] locks on top, the 40S finger-checks the geometry of every incoming [[tRNA|trna]] match—kicking out impostors in microseconds so typos almost never slip into the city’s proteins.',
      blueprint: 'Role: mRNA scanner and codon–anticodon fidelity inspector of the [[ribosome|ribosome]] · From: 18S [[RNA|rna]] + 33 [[proteins|protein]] assembled in [[nucleolus|nucleolus]] and exported via [[nuclear pores|nuclear-pore]] · Inside: Decoding center flips conserved 18S rRNA adenines to verify Watson–Crick [[tRNA|trna]] pairing · To: Recruits [[60S subunit|ribo-large]] at AUG start codon to launch [[polypeptide|polypeptide]] synthesis',
      scientific: 'Eukaryotic 40S ribosomal subunit (~1.4 MDa, ~20 nm): 18S rRNA (1,869 nt in humans) plus 33 RPS proteins organized into head, body, and platform domains forming the mRNA channel. Forms the 43S pre-initiation complex (with eIF1, eIF1A, eIF3, and eIF2·GTP·Met-tRNAi) to scan 5′ UTRs; decoding center rRNA bases (A1824/A1825, E. coli A1492/A1493 equivalents) probe minor-groove geometry of codon–anticodon base pairs 1 and 2.'
    },
    es: {
      simple: 'La subunidad menor 40S es el cabezal lector del ribosoma que recorre el mensaje de ARN comprobando cada palabra de tres letras. Solo da luz verde para soldar el aminoácido cuando el encaje es exacto.',
      story: 'Recién salida por un [[poro nuclear|nuclear-pore]], esta ágil lectora atrapa la caperuza inicial de un rollo de [[ARN|rna]] en el [[citosol|cytosol]] y avanza hasta dar con el banderín de salida AUG. Cuando la [[subunidad mayor|ribo-large]] cierra encima, sus sensores palpan al vuelo cada pareja con el [[ARNt|trna]] entrante y expulsan al instante a cualquier impostor para que la ciudad no fabrique piezas defectuosas.',
      blueprint: 'Rol: Escáner de ARNm y auditor de fidelidad codón–anticodón del [[ribosoma|ribosome]] · De: ARNr 18S + 33 [[proteínas|protein]] del [[nucléolo|nucleolus]] vía [[poros nucleares|nuclear-pore]] · Dentro: Centro decodificador comprueba la geometría exacta del par ARNm–[[ARNt|trna]] · Hacia: Recluta la [[subunidad 60S|ribo-large]] sobre el codón AUG para iniciar la cadena [[polipeptídica|polypeptide]]',
      scientific: 'Subunidad ribosómica eucariota 40S (~1.4 MDa, ~20 nm): compuesta por ARNr 18S (1,869 nt en humanos) y 33 proteínas RPS dispuestas en cabeza, cuerpo y plataforma. Integra el complejo de preiniciación 43S para rastrear la región 5′ UTR hasta el codón AUG; adeninas conservadas del ARNr 18S inspeccionan el surco menor de las dos primeras posiciones del dúplex codón-anticodón.'
    }
  },
  'golgi': {
    en: {
      simple: 'The Golgi apparatus is the cell’s central post office and finishing studio—a stack of flat membrane pancakes. It trims and decorates incoming proteins with sugar zip-codes, then boxes them into bubbles bound for exact addresses.',
      story: 'Cargo [[vesicles|vesicle]] budding off the rough ER dock at the receiving cis face of this curved pancake stack, dumping half-finished [[proteins|protein]] and phospholipids into the first workshop.\n\nCisterna by cisterna as each sac matures forward, specialized enzymes prune and rebuild sugar trees—stamping mannose-6-phosphate warning labels onto acid enzymes meant for [[lysosomes|lysosome]] while polishing lush [[glycocalyx|glycocalyx]] antlers for exports—until the outgoing trans network buds fresh vesicles onto microtubule tracks headed straight for the [[plasma membrane|plasma-membrane]].',
      blueprint: 'Role: Post-translational glycan remodeler, lipid finisher, and vesicular sorting hub · From: COPII cargo [[vesicles|vesicle]] arriving from [[rough ER|rough-er]] and [[smooth ER|smooth-er]] · Inside: Polarized cis → medial → trans cisternae (pH dropping 6.7 → 6.0) process N/O-glycans and sphingomyelin · To: Dispatches clathrin/secretory [[vesicles|vesicle]] to [[lysosomes|lysosome]], [[plasma membrane|plasma-membrane]], and exterior; recycles ER residents via COPI',
      scientific: 'Polarized ribbon of 4–8 stacked flattened cisternae (1–3 µm wide, 20–30 nm luminal width) tethered near the centrosome by golgins and dynein along microtubules; organized into cis-Golgi network (CGN), cis/medial/trans cisternae, and trans-Golgi network (TGN). V-ATPase acidifies lumen progressively (pH ~6.7 cis to ~6.0 TGN); executes N-glycan trimming/sialylation, O-glycosylation, sphingomyelin/glycolipid synthesis, prohormone furin cleavage, and M6P tagging.'
    },
    es: {
      simple: 'El aparato de Golgi es la oficina central de correos y taller de acabado de la célula: una pila de sacos aplanados. Retoca las proteínas recién llegadas con códigos postales de azúcar y las empaqueta rumbo a su destino exacto.',
      story: 'Las [[vesículas|vesicle]] cargadas que zarpan del RE rugoso atracan en el muelle de entrada cis de esta pila curvada de cisternas, descargando [[proteínas|protein]] a medio vestir y fosfolípidos frescos.\n\nPiso tras piso hacia la cara de salida, cuadrillas de enzimas podan y bordan árboles de azúcar —estampando sellos especiales para las enzimas ácidas que irán a los [[lisosomas|lysosome]] o coronando futuras antenas del [[glucocálix|glycocalyx]]— hasta despachar paquetes clasificados sobre rieles de microtúbulos rumbo a la [[membrana plasmática|plasma-membrane]].',
      blueprint: 'Rol: Taller de glicosilación final, síntesis de esfingolípidos y central clasificadora · De: [[Vesículas|vesicle]] COPII procedentes del [[RE rugoso|rough-er]] y [[RE liso|smooth-er]] · Dentro: Cisternas polarizadas cis → media → trans (pH 6.7 → 6.0) remodelan glicanos y clasifican cargas · Hacia: Envía [[vesículas|vesicle]] a [[lisosomas|lysosome]], [[membrana plasmática|plasma-membrane]] y exterior; retorna residentes al RE vía COPI',
      scientific: 'Pila polarizada de 4–8 cisternas discoideas aplanadas (1–3 µm Ø, luz de 20–30 nm) posicionada junto al centrosoma por golginas y dineína, subdividida en red cis-Golgi (CGN), cisternas cis/media/trans y red trans-Golgi (TGN). Presenta gradiente luminal ácido mantenido por V-ATPasa (pH ~6.7 a ~6.0) donde ocurren remodelación de N-glicanos, O-glicosilación, síntesis de esfingomielina, corte proteolítico por furina y marcaje con manosa-6-fosfato.'
    }
  },
  'vesicle': {
    en: {
      simple: 'A vesicle is a tiny soap-bubble delivery van pinched off from one organelle membrane to carry cargo safely to another. Matching molecular Velcro tags on its skin make sure it never fuses with the wrong dock.',
      story: 'Curved protein cages like clathrin grab a patch of [[Golgi|golgi]] or plasma membrane and pinch off a sealed [[phospholipid|phospholipid]] bubble fifty to a hundred nanometers wide, keeping caustic enzymes or precious hormones safely out of the [[cytosol|cytosol]]. Hitched to a motor protein striding down a [[microtubule|microtubule]], the bubble checks address tags at its destination until coiled SNARE proteins twist tight and pop both membranes into one seamless wall, delivering cargo into a [[lysosome|lysosome]] or straight outside the cell.',
      blueprint: 'Role: Membrane-bounded courier packet for selective inter-organelle and exocytic/endocytic transport · From: Pinched off from [[rough ER|rough-er]] (COPII), [[Golgi|golgi]] (COPI/clathrin), or [[plasma membrane|plasma-membrane]] (endocytosis) · Inside: [[Phospholipid|phospholipid]] bilayer encloses soluble cargo and displays Rab GTPase + v-SNARE address tags · To: Hauled by [[motor proteins|motor-protein]] on [[microtubules|microtubule]] to fuse with target t-SNARE membranes',
      scientific: 'Spherical transport organelle, 50–100 nm diameter (~10,000–30,000 phospholipids per bilayer), sculpted by coat complexes: COPII (Sar1, Sec23/24, Sec13/31; ER→Golgi), COPI (Arf1, coatomer; retrograde), or clathrin triskelions + AP1/AP2 + dynamin GTPase scission (TGN/endocytosis). Target specificity governed by >60 human Rab GTPases and tethering complexes, culminating in 4-helix trans-SNAREpin zippering (~65 kBT) driving hemifusion and pore opening.'
    },
    es: {
      simple: 'Una vesícula es una diminuta camioneta de reparto en forma de burbuja que se pellizca de una membrana para llevar carga segura hacia otra. Sus etiquetas moleculares garantizan que solo se funda con el muelle correcto.',
      story: 'Jaulas curvas de clatrina pellizcan un trozo del [[Golgi|golgi]] o de la membrana plasmática hasta soltar una burbuja sellada de [[fosfolípidos|phospholipid]] que protege su cargamento del ajetreo del [[citosol|cytosol]]. Enganchada a una proteína motora que trota por un [[microtúbulo|microtubule]], la burbuja viaja hasta su puerto, comprueba contraseñas químicas y trenza cierres proteicos que funden ambas paredes en una sola, vaciando el envío dentro de un [[lisosoma|lysosome]] o hacia el exterior.',
      blueprint: 'Rol: Paquete membranoso sellado de transporte intracelular, endocítico y secretor · De: Escindida del [[RE rugoso|rough-er]] (COPII), [[Golgi|golgi]] o [[membrana plasmática|plasma-membrane]] (clatrina/dinamina) · Dentro: Bicapa de [[fosfolípidos|phospholipid]] con carga interna y etiquetas de dirección Rab y v-SNARE · Hacia: Viaja con [[proteínas motoras|motor-protein]] por [[microtúbulos|microtubule]] hasta fusionarse con su membrana diana',
      scientific: 'Orgánulo esférico de transporte de 50–100 nm Ø (~10,000–30,000 fosfolípidos), moldeado por cubiertas proteicas COPII (RE→Golgi), COPI (transporte retrógrado) o trisqueliones de clatrina con complejos adaptadores AP1/AP2 y escisión por la GTPasa dinamina. El reconocimiento de destino depende de >60 GTPasas Rab humanas y el ensamblaje en cremallera de cuatro hélices trans-SNARE (~65 kBT) que impulsa la fusión.'
    }
  },
  'mitochondrion': {
    en: {
      simple: 'Mitochondria are the cell’s power plants—ancient captive bacteria that burn food molecules with oxygen to charge up ATP batteries. Their deeply folded inner membrane packs thousands of tiny rotary turbines into a tiny space.',
      story: 'Nearly two billion years ago an ancestor cell swallowed an oxygen-breathing bacterium and struck the greatest bargain in history: free room and board in exchange for boundless electricity. Today hundreds of these double-membraned dynamos cruise the [[cytosol|cytosol]], gulping pyruvate split from glucose, [[fatty-acid tails|fatty-acid-tail]] from lipid droplets, and fresh oxygen.\n\nInside its labyrinthine cristae folds, the [[electron transport chain|electron-transport-chain]] strips high-energy electrons from food to pump protons into tight pockets, driving spinning [[ATP synthase|atp-synthase]] turbines that flood the city with ATP while keeping its own tiny circular DNA and [[ribosomes|ribosome]] humming.',
      blueprint: 'Role: Aerobic bioenergetic power plant, metabolic hub, and apoptotic gatekeeper · From: Pyruvate (from [[glucose|glucose]]), [[fatty-acid tails|fatty-acid-tail]], O₂, ADP + [[phosphate|phosphate]] from [[cytosol|cytosol]] · Inside: Matrix TCA cycle + cristae [[electron transport chain|electron-transport-chain]] build proton-motive force driving [[ATP synthase|atp-synthase]]; retains [[mtDNA|dna]] · To: Exports ~90% of cellular ATP to [[cytosol|cytosol]], plus CO₂, [[water|water]], heme/Fe-S clusters, and heat',
      scientific: 'Double-membrane endosymbiotic organelle (0.5–1 µm wide, 1–5 µm dynamic tubular network undergoing Drp1 fission and Mfn1/2 + OPA1 fusion). Porin-permeable outer membrane (VDAC cutoff ~5 kDa); cardiolipin-rich (~20%) proton-impermeable inner membrane invaginated into cristae via MICOS junctions, maintaining Δp ≈ 180–200 mV (Δψm ≈ −160 mV, ΔpH ≈ −0.8). Matrix houses pyruvate dehydrogenase, β-oxidation, TCA cycle, 55S mitoribosomes, and circular 16,569 bp human mtDNA (37 genes).'
    },
    es: {
      simple: 'Las mitocondrias son las centrales eléctricas de la célula: antiguas bacterias domesticadas que queman nutrientes con oxígeno para recargar baterías de ATP. Su membrana interna plegada concentra miles de turbinas giratorias en un espacio mínimo.',
      story: 'Hace casi dos mil millones de años una célula ancestral tragó una bacteria respiradora de oxígeno y selló el mayor pacto de la historia: techo seguro a cambio de energía inagotable. Hoy cientos de estas centrales recorren el [[citosol|cytosol]] devorando los fragmentos de glucosa, las [[colas de ácidos grasos|fatty-acid-tail]] cedidas por gotas lipídicas y el oxígeno recién llegado.\n\nEn los pliegues profundos de sus crestas internas, la [[cadena de transporte de electrones|electron-transport-chain]] bombea protones a presión para hacer girar miles de turbinas de [[ATP sintasa|atp-synthase]], inundando la ciudad de ATP mientras conserva orgullosa su propio ADN circular y sus [[ribosomas|ribosome]].',
      blueprint: 'Rol: Central bioenergética aeróbica, nodo metabólico y regulador de apoptosis · De: Piruvato (de [[glucosa|glucose]]), [[colas acilo|fatty-acid-tail]], O₂, ADP y [[fosfato|phosphate]] del [[citosol|cytosol]] · Dentro: Ciclo de Krebs matricial + [[cadena respiratoria|electron-transport-chain]] alimentan la [[ATP sintasa|atp-synthase]]; retiene [[ADN|dna]] propio · Hacia: Exporta ATP al [[citosol|cytosol]], CO₂, [[agua|water]], grupos hemo/Fe-S y calor',
      scientific: 'Orgánulo endosimbiótico de doble membrana (0.5–1 µm Ø, red dinámica de 1–5 µm regulada por fisión Drp1 y fusión Mfn1/2-OPA1). Membrana externa permeable por porinas VDAC (<5 kDa); membrana interna rica en cardiolipina (~20 %) plegada en crestas por complejos MICOS, sosteniendo una fuerza protón-motriz Δp ≈ 180–200 mV (Δψm ≈ −160 mV). La matriz aloja el ciclo del ácido cítrico, β-oxidación, mitorribosomas 55S y ADNmt circular humano de 16,569 pb (37 genes).'
    }
  },
  'atp-synthase': {
    en: {
      simple: 'ATP synthase is the world’s smallest rotary waterwheel—a spinning protein turbine powered by rushing protons rather than water. Every spin mechanically slams a fresh phosphate onto spent ADP to recharge the cell’s batteries.',
      story: 'Lined up in paired rows along the curved cristae ridges of the [[mitochondrion|mitochondrion]], this fifteen-nanometer rotary motor cashes in the proton dam built by the [[electron transport chain|electron-transport-chain]]. As trapped [[hydrogen|atom-h]] ions rush down through its membrane carousel, they spin a central camshaft at over a hundred revolutions per second, forcing three catalytic jaws in the upper head to cam open and slam ADP and [[phosphate|phosphate]] together into fresh ATP bound for every pump and [[motor protein|motor-protein]] in town.',
      blueprint: 'Role: Chemiosmotic rotary nanomachine converting proton-motive force into ATP · From: Transmembrane H⁺ gradient from [[electron transport chain|electron-transport-chain]], plus matrix ADP, [[phosphate|phosphate]], and [[Mg²⁺|atom-mg]] · Inside: Proton flow spins F₀ c₈-ring + γ-stalk (~100–150 rev/s), driving 3-state binding-change catalysis in F₁ α₃β₃ head · To: Releases 3 ATP per 360° turn for export across [[mitochondrion|mitochondrion]] to [[cytosol|cytosol]]',
      scientific: 'F₁F₀-ATPase rotary motor (~600 kDa monomer, ~15 nm tall × 10 nm wide; forms V-shaped ~86° crista-curving dimers in mammalian mitochondria; bovine F₁ PDB 1BMF). Membrane-embedded F₀ c₈-ring (in vertebrates) translocates 8 H⁺ per full 360° rotation of the asymmetric central γδε stalk inside the hexameric F₁ (αβ)₃ stator, driving Open → Loose → Tight conformational synthesis of 3 Mg-ATP per revolution (~2.67 H⁺/ATP; near ~90% thermodynamic efficiency).'
    },
    es: {
      simple: 'La ATP sintasa es la turbina giratoria más pequeña del mundo, movida por un chorro de protones en lugar de agua. Con cada giro estampa mecánicamente un fosfato nuevo sobre el ADP gastado para recargar las baterías celulares.',
      story: 'Alineada en filas dobles sobre los bordes curvos de las crestas de la [[mitocondria|mitochondrion]], esta turbina de quince nanómetros cobra la presa acumulada por la [[cadena de transporte de electrones|electron-transport-chain]]. Cuando los iones de [[hidrógeno|atom-h]] se precipitan por su carrusel inferior, hacen girar un eje central a más de cien vueltas por segundo que obliga al cabezal superior a prensar ADP y [[fosfato|phosphate]] en flamantes monedas de ATP para cada bomba y [[proteína motora|motor-protein]] de la ciudad.',
      blueprint: 'Rol: Nanomotor rotatorio quimiosmótico que transforma flujo de protones en ATP · De: Gradiente de H⁺ de la [[cadena respiratoria|electron-transport-chain]], ADP, [[fosfato|phosphate]] y [[magnesio|atom-mg]] · Dentro: El giro del anillo c₈ en F₀ rota el tallo γ dentro del cabezal F₁ (αβ)₃ a >100 rev/s · Hacia: Sintetiza 3 ATP por vuelta completa para abastecer a la [[mitocondria|mitochondrion]] y al [[citosol|cytosol]]',
      scientific: 'Complejo motor rotatorio F₁F₀-ATPasa (~600 kDa por monómero, ~15 nm de alto; forma dímeros en V a ~86° que curvan las crestas mitocondriales; F₁ bovina PDB 1BMF). El anillo transmembrana c₈ de mamíferos conduce 8 H⁺ por rotación de 360° del tallo asimétrico γδε dentro del estator catalítico (αβ)₃, induciendo el ciclo conformacional Abierto → Laxo → Tensado que rinde 3 Mg-ATP por vuelta (razón estequiométrica 2.67 H⁺/ATP).'
    }
  },
  'lysosome': {
    en: {
      simple: 'A lysosome is a sealed stomach-bag of strong acid and forty kinds of molecular scissors that digests cellular trash and swallowed germs. It spits the clean leftover bricks back out so the cell can build brand-new parts.',
      story: 'Even the finest nanomachines eventually crack, and without a demolition crew the city would choke on its own scrap. Fresh hydrolase blades arrive inside [[vesicles|vesicle]] from the [[Golgi apparatus|golgi]], while proton pumps burn ATP from mitochondria to sour the bag’s interior a hundred times more acidic than the surrounding [[cytosol|cytosol]].\n\nSwallowed cargo and worn-out organelles fuse into this sealed cauldron, where forty acid-activated enzymes chop everything back into raw [[amino acids|amino-acid]], [[glucose|glucose]], and lipids—and if the bag ever springs a leak, those enzymes instantly go limp in the neutral cytoplasm so they cannot digest the city alive.',
      blueprint: 'Role: Acidic terminal digestive and nutrient-recycling organelle; mTORC1 nutrient-sensing dock · From: M6P-tagged hydrolases from [[Golgi|golgi]], endocytic [[vesicles|vesicle]], autophagosomes, and cytosolic ATP · Inside: V-ATPase maintains pH 4.5–5.0 while ~50–60 acid hydrolases cleave proteins, lipids, nucleic acids, and glycans · To: Exports salvaged [[amino acids|amino-acid]], [[glucose|glucose]], and [[cholesterol|cholesterol]] via permeases back to [[cytosol|cytosol]]',
      scientific: 'Single-membrane acidic organelle (0.1–1.2 µm diameter; inner leaflet shielded against autodigestion by heavily glycosylated LAMP1/LAMP2 glycocalyx). Vacuolar H⁺-ATPase (V-ATPase) hydrolyzes ATP to maintain luminal pH 4.5–5.0 (100–300× higher [H⁺] than pH 7.2 cytosol), activating ~60 cathepsin proteases, lipases, nucleases, and glycosidases while serving as the cytosolic surface platform for Ragulator–mTORC1 metabolic signaling.'
    },
    es: {
      simple: 'El lisosoma es un estómago microscópico sellado, lleno de ácido y cuarenta tipos de tijeras químicas que digieren basura celular y microbios tragados. Después devuelve ladrillos limpios al citoplasma para fabricar piezas nuevas.',
      story: 'Hasta las mejores máquinas se abollan con el uso, y sin cuadrilla de desguace la metrópolis moriría sepultada bajo su propia chatarra. Cuchillas digestivas recién salidas del [[aparato de Golgi|golgi]] llegan en [[vesículas|vesicle]], mientras bombas en su pared queman ATP de las mitocondrias para volver su interior cien veces más ácido que el [[citosol|cytosol]].\n\nPaquetes tragados del exterior y orgánulos jubilados se funden con esta caldera segura donde decenas de enzimas reducen todo a [[aminoácidos|amino-acid]], [[glucosa|glucose]] y grasas limpias; y si la bolsa llegara a pincharse, el pH neutro de fuera apaga al instante las cuchillas para no devorar viva a la ciudad.',
      blueprint: 'Rol: Planta digestiva ácida de reciclaje molecular y plataforma sensora mTORC1 · De: Hidrolasas del [[Golgi|golgi]], [[vesículas|vesicle]] endocíticas, autofagosomas y ATP citosólico · Dentro: Bombas V-ATPasa fijan pH 4.5–5.0 activando ~60 hidrolasas ácidas tras un escudo de glicoproteínas LAMP · Hacia: Devuelve [[aminoácidos|amino-acid]], [[glucosa|glucose]] y [[colesterol|cholesterol]] al [[citosol|cytosol]]',
      scientific: 'Orgánulo de membrana simple (0.1–1.2 µm Ø) protegido en su cara luminal contra la autodigestión por un denso glucocálix de proteínas LAMP1/LAMP2. La H⁺-ATPasa vacuolar (V-ATPasa) mantiene un pH luminal de 4.5–5.0 ([H⁺] >100× superior al citosol pH 7.2) óptimo para ~60 catepsinas, lipasas, nucleasas y glicosidasas, mientras su cara citosólica aloja el complejo sensor nutricional Ragulator–mTORC1.'
    }
  },
  'centrosome': {
    en: {
      simple: 'The centrosome is the central train-station hub sitting beside the nucleus from which microtubule highways radiate outward. Before a cell divides, it duplicates itself to form the two poles that pull chromosomes apart.',
      story: 'Parked right beside the [[nucleus|nucleus]] sits the city’s master transit depot: two barrel-shaped [[centrioles|centriole]] locked at right angles inside a cloud of protein jelly studded with ring-shaped templates.\n\nThose rings grab free tubulin bricks from the [[cytosol|cytosol]] and launch [[microtubules|microtubule]] outward in every direction—giving inward-walking dynein motors a single downtown address to cluster the [[Golgi apparatus|golgi]], and splitting into twin opposite poles at mitosis to divide the genome cleanly.',
      blueprint: 'Role: Primary microtubule-organizing center (MTOC) and mitotic spindle pole · From: [[Tubulin|tubulin]] dimers, γ-tubulin, pericentrin/CEP proteins, and ATP/GTP from [[cytosol|cytosol]] · Inside: Orthogonal mother–daughter [[centriole|centriole]] pair embedded in pericentriolar material (PCM) bearing γ-TuRC nucleating rings · To: Nucleates minus-end-anchored [[microtubules|microtubule]] and templates the [[primary cilium|cilium]]',
      scientific: 'Membraneless organelle (~1 µm diameter) comprising an orthogonal pair of 9-triplet microtubule centrioles (mother centriole bearing distal/subdistal appendages, daughter centriole) surrounded by phase-separated pericentriolar material (PCM: pericentrin, CDK5RAP2/CEP215, CEP192). Recruits ~2.2 MDa γ-tubulin ring complexes (γ-TuRC, 14-spoke template) to cap microtubule (−) ends; duplicates once per cell cycle in S phase under PLK4/SAS-6 control.'
    },
    es: {
      simple: 'El centrosoma es la estación central situada junto al núcleo desde donde irradian las autopistas de microtúbulos hacia toda la célula. Antes de la división celular se duplica para formar los dos polos que reparten los cromosomas.',
      story: 'Estacionada justo al costado del [[núcleo|nucleus]] opera la gran terminal ferroviaria de la ciudad: dos barriles de [[centriolos|centriole]] cruzados en ángulo recto dentro de una nube proteica sembrada de moldes circulares.\n\nEsos anillos capturan ladrillos de tubulina del [[citosol|cytosol]] y disparan [[microtúbulos|microtubule]] hacia todos los barrios, ofreciendo un centro único alrededor del cual se congrega el [[aparato de Golgi|golgi]] y desdoblándose en dos polos opuestos cuando llega la hora de repartir la herencia genética.',
      blueprint: 'Rol: Centro organizador principal de microtúbulos (MTOC) y polo del huso mitótico · De: Dímeros de [[tubulina|tubulin]], γ-tubulina y proteínas pericentriolares del [[citosol|cytosol]] · Dentro: Par ortogonal de [[centriolos|centriole]] en matriz pericentriolar con anillos nucleadores γ-TuRC · Hacia: Ancla los extremos menos de los [[microtúbulos|microtubule]] y origina el cuerpo basal del [[cilio primario|cilium]]',
      scientific: 'Orgánulo sin membrana (~1 µm Ø) constituido por un par ortogonal de centriolos (madre con apéndices distales/subdistales e hija) inmersos en material pericentriolar condensado (pericentrina, CEP192, CEP215). Ancla complejos anulares de γ-tubulina (γ-TuRC, ~2.2 MDa) que nuclean y sellan el extremo (−) de los microtúbulos; se duplica exactamente una vez por ciclo celular en fase S bajo regulación de la quinasa PLK4 y SAS-6.'
    }
  },
  'centriole': {
    en: {
      simple: 'A centriole is a microscopic pinwheel barrel built from nine sets of three fused microtubule pipes. It forms the core of the centrosome and docks at the cell surface to sprout the cell’s sensory antenna.',
      story: 'Around a delicate nine-spoked cartwheel hub, twenty-seven [[tubulin|tubulin]] pipes fuse three-by-three into a pinwheel cylinder tough enough to survive mitosis after mitosis intact. Paired inside the [[centrosome|centrosome]] to organize traffic, the older mother barrel has a second talent: when the cell rests from dividing, it marches out to dock beneath the [[plasma membrane|plasma-membrane]] and extrudes the [[primary cilium|cilium]] antenna.',
      blueprint: 'Role: Ninefold-symmetric structural core of the [[centrosome|centrosome]] and basal body of [[cilia|cilium]] · From: SAS-6 cartwheel + α/β/δ/ε-[[tubulin|tubulin]] assembled in [[cytosol|cytosol]] · Inside: Nine skewed A-B-C [[microtubule|microtubule]] blades arranged in a 250 × 500 nm pinwheel barrel · To: Organizes pericentriolar cloud in [[centrosome|centrosome]] or templates axoneme of [[primary cilium|cilium]]',
      scientific: 'Chiral ninefold-symmetric cylindrical structure (~250 nm diameter × 450–500 nm length) composed of nine microtubule triplets: a complete 13-protofilament A-tubule fused sequentially to incomplete 10-protofilament B- and C-tubules, nucleated around a proximal SAS-6 homodimeric 9-spoked cartwheel and stabilized against depolymerization by polyglutamylation and inner scaffold proteins (POC1B, POC5, centrin).'
    },
    es: {
      simple: 'El centriolo es un diminuto barril en forma de molinete construido con nueve grupos de tres tubos fusionados. Forma el corazón del centrosoma y, cuando se acerca a la superficie, sirve de cimiento para la antena sensorial de la célula.',
      story: 'Alrededor de un delicado eje de nueve radios como rueda de carreta, veintisiete tubos de [[tubulina|tubulin]] se sueldan de tres en tres formando un barril en espiral tan sólido que resiste división tras división sin desmontarse. Además de gobernar el [[centrosoma|centrosome]], el barril más veterano guarda un segundo oficio: cuando la ciudad descansa de dividirse, viaja hasta la [[membrana plasmática|plasma-membrane]], atraca como cuerpo basal y levanta la antena del [[cilio primario|cilium]].',
      blueprint: 'Rol: Núcleo cilíndrico de simetría 9× del [[centrosoma|centrosome]] y cuerpo basal ciliar · De: Rueda central SAS-6 y dímeros de [[tubulina|tubulin]] reclutados del [[citosol|cytosol]] · Dentro: Nueve tripletes A-B-C de [[microtúbulos|microtubule]] dispuestos en molinete de 250 × 500 nm · Hacia: Estructura el [[centrosoma|centrosome]] o proyecta el axonema del [[cilio primario|cilium]]',
      scientific: 'Cilindro quiral de simetría rotacional C₉ (~250 nm Ø × 450–500 nm de longitud) formado por nueve tripletes de microtúbulos (túbulo A completo de 13 protofilamentos fusionado a túbulos B y C incompletos de 10 protofilamentos), ensamblado sobre un eje proximal en rueda de carro de dímeros SAS-6 y hiperestabilizado frente a la despolimerización por poliglutamilación y armazones internos (centrina, POC5).'
    }
  },
  'cytosol': {
    en: {
      simple: 'The cytosol is the crowded, jelly-thick water filling the space between all organelles—much closer to packed rush-hour subway stew than empty soup. Thousands of chemical reactions, including the first split of sugar, happen right out in this open plaza.',
      story: 'Forget the textbook myth of organelles floating in empty swimming-pool water—step into the cytosol and [[proteins|protein]], ribosomes, and metabolites pack shoulder-to-shoulder just nanometers apart in jostling [[water|water]].\n\nIn this breathless open market, incoming [[glucose|glucose]] gets cracked into pyruvate to hand off to mitochondria, [[tRNA|trna]] couriers race fresh bricks to translation lines, and barrel-shaped [[proteasomes|proteasome]] patrol every alley to shred misfolded hazards before they jam the streets.',
      blueprint: 'Role: Crowded aqueous reaction medium, glycolytic workshop, and inter-organelle transit plaza · From: Nutrients/ions via [[plasma membrane|plasma-membrane]], ATP from [[mitochondria|mitochondrion]], and salvaged bricks from [[lysosomes|lysosome]] · Inside: 70% [[water|water]] + ~200–300 mg/mL [[proteins|protein]] run glycolysis, pentose-P, fatty-acid synthesis, translation, and [[proteasome|proteasome]] quality control · To: Feeds pyruvate/NADH to [[mitochondria|mitochondrion]], precursors to ER/[[nucleus|nucleus]], and building blocks to [[cytoskeleton|cytoskeleton]]',
      scientific: 'Intracellular aqueous phase excluding membrane-bounded organelle lumens (~50–55% of total animal cell volume, pH 7.2 ± 0.1). Ionic composition strictly maintained opposite extracellular fluid: [K⁺] ≈ 140 mM, [Na⁺] ≈ 10 mM, [Mg²⁺]free ≈ 0.5–1 mM, [Ca²⁺]resting ≈ 50–100 nM, [Cl⁻] ≈ 5–15 mM; macromolecular crowding (~20–30% v/v, viscosity ~2–5× pure water for small solutes) accelerates association equilibria and phase separation.'
    },
    es: {
      simple: 'El citosol es el gel acuoso y abarrotado que llena el espacio entre todos los orgánulos, mucho más parecido a un vagón en hora punta que a una sopa vacía. Miles de reacciones químicas, incluido el primer corte del azúcar, ocurren en esta gran plaza abierta.',
      story: 'Olvida la imagen escolar de unos pocos orgánulos flotando en una piscina vacía: en el citosol real, millones de [[proteínas|protein]] y ribosomas se codean a apenas nanómetros de distancia entre moléculas vibrantes de [[agua|water]].\n\nEn este mercado frenético a cielo abierto, la [[glucosa|glucose]] recién llegada se parte en piruvato rumbo a las mitocondrias, mensajeros [[ARNt|trna]] reparten ladrillos a toda prisa y patrullas de [[proteasomas|proteasome]] trituran piezas defectuosas antes de que atasquen las callejuelas.',
      blueprint: 'Rol: Medio reactivo macromolecular, taller glucolítico y plaza central de intercambio · De: Nutrientes por la [[membrana plasmática|plasma-membrane]], ATP de [[mitocondrias|mitochondrion]] y reciclaje de [[lisosomas|lysosome]] · Dentro: ~70 % [[agua|water]] y ~250 mg/mL de [[proteínas|protein]] ejecutan glucólisis, traducción y limpieza por [[proteasomas|proteasome]] · Hacia: Suministra piruvato a [[mitocondrias|mitochondrion]], precursores al [[núcleo|nucleus]]/RE y ladrillos al [[citoesqueleto|cytoskeleton]]',
      scientific: 'Fase acuosa intracelular extraluminal (~50–55 % del volumen celular animal, pH regulado en 7.2 ± 0.1). Composición iónica asimétrica frente al medio extracelular: [K⁺] ≈ 140 mM, [Na⁺] ≈ 10 mM, [Mg²⁺]libre ≈ 0.5–1 mM, [Ca²⁺]reposo ≈ 50–100 nM, [Cl⁻] ≈ 5–15 mM; el hacinamiento macromolecular (20–30 % del volumen ocupado, ~200–300 mg/mL de proteína) acelera las constantes de asociación enzimática.'
    }
  },
  'water': {
    en: {
      simple: 'Water is a tiny boomerang-shaped molecule with a slightly negative elbow and two slightly positive tips. Because these sticky little magnets love clinging to each other, they squeeze oily molecules into membranes and fold proteins into shape.',
      story: 'Pouring in single-file through [[aquaporin channels|channel-protein]] or forged fresh at the end of the electron transport chain, each bent trio of one greedy [[oxygen|atom-o]] and two [[hydrogens|atom-h]] flickers through billions of hydrogen-bond handshakes every second. By refusing to waste handshakes on greasy surfaces, this restless crowd herds phospholipids into leakproof walls and shoves unfolded chains into working [[proteins|protein]] across the entire [[cytosol|cytosol]].',
      blueprint: 'Role: Universal polar solvent, hydrophobic-assembly driver, and hydrolytic reactant · From: Osmotic influx via [[aquaporins|channel-protein]] and O₂ reduction in [[electron transport chain|electron-transport-chain]] · Inside: 104.5° bent [[oxygen|atom-o]]–[[hydrogen|atom-h]] dipole forms transient 3D H-bond networks · To: Solvates [[cytosol|cytosol]], drives [[phospholipid|phospholipid]]/[[protein|protein]] folding, and cleaves ATP/polymers in hydrolysis',
      scientific: 'Bent polar triatomic molecule H₂O (18.015 Da, ~0.275 nm van der Waals diameter, O–H covalent length 0.958 Å, H–O–H bond angle 104.45°, dipole moment 1.85 D, bulk concentration ~55.5 M). High dielectric constant (εr ≈ 78.5 at 25 °C) screens electrostatic ion pairs while dynamic tetrahedral H-bonding (~3.4 H-bonds/molecule in liquid, picosecond reorganization) generates the entropic hydrophobic effect.'
    },
    es: {
      simple: 'El agua es una diminuta molécula en forma de bumerán con el codo ligeramente negativo y las dos puntas positivas. Como estos pequeños imanes adoran abrazarse entre sí, empujan a las grasas a formar membranas y obligan a las proteínas a plegarse.',
      story: 'Entrando en fila india por las [[acuaporinas|channel-protein]] o naciendo recién horneada al final de la cadena de transporte de electrones, cada trío angulado de un [[oxígeno|atom-o]] y dos [[hidrógenos|atom-h]] entrelaza y suelta miles de millones de apretones por segundo. Como detesta desperdiciar abrazos frente al aceite, esta multitud inquieta acorrala a los fosfolípidos hasta levantar murallas y empuja las cintas sueltas hasta esculpir [[proteínas|protein]] en todo el [[citosol|cytosol]].',
      blueprint: 'Rol: Disolvente polar universal, motor del efecto hidrofóbico y reactivo de hidrólisis · De: Entrada osmótica por [[canales acuaporina|channel-protein]] y reducción de O₂ en [[mitocondrias|mitochondrion]] · Dentro: Dipolo angular (104.5°) de [[oxígeno|atom-o]] e [[hidrógenos|atom-h]] en red dinámica de puentes de H · Hacia: Hidrata el [[citosol|cytosol]], pliega [[proteínas|protein]]/[[fosfolípidos|phospholipid]] y rompe enlaces en hidrólisis',
      scientific: 'Molécula triatómica polar angular H₂O (18.015 Da, diámetro van der Waals ~0.275 nm, enlace O–H de 0.958 Å, ángulo H–O–H de 104.45°, momento dipolar 1.85 D, concentración molar pura 55.5 M). Su elevada constante dieléctrica (εr ≈ 78.5 a 25 °C) apantalla iones mientras su red tetraédrica fluctuante (~3.4 puentes de H/molécula, vida media en picosegundos) origina la fuerza entrópica del efecto hidrofóbico.'
    }
  },
  'proteasome': {
    en: {
      simple: 'The proteasome is a barrel-shaped woodchipper for damaged or expired individual proteins. Only proteins wearing a specific chain of ubiquitin "condemned" tags get unfolded, fed down its chute, and chopped into reusable pieces.',
      story: 'Leaving enzymatic razor blades loose in the [[cytosol|cytosol]] would be suicide, so this shredder hides its blades inside a locked four-ring barrel capped at both ends by smart security lids. When a misfolded or timed-out [[protein|protein]] arrives wearing a chain of ubiquitin tags, the 19S lid snips off the reusable tags, burns ATP to forcefully unravel the victim into a limp [[polypeptide|polypeptide]] noodle, and feeds it down the narrow chute—spitting short peptides out the bottom so peptidases can hand fresh [[amino acids|amino-acid]] back to [[ribosomes|ribosome]].',
      blueprint: 'Role: ATP-dependent selective shredder of [[ubiquitin|ubiquitin]]-tagged cytosolic and nuclear proteins · From: Polyubiquitinated misfolded/short-lived [[proteins|protein]] + ATP from [[mitochondria|mitochondrion]] · Inside: 19S AAA+ ATPase cap deubiquitinates and unfolds substrate into 20S proteolytic core barrel · To: Releases 3–25 aa oligopeptides cleaved to free [[amino acids|amino-acid]] in [[cytosol|cytosol]] and recycles [[ubiquitin|ubiquitin]]',
      scientific: '26S cylindrical protease complex (~2.5 MDa, ~45 nm × 20 nm; human 26S cryo-EM PDB 5GJR): central 20S core particle (~700 kDa, stacked α₇β₇β₇α₇ rings) capped by one or two 19S regulatory particles (~900 kDa, Rpn11 deubiquitinase + heterohexameric Rpt1–6 AAA+ ATPase unfoldase ring). Catalytic Thr1 nucleophiles on β1 (caspase-like), β2 (trypsin-like), and β5 (chymotrypsin-like) subunits cleave substrates inside the sequestered chamber.'
    },
    es: {
      simple: 'El proteasoma es una trituradora cilíndrica para proteínas individuales dañadas o caducadas. Solo las piezas marcadas con una cadena de etiquetas de ubiquitina son desenrolladas, metidas por su boca estrecha y cortadas en trozos reutilizables.',
      story: 'Dejar cuchillas sueltas por el [[citosol|cytosol]] sería una catástrofe, así que esta trituradora esconde sus filos dentro de un barril blindado de cuatro anillos cerrado con tapas inteligentes. Cuando llega una [[proteína|protein]] defectuosa con su collar de ubiquitina, la tapa superior rescata las etiquetas intactas, quema ATP para estirar a la víctima como un fideo [[polipeptídico|polypeptide]] y la empuja al tambor central, escupiendo fragmentos cortos que pronto vuelven como [[aminoácidos|amino-acid]] limpios a los [[ribosomas|ribosome]].',
      blueprint: 'Rol: Trituradora selectiva dependiente de ATP de proteínas marcadas con [[ubiquitina|ubiquitin]] · De: [[Proteínas|protein]] poliubiquitinadas del [[citosol|cytosol]], [[núcleo|nucleus]] o RE + ATP · Dentro: Tapa 19S recicla [[ubiquitina|ubiquitin]] y despliega la cadena hacia las cuchillas β del barril 20S · Hacia: Libera péptidos cortos convertidos en [[aminoácidos|amino-acid]] frescos para los [[ribosomas|ribosome]]',
      scientific: 'Complejo proteolítico cilíndrico 26S (~2.5 MDa, ~45 × 20 nm; PDB 5GJR): núcleo catalítico 20S (~700 kDa, cuatro anillos apilados α₇β₇β₇α₇) flanqueado por una o dos partículas reguladoras 19S (~900 kDa, desubiquitinasa Rpn11 y anillo desplegador hexamérico AAA+ Rpt1–6). Los residuos Thr1 N-terminales de las subunidades β1, β2 y β5 hidrolizan enlaces peptídicos dentro de la cámara aislada.'
    }
  },
  'motor-protein': {
    en: {
      simple: 'Motor proteins are two-legged molecular porters that literally walk hand-over-hand along microtubule highways hauling huge cargo bags. Kinesin marches outward toward the cell edge while dynein hikes inward toward the center.',
      story: 'Diffusion moves tiny ions fast, but a bloated [[vesicle|vesicle]] or [[mitochondrion|mitochondrion]] trying to drift across the jam-packed cytosol would take hours—so the city hires two-footed porters with cargo hitches on their tails. Burning one ATP coin per eight-nanometer stride, kinesin swings one globular foot past the other down a [[microtubule|microtubule]] toward the [[plasma membrane|plasma-membrane]], while heavy-duty dynein marches the opposite way toward the [[centrosome|centrosome]], hauling payloads fifty times wider than themselves.',
      blueprint: 'Role: Mechanochemical walking porters converting ATP hydrolysis into directed cargo transport · From: Synthesized as [[proteins|protein]] in [[cytosol|cytosol]]; fueled by ATP from [[mitochondria|mitochondrion]] · Inside: Twin motor heads bind/release [[tubulin|tubulin]] dimers along [[microtubules|microtubule]] in 8 nm hand-over-hand steps · To: Kinesins haul [[vesicles|vesicle]]/organelles to (+) periphery; dynein hauls cargo to (−) [[centrosome|centrosome]] and beats [[cilia|cilium]]',
      scientific: 'Microtubule-associated mechanochemical ATPases (~60–80 nm length): conventional kinesin-1 (~380 kDa heterotetramer: 2 heavy chains + 2 light chains; motor domain PDB 1BG2) steps toward (+) ends with 8.2 nm step size (1 αβ-tubulin dimer), ~0.8–1 µm/s velocity, and ~5–7 pN stall force at 1 ATP/step; cytoplasmic dynein-1 (~1.4 MDa AAA+ ring dimer + dynactin adaptor) steps processively toward (−) ends.'
    },
    es: {
      simple: 'Las proteínas motoras son porteadores moleculares bípedos que caminan literalmente paso a paso sobre las autopistas de microtúbulos cargando enormes bultos. La kinesina marcha hacia las afueras y la dineína camina de regreso al centro.',
      story: 'En el atasco perpetuo del [[citosol|cytosol]], una [[vesícula|vesicle]] o una mitocondria tardaría horas en cruzar la ciudad a simple deriva, así que entran en escena porteadores de dos pies con arnés de carga a la espalda. Quemando una moneda de ATP por cada zancada exacta de ocho nanómetros sobre los rieles de un [[microtúbulo|microtubule]], la kinesina avanza decidida hacia la [[membrana plasmática|plasma-membrane]] mientras la dineína rema en sentido contrario rumbo al [[centrosoma|centrosome]].',
      blueprint: 'Rol: Porteadores mecanoquímicos que transforman ATP en transporte direccional sobre rieles · De: [[Proteínas|protein]] citosólicas alimentadas con ATP de las [[mitocondrias|mitochondrion]] · Dentro: Dos cabezas motoras pisan dímeros de [[tubulina|tubulin]] en pasos alternos de 8 nm sobre [[microtúbulos|microtubule]] · Hacia: Kinesina lleva [[vesículas|vesicle]] hacia la periferia (+); dineína retorna cargas al [[centrosoma|centrosome]] (−)',
      scientific: 'ATPasas mecanoquímicas asociadas a microtúbulos (60–80 nm de largo): la kinesina-1 convencional (~380 kDa, heterotetrámero 2 cadenas pesadas + 2 ligeras; dominio motor PDB 1BG2) avanza hacia el extremo (+) con pasos discretos de 8.2 nm (1 dímero αβ-tubulina), velocidad ~0.8–1 µm/s y fuerza de bloqueo ~5–7 pN consumiendo 1 ATP/paso; la dineína citoplasmática-1 (~1.4 MDa con complejo dinactina) camina hacia el extremo (−).'
    }
  },
  'electron-transport-chain': {
    en: {
      simple: 'The electron transport chain is a bucket-brigade of four protein complexes embedded in the inner mitochondrial wall. Instead of letting food burn in one explosive flash, it hands electrons down step-by-step to pump protons behind a dam.',
      story: 'Burn [[glucose|glucose]] in open air and all its energy escapes as a useless flash of flame; inside the [[mitochondrion|mitochondrion]], four giant protein complexes tame that fire into a staircase. High-energy electrons stripped from food via NADH hop down iron-sulfur and copper rungs from Complex I through Complex IV until greedy [[oxygen|atom-o]] catches them at the bottom to become harmless [[water|water]].\n\nEvery drop down the staircase powers piston-like channels that shove protons across the oily crista membrane, building the high-pressure reservoir that spins [[ATP synthase|atp-synthase]] nonstop.',
      blueprint: 'Role: Redox-coupled proton-pumping relay generating the mitochondrial electrochemical gradient · From: Matrix NADH and FADH₂ (from [[glucose|glucose]]/[[fatty-acid|fatty-acid-tail]] oxidation) + inhaled O₂ · Inside: Complexes I, II, III, and IV embedded in [[phospholipid|phospholipid]] cristae shuttle e⁻ via ubiquinone/cytochrome c and pump H⁺ · To: Reduces O₂ to [[water|water]] and drives H⁺ return through [[ATP synthase|atp-synthase]]',
      scientific: 'Respirasome supercomplex (I₁III₂IV₁) in the inner mitochondrial membrane (~20 nm transmembrane height): Complex I (NADH:ubiquinone oxidoreductase, 45 subunits, ~980 kDa, pumps 4 H⁺/2 e⁻), Complex II (succinate dehydrogenase, 0 H⁺), Complex III₂ (cytochrome bc₁ dimer, Q-cycle translocates 4 H⁺/2 e⁻), and Complex IV (cytochrome c oxidase, CuA/heme a/heme a₃–CuB, pumps 2 H⁺/2 e⁻ and reduces ½ O₂ + 2 H⁺ → H₂O; ΔE°′ = +1.14 V from NADH to O₂, pumping 10 H⁺ per NADH).'
    },
    es: {
      simple: 'La cadena de transporte de electrones es una fila de cuatro complejos proteicos incrustados en la pared interna de la mitocondria. Pasa electrones de escalón en escalón sin explosiones para bombear protones detrás de una presa.',
      story: 'Si quemaras [[glucosa|glucose]] de golpe al aire libre, toda su energía se perdería en un fogonazo inútil; dentro de la mitocondria, cuatro colosos de [[proteína|protein]] domestican ese fuego convirtiéndolo en una escalera controlada. Los electrones arrancados del alimento bajan peldaño a peldaño desde el Complejo I hasta el IV, donde átomos de [[oxígeno|atom-o]] los atrapan al fondo convirtiéndolos en agua inocua.\n\nCada peldaño descendente acciona pistones que empujan protones al otro lado de la membrana de [[fosfolípidos|phospholipid]], llenando el embalse a presión que hace rugir las turbinas de [[ATP sintasa|atp-synthase]].',
      blueprint: 'Rol: Relevo redox bombeador de protones que carga la presa electroquímica mitocondrial · De: NADH y FADH₂ matriciales (de [[glucosa|glucose]] y [[ácidos grasos|fatty-acid-tail]]) + O₂ respirado · Dentro: Complejos I–IV en la bicapa de [[fosfolípidos|phospholipid]] transfieren e⁻ por ubiquinona/citocromo c y bombean H⁺ · Hacia: Forma [[agua|water]] metabólica e impulsa el giro de la [[ATP sintasa|atp-synthase]]',
      scientific: 'Supercomplejo respirasoma (I₁III₂IV₁) en la membrana mitocondrial interna (~20 nm de altura): Complejo I (NADH:ubiquinona oxidorreductasa, 45 subunidades, ~980 kDa, 4 H⁺/2 e⁻), Complejo II (succinato deshidrogenasa, 0 H⁺), Complejo III₂ (citocromo bc₁, ciclo Q de 4 H⁺/2 e⁻) y Complejo IV (citocromo c oxidasa, centros CuA y hemo a₃–CuB, 2 H⁺/2 e⁻ y reducción ½ O₂ + 2 H⁺ → H₂O; ΔE°′ = +1.14 V desde NADH hasta O₂, bombeando 10 H⁺/NADH).'
    }
  },
  'cilium': {
    en: {
      simple: 'A primary cilium is a solitary, whip-like radio tower poking out from the surface of almost every human cell. Packed with receptors, it sniffs passing growth signals, fluid flow, and—in your eyes and nose—light and smell.',
      story: 'When a cell pauses division, its veteran [[centriole|centriole]] marches out to dock beneath the [[plasma membrane|plasma-membrane]] and sprouts nine paired microtubule rails wrapped in a slender sheath of [[phospholipids|phospholipid]].\n\nBecause no ribosomes fit inside this narrow lookout tower, dedicated freight trains powered by [[motor proteins|motor-protein]] haul [[GPCRs|gpcr]] and Hedgehog sensors up and down the shaft nonstop, turning one tiny rooftop spire into the city’s master weather vane—while multi-ciliated cousin cells add dynein oars to sweep mucus out of your lungs.',
      blueprint: 'Role: Solitary sensory signaling antenna (primary 9+0) or fluid-propelling oar (motile 9+2) · From: Nucleated by mother [[centriole|centriole]] basal body; receptors hauled in by IFT [[motor proteins|motor-protein]] · Inside: Axoneme of 9 outer [[microtubule|microtubule]] doublets enclosed in specialized [[plasma membrane|plasma-membrane]] · To: Relays Hedgehog, Wnt, mechanical-flow, and [[GPCR|gpcr]] signals back to [[cytosol|cytosol]] and [[nucleus|nucleus]]',
      scientific: 'Hair-like organelle (~250 nm diameter, 2–10 µm length) gated at its base by a Y-link transition zone barrier above the 9-triplet basal body. Non-motile primary cilia feature a 9+0 doublet microtubule axoneme enriched in Hedgehog (Patched/Smoothened), PDGFRα, polycystin-1/2 mechanosensors, and GPCRs maintained by intraflagellar transport trains (IFT-B + kinesin-2 anterograde; IFT-A + dynein-2 retrograde); motile 9+2 cilia beat at 10–30 Hz via outer/inner axonemal dynein arms.'
    },
    es: {
      simple: 'El cilio primario es una antena solitaria que asoma en la azotea de casi todas nuestras células. Repleta de sensores, capta señales químicas vecinas, corrientes de líquido e incluso la luz y los olores en tus sentidos.',
      story: 'Cuando la célula aparca la división, su [[centriolo|centriole]] más veterano atraca justo bajo la membrana plasmática y levanta nueve pares de rieles de [[microtúbulos|microtubule]] enfundados en una fina vaina de [[fosfolípidos|phospholipid]].\n\nComo ningún ribosoma cabe en esta atalaya tan estrecha, trenes en miniatura tirados por proteínas motoras suben y bajan receptores [[GPCR|gpcr]] por la torre sin descanso, convirtiendo este mástil en la veleta maestra que informa al [[núcleo|nucleus]] de todo lo que ocurre en el vecindario.',
      blueprint: 'Rol: Antena sensorial de señalización (9+0 primario) o remo propulsor (9+2 móvil) · De: Cuerpo basal del [[centriolo|centriole]] madre y trenes IFT movidos por [[proteínas motoras|motor-protein]] · Dentro: Axonema de 9 dobletes de [[microtúbulos|microtubule]] envuelto en [[membrana plasmática|plasma-membrane]] selectiva · Hacia: Transmite señales Hedgehog, mecánicas y de [[GPCR|gpcr]] hacia el [[citosol|cytosol]] y el [[núcleo|nucleus]]',
      scientific: 'Orgánulo apical (~250 nm Ø, 2–10 µm de largo) aislado en su base por los enlaces en Y de la zona de transición sobre el cuerpo basal. El cilio primario sensorial posee un axonema 9+0 carente de dineína axonémica, concentrando receptores Hedgehog (Patched/Smoothened), policistinas mecanosensoras y GPCR mantenidos por transporte intraflagelar (IFT-B con kinesina-2 anterógrada; IFT-A con dineína-2 retrógrada); los cilios móviles 9+2 baten a 10–30 Hz.'
    }
  },
  'gpcr': {
    en: {
      simple: 'A GPCR is a doorbell-like sensor woven back and forth seven times through the cell membrane. When an outside hormone, neurotransmitter, or scent molecule taps the outer pocket, its inner tail wakes up a relay team inside.',
      story: 'Snaking seven transmembrane [[alpha-helices|alpha-helix]] through the [[phospholipids|phospholipid]] of the [[plasma membrane|plasma-membrane]], this compact sentinel lets the city hear news from outside without ever opening the gate to strangers. The instant adrenaline, serotonin, or even a photon snaps into its outer cradle, the helices twist like a camera shutter and nudge a waiting trimeric G-[[protein|protein]] inside the [[cytosol|cytosol]] to swap spent GDP for live GTP—setting off an amplifier cascade that can mobilize fuel or rewrite gene orders in seconds.',
      blueprint: 'Role: Seven-transmembrane transmembrane signal transducer converting extracellular cues into intracellular cascades · From: Folded in [[rough ER|rough-er]], glycosylated in [[Golgi|golgi]], stationed in [[plasma membrane|plasma-membrane]] or [[cilium|cilium]] · Inside: Ligand binding shifts 7 [[alpha-helices|alpha-helix]] (TM6 outward tilt), catalyzing GDP→GTP exchange on heterotrimeric Gαβγ [[proteins|protein]] · To: Triggers cAMP, IP₃/Ca²⁺ (from [[smooth ER|smooth-er]]), and kinase cascades; ~35% of clinical drugs target GPCRs',
      scientific: 'Seven-transmembrane (7TM) integral membrane receptor superfamily (~800 human genes, ~40–60 kDa, ~5 nm span; prototypical β₂-adrenergic receptor–Gs complex PDB 3SN6). Agonist binding breaks the cytosolic TM3–TM6 ionic lock (DRY motif), swinging TM6 outward ~14 Å to engage heterotrimeric Gαs/Gαi/Gαq/Gα12/13, triggering adenylyl cyclase or phospholipase Cβ amplification until GRK phosphorylation and β-arrestin recruitment drive clathrin endocytosis.'
    },
    es: {
      simple: 'Un receptor GPCR es un timbre molecular cosido siete veces de arriba abajo a través de la membrana celular. Cuando una hormona, un neurotransmisor o un aroma toca su bolsillo exterior, su cola interna despierta un equipo de relevos dentro.',
      story: 'Enhebrando siete [[hélices α|alpha-helix]] de ida y vuelta entre los [[fosfolípidos|phospholipid]] de la [[membrana plasmática|plasma-membrane]], este centinela permite escuchar noticias de fuera sin abrir jamás la puerta a desconocidos. Apenas una molécula de adrenalina o un fotón encaja en su cuna externa, el manojo de hélices gira como el diafragma de una cámara y empuja a una [[proteína|protein]] G vecina en el [[citosol|cytosol]] a cambiar GDP por GTP, disparando una alarma amplificada que moviliza reservas o avisa al núcleo en segundos.',
      blueprint: 'Rol: Transductor de membrana de 7 hélices que convierte señales externas en cascadas internas · De: Sintetizado en [[RE rugoso|rough-er]], madurado en [[Golgi|golgi]] y alojado en [[membrana plasmática|plasma-membrane]] o [[cilio|cilium]] · Dentro: La unión del ligando desplaza sus 7 [[hélices α|alpha-helix]] y activa [[proteínas|protein]] G heterotriméricas (GDP→GTP) · Hacia: Dispara segundos mensajeros (AMPc, IP₃/Ca²⁺ del [[RE liso|smooth-er]]); diana de ~35 % de los fármacos',
      scientific: 'Superfamilia de receptores integrales de 7 dominios transmembrana (~800 genes humanos, ~40–60 kDa, ~5 nm; complejo receptor β₂-adrenérgico–Gs PDB 3SN6). El agonista rompe el cierre iónico citosólico TM3–TM6 (motivo DRY), desplazando TM6 ~14 Å para catalizar el intercambio GDP→GTP en subunidades Gα (Gs, Gi, Gq, G12/13) que regulan adenilato ciclasa o fosfolipasa Cβ hasta su desensibilización por quinasas GRK y β-arrestina.'
    }
  },
  'na-k-pump': {
    en: {
      simple: 'The sodium–potassium pump is a tireless revolving-door bailer that burns one ATP to kick three sodium ions out and pull two potassium ions in. It stops the animal cell from swelling up and popping, while charging the battery behind every nerve spark.',
      story: 'Without a rigid outer wall, salty [[water|water]] rushing into the protein-packed [[cytosol|cytosol]] would burst an animal cell like an overfilled water balloon in minutes. Anchored across the [[plasma membrane|plasma-membrane]], millions of these tireless bailers devour up to a quarter of all ATP minted by [[mitochondria|mitochondrion]]—clamping a [[phosphate|phosphate]] onto their own flank to flip open outward and hurl three Na⁺ ions into the street before snapping two K⁺ ions back inside, keeping cell volume steady and cocking the electrical trigger of every thought in your brain.',
      blueprint: 'Role: Electrogenic P-type ATPase pump maintaining osmotic balance and resting membrane voltage · From: Cytosolic Na⁺ + ATP (from [[mitochondria|mitochondrion]]) and extracellular K⁺ across [[plasma membrane|plasma-membrane]] · Inside: Autophosphorylation at conserved Asp flips E1 ↔ E2 conformations to export 3 Na⁺ and import 2 K⁺ · To: Prevents osmotic lysis, sets Vm ≈ −70 mV, and powers Na⁺-coupled [[glucose|glucose]]/[[amino-acid|amino-acid]] symport',
      scientific: 'Heterodimeric P₂C-type ATPase (~150 kDa, ~10 nm tall; catalytic α-subunit ~110 kDa with 10 TM helices + glycosylated β-subunit ~35 kDa + FXYD regulator; PDB 3KDP). Hydrolyzes 1 Mg-ATP via transient Asp369 acyl-phosphate intermediate per Post–Albers E1/E2 cycle (~100–150 cycles/s) to extrude 3 Na⁺ and import 2 K⁺ against steep gradients ([Na⁺]out 145 mM vs in 10 mM; [K⁺]in 140 mM vs out 4 mM), consuming ~20–30% of whole-body ATP (~60–70% in neurons).'
    },
    es: {
      simple: 'La bomba de sodio–potasio es una puerta giratoria incansable que gasta un ATP para expulsar tres iones de sodio y meter dos de potasio. Evita que la célula animal se hinche y estalle, además de cargar la electricidad de cada impulso nervioso.',
      story: 'Sin una pared rígida alrededor, el [[agua|water]] atraída por el abarrotado [[citosol|cytosol]] hincharía la célula hasta reventarla en pocos minutos si nadie achicara sal en la frontera. Clavadas por millones en la [[membrana plasmática|plasma-membrane]], estas bombas consumen hasta la cuarta parte de todo el ATP que fabrican las [[mitocondrias|mitochondrion]]: se autoestampan un [[fosfato|phosphate]] para girar hacia fuera y arrojar tres iones Na⁺ a la calle antes de meter dos K⁺ de vuelta, sosteniendo el volumen celular y cargando la chispa de cada neurona.',
      blueprint: 'Rol: Bomba ATPasa electrogénica que mantiene el equilibrio osmótico y el voltaje de membrana · De: Na⁺ y ATP (de [[mitocondrias|mitochondrion]]) internos + K⁺ extracelular en la [[membrana plasmática|plasma-membrane]] · Dentro: Ciclo conformacional E1 ↔ E2 fosforilado en aspartato expulsa 3 Na⁺ e introduce 2 K⁺ · Hacia: Impide el estallido osmótico, fija −70 mV e impulsa la entrada acoplada de [[glucosa|glucose]] y [[aminoácidos|amino-acid]]',
      scientific: 'ATPasa heterodimérica tipo P₂C (~150 kDa, ~10 nm; subunidad α catalítica de 10 hélices TM ~110 kDa + subunidad β glicosilada ~35 kDa; PDB 3KDP). Hidroliza 1 Mg-ATP formando un intermediario acil-fosfato en Asp369 durante el ciclo Post–Albers (~100–150 ciclos/s) para transportar 3 Na⁺ afuera y 2 K⁺ adentro contra gradiente ([Na⁺]ext 145 mM / int 10 mM; [K⁺]int 140 mM / ext 4 mM), gastando ~25 % del ATP corporal y hasta ~70 % en neuronas.'
    }
  },
  'cell-junction': {
    en: {
      simple: 'Cell junctions are molecular zippers, rivets, and secret tunnels that lock neighboring animal cells into leakproof tissues. Together they keep stomach acid from leaking, stop skin from tearing, and let heart cells beat as one.',
      story: 'A lone animal cell is a fragile droplet, but bolt billions together and they become a beating heart or waterproof skin. Shipped in [[vesicles|vesicle]] to the lateral [[plasma membrane|plasma-membrane]], three specialized crews stitch neighboring cities together.\n\nHigh near the roof, tight junctions zip adjacent membranes shut so fluids cannot sneak through the alley; lower down, desmosome rivets clamp onto tough [[intermediate filaments|intermediate-filament]] to share mechanical tugs across the whole neighborhood; and six-sided gap-junction pipes bridge both [[cytosols|cytosol]] directly so ions and alarm sparks flash from cell to cell in a heartbeat.',
      blueprint: 'Role: Intercellular sealing, mechanical load-sharing, and direct electrical/metabolic coupling · From: Claudins, cadherins, and connexin [[proteins|protein]] trafficked from [[Golgi|golgi]] to lateral [[plasma membrane|plasma-membrane]] · Inside: Tight junctions seal paracellular space; desmosomes anchor [[intermediate filaments|intermediate-filament]]; gap junctions dock hexameric connexon pores · To: Unites individual [[cells|cell]] into polarized epithelia and synchronous myocardium',
      scientific: 'Tripartite vertebrate junctional complex spanning 10–200 nm lateral membranes: (1) tight junctions (zonula occludens: claudin/occludin strands linked via ZO-1/2/3 to F-actin, blocking paracellular diffusion), (2) adherens junctions & desmosomes (E-cadherin/catenins on F-actin; desmoglein/desmocollin + desmoplakin plaques anchoring 10 nm keratin/desmin intermediate filaments across a ~30 nm cleft), and (3) gap junctions (docked connexin hexamers forming ~1.4 nm pores passing solutes <1 kDa such as Ca²⁺, IP₃, cAMP across a 2–4 nm gap).'
    },
    es: {
      simple: 'Las uniones celulares son cremalleras, remaches y pasadizos secretos que ensamblan células animales vecinas para formar tejidos resistentes. Sellan fugas, reparten tirones en la piel y hacen latir al unísono al corazón.',
      story: 'Una célula animal solitaria es una gota vulnerable, pero abrochando miles de millones entre sí se levanta una piel impermeable o un corazón incansable. Entregadas en [[vesículas|vesicle]] a los costados de la [[membrana plasmática|plasma-membrane]], tres brigadas cosen las fachadas de ciudades vecinas.\n\nArriba del todo, las uniones estrechas cierran la grieta como una cremallera estanca; más abajo, los desmosomas remachan [[filamentos intermedios|intermediate-filament]] de una célula a otra para repartir cualquier tirón; y abajo, túneles hexagonales conectan ambos [[citosoles|cytosol]] para que chispas eléctricas y avisos crucen todo el barrio en un latido.',
      blueprint: 'Rol: Sellado epitelial, anclaje mecánico intercelular y acoplamiento eléctrico directo · De: Claudinas, cadherinas y conexinas ([[proteínas|protein]]) enviadas desde el [[Golgi|golgi]] a la [[membrana plasmática|plasma-membrane]] · Dentro: Uniones estrechas sellan intersticios; desmosomas fijan [[filamentos intermedios|intermediate-filament]]; uniones gap abren canales conexones · Hacia: Integra [[células|cell]] individuales en tejidos cohesionados y sincronizados',
      scientific: 'Complejo de unión intercelular vertebrado (10–200 nm): (1) uniones estrechas (zonula occludens: hebras de claudinas y ocludinas ancladas a actina vía ZO-1/2/3 que sellan la vía paracelular), (2) desmosomas (cadherinas desmosómicas desmogleína/desmocolina unidas por desmoplaquina a filamentos intermedios de queratina/desmina a través de ~30 nm) y (3) uniones comunicantes gap (dos conexones hexaméricos enfrentados a 2–4 nm con poro de ~1.4 nm permeable a iones y metabolitos <1 kDa).'
    }
  },
  'peroxisome': {
    en: {
      simple: 'A peroxisome is a fireproof chemical hazmat room that trims extra-long fats down to size and neutralizes toxic sparks. Because that reaction brews corrosive hydrogen peroxide bleach, it packs catalase enzymes to turn the bleach harmlessly into water and oxygen.',
      story: 'Some fuels are too unwieldy even for mitochondria: ultra-long [[fatty-acid tails|fatty-acid-tail]] released from lipid droplets arrive here first to be hacked down into manageable logs using raw [[oxygen|atom-o]] inside a single [[phospholipid|phospholipid]] wall.\n\nThat fierce chemical shearing brews dangerous hydrogen peroxide right inside the chamber—so the organelle stuffs itself nearly crystal-solid with catalase proteins that defuse millions of peroxide molecules every second into plain [[water|water]], before shipping the trimmed fuel logs next door to the [[mitochondria|mitochondrion]].',
      blueprint: 'Role: Oxidative hazmat chamber for very-long-chain β-oxidation, plasmalogen synthesis, and H₂O₂ detoxification · From: Very-long-chain [[fatty-acid tails|fatty-acid-tail]] (≥C22) from [[lipid droplets|lipid-droplet]], O₂, and PTS1/2-tagged [[proteins|protein]] from [[cytosol|cytosol]] · Inside: Acyl-CoA oxidases shorten chains generating H₂O₂; tetrameric catalase instantly disproportionates 2 H₂O₂ → 2 [[water|water]] + O₂ · To: Hands medium-chain acyl-carnitines to [[mitochondria|mitochondrion]] and ether lipids (plasmalogens) to myelin/membranes',
      scientific: 'Single-membrane oxidative organelle (0.2–1.0 µm diameter, lacking DNA; buds de novo from ER pre-peroxisomal vesicles and proliferates by Drp1 fission, importing folded matrix enzymes via PEX5/PEX7 receptors recognizing C-terminal -SKL PTS1 tags). Performs β-oxidation of very-long-chain (C22–C26) and branched phytanic fatty acids, bile acid and ether-phospholipid (plasmalogen) synthesis; heme-containing catalase (~240 kDa tetramer, kcat ≈ 4 × 10⁷ s⁻¹) scavenges H₂O₂ at diffusion-limited rates.'
    },
    es: {
      simple: 'El peroxisoma es una cámara acorazada contra riesgos químicos que recorta grasas extralargas y neutraliza chispas tóxicas. Como ese corte produce agua oxigenada corrosiva, guarda enzimas ultrarrápidas que la convierten al instante en agua y oxígeno.',
      story: 'Ciertos troncos de grasa que salen de las [[gotas lipídicas|lipid-droplet]] tienen colas de ácidos grasos tan largas que ni las mitocondrias pueden tragarlas de golpe, así que entran primero en este taller amurallado por una capa simple de [[fosfolípidos|phospholipid]] para ser aserrados con [[oxígeno|atom-o]].\n\nEse corte feroz levanta chispas de agua oxigenada corrosiva, pero la sala está abarrotada de proteínas catalasa que apagan millones de moléculas por segundo transformándolas en [[agua|water]] inocua antes de pasar la leña ya cortada a las [[mitocondrias|mitochondrion]].',
      blueprint: 'Rol: Cámara oxidativa de recorte de grasas muy largas, síntesis de plasmalógenos y neutralización de H₂O₂ · De: [[Ácidos grasos|fatty-acid-tail]] muy largos (≥C22) de [[gotas lipídicas|lipid-droplet]], O₂ y [[proteínas|protein]] citosólicas con señal PTS1 · Dentro: Oxidasas acortan cadenas formando H₂O₂ y la catalasa lo descompone en [[agua|water]] + O₂ · Hacia: Cede cadenas medias a [[mitocondrias|mitochondrion]] y lípidos éter para mielina y membranas',
      scientific: 'Orgánulo oxidativo de membrana simple (0.2–1.0 µm Ø, sin genoma propio; originado de novo desde el RE o por fisión e importación postraduccional de proteínas plegadas vía receptores PEX5/PEX7 para señales C-terminales -SKL). Ejecuta la β-oxidación de ácidos grasos de cadena muy larga (C22–C26) y ramificados, síntesis de ácidos biliares y plasmalógenos; su catalasa tetramérica hemínica (~240 kDa, kcat ≈ 4 × 10⁷ s⁻¹) degrada 2 H₂O₂ → 2 H₂O + O₂ cerca del límite difusional.'
    }
  },
  'real-cell': {
    en: {
      simple: 'This realistic cutaway strips away tidy textbook diagrams to show the animal cell as it truly lives: shoulder-to-shoulder molecules racing between glowing organelles in a jam-packed gelatinous metropolis.',
      story: 'Peel back the [[plasma membrane|plasma-membrane]] of a living cell and you find zero empty space—just a breathless, neon-busy metropolis refusing to collapse into chaos. Sugar and oxygen cross the border into a cytosol thick with jostling proteins, while courier transcripts stream out of the cut-open [[realistic nucleus|real-nucleus]] to ignite docked ribosomes along the rough ER.\n\nFollow any parcel in real time: [[Golgi|golgi]] stacks dispatch glowing vesicles down [[microtubule|microtubule]] rails, mitochondria flash as they mint fresh ATP, and [[lysosomes|lysosome]] melt yesterday’s scrap so every neighborhood stays fed.',
      blueprint: 'Role: Integrated whole-cell systems simulation of coupled metabolic, genetic, and vesicular fluxes · From: Extracellular [[glucose|glucose]], O₂, and [[amino acids|amino-acid]] crossing [[plasma membrane|plasma-membrane]] · Inside: Molecular-crowding [[cytosol|cytosol]] links [[realistic nucleus|real-nucleus]] transcription to [[rough ER|rough-er]]/[[Golgi|golgi]] secretion and [[mitochondrion|mitochondrion]] ATP synthesis · To: Secreted proteins, membrane renewal, heat, CO₂, and continuous homeostatic turnover',
      scientific: 'Scale-faithful mesoscopic reconstruction of a mammalian somatic cell (10–30 µm) integrating crystallographic macromolecular models (enlarged ~20× relative to organelle geometry for visibility) with physiological compartment topology: apical microvilli and primary cilium, cortical actomyosin, centrosome-nucleated microtubule tracks, perinuclear ER–Golgi secretory axis, mitochondrial chondriome, endolysosomal/peroxisomal degradative hubs, and chromosome-territoried nucleus.'
    },
    es: {
      simple: 'Esta vista realista deja atrás los esquemas vacíos de los libros para mostrar la célula animal tal como vive de verdad: un hormiguero gelatinoso donde moléculas reales viajan sin pausa entre orgánulos que se iluminan al trabajar.',
      story: 'Si abres en canal la [[membrana plasmática|plasma-membrane]] de una célula viva no encuentras huecos vacíos, sino una metrópolis febril que se niega a rendirse al desorden. Nutrientes y oxígeno cruzan hacia un citosol espeso y vibrante, mientras rollos recién copiados salen del [[núcleo realista|real-nucleus]] para encender los ribosomas apostados sobre el RE rugoso.\n\nCada envío puede seguirse al vuelo: el [[aparato de Golgi|golgi]] despacha vesículas sobre rieles de [[microtúbulos|microtubule]], las mitocondrias destellan al acuñar ATP y los [[lisosomas|lysosome]] reciclan piezas gastadas para mantener viva la ciudad.',
      blueprint: 'Rol: Reconstrucción sistémica integral de los flujos genéticos, energéticos y vesiculares de la célula · De: [[Glucosa|glucose]], O₂ y [[aminoácidos|amino-acid]] importados por la [[membrana plasmática|plasma-membrane]] · Dentro: El [[citosol|cytosol]] conecta la transcripción del [[núcleo realista|real-nucleus]] con [[RE rugoso|rough-er]], [[Golgi|golgi]] y [[mitocondrias|mitochondrion]] · Hacia: Secreción proteica, renovación de membranas, CO₂ y homeostasis continua',
      scientific: 'Reconstrucción mesoscópica a escala topológica real de una célula somática de mamífero (10–30 µm) que combina modelos atómicos cristalográficos (ampliados ~20× para resolución visual) con flujos metabólicos acoplados: dominio apical con microvellosidades y cilio primario, córtex de actina, red centrosómica de microtúbulos, vía secretora RE-Golgi, red mitocondrial, sistema endolisosómico/peroxisómico y núcleo con territorios cromosómicos.'
    }
  },
  'real-nucleus': {
    en: {
      simple: 'Sliced open at molecular detail, the realistic nucleus reveals 46 distinct chromosome neighborhoods packed with nucleosome spools, active gene-reading factories, and finished RNA messages swimming cap-first out the pores.',
      story: 'Slice open the [[nuclear envelope|nuclear-envelope]] and the myth of tangled spaghetti vanishes: each of the forty-six chromosomes claims its own tidy neighborhood, wound onto thousands of [[nucleosome|nucleosome]] spools with real PCNA clamps and [[ubiquitin|ubiquitin]] tags drifting through the lanes between.\n\nIn roughly a third of those territories right now, a gene being read glows with action while the cut-open [[realistic nucleolus|real-nucleolus]] churns out ribosome parts nearby, sending protein-coated RNA parcels diving cap-first through [[nuclear pores|nuclear-pore]] into the waiting city.',
      blueprint: 'Role: Atomically grounded cutaway of nuclear architecture, chromosome territories, and mRNA export · From: Imported NTPs, [[histones|histone]], [[PCNA|pcna]], and [[ubiquitin|ubiquitin]] crossing [[nuclear pores|nuclear-pore]] · Inside: 46 [[chromosome|chromosome]] territories expose [[active genes|real-dna]] alongside the phase-separated [[realistic nucleolus|real-nucleolus]] · To: Streams 5′-cap-first mRNPs and pre-ribosomes out [[nuclear pores|nuclear-pore]] to [[rough ER|rough-er]]',
      scientific: 'Mesoscopic cutaway of the mammalian interphase nucleus (5–10 µm; macromolecules rendered at ~20× scale with ~2,600 representative nucleosomes standing in for ~3 × 10⁷ native NCPs across 46 interphase chromosome territories). Depicts active Pol II transcription factories on ~1/3 of territories, interchromatin space populated with trimeric PCNA (PDB 1AXC) and ubiquitin (PDB 1UBQ), tripartite nucleolus, and cap-first mRNP translocation through octagonal NPCs.'
    },
    es: {
      simple: 'Abierto a escala molecular, el núcleo realista muestra 46 barrios cromosómicos bien definidos, repletos de carretes de ADN, genes copiándose en vivo y mensajes de ARN saliendo de cabeza por los poros.',
      story: 'Al seccionar la [[envoltura nuclear|nuclear-envelope]] desaparece el mito de la maraña caótica: cada uno de los cuarenta y seis cromosomas ocupa su propio distrito ordenado sobre miles de carretes [[nucleosómicos|nucleosome]], mientras anillos reales de PCNA y etiquetas de [[ubiquitina|ubiquitin]] patrullan las avenidas intermedias.\n\nEn un tercio de esos barrios arde ahora mismo un gen en transcripción junto al [[nucléolo realista|real-nucleolus]] abierto en canal, despachando paquetes de ARN con su caperuza por delante a través de los [[poros nucleares|nuclear-pore]] hacia los talleres exteriores.',
      blueprint: 'Rol: Corte mesoscópico del núcleo con territorios cromosómicos, transcripción viva y exportación · De: Nucleótidos, [[histonas|histone]], [[PCNA|pcna]] y [[ubiquitina|ubiquitin]] entrantes por [[poros nucleares|nuclear-pore]] · Dentro: 46 territorios de [[cromosomas|chromosome]] despliegan [[genes activos|real-dna]] junto al [[nucléolo realista|real-nucleolus]] · Hacia: Exporta complejos ARNm (caperuza 5′ delante) y prerribosomas hacia el [[RE rugoso|rough-er]]',
      scientific: 'Reconstrucción en corte del núcleo interfásico de mamífero (5–10 µm; escala molecular ampliada ~20× con ~2,600 nucleosomas representativos de los ~3 × 10⁷ reales repartidos en 46 territorios cromosómicos). Muestra focos activos de ARN Pol II en ~1/3 de los territorios, nucleoplasma poblado por trímeros de PCNA (PDB 1AXC) y ubiquitina (PDB 1UBQ), nucléolo tripartito y exportación direccional 5′→3′ de ARNm por los poros.'
    }
  },
  'real-nucleolus': {
    en: {
      simple: 'Up close, the realistic nucleolus works like a three-ring concentric assembly line where rows of enzymes read ribosomal genes at once, making each active gene bristle like a tiny pine tree.',
      story: 'Zoom into the [[nucleolus|nucleolus]] and three nested liquid shells appear without a single membrane wall between them. At the pale inner core, convoys of polymerase enzymes march nose-to-tail down loops of [[DNA|dna]], trailing progressively longer RNA branches until every gene looks like a microscopic holiday pine tree.\n\nThose freshly clipped branches drift outward into a middle ring of molecular scissors for chemical tuning, then into an outer granular ring where imported [[proteins|protein]] snap around them to finish two-part [[ribosomes|ribosome]] bound for the [[nuclear pores|nuclear-pore]].',
      blueprint: 'Role: Three-zone concentric production line for rRNA transcription, processing, and [[ribosome|ribosome]] assembly · From: rDNA loops, [[nucleotides|nucleotide]], snoRNAs, and ribosomal [[proteins|protein]] imported into [[real-nucleus|real-nucleus]] · Inside: Fibrillar center Pol I "Christmas trees" → dense fibrillar snoRNP cleavage → granular 40S/60S folding · To: Releases pre-40S and pre-60S [[ribosome|ribosome]] halves to [[nuclear pores|nuclear-pore]]',
      scientific: 'Multiphase condensate ultrastructure (1–3 µm) resolving Miller-spread "Christmas tree" transcription units inside pale fibrillar centers (tandem ~13 kb 47S rDNA transcribed simultaneously by ~100 packed RNA polymerase I holoenzymes per gene at ~50 nt/s). Nascent transcripts enter the fibrillarin/box C/D & H/ACA snoRNP-rich dense fibrillar component for >200 site-specific modifications and cleavage, then assemble with 80 RPs in the outer nucleophosmin granular component.'
    },
    es: {
      simple: 'Visto de cerca, el nucléolo realista funciona como una cadena de montaje en tres anillos concéntricos donde filas enteras de enzimas leen cada gen a la vez, dándole forma de diminuto pino navideño.',
      story: 'Al acercar la lupa al [[nucléolo|nucleolus]] aparecen tres capas líquidas anidadas sin una sola pared membranosa entre ellas. En los centros pálidos internos, caravanas de polimerasas avanzan pegadas unas a otras sobre bucles de [[ADN|dna]], dejando asomar ramas crecientes de ARN que dibujan diminutos abetos en plena cosecha.\n\nEsas ramas recién cortadas pasan al anillo intermedio para recibir retoques finos y culminan en la corteza granular externa, donde se abrazan con [[proteínas|protein]] recién llegadas para formar mitades de [[ribosoma|ribosome]] listas para cruzar los [[poros nucleares|nuclear-pore]].',
      blueprint: 'Rol: Línea concéntrica en tres fases de síntesis de ARNr y ensamblaje de [[ribosomas|ribosome]] · De: Bucles ADNr, [[nucleótidos|nucleotide]] y [[proteínas|protein]] ribosómicas dentro del [[núcleo realista|real-nucleus]] · Dentro: Centros fibrilares («árboles» Pol I) → anillo fibrilar denso (corte snoRNP) → corteza granular (40S/60S) · Hacia: Despacha subunidades pre-40S y pre-60S hacia los [[poros nucleares|nuclear-pore]]',
      scientific: 'Ultraestructura multifásica (1–3 µm) que resuelve unidades transcripcionales tipo «árbol de Miller» en los centros fibrilares (~100 holoenzimas ARN polimerasa I transcribiendo en fila cada gen repetido 47S de ~13 kb a ~50 nt/s). El pre-ARNr atraviesa el componente fibrilar denso rico en fibrilarina y complejos snoRNP C/D y H/ACA (>200 metilaciones/pseudouridilaciones) y ensambla las subunidades pre-40S y pre-60S en la corteza granular externa.'
    }
  },
  'real-dna': {
    en: {
      simple: 'This close-up catches a single gene in the act of being read: three histone spools have stepped aside so RNA polymerase II can pry open the bare DNA ladder and spin out a fresh RNA message.',
      story: 'Catching a gene mid-sentence takes clearing the furniture first: remodeling crews slide three [[nucleosome|nucleosome]] spools out of the way so a stretch of bare [[DNA|dna]] gleams open in the middle of the realistic nucleus.\n\nClamped right onto those exposed rungs sits crystallographic [[RNA polymerase II|pol-ii]], prying the twin strands apart to stitch incoming [[nucleotides|nucleotide]] into a growing [[RNA|rna]] ribbon that curls into hairpins and grabs a protective 5′ cap complex before it has even finished being born.',
      blueprint: 'Role: Live molecular snapshot of eukaryotic transcription elongation and co-transcriptional mRNP packaging · From: Remodeled [[nucleosome|nucleosome]]-free [[DNA|dna]] template + ribo-[[nucleotides|nucleotide]] · Inside: [[RNA polymerase II|pol-ii]] opens a ~14 bp transcription bubble; nascent [[RNA|rna]] folds and binds 5′ cap-binding complex · To: Releases packaged pre-mRNP into [[real-nucleus|real-nucleus]] for export through [[nuclear pores|nuclear-pore]]',
      scientific: 'Atomic-scale elongation scene (~50–100 nm field): chromatin remodelers evict three flanking nucleosomes (PDB 1AOI) to expose linker B-DNA engaged by RNA polymerase II (PDB 1I50). Pol II maintains a ~12–14 nt melted transcription bubble containing an 8–9 bp RNA–DNA hybrid duplex; emerging 5′-m⁷GpppN-capped pre-mRNA forms local stem-loops coated co-transcriptionally by cap-binding complex (CBC20/80) and hnRNP proteins to prevent R-loop hybridization.'
    },
    es: {
      simple: 'Este primer plano sorprende a un gen en pleno acto de lectura: tres carretes de histonas se han apartado para que la ARN polimerasa II abra la escalera desnuda de ADN y teja un mensaje fresco de ARN.',
      story: 'Para leer un párrafo del manual primero hay que despejar el pasillo: cuadrillas remodeladoras han corrido tres carretes [[nucleosómicos|nucleosome]] dejando al descubierto un tramo limpio de [[ADN|dna]] en pleno núcleo realista.\n\nAbrazada a esos peldaños desnudos trabaja la estructura real de la [[ARN polimerasa II|pol-ii]], separando las dos hebras para engarzar [[nucleótidos|nucleotide]] en una cinta naciente de [[ARN|rna]] que ya dobla horquillas y estrena casco protector en su punta antes siquiera de terminar de copiarse.',
      blueprint: 'Rol: Escena atómica en vivo de elongación transcripcional y empaquetamiento cotranscripcional · De: Tramo de [[ADN|dna]] despejado de [[nucleosomas|nucleosome]] + ribo-[[nucleótidos|nucleotide]] · Dentro: La [[ARN polimerasa II|pol-ii]] abre una burbuja de ~14 pb y extruye [[ARN|rna]] recubierto por el complejo de caperuza 5′ · Hacia: Libera el complejo ARNm maduro al [[núcleo realista|real-nucleus]] rumbo a los [[poros nucleares|nuclear-pore]]',
      scientific: 'Escena molecular de elongación (~50–100 nm): el desplazamiento de tres nucleosomas (PDB 1AOI) expone ADN-B desnudo ocupado por la ARN polimerasa II (PDB 1I50), que sostiene una burbuja de fusión de ~12–14 nt con un híbrido ARN–ADN interno de 8–9 pb. El transcrito naciente recibe cotranscripcionalmente su caperuza m⁷G en 5′, pliega horquillas secundarias y recluta el complejo CBC y proteínas hnRNP evitando bucles R.'
    }
  },
  'pol-ii': {
    en: {
      simple: 'RNA polymerase II is a twelve-piece protein claw that clamps onto DNA, pries its two strands apart, and types out messenger RNA copies at up to sixty letters a second.',
      story: 'Shaped like a giant crab claw forged from twelve distinct [[polypeptide|polypeptide]] subunits, this master scribe rides bare [[DNA|dna]] down a deep cleft between its two largest jaws inside the nucleus. Perched at the bottom of that canyon, two [[magnesium|atom-mg]] ions catch incoming [[nucleotides|nucleotide]] and snap forty letters per second into a fresh [[RNA|rna]] scroll, while a long flexible tail behind the enzyme coordinates capping and splicing crews on the fly.',
      blueprint: 'Role: Core DNA-dependent RNA polymerase transcribing all protein-coding mRNAs and many noncoding RNAs · From: 12 subunits translated on cytosolic [[ribosomes|ribosome]], imported to [[nucleus|nucleus]], supplied with NTPs + [[Mg²⁺|atom-mg]] · Inside: Rpb1/Rpb2 crab-claw cleft melts [[DNA|dna]] and catalyzes 5′→3′ [[RNA|rna]] synthesis at 20–60 nt/s · To: Extrudes capped, spliced mRNA transcripts for [[ribosome|ribosome]] translation',
      scientific: '12-subunit eukaryotic holoenzyme (~550 kDa, ~15 nm diameter; S. cerevisiae 10-subunit core crystal structure PDB 1I50 at 2.8 Å resolution). Active site between Rpb1 and Rpb2 coordinates two catalytic Mg²⁺ ions (Metal A and B) via invariant Asp triad, achieving transcription elongation at 20–60 nt/s with backtracking proofreading via TFIIS; mammalian Rpb1 C-terminal domain (CTD) carries 52 tandem YSPTSPS heptad repeats phosphorylated dynamically at Ser5/Ser2.'
    },
    es: {
      simple: 'La ARN polimerasa II es una pinza molecular de doce piezas que abraza al ADN, separa sus dos hebras y mecanografía copias de ARN mensajero a un ritmo de hasta sesenta letras por segundo.',
      story: 'Esculpida como una tenaza de cangrejo gigante con doce cadenas [[polipeptídicas|polypeptide]] distintas, esta escriba maestra encaja el [[ADN|dna]] en un cañón profundo entre sus dos mandíbulas mayores dentro del núcleo. En el fondo del taller, dos átomos de [[magnesio|atom-mg]] sujetan al vuelo los [[nucleótidos|nucleotide]] entrantes para coser hasta sesenta letras por segundo en un rollo nuevo de [[ARN|rna]], mientras su larga cola flexible coordina a los sastres que le ponen caperuza y recortan intrones sobre la marcha.',
      blueprint: 'Rol: Enzima central que transcribe todos los genes codificantes de proteínas en ARNm · De: 12 subunidades fabricadas en [[ribosomas|ribosome]] e importadas al [[núcleo|nucleus]] + NTP y [[magnesio|atom-mg]] · Dentro: Hendidura Rpb1/Rpb2 funde el [[ADN|dna]] y polimeriza [[ARN|rna]] 5′→3′ a 20–60 nt/s · Hacia: Entrega pre-ARNm procesados rumbo a los [[ribosomas|ribosome]]',
      scientific: 'Holoenzima eucariota de 12 subunidades (~550 kDa, ~15 nm; estructura cristalográfica central de 10 subunidades en levadura PDB 1I50 a 2.8 Å). El centro activo entre Rpb1 y Rpb2 coordina dos iones Mg²⁺ catalíticos (metales A y B) alcanzando velocidades de 20–60 nt/s con corrección asistida por TFIIS; el dominio C-terminal (CTD) desordenado de Rpb1 en mamíferos contiene 52 repeticiones heptapeptídicas YSPTSPS fosforiladas en Ser5 y Ser2.'
    }
  },
  'pcna': {
    en: {
      simple: 'PCNA is a smooth three-piece protein donut that clamps around DNA like a carabiner on a climbing rope. By tethering DNA-copying enzymes to the strand, it lets them copy thousands of letters in one go without falling off.',
      story: 'Left on its own, a DNA-copying enzyme slips off the slick [[DNA|dna]] duplex after just a few dozen letters—far too clumsy to duplicate billions of rungs before cell division. So an ATP-powered clamp loader cracks open this trimeric ring of three identical [[polypeptide|polypeptide]] arcs, snaps it shut around the helix inside the [[nucleus|nucleus]], and glides along on a cushion of water lined by [[alpha-helices|alpha-helix]], keeping replication and repair crews locked onto the track from start to finish.',
      blueprint: 'Role: Processivity sliding-clamp ring tethering DNA polymerases δ/ε and repair enzymes onto [[DNA|dna]] · From: Three identical monomers synthesized on cytosolic [[ribosomes|ribosome]] and loaded onto [[DNA|dna]] by RFC ATPase · Inside: Positively charged central channel lined by 12 [[alpha-helices|alpha-helix]] slides frictionlessly along B-DNA · To: Boosts replication speed/processivity >1,000× and recruits repair factors via [[ubiquitin|ubiquitin]] switch',
      scientific: 'Homotrimeric ring-shaped sliding clamp (~86 kDa trimer, ~29 kDa × 3 monomers, ~8 nm outer diameter, ~3.4 nm positively charged central lumen accommodating 2.0 nm B-DNA; human crystal structure PDB 1AXC). Pseudo-sixfold symmetry formed by two globular domains per monomer with 12 inner α-helices contacting DNA phosphates via a mobile water shell; loaded at 3′-primer–template junctions by replication factor C (RFC) and monoubiquitinated at Lys164 during translesion repair.'
    },
    es: {
      simple: 'PCNA es una rosquilla proteica de tres piezas iguales que abraza al ADN como un mosquetón de escalada sobre su cuerda. Sujeta a las enzimas copiadoras para que dupliquen miles de letras seguidas sin soltarse.',
      story: 'Por sí sola, la enzima que duplica el [[ADN|dna]] resbala y cae de la pista tras apenas unas docenas de letras, incapaz de copiar un genoma entero a tiempo. Por eso un cargador especial abre este anillo de tres arcos [[polipeptídicos|polypeptide]] idénticos, lo cierra alrededor de la doble hélice en el [[núcleo|nucleus]] y lo deja deslizarse sobre un cojín de agua tapizado de [[hélices α|alpha-helix]], manteniendo a los equipos de copia y reparación aferrados al riel a toda velocidad.',
      blueprint: 'Rol: Anillo deslizante de procesividad que sujeta ADN polimerasas y enzimas reparadoras · De: Tres monómeros idénticos salidos de [[ribosomas|ribosome]] y cargados sobre el [[ADN|dna]] por el complejo RFC · Dentro: Canal central positivo revestido por 12 [[hélices α|alpha-helix]] que resbala sin fricción · Hacia: Multiplica >1,000× la procesividad replicativa y coordina reparación al recibir [[ubiquitina|ubiquitin]]',
      scientific: 'Homotrímero anular (trímero ~86 kDa, 3 monómeros de ~29 kDa, ~8 nm Ø externo y canal central positivo de ~3.4 nm que rodea cómodamente los 2.0 nm del ADN-B; estructura humana PDB 1AXC). Presenta simetría pseudohéxagonal con 12 hélices α tapizando el lumen interior sobre una capa móvil de hidratación; es cargado en extremos 3′ cebador-molde por el complejo ATPasa RFC y regulado por monoubiquitinación en Lys164.'
    }
  },
  'ubiquitin': {
    en: {
      simple: 'Ubiquitin is a tiny, ultra-tough 76-amino-acid tag that the cell staples onto other proteins as a status sticker. One tag can say "go repair DNA," while a chain of four tags is the kiss of death sending junk to the shredder.',
      story: 'Barely three nanometers wide and folded from seventy-six [[amino acids|amino-acid]] into an almost indestructible knot, this tiny badge patrols both [[cytosol|cytosol]] and nucleus waiting for a three-enzyme relay team (E1, E2, E3) to weld its tail onto a target [[protein|protein]]. Slap a single badge onto [[PCNA|pcna]] and repair crews rush to a stalled fork; string four or more badges together via Lysine-48 and you have stamped a one-way ticket straight into the jaws of the [[proteasome|proteasome]].',
      blueprint: 'Role: Covalent post-translational routing and degradation tag ("molecular kiss of death" or signaling switch) · From: Synthesized as precursor fusions on [[ribosomes|ribosome]] and activated by ATP-spending E1–E2–E3 ligases · Inside: Compact β-grasp fold (one [[alpha-helix|alpha-helix]] + 5-strand β-sheet) links C-terminal Gly76 to target Lys · To: Lys48 poly-chains route damaged [[proteins|protein]] to [[proteasome|proteasome]]; Lys63/mono-tags direct [[vesicle|vesicle]] sorting and [[DNA|dna]] repair',
      scientific: 'Highly conserved 76-residue globular protein (8.56 kDa, ~3 nm, 73/76 residues identical from yeast to human; crystal structure PDB 1UBQ) adopting the compact thermostable β-grasp fold with seven surface lysines (K6, K11, K27, K29, K33, K48, K63). ATP-dependent E1 activating, E2 conjugating, and >600 human E3 ubiquitin ligases form an isopeptide bond between ubiquitin C-terminal Gly76 and substrate ε-NH₂ lysines; K48-linked tetraubiquitin triggers 26S proteasomal proteolysis.'
    },
    es: {
      simple: 'La ubiquitina es una diminuta y durísima etiqueta de 76 aminoácidos que la célula grapa sobre otras proteínas para decidir su destino. Una sola etiqueta puede pedir una reparación, pero una cadena de cuatro es el boleto directo a la trituradora.',
      story: 'De apenas tres nanómetros y plegada con setenta y seis [[aminoácidos|amino-acid]] en un nudo casi indestructible, esta insignia patrulla tanto el [[citosol|cytosol]] como el núcleo lista para que un trío de enzimas suelde su cola sobre una [[proteína|protein]] elegida. Una sola insignia pegada sobre [[PCNA|pcna]] convoca brigadas de rescate sobre el ADN; cuatro o más eslabonadas en fila firman la orden irrevocable de desguace dentro del [[proteasoma|proteasome]].',
      blueprint: 'Rol: Etiqueta covalente universal de control de calidad, tráfico y degradación proteica · De: Traducida en [[ribosomas|ribosome]] y conjugada con gasto de ATP mediante cascada E1–E2–E3 · Dentro: Pliegue compacto β-grasp con una [[hélice α|alpha-helix]] que une su Gly76 final a lisinas diana · Hacia: Cadenas en Lys48 envían [[proteínas|protein]] al [[proteasoma|proteasome]]; marcas simples guían [[vesículas|vesicle]] y reparación',
      scientific: 'Proteína globular ultraconservada de 76 aminoácidos (8.56 kDa, ~3 nm; 96 % idéntica entre levadura y humano; PDB 1UBQ) con plegamiento β-grasp termoestable y siete residuos de lisina superficiales (K6, K11, K27, K29, K33, K48, K63). La cascada enzimática E1, E2 y >600 ligasas E3 humanas forma un enlace isopeptídico entre Gly76 y grupos ε-amino diana; cadenas tetraubiquitina K48 dirigen a proteólisis en el proteasoma 26S.'
    }
  },
  'lipid-droplet': {
    en: {
      simple: 'A lipid droplet is a golden oil tank wrapped in a single-layer skin of phospholipids—unlike every other organelle’s double layer. It safely locks away high-energy fats until mitochondria need fuel.',
      story: 'Loose fatty acids sloshing through the cytoplasm act like harsh detergents that rip membranes apart, so the [[smooth ER|smooth-er]] packs spare fatty-acid tails and [[cholesterol|cholesterol]] into neutral oil lenses right between its two leaflets until a golden sphere pops out.\n\nBecause its core is pure oil rather than water, a single monolayer of [[phospholipids|phospholipid]]—tails pointing straight in—wraps it cleanly, guarded by perilipin gatekeeper proteins that unbolt the valve whenever hungry [[mitochondria|mitochondrion]] or [[peroxisomes|peroxisome]] call for high-octane fuel.',
      blueprint: 'Role: Neutral-lipid energy reservoir and lipotoxicity buffer · From: Triacylglycerols and sterol esters synthesized by DGAT/ACAT enzymes inside [[smooth ER|smooth-er]] membrane · Inside: Hydrophobic oil core wrapped by a unique single [[phospholipid|phospholipid]] monolayer coated with perilipin [[proteins|protein]] · To: Lipases (ATGL, HSL) cleave and hand [[fatty-acid tails|fatty-acid-tail]] to [[mitochondria|mitochondrion]] and [[peroxisomes|peroxisome]]',
      scientific: 'Monolayer-bounded storage organelle (0.1–5 µm in non-adipocytes, up to 100 µm unilocular droplet in white adipocytes): apolar core of triacylglycerols (TAGs, ~38 kJ/g anhydrous energy density, >6× hydrated glycogen) and cholesteryl esters enveloped by a single amphipathic phospholipid monolayer. Surface perilipins (PLIN1–5) block basal lipolysis until PKA phosphorylation recruits ATGL, HSL, and MGL lipases or lipophagy delivers droplets to lysosomes.'
    },
    es: {
      simple: 'Una gota lipídica es un tanque dorado de aceite envuelto en una sola capa de fosfolípidos, a diferencia de la capa doble del resto de los orgánulos. Guarda grasas de altísima energía bajo llave hasta que las mitocondrias piden combustible.',
      story: 'Los ácidos grasos sueltos actuarían como un detergente agresivo capaz de disolver murallas enteras, así que el [[RE liso|smooth-er]] empaqueta las colas de ácidos grasos sobrantes y el [[colesterol|cholesterol]] en una lente de aceite puro que se hincha hasta brotar como una esfera dorada.\n\nComo su corazón es aceite y no agua, le basta un abrigo simple de [[fosfolípidos|phospholipid]] con las colas hacia dentro, custodiado por proteínas perilipinas que abren el grifo solo cuando las [[mitocondrias|mitochondrion]] o los [[peroxisomas|peroxisome]] reclaman combustible pesado.',
      blueprint: 'Rol: Depósito anhidro de energía lipídica y amortiguador contra lipotoxicidad · De: Triglicéridos y ésteres de esterol sintetizados entre las valvas del [[RE liso|smooth-er]] · Dentro: Núcleo neutro de aceite cubierto por una monocapa única de [[fosfolípidos|phospholipid]] y [[proteínas|protein]] perilipinas · Hacia: Lipasas liberan [[colas de ácidos grasos|fatty-acid-tail]] hacia [[mitocondrias|mitochondrion]] y [[peroxisomas|peroxisome]]',
      scientific: 'Orgánulo de reserva rodeado por monocapa fosfolipídica simple (0.1–5 µm Ø en células somáticas; hasta 100 µm en adipocitos blancos) sobre un núcleo apolar de triacilgliceroles (~38 kJ/g anhidro, >6× la densidad energética del glucógeno hidratado) y ésteres de colesterilo. Las proteínas superficiales perilipinas (PLIN1–5) regulan el acceso secuencial de las lipasas ATGL, HSL y MGL tras fosforilación dependiente de PKA.'
    }
  },
  'microvillus': {
    en: {
      simple: 'Microvilli are thousands of stiff, finger-like folds poking up from the top of nutrient-absorbing cells like bristles on a plush carpet. Packing them side by side multiplies surface area twenty-fold so your gut can soak up meals fast.',
      story: 'A flat rooftop cannot install nearly enough nutrient gates to feed a hungry body after lunch, so absorptive cells push their apical [[plasma membrane|plasma-membrane]] upward into thousands of uniform finger-towers.\n\nEach tower is braced from within by twenty to thirty parallel [[actin filaments|actin-filament]] cross-bolted by villin and lashed to the oily skin by myosin-1a [[proteins|protein]], while their roots weave into a tough [[intermediate filament|intermediate-filament]] foundation below—funneling floods of [[glucose|glucose]] and amino acids straight down into the city.',
      blueprint: 'Role: Actin-braced apical membrane protrusion amplifying absorptive and digestive surface area · From: Apical [[plasma membrane|plasma-membrane]] pushed and stabilized by parallel [[actin filaments|actin-filament]] · Inside: 20–30 (+) tip-oriented F-actin cables bundled by villin/fimbrin/espin and tethered laterally by myosin-1a · To: Anchors into terminal web of [[intermediate filaments|intermediate-filament]] and imports [[glucose|glucose]]/[[amino acids|amino-acid]] into [[cytosol|cytosol]]',
      scientific: 'Non-motile cylindrical brush-border protrusion (~100 nm diameter × 1–2 µm length; ~1,000–3,000 microvilli per intestinal enterocyte, amplifying apical surface area ~20–30-fold). Core comprises 20–30 parallel polarized F-actin microfilaments (barbed + ends embedded in a dense tip complex, cross-linked at 12 nm center-to-center spacing by fimbrin/plastin-1, villin, and espin), laterally linked to the glycocalyx-rich membrane by calmodulin-bound Myo1a and rooted basally in the spectrin/keratin terminal web.'
    },
    es: {
      simple: 'Las microvellosidades son miles de dedos diminutos que se alzan como el pelo de una alfombra tupida en las células que absorben alimento. Al multiplicar veinte veces la superficie disponible, permiten absorber cada comida a gran velocidad.',
      story: 'Una azotea lisa jamás tendría espacio para instalar todas las compuertas que exige un banquete recién digerido, así que la célula pliega su [[membrana plasmática|plasma-membrane]] superior en miles de dedos idénticos perfectamente alineados.\n\nCada dedo se mantiene erguido gracias a un manojo interno de treinta [[filamentos de actina|actin-filament]] paralelos atados a la piel por brazos de [[proteína|protein]] miosina y enraizados abajo en una red firme de [[filamentos intermedios|intermediate-filament]], canalizando avalanchas de [[glucosa|glucose]] hacia el interior.',
      blueprint: 'Rol: Proyección apical reforzada con actina que multiplica la superficie de absorción · De: [[Membrana plasmática|plasma-membrane]] apical sostenida por haces paralelos de [[filamentos de actina|actin-filament]] · Dentro: 20–30 microfilamentos (extremos + en la punta) entrecruzados por villina/fimbrina y fijados por miosina-1a · Hacia: Enraíza en el velo terminal de [[filamentos intermedios|intermediate-filament]] e importa [[glucosa|glucose]] al [[citosol|cytosol]]',
      scientific: 'Proyección cilíndrica inmóvil del borde en cepillo (~100 nm Ø × 1–2 µm de largo; ~1,000–3,000 por enterocito intestinal, aumentando ~20–30× el área apical). Su eje contiene 20–30 filamentos paralelos de actina F con los extremos barbados (+) en la punta, empaquetados por villina, fimbrina y espina, conectados lateralmente a la bicapa rica en disacaridasas y transportadores SGLT1 mediante miosina-1a y anclados al velo terminal de espectrina y queratina.'
    }
  },
  'atom-mg': {
    en: {
      simple: 'Magnesium is a positively charged metal atom that acts as the silent partner of every ATP battery in the cell. Without a magnesium ion shielding ATP’s negative charges, enzymes cannot grip or spend it.',
      story: 'Forged in the heart of exploding stars and dissolved into your [[cytosol|cytosol]] from leafy greens and grains, this double-positive ion clamps onto the negatively charged [[phosphate|phosphate]] tail of ATP like an insulated handle. Without it, neither [[ATP synthase|atp-synthase]] nor [[RNA polymerase II|pol-ii]] could grip a single nucleotide—and out in green plants, the exact same atom sits at the sun-catching bullseye of [[chlorophyll|chlorophyll]].',
      blueprint: 'Role: Essential divalent cofactor neutralizing polyphosphate charge on ATP, [[DNA|dna]], and [[RNA|rna]] · From: Dietary mineral uptake across [[plasma membrane|plasma-membrane]] via TRPM6/7 and MagT1 channels · Inside: Octahedrally coordinated Mg²⁺ chelates β/γ-[[phosphate|phosphate]] oxygens and catalytic Asp residues · To: Enables catalysis in [[ATP synthase|atp-synthase]], [[pol-ii|pol-ii]], [[ribosomes|ribosome]], and plant [[chlorophyll|chlorophyll]]',
      scientific: 'Alkaline earth element Z = 12 (²⁴Mg standard atomic weight 24.305 Da; physiological species Mg²⁺, ionic radius 0.72 Å bare / ~4.3 Å hexahydrated [Mg(H₂O)₆]²⁺). Total intracellular [Mg] ≈ 15–20 mM (~90% chelated to ribosomes, polynucleotides, and Mg-ATP²⁻; free cytosolic [Mg²⁺] ≈ 0.5–1.0 mM); essential two-metal-ion catalytic cofactor in all DNA/RNA polymerases, kinases, ATPases, and chlorophyll porphyrin rings.'
    },
    es: {
      simple: 'El magnesio es un átomo metálico con carga positiva que actúa como el socio inseparable de cada batería de ATP. Sin un ion de magnesio sujetando sus cargas negativas, las enzimas ni siquiera podrían agarrar el ATP.',
      story: 'Forjado en estrellas antiguas e importado de verduras y semillas hasta el [[citosol|cytosol]], este pequeño imán de doble carga positiva abraza la cola de [[fosfatos|phosphate]] negativos del ATP como un mango aislante. Sin su ayuda, ni la [[ATP sintasa|atp-synthase]] ni la [[ARN polimerasa II|pol-ii]] lograrían aferrar un solo nucleótido, y en el mundo vegetal este mismo átomo brilla además en el centro exacto de cada molécula de [[clorofila|chlorophyll]].',
      blueprint: 'Rol: Cofactor divalente esencial que estabiliza cargas de ATP, [[ADN|dna]] y [[ARN|rna]] · De: Absorción iónica por canales selectivos en la [[membrana plasmática|plasma-membrane]] · Dentro: El catión Mg²⁺ coordina octaedros con oxígenos de grupos [[fosfato|phosphate]] y sitios activos · Hacia: Habilita catálisis en [[ATP sintasa|atp-synthase]], [[ARN polimerasa II|pol-ii]], [[ribosomas|ribosome]] y [[clorofila|chlorophyll]]',
      scientific: 'Metal alcalinotérreo Z = 12 (masa atómica 24.305 Da; catión fisiológico Mg²⁺, radio iónico desnudo 0.72 Å y ~4.3 Å como [Mg(H₂O)₆]²⁺). Concentración intracelular total ~15–20 mM (~90 % acomplejado en ribosomas, ácidos nucleicos y el verdadero sustrato biológico Mg-ATP²⁻; [Mg²⁺] libre ~0.5–1.0 mM); cofactor bimetálico indispensable en polimerasas, quinasas, ATPasas y el anillo tetrapirrólico de la clorofila.'
    }
  },
  'atom-h': {
    en: {
      simple: 'Hydrogen is the tiniest, most abundant atom in the universe—just one proton and one electron. In cells it forms weak Velcro-like bridges that hold DNA and proteins together, and naked protons spin the turbines that make ATP.',
      story: 'Born in the first minutes after the Big Bang and arriving inside [[water|water]] and [[glucose|glucose]], this featherweight atom plays two starring roles across the city. Shared unevenly with oxygen or nitrogen, it forms billions of gentle hydrogen clasps zipping [[DNA|dna]] rungs and [[alpha-helices|alpha-helix]] together; stripped of its lone electron into a bare proton, it pours down [[ATP synthase|atp-synthase]] turbines to power life itself.',
      blueprint: 'Role: Universal covalent cap, hydrogen-bond clasp, and chemiosmotic proton currency (H⁺) · From: Imported in [[water|water]], [[glucose|glucose]], and [[fatty-acid tails|fatty-acid-tail]] · Inside: 1 proton + 1 electron; forms polar H-bonds on O/N or moves as bare H⁺/hydronium · To: Zips [[DNA|dna]] and [[proteins|protein]], sets pH in [[lysosomes|lysosome]], and spins [[ATP synthase|atp-synthase]]',
      scientific: 'Element Z = 1 (¹H protium = 1.008 Da, covalent radius ~0.31 Å, van der Waals radius ~1.20 Å; accounts for ~63% of atoms in the human body by count, ~10% by mass). Mediates directional hydrogen bonds (8–30 kJ/mol, donor–acceptor distance 2.7–3.1 Å) governing macromolecular folding and base pairing; proton concentration defines pH (−log₁₀ a_H⁺) and transmembrane ΔpH driving F₁F₀- and V-type ATPases.'
    },
    es: {
      simple: 'El hidrógeno es el átomo más pequeño y abundante del universo: apenas un protón y un electrón. Tiende los cierres suaves que sujetan el ADN y las proteínas, y cuando queda como protón desnudo hace girar las turbinas de energía.',
      story: 'Nacido en los primeros minutos tras el Big Bang y traído a la ciudad dentro del [[agua|water]] y la [[glucosa|glucose]], este peso pluma domina dos oficios decisivos. Compartido con oxígeno o nitrógeno tiende miles de millones de puentes suaves que abrochan el [[ADN|dna]] y las [[hélices α|alpha-helix]]; despojado de su único electrón, se lanza en cascada por las turbinas de [[ATP sintasa|atp-synthase]] para encender la célula entera.',
      blueprint: 'Rol: Remate covalente orgánico, broche de puente de hidrógeno y moneda protónica (H⁺) · De: Ingresa formando parte del [[agua|water]], la [[glucosa|glucose]] y los [[ácidos grasos|fatty-acid-tail]] · Dentro: 1 protón + 1 electrón; enlaza cadenas apolares o actúa como protón transferible · Hacia: Une [[ADN|dna]] y [[proteínas|protein]], acidifica [[lisosomas|lysosome]] e impulsa la [[ATP sintasa|atp-synthase]]',
      scientific: 'Elemento Z = 1 (¹H protio = 1.008 Da, radio covalente ~0.31 Å, radio de van der Waals ~1.20 Å; representa ~63 % del número total de átomos del cuerpo humano y ~10 % de su masa). Forma puentes de hidrógeno direccionales (8–30 kJ/mol, distancia D···A de 2.7–3.1 Å) esenciales en apareamiento de bases y plegamiento proteico; su actividad como H₃O⁺ define el pH intracelular y la fuerza protón-motriz.'
    }
  },
  'atom-c': {
    en: {
      simple: 'Carbon is the master four-way connector hub of all living molecules. Because each carbon atom calmly shares four strong bonds at once, it snaps into endless chains, branches, and rings without falling apart in water.',
      story: 'Cooked inside ancient red-giant stars and captured from air into [[glucose|glucose]] by plants before reaching your plate, every carbon atom brings four sturdy hands ready to clasp neighbors in any direction. String them into greasy chains and you get [[fatty-acid tails|fatty-acid-tail]]; bend them into rings and backbones and you build every [[amino acid|amino-acid]] and [[nucleotide|nucleotide]] in the city—until [[mitochondria|mitochondrion]] finally return spent carbons to the sky as CO₂.',
      blueprint: 'Role: Tetravalent covalent chassis of every organic biomolecule · From: Dietary [[glucose|glucose]], [[amino acids|amino-acid]], and lipids imported into [[cytosol|cytosol]] · Inside: Four valence electrons form stable single, double, and aromatic C–C/C–H/C–O/C–N bonds · To: Builds [[proteins|protein]], [[DNA|dna]], and [[phospholipids|phospholipid]]; exits as respired CO₂ from [[mitochondria|mitochondrion]]',
      scientific: 'Group 14 nonmetal Z = 6 (¹²C = 12.000 Da, ~18.5% of human body mass; covalent radius 0.76 Å sp³, 0.67 Å sp²). Four valence electrons (1s² 2s² 2p²) hybridize into tetrahedral sp³ (109.5°, chiral stereocenters like Cα in L-amino acids) or planar sp² (120°, conjugated alkenes, peptide carbonyls, aromatic nucleobases) with high C–C bond dissociation energy (~348 kJ/mol) kinetically stable in water.'
    },
    es: {
      simple: 'El carbono es la pieza maestra de cuatro enganches sobre la que se construyen todas las moléculas de la vida. Como comparte cuatro enlaces firmes a la vez, arma cadenas largas, ramas y anillos sin deshacerse en el agua.',
      story: 'Cocinado en el corazón de estrellas gigantes y capturado del aire en forma de [[glucosa|glucose]] antes de llegar a tu mesa, cada átomo de carbono ofrece cuatro manos firmes capaces de enlazarse en todas direcciones. En fila india levanta [[colas de ácidos grasos|fatty-acid-tail]]; doblado en anillos y esqueletos esculpe cada [[aminoácido|amino-acid]] y cada [[nucleótido|nucleotide]] de la ciudad, hasta que las [[mitocondrias|mitochondrion]] devuelven los carbonos gastados al aire como CO₂.',
      blueprint: 'Rol: Chasis covalente tetravalente de toda la química orgánica celular · De: [[Glucosa|glucose]], [[aminoácidos|amino-acid]] y grasas importados al [[citosol|cytosol]] · Dentro: Cuatro enlaces estables en geometría tetraédrica (sp³) o plana/aromática (sp²) · Hacia: Estructura [[proteínas|protein]], [[ADN|dna]] y [[fosfolípidos|phospholipid]]; sale oxidado como CO₂ desde [[mitocondrias|mitochondrion]]',
      scientific: 'Elemento no metálico del grupo 14, Z = 6 (¹²C = 12.000 Da, ~18.5 % de la masa corporal humana; radio covalente 0.76 Å en sp³ y 0.67 Å en sp²). Sus cuatro electrones de valencia (2s² 2p²) permiten geometrías tetraédricas quirales sp³ (109.5°, centros estereogénicos L-aminoacídicos y D-azúcares) y trigonales planas sp² (120°, enlaces peptídicos y anillos aromáticos) con elevada energía de enlace C–C (~348 kJ/mol).'
    }
  },
  'atom-n': {
    en: {
      simple: 'Nitrogen is the signature atom of both genetic code letters and protein chains. With three covalent bonds plus a spare pair of electrons that readily grabs a proton, it brings positive charge and smart hydrogen-bonding to biomolecules.',
      story: 'Wrenched out of stubborn atmospheric gas by soil microbes and delivered to your cells inside dietary [[amino acids|amino-acid]], nitrogen welds every peptide joint along a [[polypeptide|polypeptide]] backbone. Woven into flat rings it spells out the A, T, C, G, and U bases of [[DNA|dna]], while out on [[head groups|head-group]] and [[histone|histone]] tails its positive charge grips negatively charged partners tight.',
      blueprint: 'Role: Signature heteroatom of peptide bonds, genetic [[bases|base]], and cationic side chains · From: Imported exclusively as reduced organic nitrogen in [[amino acids|amino-acid]] and nucleosides · Inside: Five valence electrons form 3 covalent bonds + basic lone pair (or 4 bonds as cationic R–NH₃⁺) · To: Links [[polypeptides|polypeptide]], builds [[nucleotide|nucleotide]] rings, and charges [[histones|histone]]/[[head groups|head-group]]',
      scientific: 'Group 15 pnictogen Z = 7 (¹⁴N = 14.007 Da, ~3.2% of human body mass; covalent radius ~0.71 Å, electronegativity χ = 3.04). Lone-pair delocalization into adjacent carbonyls confers partial double-bond planarity to peptide bonds and aromaticity to purine/pyrimidine heterocycles; protonation of Lys (pKa ~10.5), Arg (~12.5), and His (~6.0) side chains provides tunable electrostatic catalysis at physiological pH.'
    },
    es: {
      simple: 'El nitrógeno es el átomo distintivo tanto de las letras del código genético como de las cadenas de proteínas. Con tres enlaces y un par extra de electrones capaz de atrapar un protón, aporta carga positiva y uniones precisas.',
      story: 'Arrancado del aire por microbios del suelo y entregado a tus células dentro de los [[aminoácidos|amino-acid]] de la dieta, el nitrógeno remacha cada eslabón de una cadena [[polipeptídica|polypeptide]]. Engarzado en anillos planos escribe las cinco bases del [[ADN|dna]] y del ARN, y en las puntas de las [[histonas|histone]] o las [[cabezas polares|head-group]] porta la carga positiva que sujeta la arquitectura celular.',
      blueprint: 'Rol: Heteroátomo clave de enlaces peptídicos, [[bases|base]] genéticas y grupos catiónicos · De: Nitrógeno orgánico reducido importado en [[aminoácidos|amino-acid]] · Dentro: Cinco electrones de valencia forman amidas planas, anillos aromáticos o aminas cargadas (−NH₃⁺) · Hacia: Une cadenas [[polipeptídicas|polypeptide]], arma [[nucleótidos|nucleotide]] y carga [[histonas|histone]] y [[cabezas polares|head-group]]',
      scientific: 'Elemento del grupo 15, Z = 7 (¹⁴N = 14.007 Da, ~3.2 % de la masa humana; radio covalente ~0.71 Å, electronegatividad χ = 3.04). La deslocalización de su par solitario otorga planaridad al enlace peptídico y aromaticidad a purinas y pirimidinas; la protonación de cadenas laterales en Lys (pKa ~10.5), Arg (~12.5) e His (~6.0, tampón y catalizador ácido-base a pH fisiológico) gobierna interacciones electrostáticas.'
    }
  },
  'atom-o': {
    en: {
      simple: 'Oxygen is an electron-hungry atom that makes up two-thirds of your body weight (mostly in water) and acts as the final magnet pulling electrons down your mitochondria to keep ATP flowing.',
      story: 'Exhaled by sunlit forests and carried by red blood cells straight across your [[plasma membrane|plasma-membrane]], this electron-hungry atom drives the controlled fire that keeps the city alive. Waiting at the bottom of the [[electron transport chain|electron-transport-chain]] inside every mitochondrion, each oxygen atom snatches exhausted electrons and protons to become peaceful [[water|water]]—while already built into [[glucose|glucose]] and [[phosphates|phosphate]], its strong tug on electrons creates the polar charges that organize the entire cell.',
      blueprint: 'Role: Terminal respiratory electron sink and primary polar/anionic atom of biomolecules · From: Diffuses freely as O₂ across [[plasma membrane|plasma-membrane]]; also enters in [[water|water]] and [[glucose|glucose]] · Inside: High electronegativity polarizes O–H/C=O bonds and accepts 4 e⁻ per O₂ at Complex IV · To: Drives [[electron transport chain|electron-transport-chain]], forms [[water|water]], and charges [[phosphate|phosphate]]/carboxyl groups',
      scientific: 'Group 16 chalcogen Z = 8 (¹⁶O = 15.999 Da, ~65% of human body mass via H₂O; covalent radius ~0.66 Å, second-highest Pauling electronegativity χ = 3.44). Dioxygen (O₂, triplet biradical ground state ³Σg⁻) is kinetically sluggish until activated by transition-metal centers (heme Fe/Cu in cytochrome c oxidase, E°′ = +0.815 V for ½ O₂/H₂O), providing maximal thermodynamic driving force for aerobic respiration.'
    },
    es: {
      simple: 'El oxígeno es un átomo ávido de electrones que aporta dos tercios de tu peso corporal (sobre todo en el agua) y actúa como el imán final que tira de la corriente eléctrica en tus mitocondrias.',
      story: 'Exhalado por bosques distantes y entregado por la sangre a través de la [[membrana plasmática|plasma-membrane]], este átomo voraz sostiene el fuego controlado que impide el colapso de la ciudad. Apostado al pie de la [[cadena de transporte de electrones|electron-transport-chain]] en cada mitocondria, recoge los últimos electrones para transformarse mansamente en [[agua|water]], mientras en la [[glucosa|glucose]] y los [[fosfatos|phosphate]] tira de las cargas para dar polaridad a la vida.',
      blueprint: 'Rol: Aceptor final de electrones respiratorios y generador de polaridad molecular · De: Difusión libre de gas O₂ por la [[membrana plasmática|plasma-membrane]], además de [[agua|water]] y nutrientes · Dentro: Alta electronegatividad polariza enlaces y reduce O₂ en el Complejo IV mitocondrial · Hacia: Sostiene la [[cadena de transporte de electrones|electron-transport-chain]], forma [[agua|water]] e ioniza grupos [[fosfato|phosphate]]',
      scientific: 'Calcógeno del grupo 16, Z = 8 (¹⁶O = 15.999 Da, ~65 % de la masa corporal humana; radio covalente ~0.66 Å, electronegatividad χ = 3.44). El dioxígeno molecular (estado fundamental birradical triplete ³Σg⁻) presenta alta barrera cinética frente a singletes orgánicos hasta su activación en centros hemo-cobre del Complejo IV (E°′ = +0.815 V para ½ O₂/H₂O), maximizando el rendimiento energético aeróbico.'
    }
  },
  'atom-p': {
    en: {
      simple: 'Phosphorus is the central hub atom inside every phosphate group—the secret behind ATP batteries, DNA backbones, and membrane lipid heads. You rarely meet it naked; it works almost exclusively wrapped in a cage of four oxygens.',
      story: 'Weathered out of ancient continental rock into soil and meals before entering the [[cytosol|cytosol]], this five-bond specialist never travels bare—it dresses permanently in four [[oxygens|atom-o]] as a phosphate star. In that single outfit it pulls triple duty across the entire city: bolting [[nucleotides|nucleotide]] into unbreakable [[DNA|dna]] rails, crowning membrane lipids, and snapping onto ADP inside [[ATP synthase|atp-synthase]] to store life’s spendable energy.',
      blueprint: 'Role: Pentavalent central atom of [[phosphate|phosphate]] esters and anhydrides in genetics, membranes, and ATP · From: Absorbed as dietary orthophosphate via Na⁺/Pi cotransporters across [[plasma membrane|plasma-membrane]] · Inside: Forms tetrahedral PO₄ linkages uniting thermodynamic instability (ATP) with kinetic stability ([[DNA|dna]]) · To: Powers [[ATP synthase|atp-synthase]] cycles, links [[nucleotides|nucleotide]], and caps [[phospholipids|phospholipid]]',
      scientific: 'Group 15 pnictogen Z = 15 (³¹P = 30.974 Da, ~1.0% of human body mass—~85% in hydroxyapatite bone, ~15% cellular; covalent radius ~1.07 Å). Exclusively pentavalent P(V) in tetrahedral orthophosphate derivatives in biology: combines high thermodynamic phosphoryl-transfer potential in phosphoanhydrides (ATP, GTP) with extreme kinetic resistance to uncatalyzed water hydrolysis in anionic phosphodiesters (DNA backbone t₁/₂ > 10⁷ years at 25 °C).'
    },
    es: {
      simple: 'El fósforo es el átomo central de todos los grupos fosfato: la pieza clave de las baterías de ATP, los rieles del ADN y las cabezas de las membranas. Siempre trabaja vestido con un escudo de cuatro oxígenos.',
      story: 'Liberado por la lluvia desde rocas antiguas hasta llegar a tus alimentos y entrar al [[citosol|cytosol]], este especialista jamás viaja desnudo: viste siempre su armadura de cuatro [[oxígenos|atom-o]] formando el grupo fosfato. Con ese único traje cumple tres misiones insustituibles en la ciudad: cose [[nucleótidos|nucleotide]] en los rieles eternos del [[ADN|dna]], corona las murallas lipídicas y se prensa dentro de la [[ATP sintasa|atp-synthase]] para guardar energía lista al instante.',
      blueprint: 'Rol: Átomo central pentavalente de todos los grupos [[fosfato|phosphate]] en energía, membranas y genoma · De: Importado como fosfato inorgánico por cotransportadores Na⁺/Pi en la [[membrana plasmática|plasma-membrane]] · Dentro: Enlaces tetraédricos P(V)–O combinan resorte energético en ATP y blindaje cinético en [[ADN|dna]] · Hacia: Recarga ATP en la [[ATP sintasa|atp-synthase]], enlaza [[nucleótidos|nucleotide]] y remata [[fosfolípidos|phospholipid]]',
      scientific: 'Elemento del grupo 15, Z = 15 (³¹P = 30.974 Da, ~1.0 % de la masa humana; radio covalente ~1.07 Å). Opera biológicamente en estado pentavalente P(V) coordinado tetraédricamente a oxígeno: conjuga un alto potencial termodinámico de transferencia en enlaces fosfoanhídrido (ATP/GTP) con una extraordinaria inercia cinética frente a la hidrólisis espontánea en diésteres aniónicos (semivida del esqueleto del ADN >10⁷ años sin nucleasas).'
    }
  }
};

export const ANIMAL_PART_LENSES: PagePartLensMap = {
  'animal_cell_realistic.html': {
    'membrane': {
      en: {
        subtitle: 'The Electrified Oily Border',
        simple: 'An ultra-thin, self-healing soap film of lipids and protein gates that separates the living cell from the outside world. It lets fuel and oxygen in while pumping excess salt out so the cell never bursts.',
        story: 'Watch the glowing parcels in this cutaway: every drop of [[glucose|glucose]], oxygen, and amino acid feeding the city has to clear this shimmering, eight-nanometer border first. Built from [[phospholipids|phospholipid]] and cholesterol delivered by [[Golgi|golgi]] vesicles, the bilayer seals tears automatically while refusing to let charged molecules leak across.\n\nEmbedded across that restless oily sea, tireless [[sodium–potassium pumps|na-k-pump]] burn fresh ATP from the mitochondria to bail sodium out and keep osmotic pressure in check, while [[GPCR|gpcr]] antennas listen for outside hormones and secretory vesicles fuse open to launch finished proteins into the bloodstream.',
        blueprint: {
          role: 'Selective permeability barrier, osmotic bailer, and transmembrane signaling switchboard',
          arrivesFrom: 'New [[phospholipids|phospholipid]] and glycoproteins from [[Golgi|golgi]] [[vesicles|vesicle]]; ATP from [[mitochondria|mitochondrion]]; nutrients from blood',
          inside: 'Fluid bilayer of lipids and [[cholesterol|cholesterol]] hosts GLUT/amino-acid carriers, [[aquaporins|channel-protein]], [[GPCRs|gpcr]], and [[Na⁺/K⁺ pumps|na-k-pump]]',
          deliversTo: 'Imported [[glucose|glucose]], O₂, and [[amino acids|amino-acid]] into [[cytosol|cytosol]]; CO₂ and secreted proteins to extracellular space',
          loop: 'Endocytic [[vesicles|vesicle]] pinch inward for sorting while exocytic vesicles continuously return fresh membrane'
        },
        scientific: 'Asymmetric 7–10 nm phospholipid/sphingolipid/cholesterol (~35 mol%) bilayer (~50% protein by mass) braced beneath by the spectrin–actin cortex. Maintains Vm ≈ −70 mV via electrogenic Na⁺/K⁺-ATPases (3 Na⁺ out / 2 K⁺ in per ATP), mediates facilitative glucose uptake (GLUTs), single-file water permeation (AQPs), clathrin-mediated endocytosis, and SNARE-catalyzed exocytosis.',
        from: [
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'Lipids & receptors' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for ion pumps' },
          { nodeId: 'vesicle', label: 'Secretory vesicles', cargo: 'Secreted proteins' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Glucose, O₂ & amino acids' },
          { nodeId: 'vesicle', label: 'Endosomes', cargo: 'Internalized cargo' }
        ]
      },
      es: {
        subtitle: 'La frontera aceitosa electrificada',
        simple: 'Una película autorreparable de aceite y compuertas proteicas que separa la ciudad viva del mundo exterior. Deja entrar alimento y oxígeno mientras achica sal sin descanso para que la célula no estalle.',
        story: 'Sigue con la vista los destellos que cruzan el borde del corte: cada molécula de [[glucosa|glucose]], oxígeno y aminoácido que alimenta la ciudad debe acreditar su entrada en esta frontera de ocho nanómetros. Renovada con [[fosfolípidos|phospholipid]] y colesterol traídos en [[vesículas|vesicle]] desde el Golgi, la bicapa cicatriza al instante cualquier rasguño e impide fugas caóticas.\n\nIncrustadas en este mar fluido, millones de [[bombas de sodio–potasio|na-k-pump]] queman ATP recién salido de las mitocondrias para expulsar sodio y contener la presión del agua, mientras los receptores [[GPCR|gpcr]] captan avisos hormonales y las vesículas secretoras se funden con la muralla para exportar proteínas terminadas.',
        blueprint: {
          role: 'Barrera selectiva de intercambio, bomba osmótica y central sensorial de superficie',
          arrivesFrom: '[[Fosfolípidos|phospholipid]] y glicoproteínas en [[vesículas|vesicle]] del [[Golgi|golgi]]; ATP de [[mitocondrias|mitochondrion]]; nutrientes externos',
          inside: 'Bicapa fluida con [[colesterol|cholesterol]], transportadores de nutrientes, [[acuaporinas|channel-protein]], [[GPCR|gpcr]] y [[bombas Na⁺/K⁺|na-k-pump]]',
          deliversTo: '[[Glucosa|glucose]], O₂ y [[aminoácidos|amino-acid]] hacia el [[citosol|cytosol]]; proteínas secretadas y CO₂ hacia el exterior',
          loop: 'La endocitosis pellizca [[vesículas|vesicle]] hacia dentro y la exocitosis repone membrana limpia de forma continua'
        },
        scientific: 'Bicapa asimétrica de 7–10 nm compuesta por glicerofosfolípidos, esfingolípidos, colesterol (~35 % molar) y ~50 % en masa de proteínas, anclada al córtex de espectrina-actina. Sostiene Vm ≈ −70 mV mediante Na⁺/K⁺-ATPasas electrogénicas, regula el ingreso facilitado de glucosa (GLUT), ósmosis rápida por acuaporinas, endocitosis mediada por clatrina y exocitosis dependiente de complejos SNARE.',
        from: [
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Lípidos y receptores' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para bombas' },
          { nodeId: 'vesicle', label: 'Vesículas secretoras', cargo: 'Proteínas a exportar' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Glucosa, O₂ y aminoácidos' },
          { nodeId: 'vesicle', label: 'Endosomas', cargo: 'Carga endocitada' }
        ]
      }
    },
    'nucleus': {
      en: {
        subtitle: 'The Double-Walled Vault & Its Gates',
        simple: 'A twin-membrane fortress studded with thousands of octagonal security gates around the cell’s DNA. Proteins and fuel bricks must show a pass to enter, while fresh RNA work orders stream out.',
        story: 'Surrounding the glowing genome at the center of this cutaway runs the double moat of the [[nuclear envelope|nuclear-envelope]], seamlessly connected on its outer face to the rough ER sheets next door. Every second, freshly folded [[histones|histone]], polymerases, and nucleotides arrive from the [[cytosol|cytosol]] seeking entry into the command vault.\n\nNone can cross the oil walls directly; instead they crowd through colossal octagonal [[nuclear pores|nuclear-pore]] stuffed with selective protein tentacles. Only visitors carrying the right molecular badge slip inward, passing finished RNA scrolls and newborn [[ribosome|ribosome]] halves rushing cap-first in the opposite direction.',
        blueprint: {
          role: 'Double-bilayer nuclear boundary and Ran-GTP-gated macromolecular customs checkpoint',
          arrivesFrom: '[[Nucleotides|nucleotide]], ATP, [[histones|histone]], [[RNA polymerase II|pol-ii]], and ribosomal proteins from [[cytosol|cytosol]]',
          inside: 'Inner and outer [[nuclear envelope|nuclear-envelope]] bilayers fuse around ~3,000 octagonal [[nuclear pores|nuclear-pore]] lined with FG-repeats',
          deliversTo: 'Packaged mRNPs and 40S/60S [[ribosome|ribosome]] halves out to [[cytosol|cytosol]] and contiguous [[rough ER|rough-er]]',
          loop: 'Importins and exportins continuously shuttle back and forth across [[nuclear pores|nuclear-pore]] powered by the nuclear Ran-GTP gradient'
        },
        scientific: 'Concentric double lipid bilayer (~40 nm total span including the 20–40 nm perinuclear space continuous with the ER lumen) mechanically reinforced on its nucleoplasmic face by lamin A/B/C intermediate filaments and perforated by ~2,000–4,000 octagonal nuclear pore complexes (~120 MDa, ~120 nm O.D.). Karyopherin-mediated active transport translocates cargos >40 kDa across the central FG-nucleoporin phase at up to ~1,000 events·pore⁻¹·s⁻¹.',
        from: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Nucleotides & nuclear proteins' },
          { nodeId: 'ribosome', label: 'Cytosolic ribosomes', cargo: 'Histones & polymerases' }
        ],
        to: [
          { nodeId: 'rough-er', label: 'Rough ER', cargo: 'Capped mRNA & outer membrane' },
          { nodeId: 'ribosome', label: 'Ribosome pool', cargo: '40S & 60S subunits' }
        ]
      },
      es: {
        subtitle: 'La bóveda de doble muro y sus aduanas',
        simple: 'Una fortaleza de doble membrana perforada por miles de compuertas octogonales alrededor del ADN. Los ladrillos y proteínas entran con salvoconducto mientras los recados de ARN salen hacia los talleres.',
        story: 'Rodeando el genoma iluminado en pleno centro del corte se alza el doble foso de la [[envoltura nuclear|nuclear-envelope]], cuya pared externa desemboca directamente en las láminas del RE rugoso. Cada segundo llegan desde el [[citosol|cytosol]] remesas de nucleótidos, [[histonas|histone]] y enzimas recién plegadas pidiendo paso hacia la cámara acorazada.\n\nNadie perfora el muro a la fuerza: el tráfico entero desfila por las colosales aduanas octogonales del [[poro nuclear|nuclear-pore]], cuyos tentáculos internos dejan entrar solo a portadores con visado mientras escoltan rollos terminados de ARN y mitades de [[ribosoma|ribosome]] a toda prisa hacia el exterior.',
        blueprint: {
          role: 'Frontera nuclear de doble bicapa y aduana macromolecular gobernada por Ran-GTP',
          arrivesFrom: '[[Nucleótidos|nucleotide]], ATP, [[histonas|histone]], [[ARN polimerasa II|pol-ii]] y proteínas ribosómicas desde el [[citosol|cytosol]]',
          inside: 'Las dos membranas de la [[envoltura nuclear|nuclear-envelope]] se funden en ~3,000 [[poros nucleares|nuclear-pore]] con malla selectiva FG',
          deliversTo: 'ARNm con caperuza y subunidades de [[ribosoma|ribosome]] hacia el [[citosol|cytosol]] y el [[RE rugoso|rough-er]] contiguo',
          loop: 'Las carioferinas (importinas y exportinas) reciclan sin pausa por los [[poros nucleares|nuclear-pore]] impulsadas por el ciclo Ran-GTP/GDP'
        },
        scientific: 'Doble bicapa lipídica concéntrica (~40 nm de espesor incluyendo la cisterna perinuclear continua con el lumen del RE), tapizada internamente por la lámina nuclear de filamentos intermedios A/B/C y atravesada por ~2,000–4,000 complejos de poro nuclear (~120 MDa, ~120 nm Ø). El transporte selectivo de cargas >40 kDa a través del hidrogel FG alcanza tasas cercanas a ~1,000 translocaciones·poro⁻¹·s⁻¹.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Nucleótidos y proteínas' },
          { nodeId: 'ribosome', label: 'Ribosomas libres', cargo: 'Histonas y polimerasas' }
        ],
        to: [
          { nodeId: 'rough-er', label: 'RE rugoso', cargo: 'ARNm y continuidad luminal' },
          { nodeId: 'ribosome', label: 'Parque ribosómico', cargo: 'Subunidades 40S y 60S' }
        ]
      }
    },
    'chromatin': {
      en: {
        subtitle: 'Forty-Six Living Neighborhoods of Spools',
        simple: 'Two full meters of master DNA thread wound neatly onto millions of tiny histone spools and organized into 46 territories. Active chapters loosen up to be read while unused chapters stay coiled tight.',
        story: 'Inside the cut-open [[realistic nucleus|real-nucleus]], each colored cloud marks one of the forty-six chromosomes claiming its own territory rather than tangling like bowlfuls of spaghetti. Fresh [[nucleotides|nucleotide]] and ATP arrive through the pores to maintain two meters of DNA wound cleanly around positively charged [[histone|histone]] pucks.\n\nWatch how neighborhoods near the rim stay packed tight on mute, while territories toward the interior pop selected [[nucleosomes|nucleosome]] apart—inviting RNA polymerase II to land on bare rungs and copy urgent gene recipes into [[RNA|rna]].',
        blueprint: {
          role: 'Spatially organized, epigenetically indexed genomic archive inside the [[real-nucleus|real-nucleus]]',
          arrivesFrom: '[[Histones|histone]], ATP-dependent remodelers, and [[nucleotides|nucleotide]] imported from [[cytosol|cytosol]] via [[nuclear pores|nuclear-pore]]',
          inside: '46 [[chromosome|chromosome]] territories coil [[DNA|dna]] around [[nucleosomes|nucleosome]] into silent heterochromatin and open euchromatin',
          deliversTo: 'Accessible promoter/gene templates to [[RNA polymerase II|pol-ii]] to transcribe pre-mRNA ([[RNA|rna]])',
          loop: 'Histone acetyltransferases, deacetylases, and SWI/SNF remodelers continuously open and re-compact [[nucleosomes|nucleosome]] as cell demands shift'
        },
        scientific: 'Diploid human interphase chromatin (~6.4 Gbp DNA across 46 chromosome territories; ~3 × 10⁷ nucleosome core particles of 147 bp B-DNA on H2A/H2B/H3/H4 octamers, rendered at ~2,600 representative spools). Radially partitioned into transcriptionally repressed lamina-associated heterochromatin (H3K9me3, H3K27me3) and interior active euchromatin loops (H3K4me3, H3K27ac) extruded by cohesin/CTCF.',
        from: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Nucleotides & ATP' },
          { nodeId: 'ribosome', label: 'Cytosolic ribosomes', cargo: 'Histone octamer proteins' }
        ],
        to: [
          { nodeId: 'pol-ii', label: 'RNA polymerase II', cargo: 'Open gene templates' },
          { nodeId: 'rna', label: 'mRNA transcripts', cargo: 'Copied genetic code' }
        ]
      },
      es: {
        subtitle: 'Cuarenta y seis barrios vivos de carretes',
        simple: 'Dos metros enteros de hilo maestro de ADN enrollados en millones de diminutos carretes de histonas y repartidos en 46 barrios ordenados. Los capítulos en uso se aflojan para leerse y el resto permanece guardado bajo llave.',
        story: 'Dentro del [[núcleo realista|real-nucleus]] abierto en corte, cada nube coloreada señala el distrito propio de uno de los cuarenta y seis cromosomas, perfectamente ordenados sin enredarse jamás. Hasta aquí llegan [[nucleótidos|nucleotide]] y ATP frescos para custodiar dos metros de ADN devanados sobre discos magnéticos de [[histonas|histone]].\n\nObserva cómo los barrios pegados a la muralla permanecen apretados en silencio, mientras hacia el centro se apartan carretes [[nucleosómicos|nucleosome]] escogidos para que la ARN polimerasa II aterrice sobre los peldaños desnudos y copie recetas vivas de [[ARN|rna]].',
        blueprint: {
          role: 'Archivo genómico indexado epigenéticamente y organizado en territorios dentro del [[núcleo|real-nucleus]]',
          arrivesFrom: '[[Histonas|histone]], remodeladores dependientes de ATP y [[nucleótidos|nucleotide]] traídos por [[poros nucleares|nuclear-pore]]',
          inside: '46 territorios de [[cromosomas|chromosome]] pliegan [[ADN|dna]] sobre [[nucleosomas|nucleosome]] en heterocromatina silente y eucromatina abierta',
          deliversTo: 'Moldes génicos despejados para la [[ARN polimerasa II|pol-ii]] y síntesis de copias de [[ARN|rna]]',
          loop: 'Enzimas epigenéticas y complejos remodeladores abren y vuelven a cerrar [[nucleosomas|nucleosome]] según las necesidades de la ciudad'
        },
        scientific: 'Cromatina interfásica humana diploide (~6.4 Gpb de ADN en 46 territorios cromosómicos; ~3 × 10⁷ nucleosomas reales de 147 pb sobre octámeros H2A/H2B/H3/H4, representados a escala por ~2,600 nucleosomas). Segregada radialmente en heterocromatina periférica asociada a la lámina (H3K9me3, H3K27me3) y bucles internos de eucromatina activa (H3K4me3, H3K27ac) organizados por cohesina y CTCF.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Nucleótidos y ATP' },
          { nodeId: 'ribosome', label: 'Ribosomas libres', cargo: 'Proteínas histonas' }
        ],
        to: [
          { nodeId: 'pol-ii', label: 'ARN polimerasa II', cargo: 'Genes despejados' },
          { nodeId: 'rna', label: 'Transcritos de ARNm', cargo: 'Instrucciones copiadas' }
        ]
      }
    },
    'mrna': {
      en: {
        subtitle: 'Glowing Scrolls Fresh Off the Press',
        simple: 'Messenger RNA ribbons copied live from active genes by RNA polymerase II, dressed in protective protein coats, and diving headfirst out the nuclear pores toward waiting ribosomes.',
        story: 'Spot the bright transcription sites inside roughly a third of the chromosome territories: there, crystallographic [[RNA polymerase II|pol-ii]] clamps onto bare DNA and stitches incoming [[nucleotides|nucleotide]] into a fresh RNA ribbon.\n\nBefore the scroll has even finished printing, helper crews snap a protective cap onto its 5′ nose, snip out non-coding introns, and wrap the strand in escort [[proteins|protein]]. Packaged and inspected, the glowing parcel drifts to the nearest [[nuclear pore|nuclear-pore]], dives cap-first into the cytoplasm, and locks onto ribosomes on the [[rough ER|rough-er]].',
        blueprint: {
          role: 'Active transcription elongation and mRNP courier pipeline from gene to [[ribosome|ribosome]]',
          arrivesFrom: 'Open [[DNA|dna]] templates in chromatin plus ribo-[[nucleotides|nucleotide]] and ATP from [[cytosol|cytosol]]',
          inside: '[[RNA polymerase II|pol-ii]] synthesizes pre-mRNA; 5′-capping, spliceosome intron removal, 3′ polyadenylation, and hnRNP coating build mature mRNPs',
          deliversTo: 'Exports cap-first through [[nuclear pores|nuclear-pore]] to cytosolic [[ribosomes|ribosome]] and the [[rough ER|rough-er]]',
          loop: 'After multiple translation rounds, exonucleases degrade aged mRNA back into free [[nucleotides|nucleotide]] for re-import into the [[nucleus|nucleus]]'
        },
        scientific: 'Eukaryotic Pol II transcription-export pathway: 12-subunit RNA polymerase II (PDB 1I50, ~550 kDa) elongates at 20–60 nt/s across nucleosome-depleted gene bodies (~8,000–15,000 active genes per somatic cell). Co-transcriptional m⁷GpppN 5′-capping (CBC), U1–U6 spliceosomal intron excision, cleavage/polyadenylation (~200 A residues), and TREX/NXF1–NXT1 recruitment license directional 5′-cap-first export through NPCs.',
        from: [
          { nodeId: 'real-dna', label: 'Active gene (DNA)', cargo: 'Template sequence' },
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'NTPs & ATP' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Nuclear pores', cargo: 'Packaged mRNP (cap-first)' },
          { nodeId: 'rough-er', label: 'Rough ER', cargo: 'Secretory mRNA blueprints' },
          { nodeId: 'ribosome', label: 'Ribosomes', cargo: 'Coding codons' }
        ]
      },
      es: {
        subtitle: 'Pergaminos brillantes recién salidos de imprenta',
        simple: 'Cintas de ARN mensajero copiadas en vivo sobre genes activos por la ARN polimerasa II, vestidas con escoltas proteicos y lanzándose de cabeza por los poros nucleares hacia los ribosomas.',
        story: 'Fíjate en los focos encendidos en un tercio de los territorios cromosómicos: allí la [[ARN polimerasa II|pol-ii]] abraza el ADN despejado y engarza [[nucleótidos|nucleotide]] a toda máquina en una hebra naciente de ARN.\n\nAntes siquiera de soltarse de la imprenta, un equipo de sastres le calza un casco protector en su extremo 5′, recorta tramos sobrantes y abriga la cinta con [[proteínas|protein]] de escolta. Ya revisado, el paquete luminoso navega hasta un [[poro nuclear|nuclear-pore]], se zambulle con la caperuza por delante y enciende los ribosomas del [[RE rugoso|rough-er]].',
        blueprint: {
          role: 'Línea viva de transcripción por [[ARN polimerasa II|pol-ii]] y envío de ARNm hacia los talleres',
          arrivesFrom: 'Moldes abiertos de [[ADN|dna]] en la cromatina más ribo-[[nucleótidos|nucleotide]] y ATP del [[citosol|cytosol]]',
          inside: '[[Pol II|pol-ii]] transcribe el pre-ARNm mientras recibe caperuza 5′, corte y empalme (splicing), cola poli-A y escoltas hnRNP',
          deliversTo: 'Sale con la caperuza 5′ delante por los [[poros nucleares|nuclear-pore]] hacia [[ribosomas|ribosome]] libres y el [[RE rugoso|rough-er]]',
          loop: 'Tras traducirse decenas de veces, el ARNm gastado se desmonta en [[nucleótidos|nucleotide]] sueltos que regresan al [[núcleo|nucleus]]'
        },
        scientific: 'Eje eucariota de transcripción y exportación: la holoenzima ARN polimerasa II de 12 subunidades (PDB 1I50, ~550 kDa) elonga a 20–60 nt/s sobre regiones temporalmente libres de nucleosomas. El procesamiento cotranscripcional acoplado al CTD añade la caperuza 5′ m⁷G (unida a CBC), escinde intrones vía espliceosoma, añade ~200 adeninas en 3′ y recluta el factor NXF1–NXT1 para su cruce direccional por el poro nuclear.',
        from: [
          { nodeId: 'real-dna', label: 'Gen activo (ADN)', cargo: 'Secuencia molde' },
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Nucleótidos y ATP' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Poros nucleares', cargo: 'ARNm empaquetado' },
          { nodeId: 'rough-er', label: 'RE rugoso', cargo: 'Planos de secreción' },
          { nodeId: 'ribosome', label: 'Ribosomas', cargo: 'Codones listos' }
        ]
      }
    },
    'nucleolus': {
      en: {
        subtitle: 'The Machine-Tool Foundry Inside the Vault',
        simple: 'A dense, wall-free droplet inside the nucleus whose sole mission is mass-producing the two halves of the cell’s ribosomes. Without it, not a single protein factory in the city could be built.',
        story: 'Sitting prominently on the cut plane of the [[realistic nucleus|real-nucleus]], this bustling foundry holds itself together like a warm oil droplet without needing a membrane wall. Eighty kinds of freshly minted ribosomal proteins stream in through [[nuclear pores|nuclear-pore]] from the cytosol to meet loops of ribosomal [[DNA|dna]] inside its pale inner cores.\n\nMoving outward through three nested liquid rings, newly spun [[RNA|rna]] scaffolds get trimmed, chemically tuned, and snapped together with those imported proteins into finished 40S and 60S ribosome halves, which march right back out the pores to staff the [[rough ER|rough-er]].',
        blueprint: {
          role: 'Phase-separated nuclear factory mass-producing 40S and 60S [[ribosome|ribosome]] subunits',
          arrivesFrom: '80 ribosomal [[proteins|protein]] translated in [[cytosol|cytosol]] plus [[nucleotides|nucleotide]], imported via [[nuclear pores|nuclear-pore]]',
          inside: 'Three concentric condensate zones (FC, DFC, GC) transcribe rDNA, cleave/modify rRNA, and fold pre-40S and pre-60S particles',
          deliversTo: 'Separate [[40S|ribo-small]] and [[60S|ribo-large]] subunits exported through [[nuclear pores|nuclear-pore]] to [[cytosol|cytosol]] and [[rough ER|rough-er]]',
          loop: 'Cytosolic [[ribosomes|ribosome]] translate the 80 ribosomal proteins that return into the [[nucleolus|nucleolus]] to build the next generation of ribosomes'
        },
        scientific: 'Tripartite liquid–liquid phase-separated nuclear condensate (1–3 µm diameter) assembled on rDNA tandem arrays (NORs of chromosomes 13, 14, 15, 21, 22). Integrates Pol I transcription in fibrillar centers, snoRNP-guided 2′-O-methylation/pseudouridylation and endonucleolytic processing in the dense fibrillar component, and RNP assembly with 33 RPS + 47 RPL proteins (plus Pol III-made 5S rRNA) in the granular component at several thousand subunits per minute.',
        from: [
          { nodeId: 'ribosome', label: 'Cytosolic ribosomes', cargo: '80 ribosomal proteins' },
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'NTPs & ATP' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Nuclear pores', cargo: 'Pre-40S & pre-60S halves' },
          { nodeId: 'rough-er', label: 'Rough ER', cargo: 'New ribosomes' }
        ]
      },
      es: {
        subtitle: 'El astillero de máquinas dentro de la bóveda',
        simple: 'Una gota densa y sin membranas dentro del núcleo cuya única misión es fabricar en serie las dos mitades de los ribosomas. Sin este taller, la ciudad entera se quedaría sin fábricas de proteínas.',
        story: 'Asentado justo en el plano de corte del [[núcleo realista|real-nucleus]], este astillero febril se mantiene unido como una gota densa sin necesitar pared alguna. Ochenta tipos distintos de proteínas recién hechas afuera en el [[citosol|cytosol]] entran desfilando por los poros nucleares para reunirse con bucles de [[ADN|dna]] ribosómico.\n\nAvanzando del centro hacia fuera a través de tres anillos líquidos, los armazones frescos de [[ARN|rna]] se recortan y se pliegan con esas proteínas en mitades listas de ribosoma, que cruzan de vuelta los poros para poblar el [[RE rugoso|rough-er]].',
        blueprint: {
          role: 'Astillero nuclear separado por fases que fabrica en masa las subunidades del [[ribosoma|ribosome]]',
          arrivesFrom: '80 [[proteínas|protein]] ribosómicas hechas en el [[citosol|cytosol]] y [[nucleótidos|nucleotide]], vía [[poros nucleares|nuclear-pore]]',
          inside: 'Tres zonas concéntricas transcriben ADNr, procesan el ARNr y ensamblan partículas pre-40S y pre-60S',
          deliversTo: 'Subunidades [[40S|ribo-small]] y [[60S|ribo-large]] separadas hacia el [[citosol|cytosol]] y el [[RE rugoso|rough-er]]',
          loop: 'Los [[ribosomas|ribosome]] del citoplasma fabrican las proteínas ribosómicas que entran al [[nucléolo|nucleolus]] para construir nuevos ribosomas'
        },
        scientific: 'Condensado biomolecular nuclear tripartito (1–3 µm Ø) nucleado sobre repeticiones en tándem de ADNr en los cromosomas acrocéntricos 13, 14, 15, 21 y 22. Acopla la transcripción por ARN Pol I en los centros fibrilares, la modificación química y escisión por snoRNP en el componente fibrilar denso, y el ensamblaje con 33 proteínas RPS, 47 RPL y el ARNr 5S en el componente granular externo.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas citosólicos', cargo: '80 proteínas ribosómicas' },
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Nucleótidos y ATP' }
        ],
        to: [
          { nodeId: 'nuclear-pore', label: 'Poros nucleares', cargo: 'Mitades 40S y 60S' },
          { nodeId: 'rough-er', label: 'RE rugoso', cargo: 'Ribosomas nuevos' }
        ]
      }
    },
    'rrna': {
      en: {
        subtitle: 'The Catalytic Pine-Tree Ribbons',
        simple: 'Special RNA strands spun off pine-tree-shaped genes inside the nucleolus that never turn into proteins themselves. Instead, they fold up into the skeleton and welding torch at the heart of every ribosome.',
        story: 'Look closely inside the pale cores of the [[realistic nucleolus|real-nucleolus]] and you can spot rows of polymerase enzymes marching down DNA loops one right behind another, sprouting longer and longer [[RNA|rna]] branches until each gene looks like a tiny pine tree.\n\nUnlike messenger scrolls, these ribbons are never translated; instead, molecular scissors snip each long precursor into three crisp pieces that fold around imported [[proteins|protein]] to become the structural chassis—and the actual peptide-welding ribozyme blade—inside the 40S and [[60S|ribo-large]] halves of every [[ribosome|ribosome]].',
        blueprint: {
          role: 'Structural scaffold and peptidyl-transferase ribozyme core of all eukaryotic [[ribosomes|ribosome]]',
          arrivesFrom: 'Transcribed from tandem rDNA repeats by RNA Pol I (plus 5S by Pol III) using [[nucleotides|nucleotide]] in the [[nucleolus|nucleolus]]',
          inside: '13 kb 47S precursor is methylated/pseudouridylated by snoRNPs and cleaved into mature 18S, 5.8S, and 28S [[RNA|rna]] folds',
          deliversTo: '18S builds [[40S small subunit|ribo-small]]; 28S + 5.8S + 5S build [[60S large subunit|ribo-large]] exported via [[nuclear pores|nuclear-pore]]',
          loop: 'Long-lived rRNA cores catalyze millions of peptide bonds over days before ribophagy in [[lysosomes|lysosome]] recycles their [[nucleotides|nucleotide]]'
        },
        scientific: 'Ribosomal RNA accounts for ~80% of total cellular RNA. Human RNA polymerase I transcribes ~400 diploid 47S rDNA repeats (~13.3 kb) in Miller-tree arrays into pre-rRNA cleaved endo/exonucleolytically into 18S (1,869 nt, 40S decoding center), 5.8S (157 nt), and 28S (~5,070 nt, 60S peptidyl transferase ribozyme core), joined by extranucleolar Pol III-transcribed 5S rRNA (121 nt) and >200 snoRNA-guided 2′-O-Me/Ψ modifications.',
        from: [
          { nodeId: 'real-nucleolus', label: 'Nucleolar rDNA', cargo: '47S precursor transcript' },
          { nodeId: 'nucleotide', label: 'Nucleotide pool', cargo: 'A, U, G, C ribonucleotides' }
        ],
        to: [
          { nodeId: 'ribo-small', label: '40S small subunit', cargo: '18S decoding rRNA' },
          { nodeId: 'ribo-large', label: '60S large subunit', cargo: '28S, 5.8S & 5S catalytic rRNA' }
        ]
      },
      es: {
        subtitle: 'Las cintas catalíticas en árbol de Navidad',
        simple: 'Hebras especiales de ARN que brotan en filas con forma de abeto dentro del nucléolo y jamás se traducen en proteínas. Ellas mismas se pliegan para formar el esqueleto y el soplete soldador de cada ribosoma.',
        story: 'Si miras al corazón del [[nucléolo realista|real-nucleolus]], verás caravanas de enzimas avanzando en fila apretada sobre bucles de ADN, desplegando ramas crecientes de [[ARN|rna]] que dibujan diminutos abetos navideños.\n\nA diferencia de los mensajes comunes, estas cintas nunca se leen para fabricar otra cosa: tijeras químicas dividen cada tronco largo en tres piezas exactas que abrazan [[proteínas|protein]] recién llegadas y se convierten en el chasis y en el mismísimo cincel soldador de las mitades 40S y [[60S|ribo-large]] de cada [[ribosoma|ribosome]].',
        blueprint: {
          role: 'Armazón estructural y núcleo catalítico ribozímico de todos los [[ribosomas|ribosome]] celulares',
          arrivesFrom: 'Transcrito en tándem por ARN Pol I (y 5S por Pol III) con [[nucleótidos|nucleotide]] dentro del [[nucléolo|nucleolus]]',
          inside: 'El precursor 47S de ~13 kb recibe >200 retoques por snoRNP y se escinde en ARNr maduros 18S, 5.8S y 28S',
          deliversTo: 'El 18S arma la [[subunidad 40S|ribo-small]]; 28S, 5.8S y 5S arman la [[subunidad 60S|ribo-large]] rumbo a los [[poros nucleares|nuclear-pore]]',
          loop: 'Tras días soldando proteínas, la ribofagia en [[lisosomas|lysosome]] devuelve sus [[nucleótidos|nucleotide]] limpios al fondo común'
        },
        scientific: 'El ARN ribosómico constituye ~80 % del ARN celular total. La ARN polimerasa I transcribe ~400 copias diploides humanas de ADNr 47S (~13.3 kb) en unidades tipo árbol de Miller; su procesamiento rinde ARNr 18S (1,869 nt, centro decodificador 40S), 5.8S (157 nt) y 28S (~5,070 nt, ribozima peptidiltransferasa 60S), a los que se incorpora el ARNr 5S (121 nt, ARN Pol III) tras >200 metilaciones y pseudouridilaciones.',
        from: [
          { nodeId: 'real-nucleolus', label: 'ADNr nucleolar', cargo: 'Precursor 47S' },
          { nodeId: 'nucleotide', label: 'Fondo de nucleótidos', cargo: 'Ribonucleótidos A, U, G, C' }
        ],
        to: [
          { nodeId: 'ribo-small', label: 'Subunidad menor 40S', cargo: 'ARNr 18S lector' },
          { nodeId: 'ribo-large', label: 'Subunidad mayor 60S', cargo: 'ARNr 28S, 5.8S y 5S' }
        ]
      }
    },
    'nucleoplasm': {
      en: {
        subtitle: 'Clamps, Tags & Maintenance Crews Between the Chromosomes',
        simple: 'The busy fluid lanes winding between chromosome territories inside the nucleus, crowded with ring-shaped DNA clamps, ubiquitin tags, and repair crews keeping the master code pristine.',
        story: 'The lanes winding between [[chromosome|chromosome]] territories inside the realistic nucleus are anything but empty water: crystallographic [[PCNA|pcna]] sliding-clamp rings and tiny ubiquitin badges jostle shoulder-to-shoulder after arriving through [[nuclear pores|nuclear-pore]].\n\nWhenever a DNA letter suffers a chemical nick or replication forks fire up, three-piece PCNA donuts snap around the [[DNA|dna]] helix to hold repair polymerases steady, while ubiquitin tags summon specialist crews or condemn damaged nuclear proteins to the [[proteasome|proteasome]] so the archive never corrupts.',
        blueprint: {
          role: 'Interchromatin maintenance medium housing replication clamps, repair factors, and nuclear quality control',
          arrivesFrom: 'Folded [[PCNA|pcna]], [[ubiquitin|ubiquitin]], polymerases, spliceosomes, and ATP imported through [[nuclear pores|nuclear-pore]]',
          inside: 'Interchromatin channels route factors to [[DNA|dna]] lesions/forks, clamp [[PCNA|pcna]] rings, and conjugate [[ubiquitin|ubiquitin]] signals',
          deliversTo: 'Repaired/replicated [[chromosomes|chromosome]], spliced [[RNA|rna]], and polyubiquitinated waste to nuclear/cytosolic [[proteasomes|proteasome]]',
          loop: 'Deubiquitinases recycle free [[ubiquitin|ubiquitin]] monomers while unloaded [[PCNA|pcna]] trimers re-enter the soluble nucleoplasmic pool'
        },
        scientific: 'Soluble nuclear phase and interchromatin compartment (~200 mg/mL macromolecular density, pH ~7.2) populated by homotrimeric PCNA sliding clamps (PDB 1AXC, ~86 kDa), monomeric/conjugated ubiquitin (PDB 1UBQ, 8.6 kDa), DNA repair complexes (BER, NER, HR/NHEJ), nuclear speckle splicing factors, and 26S proteasomes maintaining genome stability against ~10⁴–10⁵ endogenous DNA lesions per cell per day.',
        from: [
          { nodeId: 'nuclear-pore', label: 'Nuclear pores', cargo: 'Imported PCNA & ubiquitin' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for repair & clamping' }
        ],
        to: [
          { nodeId: 'chromosome', label: 'Chromosomes', cargo: 'PCNA clamps & DNA repair' },
          { nodeId: 'proteasome', label: 'Proteasomes', cargo: 'Ubiquitin-tagged proteins' }
        ]
      },
      es: {
        subtitle: 'Pinzas, etiquetas y cuadrillas entre los cromosomas',
        simple: 'Las callejuelas líquidas entre los barrios de cromosomas dentro del núcleo, repletas de anillos deslizantes PCNA, etiquetas de ubiquitina y brigadas que reparan cualquier rasguño en el ADN.',
        story: 'Los pasillos que serpentean entre los territorios de [[cromosomas|chromosome]] dentro del núcleo realista jamás están vacíos: anillos cristalográficos reales de [[PCNA|pcna]] y diminutas insignias de ubiquitina patrullan codo con codo tras entrar por los [[poros nucleares|nuclear-pore]].\n\nCada vez que una letra de [[ADN|dna]] sufre una mella o arranca una copia nueva, las rosquillas triples de PCNA se cierran sobre la hélice para sujetar firme al equipo reparador, mientras las etiquetas de ubiquitina convocan refuerzos o envían proteínas nucleares averiadas al [[proteasoma|proteasome]].',
        blueprint: {
          role: 'Medio intercromatínico de replicación, reparación del genoma y control de calidad nuclear',
          arrivesFrom: 'Anillos [[PCNA|pcna]], [[ubiquitina|ubiquitin]], polimerasas, factores de empalme y ATP entrantes por [[poros nucleares|nuclear-pore]]',
          inside: 'Canales nucleoplasmáticos cargan [[PCNA|pcna]] sobre el [[ADN|dna]], reparan lesiones diarias y marcan fallos con [[ubiquitina|ubiquitin]]',
          deliversTo: '[[Cromosomas|chromosome]] íntegros, [[ARN|rna]] maduro y proteínas marcadas rumbo al [[proteasoma|proteasome]]',
          loop: 'Las desubiquitinasas recuperan [[ubiquitina|ubiquitin]] libre y los trímeros [[PCNA|pcna]] descargados vuelven a patrullar el nucleoplasma'
        },
        scientific: 'Fase soluble y compartimento intercromatínico nuclear (~200 mg/mL de densidad macromolecular) poblado por pinzas homotriméricas PCNA (PDB 1AXC, ~86 kDa), ubiquitina libre y conjugada (PDB 1UBQ, 8.6 kDa), complejos de reparación (BER, NER, recombinación homóloga), factores espliceosómicos en speckles nucleares y proteasomas 26S que corrigen ~10⁴–10⁵ lesiones endógenas diarias del ADN.',
        from: [
          { nodeId: 'nuclear-pore', label: 'Poros nucleares', cargo: 'PCNA y ubiquitina importados' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para reparación' }
        ],
        to: [
          { nodeId: 'chromosome', label: 'Cromosomas', cargo: 'Pinzas PCNA y reparación' },
          { nodeId: 'proteasome', label: 'Proteasomas', cargo: 'Proteínas marcadas' }
        ]
      }
    },
    'rer': {
      en: {
        subtitle: 'The Ribosome-Studded Export Foundry',
        simple: 'Stacked membrane sheets right outside the nucleus, covered in ribosomes that inject newly made proteins straight inside to be folded, sugar-stamped, and boxed up for the Golgi.',
        story: 'Step out a [[nuclear pore|nuclear-pore]] with a fresh mRNA scroll and you walk straight onto the factory floor of the rough ER, whose sheets balloon directly out of the outer nuclear wall. Docked [[ribosomes|ribosome]] gulp amino acids and ATP from the [[cytosol|cytosol]], threading nascent polypeptides through tiny membrane trapdoors into the sheltered cavern inside.\n\nWithin that oxidizing lumen, chaperone crews fold each protein, lock disulfide rivets in place, and stamp starter sugar trees onto its back—budding passing grades off in glowing [[vesicles|vesicle]] toward the Golgi apparatus while booting misfolded rejects out to the [[proteasome|proteasome]].',
        blueprint: {
          role: 'Co-translational translocation, oxidative folding, and N-glycosylation factory for the secretory pathway',
          arrivesFrom: 'mRNA and [[ribosome|ribosome]] halves from [[nucleus|nucleus]]; [[amino acids|amino-acid]], GTP, and [[mitochondrial|mitochondrion]] ATP from [[cytosol|cytosol]]',
          inside: 'SRP docks [[ribosomes|ribosome]] onto Sec61 channels; luminal BiP, PDI, and oligosaccharyltransferase fold, disulfide-bond, and glycosylate [[proteins|protein]]',
          deliversTo: 'COPII transport [[vesicles|vesicle]] carrying folded secretory/membrane proteins to the cis-[[Golgi|golgi]]',
          loop: 'COPI vesicles return escaped ER resident chaperones from [[Golgi|golgi]]; ERAD retrotranslocates misfolded chains to cytosolic [[proteasomes|proteasome]]'
        },
        scientific: 'Perinuclear cisternal sheet array (~50 nm luminal thickness, curved at sheet edges by reticulons and spaced by CLIMP-63) studded with membrane-bound 80S polysomes (~13 million ER-bound ribosomes in a hepatocyte). Executes SRP-dependent Sec61 translocation, N-linked Glc₃Man₉GlcNAc₂ core glycosylation, PDI-/Ero1-catalyzed disulfide formation, calnexin/UGGT1 folding audit, and Sar1-driven COPII budding at ER exit sites.',
        from: [
          { nodeId: 'real-nucleus', label: 'Nucleus', cargo: 'mRNA & ribosome halves' },
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Amino acids & GTP' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for folding chaperones' }
        ],
        to: [
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'COPII vesicles of new protein' },
          { nodeId: 'proteasome', label: 'Proteasomes', cargo: 'Rejected misfolded chains' }
        ]
      },
      es: {
        subtitle: 'La fundición exportadora tachonada de ribosomas',
        simple: 'Sacos membranosos apilados justo a la salida del núcleo, cubiertos de ribosomas que inyectan proteínas nuevas hacia dentro para plegarlas, sellarlas con azúcar y enviarlas al Golgi.',
        story: 'En cuanto un mensaje cruza un [[poro nuclear|nuclear-pore]], desemboca directamente en las naves industriales del RE rugoso, cuyas sábanas nacen de la propia muralla nuclear externa. Miles de [[ribosomas|ribosome]] atracados consumen aminoácidos y ATP del [[citosol|cytosol]], enhebrando cintas polipeptídicas por escotillas microscópicas hacia su galería interior.\n\nAllí dentro, brigadas de chaperonas doblan cada pieza, aseguran remaches de azufre y estampan su primer árbol de azúcar: las piezas aprobadas zarpan en [[vesículas|vesicle]] luminosas rumbo al aparato de Golgi, y las defectuosas son expulsadas al [[proteasoma|proteasome]].',
        blueprint: {
          role: 'Fábrica de translocación cotraduccional, plegamiento oxidativo y N-glicosilación inicial',
          arrivesFrom: 'ARNm y mitades de [[ribosoma|ribosome]] del [[núcleo|nucleus]]; [[aminoácidos|amino-acid]], GTP y ATP de [[mitocondrias|mitochondrion]]',
          inside: 'SRP acopla [[ribosomas|ribosome]] a Sec61; BiP, PDI y glicosiltransferasas pliegan, sueldan disulfuros y auditan [[proteínas|protein]]',
          deliversTo: '[[Vesículas|vesicle]] COPII cargadas de proteínas nuevas hacia la cara cis del [[aparato de Golgi|golgi]]',
          loop: 'Vesículas COPI devuelven chaperonas escapadas desde el [[Golgi|golgi]]; la vía ERAD expulsa cadenas mal plegadas al [[proteasoma|proteasome]]'
        },
        scientific: 'Red perinuclear de cisternas laminares (~50 nm de luz, estabilizadas por CLIMP-63) tapizadas por polisomas 80S (~13 millones de ribosomas adheridos en un hepatocito). Realiza translocación cotraduccional vía SRP/Sec61, transferencia en bloque de Glc₃Man₉GlcNAc₂ sobre Asn-X-Ser/Thr, oxidación de puentes disulfuro por PDI/Ero1, control de calidad calnexina/UGGT1 y gemación COPII en sitios de salida del RE.',
        from: [
          { nodeId: 'real-nucleus', label: 'Núcleo', cargo: 'ARNm y subunidades' },
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Aminoácidos y GTP' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para chaperonas' }
        ],
        to: [
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Vesículas COPII con proteína' },
          { nodeId: 'proteasome', label: 'Proteasomas', cargo: 'Cadenas rechazadas (ERAD)' }
        ]
      }
    },
    'ribosome': {
      en: {
        subtitle: 'Ten Million Nanoscale Protein Forges',
        simple: 'Tiny two-part molecular machines scattered through the cytoplasm and across the rough ER that read RNA blueprints and stitch amino acids into every protein in the cell.',
        story: 'Every gleaming machine in this city—every pump, cable, enzyme, and motor—was welded link by link inside one of these twenty-eight-nanometer anvils. Exported from the [[nucleolus|nucleolus]] as separate 40S and [[60S|ribo-large]] halves, they clamp together the moment a fresh RNA work order arrives in the [[cytosol|cytosol]].\n\nFed by a whirlwind of tRNA couriers carrying [[amino acids|amino-acid]] and powered by energy minted in mitochondria, free ribosomes forge cytosolic and nuclear gear right on the spot, while ER-docked crews inject export proteins straight into the [[rough ER|rough-er]].',
        blueprint: {
          role: 'Universal mRNA-decoding ribozyme factory translating genetic code into [[proteins|protein]]',
          arrivesFrom: '[[40S|ribo-small]] + [[60S|ribo-large]] halves from [[nucleolus|nucleolus]], mRNA from [[nucleus|nucleus]], and charged [[tRNAs|trna]] + GTP from [[cytosol|cytosol]]',
          inside: '40S scans 3-base codons while 60S rRNA ribozyme welds ~5–20 [[amino acids|amino-acid]]/s into a [[polypeptide|polypeptide]]',
          deliversTo: 'Soluble [[proteins|protein]] to [[cytosol|cytosol]], [[nucleus|nucleus]], [[mitochondria|mitochondrion]], and [[peroxisomes|peroxisome]]; secretory/membrane chains to [[rough ER|rough-er]]',
          loop: 'At stop codons, release factors split 40S and 60S halves back into the [[cytosol|cytosol]] pool to immediately catch the next mRNA'
        },
        scientific: 'Mammalian 80S ribosome (~4.3 MDa, ~28 nm; ~5–10 million copies per proliferating cell, often arranged as helical polysomes along single mRNAs). Consumes 4 high-energy phosphate bonds (1 ATP→AMP + 2 GTP) per peptide bond with an amino-acid misincorporation rate of ~10⁻⁴; partitions dynamically between free cytosolic translation and SRP-directed Sec61 co-translational translocation on the rough ER.',
        from: [
          { nodeId: 'nucleolus', label: 'Nucleolus', cargo: '40S & 60S subunits' },
          { nodeId: 'real-nucleus', label: 'Nucleus', cargo: 'mRNA blueprints' },
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Aminoacyl-tRNAs & GTP' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Cytosol & organelles', cargo: 'Folded soluble proteins' },
          { nodeId: 'rough-er', label: 'Rough ER lumen', cargo: 'Secretory & membrane proteins' }
        ]
      },
      es: {
        subtitle: 'Diez millones de forjas proteicas a nanoescala',
        simple: 'Diminutas máquinas de dos piezas repartidas por todo el citoplasma y el retículo rugoso que leen los planos de ARN y cosen aminoácidos para fabricar todas las proteínas de la célula.',
        story: 'Cada máquina reluciente de esta metrópolis —cada bomba, cable, enzima y motor— nació soldada eslabón a eslabón en uno de estos yunques de veintiocho nanómetros. Despachados desde el [[nucléolo|nucleolus]] como mitades 40S y [[60S|ribo-large]] sueltas, se abrazan en el citosol apenas asoma un pergamino nuevo de [[ARN|rna]].\n\nAbastecidos por un torbellino de mensajeros ARNt cargados con [[aminoácidos|amino-acid]] y energía de las mitocondrias, los ribosomas libres forjan herramientas locales al instante y los atracados inyectan piezas de exportación directamente en el [[RE rugoso|rough-er]].',
        blueprint: {
          role: 'Ribozima decodificadora universal que traduce el código del ARNm en [[proteínas|protein]]',
          arrivesFrom: 'Subunidades [[40S|ribo-small]] y [[60S|ribo-large]] del [[nucléolo|nucleolus]], ARNm del [[núcleo|nucleus]], [[ARNt|trna]] cargados y GTP',
          inside: 'El cabezal 40S verifica codones y la cúpula 60S suelda ~5–20 [[aminoácidos|amino-acid]]/s en una cadena [[polipeptídica|polypeptide]]',
          deliversTo: '[[Proteínas|protein]] solubles para [[citosol|cytosol]], [[núcleo|nucleus]], [[mitocondrias|mitochondrion]] y [[peroxisomas|peroxisome]], o cadenas al [[RE rugoso|rough-er]]',
          loop: 'Al llegar al codón de parada, las dos mitades se separan y quedan libres en el [[citosol|cytosol]] para iniciar otro encargo al instante'
        },
        scientific: 'Ribosoma 80S de mamífero (~4.3 MDa, ~28 nm; ~5–10 millones de copias por célula en crecimiento, frecuentemente agrupados en polisomas sobre un mismo ARNm). Invierte 4 enlaces fosfato de alta energía (1 ATP→AMP + 2 GTP) por enlace peptídico con tasa de error ~10⁻⁴, alternando entre traducción libre citosólica y translocación cotraduccional dirigida por SRP sobre el RE rugoso.',
        from: [
          { nodeId: 'nucleolus', label: 'Nucléolo', cargo: 'Subunidades 40S y 60S' },
          { nodeId: 'real-nucleus', label: 'Núcleo', cargo: 'Planos de ARNm' },
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Aminoacil-ARNt y GTP' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citosol y orgánulos', cargo: 'Proteínas solubles' },
          { nodeId: 'rough-er', label: 'Lumen del RE rugoso', cargo: 'Proteínas de membrana/secreción' }
        ]
      }
    },
    'ser': {
      en: {
        subtitle: 'The Coral Oil Refinery & Calcium Vault',
        simple: 'A smooth, coral-like maze of membrane pipes that brews fresh membrane lipids, packs spare fat into droplets, neutralizes toxins, and fires quick pulses of calcium signals.',
        story: 'Follow the sheeted ER outward until the ribosomes vanish and the membranes twist into the coral-like pipes of the [[smooth ER|smooth-er]]. Raw fatty-acid tails and ATP arrive from the [[cytosol|cytosol]] so resident synthases can stitch fresh [[phospholipids|phospholipid]] and cholesterol to keep every membrane in the city supplied.\n\nWhen fat supplies surge, neutral oils pool inside its wall and bud off as golden [[lipid droplets|lipid-droplet]]; when toxins sneak in, P450 enzymes disarm them; and at a receptor’s command, floodgates release stored calcium ions to wake neighboring [[mitochondria|mitochondrion]] and contractile fibers.',
        blueprint: {
          role: 'Membrane-lipid refinery, neutral-fat packager, CYP450 detoxifier, and rapid Ca²⁺ signaling store',
          arrivesFrom: '[[Fatty-acid tails|fatty-acid-tail]], glycerol-3-P, acetyl-CoA, NADPH, and [[mitochondrial|mitochondrion]] ATP from [[cytosol|cytosol]]',
          inside: 'Tubular enzymes synthesize [[phospholipids|phospholipid]]/[[cholesterol|cholesterol]], detoxify drugs, and pump Ca²⁺ in via SERCA ATPases',
          deliversTo: 'New lipids to [[Golgi|golgi]]/membranes, neutral fat into budding [[lipid droplets|lipid-droplet]], and Ca²⁺ sparks to [[cytosol|cytosol]] and [[mitochondria|mitochondrion]]',
          loop: 'Cytosolic Ca²⁺ spikes are rapidly pumped right back into the tubular lumen by SERCA to reset the trigger'
        },
        scientific: 'Anastomosing 30–60 nm smooth tubular network shaped by reticulons/atlastins and coupled to mitochondria, plasma membrane, and lipid droplets via MCS tether proteins (VAP-A/B, ORP). Catalyzes de novo glycerophospholipid, ceramide, and cholesterol synthesis, cytochrome P450 monooxygenase xenobiotic hydroxylation, glucose-6-phosphatase dephosphorylation (in hepatocytes), and IP₃R/RyR-gated Ca²⁺ signaling ([Ca²⁺]ER ≈ 0.5 mM).',
        from: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Fatty acids & precursors' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for lipid synthesis & SERCA' }
        ],
        to: [
          { nodeId: 'lipid-droplet', label: 'Lipid droplets', cargo: 'Neutral triglycerides' },
          { nodeId: 'plasma-membrane', label: 'Cell membranes', cargo: 'Phospholipids & cholesterol' },
          { nodeId: 'mitochondrion', label: 'Mitochondria & cytosol', cargo: 'Signaling Ca²⁺ pulses' }
        ]
      },
      es: {
        subtitle: 'La refinería coralina de aceite y bóveda de calcio',
        simple: 'Un laberinto coralino de tuberías lisas que destila lípidos nuevos para las membranas, envasa grasa en gotas doradas, neutraliza tóxicos y dispara pulsos rápidos de calcio.',
        story: 'Si sigues las láminas del retículo hacia fuera verás desaparecer los ribosomas hasta transformarse en la tubería coralina del [[RE liso|smooth-er]]. Hasta aquí llegan colas de ácidos grasos y ATP del [[citosol|cytosol]] para cocinar los [[fosfolípidos|phospholipid]] y el colesterol que renuevan todas las murallas de la ciudad.\n\nCuando abunda el combustible, infla relucientes [[gotas lipídicas|lipid-droplet]] desde su propia pared; cuando entran fármacos o venenos, sus enzimas P450 los desarman; y ante una señal de alarma abre compuertas de calcio que avivan al instante a las [[mitocondrias|mitochondrion]] vecinas.',
        blueprint: {
          role: 'Refinería de lípidos y esteroides, envasadora de grasa neutra, detoxificadora y almacén de Ca²⁺',
          arrivesFrom: '[[Ácidos grasos|fatty-acid-tail]], acetil-CoA, NADPH y ATP de [[mitocondrias|mitochondrion]] desde el [[citosol|cytosol]]',
          inside: 'Sintasas tubulares fabrican [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]], citocromos P450 oxidan toxinas y bombas SERCA guardan Ca²⁺',
          deliversTo: 'Lípidos nuevos para membranas, triglicéridos en [[gotas lipídicas|lipid-droplet]] y pulsos de Ca²⁺ al [[citosol|cytosol]] y [[mitocondrias|mitochondrion]]',
          loop: 'Tras cada pulso de calcio, las bombas SERCA reabsorben de inmediato el Ca²⁺ al lumen para recargar el gatillo'
        },
        scientific: 'Red tubular lisa de 30–60 nm Ø moldeada por reticulonas/atlastinas y conectada mediante sitios de contacto de membrana (MCS) con mitocondrias, membrana plasmática y gotas lipídicas. Ejecuta la síntesis de glicerofosfolípidos, ceramida y colesterol, hidroxilación de xenobióticos vía citocromo P450 y almacenamiento de Ca²⁺ luminal (~0.5 mM) regulado por bombas SERCA y canales IP₃R/RyR.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Ácidos grasos y precursores' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para síntesis y SERCA' }
        ],
        to: [
          { nodeId: 'lipid-droplet', label: 'Gotas lipídicas', cargo: 'Triglicéridos neutros' },
          { nodeId: 'plasma-membrane', label: 'Membranas celulares', cargo: 'Fosfolípidos y colesterol' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias y citosol', cargo: 'Pulsos de Ca²⁺' }
        ]
      }
    },
    'golgi': {
      en: {
        subtitle: 'The Post Office & Sugar-Tagging Studio',
        simple: 'A curved stack of flattened membrane sacs parked near the cell center that puts final sugar decorations and address labels on ER proteins before shipping them out in vesicles.',
        story: 'Parked right beside the [[centrosome|centrosome]] where inward tracks converge, this curved stack of cisternae catches incoming vesicles arriving hot from the [[rough ER|rough-er]]. Each sac acts as the next station in a finishing studio: enzymes prune rough sugar starters, build lush glycocalyx antlers, and stamp mannose-6-phosphate warning stickers onto acid hydrolases.\n\nAt the outgoing trans face, clathrin-coated bubbles pinch off and hitch onto [[motor proteins|motor-protein]] waiting on [[microtubules|microtubule]]—routing digestive blades strictly to lysosomes while rushing fresh receptors and exports to the [[plasma membrane|plasma-membrane]].',
        blueprint: {
          role: 'Sequential glycosylation studio, proteolytic maturase, and central vesicular sorting hub',
          arrivesFrom: 'COPII [[vesicles|vesicle]] carrying newly folded glycoproteins and lipids from [[rough ER|rough-er]] and [[smooth ER|smooth-er]]',
          inside: 'Cis → medial → trans cisternae remodel N/O-glycans, synthesize sphingomyelin, and sort cargo at the trans-Golgi network (TGN)',
          deliversTo: 'Secretory/membrane [[vesicles|vesicle]] to [[plasma membrane|plasma-membrane]] and M6P-tagged hydrolase vesicles to [[lysosomes|lysosome]]',
          loop: 'Retrograde COPI vesicles continuously ferry escaped ER enzymes and SNAREs back from cis-Golgi to the [[rough ER|rough-er]]'
        },
        scientific: 'Pericentrosomal ribbon of 4–8 polarized cisternae (luminal pH acidified from ~6.7 cis to ~6.0 TGN by V-ATPase) operating by cisternal maturation coupled with retrograde COPI recycling. Houses >200 glycosyltransferases/glycosidases (elaborating complex sialylated N-glycans, mucin O-glycans, and GAG chains), sphingomyelin synthase, proprotein convertase furin, and GlcNAc-1-phosphotransferase for lysosomal M6P targeting.',
        from: [
          { nodeId: 'rough-er', label: 'Rough ER', cargo: 'Vesicles of nascent protein' },
          { nodeId: 'smooth-er', label: 'Smooth ER', cargo: 'Ceramide & membrane lipids' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Receptors, glycocalyx & exports' },
          { nodeId: 'lysosome', label: 'Lysosomes', cargo: 'M6P-tagged acid enzymes' },
          { nodeId: 'vesicle', label: 'Transport vesicles', cargo: 'Sorted cargo packets' }
        ]
      },
      es: {
        subtitle: 'La central de correos y taller de azucarado',
        simple: 'Una pila curvada de sacos membranosos junto al centro celular que decora con azúcares finales y etiquetas postales las proteínas del retículo antes de repartirlas en vesículas.',
        story: 'Estacionada junto al [[centrosoma|centrosome]] donde confluyen las vías férreas, esta pila curvada de cisternas recibe sin descanso las vesículas recién salidas del [[RE rugoso|rough-er]]. Piso tras piso como en un taller de alta costura, sus enzimas podan y bordan antenas para el glucocálix o estampan sellos de peligro en las cuchillas ácidas.\n\nAl llegar a la cara de salida, nuevas burbujas pellizcadas se enganchan a [[proteínas motoras|motor-protein]] sobre rieles de [[microtúbulos|microtubule]], desviando las enzimas digestivas sin error hacia los lisosomas y enviando receptores frescos y secreciones a la [[membrana plasmática|plasma-membrane]].',
        blueprint: {
          role: 'Estudio secuencial de glicosilación, maduración proteica y clasificación postal vesicular',
          arrivesFrom: '[[Vesículas|vesicle]] COPII con glicoproteínas recién plegadas del [[RE rugoso|rough-er]] y lípidos del [[RE liso|smooth-er]]',
          inside: 'Las cisternas cis → media → trans remodelan N/O-glicanos, fabrican esfingomielina y clasifican destinos en la red trans-Golgi',
          deliversTo: '[[Vesículas|vesicle]] secretoras hacia la [[membrana plasmática|plasma-membrane]] y enzimas marcadas con M6P hacia los [[lisosomas|lysosome]]',
          loop: 'Las vesículas retrógradas COPI devuelven sin pausa chaperonas y receptores escapados de vuelta al [[RE rugoso|rough-er]]'
        },
        scientific: 'Cinta pericentrosómica de 4–8 cisternas polarizadas (gradiente de pH luminal de ~6.7 en cis a ~6.0 en TGN mantenido por V-ATPasa) regida por maduración cisternal y transporte retrógrado COPI. Contiene >200 glicosiltransferasas y glicosidasas (síntesis de N-glicanos complejos sialilados, O-glicanos y glucosaminoglicanos), esfingomielina sintasa, proteasa furina y marcaje con manosa-6-fosfato.',
        from: [
          { nodeId: 'rough-er', label: 'RE rugoso', cargo: 'Vesículas de proteína nueva' },
          { nodeId: 'smooth-er', label: 'RE liso', cargo: 'Ceramida y lípidos' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Receptores, glucocálix y secreción' },
          { nodeId: 'lysosome', label: 'Lisosomas', cargo: 'Hidrolasas con etiqueta M6P' },
          { nodeId: 'vesicle', label: 'Vesículas de reparto', cargo: 'Paquetes clasificados' }
        ]
      }
    },
    'mito': {
      en: {
        subtitle: 'The Captive Furnaces Minting ATP',
        simple: 'Hundreds of double-membraned power plants burning split sugars and fats with oxygen to mint the ATP coins that keep every pump, motor, and assembly line running.',
        story: 'Every glowing assembly line in this realistic cell would freeze stone-dead in seconds if these bean- and ribbon-shaped furnaces ever went dark. Pyruvate cracked from [[glucose|glucose]] in the cytosol, shortened [[fatty-acid tails|fatty-acid-tail]] from lipid droplets and [[peroxisomes|peroxisome]], and fresh oxygen pour across their outer wall into the inner matrix.\n\nAlong deeply folded cristae pockets, the [[electron transport chain|electron-transport-chain]] burns that fuel flamelessly to pack protons behind an inner membrane dam, spinning rows of ATP synthase turbines that shoot recharged ATP right back out into the city while exhaling [[water|water]], CO₂, and life-giving warmth.',
        blueprint: {
          role: 'Primary aerobic ATP generator, TCA/β-oxidation furnace, and cellular heat source',
          arrivesFrom: 'Pyruvate from [[cytosol|cytosol]] glycolysis, [[fatty-acid tails|fatty-acid-tail]] from [[lipid droplets|lipid-droplet]]/[[peroxisomes|peroxisome]], O₂ from [[plasma membrane|plasma-membrane]], and spent ADP + [[Pi|phosphate]]',
          inside: 'Matrix TCA cycle feeds NADH/FADH₂ to cristae [[electron transport chain|electron-transport-chain]], pumping H⁺ to spin [[ATP synthase|atp-synthase]]',
          deliversTo: 'Fresh ATP exported via ANT translocases to [[cytosol|cytosol]], [[plasma membrane|plasma-membrane]] pumps, [[rough ER|rough-er]], and [[motor proteins|motor-protein]]; CO₂ out',
          loop: 'Cytosolic ATPases split ATP → ADP + Pi, which immediately shuttle back into the matrix to be re-forged into ATP (~body weight of ATP turned over daily)'
        },
        scientific: 'Dynamic chondriome network (~100–2,000 organelles/cell, ~15–22% of hepatocyte/cardiomyocyte volume). Pyruvate dehydrogenase and matrix β-oxidation/TCA cycle generate NADH + FADH₂ oxidized by respirasomes (Complexes I–IV) across the cardiolipin-rich crista membrane (Δp ≈ 180–200 mV), driving dimeric F₁F₀-ATP synthase and adenine nucleotide translocase (ANT) to export ~30 ATP per glucose oxidized.',
        from: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Pyruvate, ADP & phosphate' },
          { nodeId: 'lipid-droplet', label: 'Lipid droplets & peroxisomes', cargo: 'Fatty acids' },
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Dissolved O₂' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Whole-cell ATP pool', cargo: 'Recharged ATP & heat' },
          { nodeId: 'na-k-pump', label: 'Membrane pumps & motors', cargo: 'ATP fuel' },
          { nodeId: 'plasma-membrane', label: 'Extracellular exit', cargo: 'Waste CO₂' }
        ]
      },
      es: {
        subtitle: 'Las fraguas cautivas que acuñan ATP',
        simple: 'Cientos de centrales eléctricas de doble membrana que queman azúcares partidos y grasas con oxígeno para acuñar las monedas de ATP que mueven toda la célula.',
        story: 'Todas las cadenas de montaje iluminadas en esta célula realista caerían fulminadas en pocos segundos si estas fraguas alargadas se apagaran. Hasta su matriz llegan el piruvato partido de la [[glucosa|glucose]] en el citosol, las [[colas de ácidos grasos|fatty-acid-tail]] cedidas por gotas lipídicas y [[peroxisomas|peroxisome]], y el oxígeno recién cruzado desde el exterior.\n\nEn sus crestas internas plegadas, la [[cadena de transporte de electrones|electron-transport-chain]] convierte ese fuego sin llama en una presa de protones que hace zumbar hileras de turbinas de ATP sintasa, disparando ATP recién acuñado a todos los rincones mientras desprende [[agua|water]], CO₂ y el calor que mantiene tibia la ciudad.',
        blueprint: {
          role: 'Generador aeróbico central de ATP, horno metabólico del ciclo de Krebs y fuente de calor celular',
          arrivesFrom: 'Piruvato del [[citosol|cytosol]], [[ácidos grasos|fatty-acid-tail]] de [[gotas lipídicas|lipid-droplet]]/[[peroxisomas|peroxisome]], O₂ de la [[membrana plasmática|plasma-membrane]] y ADP + [[Pi|phosphate]]',
          inside: 'El ciclo de Krebs nutre la [[cadena respiratoria|electron-transport-chain]] en las crestas, bombeando H⁺ que giran la [[ATP sintasa|atp-synthase]]',
          deliversTo: 'ATP exportado por ANT hacia [[citosol|cytosol]], bombas de [[membrana plasmática|plasma-membrane]], [[RE rugoso|rough-er]] y [[proteínas motoras|motor-protein]]; CO₂ afuera',
          loop: 'Las máquinas celulares gastan ATP → ADP + Pi, que regresa de inmediato a la matriz para volver a prensarse miles de veces al día'
        },
        scientific: 'Red mitocondrial dinámica (~100–2,000 unidades/célula, 15–22 % del volumen en hepatocitos o cardiomiocitos). La piruvato deshidrogenasa, β-oxidación y ciclo del ácido cítrico alimentan con NADH/FADH₂ a los respirasomas I–IV en crestas ricas en cardiolipina (Δp ≈ 180–200 mV), acoplando la F₁F₀-ATP sintasa dimérica y la translocasa ANT para exportar ~30 ATP netos por glucosa oxidada.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Piruvato, ADP y fosfato' },
          { nodeId: 'lipid-droplet', label: 'Gotas lipídicas y peroxisomas', cargo: 'Ácidos grasos' },
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Oxígeno (O₂)' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Fondo común celular', cargo: 'ATP fresco y calor' },
          { nodeId: 'na-k-pump', label: 'Bombas y motores', cargo: 'Energía ATP' },
          { nodeId: 'plasma-membrane', label: 'Salida celular', cargo: 'CO₂ residual' }
        ]
      }
    },
    'lyso': {
      en: {
        subtitle: 'Acid Cauldrons Turning Scrap Into Fresh Bricks',
        simple: 'Sealed acidic stomachs that digest swallowed debris and worn-out organelles, pumping clean amino acids, sugars, and lipids back out so nothing in the city goes to waste.',
        story: 'Watch incoming endosome [[vesicles|vesicle]] from the surface and M6P-tagged enzyme packets from the Golgi apparatus converge on these glowing acid spheres. Proton pumps in the wall spend ATP from [[mitochondria|mitochondrion]] to sour the interior down to pH 4.5—waking fifty kinds of molecular scissors behind a sugar-lined shield that keeps the bag from digesting itself.\n\nSwallowed particles and retired organelles melt rapidly inside, and transporter chutes in the membrane pump fresh amino acids, [[glucose|glucose]], and [[cholesterol|cholesterol]] straight back into the cytosol so nearby [[ribosomes|ribosome]] never run out of raw material.',
        blueprint: {
          role: 'Acidic terminal recycling plant for endocytosed cargo and autophagic organelle turnover',
          arrivesFrom: 'Hydrolase vesicles from [[Golgi|golgi]], endocytic [[vesicles|vesicle]] from [[plasma membrane|plasma-membrane]], autophagosomes, and ATP from [[mitochondria|mitochondrion]]',
          inside: 'V-ATPase pumps H⁺ to pH ~4.5; ~60 cathepsins, lipases, and nucleases cleave macromolecules behind a protective LAMP coat',
          deliversTo: 'Salvaged [[amino acids|amino-acid]], monosaccharides ([[glucose|glucose]]), nucleosides, and [[cholesterol|cholesterol]] exported back to [[cytosol|cytosol]]',
          loop: 'Exported [[amino acids|amino-acid]] activate Ragulator–mTORC1 perched right on the lysosomal skin to tell the cell it is well fed and ready to build'
        },
        scientific: 'Heterogeneous acidic vacuolar compartment (0.1–1.2 µm, luminal pH 4.5–5.0 generated by multisubunit V₁V₀ H⁺-ATPase coupled with ClC-7 Cl⁻/H⁺ antiporter). Houses ~60 acid hydrolases (cathepsins B/D/L, glucocerebrosidase, acid lipase NPC1/2 cholesterol export) protected by luminal LAMP1/2 glycocalyx; serves as terminal fusion acceptor for late endosomes and LC3-marked autophagosomes.',
        from: [
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'Acid hydrolase enzymes' },
          { nodeId: 'vesicle', label: 'Endosomes & autophagosomes', cargo: 'Ingested & worn-out parts' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for V-ATPase acid pumps' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Recycled amino acids & sugars' },
          { nodeId: 'ribosome', label: 'Ribosomes', cargo: 'Salvaged amino acid bricks' }
        ]
      },
      es: {
        subtitle: 'Calderas ácidas que funden chatarra en ladrillos nuevos',
        simple: 'Estómagos ácidos sellados que digieren material tragado y piezas viejas, devolviendo aminoácidos, azúcares y grasas limpios al citoplasma para que nada se desperdicie.',
        story: 'Observa cómo las [[vesículas|vesicle]] que llegan de la superficie y los envíos de cuchillas desde el aparato de Golgi confluyen en estas esferas ácidas. Bombas en su pared queman ATP de las [[mitocondrias|mitochondrion]] hasta bajar el pH interno a 4.5, despertando cincuenta tipos de tijeras químicas tras un forro azucarado que evita que la bolsa se digiera a sí misma.\n\nResiduos tragados y orgánulos jubilados se funden en minutos, y compuertas extractoras devuelven aminoácidos, [[glucosa|glucose]] y [[colesterol|cholesterol]] impecables al citosol para que los [[ribosomas|ribosome]] tengan siempre ladrillos frescos.',
        blueprint: {
          role: 'Planta ácida terminal de reciclaje endocítico y autofágico de la célula',
          arrivesFrom: 'Hidrolasas del [[Golgi|golgi]], [[vesículas|vesicle]] endocíticas de la [[membrana plasmática|plasma-membrane]], autofagosomas y ATP de [[mitocondrias|mitochondrion]]',
          inside: 'Bombas V-ATPasa fijan pH ~4.5 activando ~60 catepsinas, lipasas y nucleasas protegidas por un escudo de proteínas LAMP',
          deliversTo: '[[Aminoácidos|amino-acid]], [[glucosa|glucose]], nucleósidos y [[colesterol|cholesterol]] recuperados de vuelta al [[citosol|cytosol]]',
          loop: 'Los [[aminoácidos|amino-acid]] recién salidos encienden el sensor mTORC1 posado sobre el propio lisosoma para dar luz verde al crecimiento celular'
        },
        scientific: 'Compartimento digestivo de membrana simple (0.1–1.2 µm Ø, pH luminal 4.5–5.0 sostenido por la H⁺-ATPasa vacuolar V₁V₀ acoplada al antiportador ClC-7). Contiene ~60 hidrolasas ácidas (catepsinas B/D/L, lipasa ácida, nucleasas y exportadores de colesterol NPC1/2) tras una barrera interna de glicoproteínas LAMP1/2; recibe endosomas tardíos y autofagosomas marcados con LC3.',
        from: [
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Enzimas hidrolasas ácidas' },
          { nodeId: 'vesicle', label: 'Endosomas y autofagosomas', cargo: 'Carga y piezas gastadas' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para bombear ácido' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Aminoácidos y azúcares limpios' },
          { nodeId: 'ribosome', label: 'Ribosomas', cargo: 'Aminoácidos reciclados' }
        ]
      }
    },
    'perox': {
      en: {
        subtitle: 'The Hazmat Sawmill for Extra-Long Fats',
        simple: 'Compact single-membrane workshops that saw extra-long fatty acids down into bite-sized logs for the mitochondria while neutralizing the corrosive peroxide sparks made along the way.',
        story: 'Whenever [[lipid droplets|lipid-droplet]] release bulky, extra-long [[fatty-acid tails|fatty-acid-tail]] that mitochondria cannot chew directly, those oversize logs dock at these compact single-membrane workshops alongside dissolved oxygen.\n\nInside, oxidase blades shear two carbons off at a time—a fierce reaction that brews toxic hydrogen peroxide bleach right in the room—until dense crystalline packs of catalase [[proteins|protein]] instantly split that peroxide into harmless [[water|water]] and oxygen, handing the trimmed medium-chain fuel logs smoothly across to neighboring [[mitochondria|mitochondrion]].',
        blueprint: {
          role: 'Oxidative pre-processing sawmill for very-long-chain fats and reactive-peroxide containment chamber',
          arrivesFrom: 'Very-long-chain [[fatty-acid tails|fatty-acid-tail]] from [[lipid droplets|lipid-droplet]], O₂ from [[plasma membrane|plasma-membrane]], and folded enzymes from [[cytosol|cytosol]]',
          inside: 'FAD-linked acyl-CoA oxidases shorten chains producing H₂O₂; catalase immediately decomposes 2 H₂O₂ → 2 [[water|water]] + O₂',
          deliversTo: 'Shortened medium-chain fatty acyls and acetyl-carnitine to [[mitochondria|mitochondrion]], plus ether-lipid plasmalogens to [[smooth ER|smooth-er]]',
          loop: 'Tethering proteins physically hold peroxisomes against [[lipid droplets|lipid-droplet]] and [[mitochondria|mitochondrion]] for direct hand-to-hand fuel relay'
        },
        scientific: 'Single-bilayer metabolic organelle (0.2–1.0 µm diameter; imports folded matrix enzymes via PEX5/PEX7 receptors). Exclusively oxidizes very-long-chain fatty acids (≥C22 via ABCD1 transporter + ACOX1) and α-oxidizes branched phytanic acid to octanoyl/acetyl-CoA exported to mitochondria; initiates ether-phospholipid (plasmalogen) synthesis while heme-catalase neutralizes H₂O₂ at ~10⁷ M⁻¹·s⁻¹.',
        from: [
          { nodeId: 'lipid-droplet', label: 'Lipid droplets', cargo: 'Very-long-chain fatty acids' },
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Dissolved O₂' },
          { nodeId: 'ribosome', label: 'Cytosolic ribosomes', cargo: 'Catalase & oxidase enzymes' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'Shortened fatty acids' },
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Harmless H₂O & ether lipids' }
        ]
      },
      es: {
        subtitle: 'El aserradero blindado para grasas extralargas',
        simple: 'Pequeños talleres de membrana simple que aserran grasas demasiado largas en troncos manejables para las mitocondrias y apagan al instante el agua oxigenada tóxica que salta al cortarlas.',
        story: 'Cuando las [[gotas lipídicas|lipid-droplet]] sueltan [[colas de ácidos grasos|fatty-acid-tail]] extralargas que no caben en los hornos mitocondriales, esos troncos gigantes entran primero en estos talleres acorazados junto con oxígeno fresco.\n\nAl recortar las cadenas de dos en dos eslabones salta agua oxigenada corrosiva dentro de la cámara, pero escuadrones ultradensos de [[proteínas|protein]] catalasa la parten al vuelo en [[agua|water]] inocua y oxígeno, entregando la leña ya cortada a medida directamente a las [[mitocondrias|mitochondrion]] vecinas.',
        blueprint: {
          role: 'Aserradero oxidativo previo de grasas muy largas y cámara de contención de peróxidos',
          arrivesFrom: '[[Ácidos grasos|fatty-acid-tail]] muy largos de [[gotas lipídicas|lipid-droplet]], O₂ de la [[membrana plasmática|plasma-membrane]] y enzimas del [[citosol|cytosol]]',
          inside: 'Las acil-CoA oxidasas acortan cadenas generando H₂O₂, que la catalasa descompone al instante en [[agua|water]] + O₂',
          deliversTo: 'Ácidos grasos acortados listos para las [[mitocondrias|mitochondrion]] y precursores de plasmalógenos hacia el [[RE liso|smooth-er]]',
          loop: 'Puentes proteicos mantienen al peroxisoma físicamente abrazado entre [[gotas lipídicas|lipid-droplet]] y [[mitocondrias|mitochondrion]] para pasar combustible sin fugas'
        },
        scientific: 'Orgánulo oxidativo de bicapa simple (0.2–1.0 µm Ø; importación postraduccional vía peroxinas PEX5/PEX7). Acorta selectivamente ácidos grasos de cadena muy larga (≥C22 mediante transportador ABCD1 y ACOX1) y ramificados hasta octanoil/acetil-CoA transferidos a la mitocondria; inicia la síntesis de plasmalógenos mientras su catalasa tetramérica descompone H₂O₂ a velocidad limitada por difusión.',
        from: [
          { nodeId: 'lipid-droplet', label: 'Gotas lipídicas', cargo: 'Ácidos grasos muy largos' },
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Oxígeno (O₂)' },
          { nodeId: 'ribosome', label: 'Ribosomas libres', cargo: 'Catalasa y oxidasas' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'Ácidos grasos acortados' },
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Agua limpia y lípidos éter' }
        ]
      }
    },
    'vesicle': {
      en: {
        subtitle: 'The Bubble Fleet & Endosome Sorting Hubs',
        simple: 'Tiny membrane bubbles constantly pinching off from the cell surface, ER, and Golgi to ferry cargo along microtubule rails—sorting reusable receptors back to the surface and trash to lysosomes.',
        story: 'Those glowing spheres zipping between organelles are the city’s armored courier fleet. At the [[plasma membrane|plasma-membrane]], clathrin cages pinch inward to swallow outside parcels into early endosomes, while deeper downtown COPII and Golgi bubbles bud off the [[rough ER|rough-er]] and Golgi apparatus.\n\nHitched to [[motor proteins|motor-protein]] striding along [[microtubules|microtubule]], endosomes act as busy transfer stations: mild acid inside loosens cargo from receptors so empty receptors loop right back to the surface for reuse, while doomed cargo rides mature bubbles straight into waiting [[lysosomes|lysosome]].',
        blueprint: {
          role: 'Membrane-sealed courier fleet and endosomal sorting relay connecting secretory and endocytic highways',
          arrivesFrom: 'Endocytic buds from [[plasma membrane|plasma-membrane]] plus secretory/hydrolase buds from [[rough ER|rough-er]] and [[Golgi|golgi]]',
          inside: 'Rab5→Rab7 endosome maturation (pH ~6.2 → 5.5) uncouples ligands from receptors and buds ESCRT intraluminal vesicles',
          deliversTo: 'Degradative cargo to [[lysosomes|lysosome]], recycled receptors to [[plasma membrane|plasma-membrane]], and secretory exports outside',
          loop: 'SNARE zippering fuses membranes on delivery while coat proteins (clathrin, COPI, COPII, retromer) immediately pinch return bubbles back'
        },
        scientific: 'Dynamic vesicular-endosomal network spanning 50–100 nm coated transport vesicles (clathrin, COPI, COPII) and 200–500 nm early/recycling/late multivesicular endosomes. Governed by Rab GTPase cascades (Rab5 early → Rab11 recycling / Rab7 late), V-ATPase luminal acidification (pH 6.3 → 5.5), retromer retrieval to TGN/PM, ESCRT-0/I/II/III ubiquitin-cargo sorting, and bidirectional kinesin/dynein transport.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Endocytosed material' },
          { nodeId: 'rough-er', label: 'Rough ER', cargo: 'Newly folded proteins' },
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'Sorted secretory & lysosomal packets' }
        ],
        to: [
          { nodeId: 'lysosome', label: 'Lysosomes', cargo: 'Cargo for digestion' },
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Recycled receptors & exports' },
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'ER-to-Golgi & retrieved proteins' }
        ]
      },
      es: {
        subtitle: 'La flota de burbujas y estaciones endosómicas',
        simple: 'Burbujas de membrana que se pellizcan sin cesar desde la superficie, el retículo y el Golgi para llevar paquetes sobre microtúbulos, devolviendo receptores limpios arriba y enviando desechos a los lisosomas.',
        story: 'Esas esferas luminosas que cruzan la célula a toda prisa son la flota blindada de reparto de la metrópolis. Arriba, en la [[membrana plasmática|plasma-membrane]], jaulas proteicas pellizcan bultos del exterior formando endosomas tempranos, mientras abajo brotan envíos frescos desde el [[RE rugoso|rough-er]] y el aparato de Golgi.\n\nRemolcados por [[proteínas motoras|motor-protein]] a lo largo de [[microtúbulos|microtubule]], los endosomas funcionan como estaciones de transbordo: un toque de acidez suelta la mercancía para que los receptores vacíos regresen intactos a la fachada y el resto del cargamento continúe directo hacia los [[lisosomas|lysosome]].',
        blueprint: {
          role: 'Flota de paquetería membranosa y estación endosómica que enlaza endocitosis y secreción',
          arrivesFrom: 'Burbujas endocíticas de la [[membrana plasmática|plasma-membrane]] y envíos biosintéticos del [[RE rugoso|rough-er]] y [[Golgi|golgi]]',
          inside: 'La maduración endosómica Rab5 → Rab7 (pH 6.2 → 5.5) separa ligandos de receptores y clasifica cargas con complejos ESCRT',
          deliversTo: 'Carga degradable hacia [[lisosomas|lysosome]], receptores reciclados y secreciones hacia la [[membrana plasmática|plasma-membrane]]',
          loop: 'Cremalleras SNARE funden cada burbuja en su destino mientras cubiertas de clatrina, COPI, COPII y retrómero tallan el viaje de vuelta'
        },
        scientific: 'Sistema dinámico de vesículas revestidas (50–100 nm: clatrina, COPI, COPII) y endosomas tempranos, de reciclaje y cuerpos multivesiculares tardíos (200–500 nm). Regulado por conversión de GTPasas Rab5→Rab7/Rab11, acidificación luminal progresiva por V-ATPasa (pH 6.3 → 5.5), recuperación por complejo retrómero, invaginación ESCRT-0–III y transporte bidireccional sobre microtúbulos.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Material endocitado' },
          { nodeId: 'rough-er', label: 'RE rugoso', cargo: 'Proteínas recién plegadas' },
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Paquetes clasificados' }
        ],
        to: [
          { nodeId: 'lysosome', label: 'Lisosomas', cargo: 'Carga para digestión' },
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Receptores reciclados y secreción' },
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Carga del RE y retorno' }
        ]
      }
    },
    'lipid': {
      en: {
        subtitle: 'Golden Monolayer Fuel Tanks',
        simple: 'Spherical droplets of pure stored fat wrapped in a single-layer phospholipid skin. They bud off the smooth ER during plenty and feed high-energy fatty acids to mitochondria and peroxisomes when needed.',
        story: 'Unlike every watery organelle wrapped in a double bilayer, these golden spheres hold pure anhydrous oil packed six times denser in energy than stored sugar. Whenever the [[smooth ER|smooth-er]] brews surplus neutral fat, oil pools inside its membrane until a finished droplet pops free wrapped in a single [[phospholipid|phospholipid]] monolayer.\n\nPerilipin guard proteins patrol that single skin until energy runs tight; on cue, lipases uncap the tank and stream medium [[fatty-acid tails|fatty-acid-tail]] directly into hungry [[mitochondria|mitochondrion]] and extra-long chains into [[peroxisomes|peroxisome]].',
        blueprint: {
          role: 'High-density neutral-lipid fuel depot and buffer preventing free-fatty-acid membrane damage',
          arrivesFrom: 'Triacylglycerols and cholesteryl esters synthesized from [[fatty-acid tails|fatty-acid-tail]] inside the [[smooth ER|smooth-er]]',
          inside: 'Anhydrous TAG/sterol-ester oil core enclosed by a single [[phospholipid|phospholipid]] leaflet and gated by perilipin [[proteins|protein]]',
          deliversTo: 'Free [[fatty-acid tails|fatty-acid-tail]] to [[mitochondria|mitochondrion]] (C14–C20) and [[peroxisomes|peroxisome]] (≥C22), plus [[cholesterol|cholesterol]] for membranes',
          loop: 'Excess cytosolic fatty acids are re-esterified by [[smooth ER|smooth-er]] DGAT enzymes right back into droplets to prevent lipotoxicity'
        },
        scientific: 'Unique monolayer-bounded organelle (0.1–5 µm diameter in non-adipocytes) nucleated at seipin-defined ER lens sites by DGAT1/2 and ACAT1/2. Hydrophobic triacylglycerol/cholesteryl-ester core (~38 kJ/g) coated by a high-packing-defect phospholipid monolayer recruiting amphipathic-helix class I/II proteins (PLIN1–5, ATGL, CGI-58, HSL) that couple cAMP/PKA lipolysis directly to mitochondrial/peroxisomal β-oxidation.',
        from: [
          { nodeId: 'smooth-er', label: 'Smooth ER', cargo: 'Synthesized neutral fats' },
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Surplus fatty acids' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'Fatty acids for ATP' },
          { nodeId: 'peroxisome', label: 'Peroxisomes', cargo: 'Very-long-chain fatty acids' }
        ]
      },
      es: {
        subtitle: 'Tanques dorados de monocapa llenos de combustible',
        simple: 'Esferas de aceite puro envueltas en una sola capa de fosfolípidos. Brotan del retículo liso en tiempos de abundancia y surten ácidos grasos de alta energía a mitocondrias y peroxisomas cuando hace falta.',
        story: 'A diferencia de los demás orgánulos acuosos de doble bicapa, estas esferas doradas guardan aceite puro sin agua, capaz de concentrar seis veces más energía en el mismo peso que las reservas de azúcar. Cuando el [[RE liso|smooth-er]] destila grasa sobrante, el aceite se acumula dentro de su pared hasta soltar un tanque envuelto en una sola capa de [[fosfolípidos|phospholipid]].\n\nGuardianes de proteína perilipina vigilan la válvula hasta que arrecia la demanda: entonces las lipasas abren paso y canalizan [[colas de ácidos grasos|fatty-acid-tail]] directas a las [[mitocondrias|mitochondrion]] y cadenas extralargas a los [[peroxisomas|peroxisome]].',
        blueprint: {
          role: 'Reserva anhidra de combustible lipídico y escudo protector frente al efecto detergente de grasas libres',
          arrivesFrom: 'Triglicéridos y ésteres de esterol fabricados con [[colas de ácidos grasos|fatty-acid-tail]] en el [[RE liso|smooth-er]]',
          inside: 'Núcleo apolar de aceite recubierto por una monocapa única de [[fosfolípidos|phospholipid]] regulada por [[proteínas|protein]] perilipinas',
          deliversTo: '[[Ácidos grasos|fatty-acid-tail]] hacia [[mitocondrias|mitochondrion]] y [[peroxisomas|peroxisome]], más [[colesterol|cholesterol]] para membranas',
          loop: 'Los ácidos grasos excedentes del [[citosol|cytosol]] vuelven a esterificarse en el [[RE liso|smooth-er]] para reingresar al depósito seguro'
        },
        scientific: 'Orgánulo delimitado por monocapa fosfolipídica simple (0.1–5 µm Ø en células no adiposas) originado en complejos seipina del RE por acción de DGAT1/2 y ACAT1/2. Su núcleo de triacilgliceroles y ésteres de colesterilo (~38 kJ/g) está regulado por perilipinas (PLIN1–5) que controlan la cascada lipolítica ATGL → HSL → MGL acoplada físicamente a mitocondrias y peroxisomas.',
        from: [
          { nodeId: 'smooth-er', label: 'RE liso', cargo: 'Grasas neutras recién hechas' },
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Ácidos grasos excedentes' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'Ácidos grasos para ATP' },
          { nodeId: 'peroxisome', label: 'Peroxisomas', cargo: 'Ácidos grasos extralargos' }
        ]
      }
    },
    'centro': {
      en: {
        subtitle: 'Grand Central Station of the Highway Grid',
        simple: 'Two perpendicular centriole barrels cushioned in protein jelly right beside the nucleus. Ring-shaped templates inside launch microtubule tracks outward across the entire cell.',
        story: 'Tucked beside the [[realistic nucleus|real-nucleus]] right next to the Golgi apparatus, twin [[centriole|centriole]] barrels sit locked at right angles inside an amber cloud of pericentriolar proteins. Ring-shaped γ-tubulin templates studded through that cloud snatch GTP-charged [[tubulin|tubulin]] bricks out of the cytosol to launch hollow [[microtubule|microtubule]] pipes in every direction.\n\nBecause every pipe’s minus end stays bolted here downtown while its plus end races toward the border, walking [[motor proteins|motor-protein]] always know inward from outward—and when division approaches, the station duplicates into two poles to pull replicated chromosomes cleanly apart.',
        blueprint: {
          role: 'Central microtubule-nucleating hub (MTOC) establishing global intracellular polarity',
          arrivesFrom: 'GTP-charged [[tubulin|tubulin]] dimers, pericentrin/γ-TuRC [[proteins|protein]], and ATP from [[cytosol|cytosol]]',
          inside: 'Orthogonal mother–daughter [[centrioles|centriole]] in PCM cloud cap minus (−) ends and nucleate radial [[microtubules|microtubule]]',
          deliversTo: 'Polarized [[microtubule|microtubule]] highways to the cell periphery, inward [[Golgi|golgi]] positioning, and basal-body template for [[primary cilium|cilium]]',
          loop: 'Depolymerizing microtubules dump GDP-[[tubulin|tubulin]] back into the [[cytosol|cytosol]], where GTP recharges it to nucleate fresh tracks from the centrosome'
        },
        scientific: 'Juxtanuclear membraneless MTOC (~1 µm diameter) centered on a mother and daughter 9-triplet microtubule centriole (~250 × 500 nm) embedded in phase-separated pericentriolar material (pericentrin, CEP192, CEP215) recruiting 14-spoke γ-tubulin ring complexes (γ-TuRC, ~2.2 MDa). Establishes uniform (−)-end-in / (+)-end-out interphase microtubule polarity and duplicates once per S phase via PLK4/STIL/SAS-6.',
        from: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'GTP-tubulin dimers' },
          { nodeId: 'ribosome', label: 'Cytosolic ribosomes', cargo: 'Centriolar & PCM proteins' }
        ],
        to: [
          { nodeId: 'microtubule', label: 'Microtubule network', cargo: 'Nucleated radial rails' },
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'Central positioning anchor' },
          { nodeId: 'cilium', label: 'Primary cilium', cargo: 'Mother-centriole basal body' }
        ]
      },
      es: {
        subtitle: 'La estación central de la red de autopistas',
        simple: 'Dos barriles perpendiculares de centriolos envueltos en una nube proteica junto al núcleo. Sus moldes en anillo lanzan autopistas de microtúbulos hacia todos los rincones de la célula.',
        story: 'Acurrucados junto al [[núcleo realista|real-nucleus]] y al costado mismo del aparato de Golgi, dos barriles de [[centriolos|centriole]] reposan en ángulo recto dentro de una nube densa de proteínas organizadoras. Moldes circulares sembrados en esa matriz atrapan dímeros de [[tubulina|tubulin]] cargados de energía en el citosol y disparan tuberías de [[microtúbulos|microtubule]] hacia toda la periferia.\n\nAl quedar todos los extremos menos amarrados aquí en el centro y los extremos más apuntando a las afueras, las [[proteínas motoras|motor-protein]] distinguen siempre el centro del borde, y al dividirse la ciudad la estación se duplica para repartir sin fallos el genoma.',
        blueprint: {
          role: 'Estación central organizadora de microtúbulos (MTOC) que define la brújula interna celular',
          arrivesFrom: 'Dímeros de [[tubulina|tubulin]]-GTP, γ-tubulina y [[proteínas|protein]] pericentriolares desde el [[citosol|cytosol]]',
          inside: 'Par ortogonal de [[centriolos|centriole]] en nube PCM que sella los extremos (−) y lanza [[microtúbulos|microtubule]] radiales',
          deliversTo: 'Autopistas de [[microtúbulos|microtubule]], anclaje central del [[Golgi|golgi]] y cuerpo basal para el [[cilio primario|cilium]]',
          loop: 'Los microtúbulos que se desmontan devuelven [[tubulina|tubulin]] al [[citosol|cytosol]], donde recarga GTP para brotar de nuevo desde el centrosoma'
        },
        scientific: 'Centro organizador yuxtanuclear sin membrana (~1 µm Ø) integrado por un centriolo madre y uno hijo de 9 tripletes (~250 × 500 nm) rodeados de matriz pericentriolar condensada (pericentrina, CEP192, CEP215) rica en anillos nucleadores γ-TuRC (~2.2 MDa). Fija la polaridad interfásica uniforme extremo (−) central / extremo (+) periférico y se duplica una sola vez por ciclo en fase S.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Dímeros de tubulina-GTP' },
          { nodeId: 'ribosome', label: 'Ribosomas libres', cargo: 'Proteínas centrosómicas' }
        ],
        to: [
          { nodeId: 'microtubule', label: 'Red de microtúbulos', cargo: 'Rieles radiales nucleados' },
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Posicionamiento central' },
          { nodeId: 'cilium', label: 'Cilio primario', cargo: 'Cuerpo basal centriolar' }
        ]
      }
    },
    'mt': {
      en: {
        subtitle: 'Self-Rebuilding Freight Railways',
        simple: 'Hollow 25-nanometer pipes radiating from the centrosome to the cell edge that endlessly grow and shrink at their tips while motor proteins haul vesicles and organelles along them.',
        story: 'Radiating outward from the [[centrosome|centrosome]] like glowing subway lines, these hollow twenty-five-nanometer pipes assemble from GTP-charged tubulin bricks pulled straight out of the [[cytosol|cytosol]]. Watch their outer tips probe the plasma membrane: as long as fresh bricks outpace the internal GTP clock the rail shoots forward, then suddenly unzips and regrows down a brand-new avenue.\n\nMeanwhile, two-legged [[motor proteins|motor-protein]] burn mitochondrial ATP to hike along every active rail—kinesins marching outward with secretory [[vesicles|vesicle]], dyneins trekking inward with endosomes for the Golgi and [[lysosomes|lysosome]].',
        blueprint: {
          role: 'Polarized long-haul transport tracks and dynamically remodeling compression struts',
          arrivesFrom: 'Minus ends anchored at [[centrosome|centrosome]]; GTP-[[tubulin|tubulin]] added at growing (+) tips in [[cytosol|cytosol]]; ATP for motors',
          inside: '13-protofilament hollow [[tubulin|tubulin]] cylinders undergo dynamic instability while guiding kinesin (+) and dynein (−) [[motor proteins|motor-protein]]',
          deliversTo: 'Directed delivery of [[vesicles|vesicle]], [[mitochondria|mitochondrion]], [[lysosomes|lysosome]], and [[peroxisomes|peroxisome]] across the cell',
          loop: 'Catastrophe peels GDP-[[tubulin|tubulin]] dimers off (+) tips back into [[cytosol|cytosol]] for GTP exchange and immediate re-polymerization'
        },
        scientific: 'Polarized 25 nm O.D. (~15 nm lumen) 13-protofilament αβ-tubulin cylinders exhibiting high flexural rigidity (persistence length ~5 mm) and GTP-cap dynamic instability (+TIP proteins EB1/CLIP-170 track growing ends). Serve as directional tracks for ~45 human kinesins (mostly + end-directed, 8.2 nm steps at ~1 µm/s) and cytoplasmic dynein-1–dynactin (− end-directed).',
        from: [
          { nodeId: 'centrosome', label: 'Centrosome', cargo: 'Minus-end nucleation' },
          { nodeId: 'tubulin', label: 'Cytosolic tubulin pool', cargo: 'GTP-tubulin dimers' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for walking motors' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Vesicles & endosomes', cargo: 'Long-range rail delivery' },
          { nodeId: 'plasma-membrane', label: 'Cell surface', cargo: 'Outward kinesin cargo' },
          { nodeId: 'lysosome', label: 'Lysosomes & Golgi', cargo: 'Inward dynein cargo' }
        ]
      },
      es: {
        subtitle: 'Vías férreas de carga que se reconstruyen solas',
        simple: 'Tubos huecos de 25 nanómetros que irradian desde el centrosoma hacia el borde celular, alargándose y acortándose por la punta mientras motores moleculares arrastran vesículas sobre su lomo.',
        story: 'Trazando grandes avenidas desde el [[centrosoma|centrosome]] hasta los barrios exteriores, estos tubos huecos de veinticinco nanómetros crecen engarzando ladrillos de tubulina con GTP tomados del [[citosol|cytosol]]. Sus puntas tantean sin descanso la membrana plasmática: avanzan veloces mientras les dura el capuchón fresco y se desarman en segundos para abrir rutas nuevas donde haga falta.\n\nPor encima del tráfico en obras, las [[proteínas motoras|motor-protein]] queman ATP de las mitocondrias zancada tras zancada: las kinesinas llevan [[vesículas|vesicle]] hacia la fachada y las dineínas traen endosomas de vuelta hacia el Golgi y los [[lisosomas|lysosome]].',
        blueprint: {
          role: 'Rieles polarizados de transporte pesado de larga distancia y puntales resistentes a compresión',
          arrivesFrom: 'Extremos (−) fijos en el [[centrosoma|centrosome]]; [[tubulina|tubulin]]-GTP del [[citosol|cytosol]] en las puntas (+); ATP para motores',
          inside: 'Cilindros huecos de 13 protofilamentos con inestabilidad dinámica recorridos por [[proteínas motoras|motor-protein]] kinesina y dineína',
          deliversTo: 'Reparto dirigido de [[vesículas|vesicle]], [[mitocondrias|mitochondrion]], [[lisosomas|lysosome]] y [[peroxisomas|peroxisome]] por toda la ciudad',
          loop: 'La despolimerización libera dímeros GDP-[[tubulina|tubulin]] al [[citosol|cytosol]], donde recargan GTP para volver a levantar rieles al instante'
        },
        scientific: 'Cilindros polares huecos de 25 nm Ø (13 protofilamentos de αβ-tubulina, longitud de persistencia ~5 mm) regidos por inestabilidad dinámica en su extremo (+) monitorizado por proteínas +TIP (EB1, CLIP-170). Sustentan el transporte procesivo bidireccional ejecutado por ~45 kinesinas humanas (hacia extremo +, pasos de 8.2 nm a ~1 µm/s) y el complejo dineína-1–dinactina (hacia extremo −).',
        from: [
          { nodeId: 'centrosome', label: 'Centrosoma', cargo: 'Anclaje y nucleación (−)' },
          { nodeId: 'tubulin', label: 'Reserva de tubulina', cargo: 'Dímeros tubulina-GTP' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para motores' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Vesículas y endosomas', cargo: 'Transporte de larga distancia' },
          { nodeId: 'plasma-membrane', label: 'Superficie celular', cargo: 'Carga anterógrada (kinesina)' },
          { nodeId: 'lysosome', label: 'Lisosomas y Golgi', cargo: 'Carga retrógrada (dineína)' }
        ]
      }
    },
    'actin': {
      en: {
        subtitle: 'The Muscular Mesh Just Under the Skin',
        simple: 'A dense, springy web of thin actin cables woven right beneath the plasma membrane. Powered by ATP and myosin motors, it shapes the cell surface, pinches off vesicles, and pulls the cell forward.',
        story: 'Directly underneath the fragile [[plasma membrane|plasma-membrane]] lies a bustling muscular mesh woven from twisted seven-nanometer actin filaments. Thousands of ATP-loaded [[G-actin|g-actin]] beads from the [[cytosol|cytosol]] click onto growing tips while myosin motor crews burn fresh mitochondrial ATP to pull neighboring cables tight.\n\nThat cortical tension gives the soft animal cell its springy shape, thrusts parallel bundles upward to brace [[microvilli|microvillus]], helps pinch endocytic [[vesicles|vesicle]] free from the border, and squeezes a dividing cell cleanly in two.',
        blueprint: {
          role: 'Sub-membrane contractile cortex controlling cell tension, surface remodeling, and endocytosis',
          arrivesFrom: 'ATP-[[G-actin|g-actin]] monomers, Arp2/3-formin nucleators, and myosin motors in [[cytosol|cytosol]]; ATP from [[mitochondria|mitochondrion]]',
          inside: 'Cross-linked 7 nm [[actin filaments|actin-filament]] treadmill and contract via non-muscle myosin II pulling against ERM/spectrin membrane tethers',
          deliversTo: 'Mechanical support to [[plasma membrane|plasma-membrane]], core bundles into [[microvilli|microvillus]], and scission force to incoming [[vesicles|vesicle]]',
          loop: 'Cofilin severs aged ADP-actin from (−) ends back into [[cytosol|cytosol]], where profilin swaps in fresh ATP for immediate reuse at (+) tips'
        },
        scientific: 'Sub-plasmalemmal actomyosin cortex (~100–500 nm thick) composed of Arp2/3-branched and formin-nucleated 7 nm F-actin microfilaments cross-linked by filamin/α-actinin/spectrin, tethered to transmembrane proteins via ERM (ezrin/radixin/moesin), and tensioned (~0.1–1 mN/m cortical tension) by bipolar non-muscle myosin II minifilaments.',
        from: [
          { nodeId: 'g-actin', label: 'Cytosolic G-actin', cargo: 'ATP-actin monomers' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'ATP for myosin & treadmilling' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Cortical tension & reshaping' },
          { nodeId: 'microvillus', label: 'Microvilli', cargo: 'Parallel core bundles' },
          { nodeId: 'vesicle', label: 'Endocytic vesicles', cargo: 'Membrane-pinching force' }
        ]
      },
      es: {
        subtitle: 'La malla muscular justo bajo la piel',
        simple: 'Un denso entramado elástico de finos cables de actina tejido inmediatamente debajo de la membrana plasmática. Con ATP y motores de miosina moldea la superficie, pellizca vesículas e impulsa el movimiento.',
        story: 'Pegada por dentro a la delicada [[membrana plasmática|plasma-membrane]] trabaja una musculatura viva tejida con cables trenzados de filamentos de actina de siete nanómetros. Miles de cuentas de [[actina G|g-actin]] del [[citosol|cytosol]] se abrochan a las puntas activas mientras motores de miosina queman ATP de las mitocondrias para tensar la red entera.\n\nEsa faja muscular da firmeza elástica a la célula sin pared, empuja haces paralelos hacia arriba para sostener las [[microvellosidades|microvillus]] y ayuda a estrangular las [[vesículas|vesicle]] que entran desde el exterior.',
        blueprint: {
          role: 'Córtex contráctil submembranoso que regula la tensión superficial, forma celular y endocitosis',
          arrivesFrom: 'Monómeros de [[actina G|g-actin]]-ATP, nucleadores Arp2/3 y miosinas del [[citosol|cytosol]], más ATP de [[mitocondrias|mitochondrion]]',
          inside: 'Malla entrecruzada de [[filamentos de actina|actin-filament]] de 7 nm traccionada por miosina II no muscular y anclada por espectrina/ERM',
          deliversTo: 'Soporte elástico a la [[membrana plasmática|plasma-membrane]], ejes para [[microvellosidades|microvillus]] y empuje para escindir [[vesículas|vesicle]]',
          loop: 'La cofilina suelta actina-ADP vieja hacia el [[citosol|cytosol]] y la profilina le recarga ATP nuevo para volver al frente en segundos'
        },
        scientific: 'Córtex submembranoso de actomiosina (100–500 nm de espesor) integrado por microfilamentos de actina F de 7 nm ramificados por Arp2/3 y elongados por forminas, entrecruzados por α-actinina, filamina y espectrina, fijados a la bicapa mediante proteínas ERM (ezrina/radixina/moesina) y tensados (~0.1–1 mN/m) por minifilamentos bipolares de miosina II.',
        from: [
          { nodeId: 'g-actin', label: 'Actina G citosólica', cargo: 'Monómeros actina-ATP' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP para miosina y recambio' }
        ],
        to: [
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Tensión y remodelado superficial' },
          { nodeId: 'microvillus', label: 'Microvellosidades', cargo: 'Haces centrales paralelos' },
          { nodeId: 'vesicle', label: 'Vesículas endocíticas', cargo: 'Fuerza de estrangulamiento' }
        ]
      }
    },
    'if': {
      en: {
        subtitle: 'Zero-Fuel Steel Suspension Cables',
        simple: 'Braided 10-nanometer protein ropes looping from the nuclear cage out to cell-to-cell rivets at the border. They burn zero energy once built and stop stretching forces from tearing the cell.',
        story: 'Winding from a protective cradle around the [[realistic nucleus|real-nucleus]] all the way out to the borders, braided ten-nanometer ropes of [[intermediate filaments|intermediate-filament]] serve as the city’s passive steel suspension cables. Built from coiled alpha-helix rods minted on cytosolic [[ribosomes|ribosome]], they snap together without needing a single ATP or GTP molecule to stay locked.\n\nBelow the apical brush border they weave into the terminal foundation supporting [[microvilli|microvillus]], while at the sides they bolt into desmosomal [[cell junctions|cell-junction]]—turning thousands of fragile cells into a single tear-proof fabric.',
        blueprint: {
          role: 'Apolar, energy-free tensile cable network absorbing mechanical stretch across cells and tissues',
          arrivesFrom: 'Keratin/vimentin coiled-coil [[proteins|protein]] synthesized by free [[ribosomes|ribosome]] in [[cytosol|cytosol]]',
          inside: 'Staggered antiparallel tetramers braid into apolar 10 nm ropes capable of stretching >250% without snapping',
          deliversTo: 'Cradles [[real-nucleus|real-nucleus]] via LINC complexes, underpins [[microvillus|microvillus]] terminal web, and anchors desmosomal [[cell junctions|cell-junction]]',
          loop: 'Kinase phosphorylation transiently loosens filaments during mitosis so the network splits cleanly and re-braids in both daughter cells'
        },
        scientific: 'Apolar 10 nm cytoplasmic keratin/vimentin cable network (plus nuclear lamin meshwork) assembled nucleotide-independently from coiled-coil α-helical rod domains (~310 aa heptad repeats). Exhibits nonlinear strain-stiffening viscoelasticity absorbing large tensile deformations up to ~2.5–3× rest length, mechanically coupling the nuclear envelope (via nesprin-3/plectin) to desmosomal desmoplakin plaques and hemidesmosomes.',
        from: [
          { nodeId: 'ribosome', label: 'Cytosolic ribosomes', cargo: 'Keratin & vimentin subunits' },
          { nodeId: 'alpha-helix', label: 'Coiled-coil rods', cargo: 'Braided α-helical dimers' }
        ],
        to: [
          { nodeId: 'real-nucleus', label: 'Nucleus', cargo: 'Mechanical suspension cradle' },
          { nodeId: 'cell-junction', label: 'Desmosome junctions', cargo: 'Tissue-wide tension sharing' },
          { nodeId: 'microvillus', label: 'Terminal web', cargo: 'Apical root foundation' }
        ]
      },
      es: {
        subtitle: 'Cables colgantes de acero que no gastan combustible',
        simple: 'Cuerdas proteicas trenzadas de 10 nanómetros tendidas desde el núcleo hasta los remaches de la fachada. Una vez montadas no consumen energía y evitan que los tirones desgarren la célula.',
        story: 'Tendidas desde una cuna protectora alrededor del [[núcleo realista|real-nucleus]] hasta los confines de la fachada, estas maromas trenzadas de diez nanómetros de [[filamentos intermedios|intermediate-filament]] son los cables de acero pasivos de la ciudad. Sus varillas en hélice α, salidas de los [[ribosomas|ribosome]] libres, encajan tan firme que no gastan ni un solo ATP en sostener la carga.\n\nArriba tejen el cimiento donde enraízan las [[microvellosidades|microvillus]], y en los muros laterales se remachan a las [[uniones celulares|cell-junction]] para fundir miles de células blandas en un tejido imposible de rasgar.',
        blueprint: {
          role: 'Red apolar de cables de tracción sin gasto energético que reparte esfuerzos mecánicos',
          arrivesFrom: 'Monómeros fibrosos de queratina y vimentina ([[proteínas|protein]]) traducidos por [[ribosomas|ribosome]] del [[citosol|cytosol]]',
          inside: 'Tetrámeros antiparalelos escalonados forman cuerdas de 10 nm capaces de estirarse >250 % endureciéndose sin romperse',
          deliversTo: 'Amortigua al [[núcleo|real-nucleus]], sostiene el velo basal de las [[microvellosidades|microvillus]] y remacha [[uniones celulares|cell-junction]]',
          loop: 'Al dividirse la célula, quinasas fosforilan temporalmente las cuerdas para soltarlas y volver a trenzarlas en cada célula hija'
        },
        scientific: 'Red citoplasmática apolar de 10 nm Ø de queratinas/vimentina ensamblada sin hidrólisis de nucleótidos a partir de dominios centrales en superhélice (~310 residuos). Presenta viscoelasticidad con endurecimiento por deformación hasta ~2.5–3× su longitud inicial, enlazando mecánicamente la envoltura nuclear (vía plectina/nesprina-3) con placas de desmoplaquina en desmosomas y hemidesmosomas.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas libres', cargo: 'Subunidades de queratina/vimentina' },
          { nodeId: 'alpha-helix', label: 'Barras en superhélice', cargo: 'Dímeros trenzados α' }
        ],
        to: [
          { nodeId: 'real-nucleus', label: 'Núcleo', cargo: 'Cuna de suspensión mecánica' },
          { nodeId: 'cell-junction', label: 'Desmosomas', cargo: 'Reparto de tensión tisular' },
          { nodeId: 'microvillus', label: 'Velo terminal', cargo: 'Cimiento bajo el borde apical' }
        ]
      }
    },
    'cilium': {
      en: {
        subtitle: 'The Solitary Rooftop Radio Spire',
        simple: 'A single antenna-like tower rising from a docked centriole at the top of the cell, packed with specialized receptors that sense chemical signals and fluid flow outside.',
        story: 'Rising prominently from the apical roof of this cutaway stands a solitary lookout tower anchored on a veteran [[centriole|centriole]] docked right beneath the [[plasma membrane|plasma-membrane]]. Nine paired microtubule rails form its internal mast, walled off at the base by a strict gatekeeper ring that bars ordinary cytoplasmic traffic.\n\nBecause no ribosomes fit up inside the spire, miniature freight trains pulled by [[motor proteins|motor-protein]] ferry [[GPCRs|gpcr]] and developmental sensors up and down the shaft nonstop—sending news of outside fluid flow and neighborhood morphogens straight down to the [[realistic nucleus|real-nucleus]].',
        blueprint: {
          role: 'Compartmentalized apical sensory antenna concentrating extracellular signaling receptors',
          arrivesFrom: 'Basal-body mother [[centriole|centriole]], [[tubulin|tubulin]], and [[GPCRs|gpcr]]/receptors hauled up by kinesin-2 [[motor proteins|motor-protein]]',
          inside: '9+0 doublet [[microtubule|microtubule]] axoneme gated by transition-zone Y-links concentrates Hedgehog, Wnt, and mechanosensory channels',
          deliversTo: 'Activated Gli transcription factors, Ca²⁺ currents, and cyclic-nucleotide signals back down to [[cytosol|cytosol]] and [[real-nucleus|real-nucleus]]',
          loop: 'Kinesin-2 IFT-B trains haul cargo to the tip while dynein-2 IFT-A trains return receptors and turnover parts back to the cell body'
        },
        scientific: 'Solitary non-motile apical organelle (~250 nm diameter × 2–10 µm length) templated by the mother centriole basal body and partitioned from the bulk plasma membrane by transition fibers and septin/Y-link diffusion barriers. Concentrates Smoothened/Patched1 (Hedgehog pathway), PDGFRα, somatostatin/serotonin GPCRs, and PKD1/PKD2 mechanosensitive Ca²⁺ channels serviced by bidirectional intraflagellar transport (IFT) trains.',
        from: [
          { nodeId: 'centriole', label: 'Mother centriole', cargo: 'Basal-body anchor' },
          { nodeId: 'golgi', label: 'Golgi vesicles', cargo: 'Ciliary GPCRs & channels' },
          { nodeId: 'motor-protein', label: 'IFT motor trains', cargo: 'Tubulin & receptor delivery' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Ca²⁺ & cAMP second messengers' },
          { nodeId: 'real-nucleus', label: 'Nucleus', cargo: 'Hedgehog/Gli gene switches' }
        ]
      },
      es: {
        subtitle: 'La antena solitaria de la azotea',
        simple: 'Una torre sensorial única que se alza sobre un centriolo anclado en el techo de la célula, repleta de receptores que detectan señales químicas y corrientes externas.',
        story: 'Coronando el techo de esta célula en corte se yergue una atalaya solitaria cimentada sobre un [[centriolo|centriole]] veterano atracado bajo la [[membrana plasmática|plasma-membrane]]. Nueve pares de microtúbulos forman su mástil interior, custodiado en la base por una aduana que cierra el paso al tráfico común.\n\nComo ningún ribosoma cabe allá arriba, pequeños trenes de carga movidos por [[proteínas motoras|motor-protein]] suben y bajan receptores [[GPCR|gpcr]] y sensores mecánicos sin descanso, enviando partes meteorológicos directos al [[núcleo realista|real-nucleus]] sobre cada corriente o señal vecina.',
        blueprint: {
          role: 'Antena sensorial apical aislada que concentra receptores químicos y mecánicos',
          arrivesFrom: '[[Centriolo|centriole]] madre basal, [[tubulina|tubulin]] y receptores [[GPCR|gpcr]] subidos por trenes de [[proteínas motoras|motor-protein]]',
          inside: 'Axonema 9+0 de dobletes de [[microtúbulos|microtubule]] tras una zona de transición que concentra sensores Hedgehog y canales de Ca²⁺',
          deliversTo: 'Factores transcripcionales activados, pulsos de Ca²⁺ y señales AMPc hacia el [[citosol|cytosol]] y el [[núcleo|real-nucleus]]',
          loop: 'Trenes IFT-B con kinesina-2 suben piezas hasta la punta y trenes IFT-A con dineína-2 bajan receptores usados de vuelta a la base'
        },
        scientific: 'Orgánulo sensorial apical único e inmóvil (~250 nm Ø × 2–10 µm de largo) nucleado sobre el cuerpo basal del centriolo madre y aislado difusionalmente por fibras de transición y enlaces en Y. Concentra componentes de la vía Hedgehog (Patched1, Smoothened, Gli), PDGFRα, GPCR ciliares y mecanosensores policistina PKD1/PKD2 mantenidos mediante transporte intraflagelar (IFT) bidireccional.',
        from: [
          { nodeId: 'centriole', label: 'Centriolo madre', cargo: 'Cuerpo basal de anclaje' },
          { nodeId: 'golgi', label: 'Vesículas del Golgi', cargo: 'Receptores GPCR y canales' },
          { nodeId: 'motor-protein', label: 'Trenes motores IFT', cargo: 'Subida de piezas y tubulina' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Segundos mensajeros Ca²⁺ y AMPc' },
          { nodeId: 'real-nucleus', label: 'Núcleo', cargo: 'Interruptores génicos Gli' }
        ]
      }
    },
    'villi': {
      en: {
        subtitle: 'The Absorptive Brush-Border Fingers',
        simple: 'Rows of finger-like folds along the top edge braced by tight bundles of actin rods. By multiplying surface area, they pack vastly more nutrient gates along the cell’s roof.',
        story: 'Flanking the roof on either side of the cilium rise tight rows of finger-like folds—[[microvilli|microvillus]] wrapping the apical plasma membrane around stiff cores of twenty to thirty parallel [[actin filaments|actin-filament]]. Cross-linked by villin clips and tethered laterally by myosin-1a [[proteins|protein]], these fingers stay upright in fast fluid currents while rooting into intermediate filaments below.\n\nPleating the roof this way multiplies space for sugar and amino-acid transporters twenty-fold, pouring a steady harvest of [[glucose|glucose]] and building blocks straight down into the [[cytosol|cytosol]].',
        blueprint: {
          role: 'Actin-cored apical membrane folds multiplying surface area for nutrient import and brush-border digestion',
          arrivesFrom: 'Parallel [[actin filaments|actin-filament]] from [[cytosol|cytosol]] plus transporter-rich apical [[plasma membrane|plasma-membrane]] from [[Golgi|golgi]]',
          inside: '20–30 (+) tip-up F-actin cables bundled by villin/fimbrin/espin and tethered to membrane nutrient symporters by Myo1a',
          deliversTo: 'High-flux import of [[glucose|glucose]], [[amino acids|amino-acid]], water, and ions into [[cytosol|cytosol]]; mechanical rooting into [[intermediate filaments|intermediate-filament]]',
          loop: 'Myo1a motors slide upward along the actin core to shed tiny extracellular vesicles from tips while fresh transporters arrive at the base'
        },
        scientific: 'Apical brush-border protrusions (~100 nm diameter × 1–2 µm tall) supported by paracrystalline bundles of 20–30 parallel F-actin filaments (barbed ends capped in the dense tip complex, cross-linked by villin, fimbrin/plastin-1, and espin, membrane-tethered by Myo1a, and anchored basally in the spectrin–myosin II–keratin terminal web), increasing absorptive transporter capacity ~20–30×.',
        from: [
          { nodeId: 'actin-filament', label: 'Actin cortex', cargo: 'Parallel F-actin core rods' },
          { nodeId: 'golgi', label: 'Golgi apparatus', cargo: 'Apical nutrient transporters' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Cytosol', cargo: 'Absorbed glucose & amino acids' },
          { nodeId: 'intermediate-filament', label: 'Terminal web', cargo: 'Mechanical root anchor' }
        ]
      },
      es: {
        subtitle: 'Los dedos absorbentes del borde en cepillo',
        simple: 'Filas de pliegues en forma de dedo en el borde superior sostenidos por haces rígidos de actina. Multiplican el área disponible para instalar muchas más compuertas de nutrientes.',
        story: 'A ambos lados de la azotea se alzan hileras tupidas de [[microvellosidades|microvillus]] que enfundan la membrana plasmática superior sobre manojos firmes de treinta [[filamentos de actina|actin-filament]] paralelos. Sujetos por grapas proteicas y brazos laterales de [[proteína|protein]] miosina, los dedos resisten firmes la corriente mientras hunden sus raíces en la red de filamentos intermedios.\n\nAl plegar así el techo se multiplica veinte veces el espacio para colocar transportadores, vertiendo un caudal continuo de [[glucosa|glucose]] y ladrillos frescos directamente al [[citosol|cytosol]].',
        blueprint: {
          role: 'Pliegues apicales con eje de actina que multiplican la superficie de absorción de nutrientes',
          arrivesFrom: 'Haces de [[filamentos de actina|actin-filament]] del [[citosol|cytosol]] y membrana apical rica en transportadores desde el [[Golgi|golgi]]',
          inside: '20–30 cables paralelos de actina F (extremos + arriba) unidos por villina/fimbrina y conectados a la membrana por miosina-1a',
          deliversTo: 'Entrada masiva de [[glucosa|glucose]], [[aminoácidos|amino-acid]] y agua al [[citosol|cytosol]]; anclaje basal en [[filamentos intermedios|intermediate-filament]]',
          loop: 'Los transportadores apicales se renuevan continuamente desde la base mientras las puntas liberan microvesículas hacia el lumen'
        },
        scientific: 'Proyecciones cilíndricas apicales (~100 nm Ø × 1–2 µm de altura) sostenidas por haces paracristalinos de 20–30 filamentos paralelos de actina F empaquetados por villina, fimbrina y espina, unidos lateralmente a la bicapa mediante miosina-1a y enraizados en el velo terminal de espectrina y filamentos intermedios de queratina, elevando ~20–30× la densidad de cotransportadores.',
        from: [
          { nodeId: 'actin-filament', label: 'Córtex de actina', cargo: 'Haces paralelos de actina F' },
          { nodeId: 'golgi', label: 'Aparato de Golgi', cargo: 'Transportadores apicales' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citosol', cargo: 'Glucosa y aminoácidos absorbidos' },
          { nodeId: 'intermediate-filament', label: 'Velo terminal', cargo: 'Anclaje mecánico basal' }
        ]
      }
    },
    'cytosol': {
      en: {
        subtitle: 'The Crowded Glycolytic Marketplace',
        simple: 'The dense crowd of enzymes, chaperones, and proteasomes filling every gap between organelles. Here incoming glucose gets cracked into pyruvate for the mitochondria and damaged proteins get shredded.',
        story: 'Every pixel between the organelles teems with soluble [[proteins|protein]] swimming in water so crowded they bump neighbors millions of times a second. The instant [[glucose|glucose]] steps across the plasma membrane, a ten-enzyme relay team in this open plaza cracks the six-carbon ring into two pyruvates—pocketing two quick ATPs before shipping those pyruvates straight into the [[mitochondria|mitochondrion]].\n\nSharing the exact same streets, aminoacyl synthetases load amino acids onto couriers for [[ribosomes|ribosome]], chaperones rescue heat-stressed folds, and barrel-shaped proteasomes swallow [[ubiquitin|ubiquitin]]-tagged junk to keep the city’s traffic flowing.',
        blueprint: {
          role: 'Macromolecularly crowded reaction hub running glycolysis, monomer charging, and [[proteasome|proteasome]] quality control',
          arrivesFrom: '[[Glucose|glucose]] and [[amino acids|amino-acid]] from [[plasma membrane|plasma-membrane]]/[[lysosomes|lysosome]], plus ATP from [[mitochondria|mitochondrion]]',
          inside: '10 glycolytic enzymes split [[glucose|glucose]] → 2 pyruvate + 2 net ATP + 2 NADH; synthetases charge [[tRNAs|trna]]; [[proteasomes|proteasome]] shred tagged waste',
          deliversTo: 'Pyruvate and NADH equivalents to [[mitochondria|mitochondrion]], charged precursors to [[ribosomes|ribosome]]/[[nucleus|nucleus]], and lipids to [[smooth ER|smooth-er]]',
          loop: '[[Proteasomes|proteasome]] chop worn-out cytosolic [[proteins|protein]] back into free [[amino acids|amino-acid]] that immediately feed neighboring [[ribosomes|ribosome]]'
        },
        scientific: 'Crowded intracellular aqueous phase (~200–300 mg/mL protein, macromolecular volume fraction Φ ≈ 0.25–0.30, pH 7.2, 140 mM K⁺ / 10 mM Na⁺ / ~0.8 mM free Mg²⁺). Houses the 10-step Embden–Meyerhof–Parnas glycolytic pathway (hexokinase, PFK-1 pacemaker, pyruvate kinase), pentose phosphate pathway (NADPH + ribose-5-P), fatty acid synthase, Hsp70/Hsp90/CCT chaperones, and the ubiquitin–26S proteasome system.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Plasma membrane', cargo: 'Imported glucose & amino acids' },
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'Exported ATP' },
          { nodeId: 'lysosome', label: 'Lysosomes', cargo: 'Recycled monomers' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitochondria', cargo: 'Pyruvate & NADH fuel' },
          { nodeId: 'ribosome', label: 'Ribosomes', cargo: 'Charged tRNAs & amino acids' },
          { nodeId: 'proteasome', label: 'Proteasomes', cargo: 'Ubiquitin-tagged proteins' }
        ]
      },
      es: {
        subtitle: 'El abarrotado mercado glucolítico',
        simple: 'La multitud compacta de enzimas, chaperonas y proteasomas que llena cada hueco entre los orgánulos. Aquí se parte la glucosa rumbo a las mitocondrias y se reciclan proteínas averiadas.',
        story: 'Cada rincón libre entre los orgánulos hierve de [[proteínas|protein]] solubles nadando en agua tan apretadas que se rozan millones de veces por segundo. Nada más cruzar la [[glucosa|glucose]] por la membrana plasmática, diez enzimas encadenadas en esta plaza abierta parten su anillo de seis carbonos en dos piruvatos, cobrando dos monedas rápidas de ATP antes de enviar esas brasas a las [[mitocondrias|mitochondrion]].\n\nEn esas mismas callejuelas se cargan aminoácidos para abastecer a los [[ribosomas|ribosome]], las chaperonas enderezan piezas dobladas y los barriles del proteasoma engullen chatarra marcada con [[ubiquitina|ubiquitin]] para que el tráfico jamás se colapse.',
        blueprint: {
          role: 'Plaza metabólica hacinada que ejecuta la glucólisis, carga de precursores y limpieza por [[proteasomas|proteasome]]',
          arrivesFrom: '[[Glucosa|glucose]] y [[aminoácidos|amino-acid]] de la [[membrana plasmática|plasma-membrane]] y [[lisosomas|lysosome]], más ATP de [[mitocondrias|mitochondrion]]',
          inside: '10 enzimas glucolíticas parten [[glucosa|glucose]] → 2 piruvato + 2 ATP + 2 NADH; sintetasas cargan [[ARNt|trna]]; [[proteasomas|proteasome]] degradan fallos',
          deliversTo: 'Piruvato y NADH a [[mitocondrias|mitochondrion]], ladrillos activados a [[ribosomas|ribosome]] y [[núcleo|nucleus]], y precursores al [[RE liso|smooth-er]]',
          loop: 'Los [[proteasomas|proteasome]] reducen [[proteínas|protein]] gastadas a [[aminoácidos|amino-acid]] sueltos que vuelven al instante a los [[ribosomas|ribosome]] vecinos'
        },
        scientific: 'Fase acuosa citosólica macromolecularmente hacinada (~200–300 mg/mL de proteína soluble, fracción volumétrica Φ ≈ 0.25–0.30, pH 7.2, 140 mM K⁺ / 10 mM Na⁺ / ~0.8 mM Mg²⁺ libre). Alberga las 10 reacciones de la vía glucolítica de Embden–Meyerhof–Parnas (regulada por hexoquinasa, PFK-1 y piruvato quinasa), vía de las pentosas fosfato, ácido graso sintasa, chaperonas Hsp70/Hsp90/CCT y el sistema ubiquitina–proteasoma 26S.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Membrana plasmática', cargo: 'Glucosa y aminoácidos' },
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'ATP exportado' },
          { nodeId: 'lysosome', label: 'Lisosomas', cargo: 'Monómeros reciclados' }
        ],
        to: [
          { nodeId: 'mitochondrion', label: 'Mitocondrias', cargo: 'Piruvato y poder reductor' },
          { nodeId: 'ribosome', label: 'Ribosomas', cargo: 'ARNt cargados y aminoácidos' },
          { nodeId: 'proteasome', label: 'Proteasomas', cargo: 'Proteínas marcadas' }
        ]
      }
    }
  }
};
