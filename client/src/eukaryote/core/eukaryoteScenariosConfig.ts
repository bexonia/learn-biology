import type { EukaryoteScenarioId, EukaryoteScenarioConfig } from '../types/eukaryoteBiology';

export const EUKARYOTE_SCENARIOS_LIST: EukaryoteScenarioConfig[] = [
  {
    "num": "01",
    "id": "eukaryotic_animal_cell",
    "folder": "01_eukaryotic_animal_cell",
    "tier": "Tier 1 — Macro-Scale Whole-Cell Overviews",
    "title": "WHOLE ANIMAL CELL 3/4 CUTAWAY & INTERACTIVE ORGANELLE ATLAS",
    "subtitle": "Unlike a prokaryotic cell where transcription, translation, and metabolism occur in a single shared cytoplasmic compartment, the eukaryotic animal cell is a ~20 µm metrop...",
    "analogy": "In our 3D interactive hub, the Whole Animal Cell is sliced open via a surgical 3/4 wedge cutaway. Motor proteins (kinesin and dynein) actively stream vesicles along radiating microtubules from the perinuclear Golgi toward the plasma membrane; mitochondria pulse with inner-membrane potential; and the nuclear envelope continuously exchanges mRNA and proteins through octagonal Nuclear Pore Complexes. Clicking any organelle callout smoothly flies the camera into that compartment and opens its molecular drill-down portal.",
    "scaleTag": "EUKARYOTE SCENARIO 01 • 20 ΜM × 15 ΜM (VOLUME ~ 4,000 ΜM³) • PDB: 4V6X / 5GUP",
    "glb": "/eukaryote/models/eukaryotic_animal_cell.glb",
    "pdb": "4V6X, 5GUP",
    "pronounce": "[eukaryotic-animal-cell]",
    "sliderLabel": "ENVELOPE & ORGANELLE CUTAWAY PEEL:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Organelle System Filte",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Cytosolic ATP / GTP ",
      "🛑 Energy Depleted"
    ],
    "upstream": "Extracellular blood/interstitial fluid nutrients (D-glucose via GLUT transporters, amino acids, LDL-cholesterol, O₂, growth f",
    "coupling": "Inputs: D-Glucose + 6 O₂ + fatty acids + amino acids (metabolic fu ➔ Outputs: Secreted Glycoproteins, Collagen, Hormones & Neurotransmit",
    "downstream": "Feeds every subcellular organelle scenario (Scenarios 03–36): glucose/pyruvate → Mitochondria (19); nascent polypeptides → Ro",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~2 × 10⁹ ATP molecules hydrolyzed and resynt"
      ],
      [
        "ENERGY CURRENCY",
        "Cytosolic ATP / GTP (~5 mM pool regenerated "
      ],
      [
        "BIOPHYSICAL SCALE",
        "20 µm × 15 µm (Volume ~ 4,000 µm³)"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4V6X & 5GUP"
      ]
    ],
    "resources": [
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell (Alberts): Visualizing Cells",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26857/"
      },
      {
        "title": "RCSB PDB-101 — Cellular Landscapes by David Goodsell",
        "url": "https://pdb101.rcsb.org/sci-art/goodsell-gallery"
      },
      {
        "title": "Allen Institute for Cell Science — 3D Cell Viewer",
        "url": "https://www.allencell.org/3d-cell-viewer.html"
      },
      {
        "title": "RCSB PDB Structure 4V6X — Human 80S Ribosome",
        "url": "https://www.rcsb.org/structure/4V6X"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Cell_PlasmaMembrane",
        "name": "Plasma Membrane & Microvilli Cut…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane & Microvilli Cutaway Shell. Structural source: Lipid Bilayer + Glycocalyx. Color taxonomy: Inner/Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -4.0,
          -6.0
        ]
      },
      {
        "meshName": "Piece_Cell_Nucleus",
        "name": "Double-Membraned Nucleus, Lamina…",
        "badge": "NUCLEUS",
        "color": "#7209B7",
        "desc": "Double-Membraned Nucleus, Lamina & Nucleolus. Structural source: 5GUP / 1AOI Chromatin Core. Color taxonomy: Nuclear Royal Purple (#7209B7).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Cell_RoughSmoothER",
        "name": "Perinuclear Rough & Smooth Endop…",
        "badge": "ROUGHS",
        "color": "#00B4D8",
        "desc": "Perinuclear Rough & Smooth Endoplasmic Reticulum. Structural source: 6W6L Sec61 + Sheet/Tubule Mesh. Color taxonomy: Endomembrane Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          2.0,
          3.0
        ]
      },
      {
        "meshName": "Piece_Cell_GolgiStack",
        "name": "Golgi Apparatus Cis–Medial–Trans…",
        "badge": "GOLGIS",
        "color": "#F77F00",
        "desc": "Golgi Apparatus Cis–Medial–Trans Ribbon. Structural source: Cisternal Stack + COP Vesicles. Color taxonomy: Golgi Warm Amber (#F77F00).",
        "dissocVector": [
          -6.5,
          -1.5,
          4.5
        ]
      },
      {
        "meshName": "Piece_Cell_Mitochondria",
        "name": "Mitochondrial Network",
        "badge": "MITOCH",
        "color": "#E63946",
        "desc": "Mitochondrial Network (Cristae & Matrix). Structural source: 5XTE / 6ZSC Respirasome. Color taxonomy: Bioenergetic Crimson (#E63946).",
        "dissocVector": [
          6.0,
          1.5,
          3.5
        ]
      },
      {
        "meshName": "Piece_Cell_LysosomePeroxisome",
        "name": "Lysosomes",
        "badge": "LYSOSO",
        "color": "#FFB703",
        "desc": "Lysosomes (pH 4.5) & Peroxisomes. Structural source: 6WM2 V-ATPase + 1DGF Catalase. Color taxonomy: Catalytic Gold (#FFB703).",
        "dissocVector": [
          5.5,
          -3.0,
          4.0
        ]
      },
      {
        "meshName": "Piece_Cell_CytoskeletonCentrosome",
        "name": "Centrosome",
        "badge": "CYTOSK",
        "color": "#3A86FF",
        "desc": "Centrosome (9×3 Centrioles), Microtubules & Actin Cortex. Structural source: 6U42 γ-TuRC + 3J8Y Tubulin. Color taxonomy: Cytoskeletal Cobalt Blue (#3A86FF).",
        "dissocVector": [
          2.5,
          5.5,
          -4.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Plasma Membrane & Extracellular Interface",
        "desc": "Orbit the outer plasma membrane and glycocalyx. Show how cholesterol rafts, ion pumps, and integ...",
        "spoken": "Stage 1 — The Plasma Membrane & Extracellular Interface. Orbit the outer plasma membrane and glycocalyx. Show how cholesterol rafts, ion pumps, and integrins selectively gate communication with the outside body.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Cell_PlasmaMembrane"
      },
      {
        "step": 2,
        "title": "2 : The Nucleus & Genetic Command Center",
        "desc": "Fly through the cytoplasm to the double-membraned Nucleus. Highlight Nuclear Pore Complexes expo...",
        "spoken": "Stage 2 — The Nucleus & Genetic Command Center. Fly through the cytoplasm to the double-membraned Nucleus. Highlight Nuclear Pore Complexes exporting capped/spliced mRNAs into the cytoplasm.",
        "color": "#7209B7",
        "targetPiece": "Piece_Cell_Nucleus"
      },
      {
        "step": 3,
        "title": "3 : The Endomembrane Secretory Highway",
        "desc": "Trace a ribosome docking on the Rough ER, budding via COPII vesicles into the Cis-to-Trans Golgi...",
        "spoken": "Stage 3 — The Endomembrane Secretory Highway. Trace a ribosome docking on the Rough ER, budding via COPII vesicles into the Cis-to-Trans Golgi Apparatus, and sorting to Lysosomes or secretory granules.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Cell_RoughSmoothER"
      },
      {
        "step": 4,
        "title": "4 : Mitochondrial Bioenergetic Power Grid",
        "desc": "Focus on the branching mitochondrial network consuming pyruvate and O₂ to pump out ATP that fuel...",
        "spoken": "Stage 4 — Mitochondrial Bioenergetic Power Grid. Focus on the branching mitochondrial network consuming pyruvate and O₂ to pump out ATP that fuels the entire cell.",
        "color": "#F77F00",
        "targetPiece": "Piece_Cell_GolgiStack"
      },
      {
        "step": 5,
        "title": "5 : Cytoskeletal Tracks & Motorized Transport",
        "desc": "Highlight the Centrosome radiating microtubules and cortical actin filaments, with Kinesin and D...",
        "spoken": "Stage 5 — Cytoskeletal Tracks & Motorized Transport. Highlight the Centrosome radiating microtubules and cortical actin filaments, with Kinesin and Dynein hauling organelles across the cell.",
        "color": "#E63946",
        "targetPiece": "Piece_Cell_Mitochondria"
      }
    ]
  },
  {
    "num": "02",
    "id": "kingdom_cell_comparison",
    "folder": "02_kingdom_cell_comparison",
    "tier": "Tier 1 — Macro-Scale Whole-Cell Overviews",
    "title": "COMPARATIVE EUKARYOTES: ANIMAL VS. PLANT VS. FUNGAL CELL ENVELOPES & ORGANELLES",
    "subtitle": "While all eukaryotes share a membrane-bound nucleus, mitochondria, ER, Golgi, and 80S ribosomes, the three major multicellular/crown eukaryotic lineages evolved radically...",
    "analogy": "Displays three side-by-side 3D architectural slices (Animal, Plant, Fungal). Adjusting extracellular osmolarity demonstrates why an animal cell swells and lyses in pure water while a plant cell builds healthy turgor pressure against its cellulose microfibril wall, and how hypertonic media triggers plasmolysis (plasma membrane pulling away from the wall between plasmodesmata).",
    "scaleTag": "EUKARYOTE SCENARIO 02 • 10–80 ΜM COMPARATIVE KINGDOM TRI-PANEL • PDB: 4HG6 / 7R04",
    "glb": "/eukaryote/models/kingdom_cell_comparison.glb",
    "pdb": "4HG6, 7R04",
    "pronounce": "[kingdom-cell-comparison]",
    "sliderLabel": "EXTRACELLULAR TONICITY (HYPOTONIC ↔ ISOTONIC ↔ HYPERTONIC):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Cell-Wall Inhibitor To",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ UDP-Sugar nucleotide",
      "🛑 Energy Depleted"
    ],
    "upstream": "Sunlight + CO₂ + H₂O + soil minerals (Plant); dietary organic macromolecules (Animal); extracellular enzymatic digests (Fungi",
    "coupling": "Inputs: UDP-Glucose (for plant CesA cellulose & fungal FKS1 β-gluc ➔ Outputs: Animal: Flexible Collagen/Integrin ECM & migratory tractio",
    "downstream": "Connects directly to Scenario 03 (Animal ECM/Integrins), Scenario 08 (Plasmodesmata & Animal Junctions), Scenario 18 (Plant C",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "CesA Rosette polymerizes ~300–500 glucose un"
      ],
      [
        "ENERGY CURRENCY",
        "UDP-Sugar nucleotide donors (UDP-Glc, UDP-Gl"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10–80 µm Comparative Kingdom Tri-Panel"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4HG6 & 7R04"
      ]
    ],
    "resources": [
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Plant Cell Wall",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26928/"
      },
      {
        "title": "RCSB PDB Structure 4HG6 — Cellulose Synthase Complex",
        "url": "https://www.rcsb.org/structure/4HG6"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cellulose Synthase",
        "url": "https://pdb101.rcsb.org/motm/242"
      },
      {
        "title": "Nature Reviews Microbiology — Architecture of the Fungal Cell Wall",
        "url": "https://www.nature.com/articles/nrmicro.2017.109"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_King_AnimalECM",
        "name": "Animal Cell",
        "badge": "ANIMAL",
        "color": "#06D6A0",
        "desc": "Animal Cell: Cholesterol Bilayer, Integrins & Collagen ECM. Structural source: 1BKV Collagen + 4G1E Integrin. Color taxonomy: Animal Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          -7.0,
          3.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_AnimalCortex",
        "name": "Animal Cortical Actin-Spectrin M…",
        "badge": "ANIMAL",
        "color": "#3A86FF",
        "desc": "Animal Cortical Actin-Spectrin Mesh & Centrosome. Structural source: F-Actin / Spectrin Network. Color taxonomy: Cortical Blue (#3A86FF).",
        "dissocVector": [
          -7.0,
          -3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_PlantCellWall",
        "name": "Plant Cell",
        "badge": "PLANTC",
        "color": "#E76F51",
        "desc": "Plant Cell: Cellulose Rosette (CesA), Hemicellulose & Pectin Wall. Structural source: 4HG6 CesA + Cellulose Microfibrils. Color taxonomy: Cell Wall Terracotta (#E76F51).",
        "dissocVector": [
          0.0,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_PlantChloroVacuole",
        "name": "Plant Chloroplast Grana, Central…",
        "badge": "PLANTC",
        "color": "#2EC4B6",
        "desc": "Plant Chloroplast Grana, Central Tonoplast Vacuole & Plasmodesmata. Structural source: 5XNL PSII + 7R04 Aquaporin. Color taxonomy: Photosynthetic Teal (#2EC4B6).",
        "dissocVector": [
          0.0,
          -3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_FungalChitinWall",
        "name": "Fungal Cell",
        "badge": "FUNGAL",
        "color": "#FFB703",
        "desc": "Fungal Cell: Chitin Layer, β-1,3/1,6-Glucan & Mannoprotein Coat. Structural source: 8IUG Chitin Synthase + Mannoproteins. Color taxonomy: Chitin Amber Gold (#FFB703).",
        "dissocVector": [
          7.0,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_FungalErgosterolPM",
        "name": "Fungal Plasma Membrane with Ergo…",
        "badge": "FUNGAL",
        "color": "#9D4EDD",
        "desc": "Fungal Plasma Membrane with Ergosterol & FKS1 Synthase. Structural source: Ergosterol Bilayer + 7Y36 FKS1. Color taxonomy: Fungal Violet (#9D4EDD).",
        "dissocVector": [
          7.0,
          -3.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Animal Flexibility vs. Walled Kingdoms",
        "desc": "Compare the naked, cholesterol-stabilized animal membrane tethered to collagen fibers against th...",
        "spoken": "Stage 1 — Animal Flexibility vs. Walled Kingdoms. Compare the naked, cholesterol-stabilized animal membrane tethered to collagen fibers against the rigid outer walls of plants and fungi.",
        "color": "#06D6A0",
        "targetPiece": "Piece_King_AnimalECM"
      },
      {
        "step": 2,
        "title": "2 : Plant Cellulose Rosettes & Turgor",
        "desc": "Zoom into the plant plasma membrane where hexameric CesA Rosette complexes extrude 18-chain crys...",
        "spoken": "Stage 2 — Plant Cellulose Rosettes & Turgor. Zoom into the plant plasma membrane where hexameric CesA Rosette complexes extrude 18-chain crystalline cellulose microfibrils guided by cortical microtubules.",
        "color": "#3A86FF",
        "targetPiece": "Piece_King_AnimalCortex"
      },
      {
        "step": 3,
        "title": "3 : Chloroplasts, Vacuole & Plasmodesmata",
        "desc": "Inspect how the plant central vacuole pushes the cytoplasm against the wall while ER-threaded pl...",
        "spoken": "Stage 3 — Chloroplasts, Vacuole & Plasmodesmata. Inspect how the plant central vacuole pushes the cytoplasm against the wall while ER-threaded plasmodesmata connect neighboring plant cells.",
        "color": "#E76F51",
        "targetPiece": "Piece_King_PlantCellWall"
      },
      {
        "step": 4,
        "title": "4 : Fungal Chitin & β-Glucan Armor",
        "desc": "Examine the layered fungal wall: inner crystalline chitin, middle cross-linked β-1,3/1,6-glucan,...",
        "spoken": "Stage 4 — Fungal Chitin & β-Glucan Armor. Examine the layered fungal wall: inner crystalline chitin, middle cross-linked β-1,3/1,6-glucan, and outer glycosylated mannoproteins.",
        "color": "#2EC4B6",
        "targetPiece": "Piece_King_PlantChloroVacuole"
      },
      {
        "step": 5,
        "title": "5 : Osmotic Stress & Pharmacological Targeting",
        "desc": "Demonstrate why antifungals (azoles targeting ergosterol, echinocandins targeting β-glucan) sele...",
        "spoken": "Stage 5 — Osmotic Stress & Pharmacological Targeting. Demonstrate why antifungals (azoles targeting ergosterol, echinocandins targeting β-glucan) selectively kill fungi without harming human animal cells.",
        "color": "#FFB703",
        "targetPiece": "Piece_King_FungalChitinWall"
      }
    ]
  },
  {
    "num": "03",
    "id": "ecm_integrin_focal_adhesion",
    "folder": "03_ecm_integrin_focal_adhesion",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "EXTRACELLULAR MATRIX (ECM), COLLAGEN TRIPLE HELIX & INTEGRIN FOCAL ADHESION",
    "subtitle": "Animal cells weave an intricate Extracellular Matrix (ECM) dominated by Type I/IV Collagen triple helices (Gly-X-Y repeats with hydroxyproline), elastic Fibronectin dimer...",
    "analogy": "Displays the three-tier mechanical bridge: Extracellular Collagen/Fibronectin above the membrane, α5β1 Integrin spanning the lipid bilayer (with divalent Mg²⁺/Mn²⁺ at the MIDAS metal-ion-dependent adhesion site), and the Talin–Vinculin–FAK clutch gripping F-Actin below. Dragging the mechanical tension slider unfolds the Talin rod domains and snaps Vinculin onto the stretched rod.",
    "scaleTag": "EUKARYOTE SCENARIO 03 • 120 NM TRANS-MEMBRANE MECHANOTRANSDUCTION COMPLEX • PDB: 3VI4 / 1BKV",
    "glb": "/eukaryote/models/ecm_integrin_focal_adhesion.glb",
    "pdb": "3VI4, 1BKV",
    "pronounce": "[ecm-integrin-focal-adhesion]",
    "sliderLabel": "INTEGRIN ALLOSTERIC STATE (BENT-INACTIVE ↔ EXTENDED-OPEN):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ MIDAS Cation Mode",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Actomyosin Mechanica",
      "🛑 Energy Depleted"
    ],
    "upstream": "Rough ER (13) & Golgi (15) procollagen/fibronectin secretion + Cortical Actomyosin (09) intracellular retrograde traction for",
    "coupling": "Inputs: Extracellular Fibronectin RGD motif & Cross-linked Collage ➔ Outputs: Mechanical traction force transmitted between cytoskeleton",
    "downstream": "Transmits mechanical tension to F-Actin/Myosin stress fibers (Scenario 09) and activates nuclear YAP/TAZ & ERK gene transcrip",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Integrin switch-blade extension ~10–50 ms; T"
      ],
      [
        "ENERGY CURRENCY",
        "Actomyosin Mechanical Tension (5–40 pN per T"
      ],
      [
        "BIOPHYSICAL SCALE",
        "120 nm Trans-Membrane Mechanotransduction Co"
      ],
      [
        "PRIMARY RCSB PDBS",
        "3VI4 & 1BKV"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Integrin",
        "url": "https://pdb101.rcsb.org/motm/134"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Collagen",
        "url": "https://pdb101.rcsb.org/motm/4"
      },
      {
        "title": "RCSB PDB Structure 3VI4 — Integrin α5β1 Headpiece with RGD",
        "url": "https://www.rcsb.org/structure/3VI4"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Integrin Mechanotransduction",
        "url": "https://www.nature.com/articles/nrm.2016.78"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_ECM_CollagenFibril",
        "name": "Type I Collagen Triple-Helix Fib…",
        "badge": "COLLAG",
        "color": "#F77F00",
        "desc": "Type I Collagen Triple-Helix Fibrils (Gly-Pro-Hyp). Structural source: 1BKV / 3HR2 Collagen. Color taxonomy: Collagen Warm Amber (#F77F00).",
        "dissocVector": [
          -4.5,
          6.5,
          -2.0
        ]
      },
      {
        "meshName": "Piece_ECM_FibronectinRGD",
        "name": "Fibronectin Type III Dimer",
        "badge": "FIBRON",
        "color": "#FFB703",
        "desc": "Fibronectin Type III Dimer (FN7–10 with RGD Loop). Structural source: 1FNF / 3VI4 Fibronectin. Color taxonomy: Ligand Gold (#FFB703).",
        "dissocVector": [
          2.0,
          4.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_ECM_IntegrinAlphaBeta",
        "name": "Integrin α5β1 Heterodimer",
        "badge": "INTEGR",
        "color": "#00B4D8",
        "desc": "Integrin α5β1 Heterodimer (β-Propeller, βI MIDAS & TM Legs). Structural source: 3VI4 / 4G1E Integrin. Color taxonomy: Receptor Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_ECM_PlasmaMembrane",
        "name": "Plasma Membrane Bilayer with PIP…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane Bilayer with PIP₂ Inner Leaflet Patch. Structural source: POPC / Cholesterol / PIP₂. Color taxonomy: Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_ECM_TalinRod",
        "name": "Talin-1 FERM Head & Force-Sensin…",
        "badge": "TALINR",
        "color": "#9D4EDD",
        "desc": "Talin-1 FERM Head & Force-Sensing R1–R13 Helical Rod. Structural source: 3IVF / 6VGU Talin. Color taxonomy: Mechanosensor Violet (#9D4EDD).",
        "dissocVector": [
          -2.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_ECM_VinculinFAK",
        "name": "Vinculin Clutch & Focal Adhesion…",
        "badge": "VINCUL",
        "color": "#E63946",
        "desc": "Vinculin Clutch & Focal Adhesion Kinase (FAK). Structural source: 1TR2 Vinculin + 2J0J FAK. Color taxonomy: Clutch Crimson (#E63946).",
        "dissocVector": [
          3.5,
          -3.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_ECM_ActinStressFiber",
        "name": "Cytoplasmic F-Actin Contractile…",
        "badge": "ACTINS",
        "color": "#3A86FF",
        "desc": "Cytoplasmic F-Actin Contractile Stress Fiber. Structural source: 3J8I F-Actin Filament. Color taxonomy: Actin Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          -6.5,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Extracellular Matrix Scaffold",
        "desc": "Inspect the braided Type I Collagen triple helices and Fibronectin RGD loops forming the structu...",
        "spoken": "Stage 1 — The Extracellular Matrix Scaffold. Inspect the braided Type I Collagen triple helices and Fibronectin RGD loops forming the structural bed outside the cell.",
        "color": "#F77F00",
        "targetPiece": "Piece_ECM_CollagenFibril"
      },
      {
        "step": 2,
        "title": "2 : Inside-Out Integrin Switchblade Unfolding",
        "desc": "Watch cytosolic Talin-1 bind the β-integrin tail and PIP₂, triggering the bent integrin ectodoma...",
        "spoken": "Stage 2 — Inside-Out Integrin Switchblade Unfolding. Watch cytosolic Talin-1 bind the β-integrin tail and PIP₂, triggering the bent integrin ectodomain to snap upright by 130 Å.",
        "color": "#FFB703",
        "targetPiece": "Piece_ECM_FibronectinRGD"
      },
      {
        "step": 3,
        "title": "3 : RGD Catch-Bond & MIDAS Metal Coordination",
        "desc": "Zoom into the βI domain where a Mg²⁺ ion coordinates the Asp residue of Fibronectin's RGD loop.",
        "spoken": "Stage 3 — RGD Catch-Bond & MIDAS Metal Coordination. Zoom into the βI domain where a Mg²⁺ ion coordinates the Asp residue of Fibronectin's RGD loop.",
        "color": "#00B4D8",
        "targetPiece": "Piece_ECM_IntegrinAlphaBeta"
      },
      {
        "step": 4,
        "title": "4 : Talin Stretching & Vinculin Recruitment",
        "desc": "Apply actomyosin pulling force to unfold Talin's helical bundles, exposing buried hydrophobic he...",
        "spoken": "Stage 4 — Talin Stretching & Vinculin Recruitment. Apply actomyosin pulling force to unfold Talin's helical bundles, exposing buried hydrophobic helices that recruit Vinculin to reinforce the clutch.",
        "color": "#06D6A0",
        "targetPiece": "Piece_ECM_PlasmaMembrane"
      },
      {
        "step": 5,
        "title": "5 : FAK Phosphorylation & Mechanotransduction",
        "desc": "Highlight Focal Adhesion Kinase (FAK) autophosphorylating Tyr397 to broadcast survival and stiff...",
        "spoken": "Stage 5 — FAK Phosphorylation & Mechanotransduction. Highlight Focal Adhesion Kinase (FAK) autophosphorylating Tyr397 to broadcast survival and stiffness signals to the nucleus.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_ECM_TalinRod"
      }
    ]
  },
  {
    "num": "04",
    "id": "plasma_membrane_lipid_raft",
    "folder": "04_plasma_membrane_lipid_raft",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "EUKARYOTIC PLASMA MEMBRANE, CHOLESTEROL STIFFENING RINGS & GLYCOCALYX",
    "subtitle": "The eukaryotic plasma membrane is a 5 nm dynamic fluid mosaic distinguished from bacterial membranes by three hallmarks: (1) High Sterol Content (30–40 mol% Cholesterol i...",
    "analogy": "Renders an atomic/mesoscale patch of the plasma membrane comparing a thinner liquid-disordered (Ld) unsaturated phospholipid region against a thicker liquid-ordered (Lo) Cholesterol + Sphingomyelin + GM1 Ganglioside lipid raft carrying GPI-anchored proteins on top and a Caveolin-1 11-mer disc + Flippase below.",
    "scaleTag": "EUKARYOTE SCENARIO 04 • 15 NM × 15 NM × 8 NM ASYMMETRIC BILAYER PATCH • PDB: 7CBT / 7VGI",
    "glb": "/eukaryote/models/plasma_membrane_lipid_raft.glb",
    "pdb": "7CBT, 7VGI",
    "pronounce": "[plasma-membrane-lipid-raft]",
    "sliderLabel": "CHOLESTEROL CONCENTRATION (MOL%):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Flippase vs. Apoptotic",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP (1 ATP per PS li",
      "🛑 Energy Depleted"
    ],
    "upstream": "Smooth ER (14) de novo phospholipid/cholesterol synthesis (mevalonate pathway) + Golgi (15) sphingomyelin and ganglioside gly",
    "coupling": "Inputs: Cholesterol (C₂₇H₄₆O planar 4-ring sterol delivered via LD ➔ Outputs: Selective permeability barrier & -70 mV capacitive dielect",
    "downstream": "Provides the lipid matrix and PIP₂/Cholesterol cofactors for Ion Channels (05), GPCRs/RTKs (06), Clathrin Endocytosis (07), a",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Lateral lipid diffusion D ≈ 1–5 µm²/s (~10⁷ "
      ],
      [
        "ENERGY CURRENCY",
        "ATP (1 ATP per PS lipid flipped inward by P4"
      ],
      [
        "BIOPHYSICAL SCALE",
        "15 nm × 15 nm × 8 nm Asymmetric Bilayer Patc"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7CBT & 7VGI"
      ]
    ],
    "resources": [
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Lipid Bilayer",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26871/"
      },
      {
        "title": "RCSB PDB Structure 7CBT — Human P4-ATPase Lipid Flippase ATP8A1",
        "url": "https://www.rcsb.org/structure/7CBT"
      },
      {
        "title": "RCSB PDB Structure 7VGI — Human Caveolin-1 8S Complex",
        "url": "https://www.rcsb.org/structure/7VGI"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Lipid Rafts & Membrane Organization",
        "url": "https://www.nature.com/articles/nrm.2017.16"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_PM_GlycocalyxGM1",
        "name": "Outer Glycocalyx",
        "badge": "GLYCOC",
        "color": "#9D4EDD",
        "desc": "Outer Glycocalyx: GM1 Ganglioside Sugar Trees & GPI-Anchored Protein. Structural source: GM1 Oligosaccharides + 1GNY GPI. Color taxonomy: Glycan Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          4.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_PM_OuterLeaflet",
        "name": "Outer Leaflet",
        "badge": "OUTERL",
        "color": "#0077B6",
        "desc": "Outer Leaflet: Sphingomyelin & Phosphatidylcholine (PC). Structural source: SM + POPC Headgroups & Acyl Chains. Color taxonomy: Exoplasmic Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          1.8,
          -2.0
        ]
      },
      {
        "meshName": "Piece_PM_CholesterolRings",
        "name": "Intercalated Planar 4-Ring Chole…",
        "badge": "CHOLES",
        "color": "#FFB703",
        "desc": "Intercalated Planar 4-Ring Cholesterol Raft Core. Structural source: Cholesterol C27H46O Sterol Rings. Color taxonomy: Sterol Gold (#FFB703).",
        "dissocVector": [
          0.0,
          0.0,
          2.5
        ]
      },
      {
        "meshName": "Piece_PM_InnerLeaflet",
        "name": "Inner Leaflet",
        "badge": "INNERL",
        "color": "#06D6A0",
        "desc": "Inner Leaflet: Anionic Phosphatidylserine (PS), PE & PIP₂. Structural source: POPS + POPE + PIP2. Color taxonomy: Cytosolic Leaflet Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -1.8,
          -2.0
        ]
      },
      {
        "meshName": "Piece_PM_FlippaseATP8A1",
        "name": "P4-ATPase Lipid Flippase",
        "badge": "FLIPPA",
        "color": "#00B4D8",
        "desc": "P4-ATPase Lipid Flippase (ATP8A1–CDC50A). Structural source: 7CBT Flippase Complex. Color taxonomy: Transporter Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          -1.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_PM_CaveolinDisc",
        "name": "Inner-Leaflet Caveolin-1 8S Amph…",
        "badge": "CAVEOL",
        "color": "#E63946",
        "desc": "Inner-Leaflet Caveolin-1 8S Amphipathic Disc. Structural source: 7VGI Caveolin-1 11-mer Ring. Color taxonomy: Caveolin Crimson (#E63946).",
        "dissocVector": [
          4.5,
          -2.5,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Trans-Bilayer Asymmetry",
        "desc": "Compare the neutral/zwitterionic outer leaflet (PC, Sphingomyelin, Glycolipids) against the nega...",
        "spoken": "Stage 1 — Trans-Bilayer Asymmetry. Compare the neutral/zwitterionic outer leaflet (PC, Sphingomyelin, Glycolipids) against the negatively charged inner leaflet (PS, PIP₂).",
        "color": "#9D4EDD",
        "targetPiece": "Piece_PM_GlycocalyxGM1"
      },
      {
        "step": 2,
        "title": "2 : The Four-Ring Cholesterol Stiffener",
        "desc": "Zoom into the hydrophobic core to see how Cholesterol's rigid planar steroid rings pack against ...",
        "spoken": "Stage 2 — The Four-Ring Cholesterol Stiffener. Zoom into the hydrophobic core to see how Cholesterol's rigid planar steroid rings pack against saturated sphingolipid tails, increasing bilayer thickness.",
        "color": "#0077B6",
        "targetPiece": "Piece_PM_OuterLeaflet"
      },
      {
        "step": 3,
        "title": "3 : Lipid Rafts & GPI-Anchored Signaling",
        "desc": "Observe how thicker Liquid-Ordered (Lo) rafts cluster GPI-anchored proteins on the outside and p...",
        "spoken": "Stage 3 — Lipid Rafts & GPI-Anchored Signaling. Observe how thicker Liquid-Ordered (Lo) rafts cluster GPI-anchored proteins on the outside and palmitoylated/myristoylated kinases on the inside.",
        "color": "#FFB703",
        "targetPiece": "Piece_PM_CholesterolRings"
      },
      {
        "step": 4,
        "title": "4 : ATP-Driven Flippase Maintenance",
        "desc": "Watch the ATP8A1 P4-ATPase Flippase burn ATP to grab any Phosphatidylserine that leaks outward a...",
        "spoken": "Stage 4 — ATP-Driven Flippase Maintenance. Watch the ATP8A1 P4-ATPase Flippase burn ATP to grab any Phosphatidylserine that leaks outward and flip it back to the cytosolic leaflet.",
        "color": "#06D6A0",
        "targetPiece": "Piece_PM_InnerLeaflet"
      },
      {
        "step": 5,
        "title": "5 : Caveolae & Apoptotic PS Exposure",
        "desc": "Contrast Caveolin-1 oligomeric discs curving the inner leaflet with Ca²⁺-activated scramblases e...",
        "spoken": "Stage 5 — Caveolae & Apoptotic PS Exposure. Contrast Caveolin-1 oligomeric discs curving the inner leaflet with Ca²⁺-activated scramblases exposing PS on the cell surface as a macrophage 'eat-me' signal.",
        "color": "#00B4D8",
        "targetPiece": "Piece_PM_FlippaseATP8A1"
      }
    ]
  },
  {
    "num": "05",
    "id": "ion_channels_na_k_pump",
    "folder": "05_ion_channels_na_k_pump",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "NA⁺/K⁺-ATPASE ELECTROGENIC PUMP & VOLTAGE-GATED K⁺/NA⁺ ION CHANNELS",
    "subtitle": "Every eukaryotic animal cell is an electrical battery (~ -70 mV resting potential) charged by the Na⁺/K⁺-ATPase (Sodium-Potassium Pump), which consumes up to 25% of all h...",
    "analogy": "Features the Na⁺/K⁺-ATPase (α catalytic subunit with A, N, and P cytoplasmic domains + glycosylated β subunit + γ FXYD regulator) next to the 4-fold symmetric Voltage-Gated K⁺ Channel in the plasma membrane. Users can step through the Post–Albers E₁/E₂ pumping cycle and fire an action potential depolarization wave.",
    "scaleTag": "EUKARYOTE SCENARIO 05 • 15 NM BIOELECTRIC MEMBRANE COMPLEX • PDB: 2ZXE / 1BL8",
    "glb": "/eukaryote/models/ion_channels_na_k_pump.glb",
    "pdb": "2ZXE, 1BL8",
    "pronounce": "[ion-channels-na-k-pump]",
    "sliderLabel": "MEMBRANE VOLTAGE ΔΨ (MV):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Ouabain / Digoxin Inhi",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (ΔG ≈",
      "🛑 Energy Depleted"
    ],
    "upstream": "Mitochondrial ATP export (Scenario 21) + Extracellular/Intracellular Na⁺ and K⁺ electrolyte pools.",
    "coupling": "Inputs: 3 Cytosolic Na⁺ ions + 1 Cytosolic ATP + Mg²⁺ (into Na⁺/K⁺ ➔ Outputs: 3 Extracellular Na⁺ exported + 2 Cytosolic K⁺ imported + 1",
    "downstream": "Powers secondary active nutrient import, maintains osmotic cell volume (preventing swelling in Scenario 01/02), and resets me",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Na⁺/K⁺-ATPase: ~150–200 cycles/sec; Kv Chann"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (ΔG ≈ -50 kJ/mol via Asp369 a"
      ],
      [
        "BIOPHYSICAL SCALE",
        "15 nm Bioelectric Membrane Complex"
      ],
      [
        "PRIMARY RCSB PDBS",
        "2ZXE & 1BL8"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Sodium-Potassium Pump",
        "url": "https://pdb101.rcsb.org/motm/118"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Potassium Channels",
        "url": "https://pdb101.rcsb.org/motm/38"
      },
      {
        "title": "RCSB PDB Structure 2ZXE — Sodium-Potassium Pump",
        "url": "https://www.rcsb.org/structure/2ZXE"
      },
      {
        "title": "RCSB PDB Structure 2R9R — Voltage-Gated Potassium Channel Kv1.2/2.1",
        "url": "https://www.rcsb.org/structure/2R9R"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Ion_NaK_Alpha",
        "name": "Na⁺/K⁺-ATPase α-Subunit",
        "badge": "ALPHA",
        "color": "#00B4D8",
        "desc": "Na⁺/K⁺-ATPase α-Subunit (10-TM Core + Cytoplasmic A, N, P Domains). Structural source: 2ZXE / 3KDP Chain A. Color taxonomy: Pump Catalytic Cerulean (#00B4D8).",
        "dissocVector": [
          -4.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ion_NaK_BetaGamma",
        "name": "Na⁺/K⁺-ATPase Glycosylated β-Sub…",
        "badge": "BETAGA",
        "color": "#9D4EDD",
        "desc": "Na⁺/K⁺-ATPase Glycosylated β-Subunit & FXYD γ-Regulator. Structural source: 2ZXE Chains B, G. Color taxonomy: Regulatory Ectodomain Violet (#9D4EDD).",
        "dissocVector": [
          -5.5,
          4.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Ion_NaK_IonsATP",
        "name": "Occluded 3 Na⁺ / 2 K⁺ Ions & Asp…",
        "badge": "IONSATP",
        "color": "#FFB703",
        "desc": "Occluded 3 Na⁺ / 2 K⁺ Ions & Asp369 Phosphorylation Site. Structural source: Na⁺ / K⁺ / Mg-ATP Pocket. Color taxonomy: Catalytic Ion Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -2.5,
          3.0
        ]
      },
      {
        "meshName": "Piece_Ion_Kv_PoreTetramer",
        "name": "Kv Channel Central Pore Domain",
        "badge": "PORETE",
        "color": "#E63946",
        "desc": "Kv Channel Central Pore Domain (S5–S6 Tetramer & TVGYG Selectivity Filter). Structural source: 2R9R / 1BL8 Pore. Color taxonomy: Channel Pore Crimson (#E63946).",
        "dissocVector": [
          4.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ion_Kv_VoltageSensors",
        "name": "Kv S1–S4 Voltage-Sensing Paddles…",
        "badge": "VOLTAG",
        "color": "#F77F00",
        "desc": "Kv S1–S4 Voltage-Sensing Paddles & Cytoplasmic T1 Tetramerization Ring. Structural source: 2R9R S1–S4 + T1 Domain. Color taxonomy: Voltage Sensor Amber (#F77F00).",
        "dissocVector": [
          5.5,
          -2.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Ion_PlasmaMembrane",
        "name": "Plasma Membrane Phospholipid Bil…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane Phospholipid Bilayer. Structural source: POPC / Cholesterol Bilayer. Color taxonomy: Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : E₁ Inward-Open: Binding 3 Cytosolic Na⁺",
        "desc": "Zoom into the Na⁺/K⁺-ATPase in its E₁ conformation as 3 Na⁺ ions enter from the cytoplasm and AT...",
        "spoken": "Stage 1 — E₁ Inward-Open: Binding 3 Cytosolic Na⁺. Zoom into the Na⁺/K⁺-ATPase in its E₁ conformation as 3 Na⁺ ions enter from the cytoplasm and ATP binds the Nucleotide (N) domain.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Ion_NaK_Alpha"
      },
      {
        "step": 2,
        "title": "2 : Asp369 Phosphorylation & E₁-P → E₂-P Switch",
        "desc": "Watch γ-phosphate transfer onto Asp369 in the P-domain, triggering actuator (A) domain rotation ...",
        "spoken": "Stage 2 — Asp369 Phosphorylation & E₁-P → E₂-P Switch. Watch γ-phosphate transfer onto Asp369 in the P-domain, triggering actuator (A) domain rotation that closes the inner gate and ejects 3 Na⁺ outside.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Ion_NaK_BetaGamma"
      },
      {
        "step": 3,
        "title": "3 : E₂-P Binding 2 K⁺ & Dephosphorylation",
        "desc": "Two extracellular K⁺ ions bind the outward-open pocket, triggering hydrolysis of Asp369-P and im...",
        "spoken": "Stage 3 — E₂-P Binding 2 K⁺ & Dephosphorylation. Two extracellular K⁺ ions bind the outward-open pocket, triggering hydrolysis of Asp369-P and importing the 2 K⁺ into the cytosol.",
        "color": "#FFB703",
        "targetPiece": "Piece_Ion_NaK_IonsATP"
      },
      {
        "step": 4,
        "title": "4 : Voltage-Gated K⁺ Channel S4 Paddle Motion",
        "desc": "Shift to the neighboring Kv channel: depolarizing the membrane pushes the positively charged Arg...",
        "spoken": "Stage 4 — Voltage-Gated K⁺ Channel S4 Paddle Motion. Shift to the neighboring Kv channel: depolarizing the membrane pushes the positively charged Arg residues on S4 upward, pulling the S4–S5 linker to open the S6 bundle crossing.",
        "color": "#E63946",
        "targetPiece": "Piece_Ion_Kv_PoreTetramer"
      },
      {
        "step": 5,
        "title": "5 : Atomic Selectivity Filter (TVGYG)",
        "desc": "Fly inside the narrow Kv selectivity filter where four rings of backbone carbonyl oxygens strip ...",
        "spoken": "Stage 5 — Atomic Selectivity Filter (TVGYG). Fly inside the narrow Kv selectivity filter where four rings of backbone carbonyl oxygens strip water from K⁺ ions while rejecting smaller Na⁺ ions.",
        "color": "#F77F00",
        "targetPiece": "Piece_Ion_Kv_VoltageSensors"
      }
    ]
  },
  {
    "num": "06",
    "id": "gpcr_rtk_signaling",
    "folder": "06_gpcr_rtk_signaling",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "GPCR 7-TRANSMEMBRANE RECEPTOR, HETEROTRIMERIC G-PROTEIN & RTK DIMERIZATION",
    "subtitle": "Eukaryotic cells sense hormones, neurotransmitters, odorants, and photons via two dominant plasma-membrane receptor classes: (1) G-Protein-Coupled Receptors (GPCRs, >800 ...",
    "analogy": "Side-by-side interactive signaling comparison in the plasma membrane: on the left, Epinephrine docks into the β₂-AR GPCR (3SN6), triggering Gαs opening, GDP→GTP exchange, and Adenylyl Cyclase cAMP ring production (plus GRK/β-Arrestin desensitization); on the right, EGF dimerizes EGFR, triggering tyrosine phosphorylation and Ras-GTP activation.",
    "scaleTag": "EUKARYOTE SCENARIO 06 • 20 NM TRANSMEMBRANE SIGNAL TRANSDUCTION HUB • PDB: 3SN6 / 8H36",
    "glb": "/eukaryote/models/gpcr_rtk_signaling.glb",
    "pdb": "3SN6, 8H36",
    "pronounce": "[gpcr-rtk-signaling]",
    "sliderLabel": "AGONIST / GROWTH FACTOR CONCENTRATION:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ GRK Phosphorylation & ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Binding & Hydrol",
      "🛑 Energy Depleted"
    ],
    "upstream": "Extracellular endocrine/paracrine hormones & neurotransmitters (Epinephrine, Glucagon, EGF, Insulin) + Cytosolic GTP & ATP po",
    "coupling": "Inputs: Extracellular Agonist Ligand (Epinephrine / Adrenaline or  ➔ Outputs: 3',5'-Cyclic AMP (cAMP ring) second messenger (activating ",
    "downstream": "cAMP/PKA & IP₃/DAG regulate Smooth ER Ca²⁺ release (Scenario 14) and glycogen/lipid metabolism; Ras-GTP→ERK & PKA→CREB transl",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "1 agonist-bound GPCR activates ~10–100 Gs pr"
      ],
      [
        "ENERGY CURRENCY",
        "GTP Binding & Hydrolysis (Gα intrinsic GTPas"
      ],
      [
        "BIOPHYSICAL SCALE",
        "20 nm Transmembrane Signal Transduction Hub"
      ],
      [
        "PRIMARY RCSB PDBS",
        "3SN6 & 8H36"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: G Proteins & GPCRs",
        "url": "https://pdb101.rcsb.org/motm/58"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Epidermal Growth Factor",
        "url": "https://pdb101.rcsb.org/motm/126"
      },
      {
        "title": "RCSB PDB Structure 3SN6 — Nobel-Prize β₂-AR–Gs Complex",
        "url": "https://www.rcsb.org/structure/3SN6"
      },
      {
        "title": "RCSB PDB Structure 8H36 — Human Adenylyl Cyclase AC9",
        "url": "https://www.rcsb.org/structure/8H36"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Sig_GPCR_7TM",
        "name": "β₂-Adrenergic Receptor 7-TM Heli…",
        "badge": "7TM",
        "color": "#00B4D8",
        "desc": "β₂-Adrenergic Receptor 7-TM Helical Bundle + Bound Agonist. Structural source: 3SN6 Chain R. Color taxonomy: GPCR Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Sig_GAlphaS",
        "name": "Gαs Subunit",
        "badge": "GALPHAS",
        "color": "#FFB703",
        "desc": "Gαs Subunit (Ras-like & Hinged α-Helical Domains + GTP). Structural source: 3SN6 Chain A. Color taxonomy: G-Alpha Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Sig_GBetaGamma",
        "name": "Gβ₁",
        "badge": "GBETAG",
        "color": "#9D4EDD",
        "desc": "Gβ₁ (7-Bladed WD40 β-Propeller Ring) & Prenylated Gγ₂. Structural source: 3SN6 Chains B, G. Color taxonomy: WD40 Propeller Violet (#9D4EDD).",
        "dissocVector": [
          -6.5,
          -3.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Sig_AdenylylCyclase",
        "name": "Transmembrane Adenylyl Cyclase",
        "badge": "ADENYL",
        "color": "#F77F00",
        "desc": "Transmembrane Adenylyl Cyclase (AC9) Generating cAMP Rings. Structural source: 8H36 Adenylyl Cyclase. Color taxonomy: Cyclase Warm Amber (#F77F00).",
        "dissocVector": [
          0.0,
          -1.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Sig_RTK_Dimer",
        "name": "Ligand-Bound EGFR Receptor Tyros…",
        "badge": "DIMER",
        "color": "#E63946",
        "desc": "Ligand-Bound EGFR Receptor Tyrosine Kinase Dimer & Phospho-Tails. Structural source: 1IVO Ectodomain + 2GS6 Kinase. Color taxonomy: RTK Dimer Crimson (#E63946).",
        "dissocVector": [
          5.0,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Sig_Grb2SOS_Ras",
        "name": "Grb2–SOS GEF Complex & Membrane-…",
        "badge": "RAS",
        "color": "#3A86FF",
        "desc": "Grb2–SOS GEF Complex & Membrane-Tethered Ras-GTP. Structural source: 1BKD Ras-SOS. Color taxonomy: Ras Signaling Blue (#3A86FF).",
        "dissocVector": [
          5.0,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Sig_PlasmaMembrane",
        "name": "Plasma Membrane Phospholipid Bil…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane Phospholipid Bilayer. Structural source: POPC / Cholesterol Bilayer. Color taxonomy: Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Agonist Docking & TM6 Outward Swing",
        "desc": "Dock Epinephrine into the extracellular pocket of the 7-TM β₂-Adrenergic Receptor and watch TM6 ...",
        "spoken": "Stage 1 — Agonist Docking & TM6 Outward Swing. Dock Epinephrine into the extracellular pocket of the 7-TM β₂-Adrenergic Receptor and watch TM6 swing outward by 14 Å on the cytoplasmic face.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Sig_GPCR_7TM"
      },
      {
        "step": 2,
        "title": "2 : Gαs Clamshell Opening & GDP→GTP Exchange",
        "desc": "Observe the GPCR engage the C-terminal α5 helix of Gαs, swinging the α-helical domain open by 13...",
        "spoken": "Stage 2 — Gαs Clamshell Opening & GDP→GTP Exchange. Observe the GPCR engage the C-terminal α5 helix of Gαs, swinging the α-helical domain open by 130° so GDP escapes and GTP binds.",
        "color": "#FFB703",
        "targetPiece": "Piece_Sig_GAlphaS"
      },
      {
        "step": 3,
        "title": "3 : Adenylyl Cyclase & Cyclic AMP Ring Synthesis",
        "desc": "Follow GTP-bound Gαs sliding along the inner leaflet to bind Adenylyl Cyclase, converting ATP in...",
        "spoken": "Stage 3 — Adenylyl Cyclase & Cyclic AMP Ring Synthesis. Follow GTP-bound Gαs sliding along the inner leaflet to bind Adenylyl Cyclase, converting ATP into cyclic AMP (cAMP) rings.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Sig_GBetaGamma"
      },
      {
        "step": 4,
        "title": "4 : RTK Dimerization & Trans-Autophosphorylation",
        "desc": "Switch to the EGFR Receptor Tyrosine Kinase: binding two EGF ligands locks the ectodomains into ...",
        "spoken": "Stage 4 — RTK Dimerization & Trans-Autophosphorylation. Switch to the EGFR Receptor Tyrosine Kinase: binding two EGF ligands locks the ectodomains into a back-to-back dimer, driving asymmetric kinase activation and tail Tyr phosphorylation.",
        "color": "#F77F00",
        "targetPiece": "Piece_Sig_AdenylylCyclase"
      },
      {
        "step": 5,
        "title": "5 : Grb2–SOS Recruitment & Ras-GTP Switch",
        "desc": "Watch SH2 domains of Grb2 bind the phosphorylated RTK tail, bringing SOS to pry GDP out of membr...",
        "spoken": "Stage 5 — Grb2–SOS Recruitment & Ras-GTP Switch. Watch SH2 domains of Grb2 bind the phosphorylated RTK tail, bringing SOS to pry GDP out of membrane-tethered Ras and launch the MAPK cascade.",
        "color": "#E63946",
        "targetPiece": "Piece_Sig_RTK_Dimer"
      }
    ]
  },
  {
    "num": "07",
    "id": "clathrin_endocytosis_snare",
    "folder": "07_clathrin_endocytosis_snare",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "CLATHRIN TRISKELION CAGE, DYNAMIN SCISSION RING & SNARE MEMBRANE FUSION",
    "subtitle": "Eukaryotic cells continuously internalize receptors/nutrients (Endocytosis) and secrete neurotransmitters/proteins (Exocytosis) via two opposing mechanical masterpieces: ...",
    "analogy": "Interactive dual-stage trafficking scene: on the left, a Clathrin triskelion soccer-ball cage buds from the plasma membrane with a helical Dynamin GTPase ring constricting the neck; on the right, a synaptic/secretory vesicle uses 4-helix SNARE bundles + Complexin/Synaptotagmin to fuse with a target membrane and after fusion is pried apart by the hexameric AAA+ NSF–α-SNAP ring.",
    "scaleTag": "EUKARYOTE SCENARIO 07 • 80–100 NM VESICLE BUDDING & FUSION MACHINERY • PDB: 1XI4 / 1SFC",
    "glb": "/eukaryote/models/clathrin_endocytosis_snare.glb",
    "pdb": "1XI4, 1SFC",
    "pronounce": "[clathrin-endocytosis-snare]",
    "sliderLabel": "ENDOCYTOSIS & FUSION STAGE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Dynamin GTPase Inhibit",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Hydrolysis (Dyna",
      "🛑 Energy Depleted"
    ],
    "upstream": "Ligand-bound LDL/Transferrin receptors & β-Arrestin-tagged GPCRs (Scenario 06) + Golgi/ER secretory vesicles (Scenario 15).",
    "coupling": "Inputs: Plasma membrane PIP₂ + Cargo receptors (LDL-R, Transferrin ➔ Outputs: Internalized Early Endosomal Vesicles (delivering LDL chol",
    "downstream": "Internalized endosomes mature and fuse with Lysosomes (Scenario 16) or recycle to the Plasma Membrane (Scenario 04); coated v",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Clathrin pit matures in ~30–60 s; Dynamin sc"
      ],
      [
        "ENERGY CURRENCY",
        "GTP Hydrolysis (Dynamin neck scission) + SNA"
      ],
      [
        "BIOPHYSICAL SCALE",
        "80–100 nm Vesicle Budding & Fusion Machinery"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1XI4 & 1SFC"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Clathrin",
        "url": "https://pdb101.rcsb.org/motm/89"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: SNARE Proteins",
        "url": "https://pdb101.rcsb.org/motm/166"
      },
      {
        "title": "RCSB PDB Structure 1XI4 — Clathrin D6 Barrel",
        "url": "https://www.rcsb.org/structure/1XI4"
      },
      {
        "title": "RCSB PDB Structure 1SFC — Neuronal Synaptic Fusion Complex",
        "url": "https://www.rcsb.org/structure/1SFC"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Ves_ClathrinCage",
        "name": "Clathrin Polyhedral Triskelion C…",
        "badge": "CLATHR",
        "color": "#9D4EDD",
        "desc": "Clathrin Polyhedral Triskelion Cage (Hexagons & 12 Pentagons). Structural source: 1XI4 Clathrin Heavy/Light Chains. Color taxonomy: Clathrin Cage Violet (#9D4EDD).",
        "dissocVector": [
          -5.0,
          -4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ves_AP2Cargo",
        "name": "AP2 Adaptor Complex & Cargo Rece…",
        "badge": "AP2CAR",
        "color": "#00B4D8",
        "desc": "AP2 Adaptor Complex & Cargo Receptor (LDL/Transferrin). Structural source: 2VGL AP2 Core. Color taxonomy: Adaptor Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          -2.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Ves_DynaminRing",
        "name": "Dynamin-1 Helical GTPase Scissio…",
        "badge": "DYNAMI",
        "color": "#FFB703",
        "desc": "Dynamin-1 Helical GTPase Scission Collar Ring. Structural source: 6DLU Dynamin Polymer Ring. Color taxonomy: GTPase Ring Gold (#FFB703).",
        "dissocVector": [
          -5.0,
          -0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ves_SNAREZipper",
        "name": "4-Helix Trans-SNARE Bundle",
        "badge": "SNAREZ",
        "color": "#E63946",
        "desc": "4-Helix Trans-SNARE Bundle (Synaptobrevin, Syntaxin-1, SNAP-25). Structural source: 1SFC / 3HD7 SNARE Complex. Color taxonomy: SNARE Zipper Crimson (#E63946).",
        "dissocVector": [
          4.5,
          -1.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Ves_SynaptotagminNSF",
        "name": "Ca²⁺ Sensor Synaptotagmin-1 & He…",
        "badge": "SYNAPT",
        "color": "#F77F00",
        "desc": "Ca²⁺ Sensor Synaptotagmin-1 & Hexameric AAA+ NSF Unwindase Ring. Structural source: 2R83 Synaptotagmin + 3J96 NSF. Color taxonomy: AAA+ Ring Warm Amber (#F77F00).",
        "dissocVector": [
          5.0,
          -4.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Ves_PlasmaMembrane",
        "name": "Plasma Membrane & Budding/Fusing…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane & Budding/Fusing Vesicle Bilayers. Structural source: POPC / PIP₂ Curved Bilayers. Color taxonomy: Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          1.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : AP2 Recruitment & Clathrin Triskelion Lattice",
        "desc": "Watch AP2 adaptors bind inner-leaflet PIP₂ and cargo tails, nucleating three-legged Clathrin tri...",
        "spoken": "Stage 1 — AP2 Recruitment & Clathrin Triskelion Lattice. Watch AP2 adaptors bind inner-leaflet PIP₂ and cargo tails, nucleating three-legged Clathrin triskelions into a curved pentagonal/hexagonal basket.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Ves_ClathrinCage"
      },
      {
        "step": 2,
        "title": "2 : The Dynamin Helical Collar & GTP Pinch-Off",
        "desc": "Focus on the narrow membrane neck where Dynamin GTPase monomers polymerize into a spiral ring an...",
        "spoken": "Stage 2 — The Dynamin Helical Collar & GTP Pinch-Off. Focus on the narrow membrane neck where Dynamin GTPase monomers polymerize into a spiral ring and hydrolyze GTP to constrict and sever the stalk.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Ves_AP2Cargo"
      },
      {
        "step": 3,
        "title": "3 : Hsc70/Auxilin Uncoating",
        "desc": "Once free in the cytosol, Auxilin recruits Hsc70 ATPase to disassemble the clathrin cage for reu...",
        "spoken": "Stage 3 — Hsc70/Auxilin Uncoating. Once free in the cytosol, Auxilin recruits Hsc70 ATPase to disassemble the clathrin cage for reuse.",
        "color": "#FFB703",
        "targetPiece": "Piece_Ves_DynaminRing"
      },
      {
        "step": 4,
        "title": "4 : Trans-SNARE 4-Helix Zipper Docking",
        "desc": "Move to the exocytic docking site: vesicle v-SNARE intertwines with plasma-membrane t-SNAREs fro...",
        "spoken": "Stage 4 — Trans-SNARE 4-Helix Zipper Docking. Move to the exocytic docking site: vesicle v-SNARE intertwines with plasma-membrane t-SNAREs from N- to C-terminus, winching the two bilayers within 1 nm.",
        "color": "#E63946",
        "targetPiece": "Piece_Ves_SNAREZipper"
      },
      {
        "step": 5,
        "title": "5 : Ca²⁺-Synaptotagmin Fusion & NSF Recycling",
        "desc": "Trigger a Ca²⁺ pulse to insert Synaptotagmin loops into the lipid bilayer, opening the fusion po...",
        "spoken": "Stage 5 — Ca²⁺-Synaptotagmin Fusion & NSF Recycling. Trigger a Ca²⁺ pulse to insert Synaptotagmin loops into the lipid bilayer, opening the fusion pore, followed by hexameric NSF ATPase unwinding the spent cis-SNAREs.",
        "color": "#F77F00",
        "targetPiece": "Piece_Ves_SynaptotagminNSF"
      }
    ]
  },
  {
    "num": "08",
    "id": "cell_junctions_plasmodesmata",
    "folder": "08_cell_junctions_plasmodesmata",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "INTERCELLULAR JUNCTIONS: TIGHT, ADHERENS, DESMOSOMES, GAP JUNCTION CONNEXONS & PLANT PLASMODESMATA",
    "subtitle": "Multicellular eukaryotes weld individual cells into polarized epithelia, beating heart muscle, and integrated plant tissues using specialized intercellular junctions: (1)...",
    "analogy": "Shows two adjacent lateral plasma membranes bridged by Claudin tight seals, Ca²⁺-stiffened E-Cadherin adherens zippers, a dodecameric Connexin-26 Gap Junction channel ring (2ZW3), and an inset of a Plant Plasmodesma tunnel with its central ER desmotubule and callose collar.",
    "scaleTag": "EUKARYOTE SCENARIO 08 • 40 NM CELL–CELL INTERCELLULAR INTERFACE • PDB: 2ZW3 / 3Q2V",
    "glb": "/eukaryote/models/cell_junctions_plasmodesmata.glb",
    "pdb": "2ZW3, 3Q2V",
    "pronounce": "[cell-junctions-plasmodesmata]",
    "sliderLabel": "EXTRACELLULAR CA²⁺ CONCENTRATION (CADHERIN RIGIDITY):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Plant Plasmodesmata Ca",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Ca²⁺ Coordination En",
      "🛑 Energy Depleted"
    ],
    "upstream": "Rough ER/Golgi membrane trafficking (13/15) + Cytoskeletal F-Actin (09) & Keratin Intermediate Filaments (11).",
    "coupling": "Inputs: Extracellular Ca²⁺ ions (~1–2 mM stiffening the 5 EC domai ➔ Outputs: Paracellular barrier integrity (Tight Junction trans-epith",
    "downstream": "Transmits mechanical tension to Actin (09) and Keratin (11), and propagates IP₃/Ca²⁺/cAMP waves generated by GPCRs (06) and S",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single Gap Junction channel conductance ~100"
      ],
      [
        "ENERGY CURRENCY",
        "Ca²⁺ Coordination Energy (Cadherin EC-domain"
      ],
      [
        "BIOPHYSICAL SCALE",
        "40 nm Cell–Cell Intercellular Interface"
      ],
      [
        "PRIMARY RCSB PDBS",
        "2ZW3 & 3Q2V"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cadherin",
        "url": "https://pdb101.rcsb.org/motm/92"
      },
      {
        "title": "RCSB PDB Structure 2ZW3 — Human Connexin-26 Gap Junction Channel",
        "url": "https://www.rcsb.org/structure/2ZW3"
      },
      {
        "title": "RCSB PDB Structure 3Q2V — E-Cadherin Ectodomain",
        "url": "https://www.rcsb.org/structure/3Q2V"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Cell Junctions",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26857/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Junc_ClaudinTight",
        "name": "Tight Junction Claudin-15 Strand…",
        "badge": "CLAUDI",
        "color": "#00B4D8",
        "desc": "Tight Junction Claudin-15 Strand & ZO-1 Scaffold. Structural source: 4P79 Claudin Polymer. Color taxonomy: Tight Seal Cerulean (#00B4D8).",
        "dissocVector": [
          -6.0,
          2.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Junc_CadherinZipper",
        "name": "E-Cadherin Trans-Dimer Zipper",
        "badge": "CADHER",
        "color": "#F77F00",
        "desc": "E-Cadherin Trans-Dimer Zipper (EC1–EC5 + Ca²⁺ Ions + Catenins). Structural source: 3Q2V E-Cadherin Ectodomain. Color taxonomy: Cadherin Amber (#F77F00).",
        "dissocVector": [
          -1.5,
          0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Junc_ConnexonRings",
        "name": "Gap Junction Dodecamer",
        "badge": "CONNEX",
        "color": "#FFB703",
        "desc": "Gap Junction Dodecamer (Two Docked Hexameric Connexin-26 Rings). Structural source: 2ZW3 / 7QET Connexin-26. Color taxonomy: Connexon Ring Gold (#FFB703).",
        "dissocVector": [
          3.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Junc_Plasmodesma",
        "name": "Plant Plasmodesma Tunnel, ER Des…",
        "badge": "PLASMO",
        "color": "#9D4EDD",
        "desc": "Plant Plasmodesma Tunnel, ER Desmotubule & Callose Sphincter. Structural source: Cellulose Wall + Desmotubule. Color taxonomy: Plasmodesma Violet (#9D4EDD).",
        "dissocVector": [
          7.0,
          0.0,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Junc_Cell1Membrane",
        "name": "Cell A Lateral Plasma Membrane &…",
        "badge": "CELL1M",
        "color": "#06D6A0",
        "desc": "Cell A Lateral Plasma Membrane & Actin/Keratin Anchors. Structural source: Lipid Bilayer + α/β-Catenin. Color taxonomy: Cell A Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Junc_Cell2Membrane",
        "name": "Cell B Opposing Plasma Membrane…",
        "badge": "CELL2M",
        "color": "#0077B6",
        "desc": "Cell B Opposing Plasma Membrane & Desmoplakin Plaque. Structural source: Lipid Bilayer + Desmoplakin. Color taxonomy: Cell B Membrane Blue (#0077B6).",
        "dissocVector": [
          0.0,
          -4.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Apical Tight Junction Paracellular Seal",
        "desc": "Inspect the kissing strands of Claudin and Occludin stitching two neighboring plasma membranes t...",
        "spoken": "Stage 1 — Apical Tight Junction Paracellular Seal. Inspect the kissing strands of Claudin and Occludin stitching two neighboring plasma membranes together to block paracellular leakage.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Junc_ClaudinTight"
      },
      {
        "step": 2,
        "title": "2 : Ca²⁺-Stiffened Cadherin Zippers",
        "desc": "Zoom into the Adherens Junction where 12 Ca²⁺ ions rigidify the five EC domains of E-Cadherin so...",
        "spoken": "Stage 2 — Ca²⁺-Stiffened Cadherin Zippers. Zoom into the Adherens Junction where 12 Ca²⁺ ions rigidify the five EC domains of E-Cadherin so opposing cells can swap Trp2 side-chains and link to F-actin via α/β-catenin.",
        "color": "#F77F00",
        "targetPiece": "Piece_Junc_CadherinZipper"
      },
      {
        "step": 3,
        "title": "3 : Hexameric Connexon Gap Junction Rings",
        "desc": "Fly through the center of the dodecameric Connexin-26 channel (two docked 6-subunit rings) as cA...",
        "spoken": "Stage 3 — Hexameric Connexon Gap Junction Rings. Fly through the center of the dodecameric Connexin-26 channel (two docked 6-subunit rings) as cAMP, IP₃, and K⁺ ions stream directly between cytoplasms.",
        "color": "#FFB703",
        "targetPiece": "Piece_Junc_ConnexonRings"
      },
      {
        "step": 4,
        "title": "4 : Emergency Iris Closure of Gap Junctions",
        "desc": "Simulate a dying neighbor cell (high cytosolic Ca²⁺ and H⁺) and watch the six N-terminal helices...",
        "spoken": "Stage 4 — Emergency Iris Closure of Gap Junctions. Simulate a dying neighbor cell (high cytosolic Ca²⁺ and H⁺) and watch the six N-terminal helices of the Connexon ring plug the central pore.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Junc_Plasmodesma"
      },
      {
        "step": 5,
        "title": "5 : Plant Plasmodesmata & the ER Desmotubule",
        "desc": "Compare animal Gap Junctions with a plant Plasmodesma tunnel crossing the cellulose wall with a ...",
        "spoken": "Stage 5 — Plant Plasmodesmata & the ER Desmotubule. Compare animal Gap Junctions with a plant Plasmodesma tunnel crossing the cellulose wall with a continuous ER rod (desmotubule) through its core.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Junc_Cell1Membrane"
      }
    ]
  },
  {
    "num": "09",
    "id": "actin_myosin_sarcomere",
    "folder": "09_actin_myosin_sarcomere",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "F-ACTIN DOUBLE-HELICAL MICROFILAMENTS, ARP2/3 BRANCHING & MYOSIN POWER STROKE",
    "subtitle": "Actin is the most abundant protein in many eukaryotic cells, assembling from 42 kDa globular ATP-bound G-Actin monomers into polar, right-handed double-helical F-Actin mi...",
    "analogy": "Combines the polar F-Actin double helix decorated with Tropomyosin/Troponin and a two-headed Myosin motor walking toward the barbed (+)-end alongside an Arp2/3 70° branch junction. Users can control Ca²⁺ concentration (to roll Tropomyosin out of the myosin-binding groove) and ATP concentration (to prevent rigor mortis locking).",
    "scaleTag": "EUKARYOTE SCENARIO 09 • 35–100 NM CONTRACTILE & BRANCHED ACTIN MACHINERY • PDB: 6X5Z / 6UHC",
    "glb": "/eukaryote/models/actin_myosin_sarcomere.glb",
    "pdb": "6X5Z, 6UHC",
    "pronounce": "[actin-myosin-sarcomere]",
    "sliderLabel": "SARCOPLASMIC CA²⁺ LEVEL (ΜM):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ WASP–Arp2/3 Branching ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (both",
      "🛑 Energy Depleted"
    ],
    "upstream": "TRiC/CCT chaperonin folding of G-actin (Scenario 34) + Mitochondrial ATP (Scenario 21) + Smooth ER / Sarcoplasmic Reticulum C",
    "coupling": "Inputs: ATP-bound G-Actin monomers + Profilin (feeding barbed (+)- ➔ Outputs: Mechanical contractile force (~3–5 pN and ~5–10 nm displac",
    "downstream": "Generates the pulling tension on Integrin Focal Adhesions (Scenario 03) and Cadherin Adherens Junctions (Scenario 08), drives",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Myosin II: ~5–20 ATP/sec per head; Arp2/3 la"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (both in F-Actin treadmilling"
      ],
      [
        "BIOPHYSICAL SCALE",
        "35–100 nm Contractile & Branched Actin Machi"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6X5Z & 6UHC"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Actin",
        "url": "https://pdb101.rcsb.org/motm/19"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Myosin",
        "url": "https://pdb101.rcsb.org/motm/18"
      },
      {
        "title": "RCSB PDB Structure 6X5Z — Native Cardiac Thin Filament with Myosin",
        "url": "https://www.rcsb.org/structure/6X5Z"
      },
      {
        "title": "RCSB PDB Structure 6UHC — Active Arp2/3 Actin Branch Junction",
        "url": "https://www.rcsb.org/structure/6UHC"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Act_FActinHelix",
        "name": "Polar Double-Helical F-Actin Fil…",
        "badge": "FACTIN",
        "color": "#3A86FF",
        "desc": "Polar Double-Helical F-Actin Filament (Barbed + to Pointed - End). Structural source: 6X5Z / 3J8I F-Actin. Color taxonomy: Actin Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Act_TropomyosinTroponin",
        "name": "Tropomyosin Coiled-Coil Cable &…",
        "badge": "TROPOM",
        "color": "#00B4D8",
        "desc": "Tropomyosin Coiled-Coil Cable & Ca²⁺-Sensing Troponin (TnC/TnI/TnT). Structural source: 6X5Z Tropomyosin + Troponin. Color taxonomy: Regulatory Cable Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          2.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Act_MyosinHeads",
        "name": "Myosin Motor Domain, Converter &…",
        "badge": "MYOSIN",
        "color": "#E63946",
        "desc": "Myosin Motor Domain, Converter & Light-Chain Lever Arm. Structural source: 6X5Z / 1OE9 Myosin S1. Color taxonomy: Motor Head Crimson (#E63946).",
        "dissocVector": [
          2.5,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Act_Arp23Branch",
        "name": "Arp2/3 7-Subunit Complex Nucleat…",
        "badge": "ARP23B",
        "color": "#FFB703",
        "desc": "Arp2/3 7-Subunit Complex Nucleating 70° Daughter Actin Branch. Structural source: 6UHC Arp2/3 Branch Junction. Color taxonomy: Branch Nucleator Gold (#FFB703).",
        "dissocVector": [
          -5.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Act_DaughterFilament",
        "name": "70° Branched Daughter F-Actin Fi…",
        "badge": "DAUGHT",
        "color": "#9D4EDD",
        "desc": "70° Branched Daughter F-Actin Filament & Capping Protein. Structural source: 6UHC Daughter Actin. Color taxonomy: Daughter Branch Violet (#9D4EDD).",
        "dissocVector": [
          -7.5,
          -6.0,
          3.0
        ]
      },
      {
        "meshName": "Piece_Act_ProfilinCofilin",
        "name": "G-Actin–Profilin Delivery & Cofi…",
        "badge": "PROFIL",
        "color": "#06D6A0",
        "desc": "G-Actin–Profilin Delivery & Cofilin Severing Factors. Structural source: 2BTF Profilin-Actin. Color taxonomy: Remodeling Factor Jade (#06D6A0).",
        "dissocVector": [
          6.5,
          -3.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : F-Actin Treadmilling & Polarity",
        "desc": "Examine the right-handed double-helical F-Actin polymer: ATP-G-actin adds rapidly at the barbed ...",
        "spoken": "Stage 1 — F-Actin Treadmilling & Polarity. Examine the right-handed double-helical F-Actin polymer: ATP-G-actin adds rapidly at the barbed (+)-end, hydrolyzes ATP to ADP, and dissociates with Cofilin at the pointed (-)-end.",
        "color": "#3A86FF",
        "targetPiece": "Piece_Act_FActinHelix"
      },
      {
        "step": 2,
        "title": "2 : Arp2/3 70° Dendritic Branching",
        "desc": "Zoom to the Arp2/3 complex where Arp2 and Arp3 mimic a barbed-end dimer on the side of a mother ...",
        "spoken": "Stage 2 — Arp2/3 70° Dendritic Branching. Zoom to the Arp2/3 complex where Arp2 and Arp3 mimic a barbed-end dimer on the side of a mother filament, sprouting a daughter branch at 70°.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Act_TropomyosinTroponin"
      },
      {
        "step": 3,
        "title": "3 : Ca²⁺–Troponin Unlocking of Tropomyosin",
        "desc": "Flood the filament with Ca²⁺: Troponin-C binds 4 Ca²⁺ ions, pulling Troponin-I so the Tropomyosi...",
        "spoken": "Stage 3 — Ca²⁺–Troponin Unlocking of Tropomyosin. Flood the filament with Ca²⁺: Troponin-C binds 4 Ca²⁺ ions, pulling Troponin-I so the Tropomyosin cable rolls azimuthally to expose Myosin-binding sites on actin.",
        "color": "#E63946",
        "targetPiece": "Piece_Act_MyosinHeads"
      },
      {
        "step": 4,
        "title": "4 : Myosin ATP Binding & Lever-Arm Cocking",
        "desc": "Watch ATP bind the Myosin cleft, detaching the head from actin; hydrolysis to ADP·Pᵢ swings the ...",
        "spoken": "Stage 4 — Myosin ATP Binding & Lever-Arm Cocking. Watch ATP bind the Myosin cleft, detaching the head from actin; hydrolysis to ADP·Pᵢ swings the converter and light-chain lever arm into the cocked pre-power-stroke state.",
        "color": "#FFB703",
        "targetPiece": "Piece_Act_Arp23Branch"
      },
      {
        "step": 5,
        "title": "5 : Phosphate Release & The 10 nm Power Stroke",
        "desc": "Myosin weakly rebinds a new actin subunit; Pᵢ release locks the cleft shut and snaps the lever a...",
        "spoken": "Stage 5 — Phosphate Release & The 10 nm Power Stroke. Myosin weakly rebinds a new actin subunit; Pᵢ release locks the cleft shut and snaps the lever arm forward by 10 nm, pulling the actin filament.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Act_DaughterFilament"
      }
    ]
  },
  {
    "num": "10",
    "id": "microtubules_centrosome_motors",
    "folder": "10_microtubules_centrosome_motors",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "MICROTUBULE 13-PROTOFILAMENT HOLLOW TUBE, CENTROSOME (Γ-TURC) & KINESIN / DYNEIN WALKERS",
    "subtitle": "Microtubules are stiff, hollow 25 nm cylindrical highways assembled from 13 parallel protofilaments of α/β-Tubulin heterodimers. In animal cells, their (-)-ends are nucle...",
    "analogy": "Shows a 13-protofilament microtubule nucleated at its (-)-end by the cone-shaped γ-TuRC ring (6U42), with a two-headed Kinesin-1 dimer stepping toward the (+)-end on one protofilament and a Cytoplasmic Dynein–Dynactin AAA+ ring complex hauling a cargo vesicle toward the (-)-end on another.",
    "scaleTag": "EUKARYOTE SCENARIO 10 • 25 NM DIAMETER HOLLOW CYLINDER & MOTOR TRUCKS • PDB: 6U42 / 4HNA",
    "glb": "/eukaryote/models/microtubules_centrosome_motors.glb",
    "pdb": "6U42, 4HNA",
    "pronounce": "[microtubules-centrosome-motors]",
    "sliderLabel": "(+)-END GTP CAP STATE (POLYMERIZATION RESCUE ↔ CATASTROPHE PEEL):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Chemotherapy Drug Togg",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Hydrolysis (β-Tu",
      "🛑 Energy Depleted"
    ],
    "upstream": "TRiC/CCT chaperonin tubulin folding (Scenario 34) + Mitochondrial ATP & GTP (Scenario 21) + Golgi/ER/Endosome cargo vesicles ",
    "coupling": "Inputs: GTP-bound α/β-Tubulin heterodimers (for (+)-end polymeriza ➔ Outputs: Long-range anterograde transport (Golgi → Plasma Membrane ",
    "downstream": "Positions the ER (13), Golgi (15), Lysosomes (16), and Mitochondria (19); forms the 9+2 Axoneme of Cilia/Flagella (Scenario 1",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Kinesin-1 & Dynein-1 take ~100 steps/sec (~8"
      ],
      [
        "ENERGY CURRENCY",
        "GTP Hydrolysis (β-Tubulin E-site dynamic ins"
      ],
      [
        "BIOPHYSICAL SCALE",
        "25 nm Diameter Hollow Cylinder & Motor Truck"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6U42 & 4HNA"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Microtubules",
        "url": "https://pdb101.rcsb.org/motm/175"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Kinesin",
        "url": "https://pdb101.rcsb.org/motm/64"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Dynein",
        "url": "https://pdb101.rcsb.org/motm/214"
      },
      {
        "title": "RCSB PDB Structure 6U42 — Human γ-Tubulin Ring Complex",
        "url": "https://www.rcsb.org/structure/6U42"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_MT_GammaTuRC",
        "name": "γ-Tubulin Ring Complex",
        "badge": "GAMMAT",
        "color": "#9D4EDD",
        "desc": "γ-Tubulin Ring Complex (γ-TuRC 14-Spoke Nucleation Cone) & Centriole. Structural source: 6U42 γ-TuRC. Color taxonomy: Nucleator Ring Violet (#9D4EDD).",
        "dissocVector": [
          -7.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_MT_ProtofilamentTube",
        "name": "13-Protofilament α/β-Tubulin Hol…",
        "badge": "PROTOF",
        "color": "#3A86FF",
        "desc": "13-Protofilament α/β-Tubulin Hollow Cylinder (25 nm Outer / 15 nm Inner). Structural source: 3J6F / 6EVW Microtubule Lattice. Color taxonomy: Tubulin Lattice Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_MT_GTPCapHorns",
        "name": "Dynamic",
        "badge": "GTPCAP",
        "color": "#06D6A0",
        "desc": "Dynamic (+)-End GTP Cap & Peeling GDP Ram's Horn Protofilaments. Structural source: GTP vs. GDP-Tubulin Tip. Color taxonomy: GTP Cap Jade (#06D6A0).",
        "dissocVector": [
          7.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_MT_Kinesin1Walker",
        "name": "Kinesin-1 Dimer",
        "badge": "KINESI",
        "color": "#FFB703",
        "desc": "Kinesin-1 Dimer (Two Motor Heads, Neck Linker, Coiled Stalk & Cargo). Structural source: 4HNA / 3KIN Kinesin-1. Color taxonomy: Anterograde Motor Gold (#FFB703).",
        "dissocVector": [
          -1.0,
          4.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_MT_DyneinDynactin",
        "name": "Cytoplasmic Dynein-1",
        "badge": "DYNEIN",
        "color": "#E63946",
        "desc": "Cytoplasmic Dynein-1 (Hexameric AAA+ Ring, Stalk/MTBD & Dynactin). Structural source: 7Z8G Dynein–Dynactin–BICD2. Color taxonomy: Retrograde AAA+ Ring Crimson (#E63946).",
        "dissocVector": [
          2.5,
          -4.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_MT_CargoVesicle",
        "name": "Tethered Rab-Decorated Secretory…",
        "badge": "CARGOV",
        "color": "#00B4D8",
        "desc": "Tethered Rab-Decorated Secretory Cargo Vesicle. Structural source: Phospholipid Vesicle + Rab. Color taxonomy: Cargo Vesicle Cerulean (#00B4D8).",
        "dissocVector": [
          1.0,
          6.5,
          3.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Nucleation at the Centrosome γ-TuRC Ring",
        "desc": "Start at the (-)-end where the 14-spoked γ-Tubulin Ring Complex (γ-TuRC) acts as a helical templ...",
        "spoken": "Stage 1 — Nucleation at the Centrosome γ-TuRC Ring. Start at the (-)-end where the 14-spoked γ-Tubulin Ring Complex (γ-TuRC) acts as a helical template to seed 13 protofilaments.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_MT_GammaTuRC"
      },
      {
        "step": 2,
        "title": "2 : The 13-Protofilament Lattice & Seam",
        "desc": "Inspect how α-tubulin (purple-blue) and β-tubulin (cyan-blue) heterodimers stack head-to-tail in...",
        "spoken": "Stage 2 — The 13-Protofilament Lattice & Seam. Inspect how α-tubulin (purple-blue) and β-tubulin (cyan-blue) heterodimers stack head-to-tail into a stiff 25 nm hollow cylinder.",
        "color": "#3A86FF",
        "targetPiece": "Piece_MT_ProtofilamentTube"
      },
      {
        "step": 3,
        "title": "3 : Dynamic Instability: GTP Cap vs. Catastrophe",
        "desc": "Watch β-tubulin hydrolyze GTP to GDP in the lattice: when the protective GTP cap at the (+)-end ...",
        "spoken": "Stage 3 — Dynamic Instability: GTP Cap vs. Catastrophe. Watch β-tubulin hydrolyze GTP to GDP in the lattice: when the protective GTP cap at the (+)-end is lost, strained GDP protofilaments curl outward and peel apart.",
        "color": "#06D6A0",
        "targetPiece": "Piece_MT_GTPCapHorns"
      },
      {
        "step": 4,
        "title": "4 : Kinesin-1 Hand-Over-Hand Anterograde Walking",
        "desc": "Zoom to Kinesin-1: ATP binding to the leading head zips its 14-residue neck linker forward, thro...",
        "spoken": "Stage 4 — Kinesin-1 Hand-Over-Hand Anterograde Walking. Zoom to Kinesin-1: ATP binding to the leading head zips its 14-residue neck linker forward, throwing the trailing head 16.4 nm ahead to the next β-tubulin site (+8.2 nm net step).",
        "color": "#FFB703",
        "targetPiece": "Piece_MT_Kinesin1Walker"
      },
      {
        "step": 5,
        "title": "5 : Dynein–Dynactin AAA+ Ring Retrograde Hauling",
        "desc": "Follow Cytoplasmic Dynein-1 using ATP hydrolysis in its AAA1 hexameric ring to swing its coiled-...",
        "spoken": "Stage 5 — Dynein–Dynactin AAA+ Ring Retrograde Hauling. Follow Cytoplasmic Dynein-1 using ATP hydrolysis in its AAA1 hexameric ring to swing its coiled-coil stalk and pull cargo vesicles toward the (-)-end.",
        "color": "#E63946",
        "targetPiece": "Piece_MT_DyneinDynactin"
      }
    ]
  },
  {
    "num": "11",
    "id": "intermediate_filaments_lamins",
    "folder": "11_intermediate_filaments_lamins",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "INTERMEDIATE FILAMENTS: COILED-COIL KERATIN ROPES & NUCLEAR LAMIN MESHWORK",
    "subtitle": "Unlike F-Actin (7 nm) and Microtubules (25 nm)—which are built from globular nucleotide-hydrolyzing monomers and have structural polarity—Intermediate Filaments (IFs, 10 ...",
    "analogy": "Displays the hierarchical assembly of an Intermediate Filament from single α-helix → parallel coiled-coil dimer → staggered antiparallel tetramer → 8-tetramer ULF → compacted 10 nm Keratin rope alongside the orthogonal Nuclear Lamin A/C meshwork (with C-terminal Ig-fold tails) tethered to the inner nuclear envelope.",
    "scaleTag": "EUKARYOTE SCENARIO 11 • 10 NM DIAMETER HIGH-TENSILE COILED-COIL ROPE • PDB: 6JLB / 3TNU",
    "glb": "/eukaryote/models/intermediate_filaments_lamins.glb",
    "pdb": "6JLB, 3TNU",
    "pronounce": "[intermediate-filaments-lamins]",
    "sliderLabel": "MECHANICAL TENSILE STRETCH (%):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ HGPS Progeria (Lamin Δ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Spontaneous Hydropho",
      "🛑 Energy Depleted"
    ],
    "upstream": "80S Ribosome translation (Scenario 32) + CDK1 mitotic kinases (Scenario 35).",
    "coupling": "Inputs: Acidic (Type I) & Basic (Type II) Keratin monomers or Vime ➔ Outputs: Non-polar 10 nm high-tensile cytoplasmic ropes resisting s",
    "downstream": "Anchors into Desmosomes and Hemidesmosomes at the Plasma Membrane (Scenario 08) and forms the structural shell of the Nucleus",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Structurally stable for hours to days in int"
      ],
      [
        "ENERGY CURRENCY",
        "Spontaneous Hydrophobic Heptad Coiled-Coil S"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10 nm Diameter High-Tensile Coiled-Coil Rope"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6JLB & 3TNU"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 6JLB — Human Nuclear Lamin A/C Coiled-Coil",
        "url": "https://www.rcsb.org/structure/6JLB"
      },
      {
        "title": "RCSB PDB Structure 3TNU — Keratin 5/14 Heterodimer",
        "url": "https://www.rcsb.org/structure/3TNU"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Intermediate Filaments",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26862/"
      },
      {
        "title": "Cold Spring Harbor Perspectives — Intermediate Filaments & Nuclear Lamins",
        "url": "https://cshperspectives.cshlp.org/content/8/11/a018242.full"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_IF_CoiledCoilDimer",
        "name": "Parallel Left-Handed Coiled-Coil…",
        "badge": "COILED",
        "color": "#00B4D8",
        "desc": "Parallel Left-Handed Coiled-Coil Dimer (Heptad Rod 1A–1B–2A–2B). Structural source: 3TNU Keratin 5/14 Coiled-Coil. Color taxonomy: Dimer Rod Cerulean (#00B4D8).",
        "dissocVector": [
          -6.5,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_StaggeredTetramer",
        "name": "Antiparallel Staggered Non-Polar…",
        "badge": "STAGGE",
        "color": "#FFB703",
        "desc": "Antiparallel Staggered Non-Polar Tetramer Building Block. Structural source: 6JLB Lamin / Keratin Tetramer. Color taxonomy: Tetramer Gold (#FFB703).",
        "dissocVector": [
          -2.0,
          4.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_IF_ULF_Cylinder",
        "name": "8-Tetramer Unit-Length Filament",
        "badge": "CYLIND",
        "color": "#F77F00",
        "desc": "8-Tetramer Unit-Length Filament (ULF) Lateral Bundle. Structural source: Octameric Tetramer Ring. Color taxonomy: ULF Bundle Amber (#F77F00).",
        "dissocVector": [
          3.5,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_Compacted10nmRope",
        "name": "Compacted 10 nm Cytoplasmic Kera…",
        "badge": "COMPAC",
        "color": "#3A86FF",
        "desc": "Compacted 10 nm Cytoplasmic Keratin / Vimentin Rope. Structural source: Braided 32-Chain IF Rope. Color taxonomy: Tensile Rope Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_NuclearLaminMesh",
        "name": "Nuclear Lamin A/C 3.5 nm Orthogo…",
        "badge": "NUCLEA",
        "color": "#9D4EDD",
        "desc": "Nuclear Lamin A/C 3.5 nm Orthogonal Mesh & Ig-Fold Tails. Structural source: 6JLB + 1IFR Lamin Ig Domain. Color taxonomy: Nuclear Lamina Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          -4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_InnerNuclearMembrane",
        "name": "Inner Nuclear Membrane with Emer…",
        "badge": "INNERN",
        "color": "#06D6A0",
        "desc": "Inner Nuclear Membrane with Emerin/SUN LINC Anchors. Structural source: Nuclear Envelope Bilayer. Color taxonomy: Nuclear Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -6.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Heptad Repeat Monomers to Coiled-Coil Dimers",
        "desc": "Inspect how hydrophobic residues at positions 'a' and 'd' of the 7-residue heptad repeat zip two...",
        "spoken": "Stage 1 — Heptad Repeat Monomers to Coiled-Coil Dimers. Inspect how hydrophobic residues at positions 'a' and 'd' of the 7-residue heptad repeat zip two parallel α-helices into a coiled-coil dimer.",
        "color": "#00B4D8",
        "targetPiece": "Piece_IF_CoiledCoilDimer"
      },
      {
        "step": 2,
        "title": "2 : Antiparallel Staggered Tetramer (Loss of Polarity)",
        "desc": "Two coiled-coil dimers associate in opposite orientations, creating a symmetric, non-polar tetra...",
        "spoken": "Stage 2 — Antiparallel Staggered Tetramer (Loss of Polarity). Two coiled-coil dimers associate in opposite orientations, creating a symmetric, non-polar tetramer with no (+) or (-) end.",
        "color": "#FFB703",
        "targetPiece": "Piece_IF_StaggeredTetramer"
      },
      {
        "step": 3,
        "title": "3 : Lateral Packing into 10 nm Ropes",
        "desc": "Eight tetramers wrap into a hollow Unit-Length Filament (ULF) and radially compact into a 32-str...",
        "spoken": "Stage 3 — Lateral Packing into 10 nm Ropes. Eight tetramers wrap into a hollow Unit-Length Filament (ULF) and radially compact into a 32-strand 10 nm Keratin cable.",
        "color": "#F77F00",
        "targetPiece": "Piece_IF_ULF_Cylinder"
      },
      {
        "step": 4,
        "title": "4 : Extreme Strain-Stiffening Elasticity",
        "desc": "Pull the filament to 250% length: unlike brittle microtubules that snap at 50% strain, IF coiled...",
        "spoken": "Stage 4 — Extreme Strain-Stiffening Elasticity. Pull the filament to 250% length: unlike brittle microtubules that snap at 50% strain, IF coiled-coils unwind into β-sheets to absorb massive mechanical energy.",
        "color": "#3A86FF",
        "targetPiece": "Piece_IF_Compacted10nmRope"
      },
      {
        "step": 5,
        "title": "5 : Nuclear Lamina Mesh & Mitotic CDK1 Disassembly",
        "desc": "Examine the nuclear Lamin A/C meshwork (with globular Ig-fold tails) and trigger CDK1 phosphoryl...",
        "spoken": "Stage 5 — Nuclear Lamina Mesh & Mitotic CDK1 Disassembly. Examine the nuclear Lamin A/C meshwork (with globular Ig-fold tails) and trigger CDK1 phosphorylation to dissolve the nuclear cage for mitosis.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_IF_NuclearLaminMesh"
      }
    ]
  },
  {
    "num": "12",
    "id": "eukaryotic_cilium_axoneme",
    "folder": "12_eukaryotic_cilium_axoneme",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "EUKARYOTIC 9+2 MOTILE CILIUM / FLAGELLUM AXONEME & INTRAFLAGELLAR TRANSPORT (IFT)",
    "subtitle": "Whereas the bacterial flagellum (Prokaryote Scenario 02) is a passive extracellular protein propeller spun at its base by a proton-driven rotary motor, the Eukaryotic Mot...",
    "analogy": "Renders a 3D cross-sectional and longitudinal cutaway of the 9+2 Axoneme inside its ciliary membrane sheath: the 9 outer A/B doublets ring, the 2 central pair singlets, Radial Spokes (RS1–RS3), Nexin N-DRC bridges, Outer/Inner Axonemal Dynein Arms, and an IFT cargo train riding between the outer doublet and the ciliary membrane.",
    "scaleTag": "EUKARYOTE SCENARIO 12 • 250 NM DIAMETER × 10 ΜM 9+2 MICROTUBULE AXONEME • PDB: 8J07 / 8B6X",
    "glb": "/eukaryote/models/eukaryotic_cilium_axoneme.glb",
    "pdb": "8J07, 8B6X",
    "pronounce": "[eukaryotic-cilium-axoneme]",
    "sliderLabel": "BEAT WAVEFORM MODE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Intraflagellar Transpo",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (Axon",
      "🛑 Energy Depleted"
    ],
    "upstream": "Centrosome Basal Body templating (Scenario 10) + Cytosolic ATP & GTP + Golgi ciliary membrane vesicles (Scenario 15).",
    "coupling": "Inputs: Cytosolic ATP (~10⁵ ATP/sec per beating cilium fueling Out ➔ Outputs: Hydrodynamic fluid propulsion (mucociliary clearance in ai",
    "downstream": "Drives whole-cell motility or extracellular fluid flow across the Plasma Membrane (Scenario 01/04) and relays Primary Cilium ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Ciliary beat frequency 15–60 Hz; IFT anterog"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (Axonemal Outer/Inner Dynein "
      ],
      [
        "BIOPHYSICAL SCALE",
        "250 nm Diameter × 10 µm 9+2 Microtubule Axon"
      ],
      [
        "PRIMARY RCSB PDBS",
        "8J07 & 8B6X"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 8J07 — 96-nm Modular Repeat of Human Respiratory Doublet Microtubule",
        "url": "https://www.rcsb.org/structure/8J07"
      },
      {
        "title": "RCSB PDB Structure 8B6X — Anterograde Intraflagellar Transport Train",
        "url": "https://www.rcsb.org/structure/8B6X"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Dynein",
        "url": "https://pdb101.rcsb.org/motm/214"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Structure and Function of Cilia and Flagella",
        "url": "https://www.nature.com/articles/s41580-018-0092-2"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Cil_OuterDoublets9",
        "name": "Ring of 9 Outer Microtubule Doub…",
        "badge": "OUTERD",
        "color": "#3A86FF",
        "desc": "Ring of 9 Outer Microtubule Doublets (13-PF A-Tubule + 10-PF B-Tubule). Structural source: 8J07 Outer Doublet Ring. Color taxonomy: Doublet Ring Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Cil_CentralPair2",
        "name": "Central Pair Apparatus",
        "badge": "CENTRA",
        "color": "#9D4EDD",
        "desc": "Central Pair Apparatus (C1 & C2 Singlet Microtubules + Projections). Structural source: 7RRO Central Pair. Color taxonomy: Central Pair Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          0.0,
          4.0
        ]
      },
      {
        "meshName": "Piece_Cil_DyneinArms",
        "name": "Outer",
        "badge": "DYNEIN",
        "color": "#E63946",
        "desc": "Outer (ODA) & Inner (IDA) Axonemal Dynein Motor Arms. Structural source: 8J07 Axonemal Dyneins. Color taxonomy: Dynein Motor Crimson (#E63946).",
        "dissocVector": [
          4.5,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Cil_RadialSpokesNexin",
        "name": "T-Shaped Radial Spokes",
        "badge": "RADIAL",
        "color": "#FFB703",
        "desc": "T-Shaped Radial Spokes (RS1–RS3) & Nexin-DRC Elastic Bridges. Structural source: 7RRO / 8J07 Radial Spokes. Color taxonomy: Regulatory Spoke Gold (#FFB703).",
        "dissocVector": [
          -4.5,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Cil_IFTTrain",
        "name": "Intraflagellar Transport Train",
        "badge": "IFTTRA",
        "color": "#00B4D8",
        "desc": "Intraflagellar Transport Train (IFT-A/B + Kinesin-2 / Dynein-2). Structural source: 8B6X IFT Train Polymer. Color taxonomy: IFT Train Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          5.5,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Cil_CiliaryMembraneBasal",
        "name": "Ciliary Membrane Sheath & 9×3 Ba…",
        "badge": "CILIAR",
        "color": "#06D6A0",
        "desc": "Ciliary Membrane Sheath & 9×3 Basal Body Transition Zone. Structural source: Ciliary Bilayer + Y-Links. Color taxonomy: Ciliary Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -5.5,
          -3.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The 9+2 Axoneme Ring vs. Bacterial Flagellum",
        "desc": "Contrast the eukaryotic membrane-covered 9+2 microtubule axoneme (powered by thousands of dynein...",
        "spoken": "Stage 1 — The 9+2 Axoneme Ring vs. Bacterial Flagellum. Contrast the eukaryotic membrane-covered 9+2 microtubule axoneme (powered by thousands of dyneins along its entire length) against the prokaryotic rotary filament.",
        "color": "#3A86FF",
        "targetPiece": "Piece_Cil_OuterDoublets9"
      },
      {
        "step": 2,
        "title": "2 : Outer A/B Doublets & Dynein Walking",
        "desc": "Zoom into two adjacent outer doublets: ATP hydrolysis drives Outer and Inner Dynein Arms on the ...",
        "spoken": "Stage 2 — Outer A/B Doublets & Dynein Walking. Zoom into two adjacent outer doublets: ATP hydrolysis drives Outer and Inner Dynein Arms on the A-tubule to walk toward the (-)-end of the neighboring B-tubule.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Cil_CentralPair2"
      },
      {
        "step": 3,
        "title": "3 : Nexin Links & Radial Spokes Convert Sliding to Bending",
        "desc": "Show how Nexin-DRC elastic bridges prevent the doublets from telescoping apart, converting linea...",
        "spoken": "Stage 3 — Nexin Links & Radial Spokes Convert Sliding to Bending. Show how Nexin-DRC elastic bridges prevent the doublets from telescoping apart, converting linear inter-doublet sliding into a macroscopic bend.",
        "color": "#E63946",
        "targetPiece": "Piece_Cil_DyneinArms"
      },
      {
        "step": 4,
        "title": "4 : Central Pair & Asymmetric Switch Point",
        "desc": "Observe the Central Pair projections contacting the T-shaped Radial Spokes to alternate dynein a...",
        "spoken": "Stage 4 — Central Pair & Asymmetric Switch Point. Observe the Central Pair projections contacting the T-shaped Radial Spokes to alternate dynein activation between opposite sides of the ring (doublets 1–4 vs. 6–9).",
        "color": "#FFB703",
        "targetPiece": "Piece_Cil_RadialSpokesNexin"
      },
      {
        "step": 5,
        "title": "5 : Intraflagellar Transport (IFT) Elevator",
        "desc": "Follow a polymeric IFT-A/B train hauled up the outer doublet by Kinesin-2 to deliver tubulin to ...",
        "spoken": "Stage 5 — Intraflagellar Transport (IFT) Elevator. Follow a polymeric IFT-A/B train hauled up the outer doublet by Kinesin-2 to deliver tubulin to the growing (+)-end tip, then returned by Dynein-2.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Cil_IFTTrain"
      }
    ]
  },
  {
    "num": "13",
    "id": "rough_er_sec61_ost",
    "folder": "13_rough_er_sec61_ost",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "ROUGH ENDOPLASMIC RETICULUM, SIGNAL RECOGNITION PARTICLE (SRP), SEC61 TRANSLOCON & N-GLYCOSYLATION",
    "subtitle": "Roughly one-third of the entire eukaryotic proteome (all secreted proteins, plasma membrane receptors, and ER/Golgi/Lysosome enzymes) enters the Endoplasmic Reticulum (ER...",
    "analogy": "Renders the complete ER membrane translocon holocomplex: an 80S ribosome docked atop the Sec61αβγ hourglass channel, flanked by the SRP–SRP Receptor handover module, Signal Peptidase, luminal BiP chaperone, and the Oligosaccharyltransferase (OST) enzyme transferring a glowing 14-sugar N-glycan tree from Dolichol-PP onto the emerging polypeptide.",
    "scaleTag": "EUKARYOTE SCENARIO 13 • 35 NM CO-TRANSLATIONAL ER TRANSLOCATION & GLYCOSYLATION COMPLEX • PDB: 7K5I / 7O7F",
    "glb": "/eukaryote/models/rough_er_sec61_ost.glb",
    "pdb": "7K5I, 7O7F",
    "pronounce": "[rough-er-sec61-ost]",
    "sliderLabel": "NASCENT POLYPEPTIDE FATE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Co-Translational Elong",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Ribosomal Peptidyl T",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nucleus mRNA export (Scenario 27) + Cytoplasmic 80S Ribosome translation initiation (Scenario 32) + Dolichol-PP-Glc₃Man₉GlcNA",
    "coupling": "Inputs: Translating 80S Ribosome–mRNA–Nascent Signal Peptide compl ➔ Outputs: N-Glycosylated, disulfide-bonded luminal secretory protein",
    "downstream": "Properly folded glycoproteins bud from ER Exit Sites in COPII cages to the Golgi Apparatus (Scenario 15); terminally misfolde",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Co-translational translocation ~5–10 amino a"
      ],
      [
        "ENERGY CURRENCY",
        "Ribosomal Peptidyl Transferase & eEF2 GTP Pu"
      ],
      [
        "BIOPHYSICAL SCALE",
        "35 nm Co-Translational ER Translocation & Gl"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7K5I & 7O7F"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Signal Recognition Particle",
        "url": "https://pdb101.rcsb.org/motm/212"
      },
      {
        "title": "RCSB PDB Structure 7K5I — Mammalian 80S Ribosome–Sec61–OST Complex",
        "url": "https://www.rcsb.org/structure/7K5I"
      },
      {
        "title": "RCSB PDB Structure 7O7F — Human SRP–Receptor Pre-Handover Complex",
        "url": "https://www.rcsb.org/structure/7O7F"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Endoplasmic Reticulum",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26841/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_RER_Ribosome80S",
        "name": "Docked Cytoplasmic 80S Ribosome",
        "badge": "RIBOSO",
        "color": "#7209B7",
        "desc": "Docked Cytoplasmic 80S Ribosome (60S + 40S Subunits & mRNA). Structural source: 7K5I / 4V6X 80S Ribosome. Color taxonomy: Ribosome Royal Purple (#7209B7).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_RER_SRP_Receptor",
        "name": "Signal Recognition Particle",
        "badge": "RECEPT",
        "color": "#FFB703",
        "desc": "Signal Recognition Particle (7SL RNA + SRP54) & ER SRP Receptor. Structural source: 7O7F SRP–SR GTPase Complex. Color taxonomy: SRP Targeting Gold (#FFB703).",
        "dissocVector": [
          -5.0,
          3.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_RER_Sec61Channel",
        "name": "Sec61αβγ Hourglass Translocon",
        "badge": "SEC61C",
        "color": "#00B4D8",
        "desc": "Sec61αβγ Hourglass Translocon (Plug Helix & Lateral Gate). Structural source: 7K5I Sec61 Complex. Color taxonomy: Translocon Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_RER_OST_Glycan",
        "name": "Oligosaccharyltransferase",
        "badge": "GLYCAN",
        "color": "#F77F00",
        "desc": "Oligosaccharyltransferase (OST-A) & Dolichol-PP-Glc₃Man₉GlcNAc₂. Structural source: 7K5I / 6S7O OST Complex. Color taxonomy: Glycosyltransferase Amber (#F77F00).",
        "dissocVector": [
          4.5,
          -0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_RER_BiP_Calnexin",
        "name": "ER Luminal BiP",
        "badge": "CALNEX",
        "color": "#E63946",
        "desc": "ER Luminal BiP (Hsp70) Ratchet, PDI & Calnexin Quality Control. Structural source: 5E84 BiP Chaperone. Color taxonomy: Luminal Chaperone Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -4.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_RER_ERMembrane",
        "name": "Rough ER Phospholipid Bilayer Sh…",
        "badge": "ERMEMB",
        "color": "#06D6A0",
        "desc": "Rough ER Phospholipid Bilayer Sheet. Structural source: ER Membrane Bilayer. Color taxonomy: ER Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Signal Peptide Emergence & SRP Arrest",
        "desc": "Watch the hydrophobic N-terminal signal sequence emerge from the 80S ribosome and slip into the ...",
        "spoken": "Stage 1 — Signal Peptide Emergence & SRP Arrest. Watch the hydrophobic N-terminal signal sequence emerge from the 80S ribosome and slip into the methionine-lined groove of SRP54, pausing translation.",
        "color": "#7209B7",
        "targetPiece": "Piece_RER_Ribosome80S"
      },
      {
        "step": 2,
        "title": "2 : SRP Receptor Docking & GTP Handover",
        "desc": "SRP guides the ribosome to the ER membrane SRP Receptor; twin GTP hydrolysis releases SRP and al...",
        "spoken": "Stage 2 — SRP Receptor Docking & GTP Handover. SRP guides the ribosome to the ER membrane SRP Receptor; twin GTP hydrolysis releases SRP and aligns the ribosome exit tunnel over Sec61.",
        "color": "#FFB703",
        "targetPiece": "Piece_RER_SRP_Receptor"
      },
      {
        "step": 3,
        "title": "3 : Sec61 Plug Displacement & Lateral Gating",
        "desc": "The signal peptide intercalates into the Sec61 lateral seam (TM2/TM7), displacing the luminal pl...",
        "spoken": "Stage 3 — Sec61 Plug Displacement & Lateral Gating. The signal peptide intercalates into the Sec61 lateral seam (TM2/TM7), displacing the luminal plug helix to open the aqueous pore—or releasing hydrophobic TM helices sideways into the lipid bilayer.",
        "color": "#00B4D8",
        "targetPiece": "Piece_RER_Sec61Channel"
      },
      {
        "step": 4,
        "title": "4 : En-Bloc N-Glycosylation by OST",
        "desc": "As an Asn-X-Ser/Thr sequon enters the ER lumen, Oligosaccharyltransferase (OST) snaps a 14-sugar...",
        "spoken": "Stage 4 — En-Bloc N-Glycosylation by OST. As an Asn-X-Ser/Thr sequon enters the ER lumen, Oligosaccharyltransferase (OST) snaps a 14-sugar Glc₃Man₉GlcNAc₂ tree from Dolichol-PP onto the asparagine nitrogen.",
        "color": "#F77F00",
        "targetPiece": "Piece_RER_OST_Glycan"
      },
      {
        "step": 5,
        "title": "5 : BiP Ratcheting, PDI Disulfides & Calnexin Folding",
        "desc": "Luminal BiP binds the chain to prevent backsliding, Protein Disulfide Isomerase (PDI) forms Cys–...",
        "spoken": "Stage 5 — BiP Ratcheting, PDI Disulfides & Calnexin Folding. Luminal BiP binds the chain to prevent backsliding, Protein Disulfide Isomerase (PDI) forms Cys–S–S–Cys bridges, and Calnexin checks the trimmed glucose tag before export.",
        "color": "#E63946",
        "targetPiece": "Piece_RER_BiP_Calnexin"
      }
    ]
  },
  {
    "num": "14",
    "id": "smooth_er_ca_pump_lipids",
    "folder": "14_smooth_er_ca_pump_lipids",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "SMOOTH ER TUBULAR NETWORK, SERCA CA²⁺-ATPASE PUMP & LIPID BIOGENESIS",
    "subtitle": "The Smooth Endoplasmic Reticulum (SER) is a ribosome-free labyrinth of high-curvature 30–50 nm membrane tubules sculpted by hair-pin Reticulon wedges. It serves three ind...",
    "analogy": "Displays a curved Smooth ER tubule housing the SERCA1a Ca²⁺ pump (1SU4), the mushroom-shaped tetrameric IP₃ Receptor Ca²⁺ release channel, Cytochrome P450 + Reductase, and the 11-subunit Seipin ring (6U8A) pinching off a golden monolayer-wrapped neutral Lipid Droplet.",
    "scaleTag": "EUKARYOTE SCENARIO 14 • 30–50 NM SMOOTH ER TUBULE, CALCIUM STORE & LIPID FACTORY • PDB: 1SU4 / 6U8A",
    "glb": "/eukaryote/models/smooth_er_ca_pump_lipids.glb",
    "pdb": "1SU4, 6U8A",
    "pronounce": "[smooth-er-ca-pump-lipids]",
    "sliderLabel": "CYTOSOLIC IP₃ CONCENTRATION (ΜM):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Thapsigargin SERCA Inh",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (SERC",
      "🛑 Energy Depleted"
    ],
    "upstream": "GPCR/PLCβ IP₃ second messenger (Scenario 06) + Mitochondrial ATP (Scenario 21) + Cytosolic fatty acyl-CoA, glycerol-3-phospha",
    "coupling": "Inputs: 2 Cytosolic Ca²⁺ ions + 1 ATP (for SERCA pumping into the  ➔ Outputs: Sequestered ER luminal Ca²⁺ store (~1 mM) & rapid cytosoli",
    "downstream": "Released Ca²⁺ waves activate Actomyosin contraction (Scenario 09), Synaptotagmin SNARE exocytosis (Scenario 07), and Mitochon",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "SERCA pumps ~10–30 Ca²⁺ ions/sec; single IP₃"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (SERCA Asp351 phosphorylation"
      ],
      [
        "BIOPHYSICAL SCALE",
        "30–50 nm Smooth ER Tubule, Calcium Store & L"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1SU4 & 6U8A"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Calcium Pump (SERCA)",
        "url": "https://pdb101.rcsb.org/motm/51"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cytochrome P450",
        "url": "https://pdb101.rcsb.org/motm/82"
      },
      {
        "title": "RCSB PDB Structure 1SU4 — Calcium ATPase SERCA1a",
        "url": "https://www.rcsb.org/structure/1SU4"
      },
      {
        "title": "RCSB PDB Structure 6U8A — Human Seipin Lipid-Droplet Assembly Ring",
        "url": "https://www.rcsb.org/structure/6U8A"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_SER_SERCA_Pump",
        "name": "SERCA1a Ca²⁺-ATPase",
        "badge": "PUMP",
        "color": "#00B4D8",
        "desc": "SERCA1a Ca²⁺-ATPase (10-TM Core & Cytoplasmic A, N, P Headpiece). Structural source: 1SU4 / 3B9B SERCA1a. Color taxonomy: Calcium Pump Cerulean (#00B4D8).",
        "dissocVector": [
          -5.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_SER_IP3Receptor",
        "name": "Tetrameric IP₃ Receptor",
        "badge": "IP3REC",
        "color": "#E63946",
        "desc": "Tetrameric IP₃ Receptor (IP₃R1) Ca²⁺ Release Channel. Structural source: 6MU1 IP3R1 Tetramer. Color taxonomy: Release Channel Crimson (#E63946).",
        "dissocVector": [
          -1.0,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_SER_SeipinRing",
        "name": "Undecameric Seipin Ring Nucleati…",
        "badge": "SEIPIN",
        "color": "#FFB703",
        "desc": "Undecameric Seipin Ring Nucleating Nascent Neutral Lipid Droplet. Structural source: 6U8A Seipin 11-mer Ring. Color taxonomy: Seipin Ring Gold (#FFB703).",
        "dissocVector": [
          4.5,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_SER_CytochromeP450",
        "name": "Membrane-Tethered Cytochrome P450",
        "badge": "CYTOCH",
        "color": "#9D4EDD",
        "desc": "Membrane-Tethered Cytochrome P450 (CYP3A4) Heme Monooxygenase. Structural source: 1TQN Cytochrome P450. Color taxonomy: Detox Enzyme Violet (#9D4EDD).",
        "dissocVector": [
          5.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_SER_ReticulonTubule",
        "name": "Reticulon Wedge-Curved Smooth ER…",
        "badge": "RETICU",
        "color": "#06D6A0",
        "desc": "Reticulon Wedge-Curved Smooth ER Phospholipid Bilayer. Structural source: Curved ER Bilayer + Reticulon. Color taxonomy: Smooth ER Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -1.5,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Reticulon Wedges & High-Curvature SER Tubules",
        "desc": "Inspect how V-shaped Reticulon hairpins insert into only the outer leaflet of the Smooth ER, ben...",
        "spoken": "Stage 1 — Reticulon Wedges & High-Curvature SER Tubules. Inspect how V-shaped Reticulon hairpins insert into only the outer leaflet of the Smooth ER, bending the membrane into 30 nm tubules.",
        "color": "#00B4D8",
        "targetPiece": "Piece_SER_SERCA_Pump"
      },
      {
        "step": 2,
        "title": "2 : SERCA Ca²⁺-ATPase Pumping Cycle",
        "desc": "Watch SERCA bind 2 cytosolic Ca²⁺ ions in its E₁ state, phosphorylate Asp351 with ATP, and rock ...",
        "spoken": "Stage 2 — SERCA Ca²⁺-ATPase Pumping Cycle. Watch SERCA bind 2 cytosolic Ca²⁺ ions in its E₁ state, phosphorylate Asp351 with ATP, and rock its A/N/P domains to dump the 2 Ca²⁺ into the ER lumen.",
        "color": "#E63946",
        "targetPiece": "Piece_SER_IP3Receptor"
      },
      {
        "step": 3,
        "title": "3 : IP₃-Gated Calcium Release Wave",
        "desc": "Dock four IP₃ rings onto the cytosolic domains of the giant tetrameric IP₃ Receptor to open its ...",
        "spoken": "Stage 3 — IP₃-Gated Calcium Release Wave. Dock four IP₃ rings onto the cytosolic domains of the giant tetrameric IP₃ Receptor to open its pore and unleash a rapid Ca²⁺ wave into the cytoplasm.",
        "color": "#FFB703",
        "targetPiece": "Piece_SER_SeipinRing"
      },
      {
        "step": 4,
        "title": "4 : Seipin Ring & Lipid Droplet Lens Nucleation",
        "desc": "Zoom to the 11-subunit Seipin ring where DGAT-synthesized triacylglycerol (TAG) oils coalesce in...",
        "spoken": "Stage 4 — Seipin Ring & Lipid Droplet Lens Nucleation. Zoom to the 11-subunit Seipin ring where DGAT-synthesized triacylglycerol (TAG) oils coalesce into a lens between leaflets and bud into the cytosol wrapped in a phospholipid monolayer.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_SER_CytochromeP450"
      },
      {
        "step": 5,
        "title": "5 : Cytochrome P450 Xenobiotic Hydroxylation",
        "desc": "Highlight the Heme-iron center of Cytochrome P450 using electrons from NADPH to insert an oxygen...",
        "spoken": "Stage 5 — Cytochrome P450 Xenobiotic Hydroxylation. Highlight the Heme-iron center of Cytochrome P450 using electrons from NADPH to insert an oxygen atom into hydrophobic drugs and toxins.",
        "color": "#06D6A0",
        "targetPiece": "Piece_SER_ReticulonTubule"
      }
    ]
  },
  {
    "num": "15",
    "id": "golgi_coatomer_trafficking",
    "folder": "15_golgi_coatomer_trafficking",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "GOLGI APPARATUS CISTERNAE STACK (CIS → MEDIAL → TRANS) & COPII / COPI VESICLE COATS",
    "subtitle": "The Golgi Apparatus is the central post-office and carbohydrate-engineering factory of the eukaryotic cell, organized as a polarized ribbon of 4–8 flattened membrane cist...",
    "analogy": "Shows a cutaway stack of Cis, Medial, and Trans Golgi cisternae flanked on the ER side by an assembling COPII Sec13/31 cuboctahedral cage and on the retrograde edge by a COPI heptameric coatomer bud retrieving KDEL-bound cargo, while Rab GTPases and Golgin coiled-coil tethers catch incoming vesicles.",
    "scaleTag": "EUKARYOTE SCENARIO 15 • 60–500 NM POLARIZED CISTERNAL STACK & COATOMER CAGES • PDB: 2P3E / 5A1U",
    "glb": "/eukaryote/models/golgi_coatomer_trafficking.glb",
    "pdb": "2P3E, 5A1U",
    "pronounce": "[golgi-coatomer-trafficking]",
    "sliderLabel": "VESICLE COAT FOCUS:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Brefeldin A Fungal Tox",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Hydrolysis (Sar1",
      "🛑 Energy Depleted"
    ],
    "upstream": "Rough ER N-glycosylated folding intermediates (Scenario 13) + Smooth ER lipids (Scenario 14) + Nucleotide sugars (UDP-Gal, CM",
    "coupling": "Inputs: High-mannose N-glycosylated proteins (Man₈–₉GlcNAc₂) exiti ➔ Outputs: Complex N- and O-glycosylated Plasma Membrane & Secreted P",
    "downstream": "Delivers mature channels/receptors to the Plasma Membrane (Scenarios 04–08), Clathrin/M6P-sorted hydrolases to Lysosomes (Sce",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Cisternal maturation progresses from Cis to "
      ],
      [
        "ENERGY CURRENCY",
        "GTP Hydrolysis (Sar1/Sec23 GAP & Arf1/ArfGAP"
      ],
      [
        "BIOPHYSICAL SCALE",
        "60–500 nm Polarized Cisternal Stack & Coatom"
      ],
      [
        "PRIMARY RCSB PDBS",
        "2P3E & 5A1U"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: COPII Vesicle Coat",
        "url": "https://pdb101.rcsb.org/motm/257"
      },
      {
        "title": "RCSB PDB Structure 5A1U — COPI Coat Leaf Triad",
        "url": "https://www.rcsb.org/structure/5A1U"
      },
      {
        "title": "RCSB PDB Structure 6I6B — KDEL Receptor Bound to KDEL Peptide",
        "url": "https://www.rcsb.org/structure/6I6B"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Transport from the ER through the Golgi",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26941/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Gol_CisMedialTrans",
        "name": "Polarized Golgi Cisternae Stack",
        "badge": "CISMED",
        "color": "#F77F00",
        "desc": "Polarized Golgi Cisternae Stack (Cis → Medial → Trans Lumen). Structural source: Golgi Membrane Stack. Color taxonomy: Golgi Cisternae Amber (#F77F00).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Gol_COPIICage",
        "name": "Anterograde COPII Cage",
        "badge": "COPIIC",
        "color": "#00B4D8",
        "desc": "Anterograde COPII Cage (Sar1-GTP + Sec23/24 + Sec13/31 Rods). Structural source: 2P3E / 4BZJ COPII Cage. Color taxonomy: COPII Cage Cerulean (#00B4D8).",
        "dissocVector": [
          -6.0,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Gol_COPICoatomer",
        "name": "Retrograde COPI Heptameric Coato…",
        "badge": "COPICO",
        "color": "#9D4EDD",
        "desc": "Retrograde COPI Heptameric Coatomer Triad & Arf1-GTP. Structural source: 5A1U COPI Coatomer. Color taxonomy: COPI Coatomer Violet (#9D4EDD).",
        "dissocVector": [
          6.0,
          2.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Gol_KDEL_M6PReceptors",
        "name": "KDEL Retrieval Receptor",
        "badge": "M6PREC",
        "color": "#FFB703",
        "desc": "KDEL Retrieval Receptor (pH Sensor) & Mannose-6-Phosphate Receptor. Structural source: 6I6B KDEL Receptor. Color taxonomy: Sorting Receptor Gold (#FFB703).",
        "dissocVector": [
          2.5,
          -3.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Gol_Glycosyltransferases",
        "name": "Cis-to-Trans Mannosidase I/II &…",
        "badge": "GLYCOS",
        "color": "#E63946",
        "desc": "Cis-to-Trans Mannosidase I/II & Galactosyl/Sialyltransferases. Structural source: 1FO8 GnTI / Glycosyltransferases. Color taxonomy: Glycan Enzyme Crimson (#E63946).",
        "dissocVector": [
          -2.0,
          3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Gol_GolginRabTethers",
        "name": "Long Coiled-Coil Golgin Tethers",
        "badge": "GOLGIN",
        "color": "#06D6A0",
        "desc": "Long Coiled-Coil Golgin Tethers (GM130/p115) & TRAPP/COG Complexes. Structural source: Golgin Coiled-Coil Tethers. Color taxonomy: Tether Cable Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          5.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Anterograde Budding: The COPII Cuboctahedral Cage",
        "desc": "At the ER exit site, Sec12 loads Sar1 with GTP, recruiting Sec23/24 cargo adaptors and Sec13/31 ...",
        "spoken": "Stage 1 — Anterograde Budding: The COPII Cuboctahedral Cage. At the ER exit site, Sec12 loads Sar1 with GTP, recruiting Sec23/24 cargo adaptors and Sec13/31 outer struts that self-assemble into a COPII cage.",
        "color": "#F77F00",
        "targetPiece": "Piece_Gol_CisMedialTrans"
      },
      {
        "step": 2,
        "title": "2 : Golgin Tentacle Capture & Cis-Golgi Entry",
        "desc": "Long coiled-coil Golgin tethers (GM130/p115) snatch the uncoated COPII vesicle and fuse it into ...",
        "spoken": "Stage 2 — Golgin Tentacle Capture & Cis-Golgi Entry. Long coiled-coil Golgin tethers (GM130/p115) snatch the uncoated COPII vesicle and fuse it into the Cis-Golgi cisterna.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Gol_COPIICage"
      },
      {
        "step": 3,
        "title": "3 : Retrograde KDEL Rescue via COPI Coatomer",
        "desc": "Escaped ER chaperones (bearing a C-terminal Lys-Asp-Glu-Leu [KDEL] tag) bind the KDEL Receptor i...",
        "spoken": "Stage 3 — Retrograde KDEL Rescue via COPI Coatomer. Escaped ER chaperones (bearing a C-terminal Lys-Asp-Glu-Leu [KDEL] tag) bind the KDEL Receptor in the slightly acidic Cis-Golgi (pH 6.5) and return to the ER in Arf1-driven COPI vesicles.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Gol_COPICoatomer"
      },
      {
        "step": 4,
        "title": "4 : Sequential Glycan Trimming & Maturation",
        "desc": "Follow a glycoprotein across Cis → Medial → Trans compartments as Mannosidases trim mannose resi...",
        "spoken": "Stage 4 — Sequential Glycan Trimming & Maturation. Follow a glycoprotein across Cis → Medial → Trans compartments as Mannosidases trim mannose residues and GlcNAc-, Galactosyl-, and Sialyltransferases build mature complex sugar trees.",
        "color": "#FFB703",
        "targetPiece": "Piece_Gol_KDEL_M6PReceptors"
      },
      {
        "step": 5,
        "title": "5 : Trans-Golgi Network (TGN) M6P & Secretory Sorting",
        "desc": "In the TGN (pH 6.0), Mannose-6-Phosphate Receptors sort lysosomal enzymes into clathrin-coated v...",
        "spoken": "Stage 5 — Trans-Golgi Network (TGN) M6P & Secretory Sorting. In the TGN (pH 6.0), Mannose-6-Phosphate Receptors sort lysosomal enzymes into clathrin-coated vesicles while secretory proteins bud toward the plasma membrane.",
        "color": "#E63946",
        "targetPiece": "Piece_Gol_Glycosyltransferases"
      }
    ]
  },
  {
    "num": "16",
    "id": "lysosome_v_atpase_autophagy",
    "folder": "16_lysosome_v_atpase_autophagy",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "LYSOSOME, ROTARY V-ATPASE PROTON PUMP (PH 4.5) & AUTOPHAGOSOME (LC3) FUSION",
    "subtitle": "The Lysosome is the eukaryotic cell's acidic stomach and metabolic signaling hub (pH 4.5–5.0 vs. cytosolic pH 7.2). Its single membrane is protected from self-digestion o...",
    "analogy": "Cutaway of an active Lysosome fusing with a double-membrane LC3-II Autophagosome: highlights the rotary V₁Vo-ATPase proton pump (6WM2) spinning in the lysosomal membrane, the protective LAMP1/2 glycocalyx, luminal Cathepsin proteases digesting cargo, and the outer Ragulator–Rag–mTORC1 amino-acid sensing complex.",
    "scaleTag": "EUKARYOTE SCENARIO 16 • 100–300 NM ACIDIC RECYCLING ORGANELLE & ROTARY V-ATPASE • PDB: 6WM2 / 7K2V",
    "glb": "/eukaryote/models/lysosome_v_atpase_autophagy.glb",
    "pdb": "6WM2, 7K2V",
    "pronounce": "[lysosome-v-atpase-autophagy]",
    "sliderLabel": "V-ATPASE PROTON PUMPING / LUMINAL PH:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Bafilomycin A1 / Chlor",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Cytosolic ATP Hydrol",
      "🛑 Energy Depleted"
    ],
    "upstream": "Trans-Golgi M6P-tagged acid hydrolases (Scenario 15) + Endocytosed LDL/receptors (Scenario 07) + Damaged Mitochondria/aggrega",
    "coupling": "Inputs: Cytosolic ATP + H⁺ (pumped into the lumen by rotary V₁Vo-A ➔ Outputs: Recycled free Amino Acids, Monosaccharides, Fatty Acids & ",
    "downstream": "Exported amino acids activate mTORC1 to boost 80S Ribosome translation (Scenario 32); free cholesterol exported by NPC1 feeds",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "V-ATPase rotates at ~30–60 rev/s (~300–600 H"
      ],
      [
        "ENERGY CURRENCY",
        "Cytosolic ATP Hydrolysis (V₁ A₃B₃ head: 3 AT"
      ],
      [
        "BIOPHYSICAL SCALE",
        "100–300 nm Acidic Recycling Organelle & Rota"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6WM2 & 7K2V"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 6WM2 — Complete Human V-ATPase in Rotational State 1",
        "url": "https://www.rcsb.org/structure/6WM2"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: mTOR",
        "url": "https://pdb101.rcsb.org/motm/219"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Autophagy",
        "url": "https://pdb101.rcsb.org/motm/204"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Lysosomes",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26844/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Lys_VATPase_V1",
        "name": "V-ATPase Cytosolic V₁ Catalytic…",
        "badge": "V1",
        "color": "#FFB703",
        "desc": "V-ATPase Cytosolic V₁ Catalytic Head (A₃B₃ Hexamer, DF Rotor & E/G Staters). Structural source: 6WM2 V1 Sector. Color taxonomy: Catalytic ATPase Gold (#FFB703).",
        "dissocVector": [
          -4.5,
          3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Lys_VATPase_Vo",
        "name": "V-ATPase Membrane Vo Proton Turb…",
        "badge": "VO",
        "color": "#00B4D8",
        "desc": "V-ATPase Membrane Vo Proton Turbine (c-Ring Decamer & a-Subunit Half-Channels). Structural source: 6WM2 Vo Sector. Color taxonomy: Proton Turbine Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          -0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Lys_LAMP_Membrane",
        "name": "Lysosomal Membrane & Protective…",
        "badge": "MEMBRA",
        "color": "#06D6A0",
        "desc": "Lysosomal Membrane & Protective Luminal LAMP1/LAMP2 Glycocalyx Shield. Structural source: Lysosomal Bilayer + LAMP Glycans. Color taxonomy: Lysosome Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Lys_CathepsinHydrolases",
        "name": "Luminal Acid Hydrolases",
        "badge": "CATHEP",
        "color": "#E63946",
        "desc": "Luminal Acid Hydrolases (Cathepsin B/D, Acid Lipase & NPC2). Structural source: 1HUC Cathepsin B + 6W5S NPC1. Color taxonomy: Acid Hydrolase Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -4.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Lys_AutophagosomeLC3",
        "name": "Fusing Double-Membrane Autophago…",
        "badge": "AUTOPH",
        "color": "#9D4EDD",
        "desc": "Fusing Double-Membrane Autophagosome Studded with Lipidated LC3-II. Structural source: 1UGM LC3-II + STX17 SNARE. Color taxonomy: Autophagosome Violet (#9D4EDD).",
        "dissocVector": [
          5.0,
          -2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Lys_mTORC1_Sensor",
        "name": "Outer Surface Ragulator–Rag GTPa…",
        "badge": "SENSOR",
        "color": "#F77F00",
        "desc": "Outer Surface Ragulator–Rag GTPase–mTORC1 Amino Acid Sensor. Structural source: 7K2V / 6BCX mTORC1 Complex. Color taxonomy: mTORC1 Sensor Amber (#F77F00).",
        "dissocVector": [
          4.5,
          4.0,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Rotary V₁Vo-ATPase Proton Pump",
        "desc": "Inspect the 30-subunit V-ATPase: unlike mitochondrial ATP synthase, it burns cytosolic ATP in it...",
        "spoken": "Stage 1 — The Rotary V₁Vo-ATPase Proton Pump. Inspect the 30-subunit V-ATPase: unlike mitochondrial ATP synthase, it burns cytosolic ATP in its A₃B₃ head to spin the Vo c-ring and force H⁺ ions into the lysosome.",
        "color": "#FFB703",
        "targetPiece": "Piece_Lys_VATPase_V1"
      },
      {
        "step": 2,
        "title": "2 : pH 4.5 Activation & The LAMP1/2 Sugar Shield",
        "desc": "As luminal pH drops to 4.5, pro-Cathepsins cleave off their inhibitory pro-peptides while the de...",
        "spoken": "Stage 2 — pH 4.5 Activation & The LAMP1/2 Sugar Shield. As luminal pH drops to 4.5, pro-Cathepsins cleave off their inhibitory pro-peptides while the dense LAMP1/2 glycocalyx prevents the hydrolases from digesting the lysosomal membrane itself.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Lys_VATPase_Vo"
      },
      {
        "step": 3,
        "title": "3 : LC3-II Double-Membrane Autophagosome Docking",
        "desc": "During starvation, ATG7/ATG3 conjugate LC3 to phosphatidylethanolamine (LC3-II) on a double-memb...",
        "spoken": "Stage 3 — LC3-II Double-Membrane Autophagosome Docking. During starvation, ATG7/ATG3 conjugate LC3 to phosphatidylethanolamine (LC3-II) on a double-membrane phagophore that engulfs damaged cargo and docks onto the lysosome via STX17 SNAREs.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Lys_LAMP_Membrane"
      },
      {
        "step": 4,
        "title": "4 : Cargo Breakdown & NPC1/SLC38A9 Export",
        "desc": "Acid hydrolases dismantle proteins, lipids, and nucleic acids into free amino acids, sugars, and...",
        "spoken": "Stage 4 — Cargo Breakdown & NPC1/SLC38A9 Export. Acid hydrolases dismantle proteins, lipids, and nucleic acids into free amino acids, sugars, and cholesterol, which exit into the cytosol through SLC38A9 and NPC1 transporters.",
        "color": "#E63946",
        "targetPiece": "Piece_Lys_CathepsinHydrolases"
      },
      {
        "step": 5,
        "title": "5 : The mTORC1 Nutrient Switch",
        "desc": "Exported amino acids signal through SLC38A9 and Ragulator–Rag GTPases to recruit mTORC1 to the o...",
        "spoken": "Stage 5 — The mTORC1 Nutrient Switch. Exported amino acids signal through SLC38A9 and Ragulator–Rag GTPases to recruit mTORC1 to the outer lysosomal surface, switching the cell from catabolic autophagy back to anabolic growth.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Lys_AutophagosomeLC3"
      }
    ]
  },
  {
    "num": "17",
    "id": "peroxisome_catalase_beta_ox",
    "folder": "17_peroxisome_catalase_beta_ox",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "PEROXISOME, PEX5/PEX14 IMPORTOMER, FATTY ACID Β-OXIDATION & TETRAMERIC HEME CATALASE",
    "subtitle": "Peroxisomes are single-membrane oxidative organelles that specialize in metabolic reactions too toxic for the cytoplasm: (1) β-Oxidation of Very-Long-Chain Fatty Acids (V...",
    "analogy": "Shows a cutaway Peroxisome with its crystalline Tetrameric Heme Catalase core (1DGF), the dimeric ABCD1 VLCFA-CoA transporter (7N5K) in the membrane, the PEX5/PEX14 import pore + PEX1/PEX6 AAA+ recycling ring, and ACOX1 generating H₂O₂ that is immediately split into O₂ bubbles by Catalase.",
    "scaleTag": "EUKARYOTE SCENARIO 17 • 150–400 NM SINGLE-MEMBRANE OXIDATIVE ORGANELLE • PDB: 1DGF / 7N5K",
    "glb": "/eukaryote/models/peroxisome_catalase_beta_ox.glb",
    "pdb": "1DGF, 7N5K",
    "pronounce": "[peroxisome-catalase-beta-ox]",
    "sliderLabel": "VLCFA IMPORT & Β-OXIDATION FLUX:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ X-ALD ABCD1 Mutation T",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (ABCD",
      "🛑 Energy Depleted"
    ],
    "upstream": "Smooth ER / Lipid Droplet very-long-chain fatty acids (Scenario 14) + Cytoplasmic 80S Ribosome translation of PTS1-tagged enz",
    "coupling": "Inputs: Very-Long-Chain Fatty Acyl-CoA (C24:0 / C26:0-CoA) + ATP ( ➔ Outputs: Shortened Medium/Octanoyl-CoA & Acetyl-CoA (exported to Mi",
    "downstream": "Shortened acyl-CoA and acetyl-CoA shuttle into Mitochondria (Scenario 19) for the TCA cycle; ether-lipid plasmalogen precurso",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Tetrameric Heme Catalase: ~40,000,000 H₂O₂ m"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (ABCD1 fatty-acid import & PE"
      ],
      [
        "BIOPHYSICAL SCALE",
        "150–400 nm Single-Membrane Oxidative Organel"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1DGF & 7N5K"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Catalase",
        "url": "https://pdb101.rcsb.org/motm/57"
      },
      {
        "title": "RCSB PDB Structure 1DGF — Human Erythrocyte Catalase",
        "url": "https://www.rcsb.org/structure/1DGF"
      },
      {
        "title": "RCSB PDB Structure 7N5K — Human Peroxisomal ABCD1 Transporter",
        "url": "https://www.rcsb.org/structure/7N5K"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Peroxisomes",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26858/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Per_CatalaseTetramer",
        "name": "Tetrameric Heme Catalase Crystal…",
        "badge": "CATALA",
        "color": "#E63946",
        "desc": "Tetrameric Heme Catalase Crystalline Core (4 × Fe-Protoporphyrin IX + NADPH). Structural source: 1DGF Human Catalase. Color taxonomy: Heme Catalase Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Per_ABCD1_Transporter",
        "name": "Peroxisomal ABCD1",
        "badge": "TRANSP",
        "color": "#00B4D8",
        "desc": "Peroxisomal ABCD1 (ALDP) Dimeric ABC Transporter + VLCFA-CoA. Structural source: 7N5K ABCD1 Transporter. Color taxonomy: ABC Transporter Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Per_ACOX1_BetaOx",
        "name": "Acyl-CoA Oxidase",
        "badge": "BETAOX",
        "color": "#FFB703",
        "desc": "Acyl-CoA Oxidase (ACOX1) & Bifunctional β-Oxidation Complex. Structural source: 2DDH ACOX1 Homodimer. Color taxonomy: FAD Oxidase Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -3.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Per_PEX5_PEX14_Pore",
        "name": "PEX5 PTS1",
        "badge": "PORE",
        "color": "#9D4EDD",
        "desc": "PEX5 PTS1 (-SKL) Receptor & PEX13/PEX14 Folded-Protein Import Pore. Structural source: 2C0L PEX5–Cargo Complex. Color taxonomy: PEX Importomer Violet (#9D4EDD).",
        "dissocVector": [
          3.5,
          1.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Per_PEX1_PEX6_Ring",
        "name": "Hexameric AAA+ PEX1/PEX6 Recepto…",
        "badge": "RING",
        "color": "#F77F00",
        "desc": "Hexameric AAA+ PEX1/PEX6 Receptor-Extraction Ring. Structural source: 5VXV PEX1/PEX6 AAA+ Ring. Color taxonomy: AAA+ Extractor Amber (#F77F00).",
        "dissocVector": [
          5.5,
          3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Per_MembraneBilayer",
        "name": "Peroxisomal Single Phospholipid…",
        "badge": "MEMBRA",
        "color": "#06D6A0",
        "desc": "Peroxisomal Single Phospholipid Bilayer. Structural source: Peroxisomal Membrane. Color taxonomy: Peroxisome Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.5,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Importing Fully Folded Enzymes via PEX5 (-SKL)",
        "desc": "Watch cytosolic PEX5 bind the C-terminal -Ser-Lys-Leu (PTS1) tripeptide of a fully folded enzyme...",
        "spoken": "Stage 1 — Importing Fully Folded Enzymes via PEX5 (-SKL). Watch cytosolic PEX5 bind the C-terminal -Ser-Lys-Leu (PTS1) tripeptide of a fully folded enzyme and plunge into the PEX14 membrane pore without unfolding the cargo.",
        "color": "#E63946",
        "targetPiece": "Piece_Per_CatalaseTetramer"
      },
      {
        "step": 2,
        "title": "2 : AAA+ PEX1/PEX6 Receptor Recycling",
        "desc": "After cargo release in the matrix, PEX2/10/12 monoubiquitinates PEX5 so the double-ring hexameri...",
        "spoken": "Stage 2 — AAA+ PEX1/PEX6 Receptor Recycling. After cargo release in the matrix, PEX2/10/12 monoubiquitinates PEX5 so the double-ring hexameric PEX1/PEX6 AAA+ motor can pull PEX5 back out to the cytosol.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Per_ABCD1_Transporter"
      },
      {
        "step": 3,
        "title": "3 : ABCD1 Import of Very-Long-Chain Fatty Acids",
        "desc": "Follow a C26:0-CoA fatty acid pumped across the peroxisomal membrane by ATP-driven dimerization ...",
        "spoken": "Stage 3 — ABCD1 Import of Very-Long-Chain Fatty Acids. Follow a C26:0-CoA fatty acid pumped across the peroxisomal membrane by ATP-driven dimerization of ABCD1.",
        "color": "#FFB703",
        "targetPiece": "Piece_Per_ACOX1_BetaOx"
      },
      {
        "step": 4,
        "title": "4 : ACOX1 β-Oxidation & H₂O₂ Generation",
        "desc": "Acyl-CoA Oxidase shortens the fatty acid by 2 carbons per cycle, passing electrons via FAD direc...",
        "spoken": "Stage 4 — ACOX1 β-Oxidation & H₂O₂ Generation. Acyl-CoA Oxidase shortens the fatty acid by 2 carbons per cycle, passing electrons via FAD directly to O₂ and producing toxic H₂O₂.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Per_PEX5_PEX14_Pore"
      },
      {
        "step": 5,
        "title": "5 : Diffusion-Limited Heme Catalase Detoxification",
        "desc": "Zoom into the Fe(III)-heme pocket of Catalase: the first H₂O₂ oxidizes the heme to Compound I (F...",
        "spoken": "Stage 5 — Diffusion-Limited Heme Catalase Detoxification. Zoom into the Fe(III)-heme pocket of Catalase: the first H₂O₂ oxidizes the heme to Compound I (Fe⁴⁺=O porphyrin radical), and a second H₂O₂ reduces it back, releasing H₂O and O₂ at 4 × 10⁷ s⁻¹.",
        "color": "#F77F00",
        "targetPiece": "Piece_Per_PEX1_PEX6_Ring"
      }
    ]
  },
  {
    "num": "18",
    "id": "plant_vacuole_tonoplast",
    "folder": "18_plant_vacuole_tonoplast",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "PLANT CENTRAL VACUOLE, TONOPLAST AQUAPORIN TETRAMERS & OSMOTIC TURGOR ENGINE",
    "subtitle": "Mature plant and fungal cells grow up to 100× larger in volume than animal cells without synthesizing 100× more cytoplasm by inflating a giant Central Vacuole bounded by ...",
    "analogy": "Shows the Tonoplast membrane separating the cytosol from the anthocyanin-tinted vacuolar lumen: includes the tetrameric TIP Aquaporin water channel (streaming single-file H₂O molecules past the NPA filter), the dimeric V-PPase proton pump (4A01), V-ATPase, and NHX1 K⁺/Na⁺-H⁺ antiporters.",
    "scaleTag": "EUKARYOTE SCENARIO 18 • 20 NM TONOPLAST MEMBRANE TO 30 ΜM CENTRAL VACUOLE • PDB: 5I32 / 4A01",
    "glb": "/eukaryote/models/plant_vacuole_tonoplast.glb",
    "pdb": "5I32, 4A01",
    "pronounce": "[plant-vacuole-tonoplast]",
    "sliderLabel": "EXTRACELLULAR WATER SUPPLY / TURGOR PRESSURE (MPA):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Vacuolar Lumen pH (Ant",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Inorganic Pyrophosph",
      "🛑 Energy Depleted"
    ],
    "upstream": "Chloroplast photosynthetic sucrose/malate & stromal PPᵢ byproducts (Scenarios 23–25) + Root apoplastic/symplastic water and m",
    "coupling": "Inputs: Cytosolic Inorganic Pyrophosphate (PPᵢ) & ATP (driving V-P ➔ Outputs: Hydrostatic Turgor Pressure (Ψp = 0.5–1.0 MPa) driving pla",
    "downstream": "Presses the plant plasma membrane directly against the Cellulose Cell Wall (Scenario 02) and regulates symplastic pressure ac",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single Aquaporin monomer conducts ~10⁹ H₂O m"
      ],
      [
        "ENERGY CURRENCY",
        "Inorganic Pyrophosphate Hydrolysis (PPᵢ + H₂"
      ],
      [
        "BIOPHYSICAL SCALE",
        "20 nm Tonoplast Membrane to 30 µm Central Va"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5I32 & 4A01"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Aquaporin",
        "url": "https://pdb101.rcsb.org/motm/173"
      },
      {
        "title": "RCSB PDB Structure 5I32 — Plant Tonoplast Aquaporin AtTIP2;1",
        "url": "https://www.rcsb.org/structure/5I32"
      },
      {
        "title": "RCSB PDB Structure 4A01 — H⁺-Translocating Pyrophosphatase",
        "url": "https://www.rcsb.org/structure/4A01"
      },
      {
        "title": "Plant Physiology — Vacuolar Transporters & Turgor Regulation",
        "url": "https://academic.oup.com/plphys/article/179/4/1200/6116634"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Vac_AquaporinTetramer",
        "name": "Tetrameric Tonoplast Aquaporin",
        "badge": "AQUAPO",
        "color": "#00B4D8",
        "desc": "Tetrameric Tonoplast Aquaporin (TIP2;1 / SoPIP2;1) with NPA Water Filter. Structural source: 5I32 / 1Z98 Plant Aquaporin. Color taxonomy: Water Channel Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Vac_VPPaseDimer",
        "name": "Dimeric H⁺-Translocating Pyropho…",
        "badge": "VPPASE",
        "color": "#FFB703",
        "desc": "Dimeric H⁺-Translocating Pyrophosphatase (AVP1 / V-PPase, 16-TM). Structural source: 4A01 V-PPase Dimer. Color taxonomy: Pyrophosphatase Gold (#FFB703).",
        "dissocVector": [
          1.0,
          0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Vac_NHX_Antiporter",
        "name": "Vacuolar NHX1 K⁺/Na⁺–H⁺ Antiport…",
        "badge": "ANTIPO",
        "color": "#9D4EDD",
        "desc": "Vacuolar NHX1 K⁺/Na⁺–H⁺ Antiporter & Anthocyanin ABC Transporter. Structural source: 8I3T NHX Exchanger. Color taxonomy: Antiporter Violet (#9D4EDD).",
        "dissocVector": [
          5.5,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Vac_WaterProtonStreams",
        "name": "Single-File H₂O Dipole Stream",
        "badge": "WATERP",
        "color": "#E63946",
        "desc": "Single-File H₂O Dipole Stream (NPA Flip) & Luminal H⁺/Anthocyanin Sap. Structural source: H₂O Stream + Anthocyanins. Color taxonomy: Vacuolar Sap Crimson (#E63946).",
        "dissocVector": [
          -4.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Vac_TonoplastMembrane",
        "name": "Tonoplast Vacuolar Phospholipid…",
        "badge": "TONOPL",
        "color": "#06D6A0",
        "desc": "Tonoplast Vacuolar Phospholipid & Sterol Bilayer. Structural source: Tonoplast Bilayer. Color taxonomy: Tonoplast Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Charging the Tonoplast Battery with V-PPase & V-ATPase",
        "desc": "Watch the dimeric V-PPase burn metabolic byproduct pyrophosphate (PPᵢ → 2 Pᵢ) to pump H⁺ into th...",
        "spoken": "Stage 1 — Charging the Tonoplast Battery with V-PPase & V-ATPase. Watch the dimeric V-PPase burn metabolic byproduct pyrophosphate (PPᵢ → 2 Pᵢ) to pump H⁺ into the vacuolar lumen alongside V-ATPase.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Vac_AquaporinTetramer"
      },
      {
        "step": 2,
        "title": "2 : Solute Accumulation via H⁺-Coupled Antiporters",
        "desc": "Outward H⁺ flow through NHX1 and CAX antiporters drives K⁺, Na⁺, Ca²⁺, and malate into the vacuo...",
        "spoken": "Stage 2 — Solute Accumulation via H⁺-Coupled Antiporters. Outward H⁺ flow through NHX1 and CAX antiporters drives K⁺, Na⁺, Ca²⁺, and malate into the vacuole, steeply lowering its osmotic potential (Ψs).",
        "color": "#FFB703",
        "targetPiece": "Piece_Vac_VPPaseDimer"
      },
      {
        "step": 3,
        "title": "3 : Single-File Water Rush Through Tetrameric Aquaporins",
        "desc": "Zoom into one of the four pores of a TIP Aquaporin tetramer as 10⁹ water molecules/sec stream in...",
        "spoken": "Stage 3 — Single-File Water Rush Through Tetrameric Aquaporins. Zoom into one of the four pores of a TIP Aquaporin tetramer as 10⁹ water molecules/sec stream into the vacuole.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Vac_NHX_Antiporter"
      },
      {
        "step": 4,
        "title": "4 : The Atomic NPA Dipole-Flip Proton Barrier",
        "desc": "At the center of the Aquaporin hourglass, two Asn-Pro-Ala (NPA) asparagines grab the oxygen of e...",
        "spoken": "Stage 4 — The Atomic NPA Dipole-Flip Proton Barrier. At the center of the Aquaporin hourglass, two Asn-Pro-Ala (NPA) asparagines grab the oxygen of each passing H₂O, flipping its dipole orientation to break the Grotthuss proton wire so H₃O⁺ cannot leak out.",
        "color": "#E63946",
        "targetPiece": "Piece_Vac_WaterProtonStreams"
      },
      {
        "step": 5,
        "title": "5 : Hydrostatic Turgor & Drought Loop-D Gating",
        "desc": "Observe the inflated vacuole pressing the cytoplasm against the cell wall to hold the plant upri...",
        "spoken": "Stage 5 — Hydrostatic Turgor & Drought Loop-D Gating. Observe the inflated vacuole pressing the cytoplasm against the cell wall to hold the plant upright—and watch cytosolic Loop D snap the aquaporin shut during drought or root flooding.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Vac_TonoplastMembrane"
      }
    ]
  },
  {
    "num": "19",
    "id": "mitochondrion_cristae_mtdna",
    "folder": "19_mitochondrion_cristae_mtdna",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "WHOLE MITOCHONDRION CUTAWAY: DOUBLE MEMBRANE, MICOS CRISTAE, MATRIX TCA & CIRCULAR MTDNA RING",
    "subtitle": "Descended from an ancient α-proteobacterial endosymbiont >1.5 billion years ago, the Mitochondrion is a double-membraned bioenergetic powerhouse with its own independent ...",
    "analogy": "A 3/4 surgical cutaway of a whole Mitochondrion exposing the VDAC-studded Outer Membrane, the MICOS-neck folded Inner Membrane Cristae lined along their rims by V-shaped ATP Synthase dimers, the Matrix TCA enzymes, 55S Mitoribosomes, and a glowing 16.6 kb Circular mtDNA Ring with its triple-stranded D-loop replication origin wrapped by TFAM.",
    "scaleTag": "EUKARYOTE SCENARIO 19 • 1.5 ΜM × 0.6 ΜM DOUBLE-MEMBRANE ENDOSYMBIOTIC ORGANELLE • PDB: 3EMN / 3TMM",
    "glb": "/eukaryote/models/mitochondrion_cristae_mtdna.glb",
    "pdb": "3EMN, 3TMM",
    "pronounce": "[mitochondrion-cristae-mtdna]",
    "sliderLabel": "MEMBRANE CUTAWAY & CRISTAE REMODELING:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Circular mtDNA Ring In",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Inner Membrane Proto",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytosolic Glycolysis (Pyruvate + NADH shuttle) + Peroxisomal/Cytosolic Fatty Acyl-Carnitine (Scenario 17) + O₂.",
    "coupling": "Inputs: Pyruvate (imported via VDAC + Mitochondrial Pyruvate Carri ➔ Outputs: Matrix NADH + FADH₂ (from PDH & TCA cycle feeding the Resp",
    "downstream": "Matrix NADH/FADH₂ directly feed the Cristae Respirasome ETC (Scenario 20) → V-Shaped ATP Synthase Dimer (Scenario 21) → ATP p",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single mitochondrion synthesizes ~10⁶ ATP/se"
      ],
      [
        "ENERGY CURRENCY",
        "Inner Membrane Proton-Motive Force (Δp ≈ 200"
      ],
      [
        "BIOPHYSICAL SCALE",
        "1.5 µm × 0.6 µm Double-Membrane Endosymbioti"
      ],
      [
        "PRIMARY RCSB PDBS",
        "3EMN & 3TMM"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Voltage-Dependent Anion Channel (VDAC)",
        "url": "https://pdb101.rcsb.org/motm/250"
      },
      {
        "title": "RCSB PDB Structure 3EMN — Mitochondrial VDAC-1 Porin",
        "url": "https://www.rcsb.org/structure/3EMN"
      },
      {
        "title": "RCSB PDB Structure 3TMM — Human TFAM Bound to Mitochondrial DNA",
        "url": "https://www.rcsb.org/structure/3TMM"
      },
      {
        "title": "RCSB PDB Structure 3J9M — Complete Human 55S Mitochondrial Ribosome",
        "url": "https://www.rcsb.org/structure/3J9M"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Mito_OuterMembraneVDAC",
        "name": "Outer Mitochondrial Membrane",
        "badge": "OUTERM",
        "color": "#0077B6",
        "desc": "Outer Mitochondrial Membrane (OMM) & VDAC1 19-Stranded β-Barrel Porins. Structural source: 3EMN VDAC1 Porin. Color taxonomy: Outer Membrane Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.5,
          -2.5
        ]
      },
      {
        "meshName": "Piece_Mito_InnerCristaeMICOS",
        "name": "Cardiolipin-Rich Inner Membrane…",
        "badge": "INNERC",
        "color": "#06D6A0",
        "desc": "Cardiolipin-Rich Inner Membrane Cristae Folds & MICOS/OPA1 Junctions. Structural source: Cristae Lamellae + MICOS Neck. Color taxonomy: Inner Cristae Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          1.0,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Mito_CircularMtDNARing",
        "name": "16,569 bp Closed Circular Double…",
        "badge": "CIRCUL",
        "color": "#FFB703",
        "desc": "16,569 bp Closed Circular Double-Stranded mtDNA Ring & TFAM Nucleoid. Structural source: 3TMM TFAM–mtDNA + D-Loop Ring. Color taxonomy: Circular mtDNA Gold (#FFB703).",
        "dissocVector": [
          -3.0,
          -1.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Mito_Mitoribosome55S",
        "name": "Mammalian 55S Mitoribosome",
        "badge": "MITORI",
        "color": "#7209B7",
        "desc": "Mammalian 55S Mitoribosome (28S + 39S) Tethered to OXA1L Insertase. Structural source: 3J9M / 6ZSG 55S Mitoribosome. Color taxonomy: Mitoribosome Purple (#7209B7).",
        "dissocVector": [
          3.5,
          -1.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Mito_TCA_MatrixHub",
        "name": "Matrix Pyruvate Dehydrogenase &…",
        "badge": "MATRIX",
        "color": "#F77F00",
        "desc": "Matrix Pyruvate Dehydrogenase & TCA Cycle Metabolon (Citrate Synthase/IDH). Structural source: 6CT0 Citrate Synthase. Color taxonomy: Matrix TCA Amber (#F77F00).",
        "dissocVector": [
          0.0,
          -3.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Mito_CristaeRimComplexes",
        "name": "In-Situ Cristae Respirasomes & R…",
        "badge": "CRISTA",
        "color": "#E63946",
        "desc": "In-Situ Cristae Respirasomes & Rim V-Shaped ATP Synthase Dimers. Structural source: 5XTE Respirasome + 6ZQN Dimer. Color taxonomy: OXPHOS Rim Crimson (#E63946).",
        "dissocVector": [
          0.0,
          2.0,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Endosymbiotic Double Envelope & VDAC Porins",
        "desc": "Orbit the Outer Mitochondrial Membrane where 19-stranded VDAC1 β-barrels (homologous to bacteria...",
        "spoken": "Stage 1 — The Endosymbiotic Double Envelope & VDAC Porins. Orbit the Outer Mitochondrial Membrane where 19-stranded VDAC1 β-barrels (homologous to bacterial outer-membrane porins) let pyruvate and ADP into the Intermembrane Space.",
        "color": "#0077B6",
        "targetPiece": "Piece_Mito_OuterMembraneVDAC"
      },
      {
        "step": 2,
        "title": "2 : Cardiolipin Cristae Folds & MICOS Necks",
        "desc": "Peel back the outer membrane to reveal the deeply folded Inner Membrane Cristae: MICOS and OPA1 ...",
        "spoken": "Stage 2 — Cardiolipin Cristae Folds & MICOS Necks. Peel back the outer membrane to reveal the deeply folded Inner Membrane Cristae: MICOS and OPA1 pinch the 28 nm cristae junctions so pumped protons stay concentrated inside the cristae lumen.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Mito_InnerCristaeMICOS"
      },
      {
        "step": 3,
        "title": "3 : The Matrix TCA Cycle Metabolon",
        "desc": "Follow Pyruvate entering the matrix via MPC1/2, oxidized by PDH to Acetyl-CoA, and spun through ...",
        "spoken": "Stage 3 — The Matrix TCA Cycle Metabolon. Follow Pyruvate entering the matrix via MPC1/2, oxidized by PDH to Acetyl-CoA, and spun through the TCA cycle ring to load NAD⁺ and FAD with high-energy electrons.",
        "color": "#FFB703",
        "targetPiece": "Piece_Mito_CircularMtDNARing"
      },
      {
        "step": 4,
        "title": "4 : The 16,569 bp Circular mtDNA Ring & TFAM",
        "desc": "Zoom into the mitochondrial nucleoid: inspect the closed circular double-stranded mtDNA ring (wi...",
        "spoken": "Stage 4 — The 16,569 bp Circular mtDNA Ring & TFAM. Zoom into the mitochondrial nucleoid: inspect the closed circular double-stranded mtDNA ring (with its triple-stranded displacement D-loop) bent 180° by twin HMG-box TFAM proteins.",
        "color": "#7209B7",
        "targetPiece": "Piece_Mito_Mitoribosome55S"
      },
      {
        "step": 5,
        "title": "5 : Co-Translational Insertion by 55S Mitoribosomes",
        "desc": "Watch a specialized protein-rich 55S Mitoribosome translate mtDNA mRNAs and insert the 13 hydrop...",
        "spoken": "Stage 5 — Co-Translational Insertion by 55S Mitoribosomes. Watch a specialized protein-rich 55S Mitoribosome translate mtDNA mRNAs and insert the 13 hydrophobic core OXPHOS subunits directly into the inner membrane via OXA1L.",
        "color": "#F77F00",
        "targetPiece": "Piece_Mito_TCA_MatrixHub"
      }
    ]
  },
  {
    "num": "20",
    "id": "mitochondrial_respirasome_etc",
    "folder": "20_mitochondrial_respirasome_etc",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "MITOCHONDRIAL RESPIRATORY SUPERCOMPLEX (I₁III₂IV₁ RESPIRASOME) & CYTOCHROME C SHUTTLE",
    "subtitle": "In the mitochondrial cristae membrane, the electron transport chain assembles into a breathtaking 1.7 MDa supramolecular Respirasome (I₁III₂IV₁, PDB 5XTE) accompanied by ...",
    "analogy": "Renders the complete 1.7 MDa Human Respirasome (5XTE: L-shaped 45-subunit Complex I cradled against dimeric Complex III₂ and Complex IV) plus adjacent Complex II (1ZOY) in the cardiolipin-rich cristae bilayer, with glowing Coenzyme Q₁₀ diffusing in the membrane and soluble Cytochrome c shuttling across the cristae lumen.",
    "scaleTag": "EUKARYOTE SCENARIO 20 • 28 NM × 20 NM (1.7 MDA INNER-MEMBRANE SUPERCOMPLEX) • PDB: 5XTE / 1ZOY",
    "glb": "/eukaryote/models/mitochondrial_respirasome_etc.glb",
    "pdb": "5XTE, 1ZOY",
    "pronounce": "[mitochondrial-respirasome-etc]",
    "sliderLabel": "NADH / SUCCINATE ELECTRON FLUX & PROTON PUMPING SPEED:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Brown Fat UCP1 / DNP P",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Redox Drop ΔE°' = +1",
      "🛑 Energy Depleted"
    ],
    "upstream": "Mitochondrial Matrix TCA cycle & β-oxidation NADH + Succinate (Scenario 19) + Pulmonary/Vascular O₂ diffusion.",
    "coupling": "Inputs: Matrix NADH + H⁺ (into Complex I FMN) & Succinate (into Co ➔ Outputs: 10 Cristae-Lumen H⁺ protons pumped per NADH (generating Δp",
    "downstream": "The 10 pumped H⁺ protons flow directly along the cristae rim into the V-Shaped Mitochondrial ATP Synthase Dimer (Scenario 21)",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~200–400 electrons/sec per Respirasome (~50–"
      ],
      [
        "ENERGY CURRENCY",
        "Redox Drop ΔE°' = +1.14 V (NADH E°' = -0.32 "
      ],
      [
        "BIOPHYSICAL SCALE",
        "28 nm × 20 nm (1.7 MDa Inner-Membrane Superc"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5XTE & 1ZOY"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Respiratory Supercomplex",
        "url": "https://pdb101.rcsb.org/motm/299"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cytochrome c Oxidase",
        "url": "https://pdb101.rcsb.org/motm/5"
      },
      {
        "title": "RCSB PDB Structure 5XTE — Human Mitochondrial Respiratory Megacomplex I₁III₂IV₁",
        "url": "https://www.rcsb.org/structure/5XTE"
      },
      {
        "title": "RCSB PDB Structure 1ZOY — Mitochondrial Respiratory Complex II",
        "url": "https://www.rcsb.org/structure/1ZOY"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_ETC_ComplexI_45Sub",
        "name": "Mammalian Complex I",
        "badge": "45SUB",
        "color": "#3A86FF",
        "desc": "Mammalian Complex I (45 Subunits: FMN, 8 Fe-S Wire & 4 Proton Pumps). Structural source: 5XTE Complex I. Color taxonomy: Complex I Cobalt Blue (#3A86FF).",
        "dissocVector": [
          -5.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_ETC_ComplexII_SDH",
        "name": "Complex II Succinate Dehydrogenase",
        "badge": "SDH",
        "color": "#06D6A0",
        "desc": "Complex II Succinate Dehydrogenase (FAD, 3 Fe-S & Heme b). Structural source: 1ZOY Complex II. Color taxonomy: Complex II Jade (#06D6A0).",
        "dissocVector": [
          -8.0,
          -1.5,
          3.0
        ]
      },
      {
        "meshName": "Piece_ETC_ComplexIII2_Dimer",
        "name": "Dimeric Complex III₂",
        "badge": "DIMER",
        "color": "#F77F00",
        "desc": "Dimeric Complex III₂ (Cytochrome bc₁, Rieske Fe-S Swinging Head & Q-Cycle). Structural source: 5XTE Complex III2 Dimer. Color taxonomy: Complex III2 Amber (#F77F00).",
        "dissocVector": [
          0.5,
          0.5,
          -1.0
        ]
      },
      {
        "meshName": "Piece_ETC_CytochromeC_Shuttle",
        "name": "Soluble Cristae-Lumen Cytochrome…",
        "badge": "SHUTTLE",
        "color": "#FFB703",
        "desc": "Soluble Cristae-Lumen Cytochrome c Heme c Shuttle & Coenzyme Q₁₀ Pool. Structural source: 5XTE / 1HRC Cytochrome c. Color taxonomy: Electron Carrier Gold (#FFB703).",
        "dissocVector": [
          2.5,
          4.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_ETC_ComplexIV_COX",
        "name": "Complex IV Cytochrome c Oxidase",
        "badge": "COX",
        "color": "#E63946",
        "desc": "Complex IV Cytochrome c Oxidase (Cu_A, Heme a & Heme a₃/Cu_B O₂ Reducer). Structural source: 5XTE / 5Z62 Complex IV. Color taxonomy: Complex IV Crimson (#E63946).",
        "dissocVector": [
          5.5,
          0.5,
          1.0
        ]
      },
      {
        "meshName": "Piece_ETC_CardiolipinCristae",
        "name": "Cardiolipin-Enriched Inner Mitoc…",
        "badge": "CARDIO",
        "color": "#9D4EDD",
        "desc": "Cardiolipin-Enriched Inner Mitochondrial Membrane Bilayer. Structural source: Cardiolipin / POPC Bilayer. Color taxonomy: Cardiolipin Membrane Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          0.0,
          -3.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Complex I: 45-Subunit NADH Oxidation & 4 H⁺ Pump",
        "desc": "Matrix NADH donates 2 e⁻ to FMN in the hydrophilic arm of Complex I; electrons hop down 8 [Fe-S]...",
        "spoken": "Stage 1 — Complex I: 45-Subunit NADH Oxidation & 4 H⁺ Pump. Matrix NADH donates 2 e⁻ to FMN in the hydrophilic arm of Complex I; electrons hop down 8 [Fe-S] clusters to reduce Ubiquinone (Q₁₀ → QH₂), triggering an electrostatic wave that pumps 4 H⁺ into the cristae lumen.",
        "color": "#3A86FF",
        "targetPiece": "Piece_ETC_ComplexI_45Sub"
      },
      {
        "step": 2,
        "title": "2 : Complex II: The TCA Succinate Side-Entry",
        "desc": "Watch Succinate Dehydrogenase oxidize Succinate → Fumarate at FAD, feeding additional QH₂ into t...",
        "spoken": "Stage 2 — Complex II: The TCA Succinate Side-Entry. Watch Succinate Dehydrogenase oxidize Succinate → Fumarate at FAD, feeding additional QH₂ into the inner membrane pool.",
        "color": "#06D6A0",
        "targetPiece": "Piece_ETC_ComplexII_SDH"
      },
      {
        "step": 3,
        "title": "3 : Dimeric Complex III₂ & The Bifurcated Q-Cycle",
        "desc": "At the Qo site of Complex III₂, one electron from QH₂ jumps onto the swinging Rieske [2Fe-2S] do...",
        "spoken": "Stage 3 — Dimeric Complex III₂ & The Bifurcated Q-Cycle. At the Qo site of Complex III₂, one electron from QH₂ jumps onto the swinging Rieske [2Fe-2S] domain to reduce soluble Cytochrome c, while the second electron recycles via hemes b_L and b_H to the Qi site, releasing 4 H⁺ into the lumen.",
        "color": "#F77F00",
        "targetPiece": "Piece_ETC_ComplexIII2_Dimer"
      },
      {
        "step": 4,
        "title": "4 : Cytochrome c Diffusion Across the Respirasome Cleft",
        "desc": "Because Complex III₂ and Complex IV are physically docked in the Respirasome, reduced Cytochrome...",
        "spoken": "Stage 4 — Cytochrome c Diffusion Across the Respirasome Cleft. Because Complex III₂ and Complex IV are physically docked in the Respirasome, reduced Cytochrome c only has to diffuse ~10 nm to dock onto Complex IV.",
        "color": "#FFB703",
        "targetPiece": "Piece_ETC_CytochromeC_Shuttle"
      },
      {
        "step": 5,
        "title": "5 : Complex IV: Binuclear Heme a₃/Cu_B Reduction of O₂ to Water",
        "desc": "Four electrons enter Complex IV via Cu_A and Heme a to the Heme a₃–Cu_B pocket, cleaving the O=O...",
        "spoken": "Stage 5 — Complex IV: Binuclear Heme a₃/Cu_B Reduction of O₂ to Water. Four electrons enter Complex IV via Cu_A and Heme a to the Heme a₃–Cu_B pocket, cleaving the O=O double bond into 2 H₂O while pumping 4 final H⁺ across the membrane.",
        "color": "#E63946",
        "targetPiece": "Piece_ETC_ComplexIV_COX"
      }
    ]
  },
  {
    "num": "21",
    "id": "mitochondrial_atp_synthase_dimer",
    "folder": "21_mitochondrial_atp_synthase_dimer",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "V-SHAPED MITOCHONDRIAL F₁FO-ATP SYNTHASE DIMER & ADP/ATP TRANSLOCASE (AAC)",
    "subtitle": "Whereas bacterial F₁Fo-ATP Synthase (Prokaryote Scenario 04) operates as an isolated monomer in a flat membrane, Mitochondrial F₁Fo-ATP Synthase assembles into V-shaped D...",
    "analogy": "Renders the complete V-shaped Mitochondrial ATP Synthase Dimer (6ZQN) straddling a sharply curved 86° cristae ridge, with both c₈-rings and central γδε stalks spinning simultaneously as protons rush from the cristae lumen into the matrix, flanked by the alternating-access ADP/ATP Carrier (1OKC) exporting ATP⁴⁻.",
    "scaleTag": "EUKARYOTE SCENARIO 21 • 28 NM × 22 NM CRISTAE-CURVING ROTARY DIMER & NUCLEOTIDE ANTIPORTER • PDB: 6ZQN / 1OKC",
    "glb": "/eukaryote/models/mitochondrial_atp_synthase_dimer.glb",
    "pdb": "6ZQN, 1OKC",
    "pronounce": "[mitochondrial-atp-synthase-dimer]",
    "sliderLabel": "CRISTAE PROTON-MOTIVE FORCE ΔP (MV):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ AAC Translocase Toxin ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Proton-Motive Force ",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cristae-lumen H⁺ gradient pumped by the Mitochondrial Respirasome (Scenario 20) + Cytosolic ADP³⁻ and Pᵢ from cellular ATPase",
    "coupling": "Inputs: 8 Cristae-Lumen H⁺ protons per 360° rotation of each c₈-ri ➔ Outputs: 3 Matrix ATP⁴⁻ + 3 H₂O synthesized per 360° rotation per m",
    "downstream": "Exported ATP⁴⁻ leaves the mitochondrion through outer-membrane VDAC (Scenario 19) to fuel every ATP-dependent process in the ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~100–150 rotations/sec per monomer (~300–450"
      ],
      [
        "ENERGY CURRENCY",
        "Proton-Motive Force (Δp ≈ 200 mV) → Mechanic"
      ],
      [
        "BIOPHYSICAL SCALE",
        "28 nm × 22 nm Cristae-Curving Rotary Dimer &"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6ZQN & 1OKC"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 6ZQN — Mammalian Mitochondrial ATP Synthase Dimer",
        "url": "https://www.rcsb.org/structure/6ZQN"
      },
      {
        "title": "RCSB PDB Structure 1OKC — Mitochondrial ADP/ATP Carrier",
        "url": "https://www.rcsb.org/structure/1OKC"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: ATP Synthase",
        "url": "https://pdb101.rcsb.org/motm/72"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: ADP/ATP Carrier",
        "url": "https://pdb101.rcsb.org/motm/260"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_mATP_F1Heads_LeftRight",
        "name": "Twin α₃β₃ Catalytic Hexamer Heads",
        "badge": "LEFTRI",
        "color": "#FFB703",
        "desc": "Twin α₃β₃ Catalytic Hexamer Heads (Boyer Open, Loose, Tight States). Structural source: 6ZQN Left & Right F1 Heads. Color taxonomy: Catalytic F1 Gold (#FFB703).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_mATP_GammaRotors_c8Rings",
        "name": "Twin Central γδε Camshafts & 8-S…",
        "badge": "C8RINGS",
        "color": "#E63946",
        "desc": "Twin Central γδε Camshafts & 8-Subunit Fo c₈-Ring Turbines. Structural source: 6ZQN c8-Rings & Gamma Shafts. Color taxonomy: Rotary Turbine Crimson (#E63946).",
        "dissocVector": [
          0.0,
          0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_mATP_OSCP_PeripheralStalks",
        "name": "Twin OSCP Crowns & b/d/F6 Periph…",
        "badge": "PERIPH",
        "color": "#00B4D8",
        "desc": "Twin OSCP Crowns & b/d/F6 Peripheral Stator Stalks. Structural source: 6ZQN Peripheral Stalks. Color taxonomy: Stator Stalk Cerulean (#00B4D8).",
        "dissocVector": [
          -5.5,
          2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_mATP_WedgeDimerInterface",
        "name": "86° Cristae-Bending Wedge Subunits",
        "badge": "WEDGED",
        "color": "#9D4EDD",
        "desc": "86° Cristae-Bending Wedge Subunits (e, f, g, a/ATP6 & 8/A6L). Structural source: 6ZQN Wedge Interface. Color taxonomy: Dimer Wedge Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          -2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_mATP_AAC_Antiporter",
        "name": "ADP/ATP Translocase",
        "badge": "ANTIPO",
        "color": "#F77F00",
        "desc": "ADP/ATP Translocase (AAC1 / ANT1) 6-TM Rocker-Switch Carrier. Structural source: 1OKC / 4C9G AAC Carrier. Color taxonomy: Nucleotide Carrier Amber (#F77F00).",
        "dissocVector": [
          6.5,
          -1.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_mATP_CurvedCristaeRidge",
        "name": "86°-Bent Cardiolipin Cristae Rim…",
        "badge": "CURVED",
        "color": "#06D6A0",
        "desc": "86°-Bent Cardiolipin Cristae Rim Bilayer. Structural source: Curved Cristae Membrane. Color taxonomy: Cristae Rim Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -2.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Why Mitochondrial ATP Synthase Forms 86° V-Dimers",
        "desc": "Inspect the base of the V-dimer where subunits e, f, and g act as a molecular wedge, bending the...",
        "spoken": "Stage 1 — Why Mitochondrial ATP Synthase Forms 86° V-Dimers. Inspect the base of the V-dimer where subunits e, f, and g act as a molecular wedge, bending the inner membrane by 86° to form proton-trapping cristae rims.",
        "color": "#FFB703",
        "targetPiece": "Piece_mATP_F1Heads_LeftRight"
      },
      {
        "step": 2,
        "title": "2 : The High-Gear Mammalian c₈-Ring Turbine",
        "desc": "Protons from the cristae lumen enter the a-subunit inlet half-channel, protonate Glu58 on the c₈...",
        "spoken": "Stage 2 — The High-Gear Mammalian c₈-Ring Turbine. Protons from the cristae lumen enter the a-subunit inlet half-channel, protonate Glu58 on the c₈-ring, ride 360° through the cardiolipin bilayer, and exit to the matrix—requiring only 8 H⁺ per full turn.",
        "color": "#E63946",
        "targetPiece": "Piece_mATP_GammaRotors_c8Rings"
      },
      {
        "step": 3,
        "title": "3 : Asymmetric γ-Shaft Cam & Boyer's Three-State Cycle",
        "desc": "As the c₈-ring spins the asymmetric γ-shaft inside the stationary α₃β₃ head (held by the OSCP pe...",
        "spoken": "Stage 3 — Asymmetric γ-Shaft Cam & Boyer's Three-State Cycle. As the c₈-ring spins the asymmetric γ-shaft inside the stationary α₃β₃ head (held by the OSCP peripheral stalk), the three β-subunits cycle through Open (ATP release), Loose (ADP+Pᵢ bind), and Tight (ATP condensation).",
        "color": "#00B4D8",
        "targetPiece": "Piece_mATP_OSCP_PeripheralStalks"
      },
      {
        "step": 4,
        "title": "4 : The Synthasome Partner: ADP/ATP Carrier (AAC)",
        "desc": "Zoom to the adjacent 6-TM AAC antiporter: driven by the -160 mV membrane potential, it exports o...",
        "spoken": "Stage 4 — The Synthasome Partner: ADP/ATP Carrier (AAC). Zoom to the adjacent 6-TM AAC antiporter: driven by the -160 mV membrane potential, it exports one newly made ATP⁴⁻ to the cytosol in exchange for one cytosolic ADP³⁻.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_mATP_WedgeDimerInterface"
      },
      {
        "step": 5,
        "title": "5 : Ischemic Protection by Inhibitory Factor IF₁",
        "desc": "When oxygen drops (ischemia) and ΔΨm collapses, pH-sensitive Inhibitory Factor 1 (IF₁) inserts i...",
        "spoken": "Stage 5 — Ischemic Protection by Inhibitory Factor IF₁. When oxygen drops (ischemia) and ΔΨm collapses, pH-sensitive Inhibitory Factor 1 (IF₁) inserts its α-helix between α and β subunits like a ratchet pawl so the enzyme cannot run backward and waste cellular ATP.",
        "color": "#F77F00",
        "targetPiece": "Piece_mATP_AAC_Antiporter"
      }
    ]
  },
  {
    "num": "22",
    "id": "mitochondrial_tim_tom_apoptosis",
    "folder": "22_mitochondrial_tim_tom_apoptosis",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "TOM/TIM23 PROTEIN IMPORT, DRP1 FISSION RING & BAX/BAK–APOPTOSOME WHEEL",
    "subtitle": "Mitochondria sit at the crossroads of cellular life and death through three dynamic membrane machines: (1) Protein Import via the TOM–TIM23 Supercomplex: Because 99% of m...",
    "analogy": "Dual-mode mitochondrial outer/inner membrane scene: in 'Healthy Biogenesis Mode', TOM40 (7CP9) and TIM23 thread a nuclear-encoded preprotein into the matrix while Drp1 constricts the organelle; toggling 'Intrinsic Apoptosis Mode' assembles the BAX/BAK outer-membrane pore ring, releases glowing Cytochrome c into the cytosol, and builds the 7-spoked Apaf-1 + Caspase-9 Apoptosome Wheel (3J2T).",
    "scaleTag": "EUKARYOTE SCENARIO 22 • 20–60 NM DUAL-MEMBRANE IMPORT, FISSION & APOPTOTIC HUB • PDB: 7CP9 / 3J2T",
    "glb": "/eukaryote/models/mitochondrial_tim_tom_apoptosis.glb",
    "pdb": "7CP9, 3J2T",
    "pronounce": "[mitochondrial-tim-tom-apoptosis]",
    "sliderLabel": "CELLULAR FATE SWITCH:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Inner Membrane Potenti",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Inner-Membrane Volta",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic 80S Ribosome translation of MTS-tagged precursors (Scenario 32) + Nuclear p53 stress signals (Scenario 26) + Cris",
    "coupling": "Inputs: Unfolded nuclear-encoded Mitochondrial Preproteins (with N ➔ Outputs: Mature folded Mitochondrial Matrix & Inner-Membrane Protei",
    "downstream": "Imported enzymes build the TCA cycle (Scenario 19), Respirasome (Scenario 20), and ATP Synthase (Scenario 21); in apoptosis, ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "TOM40/TIM23 imports ~5–15 residues/sec; Apaf"
      ],
      [
        "ENERGY CURRENCY",
        "Inner-Membrane Voltage ΔΨm (-160 mV electrop"
      ],
      [
        "BIOPHYSICAL SCALE",
        "20–60 nm Dual-Membrane Import, Fission & Apo"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7CP9 & 3J2T"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Apoptosome",
        "url": "https://pdb101.rcsb.org/motm/215"
      },
      {
        "title": "RCSB PDB Structure 7CP9 — Human Mitochondrial TOM Core Complex",
        "url": "https://www.rcsb.org/structure/7CP9"
      },
      {
        "title": "RCSB PDB Structure 3J2T — Human Apaf-1 Apoptosome Holoenzyme",
        "url": "https://www.rcsb.org/structure/3J2T"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Mitochondrial Protein Import Machinery",
        "url": "https://www.nature.com/articles/nrm.2016.127"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_MitoBio_TOM40Complex",
        "name": "Outer-Membrane TOM Core",
        "badge": "TOM40C",
        "color": "#00B4D8",
        "desc": "Outer-Membrane TOM Core (Twin 19-β-Strand TOM40 Barrels + TOM20/22 Receptors). Structural source: 7CP9 Human TOM Complex. Color taxonomy: TOM Barrel Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_TIM23_PAM",
        "name": "Inner-Membrane TIM23 Channel, PA…",
        "badge": "PAM",
        "color": "#06D6A0",
        "desc": "Inner-Membrane TIM23 Channel, PAM/mtHsp70 Motor & MPP Peptidase. Structural source: 8SCX TIM23 + 1HR6 MPP. Color taxonomy: TIM23 Channel Jade (#06D6A0).",
        "dissocVector": [
          -5.0,
          -2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_Drp1Ring",
        "name": "Dynamin-Related Protein 1",
        "badge": "DRP1RI",
        "color": "#9D4EDD",
        "desc": "Dynamin-Related Protein 1 (Drp1) Helical GTPase Fission Ring. Structural source: 4BEJ Drp1 Oligomer. Color taxonomy: Fission Ring Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          4.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_BAXPoreRing",
        "name": "Apoptotic BAX/BAK Outer-Membrane…",
        "badge": "BAXPOR",
        "color": "#F77F00",
        "desc": "Apoptotic BAX/BAK Outer-Membrane Macropore Ring & Escaping Cytochrome c. Structural source: 4BD2 BAX Pore Oligomer. Color taxonomy: BAX Pore Amber (#F77F00).",
        "dissocVector": [
          4.0,
          2.5,
          1.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_ApoptosomeWheel",
        "name": "Heptameric 7-Spoked Apaf-1 + Cyt…",
        "badge": "APOPTO",
        "color": "#E63946",
        "desc": "Heptameric 7-Spoked Apaf-1 + Cytochrome c + Caspase-9 Apoptosome Wheel. Structural source: 3J2T / 5JUY Apoptosome. Color taxonomy: Apoptosome Wheel Crimson (#E63946).",
        "dissocVector": [
          4.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_PreproteinMTS",
        "name": "Translocating Preprotein with Po…",
        "badge": "PREPRO",
        "color": "#FFB703",
        "desc": "Translocating Preprotein with Positively Charged Amphipathic MTS Helix. Structural source: MTS Preprotein Chain. Color taxonomy: Preprotein Gold (#FFB703).",
        "dissocVector": [
          -5.0,
          0.0,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : TOM20/22 Recognition & The Twin-Barrel TOM40 Pore",
        "desc": "Watch cytosolic Hsp70 deliver a nuclear-encoded mitochondrial preprotein to TOM20, which feeds t...",
        "spoken": "Stage 1 — TOM20/22 Recognition & The Twin-Barrel TOM40 Pore. Watch cytosolic Hsp70 deliver a nuclear-encoded mitochondrial preprotein to TOM20, which feeds the positively charged MTS helix into the 19-stranded TOM40 β-barrel.",
        "color": "#00B4D8",
        "targetPiece": "Piece_MitoBio_TOM40Complex"
      },
      {
        "step": 2,
        "title": "2 : Trans-Envelope Handover to TIM23 & mtHsp70 Pulling",
        "desc": "The -160 mV inner-membrane voltage electrophoretically pulls the positively charged MTS through ...",
        "spoken": "Stage 2 — Trans-Envelope Handover to TIM23 & mtHsp70 Pulling. The -160 mV inner-membrane voltage electrophoretically pulls the positively charged MTS through the TIM23 channel, where matrix mtHsp70 burns ATP to ratchet the chain in and MPP clips off the MTS.",
        "color": "#06D6A0",
        "targetPiece": "Piece_MitoBio_TIM23_PAM"
      },
      {
        "step": 3,
        "title": "3 : Drp1 GTPase Ring Mitochondrial Fission",
        "desc": "Observe cytosolic Drp1 monomers assemble into a helical ring around the outer membrane, hydrolyz...",
        "spoken": "Stage 3 — Drp1 GTPase Ring Mitochondrial Fission. Observe cytosolic Drp1 monomers assemble into a helical ring around the outer membrane, hydrolyzing GTP to constrict and divide the mitochondrion.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_MitoBio_Drp1Ring"
      },
      {
        "step": 4,
        "title": "4 : The Apoptotic Switch: BAX/BAK Macropore Formation",
        "desc": "Switch to severe cellular stress: tBid overcomes Bcl-2, triggering BAX and BAK dimers to insert ...",
        "spoken": "Stage 4 — The Apoptotic Switch: BAX/BAK Macropore Formation. Switch to severe cellular stress: tBid overcomes Bcl-2, triggering BAX and BAK dimers to insert into the Outer Membrane and assemble a giant pore ring that releases Cytochrome c from the cristae.",
        "color": "#F77F00",
        "targetPiece": "Piece_MitoBio_BAXPoreRing"
      },
      {
        "step": 5,
        "title": "5 : The 7-Spoked Apoptosome Wheel & Caspase Cascade",
        "desc": "In the cytosol, released Cytochrome c binds the WD40 propellers of Apaf-1, unlocking dATP bindin...",
        "spoken": "Stage 5 — The 7-Spoked Apoptosome Wheel & Caspase Cascade. In the cytosol, released Cytochrome c binds the WD40 propellers of Apaf-1, unlocking dATP binding so 7 Apaf-1 subunits snap into the 1.4 MDa Apoptosome Wheel that dimerizes and activates Caspase-9.",
        "color": "#E63946",
        "targetPiece": "Piece_MitoBio_ApoptosomeWheel"
      }
    ]
  },
  {
    "num": "23",
    "id": "chloroplast_thylakoid_cpdna",
    "folder": "23_chloroplast_thylakoid_cpdna",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "WHOLE PLANT CHLOROPLAST CUTAWAY: TOC/TIC ENVELOPE, STROMA, GRANA THYLAKOIDS & CIRCULAR CPDNA RING",
    "subtitle": "Derived from an ancient photosynthetic cyanobacterial endosymbiont, the Plant and Algal Chloroplast is a 5 µm solar-powered organelle featuring three distinct membranes a...",
    "analogy": "Surgical 3/4 cutaway of a complete Plant Chloroplast: exposes the smooth Outer and Inner Envelope membranes (with TOC–TIC import complexes), the stacked green Thylakoid Grana columns connected by helical Stromal Lamellae bridges, stromal starch grains, 70S Chlororibosomes, and a glowing 150 kb Circular cpDNA Ring.",
    "scaleTag": "EUKARYOTE SCENARIO 23 • 5 ΜM × 2.5 ΜM TRIPLE-MEMBRANE PHOTOSYNTHETIC PLASTID • PDB: 7VCF / 5MMJ",
    "glb": "/eukaryote/models/chloroplast_thylakoid_cpdna.glb",
    "pdb": "7VCF, 5MMJ",
    "pronounce": "[chloroplast-thylakoid-cpdna]",
    "sliderLabel": "ENVELOPE & GRANA CUTAWAY DEPTH:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ LHCII State Transition",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Solar Photon Excitat",
      "🛑 Energy Depleted"
    ],
    "upstream": "Solar photons (400–700 nm PAR) + Atmospheric CO₂ (via stomata) + Root H₂O (via xylem) + Nuclear-encoded transit-peptide prote",
    "coupling": "Inputs: Sunlight (400–700 nm photons) + 6 CO₂ + 6 H₂O ➔ Outputs: Molecular Oxygen (6 O₂ released to Earth's atmosphere)",
    "downstream": "Hosts the Thylakoid Light Reactions (Scenario 24) and Stromal Calvin Cycle RuBisCO (Scenario 25); exported sucrose/malate and",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single leaf cell contains ~50–100 chloroplas"
      ],
      [
        "ENERGY CURRENCY",
        "Solar Photon Excitation (hν) → Thylakoid ΔpH"
      ],
      [
        "BIOPHYSICAL SCALE",
        "5 µm × 2.5 µm Triple-Membrane Photosynthetic"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7VCF & 5MMJ"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 7VCF — Chloroplast TOC-TIC Translocon Supercomplex",
        "url": "https://www.rcsb.org/structure/7VCF"
      },
      {
        "title": "RCSB PDB Structure 5MMJ — Spinach 70S Chloroplast Ribosome",
        "url": "https://www.rcsb.org/structure/5MMJ"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Chloroplasts and Photosynthesis",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26819/"
      },
      {
        "title": "Cell — Cryo-ET Architecture of Native Plant Thylakoid Grana Membranes",
        "url": "https://www.cell.com/cell/fulltext/S0092-8674(19)31271-1"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Chl_OuterInnerEnvelope",
        "name": "Double Chloroplast Envelope & TO…",
        "badge": "OUTERI",
        "color": "#06D6A0",
        "desc": "Double Chloroplast Envelope & TOC75–TIC214 Import Supercomplex. Structural source: 7VCF TOC-TIC Supercomplex. Color taxonomy: Envelope Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.5,
          -2.5
        ]
      },
      {
        "meshName": "Piece_Chl_GranaThylakoidStacks",
        "name": "Stacked Thylakoid Grana Cylinder…",
        "badge": "GRANAT",
        "color": "#2EC4B6",
        "desc": "Stacked Thylakoid Grana Cylinders & Helical Stromal Lamellae. Structural source: Grana Thylakoid Architecture. Color taxonomy: Thylakoid Chlorophyll Teal (#2EC4B6).",
        "dissocVector": [
          0.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Chl_CircularCpDNARing",
        "name": "150 kb Closed Circular Double-St…",
        "badge": "CIRCUL",
        "color": "#FFB703",
        "desc": "150 kb Closed Circular Double-Stranded cpDNA Ring (LSC, SSC, IRA/IRB). Structural source: Circular Plastid Genome Ring. Color taxonomy: Circular cpDNA Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Chl_Chlororibosome70S",
        "name": "70S Chloroplast Ribosome",
        "badge": "CHLORO",
        "color": "#7209B7",
        "desc": "70S Chloroplast Ribosome (30S + 50S) Translating rbcL & D1. Structural source: 5MMJ 70S Chlororibosome. Color taxonomy: Chlororibosome Purple (#7209B7).",
        "dissocVector": [
          3.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Chl_StromalRuBisCOStarch",
        "name": "Stromal RuBisCO Halo, Plastoglob…",
        "badge": "STROMA",
        "color": "#F77F00",
        "desc": "Stromal RuBisCO Halo, Plastoglobules & Semicrystalline Starch Grain. Structural source: 1RBL RuBisCO + Starch. Color taxonomy: Stromal Carbon Amber (#F77F00).",
        "dissocVector": [
          0.0,
          -3.5,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Three-Membrane Endosymbiotic Architecture",
        "desc": "Explore the Outer Envelope, Inner Envelope, and internal Thylakoid system dividing the chloropla...",
        "spoken": "Stage 1 — The Three-Membrane Endosymbiotic Architecture. Explore the Outer Envelope, Inner Envelope, and internal Thylakoid system dividing the chloroplast into Intermembrane Space, Stroma, and Thylakoid Lumen.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Chl_OuterInnerEnvelope"
      },
      {
        "step": 2,
        "title": "2 : TOC–TIC Trans-Envelope Protein Import",
        "desc": "Zoom to the envelope where the TOC75 β-barrel and TIC channel import nuclear-encoded chloroplast...",
        "spoken": "Stage 2 — TOC–TIC Trans-Envelope Protein Import. Zoom to the envelope where the TOC75 β-barrel and TIC channel import nuclear-encoded chloroplast precursors carrying an N-terminal transit peptide.",
        "color": "#2EC4B6",
        "targetPiece": "Piece_Chl_GranaThylakoidStacks"
      },
      {
        "step": 3,
        "title": "3 : Grana Stacks vs. Stromal Lamellae Partitioning",
        "desc": "See why Photosystem II and LHCII pack tightly into flat appressed Grana disks while bulky Photos...",
        "spoken": "Stage 3 — Grana Stacks vs. Stromal Lamellae Partitioning. See why Photosystem II and LHCII pack tightly into flat appressed Grana disks while bulky Photosystem I and CF₁CFo-ATP Synthase sit on the unstacked grana margins and stromal lamellae.",
        "color": "#FFB703",
        "targetPiece": "Piece_Chl_CircularCpDNARing"
      },
      {
        "step": 4,
        "title": "4 : The 150 kb Circular cpDNA Ring & Inverted Repeats",
        "desc": "Inspect the closed circular chloroplast DNA (cpDNA) ring with its Large Single-Copy (LSC), Small...",
        "spoken": "Stage 4 — The 150 kb Circular cpDNA Ring & Inverted Repeats. Inspect the closed circular chloroplast DNA (cpDNA) ring with its Large Single-Copy (LSC), Small Single-Copy (SSC), and two stabilizing Inverted Repeat (IRA/IRB) regions.",
        "color": "#7209B7",
        "targetPiece": "Piece_Chl_Chlororibosome70S"
      },
      {
        "step": 5,
        "title": "5 : 70S Chlororibosomes & Co-Evolution with the Nucleus",
        "desc": "Watch bacterial-style 70S Chlororibosomes translate the rbcL Large subunit of RuBisCO in the str...",
        "spoken": "Stage 5 — 70S Chlororibosomes & Co-Evolution with the Nucleus. Watch bacterial-style 70S Chlororibosomes translate the rbcL Large subunit of RuBisCO in the stroma to pair with nuclear-encoded rbcS Small subunits.",
        "color": "#F77F00",
        "targetPiece": "Piece_Chl_StromalRuBisCOStarch"
      }
    ]
  },
  {
    "num": "24",
    "id": "photosystem_ii_i_z_scheme",
    "folder": "24_photosystem_ii_i_z_scheme",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "THYLAKOID LIGHT REACTIONS: PHOTOSYSTEM II (MN₄CAO₅ WATER-SPLITTING), CYTOCHROME B₆F, PHOTOSYSTEM I & CF₁CFO-ATP SYNTHASE",
    "subtitle": "The Thylakoid Membrane executes the most important photochemical reaction on Earth—the Z-Scheme of Oxygenic Photosynthesis—across four coupled nanomachines: (1) Dimeric P...",
    "analogy": "Renders all four thylakoid complexes in sequence across the thylakoid membrane (Stroma on top, Thylakoid Lumen below): PSII–LHCII (5XNL) with its luminal Mn₄CaO₅ cubane cluster evolving O₂ bubbles, Cytochrome b₆f + Plastocyanin shuttle, PSI–LHCI (5ZJI) + Ferredoxin/FNR generating NADPH, and rotary CF₁CFo-ATP Synthase generating ATP.",
    "scaleTag": "EUKARYOTE SCENARIO 24 • 35 NM THYLAKOID Z-SCHEME PHOTOSYNTHETIC CHAIN • PDB: 5XNL / 5ZJI",
    "glb": "/eukaryote/models/photosystem_ii_i_z_scheme.glb",
    "pdb": "5XNL, 5ZJI",
    "pronounce": "[photosystem-ii-i-z-scheme]",
    "sliderLabel": "SOLAR PHOTON FLUX INTENSITY (PAR ΜMOL/M²/S):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Mn₄CaO₅ Kok Cycle Step",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 8 Photons (ΔE ≈ 1,40",
      "🛑 Energy Depleted"
    ],
    "upstream": "Solar photons (680 nm & 700 nm) + Root/Leaf H₂O + Recycled stromal NADP⁺, ADP, and Pᵢ from the Calvin Cycle (Scenario 25).",
    "coupling": "Inputs: 8 Solar Photons (4 at PSII 680 nm + 4 at PSI 700 nm) + 2 H ➔ Outputs: 1 Molecular Oxygen (O₂ evolved into the atmosphere) + 12 L",
    "downstream": "Stromal ATP and NADPH directly power the hexadecameric RuBisCO Calvin–Benson Cycle in the Stroma (Scenario 25); evolved O₂ fu",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "PSII Kok S-state water-splitting cycle compl"
      ],
      [
        "ENERGY CURRENCY",
        "8 Photons (ΔE ≈ 1,400 kJ) → Linear Electron "
      ],
      [
        "BIOPHYSICAL SCALE",
        "35 nm Thylakoid Z-Scheme Photosynthetic Chai"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5XNL & 5ZJI"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Photosystem II",
        "url": "https://pdb101.rcsb.org/motm/59"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Photosystem I",
        "url": "https://pdb101.rcsb.org/motm/22"
      },
      {
        "title": "RCSB PDB Structure 5XNL — Plant C₂S₂M₂ PSII–LHCII Supercomplex",
        "url": "https://www.rcsb.org/structure/5XNL"
      },
      {
        "title": "RCSB PDB Structure 5ZJI — Plant PSI–LHCI Supercomplex",
        "url": "https://www.rcsb.org/structure/5ZJI"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Photo_PSII_LHCII",
        "name": "Photosystem II–LHCII Supercomplex",
        "badge": "LHCII",
        "color": "#2EC4B6",
        "desc": "Photosystem II–LHCII Supercomplex (D1/D2, P680 & Chlorophyll Antennae). Structural source: 5XNL Plant PSII-LHCII. Color taxonomy: Photosystem II Teal (#2EC4B6).",
        "dissocVector": [
          -6.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Photo_Mn4CaO5_OEC",
        "name": "Luminal Mn₄CaO₅ Oxygen-Evolving…",
        "badge": "OEC",
        "color": "#FFB703",
        "desc": "Luminal Mn₄CaO₅ Oxygen-Evolving Cubane Cluster & PsbO/P/Q Cap. Structural source: 3WU2 / 5XNL Mn4CaO5 Cluster. Color taxonomy: Water-Splitting Gold (#FFB703).",
        "dissocVector": [
          -6.0,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Photo_CytB6f_Plastocyanin",
        "name": "Dimeric Cytochrome b₆f Complex,…",
        "badge": "PLASTO",
        "color": "#F77F00",
        "desc": "Dimeric Cytochrome b₆f Complex, Plastoquinol Pool & Cu-Plastocyanin. Structural source: 6RQF Cyt b6f + 1BXU PC. Color taxonomy: Cytochrome b6f Amber (#F77F00).",
        "dissocVector": [
          -1.0,
          -0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Photo_PSI_LHCI_FNR",
        "name": "Photosystem I–LHCI",
        "badge": "FNR",
        "color": "#3A86FF",
        "desc": "Photosystem I–LHCI (P700, Fe-S Wire), Ferredoxin & FNR (NADPH Generator). Structural source: 5ZJI PSI + 1GAQ Fd-FNR. Color taxonomy: Photosystem I Cobalt Blue (#3A86FF).",
        "dissocVector": [
          3.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Photo_CF1CFo_ATPSynthase",
        "name": "Chloroplast CF₁CFo-ATP Synthase",
        "badge": "ATPSYN",
        "color": "#E63946",
        "desc": "Chloroplast CF₁CFo-ATP Synthase (Redox γ-Switch & 14-Subunit c₁₄-Ring). Structural source: 6FKF Chloroplast ATP Synthase. Color taxonomy: Rotary Synthase Crimson (#E63946).",
        "dissocVector": [
          7.5,
          1.5,
          -1.0
        ]
      },
      {
        "meshName": "Piece_Photo_ThylakoidBilayer",
        "name": "Galactolipid-Rich Thylakoid Memb…",
        "badge": "THYLAK",
        "color": "#06D6A0",
        "desc": "Galactolipid-Rich Thylakoid Membrane (MGDG/DGDG Bilayer). Structural source: Thylakoid Bilayer. Color taxonomy: Thylakoid Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Exciton Funneling & P680 Charge Separation in PSII",
        "desc": "Watch 680 nm photons strike LHCII antenna chlorophylls and funnel picosecond excitation energy t...",
        "spoken": "Stage 1 — Exciton Funneling & P680 Charge Separation in PSII. Watch 680 nm photons strike LHCII antenna chlorophylls and funnel picosecond excitation energy to the P680 reaction center, ejecting an electron to Pheophytin and Plastoquinone Q_B.",
        "color": "#2EC4B6",
        "targetPiece": "Piece_Photo_PSII_LHCII"
      },
      {
        "step": 2,
        "title": "2 : The Mn₄CaO₅ Water-Splitting Clock (Kok S₀–S₄ Cycle)",
        "desc": "Follow four sequential photon flashes as P680•⁺ extracts 4 electrons via Tyr_Z from the distorte...",
        "spoken": "Stage 2 — The Mn₄CaO₅ Water-Splitting Clock (Kok S₀–S₄ Cycle). Follow four sequential photon flashes as P680•⁺ extracts 4 electrons via Tyr_Z from the distorted Mn₄CaO₅ cubane cluster, snapping two H₂O molecules into O=O gas and 4 luminal H⁺.",
        "color": "#FFB703",
        "targetPiece": "Piece_Photo_Mn4CaO5_OEC"
      },
      {
        "step": 3,
        "title": "3 : Plastoquinol, Cytochrome b₆f Q-Cycle & Plastocyanin",
        "desc": "Reduced Plastoquinol (PQH₂) diffuses to Cytochrome b₆f, which pumps 4 more H⁺ into the lumen and...",
        "spoken": "Stage 3 — Plastoquinol, Cytochrome b₆f Q-Cycle & Plastocyanin. Reduced Plastoquinol (PQH₂) diffuses to Cytochrome b₆f, which pumps 4 more H⁺ into the lumen and hands electrons to the blue copper-protein Plastocyanin.",
        "color": "#F77F00",
        "targetPiece": "Piece_Photo_CytB6f_Plastocyanin"
      },
      {
        "step": 4,
        "title": "4 : Photosystem I (P700), Ferredoxin & FNR NADPH Synthesis",
        "desc": "A second 700 nm photon excites P700 in PSI, boosting the electron from Plastocyanin through thre...",
        "spoken": "Stage 4 — Photosystem I (P700), Ferredoxin & FNR NADPH Synthesis. A second 700 nm photon excites P700 in PSI, boosting the electron from Plastocyanin through three [4Fe-4S] clusters to stromal Ferredoxin and FNR to reduce NADP⁺ → NADPH.",
        "color": "#3A86FF",
        "targetPiece": "Piece_Photo_PSI_LHCI_FNR"
      },
      {
        "step": 5,
        "title": "5 : Thylakoid ΔpH & CF₁CFo-ATP Synthase Photophosphorylation",
        "desc": "The 1,000-fold proton gradient (Lumen pH 5.5 vs. Stroma pH 8.0) spins the 14-subunit c₁₄-ring of...",
        "spoken": "Stage 5 — Thylakoid ΔpH & CF₁CFo-ATP Synthase Photophosphorylation. The 1,000-fold proton gradient (Lumen pH 5.5 vs. Stroma pH 8.0) spins the 14-subunit c₁₄-ring of CF₁CFo-ATP Synthase to generate the ATP that accompanies NADPH into the Calvin Cycle.",
        "color": "#E63946",
        "targetPiece": "Piece_Photo_CF1CFo_ATPSynthase"
      }
    ]
  },
  {
    "num": "25",
    "id": "calvin_cycle_rubisco_16mer",
    "folder": "25_calvin_cycle_rubisco_16mer",
    "tier": "Tier 5 — Bioenergetic Organelles: Mitochondria, Chloroplasts & Peroxisomes",
    "title": "THE CALVIN–BENSON CYCLE & RUBISCO HEXADECAMER (L₈S₈ CARBON FIXATION VS. PHOTORESPIRATION)",
    "subtitle": "Ribulose-1,5-bisphosphate carboxylase/oxygenase (RuBisCO) is the most abundant enzyme in the terrestrial biosphere and the primary gateway by which inorganic atmospheric ...",
    "analogy": "Visualizes the 16-subunit L₈S₈ RuBisCO barrel alongside the AAA+ RuBisCO Activase hexamer and the stromal Calvin–Benson enzyme ring: shows Lys201-CO₂-Mg²⁺ active-site coordination, Loop 6 closure over RuBP, cleavage of the 6C intermediate into two 3-PGA molecules, ATP/NADPH reduction to G3P, and competitive O₂ oxygenation.",
    "scaleTag": "EUKARYOTE SCENARIO 25 • 12 NM L₈S₈ RUBISCO BARREL & STROMAL CARBON-REDUCTION CYCLE • PDB: 1RBL / 3ZUH",
    "glb": "/eukaryote/models/calvin_cycle_rubisco_16mer.glb",
    "pdb": "1RBL, 3ZUH",
    "pronounce": "[calvin-cycle-rubisco-16mer]",
    "sliderLabel": "STROMAL [CO₂] / [O₂] RATIO (CARBOXYLATION VS. PHOTORESPIRATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ RuBisCO Activase AAA+ ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 3 ATP & 2 NADPH cons",
      "🛑 Energy Depleted"
    ],
    "upstream": "Thylakoid Light-Reaction Z-Scheme (Scenario 24, supplying stromal ATP, NADPH, Mg²⁺ efflux, and pH 8.0) + Stomatal & Chloropla",
    "coupling": "Inputs: 3 CO₂ + 3 H₂O + 3 Ribulose-1,5-bisphosphate (RuBP, 5C acce ➔ Outputs: 1 Net Glyceraldehyde-3-Phosphate (G3P / Triose-P) exported",
    "downstream": "Exported G3P drives cytosolic sucrose synthesis and mitochondrial glycolysis/TCA (Scenarios 19–21); photorespiratory 2-phosph",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "RuBisCO k_cat ≈ 3–4 CO₂ fixed per active sit"
      ],
      [
        "ENERGY CURRENCY",
        "3 ATP & 2 NADPH consumed per CO₂ fixed (9 AT"
      ],
      [
        "BIOPHYSICAL SCALE",
        "12 nm L₈S₈ RuBisCO Barrel & Stromal Carbon-R"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1RBL & 3ZUH"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: RuBisCO",
        "url": "https://pdb101.rcsb.org/motm/11"
      },
      {
        "title": "RCSB PDB Structure 1RBL — Spinach L₈S₈ RuBisCO Hexadecamer",
        "url": "https://www.rcsb.org/structure/1RBL"
      },
      {
        "title": "RCSB PDB Structure 3ZUH — Chloroplast RuBisCO Activase AAA+ Hexamer",
        "url": "https://www.rcsb.org/structure/3ZUH"
      },
      {
        "title": "NCBI Bookshelf — Biochemistry: The Calvin Cycle & Photosynthetic Carbon Assimilation",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK22468/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Rubisco_RbcL_Core",
        "name": "Octameric Catalytic Core",
        "badge": "CORE",
        "color": "#06D6A0",
        "desc": "Octameric Catalytic Core (8 × RbcL Large Subunits with Loop 6 Gates). Structural source: 1RBL Chains A–H. Color taxonomy: RbcL Core Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rubisco_RbcS_Caps",
        "name": "Apical & Basal Regulatory Caps",
        "badge": "CAPS",
        "color": "#0077B6",
        "desc": "Apical & Basal Regulatory Caps (8 × RbcS Small Subunits). Structural source: 1RBL Chains I–P. Color taxonomy: RbcS Cap Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rubisco_MgActiveSite",
        "name": "Carbamylated Lys201–CO₂–Mg²⁺ Act…",
        "badge": "MGACTI",
        "color": "#FFB703",
        "desc": "Carbamylated Lys201–CO₂–Mg²⁺ Active Site & RuBP Enediolate. Structural source: 1RBL Active Site Pocket. Color taxonomy: Catalytic Mg²⁺ Gold (#FFB703).",
        "dissocVector": [
          2.5,
          0.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Rubisco_Activase",
        "name": "RuBisCO Activase AAA+ Hexamer",
        "badge": "ACTIVA",
        "color": "#F77F00",
        "desc": "RuBisCO Activase AAA+ Hexamer (Active-Site Sugar Remodeler). Structural source: 3ZUH RuBisCO Activase. Color taxonomy: Activase Amber (#F77F00).",
        "dissocVector": [
          -5.5,
          1.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Rubisco_PGK_GAPDH",
        "name": "Stromal Phosphoglycerate Kinase…",
        "badge": "GAPDH",
        "color": "#7209B7",
        "desc": "Stromal Phosphoglycerate Kinase & GAPDH Reduction Module (ATP/NADPH). Structural source: 2WZB / 1RM5 Stromal Enzymes. Color taxonomy: Reduction Module Purple (#7209B7).",
        "dissocVector": [
          5.5,
          -1.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Rubisco_PRK_Regen",
        "name": "Phosphoribulokinase",
        "badge": "REGEN",
        "color": "#E63946",
        "desc": "Phosphoribulokinase (PRK) & Transketolase RuBP Regeneration Ring. Structural source: 6H7G PRK–GAPDH–CP12 Complex. Color taxonomy: Regeneration Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -4.8,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Light-Driven Stromal Alkalinization & Lys201 Carbamylation",
        "desc": "Illumination pumps H⁺ into thylakoids, raising stromal pH to 8.0 and releasing Mg²⁺; an activato...",
        "spoken": "Stage 1 — Light-Driven Stromal Alkalinization & Lys201 Carbamylation. Illumination pumps H⁺ into thylakoids, raising stromal pH to 8.0 and releasing Mg²⁺; an activator CO₂ carbamylates RbcL Lys201 to coordinate the catalytic Mg²⁺ ion.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Rubisco_RbcL_Core"
      },
      {
        "step": 2,
        "title": "2 : RuBP Binding, Enolization & Loop 6 Closure",
        "desc": "5-carbon Ribulose-1,5-bisphosphate (RuBP) coordinates the Mg²⁺ ion, deprotonating C3 to form a r...",
        "spoken": "Stage 2 — RuBP Binding, Enolization & Loop 6 Closure. 5-carbon Ribulose-1,5-bisphosphate (RuBP) coordinates the Mg²⁺ ion, deprotonating C3 to form a reactive 2,3-enediolate as flexible Loop 6 seals the active site.",
        "color": "#0077B6",
        "targetPiece": "Piece_Rubisco_RbcS_Caps"
      },
      {
        "step": 3,
        "title": "3 : Electrophilic CO₂ Attack & 6C β-Keto Acid Cleavage",
        "desc": "Substrate CO₂ attacks C2 of the enediolate to form a transient 6-carbon 2-carboxy-3-keto-D-arabi...",
        "spoken": "Stage 3 — Electrophilic CO₂ Attack & 6C β-Keto Acid Cleavage. Substrate CO₂ attacks C2 of the enediolate to form a transient 6-carbon 2-carboxy-3-keto-D-arabinitol 1,5-bisphosphate intermediate, which hydrates and splits into two 3-PGA molecules.",
        "color": "#FFB703",
        "targetPiece": "Piece_Rubisco_MgActiveSite"
      },
      {
        "step": 4,
        "title": "4 : ATP Phosphorylation & NADPH Reduction to G3P",
        "desc": "Phosphoglycerate kinase uses stromal ATP to convert 3-PGA into 1,3-BPG, and chloroplastic GAPDH ...",
        "spoken": "Stage 4 — ATP Phosphorylation & NADPH Reduction to G3P. Phosphoglycerate kinase uses stromal ATP to convert 3-PGA into 1,3-BPG, and chloroplastic GAPDH uses NADPH to reduce it into Glyceraldehyde-3-Phosphate (G3P).",
        "color": "#F77F00",
        "targetPiece": "Piece_Rubisco_Activase"
      },
      {
        "step": 5,
        "title": "5 : RuBP Regeneration vs. O₂ Photorespiration & Activase Rescue",
        "desc": "Five of every six G3P molecules are rearranged by transketolase, aldolase, and phosphoribulokina...",
        "spoken": "Stage 5 — RuBP Regeneration vs. O₂ Photorespiration & Activase Rescue. Five of every six G3P molecules are rearranged by transketolase, aldolase, and phosphoribulokinase (PRK) to regenerate 3 RuBP, while RuBisCO Activase uses ATP to eject stalled sugar phosphates.",
        "color": "#7209B7",
        "targetPiece": "Piece_Rubisco_PGK_GAPDH"
      }
    ]
  },
  {
    "num": "26",
    "id": "nucleus_envelope_nucleolus",
    "folder": "26_nucleus_envelope_nucleolus",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE NUCLEUS: DOUBLE NUCLEAR ENVELOPE, NUCLEAR LAMINA MESHWORK, CHROMATIN TERRITORIES & TRIPARTITE NUCLEOLUS",
    "subtitle": "The Nucleus (~5–10 µm diameter) is the defining organelle of eukaryotic life, physically decoupling transcription and RNA processing (Scenarios 30–31) from cytoplasmic tr...",
    "analogy": "Presents a dramatic 90° architectural cutaway of the whole Eukaryotic Nucleus: reveals the ribosome-studded Outer Nuclear Membrane continuous with the ER, the perinuclear lumen, the Inner Nuclear Membrane lined by the orthogonal Lamin A/B meshwork, embedded Nuclear Pore Complexes, peripheral Heterochromatin vs. interior Euchromatin territories, and the glowing tripartite Nucleolus assembling pre-40S/pre-60S ribosomal subunits.",
    "scaleTag": "EUKARYOTE SCENARIO 26 • 6 ΜM WHOLE-ORGANELLE CUTAWAY WITH 15 NM LAMINA & TRIPARTITE NUCLEOLAR CONDENSATE • PDB: 7R5K / 6L8Q",
    "glb": "/eukaryote/models/nucleus_envelope_nucleolus.glb",
    "pdb": "7R5K, 6L8Q",
    "pronounce": "[nucleus-envelope-nucleolus]",
    "sliderLabel": "EPIGENETIC CHROMATIN STATE (EUCHROMATIN VS. HETEROCHROMATIN):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Nuclear Lamina Stiffne",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ RanGTP/RanGDP Nucleo",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic import of Histones, Ribosomal Proteins, Lamin subunits, RNA Polymerases, and NTPs via Nuclear Pore Complexes (Sce",
    "coupling": "Inputs: Imported Ribosomal Proteins (RPs, ~80 species), Histones ( ➔ Outputs: Pre-40S and Pre-60S Ribosomal Subunits exported through NP",
    "downstream": "Feeds all nuclear macromolecules through the Nuclear Pore Complex (Scenario 27) into Cytoplasmic Translation (Scenario 32), R",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "A proliferating human nucleus synthesizes ~7"
      ],
      [
        "ENERGY CURRENCY",
        "RanGTP/RanGDP Nucleocytoplasmic Gradient + N"
      ],
      [
        "BIOPHYSICAL SCALE",
        "6 µm Whole-Organelle Cutaway with 15 nm Lami"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7R5K & 6L8Q"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Nuclear Pore Complex",
        "url": "https://pdb101.rcsb.org/motm/205"
      },
      {
        "title": "RCSB PDB Structure 7R5K — Human Nuclear Pore Complex in the Nuclear Envelope",
        "url": "https://www.rcsb.org/structure/7R5K"
      },
      {
        "title": "RCSB PDB Structure 6L8Q — Human Nucleolar 90S Pre-Ribosome (SSU Processome)",
        "url": "https://www.rcsb.org/structure/6L8Q"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Compartmentalization of the Nucleus",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26865/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Nuc_DoubleEnvelope",
        "name": "Double Nuclear Envelope",
        "badge": "DOUBLE",
        "color": "#06D6A0",
        "desc": "Double Nuclear Envelope (Outer ONM continuous with ER & Inner INM). Structural source: Nuclear Envelope Bilayer. Color taxonomy: Nuclear Envelope Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.8,
          0.0
        ]
      },
      {
        "meshName": "Piece_Nuc_PoreComplexes",
        "name": "Embedded Nuclear Pore Complexes",
        "badge": "PORECO",
        "color": "#FFB703",
        "desc": "Embedded Nuclear Pore Complexes (NPCs) & LINC SUN–KASH Bridges. Structural source: 7R5K NPC Assembly. Color taxonomy: Nuclear Pore Gold (#FFB703).",
        "dissocVector": [
          -4.8,
          2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_LaminaMesh",
        "name": "Nuclear Lamina Orthogonal Tetram…",
        "badge": "LAMINA",
        "color": "#E76F51",
        "desc": "Nuclear Lamina Orthogonal Tetramer Meshwork (Lamins A/C & B1/B2). Structural source: 6JLB Nuclear Lamin Coiled-Coil. Color taxonomy: Lamina Terracotta (#E76F51).",
        "dissocVector": [
          4.8,
          2.5,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_Heterochromatin",
        "name": "Peripheral Heterochromatin",
        "badge": "HETERO",
        "color": "#48CAE4",
        "desc": "Peripheral Heterochromatin (LADs, H3K9me3 Condensed Chromatin). Structural source: 1AOI Condensed Chromatin. Color taxonomy: Heterochromatin Cyan (#48CAE4).",
        "dissocVector": [
          -3.8,
          -1.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_Euchromatin",
        "name": "Interior Euchromatin Loops & Tra…",
        "badge": "EUCHRO",
        "color": "#0077B6",
        "desc": "Interior Euchromatin Loops & Transcription Factories (Active Chromatin). Structural source: 7LBM Active Chromatin Loops. Color taxonomy: Euchromatin Marine Blue (#0077B6).",
        "dissocVector": [
          3.8,
          -1.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_Nucleolus",
        "name": "Tripartite Nucleolus Condensate",
        "badge": "NUCLEO",
        "color": "#7209B7",
        "desc": "Tripartite Nucleolus Condensate (FC, DFC, GC) & 90S Pre-Ribosome. Structural source: 6L8Q 90S Pre-Ribosome. Color taxonomy: Nucleolus Royal Purple (#7209B7).",
        "dissocVector": [
          0.0,
          -3.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Double Nuclear Envelope & ER Continuity",
        "desc": "Inspect how the Outer Nuclear Membrane merges seamlessly with Rough ER cisternae while the Inner...",
        "spoken": "Stage 1 — Double Nuclear Envelope & ER Continuity. Inspect how the Outer Nuclear Membrane merges seamlessly with Rough ER cisternae while the Inner Nuclear Membrane seals the genome behind a selective perinuclear lumen.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Nuc_DoubleEnvelope"
      },
      {
        "step": 2,
        "title": "2 : The Nuclear Lamina & Mechanotransduction (LINC)",
        "desc": "Trace the 15 nm woven meshwork of Lamin A/C and Lamin B intermediate filaments that resists mech...",
        "spoken": "Stage 2 — The Nuclear Lamina & Mechanotransduction (LINC). Trace the 15 nm woven meshwork of Lamin A/C and Lamin B intermediate filaments that resists mechanical deformation and connects via SUN–KASH LINC bridges to cytoplasmic microtubules and actin.",
        "color": "#FFB703",
        "targetPiece": "Piece_Nuc_PoreComplexes"
      },
      {
        "step": 3,
        "title": "3 : Chromosome Territories: LADs vs. Interior Euchromatin",
        "desc": "Observe how gene-poor, H3K9me3-marked Heterochromatin is tethered to the peripheral Nuclear Lami...",
        "spoken": "Stage 3 — Chromosome Territories: LADs vs. Interior Euchromatin. Observe how gene-poor, H3K9me3-marked Heterochromatin is tethered to the peripheral Nuclear Lamina (LADs), while gene-rich Euchromatin loops inward toward active RNA Pol II factories.",
        "color": "#E76F51",
        "targetPiece": "Piece_Nuc_LaminaMesh"
      },
      {
        "step": 4,
        "title": "4 : The Tripartite Nucleolus & 47S Pre-rRNA Transcription",
        "desc": "Zoom into the phase-separated Nucleolus: RNA Polymerase I transcribes tandem rDNA repeats in the...",
        "spoken": "Stage 4 — The Tripartite Nucleolus & 47S Pre-rRNA Transcription. Zoom into the phase-separated Nucleolus: RNA Polymerase I transcribes tandem rDNA repeats in the Fibrillar Center (FC), while snoRNPs in the Dense Fibrillar Component (DFC) cleave and 2'-O-methylate the rRNA.",
        "color": "#48CAE4",
        "targetPiece": "Piece_Nuc_Heterochromatin"
      },
      {
        "step": 5,
        "title": "5 : 90S Processome Maturation & Pre-40S/60S Nuclear Export",
        "desc": "Watch ~80 imported ribosomal proteins fold onto the rRNA scaffold in the Granular Component (GC)...",
        "spoken": "Stage 5 — 90S Processome Maturation & Pre-40S/60S Nuclear Export. Watch ~80 imported ribosomal proteins fold onto the rRNA scaffold in the Granular Component (GC) to form pre-40S and pre-60S subunits, which exit through Nuclear Pore Complexes into the cytoplasm.",
        "color": "#0077B6",
        "targetPiece": "Piece_Nuc_Euchromatin"
      }
    ]
  },
  {
    "num": "27",
    "id": "nuclear_pore_complex_npc",
    "folder": "27_nuclear_pore_complex_npc",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE NUCLEAR PORE COMPLEX (NPC): 120 MDA OCTAGONAL GATE, FG-REPEAT HYDROGEL & RANGTP/RANGDP TRANSPORT CYCLE",
    "subtitle": "At ~120 Megadaltons and ~1,000 individual protein subunits (composed of ~30 distinct Nucleoporins or Nups in 8-fold rotational symmetry), the vertebrate Nuclear Pore Comp...",
    "analogy": "Visualizes the 8-fold symmetric 120 MDa Nuclear Pore Complex spanning the double nuclear membrane: animates the Cytoplasmic Filaments, Y-complex Outer Rings, Inner Spoke Ring, Nuclear Basket, the phase-separated FG-Repeat hydrogel mesh inside the central channel, and bidirectional Importin-α/β + Exportin-1/CRM1 transport driven by nuclear RCC1 (RanGTP) and cytoplasmic RanGAP1 (RanGDP).",
    "scaleTag": "EUKARYOTE SCENARIO 27 • 120 NM DIAMETER, 120 MDA OCTAGONAL SYMMETRIC MACROMOLECULAR CHANNEL (~1,000 NUCLEOPORINS) • PDB: 7R5K / 1IBR",
    "glb": "/eukaryote/models/nuclear_pore_complex_npc.glb",
    "pdb": "7R5K, 1IBR",
    "pronounce": "[nuclear-pore-complex-npc]",
    "sliderLabel": "ACTIVE TRANSPORT MODE (NLS IMPORT VS. NES/MRNP EXPORT):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ FG-Repeat Hydrogel Sie",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 1 GTP hydrolyzed per",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic 80S Ribosomes synthesizing NLS-tagged nuclear proteins (Scenario 32) + Nuclear Pol I/II/III & Spliceosome produci",
    "coupling": "Inputs: Cytoplasmic NLS-tagged proteins (Histones, Transcription F ➔ Outputs: Accumulated nuclear proteome inside the nucleoplasm (up to",
    "downstream": "Supplies the Nucleus (Scenario 26), Chromatin (Scenario 28), Replisome (Scenario 29), and Pol II/Spliceosome (Scenarios 30–31",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~500–1,000 macromolecular cargo translocatio"
      ],
      [
        "ENERGY CURRENCY",
        "1 GTP hydrolyzed per RanGTP/RanGDP transport"
      ],
      [
        "BIOPHYSICAL SCALE",
        "120 nm Diameter, 120 MDa Octagonal Symmetric"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7R5K & 1IBR"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Karyopherins (Importins & Exportins)",
        "url": "https://pdb101.rcsb.org/motm/85"
      },
      {
        "title": "RCSB PDB Structure 7R5K — Cryo-EM Structure of the Human Nuclear Pore Complex",
        "url": "https://www.rcsb.org/structure/7R5K"
      },
      {
        "title": "RCSB PDB Structure 1IBR — Complex of Importin-β with RanGTP",
        "url": "https://www.rcsb.org/structure/1IBR"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Transport of Molecules Between the Nucleus and the Cytosol",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26932/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_NPC_CytoplasmicRing",
        "name": "Cytoplasmic Outer Ring",
        "badge": "CYTOPL",
        "color": "#0077B6",
        "desc": "Cytoplasmic Outer Ring (Y-Complexes) & 8 Nup358/RanBP2 Filaments. Structural source: 7R5K Cytoplasmic Ring. Color taxonomy: Cytoplasmic Ring Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.2,
          0.0
        ]
      },
      {
        "meshName": "Piece_NPC_InnerSpokeRing",
        "name": "Inner Spoke Ring Core & Transmem…",
        "badge": "INNERS",
        "color": "#00B4D8",
        "desc": "Inner Spoke Ring Core & Transmembrane Pore Membrane Anchors (Ndc1/Pom121). Structural source: 7R5K Inner Ring. Color taxonomy: Inner Spoke Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_NPC_NuclearBasket",
        "name": "Nuclear Outer Ring & 8-Filament…",
        "badge": "NUCLEA",
        "color": "#7209B7",
        "desc": "Nuclear Outer Ring & 8-Filament Nuclear Basket (Nup153 / TPR). Structural source: 7R5K Nuclear Ring & Basket. Color taxonomy: Nuclear Basket Purple (#7209B7).",
        "dissocVector": [
          0.0,
          -4.2,
          0.0
        ]
      },
      {
        "meshName": "Piece_NPC_FGHydrogel",
        "name": "Central Channel FG-Repeat Phase-…",
        "badge": "FGHYDR",
        "color": "#FFB703",
        "desc": "Central Channel FG-Repeat Phase-Separated Selective Hydrogel (Nup98/Nup62). Structural source: FG-Repeat Intrinsically Disordered Mesh. Color taxonomy: FG-Hydrogel Gold (#FFB703).",
        "dissocVector": [
          0.0,
          0.0,
          2.2
        ]
      },
      {
        "meshName": "Piece_NPC_ImportinRanGTP",
        "name": "Importin-α/β Cargo Complex, Expo…",
        "badge": "IMPORT",
        "color": "#E63946",
        "desc": "Importin-α/β Cargo Complex, Exportin-1 (CRM1) & RanGTP/RanGDP Switch. Structural source: 1IBR Importin-β–RanGTP Complex. Color taxonomy: Karyopherin Crimson (#E63946).",
        "dissocVector": [
          4.2,
          0.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_NPC_PoreMembrane",
        "name": "Curved Nuclear Envelope Pore Fus…",
        "badge": "POREME",
        "color": "#06D6A0",
        "desc": "Curved Nuclear Envelope Pore Fusion Membrane (ONM–INM Junction). Structural source: Nuclear Envelope Pore Bilayer. Color taxonomy: Pore Membrane Jade (#06D6A0).",
        "dissocVector": [
          -4.5,
          0.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Cytoplasmic Cargo Recognition (NLS & Importin-α/β)",
        "desc": "In the cytosol (where RanGTP is absent), Importin-α recognizes the basic Nuclear Localization Si...",
        "spoken": "Stage 1 — Cytoplasmic Cargo Recognition (NLS & Importin-α/β). In the cytosol (where RanGTP is absent), Importin-α recognizes the basic Nuclear Localization Signal (NLS) on a newly synthesized histone or transcription factor and recruits Importin-β.",
        "color": "#0077B6",
        "targetPiece": "Piece_NPC_CytoplasmicRing"
      },
      {
        "step": 2,
        "title": "2 : Hydrophobic Partitioning Through the FG-Repeat Hydrogel",
        "desc": "Surface hydrophobic grooves on Importin-β transiently bind and dissolve the Phenylalanine-Glycin...",
        "spoken": "Stage 2 — Hydrophobic Partitioning Through the FG-Repeat Hydrogel. Surface hydrophobic grooves on Importin-β transiently bind and dissolve the Phenylalanine-Glycine (FG) repeat meshwork of Nup98 and Nup62, gliding through the 50 nm pore in <5 milliseconds.",
        "color": "#00B4D8",
        "targetPiece": "Piece_NPC_InnerSpokeRing"
      },
      {
        "step": 3,
        "title": "3 : Nuclear Basket Exit & RanGTP-Triggered Cargo Release",
        "desc": "Inside the nucleus, chromatin-bound RCC1 (RanGEF) maintains high [RanGTP]; RanGTP binds the N-te...",
        "spoken": "Stage 3 — Nuclear Basket Exit & RanGTP-Triggered Cargo Release. Inside the nucleus, chromatin-bound RCC1 (RanGEF) maintains high [RanGTP]; RanGTP binds the N-terminal arch of Importin-β, inducing a conformational switch that releases the cargo into the nucleoplasm.",
        "color": "#7209B7",
        "targetPiece": "Piece_NPC_NuclearBasket"
      },
      {
        "step": 4,
        "title": "4 : Ternary Export Complex Assembly (Exportin-1 / CRM1 + RanGTP)",
        "desc": "Simultaneously, nuclear Exportin-1 (CRM1) cooperatively binds both RanGTP and a Leucine-rich Nuc...",
        "spoken": "Stage 4 — Ternary Export Complex Assembly (Exportin-1 / CRM1 + RanGTP). Simultaneously, nuclear Exportin-1 (CRM1) cooperatively binds both RanGTP and a Leucine-rich Nuclear Export Signal (NES) cargo (or pre-ribosomal subunit) and traverses the FG-channel outward.",
        "color": "#FFB703",
        "targetPiece": "Piece_NPC_FGHydrogel"
      },
      {
        "step": 5,
        "title": "5 : Cytoplasmic RanGAP1 Hydrolysis & NTF2 Recycling",
        "desc": "At the cytoplasmic Nup358/RanBP2 filaments, RanGAP1 triggers GTP hydrolysis (RanGTP → RanGDP + P...",
        "spoken": "Stage 5 — Cytoplasmic RanGAP1 Hydrolysis & NTF2 Recycling. At the cytoplasmic Nup358/RanBP2 filaments, RanGAP1 triggers GTP hydrolysis (RanGTP → RanGDP + Pᵢ), releasing the exported cargo in the cytosol while NTF2 ferries RanGDP back into the nucleus.",
        "color": "#E63946",
        "targetPiece": "Piece_NPC_ImportinRanGTP"
      }
    ]
  },
  {
    "num": "28",
    "id": "chromatin_nucleosome_cohesin_rings",
    "folder": "28_chromatin_nucleosome_cohesin_rings",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "CHROMATIN ARCHITECTURE: NUCLEOSOME HISTONE OCTAMER, EPIGENETIC TAILS, CTCF & COHESIN/CONDENSIN LOOP-EXTRUSION RINGS",
    "subtitle": "Two meters of human genomic DNA (~6.4 billion base pairs) must be compacted 10,000-fold into a 6 µm nucleus while remaining dynamically accessible for transcription and r...",
    "analogy": "Renders the atomic Nucleosome Core Particle (147 bp DNA wrapped 1.67 turns around the H2A/H2B/H3/H4 octamer with protruding N-terminal epigenetic tails and Linker Histone H1) nested within an actively extruding SMC Cohesin ring (SMC1/SMC3/RAD21) halted at convergent CTCF insulator motifs.",
    "scaleTag": "EUKARYOTE SCENARIO 28 • 11 NM NUCLEOSOME CORE PARTICLE & 40 NM SMC COHESIN LOOP-EXTRUSION RING • PDB: 1AOI / 6WG3",
    "glb": "/eukaryote/models/chromatin_nucleosome_cohesin_rings.glb",
    "pdb": "1AOI, 6WG3",
    "pronounce": "[chromatin-nucleosome-cohesin-rings]",
    "sliderLabel": "EPIGENETIC HISTONE TAIL CODE (HAT ACETYLATION VS. HDAC/PRC2 METHYLATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ SWI/SNF (BAF) ATP-Depe",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ SMC Cohesin & SWI/SN",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nuclear import of newly synthesized Histones & SMC subunits via NPC (Scenario 27) + Mitochondrial/Cytosolic Acetyl-CoA (Scena",
    "coupling": "Inputs: Genomic Double-Stranded B-DNA (147 bp core + ~20–60 bp lin ➔ Outputs: Topologically Associating Domains (TADs) & Enhancer–Promot",
    "downstream": "Directly controls promoter accessibility and enhancer-promoter looping for RNA Polymerase II & Mediator (Scenario 30) and rep",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Cohesin extrudes DNA loops at ~0.5–1.5 kb/se"
      ],
      [
        "ENERGY CURRENCY",
        "SMC Cohesin & SWI/SNF ATPase Hydrolysis + Me"
      ],
      [
        "BIOPHYSICAL SCALE",
        "11 nm Nucleosome Core Particle & 40 nm SMC C"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1AOI & 6WG3"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Nucleosome",
        "url": "https://pdb101.rcsb.org/motm/7"
      },
      {
        "title": "RCSB PDB Structure 1AOI — 2.8 Å Crystal Structure of the Nucleosome Core Particle",
        "url": "https://www.rcsb.org/structure/1AOI"
      },
      {
        "title": "RCSB PDB Structure 6WG3 — Human Cohesin–NIPBL–DNA Loop-Extrusion Complex",
        "url": "https://www.rcsb.org/structure/6WG3"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Chromosomal DNA and Its Packaging in the Chromatin Fiber",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26834/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Chrom_NucleosomeDNA",
        "name": "147 bp Superhelical B-DNA Gyres",
        "badge": "NUCLEO",
        "color": "#0077B6",
        "desc": "147 bp Superhelical B-DNA Gyres (1.67 Left-Handed Turns) & Linker DNA. Structural source: 1AOI Chains I, J. Color taxonomy: Superhelical DNA Blue (#0077B6).",
        "dissocVector": [
          0.0,
          0.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Chrom_HistoneOctamer",
        "name": "Histone Octamer Core",
        "badge": "HISTON",
        "color": "#06D6A0",
        "desc": "Histone Octamer Core: Central (H3–H4)₂ Tetramer & Two (H2A–H2B) Dimers. Structural source: 1AOI Chains A–H. Color taxonomy: Histone Octamer Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Chrom_EpigeneticTails",
        "name": "Protruding N-Terminal Histone Ta…",
        "badge": "EPIGEN",
        "color": "#FFB703",
        "desc": "Protruding N-Terminal Histone Tails (H3K27ac, H3K4me3, H3K9me3 Marks). Structural source: 1AOI Flexible N-Tails. Color taxonomy: Epigenetic Tail Gold (#FFB703).",
        "dissocVector": [
          2.8,
          2.2,
          2.0
        ]
      },
      {
        "meshName": "Piece_Chrom_LinkerH1",
        "name": "Linker Histone H1 Dyad Clamp & C…",
        "badge": "LINKER",
        "color": "#F77F00",
        "desc": "Linker Histone H1 Dyad Clamp & Chromatosome Stem. Structural source: 7K5X Linker Histone H1. Color taxonomy: Linker H1 Amber (#F77F00).",
        "dissocVector": [
          -2.8,
          -1.8,
          1.8
        ]
      },
      {
        "meshName": "Piece_Chrom_CohesinRing",
        "name": "Tripartite SMC Cohesin Loop-Extr…",
        "badge": "COHESI",
        "color": "#E63946",
        "desc": "Tripartite SMC Cohesin Loop-Extrusion Ring (SMC1–SMC3–RAD21–NIPBL). Structural source: 6WG3 Cohesin Complex. Color taxonomy: Cohesin Ring Crimson (#E63946).",
        "dissocVector": [
          0.0,
          4.5,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Chrom_CTCFAnchor",
        "name": "Convergent CTCF 11-Zinc-Finger B…",
        "badge": "CTCFAN",
        "color": "#7209B7",
        "desc": "Convergent CTCF 11-Zinc-Finger Boundary Insulator Dimers. Structural source: 5YEF CTCF Zinc Fingers. Color taxonomy: CTCF Insulator Purple (#7209B7).",
        "dissocVector": [
          0.0,
          -4.5,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Histone Octamer Assembly & 147 bp Superhelical Wrapping",
        "desc": "Four core histone dimers—an (H3–H4)₂ tetramer and two (H2A–H2B) dimers—assemble via histone-fold...",
        "spoken": "Stage 1 — Histone Octamer Assembly & 147 bp Superhelical Wrapping. Four core histone dimers—an (H3–H4)₂ tetramer and two (H2A–H2B) dimers—assemble via histone-fold handshakes, wrapping 147 bp of negatively charged DNA 1.67 left-handed turns via arginine minor-groove contacts.",
        "color": "#0077B6",
        "targetPiece": "Piece_Chrom_NucleosomeDNA"
      },
      {
        "step": 2,
        "title": "2 : Linker Histone H1 Sealing & Chromatin Clutch Compaction",
        "desc": "Globular Linker Histone H1 binds the nucleosome dyad axis where entry and exit DNA cross, zippin...",
        "spoken": "Stage 2 — Linker Histone H1 Sealing & Chromatin Clutch Compaction. Globular Linker Histone H1 binds the nucleosome dyad axis where entry and exit DNA cross, zipping 10 nm 'beads-on-a-string' arrays into compact zig-zag 30 nm chromatin clutches.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Chrom_HistoneOctamer"
      },
      {
        "step": 3,
        "title": "3 : The Epigenetic Histone Code (HATs, HDACs, Readers & Erasers)",
        "desc": "Watch HAT enzymes use Acetyl-CoA to acetylate H3/H4 lysine tails—neutralizing their positive cha...",
        "spoken": "Stage 3 — The Epigenetic Histone Code (HATs, HDACs, Readers & Erasers). Watch HAT enzymes use Acetyl-CoA to acetylate H3/H4 lysine tails—neutralizing their positive charge to loosen DNA—or HMTs/HDACs install H3K9me3/H3K27me3 marks to recruit HP1 and silence genes.",
        "color": "#FFB703",
        "targetPiece": "Piece_Chrom_EpigeneticTails"
      },
      {
        "step": 4,
        "title": "4 : SMC Cohesin Ring Loading & Active DNA Loop Extrusion",
        "desc": "The giant 40 nm tripartite Cohesin ring (SMC1, SMC3, kleisin RAD21, and loader NIPBL) clamps ont...",
        "spoken": "Stage 4 — SMC Cohesin Ring Loading & Active DNA Loop Extrusion. The giant 40 nm tripartite Cohesin ring (SMC1, SMC3, kleisin RAD21, and loader NIPBL) clamps onto chromatin and hydrolyzes ATP to reel DNA symmetrically into a growing topological loop at ~1 kb/sec.",
        "color": "#F77F00",
        "targetPiece": "Piece_Chrom_LinkerH1"
      },
      {
        "step": 5,
        "title": "5 : Convergent CTCF Boundary Arrest & Enhancer–Promoter TADs",
        "desc": "Loop extrusion continues until both faces of Cohesin collide with N-termini of convergently orie...",
        "spoken": "Stage 5 — Convergent CTCF Boundary Arrest & Enhancer–Promoter TADs. Loop extrusion continues until both faces of Cohesin collide with N-termini of convergently oriented CTCF 11-zinc-finger insulators, locking in a Topologically Associating Domain (TAD) that pairs an enhancer with its target promoter.",
        "color": "#E63946",
        "targetPiece": "Piece_Chrom_CohesinRing"
      }
    ]
  },
  {
    "num": "29",
    "id": "eukaryotic_replisome_cmg_pcna",
    "folder": "29_eukaryotic_replisome_cmg_pcna",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE EUKARYOTIC REPLISOME: CMG HELICASE (CDC45–MCM2-7–GINS), POL Ε/Δ/Α, RFC & HOMOTRIMERIC PCNA SLIDING CLAMP RINGS",
    "subtitle": "To duplicate 6.4 billion base pairs during S-phase in just ~8 hours, eukaryotic cells fire ~30,000–50,000 replication origins licensed in G1 by the Origin Recognition Com...",
    "analogy": "Visualizes the complete eukaryotic replication fork: the 11-subunit CMG helicase ring (Cdc45 + MCM2-7 hexamer + GINS) unwinding parental chromatin 3'→5' on the leading strand, coupled to Leading-Strand Pol ε, Ctf4 hub, Lagging-Strand Pol α–Primase, RFC clamp loader, glowing homotrimeric PCNA sliding clamp rings, Pol δ, FEN1, and DNA Ligase I.",
    "scaleTag": "EUKARYOTE SCENARIO 29 • 35 NM ASYMMETRIC REPLICATION FORK MACHINE & HOMOTRIMERIC PCNA CLAMP RINGS • PDB: 6UOM / 1PLQ",
    "glb": "/eukaryote/models/eukaryotic_replisome_cmg_pcna.glb",
    "pdb": "6UOM, 1PLQ",
    "pronounce": "[eukaryotic-replisome-cmg-pcna]",
    "sliderLabel": "CMG HELICASE UNWINDING & POL Ε/Δ SYNTHESIS RATE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Pol ε / Pol δ 3'→5' Ex",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ dNTP Pyrophosphate H",
      "🛑 Energy Depleted"
    ],
    "upstream": "Chromatin nucleosome remodeling & ORC origin licensing (Scenario 28) + G1/S Cyclin-CDK phosphorylation + Nuclear dNTP/rNTP im",
    "coupling": "Inputs: Parental Double-Stranded Chromatin DNA (unwound ahead of t ➔ Outputs: Two identical, semiconservatively replicated Sister Chroma",
    "downstream": "Produces cohesed sister chromatids for G2 repair and Mitotic Spindle kinetochore segregation (Scenario 35) while epigenetic m",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~30–50 bp/sec per eukaryotic fork (~2–3 kb/m"
      ],
      [
        "ENERGY CURRENCY",
        "dNTP Pyrophosphate Hydrolysis (ΔG°' ≈ -45 kJ"
      ],
      [
        "BIOPHYSICAL SCALE",
        "35 nm Asymmetric Replication Fork Machine & "
      ],
      [
        "PRIMARY RCSB PDBS",
        "6UOM & 1PLQ"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: DNA Polymerase & Sliding Clamps",
        "url": "https://pdb101.rcsb.org/motm/3"
      },
      {
        "title": "RCSB PDB Structure 6UOM — Human CMG Helicase on a Replication Fork",
        "url": "https://www.rcsb.org/structure/6UOM"
      },
      {
        "title": "RCSB PDB Structure 1PLQ — Eukaryotic PCNA Homotrimeric Sliding Clamp Ring",
        "url": "https://www.rcsb.org/structure/1PLQ"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: DNA Replication Mechanisms",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26850/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Rep_CMGHelicase",
        "name": "11-Subunit CMG Helicase Ring",
        "badge": "CMGHEL",
        "color": "#00B4D8",
        "desc": "11-Subunit CMG Helicase Ring (MCM2-7 AAA+ Hexamer + Cdc45 + GINS). Structural source: 6UOM CMG Helicase. Color taxonomy: CMG Helicase Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rep_PolEpsilon",
        "name": "Leading-Strand DNA Polymerase ε",
        "badge": "POLEPS",
        "color": "#06D6A0",
        "desc": "Leading-Strand DNA Polymerase ε (Pol2–Dpb2–Dpb3–Dpb4) Docked to CMG. Structural source: 6WJV CMG–Pol ε Complex. Color taxonomy: Pol ε Leading Jade (#06D6A0).",
        "dissocVector": [
          4.2,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Rep_PCNAClamps",
        "name": "Homotrimeric PCNA Sliding Clamp…",
        "badge": "PCNACL",
        "color": "#FFB703",
        "desc": "Homotrimeric PCNA Sliding Clamp Rings & Pentameric RFC Clamp Loader. Structural source: 1PLQ / 1SXJ RFC–PCNA Complex. Color taxonomy: PCNA Clamp Ring Gold (#FFB703).",
        "dissocVector": [
          2.5,
          -2.5,
          2.2
        ]
      },
      {
        "meshName": "Piece_Rep_PolAlphaPrimase",
        "name": "Ctf4 Trimer Hub & DNA Polymerase…",
        "badge": "POLALP",
        "color": "#F77F00",
        "desc": "Ctf4 Trimer Hub & DNA Polymerase α–Primase (RNA-DNA Initiator). Structural source: 5EXR Pol α–Primase. Color taxonomy: Primase Amber (#F77F00).",
        "dissocVector": [
          -4.0,
          -1.5,
          1.8
        ]
      },
      {
        "meshName": "Piece_Rep_PolDeltaLigase",
        "name": "Lagging-Strand DNA Polymerase δ,…",
        "badge": "POLDEL",
        "color": "#E63946",
        "desc": "Lagging-Strand DNA Polymerase δ, RPA, FEN1 Flap Endonuclease & Ligase I. Structural source: 6TNY Pol δ–PCNA–FEN1 Toolbelt. Color taxonomy: Pol δ Lagging Crimson (#E63946).",
        "dissocVector": [
          -2.5,
          -4.2,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rep_ForkDNA_FACT",
        "name": "Replication Fork DNA Junction &…",
        "badge": "FACT",
        "color": "#0077B6",
        "desc": "Replication Fork DNA Junction & FACT/CAF-1 Histone Chaperone Shuttle. Structural source: Replication Fork DNA + Histones. Color taxonomy: Fork DNA Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.2,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : CMG Helicase 3'→5' Leading-Strand Translocation",
        "desc": "The 11-subunit CMG ring (MCM2-7 hexamer stabilized by Cdc45 and GINS) encircles the leading-stra...",
        "spoken": "Stage 1 — CMG Helicase 3'→5' Leading-Strand Translocation. The 11-subunit CMG ring (MCM2-7 hexamer stabilized by Cdc45 and GINS) encircles the leading-strand template, hydrolyzing ATP around its AAA+ staircase to split parental dsDNA while FACT evicts nucleosomes ahead.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Rep_CMGHelicase"
      },
      {
        "step": 2,
        "title": "2 : Continuous Leading-Strand Synthesis by Pol ε",
        "desc": "Tethered directly to the C-terminal motor tier of CMG and encircled by a homotrimeric PCNA ring,...",
        "spoken": "Stage 2 — Continuous Leading-Strand Synthesis by Pol ε. Tethered directly to the C-terminal motor tier of CMG and encircled by a homotrimeric PCNA ring, DNA Polymerase ε continuously synthesizes the leading strand in the 5'→3' direction.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Rep_PolEpsilon"
      },
      {
        "step": 3,
        "title": "3 : RPA Coating & Pol α–Primase RNA-DNA Initiation",
        "desc": "As single-stranded lagging template loops out coated by RPA, the Ctf4-tethered Pol α–Primase syn...",
        "spoken": "Stage 3 — RPA Coating & Pol α–Primase RNA-DNA Initiation. As single-stranded lagging template loops out coated by RPA, the Ctf4-tethered Pol α–Primase synthesizes a ~10 nt RNA primer and extends it by ~20 nt of DNA before handing off.",
        "color": "#FFB703",
        "targetPiece": "Piece_Rep_PCNAClamps"
      },
      {
        "step": 4,
        "title": "4 : RFC Clamp Loading & Pol δ Okazaki Fragment Extension",
        "desc": "Pentameric RFC binds the 3'-OH primer junction, uses ATP to snap a homotrimeric PCNA sliding cla...",
        "spoken": "Stage 4 — RFC Clamp Loading & Pol δ Okazaki Fragment Extension. Pentameric RFC binds the 3'-OH primer junction, uses ATP to snap a homotrimeric PCNA sliding clamp ring around the DNA, and recruits high-fidelity Pol δ to synthesize a ~180 nt Okazaki fragment.",
        "color": "#F77F00",
        "targetPiece": "Piece_Rep_PolAlphaPrimase"
      },
      {
        "step": 5,
        "title": "5 : PCNA Toolbelt Maturation (FEN1 + Ligase I) & Chromatin Assembly",
        "desc": "When Pol δ collides with the previous Okazaki fragment, it displaces the 5' RNA primer into a fl...",
        "spoken": "Stage 5 — PCNA Toolbelt Maturation (FEN1 + Ligase I) & Chromatin Assembly. When Pol δ collides with the previous Okazaki fragment, it displaces the 5' RNA primer into a flap cleaved by PCNA-bound FEN1, DNA Ligase I seals the nick, and CAF-1 deposits (H3–H4)₂ tetramers immediately behind the fork.",
        "color": "#E63946",
        "targetPiece": "Piece_Rep_PolDeltaLigase"
      }
    ]
  },
  {
    "num": "30",
    "id": "pol_ii_mediator_preinitiation",
    "folder": "30_pol_ii_mediator_preinitiation",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "TRANSCRIPTION FACTORY: RNA POLYMERASE II, 26-SUBUNIT MEDIATOR BRIDGE, TFIID/TFIIH PRE-INITIATION COMPLEX & 5'-CAPPING",
    "subtitle": "Unlike bacterial RNA Polymerase (which directly recognizes -35/-10 promoters via a single σ-factor), eukaryotic RNA Polymerase II (a 12-subunit, 550 kDa enzyme that trans...",
    "analogy": "Renders the ~4 MDa human Mediator–PIC supercomplex assembled on a looped enhancer–promoter junction: shows TBP kinking the TATA box by 80°, TFIIB/E/F positioning the 12-subunit RNA Pol II, TFIIH (XPB translocase melting the transcription bubble + CDK7 kinase phosphorylating the Rpb1 CTD heptad tail), the 26-subunit Mediator bridge to enhancer TFs, and co-transcriptional m⁷G 5'-capping.",
    "scaleTag": "EUKARYOTE SCENARIO 30 • 40 NM, ~4 MDA MEDIATOR–RNA POL II PRE-INITIATION SUPERCOMPLEX (PIC) • PDB: 7LBM / 1YTB",
    "glb": "/eukaryote/models/pol_ii_mediator_preinitiation.glb",
    "pdb": "7LBM, 1YTB",
    "pronounce": "[pol-ii-mediator-preinitiation]",
    "sliderLabel": "RPB1 CTD HEPTAD TAIL PHOSPHORYLATION STATE (Y₁S₂P₃T₄S₅P₆S₇):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ α-Amanitin Death-Cap M",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ NTP Pyrophosphate Hy",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cohesin/CTCF enhancer–promoter chromatin looping & HAT nucleosome opening (Scenario 28) + Nuclear import of activated Transcr",
    "coupling": "Inputs: Open Euchromatic Core Promoter + Looped Enhancer DNA bound ➔ Outputs: 5'-m⁷G-Capped Nascent Pre-mRNA transcript emerging from th",
    "downstream": "Co-transcriptionally hands the emerging pre-mRNA directly to the Spliceosome (Scenario 31) for intron excision and to CPSF/PA",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Pol II elongation velocity ~30–70 nt/sec (~2"
      ],
      [
        "ENERGY CURRENCY",
        "NTP Pyrophosphate Hydrolysis + TFIIH XPB ATP"
      ],
      [
        "BIOPHYSICAL SCALE",
        "40 nm, ~4 MDa Mediator–RNA Pol II Pre-Initia"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7LBM & 1YTB"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: RNA Polymerase II & TATA-Binding Protein",
        "url": "https://pdb101.rcsb.org/motm/67"
      },
      {
        "title": "RCSB PDB Structure 7LBM — Human Mediator-Bound RNA Pol II Pre-Initiation Complex",
        "url": "https://www.rcsb.org/structure/7LBM"
      },
      {
        "title": "RCSB PDB Structure 1YTB — TATA-Box Binding Protein (TBP)–DNA Complex",
        "url": "https://www.rcsb.org/structure/1YTB"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: From DNA to RNA (Eukaryotic Transcription)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26887/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_PIC_RNAPolII",
        "name": "12-Subunit RNA Polymerase II Core",
        "badge": "RNAPOL",
        "color": "#06D6A0",
        "desc": "12-Subunit RNA Polymerase II Core (Rpb1–Rpb12 Active Cleft & Trigger Loop). Structural source: 7LBM RNA Pol II Core. Color taxonomy: Pol II Core Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_PIC_Mediator26",
        "name": "26-Subunit Mediator Coactivator…",
        "badge": "MEDIAT",
        "color": "#7209B7",
        "desc": "26-Subunit Mediator Coactivator Bridge (Head, Middle & Tail Modules). Structural source: 7LBM Mediator Complex. Color taxonomy: Mediator Bridge Purple (#7209B7).",
        "dissocVector": [
          0.0,
          4.2,
          -1.0
        ]
      },
      {
        "meshName": "Piece_PIC_TBP_TFIID",
        "name": "TFIID / TATA-Box Binding Protein",
        "badge": "TFIID",
        "color": "#FFB703",
        "desc": "TFIID / TATA-Box Binding Protein (TBP Saddle Bending DNA 80°) & TFIIA/B/F. Structural source: 1YTB / 7LBM TBP–TFIIB Saddle. Color taxonomy: TBP Saddle Gold (#FFB703).",
        "dissocVector": [
          -4.2,
          -1.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_PIC_TFIIH_HeliKin",
        "name": "10-Subunit TFIIH",
        "badge": "HELIKIN",
        "color": "#E63946",
        "desc": "10-Subunit TFIIH (XPB DNA Translocase + CDK7/Cyclin H CTD Kinase Module). Structural source: 7LBM TFIIH Core & CAK. Color taxonomy: TFIIH Helicase Crimson (#E63946).",
        "dissocVector": [
          4.2,
          -1.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_PIC_CTDTail_Cap",
        "name": "Rpb1 C-Terminal Domain",
        "badge": "CAP",
        "color": "#F77F00",
        "desc": "Rpb1 C-Terminal Domain (52 × YSPTSPS Heptads) & m⁷G 5'-Capping Enzyme. Structural source: 3J0K Capping Enzyme on Pol II. Color taxonomy: CTD & Capping Amber (#F77F00).",
        "dissocVector": [
          3.0,
          -3.8,
          2.0
        ]
      },
      {
        "meshName": "Piece_PIC_PromoterBubble",
        "name": "Enhancer–Promoter DNA Loop, Melt…",
        "badge": "PROMOT",
        "color": "#0077B6",
        "desc": "Enhancer–Promoter DNA Loop, Melted 13 bp Transcription Bubble & Pre-mRNA. Structural source: 7LBM Promoter DNA & RNA. Color taxonomy: Promoter DNA Blue (#0077B6).",
        "dissocVector": [
          -2.5,
          -3.8,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : TBP Saddle Binding & 80° TATA Promoter Kinking",
        "desc": "TFIID recognizes the core promoter; its saddle-shaped TBP subunit inserts two pairs of phenylala...",
        "spoken": "Stage 1 — TBP Saddle Binding & 80° TATA Promoter Kinking. TFIID recognizes the core promoter; its saddle-shaped TBP subunit inserts two pairs of phenylalanines into the DNA minor groove, bending the helix by 80° and recruiting TFIIA and TFIIB.",
        "color": "#06D6A0",
        "targetPiece": "Piece_PIC_RNAPolII"
      },
      {
        "step": 2,
        "title": "2 : Mediator Bridge Assembly & Pol II–TFIIF Docking",
        "desc": "Activator TFs on a looped enhancer bind the Tail module of the 26-subunit Mediator complex, whos...",
        "spoken": "Stage 2 — Mediator Bridge Assembly & Pol II–TFIIF Docking. Activator TFs on a looped enhancer bind the Tail module of the 26-subunit Mediator complex, whose Head and Middle modules cradle the 12-subunit RNA Pol II (with Unphosphorylated CTD) over the start site.",
        "color": "#7209B7",
        "targetPiece": "Piece_PIC_Mediator26"
      },
      {
        "step": 3,
        "title": "3 : TFIIH XPB DNA Pumping & Transcription Bubble Melting",
        "desc": "TFIIE recruits the 10-subunit TFIIH complex; its XPB translocase grips downstream DNA and pumps ...",
        "spoken": "Stage 3 — TFIIH XPB DNA Pumping & Transcription Bubble Melting. TFIIE recruits the 10-subunit TFIIH complex; its XPB translocase grips downstream DNA and pumps it backward into the Pol II cleft, torsionally melting an 11–15 bp open transcription bubble.",
        "color": "#FFB703",
        "targetPiece": "Piece_PIC_TBP_TFIID"
      },
      {
        "step": 4,
        "title": "4 : CDK7 Ser5-P Phosphorylation & Promoter Escape",
        "desc": "The CDK7 kinase module of TFIIH phosphorylates Ser5 across the 52 YSPTSPS repeats of the Rpb1 CT...",
        "spoken": "Stage 4 — CDK7 Ser5-P Phosphorylation & Promoter Escape. The CDK7 kinase module of TFIIH phosphorylates Ser5 across the 52 YSPTSPS repeats of the Rpb1 CTD tail, breaking Pol II's grip on Mediator and launching promoter escape.",
        "color": "#E63946",
        "targetPiece": "Piece_PIC_TFIIH_HeliKin"
      },
      {
        "step": 5,
        "title": "5 : Co-Transcriptional m⁷GpppN 5'-Capping & P-TEFb Elongation",
        "desc": "Once ~25 nt of pre-mRNA emerge, Ser5-P recruits the Capping Enzyme (RNA triphosphatase, guanylyl...",
        "spoken": "Stage 5 — Co-Transcriptional m⁷GpppN 5'-Capping & P-TEFb Elongation. Once ~25 nt of pre-mRNA emerge, Ser5-P recruits the Capping Enzyme (RNA triphosphatase, guanylyltransferase, and N7-methyltransferase) to add the protective 5'-m⁷G cap before P-TEFb (CDK9) phosphorylates Ser2-P for full-speed elongation.",
        "color": "#F77F00",
        "targetPiece": "Piece_PIC_CTDTail_Cap"
      }
    ]
  },
  {
    "num": "31",
    "id": "spliceosome_rna_lariat_rings",
    "folder": "31_spliceosome_rna_lariat_rings",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE SPLICEOSOME (U1–U6 SNRNPS): INTRON EXCISION, RNA LARIAT RINGS, EXON LIGATION & EXON JUNCTION COMPLEX (EJC)",
    "subtitle": "Over 95% of human multi-exon pre-mRNAs contain non-coding Introns (often 10× longer than coding Exons) that must be excised with single-nucleotide precision by the Splice...",
    "analogy": "Renders the catalytic human Spliceosome (Prp8 cradle, U2/U6 snRNA catalytic Mg²⁺ active site, U5 loop holding Exon 1, and heptameric Sm rings) executing both transesterification steps: highlights the 2'-OH Branch-Point Adenosine attack that loops the intron into a glowing **2'-5' RNA Lariat Ring**, followed by Exon 1–Exon 2 ligation and EJC deposition.",
    "scaleTag": "EUKARYOTE SCENARIO 31 • 30 NM DYNAMIC METALLO-RIBOZYME MACHINE (~150 PROTEINS + 5 SNRNAS) & 2'-5' RNA LARIAT RING • PDB: 5Z56 / 2P89",
    "glb": "/eukaryote/models/spliceosome_rna_lariat_rings.glb",
    "pdb": "5Z56, 2P89",
    "pronounce": "[spliceosome-rna-lariat-rings]",
    "sliderLabel": "CATALYTIC TRANSESTERIFICATION STEP SELECTOR:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ DExD/H-Box RNA Helicas",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Transesterification ",
      "🛑 Energy Depleted"
    ],
    "upstream": "RNA Polymerase II elongating with Ser2-P CTD tail & 5'-m⁷G Capped pre-mRNA (Scenario 30) + SR proteins & hnRNPs defining exon",
    "coupling": "Inputs: 5'-m⁷G-Capped Pre-mRNA containing Exon 1 — [5'-GU Intron . ➔ Outputs: Mature Spliced mRNA (Exon 1–Exon 2 ligated) decorated with",
    "downstream": "Exports EJC-marked mature mRNAs through the Nuclear Pore Complex (Scenario 27) to Cytoplasmic 80S Ribosomes for pioneer trans",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Co-transcriptional intron removal in ~15–60 "
      ],
      [
        "ENERGY CURRENCY",
        "Transesterification is isoenergetic (2 phosp"
      ],
      [
        "BIOPHYSICAL SCALE",
        "30 nm Dynamic Metallo-Ribozyme Machine (~150"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5Z56 & 2P89"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Spliceosomes",
        "url": "https://pdb101.rcsb.org/motm/210"
      },
      {
        "title": "RCSB PDB Structure 5Z56 — Cryo-EM Structure of the Human Catalytic Step I Spliceosome",
        "url": "https://www.rcsb.org/structure/5Z56"
      },
      {
        "title": "RCSB PDB Structure 2P89 — Heptameric Sm Core Ring of Human Spliceosomal snRNPs",
        "url": "https://www.rcsb.org/structure/2P89"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: RNA Splicing & the Spliceosome",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26887/#_A1095_"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Splice_Prp8Core",
        "name": "Prp8 Master Scaffold Cradle & Ni…",
        "badge": "PRP8CO",
        "color": "#0077B6",
        "desc": "Prp8 Master Scaffold Cradle & NineTeen Complex (NTC). Structural source: 5Z56 Prp8 Core. Color taxonomy: Prp8 Cradle Blue (#0077B6).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Splice_U2U6Ribozyme",
        "name": "U2/U6 snRNA Catalytic Ribozyme C…",
        "badge": "U2U6RI",
        "color": "#FFB703",
        "desc": "U2/U6 snRNA Catalytic Ribozyme Core & Two-Mg²⁺ Active Site (M1/M2). Structural source: 5Z56 U2/U6 snRNA Core. Color taxonomy: Catalytic Ribozyme Gold (#FFB703).",
        "dissocVector": [
          0.0,
          0.8,
          2.0
        ]
      },
      {
        "meshName": "Piece_Splice_SmRings",
        "name": "Heptameric Sm & LSm Protein Toro…",
        "badge": "SMRINGS",
        "color": "#7209B7",
        "desc": "Heptameric Sm & LSm Protein Toroidal Rings Encircling U1/U2/U5 snRNAs. Structural source: 2P89 / 5Z56 Sm Heptamer Rings. Color taxonomy: Sm Ring Royal Purple (#7209B7).",
        "dissocVector": [
          -4.2,
          2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Splice_IntronLariat",
        "name": "Excised 2'-5' Branched Intron RN…",
        "badge": "INTRON",
        "color": "#E63946",
        "desc": "Excised 2'-5' Branched Intron RNA Lariat Ring (Branch-Point Adenosine). Structural source: 5Z56 Intron Lariat Loop. Color taxonomy: RNA Lariat Ring Crimson (#E63946).",
        "dissocVector": [
          3.8,
          2.2,
          1.8
        ]
      },
      {
        "meshName": "Piece_Splice_Exons_EJC",
        "name": "Ligated 5'-Exon 1 & 3'-Exon 2 wi…",
        "badge": "EJC",
        "color": "#06D6A0",
        "desc": "Ligated 5'-Exon 1 & 3'-Exon 2 with Deposited Exon Junction Complex (EJC). Structural source: 5Z56 Exons & eIF4A3 EJC. Color taxonomy: Ligated Exon Jade (#06D6A0).",
        "dissocVector": [
          -2.5,
          -3.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Splice_HelicaseMotors",
        "name": "ATP-Dependent DExD/H-Box RNA Hel…",
        "badge": "HELICA",
        "color": "#F77F00",
        "desc": "ATP-Dependent DExD/H-Box RNA Helicases (Brr2, Prp2, Prp16, Prp22, Prp43). Structural source: 5Z56 Brr2 / Prp16 Helicases. Color taxonomy: Helicase Motor Amber (#F77F00).",
        "dissocVector": [
          3.5,
          -3.2,
          -1.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Splice Site Recognition (U1 at 5'-GU & U2 at Branch-Point A)",
        "desc": "As the intron emerges from RNA Pol II, U1 snRNP base-pairs with the 5' GU splice site while U2 s...",
        "spoken": "Stage 1 — Splice Site Recognition (U1 at 5'-GU & U2 at Branch-Point A). As the intron emerges from RNA Pol II, U1 snRNP base-pairs with the 5' GU splice site while U2 snRNP base-pairs with the branch site, extruding the reactive Branch-Point Adenosine (BPA) with its exposed 2'-OH.",
        "color": "#0077B6",
        "targetPiece": "Piece_Splice_Prp8Core"
      },
      {
        "step": 2,
        "title": "2 : Tri-snRNP Recruitment & Brr2 Helicase Activation (B → B*)",
        "desc": "The U4/U6.U5 tri-snRNP joins; Brr2 and Prp28 helicases hydrolyze ATP to unwind U4/U6 and eject U...",
        "spoken": "Stage 2 — Tri-snRNP Recruitment & Brr2 Helicase Activation (B → B*). The U4/U6.U5 tri-snRNP joins; Brr2 and Prp28 helicases hydrolyze ATP to unwind U4/U6 and eject U1/U4, allowing U6 snRNA to fold with U2 snRNA and position two catalytic Mg²⁺ ions (M1 and M2).",
        "color": "#FFB703",
        "targetPiece": "Piece_Splice_U2U6Ribozyme"
      },
      {
        "step": 3,
        "title": "3 : Step 1 Transesterification: 2'-5' RNA Lariat Ring Formation",
        "desc": "Activated by Mg²⁺ M2, the 2'-OH of the Branch-Point Adenosine attacks the 5' splice-site phospho...",
        "spoken": "Stage 3 — Step 1 Transesterification: 2'-5' RNA Lariat Ring Formation. Activated by Mg²⁺ M2, the 2'-OH of the Branch-Point Adenosine attacks the 5' splice-site phosphodiester bond, cleaving Exon 1 and looping the 5' end of the intron into a covalent **2'-5' Branched RNA Lariat Ring**.",
        "color": "#7209B7",
        "targetPiece": "Piece_Splice_SmRings"
      },
      {
        "step": 4,
        "title": "4 : Prp16 Remodeling & Step 2 Exon–Exon Ligation",
        "desc": "Prp16 ATPase remodels the C complex into C*; U5 snRNA Loop 1 aligns the freed 3'-OH of Exon 1 to...",
        "spoken": "Stage 4 — Prp16 Remodeling & Step 2 Exon–Exon Ligation. Prp16 ATPase remodels the C complex into C*; U5 snRNA Loop 1 aligns the freed 3'-OH of Exon 1 to attack the 3' AG splice site, ligating Exon 1 to Exon 2 into a continuous coding ORF.",
        "color": "#E63946",
        "targetPiece": "Piece_Splice_IntronLariat"
      },
      {
        "step": 5,
        "title": "5 : EJC Deposition, Prp22/Prp43 Release & Lariat Ring Debranching",
        "desc": "An Exon Junction Complex (EJC: eIF4A3, MAGOH, Y14) clamps 24 nt upstream of the splice junction ...",
        "spoken": "Stage 5 — EJC Deposition, Prp22/Prp43 Release & Lariat Ring Debranching. An Exon Junction Complex (EJC: eIF4A3, MAGOH, Y14) clamps 24 nt upstream of the splice junction for nuclear export, while Prp43 releases the Intron Lariat Ring to be debranched by DBR1 or matured into snoRNAs/circRNAs.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Splice_Exons_EJC"
      }
    ]
  },
  {
    "num": "32",
    "id": "eukaryotic_80s_ribosome_polyrna_loop",
    "folder": "32_eukaryotic_80s_ribosome_polyrna_loop",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "CYTOPLASMIC TRANSLATION: THE 80S RIBOSOME (60S + 40S) & CIRCULAR CLOSED-LOOP POLYSOME (M⁷G–EIF4E–EIF4G–PABP–POLYA)",
    "subtitle": "Whereas prokaryotic 70S ribosomes (2.5 MDa) initiate translation directly on nascent mRNAs via Shine–Dalgarno base-pairing, eukaryotic cytoplasmic translation uses a larg...",
    "analogy": "Renders the circularized **Closed-Loop Polysome Ring** in the cytosol: shows a full-length mRNA bent into a circle by the 5'-m⁷G Cap–eIF4E–eIF4G–PABP–3'-Poly(A) bridge, with 43S initiation complexes scanning the 5'-UTR, multiple 80S ribosomes (40S + 60S) translating in series with A/P/E-site tRNAs and glowing nascent polypeptides, and eRF1/eRF3/ABCE1 recycling subunits directly from the 3' stop codon back to the 5' cap.",
    "scaleTag": "EUKARYOTE SCENARIO 32 • 28 NM, 4.3 MDA 80S RIBOSOME & 150 NM CIRCULARIZED CLOSED-LOOP POLYSOME RING • PDB: 4V6X / 7QP6",
    "glb": "/eukaryote/models/eukaryotic_80s_ribosome_polyrna_loop.glb",
    "pdb": "4V6X, 7QP6",
    "pronounce": "[eukaryotic-80s-ribosome-polyrna-loop]",
    "sliderLabel": "EIF4E–EIF4G–PABP CIRCULAR MRNA CLOSED-LOOP STATE (MTORC1 / 4E-BP1 CONTROL):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Pioneer Round Exon Jun",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 1 ATP (tRNA charging",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nucleolar Pre-40S/60S subunit biogenesis (Scenario 26) + Spliceosome mRNA maturation (Scenario 31) + NPC nuclear export (Scen",
    "coupling": "Inputs: Exported Mature mRNA (with 5'-m⁷GpppN Cap, 5'-UTR, Coding  ➔ Outputs: Newly synthesized cytosolic, nuclear, mitochondrial/peroxi",
    "downstream": "Delivers nascent polypeptides to TRiC/CCT & Hsp70/Hsp90 chaperones (Scenario 34), Rough ER Sec61 (Scenario 13), Mitochondria ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Eukaryotic 80S ribosome translates at ~5–9 a"
      ],
      [
        "ENERGY CURRENCY",
        "1 ATP (tRNA charging) + 2 GTP (eEF1A decodin"
      ],
      [
        "BIOPHYSICAL SCALE",
        "28 nm, 4.3 MDa 80S Ribosome & 150 nm Circula"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4V6X & 7QP6"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Eukaryotic Ribosomes & Initiation Factors",
        "url": "https://pdb101.rcsb.org/motm/121"
      },
      {
        "title": "RCSB PDB Structure 4V6X — High-Resolution Cryo-EM Structure of the Human 80S Ribosome",
        "url": "https://www.rcsb.org/structure/4V6X"
      },
      {
        "title": "RCSB PDB Structure 7QP6 — Human 48S Translation Initiation Complex",
        "url": "https://www.rcsb.org/structure/7QP6"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: From RNA to Protein (Eukaryotic Translation)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26829/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Rib80_60SLarge",
        "name": "60S Large Ribosomal Subunit",
        "badge": "60SLAR",
        "color": "#7209B7",
        "desc": "60S Large Ribosomal Subunit (28S, 5.8S, 5S rRNA + 47 RPLs & PTC). Structural source: 4V6X 60S Large Subunit. Color taxonomy: 60S Subunit Purple (#7209B7).",
        "dissocVector": [
          0.0,
          1.8,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rib80_40SSmall",
        "name": "40S Small Ribosomal Subunit",
        "badge": "40SSMA",
        "color": "#00B4D8",
        "desc": "40S Small Ribosomal Subunit (18S rRNA + 33 RPSs & Decoding Center). Structural source: 4V6X 40S Small Subunit. Color taxonomy: 40S Subunit Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          -1.8,
          1.0
        ]
      },
      {
        "meshName": "Piece_Rib80_ClosedLoop",
        "name": "Circular mRNA Closed-Loop Bridge",
        "badge": "CLOSED",
        "color": "#FFB703",
        "desc": "Circular mRNA Closed-Loop Bridge (5'-m⁷G Cap + eIF4E–eIF4G–PABP + 3'-PolyA). Structural source: 7QP6 eIF4F–PABP Cap-Tail Bridge. Color taxonomy: Closed-Loop Bridge Gold (#FFB703).",
        "dissocVector": [
          -4.5,
          0.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_Rib80_tRNAs_EFs",
        "name": "A/P/E-Site tRNAs, eEF1A-GTP Tern…",
        "badge": "EFS",
        "color": "#E63946",
        "desc": "A/P/E-Site tRNAs, eEF1A-GTP Ternary Complex & eEF2 Translocase. Structural source: 4V6X tRNAs & Elongation Factors. Color taxonomy: tRNA & eEF Crimson (#E63946).",
        "dissocVector": [
          2.2,
          0.0,
          2.2
        ]
      },
      {
        "meshName": "Piece_Rib80_PolysomeRing",
        "name": "Circularized Polysome mRNA Track…",
        "badge": "POLYSO",
        "color": "#0077B6",
        "desc": "Circularized Polysome mRNA Track & ABCE1 Termination/Recycling Splitter. Structural source: Polysome Closed-Loop mRNA. Color taxonomy: Polysome mRNA Blue (#0077B6).",
        "dissocVector": [
          4.2,
          -2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rib80_NascentChain",
        "name": "Emerging Nascent Polypeptide Cha…",
        "badge": "NASCEN",
        "color": "#06D6A0",
        "desc": "Emerging Nascent Polypeptide Chain & Co-Translational NAC/Hsp70 Chaperone. Structural source: Nascent Peptide Chain. Color taxonomy: Nascent Chain Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.5,
          1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : 5'-Cap to 3'-Poly(A) Circularization (The Closed-Loop mRNA Ring)",
        "desc": "eIF4E binds the 5' m⁷G cap, PABP coats the 3' Poly(A) tail, and the scaffold protein eIF4G bridg...",
        "spoken": "Stage 1 — 5'-Cap to 3'-Poly(A) Circularization (The Closed-Loop mRNA Ring). eIF4E binds the 5' m⁷G cap, PABP coats the 3' Poly(A) tail, and the scaffold protein eIF4G bridges them together, bending the mRNA into a topologically closed ring.",
        "color": "#7209B7",
        "targetPiece": "Piece_Rib80_60SLarge"
      },
      {
        "step": 2,
        "title": "2 : 43S Pre-Initiation Recruitment & eIF4A 5'-UTR Scanning",
        "desc": "Multi-subunit eIF3 recruits the 40S subunit (loaded with eIF2-GTP-Met-tRNAᵢᴹᵉᵗ) to the 5' cap; e...",
        "spoken": "Stage 2 — 43S Pre-Initiation Recruitment & eIF4A 5'-UTR Scanning. Multi-subunit eIF3 recruits the 40S subunit (loaded with eIF2-GTP-Met-tRNAᵢᴹᵉᵗ) to the 5' cap; eIF4A uses ATP to melt 5'-UTR secondary structure as the complex scans 5'→3' to the Kozak AUG start codon.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Rib80_40SSmall"
      },
      {
        "step": 3,
        "title": "3 : 60S Subunit Joining (eIF5B-GTP) & 80S Assembly",
        "desc": "Base-pairing of Met-tRNAᵢᴹᵉᵗ with AUG triggers eIF2 GTP hydrolysis and factor release, while eIF...",
        "spoken": "Stage 3 — 60S Subunit Joining (eIF5B-GTP) & 80S Assembly. Base-pairing of Met-tRNAᵢᴹᵉᵗ with AUG triggers eIF2 GTP hydrolysis and factor release, while eIF5B-GTP clamps the 60S Large Subunit onto the 40S to form the complete 80S ribosome with Met-tRNAᵢᴹᵉᵗ in the P-site.",
        "color": "#FFB703",
        "targetPiece": "Piece_Rib80_ClosedLoop"
      },
      {
        "step": 4,
        "title": "4 : Elongation Cycle (eEF1A Decoding, 28S PTC & eEF2 Translocation)",
        "desc": "eEF1A-GTP delivers cognate aminoacyl-tRNAs to the A-site; the 28S rRNA Peptidyl Transferase Cent...",
        "spoken": "Stage 4 — Elongation Cycle (eEF1A Decoding, 28S PTC & eEF2 Translocation). eEF1A-GTP delivers cognate aminoacyl-tRNAs to the A-site; the 28S rRNA Peptidyl Transferase Center (PTC) forms the peptide bond, and eEF2-GTP translocates the ribosome 3 nucleotides along the circular mRNA.",
        "color": "#E63946",
        "targetPiece": "Piece_Rib80_tRNAs_EFs"
      },
      {
        "step": 5,
        "title": "5 : Termination (eRF1/eRF3) & Closed-Loop Subunit Recycling (ABCE1)",
        "desc": "At the UAA/UAG/UGA stop codon, structural tRNA mimic eRF1 (delivered by eRF3-GTP) hydrolyzes the...",
        "spoken": "Stage 5 — Termination (eRF1/eRF3) & Closed-Loop Subunit Recycling (ABCE1). At the UAA/UAG/UGA stop codon, structural tRNA mimic eRF1 (delivered by eRF3-GTP) hydrolyzes the finished protein; the twin-ATPase ABCE1 splits the 80S into 40S and 60S subunits right next to the 5' cap for instant re-initiation.",
        "color": "#0077B6",
        "targetPiece": "Piece_Rib80_PolysomeRing"
      }
    ]
  },
  {
    "num": "33",
    "id": "risc_argonaute_dicer_rna_silencing",
    "folder": "33_risc_argonaute_dicer_rna_silencing",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "RNA INTERFERENCE (RNAI) & POST-TRANSCRIPTIONAL SILENCING: DICER MOLECULAR RULER, ARGONAUTE-2 (RISC) & GW182",
    "subtitle": "Whereas prokaryotes defend against foreign nucleic acids using DNA-targeting CRISPR-Cas systems, eukaryotes evolved RNA Interference (RNAi) and microRNA (miRNA) pathways ...",
    "analogy": "Visualizes the two-stage cytoplasmic RNAi pipeline: (1) L-shaped human Dicer–TRBP measuring 22 bp from the PAZ domain to its RNase III catalytic cleft to dice a pre-miRNA hairpin; (2) Bilobed Argonaute-2 (MID/PAZ/PIWI) displaying the 22 nt guide RNA seed region (nt 2–8), base-pairing with a target mRNA 3'-UTR to either slice it endonucleolytically or recruit GW182 and CCR4–NOT deadenylase to break the Closed-Loop Polysome.",
    "scaleTag": "EUKARYOTE SCENARIO 33 • 10–15 NM DICER ENDONUCLEASE RULER & ARGONAUTE-2 (AGO2) RISC SILENCING COMPLEX • PDB: 4W5N / 5ZAL",
    "glb": "/eukaryote/models/risc_argonaute_dicer_rna_silencing.glb",
    "pdb": "4W5N, 5ZAL",
    "pronounce": "[risc-argonaute-dicer-rna-silencing]",
    "sliderLabel": "GUIDE–TARGET BASE-PAIRING MODE (SIRNA SLICER VS. MIRNA DEADENYLATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ GW182 / P-Body Phase-S",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP used once during",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nuclear Pol II pri-miRNA transcription (Scenario 30) + Drosha/DGCR8 cropping + Exportin-5/RanGTP nuclear export through NPC (",
    "coupling": "Inputs: Exported ~70 nt Pre-miRNA Hairpin (with 5'-monophosphate a ➔ Outputs: Mature 21–22 nt Guide RNA–Argonaute-2 (Holo-RISC) surveill",
    "downstream": "Directly throttles Cytoplasmic 80S Translation and breaks the Closed-Loop Polysome Ring (Scenario 32), routing silenced mRNAs",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Ago2 seed-scanning is diffusion-limited (~3×"
      ],
      [
        "ENERGY CURRENCY",
        "ATP used once during Hsp70/Hsp90-assisted du"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10–15 nm Dicer Endonuclease Ruler & Argonaut"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4W5N & 5ZAL"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Argonaute & Dicer (RNA Interference)",
        "url": "https://pdb101.rcsb.org/motm/218"
      },
      {
        "title": "RCSB PDB Structure 4W5N — Human Argonaute-2 Bound to Guide and Target RNAs",
        "url": "https://www.rcsb.org/structure/4W5N"
      },
      {
        "title": "RCSB PDB Structure 5ZAL — Cryo-EM Structure of Human Dicer–TRBP–Pre-let-7 Complex",
        "url": "https://www.rcsb.org/structure/5ZAL"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Post-Transcriptional Controls & RNA Interference",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26896/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_RISC_DicerRuler",
        "name": "Human Dicer–TRBP Molecular Ruler",
        "badge": "DICERR",
        "color": "#00B4D8",
        "desc": "Human Dicer–TRBP Molecular Ruler (PAZ Cap, Platform & Twin RNase IIIa/b). Structural source: 5ZAL Dicer–TRBP Complex. Color taxonomy: Dicer Ruler Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_RISC_Ago2Bilobe",
        "name": "Argonaute-2",
        "badge": "AGO2BI",
        "color": "#7209B7",
        "desc": "Argonaute-2 (Ago2) Bilobed Core (N, PAZ, MID & Catalytic PIWI Slicer). Structural source: 4W5N Human Argonaute-2. Color taxonomy: Ago2 Core Purple (#7209B7).",
        "dissocVector": [
          1.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_RISC_GuideSeedRNA",
        "name": "22-nt Guide miRNA / siRNA Strand",
        "badge": "GUIDES",
        "color": "#FFB703",
        "desc": "22-nt Guide miRNA / siRNA Strand (5'-Phosphate in MID & Seed nt 2–8). Structural source: 4W5N Guide RNA Strand. Color taxonomy: Guide Seed RNA Gold (#FFB703).",
        "dissocVector": [
          1.0,
          0.8,
          2.0
        ]
      },
      {
        "meshName": "Piece_RISC_TargetmRNA",
        "name": "Target mRNA 3'-UTR Base-Paired i…",
        "badge": "TARGET",
        "color": "#0077B6",
        "desc": "Target mRNA 3'-UTR Base-Paired in the Ago2 Central Cleft. Structural source: 4W5N Target mRNA. Color taxonomy: Target mRNA Blue (#0077B6).",
        "dissocVector": [
          2.5,
          -1.5,
          1.8
        ]
      },
      {
        "meshName": "Piece_RISC_PreMiRNAHairpin",
        "name": "70-nt Pre-miRNA Stem-Loop Hairpi…",
        "badge": "PREMIR",
        "color": "#E63946",
        "desc": "70-nt Pre-miRNA Stem-Loop Hairpin Docked in Dicer PAZ/Helicase. Structural source: 5ZAL Pre-miRNA Hairpin. Color taxonomy: Pre-miRNA Hairpin Crimson (#E63946).",
        "dissocVector": [
          -4.5,
          -2.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_RISC_GW182_CCR4",
        "name": "TNRC6 / GW182 Tryptophan-Hook Sc…",
        "badge": "CCR4",
        "color": "#06D6A0",
        "desc": "TNRC6 / GW182 Tryptophan-Hook Scaffold & CCR4–NOT Deadenylase Complex. Structural source: 6Y3Z GW182–CCR4–NOT Module. Color taxonomy: GW182 Deadenylase Jade (#06D6A0).",
        "dissocVector": [
          4.8,
          2.2,
          -1.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Pre-miRNA Export & Dicer PAZ Domain Anchoring",
        "desc": "Exported ~70 nt pre-miRNA hairpins are captured by Dicer–TRBP; the Dicer PAZ domain pockets the ...",
        "spoken": "Stage 1 — Pre-miRNA Export & Dicer PAZ Domain Anchoring. Exported ~70 nt pre-miRNA hairpins are captured by Dicer–TRBP; the Dicer PAZ domain pockets the 2-nt 3' overhang while a basic pocket secures the 5'-monophosphate.",
        "color": "#00B4D8",
        "targetPiece": "Piece_RISC_DicerRuler"
      },
      {
        "step": 2,
        "title": "2 : The 22-Base-Pair Molecular Ruler & RNase III Dicing",
        "desc": "Measuring exactly ~22 bp (~65 Å) along its flat protein ruler from the PAZ domain, Dicer's intra...",
        "spoken": "Stage 2 — The 22-Base-Pair Molecular Ruler & RNase III Dicing. Measuring exactly ~22 bp (~65 Å) along its flat protein ruler from the PAZ domain, Dicer's intramolecular RNase IIIa and IIIb dimer cleaves both RNA strands to release the terminal loop and a 22 bp duplex.",
        "color": "#7209B7",
        "targetPiece": "Piece_RISC_Ago2Bilobe"
      },
      {
        "step": 3,
        "title": "3 : Chaperone-Assisted Ago2 Loading & Passenger Ejection",
        "desc": "Hsp70/Hsp90 chaperones pry open bilobed Argonaute-2 (Ago2) to accept the 22 bp duplex; the stran...",
        "spoken": "Stage 3 — Chaperone-Assisted Ago2 Loading & Passenger Ejection. Hsp70/Hsp90 chaperones pry open bilobed Argonaute-2 (Ago2) to accept the 22 bp duplex; the strand with the less stable 5' end has its 5'-phosphate locked into the MID domain while the passenger strand is cleaved and ejected.",
        "color": "#FFB703",
        "targetPiece": "Piece_RISC_GuideSeedRNA"
      },
      {
        "step": 4,
        "title": "4 : Seed Region Pre-Organization & Target 3'-UTR Scanning",
        "desc": "Ago2 pre-organizes nucleotides 2–8 of the guide RNA into a solvent-exposed A-form helix ('Seed R...",
        "spoken": "Stage 4 — Seed Region Pre-Organization & Target 3'-UTR Scanning. Ago2 pre-organizes nucleotides 2–8 of the guide RNA into a solvent-exposed A-form helix ('Seed Region'), enabling rapid 1D/3D collision scanning along cytoplasmic mRNA 3'-UTRs.",
        "color": "#0077B6",
        "targetPiece": "Piece_RISC_TargetmRNA"
      },
      {
        "step": 5,
        "title": "5 : Slicer Endonuclease Cleavage vs. GW182/CCR4–NOT Deadenylation",
        "desc": "If base-pairing extends through nucleotides 10–11 (siRNA), the Ago2 PIWI domain Mg²⁺ triad slice...",
        "spoken": "Stage 5 — Slicer Endonuclease Cleavage vs. GW182/CCR4–NOT Deadenylation. If base-pairing extends through nucleotides 10–11 (siRNA), the Ago2 PIWI domain Mg²⁺ triad slices the mRNA in half; if pairing is restricted to the seed (typical animal miRNA), Ago2 recruits GW182 and CCR4–NOT to strip the Poly(A) tail and silence translation.",
        "color": "#E63946",
        "targetPiece": "Piece_RISC_PreMiRNAHairpin"
      }
    ]
  },
  {
    "num": "34",
    "id": "chaperonin_tric_26s_proteasome",
    "folder": "34_chaperonin_tric_26s_proteasome",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "EUKARYOTIC PROTEOSTASIS: TRIC/CCT CHAPERONIN FOLDING CAGE, E1–E2–E3 UBIQUITIN CASCADE & THE 26S PROTEASOME",
    "subtitle": "Eukaryotic proteostasis balances two giant barrel-shaped nanomachines that determine the life or death of every cytoplasmic protein: the **TRiC/CCT Chaperonin** (which fo...",
    "analogy": "Renders both eukaryotic proteostasis barrels side by side: (1) the 16-subunit TRiC/CCT hetero-octameric double ring closing its built-in iris lid around nascent Actin/Tubulin delivered by Prefoldin; (2) the E1–E2–E3 K48-polyubiquitination cascade feeding a doomed substrate into the 26S Proteasome (19S Rpn11 deubiquitinase + Rpt1–6 AAA+ unfoldase staircase + 20S α₇β₇β₇α₇ proteolytic barrel).",
    "scaleTag": "EUKARYOTE SCENARIO 34 • 16 NM TRIC/CCT DOUBLE-RING CAGE & 45 NM, 2.5 MDA 26S PROTEASOME MACHINE • PDB: 7LUM / 6MSB",
    "glb": "/eukaryote/models/chaperonin_tric_26s_proteasome.glb",
    "pdb": "7LUM, 6MSB",
    "pronounce": "[chaperonin-tric-26s-proteasome]",
    "sliderLabel": "PROTEOSTASIS PATHWAY FOCUS (TRIC FOLDING VS. UBIQUITIN–PROTEASOME DEGRADATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ TRiC Iris Closure & 19",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ TRiC hydrolyzes ~8 A",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic 80S Ribosome nascent polypeptides (Scenario 32) + ER-Associated Degradation (ERAD) retrotranslocation from Rough ",
    "coupling": "Inputs: For Folding: Unfolded nascent Actin, α/β-Tubulin, or WD40  ➔ Outputs: Natively folded Monomeric G-Actin (for Scenario 09) and α/",
    "downstream": "Folded Actin and Tubulin build the Cytoskeleton and Mitotic Spindle (Scenarios 08, 09, 35); proteasome-generated peptides fee",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "TRiC folding cycle ~30–60 sec; 26S Proteasom"
      ],
      [
        "ENERGY CURRENCY",
        "TRiC hydrolyzes ~8 ATP per iris closure cycl"
      ],
      [
        "BIOPHYSICAL SCALE",
        "16 nm TRiC/CCT Double-Ring Cage & 45 nm, 2.5"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7LUM & 6MSB"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Proteasome & Ubiquitin",
        "url": "https://pdb101.rcsb.org/motm/166"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Chaperonins",
        "url": "https://pdb101.rcsb.org/motm/32"
      },
      {
        "title": "RCSB PDB Structure 7LUM — Human TRiC/CCT Chaperonin Folding Tubulin",
        "url": "https://www.rcsb.org/structure/7LUM"
      },
      {
        "title": "RCSB PDB Structure 6MSB — Substrate-Engaged Human 26S Proteasome Cryo-EM Structure",
        "url": "https://www.rcsb.org/structure/6MSB"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Prot_TRiC_CCT",
        "name": "16-Subunit TRiC/CCT Chaperonin B…",
        "badge": "CCT",
        "color": "#06D6A0",
        "desc": "16-Subunit TRiC/CCT Chaperonin Barrel (CCT1–8 Double Ring & Iris Lid). Structural source: 7LUM Human TRiC/CCT Complex. Color taxonomy: TRiC Chaperonin Jade (#06D6A0).",
        "dissocVector": [
          -4.8,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Prot_PrefoldinClient",
        "name": "Prefoldin Jellyfish Co-Chaperone…",
        "badge": "PREFOL",
        "color": "#00B4D8",
        "desc": "Prefoldin Jellyfish Co-Chaperone & Encapsulated Actin/Tubulin Client. Structural source: 7LUM Prefoldin & Tubulin. Color taxonomy: Prefoldin Client Cerulean (#00B4D8).",
        "dissocVector": [
          -4.8,
          3.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Prot_E1E2E3_UbChain",
        "name": "E1–E2–E3 Ubiquitin Ligase Cascad…",
        "badge": "UBCHAIN",
        "color": "#FFB703",
        "desc": "E1–E2–E3 Ubiquitin Ligase Cascade & K48-Linked Polyubiquitin Tag. Structural source: 1LDK / 6MSB K48-Ubiquitin Chain. Color taxonomy: Ubiquitin Tag Gold (#FFB703).",
        "dissocVector": [
          0.2,
          3.8,
          1.8
        ]
      },
      {
        "meshName": "Piece_Prot_19S_Lid_Rpn11",
        "name": "19S Regulatory Particle Lid",
        "badge": "RPN11",
        "color": "#7209B7",
        "desc": "19S Regulatory Particle Lid (Ubiquitin Receptors & Rpn11 Deubiquitinase). Structural source: 6MSB 19S Lid & Rpn11. Color taxonomy: 19S Lid Purple (#7209B7).",
        "dissocVector": [
          4.2,
          3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Prot_19S_RptRing",
        "name": "19S Hexameric AAA+ Unfoldase Sta…",
        "badge": "RPTRING",
        "color": "#F77F00",
        "desc": "19S Hexameric AAA+ Unfoldase Staircase (Rpt1–Rpt6 Mechanical Puller). Structural source: 6MSB Rpt1–6 AAA+ Ring. Color taxonomy: Rpt AAA+ Unfoldase Amber (#F77F00).",
        "dissocVector": [
          4.2,
          0.8,
          1.2
        ]
      },
      {
        "meshName": "Piece_Prot_20S_CoreBarrel",
        "name": "20S Core Particle Barrel",
        "badge": "COREBA",
        "color": "#E63946",
        "desc": "20S Core Particle Barrel (α₇β₇β₇α₇ Rings with β1/β2/β5 Thr1 Active Sites). Structural source: 6MSB 20S Core Particle. Color taxonomy: 20S Proteolytic Crimson (#E63946).",
        "dissocVector": [
          4.2,
          -2.8,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Prefoldin Handoff & TRiC/CCT Subunit-Specific Recognition",
        "desc": "Jellyfish-shaped Prefoldin captures nascent Actin or Tubulin emerging from the 80S ribosome and ...",
        "spoken": "Stage 1 — Prefoldin Handoff & TRiC/CCT Subunit-Specific Recognition. Jellyfish-shaped Prefoldin captures nascent Actin or Tubulin emerging from the 80S ribosome and delivers it into the open chamber of the hetero-octameric TRiC (CCT1–CCT8) ring.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Prot_TRiC_CCT"
      },
      {
        "step": 2,
        "title": "2 : ATP-Driven Iris Diaphragm Closure & Assisted Folding",
        "desc": "ATP binding across the 8 distinct CCT subunits twists their apical helical protrusions together ...",
        "spoken": "Stage 2 — ATP-Driven Iris Diaphragm Closure & Assisted Folding. ATP binding across the 8 distinct CCT subunits twists their apical helical protrusions together like a camera iris, sealing the chamber without a separate lid and guiding native folding before ADP + Pᵢ release re-opens the cage.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Prot_PrefoldinClient"
      },
      {
        "step": 3,
        "title": "3 : The E1–E2–E3 Ubiquitin Cascade (K48 Death Tagging)",
        "desc": "Terminally misfolded proteins or cell-cycle substrates are recognized by an E3 Ubiquitin Ligase,...",
        "spoken": "Stage 3 — The E1–E2–E3 Ubiquitin Cascade (K48 Death Tagging). Terminally misfolded proteins or cell-cycle substrates are recognized by an E3 Ubiquitin Ligase, which transfers activated Ubiquitin from E1 and E2 enzymes to build a Lys48-linked polyubiquitin chain (≥4 Ub units).",
        "color": "#FFB703",
        "targetPiece": "Piece_Prot_E1E2E3_UbChain"
      },
      {
        "step": 4,
        "title": "4 : 19S Ubiquitin Capture, Rpn11 Deubiquitination & Rpt1–6 Unfolding",
        "desc": "The 19S Regulatory Particle captures the K48-Ub chain via Rpn10/Rpn13; aromatic pore loops of th...",
        "spoken": "Stage 4 — 19S Ubiquitin Capture, Rpn11 Deubiquitination & Rpt1–6 Unfolding. The 19S Regulatory Particle captures the K48-Ub chain via Rpn10/Rpn13; aromatic pore loops of the Rpt1–Rpt6 AAA+ ATPase staircase grab an unstructured tail and pull the polypeptide inward while Rpn11 amputates and recycles the ubiquitin chain.",
        "color": "#7209B7",
        "targetPiece": "Piece_Prot_19S_Lid_Rpn11"
      },
      {
        "step": 5,
        "title": "5 : 20S α-Gate Opening & β1/β2/β5 Threonine-1 Proteolysis",
        "desc": "C-terminal HbYX tails of the Rpt ATPases unlock the 20S α-ring gate, threading the unfolded chai...",
        "spoken": "Stage 5 — 20S α-Gate Opening & β1/β2/β5 Threonine-1 Proteolysis. C-terminal HbYX tails of the Rpt ATPases unlock the 20S α-ring gate, threading the unfolded chain into the central β₇β₇ proteolytic chamber where N-terminal Threonine-1 nucleophiles on β1, β2, and β5 shred it into 7–9 residue peptides.",
        "color": "#F77F00",
        "targetPiece": "Piece_Prot_19S_RptRing"
      }
    ]
  },
  {
    "num": "35",
    "id": "mitotic_spindle_kinetochore_escrt",
    "folder": "35_mitotic_spindle_kinetochore_escrt",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "EUKARYOTIC CELL DIVISION (MITOSIS & CYTOKINESIS): BIPOLAR CENTROSOME SPINDLE, NDC80 KINETOCHORE, APC/C & ESCRT-III ABSCISSION",
    "subtitle": "Whereas bacteria divide by binary fission using a single FtsZ ring, eukaryotic cells must partition 46 replicated sister chromatids with zero errors across a 10 µm **Bipo...",
    "analogy": "Visualizes the grand choreography of eukaryotic Mitosis and Cytokinesis: bipolar Centrosome spindle poles, CENP-A centromeric chromatin, the Ndc80/KMN Kinetochore gripping depolymerizing k-fiber microtubules, Mad2 Spindle Assembly Checkpoint signaling, APC/C–Separase cleavage of Cohesin rings at the Metaphase-to-Anaphase transition, and the Actomyosin Contractile Ring + ESCRT-III/VPS4 spiral severing the intercellular bridge.",
    "scaleTag": "EUKARYOTE SCENARIO 35 • 10 ΜM BIPOLAR MITOTIC SPINDLE, 80 NM KINETOCHORE COUPLER & ESCRT-III SPIRAL • PDB: 5TCS / 6VME",
    "glb": "/eukaryote/models/mitotic_spindle_kinetochore_escrt.glb",
    "pdb": "5TCS, 6VME",
    "pronounce": "[mitotic-spindle-kinetochore-escrt]",
    "sliderLabel": "MITOTIC & CYTOKINETIC STAGE PROGRESSION:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ K-Fiber Depolymerizati",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Microtubule GTP Cap ",
      "🛑 Energy Depleted"
    ],
    "upstream": "S-Phase Replisome DNA duplication & Cohesin sister chromatid cohesion (Scenarios 28–29) + Centrosome duplication & Microtubul",
    "coupling": "Inputs: Replicated, Cohesin-tethered Sister Chromatids with centro ➔ Outputs: Two genetically identical diploid (2n) daughter nuclei wit",
    "downstream": "Completes the eukaryotic cell cycle, resetting both daughter cells into G1 Interphase (Scenario 01 & Scenario 26).",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Human mitosis completes in ~45–60 minutes; A"
      ],
      [
        "ENERGY CURRENCY",
        "Microtubule GTP Cap Strain Energy (~30–50 pN"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10 µm Bipolar Mitotic Spindle, 80 nm Kinetoc"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5TCS & 6VME"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Kinetochore & Centromere",
        "url": "https://pdb101.rcsb.org/motm/220"
      },
      {
        "title": "RCSB PDB Structure 5TCS — Human Centromeric CENP-A Nucleosome Complex",
        "url": "https://www.rcsb.org/structure/5TCS"
      },
      {
        "title": "RCSB PDB Structure 6VME — Cryo-EM Structure of ESCRT-III Helical Filaments with VPS4",
        "url": "https://www.rcsb.org/structure/6VME"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Mitosis & Cytokinesis",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26934/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Mit_SpindlePoles",
        "name": "Bipolar Centrosome Spindle Poles…",
        "badge": "SPINDL",
        "color": "#00B4D8",
        "desc": "Bipolar Centrosome Spindle Poles, k-Fiber Microtubules & Kinesin-5 (Eg5). Structural source: Bipolar Mitotic Spindle. Color taxonomy: Spindle Microtubule Cerulean (#00B4D8).",
        "dissocVector": [
          -4.8,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Mit_ChromatidsCENPA",
        "name": "Condensed Sister Chromatids, Cen…",
        "badge": "CHROMA",
        "color": "#0077B6",
        "desc": "Condensed Sister Chromatids, Centromeric CENP-A Nucleosome & Cohesin Ring. Structural source: 5TCS CENP-A Nucleosome & Chromatid. Color taxonomy: Sister Chromatid Blue (#0077B6).",
        "dissocVector": [
          1.2,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Mit_KinetochoreNdc80",
        "name": "Inner CCAN & Outer Kinetochore K…",
        "badge": "KINETO",
        "color": "#FFB703",
        "desc": "Inner CCAN & Outer Kinetochore KMN Network (57 nm Ndc80/Hec1 Rod & Ska). Structural source: 5TCS / 2VE7 Ndc80 Kinetochore. Color taxonomy: Ndc80 Kinetochore Gold (#FFB703).",
        "dissocVector": [
          -1.5,
          1.5,
          1.8
        ]
      },
      {
        "meshName": "Piece_Mit_SAC_APCC_Separase",
        "name": "Mad2 Spindle Checkpoint",
        "badge": "SEPARA",
        "color": "#E63946",
        "desc": "Mad2 Spindle Checkpoint (MCC), APC/C–Cdc20 E3 Ligase & Separase Protease. Structural source: 5LCW APC/C–MCC Complex. Color taxonomy: SAC & Separase Crimson (#E63946).",
        "dissocVector": [
          1.5,
          3.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Mit_ActomyosinRing",
        "name": "Equatorial RhoA-Activated Actomy…",
        "badge": "ACTOMY",
        "color": "#7209B7",
        "desc": "Equatorial RhoA-Activated Actomyosin II Cytokinetic Contractile Ring. Structural source: Actomyosin Cleavage Furrow Ring. Color taxonomy: Contractile Ring Purple (#7209B7).",
        "dissocVector": [
          4.5,
          2.0,
          -1.0
        ]
      },
      {
        "meshName": "Piece_Mit_ESCRTIII_VPS4",
        "name": "Midbody ESCRT-III",
        "badge": "VPS4",
        "color": "#06D6A0",
        "desc": "Midbody ESCRT-III (CHMP4B) Constriction Spiral & VPS4 AAA+ Severing Ring. Structural source: 6VME ESCRT-III–VPS4 Complex. Color taxonomy: ESCRT-III Abscission Jade (#06D6A0).",
        "dissocVector": [
          4.5,
          -2.5,
          1.2
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Prophase Condensation, Nuclear Envelope Breakdown & Spindle Assembly",
        "desc": "CDK1–Cyclin B phosphorylates Nuclear Lamins to dissolve the nuclear envelope, Condensin compacts...",
        "spoken": "Stage 1 — Prophase Condensation, Nuclear Envelope Breakdown & Spindle Assembly. CDK1–Cyclin B phosphorylates Nuclear Lamins to dissolve the nuclear envelope, Condensin compacts chromosomes, and two Centrosomes push apart via Kinesin-5 (Eg5) to form a bipolar microtubule spindle.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Mit_SpindlePoles"
      },
      {
        "step": 2,
        "title": "2 : Kinetochore Capture (CENP-A → CCAN → Ndc80) & Aurora B Tension Sensing",
        "desc": "Built on centromeric CENP-A nucleosomes, the 57 nm Ndc80/Hec1 rod of the Outer Kinetochore captu...",
        "spoken": "Stage 2 — Kinetochore Capture (CENP-A → CCAN → Ndc80) & Aurora B Tension Sensing. Built on centromeric CENP-A nucleosomes, the 57 nm Ndc80/Hec1 rod of the Outer Kinetochore captures k-fiber microtubule plus-ends; Aurora B kinase detaches syntelic errors until opposite poles pull sister kinetochores under tension.",
        "color": "#0077B6",
        "targetPiece": "Piece_Mit_ChromatidsCENPA"
      },
      {
        "step": 3,
        "title": "3 : Spindle Assembly Checkpoint (SAC) Satisfaction & APC/C Activation",
        "desc": "While even one kinetochore is unattached, it catalyzes the Mad2–Cdc20 Mitotic Checkpoint Complex...",
        "spoken": "Stage 3 — Spindle Assembly Checkpoint (SAC) Satisfaction & APC/C Activation. While even one kinetochore is unattached, it catalyzes the Mad2–Cdc20 Mitotic Checkpoint Complex (MCC) to brake APC/C; once the final chromosome aligns at the Metaphase Plate, MCC disassembles and APC/C–Cdc20 fires.",
        "color": "#FFB703",
        "targetPiece": "Piece_Mit_KinetochoreNdc80"
      },
      {
        "step": 4,
        "title": "4 : Securin Destruction, Separase Cohesin Cleavage & Anaphase A/B",
        "desc": "APC/C polyubiquitinates Securin and Cyclin B for 26S Proteasome destruction, freeing Separase to...",
        "spoken": "Stage 4 — Securin Destruction, Separase Cohesin Cleavage & Anaphase A/B. APC/C polyubiquitinates Securin and Cyclin B for 26S Proteasome destruction, freeing Separase to cleave the RAD21 subunit of Cohesin rings; peeling k-fiber protofilaments drive Ndc80-coupled Anaphase chromosome segregation to the poles.",
        "color": "#E63946",
        "targetPiece": "Piece_Mit_SAC_APCC_Separase"
      },
      {
        "step": 5,
        "title": "5 : Actomyosin Cleavage Furrow & ESCRT-III / VPS4 Midbody Abscission",
        "desc": "In Telophase, nuclear envelopes reassemble around the two chromosome sets while an equatorial Ac...",
        "spoken": "Stage 5 — Actomyosin Cleavage Furrow & ESCRT-III / VPS4 Midbody Abscission. In Telophase, nuclear envelopes reassemble around the two chromosome sets while an equatorial Actomyosin II ring pinches the plasma membrane into a 1 µm midbody bridge, where spiral ESCRT-III filaments and VPS4 ATPase execute final abscission.",
        "color": "#7209B7",
        "targetPiece": "Piece_Mit_ActomyosinRing"
      }
    ]
  },
  {
    "num": "36",
    "id": "eukaryotic_monomers_dna_rna_rings",
    "folder": "36_eukaryotic_monomers_dna_rna_rings",
    "tier": "Tier 8 — Atomic Chemistry, Epigenetic Bases, Nucleotide Rings & Membrane Lipids",
    "title": "THE ATOMIC & MONOMERIC FOUNDATION: B-DNA VS. A-RNA HELICES, PURINE/PYRIMIDINE RINGS, 5-MEC, M⁷G CAP, ATP & CHOLESTEROL",
    "subtitle": "At the base of the 36-element eukaryotic hierarchy lies the atomic chemistry ($0.1\text{--}2\\,\text{nm}$) that governs every macromolecular machine from Scenarios 01 throug...",
    "analogy": "Provides an interactive all-atom chemical workbench comparing the six foundational ring and bond classes of the eukaryotic cell: (A) B-DNA (`1BNA`, C2'-endo 2'-deoxyribose) vs. A-RNA / tRNA (`1EHZ`, C3'-endo ribose with reactive 2'-OH); (B) Purine (9-membered bicyclic) & Pyrimidine (6-membered monocyclic) Watson–Crick base pairs plus epigenetic **5-Methylcytosine (5mC)**; (C) The eukaryotic **5'-m⁷GpppN Cap** (reverse 5'-5' triphosphate bridge); (D) **Mg²⁺–ATP** phosphoanhydride chemistry; (E) Planar **Peptide Bond** & α-helix/β-sheet H-bonds; and (F) the planar **4-Ring Steroid Core of Cholesterol**.",
    "scaleTag": "EUKARYOTE SCENARIO 36 • 0.15–2.5 NM ALL-ATOM COVALENT, HYDROGEN-BOND & Π-STACKING CHEMICAL GEOMETRY • PDB: 1BNA / 1EHZ",
    "glb": "/eukaryote/models/eukaryotic_monomers_dna_rna_rings.glb",
    "pdb": "1BNA, 1EHZ",
    "pronounce": "[eukaryotic-monomers-dna-rna-rings]",
    "sliderLabel": "ATOMIC MONOMER & RING CLASS SELECTOR:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ CpG Island Cytosine C5",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP / GTP γ-β Phosph",
      "🛑 Energy Depleted"
    ],
    "upstream": "De novo & salvage nucleotide synthesis (Cytosol + Mitochondria Scenarios 19–21), ER Cholesterol/Mevalonate synthesis (Scenari",
    "coupling": "Inputs: Ribose-5-phosphate (from Pentose Phosphate Pathway), Amino ➔ Outputs: Canonical dNTPs (dATP, dTTP, dGTP, dCTP) and rNTPs (ATP, U",
    "downstream": "Serves as the universal atomic substrate pool powering every single macromolecular machine across all 36 scenarios of the Euk",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "A single human cell turns over ~10⁹ ATP mole"
      ],
      [
        "ENERGY CURRENCY",
        "ATP / GTP γ-β Phosphoanhydride Bond Hydrolys"
      ],
      [
        "BIOPHYSICAL SCALE",
        "0.15–2.5 nm All-Atom Covalent, Hydrogen-Bond"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1BNA & 1EHZ"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: DNA & Watson-Crick Base Pairing",
        "url": "https://pdb101.rcsb.org/motm/23"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Transfer RNA (tRNA)",
        "url": "https://pdb101.rcsb.org/motm/15"
      },
      {
        "title": "RCSB PDB Structure 1BNA — Structure of a B-DNA Dodecamer (Drew–Dickerson)",
        "url": "https://www.rcsb.org/structure/1BNA"
      },
      {
        "title": "RCSB PDB Structure 1EHZ — Atomic Resolution Structure of Yeast Phenylalanine tRNA",
        "url": "https://www.rcsb.org/structure/1EHZ"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Atom_BDNA_ARNA",
        "name": "B-DNA Duplex",
        "badge": "ARNA",
        "color": "#0077B6",
        "desc": "B-DNA Duplex (1BNA, C2'-endo Deoxyribose) vs. A-RNA / tRNA (1EHZ, C3'-endo Ribose 2'-OH). Structural source: 1BNA B-DNA & 1EHZ tRNA. Color taxonomy: Nucleic Acid Helix Blue (#0077B6).",
        "dissocVector": [
          -4.2,
          2.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Atom_PurinePyrimidine_5mC",
        "name": "Bicyclic Purine",
        "badge": "5MC",
        "color": "#00B4D8",
        "desc": "Bicyclic Purine (A/G) & Monocyclic Pyrimidine (T/U/C) Rings + Epigenetic 5-Methylcytosine (5mC). Structural source: 1BNA Base Pairs + 5mC. Color taxonomy: Aromatic Base Ring Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          2.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Atom_m7G_CapBridge",
        "name": "Eukaryotic 5'-m⁷GpppN Cap",
        "badge": "CAPBRI",
        "color": "#7209B7",
        "desc": "Eukaryotic 5'-m⁷GpppN Cap (N7-Methylguanosine Ring & 5'-5' Triphosphate Bridge). Structural source: 1IPC eIF4E–m⁷GpppG Cap Complex. Color taxonomy: m⁷G Cap Ring Purple (#7209B7).",
        "dissocVector": [
          4.2,
          2.0,
          1.2
        ]
      },
      {
        "meshName": "Piece_Atom_MgATP_Triphos",
        "name": "Mg²⁺-Coordinated Adenosine Triph…",
        "badge": "TRIPHOS",
        "color": "#FFB703",
        "desc": "Mg²⁺-Coordinated Adenosine Triphosphate (Adenine Ring, Ribose & α/β/γ Phosphates). Structural source: Mg²⁺–ATP All-Atom Conformer. Color taxonomy: ATP Bioenergetic Gold (#FFB703).",
        "dissocVector": [
          -4.0,
          -2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Atom_PeptideRamachandran",
        "name": "Planar Trans Peptide Bond",
        "badge": "PEPTID",
        "color": "#E63946",
        "desc": "Planar Trans Peptide Bond (ω = 180°), (φ, ψ) Dihedrals & Disulfide/Histone Lysine Side Chains. Structural source: Polypeptide Backbone & Side Chains. Color taxonomy: Peptide Bond Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -3.2,
          1.5
        ]
      },
      {
        "meshName": "Piece_Atom_CholesterolSteroid",
        "name": "Planar Tetracyclic Steroid Ring…",
        "badge": "CHOLES",
        "color": "#06D6A0",
        "desc": "Planar Tetracyclic Steroid Ring System of Cholesterol (A/B/C/D Rings + 3β-OH). Structural source: Cholesterol + POPC Phospholipid. Color taxonomy: Steroid Ring Jade (#06D6A0).",
        "dissocVector": [
          4.2,
          -2.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Furanose Sugar Rings: 2'-Deoxyribose (C2'-endo B-DNA) vs. Ribose (C3'-endo A-RNA)",
        "desc": "Compare the 5-membered furanose sugar rings at atomic resolution: removing the 2'-oxygen gives D...",
        "spoken": "Stage 1 — Furanose Sugar Rings: 2'-Deoxyribose (C2'-endo B-DNA) vs. Ribose (C3'-endo A-RNA). Compare the 5-membered furanose sugar rings at atomic resolution: removing the 2'-oxygen gives DNA its C2'-endo pucker and B-form stability (`1BNA`), while RNA's 2'-OH forces a C3'-endo A-form helix (`1EHZ`) and enables 2'-5' lariat branching.",
        "color": "#0077B6",
        "targetPiece": "Piece_Atom_BDNA_ARNA"
      },
      {
        "step": 2,
        "title": "2 : Aromatic Base Rings (Purines vs. Pyrimidines) & Epigenetic 5-Methylcytosine (5mC)",
        "desc": "Inspect the planar 9-membered Purine rings (A, G) and 6-membered Pyrimidine rings (T, U, C) stac...",
        "spoken": "Stage 2 — Aromatic Base Rings (Purines vs. Pyrimidines) & Epigenetic 5-Methylcytosine (5mC). Inspect the planar 9-membered Purine rings (A, G) and 6-membered Pyrimidine rings (T, U, C) stacked at 3.4 Å separation, and watch DNMT transfer a methyl group from SAM onto C5 of Cytosine to create epigenetic 5-Methylcytosine (5mC).",
        "color": "#00B4D8",
        "targetPiece": "Piece_Atom_PurinePyrimidine_5mC"
      },
      {
        "step": 3,
        "title": "3 : The Eukaryotic 5'-m⁷GpppN Cap & Reverse 5'-5' Triphosphate Bridge",
        "desc": "Zoom into the signature chemical badge of eukaryotic mRNA: a positivamente charged N7-methylguan...",
        "spoken": "Stage 3 — The Eukaryotic 5'-m⁷GpppN Cap & Reverse 5'-5' Triphosphate Bridge. Zoom into the signature chemical badge of eukaryotic mRNA: a positivamente charged N7-methylguanosine (m⁷G) ring connected backward via a 5'-to-5' triphosphate bridge, sandwiched by cation-π stacking between two tryptophans of eIF4E.",
        "color": "#7209B7",
        "targetPiece": "Piece_Atom_m7G_CapBridge"
      },
      {
        "step": 4,
        "title": "4 : Mg²⁺-ATP Phosphoanhydride Resonance & Universal Energy Coupling",
        "desc": "Examine how octahedral Mg²⁺ chelates the negatively charged β- and γ-oxygens of ATP, priming the...",
        "spoken": "Stage 4 — Mg²⁺-ATP Phosphoanhydride Resonance & Universal Energy Coupling. Examine how octahedral Mg²⁺ chelates the negatively charged β- and γ-oxygens of ATP, priming the terminal γ-phosphate for nucleophilic attack inside Kinases, Myosin/Kinesin/Dynein motors, and AAA+ rings.",
        "color": "#FFB703",
        "targetPiece": "Piece_Atom_MgATP_Triphos"
      },
      {
        "step": 5,
        "title": "5 : Planar Peptide Bonds (φ, ψ) & The Tetracyclic Steroid Ring of Cholesterol",
        "desc": "Trace partial C=N double-bond resonance keeping the peptide group planar while Cα (φ, ψ) rotatio...",
        "spoken": "Stage 5 — Planar Peptide Bonds (φ, ψ) & The Tetracyclic Steroid Ring of Cholesterol. Trace partial C=N double-bond resonance keeping the peptide group planar while Cα (φ, ψ) rotations build α-helices and β-sheets, alongside the rigid 4-fused-ring (A/B/C/D) steroid core of Cholesterol that orders eukaryotic membranes.",
        "color": "#E63946",
        "targetPiece": "Piece_Atom_PeptideRamachandran"
      }
    ]
  }
];

export const EUKARYOTE_SCENARIOS_CONFIG: Record<EukaryoteScenarioId, EukaryoteScenarioConfig> = {
  "eukaryotic_animal_cell": {
    "num": "01",
    "id": "eukaryotic_animal_cell",
    "folder": "01_eukaryotic_animal_cell",
    "tier": "Tier 1 — Macro-Scale Whole-Cell Overviews",
    "title": "WHOLE ANIMAL CELL 3/4 CUTAWAY & INTERACTIVE ORGANELLE ATLAS",
    "subtitle": "Unlike a prokaryotic cell where transcription, translation, and metabolism occur in a single shared cytoplasmic compartment, the eukaryotic animal cell is a ~20 µm metrop...",
    "analogy": "In our 3D interactive hub, the Whole Animal Cell is sliced open via a surgical 3/4 wedge cutaway. Motor proteins (kinesin and dynein) actively stream vesicles along radiating microtubules from the perinuclear Golgi toward the plasma membrane; mitochondria pulse with inner-membrane potential; and the nuclear envelope continuously exchanges mRNA and proteins through octagonal Nuclear Pore Complexes. Clicking any organelle callout smoothly flies the camera into that compartment and opens its molecular drill-down portal.",
    "scaleTag": "EUKARYOTE SCENARIO 01 • 20 ΜM × 15 ΜM (VOLUME ~ 4,000 ΜM³) • PDB: 4V6X / 5GUP",
    "glb": "/eukaryote/models/eukaryotic_animal_cell.glb",
    "pdb": "4V6X, 5GUP",
    "pronounce": "[eukaryotic-animal-cell]",
    "sliderLabel": "ENVELOPE & ORGANELLE CUTAWAY PEEL:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Organelle System Filte",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Cytosolic ATP / GTP ",
      "🛑 Energy Depleted"
    ],
    "upstream": "Extracellular blood/interstitial fluid nutrients (D-glucose via GLUT transporters, amino acids, LDL-cholesterol, O₂, growth f",
    "coupling": "Inputs: D-Glucose + 6 O₂ + fatty acids + amino acids (metabolic fu ➔ Outputs: Secreted Glycoproteins, Collagen, Hormones & Neurotransmit",
    "downstream": "Feeds every subcellular organelle scenario (Scenarios 03–36): glucose/pyruvate → Mitochondria (19); nascent polypeptides → Ro",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~2 × 10⁹ ATP molecules hydrolyzed and resynt"
      ],
      [
        "ENERGY CURRENCY",
        "Cytosolic ATP / GTP (~5 mM pool regenerated "
      ],
      [
        "BIOPHYSICAL SCALE",
        "20 µm × 15 µm (Volume ~ 4,000 µm³)"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4V6X & 5GUP"
      ]
    ],
    "resources": [
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell (Alberts): Visualizing Cells",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26857/"
      },
      {
        "title": "RCSB PDB-101 — Cellular Landscapes by David Goodsell",
        "url": "https://pdb101.rcsb.org/sci-art/goodsell-gallery"
      },
      {
        "title": "Allen Institute for Cell Science — 3D Cell Viewer",
        "url": "https://www.allencell.org/3d-cell-viewer.html"
      },
      {
        "title": "RCSB PDB Structure 4V6X — Human 80S Ribosome",
        "url": "https://www.rcsb.org/structure/4V6X"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Cell_PlasmaMembrane",
        "name": "Plasma Membrane & Microvilli Cut…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane & Microvilli Cutaway Shell. Structural source: Lipid Bilayer + Glycocalyx. Color taxonomy: Inner/Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -4.0,
          -6.0
        ]
      },
      {
        "meshName": "Piece_Cell_Nucleus",
        "name": "Double-Membraned Nucleus, Lamina…",
        "badge": "NUCLEUS",
        "color": "#7209B7",
        "desc": "Double-Membraned Nucleus, Lamina & Nucleolus. Structural source: 5GUP / 1AOI Chromatin Core. Color taxonomy: Nuclear Royal Purple (#7209B7).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Cell_RoughSmoothER",
        "name": "Perinuclear Rough & Smooth Endop…",
        "badge": "ROUGHS",
        "color": "#00B4D8",
        "desc": "Perinuclear Rough & Smooth Endoplasmic Reticulum. Structural source: 6W6L Sec61 + Sheet/Tubule Mesh. Color taxonomy: Endomembrane Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          2.0,
          3.0
        ]
      },
      {
        "meshName": "Piece_Cell_GolgiStack",
        "name": "Golgi Apparatus Cis–Medial–Trans…",
        "badge": "GOLGIS",
        "color": "#F77F00",
        "desc": "Golgi Apparatus Cis–Medial–Trans Ribbon. Structural source: Cisternal Stack + COP Vesicles. Color taxonomy: Golgi Warm Amber (#F77F00).",
        "dissocVector": [
          -6.5,
          -1.5,
          4.5
        ]
      },
      {
        "meshName": "Piece_Cell_Mitochondria",
        "name": "Mitochondrial Network",
        "badge": "MITOCH",
        "color": "#E63946",
        "desc": "Mitochondrial Network (Cristae & Matrix). Structural source: 5XTE / 6ZSC Respirasome. Color taxonomy: Bioenergetic Crimson (#E63946).",
        "dissocVector": [
          6.0,
          1.5,
          3.5
        ]
      },
      {
        "meshName": "Piece_Cell_LysosomePeroxisome",
        "name": "Lysosomes",
        "badge": "LYSOSO",
        "color": "#FFB703",
        "desc": "Lysosomes (pH 4.5) & Peroxisomes. Structural source: 6WM2 V-ATPase + 1DGF Catalase. Color taxonomy: Catalytic Gold (#FFB703).",
        "dissocVector": [
          5.5,
          -3.0,
          4.0
        ]
      },
      {
        "meshName": "Piece_Cell_CytoskeletonCentrosome",
        "name": "Centrosome",
        "badge": "CYTOSK",
        "color": "#3A86FF",
        "desc": "Centrosome (9×3 Centrioles), Microtubules & Actin Cortex. Structural source: 6U42 γ-TuRC + 3J8Y Tubulin. Color taxonomy: Cytoskeletal Cobalt Blue (#3A86FF).",
        "dissocVector": [
          2.5,
          5.5,
          -4.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Plasma Membrane & Extracellular Interface",
        "desc": "Orbit the outer plasma membrane and glycocalyx. Show how cholesterol rafts, ion pumps, and integ...",
        "spoken": "Stage 1 — The Plasma Membrane & Extracellular Interface. Orbit the outer plasma membrane and glycocalyx. Show how cholesterol rafts, ion pumps, and integrins selectively gate communication with the outside body.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Cell_PlasmaMembrane"
      },
      {
        "step": 2,
        "title": "2 : The Nucleus & Genetic Command Center",
        "desc": "Fly through the cytoplasm to the double-membraned Nucleus. Highlight Nuclear Pore Complexes expo...",
        "spoken": "Stage 2 — The Nucleus & Genetic Command Center. Fly through the cytoplasm to the double-membraned Nucleus. Highlight Nuclear Pore Complexes exporting capped/spliced mRNAs into the cytoplasm.",
        "color": "#7209B7",
        "targetPiece": "Piece_Cell_Nucleus"
      },
      {
        "step": 3,
        "title": "3 : The Endomembrane Secretory Highway",
        "desc": "Trace a ribosome docking on the Rough ER, budding via COPII vesicles into the Cis-to-Trans Golgi...",
        "spoken": "Stage 3 — The Endomembrane Secretory Highway. Trace a ribosome docking on the Rough ER, budding via COPII vesicles into the Cis-to-Trans Golgi Apparatus, and sorting to Lysosomes or secretory granules.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Cell_RoughSmoothER"
      },
      {
        "step": 4,
        "title": "4 : Mitochondrial Bioenergetic Power Grid",
        "desc": "Focus on the branching mitochondrial network consuming pyruvate and O₂ to pump out ATP that fuel...",
        "spoken": "Stage 4 — Mitochondrial Bioenergetic Power Grid. Focus on the branching mitochondrial network consuming pyruvate and O₂ to pump out ATP that fuels the entire cell.",
        "color": "#F77F00",
        "targetPiece": "Piece_Cell_GolgiStack"
      },
      {
        "step": 5,
        "title": "5 : Cytoskeletal Tracks & Motorized Transport",
        "desc": "Highlight the Centrosome radiating microtubules and cortical actin filaments, with Kinesin and D...",
        "spoken": "Stage 5 — Cytoskeletal Tracks & Motorized Transport. Highlight the Centrosome radiating microtubules and cortical actin filaments, with Kinesin and Dynein hauling organelles across the cell.",
        "color": "#E63946",
        "targetPiece": "Piece_Cell_Mitochondria"
      }
    ]
  },
  "kingdom_cell_comparison": {
    "num": "02",
    "id": "kingdom_cell_comparison",
    "folder": "02_kingdom_cell_comparison",
    "tier": "Tier 1 — Macro-Scale Whole-Cell Overviews",
    "title": "COMPARATIVE EUKARYOTES: ANIMAL VS. PLANT VS. FUNGAL CELL ENVELOPES & ORGANELLES",
    "subtitle": "While all eukaryotes share a membrane-bound nucleus, mitochondria, ER, Golgi, and 80S ribosomes, the three major multicellular/crown eukaryotic lineages evolved radically...",
    "analogy": "Displays three side-by-side 3D architectural slices (Animal, Plant, Fungal). Adjusting extracellular osmolarity demonstrates why an animal cell swells and lyses in pure water while a plant cell builds healthy turgor pressure against its cellulose microfibril wall, and how hypertonic media triggers plasmolysis (plasma membrane pulling away from the wall between plasmodesmata).",
    "scaleTag": "EUKARYOTE SCENARIO 02 • 10–80 ΜM COMPARATIVE KINGDOM TRI-PANEL • PDB: 4HG6 / 7R04",
    "glb": "/eukaryote/models/kingdom_cell_comparison.glb",
    "pdb": "4HG6, 7R04",
    "pronounce": "[kingdom-cell-comparison]",
    "sliderLabel": "EXTRACELLULAR TONICITY (HYPOTONIC ↔ ISOTONIC ↔ HYPERTONIC):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Cell-Wall Inhibitor To",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ UDP-Sugar nucleotide",
      "🛑 Energy Depleted"
    ],
    "upstream": "Sunlight + CO₂ + H₂O + soil minerals (Plant); dietary organic macromolecules (Animal); extracellular enzymatic digests (Fungi",
    "coupling": "Inputs: UDP-Glucose (for plant CesA cellulose & fungal FKS1 β-gluc ➔ Outputs: Animal: Flexible Collagen/Integrin ECM & migratory tractio",
    "downstream": "Connects directly to Scenario 03 (Animal ECM/Integrins), Scenario 08 (Plasmodesmata & Animal Junctions), Scenario 18 (Plant C",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "CesA Rosette polymerizes ~300–500 glucose un"
      ],
      [
        "ENERGY CURRENCY",
        "UDP-Sugar nucleotide donors (UDP-Glc, UDP-Gl"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10–80 µm Comparative Kingdom Tri-Panel"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4HG6 & 7R04"
      ]
    ],
    "resources": [
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Plant Cell Wall",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26928/"
      },
      {
        "title": "RCSB PDB Structure 4HG6 — Cellulose Synthase Complex",
        "url": "https://www.rcsb.org/structure/4HG6"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cellulose Synthase",
        "url": "https://pdb101.rcsb.org/motm/242"
      },
      {
        "title": "Nature Reviews Microbiology — Architecture of the Fungal Cell Wall",
        "url": "https://www.nature.com/articles/nrmicro.2017.109"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_King_AnimalECM",
        "name": "Animal Cell",
        "badge": "ANIMAL",
        "color": "#06D6A0",
        "desc": "Animal Cell: Cholesterol Bilayer, Integrins & Collagen ECM. Structural source: 1BKV Collagen + 4G1E Integrin. Color taxonomy: Animal Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          -7.0,
          3.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_AnimalCortex",
        "name": "Animal Cortical Actin-Spectrin M…",
        "badge": "ANIMAL",
        "color": "#3A86FF",
        "desc": "Animal Cortical Actin-Spectrin Mesh & Centrosome. Structural source: F-Actin / Spectrin Network. Color taxonomy: Cortical Blue (#3A86FF).",
        "dissocVector": [
          -7.0,
          -3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_PlantCellWall",
        "name": "Plant Cell",
        "badge": "PLANTC",
        "color": "#E76F51",
        "desc": "Plant Cell: Cellulose Rosette (CesA), Hemicellulose & Pectin Wall. Structural source: 4HG6 CesA + Cellulose Microfibrils. Color taxonomy: Cell Wall Terracotta (#E76F51).",
        "dissocVector": [
          0.0,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_PlantChloroVacuole",
        "name": "Plant Chloroplast Grana, Central…",
        "badge": "PLANTC",
        "color": "#2EC4B6",
        "desc": "Plant Chloroplast Grana, Central Tonoplast Vacuole & Plasmodesmata. Structural source: 5XNL PSII + 7R04 Aquaporin. Color taxonomy: Photosynthetic Teal (#2EC4B6).",
        "dissocVector": [
          0.0,
          -3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_FungalChitinWall",
        "name": "Fungal Cell",
        "badge": "FUNGAL",
        "color": "#FFB703",
        "desc": "Fungal Cell: Chitin Layer, β-1,3/1,6-Glucan & Mannoprotein Coat. Structural source: 8IUG Chitin Synthase + Mannoproteins. Color taxonomy: Chitin Amber Gold (#FFB703).",
        "dissocVector": [
          7.0,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_King_FungalErgosterolPM",
        "name": "Fungal Plasma Membrane with Ergo…",
        "badge": "FUNGAL",
        "color": "#9D4EDD",
        "desc": "Fungal Plasma Membrane with Ergosterol & FKS1 Synthase. Structural source: Ergosterol Bilayer + 7Y36 FKS1. Color taxonomy: Fungal Violet (#9D4EDD).",
        "dissocVector": [
          7.0,
          -3.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Animal Flexibility vs. Walled Kingdoms",
        "desc": "Compare the naked, cholesterol-stabilized animal membrane tethered to collagen fibers against th...",
        "spoken": "Stage 1 — Animal Flexibility vs. Walled Kingdoms. Compare the naked, cholesterol-stabilized animal membrane tethered to collagen fibers against the rigid outer walls of plants and fungi.",
        "color": "#06D6A0",
        "targetPiece": "Piece_King_AnimalECM"
      },
      {
        "step": 2,
        "title": "2 : Plant Cellulose Rosettes & Turgor",
        "desc": "Zoom into the plant plasma membrane where hexameric CesA Rosette complexes extrude 18-chain crys...",
        "spoken": "Stage 2 — Plant Cellulose Rosettes & Turgor. Zoom into the plant plasma membrane where hexameric CesA Rosette complexes extrude 18-chain crystalline cellulose microfibrils guided by cortical microtubules.",
        "color": "#3A86FF",
        "targetPiece": "Piece_King_AnimalCortex"
      },
      {
        "step": 3,
        "title": "3 : Chloroplasts, Vacuole & Plasmodesmata",
        "desc": "Inspect how the plant central vacuole pushes the cytoplasm against the wall while ER-threaded pl...",
        "spoken": "Stage 3 — Chloroplasts, Vacuole & Plasmodesmata. Inspect how the plant central vacuole pushes the cytoplasm against the wall while ER-threaded plasmodesmata connect neighboring plant cells.",
        "color": "#E76F51",
        "targetPiece": "Piece_King_PlantCellWall"
      },
      {
        "step": 4,
        "title": "4 : Fungal Chitin & β-Glucan Armor",
        "desc": "Examine the layered fungal wall: inner crystalline chitin, middle cross-linked β-1,3/1,6-glucan,...",
        "spoken": "Stage 4 — Fungal Chitin & β-Glucan Armor. Examine the layered fungal wall: inner crystalline chitin, middle cross-linked β-1,3/1,6-glucan, and outer glycosylated mannoproteins.",
        "color": "#2EC4B6",
        "targetPiece": "Piece_King_PlantChloroVacuole"
      },
      {
        "step": 5,
        "title": "5 : Osmotic Stress & Pharmacological Targeting",
        "desc": "Demonstrate why antifungals (azoles targeting ergosterol, echinocandins targeting β-glucan) sele...",
        "spoken": "Stage 5 — Osmotic Stress & Pharmacological Targeting. Demonstrate why antifungals (azoles targeting ergosterol, echinocandins targeting β-glucan) selectively kill fungi without harming human animal cells.",
        "color": "#FFB703",
        "targetPiece": "Piece_King_FungalChitinWall"
      }
    ]
  },
  "ecm_integrin_focal_adhesion": {
    "num": "03",
    "id": "ecm_integrin_focal_adhesion",
    "folder": "03_ecm_integrin_focal_adhesion",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "EXTRACELLULAR MATRIX (ECM), COLLAGEN TRIPLE HELIX & INTEGRIN FOCAL ADHESION",
    "subtitle": "Animal cells weave an intricate Extracellular Matrix (ECM) dominated by Type I/IV Collagen triple helices (Gly-X-Y repeats with hydroxyproline), elastic Fibronectin dimer...",
    "analogy": "Displays the three-tier mechanical bridge: Extracellular Collagen/Fibronectin above the membrane, α5β1 Integrin spanning the lipid bilayer (with divalent Mg²⁺/Mn²⁺ at the MIDAS metal-ion-dependent adhesion site), and the Talin–Vinculin–FAK clutch gripping F-Actin below. Dragging the mechanical tension slider unfolds the Talin rod domains and snaps Vinculin onto the stretched rod.",
    "scaleTag": "EUKARYOTE SCENARIO 03 • 120 NM TRANS-MEMBRANE MECHANOTRANSDUCTION COMPLEX • PDB: 3VI4 / 1BKV",
    "glb": "/eukaryote/models/ecm_integrin_focal_adhesion.glb",
    "pdb": "3VI4, 1BKV",
    "pronounce": "[ecm-integrin-focal-adhesion]",
    "sliderLabel": "INTEGRIN ALLOSTERIC STATE (BENT-INACTIVE ↔ EXTENDED-OPEN):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ MIDAS Cation Mode",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Actomyosin Mechanica",
      "🛑 Energy Depleted"
    ],
    "upstream": "Rough ER (13) & Golgi (15) procollagen/fibronectin secretion + Cortical Actomyosin (09) intracellular retrograde traction for",
    "coupling": "Inputs: Extracellular Fibronectin RGD motif & Cross-linked Collage ➔ Outputs: Mechanical traction force transmitted between cytoskeleton",
    "downstream": "Transmits mechanical tension to F-Actin/Myosin stress fibers (Scenario 09) and activates nuclear YAP/TAZ & ERK gene transcrip",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Integrin switch-blade extension ~10–50 ms; T"
      ],
      [
        "ENERGY CURRENCY",
        "Actomyosin Mechanical Tension (5–40 pN per T"
      ],
      [
        "BIOPHYSICAL SCALE",
        "120 nm Trans-Membrane Mechanotransduction Co"
      ],
      [
        "PRIMARY RCSB PDBS",
        "3VI4 & 1BKV"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Integrin",
        "url": "https://pdb101.rcsb.org/motm/134"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Collagen",
        "url": "https://pdb101.rcsb.org/motm/4"
      },
      {
        "title": "RCSB PDB Structure 3VI4 — Integrin α5β1 Headpiece with RGD",
        "url": "https://www.rcsb.org/structure/3VI4"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Integrin Mechanotransduction",
        "url": "https://www.nature.com/articles/nrm.2016.78"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_ECM_CollagenFibril",
        "name": "Type I Collagen Triple-Helix Fib…",
        "badge": "COLLAG",
        "color": "#F77F00",
        "desc": "Type I Collagen Triple-Helix Fibrils (Gly-Pro-Hyp). Structural source: 1BKV / 3HR2 Collagen. Color taxonomy: Collagen Warm Amber (#F77F00).",
        "dissocVector": [
          -4.5,
          6.5,
          -2.0
        ]
      },
      {
        "meshName": "Piece_ECM_FibronectinRGD",
        "name": "Fibronectin Type III Dimer",
        "badge": "FIBRON",
        "color": "#FFB703",
        "desc": "Fibronectin Type III Dimer (FN7–10 with RGD Loop). Structural source: 1FNF / 3VI4 Fibronectin. Color taxonomy: Ligand Gold (#FFB703).",
        "dissocVector": [
          2.0,
          4.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_ECM_IntegrinAlphaBeta",
        "name": "Integrin α5β1 Heterodimer",
        "badge": "INTEGR",
        "color": "#00B4D8",
        "desc": "Integrin α5β1 Heterodimer (β-Propeller, βI MIDAS & TM Legs). Structural source: 3VI4 / 4G1E Integrin. Color taxonomy: Receptor Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_ECM_PlasmaMembrane",
        "name": "Plasma Membrane Bilayer with PIP…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane Bilayer with PIP₂ Inner Leaflet Patch. Structural source: POPC / Cholesterol / PIP₂. Color taxonomy: Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_ECM_TalinRod",
        "name": "Talin-1 FERM Head & Force-Sensin…",
        "badge": "TALINR",
        "color": "#9D4EDD",
        "desc": "Talin-1 FERM Head & Force-Sensing R1–R13 Helical Rod. Structural source: 3IVF / 6VGU Talin. Color taxonomy: Mechanosensor Violet (#9D4EDD).",
        "dissocVector": [
          -2.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_ECM_VinculinFAK",
        "name": "Vinculin Clutch & Focal Adhesion…",
        "badge": "VINCUL",
        "color": "#E63946",
        "desc": "Vinculin Clutch & Focal Adhesion Kinase (FAK). Structural source: 1TR2 Vinculin + 2J0J FAK. Color taxonomy: Clutch Crimson (#E63946).",
        "dissocVector": [
          3.5,
          -3.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_ECM_ActinStressFiber",
        "name": "Cytoplasmic F-Actin Contractile…",
        "badge": "ACTINS",
        "color": "#3A86FF",
        "desc": "Cytoplasmic F-Actin Contractile Stress Fiber. Structural source: 3J8I F-Actin Filament. Color taxonomy: Actin Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          -6.5,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Extracellular Matrix Scaffold",
        "desc": "Inspect the braided Type I Collagen triple helices and Fibronectin RGD loops forming the structu...",
        "spoken": "Stage 1 — The Extracellular Matrix Scaffold. Inspect the braided Type I Collagen triple helices and Fibronectin RGD loops forming the structural bed outside the cell.",
        "color": "#F77F00",
        "targetPiece": "Piece_ECM_CollagenFibril"
      },
      {
        "step": 2,
        "title": "2 : Inside-Out Integrin Switchblade Unfolding",
        "desc": "Watch cytosolic Talin-1 bind the β-integrin tail and PIP₂, triggering the bent integrin ectodoma...",
        "spoken": "Stage 2 — Inside-Out Integrin Switchblade Unfolding. Watch cytosolic Talin-1 bind the β-integrin tail and PIP₂, triggering the bent integrin ectodomain to snap upright by 130 Å.",
        "color": "#FFB703",
        "targetPiece": "Piece_ECM_FibronectinRGD"
      },
      {
        "step": 3,
        "title": "3 : RGD Catch-Bond & MIDAS Metal Coordination",
        "desc": "Zoom into the βI domain where a Mg²⁺ ion coordinates the Asp residue of Fibronectin's RGD loop.",
        "spoken": "Stage 3 — RGD Catch-Bond & MIDAS Metal Coordination. Zoom into the βI domain where a Mg²⁺ ion coordinates the Asp residue of Fibronectin's RGD loop.",
        "color": "#00B4D8",
        "targetPiece": "Piece_ECM_IntegrinAlphaBeta"
      },
      {
        "step": 4,
        "title": "4 : Talin Stretching & Vinculin Recruitment",
        "desc": "Apply actomyosin pulling force to unfold Talin's helical bundles, exposing buried hydrophobic he...",
        "spoken": "Stage 4 — Talin Stretching & Vinculin Recruitment. Apply actomyosin pulling force to unfold Talin's helical bundles, exposing buried hydrophobic helices that recruit Vinculin to reinforce the clutch.",
        "color": "#06D6A0",
        "targetPiece": "Piece_ECM_PlasmaMembrane"
      },
      {
        "step": 5,
        "title": "5 : FAK Phosphorylation & Mechanotransduction",
        "desc": "Highlight Focal Adhesion Kinase (FAK) autophosphorylating Tyr397 to broadcast survival and stiff...",
        "spoken": "Stage 5 — FAK Phosphorylation & Mechanotransduction. Highlight Focal Adhesion Kinase (FAK) autophosphorylating Tyr397 to broadcast survival and stiffness signals to the nucleus.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_ECM_TalinRod"
      }
    ]
  },
  "plasma_membrane_lipid_raft": {
    "num": "04",
    "id": "plasma_membrane_lipid_raft",
    "folder": "04_plasma_membrane_lipid_raft",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "EUKARYOTIC PLASMA MEMBRANE, CHOLESTEROL STIFFENING RINGS & GLYCOCALYX",
    "subtitle": "The eukaryotic plasma membrane is a 5 nm dynamic fluid mosaic distinguished from bacterial membranes by three hallmarks: (1) High Sterol Content (30–40 mol% Cholesterol i...",
    "analogy": "Renders an atomic/mesoscale patch of the plasma membrane comparing a thinner liquid-disordered (Ld) unsaturated phospholipid region against a thicker liquid-ordered (Lo) Cholesterol + Sphingomyelin + GM1 Ganglioside lipid raft carrying GPI-anchored proteins on top and a Caveolin-1 11-mer disc + Flippase below.",
    "scaleTag": "EUKARYOTE SCENARIO 04 • 15 NM × 15 NM × 8 NM ASYMMETRIC BILAYER PATCH • PDB: 7CBT / 7VGI",
    "glb": "/eukaryote/models/plasma_membrane_lipid_raft.glb",
    "pdb": "7CBT, 7VGI",
    "pronounce": "[plasma-membrane-lipid-raft]",
    "sliderLabel": "CHOLESTEROL CONCENTRATION (MOL%):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Flippase vs. Apoptotic",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP (1 ATP per PS li",
      "🛑 Energy Depleted"
    ],
    "upstream": "Smooth ER (14) de novo phospholipid/cholesterol synthesis (mevalonate pathway) + Golgi (15) sphingomyelin and ganglioside gly",
    "coupling": "Inputs: Cholesterol (C₂₇H₄₆O planar 4-ring sterol delivered via LD ➔ Outputs: Selective permeability barrier & -70 mV capacitive dielect",
    "downstream": "Provides the lipid matrix and PIP₂/Cholesterol cofactors for Ion Channels (05), GPCRs/RTKs (06), Clathrin Endocytosis (07), a",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Lateral lipid diffusion D ≈ 1–5 µm²/s (~10⁷ "
      ],
      [
        "ENERGY CURRENCY",
        "ATP (1 ATP per PS lipid flipped inward by P4"
      ],
      [
        "BIOPHYSICAL SCALE",
        "15 nm × 15 nm × 8 nm Asymmetric Bilayer Patc"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7CBT & 7VGI"
      ]
    ],
    "resources": [
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Lipid Bilayer",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26871/"
      },
      {
        "title": "RCSB PDB Structure 7CBT — Human P4-ATPase Lipid Flippase ATP8A1",
        "url": "https://www.rcsb.org/structure/7CBT"
      },
      {
        "title": "RCSB PDB Structure 7VGI — Human Caveolin-1 8S Complex",
        "url": "https://www.rcsb.org/structure/7VGI"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Lipid Rafts & Membrane Organization",
        "url": "https://www.nature.com/articles/nrm.2017.16"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_PM_GlycocalyxGM1",
        "name": "Outer Glycocalyx",
        "badge": "GLYCOC",
        "color": "#9D4EDD",
        "desc": "Outer Glycocalyx: GM1 Ganglioside Sugar Trees & GPI-Anchored Protein. Structural source: GM1 Oligosaccharides + 1GNY GPI. Color taxonomy: Glycan Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          4.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_PM_OuterLeaflet",
        "name": "Outer Leaflet",
        "badge": "OUTERL",
        "color": "#0077B6",
        "desc": "Outer Leaflet: Sphingomyelin & Phosphatidylcholine (PC). Structural source: SM + POPC Headgroups & Acyl Chains. Color taxonomy: Exoplasmic Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          1.8,
          -2.0
        ]
      },
      {
        "meshName": "Piece_PM_CholesterolRings",
        "name": "Intercalated Planar 4-Ring Chole…",
        "badge": "CHOLES",
        "color": "#FFB703",
        "desc": "Intercalated Planar 4-Ring Cholesterol Raft Core. Structural source: Cholesterol C27H46O Sterol Rings. Color taxonomy: Sterol Gold (#FFB703).",
        "dissocVector": [
          0.0,
          0.0,
          2.5
        ]
      },
      {
        "meshName": "Piece_PM_InnerLeaflet",
        "name": "Inner Leaflet",
        "badge": "INNERL",
        "color": "#06D6A0",
        "desc": "Inner Leaflet: Anionic Phosphatidylserine (PS), PE & PIP₂. Structural source: POPS + POPE + PIP2. Color taxonomy: Cytosolic Leaflet Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -1.8,
          -2.0
        ]
      },
      {
        "meshName": "Piece_PM_FlippaseATP8A1",
        "name": "P4-ATPase Lipid Flippase",
        "badge": "FLIPPA",
        "color": "#00B4D8",
        "desc": "P4-ATPase Lipid Flippase (ATP8A1–CDC50A). Structural source: 7CBT Flippase Complex. Color taxonomy: Transporter Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          -1.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_PM_CaveolinDisc",
        "name": "Inner-Leaflet Caveolin-1 8S Amph…",
        "badge": "CAVEOL",
        "color": "#E63946",
        "desc": "Inner-Leaflet Caveolin-1 8S Amphipathic Disc. Structural source: 7VGI Caveolin-1 11-mer Ring. Color taxonomy: Caveolin Crimson (#E63946).",
        "dissocVector": [
          4.5,
          -2.5,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Trans-Bilayer Asymmetry",
        "desc": "Compare the neutral/zwitterionic outer leaflet (PC, Sphingomyelin, Glycolipids) against the nega...",
        "spoken": "Stage 1 — Trans-Bilayer Asymmetry. Compare the neutral/zwitterionic outer leaflet (PC, Sphingomyelin, Glycolipids) against the negatively charged inner leaflet (PS, PIP₂).",
        "color": "#9D4EDD",
        "targetPiece": "Piece_PM_GlycocalyxGM1"
      },
      {
        "step": 2,
        "title": "2 : The Four-Ring Cholesterol Stiffener",
        "desc": "Zoom into the hydrophobic core to see how Cholesterol's rigid planar steroid rings pack against ...",
        "spoken": "Stage 2 — The Four-Ring Cholesterol Stiffener. Zoom into the hydrophobic core to see how Cholesterol's rigid planar steroid rings pack against saturated sphingolipid tails, increasing bilayer thickness.",
        "color": "#0077B6",
        "targetPiece": "Piece_PM_OuterLeaflet"
      },
      {
        "step": 3,
        "title": "3 : Lipid Rafts & GPI-Anchored Signaling",
        "desc": "Observe how thicker Liquid-Ordered (Lo) rafts cluster GPI-anchored proteins on the outside and p...",
        "spoken": "Stage 3 — Lipid Rafts & GPI-Anchored Signaling. Observe how thicker Liquid-Ordered (Lo) rafts cluster GPI-anchored proteins on the outside and palmitoylated/myristoylated kinases on the inside.",
        "color": "#FFB703",
        "targetPiece": "Piece_PM_CholesterolRings"
      },
      {
        "step": 4,
        "title": "4 : ATP-Driven Flippase Maintenance",
        "desc": "Watch the ATP8A1 P4-ATPase Flippase burn ATP to grab any Phosphatidylserine that leaks outward a...",
        "spoken": "Stage 4 — ATP-Driven Flippase Maintenance. Watch the ATP8A1 P4-ATPase Flippase burn ATP to grab any Phosphatidylserine that leaks outward and flip it back to the cytosolic leaflet.",
        "color": "#06D6A0",
        "targetPiece": "Piece_PM_InnerLeaflet"
      },
      {
        "step": 5,
        "title": "5 : Caveolae & Apoptotic PS Exposure",
        "desc": "Contrast Caveolin-1 oligomeric discs curving the inner leaflet with Ca²⁺-activated scramblases e...",
        "spoken": "Stage 5 — Caveolae & Apoptotic PS Exposure. Contrast Caveolin-1 oligomeric discs curving the inner leaflet with Ca²⁺-activated scramblases exposing PS on the cell surface as a macrophage 'eat-me' signal.",
        "color": "#00B4D8",
        "targetPiece": "Piece_PM_FlippaseATP8A1"
      }
    ]
  },
  "ion_channels_na_k_pump": {
    "num": "05",
    "id": "ion_channels_na_k_pump",
    "folder": "05_ion_channels_na_k_pump",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "NA⁺/K⁺-ATPASE ELECTROGENIC PUMP & VOLTAGE-GATED K⁺/NA⁺ ION CHANNELS",
    "subtitle": "Every eukaryotic animal cell is an electrical battery (~ -70 mV resting potential) charged by the Na⁺/K⁺-ATPase (Sodium-Potassium Pump), which consumes up to 25% of all h...",
    "analogy": "Features the Na⁺/K⁺-ATPase (α catalytic subunit with A, N, and P cytoplasmic domains + glycosylated β subunit + γ FXYD regulator) next to the 4-fold symmetric Voltage-Gated K⁺ Channel in the plasma membrane. Users can step through the Post–Albers E₁/E₂ pumping cycle and fire an action potential depolarization wave.",
    "scaleTag": "EUKARYOTE SCENARIO 05 • 15 NM BIOELECTRIC MEMBRANE COMPLEX • PDB: 2ZXE / 1BL8",
    "glb": "/eukaryote/models/ion_channels_na_k_pump.glb",
    "pdb": "2ZXE, 1BL8",
    "pronounce": "[ion-channels-na-k-pump]",
    "sliderLabel": "MEMBRANE VOLTAGE ΔΨ (MV):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Ouabain / Digoxin Inhi",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (ΔG ≈",
      "🛑 Energy Depleted"
    ],
    "upstream": "Mitochondrial ATP export (Scenario 21) + Extracellular/Intracellular Na⁺ and K⁺ electrolyte pools.",
    "coupling": "Inputs: 3 Cytosolic Na⁺ ions + 1 Cytosolic ATP + Mg²⁺ (into Na⁺/K⁺ ➔ Outputs: 3 Extracellular Na⁺ exported + 2 Cytosolic K⁺ imported + 1",
    "downstream": "Powers secondary active nutrient import, maintains osmotic cell volume (preventing swelling in Scenario 01/02), and resets me",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Na⁺/K⁺-ATPase: ~150–200 cycles/sec; Kv Chann"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (ΔG ≈ -50 kJ/mol via Asp369 a"
      ],
      [
        "BIOPHYSICAL SCALE",
        "15 nm Bioelectric Membrane Complex"
      ],
      [
        "PRIMARY RCSB PDBS",
        "2ZXE & 1BL8"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Sodium-Potassium Pump",
        "url": "https://pdb101.rcsb.org/motm/118"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Potassium Channels",
        "url": "https://pdb101.rcsb.org/motm/38"
      },
      {
        "title": "RCSB PDB Structure 2ZXE — Sodium-Potassium Pump",
        "url": "https://www.rcsb.org/structure/2ZXE"
      },
      {
        "title": "RCSB PDB Structure 2R9R — Voltage-Gated Potassium Channel Kv1.2/2.1",
        "url": "https://www.rcsb.org/structure/2R9R"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Ion_NaK_Alpha",
        "name": "Na⁺/K⁺-ATPase α-Subunit",
        "badge": "ALPHA",
        "color": "#00B4D8",
        "desc": "Na⁺/K⁺-ATPase α-Subunit (10-TM Core + Cytoplasmic A, N, P Domains). Structural source: 2ZXE / 3KDP Chain A. Color taxonomy: Pump Catalytic Cerulean (#00B4D8).",
        "dissocVector": [
          -4.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ion_NaK_BetaGamma",
        "name": "Na⁺/K⁺-ATPase Glycosylated β-Sub…",
        "badge": "BETAGA",
        "color": "#9D4EDD",
        "desc": "Na⁺/K⁺-ATPase Glycosylated β-Subunit & FXYD γ-Regulator. Structural source: 2ZXE Chains B, G. Color taxonomy: Regulatory Ectodomain Violet (#9D4EDD).",
        "dissocVector": [
          -5.5,
          4.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Ion_NaK_IonsATP",
        "name": "Occluded 3 Na⁺ / 2 K⁺ Ions & Asp…",
        "badge": "IONSATP",
        "color": "#FFB703",
        "desc": "Occluded 3 Na⁺ / 2 K⁺ Ions & Asp369 Phosphorylation Site. Structural source: Na⁺ / K⁺ / Mg-ATP Pocket. Color taxonomy: Catalytic Ion Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -2.5,
          3.0
        ]
      },
      {
        "meshName": "Piece_Ion_Kv_PoreTetramer",
        "name": "Kv Channel Central Pore Domain",
        "badge": "PORETE",
        "color": "#E63946",
        "desc": "Kv Channel Central Pore Domain (S5–S6 Tetramer & TVGYG Selectivity Filter). Structural source: 2R9R / 1BL8 Pore. Color taxonomy: Channel Pore Crimson (#E63946).",
        "dissocVector": [
          4.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ion_Kv_VoltageSensors",
        "name": "Kv S1–S4 Voltage-Sensing Paddles…",
        "badge": "VOLTAG",
        "color": "#F77F00",
        "desc": "Kv S1–S4 Voltage-Sensing Paddles & Cytoplasmic T1 Tetramerization Ring. Structural source: 2R9R S1–S4 + T1 Domain. Color taxonomy: Voltage Sensor Amber (#F77F00).",
        "dissocVector": [
          5.5,
          -2.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Ion_PlasmaMembrane",
        "name": "Plasma Membrane Phospholipid Bil…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane Phospholipid Bilayer. Structural source: POPC / Cholesterol Bilayer. Color taxonomy: Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : E₁ Inward-Open: Binding 3 Cytosolic Na⁺",
        "desc": "Zoom into the Na⁺/K⁺-ATPase in its E₁ conformation as 3 Na⁺ ions enter from the cytoplasm and AT...",
        "spoken": "Stage 1 — E₁ Inward-Open: Binding 3 Cytosolic Na⁺. Zoom into the Na⁺/K⁺-ATPase in its E₁ conformation as 3 Na⁺ ions enter from the cytoplasm and ATP binds the Nucleotide (N) domain.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Ion_NaK_Alpha"
      },
      {
        "step": 2,
        "title": "2 : Asp369 Phosphorylation & E₁-P → E₂-P Switch",
        "desc": "Watch γ-phosphate transfer onto Asp369 in the P-domain, triggering actuator (A) domain rotation ...",
        "spoken": "Stage 2 — Asp369 Phosphorylation & E₁-P → E₂-P Switch. Watch γ-phosphate transfer onto Asp369 in the P-domain, triggering actuator (A) domain rotation that closes the inner gate and ejects 3 Na⁺ outside.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Ion_NaK_BetaGamma"
      },
      {
        "step": 3,
        "title": "3 : E₂-P Binding 2 K⁺ & Dephosphorylation",
        "desc": "Two extracellular K⁺ ions bind the outward-open pocket, triggering hydrolysis of Asp369-P and im...",
        "spoken": "Stage 3 — E₂-P Binding 2 K⁺ & Dephosphorylation. Two extracellular K⁺ ions bind the outward-open pocket, triggering hydrolysis of Asp369-P and importing the 2 K⁺ into the cytosol.",
        "color": "#FFB703",
        "targetPiece": "Piece_Ion_NaK_IonsATP"
      },
      {
        "step": 4,
        "title": "4 : Voltage-Gated K⁺ Channel S4 Paddle Motion",
        "desc": "Shift to the neighboring Kv channel: depolarizing the membrane pushes the positively charged Arg...",
        "spoken": "Stage 4 — Voltage-Gated K⁺ Channel S4 Paddle Motion. Shift to the neighboring Kv channel: depolarizing the membrane pushes the positively charged Arg residues on S4 upward, pulling the S4–S5 linker to open the S6 bundle crossing.",
        "color": "#E63946",
        "targetPiece": "Piece_Ion_Kv_PoreTetramer"
      },
      {
        "step": 5,
        "title": "5 : Atomic Selectivity Filter (TVGYG)",
        "desc": "Fly inside the narrow Kv selectivity filter where four rings of backbone carbonyl oxygens strip ...",
        "spoken": "Stage 5 — Atomic Selectivity Filter (TVGYG). Fly inside the narrow Kv selectivity filter where four rings of backbone carbonyl oxygens strip water from K⁺ ions while rejecting smaller Na⁺ ions.",
        "color": "#F77F00",
        "targetPiece": "Piece_Ion_Kv_VoltageSensors"
      }
    ]
  },
  "gpcr_rtk_signaling": {
    "num": "06",
    "id": "gpcr_rtk_signaling",
    "folder": "06_gpcr_rtk_signaling",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "GPCR 7-TRANSMEMBRANE RECEPTOR, HETEROTRIMERIC G-PROTEIN & RTK DIMERIZATION",
    "subtitle": "Eukaryotic cells sense hormones, neurotransmitters, odorants, and photons via two dominant plasma-membrane receptor classes: (1) G-Protein-Coupled Receptors (GPCRs, >800 ...",
    "analogy": "Side-by-side interactive signaling comparison in the plasma membrane: on the left, Epinephrine docks into the β₂-AR GPCR (3SN6), triggering Gαs opening, GDP→GTP exchange, and Adenylyl Cyclase cAMP ring production (plus GRK/β-Arrestin desensitization); on the right, EGF dimerizes EGFR, triggering tyrosine phosphorylation and Ras-GTP activation.",
    "scaleTag": "EUKARYOTE SCENARIO 06 • 20 NM TRANSMEMBRANE SIGNAL TRANSDUCTION HUB • PDB: 3SN6 / 8H36",
    "glb": "/eukaryote/models/gpcr_rtk_signaling.glb",
    "pdb": "3SN6, 8H36",
    "pronounce": "[gpcr-rtk-signaling]",
    "sliderLabel": "AGONIST / GROWTH FACTOR CONCENTRATION:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ GRK Phosphorylation & ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Binding & Hydrol",
      "🛑 Energy Depleted"
    ],
    "upstream": "Extracellular endocrine/paracrine hormones & neurotransmitters (Epinephrine, Glucagon, EGF, Insulin) + Cytosolic GTP & ATP po",
    "coupling": "Inputs: Extracellular Agonist Ligand (Epinephrine / Adrenaline or  ➔ Outputs: 3',5'-Cyclic AMP (cAMP ring) second messenger (activating ",
    "downstream": "cAMP/PKA & IP₃/DAG regulate Smooth ER Ca²⁺ release (Scenario 14) and glycogen/lipid metabolism; Ras-GTP→ERK & PKA→CREB transl",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "1 agonist-bound GPCR activates ~10–100 Gs pr"
      ],
      [
        "ENERGY CURRENCY",
        "GTP Binding & Hydrolysis (Gα intrinsic GTPas"
      ],
      [
        "BIOPHYSICAL SCALE",
        "20 nm Transmembrane Signal Transduction Hub"
      ],
      [
        "PRIMARY RCSB PDBS",
        "3SN6 & 8H36"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: G Proteins & GPCRs",
        "url": "https://pdb101.rcsb.org/motm/58"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Epidermal Growth Factor",
        "url": "https://pdb101.rcsb.org/motm/126"
      },
      {
        "title": "RCSB PDB Structure 3SN6 — Nobel-Prize β₂-AR–Gs Complex",
        "url": "https://www.rcsb.org/structure/3SN6"
      },
      {
        "title": "RCSB PDB Structure 8H36 — Human Adenylyl Cyclase AC9",
        "url": "https://www.rcsb.org/structure/8H36"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Sig_GPCR_7TM",
        "name": "β₂-Adrenergic Receptor 7-TM Heli…",
        "badge": "7TM",
        "color": "#00B4D8",
        "desc": "β₂-Adrenergic Receptor 7-TM Helical Bundle + Bound Agonist. Structural source: 3SN6 Chain R. Color taxonomy: GPCR Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Sig_GAlphaS",
        "name": "Gαs Subunit",
        "badge": "GALPHAS",
        "color": "#FFB703",
        "desc": "Gαs Subunit (Ras-like & Hinged α-Helical Domains + GTP). Structural source: 3SN6 Chain A. Color taxonomy: G-Alpha Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Sig_GBetaGamma",
        "name": "Gβ₁",
        "badge": "GBETAG",
        "color": "#9D4EDD",
        "desc": "Gβ₁ (7-Bladed WD40 β-Propeller Ring) & Prenylated Gγ₂. Structural source: 3SN6 Chains B, G. Color taxonomy: WD40 Propeller Violet (#9D4EDD).",
        "dissocVector": [
          -6.5,
          -3.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Sig_AdenylylCyclase",
        "name": "Transmembrane Adenylyl Cyclase",
        "badge": "ADENYL",
        "color": "#F77F00",
        "desc": "Transmembrane Adenylyl Cyclase (AC9) Generating cAMP Rings. Structural source: 8H36 Adenylyl Cyclase. Color taxonomy: Cyclase Warm Amber (#F77F00).",
        "dissocVector": [
          0.0,
          -1.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Sig_RTK_Dimer",
        "name": "Ligand-Bound EGFR Receptor Tyros…",
        "badge": "DIMER",
        "color": "#E63946",
        "desc": "Ligand-Bound EGFR Receptor Tyrosine Kinase Dimer & Phospho-Tails. Structural source: 1IVO Ectodomain + 2GS6 Kinase. Color taxonomy: RTK Dimer Crimson (#E63946).",
        "dissocVector": [
          5.0,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Sig_Grb2SOS_Ras",
        "name": "Grb2–SOS GEF Complex & Membrane-…",
        "badge": "RAS",
        "color": "#3A86FF",
        "desc": "Grb2–SOS GEF Complex & Membrane-Tethered Ras-GTP. Structural source: 1BKD Ras-SOS. Color taxonomy: Ras Signaling Blue (#3A86FF).",
        "dissocVector": [
          5.0,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Sig_PlasmaMembrane",
        "name": "Plasma Membrane Phospholipid Bil…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane Phospholipid Bilayer. Structural source: POPC / Cholesterol Bilayer. Color taxonomy: Plasma Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Agonist Docking & TM6 Outward Swing",
        "desc": "Dock Epinephrine into the extracellular pocket of the 7-TM β₂-Adrenergic Receptor and watch TM6 ...",
        "spoken": "Stage 1 — Agonist Docking & TM6 Outward Swing. Dock Epinephrine into the extracellular pocket of the 7-TM β₂-Adrenergic Receptor and watch TM6 swing outward by 14 Å on the cytoplasmic face.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Sig_GPCR_7TM"
      },
      {
        "step": 2,
        "title": "2 : Gαs Clamshell Opening & GDP→GTP Exchange",
        "desc": "Observe the GPCR engage the C-terminal α5 helix of Gαs, swinging the α-helical domain open by 13...",
        "spoken": "Stage 2 — Gαs Clamshell Opening & GDP→GTP Exchange. Observe the GPCR engage the C-terminal α5 helix of Gαs, swinging the α-helical domain open by 130° so GDP escapes and GTP binds.",
        "color": "#FFB703",
        "targetPiece": "Piece_Sig_GAlphaS"
      },
      {
        "step": 3,
        "title": "3 : Adenylyl Cyclase & Cyclic AMP Ring Synthesis",
        "desc": "Follow GTP-bound Gαs sliding along the inner leaflet to bind Adenylyl Cyclase, converting ATP in...",
        "spoken": "Stage 3 — Adenylyl Cyclase & Cyclic AMP Ring Synthesis. Follow GTP-bound Gαs sliding along the inner leaflet to bind Adenylyl Cyclase, converting ATP into cyclic AMP (cAMP) rings.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Sig_GBetaGamma"
      },
      {
        "step": 4,
        "title": "4 : RTK Dimerization & Trans-Autophosphorylation",
        "desc": "Switch to the EGFR Receptor Tyrosine Kinase: binding two EGF ligands locks the ectodomains into ...",
        "spoken": "Stage 4 — RTK Dimerization & Trans-Autophosphorylation. Switch to the EGFR Receptor Tyrosine Kinase: binding two EGF ligands locks the ectodomains into a back-to-back dimer, driving asymmetric kinase activation and tail Tyr phosphorylation.",
        "color": "#F77F00",
        "targetPiece": "Piece_Sig_AdenylylCyclase"
      },
      {
        "step": 5,
        "title": "5 : Grb2–SOS Recruitment & Ras-GTP Switch",
        "desc": "Watch SH2 domains of Grb2 bind the phosphorylated RTK tail, bringing SOS to pry GDP out of membr...",
        "spoken": "Stage 5 — Grb2–SOS Recruitment & Ras-GTP Switch. Watch SH2 domains of Grb2 bind the phosphorylated RTK tail, bringing SOS to pry GDP out of membrane-tethered Ras and launch the MAPK cascade.",
        "color": "#E63946",
        "targetPiece": "Piece_Sig_RTK_Dimer"
      }
    ]
  },
  "clathrin_endocytosis_snare": {
    "num": "07",
    "id": "clathrin_endocytosis_snare",
    "folder": "07_clathrin_endocytosis_snare",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "CLATHRIN TRISKELION CAGE, DYNAMIN SCISSION RING & SNARE MEMBRANE FUSION",
    "subtitle": "Eukaryotic cells continuously internalize receptors/nutrients (Endocytosis) and secrete neurotransmitters/proteins (Exocytosis) via two opposing mechanical masterpieces: ...",
    "analogy": "Interactive dual-stage trafficking scene: on the left, a Clathrin triskelion soccer-ball cage buds from the plasma membrane with a helical Dynamin GTPase ring constricting the neck; on the right, a synaptic/secretory vesicle uses 4-helix SNARE bundles + Complexin/Synaptotagmin to fuse with a target membrane and after fusion is pried apart by the hexameric AAA+ NSF–α-SNAP ring.",
    "scaleTag": "EUKARYOTE SCENARIO 07 • 80–100 NM VESICLE BUDDING & FUSION MACHINERY • PDB: 1XI4 / 1SFC",
    "glb": "/eukaryote/models/clathrin_endocytosis_snare.glb",
    "pdb": "1XI4, 1SFC",
    "pronounce": "[clathrin-endocytosis-snare]",
    "sliderLabel": "ENDOCYTOSIS & FUSION STAGE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Dynamin GTPase Inhibit",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Hydrolysis (Dyna",
      "🛑 Energy Depleted"
    ],
    "upstream": "Ligand-bound LDL/Transferrin receptors & β-Arrestin-tagged GPCRs (Scenario 06) + Golgi/ER secretory vesicles (Scenario 15).",
    "coupling": "Inputs: Plasma membrane PIP₂ + Cargo receptors (LDL-R, Transferrin ➔ Outputs: Internalized Early Endosomal Vesicles (delivering LDL chol",
    "downstream": "Internalized endosomes mature and fuse with Lysosomes (Scenario 16) or recycle to the Plasma Membrane (Scenario 04); coated v",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Clathrin pit matures in ~30–60 s; Dynamin sc"
      ],
      [
        "ENERGY CURRENCY",
        "GTP Hydrolysis (Dynamin neck scission) + SNA"
      ],
      [
        "BIOPHYSICAL SCALE",
        "80–100 nm Vesicle Budding & Fusion Machinery"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1XI4 & 1SFC"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Clathrin",
        "url": "https://pdb101.rcsb.org/motm/89"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: SNARE Proteins",
        "url": "https://pdb101.rcsb.org/motm/166"
      },
      {
        "title": "RCSB PDB Structure 1XI4 — Clathrin D6 Barrel",
        "url": "https://www.rcsb.org/structure/1XI4"
      },
      {
        "title": "RCSB PDB Structure 1SFC — Neuronal Synaptic Fusion Complex",
        "url": "https://www.rcsb.org/structure/1SFC"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Ves_ClathrinCage",
        "name": "Clathrin Polyhedral Triskelion C…",
        "badge": "CLATHR",
        "color": "#9D4EDD",
        "desc": "Clathrin Polyhedral Triskelion Cage (Hexagons & 12 Pentagons). Structural source: 1XI4 Clathrin Heavy/Light Chains. Color taxonomy: Clathrin Cage Violet (#9D4EDD).",
        "dissocVector": [
          -5.0,
          -4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ves_AP2Cargo",
        "name": "AP2 Adaptor Complex & Cargo Rece…",
        "badge": "AP2CAR",
        "color": "#00B4D8",
        "desc": "AP2 Adaptor Complex & Cargo Receptor (LDL/Transferrin). Structural source: 2VGL AP2 Core. Color taxonomy: Adaptor Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          -2.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Ves_DynaminRing",
        "name": "Dynamin-1 Helical GTPase Scissio…",
        "badge": "DYNAMI",
        "color": "#FFB703",
        "desc": "Dynamin-1 Helical GTPase Scission Collar Ring. Structural source: 6DLU Dynamin Polymer Ring. Color taxonomy: GTPase Ring Gold (#FFB703).",
        "dissocVector": [
          -5.0,
          -0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Ves_SNAREZipper",
        "name": "4-Helix Trans-SNARE Bundle",
        "badge": "SNAREZ",
        "color": "#E63946",
        "desc": "4-Helix Trans-SNARE Bundle (Synaptobrevin, Syntaxin-1, SNAP-25). Structural source: 1SFC / 3HD7 SNARE Complex. Color taxonomy: SNARE Zipper Crimson (#E63946).",
        "dissocVector": [
          4.5,
          -1.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Ves_SynaptotagminNSF",
        "name": "Ca²⁺ Sensor Synaptotagmin-1 & He…",
        "badge": "SYNAPT",
        "color": "#F77F00",
        "desc": "Ca²⁺ Sensor Synaptotagmin-1 & Hexameric AAA+ NSF Unwindase Ring. Structural source: 2R83 Synaptotagmin + 3J96 NSF. Color taxonomy: AAA+ Ring Warm Amber (#F77F00).",
        "dissocVector": [
          5.0,
          -4.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Ves_PlasmaMembrane",
        "name": "Plasma Membrane & Budding/Fusing…",
        "badge": "PLASMA",
        "color": "#06D6A0",
        "desc": "Plasma Membrane & Budding/Fusing Vesicle Bilayers. Structural source: POPC / PIP₂ Curved Bilayers. Color taxonomy: Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          1.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : AP2 Recruitment & Clathrin Triskelion Lattice",
        "desc": "Watch AP2 adaptors bind inner-leaflet PIP₂ and cargo tails, nucleating three-legged Clathrin tri...",
        "spoken": "Stage 1 — AP2 Recruitment & Clathrin Triskelion Lattice. Watch AP2 adaptors bind inner-leaflet PIP₂ and cargo tails, nucleating three-legged Clathrin triskelions into a curved pentagonal/hexagonal basket.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Ves_ClathrinCage"
      },
      {
        "step": 2,
        "title": "2 : The Dynamin Helical Collar & GTP Pinch-Off",
        "desc": "Focus on the narrow membrane neck where Dynamin GTPase monomers polymerize into a spiral ring an...",
        "spoken": "Stage 2 — The Dynamin Helical Collar & GTP Pinch-Off. Focus on the narrow membrane neck where Dynamin GTPase monomers polymerize into a spiral ring and hydrolyze GTP to constrict and sever the stalk.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Ves_AP2Cargo"
      },
      {
        "step": 3,
        "title": "3 : Hsc70/Auxilin Uncoating",
        "desc": "Once free in the cytosol, Auxilin recruits Hsc70 ATPase to disassemble the clathrin cage for reu...",
        "spoken": "Stage 3 — Hsc70/Auxilin Uncoating. Once free in the cytosol, Auxilin recruits Hsc70 ATPase to disassemble the clathrin cage for reuse.",
        "color": "#FFB703",
        "targetPiece": "Piece_Ves_DynaminRing"
      },
      {
        "step": 4,
        "title": "4 : Trans-SNARE 4-Helix Zipper Docking",
        "desc": "Move to the exocytic docking site: vesicle v-SNARE intertwines with plasma-membrane t-SNAREs fro...",
        "spoken": "Stage 4 — Trans-SNARE 4-Helix Zipper Docking. Move to the exocytic docking site: vesicle v-SNARE intertwines with plasma-membrane t-SNAREs from N- to C-terminus, winching the two bilayers within 1 nm.",
        "color": "#E63946",
        "targetPiece": "Piece_Ves_SNAREZipper"
      },
      {
        "step": 5,
        "title": "5 : Ca²⁺-Synaptotagmin Fusion & NSF Recycling",
        "desc": "Trigger a Ca²⁺ pulse to insert Synaptotagmin loops into the lipid bilayer, opening the fusion po...",
        "spoken": "Stage 5 — Ca²⁺-Synaptotagmin Fusion & NSF Recycling. Trigger a Ca²⁺ pulse to insert Synaptotagmin loops into the lipid bilayer, opening the fusion pore, followed by hexameric NSF ATPase unwinding the spent cis-SNAREs.",
        "color": "#F77F00",
        "targetPiece": "Piece_Ves_SynaptotagminNSF"
      }
    ]
  },
  "cell_junctions_plasmodesmata": {
    "num": "08",
    "id": "cell_junctions_plasmodesmata",
    "folder": "08_cell_junctions_plasmodesmata",
    "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane",
    "title": "INTERCELLULAR JUNCTIONS: TIGHT, ADHERENS, DESMOSOMES, GAP JUNCTION CONNEXONS & PLANT PLASMODESMATA",
    "subtitle": "Multicellular eukaryotes weld individual cells into polarized epithelia, beating heart muscle, and integrated plant tissues using specialized intercellular junctions: (1)...",
    "analogy": "Shows two adjacent lateral plasma membranes bridged by Claudin tight seals, Ca²⁺-stiffened E-Cadherin adherens zippers, a dodecameric Connexin-26 Gap Junction channel ring (2ZW3), and an inset of a Plant Plasmodesma tunnel with its central ER desmotubule and callose collar.",
    "scaleTag": "EUKARYOTE SCENARIO 08 • 40 NM CELL–CELL INTERCELLULAR INTERFACE • PDB: 2ZW3 / 3Q2V",
    "glb": "/eukaryote/models/cell_junctions_plasmodesmata.glb",
    "pdb": "2ZW3, 3Q2V",
    "pronounce": "[cell-junctions-plasmodesmata]",
    "sliderLabel": "EXTRACELLULAR CA²⁺ CONCENTRATION (CADHERIN RIGIDITY):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Plant Plasmodesmata Ca",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Ca²⁺ Coordination En",
      "🛑 Energy Depleted"
    ],
    "upstream": "Rough ER/Golgi membrane trafficking (13/15) + Cytoskeletal F-Actin (09) & Keratin Intermediate Filaments (11).",
    "coupling": "Inputs: Extracellular Ca²⁺ ions (~1–2 mM stiffening the 5 EC domai ➔ Outputs: Paracellular barrier integrity (Tight Junction trans-epith",
    "downstream": "Transmits mechanical tension to Actin (09) and Keratin (11), and propagates IP₃/Ca²⁺/cAMP waves generated by GPCRs (06) and S",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single Gap Junction channel conductance ~100"
      ],
      [
        "ENERGY CURRENCY",
        "Ca²⁺ Coordination Energy (Cadherin EC-domain"
      ],
      [
        "BIOPHYSICAL SCALE",
        "40 nm Cell–Cell Intercellular Interface"
      ],
      [
        "PRIMARY RCSB PDBS",
        "2ZW3 & 3Q2V"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cadherin",
        "url": "https://pdb101.rcsb.org/motm/92"
      },
      {
        "title": "RCSB PDB Structure 2ZW3 — Human Connexin-26 Gap Junction Channel",
        "url": "https://www.rcsb.org/structure/2ZW3"
      },
      {
        "title": "RCSB PDB Structure 3Q2V — E-Cadherin Ectodomain",
        "url": "https://www.rcsb.org/structure/3Q2V"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Cell Junctions",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26857/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Junc_ClaudinTight",
        "name": "Tight Junction Claudin-15 Strand…",
        "badge": "CLAUDI",
        "color": "#00B4D8",
        "desc": "Tight Junction Claudin-15 Strand & ZO-1 Scaffold. Structural source: 4P79 Claudin Polymer. Color taxonomy: Tight Seal Cerulean (#00B4D8).",
        "dissocVector": [
          -6.0,
          2.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Junc_CadherinZipper",
        "name": "E-Cadherin Trans-Dimer Zipper",
        "badge": "CADHER",
        "color": "#F77F00",
        "desc": "E-Cadherin Trans-Dimer Zipper (EC1–EC5 + Ca²⁺ Ions + Catenins). Structural source: 3Q2V E-Cadherin Ectodomain. Color taxonomy: Cadherin Amber (#F77F00).",
        "dissocVector": [
          -1.5,
          0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Junc_ConnexonRings",
        "name": "Gap Junction Dodecamer",
        "badge": "CONNEX",
        "color": "#FFB703",
        "desc": "Gap Junction Dodecamer (Two Docked Hexameric Connexin-26 Rings). Structural source: 2ZW3 / 7QET Connexin-26. Color taxonomy: Connexon Ring Gold (#FFB703).",
        "dissocVector": [
          3.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Junc_Plasmodesma",
        "name": "Plant Plasmodesma Tunnel, ER Des…",
        "badge": "PLASMO",
        "color": "#9D4EDD",
        "desc": "Plant Plasmodesma Tunnel, ER Desmotubule & Callose Sphincter. Structural source: Cellulose Wall + Desmotubule. Color taxonomy: Plasmodesma Violet (#9D4EDD).",
        "dissocVector": [
          7.0,
          0.0,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Junc_Cell1Membrane",
        "name": "Cell A Lateral Plasma Membrane &…",
        "badge": "CELL1M",
        "color": "#06D6A0",
        "desc": "Cell A Lateral Plasma Membrane & Actin/Keratin Anchors. Structural source: Lipid Bilayer + α/β-Catenin. Color taxonomy: Cell A Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Junc_Cell2Membrane",
        "name": "Cell B Opposing Plasma Membrane…",
        "badge": "CELL2M",
        "color": "#0077B6",
        "desc": "Cell B Opposing Plasma Membrane & Desmoplakin Plaque. Structural source: Lipid Bilayer + Desmoplakin. Color taxonomy: Cell B Membrane Blue (#0077B6).",
        "dissocVector": [
          0.0,
          -4.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Apical Tight Junction Paracellular Seal",
        "desc": "Inspect the kissing strands of Claudin and Occludin stitching two neighboring plasma membranes t...",
        "spoken": "Stage 1 — Apical Tight Junction Paracellular Seal. Inspect the kissing strands of Claudin and Occludin stitching two neighboring plasma membranes together to block paracellular leakage.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Junc_ClaudinTight"
      },
      {
        "step": 2,
        "title": "2 : Ca²⁺-Stiffened Cadherin Zippers",
        "desc": "Zoom into the Adherens Junction where 12 Ca²⁺ ions rigidify the five EC domains of E-Cadherin so...",
        "spoken": "Stage 2 — Ca²⁺-Stiffened Cadherin Zippers. Zoom into the Adherens Junction where 12 Ca²⁺ ions rigidify the five EC domains of E-Cadherin so opposing cells can swap Trp2 side-chains and link to F-actin via α/β-catenin.",
        "color": "#F77F00",
        "targetPiece": "Piece_Junc_CadherinZipper"
      },
      {
        "step": 3,
        "title": "3 : Hexameric Connexon Gap Junction Rings",
        "desc": "Fly through the center of the dodecameric Connexin-26 channel (two docked 6-subunit rings) as cA...",
        "spoken": "Stage 3 — Hexameric Connexon Gap Junction Rings. Fly through the center of the dodecameric Connexin-26 channel (two docked 6-subunit rings) as cAMP, IP₃, and K⁺ ions stream directly between cytoplasms.",
        "color": "#FFB703",
        "targetPiece": "Piece_Junc_ConnexonRings"
      },
      {
        "step": 4,
        "title": "4 : Emergency Iris Closure of Gap Junctions",
        "desc": "Simulate a dying neighbor cell (high cytosolic Ca²⁺ and H⁺) and watch the six N-terminal helices...",
        "spoken": "Stage 4 — Emergency Iris Closure of Gap Junctions. Simulate a dying neighbor cell (high cytosolic Ca²⁺ and H⁺) and watch the six N-terminal helices of the Connexon ring plug the central pore.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Junc_Plasmodesma"
      },
      {
        "step": 5,
        "title": "5 : Plant Plasmodesmata & the ER Desmotubule",
        "desc": "Compare animal Gap Junctions with a plant Plasmodesma tunnel crossing the cellulose wall with a ...",
        "spoken": "Stage 5 — Plant Plasmodesmata & the ER Desmotubule. Compare animal Gap Junctions with a plant Plasmodesma tunnel crossing the cellulose wall with a continuous ER rod (desmotubule) through its core.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Junc_Cell1Membrane"
      }
    ]
  },
  "actin_myosin_sarcomere": {
    "num": "09",
    "id": "actin_myosin_sarcomere",
    "folder": "09_actin_myosin_sarcomere",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "F-ACTIN DOUBLE-HELICAL MICROFILAMENTS, ARP2/3 BRANCHING & MYOSIN POWER STROKE",
    "subtitle": "Actin is the most abundant protein in many eukaryotic cells, assembling from 42 kDa globular ATP-bound G-Actin monomers into polar, right-handed double-helical F-Actin mi...",
    "analogy": "Combines the polar F-Actin double helix decorated with Tropomyosin/Troponin and a two-headed Myosin motor walking toward the barbed (+)-end alongside an Arp2/3 70° branch junction. Users can control Ca²⁺ concentration (to roll Tropomyosin out of the myosin-binding groove) and ATP concentration (to prevent rigor mortis locking).",
    "scaleTag": "EUKARYOTE SCENARIO 09 • 35–100 NM CONTRACTILE & BRANCHED ACTIN MACHINERY • PDB: 6X5Z / 6UHC",
    "glb": "/eukaryote/models/actin_myosin_sarcomere.glb",
    "pdb": "6X5Z, 6UHC",
    "pronounce": "[actin-myosin-sarcomere]",
    "sliderLabel": "SARCOPLASMIC CA²⁺ LEVEL (ΜM):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ WASP–Arp2/3 Branching ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (both",
      "🛑 Energy Depleted"
    ],
    "upstream": "TRiC/CCT chaperonin folding of G-actin (Scenario 34) + Mitochondrial ATP (Scenario 21) + Smooth ER / Sarcoplasmic Reticulum C",
    "coupling": "Inputs: ATP-bound G-Actin monomers + Profilin (feeding barbed (+)- ➔ Outputs: Mechanical contractile force (~3–5 pN and ~5–10 nm displac",
    "downstream": "Generates the pulling tension on Integrin Focal Adhesions (Scenario 03) and Cadherin Adherens Junctions (Scenario 08), drives",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Myosin II: ~5–20 ATP/sec per head; Arp2/3 la"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (both in F-Actin treadmilling"
      ],
      [
        "BIOPHYSICAL SCALE",
        "35–100 nm Contractile & Branched Actin Machi"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6X5Z & 6UHC"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Actin",
        "url": "https://pdb101.rcsb.org/motm/19"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Myosin",
        "url": "https://pdb101.rcsb.org/motm/18"
      },
      {
        "title": "RCSB PDB Structure 6X5Z — Native Cardiac Thin Filament with Myosin",
        "url": "https://www.rcsb.org/structure/6X5Z"
      },
      {
        "title": "RCSB PDB Structure 6UHC — Active Arp2/3 Actin Branch Junction",
        "url": "https://www.rcsb.org/structure/6UHC"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Act_FActinHelix",
        "name": "Polar Double-Helical F-Actin Fil…",
        "badge": "FACTIN",
        "color": "#3A86FF",
        "desc": "Polar Double-Helical F-Actin Filament (Barbed + to Pointed - End). Structural source: 6X5Z / 3J8I F-Actin. Color taxonomy: Actin Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Act_TropomyosinTroponin",
        "name": "Tropomyosin Coiled-Coil Cable &…",
        "badge": "TROPOM",
        "color": "#00B4D8",
        "desc": "Tropomyosin Coiled-Coil Cable & Ca²⁺-Sensing Troponin (TnC/TnI/TnT). Structural source: 6X5Z Tropomyosin + Troponin. Color taxonomy: Regulatory Cable Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          2.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Act_MyosinHeads",
        "name": "Myosin Motor Domain, Converter &…",
        "badge": "MYOSIN",
        "color": "#E63946",
        "desc": "Myosin Motor Domain, Converter & Light-Chain Lever Arm. Structural source: 6X5Z / 1OE9 Myosin S1. Color taxonomy: Motor Head Crimson (#E63946).",
        "dissocVector": [
          2.5,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Act_Arp23Branch",
        "name": "Arp2/3 7-Subunit Complex Nucleat…",
        "badge": "ARP23B",
        "color": "#FFB703",
        "desc": "Arp2/3 7-Subunit Complex Nucleating 70° Daughter Actin Branch. Structural source: 6UHC Arp2/3 Branch Junction. Color taxonomy: Branch Nucleator Gold (#FFB703).",
        "dissocVector": [
          -5.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Act_DaughterFilament",
        "name": "70° Branched Daughter F-Actin Fi…",
        "badge": "DAUGHT",
        "color": "#9D4EDD",
        "desc": "70° Branched Daughter F-Actin Filament & Capping Protein. Structural source: 6UHC Daughter Actin. Color taxonomy: Daughter Branch Violet (#9D4EDD).",
        "dissocVector": [
          -7.5,
          -6.0,
          3.0
        ]
      },
      {
        "meshName": "Piece_Act_ProfilinCofilin",
        "name": "G-Actin–Profilin Delivery & Cofi…",
        "badge": "PROFIL",
        "color": "#06D6A0",
        "desc": "G-Actin–Profilin Delivery & Cofilin Severing Factors. Structural source: 2BTF Profilin-Actin. Color taxonomy: Remodeling Factor Jade (#06D6A0).",
        "dissocVector": [
          6.5,
          -3.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : F-Actin Treadmilling & Polarity",
        "desc": "Examine the right-handed double-helical F-Actin polymer: ATP-G-actin adds rapidly at the barbed ...",
        "spoken": "Stage 1 — F-Actin Treadmilling & Polarity. Examine the right-handed double-helical F-Actin polymer: ATP-G-actin adds rapidly at the barbed (+)-end, hydrolyzes ATP to ADP, and dissociates with Cofilin at the pointed (-)-end.",
        "color": "#3A86FF",
        "targetPiece": "Piece_Act_FActinHelix"
      },
      {
        "step": 2,
        "title": "2 : Arp2/3 70° Dendritic Branching",
        "desc": "Zoom to the Arp2/3 complex where Arp2 and Arp3 mimic a barbed-end dimer on the side of a mother ...",
        "spoken": "Stage 2 — Arp2/3 70° Dendritic Branching. Zoom to the Arp2/3 complex where Arp2 and Arp3 mimic a barbed-end dimer on the side of a mother filament, sprouting a daughter branch at 70°.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Act_TropomyosinTroponin"
      },
      {
        "step": 3,
        "title": "3 : Ca²⁺–Troponin Unlocking of Tropomyosin",
        "desc": "Flood the filament with Ca²⁺: Troponin-C binds 4 Ca²⁺ ions, pulling Troponin-I so the Tropomyosi...",
        "spoken": "Stage 3 — Ca²⁺–Troponin Unlocking of Tropomyosin. Flood the filament with Ca²⁺: Troponin-C binds 4 Ca²⁺ ions, pulling Troponin-I so the Tropomyosin cable rolls azimuthally to expose Myosin-binding sites on actin.",
        "color": "#E63946",
        "targetPiece": "Piece_Act_MyosinHeads"
      },
      {
        "step": 4,
        "title": "4 : Myosin ATP Binding & Lever-Arm Cocking",
        "desc": "Watch ATP bind the Myosin cleft, detaching the head from actin; hydrolysis to ADP·Pᵢ swings the ...",
        "spoken": "Stage 4 — Myosin ATP Binding & Lever-Arm Cocking. Watch ATP bind the Myosin cleft, detaching the head from actin; hydrolysis to ADP·Pᵢ swings the converter and light-chain lever arm into the cocked pre-power-stroke state.",
        "color": "#FFB703",
        "targetPiece": "Piece_Act_Arp23Branch"
      },
      {
        "step": 5,
        "title": "5 : Phosphate Release & The 10 nm Power Stroke",
        "desc": "Myosin weakly rebinds a new actin subunit; Pᵢ release locks the cleft shut and snaps the lever a...",
        "spoken": "Stage 5 — Phosphate Release & The 10 nm Power Stroke. Myosin weakly rebinds a new actin subunit; Pᵢ release locks the cleft shut and snaps the lever arm forward by 10 nm, pulling the actin filament.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Act_DaughterFilament"
      }
    ]
  },
  "microtubules_centrosome_motors": {
    "num": "10",
    "id": "microtubules_centrosome_motors",
    "folder": "10_microtubules_centrosome_motors",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "MICROTUBULE 13-PROTOFILAMENT HOLLOW TUBE, CENTROSOME (Γ-TURC) & KINESIN / DYNEIN WALKERS",
    "subtitle": "Microtubules are stiff, hollow 25 nm cylindrical highways assembled from 13 parallel protofilaments of α/β-Tubulin heterodimers. In animal cells, their (-)-ends are nucle...",
    "analogy": "Shows a 13-protofilament microtubule nucleated at its (-)-end by the cone-shaped γ-TuRC ring (6U42), with a two-headed Kinesin-1 dimer stepping toward the (+)-end on one protofilament and a Cytoplasmic Dynein–Dynactin AAA+ ring complex hauling a cargo vesicle toward the (-)-end on another.",
    "scaleTag": "EUKARYOTE SCENARIO 10 • 25 NM DIAMETER HOLLOW CYLINDER & MOTOR TRUCKS • PDB: 6U42 / 4HNA",
    "glb": "/eukaryote/models/microtubules_centrosome_motors.glb",
    "pdb": "6U42, 4HNA",
    "pronounce": "[microtubules-centrosome-motors]",
    "sliderLabel": "(+)-END GTP CAP STATE (POLYMERIZATION RESCUE ↔ CATASTROPHE PEEL):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Chemotherapy Drug Togg",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Hydrolysis (β-Tu",
      "🛑 Energy Depleted"
    ],
    "upstream": "TRiC/CCT chaperonin tubulin folding (Scenario 34) + Mitochondrial ATP & GTP (Scenario 21) + Golgi/ER/Endosome cargo vesicles ",
    "coupling": "Inputs: GTP-bound α/β-Tubulin heterodimers (for (+)-end polymeriza ➔ Outputs: Long-range anterograde transport (Golgi → Plasma Membrane ",
    "downstream": "Positions the ER (13), Golgi (15), Lysosomes (16), and Mitochondria (19); forms the 9+2 Axoneme of Cilia/Flagella (Scenario 1",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Kinesin-1 & Dynein-1 take ~100 steps/sec (~8"
      ],
      [
        "ENERGY CURRENCY",
        "GTP Hydrolysis (β-Tubulin E-site dynamic ins"
      ],
      [
        "BIOPHYSICAL SCALE",
        "25 nm Diameter Hollow Cylinder & Motor Truck"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6U42 & 4HNA"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Microtubules",
        "url": "https://pdb101.rcsb.org/motm/175"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Kinesin",
        "url": "https://pdb101.rcsb.org/motm/64"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Dynein",
        "url": "https://pdb101.rcsb.org/motm/214"
      },
      {
        "title": "RCSB PDB Structure 6U42 — Human γ-Tubulin Ring Complex",
        "url": "https://www.rcsb.org/structure/6U42"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_MT_GammaTuRC",
        "name": "γ-Tubulin Ring Complex",
        "badge": "GAMMAT",
        "color": "#9D4EDD",
        "desc": "γ-Tubulin Ring Complex (γ-TuRC 14-Spoke Nucleation Cone) & Centriole. Structural source: 6U42 γ-TuRC. Color taxonomy: Nucleator Ring Violet (#9D4EDD).",
        "dissocVector": [
          -7.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_MT_ProtofilamentTube",
        "name": "13-Protofilament α/β-Tubulin Hol…",
        "badge": "PROTOF",
        "color": "#3A86FF",
        "desc": "13-Protofilament α/β-Tubulin Hollow Cylinder (25 nm Outer / 15 nm Inner). Structural source: 3J6F / 6EVW Microtubule Lattice. Color taxonomy: Tubulin Lattice Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_MT_GTPCapHorns",
        "name": "Dynamic",
        "badge": "GTPCAP",
        "color": "#06D6A0",
        "desc": "Dynamic (+)-End GTP Cap & Peeling GDP Ram's Horn Protofilaments. Structural source: GTP vs. GDP-Tubulin Tip. Color taxonomy: GTP Cap Jade (#06D6A0).",
        "dissocVector": [
          7.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_MT_Kinesin1Walker",
        "name": "Kinesin-1 Dimer",
        "badge": "KINESI",
        "color": "#FFB703",
        "desc": "Kinesin-1 Dimer (Two Motor Heads, Neck Linker, Coiled Stalk & Cargo). Structural source: 4HNA / 3KIN Kinesin-1. Color taxonomy: Anterograde Motor Gold (#FFB703).",
        "dissocVector": [
          -1.0,
          4.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_MT_DyneinDynactin",
        "name": "Cytoplasmic Dynein-1",
        "badge": "DYNEIN",
        "color": "#E63946",
        "desc": "Cytoplasmic Dynein-1 (Hexameric AAA+ Ring, Stalk/MTBD & Dynactin). Structural source: 7Z8G Dynein–Dynactin–BICD2. Color taxonomy: Retrograde AAA+ Ring Crimson (#E63946).",
        "dissocVector": [
          2.5,
          -4.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_MT_CargoVesicle",
        "name": "Tethered Rab-Decorated Secretory…",
        "badge": "CARGOV",
        "color": "#00B4D8",
        "desc": "Tethered Rab-Decorated Secretory Cargo Vesicle. Structural source: Phospholipid Vesicle + Rab. Color taxonomy: Cargo Vesicle Cerulean (#00B4D8).",
        "dissocVector": [
          1.0,
          6.5,
          3.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Nucleation at the Centrosome γ-TuRC Ring",
        "desc": "Start at the (-)-end where the 14-spoked γ-Tubulin Ring Complex (γ-TuRC) acts as a helical templ...",
        "spoken": "Stage 1 — Nucleation at the Centrosome γ-TuRC Ring. Start at the (-)-end where the 14-spoked γ-Tubulin Ring Complex (γ-TuRC) acts as a helical template to seed 13 protofilaments.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_MT_GammaTuRC"
      },
      {
        "step": 2,
        "title": "2 : The 13-Protofilament Lattice & Seam",
        "desc": "Inspect how α-tubulin (purple-blue) and β-tubulin (cyan-blue) heterodimers stack head-to-tail in...",
        "spoken": "Stage 2 — The 13-Protofilament Lattice & Seam. Inspect how α-tubulin (purple-blue) and β-tubulin (cyan-blue) heterodimers stack head-to-tail into a stiff 25 nm hollow cylinder.",
        "color": "#3A86FF",
        "targetPiece": "Piece_MT_ProtofilamentTube"
      },
      {
        "step": 3,
        "title": "3 : Dynamic Instability: GTP Cap vs. Catastrophe",
        "desc": "Watch β-tubulin hydrolyze GTP to GDP in the lattice: when the protective GTP cap at the (+)-end ...",
        "spoken": "Stage 3 — Dynamic Instability: GTP Cap vs. Catastrophe. Watch β-tubulin hydrolyze GTP to GDP in the lattice: when the protective GTP cap at the (+)-end is lost, strained GDP protofilaments curl outward and peel apart.",
        "color": "#06D6A0",
        "targetPiece": "Piece_MT_GTPCapHorns"
      },
      {
        "step": 4,
        "title": "4 : Kinesin-1 Hand-Over-Hand Anterograde Walking",
        "desc": "Zoom to Kinesin-1: ATP binding to the leading head zips its 14-residue neck linker forward, thro...",
        "spoken": "Stage 4 — Kinesin-1 Hand-Over-Hand Anterograde Walking. Zoom to Kinesin-1: ATP binding to the leading head zips its 14-residue neck linker forward, throwing the trailing head 16.4 nm ahead to the next β-tubulin site (+8.2 nm net step).",
        "color": "#FFB703",
        "targetPiece": "Piece_MT_Kinesin1Walker"
      },
      {
        "step": 5,
        "title": "5 : Dynein–Dynactin AAA+ Ring Retrograde Hauling",
        "desc": "Follow Cytoplasmic Dynein-1 using ATP hydrolysis in its AAA1 hexameric ring to swing its coiled-...",
        "spoken": "Stage 5 — Dynein–Dynactin AAA+ Ring Retrograde Hauling. Follow Cytoplasmic Dynein-1 using ATP hydrolysis in its AAA1 hexameric ring to swing its coiled-coil stalk and pull cargo vesicles toward the (-)-end.",
        "color": "#E63946",
        "targetPiece": "Piece_MT_DyneinDynactin"
      }
    ]
  },
  "intermediate_filaments_lamins": {
    "num": "11",
    "id": "intermediate_filaments_lamins",
    "folder": "11_intermediate_filaments_lamins",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "INTERMEDIATE FILAMENTS: COILED-COIL KERATIN ROPES & NUCLEAR LAMIN MESHWORK",
    "subtitle": "Unlike F-Actin (7 nm) and Microtubules (25 nm)—which are built from globular nucleotide-hydrolyzing monomers and have structural polarity—Intermediate Filaments (IFs, 10 ...",
    "analogy": "Displays the hierarchical assembly of an Intermediate Filament from single α-helix → parallel coiled-coil dimer → staggered antiparallel tetramer → 8-tetramer ULF → compacted 10 nm Keratin rope alongside the orthogonal Nuclear Lamin A/C meshwork (with C-terminal Ig-fold tails) tethered to the inner nuclear envelope.",
    "scaleTag": "EUKARYOTE SCENARIO 11 • 10 NM DIAMETER HIGH-TENSILE COILED-COIL ROPE • PDB: 6JLB / 3TNU",
    "glb": "/eukaryote/models/intermediate_filaments_lamins.glb",
    "pdb": "6JLB, 3TNU",
    "pronounce": "[intermediate-filaments-lamins]",
    "sliderLabel": "MECHANICAL TENSILE STRETCH (%):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ HGPS Progeria (Lamin Δ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Spontaneous Hydropho",
      "🛑 Energy Depleted"
    ],
    "upstream": "80S Ribosome translation (Scenario 32) + CDK1 mitotic kinases (Scenario 35).",
    "coupling": "Inputs: Acidic (Type I) & Basic (Type II) Keratin monomers or Vime ➔ Outputs: Non-polar 10 nm high-tensile cytoplasmic ropes resisting s",
    "downstream": "Anchors into Desmosomes and Hemidesmosomes at the Plasma Membrane (Scenario 08) and forms the structural shell of the Nucleus",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Structurally stable for hours to days in int"
      ],
      [
        "ENERGY CURRENCY",
        "Spontaneous Hydrophobic Heptad Coiled-Coil S"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10 nm Diameter High-Tensile Coiled-Coil Rope"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6JLB & 3TNU"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 6JLB — Human Nuclear Lamin A/C Coiled-Coil",
        "url": "https://www.rcsb.org/structure/6JLB"
      },
      {
        "title": "RCSB PDB Structure 3TNU — Keratin 5/14 Heterodimer",
        "url": "https://www.rcsb.org/structure/3TNU"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Intermediate Filaments",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26862/"
      },
      {
        "title": "Cold Spring Harbor Perspectives — Intermediate Filaments & Nuclear Lamins",
        "url": "https://cshperspectives.cshlp.org/content/8/11/a018242.full"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_IF_CoiledCoilDimer",
        "name": "Parallel Left-Handed Coiled-Coil…",
        "badge": "COILED",
        "color": "#00B4D8",
        "desc": "Parallel Left-Handed Coiled-Coil Dimer (Heptad Rod 1A–1B–2A–2B). Structural source: 3TNU Keratin 5/14 Coiled-Coil. Color taxonomy: Dimer Rod Cerulean (#00B4D8).",
        "dissocVector": [
          -6.5,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_StaggeredTetramer",
        "name": "Antiparallel Staggered Non-Polar…",
        "badge": "STAGGE",
        "color": "#FFB703",
        "desc": "Antiparallel Staggered Non-Polar Tetramer Building Block. Structural source: 6JLB Lamin / Keratin Tetramer. Color taxonomy: Tetramer Gold (#FFB703).",
        "dissocVector": [
          -2.0,
          4.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_IF_ULF_Cylinder",
        "name": "8-Tetramer Unit-Length Filament",
        "badge": "CYLIND",
        "color": "#F77F00",
        "desc": "8-Tetramer Unit-Length Filament (ULF) Lateral Bundle. Structural source: Octameric Tetramer Ring. Color taxonomy: ULF Bundle Amber (#F77F00).",
        "dissocVector": [
          3.5,
          4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_Compacted10nmRope",
        "name": "Compacted 10 nm Cytoplasmic Kera…",
        "badge": "COMPAC",
        "color": "#3A86FF",
        "desc": "Compacted 10 nm Cytoplasmic Keratin / Vimentin Rope. Structural source: Braided 32-Chain IF Rope. Color taxonomy: Tensile Rope Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_NuclearLaminMesh",
        "name": "Nuclear Lamin A/C 3.5 nm Orthogo…",
        "badge": "NUCLEA",
        "color": "#9D4EDD",
        "desc": "Nuclear Lamin A/C 3.5 nm Orthogonal Mesh & Ig-Fold Tails. Structural source: 6JLB + 1IFR Lamin Ig Domain. Color taxonomy: Nuclear Lamina Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          -4.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_IF_InnerNuclearMembrane",
        "name": "Inner Nuclear Membrane with Emer…",
        "badge": "INNERN",
        "color": "#06D6A0",
        "desc": "Inner Nuclear Membrane with Emerin/SUN LINC Anchors. Structural source: Nuclear Envelope Bilayer. Color taxonomy: Nuclear Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -6.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Heptad Repeat Monomers to Coiled-Coil Dimers",
        "desc": "Inspect how hydrophobic residues at positions 'a' and 'd' of the 7-residue heptad repeat zip two...",
        "spoken": "Stage 1 — Heptad Repeat Monomers to Coiled-Coil Dimers. Inspect how hydrophobic residues at positions 'a' and 'd' of the 7-residue heptad repeat zip two parallel α-helices into a coiled-coil dimer.",
        "color": "#00B4D8",
        "targetPiece": "Piece_IF_CoiledCoilDimer"
      },
      {
        "step": 2,
        "title": "2 : Antiparallel Staggered Tetramer (Loss of Polarity)",
        "desc": "Two coiled-coil dimers associate in opposite orientations, creating a symmetric, non-polar tetra...",
        "spoken": "Stage 2 — Antiparallel Staggered Tetramer (Loss of Polarity). Two coiled-coil dimers associate in opposite orientations, creating a symmetric, non-polar tetramer with no (+) or (-) end.",
        "color": "#FFB703",
        "targetPiece": "Piece_IF_StaggeredTetramer"
      },
      {
        "step": 3,
        "title": "3 : Lateral Packing into 10 nm Ropes",
        "desc": "Eight tetramers wrap into a hollow Unit-Length Filament (ULF) and radially compact into a 32-str...",
        "spoken": "Stage 3 — Lateral Packing into 10 nm Ropes. Eight tetramers wrap into a hollow Unit-Length Filament (ULF) and radially compact into a 32-strand 10 nm Keratin cable.",
        "color": "#F77F00",
        "targetPiece": "Piece_IF_ULF_Cylinder"
      },
      {
        "step": 4,
        "title": "4 : Extreme Strain-Stiffening Elasticity",
        "desc": "Pull the filament to 250% length: unlike brittle microtubules that snap at 50% strain, IF coiled...",
        "spoken": "Stage 4 — Extreme Strain-Stiffening Elasticity. Pull the filament to 250% length: unlike brittle microtubules that snap at 50% strain, IF coiled-coils unwind into β-sheets to absorb massive mechanical energy.",
        "color": "#3A86FF",
        "targetPiece": "Piece_IF_Compacted10nmRope"
      },
      {
        "step": 5,
        "title": "5 : Nuclear Lamina Mesh & Mitotic CDK1 Disassembly",
        "desc": "Examine the nuclear Lamin A/C meshwork (with globular Ig-fold tails) and trigger CDK1 phosphoryl...",
        "spoken": "Stage 5 — Nuclear Lamina Mesh & Mitotic CDK1 Disassembly. Examine the nuclear Lamin A/C meshwork (with globular Ig-fold tails) and trigger CDK1 phosphorylation to dissolve the nuclear cage for mitosis.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_IF_NuclearLaminMesh"
      }
    ]
  },
  "eukaryotic_cilium_axoneme": {
    "num": "12",
    "id": "eukaryotic_cilium_axoneme",
    "folder": "12_eukaryotic_cilium_axoneme",
    "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers",
    "title": "EUKARYOTIC 9+2 MOTILE CILIUM / FLAGELLUM AXONEME & INTRAFLAGELLAR TRANSPORT (IFT)",
    "subtitle": "Whereas the bacterial flagellum (Prokaryote Scenario 02) is a passive extracellular protein propeller spun at its base by a proton-driven rotary motor, the Eukaryotic Mot...",
    "analogy": "Renders a 3D cross-sectional and longitudinal cutaway of the 9+2 Axoneme inside its ciliary membrane sheath: the 9 outer A/B doublets ring, the 2 central pair singlets, Radial Spokes (RS1–RS3), Nexin N-DRC bridges, Outer/Inner Axonemal Dynein Arms, and an IFT cargo train riding between the outer doublet and the ciliary membrane.",
    "scaleTag": "EUKARYOTE SCENARIO 12 • 250 NM DIAMETER × 10 ΜM 9+2 MICROTUBULE AXONEME • PDB: 8J07 / 8B6X",
    "glb": "/eukaryote/models/eukaryotic_cilium_axoneme.glb",
    "pdb": "8J07, 8B6X",
    "pronounce": "[eukaryotic-cilium-axoneme]",
    "sliderLabel": "BEAT WAVEFORM MODE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Intraflagellar Transpo",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (Axon",
      "🛑 Energy Depleted"
    ],
    "upstream": "Centrosome Basal Body templating (Scenario 10) + Cytosolic ATP & GTP + Golgi ciliary membrane vesicles (Scenario 15).",
    "coupling": "Inputs: Cytosolic ATP (~10⁵ ATP/sec per beating cilium fueling Out ➔ Outputs: Hydrodynamic fluid propulsion (mucociliary clearance in ai",
    "downstream": "Drives whole-cell motility or extracellular fluid flow across the Plasma Membrane (Scenario 01/04) and relays Primary Cilium ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Ciliary beat frequency 15–60 Hz; IFT anterog"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (Axonemal Outer/Inner Dynein "
      ],
      [
        "BIOPHYSICAL SCALE",
        "250 nm Diameter × 10 µm 9+2 Microtubule Axon"
      ],
      [
        "PRIMARY RCSB PDBS",
        "8J07 & 8B6X"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 8J07 — 96-nm Modular Repeat of Human Respiratory Doublet Microtubule",
        "url": "https://www.rcsb.org/structure/8J07"
      },
      {
        "title": "RCSB PDB Structure 8B6X — Anterograde Intraflagellar Transport Train",
        "url": "https://www.rcsb.org/structure/8B6X"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Dynein",
        "url": "https://pdb101.rcsb.org/motm/214"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Structure and Function of Cilia and Flagella",
        "url": "https://www.nature.com/articles/s41580-018-0092-2"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Cil_OuterDoublets9",
        "name": "Ring of 9 Outer Microtubule Doub…",
        "badge": "OUTERD",
        "color": "#3A86FF",
        "desc": "Ring of 9 Outer Microtubule Doublets (13-PF A-Tubule + 10-PF B-Tubule). Structural source: 8J07 Outer Doublet Ring. Color taxonomy: Doublet Ring Cobalt Blue (#3A86FF).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Cil_CentralPair2",
        "name": "Central Pair Apparatus",
        "badge": "CENTRA",
        "color": "#9D4EDD",
        "desc": "Central Pair Apparatus (C1 & C2 Singlet Microtubules + Projections). Structural source: 7RRO Central Pair. Color taxonomy: Central Pair Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          0.0,
          4.0
        ]
      },
      {
        "meshName": "Piece_Cil_DyneinArms",
        "name": "Outer",
        "badge": "DYNEIN",
        "color": "#E63946",
        "desc": "Outer (ODA) & Inner (IDA) Axonemal Dynein Motor Arms. Structural source: 8J07 Axonemal Dyneins. Color taxonomy: Dynein Motor Crimson (#E63946).",
        "dissocVector": [
          4.5,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Cil_RadialSpokesNexin",
        "name": "T-Shaped Radial Spokes",
        "badge": "RADIAL",
        "color": "#FFB703",
        "desc": "T-Shaped Radial Spokes (RS1–RS3) & Nexin-DRC Elastic Bridges. Structural source: 7RRO / 8J07 Radial Spokes. Color taxonomy: Regulatory Spoke Gold (#FFB703).",
        "dissocVector": [
          -4.5,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Cil_IFTTrain",
        "name": "Intraflagellar Transport Train",
        "badge": "IFTTRA",
        "color": "#00B4D8",
        "desc": "Intraflagellar Transport Train (IFT-A/B + Kinesin-2 / Dynein-2). Structural source: 8B6X IFT Train Polymer. Color taxonomy: IFT Train Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          5.5,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Cil_CiliaryMembraneBasal",
        "name": "Ciliary Membrane Sheath & 9×3 Ba…",
        "badge": "CILIAR",
        "color": "#06D6A0",
        "desc": "Ciliary Membrane Sheath & 9×3 Basal Body Transition Zone. Structural source: Ciliary Bilayer + Y-Links. Color taxonomy: Ciliary Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -5.5,
          -3.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The 9+2 Axoneme Ring vs. Bacterial Flagellum",
        "desc": "Contrast the eukaryotic membrane-covered 9+2 microtubule axoneme (powered by thousands of dynein...",
        "spoken": "Stage 1 — The 9+2 Axoneme Ring vs. Bacterial Flagellum. Contrast the eukaryotic membrane-covered 9+2 microtubule axoneme (powered by thousands of dyneins along its entire length) against the prokaryotic rotary filament.",
        "color": "#3A86FF",
        "targetPiece": "Piece_Cil_OuterDoublets9"
      },
      {
        "step": 2,
        "title": "2 : Outer A/B Doublets & Dynein Walking",
        "desc": "Zoom into two adjacent outer doublets: ATP hydrolysis drives Outer and Inner Dynein Arms on the ...",
        "spoken": "Stage 2 — Outer A/B Doublets & Dynein Walking. Zoom into two adjacent outer doublets: ATP hydrolysis drives Outer and Inner Dynein Arms on the A-tubule to walk toward the (-)-end of the neighboring B-tubule.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Cil_CentralPair2"
      },
      {
        "step": 3,
        "title": "3 : Nexin Links & Radial Spokes Convert Sliding to Bending",
        "desc": "Show how Nexin-DRC elastic bridges prevent the doublets from telescoping apart, converting linea...",
        "spoken": "Stage 3 — Nexin Links & Radial Spokes Convert Sliding to Bending. Show how Nexin-DRC elastic bridges prevent the doublets from telescoping apart, converting linear inter-doublet sliding into a macroscopic bend.",
        "color": "#E63946",
        "targetPiece": "Piece_Cil_DyneinArms"
      },
      {
        "step": 4,
        "title": "4 : Central Pair & Asymmetric Switch Point",
        "desc": "Observe the Central Pair projections contacting the T-shaped Radial Spokes to alternate dynein a...",
        "spoken": "Stage 4 — Central Pair & Asymmetric Switch Point. Observe the Central Pair projections contacting the T-shaped Radial Spokes to alternate dynein activation between opposite sides of the ring (doublets 1–4 vs. 6–9).",
        "color": "#FFB703",
        "targetPiece": "Piece_Cil_RadialSpokesNexin"
      },
      {
        "step": 5,
        "title": "5 : Intraflagellar Transport (IFT) Elevator",
        "desc": "Follow a polymeric IFT-A/B train hauled up the outer doublet by Kinesin-2 to deliver tubulin to ...",
        "spoken": "Stage 5 — Intraflagellar Transport (IFT) Elevator. Follow a polymeric IFT-A/B train hauled up the outer doublet by Kinesin-2 to deliver tubulin to the growing (+)-end tip, then returned by Dynein-2.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Cil_IFTTrain"
      }
    ]
  },
  "rough_er_sec61_ost": {
    "num": "13",
    "id": "rough_er_sec61_ost",
    "folder": "13_rough_er_sec61_ost",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "ROUGH ENDOPLASMIC RETICULUM, SIGNAL RECOGNITION PARTICLE (SRP), SEC61 TRANSLOCON & N-GLYCOSYLATION",
    "subtitle": "Roughly one-third of the entire eukaryotic proteome (all secreted proteins, plasma membrane receptors, and ER/Golgi/Lysosome enzymes) enters the Endoplasmic Reticulum (ER...",
    "analogy": "Renders the complete ER membrane translocon holocomplex: an 80S ribosome docked atop the Sec61αβγ hourglass channel, flanked by the SRP–SRP Receptor handover module, Signal Peptidase, luminal BiP chaperone, and the Oligosaccharyltransferase (OST) enzyme transferring a glowing 14-sugar N-glycan tree from Dolichol-PP onto the emerging polypeptide.",
    "scaleTag": "EUKARYOTE SCENARIO 13 • 35 NM CO-TRANSLATIONAL ER TRANSLOCATION & GLYCOSYLATION COMPLEX • PDB: 7K5I / 7O7F",
    "glb": "/eukaryote/models/rough_er_sec61_ost.glb",
    "pdb": "7K5I, 7O7F",
    "pronounce": "[rough-er-sec61-ost]",
    "sliderLabel": "NASCENT POLYPEPTIDE FATE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Co-Translational Elong",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Ribosomal Peptidyl T",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nucleus mRNA export (Scenario 27) + Cytoplasmic 80S Ribosome translation initiation (Scenario 32) + Dolichol-PP-Glc₃Man₉GlcNA",
    "coupling": "Inputs: Translating 80S Ribosome–mRNA–Nascent Signal Peptide compl ➔ Outputs: N-Glycosylated, disulfide-bonded luminal secretory protein",
    "downstream": "Properly folded glycoproteins bud from ER Exit Sites in COPII cages to the Golgi Apparatus (Scenario 15); terminally misfolde",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Co-translational translocation ~5–10 amino a"
      ],
      [
        "ENERGY CURRENCY",
        "Ribosomal Peptidyl Transferase & eEF2 GTP Pu"
      ],
      [
        "BIOPHYSICAL SCALE",
        "35 nm Co-Translational ER Translocation & Gl"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7K5I & 7O7F"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Signal Recognition Particle",
        "url": "https://pdb101.rcsb.org/motm/212"
      },
      {
        "title": "RCSB PDB Structure 7K5I — Mammalian 80S Ribosome–Sec61–OST Complex",
        "url": "https://www.rcsb.org/structure/7K5I"
      },
      {
        "title": "RCSB PDB Structure 7O7F — Human SRP–Receptor Pre-Handover Complex",
        "url": "https://www.rcsb.org/structure/7O7F"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Endoplasmic Reticulum",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26841/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_RER_Ribosome80S",
        "name": "Docked Cytoplasmic 80S Ribosome",
        "badge": "RIBOSO",
        "color": "#7209B7",
        "desc": "Docked Cytoplasmic 80S Ribosome (60S + 40S Subunits & mRNA). Structural source: 7K5I / 4V6X 80S Ribosome. Color taxonomy: Ribosome Royal Purple (#7209B7).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_RER_SRP_Receptor",
        "name": "Signal Recognition Particle",
        "badge": "RECEPT",
        "color": "#FFB703",
        "desc": "Signal Recognition Particle (7SL RNA + SRP54) & ER SRP Receptor. Structural source: 7O7F SRP–SR GTPase Complex. Color taxonomy: SRP Targeting Gold (#FFB703).",
        "dissocVector": [
          -5.0,
          3.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_RER_Sec61Channel",
        "name": "Sec61αβγ Hourglass Translocon",
        "badge": "SEC61C",
        "color": "#00B4D8",
        "desc": "Sec61αβγ Hourglass Translocon (Plug Helix & Lateral Gate). Structural source: 7K5I Sec61 Complex. Color taxonomy: Translocon Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_RER_OST_Glycan",
        "name": "Oligosaccharyltransferase",
        "badge": "GLYCAN",
        "color": "#F77F00",
        "desc": "Oligosaccharyltransferase (OST-A) & Dolichol-PP-Glc₃Man₉GlcNAc₂. Structural source: 7K5I / 6S7O OST Complex. Color taxonomy: Glycosyltransferase Amber (#F77F00).",
        "dissocVector": [
          4.5,
          -0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_RER_BiP_Calnexin",
        "name": "ER Luminal BiP",
        "badge": "CALNEX",
        "color": "#E63946",
        "desc": "ER Luminal BiP (Hsp70) Ratchet, PDI & Calnexin Quality Control. Structural source: 5E84 BiP Chaperone. Color taxonomy: Luminal Chaperone Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -4.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_RER_ERMembrane",
        "name": "Rough ER Phospholipid Bilayer Sh…",
        "badge": "ERMEMB",
        "color": "#06D6A0",
        "desc": "Rough ER Phospholipid Bilayer Sheet. Structural source: ER Membrane Bilayer. Color taxonomy: ER Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Signal Peptide Emergence & SRP Arrest",
        "desc": "Watch the hydrophobic N-terminal signal sequence emerge from the 80S ribosome and slip into the ...",
        "spoken": "Stage 1 — Signal Peptide Emergence & SRP Arrest. Watch the hydrophobic N-terminal signal sequence emerge from the 80S ribosome and slip into the methionine-lined groove of SRP54, pausing translation.",
        "color": "#7209B7",
        "targetPiece": "Piece_RER_Ribosome80S"
      },
      {
        "step": 2,
        "title": "2 : SRP Receptor Docking & GTP Handover",
        "desc": "SRP guides the ribosome to the ER membrane SRP Receptor; twin GTP hydrolysis releases SRP and al...",
        "spoken": "Stage 2 — SRP Receptor Docking & GTP Handover. SRP guides the ribosome to the ER membrane SRP Receptor; twin GTP hydrolysis releases SRP and aligns the ribosome exit tunnel over Sec61.",
        "color": "#FFB703",
        "targetPiece": "Piece_RER_SRP_Receptor"
      },
      {
        "step": 3,
        "title": "3 : Sec61 Plug Displacement & Lateral Gating",
        "desc": "The signal peptide intercalates into the Sec61 lateral seam (TM2/TM7), displacing the luminal pl...",
        "spoken": "Stage 3 — Sec61 Plug Displacement & Lateral Gating. The signal peptide intercalates into the Sec61 lateral seam (TM2/TM7), displacing the luminal plug helix to open the aqueous pore—or releasing hydrophobic TM helices sideways into the lipid bilayer.",
        "color": "#00B4D8",
        "targetPiece": "Piece_RER_Sec61Channel"
      },
      {
        "step": 4,
        "title": "4 : En-Bloc N-Glycosylation by OST",
        "desc": "As an Asn-X-Ser/Thr sequon enters the ER lumen, Oligosaccharyltransferase (OST) snaps a 14-sugar...",
        "spoken": "Stage 4 — En-Bloc N-Glycosylation by OST. As an Asn-X-Ser/Thr sequon enters the ER lumen, Oligosaccharyltransferase (OST) snaps a 14-sugar Glc₃Man₉GlcNAc₂ tree from Dolichol-PP onto the asparagine nitrogen.",
        "color": "#F77F00",
        "targetPiece": "Piece_RER_OST_Glycan"
      },
      {
        "step": 5,
        "title": "5 : BiP Ratcheting, PDI Disulfides & Calnexin Folding",
        "desc": "Luminal BiP binds the chain to prevent backsliding, Protein Disulfide Isomerase (PDI) forms Cys–...",
        "spoken": "Stage 5 — BiP Ratcheting, PDI Disulfides & Calnexin Folding. Luminal BiP binds the chain to prevent backsliding, Protein Disulfide Isomerase (PDI) forms Cys–S–S–Cys bridges, and Calnexin checks the trimmed glucose tag before export.",
        "color": "#E63946",
        "targetPiece": "Piece_RER_BiP_Calnexin"
      }
    ]
  },
  "smooth_er_ca_pump_lipids": {
    "num": "14",
    "id": "smooth_er_ca_pump_lipids",
    "folder": "14_smooth_er_ca_pump_lipids",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "SMOOTH ER TUBULAR NETWORK, SERCA CA²⁺-ATPASE PUMP & LIPID BIOGENESIS",
    "subtitle": "The Smooth Endoplasmic Reticulum (SER) is a ribosome-free labyrinth of high-curvature 30–50 nm membrane tubules sculpted by hair-pin Reticulon wedges. It serves three ind...",
    "analogy": "Displays a curved Smooth ER tubule housing the SERCA1a Ca²⁺ pump (1SU4), the mushroom-shaped tetrameric IP₃ Receptor Ca²⁺ release channel, Cytochrome P450 + Reductase, and the 11-subunit Seipin ring (6U8A) pinching off a golden monolayer-wrapped neutral Lipid Droplet.",
    "scaleTag": "EUKARYOTE SCENARIO 14 • 30–50 NM SMOOTH ER TUBULE, CALCIUM STORE & LIPID FACTORY • PDB: 1SU4 / 6U8A",
    "glb": "/eukaryote/models/smooth_er_ca_pump_lipids.glb",
    "pdb": "1SU4, 6U8A",
    "pronounce": "[smooth-er-ca-pump-lipids]",
    "sliderLabel": "CYTOSOLIC IP₃ CONCENTRATION (ΜM):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Thapsigargin SERCA Inh",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (SERC",
      "🛑 Energy Depleted"
    ],
    "upstream": "GPCR/PLCβ IP₃ second messenger (Scenario 06) + Mitochondrial ATP (Scenario 21) + Cytosolic fatty acyl-CoA, glycerol-3-phospha",
    "coupling": "Inputs: 2 Cytosolic Ca²⁺ ions + 1 ATP (for SERCA pumping into the  ➔ Outputs: Sequestered ER luminal Ca²⁺ store (~1 mM) & rapid cytosoli",
    "downstream": "Released Ca²⁺ waves activate Actomyosin contraction (Scenario 09), Synaptotagmin SNARE exocytosis (Scenario 07), and Mitochon",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "SERCA pumps ~10–30 Ca²⁺ ions/sec; single IP₃"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (SERCA Asp351 phosphorylation"
      ],
      [
        "BIOPHYSICAL SCALE",
        "30–50 nm Smooth ER Tubule, Calcium Store & L"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1SU4 & 6U8A"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Calcium Pump (SERCA)",
        "url": "https://pdb101.rcsb.org/motm/51"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cytochrome P450",
        "url": "https://pdb101.rcsb.org/motm/82"
      },
      {
        "title": "RCSB PDB Structure 1SU4 — Calcium ATPase SERCA1a",
        "url": "https://www.rcsb.org/structure/1SU4"
      },
      {
        "title": "RCSB PDB Structure 6U8A — Human Seipin Lipid-Droplet Assembly Ring",
        "url": "https://www.rcsb.org/structure/6U8A"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_SER_SERCA_Pump",
        "name": "SERCA1a Ca²⁺-ATPase",
        "badge": "PUMP",
        "color": "#00B4D8",
        "desc": "SERCA1a Ca²⁺-ATPase (10-TM Core & Cytoplasmic A, N, P Headpiece). Structural source: 1SU4 / 3B9B SERCA1a. Color taxonomy: Calcium Pump Cerulean (#00B4D8).",
        "dissocVector": [
          -5.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_SER_IP3Receptor",
        "name": "Tetrameric IP₃ Receptor",
        "badge": "IP3REC",
        "color": "#E63946",
        "desc": "Tetrameric IP₃ Receptor (IP₃R1) Ca²⁺ Release Channel. Structural source: 6MU1 IP3R1 Tetramer. Color taxonomy: Release Channel Crimson (#E63946).",
        "dissocVector": [
          -1.0,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_SER_SeipinRing",
        "name": "Undecameric Seipin Ring Nucleati…",
        "badge": "SEIPIN",
        "color": "#FFB703",
        "desc": "Undecameric Seipin Ring Nucleating Nascent Neutral Lipid Droplet. Structural source: 6U8A Seipin 11-mer Ring. Color taxonomy: Seipin Ring Gold (#FFB703).",
        "dissocVector": [
          4.5,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_SER_CytochromeP450",
        "name": "Membrane-Tethered Cytochrome P450",
        "badge": "CYTOCH",
        "color": "#9D4EDD",
        "desc": "Membrane-Tethered Cytochrome P450 (CYP3A4) Heme Monooxygenase. Structural source: 1TQN Cytochrome P450. Color taxonomy: Detox Enzyme Violet (#9D4EDD).",
        "dissocVector": [
          5.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_SER_ReticulonTubule",
        "name": "Reticulon Wedge-Curved Smooth ER…",
        "badge": "RETICU",
        "color": "#06D6A0",
        "desc": "Reticulon Wedge-Curved Smooth ER Phospholipid Bilayer. Structural source: Curved ER Bilayer + Reticulon. Color taxonomy: Smooth ER Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -1.5,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Reticulon Wedges & High-Curvature SER Tubules",
        "desc": "Inspect how V-shaped Reticulon hairpins insert into only the outer leaflet of the Smooth ER, ben...",
        "spoken": "Stage 1 — Reticulon Wedges & High-Curvature SER Tubules. Inspect how V-shaped Reticulon hairpins insert into only the outer leaflet of the Smooth ER, bending the membrane into 30 nm tubules.",
        "color": "#00B4D8",
        "targetPiece": "Piece_SER_SERCA_Pump"
      },
      {
        "step": 2,
        "title": "2 : SERCA Ca²⁺-ATPase Pumping Cycle",
        "desc": "Watch SERCA bind 2 cytosolic Ca²⁺ ions in its E₁ state, phosphorylate Asp351 with ATP, and rock ...",
        "spoken": "Stage 2 — SERCA Ca²⁺-ATPase Pumping Cycle. Watch SERCA bind 2 cytosolic Ca²⁺ ions in its E₁ state, phosphorylate Asp351 with ATP, and rock its A/N/P domains to dump the 2 Ca²⁺ into the ER lumen.",
        "color": "#E63946",
        "targetPiece": "Piece_SER_IP3Receptor"
      },
      {
        "step": 3,
        "title": "3 : IP₃-Gated Calcium Release Wave",
        "desc": "Dock four IP₃ rings onto the cytosolic domains of the giant tetrameric IP₃ Receptor to open its ...",
        "spoken": "Stage 3 — IP₃-Gated Calcium Release Wave. Dock four IP₃ rings onto the cytosolic domains of the giant tetrameric IP₃ Receptor to open its pore and unleash a rapid Ca²⁺ wave into the cytoplasm.",
        "color": "#FFB703",
        "targetPiece": "Piece_SER_SeipinRing"
      },
      {
        "step": 4,
        "title": "4 : Seipin Ring & Lipid Droplet Lens Nucleation",
        "desc": "Zoom to the 11-subunit Seipin ring where DGAT-synthesized triacylglycerol (TAG) oils coalesce in...",
        "spoken": "Stage 4 — Seipin Ring & Lipid Droplet Lens Nucleation. Zoom to the 11-subunit Seipin ring where DGAT-synthesized triacylglycerol (TAG) oils coalesce into a lens between leaflets and bud into the cytosol wrapped in a phospholipid monolayer.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_SER_CytochromeP450"
      },
      {
        "step": 5,
        "title": "5 : Cytochrome P450 Xenobiotic Hydroxylation",
        "desc": "Highlight the Heme-iron center of Cytochrome P450 using electrons from NADPH to insert an oxygen...",
        "spoken": "Stage 5 — Cytochrome P450 Xenobiotic Hydroxylation. Highlight the Heme-iron center of Cytochrome P450 using electrons from NADPH to insert an oxygen atom into hydrophobic drugs and toxins.",
        "color": "#06D6A0",
        "targetPiece": "Piece_SER_ReticulonTubule"
      }
    ]
  },
  "golgi_coatomer_trafficking": {
    "num": "15",
    "id": "golgi_coatomer_trafficking",
    "folder": "15_golgi_coatomer_trafficking",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "GOLGI APPARATUS CISTERNAE STACK (CIS → MEDIAL → TRANS) & COPII / COPI VESICLE COATS",
    "subtitle": "The Golgi Apparatus is the central post-office and carbohydrate-engineering factory of the eukaryotic cell, organized as a polarized ribbon of 4–8 flattened membrane cist...",
    "analogy": "Shows a cutaway stack of Cis, Medial, and Trans Golgi cisternae flanked on the ER side by an assembling COPII Sec13/31 cuboctahedral cage and on the retrograde edge by a COPI heptameric coatomer bud retrieving KDEL-bound cargo, while Rab GTPases and Golgin coiled-coil tethers catch incoming vesicles.",
    "scaleTag": "EUKARYOTE SCENARIO 15 • 60–500 NM POLARIZED CISTERNAL STACK & COATOMER CAGES • PDB: 2P3E / 5A1U",
    "glb": "/eukaryote/models/golgi_coatomer_trafficking.glb",
    "pdb": "2P3E, 5A1U",
    "pronounce": "[golgi-coatomer-trafficking]",
    "sliderLabel": "VESICLE COAT FOCUS:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Brefeldin A Fungal Tox",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ GTP Hydrolysis (Sar1",
      "🛑 Energy Depleted"
    ],
    "upstream": "Rough ER N-glycosylated folding intermediates (Scenario 13) + Smooth ER lipids (Scenario 14) + Nucleotide sugars (UDP-Gal, CM",
    "coupling": "Inputs: High-mannose N-glycosylated proteins (Man₈–₉GlcNAc₂) exiti ➔ Outputs: Complex N- and O-glycosylated Plasma Membrane & Secreted P",
    "downstream": "Delivers mature channels/receptors to the Plasma Membrane (Scenarios 04–08), Clathrin/M6P-sorted hydrolases to Lysosomes (Sce",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Cisternal maturation progresses from Cis to "
      ],
      [
        "ENERGY CURRENCY",
        "GTP Hydrolysis (Sar1/Sec23 GAP & Arf1/ArfGAP"
      ],
      [
        "BIOPHYSICAL SCALE",
        "60–500 nm Polarized Cisternal Stack & Coatom"
      ],
      [
        "PRIMARY RCSB PDBS",
        "2P3E & 5A1U"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: COPII Vesicle Coat",
        "url": "https://pdb101.rcsb.org/motm/257"
      },
      {
        "title": "RCSB PDB Structure 5A1U — COPI Coat Leaf Triad",
        "url": "https://www.rcsb.org/structure/5A1U"
      },
      {
        "title": "RCSB PDB Structure 6I6B — KDEL Receptor Bound to KDEL Peptide",
        "url": "https://www.rcsb.org/structure/6I6B"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Transport from the ER through the Golgi",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26941/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Gol_CisMedialTrans",
        "name": "Polarized Golgi Cisternae Stack",
        "badge": "CISMED",
        "color": "#F77F00",
        "desc": "Polarized Golgi Cisternae Stack (Cis → Medial → Trans Lumen). Structural source: Golgi Membrane Stack. Color taxonomy: Golgi Cisternae Amber (#F77F00).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Gol_COPIICage",
        "name": "Anterograde COPII Cage",
        "badge": "COPIIC",
        "color": "#00B4D8",
        "desc": "Anterograde COPII Cage (Sar1-GTP + Sec23/24 + Sec13/31 Rods). Structural source: 2P3E / 4BZJ COPII Cage. Color taxonomy: COPII Cage Cerulean (#00B4D8).",
        "dissocVector": [
          -6.0,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Gol_COPICoatomer",
        "name": "Retrograde COPI Heptameric Coato…",
        "badge": "COPICO",
        "color": "#9D4EDD",
        "desc": "Retrograde COPI Heptameric Coatomer Triad & Arf1-GTP. Structural source: 5A1U COPI Coatomer. Color taxonomy: COPI Coatomer Violet (#9D4EDD).",
        "dissocVector": [
          6.0,
          2.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Gol_KDEL_M6PReceptors",
        "name": "KDEL Retrieval Receptor",
        "badge": "M6PREC",
        "color": "#FFB703",
        "desc": "KDEL Retrieval Receptor (pH Sensor) & Mannose-6-Phosphate Receptor. Structural source: 6I6B KDEL Receptor. Color taxonomy: Sorting Receptor Gold (#FFB703).",
        "dissocVector": [
          2.5,
          -3.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Gol_Glycosyltransferases",
        "name": "Cis-to-Trans Mannosidase I/II &…",
        "badge": "GLYCOS",
        "color": "#E63946",
        "desc": "Cis-to-Trans Mannosidase I/II & Galactosyl/Sialyltransferases. Structural source: 1FO8 GnTI / Glycosyltransferases. Color taxonomy: Glycan Enzyme Crimson (#E63946).",
        "dissocVector": [
          -2.0,
          3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Gol_GolginRabTethers",
        "name": "Long Coiled-Coil Golgin Tethers",
        "badge": "GOLGIN",
        "color": "#06D6A0",
        "desc": "Long Coiled-Coil Golgin Tethers (GM130/p115) & TRAPP/COG Complexes. Structural source: Golgin Coiled-Coil Tethers. Color taxonomy: Tether Cable Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          5.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Anterograde Budding: The COPII Cuboctahedral Cage",
        "desc": "At the ER exit site, Sec12 loads Sar1 with GTP, recruiting Sec23/24 cargo adaptors and Sec13/31 ...",
        "spoken": "Stage 1 — Anterograde Budding: The COPII Cuboctahedral Cage. At the ER exit site, Sec12 loads Sar1 with GTP, recruiting Sec23/24 cargo adaptors and Sec13/31 outer struts that self-assemble into a COPII cage.",
        "color": "#F77F00",
        "targetPiece": "Piece_Gol_CisMedialTrans"
      },
      {
        "step": 2,
        "title": "2 : Golgin Tentacle Capture & Cis-Golgi Entry",
        "desc": "Long coiled-coil Golgin tethers (GM130/p115) snatch the uncoated COPII vesicle and fuse it into ...",
        "spoken": "Stage 2 — Golgin Tentacle Capture & Cis-Golgi Entry. Long coiled-coil Golgin tethers (GM130/p115) snatch the uncoated COPII vesicle and fuse it into the Cis-Golgi cisterna.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Gol_COPIICage"
      },
      {
        "step": 3,
        "title": "3 : Retrograde KDEL Rescue via COPI Coatomer",
        "desc": "Escaped ER chaperones (bearing a C-terminal Lys-Asp-Glu-Leu [KDEL] tag) bind the KDEL Receptor i...",
        "spoken": "Stage 3 — Retrograde KDEL Rescue via COPI Coatomer. Escaped ER chaperones (bearing a C-terminal Lys-Asp-Glu-Leu [KDEL] tag) bind the KDEL Receptor in the slightly acidic Cis-Golgi (pH 6.5) and return to the ER in Arf1-driven COPI vesicles.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Gol_COPICoatomer"
      },
      {
        "step": 4,
        "title": "4 : Sequential Glycan Trimming & Maturation",
        "desc": "Follow a glycoprotein across Cis → Medial → Trans compartments as Mannosidases trim mannose resi...",
        "spoken": "Stage 4 — Sequential Glycan Trimming & Maturation. Follow a glycoprotein across Cis → Medial → Trans compartments as Mannosidases trim mannose residues and GlcNAc-, Galactosyl-, and Sialyltransferases build mature complex sugar trees.",
        "color": "#FFB703",
        "targetPiece": "Piece_Gol_KDEL_M6PReceptors"
      },
      {
        "step": 5,
        "title": "5 : Trans-Golgi Network (TGN) M6P & Secretory Sorting",
        "desc": "In the TGN (pH 6.0), Mannose-6-Phosphate Receptors sort lysosomal enzymes into clathrin-coated v...",
        "spoken": "Stage 5 — Trans-Golgi Network (TGN) M6P & Secretory Sorting. In the TGN (pH 6.0), Mannose-6-Phosphate Receptors sort lysosomal enzymes into clathrin-coated vesicles while secretory proteins bud toward the plasma membrane.",
        "color": "#E63946",
        "targetPiece": "Piece_Gol_Glycosyltransferases"
      }
    ]
  },
  "lysosome_v_atpase_autophagy": {
    "num": "16",
    "id": "lysosome_v_atpase_autophagy",
    "folder": "16_lysosome_v_atpase_autophagy",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "LYSOSOME, ROTARY V-ATPASE PROTON PUMP (PH 4.5) & AUTOPHAGOSOME (LC3) FUSION",
    "subtitle": "The Lysosome is the eukaryotic cell's acidic stomach and metabolic signaling hub (pH 4.5–5.0 vs. cytosolic pH 7.2). Its single membrane is protected from self-digestion o...",
    "analogy": "Cutaway of an active Lysosome fusing with a double-membrane LC3-II Autophagosome: highlights the rotary V₁Vo-ATPase proton pump (6WM2) spinning in the lysosomal membrane, the protective LAMP1/2 glycocalyx, luminal Cathepsin proteases digesting cargo, and the outer Ragulator–Rag–mTORC1 amino-acid sensing complex.",
    "scaleTag": "EUKARYOTE SCENARIO 16 • 100–300 NM ACIDIC RECYCLING ORGANELLE & ROTARY V-ATPASE • PDB: 6WM2 / 7K2V",
    "glb": "/eukaryote/models/lysosome_v_atpase_autophagy.glb",
    "pdb": "6WM2, 7K2V",
    "pronounce": "[lysosome-v-atpase-autophagy]",
    "sliderLabel": "V-ATPASE PROTON PUMPING / LUMINAL PH:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Bafilomycin A1 / Chlor",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Cytosolic ATP Hydrol",
      "🛑 Energy Depleted"
    ],
    "upstream": "Trans-Golgi M6P-tagged acid hydrolases (Scenario 15) + Endocytosed LDL/receptors (Scenario 07) + Damaged Mitochondria/aggrega",
    "coupling": "Inputs: Cytosolic ATP + H⁺ (pumped into the lumen by rotary V₁Vo-A ➔ Outputs: Recycled free Amino Acids, Monosaccharides, Fatty Acids & ",
    "downstream": "Exported amino acids activate mTORC1 to boost 80S Ribosome translation (Scenario 32); free cholesterol exported by NPC1 feeds",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "V-ATPase rotates at ~30–60 rev/s (~300–600 H"
      ],
      [
        "ENERGY CURRENCY",
        "Cytosolic ATP Hydrolysis (V₁ A₃B₃ head: 3 AT"
      ],
      [
        "BIOPHYSICAL SCALE",
        "100–300 nm Acidic Recycling Organelle & Rota"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6WM2 & 7K2V"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 6WM2 — Complete Human V-ATPase in Rotational State 1",
        "url": "https://www.rcsb.org/structure/6WM2"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: mTOR",
        "url": "https://pdb101.rcsb.org/motm/219"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Autophagy",
        "url": "https://pdb101.rcsb.org/motm/204"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Lysosomes",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26844/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Lys_VATPase_V1",
        "name": "V-ATPase Cytosolic V₁ Catalytic…",
        "badge": "V1",
        "color": "#FFB703",
        "desc": "V-ATPase Cytosolic V₁ Catalytic Head (A₃B₃ Hexamer, DF Rotor & E/G Staters). Structural source: 6WM2 V1 Sector. Color taxonomy: Catalytic ATPase Gold (#FFB703).",
        "dissocVector": [
          -4.5,
          3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Lys_VATPase_Vo",
        "name": "V-ATPase Membrane Vo Proton Turb…",
        "badge": "VO",
        "color": "#00B4D8",
        "desc": "V-ATPase Membrane Vo Proton Turbine (c-Ring Decamer & a-Subunit Half-Channels). Structural source: 6WM2 Vo Sector. Color taxonomy: Proton Turbine Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          -0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Lys_LAMP_Membrane",
        "name": "Lysosomal Membrane & Protective…",
        "badge": "MEMBRA",
        "color": "#06D6A0",
        "desc": "Lysosomal Membrane & Protective Luminal LAMP1/LAMP2 Glycocalyx Shield. Structural source: Lysosomal Bilayer + LAMP Glycans. Color taxonomy: Lysosome Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_Lys_CathepsinHydrolases",
        "name": "Luminal Acid Hydrolases",
        "badge": "CATHEP",
        "color": "#E63946",
        "desc": "Luminal Acid Hydrolases (Cathepsin B/D, Acid Lipase & NPC2). Structural source: 1HUC Cathepsin B + 6W5S NPC1. Color taxonomy: Acid Hydrolase Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -4.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Lys_AutophagosomeLC3",
        "name": "Fusing Double-Membrane Autophago…",
        "badge": "AUTOPH",
        "color": "#9D4EDD",
        "desc": "Fusing Double-Membrane Autophagosome Studded with Lipidated LC3-II. Structural source: 1UGM LC3-II + STX17 SNARE. Color taxonomy: Autophagosome Violet (#9D4EDD).",
        "dissocVector": [
          5.0,
          -2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Lys_mTORC1_Sensor",
        "name": "Outer Surface Ragulator–Rag GTPa…",
        "badge": "SENSOR",
        "color": "#F77F00",
        "desc": "Outer Surface Ragulator–Rag GTPase–mTORC1 Amino Acid Sensor. Structural source: 7K2V / 6BCX mTORC1 Complex. Color taxonomy: mTORC1 Sensor Amber (#F77F00).",
        "dissocVector": [
          4.5,
          4.0,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Rotary V₁Vo-ATPase Proton Pump",
        "desc": "Inspect the 30-subunit V-ATPase: unlike mitochondrial ATP synthase, it burns cytosolic ATP in it...",
        "spoken": "Stage 1 — The Rotary V₁Vo-ATPase Proton Pump. Inspect the 30-subunit V-ATPase: unlike mitochondrial ATP synthase, it burns cytosolic ATP in its A₃B₃ head to spin the Vo c-ring and force H⁺ ions into the lysosome.",
        "color": "#FFB703",
        "targetPiece": "Piece_Lys_VATPase_V1"
      },
      {
        "step": 2,
        "title": "2 : pH 4.5 Activation & The LAMP1/2 Sugar Shield",
        "desc": "As luminal pH drops to 4.5, pro-Cathepsins cleave off their inhibitory pro-peptides while the de...",
        "spoken": "Stage 2 — pH 4.5 Activation & The LAMP1/2 Sugar Shield. As luminal pH drops to 4.5, pro-Cathepsins cleave off their inhibitory pro-peptides while the dense LAMP1/2 glycocalyx prevents the hydrolases from digesting the lysosomal membrane itself.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Lys_VATPase_Vo"
      },
      {
        "step": 3,
        "title": "3 : LC3-II Double-Membrane Autophagosome Docking",
        "desc": "During starvation, ATG7/ATG3 conjugate LC3 to phosphatidylethanolamine (LC3-II) on a double-memb...",
        "spoken": "Stage 3 — LC3-II Double-Membrane Autophagosome Docking. During starvation, ATG7/ATG3 conjugate LC3 to phosphatidylethanolamine (LC3-II) on a double-membrane phagophore that engulfs damaged cargo and docks onto the lysosome via STX17 SNAREs.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Lys_LAMP_Membrane"
      },
      {
        "step": 4,
        "title": "4 : Cargo Breakdown & NPC1/SLC38A9 Export",
        "desc": "Acid hydrolases dismantle proteins, lipids, and nucleic acids into free amino acids, sugars, and...",
        "spoken": "Stage 4 — Cargo Breakdown & NPC1/SLC38A9 Export. Acid hydrolases dismantle proteins, lipids, and nucleic acids into free amino acids, sugars, and cholesterol, which exit into the cytosol through SLC38A9 and NPC1 transporters.",
        "color": "#E63946",
        "targetPiece": "Piece_Lys_CathepsinHydrolases"
      },
      {
        "step": 5,
        "title": "5 : The mTORC1 Nutrient Switch",
        "desc": "Exported amino acids signal through SLC38A9 and Ragulator–Rag GTPases to recruit mTORC1 to the o...",
        "spoken": "Stage 5 — The mTORC1 Nutrient Switch. Exported amino acids signal through SLC38A9 and Ragulator–Rag GTPases to recruit mTORC1 to the outer lysosomal surface, switching the cell from catabolic autophagy back to anabolic growth.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Lys_AutophagosomeLC3"
      }
    ]
  },
  "peroxisome_catalase_beta_ox": {
    "num": "17",
    "id": "peroxisome_catalase_beta_ox",
    "folder": "17_peroxisome_catalase_beta_ox",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "PEROXISOME, PEX5/PEX14 IMPORTOMER, FATTY ACID Β-OXIDATION & TETRAMERIC HEME CATALASE",
    "subtitle": "Peroxisomes are single-membrane oxidative organelles that specialize in metabolic reactions too toxic for the cytoplasm: (1) β-Oxidation of Very-Long-Chain Fatty Acids (V...",
    "analogy": "Shows a cutaway Peroxisome with its crystalline Tetrameric Heme Catalase core (1DGF), the dimeric ABCD1 VLCFA-CoA transporter (7N5K) in the membrane, the PEX5/PEX14 import pore + PEX1/PEX6 AAA+ recycling ring, and ACOX1 generating H₂O₂ that is immediately split into O₂ bubbles by Catalase.",
    "scaleTag": "EUKARYOTE SCENARIO 17 • 150–400 NM SINGLE-MEMBRANE OXIDATIVE ORGANELLE • PDB: 1DGF / 7N5K",
    "glb": "/eukaryote/models/peroxisome_catalase_beta_ox.glb",
    "pdb": "1DGF, 7N5K",
    "pronounce": "[peroxisome-catalase-beta-ox]",
    "sliderLabel": "VLCFA IMPORT & Β-OXIDATION FLUX:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ X-ALD ABCD1 Mutation T",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP Hydrolysis (ABCD",
      "🛑 Energy Depleted"
    ],
    "upstream": "Smooth ER / Lipid Droplet very-long-chain fatty acids (Scenario 14) + Cytoplasmic 80S Ribosome translation of PTS1-tagged enz",
    "coupling": "Inputs: Very-Long-Chain Fatty Acyl-CoA (C24:0 / C26:0-CoA) + ATP ( ➔ Outputs: Shortened Medium/Octanoyl-CoA & Acetyl-CoA (exported to Mi",
    "downstream": "Shortened acyl-CoA and acetyl-CoA shuttle into Mitochondria (Scenario 19) for the TCA cycle; ether-lipid plasmalogen precurso",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Tetrameric Heme Catalase: ~40,000,000 H₂O₂ m"
      ],
      [
        "ENERGY CURRENCY",
        "ATP Hydrolysis (ABCD1 fatty-acid import & PE"
      ],
      [
        "BIOPHYSICAL SCALE",
        "150–400 nm Single-Membrane Oxidative Organel"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1DGF & 7N5K"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Catalase",
        "url": "https://pdb101.rcsb.org/motm/57"
      },
      {
        "title": "RCSB PDB Structure 1DGF — Human Erythrocyte Catalase",
        "url": "https://www.rcsb.org/structure/1DGF"
      },
      {
        "title": "RCSB PDB Structure 7N5K — Human Peroxisomal ABCD1 Transporter",
        "url": "https://www.rcsb.org/structure/7N5K"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Peroxisomes",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26858/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Per_CatalaseTetramer",
        "name": "Tetrameric Heme Catalase Crystal…",
        "badge": "CATALA",
        "color": "#E63946",
        "desc": "Tetrameric Heme Catalase Crystalline Core (4 × Fe-Protoporphyrin IX + NADPH). Structural source: 1DGF Human Catalase. Color taxonomy: Heme Catalase Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Per_ABCD1_Transporter",
        "name": "Peroxisomal ABCD1",
        "badge": "TRANSP",
        "color": "#00B4D8",
        "desc": "Peroxisomal ABCD1 (ALDP) Dimeric ABC Transporter + VLCFA-CoA. Structural source: 7N5K ABCD1 Transporter. Color taxonomy: ABC Transporter Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Per_ACOX1_BetaOx",
        "name": "Acyl-CoA Oxidase",
        "badge": "BETAOX",
        "color": "#FFB703",
        "desc": "Acyl-CoA Oxidase (ACOX1) & Bifunctional β-Oxidation Complex. Structural source: 2DDH ACOX1 Homodimer. Color taxonomy: FAD Oxidase Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -3.0,
          2.0
        ]
      },
      {
        "meshName": "Piece_Per_PEX5_PEX14_Pore",
        "name": "PEX5 PTS1",
        "badge": "PORE",
        "color": "#9D4EDD",
        "desc": "PEX5 PTS1 (-SKL) Receptor & PEX13/PEX14 Folded-Protein Import Pore. Structural source: 2C0L PEX5–Cargo Complex. Color taxonomy: PEX Importomer Violet (#9D4EDD).",
        "dissocVector": [
          3.5,
          1.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Per_PEX1_PEX6_Ring",
        "name": "Hexameric AAA+ PEX1/PEX6 Recepto…",
        "badge": "RING",
        "color": "#F77F00",
        "desc": "Hexameric AAA+ PEX1/PEX6 Receptor-Extraction Ring. Structural source: 5VXV PEX1/PEX6 AAA+ Ring. Color taxonomy: AAA+ Extractor Amber (#F77F00).",
        "dissocVector": [
          5.5,
          3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Per_MembraneBilayer",
        "name": "Peroxisomal Single Phospholipid…",
        "badge": "MEMBRA",
        "color": "#06D6A0",
        "desc": "Peroxisomal Single Phospholipid Bilayer. Structural source: Peroxisomal Membrane. Color taxonomy: Peroxisome Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.5,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Importing Fully Folded Enzymes via PEX5 (-SKL)",
        "desc": "Watch cytosolic PEX5 bind the C-terminal -Ser-Lys-Leu (PTS1) tripeptide of a fully folded enzyme...",
        "spoken": "Stage 1 — Importing Fully Folded Enzymes via PEX5 (-SKL). Watch cytosolic PEX5 bind the C-terminal -Ser-Lys-Leu (PTS1) tripeptide of a fully folded enzyme and plunge into the PEX14 membrane pore without unfolding the cargo.",
        "color": "#E63946",
        "targetPiece": "Piece_Per_CatalaseTetramer"
      },
      {
        "step": 2,
        "title": "2 : AAA+ PEX1/PEX6 Receptor Recycling",
        "desc": "After cargo release in the matrix, PEX2/10/12 monoubiquitinates PEX5 so the double-ring hexameri...",
        "spoken": "Stage 2 — AAA+ PEX1/PEX6 Receptor Recycling. After cargo release in the matrix, PEX2/10/12 monoubiquitinates PEX5 so the double-ring hexameric PEX1/PEX6 AAA+ motor can pull PEX5 back out to the cytosol.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Per_ABCD1_Transporter"
      },
      {
        "step": 3,
        "title": "3 : ABCD1 Import of Very-Long-Chain Fatty Acids",
        "desc": "Follow a C26:0-CoA fatty acid pumped across the peroxisomal membrane by ATP-driven dimerization ...",
        "spoken": "Stage 3 — ABCD1 Import of Very-Long-Chain Fatty Acids. Follow a C26:0-CoA fatty acid pumped across the peroxisomal membrane by ATP-driven dimerization of ABCD1.",
        "color": "#FFB703",
        "targetPiece": "Piece_Per_ACOX1_BetaOx"
      },
      {
        "step": 4,
        "title": "4 : ACOX1 β-Oxidation & H₂O₂ Generation",
        "desc": "Acyl-CoA Oxidase shortens the fatty acid by 2 carbons per cycle, passing electrons via FAD direc...",
        "spoken": "Stage 4 — ACOX1 β-Oxidation & H₂O₂ Generation. Acyl-CoA Oxidase shortens the fatty acid by 2 carbons per cycle, passing electrons via FAD directly to O₂ and producing toxic H₂O₂.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Per_PEX5_PEX14_Pore"
      },
      {
        "step": 5,
        "title": "5 : Diffusion-Limited Heme Catalase Detoxification",
        "desc": "Zoom into the Fe(III)-heme pocket of Catalase: the first H₂O₂ oxidizes the heme to Compound I (F...",
        "spoken": "Stage 5 — Diffusion-Limited Heme Catalase Detoxification. Zoom into the Fe(III)-heme pocket of Catalase: the first H₂O₂ oxidizes the heme to Compound I (Fe⁴⁺=O porphyrin radical), and a second H₂O₂ reduces it back, releasing H₂O and O₂ at 4 × 10⁷ s⁻¹.",
        "color": "#F77F00",
        "targetPiece": "Piece_Per_PEX1_PEX6_Ring"
      }
    ]
  },
  "plant_vacuole_tonoplast": {
    "num": "18",
    "id": "plant_vacuole_tonoplast",
    "folder": "18_plant_vacuole_tonoplast",
    "tier": "Tier 4 — The Endomembrane Secretory & Degradative System",
    "title": "PLANT CENTRAL VACUOLE, TONOPLAST AQUAPORIN TETRAMERS & OSMOTIC TURGOR ENGINE",
    "subtitle": "Mature plant and fungal cells grow up to 100× larger in volume than animal cells without synthesizing 100× more cytoplasm by inflating a giant Central Vacuole bounded by ...",
    "analogy": "Shows the Tonoplast membrane separating the cytosol from the anthocyanin-tinted vacuolar lumen: includes the tetrameric TIP Aquaporin water channel (streaming single-file H₂O molecules past the NPA filter), the dimeric V-PPase proton pump (4A01), V-ATPase, and NHX1 K⁺/Na⁺-H⁺ antiporters.",
    "scaleTag": "EUKARYOTE SCENARIO 18 • 20 NM TONOPLAST MEMBRANE TO 30 ΜM CENTRAL VACUOLE • PDB: 5I32 / 4A01",
    "glb": "/eukaryote/models/plant_vacuole_tonoplast.glb",
    "pdb": "5I32, 4A01",
    "pronounce": "[plant-vacuole-tonoplast]",
    "sliderLabel": "EXTRACELLULAR WATER SUPPLY / TURGOR PRESSURE (MPA):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Vacuolar Lumen pH (Ant",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Inorganic Pyrophosph",
      "🛑 Energy Depleted"
    ],
    "upstream": "Chloroplast photosynthetic sucrose/malate & stromal PPᵢ byproducts (Scenarios 23–25) + Root apoplastic/symplastic water and m",
    "coupling": "Inputs: Cytosolic Inorganic Pyrophosphate (PPᵢ) & ATP (driving V-P ➔ Outputs: Hydrostatic Turgor Pressure (Ψp = 0.5–1.0 MPa) driving pla",
    "downstream": "Presses the plant plasma membrane directly against the Cellulose Cell Wall (Scenario 02) and regulates symplastic pressure ac",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single Aquaporin monomer conducts ~10⁹ H₂O m"
      ],
      [
        "ENERGY CURRENCY",
        "Inorganic Pyrophosphate Hydrolysis (PPᵢ + H₂"
      ],
      [
        "BIOPHYSICAL SCALE",
        "20 nm Tonoplast Membrane to 30 µm Central Va"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5I32 & 4A01"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Aquaporin",
        "url": "https://pdb101.rcsb.org/motm/173"
      },
      {
        "title": "RCSB PDB Structure 5I32 — Plant Tonoplast Aquaporin AtTIP2;1",
        "url": "https://www.rcsb.org/structure/5I32"
      },
      {
        "title": "RCSB PDB Structure 4A01 — H⁺-Translocating Pyrophosphatase",
        "url": "https://www.rcsb.org/structure/4A01"
      },
      {
        "title": "Plant Physiology — Vacuolar Transporters & Turgor Regulation",
        "url": "https://academic.oup.com/plphys/article/179/4/1200/6116634"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Vac_AquaporinTetramer",
        "name": "Tetrameric Tonoplast Aquaporin",
        "badge": "AQUAPO",
        "color": "#00B4D8",
        "desc": "Tetrameric Tonoplast Aquaporin (TIP2;1 / SoPIP2;1) with NPA Water Filter. Structural source: 5I32 / 1Z98 Plant Aquaporin. Color taxonomy: Water Channel Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Vac_VPPaseDimer",
        "name": "Dimeric H⁺-Translocating Pyropho…",
        "badge": "VPPASE",
        "color": "#FFB703",
        "desc": "Dimeric H⁺-Translocating Pyrophosphatase (AVP1 / V-PPase, 16-TM). Structural source: 4A01 V-PPase Dimer. Color taxonomy: Pyrophosphatase Gold (#FFB703).",
        "dissocVector": [
          1.0,
          0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Vac_NHX_Antiporter",
        "name": "Vacuolar NHX1 K⁺/Na⁺–H⁺ Antiport…",
        "badge": "ANTIPO",
        "color": "#9D4EDD",
        "desc": "Vacuolar NHX1 K⁺/Na⁺–H⁺ Antiporter & Anthocyanin ABC Transporter. Structural source: 8I3T NHX Exchanger. Color taxonomy: Antiporter Violet (#9D4EDD).",
        "dissocVector": [
          5.5,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Vac_WaterProtonStreams",
        "name": "Single-File H₂O Dipole Stream",
        "badge": "WATERP",
        "color": "#E63946",
        "desc": "Single-File H₂O Dipole Stream (NPA Flip) & Luminal H⁺/Anthocyanin Sap. Structural source: H₂O Stream + Anthocyanins. Color taxonomy: Vacuolar Sap Crimson (#E63946).",
        "dissocVector": [
          -4.5,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Vac_TonoplastMembrane",
        "name": "Tonoplast Vacuolar Phospholipid…",
        "badge": "TONOPL",
        "color": "#06D6A0",
        "desc": "Tonoplast Vacuolar Phospholipid & Sterol Bilayer. Structural source: Tonoplast Bilayer. Color taxonomy: Tonoplast Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Charging the Tonoplast Battery with V-PPase & V-ATPase",
        "desc": "Watch the dimeric V-PPase burn metabolic byproduct pyrophosphate (PPᵢ → 2 Pᵢ) to pump H⁺ into th...",
        "spoken": "Stage 1 — Charging the Tonoplast Battery with V-PPase & V-ATPase. Watch the dimeric V-PPase burn metabolic byproduct pyrophosphate (PPᵢ → 2 Pᵢ) to pump H⁺ into the vacuolar lumen alongside V-ATPase.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Vac_AquaporinTetramer"
      },
      {
        "step": 2,
        "title": "2 : Solute Accumulation via H⁺-Coupled Antiporters",
        "desc": "Outward H⁺ flow through NHX1 and CAX antiporters drives K⁺, Na⁺, Ca²⁺, and malate into the vacuo...",
        "spoken": "Stage 2 — Solute Accumulation via H⁺-Coupled Antiporters. Outward H⁺ flow through NHX1 and CAX antiporters drives K⁺, Na⁺, Ca²⁺, and malate into the vacuole, steeply lowering its osmotic potential (Ψs).",
        "color": "#FFB703",
        "targetPiece": "Piece_Vac_VPPaseDimer"
      },
      {
        "step": 3,
        "title": "3 : Single-File Water Rush Through Tetrameric Aquaporins",
        "desc": "Zoom into one of the four pores of a TIP Aquaporin tetramer as 10⁹ water molecules/sec stream in...",
        "spoken": "Stage 3 — Single-File Water Rush Through Tetrameric Aquaporins. Zoom into one of the four pores of a TIP Aquaporin tetramer as 10⁹ water molecules/sec stream into the vacuole.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_Vac_NHX_Antiporter"
      },
      {
        "step": 4,
        "title": "4 : The Atomic NPA Dipole-Flip Proton Barrier",
        "desc": "At the center of the Aquaporin hourglass, two Asn-Pro-Ala (NPA) asparagines grab the oxygen of e...",
        "spoken": "Stage 4 — The Atomic NPA Dipole-Flip Proton Barrier. At the center of the Aquaporin hourglass, two Asn-Pro-Ala (NPA) asparagines grab the oxygen of each passing H₂O, flipping its dipole orientation to break the Grotthuss proton wire so H₃O⁺ cannot leak out.",
        "color": "#E63946",
        "targetPiece": "Piece_Vac_WaterProtonStreams"
      },
      {
        "step": 5,
        "title": "5 : Hydrostatic Turgor & Drought Loop-D Gating",
        "desc": "Observe the inflated vacuole pressing the cytoplasm against the cell wall to hold the plant upri...",
        "spoken": "Stage 5 — Hydrostatic Turgor & Drought Loop-D Gating. Observe the inflated vacuole pressing the cytoplasm against the cell wall to hold the plant upright—and watch cytosolic Loop D snap the aquaporin shut during drought or root flooding.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Vac_TonoplastMembrane"
      }
    ]
  },
  "mitochondrion_cristae_mtdna": {
    "num": "19",
    "id": "mitochondrion_cristae_mtdna",
    "folder": "19_mitochondrion_cristae_mtdna",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "WHOLE MITOCHONDRION CUTAWAY: DOUBLE MEMBRANE, MICOS CRISTAE, MATRIX TCA & CIRCULAR MTDNA RING",
    "subtitle": "Descended from an ancient α-proteobacterial endosymbiont >1.5 billion years ago, the Mitochondrion is a double-membraned bioenergetic powerhouse with its own independent ...",
    "analogy": "A 3/4 surgical cutaway of a whole Mitochondrion exposing the VDAC-studded Outer Membrane, the MICOS-neck folded Inner Membrane Cristae lined along their rims by V-shaped ATP Synthase dimers, the Matrix TCA enzymes, 55S Mitoribosomes, and a glowing 16.6 kb Circular mtDNA Ring with its triple-stranded D-loop replication origin wrapped by TFAM.",
    "scaleTag": "EUKARYOTE SCENARIO 19 • 1.5 ΜM × 0.6 ΜM DOUBLE-MEMBRANE ENDOSYMBIOTIC ORGANELLE • PDB: 3EMN / 3TMM",
    "glb": "/eukaryote/models/mitochondrion_cristae_mtdna.glb",
    "pdb": "3EMN, 3TMM",
    "pronounce": "[mitochondrion-cristae-mtdna]",
    "sliderLabel": "MEMBRANE CUTAWAY & CRISTAE REMODELING:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Circular mtDNA Ring In",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Inner Membrane Proto",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytosolic Glycolysis (Pyruvate + NADH shuttle) + Peroxisomal/Cytosolic Fatty Acyl-Carnitine (Scenario 17) + O₂.",
    "coupling": "Inputs: Pyruvate (imported via VDAC + Mitochondrial Pyruvate Carri ➔ Outputs: Matrix NADH + FADH₂ (from PDH & TCA cycle feeding the Resp",
    "downstream": "Matrix NADH/FADH₂ directly feed the Cristae Respirasome ETC (Scenario 20) → V-Shaped ATP Synthase Dimer (Scenario 21) → ATP p",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single mitochondrion synthesizes ~10⁶ ATP/se"
      ],
      [
        "ENERGY CURRENCY",
        "Inner Membrane Proton-Motive Force (Δp ≈ 200"
      ],
      [
        "BIOPHYSICAL SCALE",
        "1.5 µm × 0.6 µm Double-Membrane Endosymbioti"
      ],
      [
        "PRIMARY RCSB PDBS",
        "3EMN & 3TMM"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Voltage-Dependent Anion Channel (VDAC)",
        "url": "https://pdb101.rcsb.org/motm/250"
      },
      {
        "title": "RCSB PDB Structure 3EMN — Mitochondrial VDAC-1 Porin",
        "url": "https://www.rcsb.org/structure/3EMN"
      },
      {
        "title": "RCSB PDB Structure 3TMM — Human TFAM Bound to Mitochondrial DNA",
        "url": "https://www.rcsb.org/structure/3TMM"
      },
      {
        "title": "RCSB PDB Structure 3J9M — Complete Human 55S Mitochondrial Ribosome",
        "url": "https://www.rcsb.org/structure/3J9M"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Mito_OuterMembraneVDAC",
        "name": "Outer Mitochondrial Membrane",
        "badge": "OUTERM",
        "color": "#0077B6",
        "desc": "Outer Mitochondrial Membrane (OMM) & VDAC1 19-Stranded β-Barrel Porins. Structural source: 3EMN VDAC1 Porin. Color taxonomy: Outer Membrane Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.5,
          -2.5
        ]
      },
      {
        "meshName": "Piece_Mito_InnerCristaeMICOS",
        "name": "Cardiolipin-Rich Inner Membrane…",
        "badge": "INNERC",
        "color": "#06D6A0",
        "desc": "Cardiolipin-Rich Inner Membrane Cristae Folds & MICOS/OPA1 Junctions. Structural source: Cristae Lamellae + MICOS Neck. Color taxonomy: Inner Cristae Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          1.0,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Mito_CircularMtDNARing",
        "name": "16,569 bp Closed Circular Double…",
        "badge": "CIRCUL",
        "color": "#FFB703",
        "desc": "16,569 bp Closed Circular Double-Stranded mtDNA Ring & TFAM Nucleoid. Structural source: 3TMM TFAM–mtDNA + D-Loop Ring. Color taxonomy: Circular mtDNA Gold (#FFB703).",
        "dissocVector": [
          -3.0,
          -1.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Mito_Mitoribosome55S",
        "name": "Mammalian 55S Mitoribosome",
        "badge": "MITORI",
        "color": "#7209B7",
        "desc": "Mammalian 55S Mitoribosome (28S + 39S) Tethered to OXA1L Insertase. Structural source: 3J9M / 6ZSG 55S Mitoribosome. Color taxonomy: Mitoribosome Purple (#7209B7).",
        "dissocVector": [
          3.5,
          -1.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Mito_TCA_MatrixHub",
        "name": "Matrix Pyruvate Dehydrogenase &…",
        "badge": "MATRIX",
        "color": "#F77F00",
        "desc": "Matrix Pyruvate Dehydrogenase & TCA Cycle Metabolon (Citrate Synthase/IDH). Structural source: 6CT0 Citrate Synthase. Color taxonomy: Matrix TCA Amber (#F77F00).",
        "dissocVector": [
          0.0,
          -3.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Mito_CristaeRimComplexes",
        "name": "In-Situ Cristae Respirasomes & R…",
        "badge": "CRISTA",
        "color": "#E63946",
        "desc": "In-Situ Cristae Respirasomes & Rim V-Shaped ATP Synthase Dimers. Structural source: 5XTE Respirasome + 6ZQN Dimer. Color taxonomy: OXPHOS Rim Crimson (#E63946).",
        "dissocVector": [
          0.0,
          2.0,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Endosymbiotic Double Envelope & VDAC Porins",
        "desc": "Orbit the Outer Mitochondrial Membrane where 19-stranded VDAC1 β-barrels (homologous to bacteria...",
        "spoken": "Stage 1 — The Endosymbiotic Double Envelope & VDAC Porins. Orbit the Outer Mitochondrial Membrane where 19-stranded VDAC1 β-barrels (homologous to bacterial outer-membrane porins) let pyruvate and ADP into the Intermembrane Space.",
        "color": "#0077B6",
        "targetPiece": "Piece_Mito_OuterMembraneVDAC"
      },
      {
        "step": 2,
        "title": "2 : Cardiolipin Cristae Folds & MICOS Necks",
        "desc": "Peel back the outer membrane to reveal the deeply folded Inner Membrane Cristae: MICOS and OPA1 ...",
        "spoken": "Stage 2 — Cardiolipin Cristae Folds & MICOS Necks. Peel back the outer membrane to reveal the deeply folded Inner Membrane Cristae: MICOS and OPA1 pinch the 28 nm cristae junctions so pumped protons stay concentrated inside the cristae lumen.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Mito_InnerCristaeMICOS"
      },
      {
        "step": 3,
        "title": "3 : The Matrix TCA Cycle Metabolon",
        "desc": "Follow Pyruvate entering the matrix via MPC1/2, oxidized by PDH to Acetyl-CoA, and spun through ...",
        "spoken": "Stage 3 — The Matrix TCA Cycle Metabolon. Follow Pyruvate entering the matrix via MPC1/2, oxidized by PDH to Acetyl-CoA, and spun through the TCA cycle ring to load NAD⁺ and FAD with high-energy electrons.",
        "color": "#FFB703",
        "targetPiece": "Piece_Mito_CircularMtDNARing"
      },
      {
        "step": 4,
        "title": "4 : The 16,569 bp Circular mtDNA Ring & TFAM",
        "desc": "Zoom into the mitochondrial nucleoid: inspect the closed circular double-stranded mtDNA ring (wi...",
        "spoken": "Stage 4 — The 16,569 bp Circular mtDNA Ring & TFAM. Zoom into the mitochondrial nucleoid: inspect the closed circular double-stranded mtDNA ring (with its triple-stranded displacement D-loop) bent 180° by twin HMG-box TFAM proteins.",
        "color": "#7209B7",
        "targetPiece": "Piece_Mito_Mitoribosome55S"
      },
      {
        "step": 5,
        "title": "5 : Co-Translational Insertion by 55S Mitoribosomes",
        "desc": "Watch a specialized protein-rich 55S Mitoribosome translate mtDNA mRNAs and insert the 13 hydrop...",
        "spoken": "Stage 5 — Co-Translational Insertion by 55S Mitoribosomes. Watch a specialized protein-rich 55S Mitoribosome translate mtDNA mRNAs and insert the 13 hydrophobic core OXPHOS subunits directly into the inner membrane via OXA1L.",
        "color": "#F77F00",
        "targetPiece": "Piece_Mito_TCA_MatrixHub"
      }
    ]
  },
  "mitochondrial_respirasome_etc": {
    "num": "20",
    "id": "mitochondrial_respirasome_etc",
    "folder": "20_mitochondrial_respirasome_etc",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "MITOCHONDRIAL RESPIRATORY SUPERCOMPLEX (I₁III₂IV₁ RESPIRASOME) & CYTOCHROME C SHUTTLE",
    "subtitle": "In the mitochondrial cristae membrane, the electron transport chain assembles into a breathtaking 1.7 MDa supramolecular Respirasome (I₁III₂IV₁, PDB 5XTE) accompanied by ...",
    "analogy": "Renders the complete 1.7 MDa Human Respirasome (5XTE: L-shaped 45-subunit Complex I cradled against dimeric Complex III₂ and Complex IV) plus adjacent Complex II (1ZOY) in the cardiolipin-rich cristae bilayer, with glowing Coenzyme Q₁₀ diffusing in the membrane and soluble Cytochrome c shuttling across the cristae lumen.",
    "scaleTag": "EUKARYOTE SCENARIO 20 • 28 NM × 20 NM (1.7 MDA INNER-MEMBRANE SUPERCOMPLEX) • PDB: 5XTE / 1ZOY",
    "glb": "/eukaryote/models/mitochondrial_respirasome_etc.glb",
    "pdb": "5XTE, 1ZOY",
    "pronounce": "[mitochondrial-respirasome-etc]",
    "sliderLabel": "NADH / SUCCINATE ELECTRON FLUX & PROTON PUMPING SPEED:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Brown Fat UCP1 / DNP P",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Redox Drop ΔE°' = +1",
      "🛑 Energy Depleted"
    ],
    "upstream": "Mitochondrial Matrix TCA cycle & β-oxidation NADH + Succinate (Scenario 19) + Pulmonary/Vascular O₂ diffusion.",
    "coupling": "Inputs: Matrix NADH + H⁺ (into Complex I FMN) & Succinate (into Co ➔ Outputs: 10 Cristae-Lumen H⁺ protons pumped per NADH (generating Δp",
    "downstream": "The 10 pumped H⁺ protons flow directly along the cristae rim into the V-Shaped Mitochondrial ATP Synthase Dimer (Scenario 21)",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~200–400 electrons/sec per Respirasome (~50–"
      ],
      [
        "ENERGY CURRENCY",
        "Redox Drop ΔE°' = +1.14 V (NADH E°' = -0.32 "
      ],
      [
        "BIOPHYSICAL SCALE",
        "28 nm × 20 nm (1.7 MDa Inner-Membrane Superc"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5XTE & 1ZOY"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Respiratory Supercomplex",
        "url": "https://pdb101.rcsb.org/motm/299"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Cytochrome c Oxidase",
        "url": "https://pdb101.rcsb.org/motm/5"
      },
      {
        "title": "RCSB PDB Structure 5XTE — Human Mitochondrial Respiratory Megacomplex I₁III₂IV₁",
        "url": "https://www.rcsb.org/structure/5XTE"
      },
      {
        "title": "RCSB PDB Structure 1ZOY — Mitochondrial Respiratory Complex II",
        "url": "https://www.rcsb.org/structure/1ZOY"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_ETC_ComplexI_45Sub",
        "name": "Mammalian Complex I",
        "badge": "45SUB",
        "color": "#3A86FF",
        "desc": "Mammalian Complex I (45 Subunits: FMN, 8 Fe-S Wire & 4 Proton Pumps). Structural source: 5XTE Complex I. Color taxonomy: Complex I Cobalt Blue (#3A86FF).",
        "dissocVector": [
          -5.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_ETC_ComplexII_SDH",
        "name": "Complex II Succinate Dehydrogenase",
        "badge": "SDH",
        "color": "#06D6A0",
        "desc": "Complex II Succinate Dehydrogenase (FAD, 3 Fe-S & Heme b). Structural source: 1ZOY Complex II. Color taxonomy: Complex II Jade (#06D6A0).",
        "dissocVector": [
          -8.0,
          -1.5,
          3.0
        ]
      },
      {
        "meshName": "Piece_ETC_ComplexIII2_Dimer",
        "name": "Dimeric Complex III₂",
        "badge": "DIMER",
        "color": "#F77F00",
        "desc": "Dimeric Complex III₂ (Cytochrome bc₁, Rieske Fe-S Swinging Head & Q-Cycle). Structural source: 5XTE Complex III2 Dimer. Color taxonomy: Complex III2 Amber (#F77F00).",
        "dissocVector": [
          0.5,
          0.5,
          -1.0
        ]
      },
      {
        "meshName": "Piece_ETC_CytochromeC_Shuttle",
        "name": "Soluble Cristae-Lumen Cytochrome…",
        "badge": "SHUTTLE",
        "color": "#FFB703",
        "desc": "Soluble Cristae-Lumen Cytochrome c Heme c Shuttle & Coenzyme Q₁₀ Pool. Structural source: 5XTE / 1HRC Cytochrome c. Color taxonomy: Electron Carrier Gold (#FFB703).",
        "dissocVector": [
          2.5,
          4.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_ETC_ComplexIV_COX",
        "name": "Complex IV Cytochrome c Oxidase",
        "badge": "COX",
        "color": "#E63946",
        "desc": "Complex IV Cytochrome c Oxidase (Cu_A, Heme a & Heme a₃/Cu_B O₂ Reducer). Structural source: 5XTE / 5Z62 Complex IV. Color taxonomy: Complex IV Crimson (#E63946).",
        "dissocVector": [
          5.5,
          0.5,
          1.0
        ]
      },
      {
        "meshName": "Piece_ETC_CardiolipinCristae",
        "name": "Cardiolipin-Enriched Inner Mitoc…",
        "badge": "CARDIO",
        "color": "#9D4EDD",
        "desc": "Cardiolipin-Enriched Inner Mitochondrial Membrane Bilayer. Structural source: Cardiolipin / POPC Bilayer. Color taxonomy: Cardiolipin Membrane Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          0.0,
          -3.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Complex I: 45-Subunit NADH Oxidation & 4 H⁺ Pump",
        "desc": "Matrix NADH donates 2 e⁻ to FMN in the hydrophilic arm of Complex I; electrons hop down 8 [Fe-S]...",
        "spoken": "Stage 1 — Complex I: 45-Subunit NADH Oxidation & 4 H⁺ Pump. Matrix NADH donates 2 e⁻ to FMN in the hydrophilic arm of Complex I; electrons hop down 8 [Fe-S] clusters to reduce Ubiquinone (Q₁₀ → QH₂), triggering an electrostatic wave that pumps 4 H⁺ into the cristae lumen.",
        "color": "#3A86FF",
        "targetPiece": "Piece_ETC_ComplexI_45Sub"
      },
      {
        "step": 2,
        "title": "2 : Complex II: The TCA Succinate Side-Entry",
        "desc": "Watch Succinate Dehydrogenase oxidize Succinate → Fumarate at FAD, feeding additional QH₂ into t...",
        "spoken": "Stage 2 — Complex II: The TCA Succinate Side-Entry. Watch Succinate Dehydrogenase oxidize Succinate → Fumarate at FAD, feeding additional QH₂ into the inner membrane pool.",
        "color": "#06D6A0",
        "targetPiece": "Piece_ETC_ComplexII_SDH"
      },
      {
        "step": 3,
        "title": "3 : Dimeric Complex III₂ & The Bifurcated Q-Cycle",
        "desc": "At the Qo site of Complex III₂, one electron from QH₂ jumps onto the swinging Rieske [2Fe-2S] do...",
        "spoken": "Stage 3 — Dimeric Complex III₂ & The Bifurcated Q-Cycle. At the Qo site of Complex III₂, one electron from QH₂ jumps onto the swinging Rieske [2Fe-2S] domain to reduce soluble Cytochrome c, while the second electron recycles via hemes b_L and b_H to the Qi site, releasing 4 H⁺ into the lumen.",
        "color": "#F77F00",
        "targetPiece": "Piece_ETC_ComplexIII2_Dimer"
      },
      {
        "step": 4,
        "title": "4 : Cytochrome c Diffusion Across the Respirasome Cleft",
        "desc": "Because Complex III₂ and Complex IV are physically docked in the Respirasome, reduced Cytochrome...",
        "spoken": "Stage 4 — Cytochrome c Diffusion Across the Respirasome Cleft. Because Complex III₂ and Complex IV are physically docked in the Respirasome, reduced Cytochrome c only has to diffuse ~10 nm to dock onto Complex IV.",
        "color": "#FFB703",
        "targetPiece": "Piece_ETC_CytochromeC_Shuttle"
      },
      {
        "step": 5,
        "title": "5 : Complex IV: Binuclear Heme a₃/Cu_B Reduction of O₂ to Water",
        "desc": "Four electrons enter Complex IV via Cu_A and Heme a to the Heme a₃–Cu_B pocket, cleaving the O=O...",
        "spoken": "Stage 5 — Complex IV: Binuclear Heme a₃/Cu_B Reduction of O₂ to Water. Four electrons enter Complex IV via Cu_A and Heme a to the Heme a₃–Cu_B pocket, cleaving the O=O double bond into 2 H₂O while pumping 4 final H⁺ across the membrane.",
        "color": "#E63946",
        "targetPiece": "Piece_ETC_ComplexIV_COX"
      }
    ]
  },
  "mitochondrial_atp_synthase_dimer": {
    "num": "21",
    "id": "mitochondrial_atp_synthase_dimer",
    "folder": "21_mitochondrial_atp_synthase_dimer",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "V-SHAPED MITOCHONDRIAL F₁FO-ATP SYNTHASE DIMER & ADP/ATP TRANSLOCASE (AAC)",
    "subtitle": "Whereas bacterial F₁Fo-ATP Synthase (Prokaryote Scenario 04) operates as an isolated monomer in a flat membrane, Mitochondrial F₁Fo-ATP Synthase assembles into V-shaped D...",
    "analogy": "Renders the complete V-shaped Mitochondrial ATP Synthase Dimer (6ZQN) straddling a sharply curved 86° cristae ridge, with both c₈-rings and central γδε stalks spinning simultaneously as protons rush from the cristae lumen into the matrix, flanked by the alternating-access ADP/ATP Carrier (1OKC) exporting ATP⁴⁻.",
    "scaleTag": "EUKARYOTE SCENARIO 21 • 28 NM × 22 NM CRISTAE-CURVING ROTARY DIMER & NUCLEOTIDE ANTIPORTER • PDB: 6ZQN / 1OKC",
    "glb": "/eukaryote/models/mitochondrial_atp_synthase_dimer.glb",
    "pdb": "6ZQN, 1OKC",
    "pronounce": "[mitochondrial-atp-synthase-dimer]",
    "sliderLabel": "CRISTAE PROTON-MOTIVE FORCE ΔP (MV):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ AAC Translocase Toxin ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Proton-Motive Force ",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cristae-lumen H⁺ gradient pumped by the Mitochondrial Respirasome (Scenario 20) + Cytosolic ADP³⁻ and Pᵢ from cellular ATPase",
    "coupling": "Inputs: 8 Cristae-Lumen H⁺ protons per 360° rotation of each c₈-ri ➔ Outputs: 3 Matrix ATP⁴⁻ + 3 H₂O synthesized per 360° rotation per m",
    "downstream": "Exported ATP⁴⁻ leaves the mitochondrion through outer-membrane VDAC (Scenario 19) to fuel every ATP-dependent process in the ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~100–150 rotations/sec per monomer (~300–450"
      ],
      [
        "ENERGY CURRENCY",
        "Proton-Motive Force (Δp ≈ 200 mV) → Mechanic"
      ],
      [
        "BIOPHYSICAL SCALE",
        "28 nm × 22 nm Cristae-Curving Rotary Dimer &"
      ],
      [
        "PRIMARY RCSB PDBS",
        "6ZQN & 1OKC"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 6ZQN — Mammalian Mitochondrial ATP Synthase Dimer",
        "url": "https://www.rcsb.org/structure/6ZQN"
      },
      {
        "title": "RCSB PDB Structure 1OKC — Mitochondrial ADP/ATP Carrier",
        "url": "https://www.rcsb.org/structure/1OKC"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: ATP Synthase",
        "url": "https://pdb101.rcsb.org/motm/72"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: ADP/ATP Carrier",
        "url": "https://pdb101.rcsb.org/motm/260"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_mATP_F1Heads_LeftRight",
        "name": "Twin α₃β₃ Catalytic Hexamer Heads",
        "badge": "LEFTRI",
        "color": "#FFB703",
        "desc": "Twin α₃β₃ Catalytic Hexamer Heads (Boyer Open, Loose, Tight States). Structural source: 6ZQN Left & Right F1 Heads. Color taxonomy: Catalytic F1 Gold (#FFB703).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_mATP_GammaRotors_c8Rings",
        "name": "Twin Central γδε Camshafts & 8-S…",
        "badge": "C8RINGS",
        "color": "#E63946",
        "desc": "Twin Central γδε Camshafts & 8-Subunit Fo c₈-Ring Turbines. Structural source: 6ZQN c8-Rings & Gamma Shafts. Color taxonomy: Rotary Turbine Crimson (#E63946).",
        "dissocVector": [
          0.0,
          0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_mATP_OSCP_PeripheralStalks",
        "name": "Twin OSCP Crowns & b/d/F6 Periph…",
        "badge": "PERIPH",
        "color": "#00B4D8",
        "desc": "Twin OSCP Crowns & b/d/F6 Peripheral Stator Stalks. Structural source: 6ZQN Peripheral Stalks. Color taxonomy: Stator Stalk Cerulean (#00B4D8).",
        "dissocVector": [
          -5.5,
          2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_mATP_WedgeDimerInterface",
        "name": "86° Cristae-Bending Wedge Subunits",
        "badge": "WEDGED",
        "color": "#9D4EDD",
        "desc": "86° Cristae-Bending Wedge Subunits (e, f, g, a/ATP6 & 8/A6L). Structural source: 6ZQN Wedge Interface. Color taxonomy: Dimer Wedge Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          -2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_mATP_AAC_Antiporter",
        "name": "ADP/ATP Translocase",
        "badge": "ANTIPO",
        "color": "#F77F00",
        "desc": "ADP/ATP Translocase (AAC1 / ANT1) 6-TM Rocker-Switch Carrier. Structural source: 1OKC / 4C9G AAC Carrier. Color taxonomy: Nucleotide Carrier Amber (#F77F00).",
        "dissocVector": [
          6.5,
          -1.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_mATP_CurvedCristaeRidge",
        "name": "86°-Bent Cardiolipin Cristae Rim…",
        "badge": "CURVED",
        "color": "#06D6A0",
        "desc": "86°-Bent Cardiolipin Cristae Rim Bilayer. Structural source: Curved Cristae Membrane. Color taxonomy: Cristae Rim Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          -2.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Why Mitochondrial ATP Synthase Forms 86° V-Dimers",
        "desc": "Inspect the base of the V-dimer where subunits e, f, and g act as a molecular wedge, bending the...",
        "spoken": "Stage 1 — Why Mitochondrial ATP Synthase Forms 86° V-Dimers. Inspect the base of the V-dimer where subunits e, f, and g act as a molecular wedge, bending the inner membrane by 86° to form proton-trapping cristae rims.",
        "color": "#FFB703",
        "targetPiece": "Piece_mATP_F1Heads_LeftRight"
      },
      {
        "step": 2,
        "title": "2 : The High-Gear Mammalian c₈-Ring Turbine",
        "desc": "Protons from the cristae lumen enter the a-subunit inlet half-channel, protonate Glu58 on the c₈...",
        "spoken": "Stage 2 — The High-Gear Mammalian c₈-Ring Turbine. Protons from the cristae lumen enter the a-subunit inlet half-channel, protonate Glu58 on the c₈-ring, ride 360° through the cardiolipin bilayer, and exit to the matrix—requiring only 8 H⁺ per full turn.",
        "color": "#E63946",
        "targetPiece": "Piece_mATP_GammaRotors_c8Rings"
      },
      {
        "step": 3,
        "title": "3 : Asymmetric γ-Shaft Cam & Boyer's Three-State Cycle",
        "desc": "As the c₈-ring spins the asymmetric γ-shaft inside the stationary α₃β₃ head (held by the OSCP pe...",
        "spoken": "Stage 3 — Asymmetric γ-Shaft Cam & Boyer's Three-State Cycle. As the c₈-ring spins the asymmetric γ-shaft inside the stationary α₃β₃ head (held by the OSCP peripheral stalk), the three β-subunits cycle through Open (ATP release), Loose (ADP+Pᵢ bind), and Tight (ATP condensation).",
        "color": "#00B4D8",
        "targetPiece": "Piece_mATP_OSCP_PeripheralStalks"
      },
      {
        "step": 4,
        "title": "4 : The Synthasome Partner: ADP/ATP Carrier (AAC)",
        "desc": "Zoom to the adjacent 6-TM AAC antiporter: driven by the -160 mV membrane potential, it exports o...",
        "spoken": "Stage 4 — The Synthasome Partner: ADP/ATP Carrier (AAC). Zoom to the adjacent 6-TM AAC antiporter: driven by the -160 mV membrane potential, it exports one newly made ATP⁴⁻ to the cytosol in exchange for one cytosolic ADP³⁻.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_mATP_WedgeDimerInterface"
      },
      {
        "step": 5,
        "title": "5 : Ischemic Protection by Inhibitory Factor IF₁",
        "desc": "When oxygen drops (ischemia) and ΔΨm collapses, pH-sensitive Inhibitory Factor 1 (IF₁) inserts i...",
        "spoken": "Stage 5 — Ischemic Protection by Inhibitory Factor IF₁. When oxygen drops (ischemia) and ΔΨm collapses, pH-sensitive Inhibitory Factor 1 (IF₁) inserts its α-helix between α and β subunits like a ratchet pawl so the enzyme cannot run backward and waste cellular ATP.",
        "color": "#F77F00",
        "targetPiece": "Piece_mATP_AAC_Antiporter"
      }
    ]
  },
  "mitochondrial_tim_tom_apoptosis": {
    "num": "22",
    "id": "mitochondrial_tim_tom_apoptosis",
    "folder": "22_mitochondrial_tim_tom_apoptosis",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "TOM/TIM23 PROTEIN IMPORT, DRP1 FISSION RING & BAX/BAK–APOPTOSOME WHEEL",
    "subtitle": "Mitochondria sit at the crossroads of cellular life and death through three dynamic membrane machines: (1) Protein Import via the TOM–TIM23 Supercomplex: Because 99% of m...",
    "analogy": "Dual-mode mitochondrial outer/inner membrane scene: in 'Healthy Biogenesis Mode', TOM40 (7CP9) and TIM23 thread a nuclear-encoded preprotein into the matrix while Drp1 constricts the organelle; toggling 'Intrinsic Apoptosis Mode' assembles the BAX/BAK outer-membrane pore ring, releases glowing Cytochrome c into the cytosol, and builds the 7-spoked Apaf-1 + Caspase-9 Apoptosome Wheel (3J2T).",
    "scaleTag": "EUKARYOTE SCENARIO 22 • 20–60 NM DUAL-MEMBRANE IMPORT, FISSION & APOPTOTIC HUB • PDB: 7CP9 / 3J2T",
    "glb": "/eukaryote/models/mitochondrial_tim_tom_apoptosis.glb",
    "pdb": "7CP9, 3J2T",
    "pronounce": "[mitochondrial-tim-tom-apoptosis]",
    "sliderLabel": "CELLULAR FATE SWITCH:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Inner Membrane Potenti",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Inner-Membrane Volta",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic 80S Ribosome translation of MTS-tagged precursors (Scenario 32) + Nuclear p53 stress signals (Scenario 26) + Cris",
    "coupling": "Inputs: Unfolded nuclear-encoded Mitochondrial Preproteins (with N ➔ Outputs: Mature folded Mitochondrial Matrix & Inner-Membrane Protei",
    "downstream": "Imported enzymes build the TCA cycle (Scenario 19), Respirasome (Scenario 20), and ATP Synthase (Scenario 21); in apoptosis, ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "TOM40/TIM23 imports ~5–15 residues/sec; Apaf"
      ],
      [
        "ENERGY CURRENCY",
        "Inner-Membrane Voltage ΔΨm (-160 mV electrop"
      ],
      [
        "BIOPHYSICAL SCALE",
        "20–60 nm Dual-Membrane Import, Fission & Apo"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7CP9 & 3J2T"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Apoptosome",
        "url": "https://pdb101.rcsb.org/motm/215"
      },
      {
        "title": "RCSB PDB Structure 7CP9 — Human Mitochondrial TOM Core Complex",
        "url": "https://www.rcsb.org/structure/7CP9"
      },
      {
        "title": "RCSB PDB Structure 3J2T — Human Apaf-1 Apoptosome Holoenzyme",
        "url": "https://www.rcsb.org/structure/3J2T"
      },
      {
        "title": "Nature Reviews Molecular Cell Biology — Mitochondrial Protein Import Machinery",
        "url": "https://www.nature.com/articles/nrm.2016.127"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_MitoBio_TOM40Complex",
        "name": "Outer-Membrane TOM Core",
        "badge": "TOM40C",
        "color": "#00B4D8",
        "desc": "Outer-Membrane TOM Core (Twin 19-β-Strand TOM40 Barrels + TOM20/22 Receptors). Structural source: 7CP9 Human TOM Complex. Color taxonomy: TOM Barrel Cerulean (#00B4D8).",
        "dissocVector": [
          -5.0,
          2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_TIM23_PAM",
        "name": "Inner-Membrane TIM23 Channel, PA…",
        "badge": "PAM",
        "color": "#06D6A0",
        "desc": "Inner-Membrane TIM23 Channel, PAM/mtHsp70 Motor & MPP Peptidase. Structural source: 8SCX TIM23 + 1HR6 MPP. Color taxonomy: TIM23 Channel Jade (#06D6A0).",
        "dissocVector": [
          -5.0,
          -2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_Drp1Ring",
        "name": "Dynamin-Related Protein 1",
        "badge": "DRP1RI",
        "color": "#9D4EDD",
        "desc": "Dynamin-Related Protein 1 (Drp1) Helical GTPase Fission Ring. Structural source: 4BEJ Drp1 Oligomer. Color taxonomy: Fission Ring Violet (#9D4EDD).",
        "dissocVector": [
          0.0,
          4.0,
          -2.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_BAXPoreRing",
        "name": "Apoptotic BAX/BAK Outer-Membrane…",
        "badge": "BAXPOR",
        "color": "#F77F00",
        "desc": "Apoptotic BAX/BAK Outer-Membrane Macropore Ring & Escaping Cytochrome c. Structural source: 4BD2 BAX Pore Oligomer. Color taxonomy: BAX Pore Amber (#F77F00).",
        "dissocVector": [
          4.0,
          2.5,
          1.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_ApoptosomeWheel",
        "name": "Heptameric 7-Spoked Apaf-1 + Cyt…",
        "badge": "APOPTO",
        "color": "#E63946",
        "desc": "Heptameric 7-Spoked Apaf-1 + Cytochrome c + Caspase-9 Apoptosome Wheel. Structural source: 3J2T / 5JUY Apoptosome. Color taxonomy: Apoptosome Wheel Crimson (#E63946).",
        "dissocVector": [
          4.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_MitoBio_PreproteinMTS",
        "name": "Translocating Preprotein with Po…",
        "badge": "PREPRO",
        "color": "#FFB703",
        "desc": "Translocating Preprotein with Positively Charged Amphipathic MTS Helix. Structural source: MTS Preprotein Chain. Color taxonomy: Preprotein Gold (#FFB703).",
        "dissocVector": [
          -5.0,
          0.0,
          2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : TOM20/22 Recognition & The Twin-Barrel TOM40 Pore",
        "desc": "Watch cytosolic Hsp70 deliver a nuclear-encoded mitochondrial preprotein to TOM20, which feeds t...",
        "spoken": "Stage 1 — TOM20/22 Recognition & The Twin-Barrel TOM40 Pore. Watch cytosolic Hsp70 deliver a nuclear-encoded mitochondrial preprotein to TOM20, which feeds the positively charged MTS helix into the 19-stranded TOM40 β-barrel.",
        "color": "#00B4D8",
        "targetPiece": "Piece_MitoBio_TOM40Complex"
      },
      {
        "step": 2,
        "title": "2 : Trans-Envelope Handover to TIM23 & mtHsp70 Pulling",
        "desc": "The -160 mV inner-membrane voltage electrophoretically pulls the positively charged MTS through ...",
        "spoken": "Stage 2 — Trans-Envelope Handover to TIM23 & mtHsp70 Pulling. The -160 mV inner-membrane voltage electrophoretically pulls the positively charged MTS through the TIM23 channel, where matrix mtHsp70 burns ATP to ratchet the chain in and MPP clips off the MTS.",
        "color": "#06D6A0",
        "targetPiece": "Piece_MitoBio_TIM23_PAM"
      },
      {
        "step": 3,
        "title": "3 : Drp1 GTPase Ring Mitochondrial Fission",
        "desc": "Observe cytosolic Drp1 monomers assemble into a helical ring around the outer membrane, hydrolyz...",
        "spoken": "Stage 3 — Drp1 GTPase Ring Mitochondrial Fission. Observe cytosolic Drp1 monomers assemble into a helical ring around the outer membrane, hydrolyzing GTP to constrict and divide the mitochondrion.",
        "color": "#9D4EDD",
        "targetPiece": "Piece_MitoBio_Drp1Ring"
      },
      {
        "step": 4,
        "title": "4 : The Apoptotic Switch: BAX/BAK Macropore Formation",
        "desc": "Switch to severe cellular stress: tBid overcomes Bcl-2, triggering BAX and BAK dimers to insert ...",
        "spoken": "Stage 4 — The Apoptotic Switch: BAX/BAK Macropore Formation. Switch to severe cellular stress: tBid overcomes Bcl-2, triggering BAX and BAK dimers to insert into the Outer Membrane and assemble a giant pore ring that releases Cytochrome c from the cristae.",
        "color": "#F77F00",
        "targetPiece": "Piece_MitoBio_BAXPoreRing"
      },
      {
        "step": 5,
        "title": "5 : The 7-Spoked Apoptosome Wheel & Caspase Cascade",
        "desc": "In the cytosol, released Cytochrome c binds the WD40 propellers of Apaf-1, unlocking dATP bindin...",
        "spoken": "Stage 5 — The 7-Spoked Apoptosome Wheel & Caspase Cascade. In the cytosol, released Cytochrome c binds the WD40 propellers of Apaf-1, unlocking dATP binding so 7 Apaf-1 subunits snap into the 1.4 MDa Apoptosome Wheel that dimerizes and activates Caspase-9.",
        "color": "#E63946",
        "targetPiece": "Piece_MitoBio_ApoptosomeWheel"
      }
    ]
  },
  "chloroplast_thylakoid_cpdna": {
    "num": "23",
    "id": "chloroplast_thylakoid_cpdna",
    "folder": "23_chloroplast_thylakoid_cpdna",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "WHOLE PLANT CHLOROPLAST CUTAWAY: TOC/TIC ENVELOPE, STROMA, GRANA THYLAKOIDS & CIRCULAR CPDNA RING",
    "subtitle": "Derived from an ancient photosynthetic cyanobacterial endosymbiont, the Plant and Algal Chloroplast is a 5 µm solar-powered organelle featuring three distinct membranes a...",
    "analogy": "Surgical 3/4 cutaway of a complete Plant Chloroplast: exposes the smooth Outer and Inner Envelope membranes (with TOC–TIC import complexes), the stacked green Thylakoid Grana columns connected by helical Stromal Lamellae bridges, stromal starch grains, 70S Chlororibosomes, and a glowing 150 kb Circular cpDNA Ring.",
    "scaleTag": "EUKARYOTE SCENARIO 23 • 5 ΜM × 2.5 ΜM TRIPLE-MEMBRANE PHOTOSYNTHETIC PLASTID • PDB: 7VCF / 5MMJ",
    "glb": "/eukaryote/models/chloroplast_thylakoid_cpdna.glb",
    "pdb": "7VCF, 5MMJ",
    "pronounce": "[chloroplast-thylakoid-cpdna]",
    "sliderLabel": "ENVELOPE & GRANA CUTAWAY DEPTH:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ LHCII State Transition",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Solar Photon Excitat",
      "🛑 Energy Depleted"
    ],
    "upstream": "Solar photons (400–700 nm PAR) + Atmospheric CO₂ (via stomata) + Root H₂O (via xylem) + Nuclear-encoded transit-peptide prote",
    "coupling": "Inputs: Sunlight (400–700 nm photons) + 6 CO₂ + 6 H₂O ➔ Outputs: Molecular Oxygen (6 O₂ released to Earth's atmosphere)",
    "downstream": "Hosts the Thylakoid Light Reactions (Scenario 24) and Stromal Calvin Cycle RuBisCO (Scenario 25); exported sucrose/malate and",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Single leaf cell contains ~50–100 chloroplas"
      ],
      [
        "ENERGY CURRENCY",
        "Solar Photon Excitation (hν) → Thylakoid ΔpH"
      ],
      [
        "BIOPHYSICAL SCALE",
        "5 µm × 2.5 µm Triple-Membrane Photosynthetic"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7VCF & 5MMJ"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB Structure 7VCF — Chloroplast TOC-TIC Translocon Supercomplex",
        "url": "https://www.rcsb.org/structure/7VCF"
      },
      {
        "title": "RCSB PDB Structure 5MMJ — Spinach 70S Chloroplast Ribosome",
        "url": "https://www.rcsb.org/structure/5MMJ"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Chloroplasts and Photosynthesis",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26819/"
      },
      {
        "title": "Cell — Cryo-ET Architecture of Native Plant Thylakoid Grana Membranes",
        "url": "https://www.cell.com/cell/fulltext/S0092-8674(19)31271-1"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Chl_OuterInnerEnvelope",
        "name": "Double Chloroplast Envelope & TO…",
        "badge": "OUTERI",
        "color": "#06D6A0",
        "desc": "Double Chloroplast Envelope & TOC75–TIC214 Import Supercomplex. Structural source: 7VCF TOC-TIC Supercomplex. Color taxonomy: Envelope Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.5,
          -2.5
        ]
      },
      {
        "meshName": "Piece_Chl_GranaThylakoidStacks",
        "name": "Stacked Thylakoid Grana Cylinder…",
        "badge": "GRANAT",
        "color": "#2EC4B6",
        "desc": "Stacked Thylakoid Grana Cylinders & Helical Stromal Lamellae. Structural source: Grana Thylakoid Architecture. Color taxonomy: Thylakoid Chlorophyll Teal (#2EC4B6).",
        "dissocVector": [
          0.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Chl_CircularCpDNARing",
        "name": "150 kb Closed Circular Double-St…",
        "badge": "CIRCUL",
        "color": "#FFB703",
        "desc": "150 kb Closed Circular Double-Stranded cpDNA Ring (LSC, SSC, IRA/IRB). Structural source: Circular Plastid Genome Ring. Color taxonomy: Circular cpDNA Gold (#FFB703).",
        "dissocVector": [
          -3.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Chl_Chlororibosome70S",
        "name": "70S Chloroplast Ribosome",
        "badge": "CHLORO",
        "color": "#7209B7",
        "desc": "70S Chloroplast Ribosome (30S + 50S) Translating rbcL & D1. Structural source: 5MMJ 70S Chlororibosome. Color taxonomy: Chlororibosome Purple (#7209B7).",
        "dissocVector": [
          3.5,
          -2.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Chl_StromalRuBisCOStarch",
        "name": "Stromal RuBisCO Halo, Plastoglob…",
        "badge": "STROMA",
        "color": "#F77F00",
        "desc": "Stromal RuBisCO Halo, Plastoglobules & Semicrystalline Starch Grain. Structural source: 1RBL RuBisCO + Starch. Color taxonomy: Stromal Carbon Amber (#F77F00).",
        "dissocVector": [
          0.0,
          -3.5,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : The Three-Membrane Endosymbiotic Architecture",
        "desc": "Explore the Outer Envelope, Inner Envelope, and internal Thylakoid system dividing the chloropla...",
        "spoken": "Stage 1 — The Three-Membrane Endosymbiotic Architecture. Explore the Outer Envelope, Inner Envelope, and internal Thylakoid system dividing the chloroplast into Intermembrane Space, Stroma, and Thylakoid Lumen.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Chl_OuterInnerEnvelope"
      },
      {
        "step": 2,
        "title": "2 : TOC–TIC Trans-Envelope Protein Import",
        "desc": "Zoom to the envelope where the TOC75 β-barrel and TIC channel import nuclear-encoded chloroplast...",
        "spoken": "Stage 2 — TOC–TIC Trans-Envelope Protein Import. Zoom to the envelope where the TOC75 β-barrel and TIC channel import nuclear-encoded chloroplast precursors carrying an N-terminal transit peptide.",
        "color": "#2EC4B6",
        "targetPiece": "Piece_Chl_GranaThylakoidStacks"
      },
      {
        "step": 3,
        "title": "3 : Grana Stacks vs. Stromal Lamellae Partitioning",
        "desc": "See why Photosystem II and LHCII pack tightly into flat appressed Grana disks while bulky Photos...",
        "spoken": "Stage 3 — Grana Stacks vs. Stromal Lamellae Partitioning. See why Photosystem II and LHCII pack tightly into flat appressed Grana disks while bulky Photosystem I and CF₁CFo-ATP Synthase sit on the unstacked grana margins and stromal lamellae.",
        "color": "#FFB703",
        "targetPiece": "Piece_Chl_CircularCpDNARing"
      },
      {
        "step": 4,
        "title": "4 : The 150 kb Circular cpDNA Ring & Inverted Repeats",
        "desc": "Inspect the closed circular chloroplast DNA (cpDNA) ring with its Large Single-Copy (LSC), Small...",
        "spoken": "Stage 4 — The 150 kb Circular cpDNA Ring & Inverted Repeats. Inspect the closed circular chloroplast DNA (cpDNA) ring with its Large Single-Copy (LSC), Small Single-Copy (SSC), and two stabilizing Inverted Repeat (IRA/IRB) regions.",
        "color": "#7209B7",
        "targetPiece": "Piece_Chl_Chlororibosome70S"
      },
      {
        "step": 5,
        "title": "5 : 70S Chlororibosomes & Co-Evolution with the Nucleus",
        "desc": "Watch bacterial-style 70S Chlororibosomes translate the rbcL Large subunit of RuBisCO in the str...",
        "spoken": "Stage 5 — 70S Chlororibosomes & Co-Evolution with the Nucleus. Watch bacterial-style 70S Chlororibosomes translate the rbcL Large subunit of RuBisCO in the stroma to pair with nuclear-encoded rbcS Small subunits.",
        "color": "#F77F00",
        "targetPiece": "Piece_Chl_StromalRuBisCOStarch"
      }
    ]
  },
  "photosystem_ii_i_z_scheme": {
    "num": "24",
    "id": "photosystem_ii_i_z_scheme",
    "folder": "24_photosystem_ii_i_z_scheme",
    "tier": "Tier 5 — Endosymbiotic Bioenergetic Powerhouses: Mitochondria & Chloroplasts",
    "title": "THYLAKOID LIGHT REACTIONS: PHOTOSYSTEM II (MN₄CAO₅ WATER-SPLITTING), CYTOCHROME B₆F, PHOTOSYSTEM I & CF₁CFO-ATP SYNTHASE",
    "subtitle": "The Thylakoid Membrane executes the most important photochemical reaction on Earth—the Z-Scheme of Oxygenic Photosynthesis—across four coupled nanomachines: (1) Dimeric P...",
    "analogy": "Renders all four thylakoid complexes in sequence across the thylakoid membrane (Stroma on top, Thylakoid Lumen below): PSII–LHCII (5XNL) with its luminal Mn₄CaO₅ cubane cluster evolving O₂ bubbles, Cytochrome b₆f + Plastocyanin shuttle, PSI–LHCI (5ZJI) + Ferredoxin/FNR generating NADPH, and rotary CF₁CFo-ATP Synthase generating ATP.",
    "scaleTag": "EUKARYOTE SCENARIO 24 • 35 NM THYLAKOID Z-SCHEME PHOTOSYNTHETIC CHAIN • PDB: 5XNL / 5ZJI",
    "glb": "/eukaryote/models/photosystem_ii_i_z_scheme.glb",
    "pdb": "5XNL, 5ZJI",
    "pronounce": "[photosystem-ii-i-z-scheme]",
    "sliderLabel": "SOLAR PHOTON FLUX INTENSITY (PAR ΜMOL/M²/S):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Mn₄CaO₅ Kok Cycle Step",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 8 Photons (ΔE ≈ 1,40",
      "🛑 Energy Depleted"
    ],
    "upstream": "Solar photons (680 nm & 700 nm) + Root/Leaf H₂O + Recycled stromal NADP⁺, ADP, and Pᵢ from the Calvin Cycle (Scenario 25).",
    "coupling": "Inputs: 8 Solar Photons (4 at PSII 680 nm + 4 at PSI 700 nm) + 2 H ➔ Outputs: 1 Molecular Oxygen (O₂ evolved into the atmosphere) + 12 L",
    "downstream": "Stromal ATP and NADPH directly power the hexadecameric RuBisCO Calvin–Benson Cycle in the Stroma (Scenario 25); evolved O₂ fu",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "PSII Kok S-state water-splitting cycle compl"
      ],
      [
        "ENERGY CURRENCY",
        "8 Photons (ΔE ≈ 1,400 kJ) → Linear Electron "
      ],
      [
        "BIOPHYSICAL SCALE",
        "35 nm Thylakoid Z-Scheme Photosynthetic Chai"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5XNL & 5ZJI"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Photosystem II",
        "url": "https://pdb101.rcsb.org/motm/59"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Photosystem I",
        "url": "https://pdb101.rcsb.org/motm/22"
      },
      {
        "title": "RCSB PDB Structure 5XNL — Plant C₂S₂M₂ PSII–LHCII Supercomplex",
        "url": "https://www.rcsb.org/structure/5XNL"
      },
      {
        "title": "RCSB PDB Structure 5ZJI — Plant PSI–LHCI Supercomplex",
        "url": "https://www.rcsb.org/structure/5ZJI"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Photo_PSII_LHCII",
        "name": "Photosystem II–LHCII Supercomplex",
        "badge": "LHCII",
        "color": "#2EC4B6",
        "desc": "Photosystem II–LHCII Supercomplex (D1/D2, P680 & Chlorophyll Antennae). Structural source: 5XNL Plant PSII-LHCII. Color taxonomy: Photosystem II Teal (#2EC4B6).",
        "dissocVector": [
          -6.0,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Photo_Mn4CaO5_OEC",
        "name": "Luminal Mn₄CaO₅ Oxygen-Evolving…",
        "badge": "OEC",
        "color": "#FFB703",
        "desc": "Luminal Mn₄CaO₅ Oxygen-Evolving Cubane Cluster & PsbO/P/Q Cap. Structural source: 3WU2 / 5XNL Mn4CaO5 Cluster. Color taxonomy: Water-Splitting Gold (#FFB703).",
        "dissocVector": [
          -6.0,
          -3.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_Photo_CytB6f_Plastocyanin",
        "name": "Dimeric Cytochrome b₆f Complex,…",
        "badge": "PLASTO",
        "color": "#F77F00",
        "desc": "Dimeric Cytochrome b₆f Complex, Plastoquinol Pool & Cu-Plastocyanin. Structural source: 6RQF Cyt b6f + 1BXU PC. Color taxonomy: Cytochrome b6f Amber (#F77F00).",
        "dissocVector": [
          -1.0,
          -0.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Photo_PSI_LHCI_FNR",
        "name": "Photosystem I–LHCI",
        "badge": "FNR",
        "color": "#3A86FF",
        "desc": "Photosystem I–LHCI (P700, Fe-S Wire), Ferredoxin & FNR (NADPH Generator). Structural source: 5ZJI PSI + 1GAQ Fd-FNR. Color taxonomy: Photosystem I Cobalt Blue (#3A86FF).",
        "dissocVector": [
          3.5,
          1.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Photo_CF1CFo_ATPSynthase",
        "name": "Chloroplast CF₁CFo-ATP Synthase",
        "badge": "ATPSYN",
        "color": "#E63946",
        "desc": "Chloroplast CF₁CFo-ATP Synthase (Redox γ-Switch & 14-Subunit c₁₄-Ring). Structural source: 6FKF Chloroplast ATP Synthase. Color taxonomy: Rotary Synthase Crimson (#E63946).",
        "dissocVector": [
          7.5,
          1.5,
          -1.0
        ]
      },
      {
        "meshName": "Piece_Photo_ThylakoidBilayer",
        "name": "Galactolipid-Rich Thylakoid Memb…",
        "badge": "THYLAK",
        "color": "#06D6A0",
        "desc": "Galactolipid-Rich Thylakoid Membrane (MGDG/DGDG Bilayer). Structural source: Thylakoid Bilayer. Color taxonomy: Thylakoid Membrane Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          -2.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Exciton Funneling & P680 Charge Separation in PSII",
        "desc": "Watch 680 nm photons strike LHCII antenna chlorophylls and funnel picosecond excitation energy t...",
        "spoken": "Stage 1 — Exciton Funneling & P680 Charge Separation in PSII. Watch 680 nm photons strike LHCII antenna chlorophylls and funnel picosecond excitation energy to the P680 reaction center, ejecting an electron to Pheophytin and Plastoquinone Q_B.",
        "color": "#2EC4B6",
        "targetPiece": "Piece_Photo_PSII_LHCII"
      },
      {
        "step": 2,
        "title": "2 : The Mn₄CaO₅ Water-Splitting Clock (Kok S₀–S₄ Cycle)",
        "desc": "Follow four sequential photon flashes as P680•⁺ extracts 4 electrons via Tyr_Z from the distorte...",
        "spoken": "Stage 2 — The Mn₄CaO₅ Water-Splitting Clock (Kok S₀–S₄ Cycle). Follow four sequential photon flashes as P680•⁺ extracts 4 electrons via Tyr_Z from the distorted Mn₄CaO₅ cubane cluster, snapping two H₂O molecules into O=O gas and 4 luminal H⁺.",
        "color": "#FFB703",
        "targetPiece": "Piece_Photo_Mn4CaO5_OEC"
      },
      {
        "step": 3,
        "title": "3 : Plastoquinol, Cytochrome b₆f Q-Cycle & Plastocyanin",
        "desc": "Reduced Plastoquinol (PQH₂) diffuses to Cytochrome b₆f, which pumps 4 more H⁺ into the lumen and...",
        "spoken": "Stage 3 — Plastoquinol, Cytochrome b₆f Q-Cycle & Plastocyanin. Reduced Plastoquinol (PQH₂) diffuses to Cytochrome b₆f, which pumps 4 more H⁺ into the lumen and hands electrons to the blue copper-protein Plastocyanin.",
        "color": "#F77F00",
        "targetPiece": "Piece_Photo_CytB6f_Plastocyanin"
      },
      {
        "step": 4,
        "title": "4 : Photosystem I (P700), Ferredoxin & FNR NADPH Synthesis",
        "desc": "A second 700 nm photon excites P700 in PSI, boosting the electron from Plastocyanin through thre...",
        "spoken": "Stage 4 — Photosystem I (P700), Ferredoxin & FNR NADPH Synthesis. A second 700 nm photon excites P700 in PSI, boosting the electron from Plastocyanin through three [4Fe-4S] clusters to stromal Ferredoxin and FNR to reduce NADP⁺ → NADPH.",
        "color": "#3A86FF",
        "targetPiece": "Piece_Photo_PSI_LHCI_FNR"
      },
      {
        "step": 5,
        "title": "5 : Thylakoid ΔpH & CF₁CFo-ATP Synthase Photophosphorylation",
        "desc": "The 1,000-fold proton gradient (Lumen pH 5.5 vs. Stroma pH 8.0) spins the 14-subunit c₁₄-ring of...",
        "spoken": "Stage 5 — Thylakoid ΔpH & CF₁CFo-ATP Synthase Photophosphorylation. The 1,000-fold proton gradient (Lumen pH 5.5 vs. Stroma pH 8.0) spins the 14-subunit c₁₄-ring of CF₁CFo-ATP Synthase to generate the ATP that accompanies NADPH into the Calvin Cycle.",
        "color": "#E63946",
        "targetPiece": "Piece_Photo_CF1CFo_ATPSynthase"
      }
    ]
  },
  "calvin_cycle_rubisco_16mer": {
    "num": "25",
    "id": "calvin_cycle_rubisco_16mer",
    "folder": "25_calvin_cycle_rubisco_16mer",
    "tier": "Tier 5 — Bioenergetic Organelles: Mitochondria, Chloroplasts & Peroxisomes",
    "title": "THE CALVIN–BENSON CYCLE & RUBISCO HEXADECAMER (L₈S₈ CARBON FIXATION VS. PHOTORESPIRATION)",
    "subtitle": "Ribulose-1,5-bisphosphate carboxylase/oxygenase (RuBisCO) is the most abundant enzyme in the terrestrial biosphere and the primary gateway by which inorganic atmospheric ...",
    "analogy": "Visualizes the 16-subunit L₈S₈ RuBisCO barrel alongside the AAA+ RuBisCO Activase hexamer and the stromal Calvin–Benson enzyme ring: shows Lys201-CO₂-Mg²⁺ active-site coordination, Loop 6 closure over RuBP, cleavage of the 6C intermediate into two 3-PGA molecules, ATP/NADPH reduction to G3P, and competitive O₂ oxygenation.",
    "scaleTag": "EUKARYOTE SCENARIO 25 • 12 NM L₈S₈ RUBISCO BARREL & STROMAL CARBON-REDUCTION CYCLE • PDB: 1RBL / 3ZUH",
    "glb": "/eukaryote/models/calvin_cycle_rubisco_16mer.glb",
    "pdb": "1RBL, 3ZUH",
    "pronounce": "[calvin-cycle-rubisco-16mer]",
    "sliderLabel": "STROMAL [CO₂] / [O₂] RATIO (CARBOXYLATION VS. PHOTORESPIRATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ RuBisCO Activase AAA+ ",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 3 ATP & 2 NADPH cons",
      "🛑 Energy Depleted"
    ],
    "upstream": "Thylakoid Light-Reaction Z-Scheme (Scenario 24, supplying stromal ATP, NADPH, Mg²⁺ efflux, and pH 8.0) + Stomatal & Chloropla",
    "coupling": "Inputs: 3 CO₂ + 3 H₂O + 3 Ribulose-1,5-bisphosphate (RuBP, 5C acce ➔ Outputs: 1 Net Glyceraldehyde-3-Phosphate (G3P / Triose-P) exported",
    "downstream": "Exported G3P drives cytosolic sucrose synthesis and mitochondrial glycolysis/TCA (Scenarios 19–21); photorespiratory 2-phosph",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "RuBisCO k_cat ≈ 3–4 CO₂ fixed per active sit"
      ],
      [
        "ENERGY CURRENCY",
        "3 ATP & 2 NADPH consumed per CO₂ fixed (9 AT"
      ],
      [
        "BIOPHYSICAL SCALE",
        "12 nm L₈S₈ RuBisCO Barrel & Stromal Carbon-R"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1RBL & 3ZUH"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: RuBisCO",
        "url": "https://pdb101.rcsb.org/motm/11"
      },
      {
        "title": "RCSB PDB Structure 1RBL — Spinach L₈S₈ RuBisCO Hexadecamer",
        "url": "https://www.rcsb.org/structure/1RBL"
      },
      {
        "title": "RCSB PDB Structure 3ZUH — Chloroplast RuBisCO Activase AAA+ Hexamer",
        "url": "https://www.rcsb.org/structure/3ZUH"
      },
      {
        "title": "NCBI Bookshelf — Biochemistry: The Calvin Cycle & Photosynthetic Carbon Assimilation",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK22468/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Rubisco_RbcL_Core",
        "name": "Octameric Catalytic Core",
        "badge": "CORE",
        "color": "#06D6A0",
        "desc": "Octameric Catalytic Core (8 × RbcL Large Subunits with Loop 6 Gates). Structural source: 1RBL Chains A–H. Color taxonomy: RbcL Core Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rubisco_RbcS_Caps",
        "name": "Apical & Basal Regulatory Caps",
        "badge": "CAPS",
        "color": "#0077B6",
        "desc": "Apical & Basal Regulatory Caps (8 × RbcS Small Subunits). Structural source: 1RBL Chains I–P. Color taxonomy: RbcS Cap Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rubisco_MgActiveSite",
        "name": "Carbamylated Lys201–CO₂–Mg²⁺ Act…",
        "badge": "MGACTI",
        "color": "#FFB703",
        "desc": "Carbamylated Lys201–CO₂–Mg²⁺ Active Site & RuBP Enediolate. Structural source: 1RBL Active Site Pocket. Color taxonomy: Catalytic Mg²⁺ Gold (#FFB703).",
        "dissocVector": [
          2.5,
          0.5,
          2.5
        ]
      },
      {
        "meshName": "Piece_Rubisco_Activase",
        "name": "RuBisCO Activase AAA+ Hexamer",
        "badge": "ACTIVA",
        "color": "#F77F00",
        "desc": "RuBisCO Activase AAA+ Hexamer (Active-Site Sugar Remodeler). Structural source: 3ZUH RuBisCO Activase. Color taxonomy: Activase Amber (#F77F00).",
        "dissocVector": [
          -5.5,
          1.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Rubisco_PGK_GAPDH",
        "name": "Stromal Phosphoglycerate Kinase…",
        "badge": "GAPDH",
        "color": "#7209B7",
        "desc": "Stromal Phosphoglycerate Kinase & GAPDH Reduction Module (ATP/NADPH). Structural source: 2WZB / 1RM5 Stromal Enzymes. Color taxonomy: Reduction Module Purple (#7209B7).",
        "dissocVector": [
          5.5,
          -1.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Rubisco_PRK_Regen",
        "name": "Phosphoribulokinase",
        "badge": "REGEN",
        "color": "#E63946",
        "desc": "Phosphoribulokinase (PRK) & Transketolase RuBP Regeneration Ring. Structural source: 6H7G PRK–GAPDH–CP12 Complex. Color taxonomy: Regeneration Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -4.8,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Light-Driven Stromal Alkalinization & Lys201 Carbamylation",
        "desc": "Illumination pumps H⁺ into thylakoids, raising stromal pH to 8.0 and releasing Mg²⁺; an activato...",
        "spoken": "Stage 1 — Light-Driven Stromal Alkalinization & Lys201 Carbamylation. Illumination pumps H⁺ into thylakoids, raising stromal pH to 8.0 and releasing Mg²⁺; an activator CO₂ carbamylates RbcL Lys201 to coordinate the catalytic Mg²⁺ ion.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Rubisco_RbcL_Core"
      },
      {
        "step": 2,
        "title": "2 : RuBP Binding, Enolization & Loop 6 Closure",
        "desc": "5-carbon Ribulose-1,5-bisphosphate (RuBP) coordinates the Mg²⁺ ion, deprotonating C3 to form a r...",
        "spoken": "Stage 2 — RuBP Binding, Enolization & Loop 6 Closure. 5-carbon Ribulose-1,5-bisphosphate (RuBP) coordinates the Mg²⁺ ion, deprotonating C3 to form a reactive 2,3-enediolate as flexible Loop 6 seals the active site.",
        "color": "#0077B6",
        "targetPiece": "Piece_Rubisco_RbcS_Caps"
      },
      {
        "step": 3,
        "title": "3 : Electrophilic CO₂ Attack & 6C β-Keto Acid Cleavage",
        "desc": "Substrate CO₂ attacks C2 of the enediolate to form a transient 6-carbon 2-carboxy-3-keto-D-arabi...",
        "spoken": "Stage 3 — Electrophilic CO₂ Attack & 6C β-Keto Acid Cleavage. Substrate CO₂ attacks C2 of the enediolate to form a transient 6-carbon 2-carboxy-3-keto-D-arabinitol 1,5-bisphosphate intermediate, which hydrates and splits into two 3-PGA molecules.",
        "color": "#FFB703",
        "targetPiece": "Piece_Rubisco_MgActiveSite"
      },
      {
        "step": 4,
        "title": "4 : ATP Phosphorylation & NADPH Reduction to G3P",
        "desc": "Phosphoglycerate kinase uses stromal ATP to convert 3-PGA into 1,3-BPG, and chloroplastic GAPDH ...",
        "spoken": "Stage 4 — ATP Phosphorylation & NADPH Reduction to G3P. Phosphoglycerate kinase uses stromal ATP to convert 3-PGA into 1,3-BPG, and chloroplastic GAPDH uses NADPH to reduce it into Glyceraldehyde-3-Phosphate (G3P).",
        "color": "#F77F00",
        "targetPiece": "Piece_Rubisco_Activase"
      },
      {
        "step": 5,
        "title": "5 : RuBP Regeneration vs. O₂ Photorespiration & Activase Rescue",
        "desc": "Five of every six G3P molecules are rearranged by transketolase, aldolase, and phosphoribulokina...",
        "spoken": "Stage 5 — RuBP Regeneration vs. O₂ Photorespiration & Activase Rescue. Five of every six G3P molecules are rearranged by transketolase, aldolase, and phosphoribulokinase (PRK) to regenerate 3 RuBP, while RuBisCO Activase uses ATP to eject stalled sugar phosphates.",
        "color": "#7209B7",
        "targetPiece": "Piece_Rubisco_PGK_GAPDH"
      }
    ]
  },
  "nucleus_envelope_nucleolus": {
    "num": "26",
    "id": "nucleus_envelope_nucleolus",
    "folder": "26_nucleus_envelope_nucleolus",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE NUCLEUS: DOUBLE NUCLEAR ENVELOPE, NUCLEAR LAMINA MESHWORK, CHROMATIN TERRITORIES & TRIPARTITE NUCLEOLUS",
    "subtitle": "The Nucleus (~5–10 µm diameter) is the defining organelle of eukaryotic life, physically decoupling transcription and RNA processing (Scenarios 30–31) from cytoplasmic tr...",
    "analogy": "Presents a dramatic 90° architectural cutaway of the whole Eukaryotic Nucleus: reveals the ribosome-studded Outer Nuclear Membrane continuous with the ER, the perinuclear lumen, the Inner Nuclear Membrane lined by the orthogonal Lamin A/B meshwork, embedded Nuclear Pore Complexes, peripheral Heterochromatin vs. interior Euchromatin territories, and the glowing tripartite Nucleolus assembling pre-40S/pre-60S ribosomal subunits.",
    "scaleTag": "EUKARYOTE SCENARIO 26 • 6 ΜM WHOLE-ORGANELLE CUTAWAY WITH 15 NM LAMINA & TRIPARTITE NUCLEOLAR CONDENSATE • PDB: 7R5K / 6L8Q",
    "glb": "/eukaryote/models/nucleus_envelope_nucleolus.glb",
    "pdb": "7R5K, 6L8Q",
    "pronounce": "[nucleus-envelope-nucleolus]",
    "sliderLabel": "EPIGENETIC CHROMATIN STATE (EUCHROMATIN VS. HETEROCHROMATIN):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Nuclear Lamina Stiffne",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ RanGTP/RanGDP Nucleo",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic import of Histones, Ribosomal Proteins, Lamin subunits, RNA Polymerases, and NTPs via Nuclear Pore Complexes (Sce",
    "coupling": "Inputs: Imported Ribosomal Proteins (RPs, ~80 species), Histones ( ➔ Outputs: Pre-40S and Pre-60S Ribosomal Subunits exported through NP",
    "downstream": "Feeds all nuclear macromolecules through the Nuclear Pore Complex (Scenario 27) into Cytoplasmic Translation (Scenario 32), R",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "A proliferating human nucleus synthesizes ~7"
      ],
      [
        "ENERGY CURRENCY",
        "RanGTP/RanGDP Nucleocytoplasmic Gradient + N"
      ],
      [
        "BIOPHYSICAL SCALE",
        "6 µm Whole-Organelle Cutaway with 15 nm Lami"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7R5K & 6L8Q"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Nuclear Pore Complex",
        "url": "https://pdb101.rcsb.org/motm/205"
      },
      {
        "title": "RCSB PDB Structure 7R5K — Human Nuclear Pore Complex in the Nuclear Envelope",
        "url": "https://www.rcsb.org/structure/7R5K"
      },
      {
        "title": "RCSB PDB Structure 6L8Q — Human Nucleolar 90S Pre-Ribosome (SSU Processome)",
        "url": "https://www.rcsb.org/structure/6L8Q"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Compartmentalization of the Nucleus",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26865/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Nuc_DoubleEnvelope",
        "name": "Double Nuclear Envelope",
        "badge": "DOUBLE",
        "color": "#06D6A0",
        "desc": "Double Nuclear Envelope (Outer ONM continuous with ER & Inner INM). Structural source: Nuclear Envelope Bilayer. Color taxonomy: Nuclear Envelope Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.8,
          0.0
        ]
      },
      {
        "meshName": "Piece_Nuc_PoreComplexes",
        "name": "Embedded Nuclear Pore Complexes",
        "badge": "PORECO",
        "color": "#FFB703",
        "desc": "Embedded Nuclear Pore Complexes (NPCs) & LINC SUN–KASH Bridges. Structural source: 7R5K NPC Assembly. Color taxonomy: Nuclear Pore Gold (#FFB703).",
        "dissocVector": [
          -4.8,
          2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_LaminaMesh",
        "name": "Nuclear Lamina Orthogonal Tetram…",
        "badge": "LAMINA",
        "color": "#E76F51",
        "desc": "Nuclear Lamina Orthogonal Tetramer Meshwork (Lamins A/C & B1/B2). Structural source: 6JLB Nuclear Lamin Coiled-Coil. Color taxonomy: Lamina Terracotta (#E76F51).",
        "dissocVector": [
          4.8,
          2.5,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_Heterochromatin",
        "name": "Peripheral Heterochromatin",
        "badge": "HETERO",
        "color": "#48CAE4",
        "desc": "Peripheral Heterochromatin (LADs, H3K9me3 Condensed Chromatin). Structural source: 1AOI Condensed Chromatin. Color taxonomy: Heterochromatin Cyan (#48CAE4).",
        "dissocVector": [
          -3.8,
          -1.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_Euchromatin",
        "name": "Interior Euchromatin Loops & Tra…",
        "badge": "EUCHRO",
        "color": "#0077B6",
        "desc": "Interior Euchromatin Loops & Transcription Factories (Active Chromatin). Structural source: 7LBM Active Chromatin Loops. Color taxonomy: Euchromatin Marine Blue (#0077B6).",
        "dissocVector": [
          3.8,
          -1.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Nuc_Nucleolus",
        "name": "Tripartite Nucleolus Condensate",
        "badge": "NUCLEO",
        "color": "#7209B7",
        "desc": "Tripartite Nucleolus Condensate (FC, DFC, GC) & 90S Pre-Ribosome. Structural source: 6L8Q 90S Pre-Ribosome. Color taxonomy: Nucleolus Royal Purple (#7209B7).",
        "dissocVector": [
          0.0,
          -3.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Double Nuclear Envelope & ER Continuity",
        "desc": "Inspect how the Outer Nuclear Membrane merges seamlessly with Rough ER cisternae while the Inner...",
        "spoken": "Stage 1 — Double Nuclear Envelope & ER Continuity. Inspect how the Outer Nuclear Membrane merges seamlessly with Rough ER cisternae while the Inner Nuclear Membrane seals the genome behind a selective perinuclear lumen.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Nuc_DoubleEnvelope"
      },
      {
        "step": 2,
        "title": "2 : The Nuclear Lamina & Mechanotransduction (LINC)",
        "desc": "Trace the 15 nm woven meshwork of Lamin A/C and Lamin B intermediate filaments that resists mech...",
        "spoken": "Stage 2 — The Nuclear Lamina & Mechanotransduction (LINC). Trace the 15 nm woven meshwork of Lamin A/C and Lamin B intermediate filaments that resists mechanical deformation and connects via SUN–KASH LINC bridges to cytoplasmic microtubules and actin.",
        "color": "#FFB703",
        "targetPiece": "Piece_Nuc_PoreComplexes"
      },
      {
        "step": 3,
        "title": "3 : Chromosome Territories: LADs vs. Interior Euchromatin",
        "desc": "Observe how gene-poor, H3K9me3-marked Heterochromatin is tethered to the peripheral Nuclear Lami...",
        "spoken": "Stage 3 — Chromosome Territories: LADs vs. Interior Euchromatin. Observe how gene-poor, H3K9me3-marked Heterochromatin is tethered to the peripheral Nuclear Lamina (LADs), while gene-rich Euchromatin loops inward toward active RNA Pol II factories.",
        "color": "#E76F51",
        "targetPiece": "Piece_Nuc_LaminaMesh"
      },
      {
        "step": 4,
        "title": "4 : The Tripartite Nucleolus & 47S Pre-rRNA Transcription",
        "desc": "Zoom into the phase-separated Nucleolus: RNA Polymerase I transcribes tandem rDNA repeats in the...",
        "spoken": "Stage 4 — The Tripartite Nucleolus & 47S Pre-rRNA Transcription. Zoom into the phase-separated Nucleolus: RNA Polymerase I transcribes tandem rDNA repeats in the Fibrillar Center (FC), while snoRNPs in the Dense Fibrillar Component (DFC) cleave and 2'-O-methylate the rRNA.",
        "color": "#48CAE4",
        "targetPiece": "Piece_Nuc_Heterochromatin"
      },
      {
        "step": 5,
        "title": "5 : 90S Processome Maturation & Pre-40S/60S Nuclear Export",
        "desc": "Watch ~80 imported ribosomal proteins fold onto the rRNA scaffold in the Granular Component (GC)...",
        "spoken": "Stage 5 — 90S Processome Maturation & Pre-40S/60S Nuclear Export. Watch ~80 imported ribosomal proteins fold onto the rRNA scaffold in the Granular Component (GC) to form pre-40S and pre-60S subunits, which exit through Nuclear Pore Complexes into the cytoplasm.",
        "color": "#0077B6",
        "targetPiece": "Piece_Nuc_Euchromatin"
      }
    ]
  },
  "nuclear_pore_complex_npc": {
    "num": "27",
    "id": "nuclear_pore_complex_npc",
    "folder": "27_nuclear_pore_complex_npc",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE NUCLEAR PORE COMPLEX (NPC): 120 MDA OCTAGONAL GATE, FG-REPEAT HYDROGEL & RANGTP/RANGDP TRANSPORT CYCLE",
    "subtitle": "At ~120 Megadaltons and ~1,000 individual protein subunits (composed of ~30 distinct Nucleoporins or Nups in 8-fold rotational symmetry), the vertebrate Nuclear Pore Comp...",
    "analogy": "Visualizes the 8-fold symmetric 120 MDa Nuclear Pore Complex spanning the double nuclear membrane: animates the Cytoplasmic Filaments, Y-complex Outer Rings, Inner Spoke Ring, Nuclear Basket, the phase-separated FG-Repeat hydrogel mesh inside the central channel, and bidirectional Importin-α/β + Exportin-1/CRM1 transport driven by nuclear RCC1 (RanGTP) and cytoplasmic RanGAP1 (RanGDP).",
    "scaleTag": "EUKARYOTE SCENARIO 27 • 120 NM DIAMETER, 120 MDA OCTAGONAL SYMMETRIC MACROMOLECULAR CHANNEL (~1,000 NUCLEOPORINS) • PDB: 7R5K / 1IBR",
    "glb": "/eukaryote/models/nuclear_pore_complex_npc.glb",
    "pdb": "7R5K, 1IBR",
    "pronounce": "[nuclear-pore-complex-npc]",
    "sliderLabel": "ACTIVE TRANSPORT MODE (NLS IMPORT VS. NES/MRNP EXPORT):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ FG-Repeat Hydrogel Sie",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 1 GTP hydrolyzed per",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic 80S Ribosomes synthesizing NLS-tagged nuclear proteins (Scenario 32) + Nuclear Pol I/II/III & Spliceosome produci",
    "coupling": "Inputs: Cytoplasmic NLS-tagged proteins (Histones, Transcription F ➔ Outputs: Accumulated nuclear proteome inside the nucleoplasm (up to",
    "downstream": "Supplies the Nucleus (Scenario 26), Chromatin (Scenario 28), Replisome (Scenario 29), and Pol II/Spliceosome (Scenarios 30–31",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~500–1,000 macromolecular cargo translocatio"
      ],
      [
        "ENERGY CURRENCY",
        "1 GTP hydrolyzed per RanGTP/RanGDP transport"
      ],
      [
        "BIOPHYSICAL SCALE",
        "120 nm Diameter, 120 MDa Octagonal Symmetric"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7R5K & 1IBR"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Karyopherins (Importins & Exportins)",
        "url": "https://pdb101.rcsb.org/motm/85"
      },
      {
        "title": "RCSB PDB Structure 7R5K — Cryo-EM Structure of the Human Nuclear Pore Complex",
        "url": "https://www.rcsb.org/structure/7R5K"
      },
      {
        "title": "RCSB PDB Structure 1IBR — Complex of Importin-β with RanGTP",
        "url": "https://www.rcsb.org/structure/1IBR"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: The Transport of Molecules Between the Nucleus and the Cytosol",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26932/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_NPC_CytoplasmicRing",
        "name": "Cytoplasmic Outer Ring",
        "badge": "CYTOPL",
        "color": "#0077B6",
        "desc": "Cytoplasmic Outer Ring (Y-Complexes) & 8 Nup358/RanBP2 Filaments. Structural source: 7R5K Cytoplasmic Ring. Color taxonomy: Cytoplasmic Ring Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.2,
          0.0
        ]
      },
      {
        "meshName": "Piece_NPC_InnerSpokeRing",
        "name": "Inner Spoke Ring Core & Transmem…",
        "badge": "INNERS",
        "color": "#00B4D8",
        "desc": "Inner Spoke Ring Core & Transmembrane Pore Membrane Anchors (Ndc1/Pom121). Structural source: 7R5K Inner Ring. Color taxonomy: Inner Spoke Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_NPC_NuclearBasket",
        "name": "Nuclear Outer Ring & 8-Filament…",
        "badge": "NUCLEA",
        "color": "#7209B7",
        "desc": "Nuclear Outer Ring & 8-Filament Nuclear Basket (Nup153 / TPR). Structural source: 7R5K Nuclear Ring & Basket. Color taxonomy: Nuclear Basket Purple (#7209B7).",
        "dissocVector": [
          0.0,
          -4.2,
          0.0
        ]
      },
      {
        "meshName": "Piece_NPC_FGHydrogel",
        "name": "Central Channel FG-Repeat Phase-…",
        "badge": "FGHYDR",
        "color": "#FFB703",
        "desc": "Central Channel FG-Repeat Phase-Separated Selective Hydrogel (Nup98/Nup62). Structural source: FG-Repeat Intrinsically Disordered Mesh. Color taxonomy: FG-Hydrogel Gold (#FFB703).",
        "dissocVector": [
          0.0,
          0.0,
          2.2
        ]
      },
      {
        "meshName": "Piece_NPC_ImportinRanGTP",
        "name": "Importin-α/β Cargo Complex, Expo…",
        "badge": "IMPORT",
        "color": "#E63946",
        "desc": "Importin-α/β Cargo Complex, Exportin-1 (CRM1) & RanGTP/RanGDP Switch. Structural source: 1IBR Importin-β–RanGTP Complex. Color taxonomy: Karyopherin Crimson (#E63946).",
        "dissocVector": [
          4.2,
          0.5,
          2.0
        ]
      },
      {
        "meshName": "Piece_NPC_PoreMembrane",
        "name": "Curved Nuclear Envelope Pore Fus…",
        "badge": "POREME",
        "color": "#06D6A0",
        "desc": "Curved Nuclear Envelope Pore Fusion Membrane (ONM–INM Junction). Structural source: Nuclear Envelope Pore Bilayer. Color taxonomy: Pore Membrane Jade (#06D6A0).",
        "dissocVector": [
          -4.5,
          0.0,
          -2.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Cytoplasmic Cargo Recognition (NLS & Importin-α/β)",
        "desc": "In the cytosol (where RanGTP is absent), Importin-α recognizes the basic Nuclear Localization Si...",
        "spoken": "Stage 1 — Cytoplasmic Cargo Recognition (NLS & Importin-α/β). In the cytosol (where RanGTP is absent), Importin-α recognizes the basic Nuclear Localization Signal (NLS) on a newly synthesized histone or transcription factor and recruits Importin-β.",
        "color": "#0077B6",
        "targetPiece": "Piece_NPC_CytoplasmicRing"
      },
      {
        "step": 2,
        "title": "2 : Hydrophobic Partitioning Through the FG-Repeat Hydrogel",
        "desc": "Surface hydrophobic grooves on Importin-β transiently bind and dissolve the Phenylalanine-Glycin...",
        "spoken": "Stage 2 — Hydrophobic Partitioning Through the FG-Repeat Hydrogel. Surface hydrophobic grooves on Importin-β transiently bind and dissolve the Phenylalanine-Glycine (FG) repeat meshwork of Nup98 and Nup62, gliding through the 50 nm pore in <5 milliseconds.",
        "color": "#00B4D8",
        "targetPiece": "Piece_NPC_InnerSpokeRing"
      },
      {
        "step": 3,
        "title": "3 : Nuclear Basket Exit & RanGTP-Triggered Cargo Release",
        "desc": "Inside the nucleus, chromatin-bound RCC1 (RanGEF) maintains high [RanGTP]; RanGTP binds the N-te...",
        "spoken": "Stage 3 — Nuclear Basket Exit & RanGTP-Triggered Cargo Release. Inside the nucleus, chromatin-bound RCC1 (RanGEF) maintains high [RanGTP]; RanGTP binds the N-terminal arch of Importin-β, inducing a conformational switch that releases the cargo into the nucleoplasm.",
        "color": "#7209B7",
        "targetPiece": "Piece_NPC_NuclearBasket"
      },
      {
        "step": 4,
        "title": "4 : Ternary Export Complex Assembly (Exportin-1 / CRM1 + RanGTP)",
        "desc": "Simultaneously, nuclear Exportin-1 (CRM1) cooperatively binds both RanGTP and a Leucine-rich Nuc...",
        "spoken": "Stage 4 — Ternary Export Complex Assembly (Exportin-1 / CRM1 + RanGTP). Simultaneously, nuclear Exportin-1 (CRM1) cooperatively binds both RanGTP and a Leucine-rich Nuclear Export Signal (NES) cargo (or pre-ribosomal subunit) and traverses the FG-channel outward.",
        "color": "#FFB703",
        "targetPiece": "Piece_NPC_FGHydrogel"
      },
      {
        "step": 5,
        "title": "5 : Cytoplasmic RanGAP1 Hydrolysis & NTF2 Recycling",
        "desc": "At the cytoplasmic Nup358/RanBP2 filaments, RanGAP1 triggers GTP hydrolysis (RanGTP → RanGDP + P...",
        "spoken": "Stage 5 — Cytoplasmic RanGAP1 Hydrolysis & NTF2 Recycling. At the cytoplasmic Nup358/RanBP2 filaments, RanGAP1 triggers GTP hydrolysis (RanGTP → RanGDP + Pᵢ), releasing the exported cargo in the cytosol while NTF2 ferries RanGDP back into the nucleus.",
        "color": "#E63946",
        "targetPiece": "Piece_NPC_ImportinRanGTP"
      }
    ]
  },
  "chromatin_nucleosome_cohesin_rings": {
    "num": "28",
    "id": "chromatin_nucleosome_cohesin_rings",
    "folder": "28_chromatin_nucleosome_cohesin_rings",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "CHROMATIN ARCHITECTURE: NUCLEOSOME HISTONE OCTAMER, EPIGENETIC TAILS, CTCF & COHESIN/CONDENSIN LOOP-EXTRUSION RINGS",
    "subtitle": "Two meters of human genomic DNA (~6.4 billion base pairs) must be compacted 10,000-fold into a 6 µm nucleus while remaining dynamically accessible for transcription and r...",
    "analogy": "Renders the atomic Nucleosome Core Particle (147 bp DNA wrapped 1.67 turns around the H2A/H2B/H3/H4 octamer with protruding N-terminal epigenetic tails and Linker Histone H1) nested within an actively extruding SMC Cohesin ring (SMC1/SMC3/RAD21) halted at convergent CTCF insulator motifs.",
    "scaleTag": "EUKARYOTE SCENARIO 28 • 11 NM NUCLEOSOME CORE PARTICLE & 40 NM SMC COHESIN LOOP-EXTRUSION RING • PDB: 1AOI / 6WG3",
    "glb": "/eukaryote/models/chromatin_nucleosome_cohesin_rings.glb",
    "pdb": "1AOI, 6WG3",
    "pronounce": "[chromatin-nucleosome-cohesin-rings]",
    "sliderLabel": "EPIGENETIC HISTONE TAIL CODE (HAT ACETYLATION VS. HDAC/PRC2 METHYLATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ SWI/SNF (BAF) ATP-Depe",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ SMC Cohesin & SWI/SN",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nuclear import of newly synthesized Histones & SMC subunits via NPC (Scenario 27) + Mitochondrial/Cytosolic Acetyl-CoA (Scena",
    "coupling": "Inputs: Genomic Double-Stranded B-DNA (147 bp core + ~20–60 bp lin ➔ Outputs: Topologically Associating Domains (TADs) & Enhancer–Promot",
    "downstream": "Directly controls promoter accessibility and enhancer-promoter looping for RNA Polymerase II & Mediator (Scenario 30) and rep",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Cohesin extrudes DNA loops at ~0.5–1.5 kb/se"
      ],
      [
        "ENERGY CURRENCY",
        "SMC Cohesin & SWI/SNF ATPase Hydrolysis + Me"
      ],
      [
        "BIOPHYSICAL SCALE",
        "11 nm Nucleosome Core Particle & 40 nm SMC C"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1AOI & 6WG3"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Nucleosome",
        "url": "https://pdb101.rcsb.org/motm/7"
      },
      {
        "title": "RCSB PDB Structure 1AOI — 2.8 Å Crystal Structure of the Nucleosome Core Particle",
        "url": "https://www.rcsb.org/structure/1AOI"
      },
      {
        "title": "RCSB PDB Structure 6WG3 — Human Cohesin–NIPBL–DNA Loop-Extrusion Complex",
        "url": "https://www.rcsb.org/structure/6WG3"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Chromosomal DNA and Its Packaging in the Chromatin Fiber",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26834/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Chrom_NucleosomeDNA",
        "name": "147 bp Superhelical B-DNA Gyres",
        "badge": "NUCLEO",
        "color": "#0077B6",
        "desc": "147 bp Superhelical B-DNA Gyres (1.67 Left-Handed Turns) & Linker DNA. Structural source: 1AOI Chains I, J. Color taxonomy: Superhelical DNA Blue (#0077B6).",
        "dissocVector": [
          0.0,
          0.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Chrom_HistoneOctamer",
        "name": "Histone Octamer Core",
        "badge": "HISTON",
        "color": "#06D6A0",
        "desc": "Histone Octamer Core: Central (H3–H4)₂ Tetramer & Two (H2A–H2B) Dimers. Structural source: 1AOI Chains A–H. Color taxonomy: Histone Octamer Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Chrom_EpigeneticTails",
        "name": "Protruding N-Terminal Histone Ta…",
        "badge": "EPIGEN",
        "color": "#FFB703",
        "desc": "Protruding N-Terminal Histone Tails (H3K27ac, H3K4me3, H3K9me3 Marks). Structural source: 1AOI Flexible N-Tails. Color taxonomy: Epigenetic Tail Gold (#FFB703).",
        "dissocVector": [
          2.8,
          2.2,
          2.0
        ]
      },
      {
        "meshName": "Piece_Chrom_LinkerH1",
        "name": "Linker Histone H1 Dyad Clamp & C…",
        "badge": "LINKER",
        "color": "#F77F00",
        "desc": "Linker Histone H1 Dyad Clamp & Chromatosome Stem. Structural source: 7K5X Linker Histone H1. Color taxonomy: Linker H1 Amber (#F77F00).",
        "dissocVector": [
          -2.8,
          -1.8,
          1.8
        ]
      },
      {
        "meshName": "Piece_Chrom_CohesinRing",
        "name": "Tripartite SMC Cohesin Loop-Extr…",
        "badge": "COHESI",
        "color": "#E63946",
        "desc": "Tripartite SMC Cohesin Loop-Extrusion Ring (SMC1–SMC3–RAD21–NIPBL). Structural source: 6WG3 Cohesin Complex. Color taxonomy: Cohesin Ring Crimson (#E63946).",
        "dissocVector": [
          0.0,
          4.5,
          -1.5
        ]
      },
      {
        "meshName": "Piece_Chrom_CTCFAnchor",
        "name": "Convergent CTCF 11-Zinc-Finger B…",
        "badge": "CTCFAN",
        "color": "#7209B7",
        "desc": "Convergent CTCF 11-Zinc-Finger Boundary Insulator Dimers. Structural source: 5YEF CTCF Zinc Fingers. Color taxonomy: CTCF Insulator Purple (#7209B7).",
        "dissocVector": [
          0.0,
          -4.5,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Histone Octamer Assembly & 147 bp Superhelical Wrapping",
        "desc": "Four core histone dimers—an (H3–H4)₂ tetramer and two (H2A–H2B) dimers—assemble via histone-fold...",
        "spoken": "Stage 1 — Histone Octamer Assembly & 147 bp Superhelical Wrapping. Four core histone dimers—an (H3–H4)₂ tetramer and two (H2A–H2B) dimers—assemble via histone-fold handshakes, wrapping 147 bp of negatively charged DNA 1.67 left-handed turns via arginine minor-groove contacts.",
        "color": "#0077B6",
        "targetPiece": "Piece_Chrom_NucleosomeDNA"
      },
      {
        "step": 2,
        "title": "2 : Linker Histone H1 Sealing & Chromatin Clutch Compaction",
        "desc": "Globular Linker Histone H1 binds the nucleosome dyad axis where entry and exit DNA cross, zippin...",
        "spoken": "Stage 2 — Linker Histone H1 Sealing & Chromatin Clutch Compaction. Globular Linker Histone H1 binds the nucleosome dyad axis where entry and exit DNA cross, zipping 10 nm 'beads-on-a-string' arrays into compact zig-zag 30 nm chromatin clutches.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Chrom_HistoneOctamer"
      },
      {
        "step": 3,
        "title": "3 : The Epigenetic Histone Code (HATs, HDACs, Readers & Erasers)",
        "desc": "Watch HAT enzymes use Acetyl-CoA to acetylate H3/H4 lysine tails—neutralizing their positive cha...",
        "spoken": "Stage 3 — The Epigenetic Histone Code (HATs, HDACs, Readers & Erasers). Watch HAT enzymes use Acetyl-CoA to acetylate H3/H4 lysine tails—neutralizing their positive charge to loosen DNA—or HMTs/HDACs install H3K9me3/H3K27me3 marks to recruit HP1 and silence genes.",
        "color": "#FFB703",
        "targetPiece": "Piece_Chrom_EpigeneticTails"
      },
      {
        "step": 4,
        "title": "4 : SMC Cohesin Ring Loading & Active DNA Loop Extrusion",
        "desc": "The giant 40 nm tripartite Cohesin ring (SMC1, SMC3, kleisin RAD21, and loader NIPBL) clamps ont...",
        "spoken": "Stage 4 — SMC Cohesin Ring Loading & Active DNA Loop Extrusion. The giant 40 nm tripartite Cohesin ring (SMC1, SMC3, kleisin RAD21, and loader NIPBL) clamps onto chromatin and hydrolyzes ATP to reel DNA symmetrically into a growing topological loop at ~1 kb/sec.",
        "color": "#F77F00",
        "targetPiece": "Piece_Chrom_LinkerH1"
      },
      {
        "step": 5,
        "title": "5 : Convergent CTCF Boundary Arrest & Enhancer–Promoter TADs",
        "desc": "Loop extrusion continues until both faces of Cohesin collide with N-termini of convergently orie...",
        "spoken": "Stage 5 — Convergent CTCF Boundary Arrest & Enhancer–Promoter TADs. Loop extrusion continues until both faces of Cohesin collide with N-termini of convergently oriented CTCF 11-zinc-finger insulators, locking in a Topologically Associating Domain (TAD) that pairs an enhancer with its target promoter.",
        "color": "#E63946",
        "targetPiece": "Piece_Chrom_CohesinRing"
      }
    ]
  },
  "eukaryotic_replisome_cmg_pcna": {
    "num": "29",
    "id": "eukaryotic_replisome_cmg_pcna",
    "folder": "29_eukaryotic_replisome_cmg_pcna",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE EUKARYOTIC REPLISOME: CMG HELICASE (CDC45–MCM2-7–GINS), POL Ε/Δ/Α, RFC & HOMOTRIMERIC PCNA SLIDING CLAMP RINGS",
    "subtitle": "To duplicate 6.4 billion base pairs during S-phase in just ~8 hours, eukaryotic cells fire ~30,000–50,000 replication origins licensed in G1 by the Origin Recognition Com...",
    "analogy": "Visualizes the complete eukaryotic replication fork: the 11-subunit CMG helicase ring (Cdc45 + MCM2-7 hexamer + GINS) unwinding parental chromatin 3'→5' on the leading strand, coupled to Leading-Strand Pol ε, Ctf4 hub, Lagging-Strand Pol α–Primase, RFC clamp loader, glowing homotrimeric PCNA sliding clamp rings, Pol δ, FEN1, and DNA Ligase I.",
    "scaleTag": "EUKARYOTE SCENARIO 29 • 35 NM ASYMMETRIC REPLICATION FORK MACHINE & HOMOTRIMERIC PCNA CLAMP RINGS • PDB: 6UOM / 1PLQ",
    "glb": "/eukaryote/models/eukaryotic_replisome_cmg_pcna.glb",
    "pdb": "6UOM, 1PLQ",
    "pronounce": "[eukaryotic-replisome-cmg-pcna]",
    "sliderLabel": "CMG HELICASE UNWINDING & POL Ε/Δ SYNTHESIS RATE:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Pol ε / Pol δ 3'→5' Ex",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ dNTP Pyrophosphate H",
      "🛑 Energy Depleted"
    ],
    "upstream": "Chromatin nucleosome remodeling & ORC origin licensing (Scenario 28) + G1/S Cyclin-CDK phosphorylation + Nuclear dNTP/rNTP im",
    "coupling": "Inputs: Parental Double-Stranded Chromatin DNA (unwound ahead of t ➔ Outputs: Two identical, semiconservatively replicated Sister Chroma",
    "downstream": "Produces cohesed sister chromatids for G2 repair and Mitotic Spindle kinetochore segregation (Scenario 35) while epigenetic m",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "~30–50 bp/sec per eukaryotic fork (~2–3 kb/m"
      ],
      [
        "ENERGY CURRENCY",
        "dNTP Pyrophosphate Hydrolysis (ΔG°' ≈ -45 kJ"
      ],
      [
        "BIOPHYSICAL SCALE",
        "35 nm Asymmetric Replication Fork Machine & "
      ],
      [
        "PRIMARY RCSB PDBS",
        "6UOM & 1PLQ"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: DNA Polymerase & Sliding Clamps",
        "url": "https://pdb101.rcsb.org/motm/3"
      },
      {
        "title": "RCSB PDB Structure 6UOM — Human CMG Helicase on a Replication Fork",
        "url": "https://www.rcsb.org/structure/6UOM"
      },
      {
        "title": "RCSB PDB Structure 1PLQ — Eukaryotic PCNA Homotrimeric Sliding Clamp Ring",
        "url": "https://www.rcsb.org/structure/1PLQ"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: DNA Replication Mechanisms",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26850/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Rep_CMGHelicase",
        "name": "11-Subunit CMG Helicase Ring",
        "badge": "CMGHEL",
        "color": "#00B4D8",
        "desc": "11-Subunit CMG Helicase Ring (MCM2-7 AAA+ Hexamer + Cdc45 + GINS). Structural source: 6UOM CMG Helicase. Color taxonomy: CMG Helicase Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rep_PolEpsilon",
        "name": "Leading-Strand DNA Polymerase ε",
        "badge": "POLEPS",
        "color": "#06D6A0",
        "desc": "Leading-Strand DNA Polymerase ε (Pol2–Dpb2–Dpb3–Dpb4) Docked to CMG. Structural source: 6WJV CMG–Pol ε Complex. Color taxonomy: Pol ε Leading Jade (#06D6A0).",
        "dissocVector": [
          4.2,
          2.0,
          1.5
        ]
      },
      {
        "meshName": "Piece_Rep_PCNAClamps",
        "name": "Homotrimeric PCNA Sliding Clamp…",
        "badge": "PCNACL",
        "color": "#FFB703",
        "desc": "Homotrimeric PCNA Sliding Clamp Rings & Pentameric RFC Clamp Loader. Structural source: 1PLQ / 1SXJ RFC–PCNA Complex. Color taxonomy: PCNA Clamp Ring Gold (#FFB703).",
        "dissocVector": [
          2.5,
          -2.5,
          2.2
        ]
      },
      {
        "meshName": "Piece_Rep_PolAlphaPrimase",
        "name": "Ctf4 Trimer Hub & DNA Polymerase…",
        "badge": "POLALP",
        "color": "#F77F00",
        "desc": "Ctf4 Trimer Hub & DNA Polymerase α–Primase (RNA-DNA Initiator). Structural source: 5EXR Pol α–Primase. Color taxonomy: Primase Amber (#F77F00).",
        "dissocVector": [
          -4.0,
          -1.5,
          1.8
        ]
      },
      {
        "meshName": "Piece_Rep_PolDeltaLigase",
        "name": "Lagging-Strand DNA Polymerase δ,…",
        "badge": "POLDEL",
        "color": "#E63946",
        "desc": "Lagging-Strand DNA Polymerase δ, RPA, FEN1 Flap Endonuclease & Ligase I. Structural source: 6TNY Pol δ–PCNA–FEN1 Toolbelt. Color taxonomy: Pol δ Lagging Crimson (#E63946).",
        "dissocVector": [
          -2.5,
          -4.2,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rep_ForkDNA_FACT",
        "name": "Replication Fork DNA Junction &…",
        "badge": "FACT",
        "color": "#0077B6",
        "desc": "Replication Fork DNA Junction & FACT/CAF-1 Histone Chaperone Shuttle. Structural source: Replication Fork DNA + Histones. Color taxonomy: Fork DNA Marine Blue (#0077B6).",
        "dissocVector": [
          0.0,
          4.2,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : CMG Helicase 3'→5' Leading-Strand Translocation",
        "desc": "The 11-subunit CMG ring (MCM2-7 hexamer stabilized by Cdc45 and GINS) encircles the leading-stra...",
        "spoken": "Stage 1 — CMG Helicase 3'→5' Leading-Strand Translocation. The 11-subunit CMG ring (MCM2-7 hexamer stabilized by Cdc45 and GINS) encircles the leading-strand template, hydrolyzing ATP around its AAA+ staircase to split parental dsDNA while FACT evicts nucleosomes ahead.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Rep_CMGHelicase"
      },
      {
        "step": 2,
        "title": "2 : Continuous Leading-Strand Synthesis by Pol ε",
        "desc": "Tethered directly to the C-terminal motor tier of CMG and encircled by a homotrimeric PCNA ring,...",
        "spoken": "Stage 2 — Continuous Leading-Strand Synthesis by Pol ε. Tethered directly to the C-terminal motor tier of CMG and encircled by a homotrimeric PCNA ring, DNA Polymerase ε continuously synthesizes the leading strand in the 5'→3' direction.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Rep_PolEpsilon"
      },
      {
        "step": 3,
        "title": "3 : RPA Coating & Pol α–Primase RNA-DNA Initiation",
        "desc": "As single-stranded lagging template loops out coated by RPA, the Ctf4-tethered Pol α–Primase syn...",
        "spoken": "Stage 3 — RPA Coating & Pol α–Primase RNA-DNA Initiation. As single-stranded lagging template loops out coated by RPA, the Ctf4-tethered Pol α–Primase synthesizes a ~10 nt RNA primer and extends it by ~20 nt of DNA before handing off.",
        "color": "#FFB703",
        "targetPiece": "Piece_Rep_PCNAClamps"
      },
      {
        "step": 4,
        "title": "4 : RFC Clamp Loading & Pol δ Okazaki Fragment Extension",
        "desc": "Pentameric RFC binds the 3'-OH primer junction, uses ATP to snap a homotrimeric PCNA sliding cla...",
        "spoken": "Stage 4 — RFC Clamp Loading & Pol δ Okazaki Fragment Extension. Pentameric RFC binds the 3'-OH primer junction, uses ATP to snap a homotrimeric PCNA sliding clamp ring around the DNA, and recruits high-fidelity Pol δ to synthesize a ~180 nt Okazaki fragment.",
        "color": "#F77F00",
        "targetPiece": "Piece_Rep_PolAlphaPrimase"
      },
      {
        "step": 5,
        "title": "5 : PCNA Toolbelt Maturation (FEN1 + Ligase I) & Chromatin Assembly",
        "desc": "When Pol δ collides with the previous Okazaki fragment, it displaces the 5' RNA primer into a fl...",
        "spoken": "Stage 5 — PCNA Toolbelt Maturation (FEN1 + Ligase I) & Chromatin Assembly. When Pol δ collides with the previous Okazaki fragment, it displaces the 5' RNA primer into a flap cleaved by PCNA-bound FEN1, DNA Ligase I seals the nick, and CAF-1 deposits (H3–H4)₂ tetramers immediately behind the fork.",
        "color": "#E63946",
        "targetPiece": "Piece_Rep_PolDeltaLigase"
      }
    ]
  },
  "pol_ii_mediator_preinitiation": {
    "num": "30",
    "id": "pol_ii_mediator_preinitiation",
    "folder": "30_pol_ii_mediator_preinitiation",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "TRANSCRIPTION FACTORY: RNA POLYMERASE II, 26-SUBUNIT MEDIATOR BRIDGE, TFIID/TFIIH PRE-INITIATION COMPLEX & 5'-CAPPING",
    "subtitle": "Unlike bacterial RNA Polymerase (which directly recognizes -35/-10 promoters via a single σ-factor), eukaryotic RNA Polymerase II (a 12-subunit, 550 kDa enzyme that trans...",
    "analogy": "Renders the ~4 MDa human Mediator–PIC supercomplex assembled on a looped enhancer–promoter junction: shows TBP kinking the TATA box by 80°, TFIIB/E/F positioning the 12-subunit RNA Pol II, TFIIH (XPB translocase melting the transcription bubble + CDK7 kinase phosphorylating the Rpb1 CTD heptad tail), the 26-subunit Mediator bridge to enhancer TFs, and co-transcriptional m⁷G 5'-capping.",
    "scaleTag": "EUKARYOTE SCENARIO 30 • 40 NM, ~4 MDA MEDIATOR–RNA POL II PRE-INITIATION SUPERCOMPLEX (PIC) • PDB: 7LBM / 1YTB",
    "glb": "/eukaryote/models/pol_ii_mediator_preinitiation.glb",
    "pdb": "7LBM, 1YTB",
    "pronounce": "[pol-ii-mediator-preinitiation]",
    "sliderLabel": "RPB1 CTD HEPTAD TAIL PHOSPHORYLATION STATE (Y₁S₂P₃T₄S₅P₆S₇):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ α-Amanitin Death-Cap M",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ NTP Pyrophosphate Hy",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cohesin/CTCF enhancer–promoter chromatin looping & HAT nucleosome opening (Scenario 28) + Nuclear import of activated Transcr",
    "coupling": "Inputs: Open Euchromatic Core Promoter + Looped Enhancer DNA bound ➔ Outputs: 5'-m⁷G-Capped Nascent Pre-mRNA transcript emerging from th",
    "downstream": "Co-transcriptionally hands the emerging pre-mRNA directly to the Spliceosome (Scenario 31) for intron excision and to CPSF/PA",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Pol II elongation velocity ~30–70 nt/sec (~2"
      ],
      [
        "ENERGY CURRENCY",
        "NTP Pyrophosphate Hydrolysis + TFIIH XPB ATP"
      ],
      [
        "BIOPHYSICAL SCALE",
        "40 nm, ~4 MDa Mediator–RNA Pol II Pre-Initia"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7LBM & 1YTB"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: RNA Polymerase II & TATA-Binding Protein",
        "url": "https://pdb101.rcsb.org/motm/67"
      },
      {
        "title": "RCSB PDB Structure 7LBM — Human Mediator-Bound RNA Pol II Pre-Initiation Complex",
        "url": "https://www.rcsb.org/structure/7LBM"
      },
      {
        "title": "RCSB PDB Structure 1YTB — TATA-Box Binding Protein (TBP)–DNA Complex",
        "url": "https://www.rcsb.org/structure/1YTB"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: From DNA to RNA (Eukaryotic Transcription)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26887/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_PIC_RNAPolII",
        "name": "12-Subunit RNA Polymerase II Core",
        "badge": "RNAPOL",
        "color": "#06D6A0",
        "desc": "12-Subunit RNA Polymerase II Core (Rpb1–Rpb12 Active Cleft & Trigger Loop). Structural source: 7LBM RNA Pol II Core. Color taxonomy: Pol II Core Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_PIC_Mediator26",
        "name": "26-Subunit Mediator Coactivator…",
        "badge": "MEDIAT",
        "color": "#7209B7",
        "desc": "26-Subunit Mediator Coactivator Bridge (Head, Middle & Tail Modules). Structural source: 7LBM Mediator Complex. Color taxonomy: Mediator Bridge Purple (#7209B7).",
        "dissocVector": [
          0.0,
          4.2,
          -1.0
        ]
      },
      {
        "meshName": "Piece_PIC_TBP_TFIID",
        "name": "TFIID / TATA-Box Binding Protein",
        "badge": "TFIID",
        "color": "#FFB703",
        "desc": "TFIID / TATA-Box Binding Protein (TBP Saddle Bending DNA 80°) & TFIIA/B/F. Structural source: 1YTB / 7LBM TBP–TFIIB Saddle. Color taxonomy: TBP Saddle Gold (#FFB703).",
        "dissocVector": [
          -4.2,
          -1.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_PIC_TFIIH_HeliKin",
        "name": "10-Subunit TFIIH",
        "badge": "HELIKIN",
        "color": "#E63946",
        "desc": "10-Subunit TFIIH (XPB DNA Translocase + CDK7/Cyclin H CTD Kinase Module). Structural source: 7LBM TFIIH Core & CAK. Color taxonomy: TFIIH Helicase Crimson (#E63946).",
        "dissocVector": [
          4.2,
          -1.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_PIC_CTDTail_Cap",
        "name": "Rpb1 C-Terminal Domain",
        "badge": "CAP",
        "color": "#F77F00",
        "desc": "Rpb1 C-Terminal Domain (52 × YSPTSPS Heptads) & m⁷G 5'-Capping Enzyme. Structural source: 3J0K Capping Enzyme on Pol II. Color taxonomy: CTD & Capping Amber (#F77F00).",
        "dissocVector": [
          3.0,
          -3.8,
          2.0
        ]
      },
      {
        "meshName": "Piece_PIC_PromoterBubble",
        "name": "Enhancer–Promoter DNA Loop, Melt…",
        "badge": "PROMOT",
        "color": "#0077B6",
        "desc": "Enhancer–Promoter DNA Loop, Melted 13 bp Transcription Bubble & Pre-mRNA. Structural source: 7LBM Promoter DNA & RNA. Color taxonomy: Promoter DNA Blue (#0077B6).",
        "dissocVector": [
          -2.5,
          -3.8,
          -1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : TBP Saddle Binding & 80° TATA Promoter Kinking",
        "desc": "TFIID recognizes the core promoter; its saddle-shaped TBP subunit inserts two pairs of phenylala...",
        "spoken": "Stage 1 — TBP Saddle Binding & 80° TATA Promoter Kinking. TFIID recognizes the core promoter; its saddle-shaped TBP subunit inserts two pairs of phenylalanines into the DNA minor groove, bending the helix by 80° and recruiting TFIIA and TFIIB.",
        "color": "#06D6A0",
        "targetPiece": "Piece_PIC_RNAPolII"
      },
      {
        "step": 2,
        "title": "2 : Mediator Bridge Assembly & Pol II–TFIIF Docking",
        "desc": "Activator TFs on a looped enhancer bind the Tail module of the 26-subunit Mediator complex, whos...",
        "spoken": "Stage 2 — Mediator Bridge Assembly & Pol II–TFIIF Docking. Activator TFs on a looped enhancer bind the Tail module of the 26-subunit Mediator complex, whose Head and Middle modules cradle the 12-subunit RNA Pol II (with Unphosphorylated CTD) over the start site.",
        "color": "#7209B7",
        "targetPiece": "Piece_PIC_Mediator26"
      },
      {
        "step": 3,
        "title": "3 : TFIIH XPB DNA Pumping & Transcription Bubble Melting",
        "desc": "TFIIE recruits the 10-subunit TFIIH complex; its XPB translocase grips downstream DNA and pumps ...",
        "spoken": "Stage 3 — TFIIH XPB DNA Pumping & Transcription Bubble Melting. TFIIE recruits the 10-subunit TFIIH complex; its XPB translocase grips downstream DNA and pumps it backward into the Pol II cleft, torsionally melting an 11–15 bp open transcription bubble.",
        "color": "#FFB703",
        "targetPiece": "Piece_PIC_TBP_TFIID"
      },
      {
        "step": 4,
        "title": "4 : CDK7 Ser5-P Phosphorylation & Promoter Escape",
        "desc": "The CDK7 kinase module of TFIIH phosphorylates Ser5 across the 52 YSPTSPS repeats of the Rpb1 CT...",
        "spoken": "Stage 4 — CDK7 Ser5-P Phosphorylation & Promoter Escape. The CDK7 kinase module of TFIIH phosphorylates Ser5 across the 52 YSPTSPS repeats of the Rpb1 CTD tail, breaking Pol II's grip on Mediator and launching promoter escape.",
        "color": "#E63946",
        "targetPiece": "Piece_PIC_TFIIH_HeliKin"
      },
      {
        "step": 5,
        "title": "5 : Co-Transcriptional m⁷GpppN 5'-Capping & P-TEFb Elongation",
        "desc": "Once ~25 nt of pre-mRNA emerge, Ser5-P recruits the Capping Enzyme (RNA triphosphatase, guanylyl...",
        "spoken": "Stage 5 — Co-Transcriptional m⁷GpppN 5'-Capping & P-TEFb Elongation. Once ~25 nt of pre-mRNA emerge, Ser5-P recruits the Capping Enzyme (RNA triphosphatase, guanylyltransferase, and N7-methyltransferase) to add the protective 5'-m⁷G cap before P-TEFb (CDK9) phosphorylates Ser2-P for full-speed elongation.",
        "color": "#F77F00",
        "targetPiece": "Piece_PIC_CTDTail_Cap"
      }
    ]
  },
  "spliceosome_rna_lariat_rings": {
    "num": "31",
    "id": "spliceosome_rna_lariat_rings",
    "folder": "31_spliceosome_rna_lariat_rings",
    "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories",
    "title": "THE SPLICEOSOME (U1–U6 SNRNPS): INTRON EXCISION, RNA LARIAT RINGS, EXON LIGATION & EXON JUNCTION COMPLEX (EJC)",
    "subtitle": "Over 95% of human multi-exon pre-mRNAs contain non-coding Introns (often 10× longer than coding Exons) that must be excised with single-nucleotide precision by the Splice...",
    "analogy": "Renders the catalytic human Spliceosome (Prp8 cradle, U2/U6 snRNA catalytic Mg²⁺ active site, U5 loop holding Exon 1, and heptameric Sm rings) executing both transesterification steps: highlights the 2'-OH Branch-Point Adenosine attack that loops the intron into a glowing **2'-5' RNA Lariat Ring**, followed by Exon 1–Exon 2 ligation and EJC deposition.",
    "scaleTag": "EUKARYOTE SCENARIO 31 • 30 NM DYNAMIC METALLO-RIBOZYME MACHINE (~150 PROTEINS + 5 SNRNAS) & 2'-5' RNA LARIAT RING • PDB: 5Z56 / 2P89",
    "glb": "/eukaryote/models/spliceosome_rna_lariat_rings.glb",
    "pdb": "5Z56, 2P89",
    "pronounce": "[spliceosome-rna-lariat-rings]",
    "sliderLabel": "CATALYTIC TRANSESTERIFICATION STEP SELECTOR:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ DExD/H-Box RNA Helicas",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Transesterification ",
      "🛑 Energy Depleted"
    ],
    "upstream": "RNA Polymerase II elongating with Ser2-P CTD tail & 5'-m⁷G Capped pre-mRNA (Scenario 30) + SR proteins & hnRNPs defining exon",
    "coupling": "Inputs: 5'-m⁷G-Capped Pre-mRNA containing Exon 1 — [5'-GU Intron . ➔ Outputs: Mature Spliced mRNA (Exon 1–Exon 2 ligated) decorated with",
    "downstream": "Exports EJC-marked mature mRNAs through the Nuclear Pore Complex (Scenario 27) to Cytoplasmic 80S Ribosomes for pioneer trans",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Co-transcriptional intron removal in ~15–60 "
      ],
      [
        "ENERGY CURRENCY",
        "Transesterification is isoenergetic (2 phosp"
      ],
      [
        "BIOPHYSICAL SCALE",
        "30 nm Dynamic Metallo-Ribozyme Machine (~150"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5Z56 & 2P89"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Spliceosomes",
        "url": "https://pdb101.rcsb.org/motm/210"
      },
      {
        "title": "RCSB PDB Structure 5Z56 — Cryo-EM Structure of the Human Catalytic Step I Spliceosome",
        "url": "https://www.rcsb.org/structure/5Z56"
      },
      {
        "title": "RCSB PDB Structure 2P89 — Heptameric Sm Core Ring of Human Spliceosomal snRNPs",
        "url": "https://www.rcsb.org/structure/2P89"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: RNA Splicing & the Spliceosome",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26887/#_A1095_"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Splice_Prp8Core",
        "name": "Prp8 Master Scaffold Cradle & Ni…",
        "badge": "PRP8CO",
        "color": "#0077B6",
        "desc": "Prp8 Master Scaffold Cradle & NineTeen Complex (NTC). Structural source: 5Z56 Prp8 Core. Color taxonomy: Prp8 Cradle Blue (#0077B6).",
        "dissocVector": [
          0.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Splice_U2U6Ribozyme",
        "name": "U2/U6 snRNA Catalytic Ribozyme C…",
        "badge": "U2U6RI",
        "color": "#FFB703",
        "desc": "U2/U6 snRNA Catalytic Ribozyme Core & Two-Mg²⁺ Active Site (M1/M2). Structural source: 5Z56 U2/U6 snRNA Core. Color taxonomy: Catalytic Ribozyme Gold (#FFB703).",
        "dissocVector": [
          0.0,
          0.8,
          2.0
        ]
      },
      {
        "meshName": "Piece_Splice_SmRings",
        "name": "Heptameric Sm & LSm Protein Toro…",
        "badge": "SMRINGS",
        "color": "#7209B7",
        "desc": "Heptameric Sm & LSm Protein Toroidal Rings Encircling U1/U2/U5 snRNAs. Structural source: 2P89 / 5Z56 Sm Heptamer Rings. Color taxonomy: Sm Ring Royal Purple (#7209B7).",
        "dissocVector": [
          -4.2,
          2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Splice_IntronLariat",
        "name": "Excised 2'-5' Branched Intron RN…",
        "badge": "INTRON",
        "color": "#E63946",
        "desc": "Excised 2'-5' Branched Intron RNA Lariat Ring (Branch-Point Adenosine). Structural source: 5Z56 Intron Lariat Loop. Color taxonomy: RNA Lariat Ring Crimson (#E63946).",
        "dissocVector": [
          3.8,
          2.2,
          1.8
        ]
      },
      {
        "meshName": "Piece_Splice_Exons_EJC",
        "name": "Ligated 5'-Exon 1 & 3'-Exon 2 wi…",
        "badge": "EJC",
        "color": "#06D6A0",
        "desc": "Ligated 5'-Exon 1 & 3'-Exon 2 with Deposited Exon Junction Complex (EJC). Structural source: 5Z56 Exons & eIF4A3 EJC. Color taxonomy: Ligated Exon Jade (#06D6A0).",
        "dissocVector": [
          -2.5,
          -3.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Splice_HelicaseMotors",
        "name": "ATP-Dependent DExD/H-Box RNA Hel…",
        "badge": "HELICA",
        "color": "#F77F00",
        "desc": "ATP-Dependent DExD/H-Box RNA Helicases (Brr2, Prp2, Prp16, Prp22, Prp43). Structural source: 5Z56 Brr2 / Prp16 Helicases. Color taxonomy: Helicase Motor Amber (#F77F00).",
        "dissocVector": [
          3.5,
          -3.2,
          -1.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Splice Site Recognition (U1 at 5'-GU & U2 at Branch-Point A)",
        "desc": "As the intron emerges from RNA Pol II, U1 snRNP base-pairs with the 5' GU splice site while U2 s...",
        "spoken": "Stage 1 — Splice Site Recognition (U1 at 5'-GU & U2 at Branch-Point A). As the intron emerges from RNA Pol II, U1 snRNP base-pairs with the 5' GU splice site while U2 snRNP base-pairs with the branch site, extruding the reactive Branch-Point Adenosine (BPA) with its exposed 2'-OH.",
        "color": "#0077B6",
        "targetPiece": "Piece_Splice_Prp8Core"
      },
      {
        "step": 2,
        "title": "2 : Tri-snRNP Recruitment & Brr2 Helicase Activation (B → B*)",
        "desc": "The U4/U6.U5 tri-snRNP joins; Brr2 and Prp28 helicases hydrolyze ATP to unwind U4/U6 and eject U...",
        "spoken": "Stage 2 — Tri-snRNP Recruitment & Brr2 Helicase Activation (B → B*). The U4/U6.U5 tri-snRNP joins; Brr2 and Prp28 helicases hydrolyze ATP to unwind U4/U6 and eject U1/U4, allowing U6 snRNA to fold with U2 snRNA and position two catalytic Mg²⁺ ions (M1 and M2).",
        "color": "#FFB703",
        "targetPiece": "Piece_Splice_U2U6Ribozyme"
      },
      {
        "step": 3,
        "title": "3 : Step 1 Transesterification: 2'-5' RNA Lariat Ring Formation",
        "desc": "Activated by Mg²⁺ M2, the 2'-OH of the Branch-Point Adenosine attacks the 5' splice-site phospho...",
        "spoken": "Stage 3 — Step 1 Transesterification: 2'-5' RNA Lariat Ring Formation. Activated by Mg²⁺ M2, the 2'-OH of the Branch-Point Adenosine attacks the 5' splice-site phosphodiester bond, cleaving Exon 1 and looping the 5' end of the intron into a covalent **2'-5' Branched RNA Lariat Ring**.",
        "color": "#7209B7",
        "targetPiece": "Piece_Splice_SmRings"
      },
      {
        "step": 4,
        "title": "4 : Prp16 Remodeling & Step 2 Exon–Exon Ligation",
        "desc": "Prp16 ATPase remodels the C complex into C*; U5 snRNA Loop 1 aligns the freed 3'-OH of Exon 1 to...",
        "spoken": "Stage 4 — Prp16 Remodeling & Step 2 Exon–Exon Ligation. Prp16 ATPase remodels the C complex into C*; U5 snRNA Loop 1 aligns the freed 3'-OH of Exon 1 to attack the 3' AG splice site, ligating Exon 1 to Exon 2 into a continuous coding ORF.",
        "color": "#E63946",
        "targetPiece": "Piece_Splice_IntronLariat"
      },
      {
        "step": 5,
        "title": "5 : EJC Deposition, Prp22/Prp43 Release & Lariat Ring Debranching",
        "desc": "An Exon Junction Complex (EJC: eIF4A3, MAGOH, Y14) clamps 24 nt upstream of the splice junction ...",
        "spoken": "Stage 5 — EJC Deposition, Prp22/Prp43 Release & Lariat Ring Debranching. An Exon Junction Complex (EJC: eIF4A3, MAGOH, Y14) clamps 24 nt upstream of the splice junction for nuclear export, while Prp43 releases the Intron Lariat Ring to be debranched by DBR1 or matured into snoRNAs/circRNAs.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Splice_Exons_EJC"
      }
    ]
  },
  "eukaryotic_80s_ribosome_polyrna_loop": {
    "num": "32",
    "id": "eukaryotic_80s_ribosome_polyrna_loop",
    "folder": "32_eukaryotic_80s_ribosome_polyrna_loop",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "CYTOPLASMIC TRANSLATION: THE 80S RIBOSOME (60S + 40S) & CIRCULAR CLOSED-LOOP POLYSOME (M⁷G–EIF4E–EIF4G–PABP–POLYA)",
    "subtitle": "Whereas prokaryotic 70S ribosomes (2.5 MDa) initiate translation directly on nascent mRNAs via Shine–Dalgarno base-pairing, eukaryotic cytoplasmic translation uses a larg...",
    "analogy": "Renders the circularized **Closed-Loop Polysome Ring** in the cytosol: shows a full-length mRNA bent into a circle by the 5'-m⁷G Cap–eIF4E–eIF4G–PABP–3'-Poly(A) bridge, with 43S initiation complexes scanning the 5'-UTR, multiple 80S ribosomes (40S + 60S) translating in series with A/P/E-site tRNAs and glowing nascent polypeptides, and eRF1/eRF3/ABCE1 recycling subunits directly from the 3' stop codon back to the 5' cap.",
    "scaleTag": "EUKARYOTE SCENARIO 32 • 28 NM, 4.3 MDA 80S RIBOSOME & 150 NM CIRCULARIZED CLOSED-LOOP POLYSOME RING • PDB: 4V6X / 7QP6",
    "glb": "/eukaryote/models/eukaryotic_80s_ribosome_polyrna_loop.glb",
    "pdb": "4V6X, 7QP6",
    "pronounce": "[eukaryotic-80s-ribosome-polyrna-loop]",
    "sliderLabel": "EIF4E–EIF4G–PABP CIRCULAR MRNA CLOSED-LOOP STATE (MTORC1 / 4E-BP1 CONTROL):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ Pioneer Round Exon Jun",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ 1 ATP (tRNA charging",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nucleolar Pre-40S/60S subunit biogenesis (Scenario 26) + Spliceosome mRNA maturation (Scenario 31) + NPC nuclear export (Scen",
    "coupling": "Inputs: Exported Mature mRNA (with 5'-m⁷GpppN Cap, 5'-UTR, Coding  ➔ Outputs: Newly synthesized cytosolic, nuclear, mitochondrial/peroxi",
    "downstream": "Delivers nascent polypeptides to TRiC/CCT & Hsp70/Hsp90 chaperones (Scenario 34), Rough ER Sec61 (Scenario 13), Mitochondria ",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Eukaryotic 80S ribosome translates at ~5–9 a"
      ],
      [
        "ENERGY CURRENCY",
        "1 ATP (tRNA charging) + 2 GTP (eEF1A decodin"
      ],
      [
        "BIOPHYSICAL SCALE",
        "28 nm, 4.3 MDa 80S Ribosome & 150 nm Circula"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4V6X & 7QP6"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Eukaryotic Ribosomes & Initiation Factors",
        "url": "https://pdb101.rcsb.org/motm/121"
      },
      {
        "title": "RCSB PDB Structure 4V6X — High-Resolution Cryo-EM Structure of the Human 80S Ribosome",
        "url": "https://www.rcsb.org/structure/4V6X"
      },
      {
        "title": "RCSB PDB Structure 7QP6 — Human 48S Translation Initiation Complex",
        "url": "https://www.rcsb.org/structure/7QP6"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: From RNA to Protein (Eukaryotic Translation)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26829/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Rib80_60SLarge",
        "name": "60S Large Ribosomal Subunit",
        "badge": "60SLAR",
        "color": "#7209B7",
        "desc": "60S Large Ribosomal Subunit (28S, 5.8S, 5S rRNA + 47 RPLs & PTC). Structural source: 4V6X 60S Large Subunit. Color taxonomy: 60S Subunit Purple (#7209B7).",
        "dissocVector": [
          0.0,
          1.8,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rib80_40SSmall",
        "name": "40S Small Ribosomal Subunit",
        "badge": "40SSMA",
        "color": "#00B4D8",
        "desc": "40S Small Ribosomal Subunit (18S rRNA + 33 RPSs & Decoding Center). Structural source: 4V6X 40S Small Subunit. Color taxonomy: 40S Subunit Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          -1.8,
          1.0
        ]
      },
      {
        "meshName": "Piece_Rib80_ClosedLoop",
        "name": "Circular mRNA Closed-Loop Bridge",
        "badge": "CLOSED",
        "color": "#FFB703",
        "desc": "Circular mRNA Closed-Loop Bridge (5'-m⁷G Cap + eIF4E–eIF4G–PABP + 3'-PolyA). Structural source: 7QP6 eIF4F–PABP Cap-Tail Bridge. Color taxonomy: Closed-Loop Bridge Gold (#FFB703).",
        "dissocVector": [
          -4.5,
          0.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_Rib80_tRNAs_EFs",
        "name": "A/P/E-Site tRNAs, eEF1A-GTP Tern…",
        "badge": "EFS",
        "color": "#E63946",
        "desc": "A/P/E-Site tRNAs, eEF1A-GTP Ternary Complex & eEF2 Translocase. Structural source: 4V6X tRNAs & Elongation Factors. Color taxonomy: tRNA & eEF Crimson (#E63946).",
        "dissocVector": [
          2.2,
          0.0,
          2.2
        ]
      },
      {
        "meshName": "Piece_Rib80_PolysomeRing",
        "name": "Circularized Polysome mRNA Track…",
        "badge": "POLYSO",
        "color": "#0077B6",
        "desc": "Circularized Polysome mRNA Track & ABCE1 Termination/Recycling Splitter. Structural source: Polysome Closed-Loop mRNA. Color taxonomy: Polysome mRNA Blue (#0077B6).",
        "dissocVector": [
          4.2,
          -2.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Rib80_NascentChain",
        "name": "Emerging Nascent Polypeptide Cha…",
        "badge": "NASCEN",
        "color": "#06D6A0",
        "desc": "Emerging Nascent Polypeptide Chain & Co-Translational NAC/Hsp70 Chaperone. Structural source: Nascent Peptide Chain. Color taxonomy: Nascent Chain Jade (#06D6A0).",
        "dissocVector": [
          0.0,
          4.5,
          1.5
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : 5'-Cap to 3'-Poly(A) Circularization (The Closed-Loop mRNA Ring)",
        "desc": "eIF4E binds the 5' m⁷G cap, PABP coats the 3' Poly(A) tail, and the scaffold protein eIF4G bridg...",
        "spoken": "Stage 1 — 5'-Cap to 3'-Poly(A) Circularization (The Closed-Loop mRNA Ring). eIF4E binds the 5' m⁷G cap, PABP coats the 3' Poly(A) tail, and the scaffold protein eIF4G bridges them together, bending the mRNA into a topologically closed ring.",
        "color": "#7209B7",
        "targetPiece": "Piece_Rib80_60SLarge"
      },
      {
        "step": 2,
        "title": "2 : 43S Pre-Initiation Recruitment & eIF4A 5'-UTR Scanning",
        "desc": "Multi-subunit eIF3 recruits the 40S subunit (loaded with eIF2-GTP-Met-tRNAᵢᴹᵉᵗ) to the 5' cap; e...",
        "spoken": "Stage 2 — 43S Pre-Initiation Recruitment & eIF4A 5'-UTR Scanning. Multi-subunit eIF3 recruits the 40S subunit (loaded with eIF2-GTP-Met-tRNAᵢᴹᵉᵗ) to the 5' cap; eIF4A uses ATP to melt 5'-UTR secondary structure as the complex scans 5'→3' to the Kozak AUG start codon.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Rib80_40SSmall"
      },
      {
        "step": 3,
        "title": "3 : 60S Subunit Joining (eIF5B-GTP) & 80S Assembly",
        "desc": "Base-pairing of Met-tRNAᵢᴹᵉᵗ with AUG triggers eIF2 GTP hydrolysis and factor release, while eIF...",
        "spoken": "Stage 3 — 60S Subunit Joining (eIF5B-GTP) & 80S Assembly. Base-pairing of Met-tRNAᵢᴹᵉᵗ with AUG triggers eIF2 GTP hydrolysis and factor release, while eIF5B-GTP clamps the 60S Large Subunit onto the 40S to form the complete 80S ribosome with Met-tRNAᵢᴹᵉᵗ in the P-site.",
        "color": "#FFB703",
        "targetPiece": "Piece_Rib80_ClosedLoop"
      },
      {
        "step": 4,
        "title": "4 : Elongation Cycle (eEF1A Decoding, 28S PTC & eEF2 Translocation)",
        "desc": "eEF1A-GTP delivers cognate aminoacyl-tRNAs to the A-site; the 28S rRNA Peptidyl Transferase Cent...",
        "spoken": "Stage 4 — Elongation Cycle (eEF1A Decoding, 28S PTC & eEF2 Translocation). eEF1A-GTP delivers cognate aminoacyl-tRNAs to the A-site; the 28S rRNA Peptidyl Transferase Center (PTC) forms the peptide bond, and eEF2-GTP translocates the ribosome 3 nucleotides along the circular mRNA.",
        "color": "#E63946",
        "targetPiece": "Piece_Rib80_tRNAs_EFs"
      },
      {
        "step": 5,
        "title": "5 : Termination (eRF1/eRF3) & Closed-Loop Subunit Recycling (ABCE1)",
        "desc": "At the UAA/UAG/UGA stop codon, structural tRNA mimic eRF1 (delivered by eRF3-GTP) hydrolyzes the...",
        "spoken": "Stage 5 — Termination (eRF1/eRF3) & Closed-Loop Subunit Recycling (ABCE1). At the UAA/UAG/UGA stop codon, structural tRNA mimic eRF1 (delivered by eRF3-GTP) hydrolyzes the finished protein; the twin-ATPase ABCE1 splits the 80S into 40S and 60S subunits right next to the 5' cap for instant re-initiation.",
        "color": "#0077B6",
        "targetPiece": "Piece_Rib80_PolysomeRing"
      }
    ]
  },
  "risc_argonaute_dicer_rna_silencing": {
    "num": "33",
    "id": "risc_argonaute_dicer_rna_silencing",
    "folder": "33_risc_argonaute_dicer_rna_silencing",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "RNA INTERFERENCE (RNAI) & POST-TRANSCRIPTIONAL SILENCING: DICER MOLECULAR RULER, ARGONAUTE-2 (RISC) & GW182",
    "subtitle": "Whereas prokaryotes defend against foreign nucleic acids using DNA-targeting CRISPR-Cas systems, eukaryotes evolved RNA Interference (RNAi) and microRNA (miRNA) pathways ...",
    "analogy": "Visualizes the two-stage cytoplasmic RNAi pipeline: (1) L-shaped human Dicer–TRBP measuring 22 bp from the PAZ domain to its RNase III catalytic cleft to dice a pre-miRNA hairpin; (2) Bilobed Argonaute-2 (MID/PAZ/PIWI) displaying the 22 nt guide RNA seed region (nt 2–8), base-pairing with a target mRNA 3'-UTR to either slice it endonucleolytically or recruit GW182 and CCR4–NOT deadenylase to break the Closed-Loop Polysome.",
    "scaleTag": "EUKARYOTE SCENARIO 33 • 10–15 NM DICER ENDONUCLEASE RULER & ARGONAUTE-2 (AGO2) RISC SILENCING COMPLEX • PDB: 4W5N / 5ZAL",
    "glb": "/eukaryote/models/risc_argonaute_dicer_rna_silencing.glb",
    "pdb": "4W5N, 5ZAL",
    "pronounce": "[risc-argonaute-dicer-rna-silencing]",
    "sliderLabel": "GUIDE–TARGET BASE-PAIRING MODE (SIRNA SLICER VS. MIRNA DEADENYLATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ GW182 / P-Body Phase-S",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP used once during",
      "🛑 Energy Depleted"
    ],
    "upstream": "Nuclear Pol II pri-miRNA transcription (Scenario 30) + Drosha/DGCR8 cropping + Exportin-5/RanGTP nuclear export through NPC (",
    "coupling": "Inputs: Exported ~70 nt Pre-miRNA Hairpin (with 5'-monophosphate a ➔ Outputs: Mature 21–22 nt Guide RNA–Argonaute-2 (Holo-RISC) surveill",
    "downstream": "Directly throttles Cytoplasmic 80S Translation and breaks the Closed-Loop Polysome Ring (Scenario 32), routing silenced mRNAs",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Ago2 seed-scanning is diffusion-limited (~3×"
      ],
      [
        "ENERGY CURRENCY",
        "ATP used once during Hsp70/Hsp90-assisted du"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10–15 nm Dicer Endonuclease Ruler & Argonaut"
      ],
      [
        "PRIMARY RCSB PDBS",
        "4W5N & 5ZAL"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Argonaute & Dicer (RNA Interference)",
        "url": "https://pdb101.rcsb.org/motm/218"
      },
      {
        "title": "RCSB PDB Structure 4W5N — Human Argonaute-2 Bound to Guide and Target RNAs",
        "url": "https://www.rcsb.org/structure/4W5N"
      },
      {
        "title": "RCSB PDB Structure 5ZAL — Cryo-EM Structure of Human Dicer–TRBP–Pre-let-7 Complex",
        "url": "https://www.rcsb.org/structure/5ZAL"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Post-Transcriptional Controls & RNA Interference",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26896/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_RISC_DicerRuler",
        "name": "Human Dicer–TRBP Molecular Ruler",
        "badge": "DICERR",
        "color": "#00B4D8",
        "desc": "Human Dicer–TRBP Molecular Ruler (PAZ Cap, Platform & Twin RNase IIIa/b). Structural source: 5ZAL Dicer–TRBP Complex. Color taxonomy: Dicer Ruler Cerulean (#00B4D8).",
        "dissocVector": [
          -4.5,
          1.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_RISC_Ago2Bilobe",
        "name": "Argonaute-2",
        "badge": "AGO2BI",
        "color": "#7209B7",
        "desc": "Argonaute-2 (Ago2) Bilobed Core (N, PAZ, MID & Catalytic PIWI Slicer). Structural source: 4W5N Human Argonaute-2. Color taxonomy: Ago2 Core Purple (#7209B7).",
        "dissocVector": [
          1.0,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_RISC_GuideSeedRNA",
        "name": "22-nt Guide miRNA / siRNA Strand",
        "badge": "GUIDES",
        "color": "#FFB703",
        "desc": "22-nt Guide miRNA / siRNA Strand (5'-Phosphate in MID & Seed nt 2–8). Structural source: 4W5N Guide RNA Strand. Color taxonomy: Guide Seed RNA Gold (#FFB703).",
        "dissocVector": [
          1.0,
          0.8,
          2.0
        ]
      },
      {
        "meshName": "Piece_RISC_TargetmRNA",
        "name": "Target mRNA 3'-UTR Base-Paired i…",
        "badge": "TARGET",
        "color": "#0077B6",
        "desc": "Target mRNA 3'-UTR Base-Paired in the Ago2 Central Cleft. Structural source: 4W5N Target mRNA. Color taxonomy: Target mRNA Blue (#0077B6).",
        "dissocVector": [
          2.5,
          -1.5,
          1.8
        ]
      },
      {
        "meshName": "Piece_RISC_PreMiRNAHairpin",
        "name": "70-nt Pre-miRNA Stem-Loop Hairpi…",
        "badge": "PREMIR",
        "color": "#E63946",
        "desc": "70-nt Pre-miRNA Stem-Loop Hairpin Docked in Dicer PAZ/Helicase. Structural source: 5ZAL Pre-miRNA Hairpin. Color taxonomy: Pre-miRNA Hairpin Crimson (#E63946).",
        "dissocVector": [
          -4.5,
          -2.0,
          1.8
        ]
      },
      {
        "meshName": "Piece_RISC_GW182_CCR4",
        "name": "TNRC6 / GW182 Tryptophan-Hook Sc…",
        "badge": "CCR4",
        "color": "#06D6A0",
        "desc": "TNRC6 / GW182 Tryptophan-Hook Scaffold & CCR4–NOT Deadenylase Complex. Structural source: 6Y3Z GW182–CCR4–NOT Module. Color taxonomy: GW182 Deadenylase Jade (#06D6A0).",
        "dissocVector": [
          4.8,
          2.2,
          -1.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Pre-miRNA Export & Dicer PAZ Domain Anchoring",
        "desc": "Exported ~70 nt pre-miRNA hairpins are captured by Dicer–TRBP; the Dicer PAZ domain pockets the ...",
        "spoken": "Stage 1 — Pre-miRNA Export & Dicer PAZ Domain Anchoring. Exported ~70 nt pre-miRNA hairpins are captured by Dicer–TRBP; the Dicer PAZ domain pockets the 2-nt 3' overhang while a basic pocket secures the 5'-monophosphate.",
        "color": "#00B4D8",
        "targetPiece": "Piece_RISC_DicerRuler"
      },
      {
        "step": 2,
        "title": "2 : The 22-Base-Pair Molecular Ruler & RNase III Dicing",
        "desc": "Measuring exactly ~22 bp (~65 Å) along its flat protein ruler from the PAZ domain, Dicer's intra...",
        "spoken": "Stage 2 — The 22-Base-Pair Molecular Ruler & RNase III Dicing. Measuring exactly ~22 bp (~65 Å) along its flat protein ruler from the PAZ domain, Dicer's intramolecular RNase IIIa and IIIb dimer cleaves both RNA strands to release the terminal loop and a 22 bp duplex.",
        "color": "#7209B7",
        "targetPiece": "Piece_RISC_Ago2Bilobe"
      },
      {
        "step": 3,
        "title": "3 : Chaperone-Assisted Ago2 Loading & Passenger Ejection",
        "desc": "Hsp70/Hsp90 chaperones pry open bilobed Argonaute-2 (Ago2) to accept the 22 bp duplex; the stran...",
        "spoken": "Stage 3 — Chaperone-Assisted Ago2 Loading & Passenger Ejection. Hsp70/Hsp90 chaperones pry open bilobed Argonaute-2 (Ago2) to accept the 22 bp duplex; the strand with the less stable 5' end has its 5'-phosphate locked into the MID domain while the passenger strand is cleaved and ejected.",
        "color": "#FFB703",
        "targetPiece": "Piece_RISC_GuideSeedRNA"
      },
      {
        "step": 4,
        "title": "4 : Seed Region Pre-Organization & Target 3'-UTR Scanning",
        "desc": "Ago2 pre-organizes nucleotides 2–8 of the guide RNA into a solvent-exposed A-form helix ('Seed R...",
        "spoken": "Stage 4 — Seed Region Pre-Organization & Target 3'-UTR Scanning. Ago2 pre-organizes nucleotides 2–8 of the guide RNA into a solvent-exposed A-form helix ('Seed Region'), enabling rapid 1D/3D collision scanning along cytoplasmic mRNA 3'-UTRs.",
        "color": "#0077B6",
        "targetPiece": "Piece_RISC_TargetmRNA"
      },
      {
        "step": 5,
        "title": "5 : Slicer Endonuclease Cleavage vs. GW182/CCR4–NOT Deadenylation",
        "desc": "If base-pairing extends through nucleotides 10–11 (siRNA), the Ago2 PIWI domain Mg²⁺ triad slice...",
        "spoken": "Stage 5 — Slicer Endonuclease Cleavage vs. GW182/CCR4–NOT Deadenylation. If base-pairing extends through nucleotides 10–11 (siRNA), the Ago2 PIWI domain Mg²⁺ triad slices the mRNA in half; if pairing is restricted to the seed (typical animal miRNA), Ago2 recruits GW182 and CCR4–NOT to strip the Poly(A) tail and silence translation.",
        "color": "#E63946",
        "targetPiece": "Piece_RISC_PreMiRNAHairpin"
      }
    ]
  },
  "chaperonin_tric_26s_proteasome": {
    "num": "34",
    "id": "chaperonin_tric_26s_proteasome",
    "folder": "34_chaperonin_tric_26s_proteasome",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "EUKARYOTIC PROTEOSTASIS: TRIC/CCT CHAPERONIN FOLDING CAGE, E1–E2–E3 UBIQUITIN CASCADE & THE 26S PROTEASOME",
    "subtitle": "Eukaryotic proteostasis balances two giant barrel-shaped nanomachines that determine the life or death of every cytoplasmic protein: the **TRiC/CCT Chaperonin** (which fo...",
    "analogy": "Renders both eukaryotic proteostasis barrels side by side: (1) the 16-subunit TRiC/CCT hetero-octameric double ring closing its built-in iris lid around nascent Actin/Tubulin delivered by Prefoldin; (2) the E1–E2–E3 K48-polyubiquitination cascade feeding a doomed substrate into the 26S Proteasome (19S Rpn11 deubiquitinase + Rpt1–6 AAA+ unfoldase staircase + 20S α₇β₇β₇α₇ proteolytic barrel).",
    "scaleTag": "EUKARYOTE SCENARIO 34 • 16 NM TRIC/CCT DOUBLE-RING CAGE & 45 NM, 2.5 MDA 26S PROTEASOME MACHINE • PDB: 7LUM / 6MSB",
    "glb": "/eukaryote/models/chaperonin_tric_26s_proteasome.glb",
    "pdb": "7LUM, 6MSB",
    "pronounce": "[chaperonin-tric-26s-proteasome]",
    "sliderLabel": "PROTEOSTASIS PATHWAY FOCUS (TRIC FOLDING VS. UBIQUITIN–PROTEASOME DEGRADATION):",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ TRiC Iris Closure & 19",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ TRiC hydrolyzes ~8 A",
      "🛑 Energy Depleted"
    ],
    "upstream": "Cytoplasmic 80S Ribosome nascent polypeptides (Scenario 32) + ER-Associated Degradation (ERAD) retrotranslocation from Rough ",
    "coupling": "Inputs: For Folding: Unfolded nascent Actin, α/β-Tubulin, or WD40  ➔ Outputs: Natively folded Monomeric G-Actin (for Scenario 09) and α/",
    "downstream": "Folded Actin and Tubulin build the Cytoskeleton and Mitotic Spindle (Scenarios 08, 09, 35); proteasome-generated peptides fee",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "TRiC folding cycle ~30–60 sec; 26S Proteasom"
      ],
      [
        "ENERGY CURRENCY",
        "TRiC hydrolyzes ~8 ATP per iris closure cycl"
      ],
      [
        "BIOPHYSICAL SCALE",
        "16 nm TRiC/CCT Double-Ring Cage & 45 nm, 2.5"
      ],
      [
        "PRIMARY RCSB PDBS",
        "7LUM & 6MSB"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Proteasome & Ubiquitin",
        "url": "https://pdb101.rcsb.org/motm/166"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Chaperonins",
        "url": "https://pdb101.rcsb.org/motm/32"
      },
      {
        "title": "RCSB PDB Structure 7LUM — Human TRiC/CCT Chaperonin Folding Tubulin",
        "url": "https://www.rcsb.org/structure/7LUM"
      },
      {
        "title": "RCSB PDB Structure 6MSB — Substrate-Engaged Human 26S Proteasome Cryo-EM Structure",
        "url": "https://www.rcsb.org/structure/6MSB"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Prot_TRiC_CCT",
        "name": "16-Subunit TRiC/CCT Chaperonin B…",
        "badge": "CCT",
        "color": "#06D6A0",
        "desc": "16-Subunit TRiC/CCT Chaperonin Barrel (CCT1–8 Double Ring & Iris Lid). Structural source: 7LUM Human TRiC/CCT Complex. Color taxonomy: TRiC Chaperonin Jade (#06D6A0).",
        "dissocVector": [
          -4.8,
          0.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Prot_PrefoldinClient",
        "name": "Prefoldin Jellyfish Co-Chaperone…",
        "badge": "PREFOL",
        "color": "#00B4D8",
        "desc": "Prefoldin Jellyfish Co-Chaperone & Encapsulated Actin/Tubulin Client. Structural source: 7LUM Prefoldin & Tubulin. Color taxonomy: Prefoldin Client Cerulean (#00B4D8).",
        "dissocVector": [
          -4.8,
          3.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Prot_E1E2E3_UbChain",
        "name": "E1–E2–E3 Ubiquitin Ligase Cascad…",
        "badge": "UBCHAIN",
        "color": "#FFB703",
        "desc": "E1–E2–E3 Ubiquitin Ligase Cascade & K48-Linked Polyubiquitin Tag. Structural source: 1LDK / 6MSB K48-Ubiquitin Chain. Color taxonomy: Ubiquitin Tag Gold (#FFB703).",
        "dissocVector": [
          0.2,
          3.8,
          1.8
        ]
      },
      {
        "meshName": "Piece_Prot_19S_Lid_Rpn11",
        "name": "19S Regulatory Particle Lid",
        "badge": "RPN11",
        "color": "#7209B7",
        "desc": "19S Regulatory Particle Lid (Ubiquitin Receptors & Rpn11 Deubiquitinase). Structural source: 6MSB 19S Lid & Rpn11. Color taxonomy: 19S Lid Purple (#7209B7).",
        "dissocVector": [
          4.2,
          3.5,
          0.0
        ]
      },
      {
        "meshName": "Piece_Prot_19S_RptRing",
        "name": "19S Hexameric AAA+ Unfoldase Sta…",
        "badge": "RPTRING",
        "color": "#F77F00",
        "desc": "19S Hexameric AAA+ Unfoldase Staircase (Rpt1–Rpt6 Mechanical Puller). Structural source: 6MSB Rpt1–6 AAA+ Ring. Color taxonomy: Rpt AAA+ Unfoldase Amber (#F77F00).",
        "dissocVector": [
          4.2,
          0.8,
          1.2
        ]
      },
      {
        "meshName": "Piece_Prot_20S_CoreBarrel",
        "name": "20S Core Particle Barrel",
        "badge": "COREBA",
        "color": "#E63946",
        "desc": "20S Core Particle Barrel (α₇β₇β₇α₇ Rings with β1/β2/β5 Thr1 Active Sites). Structural source: 6MSB 20S Core Particle. Color taxonomy: 20S Proteolytic Crimson (#E63946).",
        "dissocVector": [
          4.2,
          -2.8,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Prefoldin Handoff & TRiC/CCT Subunit-Specific Recognition",
        "desc": "Jellyfish-shaped Prefoldin captures nascent Actin or Tubulin emerging from the 80S ribosome and ...",
        "spoken": "Stage 1 — Prefoldin Handoff & TRiC/CCT Subunit-Specific Recognition. Jellyfish-shaped Prefoldin captures nascent Actin or Tubulin emerging from the 80S ribosome and delivers it into the open chamber of the hetero-octameric TRiC (CCT1–CCT8) ring.",
        "color": "#06D6A0",
        "targetPiece": "Piece_Prot_TRiC_CCT"
      },
      {
        "step": 2,
        "title": "2 : ATP-Driven Iris Diaphragm Closure & Assisted Folding",
        "desc": "ATP binding across the 8 distinct CCT subunits twists their apical helical protrusions together ...",
        "spoken": "Stage 2 — ATP-Driven Iris Diaphragm Closure & Assisted Folding. ATP binding across the 8 distinct CCT subunits twists their apical helical protrusions together like a camera iris, sealing the chamber without a separate lid and guiding native folding before ADP + Pᵢ release re-opens the cage.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Prot_PrefoldinClient"
      },
      {
        "step": 3,
        "title": "3 : The E1–E2–E3 Ubiquitin Cascade (K48 Death Tagging)",
        "desc": "Terminally misfolded proteins or cell-cycle substrates are recognized by an E3 Ubiquitin Ligase,...",
        "spoken": "Stage 3 — The E1–E2–E3 Ubiquitin Cascade (K48 Death Tagging). Terminally misfolded proteins or cell-cycle substrates are recognized by an E3 Ubiquitin Ligase, which transfers activated Ubiquitin from E1 and E2 enzymes to build a Lys48-linked polyubiquitin chain (≥4 Ub units).",
        "color": "#FFB703",
        "targetPiece": "Piece_Prot_E1E2E3_UbChain"
      },
      {
        "step": 4,
        "title": "4 : 19S Ubiquitin Capture, Rpn11 Deubiquitination & Rpt1–6 Unfolding",
        "desc": "The 19S Regulatory Particle captures the K48-Ub chain via Rpn10/Rpn13; aromatic pore loops of th...",
        "spoken": "Stage 4 — 19S Ubiquitin Capture, Rpn11 Deubiquitination & Rpt1–6 Unfolding. The 19S Regulatory Particle captures the K48-Ub chain via Rpn10/Rpn13; aromatic pore loops of the Rpt1–Rpt6 AAA+ ATPase staircase grab an unstructured tail and pull the polypeptide inward while Rpn11 amputates and recycles the ubiquitin chain.",
        "color": "#7209B7",
        "targetPiece": "Piece_Prot_19S_Lid_Rpn11"
      },
      {
        "step": 5,
        "title": "5 : 20S α-Gate Opening & β1/β2/β5 Threonine-1 Proteolysis",
        "desc": "C-terminal HbYX tails of the Rpt ATPases unlock the 20S α-ring gate, threading the unfolded chai...",
        "spoken": "Stage 5 — 20S α-Gate Opening & β1/β2/β5 Threonine-1 Proteolysis. C-terminal HbYX tails of the Rpt ATPases unlock the 20S α-ring gate, threading the unfolded chain into the central β₇β₇ proteolytic chamber where N-terminal Threonine-1 nucleophiles on β1, β2, and β5 shred it into 7–9 residue peptides.",
        "color": "#F77F00",
        "targetPiece": "Piece_Prot_19S_RptRing"
      }
    ]
  },
  "mitotic_spindle_kinetochore_escrt": {
    "num": "35",
    "id": "mitotic_spindle_kinetochore_escrt",
    "folder": "35_mitotic_spindle_kinetochore_escrt",
    "tier": "Tier 7 — Cytoplasmic Translation, RNA Silencing, Proteostasis & Cell Division",
    "title": "EUKARYOTIC CELL DIVISION (MITOSIS & CYTOKINESIS): BIPOLAR CENTROSOME SPINDLE, NDC80 KINETOCHORE, APC/C & ESCRT-III ABSCISSION",
    "subtitle": "Whereas bacteria divide by binary fission using a single FtsZ ring, eukaryotic cells must partition 46 replicated sister chromatids with zero errors across a 10 µm **Bipo...",
    "analogy": "Visualizes the grand choreography of eukaryotic Mitosis and Cytokinesis: bipolar Centrosome spindle poles, CENP-A centromeric chromatin, the Ndc80/KMN Kinetochore gripping depolymerizing k-fiber microtubules, Mad2 Spindle Assembly Checkpoint signaling, APC/C–Separase cleavage of Cohesin rings at the Metaphase-to-Anaphase transition, and the Actomyosin Contractile Ring + ESCRT-III/VPS4 spiral severing the intercellular bridge.",
    "scaleTag": "EUKARYOTE SCENARIO 35 • 10 ΜM BIPOLAR MITOTIC SPINDLE, 80 NM KINETOCHORE COUPLER & ESCRT-III SPIRAL • PDB: 5TCS / 6VME",
    "glb": "/eukaryote/models/mitotic_spindle_kinetochore_escrt.glb",
    "pdb": "5TCS, 6VME",
    "pronounce": "[mitotic-spindle-kinetochore-escrt]",
    "sliderLabel": "MITOTIC & CYTOKINETIC STAGE PROGRESSION:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ K-Fiber Depolymerizati",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ Microtubule GTP Cap ",
      "🛑 Energy Depleted"
    ],
    "upstream": "S-Phase Replisome DNA duplication & Cohesin sister chromatid cohesion (Scenarios 28–29) + Centrosome duplication & Microtubul",
    "coupling": "Inputs: Replicated, Cohesin-tethered Sister Chromatids with centro ➔ Outputs: Two genetically identical diploid (2n) daughter nuclei wit",
    "downstream": "Completes the eukaryotic cell cycle, resetting both daughter cells into G1 Interphase (Scenario 01 & Scenario 26).",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "Human mitosis completes in ~45–60 minutes; A"
      ],
      [
        "ENERGY CURRENCY",
        "Microtubule GTP Cap Strain Energy (~30–50 pN"
      ],
      [
        "BIOPHYSICAL SCALE",
        "10 µm Bipolar Mitotic Spindle, 80 nm Kinetoc"
      ],
      [
        "PRIMARY RCSB PDBS",
        "5TCS & 6VME"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Kinetochore & Centromere",
        "url": "https://pdb101.rcsb.org/motm/220"
      },
      {
        "title": "RCSB PDB Structure 5TCS — Human Centromeric CENP-A Nucleosome Complex",
        "url": "https://www.rcsb.org/structure/5TCS"
      },
      {
        "title": "RCSB PDB Structure 6VME — Cryo-EM Structure of ESCRT-III Helical Filaments with VPS4",
        "url": "https://www.rcsb.org/structure/6VME"
      },
      {
        "title": "NCBI Bookshelf — Molecular Biology of the Cell: Mitosis & Cytokinesis",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK26934/"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Mit_SpindlePoles",
        "name": "Bipolar Centrosome Spindle Poles…",
        "badge": "SPINDL",
        "color": "#00B4D8",
        "desc": "Bipolar Centrosome Spindle Poles, k-Fiber Microtubules & Kinesin-5 (Eg5). Structural source: Bipolar Mitotic Spindle. Color taxonomy: Spindle Microtubule Cerulean (#00B4D8).",
        "dissocVector": [
          -4.8,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Mit_ChromatidsCENPA",
        "name": "Condensed Sister Chromatids, Cen…",
        "badge": "CHROMA",
        "color": "#0077B6",
        "desc": "Condensed Sister Chromatids, Centromeric CENP-A Nucleosome & Cohesin Ring. Structural source: 5TCS CENP-A Nucleosome & Chromatid. Color taxonomy: Sister Chromatid Blue (#0077B6).",
        "dissocVector": [
          1.2,
          0.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Mit_KinetochoreNdc80",
        "name": "Inner CCAN & Outer Kinetochore K…",
        "badge": "KINETO",
        "color": "#FFB703",
        "desc": "Inner CCAN & Outer Kinetochore KMN Network (57 nm Ndc80/Hec1 Rod & Ska). Structural source: 5TCS / 2VE7 Ndc80 Kinetochore. Color taxonomy: Ndc80 Kinetochore Gold (#FFB703).",
        "dissocVector": [
          -1.5,
          1.5,
          1.8
        ]
      },
      {
        "meshName": "Piece_Mit_SAC_APCC_Separase",
        "name": "Mad2 Spindle Checkpoint",
        "badge": "SEPARA",
        "color": "#E63946",
        "desc": "Mad2 Spindle Checkpoint (MCC), APC/C–Cdc20 E3 Ligase & Separase Protease. Structural source: 5LCW APC/C–MCC Complex. Color taxonomy: SAC & Separase Crimson (#E63946).",
        "dissocVector": [
          1.5,
          3.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Mit_ActomyosinRing",
        "name": "Equatorial RhoA-Activated Actomy…",
        "badge": "ACTOMY",
        "color": "#7209B7",
        "desc": "Equatorial RhoA-Activated Actomyosin II Cytokinetic Contractile Ring. Structural source: Actomyosin Cleavage Furrow Ring. Color taxonomy: Contractile Ring Purple (#7209B7).",
        "dissocVector": [
          4.5,
          2.0,
          -1.0
        ]
      },
      {
        "meshName": "Piece_Mit_ESCRTIII_VPS4",
        "name": "Midbody ESCRT-III",
        "badge": "VPS4",
        "color": "#06D6A0",
        "desc": "Midbody ESCRT-III (CHMP4B) Constriction Spiral & VPS4 AAA+ Severing Ring. Structural source: 6VME ESCRT-III–VPS4 Complex. Color taxonomy: ESCRT-III Abscission Jade (#06D6A0).",
        "dissocVector": [
          4.5,
          -2.5,
          1.2
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Prophase Condensation, Nuclear Envelope Breakdown & Spindle Assembly",
        "desc": "CDK1–Cyclin B phosphorylates Nuclear Lamins to dissolve the nuclear envelope, Condensin compacts...",
        "spoken": "Stage 1 — Prophase Condensation, Nuclear Envelope Breakdown & Spindle Assembly. CDK1–Cyclin B phosphorylates Nuclear Lamins to dissolve the nuclear envelope, Condensin compacts chromosomes, and two Centrosomes push apart via Kinesin-5 (Eg5) to form a bipolar microtubule spindle.",
        "color": "#00B4D8",
        "targetPiece": "Piece_Mit_SpindlePoles"
      },
      {
        "step": 2,
        "title": "2 : Kinetochore Capture (CENP-A → CCAN → Ndc80) & Aurora B Tension Sensing",
        "desc": "Built on centromeric CENP-A nucleosomes, the 57 nm Ndc80/Hec1 rod of the Outer Kinetochore captu...",
        "spoken": "Stage 2 — Kinetochore Capture (CENP-A → CCAN → Ndc80) & Aurora B Tension Sensing. Built on centromeric CENP-A nucleosomes, the 57 nm Ndc80/Hec1 rod of the Outer Kinetochore captures k-fiber microtubule plus-ends; Aurora B kinase detaches syntelic errors until opposite poles pull sister kinetochores under tension.",
        "color": "#0077B6",
        "targetPiece": "Piece_Mit_ChromatidsCENPA"
      },
      {
        "step": 3,
        "title": "3 : Spindle Assembly Checkpoint (SAC) Satisfaction & APC/C Activation",
        "desc": "While even one kinetochore is unattached, it catalyzes the Mad2–Cdc20 Mitotic Checkpoint Complex...",
        "spoken": "Stage 3 — Spindle Assembly Checkpoint (SAC) Satisfaction & APC/C Activation. While even one kinetochore is unattached, it catalyzes the Mad2–Cdc20 Mitotic Checkpoint Complex (MCC) to brake APC/C; once the final chromosome aligns at the Metaphase Plate, MCC disassembles and APC/C–Cdc20 fires.",
        "color": "#FFB703",
        "targetPiece": "Piece_Mit_KinetochoreNdc80"
      },
      {
        "step": 4,
        "title": "4 : Securin Destruction, Separase Cohesin Cleavage & Anaphase A/B",
        "desc": "APC/C polyubiquitinates Securin and Cyclin B for 26S Proteasome destruction, freeing Separase to...",
        "spoken": "Stage 4 — Securin Destruction, Separase Cohesin Cleavage & Anaphase A/B. APC/C polyubiquitinates Securin and Cyclin B for 26S Proteasome destruction, freeing Separase to cleave the RAD21 subunit of Cohesin rings; peeling k-fiber protofilaments drive Ndc80-coupled Anaphase chromosome segregation to the poles.",
        "color": "#E63946",
        "targetPiece": "Piece_Mit_SAC_APCC_Separase"
      },
      {
        "step": 5,
        "title": "5 : Actomyosin Cleavage Furrow & ESCRT-III / VPS4 Midbody Abscission",
        "desc": "In Telophase, nuclear envelopes reassemble around the two chromosome sets while an equatorial Ac...",
        "spoken": "Stage 5 — Actomyosin Cleavage Furrow & ESCRT-III / VPS4 Midbody Abscission. In Telophase, nuclear envelopes reassemble around the two chromosome sets while an equatorial Actomyosin II ring pinches the plasma membrane into a 1 µm midbody bridge, where spiral ESCRT-III filaments and VPS4 ATPase execute final abscission.",
        "color": "#7209B7",
        "targetPiece": "Piece_Mit_ActomyosinRing"
      }
    ]
  },
  "eukaryotic_monomers_dna_rna_rings": {
    "num": "36",
    "id": "eukaryotic_monomers_dna_rna_rings",
    "folder": "36_eukaryotic_monomers_dna_rna_rings",
    "tier": "Tier 8 — Atomic Chemistry, Epigenetic Bases, Nucleotide Rings & Membrane Lipids",
    "title": "THE ATOMIC & MONOMERIC FOUNDATION: B-DNA VS. A-RNA HELICES, PURINE/PYRIMIDINE RINGS, 5-MEC, M⁷G CAP, ATP & CHOLESTEROL",
    "subtitle": "At the base of the 36-element eukaryotic hierarchy lies the atomic chemistry ($0.1\text{--}2\\,\text{nm}$) that governs every macromolecular machine from Scenarios 01 throug...",
    "analogy": "Provides an interactive all-atom chemical workbench comparing the six foundational ring and bond classes of the eukaryotic cell: (A) B-DNA (`1BNA`, C2'-endo 2'-deoxyribose) vs. A-RNA / tRNA (`1EHZ`, C3'-endo ribose with reactive 2'-OH); (B) Purine (9-membered bicyclic) & Pyrimidine (6-membered monocyclic) Watson–Crick base pairs plus epigenetic **5-Methylcytosine (5mC)**; (C) The eukaryotic **5'-m⁷GpppN Cap** (reverse 5'-5' triphosphate bridge); (D) **Mg²⁺–ATP** phosphoanhydride chemistry; (E) Planar **Peptide Bond** & α-helix/β-sheet H-bonds; and (F) the planar **4-Ring Steroid Core of Cholesterol**.",
    "scaleTag": "EUKARYOTE SCENARIO 36 • 0.15–2.5 NM ALL-ATOM COVALENT, HYDROGEN-BOND & Π-STACKING CHEMICAL GEOMETRY • PDB: 1BNA / 1EHZ",
    "glb": "/eukaryote/models/eukaryotic_monomers_dna_rna_rings.glb",
    "pdb": "1BNA, 1EHZ",
    "pronounce": "[eukaryotic-monomers-dna-rna-rings]",
    "sliderLabel": "ATOMIC MONOMER & RING CLASS SELECTOR:",
    "sliderUnit": "% nominal",
    "sliderMin": 0,
    "sliderMax": 200,
    "sliderDefault": 100,
    "inhibitorBtn": [
      "☣️ CpG Island Cytosine C5",
      "🛡️ Native Physiological"
    ],
    "energyBtn": [
      "⚡ ATP / GTP γ-β Phosph",
      "🛑 Energy Depleted"
    ],
    "upstream": "De novo & salvage nucleotide synthesis (Cytosol + Mitochondria Scenarios 19–21), ER Cholesterol/Mevalonate synthesis (Scenari",
    "coupling": "Inputs: Ribose-5-phosphate (from Pentose Phosphate Pathway), Amino ➔ Outputs: Canonical dNTPs (dATP, dTTP, dGTP, dCTP) and rNTPs (ATP, U",
    "downstream": "Serves as the universal atomic substrate pool powering every single macromolecular machine across all 36 scenarios of the Euk",
    "kinetics": [
      [
        "TURNOVER / KINETICS",
        "A single human cell turns over ~10⁹ ATP mole"
      ],
      [
        "ENERGY CURRENCY",
        "ATP / GTP γ-β Phosphoanhydride Bond Hydrolys"
      ],
      [
        "BIOPHYSICAL SCALE",
        "0.15–2.5 nm All-Atom Covalent, Hydrogen-Bond"
      ],
      [
        "PRIMARY RCSB PDBS",
        "1BNA & 1EHZ"
      ]
    ],
    "resources": [
      {
        "title": "RCSB PDB-101 — Molecule of the Month: DNA & Watson-Crick Base Pairing",
        "url": "https://pdb101.rcsb.org/motm/23"
      },
      {
        "title": "RCSB PDB-101 — Molecule of the Month: Transfer RNA (tRNA)",
        "url": "https://pdb101.rcsb.org/motm/15"
      },
      {
        "title": "RCSB PDB Structure 1BNA — Structure of a B-DNA Dodecamer (Drew–Dickerson)",
        "url": "https://www.rcsb.org/structure/1BNA"
      },
      {
        "title": "RCSB PDB Structure 1EHZ — Atomic Resolution Structure of Yeast Phenylalanine tRNA",
        "url": "https://www.rcsb.org/structure/1EHZ"
      },
      {
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
      }
    ],
    "pieces": [
      {
        "meshName": "Piece_Atom_BDNA_ARNA",
        "name": "B-DNA Duplex",
        "badge": "ARNA",
        "color": "#0077B6",
        "desc": "B-DNA Duplex (1BNA, C2'-endo Deoxyribose) vs. A-RNA / tRNA (1EHZ, C3'-endo Ribose 2'-OH). Structural source: 1BNA B-DNA & 1EHZ tRNA. Color taxonomy: Nucleic Acid Helix Blue (#0077B6).",
        "dissocVector": [
          -4.2,
          2.0,
          0.0
        ]
      },
      {
        "meshName": "Piece_Atom_PurinePyrimidine_5mC",
        "name": "Bicyclic Purine",
        "badge": "5MC",
        "color": "#00B4D8",
        "desc": "Bicyclic Purine (A/G) & Monocyclic Pyrimidine (T/U/C) Rings + Epigenetic 5-Methylcytosine (5mC). Structural source: 1BNA Base Pairs + 5mC. Color taxonomy: Aromatic Base Ring Cerulean (#00B4D8).",
        "dissocVector": [
          0.0,
          2.8,
          1.5
        ]
      },
      {
        "meshName": "Piece_Atom_m7G_CapBridge",
        "name": "Eukaryotic 5'-m⁷GpppN Cap",
        "badge": "CAPBRI",
        "color": "#7209B7",
        "desc": "Eukaryotic 5'-m⁷GpppN Cap (N7-Methylguanosine Ring & 5'-5' Triphosphate Bridge). Structural source: 1IPC eIF4E–m⁷GpppG Cap Complex. Color taxonomy: m⁷G Cap Ring Purple (#7209B7).",
        "dissocVector": [
          4.2,
          2.0,
          1.2
        ]
      },
      {
        "meshName": "Piece_Atom_MgATP_Triphos",
        "name": "Mg²⁺-Coordinated Adenosine Triph…",
        "badge": "TRIPHOS",
        "color": "#FFB703",
        "desc": "Mg²⁺-Coordinated Adenosine Triphosphate (Adenine Ring, Ribose & α/β/γ Phosphates). Structural source: Mg²⁺–ATP All-Atom Conformer. Color taxonomy: ATP Bioenergetic Gold (#FFB703).",
        "dissocVector": [
          -4.0,
          -2.5,
          1.5
        ]
      },
      {
        "meshName": "Piece_Atom_PeptideRamachandran",
        "name": "Planar Trans Peptide Bond",
        "badge": "PEPTID",
        "color": "#E63946",
        "desc": "Planar Trans Peptide Bond (ω = 180°), (φ, ψ) Dihedrals & Disulfide/Histone Lysine Side Chains. Structural source: Polypeptide Backbone & Side Chains. Color taxonomy: Peptide Bond Crimson (#E63946).",
        "dissocVector": [
          0.0,
          -3.2,
          1.5
        ]
      },
      {
        "meshName": "Piece_Atom_CholesterolSteroid",
        "name": "Planar Tetracyclic Steroid Ring…",
        "badge": "CHOLES",
        "color": "#06D6A0",
        "desc": "Planar Tetracyclic Steroid Ring System of Cholesterol (A/B/C/D Rings + 3β-OH). Structural source: Cholesterol + POPC Phospholipid. Color taxonomy: Steroid Ring Jade (#06D6A0).",
        "dissocVector": [
          4.2,
          -2.5,
          0.0
        ]
      }
    ],
    "stages": [
      {
        "step": 1,
        "title": "1 : Furanose Sugar Rings: 2'-Deoxyribose (C2'-endo B-DNA) vs. Ribose (C3'-endo A-RNA)",
        "desc": "Compare the 5-membered furanose sugar rings at atomic resolution: removing the 2'-oxygen gives D...",
        "spoken": "Stage 1 — Furanose Sugar Rings: 2'-Deoxyribose (C2'-endo B-DNA) vs. Ribose (C3'-endo A-RNA). Compare the 5-membered furanose sugar rings at atomic resolution: removing the 2'-oxygen gives DNA its C2'-endo pucker and B-form stability (`1BNA`), while RNA's 2'-OH forces a C3'-endo A-form helix (`1EHZ`) and enables 2'-5' lariat branching.",
        "color": "#0077B6",
        "targetPiece": "Piece_Atom_BDNA_ARNA"
      },
      {
        "step": 2,
        "title": "2 : Aromatic Base Rings (Purines vs. Pyrimidines) & Epigenetic 5-Methylcytosine (5mC)",
        "desc": "Inspect the planar 9-membered Purine rings (A, G) and 6-membered Pyrimidine rings (T, U, C) stac...",
        "spoken": "Stage 2 — Aromatic Base Rings (Purines vs. Pyrimidines) & Epigenetic 5-Methylcytosine (5mC). Inspect the planar 9-membered Purine rings (A, G) and 6-membered Pyrimidine rings (T, U, C) stacked at 3.4 Å separation, and watch DNMT transfer a methyl group from SAM onto C5 of Cytosine to create epigenetic 5-Methylcytosine (5mC).",
        "color": "#00B4D8",
        "targetPiece": "Piece_Atom_PurinePyrimidine_5mC"
      },
      {
        "step": 3,
        "title": "3 : The Eukaryotic 5'-m⁷GpppN Cap & Reverse 5'-5' Triphosphate Bridge",
        "desc": "Zoom into the signature chemical badge of eukaryotic mRNA: a positivamente charged N7-methylguan...",
        "spoken": "Stage 3 — The Eukaryotic 5'-m⁷GpppN Cap & Reverse 5'-5' Triphosphate Bridge. Zoom into the signature chemical badge of eukaryotic mRNA: a positivamente charged N7-methylguanosine (m⁷G) ring connected backward via a 5'-to-5' triphosphate bridge, sandwiched by cation-π stacking between two tryptophans of eIF4E.",
        "color": "#7209B7",
        "targetPiece": "Piece_Atom_m7G_CapBridge"
      },
      {
        "step": 4,
        "title": "4 : Mg²⁺-ATP Phosphoanhydride Resonance & Universal Energy Coupling",
        "desc": "Examine how octahedral Mg²⁺ chelates the negatively charged β- and γ-oxygens of ATP, priming the...",
        "spoken": "Stage 4 — Mg²⁺-ATP Phosphoanhydride Resonance & Universal Energy Coupling. Examine how octahedral Mg²⁺ chelates the negatively charged β- and γ-oxygens of ATP, priming the terminal γ-phosphate for nucleophilic attack inside Kinases, Myosin/Kinesin/Dynein motors, and AAA+ rings.",
        "color": "#FFB703",
        "targetPiece": "Piece_Atom_MgATP_Triphos"
      },
      {
        "step": 5,
        "title": "5 : Planar Peptide Bonds (φ, ψ) & The Tetracyclic Steroid Ring of Cholesterol",
        "desc": "Trace partial C=N double-bond resonance keeping the peptide group planar while Cα (φ, ψ) rotatio...",
        "spoken": "Stage 5 — Planar Peptide Bonds (φ, ψ) & The Tetracyclic Steroid Ring of Cholesterol. Trace partial C=N double-bond resonance keeping the peptide group planar while Cα (φ, ψ) rotations build α-helices and β-sheets, alongside the rigid 4-fused-ring (A/B/C/D) steroid core of Cholesterol that orders eukaryotic membranes.",
        "color": "#E63946",
        "targetPiece": "Piece_Atom_PeptideRamachandran"
      }
    ]
  }
} as Record<EukaryoteScenarioId, EukaryoteScenarioConfig>;
