"""
generate_17_microcompartment.py

Authentic Macromolecular Synthesis of Element 17:
Bacterial Microcompartment (BMC) & Carboxysome Icosahedral Shell (PDB: 3I82, 1RBL, 1THJ)
using Molecular Nodes in Blender 5.2.

Matches the cutaway icosahedral organelle illustration in expected_microcompartment.png:
1. Piece_BMC_Hexamer_Facets (#0077B6) — PDB 3I82 CcmK hexameric shell tiles forming the cutaway icosahedral facets
2. Piece_BMC_Trimer_GatedPores (#00F5D4) — BMC-T gated pseudohexamer pores along the cutaway rim
3. Piece_BMC_Pentamer_Vertices (#FFB703) — Golden 5-fold vertex caps crowning the icosahedral vertices
4. Piece_BMC_Cargo_Enzymes (#9D4EDD) — PDB 1RBL RuBisCO L8S8 holoenzyme array packed inside the central lumen
5. Piece_BMC_CarbonicAnhydrase (#E63946) — PDB 1THJ Carbonic Anhydrase trimers/dimers interspersed in the lumen
"""

import os
import sys
import math
import bpy
from mathutils import Vector, Matrix

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mn_builder_utils import (
    mn,
    clear_scene,
    hex_to_rgba,
    three_to_blender,
    build_mn_piece,
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 3I82 (Carboxysome CcmK hexamer shell tile), 1RBL (RuBisCO), 1THJ (Carbonic anhydrase)...")
mol_3i82 = mn.entities.Molecule.fetch("3I82")
u_3i82 = mol_3i82.universe

mol_1rbl = mn.entities.Molecule.fetch("1RBL")
u_1rbl = mol_1rbl.universe

mol_1thj = mn.entities.Molecule.fetch("1THJ")
u_1thj = mol_1thj.universe

# Base hexamer tile from 3I82 (aligned flat in X-Y plane with normal along Z)
hex_tile = build_mn_piece(
    u_3i82,
    "Base_BMC_Hexamer",
    "protein",
    style="cartoon",
    color_hex="#0077B6",
    decimate=0.45,
    center_three=(0, 0, 0),
    spans_three=(2.2, 2.2, 0.95),
)

# Base RuBisCO complex from 1RBL
rubisco_base = build_mn_piece(
    u_1rbl,
    "Base_RuBisCO",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.28,
    center_three=(0, 0, 0),
    spans_three=(1.85, 1.85, 1.85),
)

# Base Carbonic Anhydrase from 1THJ
ca_base = build_mn_piece(
    u_1thj,
    "Base_CA",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.45,
    center_three=(0, 0, 0),
    spans_three=(1.35, 1.35, 1.35),
)


def place_oriented_copy(base_obj, pos_three, scale_xyz=(1.0, 1.0, 1.0)):
    p_b = three_to_blender(*pos_three)
    c = base_obj.copy()
    c.data = base_obj.data.copy()
    c.scale = scale_xyz
    c.location = p_b
    # Orient normal (Z_blender / Y_blender) radially outward from origin
    radial = p_b.normalized()
    up_ref = Vector((0, 0, 1)) if abs(radial.z) < 0.9 else Vector((1, 0, 0))
    quat = radial.to_track_quat('Y', 'Z')
    c.rotation_euler = quat.to_euler()
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return c


# Golden ratio icosahedral geometry (Radius R = 4.2, with front cutaway z_three > 1.35 open)
phi = (1.0 + math.sqrt(5.0)) / 2.0
raw_verts = [
    (-1,  phi, 0), ( 1,  phi, 0), (-1, -phi, 0), ( 1, -phi, 0),
    ( 0, -1,  phi), ( 0,  1,  phi), ( 0, -1, -phi), ( 0,  1, -phi),
    ( phi, 0, -1), ( phi, 0,  1), (-phi, 0, -1), (-phi, 0,  1),
]
R_shell = 4.25
ico_verts = []
for vx, vy, vz in raw_verts:
    norm = math.sqrt(vx*vx + vy*vy + vz*vz)
    ico_verts.append((R_shell * vx / norm, R_shell * vy / norm, R_shell * vz / norm))

ico_faces = [
    (0, 11, 5), (0, 5, 1), (0, 1, 7), (0, 7, 10), (0, 10, 11),
    (1, 5, 9), (5, 11, 4), (11, 10, 2), (10, 7, 6), (7, 1, 8),
    (3, 9, 4), (3, 4, 2), (3, 2, 6), (3, 6, 8), (3, 8, 9),
    (4, 9, 5), (2, 4, 11), (6, 2, 10), (8, 6, 7), (9, 8, 1),
]

# 1. Piece_BMC_Hexamer_Facets (#0077B6) & 2. Piece_BMC_Trimer_GatedPores (#00F5D4)
hex_objs = []
trimer_objs = []
for f_idx, (i0, i1, i2) in enumerate(ico_faces):
    v0, v1, v2 = ico_verts[i0], ico_verts[i1], ico_verts[i2]
    cx = (v0[0] + v1[0] + v2[0]) / 3.0
    cy = (v0[1] + v1[1] + v2[1]) / 3.0
    cz = (v0[2] + v1[2] + v2[2]) / 3.0
    # Leave front window open so lumen cargo is clearly visible
    if cz > 1.55:
        continue
    # Rim facets near the cutaway opening become BMC-T trimeric gated pores (#00F5D4)
    if cz > 0.15:
        trimer_objs.append(place_oriented_copy(hex_tile, (cx * 1.02, cy * 1.02, cz * 1.02), (0.95, 0.95, 1.15)))
    else:
        hex_objs.append(place_oriented_copy(hex_tile, (cx, cy, cz), (1.05, 1.05, 1.0)))
        # Also place edge tiles on back/side faces for dense tiling
        for va, vb in ((v0, v1), (v1, v2)):
            ex, ey, ez = 0.5 * (va[0] + vb[0]), 0.5 * (va[1] + vb[1]), 0.5 * (va[2] + vb[2])
            if ez < 0.25:
                hex_objs.append(place_oriented_copy(hex_tile, (ex * 0.96, ey * 0.96, ez * 0.96), (0.78, 0.78, 0.9)))

join_objects_as_piece(hex_objs, "Piece_BMC_Hexamer_Facets", "#0077B6")
join_objects_as_piece(trimer_objs, "Piece_BMC_Trimer_GatedPores", "#00F5D4")

# 3. Piece_BMC_Pentamer_Vertices (#FFB703 — 12 icosahedral vertices except front-most if blocking)
pent_objs = []
for vx, vy, vz in ico_verts:
    if vz > 2.8:
        # Offset front-most caps slightly outward to frame the cutaway window like expected_microcompartment.png
        vx *= 1.08
        vy *= 1.08
        vz = 1.65
    pent_objs.append(place_oriented_copy(hex_tile, (vx * 1.04, vy * 1.04, vz * 1.04), (0.75, 0.75, 1.35)))
join_objects_as_piece(pent_objs, "Piece_BMC_Pentamer_Vertices", "#FFB703")

# 4. Piece_BMC_Cargo_Enzymes (#9D4EDD — Packed RuBisCO array inside lumen)
rubisco_positions = [
    (0.0, 0.0, 0.2),
    (-1.35, 1.05, 0.1),
    (1.35, 1.05, 0.1),
    (-1.35, -1.05, 0.1),
    (1.35, -1.05, 0.1),
    (0.0, 1.65, -0.7),
    (0.0, -1.65, -0.7),
    (-1.6, 0.0, -0.9),
    (1.6, 0.0, -0.9),
    (0.0, 0.0, -1.5),
]
rub_objs = []
for idx, pos in enumerate(rubisco_positions):
    c = rubisco_base.copy()
    c.data = rubisco_base.data.copy()
    c.location = three_to_blender(*pos)
    c.rotation_euler = (idx * 0.5, idx * 0.7, idx * 0.3)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    rub_objs.append(c)
join_objects_as_piece(rub_objs, "Piece_BMC_Cargo_Enzymes", "#9D4EDD")

# 5. Piece_BMC_CarbonicAnhydrase (#E63946 — Carbonic Anhydrase dehydratases in lumen)
ca_positions = [
    (-0.55, 1.65, 0.95),
    (-1.75, 0.15, 0.95),
    (1.25, 0.15, 1.05),
    (0.25, -1.45, 0.95),
    (-0.65, -0.65, 1.15),
]
ca_objs = []
for idx, pos in enumerate(ca_positions):
    c = ca_base.copy()
    c.data = ca_base.data.copy()
    c.location = three_to_blender(*pos)
    c.rotation_euler = (idx * 0.8, idx * 0.4, idx * 0.9)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    ca_objs.append(c)
join_objects_as_piece(ca_objs, "Piece_BMC_CarbonicAnhydrase", "#E63946")

for tmp in [hex_tile, rubisco_base, ca_base, mol_3i82.object, mol_1rbl.object, mol_1thj.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("microcompartment_7o04.glb", blend_filename="microcompartment_7o04.blend")
