import type { NodeLensMap, PagePartLensMap } from './types.js';

export const PHAGE_DNA_VIRUS_NODE_LENSES: NodeLensMap = {
  'real-phage': {
    en: {
      simple:
        'Bacteriophage T4 is a microscopic Apollo lunar lander crossed with an Evangelion pile-bunker: a brainless, spring-loaded syringe that lands on bacteria by touch and shoots its DNA inside.',
      story:
        'Drifting blind like a Star Wars Imperial probe droid, this 500-atmosphere lunar lander wakes purely by touch when its six [[long tail fibers|phage-fiber]] brush E. coli’s LPS and [[OmpC porin|porin]] armor. Enough legs lock on to trip a mechanical hair-trigger: the [[baseplate|real-phage-baseplate]] snaps from a dome into a ninja shuriken star, firing the [[contractile gp18 sheath|gp18-real]] like an Evangelion pile-bunker to punch gp5 through the wall and hijack host [[ribosomes|ribosome-ecoli]].',
      blueprint:
        'Role: Autonomous mechanochemical dsDNA delivery lander · From: Extracellular fluid collision onto host [[LPS|lps]] and [[porins|porin]] · Inside: [[Long tail fibers|phage-fiber]] trigger [[baseplate|real-phage-baseplate]] expansion, contracting [[gp18 sheath|gp18-real]] to drive [[gp19 tube|gp19-real]] and [[gp5 needle|gp5-real]] across [[envelope|real-envelope]] · To: Pressurized 169 kbp [[DNA|dna]] enters cytoplasm to reprogram [[E. coli RNAP|rnap-ecoli]] and [[70S ribosomes|ribosome-ecoli]] into a phage factory.',
      scientific:
        'Myovirus virion (~200 nm total height; 1 scene unit = 10 nm): prolate icosahedral capsid (115 × 85 nm, T_end = 13 laevo, T_mid = 20; PDB 5VF3) packaging 168,903 bp glucosylated 5-hydroxymethylcytosine dsDNA at ~50–60 atm local osmotic/electrostatic pressure (up to ~500 atm peak bending stress), 12-mer gp20 portal (PDB 3JA7), 92.5 nm × 24 nm contractile gp18 sheath/gp19 tube tail (PDB 3J2M, 5W5F), ~150-subunit hexagonal baseplate with gp27–gp5 puncturing complex (PDB 1K28), six gp12 short fibers (PDB 1OCY), and six 145 nm gp34–gp37 long tail fibers (PDB 2XGF).'
    },
    es: {
      simple:
        'El bacteriófago T4 es un módulo lunar Apolo cruzado con el martinete de Evangelion: una jeringa sin cerebro cargada por resorte que aterriza al tacto sobre bacterias y les dispara su ADN.',
      story:
        'Flotando a ciegas como una sonda imperial de Star Wars, este módulo hipodérmico despierta solo al tacto cuando sus seis [[fibras caudales largas|phage-fiber]] rozan el LPS y las [[porinas OmpC|porin]] de E. coli. Al fijarse suficientes patas, la [[placa basal|real-phage-baseplate]] se abre como un shuriken ninja y dispara la [[vaina contráctil gp18|gp18-real]] al estilo Evangelion, clavando la aguja gp5 en la muralla para secuestrar los [[ribosomas|ribosome-ecoli]].',
      blueprint:
        'Rol: Vehículo mecanicoquímico autónomo de inyección de ADNbc · Desde: Colisión extracelular con [[LPS|lps]] y [[porinas|porin]] del huésped · Dentro: Las [[fibras largas|phage-fiber]] disparan la [[placa basal|real-phage-baseplate]], contrayendo la [[vaina gp18|gp18-real]] para perforar la [[envoltura|real-envelope]] con el [[tubo gp19|gp19-real]] y la [[aguja gp5|gp5-real]] · Hacia: Inyección de 169 kpb de [[ADN|dna]] para secuestrar la [[ARN polimerasa|rnap-ecoli]] y los [[ribosomas 70S|ribosome-ecoli]].',
      scientific:
        'Virión miovirus (~200 nm de altura total; 1 unidad = 10 nm): cabeza icosaédrica prolata (115 × 85 nm, T_end = 13 laevo, T_mid = 20; PDB 5VF3) con 168,903 pb de ADNbc con 5-hidroximetilcitosina glucosilada empaquetado a ~50–60 atm de presión interna, portal dodecamérico gp20 (PDB 3JA7), cola contráctil gp18/gp19 de 92.5 × 24 nm (PDB 3J2M, 5W5F), placa basal hexagonal (~150 subunidades) con aguja gp27–gp5 (PDB 1K28), seis fibras cortas gp12 (PDB 1OCY) y seis fibras largas articuladas gp34–gp37 de 145 nm (PDB 2XGF).'
    }
  },

  'real-phage-capsid': {
    en: {
      simple:
        'Like a Poké Ball or TARDIS crammed with giant coiled cargo, this faceted protein vault packs a DNA strand hundreds of times longer than itself, strapped with outer clamps so it never explodes.',
      story:
        'Before this lander ever met prey, a furious ATP motor stuffed 57 micrometers of [[viral DNA|dna]] through the [[gp20 portal|gp20-real]] until the coils strained like Shenron crammed in a Poké Ball at 60 atmospheres! Only Beskar-tough [[gp23* hexamers|gp23-real]] bolted with Soc roll-cage clamps and [[gp24* corner pentamers|gp24-real]] keep the vault from blowing apart—waiting for the [[tail|real-phage-tail]] valve below to fire a hypersonic launch.',
      blueprint:
        'Role: High-pressure prolate genome vault · From: ATP-driven packaging through basal [[gp20 portal|gp20-real]] · Inside: 155 [[gp23* hexamers|gp23-real]], 810 Soc clamps, and 11 [[gp24* pentamers|gp24-real]] confine coaxially spooled 169 kbp [[DNA|dna]] and IPI* core proteins · To: Releases stored elastic/electrostatic pressure down the [[inner tail tube|gp19-real]] upon host puncture.',
      scientific:
        'Prolate icosahedral shell (115 nm × 85 nm, T_end = 13 laevo, T_mid = 20; PDB 5VF3) built from 930 copies of cleaved gp23* (155 hexamers), 810 Soc inter-capsomer trimeric clamps, 155 central Hoc Ig-like spikes, 55 gp24* subunits at 11 five-fold vertices, and one basal 12-subunit gp20 portal (PDB 3JA7). Encloses 168,903 bp (57.4 µm) B-form gh-dCMP dsDNA in coaxial layers spaced ~2.5 nm around a gp22/IPI*/IPII*/IPIII* protein scaffold.'
    },
    es: {
      simple:
        'Como una Pokébola o una TARDIS repleta a presión, esta bóveda proteica guarda una hebra de ADN cientos de veces más larga que la cabeza, sujeta con grapas externas para no reventar.',
      story:
        'Antes de salir de caza, un motor devorador de ATP embutió 57 micrómetros de [[ADN viral|dna]] por el [[portal gp20|gp20-real]] hasta comprimir las espiras como Shenron dentro de una Pokébola a 60 atmósferas. Solo el blindaje de [[hexámeros gp23*|gp23-real]] con grapas Soc y [[pentámeros gp24*|gp24-real]] en las esquinas evita el estallido, aguardando a que la [[cola|real-phage-tail]] abra fuego supersónico.',
      blueprint:
        'Rol: Bóveda genómica prolata de alta presión · Desde: Empaquetamiento dependiente de ATP vía [[portal gp20|gp20-real]] · Dentro: 155 [[hexámeros gp23*|gp23-real]], 810 abrazaderas Soc y 11 [[pentámeros gp24*|gp24-real]] confinan 169 kpb de [[ADN|dna]] coaxial y proteínas IPI* · Hacia: Descarga la presión acumulada por el [[tubo caudal gp19|gp19-real]] tras la perforación celular.',
      scientific:
        'Cápside icosaédrica prolata (115 × 85 nm, T_end = 13 laevo, T_mid = 20; PDB 5VF3) compuesta por 930 copias de gp23* procesada (155 hexámeros), 810 abrazaderas triméricas Soc, 155 espigas centrales Hoc, 55 subunidades gp24* en 11 vértices pentaméricos y un portal basal dodecamérico gp20 (PDB 3JA7). Confinamiento coaxial (espaciado interaxial ~2.5 nm) de 168,903 pb (57.4 µm) de ADN-B con 5-hmC glucosilada junto a proteínas internas gp22 e IPI*–IPIII*.'
    }
  },

  'real-phage-tail': {
    en: {
      simple:
        'Built like Neon Genesis Evangelion’s one-shot pile-bunker, the phage tail wraps a cocked outer spring around a rigid hollow needle—snapping to half its height with zero fuel to stab the cell.',
      story:
        'Cocked during assembly like an Evangelion Unit-01 pile-bunker, 24 twisted rings of the [[gp18 sheath|gp18-real]] wait under hair-trigger tension between the [[gp20 portal|gp20-real]] neck and the [[baseplate|real-phage-baseplate]]. The millisecond the baseplate blooms open on target, those rings spin and crunch to half their height without burning a single ATP—ramming the rigid [[gp19 inner tube|gp19-real]] into the bacterium so [[viral DNA|dna]] floods inside.',
      blueprint:
        'Role: Metastable ATP-free contractile injection actuator · From: Conformational release signal from [[baseplate|real-phage-baseplate]] · Inside: 24 hexameric [[gp18 sheath|gp18-real]] rings rotate and interdigitate, shortening from 92.5 nm to ~42 nm around the non-contractile [[gp19 tube|gp19-real]] · To: Drives [[gp5 needle|gp5-real]] and [[gp19 tube|gp19-real]] across bacterial envelope to gate [[gp20 portal|gp20-real]] DNA release.',
      scientific:
        'Contractile tail assembly (92.5 nm extended length × 24 nm outer diameter; contracted 42 nm × 33 nm) capped by gp13/gp14/gp15 neck rings and six gpWac fibritin whiskers. Outer sheath comprises 144 gp18 subunits in 24 hexameric rings (4.06 nm rise, 17.2° right-handed twist; PDB 3J2M) storing ~25,000 kJ/mol total enthalpy across the sheath; inner tube comprises 144 gp19 β-barrel subunits (9 nm OD, 4 nm lumen; PDB 5W5F).'
    },
    es: {
      simple:
        'Construida como el martinete de un solo disparo de Evangelion, la cola envuelve una aguja hueca con un resorte exterior que se encoge a la mitad sin gastar combustible para apuñalar la bacteria.',
      story:
        'Armados de fábrica como el martinete del EVA-01, 24 anillos retorcidos de la [[vaina gp18|gp18-real]] aguardan tensados al límite entre el cuello del [[portal gp20|gp20-real]] y la [[placa basal|real-phage-baseplate]]. En el milisegundo en que la base estalla sobre la presa, los anillos giran y se aplastan a mitad de altura sin gastar un solo ATP, hundiendo el [[tubo interno gp19|gp19-real]] en la bacteria para inyectar [[ADN viral|dna]].',
      blueprint:
        'Rol: Actuador contráctil metaestable de inyección sin gasto de ATP · Desde: Señal conformacional liberada por la [[placa basal|real-phage-baseplate]] · Dentro: 24 anillos hexaméricos de [[vaina gp18|gp18-real]] rotan y se interdigitan (92.5 nm → ~42 nm) alrededor del [[tubo rígido gp19|gp19-real]] · Hacia: Empuja la [[aguja gp5|gp5-real]] y el [[tubo gp19|gp19-real]] a través de la envoltura y abre el paso de [[ADN|dna]].',
      scientific:
        'Ensamblaje caudal contráctil (estado extendido: 92.5 × 24 nm; contraído: 42 × 33 nm) coronado por el cuello gp13/gp14/gp15 y seis bigotes de fibritina gpWac. La vaina externa reúne 144 subunidades gp18 en 24 anillos hexaméricos (paso axial 4.06 nm, giro dextrógiro 17.2°; PDB 3J2M); el tubo interno consta de 144 subunidades gp19 en barril β (9 nm DE, lumen liso de 4 nm; PDB 5W5F).'
    }
  },

  'real-phage-baseplate': {
    en: {
      simple:
        'Like a Transformers gear-hub mixed with a camera shutter, the baseplate is the phage’s mechanical brain: once sensor legs confirm the right target, it snaps into a star and fires the drill.',
      story:
        'Mechanical tugs race up the [[gp37 fiber tips|gp37-real]] as they lock onto [[OmpC porins|porin]], wrenching this 150-part Transformers dome past its breaking point until it snaps flat into a six-pointed shuriken star! Six Batman-style [[gp12 grappling hooks|gp12-real]] swing down onto LPS, unleashing the sheath above to ram the [[gp5 needle|gp5-real]] through peptidoglycan so viral genes flood [[host ribosomes|ribosome-ecoli]].',
      blueprint:
        'Role: Mechanosensory dome-to-star switch and envelope breach hub · From: Mechanical torque from receptor-bound [[long tail fibers|phage-fiber]] on [[porins|porin]] · Inside: Six peripheral wedges splay open, deploying [[gp12 short fibers|gp12-real]] onto [[LPS|lps]] and releasing the [[gp5 puncturing hub|gp5-real]] · To: Breaches outer membrane and [[peptidoglycan|peptidoglycan]] to dock tail tube at the [[inner membrane|plasma-membrane]].',
      scientific:
        'Hexagonal multiprotein complex (~52 nm dome widening to ~61 nm flat star; ~150 subunits of 15 gene products including gp6, gp7, gp8, gp10, gp11, gp25, gp53; cryo-EM PDB 5IV5/5IV7) centered on the heterotrimeric (gp27)₃–(gp5)₃ hub-needle-lysozyme complex (PDB 1K28) and six folded homotrimeric gp12 short tail fibers (PDB 1OCY) that rotate ~180° to bind inner-core heptose/glucose of E. coli LPS.'
    },
    es: {
      simple:
        'Como un núcleo de Transformers cruzado con el obturador de una cámara, la placa basal es el cerebro mecánico del fago: al confirmar la presa, salta a forma de estrella y dispara el taladro.',
      story:
        'Los tirones suben desde las [[puntas gp37|gp37-real]] al encajar en [[porinas OmpC|porin]], forzando esta cúpula digna de Transformers hasta abrirse de golpe como un shuriken ninja de seis puntas. Seis [[garfios cortos gp12|gp12-real]] al estilo Batman clavan el módulo al LPS y sueltan la vaina para hundir la [[aguja gp5|gp5-real]] en el peptidoglicano rumbo a los [[ribosomas bacterianos|ribosome-ecoli]].',
      blueprint:
        'Rol: Interruptor mecanosensorial cúpula-estrella y cabezal perforador · Desde: Tracción mecánica de las [[fibras largas|phage-fiber]] unidas a [[porinas|porin]] · Dentro: Seis cuñas periféricas se abren, despliegan las [[fibras cortas gp12|gp12-real]] sobre el [[LPS|lps]] y desbloquean el [[buje-aguja gp5|gp5-real]] · Hacia: Perfora membrana externa y [[peptidoglicano|peptidoglycan]] hasta acoplar el tubo con la [[membrana interna|plasma-membrane]].',
      scientific:
        'Complejo multiproteico hexagonal (cúpula de ~52 nm que pasa a estrella plana de ~61 nm; ~150 subunidades de 15 proteínas: gp6, gp7, gp8, gp10, gp11, gp25, gp53; PDB 5IV5/5IV7) centrado en el complejo perforador heterotrimérico (gp27)₃–(gp5)₃ con tres dominios lisozima (PDB 1K28) y seis homotrímeros gp12 (PDB 1OCY) que giran ~180° para anclarse irreversiblemente al núcleo interno del LPS.'
    }
  },

  'bacteriophage': {
    en: {
      simple:
        'Like Voltron snapped together from separate robot lions, Bacteriophage T4 unites four precision modules: a DNA vault head, a pile-bunker syringe tail, a star-trigger baseplate, and six Spider-Man legs.',
      story:
        'Like Voltron combining mid-battle, this lone hunter was forged on three separate assembly lines inside a doomed bacterium before clicking into one 500-atmosphere mech weapon. Set loose in the gut, its [[six long legs|phage-fiber]] stalk fresh prey—ready to trip the [[baseplate|phage-baseplate]], slam the [[contractile tail|phage-tail]], and fire [[viral DNA|dna]] out of its [[pressurized capsid|phage-capsid]] in milliseconds.',
      blueprint:
        'Role: Modular four-part virion architecture · From: Independent head, tail, and fiber self-assembly pathways in infected host · Inside: [[Prolate capsid|phage-capsid]] + [[contractile tail|phage-tail]] + [[hexagonal baseplate|phage-baseplate]] + six [[long tail fibers|phage-fiber]] · To: Delivers [[dsDNA genome|dna]] into target E. coli in the [[realistic infection scene|real-phage]].',
      scientific:
        'Complete Caudoviricetes (Straboviridae, Tequatrovirus T4) virion schematic (~200 nm axial height, ~100 MDa virion mass) integrating over 40 distinct structural gene products across four sub-assemblies: T_end=13/T_mid=20 head with 168.9 kbp dsDNA, 24-ring gp18/gp19 contractile tail with gpWac collar whiskers, 6-fold dome baseplate with gp27–gp5 spike, and six 145 nm gp34–gp37 hinged fibers.'
    },
    es: {
      simple:
        'Como Voltron ensamblado a partir de módulos independientes, el bacteriófago T4 une cuatro piezas letales: cabeza bóveda de ADN, cola martinete, placa basal transformable y seis patas estilo Spider-Man.',
      story:
        'Igual que Voltron uniéndose para el combate, este cazador se forjó en tres líneas de montaje distintas dentro de una bacteria condenada antes de encajar en un arma a 500 atmósferas. Suelto en el intestino, sus [[seis patas largas|phage-fiber]] acechan nuevas presas listas para detonar la [[placa basal|phage-baseplate]], hundir la [[cola contráctil|phage-tail]] y vaciar el [[ADN viral|dna]] de la [[cápside|phage-capsid]] en milisegundos.',
      blueprint:
        'Rol: Arquitectura modular cuatripartita del virión · Desde: Tres rutas independientes de autoensamblaje (cabeza, cola y fibras) · Dentro: [[Cápside prolata|phage-capsid]] + [[cola contráctil|phage-tail]] + [[placa basal|phage-baseplate]] + seis [[fibras largas|phage-fiber]] · Hacia: Inyecta el [[genoma de ADNbc|dna]] sobre E. coli en la [[escena realista|real-phage]].',
      scientific:
        'Modelo esquemático completo del virión de Tequatrovirus T4 (Caudoviricetes, Straboviridae; ~200 nm de altura axial, masa molecular ~100 MDa) que integra más de 40 productos génicos estructurales en cuatro subensamblajes: cabeza T_end=13/T_mid=20 con 168.9 kpb de ADNbc, cola contráctil gp18/gp19 de 24 anillos con bigotes gpWac, placa basal hexagonal con aguja gp27–gp5 y seis fibras articuladas gp34–gp37 de 145 nm.'
    }
  },

  'phage-capsid': {
    en: {
      simple:
        'Sliced open like a Death Star blueprint, the phage head reveals hexagonal and pentagonal armor plates caging a tightly wound spool of DNA above a one-way bottom cannon valve.',
      story:
        'Born as a soft scaffolded shell, this chamber leveled up into Captain America vibranium-grade armor when viral proteases trimmed its [[gp23* wall tiles|gp23-real]] and locked [[gp24* pentamers|gp24-real]] into the corners. A turbo rotary motor at the [[gp20 portal|gp20-real]] then crammed 169,000 base pairs of [[DNA|dna]] inside to ~60 atmospheres, cocking the hydraulic cannon behind [[tail injection|phage-tail]].',
      blueprint:
        'Role: Isolated capsid shell and portal valve sub-assembly · From: Prohead scaffolding maturation and gp17 ATPase packaging · Inside: 155 [[gp23* hexamers|gp23-real]], 11 [[gp24* vertex pentamers|gp24-real]], coaxial [[dsDNA|dna]], and basal [[gp20 portal|gp20-real]] · To: Couples via neck rings to the [[contractile tail|phage-tail]] for pressurized genome ejection.',
      scientific:
        'Isolated T4 head-portal sub-assembly (115 × 85 nm, prolate icosahedron, T_end = 13 laevo, Q = 20; cryo-EM PDB 5VF3, portal PDB 3JA7). Proteolytic maturation by gp21 cleaves gp23 (56 kDa → 48.7 kDa gp23*) and gp24 (48.4 kDa → 46 kDa gp24*), expanding capsid volume ~50% before Soc (9.1 kDa, 810 copies) and Hoc (40.4 kDa, 155 copies) decorate the exterior lattice.'
    },
    es: {
      simple:
        'Abierta en corte como los planos de la Estrella de la Muerte, la cabeza muestra placas hexagonales y pentagonales encerrando un carrete tenso de ADN sobre una válvula de cañón unidireccional.',
      story:
        'Nacida como una cáscara blanda, esta recámara subió de nivel a blindaje digno del escudo del Capitán América cuando proteasas recortaron sus [[losetas gp23*|gp23-real]] y fijaron [[pentámeros gp24*|gp24-real]] en los vértices. Un motor rotatorio en el [[portal gp20|gp20-real]] embutió luego 169,000 pares de bases de [[ADN|dna]] a ~60 atmósferas, cargando el cañón hidráulico de la [[cola contráctil|phage-tail]].',
      blueprint:
        'Rol: Subensamblaje aislado de cápside y válvula portal · Desde: Maduración proteolítica de procápside y empaquetamiento por ATPasa gp17 · Dentro: 155 [[hexámeros gp23*|gp23-real]], 11 [[pentámeros gp24*|gp24-real]], [[ADNbc|dna]] coaxial y [[portal gp20|gp20-real]] · Hacia: Se acopla mediante el cuello a la [[cola contráctil|phage-tail]] para eyectar el genoma.',
      scientific:
        'Subensamblaje cabeza-portal de T4 (115 × 85 nm, icosaedro prolato T_end = 13 laevo, Q = 20; PDB 5VF3, portal PDB 3JA7). La proteasa viral gp21 procesa gp23 (56 → 48.7 kDa gp23*) y gp24 (48.4 → 46 kDa gp24*), expandiendo el volumen interno ~50% antes de la incorporación externa de Soc (9.1 kDa, 810 copias) y Hoc (40.4 kDa, 155 copias).'
    }
  },

  'phage-tail': {
    en: {
      simple:
        'Like Assassin’s Creed’s spring-loaded hidden blade, this cutaway shows an outer sleeve that crunches downward during attack to shoot a slick inner stiletto pipe through bacterial armor.',
      story:
        'Six collar whiskers near the neck fold the lander’s [[long sensor legs|phage-fiber]] up like X-wing S-foils whenever acid or salt spells bad hunting. Once prime waters let the landing gear drop and the [[baseplate|phage-baseplate]] trips, the outer [[gp18 sleeve|gp18-real]] collapses violently, shooting the slick [[gp19 inner pipe|gp19-real]] out like an Assassin’s Creed hidden blade to inject [[DNA|dna]].',
      blueprint:
        'Role: Coaxial contractile sheath, inner tube, and whisker collar · From: Polymerizes upward from assembled [[baseplate|phage-baseplate]] and caps with gp15/gp13/gp14 neck · Inside: Outer 24-ring [[gp18 contractile sheath|gp18-real]] encasing rigid 24-ring [[gp19 tube|gp19-real]] · To: Translates baseplate trigger into 50 nm axial thrust of [[gp19 tube|gp19-real]].',
      scientific:
        'Coaxial tail sub-assembly (92.5 nm length): inner tube of 24 hexameric gp19 rings (18.5 kDa monomer, 9.0 nm OD, 4.0 nm negatively charged lumen; PDB 5W5F) templated over a gp29 tape-measure protein, surrounded by 24 hexameric gp18 rings (71.2 kDa four-domain monomer; PDB 3J2M), terminated by hexameric gp15 connector, gp13/gp14 neck, and six trimeric gpWac fibritin whiskers (~53 nm).'
    },
    es: {
      simple:
        'Como la hoja oculta con resorte de Assassin’s Creed, este corte revela una funda exterior que se encoge de golpe para disparar un estilete hueco interior a través de la muralla bacteriana.',
      story:
        'Seis bigotes del cuello pliegan las [[patas sensoras largas|phage-fiber]] como las alas de un X-wing cuando el medio ácido arruina la caza. Apenas aguas propicias bajan el tren de aterrizaje y salta la [[placa basal|phage-baseplate]], la [[funda externa gp18|gp18-real]] colapsa de golpe y dispara el [[tubo interno gp19|gp19-real]] cual hoja oculta de Assassin’s Creed para inyectar [[ADN|dna]].',
      blueprint:
        'Rol: Subensamblaje coaxial de vaina contráctil, tubo interno y cuello con bigotes · Desde: Polimeriza sobre la [[placa basal|phage-baseplate]] y se sella con el cuello gp15/gp13/gp14 · Dentro: 24 anillos de [[vaina gp18|gp18-real]] rodeando 24 anillos del [[tubo rígido gp19|gp19-real]] · Hacia: Convierte el disparo basal en ~50 nm de avance perforante del [[tubo gp19|gp19-real]].',
      scientific:
        'Subensamblaje caudal coaxial (92.5 nm de longitud): tubo interno de 24 anillos hexaméricos gp19 (monómero de 18.5 kDa, 9.0 nm DE, lumen electronegativo de 4.0 nm; PDB 5W5F) medido por la proteína cinta métrica gp29, rodeado por 24 anillos hexaméricos gp18 (monómero de 71.2 kDa en cuatro dominios; PDB 3J2M), rematado por el conector gp15, cuello gp13/gp14 y seis bigotes triméricos de fibritina gpWac (~53 nm).'
    }
  },

  'phage-baseplate': {
    en: {
      simple:
        'Like an Indiana Jones temple pressure-plate, six wedged protein blocks hold a central dagger and six folded grappling hooks—waiting for one tug from the legs to spring the trap.',
      story:
        'Picture this hexagonal crown as an Indiana Jones booby-trap holding back the cocked [[tail sheath|phage-tail]]. The instant the [[long tail fibers|phage-fiber]] yank its outer rim, all six wedges snap open into a ninja star—dropping [[gp12 short hooks|gp12-real]] onto the victim while unsheathing the central [[gp5 β-helix dagger|gp5-real]] and its wall-chewing lysozyme blades.',
      blueprint:
        'Role: Six-wedge mechanical trigger hub and puncturing tip · From: Assembles six peripheral wedges around central [[gp27–gp5 hub|gp5-real]] · Inside: Holds stowed [[gp12 short tail fibers|gp12-real]] and triple-β-helix needle with three T4 lysozyme domains · To: Unlocks [[gp18 sheath|gp18-real]] contraction upon [[long fiber|phage-fiber]] engagement.',
      scientific:
        'Six-fold symmetric baseplate (~52 nm diameter, ~6.5 MDa) built from six peripheral wedges (gp6, gp7, gp8, gp10, gp11, gp25, gp53) surrounding a central hub of gp27 trimer, gp5 trimer (with three 18.7 kDa glycoside hydrolase family 24 lysozyme domains and C-terminal triple β-helix, PDB 1K28), and monomeric gp5.4 PAAR-motif apex tip, with six trimeric gp12 fibers (PDB 1OCY) stowed underneath.'
    },
    es: {
      simple:
        'Como una baldosa trampa de Indiana Jones, seis cuñas proteicas sujetan una daga central y seis garfios plegados, esperando un tirón de las patas para disparar toda la trampa.',
      story:
        'Imagina esta corona hexagonal como el mecanismo trampa de un templo de Indiana Jones reteniendo la [[vaina caudal|phage-tail]]. Apenas las [[fibras largas|phage-fiber]] tiran del borde, las seis cuñas se abren en estrella ninja, clavando los [[garfios cortos gp12|gp12-real]] en la presa mientras desenvainan la [[daga central gp5|gp5-real]] con sus cuchillas de lisozima.',
      blueprint:
        'Rol: Corona disparadora de seis cuñas y punta perforadora · Desde: Ensambla seis cuñas periféricas en torno al [[buje central gp27–gp5|gp5-real]] · Dentro: Aloja [[fibras cortas gp12|gp12-real]] plegadas y aguja en triple hélice β con tres dominios lisozima · Hacia: Desbloquea la contracción de la [[vaina gp18|gp18-real]] al tensarse las [[fibras largas|phage-fiber]].',
      scientific:
        'Placa basal de simetría hexamérica (~52 nm de diámetro, ~6.5 MDa) formada por seis cuñas externas (gp6, gp7, gp8, gp10, gp11, gp25, gp53) en torno al buje central de trímero gp27, trímero gp5 (con tres dominios lisozima GH24 de 18.7 kDa y triple hélice β C-terminal, PDB 1K28) y punta monomérica gp5.4 con motivo PAAR, más seis homotrímeros gp12 (PDB 1OCY) plegados bajo la base.'
    }
  },

  'phage-fiber': {
    en: {
      simple:
        'Like Spider-Man’s Iron-Spider mechanical legs, each 145-nanometer hinged fiber tiptoes across a bacterium to feel for the exact right doorway proteins before letting the phage fire.',
      story:
        'Bent at a nimble knee joint like Spider-Man’s Iron-Spider claws, six spindly legs let the lander tiptoe across E. coli—tapping surface sugars until their iron-braced [[gp37 needle tips|gp37-real]] click into [[OmpC porins|porin]] and [[LPS|lps]]. When at least three legs lock on together, their lever pull wrenches the [[baseplate|phage-baseplate]] open and seals the bacterium’s doom.',
      blueprint:
        'Role: Hinged host-recognition sensor leg and mechanical lever · From: Extends from [[baseplate|phage-baseplate]] gp9 socket when collar whiskers release it · Inside: Proximal gp34 thigh + monomeric gp35 knee hinge + gp36 shin + iron-braced [[gp37 receptor tip|gp37-real]] · To: Reversibly samples [[LPS|lps]] and [[OmpC/OmpF porins|porin]], transmitting pull to [[baseplate|phage-baseplate]].',
      scientific:
        'Articulated 145 nm appendage: proximal half-fiber is a homotrimer of gp34 (1,289 aa, ~65 nm), joined via monomeric gp35 knee angle (~19°–160° flexion) to distal half-fiber composed of homotrimeric gp36 (221 aa) and homotrimeric gp37 (1,026 aa; C-terminal tip PDB 2XGF coordinated by seven octahedral Fe²⁺ ions), assembled with dedicated gp38/gp57A molecular chaperones.'
    },
    es: {
      simple:
        'Como las patas mecánicas del traje Iron-Spider de Spider-Man, cada fibra articulada de 145 nanómetros tantea la bacteria buscando las cerraduras exactas antes de autorizar el disparo.',
      story:
        'Articuladas con rodilla propia como las garras Iron-Spider de Spider-Man, seis largas patas permiten al módulo caminar sobre E. coli probando azúcares hasta que sus [[puntas gp37|gp37-real]] con núcleo de hierro encajan en [[porinas OmpC|porin]] y [[LPS|lps]]. Cuando tres o más patas fijan blanco a la vez, su palanca abre la [[placa basal|phage-baseplate]] y sentencia a la célula.',
      blueprint:
        'Rol: Pata sensora articulada de reconocimiento y palanca mecánica · Desde: Se extiende desde el zócalo gp9 de la [[placa basal|phage-baseplate]] al soltarse del collar · Dentro: Muslo proximal gp34 + rótula monomérica gp35 + tibia gp36 + [[punta receptora gp37|gp37-real]] con iones hierro · Hacia: Explora [[LPS|lps]] y [[porinas OmpC/OmpF|porin]], transmitiendo tracción a la [[placa basal|phage-baseplate]].',
      scientific:
        'Apéndice articulado de 145 nm: semifibra proximal homotrimérica gp34 (1,289 aa, ~65 nm), articulación monomérica de rodilla gp35 y semifibra distal formada por homotrímero gp36 (221 aa) y homotrímero gp37 (1,026 aa; extremo C-terminal PDB 2XGF estabilizado axialmente por siete iones Fe²⁺ octaédricos), plegado mediante las chaperonas específicas gp38 y gp57A.'
    }
  },

  'gp23-real': {
    en: {
      simple:
        'Six gp23* proteins lock into a flat Beskar-tough hexagonal shield tile, while tiny outer clamp proteins weld tile to tile into an almost unbreakable pressure tank.',
      story:
        'To cage 169,000 base pairs bucking inside the [[phage head|real-phage-capsid]], 155 six-sided shields pave the walls between [[gp24* corner caps|gp24-real]]. Each subunit weaves its [[polypeptide chains|polypeptide]] like Mandalorian Beskar chainmail, while outer Soc clamps staple seam to seam so acid shock, heat, and 60 atmospheres of DNA pressure never crack the hull.',
      blueprint:
        'Role: Major hexameric capsid wall tile with external Soc/Hoc reinforcement · From: Translated as gp23 on host ribosomes, folded via GroEL/gp31, cleaved to gp23* · Inside: Six HK97-fold [[polypeptides|polypeptide]] ringed by Soc trimer clamps and a central Hoc spike · To: Interlocks across 20 facets with [[gp24* pentamers|gp24-real]] and [[gp20 portal|gp20-real]] to form the [[capsid|real-phage-capsid]].',
      scientific:
        'Cryo-EM atomic structure (PDB 5VF3, ~14 nm hexamer width): six cleaved gp23* monomers (residues 66–521, 48.7 kDa) adopt the canonical bacteriophage HK97 fold (A-domain, P-domain, E-loop, and N-arm) plus a T4-specific insertion domain. Surrounded at quasi-three-fold interfaces by 9.1 kDa Soc ("small outer capsid") clamps that raise thermal denaturation by ~6 °C and pH stability to pH 10.6, with one central 40.4 kDa Hoc fiber.'
    },
    es: {
      simple:
        'Seis proteínas gp23* forman un escudo hexagonal digno del beskar mandaloriano, mientras grapas exteriores sueldan loseta con loseta en un tanque de presión casi irrompible.',
      story:
        'Para contener los 169,000 pares de bases embravecidos en la [[cabeza del fago|real-phage-capsid]], 155 escudos hexagonales pavimentan los muros entre las [[esquinas gp24*|gp24-real]]. Cada pieza trenza sus [[cadenas polipeptídicas|polypeptide]] como cota de beskar mandaloriano y las grapas Soc refuerzan las juntas para resistir ácido, calor y 60 atmósferas sin agrietarse.',
      blueprint:
        'Rol: Loseta hexamérica principal de la cápside reforzada con Soc y Hoc · Desde: Traducida como gp23, plegada con GroEL/gp31 y escindida a gp23* · Dentro: Seis [[polipéptidos|polypeptide]] con plegamiento HK97 rodeados por grapas Soc y una espiga Hoc central · Hacia: Ensambla las facetas junto a [[pentámeros gp24*|gp24-real]] y el [[portal gp20|gp20-real]] en la [[cápside|real-phage-capsid]].',
      scientific:
        'Estructura atómica crio-EM (PDB 5VF3, ~14 nm de diámetro): seis monómeros gp23* maduros (residuos 66–521, 48.7 kDa) con plegamiento canónico HK97 (dominios A y P, bucle E y brazo N) más un dominio de inserción propio de T4. Estabilizado en ejes cuasi-ternarios por abrazaderas Soc (9.1 kDa) que elevan la T_m en ~6 °C y la resistencia alcalina hasta pH 10.6, con una espiga central Hoc (40.4 kDa).'
    }
  },

  'gp24-real': {
    en: {
      simple:
        'Just like a classic Champions League soccer ball needs twelve pentagons among its hexagons to curve shut, eleven five-part gp24* caps seal the phage head’s sharpest corners.',
      story:
        'Pure geometry rules even alien-looking viruses: flat [[gp23* hexagons|gp23-real]] alone would roll into an endless pipe unless five-sided keystones curve the armor closed like a soccer ball. Eleven pentamer caps rivet the highest-stress corners of the [[capsid vault|real-phage-capsid]] against pushing [[DNA|dna]], saving the twelfth bottom corner for the [[gp20 portal|gp20-real]] cannon.',
      blueprint:
        'Role: Five-fold icosahedral corner keystone · From: Pentamerizes at 11 prohead vertices during gp22-guided assembly and matures via gp21 cleavage · Inside: Five HK97-fold [[polypeptide|polypeptide]] subunits lacking Soc/Hoc binding sites · To: Introduces 60° disclination curvature into the [[gp23* hexamer|gp23-real]] lattice to close the [[phage head|real-phage-capsid]].',
      scientific:
        'Cryo-EM vertex pentamer structure (PDB 5VF3, ~12.5 nm diameter): homopentamer of proteolytically cleaved gp24* (residues 11–427, 46.0 kDa), paralogous to gp23* with an HK97 core fold specialized for high dihedral bending angles at 11 of the 12 icosahedral five-fold vertices (single gp24 bypass mutants map to gp23 substitutions that tolerate pentameric curvature).'
    },
    es: {
      simple:
        'Igual que un balón de fútbol necesita doce pentágonos entre sus hexágonos para cerrarse en esfera, once tapas gp24* de cinco piezas sellan las esquinas más agudas de la cabeza del fago.',
      story:
        'La geometría manda hasta en los virus: puros [[hexágonos gp23*|gp23-real]] formarían un tubo sin fin a menos que piezas de cinco lados curven el blindaje como un balón de fútbol. Once tapas pentagonales remachan los vértices más exigidos de la [[bóveda de la cápside|real-phage-capsid]] frente al empuje del [[ADN|dna]], dejando el duodécimo vértice al [[portal gp20|gp20-real]].',
      blueprint:
        'Rol: Piedra angular pentamérica de los vértices icosaédricos · Desde: Pentameriza en 11 vértices de la procápside y madura por corte de gp21 · Dentro: Cinco subunidades [[polipeptídicas|polypeptide]] con plegamiento HK97 sin sitios Soc/Hoc · Hacia: Introduce la curvatura pentagonal en la red de [[hexámeros gp23*|gp23-real]] para cerrar la [[cabeza del fago|real-phage-capsid]].',
      scientific:
        'Estructura crio-EM del pentámero de vértice (PDB 5VF3, ~12.5 nm de diámetro): homopentámero de gp24* procesada (residuos 11–427, 46.0 kDa), paráloga de gp23* con núcleo HK97 especializado en soportar los ángulos diedros agudos de 11 de los 12 vértices icosaédricos de orden cinco.'
    }
  },

  'gp20-real': {
    en: {
      simple:
        'Perched at the bottom corner like an Iron Man jet nozzle, this 12-bladed protein ring first pumps DNA uphill into the head and later fires it hyperspeed down the tail.',
      story:
        'Guarding the one corner of the [[capsid|real-phage-capsid]] left uncapped, this 12-bladed Stark-style turbine first docks a furious ATP motor that stuffs 169,000 base pairs of [[DNA|dna]] uphill into the vault. Once pressure hits 60 atmospheres, neck rings cork the nozzle until the [[contractile sheath|gp18-real]] fires below—uncorking the valve into the [[inner tail tube|gp19-real]].',
      blueprint:
        'Role: Bidirectional DNA packaging valve and head-to-tail symmetry adaptor · From: Nucleates prohead assembly on host inner membrane before gp17 packaging · Inside: Dodecameric ring of [[alpha-helical|alpha-helix]] crown, clip, stem, and wing domains framing a 3.5 nm channel · To: Connects 5-fold [[capsid vertex|real-phage-capsid]] to 6-fold neck and [[gp19 tail tube|gp19-real]].',
      scientific:
        'Cryo-EM dodecamer (PDB 3JA7; ~17 nm outer diameter × 14 nm height; 12 × 61 kDa gp20 subunits, residues 524 aa) bridging the symmetry mismatch between the 5-fold capsid vertex and the 6-fold tail. Central channel narrows to ~2.8–3.5 nm at tunnel loops that prevent premature DNA slippage after pentameric gp17 terminase (ATPase rate ~300–2,000 bp/s) detaches.'
    },
    es: {
      simple:
        'Situado en la esquina inferior como la tobera de un reactor de Iron Man, este anillo de 12 piezas bombea primero el ADN hacia la cabeza y luego lo dispara a toda máquina por la cola.',
      story:
        'Instalada en el único vértice libre de la [[cápside|real-phage-capsid]], esta turbina de 12 álabes al estilo Tony Stark acopla primero un motor de ATP que embute 169,000 pares de bases de [[ADN|dna]] cuesta arriba. A 60 atmósferas, el cuello tapona la tobera hasta que dispara la [[vaina contráctil|gp18-real]] y descorcha el genoma por el [[tubo interno gp19|gp19-real]].',
      blueprint:
        'Rol: Válvula bidireccional de ADN y adaptador de simetría cabeza-cola · Desde: Nuclea la procápside antes del empaquetamiento por el motor gp17 · Dentro: Anillo dodecamérico con dominios ricos en [[hélices alfa|alpha-helix]] en torno a un poro de 3.5 nm · Hacia: Acopla el vértice de orden 5 de la [[cápside|real-phage-capsid]] con la simetría 6 del [[tubo gp19|gp19-real]].',
      scientific:
        'Dodecámero por crio-EM (PDB 3JA7; ~17 nm DE × 14 nm de alto; 12 subunidades gp20 de 61 kDa, 524 aa) que resuelve el desajuste de simetría entre el vértice 5 de la cápside y el eje 6 de la cola. Sus bucles de túnel estrechan el lumen a ~2.8–3.5 nm, reteniendo el ADN empaquetado por la terminasa gp17 (~300–2,000 pb/s) hasta la eyección.'
    }
  },

  'gp18-real': {
    en: {
      simple:
        'Twenty-four stacked rings of gp18 coil around the tail like a cocked mecha piston; once tripped, the gears slide into one another to slam the inner needle straight through armor.',
      story:
        'Pinned beneath the [[portal valve|gp20-real]] and held taut by the [[baseplate|real-phage-baseplate]] below, 144 gp18 subunits crouch like a cocked Evangelion pile-bunker spring. One flick of the baseplate latch triggers a domino wave up all 24 rings: neighboring [[polypeptides|polypeptide]] twist and interleave, squashing the sleeve short and ramming the [[gp19 inner pipe|gp19-real]] into E. coli.',
      blueprint:
        'Role: Spring-loaded contractile sheath ring and gp15 neck terminator · From: Polymerizes in metastable extended state around [[gp19 tube|gp19-real]] from baseplate upward · Inside: Hexameric gp18 rings bridged via β-sheet handshakes and capped by hexameric gp15 · To: Releases stored conformational energy upon [[baseplate|real-phage-baseplate]] expansion to thrust [[gp19 tube|gp19-real]] downward.',
      scientific:
        'Cryo-EM structure of top contractile sheath ring and hexameric gp15 neck connector (PDB 3J2M; ~24 nm extended OD → 33 nm contracted OD). Each 659-residue gp18 monomer (71.2 kDa) comprises four domains: inner domains I/II maintain conserved β-sheet augmentations across contraction while rotating ~45° and translating radially outward, reducing axial rise per hexamer from 4.06 nm to 1.64 nm (~55% shortening) without nucleotide hydrolysis.'
    },
    es: {
      simple:
        'Veinticuatro anillos de gp18 rodean la cola como el pistón cargado de un mecha; al soltarse el seguro, sus piezas engranan entre sí para clavar la aguja interior en la coraza.',
      story:
        'Sujetas bajo la [[válvula portal|gp20-real]] y retenidas abajo por la [[placa basal|real-phage-baseplate]], 144 copias de gp18 aguardan agazapadas como el resorte de un martinete de Evangelion. Soltar el pestillo desata un dominó por los 24 anillos: los [[polipéptidos|polypeptide]] giran y se entrelazan, acortando la manga para clavar el [[tubo interno gp19|gp19-real]] en E. coli.',
      blueprint:
        'Rol: Anillo de vaina contráctil metaestable y conector apical gp15 · Desde: Polimeriza en estado extendido de alta energía en torno al [[tubo gp19|gp19-real]] · Dentro: Anillos hexaméricos gp18 enlazados por hojas β y sellados arriba por gp15 · Hacia: Libera energía elástica al abrirse la [[placa basal|real-phage-baseplate]], empujando al [[tubo gp19|gp19-real]].',
      scientific:
        'Estructura crio-EM del anillo superior de vaina gp18 y conector hexamérico gp15 (PDB 3J2M; 24 nm DE extendido → 33 nm contraído). Cada monómero gp18 (659 aa, 71.2 kDa) posee cuatro dominios; durante la contracción, los dominios internos I/II conservan enlaces inter-anillo por aumento de lámina β mientras rotan ~45°, reduciendo el paso axial de 4.06 nm a 1.64 nm sin hidrólisis de ATP.'
    }
  },

  'gp19-real': {
    en: {
      simple:
        'Like Magneto’s frictionless magnetic railgun barrel, this rigid 4-nanometer inner pipe uses negative electrical charges to levitate DNA down the center at thousands of letters per second.',
      story:
        'While the [[gp18 outer sheath|gp18-real]] crunches violently outside, this rigid railgun barrel never bends: tipped by the [[gp5 puncturing needle|gp5-real]], it punches across the breached wall to kiss the [[inner membrane|plasma-membrane]]. Negatively charged walls repel negatively charged [[DNA|dna]] like Magneto levitating steel, firing 169,000 base pairs through with zero friction!',
      blueprint:
        'Role: Rigid piercing syringe barrel and low-friction DNA conduit · From: Stacks 24 hexameric rings atop [[gp27–gp5 hub|gp5-real]] along gp29 tape-measure · Inside: Smooth β-barrel lumen (4 nm bore) lined with electronegative [[amino acids|amino-acid]] · To: Delivers pressurized [[DNA|dna]] from [[gp20 portal|gp20-real]] across host [[inner membrane|plasma-membrane]].',
      scientific:
        'Cryo-EM atomic structure of stacked hexameric tail-tube rings (PDB 5W5F; 9.0 nm OD, 4.0 nm ID, 4.06 nm axial rise, 17.2° helical twist). Each 163-residue gp19 subunit (18.5 kDa) folds into an eight-stranded antiparallel β-barrel fortified by inter-ring β-hairpin loops; lumenal electrostatic negative potential prevents nonspecific sticking of the polyanionic B-DNA phosphate backbone (2.0 nm diameter) during rapid translocation.'
    },
    es: {
      simple:
        'Como un cañón de riel magnético de Magneto sin fricción, este tubo rígido de 4 nanómetros usa cargas negativas para hacer levitar el ADN por su centro a miles de letras por segundo.',
      story:
        'Mientras la [[vaina externa gp18|gp18-real]] se aplasta afuera, este cañón rígido no cede: guiado por la [[aguja perforadora gp5|gp5-real]], cruza la muralla rota hasta besar la [[membrana interna|plasma-membrane]]. Su interior negativo repele al [[ADN|dna]] negativo como Magneto levitando metal, disparando 169,000 pares de bases sin fricción alguna.',
      blueprint:
        'Rol: Cañón perforador rígido y conducto de ADN de baja fricción · Desde: Apila 24 hexámeros sobre el [[buje gp27–gp5|gp5-real]] guiado por la cinta métrica gp29 · Dentro: Barril β continuo (4 nm de luz) tapizado por [[aminoácidos|amino-acid]] electronegativos · Hacia: Canaliza el [[ADN|dna]] desde el [[portal gp20|gp20-real]] a través de la [[membrana interna|plasma-membrane]].',
      scientific:
        'Estructura atómica crio-EM de anillos hexaméricos del tubo caudal (PDB 5W5F; 9.0 nm DE, 4.0 nm DI, paso axial 4.06 nm, giro 17.2°). Cada subunidad gp19 (163 aa, 18.5 kDa) forma un barril β antiparalelo de ocho hebras; el potencial electrostático negativo del lumen evita la adhesión del esqueleto fosfodiéster del ADN-B (2.0 nm de diámetro) durante la translocación.'
    }
  },

  'gp5-real': {
    en: {
      simple:
        'Like Evangelion’s Progressive Knife tipped with armor-cutting scissors, this triangular protein dagger punches through outer skin and then snips a clean doorway through the cell wall.',
      story:
        'Mounted on the nose of the [[gp19 tail tube|gp19-real]] inside the [[baseplate|real-phage-baseplate]], three braided chains form an Evangelion-style Progressive Knife stiff enough to stab straight through outer [[LPS|lps]] armor. Inside the periplasm, the tip pops off like a tank sabot so three lysozyme blades scissor open the [[peptidoglycan|peptidoglycan]] mesh ahead of the tube.',
      blueprint:
        'Role: Membrane-piercing β-helix spike and periplasmic murein hydrolase · From: Driven downward by [[gp18 sheath|gp18-real]] thrust via [[gp19 tube|gp19-real]] · Inside: Cup-like gp27 trimer adaptor + gp5 triple-stranded β-helix needle + three T4 lysozyme domains · To: Punctures [[LPS outer membrane|lps]] and digests [[peptidoglycan|peptidoglycan]] before dissociating from the tube tip.',
      scientific:
        'Crystal structure of the heterotrimeric cell-puncturing complex (gp27)₃–(gp5)₃ (PDB 1K28, ~19 nm height): trimeric gp27 forms a hollow pseudo-6-fold cylinder coupling the 6-fold gp19 tube to the 3-fold gp5 spike. Autocatalytic cleavage at gp5 Ser351–Ala352 separates the N-terminal OB-fold and three GH24 β-(1,4)-N-acetylmuramidase lysozyme domains from the C-terminal 11 nm equilateral-prism triple-stranded β-helix (residues 389–575).'
    },
    es: {
      simple:
        'Como el cuchillo progresivo de Evangelion armado con tijeras enzimáticas, esta daga triangular perfora la piel externa de la bacteria y recorta luego una puerta limpia en su pared.',
      story:
        'Montadas en la punta del [[tubo caudal gp19|gp19-real]] dentro de la [[placa basal|real-phage-baseplate]], tres cadenas trenzadas forman un cuchillo progresivo digno de Evangelion capaz de perforar el [[LPS|lps]] exterior. En el periplasma, la punta salta como casquillo de tanque y tres cuchillas de lisozima tijeretean el [[peptidoglicano|peptidoglycan]] frente al tubo.',
      blueprint:
        'Rol: Estilete perforador en triple hélice β e hidrolasa de mureína · Desde: Impulsado axialmente por la [[vaina gp18|gp18-real]] a través del [[tubo gp19|gp19-real]] · Dentro: Adaptador trimérico gp27 + aguja gp5 en prisma β + tres dominios lisozima · Hacia: Perfora la [[membrana de LPS|lps]] y digiere el [[peptidoglicano|peptidoglycan]] antes de soltarse.',
      scientific:
        'Estructura cristalográfica del complejo perforador heterotrimérico (gp27)₃–(gp5)₃ (PDB 1K28, ~19 nm de alto): el trímero gp27 actúa como cilindro pseudohexamérico que acopla el tubo gp19 al eje ternario de gp5. La escisión autocatalítica en Ser351–Ala352 separa los tres dominios lisozima GH24 (β-1,4-N-acetilmuramidasa) del prisma rígido C-terminal en triple hélice β de 11 nm (residuos 389–575).'
    }
  },

  'gp37-real': {
    en: {
      simple:
        'Reinforced down the middle by seven iron atoms like Wolverine’s adamantium bones, this slender leg tip feels for E. coli’s exact surface pores so the phage never wastes its one shot.',
      story:
        'At the tip of each [[long tail fiber|phage-fiber]], three [[polypeptide strands|polypeptide]] braid around seven iron ions like Wolverine’s metal-laced skeleton so the probe never buckles on impact. Its fingertip taps [[LPS|lps]] sugars until it clicks cleanly into trimeric [[OmpC porins|porin]], sending the mechanical tug up the leg to fire the [[baseplate|real-phage-baseplate]].',
      blueprint:
        'Role: Iron-braced distal receptor-recognition fingertip · From: Terminates each 145 nm [[long tail fiber|phage-fiber]] distal rod · Inside: Intertwined gp37 homotrimer coordinated along its symmetry axis by seven Fe²⁺ ions · To: Specifically binds E. coli [[OmpC porins|porin]] and [[LPS|lps]] glucosyl residues to trigger [[baseplate|real-phage-baseplate]] unlocking.',
      scientific:
        'Crystal structure of the C-terminal gp37 needle tip homotrimer (PDB 2XGF; residues 785–1026, ~20 nm length × ~2.5 nm width). Three chains interweave in a novel β-helical/coiled braid stabilized along the central 3-fold axis by seven octahedrally coordinated Fe²⁺ ions chelated by conserved His-X-His motifs; the distal globular head (residues 931–966) mediates reversible binding to outer-membrane OmpC loops and terminal LPS glucose.'
    },
    es: {
      simple:
        'Reforzada por dentro con siete átomos de hierro como el esqueleto de Wolverine, la punta de cada pata larga palpa los poros exactos de E. coli para no malgastar jamás su único disparo.',
      story:
        'En el extremo de cada [[fibra caudal larga|phage-fiber]], tres [[hebras polipeptídicas|polypeptide]] se trenzan sobre siete iones de hierro como los huesos blindados de Wolverine para no doblarse al chocar. Su yema tantea el [[LPS|lps]] hasta encajar en las [[porinas OmpC|porin]], enviando pata arriba el tirón que detona la [[placa basal|real-phage-baseplate]].',
      blueprint:
        'Rol: Punta sensora distal reforzada con hierro para reconocimiento de receptores · Desde: Remata el segmento distal de cada [[fibra larga|phage-fiber]] de 145 nm · Dentro: Homotrímero gp37 entrelazado sobre un eje de siete iones Fe²⁺ · Hacia: Reconoce [[porinas OmpC|porin]] y glucosas del [[LPS|lps]], transmitiendo tracción a la [[placa basal|real-phage-baseplate]].',
      scientific:
        'Estructura cristalográfica del extremo C-terminal homotrimérico de gp37 (PDB 2XGF; residuos 785–1026, ~20 nm × ~2.5 nm). Tres cadenas entrelazadas alrededor de siete iones Fe²⁺ coordinados octaédricamente por motivos conservados His-X-His a lo largo del eje ternario; el cabezal globular distal (residuos 931–966) media la unión reversible a bucles extracelulares de OmpC y residuos glucosilados del LPS.'
    }
  },

  'gp12-real': {
    en: {
      simple:
        'Like Attack on Titan’s ODM grappling hooks, six zinc-tipped short claws flip down under the baseplate at the moment of attack to bolt the phage down against syringe recoil.',
      story:
        'Folded out of sight under the [[baseplate|real-phage-baseplate]] while the [[long fibers|phage-fiber]] scout ahead, six gp12 claws swing 180 degrees down the instant the dome snaps into a star. Like Attack on Titan ODM anchors, their zinc-loaded jaws bite irreversibly into [[LPS|lps]] so kickback from the [[gp5 needle|gp5-real]] cannot bounce the lander off target.',
      blueprint:
        'Role: Irreversible secondary grappling hook resisting puncture recoil · From: Stowed horizontally under dome-state [[baseplate|real-phage-baseplate]] wedges · Inside: Homotrimeric β-spiral shaft and Zn²⁺-stabilized C-terminal receptor head · To: Rotates downward during dome-to-star transition to lock onto [[LPS|lps]] inner core during [[gp18 sheath|gp18-real]] firing.',
      scientific:
        'Crystal structure of the proteolytically stable C-terminal gp12 homotrimer (PDB 1OCY; residues 246–527, ~13 nm fragment of the 34 nm full-length 3 × 56 kDa fiber). Features an intertwined triple β-spiral shaft, central α-helical neck, and globular C-terminal receptor-binding head coordinated around a structural Zn²⁺ ion on the 3-fold axis that binds E. coli LPS core heptose-phosphate with sub-nanomolar pseudo-irreversible avidity.'
    },
    es: {
      simple:
        'Como los garfios de maniobras de Ataque a los Titanes, seis garras cortas con punta de zinc bajan de la placa basal al atacar para empernar el fago contra el retroceso.',
      story:
        'Plegados bajo la [[placa basal|real-phage-baseplate]] mientras exploran las [[fibras largas|phage-fiber]], seis espolones gp12 giran 180 grados abajo apenas la cúpula estalla en estrella. Igual que los anclajes de Ataque a los Titanes, sus garras de zinc muerden sin retorno el [[LPS|lps]] para que el retroceso de la [[aguja gp5|gp5-real]] no despegue al módulo.',
      blueprint:
        'Rol: Garfio secundario irreversible contra el retroceso de punción · Desde: Plegado horizontalmente bajo las cuñas de la [[placa basal|real-phage-baseplate]] · Dentro: Eje homotrimérico en triple espiral β y cabezal C-terminal con ion Zn²⁺ · Hacia: Rota hacia abajo al abrirse la estrella para anclarse al [[LPS|lps]] durante el disparo de la [[vaina gp18|gp18-real]].',
      scientific:
        'Estructura cristalográfica del fragmento C-terminal homotrimérico de gp12 (PDB 1OCY; residuos 246–527, ~13 nm de la fibra completa de 34 nm, 3 × 56 kDa). Combina un eje en triple espiral β, cuello α-helicoidal y cabezal globular estabilizado por un ion Zn²⁺ axial que se une con avidez pseudoirreversible a los residuos heptosa-fosfato del núcleo interno del LPS.'
    }
  },

  viruses: {
    en: {
      simple:
        'Viruses are the Ocean’s Eleven of microbiology: non-living genetic heist crews with zero metabolism, packing DNA or RNA inside custom syringes, crystals, rods, or stealth cloaks to rob living cells.',
      story:
        'Meet the Ocean’s Eleven of molecular safecrackers—stone-dead outside a host, yet each built for a signature heist! [[Bacteriophage T4|real-phage]] slams E. coli with an Evangelion-style hypodermic pile-bunker, [[Human Adenovirus|real-adenovirus]] rolls a Kryptonian crystal Trojan horse to a nuclear pore, and [[Tobacco Mosaic Virus|real-tmv]] tunnels a helical rod between plant cells, while [[SARS-CoV-2|real-coronavirus]] and [[HIV-1|real-hiv]] fuse stolen lipid disguises straight into human targets.',
      blueprint:
        'Role: Comparative taxonomy of viral capsid symmetries and genome strategies · From: Inert extracellular virions awaiting specific host surface receptors or wounds · Inside: Protective protein/lipid shells housing [[DNA|dna]] or [[RNA|rna]] across myovirus ([[T4|real-phage]]), icosahedral ([[Ad5|real-adenovirus]]), helical ([[TMV|real-tmv]]), and enveloped ([[CoV-2|real-coronavirus]], [[HIV-1|real-hiv]]) classes · To: Hijacks host transcription and translation machinery to self-assemble progeny.',
      scientific:
        'Comparative structural virology across Baltimore classes I, IV, and VI (18–200 nm scale): (1) Tequatrovirus T4 (Baltimore I, 168.9 kbp linear dsDNA, prolate T=13/Q=20 head + contractile tail); (2) SARS-CoV-2 (Baltimore IV, 29.9 kb (+)ssRNA, pleomorphic ~100 nm lipid envelope with trimeric S); (3) HIV-1 (Baltimore VI, diploid 9.7 kb (+)ssRNA, fullerene CA cone + RT/IN); (4) Human Mastadenovirus C5 (Baltimore I, 36 kbp linear dsDNA, 90 nm pseudo-T=25 icosahedron); (5) Tobacco mosaic virus (Baltimore IV, 6.4 kb (+)ssRNA, 18 × 300 nm 16⅓-subunit/turn helix).'
    },
    es: {
      simple:
        'Los virus son la banda de Ocean’s Eleven de la microbiología: piratas genéticos sin vida propia que guardan ADN o ARN en jeringas, cristales, bastones o capas furtivas para asaltar células.',
      story:
        'Conoce al escuadrón Ocean’s Eleven del asalto molecular: inertes fuera del huésped, pero diseñados para golpes maestros. El [[bacteriófago T4|real-phage]] perfora bacterias con un martinete estilo Evangelion, el [[adenovirus humano|real-adenovirus]] cuela un cristal kryptoniano hasta el poro nuclear y el [[virus del mosaico del tabaco|real-tmv]] cruza túneles vegetales, mientras [[SARS-CoV-2|real-coronavirus]] y [[VIH-1|real-hiv]] funden capas lipídicas robadas contra células humanas.',
      blueprint:
        'Rol: Comparativa estructural de simetrías de cápside y estrategias genómicas · Desde: Viriones extracelulares inertes a la espera de receptores o heridas celulares · Dentro: Cubiertas proteicas o lipídicas con [[ADN|dna]] o [[ARN|rna]]: miovirus ([[T4|real-phage]]), icosaédrico ([[Ad5|real-adenovirus]]), helicoidal ([[VMT|real-tmv]]) y envueltos ([[CoV-2|real-coronavirus]], [[VIH-1|real-hiv]]) · Hacia: Secuestran la maquinaria celular para autoensamblar progenie.',
      scientific:
        'Virología estructural comparada (clases de Baltimore I, IV y VI; escala 18–200 nm): (1) Tequatrovirus T4 (clase I, ADNbc lineal 168.9 kpb, cabeza T=13/Q=20 + cola contráctil); (2) SARS-CoV-2 (clase IV, ARNmc(+) 29.9 kb, envoltura ~100 nm con espícula S); (3) VIH-1 (clase VI, ARNmc(+) diploide 9.7 kb, cono fullereno CA + RT/IN); (4) Adenovirus humano Ad5 (clase I, ADNbc 36 kpb, icosaedro desnudo pseudo-T=25 de 90 nm); (5) VMT (clase IV, ARNmc(+) 6.4 kb, hélice rígida 18 × 300 nm de 16⅓ subunidades/vuelta).'
    }
  },

  'real-adenovirus': {
    en: {
      simple:
        'Built like a Kryptonian crystal from Superman’s Fortress of Solitude sprouting twelve satellite antennas, Human Adenovirus tricks airway cells into swallowing it and smuggles DNA to the nucleus.',
      story:
        'Faceted like a 20-sided Kryptonian gem of 240 [[hexon towers|adv-hexon-real]], this crystal Trojan horse slips twelve [[fiber antennas|adv-fiber-real]] into airway tight junctions at the [[entry zone|real-adv-entry]]. Gulped into a [[clathrin vesicle|vesicle]], it pops its corner pins like grenades and slashes the sac open with hidden protein VI switchblades—hitching a dynein train straight to a [[nuclear pore|nuclear-pore]].',
      blueprint:
        'Role: Non-enveloped icosahedral Trojan-horse dsDNA vector · From: Inhaled respiratory droplets docking onto epithelial [[CAR/integrin entry sites|real-adv-entry]] · Inside: 90 nm pseudo-T=25 shell of 240 [[Hexon trimers|adv-hexon-real]], 12 [[Penton/Fiber vertices|real-adv-vertex]], lytic cement VI, and [[36 kbp adenosome core|real-adv-core]] · To: Escapes early [[endocytic vesicles|vesicle]] and rides [[dynein motors|motor-protein]] to inject DNA at a [[nuclear pore|nuclear-pore]].',
      scientific:
        'Human Mastadenovirus C serotype 5 (HAdV-C5) virion (~90–93 nm facet-to-facet icosahedron plus twelve ~30 nm fibers; ~150 MDa; cryo-EM PDB 6B1T): pseudo-T=25 lattice of 240 homotrimeric Hexon II capsomers (PDB 1P30), 12 homopentameric Penton III bases (PDB 1X9T), 12 homotrimeric Fiber IV shafts/knobs (PDB 1QIU), minor cement polypeptides IIIa, VI (~360 amphipathic lytic copies), VIII, and IX, enclosing a 35,938 bp linear dsDNA–protein VII/V/TP core.'
    },
    es: {
      simple:
        'Tallado como un cristal kryptoniano de la Fortaleza de la Soledad de Superman con doce antenas de satélite, el adenovirus engaña a las células respiratorias para tragárselo rumbo al núcleo.',
      story:
        'Facetado como una joya kryptoniana de 240 [[torres de hexón|adv-hexon-real]], este caballo de Troya tiende doce [[antenas de fibra|adv-fiber-real]] hacia las uniones epiteliales en la [[zona de entrada|real-adv-entry]]. Tragado en una [[vesícula de clatrina|vesicle]], suelta sus esquinas como anillas de granada y raja la bolsa con navajas internas de proteína VI, tomando un tren de dineína directo al [[poro nuclear|nuclear-pore]].',
      blueprint:
        'Rol: Vector icosaédrico desnudo de ADNbc tipo caballo de Troya · Desde: Gotículas respiratorias acopladas a [[receptores CAR/integrina|real-adv-entry]] · Dentro: Cápside pseudo-T=25 de 90 nm con 240 [[trímeros de Hexón|adv-hexon-real]], 12 [[vértices Pentón/Fibra|real-adv-vertex]], cemento lítico VI y [[núcleo adenosómico|real-adv-core]] · Hacia: Rompe [[vesículas endocíticas|vesicle]] y viaja en [[motores de dineína|motor-protein]] hasta el [[poro nuclear|nuclear-pore]].',
      scientific:
        'Virión de Mastadenovirus humano C serotipo 5 (HAdV-C5; icosaedro de ~90–93 nm más doce fibras de ~30 nm; ~150 MDa; crio-EM PDB 6B1T): red pseudo-T=25 de 240 homotrímeros de Hexón II (PDB 1P30), 12 homopentámeros de base de Pentón III (PDB 1X9T), 12 homotrímeros de Fibra IV (PDB 1QIU) y proteínas cemento menores IIIa, VI (~360 copias anfipáticas líticas), VIII y IX, encerrando un genoma lineal de ADNbc de 35,938 pb condensado con proteínas VII, V y TP.'
    }
  },

  'real-adv-vertex': {
    en: {
      simple:
        'Each of the crystal’s twelve corners works like a James Bond ejector hatch topped with a radar boom—hooking the target cell first, then popping loose inside to deploy hidden escape knives.',
      story:
        'Set like a turret between [[hexon walls|adv-hexon-real]], each [[penton base|adv-penton-real]] launches a 30-nanometer [[fiber antenna|adv-fiber-real]] to hook airway junctions. By Q-branch design, that corner is a breakaway grenade pin: once integrin tugs and endosome acid twist the collar, the whole cap pops off, spilling hidden protein VI switchblades to slash the [[vesicle|vesicle]] wide open!',
      blueprint:
        'Role: Receptor-targeting antenna mount and programmed disassembly hatch · From: Crowns all 12 five-fold corners of the [[Hexon lattice|adv-hexon-real]] · Inside: Five-subunit [[Penton base|adv-penton-real]] with RGD integrin loops clasping the trimeric [[Fiber shaft and knob|adv-fiber-real]] · To: Initiates [[CAR/integrin entry|real-adv-entry]] and sheds inside early [[vesicles|vesicle]] to release membrane-lytic protein VI.',
      scientific:
        'Five-fold vertex assembly (~35 nm projection; cryo-EM PDB 6B1T): homopentameric Penton base (polypeptide III, 5 × 571 aa; PDB 1X9T) encircled by five peripentonal Hexon trimers (PDB 1P30) and braced internally by IIIa, cradling the conserved FNPVYP N-terminal peptide of homotrimeric Fiber (polypeptide IV, 3 × 581 aa; PDB 1QIU) across a 5-to-3 symmetry mismatch.'
    },
    es: {
      simple:
        'Cada una de las doce esquinas del cristal actúa como una escotilla eyectable de James Bond con antena: primero engancha la célula y luego salta por dentro para soltar cuchillas de escape.',
      story:
        'Encajada entre muros de [[hexones|adv-hexon-real]], cada [[base de pentón|adv-penton-real]] lanza una [[antena de fibra|adv-fiber-real]] de 30 nanómetros para pescar uniones celulares. Esa esquina es a propósito una anilla de granada: cuando el tirón de las integrinas y el ácido endosómico la retuercen, la tapa salta y libera navajas de proteína VI que rajan la [[vesícula|vesicle]].',
      blueprint:
        'Rol: Soporte de antena receptora y escotilla de desensamblaje programado · Desde: Cierra los 12 vértices pentaméricos de la red de [[Hexones|adv-hexon-real]] · Dentro: [[Base de Pentón|adv-penton-real]] con bucles RGD que sujeta el eje trimérico de la [[Fibra|adv-fiber-real]] · Hacia: Inicia la [[entrada por CAR/integrina|real-adv-entry]] y se desprende en la [[vesícula|vesicle]] para liberar proteína VI.',
      scientific:
        'Ensamblaje de vértice pentamérico (~35 nm; crio-EM PDB 6B1T): homopentámero de base de Pentón (polipéptido III, 5 × 571 aa; PDB 1X9T) rodeado por cinco trímeros de Hexón peripentonales (PDB 1P30) y apuntalado internamente por IIIa, alojando los péptidos N-terminales conservados FNPVYP de la Fibra homotrimérica (polipéptido IV, 3 × 581 aa; PDB 1QIU) en un empalme de simetría 5:3.'
    }
  },

  'real-adv-core': {
    en: {
      simple:
        'Like a Mission: Impossible spy wearing a latex mask, the virus wraps its 36,000-letter DNA around spool proteins that impersonate human chromosomes so the nucleus welcomes it right in.',
      story:
        'Shielded behind [[hexon armor|adv-hexon-real]] as it dodges lysosomes down [[microtubule highways|microtubule]], 36,000 base pairs of [[viral DNA|dna]] coil around 800 protein VII spools in a Mission: Impossible chromatin disguise. When kinesin motors rip the last shell open at a [[nuclear pore|nuclear-pore]], this counterfeit chromosome strolls past security for [[RNA polymerase II|pol-ii]] to read!',
      blueprint:
        'Role: Pseudo-chromatin viral genome core and nuclear import payload · From: Condensed during virion maturation by AVP protease cleavage of pre-VII and pre-V · Inside: 36 kbp linear [[dsDNA|dna]] wrapped around ~800 protein VII spools, bridged to [[hexon shell|adv-hexon-real]] by protein V, 5′-capped by Terminal Protein · To: Extrudes through [[nuclear pore|nuclear-pore]] into host nucleus to hijack [[Pol II|pol-ii]].',
      scientific:
        'Internal ~62 nm ribonucleoprotein-like nucleoprotein core containing 35,938 bp linear dsDNA with inverted terminal repeats (103 bp ITRs) covalently linked via phosphodiester bonds at both 5′-dCMP ends to 55 kDa Terminal Protein (TP, primer for viral DNA pol strand-displacement replication). Condensed into ~200 "adenosomes" by ~800 copies of histone-like basic polypeptide VII (19.4 kDa), ~157 copies of bridging polypeptide V, ~100–300 µ (X) peptides, and ~50 copies of cysteine protease AVP.'
    },
    es: {
      simple:
        'Como un espía de Misión Imposible con máscara perfecta, el virus enrolla su ADN de 36,000 letras en carretes propios que imitan cromosomas humanos para entrar al núcleo como en casa.',
      story:
        'Protegidos tras [[hexones|adv-hexon-real]] en plena huida por [[autopistas de microtúbulos|microtubule]], 36,000 pares de bases de [[ADN viral|dna]] viajan sobre 800 carretes de proteína VII con un disfraz de cromatina digno de Misión Imposible. Al abrirse el casco ante un [[poro nuclear|nuclear-pore]], este falso cromosoma burla la aduana y pone a trabajar a la [[ARN polimerasa II|pol-ii]].',
      blueprint:
        'Rol: Núcleo de pseudocromatina viral y carga útil de importación nuclear · Desde: Condensado durante la maduración por corte de pre-VII y pre-V mediante la proteasa AVP · Dentro: 36 kpb de [[ADNbc|dna]] lineal sobre ~800 carretes de proteína VII, unido al [[casco de hexones|adv-hexon-real]] por proteína V y sellado en 5′ por TP · Hacia: Cruza el [[poro nuclear|nuclear-pore]] para secuestrar la [[Pol II|pol-ii]].',
      scientific:
        'Núcleo interno (~62 nm de cavidad) con 35,938 pb de ADNbc lineal flanqueado por repeticiones terminales invertidas (ITR de 103 bp) unidas covalentemente en ambos extremos 5′-dCMP a la Proteína Terminal (TP, 55 kDa, cebador de replicación por desplazamiento de hebra). Condensado en ~200 «adenosomas» por ~800 copias de proteína básica tipo histona VII (19.4 kDa), ~157 copias de proteína puente V, péptido µ y ~50 copias de cisteína-proteasa AVP.'
    }
  },

  'real-adv-entry': {
    en: {
      simple:
        'Like a bank-vault heist needing two keys turned at once, Adenovirus hooks a tight-junction anchor with its long antenna and then rings a second receptor doorbell so the cell swallows it whole.',
      story:
        'Phase one of this Ocean’s Eleven con starts when the [[fiber knob|adv-fiber-real]] reaches between cells to snag a [[tight-junction CAR receptor|cell-junction]], letting membrane currents tug the tether sideways. Bending the shaft bows the [[penton base|adv-penton-real]] onto integrins on the [[lipid bilayer|phospholipid]], Jedi-mind-tricking the cell into gulping the crystal inside a [[clathrin vesicle|vesicle]] while already loosening its grenade pin!',
      blueprint:
        'Role: Sequential two-receptor attachment, mechanical priming, and endocytosis trigger · From: Extracellular [[Adenovirus virion|real-adenovirus]] encountering polarized epithelial surface · Inside: High-affinity [[Fiber knob|adv-fiber-real]]–CAR tether + secondary [[Penton RGD|adv-penton-real]]–αvβ3/αvβ5 integrin clustering · To: Induces [[clathrin-coated vesicle|vesicle]] uptake and mechanical vertex shedding for endosomal escape.',
      scientific:
        'Two-step receptor engagement and mechanical uncoating initiation (~45 nm contact zone): trimeric Fiber knob (PDB 1QIU) binds the D1 immunoglobulin-like domain of CAR (*K*_d ≈ 1–15 nM) as CAR drifts with cortical actin, while Penton base RGD loops (PDB 1X9T) engage stationary αvβ3/αvβ5 integrins (*K*_d ≈ 50–100 nM). Opposing lateral forces mechanically pry off fibers/pentons and trigger PI3K/Rac1-dependent clathrin-mediated endocytosis, exposing internal amphipathic protein VI.'
    },
    es: {
      simple:
        'Como una cámara acorazada que exige girar dos llaves a la vez, el adenovirus engancha un ancla con su antena y toca luego un segundo receptor timbre para que la célula se lo trague entero.',
      story:
        'El primer paso de esta estafa a lo Ocean’s Eleven arranca cuando el [[botón de la fibra|adv-fiber-real]] pesca las [[uniones estrechas CAR|cell-junction]] y deja que la deriva celular tire del amarre. Al doblarse el mástil, la [[base de pentón|adv-penton-real]] besa las integrinas sobre la [[bicapa de fosfolípidos|phospholipid]], logrando con un truco mental Jedi que la célula lo trague en una [[vesícula de clatrina|vesicle]] mientras afloja su espoleta.',
      blueprint:
        'Rol: Anclaje secuencial de doble receptor, cebado mecánico y disparo endocítico · Desde: [[Virión de adenovirus|real-adenovirus]] sobre la superficie epitelial polarizada · Dentro: Amarre de alta afinidad [[botón de Fibra|adv-fiber-real]]–CAR + agrupamiento secundario [[bucles RGD de Pentón|adv-penton-real]]–integrinas αvβ3/αvβ5 · Hacia: Induce invaginación en [[vesículas de clatrina|vesicle]] y pérdida del vértice.',
      scientific:
        'Acoplamiento secuencial e inicio mecánico del desencapsidado (~45 nm): el botón trimérico de la Fibra (PDB 1QIU) se une al dominio Ig D1 de CAR (*K*_d ≈ 1–15 nM) arrastrado por flujo retrógrado de actina, mientras los bucles RGD del Pentón (PDB 1X9T) fijan integrinas estacionarias αvβ3/αvβ5 (*K*_d ≈ 50–100 nM). El cizallamiento mecánico inicia la pérdida del vértice y activa la endocitosis mediada por clatrina vía PI3K/Rac1.'
    }
  },

  adenovirus: {
    en: {
      simple:
        'Floating solo like a Sputnik satellite carved out of Superman’s Kryptonian crystal, Human Adenovirus pairs twenty flat armor walls and twelve corner antennas around a DNA core.',
      story:
        'With zero fatty cloak to dry out on doorknobs or melt in soap, this bare Kryptonian-crystal fortress shrugs off the outside world like Terminator armor. Twelve [[fiber antennas|adv-fiber-real]] jut from [[penton corner hatches|adv-penton-real]] framed by 240 [[hexon towers|adv-hexon-real]], guarding 36,000 letters of [[DNA|dna]] until one breath drops the Trojan horse into an airway.',
      blueprint:
        'Role: Isolated pseudo-T=25 icosahedral virion architecture · From: Nuclear assembly in host cell followed by AVP proteolytic maturation and cell lysis · Inside: 240 [[Hexon trimers|adv-hexon-real]] + 12 [[Penton bases|adv-penton-real]] + 12 [[Fiber trimers|adv-fiber-real]] + cement staples enclosing [[36 kbp dsDNA|dna]] · To: Executes two-step [[receptor entry|real-adv-entry]] in the [[realistic scene|real-adenovirus]].',
      scientific:
        'Isolated cutaway model of non-enveloped Mastadenovirus (~90 nm icosahedral diameter, ~150 nm tip-to-tip across fibers). Pseudo-T=25 Caspar-Klug geometry achieved by placing trimeric Hexon capsomers with pseudo-hexagonal double-jelly-roll bases at all 6-coordinated lattice positions (12 hexons per triangular facet × 20 facets = 240 trimers) and true pentameric Penton bases at the 12 five-fold vertices.'
    },
    es: {
      simple:
        'Flotando en solitario como un satélite Sputnik tallado en cristal kryptoniano, el adenovirus combina veinte muros triangulares planos y doce antenas angulares sobre un núcleo de ADN.',
      story:
        'Sin envoltura grasa que se seque en un picaporte, esta fortaleza desnuda de cristal kryptoniano resiste el mundo exterior como el chasis de un Terminator. Doce [[antenas de fibra|adv-fiber-real]] coronan [[escotillas de pentón|adv-penton-real]] entre 240 [[torres de hexón|adv-hexon-real]], escoltando 36,000 letras de [[ADN|dna]] hasta que un suspiro la lleva a tus vías respiratorias.',
      blueprint:
        'Rol: Arquitectura aislada del virión icosaédrico pseudo-T=25 · Desde: Ensamblaje nuclear, maduración por proteasa AVP y lisis celular · Dentro: 240 [[trímeros de Hexón|adv-hexon-real]] + 12 [[bases de Pentón|adv-penton-real]] + 12 [[Fibras|adv-fiber-real]] + proteínas cemento en torno a [[36 kpb de ADNbc|dna]] · Hacia: Ejecuta la [[entrada por doble receptor|real-adv-entry]] en la [[escena realista|real-adenovirus]].',
      scientific:
        'Modelo aislado en corte de Mastadenovirus sin envoltura (~90 nm de diámetro icosaédrico, ~150 nm entre puntas de fibras opuestas). Geometría pseudo-T=25 lograda al situar trímeros de Hexón con base pseudohexagonal de doble rollo de gelatina en las posiciones hexavalentes (12 hexones por faceta triangular × 20 facetas = 240 trímeros) y pentámeros verdaderos de Pentón en los 12 vértices.'
    }
  },

  'adv-hexon-real': {
    en: {
      simple:
        'Pulling off a Transformers geometry trick, just three identical protein chains fold a six-sided base so 240 Hexon towers lock into twenty rock-solid triangular crystal walls.',
      story:
        'Evolution used clever origami to plate the [[adenovirus Trojan horse|real-adenovirus]]: three [[polypeptide chains|polypeptide]] each fold twin barrels to fake a hexagonal base, tiling 20 razor-flat facets between [[penton corners|adv-penton-real]]. After endosome jailbreak, loops atop these towers grab [[dynein motors|motor-protein]] like Marty McFly skitching a truck straight to the nucleus!',
      blueprint:
        'Role: Major pseudo-hexagonal capsid wall block and dynein motor hitch · From: Folded in host cytosol with viral 100K chaperone and imported into nucleus · Inside: Homotrimer of polypeptide II with pseudo-hexagonal double-jelly-roll base and three intertwined loop towers · To: Tiles 20 facets (240 trimers) around [[Penton vertices|adv-penton-real]] and recruits [[dynein|motor-protein]] post-endolysis.',
      scientific:
        'X-ray/cryo-EM atomic structure of HAdV-C5 Hexon homotrimer (polypeptide II, 3 × 951 aa = 2,853 total residues, ~324 kDa; PDB 1P30 / 6B1T; ~9.5 nm wide × 11 nm tall). Each monomer folds two eight-stranded viral jelly-roll β-barrels (P1, P2) creating a pseudo-6-fold base stapled externally by triskelions of protein IX and internally by VIII/IIIa, topped by hypervariable surface loops (HVRs 1–7) that bind blood factor X and acid-primed cytoplasmic dynein intermediate/light-intermediate chains.'
    },
    es: {
      simple:
        'Con un truco geométrico digno de Transformers, solo tres cadenas idénticas pliegan una base de seis lados para que 240 torres de Hexón armen veinte paredes cristalinas indestructibles.',
      story:
        'La evolución usó origami puro para blindar al [[caballo de Troya adenoviral|real-adenovirus]]: tres [[cadenas polipeptídicas|polypeptide]] doblan barriles gemelos para fingir una huella hexagonal entre [[esquinas de pentón|adv-penton-real]]. Tras fugarse del endosoma, sus bucles enganchan [[motores de dineína|motor-protein]] como Marty McFly colgado de una camioneta directo al núcleo.',
      blueprint:
        'Rol: Bloque principal pseudohexagonal de las facetas y enganche para dineína · Desde: Plegado en citosol con la chaperona viral 100K e importado al núcleo · Dentro: Homotrímero del polipéptido II con base de doble rollo de gelatina y tres torres de bucles · Hacia: Pavimenta 20 facetas (240 trímeros) junto a [[vértices de Pentón|adv-penton-real]] y recluta [[dineína|motor-protein]].',
      scientific:
        'Estructura cristalográfica/crio-EM del homotrímero de Hexón HAdV-C5 (polipéptido II, 3 × 951 aa, ~324 kDa; PDB 1P30 / 6B1T; ~9.5 × 11 nm). Cada monómero aporta dos barriles β tipo jelly-roll (P1, P2) que confieren simetría basal pseudohexagonal engrapada afuera por proteína IX y adentro por VIII/IIIa, coronada por regiones hipervariables (HVR 1–7) que unen factor X plasmático y subunidades de dineína citoplasmática.'
    }
  },

  'adv-penton-real': {
    en: {
      simple:
        'Like a five-fingered Jedi mind-trick collar at every corner, Penton holds the long antenna and waves sticky RGD bait loops that convince the cell to gulp the virus—before popping off inside.',
      story:
        'Once the [[fiber antenna|adv-fiber-real]] tethers the crystal and bends aside, five RGD bait loops atop this corner collar wave at host integrins in the [[entry zone|real-adv-entry]]—"These ARE the droids you want to swallow!" Pulled into a [[clathrin bubble|vesicle]], the collar twists free from its [[hexon neighbors|adv-hexon-real]] like a grenade pin so escape blades spill out.',
      blueprint:
        'Role: Five-fold vertex keystone, fiber socket, and integrin-triggered endocytosis activator · From: Self-assembles into homopentamers and complexes with [[Fiber trimers|adv-fiber-real]] · Inside: Five jelly-roll [[polypeptides|polypeptide]] displaying flexible Arg-Gly-Asp (RGD) surface loops around a central fiber-binding pore · To: Clusters host αvβ3/αvβ5 integrins at [[entry zone|real-adv-entry]] to trigger [[vesicle|vesicle]] uptake and vertex release.',
      scientific:
        'Crystal structure of HAdV-2/5 Penton base homopentamer bound to N-terminal Fiber peptides (polypeptide III, 5 × 571 aa, ~320 kDa; PDB 1X9T; ~11.5 nm wide × ~9 nm tall). Each monomer comprises a basal jelly-roll β-barrel domain and an upper insertion domain carrying an ~80-residue mobile loop with an exposed RGD tripeptide (~5.7 nm spacing around the 5-fold ring) that cross-links five αvβ3/αvβ5 integrin heterodimers to activate focal adhesion kinase/PI3K endocytosis.'
    },
    es: {
      simple:
        'Como un collar de cinco dedos con truco mental Jedi en cada esquina, el Pentón sujeta la antena y agita lazos RGD que convencen a la célula de tragarse el virus antes de saltar como tapón.',
      story:
        'Cuando la [[antena de fibra|adv-fiber-real]] amarra el cristal y se aparta, cinco lazos RGD sobre este anillo seducen a las integrinas de la [[zona de entrada|real-adv-entry]] al más puro estilo truco mental Jedi. Ya dentro de la [[burbuja de clatrina|vesicle]], el anillo se suelta de sus [[hexones vecinos|adv-hexon-real]] como la anilla de una granada y libera las dagas de fuga.',
      blueprint:
        'Rol: Piedra angular pentamérica, zócalo de fibra y activador endocítico por integrinas · Desde: Forma homopentámeros que engarzan el extremo N de las [[Fibras|adv-fiber-real]] · Dentro: Cinco [[polipéptidos|polypeptide]] en barril β con bucles móviles Arg-Gly-Asp (RGD) alrededor del poro central · Hacia: Agrupa integrinas αvβ3/αvβ5 en la [[zona de entrada|real-adv-entry]] para inducir [[vesículas|vesicle]] y liberar el vértice.',
      scientific:
        'Estructura cristalográfica del homopentámero de base de Pentón unido a péptidos N-terminales de Fibra (polipéptido III, 5 × 571 aa, ~320 kDa; PDB 1X9T; ~11.5 × ~9 nm). Cada monómero combina un barril β basal tipo jelly-roll y un dominio superior con un bucle flexible de ~80 residuos portador del motivo RGD (separados ~5.7 nm en anillo), capaz de entrecruzar cinco integrinas αvβ3/αvβ5 y activar FAK/PI3K.'
    }
  },

  'adv-fiber-real': {
    en: {
      simple:
        'Like an Inspector Gadget grappling boom sticking 30 nanometers out of every corner, this rigid three-strand antenna reaches between airway cells to hook hidden docking locks.',
      story:
        'Plugged into the [[penton corner ring|adv-penton-real]], this 30-nanometer Inspector Gadget mast reaches past mucus to slip its knob between cells and snag [[tight-junction CAR|cell-junction]]. When drifting membrane currents yank sideways at the [[entry zone|real-adv-entry]], the shaft snaps loose like a rocket booster stage—kicking off the [[adenovirus|real-adenovirus]] break-in!',
      blueprint:
        'Role: Long-range primary receptor-fishing antenna and mechanical uncoating lever · From: Anchored via N-terminal tails into the central pore of [[Penton base|adv-penton-real]] · Inside: Triple β-spiral shaft of 22 pseudo-repeats topped by a trimeric β-sandwich receptor Knob · To: Tethers [[tight-junction CAR|cell-junction]] at [[entry site|real-adv-entry]], bends to present Penton RGD loops, and sheds upon entry.',
      scientific:
        'Crystal structure of the HAdV distal triple-β-spiral shaft and C-terminal receptor-binding Knob homotrimer (polypeptide IV, 3 × 581 aa in Ad5, ~186 kDa; PDB 1QIU; ~30–37 nm total length, ~10 nm crystallized distal fragment). The shaft comprises 22 ~15-residue β-spiral repeats (with a flexible KKTK hinge at repeat 3 allowing ~60–90° bending); the C-terminal eight-stranded β-sandwich knob binds three CAR D1 monomers at inter-subunit clefts (*K*_d ≈ 1–15 nM).'
    },
    es: {
      simple:
        'Como un brazo extensible del Inspector Gadget proyectado 30 nanómetros desde cada esquina, esta antena rígida se cuela entre células respiratorias para pescar cerraduras ocultas.',
      story:
        'Encajado en el [[anillo de pentón|adv-penton-real]], este mástil de 30 nanómetros digno del Inspector Gadget supera el moco para colar su botón entre células y atrapar [[receptores CAR de unión celular|cell-junction]]. Al tirar la membrana en la [[zona de entrada|real-adv-entry]], la antena salta como la primera etapa de un cohete, iniciando el asalto del [[adenovirus|real-adenovirus]].',
      blueprint:
        'Rol: Antena primaria de captura de receptor a larga distancia y palanca de desencapsidado · Desde: Anclada por colas N-terminales en el poro central de la [[base de Pentón|adv-penton-real]] · Dentro: Eje en triple espiral β (22 repeticiones) rematado por el botón homotrimérico C-terminal · Hacia: Fija [[CAR epitelial|cell-junction]] en la [[entrada|real-adv-entry]], se flexiona para acercar el Pentón y se desprende.',
      scientific:
        'Estructura cristalográfica del eje distal en triple espiral β y botón C-terminal homotrimérico de la Fibra (polipéptido IV, 3 × 581 aa en Ad5, ~186 kDa; PDB 1QIU; ~30–37 nm de largo total, fragmento distal ~10 nm). El eje alinea 22 repeticiones β-espirales de ~15 aa (con bisagra flexible KKTK en la 3.ª repetición); el botón en sándwich β une tres dominios D1 de CAR en las hendiduras intermonoméricas (*K*_d ≈ 1–15 nM).'
    }
  },

  'real-tmv': {
    en: {
      simple:
        'Built like an armored Dune sandworm cylinder of 2,130 identical spiral bricks, Tobacco Mosaic Virus shrugs off decades in dry leaves—then unzips inside a wounded plant to tunnel cell-to-cell.',
      story:
        'Decades in dry cigar tins cannot crack 2,130 [[coat tiles|tmv-sub-real]] locked around a single [[RNA|rna]] spring—until a beetle bite drops this Dune-tough cylinder into low-calcium sap! That trips the [[central channel switch|real-tmv-channel]], popping top bricks loose so a plant [[ribosome|ribosome]] strips the armor while forging MP30 crowbars to pry open [[plasmodesmata|plasmodesma]] wall tunnels for an Ocean’s Eleven heist next door.',
      blueprint:
        'Role: Hyper-stable helical rod virion and cell-to-cell plant pathogen · From: Mechanical leaf wound entry into low-Ca²⁺ [[plant cytosol|cytosol]] · Inside: 2,130 [[coat monomers|tmv-sub-real]] in a 16⅓-per-turn [[helical lattice|real-tmv-helix]] shielding 6,395 nt [[(+)ssRNA|rna]] around a [[4 nm Ca²⁺-gated lumen|real-tmv-channel]] · To: Uncoats on [[80S ribosomes|ribosome]], replicates, and spreads via MP30-dilated [[plasmodesmata|plasmodesma]].',
      scientific:
        'Archetypal Tobamovirus (Virgaviridae) rigid helical virion (300 nm length × 18.0 nm outer diameter, ~40 MDa; X-ray fiber diffraction/cryo-EM PDB 2TMV / 4UDV; 1 scene unit = 10 nm). Comprises ~2,130 identical 158-residue (17.5 kDa) Coat Protein subunits arranged in a right-handed helix of 16⅓ subunits per 2.3 nm axial pitch (~130 turns), burying one 6,395 nt capped (+)ssRNA molecule at 4.0 nm radius (3 nt/subunit) around a 4.0 nm hollow central lumen.'
    },
    es: {
      simple:
        'Construido como un gusano de arena de Dune blindado con 2,130 ladrillos idénticos en espiral, el VMT resiste décadas en hojas secas y luego abre túneles de célula en célula al entrar en una planta.',
      story:
        'Ni décadas en tabaco seco rompen las 2,130 [[losetas idénticas de cubierta|tmv-sub-real]] cerradas sobre su muelle de [[ARN|rna]], hasta que un insecto arroja este cilindro digno de Dune a una hoja herida. La caída de calcio dispara el [[interruptor del canal central|real-tmv-channel]] para que un [[ribosoma|ribosome]] desnude el bastón y fabrique palancas MP30 que fuerzan los [[plasmodesmos|plasmodesma]] al estilo Ocean’s Eleven.',
      blueprint:
        'Rol: Virión helicoidal hiperestable y corredor intercelular vegetal · Desde: Entrada mecánica por herida foliar al [[citosol vegetal|cytosol]] bajo en Ca²⁺ · Dentro: 2,130 [[monómeros de cubierta|tmv-sub-real]] en [[hélice de 16⅓ piezas/vuelta|real-tmv-helix]] protegiendo 6,395 nt de [[ARNmc(+)|rna]] en torno al [[canal de 4 nm|real-tmv-channel]] · Hacia: Se desnuda en [[ribosomas 80S|ribosome]] y cruza [[plasmodesmos|plasmodesma]] dilatados por MP30.',
      scientific:
        'Virión helicoidal rígido arquetípico de Tobamovirus (Virgaviridae; 300 nm de longitud × 18.0 nm DE, ~40 MDa; difracción de fibras/crio-EM PDB 2TMV / 4UDV; 1 unidad = 10 nm). Formado por ~2,130 subunidades idénticas de Proteína de Cubierta (158 aa, 17.5 kDa) en hélice dextrógira de 16⅓ subunidades por paso axial de 2.3 nm (~130 vueltas), alojando un ARNmc(+) de 6,395 nt con caperuza 5′ a 4.0 nm de radio (3 nt/subunidad) alrededor de un lumen de 4.0 nm.'
    }
  },

  'real-tmv-helix': {
    en: {
      simple:
        'Like spiral LEGO Technic armor five nanometers thick, every protein brick in the wall cradles three letters of RNA inside a snug groove where leaf-chewing enzymes cannot touch it.',
      story:
        'Click together 130 spiral turns of [[16⅓ protein bricks|tmv-turn-real]] and a fragile [[RNA|rna]] scroll becomes tougher than Dwarven Moria stone against plant nucleases! Each four-helix [[coat monomer|tmv-sub-real]] hugs three [[nucleotides|nucleotide]] at a four-nanometer radius, keeping the heist blueprint bone-dry until a host ribosome yanks the 5′ fuse free.',
      blueprint:
        'Role: Right-handed ribonucleoprotein armor lattice and RNase shield · From: Coaxial stacking of [[lock-washer discs|real-tmv-assembly]] along viral RNA · Inside: Radial [[alpha-helix|alpha-helix]] bundles of [[coat monomers|tmv-sub-real]] binding 3 [[nucleotides|nucleotide]] per subunit at r = 4.0 nm · To: Shields [[(+)ssRNA|rna]] outside the host and releases it sequentially during co-translational stripping.',
      scientific:
        'Right-handed helical nucleoprotein lattice (18.0 nm OD, 2.3 nm axial pitch, 22.06° azimuthal rotation and 0.141 nm axial rise per subunit; PDB 2TMV, 2.9 Å). Each Coat Protein monomer forms a radial antiparallel four-α-helix bundle (LS, RS, LR, RR) whose inner basic loop (Arg90, Arg92, Arg112, Arg113) neutralizes three RNA phosphodiester groups while stacking guanine/purine bases into hydrophobic pockets beneath a 5.0 nm outer protein barrier.'
    },
    es: {
      simple:
        'Como un blindaje en espiral de LEGO Technic de cinco nanómetros de grosor, cada ladrillo proteico abraza tres letras de ARN en una ranura interna lejos de las enzimas destructoras.',
      story:
        'Ensambla 130 giros espirales de [[16⅓ ladrillos por giro|tmv-turn-real]] y un frágil rollo de [[ARN|rna]] resistirá mejor que piedra enana de Moria frente a las nucleasas de la hoja. Cada [[monómero de cuatro hélices|tmv-sub-real]] sujeta tres [[nucleótidos|nucleotide]] a cuatro nanómetros del eje, protegiendo la mecha genética hasta que un ribosoma tira de la punta 5′.',
      blueprint:
        'Rol: Red ribonucleoproteica dextrógira de blindaje frente a ribonucleasas · Desde: Apilamiento coaxial de [[discos en arandela|real-tmv-assembly]] sobre el ARN viral · Dentro: Haces radiales de [[hélices alfa|alpha-helix]] en [[monómeros|tmv-sub-real]] que fijan 3 [[nucleótidos|nucleotide]] cada uno a r = 4.0 nm · Hacia: Protege el [[ARNmc(+)|rna]] en el exterior y lo cede durante el desnudamiento cotraduccional.',
      scientific:
        'Red nucleoproteica helicoidal dextrógira (18.0 nm DE, paso axial 2.3 nm, rotación azimutal 22.06° y avance axial 0.141 nm por subunidad; PDB 2TMV, 2.9 Å). Cada monómero pliega un haz antiparalelo radial de cuatro hélices α (LS, RS, LR, RR) cuyo surco básico interno (Arg90, Arg92, Arg112, Arg113) neutraliza tres grupos fosfato del ARN a 4.0 nm de radio bajo 5.0 nm de pared proteica.'
    }
  },

  'real-tmv-channel': {
    en: {
      simple:
        'Wired like Indiana Jones’s golden-idol pressure trap, the virus’s watery center tunnel stays calm while calcium ions weight it down outside—but pops the lid off the instant calcium vanishes inside a cell!',
      story:
        'How does a brainless rod know it just entered a living leaf? Down its 4-nanometer [[water-filled lumen|water]], negative acid rings on every [[helical turn|tmv-turn-real]] stay pinned calm outside by calcium Counterweights; drop into low-calcium [[plant cytosol|cytosol]]—just like swapping Indy’s idol—and calcium rushes out, negative charges shove apart, and [[viral RNA|rna]] springs free for a [[ribosome|ribosome]]!',
      blueprint:
        'Role: Electrostatic Ca²⁺/H⁺ environmental sensor and uncoating trigger · From: Extracellular sap (millimolar Ca²⁺, acidic pH) into wounded [[cytosol|cytosol]] (nanomolar Ca²⁺, pH 7.5) · Inside: 4.0 nm central channel lined by carboxylate clusters across [[coat monomers|tmv-sub-real]] · To: Loss of Ca²⁺/H⁺ destabilizes 5′-end [[helical turns|tmv-turn-real]] to expose [[RNA|rna]] to [[ribosomes|ribosome]].',
      scientific:
        'Hollow 4.0 nm diameter axial lumen (r = 0–2.0 nm; PDB 2TMV / 4UDV) lined by anomalously high-pK_a carboxylate clusters ("Caspar carboxylates": Glu95, Glu97, Glu106, Asp109, plus RNA phosphate-adjacent Asp116/Glu50) positioned ~0.5–0.8 nm apart across subunit interfaces. Extracellular Ca²⁺ (~10⁻³ M) and protons (pH ~5.5) bridge these carboxylates; entry into cytosolic ~10⁻⁷ M free Ca²⁺ at pH 7.4–7.5 triggers deprotonation/decalcification and mutual coulombic repulsion, selectively loosening the weak 5′-cap end.'
    },
    es: {
      simple:
        'Conectado como el pedestal trampa del ídolo de Indiana Jones, el túnel acuoso central viaja quieto mientras el calcio exterior lo sujeta, pero hace saltar la tapa apenas entra al interior sin calcio de la célula.',
      story:
        '¿Cómo sabe un cilindro sin cerebro que ya está dentro de una hoja viva? Por su conducto de [[agua|water]] de 4 nanómetros, anillos negativos de cada [[giro helicoidal|tmv-turn-real]] viajan sujetos por puentes de calcio; al caer al [[citosol vegetal|cytosol]] sin calcio —igual que al quitar el ídolo de Indiana Jones—, las cargas se repelen y el [[ARN viral|rna]] salta hacia un [[ribosoma|ribosome]].',
      blueprint:
        'Rol: Sensor ambiental electrostático de Ca²⁺/H⁺ y disparador de desencapsidado · Desde: Savia extracelular (Ca²⁺ milimolar, pH ácido) hacia [[citosol|cytosol]] herido (Ca²⁺ nanomolar, pH 7.5) · Dentro: Lumen central de 4.0 nm tapizado por carboxilatos en [[monómeros de cubierta|tmv-sub-real]] · Hacia: La salida de Ca²⁺/H⁺ afloja los [[giros 5′|tmv-turn-real]] y expone el [[ARN|rna]] al [[ribosoma|ribosome]].',
      scientific:
        'Lumen axial hueco de 4.0 nm de diámetro (r = 0–2.0 nm; PDB 2TMV / 4UDV) tapizado por agrupaciones carboxilato de pK_a anómalamente elevado (Glu95, Glu97, Glu106, Asp109, junto a Glu50/Asp116) separadas ~0.5–0.8 nm entre subunidades. En el exterior (Ca²⁺ ~10⁻³ M, pH ~5.5) puentes iónicos estabilizan el cilindro; en el citosol (Ca²⁺ libre ~10⁻⁷ M, pH 7.5) la pérdida de Ca²⁺/H⁺ desata repulsión coulombiana que destapa selectivamente el extremo 5′.'
    }
  },

  'real-tmv-assembly': {
    en: {
      simple:
        'Like Tony Stark’s Mark-42 Iron Man suit flying onto him piece by piece, flat two-layer protein washers spot a secret loop on viral RNA, twist into spiral lock-washers, and reel the thread inside.',
      story:
        'At getaway time, with the cell flooded by fresh [[viral RNA|rna]] and loose [[coat subunits|tmv-sub-real]], the armor suits up like Iron Man’s Mark-42 by pure physics! Two-layer 20S washers recognize a secret hairpin near the 3′ tail, snap into a spiral lock-washer to start the [[helix|real-tmv-helix]], and reel a traveling RNA loop up the [[4 nm central chimney|real-tmv-channel]] as new rings stack on.',
      blueprint:
        'Role: Autonomous Origin-of-Assembly (OAS) nucleation and bidirectional rod elongation · From: Newly translated [[coat proteins|tmv-sub-real]] and progeny [[(+)ssRNA|rna]] in infected cytosol · Inside: Bilayer 34-subunit 20S discs convert on the OAS hairpin into proto-helical lock-washers · To: Reels 5′-tail RNA through the [[central 4 nm lumen|real-tmv-channel]] until a mature 300 nm [[TMV rod|real-tmv]] completes.',
      scientific:
        'Spontaneous ribonucleoprotein self-assembly (~18 nm diameter 20S bilayer disc / proto-helix intermediate): 34 Coat Protein subunits form a two-ring aggregate that specifically binds the G-rich Origin-of-Assembly (OAS) stem-loop (~900–1,000 nt from the 3′ tRNA-like end, nt 5,444–5,518 in vulgare strain). Protonation/RNA neutralization of inner carboxylates triggers a flat-ring-to-helical lock-washer switch (33⅓ subunits/2 turns), threading a travelling loop of the 5′-long RNA tail upward through the 4.0 nm lumen as 20S discs add sequentially.'
    },
    es: {
      simple:
        'Como la armadura Mark-42 de Iron Man ensamblándose sola al vuelo, arandelas proteicas detectan un lazo secreto del ARN viral, saltan a espiral e izan todo el hilo por el tubo central.',
      story:
        'En la huida final, con la célula llena de [[ARN viral|rna]] y [[subunidades de cubierta|tmv-sub-real]], el blindaje se viste solo como el traje Mark-42 de Iron Man. Arandelas 20S de dos pisos detectan una horquilla secreta cerca del extremo 3′, saltan a espiral para fundar la [[hélice|real-tmv-helix]] e izan el ARN por la [[chimenea central de 4 nm|real-tmv-channel]] apilando anillo tras anillo.',
      blueprint:
        'Rol: Nucleación autónoma en la horquilla OAS y elongación del bastón · Desde: [[Proteínas de cubierta|tmv-sub-real]] recién traducidas y [[ARNmc(+)|rna]] progenie en el citosol · Dentro: Discos bicapa 20S (34 subunidades) pasan a arandela helicoidal al fijar el bucle OAS · Hacia: Tira de la cola 5′ del ARN por el [[canal central de 4 nm|real-tmv-channel]] hasta cerrar el [[bastón de 300 nm|real-tmv]].',
      scientific:
        'Autoensamblaje ribonucleoproteico espontáneo (disco bicapa 20S de ~18 nm / intermediario en arandela): 34 subunidades de Proteína de Cubierta reconocen específicamente la horquilla rica en guanina del Origen de Ensamblaje (OAS, nt 5,444–5,518, a ~950 nt del extremo 3′ tipo ARNt). La unión del ARN neutraliza los carboxilatos internos y convierte el disco plano en una arandela protohelicoidal (33⅓ subunidades en ~2 vueltas), enhebrando un bucle viajero del brazo 5′ por el lumen de 4.0 nm.'
    }
  },

  tmv: {
    en: {
      simple:
        'Sleek as a lightsaber hilt, Tobacco Mosaic Virus is a 300-nanometer hollow cylinder whose exact length is measured automatically by the single RNA thread wound inside.',
      story:
        'Zero factory rulers measure out this lightsaber-straight 300-nanometer battering ram: stacking [[spiral turns|tmv-turn-real]] of [[coat bricks|tmv-sub-real]] stops the instant the last letter of [[viral RNA|rna]] tucks inside! Tough enough to survive boiling sap around its [[water-lined core|water]], it waits like a sleeper agent for pruning shears or a beetle jaw to open a fresh leaf.',
      blueprint:
        'Role: Isolated ruler-templated helical rod virion · From: Self-terminating encapsidation along the 6,395 nt [[RNA|rna]] template · Inside: ~130 [[helical turns|tmv-turn-real]] of [[coat monomers|tmv-sub-real]] surrounding a [[water-filled 4 nm channel|water]] · To: Uncoats and spreads cell-to-cell in the [[realistic plant infection scene|real-tmv]].',
      scientific:
        'Isolated helical Tobamovirus cutaway model (18.0 nm diameter × 300.0 nm length): exact rod length is stoichiometrically determined by the 6,395 nt (+)ssRNA genome at 3.0 nucleotides per Coat Protein monomer (~2,130 monomers across ~130.4 turns of 16⅓ subunits and 2.3 nm pitch), conferring thermal stability up to ~90 °C in dried plant tissue.'
    },
    es: {
      simple:
        'Recto como la empuñadura de un sable de luz, el virus del mosaico del tabaco es un cilindro hueco de 300 nanómetros cuyo largo queda fijado automáticamente por su hilo interno de ARN.',
      story:
        'Ninguna regla mide este ariete recto como un sable láser de 300 nanómetros: el apilamiento de [[giros espirales|tmv-turn-real]] de [[ladrillos proteicos|tmv-sub-real]] frena en seco al cubrir la última letra de [[ARN viral|rna]]. Capaz de resistir savia hirviente en torno a su [[núcleo acuoso|water]], aguarda como agente durmiente a que unas tijeras o un escarabajo le abran otra hoja.',
      blueprint:
        'Rol: Virión helicoidal aislado cuya longitud la dicta el molde de ARN · Desde: Encapsidación autolimitada sobre los 6,395 nt de [[ARN|rna]] · Dentro: ~130 [[vueltas helicoidales|tmv-turn-real]] de [[monómeros de cubierta|tmv-sub-real]] en torno a un [[canal acuoso de 4 nm|water]] · Hacia: Ejecuta desencapsidado e invasión intercelular en la [[escena realista|real-tmv]].',
      scientific:
        'Modelo aislado en corte de Tobamovirus helicoidal (18.0 nm de diámetro × 300.0 nm de largo): la longitud del cilindro queda fijada estequiométricamente por el genoma de ARNmc(+) de 6,395 nt a razón de 3.0 nucleótidos por monómero de cubierta (~2,130 subunidades en ~130.4 vueltas de 16⅓ subunidades y 2.3 nm de paso), estable hasta ~90 °C en tejido foliar seco.'
    }
  },

  'tmv-turn-real': {
    en: {
      simple:
        'Like staggered LEGO bricks built so vertical seams never line up, each spiral turn fits sixteen-and-a-third protein wedges around 49 RNA letters clipped neatly underneath.',
      story:
        'Why sixteen-and-a-third [[protein wedges|tmv-sub-real]] per turn instead of an even sixteen? Master LEGO builders know the trick: offsetting every ring by a third of a brick stagger-locks the seams across three stories—clipping 49 letters of [[RNA|rna]] around the [[water-filled central bore|water]] so no vertical crack can ever split the [[TMV rod|real-tmv]].',
      blueprint:
        'Role: Stagger-locked 16⅓-subunit helical repeat unit · From: Driven by proto-helical slip of [[20S assembly discs|real-tmv-assembly]] · Inside: 16⅓ wedge-shaped [[coat monomers|tmv-sub-real]] made of [[amino acids|amino-acid]] clasping 49 [[RNA|rna]] bases around a [[water lumen|water]] · To: Repeats ~130 times axially to build the rigid [[300 nm helix|real-tmv-helix]].',
      scientific:
        'Single helical turn reconstructed from 2.9 Å X-ray fiber diffraction coordinates (PDB 2TMV; 18.0 nm OD, 4.0 nm ID, 2.3 nm axial pitch; 49 subunits in 3 turns = 16⅓ subunits/turn). Contains ~2,581 amino acid residues and 49 ribonucleotides coiled at r = 4.0 nm; non-integer rotational symmetry places every subunit in a quasi-equivalent 6-neighbor lateral/axial bonding network.'
    },
    es: {
      simple:
        'Como ladrillos LEGO colocados a matajunta para no alinear nunca las ranuras, cada vuelta espiral reúne dieciséis cuñas y un tercio sujetando debajo 49 letras de ARN.',
      story:
        '¿Por qué dieciséis [[cuñas proteicas|tmv-sub-real]] y un tercio por giro en vez de dieciséis exactas? Todo maestro de LEGO conoce el truco: desfasar cada anillo un tercio traba las juntas a lo largo de tres pisos, fijando 49 letras de [[ARN|rna]] alrededor del [[conducto de agua|water]] para que ninguna grieta vertical parta el [[bastón del VMT|real-tmv]].',
      blueprint:
        'Rol: Unidad repetitiva helicoidal trabada de 16⅓ subunidades · Desde: Generada por el deslizamiento en arandela de los [[discos 20S|real-tmv-assembly]] · Dentro: 16⅓ [[monómeros de cubierta|tmv-sub-real]] formados por [[aminoácidos|amino-acid]] que sujetan 49 bases de [[ARN|rna]] alrededor de [[agua|water]] · Hacia: Se repite ~130 veces para erigir la [[hélice de 300 nm|real-tmv-helix]].',
      scientific:
        'Vuelta helicoidal individual reconstruida a partir de difracción de fibras por rayos X a 2.9 Å (PDB 2TMV; 18.0 nm DE, 4.0 nm DI, paso de 2.3 nm; exactamente 49 subunidades cada 3 vueltas = 16⅓ subunidades/vuelta). Reúne ~2,581 residuos de aminoácidos y 49 ribonucleótidos a r = 4.0 nm; la simetría fraccionaria elimina planos de fractura longitudinales.'
    }
  },

  'tmv-sub-real': {
    en: {
      simple:
        'With a tiny budget of genes, TMV builds its entire fortress by copy-pasting one Minecraft-style wedge brick 2,130 times—each carrying a notch that snaps over three RNA letters.',
      story:
        'Too travel-light to pack dozens of fancy parts, [[TMV|real-tmv]] pulls a speedrunner move—cloning one 158-[[amino-acid|amino-acid]] brick 2,130 times! Four bundled [[alpha-helices|alpha-helix]] form a wedge whose inner jaw clamps three [[RNA nucleotides|nucleotide]] tight outside the leaf, then pops off brick by brick as a host ribosome Pac-Mans down the strand.',
      blueprint:
        'Role: Minimalist asymmetric building block and 3-nucleotide RNA clamp · From: Translated abundantly from subgenomic coat-protein mRNA late in infection · Inside: 158 [[amino acids|amino-acid]] folded into a four-[[alpha-helix|alpha-helix]] bundle clasping three [[nucleotides|nucleotide]] · To: Polymerizes into [[16⅓-subunit turns|tmv-turn-real]] to armor progeny [[TMV virions|real-tmv]].',
      scientific:
        'Asymmetric unit of Tobacco Mosaic Virus (PDB 2TMV; ~7.0 nm radial length × ~2.3 nm thickness; 158 aa, 17.5 kDa, N-terminally acetylated Ser1). Antiparallel four-α-helix bundle (left/right slewed LS/RS and left/right radial LR/RR helices) with an inner disordered-to-ordered RNA-binding loop (residues 90–113) that folds upon binding a trinucleotide (preferentially G-X-X at Position 1 during OAS nucleation via H-bonds to Asp116 and Arg90/92).'
    },
    es: {
      simple:
        'Con un presupuesto mínimo de genes, el VMT levanta toda su fortaleza copiando 2,130 veces un mismo ladrillo estilo Minecraft cuya muesca interior atrapa tres letras de ARN.',
      story:
        'Con un genoma demasiado compacto para lujos, el [[VMT|real-tmv]] aplica táctica de speedrunner clonando 2,130 veces un solo ladrillo de 158 [[aminoácidos|amino-acid]]. Cuatro [[hélices alfa|alpha-helix]] forman una cuña que muerde tres [[nucleótidos de ARN|nucleotide]] fuera de la planta y se suelta pieza a pieza cuando un ribosoma avanza a lo Pac-Man por la hebra.',
      blueprint:
        'Rol: Unidad asimétrica mínima de construcción y pinza de tres nucleótidos · Desde: Traducida masivamente a partir del ARNm subgenómico tardío · Dentro: 158 [[aminoácidos|amino-acid]] en un haz de cuatro [[hélices alfa|alpha-helix]] abrazando tres [[nucleótidos|nucleotide]] · Hacia: Polimeriza en [[vueltas de 16⅓ piezas|tmv-turn-real]] para blindar nuevos [[viriones VMT|real-tmv]].',
      scientific:
        'Unidad asimétrica del VMT (PDB 2TMV; ~7.0 nm de longitud radial × ~2.3 nm de espesor; 158 aa, 17.5 kDa, Ser1 N-acetilada). Haz antiparalelo de cuatro hélices α (LS, RS, LR y RR) con un bucle interno inducible (residuos 90–113) que se ordena al abrazar un trinucleótido de ARN (con preferencia por G en posición 1 durante la nucleación OAS mediante puentes de hidrógeno con Asp116 y Arg90/92).'
    }
  }
};

