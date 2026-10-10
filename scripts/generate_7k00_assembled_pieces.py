"""
generate_7k00_assembled_pieces.py

Programmatically generates a scientifically authentic, multi-piece 3D model of the
bacterial 70S translating ribosome holoenzyme from RCSB Cryo-EM structure PDB: 7K00
(Watson et al., 2020 at 2.4 Angstrom resolution).

Builds 7 distinct macromolecular pieces:
1. Piece_50S_Large_Subunit (23S + 5S rRNA + 34 ribosomal proteins) - Moss Green
2. Piece_30S_Small_Subunit (16S rRNA + 21 ribosomal proteins) - Slate Denim Blue
3. Piece_mRNA_Strand (Chain X polyribonucleotide) - Terracotta Coral Red
4. Piece_tRNA_A_Site (Chain Y Val-tRNA) - Jewel Violet
5. Piece_tRNA_P_Site (Chain Z fMet-tRNA) - Jade Teal
6. Piece_tRNA_E_Site (Full cloverleaf tRNA aligned to Chain 5 CCA pocket) - Muted Mauve
7. Piece_PTC_Active_Site (Domain V 23S rRNA A2451 & C2452 catalytic core) - Golden Amber

Centers all pieces at (0, 0, 0), parents under Ribosome_70S_Complex,
and exports an optimized binary GLB to client/public/models/7K00_assembled_pieces.glb.
"""

import bpy
import bmesh
import os
import sys
import time
import numpy as np
from pathlib import Path

# Clear all existing scene objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

try:
    import bl_ext.blender_org.molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)
except ImportError:
    import molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)

t_start = time.time()
print("[*] Fetching 7K00 from RCSB cache...")
mol = mn.entities.Molecule.fetch("7K00", format=".bcif")
universe = mol.universe
print(f"[+] Loaded 7K00 universe: {len(universe.atoms)} atoms in {time.time() - t_start:.2f}s")

# Global center of mass (scaled to nm)
global_com = universe.atoms.center_of_mass() / 10.0
print(f"[*] Global complex Center of Mass: {global_com} nm")

