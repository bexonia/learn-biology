import type { TourPersonaMap } from './tour_personas.js';

/**
 * Multi-persona narration scripts for Phase 15 (`real-central-dogma` / `CENTRAL_DOGMA_TOUR`).
 *
 * Strict Analogy Restraint (AGENTS.md Rule 8):
 * - 46 of 48 cues (95.8%, > 95%) match base `cue.text` verbatim in `en.pop` with direct,
 *   clear, distraction-free biological prose.
 * - Exactly 2 cues (`cd.ch2.s1.02` and `cd.ch4.s1.03`) use grounded everyday mental
 *   models for conceptually complex molecular mechanisms:
 *   1. `cd.ch2.s1.02` - Alternative Splicing: editing one raw script into two different cuts
 *      by keeping or skipping exons.
 *   2. `cd.ch4.s1.03` - Single-Base Mutation -> Hydrophobic Aggregation: swapping Glu6 for Val6
 *      turns a smooth soluble peg into a sticky patch locking HbS fibers together.
 */
export const PERSONAS_CENTRAL_DOGMA: TourPersonaMap = {
  "real-central-dogma": {
    "cd.ch0.s0.01": {
      "en": {
        "pop": "Genetic information flows across one 5 um corridor from nucleus through nuclear pores to cytosol.",
        "blueprint": "Pipeline overview: one continuous 5 um data bus runs from nuclear storage across pore gates to cytosol.",
        "scientific": "Eukaryotic gene expression spans a 5 um nucleocytoplasmic axis from chromatin across NPCs to cytosol."
      },
      "es": {
        "pop": "La información genética cruza un corredor de 5 um del núcleo por poros nucleares al citosol.",
        "blueprint": "Vista del flujo: un bus continuo de 5 um enlaza almacenamiento nuclear, compuertas y citosol.",
        "scientific": "La expresión génica eucariota cruza 5 um desde la cromatina por poros nucleares al citosol."
      }
    },
    "cd.ch0.s0.02": {
      "en": {
        "pop": "Inside the nucleus, [[chromatin|chromatin]] stores the human HBB beta-globin gene across three exons.",
        "blueprint": "Nuclear archive: unpacked [[chromatin|chromatin]] holds the human HBB source code split across three exons.",
        "scientific": "Nuclear euchromatin [[chromatin|chromatin]] encodes human HBB beta-globin (3 exons, 2 introns, 146 aa)."
      },
      "es": {
        "pop": "En el núcleo, la [[cromatina|chromatin]] guarda el gen humano HBB de beta-globina en tres exones.",
        "blueprint": "Archivo nuclear: la [[cromatina|chromatin]] aloja el código fuente de HBB dividido en tres exones.",
        "scientific": "La eucromatina [[cromatina|chromatin]] codifica HBB humano de beta-globina (3 exones, 2 intrones, 146 aa)."
      }
    },
    "cd.ch0.s0.03": {
      "en": {
        "pop": "Follow one transcript past [[RNA Pol II|rna_pol2]] and [[nuclear pores|npc]] into [[ribosomes|ribosome_80s]].",
        "blueprint": "Track one packet from [[RNA Pol II|rna_pol2]] across [[pore ports|npc]] straight into [[80S decoders|ribosome_80s]].",
        "scientific": "Trace one HBB transcript from [[RNA Pol II|rna_pol2]] (1I50) via [[NPCs|npc]] into cytosolic [[80S ribosomes|ribosome_80s]]."
      },
      "es": {
        "pop": "Sigue un transcrito desde [[ARN Pol II|rna_pol2]] y los [[poros nucleares|npc]] hasta los [[ribosomas|ribosome_80s]].",
        "blueprint": "Rastrea un paquete desde [[ARN Pol II|rna_pol2]] por los [[puertos NPC|npc]] hacia [[decodificadores 80S|ribosome_80s]].",
        "scientific": "Sigue un transcrito HBB de [[ARN Pol II|rna_pol2]] (1I50) por [[NPC|npc]] a [[ribosomas 80S|ribosome_80s]] citosólicos."
      }
    },
    "cd.ch0.s1.01": {
      "en": {
        "pop": "Nuclear machines replicate [[chromatin|chromatin]], copy pre-mRNA and splice introns via the [[spliceosome|spliceosome]].",
        "blueprint": "Upstream stations copy [[chromatin|chromatin]], transcribe pre-mRNA and edit introns in the [[spliceosome|spliceosome]].",
        "scientific": "Nuclear complexes replicate [[chromatin|chromatin]], transcribe pre-mRNA and excise introns via the [[spliceosome|spliceosome]]."
      },
      "es": {
        "pop": "Las máquinas nucleares replican [[cromatina|chromatin]], copian pre-ARNm y cortan intrones en el [[espliceosoma|spliceosome]].",
        "blueprint": "Las estaciones nucleares copian [[cromatina|chromatin]], transcriben y editan intrones en el [[espliceosoma|spliceosome]].",
        "scientific": "Complejos nucleares replican [[cromatina|chromatin]], transcriben pre-ARNm y escinden intrones con el [[espliceosoma|spliceosome]]."
      }
    },
    "cd.ch0.s1.02": {
      "en": {
        "pop": "Exported mRNA drives [[polysome|polysome]] translation and folds into soluble [[wild-type HbA|hb_wildtype]].",
        "blueprint": "Exported code feeds parallel [[polysome|polysome]] lines and folds into soluble [[HbA tetramers|hb_wildtype]].",
        "scientific": "Cytosolic mRNA enters [[polysome|polysome]] arrays, yielding folded tetrameric [[HbA|hb_wildtype]] (PDB 2HHB)."
      },
      "es": {
        "pop": "El ARNm exportado impulsa la traducción en [[polisomas|polysome]] y se pliega en [[HbA silvestre|hb_wildtype]].",
        "blueprint": "El código exportado nutre líneas [[polisoma|polysome]] en paralelo y arma [[tetrámeros HbA|hb_wildtype]] solubles.",
        "scientific": "El ARNm citosólico alimenta [[polisomas|polysome]] y produce tetrámeros solubles de [[HbA|hb_wildtype]] (PDB 2HHB)."
      }
    },
    "cd.ch0.s1.03": {
      "en": {
        "pop": "Along the way, live toggles test how alternative splicing or one DNA base change reshapes life.",
        "blueprint": "Interactive controls let you switch exon routing or flip single base bits and inspect downstream output.",
        "scientific": "Interactive splicing and point-mutation toggles link single-nucleotide changes to phenotype and selection."
      },
      "es": {
        "pop": "En el recorrido, los controles prueban cómo el empalme alternativo o una base cambian la vida.",
        "blueprint": "Controles activos alternan el enrutado de exones o cambian una base para medir el efecto final.",
        "scientific": "Controles de empalme y mutación puntual conectan sustituciones de una base con fenotipo y selección."
      }
    },
    "cd.ch1.s0.01": {
      "en": {
        "pop": "Zoom to Stage A inside the nucleus, where DNA replication copies opened [[chromatin|chromatin]].",
        "blueprint": "Stage A bay: the nuclear replisome duplicates unpacked [[chromatin|chromatin]] before cell division.",
        "scientific": "Stage A depicts semiconservative nuclear DNA replication along decondensed [[chromatin|chromatin]] (1KX5)."
      },
      "es": {
        "pop": "Acércate a la Etapa A en el núcleo, donde la replicación copia la [[cromatina|chromatin]] abierta.",
        "blueprint": "Bahía Etapa A: el replisoma nuclear duplica la [[cromatina|chromatin]] despejada antes de dividirse.",
        "scientific": "La Etapa A muestra replicación semiconservativa del ADN nuclear en [[cromatina|chromatin]] abierta (1KX5)."
      }
    },
    "cd.ch1.s0.02": {
      "en": {
        "pop": "A six-subunit [[helicase|helicase]] ring unwinds parental double-stranded DNA using ATP hydrolysis.",
        "blueprint": "An ATP-powered hexameric [[helicase|helicase]] wedge splits the parental dsDNA bus into twin templates.",
        "scientific": "Hexameric replicative [[helicase|helicase]] (PDB 6QEL, ~13 nm) unwinds duplex DNA via ATP hydrolysis."
      },
      "es": {
        "pop": "Un anillo [[helicasa|helicase]] de seis subunidades abre el ADN bicatenario usando hidrólisis de ATP.",
        "blueprint": "Una cuña hexamérica [[helicasa|helicase]] con ATP separa el bus parental de ADN en dos moldes.",
        "scientific": "La [[helicasa|helicase]] replicativa hexamérica (PDB 6QEL, ~13 nm) desenrolla el ADN dúplex con ATP."
      }
    },
    "cd.ch1.s0.03": {
      "en": {
        "pop": "As the [[helicase|helicase]] fork advances, RPA proteins coat single strands ready for [[Pol delta|pol_delta]].",
        "blueprint": "Behind the [[helicase|helicase]] fork, RPA shields exposed rails and stages clean inputs for [[Pol delta|pol_delta]].",
        "scientific": "Behind [[helicase|helicase]] unwinding, RPA/SSB (1EYG) stabilizes ssDNA templates for [[DNA Pol delta|pol_delta]]."
      },
      "es": {
        "pop": "Al avanzar la horquilla [[helicasa|helicase]], RPA recubre las hebras simples listas para [[Pol delta|pol_delta]].",
        "blueprint": "Tras la [[helicasa|helicase]], RPA protege los rieles expuestos y prepara entradas para [[Pol delta|pol_delta]].",
        "scientific": "Tras la [[helicasa|helicase]], RPA/SSB (1EYG) estabiliza moldes monocatenarios para [[ADN Pol delta|pol_delta]]."
      }
    },
    "cd.ch1.s1.01": {
      "en": {
        "pop": "Clamped to DNA by PCNA, [[DNA Pol delta|pol_delta]] builds complementary DNA strands from 5-prime to 3-prime.",
        "blueprint": "Locked onto a PCNA sliding collar, [[DNA Pol delta|pol_delta]] extends new DNA payloads 5-prime to 3-prime.",
        "scientific": "Processive [[DNA Pol delta|pol_delta]]-PCNA (PDB 6TNY, 1AXC) polymerizes dNTPs strictly 5-prime to 3-prime."
      },
      "es": {
        "pop": "Sujeta al ADN por PCNA, la [[ADN Pol delta|pol_delta]] sintetiza hebras complementarias de 5 prima a 3 prima.",
        "blueprint": "Acoplada al anillo PCNA, la [[ADN Pol delta|pol_delta]] extiende cadenas nuevas de 5 prima a 3 prima.",
        "scientific": "El complejo [[ADN Pol delta|pol_delta]]-PCNA (PDB 6TNY, 1AXC) polimeriza dNTP en dirección 5 prima a 3 prima."
      }
    },
    "cd.ch1.s1.02": {
      "en": {
        "pop": "When a wrong base slips in, [[Pol delta|pol_delta]] backs up and its 3-prime exonuclease excises the mismatch.",
        "blueprint": "Error check: a mismatch stalls [[Pol delta|pol_delta]], shifting the strand to its 3-prime exonuclease bay.",
        "scientific": "Misincorporation stalls [[Pol delta|pol_delta]] (6TNY), routing the primer to its 3'-5' exonuclease active site."
      },
      "es": {
        "pop": "Si entra una base errónea, [[Pol delta|pol_delta]] retrocede y su exonucleasa 3 prima elimina el fallo.",
        "blueprint": "Control de error: un desajuste frena a [[Pol delta|pol_delta]] y desvía la hebra a su bahía exonucleasa.",
        "scientific": "Un error detiene a [[Pol delta|pol_delta]] (6TNY) y deriva el cebador al sitio exonucleasa 3'-5'."
      }
    },
    "cd.ch1.s1.03": {
      "en": {
        "pop": "Proofreading cuts errors roughly thousandfold, yet rare copy mistakes still seed evolution.",
        "blueprint": "Hardware proofreading lowers write errors by ~10^3, leaving rare residual mutations as raw variation.",
        "scientific": "3'-5' proofreading improves fidelity ~100-1000x (~10^-9/bp), yet rare escapes supply evolutionary variants."
      },
      "es": {
        "pop": "La corrección reduce errores unas mil veces, pero raros fallos de copia siembran evolución.",
        "blueprint": "La verificación baja los fallos ~10^3 veces, dejando mutaciones residuales como materia prima.",
        "scientific": "La corrección 3'-5' eleva la fidelidad ~100-1000x (~10^-9/pb), dejando variantes para la evolución."
      }
    },
    "cd.ch1.s2.01": {
      "en": {
        "pop": "Next door in Stage B, twelve-subunit [[RNA Pol II|rna_pol2]] opens a 12 base-pair transcription bubble.",
        "blueprint": "Stage B reader: the 12-part [[RNA Pol II|rna_pol2]] engine melts a 12-14 bp local read window on DNA.",
        "scientific": "In Stage B, 550 kDa 12-subunit [[RNA Pol II|rna_pol2]] (PDB 1I50) maintains a ~12-14 bp DNA bubble."
      },
      "es": {
        "pop": "Al lado, en Etapa B, la [[ARN Pol II|rna_pol2]] de doce subunidades abre una burbuja de 12 pares de bases.",
        "blueprint": "Lector Etapa B: el motor [[ARN Pol II|rna_pol2]] de 12 piezas abre una ventana local de 12-14 pb.",
        "scientific": "En Etapa B, la [[ARN Pol II|rna_pol2]] de 550 kDa y 12 subunidades (1I50) abre una burbuja de 12-14 pb."
      }
    },
    "cd.ch1.s2.02": {
      "en": {
        "pop": "Reading the 3-prime template strand, [[RNA Pol II|rna_pol2]] synthesizes complementary [[pre-mRNA|pre_mrna]] with uracil.",
        "blueprint": "Scanning template DNA 3'-to-5', [[RNA Pol II|rna_pol2]] outputs a single-strand [[pre-mRNA|pre_mrna]] copy using U.",
        "scientific": "Reading 3'-5' DNA, [[RNA Pol II|rna_pol2]] polymerizes rNTPs 5'-3' into nascent [[pre-mRNA|pre_mrna]] with uracil."
      },
      "es": {
        "pop": "Al leer la hebra molde 3 prima, [[ARN Pol II|rna_pol2]] sintetiza [[pre-ARNm|pre_mrna]] complementario con uracilo.",
        "blueprint": "Leyendo el molde 3'-5', [[ARN Pol II|rna_pol2]] emite una copia monocatenaria [[pre-ARNm|pre_mrna]] con U.",
        "scientific": "Leyendo ADN 3'-5', [[ARN Pol II|rna_pol2]] polimeriza rNTP 5'-3' formando [[pre-ARNm|pre_mrna]] con uracilo."
      }
    },
    "cd.ch1.s2.03": {
      "en": {
        "pop": "A 5-prime m7G cap and 3-prime poly-A tail shield nascent [[pre-mRNA|pre_mrna]] and license nuclear export.",
        "blueprint": "Header and trailer tags (5' m7G cap, 3' poly-A) armor [[pre-mRNA|pre_mrna]] and authorize pore clearance.",
        "scientific": "Co-transcriptional 5' m7G capping and 3' ~200-nt polyadenylation stabilize [[pre-mRNA|pre_mrna]] for export."
      },
      "es": {
        "pop": "Una caperuza 5 prima m7G y cola poli-A protegen el [[pre-ARNm|pre_mrna]] y autorizan su salida nuclear.",
        "blueprint": "Caperuza 5' m7G y cola 3' poli-A blindan el [[pre-ARNm|pre_mrna]] y habilitan el paso por el poro.",
        "scientific": "La caperuza 5' m7G y la cola poli-A (~200 nt) estabilizan el [[pre-ARNm|pre_mrna]] para la exportación."
      }
    },
    "cd.ch2.s0.01": {
      "en": {
        "pop": "Eukaryotic [[pre-mRNA|pre_mrna]] mixes coding exons with non-coding introns that must be removed cleanly.",
        "blueprint": "Raw eukaryotic [[pre-mRNA|pre_mrna]] interleaves coding exons with non-coding intron spacers needing removal.",
        "scientific": "Primary eukaryotic [[pre-mRNA|pre_mrna]] contains coding exons interrupted by non-coding intronic sequences."
      },
      "es": {
        "pop": "El [[pre-ARNm|pre_mrna]] eucariota mezcla exones codificantes con intrones que deben retirarse con precisión.",
        "blueprint": "El [[pre-ARNm|pre_mrna]] crudo intercala exones útiles con separadores intrónicos que deben depurarse.",
        "scientific": "El [[pre-ARNm|pre_mrna]] primario eucariota intercala exones codificantes con secuencias intrónicas no codificantes."
      }
    },
    "cd.ch2.s0.02": {
      "en": {
        "pop": "The megadalton [[spliceosome|spliceosome]] binds GU and AG splice signals across five snRNP subcomplexes.",
        "blueprint": "Stage C processor: the 27 nm [[spliceosome|spliceosome]] locks onto 5' GU, branch A and 3' AG markers.",
        "scientific": "The ~2.7 MDa [[spliceosome|spliceosome]] (U1-U6 snRNPs, PDB 5YZG) recognizes 5' GU, branch-A and 3' AG motifs."
      },
      "es": {
        "pop": "El [[espliceosoma|spliceosome]] megadalton reconoce señales GU y AG mediante cinco subcomplejos snRNP.",
        "blueprint": "Procesador Etapa C: el [[espliceosoma|spliceosome]] de 27 nm detecta marcas 5' GU, A ramificada y 3' AG.",
        "scientific": "El [[espliceosoma|spliceosome]] (~2,7 MDa, snRNP U1-U6, PDB 5YZG) reconoce sitios 5' GU, A y 3' AG."
      }
    },
    "cd.ch2.s0.03": {
      "en": {
        "pop": "Two Mg2+ cuts loop each intron into an excised [[intron lariat|intron_lariat]] while sealing [[exons|exon_junction]].",
        "blueprint": "Dual Mg2+ transesterifications eject each [[intron lariat|intron_lariat]] and weld adjacent [[exons|exon_junction]].",
        "scientific": "Two Mg2+-catalyzed steps excise a 2'-5' [[intron lariat|intron_lariat]] and ligate flanking [[exons|exon_junction]]."
      },
      "es": {
        "pop": "Dos cortes con Mg2+ forman un [[lazo intrónico|intron_lariat]] descartado mientras sellan los [[exones|exon_junction]].",
        "blueprint": "Dos pasos con Mg2+ expulsan cada [[lazo intrónico|intron_lariat]] y sueldan los [[exones|exon_junction]] vecinos.",
        "scientific": "Dos transesterificaciones con Mg2+ escinden el [[lazo intrónico|intron_lariat]] 2'-5' y ligan [[exones|exon_junction]]."
      }
    },
    "cd.ch2.s1.01": {
      "en": {
        "pop": "In Isoform A, the [[spliceosome|spliceosome]] joins Exons 1, 2 and 3 into one continuous [[exon junction|exon_junction]].",
        "blueprint": "Default Isoform A: the [[spliceosome|spliceosome]] keeps Exons 1+2+3 wired across a full [[exon junction|exon_junction]].",
        "scientific": "Canonical Isoform A retains cassette Exon 2 in the [[spliceosome|spliceosome]], sealing all [[exons|exon_junction]]."
      },
      "es": {
        "pop": "En la Isoforma A, el [[espliceosoma|spliceosome]] une los Exones 1, 2 y 3 en una [[unión de exones|exon_junction]] continua.",
        "blueprint": "Isoforma A base: el [[espliceosoma|spliceosome]] enlaza Exones 1+2+3 en una [[unión de exones|exon_junction]] completa.",
        "scientific": "La Isoforma A retiene el exón 2 en el [[espliceosoma|spliceosome]], ligando todos los [[exones|exon_junction]] (1-2-3)."
      }
    },
    "cd.ch2.s1.02": {
      "en": {
        "pop": "Like editing one raw script into two cuts, the [[spliceosome|spliceosome]] keeps or skips [[exons|exon_junction]].",
        "blueprint": "Flipping to Isoform B makes the [[spliceosome|spliceosome]] bypass Exon 2 and re-route [[exons|exon_junction]] 1 to 3.",
        "scientific": "Alternative splicing in the [[spliceosome|spliceosome]] (5YZG) skips cassette Exon 2 across [[exons|exon_junction]]."
      },
      "es": {
        "pop": "Como editar un guion en dos cortes, el [[espliceosoma|spliceosome]] conserva o salta [[exones|exon_junction]].",
        "blueprint": "Al pasar a Isoforma B, el [[espliceosoma|spliceosome]] omite el Exón 2 y enruta los [[exones|exon_junction]] 1 con 3.",
        "scientific": "El empalme alternativo del [[espliceosoma|spliceosome]] (5YZG) omite el exón 2 al unir [[exones|exon_junction]]."
      }
    },
    "cd.ch2.s1.03": {
      "en": {
        "pop": "Alternative splicing lets 20,000 human genes build over 100,000 distinct proteins from [[exons|exon_junction]].",
        "blueprint": "Combinatorial routing across [[exon junctions|exon_junction]] expands ~20,000 genes into >100,000 proteins.",
        "scientific": "Tissue-specific [[exon|exon_junction]] combinations expand ~20,000 human protein-coding genes to >100,000 isoforms."
      },
      "es": {
        "pop": "El empalme alternativo permite que 20.000 genes generen más de 100.000 proteínas desde [[exones|exon_junction]].",
        "blueprint": "Combinar distintas [[uniones de exones|exon_junction]] amplía ~20.000 genes en más de 100.000 proteínas.",
        "scientific": "Combinaciones tisulares de [[exones|exon_junction]] expanden ~20.000 genes humanos a más de 100.000 isoformas."
      }
    },
    "cd.ch3.s0.01": {
      "en": {
        "pop": "Capped, spliced [[mature mRNA|mature_mrna]] crosses the 120 nm eight-fold [[Nuclear Pore Complex|npc]] into cytosol.",
        "blueprint": "Stage D handoff: cleared [[mature mRNA|mature_mrna]] exits the 120 nm eight-fold [[NPC airlock|npc]] to cytosol.",
        "scientific": "Export-competent [[mature mRNA|mature_mrna]] transits the 120 nm 8-fold [[NPC|npc]] (40 nm channel) to cytosol."
      },
      "es": {
        "pop": "El [[ARNm maduro|mature_mrna]] con caperuza cruza el [[complejo de poro nuclear|npc]] de 120 nm hacia el citosol.",
        "blueprint": "Entrega Etapa D: el [[ARNm maduro|mature_mrna]] sale por la esclusa [[NPC|npc]] octogonal de 120 nm al citosol.",
        "scientific": "El [[ARNm maduro|mature_mrna]] competente atraviesa el [[NPC|npc]] octogonal (120 nm, canal 40 nm) al citosol."
      }
    },
    "cd.ch3.s0.02": {
      "en": {
        "pop": "Export receptors thread [[mature mRNA|mature_mrna]] through FG-repeat channels inside the [[nuclear pore|npc]].",
        "blueprint": "NXF1 transport carriers guide [[mature mRNA|mature_mrna]] selectively across the FG mesh inside the [[NPC|npc]].",
        "scientific": "NXF1-NXT1 receptors translocate [[mature mRNA|mature_mrna]] RNP complexes through FG-nucleoporins in [[NPC|npc]]."
      },
      "es": {
        "pop": "Receptores de exportación guían el [[ARNm maduro|mature_mrna]] por canales FG dentro del [[poro nuclear|npc]].",
        "blueprint": "Transportadores NXF1 pasan el [[ARNm maduro|mature_mrna]] de forma selectiva por la malla FG del [[NPC|npc]].",
        "scientific": "Los receptores NXF1-NXT1 translocan complejos [[ARNm maduro|mature_mrna]] por nucleoporinas FG del [[NPC|npc]]."
      }
    },
    "cd.ch3.s0.03": {
      "en": {
        "pop": "Once outside, multiple ribosomes load onto one [[mature mRNA|mature_mrna]] to form a busy [[polysome|polysome]] arc.",
        "blueprint": "In cytosol, multiple ribosomes queue along one [[mature mRNA|mature_mrna]] bus as a high-output [[polysome|polysome]].",
        "scientific": "Cytosolic ribosomes assemble sequentially along one [[mature mRNA|mature_mrna]] into a 100-150 nm [[polysome|polysome]]."
      },
      "es": {
        "pop": "Ya afuera, varios ribosomas cargan un solo [[ARNm maduro|mature_mrna]] formando un arco de [[polisoma|polysome]].",
        "blueprint": "En citosol, varios ribosomas se alinean en un bus de [[ARNm maduro|mature_mrna]] creando un [[polisoma|polysome]].",
        "scientific": "Múltiples ribosomas se acoplan sobre un [[ARNm maduro|mature_mrna]] formando un [[polisoma|polysome]] de 100-150 nm."
      }
    },
    "cd.ch3.s1.01": {
      "en": {
        "pop": "Focus on one [[80S ribosome|ribosome_80s]], built from a 40S decoding unit and a 60S catalytic subunit.",
        "blueprint": "Zoom to a single [[80S assembler|ribosome_80s]]: a 40S code reader clamped atop a 60S peptide-bond engine.",
        "scientific": "The 4.3 MDa eukaryotic [[80S ribosome|ribosome_80s]] (PDB 4UG0, ~29 nm) pairs 40S decoding with 60S catalysis."
      },
      "es": {
        "pop": "Enfoca un [[ribosoma 80S|ribosome_80s]], formado por una subunidad decodificadora 40S y otra catalítica 60S.",
        "blueprint": "Vista de un [[ensamblador 80S|ribosome_80s]]: lector de código 40S acoplado sobre un motor catalítico 60S.",
        "scientific": "El [[ribosoma 80S|ribosome_80s]] eucariota (4,3 MDa, PDB 4UG0, ~29 nm) acopla lectura 40S y catálisis 60S."
      }
    },
    "cd.ch3.s1.02": {
      "en": {
        "pop": "L-shaped [[tRNAs|trna_ape]] match three-base anticodons to [[mRNA|mature_mrna]] codons inside the [[80S ribosome|ribosome_80s]].",
        "blueprint": "Charged [[tRNA adaptors|trna_ape]] decode 3-base [[mRNA|mature_mrna]] triplets inside the [[80S|ribosome_80s]] 40S slot.",
        "scientific": "76-nt L-shaped [[aa-tRNAs|trna_ape]] (PDB 1EHZ) pair anticodons to [[mRNA|mature_mrna]] in [[80S|ribosome_80s]] (4UG0)."
      },
      "es": {
        "pop": "Los [[ARNt|trna_ape]] en L emparejan anticodones con codones de [[ARNm|mature_mrna]] en el [[ribosoma 80S|ribosome_80s]].",
        "blueprint": "Adaptadores [[ARNt|trna_ape]] decodifican tripletes de [[ARNm|mature_mrna]] en la ranura 40S del [[80S|ribosome_80s]].",
        "scientific": "Los [[aa-ARNt|trna_ape]] en L (76 nt, 1EHZ) aparean anticodones al [[ARNm|mature_mrna]] en [[80S|ribosome_80s]] (4UG0)."
      }
    },
    "cd.ch3.s1.03": {
      "en": {
        "pop": "Powered by GTP, each [[tRNA|trna_ape]] ratchets through A, P and E sites as the chain advances one codon.",
        "blueprint": "GTP-driven translocation steps each [[tRNA|trna_ape]] sequentially through A, P and E slots per 3-base shift.",
        "scientific": "eEF1A/eEF2 GTP hydrolysis ratchets [[tRNAs|trna_ape]] across A, P and E sites by one 3-nt codon per cycle."
      },
      "es": {
        "pop": "Con energía de GTP, cada [[ARNt|trna_ape]] avanza por los sitios A, P y E un codón por ciclo.",
        "blueprint": "La translocación con GTP desplaza cada [[ARNt|trna_ape]] por las ranuras A, P y E en pasos de 3 bases.",
        "scientific": "La hidrólisis de GTP (eEF1A/eEF2) desplaza [[ARNt|trna_ape]] por sitios A, P y E un triplete por ciclo."
      }
    },
    "cd.ch3.s2.01": {
      "en": {
        "pop": "Inside the 60S core of the [[80S ribosome|ribosome_80s]], ribosomal RNA itself catalyzes every peptide bond.",
        "blueprint": "At the 60S active bay of [[80S|ribosome_80s]], catalytic rRNA (not protein) welds every amino acid link.",
        "scientific": "The 28S rRNA peptidyl transferase center of [[80S ribosomes|ribosome_80s]] (4UG0) acts as a true ribozyme."
      },
      "es": {
        "pop": "En el centro 60S del [[ribosoma 80S|ribosome_80s]], el propio ARN ribosómico cataliza cada enlace peptídico.",
        "blueprint": "En la bahía 60S del [[80S|ribosome_80s]], el ARNr catalítico (no proteína) suelda cada aminoácido.",
        "scientific": "El centro peptidil-transferasa de ARNr 28S en el [[ribosoma 80S|ribosome_80s]] (4UG0) opera como ribozima."
      }
    },
    "cd.ch3.s2.02": {
      "en": {
        "pop": "The growing [[polypeptide|polypeptide]] threads through a 10 nm exit tunnel while spent [[tRNA|trna_ape]] leaves site E.",
        "blueprint": "The nascent [[polypeptide|polypeptide]] extrudes out a 10 nm shaft while deacylated [[tRNA|trna_ape]] ejects from E.",
        "scientific": "The nascent [[polypeptide|polypeptide]] exits the ~10 nm 60S tunnel as deacylated [[tRNA|trna_ape]] leaves site E."
      },
      "es": {
        "pop": "El [[polipéptido|polypeptide]] naciente cruza un túnel de 10 nm mientras el [[ARNt|trna_ape]] vacío sale por E.",
        "blueprint": "El [[polipéptido|polypeptide]] emerge por un conducto de 10 nm mientras el [[ARNt|trna_ape]] descargado sale por E.",
        "scientific": "El [[polipéptido|polypeptide]] recorre el túnel 60S (~10 nm) mientras el [[ARNt|trna_ape]] desacilado sale por E."
      }
    },
    "cd.ch3.s2.03": {
      "en": {
        "pop": "Across the [[polysome|polysome]], dozens of [[polypeptide|polypeptide]] chains emerge in parallel from one transcript.",
        "blueprint": "Parallel [[polysome|polysome]] scheduling multiplies throughput, extruding many [[polypeptide|polypeptide]] units at once.",
        "scientific": "Each cytosolic [[polysome|polysome]] amplifies expression by simultaneously elongating multiple [[polypeptides|polypeptide]]."
      },
      "es": {
        "pop": "En el [[polisoma|polysome]], decenas de cadenas de [[polipéptido|polypeptide]] brotan en paralelo de un solo transcrito.",
        "blueprint": "El trabajo paralelo del [[polisoma|polysome]] multiplica la salida de [[polipéptidos|polypeptide]] desde un ARNm.",
        "scientific": "Cada [[polisoma|polysome]] amplifica la expresión elongando múltiples [[polipéptidos|polypeptide]] simultáneamente."
      }
    },
    "cd.ch4.s0.01": {
      "en": {
        "pop": "Unfolded [[polypeptide|polypeptide]] segments expose sticky hydrophobic patches that risk clumping in cytosol.",
        "blueprint": "Stage E challenge: exposed hydrophobic stretches on nascent [[polypeptides|polypeptide]] risk misfolded tangles.",
        "scientific": "Newly extruded [[polypeptide|polypeptide]] regions expose nonpolar residues prone to cytosolic aggregation."
      },
      "es": {
        "pop": "Los tramos desplegados del [[polipéptido|polypeptide]] exponen zonas hidrofóbicas que podrían agruparse mal.",
        "blueprint": "Reto Etapa E: los tramos hidrofóbicos de [[polipéptidos|polypeptide]] recién salidos corren riesgo de agregarse.",
        "scientific": "Regiones nacientes del [[polipéptido|polypeptide]] exponen residuos apolares propensos a agregación citosólica."
      }
    },
    "cd.ch4.s0.02": {
      "en": {
        "pop": "ATP-driven [[Hsp70|hsp70]] clamps nascent chains, then hands stubborn folds into the [[TRiC barrel|tric_groel]].",
        "blueprint": "ATP-gated [[Hsp70|hsp70]] guards emerging chains and routes complex substrates into the [[TRiC chamber|tric_groel]].",
        "scientific": "ATPase [[Hsp70|hsp70]] (PDB 2KHO, ~8 nm) shields chains and transfers folds to [[TRiC/CCT|tric_groel]] (6NR8)."
      },
      "es": {
        "pop": "La chaperona [[Hsp70|hsp70]] con ATP sujeta cadenas nacientes y pasa pliegues complejos al [[barril TRiC|tric_groel]].",
        "blueprint": "[[Hsp70|hsp70]] con ATP protege cadenas salientes y deriva sustratos complejos a la [[cámara TRiC|tric_groel]].",
        "scientific": "La ATPasa [[Hsp70|hsp70]] (PDB 2KHO, ~8 nm) blinda cadenas y las pasa al barril [[TRiC/CCT|tric_groel]] (6NR8)."
      }
    },
    "cd.ch4.s0.03": {
      "en": {
        "pop": "Inside [[TRiC/GroEL|tric_groel]], isolated folding completes native 3D beta-globin for [[wild-type HbA|hb_wildtype]].",
        "blueprint": "Inside the [[TRiC/GroEL|tric_groel]] folding bay, native 3D beta-globin assembles into soluble [[HbA|hb_wildtype]].",
        "scientific": "Encapsulation in [[TRiC/GroEL|tric_groel]] (6NR8/1AON) yields native beta-globin for [[HbA|hb_wildtype]] (2HHB)."
      },
      "es": {
        "pop": "Dentro de [[TRiC/GroEL|tric_groel]], el plegado aislado completa la beta-globina nativa para la [[HbA silvestre|hb_wildtype]].",
        "blueprint": "Dentro de la cámara [[TRiC/GroEL|tric_groel]], la beta-globina adopta su forma 3D para [[HbA|hb_wildtype]].",
        "scientific": "El aislamiento en [[TRiC/GroEL|tric_groel]] (6NR8/1AON) produce beta-globina nativa para [[HbA|hb_wildtype]] (2HHB)."
      }
    },
    "cd.ch4.s1.01": {
      "en": {
        "pop": "In [[wild-type HbA|hb_wildtype]], codon 6 reads GAG, placing charged hydrophilic glutamate on the surface.",
        "blueprint": "Baseline spec: codon 6 GAG installs polar negative Glu6 on the exterior of soluble [[HbA|hb_wildtype]].",
        "scientific": "Wild-type [[HbA|hb_wildtype]] (PDB 2HHB) encodes GAG (Glu6), exposing a polar carboxylate on the beta surface."
      },
      "es": {
        "pop": "En la [[HbA silvestre|hb_wildtype]], el codón 6 dice GAG y coloca glutamato cargado en la superficie.",
        "blueprint": "Especificación base: el codón 6 GAG instala Glu6 polar y negativo en la superficie de [[HbA|hb_wildtype]].",
        "scientific": "La [[HbA|hb_wildtype]] silvestre (PDB 2HHB) codifica GAG (Glu6), exponiendo un carboxilato polar superficial."
      }
    },
    "cd.ch4.s1.02": {
      "en": {
        "pop": "Flip one A to T so GAG becomes GTG, swapping Glu6 for nonpolar valine in [[sickle HbS|hb_sickle_fiber]].",
        "blueprint": "One A-to-T mutation flips GAG to GTG, replacing surface Glu6 with hydrophobic Val6 in [[HbS|hb_sickle_fiber]].",
        "scientific": "A single A-to-T transversion (GAG->GTG/GUG) substitutes Glu6Val on beta-globin [[HbS|hb_sickle_fiber]]."
      },
      "es": {
        "pop": "Cambia una A por T de GAG a GTG, sustituyendo Glu6 por valina apolar en la [[HbS falciforme|hb_sickle_fiber]].",
        "blueprint": "Un giro A a T cambia GAG a GTG y reemplaza Glu6 superficial por Val6 hidrofóbica en [[HbS|hb_sickle_fiber]].",
        "scientific": "Una transversión A->T (GAG->GTG/GUG) sustituye Glu6Val en la beta-globina [[HbS|hb_sickle_fiber]]."
      }
    },
    "cd.ch4.s1.03": {
      "en": {
        "pop": "Swapping Glu6 for Val6 turns a smooth peg into a sticky patch that locks [[HbS fibers|hb_sickle_fiber]] together.",
        "blueprint": "Surface Val6 forms a hydrophobic latch that self-assembles deoxy [[HbS fibers|hb_sickle_fiber]] into rigid rods.",
        "scientific": "Deoxy Val6 docks into adjacent Phe85/Leu88 pockets (PDB 2HBS), polymerizing rigid [[HbS fibers|hb_sickle_fiber]]."
      },
      "es": {
        "pop": "Cambiar Glu6 por Val6 vuelve una clavija lisa un parche pegajoso que traba [[fibras HbS|hb_sickle_fiber]].",
        "blueprint": "Val6 superficial crea un broche hidrofóbico que ensambla [[fibras HbS|hb_sickle_fiber]] rígidas sin oxígeno.",
        "scientific": "Val6 desoxigenada encaja en bolsillos Phe85/Leu88 (2HBS), polimerizando [[fibras HbS|hb_sickle_fiber]] rígidas."
      }
    },
    "cd.ch4.s2.01": {
      "en": {
        "pop": "Mutations are not always harmful: switch the bench to bacterial [[AcrB efflux pump|acrb_pocket]].",
        "blueprint": "Compare an adaptive edit: switch the bench to E. coli's [[AcrB multidrug efflux port|acrb_pocket]].",
        "scientific": "Not all missense changes are deleterious: inspect E. coli AcrAB-TolC [[AcrB|acrb_pocket]] (PDB 5O66)."
      },
      "es": {
        "pop": "Las mutaciones no siempre dañan: cambia el banco a la [[bomba bacteriana AcrB|acrb_pocket]].",
        "blueprint": "Compara un cambio adaptativo: pasa el banco al [[puerto de eflujo AcrB|acrb_pocket]] de E. coli.",
        "scientific": "No toda mutación es perjudicial: observa el bolsillo [[AcrB|acrb_pocket]] de AcrAB-TolC en E. coli (5O66)."
      }
    },
    "cd.ch4.s2.02": {
      "en": {
        "pop": "Changing GGC to GAC swaps Gly288 for Asp288, reshaping the distal [[AcrB binding pocket|acrb_pocket]].",
        "blueprint": "A single G-to-A edit (GGC to GAC) replaces Gly288 with Asp288, retooling the [[AcrB cavity|acrb_pocket]].",
        "scientific": "A G-to-A transition (GGC->GAC, Gly288Asp) remodels polarity and geometry in the [[AcrB pocket|acrb_pocket]]."
      },
      "es": {
        "pop": "Cambiar GGC a GAC sustituye Gly288 por Asp288, remodelando el [[bolsillo distal AcrB|acrb_pocket]].",
        "blueprint": "Un cambio G a A (GGC a GAC) sustituye Gly288 por Asp288 y rediseña la [[cavidad AcrB|acrb_pocket]].",
        "scientific": "Una transición G->A (GGC->GAC, Gly288Asp) remodela polaridad y geometría en el [[bolsillo AcrB|acrb_pocket]]."
      }
    },
    "cd.ch4.s2.03": {
      "en": {
        "pop": "Under antibiotic pressure, mutant [[AcrB pockets|acrb_pocket]] expel fluoroquinolone faster so carriers survive.",
        "blueprint": "Under drug load, modified [[AcrB pumps|acrb_pocket]] boost fluoroquinolone export so mutant cells outlive peers.",
        "scientific": "Under fluoroquinolone selection, Asp288 [[AcrB|acrb_pocket]] variants increase drug efflux and fitness."
      },
      "es": {
        "pop": "Bajo presión antibiótica, el [[bolsillo AcrB|acrb_pocket]] mutado expulsa fluoroquinolonas más rápido y sobrevive.",
        "blueprint": "Con antibiótico, las [[bombas AcrB|acrb_pocket]] alteradas aceleran la expulsión del fármaco y dan ventaja.",
        "scientific": "Bajo fluoroquinolonas, la variante Asp288 de [[AcrB|acrb_pocket]] eleva el eflujo y la supervivencia bacteriana."
      }
    },
    "cd.ch5.s0.01": {
      "en": {
        "pop": "Zoom to 0.1 to 0.5 nm in the [[codon atoms|codon_atoms]] inset to see one letter change at atomic scale.",
        "blueprint": "Atomic probe (0.1-0.5 nm): inspect the exact nucleotide bit flip inside the [[codon inset|codon_atoms]].",
        "scientific": "At 0.1-0.5 nm atomic scale, the [[codon|codon_atoms]] inset resolves individual base-pair hydrogen bonds."
      },
      "es": {
        "pop": "Acércate a 0,1-0,5 nm en los [[átomos del codón|codon_atoms]] para ver un cambio de letra a escala atómica.",
        "blueprint": "Sonda atómica (0,1-0,5 nm): observa el cambio exacto de un bit nucleotídico en los [[átomos del codón|codon_atoms]].",
        "scientific": "A escala atómica de 0,1-0,5 nm, los [[átomos del codón|codon_atoms]] muestran cada puente de hidrógeno."
      }
    },
    "cd.ch5.s0.02": {
      "en": {
        "pop": "Across [[codon atoms|codon_atoms]], C, H, N, O and P geometry flips specific hydrogen-bond donors and acceptors.",
        "blueprint": "Within [[codon atoms|codon_atoms]], C, H, N, O and P positions invert exact 0.29 nm H-bond pairing rules.",
        "scientific": "In [[codon atoms|codon_atoms]], C, H, N, O, P rings alter 0.28-0.30 nm Watson-Crick H-bond donor-acceptor sets."
      },
      "es": {
        "pop": "En los [[átomos del codón|codon_atoms]], la geometría de C, H, N, O y P invierte donadores y aceptores de H.",
        "blueprint": "Dentro de los [[átomos del codón|codon_atoms]], C, H, N, O y P cambian las reglas de enlaces H a 0,29 nm.",
        "scientific": "En [[átomos del codón|codon_atoms]], los anillos C, H, N, O y P alteran enlaces H Watson-Crick de 0,28-0,30 nm."
      }
    },
    "cd.ch5.s0.03": {
      "en": {
        "pop": "Catalytic Mg2+ ions steady [[codon atoms|codon_atoms]] whether flipping GAG to GTG or GGC to GAC.",
        "blueprint": "Divalent Mg2+ cofactors stabilize phosphate geometry across [[codon atoms|codon_atoms]] in both edits.",
        "scientific": "Divalent Mg2+ coordinates phosphate oxygens across [[codon atoms|codon_atoms]] in GAG->GTG and GGC->GAC."
      },
      "es": {
        "pop": "Iones catalíticos de Mg2+ estabilizan los [[átomos del codón|codon_atoms]] tanto en GAG a GTG como en GGC a GAC.",
        "blueprint": "Cofactores de Mg2+ estabilizan el fosfato en los [[átomos del codón|codon_atoms]] durante ambos cambios.",
        "scientific": "El Mg2+ divalente coordina oxígenos de fosfato en [[átomos del codón|codon_atoms]] para GAG->GTG y GGC->GAC."
      }
    },
    "cd.ch5.s1.01": {
      "en": {
        "pop": "One [[atomic substitution|codon_atoms]] alters side-chain chemistry, protein folding and organism survival.",
        "blueprint": "Causal chain: one [[atomic edit|codon_atoms]] ripples upward into side-chain polarity, 3D folding and fitness.",
        "scientific": "A single [[nucleotide change|codon_atoms]] (0.5 nm) propagates from residue chemistry to population fitness."
      },
      "es": {
        "pop": "Una sola [[sustitución atómica|codon_atoms]] cambia la química lateral, el plegado y la supervivencia.",
        "blueprint": "Cadena causal: una [[edición atómica|codon_atoms]] escala hacia polaridad, plegado 3D y aptitud biológica.",
        "scientific": "Un solo [[cambio nucleotídico|codon_atoms]] (0,5 nm) repercute desde la cadena lateral hasta la aptitud poblacional."
      }
    },
    "cd.ch5.s1.02": {
      "en": {
        "pop": "Carrying both [[HbA|hb_wildtype]] and [[HbS|hb_sickle_fiber]] resists severe malaria, driving balancing selection.",
        "blueprint": "Heterozygotes pairing [[HbA|hb_wildtype]] with [[HbS|hb_sickle_fiber]] resist malaria, stabilizing both alleles.",
        "scientific": "Heterozygous [[HbA|hb_wildtype]]/[[HbS|hb_sickle_fiber]] protection against Plasmodium drives balancing selection."
      },
      "es": {
        "pop": "Portar [[HbA|hb_wildtype]] y [[HbS|hb_sickle_fiber]] protege contra malaria grave, generando selección equilibradora.",
        "blueprint": "Los heterocigotos con [[HbA|hb_wildtype]] y [[HbS|hb_sickle_fiber]] resisten malaria y mantienen ambos alelos.",
        "scientific": "El heterocigoto [[HbA|hb_wildtype]]/[[HbS|hb_sickle_fiber]] frente a Plasmodium ilustra selección equilibradora."
      }
    },
    "cd.ch5.s1.03": {
      "en": {
        "pop": "Meanwhile, antibiotics favor mutant [[AcrB|acrb_pocket]] carriers, driving directional natural selection.",
        "blueprint": "In drug-exposed bacteria, mutant [[AcrB|acrb_pocket]] sweeps the population via directional selection.",
        "scientific": "Under antibiotic pressure, Asp288 [[AcrB|acrb_pocket]] rises toward fixation via directional selection."
      },
      "es": {
        "pop": "En cambio, los antibióticos favorecen a mutantes [[AcrB|acrb_pocket]] mediante selección natural direccional.",
        "blueprint": "En bacterias bajo fármaco, la variante [[AcrB|acrb_pocket]] barre la población por selección direccional.",
        "scientific": "Bajo antibióticos, la variante Asp288 de [[AcrB|acrb_pocket]] avanza a fijación por selección direccional."
      }
    },
    "cd.ch5.s2.01": {
      "en": {
        "pop": "From [[chromatin|chromatin]] to [[spliceosome|spliceosome]] and [[80S ribosomes|ribosome_80s]], one pipeline builds every enzyme.",
        "blueprint": "Recap 1: [[chromatin|chromatin]], [[spliceosome|spliceosome]] and [[80S ribosomes|ribosome_80s]] form one unbroken production line.",
        "scientific": "Summary: [[chromatin|chromatin]], [[spliceosome|spliceosome]] (5YZG) and [[80S ribosomes|ribosome_80s]] (4UG0) link code to proteome."
      },
      "es": {
        "pop": "De [[cromatina|chromatin]] a [[espliceosoma|spliceosome]] y [[ribosomas 80S|ribosome_80s]], una sola línea fabrica cada enzima.",
        "blueprint": "Resumen 1: [[cromatina|chromatin]], [[espliceosoma|spliceosome]] y [[ribosomas 80S|ribosome_80s]] operan como una cadena continua.",
        "scientific": "Resumen: [[cromatina|chromatin]], [[espliceosoma|spliceosome]] (5YZG) y [[ribosomas 80S|ribosome_80s]] (4UG0) unen genoma y proteoma."
      }
    },
    "cd.ch5.s2.02": {
      "en": {
        "pop": "Chaperones like [[TRiC|tric_groel]] fold chains whose fate traces back to single [[codon atoms|codon_atoms]].",
        "blueprint": "Recap 2: [[TRiC|tric_groel]] folding and evolutionary fitness both hinge on individual [[codon atoms|codon_atoms]].",
        "scientific": "[[TRiC|tric_groel]]-assisted folding and molecular evolution both emerge from single [[codon atoms|codon_atoms]]."
      },
      "es": {
        "pop": "Chaperonas como [[TRiC|tric_groel]] pliegan cadenas cuyo destino nace en cada [[átomo del codón|codon_atoms]].",
        "blueprint": "Resumen 2: el plegado en [[TRiC|tric_groel]] y la evolución dependen de cada [[átomo del codón|codon_atoms]].",
        "scientific": "El plegado en [[TRiC|tric_groel]] y la evolución molecular emergen desde los [[átomos del codón|codon_atoms]]."
      }
    },
    "cd.ch5.s2.03": {
      "en": {
        "pop": "Test the splicing and mutation toggles now, then continue to Bioenergetics to see what powers it all.",
        "blueprint": "Try both splicing and mutation toggles now, or advance to Bioenergetics to inspect the ATP supply chain.",
        "scientific": "Explore splicing and mutation toggles now, then proceed to Bioenergetics for cellular ATP generation."
      },
      "es": {
        "pop": "Prueba ahora los controles de empalme y mutación, y sigue a Bioenergética para ver qué impulsa todo.",
        "blueprint": "Prueba los botones de empalme y mutación ahora, o avanza a Bioenergética para inspeccionar el flujo ATP.",
        "scientific": "Explora ahora los controles de empalme y mutación, y continúa a Bioenergética para ver el ATP celular."
      }
    }
  }
};
