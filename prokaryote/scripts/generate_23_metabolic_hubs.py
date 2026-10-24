"""
generate_23_metabolic_hubs.py

Authentic Macromolecular Synthesis of Element 23:
Prokaryotic Metabolic & Respiratory Supramolecular Hubs (PDB: 1EAE, 1L8A, 1ZMD, 6WTI)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: metabolic_hubs.glb):
1. Piece_Met_PDH_E2_CubicCore (#FFB703) — Central octahedral 24-subunit E2 transacetylase cubic core (PDB: 1EAE)
2. Piece_Met_PDH_E1_Shell (#3A86FF) — 4 peripheral E1 pyruvate dehydrogenase dimers at the 4 corners (PDB: 1L8A)
3. Piece_Met_PDH_E3_Shell (#9D4EDD) — 2 peripheral E3 dihydrolipoamide dehydrogenase dimers at top & bottom (PDB: 1ZMD)
4. Piece_Met_PDH_Lipoyl_Arms (#00F5D4) — Radial swinging lipoyl-lysine tether arms linking E2 core to E1/E3 shells
5. Piece_Met_Cyo_InnerMembrane (#06D6A0) — Bioenergetic inner membrane phospholipid bilayer on right
6. Piece_Met_CyoA_QuinolSite (#F77F00) — CyoA / Ubiquinol Q-loop oxidation domain at bottom of oxidase (PDB: 6WTI)
7. Piece_Met_CyoB_HemeCuCore (#E63946) — Three high-affinity heme porphyrin cofactors inside CydA/CyoB (PDB: 6WTI)
8. Piece_Met_CyoCD_Support (#2A9D8F) — Transmembrane oxidase heterodimer core (PDB: 6WTI)
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
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 1EAE (E2 cubic core), 1L8A (E1 decarboxylase), 1ZMD (E3 dehydrogenase), 6WTI (Cytochrome oxidase)...")
mol_1eae = mn.entities.Molecule.fetch("1EAE")
u_1eae = mol_1eae.universe

mol_1l8a = mn.entities.Molecule.fetch("1L8A")
u_1l8a = mol_1l8a.universe

mol_1zmd = mn.entities.Molecule.fetch("1ZMD")
u_1zmd = mol_1zmd.universe

mol_6wti = mn.entities.Molecule.fetch("6WTI")
u_6wti = mol_6wti.universe

# ==============================================================================
# LEFT SIDE (X = -2.35): Pyruvate Dehydrogenase (PDH) Supramolecular Complex
# ==============================================================================
# 1. Piece_Met_PDH_E2_CubicCore (#FFB703 — Octahedral 24-mer cubic core from 1EAE trimer arranged in a 3D cube)
e2_trimer = build_mn_piece(
    u_1eae,
    "Base_E2_Trimer",
    "protein",
    style="surface",
    color_hex="#FFB703",
    decimate=0.35,
    center_three=(0, 0, 0),
    spans_three=(1.35, 1.35, 1.35),
)
e2_objs = []
for sx in (-0.52, 0.52):
    for sy in (-0.52, 0.52):
        for sz in (-0.45, 0.45):
            c = e2_trimer.copy()
            c.data = e2_trimer.data.copy()
            c.location = three_to_blender(-2.35 + sx, 0.0 + sy, sz)
            c.rotation_euler = (sx * 0.8, sy * 0.8, sz * 0.8)
            bpy.context.collection.objects.link(c)
            bpy.context.view_layer.objects.active = c
            c.select_set(True)
            bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
            e2_objs.append(c)
join_objects_as_piece(e2_objs, "Piece_Met_PDH_E2_CubicCore", "#FFB703")

# 2. Piece_Met_PDH_E1_Shell (#3A86FF — 4 peripheral E1 dimers at the 4 diagonal corners around E2 cube)
e1_base = build_mn_piece(
    u_1l8a,
    "Base_E1_Dimer",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.28,
    center_three=(0, 0, 0),
    spans_three=(1.55, 1.55, 1.45),
)
e1_objs = []
e1_corners = [
    (-4.05,  1.85, 0.10),
    (-0.65,  1.85, 0.10),
    (-4.05, -1.85, 0.10),
    (-0.65, -1.85, 0.10),
]
for idx, (ex, ey, ez) in enumerate(e1_corners):
    c = e1_base.copy()
    c.data = e1_base.data.copy()
    c.location = three_to_blender(ex, ey, ez)
    c.rotation_euler = (0.2 * idx, 0.4 * idx, 0.6 * idx)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    e1_objs.append(c)
join_objects_as_piece(e1_objs, "Piece_Met_PDH_E1_Shell", "#3A86FF")

# 3. Piece_Met_PDH_E3_Shell (#9D4EDD — 2 peripheral E3 dimers at top and bottom of the PDH complex)
e3_top = build_mn_piece(
    u_1zmd,
    "E3_Top",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.35,
    center_three=(-2.35, 2.75, 0.0),
    spans_three=(1.85, 1.45, 1.55),
)
e3_bot = build_mn_piece(
    u_1zmd,
    "E3_Bot",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.35,
    center_three=(-2.35, -2.75, 0.0),
    spans_three=(1.85, 1.45, 1.55),
    euler_xyz=(0.0, 0.0, 3.14),
)
join_objects_as_piece([e3_top, e3_bot], "Piece_Met_PDH_E3_Shell", "#9D4EDD")

# 4. Piece_Met_PDH_Lipoyl_Arms (#00F5D4 — Radial swinging lipoyl-lysine tether arms)
lip_arm_base = build_mn_piece(
    u_1eae,
    "Base_Lipoyl_Arm",
    "chainID A and protein",
    style="ribbon",
    color_hex="#00F5D4",
    decimate=0.65,
    center_three=(0, 0, 0),
    spans_three=(0.65, 1.45, 0.65),
)
lip_objs = []
arm_poses = [
    ((-3.30,  1.05, 0.15), (0.0,  0.65, 0.0)),
    ((-1.40,  1.05, 0.15), (0.0, -0.65, 0.0)),
    ((-3.30, -1.05, 0.15), (0.0,  2.45, 0.0)),
    ((-1.40, -1.05, 0.15), (0.0, -2.45, 0.0)),
    ((-2.35,  1.65, 0.15), (0.0,  0.00, 0.0)),
    ((-2.35, -1.65, 0.15), (0.0,  3.14, 0.0)),
]
for pos, rot in arm_poses:
    c = lip_arm_base.copy()
    c.data = lip_arm_base.data.copy()
    c.location = three_to_blender(*pos)
    c.rotation_euler = rot
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    lip_objs.append(c)
join_objects_as_piece(lip_objs, "Piece_Met_PDH_Lipoyl_Arms", "#00F5D4")

# ==============================================================================
# RIGHT SIDE (X = +2.55): Cytochrome Oxidase in Inner Membrane (PDB: 6WTI)
# ==============================================================================
# 5. Piece_Met_Cyo_InnerMembrane (#06D6A0 — Inner membrane phospholipid bilayer on right)
build_phospholipid_bilayer_piece(
    "Piece_Met_Cyo_InnerMembrane",
    center_three=(2.55, 0.0, 0.0),
    span_x=3.9,
    thickness_y=1.35,
    span_z=3.2,
    color_hex="#06D6A0",
    nx=8,
    nz=6,
    hole_xz_radii=[(2.55, 0.0, 1.05)],
)

# 6. Piece_Met_CyoA_QuinolSite (#F77F00 — Soluble Q-loop ubiquinol oxidation domain at bottom of oxidase)
build_mn_piece(
    u_6wti,
    "Piece_Met_CyoA_QuinolSite",
    "chainID A and resid 240:360 and protein",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.70,
    center_three=(2.55, -1.95, 0.25),
    spans_three=(1.95, 1.45, 1.65),
)

# 7. Piece_Met_CyoB_HemeCuCore (#E63946 — Three high-affinity heme porphyrin cofactors inside 6WTI)
build_mn_piece(
    u_6wti,
    "Piece_Met_CyoB_HemeCuCore",
    "not protein and not water",
    style="ball_and_stick",
    color_hex="#E63946",
    decimate=0.75,
    center_three=(2.55, 0.35, 0.45),
    spans_three=(1.65, 1.55, 1.35),
)

# 8. Piece_Met_CyoCD_Support (#2A9D8F — Transmembrane oxidase heterodimer core)
build_mn_piece(
    u_6wti,
    "Piece_Met_CyoCD_Support",
    "protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.45,
    center_three=(2.55, 0.15, 0.0),
    spans_three=(2.45, 3.35, 2.25),
)

for tmp in [e2_trimer, e1_base, lip_arm_base, mol_1eae.object, mol_1l8a.object, mol_1zmd.object, mol_6wti.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("metabolic_hubs.glb", blend_filename="metabolic_hubs.blend")
