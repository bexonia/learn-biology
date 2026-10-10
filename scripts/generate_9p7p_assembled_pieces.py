"""
generate_9p7p_assembled_pieces.py

Programmatically generates an authentic, multi-piece atomic & secondary-structure 3D model
of the bacterial LptA-G Lipopolysaccharide Trans-Envelope Export Bridge from RCSB structure PDB: 9P7P.
(9P7P: 3.40 Å resolution cryo-EM structure of the complete E. coli LptBFGCADE bridge with bound LPS).

Decomposed into 7 authentic macromolecular pieces adhering to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md:
1. Piece_LPT_LptB_Dimer: Cytoplasmic ABC ATPase powerhead homodimer (Chains B, H) - Golden Amber (#FFB703)
2. Piece_LPT_LptFG_Permease: Inner membrane heterodimeric permease cavity (Chains F, G) - Seafoam Jade (#06D6A0)
3. Piece_LPT_LptC_Coupler: Periplasmic adaptor & transition dock (Chain C, res 47-191) - Luminous Teal (#2EC4B6)
4. Piece_LPT_LptA_Bridge: Periplasmic beta-jellyroll hydrophobic slide (Chain C, res 192-355) - Warm Amber (#F77F00)
5. Piece_LPT_LptD_Barrel: 26-stranded giant outer membrane beta-barrel insertase (Chain D) - Deep Marine (#0077B6)
6. Piece_LPT_LptE_Plug: Lipoprotein plug nestled inside LptD barrel lumen (Chain E) - Lilac Purple (#9D4EDD)
7. Piece_LPT_Bound_LPS: Docked Lipopolysaccharide (Lipid A + KDO core sugars, HetID: JSG) - Luminous Gold (#FFE066)

Exports to:
- client/public/models/9P7P_assembled_pieces.glb
- models/9P7P_assembled_pieces.glb
- models/lpt_9p7p.blend
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

# Clear existing objects in scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

try:
    import bl_ext.blender_org.molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)
except ImportError:
    import molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)

t_start = time.time()
print("[*] Fetching 9P7P (Complete E. coli LptBFGCADE Trans-Envelope Bridge)...")
mol = mn.entities.Molecule.fetch("9P7P")

u = mol.universe
print(f"[+] Loaded 9P7P universe: {len(u.atoms)} atoms in {time.time() - t_start:.2f}s")

# -------------------------------------------------------------------------
# 1. Coordinate Alignment: Center of mass & Vertical Trans-Envelope Axis
# -------------------------------------------------------------------------
# Center of mass calculated across CA atoms
c_complex = np.array([252.26, 233.90, 295.28]) # Angstroms

# Rotation matrix: Map raw -Z (trans-envelope vector) to +Y (vertical in Three.js)
# det(R) = +1.0 (pure proper rotation, no inversion)
R = np.array([
    [1.0,  0.0,  0.0],
    [0.0,  0.0, -1.0],
    [0.0,  1.0,  0.0]
])

def transform_coords(pts_angstrom):
    """Translate by -c_complex, scale to nm (0.1), and rotate by R"""
    q_pts = (pts_angstrom - c_complex) * 0.1
    return (R @ q_pts.T).T

# -------------------------------------------------------------------------
# 2. Subunit Pieces Definitions & Selections
# -------------------------------------------------------------------------
PIECES_CONFIG = [
    {
        "name": "Piece_LPT_LptB_Dimer",
        "color": (1.0, 0.718, 0.012, 1.0), # #FFB703 Golden Amber
        "selection": "(segid B or segid H) and name CA",
        "radius": 0.16,
        "is_lps": False
    },
    {
        "name": "Piece_LPT_LptFG_Permease",
        "color": (0.024, 0.839, 0.627, 1.0), # #06D6A0 Seafoam Jade
        "selection": "(segid F or segid G) and protein and name CA",
        "radius": 0.16,
        "is_lps": False
    },
    {
        "name": "Piece_LPT_LptC_Coupler",
        "color": (0.180, 0.769, 0.714, 1.0), # #2EC4B6 Luminous Teal
        "selection": "segid C and resid 47:191 and name CA",
        "radius": 0.16,
        "is_lps": False
    },
    {
        "name": "Piece_LPT_LptA_Bridge",
        "color": (0.969, 0.498, 0.0, 1.0), # #F77F00 Warm Amber
        "selection": "segid C and resid 192:355 and name CA",
        "radius": 0.16,
        "is_lps": False
    },
    {
        "name": "Piece_LPT_LptD_Barrel",
        "color": (0.0, 0.467, 0.714, 1.0), # #0077B6 Deep Marine
        "selection": "segid D and name CA",
        "radius": 0.16,
        "is_lps": False
    },
    {
        "name": "Piece_LPT_LptE_Plug",
        "color": (0.616, 0.306, 0.867, 1.0), # #9D4EDD Lilac Purple
        "selection": "segid E and name CA",
        "radius": 0.16,
        "is_lps": False
    },
    {
        "name": "Piece_LPT_Bound_LPS",
        "color": (1.0, 0.878, 0.400, 1.0), # #FFE066 Luminous Gold
        "selection": "resname JSG",
        "radius": 0.12,
        "is_lps": True
    }
]

# -------------------------------------------------------------------------
# 3. Procedural Ribbon / Tube Geometry Builder
# -------------------------------------------------------------------------
def create_smooth_tube_mesh(name, points, radius, color, segments=8):
    """Constructs a smooth volumetric 3D tube mesh through points using Catmull-Rom interpolation."""
    if len(points) < 2:
        return None

    # Spline interpolation
    n_pts = len(points)
    dense_pts = []
    
    for i in range(n_pts - 1):
        p0 = points[max(0, i - 1)]
        p1 = points[i]
        p2 = points[i + 1]
        p3 = points[min(n_pts - 1, i + 2)]

        dist = np.linalg.norm(p2 - p1)
        subdivs = max(2, min(8, int(dist / 0.15)))

        for step in range(subdivs):
            t = step / float(subdivs)
            t2 = t * t
            t3 = t2 * t
            pt = 0.5 * (
                (2 * p1) +
                (-p0 + p2) * t +
                (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
                (-p0 + 3 * p1 - 3 * p2 + p3) * t3
            )
            dense_pts.append(pt)
    dense_pts.append(points[-1])

    # BMesh circle extrusion along tangent vectors
    bm = bmesh.new()
    prev_ring = []

    for idx, p in enumerate(dense_pts):
        if idx == 0:
            tangent = dense_pts[1] - p
        elif idx == len(dense_pts) - 1:
            tangent = p - dense_pts[-2]
        else:
            tangent = dense_pts[idx + 1] - dense_pts[idx - 1]
        
        t_len = np.linalg.norm(tangent)
        if t_len < 1e-6:
            tangent = np.array([0.0, 1.0, 0.0])
        else:
            tangent /= t_len

        # Normal and binormal
        if abs(tangent[0]) < 0.9:
            ref = np.array([1.0, 0.0, 0.0])
        else:
            ref = np.array([0.0, 1.0, 0.0])
        n1 = np.cross(tangent, ref)
        n1 /= np.linalg.norm(n1)
        n2 = np.cross(tangent, n1)

        # Create circle ring
        ring_verts = []
        for s in range(segments):
            angle = (2.0 * np.pi * s) / segments
            offset = (np.cos(angle) * n1 + np.sin(angle) * n2) * radius
            pos = p + offset
            v = bm.verts.new(Vector(pos))
            ring_verts.append(v)

        if prev_ring:
            for s in range(segments):
                s_next = (s + 1) % segments
                v1 = prev_ring[s]
                v2 = prev_ring[s_next]
                v3 = ring_verts[s_next]
                v4 = ring_verts[s]
                bm.faces.new([v1, v2, v3, v4])

        prev_ring = ring_verts

    # End caps
    if prev_ring:
        bm.faces.new(prev_ring)

    bm.verts.ensure_lookup_table()
    bm.faces.ensure_lookup_table()

    # Create Blender Mesh and Object
    mesh_data = bpy.data.meshes.new(name + "_mesh")
    bm.to_mesh(mesh_data)
    bm.free()

    obj = bpy.data.objects.new(name, mesh_data)
    bpy.context.collection.objects.link(obj)

    # Assign PBR Material
    mat = bpy.data.materials.new(name=name + "_mat")
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs['Base Color'].default_value = color
        bsdf.inputs['Roughness'].default_value = 0.35
        bsdf.inputs['Metallic'].default_value = 0.10
    obj.data.materials.append(mat)

    return obj

def create_lps_ball_and_stick_mesh(name, atoms_coords, color, sphere_radius=0.10, bond_radius=0.035):
    """Creates a ball-and-stick molecular representation for the bound LPS ligand (HetID: JSG)."""
    bm = bmesh.new()
    n_atoms = len(atoms_coords)
    
    # 1. Create small icosphere beads for atoms
    for pos in atoms_coords:
        bmesh.ops.create_icosphere(bm, subdivisions=1, radius=sphere_radius, matrix=Matrix.Translation(Vector(pos)))

    # 2. Connect close pairs (< 1.8 Å = 0.18 nm) with cylinders (chemical bonds)
    max_bond_dist = 0.18
    for i in range(n_atoms):
        for j in range(i + 1, n_atoms):
            p1 = atoms_coords[i]
            p2 = atoms_coords[j]
            diff = p2 - p1
            dist = np.linalg.norm(diff)
            if 0.08 < dist < max_bond_dist:
                mid = (p1 + p2) / 2.0
                dir_v = diff / dist
                up = Vector((0, 0, 1))
                v_target = Vector(dir_v)
                rot_quat = up.rotation_difference(v_target)
                mat_trans = Matrix.Translation(Vector(mid))
                mat_rot = rot_quat.to_matrix().to_4x4()

                bmesh.ops.create_cone(
                    bm,
                    cap_ends=True,
                    segments=6,
                    radius1=bond_radius,
                    radius2=bond_radius,
                    depth=dist,
                    matrix=mat_trans @ mat_rot
                )

    bm.verts.ensure_lookup_table()
    bm.faces.ensure_lookup_table()

    mesh_data = bpy.data.meshes.new(name + "_mesh")
    bm.to_mesh(mesh_data)
    bm.free()

    obj = bpy.data.objects.new(name, mesh_data)
    bpy.context.collection.objects.link(obj)

    # Assign Luminous Gold PBR Material with slight emission
    mat = bpy.data.materials.new(name=name + "_mat")
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs['Base Color'].default_value = color
        bsdf.inputs['Roughness'].default_value = 0.25
        bsdf.inputs['Metallic'].default_value = 0.15
        if 'Emission Color' in bsdf.inputs:
            bsdf.inputs['Emission Color'].default_value = (1.0, 0.8, 0.2, 1.0)
            bsdf.inputs['Emission Strength'].default_value = 0.35
    obj.data.materials.append(mat)

    return obj

# -------------------------------------------------------------------------
# 4. Generate all 7 pieces
# -------------------------------------------------------------------------
created_objects = []

for cfg in PIECES_CONFIG:
    name = cfg["name"]
    color = cfg["color"]
    radius = cfg["radius"]
    sel = cfg["selection"]

    atoms = u.select_atoms(sel)
    if len(atoms) == 0:
        print(f"[!] Warning: Selection empty for {name}: {sel}")
        continue

    pts_nm = transform_coords(atoms.positions)

    if cfg["is_lps"]:
        print(f"[+] Creating {name} (ball-and-stick): {len(pts_nm)} heavy atoms...")
        obj = create_lps_ball_and_stick_mesh(name, pts_nm, color, sphere_radius=0.10, bond_radius=0.035)
        if obj:
            created_objects.append(obj)
    else:
        print(f"[+] Creating {name}: {len(pts_nm)} CA vertices...")
        # Break into continuous segments if residue gap > 2
        resids = atoms.resids
        segments = []
        cur_seg = [pts_nm[0]]
        for i in range(1, len(pts_nm)):
            if resids[i] - resids[i-1] > 2: # gap
                if len(cur_seg) >= 2:
                    segments.append(np.array(cur_seg))
                cur_seg = [pts_nm[i]]
            else:
                cur_seg.append(pts_nm[i])
        if len(cur_seg) >= 2:
            segments.append(np.array(cur_seg))

        seg_objs = []
        for s_idx, seg in enumerate(segments):
            obj = create_smooth_tube_mesh(f"{name}_seg{s_idx}", seg, radius, color)
            if obj:
                seg_objs.append(obj)

        if len(seg_objs) > 1:
            bpy.ops.object.select_all(action='SELECT')
            for o in bpy.data.objects:
                o.select_set(False)
            for o in seg_objs:
                o.select_set(True)
            bpy.context.view_layer.objects.active = seg_objs[0]
            bpy.ops.object.join()
            main_obj = seg_objs[0]
            main_obj.name = name
            created_objects.append(main_obj)
        elif len(seg_objs) == 1:
            seg_objs[0].name = name
            created_objects.append(seg_objs[0])

print(f"[+] Successfully built {len(created_objects)} pieces:")
for o in created_objects:
    print(f"  - {o.name}: {len(o.data.vertices)} vertices, {len(o.data.polygons)} faces")

# -------------------------------------------------------------------------
# 5. Save .blend and Export .glb
# -------------------------------------------------------------------------
blend_path = os.path.abspath("models/lpt_9p7p.blend")
os.makedirs(os.path.dirname(blend_path), exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=blend_path)
print(f"[+] Saved Blender scene: {blend_path}")

glb_path_models = os.path.abspath("models/9P7P_assembled_pieces.glb")
glb_path_client = os.path.abspath("client/public/models/9P7P_assembled_pieces.glb")
os.makedirs(os.path.dirname(glb_path_client), exist_ok=True)

# Select all created piece objects for export
bpy.ops.object.select_all(action='DESELECT')
for o in created_objects:
    o.select_set(True)

bpy.ops.export_scene.gltf(
    filepath=glb_path_models,
    use_selection=True,
    export_format='GLB',
    export_apply=True,
    export_yup=True
)
print(f"[+] Exported GLB: {glb_path_models} ({os.path.getsize(glb_path_models) / (1024*1024):.2f} MB)")

shutil.copyfile(glb_path_models, glb_path_client)
print(f"[+] Copied to client web directory: {glb_path_client}")
print(f"[✓] Trans-Envelope Lpt Bridge asset generation finished in {time.time() - t_start:.2f}s!")
