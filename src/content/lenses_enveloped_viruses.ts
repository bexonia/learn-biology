import type { NodeLensMap, PagePartLensMap } from './types.js';

export const ENVELOPED_VIRUS_NODE_LENSES: NodeLensMap = {
  'real-coronavirus': {
    en: {
      simple:
        'SARS-CoV-2 is a microscopic fat bubble studded with sugar-disguised protein clubs that pick the locks on human airway cells and slip a giant 30,000-letter genetic instruction scroll inside.',
      story:
        'Meet the Sugar-Cloaked Shapeshifter: a stolen 92-nanometer lipid bubble bristling with glycan-camouflaged [[Spike trimers|cov-spike-real]] fresh from the previous victim’s secretory membranes. Drifting down a human airway, one Spike flips up a single receptor-binding finger to latch onto [[ACE2|ace2-real]], tricks the cell’s own TMPRSS2 surface scissors into snipping its S2′ spring, and harpoons the airway membrane to fuse both bubbles into one seamless doorway. Through that breach slides a colossal 30,000-letter [[RNA scroll|rna]] dressed as ordinary cellular mail, duping host [[ribosomes|ribosome]] into immediately building [[RdRp copying factories|cov-rdrp-real]] that turn the cell into a round-the-clock virus foundry.',
      blueprint:
        'Role: Enveloped (+)ssRNA respiratory virion (~120 nm) executing receptor-primed membrane fusion and cytosolic replication · From: Budding off host [[ER–Golgi membranes|golgi]] · Inside: 48 [[Spike trimers|cov-spike-real]], M-dimer matrix, 14 [[E viroporins|cov-e-real]], and 29.9 kb [[(+)ssRNA|rna]] wound around 40 [[N oligomers|cov-n-real]] · To: Docks on [[ACE2|ace2-real]] and delivers genome to host [[ribosomes|ribosome]] and [[RdRp|cov-rdrp-real]]',
      scientific:
        'Pleomorphic betacoronavirus virion (~90–120 nm outer diameter; 92 nm host-derived phospholipid envelope). Crowned by ~24–48 club-shaped S glycoprotein homotrimers (PDB 6VSB open, 6VXX closed; 66 N-glycans/trimer), tiled with ~1,000–2,000 dimeric M glycoproteins and ~14–20 pentameric E cation viroporins (PDB 5X29). Lumen houses a 29,903 nt 5′-capped, 3′-polyadenylated (+)ssRNA packaged into ~35–40 helical N-protein vRNP complexes (PDB 6VYO); entry via ACE2 (PDB 1R42) and TMPRSS2 S2′ cleavage initiates cytosolic nsp12–nsp7–nsp8 RdRp transcription (PDB 6M71, 7BV2).'
    },
    es: {
      simple:
        'El SARS-CoV-2 es una diminuta burbuja de grasa erizada de mazas proteicas disfrazadas con azúcares que fuerzan la cerradura de nuestras células respiratorias e introducen un enorme pergamino genético de 30.000 letras.',
      story:
        'Conoce al Cambiaformas bajo Manto de Azúcar: una burbuja lipídica robada de 92 nanómetros erizada de [[trímeros de Espiga|cov-spike-real]] camuflados con glicanos tras escapar de las membranas secretoras de su víctima anterior. Al descender por las vías respiratorias, una Espiga levanta un único dedo buscador para aferrarse al receptor humano [[ACE2|ace2-real]], engaña a las tijeras celulares TMPRSS2 para que corten su resorte S2′ y arponea la membrana epitelial hasta fundir ambas burbujas en una sola puerta. Por esa brecha se desliza un colosal [[pergamino de ARN|rna]] de 30.000 letras disfrazado de correo legítimo, haciendo que los [[ribosomas|ribosome]] construyan al instante [[fábricas copiadoras RdRp|cov-rdrp-real]] que convierten la célula en una imprenta viral incesante.',
      blueprint:
        'Rol: Virión respiratorio envuelto de ARNmc(+) (~120 nm) especializado en fusión de membranas y replicación citosólica · Origen: Gemación desde [[membranas RE–Golgi|golgi]] del huésped · Interior: 48 [[trímeros S|cov-spike-real]], red dimérica M, 14 [[viroporinas E|cov-e-real]] y [[ARNmc(+)|rna]] de 29,9 kb enrollado en 40 [[oligómeros N|cov-n-real]] · Destino: Se acopla a [[ACE2|ace2-real]] y entrega el genoma a los [[ribosomas|ribosome]] y a la [[RdRp|cov-rdrp-real]]',
      scientific:
        'Virión pleomórfico de betacoronavirus (~90–120 nm de diámetro total; bicapa fosfolipídica de 92 nm derivada del huésped). Coronado por ~24–48 homotrímeros de glicoproteína S (PDB 6VSB abierto, 6VXX cerrado; 66 N-glicanos/trímero), tapizado por ~1.000–2.000 dímeros de proteína M y ~14–20 viroporinas pentaméricas E (PDB 5X29). El lumen aloja un ARNmc(+) de 29.903 nt con caperuza 5′ y cola poli(A) 3′ empaquetado en ~35–40 complejos helicoidales vRNP de proteína N (PDB 6VYO); la entrada vía ACE2 (PDB 1R42) y corte S2′ por TMPRSS2 inicia la síntesis citosólica por RdRp nsp12–nsp7–nsp8 (PDB 6M71, 7BV2).'
    }
  },
  'real-cov-spike': {
    en: {
      simple:
        'This close-up catches the exact moment a viral Spike protein flips up one molecular finger to grab a human cell receptor, cocking a spring-loaded harpoon that merges virus and cell.',
      story:
        'Hidden beneath a swaying forest of stolen sugar chains so antibodies glide right past, the [[Spike trimer|cov-spike-real]] keeps its three receptor-binding fingers tucked down until it brushes an airway cell’s surface. Suddenly one finger hinges upward into the attack position and clamps onto the outer helix of human [[ACE2|ace2-real]]—a blood-pressure enzyme unwittingly drafted as a front-door handle. That handshake exposes a buried cleavage loop, duping host TMPRSS2 scissors anchored in the [[plasma membrane|plasma-membrane]] into snipping the S2′ latch; the S1 cap falls away, a hydrophobic harpoon shoots into the cell’s [[lipid bilayer|phospholipid]], and the stalk jackknifes to fuse two separate membranes into one open tunnel.',
      blueprint:
        'Role: Conformational receptor-recognition and class I membrane-fusion contact zone (~25 nm) · From: Glycosylated [[Spike homotrimers|cov-spike-real]] scanning the airway glycocalyx · Inside: Up-state S1 RBD clasping the α1 helix of [[ACE2|ace2-real]] alongside TMPRSS2 S2′ cleavage · To: Harpoons the host [[plasma membrane|plasma-membrane]] to open a fusion pore for the [[vRNP core|real-cov-rnp]]',
      scientific:
        ' ~25 nm interfacial contact complex between SARS-CoV-2 Spike (PDB 6VSB, 1-RBD-up state) and the zinc metallopeptidase ectodomain of human ACE2 (PDB 1R42; RBD–ACE2 interface PDB 6M0J, Kd ~15 nM). Following furin pre-cleavage at the polybasic S1/S2 RRAR motif during biogenesis, ACE2 engagement exposes the S2′ site (R815↓S816) to transmembrane serine protease TMPRSS2, releasing the fusion peptide and driving irreversible HR1/HR2 refolding into a postfusion six-helix bundle (PDB 6LXT).'
    },
    es: {
      simple:
        'Este primer plano captura el instante exacto en que una proteína Espiga levanta un dedo molecular para agarrar un receptor humano, activando un arpón con resorte que funde al virus con la célula.',
      story:
        'Oculto bajo un bosque oscilante de cadenas de azúcar robadas que despistan a los anticuerpos, el [[trímero de la Espiga|cov-spike-real]] mantiene sus tres dedos buscadores plegados hasta rozar una célula respiratoria. De pronto, un dedo se alza como una ganzúa y se aferra a la hélice externa de [[ACE2|ace2-real]], una enzima reguladora de la presión arterial convertida sin quererlo en picaporte. Ese apretón deja al descubierto un bucle secreto, engañando a las tijeras celulares TMPRSS2 ancladas en la [[membrana plasmática|plasma-membrane]] para que corten el seguro S2′: el cabezal S1 cae, un arpón hidrofóbico perfora la [[bicapa lipídica|phospholipid]] humana y el tallo se pliega de golpe para fundir ambas membranas en un túnel abierto.',
      blueprint:
        'Rol: Zona de contacto conformacional (~25 nm) para reconocimiento de receptor y fusión de membranas de clase I · Origen: [[Homotrímeros de Espiga|cov-spike-real]] glicosilados explorando la superficie epitelial · Interior: Dominio RBD en estado «up» sujetando la hélice α1 de [[ACE2|ace2-real]] junto al corte S2′ por TMPRSS2 · Destino: Arponea la [[membrana plasmática|plasma-membrane]] huésped para inyectar el [[núcleo vRNP|real-cov-rnp]]',
      scientific:
        'Complejo interfacial de ~25 nm entre la Espiga de SARS-CoV-2 (PDB 6VSB, conformación 1-RBD-up) y el ectodominio metalopeptidasa de zinc de ACE2 humana (PDB 1R42; interfaz RBD–ACE2 PDB 6M0J, Kd ~15 nM). Tras el corte previo por furina en el motivo polibásico S1/S2 (RRAR) durante la biogénesis, la unión a ACE2 expone el sitio S2′ (R815↓S816) a la serina proteasa transmembrana TMPRSS2, liberando el péptido de fusión e impulsando el replegamiento irreversible HR1/HR2 en un haz posfusión de seis hélices (PDB 6LXT).'
    }
  },
  'real-cov-rnp': {
    en: {
      simple:
        'Instead of a stiff geometric shell, the coronavirus wraps its unusually long RNA thread around dozens of protein spools like a flexible pearl necklace cushioned inside the fat bubble.',
      story:
        'Packing nearly 30,000 letters of fragile [[viral RNA|rna]] into a tight 65-nanometer space without tangling or snapping it takes a masterclass in origami. Rather than locking its blueprint inside a rigid crystal box, the virus threads the long strand through forty positively charged [[Nucleocapsid spools|cov-n-real]] arranged like beads on a coiled necklace, tethered gently to Membrane protein tails lining the [[lipid envelope|phospholipid]]. The moment Spike fuses the outer bubbles, this springy necklace unspools cleanly into the host [[cytosol|cytosol]], handing an intact, ready-to-read genetic scroll straight to waiting [[ribosomes|ribosome]].',
      blueprint:
        'Role: Flexible helical ribonucleoprotein lumen (~65 nm) compacting and shielding the giant viral genome · From: Cytoplasmic phase-separated assembly of [[N oligomers|cov-n-real]] around newly copied [[(+)ssRNA|rna]] · Inside: ~35–40 beads-on-a-string vRNP complexes anchored to inner M-dimer C-terminal tails · To: Releases intact capped mRNA genome into host [[cytosol|cytosol]] for [[ribosomal|ribosome]] translation',
      scientific:
        '~65 nm internal virion lumen containing ~35–40 ribonucleoprotein (vRNP) "eggs-in-a-nest" particles (~14–15 nm diameter each, cryo-ET). Dimeric/oligomeric SARS-CoV-2 Nucleocapsid (N, 419 aa; NTD PDB 6VYO, CTD dimer PDB 6WZO) binds the 29,903 nt (+)ssRNA phosphodiester backbone via electropositive β-hairpin clefts and intrinsically disordered SR-rich linkers, tethered to endodomains of dimeric M glycoproteins (PDB 8CTK) along the inner envelope leaflet.'
    },
    es: {
      simple:
        'En lugar de una caja rígida, el coronavirus enrolla su larguísimo hilo de ARN alrededor de decenas de carretes proteicos como un collar de perlas flexible acolchado dentro de la burbuja de grasa.',
      story:
        'Empaquetar casi 30.000 letras de frágil [[ARN viral|rna]] en una cavidad de apenas 65 nanómetros sin enredarlo ni romperlo exige papiroflexia molecular de primer nivel. En vez de encerrar sus planos en un cofre rígido, el virus enhebra la larga hebra por cuarenta [[carretes de Nucleocápside|cov-n-real]] con carga positiva dispuestos como cuentas de un collar flexible, sujetos a las colas internas de la [[envoltura lipídica|phospholipid]]. En cuanto la Espiga funde las burbujas exteriores, este collar elástico se desenrolla limpiamente en el [[citosol|cytosol]] humano y tiende un pergamino intacto y listo para leer directamente a los [[ribosomas|ribosome]].',
      blueprint:
        'Rol: Lumen helicoidal flexible de ribonucleoproteína (~65 nm) que compacta y protege el genoma gigante · Origen: Ensamblaje citoplasmático de [[oligómeros N|cov-n-real]] sobre [[ARNmc(+)|rna]] recién sintetizado · Interior: ~35–40 complejos vRNP tipo collar anclados a los extremos C-terminales de dímeros M · Destino: Libera el genoma íntegro con caperuza 5′ al [[citosol|cytosol]] para su traducción en [[ribosomas|ribosome]]',
      scientific:
        'Lumen interno viral de ~65 nm con ~35–40 complejos ribonucleoproteicos (vRNP) esferoidales (~14–15 nm cada uno por crio-ET). Oligómeros de Nucleocápside N (419 aa; NTD PDB 6VYO, dímero CTD PDB 6WZO) fijan el esqueleto fosfodiéster del ARNmc(+) de 29.903 nt mediante hendiduras electropositivas de horquilla β y regiones desordenadas ricas en SR, anclándose a los endodominios de dímeros de proteína M (PDB 8CTK) en la cara interna de la bicapa.'
    }
  },
  'real-cov-replication': {
    en: {
      simple:
        'Once inside the cell, the virus builds its own high-speed molecular printing press—stabilized by twin guide rails—to copy its massive RNA scroll thousands of times over.',
      story:
        'As soon as the viral [[RNA scroll|rna]] slips indoors, unsuspecting host [[ribosomes|ribosome]] read its opening half and forge sixteen viral workhorse proteins that remodel nearby [[ER membranes|rough-er]] into hidden bunker vesicles. At the center of that bunker assembles the [[RdRp copying engine|cov-rdrp-real]]: a catalytic core braced by two long α-helical "sliding poles" that keep the machine from falling off a marathon 30,000-letter track, paired with a dedicated proofreading partner that snips out typos on the fly. Churning at breakneck speed, it prints both full-length genomes for new virions and shorter sub-scrolls ordering fresh [[Spike clubs|cov-spike-real]].',
      blueprint:
        'Role: Cytoplasmic viral replication–transcription complex (~16 nm) synthesizing genomic and subgenomic RNAs · From: Host [[ribosome|ribosome]] translation and proteolytic cleavage of incoming [[ORF1ab (+)ssRNA|rna]] · Inside: Catalytic [[nsp12–nsp7–2×nsp8 holoenzyme|cov-rdrp-real]] operating inside [[ER-derived|rough-er]] double-membrane vesicles · To: Outputs full-length (+)ssRNA for [[N packaging|cov-n-real]] and nested mRNAs for structural proteins',
      scientific:
        '~16 nm SARS-CoV-2 replication–transcription complex (holoenzyme cryo-EM PDB 6M71, RNA-bound PDB 7BV2, extended complex PDB 6XEZ). Comprises the 932-aa nsp12 right-hand RdRp (NiRAN + fingers/palm/thumb domains, active-site motif C SDD 759–761) complexed with cofactor nsp7 and two nsp8 subunits whose N-terminal α-helical extensions (~100 Å) cradle ~40 bp of exiting duplex RNA, coupling with nsp13 helicase and nsp14–nsp10 3′→5′ ExoN proofreader (~150–200 nt/s incorporation).'
    },
    es: {
      simple:
        'Ya dentro de la célula, el virus construye su propia imprenta molecular de alta velocidad —equipada con dos rieles guía— para copiar miles de veces su gigantesco pergamino de ARN.',
      story:
        'Apenas el [[pergamino de ARN|rna]] se cuela en el interior, los confiados [[ribosomas|ribosome]] humanos leen su primera mitad y forjan dieciséis herramientas virales que remodelan las membranas del [[retículo endoplasmático|rough-er]] en búnkeres ocultos de doble pared. En el corazón de ese refugio se ensambla el [[motor copiador RdRp|cov-rdrp-real]], afianzado por dos largas «pértigas deslizantes» helicoidales que impiden que descarrile a lo largo de una pista maratoniana de 30.000 letras, asistido además por un corrector ortográfico que recorta errores al vuelo. Trabajando a toda máquina, imprime tanto genomas completos como mensajes cortos que encargan nuevas [[mazas de Espiga|cov-spike-real]].',
      blueprint:
        'Rol: Complejo citoplasmático de replicación y transcripción (~16 nm) que sintetiza ARN genómico y subgenómico · Origen: Traducción en [[ribosomas|ribosome]] y procesamiento proteolítico del [[ARNmc(+) ORF1ab|rna]] entrante · Interior: [[Holoenzima nsp12–nsp7–2×nsp8|cov-rdrp-real]] alojada en vesículas de doble membrana derivadas del [[RE|rough-er]] · Destino: Produce ARNmc(+) completo para [[empaquetamiento N|cov-n-real]] y ARNm anidados estructurales',
      scientific:
        'Complejo de replicación–transcripción de SARS-CoV-2 de ~16 nm (crio-EM holoenzima PDB 6M71, unido a ARN PDB 7BV2, complejo extendido PDB 6XEZ). Formado por la polimerasa nsp12 de 932 aa (dominio NiRAN + dedos/palma/pulgar, motivo catalítico C SDD 759–761) unida a nsp7 y dos subunidades nsp8 cuyas extensiones α-helicoidales N-terminales (~100 Å) estabilizan ~40 pb del dúplex de ARN saliente, acoplándose a la helicasa nsp13 y la exonucleasa correctora 3′→5′ nsp14–nsp10 (~150–200 nt/s).'
    }
  },
  'real-hiv': {
    en: {
      simple:
        'HIV-1 is a stealthy virus that sneaks a cone-shaped protein vault into human immune cells, converts its RNA code backward into DNA, and splices itself permanently into the cell’s own genes.',
      story:
        'Enter the Double-Agent Inside the Vault: wrapped in a cholesterol-rich membrane stolen from an immune T-cell, HIV-1 displays suspiciously few sugar-armored [[Env spikes|hiv-env-real]]—spaced too far apart for two-armed antibodies to grab two at once. Once an Env spike picks the two-factor lock on a helper T-cell, membrane fusion slips an extraordinary geometric stealth cone of [[p24 hexamers|hiv-ca-hex-real]] indoors. Shielding twin RNA scrolls from cytosolic alarms all the way through a [[nuclear pore|nuclear-pore]], [[Reverse Transcriptase|hiv-rt-real]] rewrites viral RNA backward into DNA inside the closed vault so [[Integrase|hiv-in-real]] can splice it forever into the host’s own chromosomes.',
      blueprint:
        'Role: Enveloped lentiviral retrovirus (~120 nm) targeting CD4+ immune cells for permanent chromosomal integration · From: Plasma-membrane lipid-raft budding lined by [[p17 Matrix|hiv-ma-real]] · Inside: ~14–16 [[Env trimers|hiv-env-real]], fullerene cone of ~216 [[CA hexamers|hiv-ca-hex-real]] + 12 [[pentamers|hiv-ca-pent-real]], diploid 9.7 kb [[(+)ssRNA|rna]], [[RT|hiv-rt-real]], and [[Integrase|hiv-in-real]] · To: Fuses with CD4+/CCR5+ T-cells and integrates proviral [[DNA|dna]] inside the [[nucleus|nucleus]]',
      scientific:
        'Mature spherical lentivirus virion (~120 nm diameter) bounded by a cholesterol/sphingomyelin-enriched host lipid bilayer studded with ~14±7 gp120/gp41 Env heterotrimers (PDB 4TVP; ~85–90 N-glycans/trimer) and an inner myristoylated p17 MA shell (PDB 1HIW). Houses a ~60×32 nm fullerene p24 CA capsid cone (PDB 3J3Q: ~216 hexamers PDB 3H4E + 12 pentamers PDB 3P05) encapsulating a dimeric 9,719 nt (+)ssRNA–NCp7 ribonucleoprotein, ~50–100 p66/p51 RT heterodimers (PDB 1RTD), and tetrameric IN (PDB 1EX4, 3OS0).'
    },
    es: {
      simple:
        'El VIH-1 es un virus sigiloso que introduce una bóveda cónica de proteína en las células inmunitarias humanas, reescribe su ARN hacia atrás en ADN y se inserta para siempre en nuestros propios genes.',
      story:
        'Entra en escena el Doble Agente dentro de la Bóveda: envuelto en una membrana rica en colesterol robada a un linfocito T, el VIH-1 exhibe muy pocas [[espigas Env|hiv-env-real]] blindadas con azúcares, separadas a propósito para que los anticuerpos de dos brazos no logren sujetar dos a la vez. Cuando una espiga abre la cerradura de doble factor de un linfocito T colaborador, la fusión desliza hacia dentro un prodigioso cono furtivo de [[hexámeros p24|hiv-ca-hex-real]]. Ocultando dos pergaminos gemelos de ARN frente a los sensores inmunes hasta cruzar un [[poro nuclear|nuclear-pore]], la [[Transcriptasa Inversa|hiv-rt-real]] reescribe el ARN hacia atrás en ADN para que la [[Integrasa|hiv-in-real]] lo empalme de por vida en los cromosomas humanos.',
      blueprint:
        'Rol: Retrovirus lentiviral envuelto (~120 nm) que infiltra linfocitos T CD4+ para integrarse permanentemente en sus cromosomas · Origen: Gemación en balsas lipídicas revestidas por [[Matriz p17|hiv-ma-real]] · Interior: ~14–16 [[trímeros Env|hiv-env-real]], cono de fullereno de ~216 [[hexámeros CA|hiv-ca-hex-real]] + 12 [[pentámeros|hiv-ca-pent-real]], [[ARNmc(+)|rna]] diploide de 9,7 kb, [[TI|hiv-rt-real]] e [[Integrasa|hiv-in-real]] · Destino: Se fusiona con células T CD4+/CCR5+ e integra [[ADN|dna]] proviral en el [[núcleo|nucleus]]',
      scientific:
        'Virión lentiviral esférico maduro (~120 nm de diámetro) delimitado por una bicapa lipídica rica en colesterol y esfingomielina con ~14±7 heterotrímeros Env gp120/gp41 (PDB 4TVP; ~85–90 N-glicanos/trímero) y una corteza interna miristoilada de Matriz p17 (PDB 1HIW). Contiene una cápside cónica de fullereno p24 CA de ~60×32 nm (PDB 3J3Q: ~216 hexámeros PDB 3H4E + 12 pentámeros PDB 3P05) con dos copias de ARNmc(+) de 9.719 nt recubiertas por NCp7, ~50–100 heterodímeros p66/p51 de TI (PDB 1RTD) e IN tetramérica (PDB 1EX4, 3OS0).'
    }
  },
  'real-hiv-cone': {
    en: {
      simple:
        'Shaped like an asymmetrical soccer-ball cone, this armor-plated capsule hides HIV’s genetic cargo from the cell’s security alarms while vacuuming in building blocks through tiny pores.',
      story:
        'Dumping raw viral nucleic acids into a T-cell’s [[cytosol|cytosol]] would trip every innate tripwire in seconds, so HIV-1 smuggles its entire copying operation inside an armored fullerene stealth cone. Following the strict geometry of Euler’s law, roughly two hundred [[p24 hexamer tiles|hiv-ca-hex-real]] curve smoothly into a 60-nanometer vault only when exactly twelve [[five-sided pentamers|hiv-ca-pent-real]]—five at the narrow nose, seven across the wide cap—snap the angles shut. Hitching a ride along [[microtubules|microtubule]] and squeezing narrow-end-first right through a [[nuclear pore|nuclear-pore]], its microscopic hexamer iris pores suck host DNA letters inside while keeping immune sensors locked out.',
      blueprint:
        'Role: Closed fullerene stealth capsid (~60 × 32 nm) shielding reverse transcription and mediating intact nuclear import · From: Proteolytic maturation of Gag polyproteins after virion budding · Inside: ~216 [[p24 hexamers|hiv-ca-hex-real]] with electropositive dNTP pores closed by 12 [[p24 pentamers|hiv-ca-pent-real]] around [[RT|hiv-rt-real]] and [[RNA|rna]] · To: Transits host [[microtubules|microtubule]] and squeezes through the [[nuclear pore|nuclear-pore]] to uncoat near chromatin',
      scientific:
        '~60 nm × 32 nm asymmetric fullerene cone (~1,300 copies of 231-aa p24 CA; complete atomic model PDB 3J3Q). Closed polyhedral topology obeys Euler’s theorem via ~216 planar CA hexamers (PDB 3H4E, 4XFX) and exactly 12 pentamers (PDB 3P05: 5 at the narrow ~16 nm tip, 7 at the wide ~32 nm dome). Each hexamer’s dynamic R18/β-hairpin central pore (~8 Å) selectively imports anionic dNTPs and binds IP6 for lattice stabilization while engaging FG-nucleoporins (Nup153) and CPSF6 for intact NPC translocation.'
    },
    es: {
      simple:
        'Con la geometría asimétrica de un cono de placas hexagonales y pentagonales, esta cápsula blindada oculta el material del VIH frente a las alarmas celulares mientras aspira ladrillos de ADN por poros diminutos.',
      story:
        'Soltar ácidos nucleicos desnudos en el [[citosol|cytosol]] de un linfocito T dispararía todas las alarmas inmunitarias en segundos, así que el VIH-1 introduce su taller clandestino dentro de un cono furtivo de fullereno. Obedeciendo la implacable geometría de Euler, unas doscientas [[losetas hexaméricas p24|hiv-ca-hex-real]] se curvan en una bóveda de 60 nanómetros gracias a exactamente doce [[pentámeros de cinco lados|hiv-ca-pent-real]] —cinco en la nariz estrecha y siete en la cúpula ancha— que sellan cada esquina. Viajando sobre [[microtúbulos|microtubule]] hasta colarse de punta por un [[poro nuclear|nuclear-pore]], los diminutos poros de cada hexámero aspiran letras de ADN celular sin dejar asomarse a ningún sensor.',
      blueprint:
        'Rol: Cápside furtiva cerrada de fullereno (~60 × 32 nm) que blinda la retrotranscripción y cruza intacta hacia el núcleo · Origen: Maduración proteolítica de Gag tras la gemación · Interior: ~216 [[hexámeros p24|hiv-ca-hex-real]] con poros importadores de dNTP cerrados por 12 [[pentámeros p24|hiv-ca-pent-real]] en torno a la [[TI|hiv-rt-real]] y el [[ARN|rna]] · Destino: Recorre [[microtúbulos|microtubule]] y atraviesa el [[poro nuclear|nuclear-pore]] hasta la cromatina',
      scientific:
        'Cono asimétrico de fullereno de ~60 nm × 32 nm (~1.300 copias de p24 CA de 231 aa; modelo atómico completo PDB 3J3Q). Su topología cerrada cumple el teorema de Euler combinando ~216 hexámeros CA (PDB 3H4E, 4XFX) con exactamente 12 pentámeros (PDB 3P05: 5 en el ápice estrecho de ~16 nm y 7 en el domo ancho de ~32 nm). El poro central dinámico R18/horquilla-β (~8 Å) de cada hexámero importa selectivamente dNTPs aniónicos y coordina IP6 estabilizador, mientras interactúa con nucleoporinas FG (Nup153) y CPSF6 para translocarse íntegro por el CPN.'
    }
  },
  'real-hiv-rt': {
    en: {
      simple:
        'Deep inside the viral vault, one enzyme rewrites fragile RNA backward into sturdy double-stranded DNA, and a second enzyme splices that forged DNA straight into the cell’s own chromosomes.',
      story:
        'Once host building blocks stream through the [[capsid hexamer pores|hiv-ca-hex-real]], the heist’s master forger gets to work in the dark. Clamped onto twin [[RNA scrolls|rna]], [[Reverse Transcriptase|hiv-rt-real]] runs biology’s central rulebook backward—copying RNA into DNA with its front hand while its rear RNase H blade shreds the original RNA evidence behind it, leaping between both scrolls to shuffle mutations that help future viruses dodge drugs. As the vault cracks open inside the [[nucleus|nucleus]], [[Integrase|hiv-in-real]] seizes the freshly minted double-stranded DNA, snips open a busy human chromosome, and welds the viral code in for life.',
      blueprint:
        'Role: Intraluminal reverse-transcription and chromosomal strand-transfer engine (~25 nm core) · From: Packaged diploid [[(+)ssRNA|rna]] primed by host tRNA^Lys3 plus imported cytosolic [[nucleotides|nucleotide]] · Inside: [[RT heterodimer|hiv-rt-real]] synthesizes linear viral dsDNA while degrading RNA; [[Integrase|hiv-in-real]] assembles the intasome · To: Splices permanent proviral [[DNA|dna]] into active host [[chromosomes|chromosome]]',
      scientific:
        'Coupled retroviral replication–integration pathway within the uncoating nuclear capsid core (~25 nm internal lumen). p66/p51 Reverse Transcriptase (PDB 1RTD; error rate ~1–3×10⁻⁵/nt, lacking 3′→5′ exonuclease) executes tRNA^Lys3-primed minus-strand synthesis, RNase H template cleavage, two strand-transfer jumps across the diploid 9.7 kb RNA, and plus-strand dsDNA completion (with central polypurine tract flap). Tetrameric Integrase (PDB 1EX4; intasome PDB 3OS0) performs 3′-CA dinucleotide processing and staggered 5-bp transesterification into LEDGF/p75-tethered active chromatin.'
    },
    es: {
      simple:
        'En lo profundo de la bóveda viral, una enzima reescribe el frágil ARN hacia atrás hasta volverlo ADN resistente, y una segunda enzima cose ese ADN falsificado directamente en los cromosomas humanos.',
      story:
        'En cuanto los ladrillos celulares entran por los poros de los [[hexámeros de la cápside|hiv-ca-hex-real]], el maestro falsificador del golpe entra en acción a oscuras. Abrazada a los dos [[pergaminos gemelos de ARN|rna]], la [[Transcriptasa Inversa|hiv-rt-real]] invierte la ley central de la biología: copia ARN en ADN con su mano delantera mientras su cuchilla trasera RNasa H tritura el molde original para borrar pruebas, saltando entre ambas copias para barajar mutaciones que burlarán futuros fármacos. Cuando la bóveda se abre dentro del [[núcleo|nucleus]], la [[Integrasa|hiv-in-real]] toma ese ADN recién forjado, corta un cromosoma humano activo y suelda el código viral de por vida.',
      blueprint:
        'Rol: Motor intraluminal de transcripción inversa y transferencia de hebra cromosómica (núcleo de ~25 nm) · Origen: [[ARNmc(+)|rna]] diploide cebado por tRNA^Lys3 más [[nucleótidos|nucleotide]] importados · Interior: El [[heterodímero TI|hiv-rt-real]] sintetiza ADNbc lineal degradando el ARN; la [[Integrasa|hiv-in-real]] ensambla el intasoma · Destino: Empalma [[ADN|dna]] proviral permanente en [[cromosomas|chromosome]] activos del huésped',
      scientific:
        'Vía acoplada de retrotranscripción e integración dentro del núcleo capsídico (~25 nm de lumen interno). La Transcriptasa Inversa p66/p51 (PDB 1RTD; tasa de error ~1–3×10⁻⁵/nt, sin exonucleasa 3′→5′) ejecuta síntesis de hebra negativa cebada por tRNA^Lys3, hidrólisis por RNasa H, dos saltos de transferencia entre el ARN diploide de 9,7 kb y síntesis de ADNbc lineal. La Integrasa tetramérica (PDB 1EX4; intasoma PDB 3OS0) realiza el corte 3′ del dinucleótido CA y la transesterificación escalonada de 5 pb en cromatina activa reclutada por LEDGF/p75.'
    }
  },
  'real-hiv-entry': {
    en: {
      simple:
        'HIV unlocks immune T-cells using a strict two-step handshake—grabbing one surface receptor to reveal a hidden second latch—before fusing membranes and rewriting the cell’s DNA.',
      story:
        'A lone [[Env spike|hiv-env-real]] drifting against a helper T-cell refuses to fire its harpoon prematurely—doing so in open bloodstream would expose its machinery to patrolling antibodies. Instead it runs a two-factor heist on the T-cell’s [[plasma membrane|plasma-membrane]]: first its outer gp120 crown clicks onto CD4, twisting open like a combination safe to pop out a hidden V3 loop that immediately grabs a seven-helix [[CCR5 or CXCR4 coreceptor|gpcr]]. Only when both locks turn together does the inner gp41 stalk snap into a six-helix bundle, fusing the lipid bubbles so [[Reverse Transcriptase|hiv-rt-real]] and [[Integrase|hiv-in-real]] can plant a permanent provirus deep inside.',
      blueprint:
        'Role: Sequential two-receptor T-cell fusion synapse and downstream proviral establishment (~40 nm zone) · From: Mature [[Env gp120/gp41 trimer|hiv-env-real]] contacting a CD4+ T-lymphocyte [[plasma membrane|plasma-membrane]] · Inside: CD4 binding shifts gp120 to engage [[CCR5/CXCR4|gpcr]], triggering gp41 six-helix bundle membrane fusion · To: Delivers capsid core so [[RT|hiv-rt-real]] and [[Integrase|hiv-in-real]] establish chromosomal proviral [[DNA|dna]]',
      scientific:
        '~40 nm viral–T-cell entry synapse. Trimeric gp120 (prefusion PDB 4TVP) binds the D1 domain of host CD4 (PDB 1GC1), inducing bridging-sheet rearrangement and V3-loop exposure to engage seven-transmembrane chemokine coreceptor CCR5 (PDB 6MEO) or CXCR4. Coreceptor binding releases the gp41 N-terminal fusion peptide into the T-cell bilayer; heptad repeats HR1 and HR2 refold into a thermostable six-helix bundle (PDB 1AIK), driving neutral-pH membrane fusion followed by RT-mediated cDNA synthesis (PDB 1RTD) and IN-catalyzed proviral integration (PDB 3OS0).'
    },
    es: {
      simple:
        'El VIH abre los linfocitos T mediante un estricto apretón de manos en dos pasos —sujetando un primer receptor para destapar un segundo pestillo oculto— antes de fundir membranas y reescribir el ADN celular.',
      story:
        'Una solitaria [[espiga Env|hiv-env-real]] frente a un linfocito T colaborador jamás dispara su arpón antes de tiempo: hacerlo en plena sangre descubriría su mecanismo ante los anticuerpos. En cambio, ejecuta una apertura de doble factor sobre la [[membrana plasmática|plasma-membrane]] inmunitaria: primero su corona gp120 encaja en CD4, girando como una caja fuerte para desplegar el bucle oculto V3 y atrapar al instante un [[correceptor CCR5 o CXCR4|gpcr]]. Solo cuando giran ambas llaves a la vez, el tallo gp41 se pliega en un haz de seis hélices que funde ambas burbujas, permitiendo que la [[Transcriptasa Inversa|hiv-rt-real]] y la [[Integrasa|hiv-in-real]] siembren un provirus perpetuo.',
      blueprint:
        'Rol: Sinapsis secuencial de fusión de doble receptor en células T e implantación proviral (~40 nm) · Origen: [[Trímero Env gp120/gp41|hiv-env-real]] en contacto con la [[membrana plasmática|plasma-membrane]] de un linfocito T CD4+ · Interior: La unión a CD4 reconfigura gp120 para fijar [[CCR5/CXCR4|gpcr]], disparando el haz de seis hélices de gp41 · Destino: Introduce la cápside para que la [[TI|hiv-rt-real]] y la [[Integrasa|hiv-in-real]] integren [[ADN|dna]] proviral',
      scientific:
        'Sinapsis de entrada virus–linfocito T de ~40 nm. El trímero gp120 (prefusión PDB 4TVP) se une al dominio D1 de CD4 humano (PDB 1GC1), induciendo la lámina puente y exponiendo el bucle V3 hacia el correceptor de quimiocinas GPCR CCR5 (PDB 6MEO) o CXCR4. Esto libera el péptido de fusión N-terminal de gp41 en la bicapa celular; las repeticiones HR1 y HR2 colapsan en un haz termoestable de seis hélices (PDB 1AIK), fusionando membranas a pH neutro antes de la retrotranscripción (PDB 1RTD) e integración proviral (PDB 3OS0).'
    }
  },
  coronavirus: {
    en: {
      simple:
        'Seen in clean architectural cutaway, the coronavirus is a stolen fat-membrane sphere crowned with club-shaped spikes and stuffed with a coiled 30,000-letter RNA ribbon.',
      story:
        'Stripped down to its pure heist architecture, this 120-nanometer courier is a masterwork of stolen parts and compact storage. Its outer phospholipid shell—pilfered from a host cell’s internal ER–Golgi membranes—is studded with club-headed [[Spike trimers|cov-spike-real]] waiting to spot [[ACE2|ace2-real]], stitched tight by dimeric M girders, and vented by tiny five-sided [[E ion channels|cov-e-real]]. Curled safely inside that oily bubble rides the largest RNA genome known in any virus, wrapped around [[Nucleocapsid oligomers|cov-n-real]] so it can hit the ground running and summon [[RdRp replicases|cov-rdrp-real]] the instant the bubble bursts open.',
      blueprint:
        'Role: Schematic betacoronavirus virion cutaway (~120 nm) illustrating envelope and luminal vRNP organization · From: Intracellular budding at the host ER–Golgi intermediate compartment ([[Golgi|golgi]]) · Inside: [[Phospholipid|phospholipid]] bilayer with [[Spike|cov-spike-real]], M, and [[E viroporin|cov-e-real]] surrounding [[N-packaged|cov-n-real]] 29.9 kb [[(+)ssRNA|rna]] · To: Binds [[ACE2|ace2-real]] on airway cells to launch [[RdRp|cov-rdrp-real]] replication',
      scientific:
        'Architectural organization of Lineage B Betacoronavirus SARS-CoV-2 (~100–120 nm). Enveloped virion comprises four structural proteins: homotrimeric class I fusion glycoprotein S (1,273 aa/protomer, PDB 6VXX/6VSB), triple-spanning dimeric membrane protein M (222 aa, PDB 8CTK), pentameric viroporin E (75 aa, PDB 5X29), and RNA-binding phosphoprotein N (419 aa, PDB 6VYO) condensing the 29,903 nt (+)ssRNA genome (~10 ORFs encoding 16 nonstructural proteins including nsp12 RdRp, PDB 6M71).'
    },
    es: {
      simple:
        'Visto en un corte arquitectónico limpio, el coronavirus es una esfera de grasa robada coronada por espigas en forma de maza y rellena con una cinta enrollada de ARN de 30.000 letras.',
      story:
        'Reducido a su pura arquitectura de asalto, este mensajero de 120 nanómetros combina piezas robadas con un embalaje impecable. Su cubierta de fosfolípidos —sustraída de las membranas internas RE–Golgi de una célula anterior— luce mazas de [[Espiga|cov-spike-real]] listas para cazar receptores [[ACE2|ace2-real]], reforzada por vigas diméricas M y diminutos [[canales iónicos E|cov-e-real]] de cinco lados. Acurrucado dentro de esa burbuja viaja el mayor genoma de ARN conocido en el mundo viral, devanado sobre [[oligómeros de Nucleocápside|cov-n-real]] para entrar en acción al instante y convocar [[replicasas RdRp|cov-rdrp-real]] apenas se abra la puerta.',
      blueprint:
        'Rol: Corte esquemático del virión de betacoronavirus (~120 nm) mostrando envoltura y organización vRNP · Origen: Gemación intracelular en el compartimento intermedio RE–[[Golgi|golgi]] · Interior: Bicapa de [[fosfolípidos|phospholipid]] con [[Espiga|cov-spike-real]], M y [[viroporina E|cov-e-real]] rodeando [[ARNmc(+)|rna]] de 29,9 kb empaquetado con [[proteína N|cov-n-real]] · Destino: Se une a [[ACE2|ace2-real]] respiratorio para activar la [[RdRp|cov-rdrp-real]]',
      scientific:
        'Organización arquitectónica del Betacoronavirus de linaje B SARS-CoV-2 (~100–120 nm). El virión envuelto consta de cuatro proteínas estructurales: glicoproteína homotrimérica de fusión de clase I S (1.273 aa/protómero, PDB 6VXX/6VSB), glicoproteína dimérica de triple paso transmembrana M (222 aa, PDB 8CTK), viroporina pentamérica E (75 aa, PDB 5X29) y fosfoproteína de unión a ARN N (419 aa, PDB 6VYO) que condensa el ARNmc(+) de 29.903 nt (~10 ORFs que codifican 16 nsp, incluida la RdRp nsp12, PDB 6M71).'
    }
  },
  hiv: {
    en: {
      simple:
        'Cut open to show its layered blueprint, HIV-1 hides a cone-shaped protein safe—packed with twin RNA strands and two molecular enzymes—inside a stolen cell-membrane cloak.',
      story:
        'Peel back HIV-1’s stolen outer lipid cloak and you find a Russian-doll infiltration kit engineered for immune cells. Sparse, sugar-frosted [[Env spikes|hiv-env-real]] poke outside while a lining of [[p17 Matrix trimers|hiv-ma-real]] braces the inner wall like rivets inside a submarine hull. Floating at the center sits the unmistakable fullerene stealth cone—tiled from [[p24 hexamers|hiv-ca-hex-real]] and twelve corner pentamers—carrying two backup copies of viral RNA alongside [[Reverse Transcriptase|hiv-rt-real]] and [[Integrase|hiv-in-real]], everything required to turn a defender T-cell into a lifelong viral sleeper agent.',
      blueprint:
        'Role: Schematic mature HIV-1 virion cutaway (~120 nm) showing concentric envelope, matrix, and fullerene core layers · From: Protease-matured Gag-Pol virion budded from a T-cell [[plasma membrane|plasma-membrane]] · Inside: [[Env spikes|hiv-env-real]], [[p17 MA|hiv-ma-real]] shell, [[p24 hexamer|hiv-ca-hex-real]]/[[pentamer|hiv-ca-pent-real]] cone, diploid [[(+)ssRNA|rna]], [[RT|hiv-rt-real]], and [[Integrase|hiv-in-real]] · To: Infects CD4+ T-cells and integrates into host [[DNA|dna]]',
      scientific:
        'Architectural organization of mature Human Immunodeficiency Virus type 1 (Genus Lentivirus, Family Retroviridae, ~120 nm). Outer host-raft bilayer anchors ~14 gp120/gp41 Env trimers (PDB 4TVP) over a ~2,500-copy myristoylated p17 MA shell (PDB 1HIW). Proteolytic cleavage of Gag/Gag-Pol by viral PR (PDB 1HHP) condenses ~1,300 p24 CA subunits into a fullerene cone (~216 hexamers PDB 3H4E + 12 pentamers PDB 3P05; whole cone PDB 3J3Q) enclosing dimeric 9.7 kb (+)ssRNA, NCp7, p66/p51 RT (PDB 1RTD), and p32 IN (PDB 1EX4).'
    },
    es: {
      simple:
        'Abierto en corte para mostrar sus capas, el VIH-1 esconde una caja fuerte cónica —cargada con dos hebras de ARN y dos enzimas clave— bajo un manto robado de membrana celular.',
      story:
        'Si retiras el manto lipídico robado del VIH-1 descubrirás un equipo de infiltración en capas digno de una muñeca rusa. Unas pocas [[espigas Env|hiv-env-real]] glaseadas de azúcar asoman al exterior mientras un forro de [[trímeros de Matriz p17|hiv-ma-real]] remacha la pared interna como el casco de un submarino. En pleno centro flota el inconfundible cono furtivo de fullereno —ensamblado con [[hexámeros p24|hiv-ca-hex-real]] y doce pentámeros en los vértices— custodiando dos copias de respaldo de ARN junto a la [[Transcriptasa Inversa|hiv-rt-real]] y la [[Integrasa|hiv-in-real]], listas para convertir un linfocito defensor en agente durmiente de por vida.',
      blueprint:
        'Rol: Corte esquemático del virión maduro de VIH-1 (~120 nm) mostrando envoltura, matriz y cono de fullereno · Origen: Virión Gag-Pol madurado por proteasa tras gemar de la [[membrana plasmática|plasma-membrane]] de un linfocito T · Interior: [[Espigas Env|hiv-env-real]], corteza [[MA p17|hiv-ma-real]], cono de [[hexámeros|hiv-ca-hex-real]]/[[pentámeros p24|hiv-ca-pent-real]], [[ARNmc(+)|rna]] diploide, [[TI|hiv-rt-real]] e [[Integrasa|hiv-in-real]] · Destino: Infecta células T CD4+ e integra su genoma en el [[ADN|dna]] huésped',
      scientific:
        'Organización arquitectónica del Virus de la Inmunodeficiencia Humana tipo 1 maduro (Género Lentivirus, Familia Retroviridae, ~120 nm). La bicapa externa rica en balsas lipídicas ancla ~14 trímeros Env gp120/gp41 (PDB 4TVP) sobre una corteza de ~2.500 copias de Matriz p17 miristoilada (PDB 1HIW). La maduración proteolítica de Gag/Gag-Pol por PR viral (PDB 1HHP) condensa ~1.300 subunidades p24 CA en un cono de fullereno (~216 hexámeros PDB 3H4E + 12 pentámeros PDB 3P05; cono completo PDB 3J3Q) con ARNmc(+) dimérico de 9,7 kb, NCp7, TI p66/p51 (PDB 1RTD) e IN p32 (PDB 1EX4).'
    }
  },
  'cov-spike-real': {
    en: {
      simple:
        'Built from three identical protein chains braided together, the Spike club wears a thick coat of stolen sugars while hiding a coiled spring that harpoons human airway cells.',
      story:
        'Forged inside the host’s [[rough ER|rough-er]] and frosted with sixty-six sugar chains in the [[Golgi|golgi]], this three-part [[polypeptide|polypeptide]] club is both velvet disguise and spring-loaded harpoon. While its bulbous S1 crown plays peekaboo—flipping one receptor-binding finger up to test for human [[ACE2|ace2-real]] while keeping the other two tucked away from antibodies—its coiled S2 stalk waits under hair-trigger tension. One snip from host TMPRSS2 scissors at the S2′ latch and its [[alpha-helical|alpha-helix]] coils snap shut like a mousetrap, winching viral and airway membranes into a single fused opening.',
      blueprint:
        'Role: Homotrimeric class I viral fusion glycoprotein (~16 × 13 nm) mediating receptor attachment and bilayer merger · From: Cotranslational synthesis on [[rough ER|rough-er]] and furin cleavage/N-glycosylation in [[Golgi|golgi]] · Inside: Three 1,273-aa [[polypeptide|polypeptide]] chains with S1 RBD heads and [[alpha-helical|alpha-helix]] S2 fusion stalks · To: Engages [[ACE2|ace2-real]] and fuses viral envelope with host [[plasma membrane|plasma-membrane]]',
      scientific:
        'Cryo-EM atomic structure of prefusion SARS-CoV-2 S homotrimer (~16 nm × 13 nm; closed state PDB 6VXX at 2.8 Å, 1-RBD-up state PDB 6VSB at 3.5 Å; ~420–540 kDa glycosylated). Each 1,273-residue protomer bears 22 N-linked glycosylation sequons (66/trimer) plus O-glycans, divided at the furin-cleaved polybasic S1/S2 site (682-RRAR-685) into S1 (NTD, hinge-like RBD residues 319–541) and S2 (fusion peptide, HR1, central α-helix, connector, HR2, transmembrane anchor).'
    },
    es: {
      simple:
        'Formada por tres cadenas proteicas idénticas trenzadas entre sí, la maza de la Espiga viste un espeso abrigo de azúcares robados mientras esconde un resorte que arponea las células respiratorias.',
      story:
        'Forjada en el [[retículo endoplasmático rugoso|rough-er]] y glaseada con sesenta y seis cadenas de azúcar en el [[Golgi|golgi]], esta maza de tres [[polipéptidos|polypeptide]] es a la vez disfraz de terciopelo y arpón comprimido. Mientras su corona bulbosa S1 juega al escondite —levantando un solo dedo buscador para tantear receptores [[ACE2|ace2-real]] mientras guarda los otros dos lejos de los anticuerpos—, su tallo S2 aguarda bajo tensión máxima. Basta un tijeretazo celular en el seguro S2′ para que sus resortes de [[hélice alfa|alpha-helix]] salten como una trampa y fundan ambas membranas en un único portal.',
      blueprint:
        'Rol: Glicoproteína homotrimérica de fusión viral de clase I (~16 × 13 nm) que media adhesión y fusión de bicapas · Origen: Síntesis en el [[RE rugoso|rough-er]] y corte por furina/N-glicosilación en el [[Golgi|golgi]] · Interior: Tres cadenas [[polipeptídicas|polypeptide]] de 1.273 aa con cabezales S1 RBD y tallos S2 en [[hélice alfa|alpha-helix]] · Destino: Se une a [[ACE2|ace2-real]] y funde la envoltura con la [[membrana plasmática|plasma-membrane]] huésped',
      scientific:
        'Estructura atómica crio-EM del homotrímero S de SARS-CoV-2 en prefusión (~16 nm × 13 nm; estado cerrado PDB 6VXX a 2,8 Å, estado 1-RBD-up PDB 6VSB a 3,5 Å; ~420–540 kDa glicosilado). Cada protómero de 1.273 residuos porta 22 sitios de N-glicosilación (66/trímero) más O-glicanos, dividido en el sitio polibásico S1/S2 escindido por furina (682-RRAR-685) en S1 (NTD y RBD bisagra residuos 319–541) y S2 (péptido de fusión, HR1, hélice α central, HR2 y ancla transmembrana).'
    }
  },
  'cov-e-real': {
    en: {
      simple:
        'Five tiny protein helices bundle together like barrel staves to punch a microscopic ion leak into the host cell’s internal membranes, helping new viruses pinch off cleanly.',
      story:
        'Before a freshly assembled [[coronavirus|real-coronavirus]] can sneak out of its host cell intact, it has to solve a deadly chemical trap: the cell’s [[Golgi|golgi]] shipping lanes are normally acidic enough to trip [[Spike harpoons|cov-spike-real]] prematurely while still indoors. So five short hydrophobic [[alpha-helices|alpha-helix]] team up into this miniature pentamer tunnel, bleeding protons and calcium out of the secretory compartments to neutralize the acid bath and bend the lipid membrane until brand-new virions pinch free without a scratch.',
      blueprint:
        'Role: Pentameric transmembrane viroporin cation channel (~5.5 nm across) regulating luminal pH and virion scission · From: Subgenomic mRNA translation into host [[rough ER|rough-er]] and ERGIC/[[Golgi|golgi]] bilayers · Inside: Five 75-aa [[alpha-helical|alpha-helix]] transmembrane staves surrounding a ~2–4 Å hydrophobic/polar pore · To: De-acidifies secretory [[vesicles|vesicle]] to protect [[Spike|cov-spike-real]] during virion budding',
      scientific:
        'Solid-state NMR structure of the pentameric SARS-CoV-2 Envelope (E) transmembrane viroporin (PDB 5X29 / 7K3G; ~5.5 nm diameter, 75 aa/monomer, ~8.4 kDa subunit). Five tilted transmembrane α-helices (residues 8–38) assemble a C5-symmetric homopentameric bundle lined by Leu/Val constriction gates and polar Asn15/Glu8 rings, conducting Na⁺, K⁺, Ca²⁺, and H⁺ across ERGIC membranes to dissipate luminal acidity, trigger NLRP3 inflammasome Ca²⁺ flux, and induce membrane scission curvature.'
    },
    es: {
      simple:
        'Cinco pequeñas hélices proteicas se agrupan como las duelas de un barril para abrir un poro microscópico en las membranas internas de la célula, ayudando a que los nuevos virus broten intactos.',
      story:
        'Antes de que un [[coronavirus|real-coronavirus]] recién ensamblado pueda escapar de la célula sin daños, debe desactivar una trampa química: los pasillos de salida del [[Golgi|golgi]] son tan ácidos que dispararían los arpones de la [[Espiga|cov-spike-real]] antes de salir a la calle. Por eso cinco cortas [[hélices alfa|alpha-helix]] hidrofóbicas se reúnen formando este diminuto túnel de cinco lados, dejando escapar protones y calcio para neutralizar la acidez del compartimento y curvar la membrana hasta que los nuevos viriones se desprenden impecables.',
      blueprint:
        'Rol: Canal catiónico transmembrana pentamérico de viroporina (~5,5 nm) que regula el pH luminal y la escisión viral · Origen: Traducción de ARNm subgenómico en bicapas del [[RE rugoso|rough-er]] y ERGIC/[[Golgi|golgi]] · Interior: Cinco duelas transmembrana de 75 aa en [[hélice alfa|alpha-helix]] rodeando un poro de ~2–4 Å · Destino: Desacidifica [[vesículas|vesicle]] secretoras para proteger la [[Espiga|cov-spike-real]] durante la gemación',
      scientific:
        'Estructura por RMN en estado sólido de la viroporina transmembrana pentamérica de Envoltura (E) de SARS-CoV-2 (PDB 5X29 / 7K3G; ~5,5 nm de diámetro, 75 aa/monómero, ~8,4 kDa por subunidad). Cinco hélices α transmembrana inclinadas (residuos 8–38) forman un haz homopentamérico de simetría C5 revestido por compuertas hidrofóbicas Leu/Val y anillos polares Asn15/Glu8, conduciendo Na⁺, K⁺, Ca²⁺ y H⁺ en membranas ERGIC para disipar gradientes protónicos e inducir curvatura de gemación.'
    }
  },
  'cov-n-real': {
    en: {
      simple:
        'Shaped like positively charged molecular mittens, Nucleocapsid proteins catch the negatively charged viral RNA ribbon and wind it into tidy, protective spools.',
      story:
        'Left naked inside a human [[cytosol|cytosol]], a 30,000-letter [[RNA scroll|rna]] would snap like wet tissue paper or set off antiviral sensors before the heist even warmed up. Enter the Nucleocapsid spool: armed with positively charged β-hairpin fingers made of precisely folded [[polypeptide|polypeptide]] chains, oligomers of N protein scoop up the negatively charged RNA backbone and condense it into liquid-like droplets. Better still, their trailing tails shake hands with Membrane proteins at the [[Golgi|golgi]] border so only genuine viral scrolls—never random cellular mail—get packed into departing virions.',
      blueprint:
        'Role: Positively charged RNA-binding oligomer (~7.5 nm) condensing genomic RNA into helical vRNP beads · From: High-abundance cytosolic translation on host [[ribosomes|ribosome]] · Inside: N-terminal β-hairpin RNA-binding palms and C-terminal dimerization [[polypeptide|polypeptide]] domains · To: Cradles 29.9 kb [[(+)ssRNA|rna]] inside the [[vRNP core|real-cov-rnp]] and docks onto M tails for budding',
      scientific:
        'X-ray crystal structure of the SARS-CoV-2 Nucleocapsid (N) N-terminal RNA-binding domain oligomer (PDB 6VYO at 1.7 Å; ~7.5 nm across; full monomer 419 aa, ~45.6 kDa). Each NTD (residues 48–175) folds into a right-handed five-stranded antiparallel β-sheet core with an extended basic β-hairpin finger (Arg92/Arg107/Lys102) that electrostatically clamps ssRNA/dsRNA phosphates; linked via a phosphorylated SR-rich disordered region to a domain-swapped C-terminal dimerization module (PDB 6WZO) driving liquid–liquid phase separation.'
    },
    es: {
      simple:
        'Con la forma de manoplas moleculares cargadas positivamente, las proteínas de Nucleocápside atrapan la cinta negativa de ARN viral y la enrollan en carretes ordenados y seguros.',
      story:
        'Suelto y desnudo en el [[citosol|cytosol]] humano, un [[pergamino de ARN|rna]] de 30.000 letras se rompería al menor tirón o activaría las alarmas antivirales antes de empezar el golpe. Ahí entran los carretes de Nucleocápside: con dedos en horquilla cargados positivamente y tallados en cadenas de [[polipéptidos|polypeptide]], estos oligómeros abrazan el esqueleto negativo del ARN y lo condensan en gotas flexibles. Además, sus colas estrechan la mano de las proteínas de membrana cerca del [[Golgi|golgi]] para garantizar que solo los planos virales auténticos suban a bordo de los nuevos viriones.',
      blueprint:
        'Rol: Oligómero electropositivo de unión a ARN (~7,5 nm) que condensa el genoma en cuentas vRNP · Origen: Traducción masiva de ARNm subgenómico en [[ribosomas|ribosome]] citosólicos · Interior: Palmas N-terminales de horquilla β y dominios [[polipeptídicos|polypeptide]] C-terminales de dimerización · Destino: Protege el [[ARNmc(+)|rna]] de 29,9 kb en el [[núcleo vRNP|real-cov-rnp]] y se acopla a dímeros M',
      scientific:
        'Estructura cristalográfica de rayos X del oligómero del dominio N-terminal de unión a ARN de la Nucleocápside (N) de SARS-CoV-2 (PDB 6VYO a 1,7 Å; ~7,5 nm; monómero completo de 419 aa, ~45,6 kDa). Cada NTD (residuos 48–175) adopta un núcleo de lámina β antiparalela de cinco hebras con una horquilla β básica extendida (Arg92/Arg107/Lys102) que fija electrostáticamente el esqueleto fosfato del ARN, unido mediante un enlazador desordenado rico en SR al dominio C-terminal de dimerización (PDB 6WZO) promotor de separación de fases líquido-líquido.'
    }
  },
  'cov-rdrp-real': {
    en: {
      simple:
        'Shaped like a cupped right hand flanked by two long stabilizer poles, this viral copying machine reads the 30,000-letter RNA strand and prints thousands of fresh copies.',
      story:
        'Human cells own plenty of DNA-reading polymerases, yet none of them will copy a long [[RNA|rna]] scroll into new RNA—so the coronavirus packs instructions to build its own custom printing press. Once host [[ribosomes|ribosome]] translate the opening polyprotein, catalytic nsp12 folds into a cupped right hand while two rod-like [[alpha-helical|alpha-helix]] nsp8 partners clamp on like balancing poles on a tightrope walker. Gliding along the 30-kilobase template inside sheltered [[ER vesicles|rough-er]], it gulps host [[nucleotides|nucleotide]] to print both full viral genomes and short sub-recipes at blistering speed.',
      blueprint:
        'Role: Core viral RNA-dependent RNA polymerase holoenzyme (~13 nm tall) catalyzing genome replication and transcription · From: Autoproteolytic cleavage of ORF1ab [[polypeptides|polypeptide]] by viral Mpro (nsp5) · Inside: Cupped nsp12 catalytic subunit braced by nsp7 and twin [[alpha-helical|alpha-helix]] nsp8 sliding poles · To: Polymerizes host [[nucleotides|nucleotide]] into genomic and subgenomic [[RNAs|rna]]',
      scientific:
        'Cryo-EM structure of the SARS-CoV-2 RdRp holoenzyme (nsp12–nsp7–2×nsp8, ~13 nm tall, ~160 kDa; apo PDB 6M71 at 2.9 Å, template-primer RNA complex PDB 7BV2 at 2.5 Å). Catalytic nsp12 (932 aa) combines an N-terminal nidovirus RdRp-associated nucleotidyltransferase (NiRAN) domain with a canonical fingers–palm–thumb polymerase core coordinating two catalytic Mg²⁺ ions at motif C (Ser759–Asp760–Asp761); heterodimeric nsp7–nsp8 and a second nsp8 monomer extend ~100 Å positively charged α-helical "sliding poles" for high processivity.'
    },
    es: {
      simple:
        'Con forma de mano derecha ahuecada y flanqueada por dos largos bastones estabilizadores, esta máquina copiadora viral lee el hilo de 30.000 letras de ARN e imprime miles de copias nuevas.',
      story:
        'Las células humanas poseen muchas polimerasas lectoras de ADN, pero ninguna sabe copiar un largo pergamino de [[ARN|rna]] en más ARN, de modo que el coronavirus trae planos para fabricar su propia imprenta. Cuando los [[ribosomas|ribosome]] traducen la poliproteína inicial, la subunidad nsp12 se pliega como una mano ahuecada mientras dos largas [[hélices alfa|alpha-helix]] de nsp8 se acoplan como las pértigas de un equilibrista. Deslizándose sin caerse por la pista de 30 kilobases dentro de [[vesículas del RE|rough-er]], devora [[nucleótidos|nucleotide]] celulares para imprimir genomas íntegros y recetas cortas a velocidad de vértigo.',
      blueprint:
        'Rol: Holoenzima central ARN polimerasa dependiente de ARN (~13 nm de alto) para replicación y transcripción viral · Origen: Corte autoproteolítico de [[polipéptidos|polypeptide]] ORF1ab por la proteasa viral Mpro (nsp5) · Interior: Subunidad catalítica nsp12 reforzada por nsp7 y dos pértigas deslizantes nsp8 en [[hélice alfa|alpha-helix]] · Destino: Polimeriza [[nucleótidos|nucleotide]] celulares en [[ARN|rna]] genómico y subgenómico',
      scientific:
        'Estructura crio-EM de la holoenzima RdRp de SARS-CoV-2 (nsp12–nsp7–2×nsp8, ~13 nm de alto, ~160 kDa; forma apo PDB 6M71 a 2,9 Å, complejo con ARN molde-cebador PDB 7BV2 a 2,5 Å). La subunidad nsp12 (932 aa) integra un dominio N-terminal nucleotidiltransferasa NiRAN y un núcleo polimerasa dedos–palma–pulgar que coordina dos iones Mg²⁺ catalíticos en el motivo C (Ser759–Asp760–Asp761); el heterodímero nsp7–nsp8 y un segundo monómero nsp8 proyectan extensiones α-helicoidales básicas de ~100 Å que garantizan alta procesividad.'
    }
  },
  'ace2-real': {
    en: {
      simple:
        'Normally a helpful human enzyme that trims blood-pressure hormones on airway and blood-vessel cells, ACE2 has an outer ridge that accidentally fits the coronavirus Spike like a custom keyhole.',
      story:
        'On an ordinary Tuesday, this zinc-powered human enzyme stands quietly on the [[plasma membrane|plasma-membrane]] of nose, lung, and blood-vessel cells, snipping hormone peptides to calm inflammation and lower blood pressure. Unfortunately for us, its exposed N-terminal [[alpha-helix|alpha-helix]] presents a curved molecular ridge that the shapeshifting [[Spike trimer|cov-spike-real]] evolved to grip like a rock climber’s jug hold. By latching onto ACE2, the [[coronavirus|real-coronavirus]] not only unlocks a doorway into the cell—it also sideline-tackles the very protector enzyme that normally shields delicate lung tissue from fluid buildup.',
      blueprint:
        'Role: Host cell-surface zinc metallopeptidase ectodomain (~9.5 nm tall) exploited as the primary SARS-CoV-2 entry receptor · From: Host gene transcription in the [[nucleus|nucleus]] and secretory trafficking to the [[plasma membrane|plasma-membrane]] · Inside: Claw-like peptidase [[polypeptide|polypeptide]] lobes with an exposed N-terminal α1 [[alpha-helix|alpha-helix]] · To: Gripped by the up-state RBD of [[Spike|cov-spike-real]] to position virions for membrane fusion',
      scientific:
        'X-ray crystal structure of the human Angiotensin-Converting Enzyme 2 (ACE2) metallopeptidase ectodomain (PDB 1R42 at 2.2 Å; ~9.5 nm tall; full type I transmembrane protein 805 aa, ~92.5 kDa; dimeric full-length B⁰AT1 complex PDB 6M17). Subdomains I and II enclose a catalytic Zn²⁺-binding HEXXH + E carboxypeptidase cleft (converting angiotensin II to vasodilatory Ang 1–7), while the solvent-exposed N-terminal α1 helix (residues 19–53) and Lys353 β-hairpin form the ~1,700 Å² buried interface bound by SARS-CoV-2 RBD (PDB 6M0J).'
    },
    es: {
      simple:
        'Normalmente una beneficiosa enzima humana que regula la presión arterial en pulmones y vasos sanguíneos, ACE2 posee un borde externo donde la Espiga del coronavirus encaja por accidente como una llave maestra.',
      story:
        'En un día cualquiera, esta enzima humana impulsada por zinc vigila tranquila desde la [[membrana plasmática|plasma-membrane]] de células nasales, pulmonares y vasculares, recortando hormonas para calmar la inflamación y bajar la tensión arterial. Por desgracia, su [[hélice alfa|alpha-helix]] externa presenta una cornisa molecular donde el [[trímero de la Espiga|cov-spike-real]] aprendió a aferrarse como un escalador a una presa perfecta. Al engancharse a ACE2, el [[coronavirus|real-coronavirus]] no solo abre una puerta de entrada: también neutraliza en el acto a la enzima guardiana que protege a los pulmones frente al daño inflamatorio.',
      blueprint:
        'Rol: Ectodominio metalopeptidasa de zinc humano (~9,5 nm de alto) explotado como receptor primario de entrada del SARS-CoV-2 · Origen: Transcripción génica en el [[núcleo|nucleus]] y transporte secretor hasta la [[membrana plasmática|plasma-membrane]] · Interior: Lóbulos [[polipeptídicos|polypeptide]] peptidasa en forma de pinza con una [[hélice alfa|alpha-helix]] α1 N-terminal expuesta · Destino: Sujetado por el dominio RBD de la [[Espiga|cov-spike-real]] para iniciar la fusión de membranas',
      scientific:
        'Estructura cristalográfica de rayos X del ectodominio metalopeptidasa de la Enzima Convertidora de Angiotensina 2 humana (ACE2, PDB 1R42 a 2,2 Å; ~9,5 nm de alto; proteína transmembrana tipo I de 805 aa, ~92,5 kDa; dímero completo con B⁰AT1 PDB 6M17). Los subdominios I y II delimitan una hendidura carboxipeptidasa dependiente de Zn²⁺ (motivo HEXXH + E, que hidroliza angiotensina II en Ang 1–7), mientras que la hélice α1 N-terminal (residuos 19–53) y la horquilla Lys353 conforman la interfaz de ~1.700 Å² reconocida por el RBD viral (PDB 6M0J).'
    }
  },
  'hiv-env-real': {
    en: {
      simple:
        'Smothered under a dense forest of stolen host sugars so the immune system sees "self" instead of "intruder," HIV’s mushroom-shaped Env spike unlocks two T-cell receptors in sequence to fuse membranes.',
      story:
        'Half of this mushroom-shaped spike’s weight isn’t viral protein at all—it’s nearly ninety stolen [[sugar|sugar]] trees grafted on inside the host [[Golgi|golgi]] to form an almost impenetrable glycan invisibility cloak. Only ~14 copies dot an entire [[HIV-1 virion|real-hiv]], spaced wide apart so patrolling antibodies can’t bridge two spikes at once. Yet the instant its outer gp120 cap bumps CD4 on a T-cell [[plasma membrane|plasma-membrane]], the cloak parts, a hidden V3 loop snaps onto a [[chemokine coreceptor|gpcr]], and the coiled gp41 stalk fires a fusion harpoon straight into the immune cell.',
      blueprint:
        'Role: Heavily glycosylated heterotrimeric class I fusion spike (~13 × 12 nm) executing two-step CD4 + coreceptor T-cell entry · From: Furin cleavage of gp160 precursor and dense N-glycosylation inside the host [[Golgi|golgi]] · Inside: Three surface gp120 receptor-binding caps noncovalently atop three [[alpha-helical|alpha-helix]] gp41 fusion stalks · To: Unlocks CD4 and [[CCR5/CXCR4|gpcr]] on the T-cell [[plasma membrane|plasma-membrane]] to deliver the [[capsid cone|real-hiv-cone]]',
      scientific:
        'X-ray/cryo-EM structure of the prefusion closed HIV-1 Env heterotrimer (BG505 SOSIP.664, PDB 4TVP at 3.1 Å / 5FYL; ~13 nm × 12 nm). Synthesized as gp160 and cleaved by host furin into noncovalently associated (gp120)₃(gp41)₃ trimers armored by ~81–90 N-linked oligomannose/complex glycans (~50% molecular mass) and hypervariable V1–V5 loops. Sequential engagement of CD4 and GPCR coreceptor CCR5/CXCR4 triggers gp41 fusion-peptide insertion and HR1/HR2 collapse into a 6-helix bundle (PDB 1AIK).'
    },
    es: {
      simple:
        'Cubierta por un denso bosque de azúcares robados para que nuestras defensas vean «propio» donde hay «intruso», la espiga Env del VIH abre en serie dos cerraduras de los linfocitos T para fundir membranas.',
      story:
        'La mitad del peso de esta espiga en forma de hongo ni siquiera es proteína viral: son casi noventa árboles de [[azúcar|sugar]] injertados en el [[Golgi|golgi]] humano para tejer un manto de invisibilidad casi impenetrable. Apenas unas catorce espigas salpican todo un [[virión de VIH-1|real-hiv]], tan distanciadas que los anticuerpos no alcanzan a sujetar dos a la vez. Pero apenas su sombrero gp120 roza el receptor CD4 en la [[membrana plasmática|plasma-membrane]] de un linfocito T, el manto se abre, el bucle V3 engancha un [[correceptor de quimiocinas|gpcr]] y el tallo gp41 clava su arpón de fusión.',
      blueprint:
        'Rol: Espiga heterotrimérica hiper-glicosilada de fusión de clase I (~13 × 12 nm) para entrada secuencial CD4 + correceptor · Origen: Corte por furina del precursor gp160 y densa N-glicosilación en el [[Golgi|golgi]] · Interior: Tres cabezales superficiales gp120 unidos no covalentemente sobre tres tallos gp41 en [[hélice alfa|alpha-helix]] · Destino: Abre CD4 y [[CCR5/CXCR4|gpcr]] en la [[membrana plasmática|plasma-membrane]] T para infiltrar el [[cono capsídico|real-hiv-cone]]',
      scientific:
        'Estructura cristalográfica/crio-EM del heterotrímero Env de VIH-1 cerrado en prefusión (BG505 SOSIP.664, PDB 4TVP a 3,1 Å / 5FYL; ~13 nm × 12 nm). Sintetizado como gp160 y escindido por furina en trímeros (gp120)₃(gp41)₃ asociados de forma no covalente, blindados por ~81–90 N-glicanos ricos en oligomanosa (~50 % de la masa molecular) y bucles hipervariables V1–V5. La unión secuencial a CD4 y al correceptor CCR5/CXCR4 dispara la inserción del péptido de fusión gp41 y el plegamiento HR1/HR2 en haz de 6 hélices (PDB 1AIK).'
    }
  },
  'hiv-ma-real': {
    en: {
      simple:
        'Equipped with greasy molecular anchors on top, three Matrix proteins lock together under HIV’s stolen fat membrane to steer new viruses to the cell’s exit and snag Env spikes aboard.',
      story:
        'When a newly built [[HIV-1|real-hiv]] getaway car is ready to assemble at a T-cell’s outer border, it needs a coordinator that knows exactly which patch of [[plasma membrane|plasma-membrane]] to steal. This three-cornered Matrix tile snaps open a greasy myristoyl fatty-acid switch whenever it touches special PI(4,5)P₂ [[phospholipids|phospholipid]] enriched in cholesterol rafts, anchoring the viral hull from underneath while corralling the long indoor tails of [[Env spikes|hiv-env-real]] so the departing bubble doesn’t leave its lockpicks behind.',
      blueprint:
        'Role: Myristoylated inner-envelope trimeric scaffold (~6.5 nm across) targeting Gag assembly and recruiting Env spikes · From: N-terminal domain of Gag [[polypeptide|polypeptide]] cleaved during viral protease maturation · Inside: Three globular [[alpha-helical|alpha-helix]] p17 subunits with N-terminal myristoyl anchors and basic PI(4,5)P₂-binding patches · To: Lines the viral [[phospholipid|phospholipid]] bilayer and captures cytoplasmic tails of [[Env gp41|hiv-env-real]]',
      scientific:
        'X-ray crystal structure of the trimeric HIV-1 p17 Matrix (MA) protein (PDB 1HIW at 2.3 Å; ~6.5 nm triangular trimer; 132 aa/monomer, ~17 kDa). Each monomer folds into five α-helices capped by a 3₁₀ helix and a three-stranded mixed β-sheet; binding to plasma-membrane phosphatidylinositol-4,5-bisphosphate [PI(4,5)P₂] triggers an entropic "myristoyl switch" that extrudes the N-terminal C14:0 myristate group into the inner lipid leaflet while organizing hexamer-of-trimers lattices that accommodate gp41 cytoplasmic tails.'
    },
    es: {
      simple:
        'Equipadas con anclas grasientas en su cara superior, tres proteínas de Matriz se ensamblan bajo la membrana robada del VIH para guiar la salida del virus y embarcar las espigas Env.',
      story:
        'Cuando un nuevo [[VIH-1|real-hiv]] está listo para escapar desde la frontera de un linfocito T, necesita un capataz que elija exactamente qué trozo de [[membrana plasmática|plasma-membrane]] robar. Esta loseta triangular de Matriz despliega un interruptor graso de miristoílo en cuanto detecta [[fosfolípidos|phospholipid]] especiales PI(4,5)P₂ en balsas ricas en colesterol, remachando el casco viral desde dentro mientras atrapa las largas colas internas de las [[espigas Env|hiv-env-real]] para que el vehículo de huida no zarpe sin sus ganzúas.',
      blueprint:
        'Rol: Andamio trimérico miristoilado de la cara interna de la envoltura (~6,5 nm) que dirige la gemación y recluta espigas Env · Origen: Extremo N-terminal del [[polipéptido|polypeptide]] Gag liberado durante la maduración por proteasa viral · Interior: Tres subunidades globulares p17 en [[hélice alfa|alpha-helix]] con anclas de miristoílo y parches básicos de unión a PI(4,5)P₂ · Destino: Tapiza la bicapa de [[fosfolípidos|phospholipid]] viral y retiene las colas de [[Env gp41|hiv-env-real]]',
      scientific:
        'Estructura cristalográfica de rayos X del trímero de proteína Matriz p17 (MA) de VIH-1 (PDB 1HIW a 2,3 Å; trímero triangular de ~6,5 nm; 132 aa/monómero, ~17 kDa). Cada subunidad se pliega en cinco hélices α y una lámina β mixta de tres hebras; la interacción con fosfatidilinositol-4,5-bisfosfato [PI(4,5)P₂] de la membrana plasmática activa el «interruptor de miristoílo», insertando el ácido mirístico C14:0 N-terminal en la hoja lipídica interna y formando redes de hexámeros de trímeros que alojan las colas citoplasmáticas de gp41.'
    }
  },
  'hiv-ca-hex-real': {
    en: {
      simple:
        'Six p24 proteins lock into a flat hexagon ring with a positively charged pinhole at the middle—forming the main armor plates of HIV’s stealth cone while sucking DNA building blocks inside.',
      story:
        'Over two hundred of these six-sided plates tile the curved walls of HIV’s [[fullerene stealth cone|real-hiv-cone]], acting simultaneously as riot shield, train ticket, and one-way fuel valve. Outside, flexible pockets grab host transport proteins to surf microtubules and charm [[nuclear pore|nuclear-pore]] guards into waving the whole cone indoors; dead center, a ring of six positively charged arginine side chains forms a microscopic iris that vacuums negatively charged host [[nucleotides|nucleotide]] inside to feed [[Reverse Transcriptase|hiv-rt-real]] without ever cracking the safe open.',
      blueprint:
        'Role: Planar six-subunit capsid building tile (~9.5 nm across) forming the curved body and dNTP-import pores of the HIV-1 cone · From: Viral protease cleavage of Gag releasing 231-aa p24 CA subunits · Inside: Six N-terminal [[alpha-helical|alpha-helix]] rings framing a central Arg18 pore, linked outwardly by C-terminal dimerization domains · To: Pairs with [[CA pentamers|hiv-ca-pent-real]] to shield [[RT|hiv-rt-real]] while importing cytosolic [[nucleotides|nucleotide]]',
      scientific:
        'X-ray crystal structure of the planar HIV-1 p24 Capsid (CA) hexamer (PDB 3H4E at 1.9 Å / native PDB 4XFX; ~9.5 nm diameter; 231 aa/monomer, ~24 kDa). Six N-terminal domains (helices α1–α7) pack into a rigid inner ring around an electropositive Arg18/Lys25 ring stabilized by host inositol hexakisphosphate (IP6) and gated by an N-terminal β-hairpin iris that conducts dNTPs (~10³ s⁻¹). Flexible C-terminal domains (α8–α11) homodimerize across two-fold axes to generate variable curvature across the ~216-hexamer cone (PDB 3J3Q).'
    },
    es: {
      simple:
        'Seis proteínas p24 encajan en un anillo hexagonal plano con un diminuto poro positivo en el centro: son las placas principales del cono furtivo del VIH y aspiran ladrillos de ADN hacia su interior.',
      story:
        'Más de doscientas de estas placas de seis lados revisten las paredes curvas del [[cono furtivo de fullereno|real-hiv-cone]] del VIH, actuando a la vez como escudo blindado, salvoconducto y válvula de combustible. Por fuera, sus bolsillos enganchan proteínas de transporte celular para deslizarse hasta el [[poro nuclear|nuclear-pore]] y cruzarlo sin levantar sospechas; justo en el centro, un anillo de seis argininas positivas abre un iris microscópico que aspira [[nucleótidos|nucleotide]] negativos de la célula para alimentar a la [[Transcriptasa Inversa|hiv-rt-real]] sin entreabrir jamás la caja fuerte.',
      blueprint:
        'Rol: Loseta hexamérica plana de cápside (~9,5 nm) que forma el cuerpo curvo y los poros importadores de dNTP del cono viral · Origen: Corte proteolítico de Gag que libera subunidades p24 CA de 231 aa · Interior: Anillo interno de seis dominios N-terminales en [[hélice alfa|alpha-helix]] con poro central Arg18 y dominios C-terminales de enlace · Destino: Se combina con [[pentámeros CA|hiv-ca-pent-real]] para blindar la [[TI|hiv-rt-real]] mientras importa [[nucleótidos|nucleotide]]',
      scientific:
        'Estructura cristalográfica de rayos X del hexámero plano de Cápside p24 (CA) de VIH-1 (PDB 3H4E a 1,9 Å / forma nativa PDB 4XFX; ~9,5 nm de diámetro; 231 aa/monómero, ~24 kDa). Seis dominios N-terminales (hélices α1–α7) conforman un anillo interno rígido en torno a un poro electropositivo Arg18/Lys25 estabilizado por mio-inositol hexakisfosfato celular (IP6) y regulado por un iris de horquilla β N-terminal que conduce dNTPs. Los dominios C-terminales flexibles (α8–α11) dimerizan entre ejes binarios para dar curvatura continua a los ~216 hexámeros del cono (PDB 3J3Q).'
    }
  },
  'hiv-ca-pent-real': {
    en: {
      simple:
        'Because flat hexagons alone can never close into a sealed container, HIV places exactly twelve of these five-sided corner pieces—five at the narrow tip and seven at the wide cap—to lock its cone shut.',
      story:
        'Tile a floor with pure [[six-sided hexamers|hiv-ca-hex-real]] and you can roll it into an open pipe, yet geometry forbids you from ever sealing both ends shut—a law proved centuries ago by Leonhard Euler and exploited ruthlessly by HIV-1. By swapping just twelve rings into tighter five-sided pentamers—clustering five up front to sharpen a narrow nose that wedges neatly into a [[nuclear pore|nuclear-pore]], and spacing seven across the wide rear dome—the [[fullerene stealth cone|real-hiv-cone]] snaps completely airtight around its [[Reverse Transcriptase|hiv-rt-real]] cargo.',
      blueprint:
        'Role: Five-fold vertex declination cap (~8.5 nm across) required topologically to close the hexagonal fullerene cone · From: Alternative quasi-equivalent oligomerization of p24 CA [[alpha-helical|alpha-helix]] subunits · Inside: Five tightly packed N-terminal CA domains creating sharp 5-fold polyhedral curvature · To: Seals the narrow tip (5 copies) and wide dome (7 copies) of the [[HIV-1 cone|real-hiv-cone]] alongside ~216 [[CA hexamers|hiv-ca-hex-real]]',
      scientific:
        'X-ray crystal structure of the HIV-1 p24 Capsid (CA) vertex pentamer (PDB 3P05 at 2.5 Å / cryo-ET in situ PDB 5MCY; ~8.5 nm diameter). Five 231-aa CA protomers adopt quasi-equivalent NTD–NTD and NTD–CTD packing angles driven by an electrostatically tuned Arg18/IP6 central ring and TVGG motif switch (residues 58–61). Per Euler’s polyhedral formula (V − E + F = 2), exactly 12 pentameric disclinations (5 at the acute pole, 7 at the obtuse pole) close ~216 hexamers into the asymmetric fullerene cone (PDB 3J3Q).'
    },
    es: {
      simple:
        'Como los hexágonos planos por sí solos jamás pueden cerrarse en una cápsula sellada, el VIH coloca exactamente doce de estas piezas de cinco lados —cinco en la punta estrecha y siete en la cúpula ancha— para cerrar su bóveda.',
      story:
        'Si intentas cubrir una superficie solo con [[hexágonos de seis lados|hiv-ca-hex-real]], podrás enrollarlos en un tubo abierto, pero la geometría prohíbe cerrar ambos extremos: una ley demostrada hace siglos por Euler que el VIH-1 aplica con precisión quirúrgica. Al sustituir apenas doce piezas por pentámeros más cerrados de cinco lados —cinco delante para afilar una proa capaz de encajar en un [[poro nuclear|nuclear-pore]] y siete detrás para abovedar la popa—, el [[cono furtivo de fullereno|real-hiv-cone]] queda herméticamente sellado alrededor de su [[Transcriptasa Inversa|hiv-rt-real]].',
      blueprint:
        'Rol: Vértice pentagonal de declinación (~8,5 nm) exigido topológicamente para cerrar el cono hexagonal de fullereno · Origen: Oligomerización cuasi-equivalente alternativa de subunidades p24 CA en [[hélice alfa|alpha-helix]] · Interior: Cinco dominios N-terminales CA compactados que imprimen curvatura poliédrica aguda · Destino: Sella el ápice estrecho (5 copias) y el domo ancho (7 copias) del [[cono de VIH-1|real-hiv-cone]] junto a ~216 [[hexámeros CA|hiv-ca-hex-real]]',
      scientific:
        'Estructura cristalográfica de rayos X del pentámero de vértice de Cápside p24 (CA) de VIH-1 (PDB 3P05 a 2,5 Å / crio-ET in situ PDB 5MCY; ~8,5 nm de diámetro). Cinco protómeros CA de 231 aa adoptan ángulos de empaquetamiento cuasi-equivalentes NTD–NTD y NTD–CTD regulados por la coordinación central Arg18/IP6 y el interruptor conformacional TVGG (residuos 58–61). Según el teorema poliédrico de Euler (V − A + C = 2), exactamente 12 disclinaciones pentaméricas (5 en el polo agudo y 7 en el obtuso) cierran ~216 hexámeros en el cono asimétrico (PDB 3J3Q).'
    }
  },
  'hiv-rt-real': {
    en: {
      simple:
        'Built from two uneven twin subunits shaped like a molecular hand and clamp, Reverse Transcriptase reads fragile viral RNA and writes a durable double-stranded DNA copy—with zero spell-checking.',
      story:
        'Every human cell assumes genetic traffic flows one way—from [[DNA|dna]] to [[RNA|rna]]—until this lopsided two-subunit forger goes to work inside the [[stealth cone|real-hiv-cone]]. Its larger p66 subunit grips the viral RNA strand like a right hand writing minus-strand DNA from stolen host [[nucleotides|nucleotide]], while a built-in RNase H paper-shredder at its wrist chews away the RNA original and a trimmed p51 partner braces the clamp. Because it completely lacks a spell-checker, roughly one letter per copy slips in wrong, spawning a swarm of mutant disguises that help HIV outrun drugs and antibodies.',
      blueprint:
        'Role: Asymmetric heterodimeric RNA/DNA-dependent DNA polymerase and RNase H (~11 nm across) · From: Viral protease processing of the Gag-Pol polyprotein inside maturing virions · Inside: Catalytic 560-aa p66 subunit (fingers, palm, thumb, connection, RNase H) braced by structural 440-aa p51 clamped around [[DNA|dna]]/[[RNA|rna]] · To: Converts diploid viral RNA into linear dsDNA ready for [[Integrase|hiv-in-real]]',
      scientific:
        'X-ray crystal structure of the catalytic ternary complex of HIV-1 Reverse Transcriptase covalently trapped with template–primer dsDNA and incoming dTTP (PDB 1RTD at 3.2 Å; ~11 nm across, ~117 kDa heterodimer). Comprises a 560-aa p66 subunit containing both the Mg²⁺-dependent YMDD (Tyr183–Met184–Asp185–Asp186) polymerase palm active site and C-terminal DEDD RNase H domain (~18 bp downstream), paired with a proteolytically truncated 440-aa p51 structural scaffold; lacks 3′→5′ proofreading (~3×10⁻⁵ substitutions/base/cycle).'
    },
    es: {
      simple:
        'Formada por dos subunidades desiguales que actúan como mano escritora y mordaza de sujeción, la Transcriptasa Inversa lee el frágil ARN viral y escribe una copia resistente de ADN sin revisor ortográfico.',
      story:
        'Toda célula humana da por sentado que la información fluye en un solo sentido —de [[ADN|dna]] a [[ARN|rna]]— hasta que este falsificador asimétrico empieza a trabajar dentro del [[cono furtivo|real-hiv-cone]]. Su subunidad mayor p66 sujeta la hebra de ARN como una mano derecha que escribe ADN con [[nucleótidos|nucleotide]] robados, mientras una trituradora RNasa H en su muñeca destruye el molde original y su compañera recortada p51 afianza la pinza. Al carecer por completo de corrector ortográfico, introduce un error casi en cada copia, generando un enjambre de mutantes que ayuda al VIH a esquivar fármacos y defensas.',
      blueprint:
        'Rol: ADN polimerasa dependiente de ARN/ADN y RNasa H heterodimérica asimétrica (~11 nm) · Origen: Procesamiento del polipéptido Gag-Pol por la proteasa viral durante la maduración · Interior: Subunidad catalítica p66 de 560 aa (dedos, palma, pulgar, conexión y RNasa H) sostenida por p51 de 440 aa sobre el dúplex [[ADN|dna]]/[[ARN|rna]] · Destino: Transforma el ARN viral diploide en ADNbc lineal listo para la [[Integrasa|hiv-in-real]]',
      scientific:
        'Estructura cristalográfica de rayos X del complejo ternario catalítico de la Transcriptasa Inversa de VIH-1 con dúplex molde-cebador de ADN y dTTP entrante (PDB 1RTD a 3,2 Å; ~11 nm, heterodímero de ~117 kDa). Consta de una subunidad p66 de 560 aa que aloja tanto el sitio activo polimerasa YMDD dependiente de Mg²⁺ (Tyr183–Met184–Asp185–Asp186) en la palma como el dominio C-terminal RNasa H tipo DEDD (~18 pb río abajo), emparejada con un andamio estructural p51 truncado de 440 aa; carece de corrección 3′→5′ (~3×10⁻⁵ mutaciones/nt).'
    }
  },
  'hiv-in-real': {
    en: {
      simple:
        'Integrase is HIV’s molecular cut-and-paste surgeon: it trims the ends of freshly made viral DNA, snips open a human chromosome, and welds the virus permanently into the cell’s own genetic book.',
      story:
        'Forging a double-stranded [[DNA|dna]] copy via [[Reverse Transcriptase|hiv-rt-real]] is only half the betrayal—loose DNA floating in the [[nucleus|nucleus]] would eventually fade away when the T-cell divides. So four Integrase subunits clamp onto both ends of the new viral DNA, trim two letters off each 3′ tip to bare reactive chemical hooks, and hitch a ride on host factor LEDGF/p75 straight to a busy stretch of human [[chromatin|chromatin-fiber]]. With one surgical snip-and-weld, viral DNA becomes an inseparable chapter of the cell’s own chromosome.',
      blueprint:
        'Role: Viral polynucleotidyl transferase (~8.5 nm dimer; tetrameric intasome in action) splicing viral cDNA into host chromosomes · From: C-terminal cleavage product of Gag-Pol imported inside the [[capsid cone|real-hiv-cone]] · Inside: Zn²⁺-binding NTD, catalytic DDE core, and SH3-like [[DNA|dna]]-binding [[polypeptide|polypeptide]] domains · To: Welds reverse-transcribed viral DNA into active host [[chromosomes|chromosome]] inside the [[nucleus|nucleus]]',
      scientific:
        'X-ray crystal structure of the HIV-1 Integrase catalytic core and C-terminal SH3-like DNA-binding two-domain dimer (PDB 1EX4 at 2.8 Å; ~8.5 nm long; monomer 288 aa, ~32 kDa; functional retroviral intasome tetramer/hexadecamer PDB 3OS0 / 5U1C). The RNase H-fold catalytic core coordinates two divalent Mg²⁺ ions via a conserved Asp64–Asp116–Glu152 (DDE) triad to catalyze 3′-end GT dinucleotide cleavage and concerted 5-bp-staggered nucleophilic transesterification into LEDGF/p75-bound active transcription units.'
    },
    es: {
      simple:
        'La Integrasa es el cirujano molecular de cortar y pegar del VIH: prepara las puntas del ADN viral recién escrito, abre un cromosoma humano y suelda el virus para siempre en el libro genético de la célula.',
      story:
        'Falsificar una copia de [[ADN|dna]] mediante la [[Transcriptasa Inversa|hiv-rt-real]] es solo la mitad de la traición: un ADN suelto en el [[núcleo|nucleus]] acabaría perdiéndose cuando el linfocito se dividiera. Por eso cuatro subunidades de Integrasa aferran ambos extremos del nuevo ADN viral, recortan dos letras de cada punta 3′ para dejar ganchos químicos al descubierto y viajan de la mano del factor celular LEDGF/p75 hasta una zona activa de [[cromatina|chromatin-fiber]] humana. Con un corte y empalme quirúrgico, el virus queda escrito para siempre como un capítulo más del cromosoma.',
      blueprint:
        'Rol: Polinucleotidil transferasa viral (dímero de ~8,5 nm; intasoma funcional tetramérico) que integra el ADNc viral en cromosomas humanos · Origen: Producto C-terminal del precursor Gag-Pol transportado dentro del [[cono capsídico|real-hiv-cone]] · Interior: Dominio NTD con Zn²⁺, núcleo catalítico DDE y dominios [[polipeptídicos|polypeptide]] tipo SH3 de unión a [[ADN|dna]] · Destino: Empalma el ADN viral en [[cromosomas|chromosome]] activos dentro del [[núcleo|nucleus]]',
      scientific:
        'Estructura cristalográfica de rayos X del dímero bidominio (núcleo catalítico y dominio C-terminal tipo SH3 de unión a ADN) de la Integrasa p32 de VIH-1 (PDB 1EX4 a 2,8 Å; ~8,5 nm de largo; monómero de 288 aa, ~32 kDa; intasoma retroviral activo PDB 3OS0 / 5U1C). El núcleo con plegamiento tipo RNasa H coordina dos iones Mg²⁺ mediante la tríada invariante Asp64–Asp116–Glu152 (DDE) para catalizar el procesamiento 3′ del dinucleótido GT y la transesterificación escalonada de 5 pb en cromatina transcripcionalmente activa guiada por LEDGF/p75.'
    }
  }
};

