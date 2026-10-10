"""
generate_7k00_assembled_pieces.py

Programmatically generates an authentic, multi-piece atomic & secondary-structure 3D model
of the bacterial 70S translating ribosome holoenzyme from RCSB Cryo-EM structure PDB: 7K00
(Watson et al., 2020 at 2.4 Angstrom resolution).

Builds 9 distinct macromolecular pieces matching The Biology Primer (Jason Walker) Atomic Model:
1. Piece_50S_rRNA (23S + 5S rRNA double helices WITH BASE RUNGS) - Deep Magenta / Crimson (#9E2A5B)
2. Piece_50S_Proteins (34 Ribosomal Proteins uL1–bL36 alpha/beta ribbons) - Forest Green (#2D6A4F)
3. Piece_30S_rRNA (16S rRNA double helices WITH BASE RUNGS) - Vibrant Cyan / Deep Teal (#1A8594)
4. Piece_30S_Proteins (21 Ribosomal Proteins uS2–bS21 alpha/beta ribbons) - Golden Olive (#9A9E32)
5. Piece_mRNA_Strand (Chain X polyribonucleotide with codon plates) - Terracotta Coral Red (#BA4E3B)
6. Piece_tRNA_A_Site (Chain Y Val-tRNA cloverleaf with base rungs) - Golden Amber (#E9C46A)
7. Piece_tRNA_P_Site (Chain Z fMet-tRNA cloverleaf with base rungs) - Bright Emerald Green (#52B788)
8. Piece_tRNA_E_Site (Full cloverleaf aligned to Chain 5 CCA pocket) - Peach / Salmon Pink (#E07A5F)
9. Piece_PTC_Active_Site (Domain V 23S rRNA catalytic sphere cluster) - Glowing Golden Amber (#FFB703)

Realizes all Geometry Node instances before mesh conversion so every nucleotide base plate
and secondary structure helix is fully preserved in the exported binary GLB.
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

def add_realize_instances(obj):
    """
    Inserts a GeometryNodeRealizeInstances node right before Group Output
    so that base plates, alpha helices, and instanced spheres are realized into mesh vertices.
    """
    mod = obj.modifiers.get('Molecular Nodes')
    if not mod or not mod.node_group:
        return
    ng = mod.node_group
    out_node = next((n for n in ng.nodes if n.type == 'GROUP_OUTPUT'), None)
    if not out_node:
        return
    realize_node = ng.nodes.new('GeometryNodeRealizeInstances')
    geo_socket_in = out_node.inputs[0]
    if geo_socket_in.links:
        prev_socket = geo_socket_in.links[0].from_socket
        ng.links.new(prev_socket, realize_node.inputs['Geometry'])
        ng.links.new(realize_node.outputs['Geometry'], geo_socket_in)

def clean_mesh_origin_artifacts(obj):
    """Removes single rogue vertices situated at exact origin (0, 0, 0) without trimming actual biological structure"""
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    verts_to_delete = [v for v in bm.verts if v.co.length < 0.05]
    if verts_to_delete:
        bmesh.ops.delete(bm, geom=verts_to_delete, context='VERTS')
        bm.to_mesh(obj.data)
    bm.free()
    obj.data.update()

pieces = []

# -------------------------------------------------------------------------
# 1. Piece_50S_rRNA (23S + 5S Ribosomal RNA Core) - Magenta / Crimson
# -------------------------------------------------------------------------
print("\n[*] [1/9] Generating Piece_50S_rRNA (23S + 5S rRNA with realized base rungs)...")
t0 = time.time()
sel_50s_rrna = "chainID a b"
mol_50s_rrna = mn.entities.Molecule(universe, name="Piece_50S_rRNA")
mol_50s_rrna.add_style(
    style="cartoon",
    selection=sel_50s_rrna,
    color=(0.62, 0.16, 0.36, 1.0) # Crimson / Magenta #9E2A5B
)
add_realize_instances(mol_50s_rrna.object)
bpy.context.view_layer.objects.active = mol_50s_rrna.object
mol_50s_rrna.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_50s_rrna.object)

# Decimate to optimal WebGL budget
mod_50s_rrna = mol_50s_rrna.object.modifiers.new(name="Decimate_50S_rRNA", type='DECIMATE')
mod_50s_rrna.ratio = 0.35
bpy.ops.object.modifier_apply(modifier="Decimate_50S_rRNA")

mat_50s_rrna = create_pbr_material("Mat_50S_rRNA_Crimson", (0.62, 0.16, 0.36, 1.0), roughness=0.48, metalness=0.04)
mol_50s_rrna.object.data.materials.clear()
mol_50s_rrna.object.data.materials.append(mat_50s_rrna)

print(f"[+] Piece_50S_rRNA ready in {time.time() - t0:.2f}s: {len(mol_50s_rrna.object.data.vertices)} verts, {len(mol_50s_rrna.object.data.polygons)} polys")
pieces.append(mol_50s_rrna.object)

# -------------------------------------------------------------------------
# 2. Piece_50S_Proteins (34 Ribosomal Proteins) - Forest / Olive Green
# -------------------------------------------------------------------------
print("\n[*] [2/9] Generating Piece_50S_Proteins (uL1–bL36 alpha/beta ribbons)...")
t0 = time.time()
sel_50s_prot = "chainID c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4"
mol_50s_prot = mn.entities.Molecule(universe, name="Piece_50S_Proteins")
mol_50s_prot.add_style(
    style="cartoon",
    selection=sel_50s_prot,
    color=(0.18, 0.42, 0.31, 1.0) # Forest / Olive Green #2D6A4F
)
add_realize_instances(mol_50s_prot.object)
bpy.context.view_layer.objects.active = mol_50s_prot.object
mol_50s_prot.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_50s_prot.object)

mod_50s_prot = mol_50s_prot.object.modifiers.new(name="Decimate_50S_Proteins", type='DECIMATE')
mod_50s_prot.ratio = 0.40
bpy.ops.object.modifier_apply(modifier="Decimate_50S_Proteins")

mat_50s_prot = create_pbr_material("Mat_50S_Proteins_Forest", (0.18, 0.42, 0.31, 1.0), roughness=0.52, metalness=0.04)
mol_50s_prot.object.data.materials.clear()
mol_50s_prot.object.data.materials.append(mat_50s_prot)

print(f"[+] Piece_50S_Proteins ready in {time.time() - t0:.2f}s: {len(mol_50s_prot.object.data.vertices)} verts, {len(mol_50s_prot.object.data.polygons)} polys")
pieces.append(mol_50s_prot.object)

# -------------------------------------------------------------------------
# 3. Piece_30S_rRNA (16S Ribosomal RNA Core) - Vibrant Cyan / Deep Teal
# -------------------------------------------------------------------------
print("\n[*] [3/9] Generating Piece_30S_rRNA (16S rRNA with realized base rungs)...")
t0 = time.time()
sel_30s_rrna = "chainID A"
mol_30s_rrna = mn.entities.Molecule(universe, name="Piece_30S_rRNA")
mol_30s_rrna.add_style(
    style="cartoon",
    selection=sel_30s_rrna,
    color=(0.10, 0.52, 0.58, 1.0) # Cyan / Deep Teal #1A8594
)
add_realize_instances(mol_30s_rrna.object)
bpy.context.view_layer.objects.active = mol_30s_rrna.object
mol_30s_rrna.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_30s_rrna.object)

mod_30s_rrna = mol_30s_rrna.object.modifiers.new(name="Decimate_30S_rRNA", type='DECIMATE')
mod_30s_rrna.ratio = 0.35
bpy.ops.object.modifier_apply(modifier="Decimate_30S_rRNA")

mat_30s_rrna = create_pbr_material("Mat_30S_rRNA_Teal", (0.10, 0.52, 0.58, 1.0), roughness=0.48, metalness=0.04)
mol_30s_rrna.object.data.materials.clear()
mol_30s_rrna.object.data.materials.append(mat_30s_rrna)

print(f"[+] Piece_30S_rRNA ready in {time.time() - t0:.2f}s: {len(mol_30s_rrna.object.data.vertices)} verts, {len(mol_30s_rrna.object.data.polygons)} polys")
pieces.append(mol_30s_rrna.object)

# -------------------------------------------------------------------------
# 4. Piece_30S_Proteins (21 Ribosomal Proteins) - Golden Olive / Mustard
# -------------------------------------------------------------------------
print("\n[*] [4/9] Generating Piece_30S_Proteins (uS2–bS21 alpha/beta ribbons)...")
t0 = time.time()
sel_30s_prot = "chainID B C D E F G H I J K L M N O P Q R S T U"
mol_30s_prot = mn.entities.Molecule(universe, name="Piece_30S_Proteins")
mol_30s_prot.add_style(
    style="cartoon",
    selection=sel_30s_prot,
    color=(0.60, 0.62, 0.20, 1.0) # Golden Olive / Mustard #9A9E32
)
add_realize_instances(mol_30s_prot.object)
bpy.context.view_layer.objects.active = mol_30s_prot.object
mol_30s_prot.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_30s_prot.object)

mod_30s_prot = mol_30s_prot.object.modifiers.new(name="Decimate_30S_Proteins", type='DECIMATE')
mod_30s_prot.ratio = 0.40
bpy.ops.object.modifier_apply(modifier="Decimate_30S_Proteins")

mat_30s_prot = create_pbr_material("Mat_30S_Proteins_Mustard", (0.60, 0.62, 0.20, 1.0), roughness=0.52, metalness=0.04)
mol_30s_prot.object.data.materials.clear()
mol_30s_prot.object.data.materials.append(mat_30s_prot)

print(f"[+] Piece_30S_Proteins ready in {time.time() - t0:.2f}s: {len(mol_30s_prot.object.data.vertices)} verts, {len(mol_30s_prot.object.data.polygons)} polys")
pieces.append(mol_30s_prot.object)

# -------------------------------------------------------------------------
# 5. Piece_mRNA_Strand (Chain X Polyribonucleotide) - Terracotta Coral
# -------------------------------------------------------------------------
print("\n[*] [5/9] Generating Piece_mRNA_Strand...")
t0 = time.time()
mol_mrna = mn.entities.Molecule(universe, name="Piece_mRNA_Strand")
mol_mrna.add_style(
    style="cartoon",
    selection="chainID X",
    color=(0.73, 0.31, 0.23, 1.0) # Terracotta coral #BA4E3B
)
add_realize_instances(mol_mrna.object)
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
# 6. Piece_tRNA_A_Site (Chain Y Val-tRNA) - Golden Amber / Mustard
# -------------------------------------------------------------------------
print("\n[*] [6/9] Generating Piece_tRNA_A_Site...")
t0 = time.time()
mol_trna_a = mn.entities.Molecule(universe, name="Piece_tRNA_A_Site")
mol_trna_a.add_style(
    style="cartoon",
    selection="chainID Y",
    color=(0.91, 0.77, 0.42, 1.0) # Golden Amber / Mustard #E9C46A
)
add_realize_instances(mol_trna_a.object)
bpy.context.view_layer.objects.active = mol_trna_a.object
mol_trna_a.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_trna_a.object)

mat_trna_a = create_pbr_material("Mat_tRNA_A_Amber", (0.91, 0.77, 0.42, 1.0), roughness=0.35, metalness=0.08)
mol_trna_a.object.data.materials.clear()
mol_trna_a.object.data.materials.append(mat_trna_a)

print(f"[+] Piece_tRNA_A ready in {time.time() - t0:.2f}s: {len(mol_trna_a.object.data.vertices)} verts, {len(mol_trna_a.object.data.polygons)} polys")
pieces.append(mol_trna_a.object)

# -------------------------------------------------------------------------
# 7. Piece_tRNA_P_Site (Chain Z fMet-tRNA) - Bright Emerald / Lime Green
# -------------------------------------------------------------------------
print("\n[*] [7/9] Generating Piece_tRNA_P_Site...")
t0 = time.time()
mol_trna_p = mn.entities.Molecule(universe, name="Piece_tRNA_P_Site")
mol_trna_p.add_style(
    style="cartoon",
    selection="chainID Z",
    color=(0.32, 0.72, 0.53, 1.0) # Bright Emerald / Lime Green #52B788
)
add_realize_instances(mol_trna_p.object)
bpy.context.view_layer.objects.active = mol_trna_p.object
mol_trna_p.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_trna_p.object)

mat_trna_p = create_pbr_material("Mat_tRNA_P_Green", (0.32, 0.72, 0.53, 1.0), roughness=0.35, metalness=0.08)
mol_trna_p.object.data.materials.clear()
mol_trna_p.object.data.materials.append(mat_trna_p)

print(f"[+] Piece_tRNA_P ready in {time.time() - t0:.2f}s: {len(mol_trna_p.object.data.vertices)} verts, {len(mol_trna_p.object.data.polygons)} polys")
pieces.append(mol_trna_p.object)

# -------------------------------------------------------------------------
# 8. Piece_tRNA_E_Site (Full cloverleaf aligned to Chain 5 CCA pocket) - Peach / Salmon Pink
# -------------------------------------------------------------------------
print("\n[*] [8/9] Generating Piece_tRNA_E_Site (Kabsch aligned to Chain 5)...")
t0 = time.time()

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
    color=(0.88, 0.48, 0.37, 1.0) # Peach / Salmon Pink #E07A5F
)
add_realize_instances(mol_trna_e.object)
bpy.context.view_layer.objects.active = mol_trna_e.object
mol_trna_e.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_trna_e.object)

# Apply Kabsch transform to vertices
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

mat_trna_e = create_pbr_material("Mat_tRNA_E_Peach", (0.88, 0.48, 0.37, 1.0), roughness=0.35, metalness=0.08)
mol_trna_e.object.data.materials.clear()
mol_trna_e.object.data.materials.append(mat_trna_e)

print(f"[+] Piece_tRNA_E ready in {time.time() - t0:.2f}s: {len(mesh_e.vertices)} verts, {len(mesh_e.polygons)} polys")
pieces.append(mol_trna_e.object)

# -------------------------------------------------------------------------
# 9. Piece_PTC_Active_Site (Domain V 23S rRNA Catalytic Core) - Glowing Golden Amber
# -------------------------------------------------------------------------
print("\n[*] [9/9] Generating Piece_PTC_Active_Site (Domain V Catalytic Pocket Spheres)...")
t0 = time.time()
ptc_selection = "chainID a and (resid 2055 to 2063 or resid 2447 to 2455 or resid 2496 to 2507 or resid 2580 to 2588)"
mol_ptc = mn.entities.Molecule(universe, name="Piece_PTC_Active_Site")
mol_ptc.add_style(
    style="spheres",
    selection=ptc_selection,
    color=(1.0, 0.72, 0.01, 1.0) # Golden amber #FFB703
)
add_realize_instances(mol_ptc.object)
bpy.context.view_layer.objects.active = mol_ptc.object
mol_ptc.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(mol_ptc.object)

# Decimate sphere cluster slightly to optimize vertex load
if len(mol_ptc.object.data.vertices) > 20000:
    mod_ptc = mol_ptc.object.modifiers.new(name="Decimate_PTC", type='DECIMATE')
    mod_ptc.ratio = 0.50
    bpy.ops.object.modifier_apply(modifier="Decimate_PTC")

mat_ptc = create_pbr_material(
    "Mat_PTC_Amber",
    (1.0, 0.72, 0.01, 1.0),
    roughness=0.22,
    metalness=0.12,
    emissive=(1.0, 0.65, 0.0),
    emissive_strength=0.85
)
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

# Save master .blend file to models
models_dir = project_root / "models"
models_dir.mkdir(parents=True, exist_ok=True)
blend_ribo = models_dir / "ribosome_70s_25nm.blend"
print(f"[*] Saving master Ribosome 70S .blend file to:\n    {blend_ribo}")
bpy.ops.wm.save_as_mainfile(filepath=str(blend_ribo))

if "--blend-only" in sys.argv:
    print(f"[+] Done! Master Ribosome .blend scene saved to {blend_ribo}")
    sys.exit(0)

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

size_mb = os.path.getsize(str(out_client)) / (1024 * 1024)
print(f"[+] Successfully exported GLB in {time.time() - t_exp:.2f}s ({size_mb:.2f} MB)")
print(f"[+] Total execution time: {time.time() - t_start:.2f}s")