export const PHAGE_DNA_VIRUS_PART_LENSES: PagePartLensMap = {
  'bacteriophage_realistic.html': {
    capsid: {
      en: {
        subtitle: 'The 500-Atmosphere Chainmail Vault',
        simple:
          'Nine hundred and thirty Beskar-style protein plates lock into an elongated hexagonal pressure tank, caging coiled viral DNA at dozens of atmospheres.',
        story:
          'Folded inside Iron Man-style [[GroEL chaperones|groel]] and hardened by protease cuts, 155 [[gp23* hexamers|gp23-real]] weld into a sleek prolate pressure tank. Strapped outside by Soc roll-cages and riveted at the corners by [[gp24* pentamers|gp24-real]], this hull cages 169,000 base pairs of coiled [[DNA|dna]] until the [[gp20 portal|gp20-real]] blasts open!',
        blueprint: {
          role: 'Primary load-bearing prolate icosahedral shell',
          arrivesFrom: 'Prohead assembly around gp22 scaffold and folding via [[GroEL|groel]]/gp31',
          inside: '155 hexamers (930 copies) of cleaved [[gp23*|gp23-real]] forming T_end=13 / Q=20 facets',
          deliversTo: 'Contains ~60 atm osmotic/bending pressure to propel [[dsDNA|dna]] down [[gp20 portal|gp20-real]]',
          loop: 'Progeny [[70S ribosomes|ribosome-ecoli]] translate thousands of new gp23 monomers late in infection'
        },
        scientific:
          'Prolate icosahedral lattice (115 × 85 nm; T_end = 13 laevo, T_mid = 20; PDB 5VF3) built from 930 copies of mature gp23* (48.7 kDa, HK97 fold with T4 insertion domain). Proteolytic removal of the 65-residue N-terminal Δ-domain by gp21 triggers irreversible ~50% shell expansion (from ~350 to ~530 nm³ lumen) and exposes outer Soc/Hoc binding clefts.',
        from: [
          { nodeId: 'ribosome-ecoli', label: 'Host 70S Ribosome', cargo: 'gp23 precursor' },
          { nodeId: 'groel', label: 'GroEL–gp31 Chaperonin', cargo: 'Folded HK97 monomer' }
        ],
        to: [
          { nodeId: 'gp23-real', label: 'gp23* Hexamer Tile', cargo: 'Lattice armor' },
          { nodeId: 'gp20-real', label: 'gp20 Portal Valve', cargo: '60 atm ejection pressure' }
        ]
      },
      es: {
        subtitle: 'La bóveda de cota de malla a alta presión',
        simple:
          'Novecientas treinta placas proteicas dignas del beskar encajan en un tanque hexagonal alargado que retiene el ADN viral a decenas de atmósferas.',
        story:
          'Plegados en cabinas [[chaperonas GroEL|groel]] estilo Iron Man y templados por proteasas, 155 [[hexámeros gp23*|gp23-real]] forman un tanque blindado alargado. Sujeto con jaulas Soc y remachado en los vértices por [[pentámeros gp24*|gp24-real]], este casco retiene 169,000 pares de bases de [[ADN|dna]] hasta que el [[portal gp20|gp20-real]] abre fuego.',
        blueprint: {
          role: 'Carcasa estructural primaria icosaédrica prolata',
          arrivesFrom: 'Procápside ensamblada sobre gp22 y plegada mediante [[GroEL|groel]]/gp31',
          inside: '155 hexámeros (930 copias) de [[gp23* madura|gp23-real]] en red T_end=13 / Q=20',
          deliversTo: 'Mantiene ~60 atm de presión para impulsar el [[ADNbc|dna]] hacia el [[portal gp20|gp20-real]]',
          loop: 'Los [[ribosomas 70S|ribosome-ecoli]] secuestrados producen miles de nuevas copias tardías de gp23'
        },
        scientific:
          'Red icosaédrica prolata (115 × 85 nm; T_end = 13 laevo, T_mid = 20; PDB 5VF3) formada por 930 copias de gp23* madura (48.7 kDa, plegamiento HK97 con dominio de inserción T4). La escisión del dominio N-terminal (65 aa) por la proteasa gp21 induce una expansión irreversible del ~50% en volumen y expone los sitios exteriores para Soc y Hoc.',
        from: [
          { nodeId: 'ribosome-ecoli', label: 'Ribosoma 70S bacteriano', cargo: 'Precursor gp23' },
          { nodeId: 'groel', label: 'Chaperonina GroEL–gp31', cargo: 'Monómero HK97 plegado' }
        ],
        to: [
          { nodeId: 'gp23-real', label: 'Loseta hexamérica gp23*', cargo: 'Blindaje estructural' },
          { nodeId: 'gp20-real', label: 'Válvula portal gp20', cargo: 'Presión de eyección (60 atm)' }
        ]
      }
    },

    soc: {
      en: {
        subtitle: 'External Roll-Cage Clamps & Mucus Anchors',
        simple:
          'Like a Mad Max external roll cage bolted over armor seams, hundreds of tiny Soc clamps keep heat or pressure from splitting the head, while Hoc spikes snag gut mucus to ambush bacteria.',
        story:
          'Once the [[capsid shell|real-phage-capsid]] pops to full size, 810 Soc clamps bolt across the seams between [[gp23* hexamers|gp23-real]] like a Mad Max War Rig roll cage. Sprouting from each hexagon’s bullseye, 155 Hoc Velcro-antennas snag gut mucus so the lander camps right along the highway where [[target bacteria|real-bacterium]] cruise past!',
        blueprint: {
          role: 'External capsid cross-bracing lattice and mucin-tethering display',
          arrivesFrom: 'Spontaneously binds expanded [[gp23* hexamer|gp23-real]] interfaces post-maturation',
          inside: '810 trimeric Soc inter-hexamer clamps + 155 monomeric Hoc Ig-domain spikes',
          deliversTo: 'Stabilizes [[phage capsid|real-phage-capsid]] against osmotic/pH shock and concentrates virions in mucus near [[E. coli|real-bacterium]]',
          loop: 'Late phage transcripts drive high-copy Soc/Hoc synthesis on [[host ribosomes|ribosome-ecoli]]'
        },
        scientific:
          'Auxiliary outer shell cage (PDB 5VF3): 810 copies of Soc (9.1 kDa, 80 aa, tadpole-like β-structure) form trimeric clasps across quasi-3-fold junctions between gp23* hexamers (absent around gp24* pentamers), resisting 10.6 pH and osmotic shock; 155 copies of Hoc (40.4 kDa, four immunoglobulin-like domains projecting ~18 nm) occupy hexamer centers with ~100 pM mucin affinity.',
        from: [
          { nodeId: 'gp23-real', label: 'Expanded gp23* Lattice', cargo: 'Exposed clefts' },
          { nodeId: 'ribosome-ecoli', label: 'Host 70S Ribosome', cargo: 'Soc & Hoc proteins' }
        ],
        to: [
          { nodeId: 'real-phage-capsid', label: 'Reinforced Capsid', cargo: 'pH & pressure clamp' },
          { nodeId: 'real-bacterium', label: 'Mucus Hunting Zone', cargo: 'Mucin retention' }
        ]
      },
      es: {
        subtitle: 'Jaula antivuelco externa y anclas de moco',
        simple:
          'Como una jaula antivuelco de Mad Max atornillada sobre las costuras, cientos de grapas Soc impiden que la cabeza estalle mientras espigas Hoc se enganchan al moco para emboscar bacterias.',
        story:
          'Apenas la [[cápside|real-phage-capsid]] se expande al máximo, 810 grapas Soc abrochan las juntas entre [[hexámeros gp23*|gp23-real]] como la jaula blindada de un camión de Mad Max. Del centro de cada hexágono brotan 155 antenas Hoc que se aferran al moco intestinal, apostando al cazador justo por donde patrullan las [[bacterias huésped|real-bacterium]].',
        blueprint: {
          role: 'Arriostramiento externo de cápside y anclaje mucoso',
          arrivesFrom: 'Se acopla espontáneamente a las juntas de [[hexámeros gp23*|gp23-real]] expandidos',
          inside: '810 abrazaderas Soc en ejes cuasi-ternarios + 155 espigas Hoc con dominios tipo Ig',
          deliversTo: 'Blinda la [[cápside|real-phage-capsid]] frente a choques osmóticos/pH y retiene viriones cerca de [[E. coli|real-bacterium]]',
          loop: 'Los transcritos tardíos disparan la síntesis masiva de Soc y Hoc en [[ribosomas 70S|ribosome-ecoli]]'
        },
        scientific:
          'Jaula auxiliar externa (PDB 5VF3): 810 copias de Soc (9.1 kDa, 80 aa) forman broches triméricos entre hexámeros gp23* (ausentes junto a pentámeros gp24*), elevando la estabilidad térmica y alcalina (hasta pH 10.6); 155 copias de Hoc (40.4 kDa, cuatro dominios tipo inmunoglobulina proyectados ~18 nm) ocupan el centro de cada hexámero e interactúan con mucinas.',
        from: [
          { nodeId: 'gp23-real', label: 'Red gp23* expandida', cargo: 'Hendiduras externas' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosoma 70S bacteriano', cargo: 'Proteínas Soc y Hoc' }
        ],
        to: [
          { nodeId: 'real-phage-capsid', label: 'Cápside reforzada', cargo: 'Estabilidad frente a presión/pH' },
          { nodeId: 'real-bacterium', label: 'Zona mucosa de caza', cargo: 'Retención en mucina' }
        ]
      }
    },

    vertex: {
      en: {
        subtitle: 'The Eleven Corner Keystones',
        simple:
          'Like the pentagon panels that curve a soccer ball shut, eleven five-sided protein caps rivet the phage head’s sharpest corners into a leak-proof vault.',
        story:
          'Where flat [[gp23* walls|gp23-real]] meet at steep angles, six-sided tiles alone would buckle under coiled [[DNA|dna]] pressure. Eleven [[gp24* pentamers|gp24-real]] rivet those high-stress corners like Nautilus submarine bolts, leaving only the twelfth bottom vertex open for the [[gp20 portal|gp20-real]] launch cannon.',
        blueprint: {
          role: 'Five-fold icosahedral corner closure capsomers',
          arrivesFrom: 'Co-assembles at 11 prohead corners and undergoes gp21 proteolytic cleavage',
          inside: '11 homopentamers (55 subunits) of [[gp24*|gp24-real]] with acute dihedral HK97 interfaces',
          deliversTo: 'Seals [[capsid shell|real-phage-capsid]] geometry so pressure focuses solely toward [[gp20 portal|gp20-real]]',
          loop: 'Synthesized in precise ~1:17 ratio relative to gp23 on [[host ribosomes|ribosome-ecoli]]'
        },
        scientific:
          'Eleven 5-fold vertex pentamers (PDB 5VF3; ~12.5 nm width; 55 total copies of 46.0 kDa cleaved gp24*, residues 11–427). Provides mandatory Euler 5-fold disclinations across the T_end = 13 laevo end-caps while resisting maximum local bending stress under ~60 atm genome packaging pressure without requiring Soc reinforcement.',
        from: [
          { nodeId: 'ribosome-ecoli', label: 'Host 70S Ribosome', cargo: 'gp24 monomer' },
          { nodeId: 'gp23-real', label: 'gp23* Facet Rim', cargo: 'Peripentonal seam' }
        ],
        to: [
          { nodeId: 'gp24-real', label: 'gp24* Vertex Pentamer', cargo: '5-fold corner lock' },
          { nodeId: 'real-phage-capsid', label: 'Sealed Prolate Head', cargo: 'Pressure containment' }
        ]
      },
      es: {
        subtitle: 'Las once piedras angulares del blindaje',
        simple:
          'Como los paneles pentagonales que cierran un balón de fútbol, once tapas de cinco lados remachan las esquinas agudas de la cabeza en una bóveda hermética.',
        story:
          'Donde los muros planos de [[hexámeros gp23*|gp23-real]] chocan en ángulo agudo, losetas de seis lados reventarían ante el [[ADN|dna]] comprimido. Once [[pentámeros gp24*|gp24-real]] remachan esas esquinas como pernos del submarino Nautilus, dejando libre solo el duodécimo vértice para la tobera del [[portal gp20|gp20-real]].',
        blueprint: {
          role: 'Capsómeros pentaméricos de cierre de esquinas icosaédricas',
          arrivesFrom: 'Coensamblaje en 11 vértices de la procápside y corte madurativo por gp21',
          inside: '11 homopentámeros (55 copias) de [[gp24*|gp24-real]] adaptados a ángulos diedros agudos',
          deliversTo: 'Sella la [[cápside prolata|real-phage-capsid]] concentrando el empuje hacia el [[portal gp20|gp20-real]]',
          loop: 'Traducida en proporción ~1:17 respecto a gp23 en [[ribosomas 70S|ribosome-ecoli]]'
        },
        scientific:
          'Once pentámeros en vértices de simetría cinco (PDB 5VF3; ~12.5 nm; 55 copias totales de gp24* procesada de 46.0 kDa, residuos 11–427). Aportan las disclinaciones pentagonales de Euler en ambos casquetes T_end = 13 laevo, soportando la máxima tensión local de curvatura bajo ~60 atm sin requerir abrazaderas Soc.',
        from: [
          { nodeId: 'ribosome-ecoli', label: 'Ribosoma 70S bacteriano', cargo: 'Monómero gp24' },
          { nodeId: 'gp23-real', label: 'Borde de faceta gp23*', cargo: 'Junta peripentonal' }
        ],
        to: [
          { nodeId: 'gp24-real', label: 'Pentámero gp24*', cargo: 'Cierre pentagonal' },
          { nodeId: 'real-phage-capsid', label: 'Cabeza prolata sellada', cargo: 'Contención de presión' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: 'The Sugar-Coated Coiled Harpoon',
        simple:
          'Wearing Harry Potter-style sugar camouflage so bacterial DNA-scissors cannot chop it up, this coiled 169,000-letter blueprint rockets inside to take over the cell.',
        story:
          'Crammed inside the [[capsid|real-phage-capsid]] like a coiled spring, this 57-micrometer [[DNA|dna]] scroll wears an invisibility cloak of glucose-glazed cytosines that blind E. coli’s CRISPR and restriction scissors! Once the [[gp19 tail tube|gp19-real]] kisses the [[inner membrane|plasma-membrane]], bottled pressure blasts the code straight to [[host RNA polymerase|rnap-ecoli]].',
        blueprint: {
          role: 'Pressurized, restriction-proof viral genome payload',
          arrivesFrom: 'Concatemeric headful packaging (~102% genome) pumped through [[gp20 portal|gp20-real]] by gp17 ATPase',
          inside: '168,903 bp linear [[dsDNA|dna]] (~278 genes) with α/β-glucosylated 5-hydroxymethylcytosine in 2.5 nm coaxial spools',
          deliversTo: 'Shoots through [[gp19 tube|gp19-real]] into cytoplasm to reprogram [[host RNAP|rnap-ecoli]]',
          loop: 'Phage T4 replisome copies hundreds of new concatemers for progeny packaging'
        },
        scientific:
          'Circularly permuted, terminally redundant ~172 kbp packaged headful (168,903 bp unique sequence, ~289 ORFs + 8 tRNAs, 35.3% GC) wound coaxially at ~2.5 nm inter-helix spacing (~500 mg/mL DNA density). Every cytosine is replaced by 5-hydroxymethylcytosine (via gp42 dCMP hydroxymethylase) and 100% α- or β-glucosylated, blocking E. coli McrBC and Type I–III restriction endonucleases (and most CRISPR-Cas9/Cas12 nucleases).',
        from: [
          { nodeId: 'gp20-real', label: 'gp20 Portal & gp17 Motor', cargo: 'ATP-pumped dsDNA' },
          { nodeId: 'nucleotide', label: 'Glucosylated gh-dCMP', cargo: 'Restriction camouflage' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'gp19 Tail Tube', cargo: 'High-speed translocation' },
          { nodeId: 'rnap-ecoli', label: 'Host RNA Polymerase', cargo: 'Early phage promoters' }
        ]
      },
      es: {
        subtitle: 'El arpón genético recubierto de azúcar',
        simple:
          'Cubierto con una capa de invisibilidad de azúcares al estilo Harry Potter que ciega las tijeras defensivas bacterianas, este plano de 169,000 letras entra disparado para tomar la célula.',
        story:
          'Comprimido en la [[cápside|real-phage-capsid]] como un muelle ardiente, este rollo de [[ADN|dna]] viste una capa de invisibilidad de glucosa que burla las tijeras de restricción del huésped. Apenas el [[tubo caudal gp19|gp19-real]] besa la [[membrana interna|plasma-membrane]], la presión dispara el código pirata directo hacia la [[ARN polimerasa bacteriana|rnap-ecoli]].',
        blueprint: {
          role: 'Carga genómica presurizada resistente a endonucleasas de restricción',
          arrivesFrom: 'Empaquetamiento headful (~102%) bombeado a través del [[portal gp20|gp20-real]] por la ATPasa gp17',
          inside: '168,903 pb de [[ADNbc|dna]] lineal con 5-hidroximetilcitosina α/β-glucosilada en capas coaxiales a 2.5 nm',
          deliversTo: 'Viaja por el [[tubo gp19|gp19-real]] al citoplasma para secuestrar la [[ARN polimerasa|rnap-ecoli]]',
          loop: 'El replisoma propio de T4 sintetiza concatémeros para rellenar nuevas cápsides'
        },
        scientific:
          'Genoma lineal con permutación circular y redundancia terminal (~172 kpb empaquetados; secuencia única de 168,903 pb, ~289 genes + 8 ARNt, 35.3% GC) dispuesto en capas coaxiales separadas ~2.5 nm (~500 mg/mL). El 100% de las citosinas son 5-hidroximetilcitosinas α- o β-glucosiladas, bloqueando sistemas de restricción bacterianos Tipo I–III, McrBC y la mayoría de endonucleasas CRISPR.',
        from: [
          { nodeId: 'gp20-real', label: 'Portal gp20 y motor gp17', cargo: 'ADNbc presurizado' },
          { nodeId: 'nucleotide', label: 'Nucleótidos gh-dCMP', cargo: 'Escudo glucosilado' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'Tubo interno gp19', cargo: 'Inyección rápida' },
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa de E. coli', cargo: 'Promotores tempranos' }
        ]
      }
    },

    core: {
      en: {
        subtitle: 'Bodyguard Saboteurs Fired Ahead of the Genome',
        simple:
          'Packed beside the DNA like John Wick’s advance breach team, saboteur proteins blast into the bacterium at the exact same instant to jam defenses and hotwire its gene printer.',
        story:
          'Hidden among the [[DNA coils|dna]] inside the [[capsid|real-phage-capsid]] waits a black-ops breach squad: hundreds of IPI* decoys plus the chemical sniper Alt. The millisecond the [[gp20 portal|gp20-real]] opens, these commandos rocket down the [[gp19 tube|gp19-real]] to jam E. coli’s anti-sugar nucleases and Agent-Smith-tag [[host RNA polymerase|rnap-ecoli]] into serving the phage!',
        blueprint: {
          role: 'Assembly scaffold remnants and co-injected anti-defense saboteur proteins',
          arrivesFrom: 'Encapsidated inside prohead scaffold prior to gp21 maturation cleavage',
          inside: 'Cleaved gp22 peptides + ~360 copies of anti-restriction IPI*/IPII*/IPIII* + ~40 copies of Alt ADP-ribosyltransferase',
          deliversTo: 'Co-injected down [[gp19 tube|gp19-real]] into [[cytosol|cytosol]] to disarm GmrSD nucleases and modify [[host RNAP|rnap-ecoli]]',
          loop: 'Immediate RNAP hijacking accelerates synthesis of new core proteins for progeny heads'
        },
        scientific:
          'Internal head protein core co-packaged inside the DNA spool: transient gp22 scaffold (~580 copies, degraded to small peptides except exported fragments), cleaved Internal Proteins IPI* (~360 copies, 8.5 kDa inhibitor that binds and neutralizes host GmrSD glucosylated-DNA endonuclease), IPII*, IPIII*, and gpAlt (~40 copies, 76 kDa mono-ADP-ribosyltransferase targeting Arg265 of host RNAP α-subunits within seconds of entry).',
        from: [
          { nodeId: 'real-phage-capsid', label: 'Prohead Scaffold', cargo: 'Cleaved IPI* & Alt' },
          { nodeId: 'gp20-real', label: 'gp20 Portal Nozzle', cargo: 'Unfolded protein transit' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'gp19 Tail Tube', cargo: '4 nm protein translocation' },
          { nodeId: 'rnap-ecoli', label: 'Host RNA Polymerase', cargo: 'Alt ADP-ribosylation' }
        ]
      },
      es: {
        subtitle: 'Saboteadores guardaespaldas disparados con el ADN',
        simple:
          'Empaquetado junto al ADN como un comando de asalto de película de acción, un escuadrón de proteínas saboteadoras entra disparado al mismo tiempo para cegar defensas y trucar la imprenta celular.',
        story:
          'Oculto entre las espiras de [[ADN|dna]] dentro de la [[cápside|real-phage-capsid]] viaja un comando de operaciones especiales: señuelos IPI* y el francotirador químico Alt. Al abrirse el [[portal gp20|gp20-real]], vuelan por el [[tubo gp19|gp19-real]] para bloquear las nucleasas enemigas y reprogramar a lo Agente Smith a la [[ARN polimerasa del huésped|rnap-ecoli]].',
        blueprint: {
          role: 'Andamio interno madurado y comando proteico coinjectado',
          arrivesFrom: 'Coensamblado dentro de la procápside y procesado por la proteasa gp21',
          inside: 'Péptidos de gp22 + ~360 copias antirestricción IPI*/IPII*/IPIII* + ~40 copias de ADP-ribosiltransferasa Alt',
          deliversTo: 'Cruza el [[tubo gp19|gp19-real]] hacia el [[citosol|cytosol]] para inhibir nucleasas GmrSD y modificar la [[ARN polimerasa|rnap-ecoli]]',
          loop: 'El secuestro inmediato de la polimerasa acelera la producción de nuevas proteínas internas'
        },
        scientific:
          'Núcleo proteico interno alojado en el eje del carrete de ADN: restos peptídicos del andamio gp22 (~580 copias iniciales), proteínas internas procesadas IPI* (~360 copias, 8.5 kDa; inhibidor directo de la endonucleasa bacteriana GmrSD específica de ADN glucosilado), IPII*, IPIII* y gpAlt (~40 copias, 76 kDa; mono-ADP-ribosiltransferasa que modifica Arg265 en la subunidad α de la ARN polimerasa en segundos).',
        from: [
          { nodeId: 'real-phage-capsid', label: 'Andamio de procápside', cargo: 'IPI* y Alt procesadas' },
          { nodeId: 'gp20-real', label: 'Portal gp20', cargo: 'Paso proteico' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'Tubo caudal gp19', cargo: 'Coinyección con ADN' },
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa huésped', cargo: 'ADP-ribosilación por Alt' }
        ]
      }
    },

    portal: {
      en: {
        subtitle: 'The Twelve-Bladed Loading & Firing Valve',
        simple:
          'Like the Death Star’s superlaser ring at the base of the head, this 12-part valve first reels DNA inside at record speed and then blasts it down the tail.',
        story:
          'Every [[capsid|real-phage-capsid]] grows atop this 12-bladed [[gp20 turbine|gp20-real]], where biology’s fastest packaging motor burns ATP to cram 169,000 base pairs of [[DNA|dna]] uphill into the vault. Corked tight during the prowl, its gate snaps open when the [[tail|real-phage-tail]] fires—turning loading funnel into Death Star superlaser nozzle!',
        blueprint: {
          role: 'Symmetry-bridging dodecameric portal and pressure-gating valve',
          arrivesFrom: 'Nucleates prohead on host inner membrane and docks pentameric gp17 terminase',
          inside: '12 [[gp20 subunits|gp20-real]] forming crown, stem, tunnel-loop choke (~3.5 nm), and clip domains',
          deliversTo: 'Channels pressurized [[dsDNA|dna]] into neck and [[gp19 inner tube|gp19-real]] upon trigger',
          loop: 'Membrane-associated gp20 rings seed the next generation of proheads inside the host'
        },
        scientific:
          'Dodecameric turbine ring (PDB 3JA7; 12 × 61 kDa gp20, ~17 nm OD × 14 nm height) seated at the unique 5-fold capsid vertex. Resolves the 5-to-12-to-6 symmetry mismatch between the gp23* head shell and the hexameric gp13/gp14/gp15 neck; radial tunnel loops clamp the last packaged DNA turn until tail contraction allosterically unblocks ejection.',
        from: [
          { nodeId: 'real-phage-capsid', label: 'Pressurized Head', cargo: 'Spooled 169 kbp dsDNA' },
          { nodeId: 'dna', label: 'DNA Terminus', cargo: 'Cocked leading end' }
        ],
        to: [
          { nodeId: 'gp20-real', label: 'gp20 Dodecamer', cargo: '3.5 nm valve gate' },
          { nodeId: 'gp19-real', label: 'gp19 Tail Tube', cargo: 'Triggered genome stream' }
        ]
      },
      es: {
        subtitle: 'La válvula turbina de doce álabes',
        simple:
          'Como el anillo del superláser de la Estrella de la Muerte en la base de la cabeza, esta válvula de 12 piezas mete primero el ADN a presión récord y luego lo dispara por la cola.',
        story:
          'Toda [[cápside|real-phage-capsid]] crece sobre esta [[turbina gp20|gp20-real]] de 12 álabes, donde el motor biológico más veloz quema ATP para embutir 169,000 pares de bases de [[ADN|dna]] cuesta arriba. Taponada durante el acecho, se descorcha al disparar la [[cola|real-phage-tail]], convirtiendo el embudo en cañón digno de la Estrella de la Muerte.',
        blueprint: {
          role: 'Portal dodecamérico adaptador de simetría y válvula de presión',
          arrivesFrom: 'Nuclea la procápside en la membrana interna y acopla la terminasa gp17',
          inside: '12 [[subunidades gp20|gp20-real]] con corona, tallo y bucles obturadores (~3.5 nm)',
          deliversTo: 'Canaliza el [[ADNbc|dna]] presurizado hacia el cuello y el [[tubo interno gp19|gp19-real]]',
          loop: 'Nuevos anillos gp20 anclados en membrana inician la siguiente oleada de procápsides'
        },
        scientific:
          'Anillo dodecamérico tipo turbina (PDB 3JA7; 12 × 61 kDa gp20, ~17 nm DE × 14 nm de alto) alojado en el duodécimo vértice icosaédrico. Resuelve la transición de simetría 5:12:6 entre la cápside gp23* y el cuello hexamérico gp13/gp14/gp15; sus bucles internos retienen el extremo terminal del ADN hasta que la contracción caudal libera el paso.',
        from: [
          { nodeId: 'real-phage-capsid', label: 'Cabeza presurizada', cargo: 'ADNbc de 169 kpb' },
          { nodeId: 'dna', label: 'Extremo del genoma', cargo: 'Punta lista para disparo' }
        ],
        to: [
          { nodeId: 'gp20-real', label: 'Dodecámero gp20', cargo: 'Compuerta de 3.5 nm' },
          { nodeId: 'gp19-real', label: 'Tubo interno gp19', cargo: 'Flujo de ADN' }
        ]
      }
    },

    collar: {
      en: {
        subtitle: 'Weather-Sensing Whiskers & Safety Catch',
        simple:
          'Sprouting six Doraemon-style cat whiskers around the phage’s neck, this collar tastes the water and folds the long legs up on safety lock whenever hunting conditions turn foul.',
        story:
          'Bolting the [[portal valve|gp20-real]] onto the cocked [[tail sheath|gp18-real]] is only half its job: six fibritin whiskers jut out like anime cat vibrissae to taste salt and acid. In cold or starving water where bacteria cannot build phages anyway, the whiskers hug the [[long tail fibers|phage-fiber]] up like X-wing S-foils until prime hunting returns!',
        blueprint: {
          role: 'Head-to-tail structural coupler and environmental safety interlock',
          arrivesFrom: 'gp13/gp14 seal filled [[gp20 portal|gp20-real]] and dock onto gp15-capped [[tail|real-phage-tail]]',
          inside: 'dodecameric gp13 + hexameric gp14/gp15 neck + six 53 nm homotrimeric gpWac fibritin whiskers',
          deliversTo: 'Reversibly stows or deploys [[long tail fibers|phage-fiber]] according to ionic strength, temperature, and pH',
          loop: 'gpWac whiskers also catalyze final attachment of newly made long fibers onto progeny virions'
        },
        scientific:
          'Neck-collar-whisker complex bridging head and tail: gp13 (12-mer) and gp14 (6-mer) plug the gp20 portal and join hexameric gp15 atop the gp18 sheath (PDB 3J2M), encircled by a 12-subunit collar and six 53 nm coiled-coil homotrimers of gpWac ("whisker antigen control" / fibritin, 3 × 486 aa; C-terminal foldon domain PDB 1RFO) that bind the gp36–gp37 knee region at low pH (<5) or low ionic strength.',
        from: [
          { nodeId: 'gp20-real', label: 'gp20 Portal Base', cargo: 'Filled head attachment' },
          { nodeId: 'water', label: 'Extracellular Medium', cargo: 'pH & ionic strength cue' }
        ],
        to: [
          { nodeId: 'phage-fiber', label: 'Long Tail Fibers', cargo: 'Retract / deploy switch' },
          { nodeId: 'gp18-real', label: 'gp18 Sheath Top', cargo: 'Upper contraction anchor' }
        ]
      },
      es: {
        subtitle: 'Bigotes sensores ambientales y seguro de caza',
        simple:
          'Con seis bigotes felinos estilo Doraemon alrededor del cuello, este anillo prueba el agua y pliega las patas largas con el seguro puesto cuando el entorno es malo para cazar.',
        story:
          'Unir la [[válvula portal|gp20-real]] con la [[vaina caudal|gp18-real]] es solo mitad de su tarea: seis bigotes de fibritina asoman como antenas felinas para medir sal y acidez. En aguas heladas o pobres donde la presa no podría fabricar virus, pliegan las [[fibras largas|phage-fiber]] contra el cuerpo como alas de X-wing hasta hallar buena caza.',
        blueprint: {
          role: 'Acoplador estructural cabeza-cola y seguro ambiental reversible',
          arrivesFrom: 'gp13/gp14 sellan el [[portal gp20|gp20-real]] lleno y se unen a la [[cola|real-phage-tail]] vía gp15',
          inside: 'Cuello gp13/gp14/gp15 + collar + seis bigotes homotriméricos de fibritina gpWac (53 nm)',
          deliversTo: 'Repliega o despliega las [[fibras largas|phage-fiber]] según fuerza iónica, temperatura y pH',
          loop: 'Los bigotes gpWac también catalizan el montaje final de las patas largas en los viriones hijos'
        },
        scientific:
          'Complejo cuello-collar-bigotes: gp13 (12-mero) y gp14 (6-mero) sellan el portal gp20 y enlazan con gp15 hexamérico sobre la vaina gp18 (PDB 3J2M), rodeados por el collar y seis homotrímeros superenrollados (coiled-coil) de fibritina gpWac de 53 nm (3 × 486 aa; dominio foldon C-terminal PDB 1RFO) que sujetan la rodilla gp36–gp37 a pH < 5 o baja fuerza iónica.',
        from: [
          { nodeId: 'gp20-real', label: 'Base del portal gp20', cargo: 'Unión de cabeza llena' },
          { nodeId: 'water', label: 'Medio extracelular', cargo: 'Señal iónica y de pH' }
        ],
        to: [
          { nodeId: 'phage-fiber', label: 'Fibras caudales largas', cargo: 'Plegado / despliegue' },
          { nodeId: 'gp18-real', label: 'Tope de vaina gp18', cargo: 'Anclaje superior' }
        ]
      }
    },

    sheath: {
      en: {
        subtitle: 'The One-Shot Molecular Crossbow',
        simple:
          'Like Evangelion Unit-01’s spring-loaded pile-bunker, 144 cocked protein blocks wrap the tail in 24 twisted rings—snapping to less than half height with zero fuel to drive the needle home.',
        story:
          'All the brute force of the lander’s strike sits coiled inside 24 twisted rings of [[gp18|gp18-real]] cocked during assembly. The millisecond the [[baseplate|real-phage-baseplate]] snaps into a shuriken star, a domino wave races up the sleeve: rings twist and crush from 92.5 to ~38 nanometers, slamming the [[gp19 inner tube|gp19-real]] through armor like an Evangelion pile-bunker!',
        blueprint: {
          role: 'Metastable ATP-independent linear force generator',
          arrivesFrom: 'Assembles in high-energy extended conformation from [[baseplate|real-phage-baseplate]] to gp15 neck',
          inside: '24 hexameric rings (144 subunits) of 4-domain [[gp18|gp18-real]] linked by inter-ring β-sheet handshakes',
          deliversTo: 'Generates >500 pN axial thrust to drive [[gp19 tube|gp19-real]] and [[gp5 needle|gp5-real]] across host wall',
          loop: 'Irreversible post-contraction state keeps the virion bolted to the breached [[envelope|real-envelope]]'
        },
        scientific:
          'Contractile tail sheath (144 × 71.2 kDa gp18 subunits in 24 hexameric rings; cryo-EM PDB 3J2M / 5IV5): transitions irreversibly from metastable extended state (92.5 nm length, 24 nm OD, 4.06 nm rise, 17.2° twist) to low-energy contracted state (~36–42 nm length, 33 nm OD, 1.64 nm rise, 32.9° twist), releasing ~170 kJ/mol per subunit (~25,000 kJ/mol total) while rotating the inner tube ~345°.',
        from: [
          { nodeId: 'real-phage-baseplate', label: 'Star-State Baseplate', cargo: 'Mechanical latch release' },
          { nodeId: 'gp18-real', label: 'Metastable gp18 Lattice', cargo: 'Stored elastic enthalpy' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'gp19 Inner Tube', cargo: '50 nm rotary-axial thrust' },
          { nodeId: 'gp5-real', label: 'gp27–gp5 Needle', cargo: 'Outer membrane puncture' }
        ]
      },
      es: {
        subtitle: 'La ballesta molecular de un solo disparo',
        simple:
          'Como el martinete cargado por resorte del EVA-01 en Evangelion, 144 bloques tensados en 24 anillos se encogen a menos de la mitad sin quemar combustible para clavar la aguja.',
        story:
          'Toda la violencia del impacto aguarda en 24 anillos retorcidos de [[gp18|gp18-real]] armados de fábrica. En el milisegundo en que la [[placa basal|real-phage-baseplate]] estalla abajo en shuriken, una ola de dominó encoge la manga de 92.5 a ~38 nanómetros, hundiendo el [[tubo interno gp19|gp19-real]] en la coraza como el martinete de Evangelion.',
        blueprint: {
          role: 'Generador lineal de fuerza metaestable independiente de ATP',
          arrivesFrom: 'Polimeriza en conformación extendida de alta energía desde la [[placa basal|real-phage-baseplate]] hasta gp15',
          inside: '24 anillos hexaméricos (144 copias) de [[gp18|gp18-real]] enlazados por hojas β interanulares',
          deliversTo: 'Aplica >500 pN de empuje axial sobre el [[tubo gp19|gp19-real]] y la [[aguja gp5|gp5-real]]',
          loop: 'El estado contraído irreversible mantiene el virión sujeto contra la [[envoltura perforada|real-envelope]]'
        },
        scientific:
          'Vaina caudal contráctil (144 × 71.2 kDa gp18 en 24 anillos hexaméricos; crio-EM PDB 3J2M / 5IV5): transita irreversiblemente del estado extendido metaestable (92.5 nm × 24 nm DE, avance 4.06 nm, giro 17.2°) al estado contraído (~36–42 nm × 33 nm DE, avance 1.64 nm, giro 32.9°), liberando ~25,000 kJ/mol totales e imprimiendo una rotación de ~345° al tubo interno.',
        from: [
          { nodeId: 'real-phage-baseplate', label: 'Placa basal en estrella', cargo: 'Liberación del fiador' },
          { nodeId: 'gp18-real', label: 'Red gp18 metaestable', cargo: 'Entalpía acumulada' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'Tubo interno gp19', cargo: 'Empuje rotatorio-axial' },
          { nodeId: 'gp5-real', label: 'Aguja gp27–gp5', cargo: 'Perforación de membrana' }
        ]
      }
    },

    tube: {
      en: {
        subtitle: 'The Frictionless Hypodermic Barrel',
        simple:
          'Sliding down the center like a frictionless maglev train tunnel, this rigid smooth pipe punches through the breached wall to shoot DNA straight into the bacterium.',
        story:
          'Driven like an oil-rig drill stem by the crunching [[gp18 sheath|gp18-real]], 24 rings of [[gp19|gp19-real]] push the [[gp5 needle|gp5-real]] across the breached wall to kiss the [[inner membrane|plasma-membrane]]. Its negatively charged 4-nanometer bore repels negative [[DNA|dna]] like a maglev railgun, gliding 169 kilobases inside on an electrostatic cushion!',
        blueprint: {
          role: 'Rigid transmembrane injection barrel and electrostatic DNA waveguide',
          arrivesFrom: 'Polymerizes atop [[gp27–gp5 hub|gp5-real]] to exact 24-ring length set by gp29 tape-measure',
          inside: '144 β-barrel [[gp19 subunits|gp19-real]] framing a smooth 4.0 nm electronegative channel',
          deliversTo: 'Bridges [[gp20 portal|gp20-real]] across periplasm to host [[inner membrane|plasma-membrane]] for DNA/protein entry',
          loop: 'Stays open across the envelope only briefly before host membrane reseals around the injected genome'
        },
        scientific:
          'Rigid hollow cylinder (144 × 18.5 kDa gp19 subunits in 24 hexameric rings; 92.5 nm length × 9.0 nm OD × 4.0 nm ID; cryo-EM PDB 5W5F) templated by hexameric/extended gp29 tape-measure protein (~64 kDa). Inter-ring β-hairpins confer high flexural rigidity during cell-envelope penetration, while lumenal Asp/Glu residues minimize friction for dsDNA translocation (~4,000 bp/s peak).',
        from: [
          { nodeId: 'gp18-real', label: 'Contracting gp18 Sheath', cargo: 'Axial driving force' },
          { nodeId: 'gp20-real', label: 'gp20 Portal Valve', cargo: '169 kbp dsDNA & IPI*' }
        ],
        to: [
          { nodeId: 'gp5-real', label: 'gp27–gp5 Tip', cargo: 'Envelope piercing' },
          { nodeId: 'plasma-membrane', label: 'Host Inner Membrane', cargo: 'Cytoplasmic DNA channel' }
        ]
      },
      es: {
        subtitle: 'El cañón hipodérmico sin fricción',
        simple:
          'Deslizándose por el eje como un túnel de tren de levitación magnética, este tubo rígido y liso atraviesa la muralla abierta para disparar el ADN dentro de la bacteria.',
        story:
          'Impulsados por el colapso de la [[vaina gp18|gp18-real]], 24 anillos de [[gp19|gp19-real]] empujan la [[aguja gp5|gp5-real]] hasta acoplar su boca contra la [[membrana interna|plasma-membrane]]. Su calibre negativo de 4 nanómetros repele al [[ADN|dna]] como un riel maglev, deslizando las 169 kilobases sobre un colchón electrostático sin roce.',
        blueprint: {
          role: 'Cañón rígido de inyección transmembrana y guía electrostática de ADN',
          arrivesFrom: 'Polimeriza sobre el [[buje gp27–gp5|gp5-real]] hasta 24 anillos medidos por la proteína gp29',
          inside: '144 subunidades [[gp19|gp19-real]] en barril β formando un conducto electronegativo de 4.0 nm',
          deliversTo: 'Conecta el [[portal gp20|gp20-real]] con la [[membrana interna|plasma-membrane]] para transferir ADN e IPI*',
          loop: 'La membrana interna sella el poro transitorio tras la entrada para preservar el potencial energético celular'
        },
        scientific:
          'Cilindro hueco rígido (144 × 18.5 kDa gp19 en 24 anillos hexaméricos; 92.5 nm × 9.0 nm DE × 4.0 nm DI; crio-EM PDB 5W5F) calibrado por la proteína cinta métrica gp29. Sus horquillas β interanulares otorgan rigidez frente al pandeo durante la punción, mientras los residuos ácidos luminales reducen la fricción con el ADNbc (~4,000 pb/s).',
        from: [
          { nodeId: 'gp18-real', label: 'Vaina gp18 en contracción', cargo: 'Fuerza axial' },
          { nodeId: 'gp20-real', label: 'Válvula portal gp20', cargo: 'ADNbc e IPI*' }
        ],
        to: [
          { nodeId: 'gp5-real', label: 'Punta gp27–gp5', cargo: 'Empuje perforante' },
          { nodeId: 'plasma-membrane', label: 'Membrana interna', cargo: 'Canal citoplasmático' }
        ]
      }
    },

    baseplate: {
      en: {
        subtitle: 'The Dome-to-Star Mechanical Brain',
        simple:
          'Built from 150 clockwork pieces with zero brain cells, this Transformers dome flips flat into a six-pointed ninja star the instant enough legs confirm the right target.',
        story:
          'Zero neurons, zero microchips—just 150 clockwork parts poised in a tense dome at the foot of the [[tail|real-phage-tail]]. When three or more [[long tail fibers|phage-fiber]] lock onto [[OmpC porins|porin]] and yank the rim, the dome transforms into a flat shuriken star—dropping [[gp12 hooks|gp12-real]] onto LPS and pulling the pin on the [[gp18 sheath|gp18-real]]!',
        blueprint: {
          role: 'Allosteric 150-subunit decision computer and trigger latch',
          arrivesFrom: 'Six peripheral wedges self-assemble around the central [[gp27–gp5 hub|gp5-real]]',
          inside: '~150 subunits of 15 proteins switching from 52 nm high-energy hexagonal dome to 61 nm flat star',
          deliversTo: 'Deploys [[gp12 short fibers|gp12-real]] downward and unlocks [[gp18 sheath|gp18-real]] contraction upward',
          loop: 'Irreversible star transition commits the virion to one-time genome injection on target'
        },
        scientific:
          'Multiprotein mechanosensor (~6.5 MDa; cryo-EM dome PDB 5IV5 → star PDB 5IV7): six wedges (gp6₂, gp7₁, gp8₂, gp10₃, gp11₃, gp25₁, gp53₁, plus fiber sockets gp9₃ and gp12₃) surround the (gp27)₃–(gp5)₃–gp5.4 hub. Receptor torque on gp9 rotates gp10/gp7 outward by ~45°, unfolding gp12 onto LPS while gp25 initiates the conformational wave into the bottom gp18 ring.',
        from: [
          { nodeId: 'phage-fiber', label: 'Long Tail Fibers (gp34–37)', cargo: 'Receptor-binding torque' },
          { nodeId: 'porin', label: 'Host OmpC Porins', cargo: 'Target confirmation' }
        ],
        to: [
          { nodeId: 'gp12-real', label: 'gp12 Short Tail Fibers', cargo: '180° downward lock' },
          { nodeId: 'gp18-real', label: 'gp18 Contractile Sheath', cargo: 'gp25 contraction trigger' }
        ]
      },
      es: {
        subtitle: 'El cerebro mecánico de cúpula a estrella',
        simple:
          'Armada con 150 piezas de relojería y cero neuronas, esta cúpula digna de Transformers se aplana en estrella ninja apenas suficientes patas confirman la bacteria correcta.',
        story:
          'Sin chips ni cerebro: 150 piezas mecánicas tensadas al pie de la [[cola|real-phage-tail]]. Cuando al menos tres [[fibras largas|phage-fiber]] enganchan [[porinas OmpC|porin]] y tiran del aro, la cúpula se transforma en estrella shuriken, bajando los [[garfios gp12|gp12-real]] al LPS mientras suelta el seguro de la [[vaina gp18|gp18-real]].',
        blueprint: {
          role: 'Computador mecánico alostérico de 150 subunidades y fiador de disparo',
          arrivesFrom: 'Seis cuñas periféricas se ensamblan alrededor del [[buje central gp27–gp5|gp5-real]]',
          inside: '~150 subunidades de 15 proteínas que pasan de cúpula hexagonal (52 nm) a estrella plana (61 nm)',
          deliversTo: 'Despliega [[fibras cortas gp12|gp12-real]] hacia abajo e inicia la contracción de [[gp18|gp18-real]] hacia arriba',
          loop: 'La transición irreversible a estrella compromete al virión a un único disparo certero'
        },
        scientific:
          'Mecanosensor multiproteico (~6.5 MDa; crio-EM cúpula PDB 5IV5 → estrella PDB 5IV7): seis cuñas (gp6₂, gp7₁, gp8₂, gp10₃, gp11₃, gp25₁, gp53₁, más zócalos gp9₃ y gp12₃) rodean el buje (gp27)₃–(gp5)₃–gp5.4. El par mecánico transmitido por gp9 rota gp10/gp7 ~45°, despliega gp12 hacia el LPS y propaga el cambio conformacional mediante gp25 al primer anillo gp18.',
        from: [
          { nodeId: 'phage-fiber', label: 'Fibras largas (gp34–37)', cargo: 'Tracción mecánica' },
          { nodeId: 'porin', label: 'Porinas OmpC', cargo: 'Confirmación de diana' }
        ],
        to: [
          { nodeId: 'gp12-real', label: 'Fibras cortas gp12', cargo: 'Giro de 180° y anclaje' },
          { nodeId: 'gp18-real', label: 'Vaina contráctil gp18', cargo: 'Señal de disparo vía gp25' }
        ]
      }
    },

    stf: {
      en: {
        subtitle: 'Six Zinc-Tipped Grappling Hooks',
        simple:
          'Tucked under the belly like Batman’s grapple-gun claws, six short spikes flip down during attack to bolt the lander permanently onto the bacterium’s sugar armor.',
        story:
          'Firing a pile-bunker into bacterial armor kicks hard enough to bounce an unbolted lander into space! So the instant the [[baseplate|real-phage-baseplate]] blooms open, six [[gp12 short fibers|gp12-real]] swing down like Batman grapnel claws and sink zinc jaws into [[LPS|lps]]—bolting the rig rock-steady while the [[gp18 sheath|gp18-real]] slams shut.',
        blueprint: {
          role: 'Irreversible surface clamp counteracting puncture recoil',
          arrivesFrom: 'Stowed in folded wreath under dome-state [[baseplate|real-phage-baseplate]]',
          inside: 'Six homotrimeric [[gp12 spikes|gp12-real]] (~34 nm) with triple β-spiral shafts and Zn²⁺ receptor heads',
          deliversTo: 'Locks irreversibly onto inner-core sugars of host [[LPS|lps]] to brace [[gp5 needle|gp5-real]] entry',
          loop: 'Keeps the spent phage shell permanently stapled to the host outer membrane throughout infection'
        },
        scientific:
          'Six homotrimeric gp12 short tail fibers (3 × 56.2 kDa, 527 aa; C-terminal crystal structure PDB 1OCY) tethered at their N-termini to gp10 baseplate pins. Dome-to-star rotation swings the C-terminal Zn²⁺-coordinated receptor-binding heads ~180° downward to bind heptose-phosphate residues of the conserved inner LPS core across six simultaneous contact points.',
        from: [
          { nodeId: 'real-phage-baseplate', label: 'Expanding Baseplate', cargo: 'gp10 pin rotation' },
          { nodeId: 'gp12-real', label: 'gp12 Trimer Tip', cargo: 'Zn²⁺ binding head' }
        ],
        to: [
          { nodeId: 'lps', label: 'Host Inner-Core LPS', cargo: 'Irreversible 6-point clamp' },
          { nodeId: 'gp5-real', label: 'gp27–gp5 Puncture Hub', cargo: 'Anti-recoil bracing' }
        ]
      },
      es: {
        subtitle: 'Seis garfios de anclaje con punta de zinc',
        simple:
          'Ocultos bajo el vientre como los garfios de Batman, seis espolones cortos bajan de golpe en el ataque para atornillar el módulo a la coraza azucarada de la bacteria.',
        story:
          'Disparar un martinete contra una muralla bacteriana genera un retroceso capaz de lanzar al fago por los aires. Por eso, al abrirse la [[placa basal|real-phage-baseplate]], seis [[fibras cortas gp12|gp12-real]] bajan como garfios de Batman y clavan sus dientes de zinc en el [[LPS|lps]], empernando la plataforma mientras dispara la [[vaina gp18|gp18-real]].',
        blueprint: {
          role: 'Anclaje superficial irreversible frente al retroceso mecánico',
          arrivesFrom: 'Plegadas en corona bajo las cuñas de la [[placa basal|real-phage-baseplate]] en reposo',
          inside: 'Seis homotrímeros [[gp12|gp12-real]] (~34 nm) con eje en triple espiral β y cabezal con Zn²⁺',
          deliversTo: 'Muerde irreversiblemente el núcleo interno del [[LPS|lps]] para apuntalar la [[aguja gp5|gp5-real]]',
          loop: 'Mantiene la carcasa vacía del fago clavada a la membrana externa durante todo el ciclo lítico'
        },
        scientific:
          'Seis fibras caudales cortas homotriméricas gp12 (3 × 56.2 kDa, 527 aa; estructura C-terminal PDB 1OCY) articuladas por su extremo N a los pernos gp10 de la placa basal. La transición cúpula-estrella abate ~180° sus cabezales C-terminales coordinados con Zn²⁺ para fijarse con altísima avidez hexavalente a las heptosas-fosfato del núcleo interno del LPS.',
        from: [
          { nodeId: 'real-phage-baseplate', label: 'Placa basal en apertura', cargo: 'Giro del perno gp10' },
          { nodeId: 'gp12-real', label: 'Punta trimérica gp12', cargo: 'Cabezal con Zn²⁺' }
        ],
        to: [
          { nodeId: 'lps', label: 'LPS del núcleo interno', cargo: 'Anclaje irreversible' },
          { nodeId: 'gp5-real', label: 'Buje perforador gp27–gp5', cargo: 'Soporte antirretroceso' }
        ]
      }
    },

    needle: {
      en: {
        subtitle: 'The Armor-Piercing Dagger & Wall-Melting Blades',
        simple:
          'Tipped like an armor-piercing tank sabot flanked by three Edward Scissorhands enzyme blades, this warhead stabs the outer membrane and snips a clean hole through the wall.',
        story:
          'Riding the nose of the [[gp19 tail tube|gp19-real]] as the [[sheath|gp18-real]] fires, this [[gp27–gp5 warhead|gp5-real]] punches its triple-β-helix stiletto straight through outer [[LPS|lps]]. Inside the moat, the tip pops off like a tank sabot so three Edward-Scissorhands lysozyme blades snip a neat doorway through [[peptidoglycan|peptidoglycan]] chainmail!',
        blueprint: {
          role: 'Mechanical outer-membrane perforator and enzymatic murein breach',
          arrivesFrom: 'Seated centrally inside [[baseplate|real-phage-baseplate]] at the distal tip of [[gp19 tube|gp19-real]]',
          inside: 'Trimeric gp27 cup + [[gp5 triple-β-helix needle|gp5-real]] + gp5.4 tip + three GH24 lysozyme domains',
          deliversTo: 'Pierces [[LPS bilayer|lps]] and hydrolyzes [[peptidoglycan|peptidoglycan]] before uncapping [[gp19 tube|gp19-real]]',
          loop: 'Unlike late gpE endolysin that bursts the cell from within, gp5 lysozyme cuts strictly a tiny entry hole from outside'
        },
        scientific:
          'Central hub-needle complex (gp27)₃–(gp5)₃–(gp5.4)₁ (PDB 1K28 / 4KU0; ~19 nm tall): gp27 adapts 6-fold gp19 tube symmetry to 3-fold gp5; gp5 undergoes maturation cleavage at Ser351–Ala352 so the 11 nm C-terminal triple β-helix (stiffened to ~20 GPa Young’s modulus and tipped by PAAR-motif gp5.4) dissociates in the periplasm, freeing three GH24 muramidase domains to cleave β-1,4 glycosidic bonds between MurNAc and GlcNAc.',
        from: [
          { nodeId: 'gp19-real', label: 'gp19 Inner Tube', cargo: 'Mechanical thrust' },
          { nodeId: 'gp18-real', label: 'gp18 Sheath Contraction', cargo: '>500 pN impact force' }
        ],
        to: [
          { nodeId: 'lps', label: 'Outer LPS Membrane', cargo: 'Mechanical puncture' },
          { nodeId: 'peptidoglycan', label: 'Peptidoglycan Mesh', cargo: 'Localized β-1,4 lysis' }
        ]
      },
      es: {
        subtitle: 'La daga perforadora y sus tres cuchillas de lisozima',
        simple:
          'Como un proyectil perforante flanqueado por tres tijeras al estilo El joven manos de tijera, esta ojiva atraviesa la membrana externa y recorta un hueco limpio en la pared.',
        story:
          'En la punta del [[tubo gp19|gp19-real]] al cerrarse la [[vaina|gp18-real]], esta [[ojiva gp27–gp5|gp5-real]] clava su estilete a través del [[LPS|lps]] exterior. Ya en el periplasma, la punta se suelta como un casquillo perforante y tres cuchillas de lisozima dignas de Manos de Tijera recortan la cota de [[peptidoglicano|peptidoglycan]].',
        blueprint: {
          role: 'Perforador mecánico de membrana externa e hidrolasa local de mureína',
          arrivesFrom: 'Alojado en el centro de la [[placa basal|real-phage-baseplate]] en la boca del [[tubo gp19|gp19-real]]',
          inside: 'Copa trimérica gp27 + [[aguja gp5 en triple hélice β|gp5-real]] + punta gp5.4 + tres dominios lisozima GH24',
          deliversTo: 'Perfora la [[bicapa de LPS|lps]] y digiere el [[peptidoglicano|peptidoglycan]] antes de destapar el [[tubo gp19|gp19-real]]',
          loop: 'A diferencia de la endolisina tardía que revienta la bacteria al final, gp5 abre solo una brecha milimétrica para entrar'
        },
        scientific:
          'Complejo central (gp27)₃–(gp5)₃–(gp5.4)₁ (PDB 1K28 / 4KU0; ~19 nm): gp27 adapta la simetría 6 del tubo gp19 al eje 3 de gp5; el corte autocatalítico Ser351–Ala352 permite que el prisma C-terminal en triple hélice β de 11 nm (~20 GPa de rigidez, rematado por gp5.4) se desprenda en el periplasma, liberando tres dominios muramidasa GH24 que hidrolizan enlaces β-1,4 entre MurNAc y GlcNAc.',
        from: [
          { nodeId: 'gp19-real', label: 'Tubo interno gp19', cargo: 'Empuje axial' },
          { nodeId: 'gp18-real', label: 'Contracción de gp18', cargo: 'Fuerza >500 pN' }
        ],
        to: [
          { nodeId: 'lps', label: 'Membrana externa con LPS', cargo: 'Punción mecánica' },
          { nodeId: 'peptidoglycan', label: 'Pared de peptidoglicano', cargo: 'Hidrólisis localizada' }
        ]
      }
    },

    ltf: {
      en: {
        subtitle: 'Six Hinged Iron-Tipped Scout Legs',
        simple:
          'Spanning 145 nanometers with a nimble knee joint like Iron-Spider claws, these six spindly scout legs walk across a bacterium to check its ID before firing.',
        story:
          'Dropped into action by collar whiskers, six [[hinged long fibers|phage-fiber]] let this brainless hunter tiptoe like Spider-Man’s Iron-Spider suit across [[LPS|lps]] bristles until iron-braced [[gp37 needle tips|gp37-real]] click into [[OmpC porins|porin]]. Once three legs lock onto real targets together, their crouch wrenches the [[baseplate|real-phage-baseplate]] and fires!',
        blueprint: {
          role: 'Reversible surface-walking scout legs and mechanochemical trigger levers',
          arrivesFrom: 'Released from collar whiskers and articulated at gp9 sockets on [[baseplate|real-phage-baseplate]]',
          inside: 'Six 145 nm fibers: gp34 proximal rod + gp35 knee + gp36 shin + Fe²⁺-braced [[gp37 receptor tip|gp37-real]]',
          deliversTo: 'Detects host [[OmpC/OmpF porins|porin]] and [[LPS|lps]], transmitting trigger torque to [[baseplate|real-phage-baseplate]]',
          loop: 'Dedicated phage chaperones gp38 and gp57A fold new fibers inside the host without tangling'
        },
        scientific:
          'Six 145 nm articulated appendages (~850 kDa each): proximal homotrimer gp34 (3 × 1,289 aa), monomeric gp35 knee hinge, distal homotrimers gp36 (3 × 221 aa) and gp37 (3 × 1,026 aa; C-terminal tip PDB 2XGF braced by seven octahedral Fe²⁺ ions). Performs 2D diffusive "walking" via weak reversible LPS/OmpC binding until ≥3 fibers co-engage, lowering the activation barrier of baseplate expansion.',
        from: [
          { nodeId: 'phage-fiber', label: 'Extended Fiber Architecture', cargo: 'gp35 knee flexion' },
          { nodeId: 'gp37-real', label: 'gp37 Iron-Braced Tip', cargo: 'Receptor specificity' }
        ],
        to: [
          { nodeId: 'porin', label: 'Host OmpC/OmpF Porins', cargo: 'Primary docking' },
          { nodeId: 'real-phage-baseplate', label: 'Baseplate gp9 Sockets', cargo: 'Dome-to-star pull' }
        ]
      },
      es: {
        subtitle: 'Seis patas exploradoras con punta de hierro',
        simple:
          'Con 145 nanómetros y rodilla articulada como las patas del traje Iron-Spider, estas seis patas exploradoras caminan sobre la bacteria para verificar su identidad antes de disparar.',
        story:
          'Desplegadas por los bigotes del cuello, seis [[fibras largas articuladas|phage-fiber]] dejan al cazador caminar sobre el [[LPS|lps]] al estilo Iron-Spider hasta que sus [[puntas gp37|gp37-real]] con hierro encajan en [[porinas OmpC|porin]]. Cuando tres patas confirman blanco a la vez, su flexión descerraja la [[placa basal|real-phage-baseplate]] y abre fuego.',
        blueprint: {
          role: 'Patas exploradoras reversibles y palancas mecánicas de activación',
          arrivesFrom: 'Desplegadas por los bigotes gpWac desde los zócalos gp9 de la [[placa basal|real-phage-baseplate]]',
          inside: 'Seis fibras de 145 nm: muslo gp34 + rodilla gp35 + tibia gp36 + [[punta gp37 con 7 Fe²⁺|gp37-real]]',
          deliversTo: 'Reconoce [[porinas OmpC/OmpF|porin]] y [[LPS|lps]], transmitiendo par mecánico a la [[placa basal|real-phage-baseplate]]',
          loop: 'Las chaperonas virales gp38 y gp57A ensamblan nuevas patas dentro del huésped sin que se enreden'
        },
        scientific:
          'Seis apéndices articulados de 145 nm (~850 kDa cada uno): homotrímero proximal gp34 (3 × 1,289 aa), rótula monomérica gp35 y homotrímeros distales gp36 (3 × 221 aa) y gp37 (3 × 1,026 aa; extremo C-terminal PDB 2XGF estabilizado por siete iones Fe²⁺). Ejecutan difusión bidimensional sobre la envoltura hasta que ≥3 puntas fijan OmpC/LPS simultáneamente y abaten la barrera energética de apertura basal.',
        from: [
          { nodeId: 'phage-fiber', label: 'Fibra articulada extendida', cargo: 'Flexión de rodilla gp35' },
          { nodeId: 'gp37-real', label: 'Punta gp37 con hierro', cargo: 'Reconocimiento táctil' }
        ],
        to: [
          { nodeId: 'porin', label: 'Porinas OmpC/OmpF', cargo: 'Unión al receptor' },
          { nodeId: 'real-phage-baseplate', label: 'Zócalos gp9 basales', cargo: 'Tracción disparadora' }
        ]
      }
    },

    om: {
      en: {
        subtitle: 'The Sugar-Bristled Outer Fortress Wall',
        simple:
          'Plot twist worthy of Cells at Work!: the dense outer sugar shield bacteria grow to block soaps and drugs is the exact landing pad T4 uses to lock on and attack.',
        story:
          'Grown by [[E. coli|real-bacterium]] like a Riot Shield against gut bile and antibiotics, this dense [[LPS|lps]] sugar forest ironically broadcasts a neon landing beacon to T4! First [[gp37 scout tips|gp37-real]] skate across its outer bristles; milliseconds later [[gp12 grappling hooks|gp12-real]] bite its deep core while the [[gp5 needle|gp5-real]] punches right through.',
        blueprint: {
          role: 'Host outer asymmetric lipid-sugar barrier co-opted as viral landing pad',
          arrivesFrom: 'Biosynthesized in host inner membrane/periplasm and exported via Lpt machinery onto [[bacterial envelope|real-envelope]]',
          inside: 'Inner [[phospholipid|phospholipid]] leaflet + outer Lipid A / core oligosaccharide / [[LPS|lps]] brush studded with [[porins|porin]]',
          deliversTo: 'Anchors [[gp37|gp37-real]] and [[gp12|gp12-real]] fibers while yielding locally to [[gp5 needle|gp5-real]] puncture',
          loop: 'Phage superinfection-exclusion proteins soon remodel envelope defenses to block rival phages from landing'
        },
        scientific:
          'Asymmetric Gram-negative outer membrane (~7–8 nm bilayer + core oligosaccharide): inner leaflet of phosphatidylethanolamine/phosphatidylglycerol and outer leaflet of lipopolysaccharide (hexa-acylated Lipid A, Kdo₂-heptose inner core bound by gp12 [PDB 1OCY], and glucosyl outer core bound by gp37 [PDB 2XGF]), cross-bridged by divalent Mg²⁺/Ca²⁺ cations.',
        from: [
          { nodeId: 'gp37-real', label: 'gp37 Long Fiber Tips', cargo: 'Reversible surface scan' },
          { nodeId: 'gp12-real', label: 'gp12 Short Tail Fibers', cargo: 'Inner-core LPS lock' }
        ],
        to: [
          { nodeId: 'lps', label: 'LPS Glycolipid Coat', cargo: '6-point anchor platform' },
          { nodeId: 'peptidoglycan', label: 'Periplasmic Space Below', cargo: 'gp5 needle entry path' }
        ]
      },
      es: {
        subtitle: 'La muralla exterior erizada de azúcares',
        simple:
          'Giro de guion digno de Cells at Work!: el denso escudo exterior de azúcares que la bacteria levanta contra jabones y fármacos es justo la pista de aterrizaje que usa el fago T4.',
        story:
          'Levantado por [[E. coli|real-bacterium]] como escudo antidisturbios frente a bilis y antibióticos, este bosque de [[LPS|lps]] termina sirviendo de faro de aterrizaje al fago. Primero patinan sobre él las [[puntas exploradoras gp37|gp37-real]]; al instante los [[garfios gp12|gp12-real]] muerden su raíz mientras la [[aguja gp5|gp5-real]] perfora la bicapa.',
        blueprint: {
          role: 'Barrera lipopolisacárida externa del huésped convertida en plataforma de anclaje',
          arrivesFrom: 'Exportada mediante el sistema Lpt hacia la cara exterior de la [[envoltura bacteriana|real-envelope]]',
          inside: 'Monocapa interna de [[fosfolípidos|phospholipid]] + monocapa externa de Lípido A y [[LPS|lps]] con [[porinas|porin]]',
          deliversTo: 'Sujeta las puntas [[gp37|gp37-real]] y [[gp12|gp12-real]] mientras cede al impacto de la [[aguja gp5|gp5-real]]',
          loop: 'Proteínas tempranas de exclusión remodelan pronto la envoltura para impedir que otros fagos rivales aterricen'
        },
        scientific:
          'Membrana externa asimétrica gramnegativa (~7–8 nm de espesor lipídico): hemicapa interna de fosfatidiletanolamina/fosfatidilglicerol y hemicapa externa de lipopolisacárido (Lípido A hexaacilado, núcleo interno Kdo₂-heptosa fijado por gp12 [PDB 1OCY] y núcleo externo glucosilado reconocido por gp37 [PDB 2XGF]), estabilizada lateralmente por cationes divalentes Mg²⁺/Ca²⁺.',
        from: [
          { nodeId: 'gp37-real', label: 'Puntas largas gp37', cargo: 'Rastreo superficial' },
          { nodeId: 'gp12-real', label: 'Fibras cortas gp12', cargo: 'Bloqueo en núcleo LPS' }
        ],
        to: [
          { nodeId: 'lps', label: 'Manto de LPS', cargo: 'Plataforma de fijación' },
          { nodeId: 'peptidoglycan', label: 'Espacio periplásmico', cargo: 'Paso de la aguja gp5' }
        ]
      }
    },

    porin: {
      en: {
        subtitle: 'Nutrient Sieves Turned Traitor Beacons',
        simple:
          'Like the Death Star’s unavoidable thermal exhaust ports, bacteria must keep thousands of nutrient pores open to eat—giving the phage’s scout legs a foolproof handle.',
        story:
          'A hungry [[bacterium|real-bacterium]] cannot weld shut its dinner windows without starving, leaving ~100,000 three-barrel [[OmpC and OmpF sieves|porin]] exposed across its [[LPS|lps]] hull like Death Star exhaust ports! Those exact rims are what iron-braced [[gp37 fingertips|gp37-real]] feel for—turning food chutes into tripwires for the [[baseplate|real-phage-baseplate]].',
        blueprint: {
          role: 'Abundant outer-membrane nutrient channel exploited as primary phage receptor',
          arrivesFrom: 'Inserted into outer [[envelope|real-envelope]] by the host BamA–E β-barrel assembly machine',
          inside: 'Homotrimeric 16-stranded antiparallel β-barrels ([[OmpC/OmpF|porin]]) exposing extracellular surface loops',
          deliversTo: 'Provides high-specificity docking pockets for [[gp37 needle tips|gp37-real]] to trigger [[baseplate|real-phage-baseplate]]',
          loop: 'Host OmpC mutations confer phage resistance only at the steep cost of impaired nutrient uptake'
        },
        scientific:
          'Trimeric outer-membrane porins OmpC and OmpF (~10⁵ copies/cell; crystal structure PDB 2OMF; 3 × 346–367 aa, ~115 kDa trimer). Each monomer forms a 16-stranded transmembrane β-barrel with pore constriction eyelet L3 (~1.1 nm, <600 Da cutoff) and exposed extracellular loops L1, L4, and L5 recognized by the distal head domain of T4 gp37 (PDB 2XGF).',
        from: [
          { nodeId: 'real-envelope', label: 'Host Outer Membrane', cargo: 'Embedded β-barrels' },
          { nodeId: 'gp37-real', label: 'gp37 Distal Tip', cargo: 'Loop L4/L5 recognition' }
        ],
        to: [
          { nodeId: 'phage-fiber', label: 'Long Tail Fiber Lever', cargo: 'Anchored mechanical pull' },
          { nodeId: 'real-phage-baseplate', label: 'Phage Baseplate', cargo: 'Commitment signal' }
        ]
      },
      es: {
        subtitle: 'Tamices nutritivos convertidos en balizas traidoras',
        simple:
          'Como los conductos de ventilación inevitables de la Estrella de la Muerte, la bacteria debe dejar abiertos miles de poros de comida, dándole al fago el agarradero perfecto.',
        story:
          'Una [[bacteria|real-bacterium]] no puede tapiar sus ventanas de comida sin morir de hambre, dejando unas 100,000 [[porinas OmpC y OmpF|porin]] expuestas en su casco de [[LPS|lps]] cual conducto de la Estrella de la Muerte. Esos bordes exactos buscan las [[puntas gp37|gp37-real]] para convertir el comedor en cable trampa de la [[placa basal|real-phage-baseplate]].',
        blueprint: {
          role: 'Canal pasivo de nutrientes en membrana externa explotado como receptor primario',
          arrivesFrom: 'Insertado en la [[envoltura externa|real-envelope]] mediante la maquinaria bacteriana BamA–E',
          inside: 'Homotrímeros en barril β de 16 hebras ([[OmpC/OmpF|porin]]) con bucles extracelulares expuestos',
          deliversTo: 'Ofrece puntos de anclaje específicos a las [[puntas gp37|gp37-real]] para disparar la [[placa basal|real-phage-baseplate]]',
          loop: 'Las bacterias que mutan OmpC esquivan al fago pero pagan el precio de absorber peor sus nutrientes'
        },
        scientific:
          'Porinas triméricas de membrana externa OmpC y OmpF (~10⁵ copias/célula; estructura cristalográfica PDB 2OMF; 3 × 346–367 aa, ~115 kDa). Cada monómero forma un barril β transmembrana de 16 hebras con constricción interna L3 (~1.1 nm, corte <600 Da) y bucles extracelulares L1, L4 y L5 reconocidos específicamente por el cabezal distal de gp37 (PDB 2XGF).',
        from: [
          { nodeId: 'real-envelope', label: 'Membrana externa', cargo: 'Barriles β residentes' },
          { nodeId: 'gp37-real', label: 'Punta distal gp37', cargo: 'Unión a bucles L4/L5' }
        ],
        to: [
          { nodeId: 'phage-fiber', label: 'Palanca de fibra larga', cargo: 'Punto de apoyo firme' },
          { nodeId: 'real-phage-baseplate', label: 'Placa basal', cargo: 'Señal de disparo' }
        ]
      }
    },

    pg: {
      en: {
        subtitle: 'The Surgical Hole in the Chainmail Wall',
        simple:
          'Like cutting a neat Catwoman glass circle instead of dynamiting the bank, the phage’s enzymes snip a tiny 10-nanometer keyhole in the wall mesh so the host stays alive to build viruses.',
        story:
          'Blowing a wide gash in this pressurized [[peptidoglycan|peptidoglycan]] Mithril shirt would pop the victim before it forged a single phage! Instead, after the [[gp5 warhead|gp5-real]] stabs past [[LPS|lps]], its three lysozyme blades cut a Catwoman-clean 10-nanometer circle—just wide enough for the [[gp19 tail tube|gp19-real]] to reach the [[inner membrane|plasma-membrane]].',
        blueprint: {
          role: 'Periplasmic load-bearing murein mesh locally breached by tail lysozyme',
          arrivesFrom: 'Cross-linked glycan-peptide sacculus spanning the periplasm beneath [[LPS outer membrane|lps]]',
          inside: 'GlcNAc–MurNAc glycan strands cross-linked by tetrapeptides, locally cleaved by three [[gp5 lysozymes|gp5-real]]',
          deliversTo: 'Clears a ~10 nm periplasmic aperture for [[gp19 inner tube|gp19-real]] to reach [[inner membrane|plasma-membrane]]',
          loop: 'Phage Imm protein quickly blocks subsequent phages from over-digesting the wall and causing "lysis from without"'
        },
        scientific:
          'Single-to-few-layer Gram-negative murein sacculus (~3–6 nm thick in E. coli periplasm) composed of alternating β-(1,4)-linked N-acetylglucosamine and N-acetylmuramic acid cross-linked via L-Ala–D-Glu–m-DAP–D-Ala peptides. Three tethered gp5 GH24 muramidase domains (PDB 1K28) restrict hydrolysis to a ~9–10 nm circular zone matching the gp19 tube outer diameter.',
        from: [
          { nodeId: 'gp5-real', label: 'gp5 Tail Lysozyme Trio', cargo: 'β-1,4 muramidase cuts' },
          { nodeId: 'lps', label: 'Breached Outer Membrane', cargo: 'Periplasmic access' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'Advancing gp19 Tube', cargo: '10 nm surgical passage' },
          { nodeId: 'plasma-membrane', label: 'Host Inner Membrane', cargo: 'Exposed bilayer target' }
        ]
      },
      es: {
        subtitle: 'El ojal quirúrgico en la cota de malla',
        simple:
          'Como Catwoman cortando un círculo limpio en un cristal en vez de dinamitar el banco, las enzimas recortan un ojal de 10 nanómetros en la malla sin reventar antes de tiempo al huésped.',
        story:
          'Rajar de más esta camisa presurizada de [[peptidoglicano|peptidoglycan]] haría estallar la presa antes de armar un solo virus. Por eso, tras cruzar el [[LPS|lps]], las tres cuchillas del [[complejo gp5|gp5-real]] recortan un círculo digno de Catwoman de diez nanómetros, justo para que el [[tubo caudal gp19|gp19-real]] alcance la [[membrana interna|plasma-membrane]].',
        blueprint: {
          role: 'Sáculo estructural periplásmico perforado localmente por lisozimas caudales',
          arrivesFrom: 'Malla covalente glucano-peptídica bajo la [[membrana externa de LPS|lps]]',
          inside: 'Cadenas GlcNAc–MurNAc entrecruzadas, escindidas localmente por los tres dominios lisozima de [[gp5|gp5-real]]',
          deliversTo: 'Despeja un orificio de ~10 nm para que el [[tubo gp19|gp19-real]] contacte la [[membrana interna|plasma-membrane]]',
          loop: 'La proteína viral temprana Imm refuerza la envoltura para evitar que decenas de fagos perforen y revienten la célula'
        },
        scientific:
          'Sáculo de mureína gramnegativo (~3–6 nm de espesor periplásmico) formado por cadenas alternas de GlcNAc y MurNAc unidas por enlaces β-(1,4) y entrecruzadas por tetrapéptidos con m-DAP. El anclaje espacial de los tres dominios muramidasa GH24 de gp5 (PDB 1K28) confina la hidrólisis a un poro circular de ~9–10 nm ajustado al diámetro externo del tubo gp19.',
        from: [
          { nodeId: 'gp5-real', label: 'Trío de lisozimas gp5', cargo: 'Corte β-1,4 muramidasa' },
          { nodeId: 'lps', label: 'Membrana externa abierta', cargo: 'Acceso al periplasma' }
        ],
        to: [
          { nodeId: 'gp19-real', label: 'Tubo interno gp19', cargo: 'Paso libre de 10 nm' },
          { nodeId: 'plasma-membrane', label: 'Membrana interna', cargo: 'Contacto de inyección' }
        ]
      }
    },

    im: {
      en: {
        subtitle: 'The Self-Sealing Cytoplasmic Airlock',
        simple:
          'Docking like a Star Wars boarding airlock instead of ripping the hull, the tail tube seals snugly against the inner membrane so the bacterium’s power grid stays live during the takeover.',
        story:
          'Shredding this inner [[phospholipid|phospholipid]] bilayer would short-circuit the proton battery spinning [[ATP synthases|atp-synthase-ecoli]] and black out the factory! Instead, like a Millennium Falcon boarding collar, the [[gp19 tail tube|gp19-real]] forms a leak-tight airlock against the membrane—shooting [[169 kbp of DNA|dna]] into the [[cytosol|cytosol]] before sealing shut.',
        blueprint: {
          role: 'Energized cytoplasmic bilayer forming a transient, non-lethal DNA translocation pore',
          arrivesFrom: 'Reached after [[gp19 tube|gp19-real]] traverses breached [[peptidoglycan|peptidoglycan]]',
          inside: 'Fluid [[phospholipid|phospholipid]] bilayer + tape-measure gp29/host proteins forming a sealed 4 nm channel',
          deliversTo: 'Conveys viral [[dsDNA|dna]] and core saboteurs into [[cytosol|cytosol]] while preserving proton-motive force',
          loop: 'Maintains [[ATP synthase|atp-synthase-ecoli]] power for ~25 minutes until phage holin gpT punches lethal exit holes'
        },
        scientific:
          'Cytoplasmic phospholipid bilayer (~5 nm hydrophobic core, ΔΨ ≈ −140 to −180 mV proton-motive force). Distal gp19 tail tube docking (assisted by ejected gp29 tape-measure transmembrane helices and cytoplasmic Ca²⁺/PMF) opens a transient, ion-tight proteolipid channel conducting ~169 kbp dsDNA in ~30 s without collapsing host bioenergetics—until late holin gpT triggers scheduled lysis.',
        from: [
          { nodeId: 'gp19-real', label: 'gp19 Tail Tube Tip', cargo: 'Sealed rim docking' },
          { nodeId: 'dna', label: 'Pressurized Phage Genome', cargo: '169 kbp translocation' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Bacterial Cytoplasm', cargo: 'Injected DNA & Alt/IPI*' },
          { nodeId: 'atp-synthase-ecoli', label: 'Host Bioenergetics', cargo: 'Preserved proton gradient' }
        ]
      },
      es: {
        subtitle: 'La esclusa citoplasmática autosellante',
        simple:
          'Acoplándose como una esclusa de abordaje de Star Wars sin rasgar el casco, el tubo sella contra la membrana interna para no apagar la batería eléctrica que fabricará nuevos virus.',
        story:
          'Romper esta bicapa interna de [[fosfolípidos|phospholipid]] descargaría la batería que mueve las [[ATP sintasas|atp-synthase-ecoli]] y apagaría la fábrica. En cambio, cual esclusa de abordaje espacial, el [[tubo gp19|gp19-real]] besa la membrana sin fugas, dispara las [[169 kpb de ADN|dna]] al [[citosol|cytosol]] y vuelve a cerrar la compuerta.',
        blueprint: {
          role: 'Bicapa citoplasmática energizada que forma un canal transitorio sin fugas iónicas',
          arrivesFrom: 'Alcanzada cuando el [[tubo gp19|gp19-real]] cruza el ojal del [[peptidoglicano|peptidoglycan]]',
          inside: 'Bicapa de [[fosfolípidos|phospholipid]] + hélices de gp29 que abren un conducto sellado de 4 nm',
          deliversTo: 'Entrega [[ADNbc|dna]] y proteínas del núcleo al [[citosol|cytosol]] conservando la fuerza protón-motriz',
          loop: 'Sostiene la energía de la [[ATP sintasa|atp-synthase-ecoli]] durante ~25 min hasta que la holina gpT perfora la salida final'
        },
        scientific:
          'Bicapa fosfolipídica citoplasmática (~5 nm de núcleo hidrofóbico, ΔΨ ≈ −140 a −180 mV). El acoplamiento de la boca del tubo gp19 (asistido por hélices transmembrana de la proteína gp29 eyectada y la fuerza protón-motriz) abre un canal proteolipídico transitorio que conduce las 169 kpb de ADNbc en ~30 s sin disipar el potencial de membrana hasta la lisis programada por la holina gpT.',
        from: [
          { nodeId: 'gp19-real', label: 'Boca del tubo gp19', cargo: 'Acoplamiento hermético' },
          { nodeId: 'dna', label: 'Genoma presurizado', cargo: 'Paso de 169 kpb' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citoplasma bacteriano', cargo: 'ADN, IPI* y Alt' },
          { nodeId: 'atp-synthase-ecoli', label: 'Batería energética', cargo: 'Gradiente de H⁺ intacto' }
        ]
      }
    },

    rnap: {
      en: {
        subtitle: 'The Brainwashed Host Printing Press',
        simple:
          'Pulling an Agent Smith takeover straight out of The Matrix, viral saboteurs chemically hotwire the bacterium’s own RNA polymerase in seconds so it prints only viral orders.',
        story:
          'Seconds after [[phage DNA|dna]] arrives, the Alt commando tags [[host RNA polymerase|rnap-ecoli]] like Agent Smith overwriting a Matrix citizen—pulling it off the [[bacterial nucleoid|real-nucleoid]] onto viral genes! Soon AsiA and MotA handcuff its guide factor, turning E. coli’s press into a non-stop dispatcher feeding viral [[mRNA|rna]] to [[70S ribosomes|ribosome-ecoli]].',
        blueprint: {
          role: 'Hijacked host multi-subunit RNA polymerase reprogrammed in three temporal waves',
          arrivesFrom: 'Host [[E. coli RNAP holoenzyme|rnap-ecoli]] diverted from [[host nucleoid|real-nucleoid]] upon phage entry',
          inside: 'α₂ββ′ωσ⁷⁰ complex sequentially modified by Alt/Mod ADP-ribosylation, AsiA/MotA appropriation, and gp55 late sigma',
          deliversTo: 'Transcribes early, middle, and late phage [[mRNAs|rna]] for translation on [[70S ribosomes|ribosome-ecoli]]',
          loop: 'Early transcripts encode nucleases (ndd, denA, denB) that shred host DNA so zero rival promoters remain'
        },
        scientific:
          'Escherichia coli DNA-dependent RNA polymerase holoenzyme (α₂ββ′ω + σ⁷⁰, ~450 kDa; cryo-EM/X-ray PDB 4YG2). Reprogrammed in three stages: (1) immediate (<1 min) Alt-catalyzed ADP-ribosylation of α-Arg265 enhances viral early P_E transcription; (2) middle (~2–3 min) 10 kDa AsiA anti-sigma remodels σ⁷⁰ region 4 to recruit phage activator MotA; (3) late (~7 min) phage σ-factor gp55 + gp33 + gp45 sliding clamp drive capsid/tail structural gene transcription.',
        from: [
          { nodeId: 'dna', label: 'Injected Phage Genome', cargo: 'Early/middle/late promoters' },
          { nodeId: 'real-nucleoid', label: 'Abandoned Host Nucleoid', cargo: 'Diverted α₂ββ′ωσ⁷⁰ pool' }
        ],
        to: [
          { nodeId: 'rna', label: 'Phage mRNA Transcripts', cargo: 'Staged viral blueprints' },
          { nodeId: 'ribosome-ecoli', label: 'Host 70S Ribosomes', cargo: 'Coupled translation feed' }
        ]
      },
      es: {
        subtitle: 'La imprenta celular reprogramada',
        simple:
          'En una toma de control al estilo Agente Smith en Matrix, los saboteadores puentean en segundos la ARN polimerasa bacteriana para que ignore sus genes e imprima solo órdenes virales.',
        story:
          'Segundos después de irrumpir el [[ADN del fago|dna]], el francotirador Alt reprograma la [[ARN polimerasa bacteriana|rnap-ecoli]] como el Agente Smith en Matrix, apartándola del [[nucleoide del huésped|real-nucleoid]]. Luego AsiA y MotA esposan su guía, volviendo la imprenta un capataz exclusivo que bombea [[ARNm viral|rna]] a los [[ribosomas 70S|ribosome-ecoli]].',
        blueprint: {
          role: 'Holoenzima ARN polimerasa del huésped secuestrada en tres oleadas temporales',
          arrivesFrom: '[[ARN polimerasa de E. coli|rnap-ecoli]] desviada desde el [[nucleoide bacteriano|real-nucleoid]]',
          inside: 'Complejo α₂ββ′ωσ⁷⁰ remodelado secuencialmente por Alt/Mod, AsiA/MotA y el factor sigma tardío gp55',
          deliversTo: 'Sintetiza [[ARNm|rna]] tempranos, medios y tardíos hacia los [[ribosomas 70S|ribosome-ecoli]]',
          loop: 'Los primeros ARNm producen nucleasas (denA/denB) que trituran el ADN bacteriano para eliminar toda competencia'
        },
        scientific:
          'Holoenzima ARN polimerasa dependiente de ADN de E. coli (α₂ββ′ω + σ⁷⁰, ~450 kDa; PDB 4YG2). Reprogramada en tres fases: (1) inmediata (<1 min) por ADP-ribosilación de α-Arg265 vía gpAlt sobre promotores tempranos; (2) media (~2–3 min) mediante remodelación de la región 4 de σ⁷⁰ por AsiA (10 kDa) y reclutamiento de MotA; (3) tardía (~7 min) sustituyendo σ⁷⁰ por gp55 acoplado a gp33 y a la abrazadera deslizante gp45.',
        from: [
          { nodeId: 'dna', label: 'ADN viral inyectado', cargo: 'Promotores virales' },
          { nodeId: 'real-nucleoid', label: 'Nucleoide abandonado', cargo: 'Reserva de polimerasas' }
        ],
        to: [
          { nodeId: 'rna', label: 'ARNm del fago', cargo: 'Órdenes escalonadas' },
          { nodeId: 'ribosome-ecoli', label: 'Ribosomas 70S', cargo: 'Traducción acoplada' }
        ]
      }
    },

    ribosome: {
      en: {
        subtitle: 'Captive Forges Mass-Producing Two Hundred New Landers',
        simple:
          'Like Saruman’s Isengard forges working overtime, 50,000 hijacked bacterial ribosomes crank out phage heads, tails, and legs nonstop until ~200 new hunters burst out in 25 minutes!',
        story:
          'Behold the jackpot of the heist: 50,000 captive [[70S ribosomes|ribosome-ecoli]] fed viral scripts by hijacked [[RNA polymerase|rnap-ecoli]], turbo-boosted with eight bonus [[tRNAs|trna]] brought by the phage itself! Like Isengard war-forges, within 25 minutes they hammer out every [[gp23* shield|gp23-real]] and [[gp18 spring|gp18-real]] for ~200 fresh landers before blowing the cell wide open.',
        blueprint: {
          role: 'Captive bacterial translation factories mass-producing phage hardware',
          arrivesFrom: 'Host [[70S ribosomes|ribosome-ecoli]] loaded with nascent phage [[mRNA|rna]] and phage-encoded [[tRNAs|trna]]',
          inside: '[[30S|ribo-30s]] + [[50S|ribo-50s]] ribonucleoprotein subunits translating ~15–20 amino acids/s assisted by gp31/[[GroEL|groel]]',
          deliversTo: 'Supplies all structural subunits for [[capsids|real-phage-capsid]], [[tails|real-phage-tail]], and [[baseplates|real-phage-baseplate]]',
          loop: 'Final late proteins holin (gpT) and endolysin (gpE) rupture the host to release ~150–200 progeny virions'
        },
        scientific:
          'Escherichia coli 70S ribosomes (~2.5 MDa, 30S + 50S subunits; atomic structure PDB 4YBB; ~20,000–70,000 copies/cell). Supplemented by 8 T4-encoded tRNAs matching AT-rich phage codons (35.3% GC vs. 50.8% in E. coli) and co-chaperonin gp31 (replacing GroES on host GroEL to enlarge the Anfinsen cage for gp23 folding), producing ~2 × 10⁵ gp23 monomers per cell within a ~25–30 min latent period (burst size ~150–200 PFU).',
        from: [
          { nodeId: 'rnap-ecoli', label: 'Hijacked Host RNAP', cargo: 'Nascent phage mRNA' },
          { nodeId: 'trna', label: 'Host + 8 Phage tRNAs', cargo: 'AT-biased aminoacyl-tRNA' }
        ],
        to: [
          { nodeId: 'gp23-real', label: 'Progeny Capsid Hardware', cargo: '~200,000 gp23 copies' },
          { nodeId: 'real-phage', label: 'Progeny T4 Burst', cargo: '~150–200 new virions' }
        ]
      },
      es: {
        subtitle: 'Fraguas cautivas forjando doscientos nuevos cazadores',
        simple:
          'Como las fraguas de Isengard trabajando a destajo, 50,000 ribosomas secuestrados fabrican cabezas, colas y patas sin pausa hasta que unos 200 fagos nuevos revientan la célula en 25 minutos.',
        story:
          'Aquí está el botín mayor del golpe: 50,000 [[ribosomas 70S|ribosome-ecoli]] cautivos leyendo guiones de la [[ARN polimerasa|rnap-ecoli]] secuestrada, acelerados con ocho [[ARNt|trna]] extra del propio fago. Como fraguas de Isengard, en 25 minutos forjan cada [[escudo gp23*|gp23-real]] y [[resorte gp18|gp18-real]] para 200 módulos nuevos antes de volar la célula.',
        blueprint: {
          role: 'Fábricas bacterianas de traducción dedicadas a producir en masa piezas del fago',
          arrivesFrom: '[[Ribosomas 70S|ribosome-ecoli]] alimentados con [[ARNm|rna]] viral y ocho [[ARNt|trna]] codificados por T4',
          inside: 'Subunidades [[30S|ribo-30s]] + [[50S|ribo-50s]] elongando ~15–20 aa/s junto a la cochaperonina gp31/[[GroEL|groel]]',
          deliversTo: 'Abastece todas las subunidades para nuevas [[cápsides|real-phage-capsid]], [[colas|real-phage-tail]] y [[placas basales|real-phage-baseplate]]',
          loop: 'Las proteínas finales holina (gpT) y endolisina (gpE) lisan la envoltura liberando ~150–200 viriones hijos'
        },
        scientific:
          'Ribosomas 70S de E. coli (~2.5 MDa, subunidades 30S + 50S; estructura atómica PDB 4YBB; ~20,000–70,000 copias/célula). Suplementados con 8 ARNt propios de T4 optimizados para codones ricos en A/T (35.3% GC viral frente a 50.8% en E. coli) y la cochaperonina gp31 (que reemplaza a GroES sobre GroEL para alojar gp23), sintetizando ~2 × 10⁵ copias de gp23 en un periodo latente de ~25–30 min (tamaño de explosión ~150–200 viriones).',
        from: [
          { nodeId: 'rnap-ecoli', label: 'ARN polimerasa secuestrada', cargo: 'ARNm viral naciente' },
          { nodeId: 'trna', label: 'ARNt celulares y virales', cargo: 'Aminoacil-ARNt' }
        ],
        to: [
          { nodeId: 'gp23-real', label: 'Piezas de cápside nuevas', cargo: '~200,000 copias de gp23' },
          { nodeId: 'real-phage', label: 'Explosión lítica de T4', cargo: '~150–200 viriones hijos' }
        ]
      }
    }
  },

  'adenovirus_realistic.html': {
    hexon: {
      en: {
        subtitle: 'Two Hundred and Forty Towers of the Crystal Fortress',
        simple:
          'Three identical chains fold a six-sided footprint so 240 Hexon towers build twenty Kryptonian-crystal walls—and later hitchhike on cellular cargo motors straight to the nucleus!',
        story:
          'Even bare of lipid cloak, this [[Armored Crystal Trojan Horse|real-adenovirus]] shrugs off stomach acid thanks to 240 [[Hexon towers|adv-hexon-real]] locked into twenty facets between [[Penton corners|adv-penton-real]]. Once free in the cytosol, acid-primed tower loops grab [[dynein cargo motors|motor-protein]] like Marty McFly skitching a DeLorean tow-line, racing down [[microtubules|microtubule]] to the nucleus!',
        blueprint: {
          role: 'Primary pseudo-hexagonal facet shield and cytosolic dynein motor hitch',
          arrivesFrom: 'Translated on [[host ribosomes|ribosome]], trimerized by viral L4-100K chaperone, imported into [[nucleus|real-nucleus]]',
          inside: '240 homotrimers (720 copies) of [[polypeptide II|adv-hexon-real]] with double-jelly-roll bases and hypervariable loop towers',
          deliversTo: 'Armors [[adenosome core|real-adv-core]] outside the cell and recruits [[dynein motors|motor-protein]] post-endolysis',
          loop: 'Docked hexon shells engage kinesin-1 at [[nuclear pores|nuclear-pore]] to wrench the final capsid apart for DNA import'
        },
        scientific:
          '240 homotrimers of polypeptide II (720 monomers × 951 aa, ~108 kDa each; X-ray PDB 1P30, cryo-EM PDB 6B1T) tiling the 20 triangular facets (12 trimers/facet: 9 central "group-of-nine" + 3 peripentonal) of the ~90 nm pseudo-T=25 icosahedron. Double eight-stranded jelly-roll bases create pseudo-6-fold packing; hypervariable loops HVR1–7 mediate immune evasion, blood factor X binding, and low-pH-primed cytoplasmic dynein IC/LIC recruitment.',
        from: [
          { nodeId: 'ribosome', label: 'Host 80S Ribosome & 100K', cargo: 'Trimeric Hexon II' },
          { nodeId: 'adv-penton-real', label: 'Peripentonal Rim', cargo: 'Vertex facet boundary' }
        ],
        to: [
          { nodeId: 'motor-protein', label: 'Cytoplasmic Dynein', cargo: 'Minus-end transport' },
          { nodeId: 'nuclear-pore', label: 'Nuclear Pore Nup214', cargo: 'Capsid docking' }
        ]
      },
      es: {
        subtitle: 'Doscientas cuarenta torres de la fortaleza de cristal',
        simple:
          'Tres cadenas idénticas imitan un bloque hexagonal para que 240 torres de Hexón levanten veinte muros de cristal kryptoniano y luego viajen gratis en motores celulares hasta el núcleo.',
        story:
          'Sin gota de grasa exterior, este [[caballo de Troya cristalino|real-adenovirus]] resiste el aire seco y el ácido gracias a 240 [[torres de Hexón|adv-hexon-real]] talladas entre [[esquinas de Pentón|adv-penton-real]]. Ya libre en el citosol, sus bucles enganchan [[motores de dineína|motor-protein]] como Marty McFly agarrado a un camión, corriendo por [[microtúbulos|microtubule]] directo al núcleo.',
        blueprint: {
          role: 'Escudo pseudohexagonal principal de las facetas y enganche directo para dineína',
          arrivesFrom: 'Traducido en [[ribosomas 80S|ribosome]], trimerizado por la chaperona viral 100K e importado al [[núcleo|real-nucleus]]',
          inside: '240 homotrímeros (720 subunidades) del [[polipéptido II|adv-hexon-real]] con base de doble rollo de gelatina',
          deliversTo: 'Protege el [[núcleo adenosómico|real-adv-core]] y recluta [[motores de dineína|motor-protein]] tras romper el endosoma',
          loop: 'Al atracar en el [[poro nuclear|nuclear-pore]], la kinesina-1 tira de los hexones para desarmar la cápside e inyectar el ADN'
        },
        scientific:
          '240 homotrímeros del polipéptido II (720 monómeros × 951 aa, ~108 kDa; PDB 1P30 / 6B1T) que pavimentan las 20 facetas triangulares (9 centrales en «grupo de nueve» + 3 peripentonales por faceta) del icosaedro pseudo-T=25 de ~90 nm. Sus dos barriles β tipo jelly-roll generan empaquetamiento pseudohexagonal; las torres con bucles HVR1–7 unen factor X sanguíneo y subunidades IC/LIC de dineína tras exposición a pH endosómico.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosoma 80S y chaperona 100K', cargo: 'Trímeros de Hexón II' },
          { nodeId: 'adv-penton-real', label: 'Borde peripentonal', cargo: 'Frontera de faceta' }
        ],
        to: [
          { nodeId: 'motor-protein', label: 'Dineína citoplasmática', cargo: 'Viaje retrógrado' },
          { nodeId: 'nuclear-pore', label: 'Poro nuclear (Nup214)', cargo: 'Atraque nuclear' }
        ]
      }
    },

    penton: {
      en: {
        subtitle: 'The Five-Fingered Trapdoor & Integrin Bait',
        simple:
          'Capping all twelve crystal corners like pull-pin grenades, these five-part rings wave sticky RGD bait to get swallowed—then pop right out inside the bubble to spring escape knives!',
        story:
          'Framed by [[Hexon towers|adv-hexon-real]] and holding a [[Fiber antenna|adv-fiber-real]], each [[Penton pentamer|adv-penton-real]] runs a Jedi mind-trick: five RGD bait loops cluster integrins at the [[entry site|real-adv-entry]] so the cell gulps the crystal into a [[clathrin vesicle|vesicle]]. Twisted by pull and acid, all twelve corner pins pop out—unleashing protein VI switchblades!',
        blueprint: {
          role: 'Five-fold vertex keystone, integrin endocytosis trigger, and breakaway uncoating hatch',
          arrivesFrom: 'Assembles into homopentamers in cytosol and complexes with [[Fiber shafts|adv-fiber-real]] before nuclear capsid assembly',
          inside: '12 homopentamers (60 copies) of [[polypeptide III|adv-penton-real]] displaying five mobile RGD loops around a central fiber socket',
          deliversTo: 'Cross-links αvβ3/αvβ5 integrins at [[entry zone|real-adv-entry]] to trigger [[vesicle|vesicle]] uptake, then dissociates in early endosomes',
          loop: 'Engineered weakness at the peripentonal seam ensures timely uncoating before [[lysosomes|lysosome]] can fuse'
        },
        scientific:
          'Twelve homopentamers of polypeptide III (5 × 571 aa, ~320 kDa per pentamer; PDB 1X9T / 6B1T) closing the 5-fold icosahedral vertices. Each subunit projects a solvent-exposed RGD motif on an ~80-aa flexible loop (~5.7 nm inter-RGD spacing) that clusters five αvβ3/αvβ5 integrins (*K*_d ≈ 50–100 nM), activating PI3K/Rac1 actin reorganization and clathrin-mediated endocytosis while priming mechanical vertex release.',
        from: [
          { nodeId: 'adv-fiber-real', label: 'Bent Fiber Shaft', cargo: 'Proximity to membrane' },
          { nodeId: 'real-adv-entry', label: 'αvβ3/αvβ5 Integrins', cargo: '5-fold RGD engagement' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Clathrin-Coated Pit', cargo: 'Endocytic engulfment' },
          { nodeId: 'real-adv-vertex', label: 'Uncapped Vertex Pore', cargo: 'Protein VI release' }
        ]
      },
      es: {
        subtitle: 'La trampilla pentagonal y su señuelo de integrinas',
        simple:
          'Cerrando las doce esquinas como granadas con anilla, estos anillos agitan cebos RGD para hacerse tragar y luego saltan dentro de la burbuja liberando navajas de escape.',
        story:
          'Rodeado por [[torres de Hexón|adv-hexon-real]] y sosteniendo una [[antena de Fibra|adv-fiber-real]], cada [[pentámero de Pentón|adv-penton-real]] ejecuta un truco mental Jedi: sus cinco lazos RGD atraen integrinas en la [[zona de entrada|real-adv-entry]] para entrar en una [[vesícula de clatrina|vesicle]]. Retorcidas por tracción y ácido, las doce tapas saltan y sueltan cuchillas VI.',
        blueprint: {
          role: 'Piedra angular pentamérica, disparador de endocitosis y escotilla de escape',
          arrivesFrom: 'Pentameriza en el citosol y engarza los [[ejes de Fibra|adv-fiber-real]] rumbo al ensamblaje nuclear',
          inside: '12 homopentámeros (60 copias) del [[polipéptido III|adv-penton-real]] con cinco bucles móviles RGD',
          deliversTo: 'Agrupa integrinas αvβ3/αvβ5 en la [[entrada|real-adv-entry]] induciendo [[vesículas|vesicle]] y desprendiéndose en el endosoma',
          loop: 'Su unión deliberadamente lábil garantiza que la esquina se abra antes de llegar a los [[lisosomas|lysosome]]'
        },
        scientific:
          'Doce homopentámeros del polipéptido III (5 × 571 aa, ~320 kDa por pentámero; PDB 1X9T / 6B1T) situados en los vértices icosaédricos. Cada monómero expone un motivo RGD sobre un bucle flexible de ~80 residuos (espaciados ~5.7 nm) que entrecruza cinco integrinas αvβ3/αvβ5 (*K*_d ≈ 50–100 nM), disparando señalización PI3K/Rac1, endocitosis mediada por clatrina y pérdida programada del vértice.',
        from: [
          { nodeId: 'adv-fiber-real', label: 'Fibra flexionada', cargo: 'Acercamiento a membrana' },
          { nodeId: 'real-adv-entry', label: 'Integrinas αvβ3/αvβ5', cargo: 'Unión RGD pentavalente' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Fosa de clatrina', cargo: 'Internalización celular' },
          { nodeId: 'real-adv-vertex', label: 'Vértice destapado', cargo: 'Salida de proteína VI' }
        ]
      }
    },

    fiber: {
      en: {
        subtitle: 'Twelve Tight-Junction Grappling Antennas',
        simple:
          'Jutting 30 nanometers from every corner like Inspector Gadget grappling rods, twelve knobbed antennas reach into tight gaps between airway cells to hook CAR locks.',
        story:
          'Airway cells hide their CAR locks deep inside [[cell-to-cell tight junctions|cell-junction]], out of reach for stubby viruses. So [[Adenovirus|real-adenovirus]] fires twelve 30-nanometer [[Fiber antennas|adv-fiber-real]] from its [[Penton sockets|adv-penton-real]] like Inspector Gadget arms—and when membrane drift yanks sideways, the shaft snaps off on cue like Apollo staging to start uncoating!',
        blueprint: {
          role: 'Long-reach primary CAR receptor grapnel and sacrificial uncoating lever',
          arrivesFrom: 'Homotrimerizes in cytosol and slots N-terminal FNPVYP tails into [[Penton base|adv-penton-real]] pores',
          inside: '12 homotrimers of [[polypeptide IV|adv-fiber-real]] (~30 nm triple β-spiral shaft + globular C-terminal Knob)',
          deliversTo: 'Binds [[junctional CAR|cell-junction]] at [[entry zone|real-adv-entry]], bends at shaft repeat 3, and sheds at plasma membrane',
          loop: 'Excess soluble fibers secreted early from infected cells pry open neighboring tight junctions to clear escape routes'
        },
        scientific:
          'Twelve vertex homotrimers of polypeptide IV (3 × 581 aa in Ad5, ~186 kDa; distal shaft/knob crystal structure PDB 1QIU). Comprises an N-terminal penton-binding tail, a 22-repeat triple β-spiral shaft (~30–37 nm, hinged at repeat 3 KKTK), and a C-terminal β-sandwich Knob binding three CAR D1 domains (*K*_d ≈ 1–15 nM); opposing actomyosin CAR drift vs. immobile integrin pull mechanically sheds fibers at the cell surface.',
        from: [
          { nodeId: 'adv-penton-real', label: 'Penton Base Socket', cargo: 'FNPVYP tail anchor' },
          { nodeId: 'real-adenovirus', label: 'Incoming Ad5 Virion', cargo: '12-direction search' }
        ],
        to: [
          { nodeId: 'cell-junction', label: 'Tight-Junction CAR', cargo: 'High-affinity D1 lock' },
          { nodeId: 'real-adv-entry', label: 'Two-Step Entry Complex', cargo: 'Shaft flexion & shedding' }
        ]
      },
      es: {
        subtitle: 'Doce antenas de abordaje hacia las uniones celulares',
        simple:
          'Sobresaliendo 30 nanómetros en cada esquina como brazos del Inspector Gadget, doce antenas con botón se cuelan entre células respiratorias para enganchar cerraduras CAR ocultas.',
        story:
          'El epitelio respiratorio esconde sus cerraduras CAR en las [[uniones estrechas intercelulares|cell-junction]], lejos de virus rechonchos. Por eso el [[adenovirus|real-adenovirus]] tiende doce [[antenas de Fibra|adv-fiber-real]] desde sus [[bases de Pentón|adv-penton-real]] cual brazos del Inspector Gadget, soltándolas luego como etapas de un cohete Apolo para iniciar el desempaquetado.',
        blueprint: {
          role: 'Arpeo primario de largo alcance para CAR y palanca descartable de apertura',
          arrivesFrom: 'Homotrimeriza en el citosol e inserta colas N-terminales FNPVYP en la [[base de Pentón|adv-penton-real]]',
          inside: '12 homotrímeros del [[polipéptido IV|adv-fiber-real]] (eje en triple espiral β de ~30 nm + botón C-terminal)',
          deliversTo: 'Engancha [[CAR en uniones celulares|cell-junction]] en la [[entrada|real-adv-entry]], se dobla y se desprende en superficie',
          loop: 'Fibras solubles excedentes secretadas por células infectadas abren las uniones vecinas para facilitar la huida viral'
        },
        scientific:
          'Doce homotrímeros del polipéptido IV (3 × 581 aa en Ad5, ~186 kDa; estructura cristalográfica distal PDB 1QIU). Consta de cola N-terminal de anclaje al pentón, eje de 22 repeticiones en triple espiral β (~30–37 nm, articulado en la bisagra KKTK de la 3.ª repetición) y botón C-terminal en sándwich β que une tres dominios D1 de CAR (*K*_d ≈ 1–15 nM); las fuerzas opuestas actomiosina/integrina provocan su desprendimiento mecánico.',
        from: [
          { nodeId: 'adv-penton-real', label: 'Zócalo de base de Pentón', cargo: 'Anclaje FNPVYP' },
          { nodeId: 'real-adenovirus', label: 'Virión Ad5 entrante', cargo: 'Exploración en 12 ejes' }
        ],
        to: [
          { nodeId: 'cell-junction', label: 'Receptor CAR epitelial', cargo: 'Unión nanomolar D1' },
          { nodeId: 'real-adv-entry', label: 'Complejo de entrada', cargo: 'Flexión y pérdida del eje' }
        ]
      }
    },

    cement: {
      en: {
        subtitle: 'Hidden Rivets & Endosome-Slashing Switchblades',
        simple:
          'Glueing the 240 crystal blocks together from both sides, minor cement protein VI hides a Wolverine-style switchblade that slashes the cell’s swallowing bubble wide open!',
        story:
          'Outer protein IX clasps and inner staples rivet 240 [[Hexon blocks|adv-hexon-real]] tight—until the Trojan horse gets gulped into an acidifying [[clathrin vesicle|vesicle]]. The moment [[Penton corners|adv-penton-real]] pop off, ~360 copies of hidden protein VI snikt out like Wolverine claws, shredding the endosome seconds before acid [[lysosomes|lysosome]] can melt the heist crew!',
        blueprint: {
          role: 'Dual-sided icosahedral lattice mortar and membrane-lytic endosomal escape weapon',
          arrivesFrom: 'Co-assembles on inner/outer [[Hexon|adv-hexon-real]] surfaces and is armed via AVP protease cleavage',
          inside: '240 outer IX triskelions + inner IIIa (60) and VIII (120) staples + ~360 amphipathic lytic protein VI copies',
          deliversTo: 'Lyses early [[endocytic vesicles|vesicle]] via protein VI N-terminal α-helices to release capsid into [[cytosol|cytosol]]',
          loop: 'The 11-aa C-terminal peptide cleaved off pre-VI acts as the cofactor sliding AVP protease along viral DNA'
        },
        scientific:
          'Four minor capsid cement polypeptides resolved at 3.2 Å cryo-EM (PDB 6B1T): outer polypeptide IX (240 copies, 14.3 kDa, 4 coiled-coil triskelions per facet stabilizing Hexon groups-of-nine); inner IIIa (60 copies, 63 kDa, vertex brace) and VIII (120 copies, 15.4 kDa, facet clamp); and internal Hexon-cavity-housed polypeptide VI (~360 copies, 22 kDa mature), whose N-terminal 33-aa amphipathic α-helix fragments endosomal bilayers upon vertex shedding.',
        from: [
          { nodeId: 'adv-hexon-real', label: 'Hexon Inner Cavities', cargo: 'Sequestered protein VI' },
          { nodeId: 'real-adv-vertex', label: 'Shedding Penton Vertex', cargo: 'Uncapping release cue' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Acidifying Early Endosome', cargo: 'Amphipathic membrane lysis' },
          { nodeId: 'cytosol', label: 'Host Cytosol', cargo: 'Escaped Hexon capsid' }
        ]
      },
      es: {
        subtitle: 'Remaches ocultos y navajas rompe-endosomas',
        simple:
          'Además de soldar los 240 bloques del cristal, la proteína cemento VI esconde garras al estilo Wolverine que desgarran desde dentro la burbuja celular para escapar a tiempo.',
        story:
          'Grapas externas IX e internas remachan los 240 [[bloques de Hexón|adv-hexon-real]] hasta que el cristal cae en una [[vesícula de clatrina|vesicle]]. Apenas saltan las [[esquinas de Pentón|adv-penton-real]], unas 360 copias de proteína VI desenvainan cuchillas como garras de Wolverine y desgarran el endosoma segundos antes de llegar a los [[lisosomas|lysosome]].',
        blueprint: {
          role: 'Mortero estructural en ambas caras de la cápside y arma lítica de escape endosómico',
          arrivesFrom: 'Coensamblado sobre [[Hexones|adv-hexon-real]] y activado proteolíticamente por la enzima viral AVP',
          inside: '240 copias externas de IX + grapas internas IIIa (60) y VIII (120) + ~360 copias líticas de proteína VI',
          deliversTo: 'Perfora la membrana de [[vesículas endocíticas|vesicle]] liberando la cápside hacia el [[citosol|cytosol]]',
          loop: 'El péptido C-terminal de 11 aa escindido de pVI actúa como cofactor que activa a la proteasa AVP sobre el ADN'
        },
        scientific:
          'Cuatro proteínas cemento menores resueltas a 3.2 Å por crio-EM (PDB 6B1T): polipéptido externo IX (240 copias, 14.3 kDa, 4 trisqueles por faceta sobre grupos de nueve hexones); grapas internas IIIa (60 copias, 63 kDa) y VIII (120 copias, 15.4 kDa); y polipéptido interno VI (~360 copias, 22 kDa maduro alojado bajo la cavidad interna de Hexón), cuya hélice α anfipática N-terminal (33 aa) fragmenta bicapas endosómicas.',
        from: [
          { nodeId: 'adv-hexon-real', label: 'Cavidad interna del Hexón', cargo: 'Proteína VI oculta' },
          { nodeId: 'real-adv-vertex', label: 'Vértice desprendido', cargo: 'Apertura de salida' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Endosoma temprano ácido', cargo: 'Lisis por hélice anfipática' },
          { nodeId: 'cytosol', label: 'Citosol celular', cargo: 'Cápside liberada' }
        ]
      }
    },

    dna: {
      en: {
        subtitle: 'Thirty-Six Thousand Letters of Nuclear Counterfeit',
        simple:
          'Like a self-starting counterfeit press, this straight 36,000-letter DNA strand carries a starter protein glued to each tip so it prints tens of thousands of copies inside the nucleus.',
        story:
          'Sledding down [[microtubules|microtubule]] inside hexon armor, this 36,000-base-pair [[linear DNA|dna]] waits until cellular motors pry the shell open right at a [[nuclear pore|nuclear-pore]]. Slipping into the [[nucleus|real-nucleus]], its E1A genes hotwire cell division like Hackers while Terminal Proteins glued on both 5′ ends prime non-stop viral DNA printing!',
        blueprint: {
          role: 'Linear double-stranded viral genome with protein-primed replication origins',
          arrivesFrom: 'Packaged via left-end A-repeat packaging signals into preformed nuclear capsids',
          inside: '35,938 bp linear [[dsDNA|dna]] (~35–40 genes) flanked by 103 bp ITRs covalently 5′-linked to Terminal Protein',
          deliversTo: 'Imports through [[nuclear pore|nuclear-pore]] to hijack host [[RNA Pol II|pol-ii]] and drive viral replication centers',
          loop: 'E1A/E1B early transcripts force quiescent airway cells into S-phase to flood the nucleus with nucleotides'
        },
        scientific:
          'Linear 35,938 bp dsDNA duplex (HAdV-C5, 55.2% GC) containing 103 bp inverted terminal repeats (ITRs) whose 5′-dCMP termini are esterified to Ser580 of 55 kDa Terminal Protein (TP). Transcribed in temporal waves (immediate-early E1A, early E1B/E2/E3/E4, major late promoter MLP L1–L5) by host RNA Pol II (plus Pol III for VA RNAs that block PKR), and replicated via viral E2B DNA pol + pTP strand displacement.',
        from: [
          { nodeId: 'real-adv-core', label: 'Disassembling Adenosome Core', cargo: 'TP-capped 36 kbp dsDNA' },
          { nodeId: 'nuclear-pore', label: 'Nuclear Pore Complex', cargo: 'Importin/histone H1 entry' }
        ],
        to: [
          { nodeId: 'pol-ii', label: 'Host RNA Polymerase II', cargo: 'E1A & MLP transcription' },
          { nodeId: 'real-nucleus', label: 'Nuclear Replication Factory', cargo: 'pTP-primed DNA synthesis' }
        ]
      },
      es: {
        subtitle: 'Treinta y seis mil letras de falsificación nuclear',
        simple:
          'Como una imprenta pirata con arranque propio, esta hebra recta de ADN de 36,000 letras lleva una proteína cebadora en cada punta para copiarse miles de veces en el núcleo.',
        story:
          'Deslizándose por [[microtúbulos|microtubule]] en su trineo de hexones, este [[ADN lineal|dna]] aguarda a que motores celulares abran el casco frente a un [[poro nuclear|nuclear-pore]]. Al entrar al [[núcleo|real-nucleus]], sus genes E1A puentean el ciclo celular como hackers de película mientras sus Proteínas Terminales 5′ disparan copias en serie.',
        blueprint: {
          role: 'Genoma lineal de ADNbc con extremos cebados por Proteína Terminal',
          arrivesFrom: 'Empaquetado mediante secuencias señal izquierdas dentro de cápsides ensambladas en el núcleo',
          inside: '35,938 pb de [[ADNbc|dna]] (~35–40 genes) con repeticiones ITR de 103 pb unidas en 5′ a Proteína Terminal (TP)',
          deliversTo: 'Cruza el [[poro nuclear|nuclear-pore]] para secuestrar la [[ARN Pol II|pol-ii]] y fundar fábricas de replicación',
          loop: 'Los transcritos tempranos E1A/E1B fuerzan a la célula epitelial en reposo a fabricar desoxinucleótidos sin freno'
        },
        scientific:
          'Dúplex lineal de ADNbc de 35,938 pb (HAdV-C5, 55.2% GC) flanqueado por repeticiones terminales invertidas (ITR, 103 pb) esterificadas en 5′-dCMP a Ser580 de la Proteína Terminal (TP, 55 kDa). Transcrito por la ARN Pol II celular (unidades E1A, E1B–E4 y promotor tardío mayor MLP L1–L5) y Pol III (ARN VA inhibidores de PKR), replicándose por desplazamiento de hebra mediante ADN pol viral E2B y pTP.',
        from: [
          { nodeId: 'real-adv-core', label: 'Núcleo adenosómico', cargo: 'ADNbc de 36 kpb con TP' },
          { nodeId: 'nuclear-pore', label: 'Complejo de poro nuclear', cargo: 'Importación nuclear' }
        ],
        to: [
          { nodeId: 'pol-ii', label: 'ARN polimerasa II', cargo: 'Transcripción E1A y MLP' },
          { nodeId: 'real-nucleus', label: 'Fábrica nuclear viral', cargo: 'Replicación cebada por pTP' }
        ]
      }
    },

    core: {
      en: {
        subtitle: 'Counterfeit Chromatin Spools & the DNA-Sliding Protease',
        simple:
          'Wrapped around 800 positively charged viral spools like Mystique impersonating human chromatin, the core also packs a protease ninja that slides down DNA snipping the shell into combat mode.',
        story:
          'Stuffing 12 micrometers of negative [[DNA|dna]] into a tiny gem would blow it apart without ~800 protein VII spools coiling a Mystique-style chromatin disguise inside the [[adenosome core|real-adv-core]]. Skating along that DNA like a rail-grinding ninja, protease AVP snips precursor bricks from inside—arming the [[Trojan horse|real-adenovirus]] for its run to the [[nuclear pore|nuclear-pore]].',
        blueprint: {
          role: 'Genome-condensing pseudo-histone spools and DNA-guided maturation protease',
          arrivesFrom: 'Co-packaged as pre-VII, pre-V, pre-µ, and inactive AVP inside nascent nuclear virions',
          inside: '~800 copies of histone-like VII + ~157 bridging protein V + 2 TP + ~50 AVP cysteine proteases',
          deliversTo: 'Neutralizes [[dsDNA|dna]] repulsion inside [[hexon shell|adv-hexon-real]] and escorts DNA across [[nuclear pore|nuclear-pore]]',
          loop: 'Protein VII stays bound inside the host nucleus early on to shield viral DNA from cGAS/DDR alarm sensors'
        },
        scientific:
          'Nucleoprotein core (~30 MDa protein + ~23.7 MDa DNA): ~800 copies of arginine-rich polypeptide VII (19.4 kDa mature, cleaved from pVII) wrap viral dsDNA into ~200 "adenosomes" (~90–150 bp each), tethered to the inner capsid via ~157 copies of polypeptide V (41.6 kDa) and condensed by µ (19 aa). Adenovirus Protease AVP (23 kDa; PDB 1AVP), activated 10⁶-fold by pVIc peptide + 1D sliding on dsDNA, cleaves ~2,000 sites/virion to render particles infectious.',
        from: [
          { nodeId: 'dna', label: '36 kbp Viral Duplex', cargo: '1D sliding track for AVP' },
          { nodeId: 'adv-hexon-real', label: 'Inner Capsid Wall', cargo: 'Protein V bridge' }
        ],
        to: [
          { nodeId: 'real-adv-core', label: '200 Adenosome Beads', cargo: 'Charge neutralization' },
          { nodeId: 'nuclear-pore', label: 'Nuclear Import Channel', cargo: 'NLS-guided escort' }
        ]
      },
      es: {
        subtitle: 'Carretes de cromatina falsa y la proteasa corrediza',
        simple:
          'Enrollado en 800 carretes virales que imitan cromatina humana al estilo Mystique, el núcleo incluye una proteasa ninja que patina por el ADN dejando el cristal listo para el combate.',
        story:
          'Embutir 12 micrómetros de [[ADN|dna]] negativo reventaría la gema sin 800 copias de proteína VII disfrazándolo de cromatina estilo Mystique en el [[núcleo adenosómico|real-adv-core]]. Patinando por esa hebra como un ninja sobre rieles, la proteasa AVP recorta piezas internas y deja armado al [[caballo de Troya|real-adenovirus]] rumbo al [[poro nuclear|nuclear-pore]].',
        blueprint: {
          role: 'Carretes tipo histona condensadores del genoma y proteasa madurativa guiada por ADN',
          arrivesFrom: 'Coempaquetados como precursores pVII, pV, pre-µ y proteasa AVP en viriones nucleares nacientes',
          inside: '~800 copias de proteína VII + ~157 de proteína puente V + 2 TP + ~50 proteasas de cisteína AVP',
          deliversTo: 'Condensa el [[ADNbc|dna]] bajo el [[casco de Hexón|adv-hexon-real]] y guía su cruce por el [[poro nuclear|nuclear-pore]]',
          loop: 'La proteína VII sigue envolviendo el ADN recién entrado al núcleo para ocultarlo de las alarmas inmunes celulares'
        },
        scientific:
          'Núcleo nucleoproteico (~30 MDa de proteína + ~23.7 MDa de ADN): ~800 copias del polipéptido básico VII (19.4 kDa maduro) condensan el ADNbc en ~200 «adenosomas», enlazados a la cápside por ~157 copias de proteína V (41.6 kDa) y el péptido µ (19 aa). La proteasa adenoviral AVP (23 kDa; PDB 1AVP), activada un millón de veces por el péptido pVIc al deslizarse unidimensionalmente sobre el ADN, ejecuta ~2,000 cortes por virión.',
        from: [
          { nodeId: 'dna', label: 'Dúplex viral de 36 kpb', cargo: 'Pista 1D para AVP' },
          { nodeId: 'adv-hexon-real', label: 'Pared interna de Hexón', cargo: 'Puente de proteína V' }
        ],
        to: [
          { nodeId: 'real-adv-core', label: '200 cuentas adenosómicas', cargo: 'Neutralización de cargas' },
          { nodeId: 'nuclear-pore', label: 'Canal del poro nuclear', cargo: 'Escolta con señales NLS' }
        ]
      }
    },

    car: {
      en: {
        subtitle: 'The Two-Lock Handshake on the Airway Surface',
        simple:
          'Like unwitting security guards holding the vault door open, human CAR anchors the virus’s long antenna while αvβ5 integrins ring the endocytosis doorbell that pulls the invader inside!',
        story:
          'Built to zip airway cells shut, [[tight-junction CAR|cell-junction]] gets hooked by the [[Fiber knob|adv-fiber-real]] and dragged sideways by actin currents. That tug bows the crystal onto αvβ5 integrins, whose five-fingered handshake with [[Penton RGD loops|adv-penton-real]] rings the swallow-me doorbell—pulling in the [[Trojan horse|real-adenovirus]] while popping its first grenade pin!',
        blueprint: {
          role: 'Dual host receptor system coupling high-affinity attachment to mechanical uncoating and uptake',
          arrivesFrom: 'Endogenous [[tight-junction CAR|cell-junction]] and apical/basolateral αvβ3/αvβ5 integrins on [[host membrane|plasma-membrane]]',
          inside: 'Transmembrane Ig-superfamily CAR D1/D2 homodimers + heterodimeric αvβ5 integrin RGD-receptors',
          deliversTo: 'Converts [[Fiber|adv-fiber-real]] + [[Penton|adv-penton-real]] binding into mechanical vertex stress and [[clathrin vesicle|vesicle]] entry',
          loop: 'Later secreted viral fibers compete for junctional CAR, unzipping the epithelium so progeny virions escape into airways'
        },
        scientific:
          'Co-receptor complex on polarized respiratory epithelium: Coxsackievirus and Adenovirus Receptor (CAR, 46 kDa transmembrane IgSF protein; distal D1 domain binds Fiber knob with *K*_d ≈ 1–15 nM, disrupting CAR–CAR homodimers of *K*_d ≈ 16 µM) paired with αvβ3/αvβ5 integrins binding Penton RGD loops (*K*_d ≈ 50–100 nM). Retrograde F-actin flow (~80 nm/s) coupled to CAR exerts ~10–20 pN shear against immobilized integrins to initiate vertex release.',
        from: [
          { nodeId: 'adv-fiber-real', label: 'Fiber C-Terminal Knob', cargo: 'Nanomolar CAR D1 grip' },
          { nodeId: 'adv-penton-real', label: 'Penton RGD Loops', cargo: 'Pentavalent integrin cluster' }
        ],
        to: [
          { nodeId: 'cell-junction', label: 'Epithelial Tight Junction', cargo: 'Unzipped CAR homodimers' },
          { nodeId: 'vesicle', label: 'Clathrin Endocytic Pit', cargo: 'PI3K/Rac1 uptake signal' }
        ]
      },
      es: {
        subtitle: 'El apretón de manos de doble cerradura',
        simple:
          'Como guardias engañados que abren la bóveda al ladrón, el receptor humano CAR amarra la antena larga mientras las integrinas tocan el timbre que mete al invasor en casa.',
        story:
          'Pensado para sellar células vecinas, el [[CAR de las uniones estrechas|cell-junction]] cae pescado por el [[botón de la Fibra|adv-fiber-real]] y arrastrado de lado. Ese tirón inclina el cristal hacia las integrinas αvβ5, cuyo agarre a los [[bucles RGD del Pentón|adv-penton-real]] toca el timbre endocítico: la célula engulle al [[caballo de Troya|real-adenovirus]] y le quita el primer seguro.',
        blueprint: {
          role: 'Sistema receptor dual del huésped que acopla fijación, tracción mecánica e internalización',
          arrivesFrom: '[[CAR de uniones estrechas|cell-junction]] e integrinas αvβ3/αvβ5 residentes en la [[membrana plasmática|plasma-membrane]]',
          inside: 'Homodímeros transmembrana tipo inmunoglobulina CAR D1/D2 + heterodímeros de integrina αvβ5',
          deliversTo: 'Traduce la unión de [[Fibra|adv-fiber-real]] y [[Pentón|adv-penton-real]] en cizallamiento del vértice y entrada en [[vesícula|vesicle]]',
          loop: 'Fibras virales libres secretadas más tarde compiten por CAR y abren el epitelio para liberar nuevos viriones al aire'
        },
        scientific:
          'Complejo correceptor en epitelio respiratorio polarizado: receptor CAR (46 kDa, superfamilia Ig; el dominio D1 une el botón de Fibra con *K*_d ≈ 1–15 nM desplazando homodímeros intercelulares CAR–CAR de *K*_d ≈ 16 µM) junto a integrinas αvβ3/αvβ5 que fijan los bucles RGD del Pentón (*K*_d ≈ 50–100 nM). El flujo retrógrado cortical de actina F (~80 nm/s) sobre CAR genera ~10–20 pN de corte frente a integrinas fijas, cebando el desencapsidado.',
        from: [
          { nodeId: 'adv-fiber-real', label: 'Botón C-terminal de Fibra', cargo: 'Agarre nanomolar a CAR' },
          { nodeId: 'adv-penton-real', label: 'Bucles RGD de Pentón', cargo: 'Agrupamiento de integrinas' }
        ],
        to: [
          { nodeId: 'cell-junction', label: 'Unión estrecha epitelial', cargo: 'Apertura de CAR–CAR' },
          { nodeId: 'vesicle', label: 'Fosa endocítica de clatrina', cargo: 'Señal PI3K/Rac1' }
        ]
      }
    },

    host: {
      en: {
        subtitle: 'The Epithelial Border Wall & Clathrin Bubble Trap',
        simple:
          'Thinking it trapped an intruder for acid disposal, the airway cell’s fatty membrane wraps the crystal in a bubble—only to suffer an Alien-style chestburster breakout five minutes later!',
        story:
          'Guarding [[human airway cells|real-cell]], this lipid border falls for the integrin trick at the [[entry zone|real-adv-entry]] and cages the crystal inside a [[vesicle|vesicle]] bound for acid [[lysosomes|lysosome]]. Big mistake: within five minutes, protein VI blades pull a Ridley Scott Alien breakout—shredding the bubble so the capsid sprints down [[microtubules|microtubule]]!',
        blueprint: {
          role: 'Host epithelial plasma membrane invaginating into early endosomal entry vesicles',
          arrivesFrom: 'Polarized mucosal surface of [[human respiratory epithelial cell|real-cell]]',
          inside: 'Cholesterol-rich [[phospholipid|phospholipid]] bilayer backed by cortical [[actin filaments|actin-filament]] and clathrin triskelions',
          deliversTo: 'Pinches off via dynamin into early [[endocytic vesicles|vesicle]] (pH ~6.0) where protein VI ruptures the bilayer',
          loop: 'Host membrane-repair sphingomyelinases rushed to tiny VI punctures inadvertently boost viral endosomal escape'
        },
        scientific:
          'Polarized respiratory epithelial plasma membrane (~5 nm acyl core bilayer enriched in phosphatidylcholine, sphingomyelin, and cholesterol). Integrin clustering recruits AP-2 and clathrin heavy/light chains into ~120 nm coated pits scissioned by dynamin-2 GTPase; V-ATPase acidification to pH ~6.0 within 5–10 min triggers vertex loss and protein VI-mediated positive membrane curvature fragmentation prior to Rab7+ late-endosome/lysosome fusion.',
        from: [
          { nodeId: 'real-adv-entry', label: 'CAR & Integrin Cluster', cargo: 'Endocytic invagination cue' },
          { nodeId: 'phospholipid', label: 'Epithelial Lipid Bilayer', cargo: '120 nm membrane bud' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Early Endosome Bubble', cargo: 'V-ATPase pH ~6.0 drop' },
          { nodeId: 'microtubule', label: 'Cytosolic Microtubule Track', cargo: 'Escaped capsid handoff' }
        ]
      },
      es: {
        subtitle: 'La frontera epitelial y la trampa de la burbuja de clatrina',
        simple:
          'Creyendo atrapar a un intruso rumbo al ácido, la membrana respiratoria envuelve el cristal en una burbuja, pero sufre una fuga al estilo Alien apenas cinco minutos después.',
        story:
          'Custodiando las [[células epiteliales humanas|real-cell]], esta frontera cae en la trampa de la [[zona de entrada|real-adv-entry]] y encierra el cristal en una [[vesícula de clatrina|vesicle]] rumbo a los [[lisosomas|lysosome]]. Error fatal: en cinco minutos las cuchillas VI protagonizan una fuga digna de Alien y lanzan la cápside por los [[microtúbulos|microtubule]].',
        blueprint: {
          role: 'Membrana plasmática epitelial que se invagina formando vesículas endocíticas tempranas',
          arrivesFrom: 'Superficie mucosa polarizada de la [[célula epitelial respiratoria|real-cell]]',
          inside: 'Bicapa de [[fosfolípidos|phospholipid]] y colesterol apoyada sobre [[filamentos de actina|actin-filament]] y jaulas de clatrina',
          deliversTo: 'Se estrangula mediante dinamina en [[vesículas tempranas|vesicle]] (pH ~6.0) donde la proteína VI rompe la membrana',
          loop: 'Las enzimas celulares que acuden a reparar los primeros poros de proteína VI facilitan aún más la rotura del endosoma'
        },
        scientific:
          'Membrana plasmática epitelial respiratoria (~5 nm de núcleo hidrofóbico rico en fosfatidilcolina, esfingomielina y colesterol). El agrupamiento de integrinas recluta adaptadores AP-2 y trisqueles de clatrina en fosas recubiertas de ~120 nm escindidas por la GTPasa dinamina-2; la acidificación por V-ATPasa a pH ~6.0 en 5–10 min precipita la rotura endosómica por proteína VI antes de la fusión con lisosomas Rab7+.',
        from: [
          { nodeId: 'real-adv-entry', label: 'Complejo CAR–integrina', cargo: 'Señal de invaginación' },
          { nodeId: 'phospholipid', label: 'Bicapa lipídica epitelial', cargo: 'Yema de 120 nm' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Endosoma temprano', cargo: 'Caída a pH ~6.0' },
          { nodeId: 'microtubule', label: 'Pista de microtúbulos', cargo: 'Entrega al citosol' }
        ]
      }
    }
  },

  'tmv_realistic.html': {
    coat: {
      en: {
        subtitle: 'Two Thousand One Hundred and Thirty Interlocking Armor Tiles',
        simple:
          'Over two thousand identical LEGO-like wedges spiral into an armor rod tougher than dried leather—until low calcium inside a wounded leaf pops the tip loose for ribosomes to peel.',
        story:
          'Locked into ~130 [[spiral turns|tmv-turn-real]] around one [[RNA|rna]] spring, 2,130 identical [[coat tiles|tmv-sub-real]] forge a Dune-tough cylinder that survives decades in dead leaves. Yet the instant a bug bite drops it into low-calcium sap, the top bricks pop loose so a host [[ribosome|ribosome]] strips the whole suit off brick by brick!',
        blueprint: {
          role: 'Self-assembling helical capsid armor and reversible RNA clamp',
          arrivesFrom: 'Translated in massive copy numbers from subgenomic coat mRNA on [[plant 80S ribosomes|ribosome]]',
          inside: '2,130 identical 17.5 kDa [[four-α-helix subunits|tmv-sub-real]] in a 16⅓-per-turn [[helix|real-tmv-helix]] (2.3 nm pitch)',
          deliversTo: 'Protects [[(+)ssRNA|rna]] outside the plant and yields sequentially to co-translational [[ribosome|ribosome]] stripping',
          loop: 'Free coat subunits re-aggregate into [[20S discs|real-tmv-assembly]] late in infection to armor progeny rods'
        },
        scientific:
          '2,130 identical Coat Protein monomers (158 aa, 17.5 kDa; X-ray fiber diffraction/cryo-EM PDB 2TMV / 4UDV) forming a right-handed 18.0 × 300.0 nm cylinder (16⅓ subunits/turn, 2.3 nm pitch, 49 subunits/3 turns). Each antiparallel four-α-helix bundle (LS, RS, LR, RR) buries 3 ribonucleotides at r = 4.0 nm via Arg90/Arg92/Arg112/Arg113 ion pairs under a 5.0 nm outer protein wall.',
        from: [
          { nodeId: 'real-tmv-assembly', label: '20S Lock-Washer Discs', cargo: 'Helical polymerization' },
          { nodeId: 'tmv-sub-real', label: '17.5 kDa Coat Monomer', cargo: '4-helix wedge brick' }
        ],
        to: [
          { nodeId: 'rna', label: 'Buried (+)ssRNA Groove', cargo: 'RNase-proof shield' },
          { nodeId: 'ribosome', label: 'Plant 80S Striposome', cargo: '5′-to-3′ uncoating' }
        ]
      },
      es: {
        subtitle: 'Dos mil ciento treinta losetas de blindaje en espiral',
        simple:
          'Más de dos mil cuñas idénticas estilo LEGO forman un bastón blindado capaz de resistir décadas al sol, hasta que la falta de calcio en una hoja herida destapa su punta.',
        story:
          'Trabadísimas en ~130 [[vueltas espirales|tmv-turn-real]] sobre un muelle de [[ARN|rna]], 2,130 [[losetas idénticas|tmv-sub-real]] forjan un cilindro digno de Dune que aguanta décadas en hojas muertas. Pero apenas la mordida de un insecto lo tira al citosol sin calcio, saltan las piezas superiores y un [[ribosoma|ribosome]] desmonta todo el traje.',
        blueprint: {
          role: 'Blindaje helicoidal autoensamblable y pinza reversible de ARN',
          arrivesFrom: 'Traducida masivamente desde el ARNm subgenómico tardío en [[ribosomas 80S vegetales|ribosome]]',
          inside: '2,130 [[monómeros de cuatro hélices α|tmv-sub-real]] (17.5 kDa) en [[hélice|real-tmv-helix]] de 16⅓ piezas/vuelta (paso 2.3 nm)',
          deliversTo: 'Resguarda el [[ARNmc(+)|rna]] fuera de la planta y lo libera secuencialmente ante el [[ribosoma|ribosome]]',
          loop: 'Las subunidades nuevas forman [[discos 20S|real-tmv-assembly]] al final del ciclo para acorazar la progenie'
        },
        scientific:
          '2,130 monómeros idénticos de Proteína de Cubierta (158 aa, 17.5 kDa; difracción de fibras/crio-EM PDB 2TMV / 4UDV) en un cilindro dextrógiro de 18.0 × 300.0 nm (16⅓ subunidades/vuelta, paso axial 2.3 nm, 49 subunidades/3 vueltas). Cada haz antiparalelo de cuatro hélices α (LS, RS, LR, RR) aloja 3 ribonucleótidos a r = 4.0 nm mediante puentes salinos con Arg90/92/112/113 bajo 5.0 nm de pared proteica.',
        from: [
          { nodeId: 'real-tmv-assembly', label: 'Discos arandela 20S', cargo: 'Polimerización helicoidal' },
          { nodeId: 'tmv-sub-real', label: 'Monómero de 17.5 kDa', cargo: 'Ladrillo de 4 hélices' }
        ],
        to: [
          { nodeId: 'rna', label: 'Surco interno de ARN', cargo: 'Escudo antirribonucleasa' },
          { nodeId: 'ribosome', label: 'Ribosoma 80S vegetal', cargo: 'Desnudamiento 5′→3′' }
        ]
      }
    },

    disc: {
      en: {
        subtitle: 'The Self-Threading Split Lock-Washer',
        simple:
          'Like Iron Man’s automated suit rings, 34 coat bricks pre-assemble into a flat two-layer washer that spots a secret password loop on viral RNA and snaps into a spiral lock-washer!',
        story:
          'How do loose [[coat bricks|tmv-sub-real]] pick viral [[RNA|rna]] out of thousands of plant scrolls without packing civilian mail? Thirty-four bricks form a Stark-tech [[20S disc|real-tmv-assembly]] tuned to one secret hairpin near the 3′ tail—snapping on contact into a spiral lock-washer that reels an RNA loop up the [[4 nm central chimney|real-tmv-channel]]!',
        blueprint: {
          role: 'Selective RNA-nucleating oligomer and rapid rod-elongation module',
          arrivesFrom: 'Equilibrates from newly synthesized [[coat monomers|tmv-sub-real]] at cytosolic pH 7.0 and low ionic strength',
          inside: 'Bilayer cylindrical 20S aggregate of 34 subunits switching on the OAS hairpin into a 2-turn proto-helix',
          deliversTo: 'Threads a traveling loop of [[viral RNA|rna]] up the [[4 nm channel|real-tmv-channel]] to build the [[helical rod|real-tmv]]',
          loop: 'Quantized 34-subunit disc additions assemble an entire 300 nm rod in minutes instead of hours of monomer-by-monomer growth'
        },
        scientific:
          'Two-layer 20S cylindrical aggregate (2 × 17 subunits, ~18 nm OD, ~595 kDa; crystal structure PDB 1EI7) in dynamic equilibrium with "A-protein" oligomers. High-affinity binding of the disordered inner loops to the G-rich Origin-of-Assembly (OAS) stem-loop (nt 5,444–5,518, featuring AAGAAGUCG at the apex) triggers axial dislocation into a 16⅓-subunit/turn proto-helical lock-washer, elongating 5′-ward ~10× faster than toward the 3′ tail.',
        from: [
          { nodeId: 'tmv-sub-real', label: 'Coat Protein Pool', cargo: '34-subunit oligomerization' },
          { nodeId: 'rna', label: 'OAS Hairpin Loop', cargo: 'AAGAAGUCG nucleation' }
        ],
        to: [
          { nodeId: 'real-tmv-channel', label: 'Central 4 nm Lumen', cargo: 'Traveling 5′ RNA loop' },
          { nodeId: 'real-tmv-helix', label: 'Growing Helical Rod', cargo: 'Rapid 2-turn steps' }
        ]
      },
      es: {
        subtitle: 'La arandela de presión que enhebra su propio ARN',
        simple:
          'Como los anillos automáticos del traje de Iron Man, 34 ladrillos forman un disco doble que detecta una contraseña secreta del ARN viral y salta a espiral para izarlo.',
        story:
          '¿Cómo eligen los [[ladrillos sueltos|tmv-sub-real]] el [[ARN viral|rna]] entre miles de mensajes vegetales sin equivocarse de paquete? Treinta y cuatro piezas arman un [[disco 20S|real-tmv-assembly]] digno de Tony Stark que solo reconoce una horquilla secreta 3′, partiéndose en arandela espiral para izar el ARN por la [[chimenea central de 4 nm|real-tmv-channel]].',
        blueprint: {
          role: 'Oligómero selectivo de nucleación en OAS y módulo de elongación rápida',
          arrivesFrom: 'Autoasociación de [[monómeros de cubierta|tmv-sub-real]] a pH citosólico ~7.0',
          inside: 'Disco cilíndrico bicapa 20S (34 subunidades) que salta a arandela protohelicoidal al fijar la horquilla OAS',
          deliversTo: 'Enhebra un lazo viajero de [[ARN viral|rna]] por el [[canal de 4 nm|real-tmv-channel]] para levantar el [[bastón|real-tmv]]',
          loop: 'Sumar discos enteros de 34 piezas completa un bastón de 300 nm en pocos minutos en vez de horas'
        },
        scientific:
          'Agregado cilíndrico bicapa 20S (2 × 17 subunidades, ~18 nm DE, ~595 kDa; estructura cristalográfica PDB 1EI7). El reconocimiento de alta afinidad entre sus bucles internos desordenados y la horquilla del Origen de Ensamblaje (OAS, nt 5,444–5,518, motivo apical AAGAAGUCG) dispara el dislocamiento axial hacia una arandela protohelicoidal de 16⅓ subunidades/vuelta, elongando hacia el extremo 5′ diez veces más rápido que hacia el 3′.',
        from: [
          { nodeId: 'tmv-sub-real', label: 'Reserva de monómeros', cargo: 'Asociación de 34 piezas' },
          { nodeId: 'rna', label: 'Horquilla OAS del ARN', cargo: 'Señal AAGAAGUCG' }
        ],
        to: [
          { nodeId: 'real-tmv-channel', label: 'Lumen central de 4 nm', cargo: 'Lazo viajero de ARN 5′' },
          { nodeId: 'real-tmv-helix', label: 'Bastón en crecimiento', cargo: 'Saltos de dos vueltas' }
        ]
      }
    },

    rna: {
      en: {
        subtitle: 'The Coiled Genetic Spring & Tunnel Traveller',
        simple:
          'Wearing fake ID badges at both ends, this single 6,395-letter RNA thread works as the virus’s ruler, ribosome script, and Shawshank fugitive sneaking through wall tunnels next door!',
        story:
          'Coiled inside the [[helical coat|real-tmv-helix]], this 6,395-letter [[RNA spring|rna]] flashes forged passports—a 5′ cellular cap and a 3′ tRNA tail disguise! Once low calcium pops the lid, its 5′ cap lures a plant [[ribosome|ribosome]] into printing replicases while naked sister copies slip Shawshank-style through [[plasmodesmata|plasmodesma]] into neighboring cells.',
        blueprint: {
          role: 'Positive-sense single-stranded genome, length template, and cell-to-cell infectious agent',
          arrivesFrom: 'Synthesized via (-)RNA intermediates inside ER-bound viral replication complexes',
          inside: '6,395 nt m⁷GpppG-capped [[(+)ssRNA|rna]] with 4 ORFs, internal OAS hairpin, and 3′ tRNA-like histidine acceptor',
          deliversTo: 'Directs replicase translation on [[80S ribosomes|ribosome]], nucleates [[20S discs|real-tmv-assembly]], or traverses [[plasmodesmata|plasmodesma]]',
          loop: 'Leaky UAG amber stop-codon readthrough (~5–10%) yields both the 126 kDa helicase/methyltransferase and 183 kDa RdRp from one strand'
        },
        scientific:
          '6,395-nucleotide (+)ssRNA genome (PDB 2TMV coiled conformation at r = 4.0 nm, 3 nt/subunit): 5′ m⁷GpppG cap + 68-nt CA-rich Ω translation enhancer leader, 126 kDa methyltransferase/helicase ORF + leaky amber readthrough 183 kDa RdRp ORF, subgenomic mRNAs for 30 kDa Movement Protein (MP30) and 17.5 kDa Coat Protein, internal OAS stem-loop (nt 5,444–5,518), and 3′ aminoacylatable tRNA^His-mimic pseudoknot.',
        from: [
          { nodeId: 'real-tmv-helix', label: 'Uncoating 5′ Helix Tip', cargo: 'Exposed Ω leader cap' },
          { nodeId: 'rough-er', label: 'ER Replication Factory', cargo: 'RdRp progeny synthesis' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Host Plant 80S Ribosome', cargo: '126/183 kDa translation' },
          { nodeId: 'plasmodesma', label: 'Dilated Plasmodesma', cargo: 'MP30–RNA ribonucleoprotein' }
        ]
      },
      es: {
        subtitle: 'El muelle genético y fugitivo de los túneles',
        simple:
          'Con pasaportes falsos en ambas puntas, este hilo de ARN de 6,395 letras actúa a la vez como regla del virus, guion del ribosoma y fugitivo que cruza túneles hacia células vecinas.',
        story:
          'Enrollado bajo la [[cubierta helicoidal|real-tmv-helix]], este [[muelle de ARN|rna]] exhibe credenciales falsas: caperuza 5′ celular y disfraz de ARNt en la cola 3′. Al destaparse el bastón, seduce a un [[ribosoma|ribosome]] para imprimir enzimas copiadoras mientras copias desnudas escapan a lo Sueño de Fuga por los [[plasmodesmos|plasmodesma]] vecinos.',
        blueprint: {
          role: 'Genoma monocatenario positivo, regla estructural y agente infeccioso intercelular',
          arrivesFrom: 'Replicado mediante moldes (-)ARN en fábricas virales asociadas al [[retículo endoplasmático|rough-er]]',
          inside: '[[ARNmc(+)|rna]] de 6,395 nt con caperuza 5′ m⁷GpppG, 4 marcos de lectura, horquilla OAS y extremo 3′ tipo ARNt',
          deliversTo: 'Alimenta [[ribosomas 80S|ribosome]], nuclea [[discos 20S|real-tmv-assembly]] o cruza [[plasmodesmos|plasmodesma]] junto a MP30',
          loop: 'La lectura ocasional (~5–10%) del codón de paro ámbar UAG produce tanto la proteína de 126 kDa como la polimerasa de 183 kDa'
        },
        scientific:
          'Genoma de ARNmc(+) de 6,395 nucleótidos (conformación helicoidal PDB 2TMV a r = 4.0 nm, 3 nt/subunidad): caperuza 5′ m⁷GpppG seguida de la secuencia potenciadora Ω (68 nt), ORF de metiltransferasa/helicasa (126 kDa) y polimerasa RdRp por supresión ámbar (183 kDa), dos ARNm subgenómicos para MP30 (30 kDa) y cubierta (17.5 kDa), horquilla OAS (nt 5,444–5,518) y pseudonudo 3′ mimético de ARNt^His.',
        from: [
          { nodeId: 'real-tmv-helix', label: 'Punta 5′ destapada', cargo: 'Líder Ω expuesto' },
          { nodeId: 'rough-er', label: 'Fábrica viral en el RE', cargo: 'Síntesis por RdRp' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Ribosoma 80S vegetal', cargo: 'Traducción de replicasa' },
          { nodeId: 'plasmodesma', label: 'Plasmodesmo dilatado', cargo: 'Complejo MP30–ARN' }
        ]
      }
    },

    channel: {
      en: {
        subtitle: 'The Four-Nanometer Calcium Tripwire',
        simple:
          'Like Indiana Jones’s idol trap in reverse, calcium ions outside the leaf hold negative charges calm down this watery core—until low-calcium cell sap makes them repel and pop the lid!',
        story:
          'A sealed vault that never opens is a coffin, so [[TMV|real-tmv]] runs an Indiana Jones booby-trap down its 4-nanometer [[water-filled bore|water]]. Outside, calcium pins negative acid rings calm on every [[helical turn|tmv-turn-real]]; plunge into low-calcium [[plant cytosol|cytosol]] and calcium vanishes, charges shove apart, and the 5′ tip springs out for a [[ribosome|ribosome]]!',
        blueprint: {
          role: 'Hollow axial assembly chimney and Ca²⁺/H⁺-sensing electrostatic uncoating switch',
          arrivesFrom: 'Extracellular environment (~mM Ca²⁺, pH ~5.5) transitioning into wounded [[plant cytosol|cytosol]] (~100 nM Ca²⁺, pH 7.5)',
          inside: '4.0 nm [[water-filled lumen|water]] lined by radial carboxylate cages (Glu95, Glu97, Glu106, Asp109) on [[coat subunits|tmv-sub-real]]',
          deliversTo: 'Springs 5′-end [[coat subunits|tmv-sub-real]] loose inside the cell while serving as the RNA-threading chute during [[assembly|real-tmv-assembly]]',
          loop: 'Progeny assembly works in reverse: viral RNA phosphate binding + proton uptake re-neutralize the switch to lock new rods shut'
        },
        scientific:
          'Axial 4.0 nm lumen (r = 0–2.0 nm; PDB 2TMV / 4UDV, 3.3 Å cryo-EM) ringed by clusters of anomalously titrating carboxylates (Glu95, Glu97, Glu106, Asp109 at r ≈ 2.5 nm; Glu50, Asp77 axial pair; pK_a ≈ 7.0–7.5). Loss of bridging Ca²⁺ (*K*_d ≈ 10⁻⁵ M) upon entry into ~100 nM cytosolic free Ca²⁺ at pH 7.5 creates intense coulombic repulsion, selectively uncoating the AU-rich, guanine-free 5′ Ω leader first.',
        from: [
          { nodeId: 'cytosol', label: 'Low-Ca²⁺ Plant Cytosol', cargo: 'Ca²⁺ & H⁺ efflux cue' },
          { nodeId: 'water', label: '4 nm Aqueous Lumen', cargo: 'Ion diffusion path' }
        ],
        to: [
          { nodeId: 'tmv-turn-real', label: '5′-Terminal Helix Turns', cargo: 'Coulombic destabilization' },
          { nodeId: 'ribosome', label: 'Cytosolic 80S Ribosome', cargo: 'Uncapped 5′ RNA leader' }
        ]
      },
      es: {
        subtitle: 'El cable trampa electrostático de cuatro nanómetros',
        simple:
          'Como la trampa del ídolo de Indiana Jones al revés, el calcio exterior mantiene quietas las cargas negativas de este túnel de agua hasta que el citosol sin calcio hace saltar la tapa.',
        story:
          'Una caja fuerte que no abre jamás sería un ataúd, así que el [[VMT|real-tmv]] cablea una trampa digna de Indiana Jones por su conducto de [[agua|water]]. Afuera, el calcio sujeta cargas negativas en cada [[vuelta helicoidal|tmv-turn-real]]; al entrar al [[citosol vegetal|cytosol]] sin calcio, las cargas se repelen y salta la punta 5′ hacia un [[ribosoma|ribosome]].',
        blueprint: {
          role: 'Chimenea axial de ensamblaje e interruptor electrostático de desencapsidado sensible a Ca²⁺/H⁺',
          arrivesFrom: 'Paso desde savia extracelular (Ca²⁺ milimolar, pH ~5.5) al [[citosol herido|cytosol]] (Ca²⁺ ~100 nM, pH 7.5)',
          inside: 'Lumen acuoso de 4.0 nm con [[agua|water]] tapizado por jaulas de carboxilatos (Glu95, Glu97, Glu106, Asp109) en [[monómeros|tmv-sub-real]]',
          deliversTo: 'Afloja los [[monómeros del extremo 5′|tmv-sub-real]] al entrar y sirve después como conducto del ARN durante el [[ensamblaje|real-tmv-assembly]]',
          loop: 'Al armar viriones nuevos ocurre lo inverso: la unión del ARN vuelve a neutralizar el interruptor cerrando el bastón'
        },
        scientific:
          'Lumen cilíndrico axial de 4.0 nm (r = 0–2.0 nm; PDB 2TMV / 4UDV, crio-EM 3.3 Å) tapizado por racimos carboxilato de pK_a elevado (~7.0–7.5: Glu95, Glu97, Glu106 y Asp109 a r ≈ 2.5 nm, más el par axial Glu50–Asp77). La disociación de Ca²⁺ (*K*_d ≈ 10⁻⁵ M) al entrar en el citosol (~100 nM Ca²⁺ libre, pH 7.5) genera repulsión electrostática que abre selectivamente el extremo 5′ Ω carente de guaninas.',
        from: [
          { nodeId: 'cytosol', label: 'Citosol vegetal bajo en Ca²⁺', cargo: 'Salida de Ca²⁺ y H⁺' },
          { nodeId: 'water', label: 'Columna de agua de 4 nm', cargo: 'Difusión iónica' }
        ],
        to: [
          { nodeId: 'tmv-turn-real', label: 'Vueltas del extremo 5′', cargo: 'Repulsión coulombiana' },
          { nodeId: 'ribosome', label: 'Ribosoma 80S vegetal', cargo: 'Exposición del líder 5′' }
        ]
      }
    },

    ribo: {
      en: {
        subtitle: 'The "Striposome" Bulldozer Uncoating & Reading at Once',
        simple:
          'Chugging down the RNA like Pac-Man in a bulldozer, the plant’s own ribosome pries off the remaining virus armor bricks in front while printing the virus’s giant copying machine behind!',
        story:
          'Why pack an uncoating motor when the victim works for free? Once the [[calcium switch|real-tmv-channel]] loosens the top [[coat tiles|tmv-sub-real]], a plant [[80S ribosome|ribosome]] clamps onto [[viral RNA|rna]] like a Pac-Man bulldozer ("striposome")—wedging hundreds of bricks off ahead while extruding viral replicase onto the [[endoplasmic reticulum|rough-er]]!',
        blueprint: {
          role: 'Co-translational virion uncoating motor ("striposome") and viral replicase synthesizer',
          arrivesFrom: 'Host [[80S ribosomal subunits|ribosome]] recruited via eIF4F/HSP101 onto the exposed 5′ Ω leader of [[TMV RNA|rna]]',
          inside: '[[40S|ribo-small]] + [[60S|ribo-large]] plant ribosome translocating 5′→3′ while synthesizing 126 kDa and 183 kDa replicase polypeptides',
          deliversTo: 'Dislodges [[coat monomers|tmv-sub-real]] off the rod and anchors viral replication factories onto [[ER membranes|rough-er]]',
          loop: 'Newly translated replicase soon walks 3′→5′ from the back end to strip the remaining tail of the rod clean'
        },
        scientific:
          'Co-translational disassembly ("striposome" complex): the 68-nt guanine-free 5′ Ω leader binds HSP101/eIF4G to recruit plant 80S ribosomes (40S + 60S, ~3.3 MDa) within 2–3 min of entry. GTP-driven ribosomal translocation (~15–20 pN mechanical force) strips ~70% of the rod (up to nt 4,915 at the 183 kDa stop codon) into Coat Protein monomers, while nascent 126/183 kDa replicase strips the remaining 3′ region in reverse.',
        from: [
          { nodeId: 'real-tmv-channel', label: 'Decalcified 5′ Rod Tip', cargo: 'Uncapped Ω RNA leader' },
          { nodeId: 'rna', label: 'TMV (+)ssRNA Template', cargo: '126/183 kDa ORFs' }
        ],
        to: [
          { nodeId: 'tmv-sub-real', label: 'Stripped Coat Subunits', cargo: 'Mechanical peeling' },
          { nodeId: 'rough-er', label: 'ER Viral Replication Site', cargo: '126/183 kDa replicase' }
        ]
      },
      es: {
        subtitle: 'La excavadora «estriposoma» que desnuda y traduce a la vez',
        simple:
          'Avanzando por el ARN como Pac-Man subido a una excavadora, el propio ribosoma vegetal arranca el resto de la coraza por delante mientras imprime la copiadora viral por detrás.',
        story:
          '¿Para qué traer motor propio si la víctima trabaja gratis? Apenas el [[interruptor de calcio|real-tmv-channel]] afloja las primeras [[losetas de cubierta|tmv-sub-real]], un [[ribosoma 80S|ribosome]] muerde el [[ARN viral|rna]] cual Pac-Man excavadora («estriposoma»), arrancando ladrillos al frente mientras levanta fábricas de copia en el [[retículo endoplasmático|rough-er]].',
        blueprint: {
          role: 'Motor de desencapsidado cotraduccional («estriposoma») y forja de la replicasa viral',
          arrivesFrom: '[[Subunidades ribosómicas 80S|ribosome]] reclutadas por el líder 5′ Ω destapado del [[ARN del VMT|rna]]',
          inside: 'Subunidades vegetales [[40S|ribo-small]] + [[60S|ribo-large]] avanzando 5′→3′ mientras traducen las proteínas de 126 y 183 kDa',
          deliversTo: 'Desprende [[monómeros de cubierta|tmv-sub-real]] del bastón y ancla complejos de replicación en el [[RE|rough-er]]',
          loop: 'La propia replicasa recién fabricada entra luego desde la cola 3′ para terminar de desnudar el último tramo del bastón'
        },
        scientific:
          'Desensamblaje cotraduccional (complejo «estriposoma»): el líder 5′ Ω de 68 nt (carente de guaninas y de baja afinidad por la cubierta) recluta HSP101/eIF4G y ribosomas 80S vegetales (~3.3 MDa) en 2–3 min. El avance ribosómico dependiente de GTP (~15–20 pN) desnuda ~70% del cilindro (hasta el nucleótido 4,915 del ORF de 183 kDa), mientras la replicasa naciente 126/183 kDa completa el desnudamiento 3′→5′.',
        from: [
          { nodeId: 'real-tmv-channel', label: 'Punta 5′ descalcificada', cargo: 'Líder Ω libre' },
          { nodeId: 'rna', label: 'Molde de ARNmc(+)', cargo: 'ORF de 126/183 kDa' }
        ],
        to: [
          { nodeId: 'tmv-sub-real', label: 'Monómeros desprendidos', cargo: 'Pelado mecánico' },
          { nodeId: 'rough-er', label: 'Fábrica viral en el RE', cargo: 'Replicasa 126/183 kDa' }
        ]
      }
    },

    mp: {
      en: {
        subtitle: 'The Tunnel-Runner Crowbar Prying Open Cell Walls',
        simple:
          'Because plant cells sit behind wooden walls with tiny 2-nanometer pores, TMV builds an Ocean’s Eleven crowbar protein (MP30) that pries wall tunnels wide open to smuggle naked RNA next door!',
        story:
          'Blowing up a [[plant cell|real-plant]] gets you nowhere behind thick [[cellulose walls|real-wall]]—and an 18-nanometer [[TMV rod|real-tmv]] cannot fit 2-nanometer [[plasmodesmata|plasmodesma]]! So Movement Protein MP30 pulls an Ocean’s Eleven tunnel job: flattening [[viral RNA|rna]] into a skinny ribbon and melting callose collars to pry the pore >9 nanometers wide into the next cell!',
        blueprint: {
          role: 'Plasmodesmata gate-dilating crowbar and single-stranded RNA chaperone',
          arrivesFrom: 'Translated mid-infection from subgenomic MP mRNA on [[ER-associated ribosomes|ribosome]] and trafficked along ER/actin',
          inside: '30 kDa Movement Protein (MP30) cooperatively coating [[(+)ssRNA|rna]] into a ~2 nm thin ribonucleoprotein thread',
          deliversTo: 'Dilates [[plasmodesmata|plasmodesma]] across the [[plant cell wall|real-wall]] from ~2 nm to >9 nm to infect adjacent [[plant cells|real-plant]]',
          loop: 'Once inside the naive neighbor cell, MP30 lets go so host ribosomes immediately start the whole uncoating-and-copying relay anew'
        },
        scientific:
          '30 kDa TMV Movement Protein (MP30, 268 aa; Tobamovirus 30K superfamily jelly-roll core) anchored to cortical ER membranes. Binds single-stranded viral RNA cooperatively (*K*_d ≈ 10⁻⁷ M) to unfold secondary structure into a ~1.5–2.0 nm thin vRNP complex, targets plasmodesmata to recruit host β-1,3-glucanases that degrade neck callose sphincters, and increases size-exclusion limit from ~1 kDa (~2 nm) to >10–20 kDa (~9 nm).',
        from: [
          { nodeId: 'rough-er', label: 'Cortical ER Highway', cargo: 'MP30–vRNA complex' },
          { nodeId: 'rna', label: 'Unencapsidated (+)ssRNA', cargo: 'Unfolded ~2 nm thread' }
        ],
        to: [
          { nodeId: 'plasmodesma', label: 'Plasmodesma Wall Tunnel', cargo: '2 nm → >9 nm dilation' },
          { nodeId: 'real-plant', label: 'Neighboring Leaf Cell', cargo: 'Wall-bypassing spread' }
        ]
      },
      es: {
        subtitle: 'La palanca corredora que fuerza los túneles de la pared',
        simple:
          'Como las células vegetales viven tras muros con poros diminutos, el VMT fabrica una proteína palanca (MP30) al estilo Ocean’s Eleven que ensancha esos túneles y cuela el ARN al vecino.',
        story:
          'Reventar una [[célula vegetal|real-plant]] no sirve tras gruesas [[paredes de celulosa|real-wall]], y un [[bastón de 18 nanómetros|real-tmv]] no cabe por [[plasmodesmos|plasmodesma]] de dos nanómetros. Por eso la proteína MP30 ejecuta un golpe a lo Ocean’s Eleven: aplana el [[ARN viral|rna]] en cinta fina y disuelve anillos de calosa para ensanchar el túnel a más de nueve nanómetros.',
        blueprint: {
          role: 'Palanca dilatadora de plasmodesmos y chaperona de transporte intercelular de ARN',
          arrivesFrom: 'Traducida a mitad de infección en [[ribosomas|ribosome]] y guiada sobre la membrana cortical del [[RE|rough-er]]',
          inside: 'Proteína de Movimiento de 30 kDa (MP30) que estira el [[ARNmc(+)|rna]] en un filamento ribonucleoproteico de ~2 nm',
          deliversTo: 'Dilata los [[plasmodesmos|plasmodesma]] de la [[pared vegetal|real-wall]] (de ~2 nm a >9 nm) hacia [[células vecinas|real-plant]]',
          loop: 'Al cruzar a la célula virgen contigua, la fosforilación de MP30 suelta el ARN para arrancar de inmediato un nuevo ciclo'
        },
        scientific:
          'Proteína de Movimiento de 30 kDa (MP30, 268 aa; superfamilia 30K con núcleo jelly-roll) asociada a membranas corticales del RE. Se une cooperativamente al ARNmc viral (*K*_d ≈ 10⁻⁷ M) desplegando su estructura secundaria en un filamento vRNP de ~1.5–2.0 nm, recluta β-1,3-glucanasas del huésped que degradan los esfínteres de calosa del cuello plasmodésmico y amplía el límite de exclusión de ~1 kDa (~2 nm) a >10–20 kDa (~9 nm).',
        from: [
          { nodeId: 'rough-er', label: 'Autopista cortical del RE', cargo: 'Complejo MP30–ARN' },
          { nodeId: 'rna', label: 'ARNmc(+) sin cápside', cargo: 'Hebra estirada (~2 nm)' }
        ],
        to: [
          { nodeId: 'plasmodesma', label: 'Túnel plasmodésmico', cargo: 'Dilatación 2 → >9 nm' },
          { nodeId: 'real-plant', label: 'Célula foliar vecina', cargo: 'Invasión sin salir al exterior' }
        ]
      }
    }
  }
};
