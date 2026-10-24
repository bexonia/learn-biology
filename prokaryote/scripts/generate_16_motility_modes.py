"""
generate_16_motility_modes.py

Authentic Macromolecular Synthesis of Element 16:
Prokaryotic Motility Modes: Type IV Pili, Spirochete/Archaellum & Gliding (PDB: 6W6M, 5O4U, 4B0M)
using Molecular Nodes in Blender 5.2.

Matches the 3-column comparative layout of expected_motility_modes.png:
- Left (X = -4.3, Type IV Pilus Grappling Hook):
  * Piece_Mot_T4P_PilBT_ATPase (#FFB703) — 6-subunit hexameric AAA+ ATPase ring at base
  * Piece_Mot_T4P_PilMNO_Alignment (#06D6A0) — Inner membrane phospholipid bilayer + alignment cage
  * Piece_Mot_T4P_PilQ_Secretin (#0077B6) — Outer membrane + PDB 4B0M dodecameric/nonameric secretin barrel
  * Piece_Mot_T4P_PilA_Filament (#3A86FF) — PDB 6W6M helical pilus subunits tiled along a curved grappling-hook filament
- Center (X = 0.0, Corkscrew / Archaellum Rotary Filament):
  * Piece_Mot_Arch_FlaIJ_ATPase (#F77F00) — Basal rotary ATPase motor complex (PDB 5O4U)
  * Piece_Mot_Arch_SLayer_Anchor (#2A9D8F) — Helical spirochete protoplasmic cylinder & stator bushing
  * Piece_Mot_Arch_Filament (#9D4EDD) — PDB 6W6M helical filament ribbons wrapping around the corkscrew
- Right (X = +4.3, Flavobacterial SprB Gliding Conveyor Track):
  * Piece_Mot_Glide_GldLM_Motor (#E63946) — PDB 5O4U transmembrane rotary proton motor in membrane
  * Piece_Mot_Glide_SprB_Track (#00F5D4) — Closed-loop conveyor belt studded with globular adhesin protein domains
"""

import os
import sys
import math
import bpy
import bmesh
from mathutils import Vector, Matrix, Euler

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
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 6W6M (Helical pilus/archaellum filament), 5O4U (Rotary motor), 4B0M (Secretin)...")
mol_6w6m = mn.entities.Molecule.fetch("6W6M")
u_6w6m = mol_6w6m.universe

mol_5o4u = mn.entities.Molecule.fetch("5O4U")
u_5o4u = mol_5o4u.universe

mol_4b0m = mn.entities.Molecule.fetch("4B0M")
u_4b0m = mol_4b0m.universe

# Base monomer from 5O4U for hexameric ATPase lobes and adhesin proteins
base_lobe = build_mn_piece(
    u_5o4u,
    "Base_Motor_Subunit",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.45,
    center_three=(0, 0, 0),
    spans_three=(0.95, 1.35, 0.95),
)

base_pilus = build_mn_piece(
    u_6w6m,
    "Base_Pilus_Segment",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.35,
    center_three=(0, 0, 0),
    spans_three=(1.15, 2.2, 1.15),
)

# -------------------------------------------------------------------------
# COLUMN 1 (LEFT, X = -4.3): TYPE IV PILUS TWITCHING ENGINE
# -------------------------------------------------------------------------
# 1. Piece_Mot_T4P_PilBT_ATPase (6-lobed hexameric ATPase ring at Y = -3.1)
atpase_lobes = []
for i in range(6):
    ang = i * (2.0 * math.pi / 6.0)
    lx = -4.3 + 0.72 * math.cos(ang)
    lz = 0.72 * math.sin(ang)
    ly = -3.1
    c = base_lobe.copy()
    c.data = base_lobe.data.copy()
    c.location = three_to_blender(lx, ly, lz)
    c.rotation_euler = (0, 0, ang)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    atpase_lobes.append(c)
join_objects_as_piece(atpase_lobes, "Piece_Mot_T4P_PilBT_ATPase", "#FFB703")

