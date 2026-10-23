"""
mn_builder_utils.py

Shared Molecular Nodes (Blender 5.2) macromolecular builder utilities for
Elements 14-29 of the learn-biology 3D interactive engine.

Guarantees:
1. Authentic RCSB PDB experimental macromolecular geometry (cartoon alpha-helices,
   beta-sheets, nucleic acid double helices, molecular surfaces, and ball-and-stick).
2. Preservation of native quaternary cryo-EM / crystallographic subunit docking
   when extracting multiple pieces from a holoenzyme Universe.
3. Authentic dual-leaflet phospholipid bilayers (discrete headgroup spheres + acyl tails)
   and woven hexagonal peptidoglycan murein lattices (never primitive boxes).
"""

import bpy
import bmesh
import os
import sys
import time
import math
import shutil
import numpy as np
from mathutils import Matrix, Vector, Euler

try:
    import bl_ext.blender_org.molecularnodes as mn
except ImportError:
    import molecularnodes as mn


def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    for block in list(bpy.data.meshes):
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in list(bpy.data.materials):
        if block.users == 0:
            bpy.data.materials.remove(block)


def hex_to_rgba(hex_str: str, alpha: float = 1.0):
    h = hex_str.lstrip('#')
    return (
        int(h[0:2], 16) / 255.0,
        int(h[2:4], 16) / 255.0,
        int(h[4:6], 16) / 255.0,
        alpha,
    )


def three_to_blender(x: float, y_up: float, z_depth: float) -> Vector:
    """Maps Three.js (x, y_up, z_depth) to Blender (x, -z_depth, y_up) for export_yup=True."""
    return Vector((x, -z_depth, y_up))


