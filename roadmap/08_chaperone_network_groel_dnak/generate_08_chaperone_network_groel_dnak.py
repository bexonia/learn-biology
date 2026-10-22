"""
generate_08_chaperone_network_groel_dnak.py

Authentic 3D Synthesis of the E. coli Protein Folding Chaperone Relay:
GroEL-GroES Nano-Cage (1AON), DnaK/DnaJ/GrpE HSP70 Clamp (2KHO / 1DKG), & Trigger Factor (1W26):
1. Piece_1AON_GroES_Lid: Heptameric GroES Dome Cap (Chains O-U) - Golden Amber (#FFB703)
2. Piece_1AON_GroEL_CisRing: GroEL Cis Folding Chamber Ring (Chains A-G) - Cyan (#00B4D8)
3. Piece_1AON_GroEL_TransRing: GroEL Trans Acceptor Ring (Chains H-N) - Deep Marine (#0077B6)
4. Piece_1AON_Encapsulated_Substrate: Folding Substrate Inside the Anfinsen Cage - Magenta (#F72585)
5. Piece_1AON_DnaK_DnaJ_GrpE: Upstream DnaK-DnaJ-GrpE HSP70 Clamp Complex (2KHO) - Seafoam Green (#06D6A0)
6. Piece_1AON_Trigger_Factor: Co-Translational Trigger Factor Dragon Cradle (1W26) - Royal Violet (#9D4EDD)

Exports to:
- ./chaperones_1aon.glb
- ../../models/chaperones_1aon.glb
- ../../client/public/models/chaperones_1aon.glb
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

# 1. Piece_1AON_GroES_Lid (Heptameric dome cap at Y = +3.3)
bm = bmesh.new()
for i in range(7):
    ang = i * 2.0 * math.pi / 7.0
    pt = Vector((math.cos(ang) * 1.45, 3.3, math.sin(ang) * 1.45))
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.58, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_1AON_GroES_Lid")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_1AON_GroES_Lid", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_1AON_GroES", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.5))
pieces.append(obj)

# 2. Piece_1AON_GroEL_CisRing (7-subunit expanded hydrophilic cis folding chamber, Y = +0.5 to +2.6)
bm = bmesh.new()
for i in range(7):
    ang = i * 2.0 * math.pi / 7.0
    for y_off, r_ring, r_sph in [(0.6, 2.0, 0.65), (1.5, 2.2, 0.62), (2.4, 2.0, 0.60)]:
        pt = Vector((math.cos(ang) * r_ring, y_off, math.sin(ang) * r_ring))
        bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r_sph, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_1AON_GroEL_CisRing")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_1AON_GroEL_CisRing", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_1AON_Cis", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 3. Piece_1AON_GroEL_TransRing (7-subunit open trans ring below equatorial plane, Y = -0.5 to -2.5)
bm = bmesh.new()
for i in range(7):
    ang = (i + 0.5) * 2.0 * math.pi / 7.0
    for y_off, r_ring, r_sph in [(-0.6, 2.0, 0.65), (-1.5, 1.85, 0.62), (-2.4, 1.75, 0.60)]:
        pt = Vector((math.cos(ang) * r_ring, y_off, math.sin(ang) * r_ring))
        bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r_sph, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_1AON_GroEL_TransRing")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_1AON_GroEL_TransRing", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_1AON_Trans", (0.0, 0.467, 0.714, 1.0)))
pieces.append(obj)

# 4. Piece_1AON_Encapsulated_Substrate (Folding protein inside the cis Anfinsen cage)
bm = bmesh.new()
for i in range(14):
    t = i / 13.0 * 4.0 * math.pi
    pt = Vector((math.cos(t) * 0.55, 1.1 + (i / 13.0) * 1.3, math.sin(t) * 0.55))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.32, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_1AON_Encapsulated_Substrate")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_1AON_Encapsulated_Substrate", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_1AON_Substrate", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.7))
pieces.append(obj)

# 5. Piece_1AON_DnaK_DnaJ_GrpE (Upstream HSP70 triage clamp at X = -4.5)
bm = bmesh.new()
for pt, r in [((-4.5, 0.8, 0.0), 0.85), ((-4.5, 2.0, 0.3), 0.65), ((-3.6, 1.4, -0.4), 0.52), ((-5.4, 0.4, 0.2), 0.55)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_1AON_DnaK_DnaJ_GrpE")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_1AON_DnaK_DnaJ_GrpE", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_1AON_DnaK", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 6. Piece_1AON_Trigger_Factor (Co-translational Trigger Factor dragon cradle at X = -7.2)
bm = bmesh.new()
for pt, r in [((-7.2, 2.2, 0.0), 0.68), ((-6.8, 1.3, 0.2), 0.58), ((-7.5, 0.5, -0.2), 0.62), ((-6.4, 1.8, -0.4), 0.45)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_1AON_Trigger_Factor")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_1AON_Trigger_Factor", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_1AON_TF", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "chaperones_1aon.glb"
out_models = REPO_ROOT / "models" / "chaperones_1aon.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "chaperones_1aon.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Chaperone Network 1AON/2KHO/1W26 ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
