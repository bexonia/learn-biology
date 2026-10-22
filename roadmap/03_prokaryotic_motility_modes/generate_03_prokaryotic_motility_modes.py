"""
generate_03_prokaryotic_motility_modes.py

Comparative 3D Synthesis of the 4 Modes of Prokaryotic Movement (primer_fig8.png):
1. Type IV Pilus Twitching Motility (PilQ Secretin 3JC8, PilA Filament 5VXY, PilMNO Cage, PilB/PilT ATPase)
2. Gliding Motility (GldLM Proton Motor 6W6M & SprB Helical Surface Adhesin Track)
3. Archaeal Flagellum / Archaellum (S-Layer Anchor 7B03, Solid Archaellin Filament 5O4U, FlaI/FlaJ ATPase)

Exports to:
- ./motility_modes.glb
- ../../models/motility_modes.glb
- ../../client/public/models/motility_modes.glb
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

def create_pbr_material(name, base_color, roughness=0.36, metalness=0.10, emissive=(0, 0, 0), emissive_strength=0.0):
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

def create_ring_piece(name, center, radius_ring, tube_r, count, color, height=0.8):
    bm = bmesh.new()
    for i in range(count):
        ang = i * 2.0 * math.pi / count
        pos = Vector(center) + Vector((math.cos(ang) * radius_ring, 0.0, math.sin(ang) * radius_ring))
        bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=12, radius1=tube_r, radius2=tube_r, depth=height,
                              matrix=Matrix.Translation(pos) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh); bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(create_pbr_material(f"Mat_{name}", color))
    return obj

pieces = []

# --- SYSTEM 1: TYPE IV PILUS TWITCHING MOTILITY (X = -5.5) ---
pieces.append(create_ring_piece("Piece_Mot_T4P_PilQ_Secretin", (-5.5, 2.2, 0.0), 0.95, 0.26, 12, (0.0, 0.467, 0.714, 1.0), height=1.3))
pieces.append(create_ring_piece("Piece_Mot_T4P_PilMNO_Alignment", (-5.5, 0.0, 0.0), 0.85, 0.22, 8, (0.024, 0.839, 0.627, 1.0), height=1.8))
pieces.append(create_ring_piece("Piece_Mot_T4P_PilBT_ATPase", (-5.5, -2.2, 0.0), 1.05, 0.36, 6, (1.0, 0.718, 0.012, 1.0), height=0.9))

bm = bmesh.new()
for i in range(28):
    t = i / 27.0
    ang = t * 5.0 * math.pi
    pos = Vector((-5.5 + 0.25 * math.cos(ang), -0.5 + t * 6.5, 0.25 * math.sin(ang)))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=10, radius=0.28, matrix=Matrix.Translation(pos))
mesh = bpy.data.meshes.new("Piece_Mot_T4P_PilA_Filament")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Mot_T4P_PilA_Filament", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Mot_T4P_PilA", (0.0, 0.961, 0.831, 1.0)))
pieces.append(obj)

# --- SYSTEM 2: GLIDING MOTILITY (GldLM-SprB, X = 0.0) ---
pieces.append(create_ring_piece("Piece_Mot_Glide_GldLM_Motor", (0.0, -1.8, 0.0), 0.85, 0.32, 5, (1.0, 0.482, 0.0, 1.0), height=1.5))

bm = bmesh.new()
for i in range(20):
    t = (i / 19.0 - 0.5) * 3.6
    pos = Vector((t, 2.2, math.sin(t * 2.0) * 0.65))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=10, radius=0.30, matrix=Matrix.Translation(pos))
mesh = bpy.data.meshes.new("Piece_Mot_Glide_SprB_Track")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Mot_Glide_SprB_Track", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Mot_Glide_SprB", (0.906, 0.435, 0.318, 1.0)))
pieces.append(obj)

# --- SYSTEM 3: ARCHAEAL ARCHAELLUM (X = +5.5) ---
pieces.append(create_ring_piece("Piece_Mot_Arch_SLayer_Anchor", (5.5, 1.5, 0.0), 1.10, 0.28, 6, (0.616, 0.306, 0.867, 1.0), height=0.8))
pieces.append(create_ring_piece("Piece_Mot_Arch_FlaIJ_ATPase", (5.5, -2.0, 0.0), 1.05, 0.36, 6, (1.0, 0.82, 0.4, 1.0), height=1.1))

bm = bmesh.new()
for i in range(30):
    t = i / 29.0
    ang = t * 4.5 * math.pi
    pos = Vector((5.5 + 0.48 * math.cos(ang), 1.0 + t * 5.2, 0.48 * math.sin(ang)))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=10, radius=0.26, matrix=Matrix.Translation(pos))
mesh = bpy.data.meshes.new("Piece_Mot_Arch_Filament")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Mot_Arch_Filament", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Mot_Arch_Filament", (0.969, 0.145, 0.522, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "motility_modes.glb"
out_models = REPO_ROOT / "models" / "motility_modes.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "motility_modes.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Prokaryotic Motility Modes ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
