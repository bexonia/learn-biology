"""
generate_28_storage_and_spores.py

Authentic Macromolecular Synthesis of Element 28:
Prokaryotic Storage Granules, Magnetosomes & Endospore Dormancy (PDB: 1BFR, 5L6M, 2G42)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: storage_and_spores.glb):
1. Piece_Store_PHB_Carbonosome (#FFB703) — Lower-Left: PHB carbonosome granule coated with PhaP phasin helices (1BFR bundles)
2. Piece_Store_Glycogen_PolyP (#F77F00) — Upper-Left: Cutaway 24-mer Bacterioferritin protein cage (PDB: 1BFR) + mineral core
3. Piece_Store_Gas_Vesicle (#00F5D4) — Ribbed cylindrical GvpA/GvpC buoyancy gas vesicle spindle
4. Piece_Store_Magnetosome_Chain (#3A86FF) — Center: Cytoskeletal MamK actin-like filament (5L6M) + 6 Fe3O4 magnetosomes
5. Piece_Store_Spore_OuterCoat (#E76F51) — Right: Concentric cutaway bacterial endospore protein coat
6. Piece_Store_Spore_Cortex (#2A9D8F) — Right: Concentric cutaway thick peptidoglycan cortex & inner spore membrane
7. Piece_Store_Spore_Core_SASP (#9D4EDD) — Right: Dehydrated spore core with Ca2+-dipicolinate & SASP-DNA complex (PDB: 2G42)
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
    three_to_blender,
    hex_to_rgba,
    create_pbr_material,
    build_mn_piece,
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 1BFR (Bacterioferritin 24-mer), 5L6M (MamK magnetosome actin filament), 2G42 (Endospore SASP-DNA complex)...")
mol_1bfr = mn.entities.Molecule.fetch("1BFR")
u_1bfr = mol_1bfr.universe

mol_5l6m = mn.entities.Molecule.fetch("5L6M")
u_5l6m = mol_5l6m.universe

mol_2g42 = mn.entities.Molecule.fetch("2G42")
u_2g42 = mol_2g42.universe

# ==============================================================================
# COLUMN 1 (Left, X = -3.05): Bacterioferritin 24-mer Cage & PHB Carbonosome
# ==============================================================================
# 1. Piece_Store_PHB_Carbonosome (#FFB703 — Golden PHB granule at lower-left studded with PhaP phasin helical bundles)
bm_phb = bmesh.new()
bmesh.ops.create_icosphere(bm_phb, subdivisions=3, radius=1.05, matrix=Matrix.Translation(three_to_blender(-3.05, -1.55, 0.0)))
mesh_phb = bpy.data.meshes.new("PHB_Core_Sphere")
bm_phb.to_mesh(mesh_phb)
bm_phb.free()
obj_phb = bpy.data.objects.new("PHB_Core_Sphere", mesh_phb)
bpy.context.collection.objects.link(obj_phb)

phasin_unit = build_mn_piece(
    u_1bfr,
    "Base_PhaP_Bundle",
    "chainID A and protein",
    style="cartoon",
    color_hex="#06D6A0",
    decimate=0.65,
    center_three=(0, 0, 0),
    spans_three=(0.45, 0.45, 0.45),
)
phb_objs = [obj_phb]
for i in range(10):
    ang = (2.0 * math.pi * i) / 10.0
    px = -3.05 + 1.08 * math.cos(ang)
    py = -1.55 + 1.08 * math.sin(ang)
    c = phasin_unit.copy()
    c.data = phasin_unit.data.copy()
    c.location = three_to_blender(px, py, 0.15)
    c.rotation_euler = (0.0, ang, 0.0)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    phb_objs.append(c)
join_objects_as_piece(phb_objs, "Piece_Store_PHB_Carbonosome", "#FFB703")

# 2. Piece_Store_Glycogen_PolyP (#F77F00 — Cutaway 24-mer Bacterioferritin cage PDB 1BFR at upper-left)
bfr_cage = build_mn_piece(
    u_1bfr,
    "BFR_Cutaway_Shell",
    "not chainID A B C D and protein",
    style="surface",
    color_hex="#F77F00",
    decimate=0.35,
    center_three=(-3.05, 1.45, 0.0),
    spans_three=(2.25, 2.25, 2.25),
)
bm_fe = bmesh.new()
bmesh.ops.create_icosphere(bm_fe, subdivisions=3, radius=0.68, matrix=Matrix.Translation(three_to_blender(-3.05, 1.45, 0.0)))
mesh_fe = bpy.data.meshes.new("BFR_Fe_Core")
bm_fe.to_mesh(mesh_fe)
bm_fe.free()
obj_fe = bpy.data.objects.new("BFR_Fe_Core", mesh_fe)
bpy.context.collection.objects.link(obj_fe)
join_objects_as_piece([bfr_cage, obj_fe], "Piece_Store_Glycogen_PolyP", "#F77F00")

# 3. Piece_Store_Gas_Vesicle (#00F5D4 — Ribbed GvpA gas vesicle spindle)
build_mn_piece(
    u_5l6m,
    "Piece_Store_Gas_Vesicle",
    "chainID A B and protein",
    style="surface",
    color_hex="#00F5D4",
    decimate=0.55,
    center_three=(-1.65, 0.05, -0.35),
    spans_three=(0.95, 1.55, 0.95),
)

# ==============================================================================
# COLUMN 2 (Center, X = -0.25): Magnetosome Compass Chain & MamK Actin Filament
# ==============================================================================
# 4. Piece_Store_Magnetosome_Chain (#3A86FF — MamK cytoskeletal filament PDB 5L6M + 6 faceted Fe3O4 magnetite crystals)
mamk_seg = build_mn_piece(
    u_5l6m,
    "Base_MamK_Seg",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.35,
    center_three=(0, 0, 0),
    spans_three=(0.65, 1.65, 0.65),
)
mag_objs = []
for iy in range(4):
    yc = -2.25 + iy * 1.50
    c = mamk_seg.copy()
    c.data = mamk_seg.data.copy()
    c.location = three_to_blender(-0.65, yc, 0.0)
    c.rotation_euler = (0.0, 0.0, iy * 0.5)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    mag_objs.append(c)

bm_mag = bmesh.new()
for iy in range(6):
    yc = -2.45 + iy * 0.98
    pos_b = three_to_blender(-0.05, yc, 0.0)
    bmesh.ops.create_icosphere(bm_mag, subdivisions=1, radius=0.38, matrix=Matrix.Translation(pos_b))
    bmesh.ops.create_cone(
        bm_mag,
        cap_ends=False,
        cap_tris=False,
        segments=16,
        radius1=0.46,
        radius2=0.46,
        depth=0.18,
        matrix=Matrix.Translation(pos_b) @ Matrix.Rotation(math.pi * 0.5, 4, 'X'),
    )
mesh_mag = bpy.data.meshes.new("Magnetite_Crystals")
bm_mag.to_mesh(mesh_mag)
bm_mag.free()
obj_mag = bpy.data.objects.new("Magnetite_Crystals", mesh_mag)
bpy.context.collection.objects.link(obj_mag)
mag_objs.append(obj_mag)
join_objects_as_piece(mag_objs, "Piece_Store_Magnetosome_Chain", "#3A86FF")

# ==============================================================================
# COLUMN 3 (Right, X = +2.65): Bacterial Endospore Cross-Section & SASP-DNA Core
# ==============================================================================
# 5. Piece_Store_Spore_OuterCoat (#E76F51 — Outer multilayered protein coat shell)
bm_coat = bmesh.new()
ret_c = bmesh.ops.create_uvsphere(bm_coat, u_segments=24, v_segments=16, radius=1.0)
for v in ret_c["verts"]:
    if v.co.y < -0.10:
        v.co.y = -0.10
    v.co.x = v.co.x * 1.58 + 2.65
    v.co.z = v.co.z * 2.58 - 0.05
    v.co.y = v.co.y * 1.38
mesh_coat = bpy.data.meshes.new("Piece_Store_Spore_OuterCoat")
bm_coat.to_mesh(mesh_coat)
bm_coat.free()
obj_coat = bpy.data.objects.new("Piece_Store_Spore_OuterCoat", mesh_coat)
bpy.context.collection.objects.link(obj_coat)
join_objects_as_piece([obj_coat], "Piece_Store_Spore_OuterCoat", "#E76F51")

# 6. Piece_Store_Spore_Cortex (#2A9D8F — Thick peptidoglycan cortex & inner spore membrane)
bm_ctx = bmesh.new()
for rad_x, rad_y, rad_z in [(1.34, 2.25, 1.15), (1.12, 1.92, 0.95)]:
    ret = bmesh.ops.create_uvsphere(bm_ctx, u_segments=24, v_segments=16, radius=1.0)
    for v in ret["verts"]:
        if v.co.y < -0.15:
            v.co.y = -0.15
        v.co.x = v.co.x * rad_x + 2.65
        v.co.z = v.co.z * rad_y - 0.05
        v.co.y = v.co.y * rad_z
mesh_ctx = bpy.data.meshes.new("Piece_Store_Spore_Cortex")
bm_ctx.to_mesh(mesh_ctx)
bm_ctx.free()
obj_ctx = bpy.data.objects.new("Piece_Store_Spore_Cortex", mesh_ctx)
bpy.context.collection.objects.link(obj_ctx)
join_objects_as_piece([obj_ctx], "Piece_Store_Spore_Cortex", "#2A9D8F")

# 7. Piece_Store_Spore_Core_SASP (#9D4EDD — Dehydrated core with PDB 2G42 SASP-bound DNA + Ca2+-DPA chelate cluster)
sasp_dna = build_mn_piece(
    u_2g42,
    "Endospore_SASP_DNA_Lower",
    "protein or nucleic",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.60,
    center_three=(2.65, -0.75, 0.20),
    spans_three=(1.65, 1.45, 1.25),
)
ca_dpa = build_mn_piece(
    u_2g42,
    "Endospore_CaDPA_Upper",
    "protein",
    style="surface",
    color_hex="#E63946",
    decimate=0.60,
    center_three=(2.65, 0.65, 0.20),
    spans_three=(1.55, 1.35, 1.15),
)
join_objects_as_piece([sasp_dna, ca_dpa], "Piece_Store_Spore_Core_SASP", "#9D4EDD")

for tmp in [phasin_unit, mamk_seg, mol_1bfr.object, mol_5l6m.object, mol_2g42.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("storage_and_spores.glb", blend_filename="storage_and_spores.blend")
