"""
generate_18_chemosensory_mcp.py

Authentic Macromolecular Synthesis of Element 18:
Chemosensory Transduction Array (MCP–CheW–CheA, PDB: 6S1K, 1VLT, 1EQ7, 3CHY)
using Molecular Nodes in Blender 5.2.

Matches the arched polar inner-membrane receptor array in expected_chemosensory_mcp.png:
1. Piece_6S1K_Periplasmic_Sensors (#FFB703) — PDB 1VLT periplasmic 4-helix ligand-binding sensory dimers (3 pairs)
2. Piece_6S1K_Inner_Membrane (#06D6A0) — Curved polar inner-membrane phospholipid bilayer (arch_curv=0.045)
3. Piece_6S1K_HAMP_Transducer (#00F5D4) — Sub-membrane HAMP 4-helix signal conversion bundles
4. Piece_6S1K_MCP_Trimers (#3A86FF) — PDB 1EQ7/6S1K long coiled-coil receptor stalks converging into trimers-of-dimers
5. Piece_6S1K_CheR_CheB_Adaptors (#9D4EDD) — Enzymatic CheR/CheB adaptation modules docked to the receptor stalks
6. Piece_6S1K_CheA_CheW_Baseplate (#F77F00) — PDB 6S1K cytoplasmic CheA histidine kinase & CheW coupling rings
7. Piece_6S1K_CheY_Messengers (#E63946) — PDB 3CHY phosphorylated CheY-P response regulator messengers
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

print("[*] Fetching 6S1K (Chemosensory baseplate), 1VLT (Tar/Tsr periplasmic sensor), 1EQ7 (Coiled-coil stalk), 3CHY (CheY)...")
mol_6s1k = mn.entities.Molecule.fetch("6S1K")
u_6s1k = mol_6s1k.universe

mol_1vlt = mn.entities.Molecule.fetch("1VLT")
u_1vlt = mol_1vlt.universe

mol_1eq7 = mn.entities.Molecule.fetch("1EQ7")
u_1eq7 = mol_1eq7.universe

mol_3chy = mn.entities.Molecule.fetch("3CHY")
u_3chy = mol_3chy.universe

sensor_base = build_mn_piece(
    u_1vlt,
    "Base_Sensor",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.55,
    center_three=(0, 0, 0),
    spans_three=(1.05, 1.95, 1.05),
)

stalk_base = build_mn_piece(
    u_1eq7,
    "Base_Stalk",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.65,
    center_three=(0, 0, 0),
    spans_three=(0.78, 4.6, 0.78),
    euler_xyz=(math.pi / 2.0, 0.0, 0.0),
)

chey_base = build_mn_piece(
    u_3chy,
    "Base_CheY",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.65,
    center_three=(0, 0, 0),
    spans_three=(1.1, 1.1, 1.1),
)

# 3 Trimers-of-Dimers X-anchors along the curved cell pole
pair_centers = [
    (-2.85, 0.14),   # Left pair (tilts inward slightly)
    (0.0,   0.0),    # Center pair
    (2.85,  -0.14),  # Right pair (tilts inward slightly)
]

# 1. Piece_6S1K_Periplasmic_Sensors (#FFB703)
sensor_objs = []
for px, tilt in pair_centers:
    y_arch = -0.045 * (px ** 2)
    for dx_sub in (-0.52, 0.52):
        sx = px + dx_sub
        sy = 3.25 + y_arch
        c = sensor_base.copy()
        c.data = sensor_base.data.copy()
        c.location = three_to_blender(sx, sy, 0.0)
        c.rotation_euler = (0.0, tilt, 0.0)
        bpy.context.collection.objects.link(c)
        bpy.context.view_layer.objects.active = c
        c.select_set(True)
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        sensor_objs.append(c)
join_objects_as_piece(sensor_objs, "Piece_6S1K_Periplasmic_Sensors", "#FFB703")

# 2. Piece_6S1K_Inner_Membrane (#06D6A0 — Curved polar inner membrane bilayer)
build_phospholipid_bilayer_piece(
    "Piece_6S1K_Inner_Membrane",
    center_three=(0.0, 1.65, 0.0),
    span_x=8.8,
    thickness_y=1.25,
    span_z=3.0,
    color_hex="#06D6A0",
    nx=20,
    nz=8,
    arch_curv=0.045,
    hole_xz_radii=[(-2.85, 0.0, 0.85), (0.0, 0.0, 0.85), (2.85, 0.0, 0.85)],
)

# 3. Piece_6S1K_HAMP_Transducer (#00F5D4 — Sub-membrane HAMP 4-helix bundles at Y ≈ +0.25)
hamp_objs = []
for px, tilt in pair_centers:
    y_arch = -0.045 * (px ** 2)
    for dx_sub in (-0.42, 0.42):
        hx = px * 0.90 + dx_sub
        hy = 0.25 + y_arch
        c = sensor_base.copy()
        c.data = sensor_base.data.copy()
        c.scale = (0.68, 0.68, 0.55)
        c.location = three_to_blender(hx, hy, 0.0)
        c.rotation_euler = (0.0, tilt, 0.4)
        bpy.context.collection.objects.link(c)
        bpy.context.view_layer.objects.active = c
        c.select_set(True)
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        hamp_objs.append(c)
join_objects_as_piece(hamp_objs, "Piece_6S1K_HAMP_Transducer", "#00F5D4")

# 4. Piece_6S1K_MCP_Trimers (#3A86FF — Long coiled-coil stalks spanning TM + cytoplasm down to baseplate)
stalk_objs = []
for px, tilt in pair_centers:
    y_arch = -0.045 * (px ** 2)
    for dx_sub in (-0.38, 0.38):
        tx = px * 0.84 + dx_sub
        ty = -0.35 + y_arch
        c = stalk_base.copy()
        c.data = stalk_base.data.copy()
        c.location = three_to_blender(tx, ty, 0.0)
        c.rotation_euler = (0.0, tilt * 1.15, 0.0)
        bpy.context.collection.objects.link(c)
        bpy.context.view_layer.objects.active = c
        c.select_set(True)
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        stalk_objs.append(c)
join_objects_as_piece(stalk_objs, "Piece_6S1K_MCP_Trimers", "#3A86FF")

# 5. Piece_6S1K_CheR_CheB_Adaptors (#9D4EDD — Adaptation enzymes docked along the methylation helices)
adapt_objs = []
for ax, ay, az in [(-2.35, -1.35, 0.55), (-0.75, -1.45, -0.55), (0.85, -1.45, 0.55), (2.35, -1.35, -0.55)]:
    c = chey_base.copy()
    c.data = chey_base.data.copy()
    c.scale = (1.15, 1.15, 1.15)
    c.location = three_to_blender(ax, ay, az)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    adapt_objs.append(c)
join_objects_as_piece(adapt_objs, "Piece_6S1K_CheR_CheB_Adaptors", "#9D4EDD")

# 6. Piece_6S1K_CheA_CheW_Baseplate (#F77F00 — PDB 6S1K Cytoplasmic CheA/CheW baseplate at receptor tips)
baseplate_1 = build_mn_piece(
    u_6s1k,
    "Baseplate_Center",
    "protein",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.35,
    center_three=(0.0, -2.95, 0.0),
    spans_three=(6.2, 1.85, 2.8),
)
join_objects_as_piece([baseplate_1], "Piece_6S1K_CheA_CheW_Baseplate", "#F77F00")

# 7. Piece_6S1K_CheY_Messengers (#E63946 — PDB 3CHY Diffusing CheY-P messengers below right of baseplate)
chey_objs = []
for cx, cy, cz in [(2.15, -3.55, 0.85), (3.15, -3.85, 0.35), (1.45, -4.05, -0.45)]:
    c = chey_base.copy()
    c.data = chey_base.data.copy()
    c.scale = (0.82, 0.82, 0.82)
    c.location = three_to_blender(cx, cy, cz)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    chey_objs.append(c)
join_objects_as_piece(chey_objs, "Piece_6S1K_CheY_Messengers", "#E63946")

for tmp in [sensor_base, stalk_base, chey_base, mol_6s1k.object, mol_1vlt.object, mol_1eq7.object, mol_3chy.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("chemosensory_6s1k.glb", blend_filename="chemosensory_6s1k.blend")
