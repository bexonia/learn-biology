"""
generate_12_acrab_tolc_efflux_pump.py

Authentic 3D Synthesis of the E. coli AcrAB-TolC Tripartite Multidrug Efflux Pump
(RCSB PDB: 5V5S / 1EK9 / 4DX5):
1. Piece_5V5S_Outer_Membrane: Outer LPS Membrane Bilayer Slab - Deep Marine (#0077B6)
2. Piece_5V5S_TolC_ExitDuct: TolC Trimeric Outer-Membrane Beta-Barrel & Alpha-Tunnel (1EK9) - Cyan (#00B4D8)
3. Piece_5V5S_AcrA_Collar: AcrA Hexameric Periplasmic Adapter Funnel Sleeve (5V5S) - Royal Violet (#9D4EDD)
4. Piece_5V5S_AcrB_Loose: AcrB Protomer 1 — Loose (L) Periplasmic Access State - Sky Blue (#48CAE4)
5. Piece_5V5S_AcrB_Tight: AcrB Protomer 2 — Tight (T) Drug-Binding Pocket - Golden Amber (#FFB703)
6. Piece_5V5S_AcrB_Open: AcrB Protomer 3 — Open (O) Peristaltic Extrusion Funnel - Magenta (#F72585)
7. Piece_5V5S_Inner_Membrane: Inner Cytoplasmic Membrane + AcrZ Small Peptide - Seafoam Green (#06D6A0)

Exports to:
- ./efflux_5v5s.glb
- ../../models/efflux_5v5s.glb
- ../../client/public/models/efflux_5v5s.glb
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

# 1. Piece_5V5S_Outer_Membrane (Top outer membrane slab at Y = +4.2)
bm = bmesh.new()
bmesh.ops.create_cube(bm, size=1.0)
for v in bm.verts:
    v.co.x *= 5.2
    v.co.y = v.co.y * 0.85 + 4.2
    v.co.z *= 5.2
mesh = bpy.data.meshes.new("Piece_5V5S_Outer_Membrane")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_5V5S_Outer_Membrane", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_5V5S_OM", (0.0, 0.467, 0.714, 1.0)))
pieces.append(obj)

# 2. Piece_5V5S_TolC_ExitDuct (Trimeric TolC outer-membrane beta-barrel + periplasmic alpha-barrel tunnel)
bm = bmesh.new()
for i in range(12):
    ang = i * math.pi / 6.0
    pt = Vector((math.cos(ang) * 0.92, 3.0, math.sin(ang) * 0.92))
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.25, radius2=0.25, depth=3.6,
                          matrix=Matrix.Translation(pt) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_5V5S_TolC_ExitDuct")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_5V5S_TolC_ExitDuct", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_5V5S_TolC", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 3. Piece_5V5S_AcrA_Collar (Hexameric AcrA periplasmic adapter sleeve bridging TolC to AcrB)
bm = bmesh.new()
for i in range(6):
    ang = i * math.pi / 3.0
    pt = Vector((math.cos(ang) * 1.35, 0.2, math.sin(ang) * 1.35))
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=12, radius1=0.38, radius2=0.45, depth=2.6,
                          matrix=Matrix.Translation(pt) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_5V5S_AcrA_Collar")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_5V5S_AcrA_Collar", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_5V5S_AcrA", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 4, 5, 6. Asymmetric AcrB RND Trimeric Protomers: Loose (L), Tight (T), Open (O)
acrb_protomers = [
    ("Piece_5V5S_AcrB_Loose", 0.0, (0.282, 0.792, 0.894, 1.0), 0.0),
    ("Piece_5V5S_AcrB_Tight", 2.0 * math.pi / 3.0, (1.0, 0.718, 0.012, 1.0), 0.5),
    ("Piece_5V5S_AcrB_Open", 4.0 * math.pi / 3.0, (0.969, 0.145, 0.522, 1.0), 0.5),
]
for p_name, ang, col, em in acrb_protomers:
    bm = bmesh.new()
    base = Vector((math.cos(ang) * 1.15, -2.4, math.sin(ang) * 1.15))
    for dy, r in [(-1.1, 0.88), (0.0, 0.95), (1.0, 0.78)]:
        bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(base + Vector((0, dy, 0))))
    mesh = bpy.data.meshes.new(p_name)
    bm.to_mesh(mesh); bm.free()
    obj = bpy.data.objects.new(p_name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(create_pbr_material(f"Mat_{p_name}", col, emissive=col[:3], emissive_strength=em))
    pieces.append(obj)

# 7. Piece_5V5S_Inner_Membrane (Bottom inner membrane slab at Y = -3.4)
bm = bmesh.new()
bmesh.ops.create_cube(bm, size=1.0)
for v in bm.verts:
    v.co.x *= 5.2
    v.co.y = v.co.y * 0.85 - 3.4
    v.co.z *= 5.2
mesh = bpy.data.meshes.new("Piece_5V5S_Inner_Membrane")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_5V5S_Inner_Membrane", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_5V5S_IM", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "efflux_5v5s.glb"
out_models = REPO_ROOT / "models" / "efflux_5v5s.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "efflux_5v5s.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported AcrAB-TolC Efflux Pump 5V5S ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
