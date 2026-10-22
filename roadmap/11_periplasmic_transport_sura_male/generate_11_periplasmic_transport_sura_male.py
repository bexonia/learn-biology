"""
generate_11_periplasmic_transport_sura_male.py

Authentic 3D Synthesis of Periplasmic Escort & Solute Transport:
SurA Holdase Chaperone (1M5Y) & MalE-MalFGK2 Venus-Flytrap ABC Transporter (1OMP / 2R6G):
1. Piece_Peri_SurA_CoreCradle: SurA N+C Core Chaperone Cradle (1M5Y) - Cyan (#00B4D8)
2. Piece_Peri_SurA_PPIase_P1P2: SurA P1 & P2 Peptidyl-Prolyl Isomerase Domains (1M5Y) - Royal Violet (#9D4EDD)
3. Piece_Peri_Unfolded_OMP_Cargo: Escorted Unfolded OMP Polypeptide + Ar-X-Ar Signal - Magenta (#F72585)
4. Piece_Peri_MalE_VenusFlytrap: Periplasmic MalE Two-Lobe Solute Scout (1OMP) - Golden Amber (#FFB703)
5. Piece_Peri_Maltose_Ligand: Bound Maltose Disaccharide in MalE Hinge Cleft (1ANF) - Luminous Turquoise (#00F5D4)
6. Piece_Peri_MalFG_TM_Channel: Inner-Membrane MalF & MalG Transmembrane Permease (2R6G) - Seafoam Green (#06D6A0)
7. Piece_Peri_MalK2_ATPase_Dimer: Cytoplasmic MalK2 Nucleotide-Binding ATPase Dimer (2R6G) - Warm Orange (#FF7B00)

Exports to:
- ./periplasmic_transport.glb
- ../../models/periplasmic_transport.glb
- ../../client/public/models/periplasmic_transport.glb
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

# --- PATHWAY 1: SurA PERIPLASMIC CHAPERONE ESCORT (1M5Y, X = -3.2) ---
# 1. Piece_Peri_SurA_CoreCradle
bm = bmesh.new()
for pt, r in [((-3.2, 0.8, 0.0), 1.05), ((-2.4, 1.4, 0.3), 0.75), ((-4.0, 1.4, -0.3), 0.75)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Peri_SurA_CoreCradle")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_SurA_CoreCradle", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_SurA_Core", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 2. Piece_Peri_SurA_PPIase_P1P2 (P1 core-associated & P2 satellite PPIase domains)
bm = bmesh.new()
for pt, r in [((-3.2, 2.3, 0.5), 0.72), ((-4.4, 3.1, -0.4), 0.78), ((-3.8, 2.6, 0.0), 0.32)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Peri_SurA_PPIase_P1P2")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_SurA_PPIase_P1P2", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_SurA_PPIase", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 3. Piece_Peri_Unfolded_OMP_Cargo (Unfolded beta-barrel polypeptide cradled inside SurA)
bm = bmesh.new()
for i in range(16):
    t = i / 15.0 * 3.0 * math.pi
    pt = Vector((-3.2 + math.cos(t) * 0.52, 1.2 + (i / 15.0) * 1.6, math.sin(t) * 0.45))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.25, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Peri_Unfolded_OMP_Cargo")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_Unfolded_OMP_Cargo", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_SurA_Cargo", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.6))
pieces.append(obj)

# --- PATHWAY 2: MalE-MalFGK2 VENUS-FLYTRAP ABC TRANSPORTER (1OMP / 2R6G, X = +3.0) ---
# 4. Piece_Peri_MalE_VenusFlytrap (Two-lobe periplasmic maltose-binding protein 1OMP)
bm = bmesh.new()
for pt, r in [((2.4, 2.5, 0.0), 0.78), ((3.6, 2.5, 0.0), 0.78), ((3.0, 2.9, 0.0), 0.45)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Peri_MalE_VenusFlytrap")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_MalE_VenusFlytrap", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_MalE", (1.0, 0.718, 0.012, 1.0)))
pieces.append(obj)

# 5. Piece_Peri_Maltose_Ligand (Disaccharide maltose bound in the MalE hinge cleft)
bm = bmesh.new()
for pt in [(2.85, 2.2, 0.25), (3.15, 2.2, -0.15)]:
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.30, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Peri_Maltose_Ligand")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_Maltose_Ligand", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Maltose", (0.0, 0.961, 0.831, 1.0), emissive=(0.0, 0.9, 0.8), emissive_strength=0.8))
pieces.append(obj)

# 6. Piece_Peri_MalFG_TM_Channel (Inner-membrane MalF & MalG transmembrane permease)
bm = bmesh.new()
for sx in (-0.65, 0.65):
    for sz in (-0.45, 0.45):
        bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=12, radius1=0.38, radius2=0.38, depth=2.1,
                              matrix=Matrix.Translation(Vector((3.0 + sx, 0.3, sz))) @ Matrix.Rotation(math.pi / 2.0, 4, 'X'))
mesh = bpy.data.meshes.new("Piece_Peri_MalFG_TM_Channel")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_MalFG_TM_Channel", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_MalFG", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 7. Piece_Peri_MalK2_ATPase_Dimer (Cytoplasmic MalK2 nucleotide-binding ATPase dimer)
bm = bmesh.new()
for pt, r in [((2.3, -1.6, 0.0), 0.82), ((3.7, -1.6, 0.0), 0.82), ((3.0, -2.2, 0.0), 0.55)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Peri_MalK2_ATPase_Dimer")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Peri_MalK2_ATPase_Dimer", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_MalK2", (1.0, 0.482, 0.0, 1.0)))
pieces.append(obj)

out_local = SCRIPT_DIR / "periplasmic_transport.glb"
out_models = REPO_ROOT / "models" / "periplasmic_transport.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "periplasmic_transport.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Periplasmic Transport 1M5Y/1OMP/2R6G ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
