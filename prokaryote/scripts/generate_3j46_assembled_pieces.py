"""
generate_3j46_assembled_pieces.py

Programmatically generates an authentic, multi-piece atomic & secondary-structure 3D model
of the bacterial SecYEG Protein Translocon & SecA ATPase Motor from RCSB structures PDB: 6ITC & 3J46.
(6ITC: 3.45 Å Cryo-EM structure of substrate-engaged SecA-SecYEG complex; 3J46: Cryo-EM structure of E. coli SecYEG).

Decomposed into 6 authentic macromolecular pieces adhering to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md:
1. Piece_SecYEG_SecY: SecY 10-helix hour-glass pore core (excluding lateral gate) - Royal Blue (#3A86FF)
2. Piece_SecYEG_Lateral_Gate: TM2b/3 (res 65-115) & TM7/8 (res 265-325) parting helices - Luminous Cyan (#00F5D4)
3. Piece_SecYEG_SecE: V-shaped stabilizing clamp helix (Chain E) - Golden Amber (#FFB703)
4. Piece_SecYEG_SecG: Peripheral inverted-topology escort subunit (Chain G from 3J46) - Luminous Jade (#06D6A0)
5. Piece_SecYEG_SecA_Motor: Cytosolic ATPase motor dimer/monomer (Chain A, 768 aa) - Lilac Purple (#9D4EDD)
6. Piece_SecYEG_Translocating_Preprotein: Preprotein peptide loop threaded through pore (Chain B) - Luminous Gold (#FFE066)

Exports to:
- client/public/models/3J46_assembled_pieces.glb
- models/3J46_assembled_pieces.glb
- models/secyeg_3j46.blend
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
print("[*] Fetching 6ITC (Active Substrate-Engaged SecA-SecYEG complex)...")
mol6 = mn.entities.Molecule.fetch("6ITC", format=".bcif")
u6 = mol6.universe
print(f"[+] Loaded 6ITC universe: {len(u6.atoms)} atoms in {time.time() - t_start:.2f}s")

t1 = time.time()
print("[*] Fetching 3J46 (E. coli SecYEG for authentic SecG coordinates)...")
mol3 = mn.entities.Molecule.fetch("3J46", format=".bcif")
u3 = mol3.universe
print(f"[+] Loaded 3J46 universe: {len(u3.atoms)} atoms in {time.time() - t1:.2f}s")

# -------------------------------------------------------------------------
# 1. Structural Superposition: Align 3J46 SecY onto 6ITC SecY to position SecG
# -------------------------------------------------------------------------
print("[*] Computing SecY structural superposition between 6ITC and 3J46...")
ca_6itc = u6.select_atoms("chainID Y and name CA")
ca_3j46 = u3.select_atoms("chainID y and name CA")

# Extract coordinates in nm (Blender scale is nm: 1 Blender unit = 1 nm = 10 Å)
coords_6 = ca_6itc.positions / 10.0
coords_3 = ca_3j46.positions / 10.0

# Take matching lengths for centroid alignment and Kabsch algorithm
n_match = min(len(coords_6), len(coords_3))
p1 = coords_6[:n_match]
p2 = coords_3[:n_match]

c1 = np.mean(p1, axis=0)
c2 = np.mean(p2, axis=0)

q1 = p1 - c1
q2 = p2 - c2

H = q2.T @ q1
U, S, Vt = np.linalg.svd(H)
d = np.linalg.det(Vt.T @ U.T)
diag = np.eye(3)
diag[2, 2] = d
R_align_3to6 = Vt.T @ diag @ U.T
t_align_3to6 = c1 - R_align_3to6 @ c2
print(f"[+] Superposition matrix computed. Trans={t_align_3to6}")

# -------------------------------------------------------------------------
# 2. Master Membrane Alignment Frame (PCA on SecY)
# -------------------------------------------------------------------------
secy_atoms = u6.select_atoms("chainID Y")
seca_atoms = u6.select_atoms("chainID A")

secy_com = secy_atoms.center_of_mass() / 10.0 # nm
seca_com = seca_atoms.center_of_mass() / 10.0 # nm

# Center coordinates at SecY center
secy_coords = (secy_atoms.positions / 10.0) - secy_com
cov_y = np.cov(secy_coords.T)
eigenvalues, eigenvectors = np.linalg.eigh(cov_y)

# Eigenvector 2 is the transmembrane channel conduit (connecting Periplasm to Cytoplasm)
v_norm = eigenvectors[:, 2]
# Normal should point towards SecA motor (Cytosol = +Z in Blender)
if np.dot(v_norm, seca_com - secy_com) < 0:
    v_norm = -v_norm
axis_z = v_norm / np.linalg.norm(v_norm)

# Identify the lateral gate orientation (res 65-115 and 265-325)
gate_atoms = u6.select_atoms("chainID Y and ((resid 65:115) or (resid 265:325))")
gate_com = gate_atoms.center_of_mass() / 10.0 - secy_com

# We want the lateral gate to face along -Y in Blender (so it opens forward / sideways in WebGL)
gate_in_plane = gate_com - np.dot(gate_com, axis_z) * axis_z
gate_in_plane = gate_in_plane / np.linalg.norm(gate_in_plane)

axis_y = -gate_in_plane # Lateral gate points in -Y
axis_x = np.cross(axis_y, axis_z)
axis_x = axis_x / np.linalg.norm(axis_x)
axis_y = np.cross(axis_z, axis_x)
axis_y = axis_y / np.linalg.norm(axis_y)

# Construct master 3x3 rotation matrix
R_master = np.vstack([axis_x, axis_y, axis_z])
origin_shift = secy_com

print(f"[+] Master alignment computed. axis_z (normal)={axis_z}, axis_y={axis_y}")

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

# -------------------------------------------------------------------------
# 3. Subunit Configurations
# -------------------------------------------------------------------------
configs = [
    {
        "name": "Piece_SecYEG_SecY",
        "desc": "SecY 10-Helix Hourglass Pore Core (Pore Ring & Plug)",
        "source": "6ITC",
        "selection": "chainID Y and not ((resid 65:115) or (resid 265:325))",
        "color": (0.23, 0.53, 1.0, 1.0), # Royal Blue #3A86FF
        "mat_name": "Mat_SecYEG_SecY_Blue",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.35,
        "metalness": 0.08
    },
    {
        "name": "Piece_SecYEG_Lateral_Gate",
        "desc": "SecY Lateral Gate Helices (TM2b/3 & TM7/8)",
        "source": "6ITC",
        "selection": "chainID Y and ((resid 65:115) or (resid 265:325))",
        "color": (0.0, 0.96, 0.83, 1.0), # Luminous Cyan #00F5D4
        "mat_name": "Mat_SecYEG_LateralGate_Cyan",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.35,
        "metalness": 0.08
    },
    {
        "name": "Piece_SecYEG_SecE",
        "desc": "SecE Stabilizing Clamp Helix (Chain E)",
        "source": "6ITC",
        "selection": "chainID E",
        "color": (1.0, 0.72, 0.01, 1.0), # Golden Amber #FFB703
        "mat_name": "Mat_SecYEG_SecE_Amber",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.35,
        "metalness": 0.08
    },
    {
        "name": "Piece_SecYEG_SecG",
        "desc": "SecG Peripheral Inverted-Topology Escort Subunit (3J46 Chain G)",
        "source": "3J46",
        "selection": "chainID G",
        "color": (0.02, 0.84, 0.63, 1.0), # Luminous Jade #06D6A0
        "mat_name": "Mat_SecYEG_SecG_Jade",
        "style": "cartoon",
        "decimate": 0.45,
        "roughness": 0.35,
        "metalness": 0.08
    },
    {
        "name": "Piece_SecYEG_SecA_Motor",
        "desc": "SecA Cytosolic ATPase Motor (Chain A, Two-Helix Finger)",
        "source": "6ITC",
        "selection": "chainID A",
        "color": (0.62, 0.31, 0.87, 1.0), # Lilac Purple #9D4EDD
        "mat_name": "Mat_SecYEG_SecA_Purple",
        "style": "cartoon",
        "decimate": 0.38,
        "roughness": 0.35,
        "metalness": 0.08
    },
    {
        "name": "Piece_SecYEG_Translocating_Preprotein",
        "desc": "Translocating Preprotein Peptide Loop (Chain B)",
        "source": "6ITC",
        "selection": "chainID B",
        "color": (1.0, 0.88, 0.40, 1.0), # Luminous Gold #FFE066
        "mat_name": "Mat_SecYEG_Peptide_Gold",
        "style": "cartoon",
        "decimate": 1.0,
        "roughness": 0.25,
        "metalness": 0.12,
        "emissive": (0.9, 0.75, 0.1),
        "emissive_strength": 0.8
    }
]

pieces = []

for idx, cfg in enumerate(configs, 1):
    print(f"\n[*] [{idx}/{len(configs)}] Generating {cfg['name']} ({cfg['desc']})...")
    t0 = time.time()
    
    universe = u6 if cfg["source"] == "6ITC" else u3
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
    
    # Decimate cartoon representation to WebGL budget
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
    
    # Transform vertices
    mesh = piece_mol.object.data
    for v in mesh.vertices:
        vec = np.array([v.co.x, v.co.y, v.co.z])
        # If from 3J46, align to 6ITC coordinate space first
        if cfg["source"] == "3J46":
            vec = R_align_3to6 @ vec + t_align_3to6
        
        # Then apply master membrane alignment & centering
        vec_shifted = vec - origin_shift
        vec_rot = R_master @ vec_shifted
        v.co.x = vec_rot[0]
        v.co.y = vec_rot[1]
        v.co.z = vec_rot[2]
    mesh.update()
    
    verts = len(piece_mol.object.data.vertices)
    polys = len(piece_mol.object.data.polygons)
    print(f"[+] {cfg['name']} ready in {time.time() - t0:.2f}s: {verts} verts, {polys} polys")
    pieces.append(piece_mol.object)

# -------------------------------------------------------------------------
# 4. Save Master .blend File
# -------------------------------------------------------------------------
blend_dir = Path("prokaryote/models")
blend_dir.mkdir(exist_ok=True, parents=True)
blend_path = blend_dir / "secyeg_3j46.blend"
bpy.ops.wm.save_as_mainfile(filepath=str(blend_path.resolve()))
print(f"\n[+] Master .blend saved to: {blend_path.resolve()}")

# -------------------------------------------------------------------------
# 5. Export to GLB
# -------------------------------------------------------------------------
out_client = Path("client/public/prokaryote/models/3J46_assembled_pieces.glb").resolve()
out_models = Path("prokaryote/models/3J46_assembled_pieces.glb").resolve()

out_client.parent.mkdir(parents=True, exist_ok=True)
out_models.parent.mkdir(parents=True, exist_ok=True)

bpy.ops.object.select_all(action='SELECT')
t_exp = time.time()
print(f"[*] Exporting GLB to:\n    {out_client}\n    {out_models}...")

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
print(f"[✓] Successfully exported 3J46_assembled_pieces.glb ({size_mb:.2f} MB) in {time.time() - t_exp:.2f}s")
print(f"[✓] Total elapsed execution time: {time.time() - t_start:.2f}s")
