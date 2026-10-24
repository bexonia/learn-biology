"""
euk_editorial_cell_builder.py

Builds the high-resolution "3D Editorial Biomedical Cutaway Diorama" (Adobe Stock #2089488593 style)
for Scenario 01 (`01_eukaryotic_animal_cell`), decomposed into the 7 interactive `Piece_Cell_*` meshes:

1. `Piece_Cell_PlasmaMembrane`:
   - Translucent icy-cyan hemispherical cell bowl + peeled outer left membrane flap
   - Tightly packed 240-unit double-row phospholipid bilayer cut rim (outer/inner cyan hydrophilic head spheres + golden-tan core ring & radial lipid tails)
   - Translucent cytoplasmic gel floor
   - 5 purple transmembrane channel/receptor dimers straddling the bilayer rim with bright-green Y-shaped glycoprotein sugar trees (glycocalyx)
2. `Piece_Cell_Nucleus`:
   - Royal-purple spherical nucleus with a 95° front-left surgical wedge cutaway and lighter-purple cutaway rim walls
   - Thick porous nuclear envelope studded with dark recessed circular Nuclear Pore Complexes (NPCs)
   - Concave periwinkle-lavender cutaway nucleoplasm interior basin
   - Central dark-indigo bumpy Nucleolus sphere
   - Fine hair-like dark-navy 3D chromatin DNA loops nestled inside the cutaway nucleoplasm basin
3. `Piece_Cell_RoughSmoothER`:
   - 4 concentric undulating periwinkle-blue folded ribbon cisternae wrapping ~270° around the Nucleus
   - Flat-sliced sky-blue top edges + dark recessed lumen grooves + 8 Smooth ER tubular cups
   - 350+ tiny dark-navy 80S ribosome spheres studding the Rough ER walls
4. `Piece_Cell_GolgiStack`:
   - Twin polarized closed-loop cisternal ribbon stacks (Bottom-Left in Magenta-Violet, Bottom-Right in Warm Rose-Pink)
   - Flat-sliced lighter pink top edges exposing dark lumen channels + 28 bulbous budding secretory vesicles pinching off the rims
5. `Piece_Cell_Mitochondria`:
   - 5 bean-shaped terracotta-orange mitochondria distributed around the perimeter with flat-sliced tops
   - Recessed dark-umber matrix cavities + deep transverse apricot-orange inner-membrane cristae folds
6. `Piece_Cell_CytoskeletonCentrosome`:
   - 3 orthogonal golden-tan 9x3 microtubule-triplet Centriole barrels at the middle-left centrosome
   - 30 crisscrossing beige/tan cytoskeletal microtubule & intermediate filament cables across the cytoplasm floor
   - 150 free cytosolic ribosome granules
7. `Piece_Cell_LysosomePeroxisome`:
   - Intact glossy lavender/ice-blue spherical lysosomes & peroxisomes with inner granular cores + half-sliced cup-shaped endosomes
"""

import math
import bpy
import bmesh
import numpy as np
from mathutils import Vector, Matrix, Euler


def hex_to_rgba(hex_str: str, alpha: float = 1.0):
    h = hex_str.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    r = int(h[0:2], 16) / 255.0
    g = int(h[2:4], 16) / 255.0
    b = int(h[4:6], 16) / 255.0
    return (r, g, b, alpha)


