"""
generate_15_storage_granules_endospores.py

Authentic 3D Synthesis of Cytoplasmic Storage Inclusions, Physics Organelles, & Gram-Positive Endospores:
1. Piece_Store_Glycogen_PolyP: Branched Glycogen Rosettes & Polyphosphate Volutin Granule (1XDO) - Golden Amber (#FFB703)
2. Piece_Store_PHB_Carbonosome: PHB Polyester Core + PhaP Phasin Protein Monolayer - Warm Orange (#FB8500)
3. Piece_Store_Gas_Vesicle: Ribbed Cylindrical Gas Vesicle (GvpA + GvpC, 7R04 Cutaway) - Cyan (#00B4D8)
4. Piece_Store_Magnetosome_Chain: Fe3O4 Magnetite Crystal Vesicle Chain on MamK Filament - Luminous Turquoise (#00F5D4)
5. Piece_Store_Spore_OuterCoat: Endospore Keratin-Like Protein Coat & Exosporium (3/4 Cutaway) - Royal Violet (#9D4EDD)
6. Piece_Store_Spore_Cortex: Endospore Thick Muramic-delta-Lactam Peptidoglycan Cortex - Terracotta (#E76F51)
7. Piece_Store_Spore_Core_SASP: Dehydrated Ca2+-DPA Glassy Core + SASP-Clamped DNA (2G42) - Magenta (#F72585)

Exports to:
- ./storage_and_spores.glb
- ../../models/storage_and_spores.glb
- ../../client/public/models/storage_and_spores.glb
"""

import bpy
import bmesh
import math
import time
import shutil
from pathlib import Path
from mathutils import Matrix, Vector

t_start = time.time()
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent.parent

def create_pbr_material(name, base_color, roughness=0.35, metalness=0.10, emissive=(0, 0, 0), emissive_strength=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = next((n for n in mat.node_tree.nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if bsdf:
        bsdf.inputs['Base Color'].default_value = base_color
        bsdf.inputs['Roughness'].default_value = roughness
        bsdf.inputs['Metallic'].default_value = metalness
        if emissive_strength > 0 and 'Emission Color' in bsdf.inputs:
            bsdf.inputs['Emission Color'].default_value = (*emissive, 1.0)
            bsdf.inputs['Emission Strength'].default_value = emissive_strength
    return mat

pieces = []

# 1. Piece_Store_Glycogen_PolyP (Branched glycogen rosette + Polyphosphate volutin granule at X = -5.5, Y = +2.2)
bm = bmesh.new()
bmesh.ops.create_uvsphere(bm, u_segments=16, v_segments=14, radius=1.05, matrix=Matrix.Translation(Vector((-5.5, 2.2, 0.0))))
for i in range(12):
    ang = i * math.pi / 6.0
    pt = Vector((-5.5 + math.cos(ang) * 1.25, 2.2 + math.sin(ang) * 1.25, (i % 3 - 1) * 0.45))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.38, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Store_Glycogen_PolyP")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Store_Glycogen_PolyP", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Store_Glycogen", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.4))
pieces.append(obj)

# 2. Piece_Store_PHB_Carbonosome (PHB bioplastic core studded with PhaP phasin monolayer at X = -5.5, Y = -2.2)
bm = bmesh.new()
bmesh.ops.create_uvsphere(bm, u_segments=18, v_segments=16, radius=1.25, matrix=Matrix.Translation(Vector((-5.5, -2.2, 0.0))))
for i in range(14):
    ang = i * 2.0 * math.pi / 14.0
    pt = Vector((-5.5 + math.cos(ang) * 1.32, -2.2 + math.sin(ang) * 1.32, 0.0))
    bmesh.ops.create_uvsphere(bm, u_segments=8, v_segments=8, radius=0.25, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Store_PHB_Carbonosome")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Store_PHB_Carbonosome", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Store_PHB", (0.984, 0.522, 0.0, 1.0)))
pieces.append(obj)

# 3. Piece_Store_Gas_Vesicle (Ribbed cylindrical GvpA/GvpC gas vesicle with conical end-caps, 7R04, X = 0.0, Y = +2.2)
bm = bmesh.new()
for r_idx in range(-5, 6):
    y_pos = 2.2 + r_idx * 0.32
    rad = 0.95 * (1.0 - 0.12 * abs(r_idx))
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=18, radius1=rad, radius2=rad, depth=0.22,
                          matrix=Matrix.Translation(Vector((0.0, y_pos, 0.0))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Store_Gas_Vesicle")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Store_Gas_Vesicle", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Store_GasVesicle", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 4. Piece_Store_Magnetosome_Chain (Chain of 5 octahedral Fe3O4 magnetite crystals along MamK filament, X = 0.0, Y = -2.2)
bm = bmesh.new()
for k in range(-2, 3):
    pt = Vector((k * 0.85, -2.2, 0.0))
    bmesh.ops.create_uvsphere(bm, u_segments=8, v_segments=6, radius=0.42, matrix=Matrix.Translation(pt))
bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.12, radius2=0.12, depth=4.4,
                      matrix=Matrix.Translation(Vector((0.0, -2.65, 0.0))) @ Matrix.Rotation(math.pi / 2.0, 4, 'Y'))
mesh = bpy.data.meshes.new("Piece_Store_Magnetosome_Chain")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Store_Magnetosome_Chain", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Store_Magnetosome", (0.0, 0.961, 0.831, 1.0), metalness=0.55))
pieces.append(obj)

# --- GRAM-POSITIVE ARMORED ENDOSPORE CUTAWAY (X = +5.2) ---
SPORE_C = Vector((5.2, 0.0, 0.0))

def create_cutaway_shell(name, center, rx, ry, rz, color, emissive_strength=0.0):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=24, v_segments=18, radius=1.0)
    to_del = [v for v in bm.verts if v.co.x < 0.0 and v.co.z > 0.0 and v.co.y > 0.0]
    if to_del:
        bmesh.ops.delete(bm, geom=to_del, context='VERTS')
    for v in bm.verts:
        v.co.x = v.co.x * rx + center.x
        v.co.y = v.co.y * ry + center.y
        v.co.z = v.co.z * rz + center.z
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh); bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(create_pbr_material(f"Mat_{name}", color, emissive=color[:3], emissive_strength=emissive_strength))
    return obj

# 5. Piece_Store_Spore_OuterCoat
pieces.append(create_cutaway_shell("Piece_Store_Spore_OuterCoat", SPORE_C, 2.2, 2.8, 2.2, (0.616, 0.306, 0.867, 1.0)))

# 6. Piece_Store_Spore_Cortex
pieces.append(create_cutaway_shell("Piece_Store_Spore_Cortex", SPORE_C, 1.75, 2.25, 1.75, (0.906, 0.435, 0.318, 1.0)))

# 7. Piece_Store_Spore_Core_SASP (Dehydrated Ca-DPA core + SASP-clamped DNA 2G42)
pieces.append(create_cutaway_shell("Piece_Store_Spore_Core_SASP", SPORE_C, 1.25, 1.65, 1.25, (0.969, 0.145, 0.522, 1.0), emissive_strength=0.5))

out_local = SCRIPT_DIR / "storage_and_spores.glb"
out_models = REPO_ROOT / "models" / "storage_and_spores.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "storage_and_spores.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Storage Granules & Endospores ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
