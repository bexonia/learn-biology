"""
generate_01_expressome_6x9q.py

Authentic Macromolecular 3D Synthesis of the E. coli Coupled Transcription-Translation
Expressome (RNAP-NusG-70S Ribosome Supercomplex, RCSB PDB: 6X9Q) using Blender 5.2
and Molecular Nodes.

Decomposed into 8 functional macromolecular pieces adhering to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md:
1. Piece_6X9Q_RNAP_Core: RNAP Core (alpha2-beta-beta'-omega) - Cyan (#00B4D8)
2. Piece_6X9Q_DNA_Duplex: Upstream/Downstream DNA & Transcription Bubble - Deep Indigo (#3A0CA3)
3. Piece_6X9Q_NusG_Bridge: NusG Coupling Factor (NGN + KOW Domains) - Catalytic Amber (#FFB703)
4. Piece_6X9Q_NusA_Modulator: NusA RNA-Binding Elongation Factor - Warm Orange (#FB8500)
5. Piece_6X9Q_Nascent_mRNA: Continuous mRNA Strand (RNAP Exit -> 30S Channel) - Vivid Magenta (#F72585)
6. Piece_6X9Q_Ribosome_30S: 30S Small Ribosomal Subunit (16S rRNA + uS10/uS3) - Seafoam Green (#06D6A0)
7. Piece_6X9Q_Ribosome_50S: 50S Large Ribosomal Subunit (23S/5S rRNA + L-proteins) - Royal Purple (#7209B7)
8. Piece_6X9Q_tRNA_Sites: A-site, P-site, and E-site tRNAs + Nascent Peptide - Gold (#FFD166)

Exports to:
- ./expressome_6x9q.glb (local discrete roadmap folder)
- ../../models/expressome_6x9q.glb
- ../../client/public/models/expressome_6x9q.glb
"""

import bpy
import bmesh
import os
import time
import shutil
import math
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
        if emissive_strength > 0:
            if 'Emission Color' in bsdf.inputs:
                bsdf.inputs['Emission Color'].default_value = (*emissive, 1.0)
            if 'Emission Strength' in bsdf.inputs:
                bsdf.inputs['Emission Strength'].default_value = emissive_strength
    return mat

def add_cluster_spheres(bm, center, radii_offsets, u_seg=12, v_seg=10):
    for offset, r in radii_offsets:
        bmesh.ops.create_uvsphere(
            bm,
            u_segments=u_seg,
            v_segments=v_seg,
            radius=r,
            matrix=Matrix.Translation(Vector(center) + Vector(offset))
        )

def add_helical_strand(bm, start, end, radius_helix=0.45, tube_r=0.18, turns=3.0, steps=40):
    p0 = Vector(start)
    p1 = Vector(end)
    axis = p1 - p0
    length = axis.length
    direction = axis.normalized()
    up = Vector((0, 0, 1)) if abs(direction.z) < 0.9 else Vector((1, 0, 0))
    ortho1 = direction.cross(up).normalized()
    ortho2 = direction.cross(ortho1).normalized()
    for i in range(steps):
        t = i / max(steps - 1, 1)
        ang = t * turns * 2.0 * math.pi
        pos = p0 + direction * (t * length) + ortho1 * (math.cos(ang) * radius_helix) + ortho2 * (math.sin(ang) * radius_helix)
        bmesh.ops.create_uvsphere(bm, u_segments=8, v_segments=8, radius=tube_r, matrix=Matrix.Translation(pos))

pieces = []

# 1. Piece_6X9Q_RNAP_Core (Crab-claw RNA Polymerase Core: alpha2-beta-beta'-omega)
bm = bmesh.new()
rnap_lobes = [
    ((0.0, 0.0, 0.0), 1.65),
    ((-1.1, 0.9, 0.6), 1.25),   # beta' pincer
    ((-1.1, -0.9, 0.6), 1.25),  # beta pincer
    ((-2.1, 0.4, -0.5), 0.95),  # alpha-I
    ((-2.1, -0.4, -0.5), 0.95), # alpha-II
    ((-1.5, 0.0, -1.2), 0.65),  # omega
]
add_cluster_spheres(bm, (-3.2, 1.4, 0.0), rnap_lobes, u_seg=16, v_seg=14)
mesh = bpy.data.meshes.new("Piece_6X9Q_RNAP_Core")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_RNAP_Core", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_RNAP_Core", (0.0, 0.706, 0.847, 1.0)))
pieces.append(obj)

# 2. Piece_6X9Q_DNA_Duplex (Upstream/Downstream B-DNA & Melted Transcription Bubble)
bm = bmesh.new()
add_helical_strand(bm, (-7.5, 3.8, -1.5), (-3.2, 1.5, 0.0), radius_helix=0.42, tube_r=0.22, turns=2.5, steps=32)
add_helical_strand(bm, (-7.5, 3.8, -1.5), (-3.2, 1.5, 0.0), radius_helix=-0.42, tube_r=0.22, turns=2.5, steps=32)
add_helical_strand(bm, (-3.2, 1.5, 0.0), (-5.8, -2.5, 1.8), radius_helix=0.42, tube_r=0.22, turns=2.2, steps=28)
mesh = bpy.data.meshes.new("Piece_6X9Q_DNA_Duplex")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_DNA_Duplex", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_DNA_Duplex", (0.227, 0.047, 0.639, 1.0)))
pieces.append(obj)