def get_bio_material(name: str, hex_color: str, roughness: float = 0.28, metalness: float = 0.04, alpha: float = 1.0):
    """
    Creates a `Mat_Bio_*` PBR material that is preserved by Three.js (`eukaryoteScenarioScene.ts`)
    and upgraded to `THREE.MeshPhysicalMaterial` with subsurface scattering & clearcoat.
    """
    mat_name = f"Mat_Bio_{name}"
    if mat_name in bpy.data.materials:
        return bpy.data.materials[mat_name]
    mat = bpy.data.materials.new(name=mat_name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    rgba = hex_to_rgba(hex_color, alpha)
    if bsdf:
        bsdf.inputs["Base Color"].default_value = rgba
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Metallic"].default_value = metalness
        if alpha < 0.999:
            if "Alpha" in bsdf.inputs:
                bsdf.inputs["Alpha"].default_value = alpha
            mat.blend_method = "BLEND"
    mat.diffuse_color = rgba
    return mat


def assign_mat(obj, mat):
    obj.data.materials.clear()
    obj.data.materials.append(mat)
    return obj


def join_and_tilt_piece(objs, piece_name: str, tilt_deg: float = 24.0):
    """
    Joins multiple multi-material objects into a single named `Piece_Cell_*` mesh
    and tilts it forward toward the camera (`-Y_blender` = `+Z_three`) so the diorama bowl
    faces the viewer at the exact Adobe Stock 3/4 angle.
    """
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
    joined.name = piece_name
    joined.data.name = piece_name

    # Apply the forward diorama tilt around X_blender so +Z_blender tilts toward -Y_blender (+Z_three camera)
    rot_mat = Matrix.Rotation(math.radians(tilt_deg), 4, "X")
    joined.data.transform(rot_mat)
    joined.data.update()

    bpy.ops.object.shade_smooth()
    return joined


def make_sphere_mesh(bm, center: Vector, radius: float, segs: int = 16, rings: int = 12, scale_xyz=(1.0, 1.0, 1.0)):
    ret = bmesh.ops.create_uvsphere(bm, u_segments=segs, v_segments=rings, radius=radius)
    verts = ret["verts"]
    for v in verts:
        v.co.x = v.co.x * scale_xyz[0] + center.x
        v.co.y = v.co.y * scale_xyz[1] + center.y
        v.co.z = v.co.z * scale_xyz[2] + center.z
    return verts


def make_cylinder_between(bm, p1: Vector, p2: Vector, radius: float, segs: int = 8):
    vec = p2 - p1
    length = vec.length
    if length < 1e-5:
        return
    mid = 0.5 * (p1 + p2)
    rot = Vector((0, 0, 1)).rotation_difference(vec.normalized()).to_matrix().to_4x4()
    xform = Matrix.Translation(mid) @ rot
    bmesh.ops.create_cone(
        bm,
        cap_ends=True,
        cap_tris=False,
        segments=segs,
        radius1=radius,
        radius2=radius,
        depth=length,
        matrix=xform,
    )


def create_mesh_object(name: str, bm: bmesh.types.BMesh, mat):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    obj = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(obj)
    assign_mat(obj, mat)
    return obj


def build_flat_topped_ribbon_loop(
    name_prefix: str,
    pts_2d: list,
    z_bottom: float,
    z_top: float,
    half_width: float,
    groove_depth: float,
    mat_wall,
    mat_top_rim,
    mat_lumen,
    closed: bool = True,
):
    """
    Constructs a thick 3D folded organelle ribbon (for ER, Golgi, or Cristae) with:
    1. Smooth outer side walls (`mat_wall`)
    2. Flat-sliced lighter top rim (`mat_top_rim`)
    3. Recessed dark inner lumen channel (`mat_lumen`)
    """
    n = len(pts_2d)
    if n < 3:
        return []

    bm_wall = bmesh.new()
    bm_rim = bmesh.new()
    bm_lumen = bmesh.new()

    normals_2d = []
    for i in range(n):
        p_prev = pts_2d[(i - 1) % n] if closed else pts_2d[max(0, i - 1)]
        p_next = pts_2d[(i + 1) % n] if closed else pts_2d[min(n - 1, i + 1)]
        tang = Vector((p_next[0] - p_prev[0], p_next[1] - p_prev[1]))
        if tang.length < 1e-6:
            n2 = Vector((1.0, 0.0))
        else:
            tang.normalize()
            n2 = Vector((-tang.y, tang.x))
        normals_2d.append(n2)

    w_out = half_width
    w_in = half_width * 0.44
    z_groove = z_top - groove_depth

    wall_rings = []
    rim_rings = []
    lum_rings = []

    for i in range(n):
        px, py = pts_2d[i]
        nx, ny = normals_2d[i].x, normals_2d[i].y

        # Outer wall vertices (left outer bottom/top, right outer bottom/top)
        v_lo_b = bm_wall.verts.new((px - nx * (w_out * 0.85), py - ny * (w_out * 0.85), z_bottom))
        v_lo_m = bm_wall.verts.new((px - nx * (w_out * 1.05), py - ny * (w_out * 1.05), 0.5 * (z_bottom + z_top)))
        v_lo_t = bm_wall.verts.new((px - nx * w_out, py - ny * w_out, z_top))
        v_ro_t = bm_wall.verts.new((px + nx * w_out, py + ny * w_out, z_top))
        v_ro_m = bm_wall.verts.new((px + nx * (w_out * 1.05), py + ny * (w_out * 1.05), 0.5 * (z_bottom + z_top)))
        v_ro_b = bm_wall.verts.new((px + nx * (w_out * 0.85), py + ny * (w_out * 0.85), z_bottom))
        wall_rings.append((v_lo_b, v_lo_m, v_lo_t, v_ro_t, v_ro_m, v_ro_b))

        # Flat top rim vertices (left outer -> left inner, right inner -> right outer)
        r_lo = bm_rim.verts.new((px - nx * w_out, py - ny * w_out, z_top))
        r_li = bm_rim.verts.new((px - nx * w_in, py - ny * w_in, z_top))
        r_ri = bm_rim.verts.new((px + nx * w_in, py + ny * w_in, z_top))
        r_ro = bm_rim.verts.new((px + nx * w_out, py + ny * w_out, z_top))
        rim_rings.append((r_lo, r_li, r_ri, r_ro))

        # Recessed dark lumen channel
        l_li = bm_lumen.verts.new((px - nx * w_in, py - ny * w_in, z_top))
        l_lb = bm_lumen.verts.new((px - nx * (w_in * 0.7), py - ny * (w_in * 0.7), z_groove))
        l_rb = bm_lumen.verts.new((px + nx * (w_in * 0.7), py + ny * (w_in * 0.7), z_groove))
        l_ri = bm_lumen.verts.new((px + nx * w_in, py + ny * w_in, z_top))
        lum_rings.append((l_li, l_lb, l_rb, l_ri))

    num_segs = n if closed else (n - 1)
    for i in range(num_segs):
        j = (i + 1) % n
        w0 = wall_rings[i]
        w1 = wall_rings[j]
        try:
            bm_wall.faces.new((w0[0], w1[0], w1[1], w0[1]))
            bm_wall.faces.new((w0[1], w1[1], w1[2], w0[2]))
            bm_wall.faces.new((w0[3], w1[3], w1[4], w0[4]))
            bm_wall.faces.new((w0[4], w1[4], w1[5], w0[5]))
            bm_wall.faces.new((w0[5], w1[5], w1[0], w0[0]))
        except ValueError:
            pass

        r0 = rim_rings[i]
        r1 = rim_rings[j]
        try:
            bm_rim.faces.new((r0[0], r1[0], r1[1], r0[1]))
            bm_rim.faces.new((r0[2], r1[2], r1[3], r0[3]))
        except ValueError:
            pass

        l0 = lum_rings[i]
        l1 = lum_rings[j]
        try:
            bm_lumen.faces.new((l0[0], l1[0], l1[1], l0[1]))
            bm_lumen.faces.new((l0[1], l1[1], l1[2], l0[2]))
            bm_lumen.faces.new((l0[2], l1[2], l1[3], l0[3]))
        except ValueError:
            pass

    if not closed:
        for end_idx in (0, n - 1):
            w = wall_rings[end_idx]
            r = rim_rings[end_idx]
            try:
                bm_wall.faces.new((w[0], w[1], w[2], w[3], w[4], w[5]))
                bm_rim.faces.new((r[0], r[1], r[2], r[3]))
            except ValueError:
                pass

    bmesh.ops.recalc_face_normals(bm_wall, faces=bm_wall.faces)
    bmesh.ops.recalc_face_normals(bm_rim, faces=bm_rim.faces)
    bmesh.ops.recalc_face_normals(bm_lumen, faces=bm_lumen.faces)

    return [
        create_mesh_object(f"{name_prefix}_Wall", bm_wall, mat_wall),
        create_mesh_object(f"{name_prefix}_Rim", bm_rim, mat_top_rim),
        create_mesh_object(f"{name_prefix}_Lumen", bm_lumen, mat_lumen),
    ]


# ==============================================================================
# 1. Piece_Cell_PlasmaMembrane
# ==============================================================================
def build_piece_plasma_membrane():
    objs = []
    mat_bowl = get_bio_material("CellBowlGlass", "#3C99DC", roughness=0.14, metalness=0.05, alpha=0.48)
    mat_flap = get_bio_material("CellPeeledFlap", "#5EC2F0", roughness=0.18, metalness=0.05, alpha=0.58)
    mat_cytosol = get_bio_material("CytosolFloor", "#1D4E6B", roughness=0.36, metalness=0.04, alpha=0.88)
    mat_head = get_bio_material("LipidHeadCyan", "#7CE8FF", roughness=0.20, metalness=0.08)
    mat_tail = get_bio_material("LipidTailGold", "#C9A862", roughness=0.36, metalness=0.08)
    mat_chan = get_bio_material("ChannelPurple", "#744BC4", roughness=0.26, metalness=0.06)
    mat_glyc = get_bio_material("GlycanGreen", "#5CE675", roughness=0.24, metalness=0.05)

    R_outer = 5.68
    R_inner = 5.46
    R_lip = 5.92

    # A. Outer hemispherical bowl (z <= 0) with thick translucent icy-blue outer rim lip
    bm_bowl = bmesh.new()
    bmesh.ops.create_uvsphere(bm_bowl, u_segments=72, v_segments=36, radius=R_lip)
    del_v = [v for v in bm_bowl.verts if v.co.z > 0.02]
    bmesh.ops.delete(bm_bowl, geom=del_v, context="VERTS")
    for v in bm_bowl.verts:
        if v.co.z > -0.08:
            v.co.z = 0.0
        else:
            v.co.z *= 0.62
    bmesh.ops.recalc_face_normals(bm_bowl, faces=bm_bowl.faces)
    bowl_obj = create_mesh_object("PM_Bowl", bm_bowl, mat_bowl)
    solid_bowl = bowl_obj.modifiers.new(name="Solid_Bowl", type="SOLIDIFY")
    solid_bowl.thickness = 0.24
    solid_bowl.offset = -1.0
    bpy.context.view_layer.objects.active = bowl_obj
    bpy.ops.object.modifier_apply(modifier="Solid_Bowl")
    objs.append(bowl_obj)

    # B. Peeled outer membrane layer on the left (matching the left side of the Adobe Stock image)
    bm_flap = bmesh.new()
    bmesh.ops.create_uvsphere(bm_flap, u_segments=56, v_segments=28, radius=R_lip + 0.22)
    del_f = []
    for v in bm_flap.verts:
        ang = math.degrees(math.atan2(v.co.y, v.co.x))
        if not (132.0 <= ang <= 218.0 and -2.2 <= v.co.z <= 0.12):
            del_f.append(v)
        else:
            v.co.z *= 0.62
    bmesh.ops.delete(bm_flap, geom=del_f, context="VERTS")
    bmesh.ops.recalc_face_normals(bm_flap, faces=bm_flap.faces)
    flap_obj = create_mesh_object("PM_PeeledFlap", bm_flap, mat_flap)
    solid_flap = flap_obj.modifiers.new(name="Solid_Flap", type="SOLIDIFY")
    solid_flap.thickness = 0.16
    solid_flap.offset = -1.0
    bpy.context.view_layer.objects.active = flap_obj
    bpy.ops.object.modifier_apply(modifier="Solid_Flap")
    objs.append(flap_obj)

    # C. Cytoplasmic gel floor disc inside the bowl
    bm_floor = bmesh.new()
    bmesh.ops.create_cone(
        bm_floor,
        cap_ends=True,
        cap_tris=False,
        segments=72,
        radius1=R_inner - 0.04,
        radius2=R_inner + 0.02,
        depth=0.18,
        matrix=Matrix.Translation((0.0, 0.0, -0.34)),
    )
    objs.append(create_mesh_object("PM_CytosolFloor", bm_floor, mat_cytosol))

    # D. Tightly Packed Double-Row Phospholipid Bilayer Rim (260 pairs around perimeter + continuous golden lipid core band)
    bm_heads = bmesh.new()
    bm_tails = bmesh.new()

    # Continuous golden-tan hydrophobic core band inside the bilayer rim so there are no dark gaps
    n_ring = 140
    ring_verts = []
    r_core_out = R_outer - 0.015
    r_core_in = R_inner + 0.015
    for i in range(n_ring):
        th = (2.0 * math.pi * i) / n_ring
        cx, sy = math.cos(th), math.sin(th)
        vo_t = bm_tails.verts.new((r_core_out * cx, r_core_out * sy, 0.022))
        vi_t = bm_tails.verts.new((r_core_in * cx, r_core_in * sy, 0.022))
        vi_b = bm_tails.verts.new((r_core_in * cx, r_core_in * sy, -0.05))
        vo_b = bm_tails.verts.new((r_core_out * cx, r_core_out * sy, -0.05))
        ring_verts.append((vo_t, vi_t, vi_b, vo_b))
    for i in range(n_ring):
        j = (i + 1) % n_ring
        r0 = ring_verts[i]
        r1 = ring_verts[j]
        try:
            bm_tails.faces.new((r0[0], r1[0], r1[1], r0[1]))
            bm_tails.faces.new((r0[1], r1[1], r1[2], r0[2]))
            bm_tails.faces.new((r0[3], r1[3], r1[0], r0[0]))
        except ValueError:
            pass

    n_lipids = 260
    for i in range(n_lipids):
        th = (2.0 * math.pi * i) / n_lipids
        cx, sy = math.cos(th), math.sin(th)
        p_out = Vector((R_outer * cx, R_outer * sy, 0.028))
        p_in = Vector((R_inner * cx, R_inner * sy, 0.028))
        make_sphere_mesh(bm_heads, p_out, 0.038, segs=7, rings=5)
        make_sphere_mesh(bm_heads, p_in, 0.037, segs=7, rings=5)

        p_mid_o = Vector(((R_outer - 0.032) * cx, (R_outer - 0.032) * sy, 0.026))
        p_mid_i = Vector(((R_inner + 0.032) * cx, (R_inner + 0.032) * sy, 0.026))
        make_cylinder_between(bm_tails, p_mid_o, p_mid_i, 0.012, segs=5)

    bmesh.ops.recalc_face_normals(bm_tails, faces=bm_tails.faces)
    objs.append(create_mesh_object("PM_LipidHeads", bm_heads, mat_head))
    objs.append(create_mesh_object("PM_LipidTails", bm_tails, mat_tail))

    # E. Purple Transmembrane Channel Dimers + Bright-Green Y-Shaped Glycoprotein Chains
    bm_chan = bmesh.new()
    bm_glyc = bmesh.new()
    channel_angles_deg = [118.0, 62.0, 28.0, -55.0, -122.0]
    r_mid = 0.5 * (R_outer + R_inner)
    for ang_d in channel_angles_deg:
        th = math.radians(ang_d)
        cx, sy = math.cos(th), math.sin(th)
        tang = Vector((-sy, cx, 0.0))
        rad_dir = Vector((cx, sy, 0.0))
        base = Vector((r_mid * cx, r_mid * sy, 0.04))

        # Bilobed purple channel dimer straddling the membrane rim
        make_sphere_mesh(bm_chan, base - tang * 0.12, 0.19, segs=12, rings=10, scale_xyz=(1.0, 1.0, 1.45))
        make_sphere_mesh(bm_chan, base + tang * 0.12, 0.19, segs=12, rings=10, scale_xyz=(1.0, 1.0, 1.45))

        # Branched green Y-shaped glycoprotein sugar chain sticking radially outward
        stem_start = base + rad_dir * 0.16 + Vector((0, 0, 0.20))
        stem_mid = stem_start + rad_dir * 0.30 + Vector((0, 0, 0.16))
        branch_1 = stem_mid + (rad_dir * 0.25 + tang * 0.20 + Vector((0, 0, 0.14)))
        branch_2 = stem_mid + (rad_dir * 0.25 - tang * 0.20 + Vector((0, 0, 0.14)))

        for t_f in (0.0, 0.35, 0.7, 1.0):
            pt = stem_start.lerp(stem_mid, t_f)
            make_sphere_mesh(bm_glyc, pt, 0.052, segs=8, rings=6)
        for t_f in (0.35, 0.7, 1.0):
            make_sphere_mesh(bm_glyc, stem_mid.lerp(branch_1, t_f), 0.046, segs=8, rings=6)
            make_sphere_mesh(bm_glyc, stem_mid.lerp(branch_2, t_f), 0.046, segs=8, rings=6)

    objs.append(create_mesh_object("PM_Channels", bm_chan, mat_chan))
    objs.append(create_mesh_object("PM_Glycans", bm_glyc, mat_glyc))

    return join_and_tilt_piece(objs, "Piece_Cell_PlasmaMembrane")


# ==============================================================================
# 2. Piece_Cell_Nucleus
# ==============================================================================
def build_piece_nucleus():
    objs = []
    mat_env = get_bio_material("NucleusEnvelope", "#623AA2", roughness=0.30, metalness=0.04)
    mat_rim = get_bio_material("NucleusCutRim", "#9575DE", roughness=0.22, metalness=0.04)
    mat_pore = get_bio_material("NuclearPoreDark", "#1F0E3D", roughness=0.45, metalness=0.05)
    mat_plasm = get_bio_material("NucleoplasmLavender", "#7C88D4", roughness=0.32, metalness=0.03)
    mat_nucleolus = get_bio_material("NucleolusDeep", "#1F1647", roughness=0.35, metalness=0.08)
    mat_chromatin = get_bio_material("ChromatinThreads", "#161133", roughness=0.30, metalness=0.06)

    nuc_center = Vector((0.55, 0.65, 0.35))
    R_nuc = 1.92
    R_in = 1.66

    # A. Outer Nuclear Envelope with front-left (-X, -Y, +Z) surgical wedge removed
    bm_env = bmesh.new()
    bmesh.ops.create_uvsphere(bm_env, u_segments=56, v_segments=36, radius=R_nuc)
    del_v = []
    for v in bm_env.verts:
        if v.co.z < -0.55 or (v.co.x < 0.22 and v.co.y < 0.32 and v.co.z > -0.12):
            del_v.append(v)
        else:
            v.co += nuc_center
    bmesh.ops.delete(bm_env, geom=del_v, context="VERTS")
    bmesh.ops.recalc_face_normals(bm_env, faces=bm_env.faces)
    env_obj = create_mesh_object("Nuc_Envelope", bm_env, mat_env)
    env_obj.data.materials.append(mat_rim)
    solid = env_obj.modifiers.new(name="Solid_Nuc", type="SOLIDIFY")
    solid.thickness = 0.22
    solid.offset = -1.0
    solid.material_offset = 1
    solid.material_offset_rim = 1
    bpy.context.view_layer.objects.active = env_obj
    bpy.ops.object.modifier_apply(modifier="Solid_Nuc")
    objs.append(env_obj)

    # B. Concave Periwinkle-Lavender Cutaway Nucleoplasm Interior Basin
    bm_plasm = bmesh.new()
    bmesh.ops.create_uvsphere(bm_plasm, u_segments=48, v_segments=32, radius=R_in)
    for v in bm_plasm.verts:
        if v.co.z < -0.50:
            v.co.z = -0.50
        # Carve the front-left quadrant into a smooth concave cutaway basin around the nucleolus
        if v.co.x < 0.28 and v.co.y < 0.38 and v.co.z > -0.15:
            # Smoothly blend into the three cutaway planes (x = 0.22, y = 0.32, z = -0.10)
            tx = max(0.0, (0.28 - v.co.x) / 1.8)
            ty = max(0.0, (0.38 - v.co.y) / 1.8)
            tz = max(0.0, (v.co.z + 0.15) / 1.8)
            cut_factor = min(1.0, (tx * ty * tz) ** 0.35 * 1.65)
            target = Vector((min(v.co.x, 0.18), min(v.co.y, 0.28), -0.08))
            v.co = v.co.lerp(target, cut_factor)
        v.co += nuc_center
    bmesh.ops.recalc_face_normals(bm_plasm, faces=bm_plasm.faces)
    objs.append(create_mesh_object("Nuc_Nucleoplasm", bm_plasm, mat_plasm))

    # C. Dense Dark-Indigo Central Nucleolus Sphere nestled inside the cutaway cavity
    bm_nlo = bmesh.new()
    bmesh.ops.create_uvsphere(bm_nlo, u_segments=36, v_segments=24, radius=0.60)
    for v in bm_nlo.verts:
        bump = 1.0 + 0.045 * math.sin(v.co.x * 7.5) * math.cos(v.co.y * 7.5) * math.sin(v.co.z * 7.5)
        v.co = v.co * bump + nuc_center + Vector((-0.02, 0.02, 0.22))
    bmesh.ops.recalc_face_normals(bm_nlo, faces=bm_nlo.faces)
    objs.append(create_mesh_object("Nuc_Nucleolus", bm_nlo, mat_nucleolus))

    # D. Dark Recessed Nuclear Pore Complexes (NPCs) dotting the nuclear dome
    bm_pores = bmesh.new()
    golden_angle = math.pi * (3.0 - math.sqrt(5.0))
    for i in range(44):
        z_local = -0.22 + (1.92 * i) / 43.0
        if z_local >= R_nuc - 0.14:
            continue
        r_ring = math.sqrt(max(0.01, R_nuc * R_nuc - z_local * z_local))
        th = i * golden_angle
        lx = r_ring * math.cos(th)
        ly = r_ring * math.sin(th)
        if lx < 0.32 and ly < 0.42 and z_local > -0.15:
            continue
        p_pos = nuc_center + Vector((lx, ly, z_local))
        make_sphere_mesh(bm_pores, p_pos, 0.078, segs=10, rings=8)
    objs.append(create_mesh_object("Nuc_Pores", bm_pores, mat_pore))

    # E. Fine Hair-Like Dark-Indigo Chromatin Threads inside the cutaway nucleoplasm basin
    bm_chr = bmesh.new()
    rng = np.random.default_rng(105)
    nlo_c = nuc_center + Vector((-0.02, 0.02, 0.22))
    for loop_i in range(28):
        # Constrain chromatin loops to the cutaway basin & inner nucleoplasm walls
        th_start = rng.uniform(0.65 * math.pi, 1.92 * math.pi)
        r_mid = rng.uniform(0.66, 1.38)
        z_off = rng.uniform(-0.04, 0.42)
        pts = []
        for s in range(22):
            t = (2.0 * math.pi * s) / 21.0
            ang = th_start + 0.38 * math.sin(t) + 0.15 * math.cos(2.0 * t)
            rr = r_mid + 0.16 * math.cos(2.0 * t + loop_i)
            lx = rr * math.cos(ang)
            ly = rr * math.sin(ang)
            lz = -0.03 + 0.12 * abs(math.sin(t + loop_i * 0.5))
            if lx > -0.05 and ly > -0.05:
                lz += z_off * 0.65
            pt = nuc_center + Vector((lx, ly, lz))
            # Keep outside nucleolus sphere and inside R_in
            to_nlo = pt - nlo_c
            if to_nlo.length < 0.65:
                pt = nlo_c + to_nlo.normalized() * 0.65
            to_c = pt - nuc_center
            if to_c.length > R_in - 0.10:
                pt = nuc_center + to_c.normalized() * (R_in - 0.10)
            pts.append(pt)
        for s in range(len(pts) - 1):
            make_cylinder_between(bm_chr, pts[s], pts[s + 1], 0.013, segs=6)
    objs.append(create_mesh_object("Nuc_Chromatin", bm_chr, mat_chromatin))

    return join_and_tilt_piece(objs, "Piece_Cell_Nucleus")


# ==============================================================================
# 3. Piece_Cell_RoughSmoothER
# ==============================================================================
def build_piece_rough_smooth_er():
    objs = []
    mat_wall = get_bio_material("ERWallBlue", "#3B62B8", roughness=0.28, metalness=0.05)
    mat_rim = get_bio_material("ERTopRimLight", "#80B0FF", roughness=0.20, metalness=0.04)
    mat_lumen = get_bio_material("ERLumenDark", "#12204A", roughness=0.48, metalness=0.05)
    mat_ribo = get_bio_material("RibosomeDarkNavy", "#10172E", roughness=0.35, metalness=0.10)

    nuc_cx, nuc_cy = 0.55, 0.65

    # Build 4 concentric wavy cisternal arcs wrapping around the Nucleus (like the Adobe Stock photo)
    arc_configs = [
        # (radius, theta_start_deg, theta_end_deg, n_lobes, lobe_amp, half_w)
        (2.30, 115.0, 395.0, 7, 0.16, 0.135),
        (2.72, 100.0, 405.0, 9, 0.18, 0.135),
        (3.15, 110.0, 390.0, 11, 0.20, 0.145),
        (3.58, 130.0, 355.0, 9, 0.18, 0.135),
    ]

    ribo_bm = bmesh.new()

    for idx, (r_base, th0_d, th1_d, lobes, amp, hw) in enumerate(arc_configs):
        pts_2d = []
        n_pts = 90
        for i in range(n_pts):
            t_f = i / float(n_pts - 1)
            th = math.radians(th0_d + (th1_d - th0_d) * t_f)
            wave = amp * math.sin(lobes * th + idx * 1.1) + 0.07 * math.cos((lobes * 2) * th)
            r = r_base + wave
            px = nuc_cx + r * math.cos(th)
            py = nuc_cy + r * math.sin(th)
            dist_origin = math.hypot(px, py)
            if dist_origin > 5.02:
                px *= 5.02 / dist_origin
                py *= 5.02 / dist_origin
            pts_2d.append((px, py))

        objs.extend(
            build_flat_topped_ribbon_loop(
                f"ER_Arc_{idx}",
                pts_2d,
                z_bottom=-0.30,
                z_top=0.36 - idx * 0.02,
                half_width=hw,
                groove_depth=0.22,
                mat_wall=mat_wall,
                mat_top_rim=mat_rim,
                mat_lumen=mat_lumen,
                closed=False,
            )
        )

        # Stud the outer and inner faces of the ER ribbon with dark 80S Ribosome spheres
        for i in range(2, n_pts - 2, 2):
            px, py = pts_2d[i]
            p_next = pts_2d[i + 1]
            tang = Vector((p_next[0] - px, p_next[1] - py))
            if tang.length < 1e-5:
                continue
            tang.normalize()
            n2 = Vector((-tang.y, tang.x))
            for side in (-1.0, 1.0):
                for z_r in (0.10, 0.25):
                    if (i + int(side * 3) + int(z_r * 20)) % 3 == 0:
                        rx = px + n2.x * side * (hw + 0.026)
                        ry = py + n2.y * side * (hw + 0.026)
                        make_sphere_mesh(ribo_bm, Vector((rx, ry, z_r)), 0.034, segs=6, rings=5)

    # Add Smooth ER tubular finger-cups around the outer ER periphery
    tubule_angles = [102.0, 128.0, 162.0, 358.0, 382.0, 408.0]
    for t_idx, ang_d in enumerate(tubule_angles):
        th = math.radians(ang_d)
        r_t = 3.62 if t_idx % 2 == 0 else 4.02
        cx = nuc_cx + r_t * math.cos(th)
        cy = nuc_cy + r_t * math.sin(th)
        if math.hypot(cx, cy) > 4.95:
            continue
        pts_cup = [
            (cx + 0.19 * math.cos(2.0 * math.pi * k / 18.0), cy + 0.19 * math.sin(2.0 * math.pi * k / 18.0))
            for k in range(18)
        ]
        objs.extend(
            build_flat_topped_ribbon_loop(
                f"SER_Cup_{t_idx}",
                pts_cup,
                z_bottom=-0.30,
                z_top=0.26,
                half_width=0.062,
                groove_depth=0.20,
                mat_wall=mat_wall,
                mat_top_rim=mat_rim,
                mat_lumen=mat_lumen,
                closed=True,
            )
        )

    objs.append(create_mesh_object("ER_Ribosomes", ribo_bm, mat_ribo))
    return join_and_tilt_piece(objs, "Piece_Cell_RoughSmoothER")


# ==============================================================================
# 4. Piece_Cell_GolgiStack
# ==============================================================================
def build_single_golgi_stack(prefix: str, center_xy, angle_deg: float, wall_hex: str, rim_hex: str, lum_hex: str):
    objs = []
    mat_wall = get_bio_material(f"{prefix}_Wall", wall_hex, roughness=0.26, metalness=0.04)
    mat_rim = get_bio_material(f"{prefix}_Rim", rim_hex, roughness=0.20, metalness=0.04)
    mat_lumen = get_bio_material(f"{prefix}_Lumen", lum_hex, roughness=0.48, metalness=0.04)

    cx, cy = center_xy
    rot = math.radians(angle_deg)
    cos_r, sin_r = math.cos(rot), math.sin(rot)

    def to_world(lx, ly):
        return (cx + lx * cos_r - ly * sin_r, cy + lx * sin_r + ly * cos_r)

    bm_ves = bmesh.new()

    # 6 stacked curved cisternae ribbons with smooth rounded club-shaped ends
    n_cist = 6
    for c_i in range(n_cist):
        y_off = (c_i - (n_cist - 1) * 0.5) * 0.27
        span_x = 1.15 - abs(c_i - 2.5) * 0.09
        pts_2d = []
        n_pts = 40
        for k in range(n_pts):
            u = -1.0 + (2.0 * k) / float(n_pts - 1)
            lx = u * span_x
            ly = y_off + 0.15 * (1.0 - u * u) + 0.035 * math.cos(u * math.pi * 2.5)
            pts_2d.append(to_world(lx, ly))

        objs.extend(
            build_flat_topped_ribbon_loop(
                f"{prefix}_Cist_{c_i}",
                pts_2d,
                z_bottom=-0.28,
                z_top=0.33,
                half_width=0.088,
                groove_depth=0.20,
                mat_wall=mat_wall,
                mat_top_rim=mat_rim,
                mat_lumen=mat_lumen,
                closed=False,
            )
        )

        # Add smooth rounded end-bulbs + detached budding secretory vesicles at both ends of each cisterna
        for end_pt, dir_sign in ((pts_2d[0], -1.0), (pts_2d[-1], 1.0)):
            make_sphere_mesh(bm_ves, Vector((end_pt[0], end_pt[1], 0.04)), 0.115, segs=12, rings=10, scale_xyz=(1.0, 1.0, 2.1))
            vx, vy = to_world(dir_sign * (span_x + 0.24), y_off + 0.05 * dir_sign)
            make_sphere_mesh(bm_ves, Vector((vx, vy, 0.11)), 0.11, segs=12, rings=10)

    objs.append(create_mesh_object(f"{prefix}_Vesicles", bm_ves, mat_wall))
    return objs


def build_piece_golgi_stack():
    objs = []
    # Golgi Stack A (Bottom-Left — Rich Magenta-Violet like Adobe Stock photo)
    objs.extend(
        build_single_golgi_stack(
            "GolgiLeft",
            center_xy=(-1.72, -2.12),
            angle_deg=-32.0,
            wall_hex="#A63488",
            rim_hex="#E688CE",
            lum_hex="#36092A",
        )
    )
    # Golgi Stack B (Bottom-Right — Rich Warm Rose-Crimson like Adobe Stock photo)
    objs.extend(
        build_single_golgi_stack(
            "GolgiRight",
            center_xy=(2.02, -2.02),
            angle_deg=24.0,
            wall_hex="#BD3A69",
            rim_hex="#F595B6",
            lum_hex="#3D0B1E",
        )
    )
    return join_and_tilt_piece(objs, "Piece_Cell_GolgiStack")


# ==============================================================================
# 5. Piece_Cell_Mitochondria
# ==============================================================================
def build_single_sliced_mitochondrion(idx: int, center_xy, angle_deg: float, length: float = 1.65, width: float = 0.86):
    objs = []
    mat_outer = get_bio_material("MitoOuterOrange", "#D95B16", roughness=0.26, metalness=0.04)
    mat_rim = get_bio_material("MitoCristaeApricot", "#F7A052", roughness=0.20, metalness=0.04)
    mat_matrix = get_bio_material("MitoMatrixUmber", "#3D1605", roughness=0.50, metalness=0.04)

    cx, cy = center_xy
    rot = math.radians(angle_deg)
    cos_r, sin_r = math.cos(rot), math.sin(rot)

    def to_world(lx, ly):
        # Kidney-bean bend
        ly_bean = ly + 0.10 * (1.0 - (lx / (0.5 * length)) ** 2)
        return (cx + lx * cos_r - ly_bean * sin_r, cy + lx * sin_r + ly_bean * cos_r)

    # A. Outer Bean Capsule Shell (sliced flat at z_top = 0.22)
    bm_hull = bmesh.new()
    bmesh.ops.create_uvsphere(bm_hull, u_segments=40, v_segments=22, radius=1.0)
    for v in bm_hull.verts:
        lx = v.co.x * (0.5 * length)
        ly = v.co.y * (0.5 * width)
        lz = v.co.z * 0.36
        if lz > 0.22:
            lz = 0.22
        wx, wy = to_world(lx, ly)
        v.co = Vector((wx, wy, lz))
    bmesh.ops.recalc_face_normals(bm_hull, faces=bm_hull.faces)
    objs.append(create_mesh_object(f"Mito_{idx}_Hull", bm_hull, mat_outer))

    # B. Exposed Dark-Umber Matrix Cavity Floor on top of the sliced hull (z = 0.232)
    bm_mat = bmesh.new()
    bmesh.ops.create_uvsphere(bm_mat, u_segments=36, v_segments=18, radius=1.0)
    del_mv = [v for v in bm_mat.verts if v.co.z < 0.0]
    bmesh.ops.delete(bm_mat, geom=del_mv, context="VERTS")
    for v in bm_mat.verts:
        lx = v.co.x * (0.5 * length * 0.88)
        ly = v.co.y * (0.5 * width * 0.84)
        wx, wy = to_world(lx, ly)
        v.co = Vector((wx, wy, 0.232))
    bmesh.ops.recalc_face_normals(bm_mat, faces=bm_mat.faces)
    objs.append(create_mesh_object(f"Mito_{idx}_Matrix", bm_mat, mat_matrix))

    # C. Deep Serpentine Inner-Membrane Cristae Ribbon Loop on top of the dark matrix cavity
    pts_cristae = []
    n_c = 140
    for k in range(n_c):
        th = (2.0 * math.pi * k) / float(n_c)
        # 5 deep transverse finger-like cristae folds from both top and bottom bean walls
        env = math.sin(th) ** 2
        fold = 0.68 * env * (abs(math.sin(5.0 * th)) ** 6)
        r_scale = 0.90 - fold
        lx = math.cos(th) * (0.5 * length * 0.90)
        ly = math.sin(th) * (0.5 * width * 0.88) * r_scale
        pts_cristae.append(to_world(lx, ly))

    objs.extend(
        build_flat_topped_ribbon_loop(
            f"Mito_{idx}_Cristae",
            pts_cristae,
            z_bottom=0.22,
            z_top=0.275,
            half_width=0.036,
            groove_depth=0.04,
            mat_wall=mat_outer,
            mat_top_rim=mat_rim,
            mat_lumen=mat_matrix,
            closed=True,
        )
    )
    return objs


def build_piece_mitochondria():
    objs = []
    mito_specs = [
        # (center_xy, angle_deg, length, width) — matching the 5 orange mitochondria in Adobe Stock #2089488593
        ((-3.95, -0.45), 76.0, 1.65, 0.85),   # Mid-Left
        ((-2.80, 2.70), 34.0, 1.60, 0.83),    # Top-Left
        ((0.05, 4.02), 6.0, 1.58, 0.82),      # Top-Center
        ((0.15, -3.88), -10.0, 1.65, 0.85),   # Bottom-Center
        ((4.25, -0.35), -68.0, 1.62, 0.84),   # Mid-Right
    ]
    for idx, (cxy, ang, l_m, w_m) in enumerate(mito_specs):
        objs.extend(build_single_sliced_mitochondrion(idx, cxy, ang, l_m, w_m))
    return join_and_tilt_piece(objs, "Piece_Cell_Mitochondria")


# ==============================================================================
# 6. Piece_Cell_CytoskeletonCentrosome
# ==============================================================================
def build_piece_cytoskeleton_centrosome():
    objs = []
    mat_cent = get_bio_material("CentrioleGold", "#D9822B", roughness=0.26, metalness=0.08)
    mat_cyto = get_bio_material("CytoskeletonTan", "#BFA072", roughness=0.35, metalness=0.05)
    mat_ribo = get_bio_material("FreeRibosomeDark", "#10172E", roughness=0.35, metalness=0.10)

    # A. Centrosome: 3 Golden-Tan 9x3 Microtubule-Triplet Centriole Barrels at middle-left (-2.35, +0.65)
    bm_cent = bmesh.new()
    cent_specs = [
        (Vector((-2.55, 0.65, 0.08)), Euler((0.2, 1.35, 0.55)), 0.68),
        (Vector((-1.95, 1.15, 0.10)), Euler((1.2, 0.35, -0.45)), 0.65),
        (Vector((-1.90, 0.35, 0.08)), Euler((1.35, -0.25, 0.25)), 0.65),
    ]
    for c_pos, c_eul, c_len in cent_specs:
        rot_m = c_eul.to_matrix()
        p_a = c_pos - (rot_m @ Vector((0, 0, 0.5 * c_len)))
        p_b = c_pos + (rot_m @ Vector((0, 0, 0.5 * c_len)))
        for k in range(9):
            th = (2.0 * math.pi * k) / 9.0
            off_local = rot_m @ Vector((0.14 * math.cos(th), 0.14 * math.sin(th), 0.0))
            make_cylinder_between(bm_cent, p_a + off_local, p_b + off_local, 0.036, segs=8)
    objs.append(create_mesh_object("Cyto_Centrioles", bm_cent, mat_cent))

    # B. Criss-Crossing Tan/Beige Cytoskeletal Filaments across the Cytoplasm Floor
    bm_fil = bmesh.new()
    rng = np.random.default_rng(202)
    for f_i in range(30):
        ang0 = (2.0 * math.pi * f_i) / 30.0 + rng.uniform(-0.12, 0.12)
        ang1 = ang0 + rng.uniform(1.6, 2.7)
        r0 = rng.uniform(3.2, 5.1)
        r1 = rng.uniform(3.2, 5.1)
        p_start = Vector((r0 * math.cos(ang0), r0 * math.sin(ang0), -0.20 + rng.uniform(-0.04, 0.08)))
        p_end = Vector((r1 * math.cos(ang1), r1 * math.sin(ang1), -0.20 + rng.uniform(-0.04, 0.08)))
        p_mid = 0.5 * (p_start + p_end) + Vector((rng.uniform(-0.6, 0.6), rng.uniform(-0.6, 0.6), 0.04))
        prev_pt = p_start
        for s in range(1, 7):
            t = s / 6.0
            cur_pt = ((1 - t) ** 2) * p_start + 2 * (1 - t) * t * p_mid + (t ** 2) * p_end
            make_cylinder_between(bm_fil, prev_pt, cur_pt, 0.026, segs=6)
            prev_pt = cur_pt
    objs.append(create_mesh_object("Cyto_Filaments", bm_fil, mat_cyto))

    # C. Free Cytosolic Ribosome Granules (Polysome clusters scattered across the cytoplasm)
    bm_ribo = bmesh.new()
    for r_i in range(145):
        ang = rng.uniform(0.0, 2.0 * math.pi)
        rad = rng.uniform(2.3, 5.0)
        rx = rad * math.cos(ang)
        ry = rad * math.sin(ang)
        make_sphere_mesh(bm_ribo, Vector((rx, ry, -0.14 + rng.uniform(0.0, 0.22))), 0.036, segs=6, rings=5)
    objs.append(create_mesh_object("Cyto_FreeRibosomes", bm_ribo, mat_ribo))

    return join_and_tilt_piece(objs, "Piece_Cell_CytoskeletonCentrosome")


# ==============================================================================
# 7. Piece_Cell_LysosomePeroxisome
# ==============================================================================
def build_piece_lysosome_peroxisome():
    objs = []
    mat_lyso_shell = get_bio_material("LysosomeShell", "#89ADE8", roughness=0.16, metalness=0.05, alpha=0.74)
    mat_lyso_core = get_bio_material("LysosomeCore", "#5A4699", roughness=0.38, metalness=0.04)
    mat_cup = get_bio_material("EndosomeCup", "#6898DC", roughness=0.24, metalness=0.04)

    bm_shell = bmesh.new()
    bm_core = bmesh.new()

    # Intact glossy/translucent spherical lysosomes & peroxisomes (with inner granular core)
    sphere_locs = [
        ((-3.55, 1.35, 0.14), 0.35),
        ((-4.15, 0.55, 0.08), 0.27),
        ((-1.35, 3.55, 0.12), 0.31),
        ((-0.05, -1.75, 0.14), 0.33),
        ((0.40, -2.90, 0.10), 0.26),
        ((2.60, 3.25, 0.08), 0.23),
    ]
    for (sx, sy, sz), rad in sphere_locs:
        c = Vector((sx, sy, sz))
        make_sphere_mesh(bm_shell, c, rad, segs=20, rings=14)
        make_sphere_mesh(bm_core, c, rad * 0.72, segs=14, rings=10)

    objs.append(create_mesh_object("Lyso_Shells", bm_shell, mat_lyso_shell))
    objs.append(create_mesh_object("Lyso_Cores", bm_core, mat_lyso_core))

    # Half-sliced cup-shaped vesicles/endosomes
    cup_locs = [
        ((-3.38, -1.92, 0.02), 0.25),
        ((-0.95, -3.65, 0.02), 0.18),
        ((3.32, -2.02, 0.02), 0.23),
        ((3.95, 1.25, 0.02), 0.21),
    ]
    for c_i, ((cx, cy, cz), rad) in enumerate(cup_locs):
        bm_c = bmesh.new()
        bmesh.ops.create_uvsphere(bm_c, u_segments=24, v_segments=16, radius=rad)
        del_v = [v for v in bm_c.verts if v.co.z > 0.04]
        bmesh.ops.delete(bm_c, geom=del_v, context="VERTS")
        for v in bm_c.verts:
            v.co += Vector((cx, cy, cz))
        bmesh.ops.recalc_face_normals(bm_c, faces=bm_c.faces)
        cup_obj = create_mesh_object(f"Lyso_Cup_{c_i}", bm_c, mat_cup)
        solid = cup_obj.modifiers.new(name="Solid_Cup", type="SOLIDIFY")
        solid.thickness = 0.045
        bpy.context.view_layer.objects.active = cup_obj
        bpy.ops.object.modifier_apply(modifier="Solid_Cup")
        objs.append(cup_obj)

    return join_and_tilt_piece(objs, "Piece_Cell_LysosomePeroxisome")


def build_editorial_animal_cell_diorama():
    """
    Builds all 7 `Piece_Cell_*` objects for Scenario 01 (`01_eukaryotic_animal_cell`)
    matching the 3D Editorial Biomedical Cutaway Diorama style.
    """
    return [
        build_piece_plasma_membrane(),
        build_piece_nucleus(),
        build_piece_rough_smooth_er(),
        build_piece_golgi_stack(),
        build_piece_mitochondria(),
        build_piece_cytoskeleton_centrosome(),
        build_piece_lysosome_peroxisome(),
    ]
