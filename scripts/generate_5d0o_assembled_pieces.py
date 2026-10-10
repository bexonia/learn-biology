"""
generate_5d0o_assembled_pieces.py

Programmatically generates an authentic, multi-piece atomic & secondary-structure 3D model
of the bacterial BAM Complex Outer Membrane Protein Insertase from RCSB structure PDB: 5D0O.
(5D0O: 2.90 Å resolution crystal structure of the complete E. coli BAM complex).

Decomposed into 7 authentic macromolecular pieces adhering to BIOLOGICAL_COLOR_TAXONOMY_SYSTEM.md:
1. Piece_BAM_BamA_Barrel: BamA 16-stranded transmembrane beta-barrel core (strands 1-15, res 424-785) - Deep Marine (#0077B6)
2. Piece_BAM_Lateral_Seam: BamA dynamic lateral seam (strand beta-16, res 786-810) - Luminous Cyan (#00F5D4)
3. Piece_BAM_BamA_POTRA: Periplasmic POTRA domains 1-5 (res 24-423) - Warm Amber (#F77F00)
4. Piece_BAM_BamB: 8-bladed beta-propeller lipoprotein scaffold (Chain B) - Luminous Teal (#2EC4B6)
5. Piece_BAM_BamC: Periplasmic lipoprotein (Chain C) - Lilac Purple (#9D4EDD)
6. Piece_BAM_BamD: Essential TPR-clamp linking POTRA to barrel base (Chain D) - Warm Terracotta (#E76F51)
7. Piece_BAM_BamE: Membrane lipid-anchored stabilizing clamp (Chain E) - Luminous Jade (#06D6A0)
8. Piece_BAM_Client_OMP: Nascent inserting beta-hairpin substrate loop - Luminous Gold (#FFE066)

Exports to:
- client/public/models/5D0O_assembled_pieces.glb
- models/5D0O_assembled_pieces.glb
- models/bam_5d0o.blend
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

# Clear existing objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

try:
    import bl_ext.blender_org.molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)
except ImportError:
    import molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)

t_start = time.time()
print("[*] Fetching 5D0O (Complete E. coli BAM Complex)...")
mol = mn.entities.Molecule.fetch("5D0O", format=".bcif")
u = mol.universe
print(f"[+] Loaded 5D0O universe: {len(u.atoms)} atoms in {time.time() - t_start:.2f}s")

# -------------------------------------------------------------------------
# 1. Coordinate Alignment: PCA on BamA transmembrane barrel
# -------------------------------------------------------------------------
print("[*] Computing PCA and membrane normal orientation for BamA...")
barrel_ca = u.select_atoms("chainID A and resid 424:809 and name CA")
pos_barrel = barrel_ca.positions / 10.0 # nm
c_barrel = np.mean(pos_barrel, axis=0)

q = pos_barrel - c_barrel
cov = np.cov(q.T)
eigvals, eigvecs = np.linalg.eigh(cov)
idx = np.argsort(eigvals)
v_minor = eigvecs[:, idx[0]] # cylinder axis normal to membrane

# Check POTRA vector to ensure v_normal points to extracellular (+Y)
potra_ca = u.select_atoms("chainID A and resid 24:423 and name CA")
potra_c = np.mean(potra_ca.positions / 10.0, axis=0)
if np.dot(potra_c - c_barrel, v_minor) > 0:
    v_normal = -v_minor
else:
    v_normal = v_minor

# Find seam vector between beta 1 (res 425-435) and beta 16 (res 795-809)
beta1 = u.select_atoms("chainID A and resid 425:435 and name CA")
beta16 = u.select_atoms("chainID A and resid 795:809 and name CA")
c_seam = (np.mean(beta1.positions, axis=0) + np.mean(beta16.positions, axis=0)) / 20.0
v_seam = c_seam - c_barrel
v_seam_perp = v_seam - np.dot(v_seam, v_normal) * v_normal
v_seam_perp /= np.linalg.norm(v_seam_perp)

# Orthonormal orientation:
# Y_axis = v_normal (extracellular is +Y, periplasm is -Y)
# Z_axis = -v_seam_perp (so seam faces -Z towards default camera view)
# X_axis = Y_axis x Z_axis
y_axis = v_normal / np.linalg.norm(v_normal)
z_axis = -v_seam_perp
x_axis = np.cross(y_axis, z_axis)
x_axis /= np.linalg.norm(x_axis)
z_axis = np.cross(x_axis, y_axis)

R = np.vstack([x_axis, y_axis, z_axis])
print(f"[+] Rotation matrix det: {np.linalg.det(R):.4f}")

def transform_coords(pts_nm):
    """Translate by -c_barrel and rotate by R"""
    q_pts = pts_nm - c_barrel
    return (R @ q_pts.T).T

# -------------------------------------------------------------------------
# 2. Subunit Pieces Definitions & Selections
# -------------------------------------------------------------------------
PIECES_CONFIG = [
    {
        "name": "Piece_BAM_BamA_Barrel",
        "color": (0.0, 0.467, 0.714, 1.0), # #0077B6 Deep Marine
        "selection": "chainID A and resid 424:785 and name CA",
        "radius": 0.16,
        "is_client": False
    },
    {
        "name": "Piece_BAM_Lateral_Seam",
        "color": (0.0, 0.961, 0.831, 1.0), # #00F5D4 Luminous Cyan
        "selection": "chainID A and resid 786:810 and name CA",
        "radius": 0.18,
        "is_client": False
    },
    {
        "name": "Piece_BAM_BamA_POTRA",
        "color": (0.969, 0.498, 0.0, 1.0), # #F77F00 Warm Amber
        "selection": "chainID A and resid 24:423 and name CA",
        "radius": 0.16,
        "is_client": False
    },
    {
        "name": "Piece_BAM_BamB",
        "color": (0.180, 0.769, 0.714, 1.0), # #2EC4B6 Luminous Teal
        "selection": "chainID B and name CA",
        "radius": 0.16,
        "is_client": False
    },
    {
        "name": "Piece_BAM_BamC",
        "color": (0.616, 0.306, 0.867, 1.0), # #9D4EDD Lilac Purple
        "selection": "chainID C and name CA",
        "radius": 0.16,
        "is_client": False
    },
    {
        "name": "Piece_BAM_BamD",
        "color": (0.906, 0.435, 0.318, 1.0), # #E76F51 Warm Terracotta
        "selection": "chainID D and name CA",
        "radius": 0.16,
        "is_client": False
    },
    {
        "name": "Piece_BAM_BamE",
        "color": (0.024, 0.839, 0.627, 1.0), # #06D6A0 Luminous Jade
        "selection": "chainID E and name CA",
        "radius": 0.16,
        "is_client": False
    },
    {
        "name": "Piece_BAM_Client_OMP",
        "color": (1.0, 0.878, 0.400, 1.0), # #FFE066 Luminous Gold
        "selection": None, # Modeled beta-hairpin substrate
        "radius": 0.18,
        "is_client": True
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
            # Catmull-Rom formula
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
        bm.faces.new(prev_ring) # close end

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

# -------------------------------------------------------------------------
# 4. Generate all 8 pieces
# -------------------------------------------------------------------------
created_objects = []

for cfg in PIECES_CONFIG:
    name = cfg["name"]
    color = cfg["color"]
    radius = cfg["radius"]

    if not cfg["is_client"]:
        sel = cfg["selection"]
        atoms = u.select_atoms(sel)
        if len(atoms) == 0:
            print(f"[!] Warning: Selection empty for {name}: {sel}")
            continue

        pts_nm = atoms.positions / 10.0 # to nm
        t_pts = transform_coords(pts_nm)
        print(f"[+] Creating {name}: {len(t_pts)} CA vertices...")

        # If protein chain has distinct residue gaps, break into segments
        resids = atoms.resids
        segments = []
        cur_seg = [t_pts[0]]
        for i in range(1, len(t_pts)):
            if resids[i] - resids[i-1] > 2: # gap
                if len(cur_seg) >= 2:
                    segments.append(np.array(cur_seg))
                cur_seg = [t_pts[i]]
            else:
                cur_seg.append(t_pts[i])
        if len(cur_seg) >= 2:
            segments.append(np.array(cur_seg))

        # Build mesh for each continuous segment and join
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

    else:
        # Generate inserting client beta-hairpin substrate loop
        print("[*] Generating Piece_BAM_Client_OMP (inserting beta-hairpin)...")
        # Positioned right in the seam opening at -Z, threading from periplasm (-Y) into membrane (+Y)
        hairpin_pts = []
        # Ascending strand (docking from POTRA 5 at Y=-1.2 into the seam)
        for y in np.linspace(-2.2, 1.4, 18):
            z = -2.2 - 0.25 * np.cos(y * 1.5)
            x = -0.45 + 0.15 * np.sin(y * 2.0)
            hairpin_pts.append([x, y, z])
        # Hairpin loop at extracellular rim
        for angle in np.linspace(0, np.pi, 8):
            x = -0.45 + 0.5 * np.cos(angle)
            y = 1.4 + 0.4 * np.sin(angle)
            z = -2.2
            hairpin_pts.append([x, y, z])
        # Descending strand (seeding new barrel wall adjacent to beta-16)
        for y in np.linspace(1.4, -2.2, 18):
            z = -2.2 + 0.25 * np.cos(y * 1.5)
            x = 0.05 + 0.15 * np.sin(y * 2.0)
            hairpin_pts.append([x, y, z])

        obj = create_smooth_tube_mesh(name, np.array(hairpin_pts), radius, color)
        if obj:
            created_objects.append(obj)

print(f"[+] Successfully created {len(created_objects)} authentic macromolecular pieces.")

# -------------------------------------------------------------------------
# 5. Export Assets (.blend and .glb)
# -------------------------------------------------------------------------
output_dir = Path("client/public/models")
output_dir.mkdir(parents=True, exist_ok=True)
models_dir = Path("models")
models_dir.mkdir(parents=True, exist_ok=True)

glb_path_public = output_dir / "5D0O_assembled_pieces.glb"
glb_path_models = models_dir / "5D0O_assembled_pieces.glb"
blend_path = models_dir / "bam_5d0o.blend"

# Select only created objects for export
bpy.ops.object.select_all(action='SELECT')
for o in bpy.data.objects:
    o.select_set(False)
for o in created_objects:
    o.select_set(True)

print(f"[*] Exporting GLB to {glb_path_public}...")
bpy.ops.export_scene.gltf(
    filepath=str(glb_path_public.resolve()),
    use_selection=True,
    export_format='GLB',
    export_attributes=True,
    export_all_vertex_colors=True,
    export_materials='EXPORT',
    export_apply=True
)

shutil.copyfile(glb_path_public, glb_path_models)
print(f"[+] Copied GLB to {glb_path_models}")

print(f"[*] Saving master Blender file to {blend_path}...")
bpy.ops.wm.save_as_mainfile(filepath=str(blend_path.resolve()))
print(f"[+] Saved Blender file: {blend_path} ({os.path.getsize(blend_path)/1024/1024:.2f} MB)")
print(f"[+] Total execution time: {time.time() - t_start:.2f}s")
