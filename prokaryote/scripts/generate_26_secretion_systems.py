"""
generate_26_secretion_systems.py

Authentic Macromolecular Synthesis of Element 26:
Bacterial Secretion Systems: T3SS Injectisome, T4SS Conjugation & T6SS Crossbow
(PDB: 4B0M, 5O4U, 6GTO, 6W6M, 1BNA, 4MTK) using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: secretion_systems.glb):
1. Piece_Sec_T3SS_BasalBody (#3A86FF) — Left (X = -3.1): T3SS OM/IM basal rings (4B0M) + InvC ATPase (5O4U) + envelope bilayers
2. Piece_Sec_T3SS_Needle_Tip (#E63946) — Left (X = -3.1): Hollow extracellular PrgI helical needle filament & tip (6GTO)
3. Piece_Sec_T4SS_Plasmid_Relaxosome (#FFB703) — Center (X = 0.0): Cytoplasmic relaxosome & ssDNA plasmid strand (1BNA)
4. Piece_Sec_T4SS_IMC_ATPases (#F77F00) — Center (X = 0.0): Inner Membrane VirB4/VirB11 hexameric ATPase barrels (5O4U)
5. Piece_Sec_T4SS_OMCC_Chamber (#9D4EDD) — Center (X = 0.0): Outer Membrane VirB7/B9/B10 Core Complex chamber (4B0M)
6. Piece_Sec_T4SS_FPilus_Tube (#00F5D4) — Center (X = 0.0): Extracellular conjugative F-pilus filament (6W6M)
7. Piece_Sec_T6SS_VipAB_Sheath (#06D6A0) — Right (X = +3.1): TssJLM anchor + contractile VipA-VipB outer sheath (6GTO)
8. Piece_Sec_T6SS_Hcp_VgrG_Spear (#2A9D8F) — Right (X = +3.1): Inner Hcp hexameric tube + VgrG-PAAR puncturing spike (4MTK)
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
    build_phospholipid_bilayer_piece,
    build_peptidoglycan_lattice_piece,
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 4B0M (Secretin barrel), 5O4U (Hexameric ATPase motor), 6GTO (Helical needle rod), 6W6M (Conjugative pilus), 1BNA (DNA), 4MTK (VgrG spike)...")
mol_4b0m = mn.entities.Molecule.fetch("4B0M")
u_4b0m = mol_4b0m.universe

mol_5o4u = mn.entities.Molecule.fetch("5O4U")
u_5o4u = mol_5o4u.universe

mol_6gto = mn.entities.Molecule.fetch("6GTO")
u_6gto = mol_6gto.universe

mol_6w6m = mn.entities.Molecule.fetch("6W6M")
u_6w6m = mol_6w6m.universe

mol_1bna = mn.entities.Molecule.fetch("1BNA")
u_1bna = mol_1bna.universe

mol_4mtk = mn.entities.Molecule.fetch("4MTK")
u_4mtk = mol_4mtk.universe

# Shared Outer Membrane, Peptidoglycan & Inner Membrane bilayers spanning all 3 columns
pores = [(-3.1, 0.0, 0.85), (0.0, 0.0, 0.90), (3.1, 0.0, 0.85)]
om_slab = build_phospholipid_bilayer_piece(
    "Sec_OM_Bilayer",
    center_three=(0.0, 1.35, 0.0),
    span_x=9.2,
    thickness_y=0.80,
    span_z=2.8,
    color_hex="#06D6A0",
    nx=18,
    nz=6,
    hole_xz_radii=pores,
)
pg_slab = build_peptidoglycan_lattice_piece(
    "Sec_PG_Lattice",
    center_three=(0.0, 0.0, 0.0),
    span_x=9.2,
    thickness_y=0.50,
    span_z=2.6,
    color_hex="#E76F51",
    n_layers=2,
    nx=10,
    nz=3,
)
im_slab = build_phospholipid_bilayer_piece(
    "Sec_IM_Bilayer",
    center_three=(0.0, -1.35, 0.0),
    span_x=9.2,
    thickness_y=0.80,
    span_z=2.8,
    color_hex="#06D6A0",
    nx=18,
    nz=6,
    hole_xz_radii=pores,
)

# ==============================================================================
# COLUMN 1 (Left, X = -3.1): T3SS Virulence Injectisome
# ==============================================================================
t3_om_ring = build_mn_piece(
    u_4b0m,
    "T3SS_OM_Secretin",
    "protein",
    style="surface",
    color_hex="#3A86FF",
    decimate=0.45,
    center_three=(-3.1, 1.35, 0.0),
    spans_three=(1.65, 1.25, 1.65),
)
t3_im_ring = build_mn_piece(
    u_4b0m,
    "T3SS_IM_BasalRing",
    "protein",
    style="surface",
    color_hex="#3A86FF",
    decimate=0.45,
    center_three=(-3.1, -1.25, 0.0),
    spans_three=(1.75, 1.25, 1.75),
)
t3_atpase = build_mn_piece(
    u_5o4u,
    "T3SS_InvC_ATPase",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.45,
    center_three=(-3.1, -2.45, 0.0),
    spans_three=(1.65, 1.25, 1.65),
)
join_objects_as_piece([t3_om_ring, t3_im_ring, t3_atpase], "Piece_Sec_T3SS_BasalBody", "#3A86FF")

# 2. Piece_Sec_T3SS_Needle_Tip (#E63946 — Hollow extracellular PrgI helical needle filament rising to Y = +3.1)
needle_lower = build_mn_piece(
    u_6gto,
    "T3SS_Needle_Lower",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.45,
    center_three=(-3.1, 0.15, 0.0),
    spans_three=(0.75, 2.25, 0.75),
)
needle_upper = build_mn_piece(
    u_6gto,
    "T3SS_Needle_Upper",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.45,
    center_three=(-3.1, 2.25, 0.0),
    spans_three=(0.75, 2.15, 0.75),
)
join_objects_as_piece([needle_lower, needle_upper], "Piece_Sec_T3SS_Needle_Tip", "#E63946")

# ==============================================================================
# COLUMN 2 (Center, X = 0.0): T4SS Conjugative Pilus & DNA Transfer Machine
# ==============================================================================
# 3. Piece_Sec_T4SS_Plasmid_Relaxosome (#FFB703 — Cytoplasmic ssDNA strand & VirD4 coupling protein)
t4_dna_mid = build_mn_piece(
    u_1bna,
    "T4SS_ssDNA_Mid",
    "nucleic",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.70,
    center_three=(0.0, 0.0, 0.0),
    spans_three=(0.65, 2.45, 0.65),
)
t4_dna_bot = build_mn_piece(
    u_1bna,
    "T4SS_ssDNA_Bot",
    "nucleic",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.70,
    center_three=(0.0, -2.75, 0.0),
    spans_three=(0.75, 1.65, 0.75),
)
join_objects_as_piece([t4_dna_mid, t4_dna_bot], "Piece_Sec_T4SS_Plasmid_Relaxosome", "#FFB703")

# 4. Piece_Sec_T4SS_IMC_ATPases (#F77F00 — Inner membrane VirB4/VirB11 hexameric ATPase barrels)
build_mn_piece(
    u_5o4u,
    "Piece_Sec_T4SS_IMC_ATPases",
    "protein",
    style="surface",
    color_hex="#F77F00",
    decimate=0.40,
    center_three=(0.0, -1.75, 0.0),
    spans_three=(2.25, 1.95, 2.15),
)

# 5. Piece_Sec_T4SS_OMCC_Chamber (#9D4EDD — Outer membrane VirB7/B9/B10 Core Complex chamber)
build_mn_piece(
    u_4b0m,
    "Piece_Sec_T4SS_OMCC_Chamber",
    "protein",
    style="surface",
    color_hex="#9D4EDD",
    decimate=0.45,
    center_three=(0.0, 1.45, 0.0),
    spans_three=(1.85, 1.35, 1.85),
)

# 6. Piece_Sec_T4SS_FPilus_Tube (#00F5D4 — Extracellular conjugative F-pilus filament)
build_mn_piece(
    u_6w6m,
    "Piece_Sec_T4SS_FPilus_Tube",
    "protein",
    style="cartoon",
    color_hex="#00F5D4",
    decimate=0.50,
    center_three=(0.0, 2.55, 0.0),
    spans_three=(0.75, 1.85, 0.75),
)

# ==============================================================================
# COLUMN 3 (Right, X = +3.1): T6SS Contractile Crossbow & VgrG Spear
# ==============================================================================
# 7. Piece_Sec_T6SS_VipAB_Sheath (#06D6A0 — TssJLM anchor + contractile VipA-VipB sheath + envelope slabs)
t6_anchor = build_mn_piece(
    u_4b0m,
    "T6SS_TssJLM_Anchor",
    "protein",
    style="surface",
    color_hex="#06D6A0",
    decimate=0.45,
    center_three=(3.1, 1.35, 0.0),
    spans_three=(1.75, 1.35, 1.75),
)
t6_sheath_1 = build_mn_piece(
    u_6gto,
    "T6SS_Sheath_Upper",
    "protein",
    style="surface",
    color_hex="#06D6A0",
    decimate=0.45,
    center_three=(3.1, -0.05, 0.0),
    spans_three=(1.15, 1.85, 1.15),
)
t6_sheath_2 = build_mn_piece(
    u_6gto,
    "T6SS_Sheath_Lower",
    "protein",
    style="surface",
    color_hex="#06D6A0",
    decimate=0.45,
    center_three=(3.1, -1.55, 0.0),
    spans_three=(1.15, 1.85, 1.15),
)
join_objects_as_piece([om_slab, pg_slab, im_slab, t6_anchor, t6_sheath_1, t6_sheath_2], "Piece_Sec_T6SS_VipAB_Sheath", "#06D6A0")

# 8. Piece_Sec_T6SS_Hcp_VgrG_Spear (#2A9D8F — Inner Hcp tube + sharp VgrG/PAAR puncturing spike at bottom)
build_mn_piece(
    u_4mtk,
    "Piece_Sec_T6SS_Hcp_VgrG_Spear",
    "protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.55,
    center_three=(3.1, -2.75, 0.0),
    spans_three=(1.15, 1.95, 1.15),
    euler_xyz=(3.14, 0.0, 0.0),
)

for tmp in [mol_4b0m.object, mol_5o4u.object, mol_6gto.object, mol_6w6m.object, mol_1bna.object, mol_4mtk.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("secretion_systems.glb", blend_filename="secretion_systems.blend")
