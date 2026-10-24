# euk_data_part3a.py — Elements 25 to 30 of the Eukaryote 36-Element Roadmap

EUK_ELEMENTS_PART3A = [
    {
        "num": "25",
        "id": "calvin_cycle_rubisco_16mer",
        "folder": "25_calvin_cycle_rubisco_16mer",
        "title": "The Calvin–Benson Cycle & RuBisCO Hexadecamer (L₈S₈ Carbon Fixation vs. Photorespiration)",
        "tier": "Tier 5 — Bioenergetic Organelles: Mitochondria, Chloroplasts & Peroxisomes ($10\,\text{nm}\text{--}5\,\mu\text{m}$)",
        "scale": "12 nm L₈S₈ RuBisCO Barrel & Stromal Carbon-Reduction Cycle",
        "category": "Photosynthetic Carbon Fixation & Stromal Carbohydrate Biosynthesis",
        "pdb1": "1RBL",
        "pdb1_label": "Spinach L₈S₈ RuBisCO Hexadecamer Holoenzyme (1RBL)",
        "pdb2": "3ZUH",
        "pdb2_label": "AAA+ Chaperone RuBisCO Activase Hexamer (3ZUH)",
        "overview": (
            "Ribulose-1,5-bisphosphate carboxylase/oxygenase (RuBisCO) is the most abundant enzyme in the terrestrial biosphere and "
            "the primary gateway by which inorganic atmospheric CO₂ enters organic life. In the stroma of plant chloroplasts (Scenario 23), "
            "Form I RuBisCO assembles as a 550 kDa L₈S₈ hexadecamer: an octameric barrel of 8 chloroplast-encoded Large (RbcL) catalytic "
            "subunits capped at top and bottom by two tetramers of 8 nuclear-encoded Small (RbcS) subunits. Activation of each RbcL active "
            "site requires carbamylation of Lys201 by an activator CO₂ molecule, which coordinates a catalytic Mg²⁺ ion. When ribulose-1,5-"
            "bisphosphate (RuBP) binds, Loop 6 closes over the pocket, enolizing RuBP into a 2,3-enediolate intermediate that attacks "
            "substrate CO₂ to form an unstable 6-carbon β-keto acid (2-carboxy-3-keto-D-arabinitol 1,5-bisphosphate), which hydrates and "
            "cleaves into two molecules of 3-phosphoglycerate (3-PGA). Using 9 ATP and 6 NADPH from the thylakoid light reactions "
            "(Scenario 24), Phosphoglycerate Kinase and GAPDH reduce 3-PGA into Glyceraldehyde-3-Phosphate (G3P), while the stromal "
            "transketolase/aldolase/phosphoribulokinase network regenerates RuBP. However, O₂ competitively attacks the enediolate (~25% "
            "of turnovers in C3 plants), producing toxic 2-phosphoglycolate (photorespiration), while inhibitory sugar phosphates are "
            "re-opened by the AAA+ chaperone ring RuBisCO Activase."
        ),
        "behavior": (
            "Visualizes the 16-subunit L₈S₈ RuBisCO barrel alongside the AAA+ RuBisCO Activase hexamer and the stromal Calvin–Benson "
            "enzyme ring: shows Lys201-CO₂-Mg²⁺ active-site coordination, Loop 6 closure over RuBP, cleavage of the 6C intermediate "
            "into two 3-PGA molecules, ATP/NADPH reduction to G3P, and competitive O₂ oxygenation."
        ),
        "upstream": "Thylakoid Light-Reaction Z-Scheme (Scenario 24, supplying stromal ATP, NADPH, Mg²⁺ efflux, and pH 8.0) + Stomatal & Chloroplast Envelope CO₂ Diffusion (Scenario 23).",
        "inputs": [
            "3 CO₂ + 3 H₂O + 3 Ribulose-1,5-bisphosphate (RuBP, 5C acceptor) per net triose-P",
            "9 Stromal ATP + 6 Stromal NADPH (from Thylakoid F₁Fₒ-ATP Synthase & Ferredoxin-NADP⁺ Reductase)",
            "Catalytic Mg²⁺ + Activator CO₂ (for Lys201 carbamylation) + RuBisCO Activase ATP (for active-site remodeling)",
        ],
        "outputs": [
            "1 Net Glyceraldehyde-3-Phosphate (G3P / Triose-P) exported via Triose-Phosphate Translocator or polymerized to Starch",
            "9 ADP + 8 Pᵢ + 6 NADP⁺ returned to the Thylakoid Membrane (Scenario 24)",
            "In Photorespiration (O₂ fixation): 1 × 3-PGA + 1 × 2-Phosphoglycolate (sent to Peroxisome Scenario 22 & Mitochondria)",
        ],
        "downstream": "Exported G3P drives cytosolic sucrose synthesis and mitochondrial glycolysis/TCA (Scenarios 19–21); photorespiratory 2-phosphoglycolate is detoxified across Chloroplast → Peroxisome (Scenario 22) → Mitochondrion.",
        "energy_currency": "3 ATP & 2 NADPH consumed per CO₂ fixed (9 ATP + 6 NADPH per net G3P)",
        "turnover": "RuBisCO k_cat ≈ 3–4 CO₂ fixed per active site per second (notoriously slow, compensated by ~50% of stromal protein mass)",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Rubisco_RbcL_Core", "Octameric Catalytic Core (8 × RbcL Large Subunits with Loop 6 Gates)", "1RBL Chains A–H", "#06D6A0", "RbcL Core Jade", "(0.0, 0.0, 0.0)"),
            ("Piece_Rubisco_RbcS_Caps", "Apical & Basal Regulatory Caps (8 × RbcS Small Subunits)", "1RBL Chains I–P", "#0077B6", "RbcS Cap Marine Blue", "(0.0, +4.5, 0.0)"),
            ("Piece_Rubisco_MgActiveSite", "Carbamylated Lys201–CO₂–Mg²⁺ Active Site & RuBP Enediolate", "1RBL Active Site Pocket", "#FFB703", "Catalytic Mg²⁺ Gold", "(+2.5, +0.5, +2.5)"),
            ("Piece_Rubisco_Activase", "RuBisCO Activase AAA+ Hexamer (Active-Site Sugar Remodeler)", "3ZUH RuBisCO Activase", "#F77F00", "Activase Amber", "(-5.5, +1.5, +1.5)"),
            ("Piece_Rubisco_PGK_GAPDH", "Stromal Phosphoglycerate Kinase & GAPDH Reduction Module (ATP/NADPH)", "2WZB / 1RM5 Stromal Enzymes", "#7209B7", "Reduction Module Purple", "(+5.5, -1.5, +1.5)"),
            ("Piece_Rubisco_PRK_Regen", "Phosphoribulokinase (PRK) & Transketolase RuBP Regeneration Ring", "6H7G PRK–GAPDH–CP12 Complex", "#E63946", "Regeneration Crimson", "(0.0, -4.8, 0.0)"),
        ],
        "hud_controls": [
            ("co2_o2_stromal_ratio", "Stromal [CO₂] / [O₂] Ratio (Carboxylation vs. Photorespiration)", "High CO₂ (100% 3-PGA Carboxylation) vs. Hot/Arid Low CO₂ (O₂ Photorespiration -> 2-Phosphoglycolate)"),
            ("light_stromal_ph_mg", "Light-Triggered Stromal pH (7.0 -> 8.0) & [Mg²⁺] Activation", "Dark Inactive (CP12-Inhibited) vs. Illuminated Active (Thioredoxin/Mg²⁺ Activated)"),
            ("rubisco_activase_atp", "RuBisCO Activase AAA+ Remodeling Rate", "0.0x to 2.5x"),
        ],
        "stages": [
            ("Stage 1 — Light-Driven Stromal Alkalinization & Lys201 Carbamylation", "Illumination pumps H⁺ into thylakoids, raising stromal pH to 8.0 and releasing Mg²⁺; an activator CO₂ carbamylates RbcL Lys201 to coordinate the catalytic Mg²⁺ ion."),
            ("Stage 2 — RuBP Binding, Enolization & Loop 6 Closure", "5-carbon Ribulose-1,5-bisphosphate (RuBP) coordinates the Mg²⁺ ion, deprotonating C3 to form a reactive 2,3-enediolate as flexible Loop 6 seals the active site."),
            ("Stage 3 — Electrophilic CO₂ Attack & 6C β-Keto Acid Cleavage", "Substrate CO₂ attacks C2 of the enediolate to form a transient 6-carbon 2-carboxy-3-keto-D-arabinitol 1,5-bisphosphate intermediate, which hydrates and splits into two 3-PGA molecules."),
            ("Stage 4 — ATP Phosphorylation & NADPH Reduction to G3P", "Phosphoglycerate kinase uses stromal ATP to convert 3-PGA into 1,3-BPG, and chloroplastic GAPDH uses NADPH to reduce it into Glyceraldehyde-3-Phosphate (G3P)."),
            ("Stage 5 — RuBP Regeneration vs. O₂ Photorespiration & Activase Rescue", "Five of every six G3P molecules are rearranged by transketolase, aldolase, and phosphoribulokinase (PRK) to regenerate 3 RuBP, while RuBisCO Activase uses ATP to eject stalled sugar phosphates."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: RuBisCO", "https://pdb101.rcsb.org/motm/11"),
            ("RCSB PDB Structure 1RBL — Spinach L₈S₈ RuBisCO Hexadecamer", "https://www.rcsb.org/structure/1RBL"),
            ("RCSB PDB Structure 3ZUH — Chloroplast RuBisCO Activase AAA+ Hexamer", "https://www.rcsb.org/structure/3ZUH"),
            ("NCBI Bookshelf — Biochemistry: The Calvin Cycle & Photosynthetic Carbon Assimilation", "https://www.ncbi.nlm.nih.gov/books/NBK22468/"),
        ],
    },
    {
        "num": "26",
        "id": "nucleus_envelope_nucleolus",
        "folder": "26_nucleus_envelope_nucleolus",
        "title": "The Nucleus: Double Nuclear Envelope, Nuclear Lamina Meshwork, Chromatin Territories & Tripartite Nucleolus",
        "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories ($10\,\text{nm}\text{--}6\,\mu\text{m}$)",
        "scale": "6 µm Whole-Organelle Cutaway with 15 nm Lamina & Tripartite Nucleolar Condensate",
        "category": "Nuclear Genome Compartmentalization & Ribosome Biogenesis Factory",
        "pdb1": "7R5K",
        "pdb1_label": "Human Nuclear Pore Complex Embedded in the Nuclear Envelope (7R5K)",
        "pdb2": "6L8Q",
        "pdb2_label": "Human 90S Pre-Ribosome / SSU Processome in the Nucleolus (6L8Q)",
        "overview": (
            "The Nucleus (~5–10 µm diameter) is the defining organelle of eukaryotic life, physically decoupling transcription and "
            "RNA processing (Scenarios 30–31) from cytoplasmic translation (Scenario 32). It is bounded by a double lipid bilayer "
            "Nuclear Envelope: the Outer Nuclear Membrane (ONM) is continuous with the Rough ER (Scenario 13) and studded with 80S "
            "ribosomes, while the Inner Nuclear Membrane (INM) anchors a tough, woven 2D intermediate filament meshwork—the Nuclear "
            "Lamina (Lamins A/C, B1, B2)—that provides mechanical stiffness and tethers transcriptionally silent, heterochromatic "
            "Lamina-Associated Domains (LADs) at the nuclear periphery. Spanning both bilayers are ~3,000–4,000 Nuclear Pore Complexes "
            "(NPCs, Scenario 27) and LINC complexes (SUN–KASH bridges) that transmit cytoskeletal forces (Scenarios 08–10) directly to "
            "chromosomes. Inside the nucleoplasm, each chromosome occupies a non-random 3D Chromosome Territory: dense H3K9me3/H3K27me3 "
            "Heterochromatin clusters near the lamina, while open H3K4me3/acetylated Euchromatin loops into the interior toward "
            "transcription factories. At the center sits the Nucleolus—the largest biomolecular condensate in the nucleus—organized by "
            "liquid–liquid phase separation around rDNA repeats into three concentric subcompartments: the Fibrillar Center (FC, RNA "
            "Pol I transcription), Dense Fibrillar Component (DFC, fibrillarin/snoRNP rRNA cleavage & modification), and Granular "
            "Component (GC, nucleophosmin-driven assembly of 90S/pre-40S and pre-60S ribosomal subunits)."
        ),
        "behavior": (
            "Presents a dramatic 90° architectural cutaway of the whole Eukaryotic Nucleus: reveals the ribosome-studded Outer Nuclear "
            "Membrane continuous with the ER, the perinuclear lumen, the Inner Nuclear Membrane lined by the orthogonal Lamin A/B meshwork, "
            "embedded Nuclear Pore Complexes, peripheral Heterochromatin vs. interior Euchromatin territories, and the glowing tripartite "
            "Nucleolus assembling pre-40S/pre-60S ribosomal subunits."
        ),
        "upstream": "Cytoplasmic import of Histones, Ribosomal Proteins, Lamin subunits, RNA Polymerases, and NTPs via Nuclear Pore Complexes (Scenario 27) + Cytoskeletal mechanotransduction via LINC (SUN–KASH) complexes (Scenario 10).",
        "inputs": [
            "Imported Ribosomal Proteins (RPs, ~80 species), Histones (H2A, H2B, H3, H4, H1), and Transcription Factors via Importin-α/β",
            "ATP & GTP + Ribonucleotide Triphosphates (ATP, UTP, CTP, GTP) and Deoxyribonucleotide Triphosphates (dNTPs)",
            "S-adenosylmethionine (SAM) & Acetyl-CoA for epigenetic histone/DNA methylation and acetylation",
        ],
        "outputs": [
            "Pre-40S and Pre-60S Ribosomal Subunits exported through NPCs via Exportin-1 (CRM1) / NMD3 to the cytosol (Scenario 32)",
            "5'-Capped, Spliced, Polyadenylated Mature mRNAs (Scenario 30–31), tRNAs, and pri-miRNAs (Scenario 33)",
            "Replicated sister chromatids ready for Mitotic Spindle segregation (Scenario 29 & 35)",
        ],
        "downstream": "Feeds all nuclear macromolecules through the Nuclear Pore Complex (Scenario 27) into Cytoplasmic Translation (Scenario 32), Rough ER Co-Translational Secretion (Scenario 13), and RISC RNA Silencing (Scenario 33).",
        "energy_currency": "RanGTP/RanGDP Nucleocytoplasmic Gradient + NTP Polymerization + ATP-Dependent Chromatin Remodeling",
        "turnover": "A proliferating human nucleus synthesizes ~7,500 new pre-ribosomal subunits per minute in the nucleolus and exports ~10–20 mRNAs/NPC/min",
        "layout_mode": "vesicle_budding",
        "pieces": [
            ("Piece_Nuc_DoubleEnvelope", "Double Nuclear Envelope (Outer ONM continuous with ER & Inner INM)", "Nuclear Envelope Bilayer", "#06D6A0", "Nuclear Envelope Jade", "(0.0, +4.8, 0.0)"),
            ("Piece_Nuc_PoreComplexes", "Embedded Nuclear Pore Complexes (NPCs) & LINC SUN–KASH Bridges", "7R5K NPC Assembly", "#FFB703", "Nuclear Pore Gold", "(-4.8, +2.5, +1.5)"),
            ("Piece_Nuc_LaminaMesh", "Nuclear Lamina Orthogonal Tetramer Meshwork (Lamins A/C & B1/B2)", "6JLB Nuclear Lamin Coiled-Coil", "#E76F51", "Lamina Terracotta", "(+4.8, +2.5, -1.5)"),
            ("Piece_Nuc_Heterochromatin", "Peripheral Heterochromatin (LADs, H3K9me3 Condensed Chromatin)", "1AOI Condensed Chromatin", "#48CAE4", "Heterochromatin Cyan", "(-3.8, -1.8, +1.5)"),
            ("Piece_Nuc_Euchromatin", "Interior Euchromatin Loops & Transcription Factories (Active Chromatin)", "7LBM Active Chromatin Loops", "#0077B6", "Euchromatin Marine Blue", "(+3.8, -1.8, +1.5)"),
            ("Piece_Nuc_Nucleolus", "Tripartite Nucleolus Condensate (FC, DFC, GC) & 90S Pre-Ribosome", "6L8Q 90S Pre-Ribosome", "#7209B7", "Nucleolus Royal Purple", "(0.0, -3.5, 0.0)"),
        ],
        "hud_controls": [
            ("chromatin_compaction_state", "Epigenetic Chromatin State (Euchromatin vs. Heterochromatin)", "Open Acetylated Euchromatin (Active Transcription) vs. Condensed Methylated Heterochromatin"),
            ("nucleolar_ribosome_flux", "Nucleolar rRNA Transcription (Pol I) & Pre-40S/60S Assembly Rate", "0.2x (Serum Starved / Stress) to 2.5x (MYC-Driven Proliferation)"),
            ("lamin_mechanics_progeria", "Nuclear Lamina Stiffness (Wild-Type Lamin A vs. Hutchinson–Gilford Progerin)", "Elastic Mechanoprotective Mesh vs. Blebbed Progeroid Envelope"),
        ],
        "stages": [
            ("Stage 1 — Double Nuclear Envelope & ER Continuity", "Inspect how the Outer Nuclear Membrane merges seamlessly with Rough ER cisternae while the Inner Nuclear Membrane seals the genome behind a selective perinuclear lumen."),
            ("Stage 2 — The Nuclear Lamina & Mechanotransduction (LINC)", "Trace the 15 nm woven meshwork of Lamin A/C and Lamin B intermediate filaments that resists mechanical deformation and connects via SUN–KASH LINC bridges to cytoplasmic microtubules and actin."),
            ("Stage 3 — Chromosome Territories: LADs vs. Interior Euchromatin", "Observe how gene-poor, H3K9me3-marked Heterochromatin is tethered to the peripheral Nuclear Lamina (LADs), while gene-rich Euchromatin loops inward toward active RNA Pol II factories."),
            ("Stage 4 — The Tripartite Nucleolus & 47S Pre-rRNA Transcription", "Zoom into the phase-separated Nucleolus: RNA Polymerase I transcribes tandem rDNA repeats in the Fibrillar Center (FC), while snoRNPs in the Dense Fibrillar Component (DFC) cleave and 2'-O-methylate the rRNA."),
            ("Stage 5 — 90S Processome Maturation & Pre-40S/60S Nuclear Export", "Watch ~80 imported ribosomal proteins fold onto the rRNA scaffold in the Granular Component (GC) to form pre-40S and pre-60S subunits, which exit through Nuclear Pore Complexes into the cytoplasm."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Nuclear Pore Complex", "https://pdb101.rcsb.org/motm/205"),
            ("RCSB PDB Structure 7R5K — Human Nuclear Pore Complex in the Nuclear Envelope", "https://www.rcsb.org/structure/7R5K"),
            ("RCSB PDB Structure 6L8Q — Human Nucleolar 90S Pre-Ribosome (SSU Processome)", "https://www.rcsb.org/structure/6L8Q"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: The Compartmentalization of the Nucleus", "https://www.ncbi.nlm.nih.gov/books/NBK26865/"),
        ],
    },
    {
        "num": "27",
        "id": "nuclear_pore_complex_npc",
        "folder": "27_nuclear_pore_complex_npc",
        "title": "The Nuclear Pore Complex (NPC): 120 MDa Octagonal Gate, FG-Repeat Hydrogel & RanGTP/RanGDP Transport Cycle",
        "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories ($10\,\text{nm}\text{--}6\,\mu\text{m}$)",
        "scale": "120 nm Diameter, 120 MDa Octagonal Symmetric Macromolecular Channel (~1,000 Nucleoporins)",
        "category": "Nucleocytoplasmic Gatekeeping & Directional Ran-GTPase Transport",
        "pdb1": "7R5K",
        "pdb1_label": "Cryo-EM Structure of the Human Nuclear Pore Complex (7R5K)",
        "pdb2": "1IBR",
        "pdb2_label": "Importin-β Bound to RanGTP Switching Complex (1IBR)",
        "overview": (
            "At ~120 Megadaltons and ~1,000 individual protein subunits (composed of ~30 distinct Nucleoporins or Nups in 8-fold rotational "
            "symmetry), the vertebrate Nuclear Pore Complex (NPC) is the largest protein complex in the eukaryotic cell. Anchored into "
            "the curved pore membrane where the Outer and Inner Nuclear Membranes fuse (via transmembrane Nups POM121, NDC1, GP210), the "
            "NPC scaffold consists of three stacked concentric rings: the Cytoplasmic Ring (with 8 Nup358/RanBP2 filaments), the Inner "
            "Ring (spoke-channel core), and the Nuclear Ring (capped by the 8-filament Nuclear Basket with TPR/Nup153). Projecting into "
            "the 40–60 nm central channel are hundreds of intrinsically disordered Phenylalanine-Glycine (FG) repeat domains (Nup98, "
            "Nup62, Nup153) that phase-separate into a cohesive, hydrophobic sieve-like hydrogel. Molecules <40 kDa (<5 nm) diffuse "
            "passively, whereas larger cargoes require Karyopherins (Importin-α/β for NLS-tagged import; Exportin-1/CRM1 for NES-tagged "
            "export) whose hydrophobic surface patches transiently melt through FG-repeats at ~1,000 translocations/sec. Directionality "
            "is enforced by the steep RanGTP/RanGDP gradient: chromatin-tethered RCC1 (RanGEF) maintains high nuclear RanGTP (which "
            "dissociates Importin–cargo complexes and assembles Exportin–cargo–RanGTP ternary complexes), while cytoplasmic filaments "
            "carry RanGAP1/RanBP2 to hydrolyze RanGTP → RanGDP + Pᵢ upon exit."
        ),
        "behavior": (
            "Visualizes the 8-fold symmetric 120 MDa Nuclear Pore Complex spanning the double nuclear membrane: animates the Cytoplasmic "
            "Filaments, Y-complex Outer Rings, Inner Spoke Ring, Nuclear Basket, the phase-separated FG-Repeat hydrogel mesh inside the "
            "central channel, and bidirectional Importin-α/β + Exportin-1/CRM1 transport driven by nuclear RCC1 (RanGTP) and cytoplasmic "
            "RanGAP1 (RanGDP)."
        ),
        "upstream": "Cytoplasmic 80S Ribosomes synthesizing NLS-tagged nuclear proteins (Scenario 32) + Nuclear Pol I/II/III & Spliceosome producing mRNAs, tRNAs, and pre-ribosomal subunits (Scenarios 26, 30, 31).",
        "inputs": [
            "Cytoplasmic NLS-tagged proteins (Histones, Transcription Factors, Lamins, RPs) bound to Importin-α/β heterodimers",
            "Nuclear NES-tagged cargoes, pre-40S/pre-60S ribosomal subunits (bound to Exportin-1/CRM1 + RanGTP), and spliced mRNPs (bound to NXF1–NXT1)",
            "Nuclear GTP (loaded onto Ran by chromatin-bound RCC1 RanGEF)",
        ],
        "outputs": [
            "Accumulated nuclear proteome inside the nucleoplasm (up to >100-fold concentration against chemical gradients)",
            "Exported cytoplasmic mRNAs (for Scenario 32), tRNAs, pre-miRNAs (for Scenario 33), and ribosomal subunits",
            "Cytoplasmic GDP + Pᵢ (from RanGAP1-stimulated RanGTP hydrolysis) + recycled Importins and RanGDP (re-imported via NTF2)",
        ],
        "downstream": "Supplies the Nucleus (Scenario 26), Chromatin (Scenario 28), Replisome (Scenario 29), and Pol II/Spliceosome (Scenarios 30–31) with enzymes, while delivering mature mRNAs and ribosomes to Cytoplasmic Translation (Scenario 32).",
        "energy_currency": "1 GTP hydrolyzed per RanGTP/RanGDP transport cycle (plus Dbp5/GLE1 ATPase RNA helicase ratchet for mRNP export)",
        "turnover": "~500–1,000 macromolecular cargo translocations per second per NPC (~60–80 MDa/sec mass flux through a single pore)",
        "layout_mode": "double_membrane_pore",
        "pieces": [
            ("Piece_NPC_CytoplasmicRing", "Cytoplasmic Outer Ring (Y-Complexes) & 8 Nup358/RanBP2 Filaments", "7R5K Cytoplasmic Ring", "#0077B6", "Cytoplasmic Ring Blue", "(0.0, +4.2, 0.0)"),
            ("Piece_NPC_InnerSpokeRing", "Inner Spoke Ring Core & Transmembrane Pore Membrane Anchors (Ndc1/Pom121)", "7R5K Inner Ring", "#00B4D8", "Inner Spoke Cerulean", "(0.0, 0.0, 0.0)"),
            ("Piece_NPC_NuclearBasket", "Nuclear Outer Ring & 8-Filament Nuclear Basket (Nup153 / TPR)", "7R5K Nuclear Ring & Basket", "#7209B7", "Nuclear Basket Purple", "(0.0, -4.2, 0.0)"),
            ("Piece_NPC_FGHydrogel", "Central Channel FG-Repeat Phase-Separated Selective Hydrogel (Nup98/Nup62)", "FG-Repeat Intrinsically Disordered Mesh", "#FFB703", "FG-Hydrogel Gold", "(0.0, 0.0, +2.2)"),
            ("Piece_NPC_ImportinRanGTP", "Importin-α/β Cargo Complex, Exportin-1 (CRM1) & RanGTP/RanGDP Switch", "1IBR Importin-β–RanGTP Complex", "#E63946", "Karyopherin Crimson", "(+4.2, +0.5, +2.0)"),
            ("Piece_NPC_PoreMembrane", "Curved Nuclear Envelope Pore Fusion Membrane (ONM–INM Junction)", "Nuclear Envelope Pore Bilayer", "#06D6A0", "Pore Membrane Jade", "(-4.5, 0.0, -2.0)"),
        ],
        "hud_controls": [
            ("transport_direction_mode", "Active Transport Mode (NLS Import vs. NES/mRNP Export)", "Importin-α/β NLS Nuclear Import vs. Exportin-1 (CRM1) + NXF1/NXT1 mRNA Nuclear Export"),
            ("ran_gtp_gradient_slider", "Nuclear [RanGTP] / Cytoplasmic [RanGDP] Gradient Steepness", "0% (Collapsed Gradient / Transport Stall) to 100% (Steep RCC1/RanGAP1 Gradient)"),
            ("fg_hydrogel_permeability", "FG-Repeat Hydrogel Sieve Selectivity (Hexanediol Disruption Test)", "Intact Selective FG-Phase (Blocks >40 kDa inert proteins) vs. Melted Non-Selective Pore"),
        ],
        "stages": [
            ("Stage 1 — Cytoplasmic Cargo Recognition (NLS & Importin-α/β)", "In the cytosol (where RanGTP is absent), Importin-α recognizes the basic Nuclear Localization Signal (NLS) on a newly synthesized histone or transcription factor and recruits Importin-β."),
            ("Stage 2 — Hydrophobic Partitioning Through the FG-Repeat Hydrogel", "Surface hydrophobic grooves on Importin-β transiently bind and dissolve the Phenylalanine-Glycine (FG) repeat meshwork of Nup98 and Nup62, gliding through the 50 nm pore in <5 milliseconds."),
            ("Stage 3 — Nuclear Basket Exit & RanGTP-Triggered Cargo Release", "Inside the nucleus, chromatin-bound RCC1 (RanGEF) maintains high [RanGTP]; RanGTP binds the N-terminal arch of Importin-β, inducing a conformational switch that releases the cargo into the nucleoplasm."),
            ("Stage 4 — Ternary Export Complex Assembly (Exportin-1 / CRM1 + RanGTP)", "Simultaneously, nuclear Exportin-1 (CRM1) cooperatively binds both RanGTP and a Leucine-rich Nuclear Export Signal (NES) cargo (or pre-ribosomal subunit) and traverses the FG-channel outward."),
            ("Stage 5 — Cytoplasmic RanGAP1 Hydrolysis & NTF2 Recycling", "At the cytoplasmic Nup358/RanBP2 filaments, RanGAP1 triggers GTP hydrolysis (RanGTP → RanGDP + Pᵢ), releasing the exported cargo in the cytosol while NTF2 ferries RanGDP back into the nucleus."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Karyopherins (Importins & Exportins)", "https://pdb101.rcsb.org/motm/85"),
            ("RCSB PDB Structure 7R5K — Cryo-EM Structure of the Human Nuclear Pore Complex", "https://www.rcsb.org/structure/7R5K"),
            ("RCSB PDB Structure 1IBR — Complex of Importin-β with RanGTP", "https://www.rcsb.org/structure/1IBR"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: The Transport of Molecules Between the Nucleus and the Cytosol", "https://www.ncbi.nlm.nih.gov/books/NBK26932/"),
        ],
    },
    {
        "num": "28",
        "id": "chromatin_nucleosome_cohesin_rings",
        "folder": "28_chromatin_nucleosome_cohesin_rings",
        "title": "Chromatin Architecture: Nucleosome Histone Octamer, Epigenetic Tails, CTCF & Cohesin/Condensin Loop-Extrusion Rings",
        "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories ($10\,\text{nm}\text{--}6\,\mu\text{m}$)",
        "scale": "11 nm Nucleosome Core Particle & 40 nm SMC Cohesin Loop-Extrusion Ring",
        "category": "Genome Compaction, Epigenetic Histone Code & 3D Topological Chromatin Loops",
        "pdb1": "1AOI",
        "pdb1_label": "2.8 Å Crystal Structure of the Nucleosome Core Particle (1AOI)",
        "pdb2": "6WG3",
        "pdb2_label": "Human Cohesin–NIPBL–DNA Loop-Extrusion Complex (6WG3)",
        "overview": (
            "Two meters of human genomic DNA (~6.4 billion base pairs) must be compacted 10,000-fold into a 6 µm nucleus while remaining "
            "dynamically accessible for transcription and replication. The fundamental repeating unit of eukaryotic chromatin is the "
            "Nucleosome Core Particle (11 nm diameter): exactly 147 bp of B-DNA wrapped 1.67 left-handed superhelical turns around a "
            "positively charged, Arg/Lys-rich Histone Octamer core composed of a central (H3–H4)₂ tetramer flanked by two H2A–H2B dimers, "
            "sealed at the entry/exit dyad by Linker Histone H1 to form a 10 nm 'beads-on-a-string' fiber and higher-order clutches. "
            "Projecting from the octamer are flexible N-terminal Histone Tails (especially H3 and H4) whose post-translational modifications "
            "form the Epigenetic Histone Code: Histone Acetyltransferases (HATs/p300) neutralize lysine positive charges (H3K27ac, H3K9ac) "
            "to open Euchromatin (read by Bromodomains), while Histone Deacetylases (HDACs) and Methyltransferases (PRC2 H3K27me3, SUV39H1 "
            "H3K9me3, read by HP1 Chromodomains) compact silent Heterochromatin. At the 100 kb–1 Mb scale, ring-shaped SMC ATPase complexes "
            "—Cohesin (SMC1–SMC3–RAD21–STAG1/2 + NIPBL) in interphase and Condensin I/II in mitosis—topologically embrace DNA and actively "
            "extrude chromatin loops at ~1 kb/sec until arrested by convergent CTCF zinc-finger boundary insulators, organizing the genome "
            "into Topologically Associating Domains (TADs) that bring distal enhancers into direct physical contact with target promoters."
        ),
        "behavior": (
            "Renders the atomic Nucleosome Core Particle (147 bp DNA wrapped 1.67 turns around the H2A/H2B/H3/H4 octamer with protruding "
            "N-terminal epigenetic tails and Linker Histone H1) nested within an actively extruding SMC Cohesin ring (SMC1/SMC3/RAD21) "
            "halted at convergent CTCF insulator motifs."
        ),
        "upstream": "Nuclear import of newly synthesized Histones & SMC subunits via NPC (Scenario 27) + Mitochondrial/Cytosolic Acetyl-CoA (Scenario 20) & S-Adenosylmethionine (SAM) metabolic pools.",
        "inputs": [
            "Genomic Double-Stranded B-DNA (147 bp core + ~20–60 bp linker DNA per nucleosome) + Histone Octamer (2 × H2A, H2B, H3, H4) + H1",
            "Acetyl-CoA (for HAT lysine acetylation), SAM (for HMT lysine/arginine methylation), and NAD⁺/Zn²⁺ (for Sirtuin/HDAC deacetylation)",
            "Nuclear ATP hydrolyzed by SMC Cohesin/Condensin loop-extrusion motors and SWI/SNF (BAF) chromatin remodelers",
        ],
        "outputs": [
            "Topologically Associating Domains (TADs) & Enhancer–Promoter Chromatin Loops (delivered to Pol II Mediator, Scenario 30)",
            "Epigenetically marked Open Euchromatin (H3K27ac/H3K4me3) vs. Silent Heterochromatin (H3K9me3/H3K27me3)",
            "ADP + Pᵢ + Acetate / O-Acetyl-ADP-ribose + S-Adenosylhomocysteine (SAH)",
        ],
        "downstream": "Directly controls promoter accessibility and enhancer-promoter looping for RNA Polymerase II & Mediator (Scenario 30) and replication origin licensing for the Eukaryotic Replisome (Scenario 29).",
        "energy_currency": "SMC Cohesin & SWI/SNF ATPase Hydrolysis + Metabolic Epigenetic Cofactors (Acetyl-CoA, SAM, NAD⁺)",
        "turnover": "Cohesin extrudes DNA loops at ~0.5–1.5 kb/sec (~2 ATP/step); SWI/SNF slides nucleosomes at ~10–50 bp/sec",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Chrom_NucleosomeDNA", "147 bp Superhelical B-DNA Gyres (1.67 Left-Handed Turns) & Linker DNA", "1AOI Chains I, J", "#0077B6", "Superhelical DNA Blue", "(0.0, 0.0, +1.5)"),
            ("Piece_Chrom_HistoneOctamer", "Histone Octamer Core: Central (H3–H4)₂ Tetramer & Two (H2A–H2B) Dimers", "1AOI Chains A–H", "#06D6A0", "Histone Octamer Jade", "(0.0, 0.0, 0.0)"),
            ("Piece_Chrom_EpigeneticTails", "Protruding N-Terminal Histone Tails (H3K27ac, H3K4me3, H3K9me3 Marks)", "1AOI Flexible N-Tails", "#FFB703", "Epigenetic Tail Gold", "(+2.8, +2.2, +2.0)"),
            ("Piece_Chrom_LinkerH1", "Linker Histone H1 Dyad Clamp & Chromatosome Stem", "7K5X Linker Histone H1", "#F77F00", "Linker H1 Amber", "(-2.8, -1.8, +1.8)"),
            ("Piece_Chrom_CohesinRing", "Tripartite SMC Cohesin Loop-Extrusion Ring (SMC1–SMC3–RAD21–NIPBL)", "6WG3 Cohesin Complex", "#E63946", "Cohesin Ring Crimson", "(0.0, +4.5, -1.5)"),
            ("Piece_Chrom_CTCFAnchor", "Convergent CTCF 11-Zinc-Finger Boundary Insulator Dimers", "5YEF CTCF Zinc Fingers", "#7209B7", "CTCF Insulator Purple", "(0.0, -4.5, -1.5)"),
        ],
        "hud_controls": [
            ("histone_acetylation_state", "Epigenetic Histone Tail Code (HAT Acetylation vs. HDAC/PRC2 Methylation)", "H3K27ac Open Euchromatin (Charge Neutralized) vs. H3K9me3/HP1 Compacted Heterochromatin"),
            ("cohesin_extrusion_speed", "SMC Cohesin ATPase Loop-Extrusion Velocity", "0.0x (WAPL Release) to 2.5x (Active TAD Loop Extrusion to CTCF Anchors)"),
            ("swi_snf_remodeler_toggle", "SWI/SNF (BAF) ATP-Dependent Nucleosome Sliding", "Positioned Nucleosome vs. Active Promoter Nucleosome Eviction"),
        ],
        "stages": [
            ("Stage 1 — Histone Octamer Assembly & 147 bp Superhelical Wrapping", "Four core histone dimers—an (H3–H4)₂ tetramer and two (H2A–H2B) dimers—assemble via histone-fold handshakes, wrapping 147 bp of negatively charged DNA 1.67 left-handed turns via arginine minor-groove contacts."),
            ("Stage 2 — Linker Histone H1 Sealing & Chromatin Clutch Compaction", "Globular Linker Histone H1 binds the nucleosome dyad axis where entry and exit DNA cross, zipping 10 nm 'beads-on-a-string' arrays into compact zig-zag 30 nm chromatin clutches."),
            ("Stage 3 — The Epigenetic Histone Code (HATs, HDACs, Readers & Erasers)", "Watch HAT enzymes use Acetyl-CoA to acetylate H3/H4 lysine tails—neutralizing their positive charge to loosen DNA—or HMTs/HDACs install H3K9me3/H3K27me3 marks to recruit HP1 and silence genes."),
            ("Stage 4 — SMC Cohesin Ring Loading & Active DNA Loop Extrusion", "The giant 40 nm tripartite Cohesin ring (SMC1, SMC3, kleisin RAD21, and loader NIPBL) clamps onto chromatin and hydrolyzes ATP to reel DNA symmetrically into a growing topological loop at ~1 kb/sec."),
            ("Stage 5 — Convergent CTCF Boundary Arrest & Enhancer–Promoter TADs", "Loop extrusion continues until both faces of Cohesin collide with N-termini of convergently oriented CTCF 11-zinc-finger insulators, locking in a Topologically Associating Domain (TAD) that pairs an enhancer with its target promoter."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: Nucleosome", "https://pdb101.rcsb.org/motm/7"),
            ("RCSB PDB Structure 1AOI — 2.8 Å Crystal Structure of the Nucleosome Core Particle", "https://www.rcsb.org/structure/1AOI"),
            ("RCSB PDB Structure 6WG3 — Human Cohesin–NIPBL–DNA Loop-Extrusion Complex", "https://www.rcsb.org/structure/6WG3"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: Chromosomal DNA and Its Packaging in the Chromatin Fiber", "https://www.ncbi.nlm.nih.gov/books/NBK26834/"),
        ],
    },
    {
        "num": "29",
        "id": "eukaryotic_replisome_cmg_pcna",
        "folder": "29_eukaryotic_replisome_cmg_pcna",
        "title": "The Eukaryotic Replisome: CMG Helicase (Cdc45–MCM2-7–GINS), Pol ε/δ/α, RFC & homotrimeric PCNA Sliding Clamp Rings",
        "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories ($10\,\text{nm}\text{--}6\,\mu\text{m}$)",
        "scale": "35 nm Asymmetric Replication Fork Machine & Homotrimeric PCNA Clamp Rings",
        "category": "S-Phase Semiconservative Genome Replication & Chromatin Inheritance",
        "pdb1": "6UOM",
        "pdb1_label": "Human CMG Helicase–DNA Replication Fork Complex (6UOM)",
        "pdb2": "1PLQ",
        "pdb2_label": "Eukaryotic Homotrimeric PCNA Sliding Clamp Ring on DNA (1PLQ)",
        "overview": (
            "To duplicate 6.4 billion base pairs during S-phase in just ~8 hours, eukaryotic cells fire ~30,000–50,000 replication origins "
            "licensed in G1 by the Origin Recognition Complex (ORC1-6), Cdc6, and Cdt1 as inactive head-to-head double hexamers of the "
            "AAA+ motor MCM2-7. At the G1/S transition, S-CDK and DDK kinases recruit Cdc45 and the GINS tetramer (Psf1/2/3, Sld5) to "
            "activate two 11-subunit CMG Helicase rings (Cdc45–MCM2-7–GINS). Unlike bacterial DnaB (which translocates 5'→3' on the "
            "lagging strand), eukaryotic CMG translocates 3'→5' along the Leading-Strand template, sterically excluding the lagging strand. "
            "Directly docked to the C-tier of CMG is DNA Polymerase ε (Pol ε), which synthesizes the Leading Strand continuously. On the "
            "exposed Lagging Strand, single-strand binding protein RPA coats ssDNA until the Ctf4 trimer hub coordinates DNA Polymerase α–"
            "Primase to synthesize a hybrid ~10 nt RNA + ~20 nt DNA initiator primer every ~150–200 nt (nucleosome repeat length!). The "
            "pentameric AAA+ clamp loader Replication Factor C (RFC) uses ATP to crack open the homotrimeric PCNA (Proliferating Cell "
            "Nuclear Antigen) sliding clamp ring around each primer-template junction, recruiting DNA Polymerase δ (Pol δ) to extend "
            "Okazaki fragments, followed by Flap Endonuclease 1 (FEN1) primer excision, DNA Ligase I sealing, and FACT/CAF-1 histone "
            "chaperone nucleosome reassembly."
        ),
        "behavior": (
            "Visualizes the complete eukaryotic replication fork: the 11-subunit CMG helicase ring (Cdc45 + MCM2-7 hexamer + GINS) "
            "unwinding parental chromatin 3'→5' on the leading strand, coupled to Leading-Strand Pol ε, Ctf4 hub, Lagging-Strand Pol α–"
            "Primase, RFC clamp loader, glowing homotrimeric PCNA sliding clamp rings, Pol δ, FEN1, and DNA Ligase I."
        ),
        "upstream": "Chromatin nucleosome remodeling & ORC origin licensing (Scenario 28) + G1/S Cyclin-CDK phosphorylation + Nuclear dNTP/rNTP import through NPCs (Scenario 27).",
        "inputs": [
            "Parental Double-Stranded Chromatin DNA (unwound ahead of the fork with Topoisomerase I/II relief of positive supercoils)",
            "Deoxyribonucleotide Triphosphates (dATP, dTTP, dGTP, dCTP) + Ribonucleotide Triphosphates (ATP, UTP, CTP, GTP for Primase)",
            "ATP for MCM2-7 helicase translocation, RFC clamp loading, and DNA Ligase I adenylation + Parental & newly synthesized Histones",
        ],
        "outputs": [
            "Two identical, semiconservatively replicated Sister Chromatid duplexes (held together by Cohesin rings, Scenario 28)",
            "Inorganic Pyrophosphate (PPᵢ → 2 Pᵢ via Pyrophosphatase, driving polymerization forward) + ADP + Pᵢ + AMP",
            "Reassembled nucleosome arrays on both daughter strands (via FACT and PCNA-tethered CAF-1 chaperones)",
        ],
        "downstream": "Produces cohesed sister chromatids for G2 repair and Mitotic Spindle kinetochore segregation (Scenario 35) while epigenetic marks are restored on daughter nucleosomes (Scenario 28).",
        "energy_currency": "dNTP Pyrophosphate Hydrolysis (ΔG°' ≈ -45 kJ/mol after PPᵢ cleavage) + MCM2-7 & RFC ATP Hydrolysis",
        "turnover": "~30–50 bp/sec per eukaryotic fork (~2–3 kb/min, ~20× slower than E. coli Replisome due to chromatin nucleosome traversal, compensated by ~50,000 parallel origins)",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_Rep_CMGHelicase", "11-Subunit CMG Helicase Ring (MCM2-7 AAA+ Hexamer + Cdc45 + GINS)", "6UOM CMG Helicase", "#00B4D8", "CMG Helicase Cerulean", "(0.0, 0.0, 0.0)"),
            ("Piece_Rep_PolEpsilon", "Leading-Strand DNA Polymerase ε (Pol2–Dpb2–Dpb3–Dpb4) Docked to CMG", "6WJV CMG–Pol ε Complex", "#06D6A0", "Pol ε Leading Jade", "(+4.2, +2.0, +1.5)"),
            ("Piece_Rep_PCNAClamps", "Homotrimeric PCNA Sliding Clamp Rings & Pentameric RFC Clamp Loader", "1PLQ / 1SXJ RFC–PCNA Complex", "#FFB703", "PCNA Clamp Ring Gold", "(+2.5, -2.5, +2.2)"),
            ("Piece_Rep_PolAlphaPrimase", "Ctf4 Trimer Hub & DNA Polymerase α–Primase (RNA-DNA Initiator)", "5EXR Pol α–Primase", "#F77F00", "Primase Amber", "(-4.0, -1.5, +1.8)"),
            ("Piece_Rep_PolDeltaLigase", "Lagging-Strand DNA Polymerase δ, RPA, FEN1 Flap Endonuclease & Ligase I", "6TNY Pol δ–PCNA–FEN1 Toolbelt", "#E63946", "Pol δ Lagging Crimson", "(-2.5, -4.2, 0.0)"),
            ("Piece_Rep_ForkDNA_FACT", "Replication Fork DNA Junction & FACT/CAF-1 Histone Chaperone Shuttle", "Replication Fork DNA + Histones", "#0077B6", "Fork DNA Marine Blue", "(0.0, +4.2, -1.5)"),
        ],
        "hud_controls": [
            ("fork_progression_speed", "CMG Helicase Unwinding & Pol ε/δ Synthesis Rate", "0.0x (Hydroxyurea dNTP Depletion / ATR Checkpoint Stall) to 2.5x"),
            ("okazaki_maturation_view", "Lagging-Strand Okazaki Fragment Cycle (~180 nt Nucleosome-Sized Steps)", "Pol α-Primase Initiation -> RFC Loads PCNA -> Pol δ Extension -> FEN1/Ligase I Sealing"),
            ("proofreading_3_5_exo", "Pol ε / Pol δ 3'→5' Exonuclease Proofreading & Mismatch Repair", "High-Fidelity Proofreading (10⁻⁹ error rate) vs. Exonuclease-Deficient Mutator"),
        ],
        "stages": [
            ("Stage 1 — CMG Helicase 3'→5' Leading-Strand Translocation", "The 11-subunit CMG ring (MCM2-7 hexamer stabilized by Cdc45 and GINS) encircles the leading-strand template, hydrolyzing ATP around its AAA+ staircase to split parental dsDNA while FACT evicts nucleosomes ahead."),
            ("Stage 2 — Continuous Leading-Strand Synthesis by Pol ε", "Tethered directly to the C-terminal motor tier of CMG and encircled by a homotrimeric PCNA ring, DNA Polymerase ε continuously synthesizes the leading strand in the 5'→3' direction."),
            ("Stage 3 — RPA Coating & Pol α–Primase RNA-DNA Initiation", "As single-stranded lagging template loops out coated by RPA, the Ctf4-tethered Pol α–Primase synthesizes a ~10 nt RNA primer and extends it by ~20 nt of DNA before handing off."),
            ("Stage 4 — RFC Clamp Loading & Pol δ Okazaki Fragment Extension", "Pentameric RFC binds the 3'-OH primer junction, uses ATP to snap a homotrimeric PCNA sliding clamp ring around the DNA, and recruits high-fidelity Pol δ to synthesize a ~180 nt Okazaki fragment."),
            ("Stage 5 — PCNA Toolbelt Maturation (FEN1 + Ligase I) & Chromatin Assembly", "When Pol δ collides with the previous Okazaki fragment, it displaces the 5' RNA primer into a flap cleaved by PCNA-bound FEN1, DNA Ligase I seals the nick, and CAF-1 deposits (H3–H4)₂ tetramers immediately behind the fork."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: DNA Polymerase & Sliding Clamps", "https://pdb101.rcsb.org/motm/3"),
            ("RCSB PDB Structure 6UOM — Human CMG Helicase on a Replication Fork", "https://www.rcsb.org/structure/6UOM"),
            ("RCSB PDB Structure 1PLQ — Eukaryotic PCNA Homotrimeric Sliding Clamp Ring", "https://www.rcsb.org/structure/1PLQ"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: DNA Replication Mechanisms", "https://www.ncbi.nlm.nih.gov/books/NBK26850/"),
        ],
    },
    {
        "num": "30",
        "id": "pol_ii_mediator_preinitiation",
        "folder": "30_pol_ii_mediator_preinitiation",
        "title": "Transcription Factory: RNA Polymerase II, 26-Subunit Mediator Bridge, TFIID/TFIIH Pre-Initiation Complex & 5'-Capping",
        "tier": "Tier 6 — The Nucleus, Epigenetic Chromatin & Nuclear RNA Factories ($10\,\text{nm}\text{--}6\,\mu\text{m}$)",
        "scale": "40 nm, ~4 MDa Mediator–RNA Pol II Pre-Initiation Supercomplex (PIC)",
        "category": "Protein-Coding Gene Transcription, Promoter Melting & Co-Transcriptional RNA Capping",
        "pdb1": "7LBM",
        "pdb1_label": "Human Mediator-Bound RNA Polymerase II Pre-Initiation Complex (7LBM)",
        "pdb2": "1YTB",
        "pdb2_label": "TATA-Box Binding Protein (TBP) Bending Promoter DNA 80° (1YTB)",
        "overview": (
            "Unlike bacterial RNA Polymerase (which directly recognizes -35/-10 promoters via a single σ-factor), eukaryotic RNA Polymerase II "
            "(a 12-subunit, 550 kDa enzyme that transcribes all protein-coding mRNAs and most lncRNAs/miRNAs) requires a massive ~4 MDa, "
            ">70-polypeptide Pre-Initiation Complex (PIC) and the 26-subunit Mediator coactivator bridge. Transcription begins when "
            "sequence-specific Transcription Factors bound to distal Enhancers (looped in by Cohesin, Scenario 28) recruit the Head, "
            "Middle, Tail, and CDK8 Kinase modules of Mediator. At the core promoter, TFIID—via its saddle-shaped TATA-Binding Protein "
            "(TBP) subunit—inserts two phenylalanine wedges into the minor groove of the TATA box (or Inr/DPE elements via TAFs), kinking "
            "the DNA by a dramatic ~80°. TFIIA and TFIIB stabilize the TBP-DNA saddle and position the 12-subunit RNA Pol II (associated "
            "with TFIIF) over the transcription start site (+1). Next, TFIIE recruits the 10-subunit TFIIH complex: its XPB ATP-dependent "
            "DNA translocase pumps downstream DNA into the Pol II cleft to melt an 11–15 bp Transcription Bubble, while its CDK7 kinase "
            "module phosphorylates Serine-5 (Ser5-P) of the 52 tandem heptad repeats (Y₁S₂P₃T₄S₅P₆S₇) on the Rpb1 C-Terminal Domain (CTD) "
            "tail. Ser5-P releases Pol II from Mediator (promoter escape) and immediately recruits the 5'-Capping Enzyme to install the "
            "7-methylguanosine (m⁷GpppN) cap as the nascent pre-mRNA emerges at ~25 nt, before P-TEFb (CDK9) phosphorylates Ser2-P for "
            "productive elongation and Spliceosome recruitment (Scenario 31)."
        ),
        "behavior": (
            "Renders the ~4 MDa human Mediator–PIC supercomplex assembled on a looped enhancer–promoter junction: shows TBP kinking the "
            "TATA box by 80°, TFIIB/E/F positioning the 12-subunit RNA Pol II, TFIIH (XPB translocase melting the transcription bubble + "
            "CDK7 kinase phosphorylating the Rpb1 CTD heptad tail), the 26-subunit Mediator bridge to enhancer TFs, and co-transcriptional "
            "m⁷G 5'-capping."
        ),
        "upstream": "Cohesin/CTCF enhancer–promoter chromatin looping & HAT nucleosome opening (Scenario 28) + Nuclear import of activated Transcription Factors & NTPs via NPC (Scenario 27).",
        "inputs": [
            "Open Euchromatic Core Promoter + Looped Enhancer DNA bound by Activator Transcription Factors",
            "Ribonucleotide Triphosphates (ATP, UTP, CTP, GTP) + Mg²⁺ catalytic ions at the Pol II Rpb1 active site",
            "ATP for TFIIH XPB promoter-melting translocase and CDK7/CDK9 CTD kinase phosphorylation + GTP & SAM for m⁷GpppN 5'-Capping",
        ],
        "outputs": [
            "5'-m⁷G-Capped Nascent Pre-mRNA transcript emerging from the Pol II RNA exit channel (handed directly to the Spliceosome, Scenario 31)",
            "Ser5-P / Ser2-P Hyperphosphorylated Rpb1 CTD Tail (acting as a dynamic landing pad for Capping, Splicing, and 3'-Polyadenylation)",
            "Inorganic Pyrophosphate (PPᵢ) + ADP + Pᵢ",
        ],
        "downstream": "Co-transcriptionally hands the emerging pre-mRNA directly to the Spliceosome (Scenario 31) for intron excision and to CPSF/PAP for 3'-poly(A) tailing prior to NPC export (Scenario 27).",
        "energy_currency": "NTP Pyrophosphate Hydrolysis + TFIIH XPB ATPase Promoter Melting + CDK7/CDK9 Kinase ATP + GTP/SAM Capping",
        "turnover": "Pol II elongation velocity ~30–70 nt/sec (~2–4 kb/min) across chromatinized gene bodies",
        "layout_mode": "cytosolic_ring",
        "pieces": [
            ("Piece_PIC_RNAPolII", "12-Subunit RNA Polymerase II Core (Rpb1–Rpb12 Active Cleft & Trigger Loop)", "7LBM RNA Pol II Core", "#06D6A0", "Pol II Core Jade", "(0.0, 0.0, 0.0)"),
            ("Piece_PIC_Mediator26", "26-Subunit Mediator Coactivator Bridge (Head, Middle & Tail Modules)", "7LBM Mediator Complex", "#7209B7", "Mediator Bridge Purple", "(0.0, +4.2, -1.0)"),
            ("Piece_PIC_TBP_TFIID", "TFIID / TATA-Box Binding Protein (TBP Saddle Bending DNA 80°) & TFIIA/B/F", "1YTB / 7LBM TBP–TFIIB Saddle", "#FFB703", "TBP Saddle Gold", "(-4.2, -1.0, +1.8)"),
            ("Piece_PIC_TFIIH_HeliKin", "10-Subunit TFIIH (XPB DNA Translocase + CDK7/Cyclin H CTD Kinase Module)", "7LBM TFIIH Core & CAK", "#E63946", "TFIIH Helicase Crimson", "(+4.2, -1.0, +1.8)"),
            ("Piece_PIC_CTDTail_Cap", "Rpb1 C-Terminal Domain (52 × YSPTSPS Heptads) & m⁷G 5'-Capping Enzyme", "3J0K Capping Enzyme on Pol II", "#F77F00", "CTD & Capping Amber", "(+3.0, -3.8, +2.0)"),
            ("Piece_PIC_PromoterBubble", "Enhancer–Promoter DNA Loop, Melted 13 bp Transcription Bubble & Pre-mRNA", "7LBM Promoter DNA & RNA", "#0077B6", "Promoter DNA Blue", "(-2.5, -3.8, -1.5)"),
        ],
        "hud_controls": [
            ("ctd_phosphorylation_code", "Rpb1 CTD Heptad Tail Phosphorylation State (Y₁S₂P₃T₄S₅P₆S₇)", "Unphosphorylated (PIC Recruitment) -> Ser5-P (Promoter Escape & 5'-Capping) -> Ser2-P (Elongation & Splicing)"),
            ("enhancer_mediator_coupling", "Enhancer TF–Mediator Coactivator Bridge & Phase-Separated Condensate", "Basal Promoter Only (Low Firing) vs. Super-Enhancer Mediator Condensate (High Transcriptional Bursting)"),
            ("alpha_amanitin_inhibitor", "α-Amanitin Death-Cap Mushroom Toxin (Bridge Helix / Trigger Loop Lock)", "Uninhibited Pol II Translocation (~50 nt/s) vs. α-Amanitin Jammed Trigger Loop"),
        ],
        "stages": [
            ("Stage 1 — TBP Saddle Binding & 80° TATA Promoter Kinking", "TFIID recognizes the core promoter; its saddle-shaped TBP subunit inserts two pairs of phenylalanines into the DNA minor groove, bending the helix by 80° and recruiting TFIIA and TFIIB."),
            ("Stage 2 — Mediator Bridge Assembly & Pol II–TFIIF Docking", "Activator TFs on a looped enhancer bind the Tail module of the 26-subunit Mediator complex, whose Head and Middle modules cradle the 12-subunit RNA Pol II (with Unphosphorylated CTD) over the start site."),
            ("Stage 3 — TFIIH XPB DNA Pumping & Transcription Bubble Melting", "TFIIE recruits the 10-subunit TFIIH complex; its XPB translocase grips downstream DNA and pumps it backward into the Pol II cleft, torsionally melting an 11–15 bp open transcription bubble."),
            ("Stage 4 — CDK7 Ser5-P Phosphorylation & Promoter Escape", "The CDK7 kinase module of TFIIH phosphorylates Ser5 across the 52 YSPTSPS repeats of the Rpb1 CTD tail, breaking Pol II's grip on Mediator and launching promoter escape."),
            ("Stage 5 — Co-Transcriptional m⁷GpppN 5'-Capping & P-TEFb Elongation", "Once ~25 nt of pre-mRNA emerge, Ser5-P recruits the Capping Enzyme (RNA triphosphatase, guanylyltransferase, and N7-methyltransferase) to add the protective 5'-m⁷G cap before P-TEFb (CDK9) phosphorylates Ser2-P for full-speed elongation."),
        ],
        "resources": [
            ("RCSB PDB-101 — Molecule of the Month: RNA Polymerase II & TATA-Binding Protein", "https://pdb101.rcsb.org/motm/67"),
            ("RCSB PDB Structure 7LBM — Human Mediator-Bound RNA Pol II Pre-Initiation Complex", "https://www.rcsb.org/structure/7LBM"),
            ("RCSB PDB Structure 1YTB — TATA-Box Binding Protein (TBP)–DNA Complex", "https://www.rcsb.org/structure/1YTB"),
            ("NCBI Bookshelf — Molecular Biology of the Cell: From DNA to RNA (Eukaryotic Transcription)", "https://www.ncbi.nlm.nih.gov/books/NBK26887/"),
        ],
    },
]