def create_pbr_material(name, base_color, roughness=0.45, metalness=0.05, emissive=(0,0,0), emissive_strength=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = next((n for n in nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if bsdf:
        bsdf.inputs['Base Color'].default_value = base_color
        bsdf.inputs['Roughness'].default_value = roughness
        bsdf.inputs['Metallic'].default_value = metalness
        if emissive_strength > 0:
            bsdf.inputs['Emission Color'].default_value = (*emissive, 1.0)
            if 'Emission Strength' in bsdf.inputs:
                bsdf.inputs['Emission Strength'].default_value = emissive_strength
    return mat

def clean_mesh_origin_artifacts(obj):
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    verts_to_delete = [v for v in bm.verts if v.co.x < 5.0]
    if verts_to_delete:
        bmesh.ops.delete(bm, geom=verts_to_delete, context='VERTS')
        bm.to_mesh(obj.data)
    bm.free()
    obj.data.update()

pieces = []

# -------------------------------------------------------------------------
# 1. Piece_50S_Large_Subunit
# -------------------------------------------------------------------------
print("\n[*] [1/7] Generating Piece_50S_Large_Subunit...")
t0 = time.time()
sel_50s = "chainID a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4"
mol_50s = mn.entities.Molecule(universe, name="Piece_50S_Large_Subunit")
mol_50s.add_style(
    style="cartoon",
    selection=sel_50s,
    color=(0.55, 0.66, 0.45, 1.0) # Moss green #8DA873
)
bpy.context.view_layer.objects.active = mol_50s.object
mol_50s.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_50s.object)

# Decimate to WebGL budget (0.35 ratio)
mod_50s = mol_50s.object.modifiers.new(name="Decimate_50S", type='DECIMATE')
mod_50s.ratio = 0.35
bpy.ops.object.modifier_apply(modifier="Decimate_50S")

mat_50s = create_pbr_material("Mat_50S_MossGreen", (0.55, 0.66, 0.45, 1.0), roughness=0.55, metalness=0.04)
mol_50s.object.data.materials.clear()
mol_50s.object.data.materials.append(mat_50s)

print(f"[+] Piece_50S ready in {time.time() - t0:.2f}s: {len(mol_50s.object.data.vertices)} verts, {len(mol_50s.object.data.polygons)} polys")
pieces.append(mol_50s.object)

# -------------------------------------------------------------------------
# 2. Piece_30S_Small_Subunit
# -------------------------------------------------------------------------
print("\n[*] [2/7] Generating Piece_30S_Small_Subunit...")
t0 = time.time()
sel_30s = "chainID A B C D E F G H I J K L M N O P Q R S T U"
mol_30s = mn.entities.Molecule(universe, name="Piece_30S_Small_Subunit")
mol_30s.add_style(
    style="cartoon",
    selection=sel_30s,
    color=(0.33, 0.45, 0.55, 1.0) # Slate blue #53738C
)
bpy.context.view_layer.objects.active = mol_30s.object
mol_30s.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_30s.object)

# Decimate to WebGL budget (0.35 ratio)
mod_30s = mol_30s.object.modifiers.new(name="Decimate_30S", type='DECIMATE')
mod_30s.ratio = 0.35
bpy.ops.object.modifier_apply(modifier="Decimate_30S")

mat_30s = create_pbr_material("Mat_30S_SlateBlue", (0.33, 0.45, 0.55, 1.0), roughness=0.52, metalness=0.05)
mol_30s.object.data.materials.clear()
mol_30s.object.data.materials.append(mat_30s)

print(f"[+] Piece_30S ready in {time.time() - t0:.2f}s: {len(mol_30s.object.data.vertices)} verts, {len(mol_30s.object.data.polygons)} polys")
pieces.append(mol_30s.object)

# -------------------------------------------------------------------------
# 3. Piece_mRNA_Strand
# -------------------------------------------------------------------------
print("\n[*] [3/7] Generating Piece_mRNA_Strand...")
t0 = time.time()
mol_mrna = mn.entities.Molecule(universe, name="Piece_mRNA_Strand")
mol_mrna.add_style(
    style="cartoon",
    selection="chainID X",
    color=(0.73, 0.31, 0.23, 1.0) # Terracotta coral #BA4E3B
)
bpy.context.view_layer.objects.active = mol_mrna.object
mol_mrna.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_mrna.object)

mat_mrna = create_pbr_material("Mat_mRNA_Terracotta", (0.73, 0.31, 0.23, 1.0), roughness=0.40, metalness=0.08)
mol_mrna.object.data.materials.clear()
mol_mrna.object.data.materials.append(mat_mrna)

print(f"[+] Piece_mRNA ready in {time.time() - t0:.2f}s: {len(mol_mrna.object.data.vertices)} verts, {len(mol_mrna.object.data.polygons)} polys")
pieces.append(mol_mrna.object)

# -------------------------------------------------------------------------
# 4. Piece_tRNA_A_Site
# -------------------------------------------------------------------------
print("\n[*] [4/7] Generating Piece_tRNA_A_Site...")
t0 = time.time()
mol_trna_a = mn.entities.Molecule(universe, name="Piece_tRNA_A_Site")
mol_trna_a.add_style(
    style="cartoon",
    selection="chainID Y",
    color=(0.56, 0.35, 0.56, 1.0) # Jewel violet #8E5A8E
)
bpy.context.view_layer.objects.active = mol_trna_a.object
mol_trna_a.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_trna_a.object)

mat_trna_a = create_pbr_material("Mat_tRNA_A_Violet", (0.56, 0.35, 0.56, 1.0), roughness=0.35, metalness=0.08)
mol_trna_a.object.data.materials.clear()
mol_trna_a.object.data.materials.append(mat_trna_a)

