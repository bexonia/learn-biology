"""
generate_06_pili_fimbriae_curli_biofilm.py

Authentic 3D Synthesis of Type 1 Fimbriae Catch-Bond Adhesin (6GTO / 1TR7) &
Curli Extracellular Amyloid Biofilm Fibers (4B0M):
1. Piece_Pili_Outer_Membrane: Outer LPS Membrane Bilayer Slab - Deep Marine (#0077B6)
2. Piece_Pili_FimD_Usher: FimD 24-Stranded Outer-Membrane Usher Twin-Pore (6GTO) - Cyan (#00B4D8)
3. Piece_Pili_FimC_Chaperone: Periplasmic FimC Donor-Strand Chaperone (1TR7) - Seafoam Green (#06D6A0)
4. Piece_Pili_FimA_Helical_Rod: Coiled Spring-Like FimA Helical Rod (6GTO) - Sky Blue (#48CAE4)
5. Piece_Pili_FimH_CatchBond: FimH Two-Domain Tip Adhesin + Mannose Pocket (1TR7) - Golden Amber (#FFB703)
6. Piece_Pili_CsgG_Channel: Curli CsgG Nonameric 36-Stranded Secretion Pore (4B0M) - Royal Violet (#9D4EDD)
7. Piece_Pili_CsgB_Nucleator: Outer-Membrane CsgB Amyloid Template Nucleator - Magenta (#F72585)
8. Piece_Pili_CsgA_Amyloid_Mesh: Extracellular CsgA Cross-Beta Biofilm Fibril Ribbon - Terracotta (#E76F51)

Exports to:
- ./pili_fimbriae_6gto.glb
- ../../models/pili_fimbriae_6gto.glb
- ../../client/public/models/pili_fimbriae_6gto.glb
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

pieces = []

# 1. Piece_Pili_Outer_Membrane
bm = bmesh.new()
bmesh.ops.create_cube(bm, size=1.0)
for v in bm.verts:
    v.co.x *= 9.5
    v.co.y *= 0.9
    v.co.z *= 4.2
mesh = bpy.data.meshes.new("Piece_Pili_Outer_Membrane")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_Outer_Membrane", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_OM", (0.0, 0.467, 0.714, 1.0)))
pieces.append(obj)

# 2. Piece_Pili_FimD_Usher (X = -2.8)
bm = bmesh.new()
for i in range(12):
    ang = i * math.pi / 6.0
    pt = Vector((-2.8 + math.cos(ang) * 0.95, 0.1, math.sin(ang) * 0.95))
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.25, radius2=0.25, depth=1.5,
                          matrix=Matrix.Translation(pt) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Pili_FimD_Usher")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_FimD_Usher", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_FimD", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 3. Piece_Pili_FimC_Chaperone (Periplasmic donor-strand chaperone complexes below FimD)
bm = bmesh.new()
for pt in [(-3.3, -1.8, 0.3), (-2.3, -2.1, -0.3), (-2.8, -2.7, 0.0)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.52, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Pili_FimC_Chaperone")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_FimC_Chaperone", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_FimC", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 4. Piece_Pili_FimA_Helical_Rod (3.4 subunits/turn spring-like rod extending above FimD)
bm = bmesh.new()
for i in range(24):
    t = i / 23.0
    ang = i * (2.0 * math.pi / 3.4)
    pt = Vector((-2.8 + math.cos(ang) * 0.52, 0.9 + t * 4.2, math.sin(ang) * 0.52))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.36, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Pili_FimA_Helical_Rod")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_FimA_Helical_Rod", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_FimA", (0.282, 0.792, 0.894, 1.0)))
pieces.append(obj)

# 5. Piece_Pili_FimH_CatchBond (Two-domain pilin + mannose-binding lectin tip 1TR7)
bm = bmesh.new()
for pt, r in [((-2.8, 5.4, 0.0), 0.45), ((-2.8, 6.2, 0.1), 0.54), ((-2.8, 6.75, 0.2), 0.25)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Pili_FimH_CatchBond")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_FimH_CatchBond", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_FimH", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.6))
pieces.append(obj)

# 6. Piece_Pili_CsgG_Channel (Nonameric 36-stranded curli secretion pore at X = +2.8)
bm = bmesh.new()
for i in range(9):
    ang = i * 2.0 * math.pi / 9.0
    pt = Vector((2.8 + math.cos(ang) * 0.88, -0.1, math.sin(ang) * 0.88))
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.28, radius2=0.28, depth=1.6,
                          matrix=Matrix.Translation(pt) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Pili_CsgG_Channel")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_CsgG_Channel", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_CsgG", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 7. Piece_Pili_CsgB_Nucleator
bm = bmesh.new()
for pt in [(2.8, 1.0, 0.0), (2.5, 1.4, 0.3), (3.1, 1.4, -0.3)]:
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.38, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Pili_CsgB_Nucleator")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_CsgB_Nucleator", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_CsgB", (0.969, 0.145, 0.522, 1.0)))
pieces.append(obj)

# 8. Piece_Pili_CsgA_Amyloid_Mesh (Extracellular cross-beta amyloid biofilm fibril network)
bm = bmesh.new()
for branch in (-0.8, 0.0, 0.8):
    for i in range(18):
        t = i / 17.0
        pt = Vector((2.8 + branch * t * 1.8 + math.sin(t * 6.0) * 0.35, 1.6 + t * 4.2, math.cos(t * 5.0 + branch) * 0.55))
        bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.26, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Pili_CsgA_Amyloid_Mesh")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Pili_CsgA_Amyloid_Mesh", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Pili_CsgA", (0.906, 0.435, 0.318, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "pili_fimbriae_6gto.glb"
out_models = REPO_ROOT / "models" / "pili_fimbriae_6gto.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "pili_fimbriae_6gto.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Pili & Curli 6GTO/1TR7/4B0M ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
