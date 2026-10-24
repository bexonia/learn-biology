"""
generate_09_rna_degradosome.py

Authentic 3D Synthesis of the E. coli Membrane-Tethered RNA Degradosome
(RCSB PDB: 5M3P / 2C0B / 2YKR / 2FYM / 1KQ2):
1. Piece_Deg_Inner_Membrane: Inner Cytoplasmic Phospholipid Bilayer + Segment A Anchor - Seafoam Green (#06D6A0)
2. Piece_Deg_RNaseE_Tetramer: RNase E Endoribonuclease Catalytic Tetramer + Zn2+ Link (2C0B) - Golden Amber (#FFB703)
3. Piece_Deg_CTD_Scaffold: Intrinsically Disordered C-Terminal Assembly Hub (AF-P21513) - Sky Blue (#48CAE4)
4. Piece_Deg_RhlB_Helicase: RhlB ATP-Dependent DEAD-Box RNA Helicase (2YKR) - Warm Orange (#FF7B00)
5. Piece_Deg_PNPase_Trimer: PNPase Homotrimeric 3'->5' Phosphorolytic Exonuclease Ring (5M3P) - Royal Violet (#9D4EDD)
6. Piece_Deg_Enolase_Dimer: Glycolytic Enolase Sensor Dimer (2FYM) - Cyan (#00B4D8)
7. Piece_Deg_Hfq_sRNA_Target: Hfq Hexameric Ring + sRNA-mRNA Duplex Substrate (1KQ2) - Magenta (#F72585)

Exports to:
- ./rna_degradosome_5m3p.glb
- ../../models/rna_degradosome_5m3p.glb
- ../../client/public/models/rna_degradosome_5m3p.glb
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

# 1. Piece_Deg_Inner_Membrane (Top inner membrane slab with Segment A amphipathic helix)
bm = bmesh.new()
bmesh.ops.create_cube(bm, size=1.0)
for v in bm.verts:
    v.co.x *= 7.5
    v.co.y *= 0.85
    v.co.z *= 4.0
    v.co.y += 3.2
mesh = bpy.data.meshes.new("Piece_Deg_Inner_Membrane")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_Inner_Membrane", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_Membrane", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 2. Piece_Deg_RNaseE_Tetramer (Dimer-of-dimers catalytic core 2C0B)
bm = bmesh.new()
for sx in (-1.1, 1.1):
    for sz in (-0.85, 0.85):
        bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.88,
                                  matrix=Matrix.Translation(Vector((-1.5 + sx, 0.9, sz))))
mesh = bpy.data.meshes.new("Piece_Deg_RNaseE_Tetramer")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_RNaseE_Tetramer", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_RNaseE", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.4))
pieces.append(obj)

# 3. Piece_Deg_CTD_Scaffold (Flexible C-terminal assembly scaffold connecting RNase E to partners)
bm = bmesh.new()
for i in range(28):
    t = i / 27.0
    pt = Vector((-1.5 + t * 4.2, 1.8 - math.sin(t * math.pi) * 3.2, math.cos(t * 2.0 * math.pi) * 0.65))
    bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=8, radius=0.22, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Deg_CTD_Scaffold")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_CTD_Scaffold", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_Scaffold", (0.282, 0.792, 0.894, 1.0)))
pieces.append(obj)

# 4. Piece_Deg_RhlB_Helicase (Two-RecA-lobe DEAD-box RNA helicase 2YKR)
bm = bmesh.new()
for pt, r in [((-0.8, -1.6, 0.7), 0.75), ((-0.1, -2.2, 0.5), 0.72)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=r, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Deg_RhlB_Helicase")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_RhlB_Helicase", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_RhlB", (1.0, 0.482, 0.0, 1.0)))
pieces.append(obj)

# 5. Piece_Deg_PNPase_Trimer (Homotrimeric 3'->5' phosphorolytic ring barrel 5M3P)
bm = bmesh.new()
for i in range(6):
    ang = i * math.pi / 3.0
    pt = Vector((2.3 + math.cos(ang) * 0.95, -1.4 + math.sin(ang) * 0.95, 0.0))
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.62, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Deg_PNPase_Trimer")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_PNPase_Trimer", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_PNPase", (0.616, 0.306, 0.867, 1.0)))
pieces.append(obj)

# 6. Piece_Deg_Enolase_Dimer (Glycolytic Enolase dimer 2FYM)
bm = bmesh.new()
for pt in [(1.4, 0.9, 0.6), (2.3, 1.1, 0.4)]:
    bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=12, radius=0.68, matrix=Matrix.Translation(Vector(pt)))
mesh = bpy.data.meshes.new("Piece_Deg_Enolase_Dimer")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_Enolase_Dimer", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_Enolase", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 7. Piece_Deg_Hfq_sRNA_Target (Hexameric Hfq chaperone ring + bound sRNA-mRNA target strand)
bm = bmesh.new()
for i in range(6):
    ang = i * math.pi / 3.0
    pt = Vector((-3.2 + math.cos(ang) * 0.62, -1.0 + math.sin(ang) * 0.62, 0.9))
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=10, radius=0.36, matrix=Matrix.Translation(pt))
for i in range(18):
    t = i / 17.0
    pt = Vector((-3.2 + t * 5.2, -0.5 - math.sin(t * math.pi) * 1.1, 0.85 - t * 0.7))
    bmesh.ops.create_uvsphere(bm, u_segments=8, v_segments=8, radius=0.18, matrix=Matrix.Translation(pt))
mesh = bpy.data.meshes.new("Piece_Deg_Hfq_sRNA_Target")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_Deg_Hfq_sRNA_Target", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_Deg_Hfq", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.6))
pieces.append(obj)

out_local = SCRIPT_DIR / "rna_degradosome_5m3p.glb"
out_models = REPO_ROOT / "models" / "rna_degradosome_5m3p.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "rna_degradosome_5m3p.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(filepath=str(out_local), use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported RNA Degradosome 5M3P ({len(pieces)} pieces) in {time.time() - t_start:.2f}s")
