"""
generate_15_envelopes.py

Authentic Macromolecular & Structural Synthesis of Element 15:
Comparative Prokaryotic Cell Envelopes (PDB: 2OMF, 1EQ7, 3VMA) using Molecular Nodes in Blender 5.2.

Constructs the 3-column comparative cell envelope architecture matching expected_envelopes.png:
- Left (X = -4.2, Gram-Negative):
  * Piece_Env_GN_InnerMembrane (#06D6A0) — Dual-leaflet phospholipid bilayer (headgroups + acyl tails)
  * Piece_Env_GN_Peptidoglycan (#E76F51) — Thin periplasmic NAM-NAG murein lattice
  * Piece_Env_GN_Lpp_Staples (#FFB703) — PDB 1EQ7 Braun's lipoprotein coiled-coil trimers
  * Piece_Env_GN_OuterMembrane (#0077B6) — Asymmetric LPS outer membrane with O-antigen chains
  * Piece_Env_GN_OmpF_Porin (#3A86FF) — PDB 2OMF OmpF trimeric 16-stranded beta-barrel porin
- Center (X = 0.0, Gram-Positive):
  * Piece_Env_GP_PlasmaMembrane (#06D6A0) — Cytoplasmic phospholipid bilayer
  * Piece_Env_GP_ThickMurein (#E76F51) — 6-layer thick cross-linked peptidoglycan wall
  * Piece_Env_GP_TeichoicAcids (#9D4EDD) — Serpentine LTA/WTA poly-ribitol-phosphate chains threading the wall
- Right (X = +4.2, Archaeal / Crystalline S-Layer & Porin):
  * Piece_Env_AR_EtherMembrane (#2A9D8F) — Archaeal isoprenoid ether membrane + tether network
  * Piece_Env_AR_SLayer (#00F5D4) — PDB 3VMA octameric goblet porin + crystalline S-layer array
"""

import os
import sys
import math
import bpy
import bmesh
from mathutils import Vector, Matrix

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mn_builder_utils import (
    mn,
    clear_scene,
    hex_to_rgba,
    three_to_blender,
    create_pbr_material,
    build_mn_piece,
    join_objects_as_piece,
    build_phospholipid_bilayer_piece,
    build_peptidoglycan_lattice_piece,
    export_roadmap_glb,
)

clear_scene()

# -------------------------------------------------------------------------
# COLUMN 1 (LEFT, X = -4.3): GRAM-NEGATIVE ENVELOPE
# -------------------------------------------------------------------------
# 1. Piece_Env_GN_InnerMembrane
build_phospholipid_bilayer_piece(
    "Piece_Env_GN_InnerMembrane",
    center_three=(-4.3, -3.2, 0.0),
    span_x=3.4,
    thickness_y=1.25,
    span_z=2.8,
    color_hex="#06D6A0",
    nx=10,
    nz=8,
)

# 2. Piece_Env_GN_Peptidoglycan
build_peptidoglycan_lattice_piece(
    "Piece_Env_GN_Peptidoglycan",
    center_three=(-4.3, -1.2, 0.0),
    span_x=3.4,
    thickness_y=0.45,
    span_z=2.8,
    color_hex="#E76F51",
    n_layers=2,
    nx=7,
    nz=5,
)

# 3. Piece_Env_GN_Lpp_Staples (PDB 1EQ7 Braun's Lipoprotein trimeric coiled-coil)
print("[*] Fetching 1EQ7 (Braun's lipoprotein Lpp trimer)...")
mol_lpp = mn.entities.Molecule.fetch("1EQ7")
u_lpp = mol_lpp.universe
lpp1 = build_mn_piece(
    u_lpp,
    "Lpp_1",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.65,
    center_three=(-3.3, 0.15, 0.3),
    spans_three=(0.85, 2.2, 0.85),
    euler_xyz=(math.pi / 2, 0.0, 0.0),
)
lpp2 = build_mn_piece(
    u_lpp,
    "Lpp_2",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.65,
    center_three=(-5.3, 0.15, -0.3),
    spans_three=(0.85, 2.2, 0.85),
    euler_xyz=(math.pi / 2, 0.0, 0.4),
)
if mol_lpp.object and mol_lpp.object.name in bpy.data.objects:
    bpy.data.objects.remove(mol_lpp.object, do_unlink=True)
