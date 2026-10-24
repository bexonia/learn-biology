"""
generate_14_crispr_cas_phage_defense.py

Authentic 3D Synthesis of E. coli Adaptive & Innate Phage Immunity:
Type I-E CRISPR-Cas Cascade-Cas3 Surveillance Complex (1VY8 / 5H9F / 6C66) & EcoRI Endonuclease (1ERI):
1. Piece_CRISPR_crRNA_Guide: 61-nt CRISPR Guide RNA (5' Handle + 32-nt Spacer + 3' Hairpin) - Royal Purple (#7209B7)
2. Piece_CRISPR_Cas7_Backbone: Hexameric Cas7 (Cas7.1-7.6) Helical Seahorse Spine (1VY8) - Cyan (#00B4D8)
3. Piece_CRISPR_Cas8e_PAM_Tail: Cas8e (Cse1) PAM Sensor & Cas5e Tail (5H9F) - Golden Amber (#FFB703)
4. Piece_CRISPR_Cas11_Cas6e: Dimeric Cas11 (Cse2) R-Loop Lock Belly & Cas6e 3'-RNase Head - Seafoam Green (#06D6A0)
5. Piece_CRISPR_Phage_DNA_RLoop: Invading Bacteriophage dsDNA + Melted R-Loop & 5'-AAG-3' PAM - Magenta (#F72585)
6. Piece_CRISPR_Cas3_Shredder: Recruited Cas3 ATP-Dependent Helicase / HD-Nuclease Shredder (6C66) - Warm Orange (#FF7B00)
7. Piece_CRISPR_EcoRI_Scissors: Innate EcoRI Homodimeric Restriction Endonuclease (1ERI) - Luminous Turquoise (#00F5D4)

Exports to:
- ./crispr_defense_1vy8.glb
- ../../models/crispr_defense_1vy8.glb
- ../../client/public/models/crispr_defense_1vy8.glb
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

# 1. Piece_CRISPR_crRNA_Guide (61-nt guide RNA spiraling along the Cascade seahorse spine)
bm = bmesh.new()
for i in range(32):
    t = i / 31.0
    ang = t * 1.4 * math.pi
    pt = Vector((-1.5 + math.cos(ang) * 1.4, -2.5 + t * 5.0, math.sin(ang) * 1.1))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.25, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_CRISPR_crRNA_Guide")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_crRNA_Guide", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_crRNA", (0.447, 0.035, 0.718, 1.0), emissive=(0.45, 0.05, 0.7), emissive_strength=0.5))
pieces.append(obj)

# 2. Piece_CRISPR_Cas7_Backbone (Hexameric Cas7.1-7.6 seahorse arch)
bm = bmesh.new()
for k in range(6):
    t = (k + 0.5) / 6.0
    ang = t * 1.4 * math.pi
    pt = Vector((-1.8 + math.cos(ang) * 1.75, -2.2 + t * 4.4, math.sin(ang) * 1.25))
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.72, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_CRISPR_Cas7_Backbone")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_Cas7_Backbone", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_Cas7", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 3. Piece_CRISPR_Cas8e_PAM_Tail (Cas8e/Cse1 large PAM sensor + Cas5e tail)
bm = bmesh.new()
for pt, r in [((-0.8, -2.8, 0.2), 1.05), ((-1.8, -2.6, -0.4), 0.75), ((-0.1, -2.3, 0.8), 0.65)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_CRISPR_Cas8e_PAM_Tail")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_Cas8e_PAM_Tail", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_Cas8e", (1.0, 0.718, 0.012, 1.0)))
pieces.append(obj)

# 4. Piece_CRISPR_Cas11_Cas6e (Dimeric Cas11 belly + Cas6e 3' hairpin head cap)
bm = bmesh.new()
for pt, r in [((-0.4, -0.4, -0.5), 0.68), ((-0.4, 0.9, -0.5), 0.68), ((-1.4, 2.7, 0.0), 0.82)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_CRISPR_Cas11_Cas6e")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_Cas11_Cas6e", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_Cas11", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 5. Piece_CRISPR_Phage_DNA_RLoop (Invading bacteriophage dsDNA + melted R-loop bubble)
bm = bmesh.new()
for i in range(36):
    t = i / 35.0
    y = -3.8 + t * 7.6
    r_loop = 0.95 if 0.25 < t < 0.75 else 0.35
    for sign in (-1.0, 1.0):
        pt = Vector((-0.6 + sign * r_loop * 0.55, y, 0.9 + math.sin(t * 6.0 * math.pi) * 0.35))
        bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.22, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_CRISPR_Phage_DNA_RLoop")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_Phage_DNA_RLoop", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_PhageDNA", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.6))
pieces.append(obj)

# 6. Piece_CRISPR_Cas3_Shredder (Recruited Cas3 helicase-nuclease shredder 6C66)
bm = bmesh.new()
for pt, r in [((1.4, -2.5, 0.5), 0.95), ((2.1, -1.7, 0.3), 0.78), ((1.8, -3.2, -0.2), 0.65)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_CRISPR_Cas3_Shredder")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_Cas3_Shredder", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_Cas3", (1.0, 0.482, 0.0, 1.0)))
pieces.append(obj)

# 7. Piece_CRISPR_EcoRI_Scissors (Innate EcoRI homodimer bound to GAATTC DNA at X = +4.2)
bm = bmesh.new()
for pt, r in [((3.8, 1.4, 0.0), 0.82), ((4.8, 1.4, 0.0), 0.82), ((4.3, 2.2, 0.0), 0.55)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_CRISPR_EcoRI_Scissors")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_CRISPR_EcoRI_Scissors", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CRISPR_EcoRI", (0.0, 0.961, 0.831, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "crispr_defense_1vy8.glb"
out_models = REPO_ROOT / "models" / "crispr_defense_1vy8.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "crispr_defense_1vy8.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported CRISPR-Cas & EcoRI Defense 1VY8/5H9F/1ERI ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
