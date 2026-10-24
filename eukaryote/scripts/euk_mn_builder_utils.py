"""
euk_mn_builder_utils.py

Blender 5.2 + Molecular Nodes (`bl_ext.blender_org.molecularnodes`) + RDKit 3D
macromolecular and subcellular organelle builder utilities for all 36 Eukaryote scenarios.
"""

import os
import sys
import math
import site
import shutil
import numpy as np
import bpy
import bmesh
from mathutils import Vector, Matrix, Euler

# Ensure user site-packages (for RDKit, biotite, MDAnalysis) are on sys.path in Blender 5.2 Python
user_site = site.getusersitepackages()
if user_site not in sys.path:
    sys.path.append(user_site)
for extra_p in (
    os.path.expanduser(r"~\AppData\Roaming\Python\Python313\site-packages"),
    os.path.expanduser(r"~\AppData\Roaming\Blender Foundation\Blender\5.2\extensions\.local\lib\python3.13\site-packages"),
):
    if os.path.exists(extra_p) and extra_p not in sys.path:
        sys.path.append(extra_p)

try:
    import bl_ext.blender_org.molecularnodes as mn
except ImportError:
    import molecularnodes as mn

from rdkit import Chem
from rdkit.Chem import AllChem

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
EUK_DIR = os.path.dirname(SCRIPT_DIR)
REPO_DIR = os.path.dirname(EUK_DIR)
PDB_CACHE_DIR = os.path.join(EUK_DIR, "models", "pdb_cache")
os.makedirs(PDB_CACHE_DIR, exist_ok=True)


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for block in list(bpy.data.meshes):
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in list(bpy.data.materials):
        if block.users == 0:
            bpy.data.materials.remove(block)


def hex_to_rgba(hex_str: str, alpha: float = 1.0):
    h = hex_str.strip().lstrip("#")
    return (
        int(h[0:2], 16) / 255.0,
        int(h[2:4], 16) / 255.0,
        int(h[4:6], 16) / 255.0,
        alpha,
    )


def three_to_blender(x: float, y_up: float, z_depth: float) -> Vector:
    return Vector((x, -z_depth, y_up))


def create_pbr_material(name: str, rgba, roughness: float = 0.35, metalness: float = 0.10):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = next((n for n in nodes if n.type == "BSDF_PRINCIPLED"), None)
    if bsdf:
        bsdf.inputs["Base Color"].default_value = rgba
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Metallic"].default_value = metalness
    return mat


def add_realize_instances(obj):
    mod = obj.modifiers.get("Molecular Nodes")
    if not mod or not mod.node_group:
        return
    ng = mod.node_group
    out_node = next((n for n in ng.nodes if n.type == "GROUP_OUTPUT"), None)
    if not out_node:
        return
    realize_node = ng.nodes.new("GeometryNodeRealizeInstances")
    geo_socket_in = out_node.inputs[0]
    if geo_socket_in.links:
        prev_socket = geo_socket_in.links[0].from_socket
        ng.links.new(prev_socket, realize_node.inputs["Geometry"])
        ng.links.new(realize_node.outputs["Geometry"], geo_socket_in)


def clean_mesh_origin_artifacts(obj):
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    verts_to_delete = [v for v in bm.verts if v.co.length < 0.03]
    if verts_to_delete and len(verts_to_delete) < len(bm.verts):
        bmesh.ops.delete(bm, geom=verts_to_delete, context="VERTS")
        bm.to_mesh(obj.data)
    bm.free()
    obj.data.update()


def realize_mn_to_mesh(p_mol, decimate_ratio: float = 0.38, max_verts: int = 11000):
    obj = p_mol.object
    add_realize_instances(obj)
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.convert(target="MESH")
    clean_mesh_origin_artifacts(obj)
    n_v = len(obj.data.vertices)
    if n_v > 1200:
        target_ratio = min(decimate_ratio, max_verts / float(n_v))
        if target_ratio < 0.96:
            mod = obj.modifiers.new(name="Dec_MN", type="DECIMATE")
            mod.ratio = max(0.03, target_ratio)
            bpy.ops.object.modifier_apply(modifier="Dec_MN")
    return obj


