import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 14 (`real-cell-division` / `cell_divisionTour`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 46 of 48 cues (95.8%, > 95%) match base `cue.text` verbatim in `en.pop` with direct,
 *   clear, distraction-free biological prose.
 * - Exactly 2 cues (`div.ch3.s0.03` and `div.ch4.s2.02`) use grounded everyday mental
 *   models for conceptually complex molecular mechanisms:
 *   1. `div.ch3.s0.03` - Kinetochore bipolar tension pausing cohesin cleavage until every
 *      sister pair feels balanced pull (like opposite winches testing taut cables).
 *   2. `div.ch4.s2.02` - Meiotic crossing-over at chiasmata and four-way Holliday junctions
 *      exchanging homologous arms (like cutting two matched decks to swap card runs).
 */
export const PERSONAS_CELL_DIVISION: TourPersonaMap = {
  "real-cell-division": {
    "div.ch0.s0.01": {
      "en": {
        "pop": "Every cellular lineage survives by copying its full genome and dividing it without losing DNA.",
        "blueprint": "Division core objective: replicate the full DNA codebase and partition exact payloads without loss.",
        "scientific": "Cellular propagation requires semiconservative genome replication and high-fidelity chromosome segregation."
      },
      "es": {
        "pop": "Cada linaje celular sobrevive copiando todo su genoma y repartiéndolo sin perder ADN.",
        "blueprint": "Objetivo central: duplicar el código de ADN completo y repartir cargas exactas sin pérdidas.",
        "scientific": "La propagación celular exige replicación semiconservativa y segregación cromosómica de alta fidelidad."
      }
    },
    "div.ch0.s0.02": {
      "en": {
        "pop": "Inside this cutaway [[dividing cell|cell_cortex]], glowing [[spindle fibers|spindle_mt]] organize paired [[sister chromatids|sister_chromatids]].",
        "blueprint": "Inside this open [[cell chassis|cell_cortex]], dynamic [[spindle rails|spindle_mt]] align duplicated [[chromatid pairs|sister_chromatids]].",
        "scientific": "Within a 20 um [[eukaryotic cortex|cell_cortex]], polar [[microtubules|spindle_mt]] position paired [[sister chromatids|sister_chromatids]]."
      },
      "es": {
        "pop": "En esta [[célula en división|cell_cortex]], las [[fibras del huso|spindle_mt]] alinean [[cromátidas hermanas|sister_chromatids]] emparejadas.",
        "blueprint": "En este [[chasis abierto|cell_cortex]], los [[rieles del huso|spindle_mt]] ordenan [[pares de cromátidas|sister_chromatids]] duplicadas.",
        "scientific": "En una [[corteza eucariota|cell_cortex]] de 20 um, [[microtúbulos|spindle_mt]] polares ubican [[cromátidas hermanas|sister_chromatids]]."
      }
    },
    "div.ch0.s0.03": {
      "en": {
        "pop": "Above left, a 2 um E. coli rod splits by bacterial fission using an [[FtsZ Z-ring|ftsz_ring]].",
        "blueprint": "Upper left shows a 2 um E. coli unit executing binary fission via a mid-cell [[FtsZ constrictor|ftsz_ring]].",
        "scientific": "Upper left displays 2 um prokaryotic E. coli undergoing cytokinesis via a GTPase [[FtsZ ring|ftsz_ring]] (6UNX)."
      },
      "es": {
        "pop": "Arriba a la izquierda, un bacilo E. coli de 2 um se divide por fisión con un [[anillo Z FtsZ|ftsz_ring]].",
        "blueprint": "Arriba a la izquierda, una unidad E. coli de 2 um ejecuta fisión con un [[constrictor FtsZ|ftsz_ring]].",
        "scientific": "Arriba a la izquierda, E. coli (2 um) realiza citocinesis mediante el [[anillo FtsZ|ftsz_ring]] GTPasa (6UNX)."
      }
    },
    "div.ch0.s1.01": {
      "en": {
        "pop": "Prokaryotes use binary fission: copying one circular chromosome and pinching via [[FtsZ|ftsz_ring]].",
        "blueprint": "Mode A (fission): duplicate one circular chromosome and cleave the rod envelope using [[FtsZ|ftsz_ring]].",
        "scientific": "Prokaryotic binary fission copies one 4.6 Mbp circular chromosome and constricts via [[FtsZ|ftsz_ring]]."
      },
      "es": {
        "pop": "Los procariotas usan fisión binaria: copian un cromosoma circular y se cierran con [[FtsZ|ftsz_ring]].",
        "blueprint": "Modo A (fisión): duplicar un cromosoma circular y seccionar la envoltura mediante [[FtsZ|ftsz_ring]].",
        "scientific": "La fisión binaria procariota replica un cromosoma circular de 4,6 Mpb y constriñe con [[FtsZ|ftsz_ring]]."
      }
    },
    "div.ch0.s1.02": {
      "en": {
        "pop": "Somatic mitosis splits identical [[sister chromatids|sister_chromatids]] inside the [[cell cortex|cell_cortex]] into two 2n clones.",
        "blueprint": "Mode B (mitosis): separate identical [[sister copies|sister_chromatids]] inside the [[cortex|cell_cortex]] into two 2n units.",
        "scientific": "Equational mitosis partitions [[sister chromatids|sister_chromatids]] inside the [[cortex|cell_cortex]] (2n -> 2 x 2n)."
      },
      "es": {
        "pop": "La mitosis somática separa [[cromátidas hermanas|sister_chromatids]] en la [[corteza celular|cell_cortex]] en dos clones 2n.",
        "blueprint": "Modo B (mitosis): separa [[copias hermanas|sister_chromatids]] dentro de la [[corteza|cell_cortex]] en dos módulos 2n.",
        "scientific": "La mitosis ecuacional reparte [[cromátidas hermanas|sister_chromatids]] en la [[corteza|cell_cortex]] (2n -> 2 x 2n)."
      }
    },
    "div.ch0.s1.03": {
      "en": {
        "pop": "Germline meiosis pairs homologs into [[bivalents|bivalent]], swaps genes and yields four unique 1n gametes.",
        "blueprint": "Mode C (meiosis): pair homologs as [[bivalents|bivalent]], recombine segments and output four unique 1n cells.",
        "scientific": "Reductive meiosis synapses homologous [[bivalents|bivalent]], recombines alleles and yields 4 x 1n gametes."
      },
      "es": {
        "pop": "La meiosis germinal une homólogos en [[bivalentes|bivalent]], mezcla genes y forma cuatro gametos 1n únicos.",
        "blueprint": "Modo C (meiosis): acopla homólogos en [[bivalentes|bivalent]], recombina tramos y genera cuatro células 1n.",
        "scientific": "La meiosis reductiva sinapsa [[bivalentes|bivalent]] homólogos, recombina alelos y produce 4 gametos 1n."
      }
    },
    "div.ch1.s0.01": {
      "en": {
        "pop": "Zoom to E. coli, where two replication forks copy a 4.6 Mbp circular genome from oriC to ter.",
        "blueprint": "Inspect E. coli fission: dual replication forks run bidirectionally from oriC to the ter terminus.",
        "scientific": "In E. coli, bidirectional replisomes copy the 4.64 Mbp circular chromosome from oriC to ter (~40 min)."
      },
      "es": {
        "pop": "Acércate a E. coli, donde dos horquillas copian su genoma circular de 4,6 Mpb desde oriC hasta ter.",
        "blueprint": "Enfoque en E. coli: dos horquillas replicativas avanzan en sentido opuesto de oriC al término ter.",
        "scientific": "En E. coli, replisomas bidireccionales copian el cromosoma circular de 4,64 Mpb de oriC a ter (~40 min)."
      }
    },
    "div.ch1.s0.02": {
      "en": {
        "pop": "Active [[Par segregation|par_segregation]] machinery drives sister origins toward opposite bacterial poles.",
        "blueprint": "ATP-powered [[ParABS partitions|par_segregation]] route replicated oriC hubs to opposite ends of the rod.",
        "scientific": "[[ParABS/MukBEF|par_segregation]] complexes actively partition replicated oriC loci toward opposite cell poles."
      },
      "es": {
        "pop": "La maquinaria activa [[Par|par_segregation]] desplaza los orígenes hermanos hacia polos opuestos.",
        "blueprint": "El sistema [[ParABS|par_segregation]] con ATP dirige los nodos oriC duplicados a extremos opuestos.",
        "scientific": "Los complejos [[ParABS/MukBEF|par_segregation]] segregan activamente los loci oriC hacia polos opuestos."
      }
    },
    "div.ch1.s0.03": {
      "en": {
        "pop": "As the rod elongates, [[DNA translocases|par_segregation]] clear the terminus away from the mid-cell plane.",
        "blueprint": "During cell elongation, [[FtsK DNA pumps|par_segregation]] sweep trapped terminus loops clear of the septum.",
        "scientific": "Hexameric [[FtsK translocases|par_segregation]] (PDB 2IUU) pump ter DNA past mid-cell before septum closure."
      },
      "es": {
        "pop": "Al alargarse el bacilo, las [[translocasas de ADN|par_segregation]] despejan el término del plano central.",
        "blueprint": "Al crecer el casco, las [[bombas FtsK|par_segregation]] retiran el término de ADN fuera del septo.",
        "scientific": "Las [[translocasas FtsK|par_segregation]] hexaméricas (PDB 2IUU) bombean el ADN ter antes del cierre septal."
      }
    },
    "div.ch1.s1.01": {
      "en": {
        "pop": "Oscillating Min proteins block the poles so an [[FtsZ Z-ring|ftsz_ring]] assembles precisely at mid-cell.",
        "blueprint": "Pole-to-pole MinCDE waves veto polar assembly, centering the [[FtsZ Z-ring|ftsz_ring]] at exact mid-length.",
        "scientific": "MinCDE pole oscillations and SlmA nucleoid occlusion restrict [[FtsZ|ftsz_ring]] assembly to mid-cell."
      },
      "es": {
        "pop": "Las proteínas Min bloquean los polos para que el [[anillo Z FtsZ|ftsz_ring]] se arme justo en el centro.",
        "blueprint": "Ondas polares MinCDE bloquean los extremos y centran el [[anillo Z FtsZ|ftsz_ring]] a mitad exacta.",
        "scientific": "Las oscilaciones MinCDE y la oclusión SlmA restringen el ensamblaje de [[FtsZ|ftsz_ring]] al plano medio."
      }
    },
    "div.ch1.s1.02": {
      "en": {
        "pop": "Powered by GTP, [[FtsZ filaments|ftsz_ring]] treadmill around the waist and guide inward septum synthesis.",
        "blueprint": "GTP-fueled [[FtsZ tracks|ftsz_ring]] treadmill circumferentially, steering FtsW/PBP3 peptidoglycan wall growth.",
        "scientific": "GTPase [[FtsZ protofilaments|ftsz_ring]] (PDB 6UNX) treadmill to direct FtsW/PBP3 septal peptidoglycan synthesis."
      },
      "es": {
        "pop": "Con energía de GTP, los [[filamentos FtsZ|ftsz_ring]] giran en la cintura y guían el septo hacia dentro.",
        "blueprint": "Las [[pistas FtsZ|ftsz_ring]] con GTP avanzan en anillo dirigiendo la pared septal FtsW/PBP3.",
        "scientific": "Protofilamentos GTPasa [[FtsZ|ftsz_ring]] (PDB 6UNX) guían la síntesis septal de peptidoglicano FtsW/PBP3."
      }
    },
    "div.ch1.s1.03": {
      "en": {
        "pop": "Once the [[Z-ring|ftsz_ring]] closes behind cleared [[nucleoids|par_segregation]], two clonal bacteria separate cleanly.",
        "blueprint": "When the [[FtsZ septum|ftsz_ring]] seals behind partitioned [[chromosomes|par_segregation]], two identical rods detach.",
        "scientific": "Septum closure by [[FtsZ|ftsz_ring]] after [[ter clearance|par_segregation]] yields two clonal 1n daughter bacilli."
      },
      "es": {
        "pop": "Al cerrarse el [[anillo Z|ftsz_ring]] tras despejar los [[nucleoides|par_segregation]], dos bacterias clonales se separan.",
        "blueprint": "Al sellarse el [[septo FtsZ|ftsz_ring]] tras los [[cromosomas|par_segregation]], dos bacilos idénticos se desacoplan.",
        "scientific": "El cierre septal de [[FtsZ|ftsz_ring]] tras despejar [[ter|par_segregation]] genera dos bacilos 1n clonales."
      }
    },
    "div.ch2.s0.01": {
      "en": {
        "pop": "Now enter eukaryotic mitosis, where meters of linear DNA must travel cleanly without tangling.",
        "blueprint": "Switching to Mode B (mitosis): compact ~2 m of linear DNA into transportable mitotic payloads.",
        "scientific": "Eukaryotic mitosis compacts ~2 m of diploid linear chromatin ~10,000-fold for accurate segregation."
      },
      "es": {
        "pop": "Entra ahora en la mitosis eucariota, donde metros de ADN lineal deben viajar sin enredarse.",
        "blueprint": "Paso a Modo B (mitosis): compactar ~2 m de ADN lineal en cargas mitóticas manejables.",
        "scientific": "La mitosis eucariota compacta ~2 m de cromatina diploide unas 10.000 veces para segregarla bien."
      }
    },
    "div.ch2.s0.02": {
      "en": {
        "pop": "ATP-driven [[condensin|condensin]] rings extrude chromatin loops, packing DNA into sturdy [[sister chromatids|sister_chromatids]].",
        "blueprint": "ATP-powered [[condensin motors|condensin]] reel chromatin into stacked loops, stiffening [[sister chromatids|sister_chromatids]].",
        "scientific": "SMC [[condensin|condensin]] complexes (PDB 6YVU) extrude chromatin loops into 2-5 um [[sister chromatids|sister_chromatids]]."
      },
      "es": {
        "pop": "Los anillos [[condensina|condensin]] con ATP forman lazos y compactan el ADN en [[cromátidas hermanas|sister_chromatids]].",
        "blueprint": "Motores [[condensina|condensin]] con ATP enrollan la cromatina en bucles densos de [[cromátidas|sister_chromatids]].",
        "scientific": "Los complejos SMC [[condensina|condensin]] (PDB 6YVU) extruyen bucles en [[cromátidas hermanas|sister_chromatids]] de 2-5 um."
      }
    },
    "div.ch2.s0.03": {
      "en": {
        "pop": "Ring-shaped [[cohesin|cohesin]] clamps encircle both [[sister chromatids|sister_chromatids]] so copies stay paired until separation.",
        "blueprint": "Topological [[cohesin latches|cohesin]] lock paired [[sister chromatids|sister_chromatids]] together until anaphase release.",
        "scientific": "SMC1-SMC3-SCC1 [[cohesin|cohesin]] rings (PDB 6WG3) topologically embrace [[sister chromatids|sister_chromatids]] from S phase."
      },
      "es": {
        "pop": "Abrazaderas de [[cohesina|cohesin]] rodean ambas [[cromátidas hermanas|sister_chromatids]] para mantenerlas unidas hasta separarse.",
        "blueprint": "Seguros de [[cohesina|cohesin]] bloquean juntas las [[cromátidas hermanas|sister_chromatids]] hasta la liberación en anafase.",
        "scientific": "Anillos [[cohesina|cohesin]] SMC1-SMC3-SCC1 (PDB 6WG3) enlazan [[cromátidas hermanas|sister_chromatids]] desde la fase S."
      }
    },
    "div.ch2.s1.01": {
      "en": {
        "pop": "Mitotic kinases phosphorylate nuclear lamins, dissolving the [[nuclear envelope|nuclear_env]] into membrane vesicles.",
        "blueprint": "Cdk1 phosphorylation disassembles the [[nuclear enclosure|nuclear_env]] so spindle cables gain direct access.",
        "scientific": "Cdk1-cyclin B phosphorylates lamins and nucleoporins, driving [[nuclear envelope|nuclear_env]] breakdown."
      },
      "es": {
        "pop": "Las quinasas mitóticas fosforilan láminas y disuelven la [[envoltura nuclear|nuclear_env]] en vesículas.",
        "blueprint": "La fosforilación por Cdk1 desmonta la [[carcasa nuclear|nuclear_env]] para abrir paso a los cables del huso.",
        "scientific": "Cdk1-ciclina B fosforila láminas y nucleoporinas, desintegrando la [[envoltura nuclear|nuclear_env]]."
      }
    },
    "div.ch2.s1.02": {
      "en": {
        "pop": "Two duplicated [[centrosomes|centrosome]] migrate to opposite poles, anchoring the emerging bipolar spindle.",
        "blueprint": "Dual [[centrosome hubs|centrosome]] separate to opposing poles, establishing the axis of the bipolar spindle.",
        "scientific": "Duplicated [[centrosomes|centrosome]] migrate to opposite poles to serve as bipolar spindle organizing centers."
      },
      "es": {
        "pop": "Dos [[centrosomas|centrosome]] duplicados migran a polos opuestos y anclan el huso bipolar naciente.",
        "blueprint": "Dos [[nodos centrosoma|centrosome]] se desplazan a polos opuestos fijando el eje del huso bipolar.",
        "scientific": "Los [[centrosomas|centrosome]] duplicados migran a polos opuestos actuando como centros organizadores del huso."
      }
    },
    "div.ch2.s1.03": {
      "en": {
        "pop": "Each [[centrosome|centrosome]] nucleates dynamic [[spindle microtubules|spindle_mt]] that grow and shrink across the cytoplasm.",
        "blueprint": "From each [[centrosome hub|centrosome]], GTP-driven [[microtubule cables|spindle_mt]] search the cytosol via dynamic instability.",
        "scientific": "Gamma-TuRC rings at each [[centrosome|centrosome]] nucleate dynamic 25 nm [[spindle microtubules|spindle_mt]]."
      },
      "es": {
        "pop": "Cada [[centrosoma|centrosome]] nuclea [[microtúbulos del huso|spindle_mt]] dinámicos que crecen y se encogen en el citosol.",
        "blueprint": "Desde cada [[centrosoma|centrosome]], [[cables de microtúbulo|spindle_mt]] con GTP exploran el espacio por inestabilidad.",
        "scientific": "Anillos gamma-TuRC en cada [[centrosoma|centrosome]] nuclean [[microtúbulos del huso|spindle_mt]] dinámicos de 25 nm."
      }
    },
    "div.ch2.s2.01": {
      "en": {
        "pop": "Tetrameric [[kinesin-5|kinesin5]] motors bridge overlapping [[spindle microtubules|spindle_mt]] and push the poles apart.",
        "blueprint": "Bipolar [[kinesin-5 jacks|kinesin5]] crosslink antiparallel [[microtubule rails|spindle_mt]], sliding spindle poles apart.",
        "scientific": "Plus-end tetrameric [[kinesin-5|kinesin5]] (Eg5, PDB 1II6) slides antiparallel [[microtubules|spindle_mt]] outward."
      },
      "es": {
        "pop": "Motores tetraméricos [[quinesina-5|kinesin5]] unen [[microtúbulos|spindle_mt]] opuestos y empujan los polos aparte.",
        "blueprint": "Gatos bipolares [[quinesina-5|kinesin5]] enlazan [[rieles antiparalelos|spindle_mt]] y separan los polos del huso.",
        "scientific": "La [[quinesina-5|kinesin5]] tetramérica (Eg5, PDB 1II6) desliza [[microtúbulos|spindle_mt]] antiparalelos hacia afuera."
      }
    },
    "div.ch2.s2.02": {
      "en": {
        "pop": "Searching [[microtubule tips|spindle_mt]] capture protein [[kinetochores|kinetochore]] built at each chromosome centromere.",
        "blueprint": "Probing [[microtubule cables|spindle_mt]] dock into multi-protein [[kinetochore couplers|kinetochore]] at every centromere.",
        "scientific": "Dynamic [[k-fiber tips|spindle_mt]] attach to outer Ndc80 [[kinetochore|kinetochore]] plaques (~200 nm) at centromeres."
      },
      "es": {
        "pop": "Las puntas de [[microtúbulos|spindle_mt]] capturan los [[cinetocoros|kinetochore]] proteicos en cada centrómero.",
        "blueprint": "Los [[cables de microtúbulo|spindle_mt]] se acoplan a [[conectores cinetocoro|kinetochore]] montados en cada centrómero.",
        "scientific": "Las puntas de [[fibras k|spindle_mt]] se fijan a placas Ndc80 del [[cinetocoro|kinetochore]] (~200 nm) centromérico."
      }
    },
    "div.ch2.s2.03": {
      "en": {
        "pop": "Opposing fibers pull on both [[kinetochores|kinetochore]], walking every [[sister pair|sister_chromatids]] to the equator.",
        "blueprint": "Bipolar tug-of-war on paired [[kinetochores|kinetochore]] centers every [[chromatid pair|sister_chromatids]] at the metaphase plate.",
        "scientific": "Amphitelic forces on sister [[kinetochores|kinetochore]] congress all [[sister chromatids|sister_chromatids]] to the metaphase plate."
      },
      "es": {
        "pop": "Fibras opuestas tiran de ambos [[cinetocoros|kinetochore]] y llevan cada [[par hermano|sister_chromatids]] al ecuador.",
        "blueprint": "La tracción bipolar sobre [[cinetocoros|kinetochore]] centra cada [[par de cromátidas|sister_chromatids]] en la placa media.",
        "scientific": "Fuerzas anfitélicas en [[cinetocoros|kinetochore]] hermanos alinean las [[cromátidas|sister_chromatids]] en la placa metafásica."
      }
    },
    "div.ch3.s0.01": {
      "en": {
        "pop": "At metaphase, all [[sister chromatids|sister_chromatids]] line up along the equator under balanced [[spindle|spindle_mt]] pull.",
        "blueprint": "Metaphase lock: every [[chromatid pair|sister_chromatids]] sits centered between opposing [[spindle lines|spindle_mt]].",
        "scientific": "At metaphase, all 2n=4 [[sister chromatids|sister_chromatids]] align on the equator under balanced [[k-fiber|spindle_mt]] tension."
      },
      "es": {
        "pop": "En metafase, las [[cromátidas hermanas|sister_chromatids]] se alinean en el ecuador bajo tracción equilibrada del [[huso|spindle_mt]].",
        "blueprint": "Bloqueo metafásico: cada [[par de cromátidas|sister_chromatids]] reposa centrado entre [[líneas del huso|spindle_mt]] opuestas.",
        "scientific": "En metafase, las [[cromátidas hermanas|sister_chromatids]] (2n=4) se alinean bajo tensión equilibrada de [[fibras k|spindle_mt]]."
      }
    },
    "div.ch3.s0.02": {
      "en": {
        "pop": "Even one unattached [[kinetochore|kinetochore]] emits a stop signal that holds the entire cell at metaphase.",
        "blueprint": "Checkpoint interlock: a single uncoupled [[kinetochore|kinetochore]] broadcasts a halt flag blocking anaphase.",
        "scientific": "One unattached [[kinetochore|kinetochore]] catalyzes MCC assembly (Mad2-BubR1-Cdc20), inhibiting APC/C."
      },
      "es": {
        "pop": "Incluso un solo [[cinetocoro|kinetochore]] suelto emite una señal de alto que detiene toda la metafase.",
        "blueprint": "Retén de seguridad: un único [[cinetocoro|kinetochore]] sin acople emite bandera de pausa bloqueando anafase.",
        "scientific": "Un [[cinetocoro|kinetochore]] libre cataliza el complejo MCC (Mad2-BubR1-Cdc20), inhibiendo al APC/C."
      }
    },
    "div.ch3.s0.03": {
      "en": {
        "pop": "Like winches testing taut cables, [[kinetochores|kinetochore]] pause [[cohesin|cohesin]] cleavage until balanced.",
        "blueprint": "Bi-oriented [[kinetochore|kinetochore]] tension silences the checkpoint, arming APC/C to unlock [[cohesin|cohesin]] cutting.",
        "scientific": "Amphitelic [[kinetochore|kinetochore]] tension satisfies the SAC, freeing APC/C to trigger [[cohesin|cohesin]] cleavage."
      },
      "es": {
        "pop": "Como cabrestantes tensando cables, los [[cinetocoros|kinetochore]] frenan cortar [[cohesina|cohesin]] sin equilibrio.",
        "blueprint": "La tensión en [[cinetocoros|kinetochore]] apaga el retén y prepara al APC/C para cortar la [[cohesina|cohesin]].",
        "scientific": "La tensión anfitélica en el [[cinetocoro|kinetochore]] satisface el SAC y activa el corte de [[cohesina|cohesin]]."
      }
    },
    "div.ch3.s1.01": {
      "en": {
        "pop": "Once tension satisfies the checkpoint, APC/C removes securin and unleashes active [[separase|separase]].",
        "blueprint": "With SAC cleared, APC/C tags securin for destruction, switching the [[separase protease|separase]] online.",
        "scientific": "APC/C-Cdc20 (PDB 5A31) polyubiquitinates securin, liberating the cysteine protease [[separase|separase]] (7NJ1)."
      },
      "es": {
        "pop": "Cuando la tensión cumple el control, APC/C elimina la segurina y libera [[separasa|separase]] activa.",
        "blueprint": "Con el SAC libre, APC/C marca la segurina para degradación y activa la [[proteasa separasa|separase]].",
        "scientific": "APC/C-Cdc20 (PDB 5A31) poliubiquitina la segurina y libera la cisteín-proteasa [[separasa|separase]] (7NJ1)."
      }
    },
    "div.ch3.s1.02": {
      "en": {
        "pop": "Active [[separase|separase]] cleaves every [[cohesin|cohesin]] ring simultaneously, triggering irreversible anaphase.",
        "blueprint": "Synchronized [[separase cutters|separase]] shear all [[cohesin latches|cohesin]] at once, committing the cell to anaphase.",
        "scientific": "[[Separase|separase]] (PDB 7NJ1) cleaves Scc1 kleisin subunits of [[cohesin|cohesin]] (6WG3), initiating anaphase A."
      },
      "es": {
        "pop": "La [[separasa|separase]] activa corta todos los anillos de [[cohesina|cohesin]] a la vez e inicia una anafase irreversible.",
        "blueprint": "Las [[cizallas separasa|separase]] rompen todos los [[seguros cohesina|cohesin]] al unísono activando la anafase.",
        "scientific": "La [[separasa|separase]] (PDB 7NJ1) escinde la subunidad Scc1 de [[cohesina|cohesin]] (6WG3), disparando anafase A."
      }
    },
    "div.ch3.s1.03": {
      "en": {
        "pop": "Depolymerizing [[spindle fibers|spindle_mt]] and dynein pull freed [[sister chromatids|sister_chromatids]] toward opposite [[poles|centrosome]].",
        "blueprint": "Peeling [[microtubule cables|spindle_mt]] and dynein winches haul separated [[chromatids|sister_chromatids]] to each [[pole|centrosome]].",
        "scientific": "Shortening [[k-fibers|spindle_mt]] and minus-end dynein (3VKH) move [[chromatids|sister_chromatids]] to opposite [[centrosomes|centrosome]]."
      },
      "es": {
        "pop": "Los [[microtúbulos|spindle_mt]] al acortarse y la dineína llevan las [[cromátidas|sister_chromatids]] hacia [[polos|centrosome]] opuestos.",
        "blueprint": "[[Cables de microtúbulo|spindle_mt]] retráctiles y dineína remolcan las [[cromátidas|sister_chromatids]] a cada [[polo|centrosome]].",
        "scientific": "El acortamiento de [[fibras k|spindle_mt]] y dineína (3VKH) llevan [[cromátidas|sister_chromatids]] a [[centrosomas|centrosome]] opuestos."
      }
    },
    "div.ch3.s2.01": {
      "en": {
        "pop": "In telophase, chromosomes decondense and a fresh [[nuclear envelope|nuclear_env]] reforms around each daughter set.",
        "blueprint": "Telophase reset: chromatin unpacks while two fresh [[nuclear envelopes|nuclear_env]] seal around each genome.",
        "scientific": "Cdk1 drop triggers dephosphorylation, reassembling a double-bilayer [[nuclear envelope|nuclear_env]] at each pole."
      },
      "es": {
        "pop": "En telofase, los cromosomas se descompactan y se reforma una nueva [[envoltura nuclear|nuclear_env]] en cada polo.",
        "blueprint": "Reinicio en telofase: la cromatina se abre y dos nuevas [[envolturas nucleares|nuclear_env]] sellan cada genoma.",
        "scientific": "La caída de Cdk1 desfosforila láminas y reensambla una [[envoltura nuclear|nuclear_env]] de doble bicapa por polo."
      }
    },
    "div.ch3.s2.02": {
      "en": {
        "pop": "Around the equator, an actin-myosin II [[contractile ring|contractile_ring]] cinches the [[cell cortex|cell_cortex]] inward.",
        "blueprint": "An equatorial actin-myosin II [[drawstring actuator|contractile_ring]] pulls the [[cortical membrane|cell_cortex]] inward.",
        "scientific": "RhoA activates an equatorial F-actin/myosin II [[contractile ring|contractile_ring]] (6BIH) inside the [[cortex|cell_cortex]]."
      },
      "es": {
        "pop": "En el ecuador, un [[anillo contráctil|contractile_ring]] de actina y miosina II estrecha la [[corteza celular|cell_cortex]].",
        "blueprint": "Un [[actuador ecuatorial|contractile_ring]] de actina-miosina II retrae hacia dentro la [[membrana cortical|cell_cortex]].",
        "scientific": "RhoA activa el [[anillo contráctil|contractile_ring]] actina-miosina II (6BIH) bajo la [[corteza celular|cell_cortex]]."
      }
    },
    "div.ch3.s2.03": {
      "en": {
        "pop": "As the cleavage furrow pinches shut via the [[contractile ring|contractile_ring]], two identical 2n daughters emerge.",
        "blueprint": "Final abscission behind the [[contractile ring|contractile_ring]] outputs two genetically identical diploid 2n cells.",
        "scientific": "Furrow ingression by the [[contractile ring|contractile_ring]] and ESCRT-III abscission produce two 2n clones."
      },
      "es": {
        "pop": "Al cerrarse el surco con el [[anillo contráctil|contractile_ring]], nacen dos células hijas 2n idénticas.",
        "blueprint": "La abscisión final tras el [[anillo contráctil|contractile_ring]] entrega dos módulos diploides 2n idénticos.",
        "scientific": "El cierre del [[anillo contráctil|contractile_ring]] y la abscisión ESCRT-III producen dos células clonales 2n."
      }
    },
    "div.ch4.s0.01": {
      "en": {
        "pop": "Sexual reproduction needs meiosis: one DNA copy followed by two divisions to halve chromosome count.",
        "blueprint": "Switching to Mode C (meiosis): one S-phase input routed through two sequential divisions halves ploidy.",
        "scientific": "Meiosis couples one round of DNA replication with two divisions (MI, MII) to reduce ploidy from 2n to 1n."
      },
      "es": {
        "pop": "La reproducción sexual requiere meiosis: una copia de ADN y dos divisiones que reducen los cromosomas.",
        "blueprint": "Paso a Modo C (meiosis): una fase S seguida de dos divisiones reduce la ploidía a la mitad.",
        "scientific": "La meiosis acopla una replicación de ADN con dos divisiones (MI y MII) reduciendo la ploidía de 2n a 1n."
      }
    },
    "div.ch4.s0.02": {
      "en": {
        "pop": "In Prophase I, maternal and paternal homologs align gene-by-gene into a four-chromatid [[bivalent|bivalent]].",
        "blueprint": "In Prophase I, maternal and paternal homologs register locus-by-locus as a four-strand [[bivalent|bivalent]].",
        "scientific": "During zygotene-pachytene of Prophase I, homologous pairs synapse into four-chromatid [[bivalents|bivalent]]."
      },
      "es": {
        "pop": "En profase I, los homólogos maternos y paternos se alinean gen a gen en un [[bivalente|bivalent]] de cuatro brazos.",
        "blueprint": "En profase I, los homólogos materno y paterno se acoplan locus a locus formando un [[bivalente|bivalent]].",
        "scientific": "En cigoteno-paquiteno de profase I, los pares homólogos se sinapsan en [[bivalentes|bivalent]] de cuatro cromátidas."
      }
    },
    "div.ch4.s0.03": {
      "en": {
        "pop": "A protein zipper called the [[synaptonemal complex|synaptonemal]] holds both homologs tightly inside the [[bivalent|bivalent]].",
        "blueprint": "A tripartite [[synaptonemal scaffold|synaptonemal]] zips maternal and paternal axes together across each [[bivalent|bivalent]].",
        "scientific": "SYCP1 filaments and SYCP3 elements (4CPC) build the [[synaptonemal complex|synaptonemal]] inside each [[bivalent|bivalent]]."
      },
      "es": {
        "pop": "Una cremallera proteica, el [[complejo sinaptonémico|synaptonemal]], mantiene unidos los homólogos del [[bivalente|bivalent]].",
        "blueprint": "Un [[andamio sinaptonémico|synaptonemal]] tripartito abrocha ejes materno y paterno a lo largo del [[bivalente|bivalent]].",
        "scientific": "SYCP1 y SYCP3 (PDB 4CPC) arman el [[complejo sinaptonémico|synaptonemal]] de ~100 nm en cada [[bivalente|bivalent]]."
      }
    },
    "div.ch4.s1.01": {
      "en": {
        "pop": "Rather than avoiding breaks, [[Spo11|spo11]] deliberately cuts DNA strands to initiate meiotic recombination.",
        "blueprint": "To start gene shuffling, the [[Spo11 cutter|spo11]] introduces programmed double-strand DNA breaks.",
        "scientific": "Topoisomerase-like [[Spo11|spo11]] (TopVI homolog, 2Q2E) catalyzes programmed double-strand DNA breaks."
      },
      "es": {
        "pop": "En lugar de evitar cortes, [[Spo11|spo11]] rompe el ADN a propósito para iniciar la recombinación meiótica.",
        "blueprint": "Para iniciar el intercambio genético, la [[enzima Spo11|spo11]] genera roturas bicatenarias programadas.",
        "scientific": "[[Spo11|spo11]] (homólogo de TopVI, PDB 2Q2E) cataliza roturas bicatenarias programadas en el ADN."
      }
    },
    "div.ch4.s1.02": {
      "en": {
        "pop": "After end resection, [[Rad51|rad51]] coats single-stranded DNA and guides it into the matching homolog.",
        "blueprint": "Following resection, helical [[Rad51 recombinase|rad51]] sheaths locate and invade the homologous DNA sequence.",
        "scientific": "Nucleoprotein [[RAD51/DMC1|rad51]] filaments (PDB 5H1B) catalyze homology search and D-loop strand invasion."
      },
      "es": {
        "pop": "Tras resecar los extremos, [[Rad51|rad51]] recubre el ADN monocatenario y lo guía al homólogo pareja.",
        "blueprint": "Tras la resección, hélices de [[recombinasa Rad51|rad51]] localizan e invaden la secuencia homóloga.",
        "scientific": "Filamentos nucleoproteicos [[RAD51/DMC1|rad51]] (PDB 5H1B) catalizan búsqueda homóloga e invasión en bucle D."
      }
    },
    "div.ch4.s1.03": {
      "en": {
        "pop": "This [[Rad51|rad51]] strand invasion physically links non-sister chromatids across the paired [[bivalent|bivalent]].",
        "blueprint": "[[Rad51|rad51]] strand exchange physically bridges maternal and paternal chromatids inside the [[bivalent|bivalent]].",
        "scientific": "[[RAD51|rad51]]-mediated strand invasion tethers non-sister homolog chromatids within the [[bivalent|bivalent]]."
      },
      "es": {
        "pop": "Esta invasión de [[Rad51|rad51]] enlaza físicamente cromátidas no hermanas en el [[bivalente|bivalent]] emparejado.",
        "blueprint": "El intercambio por [[Rad51|rad51]] une cromátidas materna y paterna dentro del mismo [[bivalente|bivalent]].",
        "scientific": "La invasión mediada por [[RAD51|rad51]] conecta cromátidas homólogas no hermanas dentro del [[bivalente|bivalent]]."
      }
    },
    "div.ch4.s2.01": {
      "en": {
        "pop": "Where DNA strands cross between homologs, X-shaped [[chiasmata|chiasma]] lock the [[bivalent|bivalent]] together.",
        "blueprint": "Visible X-shaped [[chiasma anchors|chiasma]] mechanically hold each [[bivalent|bivalent]] until Meiosis I tension builds.",
        "scientific": "Cytological [[chiasmata|chiasma]] physically stabilize homologous [[bivalents|bivalent]] to resist spindle tension in MI."
      },
      "es": {
        "pop": "Donde las hebras cruzan entre homólogos, los [[quiasmas|chiasma]] en X sujetan unido al [[bivalente|bivalent]].",
        "blueprint": "Anclas en X llamadas [[quiasmas|chiasma]] sujetan mecánicamente cada [[bivalente|bivalent]] hasta la tensión de MI.",
        "scientific": "Los [[quiasmas|chiasma]] citológicos estabilizan físicamente los [[bivalentes|bivalent]] frente a la tensión en MI."
      }
    },
    "div.ch4.s2.02": {
      "en": {
        "pop": "Like cutting two matched decks to swap runs, [[chiasmata|chiasma]] trade DNA at [[Holliday junctions|holliday]].",
        "blueprint": "Recombination splicers at [[chiasmata|chiasma]] exchange maternal and paternal arms via [[Holliday junctions|holliday]].",
        "scientific": "Crossover maturation at [[chiasmata|chiasma]] swaps homologous duplexes through four-way [[Holliday junctions|holliday]]."
      },
      "es": {
        "pop": "Como cortar dos barajas para cambiar tramos, [[quiasmas|chiasma]] cruzan ADN en [[uniones Holliday|holliday]].",
        "blueprint": "Empalmadores en los [[quiasmas|chiasma]] intercambian brazos materno y paterno vía [[uniones Holliday|holliday]].",
        "scientific": "El sobrecruzamiento en [[quiasmas|chiasma]] intercambia dúplex homólogos mediante [[uniones Holliday|holliday]]."
      }
    },
    "div.ch4.s2.03": {
      "en": {
        "pop": "Resolving each [[Holliday junction|holliday]] seals mosaic maternal-paternal chromosomes with brand-new allele sets.",
        "blueprint": "Cutting and sealing each [[Holliday junction|holliday]] outputs chimeric chromosomes with new allele combinations.",
        "scientific": "Asymmetric resolution of double [[Holliday junctions|holliday]] (1C7M) yields recombinant chimeric chromatids."
      },
      "es": {
        "pop": "Resolver cada [[unión Holliday|holliday]] sella cromosomas mosaico materno-paternos con nuevos alelos.",
        "blueprint": "Cortar y sellar cada [[unión Holliday|holliday]] genera cromosomas quiméricos con combinaciones inéditas.",
        "scientific": "La resolución asimétrica de dobles [[uniones Holliday|holliday]] (1C7M) produce cromátidas recombinantes."
      }
    },
    "div.ch4.s3.01": {
      "en": {
        "pop": "In Meiosis I, [[separase|separase]] cuts arm [[cohesin|cohesin]] while centromeres stay protected, splitting whole [[bivalents|bivalent]].",
        "blueprint": "Meiosis I gate: [[separase|separase]] shears arm [[cohesin|cohesin]] while shugoshin guards centromeres, splitting [[bivalents|bivalent]].",
        "scientific": "In Anaphase I, [[separase|separase]] cleaves Rec8 arm [[cohesin|cohesin]] (shugoshin shields centromeres) parting [[bivalents|bivalent]]."
      },
      "es": {
        "pop": "En meiosis I, [[separasa|separase]] corta la [[cohesina|cohesin]] de brazos y separa enteros los [[bivalentes|bivalent]].",
        "blueprint": "Compuerta MI: [[separasa|separase]] corta [[cohesina|cohesin]] distal mientras shugoshina protege el centrómero en [[bivalentes|bivalent]].",
        "scientific": "En anafase I, [[separasa|separase]] escinde [[cohesina|cohesin]] Rec8 distal (shugoshina blinda centrómeros) abriendo [[bivalentes|bivalent]]."
      }
    },
    "div.ch4.s3.02": {
      "en": {
        "pop": "Random orientation of each [[bivalent|bivalent]] independently assorts maternal and paternal chromosomes to poles.",
        "blueprint": "Independent orientation of every [[bivalent|bivalent]] randomizes maternal-paternal routing across daughter cells.",
        "scientific": "Independent assortment of [[bivalents|bivalent]] at Metaphase I generates 2^n chromosomal combinations."
      },
      "es": {
        "pop": "La orientación al azar de cada [[bivalente|bivalent]] reparte de forma independiente cromosomas a cada polo.",
        "blueprint": "La orientación libre de cada [[bivalente|bivalent]] aleatoriza el reparto materno y paterno entre hijas.",
        "scientific": "La segregación independiente de [[bivalentes|bivalent]] en metafase I produce 2^n combinaciones posibles."
      }
    },
    "div.ch4.s3.03": {
      "en": {
        "pop": "Meiosis II then splits [[sister chromatids|sister_chromatids]] and the [[contractile ring|contractile_ring]] yields four unique 1n gametes.",
        "blueprint": "Meiosis II cuts centromeric rings to separate [[sisters|sister_chromatids]]; the [[contractile ring|contractile_ring]] yields 4 x 1n cells.",
        "scientific": "Equational Meiosis II segregates [[sister chromatids|sister_chromatids]] while [[contractile rings|contractile_ring]] yield 4 x 1n gametes."
      },
      "es": {
        "pop": "Luego la meiosis II separa [[cromátidas hermanas|sister_chromatids]] y el [[anillo contráctil|contractile_ring]] forma cuatro gametos 1n.",
        "blueprint": "La meiosis II suelta las [[hermanas|sister_chromatids]] y el [[anillo contráctil|contractile_ring]] produce cuatro células 1n únicas.",
        "scientific": "La meiosis II ecuacional segrega [[cromátidas hermanas|sister_chromatids]] y el [[anillo contráctil|contractile_ring]] da 4 gametos 1n."
      }
    },
    "div.ch5.s0.01": {
      "en": {
        "pop": "Zoom into the molecular inset where [[condensin|condensin]], [[cohesin|cohesin]] and [[separase|separase]] act at 10 to 50 nm.",
        "blueprint": "Inspect the 10-50 nm nanomachine bench: [[condensin|condensin]], [[cohesin|cohesin]] and [[separase|separase]] drive chromosome mechanics.",
        "scientific": "At 10-50 nm scale, [[condensin|condensin]] (6YVU), [[cohesin|cohesin]] (6WG3) and [[separase|separase]] (7NJ1) govern chromatid fate."
      },
      "es": {
        "pop": "Acércate al recuadro molecular donde [[condensina|condensin]], [[cohesina|cohesin]] y [[separasa|separase]] actúan a 10-50 nm.",
        "blueprint": "Banco nanométrico (10-50 nm): [[condensina|condensin]], [[cohesina|cohesin]] y [[separasa|separase]] ejecutan la mecánica cromosómica.",
        "scientific": "A escala 10-50 nm, [[condensina|condensin]] (6YVU), [[cohesina|cohesin]] (6WG3) y [[separasa|separase]] (7NJ1) dictan el reparto."
      }
    },
    "div.ch5.s0.02": {
      "en": {
        "pop": "Every crossover at a [[Holliday junction|holliday]] ultimately realigns complementary [[DNA base pairs|dna_basepair]] below.",
        "blueprint": "Each strand swap across a [[Holliday junction|holliday]] re-indexes complementary [[DNA base pairs|dna_basepair]] at 2 nm.",
        "scientific": "Branch migration through a [[Holliday junction|holliday]] (1C7M) re-pairs complementary B-DNA [[base pairs|dna_basepair]] (1BNA)."
      },
      "es": {
        "pop": "Cada cruce en una [[unión Holliday|holliday]] realinea abajo los [[pares de bases de ADN|dna_basepair]] complementarios.",
        "blueprint": "Cada intercambio en una [[unión Holliday|holliday]] reindexa los [[pares de bases|dna_basepair]] complementarios a 2 nm.",
        "scientific": "La migración de rama en la [[unión Holliday|holliday]] (1C7M) reempareja [[pares de bases|dna_basepair]] B-ADN (1BNA)."
      }
    },
    "div.ch5.s0.03": {
      "en": {
        "pop": "At 0.34 nm rise, A-T and G-C [[base pairs|dna_basepair]] depend on C, H, N, O, P atoms and catalytic Mg2+ ions.",
        "blueprint": "Down at 0.34 nm pitch, [[A-T/G-C rungs|dna_basepair]] run on C, H, N, O, P atoms stabilized by divalent Mg2+ ions.",
        "scientific": "At 0.34 nm rise, Watson-Crick [[base pairs|dna_basepair]] (C, H, N, O, P) rely on Mg2+ cofactors during cleavage."
      },
      "es": {
        "pop": "A 0,34 nm de paso, los [[pares de bases|dna_basepair]] A-T y G-C dependen de átomos C, H, N, O, P e iones Mg2+.",
        "blueprint": "A 0,34 nm, los [[peldaños A-T y G-C|dna_basepair]] operan sobre átomos C, H, N, O, P y cofactores de Mg2+.",
        "scientific": "Con paso de 0,34 nm, los [[pares Watson-Crick|dna_basepair]] (C, H, N, O, P) requieren Mg2+ catalítico al escindirse."
      }
    },
    "div.ch5.s1.01": {
      "en": {
        "pop": "Bacteria divide rapidly by cloning circular DNA and pinching mid-cell with an [[FtsZ Z-ring|ftsz_ring]].",
        "blueprint": "Recap 1: prokaryotic fission clones a circular genome and cleaves mid-cell using an [[FtsZ ring|ftsz_ring]].",
        "scientific": "Summary: bacterial binary fission pairs circular oriC-ter replication with GTPase [[FtsZ|ftsz_ring]] constriction."
      },
      "es": {
        "pop": "Las bacterias se dividen rápido clonando ADN circular y cerrándose con un [[anillo Z FtsZ|ftsz_ring]].",
        "blueprint": "Resumen 1: la fisión procariota clona un genoma circular y corta al centro con un [[anillo FtsZ|ftsz_ring]].",
        "scientific": "Resumen: la fisión bacteriana acopla replicación circular oriC-ter con constricción GTPasa de [[FtsZ|ftsz_ring]]."
      }
    },
    "div.ch5.s1.02": {
      "en": {
        "pop": "Mitosis preserves diploid clones via [[kinetochore|kinetochore]] tension, while meiosis recombines genes at [[chiasmata|chiasma]].",
        "blueprint": "Recap 2: [[kinetochore|kinetochore]] gates keep mitosis clonal (2x2n), while [[chiasmata|chiasma]] diversify meiosis (4x1n).",
        "scientific": "[[Kinetochore|kinetochore]]-gated mitosis conserves 2n clones; [[chiasma|chiasma]]-driven meiosis generates 4 diverse 1n gametes."
      },
      "es": {
        "pop": "La mitosis guarda clones diploides por tensión en [[cinetocoros|kinetochore]]; la meiosis mezcla en [[quiasmas|chiasma]].",
        "blueprint": "Resumen 2: el control [[cinetocoro|kinetochore]] conserva 2x2n en mitosis; los [[quiasmas|chiasma]] diversifican 4x1n.",
        "scientific": "La mitosis regulada por [[cinetocoros|kinetochore]] conserva 2n; la meiosis con [[quiasmas|chiasma]] genera 4 gametos 1n."
      }
    },
    "div.ch5.s1.03": {
      "en": {
        "pop": "Scrub the phase bar or click any molecular tag now, including [[base pairs|dna_basepair]], to explore deeper.",
        "blueprint": "Use the phase slider, switch division modes, or drill down into [[base pairs|dna_basepair]] to inspect more.",
        "scientific": "Scrub the timeline across all three modes or select any molecular tag down to [[DNA base pairs|dna_basepair]]."
      },
      "es": {
        "pop": "Desliza la barra de fase o pulsa cualquier etiqueta, incluso [[pares de bases|dna_basepair]], para explorar más.",
        "blueprint": "Mueve el deslizador de fase, cambia de modo o baja hasta los [[pares de bases|dna_basepair]] para inspeccionar.",
        "scientific": "Recorre la línea de tiempo en los tres modos o explora cualquier etiqueta hasta [[pares de bases|dna_basepair]]."
      }
    }
  }
};
