import type { NodeLensMap, PagePartLensMap } from './types.js';

export const ANIMAL_NODE_LENSES: NodeLensMap = {
  'cell': {
    en: {
      simple: 'Picture an animal cell like the bustling courier metropolis of Cells at Work! wrapped in a soap-bubble forcefield. Inside its warm jelly, specialized districts guard DNA code, mint energy coins, 3D-print protein gear, and recycle scrap nonstop.',
      story: 'Every second, physics tries to melt you into lukewarm soup, and every second this Cells at Work! metropolis fights back. Deliveries of [[glucose|glucose]], oxygen, and amino acids clear the oily [[plasma membrane|plasma-membrane]] border into a rush-hour cytosol where millions of molecules bump shoulders every millisecond.\n\nTo keep chaos from blowing up the city, membrane walls quarantine each trade into its own district. Locked inside the [[nucleus|nucleus]] vault, master DNA scrolls stay safe while courier copies sprint out to [[ribosome|ribosome]] 3D-printers; Iron Man-style mitochondrial reactors mint fresh ATP coins; and WALL-E [[lysosomes|lysosome]] melt broken gears into clean spare parts.',
      blueprint: 'Role: Self-maintaining eukaryotic unit of animal tissues · From: Extracellular blood/interstitial fluid ([[glucose|glucose]], O₂, [[amino acids|amino-acid]], signals) · Inside: Compartmentalized organelles in [[cytosol|cytosol]] convert fuel into ATP and genetic code into [[proteins|protein]] · To: Exported [[vesicle|vesicle]] cargo, mechanical force via [[cell junctions|cell-junction]], and waste CO₂/H₂O',
      scientific: 'Eukaryotic heterotrophic cell, 10–30 µm diameter (~1–4 pL volume), ~70% H₂O and ~20–30% macromolecules by mass (~200–300 mg/mL total protein). Compartmentalized by endomembrane bilayers into nucleus (diploid genome, ~6.4 Gbp in humans), mitochondria, ER, Golgi, lysosomes, and peroxisomes; lacks a cell wall, relying on cortical actomyosin, intermediate filaments, and intercellular junctions for mechanical integrity.'
    },
    es: {
      simple: 'Imagina la célula animal como la frenética metrópolis de Cells at Work! envuelta en un escudo aceitoso. Dentro de su jalea tibia, distritos especializados custodian el ADN, acuñan monedas de energía, imprimen máquinas proteicas y reciclan chatarra sin parar.',
      story: 'Cada segundo el universo intenta disolverte en un caldo tibio, y cada segundo esta metrópolis al estilo Cells at Work! se niega a caer. Repartos de [[glucosa|glucose]], oxígeno y aminoácidos cruzan la aduana aceitosa de la [[membrana plasmática|plasma-membrane]] hacia un citosol en plena hora punta.\n\nPara evitar el caos, la ciudad divide sus oficios peligrosos en barrios amurallados llamados orgánulos. En la bóveda del [[núcleo|nucleus]], los pergaminos maestros de ADN quedan a salvo mientras copias de ARN corren hacia las impresoras de los [[ribosomas|ribosome]]; reactores mitocondriales acuñan monedas de ATP; y [[lisosomas|lysosome]] dignos de WALL-E funden piezas rotas para devolver ladrillos limpios.',
      blueprint: 'Rol: Unidad eucariota autorregulada de los tejidos animales · De: Fluido extracelular ([[glucosa|glucose]], O₂, [[aminoácidos|amino-acid]], señales) · Dentro: Orgánulos compartimentados en el [[citosol|cytosol]] transforman nutrientes en ATP e información genética en [[proteínas|protein]] · Hacia: Carga secretada en [[vesículas|vesicle]], tracción en [[uniones celulares|cell-junction]] y desechos CO₂/H₂O',
      scientific: 'Célula eucariota heterótrofa de 10–30 µm de diámetro (~1–4 pL de volumen), compuesta por ~70 % H₂O y ~20–30 % macromoléculas en masa (~200–300 mg/mL de proteína). Compartimentada mediante bicapas endomembranosas en núcleo (genoma diploide, ~6.4 Gpb en humanos), mitocondrias, RE, Golgi, lisosomas y peroxisomas; carece de pared celular y sostiene su tensión mecánica mediante el córtex de actomiosina, filamentos intermedios y complejos de unión.'
    }
  },
  'plasma-membrane': {
    en: {
      simple: 'The plasma membrane is a soap-bubble-thin Star Wars deflector shield made of oil and smart protein bouncers. It heals tiny tears automatically while checking passports on every nutrient, drop of water, and message.',
      story: 'A city made of water floating in water needs an oily Evangelion-grade barrier, or its citizens simply wash away. Fresh [[phospholipids|phospholipid]] and cholesterol arrive in Pokéball-like [[vesicles|vesicle]] from the Golgi, snapping into a self-sealing double skin barely eight nanometers thick.\n\nAcross this sloshing two-dimensional sea, tireless [[sodium–potassium pumps|na-k-pump]] burn mitochondrial ATP to keep the shield electrically armed, VIP [[channel proteins|channel-protein]] wave water through single-file, and GPCR spy dishes eavesdrop on passing hormones. Nothing enters the [[cytosol|cytosol]] without clearing this living border.',
      blueprint: 'Role: Selective barrier, electrochemical capacitor, and signaling interface · From: Lipids and membrane proteins delivered by [[Golgi|golgi]] [[vesicles|vesicle]], plus extracellular solutes · Inside: Asymmetric [[phospholipid|phospholipid]] bilayer buffered by [[cholesterol|cholesterol]] hosts [[ion pumps|na-k-pump]], [[channels|channel-protein]], and [[GPCRs|gpcr]] · To: Regulated import to [[cytosol|cytosol]], signal cascades, and exocytic export',
      scientific: 'Asymmetric glycerophospholipid/sphingolipid bilayer, 7–10 nm thick (~4–5 nm hydrophobic core), ~50% protein by mass (~1 protein per 50–100 lipids) and ~30–40 mol% cholesterol. Outer leaflet enriched in phosphatidylcholine, sphingomyelin, and glycolipids; cytosolic leaflet enriched in phosphatidylserine (net negative charge) and phosphoinositides. Maintains resting potential (Vm ≈ −70 mV) with specific capacitance ~1 µF/cm².'
    },
    es: {
      simple: 'La membrana plasmática es un escudo deflector digno de Star Wars, hecho de aceite finísimo y porteros proteicos inteligentes. Sella rasguños al instante mientras revisa el pasaporte de cada nutriente, gota de agua y mensaje.',
      story: 'Una ciudad hecha de agua en medio del agua necesita una muralla de aceite digna de Wakanda, o sus habitantes se diluirían al instante. Nuevos [[fosfolípidos|phospholipid]] y colesterol llegan en [[vesículas|vesicle]] desde el Golgi y encajan solos en una doble lámina que cicatriza cualquier brecha en microsegundos.\n\nEn este mar bidimensional siempre inquieto, las [[bombas de sodio–potasio|na-k-pump]] queman ATP mitocondrial para electrificar el perímetro, las [[acuaporinas|channel-protein]] dejan pasar agua en fila india VIP y las antenas GPCR espían rumores hormonales. Todo lo que alimenta al [[citosol|cytosol]] rinde cuentas primero ante este escudo vivo.',
      blueprint: 'Rol: Barrera selectiva, condensador electroquímico e interfaz sensorial · De: Lípidos y proteínas traídos en [[vesículas|vesicle]] del [[Golgi|golgi]], más solutos extracelulares · Dentro: Bicapa asimétrica de [[fosfolípidos|phospholipid]] estabilizada por [[colesterol|cholesterol]] con [[bombas iónicas|na-k-pump]], [[canales|channel-protein]] y [[GPCR|gpcr]] · Hacia: Nutrientes y señales al [[citosol|cytosol]], y secreción al exterior',
      scientific: 'Bicapa asimétrica de glicerofosfolípidos y esfingolípidos de 7–10 nm de espesor (~4–5 nm de núcleo hidrofóbico), ~50 % proteína en masa y ~30–40 % molar de colesterol. Valva externa rica en fosfatidilcolina, esfingomielina y glicolípidos; valva citosólica rica en fosfatidilserina (carga neta negativa) y fosfoinosítidos. Mantiene un potencial de reposo Vm ≈ −70 mV con capacitancia específica de ~1 µF/cm².'
    }
  },
  'phospholipid': {
    en: {
      simple: 'A phospholipid has a split personality worthy of Batman’s Two-Face: a water-loving head atop two grease-loving tails. Toss millions into water and they auto-snap tail-to-tail like Transformers into a leakproof membrane.',
      story: 'Brewed on the outer face of the [[smooth ER|smooth-er]], every phospholipid has drama wired right into its skeleton. Its charged [[phosphocholine head|head-group]] craves cytoplasm water, while its twin [[fatty-acid tails|fatty-acid-tail]] panic around moisture and huddle together in an oily hug—spontaneously raising every [[vesicle|vesicle]] pod and the outer [[plasma membrane|plasma-membrane]] without spending a single coin of ATP.',
      blueprint: 'Role: Self-assembling amphipathic brick of biological membranes · From: Synthesized in [[smooth ER|smooth-er]] from glycerol-3-phosphate, [[fatty-acid tails|fatty-acid-tail]], and [[head groups|head-group]] · Inside: Hydrophobic effect drives spontaneous tail-to-tail bilayer assembly · To: Builds [[plasma membrane|plasma-membrane]], [[vesicles|vesicle]], and organelle envelopes',
      scientific: 'Amphipathic glycerophospholipid (~760 Da for POPC, ~2.5 nm length, ~0.65 nm² cross-sectional area). Sn-1 and sn-2 positions of glycerol esterified to C16–C20 acyl chains; sn-3 esterified to a polar phosphate-linked headgroup (choline, ethanolamine, serine, or inositol). Lateral diffusion coefficient D ≈ 1–5 µm²/s at 37 °C; uncatalyzed transbilayer flip-flop t₁/₂ spans hours to days (accelerated by flippases/scramblases).'
    },
    es: {
      simple: 'Un fosfolípido tiene doble cara como Dos Caras en Batman: una cabeza que ama el agua y dos colas aceitosas que la detestan. Suelta millones en agua y se ensamblan solos cola con cola, como Transformers, formando una membrana estanca.',
      story: 'Destilado en los tubos del [[RE liso|smooth-er]], cada fosfolípido lleva el drama escrito en su esqueleto. Su [[cabeza polar|head-group]] cargada busca el abrazo del agua celular, mientras sus dos [[colas de ácidos grasos|fatty-acid-tail]] huyen de la humedad y se refugian juntas en un núcleo aceitoso, levantando por sí solas cada [[vesícula|vesicle]] y la [[membrana plasmática|plasma-membrane]] sin gastar ni un ATP.',
      blueprint: 'Rol: Ladrillo anfipático autoensamblable de todas las membranas · De: Sintetizado en el [[RE liso|smooth-er]] con glicerol-3-fosfato, [[colas acilo|fatty-acid-tail]] y [[cabeza polar|head-group]] · Dentro: El efecto hidrofóbico agrupa las colas frente a frente formando una bicapa estable · Hacia: Estructura la [[membrana plasmática|plasma-membrane]], [[vesículas|vesicle]] y orgánulos',
      scientific: 'Glicerofosfolípido anfipático (~760 Da para POPC, ~2.5 nm de longitud, ~0.65 nm² de área transversal). Carbonos sn-1 y sn-2 del glicerol esterificados a cadenas acilo C16–C20; sn-3 unido a un grupo fosfato polar (colina, etanolamina, serina o inositol). Difusión lateral D ≈ 1–5 µm²/s a 37 °C; inversión transbicapa espontánea (flip-flop) con t₁/₂ de horas a días, regulada por flipasas y escramblasas.'
    }
  },
  'head-group': {
    en: {
      simple: 'The head group is the sparkly, electrically charged helmet of a membrane lipid that loves touching water. Millions of them form the wet inner and outer surfaces of every cell membrane.',
      story: 'Built from dietary choline, a negative [[phosphate|phosphate]], and a glycerol hinge, this compact tip wears both a positive [[nitrogen|atom-n]] crown and a negative oxygen belt like Magneto’s dual-pole helmet. That twin sparkle locks nearby [[water|water]] into a slick bumper cushion and gives [[peripheral proteins|peripheral-protein]] a magnetic dock under the [[plasma membrane|plasma-membrane]].',
      blueprint: 'Role: Hydrophilic solvent interface and protein-docking surface of a [[phospholipid|phospholipid]] · From: Choline, [[phosphate|phosphate]], and glycerol precursors in [[smooth ER|smooth-er]] · Inside: Zwitterionic charge pairs hydrogen-bond and coordinate [[water|water]] · To: Faces [[cytosol|cytosol]] or extracellular fluid; recruits [[peripheral proteins|peripheral-protein]]',
      scientific: 'Phosphocholine moiety (~0.8 nm axial thickness, MW ~184 Da fragment): quaternary trimethylammonium group [−N⁺(CH₃)₃] paired with anionic phosphodiester (−PO₄⁻−), yielding net neutral zwitterion at physiological pH 7.4. Binds 10–12 tightly ordered hydration shell H₂O molecules per headgroup, creating a strong short-range hydration repulsion barrier against uncontrolled membrane fusion.'
    },
    es: {
      simple: 'La cabeza polar es el casco con carga eléctrica de cada lípido de membrana al que le encanta tocar el agua. Millones de ellas forman las caras húmedas interna y externa de todas las membranas.',
      story: 'Armada con colina de la dieta, un [[fosfato|phosphate]] negativo y una bisagra de glicerol, esta punta luce a la vez corona positiva de [[nitrógeno|atom-n]] y cinturón negativo de oxígeno, como un imán doble digno de Magneto. Ese brillo atrapa un colchón protector de [[agua|water]] sobre el [[fosfolípido|phospholipid]] y ofrece un muelle magnético donde atracan las [[proteínas periféricas|peripheral-protein]].',
      blueprint: 'Rol: Interfaz hidrofílica y plataforma de anclaje de un [[fosfolípido|phospholipid]] · De: Precursores de colina, [[fosfato|phosphate]] y glicerol en el [[RE liso|smooth-er]] · Dentro: Par zwitteriónico coordina capas de hidratación de [[agua|water]] · Hacia: Mira hacia el [[citosol|cytosol]] o el exterior y fija [[proteínas periféricas|peripheral-protein]]',
      scientific: 'Grupo fosfocolina (~0.8 nm de espesor axial): amonio cuaternario [−N⁺(CH₃)₃] acoplado a un fosfodiéster aniónico (−PO₄⁻−), formando un zwitterión eléctricamente neutro a pH 7.4. Coordina entre 10 y 12 moléculas de H₂O en su primera esfera de hidratación, generando una barrera repulsiva de corto alcance que impide la fusión espontánea e inespecífica de bicapas.'
    }
  },
  'fatty-acid-tail': {
    en: {
      simple: 'Fatty-acid tails are twin greasy carbon legs dangling under each membrane lipid—one straight, one bent in a permanent karate kick. That elbow stops lipids from packing solid like Han Solo in carbonite.',
      story: 'Linked from [[carbon|atom-c]] and hydrogen in the [[cytosol|cytosol]] and tailored in the smooth ER, one tail hangs straight while its partner kicks sideways at a permanent cis double bond. That karate-chop elbow shoves neighboring [[phospholipids|phospholipid]] apart so the [[plasma membrane|plasma-membrane]] stays supple instead of freezing into candle wax—and when energy runs low, twin tails from fat tanks burn inside [[mitochondria|mitochondrion]].',
      blueprint: 'Role: Hydrophobic barrier core and high-density metabolic fuel · From: Acetyl-CoA polymerization in [[cytosol|cytosol]] and desaturation in [[smooth ER|smooth-er]] · Inside: Saturated C16/C18 chain plus cis-unsaturated bent chain prevent crystalline packing · To: Seals [[phospholipid|phospholipid]] bilayers or oxidizes in [[mitochondria|mitochondrion]]/[[peroxisomes|peroxisome]]',
      scientific: 'Acyl hydrocarbon chains (~1.8 nm extended length), typically sn-1 palmitoyl (16:0, saturated all-trans) and sn-2 oleoyl (18:1 Δ⁹-cis, ~30° kink). Van der Waals dispersion and hydrophobic exclusion exclude ions (permeability P_Na⁺ ≈ 10⁻¹⁴ cm/s) while cis-unsaturation lowers the gel-to-liquid-crystalline phase transition temperature (Tm ≈ −2 °C for POPC vs +41 °C for DPPC).'
    },
    es: {
      simple: 'Las colas de ácidos grasos son dos patas aceitosas de carbono bajo cada lípido: una recta y otra doblada en patada de karate. Ese codo impide que la membrana quede congelada y rígida como Han Solo en carbonita.',
      story: 'Tejidas con [[carbono|atom-c]] e hidrógeno en el [[citosol|cytosol]] y retocadas en el RE liso, una pata cae recta mientras su gemela lanza una patada lateral gracias a un doble enlace cis. Ese codazo separa a los [[fosfolípidos|phospholipid]] vecinos para que la [[membrana plasmática|plasma-membrane]] nunca se endurezca como cera fría, y cuando falta energía, colas similares marchan a las [[mitocondrias|mitochondrion]] como leña de alto octanaje.',
      blueprint: 'Rol: Núcleo hidrofóbico aislante y reserva energética densa · De: Síntesis desde acetil-CoA en [[citosol|cytosol]] y desaturación en [[RE liso|smooth-er]] · Dentro: Cadena saturada recta más cadena cis-insaturada acodada evitan la cristalización · Hacia: Sella bicapas de [[fosfolípidos|phospholipid]] o alimenta β-oxidación en [[mitocondrias|mitochondrion]] y [[peroxisomas|peroxisome]]',
      scientific: 'Cadenas acilo hidrocarbonadas (~1.8 nm de longitud), típicamente palmitoil en sn-1 (16:0, todo-trans) y oleoil en sn-2 (18:1 Δ⁹-cis, ángulo de ~30°). El núcleo apolar bloquea el paso libre de iones (P_Na⁺ ≈ 10⁻¹⁴ cm/s), mientras la insaturación cis reduce la temperatura de transición de fase gel a cristal líquido (Tm ≈ −2 °C en POPC frente a +41 °C en DPPC).'
    }
  },
  'cholesterol': {
    en: {
      simple: 'Cholesterol is a flat, rigid four-ring wedge tucked between wobbly membrane lipids like Jenga stabilizer blocks. It keeps the cell skin from melting runny in heat or freezing stiff like Arendelle in the cold.',
      story: 'Forged through nearly thirty steps in the [[smooth ER|smooth-er]] or unpacked from incoming [[vesicles|vesicle]], this stiff four-ring tile slips right beside wavy [[fatty-acid tails|fatty-acid-tail]] in the [[plasma membrane|plasma-membrane]]. Like a Goldilocks bodyguard, its flat rings calm thrashing lipids when warm, pry them apart when cold, and corral [[GPCRs|gpcr]] onto floating VIP rafts.',
      blueprint: 'Role: Bidirectional fluidity buffer and lipid-raft organizer · From: De novo mevalonate pathway in [[smooth ER|smooth-er]] or LDL receptor [[vesicle|vesicle]] uptake · Inside: Planar tetracyclic steroid ring restrains upper [[fatty-acid tails|fatty-acid-tail]] while spacing lower tips · To: Stabilizes [[plasma membrane|plasma-membrane]], [[lipid droplets|lipid-droplet]] (as esters), and steroid synthesis',
      scientific: 'Sterol lipid C₂₇H₄₆O (386.65 Da, ~1.9 nm length): planar cyclopentanoperhydrophenanthrene four-ring core, C3 β-hydroxyl polar anchor, and C17 isooctyl tail. Comprises 30–45 mol% of animal plasma membranes vs ~5 mol% in ER; induces the liquid-ordered (Lo) phase, increasing bilayer thickness by ~0.4 nm, decreasing passive water/proton permeability, and nucleating sphingolipid microdomains.'
    },
    es: {
      simple: 'El colesterol es una pieza plana y rígida de cuatro anillos encajada como un bloque de Jenga entre los lípidos blandos. Evita que la membrana se derrita con el calor o se congele como Arendelle en Frozen con el frío.',
      story: 'Forjado tras casi treinta pasos en el [[RE liso|smooth-er]] o traído en [[vesículas|vesicle]], este azulejo rígido de cuatro anillos se desliza entre las [[colas de ácidos grasos|fatty-acid-tail]] de la [[membrana plasmática|plasma-membrane]]. Como guardaespaldas térmico perfecto, frena el alboroto lipídico si sube el calor, evita el congelamiento si arrecia el frío y reúne receptores [[GPCR|gpcr]] en balsas VIP.',
      blueprint: 'Rol: Amortiguador térmico de fluidez y organizador de balsas lipídicas · De: Vía del mevalonato en [[RE liso|smooth-er]] o endocitosis por [[vesículas|vesicle]] · Dentro: Anillo esteroideo tetracíclico ordena las [[colas acilo|fatty-acid-tail]] superiores e impide su colapso cristalino · Hacia: Estabiliza la [[membrana plasmática|plasma-membrane]] y se almacena esterificado en [[gotas lipídicas|lipid-droplet]]',
      scientific: 'Esterol C₂₇H₄₆O (386.65 Da, ~1.9 nm de largo): núcleo plano de ciclopentanoperhidrofenantreno, grupo β-hidroxilo polar en C3 y cadena isooctilo en C17. Representa el 30–45 % molar de la membrana plasmática animal (~5 % en el RE); induce la fase líquido-ordenada (Lo), engrosa la bicapa ~0.4 nm, reduce la permeabilidad pasiva al agua y organiza microdominios de esfingolípidos.'
    }
  },
  'channel-protein': {
    en: {
      simple: 'An aquaporin channel is a VIP theme-park express chute for water punched straight through the oily membrane. Billions of water molecules zip single-file every second while ions and protons get bounced at the velvet rope.',
      story: 'Built on the [[rough ER|rough-er]] and installed in the [[plasma membrane|plasma-membrane]], six tilted [[alpha-helices|alpha-helix]] frame an hourglass slide wide enough for just one [[water|water]] molecule at a time. Halfway down, twin asparagine bouncers flip each rider midair like an Inception hallway spin—snapping the proton wire so the [[cytosol|cytosol]] drinks fast without short-circuiting the city’s power grid.',
      blueprint: 'Role: High-throughput, proton-excluding selective water pore · From: Translated at [[rough ER|rough-er]], matured in [[Golgi|golgi]], inserted into [[plasma membrane|plasma-membrane]] · Inside: Six transmembrane [[alpha-helices|alpha-helix]] + NPA constriction filter pass single-file [[water|water]] · To: Rapidly equilibrates osmotic volume of [[cytosol|cytosol]]',
      scientific: 'Homotetrameric integral membrane protein (monomer ~28 kDa, ~6 nm tetramer width; human AQP1 PDB 1FQY), each subunit forming an independent ~2.8 Å diameter hourglass pore from 6 transmembrane α-helices and 2 half-helices bearing conserved Asn-Pro-Ala (NPA) motifs and an ar/R selectivity filter. Conducts ~3 × 10⁹ H₂O molecules·subunit⁻¹·s⁻¹ dynamically driven by osmotic gradients while completely blocking H₃O⁺ Grotthuss hopping.'
    },
    es: {
      simple: 'Una acuaporina es un tobogán exprés VIP exclusivo para el agua que atraviesa la piel aceitosa de la célula. Miles de millones de moléculas cruzan en fila india por segundo mientras los iones rebotan en la entrada.',
      story: 'Fabricada en el [[RE rugoso|rough-er]] e instalada en la [[membrana plasmática|plasma-membrane]], seis [[hélices α|alpha-helix]] rodean un reloj de arena donde solo cabe una molécula de [[agua|water]] a la vez. A mitad del tobogán, dos porteros de asparagina obligan a cada pasajera a dar un giro digno de Inception, cortando el cable de protones colados para hidratar el [[citosol|cytosol]] sin fundir los plomos eléctricos.',
      blueprint: 'Rol: Poro selectivo de agua de ultra-alto flujo y bloqueo de protones · De: Sintetizada en [[RE rugoso|rough-er]], procesada en [[Golgi|golgi]] e insertada en [[membrana plasmática|plasma-membrane]] · Dentro: Seis [[hélices α|alpha-helix]] y el filtro NPA conducen [[agua|water]] en fila india · Hacia: Equilibra al instante el volumen osmótico del [[citosol|cytosol]]',
      scientific: 'Proteína integral homotetramérica (monómero ~28 kDa, ancho tetramérico ~6 nm; AQP1 humana PDB 1FQY), donde cada subunidad forma un poro independiente de ~2.8 Å de diámetro mínimo con 6 hélices α transmembrana y 2 semihélices con motivos conservados Asn-Pro-Ala (NPA) y filtro ar/R. Transporta ~3 × 10⁹ moléculas de H₂O·subunidad⁻¹·s⁻¹ por ósmosis pasiva, impidiendo la conducción protónica tipo Grotthuss.'
    }
  },
  'peripheral-protein': {
    en: {
      simple: 'A peripheral protein clings to one wet face of a membrane like Spider-Man perched on glass without crashing through. It bolts indoor scaffolding to the outer wall or unclips to sprint urgent alerts downtown.',
      story: 'Folded by free [[ribosomes|ribosome]] in the [[cytosol|cytosol]], this agile worker never dives into the greasy membrane core; it grips charged lipid heads like Mission: Impossible suction gloves. One second it rivets [[actin filaments|actin-filament]] under the [[plasma membrane|plasma-membrane]] for armor, and at the flash of a hormone signal it unclips to race a memo straight to the [[nucleus|nucleus]].',
      blueprint: 'Role: Reversible membrane-surface scaffold anchor and signal relay · From: Synthesized by cytosolic [[ribosomes|ribosome]] from [[amino acids|amino-acid]] · Inside: Electrostatic patches, PH/C2 domains, or lipid anchors grip [[head groups|head-group]] · To: Tethers [[actin filaments|actin-filament]] to [[plasma membrane|plasma-membrane]] or relays signals into [[cytosol|cytosol]]',
      scientific: 'Water-soluble globular polypeptide (typically 20–100 kDa, 3–6 nm) associating non-covalently with membrane surfaces (Kd ≈ 10⁻⁹–10⁻⁵ M) via cationic patches binding anionic phosphatidylserine/PIP₂ headgroups (e.g., PH, C2, FERM domains) or covalently via prenyl, myristoyl, or palmitoyl tethers. Dissociable by high ionic strength (0.5–1 M NaCl) or pH shift without disrupting the phospholipid bilayer.'
    },
    es: {
      simple: 'Una proteína periférica se pega a una cara húmeda de la membrana como Spider-Man en un cristal, sin perforar el aceite central. Sujeta el andamiaje interno al muro o se suelta para llevar alertas urgentes.',
      story: 'Plegada por [[ribosomas|ribosome]] libres en el [[citosol|cytosol]], esta agente jamás se mancha en el centro graso: se adhiere con guantes magnéticos dignos de Misión: Imposible a la orilla interna. Un segundo remacha [[filamentos de actina|actin-filament]] bajo la [[membrana plasmática|plasma-membrane]], y al saltar una alarma hormonal se desengancha y corre con el parte directo al [[núcleo|nucleus]].',
      blueprint: 'Rol: Anclaje mecánico reversible y relevo de señales en la cara de la membrana · De: Traducida por [[ribosomas|ribosome]] libres a partir de [[aminoácidos|amino-acid]] · Dentro: Dominios electrostáticos o anclas lipídicas se fijan a [[cabezas polares|head-group]] · Hacia: Une [[filamentos de actina|actin-filament]] a la [[membrana plasmática|plasma-membrane]] o propaga cascadas en el [[citosol|cytosol]]',
      scientific: 'Polipéptido globular hidrosoluble (20–100 kDa, 3–6 nm) unido de forma reversible a una cara de la bicapa (Kd ≈ 10⁻⁹–10⁻⁵ M) mediante dominios catiónicos afines a fosfatidilserina o PIP₂ (dominios PH, C2, FERM) o anclajes covalentes miristoilo/palmitoilo/prenilo. Se libera con fuerza iónica elevada (0.5–1 M NaCl) o cambios de pH sin disgregar la bicapa lipídica.'
    }
  },
  'glycocalyx': {
    en: {
      simple: 'The glycocalyx is a shimmering forest of sugar antlers outside the cell—part Mario Kart star-cushion, part hologram ID badge telling white-blood-cell commandos, "Friendly citizen, hold your fire!"',
      story: 'Inside the [[Golgi apparatus|golgi]], sugar-smiths weld branching antlers of [[glucose|glucose]] and sialic acid onto proteins before [[vesicles|vesicle]] unfurl them across the outer [[plasma membrane|plasma-membrane]]. This glossy canopy traps a slick pillow of [[water|water]] for smooth blood-vessel cruising while flashing ABO passport badges—convincing Cells at Work! killer T-cells not to blow the city sky-high.',
      blueprint: 'Role: Extracellular identity coat, hydration shield, and mechanosensor · From: Oligosaccharides assembled on glycoproteins/glycolipids in [[rough ER|rough-er]] and [[Golgi|golgi]] · Inside: Branched [[glucose|glucose]]-family sugar trees carry negative sialic acid charges and bind [[water|water]] · To: Presents self-ID antigens on [[plasma membrane|plasma-membrane]] and cushions shear stress',
      scientific: 'Extracellular carbohydrate pericellular matrix, 10–100 nm thick (up to ~500 nm on vascular endothelium), composed of N- and O-linked glycoproteins, glycosphingolipids, and transmembrane proteoglycans (syndecans, glypicans bearing heparan/chondroitin sulfate GAGs). Terminal N-acetylneuraminic (sialic) acids impart dense negative surface charge (zeta potential), mediating selectin rolling, ABO/MHC recognition, and endothelial shear-stress transduction.'
    },
    es: {
      simple: 'El glucocálix es un bosque brillante de antenas de azúcar en la fachada celular: mitad colchón resbaladizo de Mario Kart, mitad pasaporte holográfico que grita a las patrullas inmunes «¡Soy aliado, no disparen!».',
      story: 'En los talleres del [[aparato de Golgi|golgi]], maestros artesanos sueldan cornamentas de [[glucosa|glucose]] y ácido siálico antes de que las [[vesículas|vesicle]] las desplieguen sobre la [[membrana plasmática|plasma-membrane]]. Este dosel retiene un cojín resbaladizo de [[agua|water]] contra roces y muestra tus insignias ABO a plena vista, evitando que los implacables linfocitos de Cells at Work! reduzcan la ciudad a cenizas.',
      blueprint: 'Rol: Cubierta de identidad celular, escudo hidratado y mecanosensor · De: Oligosacáridos ensamblados sobre lípidos y proteínas en [[RE rugoso|rough-er]] y [[Golgi|golgi]] · Dentro: Cadenas ramificadas de azúcares tipo [[glucosa|glucose]] retienen [[agua|water]] y carga negativa · Hacia: Expone antígenos propios en la [[membrana plasmática|plasma-membrane]] y protege frente a fricción',
      scientific: 'Matriz pericelular glucídica externa de 10–100 nm de espesor (hasta ~500 nm en endotelio vascular), integrada por N- y O-glicoproteínas, glicoesfingolípidos y proteoglicanos con glucosaminoglicanos (heparán y condroitín sulfato). Los residuos terminales de ácido siálico (N-acetilneuramínico) confieren una densa carga negativa superficial que regula repulsión electrostática, adhesión por selectinas, antígenos ABO y mecanotransducción endotelial.'
    }
  },
  'glucose': {
    en: {
      simple: 'Glucose is a six-carbon Senzu Bean forged from sunlight—a pocket-sized ring of pure energy. Cells crack it in half for fast cash ATP or string spare rings into external sugar ID badges.',
      story: 'Cooked from sunbeams in green leaves like a Dragon Ball Z Senzu Bean, this six-[[carbon|atom-c]] ring slips through GLUT gates in the [[plasma membrane|plasma-membrane]] and instantly gets slapped with a phosphate ankle-monitor so it cannot sneak back out. Ten cytosol sprinters karate-chop the ring into twin pyruvates for quick ATP change before feeding those embers to [[mitochondria|mitochondrion]]—or shipping rings to the [[Golgi|golgi]] to weave the [[glycocalyx|glycocalyx]].',
      blueprint: 'Role: Primary glycolytic fuel and structural carbohydrate monomer · From: Extracellular bloodstream import across [[plasma membrane|plasma-membrane]] via GLUT transporters · Inside: C₆H₁₂O₆ pyranose ring phosphorylated by hexokinase in [[cytosol|cytosol]] · To: Pyruvate/NADH for [[mitochondria|mitochondrion]], ribose-5-P for [[nucleotides|nucleotide]], or [[glycocalyx|glycocalyx]] glycans',
      scientific: 'D-Glucopyranose, C₆H₁₂O₆ (180.16 Da, ~0.9 nm chair ring; ~36:64 α:β anomeric equilibrium in aqueous solution). Imported via facilitative GLUT1–4 uniporters (Km ≈ 1–5 mM) or Na⁺-coupled SGLT1/2 symporters, then phosphorylated to glucose-6-phosphate. Complete aerobic oxidation (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, ΔG°′ = −2,870 kJ/mol) yields ~30–32 ATP per molecule.'
    },
    es: {
      simple: 'La glucosa es la semilla del ermitaño de Dragon Ball Z a escala molecular: un anillo hexagonal de energía solar concentrada. La célula la parte para cobrar ATP rápido o la teje en sus antenas exteriores.',
      story: 'Forjada con sol en hojas verdes como una semilla del ermitaño, esta joya de seis [[carbonos|atom-c]] cruza las puertas de la [[membrana plasmática|plasma-membrane]] y recibe al instante una tobillera de fosfato que impide su fuga. Diez enzimas veloces la parten en dos piruvatos cobrando ATP de bolsillo antes de lanzar esas brasas al reactor de las [[mitocondrias|mitochondrion]], o enviar anillos al [[Golgi|golgi]] para bordar el [[glucocálix|glycocalyx]].',
      blueprint: 'Rol: Combustible primario de la glucólisis y monómero estructural glucídico · De: Sangre/fluido intersticial a través de la [[membrana plasmática|plasma-membrane]] (GLUT) · Dentro: Anillo piranósico C₆H₁₂O₆ fosforilado por hexoquinasa en el [[citosol|cytosol]] · Hacia: Piruvato para [[mitocondrias|mitochondrion]], ribosa para [[nucleótidos|nucleotide]] o cadenas del [[glucocálix|glycocalyx]]',
      scientific: 'D-Glucopiranosa, C₆H₁₂O₆ (180.16 Da, anillo silla ~0.9 nm; equilibrio anomérico ~36:64 α:β en agua). Ingresa vía transportadores facilitativos GLUT1–4 (Km ≈ 1–5 mM) o cotransportadores Na⁺/glucosa SGLT1/2 y es retenida como glucosa-6-fosfato. Su oxidación aeróbica completa (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, ΔG°′ = −2,870 kJ/mol) rinde ~30–32 moléculas de ATP.'
    }
  },
  'cytoskeleton': {
    en: {
      simple: 'Think of the cytoskeleton as Attack on Titan grapple cables, Spider-Man webs, and Tron monorails rolled into one self-rebuilding rig. Three fiber crews hold the squishy cell’s shape, haul freight, and let it crawl.',
      story: 'With zero rigid armor outside, one poke would pop the [[plasma membrane|plasma-membrane]] without a living rig of girders, webs, and muscles inside. Powered by ATP and GTP from [[mitochondria|mitochondrion]], protein bricks tear down old roads and snap new bridges together in seconds whenever the city pivots.\n\nThree crews split the stunt work: hollow monorails launch from the [[centrosome|centrosome]] for walking porters, actin grapple-fibers flex right under the skin, and zero-fuel [[intermediate filaments|intermediate-filament]] sling the nucleus to [[cell junctions|cell-junction]] like Spider-Man holding a split ferry together.',
      blueprint: 'Role: Dynamic mechanical scaffold, intracellular transport grid, and force generator · From: Monomeric subunits synthesized on [[ribosomes|ribosome]] plus ATP/GTP from [[mitochondria|mitochondrion]] · Inside: Co-operates 25 nm [[microtubules|microtubule]], 7 nm [[actin filaments|actin-filament]], and 10 nm [[intermediate filaments|intermediate-filament]] · To: Positions organelles, guides [[motor-protein|motor-protein]] [[vesicles|vesicle]], braces [[plasma membrane|plasma-membrane]] and [[cell junctions|cell-junction]]',
      scientific: 'Tripartite filamentous polymer network spanning the eukaryotic cytoplasm: (1) microtubules (25 nm O.D., αβ-tubulin, GTP-driven dynamic instability, flexural persistence length Lp ≈ 5 mm), (2) F-actin microfilaments (7 nm, G-actin, ATP-driven treadmilling, Lp ≈ 15 µm), and (3) intermediate filaments (10 nm, apolar coiled-coil tetramers, non-nucleotide-hydrolyzing, Lp ≈ 1 µm, strain-stiffening up to ~300% elongation).'
    },
    es: {
      simple: 'El citoesqueleto combina cables de Attack on Titan, redes de Spider-Man y monorraíles de Tron en un solo armazón autorreparable. Tres gremios de fibras sostienen la forma celular, llevan carga y permiten avanzar.',
      story: 'Sin muralla rígida exterior, un simple roce reventaría la [[membrana plasmática|plasma-membrane]] si no existiera un entramado vivo de vigas, cuerdas y músculos dentro. Cebados con ATP y GTP de las [[mitocondrias|mitochondrion]], sus ladrillos demuelen rutas viejas y tienden puentes nuevos en segundos.\n\nTres escuadrones hacen la magia: monorraíles huecos parten del [[centrosoma|centrosome]] para los porteadores, fibras de actina empujan bajo la piel, y [[filamentos intermedios|intermediate-filament]] sujetan el núcleo a las [[uniones celulares|cell-junction]] como Spider-Man frenando un tren con sus redes.',
      blueprint: 'Rol: Andamiaje mecánico dinámico, red ferroviaria interna y generador de fuerza · De: Subunidades traducidas en [[ribosomas|ribosome]] y ATP/GTP de [[mitocondrias|mitochondrion]] · Dentro: Coordina [[microtúbulos|microtubule]] (25 nm), [[filamentos de actina|actin-filament]] (7 nm) y [[filamentos intermedios|intermediate-filament]] (10 nm) · Hacia: Posiciona orgánulos, guía [[vesículas|vesicle]] con [[proteínas motoras|motor-protein]] y refuerza [[uniones celulares|cell-junction]]',
      scientific: 'Red polimérica tripartita citoplasmática: (1) microtúbulos (25 nm Ø externo, dímeros αβ-tubulina, inestabilidad dinámica dependiente de GTP, longitud de persistencia Lp ≈ 5 mm), (2) microfilamentos de actina F (7 nm, actina G + ATP, recambio polarizado, Lp ≈ 15 µm) y (3) filamentos intermedios (10 nm, tetrámeros apolares en superhélice, Lp ≈ 1 µm, extensibles hasta ~300 % con endurecimiento por deformación).'
    }
  },
  'microtubule': {
    en: {
      simple: 'Microtubules are stiff, hollow Tron monorail pipes that lay track ahead and self-destruct behind like Gromit’s toy train. Walking motors hike along them with cargo, and at mitosis they grapple chromosomes apart.',
      story: 'Bolted at their minus ends in the [[centrosome|centrosome]], thirteen columns of [[tubulin|tubulin]] spiral into a hollow twenty-five-nanometer highway. Like Gromit laying rails mid-chase in Wallace & Gromit, the tip shoots outward while capped with fresh GTP, then peels apart like a cartoon banana skin the instant GTP runs dry—rerouting traffic while [[motor proteins|motor-protein]] haul [[vesicles|vesicle]] and [[mitochondria|mitochondrion]] down the lanes.',
      blueprint: 'Role: Polarized intracellular railway and mitotic spindle girder · From: Nucleated at γ-TuRC rings in [[centrosome|centrosome]] from GTP-[[tubulin|tubulin]] dimers · Inside: 13 protofilaments form a hollow cylinder undergoing GTP-cap growth and GDP catastrophe · To: Guides kinesin/dynein [[motor proteins|motor-protein]] carrying [[vesicles|vesicle]], positions [[Golgi|golgi]], and segregates [[chromosomes|chromosome]]',
      scientific: 'Hollow polar cylinder (25 nm outer diameter, ~15 nm lumen) assembled from 13 parallel protofilaments of head-to-tail αβ-tubulin heterodimers in a B-lattice with a 3-monomer seam. Minus end capped at centrosomal γ-tubulin ring complexes (γ-TuRC); plus end exhibits dynamic instability (polymerization ~10–20 µm/min, catastrophe upon β-tubulin GTP hydrolysis to GDP, rapid depolymerization ~30–50 µm/min).'
    },
    es: {
      simple: 'Los microtúbulos son monorraíles huecos al estilo Tron que tienden vía por delante y se desmontan detrás como el tren de Wallace y Gromit. Por ellos caminan motores con carga y en la mitosis reparten los cromosomas.',
      story: 'Ancladas en el [[centrosoma|centrosome]], trece columnas de [[tubulina|tubulin]] levantan en espiral una autopista hueca de veinticinco nanómetros. Igual que Gromit poniendo rieles en plena persecución, la punta avanza a toda máquina mientras conserva su gorra de GTP y se pela como cáscara de plátano apenas se agota, rediseñando las rutas mientras [[proteínas motoras|motor-protein]] remolcan [[vesículas|vesicle]] y [[mitocondrias|mitochondrion]].',
      blueprint: 'Rol: Vía férrea intracelular polarizada y viga del huso mitótico · De: Nucleado en anillos γ-TuRC del [[centrosoma|centrosome]] con dímeros de [[tubulina|tubulin]]-GTP · Dentro: Cilindro hueco de 13 protofilamentos con crecimiento por capuchón GTP y catástrofe GDP · Hacia: Dirige [[proteínas motoras|motor-protein]] con [[vesículas|vesicle]], ordena el [[Golgi|golgi]] y separa [[cromosomas|chromosome]]',
      scientific: 'Cilindro polar hueco (25 nm Ø externo, ~15 nm de lumen) compuesto por 13 protofilamentos paralelos de heterodímeros αβ-tubulina en red tipo B con costura de 3 monómeros. Extremo menos anclado al complejo γ-TuRC centrosómico; extremo más con inestabilidad dinámica (crecimiento ~10–20 µm/min con capuchón GTP, catástrofe tras hidrólisis a GDP en β-tubulina y despolimerización a ~30–50 µm/min).'
    }
  },
  'tubulin': {
    en: {
      simple: 'A tubulin dimer is a two-piece Lego brick wired with a Mission: Impossible countdown timer. Snap millions into a microtubule pipe, and once their fuel timer ticks down, the old pipe unzips for instant reuse.',
      story: 'Folded inside chaperone pods in the [[cytosol|cytosol]] from [[amino acids|amino-acid]], alpha- and beta-tubulin lock together like inseparable Mecha co-pilots. Charged with fresh GTP, the pair clicks straight onto a growing [[microtubule|microtubule]]; seconds later its built-in clock snaps GTP to GDP, cocking a spring-loaded bend ready to pop the brick free for the next highway.',
      blueprint: 'Role: Self-timing dimeric building brick of [[microtubules|microtubule]] and [[centrioles|centriole]] · From: Translated on cytosolic [[ribosomes|ribosome]], folded via CCT/TRiC chaperonin, charged with GTP · Inside: Non-exchangeable α-GTP + hydrolyzable β-GTP control straight vs curved conformation · To: Polymerizes into [[microtubule|microtubule]] lattices, [[centrioles|centriole]], and [[cilium|cilium]] axonemes',
      scientific: 'αβ-Tubulin heterodimer (~100 kDa total; α ~50 kDa + β ~50 kDa, 8 nm × 4.5 nm × 4 nm; PDB 1JFF). α-Tubulin binds GTP irreversibly at the non-exchangeable N-site; β-tubulin binds exchangeable GTP/GDP at the E-site exposed at the (+) end. Post-incorporation GTP hydrolysis induces ~12° intradimer curvature strain that drives rapid protofilament peeling upon loss of the stabilizing GTP cap.'
    },
    es: {
      simple: 'El dímero de tubulina es un ladrillo doble de Lego con cuenta atrás digna de Misión: Imposible. Construye tuberías firmes y, cuando su reloj interno vence, permite desarmarlas y reciclarlas en segundos.',
      story: 'Plegadas en cápsulas chaperonas del [[citosol|cytosol]] con [[aminoácidos|amino-acid]], las gemelas alfa y beta operan como copilotos inseparables de un mecha. Con GTP fresco encajan rectas en la punta de un [[microtúbulo|microtubule]]; segundos después su temporizador quema GTP a GDP, cargando un resorte interno listo para saltar y reutilizarse en otra avenida o en un [[centriolo|centriole]].',
      blueprint: 'Rol: Ladrillo dimérico con temporizador GTP de [[microtúbulos|microtubule]] y [[centriolos|centriole]] · De: Traducido en [[ribosomas|ribosome]] citosólicos, plegado por chaperonina CCT y cargado con GTP · Dentro: Sitio N fijo (α-GTP) y sitio E hidrolizable (β-GTP→GDP) alternan geometría recta o curva · Hacia: Ensambla [[microtúbulos|microtubule]], [[centriolos|centriole]] y el [[cilio primario|cilium]]',
      scientific: 'Heterodímero αβ-tubulina (~100 kDa totales; ~50 kDa por monómero, 8 × 4.5 × 4 nm; PDB 1JFF). La subunidad α une GTP de modo no intercambiable (sitio N); la subunidad β une GTP/GDP intercambiable (sitio E) expuesto en el extremo (+). La hidrólisis del GTP en β-tubulina tras el ensamblaje introduce ~12° de tensión de curvatura alostérica que impulsa el pelado rápido del protofilamento.'
    }
  },
  'actin-filament': {
    en: {
      simple: 'Actin filaments are twisted twin-wire grapple cables right under the cell’s skin, straight out of Attack on Titan. Teamed with myosin motors, they push out crawling edges, swallow droplets, and karate-cinch dividing cells in two.',
      story: 'Right beneath the [[plasma membrane|plasma-membrane]], [[G-actin|g-actin]] beads twist into seven-nanometer cables fueled by [[mitochondria|mitochondrion]] ATP—firing out like Attack on Titan ODM grapple lines to push a crawling cell forward. Seconds later, myosin motors yank those same wires inward to pinch off [[vesicles|vesicle]], brace [[microvilli|microvillus]], or drawstring a dividing cell cleanly in half.',
      blueprint: 'Role: Cortical contractile mesh, protrusive engine, and short-range track · From: Polymerized from ATP-[[G-actin|g-actin]] monomers nucleated by Arp2/3 and formins · Inside: Polarized right-handed double-helical filament treadmills (barbed + growth, pointed − disassembly) · To: Braces [[plasma membrane|plasma-membrane]], cores [[microvilli|microvillus]], pinches [[vesicles|vesicle]], and drives cytokinesis',
      scientific: 'Polarized right-handed two-stranded helical microfilament (F-actin, 7 nm diameter, 37 nm half-helical pitch, ~13.5 subunits per turn). Barbed (+) end critical concentration Cc⁺ ≈ 0.1 µM vs pointed (−) end Cc⁻ ≈ 0.8 µM for ATP-actin, driving steady-state treadmilling modulated by profilin, cofilin, Arp2/3 (70° branches), and non-muscle myosin II contractile stress fibers (2–5 pN per motor head).'
    },
    es: {
      simple: 'Los filamentos de actina son cables dobles trenzados justo bajo la piel celular, dignos del equipo de maniobras de Attack on Titan. Con motores de miosina permiten trepar, tragar burbujas y partir la célula en dos.',
      story: 'Justo bajo la [[membrana plasmática|plasma-membrane]], miles de cuentas de [[actina G|g-actin]] se trenzan en cables de siete nanómetros cebados con ATP de las [[mitocondrias|mitochondrion]], disparándose como ganchos de Attack on Titan para impulsar el avance celular. Al instante, motores de miosina tensan esas mismas cuerdas para pellizcar [[vesículas|vesicle]], erguir [[microvellosidades|microvillus]] o ceñir la cintura al dividirse.',
      blueprint: 'Rol: Malla contráctil cortical y motor de protrusión superficial · De: Polimerizado desde monómeros de [[actina G|g-actin]]-ATP mediante Arp2/3 y forminas · Dentro: Doble hélice polarizada en recambio continuo (crece por extremo +, se acorta por extremo −) · Hacia: Sostiene la [[membrana plasmática|plasma-membrane]], arma [[microvellosidades|microvillus]] y escinde [[vesículas|vesicle]]',
      scientific: 'Microfilamento helicoidal dextrógiro polarizado de dos protofilamentos (actina F, 7 nm de diámetro, paso semihélice de 37 nm, ~13.5 monómeros por vuelta). Concentración crítica asimétrica para actina-ATP (Cc⁺ ≈ 0.1 µM en extremo barbado frente a Cc⁻ ≈ 0.8 µM en extremo puntiagudo) que impulsa el treadmilling, regulado por profilina, cofilina, complejo Arp2/3 (ramas a 70°) y miosina II (~2–5 pN por cabeza).'
    }
  },
  'g-actin': {
    en: {
      simple: 'G-actin is a single nano-pod bead gripping one live ATP coin in its jaw, like a piece of Iron Man’s nanotech suit on standby. One signal snaps thousands of beads into a cable in seconds.',
      story: 'Fresh off cytosolic [[ribosomes|ribosome]] from [[amino acids|amino-acid]], each globular bead clamps one ATP coin and a [[magnesium|atom-mg]] ion in its jaw. Profilin bodyguards keep huge squads chilled in the [[cytosol|cytosol]] until an alarm sounds—then thousands click onto an [[actin filament|actin-filament]] tip like Tony Stark’s Mark 50 suit assembling mid-punch.',
      blueprint: 'Role: ATP-charged monomeric subunit pool for [[actin filaments|actin-filament]] · From: Synthesized on cytosolic [[ribosomes|ribosome]] from [[amino acids|amino-acid]]; recharged with ATP from [[mitochondria|mitochondrion]] · Inside: Two-lobe globular cleft binds Mg²⁺-ATP and hydrolyzes it to ADP + Pi after polymerization · To: Assembles into [[actin filaments|actin-filament]] and returns to [[cytosol|cytosol]] via cofilin severing',
      scientific: 'Globular polypeptide of 375 amino acids (42 kDa, ~5.5 × 5.5 × 3.5 nm; β/γ-actin isoforms in non-muscle animal cells; PDB 1ATN), comprising four subdomains flanking a deep catalytic cleft coordinating divalent Mg²⁺ and ATP. Cytosolic pool reaches 50–200 µM (~5–10% of total soluble protein), sequestered unpolymerized above Cc by thymosin-β4 and recharged from ADP to ATP by profilin.'
    },
    es: {
      simple: 'La actina G es una cuenta esférica con una moneda de ATP en la boca, lista como la nanotecnología del traje de Iron Man. A una sola orden, miles de cuentas se ensamblan en segundos formando un cable nuevo.',
      story: 'Recién forjada en [[ribosomas|ribosome]] libres con [[aminoácidos|amino-acid]], cada esfera muerde un ATP sujeto por un ion de [[magnesio|atom-mg]]. Escoltas en el [[citosol|cytosol]] evitan que se peguen antes de hora hasta que salta la orden y miles encajan de golpe en la punta de un [[filamento de actina|actin-filament]], igual que la armadura nanotecnológica de Tony Stark en pleno vuelo.',
      blueprint: 'Rol: Reserva monomérica cargada con ATP de los [[filamentos de actina|actin-filament]] · De: Traducida en [[ribosomas|ribosome]] libres con [[aminoácidos|amino-acid]] y recargada con ATP de [[mitocondrias|mitochondrion]] · Dentro: Hendidura bilobulada fija Mg²⁺-ATP y lo hidroliza a ADP tras polimerizar · Hacia: Construye [[filamentos de actina|actin-filament]] y recicla al [[citosol|cytosol]] vía cofilina',
      scientific: 'Polipéptido globular de 375 aminoácidos (42 kDa, ~5.5 × 5.5 × 3.5 nm; isoformas β/γ citoplasmáticas; PDB 1ATN), organizado en cuatro subdominios alrededor de una hendidura catalítica con Mg²⁺-ATP. Alcanza concentraciones citosólicas de 50–200 µM (~5–10 % de la proteína soluble), mantenida en reserva monomérica sobre la Cc por timosina-β4 y recargada de ADP a ATP por profilina.'
    }
  },
  'intermediate-filament': {
    en: {
      simple: 'Intermediate filaments are Wolverine-tough braided steel ropes that keep animal cells from ripping when stretched. They burn zero fuel once built and give skin, hair, and claws their rugged grit.',
      story: 'While flashy monorails and muscles constantly rebuild, every city needs Spider-Man suspension webs that refuse to snap. Coiled [[alpha-helices|alpha-helix]] braid like ship hawsers into ten-nanometer ropes that spend zero ATP to hold fast—cradling the [[nucleus|nucleus]] in a shockproof hammock and bolting through [[cell junctions|cell-junction]] so a yank on your skin spreads harmlessly across thousands of cells.',
      blueprint: 'Role: High-tensile mechanical shock absorber and nuclear lamina armor · From: Coiled-coil [[alpha-helix|alpha-helix]] monomers synthesized on cytosolic [[ribosomes|ribosome]] · Inside: Antiparallel staggered tetramers pack laterally into apolar, stretch-resistant 10 nm ropes · To: Anchors [[nucleus|nucleus]], reinforces [[microvillus|microvillus]] terminal web, and rivets desmosomal [[cell junctions|cell-junction]]',
      scientific: 'Apolar fibrous polymer, ~10 nm diameter, assembled from tissue-specific coiled-coil rod proteins (~40–200 kDa: Types I/II keratins in epithelia, Type III vimentin/desmin, Type IV neurofilaments, Type V nuclear lamins A/B/C). Parallel coiled-coil dimers associate into staggered antiparallel tetramers; 8 tetramers compact radially into a unit-length filament without NTPase activity, sustaining strains >250% via α-helix-to-β-sheet unfolding.'
    },
    es: {
      simple: 'Los filamentos intermedios son maromas trenzadas con aguante digno de Wolverine que impiden que la célula se desgarre al estirarse. No gastan energía una vez montados y dan su dureza a piel, pelo y uñas.',
      story: 'Mientras rieles y músculos se arman y desarman, la ciudad necesita redes de suspensión como las de Spider-Man que jamás se rompan. Largas [[hélices α|alpha-helix]] se trenzan en cuerdas de diez nanómetros que no gastan ni un ATP para aguantar, meciendo al [[núcleo|nucleus]] en una hamaca blindada y remachándose en las [[uniones celulares|cell-junction]] para repartir cualquier tirón entre miles de vecinas.',
      blueprint: 'Rol: Cable tensor amortiguador de tracción y armadura nuclear · De: Monómeros en [[hélice α|alpha-helix]] traducidos por [[ribosomas|ribosome]] libres · Dentro: Tetrámeros antiparalelos escalonados forman cuerdas apolares de 10 nm sin gasto de NTP · Hacia: Sujeta el [[núcleo|nucleus]] y remacha los desmosomas en [[uniones celulares|cell-junction]]',
      scientific: 'Polímero fibroso apolar de ~10 nm de diámetro formado por proteínas con dominio central en superhélice (40–200 kDa: queratinas tipo I/II en epitelios, vimentina/desmina tipo III, neurofilamentos tipo IV y láminas nucleares A/B/C tipo V). Ocho tetrámeros antiparalelos se compactan lateralmente por sección sin actividad NTPasa, soportando elongaciones >250 % mediante transición reversible hélice α → lámina β.'
    }
  },
  'nucleus': {
    en: {
      simple: 'The nucleus is The Matrix Architect’s vault and Jedi Temple Archives in one—the armored central library guarding master DNA. Priceless originals never leave; only disposable RNA photocopies go out the gates.',
      story: 'Leave two meters of ultra-fine [[DNA|dna]] loose among acid sacs and spinning motors, and your source code gets shredded faster than a redshirt on Star Trek. So the city locks its blueprints behind a double wall, waving vetted [[histones|histone]] and nucleotides in from the cytosol through guarded [[nuclear pores|nuclear-pore]].\n\nInside this Matrix sanctum, forty-six chromosomes claim tidy districts while scribes print RNA work orders and the [[nucleolus|nucleolus]] forge cranks out ribosome halves—streaming instructions out the pores to keep the [[rough ER|rough-er]] humming.',
      blueprint: 'Role: Genome vault, transcriptional command center, and ribosome-subunit foundry · From: [[Nucleotides|nucleotide]], ATP, [[histones|histone]], and transcription factors imported from [[cytosol|cytosol]] · Inside: [[Nuclear envelope|nuclear-envelope]] houses [[chromosomes|chromosome]] and [[nucleolus|nucleolus]]; polymerases transcribe [[DNA|dna]] into [[RNA|rna]] · To: Exports capped mRNA, tRNA, and 40S/60S [[ribosome|ribosome]] subunits via [[nuclear pores|nuclear-pore]]',
      scientific: 'Largest eukaryotic organelle, 5–10 µm diameter (~10% of cell volume), bounded by a double lipid bilayer perforated by ~2,000–4,000 nuclear pore complexes and mechanically lined by a 15–30 nm lamin meshwork. Houses ~6.4 Gbp diploid human nuclear DNA (~2 m contour length) compacted ~10,000-fold into euchromatic (interior, transcriptionally active) and heterochromatic (lamina/nucleolus-associated, silent) chromosome territories.'
    },
    es: {
      simple: 'El núcleo combina la bóveda del Arquitecto de Matrix con los Archivos Jedi: la fortaleza central que custodia el ADN maestro. Los originales jamás salen; solo despacha fotocopias desechables de ARN.',
      story: 'Dos metros de finísimo [[ADN|dna]] sueltos entre motores y bolsas de ácido acabarían hechos trizas antes de los créditos iniciales. Por eso la metrópolis blinda su código fuente tras doble muralla, admitiendo [[histonas|histone]] y ladrillos del citosol solo con pase VIP por el [[poro nuclear|nuclear-pore]].\n\nDentro de este santuario digno de Matrix, cuarenta y seis cromosomas ocupan barrios propios mientras escribas copian pergaminos de ARN y la forja del [[nucléolo|nucleolus]] ensambla medio-ribosomas que salen a dictar órdenes al [[RE rugoso|rough-er]].',
      blueprint: 'Rol: Bóveda genómica, centro transcripcional y astillero de subunidades ribosómicas · De: [[Nucleótidos|nucleotide]], ATP, [[histonas|histone]] y polimerasas importados del [[citosol|cytosol]] · Dentro: La [[envoltura nuclear|nuclear-envelope]] protege [[cromosomas|chromosome]] y [[nucléolo|nucleolus]]; transcribe [[ADN|dna]] en [[ARN|rna]] · Hacia: Exporta ARNm, ARNt y subunidades de [[ribosoma|ribosome]] por [[poros nucleares|nuclear-pore]]',
      scientific: 'Mayor orgánulo eucariota, de 5–10 µm de diámetro (~10 % del volumen celular), delimitado por doble bicapa lipídica perforada por ~2,000–4,000 complejos de poro nuclear y reforzada internamente por una lámina nuclear de 15–30 nm. Alberga el genoma nuclear diploide (~6.4 Gpb en humanos, ~2 m de ADN lineal) compactado en territorios cromosómicos de eucromatina activa central y heterocromatina periférica.'
    }
  },
  'nuclear-envelope': {
    en: {
      simple: 'The nuclear envelope is a double-walled fortress moat—like Walls Maria and Rose in Attack on Titan—sealing off the DNA vault while flowing straight into the rough ER factory next door.',
      story: 'Twin concentric sheets of [[phospholipids|phospholipid]] separated by a narrow moat curve tightly around thousands of [[nuclear pores|nuclear-pore]] where inner and outer walls fuse like armored airlocks. Like Attack on Titan’s inner rings, its inside face bolts onto tough lamin armor to shield the [[nucleus|nucleus]], while its outer wall balloons straight into the [[rough ER|rough-er]]—putting waiting [[ribosomes|ribosome]] right outside the gate.',
      blueprint: 'Role: Double-bilayer compartment boundary coupling genome protection to the ER network · From: Membrane [[phospholipids|phospholipid]] synthesized in [[smooth ER|smooth-er]]/[[rough ER|rough-er]] · Inside: Inner membrane binds nuclear lamina and chromatin; outer membrane studded with [[ribosomes|ribosome]]; fused at [[nuclear pores|nuclear-pore]] · To: Segregates [[nucleus|nucleus]] from [[cytosol|cytosol]] and shares lumen directly with [[rough ER|rough-er]]',
      scientific: 'Concentric double phospholipid bilayer system (~40 nm total span: two ~7 nm bilayers separated by a 20–40 nm perinuclear cisterna lumen continuous with the ER lumen). Inner nuclear membrane (INM) harbors >60 unique integral proteins (emerin, LBR, SUN1/2 of the LINC complex bridging lamins to cytoplasmic cytoskeleton via outer-membrane nesprins); disassembles via CDK1-mediated lamin phosphorylation during open mitosis.'
    },
    es: {
      simple: 'La envoltura nuclear es una muralla doble con foso —como los muros María y Rose de Attack on Titan— que blinda el ADN y desemboca sin costuras en la fábrica del retículo rugoso.',
      story: 'Dos láminas concéntricas de [[fosfolípidos|phospholipid]] con foso intermedio se cosen alrededor de miles de [[poros nucleares|nuclear-pore]] como esclusas blindadas. Igual que las murallas de Attack on Titan, su cara interna se ancla a láminas resistentes para proteger al [[núcleo|nucleus]], mientras la externa se infla directamente formando el [[RE rugoso|rough-er]] para que los [[ribosomas|ribosome]] reciban los planos en la misma puerta.',
      blueprint: 'Rol: Frontera de doble bicapa que aísla el genoma y conecta con la red del RE · De: [[Fosfolípidos|phospholipid]] sintetizados en el [[RE liso|smooth-er]] y [[RE rugoso|rough-er]] · Dentro: Membrana interna anclada a láminas; membrana externa con [[ribosomas|ribosome]]; fusionadas en [[poros nucleares|nuclear-pore]] · Hacia: Separa el [[núcleo|nucleus]] del [[citosol|cytosol]] y comparte lumen con el [[RE rugoso|rough-er]]',
      scientific: 'Sistema concéntrico de doble bicapa lipídica (~40 nm totales: dos bicapas de ~7 nm separadas por un espacio perinuclear de 20–40 nm continuo con el lumen del RE). La membrana nuclear interna aloja >60 proteínas integrales específicas (emerina, LBR y complejos LINC SUN-nesprina que acoplan mecánicamente la lámina nuclear al citoesqueleto); se desensambla en mitosis abierta tras fosforilación de láminas por CDK1.'
    }
  },
  'nuclear-pore': {
    en: {
      simple: 'A nuclear pore is a colossal octagonal vault gate straight out of Monsters, Inc. Tiny ions drift through, but big proteins and RNA scrolls need a VIP passport to part its tentacle-curtain throat.',
      story: 'Bolted into the rim of the [[nuclear envelope|nuclear-envelope]], a thousand [[proteins|protein]] form an eight-spoked Monsters, Inc. portal thirty times heavier than a ribosome. Its throat bristles with floppy FG tentacles like club bouncers swatting gatecrashers away, yet parts like velvet curtains the instant an escort flashes a badge for an incoming [[histone|histone]] or an outgoing [[RNA|rna]] scroll headed to [[ribosomes|ribosome]].',
      blueprint: 'Role: Bidirectional size- and signal-selective gateway of the [[nucleus|nucleus]] · From: Built from ~30 nucleoporin [[proteins|protein]] anchored in the [[nuclear envelope|nuclear-envelope]] · Inside: FG-repeat hydrogel mesh + Ran-GTP/GDP gradient power active importin/exportin transport · To: Imports polymerases/[[histones|histone]] into [[nucleus|nucleus]]; exports mRNA and [[ribosome|ribosome]] subunits to [[cytosol|cytosol]]',
      scientific: 'Octagonal macromolecular assembly (~110–125 MDa in vertebrates, ~120 nm outer diameter, ~40–50 nm central transport channel; ~1,000 polypeptide copies of ~34 nucleoporins/Nups). Passive diffusion cutoff ~40 kDa (~5 nm); macromolecules above cutoff require NLS/NES signals bound by karyopherins (importins/exportins) dissolving transiently into phenylalanine-glycine (FG) intrinsically disordered repeats at up to ~1,000 translocations·pore⁻¹·s⁻¹.'
    },
    es: {
      simple: 'El poro nuclear es un colosal portal octogonal al estilo Monsters, Inc. en el muro del núcleo. Lo pequeño pasa libre, pero las grandes proteínas y rollos de ARN necesitan pasaporte VIP para cruzar su cortina de tentáculos.',
      story: 'Remachadas en la [[envoltura nuclear|nuclear-envelope]], mil [[proteínas|protein]] levantan una aduana octogonal digna de Monsters, Inc., treinta veces más pesada que un ribosoma. Su garganta llena de tentáculos FG batea sin piedad a los colados del citosol, pero se abre como cortina de gala apenas un escolta muestra el pase de una [[histona|histone]] entrante o de un rollo de [[ARN|rna]] rumbo a los [[ribosomas|ribosome]].',
      blueprint: 'Rol: Aduana bidireccional selectiva entre el [[núcleo|nucleus]] y el citoplasma · De: ~30 tipos de nucleoporinas ([[proteínas|protein]]) ancladas en la [[envoltura nuclear|nuclear-envelope]] · Dentro: Malla hidrofóbica de repeticiones FG y gradiente Ran-GTP regulan importinas y exportinas · Hacia: Importa enzimas e [[histonas|histone]]; exporta [[ARN|rna]] y subunidades de [[ribosoma|ribosome]] al [[citosol|cytosol]]',
      scientific: 'Complejo supramolecular de simetría octogonal (~110–125 MDa en vertebrados, ~120 nm Ø externo, canal central de ~40–50 nm; ~1,000 copias de ~34 nucleoporinas). Límite de difusión pasiva libre de ~40 kDa (~5 nm); el transporte activo mediado por carioferinas (importinas/exportinas) acopladas al ciclo energético Ran-GTP/GDP atraviesa el hidrogel de repeticiones fenilalanina-glicina (FG) hasta ~1,000 eventos·poro⁻¹·s⁻¹.'
    }
  },
  'protein': {
    en: {
      simple: 'A globular protein is a Transformer-like origami gadget: a ribbon of amino acids folded into a 3D machine with blades, hinges, or motors. Its exact 3D shape decides its superpower.',
      story: 'Spun out as a limp [[polypeptide|polypeptide]] tape from a [[ribosome|ribosome]], surrounding water shoves its greasy bits inward until [[alpha-helices|alpha-helix]] and sheets snap into a Transformers-style 3D tool. In this city, shape is superpower: one pocket chops sugar in the [[cytosol|cytosol]], another pumps ions, until dented veterans get fed to the [[proteasome|proteasome]] shredder.',
      blueprint: 'Role: Universal catalytic, structural, signaling, and mechanical nanomachine · From: Linear [[polypeptide|polypeptide]] translated by [[ribosomes|ribosome]] from [[amino acids|amino-acid]] · Inside: Hydrophobic collapse, hydrogen-bonded [[alpha-helices|alpha-helix]]/β-sheets, and chaperones lock native 3D fold · To: Operates across all organelles until tagged with [[ubiquitin|ubiquitin]] for [[proteasome|proteasome]] recycling',
      scientific: 'Compactly folded heteropolymer (typically 50–2,000 amino acids, ~5.5–220 kDa, 2–10 nm hydrodynamic diameter, packing density ~0.75 vs crystalline solids). Stabilized marginally (ΔG_fold ≈ −20 to −65 kJ/mol) by hydrophobic core burial, backbone H-bonded α-helices and β-sheets, salt bridges, metal cofactors, and luminal disulfide bonds; human proteome encodes ~20,000 canonical genes generating >100,000 splice/PTM proteoforms.'
    },
    es: {
      simple: 'Una proteína globular es origami al estilo Transformers: una cinta de aminoácidos que se pliega sola en una máquina 3D con bisagras, cuchillas o motores. Su forma exacta define su superpoder.',
      story: 'Recién salida como cinta blanda [[polipeptídica|polypeptide]] de un [[ribosoma|ribosome]], el empuje del agua esconde su centro graso hasta que [[hélices α|alpha-helix]] y láminas encajan como un Transformer microscópico. Aquí la forma dicta el oficio: un bolsillo corta azúcares en el [[citosol|cytosol]], otro bombea iones y, cuando la pieza se abolla, acaba reciclada en la trituradora del [[proteasoma|proteasome]].',
      blueprint: 'Rol: Nanomáquina universal catalítica, estructural, motora y sensorial · De: Cadena [[polipeptídica|polypeptide]] tejida por [[ribosomas|ribosome]] con [[aminoácidos|amino-acid]] · Dentro: Colapso hidrofóbico y puentes de hidrógeno en [[hélices α|alpha-helix]] y láminas β fijan su pliegue 3D · Hacia: Ejecuta funciones en cada orgánulo hasta su reciclaje vía [[ubiquitina|ubiquitin]] en el [[proteasoma|proteasome]]',
      scientific: 'Heteropolímero globular compacto (típicamente 50–2,000 aminoácidos, ~5.5–220 kDa, 2–10 nm de diámetro, densidad de empaquetamiento ~0.75). Estabilizado marginalmente (ΔG_plegamiento ≈ −20 a −65 kJ/mol) por efecto hidrofóbico central, hélices α y láminas β con puentes de hidrógeno, puentes salinos y enlaces disulfuro; el proteoma humano comprende ~20,000 genes canónicos y >100,000 proteoformas.'
    }
  },
  'alpha-helix': {
    en: {
      simple: 'An alpha-helix is a tight retro phone-cord coil that turns a floppy protein string into a sturdy spring rod. Tiny clasps every fourth link lock the spiral solid.',
      story: 'Seconds after [[amino acids|amino-acid]] exit a [[ribosome|ribosome]], the chain twists into a right-handed corkscrew where every fourth link clasps its neighbor above—pointing side chains outward like a spiky Bowser club. Coat it in greasy spikes and it anchors [[channel proteins|channel-protein]] and [[GPCRs|gpcr]] in oily walls; braid several together and you get unbreakable [[intermediate filaments|intermediate-filament]].',
      blueprint: 'Role: Rigid cylindrical secondary-structure girder and transmembrane rod · From: Spontaneous local folding of nascent [[polypeptide|polypeptide]] chains · Inside: Right-handed spiral of [[amino acids|amino-acid]] stabilized by i → i+4 backbone hydrogen bonds · To: Builds cores of globular [[proteins|protein]], transmembrane [[GPCRs|gpcr]], and coiled-coil [[intermediate filaments|intermediate-filament]]',
      scientific: 'Right-handed polypeptide secondary structure (~1.2 nm outer diameter including side chains, 0.54 nm pitch, 3.6 residues per turn, 0.15 nm axial rise per residue; Ramachandran angles φ ≈ −57°, ψ ≈ −47°). Every backbone C=O of residue i hydrogen-bonds to N–H of residue i+4, aligning peptide dipoles into a macrodipole (+0.5 e at N-terminus, −0.5 e at C-terminus); ~20–25 hydrophobic residues span a ~3.5 nm lipid core.'
    },
    es: {
      simple: 'Una hélice alfa es un resorte en espiral como cable de teléfono retro que convierte un hilo flojo de proteína en una barra firme. Pequeños broches cada cuatro eslabones aseguran el giro.',
      story: 'Apenas los [[aminoácidos|amino-acid]] salen del [[ribosoma|ribosome]], la cadena gira en sacacorchos abrochando cada cuarto eslabón con el anterior y sacando púas laterales como maza de Bowser. Con púas aceitosas clava [[acuaporinas|channel-protein]] y [[GPCR|gpcr]] en las membranas; trenzando varias hélices como soga marinera nacen los [[filamentos intermedios|intermediate-filament]].',
      blueprint: 'Rol: Viga cilíndrica de estructura secundaria y cilindro transmembrana · De: Plegamiento local inmediato de una cadena [[polipeptídica|polypeptide]] · Dentro: Espiral dextrógira de [[aminoácidos|amino-acid]] sujeta por puentes de hidrógeno C=O(i)···H–N(i+4) · Hacia: Arma [[proteínas|protein]] globulares, receptores [[GPCR|gpcr]] y [[filamentos intermedios|intermediate-filament]]',
      scientific: 'Estructura secundaria dextrógira (~1.2 nm de diámetro total con cadenas laterales, paso de rosca 0.54 nm, 3.6 residuos por vuelta, avance axial 0.15 nm/residuo; ángulos diedros φ ≈ −57°, ψ ≈ −47°). Estabilizada por puentes de hidrógeno intracatenarios entre el carbonilo i y la amida i+4 que suman un macrodipolo helicoidal; un tramo de 20–25 residuos apolares basta para atravesar perpendicularmente una bicapa lipídica.'
    }
  },
  'polypeptide': {
    en: {
      simple: 'A polypeptide is a raw, still-unfolded necklace of amino acid beads streaming hot off a ribosome 3D-printer. Chaperone bodyguards help it fold into a working protein in seconds.',
      story: 'Stitched at up to twenty [[amino acids|amino-acid]] per second inside a [[ribosome|ribosome]] tunnel, this fresh tape snakes into the cytosol or dives into the [[rough ER|rough-er]]. Celebrity-style chaperone bodyguards shield its sticky patches from clumping until it snaps into a hero [[protein|protein]]—or slap a [[ubiquitin|ubiquitin]] bounty sticker on hopeless duds.',
      blueprint: 'Role: Linear covalent polymer carrying primary sequence information into 3D folding · From: Dehydration synthesis of [[amino acids|amino-acid]] inside the [[ribosome|ribosome]] 60S tunnel · Inside: Planar trans peptide bonds (−CO−NH−) with rotatable φ/ψ hinges · To: Co-translationally folds into native [[proteins|protein]] in [[cytosol|cytosol]] or [[rough ER|rough-er]] lumen',
      scientific: 'Unbranched polyamide heteropolymer extending from a free α-amino N-terminus to an α-carboxyl C-terminus via resonance-stabilized planar peptide bonds (~40% double-bond character, C–N length 1.33 Å, >99.7% trans except Xaa-Pro ~6% cis). Extrudes through the ~10 nm × 1.5 nm ribosomal exit tunnel shielding ~30–40 nascent residues while Hsp70/BiP chaperones prevent off-pathway aggregation.'
    },
    es: {
      simple: 'Una cadena polipeptídica es un collar crudo de aminoácidos recién salido en caliente de la impresora del ribosoma. En segundos, escoltas chaperonas lo ayudan a plegarse como proteína lista.',
      story: 'Cosida a veinte [[aminoácidos|amino-acid]] por segundo en el túnel del [[ribosoma|ribosome]], esta cinta tierna asoma al citosol o entra directa al [[RE rugoso|rough-er]]. Guardaespaldas chaperonas cubren sus tramos pegajosos como escoltas VIP hasta que cuaja en [[proteína|protein]] funcional, o le pegan el cartel de búsqueda de [[ubiquitina|ubiquitin]] si sale defectuosa.',
      blueprint: 'Rol: Polímero lineal covalente que traduce secuencia genética en arquitectura 3D · De: Condensación de [[aminoácidos|amino-acid]] en el túnel de salida del [[ribosoma|ribosome]] · Dentro: Enlaces peptídicos planos (−CO−NH−) alternados con giros φ/ψ en carbonos α · Hacia: Se pliega en [[proteínas|protein]] activas en el [[citosol|cytosol]] o el [[RE rugoso|rough-er]]',
      scientific: 'Heteropolímero poliamídico lineal con direccionalidad N-terminal (α-NH₃⁺) a C-terminal (α-COO⁻), unido por enlaces peptídicos planares estabilizados por resonancia (longitud C–N de 1.33 Å, configuración trans en >99.7 % salvo Xaa-Pro). Atraviesa el túnel ribosómico de ~10 nm (alojando 30–40 residuos nacientes) bajo vigilancia cotraduccional de chaperonas Hsp70/BiP.'
    }
  },
  'amino-acid': {
    en: {
      simple: 'Amino acids are the twenty canonical Lego bricks that build every protein on Earth. Every brick has the exact same snap-hooks on left and right, differing only in the attachment dangling off the middle.',
      story: 'Salvaged when [[lysosomes|lysosome]] scrap old gear or imported fresh across the [[plasma membrane|plasma-membrane]], each brick shares identical snap-connectors plus one of twenty wild Minecraft-style side-chain attachments. Matched to its personal [[tRNA|trna]] courier in the [[cytosol|cytosol]], it rides straight into a ribosome to click onto a growing [[polypeptide|polypeptide]].',
      blueprint: 'Role: Twenty-letter chemical alphabet of all [[polypeptides|polypeptide]] and [[proteins|protein]] · From: Dietary uptake across [[plasma membrane|plasma-membrane]], metabolic synthesis, or [[lysosome|lysosome]]/[[proteasome|proteasome]] recycling · Inside: Chiral L-α-[[carbon|atom-c]] links −NH₃⁺, −COO⁻, −H, and variable R side chain · To: Charged onto [[tRNA|trna]] (spending ATP) for [[ribosome|ribosome]] translation',
      scientific: 'L-α-Amino carboxylic acid, H₃N⁺–CH(R)–COO⁻ zwitterion at pH 7.4 (average residue mass ~110 Da in proteins; L-alanine C₃H₇NO₂ = 89.09 Da, R = −CH₃, ~0.5 nm). Twenty genetically encoded canonical monomers (9 essential in humans) span nonpolar aliphatic/aromatic, polar uncharged, acidic (Asp, Glu), and basic (Lys, Arg, His) R-groups; aminoacyl-tRNA synthetases charge cognate tRNAs with error rates <10⁻⁴.'
    },
    es: {
      simple: 'Los aminoácidos son las veinte piezas oficiales de Lego con las que se construye toda proteína viva. Comparten idénticos enganches a ambos lados y solo cambian en el accesorio colgante central.',
      story: 'Rescatados cuando los [[lisosomas|lysosome]] desguazan chatarra o traídos del almuerzo por la [[membrana plasmática|plasma-membrane]], cada bloque trae los mismos dos broches universales y uno de veinte accesorios dignos de Minecraft. Subido a su [[ARNt|trna]] repartidor en el [[citosol|cytosol]], viaja al ribosoma para abrocharse en una nueva cadena [[polipeptídica|polypeptide]].',
      blueprint: 'Rol: Alfabeto químico de 20 monómeros que construye toda [[proteína|protein]] · De: Absorción en [[membrana plasmática|plasma-membrane]], síntesis citosólica o reciclaje en [[lisosomas|lysosome]] y [[proteasomas|proteasome]] · Dentro: [[Carbono|atom-c]] α quiral L unido a −NH₃⁺, −COO⁻, −H y cadena lateral R · Hacia: Se une a [[ARNt|trna]] con gasto de ATP para alimentar al [[ribosoma|ribosome]]',
      scientific: 'Ácido L-α-aminocarboxílico en forma zwitteriónica H₃N⁺–CH(R)–COO⁻ a pH 7.4 (masa residual media ~110 Da; L-alanina C₃H₇NO₂ = 89.09 Da, R = −CH₃, ~0.5 nm). Veinte aminoácidos canónicos codificados genéticamente (9 esenciales en humanos) con grupos R apolares, aromáticos, polares neutros, ácidos y básicos; las aminoacil-ARNt sintetasas los acoplan con fidelidad >99.99 %.'
    }
  },
  'nucleolus': {
    en: {
      simple: 'The nucleolus is a wall-free Studio Ghibli boiler-room forge floating inside the nucleus like a lava-lamp droplet. Its one job is mass-producing the cell’s ribosome 3D-printers.',
      story: 'Right inside the [[nucleus|nucleus]] hums a crowded foundry with zero membrane walls—a self-gathering liquid droplet condensed like a lava-lamp blob around ribosomal genes. Eighty kinds of [[proteins|protein]] freshly minted out in the [[cytosol|cytosol]] march in through nuclear pores to meet ribbons of [[RNA|rna]] spooling off DNA.\n\nLike Kamaji’s multi-armed boiler room in Spirited Away, snipping crews trim and fold those ribbons into separate small and large [[ribosome|ribosome]] halves, shipping them out unplugged until a real job starts.',
      blueprint: 'Role: Membraneless biomolecular condensate for rRNA synthesis and [[ribosome|ribosome]] biogenesis · From: rDNA loops on 5 acrocentric [[chromosomes|chromosome]], [[nucleotides|nucleotide]], and ~80 ribosomal [[proteins|protein]] imported via [[nuclear pores|nuclear-pore]] · Inside: Tripartite phase-separated zones transcribe 47S pre-rRNA, cleave/modify it, and assemble 40S + 60S subunits · To: Exports immature [[ribo-small|ribo-small]] and [[ribo-large|ribo-large]] subunits through [[nuclear pores|nuclear-pore]]',
      scientific: 'Liquid–liquid phase-separated nuclear body (1–3 µm diameter) nucleated around tandem rDNA repeats at nucleolar organizer regions (NORs on human chromosomes 13, 14, 15, 21, 22). Organized into three immiscible subphases: fibrillar center (FC, Pol I + rDNA), dense fibrillar component (DFC, fibrillarin + snoRNPs catalyzing 2′-O-methylation and pseudouridylation of 47S → 18S, 5.8S, 28S rRNAs), and granular component (GC, nucleophosmin, pre-40S/pre-60S assembly; ~2,000–10,000 ribosomes/min).'
    },
    es: {
      simple: 'El nucléolo es una fragua sin paredes al estilo El viaje de Chihiro que flota dentro del núcleo como gota de lámpara de lava. Su única misión es fabricar en serie las impresoras ribosómicas.',
      story: 'En pleno corazón del [[núcleo|nucleus]] ruge un astillero sin murallas: una gota densa condensada como lámpara de lava sobre los genes ribosómicos. Ochenta tipos de [[proteínas|protein]] recién hechas en el [[citosol|cytosol]] entran desfilando para unirse a cintas frescas de [[ARN|rna]].\n\nComo la sala de calderas de Kamaji en El viaje de Chihiro, tijeras expertas recortan y pliegan esas piezas en las dos mitades sueltas de cada [[ribosoma|ribosome]], despachándolas desenchufadas hasta que reciban su primer plano afuera.',
      blueprint: 'Rol: Condensado biomolecular sin membrana que fabrica subunidades de [[ribosoma|ribosome]] · De: Bucles ADNr de [[cromosomas|chromosome]], [[nucleótidos|nucleotide]] y ~80 [[proteínas|protein]] importadas por [[poros nucleares|nuclear-pore]] · Dentro: Tres fases líquidas transcriben pre-ARNr 47S, lo procesan y ensamblan pre-40S y pre-60S · Hacia: Exporta [[subunidad 40S|ribo-small]] y [[subunidad 60S|ribo-large]] por los [[poros nucleares|nuclear-pore]]',
      scientific: 'Condensado nuclear formado por separación de fases líquido-líquido (1–3 µm Ø) sobre regiones organizadoras nucleolares (NOR en cromosomas humanos 13, 14, 15, 21 y 22). Estructurado en tres subfases: centro fibrilar (CF, ARN Pol I + ADNr), componente fibrilar denso (CFD, fibrilarina y snoRNP que procesan el pre-ARNr 47S en 18S, 5.8S y 28S) y componente granular (CG, nucleofosmina, ensamblaje de subunidades a ~2,000–10,000 ribosomas/min).'
    }
  },
  'chromosome': {
    en: {
      simple: 'A chromosome is a centimeter-long DNA thread packed like a Doctor Strange spell scroll so it never tangles. All day it hangs in readable loops, then cinches into an X-shaped suitcase right before cell division.',
      story: 'Imagine spooling forty kilometers of cassette tape into a tennis ball so neatly you can play any track in seconds—forty-six chromosomes pull off that magic trick inside the [[nucleus|nucleus]]. Most of the day each [[DNA|dna]] strand hangs in open loops where [[RNA polymerase II|pol-ii]] copies active genes; at division time, [[PCNA|pcna]] helps duplicate every letter and condensin rings cinch twin copies into iconic X-trunks for [[microtubules|microtubule]] to grapple apart.',
      blueprint: 'Role: Discrete genomic packaging unit ensuring orderly transcription and error-free segregation · From: Single continuous [[DNA|dna]] duplex replicated with [[PCNA|pcna]] and wrapped on [[histones|histone]] · Inside: Hierarchical compaction via [[nucleosomes|nucleosome]] and [[chromatin fibers|chromatin-fiber]]; condensin compacts 10,000× in mitosis · To: Exposes euchromatin to [[RNA polymerase II|pol-ii]] or attaches kinetochores to spindle [[microtubules|microtubule]]',
      scientific: 'Linear eukaryotic nucleoprotein complex (humans: 2n = 46 chromosomes, 50–250 Mbp per chromatid, 1.7–8.5 cm uncoiled DNA compacted to 2–10 µm at metaphase). Contains replication origins (~30,000–50,000 per human genome), CENP-A-defined centromeric constriction assembling the kinetochore, and protective TTAGGG telomeric repeats (5–15 kb) capped by shelterin; loop-extruded by cohesin in interphase and condensin I/II in mitosis.'
    },
    es: {
      simple: 'Un cromosoma es un hilo larguísimo de ADN plegado como pergamino de Doctor Strange para no enredarse jamás. De día cuelga en bucles fáciles de leer y, al dividirse la célula, se cierra como maleta en X.',
      story: 'Imagina enrollar kilómetros de cinta de casete en una canica pudiendo abrir cualquier canción al instante: esa magia la logran cuarenta y seis cromosomas en el [[núcleo|nucleus]]. Casi todo el día el [[ADN|dna]] reposa en bucles abiertos para la [[ARN polimerasa II|pol-ii]]; al dividir la ciudad, [[PCNA|pcna]] ayuda a duplicar cada letra y anillos proteicos aprietan las copias gemelas en maletas en X listas para los [[microtúbulos|microtubule]].',
      blueprint: 'Rol: Unidad física del genoma para transcripción ordenada y reparto mitótico · De: Doble hélice única de [[ADN|dna]] replicada con [[PCNA|pcna]] y enrollada en [[histonas|histone]] · Dentro: Compactación jerárquica en [[nucleosomas|nucleosome]] y [[fibra de cromatina|chromatin-fiber]] (hasta 10,000× en mitosis) · Hacia: Abre genes a la [[ARN polimerasa II|pol-ii]] o engancha cinetocoros a [[microtúbulos|microtubule]]',
      scientific: 'Complejo nucleoproteico lineal (humanos: 2n = 46, 50–250 Mpb por cromátida, 1.7–8.5 cm de ADN compactados a 2–10 µm en metafase). Incluye múltiples orígenes de replicación, centrómero epigenético definido por CENP-A donde ensambla el cinetocoro, y telómeros terminales repetitivos (TTAGGG, 5–15 kb) protegidos por el complejo shelterina; organizado en dominios TAD por cohesina en interfase y condensina I/II en mitosis.'
    }
  },
  'chromatin-fiber': {
    en: {
      simple: 'Chromatin fiber is an accordion-folded Indiana Jones whip of DNA spools bunched along a gene. Chemical switches on the spools act like Inside Out console buttons—muting unused chapters or opening active ones.',
      story: 'Thousands of [[nucleosome|nucleosome]] spools along a [[DNA|dna]] thread fold accordion-style into a dense cable inside each [[chromosome|chromosome]]. Chemical tags painted onto [[histone|histone]] tails work like Inside Out control-desk switches: clamp the fiber shut on mute for storage, or pop the spools apart so [[RNA polymerase II|pol-ii]] can land and roll camera.',
      blueprint: 'Role: Tunable intermediate-scale compaction layer regulating gene accessibility · From: Arrays of [[nucleosomes|nucleosome]] linked by linker [[DNA|dna]] and H1 linker histones · Inside: Dynamic 10-to-30 nm folding clutches controlled by [[histone|histone]] acetylation/methylation and ATP remodelers · To: Packs into [[chromosome|chromosome]] loops or opens naked promoters to [[RNA polymerase II|pol-ii]]',
      scientific: 'Polymorphic nucleosomal array (~10–30 nm cross-section, ~40–50-fold linear DNA compaction) stabilized by linker histone H1 binding entry/exit dyad DNA (~20–60 bp linker length) and internucleosomal H4 N-terminal tail interactions with adjacent H2A/H2B acidic patches. In vivo cryo-EM/ChromEMT reveals disordered liquid-like 5–24 nm clutches dynamically remodeled by SWI/SNF and ISWI ATPases.'
    },
    es: {
      simple: 'La fibra de cromatina es un látigo plegado en acordeón hecho de carretes de ADN. Sus etiquetas químicas funcionan como la consola de Intensa-Mente: silencian capítulos enteros o los abren para leerlos.',
      story: 'Miles de carretes [[nucleosómicos|nucleosome]] sobre una hebra de [[ADN|dna]] se pliegan en zigzag dentro del [[cromosoma|chromosome]]. Pequeñas marcas sobre las colas de las [[histonas|histone]] operan como botones de mando en Intensa-Mente: echan el candado cuando un gen sobra o despejan la pista exacta donde aterriza la [[ARN polimerasa II|pol-ii]].',
      blueprint: 'Rol: Nivel intermedio y regulable de empaquetamiento y silenciamiento génico · De: Hileras de [[nucleosomas|nucleosome]] conectadas por [[ADN|dna]] espaciador e histona H1 · Dentro: Plegamiento dinámico de 10 a 30 nm modulado por marcas en [[histonas|histone]] y remodeladores ATP · Hacia: Forma bucles del [[cromosoma|chromosome]] o expone promotores a la [[ARN polimerasa II|pol-ii]]',
      scientific: 'Arreglo polimórfico de nucleosomas (~10–30 nm de sección, compactación lineal de ~40–50×) estabilizado por la histona conectora H1 en la díada de entrada/salida (espaciador de 20–60 pb) y contactos entre la cola H4 y el parche ácido H2A/H2B vecino. En células vivas (ChromEMT) se organiza en racimos dinámicos irregulares de 5–24 nm remodelados por complejos ATPasa SWI/SNF e ISWI.'
    }
  },
  'nucleosome': {
    en: {
      simple: 'A nucleosome is a microscopic Walkman tape-spool: DNA wound nearly twice around a magnetic puck of eight histone proteins. Thirty million spools keep your genome from knotting like headphone wires in a pocket.',
      story: 'Left bare, negatively charged [[DNA|dna]] repels itself like stiff wire, so the [[nucleus|nucleus]] winds 147 rungs 1.65 times around a positive [[histone|histone]] puck so it never tangles like pocket earbuds. Strung along [[chromatin fibers|chromatin-fiber]], these spools aren’t dumb packing peanuts—ATP stagehands slide or evict pucks on cue whenever [[RNA polymerase II|pol-ii]] yells "Action!"',
      blueprint: 'Role: Fundamental repeating spool unit of eukaryotic chromatin · From: 147 bp [[DNA|dna]] duplex + one [[histone|histone]] octamer assembled post-replication · Inside: Electrostatic salt bridges wrap left-handed superhelical [[DNA|dna]] 1.65 turns around the octamer · To: Strings together into [[chromatin fibers|chromatin-fiber]] or slides aside for [[RNA polymerase II|pol-ii]]',
      scientific: 'Nucleosome core particle (NCP, ~206 kDa, 11 nm diameter × 5.5 nm height; high-resolution crystal structure PDB 1AOI): 147 bp of B-DNA wrapped in 1.65 left-handed superhelical turns (pitch ~2.8 nm) around a histone octamer via ~142 backbone-phosphate hydrogen bonds and arginine minor-groove insertions every ~10.2 bp, achieving ~6–7-fold initial linear compaction (~3 × 10⁷ NCPs per diploid human nucleus).'
    },
    es: {
      simple: 'Un nucleosoma es un carrete estilo Walkman: hilo de ADN enrollado casi dos vueltas sobre un disco magnético de ocho histonas. Treinta millones de carretes evitan que el genoma se anude como cables de audífonos.',
      story: 'Suelto, el [[ADN|dna]] negativo se repele como alambre rebelde, así que el [[núcleo|nucleus]] enrolla 147 peldaños alrededor de un disco positivo de [[histonas|histone]] para evitar nudos de bolsillo. Ensartados en la [[fibra de cromatina|chromatin-fiber]], estos carretes actúan como tramoyistas inteligentes que se apartan a golpe de ATP apenas pide paso la [[ARN polimerasa II|pol-ii]].',
      blueprint: 'Rol: Carrete elemental repetitivo del empaquetamiento eucariota · De: 147 pb de [[ADN|dna]] + un octámero de [[histonas|histone]] tras la replicación · Dentro: Superhélice levógira de 1.65 vueltas sujeta por puentes electrostáticos · Hacia: Se encadena en [[fibra de cromatina|chromatin-fiber]] o cede el paso a la [[ARN polimerasa II|pol-ii]]',
      scientific: 'Partícula central del nucleosoma (NCP, ~206 kDa, cilindro de 11 nm Ø × 5.5 nm de altura; PDB 1AOI): 147 pb de ADN-B enrollados en 1.65 vueltas superhelicoidales levógiras alrededor de un octámero de histonas mediante ~142 puentes de hidrógeno e inserciones de arginina en el surco menor cada ~10.2 pb, logrando una compactación primaria de ~6–7× (~3 × 10⁷ nucleosomas por núcleo humano diploide).'
    }
  },
  'histone': {
    en: {
      simple: 'A histone octamer is an eight-piece magnetic hockey puck that hugs negatively charged DNA tight. Waving tails stick out of the puck wearing Post-it flags reading "Read Me!" or "Keep Out!"',
      story: 'Printed on cytosolic [[ribosomes|ribosome]] from positive [[amino acids|amino-acid]] and rushed through [[nuclear pores|nuclear-pore]], eight subunits snap into a magnetic barrel. While the barrel hugs [[DNA|dna]] inside a [[nucleosome|nucleosome]], its waving tails outside wear Post-it flags: acetyl green-lights loosen the grip for reading, while methyl padlocks seal the vault.',
      blueprint: 'Role: Positively charged protein spool core and epigenetic switchboard · From: Translated on cytosolic [[ribosomes|ribosome]] and imported through [[nuclear pores|nuclear-pore]] · Inside: (H3–H4)₂ tetramer + two H2A–H2B dimers form a cationic histone-fold barrel with protruding N-tails · To: Wraps [[DNA|dna]] into [[nucleosomes|nucleosome]] and displays PTM marks regulating [[chromatin fibers|chromatin-fiber]]',
      scientific: 'Octameric protein core (~108 kDa total, ~7 nm × 5.5 nm): central (H3–H4)₂ heterotetramer flanked by two H2A–H2B heterodimers (monomers 11–15 kDa, >20% Lys + Arg residues, pI > 10), each sharing the 3-helix histone-fold motif. Unstructured N-terminal tails undergo reversible lysine acetylation (e.g., H3K27ac), methylation (H3K4me3, H3K9me3), phosphorylation, and monoubiquitination ("histone code").'
    },
    es: {
      simple: 'El octámero de histonas es un disco magnético de ocho piezas que abraza con fuerza al ADN negativo. De sus bordes asoman colas con notas adhesivas que dicen «¡Léeme!» o «¡Prohibido el paso!».',
      story: 'Fabricadas en [[ribosomas|ribosome]] del citoplasma con [[aminoácidos|amino-acid]] positivos e importadas por [[poros nucleares|nuclear-pore]], ocho piezas encajan en un tambor magnético. Mientras ese tambor sujeta al [[ADN|dna]] en cada [[nucleosoma|nucleosome]], sus colas ondean afuera como banderines donde enzimas cuelgan semáforos verdes de lectura o candados de silencio.',
      blueprint: 'Rol: Tambor proteico catiónico y tablero de control epigenético · De: Sintetizadas en [[ribosomas|ribosome]] citosólicos e importadas por [[poros nucleares|nuclear-pore]] · Dentro: Tetrámero (H3–H4)₂ + dos dímeros H2A–H2B ricos en Lys/Arg con colas N-terminales · Hacia: Enrolla el [[ADN|dna]] en [[nucleosomas|nucleosome]] y regula el estado de la [[fibra de cromatina|chromatin-fiber]]',
      scientific: 'Octámero proteico básico (~108 kDa totales, ~7 × 5.5 nm): tetrámero central (H3–H4)₂ flanqueado por dos dímeros H2A–H2B (monómeros de 11–15 kDa, >20 % residuos Lys + Arg, pI > 10) unidos por el motivo estructural histone-fold. Sus colas N-terminales desordenadas reciben acetilación (H3K27ac), metilación (H3K4me3, H3K9me3), fosforilación y ubiquitinación.'
    }
  },
  'dna': {
    en: {
      simple: 'DNA is The Matrix green code and Jurassic Park’s Mr. DNA rolled into one twisted rope ladder. Because each half-rung only fits one partner, unzipping the ladder lets the cell clone two flawless copies.',
      story: 'Every gadget in this metropolis is coded inside this two-nanometer spiral staircase guarded in the [[nucleus|nucleus]] (plus a retro mixtape loop inside each [[mitochondrion|mitochondrion]]). Sugar-[[phosphate|phosphate]] rails shield billions of paired [[nitrogenous bases|base]]—A clasping T, G clasping C like Mr. DNA taught in Jurassic Park—so [[RNA polymerase II|pol-ii]] can unzip one recipe and zip the master code right back up.',
      blueprint: 'Role: Permanent archival storage of hereditary sequence information · From: Replicated semiconservatively from deoxynucleoside triphosphates ([[nucleotides|nucleotide]]) · Inside: Antiparallel sugar-phosphate backbones enclose Watson–Crick paired [[bases|base]] (A–T, G–C) · To: Wrapped onto [[nucleosomes|nucleosome]] and transcribed into [[RNA|rna]] by polymerases',
      scientific: 'Right-handed antiparallel double-stranded polynucleotide (canonical B-DNA: 2.0 nm diameter, 3.4 nm helical pitch, ~10.5 bp/turn, 0.34 nm axial rise/bp, major groove 2.2 nm wide vs minor groove 1.2 nm). Stabilized primarily by aromatic π–π base-stacking interactions plus Watson–Crick hydrogen bonds (2 per A=T, 3 per G≡C) along anionic 5′→3′ phosphodiester backbones.'
    },
    es: {
      simple: 'El ADN es el código verde de Matrix y Don ADN de Parque Jurásico hechos escalera de caracol. Como cada medio peldaño solo encaja con su pareja, abrir la cremallera permite sacar dos copias exactas.',
      story: 'Cada máquina de la ciudad nace escrita en esta escalera de dos nanómetros blindada en el [[núcleo|nucleus]] (más un casete circular propio en cada [[mitocondria|mitochondrion]]). Dos rieles con [[fosfato|phosphate]] custodian miles de millones de [[bases nitrogenadas|base]] —A con T, G con C, al estilo Parque Jurásico— para que la [[ARN polimerasa II|pol-ii]] copie un párrafo y cierre el original sin un rasguño.',
      blueprint: 'Rol: Archivo maestro permanente de la información genética hereditaria · De: Replicación semiconservativa a partir de [[nucleótidos|nucleotide]] trifosfato · Dentro: Hebras antiparalelas 5′→3′ de azúcar-fosfato con pares complementarios de [[bases|base]] (A–T, G–C) · Hacia: Se enrolla en [[nucleosomas|nucleosome]] y sirve de molde para transcribir [[ARN|rna]]',
      scientific: 'Polinucleótido bicatenario antiparalelo dextrógiro (forma canónica ADN-B: 2.0 nm Ø, paso de hélice 3.4 nm, ~10.5 pb/vuelta, ascenso axial 0.34 nm/pb, surco mayor de 2.2 nm y surco menor de 1.2 nm). Estabilizado por apilamiento hidrofóbico/aromático π–π entre pares de bases y puentes de hidrógeno de Watson–Crick (2 en A=T, 3 en G≡C) sobre esqueletos polianiónicos fosfodiéster.'
    }
  },
  'nucleotide': {
    en: {
      simple: 'A nucleotide is a Transformer brick with two jobs: snap one phosphate on and it is a letter of DNA or RNA; snap three on adenine and it becomes ATP, the universal Arc Reactor battery of life.',
      story: 'Crafted from [[glucose|glucose]] sugars in the [[cytosol|cytosol]] and recharged at mitochondria, this three-part marvel links a [[sugar|sugar]] hub to one code base and a tail of [[phosphates|phosphate]]. Pop off two outer phosphates and the spark welds the brick into DNA or [[RNA|rna]]—or spend adenine’s triple-charged form as the universal Energon cube powering every motor in town.',
      blueprint: 'Role: Monomeric letter of nucleic acids and universal phosphoryl energy currency · From: De novo or salvage pathways in [[cytosol|cytosol]]; re-phosphorylated by [[mitochondria|mitochondrion]] · Inside: Pentose [[sugar|sugar]] C1′ holds [[base|base]]; C5′ holds 1–3 [[phosphate|phosphate]] groups · To: Polymerizes into [[DNA|dna]]/[[RNA|rna]] or powers enzymes as ATP/GTP',
      scientific: 'Nucleoside monophosphate/triphosphate (~330 Da per NMP residue in DNA/RNA; ATP = 507.18 Da, ~1 nm): β-N-glycosidic bond at C1′ links a purine (A, G) or pyrimidine (C, T, U) to D-ribose or 2′-deoxy-D-ribose, esterified at C5′ to α, β, γ phosphates. Polymerases catalyze nucleophilic attack of primer 3′-OH on incoming α-phosphate, releasing pyrophosphate (PPi → 2 Pi drives polymerization irreversibly).'
    },
    es: {
      simple: 'Un nucleótido es una pieza estilo Transformers con doble vida: con un fosfato es una letra del ADN o ARN; con tres fosfatos sobre adenina es el ATP, el cubo de Energón que mueve toda la vida.',
      story: 'Armado en el [[citosol|cytosol]] con nitrógeno de [[aminoácidos|amino-acid]] y recargado en las mitocondrias, este bloque une un [[azúcar|sugar]], una letra genética y hasta tres [[fosfatos|phosphate]]. Al soltar dos fosfatos, el chispazo suelda la letra en ADN o [[ARN|rna]], o bien actúa como batería universal de ATP para encender bombas y motores por toda la ciudad.',
      blueprint: 'Rol: Monómero informativo de ácidos nucleicos y moneda energética celular (ATP/GTP) · De: Síntesis citosólica y fosforilación oxidativa en [[mitocondrias|mitochondrion]] · Dentro: [[Azúcar|sugar]] pentosa une la [[base|base]] en C1′ y 1–3 [[fosfatos|phosphate]] en C5′ · Hacia: Polimeriza en [[ADN|dna]] y [[ARN|rna]] o impulsa bombas y motores',
      scientific: 'Nucleósido fosfato (~330 Da por residuo NMP incorporado; ATP = 507.18 Da, ~1 nm): enlace β-N-glucosídico en C1′ entre una purina (A, G) o pirimidina (C, T, U) y ribosa o 2′-desoxirribosa, esterificada en C5′ a fosfatos α, β, γ. Las polimerasas catalizan el ataque nucleofílico del 3′-OH sobre el fosfato α entrante con liberación e hidrólisis de pirofosfato (PPi).'
    }
  },
  'phosphate': {
    en: {
      simple: 'A phosphate group is a spiky, negatively charged star of one phosphorus inside four oxygens—part Super Mario POW block on ATP, part steel rail on DNA, and the cell’s favorite ON/OFF switch.',
      story: 'Built around one [[phosphorus|atom-p]] gripping four [[oxygens|atom-o]], three of these negative stars crammed onto ATP push apart like coiled pinball bumpers. Popping the end star off unleashes instant mechanical punch, slapping one onto a [[protein|protein]] flips its power switch in a flash, and linking [[sugars|sugar]] with them forges the armor rails of [[DNA|dna]].',
      blueprint: 'Role: Anionic backbone linker, high-energy phosphoanhydride spring, and signaling tag · From: Inorganic orthophosphate (Pi) imported across [[plasma membrane|plasma-membrane]] · Inside: Tetrahedral [[phosphorus|atom-p]] coordinated to four [[oxygen|atom-o]] atoms carrying negative charge · To: Links [[nucleotides|nucleotide]], charges ATP at [[ATP synthase|atp-synthase]], and caps [[head groups|head-group]]',
      scientific: 'Orthophosphate / phosphoryl group (H₂PO₄⁻ ⇌ HPO₄²⁻ in physiological cytosol, pKa₂ = 7.21; ~0.3 nm tetrahedral radius, P–O bond ~1.54 Å). Forms hydrolytically stable phosphodiester bridges in DNA/RNA (negative charge confines nucleic acids inside lipid bilayers and resists OH⁻ attack) and high-transfer-potential phosphoanhydride bonds in ATP (ΔG°′ = −30.5 kJ/mol, cellular ΔG ≈ −50 to −65 kJ/mol).'
    },
    es: {
      simple: 'Un grupo fosfato es una estrella negativa de un fósforo y cuatro oxígenos: mitad bloque POW de Super Mario en el ATP, mitad riel blindado del ADN e interruptor favorito para encender proteínas.',
      story: 'Con un [[fósforo|atom-p]] abrazado a cuatro [[oxígenos|atom-o]], tres de estas estrellas negativas apretadas en un ATP se repelen como resortes comprimidos. Soltar la última dispara potencia limpia al instante, estampar una sobre una [[proteína|protein]] acciona su interruptor en milisegundos, y coser [[azúcares|sugar]] con ellas levanta los rieles eternos del [[ADN|dna]].',
      blueprint: 'Rol: Eslabón aniónico estructural, resorte energético del ATP e interruptor proteico · De: Fosfato inorgánico (Pi) absorbido por la [[membrana plasmática|plasma-membrane]] · Dentro: Geometría tetraédrica de [[fósforo|atom-p]] y cuatro [[oxígenos|atom-o]] con carga negativa · Hacia: Une [[nucleótidos|nucleotide]], carga ATP en la [[ATP sintasa|atp-synthase]] y corona [[cabezas polares|head-group]]',
      scientific: 'Grupo ortofosfato / fosforilo (equilibrio H₂PO₄⁻ ⇌ HPO₄²⁻ a pH 7.2, pKa₂ = 7.21; radio tetraédrico ~0.3 nm, enlace P–O ~1.54 Å). Forma enlaces fosfodiéster cinéticamente ultraestables en ADN/ARN (cuya carga negativa impide la fuga pasiva por membranas) y enlaces fosfoanhídrido de alto potencial de transferencia en el ATP (ΔG°′ = −30.5 kJ/mol; ΔG celular real ≈ −50 a −65 kJ/mol).'
    }
  },
  'sugar': {
    en: {
      simple: 'Deoxyribose is the five-sided sugar hub inside every DNA brick—built like an indestructible Nokia 3310. Removing just one oxygen atom stops RNA’s Mission: Impossible self-destruct timer so DNA lasts lifetimes.',
      story: 'Spun from [[glucose|glucose]] into a five-corner ring of [[carbon|atom-c]] and [[oxygen|atom-o]], RNA’s ribose keeps an extra hydroxyl hook that makes [[RNA|rna]] messages self-destruct like a Mission: Impossible tape after work. Plucking off that single 2′ oxygen disarms the self-cutting fuse, turning [[DNA|dna]] into a Nokia-tough vault archive built to outlast a century.',
      blueprint: 'Role: Pentose structural hub distinguishing long-term [[DNA|dna]] from transient [[RNA|rna]] · From: Pentose phosphate pathway branching from [[glucose|glucose]]-6-phosphate; C2′ reduced by ribonucleotide reductase · Inside: Furanose 5-membered ring links [[base|base]] at C1′ and [[phosphates|phosphate]] at C5′/C3′ · To: Forms backbone hubs of [[nucleotides|nucleotide]] in [[DNA|dna]]',
      scientific: '2-Deoxy-D-erythro-pentofuranose (C₅H₁₀O₄, 134.13 Da, ~0.5 nm ring; adopts C2′-endo puckering in canonical B-DNA vs C3′-endo in ribose/A-RNA). Absence of the 2′-hydroxyl group eliminates intramolecular 2′-O⁻ nucleophilic attack on the adjacent 3′,5′-phosphodiester bond, increasing DNA hydrolytic half-life >10,000-fold relative to RNA at physiological pH.'
    },
    es: {
      simple: 'La desoxirribosa es el azúcar pentagonal de cada ladrillo de ADN, resistente como un Nokia clásico. Quitarle un solo oxígeno desactiva la mecha de autodestrucción del ARN para que el ADN dure toda la vida.',
      story: 'Derivada de la [[glucosa|glucose]] con [[carbono|atom-c]] y [[oxígeno|atom-o]], la ribosa trae un gancho extra que hace que los recados de [[ARN|rna]] se autodestruyan tras leerse como cinta de Misión: Imposible. Al arrancarle quirúrgicamente ese único oxígeno se apaga la mecha, volviendo al [[ADN|dna]] un archivo blindado capaz de resistir décadas intacto.',
      blueprint: 'Rol: Pieza central pentosa que otorga estabilidad secular al [[ADN|dna]] frente al [[ARN|rna]] · De: Ruta de las pentosas fosfato desde [[glucosa|glucose]] y reducción en C2′ · Dentro: Anillo furanósico enlaza la [[base|base]] en C1′ y [[fosfatos|phosphate]] en C3′ y C5′ · Hacia: Integra los [[nucleótidos|nucleotide]] del [[ADN|dna]]',
      scientific: '2-Desoxi-D-eritro-pentofuranosa (C₅H₁₀O₄, 134.13 Da, ~0.5 nm; plegamiento de anillo C2′-endo en ADN-B frente a C3′-endo en ARN-A). La ausencia del grupo 2′-OH suprime la transesterificación intramolecular sobre el enlace fosfodiéster 3′,5′ vecino, multiplicando por >10,000 la estabilidad hidrolítica del ADN frente al ARN.'
    }
  },
  'base': {
    en: {
      simple: 'A nitrogenous base is a flat puzzle-piece letter—A, T, C, G, or U—whose notched edge works like a Kingdom Hearts Keyblade lock: A only pairs with T (or U), and G only triple-locks with C.',
      story: 'Stamped from flat [[carbon|atom-c]] and [[nitrogen|atom-n]] rings in the cytosol, double-ring purines (A, G) and single-ring pyrimidines (C, T, U) ride [[nucleotides|nucleotide]] as the ink of heredity. Thymine wears one extra methyl badge over uracil so repair crews spot counterfeit typos instantly, clasping adenine across [[DNA|dna]] so every script read by [[RNA polymerase II|pol-ii]] stays spoiler-free and exact.',
      blueprint: 'Role: Information-bearing hydrogen-bonding letter of [[DNA|dna]] and [[RNA|rna]] · From: Synthesized from [[amino acids|amino-acid]], CO₂, and folate one-carbon units in [[cytosol|cytosol]] · Inside: Planar aromatic ring of [[carbon|atom-c]] and [[nitrogen|atom-n]] forms specific Watson–Crick H-bond edges · To: Encodes genes in [[DNA|dna]], codons in [[RNA|rna]], and anticodons in [[tRNA|trna]]',
      scientific: 'Planar heteroaromatic purines (adenine, guanine; bicyclic) and pyrimidines (cytosine, thymine = 5-methyluracil C₅H₆N₂O₂ = 126.11 Da, uracil; monocyclic, ~0.5 nm). Purine–pyrimidine pairing preserves uniform 1.08 nm C1′–C1′ duplex width; C5 methylation of thymine enables uracil-DNA glycosylase to distinguish mutagenic cytosine-deamination (C→U) lesions from native T.'
    },
    es: {
      simple: 'Una base nitrogenada es una letra química plana —A, T, C, G o U— cuyo borde dentado encaja como llave espada de Kingdom Hearts: A solo abraza a T (o U) y G solo cierra triple con C.',
      story: 'Forjadas como anillos planos de [[carbono|atom-c]] y [[nitrógeno|atom-n]] en el citosol, las purinas dobles y pirimidinas simples viajan en los [[nucleótidos|nucleotide]] como tinta viva de la herencia. La timina luce una insignia metilo extra frente al uracilo para que los revisores cacen erratas al vuelo, abrazando a la adenina en el centro del [[ADN|dna]] para garantizar copias fieles ante la [[ARN polimerasa II|pol-ii]].',
      blueprint: 'Rol: Letra aromática portadora de código por emparejamiento específico · De: Biosíntesis de purinas y pirimidinas desde [[aminoácidos|amino-acid]] en el [[citosol|cytosol]] · Dentro: Anillo plano de [[carbono|atom-c]] y [[nitrógeno|atom-n]] con bordes complementarios de puentes de hidrógeno · Hacia: Codifica genes en [[ADN|dna]], codones en [[ARN|rna]] y anticodones en [[ARNt|trna]]',
      scientific: 'Heterociclos aromáticos planos: purinas bicíclicas (adenina, guanina) y pirimidinas monocíclicas (citosina, uracilo y timina = 5-metiluracilo, C₅H₆N₂O₂ = 126.11 Da, ~0.5 nm). El par purina-pirimidina fija una distancia isostérica C1′–C1′ de 1.08 nm; el grupo 5-metilo de la timina permite a la uracilo-ADN glicosilasa reparar desaminaciones espontáneas C→U sin borrar timinas legítimas.'
    }
  },
  'rna': {
    en: {
      simple: 'RNA is a Naruto Shadow Clone of a gene—a nimble single-stranded scroll that sprints out of the nucleus to deliver blueprints, haul bricks, or weld proteins, then poofs into recyclable parts when done.',
      story: 'Cloned off [[DNA|dna]] like a Naruto Shadow Clone inside the nucleus or [[nucleolus|nucleolus]], this single-stranded ribbon grabs a 5′ helmet before diving out a [[nuclear pore|nuclear-pore]]. Outside, it works three ninja jobs at once: mRNA feeds scripts through [[ribosomes|ribosome]], [[tRNA|trna]] ferries amino-acid bricks, and rRNA forms the actual blade welding every protein.',
      blueprint: 'Role: Disposable genetic courier (mRNA), amino-acid adaptor ([[tRNA|trna]]), and catalytic ribozyme (rRNA) · From: Transcribed from [[DNA|dna]] templates using ribo-[[nucleotides|nucleotide]] inside [[nucleus|nucleus]]/[[nucleolus|nucleolus]] · Inside: Single-stranded ribose-phosphate chain (A, U, G, C) spliced, 5′-capped, and folded into hairpins · To: Exported via [[nuclear pores|nuclear-pore]] to direct [[ribosomes|ribosome]], then recycled to [[nucleotides|nucleotide]]',
      scientific: 'Single-stranded polyribonucleotide (ribose C2′-OH, uracil replacing thymine; forms local A-form duplex stems, 11 bp/turn). Cellular RNA mass is ~80–85% rRNA (28S, 18S, 5.8S, 5S), ~10–15% tRNA (~76 nt cloverleaf/L-fold), and ~2–5% mRNA (5′ 7-methylguanosine cap, coding ORF, 3′ ~200-nt poly(A) tail; median mammalian mRNA half-life ~3–9 h) plus snRNA, snoRNA, miRNA, and lncRNA.'
    },
    es: {
      simple: 'El ARN es un clon de sombra de Naruto sacado de un gen: una cinta ágil de una sola hebra que sale del núcleo a repartir planos, cargar piezas o soldar proteínas antes de desmontarse sin dejar rastro.',
      story: 'Copiada del [[ADN|dna]] como un clon de sombra en el núcleo o el [[nucléolo|nucleolus]], esta cinta ligera se calza su casco 5′ antes de saltar por el [[poro nuclear|nuclear-pore]]. Afuera domina tres artes ninja a la vez: el ARNm guía a los [[ribosomas|ribosome]], el [[ARNt|trna]] acarrea ladrillos y el ARNr forja la hoja viva que suelda cada proteína.',
      blueprint: 'Rol: Mensajero génico temporal (ARNm), adaptador ([[ARNt|trna]]) y ribozima estructural (ARNr) · De: Transcrito sobre [[ADN|dna]] con ribo-[[nucleótidos|nucleotide]] en [[núcleo|nucleus]] y [[nucléolo|nucleolus]] · Dentro: Hebra simple con ribosa y uracilo, procesada con caperuza 5′, empalme y horquillas 3D · Hacia: Cruza [[poros nucleares|nuclear-pore]] hacia los [[ribosomas|ribosome]] y luego se recicla',
      scientific: 'Polirribonucleótido monocatenario (ribosa con 2′-OH y uracilo en lugar de timina; tallos locales en hélice tipo A de 11 pb/vuelta). Del ARN celular total, ~80–85 % es ARNr (28S, 18S, 5.8S, 5S), ~10–15 % ARNt (~76 nt en L) y ~2–5 % ARNm maduro (caperuza m⁷G 5′, exones empalmados y cola poli-A 3′ de ~200 nt; semivida media en mamíferos de 3–9 h), además de snARN, snoARN y miARN.'
    }
  },
  'rough-er': {
    en: {
      simple: 'The rough ER is a Willy Wonka factory maze of flat membrane sheets studded with thousands of ribosome 3D-printers. Every exported hormone, membrane gate, and lysosome blade starts on this assembly line.',
      story: 'Ballooning straight off the [[nuclear envelope|nuclear-envelope]], stacked membrane sheets glitter with docked [[ribosomes|ribosome]] injecting fresh [[polypeptides|polypeptide]] through tiny trapdoors into the cavern inside.\n\nWithin that workshop, chaperone crews fold each gadget, rivet sulfur bridges, and stamp starter sugar trees—bubble-wrapping winners for the [[Golgi apparatus|golgi]] while booting mangled Veruca Salt "bad nuts" out to the [[proteasome|proteasome]].',
      blueprint: 'Role: Co-translational synthesis, folding, disulfide-bonding, and N-glycosylation factory for secretory/membrane proteins · From: mRNA + [[ribosomes|ribosome]], [[amino acids|amino-acid]], and ATP from [[cytosol|cytosol]] · Inside: Sec61 translocon imports nascent chains into oxidizing lumen; BiP/calnexin fold and quality-check · To: Buds COPII [[vesicles|vesicle]] to [[Golgi|golgi]] or ejects misfolded chains via ERAD to [[proteasome|proteasome]]',
      scientific: 'Ribosome-studded cisternal sheet network (~50 nm luminal spacing) continuous with the outer nuclear membrane. Signal recognition particle (SRP) docks translating ribosomes onto Sec61αβγ translocons; inside the oxidizing lumen (GSH:GSSG ≈ 3:1 vs ~100:1 in cytosol, [Ca²⁺] ≈ 0.5 mM), oligosaccharyltransferase transfers Glc₃Man₉GlcNAc₂ to Asn-X-Ser/Thr, protein disulfide isomerase (PDI) forms S–S bonds, and calnexin/calreticulin enforce folding quality control.'
    },
    es: {
      simple: 'El retículo rugoso es un laberinto fabril digno de Willy Wonka, tapizado con miles de ribosomas. Toda hormona exportada, compuerta de membrana o cuchilla lisosómica arranca en esta cadena de montaje.',
      story: 'Brotando directo de la [[envoltura nuclear|nuclear-envelope]], sus sábanas relucen llenas de [[ribosomas|ribosome]] que inyectan cadenas [[polipeptídicas|polypeptide]] por escotillas secretas hacia su galería interna.\n\nAdentro, cuadrillas chaperonas pliegan cada pieza, remachan puentes de azufre y estampan azúcares iniciales: las aprobadas viajan al [[aparato de Golgi|golgi]], y las «nueces huecas» defectuosas van directas al desguace del [[proteasoma|proteasome]].',
      blueprint: 'Rol: Fábrica de inserción cotraduccional, plegamiento oxidativo y N-glicosilación · De: ARNm, [[ribosomas|ribosome]], [[aminoácidos|amino-acid]] y ATP procedentes del [[citosol|cytosol]] · Dentro: Translocón Sec61 introduce cadenas al lumen; BiP, PDI y calnexina pliegan y auditan calidad · Hacia: Envía [[vesículas|vesicle]] COPII al [[Golgi|golgi]] o desvía fallos al [[proteasoma|proteasome]]',
      scientific: 'Red de cisternas laminares (~50 nm de luz) continua con la membrana nuclear externa y tapizada de ribosomas 80S en su cara citosólica. La partícula SRP dirige el complejo naciente al translocón Sec61; en el lumen oxidante (GSH:GSSG ≈ 3:1, [Ca²⁺] ≈ 0.5 mM), la oligosacariltransferasa añade el precursor Glc₃Man₉GlcNAc₂, la PDI cataliza puentes disulfuro y el ciclo calnexina/calreticulina filtra el plegamiento antes de exportar vía COPII.'
    }
  },
  'smooth-er': {
    en: {
      simple: 'The smooth ER is a coral-shaped oil refinery, Ghostbusters toxin-trap, and hair-trigger calcium starter pistol—all with zero ribosomes. It brews membrane lipids, disarms poisons, and fires rapid calcium sparks.',
      story: 'Branching off the sheeted factory into sleek ribosome-free pipes, this coral refinery takes raw [[fatty-acid tails|fatty-acid-tail]] and ATP from the [[cytosol|cytosol]] to brew fresh [[phospholipids|phospholipid]] and [[cholesterol|cholesterol]] for every wall in the city.\n\nSurplus fat buds off its skin as golden [[lipid droplets|lipid-droplet]]; cytochrome P450 traps bolt water-soluble handles onto alcohol and drugs so your liver flushes them out; and SERCA pumps cock a pressurized calcium trigger ready to flash-start muscles on command.',
      blueprint: 'Role: Lipid/steroid refinery, xenobiotic detoxifier, and intracellular Ca²⁺ reservoir · From: [[Fatty-acid tails|fatty-acid-tail]], acetyl-CoA, NADPH, O₂, and ATP from [[cytosol|cytosol]] · Inside: Smooth ~50 nm tubules house lipid synthases, cytochrome P450 monooxygenases, and SERCA Ca²⁺ pumps · To: Supplies [[phospholipids|phospholipid]]/[[cholesterol|cholesterol]], buds [[lipid droplets|lipid-droplet]], and pulses Ca²⁺ to [[cytosol|cytosol]] and [[mitochondria|mitochondrion]]',
      scientific: 'Anastomosing ribosome-free tubular membrane network (~30–60 nm diameter, shaped by reticulons and atlastin GTPases). Synthesizes phosphatidylcholine, ceramide, cholesterol (HMG-CoA reductase), and steroid hormones; detoxifies lipophilic xenobiotics via NADPH-cytochrome P450 reductase/CYP450 hydroxylation; sequesters luminal Ca²⁺ (~0.1–1 mM vs ~100 nM cytosolic) via SERCA ATPases for rapid IP₃R/RyR release.'
    },
    es: {
      simple: 'El retículo liso es refinería coralina de aceite, trampa antitoxinas estilo Cazafantasmas y pistola de salida de calcio, sin un solo ribosoma encima. Destila lípidos, neutraliza venenos y lanza chispazos de alerta.',
      story: 'Extendida desde las láminas vecinas en una red de tuberías lisas sin ribosomas, esta refinería toma [[colas de ácidos grasos|fatty-acid-tail]] y ATP del [[citosol|cytosol]] para cocinar fosfolípidos nuevos y el [[colesterol|cholesterol]] de todas las murallas.\n\nSi sobra grasa, infla tanques dorados de [[gotas lipídicas|lipid-droplet]] desde su propia piel; si entran fármacos o alcohol, sus enzimas P450 los atrapan al estilo Cazafantasmas para expulsarlos; y sus bombas SERCA cargan calcio a presión listo para encender músculos y [[mitocondrias|mitochondrion]].',
      blueprint: 'Rol: Refinería de lípidos y esteroides, planta detoxificadora y almacén de Ca²⁺ · De: [[Colas de ácidos grasos|fatty-acid-tail]], acetil-CoA, NADPH, O₂ y ATP del [[citosol|cytosol]] · Dentro: Túbulos de ~50 nm con sintasas lipídicas, citocromos P450 y bombas de calcio SERCA · Hacia: Surte [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]], brota [[gotas lipídicas|lipid-droplet]] y libera pulsos de Ca²⁺',
      scientific: 'Red tubular anastomosada carente de ribosomas (~30–60 nm Ø, curvada por reticulonas y GTPasas atlastinas). Cataliza la biosíntesis de glicerofosfolípidos, ceramida, colesterol (HMG-CoA reductasa) y hormonas esteroideas; hidroxila xenobióticos lipofílicos mediante monooxigenasas del citocromo P450 dependientes de NADPH; acumula Ca²⁺ luminal (0.1–1 mM frente a ~100 nM citosólico) vía bombas SERCA con liberación por canales IP₃R y RyR.'
    }
  },
  'ribosome': {
    en: {
      simple: 'A ribosome is a two-piece Stark-tech 3D-printer that clamps onto RNA tape, reads three letters at a time, and clicks amino acids into proteins. Up to ten million hum nonstop across a single cell.',
      story: 'Exported from the [[nucleolus|nucleolus]] as separate upper and lower jaws that only clamp shut when a live mRNA work order threads between them, up to ten million of these nanomachines pack the [[cytosol|cytosol]] and stud the rough ER.\n\nInside the slot, [[tRNA|trna]] couriers audition three-letter codons one after another while an ancient folded-RNA core welds each [[amino acid|amino-acid]] at fifteen links a second—burning GTP recharged near [[mitochondria|mitochondrion]] without dropping a single beat.',
      blueprint: 'Role: Universal mRNA-directed [[polypeptide|polypeptide]] synthesizer (ribozyme nanomachine) · From: [[40S|ribo-small]] + [[60S|ribo-large]] subunits from [[nucleolus|nucleolus]], mRNA, aminoacyl-[[tRNAs|trna]], and GTP · Inside: A, P, and E tRNA sites decode 3-base codons and catalyze peptide bonds at ~5–20 aa/s · To: Releases cytosolic [[proteins|protein]] or threads secretory chains into [[rough ER|rough-er]]',
      scientific: 'Eukaryotic 80S ribonucleoprotein machine (~4.3 MDa, ~28 × 25 nm; human 80S cryo-EM PDB 4UG0) comprising the 40S small subunit (18S rRNA + 33 RPS proteins) and 60S large subunit (28S, 5.8S, 5S rRNAs + 47 RPL proteins). Peptidyl transferase center (PTC) is a pure ribozyme core within 28S rRNA; consumes 2 GTP (eEF1A, eEF2) plus 1 ATP-equivalent (tRNA charging, 2 high-energy bonds) per peptide bond (~5–9 aa/s in mammals).'
    },
    es: {
      simple: 'El ribosoma es una impresora 3D de dos piezas digna de Tony Stark que muerde cintas de ARN, lee de tres en tres letras y suelda aminoácidos en cadena. Hasta diez millones zumban sin pausa en una sola célula.',
      story: 'Enviadas desde el [[nucléolo|nucleolus]] como dos mitades desconectadas que solo se abrazan al morder un plano activo de ARN, hasta diez millones de estas forjas pueblan el [[citosol|cytosol]] y el RE rugoso.\n\nEn su ranura central, repartidores [[ARNt|trna]] cantan codones de tres letras mientras un yunque ancestral hecho de ARN antiguo suelda cada [[aminoácido|amino-acid]] a toda velocidad, quemando GTP recargado junto a las [[mitocondrias|mitochondrion]] sin saltarse un escalón.',
      blueprint: 'Rol: Sintetizador universal de cadenas [[polipeptídicas|polypeptide]] guiado por ARNm · De: Subunidades [[40S|ribo-small]] y [[60S|ribo-large]] del [[nucléolo|nucleolus]], ARNm, aminoacil-[[ARNt|trna]] y GTP · Dentro: Sitios A, P y E leen codones de 3 bases y sueldan enlaces peptídicos a ~5–20 aa/s · Hacia: Entrega [[proteínas|protein]] al [[citosol|cytosol]] o las inyecta al [[RE rugoso|rough-er]]',
      scientific: 'Complejo ribonucleoproteico eucariota 80S (~4.3 MDa, ~28 × 25 nm; estructura humana PDB 4UG0), integrado por la subunidad menor 40S (ARNr 18S + 33 proteínas) y la mayor 60S (ARNr 28S, 5.8S, 5S + 47 proteínas). El centro peptidiltransferasa (PTC) reside íntegramente en el ARNr 28S (ribozima); consume 2 GTP (eEF1A, eEF2) más el coste de aminoacilación por cada enlace peptídico (~5–9 aa/s en mamíferos).'
    }
  },
  'ribo-large': {
    en: {
      simple: 'The 60S large subunit is the Mandalorian beskar forge-dome on top of the ribosome. Scooby-Doo plot twist: pull off its protein mask and pure folded RNA is the actual torch welding every protein!',
      story: 'Built in the [[nucleolus|nucleolus]] from three [[RNA|rna]] scaffolds and forty-seven proteins, this heavy dome locks onto the [[small subunit|ribo-small]] at the start line. Pull off the protein mask in a classic Scooby-Doo reveal and naked RNA is the real blacksmith—snapping each [[amino acid|amino-acid]] onto the [[polypeptide|polypeptide]] and guiding it down an armored exit chute.',
      blueprint: 'Role: Catalytic peptidyl-transferase dome and nascent-chain exit tunnel of the [[ribosome|ribosome]] · From: 28S, 5.8S, and 5S [[RNA|rna]] + 47 [[proteins|protein]] assembled in [[nucleolus|nucleolus]] · Inside: 28S rRNA ribozyme welds peptide bonds and channels [[polypeptide|polypeptide]] through a 10 nm tunnel · To: Releases finished chains to [[cytosol|cytosol]] or docks onto Sec61 on [[rough ER|rough-er]]',
      scientific: 'Eukaryotic 60S ribosomal subunit (~2.8 MDa, ~25 nm): 28S (~5,070 nt in humans), 5.8S (157 nt), and Pol III-transcribed 5S (121 nt) rRNAs complexed with 47 RPL proteins. Houses the protein-free peptidyl transferase center (~18 Å radius devoid of amino acid side chains around the catalytic adenine) and a ~100 Å × 10–20 Å exit tunnel accommodating ~35 nascent residues.'
    },
    es: {
      simple: 'La subunidad mayor 60S es la pesada cúpula forjadora del ribosoma, digna del armero de The Mandalorian. Giro estilo Scooby-Doo: bajo la máscara proteica, quien suelda de verdad es puro ARN plegado.',
      story: 'Forjada en el [[nucléolo|nucleolus]] con tres armazones de [[ARN|rna]] y cuarenta y siete proteínas, esta cúpula cierra sobre la [[subunidad menor|ribo-small]] en la salida. En una revelación digna de Scooby-Doo, ninguna proteína toca la soldadura: el propio ARN desnudo une cada [[aminoácido|amino-acid]] y escolta la cadena [[polipeptídica|polypeptide]] por su túnel blindado.',
      blueprint: 'Rol: Cúpula catalítica peptidiltransferasa y túnel de salida del [[ribosoma|ribosome]] · De: ARNr 28S, 5.8S y 5S + 47 [[proteínas|protein]] ensamblados en el [[nucléolo|nucleolus]] · Dentro: Ribozima ARNr 28S forma enlaces peptídicos y guía la cadena [[polipeptídica|polypeptide]] · Hacia: Libera cadenas al [[citosol|cytosol]] o acopla el túnel al [[RE rugoso|rough-er]]',
      scientific: 'Subunidad ribosómica eucariota 60S (~2.8 MDa, ~25 nm): formada por ARNr 28S (~5,070 nt en humanos), 5.8S (157 nt) y 5S (121 nt, transcrito por ARN Pol III) junto a 47 proteínas RPL. Alberga el centro peptidiltransferasa puramente ribozímico (sin cadenas laterales proteicas a <18 Å del sitio reactivo) y el túnel de salida de ~100 Å de longitud.'
    }
  },
  'ribo-small': {
    en: {
      simple: 'The 40S small subunit is a strict Papers, Please border scanner on the bottom of the ribosome. It checks every three-letter RNA code word and bounces impostor parts before the upper dome can weld.',
      story: 'Slipping out a [[nuclear pore|nuclear-pore]], this nimble scanner grabs the 5′ cap of an [[RNA|rna]] scroll in the [[cytosol|cytosol]] and hunts down the AUG start flag. Once the [[large subunit|ribo-large]] clamps on top, 40S finger-checks every [[tRNA|trna]] match like a Terminator HUD—booting impostors in microseconds so typos rarely slip through.',
      blueprint: 'Role: mRNA scanner and codon–anticodon fidelity inspector of the [[ribosome|ribosome]] · From: 18S [[RNA|rna]] + 33 [[proteins|protein]] assembled in [[nucleolus|nucleolus]] and exported via [[nuclear pores|nuclear-pore]] · Inside: Decoding center flips conserved 18S rRNA adenines to verify Watson–Crick [[tRNA|trna]] pairing · To: Recruits [[60S subunit|ribo-large]] at AUG start codon to launch [[polypeptide|polypeptide]] synthesis',
      scientific: 'Eukaryotic 40S ribosomal subunit (~1.4 MDa, ~20 nm): 18S rRNA (1,869 nt in humans) plus 33 RPS proteins organized into head, body, and platform domains forming the mRNA channel. Forms the 43S pre-initiation complex (with eIF1, eIF1A, eIF3, and eIF2·GTP·Met-tRNAi) to scan 5′ UTRs; decoding center rRNA bases (A1824/A1825, E. coli A1492/A1493 equivalents) probe minor-groove geometry of codon–anticodon base pairs 1 and 2.'
    },
    es: {
      simple: 'La subunidad menor 40S es el implacable inspector de aduanas estilo Papers, Please en la base del ribosoma. Revisa cada código de tres letras y expulsa piezas falsas antes de autorizar la soldadura.',
      story: 'Tras cruzar un [[poro nuclear|nuclear-pore]], este escáner atrapa el casco 5′ de un [[ARN|rna]] en el [[citosol|cytosol]] y rastrea la bandera de salida AUG. Cuando la [[subunidad mayor|ribo-large]] cierra encima, palpa cada pareja con el [[ARNt|trna]] como visor de Terminator y patea al instante a cualquier impostor para evitar erratas.',
      blueprint: 'Rol: Escáner de ARNm y auditor de fidelidad codón–anticodón del [[ribosoma|ribosome]] · De: ARNr 18S + 33 [[proteínas|protein]] del [[nucléolo|nucleolus]] vía [[poros nucleares|nuclear-pore]] · Dentro: Centro decodificador comprueba la geometría exacta del par ARNm–[[ARNt|trna]] · Hacia: Recluta la [[subunidad 60S|ribo-large]] sobre el codón AUG para iniciar la cadena [[polipeptídica|polypeptide]]',
      scientific: 'Subunidad ribosómica eucariota 40S (~1.4 MDa, ~20 nm): compuesta por ARNr 18S (1,869 nt en humanos) y 33 proteínas RPS dispuestas en cabeza, cuerpo y plataforma. Integra el complejo de preiniciación 43S para rastrear la región 5′ UTR hasta el codón AUG; adeninas conservadas del ARNr 18S inspeccionan el surco menor de las dos primeras posiciones del dúplex codón-anticodón.'
    }
  },
  'golgi': {
    en: {
      simple: 'The Golgi apparatus is a pancake-stacked Cells at Work! parcel hub and custom body shop. It trims and glams up incoming proteins with One Piece Log Pose sugar zip-codes, then boxes them into bubbles for exact docks.',
      story: 'Cargo [[vesicles|vesicle]] budding off the rough ER dock at the receiving face of this curved pancake stack, dropping off half-finished [[proteins|protein]] and lipids like bare chassis rolling into a custom body shop.\n\nSac by sac as each cisterna matures forward, sugar-smiths prune and rebuild glycan trees—stamping hazmat mannose-6-phosphate warnings onto acid blades bound for [[lysosomes|lysosome]] and polishing lush [[glycocalyx|glycocalyx]] antlers—until the trans exit launches sorted pods toward the [[plasma membrane|plasma-membrane]].',
      blueprint: 'Role: Post-translational glycan remodeler, lipid finisher, and vesicular sorting hub · From: COPII cargo [[vesicles|vesicle]] arriving from [[rough ER|rough-er]] and [[smooth ER|smooth-er]] · Inside: Polarized cis → medial → trans cisternae (pH dropping 6.7 → 6.0) process N/O-glycans and sphingomyelin · To: Dispatches clathrin/secretory [[vesicles|vesicle]] to [[lysosomes|lysosome]], [[plasma membrane|plasma-membrane]], and exterior; recycles ER residents via COPI',
      scientific: 'Polarized ribbon of 4–8 stacked flattened cisternae (1–3 µm wide, 20–30 nm luminal width) tethered near the centrosome by golgins and dynein along microtubules; organized into cis-Golgi network (CGN), cis/medial/trans cisternae, and trans-Golgi network (TGN). V-ATPase acidifies lumen progressively (pH ~6.7 cis to ~6.0 TGN); executes N-glycan trimming/sialylation, O-glycosylation, sphingomyelin/glycolipid synthesis, prohormone furin cleavage, and M6P tagging.'
    },
    es: {
      simple: 'El aparato de Golgi es la central postal de Cells at Work! cruzada con taller de tuneo sobre una pila de tortitas. Estampa brújulas de azúcar al estilo One Piece en las proteínas y las despacha sin pérdida.',
      story: 'Las [[vesículas|vesicle]] cargadas del RE rugoso atracan en la entrada cis de esta pila curvada de cisternas, descargando [[proteínas|protein]] a medio vestir y lípidos frescos como carrocerías entrando al taller.\n\nPiso tras piso hacia la salida, maestros artesanos podan y bordan árboles de azúcar —estampando sellos de peligro M6P para las cuchillas de los [[lisosomas|lysosome]] o puliendo antenas del [[glucocálix|glycocalyx]]— hasta lanzar cápsulas clasificadas por microtúbulos rumbo a la [[membrana plasmática|plasma-membrane]].',
      blueprint: 'Rol: Taller de glicosilación final, síntesis de esfingolípidos y central clasificadora · De: [[Vesículas|vesicle]] COPII procedentes del [[RE rugoso|rough-er]] y [[RE liso|smooth-er]] · Dentro: Cisternas polarizadas cis → media → trans (pH 6.7 → 6.0) remodelan glicanos y clasifican cargas · Hacia: Envía [[vesículas|vesicle]] a [[lisosomas|lysosome]], [[membrana plasmática|plasma-membrane]] y exterior; retorna residentes al RE vía COPI',
      scientific: 'Pila polarizada de 4–8 cisternas discoideas aplanadas (1–3 µm Ø, luz de 20–30 nm) posicionada junto al centrosoma por golginas y dineína, subdividida en red cis-Golgi (CGN), cisternas cis/media/trans y red trans-Golgi (TGN). Presenta gradiente luminal ácido mantenido por V-ATPasa (pH ~6.7 a ~6.0) donde ocurren remodelación de N-glicanos, O-glicosilación, síntesis de esfingomielina, corte proteolítico por furina y marcaje con manosa-6-fosfato.'
    }
  },
  'vesicle': {
    en: {
      simple: 'A vesicle is a Dragon Ball Z Capsule Corp pod or Pokéball pinched off one membrane to ferry touchy cargo safely to another. Matching SNARE Velcro zippers guarantee it only pops open at the right dock.',
      story: 'Curved clathrin cages grab a patch of [[Golgi|golgi]] or surface skin and pinch off a sealed [[phospholipid|phospholipid]] Capsule Corp bubble fifty to a hundred nanometers wide, keeping caustic enzymes or hormones safely quarantined from the [[cytosol|cytosol]]. Hitched to a two-legged walker striding down a [[microtubule|microtubule]], the pod checks Rab address tags until coiled SNARE zippers twist tight and pop both walls into one—emptying cargo into a [[lysosome|lysosome]] or outside.',
      blueprint: 'Role: Membrane-bounded courier packet for selective inter-organelle and exocytic/endocytic transport · From: Pinched off from [[rough ER|rough-er]] (COPII), [[Golgi|golgi]] (COPI/clathrin), or [[plasma membrane|plasma-membrane]] (endocytosis) · Inside: [[Phospholipid|phospholipid]] bilayer encloses soluble cargo and displays Rab GTPase + v-SNARE address tags · To: Hauled by [[motor proteins|motor-protein]] on [[microtubules|microtubule]] to fuse with target t-SNARE membranes',
      scientific: 'Spherical transport organelle, 50–100 nm diameter (~10,000–30,000 phospholipids per bilayer), sculpted by coat complexes: COPII (Sar1, Sec23/24, Sec13/31; ER→Golgi), COPI (Arf1, coatomer; retrograde), or clathrin triskelions + AP1/AP2 + dynamin GTPase scission (TGN/endocytosis). Target specificity governed by >60 human Rab GTPases and tethering complexes, culminating in 4-helix trans-SNAREpin zippering (~65 kBT) driving hemifusion and pore opening.'
    },
    es: {
      simple: 'Una vesícula es una cápsula de Capsule Corp de Dragon Ball Z o Pokébola pellizcada de una membrana para llevar carga delicada a otra. Sus cierres moleculares garantizan que solo se abra en el puerto exacto.',
      story: 'Jaulas curvas de clatrina pellizcan un parche del [[Golgi|golgi]] o de la fachada hasta soltar una cápsula sellada de [[fosfolípidos|phospholipid]] digna de Capsule Corp, aislando hormonas o ácidos del bullicio del [[citosol|cytosol]]. A hombros de un porteador sobre un [[microtúbulo|microtubule]], comprueba contraseñas Rab al llegar y trenza cremalleras SNARE que funden ambas paredes en una sola, vaciando el envío dentro de un [[lisosoma|lysosome]] o al exterior.',
      blueprint: 'Rol: Paquete membranoso sellado de transporte intracelular, endocítico y secretor · De: Escindida del [[RE rugoso|rough-er]] (COPII), [[Golgi|golgi]] o [[membrana plasmática|plasma-membrane]] (clatrina/dinamina) · Dentro: Bicapa de [[fosfolípidos|phospholipid]] con carga interna y etiquetas de dirección Rab y v-SNARE · Hacia: Viaja con [[proteínas motoras|motor-protein]] por [[microtúbulos|microtubule]] hasta fusionarse con su membrana diana',
      scientific: 'Orgánulo esférico de transporte de 50–100 nm Ø (~10,000–30,000 fosfolípidos), moldeado por cubiertas proteicas COPII (RE→Golgi), COPI (transporte retrógrado) o trisqueliones de clatrina con complejos adaptadores AP1/AP2 y escisión por la GTPasa dinamina. El reconocimiento de destino depende de >60 GTPasas Rab humanas y el ensamblaje en cremallera de cuatro hélices trans-SNARE (~65 kBT) que impulsa la fusión.'
    }
  },
  'mitochondrion': {
    en: {
      simple: 'Mitochondria are Tony Stark Arc Reactors with an anime backstory: ancient bacteria swallowed two billion years ago that now pay rent in Senzu-Bean floods of ATP coins—still keeping their own circular DNA!',
      story: 'Two billion years ago an ancestor cell swallowed an oxygen-breathing bacterium and struck history’s greatest Venom-style symbiote deal: safe housing in exchange for limitless power. Today hundreds of these double-walled reactors cruise the [[cytosol|cytosol]], burning split sugar and [[fatty-acid tails|fatty-acid-tail]] with oxygen.\n\nAlong folded cristae ridges, the [[electron transport chain|electron-transport-chain]] pumps protons behind a dam to spin thousands of [[ATP synthase|atp-synthase]] turbines—flooding the city with ATP while running its own mini-genome and [[ribosomes|ribosome]].',
      blueprint: 'Role: Aerobic bioenergetic power plant, metabolic hub, and apoptotic gatekeeper · From: Pyruvate (from [[glucose|glucose]]), [[fatty-acid tails|fatty-acid-tail]], O₂, ADP + [[phosphate|phosphate]] from [[cytosol|cytosol]] · Inside: Matrix TCA cycle + cristae [[electron transport chain|electron-transport-chain]] build proton-motive force driving [[ATP synthase|atp-synthase]]; retains [[mtDNA|dna]] · To: Exports ~90% of cellular ATP to [[cytosol|cytosol]], plus CO₂, [[water|water]], heme/Fe-S clusters, and heat',
      scientific: 'Double-membrane endosymbiotic organelle (0.5–1 µm wide, 1–5 µm dynamic tubular network undergoing Drp1 fission and Mfn1/2 + OPA1 fusion). Porin-permeable outer membrane (VDAC cutoff ~5 kDa); cardiolipin-rich (~20%) proton-impermeable inner membrane invaginated into cristae via MICOS junctions, maintaining Δp ≈ 180–200 mV (Δψm ≈ −160 mV, ΔpH ≈ −0.8). Matrix houses pyruvate dehydrogenase, β-oxidation, TCA cycle, 55S mitoribosomes, and circular 16,569 bp human mtDNA (37 genes).'
    },
    es: {
      simple: 'Las mitocondrias son reactores Arc de Iron Man con pasado de simbiote: antiguas bacterias tragadas hace dos mil millones de años que pagan alquiler inundando la célula de monedas ATP, ¡aún con su propio ADN!',
      story: 'Hace dos mil millones de años una célula ancestral tragó una bacteria aeróbica y firmó el mejor pacto simbiótico al estilo Venom: techo seguro a cambio de energía infinita. Hoy cientos de estos reactores surcan el [[citosol|cytosol]] quemando piruvato y [[colas de ácidos grasos|fatty-acid-tail]] con oxígeno.\n\nEn sus crestas plegadas, la [[cadena de transporte de electrones|electron-transport-chain]] carga una presa de protones que hace rugir miles de turbinas de [[ATP sintasa|atp-synthase]], regando todo de ATP mientras opera su propio ADN circular y [[ribosomas|ribosome]].',
      blueprint: 'Rol: Central bioenergética aeróbica, nodo metabólico y regulador de apoptosis · De: Piruvato (de [[glucosa|glucose]]), [[colas acilo|fatty-acid-tail]], O₂, ADP y [[fosfato|phosphate]] del [[citosol|cytosol]] · Dentro: Ciclo de Krebs matricial + [[cadena respiratoria|electron-transport-chain]] alimentan la [[ATP sintasa|atp-synthase]]; retiene [[ADN|dna]] propio · Hacia: Exporta ATP al [[citosol|cytosol]], CO₂, [[agua|water]], grupos hemo/Fe-S y calor',
      scientific: 'Orgánulo endosimbiótico de doble membrana (0.5–1 µm Ø, red dinámica de 1–5 µm regulada por fisión Drp1 y fusión Mfn1/2-OPA1). Membrana externa permeable por porinas VDAC (<5 kDa); membrana interna rica en cardiolipina (~20 %) plegada en crestas por complejos MICOS, sosteniendo una fuerza protón-motriz Δp ≈ 180–200 mV (Δψm ≈ −160 mV). La matriz aloja el ciclo del ácido cítrico, β-oxidación, mitorribosomas 55S y ADNmt circular humano de 16,569 pb (37 genes).'
    }
  },
  'atp-synthase': {
    en: {
      simple: 'ATP synthase is a microscopic Beyblade hydroelectric turbine spinning at 9,000 RPM on rushing protons. Every spin mechanically slams spent ADP and phosphate back into a fresh ATP coin.',
      story: 'Parked in twin rows along [[mitochondrion|mitochondrion]] cristae ridges, this fifteen-nanometer dynamo cashes in the proton dam built by the [[electron transport chain|electron-transport-chain]]. As [[hydrogen|atom-h]] protons stampede through its lower carousel like a Beyblade rip-cord, the central shaft spins over a hundred turns a second—camming three upper jaws shut to mint ADP plus [[phosphate|phosphate]] into ATP for every [[motor protein|motor-protein]].',
      blueprint: 'Role: Chemiosmotic rotary nanomachine converting proton-motive force into ATP · From: Transmembrane H⁺ gradient from [[electron transport chain|electron-transport-chain]], plus matrix ADP, [[phosphate|phosphate]], and [[Mg²⁺|atom-mg]] · Inside: Proton flow spins F₀ c₈-ring + γ-stalk (~100–150 rev/s), driving 3-state binding-change catalysis in F₁ α₃β₃ head · To: Releases 3 ATP per 360° turn for export across [[mitochondrion|mitochondrion]] to [[cytosol|cytosol]]',
      scientific: 'F₁F₀-ATPase rotary motor (~600 kDa monomer, ~15 nm tall × 10 nm wide; forms V-shaped ~86° crista-curving dimers in mammalian mitochondria; bovine F₁ PDB 1BMF). Membrane-embedded F₀ c₈-ring (in vertebrates) translocates 8 H⁺ per full 360° rotation of the asymmetric central γδε stalk inside the hexameric F₁ (αβ)₃ stator, driving Open → Loose → Tight conformational synthesis of 3 Mg-ATP per revolution (~2.67 H⁺/ATP; near ~90% thermodynamic efficiency).'
    },
    es: {
      simple: 'La ATP sintasa es una turbina estilo Beyblade que gira a nueve mil revoluciones por minuto impulsada por protones. Cada vuelta prensa mecánicamente ADP gastado y fosfato en una moneda nueva de ATP.',
      story: 'Alineada en filas dobles sobre las crestas de la [[mitocondria|mitochondrion]], esta dinamo cobra la presa levantada por la [[cadena de transporte de electrones|electron-transport-chain]]. Cuando los iones de [[hidrógeno|atom-h]] tiran de su carrusel como cuerda de Beyblade, el eje gira a más de cien vueltas por segundo y obliga al cabezal a prensar ADP y [[fosfato|phosphate]] en ATP fresco para cada [[proteína motora|motor-protein]].',
      blueprint: 'Rol: Nanomotor rotatorio quimiosmótico que transforma flujo de protones en ATP · De: Gradiente de H⁺ de la [[cadena respiratoria|electron-transport-chain]], ADP, [[fosfato|phosphate]] y [[magnesio|atom-mg]] · Dentro: El giro del anillo c₈ en F₀ rota el tallo γ dentro del cabezal F₁ (αβ)₃ a >100 rev/s · Hacia: Sintetiza 3 ATP por vuelta completa para abastecer a la [[mitocondria|mitochondrion]] y al [[citosol|cytosol]]',
      scientific: 'Complejo motor rotatorio F₁F₀-ATPasa (~600 kDa por monómero, ~15 nm de alto; forma dímeros en V a ~86° que curvan las crestas mitocondriales; F₁ bovina PDB 1BMF). El anillo transmembrana c₈ de mamíferos conduce 8 H⁺ por rotación de 360° del tallo asimétrico γδε dentro del estator catalítico (αβ)₃, induciendo el ciclo conformacional Abierto → Laxo → Tensado que rinde 3 Mg-ATP por vuelta (razón estequiométrica 2.67 H⁺/ATP).'
    }
  },
  'lysosome': {
    en: {
      simple: 'A lysosome practices Fullmetal Alchemist Equivalent Exchange with Pac-Man’s appetite and WALL-E’s compactor: a sealed acid stomach of forty enzyme scissors that melts cellular trash and germs into brand-new bricks.',
      story: 'Even hero nanomachines eventually crack, and without a WALL-E demolition crew the city would choke on its own scrap. Hydrolase blades arrive in [[vesicles|vesicle]] from the [[Golgi apparatus|golgi]], while ATP-burning proton pumps sour this Pac-Man sphere a hundred times more acidic than the [[cytosol|cytosol]].\n\nSwallowed germs and retired organelles fuse inside for pure Equivalent Exchange—getting chopped into clean [[amino acids|amino-acid]], [[glucose|glucose]], and fats—and if the bag ever leaks, neutral cytoplasm puts those acid blades straight to sleep so they cannot eat the city.',
      blueprint: 'Role: Acidic terminal digestive and nutrient-recycling organelle; mTORC1 nutrient-sensing dock · From: M6P-tagged hydrolases from [[Golgi|golgi]], endocytic [[vesicles|vesicle]], autophagosomes, and cytosolic ATP · Inside: V-ATPase maintains pH 4.5–5.0 while ~50–60 acid hydrolases cleave proteins, lipids, nucleic acids, and glycans · To: Exports salvaged [[amino acids|amino-acid]], [[glucose|glucose]], and [[cholesterol|cholesterol]] via permeases back to [[cytosol|cytosol]]',
      scientific: 'Single-membrane acidic organelle (0.1–1.2 µm diameter; inner leaflet shielded against autodigestion by heavily glycosylated LAMP1/LAMP2 glycocalyx). Vacuolar H⁺-ATPase (V-ATPase) hydrolyzes ATP to maintain luminal pH 4.5–5.0 (100–300× higher [H⁺] than pH 7.2 cytosol), activating ~60 cathepsin proteases, lipases, nucleases, and glycosidases while serving as the cytosolic surface platform for Ragulator–mTORC1 metabolic signaling.'
    },
    es: {
      simple: 'El lisosoma aplica el Intercambio Equivalente de Fullmetal Alchemist con el hambre de Pac-Man y la prensa de WALL-E: un estómago ácido con cuarenta tijeras químicas que funde basura y microbios en ladrillos limpios.',
      story: 'Hasta las mejores máquinas se rompen, y sin cuadrilla digna de WALL-E la chatarra sepultaría viva a la ciudad. Cuchillas nuevas llegan desde el [[aparato de Golgi|golgi]] en [[vesículas|vesicle]], mientras bombas en su pared queman ATP para volver esta esfera cien veces más ácida que el [[citosol|cytosol]].\n\nInvasores y orgánulos jubilados entran en puro Intercambio Equivalente hasta volverse [[aminoácidos|amino-acid]], [[glucosa|glucose]] y grasas limpias, con seguro antidesastres: si la bolsa se pincha, el pH neutro externo duerme al instante las cuchillas.',
      blueprint: 'Rol: Planta digestiva ácida de reciclaje molecular y plataforma sensora mTORC1 · De: Hidrolasas del [[Golgi|golgi]], [[vesículas|vesicle]] endocíticas, autofagosomas y ATP citosólico · Dentro: Bombas V-ATPasa fijan pH 4.5–5.0 activando ~60 hidrolasas ácidas tras un escudo de glicoproteínas LAMP · Hacia: Devuelve [[aminoácidos|amino-acid]], [[glucosa|glucose]] y [[colesterol|cholesterol]] al [[citosol|cytosol]]',
      scientific: 'Orgánulo de membrana simple (0.1–1.2 µm Ø) protegido en su cara luminal contra la autodigestión por un denso glucocálix de proteínas LAMP1/LAMP2. La H⁺-ATPasa vacuolar (V-ATPasa) mantiene un pH luminal de 4.5–5.0 ([H⁺] >100× superior al citosol pH 7.2) óptimo para ~60 catepsinas, lipasas, nucleasas y glicosidasas, mientras su cara citosólica aloja el complejo sensor nutricional Ragulator–mTORC1.'
    }
  },
  'centrosome': {
    en: {
      simple: 'The centrosome is the cell’s Spider-Verse Grand Central hub parked beside the nucleus, firing microtubule monorails in every direction. Before mitosis, it clones itself into twin tug-of-war poles.',
      story: 'Next to the [[nucleus|nucleus]] sits Spider-Society HQ: two [[centrioles|centriole]] locked at right angles inside a protein cloud studded with gamma-tubulin launch rings.\n\nThose rings snatch tubulin from the [[cytosol|cytosol]] to fire [[microtubules|microtubule]] outward across town—giving inward walkers one downtown pin to cluster the [[Golgi apparatus|golgi]], then splitting into twin poles at mitosis to reel sister chromosomes apart.',
      blueprint: 'Role: Primary microtubule-organizing center (MTOC) and mitotic spindle pole · From: [[Tubulin|tubulin]] dimers, γ-tubulin, pericentrin/CEP proteins, and ATP/GTP from [[cytosol|cytosol]] · Inside: Orthogonal mother–daughter [[centriole|centriole]] pair embedded in pericentriolar material (PCM) bearing γ-TuRC nucleating rings · To: Nucleates minus-end-anchored [[microtubules|microtubule]] and templates the [[primary cilium|cilium]]',
      scientific: 'Membraneless organelle (~1 µm diameter) comprising an orthogonal pair of 9-triplet microtubule centrioles (mother centriole bearing distal/subdistal appendages, daughter centriole) surrounded by phase-separated pericentriolar material (PCM: pericentrin, CDK5RAP2/CEP215, CEP192). Recruits ~2.2 MDa γ-tubulin ring complexes (γ-TuRC, 14-spoke template) to cap microtubule (−) ends; duplicates once per cell cycle in S phase under PLK4/SAS-6 control.'
    },
    es: {
      simple: 'El centrosoma es la estación central del Spider-Verso aparcada junto al núcleo, desde donde parten los monorraíles celulares. Antes de la mitosis se clona para formar los dos polos que reparten el ADN.',
      story: 'Al costado del [[núcleo|nucleus]] opera el cuartel central ferroviario: dos barriles de [[centriolos|centriole]] en ángulo recto dentro de una nube sembrada de anillos lanzadores.\n\nEsos moldes pescan tubulina del [[citosol|cytosol]] y tienden [[microtúbulos|microtubule]] hacia todos los barrios, reuniendo en el centro al [[aparato de Golgi|golgi]] y dividiéndose en dos polos opuestos cuando toca repartir los cromosomas.',
      blueprint: 'Rol: Centro organizador principal de microtúbulos (MTOC) y polo del huso mitótico · De: Dímeros de [[tubulina|tubulin]], γ-tubulina y proteínas pericentriolares del [[citosol|cytosol]] · Dentro: Par ortogonal de [[centriolos|centriole]] en matriz pericentriolar con anillos nucleadores γ-TuRC · Hacia: Ancla los extremos menos de los [[microtúbulos|microtubule]] y origina el cuerpo basal del [[cilio primario|cilium]]',
      scientific: 'Orgánulo sin membrana (~1 µm Ø) constituido por un par ortogonal de centriolos (madre con apéndices distales/subdistales e hija) inmersos en material pericentriolar condensado (pericentrina, CEP192, CEP215). Ancla complejos anulares de γ-tubulina (γ-TuRC, ~2.2 MDa) que nuclean y sellan el extremo (−) de los microtúbulos; se duplica exactamente una vez por ciclo celular en fase S bajo regulación de la quinasa PLK4 y SAS-6.'
    }
  },
  'centriole': {
    en: {
      simple: 'A centriole is a nine-bladed Gatling-barrel pinwheel built from twenty-seven fused microtubule pipes. It anchors the centrosome hub and marches to the roof to sprout the cell’s radar antenna.',
      story: 'Around a nine-spoked cartwheel hub, twenty-seven [[tubulin|tubulin]] pipes fuse three-by-three into a Gatling-gun barrel tough enough to survive mitosis after mitosis. After running traffic inside the [[centrosome|centrosome]], the veteran mother barrel moonlights like a Transformer: docking under the [[plasma membrane|plasma-membrane]] to sprout the [[primary cilium|cilium]] radar spire.',
      blueprint: 'Role: Ninefold-symmetric structural core of the [[centrosome|centrosome]] and basal body of [[cilia|cilium]] · From: SAS-6 cartwheel + α/β/δ/ε-[[tubulin|tubulin]] assembled in [[cytosol|cytosol]] · Inside: Nine skewed A-B-C [[microtubule|microtubule]] blades arranged in a 250 × 500 nm pinwheel barrel · To: Organizes pericentriolar cloud in [[centrosome|centrosome]] or templates axoneme of [[primary cilium|cilium]]',
      scientific: 'Chiral ninefold-symmetric cylindrical structure (~250 nm diameter × 450–500 nm length) composed of nine microtubule triplets: a complete 13-protofilament A-tubule fused sequentially to incomplete 10-protofilament B- and C-tubules, nucleated around a proximal SAS-6 homodimeric 9-spoked cartwheel and stabilized against depolymerization by polyglutamylation and inner scaffold proteins (POC1B, POC5, centrin).'
    },
    es: {
      simple: 'El centriolo es un barril giratorio de nueve aspas triples —como cañón Gatling— hecho con veintisiete tubos soldados. Forma el corazón del centrosoma y sube al techo para alzar la antena celular.',
      story: 'Sobre un eje de nueve radios, veintisiete tubos de [[tubulina|tubulin]] se sueldan de tres en tres en un tambor estilo Gatling que resiste división tras división intacto. Además de mandar en el [[centrosoma|centrosome]], el barril veterano se transforma al descansar la célula: atraca bajo la [[membrana plasmática|plasma-membrane]] y despliega la antena del [[cilio primario|cilium]].',
      blueprint: 'Rol: Núcleo cilíndrico de simetría 9× del [[centrosoma|centrosome]] y cuerpo basal ciliar · De: Rueda central SAS-6 y dímeros de [[tubulina|tubulin]] reclutados del [[citosol|cytosol]] · Dentro: Nueve tripletes A-B-C de [[microtúbulos|microtubule]] dispuestos en molinete de 250 × 500 nm · Hacia: Estructura el [[centrosoma|centrosome]] o proyecta el axonema del [[cilio primario|cilium]]',
      scientific: 'Cilindro quiral de simetría rotacional C₉ (~250 nm Ø × 450–500 nm de longitud) formado por nueve tripletes de microtúbulos (túbulo A completo de 13 protofilamentos fusionado a túbulos B y C incompletos de 10 protofilamentos), ensamblado sobre un eje proximal en rueda de carro de dímeros SAS-6 y hiperestabilizado frente a la despolimerización por poliglutamilación y armazones internos (centrina, POC5).'
    }
  },
  'cytosol': {
    en: {
      simple: 'Forget empty swimming-pool water—the cytosol is Shibuya Crossing at rush hour in thick boba-tea jelly! Shoulder-to-shoulder enzymes crack sugar for fuel while courier squads and shredders work the open streets.',
      story: 'Ditch the empty-balloon textbook myth: in real cytosol, [[proteins|protein]] and ribosomes pack nanometers apart in jostling [[water|water]] like Tokyo rush hour.\n\nRight out in this Cells at Work! street market, ten enzymes karate-chop [[glucose|glucose]] into pyruvate for mitochondria, [[tRNA|trna]] couriers weave bricks to printers, and [[proteasomes|proteasome]] shred tagged junk before alleys jam.',
      blueprint: 'Role: Crowded aqueous reaction medium, glycolytic workshop, and inter-organelle transit plaza · From: Nutrients/ions via [[plasma membrane|plasma-membrane]], ATP from [[mitochondria|mitochondrion]], and salvaged bricks from [[lysosomes|lysosome]] · Inside: 70% [[water|water]] + ~200–300 mg/mL [[proteins|protein]] run glycolysis, pentose-P, fatty-acid synthesis, translation, and [[proteasome|proteasome]] quality control · To: Feeds pyruvate/NADH to [[mitochondria|mitochondrion]], precursors to ER/[[nucleus|nucleus]], and building blocks to [[cytoskeleton|cytoskeleton]]',
      scientific: 'Intracellular aqueous phase excluding membrane-bounded organelle lumens (~50–55% of total animal cell volume, pH 7.2 ± 0.1). Ionic composition strictly maintained opposite extracellular fluid: [K⁺] ≈ 140 mM, [Na⁺] ≈ 10 mM, [Mg²⁺]free ≈ 0.5–1 mM, [Ca²⁺]resting ≈ 50–100 nM, [Cl⁻] ≈ 5–15 mM; macromolecular crowding (~20–30% v/v, viscosity ~2–5× pure water for small solutes) accelerates association equilibria and phase separation.'
    },
    es: {
      simple: 'Olvida la piscina vacía de los dibujos escolares: el citosol es el cruce de Shibuya en hora punta dentro de gelatina espesa. En sus calles abiertas se parte el azúcar y patrullan repartidores y trituradoras.',
      story: 'Nada de orgánulos flotando en agua vacía: aquí millones de [[proteínas|protein]] y ribosomas se codean a nanómetros entre moléculas de [[agua|water]] como bazar de Cells at Work! en hora punta.\n\nEn plena calle, diez enzimas parten la [[glucosa|glucose]] en piruvato para las mitocondrias, mensajeros [[ARNt|trna]] zigzaguean con ladrillos y patrullas de [[proteasomas|proteasome]] trituran chatarra antes de que bloquee el paso.',
      blueprint: 'Rol: Medio reactivo macromolecular, taller glucolítico y plaza central de intercambio · De: Nutrientes por la [[membrana plasmática|plasma-membrane]], ATP de [[mitocondrias|mitochondrion]] y reciclaje de [[lisosomas|lysosome]] · Dentro: ~70 % [[agua|water]] y ~250 mg/mL de [[proteínas|protein]] ejecutan glucólisis, traducción y limpieza por [[proteasomas|proteasome]] · Hacia: Suministra piruvato a [[mitocondrias|mitochondrion]], precursores al [[núcleo|nucleus]]/RE y ladrillos al [[citoesqueleto|cytoskeleton]]',
      scientific: 'Fase acuosa intracelular extraluminal (~50–55 % del volumen celular animal, pH regulado en 7.2 ± 0.1). Composición iónica asimétrica frente al medio extracelular: [K⁺] ≈ 140 mM, [Na⁺] ≈ 10 mM, [Mg²⁺]libre ≈ 0.5–1 mM, [Ca²⁺]reposo ≈ 50–100 nM, [Cl⁻] ≈ 5–15 mM; el hacinamiento macromolecular (20–30 % del volumen ocupado, ~200–300 mg/mL de proteína) acelera las constantes de asociación enzimática.'
    }
  },
  'water': {
    en: {
      simple: 'Water is a Mickey-Mouse-eared boomerang magnet with a negative oxygen chin and two positive hydrogen ears. Because water molecules obsessively clique up together, they bully oils into membranes and fold proteins.',
      story: 'Zipping single-file through [[aquaporin channels|channel-protein]] or born fresh at respiration’s finish line, each bent [[oxygen|atom-o]]-and-two-[[hydrogens|atom-h]] trio swaps billions of hydrogen-bond high-fives per second. Like an exclusive high-school clique refusing to sit with grease, this crowd herds lipids into walls and shoves chains into folded [[proteins|protein]] across the [[cytosol|cytosol]].',
      blueprint: 'Role: Universal polar solvent, hydrophobic-assembly driver, and hydrolytic reactant · From: Osmotic influx via [[aquaporins|channel-protein]] and O₂ reduction in [[electron transport chain|electron-transport-chain]] · Inside: 104.5° bent [[oxygen|atom-o]]–[[hydrogen|atom-h]] dipole forms transient 3D H-bond networks · To: Solvates [[cytosol|cytosol]], drives [[phospholipid|phospholipid]]/[[protein|protein]] folding, and cleaves ATP/polymers in hydrolysis',
      scientific: 'Bent polar triatomic molecule H₂O (18.015 Da, ~0.275 nm van der Waals diameter, O–H covalent length 0.958 Å, H–O–H bond angle 104.45°, dipole moment 1.85 D, bulk concentration ~55.5 M). High dielectric constant (εr ≈ 78.5 at 25 °C) screens electrostatic ion pairs while dynamic tetrahedral H-bonding (~3.4 H-bonds/molecule in liquid, picosecond reorganization) generates the entropic hydrophobic effect.'
    },
    es: {
      simple: 'El agua es un pequeño imán con silueta de Mickey Mouse: barbilla negativa de oxígeno y dos orejas positivas de hidrógeno. Como sus moléculas solo quieren abrazarse entre sí, acorralan al aceite en membranas y pliegan proteínas.',
      story: 'Entrando en fila VIP por las [[acuaporinas|channel-protein]] o recién horneada al final de la respiración, cada trío de un [[oxígeno|atom-o]] y dos [[hidrógenos|atom-h]] cruza miles de millones de apretones por segundo. Como club exclusivo que rehúye la grasa, esta multitud empuja a los lípidos a formar murallas y obliga a plegarse a las [[proteínas|protein]] por todo el [[citosol|cytosol]].',
      blueprint: 'Rol: Disolvente polar universal, motor del efecto hidrofóbico y reactivo de hidrólisis · De: Entrada osmótica por [[canales acuaporina|channel-protein]] y reducción de O₂ en [[mitocondrias|mitochondrion]] · Dentro: Dipolo angular (104.5°) de [[oxígeno|atom-o]] e [[hidrógenos|atom-h]] en red dinámica de puentes de H · Hacia: Hidrata el [[citosol|cytosol]], pliega [[proteínas|protein]]/[[fosfolípidos|phospholipid]] y rompe enlaces en hidrólisis',
      scientific: 'Molécula triatómica polar angular H₂O (18.015 Da, diámetro van der Waals ~0.275 nm, enlace O–H de 0.958 Å, ángulo H–O–H de 104.45°, momento dipolar 1.85 D, concentración molar pura 55.5 M). Su elevada constante dieléctrica (εr ≈ 78.5 a 25 °C) apantalla iones mientras su red tetraédrica fluctuante (~3.4 puentes de H/molécula, vida media en picosegundos) origina la fuerza entrópica del efecto hidrofóbico.'
    }
  },
  'proteasome': {
    en: {
      simple: 'The proteasome is a Fargo-grade barrel woodchipper with VIP bouncer lids on both ends. Only broken or expired proteins wearing a ubiquitin "condemned" chain get unraveled, fed inside, and chopped into reusable bricks.',
      story: 'Loose razor blades in the [[cytosol|cytosol]] would shred innocent bystanders, so this woodchipper locks its blades inside a four-ring barrel guarded at both ends by smart 19S bouncer lids. When a busted [[protein|protein]] arrives wearing a ubiquitin bounty chain, the lid snips off and recycles the tags, burns ATP to slurp and unravel the victim like a ramen [[polypeptide|polypeptide]] noodle, and spits out clean [[amino acids|amino-acid]] for [[ribosomes|ribosome]].',
      blueprint: 'Role: ATP-dependent selective shredder of [[ubiquitin|ubiquitin]]-tagged cytosolic and nuclear proteins · From: Polyubiquitinated misfolded/short-lived [[proteins|protein]] + ATP from [[mitochondria|mitochondrion]] · Inside: 19S AAA+ ATPase cap deubiquitinates and unfolds substrate into 20S proteolytic core barrel · To: Releases 3–25 aa oligopeptides cleaved to free [[amino acids|amino-acid]] in [[cytosol|cytosol]] and recycles [[ubiquitin|ubiquitin]]',
      scientific: '26S cylindrical protease complex (~2.5 MDa, ~45 nm × 20 nm; human 26S cryo-EM PDB 5GJR): central 20S core particle (~700 kDa, stacked α₇β₇β₇α₇ rings) capped by one or two 19S regulatory particles (~900 kDa, Rpn11 deubiquitinase + heterohexameric Rpt1–6 AAA+ ATPase unfoldase ring). Catalytic Thr1 nucleophiles on β1 (caspase-like), β2 (trypsin-like), and β5 (chymotrypsin-like) subunits cleave substrates inside the sequestered chamber.'
    },
    es: {
      simple: 'El proteasoma es una trituradora cilíndrica digna de Fargo con porteros VIP en ambas tapas. Solo las proteínas averiadas o caducadas con collar de ubiquitina son desenrolladas como fideos y picadas en piezas reutilizables.',
      story: 'Dejar cuchillas sueltas por el [[citosol|cytosol]] sería una carnicería, así que este barril blindado de cuatro anillos encierra sus filos bajo dos tapas con escáner 19S. Cuando llega una [[proteína|protein]] marcada con su cadena de ubiquitina, la tapa rescata las etiquetas intactas, quema ATP para sorberla a la fuerza como fideo [[polipeptídico|polypeptide]] hacia el tambor y devuelve [[aminoácidos|amino-acid]] limpios a los [[ribosomas|ribosome]].',
      blueprint: 'Rol: Trituradora selectiva dependiente de ATP de proteínas marcadas con [[ubiquitina|ubiquitin]] · De: [[Proteínas|protein]] poliubiquitinadas del [[citosol|cytosol]], [[núcleo|nucleus]] o RE + ATP · Dentro: Tapa 19S recicla [[ubiquitina|ubiquitin]] y despliega la cadena hacia las cuchillas β del barril 20S · Hacia: Libera péptidos cortos convertidos en [[aminoácidos|amino-acid]] frescos para los [[ribosomas|ribosome]]',
      scientific: 'Complejo proteolítico cilíndrico 26S (~2.5 MDa, ~45 × 20 nm; PDB 5GJR): núcleo catalítico 20S (~700 kDa, cuatro anillos apilados α₇β₇β₇α₇) flanqueado por una o dos partículas reguladoras 19S (~900 kDa, desubiquitinasa Rpn11 y anillo desplegador hexamérico AAA+ Rpt1–6). Los residuos Thr1 N-terminales de las subunidades β1, β2 y β5 hidrolizan enlaces peptídicos dentro de la cámara aislada.'
    }
  },
  'motor-protein': {
    en: {
      simple: 'Motor proteins are tiny two-legged AT-AT walkers in sneakers that hike hand-over-hand down microtubule highways hauling giant cargo boulders. Kinesin marches outbound to the border; dynein treks inbound downtown.',
      story: 'In jam-packed jelly, a fat [[vesicle|vesicle]] or [[mitochondrion|mitochondrion]] would take hours to drift across town—so the city hires two-footed walkers carrying Atlas-sized boulders overhead. Spending one ATP coin per eight-nanometer stride along a [[microtubule|microtubule]], kinesin struts toward the [[plasma membrane|plasma-membrane]] while heavy-duty dynein hikes back toward the [[centrosome|centrosome]].',
      blueprint: 'Role: Mechanochemical walking porters converting ATP hydrolysis into directed cargo transport · From: Synthesized as [[proteins|protein]] in [[cytosol|cytosol]]; fueled by ATP from [[mitochondria|mitochondrion]] · Inside: Twin motor heads bind/release [[tubulin|tubulin]] dimers along [[microtubules|microtubule]] in 8 nm hand-over-hand steps · To: Kinesins haul [[vesicles|vesicle]]/organelles to (+) periphery; dynein hauls cargo to (−) [[centrosome|centrosome]] and beats [[cilia|cilium]]',
      scientific: 'Microtubule-associated mechanochemical ATPases (~60–80 nm length): conventional kinesin-1 (~380 kDa heterotetramer: 2 heavy chains + 2 light chains; motor domain PDB 1BG2) steps toward (+) ends with 8.2 nm step size (1 αβ-tubulin dimer), ~0.8–1 µm/s velocity, and ~5–7 pN stall force at 1 ATP/step; cytoplasmic dynein-1 (~1.4 MDa AAA+ ring dimer + dynactin adaptor) steps processively toward (−) ends.'
    },
    es: {
      simple: 'Las proteínas motoras son caminantes bípedos al estilo AT-AT de Star Wars en zapatillas que recorren las autopistas celulares cargando bultos gigantes. La kinesina va hacia las afueras y la dineína vuelve al centro.',
      story: 'En el atasco perpetuo del [[citosol|cytosol]], una [[vesícula|vesicle]] gigante tardaría horas a la deriva, así que entran en acción porteadores de dos pies dignos de Atlas. Quemando un ATP por cada zancada exacta sobre un [[microtúbulo|microtubule]], la kinesina camina decidida hacia la [[membrana plasmática|plasma-membrane]] mientras la dineína regresa remolcando carga al [[centrosoma|centrosome]].',
      blueprint: 'Rol: Porteadores mecanoquímicos que transforman ATP en transporte direccional sobre rieles · De: [[Proteínas|protein]] citosólicas alimentadas con ATP de las [[mitocondrias|mitochondrion]] · Dentro: Dos cabezas motoras pisan dímeros de [[tubulina|tubulin]] en pasos alternos de 8 nm sobre [[microtúbulos|microtubule]] · Hacia: Kinesina lleva [[vesículas|vesicle]] hacia la periferia (+); dineína retorna cargas al [[centrosoma|centrosome]] (−)',
      scientific: 'ATPasas mecanoquímicas asociadas a microtúbulos (60–80 nm de largo): la kinesina-1 convencional (~380 kDa, heterotetrámero 2 cadenas pesadas + 2 ligeras; dominio motor PDB 1BG2) avanza hacia el extremo (+) con pasos discretos de 8.2 nm (1 dímero αβ-tubulina), velocidad ~0.8–1 µm/s y fuerza de bloqueo ~5–7 pN consumiendo 1 ATP/paso; la dineína citoplasmática-1 (~1.4 MDa con complejo dinactina) camina hacia el extremo (−).'
    }
  },
  'electron-transport-chain': {
    en: {
      simple: 'The electron transport chain is a four-stage Donkey Kong barrel-brigade built into the inner mitochondrial wall. Instead of blowing food up in one Michael Bay fireball, it steps electrons down a controlled staircase to pump protons behind an electrical dam.',
      story: 'Burn [[glucose|glucose]] in open air and you get one useless Michael Bay fireball; inside the [[mitochondrion|mitochondrion]], four iron-core super-complexes tame that blast into a four-step hydroelectric staircase. High-energy electrons hop from Complex I to IV until [[oxygen|atom-o]] catches them at the bottom as peaceful [[water|water]]—while every step shoves protons behind the dam spinning [[ATP synthase|atp-synthase]].',
      blueprint: 'Role: Redox-coupled proton-pumping relay generating the mitochondrial electrochemical gradient · From: Matrix NADH and FADH₂ (from [[glucose|glucose]]/[[fatty-acid|fatty-acid-tail]] oxidation) + inhaled O₂ · Inside: Complexes I, II, III, and IV embedded in [[phospholipid|phospholipid]] cristae shuttle e⁻ via ubiquinone/cytochrome c and pump H⁺ · To: Reduces O₂ to [[water|water]] and drives H⁺ return through [[ATP synthase|atp-synthase]]',
      scientific: 'Respirasome supercomplex (I₁III₂IV₁) in the inner mitochondrial membrane (~20 nm transmembrane height): Complex I (NADH:ubiquinone oxidoreductase, 45 subunits, ~980 kDa, pumps 4 H⁺/2 e⁻), Complex II (succinate dehydrogenase, 0 H⁺), Complex III₂ (cytochrome bc₁ dimer, Q-cycle translocates 4 H⁺/2 e⁻), and Complex IV (cytochrome c oxidase, CuA/heme a/heme a₃–CuB, pumps 2 H⁺/2 e⁻ and reduces ½ O₂ + 2 H⁺ → H₂O; ΔE°′ = +1.14 V from NADH to O₂, pumping 10 H⁺ per NADH).'
    },
    es: {
      simple: 'La cadena de transporte de electrones es un relevo de cuatro colosos en la pared mitocondrial, sin explosiones a lo Michael Bay. Baja electrones escalón a escalón para bombear protones detrás de una presa eléctrica de alto voltaje.',
      story: 'Quemar [[glucosa|glucose]] de golpe daría un fogonazo digno de Michael Bay y cero provecho; aquí cuatro supercomplejos de [[proteína|protein]] con núcleos de hierro domestican ese fuego en cuatro peldaños. Los electrones bajan del Complejo I al IV hasta que el [[oxígeno|atom-o]] los recoge al fondo, bombeando protones a través de la muralla de [[fosfolípidos|phospholipid]] para hacer rugir la [[ATP sintasa|atp-synthase]].',
      blueprint: 'Rol: Relevo redox bombeador de protones que carga la presa electroquímica mitocondrial · De: NADH y FADH₂ matriciales (de [[glucosa|glucose]] y [[ácidos grasos|fatty-acid-tail]]) + O₂ respirado · Dentro: Complejos I–IV en la bicapa de [[fosfolípidos|phospholipid]] transfieren e⁻ por ubiquinona/citocromo c y bombean H⁺ · Hacia: Forma [[agua|water]] metabólica e impulsa el giro de la [[ATP sintasa|atp-synthase]]',
      scientific: 'Supercomplejo respirasoma (I₁III₂IV₁) en la membrana mitocondrial interna (~20 nm de altura): Complejo I (NADH:ubiquinona oxidorreductasa, 45 subunidades, ~980 kDa, 4 H⁺/2 e⁻), Complejo II (succinato deshidrogenasa, 0 H⁺), Complejo III₂ (citocromo bc₁, ciclo Q de 4 H⁺/2 e⁻) y Complejo IV (citocromo c oxidasa, centros CuA y hemo a₃–CuB, 2 H⁺/2 e⁻ y reducción ½ O₂ + 2 H⁺ → H₂O; ΔE°′ = +1.14 V desde NADH hasta O₂, bombeando 10 H⁺/NADH).'
    }
  },
  'cilium': {
    en: {
      simple: 'A primary cilium is a Millennium Falcon radar dish poking off the roof of almost every human cell. Packed with spy sensors instead of oars, it sniffs out fluid flow, hormones, and—in your eyes and nose—light and smell.',
      story: 'When a cell takes a break from dividing, its veteran mother [[centriole|centriole]] docks under the [[plasma membrane|plasma-membrane]] and raises a nine-rail tower wrapped in [[phospholipids|phospholipid]] like Bender’s shiny head antenna.\n\nNo ribosomes fit inside, so miniature Snowpiercer supply trains pulled by [[motor proteins|motor-protein]] shuttle [[GPCRs|gpcr]] up and down nonstop—turning one rooftop spire into the city’s master radar dish.',
      blueprint: 'Role: Solitary sensory signaling antenna (primary 9+0) or fluid-propelling oar (motile 9+2) · From: Nucleated by mother [[centriole|centriole]] basal body; receptors hauled in by IFT [[motor proteins|motor-protein]] · Inside: Axoneme of 9 outer [[microtubule|microtubule]] doublets enclosed in specialized [[plasma membrane|plasma-membrane]] · To: Relays Hedgehog, Wnt, mechanical-flow, and [[GPCR|gpcr]] signals back to [[cytosol|cytosol]] and [[nucleus|nucleus]]',
      scientific: 'Hair-like organelle (~250 nm diameter, 2–10 µm length) gated at its base by a Y-link transition zone barrier above the 9-triplet basal body. Non-motile primary cilia feature a 9+0 doublet microtubule axoneme enriched in Hedgehog (Patched/Smoothened), PDGFRα, polycystin-1/2 mechanosensors, and GPCRs maintained by intraflagellar transport trains (IFT-B + kinesin-2 anterograde; IFT-A + dynein-2 retrograde); motile 9+2 cilia beat at 10–30 Hz via outer/inner axonemal dynein arms.'
    },
    es: {
      simple: 'El cilio primario es el radar del Halcón Milenario asomando en la azotea de casi cada célula humana. Repleto de sensores espía en vez de remos, detecta corrientes, hormonas e incluso la luz y los olores.',
      story: 'Cuando la célula aparca la división, su [[centriolo|centriole]] veterano atraca bajo la azotea y levanta nueve pares de [[microtúbulos|microtubule]] enfundados en [[fosfolípidos|phospholipid]], como la antena brillante de Bender en Futurama.\n\nComo arriba no caben ribosomas, mini-trenes estilo Snowpiercer suben y bajan sensores [[GPCR|gpcr]] sin pausa para enviar informes en vivo hasta el [[núcleo|nucleus]].',
      blueprint: 'Rol: Antena sensorial de señalización (9+0 primario) o remo propulsor (9+2 móvil) · De: Cuerpo basal del [[centriolo|centriole]] madre y trenes IFT movidos por [[proteínas motoras|motor-protein]] · Dentro: Axonema de 9 dobletes de [[microtúbulos|microtubule]] envuelto en [[membrana plasmática|plasma-membrane]] selectiva · Hacia: Transmite señales Hedgehog, mecánicas y de [[GPCR|gpcr]] hacia el [[citosol|cytosol]] y el [[núcleo|nucleus]]',
      scientific: 'Orgánulo apical (~250 nm Ø, 2–10 µm de largo) aislado en su base por los enlaces en Y de la zona de transición sobre el cuerpo basal. El cilio primario sensorial posee un axonema 9+0 carente de dineína axonémica, concentrando receptores Hedgehog (Patched/Smoothened), policistinas mecanosensoras y GPCR mantenidos por transporte intraflagelar (IFT-B con kinesina-2 anterógrada; IFT-A con dineína-2 retrógrada); los cilios móviles 9+2 baten a 10–30 Hz.'
    }
  },
  'gpcr': {
    en: {
      simple: 'A GPCR is a James Bond seven-loop laser-tripwire doorbell woven back and forth through the cell membrane. When adrenaline, dopamine, a flavor, or a scent taps outside, its inner tail tags a relay team indoors.',
      story: 'Threading seven [[alpha-helices|alpha-helix]] through the [[phospholipids|phospholipid]] of the [[plasma membrane|plasma-membrane]], this 007 spy sensor hears outside gossip without ever unlocking the front door to strangers. The instant adrenaline, odor, or a photon hits its outer cradle, the helices twist and tag a waiting G-[[protein|protein]] in the [[cytosol|cytosol]]—firing an indoor alarm cascade in milliseconds.',
      blueprint: 'Role: Seven-transmembrane transmembrane signal transducer converting extracellular cues into intracellular cascades · From: Folded in [[rough ER|rough-er]], glycosylated in [[Golgi|golgi]], stationed in [[plasma membrane|plasma-membrane]] or [[cilium|cilium]] · Inside: Ligand binding shifts 7 [[alpha-helices|alpha-helix]] (TM6 outward tilt), catalyzing GDP→GTP exchange on heterotrimeric Gαβγ [[proteins|protein]] · To: Triggers cAMP, IP₃/Ca²⁺ (from [[smooth ER|smooth-er]]), and kinase cascades; ~35% of clinical drugs target GPCRs',
      scientific: 'Seven-transmembrane (7TM) integral membrane receptor superfamily (~800 human genes, ~40–60 kDa, ~5 nm span; prototypical β₂-adrenergic receptor–Gs complex PDB 3SN6). Agonist binding breaks the cytosolic TM3–TM6 ionic lock (DRY motif), swinging TM6 outward ~14 Å to engage heterotrimeric Gαs/Gαi/Gαq/Gα12/13, triggering adenylyl cyclase or phospholipase Cβ amplification until GRK phosphorylation and β-arrestin recruitment drive clathrin endocytosis.'
    },
    es: {
      simple: 'Un receptor GPCR es un timbre espía digno de James Bond cosido siete veces a través de la membrana. Cuando adrenalina, dopamina, un sabor o un aroma toca afuera, su cola interna despierta un equipo de relevo adentro.',
      story: 'Enhebrando siete [[hélices α|alpha-helix]] entre los [[fosfolípidos|phospholipid]] de la [[membrana plasmática|plasma-membrane]], este centinela 007 capta chismes externos sin abrir jamás la puerta a extraños. Apenas encaja adrenalina, un aroma o un fotón afuera, sus hélices giran y dan el relevo a una [[proteína|protein]] G en el [[citosol|cytosol]], disparando una alarma amplificada en milisegundos.',
      blueprint: 'Rol: Transductor de membrana de 7 hélices que convierte señales externas en cascadas internas · De: Sintetizado en [[RE rugoso|rough-er]], madurado en [[Golgi|golgi]] y alojado en [[membrana plasmática|plasma-membrane]] o [[cilio|cilium]] · Dentro: La unión del ligando desplaza sus 7 [[hélices α|alpha-helix]] y activa [[proteínas|protein]] G heterotriméricas (GDP→GTP) · Hacia: Dispara segundos mensajeros (AMPc, IP₃/Ca²⁺ del [[RE liso|smooth-er]]); diana de ~35 % de los fármacos',
      scientific: 'Superfamilia de receptores integrales de 7 dominios transmembrana (~800 genes humanos, ~40–60 kDa, ~5 nm; complejo receptor β₂-adrenérgico–Gs PDB 3SN6). El agonista rompe el cierre iónico citosólico TM3–TM6 (motivo DRY), desplazando TM6 ~14 Å para catalizar el intercambio GDP→GTP en subunidades Gα (Gs, Gi, Gq, G12/13) que regulan adenilato ciclasa o fosfolipasa Cβ hasta su desensibilización por quinasas GRK y β-arrestina.'
    }
  },
  'na-k-pump': {
    en: {
      simple: 'The sodium–potassium pump is a SpongeBob bilge-bailer and Pikachu battery charger in one: spending one ATP coin per cycle to boot three sodiums out and pull two potassiums in so the cell never pops—and your neurons can fire.',
      story: 'With no rigid wall, incoming [[water|water]] chasing the crowded [[cytosol|cytosol]] would inflate an animal cell like Harry Potter’s Aunt Marge until it popped. Studded across the [[plasma membrane|plasma-membrane]], millions of pumps burn a full quarter of all [[mitochondria|mitochondrion]] ATP—slapping on a [[phosphate|phosphate]] to boot three Na⁺ out and pull two K⁺ in, keeping volume steady and cocking every brain spark.',
      blueprint: 'Role: Electrogenic P-type ATPase pump maintaining osmotic balance and resting membrane voltage · From: Cytosolic Na⁺ + ATP (from [[mitochondria|mitochondrion]]) and extracellular K⁺ across [[plasma membrane|plasma-membrane]] · Inside: Autophosphorylation at conserved Asp flips E1 ↔ E2 conformations to export 3 Na⁺ and import 2 K⁺ · To: Prevents osmotic lysis, sets Vm ≈ −70 mV, and powers Na⁺-coupled [[glucose|glucose]]/[[amino-acid|amino-acid]] symport',
      scientific: 'Heterodimeric P₂C-type ATPase (~150 kDa, ~10 nm tall; catalytic α-subunit ~110 kDa with 10 TM helices + glycosylated β-subunit ~35 kDa + FXYD regulator; PDB 3KDP). Hydrolyzes 1 Mg-ATP via transient Asp369 acyl-phosphate intermediate per Post–Albers E1/E2 cycle (~100–150 cycles/s) to extrude 3 Na⁺ and import 2 K⁺ against steep gradients ([Na⁺]out 145 mM vs in 10 mM; [K⁺]in 140 mM vs out 4 mM), consuming ~20–30% of whole-body ATP (~60–70% in neurons).'
    },
    es: {
      simple: 'La bomba de sodio–potasio achica sal como Bob Esponja y carga voltaje como Pikachu: gasta una moneda de ATP por ciclo para sacar tres sodios y meter dos potasios, evitando que la célula reviente y encendiendo tus neuronas.',
      story: 'Sin pared rígida, el [[agua|water]] atraída al abarrotado [[citosol|cytosol]] inflaría la célula como a la tía Marge en Harry Potter hasta estallar. Por eso millones de bombas en la [[membrana plasmática|plasma-membrane]] queman la cuarta parte del ATP de las [[mitocondrias|mitochondrion]], estampándose un [[fosfato|phosphate]] para expulsar tres Na⁺, meter dos K⁺ y dejar listo cada impulso cerebral.',
      blueprint: 'Rol: Bomba ATPasa electrogénica que mantiene el equilibrio osmótico y el voltaje de membrana · De: Na⁺ y ATP (de [[mitocondrias|mitochondrion]]) internos + K⁺ extracelular en la [[membrana plasmática|plasma-membrane]] · Dentro: Ciclo conformacional E1 ↔ E2 fosforilado en aspartato expulsa 3 Na⁺ e introduce 2 K⁺ · Hacia: Impide el estallido osmótico, fija −70 mV e impulsa la entrada acoplada de [[glucosa|glucose]] y [[aminoácidos|amino-acid]]',
      scientific: 'ATPasa heterodimérica tipo P₂C (~150 kDa, ~10 nm; subunidad α catalítica de 10 hélices TM ~110 kDa + subunidad β glicosilada ~35 kDa; PDB 3KDP). Hidroliza 1 Mg-ATP formando un intermediario acil-fosfato en Asp369 durante el ciclo Post–Albers (~100–150 ciclos/s) para transportar 3 Na⁺ afuera y 2 K⁺ adentro contra gradiente ([Na⁺]ext 145 mM / int 10 mM; [K⁺]int 140 mM / ext 4 mM), gastando ~25 % del ATP corporal y hasta ~70 % en neuronas.'
    }
  },
  'cell-junction': {
    en: {
      simple: 'Cell junctions are Power Rangers Megazord docking clamps—watertight zippers, Spider-Man web-rivets, and Super Mario warp pipes that lock solo squishy cells into leakproof skin and synchronously beating hearts.',
      story: 'One solo cell is squishy jelly, but Megazord-dock billions together and you build armor-tough skin or a beating heart. Delivered in [[vesicles|vesicle]] to the side [[plasma membrane|plasma-membrane]], three specialist crews lock neighbors tight.\n\nNear the roof, tight junctions Ziploc alleys shut; below, desmosome rivets bolt onto [[intermediate filaments|intermediate-filament]] like Spider-Man webs to share tugs; and hex-pipe gap junctions link [[cytosols|cytosol]] like Super Mario warp pipes so heartbeats flash in sync.',
      blueprint: 'Role: Intercellular sealing, mechanical load-sharing, and direct electrical/metabolic coupling · From: Claudins, cadherins, and connexin [[proteins|protein]] trafficked from [[Golgi|golgi]] to lateral [[plasma membrane|plasma-membrane]] · Inside: Tight junctions seal paracellular space; desmosomes anchor [[intermediate filaments|intermediate-filament]]; gap junctions dock hexameric connexon pores · To: Unites individual [[cells|cell]] into polarized epithelia and synchronous myocardium',
      scientific: 'Tripartite vertebrate junctional complex spanning 10–200 nm lateral membranes: (1) tight junctions (zonula occludens: claudin/occludin strands linked via ZO-1/2/3 to F-actin, blocking paracellular diffusion), (2) adherens junctions & desmosomes (E-cadherin/catenins on F-actin; desmoglein/desmocollin + desmoplakin plaques anchoring 10 nm keratin/desmin intermediate filaments across a ~30 nm cleft), and (3) gap junctions (docked connexin hexamers forming ~1.4 nm pores passing solutes <1 kDa such as Ca²⁺, IP₃, cAMP across a 2–4 nm gap).'
    },
    es: {
      simple: 'Las uniones celulares son los enganches de Megazord de los Power Rangers: cremalleras estancas, remaches arácnidos y tuberías estilo Super Mario que unen células blandas en piel impermeable y corazones sincronizados.',
      story: 'Una célula sola es jalea frágil, pero acoplando miles de millones al estilo Megazord nace una piel blindada o un corazón incansable. Traídas en [[vesículas|vesicle]] a la [[membrana plasmática|plasma-membrane]] lateral, tres brigadas abrochan el barrio.\n\nArriba, uniones estrechas cierran grietas al vacío; en medio, desmosomas amarran [[filamentos intermedios|intermediate-filament]] como redes de Spider-Man para repartir tirones; y abajo, túneles gap unen ambos [[citosoles|cytosol]] como tuberías de Mario para latir a una.',
      blueprint: 'Rol: Sellado epitelial, anclaje mecánico intercelular y acoplamiento eléctrico directo · De: Claudinas, cadherinas y conexinas ([[proteínas|protein]]) enviadas desde el [[Golgi|golgi]] a la [[membrana plasmática|plasma-membrane]] · Dentro: Uniones estrechas sellan intersticios; desmosomas fijan [[filamentos intermedios|intermediate-filament]]; uniones gap abren canales conexones · Hacia: Integra [[células|cell]] individuales en tejidos cohesionados y sincronizados',
      scientific: 'Complejo de unión intercelular vertebrado (10–200 nm): (1) uniones estrechas (zonula occludens: hebras de claudinas y ocludinas ancladas a actina vía ZO-1/2/3 que sellan la vía paracelular), (2) desmosomas (cadherinas desmosómicas desmogleína/desmocolina unidas por desmoplaquina a filamentos intermedios de queratina/desmina a través de ~30 nm) y (3) uniones comunicantes gap (dos conexones hexaméricos enfrentados a 2–4 nm con poro de ~1.4 nm permeable a iones y metabolitos <1 kDa).'
    }
  },
  'peroxisome': {
    en: {
      simple: 'A peroxisome is a Monsters, Inc. "Code 2319!" hazmat sawmill that hacks monster-sized fats down into mitochondria-friendly logs—then uses giant catalase squads to defuse toxic peroxide bleach into plain water on the spot.',
      story: 'Monster-length [[fatty-acid tails|fatty-acid-tail]] too big for mitochondria enter this Code-2319 hazmat room first, getting sawed down with [[oxygen|atom-o]] inside a single [[phospholipid|phospholipid]] wall.\n\nThat chainsawing brews corrosive hydrogen peroxide bleach on the spot—so wall-to-wall catalase enzymes defuse millions of drops per second into harmless [[water|water]] before handing trimmed fuel logs to [[mitochondria|mitochondrion]].',
      blueprint: 'Role: Oxidative hazmat chamber for very-long-chain β-oxidation, plasmalogen synthesis, and H₂O₂ detoxification · From: Very-long-chain [[fatty-acid tails|fatty-acid-tail]] (≥C22) from [[lipid droplets|lipid-droplet]], O₂, and PTS1/2-tagged [[proteins|protein]] from [[cytosol|cytosol]] · Inside: Acyl-CoA oxidases shorten chains generating H₂O₂; tetrameric catalase instantly disproportionates 2 H₂O₂ → 2 [[water|water]] + O₂ · To: Hands medium-chain acyl-carnitines to [[mitochondria|mitochondrion]] and ether lipids (plasmalogens) to myelin/membranes',
      scientific: 'Single-membrane oxidative organelle (0.2–1.0 µm diameter, lacking DNA; buds de novo from ER pre-peroxisomal vesicles and proliferates by Drp1 fission, importing folded matrix enzymes via PEX5/PEX7 receptors recognizing C-terminal -SKL PTS1 tags). Performs β-oxidation of very-long-chain (C22–C26) and branched phytanic fatty acids, bile acid and ether-phospholipid (plasmalogen) synthesis; heme-containing catalase (~240 kDa tetramer, kcat ≈ 4 × 10⁷ s⁻¹) scavenges H₂O₂ at diffusion-limited rates.'
    },
    es: {
      simple: 'El peroxisoma es un aserradero blindado digno de «¡Código 2319!» en Monsters, Inc.: corta grasas gigantes a medida para las mitocondrias y apaga al instante el agua oxigenada tóxica convirtiéndola en agua limpia.',
      story: 'Los troncos grasos gigantes salidos de las [[gotas lipídicas|lipid-droplet]] que no caben en la mitocondria entran primero en este búnker 2319 de [[fosfolípidos|phospholipid]] para aserrarse con [[oxígeno|atom-o]].\n\nEl corte levanta chispas de agua oxigenada corrosiva, pero escuadrones masivos de catalasa desactivan millones de moléculas por segundo en [[agua|water]] pura antes de pasar la leña lista a las [[mitocondrias|mitochondrion]].',
      blueprint: 'Rol: Cámara oxidativa de recorte de grasas muy largas, síntesis de plasmalógenos y neutralización de H₂O₂ · De: [[Ácidos grasos|fatty-acid-tail]] muy largos (≥C22) de [[gotas lipídicas|lipid-droplet]], O₂ y [[proteínas|protein]] citosólicas con señal PTS1 · Dentro: Oxidasas acortan cadenas formando H₂O₂ y la catalasa lo descompone en [[agua|water]] + O₂ · Hacia: Cede cadenas medias a [[mitocondrias|mitochondrion]] y lípidos éter para mielina y membranas',
      scientific: 'Orgánulo oxidativo de membrana simple (0.2–1.0 µm Ø, sin genoma propio; originado de novo desde el RE o por fisión e importación postraduccional de proteínas plegadas vía receptores PEX5/PEX7 para señales C-terminales -SKL). Ejecuta la β-oxidación de ácidos grasos de cadena muy larga (C22–C26) y ramificados, síntesis de ácidos biliares y plasmalógenos; su catalasa tetramérica hemínica (~240 kDa, kcat ≈ 4 × 10⁷ s⁻¹) degrada 2 H₂O₂ → 2 H₂O + O₂ cerca del límite difusional.'
    }
  },
  'real-cell': {
    en: {
      simple: 'This realistic cutaway ditches tidy textbook cartoons to show the animal cell in full Cells at Work! IMAX glory: shoulder-to-shoulder molecules racing through a neon, rush-hour metropolis.',
      story: 'Peel open the [[plasma membrane|plasma-membrane]] and empty textbook space vanishes—welcome to a neon Cyberpunk metropolis where every cubic nanometer hustles. Sugar and oxygen pour into protein-packed jelly while courier scripts dive out of the [[realistic nucleus|real-nucleus]] to light up rough ER printers.\n\nTrack any parcel live: [[Golgi|golgi]] bays launch Pokéball vesicles down [[microtubule|microtubule]] monorails, Arc-Reactor mitochondria flash ATP, and WALL-E [[lysosomes|lysosome]] recycle scrap.',
      blueprint: 'Role: Integrated whole-cell systems simulation of coupled metabolic, genetic, and vesicular fluxes · From: Extracellular [[glucose|glucose]], O₂, and [[amino acids|amino-acid]] crossing [[plasma membrane|plasma-membrane]] · Inside: Molecular-crowding [[cytosol|cytosol]] links [[realistic nucleus|real-nucleus]] transcription to [[rough ER|rough-er]]/[[Golgi|golgi]] secretion and [[mitochondrion|mitochondrion]] ATP synthesis · To: Secreted proteins, membrane renewal, heat, CO₂, and continuous homeostatic turnover',
      scientific: 'Scale-faithful mesoscopic reconstruction of a mammalian somatic cell (10–30 µm) integrating crystallographic macromolecular models (enlarged ~20× relative to organelle geometry for visibility) with physiological compartment topology: apical microvilli and primary cilium, cortical actomyosin, centrosome-nucleated microtubule tracks, perinuclear ER–Golgi secretory axis, mitochondrial chondriome, endolysosomal/peroxisomal degradative hubs, and chromosome-territoried nucleus.'
    },
    es: {
      simple: 'Este corte realista jubila los esquemas vacíos de libro para mostrar la célula en modo IMAX de Cells at Work!: moléculas hombro con hombro corriendo por una metrópolis de neón sin un hueco libre.',
      story: 'Abre la [[membrana plasmática|plasma-membrane]] y olvida los huecos en blanco: esto es una metrópolis Cyberpunk en hora punta. Nutrientes y oxígeno entran a un gel vibrante mientras pergaminos frescos saltan del [[núcleo realista|real-nucleus]] para encender las impresoras del RE rugoso.\n\nSigue cualquier envío en vivo: el [[aparato de Golgi|golgi]] lanza cápsulas por monorraíles de [[microtúbulos|microtubule]], las mitocondrias destellan ATP y los [[lisosomas|lysosome]] estilo WALL-E reciclan todo.',
      blueprint: 'Rol: Reconstrucción sistémica integral de los flujos genéticos, energéticos y vesiculares de la célula · De: [[Glucosa|glucose]], O₂ y [[aminoácidos|amino-acid]] importados por la [[membrana plasmática|plasma-membrane]] · Dentro: El [[citosol|cytosol]] conecta la transcripción del [[núcleo realista|real-nucleus]] con [[RE rugoso|rough-er]], [[Golgi|golgi]] y [[mitocondrias|mitochondrion]] · Hacia: Secreción proteica, renovación de membranas, CO₂ y homeostasis continua',
      scientific: 'Reconstrucción mesoscópica a escala topológica real de una célula somática de mamífero (10–30 µm) que combina modelos atómicos cristalográficos (ampliados ~20× para resolución visual) con flujos metabólicos acoplados: dominio apical con microvellosidades y cilio primario, córtex de actina, red centrosómica de microtúbulos, vía secretora RE-Golgi, red mitocondrial, sistema endolisosómico/peroxisómico y núcleo con territorios cromosómicos.'
    }
  },
  'real-nucleus': {
    en: {
      simple: 'Sliced open like Inside Out Headquarters meets The Matrix, the realistic nucleus reveals 46 tidy chromosome islands, live gene-reading studios, and RNA scrolls diving headfirst out octagonal vault doors.',
      story: 'Crack open the [[nuclear envelope|nuclear-envelope]] and the spaghetti myth dies: forty-six chromosomes claim neat Inside Out islands wound on [[nucleosome|nucleosome]] spools, while PCNA carabiners and [[ubiquitin|ubiquitin]] coins patrol the lanes.\n\nRight now a third of those islands glow with live filming alongside the cut-open [[realistic nucleolus|real-nucleolus]], launching helmeted RNA scrolls cap-first out Monsters, Inc. [[nuclear pores|nuclear-pore]].',
      blueprint: 'Role: Atomically grounded cutaway of nuclear architecture, chromosome territories, and mRNA export · From: Imported NTPs, [[histones|histone]], [[PCNA|pcna]], and [[ubiquitin|ubiquitin]] crossing [[nuclear pores|nuclear-pore]] · Inside: 46 [[chromosome|chromosome]] territories expose [[active genes|real-dna]] alongside the phase-separated [[realistic nucleolus|real-nucleolus]] · To: Streams 5′-cap-first mRNPs and pre-ribosomes out [[nuclear pores|nuclear-pore]] to [[rough ER|rough-er]]',
      scientific: 'Mesoscopic cutaway of the mammalian interphase nucleus (5–10 µm; macromolecules rendered at ~20× scale with ~2,600 representative nucleosomes standing in for ~3 × 10⁷ native NCPs across 46 interphase chromosome territories). Depicts active Pol II transcription factories on ~1/3 of territories, interchromatin space populated with trimeric PCNA (PDB 1AXC) and ubiquitin (PDB 1UBQ), tripartite nucleolus, and cap-first mRNP translocation through octagonal NPCs.'
    },
    es: {
      simple: 'Abierto en canal entre el cuartel de Intensa-Mente y Matrix, el núcleo realista revela 46 islas cromosómicas ordenadas, rodajes génicos en vivo y rollos de ARN saltando de cabeza por los poros.',
      story: 'Secciona la [[envoltura nuclear|nuclear-envelope]] y adiós al mito del plato de espaguetis: cuarenta y seis cromosomas ocupan islas ordenadas sobre carretes [[nucleosómicos|nucleosome]], patrulladas por mosquetones PCNA y fichas de [[ubiquitina|ubiquitin]].\n\nUn tercio de los barrios brilla en pleno rodaje junto al [[nucléolo realista|real-nucleolus]], lanzando pergaminos con casco por delante a través de los [[poros nucleares|nuclear-pore]].',
      blueprint: 'Rol: Corte mesoscópico del núcleo con territorios cromosómicos, transcripción viva y exportación · De: Nucleótidos, [[histonas|histone]], [[PCNA|pcna]] y [[ubiquitina|ubiquitin]] entrantes por [[poros nucleares|nuclear-pore]] · Dentro: 46 territorios de [[cromosomas|chromosome]] despliegan [[genes activos|real-dna]] junto al [[nucléolo realista|real-nucleolus]] · Hacia: Exporta complejos ARNm (caperuza 5′ delante) y prerribosomas hacia el [[RE rugoso|rough-er]]',
      scientific: 'Reconstrucción en corte del núcleo interfásico de mamífero (5–10 µm; escala molecular ampliada ~20× con ~2,600 nucleosomas representativos de los ~3 × 10⁷ reales repartidos en 46 territorios cromosómicos). Muestra focos activos de ARN Pol II en ~1/3 de los territorios, nucleoplasma poblado por trímeros de PCNA (PDB 1AXC) y ubiquitina (PDB 1UBQ), nucléolo tripartito y exportación direccional 5′→3′ de ARNm por los poros.'
    }
  },
  'real-nucleolus': {
    en: {
      simple: 'Zoomed in, the realistic nucleolus runs like a three-ring Whoville assembly line where convoys of enzymes read ribosomal genes nose-to-tail, making each gene bristle like a tiny holiday pine tree.',
      story: 'Zoom into the [[nucleolus|nucleolus]] and three nested lava-lamp rings appear with zero walls between them. At the pale center, bumper-to-bumper polymerases cruise down [[DNA|dna]] loops trailing longer and longer RNA branches until each gene looks like a Whoville Christmas tree.\n\nClipped branches float into ring two for scissor-trimming, then ring three where imported [[proteins|protein]] snap on to finish two-piece [[ribosomes|ribosome]] bound for [[nuclear pores|nuclear-pore]].',
      blueprint: 'Role: Three-zone concentric production line for rRNA transcription, processing, and [[ribosome|ribosome]] assembly · From: rDNA loops, [[nucleotides|nucleotide]], snoRNAs, and ribosomal [[proteins|protein]] imported into [[real-nucleus|real-nucleus]] · Inside: Fibrillar center Pol I "Christmas trees" → dense fibrillar snoRNP cleavage → granular 40S/60S folding · To: Releases pre-40S and pre-60S [[ribosome|ribosome]] halves to [[nuclear pores|nuclear-pore]]',
      scientific: 'Multiphase condensate ultrastructure (1–3 µm) resolving Miller-spread "Christmas tree" transcription units inside pale fibrillar centers (tandem ~13 kb 47S rDNA transcribed simultaneously by ~100 packed RNA polymerase I holoenzymes per gene at ~50 nt/s). Nascent transcripts enter the fibrillarin/box C/D & H/ACA snoRNP-rich dense fibrillar component for >200 site-specific modifications and cleavage, then assemble with 80 RPs in the outer nucleophosmin granular component.'
    },
    es: {
      simple: 'De cerca, el nucléolo realista opera en tres anillos líquidos donde caravanas de enzimas leen cada gen en fila apretada, dándole aspecto de diminuto pino navideño de Villa Quién.',
      story: 'Acerca la cámara al [[nucléolo|nucleolus]] y verás tres anillos líquidos anidados sin una sola pared. En el centro pálido, caravanas de polimerasas avanzan parachoques con parachoques sobre bucles de [[ADN|dna]], desplegando ramas de ARN como pinitos navideños en plena cosecha.\n\nLas ramas pasan al segundo anillo de tijeras finas y al tercero exterior, donde [[proteínas|protein]] recién llegadas arman mitades de [[ribosoma|ribosome]] rumbo a los [[poros nucleares|nuclear-pore]].',
      blueprint: 'Rol: Línea concéntrica en tres fases de síntesis de ARNr y ensamblaje de [[ribosomas|ribosome]] · De: Bucles ADNr, [[nucleótidos|nucleotide]] y [[proteínas|protein]] ribosómicas dentro del [[núcleo realista|real-nucleus]] · Dentro: Centros fibrilares («árboles» Pol I) → anillo fibrilar denso (corte snoRNP) → corteza granular (40S/60S) · Hacia: Despacha subunidades pre-40S y pre-60S hacia los [[poros nucleares|nuclear-pore]]',
      scientific: 'Ultraestructura multifásica (1–3 µm) que resuelve unidades transcripcionales tipo «árbol de Miller» en los centros fibrilares (~100 holoenzimas ARN polimerasa I transcribiendo en fila cada gen repetido 47S de ~13 kb a ~50 nt/s). El pre-ARNr atraviesa el componente fibrilar denso rico en fibrilarina y complejos snoRNP C/D y H/ACA (>200 metilaciones/pseudouridilaciones) y ensambla las subunidades pre-40S y pre-60S en la corteza granular externa.'
    }
  },
  'real-dna': {
    en: {
      simple: 'This paparazzi close-up catches a single gene live on set: three histone spools slide offstage so crab-claw RNA polymerase II can unzip bare DNA rungs and spin out a fresh RNA script.',
      story: 'Filming a gene live takes clearing the set first: stagehand remodelers slide three [[nucleosome|nucleosome]] spools aside so bare [[DNA|dna]] gleams under the spotlight.\n\nClamped right onto the exposed rungs sits crab-claw [[RNA polymerase II|pol-ii]], unzipping the helix to stitch [[nucleotides|nucleotide]] into a curling [[RNA|rna]] scroll that snaps on its 5′ safety helmet before the scene even wraps.',
      blueprint: 'Role: Live molecular snapshot of eukaryotic transcription elongation and co-transcriptional mRNP packaging · From: Remodeled [[nucleosome|nucleosome]]-free [[DNA|dna]] template + ribo-[[nucleotides|nucleotide]] · Inside: [[RNA polymerase II|pol-ii]] opens a ~14 bp transcription bubble; nascent [[RNA|rna]] folds and binds 5′ cap-binding complex · To: Releases packaged pre-mRNP into [[real-nucleus|real-nucleus]] for export through [[nuclear pores|nuclear-pore]]',
      scientific: 'Atomic-scale elongation scene (~50–100 nm field): chromatin remodelers evict three flanking nucleosomes (PDB 1AOI) to expose linker B-DNA engaged by RNA polymerase II (PDB 1I50). Pol II maintains a ~12–14 nt melted transcription bubble containing an 8–9 bp RNA–DNA hybrid duplex; emerging 5′-m⁷GpppN-capped pre-mRNA forms local stem-loops coated co-transcriptionally by cap-binding complex (CBC20/80) and hnRNP proteins to prevent R-loop hybridization.'
    },
    es: {
      simple: 'Este primer plano sorprende a un gen en pleno rodaje: tres carretes se apartan del escenario para que la pinza ARN polimerasa II abra el ADN desnudo y teja un guion fresco de ARN.',
      story: 'Para rodar una escena del código primero despejan el plató: tramoyistas corren tres carretes [[nucleosómicos|nucleosome]] dejando brillar un tramo limpio de [[ADN|dna]].\n\nAferrada a los peldaños desnudos, la tenaza [[ARN polimerasa II|pol-ii]] abre la doble hélice y cose [[nucleótidos|nucleotide]] en una cinta de [[ARN|rna]] que estrena casco protector 5′ antes siquiera de gritar «¡corten!».',
      blueprint: 'Rol: Escena atómica en vivo de elongación transcripcional y empaquetamiento cotranscripcional · De: Tramo de [[ADN|dna]] despejado de [[nucleosomas|nucleosome]] + ribo-[[nucleótidos|nucleotide]] · Dentro: La [[ARN polimerasa II|pol-ii]] abre una burbuja de ~14 pb y extruye [[ARN|rna]] recubierto por el complejo de caperuza 5′ · Hacia: Libera el complejo ARNm maduro al [[núcleo realista|real-nucleus]] rumbo a los [[poros nucleares|nuclear-pore]]',
      scientific: 'Escena molecular de elongación (~50–100 nm): el desplazamiento de tres nucleosomas (PDB 1AOI) expone ADN-B desnudo ocupado por la ARN polimerasa II (PDB 1I50), que sostiene una burbuja de fusión de ~12–14 nt con un híbrido ARN–ADN interno de 8–9 pb. El transcrito naciente recibe cotranscripcionalmente su caperuza m⁷G en 5′, pliega horquillas secundarias y recluta el complejo CBC y proteínas hnRNP evitando bucles R.'
    }
  },
  'pol-ii': {
    en: {
      simple: 'RNA polymerase II is "The Claaaaw!" from Toy Story meets Pokémon’s Kingler: a twelve-piece protein jaw that clamps onto DNA, unzips its twin rails, and types out RNA scripts at fifty letters a second.',
      story: 'Built like a giant twelve-piece Kingler crab claw from distinct [[polypeptide|polypeptide]] subunits, "The Claaaaw" straddles bare [[DNA|dna]] inside the nucleus. Deep in its jaw, twin [[magnesium|atom-mg]] magnets catch [[nucleotides|nucleotide]] to type fifty letters a second into a fresh [[RNA|rna]] scroll—while a long flexible tail out back hosts the pit crew adding 5′ helmets and snipping introns mid-sprint.',
      blueprint: 'Role: Core DNA-dependent RNA polymerase transcribing all protein-coding mRNAs and many noncoding RNAs · From: 12 subunits translated on cytosolic [[ribosomes|ribosome]], imported to [[nucleus|nucleus]], supplied with NTPs + [[Mg²⁺|atom-mg]] · Inside: Rpb1/Rpb2 crab-claw cleft melts [[DNA|dna]] and catalyzes 5′→3′ [[RNA|rna]] synthesis at 20–60 nt/s · To: Extrudes capped, spliced mRNA transcripts for [[ribosome|ribosome]] translation',
      scientific: '12-subunit eukaryotic holoenzyme (~550 kDa, ~15 nm diameter; S. cerevisiae 10-subunit core crystal structure PDB 1I50 at 2.8 Å resolution). Active site between Rpb1 and Rpb2 coordinates two catalytic Mg²⁺ ions (Metal A and B) via invariant Asp triad, achieving transcription elongation at 20–60 nt/s with backtracking proofreading via TFIIS; mammalian Rpb1 C-terminal domain (CTD) carries 52 tandem YSPTSPS heptad repeats phosphorylated dynamically at Ser5/Ser2.'
    },
    es: {
      simple: 'La ARN polimerasa II es «¡El Gaaancho!» de Toy Story cruzado con Kingler de Pokémon: una pinza de doce piezas que abraza el ADN, abre su cremallera y mecanografía ARN a cincuenta letras por segundo.',
      story: 'Esculpida como la gran tenaza de Kingler con doce cadenas [[polipeptídicas|polypeptide]] distintas, este «Gaaancho» molecular cabalga el [[ADN|dna]] desnudo en el núcleo. En el fondo de su mandíbula, dos imanes de [[magnesio|atom-mg]] atrapan [[nucleótidos|nucleotide]] para teclear cincuenta letras por segundo en un nuevo [[ARN|rna]], mientras en su larga cola trasera viaja el equipo de pits que pone cascos y recorta intrones al vuelo.',
      blueprint: 'Rol: Enzima central que transcribe todos los genes codificantes de proteínas en ARNm · De: 12 subunidades fabricadas en [[ribosomas|ribosome]] e importadas al [[núcleo|nucleus]] + NTP y [[magnesio|atom-mg]] · Dentro: Hendidura Rpb1/Rpb2 funde el [[ADN|dna]] y polimeriza [[ARN|rna]] 5′→3′ a 20–60 nt/s · Hacia: Entrega pre-ARNm procesados rumbo a los [[ribosomas|ribosome]]',
      scientific: 'Holoenzima eucariota de 12 subunidades (~550 kDa, ~15 nm; estructura cristalográfica central de 10 subunidades en levadura PDB 1I50 a 2.8 Å). El centro activo entre Rpb1 y Rpb2 coordina dos iones Mg²⁺ catalíticos (metales A y B) alcanzando velocidades de 20–60 nt/s con corrección asistida por TFIIS; el dominio C-terminal (CTD) desordenado de Rpb1 en mamíferos contiene 52 repeticiones heptapeptídicas YSPTSPS fosforiladas en Ser5 y Ser2.'
    }
  },
  'pcna': {
    en: {
      simple: 'PCNA is a three-piece Attack on Titan safety carabiner donut clamped around DNA. Without this sliding harness, DNA-copying enzymes wipe out after a few dozen letters instead of sprinting thousands.',
      story: 'Solo DNA polymerases have butterfingers—they slip off slick [[DNA|dna]] after a few dozen rungs, hopeless for copying billions before mitosis. So a clamp-loader crew snaps this three-arc [[polypeptide|polypeptide]] carabiner shut around the helix in the [[nucleus|nucleus]], gliding on a water cushion lined with [[alpha-helices|alpha-helix]] so copy crews surf thousands of letters nonstop.',
      blueprint: 'Role: Processivity sliding-clamp ring tethering DNA polymerases δ/ε and repair enzymes onto [[DNA|dna]] · From: Three identical monomers synthesized on cytosolic [[ribosomes|ribosome]] and loaded onto [[DNA|dna]] by RFC ATPase · Inside: Positively charged central channel lined by 12 [[alpha-helices|alpha-helix]] slides frictionlessly along B-DNA · To: Boosts replication speed/processivity >1,000× and recruits repair factors via [[ubiquitin|ubiquitin]] switch',
      scientific: 'Homotrimeric ring-shaped sliding clamp (~86 kDa trimer, ~29 kDa × 3 monomers, ~8 nm outer diameter, ~3.4 nm positively charged central lumen accommodating 2.0 nm B-DNA; human crystal structure PDB 1AXC). Pseudo-sixfold symmetry formed by two globular domains per monomer with 12 inner α-helices contacting DNA phosphates via a mobile water shell; loaded at 3′-primer–template junctions by replication factor C (RFC) and monoubiquitinated at Lys164 during translesion repair.'
    },
    es: {
      simple: 'PCNA es un mosquetón circular de tres piezas digno de Attack on Titan cerrado sobre el ADN. Sin este arnés deslizante, las enzimas copiadoras resbalarían tras pocas letras en vez de correr miles.',
      story: 'Sola, la enzima que duplica el [[ADN|dna]] tiene manos de mantequilla y cae de la pista tras pocas docenas de letras. Por eso un cargador especial abrocha este anillo de tres arcos [[polipeptídicos|polypeptide]] alrededor de la hélice en el [[núcleo|nucleus]], deslizándose sobre agua y [[hélices α|alpha-helix]] para que el equipo copiador surfee miles de peldaños sin soltarse.',
      blueprint: 'Rol: Anillo deslizante de procesividad que sujeta ADN polimerasas y enzimas reparadoras · De: Tres monómeros idénticos salidos de [[ribosomas|ribosome]] y cargados sobre el [[ADN|dna]] por el complejo RFC · Dentro: Canal central positivo revestido por 12 [[hélices α|alpha-helix]] que resbala sin fricción · Hacia: Multiplica >1,000× la procesividad replicativa y coordina reparación al recibir [[ubiquitina|ubiquitin]]',
      scientific: 'Homotrímero anular (trímero ~86 kDa, 3 monómeros de ~29 kDa, ~8 nm Ø externo y canal central positivo de ~3.4 nm que rodea cómodamente los 2.0 nm del ADN-B; estructura humana PDB 1AXC). Presenta simetría pseudohéxagonal con 12 hélices α tapizando el lumen interior sobre una capa móvil de hidratación; es cargado en extremos 3′ cebador-molde por el complejo ATPasa RFC y regulado por monoubiquitinación en Lys164.'
    }
  },
  'ubiquitin': {
    en: {
      simple: 'Ubiquitin is a tiny, indestructible 76-amino-acid marker—part One Piece Wanted poster, part John Wick Continental coin. One badge calls in DNA repair; four in a row sign an "Excommunicado" warrant to the shredder.',
      story: 'Folded from seventy-six [[amino acids|amino-acid]] into a knot tough enough to survive boiling, this tiny John Wick marker patrols [[cytosol|cytosol]] and nucleus until E1–E2–E3 judges weld it onto a target [[protein|protein]]. One coin on [[PCNA|pcna]] summons DNA-rescue backup; four linked coins stamp "Excommunicado," shipping busted gear straight into the [[proteasome|proteasome]].',
      blueprint: 'Role: Covalent post-translational routing and degradation tag ("molecular kiss of death" or signaling switch) · From: Synthesized as precursor fusions on [[ribosomes|ribosome]] and activated by ATP-spending E1–E2–E3 ligases · Inside: Compact β-grasp fold (one [[alpha-helix|alpha-helix]] + 5-strand β-sheet) links C-terminal Gly76 to target Lys · To: Lys48 poly-chains route damaged [[proteins|protein]] to [[proteasome|proteasome]]; Lys63/mono-tags direct [[vesicle|vesicle]] sorting and [[DNA|dna]] repair',
      scientific: 'Highly conserved 76-residue globular protein (8.56 kDa, ~3 nm, 73/76 residues identical from yeast to human; crystal structure PDB 1UBQ) adopting the compact thermostable β-grasp fold with seven surface lysines (K6, K11, K27, K29, K33, K48, K63). ATP-dependent E1 activating, E2 conjugating, and >600 human E3 ubiquitin ligases form an isopeptide bond between ubiquitin C-terminal Gly76 and substrate ε-NH₂ lysines; K48-linked tetraubiquitin triggers 26S proteasomal proteolysis.'
    },
    es: {
      simple: 'La ubiquitina es una indestructible ficha de 76 aminoácidos: mitad cartel de «Se busca» de One Piece, mitad moneda de John Wick. Una pide rescate; cuatro en fila firman sentencia hacia la trituradora.',
      story: 'Plegada con setenta y seis [[aminoácidos|amino-acid]] en un nudo casi indestructible, esta moneda estilo John Wick patrulla [[citosol|cytosol]] y núcleo lista para que tres jueces enzimáticos la suelden sobre una [[proteína|protein]]. Una sola ficha sobre [[PCNA|pcna]] llama al rescate del ADN; cuatro seguidas declaran «Excommunicado» rumbo a las fauces del [[proteasoma|proteasome]].',
      blueprint: 'Rol: Etiqueta covalente universal de control de calidad, tráfico y degradación proteica · De: Traducida en [[ribosomas|ribosome]] y conjugada con gasto de ATP mediante cascada E1–E2–E3 · Dentro: Pliegue compacto β-grasp con una [[hélice α|alpha-helix]] que une su Gly76 final a lisinas diana · Hacia: Cadenas en Lys48 envían [[proteínas|protein]] al [[proteasoma|proteasome]]; marcas simples guían [[vesículas|vesicle]] y reparación',
      scientific: 'Proteína globular ultraconservada de 76 aminoácidos (8.56 kDa, ~3 nm; 96 % idéntica entre levadura y humano; PDB 1UBQ) con plegamiento β-grasp termoestable y siete residuos de lisina superficiales (K6, K11, K27, K29, K33, K48, K63). La cascada enzimática E1, E2 y >600 ligasas E3 humanas forma un enlace isopeptídico entre Gly76 y grupos ε-amino diana; cadenas tetraubiquitina K48 dirigen a proteólisis en el proteasoma 26S.'
    }
  },
  'lipid-droplet': {
    en: {
      simple: 'A lipid droplet is a golden Mad Max nitro-fuel tanker wrapped in a one-layer phospholipid wetsuit instead of the usual double skin. It locks away ultra-dense fat until mitochondria call for fuel.',
      story: 'Loose fatty acids sloshing indoors act like dish soap that rips membranes apart, so the [[smooth ER|smooth-er]] pools spare fats and [[cholesterol|cholesterol]] into golden Mad Max fuel spheres.\n\nBecause the tank holds pure oil, one single [[phospholipid|phospholipid]] wetsuit wraps it cleanly—guarded by perilipin bouncers who pop the valve whenever hungry [[mitochondria|mitochondrion]] or [[peroxisomes|peroxisome]] roar for nitro.',
      blueprint: 'Role: Neutral-lipid energy reservoir and lipotoxicity buffer · From: Triacylglycerols and sterol esters synthesized by DGAT/ACAT enzymes inside [[smooth ER|smooth-er]] membrane · Inside: Hydrophobic oil core wrapped by a unique single [[phospholipid|phospholipid]] monolayer coated with perilipin [[proteins|protein]] · To: Lipases (ATGL, HSL) cleave and hand [[fatty-acid tails|fatty-acid-tail]] to [[mitochondria|mitochondrion]] and [[peroxisomes|peroxisome]]',
      scientific: 'Monolayer-bounded storage organelle (0.1–5 µm in non-adipocytes, up to 100 µm unilocular droplet in white adipocytes): apolar core of triacylglycerols (TAGs, ~38 kJ/g anhydrous energy density, >6× hydrated glycogen) and cholesteryl esters enveloped by a single amphipathic phospholipid monolayer. Surface perilipins (PLIN1–5) block basal lipolysis until PKA phosphorylation recruits ATGL, HSL, and MGL lipases or lipophagy delivers droplets to lysosomes.'
    },
    es: {
      simple: 'Una gota lipídica es un camión cisterna dorado digno de Mad Max enfundado en un traje de una sola capa de fosfolípidos. Guarda combustible seis veces más denso que el azúcar hasta que hace falta.',
      story: 'Los ácidos grasos sueltos actuarían como jabón agresivo reventando murallas, así que el [[RE liso|smooth-er]] concentra grasas y [[colesterol|cholesterol]] en esferas doradas dignas de Mad Max.\n\nComo su panza es puro aceite, le basta un traje simple de [[fosfolípidos|phospholipid]] vigilado por porteros perilipina, que abren el grifo apenas rugen de hambre las [[mitocondrias|mitochondrion]] o los [[peroxisomas|peroxisome]].',
      blueprint: 'Rol: Depósito anhidro de energía lipídica y amortiguador contra lipotoxicidad · De: Triglicéridos y ésteres de esterol sintetizados entre las valvas del [[RE liso|smooth-er]] · Dentro: Núcleo neutro de aceite cubierto por una monocapa única de [[fosfolípidos|phospholipid]] y [[proteínas|protein]] perilipinas · Hacia: Lipasas liberan [[colas de ácidos grasos|fatty-acid-tail]] hacia [[mitocondrias|mitochondrion]] y [[peroxisomas|peroxisome]]',
      scientific: 'Orgánulo de reserva rodeado por monocapa fosfolipídica simple (0.1–5 µm Ø en células somáticas; hasta 100 µm en adipocitos blancos) sobre un núcleo apolar de triacilgliceroles (~38 kJ/g anhidro, >6× la densidad energética del glucógeno hidratado) y ésteres de colesterilo. Las proteínas superficiales perilipinas (PLIN1–5) regulan el acceso secuencial de las lipasas ATGL, HSL y MGL tras fosforilación dependiente de PKA.'
    }
  },
  'microvillus': {
    en: {
      simple: 'Microvilli give gut cells a spiky Bart Simpson / Super Saiyan rooftop of thousands of tiny fingers. Pleating the roof multiplies space twenty-fold so you vacuum up ramen glucose like Kirby.',
      story: 'A flat roof could never fit enough gates for a post-ramen feast, so gut cells pleat their [[plasma membrane|plasma-membrane]] into a Bart Simpson skyline of thousands of finger-towers.\n\nThirty [[actin filaments|actin-filament]] bolted with myosin [[proteins|protein]] brace each spire atop an [[intermediate filament|intermediate-filament]] foundation—inhaling floods of [[glucose|glucose]] straight into the city like Kirby at a buffet.',
      blueprint: 'Role: Actin-braced apical membrane protrusion amplifying absorptive and digestive surface area · From: Apical [[plasma membrane|plasma-membrane]] pushed and stabilized by parallel [[actin filaments|actin-filament]] · Inside: 20–30 (+) tip-oriented F-actin cables bundled by villin/fimbrin/espin and tethered laterally by myosin-1a · To: Anchors into terminal web of [[intermediate filaments|intermediate-filament]] and imports [[glucose|glucose]]/[[amino acids|amino-acid]] into [[cytosol|cytosol]]',
      scientific: 'Non-motile cylindrical brush-border protrusion (~100 nm diameter × 1–2 µm length; ~1,000–3,000 microvilli per intestinal enterocyte, amplifying apical surface area ~20–30-fold). Core comprises 20–30 parallel polarized F-actin microfilaments (barbed + ends embedded in a dense tip complex, cross-linked at 12 nm center-to-center spacing by fimbrin/plastin-1, villin, and espin), laterally linked to the glycocalyx-rich membrane by calmodulin-bound Myo1a and rooted basally in the spectrin/keratin terminal web.'
    },
    es: {
      simple: 'Las microvellosidades coronan las células intestinales con miles de picos estilo Bart Simpson o Super Saiyajin. Multiplican veinte veces la azotea para aspirar nutrientes a lo Kirby tras cada comida.',
      story: 'Un techo plano jamás alojaría suficientes puertas para un festín de ramen, así que la célula pliega su [[membrana plasmática|plasma-membrane]] superior en miles de torres alineadas al estilo Bart Simpson.\n\nTreinta [[filamentos de actina|actin-filament]] sujetos por [[proteína|protein]] miosina sostienen cada dedo sobre cimientos de [[filamentos intermedios|intermediate-filament]], aspirando avalanchas de [[glucosa|glucose]] dignas de Kirby.',
      blueprint: 'Rol: Proyección apical reforzada con actina que multiplica la superficie de absorción · De: [[Membrana plasmática|plasma-membrane]] apical sostenida por haces paralelos de [[filamentos de actina|actin-filament]] · Dentro: 20–30 microfilamentos (extremos + en la punta) entrecruzados por villina/fimbrina y fijados por miosina-1a · Hacia: Enraíza en el velo terminal de [[filamentos intermedios|intermediate-filament]] e importa [[glucosa|glucose]] al [[citosol|cytosol]]',
      scientific: 'Proyección cilíndrica inmóvil del borde en cepillo (~100 nm Ø × 1–2 µm de largo; ~1,000–3,000 por enterocito intestinal, aumentando ~20–30× el área apical). Su eje contiene 20–30 filamentos paralelos de actina F con los extremos barbados (+) en la punta, empaquetados por villina, fimbrina y espina, conectados lateralmente a la bicapa rica en disacaridasas y transportadores SGLT1 mediante miosina-1a y anclados al velo terminal de espectrina y queratina.'
    }
  },
  'atom-mg': {
    en: {
      simple: 'Magnesium is the Samwise Gamgee sidekick and insulated Mjolnir handle of every ATP battery. Without this +2 metal ion taming ATP’s slippery negative tail, enzymes cannot even grip it.',
      story: 'Forged in exploding stars and delivered to your [[cytosol|cytosol]] via leafy greens, this +2 ion wraps ATP’s negative [[phosphate|phosphate]] tail like the leather grip on Thor’s hammer. Without this loyal sidekick, neither [[ATP synthase|atp-synthase]] nor [[RNA polymerase II|pol-ii]] could hold a nucleotide—and in green leaves, the exact same atom sits at the bullseye of [[chlorophyll|chlorophyll]].',
      blueprint: 'Role: Essential divalent cofactor neutralizing polyphosphate charge on ATP, [[DNA|dna]], and [[RNA|rna]] · From: Dietary mineral uptake across [[plasma membrane|plasma-membrane]] via TRPM6/7 and MagT1 channels · Inside: Octahedrally coordinated Mg²⁺ chelates β/γ-[[phosphate|phosphate]] oxygens and catalytic Asp residues · To: Enables catalysis in [[ATP synthase|atp-synthase]], [[pol-ii|pol-ii]], [[ribosomes|ribosome]], and plant [[chlorophyll|chlorophyll]]',
      scientific: 'Alkaline earth element Z = 12 (²⁴Mg standard atomic weight 24.305 Da; physiological species Mg²⁺, ionic radius 0.72 Å bare / ~4.3 Å hexahydrated [Mg(H₂O)₆]²⁺). Total intracellular [Mg] ≈ 15–20 mM (~90% chelated to ribosomes, polynucleotides, and Mg-ATP²⁻; free cytosolic [Mg²⁺] ≈ 0.5–1.0 mM); essential two-metal-ion catalytic cofactor in all DNA/RNA polymerases, kinases, ATPases, and chlorophyll porphyrin rings.'
    },
    es: {
      simple: 'El magnesio es el fiel Sam Gamyi y la empuñadura del martillo de Thor en cada batería de ATP. Sin este ion metálico sujetando sus cargas negativas, ninguna enzima podría agarrar el ATP.',
      story: 'Forjado en supernovas y traído por hojas verdes hasta tu [[citosol|cytosol]], este ion +2 abraza la cola de [[fosfatos|phosphate]] del ATP como el mango aislante del Mjolnir de Thor. Sin él, ni la [[ATP sintasa|atp-synthase]] ni la [[ARN polimerasa II|pol-ii]] sujetarían un solo ladrillo, y en las plantas brilla además en la diana misma de la [[clorofila|chlorophyll]].',
      blueprint: 'Rol: Cofactor divalente esencial que estabiliza cargas de ATP, [[ADN|dna]] y [[ARN|rna]] · De: Absorción iónica por canales selectivos en la [[membrana plasmática|plasma-membrane]] · Dentro: El catión Mg²⁺ coordina octaedros con oxígenos de grupos [[fosfato|phosphate]] y sitios activos · Hacia: Habilita catálisis en [[ATP sintasa|atp-synthase]], [[ARN polimerasa II|pol-ii]], [[ribosomas|ribosome]] y [[clorofila|chlorophyll]]',
      scientific: 'Metal alcalinotérreo Z = 12 (masa atómica 24.305 Da; catión fisiológico Mg²⁺, radio iónico desnudo 0.72 Å y ~4.3 Å como [Mg(H₂O)₆]²⁺). Concentración intracelular total ~15–20 mM (~90 % acomplejado en ribosomas, ácidos nucleicos y el verdadero sustrato biológico Mg-ATP²⁻; [Mg²⁺] libre ~0.5–1.0 mM); cofactor bimetálico indispensable en polimerasas, quinasas, ATPasas y el anillo tetrapirrólico de la clorofila.'
    }
  },
  'atom-h': {
    en: {
      simple: 'Hydrogen is the Big Bang’s minimalist MVP—one proton, one electron, infinite hustle. Shared in bonds it acts like gentle Velcro on DNA; stripped naked as a proton, it stampedes through ATP turbines.',
      story: 'Born minutes after the Big Bang and riding in aboard [[water|water]] and [[glucose|glucose]], this featherweight stars in two blockbusters at once. Shared with oxygen or nitrogen, it clicks billions of Velcro clasps across [[DNA|dna]] and [[alpha-helices|alpha-helix]]; stripped to a bare proton, it stampedes like Lion King wildebeest down [[ATP synthase|atp-synthase]] to power life.',
      blueprint: 'Role: Universal covalent cap, hydrogen-bond clasp, and chemiosmotic proton currency (H⁺) · From: Imported in [[water|water]], [[glucose|glucose]], and [[fatty-acid tails|fatty-acid-tail]] · Inside: 1 proton + 1 electron; forms polar H-bonds on O/N or moves as bare H⁺/hydronium · To: Zips [[DNA|dna]] and [[proteins|protein]], sets pH in [[lysosomes|lysosome]], and spins [[ATP synthase|atp-synthase]]',
      scientific: 'Element Z = 1 (¹H protium = 1.008 Da, covalent radius ~0.31 Å, van der Waals radius ~1.20 Å; accounts for ~63% of atoms in the human body by count, ~10% by mass). Mediates directional hydrogen bonds (8–30 kJ/mol, donor–acceptor distance 2.7–3.1 Å) governing macromolecular folding and base pairing; proton concentration defines pH (−log₁₀ a_H⁺) and transmembrane ΔpH driving F₁F₀- and V-type ATPases.'
    },
    es: {
      simple: 'El hidrógeno es el minimalista supremo del Big Bang: un protón y un electrón para todo. Compartido abrocha como velcro el ADN; desnudo como protón cae en estampida moviendo las turbinas de ATP.',
      story: 'Nacido minutos después del Big Bang e importado en [[agua|water]] y [[glucosa|glucose]], este peso pluma protagoniza dos superproducciones a la vez. Compartido teje miles de millones de broches suaves en el [[ADN|dna]] y las [[hélices α|alpha-helix]]; como protón desnudo se lanza en estampida digna de El Rey León por la [[ATP sintasa|atp-synthase]] para encender la vida.',
      blueprint: 'Rol: Remate covalente orgánico, broche de puente de hidrógeno y moneda protónica (H⁺) · De: Ingresa formando parte del [[agua|water]], la [[glucosa|glucose]] y los [[ácidos grasos|fatty-acid-tail]] · Dentro: 1 protón + 1 electrón; enlaza cadenas apolares o actúa como protón transferible · Hacia: Une [[ADN|dna]] y [[proteínas|protein]], acidifica [[lisosomas|lysosome]] e impulsa la [[ATP sintasa|atp-synthase]]',
      scientific: 'Elemento Z = 1 (¹H protio = 1.008 Da, radio covalente ~0.31 Å, radio de van der Waals ~1.20 Å; representa ~63 % del número total de átomos del cuerpo humano y ~10 % de su masa). Forma puentes de hidrógeno direccionales (8–30 kJ/mol, distancia D···A de 2.7–3.1 Å) esenciales en apareamiento de bases y plegamiento proteico; su actividad como H₃O⁺ define el pH intracelular y la fuerza protón-motriz.'
    }
  },
  'atom-c': {
    en: {
      simple: 'Carbon is the ultimate four-stud Lego Technic hub of life. Calmly holding four rock-solid bonds at once, it snaps into endless chains, rings, and skeletons without dissolving in water.',
      story: 'Cooked in red-giant stars and pulled out of thin air into [[glucose|glucose]] before hitting your plate, carbon brings four steady Spider-Man Doc-Ock arms ready to link in any direction. String it into [[fatty-acid tails|fatty-acid-tail]], fold it into every [[amino acid|amino-acid]] and [[nucleotide|nucleotide]], and [[mitochondria|mitochondrion]] finally exhale spent carbons back to the sky as CO₂.',
      blueprint: 'Role: Tetravalent covalent chassis of every organic biomolecule · From: Dietary [[glucose|glucose]], [[amino acids|amino-acid]], and lipids imported into [[cytosol|cytosol]] · Inside: Four valence electrons form stable single, double, and aromatic C–C/C–H/C–O/C–N bonds · To: Builds [[proteins|protein]], [[DNA|dna]], and [[phospholipids|phospholipid]]; exits as respired CO₂ from [[mitochondria|mitochondrion]]',
      scientific: 'Group 14 nonmetal Z = 6 (¹²C = 12.000 Da, ~18.5% of human body mass; covalent radius 0.76 Å sp³, 0.67 Å sp²). Four valence electrons (1s² 2s² 2p²) hybridize into tetrahedral sp³ (109.5°, chiral stereocenters like Cα in L-amino acids) or planar sp² (120°, conjugated alkenes, peptide carbonyls, aromatic nucleobases) with high C–C bond dissociation energy (~348 kJ/mol) kinetically stable in water.'
    },
    es: {
      simple: 'El carbono es el conector maestro de cuatro brazos estilo Lego Technic de toda molécula viva. Como sostiene cuatro enlaces firmes a la vez, levanta cadenas, anillos y esqueletos indestructibles en agua.',
      story: 'Cocinado en estrellas gigantes y atrapado del aire en [[glucosa|glucose]], cada carbono despliega cuatro brazos firmes dignos del Doctor Octopus para enlazar en cualquier dirección. En fila arma [[colas de ácidos grasos|fatty-acid-tail]]; en anillos esculpe cada [[aminoácido|amino-acid]] y [[nucleótido|nucleotide]], hasta que las [[mitocondrias|mitochondrion]] devuelven el carbono gastado al cielo como CO₂.',
      blueprint: 'Rol: Chasis covalente tetravalente de toda la química orgánica celular · De: [[Glucosa|glucose]], [[aminoácidos|amino-acid]] y grasas importados al [[citosol|cytosol]] · Dentro: Cuatro enlaces estables en geometría tetraédrica (sp³) o plana/aromática (sp²) · Hacia: Estructura [[proteínas|protein]], [[ADN|dna]] y [[fosfolípidos|phospholipid]]; sale oxidado como CO₂ desde [[mitocondrias|mitochondrion]]',
      scientific: 'Elemento no metálico del grupo 14, Z = 6 (¹²C = 12.000 Da, ~18.5 % de la masa corporal humana; radio covalente 0.76 Å en sp³ y 0.67 Å en sp²). Sus cuatro electrones de valencia (2s² 2p²) permiten geometrías tetraédricas quirales sp³ (109.5°, centros estereogénicos L-aminoacídicos y D-azúcares) y trigonales planas sp² (120°, enlaces peptídicos y anillos aromáticos) con elevada energía de enlace C–C (~348 kJ/mol).'
    }
  },
  'atom-n': {
    en: {
      simple: 'Nitrogen is the Iron Man suit-rivet of proteins and genetic letters. With three bonds plus a proton-grabbing lone pair, it brings smart hydrogen clasps and positive charge to life’s gear.',
      story: 'Cracked out of stubborn air by soil microbes and served up in dietary [[amino acids|amino-acid]], nitrogen rivets every joint along a [[polypeptide|polypeptide]] spine. Stamped into flat rings it spells the code letters of [[DNA|dna]], while out on [[head groups|head-group]] and [[histone|histone]] tails it wears the positive badge that grips negative partners tight.',
      blueprint: 'Role: Signature heteroatom of peptide bonds, genetic [[bases|base]], and cationic side chains · From: Imported exclusively as reduced organic nitrogen in [[amino acids|amino-acid]] and nucleosides · Inside: Five valence electrons form 3 covalent bonds + basic lone pair (or 4 bonds as cationic R–NH₃⁺) · To: Links [[polypeptides|polypeptide]], builds [[nucleotide|nucleotide]] rings, and charges [[histones|histone]]/[[head groups|head-group]]',
      scientific: 'Group 15 pnictogen Z = 7 (¹⁴N = 14.007 Da, ~3.2% of human body mass; covalent radius ~0.71 Å, electronegativity χ = 3.04). Lone-pair delocalization into adjacent carbonyls confers partial double-bond planarity to peptide bonds and aromaticity to purine/pyrimidine heterocycles; protonation of Lys (pKa ~10.5), Arg (~12.5), and His (~6.0) side chains provides tunable electrostatic catalysis at physiological pH.'
    },
    es: {
      simple: 'El nitrógeno es el remache de armadura tanto en las proteínas como en las letras genéticas. Con tres enlaces y un par extra atrapaprotones, aporta carga positiva y cierres de precisión.',
      story: 'Arrancado del aire por microbios del suelo y servido en los [[aminoácidos|amino-acid]], el nitrógeno remacha cada unión de la columna [[polipeptídica|polypeptide]]. En anillos planos escribe las letras del [[ADN|dna]], y en las colas de [[histonas|histone]] o en las [[cabezas polares|head-group]] luce la insignia positiva que sujeta toda la arquitectura celular.',
      blueprint: 'Rol: Heteroátomo clave de enlaces peptídicos, [[bases|base]] genéticas y grupos catiónicos · De: Nitrógeno orgánico reducido importado en [[aminoácidos|amino-acid]] · Dentro: Cinco electrones de valencia forman amidas planas, anillos aromáticos o aminas cargadas (−NH₃⁺) · Hacia: Une cadenas [[polipeptídicas|polypeptide]], arma [[nucleótidos|nucleotide]] y carga [[histonas|histone]] y [[cabezas polares|head-group]]',
      scientific: 'Elemento del grupo 15, Z = 7 (¹⁴N = 14.007 Da, ~3.2 % de la masa humana; radio covalente ~0.71 Å, electronegatividad χ = 3.04). La deslocalización de su par solitario otorga planaridad al enlace peptídico y aromaticidad a purinas y pirimidinas; la protonación de cadenas laterales en Lys (pKa ~10.5), Arg (~12.5) e His (~6.0, tampón y catalizador ácido-base a pH fisiológico) gobierna interacciones electrostáticas.'
    }
  },
  'atom-o': {
    en: {
      simple: 'Oxygen is the Pac-Man electron-magnet making up two-thirds of your weight (mostly in water) and waiting at the finish line of your mitochondria to keep the ATP power grid flowing.',
      story: 'Couriered in by Cells at Work! red blood cells right across your [[plasma membrane|plasma-membrane]], this electron-hungry magnet keeps the city’s power grid from backing up. Camped at the bottom of the [[electron transport chain|electron-transport-chain]], each oxygen gobbles spent electrons to become calm [[water|water]]—while inside [[glucose|glucose]] and [[phosphates|phosphate]] its strong pull creates life’s electrical polarity.',
      blueprint: 'Role: Terminal respiratory electron sink and primary polar/anionic atom of biomolecules · From: Diffuses freely as O₂ across [[plasma membrane|plasma-membrane]]; also enters in [[water|water]] and [[glucose|glucose]] · Inside: High electronegativity polarizes O–H/C=O bonds and accepts 4 e⁻ per O₂ at Complex IV · To: Drives [[electron transport chain|electron-transport-chain]], forms [[water|water]], and charges [[phosphate|phosphate]]/carboxyl groups',
      scientific: 'Group 16 chalcogen Z = 8 (¹⁶O = 15.999 Da, ~65% of human body mass via H₂O; covalent radius ~0.66 Å, second-highest Pauling electronegativity χ = 3.44). Dioxygen (O₂, triplet biradical ground state ³Σg⁻) is kinetically sluggish until activated by transition-metal centers (heme Fe/Cu in cytochrome c oxidase, E°′ = +0.815 V for ½ O₂/H₂O), providing maximal thermodynamic driving force for aerobic respiration.'
    },
    es: {
      simple: 'El oxígeno es el imán tragaelectrones estilo Pac-Man que suma dos tercios de tu peso (casi todo en agua) y aguarda en la meta de las mitocondrias para que nunca se corte la luz celular.',
      story: 'Entregado en mano por los glóbulos rojos estilo Cells at Work! a través de la [[membrana plasmática|plasma-membrane]], este imán voraz evita atascos en la red eléctrica. Apostado al final de la [[cadena de transporte de electrones|electron-transport-chain]], engulle electrones gastados para volverse [[agua|water]] mansa, mientras en la [[glucosa|glucose]] y los [[fosfatos|phosphate]] polariza la química viva.',
      blueprint: 'Rol: Aceptor final de electrones respiratorios y generador de polaridad molecular · De: Difusión libre de gas O₂ por la [[membrana plasmática|plasma-membrane]], además de [[agua|water]] y nutrientes · Dentro: Alta electronegatividad polariza enlaces y reduce O₂ en el Complejo IV mitocondrial · Hacia: Sostiene la [[cadena de transporte de electrones|electron-transport-chain]], forma [[agua|water]] e ioniza grupos [[fosfato|phosphate]]',
      scientific: 'Calcógeno del grupo 16, Z = 8 (¹⁶O = 15.999 Da, ~65 % de la masa corporal humana; radio covalente ~0.66 Å, electronegatividad χ = 3.44). El dioxígeno molecular (estado fundamental birradical triplete ³Σg⁻) presenta alta barrera cinética frente a singletes orgánicos hasta su activación en centros hemo-cobre del Complejo IV (E°′ = +0.815 V para ½ O₂/H₂O), maximizando el rendimiento energético aeróbico.'
    }
  },
  'atom-p': {
    en: {
      simple: 'Phosphorus is the Mandalorian of atoms—it never takes off its four-oxygen phosphate armor! In that one helmet, it builds DNA’s steel rails, crowns membranes, and cocks every ATP spring.',
      story: 'Washed from ancient rock into food and your [[cytosol|cytosol]], this five-bond specialist obeys the Mandalorian creed: never travel bare, always wear four [[oxygens|atom-o]] as phosphate armor. In that single suit it bolts [[nucleotides|nucleotide]] into eternal [[DNA|dna]] rails, crowns membrane lipids, and slams onto ADP inside [[ATP synthase|atp-synthase]] to cock life’s energy spring.',
      blueprint: 'Role: Pentavalent central atom of [[phosphate|phosphate]] esters and anhydrides in genetics, membranes, and ATP · From: Absorbed as dietary orthophosphate via Na⁺/Pi cotransporters across [[plasma membrane|plasma-membrane]] · Inside: Forms tetrahedral PO₄ linkages uniting thermodynamic instability (ATP) with kinetic stability ([[DNA|dna]]) · To: Powers [[ATP synthase|atp-synthase]] cycles, links [[nucleotides|nucleotide]], and caps [[phospholipids|phospholipid]]',
      scientific: 'Group 15 pnictogen Z = 15 (³¹P = 30.974 Da, ~1.0% of human body mass—~85% in hydroxyapatite bone, ~15% cellular; covalent radius ~1.07 Å). Exclusively pentavalent P(V) in tetrahedral orthophosphate derivatives in biology: combines high thermodynamic phosphoryl-transfer potential in phosphoanhydrides (ATP, GTP) with extreme kinetic resistance to uncatalyzed water hydrolysis in anionic phosphodiesters (DNA backbone t₁/₂ > 10⁷ years at 25 °C).'
    },
    es: {
      simple: 'El fósforo sigue el credo de The Mandalorian: ¡jamás se quita el casco de cuatro oxígenos! Con esa armadura de fosfato levanta los rieles del ADN, corona membranas y carga el resorte del ATP.',
      story: 'Desprendido de rocas milenarias hasta tu plato y el [[citosol|cytosol]], este especialista de cinco enlaces cumple la ley mandaloriana: nunca viajar desnudo, vestir siempre cuatro [[oxígenos|atom-o]] como fosfato. Con ese único blindaje suelda [[nucleótidos|nucleotide]] en el [[ADN|dna]], remata membranas y se prensa en la [[ATP sintasa|atp-synthase]] para cargar energía instantánea.',
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
        simple: 'A Wakanda-grade self-healing oil forcefield studded with smart bouncer gates. It waves fuel and oxygen indoors while bailing excess salt out like SpongeBob so the squishy cell never pops.',
        story: 'Watch the glowing parcels along this cutaway rim: every drop of [[glucose|glucose]], oxygen, and amino acid feeding the metropolis clears this eight-nanometer forcefield first. Resupplied with [[phospholipids|phospholipid]] and cholesterol from [[Golgi|golgi]] pods, the double oil sheet heals grazes instantly while blocking stray leaks.\n\nAcross this sloshing border, tireless [[sodium–potassium pumps|na-k-pump]] spend mitochondrial ATP to bail sodium out and prevent a balloon pop, [[GPCR|gpcr]] spy dishes intercept hormones, and export pods fuse open to launch cargo into the bloodstream.',
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
        simple: 'Un campo de fuerza aceitoso digno de Wakanda lleno de porteros inteligentes. Deja entrar alimento y oxígeno mientras achica sal como Bob Esponja para que la célula jamás estalle.',
        story: 'Sigue los destellos que cruzan el borde del corte: cada molécula de [[glucosa|glucose]], oxígeno y aminoácido pasa revista en este escudo de ocho nanómetros. Reabastecida con [[fosfolípidos|phospholipid]] y colesterol traídos en [[vesículas|vesicle]] del Golgi, la bicapa cicatriza rasguños al vuelo sin permitir fugas.\n\nEn este mar vivo, millones de [[bombas de sodio–potasio|na-k-pump]] queman ATP mitocondrial para expulsar sodio y contener la presión, antenas [[GPCR|gpcr]] espían mensajes hormonales y cápsulas secretoras se funden con la muralla para lanzar exportaciones.',
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
        simple: 'A twin-walled Matrix command citadel ringed with thousands of octagonal Monsters, Inc. vault doors. Vetted proteins badge in while fresh RNA work orders stream out.',
        story: 'Circling the glowing genome at the center of this cutaway runs the double fortress moat of the [[nuclear envelope|nuclear-envelope]], ballooning straight into rough ER factory sheets next door. Every second, fresh [[histones|histone]], polymerases, and fuel bricks arrive from the [[cytosol|cytosol]] requesting vault access.\n\nNobody phases through the oil walls; traffic funnels through colossal octagonal [[nuclear pores|nuclear-pore]] guarded by spaghetti-like tentacles. Only VIP badge-holders slip inside, passing helmeted RNA scrolls and newborn [[ribosome|ribosome]] halves diving out.',
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
        simple: 'Una ciudadela de mando estilo Matrix con doble foso y miles de puertas octogonales dignas de Monsters, Inc. Las proteínas entran con pase VIP mientras salen órdenes frescas de ARN.',
        story: 'Alrededor del genoma iluminado en el centro del corte corre el doble foso de la [[envoltura nuclear|nuclear-envelope]], unido sin costuras al RE rugoso vecino. Cada segundo llegan desde el [[citosol|cytosol]] remesas de [[histonas|histone]], enzimas y ladrillos pidiendo paso al búnker.\n\nNadie atraviesa el muro a la brava: todo desfila por las aduanas octogonales del [[poro nuclear|nuclear-pore]], cuyos tentáculos abren paso solo a portadores con visado mientras escoltan pergaminos de ARN y mitades de [[ribosoma|ribosome]] a toda prisa hacia fuera.',
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
        simple: 'Two meters of master DNA wound onto millions of Walkman-style histone spools and sorted into 46 Inside Out islands. Active scripts pop open for filming while unused chapters stay muted.',
        story: 'Inside the cut-open [[realistic nucleus|real-nucleus]], each colored cloud marks one of forty-six chromosome islands—zero tangled pocket-earbud mess! Fresh [[nucleotides|nucleotide]] and ATP arrive through the pores to tend two meters of DNA coiled around magnetic [[histone|histone]] pucks.\n\nSpot how rim neighborhoods stay locked on mute like archived Inside Out memories, while inner islands slide selected [[nucleosomes|nucleosome]] aside so RNA polymerase II can roll camera and print urgent [[RNA|rna]] scripts.',
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
        simple: 'Dos metros de ADN maestro enrollados en millones de carretes estilo Walkman y ordenados en 46 islas dignas de Intensa-Mente. Los guiones en uso se abren y el resto sigue en silencio.',
        story: 'Dentro del [[núcleo realista|real-nucleus]] abierto en corte, cada nube de color señala una de las cuarenta y seis islas cromosómicas, sin un solo enredo de cables. Hasta aquí entran [[nucleótidos|nucleotide]] y ATP para cuidar dos metros de código devanados sobre tambores magnéticos de [[histonas|histone]].\n\nFíjate cómo los distritos del borde siguen silenciados bajo candado, mientras en el centro se apartan carretes [[nucleosómicos|nucleosome]] elegidos para que la ARN polimerasa II ruede en vivo nuevas copias de [[ARN|rna]].',
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
        simple: 'Naruto-style courier scrolls hot off the Pol II press—fitted with protective helmets, edited mid-flight, and diving headfirst out nuclear pores toward waiting ribosome printers.',
        story: 'Spot the bright studio lights in roughly a third of the chromosome islands: there, crab-claw [[RNA polymerase II|pol-ii]] clamps bare DNA and stitches [[nucleotides|nucleotide]] into a fresh messenger scroll.\n\nBefore printing even wraps, pit crews snap a 5′ helmet on its nose, splice out filler scenes like movie editors, and coat the tape in bodyguard [[proteins|protein]]. Cleared for launch, the glowing parcel dives cap-first out a [[nuclear pore|nuclear-pore]] to fire up ribosomes on the [[rough ER|rough-er]].',
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
        simple: 'Pergaminos mensajeros al estilo Naruto recién salidos de imprenta: con casco protector, editados sobre la marcha y saltando de cabeza por los poros hacia los ribosomas.',
        story: 'Mira los focos encendidos en un tercio de las islas cromosómicas: allí la tenaza [[ARN polimerasa II|pol-ii]] abraza el ADN y cose [[nucleótidos|nucleotide]] a toda máquina en un rollo mensajero.\n\nAntes siquiera de terminar la toma, un equipo de montaje le calza su casco 5′, recorta escenas sobrantes y lo abriga con [[proteínas|protein]] escolta. Listo el paquete, se lanza de cabeza por un [[poro nuclear|nuclear-pore]] para encender las forjas del [[RE rugoso|rough-er]].',
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
        simple: 'Kamaji’s Spirited Away boiler-room forge right inside the vault: a wall-free liquid droplet mass-producing the two halves of every ribosome printer in the city.',
        story: 'Right on the cut face of the [[realistic nucleus|real-nucleus]], this busy Spirited Away boiler room holds together like a lava-lamp droplet with zero walls. Eighty kinds of ribosomal proteins march in through [[nuclear pores|nuclear-pore]] to meet loops of ribosomal [[DNA|dna]] in its pale cores.\n\nFloating outward through three liquid rings, freshly spun [[RNA|rna]] chassis get scissor-trimmed and snapped onto those proteins as finished 40S and 60S halves, marching straight out to staff the [[rough ER|rough-er]].',
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
        simple: 'La sala de calderas de El viaje de Chihiro dentro de la bóveda: una gota líquida sin paredes que fabrica en serie las dos mitades de todos los ribosomas celulares.',
        story: 'En pleno corte del [[núcleo realista|real-nucleus]], esta fragua digna de Kamaji se sostiene sola como gota de lámpara de lava sin pared alguna. Ochenta tipos de proteínas hechas afuera en el [[citosol|cytosol]] entran desfilando para reunirse con bucles de [[ADN|dna]] ribosómico.\n\nCruzando tres anillos líquidos del centro hacia fuera, los armazones frescos de [[ARN|rna]] se recortan y encajan en mitades listas de ribosoma que salen a poblar el [[RE rugoso|rough-er]].',
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
        simple: 'Whoville pine-tree RNA ribbons spun inside the nucleolus that never turn into proteins—instead, they fold into the Mandalorian chassis and welding torch of every ribosome.',
        story: 'Peer into the pale cores of the [[realistic nucleolus|real-nucleolus]] and convoys of polymerases march nose-to-tail down DNA loops, sprouting longer and longer [[RNA|rna]] branches until each gene bristles like a Whoville Christmas tree.\n\nThese ribbons never get translated; scissor crews snip each trunk into three crisp pieces that wrap imported [[proteins|protein]] to become both skeleton and peptide-welding blade inside the 40S and [[60S|ribo-large]] halves of every [[ribosome|ribosome]].',
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
        simple: 'Cintas de ARN que brotan como pinitos de Villa Quién en el nucléolo y jamás se traducen: ellas mismas se pliegan como chasis y soplete soldador de cada ribosoma.',
        story: 'Asómate al centro del [[nucléolo realista|real-nucleolus]] y verás caravanas de enzimas pegadas en fila sobre el ADN, desplegando ramas crecientes de [[ARN|rna]] como abetos navideños de Villa Quién.\n\nEstas cintas nunca se traducen en otra cosa: tijeras precisas dividen cada tronco en tres piezas que abrazan [[proteínas|protein]] para formar el esqueleto y el mismísimo soplete soldador de las mitades 40S y [[60S|ribo-large]] del [[ribosoma|ribosome]].',
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
        simple: 'Formula-1 pit lanes winding between chromosome islands, packed with Attack on Titan carabiner clamps, John Wick ubiquitin coins, and DNA repair crews.',
        story: 'The alleys winding between [[chromosome|chromosome]] islands are no quiet library halls: real crystallographic [[PCNA|pcna]] carabiner donuts and ubiquitin marker coins pack shoulder-to-shoulder after badging through [[nuclear pores|nuclear-pore]].\n\nWhenever a [[DNA|dna]] letter takes a hit or replication starts, three-piece PCNA rings snap shut to keep repair crews locked on track, while ubiquitin coins call backup or ship busted nuclear gear to the [[proteasome|proteasome]].',
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
        simple: 'Callejones de pits de Fórmula 1 entre las islas cromosómicas, llenos de mosquetones PCNA, monedas de ubiquitina a lo John Wick y cuadrillas reparadoras del ADN.',
        story: 'Las avenidas entre territorios de [[cromosomas|chromosome]] hierven de acción: anillos reales de [[PCNA|pcna]] y monedas marcadoras de ubiquitina patrullan hombro con hombro tras cruzar los [[poros nucleares|nuclear-pore]].\n\nApenas una letra de [[ADN|dna]] sufre un rasguño o arranca la copia, el mosquetón triple de PCNA asegura al equipo reparador sobre el riel, mientras las fichas de ubiquitina piden refuerzos o mandan chatarra nuclear al [[proteasoma|proteasome]].',
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
        simple: 'Willy Wonka’s export foundry right outside the nuclear gates: stacked membrane sheets studded with ribosomes injecting proteins inside for folding, sugar-stamping, and shipping.',
        story: 'Step out a [[nuclear pore|nuclear-pore]] with a fresh mRNA script and you land right on the rough ER factory floor. Docked [[ribosomes|ribosome]] gulp bricks and ATP from the [[cytosol|cytosol]], threading newborn chains through tiny Sec61 trapdoors into the cavern inside.\n\nIndoors, chaperones fold each gadget, rivet sulfur bridges, and stamp starter sugar trees—launching winners in Pokéball [[vesicles|vesicle]] toward the Golgi while booting Veruca Salt duds to the [[proteasome|proteasome]].',
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
        simple: 'La gran fundición estilo Willy Wonka a la salida del núcleo: sábanas membranosas cubiertas de ribosomas que inyectan proteínas nuevas para plegarlas, azucararlas y exportarlas.',
        story: 'Cruza un [[poro nuclear|nuclear-pore]] con un plano bajo el brazo y pisas directo la nave industrial del RE rugoso. Miles de [[ribosomas|ribosome]] toman ladrillos y ATP del [[citosol|cytosol]], enhebrando cadenas tiernas por escotillas secretas hacia su bóveda interior.\n\nAdentro, chaperonas doblan cada pieza, fijan remaches de azufre y estampan azúcares: las impecables zarpan en [[vesículas|vesicle]] estilo Pokébola hacia el Golgi, y las defectuosas van expulsadas al [[proteasoma|proteasome]].',
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
        simple: 'Ten million Stark-tech 3D-printers scattered through the jelly and across the rough ER, clamping onto RNA scripts to weld amino acids into every machine in town.',
        story: 'Every gadget in this city—every pump, cable, and walker—was forged inside one of these twenty-eight-nanometer Stark printers. Shipped out of the [[nucleolus|nucleolus]] as unplugged 40S and [[60S|ribo-large]] halves, they snap shut the instant an mRNA tape arrives in the [[cytosol|cytosol]].\n\nFed by tRNA couriers hauling [[amino acids|amino-acid]] and powered by mitochondrial fuel, free crews print local gear on the spot while docked crews inject exports straight into the [[rough ER|rough-er]].',
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
        simple: 'Diez millones de impresoras 3D dignas de Tony Stark repartidas por el gel y el retículo rugoso, cosiendo aminoácidos según el guion del ARN para fabricar toda máquina celular.',
        story: 'Cada ingenio de esta metrópolis —cada bomba, cable y caminante— salió soldado de uno de estos yunques de veintiocho nanómetros. Enviados desde el [[nucléolo|nucleolus]] como mitades 40S y [[60S|ribo-large]] sueltas, se cierran de golpe al morder un rollo fresco de [[ARN|rna]].\n\nAbastecidos de [[aminoácidos|amino-acid]] por repartidores veloces, los ribosomas libres imprimen herramientas locales y los atracados inyectan exportaciones directo al [[RE rugoso|rough-er]].',
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
        simple: 'A coral-shaped oil refinery, Ghostbusters poison-trap, and hair-trigger calcium starter pistol: brewing fresh membrane lipids, golden fat tankers, and rapid calcium sparks.',
        story: 'Follow the ER sheets outward until ribosomes vanish into the sleek coral pipes of the [[smooth ER|smooth-er]]. Fatty acids and ATP arrive from the [[cytosol|cytosol]] so synthases can brew fresh [[phospholipids|phospholipid]] and cholesterol for every wall in town.\n\nSurplus oil buds off as Mad Max [[lipid droplets|lipid-droplet]]; P450 Ghostbusters traps disarm stray toxins; and on command, floodgates fire stored calcium sparks to wake neighboring [[mitochondria|mitochondrion]] and muscles.',
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
        simple: 'Refinería coralina de aceite, trampa antitóxicos estilo Cazafantasmas y gatillo de calcio: fabrica lípidos nuevos, infla tanques dorados de grasa y dispara alertas relámpago.',
        story: 'Sigue las láminas del retículo hacia fuera hasta que desaparecen los ribosomas en la tubería coralina del [[RE liso|smooth-er]]. Con grasas y ATP del [[citosol|cytosol]], sus enzimas destilan [[fosfolípidos|phospholipid]] y colesterol para renovar todas las murallas.\n\nCuando sobra energía infla tanques de [[gotas lipídicas|lipid-droplet]] a lo Mad Max, sus P450 atrapan venenos como Cazafantasmas, y al primer aviso dispara calcio que enciende de golpe a las [[mitocondrias|mitochondrion]] vecinas.',
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
        simple: 'Downtown’s Cells at Work! parcel hub and Pimp-My-Ride sugar studio, parked beside the centrosome to tag, polish, and dispatch ER proteins in Pokéball vesicles.',
        story: 'Parked right beside the [[centrosome|centrosome]] where inbound rails meet, this pancake stack catches cargo pods hot off the [[rough ER|rough-er]]. Each sac works like the next bay in a custom body shop: trimming starter sugars, building glossy glycocalyx antlers, and slapping hazmat tags onto lysosome blades.\n\nAt the trans exit, clathrin bubbles pinch free onto [[motor proteins|motor-protein]] striding down [[microtubules|microtubule]]—routing acid blades to lysosomes and fresh gates to the [[plasma membrane|plasma-membrane]].',
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
        simple: 'La central de paquetería estilo Cells at Work! y estudio de tuneo en azúcar junto al centrosoma: etiqueta, decora y despacha en cápsulas las proteínas recién llegadas del retículo.',
        story: 'Estacionada junto al [[centrosoma|centrosome]], esta pila curvada recibe sin pausa envíos calientes del [[RE rugoso|rough-er]]. Cisterna tras cisterna como taller de alta costura, sus enzimas pulen antenas para la fachada y estampan sellos de peligro en las cuchillas ácidas.\n\nEn el muelle de salida brotan cápsulas que montan sobre [[proteínas motoras|motor-protein]] en rieles de [[microtúbulos|microtubule]], llevando cuchillas a los lisosomas y receptores nuevos a la [[membrana plasmática|plasma-membrane]].',
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
        simple: 'Hundreds of double-walled Iron Man Arc Reactors burning split sugar and fats with oxygen to mint Senzu-Bean floods of ATP coins for every pump and motor in the metropolis.',
        story: 'Every glowing assembly line in this cutaway would freeze stone-dead in seconds if these Arc-Reactor dynamos ever went dark. Pyruvate cracked from [[glucose|glucose]], trimmed [[fatty-acid tails|fatty-acid-tail]] from fat tanks and [[peroxisomes|peroxisome]], and fresh oxygen pour across their outer wall into the inner matrix.\n\nAlong folded cristae dams, the [[electron transport chain|electron-transport-chain]] tames that fuel flamelessly to spin Beyblade rows of ATP synthase—shooting recharged ATP coins across town while exhaling [[water|water]], CO₂, and cozy body warmth.',
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
        simple: 'Cientos de reactores Arc al estilo Iron Man que queman azúcares partidos y grasas con oxígeno para regar toda la ciudad con monedas de ATP dignas de semillas del ermitaño.',
        story: 'Todas las líneas de montaje iluminadas en este corte quedarían congeladas en segundos si se apagaran estos reactores de doble muro. Hasta su matriz entran el piruvato partido de la [[glucosa|glucose]], las [[colas de ácidos grasos|fatty-acid-tail]] aserradas en [[peroxisomas|peroxisome]] y el oxígeno recién cruzado.\n\nEn sus crestas plegadas, la [[cadena de transporte de electrones|electron-transport-chain]] levanta una presa de protones que hace zumbar hileras de turbinas estilo Beyblade, disparando ATP recién acuñado a cada rincón mientras exhala [[agua|water]], CO₂ y calor vital.',
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
        simple: 'Fullmetal Alchemist Equivalent Exchange meets Pac-Man and WALL-E: sealed acid stomachs that melt swallowed junk and retired organelles into clean bricks so zero material goes to waste.',
        story: 'Watch incoming endosome [[vesicles|vesicle]] from the border and hazmat-tagged Golgi enzyme pods converge on these glowing Pac-Man spheres. Wall pumps burn [[mitochondria|mitochondrion]] ATP to sour the vat down to pH 4.5—waking fifty scissor crews behind a sugar-lined shield that prevents self-digestion.\n\nTrash and worn-out gear melt in pure Equivalent Exchange, and membrane chutes pump clean amino acids, [[glucose|glucose]], and [[cholesterol|cholesterol]] right back out so nearby [[ribosomes|ribosome]] never run short of bricks.',
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
        simple: 'Intercambio Equivalente de Fullmetal Alchemist con el hambre de Pac-Man y la prensa de WALL-E: esferas ácidas que funden basura y piezas viejas para devolver ladrillos nuevos.',
        story: 'Observa cómo las [[vesículas|vesicle]] de la superficie y los envíos de cuchillas del Golgi confluyen en estas esferas dignas de Pac-Man. Bombas en su pared gastan ATP de las [[mitocondrias|mitochondrion]] hasta bajar el pH a 4.5, despertando cincuenta tijeras tras un forro azucarado protector.\n\nEn puro Intercambio Equivalente, desechos y orgánulos jubilados se funden en minutos devolviendo aminoácidos, [[glucosa|glucose]] y [[colesterol|cholesterol]] impecables para que los [[ribosomas|ribosome]] vecinos jamás paren.',
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
        simple: 'Code-2319 Monsters, Inc. hazmat sawmills that chop monster-length fats into mitochondria-sized logs while defusing corrosive peroxide sparks into harmless water.',
        story: 'Whenever [[lipid droplets|lipid-droplet]] release oversize [[fatty-acid tails|fatty-acid-tail]] too unwieldy for mitochondria to chew directly, those giant logs dock at these Code-2319 hazmat sheds alongside dissolved oxygen.\n\nInside, oxidase saws hack two carbons off at a time—brewing corrosive hydrogen peroxide bleach—until crystal-packed catalase [[proteins|protein]] instantly split that bleach into plain [[water|water]] and oxygen, passing trimmed fuel logs smoothly to neighboring [[mitochondria|mitochondrion]].',
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
        simple: 'Aserraderos blindados de «¡Código 2319!» estilo Monsters, Inc.: cortan grasas extralargas en troncos manejables para las mitocondrias y apagan al vuelo el agua oxigenada tóxica.',
        story: 'Cuando las [[gotas lipídicas|lipid-droplet]] sueltan [[colas de ácidos grasos|fatty-acid-tail]] demasiado largas para los hornos mitocondriales, esos troncos gigantes entran primero en estas cabinas blindadas 2319 junto con oxígeno fresco.\n\nAl recortarlas de dos en dos carbonos salta agua oxigenada corrosiva, pero escuadrones compactos de [[proteínas|protein]] catalasa la parten al vuelo en [[agua|water]] pura y oxígeno, entregando la leña ya cortada a medida a las [[mitocondrias|mitochondrion]] vecinas.',
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
        simple: 'A fleet of Capsule Corp / Pokéball courier pods and Grand Central endosome transfer hubs racing along microtubule monorails—returning empty receptors upstairs and routing trash to lysosomes.',
        story: 'Those glowing spheres zipping across the cutaway are the city’s Capsule Corp and Pokéball courier fleet. At the [[plasma membrane|plasma-membrane]], clathrin cages swallow outside parcels into early endosomes while COPII pods bud hot off the [[rough ER|rough-er]].\n\nHitched to two-legged [[motor proteins|motor-protein]] walking down [[microtubules|microtubule]], endosomes work like busy transfer stations: mild acid unclips cargo so empty receptors loop right back upstairs for reuse, while doomed goods ride straight into [[lysosomes|lysosome]].',
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
        simple: 'Una flota de cápsulas Capsule Corp y Pokébolas junto a estaciones de transbordo sobre monorraíles: devuelven receptores limpios arriba y envían desechos a los lisosomas.',
        story: 'Esas esferas luminosas que cruzan el corte a toda mecha son la flota de reparto digna de Capsule Corp y Pokémon. Arriba, en la [[membrana plasmática|plasma-membrane]], jaulas de clatrina tragan paquetes hacia endosomas tempranos, mientras abajo brotan envíos frescos del [[RE rugoso|rough-er]].\n\nA lomos de [[proteínas motoras|motor-protein]] sobre [[microtúbulos|microtubule]], los endosomas hacen de estación de transbordo: un toque ácido suelta la mercancía para reciclar receptores vacíos en la fachada y mandar la basura directa a los [[lisosomas|lysosome]].',
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
        simple: 'Golden Mad Max nitro-fuel spheres wrapped in a one-layer phospholipid wetsuit. Budded off the smooth ER in plenty, they feed high-octane fat to mitochondria on demand.',
        story: 'Unlike watery double-walled organelles, these golden Mad Max tankers hold pure oil—packing six times more energy per gram than stored sugar! When the [[smooth ER|smooth-er]] brews surplus fat, oil pools inside its wall until a sphere pops free in a single [[phospholipid|phospholipid]] wetsuit.\n\nPerilipin bouncers guard the valve until fuel runs low; on cue, lipases stream medium [[fatty-acid tails|fatty-acid-tail]] to [[mitochondria|mitochondrion]] and monster chains to [[peroxisomes|peroxisome]].',
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
        simple: 'Esferas doradas de nitrocombustible al estilo Mad Max vestidas con una sola capa de fosfolípidos. Brotan del retículo liso y surten grasa de alto octanaje a las mitocondrias.',
        story: 'Frente a los orgánulos acuosos de doble pared, estos tanques dorados dignos de Mad Max guardan aceite puro con seis veces más energía por gramo que el azúcar. Cuando el [[RE liso|smooth-er]] produce excedente, infla una esfera vestida con un traje simple de [[fosfolípidos|phospholipid]].\n\nPorteros perilipina custodian la llave hasta que aprieta el hambre: entonces canalizan [[colas de ácidos grasos|fatty-acid-tail]] directas a [[mitocondrias|mitochondrion]] y cadenas gigantes a [[peroxisomas|peroxisome]].',
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
        simple: 'Spider-Verse Grand Central rail depot parked beside the nucleus: twin Gatling-barrel centrioles cushioned in protein jelly, firing microtubule highways out to every neighborhood.',
        story: 'Tucked beside the [[realistic nucleus|real-nucleus]] right next to the Golgi, twin [[centriole|centriole]] barrels sit locked at right angles inside an amber cloud of organizer proteins. Ring templates studded through that cloud snatch GTP-[[tubulin|tubulin]] out of the jelly to fire hollow [[microtubule|microtubule]] monorails in every direction.\n\nBecause every minus end stays bolted downtown while plus ends race outward, two-legged [[motor proteins|motor-protein]] always know inbound from outbound—and at mitosis, the depot clones into twin tug-of-war poles.',
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
        simple: 'La gran estación central del Spider-Verso junto al núcleo: dos barriles centriolares en ángulo recto disparando autopistas de microtúbulos hacia todos los rincones de la ciudad.',
        story: 'Acurrucados junto al [[núcleo realista|real-nucleus]] y al costado del Golgi, dos barriles de [[centriolos|centriole]] descansan cruzados en una nube ambarina de proteínas organizadoras. Moldes circulares sembrados en esa matriz pescan [[tubulina|tubulin]] con GTP y lanzan monorraíles huecos de [[microtúbulos|microtubule]] hacia toda la periferia.\n\nComo todos los extremos menos quedan amarrados en el centro y los más apuntan afuera, las [[proteínas motoras|motor-protein]] nunca pierden la brújula, y al llegar la mitosis la terminal se duplica en dos polos.',
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
        simple: 'Tron monorails meets Gromit’s self-laying train tracks: 25-nanometer hollow pipes growing and unzipping at their tips while two-legged walkers haul cargo down the lanes.',
        story: 'Radiating from the [[centrosome|centrosome]] like neon Tron light-rails, these twenty-five-nanometer pipes snap together from GTP-tubulin in the [[cytosol|cytosol]]. Like Gromit slapping down train tracks mid-chase, tips shoot outward while fresh bricks last, then peel apart to reroute down a new street in seconds.\n\nAll the while, sneaker-footed [[motor proteins|motor-protein]] burn ATP along active lanes—kinesins marching outbound with [[vesicles|vesicle]], dyneins hiking inbound toward the Golgi and [[lysosomes|lysosome]].',
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
        simple: 'Monorraíles de Tron cruzados con la vía instantánea de Wallace y Gromit: tubos de 25 nanómetros que se tienden y desmontan mientras porteadores bípedos llevan carga encima.',
        story: 'Irradiando desde el [[centrosoma|centrosome]] como autopistas de neón de Tron, estos tubos crecen tomando tubulina con GTP del [[citosol|cytosol]]. Igual que Gromit tendiendo vía frente a la locomotora, sus puntas avanzan veloces y se pelan en segundos para abrir rutas nuevas donde haga falta.\n\nSobre las vías activas trotan [[proteínas motoras|motor-protein]] gastando ATP: las kinesinas sacan [[vesículas|vesicle]] a la fachada y las dineínas traen carga de vuelta hacia el Golgi y los [[lisosomas|lysosome]].',
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
        simple: 'An Attack on Titan ODM grapple-mesh and Iron Man nano-muscle suit woven right under the cell skin—shaping the border, bracing microvilli, and pinching vesicles free.',
        story: 'Right beneath the fragile [[plasma membrane|plasma-membrane]] flexes a living muscle mesh of twisted seven-nanometer cables. Thousands of ATP-charged [[G-actin|g-actin]] beads from the [[cytosol|cytosol]] snap onto growing tips like Stark nanotech while myosin motors yank cables tight.\n\nThat Attack on Titan grapple tension keeps the squishy cell springy, thrusts rod bundles up into [[microvilli|microvillus]], pinches incoming [[vesicles|vesicle]] loose, and karate-cinches dividing cells in two.',
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
        simple: 'Malla de ganchos estilo Attack on Titan y traje muscular nanotecnológico justo bajo la piel: moldea el borde, sostiene microvellosidades y pellizca vesículas.',
        story: 'Pegada bajo la [[membrana plasmática|plasma-membrane]] trabaja una faja muscular viva de cables trenzados de siete nanómetros. Miles de cuentas de [[actina G|g-actin]] del [[citosol|cytosol]] se ensamblan al vuelo como nanotecnología de Iron Man mientras motores de miosina tensan las cuerdas.\n\nEsa tracción digna de Attack on Titan da resorte a la célula sin pared, alza los ejes de las [[microvellosidades|microvillus]], estrangula [[vesículas|vesicle]] entrantes y divide en dos la célula en mitosis.',
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
        simple: 'Zero-fuel Spider-Man ferry-rescue cables: braided 10-nanometer ropes looping from a nuclear hammock out to border rivets so yanks never rip the tissue.',
        story: 'Slinging a shockproof hammock around the [[realistic nucleus|real-nucleus]] and spanning out to the walls, braided ten-nanometer [[intermediate filaments|intermediate-filament]] act like Spider-Man’s ferry-holding web cables. Built from coiled rods printed on free [[ribosomes|ribosome]], they stay locked while burning zero ATP.\n\nUp top they weave the root mat under [[microvilli|microvillus]], and at the sides they bolt into Megazord [[cell junctions|cell-junction]]—turning thousands of soft cells into tear-proof skin.',
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
        simple: 'Cables de rescate estilo Spider-Man que no gastan combustible: cuerdas trenzadas de 10 nanómetros desde la hamaca del núcleo hasta los remaches vecinos contra desgarros.',
        story: 'Tendidas desde una hamaca blindada en torno al [[núcleo realista|real-nucleus]] hasta los muros, estas cuerdas de [[filamentos intermedios|intermediate-filament]] aguantan como las telarañas de Spider-Man sosteniendo el ferry. Salidas de [[ribosomas|ribosome]] libres, resisten tirones extremos sin gastar ni un ATP.\n\nArriba tejen el cimiento de las [[microvellosidades|microvillus]], y a los lados se remachan en las [[uniones celulares|cell-junction]] para fundir miles de células blandas en piel irrompible.',
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
        simple: 'A solitary Millennium Falcon radar spire rising from a docked centriole on the cell’s roof, packed with spy antennas sniffing outside currents and signals.',
        story: 'Poking off the roof of this cutaway stands a lone Millennium Falcon radar tower anchored on a veteran [[centriole|centriole]] right under the [[plasma membrane|plasma-membrane]]. Nine paired rails form its mast behind a strict velvet-rope gatekeeper ring at the base.\n\nBecause zero ribosomes fit upstairs, tiny Snowpiercer freight trains pulled by [[motor proteins|motor-protein]] shuttle [[GPCRs|gpcr]] up and down nonstop—reporting fluid currents and neighborhood gossip straight to the [[realistic nucleus|real-nucleus]].',
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
        simple: 'Una torre radar solitaria digna del Halcón Milenario erguida sobre un centriolo en la azotea, repleta de antenas espía que captan corrientes y señales vecinas.',
        story: 'Coronando la azotea del corte se alza este radar estilo Halcón Milenario sobre un [[centriolo|centriole]] veterano bajo la [[membrana plasmática|plasma-membrane]]. Nueve pares de rieles arman su mástil tras una aduana estricta en la base.\n\nComo arriba no cabe ni un ribosoma, mini-trenes tipo Snowpiercer tirados por [[proteínas motoras|motor-protein]] suben y bajan antenas [[GPCR|gpcr]] sin parar, enviando partes en vivo directo al [[núcleo realista|real-nucleus]].',
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
        simple: 'A spiky Bart Simpson rooftop skyline of actin-braced fingers that multiplies space twenty-fold—letting the cell inhale post-meal nutrients like Kirby.',
        story: 'Flanking the roof on both sides of the cilium rises a Bart Simpson skyline of [[microvilli|microvillus]] wrapping apical membrane around stiff cores of thirty [[actin filaments|actin-filament]]. Cross-clipped by villin and myosin [[proteins|protein]], these towers stand tall in fast currents atop intermediate-filament roots.\n\nPleating the roof multiplies transporter gates twenty-fold—vacuuming post-ramen floods of [[glucose|glucose]] and amino acids into the [[cytosol|cytosol]] like Kirby at a buffet.',
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
        simple: 'Una azotea erizada al estilo Bart Simpson con dedos sujetos por actina que multiplican veinte veces el espacio para aspirar nutrientes a lo Kirby.',
        story: 'A ambos lados del techo se alza un horizonte estilo Bart Simpson de [[microvellosidades|microvillus]] armadas sobre manojos rígidos de treinta [[filamentos de actina|actin-filament]]. Sujetas con grapas y brazos de [[proteína|protein]] miosina, las torres aguantan firmes la corriente sobre raíces fibrosas.\n\nPlegar así la azotea multiplica por veinte las compuertas disponibles, aspirando a lo Kirby avalanchas de [[glucosa|glucose]] y ladrillos directos al [[citosol|cytosol]].',
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
        simple: 'Shibuya Crossing meets a Cells at Work! night market: shoulder-to-shoulder enzymes cracking glucose into pyruvate for mitochondria while couriers and Fargo shredders work every alley.',
        story: 'Every pixel between organelles packs soluble [[proteins|protein]] bumping shoulders millions of times a second like Shibuya rush hour in boba-tea jelly. The instant [[glucose|glucose]] clears the border, a ten-sprinter relay in this open plaza karate-chops the six-carbon ring into two pyruvates—pocketing two quick ATP coins before feeding [[mitochondria|mitochondrion]].\n\nOn the exact same streets, couriers rush charged bricks to [[ribosomes|ribosome]], chaperones rescue heat-dented folds, and Fargo-style woodchipper proteasomes swallow [[ubiquitin|ubiquitin]]-bountied junk.',
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
        simple: 'El cruce de Shibuya mezclado con mercado nocturno de Cells at Work!: enzimas codo con codo partiendo glucosa para las mitocondrias mientras patrullan repartidores y trituradoras.',
        story: 'Cada rincón libre entre orgánulos hierve de [[proteínas|protein]] solubles rozándose millones de veces por segundo como Shibuya en plena hora punta. Nada más cruzar la [[glucosa|glucose]] por la frontera, un relevo de diez velocistas en esta plaza abierta parte su anillo de seis carbonos en dos piruvatos, cobrando dos monedas rápidas de ATP antes de cebar a las [[mitocondrias|mitochondrion]].\n\nEn esas mismas callejuelas vuelan ladrillos cargados hacia los [[ribosomas|ribosome]], las chaperonas desabollan piezas y las trituradoras engullen chatarra marcada con [[ubiquitina|ubiquitin]].',
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
