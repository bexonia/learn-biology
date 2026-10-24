"""
generate_07_nucleoid_associated_proteins.py

Authentic 3D Synthesis of Prokaryotic Nucleoid Compaction & Histone-Like NAPs
(HU 1P71, H-NS 1HNS/3NR7, Fis 3IV5, MukBEF 6H2X, & Plectonemic B-DNA 1BNA):
1. Piece_Nuc_Plectoneme_DNA: Negatively Supercoiled Plectonemic B-DNA Loop - Deep Indigo (#3A0CA3)
2. Piece_Nuc_HU_Dimers: HU alpha-beta Heterodimer with Minor-Groove Beta-Ribbon Arms (1P71) - Golden Amber (#FFB703)
3. Piece_Nuc_HNS_Bridge: H-NS Oligomeric DNA-Bridging Filament Clamp (1HNS) - Magenta (#F72585)
4. Piece_Nuc_Fis_Benders: Fis Homodimer Branch-Point Stabilizer (3IV5) - Luminous Turquoise (#00F5D4)
5. Piece_Nuc_MukBEF_Clamp: MukBEF SMC Condensin Loop-Extrusion Ring (6H2X) - Seafoam Green (#06D6A0)

Exports to:
- ./nucleoid_naps.glb
- ../../models/nucleoid_naps.glb
- ../../client/public/models/nucleoid_naps.glb
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

# 1. Piece_Nuc_Plectoneme_DNA (Negatively supercoiled braided plectoneme loop)
bm = bmesh.new()
for i in range(90):
    t = i / 89.0
    theta = t * 2.0 * math.pi
    y = math.sin(theta * 0.5) * 4.5 - 1.5
    braid_r = 0.75 * (1.0 - 0.3 * math.sin(theta * 0.5))
    twist = t * 8.0 * math.pi
    x = math.cos(twist) * braid_r + math.sin(theta) * 0.6
    z = math.sin(twist) * braid_r
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.28, matrix=Matrix.Translation(Vector((x, y, z))))
mesh = bpy.data.meshes.new("Piece_Nuc_Plectoneme_DNA")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Nuc_Plectoneme_DNA", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Nuc_DNA", (0.227, 0.047, 0.639, 1.0)))
pieces.append(obj)

# 2. Piece_Nuc_HU_Dimers (HU alpha-beta heterodimer at apex of the plectoneme loop bending DNA 130 deg)
bm = bmesh.new()
for pt, r in [((0.0, 3.1, 0.0), 0.65), ((-0.45, 2.7, 0.25), 0.38), ((0.45, 2.7, -0.25), 0.38)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Nuc_HU_Dimers")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Nuc_HU_Dimers", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Nuc_HU", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.5))
pieces.append(obj)

# 3. Piece_Nuc_HNS_Bridge (H-NS oligomeric filament bridging the two parallel stems of the plectoneme)
bm = bmesh.new()
for k in range(6):
    yk = -0.8 + k * 0.48
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.22, radius2=0.22, depth=1.5,
                          matrix=Matrix.Translation(Vector((0.0, yk, 0.0))) @ Matrix.Rotation(math.pi / 2.0, 4, 'Y'))
mesh = bpy.data.meshes.new("Piece_Nuc_HNS_Bridge")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Nuc_HNS_Bridge", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Nuc_HNS", (0.969, 0.145, 0.522, 1.0)))
pieces.append(obj)

# 4. Piece_Nuc_Fis_Benders (Fis homodimers stabilizing supercoil crossovers)
bm = bmesh.new()
for pt in [(-1.1, 1.1, 0.4), (1.1, 0.2, -0.4), (-0.9, -1.2, -0.3)]:
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.46, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Nuc_Fis_Benders")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Nuc_Fis_Benders", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Nuc_Fis", (0.0, 0.961, 0.831, 1.0)))
pieces.append(obj)

# 5. Piece_Nuc_MukBEF_Clamp (SMC condensin loop-extrusion ring at the topological domain base)
bm = bmesh.new()
for i in range(20):
    ang = i * 2.0 * math.pi / 20.0
    pt = Vector((math.cos(ang) * 1.65, -2.0 + math.sin(ang) * 0.4, math.sin(ang) * 1.65))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.30, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Nuc_MukBEF_Clamp")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Nuc_MukBEF_Clamp", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Nuc_MukBEF", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "nucleoid_naps.glb"
out_models = REPO_ROOT / "models" / "nucleoid_naps.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "nucleoid_naps.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Nucleoid NAPs 1P71/1HNS/3IV5 ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