join_objects_as_piece([lpp1, lpp2], "Piece_Env_GN_Lpp_Staples", "#FFB703")

# 4. Piece_Env_GN_OuterMembrane (Asymmetric bilayer with O-antigen LPS chains + pore for OmpF)
om_base = build_phospholipid_bilayer_piece(
    "OM_Base",
    center_three=(-4.3, 1.9, 0.0),
    span_x=3.4,
    thickness_y=1.25,
    span_z=2.8,
    color_hex="#0077B6",
    nx=10,
    nz=8,
    hole_xz_radii=[(-4.3, 0.0, 1.05)],
)
# Add LPS O-antigen polysaccharide chains rising above the outer leaflet (Y = +2.6 to +3.9)
bm_lps = bmesh.new()
for ix in range(8):
    x = -4.3 - 1.55 + ix * (3.1 / 7.0)
    for iz in range(5):
        z = -1.1 + iz * (2.2 / 4.0)
        if math.hypot(x - (-4.3), z) < 1.05:
            continue
        for ib in range(6):
            by = 2.62 + ib * 0.21
            bx = x + 0.08 * math.sin(ib * 1.3 + ix)
            bz = z + 0.06 * math.cos(ib * 1.1 + iz)
            bmesh.ops.create_uvsphere(
                bm_lps,
                u_segments=7,
                v_segments=6,
                radius=0.095,
                matrix=Matrix.Translation(three_to_blender(bx, by, bz)),
            )
mesh_lps = bpy.data.meshes.new("LPS_Chains")
bm_lps.to_mesh(mesh_lps)
bm_lps.free()
obj_lps = bpy.data.objects.new("LPS_Chains", mesh_lps)
bpy.context.collection.objects.link(obj_lps)
join_objects_as_piece([om_base, obj_lps], "Piece_Env_GN_OuterMembrane", "#0077B6")

# 5. Piece_Env_GN_OmpF_Porin (PDB 2OMF OmpF beta-barrel porin trimer)
print("[*] Fetching 2OMF (OmpF beta-barrel porin)...")
mol_ompf = mn.entities.Molecule.fetch("2OMF")
u_ompf = mol_ompf.universe
b1 = build_mn_piece(
    u_ompf,
    "OmpF_1",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.55,
    center_three=(-4.3, 1.95, 0.35),
    spans_three=(1.35, 1.85, 1.35),
)
b2 = build_mn_piece(
    u_ompf,
    "OmpF_2",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.55,
    center_three=(-3.85, 1.95, -0.25),
    spans_three=(1.35, 1.85, 1.35),
    euler_xyz=(0, 0, 2.09),
)
b3 = build_mn_piece(
    u_ompf,
    "OmpF_3",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.55,
    center_three=(-4.75, 1.95, -0.25),
    spans_three=(1.35, 1.85, 1.35),
    euler_xyz=(0, 0, 4.18),
)
if mol_ompf.object and mol_ompf.object.name in bpy.data.objects:
    bpy.data.objects.remove(mol_ompf.object, do_unlink=True)
join_objects_as_piece([b1, b2, b3], "Piece_Env_GN_OmpF_Porin", "#3A86FF")

# -------------------------------------------------------------------------
# COLUMN 2 (CENTER, X = 0.0): GRAM-POSITIVE ENVELOPE
# -------------------------------------------------------------------------
# 6. Piece_Env_GP_PlasmaMembrane
build_phospholipid_bilayer_piece(
    "Piece_Env_GP_PlasmaMembrane",
    center_three=(0.0, -3.2, 0.0),
    span_x=3.4,
    thickness_y=1.25,
    span_z=2.8,
    color_hex="#06D6A0",
    nx=10,
    nz=8,
)