def create_pbr_material(name: str, rgba, roughness: float = 0.36, metalness: float = 0.08, emissive_strength: float = 0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = next((n for n in nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if bsdf:
        bsdf.inputs['Base Color'].default_value = rgba
        bsdf.inputs['Roughness'].default_value = roughness
        bsdf.inputs['Metallic'].default_value = metalness
        if emissive_strength > 0:
            if 'Emission Color' in bsdf.inputs:
                bsdf.inputs['Emission Color'].default_value = rgba
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
    verts_to_delete = [v for v in bm.verts if v.co.length < 0.04]
    if verts_to_delete and len(verts_to_delete) < len(bm.verts):
        bmesh.ops.delete(bm, geom=verts_to_delete, context='VERTS')
        bm.to_mesh(obj.data)
    bm.free()
    obj.data.update()


def realize_mn_to_mesh(p_mol, decimate_ratio: float = 0.40, max_verts: int = 18000):
    obj = p_mol.object
    add_realize_instances(obj)
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.convert(target='MESH')
    clean_mesh_origin_artifacts(obj)
    n_v = len(obj.data.vertices)
    if n_v > 1500:
        target_ratio = min(decimate_ratio, max_verts / float(n_v))
        if target_ratio < 0.98:
            mod = obj.modifiers.new(name="Dec_MN", type='DECIMATE')
            mod.ratio = max(0.02, target_ratio)
            bpy.ops.object.modifier_apply(modifier="Dec_MN")
    return obj


def rotate_mesh_vertices(obj, euler_xyz):
    if not euler_xyz:
        return
    rot_mat = Euler(euler_xyz, 'XYZ').to_matrix().to_4x4()
    verts = obj.data.vertices
    if not verts:
        return
    xs = np.array([v.co.x for v in verts])
    ys = np.array([v.co.y for v in verts])
    zs = np.array([v.co.z for v in verts])
    cx, cy, cz = 0.5 * (xs.min() + xs.max()), 0.5 * (ys.min() + ys.max()), 0.5 * (zs.min() + zs.max())
    c_vec = Vector((cx, cy, cz))
    for v in verts:
        v.co = (rot_mat @ (v.co - c_vec)) + c_vec
    obj.data.update()


def fit_mesh_to_three_bounds(obj, target_center_three, max_spans_three):
    """
    Uniformly scales and translates mesh vertices so its (X_three, Y_three, Z_three)
    bounding box fits inside max_spans_three = (sx, sy, sz) centered at target_center_three.
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
    span_y_three = max(max_z - min_z, 1e-4)  # Z_blender is Y_three
    span_z_three = max(max_y - min_y, 1e-4)  # Y_blender is -Z_three

    tx_span, ty_span, tz_span = max_spans_three
    u_scale = min(tx_span / span_x_three, ty_span / span_y_three, tz_span / span_z_three)

    target_b = three_to_blender(*target_center_three)
    for v in verts:
        v.co.x = (v.co.x - cx) * u_scale + target_b.x
        v.co.y = (v.co.y - cy) * u_scale + target_b.y
        v.co.z = (v.co.z - cz) * u_scale + target_b.z

    obj.data.update()


def fit_object_group_to_three_bounds(objs, target_center_three, max_spans_three, euler_xyz=None):
    """
    Rotates and uniformly scales a list of mesh objects TOGETHER around their shared
    bounding box so their native relative quaternary docking is 100% preserved!
    """
    valid_objs = [o for o in objs if o and len(o.data.vertices) > 0]
    if not valid_objs:
        return

    if euler_xyz:
        rot_mat = Euler(euler_xyz, 'XYZ').to_matrix().to_4x4()
        for o in valid_objs:
            for v in o.data.vertices:
                v.co = rot_mat @ v.co
            o.data.update()

    all_x, all_y, all_z = [], [], []
    for o in valid_objs:
        for v in o.data.vertices:
            all_x.append(v.co.x)
            all_y.append(v.co.y)
            all_z.append(v.co.z)

    xs = np.array(all_x)
    ys = np.array(all_y)
    zs = np.array(all_z)

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
    for o in valid_objs:
        for v in o.data.vertices:
            v.co.x = (v.co.x - cx) * u_scale + target_b.x
            v.co.y = (v.co.y - cy) * u_scale + target_b.y
            v.co.z = (v.co.z - cz) * u_scale + target_b.z
        o.data.update()


def build_mn_piece(
    u,
    piece_name: str,
    selection: str,
    style: str = "cartoon",
    color_hex: str = "#3A86FF",
    decimate: float = 0.40,
    center_three=None,
    spans_three=None,
    euler_xyz=None,
    extra_styles=None,
):
    """
    Creates an authentic Molecular Nodes mesh piece from an MDAnalysis Universe `u`.
    """
    rgba = hex_to_rgba(color_hex)
    p_mol = mn.entities.Molecule(u, name=piece_name)
    p_mol.add_style(style=style, selection=selection, color=rgba)
    if extra_styles:
        for st in extra_styles:
            p_mol.add_style(
                style=st.get("style", "surface"),
                selection=st.get("selection", selection),
                color=hex_to_rgba(st.get("color", color_hex), st.get("alpha", 1.0)),
            )

    obj = realize_mn_to_mesh(p_mol, decimate_ratio=decimate)
    obj.name = piece_name
    obj.data.name = piece_name

    if euler_xyz:
        rotate_mesh_vertices(obj, euler_xyz)
    if center_three is not None and spans_three is not None:
        fit_mesh_to_three_bounds(obj, center_three, spans_three)

    mat = create_pbr_material(f"Mat_{piece_name}", rgba, roughness=0.35, metalness=0.10)
    obj.data.materials.clear()
    obj.data.materials.append(mat)
    print(f"[+] Built MN Piece {piece_name}: {len(obj.data.vertices)} verts")
    return obj


def join_objects_as_piece(objs, piece_name: str, color_hex: str = "#3A86FF", keep_mat_prefix: bool = False):
    valid = [o for o in objs if o is not None and len(o.data.vertices) > 0]
    if not valid:
        return None
    bpy.ops.object.select_all(action='DESELECT')
    for o in valid:
        o.select_set(True)
    bpy.context.view_layer.objects.active = valid[0]
    if len(valid) > 1:
        bpy.ops.object.join()
    joined = bpy.context.active_object
    joined.name = piece_name
    joined.data.name = piece_name
    if not keep_mat_prefix:
        rgba = hex_to_rgba(color_hex)
        mat = create_pbr_material(f"Mat_{piece_name}", rgba, roughness=0.35, metalness=0.10)
        joined.data.materials.clear()
        joined.data.materials.append(mat)
    print(f"[+] Joined Piece {piece_name}: {len(joined.data.vertices)} verts")
    return joined


def build_phospholipid_bilayer_piece(
    piece_name: str,
    center_three,
    span_x: float,
    thickness_y: float,
    span_z: float,
    color_hex: str = "#06D6A0",
    nx: int = 14,
    nz: int = 8,
    arch_curv: float = 0.0,
    hole_xz_radii=None,
):
    """
    Constructs an authentic 3D dual-leaflet phospholipid bilayer composed of
    hydrophilic headgroup spheres on upper and lower leaflets + twin acyl tail cylinders,
    with optional circular exclusions (`hole_xz_radii = [(hx, hz, r), ...]`) where
    transmembrane protein pores traverse the membrane.
    """
    cx, cy, cz = center_three
    bm = bmesh.new()

    dx = span_x / max(nx - 1, 1)
    dz = span_z / max(nz - 1, 1)
    head_r = min(dx, dz) * 0.36
    tail_r = head_r * 0.34
    half_y = thickness_y * 0.42

    for ix in range(nx):
        x = cx - 0.5 * span_x + ix * dx
        for iz in range(nz):
            z = cz - 0.5 * span_z + iz * dz
            if hole_xz_radii:
                skip = False
                for hx, hz, hr in hole_xz_radii:
                    if math.hypot(x - hx, z - hz) < hr:
                        skip = True
                        break
                if skip:
                    continue

            y_arch = -arch_curv * ((x - cx) ** 2)
            # Upper and lower leaflet headgroups + tails
            for sign in (1.0, -1.0):
                hy = cy + y_arch + sign * half_y
                hb = three_to_blender(x, hy, z)
                bmesh.ops.create_uvsphere(
                    bm,
                    u_segments=8,
                    v_segments=6,
                    radius=head_r,
                    matrix=Matrix.Translation(hb),
                )
                # Two acyl tails per phospholipid
                for t_off in (-head_r * 0.42, head_r * 0.42):
                    ty_mid = cy + y_arch + sign * (half_y * 0.48)
                    tb = three_to_blender(x + t_off, ty_mid, z)
                    bmesh.ops.create_cone(
                        bm,
                        cap_ends=True,
                        cap_tris=False,
                        segments=6,
                        radius1=tail_r,
                        radius2=tail_r * 0.85,
                        depth=half_y * 0.85,
                        matrix=Matrix.Translation(tb),
                    )

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    rgba = hex_to_rgba(color_hex)
    mat = create_pbr_material(f"Mat_{piece_name}", rgba, roughness=0.40, metalness=0.08)
    obj.data.materials.append(mat)
    print(f"[+] Built Phospholipid Bilayer {piece_name}: {len(obj.data.vertices)} verts")
    return obj


def build_peptidoglycan_lattice_piece(
    piece_name: str,
    center_three,
    span_x: float,
    thickness_y: float,
    span_z: float,
    color_hex: str = "#E76F51",
    n_layers: int = 1,
    nx: int = 8,
    nz: int = 5,
):
    """
    Constructs a 3D woven peptidoglycan murein lattice with NAG-NAM glycan strands,
    hexagonal sugar nodes, and vertical peptide cross-bridges.
    """
    cx, cy, cz = center_three
    bm = bmesh.new()

    dx = span_x / max(nx - 1, 1)
    dz = span_z / max(nz - 1, 1)
    dy = thickness_y / max(n_layers, 1)
    node_r = min(dx, dz) * 0.24
    rod_r = node_r * 0.42

    for il in range(n_layers):
        ly = cy - 0.5 * thickness_y + (il + 0.5) * dy
        for ix in range(nx):
            x = cx - 0.5 * span_x + ix * dx
            for iz in range(nz):
                z = cz - 0.5 * span_z + iz * dz
                nb = three_to_blender(x, ly, z)
                bmesh.ops.create_uvsphere(
                    bm,
                    u_segments=8,
                    v_segments=6,
                    radius=node_r,
                    matrix=Matrix.Translation(nb),
                )
                # X-axis glycan strand cylinder
                if ix < nx - 1:
                    mid_b = three_to_blender(x + 0.5 * dx, ly, z)
                    rot_y = Matrix.Rotation(math.pi / 2.0, 4, 'Y')
                    bmesh.ops.create_cone(
                        bm,
                        cap_ends=False,
                        segments=6,
                        radius1=rod_r,
                        radius2=rod_r,
                        depth=dx,
                        matrix=Matrix.Translation(mid_b) @ rot_y,
                    )
                # Z-axis peptide cross-bridge cylinder
                if iz < nz - 1:
                    mid_b = three_to_blender(x, ly, z + 0.5 * dz)
                    rot_x = Matrix.Rotation(math.pi / 2.0, 4, 'X')
                    bmesh.ops.create_cone(
                        bm,
                        cap_ends=False,
                        segments=6,
                        radius1=rod_r * 0.78,
                        radius2=rod_r * 0.78,
                        depth=dz,
                        matrix=Matrix.Translation(mid_b) @ rot_x,
                    )
                # Vertical inter-layer peptide stem
                if il < n_layers - 1:
                    mid_b = three_to_blender(x, ly + 0.5 * dy, z)
                    bmesh.ops.create_cone(
                        bm,
                        cap_ends=False,
                        segments=6,
                        radius1=rod_r * 0.75,
                        radius2=rod_r * 0.75,
                        depth=dy,
                        matrix=Matrix.Translation(mid_b),
                    )

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    rgba = hex_to_rgba(color_hex)
    mat = create_pbr_material(f"Mat_{piece_name}", rgba, roughness=0.42, metalness=0.08)
    obj.data.materials.append(mat)
    print(f"[+] Built Peptidoglycan Lattice {piece_name}: {len(obj.data.vertices)} verts")
    return obj


def export_roadmap_glb(glb_filename: str, roadmap_subfolder: str = None, blend_filename: str = None):
    """
    Exports the scene to:
      - c:/Users/devcd/GenProjects/learn-biology/client/public/models/<glb_filename>
      - c:/Users/devcd/GenProjects/learn-biology/client/dist/models/<glb_filename>
      - c:/Users/devcd/GenProjects/learn-biology/models/<glb_filename>
    """
    base_dir = r"c:\Users\devcd\GenProjects\learn-biology"
    pub_glb = os.path.join(base_dir, "client", "public", "models", glb_filename)
    dist_glb = os.path.join(base_dir, "client", "dist", "models", glb_filename)
    models_glb = os.path.join(base_dir, "models", glb_filename)

    os.makedirs(os.path.dirname(pub_glb), exist_ok=True)
    os.makedirs(os.path.dirname(models_glb), exist_ok=True)

    for obj in bpy.data.objects:
        if obj.type == 'MESH':
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            bpy.ops.object.shade_smooth()
            obj.select_set(False)

    print(f"[*] Exporting GLB to {pub_glb} ...")
    bpy.ops.export_scene.gltf(
        filepath=pub_glb,
        export_format='GLB',
        export_yup=True,
        export_apply=True,
        export_materials='EXPORT',
    )
    shutil.copy2(pub_glb, models_glb)
    if os.path.exists(os.path.dirname(dist_glb)):
        shutil.copy2(pub_glb, dist_glb)
    if blend_filename:
        blend_path = os.path.join(base_dir, "models", blend_filename)
        bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    sz_mb = os.path.getsize(pub_glb) / (1024 * 1024)
    print(f"[+] Exported {glb_filename} ({sz_mb:.2f} MB) successfully!")