print(f"[+] Piece_tRNA_A ready in {time.time() - t0:.2f}s: {len(mol_trna_a.object.data.vertices)} verts, {len(mol_trna_a.object.data.polygons)} polys")
pieces.append(mol_trna_a.object)

# -------------------------------------------------------------------------
# 5. Piece_tRNA_P_Site
# -------------------------------------------------------------------------
print("\n[*] [5/7] Generating Piece_tRNA_P_Site...")
t0 = time.time()
mol_trna_p = mn.entities.Molecule(universe, name="Piece_tRNA_P_Site")
mol_trna_p.add_style(
    style="cartoon",
    selection="chainID Z",
    color=(0.21, 0.56, 0.55, 1.0) # Jade teal #368F8B
)
bpy.context.view_layer.objects.active = mol_trna_p.object
mol_trna_p.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_trna_p.object)

mat_trna_p = create_pbr_material("Mat_tRNA_P_Teal", (0.21, 0.56, 0.55, 1.0), roughness=0.35, metalness=0.08)
mol_trna_p.object.data.materials.clear()
mol_trna_p.object.data.materials.append(mat_trna_p)

print(f"[+] Piece_tRNA_P ready in {time.time() - t0:.2f}s: {len(mol_trna_p.object.data.vertices)} verts, {len(mol_trna_p.object.data.polygons)} polys")
pieces.append(mol_trna_p.object)

# -------------------------------------------------------------------------
# 6. Piece_tRNA_E_Site (Full cloverleaf aligned to Chain 5 CCA pocket)
# -------------------------------------------------------------------------
print("\n[*] [6/7] Generating Piece_tRNA_E_Site (Kabsch aligned to Chain 5)...")
t0 = time.time()

# Compute Kabsch rigid transformation
c5 = universe.select_atoms("chainID 5 and (resname C or resname A)")
cZ_term = universe.select_atoms("chainID Z and (resid 75 or resid 76)")
atoms_5 = []
atoms_Z = []
for res_id in [75, 76]:
    r5 = c5.select_atoms(f"resid {res_id}")
    rZ = cZ_term.select_atoms(f"resid {res_id}")
    for name in sorted(list(set(r5.names).intersection(set(rZ.names)))):
        a5 = r5.select_atoms(f"name {name}")[0]
        aZ = rZ.select_atoms(f"name {name}")[0]
        atoms_5.append(a5.position)
        atoms_Z.append(aZ.position)

P = np.array(atoms_Z)
Q = np.array(atoms_5)
centroid_P = P.mean(axis=0)
centroid_Q = Q.mean(axis=0)
P_centered = P - centroid_P
Q_centered = Q - centroid_Q
H = P_centered.T @ Q_centered
U, S, Vt = np.linalg.svd(H)
R = Vt.T @ U.T
if np.linalg.det(R) < 0:
    Vt[-1, :] *= -1
    R = Vt.T @ U.T

mol_trna_e = mn.entities.Molecule(universe, name="Piece_tRNA_E_Site")
mol_trna_e.add_style(
    style="cartoon",
    selection="chainID Z",
    color=(0.65, 0.54, 0.62, 1.0) # Muted mauve #A58A9E
)
bpy.context.view_layer.objects.active = mol_trna_e.object
mol_trna_e.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_trna_e.object)

# Apply transform to vertices
cP_nm = centroid_P / 10.0
cQ_nm = centroid_Q / 10.0
mesh_e = mol_trna_e.object.data
for v in mesh_e.vertices:
    vec = np.array([v.co.x, v.co.y, v.co.z])
    vec_aligned = (vec - cP_nm) @ R.T + cQ_nm
    v.co.x = vec_aligned[0]
    v.co.y = vec_aligned[1]
    v.co.z = vec_aligned[2]
mesh_e.update()

