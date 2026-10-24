"""
generate_6rkw_assembled_pieces.py

Programmatically generates an authentic, multi-piece atomic & secondary-structure 3D model
of the bacterial F1F0-ATP Synthase rotary dynamo from RCSB Cryo-EM structure PDB: 6OQR / 6RKW
(Sobti et al., 2020 at 3.1 Angstrom resolution, 22 complete polypeptide subunits).

Builds 9 distinct macromolecular pieces matching The Biology Primer "Complete F1F0-ATP Synthase Holoenzyme" artwork:
1. Piece_ATP_Fo_C_Ring (Chains I, J, L, M, N, O, P, Q, R, S: c10-ring rotor) - Golden Yellow (#E5A93C)
2. Piece_ATP_Fo_A_Subunit (Chain a: transmembrane stator pathway) - Burnt Orange / Terracotta (#C85A32)
3. Piece_ATP_Peripheral_Stalk (Chains W, X, Y: b2, delta stator arm) - Royal Purple / Deep Violet (#6A0DAD)
4. Piece_ATP_Central_Rotor (Chains G, H: gamma, epsilon central rotor shaft) - Vivid Emerald / Jade Green (#06D6A0)
5. Piece_ATP_F1_Alpha (Chains A, B, C: 3x alpha regulatory subunits) - Soft Rose / Orchid Pink (#D45D8C)
6. Piece_ATP_F1_Beta (Chains D, E, F: 3x beta catalytic subunits) - Deep Crimson / Ruby Red (#9E1B46)
7. Piece_ATP_Asp61_Sites (80 atoms: c-ring essential carboxylates) - Luminous Cyan Spheres (#00F5D4)
8. Piece_ADP_Pi_Substrates (Reacting substrates cluster entering F1) - Soft Coral / Peach Spheres (#F28482)
9. Piece_ATP_Product (Synthesized ATP product cluster with golden halo) - Glowing Radiant Gold (#FFE066)

Exports to:
- client/public/models/6RKW_assembled_pieces.glb
- models/6RKW_assembled_pieces.glb
- models/atp_synthase_6rkw.blend
"""

import bpy
import bmesh
import os
import sys
import time
import shutil
import numpy as np
from pathlib import Path
from mathutils import Matrix, Vector

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
print("[*] Fetching 6OQR (Complete E. coli F1F0 ATP Synthase Cryo-EM structure)...")
mol = mn.entities.Molecule.fetch("6OQR", format=".bcif")
universe = mol.universe
print(f"[+] Loaded 6OQR universe: {len(universe.atoms)} atoms in {time.time() - t_start:.2f}s")

# Global center of mass (scaled to nm)
c_atoms = universe.select_atoms("chainID I J L M N O P Q R S")
c_com = c_atoms.center_of_mass() / 10.0
print(f"[*] c10-Ring Center of Mass: {c_com} nm")

# Calculate exact cylindrical symmetry axis of the c10-ring using PCA
coords = (c_atoms.positions / 10.0) - c_com
cov = np.cov(coords.T)
_, eigenvectors = np.linalg.eigh(cov)
cyl_axis = eigenvectors[:, 2] # Long axis of the c-ring cylinder pointing towards F1

# Step 1: Align c-ring cylindrical axis strictly to vertical +Z (0, 0, 1) in Blender
# (Blender exports +Z as GLTF +Y, so the turbine becomes strictly vertical in Three.js!)
v_from = cyl_axis / np.linalg.norm(cyl_axis)
v_to = np.array([0.0, 0.0, 1.0])
v = np.cross(v_from, v_to)
s = np.linalg.norm(v)
c_dot = np.dot(v_from, v_to)
vx = np.array([[0, -v[2], v[1]], [v[2], 0, -v[0]], [-v[1], v[0], 0]])
R_vertical = np.eye(3) + vx + (vx @ vx) * ((1 - c_dot) / (s**2))

# Step 2: Rotate around Z so that subunit a lies strictly on the right (+X side, Y = 0)
a_com_initial = R_vertical @ (universe.select_atoms("chainID a").center_of_mass() / 10.0 - c_com)
theta_a = np.arctan2(a_com_initial[1], a_com_initial[0])
c_th = np.cos(-theta_a)
s_th = np.sin(-theta_a)
Rz = np.array([
    [c_th, -s_th, 0.0],
    [s_th,  c_th, 0.0],
    [0.0,   0.0,  1.0]
])
R_final = Rz @ R_vertical
print("[+] Computed master alignment rotation matrix (c-ring vertical +Z, subunit a at +X)")

def create_pbr_material(name, base_color, roughness=0.38, metalness=0.08, emissive=(0,0,0), emissive_strength=0.0):
    mat = bpy.data.materials.new(name=name)
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
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    verts_to_delete = [v for v in bm.verts if v.co.length < 0.05]
    if verts_to_delete:
        bmesh.ops.delete(bm, geom=verts_to_delete, context='VERTS')
        bm.to_mesh(obj.data)
    bm.free()
    obj.data.update()

pieces = []