# 2. Piece_Mot_T4P_PilMNO_Alignment (Inner membrane bilayer at Y = -2.1 + periplasmic alignment pillars)
im_t4p = build_phospholipid_bilayer_piece(
    "IM_T4P",
    center_three=(-4.3, -2.1, 0.0),
    span_x=3.2,
    thickness_y=1.0,
    span_z=2.4,
    color_hex="#06D6A0",
    nx=9,
    nz=7,
    hole_xz_radii=[(-4.3, 0.0, 0.65)],
)
pil_m1 = base_lobe.copy()
pil_m1.data = base_lobe.data.copy()
pil_m1.location = three_to_blender(-3.55, -1.0, 0.0)
bpy.context.collection.objects.link(pil_m1)
bpy.context.view_layer.objects.active = pil_m1
pil_m1.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

pil_m2 = base_lobe.copy()
pil_m2.data = base_lobe.data.copy()
pil_m2.location = three_to_blender(-5.05, -1.0, 0.0)
bpy.context.collection.objects.link(pil_m2)
bpy.context.view_layer.objects.active = pil_m2
pil_m2.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
join_objects_as_piece([im_t4p, pil_m1, pil_m2], "Piece_Mot_T4P_PilMNO_Alignment", "#06D6A0")

# 3. Piece_Mot_T4P_PilQ_Secretin (Outer membrane bilayer + PDB 4B0M Secretin pore at Y = +0.1)
om_t4p = build_phospholipid_bilayer_piece(
    "OM_T4P",
    center_three=(-4.3, 0.1, 0.0),
    span_x=3.2,
    thickness_y=1.0,
    span_z=2.4,
    color_hex="#0077B6",
    nx=9,
    nz=7,
    hole_xz_radii=[(-4.3, 0.0, 0.95)],
)
secretin_obj = build_mn_piece(
    u_4b0m,
    "PilQ_Secretin_Core",
    "protein",
    style="cartoon",
    color_hex="#0077B6",
    decimate=0.35,
    center_three=(-4.3, 0.15, 0.0),
    spans_three=(1.85, 1.85, 1.85),
)
join_objects_as_piece([om_t4p, secretin_obj], "Piece_Mot_T4P_PilQ_Secretin", "#0077B6")

# 4. Piece_Mot_T4P_PilA_Filament (Curved S-shaped PDB 6W6M pilus fiber + grappling hook tip)
pila_segs = []
for i in range(4):
    frac = i / 3.0
    py = -1.6 + frac * 5.2
    px = -4.3 + 0.55 * math.sin(frac * math.pi * 1.1)
    pz = 0.15 * math.cos(frac * math.pi)
    seg = base_pilus.copy()
    seg.data = base_pilus.data.copy()
    seg.location = three_to_blender(px, py, pz)
    seg.rotation_euler = (0.0, -0.25 * math.cos(frac * math.pi), i * 0.8)
    bpy.context.collection.objects.link(seg)
    bpy.context.view_layer.objects.active = seg
    seg.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    pila_segs.append(seg)
join_objects_as_piece(pila_segs, "Piece_Mot_T4P_PilA_Filament", "#3A86FF")

# -------------------------------------------------------------------------
# COLUMN 2 (CENTER, X = 0.0): SPIROCHETE / ARCHAELLUM ROTARY ENGINE
# -------------------------------------------------------------------------
# 5. Piece_Mot_Arch_FlaIJ_ATPase (PDB 5O4U Basal rotary ATPase motor at Y = -3.3)
flai_lobes = []
for i in range(6):
    ang = i * (2.0 * math.pi / 6.0)
    c = base_lobe.copy()
    c.data = base_lobe.data.copy()
    c.location = three_to_blender(0.58 * math.cos(ang), -3.3, 0.58 * math.sin(ang))
    c.rotation_euler = (0, 0, ang)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    flai_lobes.append(c)
join_objects_as_piece(flai_lobes, "Piece_Mot_Arch_FlaIJ_ATPase", "#F77F00")