export const ENVELOPED_VIRUS_PART_LENSES: PagePartLensMap = {
  'coronavirus_realistic.html': {
    spike: {
      en: {
        subtitle: 'The Glycan-Cloaked Lockpick & Harpoon',
        simple:
          'Dressed in stolen sugar chains to fool patrolling antibodies, each club-shaped Spike flips up one molecular finger to grab a human airway receptor and fires a spring-loaded harpoon that fuses virus and cell.',
        story:
          'Fresh from the previous host’s [[Golgi|golgi]], forty-eight [[Spike trimers|cov-spike-real]] bristle across the virion under a swaying camouflage cloak of sixty-six sugar trees apiece. The instant one flips an S1 receptor-binding finger upward to clasp human [[ACE2|ace2-real]], it exposes a hidden loop that tricks TMPRSS2 scissors in the airway [[plasma membrane|plasma-membrane]] into snipping its S2′ pin—firing a hydrophobic harpoon that winches both lipid bubbles into one open doorway for the [[vRNP cargo|real-cov-rnp]].',
        blueprint: {
          role: 'Homotrimeric class I receptor-binding and membrane-fusion machine',
          arrivesFrom: 'Translated on [[rough ER|rough-er]] and furin-primed/glycosylated in host [[Golgi|golgi]]',
          inside: 'Three S1 receptor heads (hinged RBDs) atop coiled-coil S2 fusion stalks ([[Spike trimer|cov-spike-real]])',
          deliversTo: 'Clasps [[ACE2|ace2-real]] and fuses with host [[plasma membrane|plasma-membrane]] to inject viral RNA',
          loop: 'Subgenomic S mRNAs printed by [[RdRp|cov-rdrp-real]] restock the ERGIC membrane for new virions'
        },
        scientific:
          'Homotrimeric type I transmembrane glycoprotein (~16 nm × 13 nm; 1,273 aa/protomer; closed cryo-EM PDB 6VXX, 1-RBD-up PDB 6VSB) coated with 66 N-linked glycans per trimer. Pre-cleaved by furin at S1/S2 (682-RRAR-685), high-affinity RBD binding to ACE2 (Kd ~15 nM, PDB 6M0J) enables TMPRSS2 proteolysis at S2′ (R815↓S816), triggering irreversible HR1/HR2 refolding into a six-helix bundle (PDB 6LXT) that drives bilayer fusion.',
        from: [
          { nodeId: 'rough-er', label: 'Host Rough ER', cargo: 'Nascent S polypeptide' },
          { nodeId: 'golgi', label: 'Host Golgi / ERGIC', cargo: 'Furin cleavage & 66 glycans' }
        ],
        to: [
          { nodeId: 'ace2-real', label: 'Human ACE2 Receptor', cargo: 'Up-state RBD latch' },
          { nodeId: 'plasma-membrane', label: 'Host Airway Membrane', cargo: 'S2 fusion harpoon' }
        ]
      },
      es: {
        subtitle: 'La ganzúa y el arpón bajo manto de azúcar',
        simple:
          'Camuflada bajo cadenas de azúcar robadas para despistar anticuerpos, cada maza de Espiga levanta un dedo molecular para aferrar el receptor humano y dispara un arpón con resorte que funde al virus con la célula.',
        story:
          'Recién salidas del [[Golgi|golgi]] de su víctima anterior, cuarenta y ocho [[mazas de Espiga|cov-spike-real]] coronan el virión ocultas tras un espeso disfraz de sesenta y seis árboles de azúcar cada una. En cuanto una levanta su dedo buscador S1 para engancharse a [[ACE2|ace2-real]], destapa un bucle secreto que engaña a las tijeras TMPRSS2 de la [[membrana plasmática|plasma-membrane]] respiratoria para cortar el seguro S2′: un arpón hidrofóbico salta al instante y funde ambas burbujas para dar paso al [[collar vRNP|real-cov-rnp]].',
        blueprint: {
          role: 'Maquinaria homotrimérica de clase I para reconocimiento de receptor y fusión de bicapas',
          arrivesFrom: 'Traducida en el [[RE rugoso|rough-er]] y procesada por furina/glicosilación en el [[Golgi|golgi]]',
          inside: 'Tres cabezales S1 (RBD articulados) sobre tallos fusogénicos S2 ([[trímero de Espiga|cov-spike-real]])',
          deliversTo: 'Sujeta [[ACE2|ace2-real]] y se funde con la [[membrana plasmática|plasma-membrane]] para inyectar el ARN',
          loop: 'Los ARNm subgenómicos S impresos por la [[RdRp|cov-rdrp-real]] reabastecen las membranas ERGIC'
        },
        scientific:
          'Glicoproteína transmembrana homotrimérica de tipo I (~16 nm × 13 nm; 1.273 aa/protómero; estado cerrado PDB 6VXX, estado 1-RBD-up PDB 6VSB) revestida por 66 N-glicanos por trímero. Preescindida por furina en S1/S2 (682-RRAR-685), la unión de alta afinidad del RBD a ACE2 (Kd ~15 nM, PDB 6M0J) permite la proteólisis por TMPRSS2 en S2′ (R815↓S816), disparando el colapso irreversible HR1/HR2 en un haz de seis hélices (PDB 6LXT).',
        from: [
          { nodeId: 'rough-er', label: 'RE rugoso huésped', cargo: 'Polipéptido S naciente' },
          { nodeId: 'golgi', label: 'Golgi / ERGIC huésped', cargo: 'Corte por furina y 66 glicanos' }
        ],
        to: [
          { nodeId: 'ace2-real', label: 'Receptor humano ACE2', cargo: 'Enganche RBD «up»' },
          { nodeId: 'plasma-membrane', label: 'Membrana respiratoria', cargo: 'Arpón de fusión S2' }
        ]
      }
    },
    membrane: {
      en: {
        subtitle: 'The Stolen Getaway Bubble',
        simple:
          'The virus makes zero fat molecules of its own—instead it pinches off a spherical bubble of internal membrane from the last cell it hijacked, dissolving instantly if soap wedges into its oily wall.',
        story:
          'Rather than bursting out through the cell’s outer skin, budding coronaviruses heist a bespoke 92-nanometer patch of [[phospholipid|phospholipid]] bilayer straight from the host’s indoor [[ER–Golgi crossroads|golgi]]. Studded outside with [[Spike clubs|cov-spike-real]] and vented by [[E ion channels|cov-e-real]], this stolen bubble shields the fragile RNA cargo through airborne droplets until Spike winches it flush against a new airway [[plasma membrane|plasma-membrane]]—merging two separate soap bubbles into one continuous sheet.',
        blueprint: {
          role: 'Host-derived 92 nm spherical phospholipid bilayer sealing the virion and enabling fusion entry',
          arrivesFrom: 'Pinched off from intracellular ERGIC membranes between [[rough ER|rough-er]] and [[Golgi|golgi]]',
          inside: 'Fluid [[phospholipid|phospholipid]] and [[cholesterol|cholesterol]] leaflets anchoring S, M, and [[E proteins|cov-e-real]]',
          deliversTo: 'Merges seamlessly into the target airway [[plasma membrane|plasma-membrane]] upon S2 refolding',
          loop: 'Soap or alcohol wedges into the stolen lipid tails, popping the envelope and disarming entry'
        },
        scientific:
          '~92 nm outer-diameter (~5 nm thick) asymmetric phospholipid bilayer budding from the host endoplasmic reticulum–Golgi intermediate compartment (ERGIC), enriched in phosphatidylcholine, phosphatidylethanolamine, phosphatidylinositol, and cholesterol. Lacks metabolic lipid synthesis; laterally organizes ~24–48 S trimers, ~1,000–2,000 M dimers, and ~14–20 E pentamers while undergoing hemifusion stalk-to-pore coalescence with the target epithelial plasma membrane.',
        from: [
          { nodeId: 'rough-er', label: 'Host Rough ER', cargo: 'Membrane phospholipids' },
          { nodeId: 'golgi', label: 'Host ERGIC / Golgi', cargo: 'Budded envelope vesicle' }
        ],
        to: [
          { nodeId: 'cov-spike-real', label: 'Spike Trimers', cargo: 'Transmembrane anchor' },
          { nodeId: 'plasma-membrane', label: 'Host Airway Membrane', cargo: 'Bilayer hemifusion & pore' }
        ]
      },
      es: {
        subtitle: 'La burbuja de huida robada',
        simple:
          'El virus no fabrica ni una sola molécula de grasa: recorta una burbuja esférica de las membranas internas de la última célula que asaltó, razón por la cual el jabón la deshace al instante.',
        story:
          'En lugar de arrancar su disfraz de la fachada exterior, los nuevos coronavirus roban un parche esférico de 92 nanómetros de [[fosfolípidos|phospholipid]] directamente en el cruce interno entre el retículo y el [[Golgi|golgi]]. Tachonada por fuera con [[mazas de Espiga|cov-spike-real]] y ventilada por [[canales E|cov-e-real]], esta burbuja furtiva protege el delicado cargamento durante el viaje aéreo hasta fundirse sin costuras con una nueva [[membrana plasmática|plasma-membrane]] respiratoria como dos pompas que se vuelven una sola.',
        blueprint: {
          role: 'Bicapa fosfolipídica esférica de 92 nm derivada del huésped que sella el virión y permite la fusión',
          arrivesFrom: 'Escindida de membranas intracelulares ERGIC entre el [[RE rugoso|rough-er]] y el [[Golgi|golgi]]',
          inside: 'Hojas fluidas de [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]] que anclan S, M y [[viroporinas E|cov-e-real]]',
          deliversTo: 'Se funde de forma continua con la [[membrana plasmática|plasma-membrane]] epitelial tras el pliegue S2',
          loop: 'El jabón o el alcohol disuelven las colas lipídicas robadas, reventando la burbuja y desarmando al virus'
        },
        scientific:
          'Bicapa fosfolipídica asimétrica de ~92 nm de diámetro externo (~5 nm de espesor) gemada del compartimento intermedio RE–Golgi (ERGIC) del huésped, enriquecida en fosfatidilcolina, fosfatidiletanolamina, fosfatidilinositol y colesterol. Carece de biosíntesis lipídica propia; organiza lateralmente ~24–48 trímeros S, ~1.000–2.000 dímeros M y ~14–20 pentámeros E, experimentando coalescencia tallo-poro de hemifusión con la membrana plasmática diana.',
        from: [
          { nodeId: 'rough-er', label: 'RE rugoso huésped', cargo: 'Fosfolípidos de membrana' },
          { nodeId: 'golgi', label: 'ERGIC / Golgi huésped', cargo: 'Vesícula de envoltura gemada' }
        ],
        to: [
          { nodeId: 'cov-spike-real', label: 'Trímeros de Espiga', cargo: 'Anclaje transmembrana' },
          { nodeId: 'plasma-membrane', label: 'Membrana respiratoria', cargo: 'Hemifusión y poro lipídico' }
        ]
      }
    },
    mprot: {
      en: {
        subtitle: 'The Master Hull-Bender & Cargo Clasp',
        simple:
          'Thousands of twin Membrane proteins tile the viral bubble from wall to wall like curved rivets, bending the fat layer into a sphere while hooking the RNA necklace safely underneath.',
        story:
          'Outnumbering every other viral surface part by twenty to one, dimeric M proteins act as the master shipwrights of the heist inside the [[Golgi|golgi]] assembly dock. Threading each [[polypeptide|polypeptide]] chain three times across the stolen [[lipid bilayer|phospholipid]], these wedge-shaped twins link arms to bend flat host sheets into a tight 92-nanometer sphere, while their indoor tails reach down to clasp [[Nucleocapsid spools|cov-n-real]] and lock [[Spike trimers|cov-spike-real]] into position.',
        blueprint: {
          role: 'Abundant triple-spanning dimeric scaffold driving envelope curvature and vRNP recruitment',
          arrivesFrom: 'Cotranslational insertion into [[rough ER|rough-er]] and oligomerization at [[Golgi|golgi]]/ERGIC',
          inside: '3-TM [[alpha-helical|alpha-helix]] bundles paired with β-sandwich endodomains (~1,000–2,000 dimers/virion)',
          deliversTo: 'Tethers internal [[N–RNA vRNPs|cov-n-real]] and spaces [[Spike|cov-spike-real]] + [[E channels|cov-e-real]]',
          loop: 'Releases its grip upon membrane fusion so the vRNP unspools freely into the host [[cytosol|cytosol]]'
        },
        scientific:
          'Most abundant coronavirus structural glycoprotein (222 aa, ~25 kDa monomer; cryo-EM dimer PDB 8CTK; ~1,000–2,000 dimers per virion) structurally homologous to ORF3a ion-channel folds. Each protomer spans the ERGIC bilayer via three transmembrane α-helices above a cytosolic 8-stranded β-sheet endodomain; conformational switching between elongated compact and short states induces positive membrane curvature and binds the C-terminal tail of N (vRNP) plus S/E cytoplasmic tails.',
        from: [
          { nodeId: 'rough-er', label: 'Host Rough ER', cargo: 'Triple-pass M dimers' },
          { nodeId: 'phospholipid', label: 'ERGIC Lipid Bilayer', cargo: 'Planar membrane sheet' }
        ],
        to: [
          { nodeId: 'cov-n-real', label: 'Nucleocapsid Oligomers', cargo: 'Endodomain vRNP tether' },
          { nodeId: 'cov-spike-real', label: 'Spike Trimers', cargo: 'Lateral retention in hull' }
        ]
      },
      es: {
        subtitle: 'El maestro curvador del casco y broche de carga',
        simple:
          'Miles de proteínas gemelas de Membrana tapizan la burbuja viral de lado a lado como remaches curvos, doblando la capa de grasa en una esfera mientras enganchan por debajo el collar de ARN.',
        story:
          'Superando en veinte a uno a cualquier otra pieza superficial, los dímeros de proteína M son los maestros carpinteros de ribera en el astillero del [[Golgi|golgi]]. Enhebrando tres veces cada cadena de [[polipéptidos|polypeptide]] a través de la [[bicapa lipídica|phospholipid]] robada, estas cuñas gemelas se enlazan para curvar láminas planas hasta cerrar una esfera de 92 nanómetros, mientras sus colas internas sujetan los [[carretes de Nucleocápside|cov-n-real]] y fijan en su sitio las [[mazas de Espiga|cov-spike-real]].',
        blueprint: {
          role: 'Andamio dimérico mayoritario de triple paso transmembrana que curva la envoltura y ancla el vRNP',
          arrivesFrom: 'Inserción cotraduccional en el [[RE rugoso|rough-er]] y oligomerización en [[Golgi|golgi]]/ERGIC',
          inside: 'Haces de 3 [[hélices alfa|alpha-helix]] transmembrana con endodominios sándwich-β (~1.000–2.000 dímeros)',
          deliversTo: 'Ancla los complejos [[N–ARN|cov-n-real]] y retiene lateralmente [[Espigas|cov-spike-real]] y [[canales E|cov-e-real]]',
          loop: 'Suelta su amarre tras la fusión de membranas para liberar el vRNP en el [[citosol|cytosol]] huésped'
        },
        scientific:
          'Glicoproteína estructural más abundante del coronavirus (222 aa, ~25 kDa por monómero; dímero crio-EM PDB 8CTK; ~1.000–2.000 dímeros/virión), con homología de plegamiento respecto a ORF3a. Cada protómero atraviesa la bicapa ERGIC mediante tres hélices α transmembrana sobre un endodominio citosólico de lámina β de ocho hebras; su transición entre estados alargado y compacto induce curvatura de membrana y fija los extremos C-terminales de N, S y E.',
        from: [
          { nodeId: 'rough-er', label: 'RE rugoso huésped', cargo: 'Dímeros M de triple paso' },
          { nodeId: 'phospholipid', label: 'Bicapa lipídica ERGIC', cargo: 'Lámina membranosa plana' }
        ],
        to: [
          { nodeId: 'cov-n-real', label: 'Oligómeros de Nucleocápside', cargo: 'Amarre interno del vRNP' },
          { nodeId: 'cov-spike-real', label: 'Trímeros de Espiga', cargo: 'Retención lateral en el casco' }
        ]
      }
    },
    echan: {
      en: {
        subtitle: 'The Five-Stave Acid-Venting Viroporin',
        simple:
          'Though fewer than twenty copies ride aboard each virus, these tiny five-sided ion pores vent acid out of the host’s shipping compartments so brand-new Spikes don’t misfire before launch.',
        story:
          'As newly assembled virions ride secretory [[vesicles|vesicle]] out through the host [[Golgi|golgi]], rising acidity threatens to trip their hair-trigger [[Spike harpoons|cov-spike-real]] while still trapped indoors. By bundling five short hydrophobic helices into a cation-leaking [[Envelope viroporin|cov-e-real]], the virus bleeds protons and calcium across the membrane—neutralizing the acid trap, pinching the bud neck free, and accidentally tripping inflammatory alarms in human lungs.',
        blueprint: {
          role: 'Pentameric transmembrane viroporin cation channel neutralizing secretory pH and scissioning buds',
          arrivesFrom: 'Subgenomic E mRNA translated on [[rough ER|rough-er]] and oligomerized in [[Golgi|golgi]] membranes',
          inside: 'Five 75-aa [[alpha-helical|alpha-helix]] staves forming a cation-selective pore ([[E pentamer|cov-e-real]])',
          deliversTo: 'Vents H⁺ and Ca²⁺ from secretory [[vesicles|vesicle]] so ~14–20 channels bud intact virions',
          loop: 'Protects prefusion [[Spike trimers|cov-spike-real]] during egress so they arrive armed on the next cell'
        },
        scientific:
          'Homopentameric type I transmembrane viroporin (~5.5 nm outer diameter; 75 aa/monomer, ~8.4 kDa; solid-state NMR transmembrane bundle PDB 5X29 / 7K3G; ~14–20 pentamers incorporated per virion out of abundant ERGIC pools). Five tilted transmembrane α-helices (residues 8–38) form a hydrophobic Leu/Val-gated pore flanked by Asn15/Glu8 polar rings that conducts H⁺, Ca²⁺, Na⁺, and K⁺, alkalinizing Golgi/ERGIC lumens, activating host NLRP3 inflammasomes, and mediating ESCRT-independent neck scission.',
        from: [
          { nodeId: 'rough-er', label: 'Host Rough ER', cargo: '75-aa E monomers' },
          { nodeId: 'golgi', label: 'ERGIC / Golgi Lumen', cargo: 'Luminal H⁺ & Ca²⁺ gradient' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Secretory Exit Vesicle', cargo: 'De-acidified safe egress' },
          { nodeId: 'cov-spike-real', label: 'Prefusion Spike Trimers', cargo: 'Protected S2 spring' }
        ]
      },
      es: {
        subtitle: 'La viroporina de cinco duelas que purga el ácido',
        simple:
          'Aunque viajan menos de veinte copias en cada virus, estos diminutos poros de cinco lados evacúan el ácido de los conductos celulares para que las nuevas Espigas no se disparen antes de salir.',
        story:
          'Mientras los viriones recién montados viajan en [[vesículas|vesicle]] de salida a través del [[Golgi|golgi]], la acidez creciente amenaza con disparar a destiempo los sensibles arpones de la [[Espiga|cov-spike-real]] dentro de casa. Agrupando cinco cortas hélices hidrofóbicas en una [[viroporina pentamérica E|cov-e-real]], el virus drena protones y calcio a través de la membrana: desactiva la trampa ácida, estrangula el cuello de la burbuja para soltarla y desata de paso una fuerte alarma inflamatoria en el pulmón.',
        blueprint: {
          role: 'Canal catiónico pentamérico de viroporina que neutraliza el pH secretor y escinde la yema viral',
          arrivesFrom: 'ARNm subgenómico E traducido en el [[RE rugoso|rough-er]] y ensamblado en el [[Golgi|golgi]]',
          inside: 'Cinco duelas de 75 aa en [[hélice alfa|alpha-helix]] en torno a un poro catiónico ([[pentámero E|cov-e-real]])',
          deliversTo: 'Evacúa H⁺ y Ca²⁺ de las [[vesículas|vesicle]] secretoras dejando ~14–20 canales por virión',
          loop: 'Preserva intactos los [[trímeros de Espiga|cov-spike-real]] en prefusión hasta alcanzar la siguiente célula'
        },
        scientific:
          'Viroporina transmembrana homopentamérica de tipo I (~5,5 nm de diámetro; 75 aa/monómero, ~8,4 kDa; haz transmembrana RMN en estado sólido PDB 5X29 / 7K3G; ~14–20 pentámeros empaquetados por virión). Cinco hélices α inclinadas (residuos 8–38) delimitan un poro hidrofóbico Leu/Val flanqueado por anillos polares Asn15/Glu8 permeable a H⁺, Ca²⁺, Na⁺ y K⁺, alcalinizando el lumen del Golgi/ERGIC, activando el inflamasoma NLRP3 y facilitando la escisión membranosa.',
        from: [
          { nodeId: 'rough-er', label: 'RE rugoso huésped', cargo: 'Monómeros E de 75 aa' },
          { nodeId: 'golgi', label: 'Lumen ERGIC / Golgi', cargo: 'Gradiente de H⁺ y Ca²⁺' }
        ],
        to: [
          { nodeId: 'vesicle', label: 'Vesícula secretora de salida', cargo: 'Egreso desacidificado' },
          { nodeId: 'cov-spike-real', label: 'Espigas en prefusión', cargo: 'Resorte S2 intacto' }
        ]
      }
    },
    ncap: {
      en: {
        subtitle: 'The Pearl-Necklace Spools of the Giant Scroll',
        simple:
          'Forty clusters of Nucleocapsid protein cradle the delicate 30,000-letter viral RNA like shock-absorbing beads on a flexible necklace, hiding it from cellular alarms until ribosomes grab hold.',
        story:
          'Cramming ten meters’ worth of scaled-up thread—nearly 30,000 letters of [[viral RNA|rna]]—inside a 65-nanometer bubble without snapping a single bond demands positively charged velvet gloves. Forty oligomers of [[Nucleocapsid protein|cov-n-real]] clamp onto the RNA’s negative backbone to wind a springy [[vRNP bead necklace|real-cov-rnp]], then unclip cleanly into the [[cytosol|cytosol]] upon fusion while dulling antiviral alarms so host [[ribosomes|ribosome]] start reading undisturbed.',
        blueprint: {
          role: 'Helical/beaded RNA-packaging phosphoprotein shielding and unspooling the 29.9 kb genome',
          arrivesFrom: 'Translated in vast quantities by cytosolic [[ribosomes|ribosome]] from subgenomic N mRNA',
          inside: '~35–40 oligomers of [[N protein|cov-n-real]] gripping RNA phosphates in basic β-hairpin grooves',
          deliversTo: 'Hands intact [[(+)ssRNA|rna]] into the target [[cytosol|cytosol]] upon envelope fusion',
          loop: 'Condenses newly minted genomes via liquid phase separation and docks them onto M tails at [[Golgi|golgi]]'
        },
        scientific:
          '419-aa multidomain phosphoprotein (~45.6 kDa monomer; ~1,000 copies organized into ~35–40 ~15 nm vRNP particles per virion). Combines an N-terminal RNA-binding β-sheet/basic β-hairpin palm (PDB 6VYO) and a C-terminal domain-swapped dimerization module (PDB 6WZO) bridged by an SR-rich intrinsically disordered linker whose GSK-3 phosphorylation toggles between tight virion condensation and fluid unwinding for nsp12 RdRp / 80S ribosome access, while antagonizing host stress granules and RIG-I/MDA5.',
        from: [
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'Abundant N phosphoprotein' },
          { nodeId: 'rna', label: '29.9 kb (+)ssRNA Genome', cargo: 'Anionic phosphate backbone' }
        ],
        to: [
          { nodeId: 'real-cov-rnp', label: 'vRNP Necklace Core', cargo: '40 packaged RNP beads' },
          { nodeId: 'cytosol', label: 'Host Airway Cytosol', cargo: 'Unspooled mRNA-ready scroll' }
        ]
      },
      es: {
        subtitle: 'Los carretes de perlas del pergamino gigante',
        simple:
          'Cuarenta grupos de proteína de Nucleocápside acunan el delicado ARN viral de 30.000 letras como cuentas amortiguadoras de un collar flexible, ocultándolo de las alarmas hasta que lo leen los ribosomas.',
        story:
          'Guardar casi 30.000 letras de [[ARN viral|rna]] en una cavidad de 65 nanómetros sin romper un solo enlace exige guantes de terciopelo con carga positiva. Cuarenta oligómeros de [[proteína de Nucleocápside|cov-n-real]] abrazan el esqueleto negativo del ARN formando un elástico [[collar de cuentas vRNP|real-cov-rnp]], que tras la fusión se desenrolla suavemente en el [[citosol|cytosol]] mientras silencia sensores inmunes para que los [[ribosomas|ribosome]] empiecen a leer sin interrupciones.',
        blueprint: {
          role: 'Fosfoproteína empaquetadora en collar que blinda y desenrolla el genoma de 29,9 kb',
          arrivesFrom: 'Traducida masivamente por [[ribosomas|ribosome]] citosólicos a partir del ARNm subgenómico N',
          inside: '~35–40 oligómeros de [[proteína N|cov-n-real]] fijando fosfatos del ARN en surcos de horquilla β',
          deliversTo: 'Despliega el [[ARNmc(+)|rna]] íntegro en el [[citosol|cytosol]] diana tras la fusión de la envoltura',
          loop: 'Condensa genomas nuevos por separación de fases líquidas y los engancha a dímeros M en el [[Golgi|golgi]]'
        },
        scientific:
          'Fosfoproteína multidominio de 419 aa (~45,6 kDa/monómero; ~1.000 copias dispuestas en ~35–40 complejos vRNP de ~15 nm por virión). Une un dominio N-terminal de unión a ARN con palma β y horquilla básica (PDB 6VYO) a un módulo C-terminal de dimerización (PDB 6WZO) mediante un enlazador desordenado rico en SR cuya fosforilación por GSK-3 conmuta entre empaquetamiento denso y desenrollamiento fluido para acceso de ribosomas 80S y RdRp, inhibiendo además gránulos de estrés y RIG-I/MDA5.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S huésped', cargo: 'Fosfoproteína N masiva' },
          { nodeId: 'rna', label: 'Genoma ARNmc(+) 29,9 kb', cargo: 'Esqueleto fosfato aniónico' }
        ],
        to: [
          { nodeId: 'real-cov-rnp', label: 'Núcleo vRNP en collar', cargo: '40 cuentas RNP compactas' },
          { nodeId: 'cytosol', label: 'Citosol respiratorio', cargo: 'Pergamino listo para traducir' }
        ]
      }
    },
    rna: {
      en: {
        subtitle: 'The Counterfeit 30,000-Letter Master Scroll',
        simple:
          'Wearing a fake "approved cellular mail" header and tail, this giant single-stranded RNA genome tricks human ribosomes into reading it on sight—building viral copying factories within minutes of entry.',
        story:
          'At 29,903 nucleotides long, this [[(+)ssRNA scroll|rna]] is a heavyweight champion among RNA viruses, and it arrives pre-forged with a 5′ methylated cap and 3′ poly-A tail indistinguishable from genuine human mRNA. Unspooling off [[Nucleocapsid beads|cov-n-real]] straight into the airway [[cytosol|cytosol]], it bypasses the nucleus entirely and cons host [[ribosomes|ribosome]] into immediately translating sixteen nonstructural tools—including the [[RdRp printing press|cov-rdrp-real]] that will clone it thousands of times.',
        blueprint: {
          role: '29,903-nt infectious (+)ssRNA genome acting directly as viral mRNA and replication template',
          arrivesFrom: 'Cloned inside previous host [[RdRp|cov-rdrp-real]] vesicles and spooled onto [[N oligomers|cov-n-real]]',
          inside: '5′-capped, 3′-polyadenylated linear chain of [[nucleotides|nucleotide]] with a −1 frameshift slippery knot',
          deliversTo: 'Hijacks host 80S [[ribosomes|ribosome]] to forge ORF1a/1ab polyproteins and templates [[RdRp|cov-rdrp-real]]',
          loop: 'Newly synthesized (+)ssRNA strands split between translating more proteins and packaging new virions'
        },
        scientific:
          'Linear monopartite positive-sense single-stranded RNA genome of 29,903 nucleotides (~9.6 MDa), bearing a 5′ cap-1 structure (m⁷GpppAm, methylated by viral nsp14/nsp16) and 3′ poly(A) tail. Two-thirds 5′ region encodes replicase polyproteins pp1a and pp1ab (joined via a pseudoknot-stimulated −1 programmed ribosomal frameshift at U_UUU_AAAC, cleaved by nsp3 PLpro and nsp5 Mpro into nsp1–nsp16); 3′ third encodes S, E, M, N and accessory ORFs via discontinuous TRS-mediated subgenomic transcription.',
        from: [
          { nodeId: 'cov-rdrp-real', label: 'Viral RdRp Holoenzyme', cargo: 'Full-length (+)ssRNA synthesis' },
          { nodeId: 'cov-n-real', label: 'Nucleocapsid Spools', cargo: 'Protected luminal delivery' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'Immediate ORF1ab translation' },
          { nodeId: 'real-cov-replication', label: 'Replication Complex', cargo: '30 kb master template' }
        ]
      },
      es: {
        subtitle: 'El pergamino maestro falsificado de 30.000 letras',
        simple:
          'Provisto de un sello inicial y una cola idénticos a los del correo celular legítimo, este gigantesco hilo de ARN engaña a los ribosomas humanos para que lo lean al instante y fabriquen copiadoras virales en minutos.',
        story:
          'Con 29.903 nucleótidos de longitud, este [[pergamino de ARNmc(+)|rna]] es un peso pesado entre los virus de ARN y llega falsificado de fábrica con caperuza 5′ metilada y cola poli-A 3′ idénticas a un ARNm humano. Al desenrollarse de las [[cuentas de Nucleocápside|cov-n-real]] en pleno [[citosol|cytosol]] sin pisar jamás el núcleo, engaña a los [[ribosomas|ribosome]] para que traduzcan en el acto dieciséis herramientas virales, incluida la [[imprenta RdRp|cov-rdrp-real]] que lo clonará por miles.',
        blueprint: {
          role: 'Genoma infeccioso de ARNmc(+) de 29.903 nt que funciona directamente como ARNm y molde replicativo',
          arrivesFrom: 'Clonado por la [[RdRp|cov-rdrp-real]] en la célula previa y devanado sobre [[oligómeros N|cov-n-real]]',
          inside: 'Cadena lineal de [[nucleótidos|nucleotide]] con caperuza 5′, cola poli(A) 3′ y pseudonudo de cambio de marco −1',
          deliversTo: 'Secuestra [[ribosomas|ribosome]] 80S para traducir ORF1a/1ab y sirve de molde a la [[RdRp|cov-rdrp-real]]',
          loop: 'Las nuevas copias (+) se reparten entre fabricar más proteínas y empaquetarse en viriones salientes'
        },
        scientific:
          'Genoma lineal monopartito de ARN monocatenario de polaridad positiva de 29.903 nucleótidos (~9,6 MDa), provisto de caperuza 5′ tipo cap-1 (m⁷GpppAm metilada por nsp14/nsp16) y cola poli(A) 3′. Los dos tercios 5′ codifican las poliproteínas pp1a y pp1ab (mediante cambio de marco ribosómico programado −1 estimulado por pseudonudo en U_UUU_AAAC, procesadas por PLpro nsp3 y Mpro nsp5 en nsp1–nsp16); el tercio 3′ codifica S, E, M, N y proteínas accesorias mediante transcripción discontinua regulada por secuencias TRS.',
        from: [
          { nodeId: 'cov-rdrp-real', label: 'Holoenzima viral RdRp', cargo: 'Síntesis íntegra de ARNmc(+)' },
          { nodeId: 'cov-n-real', label: 'Carretes de Nucleocápside', cargo: 'Entrega luminal protegida' }
        ],
        to: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S huésped', cargo: 'Traducción directa ORF1ab' },
          { nodeId: 'real-cov-replication', label: 'Complejo de replicación', cargo: 'Molde maestro de 30 kb' }
        ]
      }
    },
    ace2: {
      en: {
        subtitle: 'The Unwitting Front-Door Handle',
        simple:
          'Meant to regulate blood pressure and protect lung tissue, this human cell-surface enzyme gets hijacked as an anchor post when the coronavirus Spike clamps onto its outer ridge.',
        story:
          'Projecting above the airway [[plasma membrane|plasma-membrane]] alongside beating [[cilia|cilium]], human [[ACE2|ace2-real]] normally spends its life snipping vasoconstrictor hormones to keep lungs calm and vessels relaxed. Yet its exposed outer [[alpha-helix|alpha-helix]] happens to match the up-flipped finger of the [[Spike trimer|cov-spike-real]] with nanomolar precision—holding the shapeshifter steady at arm’s length just long enough for neighboring TMPRSS2 scissors to trip the fusion harpoon.',
        blueprint: {
          role: 'Host zinc carboxypeptidase ectodomain unwittingly serving as high-affinity viral docking post',
          arrivesFrom: 'Host chromosomal transcription in [[nucleus|nucleus]] and secretory export via [[Golgi|golgi]]',
          inside: 'Claw-shaped metallopeptidase ectodomain presenting the N-terminal α1 helix ([[ACE2|ace2-real]])',
          deliversTo: 'Immobilizes [[Spike RBD|cov-spike-real]] ~15 nm off the [[plasma membrane|plasma-membrane]] for S2′ priming',
          loop: 'Viral binding and shedding deplete surface ACE2, worsening local angiotensin II lung inflammation'
        },
        scientific:
          'Homodimeric type I integral membrane zinc metallopeptidase (805 aa/monomer, ~92.5 kDa; ectodomain crystal PDB 1R42; full-length B⁰AT1-bound cryo-EM dimer PDB 6M17). Normally cleaves octapeptide angiotensin II into vasodilatory/anti-inflammatory angiotensin-(1–7) via a Zn²⁺-coordinated HEXXH active site; its N-terminal α1/α2 helices and β3–β4 hairpin (residues Gln24, Asp30, Tyr41, Gln42, Lys353) form a high-affinity network of 13 H-bonds and 2 salt bridges with the SARS-CoV-2 Spike RBM (Kd ~4–15 nM, PDB 6M0J).',
        from: [
          { nodeId: 'golgi', label: 'Host Secretory Pathway', cargo: 'Glycosylated ACE2 dimer' },
          { nodeId: 'cov-spike-real', label: 'Viral Spike RBD', cargo: 'Nanomolar docking clasp' }
        ],
        to: [
          { nodeId: 'real-cov-spike', label: 'Spike–ACE2 Contact Zone', cargo: 'Exposed S2′ cleavage loop' },
          { nodeId: 'plasma-membrane', label: 'Host Airway Membrane', cargo: 'Positioned fusion target' }
        ]
      },
      es: {
        subtitle: 'El picaporte involuntario de la puerta principal',
        simple:
          'Diseñada para regular la presión arterial y proteger el tejido pulmonar, esta enzima superficial humana acaba secuestrada como punto de amarre cuando la Espiga viral se aferra a su borde externo.',
        story:
          'Asomada sobre la [[membrana plasmática|plasma-membrane]] respiratoria junto a los [[cilios|cilium]] batientes, la enzima humana [[ACE2|ace2-real]] dedica su vida normal a recortar hormonas vasoconstrictoras para proteger pulmones y arterias. Pero su [[hélice alfa|alpha-helix]] exterior encaja con precisión nanomolar en el dedo levantado del [[trímero de la Espiga|cov-spike-real]], sujetando firme al intruso el tiempo justo para que las tijeras vecinas TMPRSS2 disparen el arpón de fusión.',
        blueprint: {
          role: 'Ectodominio carboxipeptidasa de zinc humano explotado como anclaje viral de alta afinidad',
          arrivesFrom: 'Transcripción cromosómica en el [[núcleo|nucleus]] y exportación secretora vía [[Golgi|golgi]]',
          inside: 'Ectodominio metalopeptidasa bilobulado que expone la hélice α1 N-terminal ([[ACE2|ace2-real]])',
          deliversTo: 'Fija el [[RBD de la Espiga|cov-spike-real]] sobre la [[membrana plasmática|plasma-membrane]] para el corte S2′',
          loop: 'El secuestro viral agota ACE2 en superficie, agravando la inflamación pulmonar por angiotensina II'
        },
        scientific:
          'Metalopeptidasa de zinc integral de membrana tipo I homodimérica (805 aa/monómero, ~92,5 kDa; cristal del ectodominio PDB 1R42; dímero completo crio-EM con B⁰AT1 PDB 6M17). Hidroliza fisiológicamente angiotensina II en el heptapéptido vasodilatador angiotensina-(1–7) mediante un centro activo HEXXH coordinado con Zn²⁺; sus hélices N-terminales α1/α2 y la horquilla Lys353 (Gln24, Asp30, Tyr41, Gln42, Lys353) establecen 13 puentes de hidrógeno y 2 puentes salinos con el RBM de la Espiga (Kd ~4–15 nM, PDB 6M0J).',
        from: [
          { nodeId: 'golgi', label: 'Vía secretora humana', cargo: 'Dímero ACE2 glicosilado' },
          { nodeId: 'cov-spike-real', label: 'RBD de la Espiga viral', cargo: 'Unión de afinidad nanomolar' }
        ],
        to: [
          { nodeId: 'real-cov-spike', label: 'Zona Espiga–ACE2', cargo: 'Bucle S2′ expuesto' },
          { nodeId: 'plasma-membrane', label: 'Membrana respiratoria', cargo: 'Diana alineada para fusión' }
        ]
      }
    },
    hostmem: {
      en: {
        subtitle: 'The Breached Airway Border Wall',
        simple:
          'This protective outer fat layer of a human nose or lung cell carries both the receptor latch and the molecular scissors that the coronavirus tricks into opening a direct tunnel indoors.',
        story:
          'Guarding the frontier of a ciliated respiratory cell, this [[plasma membrane|plasma-membrane]] woven from [[phospholipids|phospholipid]] and cholesterol unknowingly hosts both accomplices of its own break-in: [[ACE2|ace2-real]] receptors and adjacent TMPRSS2 protease scissors. Once TMPRSS2 snips the docked [[Spike|cov-spike-real]], S2’s harpoon plunges straight into these outer lipids and winches the viral envelope flush until both membranes pop open into a direct chute to the [[cytosol|cytosol]].',
        blueprint: {
          role: 'Apical respiratory epithelial lipid bilayer hosting ACE2/TMPRSS2 and undergoing fusion-pore opening',
          arrivesFrom: 'Host lipid biosynthesis in [[smooth ER|smooth-er]] and vesicular delivery from [[Golgi|golgi]]',
          inside: 'Asymmetric [[phospholipid|phospholipid]]/[[cholesterol|cholesterol]] bilayer embedding ACE2 and TMPRSS2',
          deliversTo: 'Coalesces with the viral envelope to open a cytoplasmic fusion pore into host [[cytosol|cytosol]]',
          loop: 'If surface TMPRSS2 is scarce, endocytosed virions fuse later inside cathepsin-L-rich [[lysosomes|lysosome]]'
        },
        scientific:
          '~5 nm apical plasma membrane bilayer of human ciliated nasal/bronchial epithelial or type II alveolar pneumocyte cells, enriched in sphingomyelin, cholesterol, and phosphatidylserine (inner leaflet) beneath a mucin glycocalyx. Co-clusters ACE2/B⁰AT1 complexes with type II transmembrane serine protease TMPRSS2 (PDB 7MEQ); insertion of the SARS-CoV-2 S2 fusion peptide (residues 816–855) perturbs outer-leaflet lipid packing, lowering the ~40–50 kBT kinetic barrier for stalk hemifusion and fusion-pore expansion.',
        from: [
          { nodeId: 'ace2-real', label: 'Embedded ACE2 Receptor', cargo: 'Tethered virion at surface' },
          { nodeId: 'cov-spike-real', label: 'Cleaved S2 Stalk', cargo: 'Hydrophobic fusion peptide' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Host Airway Cytosol', cargo: 'Open fusion pore entry' },
          { nodeId: 'real-cov-rnp', label: 'Incoming vRNP Core', cargo: 'Direct cytosolic release' }
        ]
      },
      es: {
        subtitle: 'La muralla fronteriza respiratoria vulnerada',
        simple:
          'Esta capa grasa externa de una célula nasal o pulmonar aloja tanto el picaporte como las tijeras moleculares que el coronavirus engaña para abrir un túnel directo hacia el interior.',
        story:
          'Custodiando la frontera de una célula epitelial respiratoria, esta [[membrana plasmática|plasma-membrane]] tejida con [[fosfolípidos|phospholipid]] y colesterol alberga sin saberlo a los dos cómplices de su propio asalto: los receptores [[ACE2|ace2-real]] y las tijeras vecinas TMPRSS2. Apenas TMPRSS2 corta la [[Espiga|cov-spike-real]] acoplada, el arpón S2 se clava en estos lípidos y tracciona la burbuja viral hasta abrir un tobogán directo hacia el [[citosol|cytosol]].',
        blueprint: {
          role: 'Bicapa lipídica epitelial respiratoria apical que aloja ACE2/TMPRSS2 y sufre apertura de poro de fusión',
          arrivesFrom: 'Biosíntesis lipídica en el [[RE liso|smooth-er]] y tráfico vesicular desde el [[Golgi|golgi]]',
          inside: 'Bicapa asimétrica de [[fosfolípidos|phospholipid]] y [[colesterol|cholesterol]] con ACE2 y TMPRSS2',
          deliversTo: 'Coalesce con la envoltura viral abriendo un poro de fusión hacia el [[citosol|cytosol]] humano',
          loop: 'Si falta TMPRSS2 en superficie, el virión entra por endocitosis y se funde en [[lisosomas|lysosome]] vía catepsina L'
        },
        scientific:
          'Bicapa de membrana plasmática apical (~5 nm) de células epiteliales ciliadas nasales/bronquiales o neumocitos alveolares tipo II, rica en esfingomielina, colesterol y fosfatidilserina interna bajo el glicocálix mucoso. Coagrupa complejos ACE2/B⁰AT1 con la serina proteasa transmembrana tipo II TMPRSS2 (PDB 7MEQ); la inserción del péptido de fusión S2 (residuos 816–855) desorganiza el empaquetamiento lipídico externo, abatiendo la barrera energética (~40–50 kBT) hacia la hemifusión y expansión del poro.',
        from: [
          { nodeId: 'ace2-real', label: 'Receptor ACE2 anclado', cargo: 'Virión retenido en superficie' },
          { nodeId: 'cov-spike-real', label: 'Tallo S2 activado', cargo: 'Péptido hidrofóbico de fusión' }
        ],
        to: [
          { nodeId: 'cytosol', label: 'Citosol respiratorio', cargo: 'Apertura del poro de fusión' },
          { nodeId: 'real-cov-rnp', label: 'Núcleo vRNP entrante', cargo: 'Descarga directa al interior' }
        ]
      }
    },
    rdrp: {
      en: {
        subtitle: 'The Twin-Pole Viral Printing Press',
        simple:
          'Built on the spot from the virus’s own instructions, this rapid-fire RNA copying machine uses two long protein guide rails to duplicate the 30,000-letter genome without losing its grip.',
        story:
          'Not a single copy of this printing press rides inside the incoming virion—host [[ribosomes|ribosome]] get duped into building it fresh minutes after the [[viral RNA|rna]] lands indoors. Sheltered inside double-walled [[rough ER|rough-er]] bunkers, catalytic nsp12 clamps onto twin α-helical nsp8 sliding poles ([[RdRp complex|cov-rdrp-real]]) and guzzles cellular nucleotides, churning out full-length genomes alongside short mRNA orders for fresh [[Spike clubs|cov-spike-real]].',
        blueprint: {
          role: 'High-processivity RNA-dependent RNA polymerase holoenzyme driving replication and transcription',
          arrivesFrom: 'Translated de novo by host [[ribosomes|ribosome]] from ORF1ab and cleaved by viral Mpro',
          inside: 'Catalytic nsp12 right-hand polymerase + nsp7 + two α-helical nsp8 poles ([[RdRp holoenzyme|cov-rdrp-real]])',
          deliversTo: 'Outputs 29.9 kb [[(+)ssRNA|rna]] for [[N packaging|cov-n-real]] and subgenomic mRNAs for S/E/M/N',
          loop: 'Teams with nsp14 ExoN proofreader to keep 30 kb RNA copies error-free across successive heist cycles'
        },
        scientific:
          'Heterotetrameric nsp12–nsp7–(nsp8)₂ RdRp holoenzyme (~160 kDa; cryo-EM apo PDB 6M71, RNA-duplicating complex PDB 7BV2, helicase-coupled RTC PDB 6XEZ) anchored inside ER-derived double-membrane vesicles (DMVs, exited via nsp3 crown pores). Catalytic nsp12 (932 aa) polymerizes NTPs (~150–200 nt/s) at its Mg²⁺-dependent SDD759–761 palm triad while ~100 Å positively charged nsp8 α-helical extensions prevent dissociation across the 29.9 kb template; targeted by nucleotide prodrugs (remdesivir, molnupiravir).',
        from: [
          { nodeId: 'ribosome', label: 'Host 80S Ribosomes', cargo: 'Translated ORF1ab nsp7/8/12' },
          { nodeId: 'nucleotide', label: 'Host NTP Pool', cargo: 'ATP, UTP, GTP, CTP letters' }
        ],
        to: [
          { nodeId: 'rna', label: 'Progeny (+)ssRNA Genomes', cargo: '29.9 kb replicated scrolls' },
          { nodeId: 'cov-spike-real', label: 'Structural Protein mRNAs', cargo: 'Nested S, E, M, N transcripts' }
        ]
      },
      es: {
        subtitle: 'La imprenta viral de doble pértiga',
        simple:
          'Construida en el acto siguiendo las propias instrucciones del virus, esta veloz copiadora de ARN usa dos largos rieles proteicos para duplicar el genoma de 30.000 letras sin soltar la pista.',
        story:
          'Ni una sola copia de esta imprenta viaja dentro del virión entrante: los propios [[ribosomas|ribosome]] humanos son engañados para fabricarla minutos después de que aterrice el [[ARN viral|rna]]. Oculta en búnkeres de doble membrana tallados en el [[RE rugoso|rough-er]], la polimerasa nsp12 sujeta dos largas pértigas deslizantes nsp8 ([[complejo RdRp|cov-rdrp-real]]) y devora nucleótidos celulares para imprimir genomas completos y recetas cortas de nuevas [[mazas de Espiga|cov-spike-real]].',
        blueprint: {
          role: 'Holoenzima ARN polimerasa dependiente de ARN de alta procesividad para replicación y transcripción',
          arrivesFrom: 'Traducida de novo por [[ribosomas|ribosome]] humanos desde ORF1ab y liberada por Mpro viral',
          inside: 'Polimerasa catalítica nsp12 + cofactor nsp7 + dos pértigas helicoidales nsp8 ([[holoenzima RdRp|cov-rdrp-real]])',
          deliversTo: 'Produce [[ARNmc(+)|rna]] de 29,9 kb para [[empaquetamiento N|cov-n-real]] y ARNm subgenómicos S/E/M/N',
          loop: 'Se acopla a la exonucleasa correctora nsp14 ExoN para mantener fiel el genoma gigante de 30 kb'
        },
        scientific:
          'Holoenzima heterotetramérica RdRp nsp12–nsp7–(nsp8)₂ (~160 kDa; crio-EM apo PDB 6M71, complejo elongante con ARN PDB 7BV2, RTC extendido con helicasa PDB 6XEZ) alojada en vesículas de doble membrana derivadas del RE (exportando ARN por poros coronados nsp3). La subunidad nsp12 (932 aa) incorpora NTPs (~150–200 nt/s) en su tríada catalítica SDD759–761 dependiente de Mg²⁺ mientras las pértigas α-helicoidales básicas de nsp8 (~100 Å) aseguran procesividad a lo largo de 29,9 kb; diana de análogos nucleotídicos.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas 80S huésped', cargo: 'Poliproteína ORF1ab nsp7/8/12' },
          { nodeId: 'nucleotide', label: 'Reserva celular de NTP', cargo: 'Letras ATP, UTP, GTP y CTP' }
        ],
        to: [
          { nodeId: 'rna', label: 'Genomas progenie ARNmc(+)', cargo: 'Pergaminos clonados de 29,9 kb' },
          { nodeId: 'cov-spike-real', label: 'ARNm estructurales', cargo: 'Transcritos anidados S, E, M, N' }
        ]
      }
    }
  },
  'hiv_realistic.html': {
    env: {
      en: {
        subtitle: 'The Sparse Sugar-Armored Two-Factor Lockpick',
        simple:
          'Only about fourteen of these sugar-coated spikes dot the entire HIV surface—spaced wide apart to dodge antibodies—and each one must unlock two separate T-cell receptors in order before fusing membranes.',
        story:
          'Half of each mushroom-shaped [[Env trimer|hiv-env-real]] is pure [[Golgi|golgi]]-grafted sugar camouflage, and HIV plants scarcely fourteen copies per virion so two-armed antibodies almost never snag two at once. Touching a helper T-cell’s [[plasma membrane|plasma-membrane]], outer gp120 clicks onto CD4 first, popping out a hidden V3 loop to grab a [[CCR5 or CXCR4 coreceptor|gpcr]] second—cocking gp41 to snap into a six-helix bundle that fuses both membranes and slips the [[stealth cone|real-hiv-cone]] indoors.',
        blueprint: {
          role: 'Sparse glycan-shielded (gp120)₃(gp41)₃ heterotrimer executing two-factor T-cell membrane fusion',
          arrivesFrom: 'gp160 cleaved by furin and armored with ~88 glycans in host [[Golgi|golgi]], captured by [[Matrix|hiv-ma-real]]',
          inside: 'Three CD4/coreceptor-binding gp120 caps noncovalently atop three gp41 stalks ([[Env trimer|hiv-env-real]])',
          deliversTo: 'Engages CD4 + [[CCR5/CXCR4|gpcr]] on the T-cell [[plasma membrane|plasma-membrane]] to fuse bilayers',
          loop: 'Integrated proviral DNA directs host [[Pol II|pol-ii]] to restock Env spikes at lipid rafts for budding'
        },
        scientific:
          'Sparse (~14±7 trimers/virion) noncovalent heterotrimer of furin-cleaved surface gp120 and transmembrane gp41 (~13 nm × 12 nm; closed prefusion SOSIP structure PDB 4TVP / 5FYL), shielded by ~81–90 N-linked glycans (~50% mass) and hypervariable V1–V5 loops. Sequential binding of gp120 to host CD4 domain D1 (PDB 1GC1) rearranges the bridging sheet to expose V3 toward chemokine GPCR CCR5 (PDB 6MEO) or CXCR4, triggering gp41 fusion-peptide insertion and six-helix bundle collapse (PDB 1AIK).',
        from: [
          { nodeId: 'golgi', label: 'Host Golgi Apparatus', cargo: 'Furin-cleaved glycan-armored Env' },
          { nodeId: 'hiv-ma-real', label: 'Inner p17 Matrix Lattice', cargo: 'gp41 tail recruitment' }
        ],
        to: [
          { nodeId: 'gpcr', label: 'Host CCR5 / CXCR4 Coreceptor', cargo: 'Exposed V3 second-lock handshake' },
          { nodeId: 'plasma-membrane', label: 'T-Cell Plasma Membrane', cargo: 'gp41 six-helix bundle fusion' }
        ]
      },
      es: {
        subtitle: 'La ganzúa escasa de doble factor blindada con azúcar',
        simple:
          'Apenas unas catorce de estas espigas cubiertas de azúcar salpican todo el VIH —muy separadas para burlar anticuerpos— y cada una debe abrir en orden dos cerraduras del linfocito T antes de fundir membranas.',
        story:
          'La mitad de cada [[trímero Env|hiv-env-real]] es puro camuflaje de azúcares injertados en el [[Golgi|golgi]], y el VIH planta apenas catorce copias por virión para que los anticuerpos de dos brazos casi nunca atrapen dos a la vez. Al rozar la [[membrana plasmática|plasma-membrane]] de un linfocito T, su corona gp120 abre primero CD4 y despliega el bucle oculto V3 para enganchar un [[correceptor CCR5 o CXCR4|gpcr]], disparando el resorte gp41 que funde ambas burbujas e infiltra el [[cono furtivo|real-hiv-cone]].',
        blueprint: {
          role: 'Heterotrímero disperso (gp120)₃(gp41)₃ blindado con glicanos para fusión de doble factor en células T',
          arrivesFrom: 'Precursor gp160 escindido por furina con ~88 glicanos en el [[Golgi|golgi]], capturado por [[Matriz|hiv-ma-real]]',
          inside: 'Tres cabezales gp120 unidos de forma no covalente sobre tres tallos gp41 ([[trímero Env|hiv-env-real]])',
          deliversTo: 'Desbloquea CD4 + [[CCR5/CXCR4|gpcr]] en la [[membrana plasmática|plasma-membrane]] T para fundir bicapas',
          loop: 'El provirus integrado ordena a la [[Pol II|pol-ii]] humana reponer espigas Env en balsas lipídicas'
        },
        scientific:
          'Heterotrímero no covalente de baja densidad (~14±7 trímeros/virión) formado por gp120 superficial y gp41 transmembrana escindidos por furina (~13 nm × 12 nm; estructura SOSIP en prefusión PDB 4TVP / 5FYL), blindado por ~81–90 N-glicanos (~50 % de la masa) y bucles hipervariables V1–V5. La unión secuencial al dominio D1 de CD4 (PDB 1GC1) reordena la lámina puente y expone V3 hacia el GPCR CCR5 (PDB 6MEO) o CXCR4, disparando el haz de seis hélices de gp41 (PDB 1AIK).',
        from: [
          { nodeId: 'golgi', label: 'Aparato de Golgi huésped', cargo: 'Env escindida y glicosilada' },
          { nodeId: 'hiv-ma-real', label: 'Red interna de Matriz p17', cargo: 'Reclutamiento de colas gp41' }
        ],
        to: [
          { nodeId: 'gpcr', label: 'Correceptor CCR5 / CXCR4', cargo: 'Segundo giro de llave del bucle V3' },
          { nodeId: 'plasma-membrane', label: 'Membrana del linfocito T', cargo: 'Fusión por haz de seis hélices' }
        ]
      }
    },
    membrane: {
      en: {
        subtitle: 'The Stiff Cholesterol-Raft Cloak',
        simple:
          'Pinched straight off the outer surface of a dying immune cell, this stiff, cholesterol-packed fat bubble disguises HIV as native human tissue while anchoring its sparse fusion spikes.',
        story:
          'Unlike coronaviruses that bud from indoor compartments, HIV steals its outer [[lipid cloak|phospholipid]] straight from armored [[cholesterol|cholesterol]] rafts on the T-cell [[plasma membrane|plasma-membrane]]—selected from underneath by greasy fingers on [[p17 Matrix|hiv-ma-real]]. Because the stolen membrane carries genuine host "don’t-attack-me" surface badges alongside sparse [[Env spikes|hiv-env-real]], the virion drifts past complement patrols like a wolf wearing an immune officer’s uniform until it fuses seamlessly into its next T-cell target.',
        blueprint: {
          role: 'Cholesterol- and sphingolipid-enriched host raft envelope cloaking the core and mediating neutral-pH fusion',
          arrivesFrom: 'ESCRT-scissioned lipid-raft microdomains of an infected T-cell [[plasma membrane|plasma-membrane]]',
          inside: 'Liquid-ordered [[phospholipid|phospholipid]], sphingomyelin, and [[cholesterol|cholesterol]] (~45 mol%) bilayer',
          deliversTo: 'Anchors [[Env gp41|hiv-env-real]] outside and [[p17 MA|hiv-ma-real]] inside until fusing with a new T-cell',
          loop: 'Incorporates host CD55/CD59 complement regulators during budding to evade lysis in human blood'
        },
        scientific:
          '~120 nm liquid-ordered (Lo-like) host-derived lipid bilayer enriched ~2–3-fold over bulk T-cell plasma membrane in cholesterol (~40–45 mol%), sphingomyelin, dihydrosphingomyelin, plasmalogen phosphatidylethanolamine, and inner-leaflet PI(4,5)P₂ (~150,000–300,000 lipids/virion). Scissioned at Gag assembly sites via ALIX/TSG101 recruitment of host ESCRT-III machinery; accommodates the unusually long (~150 aa) amphipathic cytoplasmic tail of gp41 and merges with target T-cell membranes at neutral pH.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Donor T-Cell Rafts', cargo: 'PI(4,5)P₂ & phospholipids' },
          { nodeId: 'cholesterol', label: 'Membrane Cholesterol', cargo: 'Liquid-ordered ~45 mol% rigidity' }
        ],
        to: [
          { nodeId: 'hiv-env-real', label: 'Env gp41 Spikes', cargo: 'Transmembrane raft anchor' },
          { nodeId: 'real-hiv-entry', label: 'Target T-Cell Synapse', cargo: 'Neutral-pH bilayer merger' }
        ]
      },
      es: {
        subtitle: 'El rígido manto de balsa de colesterol',
        simple:
          'Recortada directamente de la superficie externa de un linfocito infectado, esta burbuja grasa rica en colesterol disfraza al VIH de tejido humano propio mientras sostiene sus escasas espigas.',
        story:
          'A diferencia de los coronavirus que brotan de compartimentos internos, el VIH roba su [[manto de fosfolípidos|phospholipid]] directamente de balsas acorazadas de [[colesterol|cholesterol]] en la [[membrana plasmática|plasma-membrane]] del linfocito T, elegidas desde abajo por los dedos grasos de la [[Matriz p17|hiv-ma-real]]. Como ese abrigo arrastra credenciales humanas legítimas junto a sus contadas [[espigas Env|hiv-env-real]], el virión cruza la sangre como un infiltrado con uniforme oficial hasta fundirse con su siguiente víctima.',
        blueprint: {
          role: 'Envoltura de balsa lipídica rica en colesterol y esfingolípidos que camufla el núcleo y funde a pH neutro',
          arrivesFrom: 'Microdominios de balsa escindidos por ESCRT de la [[membrana plasmática|plasma-membrane]] de una célula T',
          inside: 'Bicapa líquido-ordenada de [[fosfolípidos|phospholipid]], esfingomielina y [[colesterol|cholesterol]] (~45 % molar)',
          deliversTo: 'Ancla [[Env gp41|hiv-env-real]] por fuera y [[MA p17|hiv-ma-real]] por dentro hasta fundirse con otro linfocito',
          loop: 'Arrastra proteínas humanas CD55/CD59 durante la gemación para evitar que el complemento lo destruya'
        },
        scientific:
          'Bicapa lipídica derivada del huésped en fase líquido-ordenada (~120 nm) enriquecida 2–3 veces respecto a la membrana plasmática global en colesterol (~40–45 % molar), esfingomielina, plasmalógenos y PI(4,5)P₂ interno (~150.000–300.000 lípidos/virión). Escindida en puntos de ensamblaje Gag mediante reclutamiento de ESCRT-III vía TSG101/ALIX; aloja la larga cola citoplasmática anfipática (~150 aa) de gp41 y se fusiona con linfocitos diana a pH neutro.',
        from: [
          { nodeId: 'plasma-membrane', label: 'Balsas del linfocito donante', cargo: 'PI(4,5)P₂ y fosfolípidos' },
          { nodeId: 'cholesterol', label: 'Colesterol de membrana', cargo: 'Rigidez líquido-ordenada (~45 %)' }
        ],
        to: [
          { nodeId: 'hiv-env-real', label: 'Espigas Env gp41', cargo: 'Anclaje transmembrana' },
          { nodeId: 'real-hiv-entry', label: 'Sinapsis con linfocito diana', cargo: 'Fusión de bicapas a pH neutro' }
        ]
      }
    },
    ma: {
      en: {
        subtitle: 'The Myristoyl-Anchored Hull Lining',
        simple:
          'Lining the inner wall of HIV’s fat bubble like triangular hull plates, Matrix proteins use flip-out greasy anchors to pick the right exit patch on the host membrane and pull Env spikes aboard.',
        story:
          'While HIV is still an unfinished polyprotein inside an infected cell, the [[p17 Matrix|hiv-ma-real]] domain acts as its getaway navigator. Touching PI(4,5)P₂ [[phospholipids|phospholipid]] on the inner face of the [[plasma membrane|plasma-membrane]], each triangular trimer pops out a greasy myristoyl claw that locks into the lipid raft while framing hexagonal openings that corral the long indoor tails of [[Env spikes|hiv-env-real]]—then steps aside at fusion so the [[stealth cone|real-hiv-cone]] sails free.',
        blueprint: {
          role: 'Myristoylated inner-leaflet trimer shell directing raft assembly and gp41 tail incorporation',
          arrivesFrom: 'Translated as the N-terminal domain of Gag on cytosolic [[ribosomes|ribosome]], cleaved by viral protease',
          inside: '~2,500 copies of [[p17 MA|hiv-ma-real]] arranged as hexamers-of-trimers with C14 myristoyl lipid anchors',
          deliversTo: 'Lines the viral [[phospholipid|phospholipid]] hull and releases the [[capsid cone|real-hiv-cone]] upon T-cell fusion',
          loop: 'Ensures newly budding virions capture [[Env trimers|hiv-env-real]] before ESCRT pinches off the membrane'
        },
        scientific:
          'Peripheral inner-membrane matrix shell (~2,500–3,000 copies of 132-aa p17 MA, ~17 kDa; trimer crystal PDB 1HIW; mature cryo-ET hexamer-of-trimers lattice PDB 7OVQ). Co-translationally N-myristoylated at Gly2; binding of its highly basic region (Lys18–Lys32) to plasma-membrane PI(4,5)P₂ triggers myristoyl exposure into the inner leaflet, while viral protease maturation rearranges the MA lattice around central apertures that cradle the ~150-aa gp41 cytoplasmic tail.',
        from: [
          { nodeId: 'ribosome', label: 'Host Cytosolic Ribosomes', cargo: 'Myristoylated Gag N-terminus' },
          { nodeId: 'phospholipid', label: 'Inner Leaflet PI(4,5)P₂', cargo: 'Myristoyl-switch trigger' }
        ],
        to: [
          { nodeId: 'hiv-env-real', label: 'Env gp41 Tails', cargo: 'Capture into budding virion' },
          { nodeId: 'real-hiv-cone', label: 'Mature Fullerene Cone', cargo: 'Uncoupled release at entry' }
        ]
      },
      es: {
        subtitle: 'El forro del casco con anclas de miristoílo',
        simple:
          'Tapizando por dentro la burbuja del VIH como placas triangulares de un casco, las proteínas de Matriz usan anclas grasas desplegables para elegir el punto exacto de salida y embarcar las espigas Env.',
        story:
          'Cuando el VIH aún es una cadena sin cortar dentro de la célula infectada, el dominio de [[Matriz p17|hiv-ma-real]] ejerce de navegante de huida. Al tocar [[fosfolípidos|phospholipid]] PI(4,5)P₂ bajo la [[membrana plasmática|plasma-membrane]], cada trímero triangular despliega una garra grasa de miristoílo que se clava en la balsa lipídica mientras forma aros que atrapan las largas colas internas de las [[espigas Env|hiv-env-real]], apartándose luego tras la fusión para soltar el [[cono furtivo|real-hiv-cone]].',
        blueprint: {
          role: 'Corteza trimérica miristoilada de la hoja interna que guía la gemación y captura colas gp41',
          arrivesFrom: 'Extremo N-terminal de Gag traducido en [[ribosomas|ribosome]] citosólicos y escindido por proteasa viral',
          inside: '~2.500 copias de [[MA p17|hiv-ma-real]] en red de hexámeros de trímeros con anclas C14 de miristoílo',
          deliversTo: 'Reviste la bicapa de [[fosfolípidos|phospholipid]] y libera el [[cono capsídico|real-hiv-cone]] al fundirse',
          loop: 'Garantiza que los viriones en gemación embarquen [[trímeros Env|hiv-env-real]] antes del cierre ESCRT'
        },
        scientific:
          'Corteza periférica de la hoja interna (~2.500–3.000 copias de p17 MA de 132 aa, ~17 kDa; cristal del trímero PDB 1HIW; red madura crio-ET de hexámeros de trímeros PDB 7OVQ). N-miristoilada cotraduccionalmente en Gly2; la unión de su parche básico (Lys18–Lys32) a PI(4,5)P₂ expone el miristato hacia la bicapa interna, mientras la maduración por proteasa reconfigura la red de MA abriendo cavidades centrales que alojan la cola citoplasmática (~150 aa) de gp41.',
        from: [
          { nodeId: 'ribosome', label: 'Ribosomas citosólicos', cargo: 'Extremo N miristoilado de Gag' },
          { nodeId: 'phospholipid', label: 'PI(4,5)P₂ de hoja interna', cargo: 'Activación del ancla grasa' }
        ],
        to: [
          { nodeId: 'hiv-env-real', label: 'Colas internas de gp41', cargo: 'Retención en la yema viral' },
          { nodeId: 'real-hiv-cone', label: 'Cono maduro de fullereno', cargo: 'Liberación libre tras la entrada' }
        ]
      }
    },
    capsid: {
      en: {
        subtitle: 'The Armored Hexamer Vault & Fuel Valve',
        simple:
          'Over two hundred six-sided p24 plates build the curved body of HIV’s stealth cone—hiding the viral genome from cytosolic alarms all the way into the nucleus while vacuuming DNA letters through central pinholes.',
        story:
          'Once membrane fusion drops the core into a hostile T-cell cytosol crawling with DNA-sensing alarms, ~216 [[p24 hexamers|hiv-ca-hex-real]] keep the heist completely dark. Surfing [[microtubules|microtubule]] and charming [[nuclear pore|nuclear-pore]] gatekeepers into letting the entire cone squeeze indoors intact, each hexamer’s positively charged central iris sucks host [[nucleotides|nucleotide]] inside to feed [[Reverse Transcriptase|hiv-rt-real]] without ever opening the safe.',
        blueprint: {
          role: 'Curved hexagonal fullerene armor (~216 hexamers) cloaking reverse transcription and transiting the NPC',
          arrivesFrom: 'Self-assembled inside maturing virions after viral protease liberates p24 CA from Gag',
          inside: '~216 planar [[p24 hexamers|hiv-ca-hex-real]] stabilized by host IP6 around electropositive Arg18 dNTP pores',
          deliversTo: 'Ferries intact [[RT|hiv-rt-real]]/cDNA across [[microtubules|microtubule]] and through the [[nuclear pore|nuclear-pore]]',
          loop: 'Uncoats only inside the [[nucleus|nucleus]] near active genes—targeted clinically by capsid inhibitor lenacapavir'
        },
        scientific:
          'Curved hexagonal lattice of the mature fullerene cone (~216 hexamers of 231-aa p24 CA, ~1,300 total subunits; hexamer crystal PDB 3H4E / 4XFX; complete cone PDB 3J3Q). Six N-terminal α-helical domains form a central β-hairpin-gated Arg18 electropositive channel stabilized by host IP6 that imports dNTPs for intraluminal DNA synthesis while shielding nucleic acids from cGAS; FG-binding pockets between adjacent NTD–CTD interfaces sequentially engage CypA, BICD2/FEZ1 motor adaptors, Nup153, and CPSF6 for intact translocation through the ~64 nm dilated T-cell nuclear pore.',
        from: [
          { nodeId: 'microtubule', label: 'Host Microtubule Track', cargo: 'Dynein-driven transport' },
          { nodeId: 'nucleotide', label: 'Cytosolic dNTP Pool', cargo: 'Pore import via Arg18 ring' }
        ],
        to: [
          { nodeId: 'hiv-rt-real', label: 'Luminal Reverse Transcriptase', cargo: 'Shielded dNTP fuel supply' },
          { nodeId: 'nuclear-pore', label: 'Host Nuclear Pore (NPC)', cargo: 'Intact FG-pocket passage' }
        ]
      },
      es: {
        subtitle: 'La bóveda hexamérica blindada y válvula de combustible',
        simple:
          'Más de doscientas placas hexagonales p24 forman el cuerpo curvo del cono furtivo del VIH, ocultando el genoma frente a las alarmas celulares hasta entrar al núcleo mientras aspiran letras de ADN por poros centrales.',
        story:
          'En cuanto la fusión deposita el núcleo viral en un citosol plagado de sensores inmunes, ~216 [[hexámeros p24|hiv-ca-hex-real]] mantienen el golpe en secreto absoluto. Deslizándose por [[microtúbulos|microtubule]] y persuadiendo a los guardianes del [[poro nuclear|nuclear-pore]] para dejar pasar el cono entero sin desmontar, el iris positivo en el centro de cada hexámero aspira [[nucleótidos|nucleotide]] celulares para alimentar a la [[Transcriptasa Inversa|hiv-rt-real]] a puerta cerrada.',
        blueprint: {
          role: 'Blindaje hexagonal curvo de fullereno (~216 hexámeros) que oculta la retrotranscripción y cruza el poro nuclear',
          arrivesFrom: 'Autoensamblado dentro del virión en maduración cuando la proteasa viral libera p24 CA de Gag',
          inside: '~216 [[hexámeros p24|hiv-ca-hex-real]] estabilizados por IP6 con poros centrales Arg18 importadores de dNTP',
          deliversTo: 'Transporta la [[TI|hiv-rt-real]] y el ADNc por [[microtúbulos|microtubule]] a través del [[poro nuclear|nuclear-pore]]',
          loop: 'Se desensambla recién dentro del [[núcleo|nucleus]] junto a genes activos; diana del fármaco lenacapavir'
        },
        scientific:
          'Red hexagonal curva del cono maduro de fullereno (~216 hexámeros de p24 CA de 231 aa; cristal PDB 3H4E / 4XFX; cono íntegro PDB 3J3Q). Seis dominios N-terminales conforman un poro electropositivo Arg18 regulado por horquilla β y estabilizado por IP6 celular que importa dNTPs para la síntesis intraluminal de ADN ocultándola de cGAS; sus bolsillos hidrofóbicos intersubunidad reclutan secuencialmente CypA, adaptadores motores, Nup153 y CPSF6 para atravesar íntegro el poro nuclear dilatado (~64 nm).',
        from: [
          { nodeId: 'microtubule', label: 'Riel de microtúbulos', cargo: 'Transporte motor hacia el núcleo' },
          { nodeId: 'nucleotide', label: 'Reserva citosólica de dNTP', cargo: 'Importación por anillo Arg18' }
        ],
        to: [
          { nodeId: 'hiv-rt-real', label: 'Transcriptasa Inversa luminal', cargo: 'Suministro protegido de dNTPs' },
          { nodeId: 'nuclear-pore', label: 'Poro nuclear humano (CPN)', cargo: 'Cruce íntegro vía bolsillos FG' }
        ]
      }
    },
    pentamer: {
      en: {
        subtitle: 'Euler’s Twelve Cornerstones of the Cone',
        simple:
          'Pure hexagons can roll into a tube but can never seal into a closed capsule; HIV places five of these pentagons at the narrow nose and seven at the wide rear to lock its stealth cone shut.',
        story:
          'Geometry sets an unbreakable rule for every polyhedral safe-maker: closing a sheet of [[six-sided hexamers|hiv-ca-hex-real]] requires exactly twelve five-sided corners. By clustering five [[p24 pentamers|hiv-ca-pent-real]] at one end and seven at the other, HIV sculpts a tapered nose narrow enough (~16 nm) to nose-dive straight into the central channel of a [[nuclear pore|nuclear-pore]], bursting open only after internal DNA pressure pops its seams inside the [[nucleus|nucleus]].',
        blueprint: {
          role: 'Twelve five-fold vertex disclinations sealing the fullerene cone and shaping its tapered nuclear-entry tip',
          arrivesFrom: 'Quasi-equivalent five-fold switching of identical 231-aa p24 CA subunits during core condensation',
          inside: '5 acute-tip + 7 wide-dome [[p24 pentamers|hiv-ca-pent-real]] pinned by high-charge IP6/Arg18 rings',
          deliversTo: 'Closes the ~216 [[CA hexamer|hiv-ca-hex-real]] lattice and wedges narrow-end-first into the [[nuclear pore|nuclear-pore]]',
          loop: 'Strain accumulated at pentamer seams helps crack the vault open once double-stranded [[DNA|dna]] finishes inside'
        },
        scientific:
          'Exactly 12 homopentameric p24 CA vertices (~8.5 nm diameter; crystal PDB 3P05, in situ cryo-ET PDB 5MCY) mandated by Euler’s theorem (∑disclinations = 12 × π/3 = 4π) to close the hexagonal fullerene lattice (PDB 3J3Q). Asymmetric distribution—5 pentamers at the ~16 nm narrow tip and 7 across the ~32 nm wide cap—is governed by a TVGG58–61 loop/3₁₀-helix conformational switch and heightened IP6 coordination, producing the conical taper required to dock into NPC FG-meshwork.',
        from: [
          { nodeId: 'hiv-ca-hex-real', label: 'Surrounding CA Hexamers', cargo: 'Curved hexagonal lattice edges' },
          { nodeId: 'alpha-helix', label: 'CA NTD Helical Bundles', cargo: 'TVGG quasi-equivalent switch' }
        ],
        to: [
          { nodeId: 'real-hiv-cone', label: 'Sealed Fullerene Cone', cargo: '5 narrow + 7 wide closed vertices' },
          { nodeId: 'nuclear-pore', label: 'Host Nuclear Pore Channel', cargo: '16 nm tapered nose-first entry' }
        ]
      },
      es: {
        subtitle: 'Las doce piedras angulares de Euler',
        simple:
          'Los hexágonos puros pueden enrollarse en un tubo pero jamás cerrar una cápsula: el VIH coloca cinco de estos pentágonos en la punta estrecha y siete en la cúpula ancha para sellar su cono furtivo.',
        story:
          'La geometría dicta una ley inquebrantable a todo fabricante de cajas fuertes: cerrar una malla de [[hexámeros de seis lados|hiv-ca-hex-real]] exige exactamente doce esquinas de cinco lados. Agrupando cinco [[pentámeros p24|hiv-ca-pent-real]] en un extremo y siete en el opuesto, el VIH esculpe una proa afilada (~16 nm) que encaja de punta en el canal central del [[poro nuclear|nuclear-pore]], abriéndose por sus costuras recién cuando la presión del ADN terminado la rompe dentro del [[núcleo|nucleus]].',
        blueprint: {
          role: 'Doce vértices pentagonales que cierran el cono de fullereno y afilan su proa de entrada nuclear',
          arrivesFrom: 'Conmutación cuasi-equivalente pentagonal de las mismas subunidades p24 CA durante la maduración',
          inside: '5 [[pentámeros p24|hiv-ca-pent-real]] en el ápice agudo + 7 en el domo ancho estabilizados por IP6/Arg18',
          deliversTo: 'Sella la red de ~216 [[hexámeros CA|hiv-ca-hex-real]] y enfila la punta estrecha en el [[poro nuclear|nuclear-pore]]',
          loop: 'La tensión elástica en las juntas pentagonales facilita la apertura cuando culmina la síntesis de [[ADN|dna]]'
        },
        scientific:
          'Exactamente 12 vértices homopentaméricos de p24 CA (~8,5 nm de diámetro; cristal PDB 3P05, crio-ET in situ PDB 5MCY) impuestos por el teorema de Euler para cerrar la red hexagonal de fullereno (PDB 3J3Q). Su reparto asimétrico —5 pentámeros en la punta estrecha de ~16 nm y 7 en la cúpula ancha de ~32 nm— depende del interruptor conformacional TVGG58–61 y de una intensa coordinación central con IP6, generando el perfil cónico idóneo para penetrar el poro nuclear.',
        from: [
          { nodeId: 'hiv-ca-hex-real', label: 'Hexámeros CA vecinos', cargo: 'Bordes curvos de la malla' },
          { nodeId: 'alpha-helix', label: 'Haces helicoidales NTD', cargo: 'Conmutador geométrico TVGG' }
        ],
        to: [
          { nodeId: 'real-hiv-cone', label: 'Cono cerrado de fullereno', cargo: '5 vértices agudos + 7 anchos' },
          { nodeId: 'nuclear-pore', label: 'Canal del poro nuclear', cargo: 'Inserción de proa de 16 nm' }
        ]
      }
    },
    rna: {
      en: {
        subtitle: 'The Twin Backup Scrolls Inside the Safe',
        simple:
          'Uniquely among viruses, HIV packs two complete copies of its RNA code kissed together at one end—letting its copying enzyme jump tracks if one strand breaks while shuffling mutations on the fly.',
        story:
          'Every [[HIV-1 stealth cone|real-hiv-cone]] is pseudodiploid: inside ride two 9,719-letter [[(+)ssRNA scrolls|rna]] linked by a "kissing-loop" handshake, draped in zinc-knuckle NCp7 chaperones, and pre-primed with a stolen human [[tRNA|trna]] starter tab. As [[Reverse Transcriptase|hiv-rt-real]] copies them backward into [[DNA|dna]] and shreds the RNA behind itself, it hops freely between the twin scrolls—patching nicked templates and blending two parent viruses into brand-new drug-resistant hybrids.',
        blueprint: {
          role: 'Dimeric 9.7 kb (+)ssRNA genome complexed with NCp7 and tRNA^Lys3 primer for recombinogenic RT synthesis',
          arrivesFrom: 'Transcribed by host [[RNA Polymerase II|pol-ii]] from integrated provirus and selected via Ψ packaging hairpins',
          inside: 'Two 9,719-nt [[(+)ssRNA|rna]] strands dimerized at DIS, coated by ~1,500 NCp7 zinc-knuckle proteins + [[tRNA|trna]]^Lys3',
          deliversTo: 'Templates [[Reverse Transcriptase|hiv-rt-real]] to synthesize linear dsDNA before RNase H degrades the RNA',
          loop: 'Strand-transfer jumps between the two sibling RNAs generate rapid genetic recombination every cycle'
        },
        scientific:
          'Noncovalently dimerized pair of capped, polyadenylated 9,719-nucleotide (+)ssRNA strands (~2 × 3.1 MDa; 5′-leader packaging/dimerization NMR structure PDB 6BG9) joined at the palindromic Dimerization Initiation Site (DIS), condensed by ~1,500 copies of 55-aa Nucleocapsid (NCp7, two CCHC Zn²⁺ knuckles, PDB 1A1T), and annealed at the 18-nt Primer Binding Site (PBS) to host tRNA^Lys3. Encodes gag, pol, env, regulatory tat/rev, and accessory vif, vpr, vpu, nef.',
        from: [
          { nodeId: 'pol-ii', label: 'Host RNA Polymerase II', cargo: 'Full-length 9.7 kb transcripts' },
          { nodeId: 'trna', label: 'Hijacked Host tRNA^Lys3', cargo: 'Annealed 18-nt DNA primer' }
        ],
        to: [
          { nodeId: 'hiv-rt-real', label: 'Reverse Transcriptase', cargo: 'Dual recombinogenic templates' },
          { nodeId: 'dna', label: 'Linear Proviral dsDNA', cargo: 'LTR-flanked reverse transcript' }
        ]
      },
      es: {
        subtitle: 'Los dos pergaminos gemelos dentro de la caja fuerte',
        simple:
          'Caso único entre los virus, el VIH guarda dos copias completas de su ARN unidas por un extremo, permitiendo que su enzima copiadora salte de vía si una hebra se rompe y mezcle mutaciones sobre la marcha.',
        story:
          'Cada [[cono furtivo del VIH-1|real-hiv-cone]] viaja con respaldo doble: dentro van dos [[pergaminos de ARNmc(+)|rna]] de 9.719 letras enlazados por un «bucle de beso», arropados por proteínas NCp7 con dedos de zinc y cebados con un [[ARNt|trna]] humano robado como pestaña de arranque. Mientras la [[Transcriptasa Inversa|hiv-rt-real]] los copia hacia atrás en [[ADN|dna]] y destruye el ARN leído, salta de un pergamino al otro reparando roturas y combinando dos linajes en híbridos resistentes.',
        blueprint: {
          role: 'Genoma dimérico de ARNmc(+) de 9,7 kb recubierto por NCp7 y cebado por tRNA^Lys3 para retrotranscripción',
          arrivesFrom: 'Transcrito por la [[ARN Polimerasa II|pol-ii]] humana desde el provirus y seleccionado por señales Ψ',
          inside: 'Dos hebras de [[ARNmc(+)|rna]] de 9.719 nt unidas en DIS, ~1.500 copias NCp7 con Zn²⁺ y [[ARNt|trna]]^Lys3',
          deliversTo: 'Sirve de molde doble a la [[Transcriptasa Inversa|hiv-rt-real]] antes de ser degradado por RNasa H',
          loop: 'Los saltos de hebra entre ambas copias hermanas disparan la recombinación genética en cada ciclo'
        },
        scientific:
          'Par dimérico no covalente de hebras de ARNmc(+) de 9.719 nucleótidos con caperuza 5′ y cola poli(A) (~2 × 3,1 MDa; estructura RMN de la región líder 5′ PDB 6BG9) unido en el sitio palindrómico DIS, condensado por ~1.500 copias de Nucleocápside NCp7 (55 aa, dos dedos de zinc CCHC, PDB 1A1T) e hibridado en el sitio PBS de 18 nt con tRNA^Lys3 celular. Codifica gag, pol, env, los reguladores tat/rev y los factores accesorios vif, vpr, vpu y nef.',
        from: [
          { nodeId: 'pol-ii', label: 'ARN Polimerasa II huésped', cargo: 'Transcritos íntegros de 9,7 kb' },
          { nodeId: 'trna', label: 'tRNA^Lys3 humano secuestrado', cargo: 'Cebador hibridado de 18 nt' }
        ],
        to: [
          { nodeId: 'hiv-rt-real', label: 'Transcriptasa Inversa', cargo: 'Doble molde recombinogénico' },
          { nodeId: 'dna', label: 'ADNbc proviral lineal', cargo: 'Copia flanqueada por extremos LTR' }
        ]
      }
    },
    rt: {
      en: {
        subtitle: 'The Backward-Writing Master Forger',
        simple:
          'Sealed inside the traveling cone, Reverse Transcriptase reads viral RNA backward into double-stranded DNA while shredding the RNA original—making sloppy typos that help HIV outsmart medicines.',
        story:
          'Fed by host nucleotides streaming through the [[capsid hexamer pores|hiv-ca-hex-real]], asymmetric [[Reverse Transcriptase|hiv-rt-real]] rewrites the rules of molecular biology in transit toward the nucleus. Its p66 polymerase hand copies the twin [[RNA scrolls|rna]] into sturdy double-stranded [[DNA|dna]] while its built-in RNase H blade mulches the RNA template behind it—and because it carries zero proofreading brakes, every slight typo breeds fresh viral disguises before handing the finished DNA off to [[Integrase|hiv-in-real]].',
        blueprint: {
          role: 'p66/p51 heterodimeric polymerase + RNase H converting single-stranded viral RNA into linear dsDNA',
          arrivesFrom: 'Cleaved from Gag-Pol (~50–100 copies/virion) inside the sealed [[fullerene cone|real-hiv-cone]]',
          inside: 'Catalytic p66 polymerase/RNase H hand braced by structural p51 clamp ([[RT heterodimer|hiv-rt-real]])',
          deliversTo: 'Synthesizes LTR-flanked linear viral [[dsDNA|dna]] inside the uncoating nuclear capsid for [[Integrase|hiv-in-real]]',
          loop: 'High mutation rate (~3×10⁻⁵/nt) + template switching fuels escape; primary target of NRTI and NNRTI drugs'
        },
        scientific:
          'Asymmetric p66/p51 heterodimer (~117 kDa; catalytic dsDNA ternary complex PDB 1RTD; RNA/DNA hybrid complex PDB 4PQU). The 560-aa p66 subunit houses both the Mg²⁺-dependent YMDD183–186 polymerase active site (incorporating dNTPs at ~3–20 nt/s without 3′→5′ exonucleolytic proofreading) and the C-terminal DEDD RNase H domain positioned ~18 bp away to cleave RNA in RNA:DNA hybrids, sparing polypurine tracts (PPT/cPPT) to prime plus-strand synthesis and generate LTR-flanked linear dsDNA.',
        from: [
          { nodeId: 'rna', label: 'Diploid 9.7 kb Viral RNA', cargo: 'tRNA-primed RNA template' },
          { nodeId: 'nucleotide', label: 'Imported Host dNTPs', cargo: 'dATP, dTTP, dGTP, dCTP' }
        ],
        to: [
          { nodeId: 'dna', label: 'Linear Viral dsDNA', cargo: 'LTR-ended DNA duplex + flap' },
          { nodeId: 'hiv-in-real', label: 'Tetrameric Integrase', cargo: 'Substrate for intasome assembly' }
        ]
      },
      es: {
        subtitle: 'El maestro falsificador que escribe hacia atrás',
        simple:
          'Encerrada en el cono viajero, la Transcriptasa Inversa reescribe el ARN viral hacia atrás en ADN de doble hebra mientras tritura el ARN original, cometiendo erratas que ayudan al VIH a burlar medicamentos.',
        story:
          'Alimentada por nucleótidos celulares que entran por los poros de los [[hexámeros p24|hiv-ca-hex-real]], la [[Transcriptasa Inversa|hiv-rt-real]] invierte el dogma central mientras viaja rumbo al núcleo. Su mano polimerasa p66 copia los [[pergaminos de ARN|rna]] en [[ADN|dna]] resistente mientras su cuchilla trasera RNasa H destruye el molde leído; y como carece de corrector ortográfico, cada errata engendra nuevos disfraces antes de entregar el ADN terminado a la [[Integrasa|hiv-in-real]].',
        blueprint: {
          role: 'Polimerasa + RNasa H heterodimérica p66/p51 que convierte el ARN viral monocatenario en ADNbc lineal',
          arrivesFrom: 'Escindida de Gag-Pol (~50–100 copias/virión) dentro del [[cono cerrado de fullereno|real-hiv-cone]]',
          inside: 'Mano catalítica p66 polimerasa/RNasa H sostenida por la pinza estructural p51 ([[heterodímero TI|hiv-rt-real]])',
          deliversTo: 'Entrega [[ADNbc|dna]] viral lineal con extremos LTR dentro del núcleo para la [[Integrasa|hiv-in-real]]',
          loop: 'Su alta tasa de error (~3×10⁻⁵/nt) y recombinación impulsa el escape viral; diana clave de fármacos ITIN/ITINN'
        },
        scientific:
          'Heterodímero asimétrico p66/p51 (~117 kDa; complejo ternario catalítico con ADN PDB 1RTD; híbrido ARN/ADN PDB 4PQU). La subunidad p66 (560 aa) aloja tanto el centro polimerasa YMDD183–186 dependiente de Mg²⁺ (~3–20 nt/s, sin exonucleasa correctora 3′→5′) como el dominio C-terminal RNasa H tipo DEDD a ~18 pb de distancia, que degrada el molde de ARN respetando los tractos de polipurina (PPT/cPPT) para cebar la hebra positiva y completar el ADNbc flanqueado por LTR.',
        from: [
          { nodeId: 'rna', label: 'ARN viral diploide 9,7 kb', cargo: 'Molde cebado con tRNA^Lys3' },
          { nodeId: 'nucleotide', label: 'dNTPs celulares importados', cargo: 'dATP, dTTP, dGTP y dCTP' }
        ],
        to: [
          { nodeId: 'dna', label: 'ADNbc viral lineal', cargo: 'Dúplex terminado con extremos LTR' },
          { nodeId: 'hiv-in-real', label: 'Integrasa tetramérica', cargo: 'Sustrato para el intasoma' }
        ]
      }
    },
    int: {
      en: {
        subtitle: 'The Permanent Chromosomal Welder',
        simple:
          'Once HIV’s stealth cone reaches the cell nucleus, Integrase snips open a busy human chromosome and splices the newly forged viral DNA permanently into the cell’s own genetic blueprint.',
        story:
          'Crossing the [[nuclear pore|nuclear-pore]] and shedding its capsid shell inside the [[nucleus|nucleus]], the heist reaches the point of no return. Clamped onto both ends of the newly written viral [[DNA|dna]], [[Integrase|hiv-in-real]] trims two letters off each 3′ tip, grabs host chromatin reader LEDGF/p75 as a local guide to busy [[chromosomes|chromosome]], and executes a surgical cut-and-weld—tricking the T-cell’s own DNA-repair crew into sealing the virus into human heredity forever.',
        blueprint: {
          role: 'Multimeric DDE polynucleotidyl transferase splicing reverse-transcribed viral DNA into host chromatin',
          arrivesFrom: 'Packaged from Gag-Pol C-terminus and carried through the [[nuclear pore|nuclear-pore]] inside the cone',
          inside: 'Tetrameric/hexadecameric intasome of [[p32 Integrase|hiv-in-real]] clamping both viral LTR [[DNA|dna]] ends',
          deliversTo: 'Cuts a 5-bp staggered nick in LEDGF/p75-bound active [[chromatin|chromatin-fiber]] and joins viral 3′ ends',
          loop: 'Host repair seals the gaps into a permanent provirus; blocked clinically by INSTIs (dolutegravir, bictegravir)'
        },
        scientific:
          '288-aa viral polynucleotidyl transferase (~32 kDa monomer; core+CTD crystal PDB 1EX4; functional lentiviral/retroviral intasome cryo-EM/crystal PDB 3OS0 / 5U1C). Comprises an HHCC Zn²⁺-binding NTD, an RNase H-fold catalytic core with a two-Mg²⁺ DDE triad (Asp64, Asp116, Glu152), and an SH3-like DNA-binding CTD. Catalyzes 3′-processing (removing GT dinucleotides from U3/U5 LTR ends to expose 3′-OH) followed by concerted transesterification across a 5-bp stagger in LEDGF/p75-tethered active host genes.',
        from: [
          { nodeId: 'hiv-rt-real', label: 'Reverse Transcriptase', cargo: 'Finished linear viral dsDNA' },
          { nodeId: 'nuclear-pore', label: 'Nuclear Pore Transit', cargo: 'Intranuclear capsid delivery' }
        ],
        to: [
          { nodeId: 'chromatin-fiber', label: 'Active Host Chromatin', cargo: '5-bp staggered strand transfer' },
          { nodeId: 'chromosome', label: 'Human T-Cell Chromosome', cargo: 'Permanent integrated provirus' }
        ]
      },
      es: {
        subtitle: 'El soldador cromosómico permanente',
        simple:
          'Cuando el cono furtivo del VIH llega al núcleo celular, la Integrasa corta un cromosoma humano activo y suelda el ADN viral recién escrito de forma permanente en el libro genético de la célula.',
        story:
          'Tras cruzar el [[poro nuclear|nuclear-pore]] y abrir su coraza en pleno [[núcleo|nucleus]], el golpe alcanza el punto sin retorno. Aferrada a los dos extremos del [[ADN|dna]] recién forjado, la [[Integrasa|hiv-in-real]] recorta dos letras de cada punta 3′, toma como guía al factor humano LEDGF/p75 hasta los [[cromosomas|chromosome]] más activos y ejecuta un corte y empalme quirúrgico, engañando al propio equipo reparador de la célula para que selle al virus en la herencia humana de por vida.',
        blueprint: {
          role: 'Polinucleotidil transferasa multimérica DDE que empalma el ADN viral retrotranscrito en la cromatina humana',
          arrivesFrom: 'Liberada del extremo C-terminal de Gag-Pol y transportada por el [[poro nuclear|nuclear-pore]] en el cono',
          inside: 'Intasoma multimérico de [[Integrasa p32|hiv-in-real]] sujetando ambos extremos LTR del [[ADN|dna]] viral',
          deliversTo: 'Abre una muesca escalonada de 5 pb en [[cromatina|chromatin-fiber]] activa unida a LEDGF/p75 y suelda los extremos 3′',
          loop: 'La reparación celular sella el provirus perpetuo; bloqueada clínicamente por dolutegravir y bictegravir'
        },
        scientific:
          'Polinucleotidil transferasa viral de 288 aa (~32 kDa/monómero; cristal núcleo+CTD PDB 1EX4; intasoma funcional retroviral/lentiviral PDB 3OS0 / 5U1C). Consta de un dominio NTD coordinador de Zn²⁺ (HHCC), un núcleo catalítico con tríada DDE dependiente de dos Mg²⁺ (Asp64, Asp116, Glu152) y un dominio C-terminal tipo SH3 de unión a ADN. Cataliza el procesamiento 3′ (escisión del dinucleótido GT en extremos LTR) y la transferencia concertada de hebra con escalón de 5 pb en genes activos fijados por LEDGF/p75.',
        from: [
          { nodeId: 'hiv-rt-real', label: 'Transcriptasa Inversa', cargo: 'ADNbc viral lineal completo' },
          { nodeId: 'nuclear-pore', label: 'Tránsito por poro nuclear', cargo: 'Descarga intranuclear del cono' }
        ],
        to: [
          { nodeId: 'chromatin-fiber', label: 'Cromatina activa humana', cargo: 'Transferencia escalonada de 5 pb' },
          { nodeId: 'chromosome', label: 'Cromosoma del linfocito T', cargo: 'Provirus integrado permanente' }
        ]
      }
    },
    cd4: {
      en: {
        subtitle: 'The Hijacked Immune Commander Turned Sleeper Agent',
        simple:
          'Helper CD4+ T-cells are the generals of the human immune system—yet HIV uses their signature surface badges to break inside and turn their own chromosomes into permanent virus-printing factories.',
        story:
          'By targeting the very helper T-cell generals meant to coordinate antiviral defense, HIV pulls off biology’s ultimate inside job. Surface CD4 and [[CCR5/CXCR4 coreceptors|gpcr]] in the T-cell plasma membrane unwillingly unlock the front door for [[Env spikes|hiv-env-real]], and once [[Integrase|hiv-in-real]] splices proviral [[DNA|dna]] into a host chromosome, the cell becomes a silent double-agent—lying dormant in memory reservoirs for years or waking its own [[RNA Polymerase II|pol-ii]] to print fresh armies of HIV.',
        blueprint: {
          role: 'Target helper T-lymphocyte entry receptors (CD4 + CCR5/CXCR4) and chromosomal proviral reservoir',
          arrivesFrom: 'Host immune maturation displaying CD4 and [[GPCR coreceptors|gpcr]] on the [[plasma membrane|plasma-membrane]]',
          inside: 'Ig-like CD4 + 7-TM CCR5/CXCR4 at the surface; integrated 9.7 kb proviral [[DNA|dna]] in the [[nucleus|nucleus]]',
          deliversTo: 'Hosts [[Pol II|pol-ii]] transcription and [[ribosomal|ribosome]] translation of new Gag, Pol, and Env virions',
          loop: 'Resting memory CD4+ T-cells harbor silent proviral DNA invisible to immunity and antiretroviral drugs'
        },
        scientific:
          'Primary cellular target of HIV-1: human CD4+ T-helper lymphocytes co-expressing type I immunoglobulin-superfamily receptor CD4 (4 extracellular Ig domains D1–D4, PDB 1WIO/1GC1) and seven-transmembrane G-protein-coupled chemokine receptor CCR5 (R5-tropic, PDB 6MEO; absent in Δ32 homozygotes) or CXCR4 (X4-tropic, PDB 3ODU). Post-integration, the 9.7 kb LTR-flanked provirus in host chromatin either enters Tat/P-TEFb-amplified RNA Pol II productive transcription or establishes transcriptionally latent reservoirs (t½ ≈ 44 months).',
        from: [
          { nodeId: 'hiv-env-real', label: 'Viral Env gp120/gp41', cargo: 'CD4 + coreceptor breach' },
          { nodeId: 'hiv-in-real', label: 'Viral Integrase Intasome', cargo: 'Spliced proviral dsDNA' }
        ],
        to: [
          { nodeId: 'pol-ii', label: 'Host RNA Polymerase II', cargo: 'Tat-boosted viral RNA transcription' },
          { nodeId: 'real-hiv', label: 'Budding Progeny Virions', cargo: 'Lifelong sleeper-cell factory' }
        ]
      },
      es: {
        subtitle: 'El comandante inmunitario convertido en agente durmiente',
        simple:
          'Los linfocitos T CD4+ son los generales de nuestras defensas, pero el VIH usa sus propias insignias superficiales para infiltrarse y convertir sus cromosomas en fábricas permanentes de nuevos virus.',
        story:
          'Al atacar precisamente a los generales encargados de coordinar la defensa antiviral, el VIH consuma el golpe interno definitivo. Los receptores CD4 y [[CCR5/CXCR4|gpcr]] de la membrana plasmática abren sin querer la puerta a las [[espigas Env|hiv-env-real]], y en cuanto la [[Integrasa|hiv-in-real]] suelda el [[ADN|dna]] proviral en un cromosoma, el linfocito queda convertido en doble agente: puede ocultarse silencioso durante años como célula de memoria o despertar a su propia [[ARN Polimerasa II|pol-ii]] para imprimir ejércitos enteros de VIH.',
        blueprint: {
          role: 'Receptores de entrada del linfocito T colaborador (CD4 + CCR5/CXCR4) y reservorio cromosómico proviral',
          arrivesFrom: 'Maduración inmunitaria que exhibe CD4 y [[correceptores GPCR|gpcr]] en la [[membrana plasmática|plasma-membrane]]',
          inside: 'CD4 tipo inmunoglobulina + CCR5/CXCR4 en superficie; [[ADN|dna]] proviral de 9,7 kb integrado en el [[núcleo|nucleus]]',
          deliversTo: 'Aloja la transcripción por [[Pol II|pol-ii]] y traducción en [[ribosomas|ribosome]] de nuevos viriones',
          loop: 'Los linfocitos T de memoria en reposo guardan provirus latentes invisibles a defensas y antirretrovirales'
        },
        scientific:
          'Diana celular primaria del VIH-1: linfocitos T colaboradores humanos que coexpresan la glicoproteína CD4 de la superfamilia de inmunoglobulinas (dominios D1–D4, PDB 1WIO/1GC1) y el receptor acoplado a proteína G CCR5 (cepas R5, PDB 6MEO; ausente en homocigotos Δ32) o CXCR4 (cepas X4, PDB 3ODU). Tras la integración, el provirus de 9,7 kb flanqueado por LTR inicia transcripción productiva por ARN Pol II amplificada por Tat/P-TEFb o establece reservorios latentes de larga vida (t½ ≈ 44 meses).',
        from: [
          { nodeId: 'hiv-env-real', label: 'Espiga viral Env gp120/gp41', cargo: 'Apertura CD4 + correceptor' },
          { nodeId: 'hiv-in-real', label: 'Intasoma de Integrasa', cargo: 'Empalme del ADNbc proviral' }
        ],
        to: [
          { nodeId: 'pol-ii', label: 'ARN Polimerasa II humana', cargo: 'Transcripción viral activada por Tat' },
          { nodeId: 'real-hiv', label: 'Progenie viral en gemación', cargo: 'Fábrica celular perpetua' }
        ]
      }
    }
  }
};
