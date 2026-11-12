import type { TourPersonaMap } from './tour_personas.js';

export const VIRUS_TOUR_PERSONAS: TourPersonaMap = {
  'real-coronavirus': {
    'cov.ch0.intro.01': {
      en: {
        pop: 'Meet SARS-CoV-2: a sugar-cloaked shapeshifter straight out of X-Men that crashed human airways.',
        blueprint: 'Target profile: SARS-CoV-2, an enveloped (+)ssRNA respiratory payload courier causing COVID-19.',
        scientific: 'Lineage B Betacoronavirus SARS-CoV-2 (Baltimore IV, Coronaviridae), etiologic agent of COVID-19.'
      },
      es: {
        pop: 'Conoce al SARS-CoV-2: un cambiaformas camuflado digno de X-Men que infiltró nuestras vías aéreas.',
        blueprint: 'Perfil del sistema: SARS-CoV-2, mensajero respiratorio envuelto de ARNmc(+) causante de COVID-19.',
        scientific: 'Betacoronavirus de linaje B SARS-CoV-2 (clase IV de Baltimore), agente etiológico de la COVID-19.'
      }
    },
    'cov.ch0.intro.02': {
      en: {
        pop: 'At 120 nanometers tip to tip, a thousand of these crowned bubbles could line up across one hair.',
        blueprint: 'Outer envelope plus radial spike array spans ~120 nm—compact enough for aerosol transport.',
        scientific: 'Pleomorphic virions measure ~90–120 nm across, combining a ~92 nm bilayer with ~20 nm S spikes.'
      },
      es: {
        pop: 'Con 120 nanómetros de punta a punta, mil de estas burbujas coronadas cabrían en el grosor de un pelo.',
        blueprint: 'El chasis lipídico más su matriz radial de espículas abarca ~120 nm para transporte en aerosoles.',
        scientific: 'El virión pleomórfico mide ~90–120 nm totales: bicapa de ~92 nm más espículas S de ~20 nm.'
      }
    },
    'cov.ch0.intro.03': {
      en: {
        pop: 'We sliced open both the viral Death Star and the human airway border below to catch the break-in.',
        blueprint: 'Cross-sectional view exposing the virion lumen above and the target epithelial interface below.',
        scientific: 'Tomographic cutaway of the SARS-CoV-2 virion apposed to an apical human respiratory membrane.'
      },
      es: {
        pop: 'Abrimos en corte esta Estrella de la Muerte viral y la frontera respiratoria humana bajo ella.',
        blueprint: 'Vista en sección del lumen viral superior frente a la interfaz epitelial objetivo inferior.',
        scientific: 'Corte tomográfico del virión de SARS-CoV-2 frente a la membrana apical del epitelio respiratorio.'
      }
    },
    'cov.ch0.intro.04': {
      en: {
        pop: 'Zero cartoon guesswork here—every gear on screen comes straight from real atomic freeze-frames.',
        blueprint: 'All macromolecular modules are reconstructed directly from experimental cryo-EM and X-ray coordinates.',
        scientific: 'Atomic assemblies derive from high-resolution cryo-EM, X-ray crystallography, and ssNMR PDB models.'
      },
      es: {
        pop: 'Cero invención artística: cada pieza proviene de capturas atómicas reales congeladas en laboratorio.',
        blueprint: 'Todos los módulos macromoleculares proceden de coordenadas experimentales de crio-ME y rayos X.',
        scientific: 'Ensamblajes atómicos reconstruidos mediante crio-ME, cristalografía de rayos X y RMN del PDB.'
      }
    },
    'cov.ch0.intro.05': {
      en: {
        pop: 'Hit Space to freeze-frame the heist, or click Explore to pilot the camera solo anytime.',
        blueprint: 'Press Space to halt playback, or select Explore to switch into free-camera inspection mode.',
        scientific: 'Use Space to pause guided narration or toggle Explore for interactive 3D structural inspection.'
      },
      es: {
        pop: 'Pulsa Espacio para congelar el atraco, o elige Explorar para pilotar la cámara a tu aire.',
        blueprint: 'Pulsa Espacio para detener la secuencia, o selecciona Explorar para inspección libre en 3D.',
        scientific: 'Pulsa Espacio para pausar la narración o activa Explorar para examinar las estructuras en 3D.'
      }
    },
    'cov.ch1.spike.01': {
      en: {
        pop: 'Cloaked in Predator-style sugar camo, [[Spike (S) trimers|spike]] give this villain its royal crown.',
        blueprint: 'Glycan-shielded [[Spike (S) trimers|spike]] form the perimeter docking and fusion array.',
        scientific: '24–48 homotrimeric [[Spike (S) glycoproteins|spike]] (66 N-glycans/trimer, PDB 6VXX) form the corona.'
      },
      es: {
        pop: 'Con camuflaje de azúcar al estilo Depredador, los [[trímeros de espícula (S)|spike]] forman su corona.',
        blueprint: 'Los [[trímeros de espícula (S)|spike]] blindados con glicanos integran la red de anclaje y fusión.',
        scientific: '24–48 [[homotrímeros glicosilados S|spike]] (66 N-glicanos/trímero, PDB 6VXX) forman la corona.'
      }
    },
    'cov.ch1.spike.02': {
      en: {
        pop: 'Think two-stage rocket: the S1 nosecone spots the lock while the S2 harpoon waits to fire.',
        blueprint: 'Modular architecture: distal S1 handles receptor recognition; proximal S2 houses the fusion winch.',
        scientific: 'Furin-cleaved protomers (1,273 aa) pair an ACE2-binding S1 subunit with a class I fusogenic S2 stalk.'
      },
      es: {
        pop: 'Funciona como un cohete de dos etapas: el morro S1 busca la cerradura y el arpón S2 espera disparar.',
        blueprint: 'Diseño modular: el cabezal S1 ejecuta el reconocimiento y el tallo S2 aloja el cabrestante de fusión.',
        scientific: 'Cada protómero (1.273 aa, cortado por furina) une una subunidad S1 receptora a un tallo fusogénico S2.'
      }
    },
    'cov.ch1.spike.03': {
      en: {
        pop: 'Three ankle joints let each club lean 40 degrees like wacky inflatable tube men hunting a foothold.',
        blueprint: 'Triple stalk hinges ("hip, knee, ankle") tilt up to ~40° to scan curved host surfaces.',
        scientific: 'Cryo-ET reveals three flexible S2 stalk hinges (hip, knee, ankle) permitting ~40° ectodomain tilt.'
      },
      es: {
        pop: 'Tres bisagras en el tallo la inclinan 40° como un radar viviente tanteando dónde agarrarse.',
        blueprint: 'Tres juntas flexibles en el tallo permiten inclinaciones de ~40° para barrer la membrana celular.',
        scientific: 'La crio-ET revela tres bisagras (cadera, rodilla, tobillo) en S2 que inclinan el ectodominio ~40°.'
      }
    },
    'cov.ch1.mem.01': {
      en: {
        pop: 'Its outer coat is a [[lipid bilayer envelope|membrane]] carjacked from the last victim’s Golgi.',
        blueprint: 'The hull is a host-derived [[lipid bilayer envelope|membrane]] budded from ER–Golgi membranes.',
        scientific: 'A ~92 nm host ERGIC-derived [[phospholipid bilayer envelope|membrane]] encloses the virion core.'
      },
      es: {
        pop: 'Su abrigo externo es una [[envoltura de bicapa lipídica|membrane]] robada al Golgi de su última víctima.',
        blueprint: 'El casco exterior es una [[envoltura de bicapa lipídica|membrane]] sustraída del compartimento RE–Golgi.',
        scientific: 'Una [[bicapa fosfolipídica|membrane]] de ~92 nm derivada del ERGIC huésped delimita el virión.'
      }
    },
    'cov.ch1.mem.02': {
      en: {
        pop: 'Plain soap pops this stolen grease bubble like SpongeBob’s suds—no hull, no heist!',
        blueprint: 'Amphiphilic detergents and 70% ethanol solubilize the lipid hull, disabling spike fusion.',
        scientific: 'Surfactant micelles and alcohols disrupt hydrophobic acyl packing, collapsing virion infectivity.'
      },
      es: {
        pop: 'El simple jabón revienta esta burbuja de grasa robada como pompas de Bob Esponja: ¡fin del atraco!',
        blueprint: 'Detergentes anfifílicos y etanol al 70% solubilizan el casco lipídico e inutilizan el virión.',
        scientific: 'Las micelas tensioactivas y el etanol desorganizan las cadenas acilo, aboliendo la infectividad.'
      }
    },
    'cov.ch1.mprot.01': {
      en: {
        pop: 'Nearly two thousand [[Membrane (M) dimers|mprot]] rivet the bubble together like Iron Man armor plates.',
        blueprint: 'Dense arrays of [[Membrane (M) dimers|mprot]] form the structural chassis beneath the bilayer.',
        scientific: '~1,000–2,000 triple-spanning [[M glycoprotein dimers|mprot]] (222 aa, PDB 8CTK) tile the envelope.'
      },
      es: {
        pop: 'Casi dos mil [[dímeros de membrana (M)|mprot]] remachan la burbuja como placas de Iron Man.',
        blueprint: 'Matrices densas de [[dímeros de membrana (M)|mprot]] conforman el bastidor estructural interno.',
        scientific: '~1.000–2.000 [[dímeros transmembrana M|mprot]] (222 aa, triple paso, PDB 8CTK) tapizan la bicapa.'
      }
    },
    'cov.ch1.mprot.02': {
      en: {
        pop: 'They bend the stolen fat sheet into a tight sphere and hook the RNA necklace inside.',
        blueprint: 'Conformational M-dimer wedges induce membrane curvature and tether internal RNP cargo.',
        scientific: 'Compact/long M-dimer conformations drive ERGIC budding curvature and bind N-protein C-termini.'
      },
      es: {
        pop: 'Curvan la lámina grasa en una esfera firme y enganchan por dentro el collar de ARN.',
        blueprint: 'Las cuñas diméricas M inducen curvatura vesicular y anclan internamente la carga vRNP.',
        scientific: 'Los dímeros M inducen curvatura de gemación en el ERGIC y fijan los dominios C-terminales de N.'
      }
    },
    'cov.ch1.echan.01': {
      en: {
        pop: 'Five tiny helices twist into the [[Envelope (E) viroporin|echan]]—a secret pressure-relief hatch.',
        blueprint: 'Pentameric α-helices assemble into the [[Envelope (E) viroporin|echan]] ion-leakage valve.',
        scientific: 'Homopentameric [[Envelope (E) viroporin|echan]] (5 × 75 aa, PDB 5X29) forms a transmembrane pore.'
      },
      es: {
        pop: 'Cinco hélices diminutas giran formando la [[viroporina de envoltura (E)|echan]], una válvula secreta.',
        blueprint: 'Cinco hélices α integran la válvula iónica [[viroporina de envoltura (E)|echan]] en la cubierta.',
        scientific: 'El homopentámero [[viroporina E|echan]] (5 × 75 aa, PDB 5X29) forma un poro catiónico transmembrana.'
      }
    },
    'cov.ch1.echan.02': {
      en: {
        pop: 'By leaking calcium and protons, it sabotages the cell’s acid traps so baby viruses escape intact.',
        blueprint: 'Cation flux neutralizes secretory lumen pH, preventing premature spike activation during egress.',
        scientific: 'Viroporin Ca²⁺/H⁺ conductance de-acidifies ERGIC/Golgi compartments and activates NLRP3 inflammasomes.'
      },
      es: {
        pop: 'Al filtrar calcio y protones, desactiva las trampas ácidas celulares para que escapen nuevos virus.',
        blueprint: 'El flujo catiónico neutraliza la vía secretora e impide el disparo prematuro de S al salir.',
        scientific: 'La conductancia de Ca²⁺/H⁺ alcaliniza el ERGIC/Golgi para proteger S y activa el inflamasoma NLRP3.'
      }
    },
    'cov.ch2.ncap.01': {
      en: {
        pop: 'Inside, 40 [[Nucleocapsid (N) oligomers|ncap]] cradle the genome like Dragon Balls in a cushioned case.',
        blueprint: 'Luminal storage uses ~40 [[Nucleocapsid (N) oligomers|ncap]] arranged as shock-absorbing spools.',
        scientific: 'Cryo-ET resolves ~35–40 [[Nucleocapsid (N) vRNP oligomers|ncap]] (~14–15 nm each) in the lumen.'
      },
      es: {
        pop: 'Dentro, 40 [[oligómeros de nucleocápside (N)|ncap]] acunan el genoma como Esferas del Dragón en estuche.',
        blueprint: 'El almacén luminal emplea ~40 [[oligómeros de nucleocápside (N)|ncap]] como carretes amortiguados.',
        scientific: 'La crio-ET resuelve ~35–40 [[oligómeros vRNP de proteína N|ncap]] (~14–15 nm) en el lumen viral.'
      }
    },
    'cov.ch2.ncap.02': {
      en: {
        pop: 'Opposites attract: positively charged N grooves hug the negatively charged RNA so it never tangles.',
        blueprint: 'Electropositive surface channels neutralize phosphate repulsion for high-density RNA winding.',
        scientific: 'Basic NTD β-hairpins (PDB 6VYO) and CTD dimers (PDB 6WZO) electrostatically condense the RNA.'
      },
      es: {
        pop: 'Los polos opuestos se atraen: surcos positivos en N abrazan el ARN negativo sin dejar que se enrede.',
        blueprint: 'Canales electropositivos neutralizan la repulsión de fosfatos para compactar la cinta de ARN.',
        scientific: 'Horquillas β básicas NTD (PDB 6VYO) y dímeros CTD (PDB 6WZO) condensan el esqueleto fosfodiéster.'
      }
    },
    'cov.ch2.rna.01': {
      en: {
        pop: 'Threaded through those spools is a 29,903-letter [[(+)ssRNA genome|rna]]—a One Piece Poneglyph scroll!',
        blueprint: 'Spooling across the N array is a 29,903-nt [[(+)ssRNA genome|rna]] carrying all viral source code.',
        scientific: 'A single 29,903-nt [[positive-sense ssRNA genome|rna]] (~10 ORFs) winds across the vRNP beads.'
      },
      es: {
        pop: 'Enhebrado en esas cuentas viaja un [[genoma de (+)ARNmc|rna]] de 29.903 letras: ¡todo un Poneglyph!',
        blueprint: 'Devanado en la matriz N corre un [[genoma de (+)ARNmc|rna]] de 29.903 nt con el código fuente.',
        scientific: 'Una hebra única de [[(+)ARNmc genómico|rna]] de 29.903 nt (~10 ORFs) recorre los complejos vRNP.'
      }
    },
    'cov.ch2.rna.02': {
      en: {
        pop: 'Among RNA viruses, this 30-kilobase monster is the final boss—triple the size of flu or polio.',
        blueprint: 'At ~30 kb, this payload approaches the upper stability ceiling of RNA viral genomes.',
        scientific: 'Nidovirales maintain ~30 kb RNA genomes via nsp14–nsp10 3′→5′ exoribonuclease (ExoN) proofreading.'
      },
      es: {
        pop: 'Entre los virus de ARN, este coloso de 30 kilobases es el jefe final: triplica al de la gripe.',
        blueprint: 'Con ~30 kb, esta carga útil roza el techo máximo de tamaño entre todos los virus de ARN.',
        scientific: 'Los Nidovirales sostienen genomas de ~30 kb gracias a la exonucleasa correctora 3′→5′ nsp14 (ExoN).'
      }
    },
    'cov.ch2.rna.03': {
      en: {
        pop: 'Sporting a forged 5′ VIP badge and 3′ poly-A tail, it dupes Cells at Work! ribosomes instantly.',
        blueprint: 'Pre-installed 5′ cap and 3′ poly(A) headers make the strand immediately bootable on host ribosomes.',
        scientific: '5′-m⁷GpppA methylation (nsp14/nsp16) and a 3′-poly(A) tail enable direct 80S translation of ORF1ab.'
      },
      es: {
        pop: '¡Con pase VIP 5′ falsificado y cola poli-A 3′, engaña al instante a los ribosomas de Cells at Work!',
        blueprint: 'Cabeceras 5′-cap y 3′-poli(A) permiten ejecutar la hebra directamente en ribosomas del huésped.',
        scientific: 'La caperuza 5′-m⁷GpppA (nsp14/nsp16) y cola poli(A) 3′ habilitan traducción directa en ribosomas 80S.'
      }
    },
    'cov.ch3.ace2.01': {
      en: {
        pop: 'Like Mystique dropping disguise for one strike, [[Spike RBD|spike]] flips up to grab [[ACE2|ace2]].',
        blueprint: 'One [[Spike RBD|spike]] hinges into the open state to latch onto host [[ACE2|ace2]].',
        scientific: 'A single up-state [[Spike RBD|spike]] (PDB 6VSB) binds human [[ACE2|ace2]] (PDB 6M0J, Kd ~15 nM).'
      },
      es: {
        pop: 'Como Mystique al atacar, un [[dominio RBD de la espícula|spike]] se alza y atrapa a [[ACE2|ace2]].',
        blueprint: 'Un [[dominio RBD de la espícula|spike]] bascula a posición abierta para fijar [[ACE2|ace2]].',
        scientific: 'Un [[RBD en estado abierto|spike]] (PDB 6VSB) fija la peptidasa [[ACE2|ace2]] (PDB 6M0J, Kd ~15 nM).'
      }
    },
    'cov.ch3.ace2.02': {
      en: {
        pop: 'Tricked into helping, host TMPRSS2 scissors snip the S2′ safety pin and fire the fusion harpoon!',
        blueprint: 'Host protease TMPRSS2 cleaves the exposed S2′ latch, firing the hydrophobic fusion peptide.',
        scientific: 'Transmembrane serine protease TMPRSS2 cleaves R815–S816 (S2′), inserting the fusion peptide.'
      },
      es: {
        pop: 'Engañadas por el intruso, las tijeras humanas TMPRSS2 cortan el seguro S2′ y disparan el arpón.',
        blueprint: 'La proteasa TMPRSS2 corta el pestillo S2′ expuesto y proyecta el péptido hidrofóbico de fusión.',
        scientific: 'La serina proteasa TMPRSS2 escinde R815–S816 (S2′), insertando el péptido de fusión en la bicapa.'
      }
    },
    'cov.ch3.ace2.03': {
      en: {
        pop: 'S2 jackknifes like a winch, merging viral and [[host membranes|hostmem]] into a Monsters, Inc. portal!',
        blueprint: 'Six-helix bundle collapse fuses viral and [[host membranes|hostmem]], opening the payload pore.',
        scientific: 'HR1/HR2 zipping into a six-helix bundle (PDB 6LXT) merges viral and [[host membranes|hostmem]].'
      },
      es: {
        pop: 'S2 se pliega como un cabrestante, uniendo la cubierta viral y la [[membrana del huésped|hostmem]].',
        blueprint: 'El colapso en seis hélices funde la bicapa viral con la [[membrana del huésped|hostmem]].',
        scientific: 'El cierre HR1/HR2 en haz de seis hélices (PDB 6LXT) fusiona la [[membrana del huésped|hostmem]].'
      }
    },
    'cov.ch3.rdrp.01': {
      en: {
        pop: 'Once indoors, hijacked ribosomes forge the virus’s turbo printing press: [[RdRp polymerase|rdrp]].',
        blueprint: 'Translated ORF1ab polyproteins self-cleave to boot the cytosolic [[RdRp polymerase|rdrp]] engine.',
        scientific: 'Mpro/PLpro processing of pp1ab assembles the [[RdRp replication–transcription complex|rdrp]].'
      },
      es: {
        pop: 'Ya dentro, los ribosomas secuestrados forjan la imprenta turbo del virus: la [[polimerasa RdRp|rdrp]].',
        blueprint: 'Las poliproteínas ORF1ab se autoprocesan para arrancar el motor [[polimerasa RdRp|rdrp]].',
        scientific: 'La proteólisis por Mpro/PLpro de pp1ab ensambla el complejo [[polimerasa RdRp|rdrp]] en vesículas DMV.'
      }
    },
    'cov.ch3.rdrp.02': {
      en: {
        pop: 'Core engine nsp12 rides twin nsp8 ski-poles so this bullet train never derails on a 30 kb track.',
        blueprint: 'Catalytic nsp12 locks with cofactor nsp7 and twin nsp8 sliding-clamp rails for high processivity.',
        scientific: 'Right-hand polymerase nsp12 (SDD motif) pairs with nsp7 and two ~100 Å α-helical nsp8 clamps.'
      },
      es: {
        pop: 'El motor nsp12 usa dos pértigas nsp8 como rieles de tren bala para no descarrilar en 30 kb.',
        blueprint: 'El núcleo nsp12 se acopla a nsp7 y dos rieles deslizantes nsp8 para sostener alta procesividad.',
        scientific: 'La polimerasa nsp12 (motivo SDD) se une a nsp7 y dos extensiones α-helicoidales nsp8 de ~100 Å.'
      }
    },
    'cov.ch3.rdrp.03': {
      en: {
        pop: 'It xeroxes the entire [[viral genome|rna]] and prints short part-orders for fresh crowns and coats.',
        blueprint: 'Dual-mode output: full-length [[viral genome|rna]] replicas plus nested subgenomic mRNA transcripts.',
        scientific: 'Synthesizes genomic [[(+)ssRNA|rna]] (~150–200 nt/s) and TRS-mediated nested subgenomic mRNAs.'
      },
      es: {
        pop: 'Fotocopia todo el [[genoma viral|rna]] e imprime pedidos cortos para fabricar nuevas coronas.',
        blueprint: 'Salida dual: réplicas íntegras del [[genoma viral|rna]] y transcritos ARNm subgenómicos anidados.',
        scientific: 'Sintetiza [[(+)ARNmc genómico|rna]] (~150–200 nt/s) y ARNm subgenómicos por salto en secuencias TRS.'
      }
    },
    'cov.ch4.flows.01': {
      en: {
        pop: 'Watch the whole heist play live—from lock-picking at the border to mass production downstairs!',
        blueprint: 'Live telemetry: trace trigger signals and RNA data streams across the entry-replication pipeline.',
        scientific: 'Kinetic overview coupling ACE2-triggered membrane fusion with cytosolic RNA synthesis and assembly.'
      },
      es: {
        pop: 'Mira el golpe en vivo: desde forzar la cerradura arriba hasta la fábrica clandestina abajo.',
        blueprint: 'Telemetría activa: sigue las señales de entrada y los flujos de ARN en toda la línea de montaje.',
        scientific: 'Vista cinética que acopla la fusión mediada por ACE2 con la replicación y morfogénesis citosólica.'
      }
    },
    'cov.ch4.sig.01': {
      en: {
        pop: 'Touching [[ACE2|ace2]] springs the [[Spike|spike]] trapdoor, dumping the viral scroll indoors.',
        blueprint: 'Engagement at [[ACE2|ace2]] actuates [[Spike|spike]] refolding to breach the plasma membrane.',
        scientific: '[[ACE2|ace2]] binding and S2′ proteolysis drive [[Spike|spike]] 6HB fusion and luminal uncoating.'
      },
      es: {
        pop: 'Tocar [[ACE2|ace2]] abre la trampilla de la [[espícula|spike]] y suelta el pergamino adentro.',
        blueprint: 'El anclaje en [[ACE2|ace2]] dispara el pliegue de la [[espícula|spike]] y abre el poro de entrada.',
        scientific: 'La unión a [[ACE2|ace2]] y el corte S2′ impulsan la fusión por [[espícula|spike]] y desencapsidación.'
      }
    },
    'cov.ch4.sig.02': {
      en: {
        pop: 'Unspooled [[(+)ssRNA|rna]] races straight into the [[RdRp replicase|rdrp]] copy shop.',
        blueprint: 'Uncoated [[(+)ssRNA|rna]] feeds directly into the [[RdRp replicase|rdrp]] template channel.',
        scientific: 'Released 29.9 kb [[(+)ssRNA|rna]] recruits the [[RdRp replicase|rdrp]] holoenzyme inside ER DMVs.'
      },
      es: {
        pop: 'El [[(+)ARNmc|rna]] desenrollado corre directo a la copiadora [[replicasa RdRp|rdrp]].',
        blueprint: 'El [[(+)ARNmc|rna]] liberado alimenta directamente el canal molde de la [[replicasa RdRp|rdrp]].',
        scientific: 'El [[(+)ARNmc|rna]] de 29,9 kb recluta la holoenzima [[replicasa RdRp|rdrp]] en vesículas de doble membrana.'
      }
    },
    'cov.ch4.sg.01': {
      en: {
        pop: 'Like Naruto’s Shadow Clones, [[RdRp|rdrp]] cranks out short mRNA recipes for S, M, E, and N parts.',
        blueprint: '[[RdRp|rdrp]] executes discontinuous jumps to emit dedicated structural subgenomic mRNAs.',
        scientific: '[[RdRp|rdrp]] template-switches across TRS-B/TRS-L motifs to transcribe nested 3′-coterminal sgRNAs.'
      },
      es: {
        pop: 'Como clones de sombra de Naruto, la [[RdRp|rdrp]] lanza recetas cortas para las piezas S, M, E y N.',
        blueprint: 'La [[RdRp|rdrp]] ejecuta saltos discontinuos para emitir ARNm subgenómicos de piezas estructurales.',
        scientific: 'La [[RdRp|rdrp]] salta entre motivos TRS-B y TRS-L generando ARNm subgenómicos 3′-coterminales.'
      }
    },
    'cov.ch4.sg.02': {
      en: {
        pop: 'Fresh [[N oligomers|ncap]] and [[M dimers|mprot]] box up new scrolls to ship out the next wave!',
        blueprint: 'Newly translated [[N oligomers|ncap]] and [[M dimers|mprot]] package progeny virions at the ERGIC.',
        scientific: 'De novo [[N oligomers|ncap]] condense progeny (+)ssRNA onto [[M dimers|mprot]] for ERGIC budding.'
      },
      es: {
        pop: 'Nuevos [[oligómeros N|ncap]] y [[dímeros M|mprot]] embalan pergaminos frescos para la siguiente oleada.',
        blueprint: 'Los nuevos [[oligómeros N|ncap]] y [[dímeros M|mprot]] ensamblan viriones hijos en el ERGIC.',
        scientific: '[[Oligómeros N|ncap]] condensan el (+)ARNmc progenie sobre [[dímeros M|mprot]] al gemar en el ERGIC.'
      }
    },
    'cov.ch5.roll.01': {
      en: {
        pop: 'Spike (S) trimer: the sugar-cloaked lockpick and harpoon crowning the virus.',
        blueprint: 'Spike (S) trimer: perimeter receptor-docking head and class I membrane-fusion actuator.',
        scientific: 'Spike (S) homotrimer (3 × 1,273 aa, PDB 6VXX/6VSB): glycosylated ACE2-binding class I fusogen.'
      },
      es: {
        pop: 'Trímero de espícula (S): ganzúa y arpón bajo manto de azúcar que corona al virus.',
        blueprint: 'Trímero de espícula (S): módulo perimetral de acoplamiento y actuador de fusión de clase I.',
        scientific: 'Homotrímero S (3 × 1.273 aa, PDB 6VXX/6VSB): fusógeno de clase I glicosilado afín a ACE2.'
      }
    },
    'cov.ch5.roll.02': {
      en: {
        pop: 'Lipid envelope: a stolen grease bubble that soap pops in seconds.',
        blueprint: 'Viral lipid bilayer: host-derived ~92 nm phospholipid hull vulnerable to surfactants.',
        scientific: 'ERGIC-derived phospholipid bilayer (~92 nm diameter) housing S, M, and E transmembrane proteins.'
      },
      es: {
        pop: 'Envoltura lipídica: burbuja de grasa robada que el jabón revienta en segundos.',
        blueprint: 'Bicapa lipídica viral: casco fosfolipídico de ~92 nm sensible a detergentes anfifílicos.',
        scientific: 'Bicapa fosfolipídica derivada del ERGIC (~92 nm) que aloja las proteínas transmembrana S, M y E.'
      }
    },
    'cov.ch5.roll.03': {
      en: {
        pop: 'Membrane (M) lattice: thousands of tiny rivets curving the hull into a sphere.',
        blueprint: 'Membrane (M) dimer lattice: curvature-inducing scaffold and internal RNP tether.',
        scientific: 'Membrane (M) homodimers (~1,000–2,000 copies, 222 aa, PDB 8CTK) scaffolding virion morphogenesis.'
      },
      es: {
        pop: 'Red de dímeros M: miles de remaches diminutos que curvan el casco en esfera.',
        blueprint: 'Red dimérica de membrana (M): bastidor de curvatura y anclaje interno del núcleo RNP.',
        scientific: 'Homodímeros de glicoproteína M (~1.000–2.000 copias, 222 aa, PDB 8CTK) de soporte estructural.'
      }
    },
    'cov.ch5.roll.04': {
      en: {
        pop: 'Envelope (E) viroporin: a five-helix secret vent that disarms host acid traps.',
        blueprint: 'Envelope (E) pentamer: transmembrane cation-leakage valve tuning secretory pH.',
        scientific: 'Pentameric E viroporin (5 × 75 aa, PDB 5X29): ERGIC-localized Ca²⁺/cation channel.'
      },
      es: {
        pop: 'Viroporina E: respiradero secreto de cinco hélices que neutraliza trampas ácidas.',
        blueprint: 'Pentámero de envoltura (E): válvula catiónica transmembrana reguladora del pH secretor.',
        scientific: 'Viroporina pentamérica E (5 × 75 aa, PDB 5X29): canal catiónico/Ca²⁺ localizado en el ERGIC.'
      }
    },
    'cov.ch5.roll.05': {
      en: {
        pop: 'Nucleocapsid (N) beads: 40 shock-absorbing spools protecting the giant RNA scroll.',
        blueprint: 'Nucleocapsid (N) oligomers: ~40 electropositive RNP spools compacting the genome.',
        scientific: 'Nucleocapsid (N) vRNP oligomers (~35–40 × 15 nm beads, 419 aa, PDB 6VYO/6WZO).'
      },
      es: {
        pop: 'Oligómeros N: 40 carretes amortiguadores que protegen el pergamino gigante de ARN.',
        blueprint: 'Oligómeros de nucleocápside (N): ~40 carretes electropositivos que compactan el genoma.',
        scientific: 'Oligómeros ribonucleoproteicos N (~35–40 complejos de ~15 nm, 419 aa, PDB 6VYO/6WZO).'
      }
    },
    'cov.ch5.roll.06': {
      en: {
        pop: '29.9 kb (+)ssRNA: a colossal genetic scroll disguised as everyday cellular mail.',
        blueprint: '29.9 kb (+)ssRNA payload: 5′-capped, 3′-polyadenylated direct-boot mRNA genome.',
        scientific: '29,903-nt 5′-capped, 3′-poly(A) (+)ssRNA genome (Baltimore IV) encoding 16 nsps and 4 structural proteins.'
      },
      es: {
        pop: 'Genoma (+)ARNmc de 29,9 kb: pergamino colosal disfrazado de correo celular legítimo.',
        blueprint: 'Carga (+)ARNmc de 29,9 kb: imagen genómica con caperuza 5′ lista para ribosomas.',
        scientific: 'Genoma (+)ARNmc de 29.903 nt con caperuza 5′ y poli(A) 3′ (Baltimore IV, 16 nsp + 4 estructurales).'
      }
    },
    'cov.ch5.roll.07': {
      en: {
        pop: 'Host ACE2 dimer: an innocent blood-pressure gatekeeper drafted as a front-door handle.',
        blueprint: 'Host ACE2 receptor: apical epithelial metallopeptidase exploited as the primary docking port.',
        scientific: 'Human ACE2 homodimer (805 aa zinc carboxypeptidase, PDB 1R42) bound at its N-terminal α1 helix.'
      },
      es: {
        pop: 'Dímero ACE2 humano: guardián de la presión arterial convertido sin querer en picaporte.',
        blueprint: 'Receptor ACE2 huésped: metalopeptidasa apical explotada como puerto primario de atraque.',
        scientific: 'Homodímero humano ACE2 (carboxipeptidasa de Zn²⁺, 805 aa, PDB 1R42) fijado en su hélice α1.'
      }
    },
    'cov.ch5.roll.08': {
      en: {
        pop: 'Airway cell membrane: the defensive castle wall breached when Spike fuses both bubbles.',
        blueprint: 'Host plasma membrane: apical respiratory lipid barrier breached via class I fusion.',
        scientific: 'Apical ciliated respiratory epithelial bilayer bearing ACE2 and serine protease TMPRSS2.'
      },
      es: {
        pop: 'Membrana respiratoria: la muralla celular abierta cuando la espícula funde ambas burbujas.',
        blueprint: 'Membrana plasmática huésped: barrera lipídica apical vulnerada por fusión de clase I.',
        scientific: 'Bicapa apical del epitelio respiratorio ciliado portadora de ACE2 y la proteasa TMPRSS2.'
      }
    },
    'cov.ch5.roll.09': {
      en: {
        pop: 'RdRp replicase: the twin-railed bullet train copying 30,000 RNA letters nonstop.',
        blueprint: 'RdRp holoenzyme (nsp12–nsp7–2×nsp8): high-processivity cytosolic RNA copying engine.',
        scientific: 'RdRp complex (nsp12–nsp7–2×nsp8, PDB 6M71/7BV2) paired with nsp14 ExoN proofreading.'
      },
      es: {
        pop: 'Replicasa RdRp: el tren bala de doble riel que copia 30.000 letras de ARN sin parar.',
        blueprint: 'Holoenzima RdRp (nsp12–nsp7–2×nsp8): motor citosólico de copia de ARN de alta procesividad.',
        scientific: 'Complejo RdRp (nsp12–nsp7–2×nsp8, PDB 6M71/7BV2) acoplado al corrector ExoN nsp14.'
      }
    },
    'cov.ch5.exp.01': {
      en: {
        pop: 'Your turn, detective—take the controls and inspect every corner of SARS-CoV-2!',
        blueprint: 'Guided sequence complete. Free-flight inspection of the SARS-CoV-2 assembly is now unlocked.',
        scientific: 'Concluding guided tour; interactive exploration of the SARS-CoV-2 virion scene is now active.'
      },
      es: {
        pop: 'Tu turno, detective: toma los mandos e investiga cada rincón del SARS-CoV-2.',
        blueprint: 'Secuencia guiada completada. Inspección libre del ensamblaje de SARS-CoV-2 habilitada.',
        scientific: 'Fin del recorrido guiado; explora libremente la escena molecular del virión SARS-CoV-2.'
      }
    },
    'cov.ch5.exp.02': {
      en: {
        pop: 'Click any floating badge to zoom straight down to real Protein Data Bank atoms!',
        blueprint: 'Select any component tag to load its isolated atomic coordinates from the Protein Data Bank.',
        scientific: 'Click any structural label to inspect experimental cryo-EM, crystal, or NMR PDB coordinates.'
      },
      es: {
        pop: 'Haz clic en cualquier etiqueta para bajar directo hasta los átomos reales del PDB.',
        blueprint: 'Selecciona cualquier etiqueta para cargar sus coordenadas atómicas aisladas del PDB.',
        scientific: 'Pulsa cualquier etiqueta para examinar sus coordenadas experimentales del Protein Data Bank.'
      }
    },
    'cov.det.rspk.01': {
      en: {
        pop: 'Caught red-handed: one RBD finger flips out of its sugar cloak to clamp ACE2’s top ridge.',
        blueprint: 'Single S1 RBD hinges into its open state to lock onto the N-terminal α1 helix of ACE2.',
        scientific: '1-RBD-up Spike conformer (PDB 6VSB) engages the α1 peptidase helix of human ACE2 (PDB 6M0J).'
      },
      es: {
        pop: 'Pillado in fraganti: un dedo RBD sale de su manto de azúcar y atrapa la cresta de ACE2.',
        blueprint: 'Un dominio RBD bascula a posición abierta para fijar la hélice α1 N-terminal de ACE2.',
        scientific: 'El confórmero 1-RBD-up (PDB 6VSB) fija la hélice α1 del ectodominio ACE2 humano (PDB 6M0J).'
      }
    },
    'cov.det.rspk.02': {
      en: {
        pop: 'Once S2′ gets snipped, the stalk snaps shut like a bear trap to fuse both fat bubbles!',
        blueprint: 'Proteolytic S2′ cleavage releases the fusion peptide, winching both bilayers into one pore.',
        scientific: 'TMPRSS2 cleavage at R815↓S816 triggers HR1/HR2 collapse into a postfusion 6-helix bundle (6LXT).'
      },
      es: {
        pop: 'Al cortarse S2′, el tallo salta como un cepo y funde ambas burbujas de grasa en una.',
        blueprint: 'El corte proteolítico en S2′ libera el péptido fusogénico y une ambas bicapas en un poro.',
        scientific: 'La escisión por TMPRSS2 en R815↓S816 dispara el cierre HR1/HR2 en haz de seis hélices (6LXT).'
      }
    },
    'cov.det.rrnp.01': {
      en: {
        pop: 'Instead of a stiff box, forty N-protein pearls coil 30,000 RNA letters like a springy necklace.',
        blueprint: 'Forty N oligomers spool the 29.9 kb (+)ssRNA into a flexible, shock-resistant vRNP coil.',
        scientific: '~35–40 N-protein vRNP oligomers (~15 nm, PDB 6VYO/6WZO) compact the 29,903-nt (+)ssRNA lumen.'
      },
      es: {
        pop: 'En vez de cofre rígido, cuarenta perlas N enrollan las 30.000 letras como un collar elástico.',
        blueprint: 'Cuarenta oligómeros N bobinan los 29,9 kb de (+)ARNmc en un núcleo vRNP flexible y compacto.',
        scientific: '~35–40 oligómeros vRNP de proteína N (~15 nm, PDB 6VYO/6WZO) condensan los 29.903 nt de ARN.'
      }
    },
    'cov.det.rrnp.02': {
      en: {
        pop: 'Inner hooks on M dimers strap that pearl necklace snugly against the inside of the hull.',
        blueprint: 'Cytosolic C-terminal tails on M dimers anchor the vRNP array to the inner envelope leaflet.',
        scientific: 'Endodomains of dimeric M glycoproteins (PDB 8CTK) bind N CTDs to tether vRNPs beneath the bilayer.'
      },
      es: {
        pop: 'Ganchos internos de los dímeros M sujetan ese collar de perlas contra el casco interior.',
        blueprint: 'Las colas C-terminales de los dímeros M anclan la red vRNP a la cara interna de la envoltura.',
        scientific: 'Los endodominios de los dímeros M (PDB 8CTK) unen el CTD de N para fijar los vRNP a la bicapa.'
      }
    },
    'cov.det.rrep.01': {
      en: {
        pop: 'Meet the virus’s Mecha-core (PDB 6M71): engine nsp12 locked tight with nsp7 and twin nsp8 arms.',
        blueprint: 'RdRp holoenzyme assembly (PDB 6M71) couples catalytic nsp12 with nsp7 and two nsp8 subunits.',
        scientific: 'Cryo-EM holoenzyme (PDB 6M71): 932-aa nsp12 NiRAN/RdRp bound to one nsp7 and two nsp8 cofactors.'
      },
      es: {
        pop: 'Aquí está el mecha copiador (PDB 6M71): el motor nsp12 unido a nsp7 y dos brazos nsp8.',
        blueprint: 'La holoenzima RdRp (PDB 6M71) integra el núcleo catalítico nsp12 con nsp7 y 2×nsp8.',
        scientific: 'Holoenzima por crio-ME (PDB 6M71): subunidad nsp12 (932 aa) unida a un nsp7 y dos nsp8.'
      }
    },
    'cov.det.rrep.02': {
      en: {
        pop: 'Those twin nsp8 rails grip exiting RNA like roller-coaster lap bars across all 30,000 bases!',
        blueprint: 'Extended α-helical nsp8 poles function as sliding clamps stabilizing duplex RNA processivity.',
        scientific: 'Twin ~100 Å N-terminal nsp8 α-helices cradle ~40 bp of exiting RNA duplex (PDB 7BV2, 6XEZ).'
      },
      es: {
        pop: 'Esas dos barras nsp8 sujetan el ARN como barras de montaña rusa durante las 30.000 bases.',
        blueprint: 'Las varillas α-helicoidales nsp8 actúan como abrazaderas deslizantes sobre el dúplex de ARN.',
        scientific: 'Dos hélices α N-terminales nsp8 (~100 Å) abrazan ~40 pb del dúplex saliente (PDB 7BV2, 6XEZ).'
      }
    },
    'cov.det.sch.01': {
      en: {
        pop: 'Clean blueprint view: stolen grease shell, M-protein rivets, and five-sided E escape vents.',
        blueprint: 'Schematic virion hull cutaway: host phospholipid bilayer, M-dimer lattice, and E ion channels.',
        scientific: 'Architectural SARS-CoV-2 section showing ERGIC bilayer, dimeric M scaffold, and pentameric E pores.'
      },
      es: {
        pop: 'Corte limpio del plano: burbuja robada, remaches M y respiraderos pentagonales E.',
        blueprint: 'Corte esquemático del casco: bicapa fosfolipídica, bastidor de dímeros M y canales E.',
        scientific: 'Sección arquitectónica de SARS-CoV-2 con bicapa ERGIC, red dimérica M y poros pentaméricos E.'
      }
    },
    'cov.det.sch.02': {
      en: {
        pop: 'Clubbed Spike crowns guard the outside while N-protein spools hug the 30 kb scroll within.',
        blueprint: 'Exterior trimeric Spike docking clubs surround the luminal N-oligomer ribonucleoprotein coil.',
        scientific: 'Surface S homotrimers (PDB 6VXX) crown the virion; luminal N oligomers coil the 29.9 kb (+)ssRNA.'
      },
      es: {
        pop: 'Mazas de espícula vigilan afuera mientras los carretes N abrazan dentro el rollo de 30 kb.',
        blueprint: 'Los trímeros externos de espícula rodean la bobina luminal ribonucleoproteica de oligómeros N.',
        scientific: 'Homotrímeros S superficiales (PDB 6VXX) coronan el virión; oligómeros N enrollan el (+)ARNmc.'
      }
    },
    'cov.det.spk.01': {
      en: {
        pop: 'Frozen at atomic scale (PDB 6VXX): the three-headed Spike club with all fingers tucked in.',
        blueprint: 'Closed prefusion Spike homotrimer (PDB 6VXX) resolved by cryo-EM with tucked RBD modules.',
        scientific: '2.8 Å cryo-EM structure of closed prefusion SARS-CoV-2 S homotrimer (PDB 6VXX, 3 × 1,273 aa).'
      },
      es: {
        pop: 'Congelada a escala atómica (PDB 6VXX): la maza triple de espícula con sus dedos ocultos.',
        blueprint: 'Homotrímero de espícula cerrado en prefusión (PDB 6VXX) con los módulos RBD plegados.',
        scientific: 'Estructura crio-ME a 2,8 Å del homotrímero S cerrado en prefusión (PDB 6VXX, 3 × 1.273 aa).'
      }
    },
    'cov.det.spk.02': {
      en: {
        pop: 'Upper S1 lobes sniff out ACE2 doors; the coiled S2 spring underneath punches right through.',
        blueprint: 'Apical S1 domains mediate ACE2 recognition; the proximal S2 core drives bilayer merger.',
        scientific: 'NTD/RBD-bearing S1 crowns wrap the central S2 HR1/central-helix prefusion fusion apparatus.'
      },
      es: {
        pop: 'Los lóbulos S1 arriba olfatean puertas ACE2; el resorte S2 debajo perfora la frontera.',
        blueprint: 'Los dominios apicales S1 reconocen ACE2; el núcleo basal S2 ejecuta la fusión de bicapas.',
        scientific: 'Las coronas S1 (NTD/RBD) envuelven el aparato fusogénico S2 de hélice central y repeticiones HR1.'
      }
    },
    'cov.det.e.01': {
      en: {
        pop: 'Tiny five-blade ninja star in solid-state NMR (PDB 5X29): the Envelope viroporin channel!',
        blueprint: 'Solid-state NMR atomic model of the pentameric Envelope ion-channel barrel (PDB 5X29).',
        scientific: 'Pentameric SARS-CoV E transmembrane domain resolved by solid-state NMR in lipid bilayers (PDB 5X29).'
      },
      es: {
        pop: 'Diminuta estrella ninja de cinco puntas en RMN (PDB 5X29): ¡el canal viroporina E!',
        blueprint: 'Modelo por RMN en estado sólido del barril iónico pentamérico de envoltura E (PDB 5X29).',
        scientific: 'Dominio transmembrana pentamérico de la viroporina E resuelto por RMN en bicapas (PDB 5X29).'
      }
    },
    'cov.det.e.02': {
      en: {
        pop: 'Five helices drill a microscopic ion leak through Golgi walls so budding virions slip free.',
        blueprint: 'Five tilted transmembrane helices form a ~2 Å hydrophobic-gated cation pore across ERGIC membranes.',
        scientific: 'Five α-helices (residues 8–38) assemble a cation-selective viroporin pore conducting Ca²⁺, Na⁺, and K⁺.'
      },
      es: {
        pop: 'Cinco hélices perforan un microescape iónico en el Golgi para liberar viriones intactos.',
        blueprint: 'Cinco hélices transmembrana inclinadas abren un poro catiónico a través de membranas ERGIC.',
        scientific: 'Cinco hélices α (residuos 8–38) forman un poro selectivo a cationes (Ca²⁺, Na⁺, K⁺) en el ERGIC.'
      }
    },
    'cov.det.n.01': {
      en: {
        pop: 'Crystal close-up (PDB 6VYO): the positively charged catcher’s mitt that cradles viral RNA.',
        blueprint: 'X-ray crystal structure of the Nucleocapsid RNA-binding N-terminal domain tetramer (PDB 6VYO).',
        scientific: '1.7 Å crystal structure of the SARS-CoV-2 Nucleocapsid N-terminal RNA-binding domain (PDB 6VYO).'
      },
      es: {
        pop: 'Primer plano cristalino (PDB 6VYO): el guante con carga positiva que atrapa el ARN viral.',
        blueprint: 'Estructura cristalográfica del dominio N-terminal de unión a ARN de nucleocápside (PDB 6VYO).',
        scientific: 'Estructura cristalina a 1,7 Å del dominio N-terminal NTD de unión a ARN de proteína N (PDB 6VYO).'
      }
    },
    'cov.det.n.02': {
      en: {
        pop: 'Basic β-hairpin fingers curl around the fragile RNA ribbon to wind shockproof RNP beads.',
        blueprint: 'Positively charged β-hairpin loops clamp the phosphate backbone into compact helical vRNP beads.',
        scientific: 'Arginine/lysine-rich β-hairpin fingers electrostatically grip single-stranded RNA into ~15 nm vRNPs.'
      },
      es: {
        pop: 'Dedos básicos en horquilla abrazan la cinta de ARN para enrollar cuentas RNP antichoque.',
        blueprint: 'Bucles básicos en horquilla β sujetan el esqueleto fosfato en cuentas helicoidales vRNP.',
        scientific: 'Dedos en horquilla β ricos en Arg/Lys fijan electrostáticamente el ARNmc en partículas vRNP de ~15 nm.'
      }
    },
    'cov.det.rdrp.01': {
      en: {
        pop: 'Cryo-EM close-up (PDB 6M71): the four-piece RNA copying engine caught mid-assembly!',
        blueprint: 'Atomic cryo-EM model of the four-subunit RdRp replicase core (nsp12–nsp7–2×nsp8, PDB 6M71).',
        scientific: '2.9 Å cryo-EM structure of SARS-CoV-2 nsp12–nsp7–(nsp8)₂ RNA-dependent RNA polymerase (PDB 6M71).'
      },
      es: {
        pop: 'Primer plano por crio-ME (PDB 6M71): ¡el motor copiador de cuatro piezas al desnudo!',
        blueprint: 'Modelo atómico por crio-ME del núcleo replicasa RdRp de cuatro subunidades (PDB 6M71).',
        scientific: 'Estructura crio-ME a 2,9 Å de la ARN polimerasa dependiente de ARN nsp12–nsp7–(nsp8)₂ (PDB 6M71).'
      }
    },
    'cov.det.rdrp.02': {
      en: {
        pop: 'Palm subunit nsp12 prints new letters while twin nsp8 rails keep it glued to the track.',
        blueprint: 'Catalytic nsp12 polymerizes NTPs while dual nsp8 extensions prevent premature template dissociation.',
        scientific: 'nsp12 palm motif SDD catalyzes phosphodiester synthesis while twin nsp8 helices prevent drop-off.'
      },
      es: {
        pop: 'La palma nsp12 imprime letras nuevas mientras los dos rieles nsp8 impiden que descarrile.',
        blueprint: 'nsp12 polimeriza NTP mientras las dos pértigas nsp8 evitan la disociación prematura del molde.',
        scientific: 'El motivo SDD de nsp12 cataliza el enlace fosfodiéster mientras dos hélices nsp8 sostienen el molde.'
      }
    },
    'cov.det.ace2.01': {
      en: {
        pop: 'Human ACE2 in crystal detail (PDB 1R42): a helpful blood-pressure enzyme with an unlucky handle.',
        blueprint: 'X-ray structure of the human ACE2 metallopeptidase ectodomain (PDB 1R42) co-opted for entry.',
        scientific: '2.2 Å crystal structure of the human ACE2 zinc metallopeptidase ectodomain (PDB 1R42, residues 19–615).'
      },
      es: {
        pop: 'ACE2 humana al detalle cristalino (PDB 1R42): una enzima útil con un picaporte desafortunado.',
        blueprint: 'Estructura cristalina del ectodominio metalopeptidasa ACE2 humano (PDB 1R42) usado como puerto.',
        scientific: 'Estructura cristalina a 2,2 Å del ectodominio metalopeptidasa de Zn²⁺ de ACE2 humana (PDB 1R42).'
      }
    },
    'cov.det.ace2.02': {
      en: {
        pop: 'That top α1 ridge is the exact ledge Spike’s open RBD finger grabs to start the break-in.',
        blueprint: 'The N-terminal α1 helix forms the primary docking ridge engaged by the open Spike RBD.',
        scientific: 'Residues Gln24–Tyr41 and Lys353 along the ACE2 α1 helix form H-bonds and salt bridges with Spike RBM.'
      },
      es: {
        pop: 'Esa cresta superior α1 es el borde exacto al que se aferra el dedo RBD para colarse.',
        blueprint: 'La hélice α1 N-terminal constituye la cresta de acoplamiento fijada por el RBD abierto.',
        scientific: 'Los residuos Gln24–Tyr41 y Lys353 de la hélice α1 de ACE2 forman puentes salinos con el RBM viral.'
      }
    }
  },
  'real-hiv': {
    'hiv.ch0.intro.01': {
      en: {
        pop: 'Meet HIV-1: the ultimate Agent Smith retrovirus that infiltrates Cells at Work! T-cell commanders.',
        blueprint: 'System target: HIV-1, an enveloped lentiviral retrovirus engineered to hijack CD4+ immune hosts.',
        scientific: 'Human immunodeficiency virus type 1 (Lentivirus, Retroviridae, Baltimore VI) targeting CD4+ T cells.'
      },
      es: {
        pop: '¡Conoce al VIH-1: el Agente Smith viral que infiltra a los comandantes T de Cells at Work!',
        blueprint: 'Objetivo del sistema: VIH-1, retrovirus lentiviral envuelto diseñado para infiltrar linfocitos CD4+.',
        scientific: 'Virus de la inmunodeficiencia humana tipo 1 (Lentivirus, Retroviridae, clase VI de Baltimore).'
      }
    },
    'hiv.ch0.intro.02': {
      en: {
        pop: 'Roughly 120 nanometers wide, this tiny stealth orb is eighty times smaller than the T-cell it hacks.',
        blueprint: 'Mature spherical chassis spans ~120 nm across—optimized for bloodstream and lymphoid transit.',
        scientific: 'Mature spherical HIV-1 virions measure ~110–130 nm in diameter by cryo-electron tomography.'
      },
      es: {
        pop: 'Con unos 120 nanómetros de ancho, esta esfera furtiva es ochenta veces menor que el linfocito T.',
        blueprint: 'El chasis esférico maduro abarca ~120 nm de diámetro para tránsito sanguíneo y linfoide.',
        scientific: 'El virión esférico maduro de VIH-1 mide ~110–130 nm de diámetro por criotomografía electrónica.'
      }
    },
    'hiv.ch0.intro.03': {
      en: {
        pop: 'Plot twist: it rewrites RNA backward into DNA and splices itself into your genome like Agent Smith!',
        blueprint: 'Reverse-flow architecture: cross-compiles viral RNA into dsDNA and patches host chromosomes.',
        scientific: 'Retroviral replication reverse-transcribes (+)ssRNA into linear dsDNA for chromosomal integration.'
      },
      es: {
        pop: 'Giro de guion: pasa su ARN hacia atrás a ADN y se suelda a tus genes al estilo Matrix.',
        blueprint: 'Arquitectura inversa: compila ARN viral en ADNbc e inyecta el parche en cromosomas del huésped.',
        scientific: 'La vía retroviral retrotranscribe (+)ARNmc en ADNbc lineal para integrarlo en la cromatina.'
      }
    },
    'hiv.ch0.intro.04': {
      en: {
        pop: 'We sliced open both the stolen outer cloak and the Trojan Horse cone hiding inside.',
        blueprint: 'Cutaway view exposing the outer lipid-raft hull and the internal fullerene shielded container.',
        scientific: 'Cross-sectional view through the host-derived envelope, p17 matrix, and p24 fullerene capsid cone.'
      },
      es: {
        pop: 'Abrimos en corte tanto su capa exterior robada como el cono de Troya oculto dentro.',
        blueprint: 'Sección abierta que muestra el casco lipídico externo y el contenedor blindado de fulereno.',
        scientific: 'Sección transversal de la bicapa lipídica, la matriz p17 y la cápside cónica de fulereno p24.'
      }
    },
    'hiv.ch0.intro.05': {
      en: {
        pop: 'Hit Space to freeze the spy thriller, or click Explore to orbit the vault on your own.',
        blueprint: 'Press Space to pause the sequence, or select Explore for free-camera structural inspection.',
        scientific: 'Press Space to pause guided playback or switch to Explore for interactive 3D manipulation.'
      },
      es: {
        pop: 'Pulsa Espacio para pausar esta misión espía, o elige Explorar para volar a tu aire.',
        blueprint: 'Pulsa Espacio para detener la secuencia, o activa Explorar para inspección libre en 3D.',
        scientific: 'Pulsa Espacio para pausar el recorrido o selecciona Explorar para navegación 3D interactiva.'
      }
    },
    'hiv.ch1.env.01': {
      en: {
        pop: 'Unlike spiky coronaviruses, just 14 to 16 [[Env gp120/gp41 spikes|env]] dot this whole sphere.',
        blueprint: 'Ultra-sparse perimeter array: only ~14–16 [[Env gp120/gp41 spikes|env]] populate the entire hull.',
        scientific: 'Cryo-ET counts ~14±7 heterotrimeric [[Env gp120/gp41 spikes|env]] (PDB 4TVP) per mature virion.'
      },
      es: {
        pop: 'Al revés que otros virus, apenas 14 a 16 [[espículas Env gp120/gp41|env]] salpican la esfera.',
        blueprint: 'Red perimetral ultraescasa: solo ~14–16 [[espículas Env gp120/gp41|env]] cubren todo el casco.',
        scientific: 'La crio-ET contabiliza ~14±7 heterotrímeros [[Env gp120/gp41|env]] (PDB 4TVP) por virión maduro.'
      }
    },
    'hiv.ch1.env.02': {
      en: {
        pop: 'Clever spacing! Y-shaped antibodies cannot reach across the gap to handcuff two spikes at once.',
        blueprint: 'Wide inter-spike spacing (~23 nm) defeats bivalent IgG cross-linking and reduces antibody avidity.',
        scientific: 'Mean ~23 nm inter-trimer spacing exceeds the ~15 nm Fab-to-Fab span of human IgG antibodies.'
      },
      es: {
        pop: '¡Distancia calculada! Los anticuerpos en Y no alcanzan a esposar dos espículas a la vez.',
        blueprint: 'La separación amplia (~23 nm) impide el puenteo bivalente por IgG y reduce la avidez inmune.',
        scientific: 'El espaciado medio (~23 nm) supera el alcance Fab–Fab (~15 nm) de las inmunoglobulinas IgG.'
      }
    },
    'hiv.ch1.env.03': {
      en: {
        pop: 'Over half its weight is stolen host sugar—a Predator invisibility cloak against immune patrols!',
        blueprint: 'Dense N-linked glycan stealth coating masks conserved polypeptide epitopes from host surveillance.',
        scientific: '~85–90 N-linked oligomannose/complex glycans (~50% trimer mass) form an immunologically silent shield.'
      },
      es: {
        pop: 'Más de la mitad de su peso es azúcar robado: ¡un manto invisible estilo Depredador!',
        blueprint: 'Un denso blindaje de N-glicanos oculta los epítopos conservados frente a la vigilancia inmune.',
        scientific: '~85–90 N-glicanos por trímero (~50% de su masa) forman un escudo inmunológicamente silencioso.'
      }
    },
    'hiv.ch1.mem.01': {
      en: {
        pop: 'Its outer [[lipid bilayer|membrane]] is a tough armor patch ripped from a T-cell lipid raft.',
        blueprint: 'The outer [[lipid bilayer|membrane]] buds selectively from ordered T-cell plasma-membrane rafts.',
        scientific: 'Host-derived [[phospholipid bilayer|membrane]] buds from PI(4,5)P2-rich T-cell microdomains.'
      },
      es: {
        pop: 'Su [[bicapa lipídica|membrane]] exterior es un parche blindado robado a un linfocito T.',
        blueprint: 'La [[bicapa lipídica|membrane]] externa gema selectivamente de balsas ordenadas del linfocito T.',
        scientific: 'La [[bicapa fosfolipídica|membrane]] brota de microdominios ricos en PI(4,5)P2 de células T.'
      }
    },
    'hiv.ch1.mem.02': {
      en: {
        pop: 'Packed with cholesterol and sphingolipids, this shell stays stiffer than ordinary cell bubbles.',
        blueprint: 'High cholesterol and sphingomyelin mole fractions stiffen the hull against shear stress.',
        scientific: 'Liquid-ordered cholesterol and sphingomyelin enrichment increases bilayer rigidity and stability.'
      },
      es: {
        pop: 'Repleta de colesterol y esfingolípidos, esta coraza es más rígida que una membrana común.',
        blueprint: 'La alta fracción de colesterol y esfingomielina endurece el casco frente al estrés mecánico.',
        scientific: 'El enriquecimiento en colesterol y esfingomielina en fase líquido-ordenada rigidiza la envoltura.'
      }
    },
    'hiv.ch1.ma.01': {
      en: {
        pop: 'Under the hood, [[p17 Matrix (MA) trimers|ma]] line the shell like geodesic dome ribs.',
        blueprint: 'Sub-membrane [[p17 Matrix (MA) trimers|ma]] form an inner hexagonal structural liner.',
        scientific: '~2,500–4,000 monomers assemble into [[p17 Matrix (MA) trimers|ma]] (PDB 1HIW) beneath the leaflet.'
      },
      es: {
        pop: 'Bajo el capó, los [[trímeros de matriz p17 (MA)|ma]] forran el casco como vigas geodésicas.',
        blueprint: 'Los [[trímeros de matriz p17 (MA)|ma]] forman un revestimiento estructural hexagonal interno.',
        scientific: '~2.500–4.000 copias forman una red de [[trímeros de matriz p17 (MA)|ma]] (PDB 1HIW) submembrana.'
      }
    },
    'hiv.ch1.ma.02': {
      en: {
        pop: 'Greasy myristoyl anchors plug MA into the membrane while corralling long Env tails into place.',
        blueprint: 'N-terminal myristoyl anchors lock MA into the inner leaflet and capture gp41 cytoplasmic tails.',
        scientific: 'N-myristoyl switches and basic HBR patches bind PI(4,5)P2 while engaging gp41 C-terminal tails.'
      },
      es: {
        pop: 'Anclas grasas de miristoílo clavan MA en la bicapa y sujetan las largas colas de Env.',
        blueprint: 'Grupos miristoílo N-terminales fijan MA a la cara interna y reclutan las colas de gp41.',
        scientific: 'El grupo N-miristoílo y parches básicos unen PI(4,5)P2 mientras reclutan el dominio intracelular gp41.'
      }
    },
    'hiv.ch2.cap.01': {
      en: {
        pop: 'Meet the Trojan Horse itself: the armored [[fullerene cone capsid|capsid]] smuggling the heist crew!',
        blueprint: 'Core payload bay: the closed [[fullerene cone capsid|capsid]] shields enzymes from host sensors.',
        scientific: 'Central ~60 × 32 nm [[fullerene cone capsid|capsid]] (PDB 3J3Q) cloaks viral nucleic acids from cGAS.'
      },
      es: {
        pop: 'He aquí el Caballo de Troya: ¡la [[cápside cónica de fulereno|capsid]] que infiltra al equipo!',
        blueprint: 'Bahía central: la [[cápside cónica de fulereno|capsid]] blinda las enzimas frente a alarmas.',
        scientific: 'La [[cápside cónica de fulereno|capsid]] (~60 × 32 nm, PDB 3J3Q) oculta el genoma ante sensores cGAS.'
      }
    },
    'hiv.ch2.cap.02': {
      en: {
        pop: 'Around 216 six-sided p24 armor plates lock edge to edge like a sci-fi honeycomb hull.',
        blueprint: 'Approximately 216 hexameric p24 CA tiles form the curved honeycombed side walls.',
        scientific: '~216 planar p24 CA hexamers (~1,300 total 231-aa subunits, PDB 3H4E) tile the curved lattice.'
      },
      es: {
        pop: 'Unas 216 placas hexagonales p24 encajan borde con borde como un panal de ciencia ficción.',
        blueprint: 'Alrededor de 216 losetas hexaméricas p24 CA conforman las paredes laterales alveoladas.',
        scientific: '~216 hexámeros de p24 CA (~1.300 subunidades de 231 aa, PDB 3H4E) pavimentan la pared curva.'
      }
    },
    'hiv.ch2.cap.03': {
      en: {
        pop: 'Each hexagon has a tiny iris that vacuums in host DNA letters while locking alarm sensors out!',
        blueprint: 'Electropositive hexamer pores import cytosolic dNTP fuel while keeping cGAS sensors outside.',
        scientific: 'Dynamic ~8 Å Arg18 β-hairpin pores coordinate IP6 and import anionic dNTPs for intraluminal synthesis.'
      },
      es: {
        pop: 'Cada hexágono abre un iris que aspira letras de ADN celular y deja fuera a los guardias.',
        blueprint: 'Poros electropositivos importan combustible dNTP citosólico sin exponer la carga a sensores cGAS.',
        scientific: 'Poros dinámicos Arg18 (~8 Å) coordinan IP6 e importan dNTP aniónicos para síntesis intraluminal.'
      }
    },
    'hiv.ch2.pent.01': {
      en: {
        pop: 'Same math rule as a Champions League soccer ball: flat hexagons cannot close without 12 pentagons!',
        blueprint: 'Euler polyhedral topology mandates exactly 12 pentagonal defects to close any hexagonal mesh.',
        scientific: 'By Euler’s theorem (V − E + F = 2), closing any 3-valent hexagonal lattice requires 12 pentagons.'
      },
      es: {
        pop: 'La misma ley matemática de un balón de fútbol: ¡ningún panal cierra sin 12 pentágonos!',
        blueprint: 'La topología poliedral de Euler exige exactamente 12 defectos pentagonales para cerrar la malla.',
        scientific: 'Por el teorema de Euler (V − E + F = 2), cerrar una red hexagonal trivalente exige 12 pentágonos.'
      }
    },
    'hiv.ch2.pent.02': {
      en: {
        pop: 'Instead of spacing them evenly, HIV packs 5 [[CA pentamers|pentamer]] up front and 7 in back.',
        blueprint: 'Asymmetric placement: 5 [[CA pentamers|pentamer]] cap the narrow nose and 7 close the wide base.',
        scientific: 'Five [[p24 CA pentamers|pentamer]] (PDB 3P05) sit at the ~16 nm apex and seven at the ~32 nm cap.'
      },
      es: {
        pop: 'En vez de repartirlos igual, junta 5 [[pentámeros de CA|pentamer]] en la punta y 7 detrás.',
        blueprint: 'Distribución asimétrica: 5 [[pentámeros de CA|pentamer]] en el morro y 7 en la cúpula ancha.',
        scientific: 'Cinco [[pentámeros de CA|pentamer]] (PDB 3P05) cierran el ápice (~16 nm) y siete la base (~32 nm).'
      }
    },
    'hiv.ch2.pent.03': {
      en: {
        pop: 'That lopsided 5-to-7 split sculpts a sleek nosecone narrow enough to squeeze into a nuclear pore!',
        blueprint: 'The 5:7 defect gradient generates a tapered nosecone sized to dock into nuclear pore channels.',
        scientific: 'Asymmetric Gaussian curvature produces the pear-shaped cone that traverses FG-nucleoporin channels.'
      },
      es: {
        pop: '¡Ese reparto 5 a 7 talla una punta fina capaz de colarse entera por un poro nuclear!',
        blueprint: 'El gradiente 5:7 genera una ojiva cónica dimensionada para cruzar el complejo de poro nuclear.',
        scientific: 'La curvatura gaussiana asimétrica moldea el cono que cruza íntegro las nucleoporinas FG.'
      }
    },
    'hiv.ch3.rna.01': {
      en: {
        pop: 'Tucked inside are twin copies of the 9.7 kb [[(+)ssRNA genome|rna]]—built-in RAID-1 backup scrolls!',
        blueprint: 'Dual-redundant storage: two 9.7 kb [[(+)ssRNA genome|rna]] strands ride inside the closed cone.',
        scientific: 'A noncovalently dimerized diploid 9,719-nt [[(+)ssRNA genome|rna]] coated by NCp7 fills the core.'
      },
      es: {
        pop: 'Dentro viajan dos copias gemelas del [[genoma de (+)ARNmc|rna]] de 9,7 kb: ¡respaldo doble!',
        blueprint: 'Almacenamiento redundante: dos hebras de [[genoma de (+)ARNmc|rna]] de 9,7 kb ocupan la bóveda.',
        scientific: 'Un [[genoma diploide de (+)ARNmc|rna]] dimerizado (2 × 9.719 nt) recubierto por NCp7 ocupa el cono.'
      }
    },
    'hiv.ch3.rna.02': {
      en: {
        pop: 'If host defenses nick one scroll, the copying enzyme parkour-jumps onto the twin and keeps running!',
        blueprint: 'Diploid redundancy enables template-switching failover across strand breaks and drives recombination.',
        scientific: 'Copy-choice strand transfer across the dimeric RNA bypasses nicks and generates chimeric recombinants.'
      },
      es: {
        pop: 'Si una hebra sufre un corte, la enzima salta al pergamino gemelo como en parkour y sigue.',
        blueprint: 'La redundancia diploide permite conmutación de molde ante roturas y acelera la recombinación.',
        scientific: 'La transferencia de hebra entre ambos ARN esquiva roturas y genera recombinantes quiméricos.'
      }
    },
    'hiv.ch3.rt.01': {
      en: {
        pop: 'Breaking biology’s one-way street, [[Reverse Transcriptase (RT)|rt]] rewrites RNA backward into DNA!',
        blueprint: 'Cross-compiler [[Reverse Transcriptase (RT)|rt]] transcodes viral ssRNA into linear dsDNA.',
        scientific: 'Heterodimeric [[Reverse Transcriptase (RT)|rt]] (p66/p51, PDB 1RTD) synthesizes linear proviral dsDNA.'
      },
      es: {
        pop: 'Rompiendo la regla central, la [[transcriptasa inversa (RT)|rt]] reescribe ARN hacia atrás en ADN.',
        blueprint: 'El compilador cruzado [[transcriptasa inversa (RT)|rt]] convierte ARNmc viral en ADNbc lineal.',
        scientific: 'El heterodímero [[transcriptasa inversa (RT)|rt]] (p66/p51, PDB 1RTD) sintetiza ADNbc lineal.'
      }
    },
    'hiv.ch3.rt.02': {
      en: {
        pop: 'Like a Mission: Impossible tape, its rear RNase H blade shreds the original RNA as it copies!',
        blueprint: 'Integrated C-terminal RNase H endonuclease degrades the consumed RNA template behind the polymerase.',
        scientific: 'The p66 RNase H domain hydrolyzes RNA in RNA:DNA hybrids while sparing polypurine tract primers.'
      },
      es: {
        pop: 'Como cinta de Misión Imposible, su cuchilla RNasa H tritura el molde de ARN tras leerlo.',
        blueprint: 'El módulo C-terminal RNasa H degrada la plantilla de ARN a medida que avanza la síntesis.',
        scientific: 'El dominio RNasa H de p66 hidroliza el ARN del híbrido ARN:ADN respetando el cebador PPT.'
      }
    },
    'hiv.ch3.rt.03': {
      en: {
        pop: 'Zero spellcheck! Like Pokémon’s Ditto, constant typos help HIV morph past drugs and antibodies.',
        blueprint: 'Absence of 3′→5′ proofreading injects ~1 mutation per cycle, fueling rapid immune escape.',
        scientific: 'Lacking 3′→5′ exonuclease activity (~1–3 × 10⁻⁵ errors/nt), RT drives rapid quasispecies evolution.'
      },
      es: {
        pop: '¡Cero corrector! Como Ditto en Pokémon, sus erratas constantes le permiten burlar fármacos.',
        blueprint: 'Sin corrección 3′→5′, introduce ~1 mutación por ciclo e impulsa una rápida evasión inmune.',
        scientific: 'Carente de exonucleasa 3′→5′ (~1–3 × 10⁻⁵ errores/nt), genera diversas cuasiespecies mutantes.'
      }
    },
    'hiv.ch3.int.01': {
      en: {
        pop: 'Once the forged DNA is ready, [[Integrase (IN)|int]] clamps both ends like a molecular welder.',
        blueprint: 'Splice injector [[Integrase (IN)|int]] oligomerizes onto both LTR ends of the newly built cDNA.',
        scientific: 'Tetrameric [[Integrase (IN)|int]] (PDB 1EX4, 3OS0) assembles an intasome on viral U3/U5 DNA ends.'
      },
      es: {
        pop: 'Listo el ADN falsificado, la [[integrasa (IN)|int]] sujeta ambos cabos como un soldador molecular.',
        blueprint: 'El inyector [[integrasa (IN)|int]] se ensambla sobre ambos extremos LTR del ADNc recién creado.',
        scientific: 'La [[integrasa (IN)|int]] tetramérica (PDB 1EX4, 3OS0) forma el intasoma en los extremos U3/U5.'
      }
    },
    'hiv.ch3.int.02': {
      en: {
        pop: 'Deep in the nucleus, it stitches HIV permanently into a human chromosome—Agent Smith is now resident!',
        blueprint: 'Inside the nucleus, strand transfer patches viral dsDNA permanently into host chromosomal DNA.',
        scientific: '3′-CA dinucleotide processing and 5-bp staggered transesterification integrate DNA into chromatin.'
      },
      es: {
        pop: 'En el núcleo, cose el VIH para siempre en un cromosoma humano: ¡Agente Smith instalado!',
        blueprint: 'En el núcleo, suelda de forma irreversible el ADNbc viral dentro de un cromosoma activo.',
        scientific: 'El corte 3′-CA y la transesterificación escalonada de 5 pb integran el ADN en cromatina activa.'
      }
    },
    'hiv.ch3.entry.01': {
      en: {
        pop: 'Two-factor heist below: [[Env gp120|env]] clicks [[CD4 and CCR5 receptors|cd4]] in sequence!',
        blueprint: 'Two-step authentication: [[Env gp120|env]] engages host [[CD4 and CCR5 receptors|cd4]] sequentially.',
        scientific: 'Trimeric [[Env gp120|env]] binds [[CD4 and chemokine coreceptor CCR5|cd4]] on helper T cells.'
      },
      es: {
        pop: 'Doble llave abajo: [[Env gp120|env]] gira en orden los [[receptores CD4 y CCR5|cd4]].',
        blueprint: 'Autenticación dual: [[Env gp120|env]] acopla secuencialmente los [[receptores CD4 y CCR5|cd4]].',
        scientific: 'El trímero [[Env gp120|env]] fija [[receptores CD4 y el correceptor CCR5|cd4]] en linfocitos T.'
      }
    },
    'hiv.ch3.entry.02': {
      en: {
        pop: 'Both locks turn and—snap!—gp41 folds into a six-helix winch that fuses virus and T-cell.',
        blueprint: 'gp41 refolds into a thermostable six-helix bundle winch, merging viral and plasma membranes.',
        scientific: 'gp41 HR1/HR2 heptad repeats zip into an antiparallel six-helix bundle (PDB 1AIK) for fusion.'
      },
      es: {
        pop: 'Al girar ambas llaves, gp41 salta en un cabrestante de seis hélices que funde las membranas.',
        blueprint: 'gp41 colapsa en un cabrestante termoestable de seis hélices y fusiona ambas bicapas.',
        scientific: 'Las regiones HR1/HR2 de gp41 cierran un haz antiparalelo de seis hélices (PDB 1AIK) fusogénico.'
      }
    },
    'hiv.ch3.entry.03': {
      en: {
        pop: 'Spliced in as a sleeper [[provirus|cd4]], the hijacked T-cell now prints HIV on command!',
        blueprint: 'Committed as chromosomal [[provirus|cd4]] firmware, host RNA Pol II transcribes new virions.',
        scientific: 'Integrated [[provirus|cd4]] templates Tat-boosted host Pol II transcription of progeny HIV-1 RNA.'
      },
      es: {
        pop: 'Oculto como [[provirus|cd4]] durmiente, el linfocito secuestrado fabrica ahora copias de VIH.',
        blueprint: 'Instalado como firmware de [[provirus|cd4]], la Pol II huésped transcribe nuevos viriones.',
        scientific: 'El [[provirus|cd4]] integrado dirige la transcripción por Pol II potenciada por Tat de ARN hijos.'
      }
    },
    'hiv.ch4.flows.01': {
      en: {
        pop: 'Watch the full spy operation unfold—from two-key border breach to permanent DNA takeover!',
        blueprint: 'End-to-end pipeline: trace coreceptor docking, capsid import, cDNA compilation, and splicing.',
        scientific: 'Dynamic overview of CD4/CCR5 fusion, intraluminal reverse transcription, and nuclear integration.'
      },
      es: {
        pop: 'Sigue toda la operación encubierta: desde la doble cerradura hasta el secuestro del ADN.',
        blueprint: 'Flujo completo: sigue el anclaje dual, entrada del cono, compilación de ADNc e integración.',
        scientific: 'Secuencia cinética desde la fusión CD4/CCR5 hasta la retrotranscripción e integración nuclear.'
      }
    },
    'hiv.ch4.sig.01': {
      en: {
        pop: 'Handshake confirmed: [[Env|env]] on [[CD4/CCR5|cd4]] fires the harpoon and opens the border!',
        blueprint: '[[Env|env]] engagement across [[CD4/CCR5|cd4]] triggers gp41 actuation and pore opening.',
        scientific: 'Sequential [[Env|env]]–[[CD4/CCR5|cd4]] binding allosterically triggers neutral-pH membrane merger.'
      },
      es: {
        pop: 'Contraseña aceptada: [[Env|env]] en [[CD4/CCR5|cd4]] dispara el arpón y abre la frontera.',
        blueprint: 'El acople de [[Env|env]] sobre [[CD4/CCR5|cd4]] activa el cabrestante gp41 y abre el poro.',
        scientific: 'La unión secuencial [[Env|env]]–[[CD4/CCR5|cd4]] dispara alostéricamente la fusión a pH neutro.'
      }
    },
    'hiv.ch4.sig.02': {
      en: {
        pop: 'Slipping indoors, the [[fullerene cone|capsid]] slurps up host dNTP fuel through hexamer pores.',
        blueprint: 'Intact [[fullerene cone|capsid]] transits inward while importing cytosolic dNTPs via R18 irises.',
        scientific: 'Cytosolic [[fullerene cone|capsid]] engages microtubules and imports dNTPs through Arg18 pores.'
      },
      es: {
        pop: 'Ya dentro, el [[cono de fulereno|capsid]] aspira combustible dNTP por sus poros hexagonales.',
        blueprint: 'El [[cono de fulereno|capsid]] avanza intacto importando dNTP citosólicos por sus iris R18.',
        scientific: 'El [[cono de fulereno|capsid]] recorre microtúbulos e importa dNTP mediante poros de Arg18.'
      }
    },
    'hiv.ch4.cdna.01': {
      en: {
        pop: 'Inside the dark vault, [[Reverse Transcriptase|rt]] forges sturdy double-stranded DNA from RNA.',
        blueprint: 'Inside the shielded cone, [[Reverse Transcriptase|rt]] compiles twin ssRNAs into linear cDNA.',
        scientific: 'Intracapsid [[Reverse Transcriptase|rt]] completes minus/plus-strand synthesis of 9.7 kbp cDNA.'
      },
      es: {
        pop: 'A oscuras en la bóveda, la [[transcriptasa inversa|rt]] forja ADN resistente a partir de ARN.',
        blueprint: 'Dentro del cono blindado, la [[transcriptasa inversa|rt]] compila el ARN en ADNc lineal.',
        scientific: 'La [[transcriptasa inversa|rt]] intracapsídica completa las hebras negativa y positiva del ADNc.'
      }
    },
    'hiv.ch4.cdna.02': {
      en: {
        pop: 'Finally [[Integrase|int]] welds that forged DNA forever into the [[T-cell genome|cd4]]!',
        blueprint: '[[Integrase|int]] splices the linear cDNA payload permanently into the [[T-cell genome|cd4]].',
        scientific: 'LEDGF/p75-guided [[Integrase|int]] catalyzes strand transfer into active [[T-cell chromatin|cd4]].'
      },
      es: {
        pop: 'Por último, la [[integrasa|int]] suelda para siempre ese ADN en el [[genoma del linfocito T|cd4]].',
        blueprint: 'La [[integrasa|int]] inserta de modo permanente el ADNc en el [[genoma del linfocito T|cd4]].',
        scientific: 'Guiada por LEDGF/p75, la [[integrasa|int]] integra el ADNc en el [[genoma del linfocito T|cd4]].'
      }
    },
    'hiv.ch5.roll.01': {
      en: {
        pop: 'Env gp120/gp41 trimer: sugar-armored two-key lockpick spaced wide to dodge antibodies.',
        blueprint: 'Env gp120/gp41 trimer: sparse glycan-cloaked two-factor receptor and fusion module.',
        scientific: 'Env gp120/gp41 heterotrimer (~14 copies, PDB 4TVP): glycosylated CD4/CCR5 class I fusogen.'
      },
      es: {
        pop: 'Trímero Env gp120/gp41: ganzúa de doble llave camuflada en azúcar contra anticuerpos.',
        blueprint: 'Trímero Env gp120/gp41: módulo escaso de doble autenticación y fusión blindado en glicanos.',
        scientific: 'Heterotrímero Env gp120/gp41 (~14 copias, PDB 4TVP): fusógeno de clase I afín a CD4/CCR5.'
      }
    },
    'hiv.ch5.roll.02': {
      en: {
        pop: 'Lipid-raft envelope: a stiff, cholesterol-packed cloak stolen from a T-cell.',
        blueprint: 'Cholesterol-rich envelope: rigid liquid-ordered phospholipid hull budded from T-cell rafts.',
        scientific: 'Cholesterol/sphingomyelin-enriched host lipid-raft bilayer (~120 nm outer virion diameter).'
      },
      es: {
        pop: 'Envoltura lipídica: coraza rígida rica en colesterol robada a un linfocito T.',
        blueprint: 'Envoltura rica en colesterol: casco fosfolipídico rígido gemado de balsas de células T.',
        scientific: 'Bicapa derivada de balsas lipídicas rica en colesterol y esfingomielina (~120 nm de diámetro).'
      }
    },
    'hiv.ch5.roll.03': {
      en: {
        pop: 'p17 Matrix (MA) shell: greasy-anchored inner dome ribs holding Env spikes in place.',
        blueprint: 'p17 Matrix (MA) lattice: myristoylated inner liner anchoring gp41 cytoplasmic tails.',
        scientific: 'Myristoylated p17 Matrix (MA) homotrimer shell (132 aa, PDB 1HIW) bound to inner PI(4,5)P2.'
      },
      es: {
        pop: 'Matriz p17 (MA): costillas internas con anclas grasas que sujetan las espículas Env.',
        blueprint: 'Red de matriz p17 (MA): forro interno miristoilado que fija las colas citoplasmáticas gp41.',
        scientific: 'Corteza homotrimérica miristoilada de Matriz p17 (132 aa, PDB 1HIW) unida a PI(4,5)P2.'
      }
    },
    'hiv.ch5.roll.04': {
      en: {
        pop: 'p24 Capsid (CA) cone: the Trojan Horse honeycomb vault with dNTP-slurping pores.',
        blueprint: 'p24 Capsid (CA) hexamer cone: ~216-tile fullerene container with selective dNTP import pores.',
        scientific: 'p24 Capsid (CA) fullerene cone (~216 hexamers, 231 aa, PDB 3H4E/3J3Q) with Arg18 dNTP pores.'
      },
      es: {
        pop: 'Cono de cápside p24 (CA): bóveda de Troya en panal con poros que aspiran dNTP.',
        blueprint: 'Cono hexamérico p24 (CA): contenedor de ~216 losetas con poros selectivos para dNTP.',
        scientific: 'Cono de fulereno p24 CA (~216 hexámeros, 231 aa, PDB 3H4E/3J3Q) con poros Arg18 para dNTP.'
      }
    },
    'hiv.ch5.roll.05': {
      en: {
        pop: '12 p24 pentamers: Euler’s 5-front, 7-back corner tiles that taper the stealth cone.',
        blueprint: '12 p24 CA vertex pentamers: 5:7 topological defects closing and tapering the fullerene cone.',
        scientific: 'Twelve five-fold p24 CA pentamers (PDB 3P05; 5 apical, 7 basal) enforcing Euler closure.'
      },
      es: {
        pop: '12 pentámeros p24: esquinas de Euler (5 delante, 7 detrás) que afilan el cono furtivo.',
        blueprint: '12 pentámeros de vértice p24: defectos 5:7 que cierran y perfilan el cono de fulereno.',
        scientific: 'Doce pentámeros p24 CA de simetría quíntuple (PDB 3P05; 5 apicales, 7 basales) de cierre.'
      }
    },
    'hiv.ch5.roll.06': {
      en: {
        pop: 'Diploid 9.7 kb (+)ssRNA: twin genetic scrolls allowing parkour jumps past strand breaks.',
        blueprint: 'Diploid 9.7 kb (+)ssRNA: dual-redundant genome enabling copy-choice failover.',
        scientific: 'Dimeric 2 × 9,719-nt (+)ssRNA genome complexed with NCp7 and tRNA^Lys3 primer.'
      },
      es: {
        pop: 'Genoma diploide (+)ARNmc de 9,7 kb: dos pergaminos gemelos para saltar sobre roturas.',
        blueprint: 'Carga diploide (+)ARNmc de 9,7 kb: doble hebra redundante con conmutación ante fallos.',
        scientific: 'Genoma dimérico 2 × 9.719 nt de (+)ARNmc acomplejado con NCp7 y cebador tRNA^Lys3.'
      }
    },
    'hiv.ch5.roll.07': {
      en: {
        pop: 'Reverse Transcriptase: the typo-prone forger rewriting RNA backward while shredding clues.',
        blueprint: 'Reverse Transcriptase (p66/p51): error-prone RNA-to-dsDNA compiler with RNase H shredder.',
        scientific: 'p66/p51 Reverse Transcriptase heterodimer (PDB 1RTD): DNA polymerase + RNase H, exonuclease-null.'
      },
      es: {
        pop: 'Transcriptasa inversa: falsificadora sin corrector que pasa ARN a ADN y tritura pistas.',
        blueprint: 'Transcriptasa inversa (p66/p51): compilador ARN-a-ADNbc acoplado a endonucleasa RNasa H.',
        scientific: 'Heterodímero p66/p51 de Transcriptasa Inversa (PDB 1RTD): polimerasa y RNasa H sin exonucleasa.'
      }
    },
    'hiv.ch5.roll.08': {
      en: {
        pop: 'Integrase tetramer: the Agent Smith welder splicing HIV DNA into human chromosomes.',
        blueprint: 'Integrase (IN) tetramer: nuclear intasome splicing linear cDNA into host chromatin.',
        scientific: 'Tetrameric Integrase (IN, 288 aa, PDB 1EX4/3OS0): DDE recombinase catalyzing strand transfer.'
      },
      es: {
        pop: 'Tetrámero de integrasa: el soldador estilo Matrix que cose ADN viral en cromosomas humanos.',
        blueprint: 'Tetrámero de integrasa (IN): intasoma nuclear que empalma ADNc lineal en la cromatina.',
        scientific: 'Integrasa tetramérica (IN, 288 aa, PDB 1EX4/3OS0): recombinasa DDE de transferencia de hebra.'
      }
    },
    'hiv.ch5.roll.09': {
      en: {
        pop: 'Host CD4/CCR5 & provirus: the two-key T-cell doorway and the sleeper code inside.',
        blueprint: 'Host CD4/CCR5 & proviral DNA: dual entry port and integrated chromosomal persistence state.',
        scientific: 'Host CD4 (PDB 1GC1), CCR5 coreceptor (PDB 6MEO), and integrated 9.7 kbp chromosomal provirus.'
      },
      es: {
        pop: 'CD4/CCR5 y provirus: la puerta de doble llave del linfocito T y el código durmiente.',
        blueprint: 'CD4/CCR5 y ADN proviral: puerto de doble llave y estado persistente integrado en cromatina.',
        scientific: 'Receptor CD4 (PDB 1GC1), correceptor CCR5 (PDB 6MEO) y provirus integrado de 9,7 kpb.'
      }
    },
    'hiv.ch5.exp.01': {
      en: {
        pop: 'Mission briefing complete—take the helm and inspect HIV-1’s stealth tech solo!',
        blueprint: 'Guided briefing complete. Interactive inspection of the HIV-1 architecture is now active.',
        scientific: 'Guided tour complete; explore the mature HIV-1 virion and T-cell synapse interactively.'
      },
      es: {
        pop: 'Informe completado: toma el mando y examina en solitario el equipo furtivo del VIH-1.',
        blueprint: 'Secuencia guiada finalizada. Inspección libre de la arquitectura del VIH-1 activada.',
        scientific: 'Recorrido finalizado; explora interactivamente el virión maduro de VIH-1 y su sinapsis.'
      }
    },
    'hiv.ch5.exp.02': {
      en: {
        pop: 'Click any tag to zoom into crystal-clear PDB coordinates of every heist tool!',
        blueprint: 'Click any component tag to load its experimental atomic coordinates from the PDB.',
        scientific: 'Select any structural label to inspect X-ray crystallographic and cryo-EM PDB coordinates.'
      },
      es: {
        pop: 'Pulsa cualquier etiqueta para ver al átomo las herramientas reales del atraco en el PDB.',
        blueprint: 'Haz clic en cualquier etiqueta para cargar sus coordenadas atómicas experimentales del PDB.',
        scientific: 'Selecciona cualquier etiqueta para inspeccionar sus coordenadas cristalográficas y crio-ME.'
      }
    },
    'hiv.det.rcone.01': {
      en: {
        pop: 'Behold the Trojan Horse vault: 216 p24 hexagons and 12 pentagons snapped into stealth armor!',
        blueprint: 'Closed fullerene container built from ~216 p24 hexamer tiles and 12 vertex pentamers.',
        scientific: 'Mature ~60 × 32 nm fullerene cone (PDB 3J3Q) comprising ~216 CA hexamers and 12 pentamers.'
      },
      es: {
        pop: 'Contempla el Caballo de Troya: 216 hexágonos p24 y 12 pentágonos en blindaje furtivo.',
        blueprint: 'Contenedor cerrado de fulereno ensamblado con ~216 hexámeros p24 y 12 pentámeros.',
        scientific: 'Cono maduro de ~60 × 32 nm (PDB 3J3Q) formado por ~216 hexámeros CA y 12 pentámeros.'
      }
    },
    'hiv.det.rcone.02': {
      en: {
        pop: 'Five pentagons pinch the narrow nose while seven round off the wide rear dome.',
        blueprint: 'Five pentamers shape the ~16 nm nosecone while seven close the ~32 nm rear cap.',
        scientific: 'Asymmetric Euler closure places 5 pentamers at the narrow apex and 7 across the wide base.'
      },
      es: {
        pop: 'Cinco pentágonos afilan la nariz estrecha mientras siete redondean la cúpula trasera.',
        blueprint: 'Cinco pentámeros perfilan la punta de ~16 nm y siete cierran el extremo ancho de ~32 nm.',
        scientific: 'El cierre asimétrico de Euler sitúa 5 pentámeros en el ápice estrecho y 7 en la base.'
      }
    },
    'hiv.det.rcone.03': {
      en: {
        pop: 'Positively charged hexamer pores act like one-way vacuum nozzles sucking dNTP bricks inside!',
        blueprint: 'Electropositive Arg18 channels draw anionic dNTP substrates into the sealed reaction bay.',
        scientific: 'Hexameric Arg18 rings coordinate IP6 and selectively import cytosolic dNTPs (~8 Å pore).'
      },
      es: {
        pop: 'Poros positivos en cada hexágono aspiran ladrillos de ADN como boquillas unidireccionales.',
        blueprint: 'Los canales electropositivos Arg18 importan sustratos dNTP aniónicos al interior sellado.',
        scientific: 'Anillos hexaméricos de Arg18 coordinan IP6 e importan selectivamente dNTP por poros de ~8 Å.'
      }
    },
    'hiv.det.rrt.01': {
      en: {
        pop: 'Master forger at work (PDB 1RTD): Reverse Transcriptase spinning fragile RNA into tough dsDNA!',
        blueprint: 'Compiler core (PDB 1RTD): Reverse Transcriptase converts single-stranded RNA into dsDNA.',
        scientific: 'p66/p51 Reverse Transcriptase (PDB 1RTD) catalyzes RNA- and DNA-dependent dsDNA synthesis.'
      },
      es: {
        pop: 'El maestro falsificador en acción (PDB 1RTD): convierte frágil ARN en resistente ADNbc.',
        blueprint: 'Núcleo compilador (PDB 1RTD): la transcriptasa inversa traduce ARN monocatenario a ADNbc.',
        scientific: 'El heterodímero p66/p51 (PDB 1RTD) cataliza síntesis de ADNbc dependiente de ARN y ADN.'
      }
    },
    'hiv.det.rrt.02': {
      en: {
        pop: 'Next up, Integrase (PDB 1EX4) clips the DNA tips and splices them straight into host chromatin.',
        blueprint: 'Downstream injector Integrase (PDB 1EX4) trims 3′ ends and splices viral DNA into chromatin.',
        scientific: 'Integrase (PDB 1EX4) cleaves 3′-GT dinucleotides before staggered transesterification into host DNA.'
      },
      es: {
        pop: 'Acto seguido, la integrasa (PDB 1EX4) recorta puntas y suelda el ADN en la cromatina.',
        blueprint: 'El inyector integrasa (PDB 1EX4) procesa los extremos 3′ e inserta el ADN en cromatina.',
        scientific: 'La integrasa (PDB 1EX4) escinde dinucleótidos 3′-GT antes de la transferencia al ADN huésped.'
      }
    },
    'hiv.det.rent.01': {
      en: {
        pop: 'Watch the safe click open: Env gp120 (PDB 4TVP) grabs CD4, twists, and snags CCR5!',
        blueprint: 'Sequential lock: gp120 (PDB 4TVP) binds CD4, exposing its bridging sheet to latch CCR5.',
        scientific: 'Prefusion gp120 (PDB 4TVP) engages CD4 D1, allosterically exposing V3 to bind GPCR CCR5.'
      },
      es: {
        pop: 'Mira abrirse la caja fuerte: Env gp120 (PDB 4TVP) toma CD4, gira y atrapa CCR5.',
        blueprint: 'Cerradura secuencial: gp120 (PDB 4TVP) fija CD4 y despliega su bucle hacia CCR5.',
        scientific: 'gp120 en prefusión (PDB 4TVP) une CD4 D1, exponiendo alostéricamente V3 hacia el GPCR CCR5.'
      }
    },
    'hiv.det.rent.02': {
      en: {
        pop: 'gp41 snaps both membranes together while RT and Integrase turn the cell into a sleeper factory!',
        blueprint: 'gp41 winches both bilayers into fusion while RT and IN install the chromosomal provirus.',
        scientific: 'gp41 6HB refolding fuses the T-cell membrane ahead of RT cDNA synthesis and IN integration.'
      },
      es: {
        pop: 'gp41 funde las membranas mientras RT e IN convierten la célula en fábrica durmiente.',
        blueprint: 'gp41 fusiona ambas bicapas mientras RT e IN instalan el provirus en el cromosoma.',
        scientific: 'El pliegue 6HB de gp41 funde la membrana antes de la síntesis por RT e integración por IN.'
      }
    },
    'hiv.det.sch.01': {
      en: {
        pop: 'Clean spy schematic: stiff cholesterol hull, p17 inner liner, and widely spaced Env clubs.',
        blueprint: 'Isolated hull cutaway: cholesterol-enriched bilayer, p17 MA liner, and sparse Env trimers.',
        scientific: 'Schematic HIV-1 section: raft phospholipid envelope, trimeric p17 MA shell, and ~14 Env spikes.'
      },
      es: {
        pop: 'Plano limpio del espía: casco de colesterol, forro p17 y escasas mazas Env afuera.',
        blueprint: 'Corte aislado del casco: bicapa rica en colesterol, forro p17 MA y trímeros Env dispersos.',
        scientific: 'Sección esquemática de VIH-1: bicapa de balsa lipídica, matriz p17 y ~14 espículas Env.'
      }
    },
    'hiv.det.sch.02': {
      en: {
        pop: 'Centered inside sits the fullerene stealth cone packing twin RNA scrolls, RT, and Integrase.',
        blueprint: 'Central fullerene container houses the diploid RNA payload alongside RT and Integrase.',
        scientific: 'Luminal p24 fullerene capsid encloses dimeric 9.7 kb (+)ssRNA, p66/p51 RT, and tetrameric IN.'
      },
      es: {
        pop: 'En el centro viaja el cono furtivo de fulereno con dos rollos de ARN, RT e integrasa.',
        blueprint: 'El contenedor central de fulereno aloja la carga diploide de ARN junto a RT e integrasa.',
        scientific: 'El cono de fulereno p24 encierra el (+)ARNmc dimérico de 9,7 kb, RT p66/p51 e IN tetramérica.'
      }
    },
    'hiv.det.env.01': {
      en: {
        pop: 'Crystal freeze-frame (PDB 4TVP): HIV’s sugar-shielded gp120/gp41 spike cocked in prefusion!',
        blueprint: 'X-ray structure of the closed prefusion HIV-1 Env gp120/gp41 heterotrimer (PDB 4TVP).',
        scientific: '3.1 Å crystal structure of the SOSIP-stabilized prefusion HIV-1 Env gp120/gp41 trimer (PDB 4TVP).'
      },
      es: {
        pop: 'Captura cristalina (PDB 4TVP): la espícula gp120/gp41 blindada en azúcar antes de saltar.',
        blueprint: 'Estructura cristalográfica del heterotrímero Env gp120/gp41 cerrado en prefusión (PDB 4TVP).',
        scientific: 'Estructura cristalina a 3,1 Å del trímero Env gp120/gp41 estabilizado en prefusión (PDB 4TVP).'
      }
    },
    'hiv.det.env.02': {
      en: {
        pop: 'Three gp120 crowns pick the CD4/CCR5 locks while three gp41 harpoons wait coiled underneath.',
        blueprint: 'Three apical gp120 subunits handle dual-receptor auth; three gp41 stalks drive fusion.',
        scientific: 'Three surface gp120 subunits cap three transmembrane gp41 fusion-peptide/HR1/HR2 stalks.'
      },
      es: {
        pop: 'Tres coronas gp120 abren CD4/CCR5 mientras tres arpones gp41 aguardan tensos debajo.',
        blueprint: 'Tres subunidades gp120 gestionan el doble receptor; tres tallos gp41 ejecutan la fusión.',
        scientific: 'Tres subunidades externas gp120 cubren tres tallos transmembrana gp41 con hélices HR1/HR2.'
      }
    },
    'hiv.det.ma.01': {
      en: {
        pop: 'Three-cornered inner armor plate (PDB 1HIW): the p17 Matrix protein in crystal detail!',
        blueprint: 'X-ray crystal structure of the homotrimeric p17 Matrix sub-membrane scaffold (PDB 1HIW).',
        scientific: '2.3 Å crystal structure of the trimeric HIV-1 p17 Matrix protein (PDB 1HIW, 3 × 132 aa).'
      },
      es: {
        pop: 'Placa triangular de blindaje interno (PDB 1HIW): ¡la matriz p17 en detalle cristalino!',
        blueprint: 'Estructura cristalográfica del andamio homotrimérico submembrana de matriz p17 (PDB 1HIW).',
        scientific: 'Estructura cristalina a 2,3 Å del homotrímero de proteína de matriz p17 (PDB 1HIW, 3 × 132 aa).'
      }
    },
    'hiv.det.ma.02': {
      en: {
        pop: 'Positively charged patches plus fatty myristoyl tails Velcro this liner to the inner hull.',
        blueprint: 'Electropositive patches and N-myristoyl lipid anchors fasten the matrix to the inner leaflet.',
        scientific: 'Basic PI(4,5)P2-binding pockets and N-terminal myristoyl moieties tether MA to T-cell rafts.'
      },
      es: {
        pop: 'Parches positivos y colas grasas de miristoílo pegan este forro como velcro al casco.',
        blueprint: 'Zonas electropositivas y anclas N-miristoílo fijan la matriz a la monocapa lipídica interna.',
        scientific: 'Bolsillos básicos afines a PI(4,5)P2 y grupos N-miristoílo anclan MA a balsas lipídicas.'
      }
    },
    'hiv.det.hex.01': {
      en: {
        pop: 'One honeycomb armor tile up close (PDB 3H4E): the six-sided p24 Capsid ring!',
        blueprint: 'Crystal structure of the planar six-subunit p24 Capsid wall module (PDB 3H4E).',
        scientific: '1.9 Å crystal structure of the disulfide-stabilized planar HIV-1 p24 CA hexamer (PDB 3H4E).'
      },
      es: {
        pop: 'Una loseta del panal vista de cerca (PDB 3H4E): ¡el anillo hexagonal p24 de la cápside!',
        blueprint: 'Estructura cristalina del módulo mural plano de seis subunidades p24 CA (PDB 3H4E).',
        scientific: 'Estructura cristalina a 1,9 Å del hexámero plano estabilizado de cápside p24 (PDB 3H4E).'
      }
    },
    'hiv.det.hex.02': {
      en: {
        pop: 'Six inner β-hairpins form a tiny iris gate that gulps down dNTP fuel for DNA forging.',
        blueprint: 'Six N-terminal domains ring a gated β-hairpin central pore for selective dNTP import.',
        scientific: 'Six NTDs assemble a central β-hairpin/Arg18 electrostatic channel (~8 Å) importing dNTPs.'
      },
      es: {
        pop: 'Seis horquillas internas forman un iris diminuto que traga combustible dNTP para crear ADN.',
        blueprint: 'Seis dominios N-terminales rodean un poro central en horquilla β que importa dNTP.',
        scientific: 'Seis dominios NTD forman un canal electrostático central Arg18/horquilla β (~8 Å) para dNTP.'
      }
    },
    'hiv.det.pent.01': {
      en: {
        pop: 'Corner keystone in crystal view (PDB 3P05): the five-sided p24 pentamer tile!',
        blueprint: 'X-ray crystal structure of the five-fold p24 Capsid corner pentamer (PDB 3P05).',
        scientific: '2.5 Å crystal structure of the five-fold symmetric HIV-1 p24 CA vertex pentamer (PDB 3P05).'
      },
      es: {
        pop: 'Piedra angular en cristal (PDB 3P05): ¡la loseta pentagonal p24 de cinco lados!',
        blueprint: 'Estructura cristalográfica del pentámero de esquina p24 CA de simetría cinco (PDB 3P05).',
        scientific: 'Estructura cristalina a 2,5 Å del pentámero de vértice quíntuple p24 CA de VIH-1 (PDB 3P05).'
      }
    },
    'hiv.det.pent.02': {
      en: {
        pop: 'Snap twelve of these soccer-ball corners into the hex sheet and it curls into a sealed cone!',
        blueprint: 'Twelve pentagonal disclinations bend the hexagonal lattice into a closed fullerene container.',
        scientific: 'Twelve pentamers introduce 60° disclinations that close the hexameric sheet into a fullerene cone.'
      },
      es: {
        pop: '¡Encaja doce de estas esquinas de balón en el panal y se curvará en un cono sellado!',
        blueprint: 'Doce disclinaciones pentagonales curvan la malla hexagonal en un contenedor cerrado.',
        scientific: 'Doce pentámeros introducen disclinaciones de 60° que cierran la red en un cono de fulereno.'
      }
    },
    'hiv.det.rt.01': {
      en: {
        pop: 'Caught gripping DNA like a right hand (PDB 1RTD): HIV-1 Reverse Transcriptase in action!',
        blueprint: 'Crystal structure of the HIV-1 Reverse Transcriptase heterodimer clamped onto DNA (PDB 1RTD).',
        scientific: '3.2 Å ternary crystal structure of HIV-1 p66/p51 RT bound to template-primer DNA and dTTP (1RTD).'
      },
      es: {
        pop: 'Atrapada sujetando ADN como una mano derecha (PDB 1RTD): ¡la transcriptasa inversa en acción!',
        blueprint: 'Estructura cristalina del heterodímero de transcriptasa inversa sujeto al ADN (PDB 1RTD).',
        scientific: 'Estructura ternaria a 3,2 Å de la RT p66/p51 unida a molde-cebador de ADN y dTTP (PDB 1RTD).'
      }
    },
    'hiv.det.rt.02': {
      en: {
        pop: 'Big brother p66 writes DNA and shreds RNA, while compact p51 braces the whole workbench.',
        blueprint: 'Active p66 houses both polymerase and RNase H modules; structural p51 rigidifies the cleft.',
        scientific: 'Catalytic p66 (560 aa) contains fingers/palm/thumb and RNase H; p51 (440 aa) scaffolds the groove.'
      },
      es: {
        pop: 'La subunidad mayor p66 escribe ADN y corta ARN; la compacta p51 apuntala el banco de trabajo.',
        blueprint: 'p66 aloja los módulos polimerasa y RNasa H, mientras p51 rigidiza la hendidura estructural.',
        scientific: 'p66 (560 aa) porta la polimerasa (dedos/palma/pulgar) y RNasa H; p51 (440 aa) forma el soporte.'
      }
    },
    'hiv.det.in.01': {
      en: {
        pop: 'The chromosome hijacker up close (PDB 1EX4): HIV-1 Integrase’s cutting and gripping domains!',
        blueprint: 'Two-domain crystal structure of HIV-1 Integrase catalytic core and C-terminal clamp (PDB 1EX4).',
        scientific: '2.8 Å crystal structure of the HIV-1 Integrase catalytic core and SH3-like DNA domain (PDB 1EX4).'
      },
      es: {
        pop: 'El secuestrador cromosómico de cerca (PDB 1EX4): ¡los dominios de corte de la integrasa!',
        blueprint: 'Estructura cristalina de los dominios catalítico y de anclaje a ADN de integrasa (PDB 1EX4).',
        scientific: 'Estructura cristalina a 2,8 Å del núcleo catalítico y dominio tipo SH3 de la integrasa (PDB 1EX4).'
      }
    },
    'hiv.det.in.02': {
      en: {
        pop: 'Its magnesium-armed DDE blade snips open human DNA and welds the retrovirus in permanently.',
        blueprint: 'The divalent-metal DDE active site executes 3′ processing and chromosomal strand transfer.',
        scientific: 'Mg²⁺-coordinated Asp64–Asp116–Glu152 (DDE) triad catalyzes one-step transesterification into DNA.'
      },
      es: {
        pop: 'Su cuchilla DDE con magnesio corta el ADN humano y suelda el retrovirus de por vida.',
        blueprint: 'El centro activo DDE dependiente de Mg²⁺ ejecuta el corte 3′ y el empalme cromosómico.',
        scientific: 'La tríada catalítica Asp64–Asp116–Glu152 (DDE) con Mg²⁺ cataliza la transesterificación en ADN.'
      }
    }
  },
  'real-adenovirus': {
    'adv.ch0.intro.01': {
      en: {
        pop: 'Meet Human Adenovirus: a Kryptonian crystal icosahedron packing double-stranded DNA!',
        blueprint: 'System target: Human Adenovirus, a non-enveloped geodesic dsDNA payload courier.',
        scientific: 'Human Mastadenovirus C5 (Adenoviridae, Baltimore I): non-enveloped ~150 MDa linear dsDNA virion.'
      },
      es: {
        pop: 'Conoce al adenovirus humano: ¡un cristal kriptoniano de 20 caras cargado con ADN doble!',
        blueprint: 'Objetivo del sistema: adenovirus humano, vector geodésico desnudo de carga ADNbc.',
        scientific: 'Mastadenovirus humano C5 (Adenoviridae, Baltimore I): virión desnudo de ADNbc (~150 MDa).'
      }
    },
    'adv.ch0.intro.02': {
      en: {
        pop: 'Rolled like a 90-nanometer D20 die, it shoots 30 nm grappling hooks from all twelve corners!',
        blueprint: '20-facet chassis spans ~90 nm facet-to-facet, extended by twelve 30 nm corner booms.',
        scientific: 'Icosahedral capsid measures ~90–93 nm across, projecting twelve ~30 nm trimeric fiber shafts.'
      },
      es: {
        pop: 'Como un dado D20 de 90 nanómetros, lanza garfios de 30 nm desde sus doce esquinas.',
        blueprint: 'El chasis de 20 facetas mide ~90 nm, ampliado por doce mástiles angulares de 30 nm.',
        scientific: 'La cápside icosaédrica mide ~90–93 nm de diámetro más doce fibras triméricas de ~30 nm.'
      }
    },
    'adv.ch0.intro.03': {
      en: {
        pop: 'Zero stolen grease coat here—like Evangelion’s Ramiel, pure protein armor laughs off soap!',
        blueprint: 'Naked proteinaceous hull eliminates lipid fragility, surviving drying and mild detergents.',
        scientific: 'Lacking a phospholipid bilayer, its interlocked capsomer shell resists desiccation and solvents.'
      },
      es: {
        pop: 'Sin abrigo de grasa: como Ramiel en Evangelion, su armadura proteica resiste el jabón.',
        blueprint: 'Su casco proteico desnudo prescinde de lípidos y soporta desecación y detergentes suaves.',
        scientific: 'Carente de bicapa lipídica, su coraza de capsómeros entrelazados resiste solventes y sequedad.'
      }
    },
    'adv.ch0.intro.04': {
      en: {
        pop: 'We popped open one crystal facet so you can peek at its hidden glue rivets and DNA coils.',
        blueprint: 'Cutaway viewport through one triangular facet reveals internal cement staples and core DNA.',
        scientific: 'Sectioned vertex exposes minor cement polypeptides (IIIa, VI, VIII, IX) and the dsDNA core.'
      },
      es: {
        pop: 'Abrimos una cara del cristal para revelar sus remaches internos y sus rollos de ADN.',
        blueprint: 'La ventana abierta en una faceta muestra las grapas cemento internas y el núcleo de ADN.',
        scientific: 'El corte expone los polipéptidos cemento menores (IIIa, VI, VIII, IX) y el núcleo nucleoproteico.'
      }
    },
    'adv.ch0.intro.05': {
      en: {
        pop: 'Hit Space to freeze this crystal fortress, or click Explore to orbit every turret solo!',
        blueprint: 'Press Space to pause playback, or select Explore for free-camera chassis inspection.',
        scientific: 'Press Space to pause guided narration or switch to Explore for interactive 3D inspection.'
      },
      es: {
        pop: 'Pulsa Espacio para congelar esta fortaleza de cristal, o Explorar para volar a tu aire.',
        blueprint: 'Pulsa Espacio para pausar la secuencia, o elige Explorar para inspección libre del chasis.',
        scientific: 'Pulsa Espacio para pausar el recorrido o activa Explorar para examinar el modelo en 3D.'
      }
    },
    'adv.ch1.hex.01': {
      en: {
        pop: 'Twenty flat shield walls, each paved with twelve interlocking [[Hexon trimers|hexon]]!',
        blueprint: 'Each of the 20 triangular facets is tiled by 12 interlocking [[Hexon trimers|hexon]].',
        scientific: 'Twelve homotrimeric [[Hexon II capsomers|hexon]] (PDB 1P30) pack into each of the 20 facets.'
      },
      es: {
        pop: '¡Veinte escudos triangulares planos, cada uno pavimentado con doce [[trímeros de hexón|hexon]]!',
        blueprint: 'Cada una de las 20 facetas triangulares aloja 12 [[trímeros de hexón|hexon]] encajados.',
        scientific: 'Doce capsómeros homotriméricos de [[hexón II|hexon]] (PDB 1P30) pavimentan cada faceta.'
      }
    },
    'adv.ch1.hex.02': {
      en: {
        pop: 'Neat origami trick: three protein chains fold two barrels each to fake a six-sided footprint!',
        blueprint: 'Three subunits fold twin β-barrels apiece, generating a pseudo-hexagonal mounting base.',
        scientific: 'Each 951-aa protomer folds tandem viral jelly-roll β-barrels (P1, P2) yielding a 6-sided base.'
      },
      es: {
        pop: 'Truco de origami: ¡tres cadenas doblan dos barriles cada una para fingir seis lados!',
        blueprint: 'Tres subunidades pliegan doble barril β cada una, creando una base pseudohexagonal.',
        scientific: 'Cada protómero (951 aa) pliega dos barriles jelly-roll (P1, P2) de huella pseudohexagonal.'
      }
    },
    'adv.ch1.hex.03': {
      en: {
        pop: 'Snap all 240 blocks together and you get a Kryptonian crystal shell tough as armor plate.',
        blueprint: 'All 240 Hexon modules interlock into a rigid pseudo-T=25 geodesic icosahedral chassis.',
        scientific: '240 Hexon homotrimers (720 polypeptide II chains) form the ~93 nm pseudo-T=25 capsid (6B1T).'
      },
      es: {
        pop: 'Encaja los 240 bloques y obtendrás una coraza de cristal kriptoniano ultrarresistente.',
        blueprint: 'Los 240 módulos de hexón se traban en un chasis geodésico rígido de geometría pseudo-T=25.',
        scientific: '240 homotrímeros de hexón (720 cadenas II) cierran la red icosaédrica pseudo-T=25 (PDB 6B1T).'
      }
    },
    'adv.ch1.cem.01': {
      en: {
        pop: 'Four molecular rivets—[[cement proteins (IIIa, VI, VIII, IX)|cement]]—bolt the shield walls tight.',
        blueprint: 'Four [[cement proteins (IIIa, VI, VIII, IX)|cement]] cross-brace inter-facet seams inside and out.',
        scientific: 'Minor [[cement polypeptides (IIIa, VI, VIII, IX)|cement]] stabilize hexon–penton interfaces.'
      },
      es: {
        pop: 'Cuatro remaches —las [[proteínas cemento (IIIa, VI, VIII, IX)|cement]]— sujetan las murallas.',
        blueprint: 'Cuatro [[proteínas cemento (IIIa, VI, VIII, IX)|cement]] engrapan las juntas internas y externas.',
        scientific: 'Las [[proteínas cemento (IIIa, VI, VIII, IX)|cement]] estabilizan las uniones entre capsómeros.'
      }
    },
    'adv.ch1.cem.02': {
      en: {
        pop: 'Hidden inside, protein VI is a spring-loaded ninja dagger waiting to slash the cell’s bubble trap!',
        blueprint: 'Stowed internally, amphipathic protein VI serves as the endosomal membrane-breaching blade.',
        scientific: '~360 internal copies of amphipathic polypeptide VI disrupt endosomal lipid bilayers upon release.'
      },
      es: {
        pop: 'Oculta dentro, la proteína VI es una daga ninja lista para rajar la bolsa trampa celular.',
        blueprint: 'Alojada en el interior, la proteína anfipática VI actúa como cuchilla lítica endosómica.',
        scientific: '~360 copias internas del polipéptido anfipático VI lisan la bicapa endosómica al liberarse.'
      }
    },
    'adv.ch1.pent.01': {
      en: {
        pop: 'Sealing every corner like a grenade pin sits a five-sided [[Penton base|penton]] turret.',
        blueprint: 'Each of the 12 five-fold vertices is keyed by a breakaway [[Penton base|penton]] socket.',
        scientific: 'Twelve five-fold vertices house homopentameric [[Penton III bases|penton]] (5 × 571 aa, PDB 1X9T).'
      },
      es: {
        pop: 'Cerrando cada esquina como anilla de granada se asienta una [[base del pentón|penton]].',
        blueprint: 'Cada uno de los 12 vértices quíntuples monta un zócalo desprendible de [[base del pentón|penton]].',
        scientific: 'Los doce vértices alojan homopentámeros de [[base del pentón III|penton]] (5 × 571 aa, PDB 1X9T).'
      }
    },
    'adv.ch1.pent.02': {
      en: {
        pop: 'Five wavy RGD loops atop that turret sweet-talk host integrins into swallowing the whole crystal!',
        blueprint: 'Mobile RGD loops on the turret engage host αv integrins to trigger clathrin endocytosis.',
        scientific: 'Exposed Arg-Gly-Asp (RGD) loops (~5.7 nm spacing) cross-link αvβ3/αvβ5 integrins (Kd ~60 nM).'
      },
      es: {
        pop: 'Cinco lazos RGD en la torreta convencen a las integrinas de tragarse el cristal entero.',
        blueprint: 'Los bucles móviles RGD reclutan integrinas αv para activar la endocitosis por clatrina.',
        scientific: 'Los bucles Arg-Gly-Asp (RGD, espaciados ~5,7 nm) entrecruzan integrinas αvβ3/αvβ5 (Kd ~60 nM).'
      }
    },
    'adv.ch1.fib.01': {
      en: {
        pop: 'Shooting 30 nm out like Attack on Titan ODM gear is the [[Fiber antenna|fiber]] grappling hook!',
        blueprint: 'Extending 30 nm from each Penton socket is a rigid trimeric [[Fiber antenna|fiber]] boom.',
        scientific: 'Each vertex projects a ~30 nm homotrimeric [[Fiber IV appendage|fiber]] (3 × 581 aa, PDB 1QIU).'
      },
      es: {
        pop: '¡Como el equipo de maniobras de Attack on Titan, la [[antena de fibra|fiber]] sale 30 nm!',
        blueprint: 'Proyectándose 30 nm desde cada pentón emerge el mástil trimérico de la [[antena de fibra|fiber]].',
        scientific: 'De cada vértice emerge una [[antena homotrimérica de fibra IV|fiber]] (~30 nm, PDB 1QIU).'
      }
    },
    'adv.ch1.fib.02': {
      en: {
        pop: 'Its three-braided shaft tips with a round knob that fishes between airway cells for a latch.',
        blueprint: 'A 22-repeat triple β-spiral shaft supports the distal C-terminal receptor-docking knob.',
        scientific: 'Twenty-two β-spiral shaft repeats terminate in a β-sandwich knob that binds tight-junction CAR.'
      },
      es: {
        pop: 'Su mástil trenzado acaba en un botón redondo que pesca cerraduras entre células vecinas.',
        blueprint: 'Un eje en triple espiral β de 22 repeticiones sostiene el botón C-terminal de anclaje.',
        scientific: 'Veintidós repeticiones en triple espiral β sostienen el botón terminal afín al receptor CAR.'
      }
    },
    'adv.ch2.dna.01': {
      en: {
        pop: 'Coiled inside the crystal vault sit 36,000 base pairs of [[linear double-stranded DNA|dna]].',
        blueprint: 'Packed inside the core bay are 36 kbp of [[linear double-stranded DNA|dna]] instructions.',
        scientific: 'The ~62 nm core houses 35,938 bp of [[linear double-stranded DNA|dna]] flanked by 103-bp ITRs.'
      },
      es: {
        pop: 'Enrollados en la bóveda cristalina viajan 36.000 pares de [[ADN bicatenario lineal|dna]].',
        blueprint: 'La bahía interna aloja 36 kpb de código fuente en [[ADN bicatenario lineal|dna]].',
        scientific: 'La cavidad interna (~62 nm) alberga 35.938 pb de [[ADN bicatenario lineal|dna]] con ITR de 103 pb.'
      }
    },
    'adv.ch2.dna.02': {
      en: {
        pop: 'Scientists gut its viral genes to turn this roomy crystal into a heroic vaccine delivery truck!',
        blueprint: 'Deleting E1/E3 replication genes converts this 36 kbp chassis into a non-replicating vaccine vector.',
        scientific: 'E1/E3-deleted replication-incompetent adenoviral vectors deliver transgene payloads into host nuclei.'
      },
      es: {
        pop: '¡Sin sus genes de copia, la ciencia usa este amplio cristal como camión repartidor de vacunas!',
        blueprint: 'Al suprimir los genes E1/E3, este chasis de 36 kpb sirve como vector vacunal seguro.',
        scientific: 'Los vectores adenovirales delecionados en E1/E3 entregan transgenes vacunales al núcleo celular.'
      }
    },
    'adv.ch2.core.01': {
      en: {
        pop: 'Roughly 800 copies of [[core protein VII|core]] spool the DNA like counterfeit human histones!',
        blueprint: 'Approximately 800 basic [[core protein VII|core]] spools compact the DNA into pseudo-chromatin.',
        scientific: '~800 copies of arginine-rich [[polypeptide VII|core]] (19.4 kDa) neutralize and wrap viral dsDNA.'
      },
      es: {
        pop: '¡Unas 800 copias de [[proteína central VII|core]] enrollan el ADN imitando histonas humanas!',
        blueprint: 'Cerca de 800 carretes básicos de [[proteína central VII|core]] compactan pseudocromatina viral.',
        scientific: '~800 copias de [[polipéptido básico VII|core]] (19,4 kDa, rico en Arg) condensan el ADNbc.'
      }
    },
    'adv.ch2.core.02': {
      en: {
        pop: 'Dressed up as 200 "adenosome" pearls, the viral DNA fools the host nucleus into reading it.',
        blueprint: 'Organized into ~200 chromatin-mimic adenosome beads, the payload imports smoothly via nuclear pores.',
        scientific: 'Nucleoprotein condensation forms ~200 spherical adenosomes bridged to hexons by polypeptide V.'
      },
      es: {
        pop: 'Disfrazado en 200 perlas «adenosoma», el ADN engaña al núcleo para que lo lea sin sospechar.',
        blueprint: 'Compactada en ~200 cuentas adenosómicas, la carga cruza limpiamente hacia la maquinaria nuclear.',
        scientific: 'La condensación forma ~200 adenosomas esferoidales conectados al hexón por la proteína puente V.'
      }
    },
    'adv.ch2.core.03': {
      en: {
        pop: 'Twin Terminal Protein caps seal both 5′ tips and act as starter blocks for copying DNA.',
        blueprint: 'Covalent Terminal Protein caps protect both 5′ ends and prime strand-displacement replication.',
        scientific: '55 kDa Terminal Protein (TP) covalently linked to both 5′-dCMP ends primes viral DNA polymerase.'
      },
      es: {
        pop: 'Dos tapones de Proteína Terminal sellan las puntas 5′ y sirven de taco de salida al copiar.',
        blueprint: 'Tapas covalentes de Proteína Terminal protegen ambos extremos 5′ y ceban la replicación.',
        scientific: 'La Proteína Terminal (55 kDa) unida covalentemente a ambos 5′-dCMP ceba la ADN polimerasa viral.'
      }
    },
    'adv.ch3.ent.01': {
      en: {
        pop: 'Grappling hook away! The [[Fiber knob|fiber]] snags [[CAR receptors|car]] between airway cells.',
        blueprint: 'Stage 1 tether: the distal [[Fiber knob|fiber]] locks onto epithelial [[CAR receptors|car]].',
        scientific: 'Trimeric [[Fiber knob|fiber]] binds Ig-like D1 domains of host [[CAR receptors|car]] (Kd ~1–15 nM).'
      },
      es: {
        pop: '¡Garfio lanzado! El [[botón de la fibra|fiber]] engancha [[receptores CAR|car]] epiteliales.',
        blueprint: 'Amarre inicial: el [[botón de la fibra|fiber]] fija los [[receptores CAR|car]] intercelulares.',
        scientific: 'El [[botón de la fibra|fiber]] une el dominio Ig D1 de los [[receptores CAR|car]] (Kd ~1–15 nM).'
      }
    },
    'adv.ch3.ent.02': {
      en: {
        pop: 'Bending at its shaft, the [[Penton base|penton]] bows down to high-five αvβ5 integrins.',
        blueprint: 'Shaft flexion brings the [[Penton base|penton]] RGD loops down to cluster αvβ5 integrins.',
        scientific: 'KKTK shaft bending lowers [[Penton base|penton]] RGD loops onto stationary αvβ5 integrins.'
      },
      es: {
        pop: 'Al doblarse el mástil, la [[base del pentón|penton]] baja para chocar esos cinco con αvβ5.',
        blueprint: 'La flexión del eje acerca la [[base del pentón|penton]] para agrupar integrinas αvβ5.',
        scientific: 'La bisagra KKTK inclina la [[base del pentón|penton]] hacia las integrinas estacionarias αvβ5.'
      }
    },
    'adv.ch3.ent.03': {
      en: {
        pop: 'Pop goes the corner pin! Out flies [[protein VI|cement]] to slash the [[membrane|host]] trap!',
        blueprint: 'Mechanical shear ejects the vertex, deploying [[protein VI|cement]] to lyse the [[membrane|host]].',
        scientific: 'Vertex shedding exposes amphipathic [[polypeptide VI|cement]] to rupture the endosomal [[membrane|host]].'
      },
      es: {
        pop: '¡Salta la esquina! Sale la [[proteína VI|cement]] para rajar la [[membrana|host]] trampa.',
        blueprint: 'El cizallamiento suelta el vértice y despliega [[proteína VI|cement]] contra la [[membrana|host]].',
        scientific: 'La pérdida del vértice libera [[proteína lítica VI|cement]] que perfora la [[membrana|host]].'
      }
    },
    'adv.ch4.flows.01': {
      en: {
        pop: 'Watch this clockwork Trojan Horse strip off its own armor piece by piece on the way in!',
        blueprint: 'Stepwise mechanical uncoating: trace force-driven vertex shedding and nuclear DNA delivery.',
        scientific: 'Sequential mechanochemical uncoating pathway from CAR/integrin shear to NPC genome import.'
      },
      es: {
        pop: '¡Mira cómo este Caballo de Troya mecánico suelta su armadura pieza a pieza al entrar!',
        blueprint: 'Desensamblaje escalonado: sigue la pérdida mecánica del vértice y el envío nuclear del ADN.',
        scientific: 'Vía mecanoquímica secuencial desde la tracción CAR/integrina hasta el poro nuclear.'
      }
    },
    'adv.ch4.car.01': {
      en: {
        pop: 'Drifting [[CAR receptors|car]] tug sideways on the anchored [[Fiber knob|fiber]] like a towrope.',
        blueprint: 'Actin-drifting [[CAR receptors|car]] apply lateral tension to the tethered [[Fiber knob|fiber]].',
        scientific: 'Retrograde F-actin drift of [[CAR receptors|car]] pulls laterally against the [[Fiber knob|fiber]].'
      },
      es: {
        pop: 'Los [[receptores CAR|car]] en deriva tiran de lado del [[botón de la fibra|fiber]] como remolque.',
        blueprint: 'Los [[receptores CAR|car]] arrastrados por actina tensan lateralmente el [[botón de la fibra|fiber]].',
        scientific: 'El flujo retrógrado de actina en [[receptores CAR|car]] tracciona el [[botón de la fibra|fiber]].'
      }
    },
    'adv.ch4.car.02': {
      en: {
        pop: 'Caught in a tug-of-war with stationary integrins, the [[Penton vertex|penton]] pops right loose!',
        blueprint: 'Opposing integrin resistance pries the [[Penton vertex|penton]] socket out of the chassis.',
        scientific: 'Opposing CAR drift and immobilized integrins mechanically destabilize the [[Penton vertex|penton]].'
      },
      es: {
        pop: 'En pleno tira y afloja con las integrinas, ¡el [[vértice del pentón|penton]] salta suelto!',
        blueprint: 'La resistencia opuesta de las integrinas desencaja el [[vértice del pentón|penton]] del casco.',
        scientific: 'Las fuerzas opuestas entre CAR e integrinas desestabilizan el [[vértice del pentón|penton]].'
      }
    },
    'adv.ch4.pvi.01': {
      en: {
        pop: 'Unsheathed [[cement protein VI|cement]] slices open the vesicle before acid can digest the virus!',
        blueprint: 'Ejected [[cement protein VI|cement]] inserts amphipathic helices to rupture the endosome.',
        scientific: 'N-terminal amphipathic helices of [[polypeptide VI|cement]] induce positive curvature and lysis.'
      },
      es: {
        pop: 'La [[proteína cemento VI|cement]] desenvainada raja la bolsa antes de que el ácido ataque.',
        blueprint: 'La [[proteína cemento VI|cement]] liberada inserta hélices anfipáticas y rompe el endosoma.',
        scientific: 'Las hélices anfipáticas N-terminales de [[proteína cemento VI|cement]] lisan el endosoma temprano.'
      }
    },
    'adv.ch4.pvi.02': {
      en: {
        pop: 'Hitching a dynein taxi to a nuclear pore, the [[36 kbp dsDNA|dna]] slips into HQ!',
        blueprint: 'Hexon-recruited dynein hauls the shell to an NPC to inject the [[36 kbp dsDNA|dna]] payload.',
        scientific: 'Dynein transports the subviral capsid to Nup214, importing the [[36 kbp dsDNA|dna]]–VII core.'
      },
      es: {
        pop: 'En taxi de dineína hasta el poro nuclear, ¡el [[ADNbc de 36 kpb|dna]] entra al cuartel general!',
        blueprint: 'La dineína lleva la cápside al poro nuclear para inyectar la carga de [[ADNbc de 36 kpb|dna]].',
        scientific: 'La dineína transporta el virión a Nup214, importando el núcleo de [[ADNbc de 36 kpb|dna]]–VII.'
      }
    },
    'adv.ch5.roll.01': {
      en: {
        pop: '240 Hexon trimers: three-chain crystal shield blocks faking six-sided bases.',
        blueprint: '240 Hexon (II) trimers: pseudo-hexagonal wall tiles forming 20 geodesic facets.',
        scientific: '240 Hexon II homotrimers (3 × 951 aa, PDB 1P30) building the pseudo-T=25 icosahedral shell.'
      },
      es: {
        pop: '240 trímeros de hexón: bloques cristalinos de tres cadenas que fingen base hexagonal.',
        blueprint: '240 trímeros de hexón (II): losetas pseudohexagonales de las 20 facetas geodésicas.',
        scientific: '240 homotrímeros de Hexón II (3 × 951 aa, PDB 1P30) de la cápside pseudo-T=25.'
      }
    },
    'adv.ch5.roll.02': {
      en: {
        pop: '12 Penton bases: breakaway corner grenade pins waving sticky RGD integrin loops.',
        blueprint: '12 Penton base (III) pentamers: corner sockets with integrin-clustering RGD loops.',
        scientific: '12 homopentameric Penton III bases (5 × 571 aa, PDB 1X9T) displaying mobile RGD loops.'
      },
      es: {
        pop: '12 bases del pentón: esquinas desprendibles con lazos RGD que seducen integrinas.',
        blueprint: '12 pentámeros de base de pentón (III): zócalos angulares con bucles RGD endocíticos.',
        scientific: '12 homopentámeros de base de Pentón III (5 × 571 aa, PDB 1X9T) con motivos RGD móviles.'
      }
    },
    'adv.ch5.roll.03': {
      en: {
        pop: '12 Fiber antennas: 30 nm ODM grappling hooks tipped with CAR-hunting knobs.',
        blueprint: '12 Fiber (IV) trimers: 30 nm triple-β-spiral booms tipped with CAR-docking knobs.',
        scientific: '12 homotrimeric Fiber IV shafts/knobs (3 × 581 aa, ~30 nm, PDB 1QIU) binding host CAR.'
      },
      es: {
        pop: '12 fibras proyectadas: garfios de 30 nm rematados en botones buscadores de CAR.',
        blueprint: '12 trímeros de fibra (IV): mástiles de 30 nm en triple espiral β con botón para CAR.',
        scientific: '12 homotrímeros de Fibra IV (3 × 581 aa, ~30 nm, PDB 1QIU) de alta afinidad por CAR.'
      }
    },
    'adv.ch5.roll.04': {
      en: {
        pop: 'Cement proteins (IIIa, VI, VIII, IX): structural staples plus hidden endosome-slashing blades.',
        blueprint: 'Minor cement set (IIIa, VI, VIII, IX): facet staples and stowed membrane-lytic protein VI.',
        scientific: 'Minor cement polypeptides IIIa, VIII, IX (triskelions), and ~360 amphipathic lytic VI copies.'
      },
      es: {
        pop: 'Proteínas cemento (IIIa, VI, VIII, IX): grapas del cristal más dagas ocultas rompe-bolsas.',
        blueprint: 'Conjunto cemento (IIIa, VI, VIII, IX): grapas estructurales y cuchilla lítica interna VI.',
        scientific: 'Polipéptidos cemento IIIa, VIII, trisqueliones IX y ~360 copias anfipáticas líticas de VI.'
      }
    },
    'adv.ch5.roll.05': {
      en: {
        pop: '36 kbp linear dsDNA: the master blueprint—and humanity’s favorite vaccine cargo bay!',
        blueprint: '36 kbp linear dsDNA: double-stranded payload widely engineered as a vaccine vector.',
        scientific: '35,938-bp linear dsDNA genome (Baltimore I) flanked by 103-bp inverted terminal repeats.'
      },
      es: {
        pop: 'ADNbc lineal de 36 kpb: el plano maestro y bodega favorita de vectores vacunales.',
        blueprint: 'ADNbc lineal de 36 kpb: carga bicatenaria reprogramable como vector génico y vacunal.',
        scientific: 'Genoma lineal de ADNbc de 35.938 pb (Baltimore I) flanqueado por ITR de 103 pb.'
      }
    },
    'adv.ch5.roll.06': {
      en: {
        pop: 'Protein VII & TP: 800 fake-histone pearls plus twin 5′ starter caps on the DNA.',
        blueprint: 'Core protein VII & TP: ~200 pseudo-chromatin adenosome spools and 5′ replication primers.',
        scientific: '~800 histone-like protein VII copies (~200 adenosomes) plus 5′-covalent 55 kDa TP primers.'
      },
      es: {
        pop: 'Proteína VII y TP: 800 perlas tipo histona y dos tapones cebadores en las puntas 5′.',
        blueprint: 'Proteína VII y TP: ~200 cuentas de pseudocromatina y cebadores covalentes 5′ de copia.',
        scientific: '~800 copias básicas de proteína VII (~200 adenosomas) y cebadores 5′ covalentes TP (55 kDa).'
      }
    },
    'adv.ch5.roll.07': {
      en: {
        pop: 'Host CAR & αvβ5 integrins: the unwitting two-man crew that pulls the crystal’s pin!',
        blueprint: 'Host CAR & αvβ5 integrins: sequential tether and endocytosis ports driving uncoating.',
        scientific: 'Tight-junction CAR Ig receptor and αvβ5 integrin heterodimers mediating mechanical entry.'
      },
      es: {
        pop: 'Receptores CAR e integrinas αvβ5: el dúo involuntario que quita la anilla al cristal.',
        blueprint: 'CAR e integrinas αvβ5 del huésped: puertos secuenciales de amarre, endocitosis y apertura.',
        scientific: 'Receptor Ig CAR de uniones estrechas e integrinas αvβ5 que median el desencapsidado mecánico.'
      }
    },
    'adv.ch5.roll.08': {
      en: {
        pop: 'Epithelial plasma membrane: the airway border tricked into swallowing a Trojan crystal.',
        blueprint: 'Epithelial plasma membrane: polarized host barrier invaginated via clathrin endocytosis.',
        scientific: 'Polarized respiratory epithelial membrane undergoing PI3K/Rac1-driven clathrin uptake.'
      },
      es: {
        pop: 'Membrana epitelial: la frontera respiratoria engañada para tragarse el cristal de Troya.',
        blueprint: 'Membrana plasmática epitelial: barrera polarizada invaginada mediante endocitosis por clatrina.',
        scientific: 'Membrana epitelial respiratoria que ejecuta endocitosis dependiente de clatrina y PI3K/Rac1.'
      }
    },
    'adv.ch5.exp.01': {
      en: {
        pop: 'Fortress tour complete—pilot the camera yourself and inspect every crystal facet!',
        blueprint: 'Guided walkthrough complete. Free-flight inspection of the Adenovirus chassis is active.',
        scientific: 'Concluding guided tour; interactive 3D exploration of Human Adenovirus is now enabled.'
      },
      es: {
        pop: 'Visita a la fortaleza completada: pilota tú mismo e inspecciona cada cara del cristal.',
        blueprint: 'Recorrido guiado completado. Inspección libre del chasis de adenovirus activada.',
        scientific: 'Fin del recorrido guiado; explora interactivamente el modelo 3D del adenovirus humano.'
      }
    },
    'adv.ch5.exp.02': {
      en: {
        pop: 'Click any tag to zoom down to X-ray crystal structures sharp enough to count atoms!',
        blueprint: 'Select any component tag to inspect its atomic X-ray crystallographic coordinates.',
        scientific: 'Click any label to load high-resolution X-ray and cryo-EM coordinates from the PDB.'
      },
      es: {
        pop: '¡Pulsa cualquier etiqueta para ver estructuras cristalinas con precisión de átomos!',
        blueprint: 'Selecciona cualquier etiqueta para examinar sus coordenadas cristalográficas atómicas.',
        scientific: 'Haz clic en cualquier etiqueta para cargar sus coordenadas experimentales de rayos X y crio-ME.'
      }
    },
    'adv.det.rver.01': {
      en: {
        pop: 'Five Penton subunits lock into a corner collar—built strong outside, yet ready to pop inside!',
        blueprint: 'Five Penton III subunits form the vertex keystone engineered for programmed shedding.',
        scientific: 'Homopentameric Penton base (PDB 1X9T) seals each 5-fold vertex within five peripentonal hexons.'
      },
      es: {
        pop: 'Cinco piezas de pentón cierran la esquina: firmes por fuera, listas para saltar dentro.',
        blueprint: 'Cinco subunidades de pentón III cierran el vértice con desprendimiento programado.',
        scientific: 'El homopentámero de Pentón (PDB 1X9T) sella cada vértice entre cinco hexones peripentonales.'
      }
    },
    'adv.det.rver.02': {
      en: {
        pop: 'Sprouting 30 nm from the middle, the three-stranded Fiber mast hunts for CAR handles.',
        blueprint: 'Inserted centrally across a 5:3 symmetry joint, the 30 nm Fiber shaft projects its CAR knob.',
        scientific: 'FNPVYP N-terminal tails dock the 3-fold ~30 nm Fiber shaft/knob (PDB 1QIU) into the 5-fold pore.'
      },
      es: {
        pop: 'Brotando 30 nm del centro, el mástil triple de la fibra rastrea picaportes CAR.',
        blueprint: 'Insertado en empalme 5:3, el eje trimérico de 30 nm proyecta su botón hacia CAR.',
        scientific: 'Péptidos N-terminales FNPVYP anclan la fibra trimérica (~30 nm, PDB 1QIU) al poro pentamérico.'
      }
    },
    'adv.det.rcor.01': {
      en: {
        pop: 'Inside, 36,000 DNA base pairs wind around 800 protein VII spools like stealth chromosomes.',
        blueprint: '36 kbp linear dsDNA wraps ~800 basic protein VII spools for compact luminal storage.',
        scientific: '35,938-bp linear dsDNA condenses around ~800 copies of histone-like 19.4 kDa polypeptide VII.'
      },
      es: {
        pop: 'Dentro, 36.000 pares de ADN se enrollan en 800 carretes VII como cromosomas furtivos.',
        blueprint: '36 kpb de ADNbc lineal se devanan en ~800 carretes básicos VII de almacenamiento.',
        scientific: 'Los 35.938 pb de ADNbc se condensan sobre ~800 copias de la proteína tipo histona VII.'
      }
    },
    'adv.det.rcor.02': {
      en: {
        pop: 'Protein V tethers the spool to the Hexon wall while Terminal Protein caps guard both 5′ ends.',
        blueprint: 'Polypeptide V bridges the core to the outer shell; covalent TP caps prime both 5′ termini.',
        scientific: '~157 copies of protein V link adenosomes to hexons; 55 kDa TP caps both 5′-dCMP ITR ends.'
      },
      es: {
        pop: 'La proteína V ata el carrete al muro de hexón y la TP protege ambas puntas 5′.',
        blueprint: 'El polipéptido V conecta el núcleo al casco; tapas covalentes TP ceban ambos extremos 5′.',
        scientific: '~157 copias de proteína V unen el núcleo al hexón; la TP (55 kDa) sella ambos extremos 5′.'
      }
    },
    'adv.det.rent.01': {
      en: {
        pop: 'One-two combo: Fiber knob hooks CAR first, then Penton’s RGD loops high-five αv integrins!',
        blueprint: 'Two-step docking: distal Fiber knob tethers CAR before Penton RGD loops cluster αv integrins.',
        scientific: 'High-affinity Fiber–CAR binding (Kd ~1–15 nM) precedes Penton RGD–αvβ3/αvβ5 engagement.'
      },
      es: {
        pop: 'Combo uno-dos: el botón engancha CAR primero y los lazos RGD chocan con integrinas αv.',
        blueprint: 'Acople en dos fases: el botón fija CAR antes de que los bucles RGD agrupen integrinas αv.',
        scientific: 'La unión de alta afinidad Fibra–CAR (Kd ~1–15 nM) precede al enlace RGD–integrinas αv.'
      }
    },
    'adv.det.rent.02': {
      en: {
        pop: 'Popping off the corner hatch unleashes protein VI daggers to slice out of the endosome!',
        blueprint: 'Mechanical vertex ejection deploys amphipathic protein VI to perforate the early endosome.',
        scientific: 'Shedding of fibers and pentons releases ~360 copies of lytic polypeptide VI into the endosome.'
      },
      es: {
        pop: '¡Al saltar la escotilla angular salen dagas de proteína VI que rajan el endosoma!',
        blueprint: 'La eyección mecánica del vértice despliega proteína VI para perforar el endosoma temprano.',
        scientific: 'El desprendimiento de fibras y pentones libera ~360 copias líticas de proteína VI al endosoma.'
      }
    },
    'adv.det.sch.01': {
      en: {
        pop: 'Fortress of Solitude cutaway: 20 flat crystal walls built from 240 Hexon towers.',
        blueprint: 'Isolated geodesic cutaway: 20 planar facets assembled from 240 trimeric Hexon blocks.',
        scientific: 'Schematic HAdV-C5 cutaway: pseudo-T=25 icosahedron of 240 Hexon II trimers across 20 facets.'
      },
      es: {
        pop: 'Corte de la Fortaleza de la Soledad: 20 muros planos hechos de 240 torres de hexón.',
        blueprint: 'Corte geodésico aislado: 20 facetas planas formadas por 240 bloques triméricos de hexón.',
        scientific: 'Esquema en corte de HAdV-C5: icosaedro pseudo-T=25 de 240 trímeros de Hexón II en 20 caras.'
      }
    },
    'adv.det.sch.02': {
      en: {
        pop: 'Twelve corner turrets launch long Fiber antennas while 36 kbp of DNA coils snug inside.',
        blueprint: 'Twelve Penton vertices mount 30 nm Fiber booms around the compacted 36 kbp dsDNA core.',
        scientific: 'Twelve 5-fold Penton III vertices project 30 nm Fiber IV shafts; VII-condensed dsDNA fills the lumen.'
      },
      es: {
        pop: 'Doce torretas lanzan largas antenas mientras 36 kpb de ADN se enrollan en el centro.',
        blueprint: 'Doce vértices de pentón portan mástiles de 30 nm en torno al núcleo compacto de ADNbc.',
        scientific: 'Doce vértices Pentón III proyectan fibras IV de 30 nm sobre el lumen de ADNbc–proteína VII.'
      }
    },
    'adv.det.hex.01': {
      en: {
        pop: 'Crystal close-up (PDB 1P30): one massive three-chain Hexon armor tower from Ad5!',
        blueprint: 'X-ray crystal structure of the Ad5 Hexon major wall homotrimer (PDB 1P30).',
        scientific: '2.5 Å crystal structure of the HAdV-C5 Hexon II homotrimer (PDB 1P30, 3 × 951 aa, ~324 kDa).'
      },
      es: {
        pop: 'Primer plano cristalino (PDB 1P30): ¡una imponente torre triple de blindaje Hexón!',
        blueprint: 'Estructura cristalográfica del homotrímero mural principal Hexón de Ad5 (PDB 1P30).',
        scientific: 'Estructura cristalina a 2,5 Å del homotrímero Hexón II de HAdV-C5 (PDB 1P30, ~324 kDa).'
      }
    },
    'adv.det.hex.02': {
      en: {
        pop: 'Twin jelly-roll barrels per chain fake a six-sided base crowned by three tangled loop towers.',
        blueprint: 'Double-jelly-roll bases create a pseudo-hexagonal footprint topped by three loop towers.',
        scientific: 'Tandem P1/P2 eight-stranded β-barrels form a pseudo-hexagonal base beneath HVR1–7 loop towers.'
      },
      es: {
        pop: 'Dos barriles por cadena fingen base de seis lados coronada por tres torres entrelazadas.',
        blueprint: 'Las bases de doble barril generan huella pseudohexagonal bajo tres torres superiores.',
        scientific: 'Pares de barriles β P1/P2 forman una base pseudohexagonal coronada por bucles hipervariables.'
      }
    },
    'adv.det.pent.01': {
      en: {
        pop: 'Corner hatch in crystal view (PDB 1X9T): five Penton subunits gripping the Fiber’s tail!',
        blueprint: 'Crystal structure of the homopentameric Penton socket complexed with Fiber tails (PDB 1X9T).',
        scientific: '3.3 Å crystal structure of the HAdV-2 Penton III pentamer bound to N-terminal Fiber peptides (1X9T).'
      },
      es: {
        pop: 'Escotilla angular en cristal (PDB 1X9T): ¡cinco piezas de pentón sujetando la fibra!',
        blueprint: 'Estructura cristalina del zócalo homopentamérico de pentón unido a colas de fibra (PDB 1X9T).',
        scientific: 'Estructura cristalina a 3,3 Å del pentámero Pentón III unido a péptidos N de Fibra (PDB 1X9T).'
      }
    },
    'adv.det.pent.02': {
      en: {
        pop: 'Five subunits seal the corner tight while waving RGD loops to lure host integrins.',
        blueprint: 'Five jelly-roll subunits close the 5-fold vertex and project integrin-binding RGD loops.',
        scientific: 'Basal jelly-roll β-barrels seal the vertex while upper insertion domains present RGD motifs.'
      },
      es: {
        pop: 'Cinco subunidades sellan la esquina mientras agitan lazos RGD para atraer integrinas.',
        blueprint: 'Cinco barriles cierran el vértice quíntuple y despliegan motivos RGD para integrinas.',
        scientific: 'Barriles β jelly-roll basales cierran el vértice y los dominios superiores exponen motivos RGD.'
      }
    },
    'adv.det.fib.01': {
      en: {
        pop: 'Grappling hook tip in crystal detail (PDB 1QIU): the distal Fiber shaft and CAR-hunting Knob!',
        blueprint: 'Crystal structure of the distal triple-spiral Fiber shaft and trimeric Knob head (PDB 1QIU).',
        scientific: '2.4 Å crystal structure of the HAdV-2 distal Fiber IV β-spiral shaft and C-terminal Knob (PDB 1QIU).'
      },
      es: {
        pop: 'Punta del garfio en cristal (PDB 1QIU): ¡el tramo final del mástil y su botón cazador!',
        blueprint: 'Estructura cristalina del tramo distal en espiral de la fibra y su botón trimérico (PDB 1QIU).',
        scientific: 'Estructura cristalina a 2,4 Å del eje distal en triple espiral β y botón de Fibra IV (PDB 1QIU).'
      }
    },
    'adv.det.fib.02': {
      en: {
        pop: 'Three interwoven β-strands spiral up the shaft to hold the CAR-grabbing knob aloft.',
        blueprint: 'An interwoven triple β-spiral shaft elevates the C-terminal CAR receptor-binding head.',
        scientific: 'Three polypeptide IV chains weave a hydrophobic-core triple β-spiral beneath the β-sandwich knob.'
      },
      es: {
        pop: 'Tres hebras β entrelazadas suben en espiral para sostener en alto el botón fijador de CAR.',
        blueprint: 'Un mástil entrelazado en triple espiral β eleva el cabezal C-terminal de unión a CAR.',
        scientific: 'Tres cadenas IV tejen una triple espiral β de núcleo hidrofóbico bajo el botón en sándwich β.'
      }
    }
  },
  'real-tmv': {
    'tmv.ch0.intro.01': {
      en: {
        pop: 'Meet Tobacco Mosaic Virus: the OG helical boss of virology that tunnels through plant leaves!',
        blueprint: 'System target: Tobacco Mosaic Virus (TMV), the archetypal rigid helical plant pathogen.',
        scientific: 'Tobacco mosaic virus (Tobamovirus, Virgaviridae, Baltimore IV): ~40 MDa helical (+)ssRNA virion.'
      },
      es: {
        pop: 'Conoce al virus del mosaico del tabaco: ¡el jefe clásico de la virología que perfora hojas!',
        blueprint: 'Objetivo del sistema: virus del mosaico del tabaco (TMV), cilindro helicoidal fitopatógeno.',
        scientific: 'Virus del mosaico del tabaco (Tobamovirus, Virgaviridae, Baltimore IV): virión de ~40 MDa.'
      }
    },
    'tmv.ch0.intro.02': {
      en: {
        pop: 'Shaped like a 300-nanometer Star Wars lightsaber hilt, it spans a trim 18 nanometers wide.',
        blueprint: 'Rigid cylindrical chassis measures 300 nm in axial length by 18.0 nm in outer diameter.',
        scientific: 'Mature nucleoprotein rods span 300 nm axially with a uniform 18.0 nm outer diameter.'
      },
      es: {
        pop: 'Como la empuñadura de un sable láser de 300 nanómetros, mide apenas 18 nm de grosor.',
        blueprint: 'El chasis cilíndrico rígido mide 300 nm de longitud axial por 18,0 nm de diámetro exterior.',
        scientific: 'El bastón nucleoproteico maduro mide 300 nm de largo con un diámetro externo de 18,0 nm.'
      }
    },
    'tmv.ch0.intro.03': {
      en: {
        pop: 'Origin story alert: in 1898 Beijerinck coined the word "virus" studying this exact plant bandit!',
        blueprint: 'Historical milestone: in 1898 Martinus Beijerinck defined the filterable "virus" class using TMV.',
        scientific: 'In 1898 Beijerinck termed filtered TMV sap "contagium vivum fluidum," founding modern virology.'
      },
      es: {
        pop: '¡Historia de origen! En 1898 Beijerinck bautizó la palabra «virus» estudiando este bandido.',
        blueprint: 'Hito fundacional: en 1898 Beijerinck definió la categoría filtrable «virus» a partir del TMV.',
        scientific: 'En 1898 Beijerinck llamó a su savia filtrada «contagium vivum fluidum», fundando la virología.'
      }
    },
    'tmv.ch0.intro.04': {
      en: {
        pop: 'Before DNA’s fame, X-ray legend Rosalind Franklin proved this spiral tube is hollow down the middle!',
        blueprint: 'Rosalind Franklin’s X-ray fiber diffraction resolved its uniform pitch and hollow central bore.',
        scientific: 'In 1955 Rosalind Franklin mapped TMV’s 2.3 nm helical pitch, buried RNA, and 4 nm axial lumen.'
      },
      es: {
        pop: '¡La legendaria Rosalind Franklin demostró con rayos X que este tubo espiral es hueco!',
        blueprint: 'La difracción de rayos X de Rosalind Franklin resolvió su paso espiral y su conducto central.',
        scientific: 'En 1955 Rosalind Franklin cartografió su paso axial de 2,3 nm, ARN interno y lumen de 4 nm.'
      }
    },
    'tmv.ch0.intro.05': {
      en: {
        pop: 'Hit Space to freeze this spiral fortress, or click Explore to inspect every brick solo!',
        blueprint: 'Press Space to pause playback, or select Explore for free-camera inspection of the rod.',
        scientific: 'Press Space to pause guided narration or toggle Explore for interactive 3D inspection.'
      },
      es: {
        pop: 'Pulsa Espacio para congelar esta torre espiral, o Explorar para recorrer cada pieza libre.',
        blueprint: 'Pulsa Espacio para pausar la secuencia, o elige Explorar para examinar el cilindro en 3D.',
        scientific: 'Pulsa Espacio para pausar el recorrido o activa Explorar para inspección 3D interactiva.'
      }
    },
    'tmv.ch1.coat.01': {
      en: {
        pop: 'Snap together 2,130 identical Lego-like [[Coat Protein subunits|coat]] and you get the whole rod!',
        blueprint: 'Modular economy: 2,130 identical [[Coat Protein subunits|coat]] self-assemble the entire cylinder.',
        scientific: '~2,130 identical 158-aa (17.5 kDa) [[Coat Protein monomers|coat]] (PDB 2TMV) form the capsid.'
      },
      es: {
        pop: '¡Encaja 2.130 [[subunidades idénticas de proteína de cubierta|coat]] tipo Lego y tendrás el bastón!',
        blueprint: 'Economía modular: 2.130 [[subunidades idénticas de cubierta|coat]] ensamblan todo el cilindro.',
        scientific: '~2.130 [[monómeros idénticos de cubierta|coat]] (158 aa, 17,5 kDa, PDB 2TMV) forman la hélice.'
      }
    },
    'tmv.ch1.coat.02': {
      en: {
        pop: 'They climb a right-handed spiral staircase of 16⅓ bricks per turn—49 bricks every three floors!',
        blueprint: 'Right-handed helical geometry packs 16⅓ subunits per 2.3 nm pitch (49 subunits per 3 turns).',
        scientific: 'Right-handed helix of 16⅓ subunits per 2.3 nm axial turn (~130 turns, 22.06° twist/subunit).'
      },
      es: {
        pop: 'Suben en escalera de caracol de 16⅓ ladrillos por piso: ¡49 piezas exactas cada tres giros!',
        blueprint: 'La geometría helicoidal dextrógira alinea 16⅓ piezas por paso de 2,3 nm (49 cada 3 vueltas).',
        scientific: 'Hélice dextrógira de 16⅓ subunidades por paso axial de 2,3 nm (~130 vueltas, giro de 22,06°).'
      }
    },
    'tmv.ch1.coat.03': {
      en: {
        pop: 'Every brick is a tight bundle of four α-helices pointing outward like spokes on a wheel.',
        blueprint: 'Each monomer folds an antiparallel four-α-helix bundle oriented radially from bore to rim.',
        scientific: 'Each protomer folds a radial four-α-helix bundle (helices LS, RS, LR, RR) spanning r = 2–9 nm.'
      },
      es: {
        pop: 'Cada ladrillo agrupa cuatro hélices α apuntando hacia afuera como los radios de una rueda.',
        blueprint: 'Cada monómero pliega un haz antiparalelo de cuatro hélices α orientado en sentido radial.',
        scientific: 'Cada protómero pliega un haz radial de cuatro hélices α (LS, RS, LR, RR) de r = 2 a 9 nm.'
      }
    },
    'tmv.ch1.rna.01': {
      en: {
        pop: 'Tucked 4 nm from the center winds the 6.4 kb [[(+)ssRNA genome|rna]] like a hidden watch spring.',
        blueprint: 'Recessed at r = 4.0 nm coils the single-stranded 6.4 kb [[(+)ssRNA genome|rna]] payload.',
        scientific: 'Coiling at 4.0 nm radius is one 6,395-nt 5′-m⁷GpppG-capped [[(+)ssRNA genome|rna]] strand.'
      },
      es: {
        pop: 'Oculto a 4 nm del eje se enrolla el [[genoma de (+)ARNmc|rna]] de 6,4 kb como muelle de reloj.',
        blueprint: 'Alojado a r = 4,0 nm corre el [[genoma de (+)ARNmc|rna]] de 6,4 kb en espiral protegida.',
        scientific: 'A 4,0 nm de radio se enrolla una hebra de [[(+)ARNmc genómico|rna]] de 6.395 nt con caperuza 5′.'
      }
    },
    'tmv.ch1.rna.02': {
      en: {
        pop: 'Precision grip: every single protein brick cradles exactly three RNA letters in a snug groove!',
        blueprint: 'Fixed 1:3 stoichiometry: each coat monomer clamps three RNA nucleotides in a basic groove.',
        scientific: 'Basic residues (Arg90, Arg92, Arg112, Arg113) bind three RNA phosphates per coat protomer.'
      },
      es: {
        pop: '¡Agarre exacto! Cada ladrillo proteico abraza exactamente tres letras de ARN en su ranura.',
        blueprint: 'Estequiometría fija 1:3: cada monómero sujeta tres nucleótidos de ARN en un surco básico.',
        scientific: 'Residuos básicos (Arg90, Arg92, Arg112, Arg113) neutralizan tres fosfatos de ARN por subunidad.'
      }
    },
    'tmv.ch1.rna.03': {
      en: {
        pop: 'Buried under 5 nm of solid armor, TMV laughs off boiling sap and survives 50 years in dry leaves!',
        blueprint: 'Five nanometers of radial protein shielding protect the RNA from RNases and decades of drying.',
        scientific: 'A 5.0 nm outer protein barrier excludes ribonucleases, preserving infectivity >50 years dry.'
      },
      es: {
        pop: 'Bajo 5 nm de armadura sólida, ¡resiste enzimas y sobrevive 50 años en hojas secas!',
        blueprint: 'Cinco nanómetros de blindaje radial protegen el ARN frente a RNasas y décadas de sequedad.',
        scientific: 'Una barrera proteica externa de 5,0 nm excluye ribonucleasas y conserva infectividad por décadas.'
      }
    },
    'tmv.ch1.chan.01': {
      en: {
        pop: 'Peek down the barrel: a 4 nm water-filled [[hollow channel|channel]] runs straight through the core!',
        blueprint: 'Axial conduit: a 4.0 nm [[hollow channel|channel]] runs the full 300 nm length of the cylinder.',
        scientific: 'A solvent-filled 4.0 nm diameter [[axial lumen|channel]] (r = 0–2.0 nm) spans the entire virion.'
      },
      es: {
        pop: 'Mira por el cañón: ¡un [[canal hueco|channel]] de 4 nm lleno de agua cruza todo el centro!',
        blueprint: 'Conducto axial: un [[canal hueco|channel]] de 4,0 nm recorre los 300 nm del cilindro.',
        scientific: 'Un [[lumen axial hueco|channel]] de 4,0 nm de diámetro (r = 0–2,0 nm) atraviesa el virión.'
      }
    },
    'tmv.ch1.chan.02': {
      en: {
        pop: 'Lining that tunnel are grumpy negative charges called Caspar carboxylates—a hair-trigger trap!',
        blueprint: 'High-density acidic Caspar carboxylate clusters line the inner lumen wall as ion sensors.',
        scientific: 'Anomalously high-pKa Caspar carboxylates (Glu95, Glu97, Glu106, Asp109) ring the 4 nm bore.'
      },
      es: {
        pop: 'Tapizando ese túnel esperan cargas negativas de Caspar: ¡un gatillo listo para saltar!',
        blueprint: 'Agrupaciones ácidas de carboxilatos de Caspar tapizan el lumen como sensores iónicos.',
        scientific: 'Carboxilatos de Caspar de pKa elevado (Glu95, Glu97, Glu106, Asp109) rodean el conducto.'
      }
    },
    'tmv.ch1.chan.03': {
      en: {
        pop: 'Outside, Ca²⁺ pins those magnets calm; inside a low-Ca²⁺ leaf cell, they repel and pop the lid!',
        blueprint: 'Extracellular Ca²⁺ locks the latch; nanomolar cytosolic Ca²⁺ triggers electrostatic uncoating.',
        scientific: 'Millimolar sap Ca²⁺ bridges carboxylates; ~100 nM cytosolic Ca²⁺ at pH 7.5 drives repulsion.'
      },
      es: {
        pop: 'Fuera, el Ca²⁺ las sujeta; dentro del citosol pobre en calcio, ¡se repelen y abren la tapa!',
        blueprint: 'El Ca²⁺ externo bloquea el cierre; el bajo Ca²⁺ citosólico dispara repulsión y apertura.',
        scientific: 'El Ca²⁺ milimolar externo estabiliza el tubo; a ~100 nM de Ca²⁺ citosólico (pH 7,5) se abre.'
      }
    },
    'tmv.ch2.disc.01': {
      en: {
        pop: 'Like Iron Man’s Mark XLII suit, purified TMV bricks and RNA snap into a live virus in a test tube!',
        blueprint: 'Zero external chaperones required: purified coat protein and RNA self-assemble autonomously.',
        scientific: 'Fraenkel-Conrat & Williams (1955) proved spontaneous in vitro reconstitution from CP and RNA.'
      },
      es: {
        pop: '¡Como la armadura de Iron Man, proteína y ARN puros se arman solos en un tubo de ensayo!',
        blueprint: 'Cero chaperonas externas: proteína de cubierta y ARN purificados se autoensamblan solos.',
        scientific: 'Fraenkel-Conrat y Williams (1955) demostraron reconstitución infecciosa espontánea in vitro.'
      }
    },
    'tmv.ch2.disc.02': {
      en: {
        pop: 'Double-decker [[20S protein discs|disc]] sniff out the secret OAS hairpin on viral [[RNA|rna]]!',
        blueprint: 'Bilayer 34-subunit [[20S protein discs|disc]] nucleate selectively on the OAS [[RNA|rna]] loop.',
        scientific: 'Two-layer 34-mer [[20S discs|disc]] bind the G-rich Origin-of-Assembly hairpin in [[(+)ssRNA|rna]].'
      },
      es: {
        pop: '¡Los [[discos proteicos 20S|disc]] de dos pisos detectan la horquilla secreta OAS del [[ARN|rna]]!',
        blueprint: 'Los [[discos proteicos 20S|disc]] bicapa nuclean selectivamente sobre la horquilla OAS del [[ARN|rna]].',
        scientific: '[[Discos bicapa 20S|disc]] (34 subunidades) fijan la horquilla OAS rica en G del [[ARN|rna]] viral.'
      }
    },
    'tmv.ch2.disc.03': {
      en: {
        pop: 'Click! Each disc twists into a spiral lock-washer and reels the RNA loop up the [[channel|channel]].',
        blueprint: 'Disc-to-lock-washer switching reels a traveling 5′ RNA loop upward through the [[channel|channel]].',
        scientific: 'Slippage into a 33⅓-subunit proto-helix pulls a 5′ RNA loop up the 4 nm [[axial lumen|channel]].'
      },
      es: {
        pop: '¡Clic! Cada disco pasa a arandela espiral e iza el lazo de ARN por el [[canal|channel]].',
        blueprint: 'La transición a arandela helicoidal iza un bucle 5′ de ARN por el [[canal|channel]] central.',
        scientific: 'El paso a protohélice de 33⅓ subunidades arrastra el bucle 5′ por el [[canal|channel]] de 4 nm.'
      }
    },
    'tmv.ch2.ribo.01': {
      en: {
        pop: 'Down in a wounded leaf cell, low calcium pops the 5′ cap out like a loose sweater thread!',
        blueprint: 'Cytosolic Ca²⁺ depletion selectively loosens the 5′ end, exposing the m⁷GpppG cap.',
        scientific: 'Weak G-poor 5′-leader interactions uncoat first upon decalcification, exposing the 5′ cap.'
      },
      es: {
        pop: 'En la hoja herida, el bajo calcio suelta la punta 5′ como la hebra suelta de un suéter.',
        blueprint: 'La caída de Ca²⁺ citosólico afloja el extremo 5′ y expone la caperuza de traducción.',
        scientific: 'El extremo 5′ pobre en guaninas se desestabiliza primero al perder Ca²⁺, exponiendo su caperuza.'
      }
    },
    'tmv.ch2.ribo.02': {
      en: {
        pop: 'Plant [[80S ribosomes|ribo]] yank that thread in a "striposome" tug-of-war while building replicase!',
        blueprint: 'Host [[80S ribosomes|ribo]] execute co-translational stripping while synthesizing viral replicase.',
        scientific: 'Translating plant [[80S ribosomes|ribo]] form a "striposome," dislodging CP to express 126/183K RdRp.'
      },
      es: {
        pop: '¡Los [[ribosomas 80S|ribo]] tiran del hilo en modo «estriposoma» mientras fabrican replicasa!',
        blueprint: 'Los [[ribosomas 80S|ribo]] ejecutan desencapsidado cotraduccional al sintetizar la replicasa.',
        scientific: 'Los [[ribosomas 80S|ribo]] forman un «estriposoma» que desplaza la cubierta y traduce la RdRp.'
      }
    },
    'tmv.ch2.mp.01': {
      en: {
        pop: 'Plant cells sit behind Attack on Titan cellulose walls—membrane budding will never work here!',
        blueprint: 'Rigid cellulosic cell walls block extracellular budding, requiring direct intercellular tunneling.',
        scientific: 'Pecto-cellulosic plant cell walls preclude plasma-membrane budding, necessitating symplastic spread.'
      },
      es: {
        pop: 'Las células vegetales tienen murallas tipo Attack on Titan: ¡aquí no sirve gemar membranas!',
        blueprint: 'Las paredes celulósicas rígidas impiden la gemación y exigen túneles directos entre células.',
        scientific: 'La pared pectocelulósica impide la gemación de membrana y obliga al transporte simplástico.'
      }
    },
    'tmv.ch2.mp.02': {
      en: {
        pop: 'Like a Dune sandworm boring a heist tunnel, [[30 kDa Movement Protein|mp]] pries plasmodesmata wide!',
        blueprint: 'Viral [[30 kDa Movement Protein|mp]] dilates plasmodesmata pores to shuttle RNA into neighbor cells.',
        scientific: '[[30 kDa Movement Protein (MP30)|mp]] increases plasmodesmal size-exclusion limits to transport vRNP.'
      },
      es: {
        pop: '¡Como gusano de Dune abriendo túnel, la [[proteína de movimiento de 30 kDa|mp]] ensancha poros!',
        blueprint: 'La [[proteína de movimiento de 30 kDa|mp]] dilata los plasmodesmos para cruzar a células vecinas.',
        scientific: 'La [[proteína de movimiento MP30|mp]] amplía el límite de exclusión plasmodésmico para el vRNP.'
      }
    },
    'tmv.ch3.flows.01': {
      en: {
        pop: 'Two-way magic trick: watch discs stack bricks up top while ribosomes strip them down below!',
        blueprint: 'Bidirectional view: autonomous 20S disc assembly above and Ca²⁺-triggered stripping below.',
        scientific: 'Simultaneous visualization of OAS-nucleated 20S elongation above and striposome uncoating below.'
      },
      es: {
        pop: 'Truco doble: ¡arriba se apilan arandelas nuevas y abajo los ribosomas desnudan el bastón!',
        blueprint: 'Flujo bidireccional: autoensamblaje por discos 20S arriba y desnudamiento por ribosomas abajo.',
        scientific: 'Vista simultánea de la elongación por discos 20S en OAS arriba y el estriposoma abajo.'
      }
    },
    'tmv.ch3.oas.01': {
      en: {
        pop: 'Up top, the OAS hairpin threads through fresh [[20S discs|disc]] like needle and thread.',
        blueprint: 'At the growing apex, the traveling OAS RNA loop threads through incoming [[20S discs|disc]].',
        scientific: 'Apical elongation threads the 5′ traveling RNA loop upward through incoming [[20S discs|disc]].'
      },
      es: {
        pop: 'Arriba, el bucle OAS se enhebra como aguja e hilo por nuevos [[discos 20S|disc]].',
        blueprint: 'En el extremo creciente, el lazo viajero de ARN atraviesa los [[discos 20S|disc]] entrantes.',
        scientific: 'El bucle viajero 5′ del ARN se enhebra hacia arriba por nuevos [[discos bicapa 20S|disc]].'
      }
    },
    'tmv.ch3.oas.02': {
      en: {
        pop: 'Snap! Each washer twists into the [[helical coat|coat]], growing the lightsaber hilt taller.',
        blueprint: 'Protonated washers lock onto the [[helical coat|coat]], extending the 18 nm cylinder.',
        scientific: 'Conformational ring-to-helix switching extends the 16⅓-subunit/turn [[helical coat|coat]] rod.'
      },
      es: {
        pop: '¡Chas! Cada arandela encaja en la [[cubierta helicoidal|coat]] y alarga el bastón.',
        blueprint: 'Cada arandela se traba en la [[cubierta helicoidal|coat]], extendiendo el cilindro de 18 nm.',
        scientific: 'La transición anillo-hélice extiende el cilindro de la [[cubierta helicoidal|coat]] (16⅓/vuelta).'
      }
    },
    'tmv.ch3.casp.01': {
      en: {
        pop: 'Down below, calcium drains from the [[4 nm channel|channel]] and pops the bottom bricks loose!',
        blueprint: 'Ca²⁺ efflux from the [[4 nm channel|channel]] triggers carboxylate repulsion at the 5′ tip.',
        scientific: 'Cytosolic Ca²⁺ loss inside the [[4 nm channel|channel]] deprotonates Caspar carboxylates.'
      },
      es: {
        pop: 'Abajo, el calcio escapa del [[canal de 4 nm|channel]] y hace saltar la espira inferior.',
        blueprint: 'La salida de Ca²⁺ del [[canal de 4 nm|channel]] desata repulsión electrostática en la base.',
        scientific: 'La caída de Ca²⁺ en el [[canal de 4 nm|channel]] desprotona los carboxilatos de Caspar.'
      }
    },
    'tmv.ch3.casp.02': {
      en: {
        pop: '[[Ribosomes|ribo]] crank out replicase while [[Movement Protein|mp]] smuggles RNA next door!',
        blueprint: '[[Ribosomes|ribo]] translate replicase as [[Movement Protein|mp]] ferries RNA via plasmodesmata.',
        scientific: '80S [[Ribosomes|ribo]] express 126/183K RdRp while [[MP30|mp]] chaperones vRNP across cell walls.'
      },
      es: {
        pop: '¡Los [[ribosomas|ribo]] crean replicasa y la [[proteína de movimiento|mp]] cuela ARN al vecino!',
        blueprint: 'Los [[ribosomas|ribo]] traducen replicasa y la [[proteína de movimiento|mp]] abre plasmodesmos.',
        scientific: 'Los [[ribosomas|ribo]] 80S traducen RdRp mientras la [[proteína MP30|mp]] cruza plasmodesmos.'
      }
    },
    'tmv.ch4.roll.01': {
      en: {
        pop: 'Helical Coat Protein: 2,130 four-helix Lego bricks spiraling 16⅓ per turn.',
        blueprint: 'Helical Coat Protein: 2,130 four-α-helix monomers in a 16⅓-per-turn lattice.',
        scientific: 'Coat Protein (158 aa, 17.5 kDa, PDB 2TMV): 2,130 subunits at 16⅓ per 2.3 nm helical turn.'
      },
      es: {
        pop: 'Proteína de cubierta: 2.130 ladrillos tipo Lego que giran a 16⅓ piezas por vuelta.',
        blueprint: 'Cubierta helicoidal: 2.130 monómeros de cuatro hélices α a 16⅓ subunidades por giro.',
        scientific: 'Proteína de cubierta (158 aa, 17,5 kDa, PDB 2TMV): 2.130 copias a 16⅓ por vuelta de 2,3 nm.'
      }
    },
    'tmv.ch4.roll.02': {
      en: {
        pop: '20S lock-washer discs: 34-brick double rings that build the virus all by themselves.',
        blueprint: '20S assembly discs: 34-subunit bilayer rings that convert into helical lock-washers.',
        scientific: 'Bilayer 34-subunit 20S protein aggregates that nucleate on OAS to form 33⅓-mer proto-helices.'
      },
      es: {
        pop: 'Discos 20S: anillos dobles de 34 ladrillos que arman el bastón por pura física.',
        blueprint: 'Discos de ensamblaje 20S: anillos bicapa de 34 piezas que pasan a arandela helicoidal.',
        scientific: 'Agregados bicapa 20S de 34 subunidades que nuclean en OAS formando protohélices de 33⅓.'
      }
    },
    'tmv.ch4.roll.03': {
      en: {
        pop: '6.4 kb (+)ssRNA: one spiral RNA spring gripped three letters per brick at 4 nm radius.',
        blueprint: '6.4 kb (+)ssRNA payload: single strand clamped 3 nt per subunit at r = 4.0 nm.',
        scientific: '6,395-nt 5′-capped (+)ssRNA genome coiled at r = 4.0 nm (3 nt/subunit) with a 3′ tRNA-like end.'
      },
      es: {
        pop: 'Genoma (+)ARNmc de 6,4 kb: muelle espiral sujeto a tres letras por ladrillo a r = 4 nm.',
        blueprint: 'Carga (+)ARNmc de 6,4 kb: hebra sujeta a razón de 3 nt por monómero a r = 4,0 nm.',
        scientific: 'Genoma (+)ARNmc de 6.395 nt con caperuza 5′ enrollado a r = 4,0 nm (3 nt/subunidad).'
      }
    },
    'tmv.ch4.roll.04': {
      en: {
        pop: '4 nm channel & Caspar switch: the water chimney whose low-calcium magnets pop the rod.',
        blueprint: '4 nm axial bore & Caspar switch: Ca²⁺/H⁺-gated electrostatic uncoating trigger.',
        scientific: '4.0 nm axial lumen lined by Glu95/97/106 and Asp109 Caspar carboxylate Ca²⁺ sensors.'
      },
      es: {
        pop: 'Canal de 4 nm e interruptor Caspar: la chimenea que salta al perder calcio celular.',
        blueprint: 'Conducto de 4 nm y sensor Caspar: gatillo electrostático regulado por Ca²⁺ y pH.',
        scientific: 'Lumen axial de 4,0 nm tapizado por los sensores carboxilato de Caspar (Glu95/97/106, Asp109).'
      }
    },
    'tmv.ch4.roll.05': {
      en: {
        pop: 'Host 80S "striposome": plant ribosomes yanking RNA free like a loose sweater yarn.',
        blueprint: 'Host 80S "striposome": ribosomes coupling replicase translation to coat-subunit removal.',
        scientific: 'Cytosolic plant 80S ribosomes driving co-translational uncoating of the 5′ replicase ORF.'
      },
      es: {
        pop: 'Ribosomas 80S «estriposoma»: obreros vegetales que desnudan el bastón tirando del ARN.',
        blueprint: 'Ribosomas 80S «estriposoma»: maquinaria que acopla traducción y desnudamiento viral.',
        scientific: 'Ribosomas vegetales 80S que ejecutan desencapsidación cotraduccional del ORF replicasa.'
      }
    },
    'tmv.ch4.roll.06': {
      en: {
        pop: '30 kDa Movement Protein: the heist-tunnel crowbar prying plant wall pores wide open.',
        blueprint: '30 kDa Movement Protein: symplastic shuttle dilating plasmodesmata across cell walls.',
        scientific: '30 kDa Movement Protein (MP30) gating plasmodesmal channels for non-enveloped vRNP transit.'
      },
      es: {
        pop: 'Proteína de movimiento 30 kDa: la palanca que ensancha túneles entre paredes vegetales.',
        blueprint: 'Proteína de movimiento 30 kDa: lanzadera simplástica que dilata poros plasmodesmos.',
        scientific: 'Proteína de movimiento de 30 kDa (MP30) que dilata plasmodesmos para el paso intercelular.'
      }
    },
    'tmv.ch4.exp.01': {
      en: {
        pop: 'Virology’s first superstar is all yours—fly around TMV and inspect its spiral armor!',
        blueprint: 'Guided sequence complete. Free-camera inspection of the TMV rod assembly is unlocked.',
        scientific: 'Concluding guided tour; explore the Tobacco Mosaic Virus helical nucleoprotein interactively.'
      },
      es: {
        pop: 'La primera estrella de la virología es toda tuya: vuela libre por la espiral del TMV.',
        blueprint: 'Secuencia guiada finalizada. Inspección libre del cilindro del TMV habilitada.',
        scientific: 'Fin del recorrido guiado; explora interactivamente la nucleoproteína helicoidal del TMV.'
      }
    },
    'tmv.ch4.exp.02': {
      en: {
        pop: 'Click any tag to zoom into 2.9 Å X-ray fiber diffraction—Rosalind Franklin’s legacy live!',
        blueprint: 'Select any component tag to inspect its 2.9 Å X-ray fiber diffraction coordinates.',
        scientific: 'Click any label to inspect the 2.9 Å X-ray fiber diffraction atomic model (PDB 2TMV).'
      },
      es: {
        pop: '¡Pulsa cualquier etiqueta para bajar a 2,9 Å y ver vivo el legado de Rosalind Franklin!',
        blueprint: 'Selecciona cualquier etiqueta para examinar sus coordenadas por difracción a 2,9 Å.',
        scientific: 'Haz clic en cualquier etiqueta para examinar el modelo atómico a 2,9 Å (PDB 2TMV).'
      }
    },
    'tmv.det.rhel.01': {
      en: {
        pop: 'Sixteen and a third four-helix bricks per turn lock into an 18 nm armor pipe!',
        blueprint: '16⅓ radial four-helix-bundle monomers per turn assemble the 18.0 nm outer cylinder.',
        scientific: '16⅓ four-α-helix Coat Protein subunits per 2.3 nm turn build the 18.0 nm rod (PDB 2TMV).'
      },
      es: {
        pop: '¡16⅓ ladrillos de cuatro hélices por vuelta cierran un tubo blindado de 18 nm!',
        blueprint: '16⅓ monómeros radiales de cuatro hélices por giro forman el cilindro externo de 18,0 nm.',
        scientific: '16⅓ subunidades de cuatro hélices α por paso de 2,3 nm forman el bastón de 18,0 nm (2TMV).'
      }
    },
    'tmv.det.rhel.02': {
      en: {
        pop: 'Every brick hugs three RNA letters at 4 nm radius—safe under 5 nm of solid protein.',
        blueprint: 'Each monomer’s inner basic groove clamps three RNA nucleotides at r = 4.0 nm.',
        scientific: 'Three ribonucleotides nestle at r = 4.0 nm per protomer, neutralized by Arg90/92/112/113.'
      },
      es: {
        pop: 'Cada pieza abraza tres letras de ARN a 4 nm del centro bajo 5 nm de pura proteína.',
        blueprint: 'El surco básico interno de cada monómero sujeta tres nucleótidos a 4,0 nm de radio.',
        scientific: 'Tres ribonucleótidos se alojan a r = 4,0 nm por protómero, fijados por Arg90/92/112/113.'
      }
    },
    'tmv.det.rchn.01': {
      en: {
        pop: 'Negative Caspar charges ring the 4.0 nm central chimney like spring-loaded magnets.',
        blueprint: 'Acidic Caspar carboxylate rings line the 4.0 nm central bore as electrostatic sensors.',
        scientific: 'Glu95, Glu97, Glu106, and Asp109 Caspar carboxylates line the 4.0 nm axial lumen (PDB 2TMV).'
      },
      es: {
        pop: 'Cargas negativas de Caspar rodean la chimenea de 4,0 nm como imanes comprimidos.',
        blueprint: 'Anillos ácidos de carboxilatos de Caspar tapizan el conducto de 4,0 nm como sensores.',
        scientific: 'Los carboxilatos Glu95, Glu97, Glu106 y Asp109 tapizan el lumen axial de 4,0 nm (PDB 2TMV).'
      }
    },
    'tmv.det.rchn.02': {
      en: {
        pop: 'Step into low-calcium leaf cytosol and—boing!—mutual repulsion pops the 5′ tip open!',
        blueprint: 'Cytosolic Ca²⁺ drop removes ionic bridges, triggering coulombic uncoating at the 5′ end.',
        scientific: 'Transition from mM sap Ca²⁺ to ~100 nM cytosolic Ca²⁺ drives coulombic repulsion and uncoating.'
      },
      es: {
        pop: 'Al entrar al citosol pobre en calcio, ¡la repulsión mutua destapa la punta 5′!',
        blueprint: 'La caída de Ca²⁺ citosólico elimina puentes iónicos y dispara repulsión en el extremo 5′.',
        scientific: 'El paso de Ca²⁺ mM externo a ~100 nM citosólico induce repulsión coulombiana en 5′.'
      }
    },
    'tmv.det.rasm.01': {
      en: {
        pop: 'Self-building magic: flat two-layer 20S washers spot the secret OAS loop on viral RNA!',
        blueprint: 'Bilayer 34-subunit 20S discs recognize the Origin-of-Assembly hairpin in progeny RNA.',
        scientific: '34-mer bilayer 20S aggregates selectively bind the G-rich OAS hairpin (nt 5,444–5,518).'
      },
      es: {
        pop: 'Magia pura: ¡arandelas planas 20S de dos pisos localizan el bucle OAS del ARN!',
        blueprint: 'Discos bicapa 20S de 34 piezas reconocen la horquilla de origen OAS en el ARN hijo.',
        scientific: 'Agregados bicapa 20S (34 subunidades) unen específicamente la horquilla OAS rica en G.'
      }
    },
    'tmv.det.rasm.02': {
      en: {
        pop: 'Snapping into spiral lock-washers, they hoist the 5′ RNA tail straight up the chimney!',
        blueprint: 'Lock-washer conversion reels a traveling loop of 5′ RNA upward through the 4 nm bore.',
        scientific: 'Ring-to-protohelix dislocation threads a traveling 5′ RNA loop up the 4.0 nm central lumen.'
      },
      es: {
        pop: '¡Al saltar a arandelas espirales, izan la cola 5′ del ARN directo por la chimenea!',
        blueprint: 'La conversión en arandela helicoidal iza el bucle 5′ del ARN por el conducto de 4 nm.',
        scientific: 'La dislocación a protohélice enhebra un lazo viajero 5′ de ARN por el lumen de 4,0 nm.'
      }
    },
    'tmv.det.sch.01': {
      en: {
        pop: 'Clean lightsaber cutaway: 16⅓ identical protein bricks winding every spiral floor.',
        blueprint: 'Isolated cylinder cutaway: 16⅓ identical coat monomers per 2.3 nm helical turn.',
        scientific: 'Architectural TMV section: right-handed 16⅓-subunit/turn nucleoprotein helix (18 nm OD).'
      },
      es: {
        pop: 'Corte limpio del sable: 16⅓ ladrillos proteicos idénticos en cada piso espiral.',
        blueprint: 'Corte aislado del cilindro: 16⅓ monómeros idénticos por vuelta helicoidal de 2,3 nm.',
        scientific: 'Sección arquitectónica del TMV: hélice dextrógira de 16⅓ subunidades/vuelta (18 nm DE).'
      }
    },
    'tmv.det.sch.02': {
      en: {
        pop: 'One RNA ribbon coils at 4 nm radius right around the 4 nm hollow water tunnel.',
        blueprint: 'Single-stranded RNA winds at r = 4.0 nm coaxial with the 4.0 nm central lumen.',
        scientific: '6,395-nt (+)ssRNA spirals at r = 4.0 nm around the 4.0 nm solvent-accessible bore.'
      },
      es: {
        pop: 'Una sola cinta de ARN gira a 4 nm de radio alrededor del túnel hueco de 4 nm.',
        blueprint: 'El ARN monocatenario se enrolla a r = 4,0 nm coaxial al conducto hueco de 4,0 nm.',
        scientific: 'El (+)ARNmc de 6.395 nt gira a r = 4,0 nm en torno al lumen central hueco de 4,0 nm.'
      }
    },
    'tmv.det.turn.01': {
      en: {
        pop: 'One spiral floor rebuilt from PDB 2TMV: 17 coat bricks clutching 51 RNA letters!',
        blueprint: 'Single helical turn reconstructed from PDB 2TMV: 17 coat monomers clamping 51 nt.',
        scientific: '2.9 Å helical turn from X-ray fiber diffraction (PDB 2TMV): 17 CP subunits and 51 nt RNA.'
      },
      es: {
        pop: 'Un piso espiral reconstruido de PDB 2TMV: ¡17 ladrillos sujetando 51 letras de ARN!',
        blueprint: 'Una vuelta helicoidal de PDB 2TMV: 17 monómeros de cubierta fijando 51 nucleótidos.',
        scientific: 'Vuelta helicoidal a 2,9 Å por difracción de fibras (PDB 2TMV): 17 subunidades y 51 nt.'
      }
    },
    'tmv.det.turn.02': {
      en: {
        pop: 'Crimson RNA bases tuck neatly between emerald four-helix bricks like jewels in a crown.',
        blueprint: 'Red ribonucleotides slot into basic radial grooves between green four-helix monomers.',
        scientific: 'Trinucleotide RNA segments (red) intercalate between radial four-α-helix bundles (green).'
      },
      es: {
        pop: 'Las bases rojas de ARN encajan como joyas entre los ladrillos verdes de cuatro hélices.',
        blueprint: 'Los ribonucleótidos rojos se alojan en surcos básicos entre monómeros verdes de 4 hélices.',
        scientific: 'Tripletes de ARN (rojo) se intercalan entre haces radiales de cuatro hélices α (verde).'
      }
    },
    'tmv.det.sub.01': {
      en: {
        pop: 'Meet the lone Lego brick that builds the whole fortress (PDB 2TMV): one 158-aa Coat Protein!',
        blueprint: 'Asymmetric building block (PDB 2TMV): a single 158-residue Coat Protein monomer.',
        scientific: '2.9 Å asymmetric unit of TMV vulgare (PDB 2TMV): one 158-aa (17.5 kDa) Coat Protein chain.'
      },
      es: {
        pop: '¡He aquí la pieza Lego que construye toda la fortaleza (PDB 2TMV): 158 aminoácidos!',
        blueprint: 'Bloque elemental asimétrico (PDB 2TMV): un monómero de cubierta de 158 aminoácidos.',
        scientific: 'Unidad asimétrica a 2,9 Å de TMV vulgare (PDB 2TMV): una cadena de 158 aa (17,5 kDa).'
      }
    },
    'tmv.det.sub.02': {
      en: {
        pop: 'Its four α-helices (LS, RS, LR, RR) team up to hug three RNA bases—G, A, and A!',
        blueprint: 'Four antiparallel α-helices (LS, RS, LR, RR) clamp the G–A–A trinucleotide motif.',
        scientific: 'Left/right slewed and radial α-helices (LS, RS, LR, RR) coordinate one G–A–A RNA triplet.'
      },
      es: {
        pop: '¡Sus cuatro hélices α (LS, RS, LR, RR) se unen para abrazar tres bases: G, A y A!',
        blueprint: 'Cuatro hélices α antiparalelas (LS, RS, LR, RR) fijan el triplete de bases G–A–A.',
        scientific: 'Las cuatro hélices α (LS, RS, LR, RR) coordinan estequiométricamente un triplete G–A–A.'
      }
    }
  },
  'viruses': {
    'vir.ch0.intro.01': {
      en: {
        pop: 'Zero heartbeat, zero stomach: viruses are pure genetic Poké Balls waiting to hijack a living cell!',
        blueprint: 'Non-cellular systems: each virion is an inert nucleic-acid payload inside a delivery hull.',
        scientific: 'Acellular obligate intracellular parasites comprising a DNA or RNA genome within a capsid.'
      },
      es: {
        pop: '¡Sin pulso ni estómago! Los virus son Poké Balls genéticas esperando secuestrar una célula viva.',
        blueprint: 'Sistemas acelulares: cada virión es un código genético inerte dentro de un chasis de entrega.',
        scientific: 'Parásitos intracelulares obligados acelulares formados por ADN o ARN en cubierta proteica.'
      }
    },
    'vir.ch0.intro.02': {
      en: {
        pop: 'Meet the Sinister Five of the virosphere—almost every virus on Earth rocks one of these builds!',
        blueprint: 'Across nature, nearly all viral delivery vehicles converge onto five canonical chassis classes.',
        scientific: 'Global virosphere diversity converges onto five structural morphotypes across Baltimore classes.'
      },
      es: {
        pop: '¡Conoce a los Cinco Siniestros virales: casi todo virus en la Tierra usa uno de estos diseños!',
        blueprint: 'En la naturaleza, casi todo vehículo viral converge en cinco arquitecturas de chasis.',
        scientific: 'La virosfera global converge en cinco morfotipos estructurales de la clasificación de Baltimore.'
      }
    },
    'vir.ch0.intro.03': {
      en: {
        pop: 'Click any suspect’s badge anytime to jump straight into its full-scale crime scene!',
        blueprint: 'Click any virion label at any point to load its full-scale interactive molecular scene.',
        scientific: 'Select any virion tag at any time to launch its atomic-scale host-infection scene.'
      },
      es: {
        pop: '¡Pulsa la placa de cualquier sospechoso cuando quieras para saltar a su escena completa!',
        blueprint: 'Haz clic en la etiqueta de cualquier virión para abrir su escena molecular completa.',
        scientific: 'Selecciona cualquier etiqueta viral para abrir su escena completa de infección a escala atómica.'
      }
    },
    'vir.ch1.phage.01': {
      en: {
        pop: 'Built like an Apollo lunar lander, [[Bacteriophage T4|bacteriophage]] pairs a crystal head with a syringe!',
        blueprint: 'Hybrid architecture: [[Bacteriophage T4|bacteriophage]] mates a prolate head to a contractile tail.',
        scientific: 'Myovirus [[Bacteriophage T4|bacteriophage]] (Baltimore I) couples a T=13/Q=20 head to a tail.'
      },
      es: {
        pop: '¡Como módulo lunar Apolo, el [[bacteriófago T4|bacteriophage]] une cabeza de cristal y jeringa!',
        blueprint: 'Diseño híbrido: el [[bacteriófago T4|bacteriophage]] acopla cápside prolata y cola contráctil.',
        scientific: 'El miovirus [[bacteriófago T4|bacteriophage]] (Baltimore I) une cabeza T=13/Q=20 y cola.'
      }
    },
    'vir.ch1.phage.02': {
      en: {
        pop: 'Snap! Its crossbow sleeve fires a needle straight into E. coli, blasting 169 kbp of DNA inside.',
        blueprint: 'Spring-loaded sheath contraction drives a β-helix needle to inject 169 kbp dsDNA into E. coli.',
        scientific: 'ATP-free gp18 contraction drives the gp19/gp5 needle across E. coli to eject 168.9 kbp dsDNA.'
      },
      es: {
        pop: '¡Chas! Su ballesta clava una aguja en E. coli y dispara 169 kpb de ADN a presión.',
        blueprint: 'Su vaina con resorte clava una aguja perforadora e inyecta 169 kpb de ADNbc en E. coli.',
        scientific: 'La contracción de gp18 clava la aguja gp19/gp5 en E. coli inyectando 168,9 kpb de ADNbc.'
      }
    },
    'vir.ch1.cov.01': {
      en: {
        pop: 'Shapeshifter [[SARS-CoV-2|coronavirus]] hides a giant 30 kb RNA scroll inside a stolen fat bubble!',
        blueprint: 'Enveloped courier [[SARS-CoV-2|coronavirus]] houses 30 kb (+)ssRNA inside a host lipid hull.',
        scientific: 'Betacoronavirus [[SARS-CoV-2|coronavirus]] (Baltimore IV) packs 29.9 kb (+)ssRNA in an ERGIC bilayer.'
      },
      es: {
        pop: '¡El cambiaformas [[SARS-CoV-2|coronavirus]] esconde un rollo de 30 kb en grasa robada!',
        blueprint: 'El mensajero envuelto [[SARS-CoV-2|coronavirus]] aloja 30 kb de (+)ARNmc en bicapa huésped.',
        scientific: 'El betacoronavirus [[SARS-CoV-2|coronavirus]] (Baltimore IV) envuelve 29,9 kb en bicapa ERGIC.'
      }
    },
    'vir.ch1.cov.02': {
      en: {
        pop: 'Sugar-camouflaged Spike clubs crown its surface, waiting to pick human ACE2 airway locks.',
        blueprint: 'Glycan-cloaked Spike homotrimers ring the perimeter to pick ACE2 locks and winch membranes.',
        scientific: 'Homotrimeric S glycoproteins (PDB 6VXX/6VSB) crown the envelope and engage human ACE2 (1R42).'
      },
      es: {
        pop: 'Mazas de espícula camufladas en azúcar coronan la burbuja para forzar cerraduras ACE2.',
        blueprint: 'Homotrímeros S blindados en glicanos coronan el casco para acoplar ACE2 y fundir bicapas.',
        scientific: 'Homotrímeros glicosilados S (PDB 6VXX/6VSB) coronan la envoltura y fijan ACE2 humano (1R42).'
      }
    },
    'vir.ch1.hiv.01': {
      en: {
        pop: 'Double-agent [[HIV-1|hiv]] smuggles an armored Trojan Horse cone inside a T-cell grease cloak!',
        blueprint: 'Retroviral stealth unit [[HIV-1|hiv]] nests a fullerene p24 container inside a raft hull.',
        scientific: 'Lentivirus [[HIV-1|hiv]] (Baltimore VI) encloses a p24 fullerene cone (3J3Q) in a raft bilayer.'
      },
      es: {
        pop: '¡El agente doble [[VIH-1|hiv]] oculta un cono de Troya blindado bajo una capa robada!',
        blueprint: 'La unidad retroviral [[VIH-1|hiv]] aloja un cono de fulereno p24 dentro de balsa lipídica.',
        scientific: 'El lentivirus [[VIH-1|hiv]] (Baltimore VI) encierra un cono p24 (PDB 3J3Q) en bicapa lipídica.'
      }
    },
    'vir.ch1.hiv.02': {
      en: {
        pop: 'Agent Smith style: Reverse Transcriptase and Integrase weld its rewritten code into human DNA!',
        blueprint: 'Onboard RT cross-compiles RNA into dsDNA so Integrase can patch host chromosomes permanently.',
        scientific: 'p66/p51 RT (PDB 1RTD) synthesizes linear cDNA for tetrameric IN (PDB 1EX4) chromatin integration.'
      },
      es: {
        pop: 'Al estilo Agente Smith: ¡RT e integrasa sueldan para siempre su código en el ADN humano!',
        blueprint: 'La RT compila ARN en ADNbc para que la integrasa lo empalme de por vida en cromatina.',
        scientific: 'La RT p66/p51 (PDB 1RTD) genera ADNc lineal que la IN (PDB 1EX4) integra en cromosomas.'
      }
    },
    'vir.ch2.adv.01': {
      en: {
        pop: 'No grease bubble needed—[[Human Adenovirus|adenovirus]] goes full Kryptonian crystal armor!',
        blueprint: 'Zero lipid envelope: [[Human Adenovirus|adenovirus]] relies on a rigid geodesic protein hull.',
        scientific: 'Non-enveloped [[Human Adenovirus|adenovirus]] (Baltimore I) forms a naked ~90 nm capsid.'
      },
      es: {
        pop: 'Sin burbuja de grasa: ¡el [[adenovirus humano|adenovirus]] viste pura armadura de cristal!',
        blueprint: 'Cero envoltura lipídica: el [[adenovirus humano|adenovirus]] emplea un casco geodésico rígido.',
        scientific: 'El [[adenovirus humano|adenovirus]] sin envoltura (Baltimore I) forma un icosaedro de ~90 nm.'
      }
    },
    'vir.ch2.adv.02': {
      en: {
        pop: '240 Hexon shield blocks build 20 flat walls, firing long CAR-hunting antennas from 12 corners.',
        blueprint: '240 Hexon trimers tile 20 triangular facets while 12 corner sockets project CAR-docking booms.',
        scientific: '240 Hexon II trimers (1P30) form a pseudo-T=25 shell with 12 Penton/Fiber vertices (1X9T/1QIU).'
      },
      es: {
        pop: '240 bloques de hexón alzan 20 muros planos con largas antenas cazadoras en 12 esquinas.',
        blueprint: '240 trímeros de hexón pavimentan 20 facetas con 12 mástiles angulares hacia receptores CAR.',
        scientific: '240 trímeros Hexón II (1P30) cierran una red pseudo-T=25 con 12 vértices Pentón/Fibra.'
      }
    },
    'vir.ch2.tmv.01': {
      en: {
        pop: 'Shaped like a 300 nm lightsaber hilt, [[Tobacco Mosaic Virus|tmv]] is an unbreakable plant rod!',
        blueprint: 'Cylindrical rod [[Tobacco Mosaic Virus|tmv]] spans 300 nm in a rigid helical assembly.',
        scientific: 'Tobamovirus [[Tobacco Mosaic Virus|tmv]] (Baltimore IV) forms a 300 × 18 nm helical rod (2TMV).'
      },
      es: {
        pop: '¡Como sable láser de 300 nm, el [[virus del mosaico del tabaco|tmv]] es un bastón irrompible!',
        blueprint: 'El cilindro [[virus del mosaico del tabaco|tmv]] abarca 300 nm de ensamblaje helicoidal rígido.',
        scientific: 'El tobamovirus [[virus del mosaico del tabaco|tmv]] (Baltimore IV) mide 300 × 18 nm (PDB 2TMV).'
      }
    },
    'vir.ch2.tmv.02': {
      en: {
        pop: '2,130 identical Lego bricks spiral around one 6.4 kb RNA spring—tough enough to last decades!',
        blueprint: '2,130 identical coat monomers spiral at 16⅓ per turn to armor a 6.4 kb (+)ssRNA strand.',
        scientific: '2,130 158-aa CP monomers wind at 16⅓ subunits/turn around a 6,395-nt (+)ssRNA at r = 4.0 nm.'
      },
      es: {
        pop: '2.130 ladrillos idénticos giran sobre un muelle de ARN de 6,4 kb resistiendo décadas.',
        blueprint: '2.130 monómeros idénticos giran a 16⅓ por vuelta blindando la hebra (+)ARNmc de 6,4 kb.',
        scientific: '2.130 subunidades de 158 aa giran a 16⅓/vuelta sobre un (+)ARNmc de 6.395 nt a r = 4,0 nm.'
      }
    },
    'vir.ch3.roll.01': {
      en: {
        pop: 'Class 1 — Bacteriophage T4: the spring-loaded lunar syringe hunting E. coli.',
        blueprint: 'Class 1 — Complex myovirus: Bacteriophage T4 mechanochemical dsDNA injector.',
        scientific: 'Baltimore I Caudoviricetes myovirus: Tequatrovirus T4 (168.9 kbp dsDNA, T=13/Q=20 head).'
      },
      es: {
        pop: 'Clase 1 — Bacteriófago T4: la jeringa lunar con resorte cazadora de E. coli.',
        blueprint: 'Clase 1 — Miovirus complejo: inyector mecanoquímico de ADNbc Bacteriófago T4.',
        scientific: 'Miovirus Caudoviricetes (Baltimore I): Tequatrovirus T4 (168,9 kpb ADNbc, cabeza T=13/Q=20).'
      }
    },
    'vir.ch3.roll.02': {
      en: {
        pop: 'Class 2 — SARS-CoV-2: the sugar-cloaked fat bubble packing a 30 kb RNA scroll.',
        blueprint: 'Class 2 — Enveloped (+)ssRNA: SARS-CoV-2 membrane-fusing respiratory virion.',
        scientific: 'Baltimore IV Betacoronavirus: SARS-CoV-2 (~120 nm enveloped virion, 29,903-nt (+)ssRNA).'
      },
      es: {
        pop: 'Clase 2 — SARS-CoV-2: burbuja camuflada en azúcar con un pergamino de 30 kb.',
        blueprint: 'Clase 2 — (+)ARNmc envuelto: virión respiratorio fusogénico SARS-CoV-2.',
        scientific: 'Betacoronavirus (Baltimore IV): SARS-CoV-2 (virión envuelto ~120 nm, (+)ARNmc 29.903 nt).'
      }
    },
    'vir.ch3.roll.03': {
      en: {
        pop: 'Class 3 — HIV-1: the Agent Smith retrovirus hiding a Trojan cone inside a raft cloak.',
        blueprint: 'Class 3 — Enveloped retrovirus: HIV-1 fullerene vault with RT/IN splice engine.',
        scientific: 'Baltimore VI Lentivirus: HIV-1 (diploid 9.7 kb (+)ssRNA, fullerene p24 cone, RT & IN).'
      },
      es: {
        pop: 'Clase 3 — VIH-1: el retrovirus tipo Matrix con un cono de Troya bajo manto lipídico.',
        blueprint: 'Clase 3 — Retrovirus envuelto: bóveda de fulereno VIH-1 con motor de empalme RT/IN.',
        scientific: 'Lentivirus (Baltimore VI): VIH-1 ((+)ARNmc diploide 9,7 kb, cono p24, enzimas RT e IN).'
      }
    },
    'vir.ch3.roll.04': {
      en: {
        pop: 'Class 4 — Human Adenovirus: the naked 20-faced crystal fortress with corner antennas.',
        blueprint: 'Class 4 — Naked icosahedron: Human Adenovirus pseudo-T=25 geodesic dsDNA chassis.',
        scientific: 'Baltimore I Mastadenovirus: HAdV-C5 (90 nm naked pseudo-T=25 capsid, 35.9 kbp dsDNA).'
      },
      es: {
        pop: 'Clase 4 — Adenovirus humano: fortaleza cristalina desnuda de 20 caras y 12 antenas.',
        blueprint: 'Clase 4 — Icosaedro desnudo: chasis geodésico pseudo-T=25 del adenovirus humano.',
        scientific: 'Mastadenovirus (Baltimore I): HAdV-C5 (icosaedro desnudo pseudo-T=25 de 90 nm, 35,9 kpb).'
      }
    },
    'vir.ch3.roll.05': {
      en: {
        pop: 'Class 5 — Tobacco Mosaic Virus: the 300 nm Lego spiral that tunnels through leaves.',
        blueprint: 'Class 5 — Helical rod: Tobacco Mosaic Virus Ca²⁺-gated self-assembling cylinder.',
        scientific: 'Baltimore IV Tobamovirus: TMV (300 × 18 nm 16⅓-subunit/turn helix, 6,395-nt (+)ssRNA).'
      },
      es: {
        pop: 'Clase 5 — Virus del mosaico del tabaco: espiral tipo Lego de 300 nm en hojas.',
        blueprint: 'Clase 5 — Bastón helicoidal: cilindro autoensamblable regulado por Ca²⁺ del TMV.',
        scientific: 'Tobamovirus (Baltimore IV): TMV (hélice 300 × 18 nm de 16⅓/vuelta, (+)ARNmc 6.395 nt).'
      }
    },
    'vir.ch3.exp.01': {
      en: {
        pop: 'Pick your fighter! Click any of the five viruses to dive into its 3D world or atomic parts.',
        blueprint: 'Gallery tour complete. Select any virion to launch its full host scene or 3D sub-modules.',
        scientific: 'Comparative overview complete; select any virion to inspect its infection scene or PDB models.'
      },
      es: {
        pop: '¡Elige a tu luchador! Haz clic en cualquier virus para entrar a su mundo 3D o sus piezas.',
        blueprint: 'Galería completada. Selecciona cualquier virión para abrir su escena o módulos 3D.',
        scientific: 'Comparativa finalizada; pulsa cualquier virión para explorar su escena o modelos PDB.'
      }
    },
    't4.det.rcap.01': {
      en: {
        pop: 'Champagne bottle on steroids: T4’s head packs 169 kbp of DNA coiled to extreme pressure!',
        blueprint: 'High-pressure prolate tank stores 169 kbp dsDNA under intense electrostatic/bending stress.',
        scientific: 'Prolate head (115 × 85 nm) confines 168.9 kbp dsDNA (~60 atm osmotic; ~500 atm peak stress).'
      },
      es: {
        pop: '¡Botella de champán extrema! La cabeza de T4 comprime 169 kpb de ADN a altísima presión.',
        blueprint: 'Tanque prolato de alta presión que almacena 169 kpb de ADNbc bajo fuerte tensión elástica.',
        scientific: 'Cabeza prolata (115 × 85 nm) con 168,9 kpb de ADNbc (~60 atm osmóticas; ~500 atm pico).'
      }
    },
    't4.det.rcap.02': {
      en: {
        pop: '155 gp23* hexplates strapped with 810 Soc seatbelts keep that pressurized vault from bursting!',
        blueprint: '155 gp23* hexamers reinforced by 810 trimeric Soc clamps prevent pressure-vessel rupture.',
        scientific: '930 cleaved gp23* monomers (155 hexamers) braced by 810 Soc trimers form the facets (5VF3).'
      },
      es: {
        pop: '¡155 placas gp23* atadas con 810 cinturones Soc impiden que reviente el tanque!',
        blueprint: '155 hexámeros gp23* reforzados por 810 abrazaderas triméricas Soc blindan las paredes.',
        scientific: '930 monómeros gp23* (155 hexámeros) reforzados por 810 trímeros Soc forman las caras (5VF3).'
      }
    },
    't4.det.rcap.03': {
      en: {
        pop: 'Eleven corners wear gp24* caps, while corner twelve mounts the 12-part gp20 launch nozzle!',
        blueprint: 'Eleven 5-fold vertices house gp24* pentamers; the basal vertex mounts the gp20 portal valve.',
        scientific: 'Eleven vertices carry gp24* pentamers (55 chains); the 12th holds the 12-mer gp20 portal (3JA7).'
      },
      es: {
        pop: 'Once esquinas llevan tapas gp24*, y la duodécima monta la tobera de disparo gp20.',
        blueprint: 'Once vértices montan pentámeros gp24*; el vértice basal aloja la válvula portal gp20.',
        scientific: 'Once vértices portan pentámeros gp24* y el duodécimo aloja el dodecámero gp20 (PDB 3JA7).'
      }
    },
    't4.det.rtail.01': {
      en: {
        pop: 'Twenty-four springy gp18 sleeve rings wrap around twenty-four slick gp19 inner pipe rings.',
        blueprint: 'Coaxial actuator: 24 contractile gp18 sheath rings encase 24 rigid gp19 inner-tube rings.',
        scientific: '144 gp18 subunits in 24 hexameric rings (3J2M) surround 24 hexameric gp19 tube rings (5W5F).'
      },
      es: {
        pop: 'Veinticuatro anillos elásticos gp18 envuelven veinticuatro anillos lisos del tubo gp19.',
        blueprint: 'Actuador coaxial: 24 anillos contráctiles gp18 rodean 24 anillos rígidos del tubo gp19.',
        scientific: '144 subunidades gp18 en 24 anillos (3J2M) rodean 24 anillos hexaméricos del tubo gp19 (5W5F).'
      }
    },
    't4.det.rtail.02': {
      en: {
        pop: 'Six gpWac "whiskers" at the neck tuck the long legs up whenever the water turns hostile.',
        blueprint: 'Neck collar mounts six gpWac fibritin whiskers that stow long fibers in unfavorable media.',
        scientific: 'Hexameric collar bears six ~53 nm trimeric gpWac fibritin whiskers regulating fiber retraction.'
      },
      es: {
        pop: 'Seis «bigotes» gpWac en el cuello pliegan las patas largas si el medio se vuelve hostil.',
        blueprint: 'El collar superior porta seis bigotes gpWac que retraen las fibras en condiciones adversas.',
        scientific: 'El cuello porta seis bigotes triméricos de fibritina gpWac (~53 nm) sensores del entorno.'
      }
    },
    't4.det.rtail.03': {
      en: {
        pop: 'Zero ATP burned! The outer sleeve crushes to half-height, ramming the inner stiletto into E. coli.',
        blueprint: 'Metastable sheath contraction shortens ~50 nm without ATP, driving the rigid tube inward.',
        scientific: 'Enthalpy-driven sheath contraction (92.5 → 42 nm) punches the 9 nm gp19 tube across the wall.'
      },
      es: {
        pop: '¡Sin gastar ATP! La funda se aplasta a la mitad y clava el estilete interno en E. coli.',
        blueprint: 'La vaina metaestable se acorta ~50 nm sin ATP e impulsa el tubo rígido hacia la bacteria.',
        scientific: 'La contracción entálpica (92,5 → 42 nm) clava el tubo gp19 de 9 nm a través de la pared.'
      }
    },
    't4.det.rbase.01': {
      en: {
        pop: 'Six Mousetrap wedges lock around a central Attack on Titan Thunder Spear needle (gp27–gp5)!',
        blueprint: 'Six peripheral mechanical wedges ring the central gp27–gp5 envelope-puncturing drill hub.',
        scientific: 'Six multiprotein wedges (~150 subunits, PDB 5IV5) encircle the (gp27)₃–(gp5)₃ spike (1K28).'
      },
      es: {
        pop: '¡Seis cuñas de trampa rodean una Lanza Relámpago perforadora central (gp27–gp5)!',
        blueprint: 'Seis cuñas mecánicas periféricas rodean el cabezal perforador central gp27–gp5.',
        scientific: 'Seis cuñas multiproteicas (~150 subunidades, PDB 5IV5) rodean la aguja (gp27)₃–(gp5)₃ (1K28).'
      }
    },
    't4.det.rbase.02': {
      en: {
        pop: 'Long legs spot OmpF doors, flipping the dome into a star so six gp12 hooks staple onto LPS!',
        blueprint: 'OmpF engagement trips dome-to-star expansion, deploying six gp12 clamps onto host LPS.',
        scientific: 'Long-fiber OmpF binding triggers dome-to-star transition (5IV7) and gp12–LPS clamping (1OCY).'
      },
      es: {
        pop: 'Las patas largas detectan OmpF, abren la estrella y seis garfios gp12 se clavan al LPS.',
        blueprint: 'El anclaje a OmpF abre la estrella basal y despliega seis grapas cortas gp12 sobre el LPS.',
        scientific: 'La unión a OmpF dispara el cambio cúpula-estrella (5IV7) y fija seis fibras gp12 al LPS (1OCY).'
      }
    },
    't4.det.rbase.03': {
      en: {
        pop: 'Three built-in lysozyme chainsaws chew right through the bacterial wall to clear the runway!',
        blueprint: 'Three integrated T4 lysozyme cutters hydrolyze peptidoglycan mesh ahead of the tail tube.',
        scientific: 'Three GH24 T4 lysozyme domains on gp5 cleave β-1,4-glycosidic bonds in host peptidoglycan.'
      },
      es: {
        pop: '¡Tres motosierras de lisozima integradas abren brecha en el muro de peptidoglicano!',
        blueprint: 'Tres dominios cortadores de lisozima T4 hidrolizan la malla de peptidoglicano bacteriana.',
        scientific: 'Tres dominios lisozima GH24 de gp5 hidrolizan enlaces β-1,4 del peptidoglicano periplásmico.'
      }
    },
    't4.det.sch.01': {
      en: {
        pop: 'Exploded Mecha blueprint: Bacteriophage T4’s four self-assembling battle modules on display!',
        blueprint: 'Modular 3D schematic displaying T4’s four independently assembled mechanical subsystems.',
        scientific: 'Complete ~200 nm, ~100 MDa Tequatrovirus T4 architecture resolved into four sub-assemblies.'
      },
      es: {
        pop: 'Plano mecha desplegado: ¡los cuatro módulos de combate autoensamblables del fago T4!',
        blueprint: 'Esquema modular 3D con los cuatro subsistemas mecánicos independientes del fago T4.',
        scientific: 'Arquitectura completa de Tequatrovirus T4 (~200 nm, ~100 MDa) en cuatro subensamblajes.'
      }
    },
    't4.det.sch.02': {
      en: {
        pop: 'Up top sits the stretched crystal tank crammed with tightly wound rings of dsDNA.',
        blueprint: 'Upper module: cutaway prolate pressure vessel housing coaxially spooled dsDNA.',
        scientific: 'Apical T_end=13/Q=20 prolate capsid enclosing coaxially spooled 168.9 kbp gh-dCMP dsDNA.'
      },
      es: {
        pop: 'Arriba luce el tanque cristalino alargado repleto de anillos apretados de ADNbc.',
        blueprint: 'Módulo superior: cápside prolata en corte con ADNbc devanado de forma coaxial.',
        scientific: 'Cápside prolata apical T_end=13/Q=20 con 168,9 kpb de ADNbc enrollado coaxialmente.'
      }
    },
    't4.det.sch.03': {
      en: {
        pop: 'Underneath ride the crossbow piston, the star-switching baseplate, and six AT-AT scout legs.',
        blueprint: 'Lower modules: contractile tail actuator, hexagonal trigger hub, and six hinged sensor legs.',
        scientific: 'Basal apparatus: 92.5 nm gp18/gp19 tail, 6-fold baseplate hub, and six 145 nm gp34–37 fibers.'
      },
      es: {
        pop: 'Debajo viajan el pistón ballesta, la placa transformable y seis patas estilo AT-AT.',
        blueprint: 'Módulos inferiores: cola contráctil, placa disparadora hexagonal y seis patas articuladas.',
        scientific: 'Aparato basal: cola gp18/gp19 de 92,5 nm, placa hexagonal y seis fibras gp34–37 de 145 nm.'
      }
    },
    't4.det.pcap.01': {
      en: {
        pop: 'Armor check on T4’s stretched head: gp23* plates, green Soc straps, and central Hoc badges!',
        blueprint: 'Elongated capsid lattice: gp23* hexamer tiles, inter-tile Soc clamps, and central Hoc spikes.',
        scientific: 'Prolate head lattice (PDB 5VF3): 155 gp23* hexamers, 810 Soc trimers, and 155 Hoc monomers.'
      },
      es: {
        pop: 'Revisión de blindaje en la cabeza: placas gp23*, correas Soc y emblemas centrales Hoc.',
        blueprint: 'Red de cápside alargada: hexámeros gp23*, abrazaderas Soc entre losetas y espículas Hoc.',
        scientific: 'Red prolata (PDB 5VF3): 155 hexámeros gp23*, 810 trímeros Soc y 155 espículas Hoc.'
      }
    },
    't4.det.pcap.02': {
      en: {
        pop: 'Five-sided gp24* cornerstones bend the roof shut while the gp20 nozzle guards the floor.',
        blueprint: 'Five-fold gp24* keystones close 11 corners; the 12-mer gp20 portal gates the base.',
        scientific: 'Pentameric gp24* caps 11 five-fold vertices while dodecameric gp20 (PDB 3JA7) seals the base.'
      },
      es: {
        pop: 'Esquinas pentagonales gp24* cierran el techo y la tobera gp20 vigila el suelo.',
        blueprint: 'Pentámeros gp24* cierran 11 vértices mientras el portal dodecamérico gp20 sella la base.',
        scientific: 'Pentámeros gp24* ocupan 11 vértices y el dodecámero gp20 (PDB 3JA7) forma el portal basal.'
      }
    },
    't4.det.pcap.03': {
      en: {
        pop: 'Inside, 57 micrometers of DNA—280 times the phage’s height—coils around a protein spool!',
        blueprint: 'Internal storage winds 169 kbp (57.4 µm) of dsDNA coaxially around a scaffold core.',
        scientific: '168,903 bp (57.4 µm) dsDNA packs at ~2.5 nm interaxial spacing around gp22/IPI*–III* proteins.'
      },
      es: {
        pop: '¡Dentro se enrollan 57 micrómetros de ADN —280 veces su altura— sobre un núcleo interno!',
        blueprint: 'El almacén interno bobina 169 kpb (57,4 µm) de ADNbc alrededor de un núcleo proteico.',
        scientific: '168.903 pb (57,4 µm) de ADNbc se compactan cada ~2,5 nm en torno a gp22 e IPI*–III*.'
      }
    },
    't4.det.ptail.01': {
      en: {
        pop: 'Sliced open at 92.5 nm long: meet nature’s slickest spring-loaded hypodermic barrel!',
        blueprint: 'Axial cutaway through the 92.5 nm extended contractile tail assembly and neck connector.',
        scientific: 'Longitudinal section of the 92.5 × 24 nm extended gp18/gp19 tail and gp13/14/15 neck.'
      },
      es: {
        pop: 'Abierta en corte a sus 92,5 nm: ¡la jeringa con resorte más precisa de la naturaleza!',
        blueprint: 'Sección axial de la cola contráctil extendida de 92,5 nm y su conector de cuello.',
        scientific: 'Corte longitudinal de la cola extendida gp18/gp19 (92,5 × 24 nm) y cuello gp13/14/15.'
      }
    },
    't4.det.ptail.02': {
      en: {
        pop: 'Green gp18 rings twist and slam down, driving the gold gp19 pipe out like a pile driver!',
        blueprint: 'Outer gp18 sheath rings interdigitate and shorten to ram the rigid gold gp19 tube downward.',
        scientific: 'gp18 rings rotate and compress axially (4.06 → 1.64 Å/subunit rise), extruding the gp19 tube.'
      },
      es: {
        pop: '¡Los anillos verdes gp18 giran y bajan de golpe clavando el tubo dorado gp19 como martinete!',
        blueprint: 'Los anillos externos gp18 se interdigitan para empujar hacia abajo el tubo rígido gp19.',
        scientific: 'Los anillos gp18 rotan y se comprimen axialmente proyectando el conducto interno gp19.'
      }
    },
    't4.det.ptail.03': {
      en: {
        pop: 'Whoosh! Pressurized DNA rockets down the frictionless 4 nm pipe straight into E. coli.',
        blueprint: 'Stored capsid pressure ejects viral dsDNA down the smooth 4.0 nm lumen into host cytosol.',
        scientific: 'DNA translocates at thousands of bp/s down the electronegative 4.0 nm gp19 lumen into E. coli.'
      },
      es: {
        pop: '¡Zas! El ADN a presión sale disparado por el tubo sin fricción de 4 nm hacia E. coli.',
        blueprint: 'La presión interna impulsa el ADNbc por el conducto liso de 4,0 nm hacia el citoplasma.',
        scientific: 'El ADNbc cruza a miles de pb/s por el lumen electronegativo de 4,0 nm hacia E. coli.'
      }
    },
    't4.det.pbase.01': {
      en: {
        pop: 'Six interlocking gear wedges form a dome around the central gp27–gp5 drill bit.',
        blueprint: 'Six peripheral mechanical wedges assemble a 52 nm dome around the central gp27–gp5 hub.',
        scientific: 'Six-fold symmetric ~6.5 MDa dome (~52 nm, PDB 5IV5) framing the central (gp27)₃–(gp5)₃ hub.'
      },
      es: {
        pop: 'Seis cuñas engranadas levantan una cúpula alrededor de la broca central gp27–gp5.',
        blueprint: 'Seis cuñas mecánicas periféricas cierran una cúpula de 52 nm sobre el buje gp27–gp5.',
        scientific: 'Cúpula hexamérica de ~6,5 MDa (~52 nm, PDB 5IV5) en torno al cubo central (gp27)₃–(gp5)₃.'
      }
    },
    't4.det.pbase.02': {
      en: {
        pop: 'Three emerald lysozyme blades ring a crimson triple-spiral dagger built to punch armor!',
        blueprint: 'Three green GH24 lysozyme cutters flank the central red triple-β-helix puncturing spike.',
        scientific: 'Three 18.7 kDa T4 lysozyme domains surround the rigid C-terminal gp5 triple β-helix (1K28).'
      },
      es: {
        pop: '¡Tres cuchillas verdes de lisozima rodean una daga roja en triple espiral perforadora!',
        blueprint: 'Tres cortadores verdes de lisozima flanquean la aguja roja central en triple hélice β.',
        scientific: 'Tres dominios lisozima de 18,7 kDa rodean la triple hélice β C-terminal de gp5 (PDB 1K28).'
      }
    },
    't4.det.pbase.03': {
      en: {
        pop: 'Folded underneath wait six gp12 grappling hooks—once they bite LPS, T4 never lets go!',
        blueprint: 'Six stowed gp12 short fibers swing down 180° to lock irreversibly onto host LPS.',
        scientific: 'Six homotrimeric gp12 short tail fibers (PDB 1OCY) unfurl to clamp inner-core E. coli LPS.'
      },
      es: {
        pop: 'Debajo aguardan seis garfios gp12: ¡en cuanto muerden el LPS, el fago ya no suelta!',
        blueprint: 'Seis fibras cortas gp12 giran 180° para anclarse de modo irreversible al LPS bacteriano.',
        scientific: 'Seis homotrímeros cortos gp12 (PDB 1OCY) se despliegan para fijar el núcleo interno del LPS.'
      }
    },
    't4.det.pfib.01': {
      en: {
        pop: 'One 145 nm AT-AT scout leg: gp34 thigh, nimble gp35 kneecap, and slender distal shin!',
        blueprint: 'Articulated 145 nm sensor lever: proximal gp34 rod, monomeric gp35 hinge, and distal shin.',
        scientific: '145 nm long tail fiber: homotrimeric gp34 thigh (~65 nm), gp35 knee hinge, and gp36–gp37 shin.'
      },
      es: {
        pop: 'Una pata exploradora de 145 nm: muslo gp34, rótula ágil gp35 y espinilla distal.',
        blueprint: 'Palanca sensora articulada de 145 nm: barra proximal gp34, bisagra gp35 y tramo distal.',
        scientific: 'Fibra larga de 145 nm: homotrímero gp34 (~65 nm), rodilla monomérica gp35 y tibia gp36–gp37.'
      }
    },
    't4.det.pfib.02': {
      en: {
        pop: 'Forged with seven iron atoms, the gp37 toe taps across E. coli until it clicks into OmpF!',
        blueprint: 'Iron-reinforced gp37 sensor tip samples LPS and locks into outer-membrane OmpF porins.',
        scientific: 'Hepta-iron-coordinated homotrimeric gp37 needle tip (PDB 2XGF) binds E. coli OmpC/OmpF and LPS.'
      },
      es: {
        pop: '¡Forjada con siete átomos de hierro, la punta gp37 tantea hasta encajar en OmpF!',
        blueprint: 'La punta sensora gp37 reforzada con hierro explora el LPS y encaja en porinas OmpF.',
        scientific: 'La punta homotrimérica gp37 con siete iones Fe²⁺ (PDB 2XGF) reconoce porinas OmpC/OmpF y LPS.'
      }
    },
    't4.det.gp23.01': {
      en: {
        pop: 'Cryo-EM close-up (PDB 5VF3): one six-sided tank armor plate from T4’s high-pressure head!',
        blueprint: 'Cryo-EM atomic model of the hexameric gp23* pressure-vessel wall tile (PDB 5VF3).',
        scientific: '3.3 Å cryo-EM structure of the T4 major capsid gp23* hexamer unit (PDB 5VF3, 6 × 48.7 kDa).'
      },
      es: {
        pop: 'Primer plano por crio-ME (PDB 5VF3): ¡una placa hexagonal del tanque a presión de T4!',
        blueprint: 'Modelo atómico por crio-ME de la loseta mural hexamérica gp23* (PDB 5VF3).',
        scientific: 'Estructura crio-ME a 3,3 Å del hexámero principal gp23* de T4 (PDB 5VF3, 6 × 48,7 kDa).'
      }
    },
    't4.det.gp23.02': {
      en: {
        pop: 'Six blue gp23* shields lock inside green Soc seatbelts with one proud Hoc spike on top.',
        blueprint: 'Six blue gp23* subunits are perimeter-clamped by green Soc trimers around a central Hoc post.',
        scientific: 'Six HK97-fold gp23* protomers (blue) bind peripheral 9.1 kDa Soc clamps (green) and central Hoc.'
      },
      es: {
        pop: 'Seis escudos azules gp23* van sujetos por correas verdes Soc con un emblema Hoc central.',
        blueprint: 'Seis subunidades azules gp23* quedan engrapadas por trímeros verdes Soc y una espícula Hoc.',
        scientific: 'Seis protómeros gp23* de pliegue HK97 (azul) unen abrazaderas Soc (verde) y Hoc central.'
      }
    },
    't4.det.gp24.01': {
      en: {
        pop: 'Corner armor in cryo-EM (PDB 5VF3): the five-sided gp24* dome cap!',
        blueprint: 'Cryo-EM structure of the five-fold gp24* vertex keystone pentamer (PDB 5VF3).',
        scientific: 'Cryo-EM structure of the cleaved homopentameric gp24* capsid vertex (PDB 5VF3, 5 × 46 kDa).'
      },
      es: {
        pop: 'Blindaje esquinero en crio-ME (PDB 5VF3): ¡la tapa pentagonal gp24* de cinco lados!',
        blueprint: 'Estructura por crio-ME de la piedra angular pentamérica de vértice gp24* (PDB 5VF3).',
        scientific: 'Estructura crio-ME del homopentámero procesado de vértice gp24* (PDB 5VF3, 5 × 46 kDa).'
      }
    },
    't4.det.gp24.02': {
      en: {
        pop: 'Five HK97-style plates bend the flat hex walls sharply enough to seal eleven corners.',
        blueprint: 'Five gp24* subunits introduce 60° disclination curvature to close 11 capsid vertices.',
        scientific: 'Five HK97-fold gp24* protomers supply five-fold Gaussian curvature across 11 non-portal corners.'
      },
      es: {
        pop: 'Cinco placas doblan con firmeza los muros hexagonales para sellar once esquinas.',
        blueprint: 'Cinco subunidades gp24* aportan la curvatura necesaria para cerrar 11 vértices.',
        scientific: 'Cinco protómeros gp24* de pliegue HK97 introducen curvatura quíntuple en 11 vértices.'
      }
    },
    't4.det.gp20.01': {
      en: {
        pop: 'Twelve-part turbine ring (PDB 3JA7): the gp20 launch nozzle at the bottom of T4’s head!',
        blueprint: 'Cryo-EM structure of the 12-subunit gp20 bidirectional packaging/ejection valve (PDB 3JA7).',
        scientific: '3.6 Å cryo-EM structure of the dodecameric T4 gp20 portal complex (PDB 3JA7, 12 × 61 kDa).'
      },
      es: {
        pop: 'Turbina de doce piezas (PDB 3JA7): ¡la tobera gp20 en la base de la cabeza de T4!',
        blueprint: 'Estructura crio-ME de la válvula bidireccional gp20 de 12 subunidades (PDB 3JA7).',
        scientific: 'Estructura crio-ME a 3,6 Å del dodecámero portal gp20 de T4 (PDB 3JA7, 12 × 61 kDa).'
      }
    },
    't4.det.gp20.02': {
      en: {
        pop: 'First an ATP motor stuffs DNA up this 3.5 nm bore—then attack day blasts it right back out!',
        blueprint: 'gp17 ATPase pumps dsDNA inward through its 3.5 nm bore before infection fires it outward.',
        scientific: 'Pentameric gp17 terminase packages DNA at ~2,000 bp/s up the 3.5 nm crown/clip/wing channel.'
      },
      es: {
        pop: '¡Primero un motor mete ADN por este agujero de 3,5 nm y en el ataque sale disparado!',
        blueprint: 'La ATPasa gp17 bombea ADN hacia adentro por su luz de 3,5 nm antes de eyectarlo.',
        scientific: 'La terminasa gp17 empaqueta ADN (~2.000 pb/s) por el canal de 3,5 nm antes de la eyección.'
      }
    },
    't4.det.gp18.01': {
      en: {
        pop: 'Crossbow spring in cryo-EM (PDB 3J2M): the gp18 contractile sleeve capped by its gp15 neck!',
        blueprint: 'Cryo-EM model of the metastable gp18 contractile sheath and hexameric gp15 connector (3J2M).',
        scientific: 'Cryo-EM reconstruction of the T4 gp18 tail sheath and gp15 neck ring (PDB 3J2M).'
      },
      es: {
        pop: 'El muelle de ballesta en crio-ME (PDB 3J2M): ¡la funda gp18 con su anillo gp15!',
        blueprint: 'Modelo crio-ME de la vaina contráctil metaestable gp18 y el conector gp15 (PDB 3J2M).',
        scientific: 'Reconstrucción crio-ME de la vaina contráctil gp18 y anillo conector gp15 (PDB 3J2M).'
      }
    },
    't4.det.gp18.02': {
      en: {
        pop: 'Twenty-four six-part rings sit cocked under hair-trigger tension—no batteries needed!',
        blueprint: 'Twenty-four hexameric gp18 rings store ~25,000 kJ/mol of mechanical spring enthalpy.',
        scientific: '144 four-domain gp18 monomers (71.2 kDa) stack into 24 rings with a 17.2° right-handed twist.'
      },
      es: {
        pop: 'Veinticuatro anillos de seis piezas aguardan tensos al límite: ¡no necesitan baterías!',
        blueprint: 'Veinticuatro anillos hexaméricos gp18 almacenan ~25.000 kJ/mol de entalpía mecánica.',
        scientific: '144 monómeros gp18 (71,2 kDa, 4 dominios) forman 24 anillos con giro dextrógiro de 17,2°.'
      }
    },
    't4.det.gp19.01': {
      en: {
        pop: 'Three rings of the golden hypodermic barrel in cryo-EM (PDB 5W5F): the gp19 inner pipe!',
        blueprint: 'Cryo-EM atomic structure of three stacked hexameric gp19 inner-tube rings (PDB 5W5F).',
        scientific: '3.4 Å cryo-EM structure of three stacked hexameric gp19 tail-tube rings (PDB 5W5F, 18.5 kDa).'
      },
      es: {
        pop: 'Tres anillos del cañón dorado en crio-ME (PDB 5W5F): ¡la tubería interna gp19!',
        blueprint: 'Estructura atómica por crio-ME de tres anillos hexaméricos del tubo interno gp19 (5W5F).',
        scientific: 'Estructura crio-ME a 3,4 Å de tres anillos hexaméricos apilados del tubo gp19 (PDB 5W5F).'
      }
    },
    't4.det.gp19.02': {
      en: {
        pop: 'Negatively charged walls inside this 4 nm pipe repel negative DNA so it glides friction-free!',
        blueprint: 'Six β-barrel subunits per ring line an electronegative 4.0 nm low-friction DNA conduit.',
        scientific: 'Continuous 24-stranded inner β-barrel (4.0 nm lumen) electrostatically lubricates DNA transit.'
      },
      es: {
        pop: '¡Sus paredes negativas repelen al ADN negativo para que resbale sin rozamiento por 4 nm!',
        blueprint: 'Seis subunidades en barril β por anillo forman un conducto electronegativo de 4,0 nm.',
        scientific: 'Un barril β interno continuo de 24 hebras (lumen 4,0 nm) lubrica electrostáticamente el ADN.'
      }
    },
    't4.det.gp5.01': {
      en: {
        pop: 'Armor-piercing Thunder Spear in crystal view (PDB 1K28): the gp27–gp5 drill needle!',
        blueprint: 'X-ray crystal structure of the central (gp27)₃–(gp5)₃ cell-puncturing spike (PDB 1K28).',
        scientific: '2.9 Å crystal structure of the heterotrimeric (gp27)₃–(gp5)₃ puncturing complex (PDB 1K28).'
      },
      es: {
        pop: 'Lanza perforadora en cristal (PDB 1K28): ¡la broca central gp27–gp5 al desnudo!',
        blueprint: 'Estructura cristalográfica del cabezal perforador central (gp27)₃–(gp5)₃ (PDB 1K28).',
        scientific: 'Estructura cristalina a 2,9 Å del complejo perforador heterotrimérico (gp27)₃–(gp5)₃ (1K28).'
      }
    },
    't4.det.gp5.02': {
      en: {
        pop: 'Cup-shaped gp27 adapts the pipe to a razor-stiff triple-β-helix spike and 3 lysozyme saws.',
        blueprint: 'Cupped gp27 adapter couples the tail tube to a triple-β-helix spike and 3 lysozyme cutters.',
        scientific: 'Trimeric gp27 hollow cylinder caps a 110 Å interwoven gp5 triple β-helix and 3 GH24 lysozymes.'
      },
      es: {
        pop: 'La copa gp27 une la tubería con una púa rígida de triple hélice β y 3 sierras lisozima.',
        blueprint: 'El adaptador en copa gp27 conecta el tubo a la aguja β-helicoidal y 3 cortadores lisozima.',
        scientific: 'El cilindro trimérico gp27 corona una triple hélice β de 110 Å y 3 dominios lisozima GH24.'
      }
    },
    't4.det.gp37.01': {
      en: {
        pop: 'Iron-tipped scout boot in crystal detail (PDB 2XGF): the gp37 long-fiber sensor tip!',
        blueprint: 'Crystal structure of the distal gp37 receptor-sensing long-fiber needle tip (PDB 2XGF).',
        scientific: '2.2 Å crystal structure of the homotrimeric T4 gp37 distal long-fiber tip (PDB 2XGF).'
      },
      es: {
        pop: 'Bota exploradora con punta de hierro en cristal (PDB 2XGF): ¡el extremo sensor gp37!',
        blueprint: 'Estructura cristalina de la punta sensora distal gp37 de la fibra larga (PDB 2XGF).',
        scientific: 'Estructura cristalina a 2,2 Å del extremo distal homotrimérico gp37 de fibra larga (2XGF).'
      }
    },
    't4.det.gp37.02': {
      en: {
        pop: 'Three braided chains pinned by seven iron ions tap E. coli until OmpF porins match!',
        blueprint: 'Three intertwined chains braced by 7 Fe²⁺ ions form the OmpF porin recognition tip.',
        scientific: 'Three interwoven chains coordinate seven octahedral Fe²⁺ ions via His-X-His motifs to bind OmpF.'
      },
      es: {
        pop: '¡Tres cadenas trenzadas con siete iones de hierro tantean hasta dar con porinas OmpF!',
        blueprint: 'Tres cadenas entrelazadas con 7 iones Fe²⁺ integran el cabezal sensor de porinas OmpF.',
        scientific: 'Tres cadenas coordinan siete iones Fe²⁺ octaédricos (motivos His-X-His) afines a OmpF.'
      }
    },
    't4.det.gp12.01': {
      en: {
        pop: 'Grappling hook claw in crystal view (PDB 1OCY): the gp12 short tail fiber tip!',
        blueprint: 'X-ray crystal structure of the homotrimeric gp12 short-fiber LPS clamp tip (PDB 1OCY).',
        scientific: '1.5 Å crystal structure of the homotrimeric T4 gp12 short tail fiber C-terminal tip (PDB 1OCY).'
      },
      es: {
        pop: 'Garra de abordaje en cristal (PDB 1OCY): ¡la punta de la fibra corta gp12!',
        blueprint: 'Estructura cristalográfica de la mordaza homotrimérica gp12 de fibra corta (PDB 1OCY).',
        scientific: 'Estructura cristalina a 1,5 Å del extremo C-terminal homotrimérico de gp12 (PDB 1OCY).'
      }
    },
    't4.det.gp12.02': {
      en: {
        pop: 'Armed with a zinc atom, this three-jawed clamp bites E. coli’s LPS armor and never lets go!',
        blueprint: 'A Zn²⁺-stabilized C-terminal head clamps irreversibly onto inner-core bacterial LPS.',
        scientific: 'A conserved Zn²⁺-coordinated C-terminal head binds E. coli LPS inner-core sugars irreversibly.'
      },
      es: {
        pop: '¡Armada con un átomo de zinc, esta pinza triple muerde el LPS bacteriano sin soltarlo jamás!',
        blueprint: 'Su cabezal C-terminal estabilizado por Zn²⁺ fija irreversiblemente el núcleo del LPS.',
        scientific: 'El dominio C-terminal coordinado con Zn²⁺ une irreversiblemente el núcleo interno del LPS.'
      }
    },
    'cov.det.rspk.01': {
      en: {
        pop: 'Sneak attack from the sugar forest: one RBD finger pops up to hook human ACE2’s α1 ridge!',
        blueprint: 'Up-state RBD conformer emerges from the glycan coat to clamp the α1 ridge of host ACE2.',
        scientific: 'Open-state SARS-CoV-2 RBD (PDB 6VSB) engages the N-terminal α1 helix of ACE2 (PDB 6M0J).'
      },
      es: {
        pop: '¡Ataque sorpresa desde el bosque de azúcar: un dedo RBD sube y engancha la hélice α1 de ACE2!',
        blueprint: 'El RBD abierto asoma sobre el manto de glicanos para fijar la cresta α1 de ACE2.',
        scientific: 'El dominio RBD en estado abierto (PDB 6VSB) se acopla a la hélice α1 de ACE2 (PDB 6M0J).'
      }
    },
    'cov.det.rspk.02': {
      en: {
        pop: 'Snip at S2′! Out shoots the fusion harpoon to zip viral and airway bubbles into one doorway.',
        blueprint: 'S2′ proteolytic cleavage deploys the fusion peptide to winch both lipid bilayers together.',
        scientific: 'Proteolysis at S2′ (R815–S816) releases the fusion peptide and drives 6-helix bundle merger.'
      },
      es: {
        pop: '¡Corte en S2′! El arpón se dispara y cose ambas burbujas lipídicas en una sola puerta.',
        blueprint: 'La escisión proteolítica en S2′ lanza el péptido fusogénico y reúne ambas bicapas.',
        scientific: 'La proteólisis en S2′ (R815–S816) libera el péptido de fusión e impulsa el haz 6HB.'
      }
    },
    'cov.det.rrnp.01': {
      en: {
        pop: 'Unlike T4’s stiff crystal head, forty N-protein beads cushion 29.9 kb of RNA like pearls!',
        blueprint: 'Forty flexible N-protein spools wind the 29.9 kb (+)ssRNA without a rigid icosahedral shell.',
        scientific: 'Forty ~15 nm N-protein vRNP complexes (PDB 6VYO/6WZO) coil the 29,903-nt (+)ssRNA genome.'
      },
      es: {
        pop: '¡Sin caja rígida como T4, cuarenta perlas N acolchan con suavidad los 29,9 kb de ARN!',
        blueprint: 'Cuarenta carretes flexibles de proteína N enrollan los 29,9 kb de (+)ARNmc sin cápside rígida.',
        scientific: 'Cuarenta complejos vRNP de proteína N (~15 nm, PDB 6VYO/6WZO) condensan los 29.903 nt.'
      }
    },
    'cov.det.rrnp.02': {
      en: {
        pop: 'C-terminal M-dimer hooks anchor those RNA pearls neatly underneath the stolen grease coat.',
        blueprint: 'Internal M-dimer C-terminal tails tether the coiled RNP array to the envelope chassis.',
        scientific: 'Cytosolic C-terminal domains of dimeric M proteins (PDB 8CTK) anchor luminal vRNP beads.'
      },
      es: {
        pop: 'Los ganchos C-terminales de los dímeros M sujetan las perlas de ARN bajo el abrigo lipídico.',
        blueprint: 'Los extremos C-terminales de los dímeros M anclan la bobina RNP al chasis de la envoltura.',
        scientific: 'Los dominios C-terminales citosólicos de los dímeros M (PDB 8CTK) fijan los complejos vRNP.'
      }
    },
    'cov.det.rrep.01': {
      en: {
        pop: 'Evangelion-grade copying rig (PDB 6M71): core nsp12 teamed with nsp7 and twin nsp8 arms!',
        blueprint: 'Four-chain replicase core (PDB 6M71): catalytic nsp12 stabilized by nsp7 and 2×nsp8.',
        scientific: 'SARS-CoV-2 RdRp holoenzyme (PDB 6M71) assembling catalytic nsp12 with nsp7 and two nsp8.'
      },
      es: {
        pop: '¡Maquinaria nivel Evangelion (PDB 6M71): núcleo nsp12 junto a nsp7 y dos brazos nsp8!',
        blueprint: 'Núcleo replicasa de cuatro cadenas (PDB 6M71): nsp12 estabilizado por nsp7 y 2×nsp8.',
        scientific: 'Holoenzima RdRp de SARS-CoV-2 (PDB 6M71) que reúne nsp12 catalítica con nsp7 y dos nsp8.'
      }
    },
    'cov.det.rrep.02': {
      en: {
        pop: 'Twin α-helical nsp8 ski-poles hug the 30 kb RNA track so the copier never wipes out!',
        blueprint: 'Dual α-helical nsp8 extensions serve as processivity clamps along the 30 kb template.',
        scientific: 'Two ~100 Å α-helical nsp8 sliding poles grip exiting duplex RNA to sustain 30 kb synthesis.'
      },
      es: {
        pop: '¡Dos pértigas helicoidales nsp8 abrazan la pista de 30 kb para que el motor nunca caiga!',
        blueprint: 'Dos extensiones α-helicoidales nsp8 actúan como guías de procesividad en los 30 kb.',
        scientific: 'Dos pértigas α-helicoidales nsp8 (~100 Å) sujetan el dúplex de ARN a lo largo de 30 kb.'
      }
    },
    'cov.det.sch.01': {
      en: {
        pop: 'Cross-section of the crowned bubble: stolen lipid coat, M-dimer rivets, and tiny E vents.',
        blueprint: 'Enveloped virion cutaway: host bilayer hull, dimeric M scaffold, and pentameric E valves.',
        scientific: 'Isolated SARS-CoV-2 cutaway displaying the host bilayer, M-dimer matrix, and E viroporins.'
      },
      es: {
        pop: 'Sección de la burbuja coronada: capa lipídica robada, remaches M y válvulas E.',
        blueprint: 'Corte del virión envuelto: casco bicapa, matriz dimérica M y válvulas pentaméricas E.',
        scientific: 'Corte aislado de SARS-CoV-2 mostrando bicapa lipídica, red de dímeros M y canales E.'
      }
    },
    'cov.det.sch.02': {
      en: {
        pop: 'Outside, Spike clubs hunt ACE2; inside, N-protein beads cradle the record-breaking RNA.',
        blueprint: 'External Spike trimers mediate entry while luminal N oligomers compact the 30 kb payload.',
        scientific: 'Trimeric S spikes form the exterior corona while ~40 N oligomers package the (+)ssRNA core.'
      },
      es: {
        pop: 'Afuera, mazas de espícula buscan ACE2; adentro, cuentas N acunan un ARN de récord.',
        blueprint: 'Trímeros externos de espícula median la entrada y oligómeros N compactan los 30 kb.',
        scientific: 'Espículas triméricas S coronan el exterior y ~40 oligómeros N empaquetan el (+)ARNmc.'
      }
    },
    'cov.det.spk.01': {
      en: {
        pop: 'Stealth mode engaged (PDB 6VXX): the prefusion Spike trimer hiding all three RBD fingers!',
        blueprint: 'Cryo-EM model of the closed prefusion SARS-CoV-2 Spike trimer module (PDB 6VXX).',
        scientific: 'Cryo-EM structure of the closed prefusion SARS-CoV-2 S glycoprotein homotrimer (PDB 6VXX).'
      },
      es: {
        pop: '¡Modo sigilo activado (PDB 6VXX): el trímero de espícula ocultando sus tres dedos RBD!',
        blueprint: 'Modelo por crio-ME del módulo trimérico cerrado de espícula en prefusión (PDB 6VXX).',
        scientific: 'Estructura por crio-ME del homotrímero cerrado en prefusión de la glicoproteína S (6VXX).'
      }
    },
    'cov.det.spk.02': {
      en: {
        pop: 'S1 heads up top act as lockpicks; the coiled S2 stalk below packs the membrane winch.',
        blueprint: 'Distal S1 lobes house ACE2-recognition domains; the lower S2 stalk houses fusion machinery.',
        scientific: 'Distal S1 receptor-binding subunits cap the metastable S2 heptad-repeat fusion stalk.'
      },
      es: {
        pop: 'Las cabezas S1 arriba actúan de ganzúa; el tallo S2 abajo esconde el cabrestante.',
        blueprint: 'Los lóbulos S1 alojan dominios para ACE2 y el tallo inferior S2 el motor de fusión.',
        scientific: 'Las subunidades receptoras S1 cubren el tallo fusogénico metaestable S2 de repeticiones HR.'
      }
    },
    'cov.det.e.01': {
      en: {
        pop: 'Five-helix ion tunnel caught by solid-state NMR (PDB 5X29): the tiny Envelope viroporin!',
        blueprint: 'Solid-state NMR structure of the five-helix Envelope viroporin channel (PDB 5X29).',
        scientific: 'Solid-state NMR structure of the homopentameric coronavirus E viroporin bundle (PDB 5X29).'
      },
      es: {
        pop: '¡Túnel iónico de cinco hélices captado por RMN (PDB 5X29): la diminuta viroporina E!',
        blueprint: 'Estructura por RMN en estado sólido del canal pentamérico de viroporina E (PDB 5X29).',
        scientific: 'Estructura RMN en estado sólido del haz homopentamérico de viroporina E (PDB 5X29).'
      }
    },
    'cov.det.e.02': {
      en: {
        pop: 'Five transmembrane rods punch a tiny cation vent across host Golgi membranes for escape.',
        blueprint: 'Five transmembrane α-helices line a narrow cation-conducting pore in host membranes.',
        scientific: 'Five transmembrane α-helices form a luminal cation pore that modulates secretory Ca²⁺/pH.'
      },
      es: {
        pop: 'Cinco barras transmembrana abren un respiradero catiónico en el Golgi para escapar.',
        blueprint: 'Cinco hélices α transmembrana delimitan un estrecho poro catiónico en membranas huésped.',
        scientific: 'Cinco hélices α transmembrana forman un poro catiónico que modula el Ca²⁺ y pH secretor.'
      }
    },
    'cov.det.n.01': {
      en: {
        pop: 'X-ray portrait (PDB 6VYO) of the Nucleocapsid’s RNA-catching hand!',
        blueprint: 'Crystal structure of the Nucleocapsid N-terminal RNA-clamping domain (PDB 6VYO).',
        scientific: 'X-ray crystal structure of the SARS-CoV-2 N-protein RNA-binding domain oligomer (PDB 6VYO).'
      },
      es: {
        pop: '¡Retrato en rayos X (PDB 6VYO) de la mano atrapa-ARN de la nucleocápside!',
        blueprint: 'Estructura cristalina del dominio N-terminal sujetador de ARN de nucleocápside (PDB 6VYO).',
        scientific: 'Estructura cristalográfica del dominio N-terminal de unión a ARN de proteína N (PDB 6VYO).'
      }
    },
    'cov.det.n.02': {
      en: {
        pop: 'Positively charged β-hairpin fingers hug the viral (+)ssRNA into springy RNP pearls.',
        blueprint: 'Electropositive β-hairpin fingers spool (+)ssRNA into compact ribonucleoprotein beads.',
        scientific: 'Cationic β-hairpin loops neutralize phosphodiester charges to assemble helical RNP beads.'
      },
      es: {
        pop: 'Dedos positivos en horquilla β abrazan el (+)ARNmc formando perlas RNP elásticas.',
        blueprint: 'Dedos electropositivos en horquilla β devanan el (+)ARNmc en cuentas RNP compactas.',
        scientific: 'Bucles catiónicos en horquilla β neutralizan fosfatos formando cuentas helicoidales de RNP.'
      }
    },
    'cov.det.rdrp.01': {
      en: {
        pop: 'The 30 kb bullet-train engine in cryo-EM (PDB 6M71): nsp12 locked onto nsp7 and twin nsp8!',
        blueprint: 'Cryo-EM structure of the processive nsp12–nsp7–2×nsp8 RdRp assembly (PDB 6M71).',
        scientific: 'Cryo-EM reconstruction of the SARS-CoV-2 nsp12–nsp7–(nsp8)₂ replicase complex (PDB 6M71).'
      },
      es: {
        pop: '¡El motor del tren bala en crio-ME (PDB 6M71): nsp12 unido a nsp7 y doble nsp8!',
        blueprint: 'Estructura crio-ME del ensamblaje procesivo RdRp nsp12–nsp7–2×nsp8 (PDB 6M71).',
        scientific: 'Reconstrucción crio-ME del complejo replicasa nsp12–nsp7–(nsp8)₂ de SARS-CoV-2 (PDB 6M71).'
      }
    },
    'cov.det.rdrp.02': {
      en: {
        pop: 'Catalytic nsp12 writes fresh RNA while twin nsp8 clamps stop it from slipping off early.',
        blueprint: 'Core subunit nsp12 synthesizes RNA while dual nsp8 rails prevent premature drop-off.',
        scientific: 'Catalytic nsp12 extends nascent RNA while twin nsp8 α-helical poles confer processivity.'
      },
      es: {
        pop: 'La subunidad nsp12 escribe ARN nuevo y las dos pinzas nsp8 evitan que resbale antes.',
        blueprint: 'El núcleo nsp12 sintetiza ARN mientras dos guías nsp8 impiden caídas prematuras.',
        scientific: 'La subunidad nsp12 elonga el ARN naciente mientras dos varillas nsp8 dan procesividad.'
      }
    },
    'cov.det.ace2.01': {
      en: {
        pop: 'Crystal close-up of human ACE2 (PDB 1R42)—the airway’s unwitting welcome mat for Spike!',
        blueprint: 'Crystal structure of the host ACE2 zinc metallopeptidase ectodomain port (PDB 1R42).',
        scientific: 'X-ray crystal structure of the human ACE2 zinc metallopeptidase ectodomain (PDB 1R42).'
      },
      es: {
        pop: '¡Primer plano cristalino de ACE2 humana (PDB 1R42), la alfombra de entrada involuntaria!',
        blueprint: 'Estructura cristalina del puerto ectodominio metalopeptidasa de ACE2 humana (PDB 1R42).',
        scientific: 'Estructura cristalográfica del ectodominio metalopeptidasa de Zn²⁺ de ACE2 humana (1R42).'
      }
    },
    'cov.det.ace2.02': {
      en: {
        pop: 'Right across the top runs the α1 helix—the exact handhold SARS-CoV-2’s RBD clamps onto.',
        blueprint: 'Apical α1 helix exposes the precise peptide ridge gripped by the SARS-CoV-2 RBD.',
        scientific: 'The N-terminal α1 helix presents the primary polar contact ridge bound by Spike’s RBM.'
      },
      es: {
        pop: 'Arriba del todo corre la hélice α1: el agarre exacto donde se cierra el RBD viral.',
        blueprint: 'La hélice α1 superior expone la cresta peptídica exacta fijada por el RBD viral.',
        scientific: 'La hélice α1 N-terminal expone la cresta polar primaria reconocida por el motivo RBM.'
      }
    },
    'hiv.det.rcone.01': {
      en: {
        pop: 'Compare this cone to Adenovirus: 216 p24 hexagons + 12 pentagons make an asymmetric vault!',
        blueprint: 'Asymmetric fullerene container assembled from ~216 p24 hexamers and 12 pentamers.',
        scientific: 'HIV-1 p24 CA fullerene cone (~60 × 32 nm, PDB 3J3Q): ~216 hexamers and 12 pentamers.'
      },
      es: {
        pop: '¡Compáralo con el adenovirus: 216 hexágonos p24 y 12 pentágonos crean un cono asimétrico!',
        blueprint: 'Contenedor asimétrico de fulereno construido con ~216 hexámeros p24 y 12 pentámeros.',
        scientific: 'Cono de fulereno p24 CA de VIH-1 (~60 × 32 nm, PDB 3J3Q): ~216 hexámeros y 12 pentámeros.'
      }
    },
    'hiv.det.rcone.02': {
      en: {
        pop: 'Five pentagons sharpen the front nosecone while seven round out the wide tail cap.',
        blueprint: 'Topological 5:7 split places five pentamers at the narrow tip and seven at the wide cap.',
        scientific: 'Five 5-fold pentamers cap the ~16 nm narrow end; seven crown the ~32 nm wide dome.'
      },
      es: {
        pop: 'Cinco pentágonos afilan el morro delantero y siete cierran la ancha cúpula trasera.',
        blueprint: 'El reparto topológico 5:7 ubica cinco pentámeros en la punta y siete en la base ancha.',
        scientific: 'Cinco pentámeros cierran el extremo estrecho (~16 nm) y siete coronan el ancho (~32 nm).'
      }
    },
    'hiv.det.rcone.03': {
      en: {
        pop: 'Tiny charged iris pores in every hex tile vacuum dNTP fuel inside without blowing cover!',
        blueprint: 'Electropositive central pores in each hexamer import dNTPs into the cloaked lumen.',
        scientific: 'Arg18 electropositive channels in CA hexamers import dNTPs while excluding cGAS sensors.'
      },
      es: {
        pop: '¡Diminutos iris cargados en cada hexágono aspiran dNTP sin delatar el escondite!',
        blueprint: 'Poros centrales electropositivos en cada hexámero importan dNTP al lumen blindado.',
        scientific: 'Canales electropositivos Arg18 en los hexámeros importan dNTP excluyendo sensores cGAS.'
      }
    },
    'hiv.det.rrt.01': {
      en: {
        pop: 'Central dogma in reverse (PDB 1RTD): Reverse Transcriptase spins (+)ssRNA into dsDNA!',
        blueprint: 'Retroviral cross-compiler (PDB 1RTD) transcodes (+)ssRNA templates into linear dsDNA.',
        scientific: 'HIV-1 p66/p51 Reverse Transcriptase (PDB 1RTD) converts diploid (+)ssRNA into dsDNA.'
      },
      es: {
        pop: '¡El dogma central al revés (PDB 1RTD): la transcriptasa inversa pasa (+)ARNmc a ADNbc!',
        blueprint: 'El compilador retroviral (PDB 1RTD) traduce moldes de (+)ARNmc en ADNbc lineal.',
        scientific: 'La transcriptasa inversa p66/p51 (PDB 1RTD) convierte el (+)ARNmc diploide en ADNbc.'
      }
    },
    'hiv.det.rrt.02': {
      en: {
        pop: 'Agent Smith’s splicer: Integrase (PDB 1EX4) trims viral DNA ends to weld into host genes.',
        blueprint: 'Integrase (PDB 1EX4) processes viral 3′ ends and splices the cDNA into host chromosomes.',
        scientific: 'Tetrameric Integrase (PDB 1EX4) catalyzes 3′-end processing and host-DNA strand transfer.'
      },
      es: {
        pop: 'El empalmador tipo Matrix: la integrasa (PDB 1EX4) recorta puntas y suelda el ADN.',
        blueprint: 'La integrasa (PDB 1EX4) recorta extremos 3′ e inserta el ADNc en cromosomas huésped.',
        scientific: 'La integrasa tetramérica (PDB 1EX4) ejecuta procesamiento 3′ y transferencia de hebra.'
      }
    },
    'hiv.det.rent.01': {
      en: {
        pop: 'Combination-lock entry: Env gp120 (PDB 4TVP) clicks CD4 first, then twists onto CCR5!',
        blueprint: 'Dual-key receptor port: gp120 (PDB 4TVP) docks CD4 to unlock coreceptor CCR5 binding.',
        scientific: 'Env gp120 (PDB 4TVP) binds CD4, triggering conformational V3 exposure to engage CCR5.'
      },
      es: {
        pop: '¡Cerradura de combinación: Env gp120 (PDB 4TVP) gira primero CD4 y luego engancha CCR5!',
        blueprint: 'Puerto de doble llave: gp120 (PDB 4TVP) fija CD4 para habilitar el amarre a CCR5.',
        scientific: 'Env gp120 (PDB 4TVP) une CD4 induciendo exposición alostérica de V3 hacia CCR5.'
      }
    },
    'hiv.det.rent.02': {
      en: {
        pop: 'gp41 winches both membranes together while RT and IN install a permanent sleeper provirus!',
        blueprint: 'gp41 six-helix refolding fuses membranes so RT and IN commit chromosomal proviral DNA.',
        scientific: 'gp41 six-helix bundle collapse fuses bilayers ahead of RT synthesis and IN integration.'
      },
      es: {
        pop: '¡gp41 funde ambas membranas mientras RT e IN instalan un provirus durmiente perpetuo!',
        blueprint: 'El pliegue de gp41 funde bicapas para que RT e IN instalen ADN proviral cromosómico.',
        scientific: 'El colapso 6HB de gp41 fusiona las bicapas antes de la retrotranscripción e integración.'
      }
    },
    'hiv.det.sch.01': {
      en: {
        pop: 'Cutaway of the stealth retrovirus: raft lipid cloak, p17 liner, and scarce Env clubs.',
        blueprint: 'Retroviral hull cutaway: raft bilayer, myristoylated p17 matrix, and sparse Env array.',
        scientific: 'Isolated HIV-1 cutaway showing raft lipid bilayer, p17 MA shell, and ~14 Env trimers.'
      },
      es: {
        pop: 'Corte del retrovirus furtivo: capa de balsa lipídica, forro p17 y escasas mazas Env.',
        blueprint: 'Sección del casco retroviral: bicapa rígida, matriz p17 miristoilada y red Env escasa.',
        scientific: 'Corte aislado del VIH-1 con bicapa de balsa lipídica, corteza p17 y ~14 trímeros Env.'
      }
    },
    'hiv.det.sch.02': {
      en: {
        pop: 'Nested inside rides the fullerene cone safeguarding twin RNA scrolls, RT, and Integrase.',
        blueprint: 'Inner fullerene vault encloses diploid ssRNA alongside RT compiler and IN splicer.',
        scientific: 'Central fullerene p24 cone encapsulates dimeric 9.7 kb (+)ssRNA, RT, and Integrase.'
      },
      es: {
        pop: 'Anidado dentro viaja el cono de fulereno guardando dos rollos de ARN, RT e integrasa.',
        blueprint: 'La bóveda interna de fulereno aloja el ARN diploide junto al compilador RT y la IN.',
        scientific: 'El cono central p24 encapsula el (+)ARNmc dimérico de 9,7 kb, RT e integrasa.'
      }
    },
    'hiv.det.env.01': {
      en: {
        pop: 'Sugar-camouflaged spike in X-ray view (PDB 4TVP): the prefusion HIV-1 Env trimer!',
        blueprint: 'Crystal structure of the prefusion HIV-1 Env gp120/gp41 trimer assembly (PDB 4TVP).',
        scientific: 'X-ray crystal structure of the closed prefusion HIV-1 Env gp120/gp41 heterotrimer (4TVP).'
      },
      es: {
        pop: '¡Espícula camuflada en azúcar vista por rayos X (PDB 4TVP): el trímero Env en prefusión!',
        blueprint: 'Estructura cristalina del ensamblaje trimérico Env gp120/gp41 en prefusión (PDB 4TVP).',
        scientific: 'Estructura cristalográfica del heterotrímero cerrado en prefusión Env gp120/gp41 (4TVP).'
      }
    },
    'hiv.det.env.02': {
      en: {
        pop: 'Three gp120 heads handle the CD4/CCR5 handshake; three gp41 stalks fire the fusion winch.',
        blueprint: 'Three gp120 receptor heads cap three spring-loaded gp41 membrane-fusion stalks.',
        scientific: 'Three receptor-binding gp120 subunits crown three transmembrane fusogenic gp41 subunits.'
      },
      es: {
        pop: 'Tres cabezas gp120 dan el apretón CD4/CCR5; tres tallos gp41 accionan la fusión.',
        blueprint: 'Tres cabezales gp120 coronan tres tallos fusogénicos gp41 cargados por resorte.',
        scientific: 'Tres subunidades receptoras gp120 coronan tres tallos transmembrana fusogénicos gp41.'
      }
    },
    'hiv.det.ma.01': {
      en: {
        pop: 'Sub-membrane dome bracket in crystal detail (PDB 1HIW): the trimeric p17 Matrix!',
        blueprint: 'Crystal structure of the three-subunit p17 Matrix inner-leaflet liner (PDB 1HIW).',
        scientific: 'X-ray crystal structure of the homotrimeric HIV-1 p17 Matrix protein shell unit (1HIW).'
      },
      es: {
        pop: '¡Soporte bajo membrana en detalle cristalino (PDB 1HIW): el trímero de matriz p17!',
        blueprint: 'Estructura cristalina del revestimiento interno trimérico de matriz p17 (PDB 1HIW).',
        scientific: 'Estructura cristalográfica de la unidad homotrimérica de matriz p17 de VIH-1 (PDB 1HIW).'
      }
    },
    'hiv.det.ma.02': {
      en: {
        pop: 'Basic Velcro patches and greasy myristoyl toes lock this matrix under the lipid cloak.',
        blueprint: 'Cationic surface patches and N-myristoyl tails anchor the matrix beneath the bilayer.',
        scientific: 'Basic PI(4,5)P2-binding surfaces and N-myristoyl groups tether MA to the inner leaflet.'
      },
      es: {
        pop: 'Parches básicos tipo velcro y puntas grasas miristoílo fijan la matriz bajo el manto.',
        blueprint: 'Parches catiónicos y colas N-miristoílo anclan la matriz bajo la bicapa lipídica.',
        scientific: 'Superficies básicas afines a PI(4,5)P2 y grupos N-miristoílo fijan MA a la cara interna.'
      }
    },
    'hiv.det.hex.01': {
      en: {
        pop: 'Flat six-sided stealth armor tile in X-ray view (PDB 3H4E): the p24 Capsid hexamer!',
        blueprint: 'Crystal structure of the planar six-fold p24 Capsid honeycomb tile (PDB 3H4E).',
        scientific: 'X-ray crystal structure of the planar hexameric HIV-1 p24 Capsid ring (PDB 3H4E).'
      },
      es: {
        pop: '¡Placa hexagonal furtiva vista en rayos X (PDB 3H4E): el hexámero p24 de la cápside!',
        blueprint: 'Estructura cristalina de la loseta plana hexagonal de cápside p24 (PDB 3H4E).',
        scientific: 'Estructura cristalográfica del anillo hexamérico plano de cápside p24 de VIH-1 (3H4E).'
      }
    },
    'hiv.det.hex.02': {
      en: {
        pop: 'Six N-terminal domains ring a β-hairpin iris that gulps host dNTPs for DNA building.',
        blueprint: 'Six N-terminal domains form a gated central β-hairpin channel importing cytosolic dNTPs.',
        scientific: 'Six N-terminal domains assemble an electropositive β-hairpin pore (~8 Å) for dNTP import.'
      },
      es: {
        pop: 'Seis dominios N-terminales forman un iris en horquilla β que traga dNTP celulares.',
        blueprint: 'Seis dominios N-terminales delimitan un poro central en horquilla β importador de dNTP.',
        scientific: 'Seis dominios NTD configuran un poro electropositivo en horquilla β (~8 Å) para dNTP.'
      }
    },
    'hiv.det.pent.01': {
      en: {
        pop: 'Five-sided Euler corner piece in crystal detail (PDB 3P05): the p24 vertex pentamer!',
        blueprint: 'Crystal structure of the five-subunit p24 Capsid curvature keystone (PDB 3P05).',
        scientific: 'X-ray crystal structure of the homopentameric HIV-1 p24 Capsid vertex ring (PDB 3P05).'
      },
      es: {
        pop: '¡Pieza esquinera de Euler en cristal (PDB 3P05): el pentámero p24 de cinco lados!',
        blueprint: 'Estructura cristalina de la piedra angular de cinco subunidades p24 CA (PDB 3P05).',
        scientific: 'Estructura cristalográfica del homopentámero de vértice de cápside p24 de VIH-1 (3P05).'
      }
    },
    'hiv.det.pent.02': {
      en: {
        pop: 'Twelve of these pentagons bend the flat p24 hex sheet into a sealed Trojan Horse cone!',
        blueprint: 'Twelve pentamers introduce Gaussian curvature to close the hex sheet into a cone.',
        scientific: 'Twelve pentagonal vertices curve the ~216-hexamer lattice into a closed fullerene cone.'
      },
      es: {
        pop: '¡Doce de estos pentágonos doblan la lámina hexagonal en un cono de Troya cerrado!',
        blueprint: 'Doce pentámeros aportan curvatura gaussiana para cerrar la red hexagonal en cono.',
        scientific: 'Doce vértices pentaméricos curvan la red de ~216 hexámeros en un cono cerrado.'
      }
    },
    'hiv.det.rt.01': {
      en: {
        pop: 'X-ray snapshot (PDB 1RTD) of HIV-1 Reverse Transcriptase clasping a fresh DNA duplex!',
        blueprint: 'Crystal structure of HIV-1 Reverse Transcriptase complexed with primer-template DNA (1RTD).',
        scientific: 'X-ray crystal structure of heterodimeric HIV-1 RT bound to duplex DNA substrate (PDB 1RTD).'
      },
      es: {
        pop: '¡Instantánea en rayos X (PDB 1RTD) de la transcriptasa inversa abrazando ADN nuevo!',
        blueprint: 'Estructura cristalina de la transcriptasa inversa unida a molde-cebador de ADN (1RTD).',
        scientific: 'Estructura cristalográfica del heterodímero RT de VIH-1 unido a dúplex de ADN (PDB 1RTD).'
      }
    },
    'hiv.det.rt.02': {
      en: {
        pop: 'Subunit p66 packs both the DNA writer and RNase H shredder; p51 stiffens the frame.',
        blueprint: 'Catalytic p66 houses polymerase and RNase H active sites while p51 braces the clamp.',
        scientific: 'Subunit p66 carries polymerase and RNase H domains; proteolytically truncated p51 scaffolds it.'
      },
      es: {
        pop: 'La pieza p66 reúne pluma de ADN y trituradora RNasa H; p51 refuerza el armazón.',
        blueprint: 'p66 contiene los centros polimerasa y RNasa H, mientras p51 rigidiza el bastidor.',
        scientific: 'La subunidad p66 porta polimerasa y RNasa H; la subunidad truncada p51 le da soporte.'
      }
    },
    'hiv.det.in.01': {
      en: {
        pop: 'Crystal close-up (PDB 1EX4) of Integrase—the enzyme that makes HIV a lifelong guest!',
        blueprint: 'Crystal structure of HIV-1 Integrase catalytic and DNA-binding modules (PDB 1EX4).',
        scientific: 'Two-domain X-ray structure of HIV-1 Integrase core and C-terminal DNA domain (PDB 1EX4).'
      },
      es: {
        pop: '¡Primer plano cristalino (PDB 1EX4) de la integrasa que instala al VIH de por vida!',
        blueprint: 'Estructura cristalina de los módulos catalítico y fijador de ADN de integrasa (PDB 1EX4).',
        scientific: 'Estructura cristalográfica de dos dominios (catalítico y C-terminal) de integrasa (1EX4).'
      }
    },
    'hiv.det.in.02': {
      en: {
        pop: 'Its DDE active site snips open a human chromosome and stitches viral DNA right in.',
        blueprint: 'Catalytic DDE triad cleaves and joins viral cDNA ends into host chromosomal DNA.',
        scientific: 'Conserved DDE active-site carboxylates coordinate Mg²⁺ for chromosomal transesterification.'
      },
      es: {
        pop: 'Su centro activo DDE abre un cromosoma humano y cose dentro el ADN retroviral.',
        blueprint: 'La tríada catalítica DDE corta y empalma los extremos del ADNc en el ADN cromosómico.',
        scientific: 'Los carboxilatos conservados DDE coordinan Mg²⁺ para la transesterificación cromosómica.'
      }
    },
    'adv.det.rver.01': {
      en: {
        pop: 'Five Penton subunits lock each of Adenovirus’s 12 corners like pop-out escape hatches!',
        blueprint: 'Five Penton base subunits seal each 5-fold vertex as a mechanically releasable hatch.',
        scientific: 'Homopentameric Penton III bases (PDB 1X9T) cap all twelve 5-fold icosahedral vertices.'
      },
      es: {
        pop: '¡Cinco piezas de pentón cierran cada una de las 12 esquinas como escotillas eyectables!',
        blueprint: 'Cinco subunidades de pentón sellan cada vértice quíntuple como escotilla desprendible.',
        scientific: 'Bases homopentaméricas de Pentón III (PDB 1X9T) cierran los doce vértices icosaédricos.'
      }
    },
    'adv.det.rver.02': {
      en: {
        pop: 'Out from the center shoots a 30 nm three-braided Fiber antenna tipped with a CAR knob.',
        blueprint: 'A trimeric 30 nm Fiber boom projects outward, tipped with a C-terminal CAR-docking knob.',
        scientific: 'Homotrimeric 30 nm Fiber IV shafts (PDB 1QIU) project distally to engage host CAR D1.'
      },
      es: {
        pop: 'Del centro brota una antena trenzada de 30 nm rematada con su botón cazador de CAR.',
        blueprint: 'Un mástil trimérico de 30 nm se proyecta al exterior con su botón de anclaje a CAR.',
        scientific: 'Tallos homotriméricos de Fibra IV de 30 nm (PDB 1QIU) se proyectan hacia el receptor CAR.'
      }
    },
    'adv.det.rcor.01': {
      en: {
        pop: 'Inside the crystal fortress, 800 protein VII spools disguise 36 kbp of DNA as chromatin!',
        blueprint: '36 kbp of linear dsDNA winds around ~800 histone-mimic protein VII spools.',
        scientific: '35.9 kbp linear dsDNA wraps ~800 basic polypeptide VII copies into ~200 adenosomes.'
      },
      es: {
        pop: '¡En la fortaleza de cristal, 800 carretes VII disfrazan 36 kpb de ADN como cromatina!',
        blueprint: '36 kpb de ADNbc lineal se bobinan sobre ~800 carretes de proteína VII tipo histona.',
        scientific: '35,9 kpb de ADNbc lineal se enrollan en ~800 copias básicas de proteína VII (~200 adenosomas).'
      }
    },
    'adv.det.rcor.02': {
      en: {
        pop: 'Protein V straps the core to Hexon walls while Terminal Protein primes both 5′ tips.',
        blueprint: 'Bridging protein V links the core to Hexon facets; covalent TP caps prime both 5′ ends.',
        scientific: 'Polypeptide V (~157 copies) tethers the core to hexons; 55 kDa TP caps both 5′ termini.'
      },
      es: {
        pop: 'La proteína V sujeta el núcleo al muro de hexón y la TP ceba ambas puntas 5′.',
        blueprint: 'La proteína puente V une el núcleo a las facetas y tapas TP ceban ambos extremos 5′.',
        scientific: 'El polipéptido V (~157 copias) fija el núcleo al hexón; la TP (55 kDa) sella ambos 5′.'
      }
    },
    'adv.det.rent.01': {
      en: {
        pop: 'Double-key con: Fiber’s knob snags CAR first, then Penton’s RGD loops charm αv integrins!',
        blueprint: 'Sequential entry: distal Fiber knob tethers CAR before Penton RGD loops engage αv integrins.',
        scientific: 'Distal Fiber knob binds tight-junction CAR prior to Penton RGD–αv integrin clustering.'
      },
      es: {
        pop: '¡Estafa de doble llave: el botón engancha CAR y luego los lazos RGD seducen integrinas αv!',
        blueprint: 'Entrada secuencial: el botón amarra CAR antes de que los bucles RGD fijen integrinas αv.',
        scientific: 'El botón distal fija CAR intercelular antes del agrupamiento de integrinas αv por RGD.'
      }
    },
    'adv.det.rent.02': {
      en: {
        pop: 'Corner hatch pops free, unleashing protein VI blades that slash open the endosome trap!',
        blueprint: 'Vertex ejection releases internal lytic protein VI to rupture the endosomal membrane.',
        scientific: 'Mechanical vertex shedding liberates amphipathic polypeptide VI to lyse early endosomes.'
      },
      es: {
        pop: '¡Salta la esquina y libera cuchillas de proteína VI que rajan la trampa endosómica!',
        blueprint: 'La eyección del vértice suelta proteína lítica VI para romper la membrana endosómica.',
        scientific: 'El desprendimiento mecánico del vértice libera polipéptido anfipático VI endosomolítico.'
      }
    },
    'adv.det.sch.01': {
      en: {
        pop: 'Naked D20 crystal cutaway: twenty flat facets built from 240 Hexon armor towers.',
        blueprint: 'Geodesic chassis cutaway: 20 triangular facets tiled by 240 trimeric Hexon modules.',
        scientific: 'Isolated HAdV cutaway: 90 nm pseudo-T=25 capsid of 240 Hexon II trimers on 20 facets.'
      },
      es: {
        pop: 'Corte del cristal D20 desnudo: veinte caras planas hechas de 240 torres de hexón.',
        blueprint: 'Sección del chasis geodésico: 20 facetas triangulares con 240 módulos de hexón.',
        scientific: 'Corte aislado de HAdV: cápside pseudo-T=25 de 90 nm con 240 trímeros Hexón II.'
      }
    },
    'adv.det.sch.02': {
      en: {
        pop: 'Twelve Penton corners launch long Fiber grappling hooks around a coiled dsDNA core.',
        blueprint: 'Twelve 5-fold Penton sockets project Fiber shafts around the internal dsDNA payload.',
        scientific: 'Twelve Penton III vertices project 30 nm Fiber IV trimers around the 36 kbp dsDNA core.'
      },
      es: {
        pop: 'Doce esquinas de pentón lanzan largos garfios de fibra en torno al núcleo de ADNbc.',
        blueprint: 'Doce zócalos de pentón proyectan mástiles de fibra sobre la carga interna de ADNbc.',
        scientific: 'Doce vértices Pentón III proyectan fibras IV de 30 nm sobre el núcleo de ADNbc de 36 kpb.'
      }
    },
    'adv.det.hex.01': {
      en: {
        pop: 'X-ray close-up (PDB 1P30) of Adenovirus’s main wall brick: the three-chain Hexon tower!',
        blueprint: 'Crystal structure of the homotrimeric Ad5 Hexon major facet tile (PDB 1P30).',
        scientific: 'X-ray crystal structure of the HAdV-C5 Hexon II major coat homotrimer (PDB 1P30).'
      },
      es: {
        pop: '¡Primer plano en rayos X (PDB 1P30) del bloque principal: la torre triple de Hexón!',
        blueprint: 'Estructura cristalina de la loseta homotrimérica principal Hexón de Ad5 (PDB 1P30).',
        scientific: 'Estructura cristalográfica del homotrímero principal de cubierta Hexón II (PDB 1P30).'
      }
    },
    'adv.det.hex.02': {
      en: {
        pop: 'Double-jelly-roll barrels give a three-part protein a clever six-sided crystal footprint!',
        blueprint: 'Twin jelly-roll barrels per chain create a pseudo-hexagonal base under three loop towers.',
        scientific: 'Double-jelly-roll β-barrel bases confer pseudo-6-fold packing topped by three loop towers.'
      },
      es: {
        pop: '¡Barriles dobles dan a una proteína de tres piezas una ingeniosa huella de seis lados!',
        blueprint: 'Dos barriles por cadena crean una base pseudohexagonal bajo tres torres superiores.',
        scientific: 'Bases de doble barril jelly-roll aportan empaquetamiento pseudohexagonal y tres torres.'
      }
    },
    'adv.det.pent.01': {
      en: {
        pop: 'Crystal snapshot (PDB 1X9T) of the five-part Penton corner ring clasping its Fiber tail!',
        blueprint: 'Crystal structure of the Penton base homopentamer bound to N-terminal Fiber tails (1X9T).',
        scientific: 'X-ray structure of the homopentameric Penton III base with bound Fiber peptides (1X9T).'
      },
      es: {
        pop: '¡Captura cristalina (PDB 1X9T) del anillo esquinero de pentón sujetando su fibra!',
        blueprint: 'Estructura cristalina del homopentámero de pentón unido a colas N de fibra (PDB 1X9T).',
        scientific: 'Estructura cristalográfica de la base homopentamérica Pentón III con péptidos Fibra (1X9T).'
      }
    },
    'adv.det.pent.02': {
      en: {
        pop: 'Five corner subunits plug the vertex tight and wave sticky RGD loops at host integrins.',
        blueprint: 'Five subunits seal the 5-fold vertex while presenting integrin-clustering RGD loops.',
        scientific: 'Five Penton III protomers close the vertex and project mobile αv-binding RGD loops.'
      },
      es: {
        pop: 'Cinco piezas tapan el vértice y agitan lazos RGD pegajosos frente a las integrinas.',
        blueprint: 'Cinco subunidades cierran el vértice quíntuple y exponen bucles RGD para integrinas.',
        scientific: 'Cinco protómeros Pentón III sellan el vértice y proyectan bucles móviles RGD.'
      }
    },
    'adv.det.fib.01': {
      en: {
        pop: 'X-ray view (PDB 1QIU) of the grappling hook’s tip: distal Fiber shaft plus CAR Knob!',
        blueprint: 'Crystal structure of the distal Fiber β-spiral shaft and trimeric CAR Knob (PDB 1QIU).',
        scientific: 'X-ray crystal structure of the distal Fiber IV shaft and C-terminal Knob trimer (1QIU).'
      },
      es: {
        pop: '¡Vista en rayos X (PDB 1QIU) de la punta del garfio: eje distal y botón para CAR!',
        blueprint: 'Estructura cristalina del eje distal en espiral β y botón trimérico CAR (PDB 1QIU).',
        scientific: 'Estructura cristalográfica del eje distal y botón C-terminal de Fibra IV (PDB 1QIU).'
      }
    },
    'adv.det.fib.02': {
      en: {
        pop: 'A stiff triple-β-spiral mast holds the three-lobed CAR-catching head high above the shell.',
        blueprint: 'A rigid triple β-spiral shaft supports the C-terminal CAR receptor-docking head.',
        scientific: 'Repeat triple-β-spiral architecture elevates the C-terminal β-sandwich CAR-binding knob.'
      },
      es: {
        pop: 'Un rígido mástil en triple espiral β alza la cabeza triple cazadora sobre el casco.',
        blueprint: 'Un eje rígido en triple espiral β sostiene el cabezal C-terminal de anclaje a CAR.',
        scientific: 'La arquitectura repetitiva en triple espiral β eleva el botón C-terminal afín a CAR.'
      }
    },
    'tmv.det.rhel.01': {
      en: {
        pop: 'Pure spiral symmetry: 16⅓ four-helix bricks per turn lock into TMV’s 18 nm armor tube!',
        blueprint: '16⅓ radial four-helix subunits per turn build the rigid 18.0 nm outer cylinder.',
        scientific: 'Right-handed 16⅓-subunit/turn four-α-helix lattice forming the 18.0 nm rod (PDB 2TMV).'
      },
      es: {
        pop: '¡Pura simetría espiral: 16⅓ ladrillos por vuelta cierran el tubo blindado de 18 nm!',
        blueprint: '16⅓ subunidades radiales de cuatro hélices por vuelta forman el cilindro de 18,0 nm.',
        scientific: 'Red dextrógira de 16⅓ subunidades de cuatro hélices α por giro (18,0 nm DE, PDB 2TMV).'
      }
    },
    'tmv.det.rhel.02': {
      en: {
        pop: 'Three RNA letters nestle inside every brick’s groove at a tidy 4 nm radius.',
        blueprint: 'Three RNA nucleotides lock into each subunit’s basic groove at r = 4.0 nm.',
        scientific: 'Each Coat Protein protomer coordinates a trinucleotide RNA segment at 4.0 nm radius.'
      },
      es: {
        pop: 'Tres letras de ARN descansan en la ranura de cada ladrillo a 4 nm exactos de radio.',
        blueprint: 'Tres nucleótidos de ARN encajan en el surco básico de cada pieza a r = 4,0 nm.',
        scientific: 'Cada protómero de cubierta coordina un segmento trinucleotídico de ARN a r = 4,0 nm.'
      }
    },
    'tmv.det.rchn.01': {
      en: {
        pop: 'Down the 4.0 nm hollow chimney sit negative Caspar charges cocked like tiny springs.',
        blueprint: 'Acidic Caspar carboxylate clusters ring the 4.0 nm central channel wall.',
        scientific: 'High-pKa Caspar carboxylates (Glu95/97/106, Asp109) line the 4.0 nm axial channel.'
      },
      es: {
        pop: 'Por la chimenea hueca de 4,0 nm esperan cargas negativas de Caspar listas para saltar.',
        blueprint: 'Agrupaciones ácidas de carboxilatos de Caspar rodean la pared del canal de 4,0 nm.',
        scientific: 'Carboxilatos de Caspar de alto pKa (Glu95/97/106, Asp109) tapizan el canal de 4,0 nm.'
      }
    },
    'tmv.det.rchn.02': {
      en: {
        pop: 'When leaf-cell calcium drops near zero, those negative charges shove the rod open!',
        blueprint: 'Low cytosolic Ca²⁺ removes stabilizing bridges, triggering electrostatic uncoating.',
        scientific: 'Nanomolar cytosolic Ca²⁺ induces Caspar carboxylate repulsion and 5′-end uncoating.'
      },
      es: {
        pop: '¡Cuando el calcio cae casi a cero en la hoja, esas cargas negativas abren el bastón!',
        blueprint: 'El bajo Ca²⁺ citosólico retira puentes iónicos y activa la apertura electrostática.',
        scientific: 'El Ca²⁺ nanomolar citosólico induce repulsión entre carboxilatos y apertura en 5′.'
      }
    },
    'tmv.det.rasm.01': {
      en: {
        pop: 'Hands-free assembly: double-layer 20S washers lock straight onto the RNA’s OAS hairpin!',
        blueprint: 'Bilayer 20S protein discs selectively recognize the OAS stem-loop on viral RNA.',
        scientific: '34-subunit bilayer 20S discs nucleate assembly at the internal OAS RNA stem-loop.'
      },
      es: {
        pop: '¡Montaje sin manos: arandelas dobles 20S enganchan directo la horquilla OAS del ARN!',
        blueprint: 'Los discos proteicos bicapa 20S reconocen selectivamente el tallo-bucle OAS del ARN.',
        scientific: 'Discos bicapa 20S de 34 subunidades nuclean el ensamblaje sobre la horquilla OAS.'
      }
    },
    'tmv.det.rasm.02': {
      en: {
        pop: 'Twisting into spiral lock-washers, they reel the 5′ RNA loop right up the central bore!',
        blueprint: 'Proto-helical lock-washer switching pulls the 5′ RNA tail upward through the bore.',
        scientific: 'Dislocation into helical lock-washers reels a traveling 5′ RNA loop up the 4 nm lumen.'
      },
      es: {
        pop: '¡Al girar como arandelas en espiral, izan el lazo 5′ del ARN por el tubo central!',
        blueprint: 'El cambio a arandela protohelicoidal arrastra el ARN 5′ hacia arriba por el conducto.',
        scientific: 'La transición a arandela helicoidal iza un bucle viajero 5′ por el lumen de 4 nm.'
      }
    },
    'tmv.det.sch.01': {
      en: {
        pop: 'Helical rod in clean cutaway: 16⅓ identical coat bricks per turn from base to tip.',
        blueprint: 'Schematic TMV rod cutaway: 16⅓ identical coat subunits per helical turn.',
        scientific: 'Isolated cutaway of the 300 × 18 nm TMV helix at 16⅓ Coat Protein subunits per turn.'
      },
      es: {
        pop: 'Bastón helicoidal en corte limpio: 16⅓ ladrillos idénticos por vuelta de punta a punta.',
        blueprint: 'Corte esquemático del bastón TMV: 16⅓ subunidades idénticas por giro helicoidal.',
        scientific: 'Corte aislado de la hélice de 300 × 18 nm del TMV con 16⅓ subunidades por vuelta.'
      }
    },
    'tmv.det.sch.02': {
      en: {
        pop: 'Coiled at 4 nm radius, the single RNA strand hugs the 4 nm central water channel.',
        blueprint: 'Single-stranded RNA spirals at r = 4.0 nm around the hollow 4.0 nm axial bore.',
        scientific: 'One 6.4 kb (+)ssRNA strand winds at r = 4.0 nm around the 4.0 nm central channel.'
      },
      es: {
        pop: 'Enrollada a 4 nm de radio, la hebra única de ARN rodea el túnel central de 4 nm.',
        blueprint: 'El ARN monocatenario gira a r = 4,0 nm en torno al conducto axial hueco de 4,0 nm.',
        scientific: 'Una hebra (+)ARNmc de 6,4 kb se enrolla a r = 4,0 nm alrededor del canal de 4,0 nm.'
      }
    },
    'tmv.det.turn.01': {
      en: {
        pop: 'One spiral loop from Rosalind’s heir PDB 2TMV: 17 coat bricks holding 51 RNA bases!',
        blueprint: 'Single helical turn model (PDB 2TMV) comprising 17 coat subunits and 51 nt of RNA.',
        scientific: 'Reconstructed helical turn from 2.9 Å fiber diffraction (PDB 2TMV: 17 CP + 51 nt).'
      },
      es: {
        pop: '¡Un giro espiral de PDB 2TMV: 17 ladrillos de cubierta sujetando 51 bases de ARN!',
        blueprint: 'Modelo de una vuelta helicoidal (PDB 2TMV) con 17 subunidades y 51 nt de ARN.',
        scientific: 'Vuelta helicoidal reconstruida a 2,9 Å por difracción de fibras (PDB 2TMV: 17 CP + 51 nt).'
      }
    },
    'tmv.det.turn.02': {
      en: {
        pop: 'Ruby-red RNA letters nestle snugly between emerald-green four-helix protein bundles.',
        blueprint: 'Red RNA nucleotides lock into radial grooves between green four-helix subunits.',
        scientific: 'RNA trinucleotides (red) pack electrostatically between four-α-helix bundles (green).'
      },
      es: {
        pop: 'Letras rojo rubí de ARN se acomodan entre haces proteicos verde esmeralda.',
        blueprint: 'Los nucleótidos rojos encajan en ranuras radiales entre subunidades verdes de 4 hélices.',
        scientific: 'Los trinucleótidos de ARN (rojo) se empaquetan entre haces de cuatro hélices α (verde).'
      }
    },
    'tmv.det.sub.01': {
      en: {
        pop: 'One 158-amino-acid building block (PDB 2TMV)—multiply by 2,130 to build the whole rod!',
        blueprint: 'Single asymmetric unit from PDB 2TMV: one 158-aa Coat Protein monomer.',
        scientific: 'Asymmetric unit of TMV (PDB 2TMV, 2.9 Å): a single 158-aa Coat Protein protomer.'
      },
      es: {
        pop: '¡Un ladrillo de 158 aminoácidos (PDB 2TMV): multiplícalo por 2.130 y tendrás el bastón!',
        blueprint: 'Unidad asimétrica individual de PDB 2TMV: un monómero de cubierta de 158 aa.',
        scientific: 'Unidad asimétrica del TMV (PDB 2TMV, 2,9 Å): un protómero de cubierta de 158 aa.'
      }
    },
    'tmv.det.sub.02': {
      en: {
        pop: 'Four α-helices (LS, RS, LR, RR) lock arms to cradle three RNA letters: G–A–A!',
        blueprint: 'Its four-α-helix bundle (LS, RS, LR, RR) clamps one G–A–A RNA base triplet.',
        scientific: 'Four antiparallel α-helices (LS, RS, LR, RR) clasp a three-nucleotide G–A–A motif.'
      },
      es: {
        pop: '¡Cuatro hélices α (LS, RS, LR, RR) entrelazan brazos para acunar tres bases: G–A–A!',
        blueprint: 'Su haz de cuatro hélices α (LS, RS, LR, RR) sujeta un triplete de bases G–A–A.',
        scientific: 'Cuatro hélices α antiparalelas (LS, RS, LR, RR) fijan un motivo trinucleotídico G–A–A.'
      }
    }
  }
};