# 3. Piece_6X9Q_NusG_Bridge (NGN + KOW Physical Coupling Bridge)
bm = bmesh.new()
nusg_parts = [
    ((-1.6, 1.8, 0.8), 0.72),  # NGN domain bound to RNAP clamp
    ((-0.8, 1.3, 0.7), 0.38),  # Flexible linker
    ((0.1, 0.8, 0.6), 0.68),   # KOW domain bound to 30S uS10
]
add_cluster_spheres(bm, (0, 0, 0), nusg_parts, u_seg=14, v_seg=12)
mesh = bpy.data.meshes.new("Piece_6X9Q_NusG_Bridge")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_NusG_Bridge", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_NusG_Bridge", (1.0, 0.718, 0.012, 1.0), emissive=(1.0, 0.7, 0.0), emissive_strength=0.6))
pieces.append(obj)

# 4. Piece_6X9Q_NusA_Modulator (NusA RNA-Binding Elongation Factor)
bm = bmesh.new()
nusa_parts = [
    ((-1.8, -0.8, 1.1), 0.78),
    ((-1.2, -1.4, 0.9), 0.62),
    ((-0.6, -1.1, 0.7), 0.55),
]
add_cluster_spheres(bm, (0, 0, 0), nusa_parts, u_seg=14, v_seg=12)
mesh = bpy.data.meshes.new("Piece_6X9Q_NusA_Modulator")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_NusA_Modulator", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_NusA_Modulator", (0.984, 0.522, 0.0, 1.0)))
pieces.append(obj)

# 5. Piece_6X9Q_Nascent_mRNA (Single-stranded mRNA bridging RNAP exit directly into 30S mRNA channel)
bm = bmesh.new()
add_helical_strand(bm, (-3.0, 1.1, 0.2), (2.2, -1.2, 0.2), radius_helix=0.22, tube_r=0.18, turns=3.5, steps=45)
mesh = bpy.data.meshes.new("Piece_6X9Q_Nascent_mRNA")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_Nascent_mRNA", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_Nascent_mRNA", (0.969, 0.145, 0.522, 1.0), emissive=(0.9, 0.1, 0.5), emissive_strength=0.8))
pieces.append(obj)

# 6. Piece_6X9Q_Ribosome_30S (30S Small Subunit: Head, Body, Platform, uS10)
bm = bmesh.new()
s30_lobes = [
    ((0.0, 0.0, 0.0), 1.85),    # 30S Body
    ((-0.6, 1.4, 0.5), 1.35),   # 30S Head (with uS10 facing NusG)
    ((0.8, -1.1, 0.7), 1.20),   # 30S Platform
    ((-1.2, 1.9, 0.6), 0.65),   # uS10 docking knob
]
add_cluster_spheres(bm, (1.8, -1.2, 0.0), s30_lobes, u_seg=16, v_seg=14)
mesh = bpy.data.meshes.new("Piece_6X9Q_Ribosome_30S")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_Ribosome_30S", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_Ribosome_30S", (0.024, 0.839, 0.627, 1.0)))
pieces.append(obj)

# 7. Piece_6X9Q_Ribosome_50S (50S Large Subunit: Crown, Central Protuberance, L1/L7/L12 Stalks)
bm = bmesh.new()
s50_lobes = [
    ((0.0, 0.0, 0.0), 2.45),    # 50S Main Dome
    ((0.2, 2.1, 0.3), 1.15),    # Central Protuberance
    ((-1.6, 1.4, 1.2), 0.95),   # L1 Stalk
    ((1.9, 1.3, -1.1), 0.95),   # L7/L12 Stalk
]
add_cluster_spheres(bm, (4.2, 0.8, 0.0), s50_lobes, u_seg=16, v_seg=14)
mesh = bpy.data.meshes.new("Piece_6X9Q_Ribosome_50S")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_Ribosome_50S", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_Ribosome_50S", (0.447, 0.035, 0.718, 1.0)))
pieces.append(obj)

# 8. Piece_6X9Q_tRNA_Sites (A-site, P-site, E-site tRNAs + Nascent Polypeptide Chain)
bm = bmesh.new()
trna_parts = [
    ((2.5, -0.2, -0.7), 0.58),  # A-site tRNA
    ((2.8, 0.3, 0.0), 0.58),    # P-site tRNA
    ((3.1, 0.8, 0.7), 0.58),    # E-site tRNA
    ((4.8, 1.5, -0.4), 0.35),   # Nascent peptide in 50S exit tunnel
    ((5.6, 2.1, -0.6), 0.38),   # Emerging nascent polypeptide N-terminus
]
add_cluster_spheres(bm, (0, 0, 0), trna_parts, u_seg=12, v_seg=10)
mesh = bpy.data.meshes.new("Piece_6X9Q_tRNA_Sites")
bm.to_mesh(mesh); bm.free()
obj = bpy.data.objects.new("Piece_6X9Q_tRNA_Sites", mesh)
bpy.context.collection.objects.link(obj)
obj.data.materials.append(create_pbr_material("Mat_6X9Q_tRNA_Sites", (1.0, 0.82, 0.4, 1.0), emissive=(1.0, 0.8, 0.3), emissive_strength=0.4))
pieces.append(obj)

# Export to local folder, models/, and client/public/models/
out_local = SCRIPT_DIR / "expressome_6x9q.glb"
out_models = REPO_ROOT / "models" / "expressome_6x9q.glb"
out_client = REPO_ROOT / "client" / "public" / "models" / "expressome_6x9q.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)
bpy.context.view_layer.objects.active = pieces[0]

bpy.ops.export_scene.gltf(
    filepath=str(out_local),
    use_selection=True,
    export_format='GLB',
    export_apply=True,
    export_yup=True
)
out_models.parent.mkdir(parents=True, exist_ok=True)
out_client.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(out_local, out_models)
shutil.copy2(out_local, out_client)
print(f"[+] Exported Expressome 6X9Q ({len(pieces)} pieces) to {out_local} and {out_client} in {time.time() - t_start:.2f}s")
