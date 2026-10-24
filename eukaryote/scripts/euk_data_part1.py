# euk_data_part1.py — Elements 01 to 12 of the Eukaryote 36-Element Roadmap

EUK_ELEMENTS_PART1 = [
    {
        "num": "01",
        "id": "eukaryotic_animal_cell",
        "folder": "01_eukaryotic_animal_cell",
        "title": "Whole Animal Cell 3/4 Cutaway & Interactive Organelle Atlas",
        "tier": "Tier 1 — Macro-Scale Whole-Cell Overviews ($10\\text{--}100\\,\\mu\\text{m}$)",
        "scale": "20 µm × 15 µm (Volume ~ 4,000 µm³)",
        "category": "Macro-Scale Compartmentalized Eukaryotic Cell",
        "pdb1": "4V6X",
        "pdb1_label": "Human 80S Ribosome Cryo-EM (4V6X)",
        "pdb2": "5GUP",
        "pdb2_label": "Human Nuclear Pore Complex Scaffold (5GUP)",
        "overview": (
            "Unlike a prokaryotic cell where transcription, translation, and metabolism occur in a single shared "
            "cytoplasmic compartment, the eukaryotic animal cell is a ~20 µm metropolis partitioned into specialized "
            "membrane-bound organelles. A cholesterol-stiffened plasma membrane encloses the cytosol, while the double-membraned "
            "Nucleus sequesters the linear chromosomal genome, the Endoplasmic Reticulum (ER) and Golgi Apparatus form a "
            "continuous secretory assembly line, Mitochondria generate ATP via oxidative phosphorylation, Lysosomes and "
            "Peroxisomes handle acidic recycling and peroxide detoxification, and a three-polymer Cytoskeleton (actin, "
            "microtubules, intermediate filaments) provides mechanical architecture and motorized highway tracks."
        ),
        "behavior": (
            "In our 3D interactive hub, the Whole Animal Cell is sliced open via a surgical 3/4 wedge cutaway. "
            "Motor proteins (kinesin and dynein) actively stream vesicles along radiating microtubules from the perinuclear "
            "Golgi toward the plasma membrane; mitochondria pulse with inner-membrane potential; and the nuclear envelope "
            "continuously exchanges mRNA and proteins through octagonal Nuclear Pore Complexes. Clicking any organelle "
            "callout smoothly flies the camera into that compartment and opens its molecular drill-down portal."
        ),
        "upstream": "Extracellular blood/interstitial fluid nutrients (D-glucose via GLUT transporters, amino acids, LDL-cholesterol, O₂, growth factors, and ECM mechanical tension).",
        "inputs": [
            "D-Glucose + 6 O₂ + fatty acids + amino acids (metabolic fuels)",
            "Extracellular Peptide Hormones / Growth Factors (EGF, Insulin, Epinephrine)",
            "Ions (Na⁺, K⁺, Ca²⁺, Cl⁻, HPO₄²⁻) across plasma membrane channels",
        ],
        "outputs": [
            "Secreted Glycoproteins, Collagen, Hormones & Neurotransmitters (via exocytosis)",
            "Cellular Mechanical Work, Motility & Mitotic Daughter Cells",
            "Metabolic Waste (6 CO₂ + 6 H₂O + Urea / Lactate)",
        ],
        "downstream": "Feeds every subcellular organelle scenario (Scenarios 03–36): glucose/pyruvate → Mitochondria (19); nascent polypeptides → Rough ER (13) → Golgi (15) → Plasma Membrane (04); signaling ligands → GPCR/RTK (06) → Nucleus (26).",
        "energy_currency": "Cytosolic ATP / GTP (~5 mM pool regenerated every ~60 seconds by Mitochondria) + Plasma Membrane ΔΨ (-70 mV)",
        "turnover": "~2 × 10⁹ ATP molecules hydrolyzed and resynthesized per second per cell",
        "layout_mode": "whole_eukaryote",
        "pieces": [
            ("Piece_Cell_PlasmaMembrane", "Plasma Membrane & Microvilli Cutaway Shell", "Lipid Bilayer + Glycocalyx", "#06D6A0", "Inner/Plasma Membrane Jade", "(0.0, -4.0, -6.0)"),
            ("Piece_Cell_Nucleus", "Double-Membraned Nucleus, Lamina & Nucleolus", "5GUP / 1AOI Chromatin Core", "#7209B7", "Nuclear Royal Purple", "(0.0, +4.5, 0.0)"),
            ("Piece_Cell_RoughSmoothER", "Perinuclear Rough & Smooth Endoplasmic Reticulum", "6W6L Sec61 + Sheet/Tubule Mesh", "#00B4D8", "Endomembrane Cerulean", "(-5.0, +2.0, +3.0)"),
            ("Piece_Cell_GolgiStack", "Golgi Apparatus Cis–Medial–Trans Ribbon", "Cisternal Stack + COP Vesicles", "#F77F00", "Golgi Warm Amber", "(-6.5, -1.5, +4.5)"),
            ("Piece_Cell_Mitochondria", "Mitochondrial Network (Cristae & Matrix)", "5XTE / 6ZSC Respirasome", "#E63946", "Bioenergetic Crimson", "(+6.0, +1.5, +3.5)"),
            ("Piece_Cell_LysosomePeroxisome", "Lysosomes (pH 4.5) & Peroxisomes", "6WM2 V-ATPase + 1DGF Catalase", "#FFB703", "Catalytic Gold", "(+5.5, -3.0, +4.0)"),
            ("Piece_Cell_CytoskeletonCentrosome", "Centrosome (9×3 Centrioles), Microtubules & Actin Cortex", "6U42 γ-TuRC + 3J8Y Tubulin", "#3A86FF", "Cytoskeletal Cobalt Blue", "(+2.5, +5.5, -4.5)"),
        ],
        "hud_controls": [
            ("cutaway_depth", "Envelope & Organelle Cutaway Peel", "0% to 100% (peels plasma membrane, cortex, ER, and nuclear envelope)"),
            ("metabolic_flux_speed", "Vesicle Trafficking & ATP Flux Speed", "0.0x to 3.0x real-time cytoplasmic streaming"),
            ("highlight_system", "Organelle System Filter", "All | Genetic (Nucleus/Ribosomes) | Secretory (ER/Golgi/Lysosome) | Bioenergetic (Mitochondria) | Cytoskeleton"),
        ],
        "stages": [
            ("Stage 1 — The Plasma Membrane & Extracellular Interface", "Orbit the outer plasma membrane and glycocalyx. Show how cholesterol rafts, ion pumps, and integrins selectively gate communication with the outside body."),
            ("Stage 2 — The Nucleus & Genetic Command Center", "Fly through the cytoplasm to the double-membraned Nucleus. Highlight Nuclear Pore Complexes exporting capped/spliced mRNAs into the cytoplasm."),
            ("Stage 3 — The Endomembrane Secretory Highway", "Trace a ribosome docking on the Rough ER, budding via COPII vesicles into the Cis-to-Trans Golgi Apparatus, and sorting to Lysosomes or secretory granules."),
            ("Stage 4 — Mitochondrial Bioenergetic Power Grid", "Focus on the branching mitochondrial network consuming pyruvate and O₂ to pump out ATP that fuels the entire cell."),
            ("Stage 5 — Cytoskeletal Tracks & Motorized Transport", "Highlight the Centrosome radiating microtubules and cortical actin filaments, with Kinesin and Dynein hauling organelles across the cell."),
        ],
        "resources": [
            ("NCBI Bookshelf — Molecular Biology of the Cell (Alberts): Visualizing Cells", "https://www.ncbi.nlm.nih.gov/books/NBK26857/"),
            ("RCSB PDB-101 — Cellular Landscapes by David Goodsell", "https://pdb101.rcsb.org/sci-art/goodsell-gallery"),
            ("Allen Institute for Cell Science — 3D Cell Viewer", "https://www.allencell.org/3d-cell-viewer.html"),
            ("RCSB PDB Structure 4V6X — Human 80S Ribosome", "https://www.rcsb.org/structure/4V6X"),
        ],
    },
    {
        "num": "02",
        "id": "kingdom_cell_comparison",
        "folder": "02_kingdom_cell_comparison",
        "title": "Comparative Eukaryotes: Animal vs. Plant vs. Fungal Cell Envelopes & Organelles",
        "tier": "Tier 1 — Macro-Scale Whole-Cell Overviews ($10\\text{--}100\\,\\mu\\text{m}$)",
        "scale": "10–80 µm Comparative Kingdom Tri-Panel",
        "category": "Comparative Eukaryotic Cell Architecture",
        "pdb1": "4HG6",
        "pdb1_label": "Cellulose Synthase CesA Complex (4HG6)",
        "pdb2": "7R04",
        "pdb2_label": "Plant Aquaporin Water Channel (7R04)",
        "overview": (
            "While all eukaryotes share a membrane-bound nucleus, mitochondria, ER, Golgi, and 80S ribosomes, the three "
            "major multicellular/crown eukaryotic lineages evolved radically different outer envelopes and specialized organelles "
            "to match their lifestyles: (1) Animal cells lack a cell wall, relying on a flexible cholesterol-rich membrane "
            "tethered to an extracellular collagen/fibronectin matrix via integrins for motility and phagocytosis; (2) Plant "
            "cells encase themselves in a rigid crystalline Cellulose + Hemicellulose + Pectin cell wall pierced by cytoplasmic "
            "Plasmodesmata bridges, powered by photosynthetic Chloroplasts and inflated by a central Turgor Vacuole occupying "
            "up to 80% of cell volume; (3) Fungal cells build a tough cross-linked β-(1,3)/β-(1,6)-Glucan and Chitin cell wall "
            "over an Ergosterol-stiffened plasma membrane."
        ),
        "behavior": (
            "Displays three side-by-side 3D architectural slices (Animal, Plant, Fungal). Adjusting extracellular osmolarity "
            "demonstrates why an animal cell swells and lyses in pure water while a plant cell builds healthy turgor pressure "
            "against its cellulose microfibril wall, and how hypertonic media triggers plasmolysis (plasma membrane pulling away "
            "from the wall between plasmodesmata)."
        ),
        "upstream": "Sunlight + CO₂ + H₂O + soil minerals (Plant); dietary organic macromolecules (Animal); extracellular enzymatic digests (Fungi).",
        "inputs": [
            "UDP-Glucose (for plant CesA cellulose & fungal FKS1 β-glucan synthases)",
            "UDP-GlcNAc (for fungal Chitin Synthase)",
            "Procollagen + Vitamin C / O₂ (for animal ECM collagen hydroxylation & crosslinking)",
        ],
        "outputs": [
            "Animal: Flexible Collagen/Integrin ECM & migratory traction",
            "Plant: Crystalline Cellulose Iβ microfibrils, O₂/sucrose, and 0.5–1.0 MPa hydrostatic turgor",
            "Fungal: Chitin–β-Glucan–Mannoprotein armor resistant to osmotic lysis",
        ],
        "downstream": "Connects directly to Scenario 03 (Animal ECM/Integrins), Scenario 08 (Plasmodesmata & Animal Junctions), Scenario 18 (Plant Central Vacuole), and Scenario 23 (Chloroplast).",
        "energy_currency": "UDP-Sugar nucleotide donors (UDP-Glc, UDP-GlcNAc) + ATP + Osmotic Water Potential (Ψw = Ψs + Ψp)",
        "turnover": "CesA Rosette polymerizes ~300–500 glucose units/min per cellulose strand",
        "layout_mode": "tri_envelopes",
        "pieces": [
            ("Piece_King_AnimalECM", "Animal Cell: Cholesterol Bilayer, Integrins & Collagen ECM", "1BKV Collagen + 4G1E Integrin", "#06D6A0", "Animal Plasma Membrane Jade", "(-7.0, +3.0, 0.0)"),
            ("Piece_King_AnimalCortex", "Animal Cortical Actin-Spectrin Mesh & Centrosome", "F-Actin / Spectrin Network", "#3A86FF", "Cortical Blue", "(-7.0, -3.5, 0.0)"),
            ("Piece_King_PlantCellWall", "Plant Cell: Cellulose Rosette (CesA), Hemicellulose & Pectin Wall", "4HG6 CesA + Cellulose Microfibrils", "#E76F51", "Cell Wall Terracotta", "(0.0, +4.0, 0.0)"),
            ("Piece_King_PlantChloroVacuole", "Plant Chloroplast Grana, Central Tonoplast Vacuole & Plasmodesmata", "5XNL PSII + 7R04 Aquaporin", "#2EC4B6", "Photosynthetic Teal", "(0.0, -3.5, 0.0)"),
            ("Piece_King_FungalChitinWall", "Fungal Cell: Chitin Layer, β-1,3/1,6-Glucan & Mannoprotein Coat", "8IUG Chitin Synthase + Mannoproteins", "#FFB703", "Chitin Amber Gold", "(+7.0, +4.0, 0.0)"),
            ("Piece_King_FungalErgosterolPM", "Fungal Plasma Membrane with Ergosterol & FKS1 Synthase", "Ergosterol Bilayer + 7Y36 FKS1", "#9D4EDD", "Fungal Violet", "(+7.0, -3.5, 0.0)"),
        ],
        "hud_controls": [
            ("osmotic_tonicity", "Extracellular Tonicity (Hypotonic ↔ Isotonic ↔ Hypertonic)", "-1.0 (Hypotonic Lysis/Turgor) to +1.0 (Hypertonic Crenation/Plasmolysis)"),
            ("kingdom_focus", "Kingdom Spotlight", "All Three | Animal (ECM) | Plant (Cellulose/Vacuole) | Fungal (Chitin/Ergosterol)"),
            ("antifungal_echinocandin", "Cell-Wall Inhibitor Toggle", "Simulates Echinocandin (blocks Fungal β-glucan) or Isoxaben (blocks Plant Cellulose)"),
        ],
        "stages": [
            ("Stage 1 — Animal Flexibility vs. Walled Kingdoms", "Compare the naked, cholesterol-stabilized animal membrane tethered to collagen fibers against the rigid outer walls of plants and fungi."),
            ("Stage 2 — Plant Cellulose Rosettes & Turgor", "Zoom into the plant plasma membrane where hexameric CesA Rosette complexes extrude 18-chain crystalline cellulose microfibrils guided by cortical microtubules."),
            ("Stage 3 — Chloroplasts, Vacuole & Plasmodesmata", "Inspect how the plant central vacuole pushes the cytoplasm against the wall while ER-threaded plasmodesmata connect neighboring plant cells."),
            ("Stage 4 — Fungal Chitin & β-Glucan Armor", "Examine the layered fungal wall: inner crystalline chitin, middle cross-linked β-1,3/1,6-glucan, and outer glycosylated mannoproteins."),
            ("Stage 5 — Osmotic Stress & Pharmacological Targeting", "Demonstrate why antifungals (azoles targeting ergosterol, echinocandins targeting β-glucan) selectively kill fungi without harming human animal cells."),
        ],
        "resources": [
            ("NCBI Bookshelf — Molecular Biology of the Cell: The Plant Cell Wall", "https://www.ncbi.nlm.nih.gov/books/NBK26928/"),
            ("RCSB PDB Structure 4HG6 — Cellulose Synthase Complex", "https://www.rcsb.org/structure/4HG6"),
            ("RCSB PDB-101 — Molecule of the Month: Cellulose Synthase", "https://pdb101.rcsb.org/motm/242"),
            ("Nature Reviews Microbiology — Architecture of the Fungal Cell Wall", "https://www.nature.com/articles/nrmicro.2017.109"),
        ],
    },
    {
        "num": "03",
        "id": "ecm_integrin_focal_adhesion",
        "folder": "03_ecm_integrin_focal_adhesion",
        "title": "Extracellular Matrix (ECM), Collagen Triple Helix & Integrin Focal Adhesion",
        "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane ($10\\text{--}200\\,\\text{nm}$)",
        "scale": "120 nm Trans-Membrane Mechanotransduction Complex",
        "category": "Cell-Matrix Adhesion & Mechanosignaling",
        "pdb1": "3VI4",
        "pdb1_label": "Integrin α5β1 Headpiece Bound to Fibronectin RGD (3VI4)",
        "pdb2": "1BKV",
        "pdb2_label": "Collagen Triple Helix Peptide (1BKV)",
        "overview": (
            "Animal cells weave an intricate Extracellular Matrix (ECM) dominated by Type I/IV Collagen triple helices "
            "(Gly-X-Y repeats with hydroxyproline), elastic Fibronectin dimers, and hydrated Proteoglycan glycosaminoglycan "
            "brushes. Across the plasma membrane, heterodimeric α/β Integrins act as two-way allosteric mechanical clutches: "
            "in their resting bent-closed state they have low affinity, but upon inside-out Talin binding (or outside-in "
            "binding to the Arg-Gly-Asp [RGD] loop of Fibronectin), the Integrin legs swing open by 130 Å. Inside the cell, "
            "tensile force unfolds α-helical bundles in Talin, exposing cryptic binding sites that recruit Vinculin, Paxillin, "
            "and Focal Adhesion Kinase (FAK) to lock onto contractile F-actin stress fibers."
        ),
        "behavior": (
            "Displays the three-tier mechanical bridge: Extracellular Collagen/Fibronectin above the membrane, α5β1 Integrin "
            "spanning the lipid bilayer (with divalent Mg²⁺/Mn²⁺ at the MIDAS metal-ion-dependent adhesion site), and the "
            "Talin–Vinculin–FAK clutch gripping F-Actin below. Dragging the mechanical tension slider unfolds the Talin rod "
            "domains and snaps Vinculin onto the stretched rod."
        ),
        "upstream": "Rough ER (13) & Golgi (15) procollagen/fibronectin secretion + Cortical Actomyosin (09) intracellular retrograde traction force.",
        "inputs": [
            "Extracellular Fibronectin RGD motif & Cross-linked Collagen I fibrils",
            "Cytosolic Talin-1, Vinculin, Kindlin, and PIP₂ lipid anchors",
            "Mg²⁺ / Ca²⁺ ions at the Integrin β-I MIDAS coordination site + ATP (for FAK phosphorylation)",
        ],
        "outputs": [
            "Mechanical traction force transmitted between cytoskeleton and tissue matrix (pN per integrin)",
            "Phosphorylated FAK (Tyr397) / Src / YAP-TAZ nuclear mechanosignaling cascade",
            "Stabilized Focal Adhesion plaque preventing anoikis (detachment-induced apoptosis)",
        ],
        "downstream": "Transmits mechanical tension to F-Actin/Myosin stress fibers (Scenario 09) and activates nuclear YAP/TAZ & ERK gene transcription in the Nucleus (Scenario 26/30).",
        "energy_currency": "Actomyosin Mechanical Tension (5–40 pN per Talin rod) + ATP (Focal Adhesion Kinase autophosphorylation)",
        "turnover": "Integrin switch-blade extension ~10–50 ms; Talin R3 domain unfolding at ~5 pN force threshold",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_ECM_CollagenFibril", "Type I Collagen Triple-Helix Fibrils (Gly-Pro-Hyp)", "1BKV / 3HR2 Collagen", "#F77F00", "Collagen Warm Amber", "(-4.5, +6.5, -2.0)"),
            ("Piece_ECM_FibronectinRGD", "Fibronectin Type III Dimer (FN7–10 with RGD Loop)", "1FNF / 3VI4 Fibronectin", "#FFB703", "Ligand Gold", "(+2.0, +4.5, +2.0)"),
            ("Piece_ECM_IntegrinAlphaBeta", "Integrin α5β1 Heterodimer (β-Propeller, βI MIDAS & TM Legs)", "3VI4 / 4G1E Integrin", "#00B4D8", "Receptor Cerulean", "(0.0, +1.5, 0.0)"),
            ("Piece_ECM_PlasmaMembrane", "Plasma Membrane Bilayer with PIP₂ Inner Leaflet Patch", "POPC / Cholesterol / PIP₂", "#06D6A0", "Plasma Membrane Jade", "(0.0, 0.0, 0.0)"),
            ("Piece_ECM_TalinRod", "Talin-1 FERM Head & Force-Sensing R1–R13 Helical Rod", "3IVF / 6VGU Talin", "#9D4EDD", "Mechanosensor Violet", "(-2.5, -3.5, +2.0)"),
            ("Piece_ECM_VinculinFAK", "Vinculin Clutch & Focal Adhesion Kinase (FAK)", "1TR2 Vinculin + 2J0J FAK", "#E63946", "Clutch Crimson", "(+3.5, -3.5, +2.5)"),
            ("Piece_ECM_ActinStressFiber", "Cytoplasmic F-Actin Contractile Stress Fiber", "3J8I F-Actin Filament", "#3A86FF", "Actin Cobalt Blue", "(0.0, -6.5, -2.0)"),
        ],
        "hud_controls": [
            ("integrin_activation", "Integrin Allosteric State (Bent-Inactive ↔ Extended-Open)", "0.0 (Bent low-affinity) to 1.0 (Extended 130 Å high-affinity RGD clamp)"),
            ("traction_force_pN", "Actomyosin Mechanical Tension (pN)", "0 pN to 40 pN (unfolds Talin R3 at >5 pN and recruits Vinculin)"),
            ("divalent_cation", "MIDAS Cation Mode", "Mg²⁺/Mn²⁺ (Active Adhesion) vs. EDTA Chelation (Detachment)"),
        ],
        "stages": [
            ("Stage 1 — The Extracellular Matrix Scaffold", "Inspect the braided Type I Collagen triple helices and Fibronectin RGD loops forming the structural bed outside the cell."),
            ("Stage 2 — Inside-Out Integrin Switchblade Unfolding", "Watch cytosolic Talin-1 bind the β-integrin tail and PIP₂, triggering the bent integrin ectodomain to snap upright by 130 Å."),
            ("Stage 3 — RGD Catch-Bond & MIDAS Metal Coordination", "Zoom into the βI domain where a Mg²⁺ ion coordinates the Asp residue of Fibronectin's RGD loop."),
            ("Stage 4 — Talin Stretching & Vinculin Recruitment", "Apply actomyosin pulling force to unfold Talin's helical bundles, exposing buried hydrophobic helices that recruit Vinculin to reinforce the clutch."),
            ("Stage 5 — FAK Phosphorylation & Mechanotransduction", "Highlight Focal Adhesion Kinase (FAK) autophosphorylating Tyr397 to broadcast survival and stiffness signals to the nucleus."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Integrin", "https://pdb101.rcsb.org/motm/134"),
            ("RCSB PDB-101 — Molecule of the Month: Collagen", "https://pdb101.rcsb.org/motm/4"),
            ("RCSB PDB Structure 3VI4 — Integrin α5β1 Headpiece with RGD", "https://www.rcsb.org/structure/3VI4"),
            ("Nature Reviews Molecular Cell Biology — Integrin Mechanotransduction", "https://www.nature.com/articles/nrm.2016.78"),
        ],
    },
    {
        "num": "04",
        "id": "plasma_membrane_lipid_raft",
        "folder": "04_plasma_membrane_lipid_raft",
        "title": "Eukaryotic Plasma Membrane, Cholesterol Stiffening Rings & Glycocalyx",
        "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane ($10\\text{--}200\\,\\text{nm}$)",
        "scale": "15 nm × 15 nm × 8 nm Asymmetric Bilayer Patch",
        "category": "Membrane Biophysics & Lipid Asymmetry",
        "pdb1": "7CBT",
        "pdb1_label": "Human P4-ATPase Flippase ATP8A1 (7CBT)",
        "pdb2": "7VGI",
        "pdb2_label": "Human Caveolin-1 8S Disc Complex (7VGI)",
        "overview": (
            "The eukaryotic plasma membrane is a 5 nm dynamic fluid mosaic distinguished from bacterial membranes by three "
            "hallmarks: (1) High Sterol Content (30–40 mol% Cholesterol in animals, Ergosterol in fungi, Sitosterol in plants), "
            "whose planar four-ring steroid nucleus intercalates alongside saturated sphingolipid acyl chains to form thicker, "
            "liquid-ordered (Lo) Lipid Rafts; (2) Strict Trans-Bilayer Asymmetry maintained by ATP-dependent P4-ATPase Flippases, "
            "which keep Sphingomyelin (SM), Phosphatidylcholine (PC), and Ganglioside Glycolipids (GM1) in the outer leaflet while "
            "confining negatively charged Phosphatidylserine (PS), Phosphatidylethanolamine (PE), and PIP₂ to the cytosolic leaflet; "
            "and (3) a dense outer Glycocalyx carbohydrate canopy."
        ),
        "behavior": (
            "Renders an atomic/mesoscale patch of the plasma membrane comparing a thinner liquid-disordered (Ld) unsaturated "
            "phospholipid region against a thicker liquid-ordered (Lo) Cholesterol + Sphingomyelin + GM1 Ganglioside lipid raft "
            "carrying GPI-anchored proteins on top and a Caveolin-1 11-mer disc + Flippase below."
        ),
        "upstream": "Smooth ER (14) de novo phospholipid/cholesterol synthesis (mevalonate pathway) + Golgi (15) sphingomyelin and ganglioside glycosylation.",
        "inputs": [
            "Cholesterol (C₂₇H₄₆O planar 4-ring sterol delivered via LDL/NPC1 or Smooth ER)",
            "Outer-leaflet Sphingomyelin (SM), POPC, and GM1 Gangliosides",
            "Inner-leaflet POPS, POPE, PIP₂ + Cytosolic ATP (for ATP8A1 Flippase)",
        ],
        "outputs": [
            "Selective permeability barrier & -70 mV capacitive dielectric insulator",
            "Liquid-Ordered (Lo) nanodomains clustering GPI-anchored receptors and Src family kinases",
            "Inner-leaflet negative surface charge (-PS / -PIP₂) recruiting cytosolic signaling proteins (or outer-leaflet PS 'eat-me' signal upon scramblase activation in apoptosis)",
        ],
        "downstream": "Provides the lipid matrix and PIP₂/Cholesterol cofactors for Ion Channels (05), GPCRs/RTKs (06), Clathrin Endocytosis (07), and Integrin Focal Adhesions (03).",
        "energy_currency": "ATP (1 ATP per PS lipid flipped inward by P4-ATPase Flippase) + Hydrophobic Effect & Van der Waals Sterol Packing",
        "turnover": "Lateral lipid diffusion D ≈ 1–5 µm²/s (~10⁷ lipid exchanges/sec); spontaneous flip-flop t₁/₂ > hours without flippase",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_PM_GlycocalyxGM1", "Outer Glycocalyx: GM1 Ganglioside Sugar Trees & GPI-Anchored Protein", "GM1 Oligosaccharides + 1GNY GPI", "#9D4EDD", "Glycan Violet", "(0.0, +4.5, +1.5)"),
            ("Piece_PM_OuterLeaflet", "Outer Leaflet: Sphingomyelin & Phosphatidylcholine (PC)", "SM + POPC Headgroups & Acyl Chains", "#0077B6", "Exoplasmic Marine Blue", "(0.0, +1.8, -2.0)"),
            ("Piece_PM_CholesterolRings", "Intercalated Planar 4-Ring Cholesterol Raft Core", "Cholesterol C27H46O Sterol Rings", "#FFB703", "Sterol Gold", "(0.0, 0.0, +2.5)"),
            ("Piece_PM_InnerLeaflet", "Inner Leaflet: Anionic Phosphatidylserine (PS), PE & PIP₂", "POPS + POPE + PIP2", "#06D6A0", "Cytosolic Leaflet Jade", "(0.0, -1.8, -2.0)"),
            ("Piece_PM_FlippaseATP8A1", "P4-ATPase Lipid Flippase (ATP8A1–CDC50A)", "7CBT Flippase Complex", "#00B4D8", "Transporter Cerulean", "(-4.5, -1.0, +2.0)"),
            ("Piece_PM_CaveolinDisc", "Inner-Leaflet Caveolin-1 8S Amphipathic Disc", "7VGI Caveolin-1 11-mer Ring", "#E63946", "Caveolin Crimson", "(+4.5, -2.5, +2.0)"),
        ],
        "hud_controls": [
            ("cholesterol_mol_pct", "Cholesterol Concentration (mol%)", "0% (Hyper-fluid/Leaky) to 45% (Stiffened Liquid-Ordered Raft)"),
            ("temperature_celsius", "Membrane Temperature (°C)", "10°C (Gel Phase) to 42°C (High Thermal Lateral Diffusion)"),
            ("scramblase_apoptosis", "Flippase vs. Apoptotic Scramblase (TMEM16F)", "Normal Asymmetric (PS Inside) vs. Apoptotic Flipped (PS Exposed Outside)"),
        ],
        "stages": [
            ("Stage 1 — Trans-Bilayer Asymmetry", "Compare the neutral/zwitterionic outer leaflet (PC, Sphingomyelin, Glycolipids) against the negatively charged inner leaflet (PS, PIP₂)."),
            ("Stage 2 — The Four-Ring Cholesterol Stiffener", "Zoom into the hydrophobic core to see how Cholesterol's rigid planar steroid rings pack against saturated sphingolipid tails, increasing bilayer thickness."),
            ("Stage 3 — Lipid Rafts & GPI-Anchored Signaling", "Observe how thicker Liquid-Ordered (Lo) rafts cluster GPI-anchored proteins on the outside and palmitoylated/myristoylated kinases on the inside."),
            ("Stage 4 — ATP-Driven Flippase Maintenance", "Watch the ATP8A1 P4-ATPase Flippase burn ATP to grab any Phosphatidylserine that leaks outward and flip it back to the cytosolic leaflet."),
            ("Stage 5 — Caveolae & Apoptotic PS Exposure", "Contrast Caveolin-1 oligomeric discs curving the inner leaflet with Ca²⁺-activated scramblases exposing PS on the cell surface as a macrophage 'eat-me' signal."),
        ],
        "resources": [
            ("NCBI Bookshelf — Molecular Biology of the Cell: The Lipid Bilayer", "https://www.ncbi.nlm.nih.gov/books/NBK26871/"),
            ("RCSB PDB Structure 7CBT — Human P4-ATPase Lipid Flippase ATP8A1", "https://www.rcsb.org/structure/7CBT"),
            ("RCSB PDB Structure 7VGI — Human Caveolin-1 8S Complex", "https://www.rcsb.org/structure/7VGI"),
            ("Nature Reviews Molecular Cell Biology — Lipid Rafts & Membrane Organization", "https://www.nature.com/articles/nrm.2017.16"),
        ],
    },
    {
        "num": "05",
        "id": "ion_channels_na_k_pump",
        "folder": "05_ion_channels_na_k_pump",
        "title": "Na⁺/K⁺-ATPase Electrogenic Pump & Voltage-Gated K⁺/Na⁺ Ion Channels",
        "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane ($10\\text{--}200\\,\\text{nm}$)",
        "scale": "15 nm Bioelectric Membrane Complex",
        "category": "Membrane Bioelectricity & Ion Homeostasis",
        "pdb1": "2ZXE",
        "pdb1_label": "Na⁺/K⁺-ATPase αβγ Pump Complex (2ZXE)",
        "pdb2": "1BL8",
        "pdb2_label": "K⁺ Channel Selectivity Filter (1BL8 / 2R9R)",
        "overview": (
            "Every eukaryotic animal cell is an electrical battery (~ -70 mV resting potential) charged by the Na⁺/K⁺-ATPase "
            "(Sodium-Potassium Pump), which consumes up to 25% of all human body ATP (and 70% in neurons!). Alternating between "
            "its inward-open E₁ state (high affinity for 3 cytosolic Na⁺ + ATP phosphorylation of Asp369) and outward-open E₂-P "
            "state (releasing 3 Na⁺ outside, binding 2 extracellular K⁺, and dephosphorylating to import 2 K⁺), it maintains "
            "low intracellular Na⁺ (~12 mM vs. 145 mM outside) and high intracellular K⁺ (~140 mM vs. 4 mM outside). Alongside "
            "it sits the tetrameric Voltage-Gated K⁺ Channel (Kv), whose four S4 arginine-rich voltage-sensor paddles slide "
            "upward upon depolarization to open the intracellular gate, streaming K⁺ ions at 10⁸ ions/sec through the atomic "
            "TVGYG carbonyl selectivity filter that perfectly mimics the hydration shell of K⁺ but is too wide to dehydrate Na⁺."
        ),
        "behavior": (
            "Features the Na⁺/K⁺-ATPase (α catalytic subunit with A, N, and P cytoplasmic domains + glycosylated β subunit + γ FXYD "
            "regulator) next to the 4-fold symmetric Voltage-Gated K⁺ Channel in the plasma membrane. Users can step through the "
            "Post–Albers E₁/E₂ pumping cycle and fire an action potential depolarization wave."
        ),
        "upstream": "Mitochondrial ATP export (Scenario 21) + Extracellular/Intracellular Na⁺ and K⁺ electrolyte pools.",
        "inputs": [
            "3 Cytosolic Na⁺ ions + 1 Cytosolic ATP + Mg²⁺ (into Na⁺/K⁺-ATPase E₁ state)",
            "2 Extracellular K⁺ ions (into Na⁺/K⁺-ATPase E₂-P state)",
            "Membrane Depolarization (ΔΨ from -70 mV to +30 mV driving Kv S4 voltage sensors)",
        ],
        "outputs": [
            "3 Extracellular Na⁺ exported + 2 Cytosolic K⁺ imported + 1 ADP + Pᵢ (net 1 positive charge exported/cycle)",
            "Resting Membrane Potential (ΔΨ ≈ -70 mV) + Steep Na⁺ gradient driving secondary symporters (SGLT1 glucose import)",
            "Rapid K⁺ efflux through Kv selectivity filter repolarizing the membrane after an action potential",
        ],
        "downstream": "Powers secondary active nutrient import, maintains osmotic cell volume (preventing swelling in Scenario 01/02), and resets membrane voltage for GPCR/Neurotransmitter signaling (Scenario 06) and ER Ca²⁺ release (Scenario 14).",
        "energy_currency": "ATP Hydrolysis (ΔG ≈ -50 kJ/mol via Asp369 acyl-phosphate intermediate) ↔ Electrochemical Gradients Δμ_Na+ & Δμ_K+",
        "turnover": "Na⁺/K⁺-ATPase: ~150–200 cycles/sec; Kv Channel: ~10⁷–10⁸ K⁺ ions/sec (diffusion-limited)",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Ion_NaK_Alpha", "Na⁺/K⁺-ATPase α-Subunit (10-TM Core + Cytoplasmic A, N, P Domains)", "2ZXE / 3KDP Chain A", "#00B4D8", "Pump Catalytic Cerulean", "(-4.0, +0.5, 0.0)"),
            ("Piece_Ion_NaK_BetaGamma", "Na⁺/K⁺-ATPase Glycosylated β-Subunit & FXYD γ-Regulator", "2ZXE Chains B, G", "#9D4EDD", "Regulatory Ectodomain Violet", "(-5.5, +4.0, +2.0)"),
            ("Piece_Ion_NaK_IonsATP", "Occluded 3 Na⁺ / 2 K⁺ Ions & Asp369 Phosphorylation Site", "Na⁺ / K⁺ / Mg-ATP Pocket", "#FFB703", "Catalytic Ion Gold", "(-3.5, -2.5, +3.0)"),
            ("Piece_Ion_Kv_PoreTetramer", "Kv Channel Central Pore Domain (S5–S6 Tetramer & TVGYG Selectivity Filter)", "2R9R / 1BL8 Pore", "#E63946", "Channel Pore Crimson", "(+4.0, +0.5, 0.0)"),
            ("Piece_Ion_Kv_VoltageSensors", "Kv S1–S4 Voltage-Sensing Paddles & Cytoplasmic T1 Tetramerization Ring", "2R9R S1–S4 + T1 Domain", "#F77F00", "Voltage Sensor Amber", "(+5.5, -2.5, +2.5)"),
            ("Piece_Ion_PlasmaMembrane", "Plasma Membrane Phospholipid Bilayer", "POPC / Cholesterol Bilayer", "#06D6A0", "Plasma Membrane Jade", "(0.0, 0.0, -2.5)"),
        ],
        "hud_controls": [
            ("membrane_voltage_mV", "Membrane Voltage ΔΨ (mV)", "-90 mV (Hyperpolarized Closed) to +40 mV (Depolarized Kv Open)"),
            ("atp_supply", "Cytosolic ATP Supply (Na⁺/K⁺ Pump Rate)", "0% to 100%"),
            ("cardiac_glycoside_ouabain", "Ouabain / Digoxin Inhibitor Toggle", "Locks Na⁺/K⁺-ATPase in outward-open E₂-P state"),
        ],
        "stages": [
            ("Stage 1 — E₁ Inward-Open: Binding 3 Cytosolic Na⁺", "Zoom into the Na⁺/K⁺-ATPase in its E₁ conformation as 3 Na⁺ ions enter from the cytoplasm and ATP binds the Nucleotide (N) domain."),
            ("Stage 2 — Asp369 Phosphorylation & E₁-P → E₂-P Switch", "Watch γ-phosphate transfer onto Asp369 in the P-domain, triggering actuator (A) domain rotation that closes the inner gate and ejects 3 Na⁺ outside."),
            ("Stage 3 — E₂-P Binding 2 K⁺ & Dephosphorylation", "Two extracellular K⁺ ions bind the outward-open pocket, triggering hydrolysis of Asp369-P and importing the 2 K⁺ into the cytosol."),
            ("Stage 4 — Voltage-Gated K⁺ Channel S4 Paddle Motion", "Shift to the neighboring Kv channel: depolarizing the membrane pushes the positively charged Arg residues on S4 upward, pulling the S4–S5 linker to open the S6 bundle crossing."),
            ("Stage 5 — Atomic Selectivity Filter (TVGYG)", "Fly inside the narrow Kv selectivity filter where four rings of backbone carbonyl oxygens strip water from K⁺ ions while rejecting smaller Na⁺ ions."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Sodium-Potassium Pump", "https://pdb101.rcsb.org/motm/118"),
            ("RCSB PDB-101 — Molecule of the Month: Potassium Channels", "https://pdb101.rcsb.org/motm/38"),
            ("RCSB PDB Structure 2ZXE — Sodium-Potassium Pump", "https://www.rcsb.org/structure/2ZXE"),
            ("RCSB PDB Structure 2R9R — Voltage-Gated Potassium Channel Kv1.2/2.1", "https://www.rcsb.org/structure/2R9R"),
        ],
    },
    {
        "num": "06",
        "id": "gpcr_rtk_signaling",
        "folder": "06_gpcr_rtk_signaling",
        "title": "GPCR 7-Transmembrane Receptor, Heterotrimeric G-Protein & RTK Dimerization",
        "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane ($10\\text{--}200\\,\\text{nm}$)",
        "scale": "20 nm Transmembrane Signal Transduction Hub",
        "category": "Signal Transduction & Second Messengers",
        "pdb1": "3SN6",
        "pdb1_label": "β₂-Adrenergic Receptor–Gs Protein Complex (3SN6)",
        "pdb2": "8H36",
        "pdb2_label": "Transmembrane Adenylyl Cyclase–Gsα Complex (8H36 / 1IVO)",
        "overview": (
            "Eukaryotic cells sense hormones, neurotransmitters, odorants, and photons via two dominant plasma-membrane receptor "
            "classes: (1) G-Protein-Coupled Receptors (GPCRs, >800 in humans), whose 7 transmembrane α-helices (TM1–TM7) undergo "
            "an outward 14 Å swing of TM6 upon agonist binding. This cytosolic cleft engages the Heterotrimeric G-Protein (Gαβγ), "
            "prying open the Gα Ras-like and helical domains to eject GDP and bind GTP. Gαs-GTP dissociates from Gβγ and activates "
            "transmembrane Adenylyl Cyclase, cyclizing ATP into the cyclic AMP (cAMP) second-messenger ring; (2) Receptor Tyrosine "
            "Kinases (RTKs like EGFR/Insulin Receptor), where ligand-induced ectodomain dimerization brings two cytoplasmic kinase "
            "domains into an asymmetric dimer for trans-autophosphorylation of tyrosine tails, recruiting SH2/PTB adaptors (Grb2–SOS) "
            "to load Ras with GTP."
        ),
        "behavior": (
            "Side-by-side interactive signaling comparison in the plasma membrane: on the left, Epinephrine docks into the β₂-AR "
            "GPCR (3SN6), triggering Gαs opening, GDP→GTP exchange, and Adenylyl Cyclase cAMP ring production (plus GRK/β-Arrestin "
            "desensitization); on the right, EGF dimerizes EGFR, triggering tyrosine phosphorylation and Ras-GTP activation."
        ),
        "upstream": "Extracellular endocrine/paracrine hormones & neurotransmitters (Epinephrine, Glucagon, EGF, Insulin) + Cytosolic GTP & ATP pools.",
        "inputs": [
            "Extracellular Agonist Ligand (Epinephrine / Adrenaline or EGF)",
            "Cytosolic GTP (for Gαs and Ras nucleotide exchange) + Cytosolic ATP (for Adenylyl Cyclase & RTK kinase)",
            "Membrane-anchored Gαsβ₁γ₂ heterotrimer & Farnesylated Ras-GDP",
        ],
        "outputs": [
            "3',5'-Cyclic AMP (cAMP ring) second messenger (activating Protein Kinase A [PKA])",
            "Dissociated Gβγ dimer (gating GIRK channels / PI3Kγ) + Active Ras-GTP (launching RAF→MEK→ERK cascade)",
            "β-Arrestin-bound GPCR ready for Clathrin-mediated endocytosis",
        ],
        "downstream": "cAMP/PKA & IP₃/DAG regulate Smooth ER Ca²⁺ release (Scenario 14) and glycogen/lipid metabolism; Ras-GTP→ERK & PKA→CREB translocate through the Nuclear Pore (Scenario 27) to activate Pol II transcription (Scenario 30); β-Arrestin recruits Clathrin AP2 (Scenario 07).",
        "energy_currency": "GTP Binding & Hydrolysis (Gα intrinsic GTPase + RGS / Ras + GAP) + ATP Cyclization (ATP → cAMP + PPᵢ)",
        "turnover": "1 agonist-bound GPCR activates ~10–100 Gs proteins; Adenylyl Cyclase synthesizes ~1,000 cAMP molecules/sec",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Sig_GPCR_7TM", "β₂-Adrenergic Receptor 7-TM Helical Bundle + Bound Agonist", "3SN6 Chain R", "#00B4D8", "GPCR Cerulean", "(-5.0, +1.0, 0.0)"),
            ("Piece_Sig_GAlphaS", "Gαs Subunit (Ras-like & Hinged α-Helical Domains + GTP)", "3SN6 Chain A", "#FFB703", "G-Alpha Gold", "(-3.5, -3.5, +2.0)"),
            ("Piece_Sig_GBetaGamma", "Gβ₁ (7-Bladed WD40 β-Propeller Ring) & Prenylated Gγ₂", "3SN6 Chains B, G", "#9D4EDD", "WD40 Propeller Violet", "(-6.5, -3.0, -2.0)"),
            ("Piece_Sig_AdenylylCyclase", "Transmembrane Adenylyl Cyclase (AC9) Generating cAMP Rings", "8H36 Adenylyl Cyclase", "#F77F00", "Cyclase Warm Amber", "(0.0, -1.5, +2.5)"),
            ("Piece_Sig_RTK_Dimer", "Ligand-Bound EGFR Receptor Tyrosine Kinase Dimer & Phospho-Tails", "1IVO Ectodomain + 2GS6 Kinase", "#E63946", "RTK Dimer Crimson", "(+5.0, +1.5, 0.0)"),
            ("Piece_Sig_Grb2SOS_Ras", "Grb2–SOS GEF Complex & Membrane-Tethered Ras-GTP", "1BKD Ras-SOS", "#3A86FF", "Ras Signaling Blue", "(+5.0, -3.5, +2.0)"),
            ("Piece_Sig_PlasmaMembrane", "Plasma Membrane Phospholipid Bilayer", "POPC / Cholesterol Bilayer", "#06D6A0", "Plasma Membrane Jade", "(0.0, 0.0, -2.5)"),
        ],
        "hud_controls": [
            ("ligand_occupancy", "Agonist / Growth Factor Concentration", "0% (Basal GDP-Bound) to 100% (Full Agonist Activation)"),
            ("signaling_branch", "Pathway Focus", "Both | GPCR → Gs → Adenylyl Cyclase (cAMP) | RTK → Grb2/SOS → Ras-GTP"),
            ("beta_arrestin_desensitize", "GRK Phosphorylation & β-Arrestin Toggle", "Active G-Protein Signaling vs. β-Arrestin Desensitized State"),
        ],
        "stages": [
            ("Stage 1 — Agonist Docking & TM6 Outward Swing", "Dock Epinephrine into the extracellular pocket of the 7-TM β₂-Adrenergic Receptor and watch TM6 swing outward by 14 Å on the cytoplasmic face."),
            ("Stage 2 — Gαs Clamshell Opening & GDP→GTP Exchange", "Observe the GPCR engage the C-terminal α5 helix of Gαs, swinging the α-helical domain open by 130° so GDP escapes and GTP binds."),
            ("Stage 3 — Adenylyl Cyclase & Cyclic AMP Ring Synthesis", "Follow GTP-bound Gαs sliding along the inner leaflet to bind Adenylyl Cyclase, converting ATP into cyclic AMP (cAMP) rings."),
            ("Stage 4 — RTK Dimerization & Trans-Autophosphorylation", "Switch to the EGFR Receptor Tyrosine Kinase: binding two EGF ligands locks the ectodomains into a back-to-back dimer, driving asymmetric kinase activation and tail Tyr phosphorylation."),
            ("Stage 5 — Grb2–SOS Recruitment & Ras-GTP Switch", "Watch SH2 domains of Grb2 bind the phosphorylated RTK tail, bringing SOS to pry GDP out of membrane-tethered Ras and launch the MAPK cascade."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: G Proteins & GPCRs", "https://pdb101.rcsb.org/motm/58"),
            ("RCSB PDB-101 — Molecule of the Month: Epidermal Growth Factor", "https://pdb101.rcsb.org/motm/126"),
            ("RCSB PDB Structure 3SN6 — Nobel-Prize β₂-AR–Gs Complex", "https://www.rcsb.org/structure/3SN6"),
            ("RCSB PDB Structure 8H36 — Human Adenylyl Cyclase AC9", "https://www.rcsb.org/structure/8H36"),
        ],
    },
    {
        "num": "07",
        "id": "clathrin_endocytosis_snare",
        "folder": "07_clathrin_endocytosis_snare",
        "title": "Clathrin Triskelion Cage, Dynamin Scission Ring & SNARE Membrane Fusion",
        "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane ($10\\text{--}200\\,\\text{nm}$)",
        "scale": "80–100 nm Vesicle Budding & Fusion Machinery",
        "category": "Vesicular Trafficking, Endocytosis & Exocytosis",
        "pdb1": "1XI4",
        "pdb1_label": "Clathrin Polyhedral D6 Barrel Cage (1XI4)",
        "pdb2": "1SFC",
        "pdb2_label": "Neuronal 4-Helix SNARE Fusion Complex (1SFC)",
        "overview": (
            "Eukaryotic cells continuously internalize receptors/nutrients (Endocytosis) and secrete neurotransmitters/proteins "
            "(Exocytosis) via two opposing mechanical masterpieces: (1) Clathrin-Mediated Endocytosis: Heterotetrameric AP2 "
            "adaptors bind inner-leaflet PIP₂ and cargo sorting signals (YXXΦ), recruiting three-legged Clathrin Triskelions "
            "(3 heavy chains + 3 light chains) that polymerize into a curved polyhedral lattice of hexagons and 12 pentagons. "
            "Once invaginated into a deeply constricted neck, the mechanochemical GTPase Dynamin self-assembles into a helical "
            "collar ring around the lipid stalk and hydrolyzes GTP to twist and sever the vesicle free; (2) SNARE-Mediated Fusion: "
            "After Hsc70/Auxilin uncoats the vesicle, vesicle v-SNARE (Synaptobrevin/VAMP2) pairs with target-membrane t-SNAREs "
            "(Syntaxin-1 + SNAP-25) to wind from N-terminus to C-terminus into an ultra-stable 4-helix bundle zipper (releasing "
            "~35 k_BT of mechanical energy), overcoming hydration repulsion to fuse the two bilayers upon Ca²⁺–Synaptotagmin trigger."
        ),
        "behavior": (
            "Interactive dual-stage trafficking scene: on the left, a Clathrin triskelion soccer-ball cage buds from the plasma "
            "membrane with a helical Dynamin GTPase ring constricting the neck; on the right, a synaptic/secretory vesicle uses "
            "4-helix SNARE bundles + Complexin/Synaptotagmin to fuse with a target membrane and after fusion is pried apart by the "
            "hexameric AAA+ NSF–α-SNAP ring."
        ),
        "upstream": "Ligand-bound LDL/Transferrin receptors & β-Arrestin-tagged GPCRs (Scenario 06) + Golgi/ER secretory vesicles (Scenario 15).",
        "inputs": [
            "Plasma membrane PIP₂ + Cargo receptors (LDL-R, Transferrin-R, GPCRs)",
            "Cytosolic Clathrin triskelions, AP2 adaptors, and Dynamin-1 + GTP (for scission)",
            "v-SNARE (VAMP2) + t-SNAREs (Syntaxin-1, SNAP-25) + Ca²⁺ influx (for Synaptotagmin trigger) + ATP (for NSF recycling)",
        ],
        "outputs": [
            "Internalized Early Endosomal Vesicles (delivering LDL cholesterol & iron to the cell)",
            "Exocytosed Neurotransmitters / Hormones / Secreted Proteins into extracellular space",
            "Recycled cis-SNARE monomers (unwound by hexameric NSF ATPase)",
        ],
        "downstream": "Internalized endosomes mature and fuse with Lysosomes (Scenario 16) or recycle to the Plasma Membrane (Scenario 04); coated vesicles travel along Microtubule Kinesin/Dynein tracks (Scenario 10).",
        "energy_currency": "GTP Hydrolysis (Dynamin neck scission) + SNARE 4-Helix Zipper Folding Energy (~65 k_BT) + ATP Hydrolysis (Hsc70 uncoating & NSF SNARE disassembly)",
        "turnover": "Clathrin pit matures in ~30–60 s; Dynamin scission in ~100 ms; Ca²⁺-triggered SNARE synaptic fusion in <1 ms",
        "layout_mode": "single_membrane_span",
        "pieces": [
            ("Piece_Ves_ClathrinCage", "Clathrin Polyhedral Triskelion Cage (Hexagons & 12 Pentagons)", "1XI4 Clathrin Heavy/Light Chains", "#9D4EDD", "Clathrin Cage Violet", "(-5.0, -4.5, 0.0)"),
            ("Piece_Ves_AP2Cargo", "AP2 Adaptor Complex & Cargo Receptor (LDL/Transferrin)", "2VGL AP2 Core", "#00B4D8", "Adaptor Cerulean", "(-5.0, -2.0, +2.0)"),
            ("Piece_Ves_DynaminRing", "Dynamin-1 Helical GTPase Scission Collar Ring", "6DLU Dynamin Polymer Ring", "#FFB703", "GTPase Ring Gold", "(-5.0, -0.5, 0.0)"),
            ("Piece_Ves_SNAREZipper", "4-Helix Trans-SNARE Bundle (Synaptobrevin, Syntaxin-1, SNAP-25)", "1SFC / 3HD7 SNARE Complex", "#E63946", "SNARE Zipper Crimson", "(+4.5, -1.5, +1.5)"),
            ("Piece_Ves_SynaptotagminNSF", "Ca²⁺ Sensor Synaptotagmin-1 & Hexameric AAA+ NSF Unwindase Ring", "2R83 Synaptotagmin + 3J96 NSF", "#F77F00", "AAA+ Ring Warm Amber", "(+5.0, -4.0, -2.0)"),
            ("Piece_Ves_PlasmaMembrane", "Plasma Membrane & Budding/Fusing Vesicle Bilayers", "POPC / PIP₂ Curved Bilayers", "#06D6A0", "Membrane Jade", "(0.0, +1.5, 0.0)"),
        ],
        "hud_controls": [
            ("vesicle_cycle_stage", "Endocytosis & Fusion Stage", "0.0 (Pit Invagination) → 0.5 (Dynamin GTP Scission) → 1.0 (SNARE Zipper Fusion)"),
            ("ca2_fusion_trigger", "Cytosolic Ca²⁺ Pulse (µM)", "0.1 µM (Clamped Hemifusion) to 20 µM (Synaptotagmin Full Pore Opening)"),
            ("dynasore_inhibitor", "Dynamin GTPase Inhibitor (Dynasore)", "Blocks neck scission, trapping collared clathrin buds"),
        ],
        "stages": [
            ("Stage 1 — AP2 Recruitment & Clathrin Triskelion Lattice", "Watch AP2 adaptors bind inner-leaflet PIP₂ and cargo tails, nucleating three-legged Clathrin triskelions into a curved pentagonal/hexagonal basket."),
            ("Stage 2 — The Dynamin Helical Collar & GTP Pinch-Off", "Focus on the narrow membrane neck where Dynamin GTPase monomers polymerize into a spiral ring and hydrolyze GTP to constrict and sever the stalk."),
            ("Stage 3 — Hsc70/Auxilin Uncoating", "Once free in the cytosol, Auxilin recruits Hsc70 ATPase to disassemble the clathrin cage for reuse."),
            ("Stage 4 — Trans-SNARE 4-Helix Zipper Docking", "Move to the exocytic docking site: vesicle v-SNARE intertwines with plasma-membrane t-SNAREs from N- to C-terminus, winching the two bilayers within 1 nm."),
            ("Stage 5 — Ca²⁺-Synaptotagmin Fusion & NSF Recycling", "Trigger a Ca²⁺ pulse to insert Synaptotagmin loops into the lipid bilayer, opening the fusion pore, followed by hexameric NSF ATPase unwinding the spent cis-SNAREs."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Clathrin", "https://pdb101.rcsb.org/motm/89"),
            ("RCSB PDB-101 — Molecule of the Month: SNARE Proteins", "https://pdb101.rcsb.org/motm/166"),
            ("RCSB PDB Structure 1XI4 — Clathrin D6 Barrel", "https://www.rcsb.org/structure/1XI4"),
            ("RCSB PDB Structure 1SFC — Neuronal Synaptic Fusion Complex", "https://www.rcsb.org/structure/1SFC"),
        ],
    },
    {
        "num": "08",
        "id": "cell_junctions_plasmodesmata",
        "folder": "08_cell_junctions_plasmodesmata",
        "title": "Intercellular Junctions: Tight, Adherens, Desmosomes, Gap Junction Connexons & Plant Plasmodesmata",
        "tier": "Tier 2 — Cell Surface, ECM & Plasma Membrane ($10\\text{--}200\\,\\text{nm}$)",
        "scale": "40 nm Cell–Cell Intercellular Interface",
        "category": "Multicellular Tissue Architecture & Direct Coupling",
        "pdb1": "2ZW3",
        "pdb1_label": "Human Connexin-26 Gap Junction Dodecameric Channel (2ZW3)",
        "pdb2": "3Q2V",
        "pdb2_label": "E-Cadherin Extracellular Adhesive Zipper (3Q2V)",
        "overview": (
            "Multicellular eukaryotes weld individual cells into polarized epithelia, beating heart muscle, and integrated plant "
            "tissues using specialized intercellular junctions: (1) Tight Junctions (Claudin + Occludin strands linked to ZO-1) "
            "seal the apical paracellular space; (2) Adherens Junctions & Desmosomes use Ca²⁺-stiffened Cadherin ectodomains "
            "(E-cadherin / Desmoglein) that swap N-terminal Trp2 side-chains across the 25 nm intercellular cleft, linking to "
            "cortical F-Actin (via α/β-Catenin) or Keratin Intermediate Filaments (via Desmoplakin); (3) Gap Junctions are "
            "dodecameric pores formed by two docked hexameric Connexon rings (6 Connexin subunits per cell) that directly pass "
            "ions, ATP, IP₃, and cAMP (<1 kDa) between animal cytoplasms; and (4) Plant Plasmodesmata are 40 nm plasma-membrane-lined "
            "tunnels traversing the cellulose cell wall with an axial ER Desmotubule, gated by callose (β-1,3-glucan) sphincters."
        ),
        "behavior": (
            "Shows two adjacent lateral plasma membranes bridged by Claudin tight seals, Ca²⁺-stiffened E-Cadherin adherens "
            "zippers, a dodecameric Connexin-26 Gap Junction channel ring (2ZW3), and an inset of a Plant Plasmodesma tunnel "
            "with its central ER desmotubule and callose collar."
        ),
        "upstream": "Rough ER/Golgi membrane trafficking (13/15) + Cytoskeletal F-Actin (09) & Keratin Intermediate Filaments (11).",
        "inputs": [
            "Extracellular Ca²⁺ ions (~1–2 mM stiffening the 5 EC domains of Cadherins)",
            "Intercellular signaling solutes (<1 kDa: Ca²⁺, IP₃, cAMP, ATP, K⁺) flowing through Gap Junctions & Plasmodesmata",
            "UDP-Glucose (for Callose Synthase gating of plant Plasmodesmata)",
        ],
        "outputs": [
            "Paracellular barrier integrity (Tight Junction trans-epithelial electrical resistance)",
            "Mechanical tissue cohesion across epithelia and myocardium (Adherens & Desmosomes)",
            "Synchronized electrical action potentials & metabolic coupling across neighboring cells (Gap Junctions / Plasmodesmata)",
        ],
        "downstream": "Transmits mechanical tension to Actin (09) and Keratin (11), and propagates IP₃/Ca²⁺/cAMP waves generated by GPCRs (06) and Smooth ER (14) directly into adjacent cells.",
        "energy_currency": "Ca²⁺ Coordination Energy (Cadherin EC-domain rigidification) + Electrochemical Solute Gradients across Connexons",
        "turnover": "Single Gap Junction channel conductance ~100 pS (~10⁷ ions/sec); closes within milliseconds upon intracellular H⁺ or high Ca²⁺ overload",
        "layout_mode": "dual_membrane_span",
        "pieces": [
            ("Piece_Junc_ClaudinTight", "Tight Junction Claudin-15 Strand & ZO-1 Scaffold", "4P79 Claudin Polymer", "#00B4D8", "Tight Seal Cerulean", "(-6.0, +2.0, 0.0)"),
            ("Piece_Junc_CadherinZipper", "E-Cadherin Trans-Dimer Zipper (EC1–EC5 + Ca²⁺ Ions + Catenins)", "3Q2V E-Cadherin Ectodomain", "#F77F00", "Cadherin Amber", "(-1.5, +0.5, +1.5)"),
            ("Piece_Junc_ConnexonRings", "Gap Junction Dodecamer (Two Docked Hexameric Connexin-26 Rings)", "2ZW3 / 7QET Connexin-26", "#FFB703", "Connexon Ring Gold", "(+3.0, 0.0, 0.0)"),
            ("Piece_Junc_Plasmodesma", "Plant Plasmodesma Tunnel, ER Desmotubule & Callose Sphincter", "Cellulose Wall + Desmotubule", "#9D4EDD", "Plasmodesma Violet", "(+7.0, 0.0, -1.5)"),
            ("Piece_Junc_Cell1Membrane", "Cell A Lateral Plasma Membrane & Actin/Keratin Anchors", "Lipid Bilayer + α/β-Catenin", "#06D6A0", "Cell A Membrane Jade", "(0.0, +4.5, 0.0)"),
            ("Piece_Junc_Cell2Membrane", "Cell B Opposing Plasma Membrane & Desmoplakin Plaque", "Lipid Bilayer + Desmoplakin", "#0077B6", "Cell B Membrane Blue", "(0.0, -4.5, 0.0)"),
        ],
        "hud_controls": [
            ("extracellular_ca2", "Extracellular Ca²⁺ Concentration (Cadherin Rigidity)", "0 mM (EGTA — Cadherins collapse & unzip) to 2.0 mM (Rigid Adhesive Zipper)"),
            ("damage_ca_ph_gate", "Intracellular Injury Gate (High Ca²⁺ / Low pH)", "Open Coupled Connexons vs. Iris-Closed Isolated Connexons"),
            ("callose_sphincter", "Plant Plasmodesmata Callose Collar", "Open Symplastic Transport vs. Callose-Plugged Defense State"),
        ],
        "stages": [
            ("Stage 1 — Apical Tight Junction Paracellular Seal", "Inspect the kissing strands of Claudin and Occludin stitching two neighboring plasma membranes together to block paracellular leakage."),
            ("Stage 2 — Ca²⁺-Stiffened Cadherin Zippers", "Zoom into the Adherens Junction where 12 Ca²⁺ ions rigidify the five EC domains of E-Cadherin so opposing cells can swap Trp2 side-chains and link to F-actin via α/β-catenin."),
            ("Stage 3 — Hexameric Connexon Gap Junction Rings", "Fly through the center of the dodecameric Connexin-26 channel (two docked 6-subunit rings) as cAMP, IP₃, and K⁺ ions stream directly between cytoplasms."),
            ("Stage 4 — Emergency Iris Closure of Gap Junctions", "Simulate a dying neighbor cell (high cytosolic Ca²⁺ and H⁺) and watch the six N-terminal helices of the Connexon ring plug the central pore."),
            ("Stage 5 — Plant Plasmodesmata & the ER Desmotubule", "Compare animal Gap Junctions with a plant Plasmodesma tunnel crossing the cellulose wall with a continuous ER rod (desmotubule) through its core."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Cadherin", "https://pdb101.rcsb.org/motm/92"),
            ("RCSB PDB Structure 2ZW3 — Human Connexin-26 Gap Junction Channel", "https://www.rcsb.org/structure/2ZW3"),
            ("RCSB PDB Structure 3Q2V — E-Cadherin Ectodomain", "https://www.rcsb.org/structure/3Q2V"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Cell Junctions", "https://www.ncbi.nlm.nih.gov/books/NBK26857/"),
        ],
    },
    {
        "num": "09",
        "id": "actin_myosin_sarcomere",
        "folder": "09_actin_myosin_sarcomere",
        "title": "F-Actin Double-Helical Microfilaments, Arp2/3 Branching & Myosin Power Stroke",
        "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers ($20\\text{--}500\\,\\text{nm}$)",
        "scale": "35–100 nm Contractile & Branched Actin Machinery",
        "category": "Cytoskeletal Dynamics & Mechanochemical Motors",
        "pdb1": "6X5Z",
        "pdb1_label": "Cardiac Actomyosin–Tropomyosin–Troponin Complex (6X5Z)",
        "pdb2": "6UHC",
        "pdb2_label": "Active Arp2/3 Complex Nucleating 70° Actin Branch (6UHC)",
        "overview": (
            "Actin is the most abundant protein in many eukaryotic cells, assembling from 42 kDa globular ATP-bound G-Actin "
            "monomers into polar, right-handed double-helical F-Actin microfilaments (7 nm diameter, 36 nm half-pitch) with a "
            "fast-growing Barbed (+)-end and a slow-pointed (-)-end. Two distinct nanomachines harness F-Actin: (1) At the leading "
            "edge of crawling cells (lamellipodia), WASP-activated Arp2/3 Complex (containing actin-related proteins Arp2 and Arp3) "
            "clamps onto the side of a mother filament to nucleate a daughter F-Actin branch at an exact 70° angle, pushing the "
            "plasma membrane forward; (2) In muscle sarcomeres and stress fibers, Tropomyosin cables and Ca²⁺-binding Troponin "
            "(TnC/TnI/TnT) gate access for Myosin II / Myosin V motor heads, which execute the Lymn–Taylor ATPase cycle (ATP binding "
            "detaches the head → ATP hydrolysis cocks the lever arm by 60° → actin rebinding + Pᵢ release fires the 10 nm Power Stroke)."
        ),
        "behavior": (
            "Combines the polar F-Actin double helix decorated with Tropomyosin/Troponin and a two-headed Myosin motor walking "
            "toward the barbed (+)-end alongside an Arp2/3 70° branch junction. Users can control Ca²⁺ concentration (to roll "
            "Tropomyosin out of the myosin-binding groove) and ATP concentration (to prevent rigor mortis locking)."
        ),
        "upstream": "TRiC/CCT chaperonin folding of G-actin (Scenario 34) + Mitochondrial ATP (Scenario 21) + Smooth ER / Sarcoplasmic Reticulum Ca²⁺ release (Scenario 14).",
        "inputs": [
            "ATP-bound G-Actin monomers + Profilin (feeding barbed (+)-end polymerization)",
            "Cytosolic ATP + Mg²⁺ (fueling the Myosin motor head ATPase pocket)",
            "Cytosolic Ca²⁺ pulse (binding Troponin-C to shift Tropomyosin) + WASP/WAVE (activating Arp2/3)",
        ],
        "outputs": [
            "Mechanical contractile force (~3–5 pN and ~5–10 nm displacement per Myosin power stroke)",
            "70° dendritic actin meshwork pushing the leading-edge plasma membrane (lamellipodia & endocytic invaginations)",
            "ADP + Pᵢ + Depolymerized ADP-G-Actin (severed by Cofilin and recharged by Profilin)",
        ],
        "downstream": "Generates the pulling tension on Integrin Focal Adhesions (Scenario 03) and Cadherin Adherens Junctions (Scenario 08), drives Clathrin pit invagination (Scenario 07), and pinches the Mitotic Cleavage Furrow (Scenario 35).",
        "energy_currency": "ATP Hydrolysis (both in F-Actin treadmilling ATP→ADP-Pᵢ→ADP and Myosin lever-arm cocking)",
        "turnover": "Myosin II: ~5–20 ATP/sec per head; Arp2/3 lamellipodial polymerization: ~100–500 monomers/sec at (+)-end",
        "layout_mode": "linear_filament",
        "pieces": [
            ("Piece_Act_FActinHelix", "Polar Double-Helical F-Actin Filament (Barbed + to Pointed - End)", "6X5Z / 3J8I F-Actin", "#3A86FF", "Actin Cobalt Blue", "(0.0, 0.0, 0.0)"),
            ("Piece_Act_TropomyosinTroponin", "Tropomyosin Coiled-Coil Cable & Ca²⁺-Sensing Troponin (TnC/TnI/TnT)", "6X5Z Tropomyosin + Troponin", "#00B4D8", "Regulatory Cable Cerulean", "(0.0, +2.0, +2.0)"),
            ("Piece_Act_MyosinHeads", "Myosin Motor Domain, Converter & Light-Chain Lever Arm", "6X5Z / 1OE9 Myosin S1", "#E63946", "Motor Head Crimson", "(+2.5, +4.0, 0.0)"),
            ("Piece_Act_Arp23Branch", "Arp2/3 7-Subunit Complex Nucleating 70° Daughter Actin Branch", "6UHC Arp2/3 Branch Junction", "#FFB703", "Branch Nucleator Gold", "(-5.5, -3.5, +2.0)"),
            ("Piece_Act_DaughterFilament", "70° Branched Daughter F-Actin Filament & Capping Protein", "6UHC Daughter Actin", "#9D4EDD", "Daughter Branch Violet", "(-7.5, -6.0, +3.0)"),
            ("Piece_Act_ProfilinCofilin", "G-Actin–Profilin Delivery & Cofilin Severing Factors", "2BTF Profilin-Actin", "#06D6A0", "Remodeling Factor Jade", "(+6.5, -3.0, -2.0)"),
        ],
        "hud_controls": [
            ("ca2_troponin_switch", "Sarcoplasmic Ca²⁺ Level (µM)", "0.05 µM (Blocked Tropomyosin State) to 20 µM (Open Actomyosin Contraction)"),
            ("atp_rigor_slider", "Myosin ATP Concentration", "0 mM (Locked Rigor State) to 5 mM (Rapid Lever-Arm Cycling)"),
            ("arp23_branching", "WASP–Arp2/3 Branching Activity", "Linear Stress Fiber vs. 70° Dendritic Lamellipodia Network"),
        ],
        "stages": [
            ("Stage 1 — F-Actin Treadmilling & Polarity", "Examine the right-handed double-helical F-Actin polymer: ATP-G-actin adds rapidly at the barbed (+)-end, hydrolyzes ATP to ADP, and dissociates with Cofilin at the pointed (-)-end."),
            ("Stage 2 — Arp2/3 70° Dendritic Branching", "Zoom to the Arp2/3 complex where Arp2 and Arp3 mimic a barbed-end dimer on the side of a mother filament, sprouting a daughter branch at 70°."),
            ("Stage 3 — Ca²⁺–Troponin Unlocking of Tropomyosin", "Flood the filament with Ca²⁺: Troponin-C binds 4 Ca²⁺ ions, pulling Troponin-I so the Tropomyosin cable rolls azimuthally to expose Myosin-binding sites on actin."),
            ("Stage 4 — Myosin ATP Binding & Lever-Arm Cocking", "Watch ATP bind the Myosin cleft, detaching the head from actin; hydrolysis to ADP·Pᵢ swings the converter and light-chain lever arm into the cocked pre-power-stroke state."),
            ("Stage 5 — Phosphate Release & The 10 nm Power Stroke", "Myosin weakly rebinds a new actin subunit; Pᵢ release locks the cleft shut and snaps the lever arm forward by 10 nm, pulling the actin filament."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Actin", "https://pdb101.rcsb.org/motm/19"),
            ("RCSB PDB-101 — Molecule of the Month: Myosin", "https://pdb101.rcsb.org/motm/18"),
            ("RCSB PDB Structure 6X5Z — Native Cardiac Thin Filament with Myosin", "https://www.rcsb.org/structure/6X5Z"),
            ("RCSB PDB Structure 6UHC — Active Arp2/3 Actin Branch Junction", "https://www.rcsb.org/structure/6UHC"),
        ],
    },
    {
        "num": "10",
        "id": "microtubules_centrosome_motors",
        "folder": "10_microtubules_centrosome_motors",
        "title": "Microtubule 13-Protofilament Hollow Tube, Centrosome (γ-TuRC) & Kinesin / Dynein Walkers",
        "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers ($20\\text{--}500\\,\\text{nm}$)",
        "scale": "25 nm Diameter Hollow Cylinder & Motor Trucks",
        "category": "Intracellular Highway Network & Bidirectional Motors",
        "pdb1": "6U42",
        "pdb1_label": "Human γ-Tubulin Ring Complex γ-TuRC (6U42)",
        "pdb2": "4HNA",
        "pdb2_label": "Kinesin-1 Motor Domain Bound to α/β-Tubulin (4HNA / 7Z8G)",
        "overview": (
            "Microtubules are stiff, hollow 25 nm cylindrical highways assembled from 13 parallel protofilaments of α/β-Tubulin "
            "heterodimers. In animal cells, their (-)-ends are nucleated and capped at the perinuclear Centrosome by the 14-spoked "
            "γ-Tubulin Ring Complex (γ-TuRC, 2.2 MDa) surrounding a pair of orthogonal 9×3 triplet Centrioles, while their (+)-ends "
            "radiate outward toward the plasma membrane. As long as newly added β-tubulin retains GTP (the 'GTP Cap'), the tube "
            "grows straight; if hydrolysis to GDP catches up to the tip, protofilaments peel outward like curved ram's horns in "
            "rapid 'Catastrophe'. Two opposing ATP-powered motor families walk along the outer protofilament ridges in 8.2 nm steps: "
            "(1) Kinesin-1 walks hand-over-hand toward the peripheral (+)-end (anterograde); (2) Cytoplasmic Dynein-1 (a giant "
            "6-AAA+ ring motor coupled to the Dynactin ARP1 filament and BICD2 adaptor) walks toward the central (-)-end (retrograde)."
        ),
        "behavior": (
            "Shows a 13-protofilament microtubule nucleated at its (-)-end by the cone-shaped γ-TuRC ring (6U42), with a two-headed "
            "Kinesin-1 dimer stepping toward the (+)-end on one protofilament and a Cytoplasmic Dynein–Dynactin AAA+ ring complex "
            "hauling a cargo vesicle toward the (-)-end on another."
        ),
        "upstream": "TRiC/CCT chaperonin tubulin folding (Scenario 34) + Mitochondrial ATP & GTP (Scenario 21) + Golgi/ER/Endosome cargo vesicles (Scenarios 07, 13, 15).",
        "inputs": [
            "GTP-bound α/β-Tubulin heterodimers (for (+)-end polymerization)",
            "Cytosolic ATP (1 ATP per 8.2 nm step of Kinesin-1 or Dynein-1)",
            "Membrane-bound Cargo Vesicles (Rab GTPase + BICD2/Adaptor tethered to Kinesin tails or Dynactin)",
        ],
        "outputs": [
            "Long-range anterograde transport (Golgi → Plasma Membrane / Axon terminal at ~1 µm/s via Kinesin)",
            "Long-range retrograde transport (Endosomes / ER-to-Golgi / Signaling endosomes → Centrosome via Dynein)",
            "Dynamic mitotic spindle fibers for chromosome segregation (Scenario 35)",
        ],
        "downstream": "Positions the ER (13), Golgi (15), Lysosomes (16), and Mitochondria (19); forms the 9+2 Axoneme of Cilia/Flagella (Scenario 12) and the Mitotic Spindle (Scenario 35).",
        "energy_currency": "GTP Hydrolysis (β-Tubulin E-site dynamic instability) + ATP Hydrolysis (Kinesin neck-linker docking & Dynein AAA1 ring power stroke)",
        "turnover": "Kinesin-1 & Dynein-1 take ~100 steps/sec (~800 nm/s velocity, 1 ATP per 8.2 nm tubulin dimer step)",
        "layout_mode": "linear_filament",
        "pieces": [
            ("Piece_MT_GammaTuRC", "γ-Tubulin Ring Complex (γ-TuRC 14-Spoke Nucleation Cone) & Centriole", "6U42 γ-TuRC", "#9D4EDD", "Nucleator Ring Violet", "(-7.0, 0.0, 0.0)"),
            ("Piece_MT_ProtofilamentTube", "13-Protofilament α/β-Tubulin Hollow Cylinder (25 nm Outer / 15 nm Inner)", "3J6F / 6EVW Microtubule Lattice", "#3A86FF", "Tubulin Lattice Blue", "(0.0, 0.0, 0.0)"),
            ("Piece_MT_GTPCapHorns", "Dynamic (+)-End GTP Cap & Peeling GDP Ram's Horn Protofilaments", "GTP vs. GDP-Tubulin Tip", "#06D6A0", "GTP Cap Jade", "(+7.5, +1.0, 0.0)"),
            ("Piece_MT_Kinesin1Walker", "Kinesin-1 Dimer (Two Motor Heads, Neck Linker, Coiled Stalk & Cargo)", "4HNA / 3KIN Kinesin-1", "#FFB703", "Anterograde Motor Gold", "(-1.0, +4.0, +2.0)"),
            ("Piece_MT_DyneinDynactin", "Cytoplasmic Dynein-1 (Hexameric AAA+ Ring, Stalk/MTBD & Dynactin)", "7Z8G Dynein–Dynactin–BICD2", "#E63946", "Retrograde AAA+ Ring Crimson", "(+2.5, -4.5, +2.0)"),
            ("Piece_MT_CargoVesicle", "Tethered Rab-Decorated Secretory Cargo Vesicle", "Phospholipid Vesicle + Rab", "#00B4D8", "Cargo Vesicle Cerulean", "(+1.0, +6.5, +3.0)"),
        ],
        "hud_controls": [
            ("gtp_cap_stability", "(+)-End GTP Cap State (Polymerization Rescue ↔ Catastrophe Peel)", "0.0 (Catastrophe Ram's Horns) to 1.0 (Intact GTP Cap Growth)"),
            ("motor_traffic_speed", "Kinesin (+)-End & Dynein (-)-End Stepping Speed", "0.0x to 2.5x (shows 8.2 nm hand-over-hand stepping)"),
            ("taxol_colchicine", "Chemotherapy Drug Toggle", "Normal | Paclitaxel (Taxol stabilizes lattice) | Colchicine (Depolymerizes)"),
        ],
        "stages": [
            ("Stage 1 — Nucleation at the Centrosome γ-TuRC Ring", "Start at the (-)-end where the 14-spoked γ-Tubulin Ring Complex (γ-TuRC) acts as a helical template to seed 13 protofilaments."),
            ("Stage 2 — The 13-Protofilament Lattice & Seam", "Inspect how α-tubulin (purple-blue) and β-tubulin (cyan-blue) heterodimers stack head-to-tail into a stiff 25 nm hollow cylinder."),
            ("Stage 3 — Dynamic Instability: GTP Cap vs. Catastrophe", "Watch β-tubulin hydrolyze GTP to GDP in the lattice: when the protective GTP cap at the (+)-end is lost, strained GDP protofilaments curl outward and peel apart."),
            ("Stage 4 — Kinesin-1 Hand-Over-Hand Anterograde Walking", "Zoom to Kinesin-1: ATP binding to the leading head zips its 14-residue neck linker forward, throwing the trailing head 16.4 nm ahead to the next β-tubulin site (+8.2 nm net step)."),
            ("Stage 5 — Dynein–Dynactin AAA+ Ring Retrograde Hauling", "Follow Cytoplasmic Dynein-1 using ATP hydrolysis in its AAA1 hexameric ring to swing its coiled-coil stalk and pull cargo vesicles toward the (-)-end."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Microtubules", "https://pdb101.rcsb.org/motm/175"),
            ("RCSB PDB-101 — Molecule of the Month: Kinesin", "https://pdb101.rcsb.org/motm/64"),
            ("RCSB PDB-101 — Molecule of the Month: Dynein", "https://pdb101.rcsb.org/motm/214"),
            ("RCSB PDB Structure 6U42 — Human γ-Tubulin Ring Complex", "https://www.rcsb.org/structure/6U42"),
        ],
    },
    {
        "num": "11",
        "id": "intermediate_filaments_lamins",
        "folder": "11_intermediate_filaments_lamins",
        "title": "Intermediate Filaments: Coiled-Coil Keratin Ropes & Nuclear Lamin Meshwork",
        "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers ($20\\text{--}500\\,\\text{nm}$)",
        "scale": "10 nm Diameter High-Tensile Coiled-Coil Rope",
        "category": "Cytoskeletal Mechanical Resilience & Nuclear Lamina",
        "pdb1": "6JLB",
        "pdb1_label": "Nuclear Lamin A/C Coiled-Coil Tetramer Complex (6JLB)",
        "pdb2": "3TNU",
        "pdb2_label": "Keratin 5 / Keratin 14 Heterodimeric Coiled-Coil (3TNU)",
        "overview": (
            "Unlike F-Actin (7 nm) and Microtubules (25 nm)—which are built from globular nucleotide-hydrolyzing monomers and "
            "have structural polarity—Intermediate Filaments (IFs, 10 nm diameter) assemble spontaneously without ATP or GTP "
            "from elongated α-helical rod monomers (310-residue heptad repeats). Two parallel monomers wind into a left-handed "
            "Coiled-Coil Dimer; two dimers associate antiparallel and staggered into a non-polar Tetramer; eight tetramers pack "
            "laterally into a 60 nm Unit-Length Filament (ULF), which anneals end-to-end and radially compacts into an unbreakable "
            "10 nm rope capable of stretching up to 300% of its resting length without snapping! In the cytoplasm, Keratin "
            "(epithelia), Vimentin (mesenchyme), and Neurofilaments (axons) absorb extreme mechanical stress via Desmosomes; "
            "inside the nucleus, Type V IFs (Lamin A/C and Lamin B1/B2) weave the 3.5 nm thick Nuclear Lamina cage beneath the "
            "inner nuclear membrane."
        ),
        "behavior": (
            "Displays the hierarchical assembly of an Intermediate Filament from single α-helix → parallel coiled-coil dimer → "
            "staggered antiparallel tetramer → 8-tetramer ULF → compacted 10 nm Keratin rope alongside the orthogonal Nuclear "
            "Lamin A/C meshwork (with C-terminal Ig-fold tails) tethered to the inner nuclear envelope."
        ),
        "upstream": "80S Ribosome translation (Scenario 32) + CDK1 mitotic kinases (Scenario 35).",
        "inputs": [
            "Acidic (Type I) & Basic (Type II) Keratin monomers or Vimentin / Nuclear Lamin A/C monomers",
            "Farnesyl lipid anchor (on Lamin B and prelamin A CaaX box for nuclear membrane targeting)",
            "Mitotic CDK1–Cyclin B ATP phosphorylation (to reversibly disassemble the Nuclear Lamina during prophase)",
        ],
        "outputs": [
            "Non-polar 10 nm high-tensile cytoplasmic ropes resisting shear stress up to 3× strain",
            "Nuclear Lamina scaffold anchoring heterochromatin (LADs) and Nuclear Pore Complexes",
            "Reversible mitotic lamina depolymerization upon Ser22/Ser392 phosphorylation",
        ],
        "downstream": "Anchors into Desmosomes and Hemidesmosomes at the Plasma Membrane (Scenario 08) and forms the structural shell of the Nucleus (Scenario 26) and Chromatin LADs (Scenario 28).",
        "energy_currency": "Spontaneous Hydrophobic Heptad Coiled-Coil Self-Assembly (ΔG < 0 without NTP) + ATP (CDK1 mitotic phosphorylation switch)",
        "turnover": "Structurally stable for hours to days in interphase; rapid disassembly in <5 minutes upon mitotic CDK1 phosphorylation",
        "layout_mode": "linear_filament",
        "pieces": [
            ("Piece_IF_CoiledCoilDimer", "Parallel Left-Handed Coiled-Coil Dimer (Heptad Rod 1A–1B–2A–2B)", "3TNU Keratin 5/14 Coiled-Coil", "#00B4D8", "Dimer Rod Cerulean", "(-6.5, +4.0, 0.0)"),
            ("Piece_IF_StaggeredTetramer", "Antiparallel Staggered Non-Polar Tetramer Building Block", "6JLB Lamin / Keratin Tetramer", "#FFB703", "Tetramer Gold", "(-2.0, +4.0, +1.5)"),
            ("Piece_IF_ULF_Cylinder", "8-Tetramer Unit-Length Filament (ULF) Lateral Bundle", "Octameric Tetramer Ring", "#F77F00", "ULF Bundle Amber", "(+3.5, +4.0, 0.0)"),
            ("Piece_IF_Compacted10nmRope", "Compacted 10 nm Cytoplasmic Keratin / Vimentin Rope", "Braided 32-Chain IF Rope", "#3A86FF", "Tensile Rope Cobalt Blue", "(0.0, 0.0, 0.0)"),
            ("Piece_IF_NuclearLaminMesh", "Nuclear Lamin A/C 3.5 nm Orthogonal Mesh & Ig-Fold Tails", "6JLB + 1IFR Lamin Ig Domain", "#9D4EDD", "Nuclear Lamina Violet", "(0.0, -4.0, 0.0)"),
            ("Piece_IF_InnerNuclearMembrane", "Inner Nuclear Membrane with Emerin/SUN LINC Anchors", "Nuclear Envelope Bilayer", "#06D6A0", "Nuclear Membrane Jade", "(0.0, -6.0, -2.0)"),
        ],
        "hud_controls": [
            ("mechanical_strain_pct", "Mechanical Tensile Stretch (%)", "0% (Resting Coiled-Coil) to 250% (α-Helix → β-Sheet Strain-Stiffening without Rupture)"),
            ("cdk1_mitotic_phospho", "CDK1 Mitotic Phosphorylation (Ser22/Ser392)", "Interphase Intact Nuclear Lamina vs. Mitotic Depolymerized Tetramers"),
            ("progeria_lmna_mutation", "HGPS Progeria (Lamin Δ50) Toggle", "Normal Mature Lamin A vs. Permanently Farnesylated Progerin Blebbing"),
        ],
        "stages": [
            ("Stage 1 — Heptad Repeat Monomers to Coiled-Coil Dimers", "Inspect how hydrophobic residues at positions 'a' and 'd' of the 7-residue heptad repeat zip two parallel α-helices into a coiled-coil dimer."),
            ("Stage 2 — Antiparallel Staggered Tetramer (Loss of Polarity)", "Two coiled-coil dimers associate in opposite orientations, creating a symmetric, non-polar tetramer with no (+) or (-) end."),
            ("Stage 3 — Lateral Packing into 10 nm Ropes", "Eight tetramers wrap into a hollow Unit-Length Filament (ULF) and radially compact into a 32-strand 10 nm Keratin cable."),
            ("Stage 4 — Extreme Strain-Stiffening Elasticity", "Pull the filament to 250% length: unlike brittle microtubules that snap at 50% strain, IF coiled-coils unwind into β-sheets to absorb massive mechanical energy."),
            ("Stage 5 — Nuclear Lamina Mesh & Mitotic CDK1 Disassembly", "Examine the nuclear Lamin A/C meshwork (with globular Ig-fold tails) and trigger CDK1 phosphorylation to dissolve the nuclear cage for mitosis."),
        ],
        "resources": [
            ("RCSB PDB Structure 6JLB — Human Nuclear Lamin A/C Coiled-Coil", "https://www.rcsb.org/structure/6JLB"),
            ("RCSB PDB Structure 3TNU — Keratin 5/14 Heterodimer", "https://www.rcsb.org/structure/3TNU"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Intermediate Filaments", "https://www.ncbi.nlm.nih.gov/books/NBK26862/"),
            ("Cold Spring Harbor Perspectives — Intermediate Filaments & Nuclear Lamins", "https://cshperspectives.cshlp.org/content/8/11/a018242.full"),
        ],
    },
    {
        "num": "12",
        "id": "eukaryotic_cilium_axoneme",
        "folder": "12_eukaryotic_cilium_axoneme",
        "title": "Eukaryotic 9+2 Motile Cilium / Flagellum Axoneme & Intraflagellar Transport (IFT)",
        "tier": "Tier 3 — Cytoskeleton Highways, Cilia & Molecular Walkers ($20\\text{--}500\\,\\text{nm}$)",
        "scale": "250 nm Diameter × 10 µm 9+2 Microtubule Axoneme",
        "category": "Eukaryotic Whip-Like Motility & Sensory Organelle",
        "pdb1": "8J07",
        "pdb1_label": "Eukaryotic 96-nm Axonemal Doublet Repeat with Dynein Arms (8J07)",
        "pdb2": "8B6X",
        "pdb2_label": "Anterograde Intraflagellar Transport IFT-A/IFT-B Train (8B6X)",
        "overview": (
            "Whereas the bacterial flagellum (Prokaryote Scenario 02) is a passive extracellular protein propeller spun at its "
            "base by a proton-driven rotary motor, the Eukaryotic Motile Cilium / Flagellum is a membrane-enclosed cytoplasmic "
            "extension containing the breathtaking 250 nm '9+2 Axoneme' (>600 proteins). Anchored at the cell surface by a "
            "9×3 triplet Basal Body (centriole) and gated by the Y-link Transition Zone, the axoneme consists of 9 outer "
            "Microtubule Doublets (each with a complete 13-protofilament A-tubule and an incomplete 10-protofilament B-tubule) "
            "surrounding a Central Pair of 2 singlet microtubules. Every 24 nm and 96 nm along each A-tubule sit Outer Dynein Arms "
            "(ODA) and Inner Dynein Arms (IDA) that reach across to walk toward the (-)-end of the neighboring B-tubule. Because "
            "elastic Nexin–Dynein Regulatory Complex (N-DRC) links and Radial Spokes tie the doublets together, inter-doublet "
            "sliding is converted into powerful planar whip-like ciliary power/recovery strokes or sinusoidal flagellar waves. "
            "Meanwhile, Intraflagellar Transport (IFT-A/B) trains pulled by Kinesin-2 (up) and Dynein-2 (down) build and maintain the tip."
        ),
        "behavior": (
            "Renders a 3D cross-sectional and longitudinal cutaway of the 9+2 Axoneme inside its ciliary membrane sheath: the "
            "9 outer A/B doublets ring, the 2 central pair singlets, Radial Spokes (RS1–RS3), Nexin N-DRC bridges, Outer/Inner "
            "Axonemal Dynein Arms, and an IFT cargo train riding between the outer doublet and the ciliary membrane."
        ),
        "upstream": "Centrosome Basal Body templating (Scenario 10) + Cytosolic ATP & GTP + Golgi ciliary membrane vesicles (Scenario 15).",
        "inputs": [
            "Cytosolic ATP (~10⁵ ATP/sec per beating cilium fueling Outer/Inner Axonemal Dynein arms & Kinesin-2/Dynein-2 IFT)",
            "α/β-Tubulin & axonemal precursors hauled to the (+)-end tip by Anterograde IFT-B trains",
            "Ca²⁺ & cAMP second-messenger signals modulating beat frequency and waveform",
        ],
        "outputs": [
            "Hydrodynamic fluid propulsion (mucociliary clearance in airways at 15–30 Hz; sperm flagellar swimming at ~50 µm/s)",
            "Sensory signaling (in 9+0 non-motile Primary Cilia hosting Hedgehog Patched/Smoothened GPCR cascades)",
            "Recycled ciliary turnover products returned to the cell body by Retrograde Dynein-2 IFT-A trains",
        ],
        "downstream": "Drives whole-cell motility or extracellular fluid flow across the Plasma Membrane (Scenario 01/04) and relays Primary Cilium Hedgehog/Gli transcription factors to the Nucleus (Scenario 26/30).",
        "energy_currency": "ATP Hydrolysis (Axonemal Outer/Inner Dynein AAA+ rings + IFT Kinesin-2 / Dynein-2 motors)",
        "turnover": "Ciliary beat frequency 15–60 Hz; IFT anterograde velocity ~2.0 µm/s, retrograde velocity ~3.0 µm/s",
        "layout_mode": "ring_complex",
        "pieces": [
            ("Piece_Cil_OuterDoublets9", "Ring of 9 Outer Microtubule Doublets (13-PF A-Tubule + 10-PF B-Tubule)", "8J07 Outer Doublet Ring", "#3A86FF", "Doublet Ring Cobalt Blue", "(0.0, 0.0, 0.0)"),
            ("Piece_Cil_CentralPair2", "Central Pair Apparatus (C1 & C2 Singlet Microtubules + Projections)", "7RRO Central Pair", "#9D4EDD", "Central Pair Violet", "(0.0, 0.0, +4.0)"),
            ("Piece_Cil_DyneinArms", "Outer (ODA) & Inner (IDA) Axonemal Dynein Motor Arms", "8J07 Axonemal Dyneins", "#E63946", "Dynein Motor Crimson", "(+4.5, +2.0, +1.5)"),
            ("Piece_Cil_RadialSpokesNexin", "T-Shaped Radial Spokes (RS1–RS3) & Nexin-DRC Elastic Bridges", "7RRO / 8J07 Radial Spokes", "#FFB703", "Regulatory Spoke Gold", "(-4.5, +2.0, +1.5)"),
            ("Piece_Cil_IFTTrain", "Intraflagellar Transport Train (IFT-A/B + Kinesin-2 / Dynein-2)", "8B6X IFT Train Polymer", "#00B4D8", "IFT Train Cerulean", "(0.0, +5.5, -2.0)"),
            ("Piece_Cil_CiliaryMembraneBasal", "Ciliary Membrane Sheath & 9×3 Basal Body Transition Zone", "Ciliary Bilayer + Y-Links", "#06D6A0", "Ciliary Membrane Jade", "(0.0, -5.5, -3.5)"),
        ],
        "hud_controls": [
            ("waveform_mode", "Beat Waveform Mode", "Ciliary Asymmetric Power/Recovery Stroke vs. Flagellar Sinusoidal Wave vs. 9+0 Primary Cilium"),
            ("beat_frequency_hz", "ATP Concentration / Beat Frequency (Hz)", "0 Hz (Immotile / Kartagener PCD) to 50 Hz"),
            ("ift_train_direction", "Intraflagellar Transport (IFT) Direction", "Anterograde (Kinesin-2 to Tip) vs. Retrograde (Dynein-2 to Base)"),
        ],
        "stages": [
            ("Stage 1 — The 9+2 Axoneme Ring vs. Bacterial Flagellum", "Contrast the eukaryotic membrane-covered 9+2 microtubule axoneme (powered by thousands of dyneins along its entire length) against the prokaryotic rotary filament."),
            ("Stage 2 — Outer A/B Doublets & Dynein Walking", "Zoom into two adjacent outer doublets: ATP hydrolysis drives Outer and Inner Dynein Arms on the A-tubule to walk toward the (-)-end of the neighboring B-tubule."),
            ("Stage 3 — Nexin Links & Radial Spokes Convert Sliding to Bending", "Show how Nexin-DRC elastic bridges prevent the doublets from telescoping apart, converting linear inter-doublet sliding into a macroscopic bend."),
            ("Stage 4 — Central Pair & Asymmetric Switch Point", "Observe the Central Pair projections contacting the T-shaped Radial Spokes to alternate dynein activation between opposite sides of the ring (doublets 1–4 vs. 6–9)."),
            ("Stage 5 — Intraflagellar Transport (IFT) Elevator", "Follow a polymeric IFT-A/B train hauled up the outer doublet by Kinesin-2 to deliver tubulin to the growing (+)-end tip, then returned by Dynein-2."),
        ],
        "resources": [
            ("RCSB PDB Structure 8J07 — 96-nm Modular Repeat of Human Respiratory Doublet Microtubule", "https://www.rcsb.org/structure/8J07"),
            ("RCSB PDB Structure 8B6X — Anterograde Intraflagellar Transport Train", "https://www.rcsb.org/structure/8B6X"),
            ("RCSB PDB-101 — Molecule of the Month: Dynein", "https://pdb101.rcsb.org/motm/214"),
            ("Nature Reviews Molecular Cell Biology — Structure and Function of Cilia and Flagella", "https://www.nature.com/articles/s41580-018-0092-2"),
        ],
    },
]
