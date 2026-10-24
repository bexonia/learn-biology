"""
generate_05_chemosensory_mcp_array.py

Authentic 3D Synthesis of the E. coli Polar Chemosensory Receptor Array (RCSB PDB: 6S1K / 3JA6 / 1QU7):
1. Piece_6S1K_Periplasmic_Sensors: Periplasmic Ligand-Binding 4-Helix Bundles (Tar/Tsr, 2CH4) - Cyan (#00B4D8)
2. Piece_6S1K_Inner_Membrane: Inner Cytoplasmic Phospholipid Bilayer Slab - Seafoam Green (#06D6A0)
3. Piece_6S1K_HAMP_Transducer: Transmembrane Helices & Cytoplasmic HAMP Signal Converter - Sky Blue (#48CAE4)
4. Piece_6S1K_MCP_Trimers: Cytoplasmic Coiled-Coil Stalks (Trimers-of-Dimers, 1QU7) - Royal Violet (#9D4EDD)
5. Piece_6S1K_CheA_CheW_Baseplate: Hexagonal CheA Histidine Kinase & CheW Adapter Ring - Golden Amber (#FFB703)
6. Piece_6S1K_CheR_CheB_Adaptors: Methyltransferase CheR & Methylesterase CheB - Warm Orange (#FB8500)
7. Piece_6S1K_CheY_Messengers: Diffusible CheY-P Response Regulator Shuttle Stream - Magenta (#F72585)

Exports to:
- ./chemosensory_6s1k.glb
- ../../models/chemosensory_6s1k.glb
- ../../client/public/models/chemosensory_6s1k.glb
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
hex_centers = []
for i in range(6):
    ang = i * math.pi / 3.0
    hex_centers.append(Vector((math.cos(ang) * 2.2, 0.0, math.sin(ang) * 2.2)))

# 1. Piece_6S1K_Periplasmic_Sensors
bm = bmesh.new()
for c in hex_centers:
    for j in range(3):
        a2 = j * 2.0 * math.pi / 3.0
        pt = c + Vector((math.cos(a2) * 0.55, 3.8, math.sin(a2) * 0.55))
        bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.42, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_6S1K_Periplasmic_Sensors")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_Periplasmic_Sensors", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_Periplasmic", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 2. Piece_6S1K_Inner_Membrane
bm = bmesh.new()
bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=24, radius1=3.8, radius2=3.8, depth=0.85,
                      matrix=Matrix.Translation(Vector((0.0, 2.3, 0.0))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_6S1K_Inner_Membrane")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_Inner_Membrane", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_Membrane", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 3. Piece_6S1K_HAMP_Transducer
bm = bmesh.new()
for c in hex_centers:
    for j in range(3):
        a2 = j * 2.0 * math.pi / 3.0
        pt = c + Vector((math.cos(a2) * 0.48, 1.2, math.sin(a2) * 0.48))
        bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.25, radius2=0.25, depth=1.1,
                              matrix=Matrix.Translation(pt) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_6S1K_HAMP_Transducer")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_HAMP_Transducer", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_HAMP", (0.282, 0.792, 0.894, 1.0)))
pieces.append(obj)

# 4. Piece_6S1K_MCP_Trimers (Coiled-coil stalks converging into trimers-of-dimers)
bm = bmesh.new()
for c in hex_centers:
    for j in range(3):
        a2 = j * 2.0 * math.pi / 3.0
        for s in range(8):
            frac = s / 7.0
            spread = 0.48 * (1.0 - 0.65 * frac)
            pt = c + Vector((math.cos(a2) * spread, 0.5 - frac * 3.0, math.sin(a2) * spread))
            bmesh.ops.create_uvsphere(bm, u_segments=8, v_segments=8, radius=0.22, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_6S1K_MCP_Trimers")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_MCP_Trimers", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_MCP", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 5. Piece_6S1K_CheA_CheW_Baseplate
bm = bmesh.new()
for i in range(12):
    ang = i * math.pi / 6.0
    pt = Vector((math.cos(ang) * 2.1, -2.9, math.sin(ang) * 2.1))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.48, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_6S1K_CheA_CheW_Baseplate")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_CheA_CheW_Baseplate", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_Baseplate", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.5))
pieces.append(obj)

# 6. Piece_6S1K_CheR_CheB_Adaptors
bm = bmesh.new()
for c in hex_centers[::2]:
    pt = c * 1.25 + Vector((0.0, -0.8, 0.0))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.45, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_6S1K_CheR_CheB_Adaptors")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_CheR_CheB_Adaptors", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_CheRB", (0.984, 0.522, 0.0, 1.0)))
pieces.append(obj)

# 7. Piece_6S1K_CheY_Messengers
bm = bmesh.new()
for i in range(8):
    ang = i * math.pi / 4.0
    r = 1.2 + (i % 2) * 0.9
    pt = Vector((math.cos(ang) * r, -4.2 - (i % 3) * 0.5, math.sin(ang) * r))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.34, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_6S1K_CheY_Messengers")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6S1K_CheY_Messengers", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6S1K_CheY", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.8))
pieces.append(obj)

out_local = SCRIPT_DIR / "chemosensory_6s1k.glb"
out_models = REPO_ROOT / "models" / "chemosensory_6s1k.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "chemosensory_6s1k.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Chemosensory Array 6S1K ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
