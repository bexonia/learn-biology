"""
generate_27_crispr_defense.py

Authentic Macromolecular Synthesis of Element 27:
Prokaryotic Phage Defense: CRISPR-Cascade & EcoRI (PDB: 5H9F, 4QQW, 1ERI, 1BNA)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: crispr_defense_1vy8.glb):
1. Piece_CRISPR_Cas7_Backbone (#3A86FF) — Left REC recognition lobe + Top-Right Type I-E Cascade seahorse (PDB: 5H9F)
2. Piece_CRISPR_crRNA_Guide (#9D4EDD) — Single-guide crRNA hybridizing across the R-loop & Cascade backbone (PDB: 5H9F RNA)
3. Piece_CRISPR_Cas8e_PAM_Tail (#00F5D4) — Cas8e PAM-sensing module & Cascade tail (PDB: 5H9F)
4. Piece_CRISPR_Cas11_Cas6e (#2A9D8F) — Top-Right Type I-E Cascade seahorse Cas11 belly & Cas6e cap (PDB: 5H9F)
5. Piece_CRISPR_Phage_DNA_RLoop (#F77F00) — Unwound target phage DNA R-loop bubble + flanking B-DNA duplex arms (PDB: 5H9F + 1BNA)
6. Piece_CRISPR_Cas3_Shredder (#E63946) — Nuclease lobe & Cas3 HD-nuclease/helicase shredder (PDB: 4QQW)
7. Piece_CRISPR_EcoRI_Scissors (#06D6A0) — Bottom-Right: EcoRI restriction endonuclease homodimer clamping 5'-GAATTC-3' DNA (PDB: 1ERI)
"""

import os
import sys
import math
import bpy
from mathutils import Vector

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mn_builder_utils import (
    mn,
    clear_scene,
    three_to_blender,
    build_mn_piece,
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 5H9F (CRISPR Cascade R-loop complex), 4QQW (Cas3 nuclease-helicase), 1ERI (EcoRI-DNA complex), 1BNA (B-DNA)...")
mol_5h9f = mn.entities.Molecule.fetch("5H9F")
u_5h9f = mol_5h9f.universe

mol_4qqw = mn.entities.Molecule.fetch("4QQW")
u_4qqw = mol_4qqw.universe

mol_1eri = mn.entities.Molecule.fetch("1ERI")
u_1eri = mol_1eri.universe

mol_1bna = mn.entities.Molecule.fetch("1BNA")
u_1bna = mol_1bna.universe

# 1. Piece_CRISPR_Cas7_Backbone (#3A86FF — Left REC recognition lobe)
build_mn_piece(
    u_5h9f,
    "Piece_CRISPR_Cas7_Backbone",
    "protein",
    style="surface",
    color_hex="#3A86FF",
    decimate=0.28,
    center_three=(-2.25, 0.45, -0.15),
    spans_three=(2.65, 3.35, 2.35),
)

# 2. Piece_CRISPR_crRNA_Guide (#9D4EDD — Single-guide crRNA hybridizing across the R-loop + stem-loop handle)
rna_sel = "nucleic"
if len(u_5h9f.select_atoms(rna_sel)) == 0:
    rna_sel = "chainID M"
build_mn_piece(
    u_5h9f,
    "Piece_CRISPR_crRNA_Guide",
    rna_sel,
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.60,
    center_three=(-1.25, 0.65, 0.45),
    spans_three=(2.65, 1.85, 1.35),
)

# 3. Piece_CRISPR_Cas8e_PAM_Tail (#00F5D4 — Nuclease/PAM lobe on right of R-loop complex)
build_mn_piece(
    u_4qqw,
    "Piece_CRISPR_Cas8e_PAM_Tail",
    "protein",
    style="surface",
    color_hex="#FFB703",
    decimate=0.38,
    center_three=(-0.55, 0.55, -0.10),
    spans_three=(2.25, 2.85, 2.15),
)

# 4. Piece_CRISPR_Cas11_Cas6e (#2A9D8F — Top-Right Type I-E Cascade seahorse complex 5H9F)
build_mn_piece(
    u_5h9f,
    "Piece_CRISPR_Cas11_Cas6e",
    "protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.30,
    center_three=(2.65, 1.45, 0.0),
    spans_three=(2.25, 2.55, 2.05),
)

# 5. Piece_CRISPR_Phage_DNA_RLoop (#F77F00 — Target phage DNA duplex arms + central unwound R-loop bubble)
dna_left = build_mn_piece(
    u_1bna,
    "Phage_DNA_Left",
    "nucleic",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.70,
    center_three=(-3.65, -0.35, 0.35),
    spans_three=(1.65, 0.85, 0.85),
    euler_xyz=(0.0, 1.57, 0.0),
)
dna_rloop = build_mn_piece(
    u_5h9f,
    "Phage_DNA_RLoop",
    rna_sel,
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.60,
    center_three=(-1.45, -0.45, 0.45),
    spans_three=(2.85, 1.35, 1.25),
    euler_xyz=(0.3, 0.0, 0.0),
)
dna_right = build_mn_piece(
    u_1bna,
    "Phage_DNA_Right",
    "nucleic",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.70,
    center_three=(0.45, -0.35, 0.35),
    spans_three=(1.55, 0.85, 0.85),
    euler_xyz=(0.0, 1.57, 0.0),
)
join_objects_as_piece([dna_left, dna_rloop, dna_right], "Piece_CRISPR_Phage_DNA_RLoop", "#F77F00")

# 6. Piece_CRISPR_Cas3_Shredder (#E63946 — 5'-NGG-3' PAM sensor & Cas3 HD nuclease-helicase at lower-right of R-loop)
build_mn_piece(
    u_4qqw,
    "Piece_CRISPR_Cas3_Shredder",
    "resid 1:300 and protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.50,
    center_three=(-0.75, -1.25, 0.45),
    spans_three=(1.85, 1.55, 1.55),
)

# 7. Piece_CRISPR_EcoRI_Scissors (#06D6A0 — Bottom-Right: EcoRI restriction endonuclease homodimer clamping 5'-GAATTC-3' DNA)
ecori_prot = build_mn_piece(
    u_1eri,
    "EcoRI_Protein",
    "protein",
    style="surface",
    color_hex="#06D6A0",
    decimate=0.45,
    center_three=(2.65, -1.65, 0.0),
    spans_three=(2.15, 1.85, 1.95),
)
ecori_dna = build_mn_piece(
    u_1bna,
    "EcoRI_Target_DNA",
    "nucleic",
    style="cartoon",
    color_hex="#06D6A0",
    decimate=0.70,
    center_three=(2.65, -1.65, 0.25),
    spans_three=(2.85, 0.85, 0.85),
    euler_xyz=(0.0, 1.57, 0.0),
)
join_objects_as_piece([ecori_prot, ecori_dna], "Piece_CRISPR_EcoRI_Scissors", "#06D6A0")

for tmp in [mol_5h9f.object, mol_4qqw.object, mol_1eri.object, mol_1bna.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("crispr_defense_1vy8.glb", blend_filename="crispr_defense_1vy8.blend")
