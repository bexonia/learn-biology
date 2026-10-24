"""
generate_13_conjugation_secretion_systems.py

Authentic 3D Synthesis of Horizontal Gene Transfer & Bacterial Secretion Nanomachines:
Conjugative F-Pilus T4SS (7OKO / 5FLU), T3SS Injectisome Syringe (7AH9), & T6SS Contractile Spear (6H3L):
1. Piece_Sec_T4SS_Plasmid_Relaxosome: Donor Circular Plasmid + TraI Relaxase-Helicase - Deep Indigo (#3A0CA3)
2. Piece_Sec_T4SS_IMC_ATPases: Inner-Membrane Complex (TraD Coupler + VirB4 Hexamers, 7OKO) - Golden Amber (#FFB703)
3. Piece_Sec_T4SS_OMCC_Chamber: 14-Fold Outer-Membrane Core Complex (VirB7/B9/B10, 7OKO) - Cyan (#00B4D8)
4. Piece_Sec_T4SS_FPilus_Tube: Conjugative F-Pilus Helical Tube + Translocating ssDNA (5FLU) - Magenta (#F72585)
5. Piece_Sec_T3SS_BasalBody: T3SS Injectisome Inner/Outer Export Rings & InvC ATPase (7AH9) - Seafoam Green (#06D6A0)
6. Piece_Sec_T3SS_Needle_Tip: Extracellular Hollow Needle & Host Pore Translocon Tip (7AH9) - Warm Orange (#FF7B00)
7. Piece_Sec_T6SS_VipAB_Sheath: T6SS Contractile VipA/VipB Spring Sheath & Baseplate (6H3L) - Royal Violet (#9D4EDD)
8. Piece_Sec_T6SS_Hcp_VgrG_Spear: Inner Hcp Tube & VgrG-PAAR Poison-Tipped Puncturing Spear (6H3L) - Turquoise (#00F5D4)

Exports to:
- ./secretion_systems.glb
- ../../models/secretion_systems.glb
- ../../client/public/models/secretion_systems.glb
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

# --- SYSTEM 1: CONJUGATIVE T4SS & F-PILUS (X = -5.5) ---
# 1. Piece_Sec_T4SS_Plasmid_Relaxosome
bm = bmesh.new()
for i in range(28):
    ang = i * 2.0 * math.pi / 28.0
    pt = Vector((-5.5 + math.cos(ang) * 1.45, -4.2 + math.sin(ang) * 0.5, math.sin(ang) * 1.45))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.25, matrix=Matrix.Translation(pt))
bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.68, matrix=Matrix.Translation(Vector((-5.5, -3.5, 0.9))))
mesh = bpy.data.meshes.new("Piece_Sec_T4SS_Plasmid_Relaxosome")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T4SS_Plasmid_Relaxosome", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T4SS_Plasmid", (0.227, 0.047, 0.639, 1.0)))
pieces.append(obj)

# 2. Piece_Sec_T4SS_IMC_ATPases (TraD + twin VirB4 hexameric barrels)
bm = bmesh.new()
for sx in (-0.95, 0.0, 0.95):
    for i in range(6):
        ang = i * math.pi / 3.0
        pt = Vector((-5.5 + sx + math.cos(ang) * 0.45, -1.8, math.sin(ang) * 0.45))
        bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.35, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Sec_T4SS_IMC_ATPases")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T4SS_IMC_ATPases", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T4SS_IMC", (1.0, 0.718, 0.012, 1.0)))
pieces.append(obj)

# 3. Piece_Sec_T4SS_OMCC_Chamber (14-fold Outer Membrane Core Complex)
bm = bmesh.new()
for i in range(14):
    ang = i * 2.0 * math.pi / 14.0
    pt = Vector((-5.5 + math.cos(ang) * 1.25, 1.2, math.sin(ang) * 1.25))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.42, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Sec_T4SS_OMCC_Chamber")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T4SS_OMCC_Chamber", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T4SS_OMCC", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 4. Piece_Sec_T4SS_FPilus_Tube (Helical F-pilus tube with translocating ssDNA inside)
bm = bmesh.new()
for i in range(26):
    t = i / 25.0
    ang = i * 1.25
    pt = Vector((-5.5 + math.cos(ang) * 0.55, 2.0 + t * 4.5, math.sin(ang) * 0.55))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.28, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Sec_T4SS_FPilus_Tube")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T4SS_FPilus_Tube", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T4SS_FPilus", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.5))
pieces.append(obj)

# --- SYSTEM 2: T3SS INJECTISOME SYRINGE (7AH9, X = 0.0) ---
# 5. Piece_Sec_T3SS_BasalBody
bm = bmesh.new()
for y_ring, r_ring in [(-2.4, 0.9), (-1.2, 1.35), (0.8, 1.15)]:
    for i in range(12):
        ang = i * math.pi / 6.0
        pt = Vector((math.cos(ang) * r_ring, y_ring, math.sin(ang) * r_ring))
        bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.35, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Sec_T3SS_BasalBody")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T3SS_BasalBody", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T3SS_Base", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 6. Piece_Sec_T3SS_Needle_Tip
bm = bmesh.new()
bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=16, radius1=0.32, radius2=0.26, depth=4.6,
                      matrix=Matrix.Translation(Vector((0.0, 3.6, 0.0))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
for i in range(5):
    ang = i * 2.0 * math.pi / 5.0
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.36,
                              matrix=Matrix.Translation(Vector((math.cos(ang) * 0.45, 6.0, math.sin(ang) * 0.45))))
mesh = bpy.data.meshes.new("Piece_Sec_T3SS_Needle_Tip")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T3SS_Needle_Tip", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T3SS_Needle", (1.0, 0.482, 0.0, 1.0)))
pieces.append(obj)

# --- SYSTEM 3: T6SS CONTRACTILE PHAGE-TAIL SPEAR (6H3L, X = +5.5) ---
# 7. Piece_Sec_T6SS_VipAB_Sheath
bm = bmesh.new()
for i in range(30):
    t = i / 29.0
    ang = i * 0.9
    pt = Vector((5.5 + math.cos(ang) * 0.95, -3.2 + t * 4.5, math.sin(ang) * 0.95))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.36, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Sec_T6SS_VipAB_Sheath")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T6SS_VipAB_Sheath", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T6SS_Sheath", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 8. Piece_Sec_T6SS_Hcp_VgrG_Spear (Inner Hcp hexamer tube + sharp VgrG-PAAR spike)
bm = bmesh.new()
bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=16, radius1=0.42, radius2=0.42, depth=5.5,
                      matrix=Matrix.Translation(Vector((5.5, 1.2, 0.0))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=6, radius1=0.58, radius2=0.04, depth=2.0,
                      matrix=Matrix.Translation(Vector((5.5, 4.9, 0.0))) @ Matrix.Rotation(-math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Sec_T6SS_Hcp_VgrG_Spear")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Sec_T6SS_Hcp_VgrG_Spear", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_T6SS_Spear", (0.0, 0.961, 0.831, 1.0), emissive=(0.0, 0.8, 0.7), emissive_strength=0.6))
pieces.append(obj)

out_local = SCRIPT_DIR / "secretion_systems.glb"
out_models = REPO_ROOT / "models" / "secretion_systems.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "secretion_systems.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Secretion Systems 7OKO/7AH9/6H3L ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