# 6. Piece_Mot_Arch_SLayer_Anchor (Helical corkscrew cylinder & S-Layer stator bushing)
bm_cork = bmesh.new()
n_cork = 44
for i in range(n_cork):
    f = i / (n_cork - 1)
    cy = -2.7 + f * 6.4
    cx = 0.42 * math.sin(f * math.pi * 2.4)
    cz = 0.42 * math.cos(f * math.pi * 2.4)
    bmesh.ops.create_uvsphere(
        bm_cork,
        u_segments=14,
        v_segments=10,
        radius=0.52,
        matrix=Matrix.Translation(three_to_blender(cx, cy, cz)),
    )
mesh_cork = bpy.data.meshes.new("Piece_Mot_Arch_SLayer_Anchor")
bm_cork.to_mesh(mesh_cork)
bm_cork.free()
obj_cork = bpy.data.objects.new("Piece_Mot_Arch_SLayer_Anchor", mesh_cork)
bpy.context.collection.objects.link(obj_cork)
mat_cork = create_pbr_material("Mat_Piece_Mot_Arch_SLayer_Anchor", hex_to_rgba("#2A9D8F"), roughness=0.36, metalness=0.10)
obj_cork.data.materials.append(mat_cork)

# 7. Piece_Mot_Arch_Filament (PDB 6W6M Helical Filament Ribbons spiraling around the corkscrew)
arch_segs = []
for i in range(5):
    f = i / 4.0
    ay = -2.4 + f * 5.8
    ang = f * math.pi * 2.4 + 0.9
    ax = 0.82 * math.sin(ang)
    az = 0.82 * math.cos(ang)
    seg = base_pilus.copy()
    seg.data = base_pilus.data.copy()
    seg.scale = (0.72, 0.72, 0.85)
    seg.location = three_to_blender(ax, ay, az)
    seg.rotation_euler = (0.25 * math.cos(ang), 0.25 * math.sin(ang), ang)
    bpy.context.collection.objects.link(seg)
    bpy.context.view_layer.objects.active = seg
    seg.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    arch_segs.append(seg)
join_objects_as_piece(arch_segs, "Piece_Mot_Arch_Filament", "#9D4EDD")

# -------------------------------------------------------------------------
# COLUMN 3 (RIGHT, X = +4.3): FLAVOBACTERIAL GLIDING TRACK (5O4U + SprB)
# -------------------------------------------------------------------------
# 8. Piece_Mot_Glide_GldLM_Motor (PDB 5O4U Rotary Proton Motor embedded in membrane at Y = -2.2)
gld_motor = build_mn_piece(
    u_5o4u,
    "GldLM_Core",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.55,
    center_three=(4.3, -2.0, 0.0),
    spans_three=(2.0, 2.5, 1.8),
)
gld_mem = build_phospholipid_bilayer_piece(
    "Gld_Mem",
    center_three=(4.3, -2.2, 0.0),
    span_x=3.2,
    thickness_y=0.95,
    span_z=2.2,
    color_hex="#E63946",
    nx=8,
    nz=6,
    hole_xz_radii=[(4.3, 0.0, 0.85)],
)
join_objects_as_piece([gld_motor, gld_mem], "Piece_Mot_Glide_GldLM_Motor", "#E63946")

# 9. Piece_Mot_Glide_SprB_Track (Arched conveyor loop studded with globular SprB protein domains)
sprb_parts = []
n_sprb = 14
for i in range(n_sprb):
    ang = -0.35 * math.pi + (i / (n_sprb - 1)) * 1.70 * math.pi
    sx = 4.3 + 1.45 * math.sin(ang)
    sy = 0.85 + 2.35 * math.cos(ang)
    sz = 0.15 * math.sin(ang * 2.0)
    ad = base_lobe.copy()
    ad.data = base_lobe.data.copy()
    ad.scale = (0.58, 0.58, 0.58)
    ad.location = three_to_blender(sx, sy, sz)
    ad.rotation_euler = (0.0, 0.0, -ang)
    bpy.context.collection.objects.link(ad)
    bpy.context.view_layer.objects.active = ad
    ad.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    sprb_parts.append(ad)
join_objects_as_piece(sprb_parts, "Piece_Mot_Glide_SprB_Track", "#00F5D4")

# Clean up temporary bases and universes
for tmp in [base_lobe, base_pilus, mol_6w6m.object, mol_5o4u.object, mol_4b0m.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("motility_modes.glb", blend_filename="motility_modes.blend")