# Subunit configurations matching The Biology Primer Complete F1F0-ATP Synthase Artwork:
configs = [
    {
        "name": "Piece_ATP_Fo_C_Ring",
        "desc": "c10-Ring Translocating Rotor Barrel (Chains I–S)",
        "selection": "chainID I J L M N O P Q R S",
        "color": (0.90, 0.68, 0.22, 1.0), # Golden Yellow #E5A93C
        "mat_name": "Mat_ATP_CRing_Gold",
        "style": "cartoon",
        "decimate": 0.50,
        "roughness": 0.35,
        "metalness": 0.10,
        "mirror_x": False
    },
    {
        "name": "Piece_ATP_Fo_A_Subunit",
        "desc": "Subunit a Transmembrane Stator Pathway (Chain a)",
        "selection": "chainID a",
        "color": (0.82, 0.35, 0.18, 1.0), # Burnt Orange / Terracotta #C85A32
        "mat_name": "Mat_ATP_ASubunit_Terracotta",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.38,
        "metalness": 0.08,
        "mirror_x": False
    },
    {
        "name": "Piece_ATP_Peripheral_Stalk",
        "desc": "Peripheral Stalk b2-delta Stator Arm (Chains W, X, Y)",
        "selection": "chainID W X Y",
        "color": (0.42, 0.12, 0.68, 1.0), # Royal Purple / Violet #6A0DAD
        "mat_name": "Mat_ATP_Stalk_Purple",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.40,
        "metalness": 0.08,
        "mirror_x": True # Anchors on left in membrane, arches over F1 crown!
    },
    {
        "name": "Piece_ATP_Central_Rotor",
        "desc": "Central Shaft gamma-epsilon Rotor (Chains G, H)",
        "selection": "chainID G H",
        "color": (0.04, 0.84, 0.63, 1.0), # Vivid Emerald / Jade Green #06D6A0
        "mat_name": "Mat_ATP_Rotor_Emerald",
        "style": "cartoon",
        "decimate": 0.50,
        "roughness": 0.32,
        "metalness": 0.10,
        "mirror_x": False
    },
    {
        "name": "Piece_ATP_F1_Alpha",
        "desc": "F1 Alpha Regulatory Subunits (Chains A, B, C)",
        "selection": "chainID A B C",
        "color": (0.83, 0.36, 0.55, 1.0), # Soft Rose / Orchid Pink #D45D8C
        "mat_name": "Mat_ATP_Alpha_Rose",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.38,
        "metalness": 0.08,
        "mirror_x": False
    },
    {
        "name": "Piece_ATP_F1_Beta",
        "desc": "F1 Beta Catalytic Subunits (Chains D, E, F)",
        "selection": "chainID D E F",
        "color": (0.62, 0.08, 0.25, 1.0), # Deep Crimson / Ruby Red #9E1B46
        "mat_name": "Mat_ATP_Beta_Crimson",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.35,
        "metalness": 0.12,
        "mirror_x": False
    },
    {
        "name": "Piece_ATP_Asp61_Sites",
        "desc": "c-Ring Essential Asp61 Carboxylate Protonation Sites (80 atoms)",
        "selection": "chainID I J L M N O P Q R S and resid 61",
        "color": (0.0, 0.96, 0.83, 1.0), # Luminous Cyan #00F5D4
        "mat_name": "Mat_ATP_Asp61_Cyan",
        "style": "spheres",
        "decimate": 1.0,
        "roughness": 0.20,
        "metalness": 0.12,
        "emissive": (0.0, 0.85, 0.70),
        "emissive_strength": 0.90,
        "mirror_x": False
    }
]

for idx, cfg in enumerate(configs, 1):
    print(f"\n[*] [{idx}/{len(configs)}] Generating {cfg['name']} ({cfg['desc']})...")
    t0 = time.time()
    piece_mol = mn.entities.Molecule(universe, name=cfg['name'])
    piece_mol.add_style(
        style=cfg["style"],
        selection=cfg['selection'],
        color=cfg['color']
    )
    add_realize_instances(piece_mol.object)
    bpy.context.view_layer.objects.active = piece_mol.object
    piece_mol.object.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(piece_mol.object)
    
    # Decimate to WebGL budget
    if cfg['decimate'] < 1.0:
        mod = piece_mol.object.modifiers.new(name=f"Decimate_{cfg['name']}", type='DECIMATE')
        mod.ratio = cfg['decimate']
        bpy.ops.object.modifier_apply(modifier=f"Decimate_{cfg['name']}")
    
    mat = create_pbr_material(
        cfg['mat_name'],
        cfg['color'],
        roughness=cfg['roughness'],
        metalness=cfg['metalness'],
        emissive=cfg.get('emissive', (0, 0, 0)),
        emissive_strength=cfg.get('emissive_strength', 0.0)
    )
    piece_mol.object.data.materials.clear()
    piece_mol.object.data.materials.append(mat)
    
    # Transform vertices into canonical upright reference alignment
    mesh = piece_mol.object.data
    for v in mesh.vertices:
        vec = np.array([v.co.x - c_com[0], v.co.y - c_com[1], v.co.z - c_com[2]])
        vec_rot = R_final @ vec
        if cfg.get("mirror_x", False):
            vec_rot[0] = -vec_rot[0] # Mirror stalk to left side of the membrane!
        v.co.x = vec_rot[0]
        v.co.y = vec_rot[1]
        v.co.z = vec_rot[2]
    mesh.update()
    
    if cfg.get("mirror_x", False):
        bpy.context.view_layer.objects.active = piece_mol.object
        bpy.ops.object.mode_set(mode='EDIT')
        bpy.ops.mesh.select_all(action='SELECT')
        bpy.ops.mesh.normals_make_consistent(inside=False)
        bpy.ops.object.mode_set(mode='OBJECT')
    
    verts = len(piece_mol.object.data.vertices)
    polys = len(piece_mol.object.data.polygons)
    print(f"[+] {cfg['name']} ready in {time.time() - t0:.2f}s: {verts} verts, {polys} polys")
    pieces.append(piece_mol.object)