def fit_mesh_to_three_bounds(obj, target_center_three, max_spans_three):
    verts = obj.data.vertices
    if not verts or len(verts) == 0:
        return
    coords = np.empty((len(verts), 3), dtype=np.float32)
    verts.foreach_get("co", coords.ravel())

    min_c = coords.min(axis=0)
    max_c = coords.max(axis=0)
    mid_c = 0.5 * (min_c + max_c)

    span_x_three = max(float(max_c[0] - min_c[0]), 1e-4)
    span_y_three = max(float(max_c[2] - min_c[2]), 1e-4)  # Z_blender is Y_three
    span_z_three = max(float(max_c[1] - min_c[1]), 1e-4)  # Y_blender is -Z_three

    tx_span, ty_span, tz_span = max_spans_three
    u_scale = min(tx_span / span_x_three, ty_span / span_y_three, tz_span / span_z_three)

    target_b = three_to_blender(*target_center_three)
    coords[:, 0] = (coords[:, 0] - mid_c[0]) * u_scale + target_b.x
    coords[:, 1] = (coords[:, 1] - mid_c[1]) * u_scale + target_b.y
    coords[:, 2] = (coords[:, 2] - mid_c[2]) * u_scale + target_b.z

    verts.foreach_set("co", coords.ravel())
    obj.data.update()


def finalize_piece_object(obj, piece_name: str, color_hex: str, keep_materials: bool = False):
    obj.name = piece_name
    obj.data.name = piece_name
    if not keep_materials:
        rgba = hex_to_rgba(color_hex)
        mat = create_pbr_material(f"Mat_{piece_name}", rgba, roughness=0.35, metalness=0.10)
        obj.data.materials.clear()
        obj.data.materials.append(mat)
    return obj


def join_objects_as_piece(objs, piece_name: str, color_hex: str, keep_materials: bool = False):
    valid = [o for o in objs if o is not None and o.data is not None and len(o.data.vertices) > 0]
    if not valid:
        return None
    bpy.ops.object.select_all(action="DESELECT")
    for o in valid:
        o.select_set(True)
    bpy.context.view_layer.objects.active = valid[0]
    if len(valid) > 1:
        bpy.ops.object.join()
    joined = bpy.context.active_object
    return finalize_piece_object(joined, piece_name, color_hex, keep_materials=keep_materials)


FAST_PDB_SUBSTITUTES = {
    "7R5K": "1IBR",
    "6L8Q": "1AOI",
    "8J07": "4HNA",
    "8B6X": "4HNA",
    "7K5I": "3J46",
    "7O7F": "3J46",
}


def fetch_pdb_universe_cached(pdb_id: str, universe_cache: dict):
    pdb_key = pdb_id.strip().upper()
    fetch_key = FAST_PDB_SUBSTITUTES.get(pdb_key, pdb_key)
    if fetch_key in universe_cache:
        return universe_cache[fetch_key]
    try:
        print(f"  [*] Molecular Nodes fetching PDB {fetch_key} (for {pdb_key})...")
        mol = mn.entities.Molecule.fetch(fetch_key)
        u = mol.universe
        if mol.object and mol.object.name in bpy.data.objects:
            bpy.data.objects.remove(mol.object, do_unlink=True)
        universe_cache[fetch_key] = u
        print(f"  [+] Loaded PDB {fetch_key}: {len(u.atoms)} atoms")
        return u
    except Exception as e:
        print(f"  [!] Warning: Failed to fetch {fetch_key} via Molecular Nodes: {e}")
        universe_cache[fetch_key] = None
        return None


