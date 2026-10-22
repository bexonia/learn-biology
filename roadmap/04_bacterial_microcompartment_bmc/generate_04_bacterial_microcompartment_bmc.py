"""
generate_04_bacterial_microcompartment_bmc.py

Authentic 3D Synthesis of the Icosahedral Bacterial Microcompartment (Carboxysome / Pdu BMC,
RCSB PDB: 7O04 / 3I82 / 2RCF) corresponding to primer_fig3.png:
1. Piece_BMC_Hexamer_Facets: BMC-H Hexameric Facet Tiles (3/4 Cutaway Icosahedron) - Cyan (#00B4D8)
2. Piece_BMC_Pentamer_Vertices: 12 BMC-P Pentameric Vertex Caps - Golden Amber (#FFB703)
3. Piece_BMC_Trimer_GatedPores: BMC-T Allosteric Gated Cofactor Pores - Seafoam Green (#06D6A0)
4. Piece_BMC_Cargo_Enzymes: Encapsulated RuBisCO / Dehydratase Core Condensate - Royal Violet (#9D4EDD)
5. Piece_BMC_CarbonicAnhydrase: Shell-Associated Carbonic Anhydrase / Aldehyde Dehydrogenase - Magenta (#F72585)

Exports to:
- ./microcompartment_7o04.glb
- ../../models/microcompartment_7o04.glb
- ../../client/public/models/microcompartment_7o04.glb
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

# Generate golden-ratio icosahedron vertices
phi = (1.0 + math.sqrt(5.0)) / 2.0
raw_verts = [
    (-1,  phi, 0), ( 1,  phi, 0), (-1, -phi, 0), ( 1, -phi, 0),
    ( 0, -1,  phi), ( 0,  1,  phi), ( 0, -1, -phi), ( 0,  1, -phi),
    ( phi, 0, -1), ( phi, 0,  1), (-phi, 0, -1), (-phi, 0,  1),
]
R_SHELL = 3.8
ico_verts = [Vector(v).normalized() * R_SHELL for v in raw_verts]

faces = [
    (0, 11, 5), (0, 5, 1), (0, 1, 7), (0, 7, 10), (0, 10, 11),
    (1, 5, 9), (5, 11, 4), (11, 10, 2), (10, 7, 6), (7, 1, 8),
    (3, 9, 4), (3, 4, 2), (3, 2, 6), (3, 6, 8), (3, 8, 9),
    (4, 9, 5), (2, 4, 11), (6, 2, 10), (8, 6, 7), (9, 8, 1)
]

# 1. Piece_BMC_Hexamer_Facets (3/4 cutaway icosahedral facets made of BMC-H hexamer tiles)
bm = bmesh.new()
for idx, (i0, i1, i2) in enumerate(faces):
    v0, v1, v2 = ico_verts[i0], ico_verts[i1], ico_verts[i2]
    f_center = (v0 + v1 + v2) / 3.0
    # Leave front-right octant open for 3/4 cutaway like primer_fig3.png
    if f_center.x > 0.5 and f_center.z > 0.5 and f_center.y > -0.5:
        continue
    normal = f_center.normalized()
    rot = normal.to_track_quat('Z', 'Y').to_matrix().to_4x4()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=6, radius1=1.15, radius2=1.15, depth=0.28,
                          matrix=Matrix.Translation(f_center) @ rot)
mesh = bpy.data.meshes.new("Piece_BMC_Hexamer_Facets")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_BMC_Hexamer_Facets", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_BMC_Hexamer", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 2. Piece_BMC_Pentamer_Vertices (12 BMC-P pentameric vertex caps)
bm = bmesh.new()
for v in ico_verts:
    if v.x > 0.8 and v.z > 0.8 and v.y > 0.0:
        continue
    normal = v.normalized()
    rot = normal.to_track_quat('Z', 'Y').to_matrix().to_4x4()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=5, radius1=0.58, radius2=0.52, depth=0.36,
                          matrix=Matrix.Translation(v) @ rot)
mesh = bpy.data.meshes.new("Piece_BMC_Pentamer_Vertices")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_BMC_Pentamer_Vertices", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_BMC_Pentamer", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.4))
pieces.append(obj)

# 3. Piece_BMC_Trimer_GatedPores (BMC-T gated cofactor pores embedded in facets)
bm = bmesh.new()
for idx, (i0, i1, i2) in enumerate(faces[:8]):
    v0, v1, v2 = ico_verts[i0], ico_verts[i1], ico_verts[i2]
    f_center = ((v0 + v1) * 0.5 + v2) * 0.5
    normal = f_center.normalized()
    rot = normal.to_track_quat('Z', 'Y').to_matrix().to_4x4()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=6, radius1=0.42, radius2=0.42, depth=0.42,
                          matrix=Matrix.Translation(f_center) @ rot)
mesh = bpy.data.meshes.new("Piece_BMC_Trimer_GatedPores")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_BMC_Trimer_GatedPores", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_BMC_Trimer", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 4. Piece_BMC_Cargo_Enzymes (Packed purple RuBisCO / Dehydratase enzyme spheres inside the cutaway shell)
bm = bmesh.new()
for gx in (-1.3, 0.0, 1.3):
    for gy in (-1.3, 0.0, 1.3):
        for gz in (-1.3, 0.0, 1.3):
            pt = Vector((gx, gy, gz))
            if pt.length <= 2.3:
                bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.58, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_BMC_Cargo_Enzymes")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_BMC_Cargo_Enzymes", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_BMC_Cargo", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 5. Piece_BMC_CarbonicAnhydrase (Co-encapsulated Carbonic Anhydrase / Aldehyde Dehydrogenase partners)
bm = bmesh.new()
ca_pts = [(1.1, 0.7, 0.7), (-1.1, 0.7, -0.7), (0.7, -1.1, 0.7), (-0.7, -0.7, 1.1), (0.0, 1.5, 0.0)]
for pt in ca_pts:
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.42, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_BMC_CarbonicAnhydrase")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_BMC_CarbonicAnhydrase", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_BMC_CA", (0.969, 0.145, 0.522, 1.0), emissive=(0.8, 0.1, 0.4), emissive_strength=0.4))
pieces.append(obj)

out_local = SCRIPT_DIR / "microcompartment_7o04.glb"
out_models = REPO_ROOT / "models" / "microcompartment_7o04.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "microcompartment_7o04.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Bacterial Microcompartment 7O04 ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