# -------------------------------------------------------------------------
# 8. Piece_ADP_Pi_Substrates (Entering F1 catalytic cleft at top right)
# -------------------------------------------------------------------------
print("\n[*] [8/9] Generating Piece_ADP_Pi_Substrates (Soft Coral/Peach Spheres)...")
t0 = time.time()
bm_adp = bmesh.new()
adp_pts = [
    Vector((3.2, 0.4, 17.5)),
    Vector((3.6, 0.2, 17.8)),
    Vector((3.4, 0.5, 18.2)),
    Vector((3.8, 0.7, 18.0)),
    Vector((4.2, 0.3, 17.6)),
    Vector((4.0, 0.6, 18.3))
]
for p in adp_pts:
    bmesh.ops.create_icosphere(bm_adp, subdivisions=2, radius=0.28, matrix=Matrix.Translation(p))
mesh_adp = bpy.data.meshes.new("Piece_ADP_Pi_Substrates")
bm_adp.to_mesh(mesh_adp)
bm_adp.free()

obj_adp = bpy.data.objects.new("Piece_ADP_Pi_Substrates", mesh_adp)
bpy.context.scene.collection.objects.link(obj_adp)
mat_adp = create_pbr_material("Mat_ADP_Substrates", (0.95, 0.55, 0.52, 1.0), roughness=0.30, metalness=0.08)
obj_adp.data.materials.append(mat_adp)
pieces.append(obj_adp)
print(f"[+] Piece_ADP_Pi_Substrates ready in {time.time() - t0:.2f}s")

# -------------------------------------------------------------------------
# 9. Piece_ATP_Product (Synthesized ATP product cluster with golden halo)
# -------------------------------------------------------------------------
print("\n[*] [9/9] Generating Piece_ATP_Product (Radiant Gold Spheres)...")
t0 = time.time()
bm_atp = bmesh.new()
atp_pts = [
    Vector((5.2, 1.0, 16.0)),
    Vector((5.6, 0.8, 16.3)),
    Vector((5.4, 1.2, 16.7)),
    Vector((5.8, 1.4, 16.5)),
    Vector((6.1, 1.0, 15.9)),
    Vector((5.0, 0.8, 15.6)),
    Vector((6.3, 1.2, 16.4))
]
for p in atp_pts:
    bmesh.ops.create_icosphere(bm_atp, subdivisions=2, radius=0.30, matrix=Matrix.Translation(p))
mesh_atp = bpy.data.meshes.new("Piece_ATP_Product")
bm_atp.to_mesh(mesh_atp)
bm_atp.free()

obj_atp = bpy.data.objects.new("Piece_ATP_Product", mesh_atp)
bpy.context.scene.collection.objects.link(obj_atp)
mat_atp = create_pbr_material(
    "Mat_ATP_Product",
    (1.0, 0.88, 0.30, 1.0),
    roughness=0.18,
    metalness=0.15,
    emissive=(1.0, 0.75, 0.10),
    emissive_strength=1.20
)
obj_atp.data.materials.append(mat_atp)
pieces.append(obj_atp)
print(f"[+] Piece_ATP_Product ready in {time.time() - t0:.2f}s")

# Remove initial unstyled molecule object if present
if mol.object.name in bpy.data.objects:
    bpy.data.objects.remove(mol.object, do_unlink=True)

# Create Master Assembly Parent Empty
root_empty = bpy.data.objects.new("ATPSynthase_6RKW_Complex", None)
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
models_dir = project_root / "models"
models_dir.mkdir(parents=True, exist_ok=True)
blend_path = models_dir / "atp_synthase_6rkw.blend"
print(f"[*] Saving master ATP Synthase .blend file to:\n    {blend_path}")
bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))

out_client = project_root / "client" / "public" / "models" / "6RKW_assembled_pieces.glb"
out_models = project_root / "models" / "6RKW_assembled_pieces.glb"

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

shutil.copyfile(str(out_client), str(out_models))

size_mb = os.path.getsize(str(out_client)) / (1024 * 1024)
print(f"[+] Successfully exported GLB in {time.time() - t_exp:.2f}s ({size_mb:.2f} MB)")
print(f"[+] Total execution time: {time.time() - t_start:.2f}s")
