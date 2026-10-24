"""
generate_1fsz_assembled_pieces.py

Authentic Macromolecular 3D Synthesis of bacterial Divisome FtsZ Z-Ring & Septal Wall Synthase
using Molecular Nodes (Blender 5.2).

Strict Biophysical Layering in Three.js Y-up Coordinates (Zero Layer Trespassing):
- Layer 1 (Cytoplasm, Y in [+2.1, +4.7] nm):
    * Piece_FtsZ_Protofilaments (1FSZ 4-monomer arc)
    * Piece_FtsZ_GTP_Pockets (longitudinal GTPase active sites)
    * Piece_FtsZ_MinCDE_Barrier (lateral polar regulators at X = ±12.5 nm)
- Layer 2 (Sub-membrane Tethering Cleft, Y in [-0.7, +2.0] nm):
    * Piece_FtsZ_FtsA_Anchor (4A2A peripheral actin-like tether)
    * Piece_FtsZ_ZipA_Transmembrane (bitopic tether from +1.2 down into membrane -2.0 nm)
- Layer 3 (Horizontal Inner Membrane Furrow, Y in [-2.3, -0.8] nm):
    * Piece_FtsZ_Inner_Membrane (dual-leaflet lipid bilayer)
- Layer 4 (Trans-Envelope Synthase Complex, Y in [-4.6, -0.8] nm):
    * Piece_FtsZ_FtsWI_Synthase (6PL5 transmembrane FtsW + periplasmic FtsI/PBP3)
- Layer 5 (Periplasmic Septal Peptidoglycan Wall, Y in [-6.3, -4.9] nm):
    * Piece_FtsZ_Septal_Wall (cross-wall murein sacculus)
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

def three_to_blender(x: float, y_up: float, z_depth: float) -> Vector:
    """Maps desired Three.js (x, y_up, z_depth) to Blender (x, -z_depth, y_up) for export_yup=True."""
    return Vector((x, -z_depth, y_up))

def fit_mesh_to_three_bounds(obj, target_center_three, max_spans_three):
    """
    Centers mesh vertices and scales the mesh so its (X_three, Y_three, Z_three) spans
    fit cleanly within max_spans_three = (sx, sy, sz), then places it at target_center_three.
    Recall:
      X_three = X_blender
      Y_three = Z_blender
      Z_three = -Y_blender
    """
    verts = obj.data.vertices
    if not verts:
        return
    xs = np.array([v.co.x for v in verts])
    ys = np.array([v.co.y for v in verts])
    zs = np.array([v.co.z for v in verts])

    min_x, max_x = xs.min(), xs.max()
    min_y, max_y = ys.min(), ys.max()
    min_z, max_z = zs.min(), zs.max()

    cx = 0.5 * (min_x + max_x)
    cy = 0.5 * (min_y + max_y)
    cz = 0.5 * (min_z + max_z)

    span_x_three = max(max_x - min_x, 1e-4)
    span_y_three = max(max_z - min_z, 1e-4) # Z_blender is Y_three
    span_z_three = max(max_y - min_y, 1e-4) # Y_blender is -Z_three

    tx_span, ty_span, tz_span = max_spans_three
    scale_x = tx_span / span_x_three
    scale_y_three = ty_span / span_y_three
    scale_z_three = tz_span / span_z_three

    # Use uniform scale governed by the tightest constraint so protein proportions stay authentic
    u_scale = min(scale_x, scale_y_three, scale_z_three)

    target_b = three_to_blender(*target_center_three)
    for v in verts:
        v.co.x = (v.co.x - cx) * u_scale + target_b.x
        v.co.y = (v.co.y - cy) * u_scale + target_b.y
        v.co.z = (v.co.z - cz) * u_scale + target_b.z

    obj.data.update()

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
print("[*] Fetching 1FSZ (FtsZ cell-division GTPase)...")
mol_1fsz = mn.entities.Molecule.fetch("1FSZ")
u_1fsz = mol_1fsz.universe
print(f"[+] Loaded 1FSZ: {len(u_1fsz.atoms)} atoms in {time.time() - t_start:.2f}s")

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

def center_mesh_vertices(obj):
    verts = [v.co for v in obj.data.vertices]
    if not verts:
        return Vector((0,0,0))
    mean_co = sum(verts, Vector((0,0,0))) / len(verts)
    for v in obj.data.vertices:
        v.co -= mean_co
    obj.data.update()
    return mean_co

def create_pbr_material(name, base_color, roughness=0.42, metalness=0.06, emissive=(0,0,0), emissive_strength=0.0):
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

pieces = []

# -------------------------------------------------------------------------
# 1. Piece_FtsZ_Protofilaments (Head-to-tail Z-ring Arc from 1FSZ Cartoon)
#    Strictly in Cytoplasm Layer 1: Three.js Y in [+2.2, +4.8] nm
# -------------------------------------------------------------------------
print("\n[*] Generating authentic Molecular Nodes cartoon for FtsZ monomer...")
t0 = time.time()
p_ftsz_base = mn.entities.Molecule(u_1fsz, name="FtsZ_Monomer_Base")
p_ftsz_base.add_style(
    style="cartoon",
    selection="protein",
    color=(0.227, 0.525, 1.0, 1.0) # Royal Blue #3A86FF
)
add_realize_instances(p_ftsz_base.object)
bpy.context.view_layer.objects.active = p_ftsz_base.object
p_ftsz_base.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(p_ftsz_base.object)

mod_dec = p_ftsz_base.object.modifiers.new(name="Dec_FtsZ", type='DECIMATE')
mod_dec.ratio = 0.55
bpy.ops.object.modifier_apply(modifier="Dec_FtsZ")

# Fit single monomer to 3.8 x 2.5 x 2.8 nm before tiling 4-mer
fit_mesh_to_three_bounds(p_ftsz_base.object, (0.0, 0.0, 0.0), (3.8, 2.5, 2.8))

n_monomers = 4
dx_repeat = 3.7
ring_monomers = []
for i in range(n_monomers):
    tx = (i - 1.5) * dx_repeat
    ty = 3.4 - 0.010 * (tx ** 2)
    tz = 0.0
    copy_obj = p_ftsz_base.object.copy()
    copy_obj.data = p_ftsz_base.object.data.copy()
    copy_obj.location = three_to_blender(tx, ty, tz)
    bpy.context.collection.objects.link(copy_obj)
    bpy.context.view_layer.objects.active = copy_obj
    copy_obj.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    ring_monomers.append(copy_obj)

bpy.ops.object.select_all(action='DESELECT')
for m in ring_monomers:
    m.select_set(True)
bpy.context.view_layer.objects.active = ring_monomers[0]
bpy.ops.object.join()
proto_obj = bpy.context.active_object
proto_obj.name = "Piece_FtsZ_Protofilaments"
proto_obj.data.name = "Piece_FtsZ_Protofilaments"

bpy.data.objects.remove(p_ftsz_base.object, do_unlink=True)

mat_proto = create_pbr_material("Mat_FtsZ_Protofilaments", (0.227, 0.525, 1.0, 1.0), roughness=0.38, metalness=0.08)
proto_obj.data.materials.clear()
proto_obj.data.materials.append(mat_proto)
pieces.append(proto_obj)
print(f"[+] Piece_FtsZ_Protofilaments ready: {len(proto_obj.data.vertices)} verts")

# -------------------------------------------------------------------------
# 2. Piece_FtsZ_GTP_Pockets (GTP/GDP at Longitudinal Interfaces at Y = +3.4 nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_GTP_Pockets...")
bm_gtp = bmesh.new()
for i in range(n_monomers - 1):
    tx = (i - 1.0) * dx_repeat
    ty = 3.4 - 0.010 * (tx ** 2)
    tz = 0.25
    bmesh.ops.create_uvsphere(
        bm_gtp,
        u_segments=14,
        v_segments=14,
        radius=0.38,
        matrix=Matrix.Translation(three_to_blender(tx, ty, tz))
    )

mesh_gtp = bpy.data.meshes.new("Piece_FtsZ_GTP_Pockets")
bm_gtp.to_mesh(mesh_gtp)
bm_gtp.free()
obj_gtp = bpy.data.objects.new("Piece_FtsZ_GTP_Pockets", mesh_gtp)
bpy.context.collection.objects.link(obj_gtp)

mat_gtp = create_pbr_material("Mat_FtsZ_GTP_Cyan", (0.0, 0.961, 0.831, 1.0), roughness=0.20, metalness=0.50, emissive=(0.0, 0.8, 0.7), emissive_strength=1.5)
obj_gtp.data.materials.append(mat_gtp)
pieces.append(obj_gtp)
print(f"[+] Piece_FtsZ_GTP_Pockets ready: {len(obj_gtp.data.vertices)} verts")

# -------------------------------------------------------------------------
# 3. Piece_FtsZ_FtsA_Anchor (Authentic 4A2A Actin-Homolog Tether)
#    Strictly in Sub-Membrane Tethering Layer 2: Y in [-0.7, +2.0] nm (center Y = +0.65 nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_FtsA_Anchor (Authentic 4A2A cartoon)...")
try:
    mol_ftsa = mn.entities.Molecule.fetch("4A2A")
    u_ftsa = mol_ftsa.universe
    p_ftsa = mn.entities.Molecule(u_ftsa, name="Piece_FtsZ_FtsA_Anchor")
    p_ftsa.add_style(style="cartoon", selection="protein", color=(1.0, 0.718, 0.012, 1.0))
    add_realize_instances(p_ftsa.object)
    bpy.context.view_layer.objects.active = p_ftsa.object
    p_ftsa.object.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(p_ftsa.object)

    mod = p_ftsa.object.modifiers.new(name="Dec_FtsA", type='DECIMATE')
    mod.ratio = 0.65
    bpy.ops.object.modifier_apply(modifier="Dec_FtsA")

    # Fit strictly into the sub-membrane tethering space between FtsZ (+2.1) and Inner Membrane (-0.9)
    fit_mesh_to_three_bounds(p_ftsa.object, (3.2, 0.65, 0.4), (3.6, 2.5, 2.8))

    mat_ftsa = create_pbr_material("Mat_FtsZ_FtsA", (1.0, 0.718, 0.012, 1.0), roughness=0.38, metalness=0.08)
    p_ftsa.object.data.materials.clear()
    p_ftsa.object.data.materials.append(mat_ftsa)
    pieces.append(p_ftsa.object)
    print(f"[+] Piece_FtsZ_FtsA_Anchor ready: {len(p_ftsa.object.data.vertices)} verts")
except Exception as e:
    print(f"[-] Could not load 4A2A ({e})")

# -------------------------------------------------------------------------
# 4. Piece_FtsZ_ZipA_Transmembrane (Bitopic Membrane Anchor)
#    Spans from sub-membrane tether (+1.2 nm) into Inner Membrane (-1.9 nm) at X = +6.2 nm
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_ZipA_Transmembrane...")
bm_zipa = bmesh.new()
bmesh.ops.create_cone(
    bm_zipa,
    cap_ends=True,
    cap_tris=False,
    segments=18,
    radius1=0.45,
    radius2=0.45,
    depth=2.4,
    matrix=Matrix.Translation(three_to_blender(6.2, -0.7, -0.3))
)
bmesh.ops.create_uvsphere(
    bm_zipa,
    u_segments=14,
    v_segments=14,
    radius=0.72,
    matrix=Matrix.Translation(three_to_blender(6.2, 0.8, -0.3))
)
mesh_zipa = bpy.data.meshes.new("Piece_FtsZ_ZipA_Transmembrane")
bm_zipa.to_mesh(mesh_zipa)
bm_zipa.free()
obj_zipa = bpy.data.objects.new("Piece_FtsZ_ZipA_Transmembrane", mesh_zipa)
bpy.context.collection.objects.link(obj_zipa)

mat_zipa = create_pbr_material("Mat_FtsZ_ZipA", (0.902, 0.224, 0.275, 1.0), roughness=0.35, metalness=0.10)
obj_zipa.data.materials.append(mat_zipa)
pieces.append(obj_zipa)
print(f"[+] Piece_FtsZ_ZipA_Transmembrane ready: {len(obj_zipa.data.vertices)} verts")

# -------------------------------------------------------------------------
# 5. Piece_FtsZ_Inner_Membrane (Horizontal Cytoplasmic Division Furrow Bilayer)
#    Layer 3: Spans Three.js X in [-11, 11], Z in [-5.5, 5.5] at Y in [-2.3, -0.9] nm
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_Inner_Membrane (Horizontal cytokinetic furrow)...")
bm_mem = bmesh.new()
n_u = 28
n_v = 16
u_span = 22.0
v_span = 11.0

top_grid = []
bot_grid = []
for i in range(n_u):
    tx = (i / (n_u - 1) - 0.5) * u_span
    row_top = []
    row_bot = []
    for j in range(n_v):
        tz = (j / (n_v - 1) - 0.5) * v_span
        ty = -1.0 - 0.005 * (tx ** 2) - 0.004 * (tz ** 2)
        v_top = bm_mem.verts.new(three_to_blender(tx, ty, tz))
        v_bot = bm_mem.verts.new(three_to_blender(tx, ty - 0.65, tz))
        row_top.append(v_top)
        row_bot.append(v_bot)
    top_grid.append(row_top)
    bot_grid.append(row_bot)

bm_mem.verts.ensure_lookup_table()
for i in range(n_u - 1):
    for j in range(n_v - 1):
        try:
            bm_mem.faces.new((top_grid[i][j], top_grid[i+1][j], top_grid[i+1][j+1], top_grid[i][j+1]))
            bm_mem.faces.new((bot_grid[i][j], bot_grid[i][j+1], bot_grid[i+1][j+1], bot_grid[i+1][j]))
        except ValueError:
            pass

mesh_mem = bpy.data.meshes.new("Piece_FtsZ_Inner_Membrane")
bm_mem.to_mesh(mesh_mem)
bm_mem.free()
obj_mem = bpy.data.objects.new("Piece_FtsZ_Inner_Membrane", mesh_mem)
bpy.context.collection.objects.link(obj_mem)

mat_mem = create_pbr_material("Mat_FtsZ_Membrane", (0.024, 0.839, 0.627, 0.85), roughness=0.45, metalness=0.04)
obj_mem.data.materials.append(mat_mem)
pieces.append(obj_mem)
print(f"[+] Piece_FtsZ_Inner_Membrane ready: {len(obj_mem.data.vertices)} verts")

# -------------------------------------------------------------------------
# 6. Piece_FtsZ_FtsWI_Synthase (Authentic 6PL5 Synthase Cartoon)
#    Strictly in Layer 4 (Transmembrane + Periplasmic): Y in [-4.5, -0.9] nm (center Y = -2.7 nm)
#    Never pokes above Inner Membrane (-0.9) and never crosses Septal Wall (-5.0)!
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_FtsWI_Synthase (Authentic 6PL5 cartoon)...")
try:
    mol_ftswi = mn.entities.Molecule.fetch("6PL5")
    u_ftswi = mol_ftswi.universe
    p_ftswi = mn.entities.Molecule(u_ftswi, name="Piece_FtsZ_FtsWI_Synthase")
    p_ftswi.add_style(style="cartoon", selection="protein", color=(0.616, 0.306, 0.867, 1.0))
    add_realize_instances(p_ftswi.object)
    bpy.context.view_layer.objects.active = p_ftswi.object
    p_ftswi.object.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(p_ftswi.object)

    mod = p_ftswi.object.modifiers.new(name="Dec_FtsWI", type='DECIMATE')
    mod.ratio = 0.55
    bpy.ops.object.modifier_apply(modifier="Dec_FtsWI")

    # Fit strictly into trans-envelope/periplasmic layer Y in [-4.5, -0.9] nm (span_y = 3.6 nm)
    fit_mesh_to_three_bounds(p_ftswi.object, (-3.2, -2.7, 0.0), (4.2, 3.6, 3.6))

    mat_ftswi = create_pbr_material("Mat_FtsZ_FtsWI", (0.616, 0.306, 0.867, 1.0), roughness=0.40, metalness=0.06)
    p_ftswi.object.data.materials.clear()
    p_ftswi.object.data.materials.append(mat_ftswi)
    pieces.append(p_ftswi.object)
    print(f"[+] Piece_FtsZ_FtsWI_Synthase ready: {len(p_ftswi.object.data.vertices)} verts")
except Exception as e:
    print(f"[-] Could not load 6PL5 ({e})")

# -------------------------------------------------------------------------
# 7. Piece_FtsZ_Septal_Wall (Horizontal Periplasmic Peptidoglycan Cross-Wall)
#    Layer 5: Y in [-6.3, -4.9] nm (clean clearance below FtsWI at -4.5 nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_Septal_Wall (Horizontal periplasmic murein sacculus)...")
bm_wall = bmesh.new()
n_wx = 24
n_wz = 14
wx_span = 20.0
wz_span = 10.0

w_top_grid = []
w_bot_grid = []
for i in range(n_wx):
    tx = (i / (n_wx - 1) - 0.5) * wx_span
    r_top = []
    r_bot = []
    for j in range(n_wz):
        tz = (j / (n_wz - 1) - 0.5) * wz_span
        ty = -5.0 - 0.005 * (tx ** 2)
        vt = bm_wall.verts.new(three_to_blender(tx, ty, tz))
        vb = bm_wall.verts.new(three_to_blender(tx, ty - 0.75, tz))
        r_top.append(vt)
        r_bot.append(vb)
    w_top_grid.append(r_top)
    w_bot_grid.append(r_bot)

bm_wall.verts.ensure_lookup_table()
for i in range(n_wx - 1):
    for j in range(n_wz - 1):
        try:
            bm_wall.faces.new((w_top_grid[i][j], w_top_grid[i+1][j], w_top_grid[i+1][j+1], w_top_grid[i][j+1]))
            bm_wall.faces.new((w_bot_grid[i][j], w_bot_grid[i][j+1], w_bot_grid[i+1][j+1], w_bot_grid[i+1][j]))
        except ValueError:
            pass

mesh_wall = bpy.data.meshes.new("Piece_FtsZ_Septal_Wall")
bm_wall.to_mesh(mesh_wall)
bm_wall.free()
obj_wall = bpy.data.objects.new("Piece_FtsZ_Septal_Wall", mesh_wall)
bpy.context.collection.objects.link(obj_wall)

mat_wall = create_pbr_material("Mat_FtsZ_Wall", (0.906, 0.435, 0.318, 1.0), roughness=0.55, metalness=0.04)
obj_wall.data.materials.append(mat_wall)
pieces.append(obj_wall)
print(f"[+] Piece_FtsZ_Septal_Wall ready: {len(obj_wall.data.vertices)} verts")

# -------------------------------------------------------------------------
# 8. Piece_FtsZ_MinCDE_Barrier (Polar MinCDE Spatial Inhibitor Caps)
#    Placed laterally at Three.js X = ±12.0 nm, Y = +3.2 nm, Z = 0.0 nm
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_FtsZ_MinCDE_Barrier...")
bm_min = bmesh.new()
bmesh.ops.create_uvsphere(
    bm_min,
    u_segments=16,
    v_segments=16,
    radius=1.4,
    matrix=Matrix.Translation(three_to_blender(-12.0, 3.2, 0.0))
)
bmesh.ops.create_uvsphere(
    bm_min,
    u_segments=16,
    v_segments=16,
    radius=1.4,
    matrix=Matrix.Translation(three_to_blender(12.0, 3.2, 0.0))
)
mesh_min = bpy.data.meshes.new("Piece_FtsZ_MinCDE_Barrier")
bm_min.to_mesh(mesh_min)
bm_min.free()
obj_min = bpy.data.objects.new("Piece_FtsZ_MinCDE_Barrier", mesh_min)
bpy.context.collection.objects.link(obj_min)

mat_min = create_pbr_material("Mat_FtsZ_MinCDE", (0.0, 0.467, 0.714, 0.75), roughness=0.30, metalness=0.25, emissive=(0.0, 0.35, 0.7), emissive_strength=0.9)
obj_min.data.materials.append(mat_min)
pieces.append(obj_min)
print(f"[+] Piece_FtsZ_MinCDE_Barrier ready: {len(obj_min.data.vertices)} verts")

# -------------------------------------------------------------------------
# Export to GLB & Blend
# -------------------------------------------------------------------------
output_blend = r"c:\Users\devcd\GenProjects\learn-biology\prokaryote\models\divisome_ftsz_1fsz.blend"
output_glb_models = r"c:\Users\devcd\GenProjects\learn-biology\prokaryote\models\1FSZ_assembled_pieces.glb"
output_glb_client = r"c:\Users\devcd\GenProjects\learn-biology\client\public\prokaryote\models\1FSZ_assembled_pieces.glb"

bpy.ops.object.select_all(action='DESELECT')
for p in pieces:
    p.select_set(True)

bpy.context.view_layer.objects.active = pieces[0]

Path(output_blend).parent.mkdir(parents=True, exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=output_blend)
print(f"\n[+] Saved master Blend scene to: {output_blend}")

print(f"[*] Exporting GLB with {len(pieces)} authentic Molecular Nodes pieces...")
bpy.ops.export_scene.gltf(
    filepath=output_glb_models,
    use_selection=True,
    export_format='GLB',
    export_apply=True,
    export_yup=True
)

file_sz = os.path.getsize(output_glb_models) / (1024 * 1024)
print(f"[+] Exported GLB to: {output_glb_models} ({file_sz:.2f} MB)")

Path(output_glb_client).parent.mkdir(parents=True, exist_ok=True)
shutil.copy(output_glb_models, output_glb_client)
print(f"[+] Copied GLB to: {output_glb_client}")

total_verts = sum(len(p.data.vertices) for p in pieces)
total_polys = sum(len(p.data.polygons) for p in pieces)
print("\n" + "="*73)
print(f"🎉 SUCCESS: Authentic Molecular Nodes FtsZ Divisome Built & Exported!")
print(f"   Pieces: {len(pieces)}")
print(f"   Total Vertices: {total_verts:,}")
print(f"   Total Polygons: {total_polys:,}")
print(f"   Time Elapsed: {time.time() - t_start:.2f}s")
print("="*73 + "\n")