# 7. Piece_Env_GP_ThickMurein (Thick 6-layer cross-linked murein wall)
build_peptidoglycan_lattice_piece(
    "Piece_Env_GP_ThickMurein",
    center_three=(0.0, 0.45, 0.0),
    span_x=3.4,
    thickness_y=4.2,
    span_z=2.8,
    color_hex="#E76F51",
    n_layers=7,
    nx=8,
    nz=5,
)

# 8. Piece_Env_GP_TeichoicAcids (Serpentine LTA/WTA poly-ribitol-phosphate chains threading the wall)
bm_wta = bmesh.new()
wta_roots = [(-1.25, -0.5), (-0.45, 0.55), (0.45, -0.45), (1.25, 0.50), (0.0, 0.85)]
for idx_r, (rx, rz) in enumerate(wta_roots):
    y_start = -3.1 if idx_r % 2 == 0 else -0.8
    n_beads = 28 if idx_r % 2 == 0 else 19
    for ib in range(n_beads):
        frac = ib / max(n_beads - 1, 1)
        by = y_start + frac * (3.6 - y_start)
        bx = rx + 0.16 * math.sin(ib * 0.55 + idx_r)
        bz = rz + 0.12 * math.cos(ib * 0.55 + idx_r)
        bmesh.ops.create_uvsphere(
            bm_wta,
            u_segments=10,
            v_segments=8,
            radius=0.145,
            matrix=Matrix.Translation(three_to_blender(bx, by, bz)),
        )
mesh_wta = bpy.data.meshes.new("Piece_Env_GP_TeichoicAcids")
bm_wta.to_mesh(mesh_wta)
bm_wta.free()
obj_wta = bpy.data.objects.new("Piece_Env_GP_TeichoicAcids", mesh_wta)
bpy.context.collection.objects.link(obj_wta)
mat_wta = create_pbr_material("Mat_Piece_Env_GP_TeichoicAcids", hex_to_rgba("#9D4EDD"), roughness=0.35, metalness=0.10)
obj_wta.data.materials.append(mat_wta)

# -------------------------------------------------------------------------
# COLUMN 3 (RIGHT, X = +4.3): ARCHAEAL / CRYSTALLINE S-LAYER & PORIN
# -------------------------------------------------------------------------
# 9. Piece_Env_AR_EtherMembrane
build_phospholipid_bilayer_piece(
    "Piece_Env_AR_EtherMembrane",
    center_three=(4.3, -3.2, 0.0),
    span_x=3.4,
    thickness_y=1.35,
    span_z=2.8,
    color_hex="#2A9D8F",
    nx=10,
    nz=8,
)

# 10. Piece_Env_AR_SLayer (PDB 3VMA Crystalline Porin / S-Layer Goblet + Flanking Lattice)
print("[*] Fetching 3VMA (Crystalline octameric envelope porin / S-layer unit)...")
mol_3vma = mn.entities.Molecule.fetch("3VMA")
u_3vma = mol_3vma.universe
sl_center = build_mn_piece(
    u_3vma,
    "SL_Center",
    "protein",
    style="cartoon",
    color_hex="#00F5D4",
    decimate=0.45,
    center_three=(4.3, 1.35, 0.0),
    spans_three=(2.1, 3.2, 2.1),
)
sl_left = build_mn_piece(
    u_3vma,
    "SL_Left",
    "protein",
    style="surface",
    color_hex="#00F5D4",
    decimate=0.25,
    center_three=(3.05, 1.55, -0.35),
    spans_three=(1.35, 2.4, 1.35),
)
sl_right = build_mn_piece(
    u_3vma,
    "SL_Right",
    "protein",
    style="surface",
    color_hex="#00F5D4",
    decimate=0.25,
    center_three=(5.55, 1.55, 0.35),
    spans_three=(1.35, 2.4, 1.35),
)
if mol_3vma.object and mol_3vma.object.name in bpy.data.objects:
    bpy.data.objects.remove(mol_3vma.object, do_unlink=True)
join_objects_as_piece([sl_center, sl_left, sl_right], "Piece_Env_AR_SLayer", "#00F5D4")

export_roadmap_glb("envelopes_comparison.glb", blend_filename="envelopes_comparison.blend")
