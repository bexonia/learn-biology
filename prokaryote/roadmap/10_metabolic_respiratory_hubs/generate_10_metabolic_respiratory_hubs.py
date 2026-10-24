"""
generate_10_metabolic_respiratory_hubs.py

Authentic 3D Synthesis of Central Metabolic & Respiratory Hubs:
Pyruvate Dehydrogenase Megacomplex (1EAE / 1L8A) & Cytochrome bo3 Ubiquinol Oxidase (6WTI):
1. Piece_Met_PDH_E2_CubicCore: 24-Subunit Octahedral E2 Transacetylase Core (1EAE) - Cyan (#00B4D8)
2. Piece_Met_PDH_Lipoyl_Arms: Flexible Lipoyl-Lysine Swinging Tether Arms - Golden Amber (#FFB703)
3. Piece_Met_PDH_E1_Shell: Outer E1 Pyruvate Decarboxylase Shell (AceE + ThDP) - Royal Violet (#9D4EDD)
4. Piece_Met_PDH_E3_Shell: Outer E3 Dihydrolipoyl Dehydrogenase Shell (Lpd + FAD) - Magenta (#F72585)
5. Piece_Met_Cyo_InnerMembrane: Inner Cytoplasmic Membrane Bilayer Slab + QH2 Pool - Seafoam Green (#06D6A0)
6. Piece_Met_CyoA_QuinolSite: Subunit II (CyoA) Ubiquinol Oxidation Domain (6WTI) - Sky Blue (#48CAE4)
7. Piece_Met_CyoB_HemeCuCore: Subunit I (CyoB) 15-TM Core + Heme b / Heme o3-CuB (6WTI) - Warm Orange (#FF7B00)
8. Piece_Met_CyoCD_Support: Subunits III & IV (CyoC, CyoD) Transmembrane Bundle (6WTI) - Gold (#FFD166)

Exports to:
- ./metabolic_hubs.glb
- ../../models/metabolic_hubs.glb
- ../../client/public/models/metabolic_hubs.glb
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
PDH_C = Vector((-3.5, 0.0, 0.0))

# 1. Piece_Met_PDH_E2_CubicCore (24-mer cubic core at X = -3.5)
bm = bmesh.new()
for sx in (-1.0, 1.0):
    for sy in (-1.0, 1.0):
        for sz in (-1.0, 1.0):
            for offset in [(0.3, 0, 0), (0, 0.3, 0), (0, 0, 0.3)]:
                pt = PDH_C + Vector((sx * 0.95 + offset[0], sy * 0.95 + offset[1], sz * 0.95 + offset[2]))
                bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.42, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Met_PDH_E2_CubicCore")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_PDH_E2_CubicCore", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_PDH_E2", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 2. Piece_Met_PDH_Lipoyl_Arms (Swinging tether arms radiating from E2 to E1/E3 shells)
bm = bmesh.new()
for d in [(1, 1, 0), (-1, 1, 0), (1, -1, 0), (-1, -1, 0), (0, 1, 1), (0, -1, 1), (0, 1, -1), (0, -1, -1)]:
    v_dir = Vector(d).normalized()
    for step in range(5):
        pt = PDH_C + v_dir * (1.2 + step * 0.35)
        bmesh.ops.create_uvsphere(bm, u_segments=8, v_segments=8, radius=0.20, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Met_PDH_Lipoyl_Arms")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_PDH_Lipoyl_Arms", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_PDH_Lipoyl", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.6))
pieces.append(obj)

# 3. Piece_Met_PDH_E1_Shell (Outer E1 Pyruvate Decarboxylase dimers)
bm = bmesh.new()
for i in range(12):
    ang = i * math.pi / 6.0
    pt = PDH_C + Vector((math.cos(ang) * 2.5, math.sin(ang) * 2.5, 0.8 if i % 2 == 0 else -0.8))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.55, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Met_PDH_E1_Shell")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_PDH_E1_Shell", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_PDH_E1", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 4. Piece_Met_PDH_E3_Shell (Outer E3 Dihydrolipoyl Dehydrogenase FAD dimers)
bm = bmesh.new()
for face_v in [(2.6, 0, 0), (-2.6, 0, 0), (0, 2.6, 0), (0, -2.6, 0), (0, 0, 2.6), (0, 0, -2.6)]:
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.62, matrix=Matrix.Translation(PDH_C + Vector(face_v)))
mesh = bpy.data.meshes.new("Piece_Met_PDH_E3_Shell")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_PDH_E3_Shell", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_PDH_E3", (0.969, 0.145, 0.522, 1.0)))
pieces.append(obj)

# --- CYTOCHROME BO3 UBIQUINOL OXIDASE (6WTI, X = +3.5) ---
CYO_C = Vector((3.5, 0.0, 0.0))

# 5. Piece_Met_Cyo_InnerMembrane
bm = bmesh.new()
bmesh.ops.create_cube(bm, size=1.0)
for v in bm.verts:
    v.co.x = v.co.x * 4.5 + CYO_C.x
    v.co.y = v.co.y * 0.95
    v.co.z = v.co.z * 4.2
mesh = bpy.data.meshes.new("Piece_Met_Cyo_InnerMembrane")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_Cyo_InnerMembrane", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Cyo_Membrane", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 6. Piece_Met_CyoA_QuinolSite (Subunit II CyoA periplasmic & TM quinol oxidation domain)
bm = bmesh.new()
for pt, r in [((2.5, 0.8, 0.3), 0.75), ((2.6, -0.3, 0.2), 0.58)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Met_CyoA_QuinolSite")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_CyoA_QuinolSite", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CyoA", (0.282, 0.792, 0.894, 1.0)))
pieces.append(obj)

# 7. Piece_Met_CyoB_HemeCuCore (Subunit I CyoB 15-TM core + Heme b / Heme o3-CuB binuclear center)
bm = bmesh.new()
for i in range(8):
    ang = i * math.pi / 4.0
    pt = CYO_C + Vector((math.cos(ang) * 0.75, 0.1, math.sin(ang) * 0.75))
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=12, radius1=0.35, radius2=0.35, depth=2.3,
                          matrix=Matrix.Translation(pt) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Met_CyoB_HemeCuCore")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_CyoB_HemeCuCore", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CyoB", (1.0, 0.482, 0.0, 1.0), emissive=(1.0, 0.4, 0.0), emissive_strength=0.4))
pieces.append(obj)

# 8. Piece_Met_CyoCD_Support (Subunits III & IV CyoC/CyoD)
bm = bmesh.new()
for pt in [(4.6, 0.0, 0.45), (4.6, 0.0, -0.45), (4.3, -0.2, 0.0)]:
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.32, radius2=0.32, depth=2.0,
                          matrix=Matrix.Translation(Vector(pt)) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Met_CyoCD_Support")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Met_CyoCD_Support", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_CyoCD", (1.0, 0.82, 0.4, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "metabolic_hubs.glb"
out_models = REPO_ROOT / "models" / "metabolic_hubs.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "metabolic_hubs.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Metabolic & Respiratory Hubs 1EAE/6WTI ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
