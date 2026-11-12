import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Stage 0 (`life-overview` / `biology_introTour`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 30 of 32 cues match base `cue.text` / `ES_TOURS_PHRASES[cue.text]` directly.
 * - Exactly 2 cues (`intro.ch3.para.06` and `intro.ch4.vir.04`) use grounded everyday
 *   mental models to clarify why ATP-importing bacteria remain true cells while
 *   ribosome-free viruses are inert outside a host.
 */
export const INTRO_TOUR_PERSONAS: TourPersonaMap = {
  "life-overview": {
    "intro.ch0.pillars.01": {
      "en": {
        "pop": "Welcome to biology: four stages stand side by side to show what makes a cell alive.",
        "blueprint": "System overview: four comparative chassis illustrate the minimum architecture of life.",
        "scientific": "Comparative biological stage spanning prokaryotes, eukaryotes, minimal cells, and virions."
      },
      "es": {
        "pop": "Bienvenido a la biología: cuatro etapas lado a lado muestran qué hace viva a una célula.",
        "blueprint": "Vista del sistema: cuatro chasis comparativos muestran la arquitectura mínima de la vida.",
        "scientific": "Escena comparativa que abarca procariotas, eucariotas, células mínimas y viriones."
      }
    },
    "intro.ch0.pillars.02": {
      "en": {
        "pop": "Every autonomous living cell on Earth relies on the same four core pillars.",
        "blueprint": "Every self-sustaining cellular node integrates four non-negotiable core subsystems.",
        "scientific": "All metabolically autonomous cells share four conserved macromolecular pillars."
      },
      "es": {
        "pop": "Toda célula viva y autónoma de la Tierra se apoya en los mismos cuatro pilares básicos.",
        "blueprint": "Todo nodo celular autosuficiente integra cuatro subsistemas básicos irrenunciables.",
        "scientific": "Toda célula metabólicamente autónoma conserva cuatro pilares macromoleculares."
      }
    },
    "intro.ch0.pillars.03": {
      "en": {
        "pop": "First, a lipid membrane boundary encloses cytoplasm and separates inside from outside.",
        "blueprint": "Pillar one: a selective phospholipid bilayer perimeter isolates internal state and ion flux.",
        "scientific": "First, an amphipathic phospholipid bilayer (~5 nm) maintains homeostatic gradients."
      },
      "es": {
        "pop": "Primero, una membrana lipídica encierra el citoplasma y separa el interior del exterior.",
        "blueprint": "Pilar uno: un perímetro selectivo de bicapa fosfolipídica aísla el estado y flujo iónico.",
        "scientific": "Primero, una bicapa fosfolipídica anfipática (~5 nm) sostiene gradientes homeostáticos."
      }
    },
    "intro.ch0.pillars.04": {
      "en": {
        "pop": "Second, a double-stranded DNA genome stores the heritable instructions for every part.",
        "blueprint": "Pillar two: a replicable dsDNA source-code repository stores all structural specifications.",
        "scientific": "Second, a double-stranded DNA genome encodes the complete heritable proteome and RNAs."
      },
      "es": {
        "pop": "Segundo, un genoma de ADN bicatenario guarda las instrucciones heredables de cada pieza.",
        "blueprint": "Pilar dos: un repositorio replicable de ADNbc almacena las especificaciones del sistema.",
        "scientific": "Segundo, un genoma de ADN bicatenario codifica de forma estable el proteoma y los ARN."
      }
    },
    "intro.ch0.pillars.05": {
      "en": {
        "pop": "Third, ribosomes read messenger RNA to build proteins; fourth, enzymes generate own ATP.",
        "blueprint": "Pillar three: ribosome compilers build proteins; pillar four: local turbines mint ATP power.",
        "scientific": "Third, ribonucleoprotein ribosomes translate mRNA; fourth, pathways synthesize endogenous ATP."
      },
      "es": {
        "pop": "Tercero, los ribosomas leen ARNm y crean proteínas; cuarto, la célula genera su propio ATP.",
        "blueprint": "Pilar tres: compiladores ribosómicos crean proteínas; pilar cuatro: turbinas locales dan ATP.",
        "scientific": "Tercero, los ribosomas traducen ARNm; cuarto, rutas bioenergéticas sintetizan ATP endógeno."
      }
    },
    "intro.ch0.pillars.06": {
      "en": {
        "pop": "Across these four pedestals, watch how life scales those pillars up or strips them away.",
        "blueprint": "Follow pedestals one to four to see this baseline architecture scale up or shed modules.",
        "scientific": "Comparing these four tiers reveals organellar expansion, reductive evolution, and virions."
      },
      "es": {
        "pop": "En estos cuatro pedestales verás cómo la vida amplía esos pilares o los pierde paso a paso.",
        "blueprint": "Recorre los cuatro pedestales para ver cómo esta arquitectura escala o pierde módulos.",
        "scientific": "Comparar los cuatro niveles revela expansión organular, evolución reductiva y viriones."
      }
    },
    "intro.ch1.prok.01": {
      "en": {
        "pop": "[[Prokaryotes|real-bacterium]] like E. coli run all four pillars inside one shared open room.",
        "blueprint": "[[Prokaryotes|real-bacterium]] such as E. coli pack all four subsystems into one unified hull.",
        "scientific": "[[Prokaryotes|real-bacterium]] like Escherichia coli house all four pillars in one ~1 fL cytosol."
      },
      "es": {
        "pop": "Los [[procariotas|real-bacterium]] como E. coli reúnen los cuatro pilares en un solo espacio abierto.",
        "blueprint": "Los [[procariotas|real-bacterium]] como E. coli integran los cuatro subsistemas en un casco único.",
        "scientific": "Los [[procariotas|real-bacterium]] como Escherichia coli alojan los cuatro pilares en ~1 fL citosólico."
      }
    },
    "intro.ch1.prok.02": {
      "en": {
        "pop": "With no nucleus, its 4.6 Mbp circular dsDNA coils directly in the central nucleoid.",
        "blueprint": "Lacking a nuclear vault, its 4.6 Mbp circular dsDNA loop mounts directly in the cytosol.",
        "scientific": "Lacking a nuclear envelope, its 4.6 Mbp circular dsDNA condenses in a supercoiled nucleoid."
      },
      "es": {
        "pop": "Sin núcleo, su ADNbc circular de 4,6 Mpb se pliega directamente en el nucleoide central.",
        "blueprint": "Sin bóveda nuclear, su bucle de ADNbc de 4,6 Mpb opera directamente expuesto en el citosol.",
        "scientific": "Sin envoltura nuclear, su cromosoma circular de 4,6 Mpb se condensa en el nucleoide."
      }
    },
    "intro.ch1.prok.03": {
      "en": {
        "pop": "Fast 70S ribosomes latch onto mRNA right beside the DNA, translating genes immediately.",
        "blueprint": "Compact 70S ribosome compilers attach to nascent mRNA mid-read for zero-latency translation.",
        "scientific": "Cytoplasmic 70S ribosomes initiate co-transcriptional translation directly behind RNAP."
      },
      "es": {
        "pop": "Rápidos ribosomas 70S se unen al ARNm junto al ADN y traducen los genes al instante.",
        "blueprint": "Compiladores ribosómicos 70S captan el ARNm naciente al vuelo sin latencia de transporte.",
        "scientific": "Los ribosomas 70S inician traducción cotranscripcional directamente detrás de la ARN pol."
      }
    },
    "intro.ch1.prok.04": {
      "en": {
        "pop": "In the plasma membrane, respiratory pumps and ATP synthase turbines mint its own ATP.",
        "blueprint": "Respiratory proton pumps and F1F0 ATP synthase turbines power the inner-membrane energy bus.",
        "scientific": "Inner-membrane electron transport builds proton-motive force to drive F1F0 ATP synthases."
      },
      "es": {
        "pop": "En la membrana plasmática, bombas respiratorias y turbinas ATP sintasa generan su propio ATP.",
        "blueprint": "Bombas de protones y turbinas ATP sintasa F1F0 alimentan el bus energético de membrana.",
        "scientific": "La cadena respiratoria interna genera fuerza protón-motriz para impulsar ATP sintasas F1F0."
      }
    },
    "intro.ch1.prok.05": {
      "en": {
        "pop": "A tough peptidoglycan chainmail wall braces the envelope against internal water pressure.",
        "blueprint": "A cross-linked peptidoglycan mesh braces the outer hull against multi-atmosphere turgor.",
        "scientific": "A periplasmic peptidoglycan murein sacculus withstands ~2-5 atm of cytoplasmic turgor."
      },
      "es": {
        "pop": "Una resistente pared de peptidoglicano protege la envoltura frente a la presión interna.",
        "blueprint": "Una malla reticulada de peptidoglicano refuerza el casco frente a la presión de turgencia.",
        "scientific": "Un sáculo periplásmico de peptidoglicano soporta ~2-5 atm de presión osmótica interna."
      }
    },
    "intro.ch1.prok.06": {
      "en": {
        "pop": "Biology is easiest to learn here first: every core machine works in plain view.",
        "blueprint": "Starting here exposes the complete single-room reference design with nothing hidden.",
        "scientific": "Mastering prokaryotic organization first establishes the conserved baseline of cellular life."
      },
      "es": {
        "pop": "Aprender biología es más fácil empezando aquí: cada máquina esencial actúa a plena vista.",
        "blueprint": "Empezar aquí revela el diseño base de sala única al completo y sin módulos ocultos.",
        "scientific": "Estudiar primero al procariota fija la línea base conservada de toda organización celular."
      }
    },
    "intro.ch2.euk.01": {
      "en": {
        "pop": "[[Eukaryotes|real-cell]] - yeast, animal and plant cells - scale up 1,000-fold in volume.",
        "blueprint": "[[Eukaryotes|real-cell]] - yeast, animal, and plant chassis - scale internal volume ~1,000-fold.",
        "scientific": "[[Eukaryotes|real-cell]] (fungi, animals, and plants) expand cytoplasmic volume ~1,000-fold."
      },
      "es": {
        "pop": "Los [[eucariotas|real-cell]] —levaduras, animales y plantas— multiplican por 1.000 su volumen.",
        "blueprint": "Los [[eucariotas|real-cell]] —levaduras, animales y plantas— escalan ~1.000 veces su volumen.",
        "scientific": "Los [[eucariotas|real-cell]] (hongos, metazoos y plantas) expanden ~1.000 veces su volumen celular."
      }
    },
    "intro.ch2.euk.02": {
      "en": {
        "pop": "To manage that size, they divide the interior into specialized membrane-bound organelles.",
        "blueprint": "To prevent signaling bottlenecks at scale, internal membranes partition specialized rooms.",
        "scientific": "Intracellular endomembrane compartments segregate incompatible biochemical pathways."
      },
      "es": {
        "pop": "Para gestionar ese tamaño, dividen su interior en orgánulos especializados con membrana.",
        "blueprint": "Para evitar cuellos de botella a gran escala, membranas internas separan salas dedicadas.",
        "scientific": "Compartimentos endomembranosos segregan rutas bioquímicas incompatibles dentro del citosol."
      }
    },
    "intro.ch2.euk.03": {
      "en": {
        "pop": "Linear chromosomes sit inside a double-membrane nucleus guarded by selective nuclear pores.",
        "blueprint": "Linear dsDNA chromosomes reside inside a double-walled nucleus gated by nuclear pore routers.",
        "scientific": "Chromatinized linear dsDNA is sequestered inside a pore-gated double nuclear envelope."
      },
      "es": {
        "pop": "Los cromosomas lineales residen en un núcleo de doble membrana con poros selectivos.",
        "blueprint": "Los cromosomas lineales se alojan en un núcleo de doble pared con compuertas de poro.",
        "scientific": "El ADNbc lineal cromatinizado queda confinado en una doble envoltura nuclear con poros."
      }
    },
    "intro.ch2.euk.04": {
      "en": {
        "pop": "Larger 80S ribosomes translate exported mRNA across the cytosol and rough ER sheets.",
        "blueprint": "Exported mRNA feeds 80S cytosolic compilers plus ER-Golgi vesicle shipping pipelines.",
        "scientific": "Exported mRNAs engage 80S ribosomes across the cytosol and rough ER secretory pathway."
      },
      "es": {
        "pop": "Ribosomas 80S más grandes traducen el ARNm en el citosol y en las láminas del RE rugoso.",
        "blueprint": "El ARNm exportado alimenta compiladores 80S y la red logística secretora del RE y Golgi.",
        "scientific": "Los ARNm exportados se traducen en ribosomas 80S citosólicos y de la vía secretora RE-Golgi."
      }
    },
    "intro.ch2.euk.05": {
      "en": {
        "pop": "Hundreds of mitochondria - once free-living bacteria - supply ATP across the whole cell.",
        "blueprint": "Distributed mitochondrial power plants - descended from bacteria - supply cell-wide ATP.",
        "scientific": "Endosymbiotic mitochondria (alphaproteobacterial origin) retain mtDNA and 70S mitoribosomes."
      },
      "es": {
        "pop": "Cientos de mitocondrias —antiguas bacterias libres— suministran ATP a toda la célula.",
        "blueprint": "Centrales mitocondriales distribuidas —de origen bacteriano— abastecen de ATP a la red.",
        "scientific": "Las mitocondrias endosimbióticas conservan ADNmt propio, crestas y mitorribosomas 70S."
      }
    },
    "intro.ch2.euk.06": {
      "en": {
        "pop": "Plant cells add a second bacterial symbiont, the chloroplast, to turn sunlight into sugar.",
        "blueprint": "Plant cells integrate a second solar module - the chloroplast - plus a rigid cellulose wall.",
        "scientific": "Plant cells harbor cyanobacterial-derived chloroplasts driving oxygenic photosynthesis."
      },
      "es": {
        "pop": "Las células vegetales suman otro simbionte, el cloroplasto, para fijar luz solar en azúcar.",
        "blueprint": "Las células vegetales añaden un módulo solar —el cloroplasto— y pared rígida de celulosa.",
        "scientific": "Las células vegetales incorporan cloroplastos de origen cianobacteriano fotosintético."
      }
    },
    "intro.ch3.para.01": {
      "en": {
        "pop": "[[Parasitic and minimal bacteria|parasitic-cells-overview]] often confuse students because many live inside host cells.",
        "blueprint": "[[Parasitic and minimal bacteria|parasitic-cells-overview]] represent stripped-down cells operating inside host tissues.",
        "scientific": "[[Parasitic and minimal bacteria|parasitic-cells-overview]] exemplify extreme reductive genome evolution inside hosts."
      },
      "es": {
        "pop": "Las [[bacterias parásitas y mínimas|parasitic-cells-overview]] suelen confundirse porque muchas viven dentro de células.",
        "blueprint": "Las [[bacterias parásitas y mínimas|parasitic-cells-overview]] son nodos celulares reducidos que operan en un huésped.",
        "scientific": "Las [[bacterias parásitas y mínimas|parasitic-cells-overview]] ilustran la evolución genómica reductiva intracelular."
      }
    },
    "intro.ch3.para.02": {
      "en": {
        "pop": "Meet Mycoplasma, Chlamydia and Rickettsia: tiny bacteria that shed dozens of metabolic pathways.",
        "blueprint": "Mycoplasma, Chlamydia, and Rickettsia deleted bulk biosynthetic modules during host adaptation.",
        "scientific": "Mycoplasma genitalium, Chlamydia trachomatis, and Rickettsia prowazekii lost de novo pathways."
      },
      "es": {
        "pop": "Conoce a Mycoplasma, Chlamydia y Rickettsia: bacterias diminutas que perdieron rutas propias.",
        "blueprint": "Mycoplasma, Chlamydia y Rickettsia eliminaron módulos biosintéticos al adaptarse al huésped.",
        "scientific": "Mycoplasma genitalium, Chlamydia trachomatis y Rickettsia prowazekii perdieron síntesis de novo."
      }
    },
    "intro.ch3.para.03": {
      "en": {
        "pop": "Are they viruses? Not at all: each keeps a lipid membrane and circular dsDNA of 0.58 to 1.1 Mbp.",
        "blueprint": "Unlike viruses, each retains a true lipid bilayer hull and a 0.58 to 1.1 Mbp dsDNA genome.",
        "scientific": "Unlike virions, each maintains a plasma membrane and a 0.58-1.11 Mbp circular dsDNA chromosome."
      },
      "es": {
        "pop": "¿Son virus? En absoluto: conservan membrana lipídica y ADNbc circular de 0,58 a 1,1 Mpb.",
        "blueprint": "A diferencia de un virus, retienen bicapa lipídica propia y genoma ADNbc de 0,58 a 1,1 Mpb.",
        "scientific": "A diferencia de los viriones, preservan membrana plasmática y cromosoma ADNbc de 0,58-1,11 Mpb."
      }
    },
    "intro.ch3.para.04": {
      "en": {
        "pop": "Crucially, they carry their own 70S ribosomes to build proteins and divide by binary fission.",
        "blueprint": "Crucially, onboard 70S ribosome compilers translate their own proteome and drive binary fission.",
        "scientific": "They encode functional 70S ribosomes for autonomous translation and replicate by binary fission."
      },
      "es": {
        "pop": "Clave: poseen sus propios ribosomas 70S para crear proteínas y se dividen por fisión binaria.",
        "blueprint": "Clave: sus propios compiladores 70S traducen su proteoma y ejecutan fisión binaria celular.",
        "scientific": "Codifican ribosomas 70S funcionales para traducción autónoma y dividen por fisión binaria."
      }
    },
    "intro.ch3.para.05": {
      "en": {
        "pop": "Because they keep Pillars 1, 2 and 3, they are true living cells - just metabolically incomplete.",
        "blueprint": "Retaining hull, dsDNA, and 70S ribosomes makes them true cellular nodes lacking only Pillar 4.",
        "scientific": "Conserving membrane, dsDNA, and 70S translation defines them as obligate cellular parasites."
      },
      "es": {
        "pop": "Al conservar los pilares 1, 2 y 3, son células vivas reales, pero metabólicamente incompletas.",
        "blueprint": "Conservar casco, ADNbc y ribosomas 70S las define como células reales sin el pilar energético 4.",
        "scientific": "Preservar membrana, ADNbc y traducción 70S las clasifica como células parásitas obligadas."
      }
    },
    "intro.ch3.para.06": {
      "en": {
        "pop": "With their own 70S workshop tools, they plug an Npt1 extension cord into the host ATP power grid.",
        "blueprint": "Membrane Npt1 and Tlc1 antiporters tap the host power rail, swapping spent ADP for host ATP.",
        "scientific": "Transmembrane Npt1/Tlc1 ATP/ADP translocases import host cytosolic ATP in exchange for ADP + Pi."
      },
      "es": {
        "pop": "Con sus propias herramientas 70S, enchufan un alargador Npt1 a la red eléctrica de ATP huésped.",
        "blueprint": "Los antiporters Npt1 y Tlc1 se conectan al riel energético huésped cambiando ADP por ATP.",
        "scientific": "Las translocasas Npt1/Tlc1 importan ATP citosólico del huésped a cambio de ADP y fosfato."
      }
    },
    "intro.ch3.para.07": {
      "en": {
        "pop": "Antibiotics targeting 70S ribosomes still stop them, proving they run cellular protein factories.",
        "blueprint": "70S-targeted antibiotics halt their translation engine, confirming true bacterial machinery.",
        "scientific": "Tetracyclines and macrolides inhibit their 70S ribosomes, whereas viruses lack any ribosomal target."
      },
      "es": {
        "pop": "Los antibióticos contra ribosomas 70S las frenan, probando que usan fábricas celulares propias.",
        "blueprint": "Los antibióticos dirigidos a 70S detienen su motor, confirmando maquinaria celular genuina.",
        "scientific": "Tetraciclinas y macrólidos inhiben sus ribosomas 70S, diana ausente por completo en los virus."
      }
    },
    "intro.ch4.vir.01": {
      "en": {
        "pop": "[[Viruses|viruses]] like Phage T4, SARS-CoV-2 and HIV-1 cross the line out of cellular life.",
        "blueprint": "[[Viruses|viruses]] such as Phage T4, SARS-CoV-2, and HIV-1 cross from cells into pure payloads.",
        "scientific": "[[Viruses|viruses]] (T4, SARS-CoV-2, HIV-1) are acellular infectious particles outside the tree of life."
      },
      "es": {
        "pop": "Los [[virus|viruses]] como el fago T4, SARS-CoV-2 y VIH-1 cruzan la frontera fuera de la vida celular.",
        "blueprint": "Los [[virus|viruses]] como el fago T4, SARS-CoV-2 y VIH-1 pasan de ser nodos a pura carga útil.",
        "scientific": "Los [[virus|viruses]] (T4, SARS-CoV-2, VIH-1) son entidades acelulares fuera del árbol celular."
      }
    },
    "intro.ch4.vir.02": {
      "en": {
        "pop": "Each virion is only compact DNA or RNA packed inside a protein capsid and optional lipid coat.",
        "blueprint": "Each virion packages compact DNA or RNA source code inside a capsid shell and optional lipid cloak.",
        "scientific": "A virion comprises a compact DNA or RNA genome (6-170 kb) within a capsid +/- host lipid envelope."
      },
      "es": {
        "pop": "Cada virión es solo ADN o ARN compacto dentro de una cápside proteica y envoltura opcional.",
        "blueprint": "Cada virión empaqueta código de ADN o ARN en una cápside proteica con o sin manto lipídico.",
        "scientific": "Un virión consta de un genoma compacto de ADN o ARN (6-170 kb) en cápside +/- bicapa huésped."
      }
    },
    "intro.ch4.vir.03": {
      "en": {
        "pop": "Unlike Chlamydia or E. coli, a virus has zero cytoplasm, zero ATP synthesis and zero ribosomes.",
        "blueprint": "Unlike Chlamydia or E. coli, a virion carries zero cytosol, zero ATP generators, and zero ribosomes.",
        "scientific": "Unlike Chlamydia or E. coli, virions possess zero cytoplasm, zero bioenergetics, and zero ribosomes."
      },
      "es": {
        "pop": "A diferencia de Chlamydia o E. coli, un virus tiene cero citoplasma, cero ATP y cero ribosomas.",
        "blueprint": "Frente a Chlamydia o E. coli, el virión porta cero citosol, cero generadores de ATP y cero ribosomas.",
        "scientific": "A diferencia de Chlamydia o E. coli, carecen de citoplasma, bioenergética y ribosomas propios."
      }
    },
    "intro.ch4.vir.04": {
      "en": {
        "pop": "Like a locked USB blueprint drive on a table, it stays inert until plugged into host ribosomes.",
        "blueprint": "Extracellular virions are zero-power read-only packets awaiting a host ribosome execution host.",
        "scientific": "Extracellular virions are metabolically inert macromolecular complexes lacking translational state."
      },
      "es": {
        "pop": "Como una memoria USB de planos sobre la mesa, sigue inerte hasta enchufarse a ribosomas.",
        "blueprint": "Fuera del huésped, el virión es un paquete pasivo de solo lectura sin motor de ejecución.",
        "scientific": "El virión extracelular es un complejo macromolecular inerte carente de actividad traduccional."
      }
    },
    "intro.ch4.vir.05": {
      "en": {
        "pop": "Only after docking and injecting its genome can it hijack host ribosomes to print new virions.",
        "blueprint": "Receptor docking injects viral code to commandeer host ribosomes and ATP into virion assembly.",
        "scientific": "Receptor-mediated entry delivers viral nucleic acid to usurp host 70S or 80S translation."
      },
      "es": {
        "pop": "Solo al acoplarse e inyectar su genoma secuestra ribosomas del huésped para crear más viriones.",
        "blueprint": "El anclaje al receptor inyecta código viral que secuestra ribosomas y ATP para ensamblar copias.",
        "scientific": "La entrada mediada por receptor entrega ácido nucleico para usurpar la traducción 70S u 80S."
      }
    },
    "intro.ch4.next.01": {
      "en": {
        "pop": "You now have the map of biology: from autonomous cells to ATP thieves and acellular viruses.",
        "blueprint": "Architecture map complete: autonomous single-room, compartmentalized, ATP-importer, and payload.",
        "scientific": "Taxonomic framework established across prokaryotes, eukaryotes, obligate parasites, and virions."
      },
      "es": {
        "pop": "Ya tienes el mapa de la biología: de células autónomas a ladronas de ATP y virus acelulares.",
        "blueprint": "Mapa de arquitectura listo: sala autónoma, eucariota modular, importador de ATP y carga viral.",
        "scientific": "Marco comparativo establecido entre procariotas, eucariotas, parásitos obligados y viriones."
      }
    },
    "intro.ch4.next.02": {
      "en": {
        "pop": "Click Next in Course or [[Bacterium (E. coli)|real-bacterium]] to explore our first living cell.",
        "blueprint": "Select Next in Course or [[Bacterium (E. coli)|real-bacterium]] to inspect the base autonomous cell.",
        "scientific": "Select Next in Course or [[Bacterium (E. coli)|real-bacterium]] to examine prokaryotic ultrastructure."
      },
      "es": {
        "pop": "Pulsa Siguiente en el curso o [[Bacteria (E. coli)|real-bacterium]] para explorar la primera célula.",
        "blueprint": "Elige Siguiente en el curso o [[Bacteria (E. coli)|real-bacterium]] para inspeccionar el nodo base.",
        "scientific": "Selecciona Siguiente en el curso o [[Bacteria (E. coli)|real-bacterium]] para ver su ultraestructura."
      }
    }
  }
};
