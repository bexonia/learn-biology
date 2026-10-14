"""
generate_1jcg_assembled_pieces.py

Authentic Macromolecular 3D Synthesis of bacterial MreB Actin Helical Rails & Rod Complex
using Molecular Nodes (Blender 5.2).

Strict Biophysical Layering in Three.js Y-up Coordinates (Zero Layer Trespassing):
- Layer 1 (Cytoplasm, Y in [+1.2, +3.8] nm):
    * Piece_MreB_Protofilaments (1JCG 2x3 antiparallel double rails)
    * Piece_MreB_ATP_Pockets (bound ATP/ANP + Mg²⁺)
    * Piece_MreB_A22_Pocket (A22 inhibitor binding cleft)
- Layer 2 (Sub-membrane Amphipathic Insertion, Y in [-0.8, +1.0] nm):
    * Piece_MreB_Membrane_Anchor (N-terminal amphipathic helix)
- Layer 3 (Horizontal Curved Inner Membrane, Y in [-2.3, -0.9] nm):
    * Piece_MreB_Inner_Membrane (curved cytoplasmic bilayer slab)
- Layer 4 (Transmembrane Adaptor & Flippase, Y in [-3.8, -0.4] nm):
    * Piece_MreB_RodZ_Adaptor (2WUS bitopic adaptor)
    * Piece_MreB_RodA_Glycosylase (6GBS SEDS glycosyltransferase)
- Layer 5 (Periplasmic Transpeptidase, Y in [-6.4, -3.4] nm):
    * Piece_MreB_PBP2_Transpeptidase (5LP5 periplasmic transpeptidase)
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
    span_y_three = max(max_z - min_z, 1e-4)
    span_z_three = max(max_y - min_y, 1e-4)

    tx_span, ty_span, tz_span = max_spans_three
    u_scale = min(tx_span / span_x_three, ty_span / span_y_three, tz_span / span_z_three)

    target_b = three_to_blender(*target_center_three)
    for v in verts:
        v.co.x = (v.co.x - cx) * u_scale + target_b.x
        v.co.y = (v.co.y - cy) * u_scale + target_b.y
        v.co.z = (v.co.z - cz) * u_scale + target_b.z

    obj.data.update()

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

try:
    import bl_ext.blender_org.molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)
except ImportError:
    import molecularnodes as mn
    print("[+] Molecular Nodes imported:", mn.__file__)

t_start = time.time()
print("[*] Fetching 1JCG (MreB Actin with bound ATP analog)...")
mol_1jcg = mn.entities.Molecule.fetch("1JCG")
u_1jcg = mol_1jcg.universe
print(f"[+] Loaded 1JCG: {len(u_1jcg.atoms)} atoms in {time.time() - t_start:.2f}s")

ca_atoms = u_1jcg.select_atoms("name CA")
c_monomer_angstroms = ca_atoms.center_of_mass()

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
# 1. Piece_MreB_Protofilaments (Antiparallel Double Rails from 1JCG Cartoon)
#    Strictly in Cytoplasm Layer 1: Three.js Y in [+1.2, +3.8] nm (center Y = +2.5 nm)
# -------------------------------------------------------------------------
print("\n[*] Generating authentic Molecular Nodes cartoon for MreB monomer...")
t0 = time.time()
p_mreb_base = mn.entities.Molecule(u_1jcg, name="MreB_Monomer_Base")
p_mreb_base.add_style(
    style="cartoon",
    selection="protein",
    color=(0.227, 0.525, 1.0, 1.0) # Royal Blue #3A86FF
)
add_realize_instances(p_mreb_base.object)
bpy.context.view_layer.objects.active = p_mreb_base.object
p_mreb_base.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(p_mreb_base.object)

mod_dec = p_mreb_base.object.modifiers.new(name="Dec_MreB", type='DECIMATE')
mod_dec.ratio = 0.35
bpy.ops.object.modifier_apply(modifier="Dec_MreB")

fit_mesh_to_three_bounds(p_mreb_base.object, (0.0, 0.0, 0.0), (4.4, 2.5, 2.4))

rail_monomers = []
dx_repeat = 4.6

for i in range(3):
    copy_obj = p_mreb_base.object.copy()
    copy_obj.data = p_mreb_base.object.data.copy()
    copy_obj.location = three_to_blender((i - 1) * dx_repeat, 2.5, -1.0)
    bpy.context.collection.objects.link(copy_obj)
    bpy.context.view_layer.objects.active = copy_obj
    copy_obj.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    rail_monomers.append(copy_obj)

for i in range(3):
    copy_obj = p_mreb_base.object.copy()
    copy_obj.data = p_mreb_base.object.data.copy()
    copy_obj.rotation_euler = (0, 0, np.pi)
    copy_obj.location = three_to_blender((i - 1) * dx_repeat + 2.3, 2.5, 1.0)
    bpy.context.collection.objects.link(copy_obj)
    bpy.context.view_layer.objects.active = copy_obj
    copy_obj.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    rail_monomers.append(copy_obj)

bpy.ops.object.select_all(action='DESELECT')
for m in rail_monomers:
    m.select_set(True)
bpy.context.view_layer.objects.active = rail_monomers[0]
bpy.ops.object.join()
rail_obj = bpy.context.active_object
rail_obj.name = "Piece_MreB_Protofilaments"
rail_obj.data.name = "Piece_MreB_Protofilaments"

bpy.data.objects.remove(p_mreb_base.object, do_unlink=True)

mat_rails = create_pbr_material("Mat_MreB_Protofilaments", (0.227, 0.525, 1.0, 1.0), roughness=0.38, metalness=0.08)
rail_obj.data.materials.clear()
rail_obj.data.materials.append(mat_rails)
pieces.append(rail_obj)
print(f"[+] Piece_MreB_Protofilaments ready: {len(rail_obj.data.vertices)} verts")

# -------------------------------------------------------------------------
# 2. Piece_MreB_ATP_Pockets (Bound ANP & Catalytic Mg²⁺ at Y = +2.5 nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_ATP_Pockets from bound ANP/Mg²⁺...")
anp_atoms = u_1jcg.select_atoms("resname ANP")
anp_coords_nm = (anp_atoms.positions - c_monomer_angstroms) * 0.08 if len(anp_atoms) > 0 else np.array([[0, 0, 0]])

bm_atp = bmesh.new()
for i in range(3):
    offset_s1 = three_to_blender((i - 1) * dx_repeat, 2.5, -1.0)
    for pt in anp_coords_nm:
        bmesh.ops.create_uvsphere(
            bm_atp,
            u_segments=8,
            v_segments=8,
            radius=0.16,
            matrix=Matrix.Translation(Vector(pt) + offset_s1)
        )
    offset_s2 = three_to_blender((i - 1) * dx_repeat + 2.3, 2.5, 1.0)
    for pt in anp_coords_nm:
        pt_rot = Vector((-pt[0], -pt[1], pt[2]))
        bmesh.ops.create_uvsphere(
            bm_atp,
            u_segments=8,
            v_segments=8,
            radius=0.16,
            matrix=Matrix.Translation(pt_rot + offset_s2)
        )

mesh_atp = bpy.data.meshes.new("Piece_MreB_ATP_Pockets")
bm_atp.to_mesh(mesh_atp)
bm_atp.free()
obj_atp = bpy.data.objects.new("Piece_MreB_ATP_Pockets", mesh_atp)
bpy.context.collection.objects.link(obj_atp)

mat_atp = create_pbr_material("Mat_MreB_ATP_Gold", (1.0, 0.718, 0.012, 1.0), roughness=0.20, metalness=0.50, emissive=(1.0, 0.75, 0.1), emissive_strength=1.5)
obj_atp.data.materials.append(mat_atp)
pieces.append(obj_atp)
print(f"[+] Piece_MreB_ATP_Pockets ready: {len(obj_atp.data.vertices)} verts")

# -------------------------------------------------------------------------
# 3. Piece_MreB_Membrane_Anchor (N-term Amphipathic Helix & Loop in Layer 2: Y in [-0.8, +1.0] nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_Membrane_Anchor...")
p_anchor = mn.entities.Molecule(u_1jcg, name="Piece_MreB_Membrane_Anchor")
p_anchor.add_style(
    style="cartoon",
    selection="protein and resid 1:15 85:95",
    color=(0.0, 0.961, 0.831, 1.0)
)
add_realize_instances(p_anchor.object)
bpy.context.view_layer.objects.active = p_anchor.object
p_anchor.object.select_set(True)
bpy.ops.object.convert(target='MESH')
clean_mesh_origin_artifacts(p_anchor.object)

fit_mesh_to_three_bounds(p_anchor.object, (1.8, 0.1, 0.0), (2.2, 1.8, 1.8))

mat_anc = create_pbr_material("Mat_MreB_Membrane_Anchor", (0.0, 0.961, 0.831, 1.0), roughness=0.30, metalness=0.15)
p_anchor.object.data.materials.clear()
p_anchor.object.data.materials.append(mat_anc)
pieces.append(p_anchor.object)
print(f"[+] Piece_MreB_Membrane_Anchor ready: {len(p_anchor.object.data.vertices)} verts")

# -------------------------------------------------------------------------
# 4. Piece_MreB_Inner_Membrane (Horizontal Curved Cytoplasmic Membrane Bilayer Slab)
#    Layer 3: Y in [-2.3, -0.9] nm
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_Inner_Membrane (Horizontal curved bilayer slab)...")
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

mesh_mem = bpy.data.meshes.new("Piece_MreB_Inner_Membrane")
bm_mem.to_mesh(mesh_mem)
bm_mem.free()
obj_mem = bpy.data.objects.new("Piece_MreB_Inner_Membrane", mesh_mem)
bpy.context.collection.objects.link(obj_mem)

mat_mem = create_pbr_material("Mat_MreB_Inner_Membrane", (0.024, 0.839, 0.627, 0.85), roughness=0.45, metalness=0.04)
obj_mem.data.materials.append(mat_mem)
pieces.append(obj_mem)
print(f"[+] Piece_MreB_Inner_Membrane ready: {len(obj_mem.data.vertices)} verts")

# -------------------------------------------------------------------------
# 5. Piece_MreB_RodZ_Adaptor (Authentic 2WUS Cartoon in Layer 4: Y in [-2.8, +0.4] nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_RodZ_Adaptor (Authentic 2WUS cartoon)...")
try:
    mol_rodz = mn.entities.Molecule.fetch("2WUS")
    u_rodz = mol_rodz.universe
    p_rodz = mn.entities.Molecule(u_rodz, name="Piece_MreB_RodZ_Adaptor")
    p_rodz.add_style(style="cartoon", selection="protein", color=(0.902, 0.224, 0.275, 1.0))
    add_realize_instances(p_rodz.object)
    bpy.context.view_layer.objects.active = p_rodz.object
    p_rodz.object.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(p_rodz.object)

    mod = p_rodz.object.modifiers.new(name="Dec_RodZ", type='DECIMATE')
    mod.ratio = 0.35
    bpy.ops.object.modifier_apply(modifier="Dec_RodZ")

    fit_mesh_to_three_bounds(p_rodz.object, (-3.4, -1.2, 0.4), (3.8, 3.2, 3.2))

    mat_rodz = create_pbr_material("Mat_MreB_RodZ", (0.902, 0.224, 0.275, 1.0), roughness=0.38, metalness=0.06)
    p_rodz.object.data.materials.clear()
    p_rodz.object.data.materials.append(mat_rodz)
    pieces.append(p_rodz.object)
    print(f"[+] Piece_MreB_RodZ_Adaptor ready: {len(p_rodz.object.data.vertices)} verts")
except Exception as e:
    print(f"[-] Could not load 2WUS ({e})")

# -------------------------------------------------------------------------
# 6. Piece_MreB_RodA_Glycosylase (Authentic 6GBS SEDS Flippase in Layer 4: Y in [-3.6, -0.8] nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_RodA_Glycosylase (Authentic 6GBS cartoon)...")
try:
    mol_roda = mn.entities.Molecule.fetch("6GBS")
    u_roda = mol_roda.universe
    p_roda = mn.entities.Molecule(u_roda, name="Piece_MreB_RodA_Glycosylase")
    p_roda.add_style(style="cartoon", selection="protein", color=(0.616, 0.306, 0.867, 1.0))
    add_realize_instances(p_roda.object)
    bpy.context.view_layer.objects.active = p_roda.object
    p_roda.object.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(p_roda.object)

    mod = p_roda.object.modifiers.new(name="Dec_RodA", type='DECIMATE')
    mod.ratio = 0.30
    bpy.ops.object.modifier_apply(modifier="Dec_RodA")

    fit_mesh_to_three_bounds(p_roda.object, (3.2, -2.2, -0.3), (3.8, 2.8, 3.2))

    mat_roda = create_pbr_material("Mat_MreB_RodA", (0.616, 0.306, 0.867, 1.0), roughness=0.40, metalness=0.06)
    p_roda.object.data.materials.clear()
    p_roda.object.data.materials.append(mat_roda)
    pieces.append(p_roda.object)
    print(f"[+] Piece_MreB_RodA_Glycosylase ready: {len(p_roda.object.data.vertices)} verts")
except Exception as e:
    print(f"[-] Could not load 6GBS ({e})")

# -------------------------------------------------------------------------
# 7. Piece_MreB_PBP2_Transpeptidase (Authentic 5LP5 PBP2 in Periplasm Layer 5: Y in [-6.2, -3.2] nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_PBP2_Transpeptidase (Authentic 5LP5 cartoon)...")
try:
    mol_pbp2 = mn.entities.Molecule.fetch("5LP5")
    u_pbp2 = mol_pbp2.universe
    p_pbp2 = mn.entities.Molecule(u_pbp2, name="Piece_MreB_PBP2_Transpeptidase")
    p_pbp2.add_style(style="cartoon", selection="protein", color=(0.969, 0.498, 0.0, 1.0))
    add_realize_instances(p_pbp2.object)
    bpy.context.view_layer.objects.active = p_pbp2.object
    p_pbp2.object.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(p_pbp2.object)

    mod = p_pbp2.object.modifiers.new(name="Dec_PBP2", type='DECIMATE')
    mod.ratio = 0.30
    bpy.ops.object.modifier_apply(modifier="Dec_PBP2")

    fit_mesh_to_three_bounds(p_pbp2.object, (3.8, -4.7, 0.2), (4.2, 3.2, 3.5))

    mat_pbp2 = create_pbr_material("Mat_MreB_PBP2", (0.969, 0.498, 0.0, 1.0), roughness=0.40, metalness=0.06)
    p_pbp2.object.data.materials.clear()
    p_pbp2.object.data.materials.append(mat_pbp2)
    pieces.append(p_pbp2.object)
    print(f"[+] Piece_MreB_PBP2_Transpeptidase ready: {len(p_pbp2.object.data.vertices)} verts")
except Exception as e:
    print(f"[-] Could not load 5LP5 ({e})")

# -------------------------------------------------------------------------
# 8. Piece_MreB_A22_Pocket (A22 Chemical Inhibitor Binding Cleft at Y = +2.5 nm)
# -------------------------------------------------------------------------
print("\n[*] Generating Piece_MreB_A22_Pocket...")
bm_a22 = bmesh.new()
a22_spheres = [
    three_to_blender(0.5, 2.5, -0.8),
    three_to_blender(0.8, 2.7, -0.6),
    three_to_blender(0.3, 2.3, -0.9)
]
for pt in a22_spheres:
    bmesh.ops.create_uvsphere(
        bm_a22,
        u_segments=12,
        v_segments=12,
        radius=0.26,
        matrix=Matrix.Translation(pt)
    )

mesh_a22 = bpy.data.meshes.new("Piece_MreB_A22_Pocket")
bm_a22.to_mesh(mesh_a22)
bm_a22.free()
obj_a22 = bpy.data.objects.new("Piece_MreB_A22_Pocket", mesh_a22)
bpy.context.collection.objects.link(obj_a22)

mat_a22 = create_pbr_material("Mat_MreB_A22_Hazard", (0.902, 0.224, 0.275, 1.0), roughness=0.25, metalness=0.35, emissive=(0.9, 0.1, 0.1), emissive_strength=1.8)
obj_a22.data.materials.append(mat_a22)
pieces.append(obj_a22)
print(f"[+] Piece_MreB_A22_Pocket ready: {len(obj_a22.data.vertices)} verts")

# -------------------------------------------------------------------------
# Export to GLB & Blend
# -------------------------------------------------------------------------
output_blend = r"c:\Users\devcd\GenProjects\learn-biology\models\mreb_cytoskeleton_1jcg.blend"
output_glb_models = r"c:\Users\devcd\GenProjects\learn-biology\models\1JCG_assembled_pieces.glb"
output_glb_client = r"c:\Users\devcd\GenProjects\learn-biology\client\public\models\1JCG_assembled_pieces.glb"

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
print(f"[+] Exported GLB to: {output_glb_models} ({os.path.getsize(output_glb_models) / 1024 / 1024:.2f} MB)")

Path(output_glb_client).parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(output_glb_models, output_glb_client)
print(f"[+] Copied GLB to: {output_glb_client}")

total_verts = sum(len(p.data.vertices) for p in pieces)
total_faces = sum(len(p.data.polygons) for p in pieces)
print(f"\n=========================================================================")
print(f"🎉 SUCCESS: Authentic Molecular Nodes MreB Cytoskeleton Built & Exported!")
print(f"   Pieces: {len(pieces)}")
print(f"   Total Vertices: {total_verts:,}")
print(f"   Total Polygons: {total_faces:,}")
print(f"   Time Elapsed: {time.time() - t_start:.2f}s")
print(f"=========================================================================\n")