def get_mn_partition_selection(u, part_idx: int, total_parts: int, max_atoms: int = 8500) -> str:
    """
    Partitions an MDAnalysis Universe `u` into non-overlapping chain or residue ranges
    bounded to <= `max_atoms` so Molecular Nodes converts each subunit quickly and cleanly.
    """
    if u is None or len(u.atoms) == 0:
        return "all"
    try:
        chains = []
        seen = set()
        for cid in u.atoms.chainIDs:
            c_str = str(cid).strip()
            if c_str and c_str not in seen:
                seen.add(c_str)
                chains.append(c_str)

        if len(chains) >= 2:
            n_c = len(chains)
            chunk = max(1, math.ceil(n_c / max(1, total_parts)))
            start_i = (part_idx * chunk) % n_c
            sub_chains = chains[start_i : start_i + chunk]
            if not sub_chains:
                sub_chains = [chains[part_idx % n_c]]

            chosen = []
            atom_tot = 0
            for ch in sub_chains:
                # Escape chain IDs that contain special chars
                if not ch.isalnum():
                    continue
                sel_ag = u.select_atoms(f"chainID {ch}")
                if len(sel_ag) == 0:
                    continue
                if atom_tot + len(sel_ag) <= max_atoms or not chosen:
                    chosen.append(ch)
                    atom_tot += len(sel_ag)
                if atom_tot >= max_atoms:
                    break

            if chosen:
                sel_str = f"chainID {' '.join(chosen)}"
                ag = u.select_atoms(sel_str)
                if len(ag) > max_atoms:
                    resids = np.unique(ag.resids)
                    cut_r = resids[min(len(resids) - 1, max(30, int(len(resids) * (max_atoms / len(ag)))))]
                    return f"({sel_str}) and resid {int(resids[0])}:{int(cut_r)}"
                return sel_str

        # Fallback: partition by residue ID window
        resids = np.unique(u.atoms.resids)
        if len(resids) > 10:
            n_r = len(resids)
            w = max(5, n_r // max(1, total_parts))
            r0_idx = (part_idx * w) % max(1, n_r - w)
            r1_idx = min(n_r - 1, r0_idx + w)
            r0, r1 = int(resids[r0_idx]), int(resids[r1_idx])
            ag = u.select_atoms(f"resid {r0}:{r1}")
            if len(ag) > max_atoms:
                r1 = int(resids[min(n_r - 1, r0_idx + max(25, int(w * (max_atoms / len(ag)))))])
            if len(u.select_atoms(f"resid {r0}:{r1}")) > 0:
                return f"resid {r0}:{r1}"
    except Exception:
        pass
    return "protein or nucleic"


def build_mn_subunit_mesh(
    u,
    piece_name: str,
    part_idx: int,
    total_parts: int,
    color_hex: str,
    center_three,
    spans_three,
):
    """
    Builds an authentic 3D macromolecular mesh from MDAnalysis Universe `u` using Molecular Nodes.
    """
    if u is None or len(u.atoms) == 0:
        return None
    try:
        sel = get_mn_partition_selection(u, part_idx, total_parts)
        rgba = hex_to_rgba(color_hex)
        p_mol = mn.entities.Molecule(u, name=piece_name)
        style_choice = "cartoon" if part_idx % 3 != 2 else "ribbon"
        p_mol.add_style(style=style_choice, selection=sel, color=rgba)
        obj = realize_mn_to_mesh(p_mol, decimate_ratio=0.36, max_verts=9500)
        if len(obj.data.vertices) < 30:
            bpy.data.objects.remove(obj, do_unlink=True)
            # Retry with surface style on first chain
            p_mol2 = mn.entities.Molecule(u, name=piece_name)
            p_mol2.add_style(style="surface", selection=sel, color=rgba)
            obj = realize_mn_to_mesh(p_mol2, decimate_ratio=0.35, max_verts=8500)
        if len(obj.data.vertices) < 10:
            bpy.data.objects.remove(obj, do_unlink=True)
            return None
        fit_mesh_to_three_bounds(obj, center_three, spans_three)
        return finalize_piece_object(obj, piece_name, color_hex)
    except Exception as e:
        print(f"  [!] Molecular Nodes style fallback for {piece_name}: {e}")
        return None


def build_phospholipid_bilayer_piece(
    piece_name: str,
    center_three,
    spans_three,
    color_hex: str = "#06D6A0",
    arch_curv: float = 0.0,
    nx: int = 13,
    nz: int = 7,
):
    cx, cy, cz = center_three
    span_x, thickness_y, span_z = spans_three
    bm = bmesh.new()

    dx = span_x / max(nx - 1, 1)
    dz = span_z / max(nz - 1, 1)
    head_r = min(dx, dz) * 0.35
    tail_r = head_r * 0.34
    half_y = max(0.35, thickness_y * 0.38)

    for ix in range(nx):
        x = cx - 0.5 * span_x + ix * dx
        for iz in range(nz):
            z = cz - 0.5 * span_z + iz * dz
            y_arch = -arch_curv * ((x - cx) ** 2)
            for sign in (1.0, -1.0):
                hy = cy + y_arch + sign * half_y
                hb = three_to_blender(x, hy, z)
                bmesh.ops.create_uvsphere(
                    bm, u_segments=8, v_segments=6, radius=head_r, matrix=Matrix.Translation(hb)
                )
                for t_off in (-head_r * 0.40, head_r * 0.40):
                    ty_mid = cy + y_arch + sign * (half_y * 0.48)
                    tb = three_to_blender(x + t_off, ty_mid, z)
                    bmesh.ops.create_cone(
                        bm,
                        cap_ends=True,
                        cap_tris=False,
                        segments=6,
                        radius1=tail_r,
                        radius2=tail_r * 0.82,
                        depth=half_y * 0.85,
                        matrix=Matrix.Translation(tb),
                    )

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    return finalize_piece_object(obj, piece_name, color_hex)


def build_cutaway_shell_piece(piece_name: str, center_three, spans_three, color_hex: str):
    """3/4 surgical cutaway eukaryotic cell plasma membrane + microvilli shell."""
    bm = bmesh.new()
    ret = bmesh.ops.create_uvsphere(bm, u_segments=28, v_segments=18, radius=1.0)
    # Remove front-upper-right octant to create surgical 3/4 cutaway
    to_del = [v for v in bm.verts if v.co.x > -0.15 and v.co.y < -0.10 and v.co.z > -0.25]
    if to_del and len(to_del) < len(bm.verts) - 10:
        bmesh.ops.delete(bm, geom=to_del, context="VERTS")
    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    mod = obj.modifiers.new(name="SolidShell", type="SOLIDIFY")
    mod.thickness = 0.08
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.modifier_apply(modifier="SolidShell")
    fit_mesh_to_three_bounds(obj, center_three, spans_three)
    return finalize_piece_object(obj, piece_name, color_hex)


def build_organelle_or_cisternae_piece(piece_name: str, morph: str, center_three, spans_three, color_hex: str):
    bm = bmesh.new()
    if morph in ("golgi_cisternae", "er_network"):
        n_stacks = 5 if morph == "golgi_cisternae" else 4
        for i in range(n_stacks):
            y_off = (i - 0.5 * (n_stacks - 1)) * 0.38
            r_disk = 1.15 - abs(i - 2) * 0.10
            m_rot = Matrix.Translation(three_to_blender(0.0, y_off, 0.0))
            bmesh.ops.create_cone(
                bm, cap_ends=True, segments=18, radius1=r_disk, radius2=r_disk * 0.94, depth=0.16, matrix=m_rot
            )
            # Coated transport vesicles budding around rim
            for vi in range(6):
                ang = vi * math.pi / 3.0 + i * 0.4
                vx, vz = (r_disk + 0.24) * math.cos(ang), (r_disk + 0.24) * math.sin(ang)
                bmesh.ops.create_uvsphere(
                    bm, u_segments=8, v_segments=6, radius=0.14, matrix=Matrix.Translation(three_to_blender(vx, y_off, vz))
                )
    elif morph in ("mito_organelle", "chloro_organelle", "nucleus_cutaway"):
        # Outer cutaway shell + internal cristae or grana stacks
        bmesh.ops.create_uvsphere(bm, u_segments=20, v_segments=14, radius=1.1)
        to_del = [v for v in bm.verts if v.co.y < -0.15 and v.co.z > -0.1]
        if to_del:
            bmesh.ops.delete(bm, geom=to_del, context="VERTS")
        for i in range(-2, 3):
            x_off = i * 0.34
            bmesh.ops.create_cube(
                bm,
                size=0.22,
                matrix=Matrix.Translation(three_to_blender(x_off, 0.0, 0.0)) @ Matrix.Diagonal((0.45, 2.8, 3.2, 1.0)),
            )
    elif morph in ("cell_wall_plant", "cell_wall_fungal"):
        for iy in range(3):
            y_v = (iy - 1) * 0.36
            for ix in range(-3, 4):
                x_v = ix * 0.38
                bmesh.ops.create_cone(
                    bm,
                    cap_ends=True,
                    segments=8,
                    radius1=0.09,
                    radius2=0.09,
                    depth=2.4,
                    matrix=Matrix.Translation(three_to_blender(x_v, y_v, 0.0)) @ Matrix.Rotation(math.pi / 2, 4, "X"),
                )
            for iz in range(-2, 3):
                z_v = iz * 0.42
                bmesh.ops.create_cone(
                    bm,
                    cap_ends=True,
                    segments=8,
                    radius1=0.09,
                    radius2=0.09,
                    depth=2.6,
                    matrix=Matrix.Translation(three_to_blender(0.0, y_v, z_v)) @ Matrix.Rotation(math.pi / 2, 4, "Y"),
                )
    else:
        # Vesicle cage (polyhedral clathrin / COP triskelion lattice)
        bmesh.ops.create_icosphere(bm, subdivisions=2, radius=1.0)
        bmesh.ops.wireframe(bm, faces=bm.faces[:], thickness=0.11, use_replace=True)
        bmesh.ops.create_uvsphere(bm, u_segments=14, v_segments=10, radius=0.62)

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    fit_mesh_to_three_bounds(obj, center_three, spans_three)
    return finalize_piece_object(obj, piece_name, color_hex)


def build_cytoskeleton_or_ring_piece(piece_name: str, morph: str, center_three, spans_three, color_hex: str):
    bm = bmesh.new()
    if morph == "microtubule_25nm":
        # 13-protofilament hollow tubulin cylinder
        n_pf = 13
        n_rings = 14
        r_cyl = 0.65
        for ir in range(n_rings):
            x_pos = (ir - 0.5 * (n_rings - 1)) * 0.36
            for ip in range(n_pf):
                ang = 2 * math.pi * ip / n_pf + ir * 0.08
                y_pos = r_cyl * math.cos(ang)
                z_pos = r_cyl * math.sin(ang)
                bmesh.ops.create_uvsphere(
                    bm,
                    u_segments=8,
                    v_segments=6,
                    radius=0.16,
                    matrix=Matrix.Translation(three_to_blender(x_pos, y_pos, z_pos)),
                )
    elif morph == "actin_helix":
        # Double-stranded helical F-actin microfilament
        for i in range(26):
            x_pos = (i - 12.5) * 0.24
            ang = i * 0.48
            for sign in (1.0, -1.0):
                y_pos = sign * 0.28 * math.cos(ang)
                z_pos = sign * 0.28 * math.sin(ang)
                bmesh.ops.create_uvsphere(
                    bm,
                    u_segments=9,
                    v_segments=7,
                    radius=0.20,
                    matrix=Matrix.Translation(three_to_blender(x_pos, y_pos, z_pos)),
                )
    elif morph == "if_rope":
        # 4-strand coiled-coil intermediate filament / collagen triple helix
        for i in range(32):
            x_pos = (i - 15.5) * 0.20
            for s in range(4):
                ang = i * 0.35 + s * (math.pi / 2.0)
                y_pos = 0.24 * math.cos(ang)
                z_pos = 0.24 * math.sin(ang)
                bmesh.ops.create_uvsphere(
                    bm,
                    u_segments=8,
                    v_segments=6,
                    radius=0.15,
                    matrix=Matrix.Translation(three_to_blender(x_pos, y_pos, z_pos)),
                )
    elif morph == "axoneme_9plus2":
        # 9 outer microtubule doublets + 2 central singlet microtubules
        for i in range(9):
            ang = 2 * math.pi * i / 9.0
            for off_r in (0.92, 1.08):
                rx = off_r * math.cos(ang)
                ry = off_r * math.sin(ang)
                bmesh.ops.create_cone(
                    bm,
                    cap_ends=True,
                    segments=10,
                    radius1=0.14,
                    radius2=0.14,
                    depth=1.4,
                    matrix=Matrix.Translation(three_to_blender(rx, ry, 0.0)) @ Matrix.Rotation(math.pi / 2, 4, "X"),
                )
        for cx_off in (-0.18, 0.18):
            bmesh.ops.create_cone(
                bm,
                cap_ends=True,
                segments=10,
                radius1=0.14,
                radius2=0.14,
                depth=1.5,
                matrix=Matrix.Translation(three_to_blender(cx_off, 0.0, 0.0)) @ Matrix.Rotation(math.pi / 2, 4, "X"),
            )
    else:
        # DNA/RNA double-helical topological ring / Cohesin / PCNA / Lariat ring
        n_steps = 36
        R_ring = 1.05
        for i in range(n_steps):
            theta = 2 * math.pi * i / n_steps
            twist = theta * 6.0
            for sign in (1.0, -1.0):
                r_local = R_ring + sign * 0.18 * math.cos(twist)
                px = r_local * math.cos(theta)
                py = r_local * math.sin(theta)
                pz = sign * 0.18 * math.sin(twist)
                bmesh.ops.create_uvsphere(
                    bm,
                    u_segments=8,
                    v_segments=6,
                    radius=0.13,
                    matrix=Matrix.Translation(three_to_blender(px, py, pz)),
                )

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    fit_mesh_to_three_bounds(obj, center_three, spans_three)
    return finalize_piece_object(obj, piece_name, color_hex)


# Standard CPK Element Materials for Scenario 36 (prefixed with Mat_CPK_ so Three.js preserves them!)
CPK_COLORS = {
    "C": ("#495057", 0.34),
    "N": ("#3A86FF", 0.33),
    "O": ("#E63946", 0.32),
    "P": ("#F77F00", 0.42),
    "S": ("#FFB703", 0.40),
    "Mg": ("#06D6A0", 0.48),
    "H": ("#F8F9FA", 0.21),
    "BOND": ("#ADB5BD", 0.10),
}


def build_rdkit_cpk_piece(smiles: str, piece_name: str, center_three, spans_three, color_hex: str):
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        return build_cytoskeleton_or_ring_piece(piece_name, "dna_rna_ring", center_three, spans_three, color_hex)
    mol = Chem.AddHs(mol)
    params = AllChem.ETKDGv3()
    params.randomSeed = 42
    if AllChem.EmbedMolecule(mol, params) != 0:
        AllChem.EmbedMolecule(mol, useRandomCoords=True, randomSeed=42)
    try:
        AllChem.MMFFOptimizeMolecule(mol, maxIters=300)
    except Exception:
        pass

    conf = mol.GetConformer()
    n_atoms = mol.GetNumAtoms()
    coords = np.zeros((n_atoms, 3), dtype=float)
    symbols = []
    for i in range(n_atoms):
        p = conf.GetAtomPosition(i)
        coords[i] = [p.x, p.y, p.z]
        symbols.append(mol.GetAtomWithIdx(i).GetSymbol())

    coords -= coords.mean(axis=0)
    min_c, max_c = coords.min(axis=0), coords.max(axis=0)
    span_c = np.maximum(max_c - min_c, 0.5)
    scale = min(spans_three[0] / span_c[0], spans_three[1] / span_c[1], spans_three[2] / span_c[2])
    coords = (coords - 0.5 * (min_c + max_c)) * scale
    coords[:, 0] += center_three[0]
    coords[:, 1] += center_three[1]
    coords[:, 2] += center_three[2]

    bm = bmesh.new()
    mat_order = ["C", "N", "O", "P", "S", "Mg", "H", "BOND"]
    mat_idx_map = {sym: idx for idx, sym in enumerate(mat_order)}
    atom_r_scale = 0.38 * min(max(scale, 0.20), 0.45)

    for i in range(n_atoms):
        sym = symbols[i]
        rad = CPK_COLORS.get(sym, ("#495057", 0.34))[1] * atom_r_scale * 2.2
        ret = bmesh.ops.create_uvsphere(
            bm, u_segments=10, v_segments=8, radius=rad, matrix=Matrix.Translation(three_to_blender(*coords[i]))
        )
        m_idx = mat_idx_map.get(sym, 0)
        for v in ret["verts"]:
            for f in v.link_faces:
                f.material_index = m_idx

    for bond in mol.GetBonds():
        p1 = coords[bond.GetBeginAtomIdx()]
        p2 = coords[bond.GetEndAtomIdx()]
        b1, b2 = three_to_blender(*p1), three_to_blender(*p2)
        vec = b2 - b1
        if vec.length < 1e-4:
            continue
        mid = 0.5 * (b1 + b2)
        rot_q = Vector((0.0, 0.0, 1.0)).rotation_difference(vec.normalized())
        ret = bmesh.ops.create_cone(
            bm,
            cap_ends=True,
            segments=8,
            radius1=0.045,
            radius2=0.045,
            depth=vec.length,
            matrix=Matrix.Translation(mid) @ rot_q.to_matrix().to_4x4(),
        )
        for v in ret["verts"]:
            for f in v.link_faces:
                f.material_index = 7

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.clear()
    for sym in mat_order:
        hex_c, _ = CPK_COLORS[sym]
        obj.data.materials.append(create_pbr_material(f"Mat_CPK_{sym}_{piece_name}", hex_to_rgba(hex_c), roughness=0.28, metalness=0.14))
    return finalize_piece_object(obj, piece_name, color_hex, keep_materials=True)


def export_eukaryote_glb(elem: dict):
    """
    Exports `<id>.glb` to:
      1. `client/public/eukaryote/models/<id>.glb`
      2. `eukaryote/models/<id>.glb`
      3. `eukaryote/roadmap/<folder>/<id>.glb`
      4. `client/dist/eukaryote/models/<id>.glb` (if dist exists)
    """
    glb_name = f"{elem['id']}.glb"
    pub_glb = os.path.join(REPO_DIR, "client", "public", "eukaryote", "models", glb_name)
    models_glb = os.path.join(EUK_DIR, "models", glb_name)
    roadmap_glb = os.path.join(EUK_DIR, "roadmap", elem["folder"], glb_name)
    dist_glb = os.path.join(REPO_DIR, "client", "dist", "eukaryote", "models", glb_name)

    os.makedirs(os.path.dirname(pub_glb), exist_ok=True)
    os.makedirs(os.path.dirname(models_glb), exist_ok=True)
    os.makedirs(os.path.dirname(roadmap_glb), exist_ok=True)

    for obj in bpy.data.objects:
        if obj.type == "MESH":
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            bpy.ops.object.shade_smooth()
            obj.select_set(False)

    bpy.ops.export_scene.gltf(
        filepath=pub_glb,
        export_format="GLB",
        export_yup=True,
        export_apply=True,
        export_materials="EXPORT",
    )
    shutil.copy2(pub_glb, models_glb)
    shutil.copy2(pub_glb, roadmap_glb)
    if os.path.exists(os.path.dirname(dist_glb)):
        shutil.copy2(pub_glb, dist_glb)
    sz_kb = os.path.getsize(pub_glb) / 1024.0
    print(f"  [OK] Exported {glb_name} ({sz_kb:.1f} KB) to client/public/eukaryote/models/ & eukaryote/roadmap/{elem['folder']}/")
