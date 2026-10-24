"""
generate_02_cell_envelopes_comparison.py

Comparative 3D Synthesis of the Three Prokaryotic Cell Envelopes (primer_fig7.png):
1. Gram-Negative Envelope (Outer LPS Membrane + OmpF 2OMF Porin + Lpp 1EQ7 Staples + Thin Murein 3VMA + Inner Membrane)
2. Gram-Positive Envelope (Thick 30-Layer Peptidoglycan Mesh + Wall/Lipoteichoic Acids + Plasma Membrane)
3. Archaeal Envelope (Crystalline Hexagonal Protein S-Layer + Ether-Linked Isoprenoid Membrane)

Exports to:
- ./envelopes_comparison.glb
- ../../models/envelopes_comparison.glb
- ../../client/public/models/envelopes_comparison.glb
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

def create_pbr_material(name, base_color, roughness=0.38, metalness=0.08, emissive=(0, 0, 0), emissive_strength=0.0):
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

def make_slab_piece(name, center, size, color, roughness=0.4):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co.x *= size[0]
        v.co.y *= size[1]
        v.co.z *= size[2]
        v.co += Vector(center)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh); bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(create_pbr_material(f"Mat_{name}", color, roughness=roughness))
    return obj

pieces = []

# --- COLUMN 1: GRAM-NEGATIVE ENVELOPE (X = -5.5) ---
# 1. Piece_Env_GN_OuterMembrane
pieces.append(make_slab_piece("Piece_Env_GN_OuterMembrane", (-5.5, 2.8, 0.0), (3.6, 0.9, 3.6), (0.0, 0.467, 0.714, 1.0)))

# 2. Piece_Env_GN_OmpF_Porin (Trimeric 16-stranded beta-barrel porin 2OMF embedded in OM)
bm = bmesh.new()
for i in range(3):
    ang = i * 2.0 * math.pi / 3.0
    px = -5.5 + 0.55 * math.cos(ang)
    pz = 0.55 * math.sin(ang)
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=16, radius1=0.48, radius2=0.48, depth=1.25,
                          matrix=Matrix.Translation(Vector((px, 2.95, pz))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Env_GN_OmpF_Porin")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Env_GN_OmpF_Porin", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Env_GN_OmpF", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 3. Piece_Env_GN_Lpp_Staples (Braun's Lipoprotein coiled-coil staples tethering OM to Peptidoglycan)
bm = bmesh.new()
for sx in (-6.6, -5.5, -4.4):
    for sz in (-0.9, 0.9):
        bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.14, radius2=0.14, depth=1.6,
                              matrix=Matrix.Translation(Vector((sx, 1.65, sz))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Env_GN_Lpp_Staples")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Env_GN_Lpp_Staples", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Env_GN_Lpp", (1.0, 0.82, 0.4, 1.0)))
pieces.append(obj)

# 4. Piece_Env_GN_Peptidoglycan (Thin periplasmic murein monolayer 3VMA)
pieces.append(make_slab_piece("Piece_Env_GN_Peptidoglycan", (-5.5, 0.6, 0.0), (3.6, 0.45, 3.6), (0.906, 0.435, 0.318, 1.0)))

# 5. Piece_Env_GN_InnerMembrane (Inner phospholipid bilayer)
pieces.append(make_slab_piece("Piece_Env_GN_InnerMembrane", (-5.5, -2.2, 0.0), (3.6, 0.85, 3.6), (0.024, 0.839, 0.627, 1.0)))

# --- COLUMN 2: GRAM-POSITIVE ENVELOPE (X = 0.0) ---
# 6. Piece_Env_GP_ThickMurein (Thick multi-layered peptidoglycan cell wall)
pieces.append(make_slab_piece("Piece_Env_GP_ThickMurein", (0.0, 1.2, 0.0), (3.6, 2.8, 3.6), (0.906, 0.435, 0.318, 1.0)))

# 7. Piece_Env_GP_TeichoicAcids (Wall & Lipoteichoic Acid polyanionic fibers threading the wall)
bm = bmesh.new()
for tx in (-1.1, 0.0, 1.1):
    for tz in (-1.0, 0.0, 1.0):
        bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=10, radius1=0.12, radius2=0.12, depth=3.8,
                              matrix=Matrix.Translation(Vector((tx, 1.5, tz))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Env_GP_TeichoicAcids")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Env_GP_TeichoicAcids", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Env_GP_Teichoic", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.4))
pieces.append(obj)

# 8. Piece_Env_GP_PlasmaMembrane (Single cytoplasmic membrane)
pieces.append(make_slab_piece("Piece_Env_GP_PlasmaMembrane", (0.0, -2.2, 0.0), (3.6, 0.85, 3.6), (0.024, 0.839, 0.627, 1.0)))

# --- COLUMN 3: ARCHAEAL S-LAYER ENVELOPE (X = +5.5) ---
# 9. Piece_Env_AR_SLayer (Hexagonal paracrystalline protein S-layer armor tiles)
bm = bmesh.new()
for gx in (-1.1, 0.0, 1.1):
    for gz in (-1.1, 0.0, 1.1):
        bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=6, radius1=0.55, radius2=0.55, depth=0.65,
                              matrix=Matrix.Translation(Vector((5.5 + gx, 1.2, gz))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Env_AR_SLayer")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Env_AR_SLayer", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Env_AR_SLayer", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 10. Piece_Env_AR_EtherMembrane (Ether-linked isoprenoid caldarchaeol/archaeol membrane)
pieces.append(make_slab_piece("Piece_Env_AR_EtherMembrane", (5.5, -2.2, 0.0), (3.6, 0.95, 3.6), (0.0, 0.961, 0.831, 1.0)))

out_local = SCRIPT_DIR / "envelopes_comparison.glb"
out_models = REPO_ROOT / "models" / "envelopes_comparison.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "envelopes_comparison.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Prokaryotic Envelopes Comparison ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
