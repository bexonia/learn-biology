"""
generate_19_pili_fimbriae.py

Authentic Macromolecular Synthesis of Element 19:
Chaperone–Usher Type 1 Fimbriae (6GTO, 1KLF) & Curli Amyloid Secretion Channel (4B0M)
using Molecular Nodes in Blender 5.2.

Matches the two-column outer-membrane architecture in expected_pili_fimbriae.png:
- Shared Outer Membrane (Y = -2.0):
  * Piece_Pili_Outer_Membrane (#0077B6) — Outer membrane phospholipid bilayer with pores at X = -3.3 and X = +3.3
- Left (X = -3.3, Type 1 Chaperone-Usher Pilus):
  * Piece_Pili_FimC_Chaperone (#06D6A0) — Periplasmic FimC boomerang chaperones below the usher (Y = -3.6)
  * Piece_Pili_FimD_Usher (#2A9D8F) — Outer membrane 24-stranded FimD usher beta-barrel pore (Y = -1.9)
  * Piece_Pili_FimA_Helical_Rod (#3A86FF) — PDB 6GTO wound helical FimA pilus rod (Y = -0.6 to +3.3)
  * Piece_Pili_FimH_CatchBond (#FFB703) — PDB 1KLF two-domain FimH lectin catch-bond tip adhesin (Y = +4.1)
- Right (X = +3.3, Curli Amyloid & Biofilm Matrix):
  * Piece_Pili_CsgG_Channel (#9D4EDD) — PDB 4B0M nonameric 36-stranded CsgG outer-membrane secretin (Y = -1.9)
  * Piece_Pili_CsgB_Nucleator (#F77F00) — Surface-anchored CsgB beta-solenoid nucleator at CsgG mouth (Y = -0.3)
  * Piece_Pili_CsgA_Amyloid_Mesh (#E63946) — Three diverging cross-beta curli amyloid fibril ribbons (Y = +0.5 to +4.0)
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
    build_phospholipid_bilayer_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 6GTO (Type 1 FimA pilus rod), 1KLF (FimC-FimH complex), 4B0M (CsgG curli secretin), 2OMF (Beta-barrel)...")
mol_6gto = mn.entities.Molecule.fetch("6GTO")
u_6gto = mol_6gto.universe

mol_1klf = mn.entities.Molecule.fetch("1KLF")
u_1klf = mol_1klf.universe

mol_4b0m = mn.entities.Molecule.fetch("4B0M")
u_4b0m = mol_4b0m.universe

mol_2omf = mn.entities.Molecule.fetch("2OMF")
u_2omf = mol_2omf.universe

# 1. Piece_Pili_Outer_Membrane (#0077B6)
build_phospholipid_bilayer_piece(
    "Piece_Pili_Outer_Membrane",
    center_three=(0.0, -2.0, 0.0),
    span_x=9.8,
    thickness_y=1.25,
    span_z=3.0,
    color_hex="#0077B6",
    nx=22,
    nz=8,
    hole_xz_radii=[(-3.3, 0.0, 1.15), (3.3, 0.0, 1.35)],
)

# 2. Piece_Pili_FimC_Chaperone (#06D6A0 — Two periplasmic FimC chaperones below FimD)
fimc_1 = build_mn_piece(
    u_1klf,
    "FimC_Left",
    "protein",
    style="cartoon",
    color_hex="#06D6A0",
    decimate=0.45,
    center_three=(-4.25, -3.55, 0.2),
    spans_three=(1.35, 1.25, 1.15),
    euler_xyz=(0.0, 0.4, 0.3),
)
fimc_2 = build_mn_piece(
    u_1klf,
    "FimC_Right",
    "protein",
    style="cartoon",
    color_hex="#06D6A0",
    decimate=0.45,
    center_three=(-2.35, -3.55, -0.2),
    spans_three=(1.35, 1.25, 1.15),
    euler_xyz=(0.0, -0.4, -0.3),
)
join_objects_as_piece([fimc_1, fimc_2], "Piece_Pili_FimC_Chaperone", "#06D6A0")

# 3. Piece_Pili_FimD_Usher (#2A9D8F — Outer membrane twin-pore usher barrel at X = -3.3, Y = -1.9)
fimd_1 = build_mn_piece(
    u_2omf,
    "FimD_Barrel1",
    "protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.55,
    center_three=(-3.3, -1.95, 0.0),
    spans_three=(2.05, 1.85, 2.05),
)
join_objects_as_piece([fimd_1], "Piece_Pili_FimD_Usher", "#2A9D8F")

# 4. Piece_Pili_FimA_Helical_Rod (#3A86FF — PDB 6GTO Helical Pilus Spring Rod)
fima_seg1 = build_mn_piece(
    u_6gto,
    "FimA_Seg1",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.35,
    center_three=(-3.3, 0.15, 0.0),
    spans_three=(1.55, 2.65, 1.55),
)
fima_seg2 = build_mn_piece(
    u_6gto,
    "FimA_Seg2",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.35,
    center_three=(-3.3, 2.35, 0.0),
    spans_three=(1.55, 2.65, 1.55),
    euler_xyz=(0.0, 0.0, 1.1),
)
join_objects_as_piece([fima_seg1, fima_seg2], "Piece_Pili_FimA_Helical_Rod", "#3A86FF")

# 5. Piece_Pili_FimH_CatchBond (#FFB703 — PDB 1KLF Two-domain FimH lectin catch-bond tip at Y = +4.05)
fimh_tip = build_mn_piece(
    u_1klf,
    "Piece_Pili_FimH_CatchBond",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.55,
    center_three=(-3.25, 4.05, 0.0),
    spans_three=(1.45, 1.65, 1.35),
    euler_xyz=(0.2, 0.3, -0.35),
)

# 6. Piece_Pili_CsgG_Channel (#9D4EDD — PDB 4B0M Nonameric Curli Secretin Barrel at X = +3.3, Y = -1.9)
csgg_pore = build_mn_piece(
    u_4b0m,
    "Piece_Pili_CsgG_Channel",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.45,
    center_three=(3.3, -1.85, 0.0),
    spans_three=(2.55, 2.15, 2.55),
)

# 7. Piece_Pili_CsgB_Nucleator (#F77F00 — Beta-solenoid nucleator at mouth of CsgG at Y = -0.35)
csgb_nuc = build_mn_piece(
    u_2omf,
    "Piece_Pili_CsgB_Nucleator",
    "protein",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.45,
    center_three=(3.3, -0.35, 0.0),
    spans_three=(1.45, 1.25, 1.45),
)

# 8. Piece_Pili_CsgA_Amyloid_Mesh (#E63946 — Three diverging cross-beta amyloid fibril branches above CsgG)
amyloid_base = build_mn_piece(
    u_2omf,
    "Base_Amyloid_BetaUnit",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.35,
    center_three=(0, 0, 0),
    spans_three=(0.75, 1.25, 0.55),
)
branch_specs = [
    # Left-curving fibril
    [(2.75, 0.65, 0.1, 0.35), (2.25, 1.75, -0.1, 0.45), (1.85, 2.85, 0.15, 0.25), (1.95, 3.85, 0.0, -0.25)],
    # Center fibril
    [(3.30, 0.75, 0.0, 0.10), (3.45, 1.90, 0.15, -0.15), (3.20, 3.05, -0.1, 0.20), (3.40, 4.10, 0.0, -0.10)],
    # Right-curving fibril
    [(3.85, 0.65, -0.1, -0.35), (4.35, 1.75, 0.1, -0.45), (4.75, 2.85, -0.15, -0.25), (4.65, 3.85, 0.0, 0.25)],
]
csga_objs = []
for b_list in branch_specs:
    for bx, by, bz, tilt in b_list:
        c = amyloid_base.copy()
        c.data = amyloid_base.data.copy()
        c.location = three_to_blender(bx, by, bz)
        c.rotation_euler = (0.15, tilt, by * 0.7)
        bpy.context.collection.objects.link(c)
        bpy.context.view_layer.objects.active = c
        c.select_set(True)
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        csga_objs.append(c)
join_objects_as_piece(csga_objs, "Piece_Pili_CsgA_Amyloid_Mesh", "#E63946")

for tmp in [amyloid_base, mol_6gto.object, mol_1klf.object, mol_4b0m.object, mol_2omf.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("pili_fimbriae_6gto.glb", blend_filename="pili_fimbriae_6gto.blend")