mat_trna_e = create_pbr_material("Mat_tRNA_E_Mauve", (0.65, 0.54, 0.62, 1.0), roughness=0.35, metalness=0.08)
mol_trna_e.object.data.materials.clear()
mol_trna_e.object.data.materials.append(mat_trna_e)

print(f"[+] Piece_tRNA_E ready in {time.time() - t0:.2f}s: {len(mesh_e.vertices)} verts, {len(mesh_e.polygons)} polys")
pieces.append(mol_trna_e.object)

# -------------------------------------------------------------------------
# 7. Piece_PTC_Active_Site (Domain V 23S rRNA A2451 & C2452)
# -------------------------------------------------------------------------
print("\n[*] [7/7] Generating Piece_PTC_Active_Site...")
t0 = time.time()
mol_ptc = mn.entities.Molecule(universe, name="Piece_PTC_Active_Site")
mol_ptc.add_style(
    style="ball_and_stick",
    selection="chainID a and (resid 2451 or resid 2452)",
    color=(1.0, 0.72, 0.01, 1.0) # Golden amber #FFB703
)
bpy.context.view_layer.objects.active = mol_ptc.object
mol_ptc.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_ptc.object)

mat_ptc = create_pbr_material("Mat_PTC_Amber", (1.0, 0.72, 0.01, 1.0), roughness=0.20, metalness=0.15, emissive=(1.0, 0.65, 0.0), emissive_strength=0.8)
mol_ptc.object.data.materials.clear()
mol_ptc.object.data.materials.append(mat_ptc)

print(f"[+] Piece_PTC ready in {time.time() - t0:.2f}s: {len(mol_ptc.object.data.vertices)} verts, {len(mol_ptc.object.data.polygons)} polys")
pieces.append(mol_ptc.object)

# -------------------------------------------------------------------------
# Center All Pieces Around Global Origin (0, 0, 0)
# -------------------------------------------------------------------------
print(f"\n[*] Centering all {len(pieces)} pieces by subtracting global COM: {global_com}...")
for obj in pieces:
    mesh = obj.data
    for v in mesh.vertices:
        v.co.x -= global_com[0]
        v.co.y -= global_com[1]
        v.co.z -= global_com[2]
    mesh.update()

# Remove initial unstyled molecule object if present
if mol.object.name in bpy.data.objects:
    bpy.data.objects.remove(mol.object, do_unlink=True)

# -------------------------------------------------------------------------
# Create Master Assembly Parent Empty
# -------------------------------------------------------------------------
root_empty = bpy.data.objects.new("Ribosome_70S_Complex", None)
root_empty.empty_display_type = 'ARROWS'
root_empty.empty_display_size = 5.0
bpy.context.scene.collection.objects.link(root_empty)

for obj in pieces:
    obj.parent = root_empty

# Select root and all children for GLB export
bpy.ops.object.select_all(action='DESELECT')
root_empty.select_set(True)
for obj in pieces:
    obj.select_set(True)
bpy.context.view_layer.objects.active = root_empty

# Export target paths
project_root = Path(__file__).resolve().parent.parent
out_client = project_root / "client" / "public" / "models" / "7K00_assembled_pieces.glb"
out_models = project_root / "models" / "7K00_assembled_pieces.glb"

out_client.parent.mkdir(parents=True, exist_ok=True)
out_models.parent.mkdir(parents=True, exist_ok=True)

print(f"\n[*] Exporting assembled GLB to:\n    {out_client}\n    {out_models}")
t_exp = time.time()
bpy.ops.export_scene.gltf(
    filepath=str(out_client),
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_attributes=True,
    export_all_vertex_colors=True,
    export_materials='EXPORT'
)

import shutil
shutil.copyfile(str(out_client), str(out_models))

size_mb = out_client.stat().st_size / (1024 * 1024)
print(f"[+] Successfully exported GLB in {time.time() - t_exp:.2f}s! File size: {size_mb:.2f} MB")
print(f"[+] Total assembly pipeline finished in {time.time() - t_start:.2f}s!")
